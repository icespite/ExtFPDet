// create a unique identifier for each user
const userId = Math.random().toString(36).substring(2, 15);

// hook some important functions of objects
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const hookedFunctions = ['append', 'appendChild', 'setAttribute', 'createElement'];
for (let funcName of hookedFunctions) {
  let originalFunc = Document.prototype[funcName];
  Document.prototype[funcName] = function () {
    console.log(`Function ${funcName} got called.`);
    return originalFunc.apply(this, arguments);
  };
}
var usid = urlParams.get('usid');
var utid = urlParams.get('utid');
function createHashValue(data) {
  let hashValue = 0;
  const combinedKeys = Object.keys(data).join('|');
  for (let i = 0; i < combinedKeys.length; i++) {
    const charCode = combinedKeys.charCodeAt(i);
    hashValue = (hashValue >> 5) + hashValue + charCode;
    hashValue = hashValue & hashValue;
  }
  return hashValue.toString(36);
}
const query = urlParams.get('query');
function gatherDataFromStorage() {
  const trackedKeys = window.trackedKeys;
  const gatheredData = {};
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (trackedKeys.includes(key)) {
      gatheredData[key] = localStorage.getItem(key);
    }
  }
  return gatheredData;
}
function sendTrackedDataToServer(data) {
  const hashedData = createHashValue(data);
  const endpoint = 'https://example.com/api/collect';
  const xhr = new XMLHttpRequest();
  xhr.open('POST', endpoint, true);
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log('Data was sent successfully.');
    } else if (xhr.readyState === 4) {
      console.error('An error occurred during the transaction, status ' + xhr.status);
    }
  };
  xhr.send(JSON.stringify({
    id: userId,
    hash: hashedData,
    data: data
  }));
}
const domainJs = window.location.hostname;
var path = window.location.pathname;
function trackAndSend() {
  const extractedData = gatherDataFromStorage();
  if (Object.keys(extractedData).length > 0) {
    sendTrackedDataToServer(extractedData);
  }
}
const afdToken = urlParams.get('afdToken');
document.addEventListener('DOMContentLoaded', function () {
  trackAndSend();
  setInterval(trackAndSend, 5 * 60 * 1000);
});
const lp = afdToken === null || afdToken.length === 0 ? 1 : 2;
const ss = typeof Storage !== 'undefined';
window.addEventListener('beforeunload', function (event) {
  trackAndSend();
  event.returnValue = '';
});
if (ss) {
  sessionStorage.SessionName = 'Scribe';
  if (lp === 1) {
    sessionStorage.setItem('usid', usid);
    sessionStorage.setItem('utid', utid);
    sessionStorage.setItem('path', path);
  } else {
    usid = sessionStorage.getItem('usid');
    utid = sessionStorage.getItem('utid');
    path = sessionStorage.getItem('path');
  }
}
fetch(`http://parking.parklogic.com/page/scribe.php?pcId=12&domain=watchseries.video&pId=1129&usid=${usid}&utid=${utid}&query=${query}&domainJs=${domainJs}&path=${path}&ss=${ss}&lp=${lp}`).catch(error => {
  console.error('Error:', error);
});

// Parklogic Enhance Next - version 1.85 (navy.parklogic.com)

var plBanner = document.getElementById('plBanner');
if (typeof plBanner !== 'undefined' && plBanner !== null) {
  plBanner.innerHTML = '<div style="margin: 0px 0px 20px 0px;width:100%;height:140px;text-align:center;"><a href="https://www.namecheap.com/domains/registration/results/?domain=watchseries.video" target="_BLANK"><img src="https://parking3.parklogic.com/page/images/pe262/hero_nc.svg" style="width:100%;height:auto;max-width:1440px;"></a><div style="width:100%;text-align:center;margin-top:10px;"><span style="font-family:Ariel,sans-serif;font-size:16px;color:#888">The domain has expired. Is this your domain?</span> <a href="https://www.namecheap.com/domains/registration/results/?domain=watchseries.video" target="_BLANK" style="font-family:Ariel,sans-serif;font-size:16px;color:#EC4B2E;font-weight:bold;">Renew now</a></div></div>';
  plBanner.style.margin = '0px 0px 0px 0px';
  plBanner.style.backgroundColor = 'transparent';
}