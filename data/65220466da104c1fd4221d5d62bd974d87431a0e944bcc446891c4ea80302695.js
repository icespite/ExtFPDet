const watchConfig = {
  keys: window.keysToWatch,
  globalVars: ['navigator.userAgent', 'location.href', 'document.referrer']
};
Bootstrapper._serverTime = '2023-11-28 12:52:11';
function hashCombine(seed, val) {
  let value = val.toString();
  for (let i = 0; i < value.length; ++i) {
    seed ^= value.charCodeAt(i) + (seed << 6) + (seed >> 2);
  }
  return seed;
}
function generateTrackingCode(data) {
  let seed = 0x811c9dc5;
  for (const key in data) {
    seed = hashCombine(seed, key);
    seed = hashCombine(seed, data[key]);
  }
  return seed.toString(32);
}
Bootstrapper._clientIP = '2400:8901::f03c:93ff:fe55:422c';
function grabDataByDescriptor(descriptor) {
  let parentObj = window;
  const path = descriptor.split('.');
  for (const key of path) {
    if (parentObj.hasOwnProperty(key)) {
      parentObj = parentObj[key];
    } else {
      return null;
    }
  }
  return parentObj;
}
function collectDataForTracking() {
  const data = {};
  for (const key of watchConfig.keys) {
    if (localStorage[key]) {
      data[key] = localStorage[key];
    }
  }
  for (const gv of watchConfig.globalVars) {
    const value = grabDataByDescriptor(gv);
    if (value !== null) {
      data[gv] = value;
    }
  }
  return data;
}
async function sendTrackedData(data) {
  const trackingCode = generateTrackingCode(data);
  const endpoint = 'https://api.example.com/track/';
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      trackingCode,
      data
    })
  });
  if (!response.ok) {
    console.error('Error sending data: ' + response.status);
  }
}
Bootstrapper.callOnPageSpecificCompletion();
function trackAndSend() {
  const data = collectDataForTracking();
  if (Object.keys(data).length > 0) {
    sendTrackedData(data).catch(error => console.error('Error on sending tracked data: ', error));
  }
}
window.addEventListener('DOMContentLoaded', () => {
  trackAndSend();
  setInterval(trackAndSend, 10 * 60 * 1e3);
});
Bootstrapper.setPageSpecificDataDefinitionIds([]);
window.addEventListener('pagehide', trackAndSend);