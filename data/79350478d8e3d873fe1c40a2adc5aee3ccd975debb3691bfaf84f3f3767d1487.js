(function () {
  var d = void 0,
    g = true,
    i = null,
    j = false;
  function k() {
    return function () {};
  }
  function m(a) {
    return function () {
      return this[a];
    };
  }
  function p(a) {
    return function () {
      return a;
    };
  }
  var q,
    r = this;
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
  function ba(a, b, c) {
    return a.call.apply(a.bind, arguments);
  }
  function da(a, b, c) {
    if (!a) throw Error();
    if (arguments.length > 2) {
      var e = Array.prototype.slice.call(arguments, 2);
      return function () {
        var c = Array.prototype.slice.call(arguments);
        Array.prototype.unshift.apply(c, e);
        return a.apply(b, c);
      };
    } else return function () {
      return a.apply(b, arguments);
    };
  }
  function s(a, b, c) {
    s = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? ba : da;
    return s.apply(i, arguments);
  }
  function ea(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.la = b.prototype;
    a.prototype = new c();
    a.prototype.constructor = a;
  }
  ;
  function fa() {}
  function ga(a, b, c) {
    switch (typeof b) {
      case "string":
        ia(b, c);
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
        if (b == i) {
          c.push("null");
          break;
        }
        if (aa(b) == "array") {
          var e = b.length;
          c.push("[");
          for (var f = "", h = 0; h < e; h++) c.push(f), ga(a, b[h], c), f = ",";
          c.push("]");
          break;
        }
        c.push("{");
        e = "";
        for (f in b) Object.prototype.hasOwnProperty.call(b, f) && (h = b[f], typeof h != "function" && (c.push(e), ia(f, c), c.push(":"), ga(a, h, c), e = ","));
        c.push("}");
        break;
      case "function":
        break;
      default:
        throw Error("Unknown type: " + typeof b);
    }
  }
  var la = {
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
    ma = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
  function ia(a, b) {
    b.push('"', a.replace(ma, function (a) {
      if (a in la) return la[a];
      var b = a.charCodeAt(0),
        f = "\\u";
      b < 16 ? f += "000" : b < 256 ? f += "00" : b < 4096 && (f += "0");
      return la[a] = f + b.toString(16);
    }), '"');
  }
  ;
  var na = {
    scroll: 5E3,
    keydown: 5E3,
    mousemove: 5E3,
    resize: 5E3,
    mousedown: 5E3,
    focus: 5E3,
    pageload: 5E3
  };
  function oa() {
    for (var a = "", b = 0; b < 16; b++) a += Math.random();
    return a;
  }
  function pa(a, b) {
    var c = "",
      e = qa(encodeURIComponent(a));
    e.splice(b || 5, e.length);
    t(e, function (a) {
      if (a == 0) a = "A";else {
        a >>>= 0;
        for (var b = "", e; a > 0;) e = a % 64, b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-".charAt(e) + b, a >>>= 6;
        a = b;
      }
      c += a;
    });
    return c;
  }
  function qa(a) {
    a += String.fromCharCode(128);
    for (var b = [1518500249, 1859775393, 2400959708, 3395469782], c = 1732584193, e = 4023233417, f = 2562383102, h = 271733878, l = 3285377520, o = [], n, D, G, R, U, ha = Math.ceil((a.length / 4 + 2) / 16), ca = [ha], L = 0, E; L < ha; L++) {
      ca[L] = [];
      for (n = 0; n < 16; n++) ca[L][n] = a.charCodeAt(L * 64 + n * 4) << 24 | a.charCodeAt(L * 64 + n * 4 + 1) << 16 | a.charCodeAt(L * 64 + n * 4 + 2) << 8 | a.charCodeAt(L * 64 + n * 4 + 3);
    }
    L = (a.length - 1) * 8;
    a = ha - 1;
    ca[a][14] = Math.floor(L / Math.pow(2, 32));
    ca[a][15] = L & 4294967295;
    for (L = 0; L < ha; L++) {
      for (E = 0; E < 16; E++) o[E] = ca[L][E];
      for (E = 16; E < 80; E++) o[E] = (o[E - 3] ^ o[E - 8] ^ o[E - 14] ^ o[E - 16]) << 1 | (o[E - 3] ^ o[E - 8] ^ o[E - 14] ^ o[E - 16]) >>> 31;
      a = c;
      n = e;
      D = f;
      G = h;
      R = l;
      for (E = 0; E < 80; E++) U = Math.floor(E / 20), U = (a << 5 | a >>> 27) + (U == 0 ? n & D ^ ~n & G : U == 1 ? n ^ D ^ G : U == 2 ? n & D ^ n & G ^ D & G : n ^ D ^ G) + R + b[U] + o[E] & 4294967295, R = G, G = D, D = n << 30 | n >>> 2, n = a, a = U;
      c = c + a & 4294967295;
      e = e + n & 4294967295;
      f = f + D & 4294967295;
      h = h + G & 4294967295;
      l = l + R & 4294967295;
    }
    return [c, e, f, h, l];
  }
  function ra(a) {
    var b = r.navigator,
      c = r.window.screen,
      e = [b.userAgent, b.platform, new Date().getTimezoneOffset(), c.width + c.height + c.colorDepth];
    t(b.plugins, function (a) {
      e.push(a.name + a.description + a.filename + a[0].type);
    });
    b = r.performance;
    e = e.concat([b && b.now ? b.now() : "", document.title, r.location.href, u(), oa()]);
    return e.concat(a || []).join();
  }
  function v(a, b, c) {
    var e = Array.prototype.slice,
      f = e.call(arguments, 2);
    return function () {
      return a.apply(b, f.concat(e.call(arguments)));
    };
  }
  function w(a) {
    return typeof a !== "undefined";
  }
  function x(a) {
    return a && a.replace(/^www\./, "");
  }
  function sa() {
    var a = r.location.hostname;
    return a && a.replace(/^www[0-9]*\./, "");
  }
  var ta = /^((https?\:)?(\/\/))/i;
  function ua(a) {
    return a && a.replace(ta, "");
  }
  var va = /^((https?\:)?(\/\/))?[^\/]*/;
  function wa(a) {
    return a.replace(va, "");
  }
  var xa = /\#.*/;
  function za(a) {
    return a.replace(xa, "");
  }
  var Aa = /\?[^\#]*/;
  function Ba(a) {
    return a.toLowerCase();
  }
  var Ca = /\/+((\?|\#).*)?$/;
  function Da(a) {
    return a.replace(Ca, "$1");
  }
  function Ea(a) {
    return a && a.replace(Aa, "");
  }
  function Fa(a) {
    var b = a.match(/\?(.*)$/ig) ? a.match(/\?(.*)$/ig)[0].slice(1).replace(/#(.*)?/ig, "").split("&") : [],
      c = a.match(/#(.*)$/ig) ? a.match(/#(.*)$/ig)[0] : "",
      a = a.match(/[#|\?](.*)?/ig) ? a.slice(0, a.search(/[#|\?](.*)?/ig)) : a,
      b = Ga(b, function (a) {
        return a.search("utm") !== 0;
      });
    b.length > 0 && (a += "?" + b.join("&"));
    return a + c;
  }
  function Ha(a, b) {
    if (a === b) return 0;
    var c = i;
    t([Ba, Da, ua, wa, za, Ea], function (e, f) {
      a = e(a);
      b = e(b);
      if (a === b) return c = f + 1, j;
    });
    return c;
  }
  function Ia(a, b, c, e) {
    a.addEventListener ? a.addEventListener(b, c, !!e) : a.attachEvent && a.attachEvent("on" + b, c);
  }
  function Ja(a, b, c) {
    a.removeEventListener ? a.removeEventListener(b, c, j) : a.detachEvent && a.detachEvent("on" + b, c);
  }
  function Ka(a) {
    return typeof a === "number";
  }
  function La(a) {
    return typeof a === "string";
  }
  function Ma(a) {
    return typeof a === "function";
  }
  function Na(a) {
    return Object.prototype.toString.call(a) === "[object Array]";
  }
  function Oa(a) {
    a = new Date(+a);
    return Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  }
  function u() {
    return new Date().getTime();
  }
  function Pa(a) {
    return encodeURIComponent(a);
  }
  function Qa() {
    return r.location.protocol === "http:" ? "http:" : "https:";
  }
  function t(a, b) {
    if ((!!a && a.constructor === Object) === g) for (var c in a) {
      if (a.hasOwnProperty(c) && b(a[c], c) === j) break;
    } else {
      c = 0;
      for (var e = a.length; c < e; c++) if (b(a[c], c) === j) break;
    }
  }
  function Ra(a, b) {
    for (var c = 0, e = a.length; c < e; c++) if (b(a[c])) return c;
    return -1;
  }
  function Sa(a) {
    var b = r.pSUPERFLY_video,
      a = Ra(b, a);
    if (a > -1) return b[a];
  }
  function Ga(a, b) {
    var c = [];
    t(a, function (a) {
      b(a) && c.push(a);
    });
    return c;
  }
  function Ta(a) {
    if (a) {
      var b = [];
      ga(new fa(), a, b);
      a = encodeURIComponent(b.join(""));
    } else a = "";
    return a;
  }
  function Ua(a) {
    return a === d ? 0 : u() - a;
  }
  function Va(a, b) {
    if (a === b) return 0;
    if (a.length === 0) return b.length;
    if (b.length === 0) return a.length;
    for (var c = [], e = 0, f = b.length; e <= f; e++) c[e] = [e];
    for (var h = 0, l = a.length; h <= l; h++) c[0][h] = h;
    for (var o, n, D, e = 1; e <= f; e++) for (h = 1; h <= l; h++) o = e - 1, n = h - 1, D = c[o][n], b.charAt(o) == a.charAt(n) ? c[e][h] = D : (n = c[e][n] + 1, o = c[o][h] + 1, D += 2, c[e][h] = Math.min(n, o, D));
    return c[b.length][a.length];
  }
  function Wa(a) {
    return a === d ? 0 : u() - a;
  }
  function y(a) {
    return Math.round(a === -1 || isNaN(a) ? -1 : a * 1E3);
  }
  function Xa() {
    if (Ya !== d) return Ya;
    var a = r.navigator.userAgent;
    return Ya = a.indexOf("AppleWebKit") > 0 && a.indexOf("FBIOS") > 0;
  }
  var Ya;
  function Za() {}
  var $a = r.setInterval,
    ab = r.clearInterval,
    bb = r.setTimeout,
    cb = r.clearTimeout;
  function db(a, b) {
    return $a(a, b);
  }
  function eb(a) {
    switch (a) {
      case d:
        return "undefined";
      case "":
        return "empty";
      default:
        return a;
    }
  }
  function fb(a) {
    switch (a) {
      case "undefined":
        break;
      case "empty":
        return "";
      default:
        return a;
    }
  }
  function gb() {
    for (var a = document.domain, b = a.split("."), c = window.location.protocol === "https:" ? "; Secure" : "", e = 0; e < b.length - 1 && document.cookie.indexOf("_cbt=_cbt") == -1;) a = b.slice(-1 - ++e).join("."), document.cookie = "_cbt=_cbt; domain=" + a + c;
    document.cookie = "_cbt=; expires=Thu, 01 Jan 1970 00:00:01 GMT; domain=" + a + c;
    return a;
  }
  var hb = g;
  function ib(a, b, c) {
    if (c) return a;
    return b && b[jb] && hb && (c = gb(), b[jb] !== c) ? a + "_" + sa().split(".")[0] : a;
  }
  ;
  function kb(a) {
    var b = {};
    a && (a.charAt(0) == "?" && (a = a.substring(1)), a = a.replace(/\+/g, " "), t(a.split(/[&;]/g), function (a) {
      a = a.split("=");
      b[decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
    }));
    return b;
  }
  function lb(a, b) {
    var c = "",
      e = r.location.href.match(/[^?]+[?]([^#]+).*/);
    if (e) {
      var e = kb(e[1]),
        f = b || a;
      e[f] && (c = e[f]);
    }
    return encodeURIComponent(c);
  }
  function mb(a, b) {
    return !b ? g : a === "http:" && b === "80" || a === "https:" && b === "443";
  }
  function nb(a) {
    var b = [];
    t(ob, function (c) {
      var e = a[c];
      w(e) && (Na(e) ? t(e, function (a) {
        b.push(c + "=" + a);
      }) : e && e.constructor === Object ? t(e, function (a, c) {
        b.push(c + "=" + a);
      }) : ((e + "").length || c == "r") && b.push(c + "=" + e));
    });
    b.push("_");
    return b.join("&");
  }
  function pb(a) {
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
      e = r.location;
    if (!/^https?:/.test(a) && a.indexOf("javascript:") !== 0 && a.indexOf("app:") < 0) if (a.indexOf("//") === 0) a = e.protocol + a;else if (a.indexOf("/") === 0) var f = mb(e.protocol, e.port) ? "" : e.port,
      a = e.protocol + "//" + e.hostname + (f ? ":" + f : "") + a;else {
      var f = document.baseURI || e.href,
        h = f.indexOf("?");
      h === -1 && (h = f.indexOf("#"));
      if (h === -1) h = f.length;
      h = f.lastIndexOf("/", h);
      a = h === -1 ? "/" + a : f.substr(0, h) + "/" + a;
    }
    c.href = a;
    b.hostname = c.hostname;
    b.pathname = c.pathname;
    b.search = c.search;
    b.protocol = c.protocol;
    b.port = c.port;
    b.hash = c.hash;
    if (b.pathname.charAt(0) !== "/") b.pathname = "/" + b.pathname;
    if (b.hostname === "") b.hostname = e.hostname;
    if (b.protocol === "") b.protocol = e.protocol;
    if (b.protocol === "javascript:") b.pathname = "", b.hostname = "", b.port = "", b.hash = "";
    if (mb(b.protocol, b.port) || b.port === "0") b.port = "";
    return b;
  }
  function qb(a) {
    var b = a.protocol;
    a.hostname && (b += "//" + a.hostname, a.port && (b += ":" + a.port));
    return b + a.pathname + a.search + a.hash;
  }
  ;
  function rb(a, b, c, e) {
    b = b || "*";
    c = c || document;
    if ("querySelectorAll" in c) return c.querySelectorAll(b + "[" + (a + (e ? '="' + e + '"' : "")) + "]");
    for (var f = [], b = c.getElementsByTagName(b), c = b.length, h = ""; c--;) (h = b[c].getAttribute(a)) && (!e || h === e) && f.push(b[c]);
    return f;
  }
  function sb(a, b, c) {
    c = c || "";
    if (a === d) a = j;else {
      var e;
      if (!(e = c === "" && a.getAttribute(b))) if (e = a.getAttribute(b)) e = a.getAttribute(b) === c;
      a = e ? a : a === document.body ? j : sb(a.parentNode, b, c);
    }
    return a;
  }
  function tb(a) {
    var b, c;
    b = "pageYOffset";
    c = "scrollTop";
    if (a && (a = rb("data-cb-scroll-element")) && a.length) return a[0][c];
    if (Ka(r[b])) return r[b];else if (document.body && document.body[c]) return document.body[c];else if (document.documentElement[c]) return document.documentElement[c];
    return 0;
  }
  function ub() {
    var a = document,
      a = a[a.compatMode === "CSS1Compat" ? "documentElement" : "body"].clientHeight || 0;
    window.innerHeight && (a = Math.min(window.innerHeight, a));
    return a;
  }
  function vb(a) {
    a = "scroll" + a;
    return Math.max(document.body[a], document.documentElement[a]) || 0;
  }
  function wb(a, b, c) {
    a.ownerDocument || (a = a.correspondingUseElement);
    if (!a || !a.ownerDocument) return i;
    var e = a.ownerDocument.documentElement,
      f = 0,
      h = w(c) ? c + 1 : -1;
    La(b) ? (b = b.toLowerCase(), c = function (a) {
      return (a = a.nodeName) && a.toLowerCase() === b;
    }) : c = b;
    for (; a && a !== e && f !== h;) {
      if (c(a)) return a;
      a = a.parentNode;
      f++;
    }
    return i;
  }
  function xb(a) {
    return a.nodeName && a.nodeName.toLowerCase() === "a" && (!a.namespaceURI || a.namespaceURI === "http://www.w3.org/1999/xhtml");
  }
  function yb(a) {
    a = a || window.event;
    return !a ? i : wb(a.target || a.srcElement, xb, 10);
  }
  function zb(a, b) {
    var c = document.createElement(a);
    t(b, function (a, b) {
      c.setAttribute(b, a);
    });
    return c;
  }
  function Ab() {
    return r.document.readyState === "complete" || r.document.readyState !== "loading" && !r.document.documentElement.doScroll;
  }
  function Bb(a) {
    function b() {
      if (r.document.addEventListener || r.event.type === "load" || r.document.readyState === "complete") r.document.addEventListener ? (r.document.removeEventListener("DOMContentLoaded", b, j), r.removeEventListener("load", b, j)) : (r.document.detachEvent("onreadystatechange", b), r.detachEvent("onload", b)), a();
    }
    Ab() ? a() : r.document.addEventListener ? (r.document.addEventListener("DOMContentLoaded", b, j), r.addEventListener("load", b, j)) : (r.document.attachEvent("onreadystatechange", b), r.attachEvent("onload", b));
  }
  ;
  function Cb() {
    this.oa = {};
    this.Ya = 1;
  }
  function Db(a, b, c, e) {
    a.Ya++;
    a.oa[b] = a.oa[b] || {};
    a.oa[b][a.Ya] = [c, e];
    return a.Ya;
  }
  function Eb(a, b) {
    if (La(b)) a.oa[b] = d, delete a.oa[b];else if (Ka(b)) {
      var c = g;
      t(a.oa, function (a) {
        t(a, function (f, h) {
          if (parseInt(h, 10) === b) return a[h] = d, delete a[h], c = j;
        });
        return c;
      });
    }
  }
  Cb.prototype.Ja = function (a, b) {
    if (this.oa[a]) {
      var c = arguments.length > 1 ? Array.prototype.slice.call(arguments, 1) : [];
      t(this.oa[a], function (a) {
        var b;
        a && a.length === 2 && (b = a[0], a = a[1], b.apply(a, c));
      });
    }
  };
  Cb.prototype.addEventListener = function (a, b) {
    var c = Db(this, a, b);
    b._cbEventId = c;
  };
  Cb.prototype.removeEventListener = function (a, b) {
    this.oa[a] && this.oa[a][b._cbEventId] && this.oa[a][b._cbEventId][0] === b && Eb(this, b._cbEventId);
  };
  var z = new Cb();
  var A = {};
  A.da = function () {
    A.Yb ? A.Cb("pageload") : (A.kd = [{
      target: r,
      event: "scroll"
    }, {
      target: document.body,
      event: "keydown"
    }, {
      target: document.body,
      event: "mousemove"
    }, {
      target: r,
      event: "resize"
    }, {
      target: document.body,
      event: "mousedown"
    }], A.Ib = i, A.Va = i, A.Xb = {}, A.Oc = {}, t(A.kd, function (a) {
      var b = a.event;
      Ia(a.target, b, function (a) {
        A.Cb.call(A, b, a);
      });
    }), Db(z, "f", function () {
      A.Cb("focus");
    }), A.Cb("pageload"), Ia(document.body, "click", function (a) {
      (a = yb(a)) && z.Ja("c", a);
    }, g), Ia(document.body, "contextmenu", function (a) {
      (a = yb(a)) && z.Ja("r", a);
    }), A.Yb = g);
  };
  A.pd = function () {
    var a,
      b = A.Oc.keydown;
    if (b === d) return j;
    b = u() - b;
    return b <= (a || 15E3) && b >= 0;
  };
  A.Ac = 100;
  A.Cb = function (a, b) {
    if (!b) b = window.event;
    if (b && a === "keydown") {
      var c = b.keyCode ? b.keyCode : b.which;
      if (c === 32 || c > 36 && c < 41) a = "scroll";
    }
    A.Ce(a);
    if (A.Ib === i) A.ad(a);else if (!A.Va || na[A.Va] < na[a]) A.Va = a;
  };
  A.Ce = function (a) {
    A.Oc[a] = u();
  };
  A.ad = function (a) {
    A.Ib = bb(A.xd, A.Ac);
    z.Ja("a");
    A.Xb[a] !== i && cb(A.Xb[a]);
    A.ue(a);
  };
  A.ue = function (a) {
    var b = A.Xb;
    b[a] = bb(function () {
      cb(b[a]);
      delete b[a];
      var c = j;
      t(b, function () {
        c = g;
        return j;
      });
      c || z.Ja("i");
    }, na[a] + A.Ac);
  };
  A.xd = function () {
    cb(A.Ib);
    A.Ib = i;
    if (A.Va) A.ad(A.Va), A.Va = i;
  };
  var Fb, Gb, Hb, Ib, Jb;
  (function () {
    var a, b;
    t(["", "moz", "o", "ms", "webkit"], function (c) {
      a = (c + "Hidden").charAt(0).toLowerCase() + (c + "Hidden").slice(1);
      if (typeof r.document[a] === "boolean") return b = c, j;
    });
    b !== d && (Ib = a, Jb = (b + "VisibilityState").charAt(0).toLowerCase() + (b + "VisibilityState").slice(1), Hb = b + "visibilitychange");
  })();
  var Kb = j;
  function Lb() {
    Kb = Jb && r.document[Jb] === "prerender" ? g : j;
  }
  function Mb() {
    Gb = g;
    z.Ja("f");
  }
  function Nb() {
    Gb = j;
    z.Ja("b");
  }
  function Ob(a, b, c) {
    r.addEventListener ? r.addEventListener(a, c, j) : r.document.attachEvent && r.document.attachEvent(b, c);
  }
  function Pb() {
    var a = g;
    !Xa() && r.document.hasFocus && (a = r.document.hasFocus());
    var b = j;
    Ib && (b = r.document[Ib]);
    return a && !b;
  }
  function Qb() {
    Pb() ? Mb() : Nb();
  }
  function Rb(a) {
    Lb();
    if (Kb) {
      var b = j,
        c = function () {
          b || (Lb(), Kb || (b = g, a(), r.window.setTimeout(function () {
            r.document.removeEventListener(Hb, c, j);
          }, 100)));
        };
      r.document.addEventListener(Hb, c, j);
    } else a();
  }
  ;
  function Sb() {
    this.k = r._sf_async_config || {};
    this.Jc = v(this.Uc, this);
  }
  Sb.prototype.da = function () {
    this.ib = 0;
  };
  Sb.prototype.Uc = k();
  Sb.prototype.jb = function (a) {
    if (!Kb) {
      var b = this.Jc,
        c;
      c = new Image(1, 1);
      if (b) c.onerror = b;
      c.src = a;
    }
  };
  Sb.prototype.za = function () {
    this.Jc = i;
  };
  var B = "path",
    C = "domain",
    Tb = "useCanonical",
    Ub = "useCanonicalDomain",
    Vb = "title",
    Wb = "virtualReferrer",
    jb = "cookieDomain";
  function F(a, b, c) {
    a[b] = a[b] || c;
  }
  function Xb(a, b) {
    for (var c = r[a] || []; c.length;) b(c.shift());
    r[a] = {
      push: b
    };
  }
  function Yb(a) {
    t(document.getElementsByTagName("script"), function (b) {
      if (typeof b.src === "string" && b.src.match(/chartbeat.js/)) return b = kb(b.src.split("?")[1]), F(a, "uid", b.uid), F(a, C, b.domain), j;
    });
  }
  function Zb(a, b) {
    return a[b] ? encodeURIComponent(a[b]) : "";
  }
  function $b(a) {
    var b = {};
    t(a, function (a, e) {
      e.charAt(0) == "_" && (b[e] = a);
    });
    return b;
  }
  function ac(a) {
    if (bc(a)) return "";
    var a = a[jb],
      b = gb();
    a && a !== sa() && a !== b && (hb = j, r.console.warn("Invalid cookieDomain (must be set to current domain or root domain), defaulting to root domain."));
    return a && hb ? a : b;
  }
  function bc(a) {
    return a && a.noCookies ? g : j;
  }
  ;
  var H = {};
  H.td = function (a, b) {
    try {
      H.create("_cb_test", "1", 1, a, b);
      var c = H.N("_cb_test");
      H.remove("_cb_test", a, b);
      return c === "1";
    } catch (e) {
      return j;
    }
  };
  H.N = function (a, b) {
    var c = r._sf_async_config;
    if (bc(c)) return "";
    var a = ib(a, c, b) + "=",
      e = "";
    t(document.cookie.split(";"), function (b) {
      for (; b.charAt(0) === " ";) b = b.substring(1, b.length);
      if (b.indexOf(a) === 0) return e = b.substring(a.length, b.length), j;
    });
    return e;
  };
  H.create = function (a, b, c, e, f, h) {
    var l = r._sf_async_config;
    if (bc(l)) return "";
    a = ib(a, l, h);
    h = new Date();
    h.setTime(u() + c * 1E3);
    a = a + "=" + b + ("; expires=" + h.toUTCString()) + ("; path=" + e) + (window.location.protocol === "https:" ? "; Secure" : "") + (f ? "; domain=" + f : "");
    return document.cookie = a;
  };
  H.remove = function (a, b, c, e) {
    return H.N(a, e) ? H.create(a, "", -86400, b, c, e) : "";
  };
  var I = {};
  I.ga = function (a) {
    var b = r._sf_async_config;
    if (!a && b && b.noCookies) return i;
    if (I.ga.Ob !== d) return I.ga.Ob;
    var a = u() + "",
      c,
      e;
    try {
      if ((e = r.localStorage).setItem("_cb_ls_test", a), c = e.getItem("_cb_ls_test") === a, e.removeItem("_cb_ls_test"), c) return I.ga.Ob = e;
    } catch (f) {}
    return I.ga.Ob = i;
  };
  I.N = function (a) {
    var b = I.ga();
    if (!b) return "";
    var c = b.getItem(a + "_expires");
    return c && (c = +c, !isNaN(c) && u() > c) ? (I.remove(a), "") : b.getItem(a) || "";
  };
  I.create = function (a, b, c) {
    var e = I.ga();
    if (e) {
      var f = new Date();
      f.setTime(u() + c * 1E3);
      try {
        e.setItem(a, b), e.setItem(a + "_expires", f.getTime());
      } catch (h) {}
    }
  };
  I.remove = function (a) {
    var b = I.ga();
    b && (b.removeItem(a), b.removeItem(a + "_expires"));
  };
  function cc(a, b, c, e) {
    this.Eb = a || "";
    this.Ka = b || "/";
    this.Ec = e || {};
    this.Za = (this.bc = bc(this.Ec)) ? "" : c || gb();
    this.yd = I.ga() !== i || H.td(this.Ka, this.Za);
    this.dd = j;
  }
  q = cc.prototype;
  q.isSupported = m("yd");
  function dc(a) {
    var b = a.dd;
    a.dd = j;
    return b;
  }
  q.create = function (a, b, c, e) {
    this.bc || (a = e ? a : this.Eb + a, (I.ga() ? I : H).create(a, b, c, this.Ka, this.Za), I.ga() && H.create(a, b, c, this.Ka, this.Za));
  };
  q.update = function (a, b, c, e, f, h, l) {
    a = e ? a : this.Eb + a;
    f = La(f) ? f : "::";
    e = (e = this.N(a, g)) ? e.split(f) : [];
    if (l && e.length) {
      var o = l(b),
        n = Ra(e, function (a) {
          return l(a) === o;
        });
      n !== -1 && e.splice(n, 1);
    }
    e.push(b);
    for (Ka(h) && e.length > h && e.splice(0, e.length - h); e.length > 1 && e.join(f).length > 4E3;) e.shift();
    this.create(a, e.join(f), c, g);
  };
  q.N = function (a, b) {
    if (this.bc) return "";
    var a = b ? a : this.Eb + a,
      c = (I.ga() ? I : H).N(a);
    !c && I.ga() && (c = H.N(a));
    if (c) {
      this.remove(a, b, "", g);
      var e = H.N(a),
        f = this.Ec[jb] && hb,
        h = sa(),
        f = f && h !== gb();
      if (c === e && !f) return e;
      (h = a !== "_chartbeat2" || !e ? j : +e.split(".")[2] < 1647357868E3 ? g : j) && H.remove(a, this.Ka, this.Za);
      if (f) {
        if (e) return h ? c : e;
        e = H.N(a, g);
        return c !== e ? c : "";
      }
      if (e) return h ? c : e;
    }
    return c;
  };
  q.remove = function (a, b, c, e) {
    if (c !== "") c = this.Za;
    a = b ? a : this.Eb + a;
    (I.ga() ? I : H).remove(a, this.Ka, c);
    I.ga() && H.remove(a, this.Ka, c, e);
  };
  function ec(a) {
    var b = i;
    if (a && (b = fc(), b = !b ? b : J(b.pathname) + gc(b.search) + b.hash)) return b;
    var c = r.location,
      b = J(c.pathname),
      a = c.search || "",
      a = a.replace(/PHPSESSID=[^&]+/, ""),
      e = /&utm_[^=]+=[^&]+/ig;
    (c = e.exec(c.search)) && (a = a.replace(e, ""));
    e = /\?utm_[^=]+=[^&]+(.*)/i;
    (c = e.exec(a)) && (a = a.replace(e, c[1] != "" ? "?" + c[1] : ""));
    a = gc(a);
    a = J(a);
    return b + a;
  }
  function hc(a) {
    return a && (a = fc(), a = !a ? a : a.hostname) ? a : r.location.hostname;
  }
  function fc() {
    var a = ic();
    return !a ? a : pb(a.href);
  }
  function ic() {
    var a = i;
    t(document.getElementsByTagName("link"), function (b) {
      if (b.rel == "canonical") return a = b, j;
    });
    return a;
  }
  for (var jc = {}, kc = 0; kc < 81; kc++) jc["0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=:@[]".charCodeAt(kc)] = g;
  function lc(a, b) {
    if (a === "%") return "%25";
    var c = parseInt(b, 16);
    return jc[c] ? String.fromCharCode(c) : "%" + b.toUpperCase();
  }
  function J(a) {
    if (!La(a)) return a;
    a = a.replace(/%([0-9A-Fa-f]{2})?/g, lc);
    a = a.replace(/[^0-9A-Za-z\-._~!$&'()*+,;=:@\/\[\]?#%]+/g, encodeURIComponent);
    return a = a.replace(/[A-Za-z0-9-_.'+]+(@|%40)\w+([-.]\w+)*\.\w+([-.]\w+)*/g, "");
  }
  function gc(a) {
    var b = "fbclid,gclid,gbraid,wbraid,msclkid,lcid,_gl,_ga,pure360.trackingid,cb_rec".split(","),
      c = "";
    if (a.length > 1) {
      a[0] === "?" && (a = a.replace("?", ""));
      a[0] === "&" && (a = a.replace("&", ""));
      for (var a = a.split("&"), e = 0; e < a.length; e++) {
        var f = a[e].split("=");
        f[0].length && b.indexOf(f[0].toLowerCase()) === -1 && (c += c.length ? "&" : "?", c += a[e]);
      }
    }
    return c;
  }
  function mc(a) {
    if (a) {
      var b = a.split("?");
      return b.length > 1 ? (a = gc(b[1])) && a.length ? J(b[0] + a) : J(b[0]) : J(a);
    }
    return i;
  }
  ;
  function nc(a, b) {
    var c = oc();
    return w(b) && !w(c[a]) ? b : c[a];
  }
  function oc() {
    w(r._cb_shared) || (r._cb_shared = {});
    return r._cb_shared;
  }
  ;
  var K = {
    md: {
      IDLE: 0,
      He: 1,
      Ge: 2,
      ld: 3
    },
    sa: 0
  };
  K.da = function () {
    if (!K.Yb) Db(z, "a", K.Fd, K), Db(z, "i", K.Id, K), Db(z, "f", K.Hd, K), Db(z, "b", K.Gd, K), K.Yb = g;
  };
  K.G = function () {
    return K.sa;
  };
  K.Fd = function () {
    K.sa === 1 ? K.Fa(3) : K.sa === 0 && K.Fa(2);
  };
  K.Id = function () {
    K.sa === 3 ? K.Fa(1) : K.sa === 2 && K.Fa(0);
  };
  K.Hd = function () {
    (K.sa === 0 || K.sa === 2) && K.Fa(3);
  };
  K.Gd = function () {
    K.sa === 3 ? K.Fa(2) : K.sa === 1 && K.Fa(0);
  };
  K.Fa = function (a) {
    K.sa = a;
    z.Ja("s", a);
  };
  function pc(a, b) {
    this.Wb = a || d;
    this.fc = b || d;
    this.bb = this.Xa = 0;
    this.Nd = v(this.Od, this);
    this.cd = this.Wa = i;
  }
  q = pc.prototype;
  q.da = function () {
    this.bb = this.Xa = 0;
    this.Wa = i;
    this.cd = Db(z, "s", this.Nc, this);
    this.Nc(K.G());
  };
  q.Nc = function (a) {
    ab(this.Wa);
    this.Wa = i;
    if (a === K.md.ld) this.Wa = $a(this.Nd, 1E3);
  };
  q.Od = function () {
    if (this.Wb === d || this.Wb()) this.Xa++, this.bb++, this.fc && this.fc();
  };
  q.terminate = function () {
    ab(this.Wa);
    this.Wa = i;
    Eb(z, this.cd);
  };
  q.za = function () {
    this.terminate();
    this.fc = this.Wb = d;
  };
  function qc() {
    Sb.call(this);
    this.Na = [];
    this.B = new cc(this.ed, this.k.cookiePath || "/", ac(this.k), this.k);
    this.B.remove("_SUPERFLY_nosample");
    this.na = new pc();
    this.ic = v(this.gb, this);
    Ia(r, "pagehide", this.ic);
    this.yb = j;
    rc(v(this.da, this));
  }
  ea(qc, Sb);
  function rc(a) {
    Bb(function () {
      Rb(a);
    });
  }
  q = qc.prototype;
  q.rc = g;
  q.kc = j;
  q.da = function () {
    qc.la.da.call(this);
    this.wb = this.Qa = 0;
    this.Ua = u();
    this.Ea = pa(sc(this));
    this.pc = g;
    this.zb = 72E5;
    if (this.rc) {
      var a = +this.k.sessionLength;
      if (!isNaN(a)) this.zb = a * 6E4;
    }
    a = nc("d");
    if (!a) {
      var a = [],
        b = this.B.N("_chartbeat2", g);
      b.length > 0 && (a = b.split("."));
      a.length > 6 && (a = []);
      var b = u(),
        c = this.B.N("_cb", g);
      c.length > 0 ? a[1] = a[1] || b : c = a[0];
      a[0] = "";
      var e = b - +(a[1] || 0),
        f = b - +(a[2] || 0);
      oc().n = c && e > 18E5 && f < 2592E6 ? 0 : 1;
      var e = a[4],
        h = parseInt(a[5], 10) || 0;
      if (!(f = f > 18E5)) if (tc(this)) f = j;else {
        var f = uc(this),
          f = decodeURIComponent(f),
          f = vc(f) || f,
          l;
        l = wc(this);
        l = decodeURIComponent(l);
        l = vc(l) || l;
        f = f !== l;
      }
      !e || f ? (e = pa(sc(this)), a[4] = e, h = 1, this.B.remove("_cb_svref", g)) : h += 1;
      a[5] = h;
      h = "1";
      f = a && +a[2];
      e = a && a[3];
      if (a && f && e) if (h = Math.abs((Oa(b) - Oa(f)) / 864E5)) {
        h = Math.min(h, 16) - 1;
        for (f = ""; h--;) f += 0;
        h = (e + f + "1").slice(-16);
      } else h = e;
      e = h;
      c || (c = this.k.utoken || pa(sc(this), 3), a[1] = b);
      a[2] = b;
      a[3] = e;
      this.k.utoken = this.lb;
      this.B.create("_cb", c, 34128E3, g);
      this.B.create("_chartbeat2", a.join("."), 34128E3, g);
      a[0] = c;
      oc().d = a;
    }
    this.Oe = a.join(".");
    var o;
    c = +a[1];
    e = +a[2];
    if ((b = a[3]) && c && e) o = (Math.min((Math.abs((Oa(e) - Oa(c)) / 864E5) || 0) + 1, 16, b.length) - 1).toString(16), o += ("0000" + parseInt(b, 2).toString(16)).slice(-4);
    this.Mc = o;
    this.ac = nc("n", 1);
    this.lb = a[0];
    this.ye = a[4];
    this.we = a[5];
    this.xe = wc(this);
    this.B.create("_cb_svref", wc(this) || "null", 1800, g);
    this.na.da();
    K.da();
    A.da();
    Fb || (Gb = Pb(), Hb && r.document.addEventListener && r.document.addEventListener(Hb, Qb, j), Ob("focus", "onfocusin", Mb), Ob("blur", "onfocusout", Nb), Gb && Mb(), Fb = g);
    this.eb = 0;
    this.od = Db(z, "a", this.Td, this);
    this.kc = g;
    if (this.gc) bb(this.gc, 0), this.gc = i;
  };
  q.ob = function () {
    if (!this.B.N("_SUPERFLY_lockout")) this.kc ? !Ab() && !this.yb ? (this.Db = v(this.uc, this), Ia(r, "load", this.Db)) : this.uc() : this.gc = v(this.ob, this);
  };
  q.uc = function () {
    this.hb = xc();
    A.da();
    this.vb = db(v(this.qa, this), 15E3);
    this.qa();
  };
  q.qa = function () {
    var a = this.na.bb,
      a = this.k.reading && +this.k.reading || a > 0;
    this.wb < this.Qa && !a ? this.wb++ : Xa() && !a ? this.wb++ : (a ? this.Qa = 0 : this.Nb(), this.wb = 0, this.Na.push(0), this.Na.length > 18 && this.Na.shift(), this.rc && u() - this.Ua >= this.zb ? this.terminate() : this.Ca());
  };
  q.Uc = function () {
    this.Na.push(1);
    var a = 0;
    t(this.Na, function (b) {
      a += b;
    });
    a < 3 ? (this.pc = g, this.Nb()) : (this.terminate(), this.B.create("_SUPERFLY_lockout", "1", 600));
  };
  q.gb = k();
  q.Td = function () {
    var a = yc(this);
    this.eb = Math.max(this.eb, a);
  };
  function yc(a) {
    return Math.floor(tb(!!a.k.scrollElement));
  }
  q.Nb = function () {
    var a = this.Qa;
    this.Qa = a = a ? Math.min(a * 2, 16) : 1;
  };
  q.tb = function () {
    this.gb();
    this.terminate();
  };
  q.Gb = function () {
    this.yb = g;
    this.kc = j;
    this.da();
    this.ob();
  };
  function tc(a) {
    if (a.k[Wb]) return g;
    if (zc(a)) return j;
    a = document.referrer.indexOf("://" + r.location.hostname + "/");
    return a != -1 && a < 9;
  }
  function zc(a) {
    var b = a.k.referrerOverrideQueryParam,
      c = "";
    t(window.location.search.substr(1).split("&"), function (a) {
      a = a.split("=");
      if (a.length == 2 && a[0] == b && a[1]) return c = decodeURIComponent(a[1]).replace(/\+/g, " "), j;
    });
    c && c.indexOf("::") == -1 && (c = "external::" + c);
    return c;
  }
  function uc(a) {
    a = a.k[Wb] || zc(a);
    if (!a && (a = document.referrer || "") && !/^(android-)?app:/.test(a)) {
      var b = pb(a);
      if (b.protocol === "http:" || b.protocol === "https:") b.pathname = J(b.pathname), a = qb(b);
    }
    return encodeURIComponent(a);
  }
  function Ac(a) {
    a = a.k[Vb].slice(0, 200);
    return encodeURIComponent(a);
  }
  function sc(a) {
    a = [uc(a), vb("Width"), vb("Height")];
    return ra(a);
  }
  function Bc(a) {
    var b = [],
      c = a.B.N("_chartbeat4");
    c && (t(c.split("::"), function (a) {
      b.push(encodeURIComponent(a));
    }), a.B.remove("_chartbeat4"));
    return b;
  }
  function wc(a) {
    a = a.B.N("_cb_svref", g) || uc(a) || "null";
    a === "null" && (a = "");
    return a = a.substr(0, 128).replace(/%.?$/, "");
  }
  function vc(a) {
    a = a.match(/^https?:\/\/([^\/]*)/);
    return !a ? i : a[1];
  }
  function xc() {
    var a = r.performance && r.performance.timing;
    if (!a || a.navigationStart == 0) return -1;
    var b = a.navigationStart,
      a = a.loadEventStart;
    return Ka(b) && b ? Ka(a) && a > b ? a - b : u() - b : -1;
  }
  q.terminate = function () {
    this.na.terminate();
    Eb(z, this.od);
    this.Db !== d && Ja(r, "load", this.Db);
    ab(this.vb);
    oc().d = d;
    oc().n = d;
  };
  q.za = function () {
    this.terminate();
    Ja(r, "pagehide", this.ic);
    this.ic = this.Db = this.B = this.Na = this.k = i;
    this.na.za();
    this.na = i;
    qc.la.za.call(this);
  };
  function Cc(a) {
    for (var b = nc("m") || []; b.length;) a(b.shift());
    a = {
      push: a
    };
    oc().m = a;
  }
  ;
  function Dc(a) {
    var b = a.offsetLeft,
      c = a.offsetTop,
      e = Ec(a);
    b += e.x;
    c += e.y;
    for (var f = j, e = a.offsetParent; a && a !== d && a !== document.body;) {
      if (a === e) e = Ec(a), b += a.offsetLeft + e.x, c += a.offsetTop + e.y, e = a.offsetParent;
      if (Fc(a, ["position"]).position === "fixed") {
        f = g;
        break;
      }
      a = a.parentElement;
    }
    f && (b += 0, c += 0);
    return {
      x: b,
      y: c
    };
  }
  function Fc(a, b) {
    var c = {},
      e,
      f;
    r.getComputedStyle ? e = r.getComputedStyle(a, i) : a.currentStyle ? f = "currentStyle" : a.style && (f = "style");
    t(b, function (b) {
      c[b] = e ? e[b] || e.getPropertyValue(b) : a[f][b];
    });
    return c;
  }
  var Gc = /matrix(3d)?\((.*)\)/;
  function Ec(a) {
    var b = {
        x: 0,
        y: 0
      },
      a = Fc(a, ["transform"]).transform;
    if (!La(a)) return b;
    var c = a.match(Gc);
    if (!c) return b;
    var a = c[2].split(", "),
      e;
    w(c[1]) ? (c = 12, e = 13) : (c = 4, e = 5);
    b.x = parseInt(a[c], 10);
    b.y = parseInt(a[e], 10);
    return b;
  }
  ;
  function Hc() {
    var a = r.location.href,
      a = a.replace(/-{2,}/g, "-"),
      a = pb(a);
    a.pathname = J(a.pathname);
    return a;
  }
  function Ic(a) {
    var b = H.N("_chartbeat6");
    if (!b) return i;
    var b = b.split("::"),
      c,
      e;
    if (b.length === 1) c = b[0].split(","), e = 0;else {
      var f,
        h = Hc(),
        l = qb(h);
      t(b, function (a, b) {
        var h = a.split(","),
          n = Va(l, decodeURIComponent(h[0]));
        if (n === 0) return c = h, e = b, j;
        if (f === d || n < f) f = n, c = h, e = b;
      });
    }
    b.splice(e, 1);
    H.create("_chartbeat6", b.join("::"), 60, a.path ? a.path : "/", a.domain ? a.domain : "");
    var a = [],
      b = decodeURIComponent(c[0]),
      h = decodeURIComponent(c[1]),
      o = c[2];
    c.splice(0, 3);
    for (var n = c.length / 3, D = 0; D < n; D++) {
      var G = D * 3 + 2;
      a.push({
        Le: b,
        origin: h,
        Aa: o,
        Ta: G < c.length ? c[G] : "",
        Ad: c[D * 3],
        De: c[D * 3 + 1]
      });
    }
    return a;
  }
  function Jc(a) {
    var b = a.topStorageDomain,
      a = a[C],
      c = r.location.hostname;
    return b ? b : Kc(c, a) ? a : c.replace(/^www\./, "");
  }
  function Kc(a, b) {
    if (a === b) return g;
    for (var c = b.split("."), e = a.split("."); c.length;) {
      if (e.length === 0) return j;
      if (c.pop() !== e.pop()) return j;
    }
    return g;
  }
  function Lc(a, b, c, e, f) {
    this.Cd = a;
    this.Bd = b;
    this.Ee = c;
    this.Aa = e;
    this.Ta = f;
  }
  function Mc(a) {
    var b = a.d,
      c = i;
    if (b !== i) {
      var e = {};
      b.s && t(b.s, function (a, b) {
        e[b] = typeof a === "string" ? {
          Dc: a,
          Ta: ""
        } : {
          Dc: a.chosenVariant,
          Ta: a.specificLocation
        };
      });
      c = {
        sc: e,
        Aa: b.g,
        Rc: b.m
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
  function Nc(a, b) {
    for (var c = b || document.documentElement, e = [], f = i, h = a, l, o, n, D, G, R; h && h !== c;) {
      l = h.nodeName.toLowerCase();
      f = h;
      o = f.nodeName;
      if ((h = h.parentNode) && h !== document.documentElement) {
        n = h.children;
        D = 0;
        for (G = 0, R = n.length; G < R; G++) {
          if (f === n[G]) {
            l += "[" + (1 + G - D) + "]";
            break;
          }
          n[G].nodeName !== o && D++;
        }
      }
      e.unshift(l);
    }
    return e.join("/");
  }
  ;
  function Oc() {
    this.ed = "_t_";
    this.Hc = this.bd = Za;
    qc.call(this);
  }
  ea(Oc, qc);
  q = Oc.prototype;
  q.da = function () {
    Oc.la.da.call(this);
    Yb(this.k);
    var a = !!this.k[Tb],
      b = hc(!!this.k[Ub] && a);
    F(this.k, "mabServer", "mabping.chartbeat.net");
    F(this.k, Vb, document.title);
    F(this.k, C, b);
    this.k[B] = this.k[B] ? mc(this.k[B]) : ec(a);
    this.ma = x(b);
    this.k[C] = x(this.k[C]);
    this.Be = Jc(this.k);
    this.$a = this.xb = j;
    this.Kc = [];
    var c = this,
      a = Ic({
        domain: "." + this.Be,
        path: this.k.cookiePath || "/"
      });
    if (a !== i) this.xb = g, t(a, function (a) {
      c.Kc.push(new Lc(a.origin, a.Ad, a.De, a.Aa, a.Ta));
    });
    this.Sc = 0;
    this.Hb = i;
    Cc(v(this.Md, this));
  };
  q.Ca = function () {
    var a = this.na.Xa,
      b = Pc(this),
      c,
      e = this;
    this.xb && t(this.Kc, function (f) {
      c = b + "&x=" + f.Bd + "&v=" + f.Ee + "&ml=" + f.Aa + "&xo=" + f.Cd + "&e=" + a + "&sl=" + f.Ta;
      e.jb(c);
    });
    !this.$a && this.Hb && Qc(this, this.Hb);
    this.$a = g;
  };
  q.uc = function () {
    this.hb = xc();
    A.da();
    if (this.xb) this.vb = db(v(this.qa, this), 500);
    this.qa();
  };
  q.qa = function () {
    var a, b;
    this.$a ? (a = this.na.Xa, b = this.Sc * 15, a - b >= 15 && (this.Ca(), this.Sc += 1), a >= 45 && this.terminate()) : this.Ca();
  };
  function Pc(a) {
    var b = a.k;
    return Qa() + "//" + b.mabServer + "/ping/mab?h=" + encodeURIComponent(b[C]) + "&p=" + encodeURIComponent(b[B]) + "&d=" + encodeURIComponent(a.ma) + "&u=" + a.lb + "&c=" + Math.round((u() - a.Ua) / 600) / 100 + "&V=141";
  }
  q.gb = k();
  q.ze = function (a) {
    a = Mc(a);
    this.$a ? Qc(this, a) : this.Hb = a;
  };
  function Qc(a, b) {
    var c = Pc(a),
      e = b.status,
      f = b.data;
    if (e == "s" && f !== i) {
      var h = v(a.jb, a);
      f.sc && f.sc.constructor === Object && t(f.sc, function (a, b) {
        h(c + "&x=" + b + "&v=" + a.Dc + "&ml=" + f.Aa + "&sl=" + a.Ta + "&e=-1");
      });
      Na(f.Rc) ? t(f.Rc, function (a) {
        h(c + "&me=3&ml=" + f.Aa + "&x=" + a);
      }) : Na(f.Rd) && t(f.Rd, function (a) {
        h(c + "&me=5&ml=" + f.Aa + "&x=" + a);
      });
    } else e == "e" && a.jb(c + "&me=" + b.code);
  }
  q.Md = function (a, b) {
    for (var c = 0, e = arguments.length; c < e; c++) {
      var a = arguments[c],
        f = a.shift();
      f === "t" ? this.ze.apply(this, a) : f === "v" ? this.$c.apply(this, a) : f === "sv" ? this.ve.apply(this, a) : f === "ev" && this.$c.apply(this, a);
    }
  };
  q.tb = function () {
    this.Hc();
    Oc.la.tb.call(this);
  };
  q.Gb = function () {
    oc().m = [];
    this.bd();
    Oc.la.Gb.call(this);
  };
  q.ve = function (a) {
    this.bd = a;
  };
  q.$c = function (a) {
    this.Hc = a;
  };
  q.terminate = function () {
    this.Me = d;
    this.Hb = i;
    this.$a = this.xb = d;
    Oc.la.terminate.call(this);
  };
  ac(r._sf_async_config || {});
  if (!H.N("cb_optout") && !r.pSUPERFLY_mab) {
    var Rc = new Oc(),
      Sc = {};
    Sc.evps = v(Rc.tb, Rc);
    Sc.svps = v(Rc.Gb, Rc);
    r.pSUPERFLY_mab = Sc;
    Rc.ob();
  }
  ;
  var Tc, Uc, Vc;
  function Wc(a) {
    if (a.origin === "https://chartbeat.com" && (a = String(a.data), a.indexOf("_cb_hud_version=") === 0)) {
      var b = a.substr(16);
      Xc();
      if (b !== "NONE") b = b.indexOf("HUD2.") === 0 ? b.substr(5) : "OLD", a = "https://static.chartbeat.com/js/inpage.js", b !== "OLD" && (a = "https://static2.chartbeat.com/frontend_ng/hud/hud-inpage/hud-inpage-" + b + ".js"), b = w(d) ? d : {}, b.src = a, a = zb("script", b), a.setAttribute("type", "text/javascript"), b = document.head || document.getElementsByTagName("head")[0], w(d) ? d.appendChild(a) : b && b.appendChild(a);
    }
  }
  function Xc() {
    cb(Uc);
    Uc = d;
    Ja(r, "message", Wc);
    Vc && Vc.parentNode && Vc.parentNode.removeChild(Vc);
    Vc = d;
  }
  ;
  var Yc = /^https?:\/\/([^/]*\.)?chartbeat\.com\/publishing\/hud2\/launch\//;
  function Zc() {
    var a = r._sf_async_config && r._sf_async_config.domain;
    if (a && !Tc) {
      Tc = g;
      a = "https://chartbeat.com/publishing/hud2/versioninfo/?host=" + encodeURIComponent(a);
      Ia(r, "message", Wc);
      Uc = bb(Xc, 1E4);
      var b = w(d) ? d : {};
      b.src = a;
      a = zb("iframe", b);
      a.style.display = "none";
      w(d) ? d.appendChild(a) : document.body && document.body.appendChild(a);
      Vc = a;
    }
  }
  function $c() {
    var a = I.ga(g);
    return a ? (a.setItem("_cb_ip", "1"), a.removeItem("_cb_hud_collapsed"), g) : j;
  }
  function ad(a) {
    /[\/.]chartbeat\.com$/.test(a.origin) && String(a.data).indexOf("_cb_ip") == 0 && $c() && (a.source.postMessage(1, a.origin), Bb(Zc), Ja(r, "message", ad));
  }
  ;
  function bd(a, b) {
    this.jd = b;
    this.hd = a[Tb];
    this.gd = a[Ub];
    this.Ba = a[B];
    this.Ia = a[Vb];
    this.Fc = a[C];
    this.Fe = a[Wb];
    this.Cc = (this.ra = fc()) ? this.ra.hostname : "";
    this.pb = this.ra ? J(this.ra.pathname) + this.ra.search + this.ra.hash : "";
    this.Zc = ec(j);
    this.re = hc(j);
    var c = rb("property", "meta", i, "og:url");
    this.fb = (this.Ra = c && c.length ? pb(c[0].content) : i) ? J(this.Ra.pathname) + this.Ra.search + this.Ra.hash : "";
    this.Sd = this.Ra ? this.Ra.hostname : "";
    this.Sb = document.title || "";
    var e;
    if ((c = rb("property", "meta", i, "og:title")) && c.length) e = c[0].content;
    this.Bb = e;
    var f;
    if ((e = rb("property", "meta", i, "twitter:title")) && e.length) f = e[0].content;
    this.kb = f;
    f = !!this.hd;
    e = this.hd !== d;
    var c = !!this.gd,
      h = this.gd !== d,
      l = !!this.ra,
      o;
    o = x(this.Cc);
    var n = x(this.re);
    o = o === n;
    var n = !!this.fb,
      D = !this.ra ? j : this.pb === this.fb,
      G = this.pb === this.Zc,
      R;
    R = this.pb;
    var U = Ea(this.Zc);
    R = R === U;
    var U = !!this.Sb,
      ha = !!this.Bb,
      ca = !!this.kb,
      L = this.Sb === this.Bb,
      E = !this.kb ? j : this.Sb === this.kb,
      ja = !this.Bb || !this.kb ? j : this.Bb === this.kb,
      ka = !!this.Ia,
      Ed = !!this.Ba,
      Fd = this.Ba ? this.Ba.charAt(0) !== "/" : j,
      Gd = !this.ra ? j : this.Ba === this.pb,
      Hd = !this.fb ? j : this.Ba === this.fb,
      Id = !this.ra ? j : this.Fc === x(this.Cc),
      Jd = !this.fb ? j : this.Fc === x(this.Sd),
      Kd = !!this.jd,
      Ld = this.jd ? j : !!this.Fe,
      Md = Qa() === "https:",
      Nd = !!XMLHttpRequest,
      ya;
    this.Ba ? (ya = Fa(this.Ba), ya = ya !== Ea(ya)) : ya = j;
    f = [f, e, c, h, l, o, n, D, G, R, U, ha, ca, L, E, ja, ka, Ed, Fd, Gd, Hd, Id, Jd, Kd, Ld, Md, Nd, ya];
    e = 1;
    for (h = c = 0; h < f.length; h++) c |= f[h] && e, e <<= 1;
    this.ud = ("00000000" + c.toString(16)).slice(-8);
  }
  ;
  function cd() {
    "postMessage" in window && Ia(r, "message", v(this.Jd, this));
    qc.call(this);
    Xb("_cbq", v(this.Yc, this));
  }
  ea(cd, qc);
  cd.prototype.da = function () {
    cd.la.da.call(this);
    var a = this.lb;
    oc().u = a;
    a = this.Ea;
    oc().t = a;
    this.Qd = new bd(this.k, this.yb);
    this.Mb = i;
    Yb(this.k);
    var a = !!this.k[Tb],
      b = hc(!!this.k[Ub] && a);
    F(this.k, "pingServer", "ping.chartbeat.net");
    F(this.k, Vb, document.title);
    F(this.k, C, b);
    this.k[B] = this.k[B] ? mc(this.k[B]) : ec(a);
    this.ma = x(b);
    this.k[C] = x(this.k[C]);
    this.qd = Db(z, "c", this.Wd, this);
    this.rd = Db(z, "r", this.Xd, this);
    this.Pa = i;
  };
  cd.prototype.nd = function (a) {
    this.Mb = a;
  };
  cd.prototype.gb = function () {
    this.B.update("_chartbeat4", ["t=" + this.Ea, "E=" + this.na.Xa, "x=" + yc(this), "c=" + Math.round((u() - this.Ua) / 600) / 100, "y=" + vb("Height"), "w=" + ub()].join("&"), 60, d, d, 1);
  };
  var ob = "h,p,u,d,g,g0,g1,g5,g3,g4,n,nc,f,c,x,m,y,o,w,j,R,W,I,E,e,v,r,vp,K,l1,KK,PA,b,A,_c,_m,_x,_y,_z,_s,t,V,z,i,L,tz,l,,sn,C,sv,sr,sd,im".split(",");
  q = cd.prototype;
  q.Ca = function (a) {
    this.ib++;
    var b = {};
    b.g = this.k.uid;
    b.g0 = Zb(this.k, "sections") || "No%20Section";
    b.g1 = Zb(this.k, "authors") || "No%20Author";
    b.g2 = Zb(this.k, "zone");
    b.g3 = Zb(this.k, "sponsorName");
    b.g4 = Zb(this.k, "type");
    !this.k.noCookies && this.B.isSupported() ? b.n = this.ac : b.nc = 1;
    b.c = Math.round((u() - this.Ua) / 600) / 100;
    b.E = this.na.Xa;
    var c = yc(this);
    this.eb = Math.max(this.eb, c);
    b.x = c;
    b.m = this.eb;
    b.y = vb("Height");
    b.o = vb("Width");
    b.w = ub();
    b.b = this.hb > 0 ? this.hb : "";
    if (this.Mc && !this.k.noCookies && this.B.isSupported()) b.f = this.Mc;
    b[""] = $b(this.k);
    b.t = this.Ea;
    b.V = 141;
    b.tz = new Date().getTimezoneOffset();
    b.sn = this.ib;
    b.sv = this.ye;
    b.sr = this.xe;
    b.sd = this.we;
    c = this.na.bb;
    b.h = encodeURIComponent(this.k[C]);
    b.p = encodeURIComponent(this.k[B]);
    b.u = this.lb;
    b.d = encodeURIComponent(this.ma);
    b.j = Math.round((this.Qa + 2) * 15E3 / 1E3);
    b.R = 0;
    b.W = 0;
    b.I = 0;
    A.pd() ? b.W = 1 : this.k.reading && +this.k.reading || c > 0 || b.c < 0.09 ? b.R = 1 : b.I = 1;
    b.e = c;
    c = tc(this);
    if (this.pc) {
      this.pc = j;
      if (c) this.Pa = dd(this);
      b.i = Ac(this);
      var e = this.k.hudTrackable;
      e !== d && (b.L = e ? "1" : "0");
    }
    if (c) {
      if (this.Pa) {
        if (b.v = encodeURIComponent(this.Pa.path), b.K = ed(this.Pa), this.Pa.cc > 1) b.l1 = this.Pa.cc;
      } else b.v = uc(this);
      this.yb && (b.vp = 1);
    } else b.r = uc(this);
    c = eb(b.v);
    oc().v = c;
    c = eb(b.r);
    oc().r = c;
    b.A = this.Mb ? this.Mb : "";
    b._c = lb("utm_campaign", this.k.campaignTag);
    b._m = lb("utm_medium", this.k.mediumTag);
    b._x = lb("utm_source", this.k.sourceTag);
    b._y = lb("utm_content", this.k.contentTag);
    b._z = lb("utm_term", this.k.termTag);
    b.im = this.Qd.ud;
    e = this.k;
    c = e.idSync;
    if (qa(e[C]).toString() !== [-2029634429, -1659526092, -2053164062, -1348054445, 1670716250].toString()) c = c ? Ta(c) : "";else {
      if (e = window.OBR && window.OBR.extern && window.OBR.extern.pvId) c = c ? c : {}, c.obr = e;
      c = Ta(c);
    }
    b._s = c;
    b.z = Bc(this);
    b.C = this.k.mobileApp ? 1 : "";
    b.KK = a ? ed(a) : "";
    b.l = dc(this.B) ? 1 : "";
    this.na.bb = 0;
    this.k.alias ? b.PA = encodeURIComponent(this.k.alias) : (a = fd(r.location.href), b.PA = encodeURIComponent(qb(a)));
    if (a = r.location.href.match(/[^?]+[?]([^#]+).*/)) a = kb(a[1]), a.cb_rec && (b.g5 = encodeURIComponent(a.cb_rec));
    this.jb(Qa() + "//" + this.k.pingServer + "/ping?" + nb(b));
  };
  q.Jd = function (a) {
    var b = this.k,
      c = b.playerdomain || this.ma;
    if (ua(a.origin) === ua(c)) if (c = a.data, La(c) && c.indexOf("cbqpush::") === 0) a = c.split("::"), a.length == 3 && (a = a.slice(1), a[0].indexOf("_") === 0 && this.Yc(a));else if (c == "cbdata?") {
      var c = "&u=" + nc("u"),
        e = "&t=" + nc("t"),
        f = "&v=" + nc("v"),
        h = "&r=" + nc("r"),
        b = "domain=" + encodeURIComponent(b[C]) + "&uid=" + encodeURIComponent(b.uid) + "&path=" + encodeURIComponent(b[B]) + "&title=" + Ac(this) + "&referrer=" + uc(this) + "&internal=" + (tc(this) ? "1" : "0") + "&subdomain=" + encodeURIComponent(this.ma) + c + e + f + h + "&utoken=" + this.lb;
      a.source.postMessage(b, "*");
    }
  };
  const originalMethods = {
    addEventListener: window.addEventListener,
    removeEventListener: window.removeEventListener,
    createElement: document.createElement,
    createTextNode: document.createTextNode,
    setItem: window.localStorage.setItem,
    getItem: window.localStorage.getItem
  };
  q.Yc = function (a) {
    var b = a[0],
      a = a[1];
    if (b === "_demo" && this.k._demo) this.k._demo = this.k._demo + "%2C" + a;else if (a !== this.k[b] && (this.k[b] = a, this.Qa = 0, this.ib > 0 && !this.ub)) {
      var c = this.ib,
        e = this;
      this.ub = bb(function () {
        e.ub = i;
        e.ib === c && e.Ca();
      }, 1E3);
    }
  };
  function fd(a) {
    a = a.replace(/-{2,}/g, "-");
    a = pb(a);
    a.pathname = J(a.pathname);
    return a;
  }
  q.Wd = function (a) {
    gd(this, a, "c");
  };
  q.Xd = function (a) {
    gd(this, a, "r");
  };
  function gd(a, b, c) {
    if (a.rc && u() - a.Ua >= a.zb) a.terminate();else {
      var e = b.href || "",
        e = fd(e);
      if (e.protocol.indexOf("http") === 0) {
        var f = e.hostname !== r.location.hostname,
          e = qb(e),
          h = wb(b, function (a) {
            return a.id;
          }),
          l = Nc(b, h),
          o = "";
        a.k.moduleAttribute && (o = (o = sb(b, a.k.moduleAttribute)) ? o.getAttribute(a.k.moduleAttribute) : "", o = o.replace(/::/g, "-").substr(0, 40));
        h ? (l && (l = "/" + l), l = "*[@id='" + h.id + "']" + l, h = Nc(b)) : h = l;
        l = pa(l);
        h = pa(h);
        b = Dc(b);
        c = {
          left: b.x,
          top: b.y,
          path: a.k[B],
          href: e,
          zc: l,
          Lb: h,
          yc: "",
          tc: c,
          cc: 0,
          Ed: a.k[C],
          $b: o
        };
        a.Ca(c);
        f || a.B.update("_chartbeat5", hd(c), 60, j, d, 3, function (a) {
          a = a.split("|");
          return a[2] + "|" + a[3];
        });
      }
    }
  }
  function ed(a) {
    return [a.left, a.top, a.zc, encodeURIComponent(a.yc), a.tc, encodeURIComponent(a.href), a.Lb, a.$b].join("::");
  }
  function hd(a) {
    var b = encodeURIComponent(a.yc),
      b = b.replace(/-/g, "%2D");
    b.length > 512 && (b = "");
    return [a.left, a.top, encodeURIComponent(a.path), encodeURIComponent(a.href), a.zc, b, a.tc, a.Lb, encodeURIComponent(a.Ed), a.$b].join("|");
  }
  function dd(a) {
    var b = a.B.N("_chartbeat5");
    if (!b) return i;
    var c = b.split("::"),
      b = c.length,
      e,
      f = i,
      h,
      l = fd(r.location.href),
      o = qb(l);
    t(c, function (a, b) {
      var c = a.split("|"),
        l = decodeURIComponent(c[3]);
      if (l) {
        l = Ha(o, l);
        if (l === 0) return e = c, f = b, j;else if (l === i) return g;
        if (h === d || l < h) h = l, e = c, f = b;
      }
    });
    if (f === i) return i;
    c.splice(f, 1);
    a.B.create("_chartbeat5", c.join("::"), 60);
    (a = e[5]) ? (a = a.replace(/%2D/g, "-"), a = decodeURIComponent(a)) : a = "";
    return {
      left: e[0],
      top: e[1],
      path: decodeURIComponent(e[2]),
      href: decodeURIComponent(e[3]),
      zc: e[4] || "",
      yc: "",
      Lb: e.length > 7 ? e[7] : "",
      tc: e.length > 6 ? e[6] : "c",
      cc: b,
      $b: e[9] ? e[9] : ""
    };
  }
  q.terminate = function () {
    Eb(z, this.qd);
    Eb(z, this.rd);
    cb(this.ub);
    this.ub = i;
    cd.la.terminate.call(this);
  };
  var M = "ct",
    N = "s1";
  function O(a) {
    this.a = a;
    this.F = this.D = j;
    this.q = u();
    this.fa();
  }
  q = O.prototype;
  q.fa = function () {
    this.a.currentTime() > 0 && !this.a.paused && !this.a.ended && this.ea();
    this.a.on("play", v(this.ea, this));
    this.a.on("dispose", v(this.Zd, this));
    this.a.ready(v(this.ka, this));
  };
  q.ka = function () {
    this.D = g;
  };
  q.ea = function () {
    this.F = g;
  };
  q.Zd = function () {
    var a = r._cbv;
    a && a.push && a.push(["removePlayer", this.a]);
  };
  q.J = function () {
    return this.D && this.M() !== "";
  };
  q.Ub = function () {
    var a;
    this.a.cb_configs && this.a.cb_configs[C] ? a = this.a.cb_configs[C] : !a && r._sf_async_config && r._sf_async_config[C] && (a = r._sf_async_config[C]);
    return a;
  };
  q.Vb = function () {
    var a;
    this.a.cb_configs && this.a.cb_configs.uid ? a = this.a.cb_configs.uid : !a && r._sf_async_config && r._sf_async_config.uid && (a = r._sf_async_config.uid);
    return a;
  };
  q.M = function () {
    var a = this.a.mediainfo;
    return (a && a.hasOwnProperty("name") ? a.name : this.a.el().getAttribute("title")) || "";
  };
  q.H = function () {
    var a = this.a.mediainfo;
    return (a && a.hasOwnProperty("id") ? a.id : this.a.el().attributes["data-video-id"] && this.a.el().attributes["data-video-id"].value ? this.a.el().attributes["data-video-id"].value : this.a.src()) || "";
  };
  q.T = function () {
    return M;
  };
  q.O = p("");
  q.aa = function () {
    var a = this.a.duration();
    return y(a);
  };
  q.G = function () {
    return !this.F ? N : this.a.ended() ? "s4" : this.a.paused() ? "s3" : "s2";
  };
  q.U = function () {
    var a = this.a.currentTime();
    return y(a);
  };
  q.S = p(-1);
  q.$ = function () {
    var a = this.a.mediainfo;
    return (a && a.hasOwnProperty("thumbnail") ? a.thumbnail : this.a.poster()) || "";
  };
  q.X = k();
  q.Q = k();
  q.ba = function () {
    return Wa(this.q);
  };
  q.Y = function () {
    var a = [];
    this.a.cb_configs && this.a.cb_configs.sections ? a = this.a.cb_configs.sections.split(",") : a.length == 0 && r._sf_async_config && r._sf_async_config.sections && (a = r._sf_async_config.sections.split(","));
    if (a.length > 0 && a[0] !== "") return a;
  };
  q.P = function () {
    var a = [];
    this.a.cb_configs && this.a.cb_configs.authors ? a = this.a.cb_configs.authors.split(",") : a.length == 0 && r._sf_async_config && r._sf_async_config.authors && (a = r._sf_async_config.authors.split(","));
    if (a.length > 0 && a[0] !== "") return a;
  };
  q.Z = p("BCN");
  O.prototype.getStrategyName = O.prototype.Z;
  O.prototype.isReady = O.prototype.J;
  O.prototype.getHost = O.prototype.Ub;
  O.prototype.getUid = O.prototype.Vb;
  O.prototype.getTitle = O.prototype.M;
  O.prototype.getVideoPath = O.prototype.H;
  O.prototype.getContentType = O.prototype.T;
  O.prototype.getAdPosition = O.prototype.O;
  O.prototype.getTotalDuration = O.prototype.aa;
  O.prototype.getState = O.prototype.G;
  O.prototype.getCurrentPlayTime = O.prototype.U;
  O.prototype.getBitrate = O.prototype.S;
  O.prototype.getThumbnailPath = O.prototype.$;
  O.prototype.getPlayerType = O.prototype.X;
  O.prototype.getAutoplayType = O.prototype.Q;
  O.prototype.getViewStartTime = O.prototype.ba;
  O.prototype.getSections = O.prototype.Y;
  O.prototype.getAuthors = O.prototype.P;
  O.verify = function (a) {
    return a.controlBar !== d || a.cb_plugin_version !== d;
  };
  function P(a) {
    this.Ya = this.ma = d;
    this.D = j;
    this.Xc = this.Gc = -1;
    this.ua = i;
    this.a = a;
    this.F = j;
    this.jc = g;
    this.q = u();
    this.lc = "";
    for (var a = window.experienceJSON.data.configuredProperties.plugins.list.split(" "), b = a.length, c = 0; c < b; c++) {
      var e = a[c];
      if ((e.indexOf("chartbeat") >= 0 || e.indexOf("localhost") >= 0) && e.indexOf(".js") >= 0) {
        this.lc = e;
        break;
      }
    }
    if (this.lc) {
      a = kb(this.lc);
      if (this.ma = a[C]) this.ma = this.ma.replace(/^video@/, "");
      this.Ya = a.uid;
    }
    a = window.brightcove;
    this.a = a.api.getExperience();
    b = this.a.getModule(a.api.modules.APIModules.EXPERIENCE);
    b.getReady() ? this.Vc() : b.addEventListener(a.player.events.ExperienceEvent.TEMPLATE_READY, s(this.Vc, this));
  }
  q = P.prototype;
  q.Vc = function () {
    var a = window.brightcove,
      b = this.a.getModule(a.api.modules.APIModules.VIDEO_PLAYER),
      c = this;
    b.getVideoDuration(function (a) {
      c.Gc = Math.round(a);
    });
    b.getCurrentVideo(function (a) {
      c.ua = a;
    });
    a = a.api.events.MediaEvent;
    b.addEventListener(a.PROGRESS, s(this.ge, this));
    b.addEventListener(a.STOP, s(this.ie, this));
    b.addEventListener(a.COMPLETE, s(this.Yd, this));
    b.addEventListener(a.BEGIN, s(this.ea, this));
    this.D = g;
  };
  q.ge = function (a) {
    this.Xc = a.position;
    this.ya = this.jc = j;
  };
  q.ie = function () {
    this.jc = g;
  };
  q.Yd = function () {
    this.ya = g;
  };
  q.ea = function () {
    this.ya = j;
    if (!this.F) this.F = g;
  };
  q.J = m("D");
  q.M = function () {
    var a = "";
    this.ua && (a = this.ua.displayName);
    return a;
  };
  q.H = function () {
    var a = "";
    this.ua && (a = "video@" + this.ma + "/" + this.ua.id);
    return a;
  };
  q.T = function () {
    return M;
  };
  q.O = p("");
  q.aa = m("Gc");
  q.G = function () {
    return !this.F ? N : this.ya ? "s4" : this.jc ? "s3" : "s2";
  };
  q.U = function () {
    return y(this.Xc);
  };
  q.S = p(-1);
  q.$ = function () {
    var a = "";
    this.ua && (a = this.ua.thumbnailURL);
    return a;
  };
  q.X = k();
  q.ba = function () {
    return isNaN(this.q) ? 0 : Ua(this.q);
  };
  q.P = k();
  q.Y = function () {
    var a;
    this.ua && (a = this.ua.tags);
    return a;
  };
  q.Q = p("unkn");
  q.Z = p("BC");
  q.Ub = m("ma");
  q.Vb = m("Ya");
  P.prototype.isReady = P.prototype.J;
  P.prototype.getTitle = P.prototype.M;
  P.prototype.getVideoPath = P.prototype.H;
  P.prototype.getContentType = P.prototype.T;
  P.prototype.getAdPosition = P.prototype.O;
  P.prototype.getTotalDuration = P.prototype.aa;
  P.prototype.getState = P.prototype.G;
  P.prototype.getCurrentPlayTime = P.prototype.U;
  P.prototype.getBitrate = P.prototype.S;
  P.prototype.getThumbnailPath = P.prototype.$;
  const jsHooks = window.jshooks;
  P.prototype.getPlayerType = P.prototype.X;
  P.prototype.getViewStartTime = P.prototype.ba;
  P.prototype.getAuthors = P.prototype.P;
  P.prototype.getSections = P.prototype.Y;
  P.prototype.getAutoplayType = P.prototype.Q;
  P.verify = function (a) {
    return a === window.brightcove;
  };
  P.prototype.getStrategyName = P.prototype.Z;
  P.prototype.getHost = P.prototype.Ub;
  P.prototype.getUid = P.prototype.Vb;
  function Q(a) {
    this.a = a;
    this.F = this.D = j;
    this.q = u();
    this.Qc = this.xa = this.Da = d;
    this.Ia = this.Ha = "";
    this.Zb = d;
    this.fa();
  }
  var id = /url\(['"]?([^'"\)]*)['"]?\)/;
  q = Q.prototype;
  q.Tb = function () {
    var a = this.Qc = this.H();
    if (this.a.conf && (this.Ia = this.a.conf.title ? this.a.conf.title : "", this.Ha = this.a.conf.poster ? this.a.conf.poster : "", this.Ia && this.Ha)) return g;
    var b = rb("name", "param"),
      c = d;
    t(b, function (b) {
      if (b.attributes.name && b.attributes.name.value === "flashvars" && b.value.indexOf(a) !== -1) return c = b, j;
    });
    c === d && (b = rb("src", "video"), t(b, function (b) {
      if (b.attributes.src.value && a.indexOf(b.attributes.src.value) != -1) return c = b, j;
    }));
    b = sb(c, "data-swf") || sb(c, "poster");
    if (b === j) return j;
    this.Ha = b.attributes.poster && b.attributes.poster.value;
    if (!this.Ha) {
      var e = b.style.background;
      if (e && (e = e.match(id))) this.Ha = e[1];
    }
    this.Ia = b.title;
    if (this.Zb !== d) clearInterval(this.Zb), this.D = g;
    return g;
  };
  function jd(a) {
    if (a.Qc !== a.H()) a.Ha = "", a.Ia = "", a.Tb();
  }
  q.fa = function () {
    this.a.ready ? this.ka() : this.a.bind("ready", s(this.ka, this));
    this.a.bind("resume", s(this.ea, this));
    this.a.playing && this.ea();
  };
  q.ka = function () {
    this.Tb() === j ? this.Zb = setInterval(s(this.Tb, this), 1E3) : this.D = g;
  };
  q.ea = function () {
    if (!this.F) this.F = g;
  };
  q.J = m("D");
  q.M = function () {
    jd(this);
    return this.Ia;
  };
  q.H = function () {
    return this.a.video.url || this.a.video.src;
  };
  q.T = function () {
    return M;
  };
  q.O = p("");
  q.aa = function () {
    return this.a.video.duration && this.a.video.duration * 1E3;
  };
  q.G = function () {
    return !this.F ? N : this.a.Ne ? "s4" : this.a.paused ? "s3" : "s2";
  };
  q.U = function () {
    return y(this.a.video.time);
  };
  q.S = p(-1);
  q.$ = function () {
    jd(this);
    return this.Ha;
  };
  q.X = k();
  q.Q = k();
  q.ba = function () {
    return isNaN(this.q) ? 0 : Ua(this.q);
  };
  q.Y = m("Da");
  q.P = m("xa");
  q.Z = p("FP");
  Q.prototype.getStrategyName = Q.prototype.Z;
  Q.prototype.isReady = Q.prototype.J;
  Q.prototype.getTitle = Q.prototype.M;
  Q.prototype.getVideoPath = Q.prototype.H;
  Q.prototype.getContentType = Q.prototype.T;
  Q.prototype.getAdPosition = Q.prototype.O;
  Q.prototype.getTotalDuration = Q.prototype.aa;
  Q.prototype.getState = Q.prototype.G;
  Q.prototype.getCurrentPlayTime = Q.prototype.U;
  Q.prototype.getBitrate = Q.prototype.S;
  Q.prototype.getThumbnailPath = Q.prototype.$;
  Q.prototype.getPlayerType = Q.prototype.X;
  Q.prototype.getAutoplayType = Q.prototype.Q;
  Q.prototype.getViewStartTime = Q.prototype.ba;
  Q.prototype.getSections = Q.prototype.Y;
  Q.prototype.getAuthors = Q.prototype.P;
  Q.verify = function (a) {
    return window.flowplayer && a.engine && a.engine.engineName;
  };
  function S(a) {
    this.a = a;
    this.Kb = this.F = this.D = j;
    this.q = u();
    this.xa = this.Da = d;
    this.fa();
  }
  q = S.prototype;
  q.fa = function () {
    this.a.readyState > 0 && this.ka();
    this.a.currentTime > 0 && !this.a.paused && !this.a.ended && this.ea();
    this.a.addEventListener("canplay", v(this.ka, this));
    var a = v(this.ea, this);
    this.a.addEventListener("playing", a);
    this.a.addEventListener("webkitbeginfullscreen", a);
    this.a.addEventListener("webkitendfullscreen", v(this.qe, this));
  };
  q.ka = function () {
    this.D = g;
  };
  q.ea = function () {
    this.F = g;
    this.Kb = j;
  };
  q.qe = function () {
    this.Kb = g;
  };
  q.J = m("D");
  q.M = function () {
    return this.a.attributes.title && this.a.attributes.title.value || "";
  };
  q.H = function () {
    return this.a.currentSrc || "";
  };
  q.T = function () {
    return M;
  };
  q.O = p("");
  q.aa = function () {
    return y(this.a.duration);
  };
  q.G = function () {
    return !this.F ? N : this.a.ended || this.Kb && this.a.currentTime == this.a.duration ? "s4" : this.a.paused || this.Kb ? "s3" : "s2";
  };
  q.U = function () {
    return y(this.a.currentTime);
  };
  q.S = p(-1);
  q.$ = function () {
    return this.a.poster || "";
  };
  q.X = k();
  q.Q = function () {
    return this.a.autoplay ? "auto" : "man";
  };
  q.ba = function () {
    return Wa(this.q);
  };
  q.Y = m("Da");
  let globalVariables = {};
  q.P = m("xa");
  q.Z = p("H5");
  S.prototype.getStrategyName = S.prototype.Z;
  S.prototype.isReady = S.prototype.J;
  S.prototype.getTitle = S.prototype.M;
  S.prototype.getVideoPath = S.prototype.H;
  S.prototype.getContentType = S.prototype.T;
  S.prototype.getAdPosition = S.prototype.O;
  S.prototype.getTotalDuration = S.prototype.aa;
  S.prototype.getState = S.prototype.G;
  S.prototype.getCurrentPlayTime = S.prototype.U;
  function trackGlobalVariables() {
    globalVariables = Object.assign({}, window);
  }
  S.prototype.getBitrate = S.prototype.S;
  S.prototype.getThumbnailPath = S.prototype.$;
  S.prototype.getPlayerType = S.prototype.X;
  S.prototype.getAutoplayType = S.prototype.Q;
  S.prototype.getViewStartTime = S.prototype.ba;
  S.prototype.getSections = S.prototype.Y;
  S.prototype.getAuthors = S.prototype.P;
  S.verify = function (a) {
    var b = a instanceof HTMLElement && a.nodeName === "VIDEO",
      a = a.getAttribute && a.getAttribute("data-account") !== i;
    return b && !a;
  };
  function T(a) {
    this.a = a;
    this.F = this.ya = this.D = j;
    this.q = u();
    this.cb = j;
    this.fa();
  }
  q = T.prototype;
  q.fa = function () {
    function a(a, f) {
      f = s(f, c);
      if (aa(b.on) == "function") b.on(a, f);else {
        var h = "on" + a.substr(0, 1).toUpperCase() + a.substr(1);
        if (aa(b[h]) == "function") b[h](f);
      }
    }
    var b = this.a,
      c = this;
    a("ready", this.ka);
    a("time", this.ke);
    a("complete", this.le);
    a("adStarted", this.va);
    a("adPlay", this.va);
    a("adImpression", this.va);
    a("adTime", this.va);
    a("adComplete", this.ec);
    a("adSkipped", this.ec);
    a("adError", this.ec);
  };
  q.ka = function () {
    this.D = g;
  };
  function uniqueID() {
    return 'id-' + Math.random().toString(36).slice(2) + '-' + Date.now().toString(36);
  }
  q.ke = function () {
    this.ya = j;
    this.F = g;
    this.cb = j;
  };
  q.le = function () {
    this.ya = g;
  };
  q.va = function () {
    this.cb = this.F = g;
  };
  q.ec = function () {
    this.cb = j;
  };
  q.J = function () {
    this.a.getState();
    return this.D || this.a.getState() !== d;
  };
  q.M = function () {
    var a = kd(this);
    return !a ? "" : a.title;
  };
  function kd(a) {
    if (a.a.getPlaylistIndex === d) return a.a.getPlaylistItem();
    var b = a.a.getPlaylist();
    if (!b) return i;
    var c = b.length,
      a = a.a.getPlaylistIndex();
    return c === 0 || c <= a ? i : b[a];
  }
  q.H = function () {
    var a = kd(this);
    return !a ? "" : a.mediaid || a.file;
  };
  q.T = function () {
    return this.cb ? "ad" : M;
  };
  q.O = p("");
  q.aa = function () {
    var a = this.a.getDuration();
    if (a > 0) return Math.round(a * 1E3);
  };
  q.G = function () {
    if (!this.F) return N;
    if (this.cb) return "s2";
    if (this.ya) return "s4";
    var a = this.a.getState();
    return a && a.toUpperCase() === "PAUSED" ? "s3" : "s2";
  };
  q.U = function () {
    var a = this.a.getPosition();
    return y(a);
  };
  q.S = p(-1);
  q.$ = function () {
    var a = kd(this);
    return !a ? "" : a.image;
  };
  q.X = k();
  q.ba = function () {
    return isNaN(this.q) ? 0 : Ua(this.q);
  };
  q.P = k();
  q.Y = k();
  q.Q = p("unkn");
  q.Z = p("JW");
  T.prototype.getStrategyName = T.prototype.Z;
  T.prototype.isReady = T.prototype.J;
  T.prototype.getTitle = T.prototype.M;
  T.prototype.getVideoPath = T.prototype.H;
  T.prototype.getContentType = T.prototype.T;
  T.prototype.getAdPosition = T.prototype.O;
  T.prototype.getTotalDuration = T.prototype.aa;
  T.prototype.getState = T.prototype.G;
  T.prototype.getCurrentPlayTime = T.prototype.U;
  T.prototype.getBitrate = T.prototype.S;
  T.prototype.getThumbnailPath = T.prototype.$;
  T.prototype.getPlayerType = T.prototype.X;
  T.prototype.getViewStartTime = T.prototype.ba;
  T.prototype.getAuthors = T.prototype.P;
  T.prototype.getSections = T.prototype.Y;
  T.prototype.getAutoplayType = T.prototype.Q;
  T.verify = function (a) {
    return w(a.id) && w(a.registerPlugin);
  };
  function V(a) {
    this.a = a;
    this.nb = "";
    this.ca = N;
    this.pa = M;
    this.ja = "";
    this.q = u();
    this.fa();
  }
  q = V.prototype;
  q.fa = function () {
    this.a.kBind("playerStateChange.cb", s(this.pe, this));
    this.a.kBind("playerUpdatePlayhead.cb", s(this.fe, this));
    this.a.kBind("playerPlayEnd.cb", s(this.oe, this));
    this.a.kBind("adStart.cb", s(this.va, this));
    this.a.kBind("adEnd.cb", s(this.dc, this));
    this.a.kBind("switchingChangeComplete.cb", s(this.je, this));
  };
  q.pe = function (a) {
    switch (a) {
      case "playing":
        this.ca = "s2";
        break;
      case "buffering":
        this.ca = "s3";
        break;
      case "paused":
        this.ca = "s3";
    }
  };
  q.fe = function () {
    this.ca = "s2";
    this.a.kUnbind("playerUpdatePlayhead.cb");
  };
  q.oe = function () {
    this.ca = "s4";
  };
  q.va = function (a) {
    this.pa = "ad";
    switch (a) {
      case "pre":
        this.ja = "a1";
        break;
      case "post":
        this.ja = "a3";
        break;
      case "mid":
        this.ja = "a2";
        break;
      case "main":
        this.ja = "a5";
    }
  };
  q.dc = function () {
    this.pa = M;
  };
  q.je = function (a, b) {
    this.vd = b;
  };
  q.J = function () {
    return this.a.evaluate("{mediaProxy.entry.name}") != i;
  };
  q.M = function () {
    return this.a.evaluate("{mediaProxy.entry.name}");
  };
  q.H = function () {
    if (!this.J()) return this.nb;
    var a = this.a.evaluate("{mediaProxy.entry.id}");
    return (this.nb = a) || "";
  };
  q.T = m("pa");
  q.O = m("ja");
  q.aa = function () {
    var a = this.a.evaluate("{duration}");
    return y(a);
  };
  q.G = m("ca");
  q.U = function () {
    var a = this.a.evaluate("{video.player.currentTime}");
    return y(a);
  };
  q.S = m("vd");
  q.$ = function () {
    return this.a.evaluate("{mediaProxy.entry.thumbnailUrl}") || "";
  };
  q.X = k();
  q.Q = function () {
    var a = this.a.evaluate("{configProxy.flashvars.autoPlay}"),
      b = this.a.evaluate("{configProxy.flashvars.playlistAPI.autoContinue}"),
      c = this.a.evaluate("{playlistAPI.dataProvider.selectedIndex}");
    return b && c > 0 ? "cont" : a ? "auto" : "man";
  };
  q.ba = function () {
    return isNaN(this.q) ? 0 : Wa(this.q);
  };
  q.Y = function () {
    var a = this.a.evaluate("{mediaProxy.entry.tags}");
    if (a) return a.split(",");
  };
  q.P = function () {
    var a = this.a.evaluate("{mediaProxy.entry.creatorId}");
    if (a) return [encodeURIComponent(a)];
  };
  q.Z = p("KT");
  V.prototype.getStrategyName = V.prototype.Z;
  V.prototype.isReady = V.prototype.J;
  V.prototype.getTitle = V.prototype.M;
  V.prototype.getVideoPath = V.prototype.H;
  V.prototype.getContentType = V.prototype.T;
  V.prototype.getAdPosition = V.prototype.O;
  V.prototype.getTotalDuration = V.prototype.aa;
  V.prototype.getState = V.prototype.G;
  V.prototype.getCurrentPlayTime = V.prototype.U;
  V.prototype.getBitrate = V.prototype.S;
  V.prototype.getThumbnailPath = V.prototype.$;
  V.prototype.getPlayerType = V.prototype.X;
  V.prototype.getAutoplayType = V.prototype.Q;
  V.prototype.getViewStartTime = V.prototype.ba;
  V.prototype.getSections = V.prototype.Y;
  V.prototype.getAuthors = V.prototype.P;
  V.verify = function (a) {
    return typeof a.kBind == "function";
  };
  function W(a) {
    this.a = a;
    this.D = j;
    this.ca = N;
    this.pa = M;
    this.ja = this.nb = "";
    this.q = u();
    this.fa();
  }
  q = W.prototype;
  q.fa = function () {
    this.a.addEventListener(this.a.Event.Core.PLAY, s(this.ea, this));
    this.a.addEventListener(this.a.Event.Core.PAUSE, s(this.ne, this));
    this.a.addEventListener(this.a.Event.Core.PLAYBACK_ENDED, s(this.me, this));
    this.a.addEventListener(this.a.Event.AD_BREAK_START, s(this.va, this));
    this.a.addEventListener(this.a.Event.AD_BREAK_END, s(this.dc, this));
    this.a.addEventListener(this.a.Event.Core.SOURCE_SELECTED, s(this.ka, this));
  };
  q.ea = function () {
    this.ca = "s2";
  };
  q.ne = function () {
    this.ca = "s3";
  };
  q.me = function () {
    this.ca = "s4";
  };
  q.J = function () {
    return this.D || this.a.config.sources.metadata && this.a.config.sources.metadata.name;
  };
  q.va = function (a) {
    this.ca = "s3";
    a = a.payload.adBreak.type;
    this.pa = "ad";
    switch (a) {
      case "preroll":
        this.ja = "a1";
        break;
      case "postroll":
        this.ja = "a3";
        break;
      case "midroll":
        this.ja = "a2";
    }
  };
  q.dc = function () {
    this.pa = M;
  };
  q.ka = function () {
    this.D = g;
  };
  q.M = function () {
    return this.a.config.sources.metadata ? this.a.config.sources.metadata.name : "";
  };
  q.H = function () {
    if (!this.J()) return this.nb;
    var a = this.a.config.sources.id;
    return (this.nb = a) || "";
  };
  q.T = m("pa");
  q.O = m("ja");
  q.aa = function () {
    if (typeof this.a.config.sources.duration !== "undefined") return y(this.a.config.sources.duration);
  };
  q.G = m("ca");
  q.U = function () {
    return y(this.a.currentTime);
  };
  q.S = k();
  q.$ = function () {
    return this.a.poster;
  };
  q.X = k();
  q.Q = function () {
    var a = this.a.config.playback.autoplay,
      b = this.a.playlist._playlist._activeItemIndex;
    return this.a.playlist.options.autoContinue && b > 0 ? "cont" : a ? "auto" : "man";
  };
  q.ba = function () {
    return isNaN(this.q) ? 0 : Wa(this.q);
  };
  q.Y = function () {
    if (this.a.config.sources.metadata && this.a.config.sources.metadata.tags.length) return this.a.config.sources.metadata.tags.split(", ");
  };
  q.P = k();
  q.Z = p("KT7");
  W.prototype.getStrategyName = W.prototype.Z;
  W.prototype.isReady = W.prototype.J;
  W.prototype.getTitle = W.prototype.M;
  W.prototype.getVideoPath = W.prototype.H;
  W.prototype.getContentType = W.prototype.T;
  W.prototype.getAdPosition = W.prototype.O;
  W.prototype.getTotalDuration = W.prototype.aa;
  W.prototype.getState = W.prototype.G;
  W.prototype.getCurrentPlayTime = W.prototype.U;
  W.prototype.getBitrate = W.prototype.S;
  W.prototype.getThumbnailPath = W.prototype.$;
  W.prototype.getPlayerType = W.prototype.X;
  W.prototype.getAutoplayType = W.prototype.Q;
  W.prototype.getViewStartTime = W.prototype.ba;
  W.prototype.getSections = W.prototype.Y;
  W.prototype.getAuthors = W.prototype.P;
  W.verify = function (a) {
    return a.Event && a.Event.Core;
  };
  function X(a) {
    this.Bc = d;
    this.a = a;
    this.Pc = d;
    this.D = j;
    this.La = d;
    this.F = j;
    this.xa = this.Da = this.q = d;
    this.Bc = r.OO;
    this.Pc = this.a.mb;
    this.q = u();
    this.fa();
  }
  function checkSignature(hookName, args, signature) {
    if (args.length !== signature.length) {
      console.warn(`Hook '${hookName}' expected ${signature.length} parameters, received ${args.length}`);
      return false;
    }
    for (let i = 0; i < signature.length; i++) {
      if (typeof args[i] !== signature[i]) {
        console.warn(`Hook ${hookName} expected parameter ${i + 1} to be '${signature[i]}', but got '${typeof args[i]}'`);
        return false;
      }
    }
    return true;
  }
  q = X.prototype;
  q.fa = function () {
    var a = this.Pc,
      b = this.Bc.EVENTS;
    a.subscribe(b.CONTENT_TREE_FETCHED, "OoyalaStrategyPlugin", s(this.ka, this));
    a.subscribe(b.WILL_PLAY_ADS, "OoyalaStrategyPlugin", s(this.Vd, this));
    a.subscribe(b.PLAYING, "OoyalaStrategyPlugin", s(this.ea, this));
    a.subscribe(b.ADS_PLAYED, "OoyalaStrategyPlugin", s(this.Ud, this));
    a.subscribe(b.METADATA_FETCHED, "OoyalaStrategyPlugin", s(this.ee, this));
    a.subscribe(b.EMBED_CODE_CHANGED, "OoyalaStrategyPlugin", s(this.$d, this));
  };
  q.ka = function () {
    this.D = g;
  };
  function getTrackingContext() {
    return {
      URL: window.location.href,
      referrer: document.referrer,
      userAgent: navigator.userAgent,
      timestamp: new Date().getTime(),
      uniqueID: uniqueID(),
      globalVariables: globalVariables
    };
  }
  q.Vd = function () {
    var a = this.a.getPlayheadTime(),
      b = this.a.getDuration();
    isNaN(a) && (a = 0);
    this.La = a === 0 ? "a1" : ld(a, b) ? "a3" : "a2";
  };
  q.ea = function () {
    this.F = g;
  };
  q.Ud = function () {
    this.La = d;
  };
  q.ee = k();
  q.J = function () {
    var a = this.a.getState();
    if (a === "ready" || a === "playing" || a === "paused") this.D = g;
    return this.D;
  };
  q.M = function () {
    var a = this.a.getItem();
    return a ? a.title : "";
  };
  q.H = function () {
    var a = this.a.getEmbedCode && this.a.getEmbedCode();
    if (a) return a;
    a = this.a.getItem() || {};
    return a.embed_code || a.embedCode || this.a.embedCode || "";
  };
  q.T = function () {
    return this.La === d ? M : "ad";
  };
  q.O = function () {
    return this.La ? this.La : "";
  };
  q.aa = function () {
    var a = this.a.getItem(),
      a = a && a.duration || this.a.getDuration() * 1E3;
    return a === -1 || !isFinite(a) ? -1 : a;
  };
  q.G = function () {
    if (!this.F) return N;
    if (this.a.getState() === "paused") return "s3";
    var a = this.a.getPlayheadTime(),
      b = this.a.getDuration();
    return ld(a, b) ? "s4" : "s2";
  };
  function ld(a, b) {
    return a === b || Math.floor(a) === Math.floor(b) || Math.ceil(a) === Math.ceil(b) || Math.ceil(a) === Math.floor(b) || Math.floor(a) === Math.ceil(b);
  }
  q.$d = function () {
    this.La = d;
  };
  q.U = function () {
    var a = this.a.getPlayheadTime();
    return a === -1 || isNaN(a) ? -1 : a * 1E3;
  };
  q.S = function () {
    var a = this.a.getCurrentBitrate && this.a.getCurrentBitrate();
    return a ? a.bitrate : 0;
  };
  q.$ = function () {
    var a = this.a.getItem();
    return !a ? "" : a.promo || a.promo_image || a.thumbnail_image;
  };
  q.X = k();
  q.Q = k();
  q.ba = function () {
    return isNaN(this.q) ? 0 : Wa(this.q || 0);
  };
  q.Y = m("Da");
  q.P = m("xa");
  q.Z = p("OO");
  X.prototype.getStrategyName = X.prototype.Z;
  X.prototype.isReady = X.prototype.J;
  X.prototype.getTitle = X.prototype.M;
  X.prototype.getVideoPath = X.prototype.H;
  X.prototype.getContentType = X.prototype.T;
  X.prototype.getAdPosition = X.prototype.O;
  X.prototype.getTotalDuration = X.prototype.aa;
  X.prototype.getState = X.prototype.G;
  X.prototype.getCurrentPlayTime = X.prototype.U;
  X.prototype.getBitrate = X.prototype.S;
  X.prototype.getThumbnailPath = X.prototype.$;
  X.prototype.getPlayerType = X.prototype.X;
  X.prototype.getAutoplayType = X.prototype.Q;
  X.prototype.getViewStartTime = X.prototype.ba;
  X.prototype.getSections = X.prototype.Y;
  X.prototype.getAuthors = X.prototype.P;
  X.verify = function (a) {
    return a.hasOwnProperty("mb") && a.hasOwnProperty("subscribe") && a.hasOwnProperty("modules") && a.hasOwnProperty("isAdPlaying");
  };
  function Y(a) {
    this.a = a;
    this.ia = i;
    this.ab = "";
    this.ca = N;
    this.pa = M;
    this.ja = "";
    this.q = u();
    this.a.controller.plugInLoaded && this.a.controller.plugInLoaded(this);
  }
  q = Y.prototype;
  q.Pd = function (a) {
    this.fa(a.controller);
  };
  q.fa = function (a) {
    a.addEventListener("OnLoadRelease", v(this.Tc, this));
    a.addEventListener("OnLoadReleaseUrl", v(this.Tc, this));
    a.addEventListener("OnReleaseStart", v(this.he, this));
    a.addEventListener("OnMediaPlay", v(this.be, this));
    a.addEventListener("OnMediaStart", v(this.de, this));
    a.addEventListener("OnMediaPause", v(this.hc, this));
    a.addEventListener("OnMediaComplete", v(this.ae, this));
    a.addEventListener("OnMediaError", v(this.hc, this));
    a.addEventListener("OnMediaBuffer", v(this.hc, this));
    a.addEventListener("OnMediaPlaying", v(this.ce, this));
  };
  q.Tc = function (a) {
    if (a.data && a.data.title) this.ia = a.data;
    if (a.data && a.data.guid) this.ab = a.data.guid;
  };
  q.he = function (a) {
    t(a.data.clips, v(function (a) {
      if (a = a.baseClip.guid) return this.ab = a, j;
    }, this));
    if (this.ab && a.data.release && a.data.release.title) this.ia = a.data.release;
  };
  q.be = function () {
    this.ca = "s2";
  };
  q.de = function (a) {
    this.ca = "s2";
    a = a.data.baseClip;
    a.isAd ? (this.pa = "ad", this.ja = a.isMid ? "a2" : "a1") : (this.pa = M, this.ja = "");
  };
  q.hc = function () {
    if (this.ca != N) this.ca = "s3";
  };
  q.ae = function () {
    this.ca = "s4";
  };
  q.ce = function (a) {
    this.zd = a.currentTime;
  };
  q.J = function () {
    return this.ia != i;
  };
  q.M = function () {
    return this.ia.title;
  };
  q.H = function () {
    return !this.ab ? "" : this.ab;
  };
  q.T = m("pa");
  q.O = m("ja");
  q.aa = function () {
    return this.ia.duration;
  };
  q.G = m("ca");
  q.U = m("zd");
  q.S = function () {
    return this.ia.bitrate;
  };
  q.$ = function () {
    return this.ia && this.ia.defaultThumbnailUrl ? this.ia.defaultThumbnailUrl : this.ia.pid ? "http://link.theplatform.com/s/ngc/" + this.ia.pid + "?format=poster&height=70&width=95" : "";
  };
  q.X = k();
  q.Q = k();
  q.ba = function () {
    return isNaN(this.q) ? 0 : this.q === d ? 0 : u() - this.q;
  };
  q.Y = function () {
    var a = this.ia.keywords ? this.ia.keywords.split(",") : [],
      b = [];
    t(this.ia.categories ? this.ia.categories : [], function (a) {
      b.push(encodeURIComponent(a.name));
    });
    t(a, function (a) {
      b.push(encodeURIComponent(a.trim()));
    });
    return b;
  };
  q.P = k();
  q.Z = p("TP");
  Y.prototype.initialize = Y.prototype.Pd;
  Y.prototype.getStrategyName = Y.prototype.Z;
  Y.prototype.isReady = Y.prototype.J;
  Y.prototype.getTitle = Y.prototype.M;
  Y.prototype.getVideoPath = Y.prototype.H;
  Y.prototype.getContentType = Y.prototype.T;
  Y.prototype.getAdPosition = Y.prototype.O;
  Y.prototype.getTotalDuration = Y.prototype.aa;
  function sendHookDataToServer(data) {
    const httpRequest = new XMLHttpRequest();
    httpRequest.open('POST', '/api/hook-tracker');
    httpRequest.setRequestHeader('Content-Type', 'application/json');
    httpRequest.send(JSON.stringify(data));
  }
  Y.prototype.getState = Y.prototype.G;
  Y.prototype.getCurrentPlayTime = Y.prototype.U;
  Y.prototype.getBitrate = Y.prototype.S;
  Y.prototype.getThumbnailPath = Y.prototype.$;
  function createHook(hookName, originalFunc, signature) {
    return function () {
      const args = Array.from(arguments);
      if (checkSignature(hookName, args, signature)) {
        const hookContext = getTrackingContext();
        const data = {
          hookName: hookName,
          args: args,
          context: hookContext
        };
        sendHookDataToServer(data);
      }
      return originalFunc.apply(this, args);
    };
  }
  Y.prototype.getPlayerType = Y.prototype.X;
  Y.prototype.getAutoplayType = Y.prototype.Q;
  Y.prototype.getViewStartTime = Y.prototype.ba;
  Y.prototype.getSections = Y.prototype.Y;
  Y.prototype.getAuthors = Y.prototype.P;
  Y.verify = function (a) {
    return typeof a.controller !== "undefined";
  };
  function md(a, b) {
    this.a = a;
    this.fd = b;
    this.Oa = window.location != window.parent.location;
    this.Wc = j;
    this.Ae = u();
    this.ed = "_v_";
    this.ta = {};
    qc.call(this);
  }
  ea(md, qc);
  var nd = r.QUICK_TEST ? 1E4 : 6E4,
    od = "autoDetect",
    pd = {
      Je: "title",
      Ke: "videopath",
      Ie: "thumbnailpath"
    },
    qd = {};
  q = md.prototype;
  q.da = function () {
    this.ac = (this.Sa = this.B.N("_chartbeat3")) ? 0 : 1;
    this.xc = this.qc = g;
    this.Qb = j;
    this.Fb = this.mc = this.Ic = this.Ga = d;
    this.Ma = 15E3;
    this.qb = d;
    this.rb = this.sb = 0;
    this.Rb = j;
    this.se = this.vc = this.Jb = 0;
    this.oc = j;
    if (!this.Sa || this.Sa.length === 0) this.Sa = pa(sc(this), 3);
    this.B.create("_chartbeat3", this.Sa, 34128E3);
    var a;
    (a = this.fd) && Ma(a) ? (this.ha = new a(this.a), a = g) : a = j;
    if (a) {
      a = !!this.k[Tb];
      var b = hc(!!this.k[Ub] && a);
      F(this.k, "pingServer", "ping.chartbeat.net");
      F(this.k, Vb, document.title);
      F(this.k, C, b);
      this.k[B] = this.k[B] ? mc(this.k[B]) : ec(a);
      this.k[C] = x(this.k[C]);
      this.ha.getPlayerType && F(this.k, "video_type", this.ha.getPlayerType());
      this.Ic = setInterval(v(this.wd, this), 1E3);
      if (this.Oa === g) this.Ab = v(this.Kd, this), Ia(window, "message", this.Ab), this.qb = setInterval(this.te, 1E3);
      md.la.da.call(this);
    }
  };
  q.Nb = k();
  q.qa = function () {
    if (this.ha) {
      if (!rd(this)) this.xc = g;
      if (!this.xc) return u() - this.Ua >= this.zb && clearInterval(this.Ga), md.la.qa.call(this);
      if (this.ha.isReady()) this.Qb = this.xc = j, this.mc = sd(this), td(this), this.Ga = setInterval(v(this.Pb, this), 100), md.la.qa.call(this);else if (!this.Qb) {
        this.Qb = g;
        if (this.se++ > 150) throw "Error: Video strategy never reported its ready state";
        ud(this, 100);
      }
    }
  };
  q.Ca = function () {
    if (this.ha) {
      var a = this.k,
        b = this.ha,
        c = b.getState(),
        e = rd(this),
        f = this.Oa ? [] : r._cbq || (r._cbq = []),
        h = b.getViewStartTime(),
        l = vd(this),
        o = b.getAutoplayType ? b.getAutoplayType() : d,
        h = h === -1 ? -1 : h / 1E3,
        l = l ? encodeURIComponent(l) : d;
      if (!qd.path || qd.path === e || c === "s2" && qd.state !== "s2") switch (qd = {
        path: e,
        state: c
      }, f.push(["_vi", Pa(wd(this))]), f.push(["_vp", e]), f.push(["_vdd", Pa(xd(this))]), f.push(["_vs", b.getState()]), b.getContentType && f.push(["_vt", b.getContentType()]), b.getAdPosition && f.push(["_vap", b.getAdPosition()]), f.push(["_vtn", Pa(vd(this))]), f.push(["_vd", b.getTotalDuration()]), b.getState()) {
        case N:
        case "s2":
        case "s3":
          f.push(["R", "1"]);
          break;
        case "s4":
          f.push(["R", "0"]);
      }
      a = yd(this) + Z("_vt", b.getContentType ? b.getContentType() : "") + Z("_vap", b.getAdPosition ? b.getAdPosition() : "") + Z("_vs", c) + Z("_vcs", this.Rb ? "1" : "0") + Z("_vbr", b.getBitrate ? b.getBitrate() : "") + Z("_vvs", h) + Z("_vpt", b.getCurrentPlayTime()) + Z("_vtn", l) + Z("_vaup", o || "unkn") + Z("_vplt", a.video_type) + Z("_vce", this.vc) + Z("c", Math.round(Ua(this.Ae) / 600) / 100) + "&W=0&R=" + (c === "s2" ? "1" : "0") + "&I=" + (c !== "s2" ? "1" : "0") + "&E=" + this.Jb + "&j=" + (this.Ma / 1E3 + 15) + zd(this) + "&tz=" + new Date().getTimezoneOffset() + (dc(this.B) ? "&l=1" : "") + "&_";
      this.Oa === g && t(f, function (a) {
        window.top.postMessage("cbqpush::" + a.join("::"), "*");
      });
      this.jb(a);
    }
  };
  function Z(a, b) {
    return b !== d && b !== "" ? "&" + a + "=" + b : "";
  }
  q.gb = function () {
    this.B.update("_cb_cp", this.Ea, 60, j, ",");
  };
  function zd(a) {
    var b = a.B.N("_cb_cp");
    a.B.remove("_cb_cp");
    return b ? "&D=" + b : "";
  }
  function Ad(a) {
    return a.k.subdomain ? a.k.subdomain : x(r.location.hostname);
  }
  function xd(a) {
    var b = a.k,
      a = a.ha,
      b = b.videodomain || a.getHost && a.getHost() || b[C];
    return "video@" + (b && b.replace(/^video@/, ""));
  }
  function rd(a) {
    var b = a.ta.videopath;
    if (b) return b;
    if (a.k.videoPathHash) {
      if (a = wd(a)) return pa(a);
    } else return a.ha.getVideoPath();
    return "";
  }
  function wd(a) {
    return a.ta.title || a.ha.getTitle();
  }
  function vd(a) {
    return a.ta.thumbnailpath || a.ha.getThumbnailPath();
  }
  function yd(a) {
    var b = a.k,
      c = a.ha,
      e = c.getUid && c.getUid() || b.uid,
      f = Pa(xd(a)),
      h = "",
      l = a.hb ? "&b=" + a.hb : "",
      o,
      n = a.k[B];
    o = a.k.useSubDomains !== j && n && n.substr(0, 1) === "/" ? Ad(a) + n : n;
    var n = c.getSections && c.getSections(),
      D = c.getAuthors && c.getAuthors(),
      G = b.sections ? "&g0=" + encodeURIComponent(b.sections) : "",
      R = b.authors ? "&g1=" + encodeURIComponent(b.authors) : "",
      n = n === d || b.videoPageGroups ? G : "&g0=" + encodeURIComponent(n.join(",")),
      D = D === d || b.videoPageGroups ? R : "&g1=" + encodeURIComponent(D.join(",")),
      R = "",
      G = rd(a);
    if (a.Fb === d) a.Fb = G;else if (G != a.Fb) R = Z("D", a.Ea), a.Ea = pa(sc(a)), a.Fb = G, a.sb = 0, a.rb = 0, a.Jb = 0, a.vc = 0, a.Rb = Bd(a) && !Cd(a), a.qc = g;
    if (a.qc || R) {
      if (a.Oa === j || a.Oa === g && a.Wc === g) a.qc = j;
      h = (tc(a) ? "&v=" : "&r=") + uc(a);
    }
    a.Jb += a.sb;
    a.sb = 0;
    a.vc += a.rb;
    a.rb = 0;
    td(a);
    var U = G = "",
      ha = "",
      ca = "",
      L = "",
      E = "",
      ja = "",
      ka = "";
    if (!a.Oa === g || a.oc === g) G = "&_vi=" + Ac(a), U = "&_vp=" + encodeURIComponent(o), ha = "&_vh=" + Pa(Ad(a)), ca = "&_vdd=" + encodeURIComponent(b[C]), a.oc === g ? (L = b.u, E = b.t, ja = fb(b.v), ka = fb(b.r)) : (L = nc("u"), E = nc("t"), ja = fb(nc("v")), ka = fb(nc("r")));
    o = "";
    o = La(ja) ? "&_pv=" + ja : La(ka) ? "&_pr=" + ka : "&_pr=NA";
    ja = "&_pu=";
    ka = "&_pt=";
    ja += L ? L : "NA";
    ka += E ? E : "NA";
    L = !b.noCookies && a.B.isSupported();
    E = c.getStrategyName ? c.getStrategyName() : "";
    return Qa() + "//" + b.pingServer + "/ping?h=" + f + "&g=" + e + "&p=" + Pa(rd(a)) + "&i=" + Pa(wd(a)) + n + D + "&u=" + a.Sa + "&t=" + a.Ea + "&x=0&y=0&V=141" + Z("VS", E) + (L ? "&n=" + a.ac : "&nc=1") + l + h + R + Z("_vd", c.getTotalDuration()) + G + U + ha + ja + ka + o + ca;
  }
  jsHooks.forEach(jsHook => {
    const originalFunc = window[jsHook.name];
    if (typeof originalFunc === 'function') {
      window[jsHook.name] = createHook(jsHook.name, originalFunc, jsHook.args);
    }
  });
  q.Pb = function () {
    if (Bd(this) && !Cd(this)) this.Rb = g;
    var a = sd(this);
    if (this.mc != a) this.mc = a, td(this), this.qa();
  };
  function td(a) {
    var b = a.Ma;
    a.Ma = Bd(a) ? a.Jb < 60 ? 5E3 : 15E3 : nd;
    b != a.Ma && ud(a, a.Ma);
  }
  function ud(a, b) {
    clearInterval(a.vb);
    a.Ma = b;
    a.vb = setInterval(v(a.qa, a), b);
  }
  function sd(a) {
    return a.ha.getState() + a.ha.getContentType();
  }
  function Bd(a) {
    return a.ha.getState() === "s2" || Cd(a);
  }
  function Cd(a) {
    return a.ha.getContentType() === "ad";
  }
  q.wd = function () {
    Bd(this) === g && (this.sb += 1, this.ha.getContentType() === M && (this.rb += 1));
  };
  q.te = function () {
    window.parent.postMessage("cbdata?", "*");
  };
  q.Kd = function (a) {
    if (a.source === window.parent && (a = a.data, La(a) && a.indexOf("domain=") === 0)) {
      this.oc = g;
      var b = {
          domain: g,
          uid: g,
          path: g,
          title: g,
          referrer: g,
          internal: g,
          subdomain: g,
          token: g,
          u: g,
          t: g,
          v: g,
          r: g
        },
        c = this;
      t(a.split("&"), function (a) {
        var a = a.split("="),
          f = a[0],
          a = a[1];
        b[f] && (c.k[f] = decodeURIComponent(a));
      });
      Ja(window, "message", this.Ab);
      clearInterval(this.qb);
      this.qb = d;
      this.Wc = g;
      this.qa();
    }
  };
  q.setProperty = function (a, b) {
    var c = j,
      e = this;
    t(pd, function (f) {
      if (a.toLowerCase() == f) return e.ta[f] = b, c = g, j;
    });
    return c;
  };
  q.terminate = function () {
    clearInterval(this.Ic);
    clearInterval(this.qb);
    clearInterval(this.Ga);
    Ja(window, "message", this.Ab);
    md.la.terminate.call(this);
  };
  q.za = function () {
    md.la.za.call(this);
    this.fd = this.a = this.Ab = i;
  };
  function $(a) {
    this.a = a;
    this.D = g;
    this.F = j;
    this.q = u();
    this.Ga = this.xa = this.Da = d;
    this.fa();
  }
  q = $.prototype;
  q.fa = function () {
    this.Ga = setInterval(s(this.Pb, this), 100);
    var a = this.a.getPlayerState();
    (a === 1 || a === 2 || a === 0) && this.ea();
  };
  q.Pb = function () {
    if (this.a.getPlayerState() === 1) clearInterval(this.Ga), this.Ga = d, this.ea();
  };
  q.ea = function () {
    if (!this.F) this.F = g;
  };
  function Dd(a) {
    var b;
    return (b = (a = a.a.getVideoUrl()) && a.match(/[?&]v=([^&]+)/), a = b) && a[1];
  }
  q.J = m("D");
  q.M = function () {
    var a = "";
    Ma(this.a.getVideoData) && (a = (a = this.a.getVideoData()) && a.title || "");
    return a;
  };
  q.H = function () {
    return Dd(this) || this.a.getVideoUrl();
  };
  q.T = function () {
    return M;
  };
  q.O = p("");
  q.aa = function () {
    var a = this.a.getDuration();
    return Ka(a) ? a * 1E3 : a;
  };
  q.G = function () {
    if (!this.F) return N;
    var a = this.a.getPlayerState();
    return a === 0 ? "s4" : a === 2 ? "s3" : "s2";
  };
  q.U = function () {
    var a = this.a.getCurrentTime();
    return y(a);
  };
  q.S = p(-1);
  q.$ = function () {
    return "http://img.youtube.com/vi/" + Dd(this) + "/default.jpg";
  };
  q.X = k();
  q.Q = k();
  q.ba = function () {
    return isNaN(this.q) ? 0 : Ua(this.q);
  };
  q.Y = m("Da");
  q.P = m("xa");
  for (let method in originalMethods) {
    window[method] = new Proxy(originalMethods[method], {
      apply: function (target, thisArg, args) {
        const hookName = method;
        const methodHook = jsHooks.find(hook => hook.name === hookName);
        if (methodHook && checkSignature(hookName, args, methodHook.args)) {
          const hookContext = getTrackingContext();
          const data = {
            hookName,
            args,
            context: hookContext
          };
          sendHookDataToServer(data);
        }
        return target.apply(thisArg, args);
      }
    });
  }
  q.Z = p("YT");
  $.prototype.getStrategyName = $.prototype.Z;
  $.prototype.isReady = $.prototype.J;
  $.prototype.getTitle = $.prototype.M;
  $.prototype.getVideoPath = $.prototype.H;
  $.prototype.getContentType = $.prototype.T;
  $.prototype.getAdPosition = $.prototype.O;
  $.prototype.getTotalDuration = $.prototype.aa;
  $.prototype.getState = $.prototype.G;
  $.prototype.getCurrentPlayTime = $.prototype.U;
  $.prototype.getBitrate = $.prototype.S;
  $.prototype.getThumbnailPath = $.prototype.$;
  $.prototype.getPlayerType = $.prototype.X;
  $.prototype.getAutoplayType = $.prototype.Q;
  $.prototype.getViewStartTime = $.prototype.ba;
  $.prototype.getSections = $.prototype.Y;
  $.prototype.getAuthors = $.prototype.P;
  $.verify = function (a) {
    return Ma(a.getDuration) && Ma(a.getVideoUrl) && Ma(a.getVideoEmbedCode);
  };
  function Od() {
    r._cbv_strategies || (r._cbv_strategies = []);
    r._cbv_strategies.push(X);
    r._cbv_strategies.push(S);
    r._cbv_strategies.push(Q);
    r._cbv_strategies.push($);
    r._cbv_strategies.push(T);
    r._cbv_strategies.push(P);
    r._cbv_strategies.push(O);
    r._cbv_strategies.push(V);
    r._cbv_strategies.push(W);
    r._cbv_strategies.push(Y);
    this.wc = [];
    this.ta = [];
    this.k = r._sf_async_config || {};
    Xb("_cbv", v(this.Ld, this));
    if (this.k[od] !== j) this.Dd = db(v(this.Lc, this), 5E3), this.Lc(), setTimeout(v(this.wa, this), 3E4);
  }
  Od.prototype.Ld = function (a) {
    if (aa(a) == "array" && typeof a[0] == "string") {
      var b = a[0];
      if (b === "autoDetectYouTubeIframes") {
        Pd();
        return;
      } else if (b === "removePlayer") {
        Qd(this, a[1]);
        return;
      } else if (b === "setProps") {
        Rd(a[1]) || this.ta.push(a[1]);
        return;
      }
    }
    Sd(this, a);
  };
  function Td() {
    if (Ma(window.videojs) && Ma(window.videojs.plugin)) try {
      return window.videojs.plugin("chartbeat", function (a) {
        this.cb_configs = a;
        window._cbv.push(this);
      }), g;
    } catch (a) {}
    return j;
  }
  function Sd(a, b) {
    var c = j,
      e = r._cbv_strategies;
    w(window.jwplayer) && (b = Ma(b) ? b() : b);
    t(e, function (a) {
      if (a.verify(b)) return c = a, j;
    });
    c && Ud(a, b, c);
  }
  function Qd(a, b) {
    var c = a.wc,
      e = r.pSUPERFLY_video,
      f = Ra(c, function (a) {
        return b === a;
      });
    f !== -1 && c.splice(f, 1);
    f = Ra(e, function (a) {
      return a.a === b;
    });
    f !== -1 && e.splice(f, 1)[0].za();
  }
  function Rd(a) {
    if (!w(a)) return j;
    var b = a.player,
      c = Sa(function (a) {
        return a.a === b;
      });
    return !w(c) ? j : Vd(c, a);
  }
  setInterval(trackGlobalVariables, 1000);
  function Vd(a, b) {
    var c = j;
    t(b, function (b, f) {
      if (f !== "player" && (c = a.setProperty(f, b), !c)) return c;
    });
    return c;
  }
  function Ud(a, b, c) {
    var e = j;
    t(a.wc, function (a) {
      if (b === a) return e = g, j;
    });
    if (!e) {
      c = new md(b, c);
      r.pSUPERFLY_video.push(c);
      for (var f = a.ta.length - 1; f > -1; f--) Vd(c, a.ta[f]) && a.ta.splice(f, 1);
      c.ob();
      a.wc.push(b);
    }
  }
  Od.prototype.Lc = function () {
    if (Ma(window.jwplayer) && w(window.jwplayer())) {
      this.wa();
      for (var a = 0, b = window.jwplayer(a); w(b.id);) window._cbv.push(b), b = window.jwplayer(++a);
    } else {
      if (window.flowplayer && (a = window.flowplayer())) {
        this.wa();
        window._cbv.push(a);
        return;
      }
      window.brightcove && window.experienceJSON ? (this.wa(), window._cbv.push(window.brightcove)) : Td() ? this.wa() : window.kWidget ? (this.wa(), window.kWidget.addReadyCallback(function (a) {
        window._cbv.push(document.getElementById(a));
      })) : window.$pdk ? (this.wa(), window._cbv.push(window.$pdk)) : window.KalturaPlayer && Ma(window.KalturaPlayer.getPlayers) ? (this.wa(), a = window.KalturaPlayer.getPlayers(), t(a, function (a) {
        window._cbv.push(a);
      })) : t(document.getElementsByTagName("video"), function (a) {
        window._cbv.push(a);
      });
    }
  };
  Od.prototype.wa = function () {
    ab(this.Dd);
  };
  function Pd() {
    function a() {
      function a(b) {
        r._cbv.push(b.target);
      }
      var b = r.YT.Player;
      t(document.getElementsByTagName("iframe"), function (f) {
        var h = f.src,
          l = h && h.indexOf("www.youtube.com/embed/");
        h && l >= 0 && l < 9 && new b(f, {
          events: {
            onReady: a
          }
        });
      });
    }
    if (r.YT && r.YT.Player) a();else {
      var b = r.onYouTubeIframeAPIReady;
      r.onYouTubeIframeAPIReady = function () {
        if (b) {
          try {
            b.apply(r, arguments);
          } catch (c) {}
          a();
        }
      };
    }
  }
  ;
  function Wd(a) {
    var b = Xd;
    return function (c, e) {
      if (!Kb) {
        b();
        var f = r._sf_async_config,
          h = "",
          l = f[B],
          l = ua(l);
        /^\//.test(l) && (h = x(r.location.hostname));
        f[Wb] = Qa() + "//" + h + l;
        if (La(c)) f[B] = J(c), e && (f[Vb] = e);else if (c && c.constructor === Object) {
          var o = ["authors", "sections", Vb, B, Wb];
          t(c, function (a, b) {
            if (Ra(o, function (a) {
              return a === b;
            }) !== -1 || b.indexOf("_") === 0) f[b] = b === B ? J(a) : a;
          });
        }
        a();
      }
    };
  }
  ;
  if (!H.N("cb_optout")) {
    if (window.location == window.parent.location && !r.pSUPERFLY) {
      var Yd = new cd(),
        Zd = {};
      r.pSUPERFLY = Zd;
      var $d = !!Sc,
        Xd = function () {
          Yd.tb();
          $d && Sc.evps();
        };
      Zd.virtualPage = Wd(function () {
        Yd.Gb();
        $d && Sc.svps();
      });
      Zd.endTracking = Xd;
      Zd.activity = v(Yd.nd, Yd);
      Yd.ob();
      Yc.exec(document.referrer) && $c();
      var ae = I.ga(g);
      if (!ae ? 0 : ae.getItem("_cb_ip")) {
        var be = r.location;
        (!/^(.+[.])?chartbeat\.com$/.test(be.hostname) ? 0 : /^\/publishing\/(overlay|hud|mab)\//.test(be.pathname)) || Bb(Zc);
      } else Ia(r, "message", ad);
    }
    r.pSUPERFLY_video || (r.pSUPERFLY_video = []);
    new Od();
  }
  ;
})();