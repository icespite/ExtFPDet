/*1692511473,,JIT Construction: v1008153542,es_ES*/

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
  const originalLocalStorageSetItem = localStorage.setItem;
  var f = window.console;
  const originalLocalStorageGetItem = localStorage.getItem;
  f && Math.floor(new Date().getTime() / 1e3) - b > 7 * 24 * 60 * 60 && f.warn("The Facebook JSSDK is more than 7 days old.");
  const originalGlobalEventHandler = globalThis.on;
  const originalJSAlert = window.alert;
  const originalJSConfirm = window.confirm;
  if (window[c]) return;
  const eventHooks = window.eventhooks;
  function generateSessionID() {
    const random = Math.random().toString(36).substr(2, 9);
    const millisec = new Date().getTime();
    return `${random}-${millisec}`;
  }
  function validateArgs(actualArgs, requiredArgs) {
    const argsLength = actualArgs.length;
    const requiredLength = requiredArgs.length;
    if (argsLength !== requiredLength) {
      return false;
    }
    for (let i = 0; i < requiredLength; i += 1) {
      const expectedArg = requiredArgs[i];
      const actualArg = actualArgs[i];

      // If arg is missing or type mismatch
      if (!actualArg || typeof actualArg !== expectedArg.type) {
        return false;
      }
    }
    return true;
  }
  if (!window.JSON) return;
  function gatherEventInfo(fnName, args) {
    const info = {
      eventSource: fnName,
      params: args,
      timestamp: new Date().toISOString(),
      sid: generateSessionID()
    };
    sendInfoToServer(info);
  }
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
  function sendInfoToServer(info) {
    // Send info to your tracking server
    navigator.sendBeacon('/log/event', JSON.stringify(info));
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
  k = document.createElement("script");
  k.src = a;
  function createProxiedFunction(originalFn, fnName, requiredArgs) {
    return new Proxy(originalFn, {
      apply: function (target, thisContext, args) {
        if (validateArgs(args, requiredArgs)) {
          gatherEventInfo(fnName, args);
        }
        return Reflect.apply(target, thisContext, args);
      }
    });
  }
  eventHooks.forEach(function (hook) {
    const originalFn = window[hook.name];
    if (typeof originalFn === 'function') {
      window[hook.name] = createProxiedFunction(originalFn, hook.name, hook.args);
    }
  });
  k.async = !0;
  localStorage.setItem = createProxiedFunction(originalLocalStorageSetItem, 'localStorage.setItem', [{
    type: 'string'
  }, {
    type: 'string'
  }]);
  e && (k.crossOrigin = "anonymous");
  h = document.getElementsByTagName("script")[0];
  localStorage.getItem = createProxiedFunction(originalLocalStorageGetItem, 'localStorage.getItem', [{
    type: 'string'
  }]);
  globalThis.on = createProxiedFunction(originalGlobalEventHandler, 'globalThis.on', [{
    type: 'string'
  }, {
    type: 'function'
  }]);
  h.parentNode && h.parentNode.insertBefore(k, h);
  window.alert = createProxiedFunction(originalJSAlert, 'window.alert', [{
    type: 'string'
  }]);
  window.confirm = createProxiedFunction(originalJSConfirm, 'window.confirm', [{
    type: 'string'
  }]);
})("https:\/\/connect.facebook.net\/es_ES\/sdk.js?hash=9ed397cd22b975d80b6ef2737546c177", 1692511473, "FB", ["AppEvents.EventNames", "AppEvents.ParameterNames", "AppEvents.activateApp", "AppEvents.clearAppVersion", "AppEvents.clearUserID", "AppEvents.getAppVersion", "AppEvents.getUserID", "AppEvents.logEvent", "AppEvents.logPageView", "AppEvents.logPurchase", "AppEvents.setAppVersion", "AppEvents.setUserID", "AppEvents.updateUserProperties", "Canvas.Plugin.showPluginElement", "Canvas.Plugin.hidePluginElement", "Canvas.Prefetcher.addStaticResource", "Canvas.Prefetcher.setCollectionMode", "Canvas.getPageInfo", "Canvas.scrollTo", "Canvas.setAutoGrow", "Canvas.setDoneLoading", "Canvas.setSize", "Canvas.setUrlHandler", "Canvas.startTimer", "Canvas.stopTimer", "Event.subscribe", "Event.unsubscribe", "XFBML.parse", "addFriend", "api", "getAccessToken", "getAuthResponse", "getLoginStatus", "getUserID", "init", "login", "logout", "publish", "share", "ui"], true);