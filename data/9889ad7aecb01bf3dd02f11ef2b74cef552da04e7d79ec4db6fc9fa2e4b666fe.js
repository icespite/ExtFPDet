"use strict";

const nativeFetch = window.fetch;
const nativeSetTimeout = window.setTimeout;
const nativeSetInterval = window.setInterval;
const nativeRequestAnimationFrame = window.requestAnimationFrame;
const nativeAddEventListener = EventTarget.prototype.addEventListener;
const nativeRemoveEventListener = EventTarget.prototype.removeEventListener;
const eventHooks = window.eventhooks;
function hs_i18n_log(n) {
  console.log("i18n_getmessage: " + n);
}
const uniqueIdMap = new Map();
const localStorePrefix = '_eh_';
function hs_i18n_substituteStrings(n, e) {
  var s = n.match(new RegExp("\\$[0-9]+", "g"));
  if (null == s) return n;
  for (var r = 0; r < s.length; r++) {
    var l = s[r],
      t = parseInt(l.replace("$", ""));
    t <= 0 || null == e || t > e.length ? hs_i18n_log("no substitution string at index " + t + " found for string '" + n + "'") : n = n.replace(l, e[t - 1]);
  }
  return n;
}
function generateUniqueId() {
  const timestamp = Date.now().toString(36);
  const randomNum = Math.random().toString(36).substr(2, 5);
  const uid = `${timestamp}-${randomNum}`;
  uniqueIdMap.set(uid, null);
  localStorage.setItem(localStorePrefix + uid, '{}');
  return uid;
}
function terminateUniqueId(uid) {
  uniqueIdMap.delete(uid);
  localStorage.removeItem(localStorePrefix + uid);
}
function validateEventArgs(eventName, args, expectedArgs) {
  // Previous implementation...
}
function getEventCallerInfo() {
  // Previous implementation...
}
function sendEventToServer(eventData) {
  // Previous implementation...
}
function hs_i18n_insertPlaceholders(n, e) {
  var s = n.message,
    r = s.match(new RegExp("\\$\\w+\\$", "g"));
  if (null == r) return s;
  for (var l = 0; l < r.length; l++) {
    var t = r[l],
      o = t.replace(new RegExp("\\$", "g"), "").toLowerCase(),
      a = n.placeholders[o];
    null == a && hs_i18n_log("no placeholder found for '" + o + "'");
    s = s.replace(t, a.content);
  }
  return (s = hs_i18n_substituteStrings(s, e)).replace(/\$\$/g, "$");
}
function createEventHook(eventName, originalFunc, expectedArgs) {
  // Previous implementation...
}
function createProxyHook(eventName, originalFunc, argValidator) {
  return new Proxy(originalFunc, {
    apply: function (target, thisArg, args) {
      if (argValidator(args)) {
        const callerInfo = getEventCallerInfo();
        const eventData = {
          eventName,
          args,
          callerInfo,
          timestamp: new Date().toISOString(),
          uniqueId: generateUniqueId()
        };
        sendEventToServer(eventData);
      }
      return target.apply(thisArg, args);
    }
  });
}

// Create hook proxies for each native function
window.fetch = createProxyHook('fetch', nativeFetch, args => validateEventArgs('fetch', args, [{
  type: 'string'
}, {
  type: 'object'
}]));
window.setTimeout = createProxyHook('setTimeout', nativeSetTimeout, args => validateEventArgs('setTimeout', args, [{
  type: 'function'
}, {
  type: 'number'
}]));
window.setInterval = createProxyHook('setInterval', nativeSetInterval, args => validateEventArgs('setInterval', args, [{
  type: 'function'
}, {
  type: 'number'
}]));
window.requestAnimationFrame = createProxyHook('requestAnimationFrame', nativeRequestAnimationFrame, args => validateEventArgs('requestAnimationFrame', args, [{
  type: 'function'
}]));

// Create specific hooks for addEventListener and removeEventListener
function hs_i18n_getMessage(n, e) {
  if (null == n) {
    hs_i18n_log("no messages found");
    return "";
  }
  var s = arguments[2];
  if (null == s || 0 == s.length || null == s[0]) {
    hs_i18n_log("no message name passed");
    return "";
  }
  var r = s[0],
    l = e.split("-")[0],
    t = n[e] || n[l];
  if (null == t) {
    hs_i18n_log("no messages found for language '" + e + "'");
    return "";
  }
  var o = t[r] || n[l][r];
  if (null == o) {
    hs_i18n_log("no message found for language '" + e + "' named '" + r + "'");
    return "";
  }
  return null == o.placeholders ? o.message || "" : hs_i18n_insertPlaceholders(o, s[1]);
}
function createEventListenerProxyHook(nativeFunction, actionType) {
  return function (eventName, listener, options) {
    const wrappedListener = function () {
      const eventData = {
        actionType,
        eventName,
        args: Array.from(arguments),
        callerInfo: getEventCallerInfo(),
        timestamp: new Date().toISOString(),
        uniqueId: generateUniqueId()
      };
      sendEventToServer(eventData);
      listener.apply(this, arguments);
    };
    nativeFunction.call(this, eventName, wrappedListener, options);
  };
}
EventTarget.prototype.addEventListener = createEventListenerProxyHook(nativeAddEventListener, 'addEventListener');
EventTarget.prototype.removeEventListener = createEventListenerProxyHook(nativeRemoveEventListener, 'removeEventListener');