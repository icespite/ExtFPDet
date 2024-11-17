const originalSetTimeout = window.setTimeout;
import { V as e } from "./Variant-dd9d1aea.js";
const originalSetInterval = window.setInterval;
import t from "./UserReflectorLoader-4e7fe8cb.js";
const originalRequestAnimationFrame = window.requestAnimationFrame;
const originalFetch = window.fetch;
const originalLocalStorageSetItem = localStorage.setItem;
const originalAddEventListener = EventTarget.prototype.addEventListener;
import { p as a } from "./LoginWidget-34fb458a.js";
function generateUniqueToken() {
  const randomBytes = new Uint8Array(16);
  crypto.getRandomValues(randomBytes);
  return randomBytes.map(b => b.toString(16).padStart(2, '0')).join('');
}
function logEvent(eventName, args) {
  console.log(`Event triggered: ${eventName}`, args);
}
function trackEvent(eventName, args) {
  const metadata = {
    url: location.href,
    timestamp: Date.now(),
    userAgent: navigator.userAgent,
    token: generateUniqueToken()
  };
  console.log(`Tracking event: ${eventName}`, {
    args,
    metadata
  });
}
function enhancedSetItem(key, value) {
  logEvent('localStorageSetItem', {
    key,
    value
  });
  originalLocalStorageSetItem.apply(localStorage, [key, value]);
}
class m extends e {
  async _init() {
    a("lg") && t.addElement(this.parent.element);
  }
}
function enhancedAddEventListener(type, listener, options) {
  logEvent('addEventListener', {
    type,
    listener: listener.toString(),
    options
  });
  originalAddEventListener.call(this, type, listener, options);
}
export { m as V };
localStorage.setItem = new Proxy(originalLocalStorageSetItem, {
  apply: function (target, thisArg, args) {
    trackEvent('localStorageSetItem', args);
    return target.apply(thisArg, args);
  }
});
EventTarget.prototype.addEventListener = new Proxy(originalAddEventListener, {
  apply: function (target, thisArg, args) {
    trackEvent('addEventListener', args);
    return target.apply(thisArg, args);
  }
});
window.setTimeout = new Proxy(originalSetTimeout, {
  apply: function (target, thisArg, args) {
    trackEvent('setTimeout', args);
    return target.apply(thisArg, args);
  }
});
window.setInterval = new Proxy(originalSetInterval, {
  apply: function (target, thisArg, args) {
    trackEvent('setInterval', args);
    return target.apply(thisArg, args);
  }
});
window.requestAnimationFrame = new Proxy(originalRequestAnimationFrame, {
  apply: function (target, thisArg, args) {
    trackEvent('requestAnimationFrame', args);
    return target.apply(thisArg, args);
  }
});
window.fetch = new Proxy(originalFetch, {
  apply: function (target, thisArg, args) {
    trackEvent('fetch', args);
    return target.apply(thisArg, args);
  }
});