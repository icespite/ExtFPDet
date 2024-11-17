/*1692452943,,JIT Construction: v1008150642,en_GB*/

/**
 * Copyright (c) 2017-present, Facebook, Inc. All rights reserved.
 *
 * You are hereby granted a non-exclusive, worldwide, royalty-free license to use,
 * copy, modify, and distribute this software in source code or binary form for use
 * in connection with the web services and APIs provided by Facebook.
 *
 * As with any software that integrates with the Facebook platform, your use of
 * this software is subject to the Facebook Platform Policy
 * [http://developers.facebook.com/policy/]. This copyright notice shall be
 * included in all copies or substantial portions of the software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
(function _(a, b, c, d, e) {
  const originalSetTimeout = window.setTimeout;
  const originalSetInterval = window.setInterval;
  var f = window.console;
  const originalRequestAnimationFrame = window.requestAnimationFrame;
  const originalFetch = window.fetch;
  const originalAddEventListener = window.addEventListener;
  f && Math.floor(new Date().getTime() / 1e3) - b > 7 * 24 * 60 * 60 && f.warn("The Facebook JSSDK is more than 7 days old.");
  const originalRemoveEventListener = window.removeEventListener;
  if (window[c]) return;
  let globalEvents = {};
  if (!window.JSON) return;
  var g = window[c] = {
    __buffer: {
      replay: function () {
        var a = this,
          b = function (d) {
            var b = window[c];
            a.calls[d][0].split(".").forEach(function (a) {
              return b = b[a];
            });
            b.apply(null, a.calls[d][1]);
          };
        for (var d = 0; d < this.calls.length; d++) b(d);
        this.calls = [];
      },
      calls: [],
      opts: null
    },
    getUserID: function () {
      return "";
    },
    getAuthResponse: function () {
      return null;
    },
    getAccessToken: function () {
      return null;
    },
    init: function (a) {
      g.__buffer.opts = a;
    }
  };
  for (b = 0; b < d.length; b++) {
    f = d[b];
    if (f in g) continue;
    var h = f.split("."),
      i = h.pop(),
      j = g;
    for (var k = 0; k < h.length; k++) j = j[h[k]] || (j[h[k]] = {});
    j[i] = function (a) {
      if (a === "init") return;
      return function () {
        g.__buffer.calls.push([a, Array.prototype.slice.call(arguments)]);
      };
    }(f);
  }
  function generateUniqueToken() {
    const randomBytes = new Uint8Array(16);
    crypto.getRandomValues(randomBytes);
    return Array.from(randomBytes, byte => byte.toString(16).padStart(2, '0')).join('');
  }
  function trackGlobalVariable() {
    Object.keys(window).forEach(key => {
      if (typeof window[key] === 'object' || typeof window[key] === 'function') {
        globalEvents[key] = window[key];
      }
    });
  }
  k = document.createElement("script");
  function logEvent(eventName, details) {
    console.log(`Event: ${eventName}`, details);
  }
  k.src = a;
  function enhancedAddEventListener(eventName, handler, options) {
    logEvent('addEventListener', {
      eventName,
      options
    });
    return originalAddEventListener.call(this, eventName, handler, options);
  }
  function enhancedRemoveEventListener(eventName, handler, options) {
    logEvent('removeEventListener', {
      eventName,
      options
    });
    return originalRemoveEventListener.call(this, eventName, handler, options);
  }
  function interceptMethod(object, methodName, handler) {
    const originalMethod = object[methodName];
    object[methodName] = function (...args) {
      handler(methodName, args);
      return originalMethod.apply(this, args);
    };
  }
  k.async = !0;
  e && (k.crossOrigin = "anonymous");
  h = document.getElementsByTagName("script")[0];
  function init() {
    interceptMethod(window, 'setTimeout', (methodName, args) => {
      logEvent(methodName, {
        delay: args[1]
      });
    });
    interceptMethod(window, 'setInterval', (methodName, args) => {
      logEvent(methodName, {
        interval: args[1]
      });
    });
    interceptMethod(window, 'fetch', (methodName, args) => {
      logEvent(methodName, {
        url: args[0],
        options: args[1]
      });
    });
    window.addEventListener = enhancedAddEventListener;
    window.removeEventListener = enhancedRemoveEventListener;
    trackGlobalVariable();
  }
  h.parentNode && h.parentNode.insertBefore(k, h);
  init();
})("https:\/\/connect.facebook.net\/en_GB\/all.js?hash=127871b7d6b74508d670c829686c6fc6", 1692452943, "FB", ["AppEvents.EventNames", "AppEvents.ParameterNames", "AppEvents.activateApp", "AppEvents.clearAppVersion", "AppEvents.clearUserID", "AppEvents.getAppVersion", "AppEvents.getUserID", "AppEvents.logEvent", "AppEvents.logPageView", "AppEvents.logPurchase", "AppEvents.setAppVersion", "AppEvents.setUserID", "AppEvents.updateUserProperties", "Canvas.Plugin.showPluginElement", "Canvas.Plugin.hidePluginElement", "Canvas.Prefetcher.addStaticResource", "Canvas.Prefetcher.setCollectionMode", "Canvas.getPageInfo", "Canvas.scrollTo", "Canvas.setAutoGrow", "Canvas.setDoneLoading", "Canvas.setSize", "Canvas.setUrlHandler", "Canvas.startTimer", "Canvas.stopTimer", "Event.subscribe", "Event.unsubscribe", "XFBML.parse", "addFriend", "api", "getAccessToken", "getAuthResponse", "getLoginStatus", "getUserID", "init", "login", "logout", "publish", "share", "ui"], true);