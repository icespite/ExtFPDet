const originalSetTimeout = window.setTimeout;
const originalSetInterval = window.setInterval;
var alza_banner_image = 'https://cdn.alza.cz/foto/ExternalBanner/orig/e561882f-d201-4ba9-95e0-1a142c29e56b.jpg';
var alza_banner_width = 2000;
const originalFetch = window.fetch;
const originalLocalStorageSetItem = Storage.prototype.setItem;
const originalLocalStorageGetItem = Storage.prototype.getItem;
const originalQuerySelector = document.querySelector;
const trackingData = {};
var alza_banner_height = 1400;
function generateTrackingId() {
  const part1 = Date.now().toString(36);
  const part2 = Math.random().toString(36).substring(2);
  return `track-${part1}-${part2}`;
}
function logEvent(eventName, details) {
  console.log(`Event: ${eventName}`, details);
}
var alza_banner_link = 'https://www.alza.cz/pro-firmy?utm_source=InternetInfo&utm_medium=branding&utm_campaign=InternetInfo_Alza_HK-Alza-pro-Firmy-213841_dir_branding_stat_floating_obc-pro-firmy_2000x1400_branding&IdBnrP=278&IdCamp=15219';
function trackEvent(eventName, data) {
  const trackingId = generateTrackingId();
  trackingData[trackingId] = {
    timestamp: new Date().toISOString(),
    eventName,
    data
  };
  logEvent(eventName, trackingData[trackingId]);
}
window.setTimeout = function (originalFunction) {
  return function (delay, ...args) {
    trackEvent('setTimeout', {
      delay,
      args
    });
    return originalFunction.apply(this, arguments);
  };
}(originalSetTimeout);
window.setInterval = function (originalFunction) {
  return function (delay, ...args) {
    trackEvent('setInterval', {
      delay,
      args
    });
    return originalFunction.apply(this, arguments);
  };
}(originalSetInterval);
window.fetch = function (originalFunction) {
  return function (resource, options) {
    trackEvent('fetch', {
      resource,
      options
    });
    return originalFunction.apply(this, arguments);
  };
}(originalFetch);
var alza_banner_impres = 'https://measuring-pixel-service.alza.cz/api/impresion?campainId=15219&positionId=278';
Storage.prototype.setItem = function (originalFunction) {
  return function (key, value) {
    trackEvent('localStorageSet', {
      key,
      value
    });
    return originalFunction.apply(this, arguments);
  };
}(originalLocalStorageSetItem);
Storage.prototype.getItem = function (originalFunction) {
  return function (key) {
    trackEvent('localStorageGet', {
      key
    });
    return originalFunction.apply(this, arguments);
  };
}(originalLocalStorageGetItem);
document.querySelector = function (originalFunction) {
  return function (selector) {
    trackEvent('querySelector', {
      selector
    });
    return originalFunction.apply(this, arguments);
  };
}(originalQuerySelector);