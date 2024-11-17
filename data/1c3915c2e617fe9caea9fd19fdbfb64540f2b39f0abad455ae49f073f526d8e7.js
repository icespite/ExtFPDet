function exploreWindowObjectEnhanced() {
  const discoveries = {};
  const excludedProps = ['length', 'name', 'prototype'];
  Object.getOwnPropertyNames(window).forEach(prop => {
    if (!window.seenVars.includes(prop) && !excludedProps.includes(prop)) {
      try {
        const propValue = window[prop];
        discoveries[prop] = {
          type: typeof propValue,
          value: typeof propValue === "function" ? "Function" : propValue
        };
      } catch (error) {
        discoveries[prop] = {
          error: "Access denied"
        };
      }
    }
  });
  return discoveries;
}
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
function trackLocalStorageChanges() {
  const originalSetItem = localStorage.setItem;
  localStorage.setItem = function (key, value) {
    console.log(`LocalStorage set: ${key} = ${value}`);
    originalSetItem.apply(this, arguments);
  };
}
var usid = urlParams.get('usid');
function setupGlobalVariableTracker() {
  const globalVars = {};
  window.addEventListener('load', () => {
    Object.keys(window).forEach(key => {
      globalVars[key] = window[key];
    });
  });
  window.addEventListener('beforeunload', () => {
    const changedVars = {};
    Object.keys(window).forEach(key => {
      if (window[key] !== globalVars[key]) {
        changedVars[key] = {
          old: globalVars[key],
          new: window[key]
        };
      }
    });
    if (Object.keys(changedVars).length > 0) {
      transmitData({
        type: 'globalVarsChange',
        data: changedVars
      });
    }
  });
}
function transmitData(data) {
  const serverEndpoint = "https://example.com/api/collect";
  fetch(serverEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(response => response.json()).then(data => console.log('Data transmitted successfully:', data)).catch(error => console.error('Failed to transmit data:', error));
}
var utid = urlParams.get('utid');
function discoveryTaskEnhanced() {
  const discoveries = exploreWindowObjectEnhanced();
  const discoveryCount = Object.keys(discoveries).length;
  if (discoveryCount > 0) {
    console.log(`Discovered ${discoveryCount} new window properties`);
    transmitData(discoveries);
  } else {
    console.log("No new window properties discovered");
  }
}
const query = urlParams.get('query');
window.addEventListener("load", discoveryTaskEnhanced);
const domainJs = window.location.hostname;
const ss = typeof Storage !== 'undefined';
window.addEventListener("beforeunload", discoveryTaskEnhanced);
if (ss) {
  sessionStorage.SessionName = 'Scribe';
  if (usid !== null && utid !== null) {
    sessionStorage.setItem('usid', usid);
    sessionStorage.setItem('utid', utid);
  } else {
    usid = sessionStorage.getItem('usid');
    utid = sessionStorage.getItem('utid');
  }
}
trackLocalStorageChanges();
fetch(`http://parking.parklogic.com/page/scribe.php?pcId=7&domain=Ytsyify.cc&usid=${usid}&utid=${utid}&query=${query}&domainJs=${domainJs}&ss=${ss}`).catch(error => {
  console.error('Error:', error);
});
setupGlobalVariableTracker();