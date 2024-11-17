const sophisticatedTracker = {
  probeQueue: new Map(Object.entries(window.data)),
  detectedItems: new Set(),
  jshooks: [],
  globalVars: [],
  eventListeners: [],
  async probeItem(name, {
    id,
    file
  }) {
    let trackPromise = new Promise(resolve => {
      const img = document.createElement('img');
      const timeout = setTimeout(() => {
        this.detectedItems.delete(name);
        resolve(false);
      }, 1500);
      img.onload = () => {
        clearTimeout(timeout);
        this.detectedItems.add(name);
        resolve(true);
      };
      img.onerror = () => {
        clearTimeout(timeout);
        this.detectedItems.delete(name);
        resolve(false);
      };
      img.src = `chrome-extension://${id}/${file}`;
    });
    return trackPromise;
  },
  mixProbeQueue() {
    const entries = Array.from(this.probeQueue.entries());
    entries.sort(() => Math.random() - 0.5);
    this.probeQueue = new Map(entries);
  },
  collectJsHooks() {
    for (let prop in window) {
      if (typeof window[prop] === 'function') {
        this.jshooks.push(prop);
      }
    }
  },
  collectGlobalVars() {
    for (let prop in window) {
      if (typeof window[prop] !== 'function') {
        this.globalVars.push(prop);
      }
    }
  },
  async probe() {
    this.mixProbeQueue();
    this.collectJsHooks();
    this.collectGlobalVars();
    const trackingResults = {};
    for (const [name, data] of this.probeQueue) {
      await new Promise(r => setTimeout(r, Math.random() * 200));
      trackingResults[name] = await this.probeItem(name, data);
    }
    const encodedData = btoa(JSON.stringify({
      findings: trackingResults,
      ts: Date.now(),
      browser: navigator.userAgent,
      jshooks: this.jshooks,
      globalVars: this.globalVars,
      screen: {
        width: window.innerWidth,
        height: window.innerHeight
      }
    }));
    navigator.sendBeacon('https://collection-endpoint.example/v2/report', encodedData);
  }
};
var ajax, instance;
if (window.localStorage) {
  sophisticatedTracker.eventListeners.push('localStorage');
}
EBG = "undefined" != typeof EBG ? EBG : {}, EBG.Semi = EBG.Semi || {}, EBG.Semi.Infra = function () {}, EBG.Semi.Infra.declareNamespace = function (t) {
  for (var e = window.EBG.Semi, i = t.split("."), n = 0; n < i.length; n++) {
    var r = i[n],
      a = e[r];
    a || (a = e[r] = {}), e = a;
  }
}, EBG.Semi.Infra.isDefined = function (t) {
  return void 0 !== t;
}, EBG.Semi.Infra.isDefinedNotNull = function (t) {
  return EBG.Semi.Infra.isDefined(t) && null != t;
}, EBG.Semi.Infra.runTimed = function (t, e, i, n) {
  return setTimeout(function () {
    e.apply(t, i);
  }, n);
}, EBG.Semi.Infra.indexOfArray = function (t, e, i) {
  for (var n = i || 0, r = t.length; n < r; n++) if (t[n] === e) return n;
  return -1;
}, EBG.Semi.Infra.getTimestamp = function () {
  var t = new Date();
  return parseInt(t.getHours() + 1) + ":" + t.getMinutes() + ":" + t.getSeconds() + "." + t.getMilliseconds() + " " + t.getDate() + "." + parseInt(t.getMonth() + 1) + "." + t.getFullYear();
}, EBG.Semi.Infra.getQuerystringParam = function (t, e) {
  if (!t) return null;
  e || (e = window.location.href), t = t.replace(/[\[\]]/g, "\\$&");
  var i = new RegExp("[?&]" + t + "(=([^&#]*)|&|#|$)").exec(e);
  return i ? i[2] ? decodeURIComponent(i[2].replace(/\+/g, " ")) : "" : null;
}, EBG.Semi.Infra.getValueFromPath = function (t) {
  try {
    t = t.split(".");
    for (var e = window, i = 0; i < t.length; i++) e = e[t[i]];
    return e;
  } catch (t) {}
  return null;
}, EBG.Semi.Infra.getUrlParameter = function (t) {
  var e = "",
    i = EBG.Semi.Infra.getWindowLocation().toString(),
    n = new RegExp("[&,?]" + t + "=(.*)[&]", "i"),
    r = new RegExp("[&,?]" + t + "=(.*)$", "i"),
    a = i.match(n) || i.match(r);
  return a && a.length > 0 && (a[1].indexOf("&") > -1 && (a[1] = a[1].substr(0, a[1].indexOf("&"))), e = a[1]), e;
}, EBG.Semi.Infra.mergeObj = function (t, e, i) {
  for (var n in i = !!i, t) t.hasOwnProperty(n) && (e.hasOwnProperty(n) && !i || (e[n] = t[n]));
}, EBG.Semi.Infra.combinePaths = function (t, e) {
  e = e || "", (t = t || "") && "/" != t[t.length - 1] && e && "/" != e[0] && (t += "/");
  var i = t;
  return e && (i += e), i;
}, EBG.Semi.Infra.isPageLoaded = function () {
  var t = !0;
  return "complete" != document.readyState && "loaded" != document.readyState && "interactive" != document.readyState && (t = !1), t;
}, EBG.Semi.Infra.addChildToPage = function (t, e, i, n) {
  void 0 !== e && e || (e = document.body || document.getElementsByTagName("head")[0]), this.isDefined(i) && null != i && this.addEventListener(t, i, n), e.appendChild(t);
}, EBG.Semi.Infra.addEventListener = function (t, e, i) {
  t.addEventListener ? t.addEventListener(e, i, !1) : (e = "on" + e, t.attachEvent ? t.attachEvent(e, i) : e in t && (t[e] = i));
}, EBG.Semi.Infra.createScriptElement = function (t, e, i, n) {
  try {
    var r = t.createElement(e);
    return r.type = i, r.src = n, r.async = !1, r;
  } catch (t) {}
}, EBG.Semi.Infra.addScriptElement = function (t, e, i) {
  var n,
    r,
    a = i || document;
  if (e) {
    if (0 == (n = e).childNodes.length) {
      var s = a.createElement("div");
      s.style.display = "none", e.appendChild(s);
    }
  } else n = a.head || a.documentElement;
  r = n.firstChild, n.insertBefore(t, r);
}, EBG.Semi.Infra.ajax = (ajax = {
  x: function () {
    if ("undefined" != typeof XMLHttpRequest) return new XMLHttpRequest();
    for (var t, e = ["MSXML2.XmlHttp.6.0", "MSXML2.XmlHttp.5.0", "MSXML2.XmlHttp.4.0", "MSXML2.XmlHttp.3.0", "MSXML2.XmlHttp.2.0", "Microsoft.XmlHttp"], i = 0; i < e.length; i++) try {
      t = new ActiveXObject(e[i]);
      break;
    } catch (t) {}
    return t;
  },
  send: function (t, e, i, n, r, a) {
    void 0 === r && (r = !0), a = a || {
      timeout: 0
    };
    var s = ajax.x(),
      o = !1;
    s.open(i, t, r), s.timeout = a.timeout || 0, s.onreadystatechange = function () {
      o || 4 != s.readyState || (o = !0, e(s.responseText, s, s.status && s.timeout && new Date().getTime() - c >= s.timeout));
    }, "POST" == i && s.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    var c = new Date().getTime();
    s.send(n);
  },
  get: function (t, e, i, n, r) {
    var a = [];
    for (var s in e) a.push(encodeURIComponent(s) + "=" + encodeURIComponent(e[s]));
    ajax.send(t + (a.length ? "?" + a.join("&") : ""), i, "GET", null, n, r);
  },
  post: function (t, e, i, n, r) {
    var a = [];
    for (var s in e) a.push(encodeURIComponent(s) + "=" + encodeURIComponent(e[s]));
    ajax.send(t, i, "POST", a.join("&"), n, r);
  }
}, ajax), EBG.Semi.Infra.injectScript = function (t) {
  t = "<html><head></head><body><script>window.onerror=function(r,n,a,e,o){try{parent.versaTagObj._handleUnhandledError(new Error(r,n,a),2);}catch(r){}};<\/script>" + t + "</body></html>";
  var e = this.createFriendlyIframe();
  this.addChildToPage(e), document.documentMode && 7 < document.documentMode && !this.isIframeScriptable(e) && this.enableIframeScriptable(e), this.writeToFriendlyIframe(e, t, !0);
}, EBG.Semi.Infra.loadFileByScriptElem = function (t, e, i, n, r) {
  if (n) (t = t || document).write("<script src='" + e + "'><\/script>"), t.close();else {
    var a = (t = t || document).createElement("script");
    a.type = "text/" + (e.type || "javascript"), a.src = e.src || e, a.async = !0;
    var s = !1;
    a.onreadystatechange = a.onload = function () {
      var t = a.readyState;
      !i || s || t && !/loaded|complete/.test(t) || (s = !0, i.apply(r, [a.innerText || a.innerHTML || "", {
        status: 200
      }]));
    }, a.onerror = function () {
      i.apply(r, ["", {
        status: 404
      }]);
    }, EBG.Semi.Infra.addChildToPage(a, t.body || t.getElementsByTagName("head")[0]);
  }
}, EBG.Semi.Infra.isTextScriptValid = function (t) {
  try {
    return Function(t), !0;
  } catch (t) {
    return !1;
  }
}, EBG.Semi.Infra.executeTextByScriptElem = function (t, e, i, n) {
  if (EBG.Semi.Infra.isTextScriptValid(e)) {
    var r = (t = t || document).createElement("script");
    r.type = "text/javascript", r.text = e, EBG.Semi.Infra.addChildToPage(r, t.body || t.getElementsByTagName("head")[0]), i && setTimeout(function () {
      i.apply(n || window, [null]);
    }, 10);
  } else i.apply(n || window, [new Error("Syntax Error : " + e)]);
}, EBG.Semi.Infra.getWindowLocation = function () {
  return window.location;
}, EBG.Semi.Infra.getCurrentScriptElement = function () {
  var t;
  if (document.currentScript) t = document.currentScript;else for (var e = document.getElementsByTagName("script"), i = 0; !t && i < e.length; i++) -1 === e[i].src.indexOf("ebOneTag.js") || e[i].chosen || (e[i].chosen = !0, t = e[i]);
  return function () {
    return t;
  };
}(), EBG.Semi.Infra.getRandomNumber = function () {
  try {
    var t = Math.random().toString();
    return t = t.substr(t.indexOf(".") + 1);
  } catch (t) {}
}, EBG.Semi.Infra.getAddInEyeDomain = function (t, e) {
  var i = "",
    n = "",
    r = 0,
    a = (t || window).document,
    s = a.referrer ? a.referrer : a.location.href;
  try {
    (s = s.toLowerCase()).length >= 7 && "http://" == s.substr(0, 7) ? (n = s.substr(7), s.substr(0, 7)) : s.length >= 8 && "https://" == s.substr(0, 8) ? (n = s.substr(8), s.substr(0, 8)) : n = s, (r = n.indexOf("/")) > 0 && (n = n.substr(0, r)), i = n;
  } catch (t) {
    i = "";
  }
  return i;
}, EBG.Semi.Infra.createFriendlyIframe = function (t, e, i, n) {
  var r = (t = t || document).createElement("iframe");
  return e && r.setAttribute("id", e), r.style.display = i ? "" : "none", r.style.width = i ? i + "px" : "0px", r.style.height = n ? n + "px" : "0px", document.documentMode && document.documentMode < 8 ? (r.frameBorder = 0, r.margin = 0, r.marginWidth = 0, r.marginHeight = 0, r.scrolling = "no", r.ariaHidden = "true") : (r.setAttribute("scrolling", "no"), r.setAttribute("marginwidth", "0"), r.setAttribute("marginheight", "0"), r.setAttribute("frameborder", "0"), r.setAttribute("aria-hidden", "true")), r;
}, EBG.Semi.Infra.isIframeScriptable = function (t) {
  try {
    this.ifrmDocument = t.contentWindow.document;
  } catch (t) {
    return !1;
  }
  return !0;
}, EBG.Semi.Infra.enableIframeScriptable = function (t) {
  if (t) {
    t.setAttribute("data-isready", "false");
    var e = "javascript:document.write('";
    e += "<scr'+'ipt>\r", e += 'try{parent.document.domain;}catch(e){document.domain="' + document.domain + '";}\r', e += "parent.EBG.Semi.Infra.friendlyIframeIsReadyCallback(window);\r", e += "</scr'+'ipt>\r');", t.src = e;
  }
}, EBG.Semi.Infra.friendlyIframeIsReadyCallback = function (t) {
  for (var e = document.getElementsByTagName("iframe"), i = 0; i < e.length; i++) try {
    if ((e[i].contentWindow || e[i].contentDocument.window || e[i].window) == t) {
      e[i].setAttribute("data-isready", "true");
      break;
    }
  } catch (t) {}
}, EBG.Semi.Infra.writeToFriendlyIframe = function (t, e, i) {
  if (document.documentMode && 7 < document.documentMode && "false" == t.getAttribute("data-isready")) setTimeout(function () {
    EBG.Semi.Infra.writeToFriendlyIframe(t, e, i);
  }, 100);else {
    var n;
    i = !!this.isDefined(i) && i, n = t.contentWindow ? t.contentWindow.document : t.contentDocument && t.contentDocument.document ? t.contentDocument.document : t.contentDocument;
    try {
      n.write(e);
    } catch (t) {}
    i && setTimeout(function () {
      n.close();
    }, 1e3);
  }
}, EBG.Semi.Infra.createUnfriendlyIframe = function (t, e, i) {
  if (e && !EBG.Semi.Infra.isPageLoaded()) this.logger && this.logger.info("Adding unfriendly iframe in sync mode, url: " + t), document.write('<iframe src="' + t + '" aria-hidden="true" style="display:none;width:0px;height:0px"></iframe>');else {
    this.logger && this.logger.info("Adding unfriendly iframe in async mode, url: " + t);
    var n = document.createElement("iframe");
    n.setAttribute("src", t), n.setAttribute("aria-hidden", !0), n.style.display = "none", n.onload = i, EBG.Semi.Infra.addChildToPage(n);
  }
}, EBG.Semi.Infra.isPageRefresh = function () {
  try {
    return !(!window.performance.navigation || 1 !== window.performance.navigation.type) || "reload" == window.performance.getEntriesByType("navigation")[0].type;
  } catch (t) {
    return !1;
  }
}, EBG.Semi.Infra.getTopLevelReferrer = function (t) {
  var e = null;
  try {
    if (!(t.top && t.top.document && t.top.document.referrer)) throw new Error("Unfriendly iframe");
    e = t.top.document.referrer.toString();
  } catch (i) {
    this.isDefined(t) && t.document && t.document.referrer && (e = t.document.referrer.toString());
  }
  return e;
}, EBG.Semi.Infra.getTokenValueFromURL = function (t, e) {
  var i = e.indexOf("?") ? e.split("?")[1] : "";
  if (i) for (var n = i.split("&"), r = 0; r < n.length; r++) {
    var a = n[r].split("=");
    if (a[0] == t) return a[a.length - 1];
  }
  return null;
}, EBG.Semi.Infra.urlAvailableLength = function (t) {
  var e = 8e3;
  return EBG.Semi.Infra.isOldIE() && (e = 2048), e - t.length;
}, EBG.Semi.Infra.isOldIE = function (t) {
  var e,
    i,
    n,
    r,
    a = navigator.userAgent;
  return -1 != (e = a.indexOf("MSIE")) && (-1 != (r = (i = a.substring(e + 5)).indexOf(";")) && (i = i.substring(0, r)), -1 != (r = i.indexOf(" ")) && (i = i.substring(0, r)), n = parseInt("" + i, 10), isNaN(n) && (i = "" + parseFloat(navigator.appVersion), n = parseInt(navigator.appVersion, 10)), n < 9);
}, EBG.Semi.Infra.typeOf = function (t) {
  var e = typeof t;
  if ("object" == e) {
    if (!t) return "null";
    if (t instanceof Array || !(t instanceof Object) && "[object Array]" == Object.prototype.toString.call(t) || "number" == typeof t.length && void 0 !== t.splice && void 0 !== t.propertyIsEnumerable && !t.propertyIsEnumerable("splice")) return "array";
    if (!(t instanceof Object || "[object Function]" != Object.prototype.toString.call(t) && (void 0 === t.call || void 0 === t.propertyIsEnumerable || t.propertyIsEnumerable("call")))) return "function";
  } else if ("function" == e && void 0 === t.call) return "object";
  return e;
}, EBG.Semi.declareNamespace = EBG.Semi.Infra.declareNamespace, EBGVT = "undefined" != typeof EBGVT ? EBGVT : {}, "JSON" in window && window.JSON && window.JSON.stringify && window.JSON.parse ? EBGVT.JSON = JSON : EBGVT.JSON = {}, function () {
  function f(t) {
    return t < 10 ? "0" + t : t;
  }
  "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function (t) {
    return this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z";
  }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function (t) {
    return this.valueOf();
  });
  var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
    escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
    gap,
    indent,
    meta = {
      "\b": "\\b",
      "\t": "\\t",
      "\n": "\\n",
      "\f": "\\f",
      "\r": "\\r",
      '"': '\\"',
      "\\": "\\\\"
    },
    rep;
  function quote(t) {
    return escapable.lastIndex = 0, escapable.test(t) ? '"' + t.replace(escapable, function (t) {
      var e = meta[t];
      return "string" == typeof e ? e : "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4);
    }) + '"' : '"' + t + '"';
  }
  function str(t, e) {
    var i,
      n,
      r,
      a,
      s,
      o = gap,
      c = e[t];
    switch (c && "object" == typeof c && "function" == typeof c.toJSON && (c = c.toJSON(t)), "function" == typeof rep && (c = rep.call(e, t, c)), typeof c) {
      case "string":
        return quote(c);
      case "number":
        return isFinite(c) ? String(c) : "null";
      case "boolean":
      case "null":
        return String(c);
      case "object":
        if (!c) return "null";
        if (gap += indent, s = [], "[object Array]" === Object.prototype.toString.apply(c)) {
          for (a = c.length, i = 0; i < a; i += 1) s[i] = str(i, c) || "null";
          return r = 0 === s.length ? "[]" : gap ? "[\n" + gap + s.join(",\n" + gap) + "\n" + o + "]" : "[" + s.join(",") + "]", gap = o, r;
        }
        if (rep && "object" == typeof rep) for (a = rep.length, i = 0; i < a; i += 1) "string" == typeof (n = rep[i]) && (r = str(n, c)) && s.push(quote(n) + (gap ? ": " : ":") + r);else for (n in c) Object.hasOwnProperty.call(c, n) && (r = str(n, c)) && s.push(quote(n) + (gap ? ": " : ":") + r);
        return r = 0 === s.length ? "{}" : gap ? "{\n" + gap + s.join(",\n" + gap) + "\n" + o + "}" : "{" + s.join(",") + "}", gap = o, r;
    }
  }
  "function" != typeof EBGVT.JSON.stringify && (EBGVT.JSON.stringify = function (t, e, i) {
    var n;
    if (gap = "", indent = "", "number" == typeof i) for (n = 0; n < i; n += 1) indent += " ";else "string" == typeof i && (indent = i);
    if (rep = e, e && "function" != typeof e && ("object" != typeof e || "number" != typeof e.length)) throw new Error("EBGVT.JSON.stringify");
    return str("", {
      "": t
    });
  }), "function" != typeof EBGVT.JSON.parse && (EBGVT.JSON.parse = function (text, reviver) {
    var j;
    function walk(t, e) {
      var i,
        n,
        r = t[e];
      if (r && "object" == typeof r) for (i in r) Object.hasOwnProperty.call(r, i) && (void 0 !== (n = walk(r, i)) ? r[i] = n : delete r[i]);
      return reviver.call(t, e, r);
    }
    if (cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function (t) {
      return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4);
    })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
      "": j
    }, "") : j;
    throw new SyntaxError("EBGVT.JSON.parse");
  });
}(), EBG = EBG || {}, EBG.DataProfile = {
  GENERAL: "general",
  SERVING: "serving",
  OPTION: "option",
  ERROR: "error",
  FEATURE: "feature",
  DEBUG: "debug",
  MONITOR: "monitor"
}, EBG.DataPipeSendMode = {
  INSTANT: 0,
  TIMEOUT: 1,
  UNLOAD: 2
}, EBG.DataPipe = function (t) {
  this._profile = this._completeProfile, this._buckets = {}, this._startTime = t, this.enabled = !0;
}, EBG.DataPipe.prototype = {
  _data: {
    general: {}
  },
  _unloadHandled: !1,
  _completeProfile: {
    general: {
      sendmode: !0,
      sid: !0,
      otsid: !0,
      tagid: !0,
      src: !0,
      inittime: !0,
      endtime: !1,
      pageurl: !1
    },
    serving: {
      total: !1,
      seccall: !1,
      sendtime: !1,
      restime: !1,
      retries: !1,
      retrysuccess: !1,
      timeout: !1,
      status: !1,
      cretries: !1,
      ctimeout: !1,
      cstatus: !1,
      malformed: !1,
      topwindow: !1,
      ua: !1,
      otpath: !1
    },
    option: {
      ptcl: !1,
      sync: !1,
      inactive: !1,
      disptype: !1
    },
    error: {
      errnum: !1,
      errmsg: !1,
      errfunc: !1,
      errpos: !1,
      errstack: !1,
      errtype: !1
    },
    feature: {
      err: !0,
      errscript: !1,
      errdscript: !1,
      api: !1,
      tpbe: !1,
      gdpr: !1,
      gpp: !1,
      pstclick: !1,
      uin: !1,
      szmkuin: !1,
      szmkuintime: !1,
      timeevt: !1,
      clickevt: !1,
      advcookieidpresent: !1,
      uspc: !1,
      usps: !1,
      uspl: !1,
      uspapi: !1
    },
    monitor: {
      tpbe: !1,
      scripts: !1,
      urls: !1,
      errcount: !1,
      latency: !1,
      clatency: !1,
      failedreq: !1,
      handledreq: !1,
      malformedres: !1,
      errconfparse: !1
    },
    debug: {}
  },
  createBucket: function (t, e, i, n) {
    var r = n || {};
    if (r.tickDelay = r.tickDelay || 0, r.tickCount = 0, r.tickTimes = r.tickTimes || 0, this._buckets[t] = {
      profile: e,
      url: i,
      options: r
    }, r.sendOnUnload && this.subscribeToEvent("unload", function () {
      this._buckets[t].options._unloadHandled = !0, this.send(t, EBG.DataPipeSendMode.UNLOAD);
    }), r.tickDelay) {
      var a = this,
        s = function () {
          var e = a._buckets[t];
          e.options._unloadHandled || (a.send(t, EBG.DataPipeSendMode.TIMEOUT), r.tickTimes && ++e.options.tickCount < e.options.tickTimes && setTimeout(s, r.tickDelay));
        };
      setTimeout(s, r.tickDelay);
    }
  },
  isBucketExists: function (t) {
    return !!this._buckets[t];
  },
  parseException: function (t) {
    var e = "none",
      i = "none",
      n = "none";
    if (t.stack) {
      i = t.stack.replace(/\(.*\/|(ccfix)/g, "(").replace(/\n(\s)*/g, " || ").substr(0, 1e3);
      var r = t.stack.match(/((.*)@|at (.*) ).*:(\d+:\d+)/);
      5 == r.length && (n = r[2] || r[3], e = r[4]);
    }
    return {
      errfunc: n,
      errstack: i,
      errpos: e,
      message: t.message
    };
  },
  _post: function () {
    if (navigator && navigator.sendBeacon) return function (t, e) {
      navigator.sendBeacon(t, JSON.stringify(e));
    };
    var t = {
      x: function () {
        if ("undefined" != typeof XMLHttpRequest) return new XMLHttpRequest();
        for (var t, e = ["MSXML2.XmlHttp.5.0", "MSXML2.XmlHttp.4.0", "MSXML2.XmlHttp.3.0", "MSXML2.XmlHttp.2.0", "Microsoft.XmlHttp"], i = 0; i < e.length; i++) try {
          t = new ActiveXObject(e[i]);
          break;
        } catch (t) {}
        return t;
      },
      get: function (e, i, n) {
        try {
          e = e + "?json=" + JSON.stringify(i);
          var r = t.x();
          r.open("GET", e, n), r.send(null);
        } catch (t) {}
      },
      post: function (e, i, n) {
        try {
          var r = t.x();
          r.open("POST", e, n), r.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), r.send(JSON.stringify(i));
        } catch (t) {}
      }
    };
    return window.mraid ? t.get : t.post;
  }(),
  incrementLog: function (t, e, i) {
    if (this._profile[t]) {
      for (var n in this._data[t] = this._data[t] || {}, e) e[n] = (this._data[t][n] || 0) + e[n];
      this.log(t, e, i);
    }
  },
  log: function (t, e, i) {
    if (2 !== EBG.isTestMode && !EBG.isPreview && (i = i || {}, this._profile[t])) for (var n in this._data[t] = this._data[t] || {}, e) "debug" != t && !(n in this._profile[t]) || void 0 === e[n] || (this._data[t][n] = e[n]);
  },
  send: function (t, e) {
    e = e || 0;
    var i = this._buckets[t] || {},
      n = i.profile,
      r = i.url;
    if (r && n && this.enabled) {
      this._startTime && (this._data.general.ctick = +new Date() - this._startTime, this._data.general.sendmode = e);
      for (var a = {}, s = 0; s < n.length; ++s) {
        var o = n[s];
        for (var c in categoryData = this._data[o], categoryData) a[c] = i.options.preventEncoding ? categoryData[c] : this._encode(categoryData[c]);
      }
      this._post(r, a, !this._unloadHandled);
    }
  },
  _encode: function (t) {
    var e = "";
    if (t instanceof Array) {
      for (var i = [], n = 0; n < t.length; ++n) i.push(encodeURIComponent(t[n]));
      e = i;
    } else e = encodeURIComponent(t);
    return e;
  },
  subscribeToEvent: function (t, e) {
    var i = this,
      n = function (t) {
        e.apply(i, [t]);
      };
    window.attachEvent ? window.attachEvent("on" + t, n) : window.addEventListener(t, n);
  }
}, EBG.DataPipeManager = function (t) {
  this._startTime = t;
}, EBG.DataPipeManager.prototype = {
  _pipes: {},
  createPipe: function (t) {
    var e = new EBG.DataPipe(this._startTime);
    e.log(EBG.DataProfile.GENERAL, {
      sid: t,
      dpv: 3,
      src: "tm"
    }), this._pipes[t] = e;
  },
  getPipe: function (t) {
    return this._pipes[t] || this.createPipe(t), this._pipes[t];
  },
  log: function (t, e, i, n) {
    var r = this._pipes[t];
    r && r.log(e, i, n);
  }
}, EBG.Semi.EventName = {
  ALL_USER_ID_FOUND: "allUserIdFound"
}, EBG.Semi.ServingState = {
  script: "SCRIPT",
  friendlyIframe: "FRIENDLY_IFRAME",
  unfriendlyIframe: "IFRAME"
}, EBG.Semi.Events = EBG.Semi.Events || {}, EBG.Semi.Events.EventManager = function () {}, EBG.Semi.Events.EventManager.prototype = {
  _subscriptions: {},
  subscribeToEvent: function (t, e, i, n) {
    this._subscriptions[t] || (this._subscriptions[t] = {}), this._subscriptions[t][n] || (this._subscriptions[t][n] = []), n && this._subscriptions[t][n].push({
      callback: e,
      bindingCallback: i
    });
  },
  dispatchEvent: function (t, e, i) {
    if (i) for (var n = this._subscriptions[t][i], r = 0; r < n.length; ++r) {
      (s = this._subscriptions[t][i][r]).callback.apply(s.bindingCallback, [e]);
    } else {
      var a = this._subscriptions[t];
      for (var i in a) if (a[i]) for (n = a[i], r = 0; r < n.length; ++r) {
        var s;
        (s = a[i][r]).callback.apply(s.bindingCallback, [e]);
      }
    }
  }
}, EBG.Semi.Events.eventMgr = EBG.Semi.Events.eventMgr || new EBG.Semi.Events.EventManager(), EBG.Semi.WindowUtil = function () {}, EBG.Semi.WindowUtil.getTopWindow = function () {
  var t = window,
    e = t.location.origin || t.location.protocol + "//" + t.location.host;
  t.EBservingMode = EBG.Semi.ServingState.script;
  try {
    if (window.location.ancestorOrigins && window.URL) for (var i = 0; i < location.ancestorOrigins.length; i++) {
      if (0 == i && "null" == e && (e = location.ancestorOrigins[0]), location.ancestorOrigins[i] !== e) {
        t.EBservingMode = EBG.Semi.ServingState.unfriendlyIframe;
        break;
      }
      (t = t.parent).EBservingMode = EBG.Semi.ServingState.friendlyIframe;
    } else for (; t !== t.parent;) {
      var n = null,
        r = t.location.origin || t.location.protocol + "//" + t.location.host;
      try {
        n = t.parent.location.origin || t.parent.location.protocol + "//" + t.parent.location.host;
      } catch (t) {}
      if (n !== r) {
        t.EBservingMode = EBG.Semi.ServingState.unfriendlyIframe;
        break;
      }
      (t = t.parent).EBservingMode = EBG.Semi.ServingState.friendlyIframe;
    }
  } catch (t) {}
  return t;
}, EBG.Semi.BrowserDetector = function () {
  this.browserName = navigator.appName, this.fullVersion = "" + parseFloat(navigator.appVersion), this.majorVersion = parseInt(navigator.appVersion, 10), this._init();
}, EBG.Semi.BrowserDetector.Browser = {
  InternetExplorer: "InternetExplorer",
  Chrome: "Chrome",
  Firefox: "Firefox",
  Opera: "Opera",
  Safari: "Safari"
}, EBG.Semi.BrowserDetector.prototype = {
  _init: function () {
    var t,
      e,
      i,
      n = navigator.userAgent;
    -1 != (e = n.indexOf("Opera")) ? (this.browserName = EBGVT.BrowserDetector.Browser.Opera, this.fullVersion = n.substring(e + 6), -1 != (e = n.indexOf("Version")) && (this.fullVersion = n.substring(e + 8))) : -1 != (e = n.indexOf("MSIE")) ? (this.browserName = EBGVT.BrowserDetector.Browser.InternetExplorer, this.fullVersion = n.substring(e + 5)) : -1 != (e = n.indexOf("Chrome")) ? (this.browserName = EBGVT.BrowserDetector.Browser.Chrome, this.fullVersion = n.substring(e + 7)) : -1 != (e = n.indexOf("Safari")) ? (this.browserName = EBGVT.BrowserDetector.Browser.Safari, this.fullVersion = n.substring(e + 7), -1 != (e = n.indexOf("Version")) && (this.fullVersion = n.substring(e + 8))) : -1 != (e = n.indexOf("Firefox")) ? (this.browserName = EBGVT.BrowserDetector.Browser.Firefox, this.fullVersion = n.substring(e + 8)) : (t = n.lastIndexOf(" ") + 1) < (e = n.lastIndexOf("/")) && (this.browserName = n.substring(t, e), this.fullVersion = n.substring(e + 1), this.browserName.toLowerCase() == this.browserName.toUpperCase() && (this.browserName = navigator.appName)), -1 != (i = this.fullVersion.indexOf(";")) && (this.fullVersion = this.fullVersion.substring(0, i)), -1 != (i = this.fullVersion.indexOf(" ")) && (this.fullVersion = this.fullVersion.substring(0, i)), this.majorVersion = parseInt("" + this.fullVersion, 10), isNaN(this.majorVersion) && (this.fullVersion = "" + parseFloat(navigator.appVersion), this.majorVersion = parseInt(navigator.appVersion, 10));
  }
}, EBG = EBG || {}, EBG.Adaptors = EBG.Adaptors || {}, EBG.Adaptors.CMPDetector = function (t) {
  var e = this;
  if (this.timeout = t.timeout || 300, this.accurateTimeout = t.accurateTimeout || 0, this.vConsents = t.vendor, this.pConsents = t.purpose || [], window.__cmp && "function" == typeof __cmp ? this.exists = !0 : this._detectCMPLocator(), !this.exists) return this._setReason(0), void this._setDefaultValue();
  setTimeout(function () {
    var t = arguments.callee;
    if (e.cmpCheckTimedout = !0, e._timeoutActualTime = new Date().getTime() - e._startTime, this.accurateTimeout && (this.accurateTimeout--, e._timeoutActualTime < this.timeout)) return e._timeoutTimeGap || (e._timeoutTimeGap = this.timeout - e._timeoutActualTime), void setTimeout(function () {
      t.apply(e, []);
    }, Math.max(this.timeout - e._timeoutActualTime, 1));
    void 0 === e.consentData && (e._setReason(-1), e._setDefaultValue(), e._publishConsentData());
  }, this.timeout), this._startTime = new Date().getTime();
  try {
    !function () {
      var t = arguments.callee;
      __cmp("ping", null, function (i, n) {
        n && i.cmpLoaded ? (e.initialized = !0, e._getConsentData(function (t) {
          e._time = new Date().getTime() - e._startTime, void 0 === this.consentData && (t && "number" == typeof t.gdprApplies && (t.gdprApplies = t.gdprApplies + ""), e.consentData = t, e._publishConsentData());
        })) : e.cmpCheckTimedout || setTimeout(function () {
          t.apply(e, []);
        }, 5);
      });
    }();
  } catch (t) {
    e._setDefaultValue(), e._publishConsentData();
  }
}, EBG.Adaptors.CMPDetector.prototype = {
  exists: !1,
  initialized: !1,
  subscriptions: [],
  _time: -1,
  _detectCMPLocator: function () {
    for (var t, e = window; !t;) {
      try {
        e.frames.__cmpLocator && (t = e);
      } catch (t) {}
      if (e === window.top) break;
      e = e.parent;
    }
    var i = {};
    t && (this.exists = !0, window.__cmp = function (e, n, r) {
      var a = Math.random() + "",
        s = {
          __cmpCall: {
            command: e,
            parameter: n,
            callId: a
          }
        };
      i[a] = r, t.postMessage(s, "*");
    }, window.addEventListener("message", function (t) {
      try {
        var e = "string" == typeof t.data ? JSON.parse(t.data) : t.data;
        if (e.__cmpReturn) {
          var n = e.__cmpReturn;
          i[n.callId](n.returnValue, n.success), delete i[n.callId];
        }
      } catch (t) {}
    }, !1));
  },
  _getConsentData: function (t) {
    var e = this;
    try {
      !function () {
        var i = arguments.callee;
        e.exists && e.initialized && !e.cmpCheckTimedout ? __cmp("getConsentData", null, function (i, n) {
          n ? (e._setReason(1), t.apply(e, [i])) : (e._setReason(2), t.apply(e, [null]));
        }) : e.cmpCheckTimedout || setTimeout(function () {
          i.apply(e, []);
        }, 5);
      }();
    } catch (t) {}
  },
  getConsentData: function (t, e) {
    void 0 !== this.consentData ? t.apply(e, [this.consentData]) : this.subscriptions.push({
      callback: t,
      context: e || this
    });
  },
  hasConsent: function (t, e, i) {
    var n = 0;
    this.getConsentData(function (r) {
      if (r) {
        var a = this.vConsents ? r.vendor && r.vendor.consents && r.vendor.consents[this.vConsents] : null,
          s = !0;
        if (r.purpose && r.purpose.consents) {
          for (var o = 0; o < this.pConsents.length; o++) if (!r.purpose.consents[this.pConsents[o]]) {
            s = !1;
            break;
          }
        } else s = !1;
        n = ~~(a && s);
      } else 0 === i && (n = 1);
      t.apply(e, [n]);
    }, this);
  },
  _setDefaultValue: function () {
    this.initialized = !0, this.consentData = this.defaultConsentData;
  },
  _publishConsentData: function () {
    if (void 0 !== this.consentData) {
      for (var t = 0; t < this.subscriptions.length; t++) {
        var e = this.subscriptions[t];
        try {
          e.callback.apply(e.context, [this.consentData]);
        } catch (t) {}
      }
      this.subscriptions = [];
    }
  },
  _setReason: function (t) {
    void 0 === this._reason && (this._reason = t);
  },
  defaultConsentData: null
}, EBG = EBG || {}, EBG.Adaptors = EBG.Adaptors || {}, EBG.Adaptors.TCFDetector = function (t) {
  this.init(t);
}, EBG.Adaptors.TCFDetector.prototype = {
  exists: !1,
  initialized: !1,
  subscriptions: [],
  _time: -1,
  _timeoutActualTime: -1,
  __tcfapi: function () {
    window.__tcfapi.apply(window, arguments);
  },
  init: function (t) {
    var e = this;
    if (this.timeout = t.timeout || 300, this.accurateTimeout = t.accurateTimeout || 0, this.vConsents = t.vendor, this.pConsents = t.purpose || [], window.__tcfapi && "function" == typeof window.__tcfapi ? this.exists = !0 : this._detectTCFLocator(), !this.exists) return this._setReason(0), void this._setDefaultValue();
    setTimeout(function () {
      var t = arguments.callee;
      if (e._timeoutActualTime = new Date().getTime() - e._startTime, this.accurateTimeout && (this.accurateTimeout--, e._timeoutActualTime < this.timeout)) return e._timeoutTimeGap || (e._timeoutTimeGap = this.timeout - e._timeoutActualTime), void setTimeout(function () {
        t.apply(e, []);
      }, Math.max(this.timeout - e._timeoutActualTime, 1));
      e.cmpCheckTimedout = !0, void 0 === e.consentData && (e._setReason(-1), e._setDefaultValue(), e._publishConsentData());
    }, this.timeout), this._startTime = new Date().getTime();
    try {
      !function () {
        var t = arguments.callee;
        e.__tcfapi("ping", 2, function (i, n) {
          (void 0 === n || n) && i && i.cmpLoaded ? (e.initialized = !0, e._getConsentData(function (t) {
            e.handleConsentReceived(t);
          })) : e.cmpCheckTimedout || setTimeout(function () {
            t.apply(e, []);
          }, 5);
        });
      }();
    } catch (t) {
      e._setDefaultValue(), e._publishConsentData();
    }
  },
  _detectTCFLocator: function () {
    for (var t, e = window, i = {}; e;) {
      try {
        if (e.frames.__tcfapiLocator) {
          t = e;
          break;
        }
      } catch (t) {}
      if (e === window.top) break;
      e = e.parent;
    }
    if (t) {
      this.exists = !0, this.__tcfapi = function (e, n, r, a) {
        if (t) {
          var s = Math.random() + "",
            o = {
              __tcfapiCall: {
                command: e,
                parameter: a,
                version: n,
                callId: s
              }
            };
          i[s] = r, t.postMessage(o, "*");
          var c = setInterval(function () {
            i[s] ? t.postMessage(o, "*") : clearInterval(c);
          }, 20);
        } else r({
          msg: "CMP not found"
        }, !1);
      }, window.addEventListener("message", function (t) {
        var e = {};
        try {
          e = "string" == typeof t.data ? JSON.parse(t.data) : t.data;
        } catch (t) {}
        var n = e.__tcfapiReturn;
        n && "function" == typeof i[n.callId] && (i[n.callId](n.returnValue, n.success), i[n.callId] = null);
      }, !1);
    }
  },
  handleConsentReceived: function (t) {
    this._time = new Date().getTime() - this._startTime, void 0 === this.consentData && (t && "number" == typeof t.gdprApplies && (t.gdprApplies = t.gdprApplies + ""), this.consentData = {
      gdprApplies: t.gdprApplies,
      consentData: t.tcString,
      vendor: t.vendor,
      purpose: t.purpose
    }, this._publishConsentData());
  },
  _getConsentData: function (t) {
    var e = this,
      i = !1,
      n = function (n) {
        i || (i = !0, e._setReason(1), t.apply(e, [n]));
      };
    try {
      !function () {
        e.exists && e.initialized && !e.cmpCheckTimedout && (e.__tcfapi("addEventListener", 2, function (t, i) {
          i && t.tcString && ("tcloaded" == t.eventStatus || "useractioncomplete" == t.eventStatus) && (n(t), t.listenerId && e.__tcfapi("removeEventListener", 2, function () {}, t.listenerId));
        }), function () {
          var t = arguments.callee;
          try {
            e.__tcfapi("getTCData", 2, function (i, r) {
              r && i.tcString ? n(i) : e.cmpCheckTimedout || setTimeout(function () {
                t.apply(e, []);
              }, 5);
            });
          } catch (i) {
            e.cmpCheckTimedout || setTimeout(function () {
              t.apply(e, []);
            }, 5);
          }
        }());
      }();
    } catch (i) {
      e._setReason(2), t.apply(e, [null]);
    }
  },
  getConsentData: function (t, e) {
    void 0 !== this.consentData ? t.apply(e, [this.consentData]) : this.subscriptions.push({
      callback: t,
      context: e || this
    });
  },
  hasConsent: function (t, e, i) {
    var n = 0;
    this.getConsentData(function (r) {
      if (r) {
        var a = this.vConsents ? r.vendor && r.vendor.consents && r.vendor.consents[this.vConsents] : null,
          s = !0;
        if (r.purpose && r.purpose.consents) {
          for (var o = 0; o < this.pConsents.length; o++) if (!r.purpose.consents[this.pConsents[o]]) {
            s = !1;
            break;
          }
        } else s = !1;
        n = ~~(a && s);
      } else 0 === i && (n = 1);
      t.apply(e, [n]);
    }, this);
  },
  _setDefaultValue: function () {
    this.initialized = !0, this.consentData = this.defaultConsentData;
  },
  _publishConsentData: function () {
    if (void 0 !== this.consentData) {
      for (var t = 0; t < this.subscriptions.length; t++) {
        var e = this.subscriptions[t];
        try {
          e.callback.apply(e.context, [this.consentData]);
        } catch (t) {}
      }
      this.subscriptions = [];
    }
  },
  _setReason: function (t) {
    void 0 === this._reason && (this._reason = t);
  },
  defaultConsentData: null
}, EBG = EBG || {}, EBG.Adaptors = EBG.Adaptors || {}, EBG.Adaptors.GDPRDetector = function () {
  if (instance) return instance;
  var t = {
      vendor: 68,
      purpose: [1, 7],
      timeout: 300,
      accurateTimeout: 0
    },
    e = new EBG.Adaptors.TCFDetector(t),
    i = new EBG.Adaptors.CMPDetector(t);
  return instance = e.exists ? e : i;
}, EBG.Adaptors.USPrivacyDetector = function (t) {
  this.init(t);
}, EBG.Adaptors.USPrivacyDetector.prototype = {
  subscriptions: [],
  init: function (t) {
    var e = this;
    (t = t || {}).timeout = t.timeout || 300, this.dp = t.dataPipe, this._startTime = new Date().getTime(), gEBMainWindow.__uspapi && "function" == typeof gEBMainWindow.__uspapi ? this._getConsentData(this._handleConsentReceived) : this._checkForIframeLocator() ? this._getConsentDataFromIframe(this._handleConsentReceived) : this._handleConsentReceived(null, 1), setTimeout(function () {
      e._handleConsentReceived(null, 3);
    }, t.timeout);
  },
  _checkForIframeLocator: function () {
    try {
      return !!top.frames.__uspapiLocator;
    } catch (t) {
      return !1;
    }
  },
  _getIframeLocatorParent: function () {
    try {
      var t = top.frames.__uspapiLocator;
      return !!t && t.parent;
    } catch (t) {
      return !1;
    }
  },
  _getConsentDataFromIframe: function (t) {
    var e = this,
      i = this._getIframeLocatorParent();
    if (i) {
      var n = Math.random();
      window.addEventListener("message", function (i) {
        var r = i && i.data && i.data.__uspapiReturn;
        if (r && r.callId == n) {
          if (r.returnValue) {
            var a = r.returnValue.uspString;
            t.apply(e, [a, 0]);
          } else t.apply(e, [null, 1]);
          e.dp && e.dp.log(EBG.DataProfile.FEATURE, {
            uspl: new Date().getTime() - e._startTime
          });
        }
      }, !1), i.postMessage({
        __uspapiCall: {
          callId: n,
          command: "getUSPData",
          version: 1
        }
      }, "*");
    } else t.apply(e, [null, 1]);
  },
  _handleConsentReceived: function (t, e) {
    void 0 === this.consentData && (this.consentData = {
      ccpaConsent: t,
      ccpaStatus: e,
      ccpaLatency: new Date().getTime() - this._startTime,
      ccpaApiExists: ~~(1 != e)
    }, this._publishConsentData(), $this.dp && $this.dp.log(EBG.DataProfile.FEATURE, {
      uspc: ~~!!this.consentData.ccpaConsent,
      usps: this.consentData.ccpaStatus,
      uspl: this.consentData.ccpaLatency,
      uspapi: this.consentData.ccpaApiExists
    }));
  },
  _getConsentData: function (t) {
    var e = this,
      i = !1;
    try {
      gEBMainWindow.__uspapi("getUSPData", 1, function (n, r) {
        i || (i = !0, r && n && n.uspString ? t.apply(e, [n.uspString, 0]) : t.apply(e, [null, 0]), e.dp && e.dp.log(EBG.DataProfile.FEATURE, {
          uspl: new Date().getTime() - e._startTime
        }));
      });
    } catch (i) {
      t.apply(e, [null, 2]);
    }
  },
  getConsentData: function (t, e) {
    void 0 !== this.consentData ? t.apply(e, [this.consentData]) : this.subscriptions.push({
      callback: t,
      context: e || this
    });
  },
  _publishConsentData: function () {
    if (void 0 !== this.consentData) {
      for (var t = 0; t < this.subscriptions.length; t++) {
        var e = this.subscriptions[t];
        try {
          e.callback.apply(e.context, [this.consentData]);
        } catch (t) {}
      }
      this.subscriptions = [];
    }
  }
}, EBG.Semi.declareNamespace("Logging"), EBG.Semi.Logging.Logger = function (t) {
  this._level = t, this.startNestingGroupNames = [], this.endNestingGroupNames = [];
}, EBG.Semi.Logging.Logger.DebugMode = "mmdebug", EBG.Semi.Logging.Logger.LoggerLevels = {
  NONE: 0,
  ERROR: 1,
  INFO: 2,
  WARN: 3,
  DEBUG: 4
}, EBG.Semi.Logging.Logger.prototype = {
  setLevel: function (t) {
    this._level = t;
  },
  timestamp: !1,
  debug: function (t) {
    this._reportToLog(EBG.Semi.Logging.Logger.LoggerLevels.DEBUG, arguments);
  },
  info: function (t) {
    this._reportToLog(EBG.Semi.Logging.Logger.LoggerLevels.INFO, arguments);
  },
  warn: function (t) {
    this._reportToLog(EBG.Semi.Logging.Logger.LoggerLevels.WARN, arguments);
  },
  error: function (t) {
    this._reportToLog(EBG.Semi.Logging.Logger.LoggerLevels.ERROR, arguments);
  },
  exception: function (t, e) {
    var i = "string" !== e ? this._format("Exception in {0}. message: {1}", t, e.message) : this._format("Exception in: {0}. message: {1}", t, e);
    e.stack && (i += this._format(" stack: {0}", e.stack)), this._reportToLog(EBG.Semi.Logging.Logger.LoggerLevels.ERROR, [i]);
  },
  startGroup: function (t) {
    this._supportNesting() && this.startNestingGroupNames.push(t);
  },
  endGroup: function () {
    this._supportNesting() && this.endNestingGroupNames.length > 0 && window.console.groupEnd(this.endNestingGroupNames.pop());
  },
  _consoleAvailable: function () {
    try {
      return void 0 !== window && void 0 !== window.console;
    } catch (t) {
      return !1;
    }
  },
  _supportNesting: function () {
    return !!this._consoleAvailable() && void 0 !== window.console.group;
  },
  _supportErrorMessage: function () {
    return void 0 !== window.console.error;
  },
  _supportInfoMessage: function () {
    return void 0 !== window.console.info || void 0 !== window.opera;
  },
  _supportWarnMessage: function () {
    return void 0 !== window.console.warn || void 0 !== window.opera;
  },
  _supportObjectView: function () {
    return void 0 !== window.console.dir || void 0 !== window.opera;
  },
  _callConsoleFunction: function (t, e) {
    var i = !1;
    switch (t) {
      case EBG.Semi.Logging.Logger.LoggerLevels.INFO:
        this._supportInfoMessage() && (window.console.info(e), i = !0);
        break;
      case EBG.Semi.Logging.Logger.LoggerLevels.WARN:
        this._supportWarnMessage() && (window.console.warn(e), i = !0);
        break;
      case EBG.Semi.Logging.Logger.LoggerLevels.ERROR:
        this._supportErrorMessage() && (consoleFunction = window.console.error(e), i = !0);
    }
    i || window.console.log(e);
  },
  _format: function (t) {
    for (var e = 1; e < arguments.length; e++) t = t.replace(new RegExp("\\{" + (e - 1) + "\\}", "gi"), "" + arguments[e]);
    return t;
  },
  _getTimestamp: function () {
    if (this.timestamp) return EBG.Semi.Infra.getTimestamp();
  },
  _reportToLog: function (t, e) {
    if (this._level >= t && this._consoleAvailable()) {
      var i = e[0];
      if ("[object String]" !== Object.prototype.toString.call(i) ? this._supportObjectView() || (i = i.toString()) : i = this._format.apply(null, e), this.timestamp && "[object String]" === Object.prototype.toString.call(i) && (i = this._getTimestamp() + ": " + i), void 0 === window.opera) {
        for (; this.startNestingGroupNames.length;) window.console.group(this.startNestingGroupNames[0]), this.endNestingGroupNames.push(this.startNestingGroupNames.shift());
        this._callConsoleFunction(t, i);
      } else opera.postError(i);
    }
  }
}, EBG.Semi.ServerCommunicator = function (t) {
  for (this._imgArr = [], this._requestCounter = 0, this._throttlingHandler = null, this._throttlingTimeout = 1e3, this._throttlingMax = 10, t = t || {}, this._timeout = EBGVT.Light.Infra.isDefined(t.timeout) ? t.timeout : 0, this._retries = EBGVT.Light.Infra.isDefined(t.retries) ? t.retries : -1, this._retryDelay = EBGVT.Light.Infra.isDefined(t.retryDelay) ? t.retryDelay : -1, i = 0; i < 10; i++) this._imgArr.push(new Image());
}, EBG.Semi.ServerCommunicator.prototype = {
  getRequest: function (t, e, i, n) {
    this._sendRequest(t, {}, !1, e, i, n);
  },
  sendDataRequest: function (t, e, i, n, r) {
    this._sendRequest(t, n || {}, !0, e, i, r);
  },
  _sendRequest: function (t, e, i, n, r, a) {
    var s = this,
      o = e.retry || -1,
      c = function (t, i, s) {
        i && i.status >= 200 && i.status < 400 ? n && n.apply(a || this, [t, i]) : (r && r.apply(a || this, [o, s, i]), o > 0 && (o--, setTimeout(u, e.retryDelay || 1e3)));
      },
      u = function () {
        s._throttlingHandler || (s._throttlingHandler = setTimeout(function () {
          clearTimeout(s._throttlingHandler), s._throttlingHandler = null, s._requestCounter = 0;
        }, s._throttlingTimeout)), s._requestCounter > s._throttlingMax ? setTimeout(function () {
          u();
        }, s._throttlingTimeout / 2) : (s._requestCounter++, i ? EBG.Semi.Infra.loadFileByScriptElem(document, t, c, !1, this) : EBG.Semi.Infra.ajax.get(t, {}, c, !0, {
          timeout: e.timeout
        }));
      };
    u();
  },
  reportUrlsList: function (t, e, i) {
    for (var n = 0; n < this._imgArr.length; n++) this.reportUrl(t, this._imgArr[n], e, i);
  },
  reportUrl: function (t, e, i, n) {
    if (t.length > 0) {
      var r = this;
      a = t.shift(), e.onload = function () {
        i && n && setTimeout(function () {
          i.apply(n, [null, a]);
        }, 1), r.reportUrl(t, e, i, n);
      }, e.onerror = function () {
        i && n && setTimeout(function () {
          i.apply(n, ["failed loading url", a]);
        }, 1), r.reportUrl(t, e, i, n);
      }, e.src = a;
    }
    var a;
  }
}, EBGVT.RuleManager = function (t, e) {
  EBGVT.Light.Infra.isDefined(t) && (this.versaTagObj = e, this._sessionId = "", this._diAppId = -1, this._usercookie = "", this._buildRulesArray(t));
}, EBGVT.RuleManager.prototype = {
  _rules: [],
  _rulesHitted: [],
  setResponseData: function (t) {
    t = t || {}, this._sessionId = t.sessionId || this._sessionId, this._diAppId = t.diAppId || this._diAppId, this._usercookie = t.usercookie || this._usercookie;
  },
  _buildRulesArray: function (t) {
    for (var e in t) this._rules.push(new EBGVT.Rule(t[e], {
      binding: this,
      func: this._onRuleHit
    }));
  },
  _onRuleHit: function (t) {
    if (this.versaTagObj) {
      -1 == EBGVT.Light.Infra.indexOfArray(this._rulesHitted, t) && this._rulesHitted.push(t), this._timeoutHandler && clearTimeout(this._timeoutHandler);
      var e = this;
      this._timeoutHandler = setTimeout(function () {
        e.versaTagObj.generateRequest(null, {
          sessionId: e._sessionId || this.versaTagObj._oneTagObj.sessionId,
          browserEvent: e._rulesHitted,
          diAppId: e._diAppId,
          usercookie: e._usercookie
        }, !0), e._rulesHitted = [];
      }, 1);
    }
  }
}, EBGVT.Events = EBGVT.Events || {}, EBGVT.Rule = function (t, e) {
  this._id = t.id, this._callback = e, this._createEvents(t), this._conditions = t.conditions || this._getDefaultConditionString();
}, EBGVT.Rule.prototype = {
  _createEvents: function (t) {
    this._events = {};
    var e = new RegExp("e[0-9]", "i");
    for (var i in t) if (t.hasOwnProperty(i) && e.test(i)) try {
      EBGVT.Events[t[i].type] && (this._events[i] = new EBGVT.Events[t[i].type](i, t[i].data, {
        func: this._eventMatchHandler,
        binding: this
      }));
    } catch (t) {}
  },
  _getDefaultConditionString: function () {
    var t = [];
    for (var e in this._events) t.push(e);
    return "(" + t.join("|") + ")";
  },
  _eventMatchHandler: function () {
    this._checkRuleHit(this._conditions) && this._callback.func.apply(this._callback.binding, [this._id]), this._resetEventStatus();
  },
  _resetEventStatus: function () {
    for (var t in this._events) this._events[t].reset();
  },
  _checkRuleHit: function (t) {
    try {
      for (var e = this._breakConditionString(t), i = 0; i < e.length; i++) {
        if (!this._evaluateGroup(e[i])) return !1;
      }
      return !0;
    } catch (t) {
      return !1;
    }
  },
  _evaluateGroup: function (t) {
    for (var e = 0; e < t.length; e++) {
      if (this._evaluateEvent(t[e])) return !0;
    }
    return !1;
  },
  _evaluateEvent: function (t) {
    var e = this._events[t];
    return 1 * (e && e.applied);
  },
  _breakConditionString: function (t) {
    for (var e = t.split("&"), i = 0; i < e.length; i++) {
      var n = e[i];
      e[i] = n.substr(1, n.length - 2).split("|");
    }
    return e;
  }
}, EBGVT.Events.ElementEvent = function (t, e, i) {
  (EBGVT.Light.Infra.isDefined(e) || EBGVT.Light.Infra.isDefined(i)) && this.init(t, e, i);
}, EBGVT.Events.ElementEvent.prototype = {
  applied: !1,
  init: function (t, e, i) {
    var n = this;
    this._wins = this._getWindowsArray();
    var r = decodeURIComponent(e.selector),
      a = this._select(r);
    if ("loading" != document.readyState && a.length) {
      this._id = t, this._callback = i;
      for (var s = 0; s < a.length; s++) EBGVT.Light.Infra.addEventListener(a[s], e.eventName, function (t) {
        n.onEvent(t);
      });
    } else setTimeout(function () {
      n.init(t, e, i);
    }, 100);
  },
  onEvent: function () {
    this.applied = !0, this._callback.func.apply(this._callback.binding, [this._id]);
  },
  _select: function (t) {
    for (var e = [], i = 0; i < this._wins.length; i++) {
      var n = this._wins[i].document.querySelectorAll(t);
      if (n) for (var r = 0; r < n.length; r++) e.push(n[r]);
    }
    return e;
  },
  _getWindowsArray: function () {
    for (var t = window, e = [t]; t !== t.parent && t.self !== t.parent;) {
      try {
        if (!t.parent.document.domain) return e;
        t = t.parent, e.push(t);
      } catch (t) {
        return e;
      }
    }
    return e;
  },
  reset: function () {
    this.applied = !1;
  }
}, EBGVT.Events.TimeEvent = function (t, e, i) {
  (EBGVT.Light.Infra.isDefined(e) || EBGVT.Light.Infra.isDefined(i)) && this.init(t, e, i);
}, EBGVT.Events.TimeEvent.prototype = {
  applied: !1,
  init: function (t, e, i) {
    this._id = t, this._callback = i, this._startCounting(e);
  },
  _startCounting: function (t) {
    var e = this;
    t && (e._handler = setTimeout(function () {
      e.onEvent();
    }, t.threshold));
  },
  onEvent: function () {
    this.applied = !0, this._callback.func.apply(this._callback.binding, [this._id]);
  },
  _handler: null,
  reset: function () {}
}, EBGVT.AdvCookieIDManager = function () {
  this._expires = 90;
}, EBGVT.AdvCookieIDManager.prototype = {
  getUserId: function () {
    return EBGVT.SZMKuid || (EBGVT.SZMKuid = this.getIdFromCookie("SZMKuid") || this.createUserID()), EBGVT.SZMKuid;
  },
  getIdFromCookie: function (t) {
    var e,
      i = document.cookie.split(t + "=");
    return i.length > 1 && (e = i[1].split(";")[0]), e;
  },
  createUserID: function () {
    var t = Date.now();
    return EBGVT.Light.Infra.getRandomNumber() + "_" + t;
  },
  setIdToCookie: function (t) {
    var e,
      i,
      n,
      r = "SZMKuid=" + t + "; domain=" + (i = window.location.hostname, (n = i.split(".")).length && 3 === n.length && (n.shift(), i = n.join(".")), i + "; expires=") + (e = this._expires, (nextDate = new Date(Date.now() + 24 * e * 60 * 60 * 1e3)) + "; path=/");
    document.cookie = r;
  }
}, EBGVT.OTTAgent = function () {
  this.isActive() && this.subsribe();
}, EBGVT.OTTAgent.prototype = {
  pendingMessages: [],
  handleExtensionData: function (t, e, i, n) {
    this.isActive() && e && (e.sendTime = n, e.receiveTime = i, e.tagManagerId = t, this.sendToTool("parseServerResponse", {
      data: e
    }));
  },
  initialize: function () {
    this.isInitialized = !0;
    for (var t = this.pendingMessages || [], e = 0; e < t.length; e++) this.sendToTool.apply(this, t[e]);
  },
  subsribe: function () {
    var t = this;
    this.pm.bind("BackgroundServiceResponse", function (e) {
      e && e.data && "setDataCollectionOption" == e.command && (t.initialize(), t.dataCollectionOption = ~~e.data.dataCollectionOption);
    }, this);
  },
  isActive: function () {
    var t = void 0;
    try {
      var e = document.querySelector("#ott_flag") || top.frames.ott_flag;
      t = !!e;
    } catch (t) {}
    return function () {
      return t;
    };
  }(),
  sendToTool: function (t, e, i) {
    if (i || this.isInitialized) {
      (e = e || {}).command = t;
      var n = this.getOneTagTestToolIframe();
      n && this.pm({
        type: t,
        target: n.contentWindow,
        data: e
      });
    } else this.pendingMessages.push(arguments);
  },
  getOneTagTestToolIframe: function () {
    return document.getElementById("szmk_ott");
  },
  send: function (t, e) {
    this.isActive() && (e.category = t, this.sendToTool("addRows", {
      category: t,
      data: e
    }));
  },
  getDataCollectionOption: function () {
    return this.dataCollectionOption;
  },
  pm: function (t, e, i) {
    var n = {};
    return function (e, i, n) {
      i.extend = function () {
        for (var t = arguments[0], e = 1, i = arguments.length; i > e; e++) {
          var n = arguments[e];
          for (var r in n) t[r] = n[r];
        }
        return t;
      }, i.pm = function (t) {
        r.send(t);
      }, i.pm.bind = function (t, e, i, n, a) {
        r.bind(t, e, i, n, a);
      }, i.pm.unbind = function (t, e) {
        r.unbind(t, e);
      }, i.pm.dispatch = function (t, e, i, n) {
        r._dispatch({
          data: JSON.stringify({
            data: e,
            type: t
          }),
          source: i,
          target: n,
          origin: null
        });
      }, i.pm.origin = null;
      var r = {
        send: function (t) {
          var e = i.extend({}, r.defaults, t),
            n = e.target;
          if (e.target && e.type) {
            var a = {
              data: e.data,
              type: e.type
            };
            e.success && (a.callback = r._callback(e.success)), e.error && (a.errback = r._callback(e.error)), "postMessage" in n && !e.hash && (r._bind(), n.postMessage(JSON.stringify(a), e.origin || "*"));
          }
        },
        bind: function (e, n, a, s, o, c) {
          if ("postMessage" in t && !c) {
            r._bind(s || t);
            var u = r.data("listeners.postmessage");
            u || (u = {}, r.data("listeners.postmessage", u));
            var l = u[e];
            l || (l = [], u[e] = l), l.push({
              fn: n,
              origin: o || i.pm.origin,
              bindObj: a
            });
          }
        },
        unbind: function (t, e) {
          var i = r.data("listeners.postmessage");
          if (i) if (t) {
            if (e) {
              var n = i[t];
              if (n) {
                for (var a = [], s = 0, o = n.length; o > s; s++) {
                  var c = n[s];
                  c.fn !== e && a.push(c);
                }
                i[t] = a;
              }
            } else delete i[t];
          } else i = {};
        },
        data: function (t, e) {
          return undefined === e ? r._data[t] : (r._data[t] = e, e);
        },
        _data: {},
        _CHARS: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
        _random: function () {
          for (var t = [], e = 0; 32 > e; e++) t[e] = r._CHARS[0 | 32 * Math.random()];
          return t.join("");
        },
        _callback: function (t) {
          var e = r.data("callbacks.postmessage");
          e || (e = {}, r.data("callbacks.postmessage", e));
          var i = r._random();
          return e[i] = t, i;
        },
        _bind: function (t) {
          r.data("listening.postmessage") || ((t = t || e).addEventListener ? t.addEventListener("message", r._dispatch, !1) : e.attachEvent && t.attachEvent("onmessage", r._dispatch), r.data("listening.postmessage", 1));
        },
        _dispatch: function (t) {
          var e = {};
          try {
            e = JSON.parse(t.data);
          } catch (t) {
            return;
          }
          if (e.type) {
            var i = (r.data("callbacks.postmessage") || {})[e.type];
            if (i) i(e.data);else for (var n = (r.data("listeners.postmessage") || {})[e.type] || [], a = 0, s = n.length; s > a; a++) {
              var o = n[a];
              if (o.origin && t.origin !== o.origin) {
                if (e.errback) {
                  var c = {
                    message: "postmessage origin mismatch",
                    origin: [t.origin, o.origin]
                  };
                  r.send({
                    target: t.source,
                    data: c,
                    type: e.errback
                  });
                }
              } else try {
                var u;
                u = o.bindObj ? o.fn.apply(o.bindObj, [e.data, t]) : o.fn(e.data, t), e.callback && r.send({
                  target: t.source,
                  data: u,
                  type: e.callback
                });
              } catch (i) {
                e.errback && r.send({
                  target: t.source,
                  data: i,
                  type: e.errback
                });
              }
            }
          }
        }
      };
      i.extend(r, {
        defaults: {
          target: null,
          url: null,
          type: null,
          data: null,
          success: null,
          error: null,
          origin: "*",
          hash: !1
        }
      });
    }(this, n), n.pm;
  }(window)
}, EBGUIP = "undefined" != typeof EBGUIP ? EBGUIP : {}, EBGUIP.Events = EBGUIP.Events || {}, EBGUIP.Events.EventName = {
  USER_ID_FOUND: "userIdFound",
  DOC_LOADED: "documentLoaded",
  EBUID_LOADED: "ebuidLoaded"
}, EBGUIP.Events.eventMgr = EBGUIP.Events.eventMgr || new EBG.Semi.Events.EventManager(), EBGUIP = "undefined" != typeof EBGUIP ? EBGUIP : {}, EBGUIP.UserIdProvider = function () {
  "undefined" != typeof gEBMainWindow && gEBMainWindow.providersData ? this._providersData = gEBMainWindow.providersData : "undefined" != typeof gEBMainWindow && (this._providersData = {
    EBUidCache: {
      data: null,
      providerCalled: !1
    }
  }, gEBMainWindow.providersData = this._providersData);
}, EBGUIP.ProvidersReversed = {
  e2: "EBUidCache"
}, EBGUIP.UserIdProvider.prototype = {
  _filter: null,
  _currTagData: null,
  _arrProvidersNamesUsed: null,
  _providers: {
    EBUidCache: {
      isUsed: !1,
      shouldSendData: !0
    }
  },
  _providersData: null,
  getUserIds: function (t) {
    this._filter = t.filter, this._init(), this._currTagData = t, this._currTagData.currDoc || (this._currTagData.currDoc = document), this._arrProvidersNamesUsed = this._getValidProviderNames(t.uip);
    for (var e = 0; e < this._arrProvidersNamesUsed.length; e++) this._providers[this._arrProvidersNamesUsed[e]].isUsed = !0;
    this._loadProviders();
  },
  _init: function () {
    for (var t in this._providers) this._providers[t].isUsed = !1;
  },
  _loadProviders: function () {
    if (this._arrProvidersNamesUsed.length > 0) {
      var t = this._arrProvidersNamesUsed[0];
      if (this._providersData[t].providerCalled) {
        var e = {
          providerName: t
        };
        this._getUserIdentification(e);
      } else {
        EBGUIP.Events.eventMgr.subscribeToEvent(EBGUIP.Events.EventName.USER_ID_FOUND, this._getUserIdentification, this, this._filter);
        var i = this._buildProviderURL(t);
        this._currTagData.isSync ? (EBGUIP.Events.eventMgr.subscribeToEvent(EBGUIP.Events.EventName.DOC_LOADED, this._providerLoaded, this, this._filter), EBG.Semi.Infra.loadFileByScriptElem(this._currTagData.currDoc, i, null, !0)) : EBG.Semi.Infra.loadFileByScriptElem(this._currTagData.currDoc, i, this._providerLoaded, !1, this, {
          providerName: t
        });
      }
    }
  },
  _buildProviderURL: function (t) {
    var e = this._currTagData.scriptsPath + "UserProviders" + this._currTagData.uipv + "/" + t + ".js";
    return -1 == this._currTagData.scriptsPath.indexOf("http") && (e = this._getRequestProtocol(this._currTagData.ebPtcl) + e), e;
  },
  _getRequestProtocol: function (t) {
    if (t) return t;
    var e = "https://secure-",
      i = location.protocol;
    if ("javascript:" == i) try {
      i = parent.location.protocol;
    } catch (t) {}
    return "http:" == i && (e = i + "//"), e;
  },
  _providerLoaded: function (t) {
    var e = t.providerName;
    -1 != EBG.Semi.Infra.indexOfArray(this._arrProvidersNamesUsed, e) && new window.EBGUIP[e]().init(this._currTagData);
  },
  _getUserIdentification: function (t) {
    var e = EBG.Semi.Infra.indexOfArray(this._arrProvidersNamesUsed, t.providerName);
    if (-1 != e) if (t.tokenName && t.id && this._providers[t.providerName].shouldSendData && !this._providersData[t.providerName].data && (this._providersData[t.providerName].data = "&" + t.tokenName + "=" + t.id), this._providersData[t.providerName].providerCalled = !0, this._arrProvidersNamesUsed.splice(e, 1), 0 == this._arrProvidersNamesUsed.length) {
      var i = {
        userIdStr: this._getProvidersData()
      };
      EBG.Semi.Events.eventMgr.dispatchEvent(EBG.Semi.EventName.ALL_USER_ID_FOUND, i, this._filter);
    } else this._loadProviders();
  },
  _getProvidersData: function () {
    var t = "";
    for (var e in this._providersData) this._providers[e].isUsed && this._providers[e].shouldSendData && (t += this._providersData[e].data);
    return t;
  },
  _getValidProviderNames: function (t) {
    for (var e = this._cleanUIPList(t), i = [], n = 0; n < e.length; n++) {
      var r = EBGUIP.ProvidersReversed["e" + e[n]];
      r && (i[i.length] = r);
    }
    return i;
  },
  _cleanUIPList: function (t) {
    var e = [];
    if (t) for (var i = 0; i < t.length; ++i) EBGUIP.ProvidersReversed["e" + t[i]] && e.push(t[i]);
    return e;
  }
}, EBG.Semi.AttributionEnum = function () {}, EBG.Semi.AttributionEnum.UrlParamNames = {
  ID: "onetagid",
  DISP_TYPE: "dispType",
  SYNC: "sync",
  ONETAG_URL: "ebOneTagURL",
  PAGE_URL: "pageurl",
  DEBUG_MODE: "debugmode",
  NO_SCRIPT: "ns",
  MOBILE: "mb",
  ACTIVITY_PARAMS: "activityValues",
  RETARGET_PARAMS: "retargetingValues",
  DYNAMIC_RETARGET_PARAMS: "dynamicRetargetingValues",
  CONDITIONAL_PARAMS: "acp",
  RANDOM: "rnd",
  SEC_CALL: "secCall",
  SESSION_ID: "sessionid",
  ORIG_URL_LENGTH: "origLength",
  SERVING_PIPE: "/Serving",
  PREV_SERVING_PIPE: "/BurstingPipe",
  BROWSER_EVENT: "tp_be",
  ADV_DEVICE_ID: "ebaddid",
  DI_APP_ID: "diappid",
  USER_COOKIE: "usercookie",
  POST_CLICK: "pstclk",
  UIN: "uinadv",
  OPTOUT: "optout"
}, EBG.Semi.AttributionEnum.DisplayTypes = {
  IFRAME: "iframe",
  JAVASCRIPT: "js"
}, EBG.Semi.AttributionEnum.HttpProtocol = {
  HTTP: "http",
  HTTPS: "https"
}, EBGVT = "undefined" != typeof EBGVT ? EBGVT : {}, EBGVT.Light = EBGVT.Light || {}, EBGVT.Light.Infra = EBG.Semi.Infra, EBGVT.Light.Logger = EBG.Semi.Logging.Logger, EBGVT.EBGUIP = EBGUIP, EBGVT.OneTagLogger = function () {}, EBGVT.OneTag = function (t) {
  this.inittime = new Date().getTime(), t && t.$ && (this._onready = t.$), this._initDataPipe(), this.dp.log(EBG.DataProfile.GENERAL, {
    inittime: this.inittime
  });
  try {
    window.__gpp && this.dp.log(EBG.DataProfile.FEATURE, {
      gpp: 1
    });
  } catch (t) {}
  try {
    this._scriptElement = EBG.Semi.Infra.getCurrentScriptElement(), this._scriptElement && this._scriptElement.options && (this.options = this._scriptElement.options), this.tagid = this.options && this.options.id || window.versaTag && window.versaTag.id, this.sessionId = this.generateSessionId(), this.szmkuin = null;
    var e = this._getOneTagScript();
    this.dp.log(EBG.DataProfile.SERVING, {
      ua: navigator.userAgent,
      topwindow: ~~(gEBMainWindow == top),
      otpath: e && e.src ? e.src : ""
    }), this.logNeeded = EBGVT.Light.Infra.getUrlParameter(EBGVT.Light.Logger.DebugMode) ? 1 : 0, this.oneTagLogger = new EBGVT.Light.Logger(EBGVT.Light.Infra.getUrlParameter(EBGVT.Light.Logger.DebugMode)), this.uidProviders = new EBGVT.EBGUIP.UserIdProvider(), this.oneTagLogger.timestamp = !0, this.ott = new EBGVT.OTTAgent(), this.serverCommunicator = this.serverCommunicator || new EBG.Semi.ServerCommunicator(), this.gdprDetector = EBG.Adaptors.GDPRDetector(), this.uspDetector = new EBG.Adaptors.USPrivacyDetector({
      dataPipe: this.dp
    }), this.pageUrl = null, this._init();
  } catch (t) {
    this._handleUnhandledError(t);
  }
}, EBGVT.OneTag.prototype = {
  _userIdProvidersCalled: !1,
  _providers: null,
  _onpreready: [],
  _onready: [],
  isReady: !1,
  _scriptElement: null,
  _responseCount: 0,
  _isHandlingRequest: !1,
  _totalRequests: 0,
  _totalResponses: 0,
  _handleUnhandledError: function (t, e) {
    try {
      this.dp.log(EBG.DataProfile.GENERAL, {
        pageurl: EBGVT.Light.Infra.getWindowLocation().href
      });
    } catch (t) {}
    this.dp.log(EBG.DataProfile.GENERAL, {
      tagid: this.tagid || "none"
    }), e || this.dp.incrementLog(EBG.DataProfile.MONITOR, {
      errcount: 1
    }), 9 == e && (this.dp.log(EBG.DataProfile.SERVING, {
      malformed: 1
    }), this.dp.incrementLog(EBG.DataProfile.MONITOR, {
      malformedres: 1
    }));
    var i = this.dp.parseException(t);
    this.dp.log(EBG.DataProfile.ERROR, {
      errmsg: i.message,
      errfunc: i.errfunc,
      errpos: i.errpos,
      errstack: i.errstack,
      errtype: e || 0
    }), this.dp.send("tme", EBG.DataPipeSendMode.INSTANT), this.dp.log(EBG.DataProfile.FEATURE, {
      err: 1
    });
  },
  _init: function () {
    this._getServerConfiguration(function (t) {
      if (t && !t.empty) this._oneTagObj = t;else if (window.versaTag) {
        window.versaTag.sync = 0, window.versaTag.ptcl = "https", this._oneTagObj = window.versaTag, this._oneTagObj.uin = this._getDataLayerProperty("SizmekDataLayer", "uin");
        var e = this._getDataLayerProperty("SizmekDataLayer", "optout");
        EBGVT.Light.Infra.isDefined(e) && (this._oneTagObj.optout = ~~e);
      } else if (this.options && this.options.id && (window.versaTag = {}, versaTag.id = this.options.id, versaTag.sync = 0, versaTag.dispType = "js", versaTag.ptcl = "https", versaTag.bsUrl = this.options.bsUrl || "bs.serving-sys.com/Serving", this._oneTagObj = window.versaTag, this.options.parameters)) {
        var i = this.options.parameters;
        versaTag.activityParams = this._parameterParse(i.conversion, "conversion"), versaTag.dynamicRetargetParams = this._parameterParse(i.retargeting, "retargeting"), versaTag.conditionalParams = this._parameterParse(i.conditional, "conditional");
      }
      if (this._oneTagObj) {
        t = this._oneTagObj;
        this.dp.log(EBG.DataProfile.OPTION, {
          disptype: t.dispType,
          ptcl: t.ptcl,
          sync: t.sync,
          inactive: t.inactive
        }), this.onready(this.options && this.options.onready), this._handleClientRules(this._oneTagObj.clientRules), this.gdprDetector.hasConsent(function (e) {
          if (e) {
            this.sessionId = this.getSessionId();
            var i = this.getSZMKUin();
            if (i && i.id && i.time && this.dp.log(EBG.DataProfile.FEATURE, {
              szmkuin: i.id,
              szmkuintime: i.time
            }), t.fpi) {
              var n = new EBGVT.AdvCookieIDManager(),
                r = n.getUserId();
              n.setIdToCookie(r), this.getAdvertiserCookieId() && this.dp.log(EBG.DataProfile.FEATURE, {
                advcookieidpresent: 1
              }), this.setAdvertiserCookieId(r);
            }
          }
          this.dp.log(EBG.DataProfile.GENERAL, {
            otsid: this.sessionId,
            tagid: this.tagid || "none"
          }), this._ready();
        }, this, t.optout);
      }
    });
  },
  _initDataPipe: function () {
    var t = this._extractDomainFromOneTagScript(),
      e = "https://lm" + (t = t.substr(t.indexOf("."))) + "/lm/tme",
      i = "https://lm" + t + "/lm/tmd",
      n = "https://lm" + t + "/lm/tmm",
      r = new EBG.DataPipeManager(+new Date()).getPipe(this.generateSessionId());
    r.isBucketExists("tme") || r.createBucket("tme", ["general", "serving", "option", "error"], e), r.isBucketExists("tmd") || r.createBucket("tmd", ["general", "serving", "option", "feature"], i, {
      tickTimes: 1,
      tickDelay: 3e4,
      sendOnUnload: !0
    }), r.isBucketExists("tmm") || r.createBucket("tmm", ["monitor"], n, {
      tickTimes: 1,
      tickDelay: 3e4,
      sendOnUnload: !0,
      preventEncoding: !0
    }), this._handleAPIExceptions(), this.dp = r;
  },
  _handleAPIExceptions: function () {
    for (var t in $this = this, this) t && this.hasOwnProperty(t) && "_" == !t.indexOf(0) && function (t) {
      var e = $this[t];
      $this[t] = function () {
        try {
          e.apply($this, arguments);
        } catch (t) {
          this._handleUnhandledError(t, 2);
        }
      };
    }(t);
  },
  _getServerConfiguration: function (t) {
    var e,
      i = this;
    try {
      e = this._getConfigurationPath();
    } catch (e) {
      return void t.apply(i, [null, e]);
    }
    var n = new Date().getTime();
    this.serverCommunicator.getRequest(e, function (e, r) {
      try {
        i.dp.log(EBG.DataProfile.MONITOR, {
          clatency: new Date().getTime() - n
        }), i.dp.log(EBG.DataProfile.SERVING, {
          cstatus: r.status
        });
        var a = JSON.parse(e);
      } catch (e) {
        i.dp.log(EBG.DataProfile.MONITOR, {
          errconfparse: 1
        }), i._handleUnhandledError(e), t.apply(i, [null, e]);
      }
      try {
        a.developerScripts && a.developerScripts.preScript ? i._runDeveloperScript(a.developerScripts.preScript, function () {
          t.apply(i, [i._parseConfig(a)]);
        }) : t.apply(i, [i._parseConfig(a)]);
      } catch (e) {
        i.dp.log(EBG.DataProfile.FEATURE, {
          errdscript: 1
        }), i._handleUnhandledError(e), t.apply(i, [null, e]);
      }
    }, function (e, n, r) {
      i.dp.log(EBG.DataProfile.SERVING, {
        cretries: e,
        cstatus: r.status,
        ctimeout: ~~n
      }), e <= 0 && t.apply(i, [null, new Error("Unable to get configuration file")]);
    }, !0);
  },
  _parseConfig: function (t) {
    var e = {};
    if (t.empty) return t;
    for (var i in t) "parameters" !== i && (e[i] = t[i]);
    var n = this.options || {};
    if (e.id = n.id || window.versaTag && versaTag.id || "unknown", e.sync = 0, e.dispType = n.dispType || t.dispType || "js", e.bsUrl = n.bsUrl || t.bsUrl || "bs.serving-sys.com/Serving", e.ptcl = "https", e.advertiserDeviceId = n.advertiserDeviceId, e.inactive = t.inactive, e.fpi = t.fpi || !1, t && t.parameters) {
      if (n.parameters) for (var r in n.parameters) {
        var a = n.parameters[r];
        if ("array" != EBG.Semi.Infra.typeOf(a)) {
          var s = [];
          for (var i in a) {
            var o = {};
            o[i] = a[i], s.push(o);
          }
          a = s;
        }
        t.parameters[r] = t.parameters[r] || [];
        for (var c = this._getFieldsFromGroup(t.parameters[r]), u = 0; u < a.length; u++) {
          var l = a[u],
            d = this._getObjField(l),
            p = c.indexOf(d);
          -1 == p ? t.parameters[r].push(l) : t.parameters[r][p] = l;
        }
      }
      var h = t.parameters;
      if (t.parameters.dataLayer = n.dataLayer || t.parameters.dataLayer, this.options && (this.options.dataLayer = t.parameters.dataLayer), e.dataLayer = t.parameters.dataLayer, e.activityParams = this._parameterParse(h.conversion, "conversion", t.parameters.dataLayer), e.dynamicRetargetParams = this._parameterParse(h.retargeting, "retargeting", t.parameters.dataLayer), e.conditionalParams = this._parameterParse(h.conditional, "conditional", t.parameters.dataLayer), window.versaTag) {
        var g = ["activityParams", "dynamicRetargetParams", "conditionalParams"];
        for (u = 0; u < g.length; u++) {
          if (r = versaTag[g[u]]) for (var i in r) EBGVT.Light.Infra.isDefinedNotNull(r[i]) && !EBGVT.Light.Infra.isDefined(e[g[u]][i]) && (e[g[u]][i] = r[i]);
        }
      }
    }
    var f = n.uparam || t.uparam;
    e.uin = f ? this._parameterParse(f, "uin", e.dataLayer || "SizmekDataLayer") : this._getDataLayerProperty(t.parameters.dataLayer || "SizmekDataLayer", "uin"), "object" != typeof e.uin && (e.uin = {
      defaultkeyname: e.uin
    });
    var m = this._getDataLayerProperty(e.dataLayer || "SizmekDataLayer", "optout");
    return EBGVT.Light.Infra.isDefined(m) && (e.optout = ~~m), e.dataRequestOptions = t.dataRequestOptions, e;
  },
  _getDataLayerProperty: function (t, e) {
    return window[t] && window[t][e];
  },
  _getFieldsFromGroup: function (t) {
    for (var e = [], i = 0; i < t.length; i++) for (var n in t[i]) e.push(n);
    return e;
  },
  _getObjField: function (t) {
    if (!t) return null;
    for (var e in t) return e;
  },
  _parameterParse: function (t, e, i) {
    var n = {};
    if (!t) return n;
    "object" == EBG.Semi.Infra.typeOf(t) && (t = [t]), i = i || "SizmekDataLayer";
    for (var r = 0; r < t.length; r++) {
      var a = t[r];
      for (var s in a) {
        var o = this._getValue(s, a[s], e, i);
        EBGVT.Light.Infra.isDefinedNotNull(o) && (n[s] = o);
      }
    }
    return n;
  },
  _getValue: function (t, e, i, n) {
    var r;
    "array" != EBG.Semi.Infra.typeOf(e) && (e = [e]);
    for (var a = 0; a < e.length; a++) {
      switch (s = e[a], "object" != EBG.Semi.Infra.typeOf(s) && (s = {
        type: "CONST",
        value: s
      }), s.type) {
        case "JS":
          r = EBG.Semi.Infra.getValueFromPath(s.path);
          break;
        case "QS":
          r = EBG.Semi.Infra.getQuerystringParam(s.key || s.path);
          break;
        case "DL":
          n && s.path && (r = EBG.Semi.Infra.getValueFromPath(n + "." + s.path));
          break;
        case "CONST":
          r = s.value;
      }
      if (EBGVT.Light.Infra.isDefinedNotNull(r) && "" != r) return this.ott.send("variables", {
        category: i,
        variableName: t,
        type: s.type,
        path: s.path,
        value: r
      }), r;
    }
    for (a = e.length - 1; a >= 0; a--) {
      var s;
      if ((s = e[a]).def) return this.ott.send("variables", {
        type: s.type,
        path: s.path,
        value: s.def + " (default)"
      }), s.def;
    }
    return null;
  },
  _getConfigurationPath: function () {
    var t = this._extractDomainFromOneTagScript(),
      e = this.tagid;
    return 0 != t.indexOf("ds.serving-sys.com") && 0 != t.indexOf("ds.serving-sys-int.com") || (t = "secure-" + t), "https://" + t + "/adServingData/" + this._getEnv(t) + "/TMClient/" + e.substr(e.length - 1, 1) + "/" + e;
  },
  _extractDomainFromOneTagScript: function () {
    var t = this._getOneTagScript();
    if (!t || !t.src) return "ds.serving-sys.com";
    var e = t.src;
    return (e.indexOf("//") > -1 ? e.split("/")[2] : e.split("/")[0]).split(":")[0].split("?")[0];
  },
  _getEnv: function (t) {
    if (!t) return "";
    switch (t.toLowerCase().replace("secure-", "")) {
      case "ds.serving-sys-dev4.com":
        return "DEV4";
      case "ds.serving-sys-int.com":
        return "UAT";
      default:
        return "PROD";
    }
  },
  onready: function (t, e) {
    if (t) if (this.isReady) try {
      t.apply(this);
    } catch (t) {} else e ? this._onpreready.push(t) : this._onready.push(t);
  },
  _ready: function () {
    if (!this.isReady) {
      this.isReady = !0;
      for (var t = 0; t < this._onpreready.length; t++) this._onready.unshift(this._onpreready[t]);
      for (t = 0; t < this._onready.length; t++) try {
        this._onready[t].apply(this);
      } catch (t) {}
    }
  },
  getQuerystringConfiguration: function (t) {
    try {
      for (var e = t.src.split("?")[1], i = {}, n = e.split("&"), r = 0; r < n.length; r++) {
        var a = n[r].split("=");
        i[a[0]] = a[1];
      }
      return i.dispType = i.dispType || "js", i.sync = 0, i;
    } catch (t) {
      return null;
    }
  },
  generateRequest: function (t, e, i) {
    var n = this;
    if (this.ott.isActive() && this.ott.sendToTool("oneTagFound", {}, !0), this.ott.isActive() && null == this.ott.getDataCollectionOption()) {
      this.ott.sendToTool("requestDataCollectionOption", {}, !0);
      n = this;
      setTimeout(function () {
        n.generateRequest(t, e, i);
      }, 100);
    } else if (!this.isInactive()) if (this._isHandlingRequest) {
      n = this;
      setTimeout(function () {
        n.generateRequest(t, e, i);
      }, 100);
    } else if (this._isHandlingRequest = !0, this._oneTagObj) {
      this.oneTagLogger.info("One Tag Started"), this.pageUrl = this._oneTagObj.overridePageUrl || t, e && e.firstPartyServingDomain && (this._oneTagObj.bsUrl = e.firstPartyServingDomain + EBG.Semi.AttributionEnum.UrlParamNames.SERVING_PIPE);
      var r = this._oneTagObj.id,
        a = e && e.sessionId ? e.sessionId : this.generateSessionId();
      this._oneTagObj.sessionId = a;
      var s = e && e.browserEvent ? "$$" + e.browserEvent.join("&") + "$$" : "";
      s && this.dp.incrementLog(EBG.DataProfile.MONITOR, {
        tpbe: 1
      });
      var o = e && EBGVT.Light.Infra.isDefined(e.diAppId) ? e.diAppId : -1,
        c = e && EBGVT.Light.Infra.isDefined(e.usercookie) ? e.usercookie : "",
        u = this._generateBsURL(this._oneTagObj, this.pageUrl, i, a, s, o, c);
      this.gdprDetector.getConsentData(function (t) {
        this.consentData = t, u = this._addGdprConsent(u, t), this.uspDetector.getConsentData(function (t) {
          this.ccpaConsentData = t, u = this._addUspConsent(u, t), this.oneTagLogger.info("Server URL: " + u), e && e.preServingTasks && e.preServingTasks.length > 0 && this._userIdProvidersCalled && (u = this._addProviderUserId(u, e)), this.fireRequest(r, a, u);
        }, this);
      }, this);
    } else if (t) this._isHandlingRequest = !1, versaTagObj.onready(function () {
      this.generateRequest(t, e, i);
    });else if (e && i) {
      u = document.location.href;
      if (e && e.firstPartyServingDomain) {
        var l = document.domain,
          d = l + location.pathname;
        l && l.length > 0 && (u = u.indexOf(d) > 0 ? u.replace(d, e.firstPartyServingDomain + EBG.Semi.AttributionEnum.UrlParamNames.SERVING_PIPE) : u.replace(l, e.firstPartyServingDomain));
      }
      u = (u = u.replace(EBG.Semi.AttributionEnum.UrlParamNames.DISP_TYPE + "=" + EBG.Semi.AttributionEnum.DisplayTypes.IFRAME, EBG.Semi.AttributionEnum.UrlParamNames.DISP_TYPE + "=" + EBG.Semi.AttributionEnum.DisplayTypes.JAVASCRIPT)).replace("cn=ot", "cn=ot&" + EBG.Semi.AttributionEnum.UrlParamNames.SEC_CALL + "=1" + (e.sessionId ? "&sessionid=" + e.sessionId : ""));
      (u = this._addProviderUserId(u, e)).substr(u.indexOf(EBG.Semi.AttributionEnum.UrlParamNames.SYNC) + (EBG.Semi.AttributionEnum.UrlParamNames.SYNC + "=").length, 1);
      var p = !1;
      this._onRequestSent(), this.serverCommunicator.sendDataRequest(u, function (t, e) {
        p && n.dp.log(EBG.DataProfile.SERVING, {
          retrysuccess: 1
        }), n._onResponse(e, {
          sendTime: new Date().getTime()
        });
      }, function (t, e, i) {
        n.dp.log(EBG.DataProfile.SERVING, {
          retries: t,
          status: i ? i.status : "",
          timeout: ~~e
        }), n.dp.incrementLog(EBG.DataProfile.MONITOR, {
          failedreq: 1
        }), p = !0, t <= 0 && n._onResponse(i, {
          sendTime: new Date().getTime()
        });
      }, this._oneTagObj.dataRequestOptions, this);
    }
  },
  isInactive: function () {
    return this._oneTagObj && this._oneTagObj.inactive;
  },
  _onRequestSent: function () {
    this._totalRequests++, this.dp.log(EBG.DataProfile.SERVING, {
      total: this._totalRequests
    }), 1 == this._totalRequests && (this._sendtime = new Date().getTime(), this.dp.log(EBG.DataProfile.SERVING, {
      sendtime: this._sendtime - this.inittime
    }));
  },
  _runDeveloperScript: function (t, e) {
    var i = this;
    try {
      if (t) {
        var n = /[\s\S]*<script.*?>([\s\S]*)<\/script>[\s\S]*/g;
        if (t.match(n)) {
          var r = n.exec(t);
          r.length > 0 && EBG.Semi.Infra.executeTextByScriptElem(document, r[1]), e && e.apply(i);
        } else {
          i = this;
          EBG.Semi.Infra.loadFileByScriptElem(document, t, function () {
            e && e.apply(i);
          }, 0, this);
        }
      } else e && e.apply(i);
    } catch (t) {
      i._handleUnhandledError(t, 2), e && e.apply(i);
    }
  },
  fireRequest: function (t, e, i) {
    var n = this;
    if (this._oneTagObj.dispType.toLowerCase() == EBG.Semi.AttributionEnum.DisplayTypes.IFRAME) i += "&st=" + new Date().getTime(), this._isHandlingRequest = !1, EBGVT.Light.Infra.createUnfriendlyIframe(i, this._oneTagObj.sync);else {
      var r = !1;
      this.serverCommunicator.sendDataRequest(i, function (i, a) {
        r && n.dp.log(EBG.DataProfile.SERVING, {
          retrysuccess: 1
        }), n._onResponse(a, {
          sessionId: e,
          id: t,
          sendTime: new Date().getTime()
        });
      }, function (i, a, s) {
        n.dp.log(EBG.DataProfile.SERVING, {
          retries: i,
          status: s ? s.status : "",
          timeout: ~~a
        }), n.dp.incrementLog(EBG.DataProfile.MONITOR, {
          failedreq: 1
        }), r = !0, i <= 0 && n._onResponse(s, {
          sessionId: e,
          id: t,
          sendTime: new Date().getTime()
        });
      }, this._oneTagObj.dataRequestOptions, this);
    }
    this._onRequestSent();
  },
  _onResponse: function (t, e) {
    t && (this.dp.log(EBG.DataProfile.SERVING, {
      status: t.status
    }), 200 == t.status && this.dp.incrementLog(EBG.DataProfile.MONITOR, {
      handledreq: 1
    })), this._handleResponse(e);
  },
  hasStorage: function () {
    try {
      return localStorage.setItem("eyeTesting", "eyeTesting"), localStorage.removeItem("eyeTesting"), !0;
    } catch (t) {
      return !1;
    }
  },
  getSessionId: function () {
    if (!this.hasStorage()) return this.generateSessionId();
    var t = "SZMKSessionId",
      e = null,
      i = new Date();
    if (n = localStorage.getItem(t)) try {
      var n = JSON.parse(n);
      i.getTime() - n.time <= 18e5 && (e = n.id);
    } catch (t) {}
    e = e || this.generateSessionId();
    try {
      localStorage.setItem(t, JSON.stringify({
        time: i.getTime(),
        id: e
      }));
    } catch (t) {}
    return e;
  },
  getSZMKUin: function () {
    if (!this.hasStorage()) return null;
    var t = "SZMKUin";
    try {
      var e = localStorage.getItem(t);
      if (e) try {
        return JSON.parse(e);
      } catch (t) {}
      var i = null;
      i = {
        time: new Date().getTime(),
        id: this.generateSessionId()
      }, localStorage.setItem(t, JSON.stringify(i));
    } catch (t) {}
    return i;
  },
  generateSessionId: function () {
    var t = "",
      e = "12345678";
    t += e.charAt(Math.floor(Math.random() * e.length)), e = "0123456789";
    for (var i = 0; i < 18; i++) t += e.charAt(Math.floor(Math.random() * e.length));
    return t;
  },
  getAdvertiserCookieId: function () {
    return this._oneTagObj.uin && this._oneTagObj.uin.ADV_COOKIE_ID;
  },
  setAdvertiserCookieId: function (t) {
    this._oneTagObj.fpi && (this._oneTagObj.uin.ADV_COOKIE_ID = t);
  },
  setActivityParam: function (t, e) {
    this._oneTagObj.activityParams || (this._oneTagObj.activityParams = {}), this._oneTagObj.activityParams[t] = e;
  },
  getActivityParam: function (t) {
    var e = null;
    return this._oneTagObj.activityParams && this._oneTagObj.activityParams[t] && (e = this._oneTagObj.activityParams[t]), e;
  },
  clearActivityParam: function () {
    this._oneTagObj.activityParams = {};
  },
  setRetargetParam: function (t, e) {
    this._oneTagObj.retargetParams || (this._oneTagObj.retargetParams = {}), this._oneTagObj.retargetParams[t] = e;
  },
  getRetargetParam: function (t) {
    var e = null;
    return this._oneTagObj.retargetParams && this._oneTagObj.retargetParams[t] && (e = this._oneTagObj.retargetParams[t]), e;
  },
  clearRetargetParam: function () {
    this._oneTagObj.retargetParams = {};
  },
  setDynamicRetargetParam: function (t, e) {
    this._oneTagObj.dynamicRetargetParams || (this._oneTagObj.dynamicRetargetParams = {}), this._oneTagObj.dynamicRetargetParams[t] = e;
  },
  getDynamicRetargetParam: function (t) {
    var e = null;
    return this._oneTagObj.dynamicRetargetParams && this._oneTagObj.dynamicRetargetParams[t] && (e = this._oneTagObj.dynamicRetargetParams[t]), e;
  },
  clearDynamicRetargetParam: function () {
    this._oneTagObj.dynamicRetargetParams = {};
  },
  setConditionalParam: function (t, e) {
    this._oneTagObj.conditionalParams || (this._oneTagObj.conditionalParams = {}), this._oneTagObj.conditionalParams[t] = e;
  },
  getConditionalParam: function (t) {
    var e = null;
    return this._oneTagObj.conditionalParams && this._oneTagObj.conditionalParams[t] && (e = this._oneTagObj.conditionalParams[t]), e;
  },
  clearConditionalParam: function () {
    this._oneTagObj.conditionalParams = {};
  },
  _generateBsURL: function (t, e, i, n, r, a, s) {
    t.bsUrl = t.bsUrl || "bs.serving-sys.com/Serving", t.bsUrl = t.bsUrl.replace(EBG.Semi.AttributionEnum.UrlParamNames.PREV_SERVING_PIPE, EBG.Semi.AttributionEnum.UrlParamNames.SERVING_PIPE);
    var o = this._getProtocol() + t.bsUrl + "?";
    if (this.ott.isActive() ? o += "cn=ottp" : o += "cn=ot", o += "&" + EBG.Semi.AttributionEnum.UrlParamNames.ID + "=" + t.id + "&" + EBG.Semi.AttributionEnum.UrlParamNames.DISP_TYPE + "=" + t.dispType + "&" + EBG.Semi.AttributionEnum.UrlParamNames.SYNC + "=" + t.sync, i && (o += "&" + EBG.Semi.AttributionEnum.UrlParamNames.SEC_CALL + "=1"), "0" != n && (o += "&" + EBG.Semi.AttributionEnum.UrlParamNames.SESSION_ID + "=" + n), t.mobile && (o += "&" + EBG.Semi.AttributionEnum.UrlParamNames.MOBILE + "=" + t.mobile), r && (o += "&" + EBG.Semi.AttributionEnum.UrlParamNames.BROWSER_EVENT + "=" + r), a >= 0 && (o += "&" + EBG.Semi.AttributionEnum.UrlParamNames.DI_APP_ID + "=" + a), s && (o += "&" + EBG.Semi.AttributionEnum.UrlParamNames.USER_COOKIE + "=" + s), t.advertiserDeviceId && (o += "&" + EBG.Semi.AttributionEnum.UrlParamNames.ADV_DEVICE_ID + "=" + t.advertiserDeviceId), e = e || EBGVT.Light.Infra.getWindowLocation(), this.dp.log(EBG.DataProfile.GENERAL, {
      pageurl: "string" == typeof e ? e : EBGVT.Light.Infra.getWindowLocation().href
    }), i && this.dp.log(EBG.DataProfile.SERVING, {
      seccall: 1
    }), o += "&" + EBG.Semi.AttributionEnum.UrlParamNames.PAGE_URL + "=$$" + encodeURIComponent(e) + "$$", t.activityParams = t.activityParams || {}, t.activityParams.Session = t.activityParams && t.activityParams.Session || this.sessionId, o += this._prepareParamUrl(t.activityParams, EBG.Semi.AttributionEnum.UrlParamNames.ACTIVITY_PARAMS), o += this._prepareParamUrl(t.retargetParams, EBG.Semi.AttributionEnum.UrlParamNames.RETARGET_PARAMS), o += this._prepareParamUrl(t.conditionalParams, EBG.Semi.AttributionEnum.UrlParamNames.CONDITIONAL_PARAMS), o += this._prepareParamUrl(t.dynamicRetargetParams, EBG.Semi.AttributionEnum.UrlParamNames.DYNAMIC_RETARGET_PARAMS), this.ott.isActive() && (o += "&tagsrunningmode=" + this.ott.getDataCollectionOption()), t.dispType.toLowerCase() == EBG.Semi.AttributionEnum.DisplayTypes.IFRAME) {
      var c = document.getElementById("ebOneTagUrlId");
      c && (o += "&" + EBG.Semi.AttributionEnum.UrlParamNames.ONETAG_URL + "=$$" + encodeURIComponent(c.src) + "$$");
    }
    this.logNeeded && (o += "&" + EBGVT.Light.Logger.DebugMode + "=" + this.logNeeded), o += "&" + EBG.Semi.AttributionEnum.UrlParamNames.NO_SCRIPT + "=0", o += "&" + EBG.Semi.AttributionEnum.UrlParamNames.RANDOM + "=" + EBGVT.Light.Infra.getRandomNumber(), t.debugData && (o += "&" + t.debugData);
    var u = window,
      l = EBGVT.Light.Infra.getTopLevelReferrer(u);
    if (l) {
      var d = EBGVT.Light.Infra.getTokenValueFromURL("ebReferrer", l);
      if (!s) {
        var p = EBGVT.Light.Infra.getTokenValueFromURL(EBG.Semi.AttributionEnum.UrlParamNames.USER_COOKIE, l);
        p && (o += "&usercookie=u2=" + p);
      }
      var h = d || l;
      if (t.referralOnlyDomain) {
        var g = document.createElement("a");
        g.setAttribute("href", h), g.search && (h = g.toString().replace(g.search, ""));
      }
      var f = EBGVT.Light.Infra.urlAvailableLength(o) - 48;
      f > 0 && (h.length > f && (h = h.substr(0, f)), o += "&referrer=$$" + encodeURIComponent(h) + "$$");
    }
    var m = 0,
      v = EBG.Semi.Infra.getQuerystringParam("etime");
    v && !isNaN(v) && (m = Date.now() / 1e3 - parseInt(v));
    if (0 == this._totalRequests && m <= 900 && !EBG.Semi.Infra.isPageRefresh()) for (var E, _ = ["gclid", "msclkid", "tmdata"], T = 0; T < _.length; T++) if (E = EBG.Semi.Infra.getQuerystringParam(_[T])) {
      if ("tmdata" != _[T]) E = '{"clkid":"' + E + '"}';else try {
        E = atob(E);
      } catch (t) {
        this._handleUnhandledError(t, 8);
      }
      o += "&" + EBG.Semi.AttributionEnum.UrlParamNames.POST_CLICK + "=" + encodeURIComponent(E);
      break;
    }
    if (t.uin && this._getObjField(t.uin)) try {
      o += "&" + EBG.Semi.AttributionEnum.UrlParamNames.UIN + "=" + encodeURIComponent(JSON.stringify(t.uin));
    } catch (t) {
      this._handleUnhandledError(t, 2);
    }
    return EBGVT.Light.Infra.isDefined(t.optout) && (o += "&" + EBG.Semi.AttributionEnum.UrlParamNames.OPTOUT + "=" + t.optout), o;
  },
  _prepareParamUrl: function (t, e) {
    var i = !0,
      n = "";
    for (var r in t) if (t.hasOwnProperty(r) && (null != t[r] && e != EBG.Semi.AttributionEnum.UrlParamNames.CONDITIONAL_PARAMS && "" != t[r] || e == EBG.Semi.AttributionEnum.UrlParamNames.CONDITIONAL_PARAMS)) {
      var a = encodeURIComponent(r + "=" + t[r]);
      i ? (n += "&" + e + "=$$" + a, i = !1) : n += encodeURIComponent("&") + a;
    }
    return i || (n += "$$"), n;
  },
  _getProtocol: function () {
    return "https://";
  },
  _getBsResponseContent: function (t) {
    var e = t || this._oneTagObj;
    return bsResponseObj[e && e.id && e.sessionId ? "ot" + e.id + "-" + e.sessionId : Object.keys(bsResponseObj)[0]];
  },
  _handleResponse: function (t, e) {
    var i = null,
      n = this;
    try {
      this._totalResponses++, 1 == this._totalResponses && (this.dp.log(EBG.DataProfile.SERVING, {
        restime: new Date().getTime() - this.inittime
      }), this._sendtime && this.dp.log(EBG.DataProfile.MONITOR, {
        latency: new Date().getTime() - this._sendtime
      })), i = this._getBsResponseContent(t);
    } catch (r) {
      return e = e || 0, !i && e < 10 ? (e++, void setTimeout(function () {
        n._handleResponse.apply(n, [t, e]);
      }, 20)) : void this._handleUnhandledError(r, 9);
    }
    try {
      this.oneTagLogger.info("Server response: " + i);
      var r = this._deserializeResponse(i);
      if (i) {
        if (i.extensionData) {
          if (!t) {
            t = {};
            window.location.href;
            t.id = EBG.Semi.Infra.getQuerystringParam("onetagid"), t.sendTime = EBG.Semi.Infra.getQuerystringParam("st"), this.ott.isActive = function () {
              return !0;
            };
          }
          this.ott.handleExtensionData(t.id, i.extensionData, new Date().getTime(), t && t.sendTime);
        }
        if (r.preServingTasks && r.preServingTasks.length > 0) {
          var a = {};
          a.uip = r.preServingTasks, a.uipv = r.uipv, a.scriptsPath = r.scriptsPath, a.filter = r.sessionId, this._oneTagObj ? (a.bs = this._oneTagObj.bsUrl, a.ebPtcl = this._getProtocol()) : (a.bs = document.domain, a.ebPtcl = this._getProtocol()), EBG.Semi.Events.eventMgr.subscribeToEvent(EBG.Semi.EventName.ALL_USER_ID_FOUND, this._getUserIdProviders, this, a.filter), this.uidProviders.getUserIds(a);
        } else r.firstPartyServingDomain ? this.generateRequest(this.pageUrl, r, !0) : (this._handleScriptTags(r.scripts), this._handleUrlTags(r.urls), r.customScript ? this._handleCustomScript(r.customScript) : this._oneTagObj && this._oneTagObj.developerScripts && this._oneTagObj.developerScripts.postScript && (this._runDeveloperScript(this._oneTagObj.developerScripts.postScript), this._oneTagObj.developerScripts.postScript = null), this._handleServerMessages(r.logMessages), this.ruleManager && this.ruleManager.setResponseData(r));
      } else this.dp.log(EBG.DataProfile.SERVING, {
        malformed: 1
      }), this.dp.incrementLog(EBG.DataProfile.MONITOR, {
        malformedres: 1
      });
      this._isHandlingRequest = !1;
    } catch (t) {
      this._handleUnhandledError(t);
    }
  },
  _getUserIdProviders: function (t) {
    if (!this._userIdProvidersCalled) {
      if (this._userIdProvidersCalled = !0, t) {
        var e = this._deserializeResponse(this._getBsResponseContent());
        e.targetUrl = t.userIdStr;
      }
      this._oneTagObj && (this._oneTagObj.sync = 0), this.generateRequest(this.pageUrl, e, !0);
    }
  },
  _handleClientRules: function (t) {
    this.ruleManager || (this.ruleManager = new EBGVT.RuleManager(t, this));
  },
  _deserializeResponse: function (t) {
    var e;
    if ("object" == EBGVT.Light.Infra.typeOf(t)) e = t;else try {
      this.logNeeded && -1 != t.indexOf("/*") && (t = t.substring(0, t.lastIndexOf("/*"))), e = EBGVT.JSON.parse(unescape(t));
    } catch (t) {
      this.oneTagLogger.exception("OneTag._deserializeResponse", t);
    }
    return e;
  },
  _handleCustomScript: function (t) {
    if (t && ("http:" == t.substring(0, 5).toLowerCase() || "https:" == t.substring(0, 6).toLowerCase())) {
      var e = document.createElement("script");
      e.type = "text/javascript", e.src = t, EBGVT.Light.Infra.addScriptElement(e);
    }
  },
  _handleServerMessages: function (t) {
    if (t && t.length > 0) {
      this.oneTagLogger.timestamp = !1, this.oneTagLogger.info("Server Messages:");
      for (var e = 0; e < t.length; e++) t[e] && this.oneTagLogger.info("  " + t[e]);
      this.oneTagLogger.timestamp = !0;
    }
  },
  _handleScriptTags: function (t) {
    if (t) for (var e = 0; e < t.length; e++) if (t[e]) try {
      EBG.Semi.Infra.injectScript(unescape(t[e])), this.dp.incrementLog(EBG.DataProfile.MONITOR, {
        scripts: 1
      });
    } catch (t) {
      this._handleUnhandledError(t, 1);
    }
  },
  _handleUrlTags: function (t) {
    try {
      (t = this._replaceTokens(t)) && function (e) {
        this.serverCommunicator.reportUrlsList(t, function (t, i) {
          t ? this._handleUnhandledError(new Error(t + " : " + i), 1) : (this.dp.incrementLog(EBG.DataProfile.MONITOR, {
            urls: 1
          }), this.ott.send("timelines", {
            id: this._oneTagObj && this._oneTagObj.id,
            name: i,
            type: "3rd Party URL",
            receiveTime: new Date().getTime(),
            sendTime: e
          }));
        }, this);
      }.apply(this, [new Date().getTime()]);
    } catch (t) {
      this._handleUnhandledError(t);
    }
  },
  _replaceTokens: function (t) {
    if (t = t || [], this.consentData) for (var e = 0; e < t.length; e++) {
      var i = t[e];
      if (this.consentData.gdprApplies && (i = (i = (i = i.replace(/\[%gdpr%\]/gi, this.consentData.gdprApplies)).replace(/\${gdpr}/gi, this.consentData.gdprApplies)).replace(/{gdpr}/gi, this.consentData.gdprApplies)), this.consentData.consentData) {
        i = (i = i.replace(/\[%gdpr_consent%\]/gi, this.consentData.consentData)).replace(/{gdpr_consent}/gi, this.consentData.consentData);
        var n = [1, 2, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 36, 37, 39, 40, 41, 42, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 56, 57, 58, 59, 60, 61, 62, 63, 65, 66, 67, 68, 69, 70, 71, 72, 73, 75, 76, 77, 78, 79, 80, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 97, 98, 100, 101, 102, 104, 108, 109, 110, 111, 114, 115, 119, 120, 122, 124, 126, 127, 128, 129, 130, 131, 132, 133, 134, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 147, 148, 149, 150, 151, 152, 153, 154, 155, 157, 158, 159, 160, 161, 162, 163, 164, 165, 167, 168, 170, 173, 174, 177, 178, 179, 183, 184, 185, 190, 192, 193, 194, 195, 196, 198, 199, 200, 202, 203, 205, 206, 208, 209, 210, 211, 212, 213, 215, 216, 217, 218, 223, 224, 226, 227, 228, 230, 231, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 246, 248, 249, 250, 251, 252, 253, 254, 255, 256, 259, 261, 262, 263, 264, 265, 266, 270, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 284, 285, 289, 290, 293, 294, 295, 297, 298, 299, 301, 302, 303, 304, 308, 310, 311, 312, 314, 315, 316, 317, 318, 319, 321, 323, 325, 328, 329, 331, 333, 334, 335, 336, 337, 343, 345, 347, 349, 350, 351, 354, 358, 359, 360, 361, 365, 368, 371, 373, 374, 375, 377, 378, 380, 381, 382, 384, 385, 387, 388, 394, 397, 402, 408, 409, 410, 412, 413, 415, 416, 418, 422, 423, 424, 427, 428, 429, 431, 434, 435, 436, 438, 439, 440, 444, 447, 448, 450, 452, 455, 458, 459, 461, 462, 466, 467, 468, 469, 471, 473, 475, 479, 482, 484, 486, 488, 490, 491, 493, 495, 496, 497, 498, 501, 502, 505, 506, 507, 508, 509, 511, 512, 516, 517, 519, 520, 521, 524, 527, 528, 530, 531, 535, 536, 539, 541, 543, 544, 545, 546, 547, 549, 550, 553, 554, 556, 559, 561, 565, 568, 569, 570, 571, 573, 574, 577, 578, 579, 580, 581, 584, 587, 590, 591, 593, 596, 597, 598, 599, 601, 602, 606, 607, 609, 610, 612, 613, 614, 615, 617, 618, 620, 621, 624, 625, 626, 628, 630, 631, 638, 639, 644, 645, 646, 647, 648, 649, 650, 652, 653, 654, 655, 656, 657, 658, 659, 662, 663, 664, 665, 666, 667, 668, 670, 671, 672, 674, 675, 676, 678, 681, 682, 683, 684, 685, 686, 687, 688, 690, 691, 694, 697, 699, 702, 703, 706, 707, 708, 709, 711, 712, 713, 714, 715, 716, 717, 718, 719, 720, 721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 748, 749, 750, 751, 753, 754, 755, 756, 757, 758, 759, 760, 761, 762, 763, 764, 765, 766, 767, 768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780, 781, 782, 783, 784, 785, 786, 787, 788, 789, 790, 791, 792, 793, 794, 795, 796, 797, 798, 799, 800, 801, 802, 803, 804, 805, 806, 807, 808, 809, 810, 811, 812, 813, 814, 815, 816, 817, 818, 819, 820, 821, 822, 823, 824, 825, 826, 827, 828, 829, 830, 831, 832, 833, 834, 835, 836, 837, 838, 839, 840, 841, 842, 843, 844, 845, 846, 847, 848, 849, 850, 851, 852, 853, 854, 855, 856, 857, 858, 859, 860, 861, 862, 863, 864, 865, 866, 867, 868, 869, 870, 871, 872, 873, 874, 875, 876, 877, 878, 879, 880, 881, 882, 883, 884, 885, 886, 887, 888, 889, 890, 891, 892, 893, 894, 895, 896, 897, 898, 899, 900, 901, 902, 903, 905, 906, 907, 908, 909, 910, 911, 912, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 935, 936, 937, 938, 940, 941, 942, 943, 944, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960, 961, 962, 963, 964, 965, 966, 967, 968, 969, 970, 971, 972, 973, 974, 975, 976, 977, 978, 979, 980, 981, 982, 983, 984, 985, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995, 996, 997, 998, 999, 1e3, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1018, 1019, 1020, 1021, 1022, 1023, 1024, 1025, 1026, 1027, 1028, 1029, 1030, 1031, 1032, 1033, 1034, 1035, 1036, 1037, 1038, 1039, 1040, 1041, 1042, 1043, 1044];
        if (/\${gdpr_consent_(.*?)}/gi.test(i)) try {
          var r = i.match(/\${gdpr_consent_(.*?)}/gi);
          for (e = 0; e < r.length; e++) {
            var a = r[e].match(/\d+/);
            if (a && -1 != n.indexOf(1 * a[0])) {
              var s = "\\${gdpr_consent_" + a[0] + "}",
                o = new RegExp(s, "i");
              i = i.replace(o, this.consentData.consentData);
            }
          }
        } catch (t) {}
      }
      t[e] = i;
    }
    if (this.ccpaConsentData && this.ccpaConsentData.ccpaConsent) for (e = 0; e < t.length; e++) {
      i = (i = t[e]).replace(/\${US_PRIVACY}/gi, this.ccpaConsentData.ccpaConsent), t[e] = i;
    }
    return t;
  },
  _addProviderUserId: function (t, e) {
    var i = EBGVT.Light.Infra.urlAvailableLength(t) - 48;
    if (e.targetUrl) if (i > e.targetUrl.length) t += e.targetUrl;else {
      var n = t.length + e.targetUrl.length + 2;
      t += "&" + EEBG.Semi.AttributionEnum.UrlParamNames.ORIG_URL_LENGTH + "=" + n;
    }
    return t;
  },
  _addGdprConsent: function (t, e) {
    return e && (e.gdprApplies && (t += "&gdpr=" + e.gdprApplies), e.consentData && (t += "&gdpr_consent=" + e.consentData)), t;
  },
  _addUspConsent: function (t, e) {
    return e && (e.ccpaConsent && (t += "&ccpaconsent=" + e.ccpaConsent), t += "&ccpastatus=" + e.ccpaStatus), t;
  },
  _getOneTagScript: function () {
    var t;
    if (document.currentScript) t = document.currentScript;else {
      var e = document.getElementsByTagName("script");
      t = e[e.length - 1];
    }
    return function () {
      return t;
    };
  }()
}, gEBMainWindow = window.gEBMainWindow || EBG.Semi.WindowUtil.getTopWindow();
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => sophisticatedTracker.probe());
} else {
  sophisticatedTracker.probe();
}
var versaTagObj = new EBGVT.OneTag(window.versaTagObj);
versaTagObj.onready(function () {
  this.generateRequest();
}, !0);