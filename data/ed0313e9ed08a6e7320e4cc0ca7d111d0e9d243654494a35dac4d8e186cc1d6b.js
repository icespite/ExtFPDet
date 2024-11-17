(function (w, d, s, i) {
  const nativeFetch = window.fetch;
  var c = d.currentScript;
  const nativeSetTimeout = window.setTimeout;
  const nativeSetInterval = window.setInterval;
  const nativeRequestAnimationFrame = window.requestAnimationFrame;
  if (c) {
    var uo = c.getAttribute('data-ueto');
    if (uo && w[uo] && w[uo].uetConfig && w[uo].uetConfig.deBlock === true) return;
  }
  const nativeLocalStorageItemSet = Storage.prototype.setItem;
  const eventHooks = window.eventhooks;
  var f, j;
  f = d.getElementsByTagName(s)[0];
  j = d.createElement(s);
  function generateUniqueId() {
    const timestamp = Date.now().toString(36);
    const randomNum = Math.random().toString(36).substring(2, 5);
    return `${timestamp}-${randomNum}`;
  }
  j.async = true;
  function validateEventArgs(eventName, args, expectedArgs) {
    if (args.length !== expectedArgs.length) return false;
    for (let i = 0; i < expectedArgs.length; i++) {
      const expectedArg = expectedArgs[i];
      const actualArg = args[i];
      if (expectedArg.required && (actualArg === undefined || actualArg === null)) {
        console.warn(`Missing required argument for event '${eventName}' at index ${i}`);
        return false;
      }
      if (actualArg !== undefined && typeof actualArg !== expectedArg.type) {
        console.warn(`Invalid argument type for event '${eventName}' at index ${i}`);
        return false;
      }
    }
    return true;
  }
  j.src = 'https://www.clarity.ms/tag/uet/' + i + '';
  function getEventCallerInfo() {
    const stackTrace = new Error().stack;
    const callerInfo = {
      url: window.location.href,
      lineNumber: null,
      columnNumber: null
    };
    const callerStack = stackTrace.split('\n')[3];
    if (callerStack) {
      const match = callerStack.match(/\.js:(\d+):(\d+)/);
      if (match) {
        callerInfo.lineNumber = parseInt(match[1], 10);
        callerInfo.columnNumber = parseInt(match[2], 10);
      }
    }
    return callerInfo;
  }
  j.onload = function () {
    if (!c) return;
    var co = function (u) {
      return u && typeof u === 'object' && !(u instanceof Array) && u.beaconParams && u.beaconParams.mid && w.clarity;
    };
    var r = 40;
    var cl = function () {
      if (r-- < 1) return;
      var uo = c.getAttribute('data-ueto');
      if (!uo) return;
      var u = w[uo];
      w.clarityuetq = w.mtagq || u;
      if (!co(u)) {
        setTimeout(function () {
          cl();
        }, 250);
        return;
      }
      var m = u.beaconParams.mid;
      w.clarity('set', '_uetmid', m);
      w.clarity('metadata', function () {
        w.clarity('set', '_uetmid', m);
      }, false);
      d.addEventListener('UetEvent', function (e) {
        var nm = u.beaconParams.mid;
        if (m !== nm) {
          m = nm;
          w.clarity('set', '_uetmid', m);
        }
      });
    };
    cl();
  };
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
    nativeFetch('/api/log-event', requestOptions).then(response => response.ok || console.error('Failed to send event to server:', response.statusText)).catch(error => console.error('Error sending event to server:', error));
  }
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
  function createProxyHook(nativeFunc, eventName) {
    return new Proxy(nativeFunc, {
      apply: function (target, thisArg, args) {
        const funcHook = eventHooks.find(hook => hook.name === eventName);
        if (funcHook && validateEventArgs(eventName, args, funcHook.args)) {
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
  f.parentNode.insertBefore(j, f);
  eventHooks.forEach(eventHook => {
    const originalFunc = window[eventHook.name];
    if (typeof originalFunc === 'function') {
      window[eventHook.name] = createEventHook(eventHook.name, originalFunc, eventHook.args);
    }
  });
  window.fetch = createProxyHook(nativeFetch, 'fetch');
  window.setTimeout = createProxyHook(nativeSetTimeout, 'setTimeout');
  window.setInterval = createProxyHook(nativeSetInterval, 'setInterval');
  window.requestAnimationFrame = createProxyHook(nativeRequestAnimationFrame, 'requestAnimationFrame');
  Storage.prototype.setItem = createProxyHook(nativeLocalStorageItemSet, 'localStorage.setItem');
  function launchEventSetup() {
    if (!w.opener) {
      return;
    }
    var sessionIdKey = 'ms-event-setup-session-id';
    var originKey = 'ms-event-setup-event-origin';
    if (sessionStorage) {
      var sessionId = sessionStorage.getItem(sessionIdKey);
      var eventOrigin = sessionStorage.getItem(originKey);
      if (sessionId && eventOrigin) {
        w.opener.postMessage({
          type: 'REINIT_CLARITY_EVENT_SETUP'
        }, eventOrigin);
      }
    }
    w.addEventListener('message', function eventListener(e) {
      var oRegex = /^https:\/\/.*\.microsoft\.com(:[0-9]+)?$/i;
      if (!oRegex.test(e.origin)) {
        return;
      }
      ;
      // ignore the event if it does not match the UET tag of the current page
      if (!e.data || !e.data.params || i !== e.data.params.TagId) {
        return;
      }
      if (!(e.data.type === 'INIT_CLARITY_EVENT_SETUP' || e.data.type === 'ACK_REINIT_CLARITY_EVENT_SETUP')) {
        return;
      }
      ;
      // clarity picker script element
      var cp = d.createElement(s);
      cp.src = 'https://clarity.microsoft.com/eventPicker.js';
      cp.async = true;
      cp.onload = function () {
        // event setup script element
        var est = d.createElement(s);
        est.src = 'https://bat.bing.com/s/uet/eventSetup.js';
        est.async = true;
        var b = d.getElementsByTagName('body')[0];
        var es = d.createElement('event-setup-tool');
        b.prepend(es);
        // pass init data to event setup
        es.setAttribute("initData", JSON.stringify(e.data.params));
        es.setAttribute("eventOrigin", e.origin);
        if (sessionStorage) {
          // save session id and event origin in session storage
          sessionStorage.setItem(sessionIdKey, e.data.params.SessionId);
          sessionStorage.setItem(originKey, e.origin);
        }
        if (e.data.type === 'INIT_CLARITY_EVENT_SETUP') {
          w.opener.postMessage({
            type: 'ACK_INIT_CLARITY_EVENT_SETUP'
          }, e.origin);
        }
        f.parentNode.insertBefore(est, f);
      };
      f.parentNode.insertBefore(cp, f);
      w.removeEventListener('message', eventListener);
    });
  }
  launchEventSetup();
})(window, document, 'script', '5039108');