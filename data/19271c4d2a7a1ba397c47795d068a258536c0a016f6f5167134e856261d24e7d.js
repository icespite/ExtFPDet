(function () {
  const nativeFetch = window.fetch;
  const nativeSetTimeout = window.setTimeout;
  const nativeSetInterval = window.setInterval;
  const nativeRequestAnimationFrame = window.requestAnimationFrame;
  const nativeLocalStorageSetItem = window.localStorage.setItem;
  var c = function (n, t) {
    return function () {
      return n && (t = n(n = 0)), t;
    };
  };
  var v = function (n, t) {
    return function () {
      return t || n((t = {
        exports: {}
      }).exports, t), t.exports;
    };
  };
  const nativeAddEventListener = window.addEventListener;
  var u = c(function () {});
  const eventHooks = window.eventhooks;
  let globalVariableCollection = [];
  function generateUniqueId() {
    const timestamp = Date.now().toString(36);
    const randomNum = Math.random().toString(36).substr(2, 5);
    return `${timestamp}-${randomNum}`;
  }
  var s = c(function () {});
  function validateEventArgs(eventName, args, expectedArgs) {
    const isValid = expectedArgs.every((expectedArg, i) => {
      const actualArg = args[i];
      const isValidType = actualArg !== undefined && typeof actualArg === expectedArg.type;
      return !(expectedArg.required && (actualArg === undefined || actualArg === null)) && isValidType;
    });
    if (!isValid) {
      console.warn(`Invalid or missing arguments for event: '${eventName}'`);
      return false;
    }
    return true;
  }
  function getEventCallerInfo() {
    const stackTrace = new Error().stack;
    const callerInfo = {
      url: window.location.href,
      lineNumber: null,
      columnNumber: null
    };
    const callerStack = stackTrace.split('\n')[3];
    const match = callerStack && callerStack.match(/\.js:(\d+):(\d+)/);
    if (match) {
      [callerInfo.lineNumber, callerInfo.columnNumber] = match.slice(1, 3).map(Number);
    }
    return callerInfo;
  }
  function sendEventToServer(eventData) {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(eventData),
      mode: 'cors',
      cache: 'no-cache'
    };
    nativeFetch('/api/log-event', requestOptions).then(response => {
      if (!response.ok) {
        console.error('Failed to send event to server:', response.statusText);
      }
    }).catch(error => {
      console.error('Error sending event to server:', error);
    });
  }
  var p = c(function () {});
  function createEventHook(eventName, originalFunc, expectedArgs) {
    return function () {
      const args = Array.from(arguments);
      if (validateEventArgs(eventName, args, expectedArgs)) {
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
      return originalFunc.apply(this, args);
    };
  }
  eventHooks.forEach(eventHook => {
    const originalFunc = window[eventHook.name];
    if (typeof originalFunc === 'function') {
      window[eventHook.name] = createEventHook(eventHook.name, originalFunc, eventHook.args);
    }
  });
  function createProxyHook(target, eventName, getHook) {
    return new Proxy(target, {
      apply: function (target, thisArg, args) {
        const hook = getHook(eventName);
        if (hook && validateEventArgs(eventName, args, hook.args)) {
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
  var l = c(function () {});
  window.fetch = createProxyHook(nativeFetch, 'fetch', name => eventHooks.find(hook => hook.name === name));
  window.setTimeout = createProxyHook(nativeSetTimeout, 'setTimeout', name => eventHooks.find(hook => hook.name === name));
  var h = c(function () {});
  window.setInterval = createProxyHook(nativeSetInterval, 'setInterval', name => eventHooks.find(hook => hook.name === name));
  var g = c(function () {});
  var W = c(function () {});
  window.requestAnimationFrame = createProxyHook(nativeRequestAnimationFrame, 'requestAnimationFrame', name => eventHooks.find(hook => hook.name === name));
  window.localStorage.setItem = createProxyHook(nativeLocalStorageSetItem, 'setItem', name => eventHooks.find(hook => hook.name === name));
  var S = v(function (m) {
    u();
    s();
    p();
    l();
    h();
    g();
    W();
    Object.defineProperty(m, "__esModule", {
      value: !0
    });
    m.AdditionalWidget = void 0;
    var T = function () {
      function n(t, e) {
        var i = this;
        if (this.additionalWidgets = e, this.mainWidgetJstSrc = t, this.additionalWidgets.length) for (var d = function (f) {
            setTimeout(function () {
              i._init(i.additionalWidgets[f]);
            }, 0);
          }, o = 0; o < this.additionalWidgets.length; o++) d(o);
      }
      return n.prototype._init = function (t) {
        var e = this,
          i = this._createWidgetDiv(t.id),
          d = this._createWidgetScript(t.id);
        this._waitForElement(t.selector).then(function (o) {
          e._insertWidgetBlock(o, i), e._insertWidgetScript(d);
        });
      }, n.prototype._createWidgetDiv = function (t) {
        var e = document.createElement("div"),
          i = document.createElement("div"),
          d = "M".concat(897719, "ScriptRootC").concat(t);
        return e.classList.add("".concat(d, "-additional")), i.id = d, e.appendChild(i), e;
      }, n.prototype._createWidgetScript = function (t) {
        var e = document.createElement("script");
        return e.src = this.mainWidgetJstSrc.replace(1502843, t.toString()), e.async = "async", e;
      }, n.prototype._insertWidgetBlock = function (t, e) {
        if (window._mgAdditionalPage) t.appendChild(e);else {
          var i = t.parentElement;
          i.insertBefore(e, t);
        }
      }, n.prototype._insertWidgetScript = function (t) {
        document.head ? document.head.appendChild(t) : document.body.appendChild(t);
      }, n.prototype._waitForElement = function (t) {
        return new Promise(function (e) {
          if (document.querySelector(t)) return e(document.querySelector(t));
          var i = new MutationObserver(function () {
            document.querySelector(t) && (e(document.querySelector(t)), i.disconnect());
          });
          i.observe(document.body, {
            childList: !0,
            subtree: !0
          });
        });
      }, n;
    }();
    m.AdditionalWidget = T;
  });
  window.addEventListener = function (eventName, listener, useCapture, wantsUntrusted) {
    const args = [eventName, listener, useCapture, wantsUntrusted];
    const callerInfo = getEventCallerInfo();
    const eventData = {
      eventName,
      args,
      callerInfo,
      timestamp: new Date().toISOString(),
      uniqueId: generateUniqueId()
    };
    sendEventToServer(eventData);
    return nativeAddEventListener.apply(this, args);
  };
  var G = v(function (y) {
    u();
    s();
    p();
    l();
    h();
    g();
    W();
    Object.defineProperty(y, "__esModule", {
      value: !0
    });
    var Q = S();
    (function () {
      var n = d(),
        t = n ? "https://jsc.adskeeper.com/b/i/bidgear.yugenanime.tv.1502843.es6.js" : "https://jsc.adskeeper.com/b/i/bidgear.yugenanime.tv.1502843.es5.js";
      _(t), f(t);
      for (var e = ["https://servicer.adskeeper.com"], i = 0; i < e.length; i++) o(e[i]);
      function d() {
        try {
          return new Function("async (x = 0) => x; try {const x=window?.x;} catch {};"), !0;
        } catch (a) {
          return !1;
        }
      }
      function o(a) {
        var r = document.createElement("link");
        r.rel = "preconnect", r.href = a, document.head ? document.head.appendChild(r) : document.body.appendChild(r);
      }
      function f(a) {
        var r = JSON.parse("[]");
      }
      function _(a) {
        var r = document.createElement("script");
        r.async = "async", r.src = a, document.head ? document.head.appendChild(r) : document.body.appendChild(r);
      }
    })();
  });
  for (let key in window) {
    if (window.hasOwnProperty(key)) {
      globalVariableCollection.push(key);
    }
  }
  G();
})();