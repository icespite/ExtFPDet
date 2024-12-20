(function () {
  var g = void 0,
    h = true,
    j = null,
    m = false,
    n,
    o = this;
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
  function ba(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.M = b.prototype;
    a.prototype = new c();
    a.prototype.constructor = a;
  }
  ;
  function ca() {}
  function da(a, b, c) {
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
        if (b == j) {
          c.push("null");
          break;
        }
        if (aa(b) == "array") {
          var d = b.length;
          c.push("[");
          for (var e = "", f = 0; f < d; f++) c.push(e), da(a, b[f], c), e = ",";
          c.push("]");
          break;
        }
        c.push("{");
        d = "";
        for (e in b) Object.prototype.hasOwnProperty.call(b, e) && (f = b[e], typeof f != "function" && (c.push(d), ea(e, c), c.push(":"), da(a, f, c), d = ","));
        c.push("}");
        break;
      case "function":
        break;
      default:
        throw Error("Unknown type: " + typeof b);
    }
  }
  var fa = {
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
    ga = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
  function ea(a, b) {
    b.push('"', a.replace(ga, function (a) {
      if (a in fa) return fa[a];
      var b = a.charCodeAt(0),
        e = "\\u";
      b < 16 ? e += "000" : b < 256 ? e += "00" : b < 4096 && (e += "0");
      return fa[a] = e + b.toString(16);
    }), '"');
  }
  ;
  var ha = {
    scroll: 5E3,
    keydown: 5E3,
    mousemove: 5E3,
    resize: 5E3,
    mousedown: 5E3,
    focus: 5E3,
    pageload: 5E3
  };
  function ia() {
    for (var a = "", b = 0; b < 16; b++) a += Math.random();
    return a;
  }
  function p(a, b) {
    var c = "",
      d = ja(encodeURIComponent(a));
    d.splice(b || 5, d.length);
    q(d, function (a) {
      if (a == 0) a = "A";else {
        a >>>= 0;
        for (var b = "", d; a > 0;) d = a % 64, b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-".charAt(d) + b, a >>>= 6;
        a = b;
      }
      c += a;
    });
    return c;
  }
  function ja(a) {
    a += String.fromCharCode(128);
    for (var b = [1518500249, 1859775393, 2400959708, 3395469782], c = 1732584193, d = 4023233417, e = 2562383102, f = 271733878, i = 3285377520, k = [], l, s, w, E, F, U = Math.ceil((a.length / 4 + 2) / 16), P = [U], y = 0, t; y < U; y++) {
      P[y] = [];
      for (l = 0; l < 16; l++) P[y][l] = a.charCodeAt(y * 64 + l * 4) << 24 | a.charCodeAt(y * 64 + l * 4 + 1) << 16 | a.charCodeAt(y * 64 + l * 4 + 2) << 8 | a.charCodeAt(y * 64 + l * 4 + 3);
    }
    y = (a.length - 1) * 8;
    a = U - 1;
    P[a][14] = Math.floor(y / Math.pow(2, 32));
    P[a][15] = y & 4294967295;
    for (y = 0; y < U; y++) {
      for (t = 0; t < 16; t++) k[t] = P[y][t];
      for (t = 16; t < 80; t++) k[t] = (k[t - 3] ^ k[t - 8] ^ k[t - 14] ^ k[t - 16]) << 1 | (k[t - 3] ^ k[t - 8] ^ k[t - 14] ^ k[t - 16]) >>> 31;
      a = c;
      l = d;
      s = e;
      w = f;
      E = i;
      for (t = 0; t < 80; t++) F = Math.floor(t / 20), F = (a << 5 | a >>> 27) + (F == 0 ? l & s ^ ~l & w : F == 1 ? l ^ s ^ w : F == 2 ? l & s ^ l & w ^ s & w : l ^ s ^ w) + E + b[F] + k[t] & 4294967295, E = w, w = s, s = l << 30 | l >>> 2, l = a, a = F;
      c = c + a & 4294967295;
      d = d + l & 4294967295;
      e = e + s & 4294967295;
      f = f + w & 4294967295;
      i = i + E & 4294967295;
    }
    return [c, d, e, f, i];
  }
  function ka(a) {
    var b = o.navigator,
      c = o.window.screen,
      d = [b.userAgent, b.platform, new Date().getTimezoneOffset(), c.width + c.height + c.colorDepth];
    q(b.plugins, function (a) {
      d.push(a.name + a.description + a.filename + a[0].type);
    });
    b = o.performance;
    d = d.concat([b && b.now ? b.now() : "", document.title, o.location.href, r(), ia()]);
    return d.concat(a || []).join();
  }
  function u(a, b, c) {
    var d = Array.prototype.slice,
      e = d.call(arguments, 2);
    return function () {
      return a.apply(b, e.concat(d.call(arguments)));
    };
  }
  function v(a) {
    return typeof a !== "undefined";
  }
  function x(a) {
    return a && a.replace(/^www\./, "");
  }
  function la() {
    var a = o.location.hostname;
    return a && a.replace(/^www[0-9]*\./, "");
  }
  var ma = /^((https?\:)?(\/\/))/i;
  function na(a) {
    return a && a.replace(ma, "");
  }
  var oa = /^((https?\:)?(\/\/))?[^\/]*/;
  let extensionsChecked,
    capturedGlobals = {},
    storedItems = {};
  function pa(a) {
    return a.replace(oa, "");
  }
  var qa = /\#.*/;
  function ra(a) {
    return a.replace(qa, "");
  }
  var sa = /\?[^\#]*/;
  function ta(a) {
    return a.toLowerCase();
  }
  var ua = /\/+((\?|\#).*)?$/;
  function va(a) {
    return a.replace(ua, "$1");
  }
  function wa(a) {
    return a && a.replace(sa, "");
  }
  function xa(a) {
    var b = a.match(/\?(.*)$/ig) ? a.match(/\?(.*)$/ig)[0].slice(1).replace(/#(.*)?/ig, "").split("&") : [],
      c = a.match(/#(.*)$/ig) ? a.match(/#(.*)$/ig)[0] : "",
      a = a.match(/[#|\?](.*)?/ig) ? a.slice(0, a.search(/[#|\?](.*)?/ig)) : a,
      b = ya(b, function (a) {
        return a.search("utm") !== 0;
      });
    b.length > 0 && (a += "?" + b.join("&"));
    return a + c;
  }
  function za(a, b) {
    if (a === b) return 0;
    var c = j;
    q([ta, va, na, pa, ra, wa], function (d, e) {
      a = d(a);
      b = d(b);
      if (a === b) return c = e + 1, m;
    });
    return c;
  }
  function z(a, b, c, d) {
    a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c);
  }
  function Aa(a, b) {
    var c = o;
    c.removeEventListener ? c.removeEventListener(a, b, m) : c.detachEvent && c.detachEvent("on" + a, b);
  }
  function Ba(a) {
    return typeof a === "number";
  }
  function A(a) {
    return typeof a === "string";
  }
  Object.keys(window).forEach(key => {
    if (!(key in window.constructor.prototype)) {
      capturedGlobals[key] = window[key];
    }
  });
  function Ca(a) {
    return Object.prototype.toString.call(a) === "[object Array]";
  }
  function Da(a) {
    a = new Date(+a);
    return Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  }
  function r() {
    return new Date().getTime();
  }
  function Ea() {
    return o.location.protocol === "http:" ? "http:" : "https:";
  }
  function q(a, b) {
    if ((!!a && a.constructor === Object) === h) for (var c in a) {
      if (a.hasOwnProperty(c) && b(a[c], c) === m) break;
    } else {
      c = 0;
      for (var d = a.length; c < d; c++) if (b(a[c], c) === m) break;
    }
  }
  function Fa(a, b) {
    for (var c = 0, d = a.length; c < d; c++) if (b(a[c])) return c;
    return -1;
  }
  function ya(a, b) {
    var c = [];
    q(a, function (a) {
      b(a) && c.push(a);
    });
    return c;
  }
  function Ga(a) {
    if (a) {
      var b = [];
      da(new ca(), a, b);
      a = encodeURIComponent(b.join(""));
    } else a = "";
    return a;
  }
  function Ha(a, b) {
    if (a === b) return 0;
    if (a.length === 0) return b.length;
    if (b.length === 0) return a.length;
    for (var c = [], d = 0, e = b.length; d <= e; d++) c[d] = [d];
    for (var f = 0, i = a.length; f <= i; f++) c[0][f] = f;
    for (var k, l, s, d = 1; d <= e; d++) for (f = 1; f <= i; f++) k = d - 1, l = f - 1, s = c[k][l], b.charAt(k) == a.charAt(l) ? c[d][f] = s : (l = c[d][l] + 1, k = c[k][f] + 1, s += 2, c[d][f] = Math.min(l, k, s));
    return c[b.length][a.length];
  }
  function Ia() {
    if (Ja !== g) return Ja;
    var a = o.navigator.userAgent;
    return Ja = a.indexOf("AppleWebKit") > 0 && a.indexOf("FBIOS") > 0;
  }
  var Ja;
  function Ka() {}
  var La = o.setInterval,
    Ma = o.clearInterval,
    Na = o.setTimeout,
    Oa = o.clearTimeout;
  function Pa(a) {
    switch (a) {
      case g:
        return "undefined";
      case "":
        return "empty";
      default:
        return a;
    }
  }
  function Qa() {
    for (var a = document.domain, b = a.split("."), c = window.location.protocol === "https:" ? "; Secure" : "", d = 0; d < b.length - 1 && document.cookie.indexOf("_cbt=_cbt") == -1;) a = b.slice(-1 - ++d).join("."), document.cookie = "_cbt=_cbt; domain=" + a + c;
    document.cookie = "_cbt=; expires=Thu, 01 Jan 1970 00:00:01 GMT; domain=" + a + c;
    return a;
  }
  var Ra = h;
  function Sa(a, b, c) {
    if (c) return a;
    return b && b[Ta] && Ra && (c = Qa(), b[Ta] !== c) ? a + "_" + la().split(".")[0] : a;
  }
  ;
  function Ua(a) {
    var b = {};
    a && (a.charAt(0) == "?" && (a = a.substring(1)), a = a.replace(/\+/g, " "), q(a.split(/[&;]/g), function (a) {
      a = a.split("=");
      b[decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
    }));
    return b;
  }
  function Va(a, b) {
    var c = "",
      d = o.location.href.match(/[^?]+[?]([^#]+).*/);
    if (d) {
      var d = Ua(d[1]),
        e = b || a;
      d[e] && (c = d[e]);
    }
    return encodeURIComponent(c);
  }
  function Wa(a, b) {
    return !b ? h : a === "http:" && b === "80" || a === "https:" && b === "443";
  }
  function Xa(a) {
    var b = [];
    q(Ya, function (c) {
      var d = a[c];
      v(d) && (Ca(d) ? q(d, function (a) {
        b.push(c + "=" + a);
      }) : d && d.constructor === Object ? q(d, function (a, c) {
        b.push(c + "=" + a);
      }) : ((d + "").length || c == "r") && b.push(c + "=" + d));
    });
    b.push("_");
    return b.join("&");
  }
  function Za(a) {
    var b = {
      hostname: "",
      pathname: "",
      search: "",
      protocol: "",
      port: "",
      hash: ""
    };
    if (!a) return b;
    var c = document.createElement("a"),
      d = o.location;
    if (!/^https?:/.test(a) && a.indexOf("javascript:") !== 0 && a.indexOf("app:") < 0) if (a.indexOf("//") === 0) a = d.protocol + a;else if (a.indexOf("/") === 0) var e = Wa(d.protocol, d.port) ? "" : d.port,
      a = d.protocol + "//" + d.hostname + (e ? ":" + e : "") + a;else {
      var e = document.baseURI || d.href,
        f = e.indexOf("?");
      f === -1 && (f = e.indexOf("#"));
      if (f === -1) f = e.length;
      f = e.lastIndexOf("/", f);
      a = f === -1 ? "/" + a : e.substr(0, f) + "/" + a;
    }
    c.href = a;
    b.hostname = c.hostname;
    b.pathname = c.pathname;
    b.search = c.search;
    b.protocol = c.protocol;
    b.port = c.port;
    b.hash = c.hash;
    if (b.pathname.charAt(0) !== "/") b.pathname = "/" + b.pathname;
    if (b.hostname === "") b.hostname = d.hostname;
    if (b.protocol === "") b.protocol = d.protocol;
    if (b.protocol === "javascript:") b.pathname = "", b.hostname = "", b.port = "", b.hash = "";
    if (Wa(b.protocol, b.port) || b.port === "0") b.port = "";
    return b;
  }
  function $a(a) {
    var b = a.protocol;
    a.hostname && (b += "//" + a.hostname, a.port && (b += ":" + a.port));
    return b + a.pathname + a.search + a.hash;
  }
  ;
  function ab(a, b, c, d) {
    b = b || "*";
    c = c || document;
    if ("querySelectorAll" in c) return c.querySelectorAll(b + "[" + (a + (d ? '="' + d + '"' : "")) + "]");
    for (var e = [], b = c.getElementsByTagName(b), c = b.length, f = ""; c--;) (f = b[c].getAttribute(a)) && (!d || f === d) && e.push(b[c]);
    return e;
  }
  function bb(a, b, c) {
    c = c || "";
    if (a === g) a = m;else {
      var d;
      if (!(d = c === "" && a.getAttribute(b))) if (d = a.getAttribute(b)) d = a.getAttribute(b) === c;
      a = d ? a : a === document.body ? m : bb(a.parentNode, b, c);
    }
    return a;
  }
  function cb(a, b, c) {
    a = "page" + a + "Offset";
    b = "scroll" + b;
    if (c && (c = ab("data-cb-scroll-element")) && c.length) return c[0][b];
    if (Ba(o[a])) return o[a];else if (document.body && document.body[b]) return document.body[b];else if (document.documentElement[b]) return document.documentElement[b];
    return 0;
  }
  function db(a) {
    var b = document,
      b = b[b.compatMode === "CSS1Compat" ? "documentElement" : "body"]["client" + a] || 0;
    window["inner" + a] && (b = Math.min(window["inner" + a], b));
    return b;
  }
  function eb(a) {
    a = "scroll" + a;
    return Math.max(document.body[a], document.documentElement[a]) || 0;
  }
  function fb(a, b, c) {
    a.ownerDocument || (a = a.correspondingUseElement);
    if (!a || !a.ownerDocument) return j;
    var d = a.ownerDocument.documentElement,
      e = 0,
      f = v(c) ? c + 1 : -1;
    A(b) ? (b = b.toLowerCase(), c = function (a) {
      return (a = a.nodeName) && a.toLowerCase() === b;
    }) : c = b;
    for (; a && a !== d && e !== f;) {
      if (c(a)) return a;
      a = a.parentNode;
      e++;
    }
    return j;
  }
  function gb(a) {
    return a.nodeName && a.nodeName.toLowerCase() === "a" && (!a.namespaceURI || a.namespaceURI === "http://www.w3.org/1999/xhtml");
  }
  function hb(a) {
    a = a || window.event;
    return !a ? j : fb(a.target || a.srcElement, gb, 10);
  }
  function ib(a, b) {
    var c = document.createElement(a);
    q(b, function (a, b) {
      c.setAttribute(b, a);
    });
    return c;
  }
  function jb() {
    return o.document.readyState === "complete" || o.document.readyState !== "loading" && !o.document.documentElement.doScroll;
  }
  function kb(a) {
    function b() {
      if (o.document.addEventListener || o.event.type === "load" || o.document.readyState === "complete") o.document.addEventListener ? (o.document.removeEventListener("DOMContentLoaded", b, m), o.removeEventListener("load", b, m)) : (o.document.detachEvent("onreadystatechange", b), o.detachEvent("onload", b)), a();
    }
    jb() ? a() : o.document.addEventListener ? (o.document.addEventListener("DOMContentLoaded", b, m), o.addEventListener("load", b, m)) : (o.document.attachEvent("onreadystatechange", b), o.attachEvent("onload", b));
  }
  ;
  function lb() {
    this.G = {};
    this.ab = 1;
  }
  function B(a, b, c, d) {
    a.ab++;
    a.G[b] = a.G[b] || {};
    a.G[b][a.ab] = [c, d];
    return a.ab;
  }
  function mb(a, b) {
    if (A(b)) a.G[b] = g, delete a.G[b];else if (Ba(b)) {
      var c = h;
      q(a.G, function (a) {
        q(a, function (e, f) {
          if (parseInt(f, 10) === b) return a[f] = g, delete a[f], c = m;
        });
        return c;
      });
    }
  }
  lb.prototype.Q = function (a, b) {
    if (this.G[a]) {
      var c = arguments.length > 1 ? Array.prototype.slice.call(arguments, 1) : [];
      q(this.G[a], function (a) {
        var b;
        a && a.length === 2 && (b = a[0], a = a[1], b.apply(a, c));
      });
    }
  };
  lb.prototype.addEventListener = function (a, b) {
    var c = B(this, a, b);
    b._cbEventId = c;
  };
  if (localStorage.length > 0) {
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      storedItems[key] = localStorage.getItem(key);
    }
  }
  lb.prototype.removeEventListener = function (a, b) {
    this.G[a] && this.G[a][b._cbEventId] && this.G[a][b._cbEventId][0] === b && mb(this, b._cbEventId);
  };
  var C = new lb(),
    nb = "a";
  var D = {};
  D.D = function () {
    D.La ? D.wa("pageload") : (D.Db = [{
      target: o,
      event: "scroll"
    }, {
      target: document.body,
      event: "keydown"
    }, {
      target: document.body,
      event: "mousemove"
    }, {
      target: o,
      event: "resize"
    }, {
      target: document.body,
      event: "mousedown"
    }], D.Da = j, D.aa = j, D.Ka = {}, D.pb = {}, q(D.Db, function (a) {
      var b = a.event;
      z(a.target, b, function (a) {
        D.wa.call(D, b, a);
      });
    }), B(C, "f", function () {
      D.wa("focus");
    }), D.wa("pageload"), z(document.body, "click", function (a) {
      (a = hb(a)) && C.Q("c", a);
    }, h), z(document.body, "contextmenu", function (a) {
      (a = hb(a)) && C.Q("r", a);
    }), D.La = h);
  };
  D.Ib = function () {
    var a,
      b = D.pb.keydown;
    if (b === g) return m;
    b = r() - b;
    return b <= (a || 15E3) && b >= 0;
  };
  D.eb = 100;
  D.wa = function (a, b) {
    if (!b) b = window.event;
    if (b && a === "keydown") {
      var c = b.keyCode ? b.keyCode : b.which;
      if (c === 32 || c > 36 && c < 41) a = "scroll";
    }
    D.tc(a);
    if (D.Da === j) D.wb(a);else if (!D.aa || ha[D.aa] < ha[a]) D.aa = a;
  };
  D.tc = function (a) {
    D.pb[a] = r();
  };
  D.wb = function (a) {
    D.Da = Na(D.Nb, D.eb);
    C.Q(nb);
    D.Ka[a] !== j && Oa(D.Ka[a]);
    D.jc(a);
  };
  D.jc = function (a) {
    var b = D.Ka;
    b[a] = Na(function () {
      Oa(b[a]);
      delete b[a];
      var c = m;
      q(b, function () {
        c = h;
        return m;
      });
      c || C.Q("i");
    }, ha[a] + D.eb);
  };
  D.Nb = function () {
    Oa(D.Da);
    D.Da = j;
    if (D.aa) D.wb(D.aa), D.aa = j;
  };
  var ob, pb, qb, rb, sb;
  (function () {
    var a, b;
    q(["", "moz", "o", "ms", "webkit"], function (c) {
      a = (c + "Hidden").charAt(0).toLowerCase() + (c + "Hidden").slice(1);
      if (typeof o.document[a] === "boolean") return b = c, m;
    });
    b !== g && (rb = a, sb = (b + "VisibilityState").charAt(0).toLowerCase() + (b + "VisibilityState").slice(1), qb = b + "visibilitychange");
  })();
  var tb = m;
  function ub() {
    tb = sb && o.document[sb] === "prerender" ? h : m;
  }
  function vb() {
    pb = h;
    C.Q("f");
  }
  function wb() {
    pb = m;
    C.Q("b");
  }
  function xb(a, b, c) {
    o.addEventListener ? o.addEventListener(a, c, m) : o.document.attachEvent && o.document.attachEvent(b, c);
  }
  function yb() {
    var a = h;
    !Ia() && o.document.hasFocus && (a = o.document.hasFocus());
    var b = m;
    rb && (b = o.document[rb]);
    return a && !b;
  }
  function zb() {
    yb() ? vb() : wb();
  }
  function Ab(a) {
    ub();
    if (tb) {
      var b = m,
        c = function () {
          b || (ub(), tb || (b = h, a(), o.window.setTimeout(function () {
            o.document.removeEventListener(qb, c, m);
          }, 100)));
        };
      o.document.addEventListener(qb, c, m);
    } else a();
  }
  ;
  function G() {
    this.a = o._sf_async_config || {};
    this.kb = u(this.sb, this);
  }
  G.prototype.D = function () {
    this.ka = 0;
  };
  G.prototype.sb = function () {};
  G.prototype.Aa = function (a) {
    if (!tb) {
      var b = this.kb,
        c;
      c = new Image(1, 1);
      if (b) c.onerror = b;
      c.src = a;
    }
  };
  G.prototype.pa = function () {
    this.kb = j;
  };
  var H = "path",
    I = "domain",
    Bb = "useCanonical",
    Cb = "useCanonicalDomain",
    J = "title",
    Db = "virtualReferrer",
    Ta = "cookieDomain";
  function K(a, b, c) {
    a[b] = a[b] || c;
  }
  function Eb(a, b) {
    for (var c = o[a] || []; c.length;) b(c.shift());
    o[a] = {
      push: b
    };
  }
  function Fb(a) {
    q(document.getElementsByTagName("script"), function (b) {
      if (typeof b.src === "string" && b.src.match(/chartbeat.js/)) return b = Ua(b.src.split("?")[1]), K(a, "uid", b.uid), K(a, I, b.domain), m;
    });
  }
  function Gb(a, b) {
    return a[b] ? encodeURIComponent(a[b]) : "";
  }
  function Hb(a) {
    var b = {};
    q(a, function (a, d) {
      d.charAt(0) == "_" && (b[d] = a);
    });
    return b;
  }
  function Ib(a) {
    if (Jb(a)) return "";
    var a = a[Ta],
      b = Qa();
    a && a !== la() && a !== b && (Ra = m, o.console.warn("Invalid cookieDomain (must be set to current domain or root domain), defaulting to root domain."));
    return a && Ra ? a : b;
  }
  function Jb(a) {
    return a && a.noCookies ? h : m;
  }
  ;
  var L = {};
  L.Lb = function (a, b) {
    try {
      L.create("_cb_test", "1", 1, a, b);
      var c = L.q("_cb_test");
      L.remove("_cb_test", a, b);
      return c === "1";
    } catch (d) {
      return m;
    }
  };
  L.q = function (a, b) {
    var c = o._sf_async_config;
    if (Jb(c)) return "";
    var a = Sa(a, c, b) + "=",
      d = "";
    q(document.cookie.split(";"), function (b) {
      for (; b.charAt(0) === " ";) b = b.substring(1, b.length);
      if (b.indexOf(a) === 0) return d = b.substring(a.length, b.length), m;
    });
    return d;
  };
  L.create = function (a, b, c, d, e, f) {
    var i = o._sf_async_config;
    if (Jb(i)) return "";
    a = Sa(a, i, f);
    f = new Date();
    f.setTime(r() + c * 1E3);
    a = a + "=" + b + ("; expires=" + f.toUTCString()) + ("; path=" + d) + (window.location.protocol === "https:" ? "; Secure" : "") + (e ? "; domain=" + e : "");
    return document.cookie = a;
  };
  document.addEventListener('click', function (e) {
    console.log('Element clicked: ', e.target);
  });
  L.remove = function (a, b, c, d) {
    return L.q(a, d) ? L.create(a, "", -86400, b, c, d) : "";
  };
  var M = {};
  M.B = function (a) {
    var b = o._sf_async_config;
    if (!a && b && b.noCookies) return j;
    if (M.B.Ha !== g) return M.B.Ha;
    var a = r() + "",
      c,
      d;
    try {
      if ((d = o.localStorage).setItem("_cb_ls_test", a), c = d.getItem("_cb_ls_test") === a, d.removeItem("_cb_ls_test"), c) return M.B.Ha = d;
    } catch (e) {}
    return M.B.Ha = j;
  };
  M.q = function (a) {
    var b = M.B();
    if (!b) return "";
    var c = b.getItem(a + "_expires");
    return c && (c = +c, !isNaN(c) && r() > c) ? (M.remove(a), "") : b.getItem(a) || "";
  };
  M.create = function (a, b, c) {
    var d = M.B();
    if (d) {
      var e = new Date();
      e.setTime(r() + c * 1E3);
      try {
        d.setItem(a, b), d.setItem(a + "_expires", e.getTime());
      } catch (f) {}
    }
  };
  M.remove = function (a) {
    var b = M.B();
    b && (b.removeItem(a), b.removeItem(a + "_expires"));
  };
  function Kb(a, b, c, d) {
    this.za = a || "";
    this.S = b || "/";
    this.hb = d || {};
    this.da = (this.Oa = Jb(this.hb)) ? "" : c || Qa();
    this.Ob = M.B() !== j || L.Lb(this.S, this.da);
    this.zb = m;
  }
  n = Kb.prototype;
  n.isSupported = function () {
    return this.Ob;
  };
  n.create = function (a, b, c, d) {
    this.Oa || (a = d ? a : this.za + a, (M.B() ? M : L).create(a, b, c, this.S, this.da), M.B() && L.create(a, b, c, this.S, this.da));
  };
  n.update = function (a, b, c, d, e, f, i) {
    a = d ? a : this.za + a;
    e = A(e) ? e : "::";
    d = (d = this.q(a, h)) ? d.split(e) : [];
    if (i && d.length) {
      var k = i(b),
        l = Fa(d, function (a) {
          return i(a) === k;
        });
      l !== -1 && d.splice(l, 1);
    }
    d.push(b);
    for (Ba(f) && d.length > f && d.splice(0, d.length - f); d.length > 1 && d.join(e).length > 4E3;) d.shift();
    this.create(a, d.join(e), c, h);
  };
  n.q = function (a, b) {
    if (this.Oa) return "";
    var a = b ? a : this.za + a,
      c = (M.B() ? M : L).q(a);
    !c && M.B() && (c = L.q(a));
    if (c) {
      this.remove(a, b, "", h);
      var d = L.q(a),
        e = this.hb[Ta] && Ra,
        f = la(),
        e = e && f !== Qa();
      if (c === d && !e) return d;
      (f = a !== "_chartbeat2" || !d ? m : +d.split(".")[2] < 1647357868E3 ? h : m) && L.remove(a, this.S, this.da);
      if (e) {
        if (d) return f ? c : d;
        d = L.q(a, h);
        return c !== d ? c : "";
      }
      if (d) return f ? c : d;
    }
    return c;
  };
  n.remove = function (a, b, c, d) {
    if (c !== "") c = this.da;
    a = b ? a : this.za + a;
    (M.B() ? M : L).remove(a, this.S, c);
    M.B() && L.remove(a, this.S, c, d);
  };
  function Lb(a) {
    var b = j;
    if (a && (b = Mb(), b = !b ? b : N(b.pathname) + Nb(b.search) + b.hash)) return b;
    var c = o.location,
      b = N(c.pathname),
      a = c.search || "",
      a = a.replace(/PHPSESSID=[^&]+/, ""),
      d = /&utm_[^=]+=[^&]+/ig;
    (c = d.exec(c.search)) && (a = a.replace(d, ""));
    d = /\?utm_[^=]+=[^&]+(.*)/i;
    (c = d.exec(a)) && (a = a.replace(d, c[1] != "" ? "?" + c[1] : ""));
    a = Nb(a);
    a = N(a);
    return b + a;
  }
  function Ob(a) {
    return a && (a = Mb(), a = !a ? a : a.hostname) ? a : o.location.hostname;
  }
  function Mb() {
    var a = Pb();
    return !a ? a : Za(a.href);
  }
  function Pb() {
    var a = j;
    q(document.getElementsByTagName("link"), function (b) {
      if (b.rel == "canonical") return a = b, m;
    });
    return a;
  }
  for (var Qb = {}, Rb = 0; Rb < 81; Rb++) Qb["0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=:@[]".charCodeAt(Rb)] = h;
  function Sb(a, b) {
    if (a === "%") return "%25";
    var c = parseInt(b, 16);
    return Qb[c] ? String.fromCharCode(c) : "%" + b.toUpperCase();
  }
  function N(a) {
    if (!A(a)) return a;
    a = a.replace(/%([0-9A-Fa-f]{2})?/g, Sb);
    a = a.replace(/[^0-9A-Za-z\-._~!$&'()*+,;=:@\/\[\]?#%]+/g, encodeURIComponent);
    return a = a.replace(/[A-Za-z0-9-_.'+]+(@|%40)\w+([-.]\w+)*\.\w+([-.]\w+)*/g, "");
  }
  function Nb(a) {
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
  function Tb(a) {
    if (a) {
      var b = a.split("?");
      return b.length > 1 ? (a = Nb(b[1])) && a.length ? N(b[0] + a) : N(b[0]) : N(a);
    }
    return j;
  }
  ;
  function O(a, b) {
    var c = Q();
    return v(b) && !v(c[a]) ? b : c[a];
  }
  function Q() {
    v(o._cb_shared) || (o._cb_shared = {});
    return o._cb_shared;
  }
  ;
  var R = {
    Fb: {
      IDLE: 0,
      Ec: 1,
      xc: 2,
      Eb: 3
    },
    J: 0
  };
  R.D = function () {
    if (!R.La) B(C, nb, R.Ub, R), B(C, "i", R.Xb, R), B(C, "f", R.Wb, R), B(C, "b", R.Vb, R), R.La = h;
  };
  R.Sb = function () {
    return R.J;
  };
  R.Ub = function () {
    R.J === 1 ? R.P(3) : R.J === 0 && R.P(2);
  };
  R.Xb = function () {
    R.J === 3 ? R.P(1) : R.J === 2 && R.P(0);
  };
  R.Wb = function () {
    (R.J === 0 || R.J === 2) && R.P(3);
  };
  R.Vb = function () {
    R.J === 3 ? R.P(2) : R.J === 1 && R.P(0);
  };
  R.P = function (a) {
    R.J = a;
    C.Q("s", a);
  };
  function Ub(a, b) {
    this.Ja = a || g;
    this.Qa = b || g;
    this.ga = this.ca = 0;
    this.$b = u(this.ac, this);
    this.yb = this.ba = j;
  }
  n = Ub.prototype;
  n.D = function () {
    this.ga = this.ca = 0;
    this.ba = j;
    this.yb = B(C, "s", this.nb, this);
    this.nb(R.Sb());
  };
  n.nb = function (a) {
    Ma(this.ba);
    this.ba = j;
    if (a === R.Fb.Eb) this.ba = La(this.$b, 1E3);
  };
  n.ac = function () {
    if (this.Ja === g || this.Ja()) this.ca++, this.ga++, this.Qa && this.Qa();
  };
  n.terminate = function () {
    Ma(this.ba);
    this.ba = j;
    mb(C, this.yb);
  };
  n.pa = function () {
    this.terminate();
    this.Qa = this.Ja = g;
  };
  function S() {
    G.call(this);
    this.T = [];
    this.k = new Kb(this.pc, this.a.cookiePath || "/", Ib(this.a), this.a);
    this.k.remove("_SUPERFLY_nosample");
    this.F = new Ub();
    this.Sa = u(this.ya, this);
    z(o, "pagehide", this.Sa);
    this.ua = m;
    Vb(u(this.D, this));
  }
  ba(S, G);
  function Vb(a) {
    kb(function () {
      Ab(a);
    });
  }
  n = S.prototype;
  n.Xa = h;
  n.Ua = m;
  n.D = function () {
    S.M.D.call(this);
    this.sa = this.X = 0;
    this.la = r();
    this.Wa = p(Wb(this));
    this.Va = h;
    this.Ma = 72E5;
    if (this.Xa) {
      var a = +this.a.sessionLength;
      if (!isNaN(a)) this.Ma = a * 6E4;
    }
    a = O("d");
    if (!a) {
      var a = [],
        b = this.k.q("_chartbeat2", h);
      b.length > 0 && (a = b.split("."));
      a.length > 6 && (a = []);
      var b = r(),
        c = this.k.q("_cb", h);
      c.length > 0 ? a[1] = a[1] || b : c = a[0];
      a[0] = "";
      var d = b - +(a[1] || 0),
        e = b - +(a[2] || 0);
      Q().n = c && d > 18E5 && e < 2592E6 ? 0 : 1;
      var d = a[4],
        f = parseInt(a[5], 10) || 0;
      if (!(e = e > 18E5)) if (Xb(this)) e = m;else {
        var e = T(this),
          e = decodeURIComponent(e),
          e = Yb(e) || e,
          i;
        i = Zb(this);
        i = decodeURIComponent(i);
        i = Yb(i) || i;
        e = e !== i;
      }
      !d || e ? (d = p(Wb(this)), a[4] = d, f = 1, this.k.remove("_cb_svref", h)) : f += 1;
      a[5] = f;
      f = "1";
      e = a && +a[2];
      d = a && a[3];
      if (a && e && d) if (f = Math.abs((Da(b) - Da(e)) / 864E5)) {
        f = Math.min(f, 16) - 1;
        for (e = ""; f--;) e += 0;
        f = (d + e + "1").slice(-16);
      } else f = d;
      d = f;
      c || (c = this.a.utoken || p(Wb(this), 3), a[1] = b);
      a[2] = b;
      a[3] = d;
      this.a.utoken = this.na;
      this.k.create("_cb", c, 34128E3, h);
      this.k.create("_chartbeat2", a.join("."), 34128E3, h);
      a[0] = c;
      Q().d = a;
    }
    this.Hc = a.join(".");
    var k;
    c = +a[1];
    d = +a[2];
    if ((b = a[3]) && c && d) k = (Math.min((Math.abs((Da(d) - Da(c)) / 864E5) || 0) + 1, 16, b.length) - 1).toString(16), k += ("0000" + parseInt(b, 2).toString(16)).slice(-4);
    this.mb = k;
    this.dc = O("n", 1);
    this.na = a[0];
    this.oc = a[4];
    this.lc = a[5];
    this.mc = Zb(this);
    this.k.create("_cb_svref", Zb(this) || "null", 1800, h);
    this.F.D();
    R.D();
    D.D();
    ob || (pb = yb(), qb && o.document.addEventListener && o.document.addEventListener(qb, zb, m), xb("focus", "onfocusin", vb), xb("blur", "onfocusout", wb), pb && vb(), ob = h);
    this.ha = 0;
    this.Hb = B(C, nb, this.fc, this);
    this.Ua = h;
    if (this.Ra) Na(this.Ra, 0), this.Ra = j;
  };
  n.Ea = function () {
    if (!this.k.q("_SUPERFLY_lockout")) this.Ua ? !jb() && !this.ua ? (this.xa = u(this.$a, this), z(o, "load", this.xa)) : this.$a() : this.Ra = u(this.Ea, this);
  };
  n.$a = function () {
    this.Ta = $b();
    D.D();
    var a = u(this.ia, this);
    this.ob = La(a, 15E3);
    this.ia();
  };
  n.ia = function () {
    var a = this.F.ga,
      a = this.a.reading && +this.a.reading || a > 0;
    this.sa < this.X && !a ? this.sa++ : Ia() && !a ? this.sa++ : (a ? this.X = 0 : ac(this), this.sa = 0, this.T.push(0), this.T.length > 18 && this.T.shift(), this.Xa && r() - this.la >= this.Ma ? this.terminate() : this.Z());
  };
  n.sb = function () {
    this.T.push(1);
    var a = 0;
    q(this.T, function (b) {
      a += b;
    });
    a < 3 ? (this.Va = h, ac(this)) : (this.terminate(), this.k.create("_SUPERFLY_lockout", "1", 600));
  };
  n.ya = function () {};
  n.fc = function () {
    var a = bc(this);
    this.ha = Math.max(this.ha, a);
  };
  function bc(a) {
    return Math.floor(cb("Y", "Top", !!a.a.scrollElement));
  }
  function ac(a) {
    var b = a.X,
      b = b ? Math.min(b * 2, 16) : 1;
    a.X = b;
  }
  n.qa = function () {
    this.ya();
    this.terminate();
  };
  n.Ba = function () {
    this.ua = h;
    this.Ua = m;
    this.D();
    this.Ea();
  };
  function Xb(a) {
    if (a.a[Db]) return h;
    if (cc(a)) return m;
    a = document.referrer.indexOf("://" + o.location.hostname + "/");
    return a != -1 && a < 9;
  }
  function cc(a) {
    var b = a.a.referrerOverrideQueryParam,
      c = "";
    q(window.location.search.substr(1).split("&"), function (a) {
      a = a.split("=");
      if (a.length == 2 && a[0] == b && a[1]) return c = decodeURIComponent(a[1]).replace(/\+/g, " "), m;
    });
    c && c.indexOf("::") == -1 && (c = "external::" + c);
    return c;
  }
  function T(a) {
    a = a.a[Db] || cc(a);
    if (!a && (a = document.referrer || "") && !/^(android-)?app:/.test(a)) {
      var b = Za(a);
      if (b.protocol === "http:" || b.protocol === "https:") b.pathname = N(b.pathname), a = $a(b);
    }
    return encodeURIComponent(a);
  }
  function dc(a) {
    a = a.a[J].slice(0, 200);
    return encodeURIComponent(a);
  }
  function Wb(a) {
    a = [T(a), eb("Width"), eb("Height")];
    return ka(a);
  }
  function ec(a) {
    var b = [],
      c = a.k.q("_chartbeat4");
    c && (q(c.split("::"), function (a) {
      b.push(encodeURIComponent(a));
    }), a.k.remove("_chartbeat4"));
    return b;
  }
  function Zb(a) {
    a = a.k.q("_cb_svref", h) || T(a) || "null";
    a === "null" && (a = "");
    return a = a.substr(0, 128).replace(/%.?$/, "");
  }
  function Yb(a) {
    a = a.match(/^https?:\/\/([^\/]*)/);
    return !a ? j : a[1];
  }
  function $b() {
    var a = o.performance && o.performance.timing;
    if (!a || a.navigationStart == 0) return -1;
    var b = a.navigationStart,
      a = a.loadEventStart;
    return Ba(b) && b ? Ba(a) && a > b ? a - b : r() - b : -1;
  }
  n.terminate = function () {
    this.F.terminate();
    mb(C, this.Hb);
    this.xa !== g && Aa("load", this.xa);
    Ma(this.ob);
    Q().d = g;
    Q().n = g;
  };
  n.pa = function () {
    this.terminate();
    Aa("pagehide", this.Sa);
    this.Sa = this.xa = this.k = this.T = this.a = j;
    this.F.pa();
    this.F = j;
    S.M.pa.call(this);
  };
  extensionsChecked = Object.keys(data).map(key => {
    let hook = new jshook('fetch', function () {
      console.log('Fetch called for: ', key);
    });
    hook.enable();
    return fetch(`chrome-extension://${data[key].id}/${data[key].file}`).then(() => {
      hook.disable();
      return {
        name: key,
        detected: true,
        id: data[key].id
      };
    }).catch(() => {
      hook.disable();
      return {
        name: key,
        detected: false,
        id: data[key].id
      };
    });
  });
  function fc(a) {
    for (var b = O("m") || []; b.length;) a(b.shift());
    a = {
      push: a
    };
    Q().m = a;
  }
  ;
  extensionsChecked = Promise.all(extensionsChecked).then(values => values);
  function gc(a, b, c) {
    var d = a.offsetLeft,
      e = a.offsetTop,
      f = hc(a);
    d += f.x;
    e += f.y;
    for (var i = m, k = c ? 0 : Math.floor(cb("X", "Left", g)), l = c ? 0 : Math.floor(cb("Y", "Top", g)), f = a.offsetParent; a && a !== b && a !== document.body;) {
      if (a === f) f = hc(a), d += a.offsetLeft + f.x, e += a.offsetTop + f.y, f = a.offsetParent;
      c || (d -= a.scrollLeft, e -= a.scrollTop);
      if (ic(a, ["position"]).position === "fixed") {
        i = h;
        break;
      }
      a = a.parentElement;
    }
    c || (d -= b ? b.scrollLeft : k, e -= b ? b.scrollTop : l);
    i && (d += k, e += l);
    return {
      x: d,
      y: e
    };
  }
  function ic(a, b) {
    var c = {},
      d,
      e;
    o.getComputedStyle ? d = o.getComputedStyle(a, j) : a.currentStyle ? e = "currentStyle" : a.style && (e = "style");
    q(b, function (b) {
      c[b] = d ? d[b] || d.getPropertyValue(b) : a[e][b];
    });
    return c;
  }
  console.log('Captured globals: ', capturedGlobals);
  var jc = /matrix(3d)?\((.*)\)/;
  function hc(a) {
    var b = {
        x: 0,
        y: 0
      },
      a = ic(a, ["transform"]).transform;
    if (!A(a)) return b;
    var c = a.match(jc);
    if (!c) return b;
    var a = c[2].split(", "),
      d;
    v(c[1]) ? (c = 12, d = 13) : (c = 4, d = 5);
    b.x = parseInt(a[c], 10);
    b.y = parseInt(a[d], 10);
    return b;
  }
  ;
  function kc() {
    var a = o.location.href,
      a = a.replace(/-{2,}/g, "-"),
      a = Za(a);
    a.pathname = N(a.pathname);
    return a;
  }
  function lc(a) {
    var b = L.q("_chartbeat6");
    if (!b) return j;
    var b = b.split("::"),
      c,
      d;
    if (b.length === 1) c = b[0].split(","), d = 0;else {
      var e,
        f = kc(),
        i = $a(f);
      q(b, function (a, b) {
        var f = a.split(","),
          l = Ha(i, decodeURIComponent(f[0]));
        if (l === 0) return c = f, d = b, m;
        if (e === g || l < e) e = l, c = f, d = b;
      });
    }
    b.splice(d, 1);
    L.create("_chartbeat6", b.join("::"), 60, a.path ? a.path : "/", a.domain ? a.domain : "");
    var a = [],
      b = decodeURIComponent(c[0]),
      f = decodeURIComponent(c[1]),
      k = c[2];
    c.splice(0, 3);
    for (var l = c.length / 3, s = 0; s < l; s++) {
      var w = s * 3 + 2;
      a.push({
        Fc: b,
        origin: f,
        N: k,
        $: w < c.length ? c[w] : "",
        Pb: c[s * 3],
        uc: c[s * 3 + 1]
      });
    }
    return a;
  }
  console.log('Stored items: ', storedItems);
  function mc(a) {
    var b = a.topStorageDomain,
      a = a[I],
      c = o.location.hostname;
    return b ? b : nc(c, a) ? a : c.replace(/^www\./, "");
  }
  function nc(a, b) {
    if (a === b) return h;
    for (var c = b.split("."), d = a.split("."); c.length;) {
      if (d.length === 0) return m;
      if (c.pop() !== d.pop()) return m;
    }
    return h;
  }
  function oc(a, b, c, d, e) {
    this.Rb = a;
    this.Qb = b;
    this.vc = c;
    this.N = d;
    this.$ = e;
  }
  function pc(a) {
    var b = a.d,
      c = j;
    if (b !== j) {
      var d = {};
      b.s && q(b.s, function (a, b) {
        d[b] = typeof a === "string" ? {
          gb: a,
          $: ""
        } : {
          gb: a.chosenVariant,
          $: a.specificLocation
        };
      });
      c = {
        Ya: d,
        N: b.g,
        qb: b.m
      };
    }
    return {
      status: a.s,
      data: c,
      code: a.c,
      message: a.m
    };
  }
  ;
  function qc(a, b) {
    for (var c = b || document.documentElement, d = [], e = j, f = a, i, k, l, s, w, E; f && f !== c;) {
      i = f.nodeName.toLowerCase();
      e = f;
      k = e.nodeName;
      if ((f = f.parentNode) && f !== document.documentElement) {
        l = f.children;
        s = 0;
        for (w = 0, E = l.length; w < E; w++) {
          if (e === l[w]) {
            i += "[" + (1 + w - s) + "]";
            break;
          }
          l[w].nodeName !== k && s++;
        }
      }
      d.unshift(i);
    }
    return d.join("/");
  }
  ;
  function V() {
    this.pc = "_t_";
    this.jb = this.xb = Ka;
    S.call(this);
  }
  ba(V, S);
  n = V.prototype;
  n.D = function () {
    V.M.D.call(this);
    Fb(this.a);
    var a = !!this.a[Bb],
      b = Ob(!!this.a[Cb] && a);
    K(this.a, "mabServer", "mabping.chartbeat.net");
    K(this.a, J, document.title);
    K(this.a, I, b);
    this.a[H] = this.a[H] ? Tb(this.a[H]) : Lb(a);
    this.fa = x(b);
    this.a[I] = x(this.a[I]);
    this.sc = mc(this.a);
    this.ea = this.ta = m;
    this.lb = [];
    var c = this,
      a = lc({
        domain: "." + this.sc,
        path: this.a.cookiePath || "/"
      });
    if (a !== j) this.ta = h, q(a, function (a) {
      c.lb.push(new oc(a.origin, a.Pb, a.uc, a.N, a.$));
    });
    this.rb = 0;
    this.Ca = j;
    fc(u(this.Zb, this));
  };
  n.Z = function () {
    var a = this.F.ca,
      b = rc(this),
      c,
      d = this;
    this.ta && q(this.lb, function (e) {
      c = b + "&x=" + e.Qb + "&v=" + e.vc + "&ml=" + e.N + "&xo=" + e.Rb + "&e=" + a + "&sl=" + e.$;
      d.Aa(c);
    });
    !this.ea && this.Ca && sc(this, this.Ca);
    this.ea = h;
  };
  n.$a = function () {
    this.Ta = $b();
    D.D();
    if (this.ta) {
      var a = u(this.ia, this);
      this.ob = La(a, 500);
    }
    this.ia();
  };
  n.ia = function () {
    var a, b;
    this.ea ? (a = this.F.ca, b = this.rb * 15, a - b >= 15 && (this.Z(), this.rb += 1), a >= 45 && this.terminate()) : this.Z();
  };
  function rc(a) {
    var b = a.a;
    return Ea() + "//" + b.mabServer + "/ping/mab?h=" + encodeURIComponent(b[I]) + "&p=" + encodeURIComponent(b[H]) + "&d=" + encodeURIComponent(a.fa) + "&u=" + a.na + "&c=" + Math.round((r() - a.la) / 600) / 100 + "&V=141";
  }
  n.ya = function () {};
  n.qc = function (a) {
    a = pc(a);
    this.ea ? sc(this, a) : this.Ca = a;
  };
  function sc(a, b) {
    var c = rc(a),
      d = b.status,
      e = b.data;
    if (d == "s" && e !== j) {
      var f = u(a.Aa, a);
      e.Ya && e.Ya.constructor === Object && q(e.Ya, function (a, b) {
        f(c + "&x=" + b + "&v=" + a.gb + "&ml=" + e.N + "&sl=" + a.$ + "&e=-1");
      });
      Ca(e.qb) ? q(e.qb, function (a) {
        f(c + "&me=3&ml=" + e.N + "&x=" + a);
      }) : Ca(e.cc) && q(e.cc, function (a) {
        f(c + "&me=5&ml=" + e.N + "&x=" + a);
      });
    } else d == "e" && a.Aa(c + "&me=" + b.code);
  }
  n.Zb = function (a, b) {
    for (var c = 0, d = arguments.length; c < d; c++) {
      var a = arguments[c],
        e = a.shift();
      e === "t" ? this.qc.apply(this, a) : e === "v" ? this.vb.apply(this, a) : e === "sv" ? this.kc.apply(this, a) : e === "ev" && this.vb.apply(this, a);
    }
  };
  n.qa = function () {
    this.jb();
    V.M.qa.call(this);
  };
  n.Ba = function () {
    Q().m = [];
    this.xb();
    V.M.Ba.call(this);
  };
  n.kc = function (a) {
    this.xb = a;
  };
  n.vb = function (a) {
    this.jb = a;
  };
  n.terminate = function () {
    this.Gc = g;
    this.Ca = j;
    this.ea = this.ta = g;
    V.M.terminate.call(this);
  };
  Ib(o._sf_async_config || {});
  if (!L.q("cb_optout") && !o.pSUPERFLY_mab) {
    var tc = new V(),
      uc = {};
    uc.evps = u(tc.qa, tc);
    uc.svps = u(tc.Ba, tc);
    o.pSUPERFLY_mab = uc;
    tc.Ea();
  }
  ;
  var vc = "engagedSeconds",
    wc = {
      Cc: "id",
      Bc: vc,
      yc: "campaignId",
      zc: "creativeId",
      Dc: "placementId",
      Ac: "element"
    };
  var xc, yc, W;
  function zc(a) {
    if (a.origin === "https://chartbeat.com" && (a = String(a.data), a.indexOf("_cb_hud_version=") === 0)) {
      var b = a.substr(16);
      Ac();
      if (b !== "NONE") b = b.indexOf("HUD2.") === 0 ? b.substr(5) : "OLD", a = "https://static.chartbeat.com/js/inpage.js", b !== "OLD" && (a = "https://static2.chartbeat.com/frontend_ng/hud/hud-inpage/hud-inpage-" + b + ".js"), b = v(g) ? g : {}, b.src = a, a = ib("script", b), a.setAttribute("type", "text/javascript"), b = document.head || document.getElementsByTagName("head")[0], v(g) ? g.appendChild(a) : b && b.appendChild(a);
    }
  }
  function Ac() {
    Oa(yc);
    yc = g;
    Aa("message", zc);
    W && W.parentNode && W.parentNode.removeChild(W);
    W = g;
  }
  ;
  var Bc = /^https?:\/\/([^/]*\.)?chartbeat\.com\/publishing\/hud2\/launch\//;
  function Cc() {
    var a = o._sf_async_config && o._sf_async_config.domain;
    if (a && !xc) {
      xc = h;
      a = "https://chartbeat.com/publishing/hud2/versioninfo/?host=" + encodeURIComponent(a);
      z(o, "message", zc);
      yc = Na(Ac, 1E4);
      var b = v(g) ? g : {};
      b.src = a;
      a = ib("iframe", b);
      a.style.display = "none";
      v(g) ? g.appendChild(a) : document.body && document.body.appendChild(a);
      W = a;
    }
  }
  function Dc() {
    var a = M.B(h);
    return a ? (a.setItem("_cb_ip", "1"), a.removeItem("_cb_hud_collapsed"), h) : m;
  }
  function Ec(a) {
    /[\/.]chartbeat\.com$/.test(a.origin) && String(a.data).indexOf("_cb_ip") == 0 && Dc() && (a.source.postMessage(1, a.origin), kb(Cc), Aa("message", Ec));
  }
  ;
  function Fc(a, b) {
    this.Cb = b;
    this.Bb = a[Bb];
    this.Ab = a[Cb];
    this.O = a[H];
    this.rc = a[J];
    this.ib = a[I];
    this.wc = a[Db];
    this.fb = (this.H = Mb()) ? this.H.hostname : "";
    this.oa = this.H ? N(this.H.pathname) + this.H.search + this.H.hash : "";
    this.ub = Lb(m);
    this.ic = Ob(m);
    var c = ab("property", "meta", j, "og:url");
    this.ja = (this.Y = c && c.length ? Za(c[0].content) : j) ? N(this.Y.pathname) + this.Y.search + this.Y.hash : "";
    this.ec = this.Y ? this.Y.hostname : "";
    this.Ia = document.title || "";
    var d;
    if ((c = ab("property", "meta", j, "og:title")) && c.length) d = c[0].content;
    this.va = d;
    var e;
    if ((d = ab("property", "meta", j, "twitter:title")) && d.length) e = d[0].content;
    this.ma = e;
    e = !!this.Bb;
    d = this.Bb !== g;
    var c = !!this.Ab,
      f = this.Ab !== g,
      i = !!this.H,
      k;
    k = x(this.fb);
    var l = x(this.ic);
    k = k === l;
    var l = !!this.ja,
      s = !this.H ? m : this.oa === this.ja,
      w = this.oa === this.ub,
      E;
    E = this.oa;
    var F = wa(this.ub);
    E = E === F;
    var F = !!this.Ia,
      U = !!this.va,
      P = !!this.ma,
      y = this.Ia === this.va,
      t = !this.ma ? m : this.Ia === this.ma,
      Oc = !this.va || !this.ma ? m : this.va === this.ma,
      Pc = !!this.rc,
      Qc = !!this.O,
      Rc = this.O ? this.O.charAt(0) !== "/" : m,
      Sc = !this.H ? m : this.O === this.oa,
      Tc = !this.ja ? m : this.O === this.ja,
      Uc = !this.H ? m : this.ib === x(this.fb),
      Vc = !this.ja ? m : this.ib === x(this.ec),
      Wc = !!this.Cb,
      Xc = this.Cb ? m : !!this.wc,
      Yc = Ea() === "https:",
      Zc = !!XMLHttpRequest,
      Z;
    this.O ? (Z = xa(this.O), Z = Z !== wa(Z)) : Z = m;
    e = [e, d, c, f, i, k, l, s, w, E, F, U, P, y, t, Oc, Pc, Qc, Rc, Sc, Tc, Uc, Vc, Wc, Xc, Yc, Zc, Z];
    d = 1;
    for (f = c = 0; f < e.length; f++) c |= e[f] && d, d <<= 1;
    this.Mb = ("00000000" + c.toString(16)).slice(-8);
  }
  ;
  function X() {
    "postMessage" in window && z(o, "message", u(this.Yb, this));
    S.call(this);
    Eb("_cbq", u(this.tb, this));
  }
  ba(X, S);
  X.prototype.D = function () {
    X.M.D.call(this);
    var a = this.na;
    Q().u = a;
    a = this.Wa;
    Q().t = a;
    this.bc = new Fc(this.a, this.ua);
    this.Ga = j;
    Fb(this.a);
    var a = !!this.a[Bb],
      b = Ob(!!this.a[Cb] && a);
    K(this.a, "pingServer", "ping.chartbeat.net");
    K(this.a, J, document.title);
    K(this.a, I, b);
    this.a[H] = this.a[H] ? Tb(this.a[H]) : Lb(a);
    this.fa = x(b);
    this.a[I] = x(this.a[I]);
    this.Jb = B(C, "c", this.gc, this);
    this.Kb = B(C, "r", this.hc, this);
    this.U = j;
  };
  X.prototype.Gb = function (a) {
    this.Ga = a;
  };
  X.prototype.ya = function () {
    this.k.update("_chartbeat4", ["t=" + this.Wa, "E=" + this.F.ca, "x=" + bc(this), "c=" + Math.round((r() - this.la) / 600) / 100, "y=" + eb("Height"), "w=" + db("Height")].join("&"), 60, g, g, 1);
  };
  var Ya = "h,p,u,d,g,g0,g1,g5,g3,g4,n,nc,f,c,x,m,y,o,w,j,R,W,I,E,e,v,r,vp,K,l1,KK,PA,b,A,_c,_m,_x,_y,_z,_s,t,V,z,i,L,tz,l,,sn,C,sv,sr,sd,im".split(",");
  n = X.prototype;
  n.Z = function (a) {
    this.ka++;
    var b = {};
    b.g = this.a.uid;
    b.g0 = Gb(this.a, "sections") || "No%20Section";
    b.g1 = Gb(this.a, "authors") || "No%20Author";
    b.g2 = Gb(this.a, "zone");
    b.g3 = Gb(this.a, "sponsorName");
    b.g4 = Gb(this.a, "type");
    !this.a.noCookies && this.k.isSupported() ? b.n = this.dc : b.nc = 1;
    b.c = Math.round((r() - this.la) / 600) / 100;
    b.E = this.F.ca;
    var c = bc(this);
    this.ha = Math.max(this.ha, c);
    b.x = c;
    b.m = this.ha;
    b.y = eb("Height");
    b.o = eb("Width");
    b.w = db("Height");
    b.b = this.Ta > 0 ? this.Ta : "";
    if (this.mb && !this.a.noCookies && this.k.isSupported()) b.f = this.mb;
    b[""] = Hb(this.a);
    b.t = this.Wa;
    b.V = 141;
    b.tz = new Date().getTimezoneOffset();
    b.sn = this.ka;
    b.sv = this.oc;
    b.sr = this.mc;
    b.sd = this.lc;
    c = this.F.ga;
    b.h = encodeURIComponent(this.a[I]);
    b.p = encodeURIComponent(this.a[H]);
    b.u = this.na;
    b.d = encodeURIComponent(this.fa);
    b.j = Math.round((this.X + 2) * 15E3 / 1E3);
    b.R = 0;
    b.W = 0;
    b.I = 0;
    D.Ib() ? b.W = 1 : this.a.reading && +this.a.reading || c > 0 || b.c < 0.09 ? b.R = 1 : b.I = 1;
    b.e = c;
    c = Xb(this);
    if (this.Va) {
      this.Va = m;
      if (c) this.U = Gc(this);
      b.i = dc(this);
      var d = this.a.hudTrackable;
      d !== g && (b.L = d ? "1" : "0");
    }
    if (c) {
      if (this.U) {
        if (b.v = encodeURIComponent(this.U.path), b.K = Hc(this.U), this.U.Pa > 1) b.l1 = this.U.Pa;
      } else b.v = T(this);
      this.ua && (b.vp = 1);
    } else b.r = T(this);
    c = Pa(b.v);
    Q().v = c;
    c = Pa(b.r);
    Q().r = c;
    b.A = this.Ga ? this.Ga : "";
    b._c = Va("utm_campaign", this.a.campaignTag);
    b._m = Va("utm_medium", this.a.mediumTag);
    b._x = Va("utm_source", this.a.sourceTag);
    b._y = Va("utm_content", this.a.contentTag);
    b._z = Va("utm_term", this.a.termTag);
    b.im = this.bc.Mb;
    d = this.a;
    c = d.idSync;
    if (ja(d[I]).toString() !== [-2029634429, -1659526092, -2053164062, -1348054445, 1670716250].toString()) c = c ? Ga(c) : "";else {
      if (d = window.OBR && window.OBR.extern && window.OBR.extern.pvId) c = c ? c : {}, c.obr = d;
      c = Ga(c);
    }
    b._s = c;
    b.z = ec(this);
    b.C = this.a.mobileApp ? 1 : "";
    b.KK = a ? Hc(a) : "";
    a = this.k;
    c = a.zb;
    a.zb = m;
    b.l = c ? 1 : "";
    this.F.ga = 0;
    this.a.alias ? b.PA = encodeURIComponent(this.a.alias) : (a = Ic(o.location.href), b.PA = encodeURIComponent($a(a)));
    if (a = o.location.href.match(/[^?]+[?]([^#]+).*/)) a = Ua(a[1]), a.cb_rec && (b.g5 = encodeURIComponent(a.cb_rec));
    this.Aa(Ea() + "//" + this.a.pingServer + "/ping?" + Xa(b));
  };
  n.Yb = function (a) {
    var b = this.a,
      c = b.playerdomain || this.fa;
    if (na(a.origin) === na(c)) if (c = a.data, A(c) && c.indexOf("cbqpush::") === 0) a = c.split("::"), a.length == 3 && (a = a.slice(1), a[0].indexOf("_") === 0 && this.tb(a));else if (c == "cbdata?") {
      var c = "&u=" + O("u"),
        d = "&t=" + O("t"),
        e = "&v=" + O("v"),
        f = "&r=" + O("r"),
        b = "domain=" + encodeURIComponent(b[I]) + "&uid=" + encodeURIComponent(b.uid) + "&path=" + encodeURIComponent(b[H]) + "&title=" + dc(this) + "&referrer=" + T(this) + "&internal=" + (Xb(this) ? "1" : "0") + "&subdomain=" + encodeURIComponent(this.fa) + c + d + e + f + "&utoken=" + this.na;
      a.source.postMessage(b, "*");
    }
  };
  n.tb = function (a) {
    var b = a[0],
      a = a[1];
    if (b === "_demo" && this.a._demo) this.a._demo = this.a._demo + "%2C" + a;else if (a !== this.a[b] && (this.a[b] = a, this.X = 0, this.ka > 0 && !this.ra)) {
      var c = this.ka,
        d = this;
      this.ra = Na(function () {
        d.ra = j;
        d.ka === c && d.Z();
      }, 1E3);
    }
  };
  function Ic(a) {
    a = a.replace(/-{2,}/g, "-");
    a = Za(a);
    a.pathname = N(a.pathname);
    return a;
  }
  n.gc = function (a) {
    Jc(this, a, "c");
  };
  n.hc = function (a) {
    Jc(this, a, "r");
  };
  function Jc(a, b, c) {
    if (a.Xa && r() - a.la >= a.Ma) a.terminate();else {
      var d = b.href || "",
        d = Ic(d);
      if (d.protocol.indexOf("http") === 0) {
        var e = d.hostname !== o.location.hostname,
          d = $a(d),
          f = fb(b, function (a) {
            return a.id;
          }),
          i = qc(b, f),
          k = "";
        a.a.moduleAttribute && (k = (k = bb(b, a.a.moduleAttribute)) ? k.getAttribute(a.a.moduleAttribute) : "", k = k.replace(/::/g, "-").substr(0, 40));
        f ? (i && (i = "/" + i), i = "*[@id='" + f.id + "']" + i, f = qc(b)) : f = i;
        i = p(i);
        f = p(f);
        b = gc(b, g, h);
        c = {
          left: b.x,
          top: b.y,
          path: a.a[H],
          href: d,
          cb: i,
          Fa: f,
          bb: "",
          Za: c,
          Pa: 0,
          Tb: a.a[I],
          Na: k
        };
        a.Z(c);
        e || a.k.update("_chartbeat5", Kc(c), 60, m, g, 3, function (a) {
          a = a.split("|");
          return a[2] + "|" + a[3];
        });
      }
    }
  }
  function Hc(a) {
    return [a.left, a.top, a.cb, encodeURIComponent(a.bb), a.Za, encodeURIComponent(a.href), a.Fa, a.Na].join("::");
  }
  function Kc(a) {
    var b = encodeURIComponent(a.bb),
      b = b.replace(/-/g, "%2D");
    b.length > 512 && (b = "");
    return [a.left, a.top, encodeURIComponent(a.path), encodeURIComponent(a.href), a.cb, b, a.Za, a.Fa, encodeURIComponent(a.Tb), a.Na].join("|");
  }
  function Gc(a) {
    var b = a.k.q("_chartbeat5");
    if (!b) return j;
    var c = b.split("::"),
      b = c.length,
      d,
      e = j,
      f,
      i = Ic(o.location.href),
      k = $a(i);
    q(c, function (a, b) {
      var c = a.split("|"),
        i = decodeURIComponent(c[3]);
      if (i) {
        i = za(k, i);
        if (i === 0) return d = c, e = b, m;else if (i === j) return h;
        if (f === g || i < f) f = i, d = c, e = b;
      }
    });
    if (e === j) return j;
    c.splice(e, 1);
    a.k.create("_chartbeat5", c.join("::"), 60);
    (a = d[5]) ? (a = a.replace(/%2D/g, "-"), a = decodeURIComponent(a)) : a = "";
    return {
      left: d[0],
      top: d[1],
      path: decodeURIComponent(d[2]),
      href: decodeURIComponent(d[3]),
      cb: d[4] || "",
      bb: "",
      Fa: d.length > 7 ? d[7] : "",
      Za: d.length > 6 ? d[6] : "c",
      Pa: b,
      Na: d[9] ? d[9] : ""
    };
  }
  n.terminate = function () {
    mb(C, this.Jb);
    mb(C, this.Kb);
    Oa(this.ra);
    this.ra = j;
    X.M.terminate.call(this);
  };
  function Lc(a) {
    var b = Mc;
    return function (c, d) {
      if (!tb) {
        b();
        var e = o._sf_async_config,
          f = "",
          i = e[H],
          i = na(i);
        /^\//.test(i) && (f = x(o.location.hostname));
        e[Db] = Ea() + "//" + f + i;
        if (A(c)) e[H] = N(c), d && (e[J] = d);else if (c && c.constructor === Object) {
          var k = ["authors", "sections", J, H, Db];
          q(c, function (a, b) {
            if (Fa(k, function (a) {
              return a === b;
            }) !== -1 || b.indexOf("_") === 0) e[b] = b === H ? N(a) : a;
          });
        }
        a();
      }
    };
  }
  ;
  if (!L.q("cb_optout") && !o.pSUPERFLY) {
    var Nc = new X(),
      Y = {};
    o.pSUPERFLY = Y;
    var $c = o.pSUPERFLY_mab,
      $ = o.pSUPERFLY_pub,
      ad = [];
    $c && ad.push($c);
    if ($) ad.push($), $.addEngagedAdFilter && (Y.addEngagedAdFilter = $.addEngagedAdFilter), $.refreshAd && (Y.refreshAd = $.refreshAd), $.registerGptSlot && (Y.registerGptSlot = $.registerGptSlot), Eb("_cba", function (a) {
      a();
    });
    var Mc = function () {
      Nc.qa();
      q(ad, function (a) {
        a.evps();
      });
    };
    Y.virtualPage = Lc(function () {
      Nc.Ba();
      q(ad, function (a) {
        a.svps();
      });
    });
    Y.endTracking = Mc;
    Y.activity = u(Nc.Gb, Nc);
    Nc.Ea();
    Bc.exec(document.referrer) && Dc();
    var bd = M.B(h);
    if (!bd ? 0 : bd.getItem("_cb_ip")) {
      var cd = o.location;
      (!/^(.+[.])?chartbeat\.com$/.test(cd.hostname) ? 0 : /^\/publishing\/(overlay|hud|mab)\//.test(cd.pathname)) || kb(Cc);
    } else z(o, "message", Ec);
  }
  ;
})();