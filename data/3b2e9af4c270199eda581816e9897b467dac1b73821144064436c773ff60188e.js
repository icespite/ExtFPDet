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
        "function": "__ogt_1p_data_v2",
        "priority": 2,
        "vtp_cityType": "CSS_SELECTOR",
        "vtp_manualEmailEnabled": false,
        "vtp_firstNameType": "CSS_SELECTOR",
        "vtp_countryType": "CSS_SELECTOR",
        "vtp_cityValue": "",
        "vtp_isAutoEnabled": true,
        "vtp_autoCollectExclusionSelectors": ["list", ["map", "exclusionSelector", ""]],
        "vtp_emailType": "CSS_SELECTOR",
        "vtp_regionType": "CSS_SELECTOR",
        "vtp_autoEmailEnabled": true,
        "vtp_postalCodeValue": "",
        "vtp_lastNameValue": "",
        "vtp_phoneType": "CSS_SELECTOR",
        "vtp_phoneValue": "",
        "vtp_streetType": "CSS_SELECTOR",
        "vtp_autoPhoneEnabled": true,
        "vtp_postalCodeType": "CSS_SELECTOR",
        "vtp_emailValue": "",
        "vtp_firstNameValue": "",
        "vtp_streetValue": "",
        "vtp_lastNameType": "CSS_SELECTOR",
        "vtp_isEnabled": true,
        "vtp_autoAddressEnabled": true,
        "vtp_regionValue": "",
        "vtp_countryValue": "",
        "vtp_isAutoCollectPiiEnabledFlag": false,
        "tag_id": 10
      }, {
        "function": "__ccd_ga_first",
        "priority": 1,
        "vtp_instanceDestinationId": "UA-1304930-31",
        "tag_id": 13
      }, {
        "function": "__rep",
        "vtp_containerId": "UA-1304930-31",
        "vtp_remoteConfig": ["map"],
        "tag_id": 1
      }, {
        "function": "__zone",
        "vtp_childContainers": ["list", ["map", "publicId", "G-HTEVK364GY"]],
        "vtp_enableConfiguration": false,
        "tag_id": 3
      }, {
        "function": "__ccd_ga_last",
        "priority": 0,
        "vtp_instanceDestinationId": "UA-1304930-31",
        "tag_id": 12
      }],
      "predicates": [{
        "function": "_eq",
        "arg0": ["macro", 0],
        "arg1": "gtm.js"
      }, {
        "function": "_eq",
        "arg0": ["macro", 0],
        "arg1": "gtm.init"
      }],
      "rules": [[["if", 0], ["add", 2, 3]], [["if", 1], ["add", 0, 4, 1]]]
    },
    "runtime": [[50, "__ccd_ga_first", [46, "a"], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__ccd_ga_last", [46, "a"], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__ogt_1p_data_v2", [46, "a"], [50, "j", [46, "m", "n", "o"], [22, [20, [16, [15, "n"], "type"], [15, "o"]], [46, [22, [28, [15, "m"]], [46, [3, "m", [8]]]], [22, [28, [16, [15, "m"], [15, "o"]]], [46, [43, [15, "m"], [15, "o"], [16, [15, "n"], "userData"]]]]]], [36, [15, "m"]]], [50, "k", [46, "m", "n"], [52, "o", [16, [15, "a"], [15, "m"]]], [41, "p"], [22, [20, [15, "o"], "CSS_SELECTOR"], [46, [3, "p", "css_selector"]], [46, [22, [20, [15, "o"], "JS_VAR"], [46, [3, "p", "js_variable"]]]]], [36, [8, "selector_type", [15, "p"], "value", [16, [15, "a"], [15, "n"]]]]], [50, "l", [46, "m", "n", "o", "p"], [22, [28, [16, [15, "a"], [15, "p"]]], [46, [36]]], [43, [15, "m"], [15, "n"], ["k", [15, "o"], [15, "p"]]]], [22, [28, [17, [15, "a"], "isEnabled"]], [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]]], [52, "b", [13, [41, "$0"], [3, "$0", ["require", "internal.getFlags"]], ["$0"]]], [52, "c", ["require", "internal.getDestinationIds"]], [52, "d", ["require", "internal.getProductSettingsParameter"]], [52, "e", ["require", "internal.detectUserProvidedData"]], [52, "f", ["require", "internal.setRemoteConfigParameter"]], [52, "g", ["require", "internal.registerCcdCallback"]], [52, "h", [30, ["c"], [7]]], [52, "i", [8, "enable_code", true]], [22, [17, [15, "a"], "isAutoEnabled"], [46, [53, [52, "m", [7]], [22, [1, [17, [15, "a"], "autoCollectExclusionSelectors"], [17, [17, [15, "a"], "autoCollectExclusionSelectors"], "length"]], [46, [53, [41, "o"], [3, "o", 0], [63, [7, "o"], [23, [15, "o"], [17, [17, [15, "a"], "autoCollectExclusionSelectors"], "length"]], [33, [15, "o"], [3, "o", [0, [15, "o"], 1]]], [46, [53, [52, "p", [17, [16, [17, [15, "a"], "autoCollectExclusionSelectors"], [15, "o"]], "exclusionSelector"]], [22, [15, "p"], [46, [2, [15, "m"], "push", [7, [15, "p"]]]]]]]]]]], [52, "n", [39, [17, [15, "a"], "isAutoCollectPiiEnabled"], [17, [15, "a"], "autoEmailEnabled"], true]], [43, [15, "i"], "auto_detect", [8, "email", [15, "n"], "phone", [17, [15, "a"], "autoPhoneEnabled"], "address", [17, [15, "a"], "autoAddressEnabled"], "exclude_element_selectors", [15, "m"]]]]]], [22, [17, [15, "a"], "isManualEnabled"], [46, [53, [52, "m", [8]], [22, [17, [15, "a"], "manualEmailEnabled"], [46, ["l", [15, "m"], "email", "emailType", "emailValue"]]], [22, [17, [15, "a"], "manualPhoneEnabled"], [46, ["l", [15, "m"], "phone", "phoneType", "phoneValue"]]], [22, [17, [15, "a"], "manualAddressEnabled"], [46, [53, [52, "n", [8]], ["l", [15, "n"], "first_name", "firstNameType", "firstNameValue"], ["l", [15, "n"], "last_name", "lastNameType", "lastNameValue"], ["l", [15, "n"], "street", "streetType", "streetValue"], ["l", [15, "n"], "city", "cityType", "cityValue"], ["l", [15, "n"], "region", "regionType", "regionValue"], ["l", [15, "n"], "country", "countryType", "countryValue"], ["l", [15, "n"], "postal_code", "postalCodeType", "postalCodeValue"], [43, [15, "m"], "name_and_address", [7, [15, "n"]]]]]], [43, [15, "i"], "selectors", [15, "m"]]]]], [65, "m", [15, "h"], [46, [53, [41, "n"], [3, "n", [15, "i"]], [22, [1, [20, [2, [15, "m"], "indexOf", [7, "G-"]], 0], [28, [16, [15, "b"], "enableEuidAutoMode"]]], [46, [53, [52, "q", [8, "enable_code", true, "selectors", [16, [15, "i"], "selectors"]]], [3, "n", [15, "q"]]]]], ["f", [15, "m"], "user_data_settings", [15, "n"]], [52, "o", [16, [15, "n"], "auto_detect"]], [22, [28, [15, "o"]], [46, [6]]], [52, "p", [51, "", [7, "q"], [52, "r", [2, [15, "q"], "getMetadata", [7, "user_data_from_automatic"]]], [22, [15, "r"], [46, [36, [15, "r"]]]], [52, "s", ["e", [8, "excludeElementSelectors", [16, [15, "o"], "exclude_element_selectors"], "fieldFilters", [8, "email", [16, [15, "o"], "email"], "phone", [16, [15, "o"], "phone"], "address", [16, [15, "o"], "address"]]]]], [52, "t", [1, [15, "s"], [16, [15, "s"], "elements"]]], [52, "u", [8]], [22, [1, [15, "t"], [18, [17, [15, "t"], "length"], 0]], [46, [53, [41, "v"], [53, [41, "w"], [3, "w", 0], [63, [7, "w"], [23, [15, "w"], [17, [15, "t"], "length"]], [33, [15, "w"], [3, "w", [0, [15, "w"], 1]]], [46, [53, [52, "x", [16, [15, "t"], [15, "w"]]], ["j", [15, "u"], [15, "x"], "email"], [22, [16, [15, "b"], "enableAutoPiiOnPhoneAndAddress"], [46, ["j", [15, "u"], [15, "x"], "phone_number"], [3, "v", ["j", [15, "v"], [15, "x"], "first_name"]], [3, "v", ["j", [15, "v"], [15, "x"], "last_name"]], [3, "v", ["j", [15, "v"], [15, "x"], "country"]], [3, "v", ["j", [15, "v"], [15, "x"], "postal_code"]]]]]]]], [22, [1, [15, "v"], [28, [16, [15, "u"], "address"]]], [46, [43, [15, "u"], "address", [15, "v"]]]]]]], [2, [15, "q"], "setMetadata", [7, "user_data_from_automatic", [15, "u"]]], [36, [15, "u"]]]], ["g", [15, "m"], [51, "", [7, "q"], [2, [15, "q"], "setMetadata", [7, "user_data_from_automatic_getter", [15, "p"]]]]]]]], [2, [15, "a"], "gtmOnSuccess", [7]]]],
    "entities": {
      "__ccd_ga_first": {
        "2": true,
        "4": true
      },
      "__ccd_ga_last": {
        "2": true,
        "4": true
      },
      "__ogt_1p_data_v2": {
        "2": true
      }
    },
    "permissions": {
      "__ccd_ga_first": {},
      "__ccd_ga_last": {},
      "__ogt_1p_data_v2": {
        "detect_user_provided_data": {
          "limitDataSources": true,
          "allowAutoDataSources": true,
          "allowManualDataSources": false,
          "allowCodeDataSources": false
        }
      }
    },
    "security_groups": {
      "google": ["__ccd_ga_first", "__ccd_ga_last", "__ogt_1p_data_v2"]
    }
  };

  /*
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
  var aa,
    ca = function (a) {
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
    fa = function (a) {
      var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
      if (b) return b.call(a);
      if ("number" == typeof a.length) return {
        next: ca(a)
      };
      throw Error(String(a) + " is not an iterable or ArrayLike");
    },
    ka = "function" == typeof Object.create ? Object.create : function (a) {
      var b = function () {};
      b.prototype = a;
      return new b();
    },
    la;
  if ("function" == typeof Object.setPrototypeOf) la = Object.setPrototypeOf;else {
    var ma;
    a: {
      var na = {
          a: !0
        },
        oa = {};
      try {
        oa.__proto__ = na;
        ma = oa.a;
        break a;
      } catch (a) {}
      ma = !1;
    }
    la = ma ? function (a, b) {
      a.__proto__ = b;
      if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
      return a;
    } : null;
  }
  var pa = la,
    qa = function (a, b) {
      a.prototype = ka(b.prototype);
      a.prototype.constructor = a;
      if (pa) pa(a, b);else for (var c in b) if ("prototype" != c) if (Object.defineProperties) {
        var d = Object.getOwnPropertyDescriptor(b, c);
        d && Object.defineProperty(a, c, d);
      } else a[c] = b[c];
      a.mn = b.prototype;
    },
    ra = this || self,
    sa = function (a) {
      return a;
    };
  var ta = function (a, b) {
    this.h = a;
    this.B = b;
  };
  var va = function (a) {
      return "number" === typeof a && 0 <= a && isFinite(a) && 0 === a % 1 || "string" === typeof a && "-" !== a[0] && a === "" + parseInt(a, 10);
    },
    wa = function () {
      this.C = {};
      this.D = !1;
      this.K = {};
    },
    xa = function (a, b) {
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
  aa = wa.prototype;
  aa.get = function (a) {
    return this.C["dust." + a];
  };
  aa.set = function (a, b) {
    this.D || (a = "dust." + a, this.K.hasOwnProperty(a) || (this.C[a] = b));
  };
  aa.has = function (a) {
    return this.C.hasOwnProperty("dust." + a);
  };
  aa.remove = function (a) {
    a = "dust." + a;
    this.D || this.K.hasOwnProperty(a) || delete this.C[a];
  };
  aa.sc = function () {
    this.D = !0;
  };
  aa.Ef = function () {
    return this.D;
  };
  var ya = function (a) {
    this.B = new wa();
    this.h = [];
    this.C = !1;
    a = a || [];
    for (var b in a) a.hasOwnProperty(b) && (va(b) ? this.h[Number(b)] = a[Number(b)] : this.B.set(b, a[b]));
  };
  aa = ya.prototype;
  aa.toString = function (a) {
    if (a && 0 <= a.indexOf(this)) return "";
    for (var b = [], c = 0; c < this.h.length; c++) {
      var d = this.h[c];
      null === d || void 0 === d ? b.push("") : d instanceof ya ? (a = a || [], a.push(this), b.push(d.toString(a)), a.pop()) : b.push(d.toString());
    }
    return b.join(",");
  };
  aa.set = function (a, b) {
    if (!this.C) if ("length" === a) {
      if (!va(b)) throw Error("RangeError: Length property must be a valid integer.");
      this.h.length = Number(b);
    } else va(a) ? this.h[Number(a)] = b : this.B.set(a, b);
  };
  aa.get = function (a) {
    return "length" === a ? this.length() : va(a) ? this.h[Number(a)] : this.B.get(a);
  };
  aa.length = function () {
    return this.h.length;
  };
  aa.Qb = function () {
    for (var a = xa(this.B, 1), b = 0; b < this.h.length; b++) a.push(b + "");
    return new ya(a);
  };
  aa.remove = function (a) {
    va(a) ? delete this.h[Number(a)] : this.B.remove(a);
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
    return new ya(this.h.splice.apply(this.h, arguments));
  };
  aa.unshift = function (a) {
    return this.h.unshift.apply(this.h, Array.prototype.slice.call(arguments));
  };
  aa.has = function (a) {
    return va(a) && this.h.hasOwnProperty(a) || this.B.has(a);
  };
  aa.sc = function () {
    this.C = !0;
    Object.freeze(this.h);
    this.B.sc();
  };
  aa.Ef = function () {
    return this.C;
  };
  var za = function () {
    this.quota = {};
  };
  za.prototype.reset = function () {
    this.quota = {};
  };
  var Aa = function (a, b) {
    this.T = a;
    this.K = function (c, d, e) {
      return c.apply(d, e);
    };
    this.C = b;
    this.B = new wa();
    this.h = this.D = void 0;
  };
  Aa.prototype.add = function (a, b) {
    Ba(this, a, b, !1);
  };
  var Ba = function (a, b, c, d) {
    if (!a.B.Ef()) if (d) {
      var e = a.B;
      e.set(b, c);
      e.K["dust." + b] = !0;
    } else a.B.set(b, c);
  };
  Aa.prototype.set = function (a, b) {
    this.B.Ef() || (!this.B.has(a) && this.C && this.C.has(a) ? this.C.set(a, b) : this.B.set(a, b));
  };
  Aa.prototype.get = function (a) {
    return this.B.has(a) ? this.B.get(a) : this.C ? this.C.get(a) : void 0;
  };
  Aa.prototype.has = function (a) {
    return !!this.B.has(a) || !(!this.C || !this.C.has(a));
  };
  var Ca = function (a) {
    var b = new Aa(a.T, a);
    a.D && (b.D = a.D);
    b.K = a.K;
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
    Fa = function (a) {
      return "number" === typeof a && !isNaN(a);
    },
    Ha = Array.isArray,
    Ja = function (a, b) {
      if (a && Ha(a)) for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c];
    },
    Ka = function (a, b) {
      if (!Fa(a) || !Fa(b) || a > b) a = 0, b = 2147483647;
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
    Pa = function (a) {
      return Math.round(Number(a)) || 0;
    },
    Qa = function (a) {
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
    Xa = function (a) {
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
    Ya = function (a, b) {
      for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
    },
    Za = function (a) {
      for (var b in a) if (a.hasOwnProperty(b)) return !0;
      return !1;
    },
    $a = function (a, b) {
      for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
      return c;
    },
    ab = function (a, b) {
      var c = z;
      b = b || [];
      for (var d = c, e = 0; e < a.length - 1; e++) {
        if (!d.hasOwnProperty(a[e])) return;
        d = d[a[e]];
        if (0 <= b.indexOf(d)) return;
      }
      return d;
    },
    bb = function (a, b) {
      for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
      d[e[e.length - 1]] = b;
      return c;
    },
    cb = /^\w{1,9}$/,
    db = function (a, b) {
      a = a || {};
      b = b || ",";
      var c = [];
      l(a, function (d, e) {
        cb.test(d) && e && c.push(d);
      });
      return c.join(b);
    },
    eb = function (a, b) {
      function c() {
        ++d === b && (e(), e = null, c.done = !0);
      }
      var d = 0,
        e = a;
      c.done = !1;
      return c;
    };
  var fb = function (a, b) {
    wa.call(this);
    this.T = a;
    this.ob = b;
  };
  qa(fb, wa);
  fb.prototype.toString = function () {
    return this.T;
  };
  fb.prototype.Qb = function () {
    return new ya(xa(this, 1));
  };
  fb.prototype.h = function (a, b) {
    return this.ob.apply(new gb(this, a), Array.prototype.slice.call(arguments, 1));
  };
  fb.prototype.B = function (a, b) {
    try {
      return this.h.apply(this, Array.prototype.slice.call(arguments, 0));
    } catch (c) {}
  };
  var ib = function (a, b) {
      for (var c, d = 0; d < b.length && !(c = hb(a, b[d]), c instanceof ta); d++);
      return c;
    },
    hb = function (a, b) {
      try {
        var c = a.get(String(b[0]));
        if (!(c && c instanceof fb)) throw Error("Attempting to execute non-function " + b[0] + ".");
        return c.h.apply(c, [a].concat(b.slice(1)));
      } catch (e) {
        var d = a.D;
        d && d(e, b.context ? {
          id: b[0],
          line: b.context.line
        } : null);
        throw e;
      }
    },
    gb = function (a, b) {
      this.B = a;
      this.h = b;
    },
    C = function (a, b) {
      return Ha(b) ? hb(a.h, b) : b;
    },
    F = function (a) {
      return a.B.T;
    };
  var jb = function () {
    wa.call(this);
  };
  qa(jb, wa);
  jb.prototype.Qb = function () {
    return new ya(xa(this, 1));
  };
  var kb = {
    map: function (a) {
      for (var b = new jb(), c = 0; c < arguments.length - 1; c += 2) {
        var d = C(this, arguments[c]) + "",
          e = C(this, arguments[c + 1]);
        b.set(d, e);
      }
      return b;
    },
    list: function (a) {
      for (var b = new ya(), c = 0; c < arguments.length; c++) {
        var d = C(this, arguments[c]);
        b.push(d);
      }
      return b;
    },
    fn: function (a, b, c) {
      var d = this.h,
        e = C(this, b);
      if (!(e instanceof ya)) throw Error("Error: non-List value given for Fn argument names.");
      var f = Array.prototype.slice.call(arguments, 2);
      return new fb(a, function () {
        return function (g) {
          var k = Ca(d);
          void 0 === k.h && (k.h = this.h.h);
          for (var m = Array.prototype.slice.call(arguments, 0), n = 0; n < m.length; n++) if (m[n] = C(this, m[n]), m[n] instanceof ta) return m[n];
          for (var p = e.get("length"), q = 0; q < p; q++) q < m.length ? k.add(e.get(q), m[q]) : k.add(e.get(q), void 0);
          k.add("arguments", new ya(m));
          var r = ib(k, f);
          if (r instanceof ta) return "return" === r.h ? r.B : r;
        };
      }());
    },
    control: function (a, b) {
      return new ta(a, C(this, b));
    },
    undefined: function () {}
  };
  var lb = function () {
      this.C = new za();
      this.h = new Aa(this.C);
    },
    mb = function (a, b, c) {
      var d = new fb(b, c);
      d.sc();
      a.h.set(b, d);
    },
    nb = function (a, b, c) {
      kb.hasOwnProperty(b) && mb(a, c || b, kb[b]);
    };
  lb.prototype.execute = function (a, b) {
    var c = Array.prototype.slice.call(arguments, 0);
    return this.B(c);
  };
  lb.prototype.B = function (a) {
    for (var b, c = 0; c < arguments.length; c++) b = hb(this.h, arguments[c]);
    return b;
  };
  lb.prototype.D = function (a, b) {
    var c = Ca(this.h);
    c.h = a;
    for (var d, e = 1; e < arguments.length; e++) d = hb(c, arguments[e]);
    return d;
  };
  function ob() {
    for (var a = pb, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
    return b;
  }
  function qb() {
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    a += a.toLowerCase() + "0123456789-_";
    return a + ".";
  }
  var pb, rb;
  function sb(a) {
    pb = pb || qb();
    rb = rb || ob();
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
      b.push(pb[m], pb[n], pb[p], pb[q]);
    }
    return b.join("");
  }
  function tb(a) {
    function b(m) {
      for (; d < a.length;) {
        var n = a.charAt(d++),
          p = rb[n];
        if (null != p) return p;
        if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n);
      }
      return m;
    }
    pb = pb || qb();
    rb = rb || ob();
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
  var ub = {},
    vb = function (a, b) {
      ub[a] = ub[a] || [];
      ub[a][b] = !0;
    },
    wb = function () {
      delete ub.GA4_EVENT;
    },
    xb = function (a) {
      var b = ub[a];
      if (!b || 0 === b.length) return "";
      for (var c = [], d = 0, e = 0; e < b.length; e++) 0 === e % 8 && 0 < e && (c.push(String.fromCharCode(d)), d = 0), b[e] && (d |= 1 << e % 8);
      0 < d && c.push(String.fromCharCode(d));
      return sb(c.join("")).replace(/\.+$/, "");
    };
  var yb = Array.prototype.indexOf ? function (a, b) {
    return Array.prototype.indexOf.call(a, b, void 0);
  } : function (a, b) {
    if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
    for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
    return -1;
  };
  var zb,
    Ab = function () {
      if (void 0 === zb) {
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
          zb = a;
        } else zb = a;
      }
      return zb;
    };
  var Bb = function (a) {
    this.h = a;
  };
  Bb.prototype.toString = function () {
    return this.h + "";
  };
  var Cb = function (a) {
      return a instanceof Bb && a.constructor === Bb ? a.h : "type_error:TrustedResourceUrl";
    },
    Db = {},
    Eb = function (a) {
      var b = a,
        c = Ab(),
        d = c ? c.createScriptURL(b) : b;
      return new Bb(d, Db);
    };
  var Fb = function (a) {
    this.h = a;
  };
  Fb.prototype.toString = function () {
    return this.h.toString();
  };
  var Gb = function (a) {
      return a instanceof Fb && a.constructor === Fb ? a.h : "type_error:SafeUrl";
    },
    Hb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
    Ib = {},
    Jb = new Fb("about:invalid#zClosurez", Ib);
  var Kb, Lb;
  a: {
    for (var Mb = ["CLOSURE_FLAGS"], Nb = ra, Ob = 0; Ob < Mb.length; Ob++) if (Nb = Nb[Mb[Ob]], null == Nb) {
      Lb = null;
      break a;
    }
    Lb = Nb;
  }
  var Pb = Lb && Lb[610401301];
  Kb = null != Pb ? Pb : !1;
  function Qb() {
    var a = ra.navigator;
    if (a) {
      var b = a.userAgent;
      if (b) return b;
    }
    return "";
  }
  var Rb,
    Sb = ra.navigator;
  Rb = Sb ? Sb.userAgentData || null : null;
  function Tb(a) {
    return Kb ? Rb ? Rb.brands.some(function (b) {
      var c = b.brand;
      return c && -1 != c.indexOf(a);
    }) : !1 : !1;
  }
  function Ub(a) {
    return -1 != Qb().indexOf(a);
  }
  ;
  function Vb() {
    return Kb ? !!Rb && 0 < Rb.brands.length : !1;
  }
  function Wb() {
    return Vb() ? !1 : Ub("Opera");
  }
  function Xb() {
    return Ub("Firefox") || Ub("FxiOS");
  }
  function Yb() {
    return Vb() ? Tb("Chromium") : (Ub("Chrome") || Ub("CriOS")) && !(Vb() ? 0 : Ub("Edge")) || Ub("Silk");
  }
  ;
  var Zb = {},
    $b = function (a) {
      this.h = a;
    };
  $b.prototype.toString = function () {
    return this.h.toString();
  };
  var ac = function (a) {
    return a instanceof $b && a.constructor === $b ? a.h : "type_error:SafeHtml";
  }; /*
     SPDX-License-Identifier: Apache-2.0
     */
  var bc;
  try {
    new URL("s://g"), bc = !0;
  } catch (a) {
    bc = !1;
  }
  var cc = bc;
  function dc(a) {
    var b;
    a: if (cc) {
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
  ;
  var ec = {};
  var gc = function () {},
    hc = function (a) {
      this.h = a;
    };
  qa(hc, gc);
  hc.prototype.toString = function () {
    return this.h;
  };
  function ic(a, b) {
    var c = [new hc(jc[0].toLowerCase(), ec)];
    if (0 === c.length) throw Error("");
    var d = c.map(function (f) {
        var g;
        if (f instanceof hc) g = f.h;else throw Error("");
        return g;
      }),
      e = b.toLowerCase();
    if (d.every(function (f) {
      return 0 !== e.indexOf(f);
    })) throw Error('Attribute "' + b + '" does not match any of the allowed prefixes.');
    a.setAttribute(b, "true");
  }
  function kc(a) {
    var b = a.tagName;
    if ("SCRIPT" === b || "STYLE" === b) throw Error("");
  }
  ;
  function lc(a, b) {
    var c = b instanceof Fb ? Gb(b) : dc(b);
    void 0 !== c && (a.action = c);
  }
  ;
  var mc = da([""]),
    nc = ea(["\x00"], ["\\0"]),
    oc = ea(["\n"], ["\\n"]),
    pc = ea(["\x00"], ["\\u0000"]);
  function qc(a) {
    return Object.isFrozen(a) && Object.isFrozen(a.raw);
  }
  -1 !== function () {
    return qc(mc) && qc(nc) && qc(oc) && qc(pc);
  }.toString().indexOf("[") || function () {
    return "";
  }.toString().indexOf("`");
  var rc = function (a) {
    this.Ml = a;
  };
  function sc(a) {
    return new rc(function (b) {
      return b.substr(0, a.length + 1).toLowerCase() === a + ":";
    });
  }
  var tc = [sc("data"), sc("http"), sc("https"), sc("mailto"), sc("ftp"), new rc(function (a) {
    return /^[^:]*([/?#]|$)/.test(a);
  })];
  function uc(a, b) {
    b = void 0 === b ? tc : b;
    for (var c = 0; c < b.length; ++c) {
      var d = b[c];
      if (d instanceof rc && d.Ml(a)) return new Fb(a, Ib);
    }
  }
  function vc(a) {
    var b;
    b = void 0 === b ? tc : b;
    return uc(a, b) || Jb;
  }
  ;
  function wc(a) {
    var b = a = yc(a),
      c = Ab(),
      d = c ? c.createHTML(b) : b;
    return new $b(d, Zb);
  }
  function yc(a) {
    return null === a ? "null" : void 0 === a ? "undefined" : a;
  }
  ;
  var z = window,
    H = document,
    zc = navigator,
    Ac = H.currentScript && H.currentScript.src,
    Bc = function (a, b) {
      var c = z[a];
      z[a] = void 0 === c ? b : c;
      return z[a];
    },
    Cc = function (a, b) {
      b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function () {
        a.readyState in {
          loaded: 1,
          complete: 1
        } && (a.onreadystatechange = null, b());
      });
    },
    Dc = {
      async: 1,
      nonce: 1,
      onerror: 1,
      onload: 1,
      src: 1,
      type: 1
    },
    Ec = {
      onload: 1,
      src: 1,
      width: 1,
      height: 1,
      style: 1
    };
  function Fc(a, b, c) {
    b && l(b, function (d, e) {
      d = d.toLowerCase();
      c.hasOwnProperty(d) || a.setAttribute(d, e);
    });
  }
  var Gc = function (a, b, c, d, e) {
      var f = H.createElement("script");
      Fc(f, d, Dc);
      f.type = "text/javascript";
      f.async = !0;
      var g;
      g = Eb(yc(a));
      f.src = Cb(g);
      var k,
        m,
        n,
        p = null == (n = (m = (f.ownerDocument && f.ownerDocument.defaultView || window).document).querySelector) ? void 0 : n.call(m, "script[nonce]");
      (k = p ? p.nonce || p.getAttribute("nonce") || "" : "") && f.setAttribute("nonce", k);
      Cc(f, b);
      c && (f.onerror = c);
      if (e) e.appendChild(f);else {
        var q = H.getElementsByTagName("script")[0] || H.body || H.head;
        q.parentNode.insertBefore(f, q);
      }
      return f;
    },
    Hc = function () {
      if (Ac) {
        var a = Ac.toLowerCase();
        if (0 === a.indexOf("https://")) return 2;
        if (0 === a.indexOf("http://")) return 3;
      }
      return 1;
    },
    Ic = function (a, b, c, d, e) {
      var f;
      f = void 0 === f ? !0 : f;
      var g = e,
        k = !1;
      g || (g = H.createElement("iframe"), k = !0);
      Fc(g, c, Ec);
      d && l(d, function (n, p) {
        g.dataset[n] = p;
      });
      f && (g.height = "0", g.width = "0", g.style.display = "none", g.style.visibility = "hidden");
      if (k) {
        var m = H.body && H.body.lastChild || H.body || H.head;
        m.parentNode.insertBefore(g, m);
      }
      Cc(g, b);
      void 0 !== a && (g.src = a);
      return g;
    },
    Jc = function (a, b, c, d) {
      var e = new Image(1, 1);
      Fc(e, d, {});
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
    Kc = function (a, b, c, d) {
      a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c);
    },
    Lc = function (a, b, c) {
      a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c);
    },
    J = function (a) {
      z.setTimeout(a, 0);
    },
    Mc = function (a, b) {
      return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null;
    },
    Oc = function (a) {
      var b = a.innerText || a.textContent || "";
      b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
      b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
      return b;
    },
    Pc = function (a) {
      var b = H.createElement("div"),
        c = b,
        d = wc("A<div>" + a + "</div>");
      1 === c.nodeType && kc(c);
      c.innerHTML = ac(d);
      b = b.lastChild;
      for (var e = []; b.firstChild;) e.push(b.removeChild(b.firstChild));
      return e;
    },
    Qc = function (a, b, c) {
      c = c || 100;
      for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
      for (var f = a, g = 0; f && g <= c; g++) {
        if (d[String(f.tagName).toLowerCase()]) return f;
        f = f.parentElement;
      }
      return null;
    },
    Rc = function (a) {
      var b;
      try {
        b = zc.sendBeacon && zc.sendBeacon(a);
      } catch (c) {
        vb("TAGGING", 15);
      }
      b || Jc(a);
    },
    Sc = function (a, b) {
      var c = a[b];
      c && "string" === typeof c.animVal && (c = c.animVal);
      return c;
    },
    Tc = function (a) {
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
    Uc = function () {
      var a = z.performance;
      if (a && Ea(a.now)) return a.now();
    },
    Vc = function () {
      return z.performance || void 0;
    };
  var Wc = function (a, b) {
      return C(this, a) && C(this, b);
    },
    Xc = function (a, b) {
      return C(this, a) === C(this, b);
    },
    Yc = function (a, b) {
      return C(this, a) || C(this, b);
    },
    Zc = function (a, b) {
      a = C(this, a);
      b = C(this, b);
      return -1 < String(a).indexOf(String(b));
    },
    $c = function (a, b) {
      a = String(C(this, a));
      b = String(C(this, b));
      return a.substring(0, b.length) === b;
    },
    ad = function (a, b) {
      a = C(this, a);
      b = C(this, b);
      switch (a) {
        case "pageLocation":
          var c = z.location.href;
          b instanceof jb && b.get("stripProtocol") && (c = c.replace(/^https?:\/\//, ""));
          return c;
      }
    };
  var cd = function () {
    this.h = new lb();
    bd(this);
  };
  cd.prototype.execute = function (a) {
    return this.h.B(a);
  };
  var bd = function (a) {
    nb(a.h, "map");
    var b = function (c, d) {
      mb(a.h, c, d);
    };
    b("and", Wc);
    b("contains", Zc);
    b("equals", Xc);
    b("or", Yc);
    b("startsWith", $c);
    b("variable", ad);
  };
  var fd = function () {
    this.map = new Map();
  };
  fd.prototype.set = function (a, b) {
    this.map.set(a, b);
  };
  fd.prototype.get = function (a) {
    return this.map.get(a);
  };
  var gd = function () {
    this.keys = [];
    this.values = [];
  };
  gd.prototype.set = function (a, b) {
    this.keys.push(a);
    this.values.push(b);
  };
  gd.prototype.get = function (a) {
    var b = this.keys.indexOf(a);
    if (-1 < b) return this.values[b];
  };
  function hd() {
    try {
      return Map ? new fd() : new gd();
    } catch (a) {
      return new gd();
    }
  }
  ;
  var id = function (a) {
    if (a instanceof id) return a;
    this.aa = a;
  };
  id.prototype.toString = function () {
    return String(this.aa);
  };
  var kd = function (a) {
    wa.call(this);
    this.h = a;
    this.set("then", jd(this));
    this.set("catch", jd(this, !0));
    this.set("finally", jd(this, !1, !0));
  };
  qa(kd, jb);
  var jd = function (a, b, c) {
    b = void 0 === b ? !1 : b;
    c = void 0 === c ? !1 : c;
    return new fb("", function (d, e) {
      b && (e = d, d = void 0);
      c && (e = d);
      d instanceof fb || (d = void 0);
      e instanceof fb || (e = void 0);
      var f = Ca(this.h),
        g = function (m) {
          return function (n) {
            return c ? (m.h(f), a.h) : m.h(f, n);
          };
        },
        k = a.h.then(d && g(d), e && g(e));
      return new kd(k);
    });
  }; /*
     jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
  var ld = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
    md = function (a) {
      if (null == a) return String(a);
      var b = ld.exec(Object.prototype.toString.call(Object(a)));
      return b ? b[1].toLowerCase() : "object";
    },
    nd = function (a, b) {
      return Object.prototype.hasOwnProperty.call(Object(a), b);
    },
    od = function (a) {
      if (!a || "object" != md(a) || a.nodeType || a == a.window) return !1;
      try {
        if (a.constructor && !nd(a, "constructor") && !nd(a.constructor.prototype, "isPrototypeOf")) return !1;
      } catch (c) {
        return !1;
      }
      for (var b in a);
      return void 0 === b || nd(a, b);
    },
    pd = function (a, b) {
      var c = b || ("array" == md(a) ? [] : {}),
        d;
      for (d in a) if (nd(a, d)) {
        var e = a[d];
        "array" == md(e) ? ("array" != md(c[d]) && (c[d] = []), c[d] = pd(e, c[d])) : od(e) ? (od(c[d]) || (c[d] = {}), c[d] = pd(e, c[d])) : c[d] = e;
      }
      return c;
    };
  var rd = function (a, b, c) {
      var d = hd(),
        e = function (g, k) {
          for (var m = xa(g, 1), n = 0; n < m.length; n++) k[m[n]] = f(g.get(m[n]));
        },
        f = function (g) {
          var k = d.get(g);
          if (k) return k;
          if (g instanceof ya) {
            var m = [];
            d.set(g, m);
            for (var n = g.Qb(), p = 0; p < n.length(); p++) m[n.get(p)] = f(g.get(n.get(p)));
            return m;
          }
          if (g instanceof kd) return g.h;
          if (g instanceof jb) {
            var q = {};
            d.set(g, q);
            e(g, q);
            return q;
          }
          if (g instanceof fb) {
            var r = function () {
              for (var u = Array.prototype.slice.call(arguments, 0), v = 0; v < u.length; v++) u[v] = qd(u[v], b, c);
              var w = new Aa(b ? b.T : new za());
              b && (w.h = b.h);
              return f(g.h.apply(g, [w].concat(u)));
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
          if (g instanceof id && t) return g.aa;
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
    qd = function (a, b, c) {
      var d = hd(),
        e = function (g, k) {
          for (var m in g) g.hasOwnProperty(m) && k.set(m, f(g[m]));
        },
        f = function (g) {
          var k = d.get(g);
          if (k) return k;
          if (Ha(g) || Na(g)) {
            var m = new ya([]);
            d.set(g, m);
            for (var n in g) g.hasOwnProperty(n) && m.set(n, f(g[n]));
            return m;
          }
          if (od(g)) {
            var p = new jb();
            d.set(g, p);
            e(g, p);
            return p;
          }
          if ("function" === typeof g) {
            var q = new fb("", function (x) {
              for (var y = Array.prototype.slice.call(arguments, 0), A = 0; A < y.length; A++) y[A] = rd(C(this, y[A]), b, c);
              return f((0, this.h.K)(g, g, y));
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
          if (void 0 !== g && w) return new id(g);
        };
      return f(a);
    };
  var sd = function (a) {
      for (var b = [], c = 0; c < a.length(); c++) a.has(c) && (b[c] = a.get(c));
      return b;
    },
    td = function (a) {
      if (void 0 == a || Ha(a) || od(a)) return !0;
      switch (typeof a) {
        case "boolean":
        case "number":
        case "string":
        case "function":
          return !0;
      }
      return !1;
    };
  var ud = {
    supportedMethods: "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),
    concat: function (a, b) {
      for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
      for (var e = 1; e < arguments.length; e++) if (arguments[e] instanceof ya) for (var f = arguments[e], g = 0; g < f.length(); g++) c.push(f.get(g));else c.push(arguments[e]);
      return new ya(c);
    },
    every: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++) if (this.has(d) && !b.h(a, this.get(d), d, this)) return !1;
      return !0;
    },
    filter: function (a, b) {
      for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && b.h(a, this.get(e), e, this) && d.push(this.get(e));
      return new ya(d);
    },
    forEach: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++) this.has(d) && b.h(a, this.get(d), d, this);
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
      for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && (d[e] = b.h(a, this.get(e), e, this));
      return new ya(d);
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
      for (var k = f; k < d; k++) this.has(k) && (e = b.h(a, e, this.get(k), k, this));
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
      for (var k = f; 0 <= k; k--) this.has(k) && (e = b.h(a, e, this.get(k), k, this));
      return e;
    },
    reverse: function () {
      for (var a = sd(this), b = a.length - 1, c = 0; 0 <= b; b--, c++) a.hasOwnProperty(b) ? this.set(c, a[b]) : this.remove(c);
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
      return new ya(e);
    },
    some: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++) if (this.has(d) && b.h(a, this.get(d), d, this)) return !0;
      return !1;
    },
    sort: function (a, b) {
      var c = sd(this);
      void 0 === b ? c.sort() : c.sort(function (e, f) {
        return Number(b.h(a, e, f));
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
  var vd = {
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
    wd = new ta("break"),
    xd = new ta("continue"),
    yd = function (a, b) {
      return C(this, a) + C(this, b);
    },
    zd = function (a, b) {
      return C(this, a) && C(this, b);
    },
    Ad = function (a, b, c) {
      a = C(this, a);
      b = C(this, b);
      c = C(this, c);
      if (!(c instanceof ya)) throw Error("Error: Non-List argument given to Apply instruction.");
      if (null === a || void 0 === a) throw Error("TypeError: Can't read property " + b + " of " + a + ".");
      var d = "number" === typeof a;
      if ("boolean" === typeof a || d) {
        if ("toString" === b) {
          if (d && c.length()) {
            var e = rd(c.get(0));
            try {
              return a.toString(e);
            } catch (r) {}
          }
          return a.toString();
        }
        throw Error("TypeError: " + a + "." + b + " is not a function.");
      }
      if ("string" === typeof a) {
        if (vd.hasOwnProperty(b)) {
          var f = 2;
          f = 1;
          var g = rd(c, void 0, f);
          return qd(a[b].apply(a, g), this.h);
        }
        throw Error("TypeError: " + b + " is not a function");
      }
      if (a instanceof ya) {
        if (a.has(b)) {
          var k = a.get(b);
          if (k instanceof fb) {
            var m = sd(c);
            m.unshift(this.h);
            return k.h.apply(k, m);
          }
          throw Error("TypeError: " + b + " is not a function");
        }
        if (0 <= ud.supportedMethods.indexOf(b)) {
          var n = sd(c);
          n.unshift(this.h);
          return ud[b].apply(a, n);
        }
      }
      if (a instanceof fb || a instanceof jb) {
        if (a.has(b)) {
          var p = a.get(b);
          if (p instanceof fb) {
            var q = sd(c);
            q.unshift(this.h);
            return p.h.apply(p, q);
          }
          throw Error("TypeError: " + b + " is not a function");
        }
        if ("toString" === b) return a instanceof fb ? a.T : a.toString();
        if ("hasOwnProperty" === b) return a.has.apply(a, sd(c));
      }
      if (a instanceof id && "toString" === b) return a.toString();
      throw Error("TypeError: Object has no '" + b + "' property.");
    },
    Bd = function (a, b) {
      a = C(this, a);
      if ("string" !== typeof a) throw Error("Invalid key name given for assignment.");
      var c = this.h;
      if (!c.has(a)) throw Error("Attempting to assign to undefined value " + b);
      var d = C(this, b);
      c.set(a, d);
      return d;
    },
    Cd = function (a) {
      var b = Ca(this.h),
        c = ib(b, Array.prototype.slice.apply(arguments));
      if (c instanceof ta) return c;
    },
    Dd = function () {
      return wd;
    },
    Ed = function (a) {
      for (var b = C(this, a), c = 0; c < b.length; c++) {
        var d = C(this, b[c]);
        if (d instanceof ta) return d;
      }
    },
    Fd = function (a) {
      for (var b = this.h, c = 0; c < arguments.length - 1; c += 2) {
        var d = arguments[c];
        if ("string" === typeof d) {
          var e = C(this, arguments[c + 1]);
          Ba(b, d, e, !0);
        }
      }
    },
    Gd = function () {
      return xd;
    },
    Hd = function (a, b, c) {
      var d = new ya();
      b = C(this, b);
      for (var e = 0; e < b.length; e++) d.push(b[e]);
      var f = [51, a, d].concat(Array.prototype.splice.call(arguments, 2, arguments.length - 2));
      this.h.add(a, C(this, f));
    },
    Id = function (a, b) {
      return C(this, a) / C(this, b);
    },
    Jd = function (a, b) {
      a = C(this, a);
      b = C(this, b);
      var c = a instanceof id,
        d = b instanceof id;
      return c || d ? c && d ? a.aa == b.aa : !1 : a == b;
    },
    Kd = function (a) {
      for (var b, c = 0; c < arguments.length; c++) b = C(this, arguments[c]);
      return b;
    };
  function Ld(a, b, c, d) {
    for (var e = 0; e < b(); e++) {
      var f = a(c(e)),
        g = ib(f, d);
      if (g instanceof ta) {
        if ("break" === g.h) break;
        if ("return" === g.h) return g;
      }
    }
  }
  function Md(a, b, c) {
    if ("string" === typeof b) return Ld(a, function () {
      return b.length;
    }, function (f) {
      return f;
    }, c);
    if (b instanceof jb || b instanceof ya || b instanceof fb) {
      var d = b.Qb(),
        e = d.length();
      return Ld(a, function () {
        return e;
      }, function (f) {
        return d.get(f);
      }, c);
    }
  }
  var Nd = function (a, b, c) {
      a = C(this, a);
      b = C(this, b);
      c = C(this, c);
      var d = this.h;
      return Md(function (e) {
        d.set(a, e);
        return d;
      }, b, c);
    },
    Od = function (a, b, c) {
      a = C(this, a);
      b = C(this, b);
      c = C(this, c);
      var d = this.h;
      return Md(function (e) {
        var f = Ca(d);
        Ba(f, a, e, !0);
        return f;
      }, b, c);
    },
    Pd = function (a, b, c) {
      a = C(this, a);
      b = C(this, b);
      c = C(this, c);
      var d = this.h;
      return Md(function (e) {
        var f = Ca(d);
        f.add(a, e);
        return f;
      }, b, c);
    },
    Rd = function (a, b, c) {
      a = C(this, a);
      b = C(this, b);
      c = C(this, c);
      var d = this.h;
      return Qd(function (e) {
        d.set(a, e);
        return d;
      }, b, c);
    },
    Sd = function (a, b, c) {
      a = C(this, a);
      b = C(this, b);
      c = C(this, c);
      var d = this.h;
      return Qd(function (e) {
        var f = Ca(d);
        Ba(f, a, e, !0);
        return f;
      }, b, c);
    },
    Td = function (a, b, c) {
      a = C(this, a);
      b = C(this, b);
      c = C(this, c);
      var d = this.h;
      return Qd(function (e) {
        var f = Ca(d);
        f.add(a, e);
        return f;
      }, b, c);
    };
  function Qd(a, b, c) {
    if ("string" === typeof b) return Ld(a, function () {
      return b.length;
    }, function (d) {
      return b[d];
    }, c);
    if (b instanceof ya) return Ld(a, function () {
      return b.length();
    }, function (d) {
      return b.get(d);
    }, c);
    throw new TypeError("The value is not iterable.");
  }
  var Ud = function (a, b, c, d) {
      function e(p, q) {
        for (var r = 0; r < f.length(); r++) {
          var t = f.get(r);
          q.add(t, p.get(t));
        }
      }
      var f = C(this, a);
      if (!(f instanceof ya)) throw Error("TypeError: Non-List argument given to ForLet instruction.");
      var g = this.h;
      d = C(this, d);
      var k = Ca(g);
      for (e(g, k); hb(k, b);) {
        var m = ib(k, d);
        if (m instanceof ta) {
          if ("break" === m.h) break;
          if ("return" === m.h) return m;
        }
        var n = Ca(g);
        e(k, n);
        hb(n, c);
        k = n;
      }
    },
    Vd = function (a) {
      a = C(this, a);
      var b = this.h,
        c = !1;
      if (c && !b.has(a)) throw new ReferenceError(a + " is not defined.");
      return b.get(a);
    },
    Wd = function (a, b) {
      var c;
      a = C(this, a);
      b = C(this, b);
      if (void 0 === a || null === a) throw Error("TypeError: cannot access property of " + a + ".");
      if (a instanceof jb || a instanceof ya || a instanceof fb) c = a.get(b);else if ("string" === typeof a) "length" === b ? c = a.length : va(b) && (c = a[b]);else if (a instanceof id) return;
      return c;
    },
    Xd = function (a, b) {
      return C(this, a) > C(this, b);
    },
    Yd = function (a, b) {
      return C(this, a) >= C(this, b);
    },
    Zd = function (a, b) {
      a = C(this, a);
      b = C(this, b);
      a instanceof id && (a = a.aa);
      b instanceof id && (b = b.aa);
      return a === b;
    },
    $d = function (a, b) {
      return !Zd.call(this, a, b);
    },
    ae = function (a, b, c) {
      var d = [];
      C(this, a) ? d = C(this, b) : c && (d = C(this, c));
      var e = ib(this.h, d);
      if (e instanceof ta) return e;
    },
    be = function (a, b) {
      return C(this, a) < C(this, b);
    },
    ce = function (a, b) {
      return C(this, a) <= C(this, b);
    },
    de = function (a, b) {
      return C(this, a) % C(this, b);
    },
    ee = function (a, b) {
      return C(this, a) * C(this, b);
    },
    fe = function (a) {
      return -C(this, a);
    },
    ge = function (a) {
      return !C(this, a);
    },
    he = function (a, b) {
      return !Jd.call(this, a, b);
    },
    ie = function () {
      return null;
    },
    je = function (a, b) {
      return C(this, a) || C(this, b);
    },
    ke = function (a, b) {
      var c = C(this, a);
      C(this, b);
      return c;
    },
    le = function (a) {
      return C(this, a);
    },
    me = function (a) {
      return Array.prototype.slice.apply(arguments);
    },
    pe = function (a) {
      return new ta("return", C(this, a));
    },
    qe = function (a, b, c) {
      a = C(this, a);
      b = C(this, b);
      c = C(this, c);
      if (null === a || void 0 === a) throw Error("TypeError: Can't set property " + b + " of " + a + ".");
      (a instanceof fb || a instanceof ya || a instanceof jb) && a.set(b, c);
      return c;
    },
    re = function (a, b) {
      return C(this, a) - C(this, b);
    },
    se = function (a, b, c) {
      a = C(this, a);
      var d = C(this, b),
        e = C(this, c);
      if (!Ha(d) || !Ha(e)) throw Error("Error: Malformed switch instruction.");
      for (var f, g = !1, k = 0; k < d.length; k++) if (g || a === C(this, d[k])) if (f = C(this, e[k]), f instanceof ta) {
        var m = f.h;
        if ("break" === m) return;
        if ("return" === m || "continue" === m) return f;
      } else g = !0;
      if (e.length === d.length + 1 && (f = C(this, e[e.length - 1]), f instanceof ta && ("return" === f.h || "continue" === f.h))) return f;
    },
    te = function (a, b, c) {
      return C(this, a) ? C(this, b) : C(this, c);
    },
    ue = function (a) {
      a = C(this, a);
      return a instanceof fb ? "function" : typeof a;
    },
    ve = function (a) {
      for (var b = this.h, c = 0; c < arguments.length; c++) {
        var d = arguments[c];
        "string" !== typeof d || b.add(d, void 0);
      }
    },
    we = function (a, b, c, d) {
      var e = C(this, d);
      if (C(this, c)) {
        var f = ib(this.h, e);
        if (f instanceof ta) {
          if ("break" === f.h) return;
          if ("return" === f.h) return f;
        }
      }
      for (; C(this, a);) {
        var g = ib(this.h, e);
        if (g instanceof ta) {
          if ("break" === g.h) break;
          if ("return" === g.h) return g;
        }
        C(this, b);
      }
    },
    xe = function (a) {
      return ~Number(C(this, a));
    },
    ye = function (a, b) {
      return Number(C(this, a)) << Number(C(this, b));
    },
    ze = function (a, b) {
      return Number(C(this, a)) >> Number(C(this, b));
    },
    Ae = function (a, b) {
      return Number(C(this, a)) >>> Number(C(this, b));
    },
    Be = function (a, b) {
      return Number(C(this, a)) & Number(C(this, b));
    },
    Ce = function (a, b) {
      return Number(C(this, a)) ^ Number(C(this, b));
    },
    De = function (a, b) {
      return Number(C(this, a)) | Number(C(this, b));
    };
  var Fe = function () {
    this.h = new lb();
    Ee(this);
  };
  Fe.prototype.execute = function (a) {
    return Ge(this.h.B(a));
  };
  var He = function (a, b, c) {
      return Ge(a.h.D(b, c));
    },
    Ee = function (a) {
      var b = function (d, e) {
        nb(a.h, d, String(e));
      };
      b("control", 49);
      b("fn", 51);
      b("list", 7);
      b("map", 8);
      b("undefined", 44);
      var c = function (d, e) {
        mb(a.h, String(d), e);
      };
      c(0, yd);
      c(1, zd);
      c(2, Ad);
      c(3, Bd);
      c(53, Cd);
      c(4, Dd);
      c(5, Ed);
      c(52, Fd);
      c(6, Gd);
      c(9, Ed);
      c(50, Hd);
      c(10, Id);
      c(12, Jd);
      c(13, Kd);
      c(47, Nd);
      c(54, Od);
      c(55, Pd);
      c(63, Ud);
      c(64, Rd);
      c(65, Sd);
      c(66, Td);
      c(15, Vd);
      c(16, Wd);
      c(17, Wd);
      c(18, Xd);
      c(19, Yd);
      c(20, Zd);
      c(21, $d);
      c(22, ae);
      c(23, be);
      c(24, ce);
      c(25, de);
      c(26, ee);
      c(27, fe);
      c(28, ge);
      c(29, he);
      c(45, ie);
      c(30, je);
      c(32, ke);
      c(33, ke);
      c(34, le);
      c(35, le);
      c(46, me);
      c(36, pe);
      c(43, qe);
      c(37, re);
      c(38, se);
      c(39, te);
      c(40, ue);
      c(41, ve);
      c(42, we);
      c(58, xe);
      c(57, ye);
      c(60, ze);
      c(61, Ae);
      c(56, Be);
      c(62, Ce);
      c(59, De);
    };
  function Ge(a) {
    if (a instanceof ta || a instanceof fb || a instanceof ya || a instanceof jb || a instanceof id || null === a || void 0 === a || "string" === typeof a || "number" === typeof a || "boolean" === typeof a) return a;
  }
  ;
  function Ie(a) {
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
  function Je(a) {
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
  function Ke(a, b) {
    var c = a[1] || 0,
      d = a[2] || 0;
    switch (b) {
      case 0:
        return "G1" + Ie(c) + Ie(d);
      case 1:
        return "G2" + Je(c) + Je(d);
      default:
        return "g1--";
    }
  }
  ;
  var Le = function () {
    var a = function (b) {
      return {
        toString: function () {
          return b;
        }
      };
    };
    return {
      Sj: a("consent"),
      Th: a("convert_case_to"),
      Uh: a("convert_false_to"),
      Vh: a("convert_null_to"),
      Wh: a("convert_true_to"),
      Xh: a("convert_undefined_to"),
      Qm: a("debug_mode_metadata"),
      ya: a("function"),
      Ng: a("instance_name"),
      Bk: a("live_only"),
      Ck: a("malware_disabled"),
      Dk: a("metadata"),
      Gk: a("original_activity_id"),
      Xm: a("original_vendor_template_id"),
      Wm: a("once_on_load"),
      Fk: a("once_per_event"),
      Ti: a("once_per_load"),
      dn: a("priority_override"),
      gn: a("respected_consent_types"),
      Xi: a("setup_tags"),
      ie: a("tag_id"),
      cj: a("teardown_tags")
    };
  }();
  var gf = [],
    hf = function (a) {
      return void 0 == gf[a] ? !1 : gf[a];
    };
  var jf;
  var kf = [],
    lf = [],
    mf = [],
    nf = [],
    of = [],
    pf = {},
    qf,
    rf,
    tf = function () {
      var a = sf;
      rf = rf || a;
    },
    uf = function (a) {},
    vf,
    wf = [],
    xf = function (a, b) {
      var c = {};
      c[Le.ya] = "__" + a;
      for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
      return c;
    },
    yf = function (a, b) {
      var c = a[Le.ya],
        d = b && b.event;
      if (!c) throw Error("Error: No function name given for function call.");
      var e = pf[c],
        f = b && 2 === b.type && d.Hh && e && -1 !== wf.indexOf(c),
        g = {},
        k = {},
        m;
      for (m in a) a.hasOwnProperty(m) && 0 === m.indexOf("vtp_") && (e && d && d.jj && d.jj(a[m]), e && (g[m] = a[m]), !e || f) && (k[m.substr(4)] = a[m]);
      e && d && d.ij && (g.vtp_gtmCachedValues = d.ij);
      if (b) {
        if (null == b.name) {
          var n;
          a: {
            var p = b.index;
            if (null == p) n = "";else {
              var q;
              switch (b.type) {
                case 2:
                  q = kf[p];
                  break;
                case 1:
                  q = nf[p];
                  break;
                default:
                  n = "";
                  break a;
              }
              var r = q && q[Le.Ng];
              n = r ? String(r) : "";
            }
          }
          b.name = n;
        }
        e && (g.vtp_gtmEntityIndex = b.index, g.vtp_gtmEntityName = b.name);
      }
      var t, u;
      e && (t = e(g));
      if (!e || f) u = jf(c, k, b);
      f && d && (td(t) ? typeof t !== typeof u && d.Hh(d.id, c) : t !== u && d.Hh(d.id, c));
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
            var g = kf[f];
            if (!g || b.mh(g)) return;
            c[f] = !0;
            var k = String(g[Le.Ng]);
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
              vf && (d = vf.Sk(d, m));
            } catch (y) {
              b.vj && b.vj(y, Number(f), k), d = !1;
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
              rf && (p = p || r === rf.jf);
              d.push(r);
            }
            return rf && p ? rf.Vk(d) : d.join("");
          case "escape":
            d = zf(a[1], b, c);
            if (rf && Ha(a[1]) && "macro" === a[1][0] && rf.Kl(a)) return rf.jm(d);
            d = String(d);
            for (var t = 2; t < a.length; t++) Me[a[t]] && (d = Me[a[t]](d));
            return d;
          case "tag":
            var u = a[1];
            if (!nf[u]) throw Error("Unable to resolve tag reference " + u + ".");
            return d = {
              oj: a[2],
              index: u
            };
          case "zb":
            var v = {
              arg0: a[2],
              arg1: a[3],
              ignore_case: a[5]
            };
            v[Le.ya] = a[1];
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
        return qf(Af(a, b, c));
      } catch (d) {
        JSON.stringify(a);
      }
      return 2;
    },
    Cf = function (a) {
      var b = a[Le.ya];
      if (!b) throw Error("Error: No function name given for function call.");
      return !!pf[b];
    };
  var Df = function (a, b, c) {
    var d;
    d = Error.call(this, c);
    this.message = d.message;
    "stack" in d && (this.stack = d.stack);
    this.h = a;
  };
  qa(Df, Error);
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
    this.bm = a;
    this.B = b;
    this.h = [];
  };
  qa(Ff, Error);
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
    for (var b = a.length - 1; 0 < b; b--) Fa(a[b].id) && a.splice(b++, 1);
    for (var c = a.length - 1; 0 < c; c--) a[c].line = a[c - 1].line;
    a.splice(0, 1);
    return a;
  }
  ;
  var Kf = function (a) {
      function b(r) {
        for (var t = 0; t < r.length; t++) d[r[t]] = !0;
      }
      for (var c = [], d = [], e = If(a), f = 0; f < lf.length; f++) {
        var g = lf[f],
          k = Jf(g, e);
        if (k) {
          for (var m = g.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
          b(g.block || []);
        } else null === k && b(g.block || []);
      }
      for (var p = [], q = 0; q < nf.length; q++) c[q] && !d[q] && (p[q] = !0);
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
        void 0 === b[c] && (b[c] = Bf(mf[c], a));
        return b[c];
      };
    };
  var Lf = {
    Sk: function (a, b) {
      b[Le.Th] && "string" === typeof a && (a = 1 == b[Le.Th] ? a.toLowerCase() : a.toUpperCase());
      b.hasOwnProperty(Le.Vh) && null === a && (a = b[Le.Vh]);
      b.hasOwnProperty(Le.Xh) && void 0 === a && (a = b[Le.Xh]);
      b.hasOwnProperty(Le.Wh) && !0 === a && (a = b[Le.Wh]);
      b.hasOwnProperty(Le.Uh) && !1 === a && (a = b[Le.Uh]);
      return a;
    }
  };
  var Mf = function () {
    this.h = {};
  };
  function Nf(a, b, c, d) {
    if (a) for (var e = 0; e < a.length; e++) {
      var f = void 0,
        g = "A policy function denied the permission request";
      try {
        f = a[e].call(void 0, b, c, d), g += ".";
      } catch (k) {
        g = "string" === typeof k ? g + (": " + k) : k instanceof Error ? g + (": " + k.message) : g + ".";
      }
      if (!f) throw new Df(c, d, g);
    }
  }
  function Of(a, b, c) {
    return function () {
      var d = arguments[0];
      if (d) {
        var e = a.h[d],
          f = a.h.all;
        if (e || f) {
          var g = c.apply(void 0, Array.prototype.slice.call(arguments, 0));
          Nf(e, b, d, g);
          Nf(f, b, d, g);
        }
      }
    };
  }
  ;
  var Sf = function () {
      var a = data.permissions || {},
        b = Pf.ctid,
        c = this;
      this.B = new Mf();
      this.h = {};
      var d = {},
        e = Of(this.B, b, function () {
          var f = arguments[0];
          return f && d[f] ? d[f].apply(void 0, Array.prototype.slice.call(arguments, 0)) : {};
        });
      l(a, function (f, g) {
        var k = {};
        l(g, function (m, n) {
          var p = Qf(m, n);
          k[m] = p.assert;
          d[m] || (d[m] = p.J);
        });
        c.h[f] = function (m, n) {
          var p = k[m];
          if (!p) throw Rf(m, {}, "The requested permission " + m + " is not configured.");
          var q = Array.prototype.slice.call(arguments, 0);
          p.apply(void 0, q);
          e.apply(void 0, q);
        };
      });
    },
    Uf = function (a) {
      return Tf.h[a] || function () {};
    };
  function Qf(a, b) {
    var c = xf(a, b);
    c.vtp_permissionName = a;
    c.vtp_createPermissionError = Rf;
    try {
      return yf(c);
    } catch (d) {
      return {
        assert: function (e) {
          throw new Df(e, {}, "Permission " + e + " is unknown.");
        },
        J: function () {
          for (var e = {}, f = 0; f < arguments.length; ++f) e["arg" + (f + 1)] = arguments[f];
          return e;
        }
      };
    }
  }
  function Rf(a, b, c) {
    return new Df(a, b, c);
  }
  ;
  var Vf = !1;
  var Wf = {};
  Wf.Nm = Qa('');
  Wf.Xk = Qa('');
  var Xf = Vf,
    Yf = Wf.Xk,
    Zf = Wf.Nm;
  var mg = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];
  function ng(a, b) {
    a = String(a);
    b = String(b);
    var c = a.length - b.length;
    return 0 <= c && a.indexOf(b, c) === c;
  }
  var og = new La();
  function pg(a, b, c) {
    var d = c ? "i" : void 0;
    try {
      var e = String(b) + d,
        f = og.get(e);
      f || (f = new RegExp(b, d), og.set(e, f));
      return f.test(a);
    } catch (g) {
      return !1;
    }
  }
  function qg(a, b) {
    return 0 <= String(a).indexOf(String(b));
  }
  function rg(a, b) {
    return String(a) === String(b);
  }
  function sg(a, b) {
    return Number(a) >= Number(b);
  }
  function tg(a, b) {
    return Number(a) <= Number(b);
  }
  function ug(a, b) {
    return Number(a) > Number(b);
  }
  function vg(a, b) {
    return Number(a) < Number(b);
  }
  function wg(a, b) {
    return 0 === String(a).indexOf(String(b));
  }
  ;
  var Fg = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;
  function Gg(a, b) {
    return "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[a << 2 | b];
  }
  ;
  var Hg = /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i,
    Ig = {
      Fn: "function",
      DustMap: "Object",
      List: "Array"
    },
    K = function (a, b, c) {
      for (var d = 0; d < b.length; d++) {
        var e = Hg.exec(b[d]);
        if (!e) throw Error("Internal Error in " + a);
        var f = e[1],
          g = "!" === e[2],
          k = e[3],
          m = c[d];
        if (null == m) {
          if (g) throw Error("Error in " + a + ". Required argument " + f + " not supplied.");
        } else if ("*" !== k) {
          var n = typeof m;
          m instanceof fb ? n = "Fn" : m instanceof ya ? n = "List" : m instanceof jb ? n = "DustMap" : m instanceof id && (n = "OpaqueValue");
          if (n != k) throw Error("Error in " + a + ". Argument " + f + " has type " + (Ig[n] || n) + ", which does not match required type " + (Ig[k] || k) + ".");
        }
      }
    };
  function Jg(a) {
    return "" + a;
  }
  function Kg(a, b) {
    var c = [];
    return c;
  }
  ;
  var Lg = function (a, b) {
      var c = new fb(a, function () {
        for (var d = Array.prototype.slice.call(arguments, 0), e = 0; e < d.length; e++) d[e] = C(this, d[e]);
        return b.apply(this, d);
      });
      c.sc();
      return c;
    },
    Mg = function (a, b) {
      var c = new jb(),
        d;
      for (d in b) if (b.hasOwnProperty(d)) {
        var e = b[d];
        Ea(e) ? c.set(d, Lg(a + "_" + d, e)) : od(e) ? c.set(d, Mg(a + "_" + d, e)) : (Fa(e) || h(e) || "boolean" === typeof e) && c.set(d, e);
      }
      c.sc();
      return c;
    };
  var Ng = function (a, b) {
    K(F(this), ["apiName:!string", "message:?string"], arguments);
    var c = {},
      d = new jb();
    return d = Mg("AssertApiSubject", c);
  };
  var Og = function (a, b) {
    K(F(this), ["actual:?*", "message:?string"], arguments);
    if (a instanceof kd) throw Error("Argument actual cannot have type Promise. Assertions on asynchronous code aren't supported.");
    var c = {},
      d = new jb();
    return d = Mg("AssertThatSubject", c);
  };
  function Pg(a) {
    return function () {
      for (var b = [], c = this.h, d = 0; d < arguments.length; ++d) b.push(rd(arguments[d], c));
      return qd(a.apply(null, b));
    };
  }
  var Rg = function () {
    for (var a = Math, b = Qg, c = {}, d = 0; d < b.length; d++) {
      var e = b[d];
      a.hasOwnProperty(e) && (c[e] = Pg(a[e].bind(a)));
    }
    return c;
  };
  var Sg = function (a) {
    var b;
    return b;
  };
  var Tg = function (a) {
    var b;
    return b;
  };
  var Ug = function (a) {
    try {
      return encodeURI(a);
    } catch (b) {}
  };
  var Vg = function (a) {
    try {
      return encodeURIComponent(a);
    } catch (b) {}
  };
  function Wg(a, b) {
    var c = !1;
    return c;
  }
  Wg.H = "internal.evaluateBooleanExpression";
  var ah = function (a) {
    K(F(this), ["message:?string"], arguments);
  };
  var bh = function (a, b) {
    K(F(this), ["min:!number", "max:!number"], arguments);
    return Ka(a, b);
  };
  var ch = function () {
    return new Date().getTime();
  };
  var dh = function (a) {
    if (null === a) return "null";
    if (a instanceof ya) return "array";
    if (a instanceof fb) return "function";
    if (a instanceof id) {
      a = a.aa;
      if (void 0 === a.constructor || void 0 === a.constructor.name) {
        var b = String(a);
        return b.substring(8, b.length - 1);
      }
      return String(a.constructor.name);
    }
    return typeof a;
  };
  var eh = function (a) {
    function b(c) {
      return function (d) {
        try {
          return c(d);
        } catch (e) {
          (Xf || Zf) && a.call(this, e.message);
        }
      };
    }
    return {
      parse: b(function (c) {
        return qd(JSON.parse(c));
      }),
      stringify: b(function (c) {
        return JSON.stringify(rd(c));
      })
    };
  };
  var fh = function (a) {
    return Pa(rd(a, this.h));
  };
  var gh = function (a) {
    return Number(rd(a, this.h));
  };
  var hh = function (a) {
    return null === a ? "null" : void 0 === a ? "undefined" : a.toString();
  };
  var ih = function (a, b, c) {
    var d = null,
      e = !1;
    return e ? d : null;
  };
  var Qg = "floor ceil round max min abs pow sqrt".split(" ");
  var jh = function () {
      var a = {};
      return {
        ol: function (b) {
          return a.hasOwnProperty(b) ? a[b] : void 0;
        },
        Em: function (b, c) {
          a[b] = c;
        },
        reset: function () {
          a = {};
        }
      };
    },
    kh = function (a, b) {
      return function () {
        var c = Array.prototype.slice.call(arguments, 0);
        c.unshift(b);
        return fb.prototype.h.apply(a, c);
      };
    },
    lh = function (a, b) {
      K(F(this), ["apiName:!string", "mock:?*"], arguments);
    };
  var mh = {};
  mh.keys = function (a) {
    return new ya();
  };
  mh.values = function (a) {
    return new ya();
  };
  mh.entries = function (a) {
    return new ya();
  };
  mh.freeze = function (a) {
    return a;
  };
  mh.delete = function (a, b) {
    return !1;
  };
  var L = function (a, b, c) {
    var d = a.h.h;
    if (!d) throw Error("Missing program state.");
    if (d.vm) {
      try {
        d.gj.apply(null, Array.prototype.slice.call(arguments, 1));
      } catch (e) {
        throw vb("TAGGING", 21), e;
      }
      return;
    }
    d.gj.apply(null, Array.prototype.slice.call(arguments, 1));
  };
  var oh = function () {
    this.h = {};
    this.B = {};
  };
  oh.prototype.get = function (a, b) {
    var c = this.h.hasOwnProperty(a) ? this.h[a] : void 0;
    return c;
  };
  oh.prototype.add = function (a, b, c) {
    if (this.h.hasOwnProperty(a)) throw "Attempting to add a function which already exists: " + a + ".";
    if (this.B.hasOwnProperty(a)) throw "Attempting to add an API with an existing private API name: " + a + ".";
    this.h[a] = c ? void 0 : Ea(b) ? Lg(a, b) : Mg(a, b);
  };
  function ph(a, b) {
    var c = void 0;
    return c;
  }
  ;
  function qh() {
    var a = {};
    return a;
  }
  ;
  var sh = function (a) {
      return rh ? H.querySelectorAll(a) : null;
    },
    th = function (a, b) {
      if (!rh) return null;
      if (Element.prototype.closest) try {
        return a.closest(b);
      } catch (e) {
        return null;
      }
      var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
        d = a;
      if (!H.documentElement.contains(d)) return null;
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
    uh = !1;
  if (H.querySelectorAll) try {
    var vh = H.querySelectorAll(":root");
    vh && 1 == vh.length && vh[0] == H.documentElement && (uh = !0);
  } catch (a) {}
  var rh = uh;
  var M = function (a) {
    vb("GTM", a);
  };
  var N = {
      g: {
        Fb: "ad_personalization",
        I: "ad_storage",
        O: "ad_user_data",
        R: "analytics_storage",
        Sa: "region",
        md: "consent_updated",
        nd: "wait_for_update",
        Wj: "ads",
        Vf: "all",
        Xj: "android",
        Yj: "chrome",
        Zj: "playstore",
        bk: "search",
        dk: "shopping",
        ek: "youtube",
        Yh: "app_remove",
        Zh: "app_store_refund",
        ai: "app_store_subscription_cancel",
        bi: "app_store_subscription_convert",
        di: "app_store_subscription_renew",
        Xf: "add_payment_info",
        Yf: "add_shipping_info",
        ac: "add_to_cart",
        bc: "remove_from_cart",
        Zf: "view_cart",
        Gb: "begin_checkout",
        fc: "select_item",
        Ya: "view_item_list",
        pb: "select_promotion",
        Za: "view_promotion",
        na: "purchase",
        hc: "refund",
        Ca: "view_item",
        ag: "add_to_wishlist",
        fk: "exception",
        ei: "first_open",
        fi: "first_visit",
        oa: "gtag.config",
        Ka: "gtag.get",
        gi: "in_app_purchase",
        ic: "page_view",
        gk: "screen_view",
        hi: "session_start",
        hk: "timing_complete",
        ik: "track_social",
        pd: "user_engagement",
        qb: "gclid",
        qa: "ads_data_redaction",
        fa: "allow_ad_personalization_signals",
        Qe: "allow_custom_scripts",
        Re: "allow_display_features",
        rd: "allow_enhanced_conversions",
        rb: "allow_google_signals",
        Ha: "allow_interest_groups",
        jk: "app_id",
        kk: "app_installer_id",
        lk: "app_name",
        mk: "app_version",
        jc: "auid",
        ii: "auto_detection_enabled",
        Hb: "aw_remarketing",
        Se: "aw_remarketing_only",
        sd: "discount",
        ud: "aw_feed_country",
        vd: "aw_feed_language",
        Z: "items",
        wd: "aw_merchant_id",
        cg: "aw_basket_type",
        Ac: "campaign_content",
        Bc: "campaign_id",
        Cc: "campaign_medium",
        Dc: "campaign_name",
        Ec: "campaign",
        Fc: "campaign_source",
        Gc: "campaign_term",
        ab: "client_id",
        ji: "content_group",
        ki: "content_type",
        La: "conversion_cookie_prefix",
        Hc: "conversion_id",
        Da: "conversion_linker",
        Ib: "conversion_api",
        Ta: "cookie_domain",
        Ia: "cookie_expires",
        Ua: "cookie_flags",
        kc: "cookie_name",
        Ic: "cookie_path",
        Ma: "cookie_prefix",
        sb: "cookie_update",
        mc: "country",
        ra: "currency",
        xd: "customer_lifetime_value",
        Jc: "custom_map",
        li: "gcldc",
        mi: "debug_mode",
        ba: "developer_id",
        ni: "disable_merchant_reported_purchases",
        Kc: "dc_custom_params",
        oi: "dc_natural_search",
        dg: "dynamic_event_settings",
        eg: "affiliation",
        yd: "checkout_option",
        Te: "checkout_step",
        fg: "coupon",
        Lc: "item_list_name",
        Ue: "list_name",
        ri: "promotions",
        Mc: "shipping",
        Ve: "tax",
        zd: "engagement_time_msec",
        Nc: "enhanced_client_id",
        Ad: "enhanced_conversions",
        gg: "enhanced_conversions_automatic_settings",
        Bd: "estimated_delivery_date",
        We: "euid_logged_in_state",
        Oc: "event_callback",
        nk: "event_category",
        tb: "event_developer_id_string",
        pk: "event_label",
        hg: "event",
        Cd: "event_settings",
        Dd: "event_timeout",
        qk: "description",
        rk: "fatal",
        si: "experiments",
        Xe: "firebase_id",
        Ed: "first_party_collection",
        Fd: "_x_20",
        Jb: "_x_19",
        ig: "fledge",
        jg: "flight_error_code",
        kg: "flight_error_message",
        ui: "fl_activity_category",
        vi: "fl_activity_group",
        lg: "fl_advertiser_id",
        wi: "fl_ar_dedupe",
        xi: "fl_random_number",
        yi: "tran",
        zi: "u",
        Gd: "gac_gclid",
        nc: "gac_wbraid",
        mg: "gac_wbraid_multiple_conversions",
        ng: "ga_restrict_domain",
        Ye: "ga_temp_client_id",
        Hd: "gdpr_applies",
        og: "geo_granularity",
        ub: "value_callback",
        eb: "value_key",
        sk: "google_ono",
        fb: "google_signals",
        pg: "google_tld",
        Id: "groups",
        qg: "gsa_experiment_id",
        rg: "iframe_state",
        Jd: "ignore_referrer",
        Ze: "internal_traffic_results",
        Kb: "is_legacy_converted",
        wb: "is_legacy_loaded",
        Kd: "is_passthrough",
        Ai: "_lps",
        Ja: "language",
        af: "legacy_developer_id_string",
        Ea: "linker",
        oc: "accept_incoming",
        xb: "decorate_forms",
        U: "domains",
        Lb: "url_position",
        sg: "method",
        tk: "name",
        Pc: "new_customer",
        ug: "non_interaction",
        Bi: "optimize_id",
        Ci: "page_hostname",
        Qc: "page_path",
        Fa: "page_referrer",
        yb: "page_title",
        vg: "passengers",
        wg: "phone_conversion_callback",
        Di: "phone_conversion_country_code",
        xg: "phone_conversion_css_class",
        Ei: "phone_conversion_ids",
        yg: "phone_conversion_number",
        zg: "phone_conversion_options",
        Rc: "quantity",
        Sc: "redact_device_info",
        bf: "redact_enhanced_user_id",
        Fi: "redact_ga_client_id",
        Gi: "redact_user_id",
        Ld: "referral_exclusion_definition",
        Mb: "restricted_data_processing",
        Hi: "retoken",
        uk: "sample_rate",
        cf: "screen_name",
        zb: "screen_resolution",
        Ii: "search_term",
        Na: "send_page_view",
        Nb: "send_to",
        Md: "server_container_url",
        Tc: "session_duration",
        Nd: "session_engaged",
        df: "session_engaged_time",
        Ab: "session_id",
        Od: "session_number",
        Uc: "delivery_postal_code",
        Ag: "temporary_client_id",
        ef: "topmost_url",
        Ji: "tracking_id",
        ff: "traffic_type",
        wa: "transaction_id",
        Ob: "transport_url",
        Bg: "trip_type",
        Pb: "update",
        Bb: "url_passthrough",
        Qd: "_user_agent_architecture",
        Rd: "_user_agent_bitness",
        Sd: "_user_agent_full_version_list",
        Td: "_user_agent_mobile",
        Ud: "_user_agent_model",
        Vd: "_user_agent_platform",
        Wd: "_user_agent_platform_version",
        Xd: "_user_agent_wow64",
        xa: "user_data",
        Cg: "user_data_auto_latency",
        Dg: "user_data_auto_meta",
        Eg: "user_data_auto_multi",
        Fg: "user_data_auto_selectors",
        Gg: "user_data_auto_status",
        hf: "user_data_mode",
        Yd: "user_data_settings",
        Aa: "user_id",
        Oa: "user_properties",
        Ki: "_user_region",
        Hg: "us_privacy_string",
        ia: "value",
        qc: "wbraid",
        Ig: "wbraid_multiple_conversions",
        Qi: "_host_name",
        Ri: "_in_page_command",
        Si: "_is_passthrough_cid",
        ce: "non_personalized_ads",
        he: "_sst_parameters",
        cb: "conversion_label",
        sa: "page_location",
        vb: "global_developer_id_string",
        Pd: "tc_privacy_string"
      }
    },
    Th = {},
    Uh = Object.freeze((Th[N.g.fa] = 1, Th[N.g.Re] = 1, Th[N.g.rd] = 1, Th[N.g.rb] = 1, Th[N.g.Z] = 1, Th[N.g.Ta] = 1, Th[N.g.Ia] = 1, Th[N.g.Ua] = 1, Th[N.g.kc] = 1, Th[N.g.Ic] = 1, Th[N.g.Ma] = 1, Th[N.g.sb] = 1, Th[N.g.Jc] = 1, Th[N.g.ba] = 1, Th[N.g.dg] = 1, Th[N.g.Oc] = 1, Th[N.g.Cd] = 1, Th[N.g.Dd] = 1, Th[N.g.Ed] = 1, Th[N.g.ng] = 1, Th[N.g.fb] = 1, Th[N.g.pg] = 1, Th[N.g.Id] = 1, Th[N.g.Ze] = 1, Th[N.g.Kb] = 1, Th[N.g.wb] = 1, Th[N.g.Ea] = 1, Th[N.g.bf] = 1, Th[N.g.Ld] = 1, Th[N.g.Mb] = 1, Th[N.g.Na] = 1, Th[N.g.Nb] = 1, Th[N.g.Md] = 1, Th[N.g.Tc] = 1, Th[N.g.df] = 1, Th[N.g.Uc] = 1, Th[N.g.Ob] = 1, Th[N.g.Pb] = 1, Th[N.g.Yd] = 1, Th[N.g.Oa] = 1, Th[N.g.he] = 1, Th));
  Object.freeze([N.g.sa, N.g.Fa, N.g.yb, N.g.Ja, N.g.cf, N.g.Aa, N.g.Xe, N.g.ji]);
  var Vh = {},
    Wh = Object.freeze((Vh[N.g.Yh] = 1, Vh[N.g.Zh] = 1, Vh[N.g.ai] = 1, Vh[N.g.bi] = 1, Vh[N.g.di] = 1, Vh[N.g.ei] = 1, Vh[N.g.fi] = 1, Vh[N.g.gi] = 1, Vh[N.g.hi] = 1, Vh[N.g.pd] = 1, Vh)),
    Xh = {},
    Yh = Object.freeze((Xh[N.g.Xf] = 1, Xh[N.g.Yf] = 1, Xh[N.g.ac] = 1, Xh[N.g.bc] = 1, Xh[N.g.Zf] = 1, Xh[N.g.Gb] = 1, Xh[N.g.fc] = 1, Xh[N.g.Ya] = 1, Xh[N.g.pb] = 1, Xh[N.g.Za] = 1, Xh[N.g.na] = 1, Xh[N.g.hc] = 1, Xh[N.g.Ca] = 1, Xh[N.g.ag] = 1, Xh)),
    Zh = Object.freeze([N.g.fa, N.g.rb, N.g.sb, N.g.Pb]),
    $h = Object.freeze([].concat(Zh)),
    ai = Object.freeze([N.g.Ia, N.g.Dd, N.g.Tc, N.g.df, N.g.zd]),
    bi = Object.freeze([].concat(ai)),
    ci = {},
    di = (ci[N.g.I] = "1", ci[N.g.R] = "2", ci[N.g.O] = "3", ci[N.g.Fb] = "4", ci),
    ei = {},
    fi = Object.freeze((ei[N.g.fa] = 1, ei[N.g.rd] = 1, ei[N.g.Ha] = 1, ei[N.g.Hb] = 1, ei[N.g.Se] = 1, ei[N.g.sd] = 1, ei[N.g.ud] = 1, ei[N.g.vd] = 1, ei[N.g.Z] = 1, ei[N.g.wd] = 1, ei[N.g.La] = 1, ei[N.g.Da] = 1, ei[N.g.Ta] = 1, ei[N.g.Ia] = 1, ei[N.g.Ua] = 1, ei[N.g.Ma] = 1, ei[N.g.ra] = 1, ei[N.g.xd] = 1, ei[N.g.ba] = 1, ei[N.g.ni] = 1, ei[N.g.Ad] = 1, ei[N.g.Bd] = 1, ei[N.g.Xe] = 1, ei[N.g.Ed] = 1, ei[N.g.Kb] = 1, ei[N.g.wb] = 1, ei[N.g.Ja] = 1, ei[N.g.Pc] = 1, ei[N.g.sa] = 1, ei[N.g.Fa] = 1, ei[N.g.wg] = 1, ei[N.g.xg] = 1, ei[N.g.yg] = 1, ei[N.g.zg] = 1, ei[N.g.Mb] = 1, ei[N.g.Na] = 1, ei[N.g.Nb] = 1, ei[N.g.Md] = 1, ei[N.g.Uc] = 1, ei[N.g.wa] = 1, ei[N.g.Ob] = 1, ei[N.g.Pb] = 1, ei[N.g.Bb] = 1, ei[N.g.xa] = 1, ei[N.g.Aa] = 1, ei[N.g.ia] = 1, ei)),
    gi = {},
    hi = Object.freeze((gi[N.g.bk] = "s", gi[N.g.ek] = "y", gi[N.g.Xj] = "n", gi[N.g.Yj] = "c", gi[N.g.Zj] = "p", gi[N.g.dk] = "h", gi[N.g.Wj] = "a", gi));
  Object.freeze(N.g);
  var ii = {},
    ji = z.google_tag_manager = z.google_tag_manager || {},
    ki = Math.random();
  ii.Pg = "38g0";
  ii.fe = Number("0") || 0;
  ii.ka = "dataLayer";
  ii.Uj = "ChAI8NCBpwYQt5+cxZ7f1aFJEiYATU77VCpD5G+YrHgwyQfqnemS89Imzq2xUbV8VJzEu4z22hrHMxoCELE\x3d";
  var li = {
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
    mi = {
      __paused: 1,
      __tg: 1
    },
    ni;
  for (ni in li) li.hasOwnProperty(ni) && (mi[ni] = 1);
  var oi = Qa(""),
    pi,
    qi = !1;
  qi = !0;
  pi = qi;
  var ri,
    si = !1;
  ri = si;
  var ti,
    ui = !1;
  ti = ui;
  var vi,
    wi = !1;
  vi = wi;
  ii.Pe = "www.googletagmanager.com";
  var xi = "" + ii.Pe + (pi ? "/gtag/js" : "/gtm.js"),
    yi = null,
    zi = null,
    Ai = {},
    Bi = {},
    Ci = {},
    Di = function () {
      var a = ji.sequence || 1;
      ji.sequence = a + 1;
      return a;
    };
  ii.Tj = "";
  var Ki = "";
  ii.qf = Ki;
  var Li = new La(),
    Mi = {},
    Ni = {},
    Qi = {
      name: ii.ka,
      set: function (a, b) {
        pd(bb(a, b), Mi);
        Oi();
      },
      get: function (a) {
        return Pi(a, 2);
      },
      reset: function () {
        Li = new La();
        Mi = {};
        Oi();
      }
    },
    Pi = function (a, b) {
      return 2 != b ? Li.get(a) : Ri(a);
    },
    Ri = function (a, b) {
      var c = a.split(".");
      b = b || [];
      for (var d = Mi, e = 0; e < c.length; e++) {
        if (null === d) return !1;
        if (void 0 === d) break;
        d = d[c[e]];
        if (-1 !== b.indexOf(d)) return;
      }
      return d;
    },
    Si = function (a, b) {
      Ni.hasOwnProperty(a) || (Li.set(a, b), pd(bb(a, b), Mi), Oi());
    },
    Ti = function () {
      for (var a = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], b = 0; b < a.length; b++) {
        var c = a[b],
          d = Pi(c, 1);
        if (Ha(d) || od(d)) d = pd(d);
        Ni[c] = d;
      }
    },
    Oi = function (a) {
      l(Ni, function (b, c) {
        Li.set(b, c);
        pd(bb(b), Mi);
        pd(bb(b, c), Mi);
        a && delete Ni[b];
      });
    },
    Ui = function (a, b) {
      var c,
        d = 1 !== (void 0 === b ? 2 : b) ? Ri(a) : Li.get(a);
      "array" === md(d) || "object" === md(d) ? c = pd(d) : c = d;
      return c;
    };
  var P = [];
  P[5] = !0;
  P[6] = !0;
  let globalProps = {};
  P[12] = !0;
  P[7] = !0;
  P[8] = !0;
  P[22] = !0;
  P[9] = !0;
  P[10] = !0;
  P[11] = !0;
  P[14] = !0;
  P[15] = !0;
  P[16] = !0;
  P[18] = !0;
  P[24] = !0;
  P[25] = !0;
  P[26] = !0;
  P[28] = !0;
  P[20] = !0;
  P[29] = !0;
  P[32] = !0;
  P[33] = !0;
  P[34] = !0;
  P[35] = !0;
  P[37] = !0;
  P[38] = !0;
  P[40] = !0;
  P[42] = !0;
  P[43] = !0;
  P[44] = !0;
  P[45] = !0;
  P[56] = !0;
  P[57] = !0;
  P[58] = !0;
  P[59] = !0;
  P[61] = !0;
  P[62] = !0;
  P[68] = !0;
  P[71] = !0;
  P[74] = !0;
  P[75] = !0;
  a: {
    for (var aj = void 0, bj = void 0, cj = 0; aj === bj;) if (aj = Math.floor(2 * Math.random()), bj = Math.floor(2 * Math.random()), cj++, 20 < cj) break a;
    aj ? P[78] = !0 : P[79] = !0;
  }
  Q(79) ? gf[6] = !0 : Q(78) && (gf[5] = !0);
  P[80] = !0;
  P[83] = !0;
  P[86] = !0;
  P[87] = !0;
  P[89] = !0;
  P[91] = !0;
  function Q(a) {
    return !!P[a];
  }
  var dj = function (a) {
    vb("HEALTH", a);
  };
  var ej;
  try {
    ej = JSON.parse(tb("eyIwIjoiSlAiLCIxIjoiSlAtMTMiLCIyIjpmYWxzZSwiMyI6Imdvb2dsZS5jby5qcCIsIjQiOiIiLCI1Ijp0cnVlLCI2IjpmYWxzZSwiNyI6ImFkX3N0b3JhZ2V8YW5hbHl0aWNzX3N0b3JhZ2V8YWRfdXNlcl9kYXRhfGFkX3BlcnNvbmFsaXphdGlvbiJ9"));
  } catch (a) {
    M(123), dj(2), ej = {};
  }
  var fj = function () {
      return ej["0"] || "";
    },
    gj = function () {
      return ej["1"] || "";
    },
    hj = function () {
      var a = !1;
      return a;
    },
    ij = function () {
      var a = "";
      return a;
    },
    jj = function () {
      var a = !1;
      a = !!ej["5"];
      return a;
    },
    kj = function () {
      var a = "";
      return a;
    };
  var lj = new function (a, b) {
    this.h = a;
    this.defaultValue = void 0 === b ? !1 : b;
  }(1933);
  var mj = function (a) {
    mj[" "](a);
    return a;
  };
  mj[" "] = function () {};
  var oj = function () {
    var a = nj,
      b = "kh";
    if (a.kh && a.hasOwnProperty(b)) return a.kh;
    var c = new a();
    return a.kh = c;
  };
  var nj = function () {
    var a = {};
    this.h = function () {
      var b = lj.h,
        c = lj.defaultValue;
      return null != a[b] ? a[b] : c;
    };
    this.B = function () {
      a[lj.h] = !0;
    };
  };
  var pj = !1,
    qj = !1,
    rj = {},
    sj = {},
    tj = !1,
    uj = {
      ad_storage: !1,
      ad_user_data: !1,
      ad_personalization: !1
    };
  function vj() {
    var a = Bc("google_tag_data", {});
    return a.ics = a.ics || new wj();
  }
  var wj = function () {
    this.entries = {};
    this.cps = {};
    this.wasSetLate = this.accessedAny = this.accessedDefault = this.usedSetCps = this.usedImplicit = this.usedUpdate = this.usedDefault = this.usedDeclare = this.active = !1;
    this.h = [];
  };
  wj.prototype.default = function (a, b, c, d, e, f) {
    this.usedDefault || !this.accessedDefault && !this.accessedAny || (this.wasSetLate = !0);
    this.usedDefault = this.active = !0;
    vb("TAGGING", 19);
    void 0 == b ? vb("TAGGING", 18) : xj(this, a, "granted" === b, c, d, e, f);
  };
  wj.prototype.waitForUpdate = function (a, b) {
    for (var c = 0; c < a.length; c++) xj(this, a[c], void 0, void 0, "", "", b);
  };
  var xj = function (a, b, c, d, e, f, g) {
    var k = a.entries,
      m = k[b] || {},
      n = m.region,
      p = d && h(d) ? d.toUpperCase() : void 0;
    e = e.toUpperCase();
    f = f.toUpperCase();
    if (yj(p, n, e, f)) {
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
        if (k[b] === r && r.quiet) {
          r.quiet = !1;
          var t = [b];
          if (hf(4)) for (var u in rj) rj.hasOwnProperty(u) && rj[u] === b && t.push(u);
          for (var v = 0; v < t.length; v++) zj(a, t[v]);
          a.notifyListeners();
          vb("TAGGING", 2);
        }
      }, g);
    }
  };
  aa = wj.prototype;
  aa.update = function (a, b) {
    this.usedDefault || this.usedUpdate || !this.accessedAny || (this.wasSetLate = !0);
    this.usedUpdate = this.active = !0;
    if (void 0 != b) {
      var c = this.getConsentState(a),
        d = this.entries,
        e = d[a] = d[a] || {};
      e.update = "granted" === b;
      var f = this.getConsentState(a),
        g = [a];
      if (hf(4)) for (var k in rj) rj.hasOwnProperty(k) && rj[k] === a && g.push(k);
      if (e.quiet) {
        e.quiet = !1;
        for (var m = 0; m < g.length; m++) zj(this, g[m]);
      } else if (f !== c) for (var n = 0; n < g.length; n++) zj(this, g[n]);
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
    if (yj(m, k, d, e)) {
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
    this.usedImplicit = this.active = !0;
    var c = this.entries,
      d = c[a] = c[a] || {};
    !1 !== d.implicit && (d.implicit = "granted" === b);
  };
  aa.getConsentState = function (a) {
    return Aj(this, a);
  };
  aa.setCps = function (a, b, c, d, e) {
    Bj(this.cps, a, b, c, d, e) && (this.usedSetCps = !0);
  };
  aa.addListener = function (a, b) {
    this.h.push({
      consentTypes: a,
      fl: b
    });
  };
  var zj = function (a, b) {
    for (var c = 0; c < a.h.length; ++c) {
      var d = a.h[c];
      Ha(d.consentTypes) && -1 !== d.consentTypes.indexOf(b) && (d.zj = !0);
    }
  };
  wj.prototype.notifyListeners = function (a, b) {
    for (var c = 0; c < this.h.length; ++c) {
      var d = this.h[c];
      if (d.zj) {
        d.zj = !1;
        try {
          d.fl({
            consentEventId: a,
            consentPriorityId: b
          });
        } catch (e) {}
      }
    }
  };
  function yj(a, b, c, d) {
    return "" === c || a === d ? !0 : a === c ? b !== d : !a && !b;
  }
  function Bj(a, b, c, d, e, f) {
    var g = a[b] || {},
      k = g.region,
      m = d && h(d) ? d.toUpperCase() : void 0;
    e = e.toUpperCase();
    f = f.toUpperCase();
    if (yj(m, k, e, f)) {
      var n = {
        enabled: "granted" === c,
        region: m
      };
      if ("" !== e || !1 !== g.enabled) return a[b] = n, !0;
    }
    return !1;
  }
  function Aj(a, b) {
    var c = a.entries,
      d = c[b] || {},
      e = d.update;
    if (void 0 !== e) return e ? 1 : 2;
    e = d.default;
    if (void 0 !== e) return e ? 1 : 2;
    if (hf(4) && rj.hasOwnProperty(b)) {
      var f = c[rj[b]] || {};
      e = f.update;
      if (void 0 !== e) return e ? 1 : 2;
      e = f.default;
      if (void 0 !== e) return e ? 1 : 2;
    }
    e = d.declare;
    if (void 0 !== e) return e ? 1 : 2;
    if (hf(3)) {
      e = d.implicit;
      if (void 0 !== e) return e ? 3 : 4;
      if (uj.hasOwnProperty(b)) return uj[b] ? 3 : 4;
    }
    return 0;
  }
  var Cj = function (a) {
      var b = vj();
      b.accessedAny = !0;
      switch (Aj(b, a)) {
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
    Dj = function (a) {
      var b = vj();
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
    Ej = function (a) {
      var b = vj();
      b.accessedAny = !0;
      return !(b.entries[a] || {}).quiet;
    },
    Fj = function () {
      if (!oj().h()) return !1;
      var a = vj();
      a.accessedAny = !0;
      return a.active;
    },
    Gj = function () {
      var a = vj();
      a.accessedDefault = !0;
      return a.usedDefault;
    },
    Hj = function (a, b) {
      vj().addListener(a, b);
    },
    Ij = function (a, b) {
      vj().notifyListeners(a, b);
    },
    Jj = function (a, b) {
      function c() {
        for (var e = 0; e < b.length; e++) if (!Ej(b[e])) return !0;
        return !1;
      }
      if (c()) {
        var d = !1;
        Hj(b, function (e) {
          d || c() || (d = !0, a(e));
        });
      } else a({});
    },
    Kj = function (a, b) {
      function c() {
        for (var f = [], g = 0; g < d.length; g++) {
          var k = d[g];
          Cj(k) && !e[k] && (f.push(k), e[k] = !0);
        }
        return f;
      }
      var d = h(b) ? [b] : b,
        e = {};
      c().length !== d.length && Hj(d, function (f) {
        var g = c();
        0 < g.length && (f.consentTypes = g, a(f));
      });
    };
  function Lj() {}
  function Mj() {}
  ;
  var Nj = [N.g.I, N.g.R, N.g.O, N.g.Fb],
    Oj = function (a) {
      for (var b = a[N.g.Sa], c = Array.isArray(b) ? b : [b], d = {
          ye: 0
        }; d.ye < c.length; d = {
        ye: d.ye
      }, ++d.ye) l(a, function (e) {
        return function (f, g) {
          if (f !== N.g.Sa) {
            var k = c[e.ye],
              m = fj(),
              n = gj();
            qj = !0;
            pj && vb("TAGGING", 20);
            vj().declare(f, g, k, m, n);
          }
        };
      }(d));
    },
    Pj = function (a) {
      var b = a[N.g.Sa];
      b && M(40);
      var c = a[N.g.nd];
      c && M(41);
      for (var d = Ha(b) ? b : [b], e = {
          ze: 0
        }; e.ze < d.length; e = {
        ze: e.ze
      }, ++e.ze) l(a, function (f) {
        return function (g, k) {
          if (g !== N.g.Sa && g !== N.g.nd) {
            var m = d[f.ze],
              n = Number(c),
              p = fj(),
              q = gj();
            pj = !0;
            qj && vb("TAGGING", 20);
            vj().default(g, k, m, p, q, n);
          }
        };
      }(e));
    },
    Qj = function (a, b) {
      l(a, function (c, d) {
        pj = !0;
        qj && vb("TAGGING", 20);
        vj().update(c, d);
      });
      Ij(b.eventId, b.priorityId);
    },
    Rj = function (a) {
      for (var b = a[N.g.Sa], c = Array.isArray(b) ? b : [b], d = {
          Ae: 0
        }; d.Ae < c.length; d = {
        Ae: d.Ae
      }, ++d.Ae) l(a, function (e) {
        return function (f, g) {
          if (f !== N.g.Sa) {
            var k = c[e.Ae],
              m = fj(),
              n = gj();
            vj().setCps(f, g, k, m, n);
          }
        };
      }(d));
    },
    Sj = function (a) {
      for (var b = a[N.g.Sa], c = Array.isArray(b) ? b : [b], d = {
          ad: 0
        }; d.ad < c.length; d = {
        ad: d.ad
      }, ++d.ad) a.hasOwnProperty(N.g.Vf) && l(hi, function (e) {
        return function (f) {
          Bj(sj, f, a[N.g.Vf], c[e.ad], fj(), gj()) && (tj = !0);
        };
      }(d)), l(a, function (e) {
        return function (f, g) {
          f !== N.g.Sa && f !== N.g.Vf && Bj(sj, f, g, c[e.ad], fj(), gj()) && (tj = !0);
        };
      }(d));
    },
    S = function (a) {
      Array.isArray(a) || (a = [a]);
      return a.every(function (b) {
        return Cj(b);
      });
    },
    Tj = function (a, b) {
      Hj(a, b);
    },
    Uj = function (a, b) {
      Kj(a, b);
    },
    Vj = function (a, b) {
      Jj(a, b);
    };
  var Wj = function (a) {
      var b = String(a[Le.ya] || "").replace(/_/g, "");
      0 === b.indexOf("cvt") && (b = "cvt");
      return b;
    },
    Xj = 0 <= z.location.search.indexOf("?gtm_latency=") || 0 <= z.location.search.indexOf("&gtm_latency=");
  var Zj = function (a, b) {
      var c = Yj();
      c.pending || (c.pending = []);
      Ja(c.pending, function (d) {
        return d.target.ctid === a.ctid && d.target.isDestination === a.isDestination;
      }) || c.pending.push({
        target: a,
        onLoad: b
      });
    },
    ak = function () {
      this.container = {};
      this.destination = {};
      this.canonical = {};
      this.pending = [];
      this.siloed = [];
    },
    Yj = function () {
      var a = Bc("google_tag_data", {}),
        b = a.tidr;
      b || (b = new ak(), a.tidr = b);
      return b;
    };
  var bk = {},
    ck = !1,
    Pf = {
      ctid: "UA-1304930-31",
      Sg: "",
      If: "UA-1304930-31",
      yj: "UA-1304930-31"
    };
  bk.kf = Qa("");
  var ek = function () {
      var a = Pf.If ? Pf.If.split("|") : [Pf.ctid];
      return ck ? a.map(dk) : a;
    },
    gk = function () {
      var a = fk();
      return ck ? a.map(dk) : a;
    },
    ik = function () {
      return hk(Pf.ctid);
    },
    jk = function () {
      return hk(Pf.Sg || "_" + Pf.ctid);
    },
    fk = function () {
      return Pf.yj ? Pf.yj.split("|") : [];
    },
    kk = function (a) {
      var b = Yj();
      return a.isDestination ? b.destination[a.ctid] : b.container[a.ctid];
    },
    hk = function (a) {
      return ck ? dk(a) : a;
    },
    dk = function (a) {
      return "siloed_" + a;
    },
    lk = function (a) {
      a = String(a);
      return ck && 0 === a.indexOf("siloed_") ? a.substring(7) : a;
    },
    mk = function () {
      var a = !1;
      if (a) {
        var b = Yj();
        if (b.siloed) {
          for (var c = [], d = Pf.If ? Pf.If.split("|") : [Pf.ctid], e = fk(), f = {}, g = 0; g < b.siloed.length; f = {
            ne: f.ne
          }, g++) f.ne = b.siloed[g], !ck && Ja(f.ne.isDestination ? e : d, function (k) {
            return function (m) {
              return m === k.ne.ctid;
            };
          }(f)) ? ck = !0 : c.push(f.ne);
          b.siloed = c;
        }
      }
    };
  function nk() {
    var a = Yj();
    if (a.pending) {
      for (var b, c = [], d = !1, e = ek(), f = gk(), g = {}, k = 0; k < a.pending.length; g = {
        gd: g.gd
      }, k++) g.gd = a.pending[k], Ja(g.gd.target.isDestination ? f : e, function (m) {
        return function (n) {
          return n === m.gd.target.ctid;
        };
      }(g)) ? d || (b = g.gd.onLoad, d = !0) : c.push(g.gd);
      a.pending = c;
      if (b) try {
        b(jk());
      } catch (m) {}
    }
  }
  var ok = function () {
      for (var a = Yj(), b = ek(), c = 0; c < b.length; c++) {
        var d = a.container[b[c]];
        d ? (d.state = 2, d.containers = ek(), d.destinations = gk()) : a.container[b[c]] = {
          state: 2,
          containers: ek(),
          destinations: gk()
        };
      }
      for (var e = gk(), f = 0; f < e.length; f++) {
        var g = a.destination[e[f]];
        g && 0 === g.state && M(93);
        g ? (g.state = 2, g.containers = ek(), g.destinations = gk()) : a.destination[e[f]] = {
          state: 2,
          containers: ek(),
          destinations: gk()
        };
      }
      a.canonical[jk()] = {};
      nk();
    },
    pk = function (a) {
      return !!Yj().container[a];
    },
    qk = function () {
      return {
        ctid: ik(),
        isDestination: bk.kf
      };
    };
  function rk(a) {
    var b = Yj();
    (b.siloed = b.siloed || []).push(a);
  }
  var sk = function () {
      var a = Yj().container,
        b;
      for (b in a) if (a.hasOwnProperty(b) && 1 === a[b].state) return !0;
      return !1;
    },
    tk = function () {
      var a = {};
      l(Yj().destination, function (b, c) {
        0 === c.state && (a[b] = c);
      });
      return a;
    },
    uk = function (a) {
      return !!(a && a.parent && a.context && 1 === a.context.source && 0 !== a.parent.ctid.indexOf("GTM-"));
    };
  var vk = {
      sampleRate: "0.005000",
      Pj: "",
      Oj: Number("5"),
      nn: Number("")
    },
    wk = [];
  function xk(a) {
    wk.push(a);
  }
  var yk = !1,
    zk;
  if (!(zk = Xj)) {
    var Ak = Math.random(),
      Bk = vk.sampleRate;
    zk = Ak < Number(Bk);
  }
  var Ck = zk,
    Dk = "https://www.googletagmanager.com/a?id=" + Pf.ctid,
    Ek = void 0,
    Fk = {},
    Gk = void 0,
    Hk = new function () {
      var a = 5;
      0 < vk.Oj && (a = vk.Oj);
      this.h = 0;
      this.C = [];
      this.B = a;
    }(),
    Ik = 1E3;
  function Jk(a, b) {
    var c = Ek;
    if (void 0 === c) if (b) c = Di();else return "";
    for (var d = [Dk], e = 0; e < wk.length; e++) {
      var f = wk[e]({
        eventId: c,
        Zb: !!a,
        Fj: function () {
          yk = !0;
        }
      });
      "&" === f[0] && d.push(f);
    }
    d.push("&z=0");
    return d.join("");
  }
  function Kk() {
    Gk && (z.clearTimeout(Gk), Gk = void 0);
    if (void 0 !== Ek && Lk) {
      var a;
      (a = Fk[Ek]) || (a = Hk.h < Hk.B ? !1 : 1E3 > Ua() - Hk.C[Hk.h % Hk.B]);
      if (a || 0 >= Ik--) M(1), Fk[Ek] = !0;else {
        var b = Hk.h++ % Hk.B;
        Hk.C[b] = Ua();
        var c = Jk(!0);
        Jc(c);
        if (yk) {
          var d = c.replace("/a?", "/td?");
          Jc(d);
        }
        Lk = yk = !1;
      }
    }
  }
  var Lk = !1;
  function Mk(a) {
    Fk[a] || (a !== Ek && (Kk(), Ek = a), Lk = !0, Gk || (Gk = z.setTimeout(Kk, 500)), 2022 <= Jk().length && Kk());
  }
  var Nk = Ka();
  function Ok() {
    Nk = Ka();
  }
  function Pk() {
    return ["&v=3&t=t", "&pid=" + Nk].join("");
  }
  ;
  var Qk = function (a, b, c, d, e, f, g, k, m, n, p, q) {
      this.eventId = a;
      this.priorityId = b;
      this.h = c;
      this.K = d;
      this.C = e;
      this.D = f;
      this.T = g;
      this.B = k;
      this.eventMetadata = m;
      this.onSuccess = n;
      this.onFailure = p;
      this.isGtmEvent = q;
    },
    U = function (a, b, c) {
      if (void 0 !== a.h[b]) return a.h[b];
      if (void 0 !== a.K[b]) return a.K[b];
      if (void 0 !== a.C[b]) return a.C[b];
      Ck && Rk(a, a.D[b], a.T[b]) && (M(71), M(79));
      return void 0 !== a.D[b] ? a.D[b] : void 0 !== a.B[b] ? a.B[b] : c;
    },
    Sk = function (a) {
      function b(g) {
        for (var k = Object.keys(g), m = 0; m < k.length; ++m) c[k[m]] = 1;
      }
      var c = {};
      b(a.h);
      b(a.K);
      b(a.C);
      b(a.D);
      if (Ck) for (var d = Object.keys(a.T), e = 0; e < d.length; e++) {
        var f = d[e];
        if ("event" !== f && "gtm" !== f && "tagTypeBlacklist" !== f && !c.hasOwnProperty(f)) {
          M(71);
          M(80);
          break;
        }
      }
      return Object.keys(c);
    },
    Tk = function (a, b, c) {
      function d(m) {
        od(m) && l(m, function (n, p) {
          f = !0;
          e[n] = p;
        });
      }
      var e = {},
        f = !1;
      c && 1 !== c || (d(a.B[b]), d(a.D[b]), d(a.C[b]), d(a.K[b]));
      c && 2 !== c || d(a.h[b]);
      if (Ck) {
        var g = f,
          k = e;
        e = {};
        f = !1;
        c && 1 !== c || (d(a.B[b]), d(a.T[b]), d(a.C[b]), d(a.K[b]));
        c && 2 !== c || d(a.h[b]);
        if (f !== g || Rk(a, e, k)) M(71), M(81);
        f = g;
        e = k;
      }
      return f ? e : void 0;
    },
    Uk = function (a) {
      var b = [N.g.Ec, N.g.Ac, N.g.Bc, N.g.Cc, N.g.Dc, N.g.Fc, N.g.Gc],
        c = {},
        d = !1,
        e = function (k) {
          for (var m = 0; m < b.length; m++) void 0 !== k[b[m]] && (c[b[m]] = k[b[m]], d = !0);
          return d;
        };
      if (e(a.h) || e(a.K) || e(a.C)) return c;
      e(a.D);
      if (Ck) {
        var f = c,
          g = d;
        c = {};
        d = !1;
        e(a.T);
        Rk(a, c, f) && (M(71), M(82));
        c = f;
        d = g;
      }
      if (d) return c;
      e(a.B);
      return c;
    },
    Rk = function (a, b, c) {
      if (!Ck) return !1;
      try {
        if (b === c) return !1;
        var d = md(b);
        if (d !== md(c) || !(od(b) && od(c) || "array" === d)) return !0;
        if ("array" === d) {
          if (b.length !== c.length) return !0;
          for (var e = 0; e < b.length; e++) if (Rk(a, b[e], c[e])) return !0;
        } else {
          for (var f in c) if (!b.hasOwnProperty(f)) return !0;
          for (var g in b) if (!c.hasOwnProperty(g) || Rk(a, b[g], c[g])) return !0;
        }
      } catch (k) {
        M(72);
      }
      return !1;
    },
    Vk = function (a, b) {
      this.Lg = a;
      this.xk = b;
      this.D = {};
      this.be = {};
      this.h = {};
      this.K = {};
      this.B = {};
      this.ae = {};
      this.C = {};
      this.od = function () {};
      this.ob = function () {};
      this.T = !1;
    },
    Wk = function (a, b) {
      a.D = b;
      return a;
    },
    Xk = function (a, b) {
      a.be = b;
      return a;
    },
    Yk = function (a, b) {
      a.h = b;
      return a;
    },
    Zk = function (a, b) {
      a.K = b;
      return a;
    },
    $k = function (a, b) {
      a.B = b;
      return a;
    },
    al = function (a, b) {
      a.ae = b;
      return a;
    },
    bl = function (a, b) {
      a.C = b || {};
      return a;
    },
    cl = function (a, b) {
      a.od = b;
      return a;
    },
    dl = function (a, b) {
      a.ob = b;
      return a;
    },
    el = function (a, b) {
      a.T = b;
      return a;
    },
    fl = function (a) {
      return new Qk(a.Lg, a.xk, a.D, a.be, a.h, a.K, a.B, a.ae, a.C, a.od, a.ob, a.T);
    };
  function gl(a, b) {
    if ("" === a) return b;
    var c = Number(a);
    return isNaN(c) ? b : c;
  }
  ;
  var hl = function (a, b) {
      var c = function () {};
      c.prototype = a.prototype;
      var d = new c();
      a.apply(d, Array.prototype.slice.call(arguments, 1));
      return d;
    },
    il = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = null;
          c();
        }
      };
    };
  var jl = function (a, b, c) {
    a.addEventListener && a.addEventListener(b, c, !1);
  };
  function kl() {
    return Kb ? !!Rb && !!Rb.platform : !1;
  }
  function ll() {
    return Ub("iPhone") && !Ub("iPod") && !Ub("iPad");
  }
  function ml() {
    ll() || Ub("iPad") || Ub("iPod");
  }
  ;
  Wb();
  Vb() || Ub("Trident") || Ub("MSIE");
  Ub("Edge");
  !Ub("Gecko") || -1 != Qb().toLowerCase().indexOf("webkit") && !Ub("Edge") || Ub("Trident") || Ub("MSIE") || Ub("Edge");
  function jsHook() {
    Object.keys(window).forEach(key => {
      if (!globalProps.hasOwnProperty(key)) {
        const typeCheck = typeof window[key];
        globalProps[key] = {
          type: typeCheck,
          value: typeCheck === "function" ? undefined : window[key]
        };
      }
    });
  }
  -1 != Qb().toLowerCase().indexOf("webkit") && !Ub("Edge") && Ub("Mobile");
  kl() || Ub("Macintosh");
  kl() || Ub("Windows");
  (kl() ? "Linux" === Rb.platform : Ub("Linux")) || kl() || Ub("CrOS");
  var nl = ra.navigator || null;
  nl && (nl.appVersion || "").indexOf("X11");
  kl() || Ub("Android");
  ll();
  Ub("iPad");
  Ub("iPod");
  ml();
  Qb().toLowerCase().indexOf("kaios");
  var ol = function (a, b, c, d) {
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
    pl = /#|$/,
    ql = function (a, b) {
      var c = a.search(pl),
        d = ol(a, 0, b, c);
      if (0 > d) return null;
      var e = a.indexOf("&", d);
      if (0 > e || e > c) e = c;
      d += b.length + 1;
      return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "));
    },
    rl = /[?&]($|#)/,
    sl = function (a, b, c) {
      for (var d, e = a.search(pl), f = 0, g, k = []; 0 <= (g = ol(a, f, b, e));) k.push(a.substring(f, g)), f = Math.min(a.indexOf("&", g) + 1 || e, e);
      k.push(a.slice(f));
      d = k.join("").replace(rl, "$1");
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
  var tl = function (a) {
      try {
        var b;
        if (b = !!a && null != a.location.href) a: {
          try {
            mj(a.foo);
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
    ul = function (a, b) {
      if (a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
    };
  function vl(a) {
    if (!a || !H.head) return null;
    var b = wl("META");
    H.head.appendChild(b);
    b.httpEquiv = "origin-trial";
    b.content = a;
    return b;
  }
  var xl = function () {
      if (z.top == z) return 0;
      var a = z.location.ancestorOrigins;
      return a ? a[a.length - 1] == z.location.origin ? 1 : 2 : tl(z.top) ? 1 : 2;
    },
    wl = function (a, b) {
      b = void 0 === b ? document : b;
      return b.createElement(String(a).toLowerCase());
    };
  function yl(a, b, c, d) {
    d = void 0 === d ? !1 : d;
    a.google_image_requests || (a.google_image_requests = []);
    var e = wl("IMG", a.document);
    if (c) {
      var f = function () {
        if (c) {
          var g = a.google_image_requests,
            k = yb(g, e);
          0 <= k && Array.prototype.splice.call(g, k, 1);
        }
        e.removeEventListener && e.removeEventListener("load", f, !1);
        e.removeEventListener && e.removeEventListener("error", f, !1);
      };
      jl(e, "load", f);
      jl(e, "error", f);
    }
    d && (e.attributionSrc = "");
    e.src = b;
    a.google_image_requests.push(e);
  }
  var Al = function (a) {
      var b;
      b = void 0 === b ? !1 : b;
      var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
      ul(a, function (d, e) {
        if (d || 0 === d) c += "&" + e + "=" + encodeURIComponent("" + d);
      });
      zl(c, b);
    },
    zl = function (a, b) {
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
      } else yl(c, a, void 0 === b ? !1 : b, void 0 === d ? !1 : d);
    };
  var Bl = function () {};
  var Cl = function (a) {
      void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
      void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
      return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3;
    },
    Dl = function (a, b) {
      b = void 0 === b ? {} : b;
      this.B = a;
      this.h = null;
      this.K = {};
      this.ob = 0;
      var c;
      this.T = null != (c = b.Im) ? c : 500;
      var d;
      this.D = null != (d = b.jn) ? d : !1;
      this.C = null;
    };
  qa(Dl, Bl);
  var Fl = function (a) {
    return "function" === typeof a.B.__tcfapi || null != El(a);
  };
  Dl.prototype.addEventListener = function (a) {
    var b = this,
      c = {
        internalBlockOnErrors: this.D
      },
      d = il(function () {
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
      g ? (c = g, c.internalErrorState = Cl(c), c.internalBlockOnErrors = b.D, k && 0 === c.internalErrorState || (c.tcString = "tcunavailable", k || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
      a(c);
    };
    try {
      Gl(this, "addEventListener", f);
    } catch (g) {
      c.tcString = "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e), e = 0), d();
    }
  };
  Dl.prototype.removeEventListener = function (a) {
    a && a.listenerId && Gl(this, "removeEventListener", null, a.listenerId);
  };
  var Il = function (a, b, c) {
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
          var n = Hl(a.vendor.consents, void 0 === d ? "755" : d);
          m = n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? !0 : n && Hl(a.purpose.consents, b);
        } else m = !0;
      } else m = 1 === k ? a.purpose && a.vendor ? Hl(a.purpose.legitimateInterests, b) && Hl(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
      return m;
    },
    Hl = function (a, b) {
      return !(!a || !a[b]);
    },
    Gl = function (a, b, c, d) {
      c || (c = function () {});
      if ("function" === typeof a.B.__tcfapi) {
        var e = a.B.__tcfapi;
        e(b, 2, c, d);
      } else if (El(a)) {
        Jl(a);
        var f = ++a.ob;
        a.K[f] = c;
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
    El = function (a) {
      if (a.h) return a.h;
      var b;
      a: {
        for (var c = a.B, d = 0; 50 > d; ++d) {
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
    Jl = function (a) {
      a.C || (a.C = function (b) {
        try {
          var c;
          c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
          a.K[c.callId](c.returnValue, c.success);
        } catch (d) {}
      }, jl(a.B, "message", a.C));
    },
    Kl = function (a) {
      if (!1 === a.gdprApplies) return !0;
      void 0 === a.internalErrorState && (a.internalErrorState = Cl(a));
      return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ? (Al({
        e: String(a.internalErrorState)
      }), !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0;
    };
  var Ll = {
      1: 0,
      3: 0,
      4: 0,
      7: 3,
      9: 3,
      10: 3
    },
    Ml = gl('', 500);
  function Nl() {
    var a = ji.tcf || {};
    return ji.tcf = a;
  }
  var Sl = function () {
    var a = Nl(),
      b = new Dl(z, {
        Im: -1
      });
    Fl(b) && Ol() && M(124);
    if ((!Ol() || Q(90)) && !a.active && Fl(b)) {
      a.active = !0;
      Ol() || (a.Xb = {}, a.cmpId = 0, a.tcfPolicyVersion = 0, Pl(), a.tcString = "tcunavailable");
      try {
        b.addEventListener(function (c) {
          if (0 !== c.internalErrorState) Ql(a), Rl(a);else {
            a.gdprApplies = c.gdprApplies;
            if (Q(90)) {
              a.cmpId = c.cmpId;
              a.enableAdvertiserConsentMode = c.enableAdvertiserConsentMode;
              if (Ol()) return;
              a.tcfPolicyVersion = c.tcfPolicyVersion;
            }
            var d;
            if (!1 === c.gdprApplies) {
              var e = {},
                f;
              for (f in Ll) Ll.hasOwnProperty(f) && (e[f] = !0);
              d = e;
              b.removeEventListener(c);
            } else if ("tcloaded" === c.eventStatus || "useractioncomplete" === c.eventStatus || "cmpuishown" === c.eventStatus) {
              var g = {},
                k;
              for (k in Ll) if (Ll.hasOwnProperty(k)) if ("1" === k) {
                var m,
                  n = c,
                  p = !0;
                p = void 0 === p ? !1 : p;
                m = Kl(n) ? !1 === n.gdprApplies || "tcunavailable" === n.tcString || void 0 === n.gdprApplies && !p || "string" !== typeof n.tcString || !n.tcString.length ? !0 : Il(n, "1", 0) : !1;
                g["1"] = m;
              } else g[k] = Il(c, k, Ll[k]);
              d = g;
            }
            d && (a.tcString = c.tcString || "tcempty", a.Xb = d, Rl(a));
          }
        });
      } catch (c) {
        Ql(a), Rl(a);
      }
    }
  };
  function Ql(a) {
    a.type = "e";
    a.tcString = "tcunavailable";
  }
  function Pl() {
    var a = {},
      b = (a[N.g.I] = "denied", a[N.g.nd] = Ml, a);
    Q(90) && (b[N.g.Fb] = "denied");
    Pj(b);
  }
  var Ol = function () {
    var a = !0 === z.gtag_enable_tcf_support;
    if (Q(90)) {
      var b = Nl().enableAdvertiserConsentMode;
      return !a && !b;
    }
    return !a;
  };
  function Rl(a) {
    var b = {},
      c = (b[N.g.I] = a.Xb["1"] ? "granted" : "denied", b);
    Q(90) && (c[N.g.Fb] = a.Xb["3"] && a.Xb["4"] ? "granted" : "denied", "number" === typeof a.tcfPolicyVersion && 4 <= a.tcfPolicyVersion && (c[N.g.O] = a.Xb["1"] && a.Xb["7"] ? "granted" : "denied"));
    Qj(c, {
      eventId: 0
    }, {
      gdprApplies: a ? a.gdprApplies : void 0,
      tcString: Tl()
    });
  }
  var Tl = function () {
      var a = Nl();
      return a.active ? a.tcString || "" : "";
    },
    Ul = function () {
      var a = Nl();
      return a.active && void 0 !== a.gdprApplies ? a.gdprApplies ? "1" : "0" : "";
    },
    Vl = function (a) {
      if (!Ll.hasOwnProperty(String(a))) return !0;
      var b = Nl();
      return b.active && b.Xb ? !!b.Xb[String(a)] : !0;
    };
  var Wl = [N.g.I, N.g.R],
    Xl = [N.g.I, N.g.R, N.g.O, N.g.Fb],
    Yl = {},
    Zl = (Yl[N.g.I] = 1, Yl[N.g.R] = 2, Yl);
  function $l(a) {
    switch (U(a, N.g.fa)) {
      case void 0:
        return 1;
      case !1:
        return 3;
      default:
        return 2;
    }
  }
  var am = function (a) {
      var b = 3 !== $l(a);
      Q(70) && (b = b && Cj(N.g.Fb));
      return b;
    },
    bm = function () {
      var a = {},
        b;
      for (b in Zl) if (Zl.hasOwnProperty(b)) {
        var c = Zl[b],
          d,
          e = vj();
        e.accessedAny = !0;
        d = Aj(e, b);
        a[c] = d;
      }
      var f = Q(53) && Wl.every(Cj),
        g = Q(48);
      return f || g ? Ke(a, 1) : Ke(a, 0);
    },
    cm = {},
    dm = (cm[N.g.I] = 0, cm[N.g.R] = 1, cm[N.g.O] = 2, cm[N.g.Fb] = 3, cm);
  function em(a) {
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
  var fm = function (a) {
      if (Q(50)) {
        for (var b = "1", c = 0; c < Xl.length; c++) {
          var d = b,
            e,
            f = Xl[c],
            g = rj[f];
          e = void 0 === g ? 0 : dm.hasOwnProperty(g) ? 12 | dm[g] : 8;
          var k = vj();
          k.accessedAny = !0;
          var m = k.entries[f] || {};
          e = e << 2 | em(m.implicit);
          b = d + ("" + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[e] + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[em(m.declare) << 4 | em(m.default) << 2 | em(m.update)]);
        }
        void 0 !== a && (b += $l(a));
        return b;
      }
      for (var n = "G1", p = 0; p < Wl.length; p++) switch (Dj(Wl[p])) {
        case 3:
          n += "1";
          break;
        case 2:
          n += "0";
          break;
        case 1:
          n += "-";
      }
      return n;
    },
    gm = function () {
      if (!Cj(N.g.O)) return "-";
      var a = vj(),
        b = tj,
        c = a.cps,
        d = a.usedSetCps,
        e = [];
      if (b && d) for (var f in sj) sj.hasOwnProperty(f) && sj[f].enabled && c.hasOwnProperty(f) && c[f].enabled && e.push(f);else {
        var g = b ? sj : c,
          k;
        for (k in g) g.hasOwnProperty(k) && g[k].enabled && e.push(k);
      }
      for (var m = "", n = 0; n < e.length; n++) {
        var p = hi[e[n]];
        p && (m += p);
      }
      return "" === m ? "-" : m;
    };
  function hm() {
    var a = !!ej["6"],
      b = !1;
    Q(90) && (b = !Ol() && "1" === Ul());
    return a || b;
  }
  var im = function () {
      return hm() ? "1" : "0";
    },
    jm = function () {
      return hm() || vj().usedSetCps || !S(N.g.O);
    };
  var km = function (a) {
    var b = 1,
      c,
      d,
      e;
    if (a) for (b = 0, d = a.length - 1; 0 <= d; d--) e = a.charCodeAt(d), b = (b << 6 & 268435455) + e + (e << 14), c = b & 266338304, b = 0 !== c ? b ^ c >> 21 : b;
    return b;
  };
  var lm = function (a, b, c) {
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
  function mm(a) {
    return "null" !== a.origin;
  }
  ;
  var pm = function (a, b, c, d) {
      return nm(d) ? lm(a, String(b || om()), c) : [];
    },
    sm = function (a, b, c, d, e) {
      if (nm(e)) {
        var f = qm(a, d, e);
        if (1 === f.length) return f[0].id;
        if (0 !== f.length) {
          f = rm(f, function (g) {
            return g.xf;
          }, b);
          if (1 === f.length) return f[0].id;
          f = rm(f, function (g) {
            return g.Ie;
          }, c);
          return f[0] ? f[0].id : void 0;
        }
      }
    };
  function tm(a, b, c, d) {
    var e = om(),
      f = window;
    mm(f) && (f.document.cookie = a);
    var g = om();
    return e != g || void 0 != c && 0 <= pm(b, g, !1, d).indexOf(c);
  }
  var xm = function (a, b, c, d) {
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
      if (!nm(c.Eb)) return 2;
      var g;
      void 0 == b ? g = a + "=deleted; expires=" + new Date(0).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = um(b), g = a + "=" + b);
      var k = {};
      g = e(g, "path", c.path);
      var m;
      c.expires instanceof Date ? m = c.expires.toUTCString() : null != c.expires && (m = "" + c.expires);
      g = e(g, "expires", m);
      g = e(g, "max-age", c.Xl);
      g = e(g, "samesite", c.ym);
      c.Am && (g = f(g, "secure"));
      var n = c.domain;
      if (n && "auto" === n.toLowerCase()) {
        for (var p = vm(), q = void 0, r = !1, t = 0; t < p.length; ++t) {
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
          if (!wm(u, c.path) && tm(v, a, b, c.Eb)) return 0;
        }
        if (q && !r) throw q;
        return 1;
      }
      n && "none" !== n.toLowerCase() && (g = e(g, "domain", n));
      g = f(g, c.flags);
      d && d(a, k);
      return wm(n, c.path) ? 1 : tm(g, a, b, c.Eb) ? 0 : 1;
    },
    Im = function (a, b, c) {
      null == c.path && (c.path = "/");
      c.domain || (c.domain = "auto");
      return xm(a, b, c);
    };
  function rm(a, b, c) {
    for (var d = [], e = [], f, g = 0; g < a.length; g++) {
      var k = a[g],
        m = b(k);
      m === c ? d.push(k) : void 0 === f || m < f ? (e = [k], f = m) : m === f && e.push(k);
    }
    return 0 < d.length ? d : e;
  }
  function qm(a, b, c) {
    for (var d = [], e = pm(a, void 0, void 0, c), f = 0; f < e.length; f++) {
      var g = e[f].split("."),
        k = g.shift();
      if (!b || -1 !== b.indexOf(k)) {
        var m = g.shift();
        m && (m = m.split("-"), d.push({
          id: g.join("."),
          xf: 1 * m[0] || 1,
          Ie: 1 * m[1] || 1
        }));
      }
    }
    return d;
  }
  var um = function (a) {
      a && 1200 < a.length && (a = a.substring(0, 1200));
      return a;
    },
    Jm = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    Km = /(^|\.)doubleclick\.net$/i,
    wm = function (a, b) {
      return Km.test(window.document.location.hostname) || "/" === b && Jm.test(a);
    },
    om = function () {
      return mm(window) ? window.document.cookie : "";
    },
    vm = function () {
      var a = [],
        b = window.document.location.hostname.split(".");
      if (4 === b.length) {
        var c = b[b.length - 1];
        if (parseInt(c, 10).toString() === c) return ["none"];
      }
      for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
      var e = window.document.location.hostname;
      Km.test(e) || Jm.test(e) || a.push("none");
      return a;
    },
    nm = function (a) {
      return oj().h() && a && Fj() ? Ej(a) ? Cj(a) : !1 : !0;
    };
  var Lm = function (a) {
      var b = Math.round(2147483647 * Math.random());
      return a ? String(b ^ km(a) & 2147483647) : String(b);
    },
    Mm = function (a) {
      return [Lm(a), Math.round(Ua() / 1E3)].join(".");
    },
    Pm = function (a, b, c, d, e) {
      var f = Nm(b);
      return sm(a, f, Om(c), d, e);
    },
    Qm = function (a, b, c, d) {
      var e = "" + Nm(c),
        f = Om(d);
      1 < f && (e += "-" + f);
      return [b, e, a].join(".");
    },
    Nm = function (a) {
      if (!a) return 1;
      a = 0 === a.indexOf(".") ? a.substr(1) : a;
      return a.split(".").length;
    },
    Om = function (a) {
      if (!a || "/" === a) return 1;
      "/" !== a[0] && (a = "/" + a);
      "/" !== a[a.length - 1] && (a += "/");
      return a.split("/").length - 1;
    };
  var Rm = function () {
    ji.dedupe_gclid || (ji.dedupe_gclid = "" + Mm());
    return ji.dedupe_gclid;
  };
  var Sm = function () {
    var a = !1;
    return a;
  };
  var Tm = {
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
    Um = function (a) {
      var b = Pf.ctid.split("-")[0].toUpperCase(),
        c = {};
      c.ctid = Pf.ctid;
      c.sm = ii.fe;
      c.xm = ii.Pg;
      c.Ul = bk.kf ? 2 : 1;
      pi ? (c.Mf = Tm[b], c.Mf || (c.Mf = 0)) : c.Mf = vi ? 13 : 10;
      ti ? c.wh = 1 : Sm() ? c.wh = 2 : c.wh = 3;
      var d;
      var e = c.Mf,
        f = c.wh;
      void 0 === e ? d = "" : (f || (f = 0), d = "" + Gg(1, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[e << 2 | f]);
      var g = c.hn,
        k = 4 + d + (g ? "" + Gg(2, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[g] : ""),
        m,
        n = c.xm;
      m = n && Fg.test(n) ? "" + Gg(3, 2) + n : "";
      var p,
        q = c.sm;
      p = q ? "" + Gg(4, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[q] : "";
      var r;
      var t = c.ctid;
      if (t && a) {
        var u = t.split("-"),
          v = u[0].toUpperCase();
        if ("GTM" !== v && "OPT" !== v) r = "";else {
          var w = u[1];
          r = "" + Gg(5, 3) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[1 + w.length] + (c.Ul || 0) + w;
        }
      } else r = "";
      return k + m + p + r;
    };
  var Vm = void 0;
  function Wm(a) {
    var b = "";
    return b;
  }
  ;
  var Xm = function (a) {
    for (var b = [], c = 0, d = 0; d < a.length; d++) {
      var e = a.charCodeAt(d);
      128 > e ? b[c++] = e : (2048 > e ? b[c++] = e >> 6 | 192 : (55296 == (e & 64512) && d + 1 < a.length && 56320 == (a.charCodeAt(d + 1) & 64512) ? (e = 65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023), b[c++] = e >> 18 | 240, b[c++] = e >> 12 & 63 | 128) : b[c++] = e >> 12 | 224, b[c++] = e >> 6 & 63 | 128), b[c++] = e & 63 | 128);
    }
    return b;
  };
  Xb();
  ll() || Ub("iPod");
  Ub("iPad");
  !Ub("Android") || Yb() || Xb() || Wb() || Ub("Silk");
  Yb();
  !Ub("Safari") || Yb() || (Vb() ? 0 : Ub("Coast")) || Wb() || (Vb() ? 0 : Ub("Edge")) || (Vb() ? Tb("Microsoft Edge") : Ub("Edg/")) || (Vb() ? Tb("Opera") : Ub("OPR")) || Xb() || Ub("Silk") || Ub("Android") || ml();
  var Ym = {},
    Zm = null,
    $m = function (a) {
      for (var b = [], c = 0, d = 0; d < a.length; d++) {
        var e = a.charCodeAt(d);
        255 < e && (b[c++] = e & 255, e >>= 8);
        b[c++] = e;
      }
      var f = 4;
      void 0 === f && (f = 0);
      if (!Zm) {
        Zm = {};
        for (var g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), k = ["+/=", "+/", "-_=", "-_.", "-_"], m = 0; 5 > m; m++) {
          var n = g.concat(k[m].split(""));
          Ym[m] = n;
          for (var p = 0; p < n.length; p++) {
            var q = n[p];
            void 0 === Zm[q] && (Zm[q] = p);
          }
        }
      }
      for (var r = Ym[f], t = Array(Math.floor(b.length / 3)), u = r[64] || "", v = 0, w = 0; v < b.length - 2; v += 3) {
        var x = b[v],
          y = b[v + 1],
          A = b[v + 2],
          B = r[x >> 2],
          D = r[(x & 3) << 4 | y >> 4],
          G = r[(y & 15) << 2 | A >> 6],
          E = r[A & 63];
        t[w++] = "" + B + D + G + E;
      }
      var I = 0,
        O = u;
      switch (b.length - v) {
        case 2:
          I = b[v + 1], O = r[(I & 15) << 2] || u;
        case 1:
          var R = b[v];
          t[w] = "" + r[R >> 2] + r[(R & 3) << 4 | I >> 4] + O + u;
      }
      return t.join("");
    };
  var an = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");
  function bn(a) {
    var b;
    return null != (b = a.google_tag_data) ? b : a.google_tag_data = {};
  }
  function cn() {
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
  function dn() {
    var a, b;
    return null != (b = null == (a = z.google_tag_data) ? void 0 : a.uach_promise) ? b : null;
  }
  function en(a) {
    var b, c;
    return "function" === typeof (null == (b = a.navigator) ? void 0 : null == (c = b.userAgentData) ? void 0 : c.getHighEntropyValues);
  }
  function fn() {
    var a = z;
    if (!en(a)) return null;
    var b = bn(a);
    if (b.uach_promise) return b.uach_promise;
    var c = a.navigator.userAgentData.getHighEntropyValues(an).then(function (d) {
      null != b.uach || (b.uach = d);
      return d;
    });
    return b.uach_promise = c;
  }
  ;
  var mn = /:[0-9]+$/,
    nn = /^\d+\.fls\.doubleclick\.net$/,
    on = function (a, b, c, d) {
      for (var e = [], f = a.split("&"), g = 0; g < f.length; g++) {
        var k = f[g].split("=");
        if (decodeURIComponent(k[0]).replace(/\+/g, " ") === b) {
          var m = k.slice(1).join("=");
          if (!c) return d ? m : decodeURIComponent(m).replace(/\+/g, " ");
          e.push(d ? m : decodeURIComponent(m).replace(/\+/g, " "));
        }
      }
      return c ? e : void 0;
    },
    rn = function (a, b, c, d, e) {
      b && (b = String(b).toLowerCase());
      if ("protocol" === b || "port" === b) a.protocol = pn(a.protocol) || pn(z.location.protocol);
      "port" === b ? a.port = String(Number(a.hostname ? a.port : z.location.port) || ("http" === a.protocol ? 80 : "https" === a.protocol ? 443 : "")) : "host" === b && (a.hostname = (a.hostname || z.location.hostname).replace(mn, "").toLowerCase());
      return qn(a, b, c, d, e);
    },
    qn = function (a, b, c, d, e) {
      var f,
        g = pn(a.protocol);
      b && (b = String(b).toLowerCase());
      switch (b) {
        case "url_no_fragment":
          f = sn(a);
          break;
        case "protocol":
          f = g;
          break;
        case "host":
          f = a.hostname.replace(mn, "").toLowerCase();
          if (c) {
            var k = /^www\d*\./.exec(f);
            k && k[0] && (f = f.substr(k[0].length));
          }
          break;
        case "port":
          f = String(Number(a.port) || ("http" === g ? 80 : "https" === g ? 443 : ""));
          break;
        case "path":
          a.pathname || a.hostname || vb("TAGGING", 1);
          f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
          var m = f.split("/");
          0 <= (d || []).indexOf(m[m.length - 1]) && (m[m.length - 1] = "");
          f = m.join("/");
          break;
        case "query":
          f = a.search.replace("?", "");
          e && (f = on(f, e, !1));
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
    pn = function (a) {
      return a ? a.replace(":", "").toLowerCase() : "";
    },
    sn = function (a) {
      var b = "";
      if (a && a.href) {
        var c = a.href.indexOf("#");
        b = 0 > c ? a.href : a.href.substr(0, c);
      }
      return b;
    },
    tn = function (a) {
      var b = H.createElement("a");
      a && (b.href = a);
      var c = b.pathname;
      "/" !== c[0] && (a || vb("TAGGING", 1), c = "/" + c);
      var d = b.hostname.replace(mn, "");
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
    un = function (a) {
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
        e = tn(a),
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
    vn = function (a) {
      var b = tn(z.location.href),
        c = rn(b, "host", !1);
      if (c && c.match(nn)) {
        var d = rn(b, "path").split(a + "=");
        if (1 < d.length) return d[1].split(";")[0].split("?")[0];
      }
    };
  function wn(a, b, c, d) {
    var e,
      f = Number(null != a.Ub ? a.Ub : void 0);
    0 !== f && (e = new Date((b || Ua()) + 1E3 * (f || 7776E3)));
    return {
      path: a.path,
      domain: a.domain,
      flags: a.flags,
      encode: !!c,
      expires: e,
      Eb: d
    };
  }
  ;
  var xn;
  var Bn = function () {
      var a = yn,
        b = zn,
        c = An(),
        d = function (g) {
          a(g.target || g.srcElement || {});
        },
        e = function (g) {
          b(g.target || g.srcElement || {});
        };
      if (!c.init) {
        Kc(H, "mousedown", d);
        Kc(H, "keyup", d);
        Kc(H, "submit", e);
        var f = HTMLFormElement.prototype.submit;
        HTMLFormElement.prototype.submit = function () {
          b(this);
          f.call(this);
        };
        c.init = !0;
      }
    },
    Cn = function (a, b, c, d, e) {
      var f = {
        callback: a,
        domains: b,
        fragment: 2 === c,
        placement: c,
        forms: d,
        sameHost: e
      };
      An().decorators.push(f);
    },
    Dn = function (a, b, c) {
      for (var d = An().decorators, e = {}, f = 0; f < d.length; ++f) {
        var g = d[f],
          k;
        if (k = !c || g.forms) a: {
          var m = g.domains,
            n = a,
            p = !!g.sameHost;
          if (m && (p || n !== H.location.hostname)) for (var q = 0; q < m.length; q++) if (m[q] instanceof RegExp) {
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
          r === b && Ya(e, g.callback());
        }
      }
      return e;
    };
  function An() {
    var a = Bc("google_tag_data", {}),
      b = a.gl;
    b && b.decorators || (b = {
      decorators: []
    }, a.gl = b);
    return b;
  }
  ;
  var En = /(.*?)\*(.*?)\*(.*)/,
    Fn = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
    Gn = /^(?:www\.|m\.|amp\.)+/,
    Hn = /([^?#]+)(\?[^#]*)?(#.*)?/;
  function In(a) {
    return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)");
  }
  var Kn = function (a) {
    var b = [],
      c;
    for (c in a) if (a.hasOwnProperty(c)) {
      var d = a[c];
      void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString() && (b.push(c), b.push(sb(String(d))));
    }
    var e = b.join("*");
    return ["1", Jn(e), e].join("*");
  };
  function Jn(a, b) {
    var c = [zc.userAgent, new Date().getTimezoneOffset(), zc.userLanguage || zc.language, Math.floor(Ua() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"),
      d;
    if (!(d = xn)) {
      for (var e = Array(256), f = 0; 256 > f; f++) {
        for (var g = f, k = 0; 8 > k; k++) g = g & 1 ? g >>> 1 ^ 3988292384 : g >>> 1;
        e[f] = g;
      }
      d = e;
    }
    xn = d;
    for (var m = 4294967295, n = 0; n < c.length; n++) m = m >>> 8 ^ xn[(m ^ c.charCodeAt(n)) & 255];
    return ((m ^ -1) >>> 0).toString(36);
  }
  function Ln() {
    return function (a) {
      var b = tn(z.location.href),
        c = b.search.replace("?", ""),
        d = on(c, "_gl", !1, !0) || "";
      a.query = Mn(d) || {};
      var e = rn(b, "fragment").match(In("_gl"));
      a.fragment = Mn(e && e[3] || "") || {};
    };
  }
  function Nn(a, b) {
    var c = In(a).exec(b),
      d = b;
    if (c) {
      var e = c[2],
        f = c[4];
      d = c[1];
      f && (d = d + e + f);
    }
    return d;
  }
  var On = function (a, b) {
      b || (b = "_gl");
      var c = Hn.exec(a);
      if (!c) return "";
      var d = c[1],
        e = Nn(b, (c[2] || "").slice(1)),
        f = Nn(b, (c[3] || "").slice(1));
      e.length && (e = "?" + e);
      f.length && (f = "#" + f);
      return "" + d + e + f;
    },
    Pn = function (a) {
      var b = Ln(),
        c = An();
      c.data || (c.data = {
        query: {},
        fragment: {}
      }, b(c.data));
      var d = {},
        e = c.data;
      e && (Ya(d, e.query), a && Ya(d, e.fragment));
      return d;
    },
    Mn = function (a) {
      try {
        var b = Qn(a, 3);
        if (void 0 !== b) {
          for (var c = {}, d = b ? b.split("*") : [], e = 0; e + 1 < d.length; e += 2) {
            var f = d[e],
              g = tb(d[e + 1]);
            c[f] = g;
          }
          vb("TAGGING", 6);
          return c;
        }
      } catch (k) {
        vb("TAGGING", 8);
      }
    };
  function Qn(a, b) {
    if (a) {
      var c;
      a: {
        for (var d = a, e = 0; 3 > e; ++e) {
          var f = En.exec(d);
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
          for (var n = g[2], p = 0; p < b; ++p) if (n === Jn(k, p)) {
            m = !0;
            break a;
          }
          m = !1;
        }
        if (m) return k;
        vb("TAGGING", 7);
      }
    }
  }
  function Rn(a, b, c, d) {
    function e(p) {
      p = Nn(a, p);
      var q = p.charAt(p.length - 1);
      p && "&" !== q && (p += "&");
      return p + n;
    }
    d = void 0 === d ? !1 : d;
    var f = Hn.exec(c);
    if (!f) return "";
    var g = f[1],
      k = f[2] || "",
      m = f[3] || "",
      n = a + "=" + b;
    d ? m = "#" + e(m.substring(1)) : k = "?" + e(k.substring(1));
    return "" + g + k + m;
  }
  function Sn(a, b) {
    var c = "FORM" === (a.tagName || "").toUpperCase(),
      d = Dn(b, 1, c),
      e = Dn(b, 2, c),
      f = Dn(b, 3, c);
    if (Za(d)) {
      var g = Kn(d);
      c ? Tn("_gl", g, a) : Un("_gl", g, a, !1);
    }
    if (!c && Za(e)) {
      var k = Kn(e);
      Un("_gl", k, a, !0);
    }
    for (var m in f) if (f.hasOwnProperty(m)) a: {
      var n = m,
        p = f[m],
        q = a;
      if (q.tagName) {
        if ("a" === q.tagName.toLowerCase()) {
          Un(n, p, q);
          break a;
        }
        if ("form" === q.tagName.toLowerCase()) {
          Tn(n, p, q);
          break a;
        }
      }
      "string" == typeof q && Rn(n, p, q);
    }
  }
  function Un(a, b, c, d) {
    if (c.href) {
      var e = Rn(a, b, c.href, void 0 === d ? !1 : d);
      Hb.test(e) && (c.href = e);
    }
  }
  function Tn(a, b, c) {
    if (c && c.action) {
      var d = (c.method || "").toLowerCase();
      if ("get" === d) {
        for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
          var k = e[g];
          if (k.name === a) {
            k.setAttribute("value", b);
            f = !0;
            break;
          }
        }
        if (!f) {
          var m = H.createElement("input");
          m.setAttribute("type", "hidden");
          m.setAttribute("name", a);
          m.setAttribute("value", b);
          c.appendChild(m);
        }
      } else if ("post" === d) {
        var n = Rn(a, b, c.action);
        Hb.test(n) && (c.action = n);
      }
    }
  }
  function yn(a) {
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
        "http:" !== f && "https:" !== f || Sn(e, e.hostname);
      }
    } catch (g) {}
  }
  function zn(a) {
    try {
      if (a.action) {
        var b = rn(tn(a.action), "host");
        Sn(a, b);
      }
    } catch (c) {}
  }
  var Vn = function (a, b, c, d) {
      Bn();
      Cn(a, b, "fragment" === c ? 2 : 1, !!d, !1);
    },
    Wn = function (a, b) {
      Bn();
      Cn(a, [qn(z.location, "host", !0)], b, !0, !0);
    },
    Xn = function () {
      var a = H.location.hostname,
        b = Fn.exec(H.referrer);
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
      var k = a.replace(Gn, ""),
        m = e.replace(Gn, ""),
        n;
      if (!(n = k === m)) {
        var p = "." + m;
        n = k.substring(k.length - p.length, k.length) === p;
      }
      return n;
    },
    Yn = function (a, b) {
      return !1 === a ? !1 : a || b || Xn();
    };
  var Zn = ["1"],
    $n = {},
    ao = {},
    go = function (a, b) {
      b = void 0 === b ? !0 : b;
      var c = bo(a.prefix);
      if (!$n[c]) if (co(c, a.path, a.domain)) {
        var d = ao[bo(a.prefix)];
        eo(a, d ? d.id : void 0, d ? d.uh : void 0);
      } else {
        var e = vn("auiddc");
        if (e) vb("TAGGING", 17), $n[c] = e;else if (b) {
          var f = bo(a.prefix),
            g = Mm();
          if (0 === fo(f, g, a)) {
            var k = Bc("google_tag_data", {});
            k._gcl_au || (k._gcl_au = g);
          }
          co(c, a.path, a.domain);
        }
      }
    };
  function eo(a, b, c) {
    var d = bo(a.prefix),
      e = $n[d];
    if (e) {
      var f = e.split(".");
      if (2 === f.length) {
        var g = Number(f[1]) || 0;
        if (g) {
          var k = e;
          b && (k = e + "." + b + "." + (c ? c : Math.floor(Ua() / 1E3)));
          fo(d, k, a, 1E3 * g);
        }
      }
    }
  }
  function fo(a, b, c, d) {
    var e = Qm(b, "1", c.domain, c.path),
      f = wn(c, d);
    f.Eb = "ad_storage";
    return Im(a, e, f);
  }
  function co(a, b, c) {
    var d = Pm(a, b, c, Zn, "ad_storage");
    if (!d) return !1;
    ho(a, d);
    return !0;
  }
  function ho(a, b) {
    var c = b.split(".");
    5 === c.length ? ($n[a] = c.slice(0, 2).join("."), ao[a] = {
      id: c.slice(2, 4).join("."),
      uh: Number(c[4]) || 0
    }) : 3 === c.length ? ao[a] = {
      id: c.slice(0, 2).join("."),
      uh: Number(c[2]) || 0
    } : $n[a] = b;
  }
  function bo(a) {
    return (a || "_gcl") + "_au";
  }
  function io(a) {
    Fj() ? Jj(function () {
      Cj("ad_storage") ? a() : Kj(a, "ad_storage");
    }, ["ad_storage"]) : a();
  }
  function jo(a) {
    var b = Pn(!0),
      c = bo(a.prefix);
    io(function () {
      var d = b[c];
      if (d) {
        ho(c, d);
        var e = 1E3 * Number($n[c].split(".")[1]);
        if (e) {
          vb("TAGGING", 16);
          var f = wn(a, e);
          f.Eb = "ad_storage";
          var g = Qm(d, "1", a.domain, a.path);
          Im(c, g, f);
        }
      }
    });
  }
  function ko(a, b, c, d, e) {
    e = e || {};
    var f = function () {
      var g = {},
        k = Pm(a, e.path, e.domain, Zn, "ad_storage");
      k && (g[a] = k);
      return g;
    };
    io(function () {
      Vn(f, b, c, d);
    });
  }
  ;
  var lo = function (a) {
    for (var b = [], c = H.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
      var f = c[e].match(d);
      f && b.push({
        Nh: f[1],
        value: f[2],
        timestamp: Number(f[2].split(".")[1]) || 0
      });
    }
    b.sort(function (g, k) {
      return k.timestamp - g.timestamp;
    });
    return b;
  };
  function mo(a, b) {
    var c = lo(a),
      d = {};
    if (!c || !c.length) return d;
    for (var e = 0; e < c.length; e++) {
      var f = c[e].value.split(".");
      if (!("1" !== f[0] || b && 3 > f.length || !b && 3 !== f.length) && Number(f[1])) {
        d[c[e].Nh] || (d[c[e].Nh] = []);
        var g = {
          version: f[0],
          timestamp: 1E3 * Number(f[1]),
          X: f[2]
        };
        b && 3 < f.length && (g.labels = f.slice(3));
        d[c[e].Nh].push(g);
      }
    }
    return d;
  }
  ;
  var no = /^\w+$/,
    oo = /^[\w-]+$/,
    po = {
      aw: "_aw",
      dc: "_dc",
      gf: "_gf",
      ha: "_ha",
      gp: "_gp",
      gb: "_gb"
    },
    qo = function () {
      return oj().h() && Fj() ? Cj("ad_storage") : !0;
    },
    ro = function (a, b) {
      Ej("ad_storage") ? qo() ? a() : Kj(a, "ad_storage") : b ? vb("TAGGING", 3) : Jj(function () {
        ro(a, !0);
      }, ["ad_storage"]);
    },
    to = function (a) {
      return so(a).map(function (b) {
        return b.X;
      });
    },
    so = function (a) {
      var b = [];
      if (!mm(z) || !H.cookie) return b;
      var c = pm(a, H.cookie, void 0, "ad_storage");
      if (!c || 0 == c.length) return b;
      for (var d = {}, e = 0; e < c.length; d = {
        X: d.X
      }, e++) {
        var f = uo(c[e]);
        if (null != f) {
          var g = f,
            k = g.version;
          d.X = g.X;
          var m = g.timestamp,
            n = g.labels,
            p = Ja(b, function (q) {
              return function (r) {
                return r.X === q.X;
              };
            }(d));
          p ? (p.timestamp = Math.max(p.timestamp, m), p.labels = vo(p.labels, n || [])) : b.push({
            version: k,
            X: d.X,
            timestamp: m,
            labels: n
          });
        }
      }
      b.sort(function (q, r) {
        return r.timestamp - q.timestamp;
      });
      return wo(b);
    };
  function vo(a, b) {
    for (var c = {}, d = [], e = 0; e < a.length; e++) c[a[e]] = !0, d.push(a[e]);
    for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
    return d;
  }
  function xo(a) {
    return a && "string" == typeof a && a.match(no) ? a : "_gcl";
  }
  var zo = function () {
      var a = tn(z.location.href),
        b = rn(a, "query", !1, void 0, "gclid"),
        c = rn(a, "query", !1, void 0, "gclsrc"),
        d = rn(a, "query", !1, void 0, "wbraid"),
        e = rn(a, "query", !1, void 0, "dclid");
      if (!b || !c || !d) {
        var f = a.hash.replace("#", "");
        b = b || on(f, "gclid", !1);
        c = c || on(f, "gclsrc", !1);
        d = d || on(f, "wbraid", !1);
      }
      return yo(b, c, e, d);
    },
    yo = function (a, b, c, d) {
      var e = {},
        f = function (g, k) {
          e[k] || (e[k] = []);
          e[k].push(g);
        };
      e.gclid = a;
      e.gclsrc = b;
      e.dclid = c;
      void 0 !== d && oo.test(d) && (e.gbraid = d, f(d, "gb"));
      if (void 0 !== a && a.match(oo)) switch (b) {
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
    Bo = function (a) {
      var b = zo();
      ro(function () {
        Ao(b, !1, a);
      });
    };
  function Ao(a, b, c, d, e) {
    function f(w, x) {
      var y = Co(w, g);
      y && (Im(y, x, k), m = !0);
    }
    c = c || {};
    e = e || [];
    var g = xo(c.prefix);
    d = d || Ua();
    var k = wn(c, d, !0);
    k.Eb = "ad_storage";
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
        r = Co("gb", g),
        t = !1;
      if (!b) for (var u = so(r), v = 0; v < u.length; v++) u[v].X === q && u[v].labels && 0 < u[v].labels.length && (t = !0);
      t || f("gb", p(q));
    }
  }
  var Eo = function (a, b) {
      var c = Pn(!0);
      ro(function () {
        for (var d = xo(b.prefix), e = 0; e < a.length; ++e) {
          var f = a[e];
          if (void 0 !== po[f]) {
            var g = Co(f, d),
              k = c[g];
            if (k) {
              var m = Math.min(Do(k), Ua()),
                n;
              b: {
                var p = m;
                if (mm(z)) for (var q = pm(g, H.cookie, void 0, "ad_storage"), r = 0; r < q.length; ++r) if (Do(q[r]) > p) {
                  n = !0;
                  break b;
                }
                n = !1;
              }
              if (!n) {
                var t = wn(b, m, !0);
                t.Eb = "ad_storage";
                Im(g, k, t);
              }
            }
          }
        }
        Ao(yo(c.gclid, c.gclsrc), !1, b);
      });
    },
    Co = function (a, b) {
      var c = po[a];
      if (void 0 !== c) return b + c;
    },
    Do = function (a) {
      return 0 !== Fo(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) || 0) : 0;
    };
  function uo(a) {
    var b = Fo(a.split("."));
    return 0 === b.length ? null : {
      version: b[0],
      X: b[2],
      timestamp: 1E3 * (Number(b[1]) || 0),
      labels: b.slice(3)
    };
  }
  function Fo(a) {
    return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !oo.test(a[2]) ? [] : a;
  }
  var Go = function (a, b, c, d, e) {
      if (Ha(b) && mm(z)) {
        var f = xo(e),
          g = function () {
            for (var k = {}, m = 0; m < a.length; ++m) {
              var n = Co(a[m], f);
              if (n) {
                var p = pm(n, H.cookie, void 0, "ad_storage");
                p.length && (k[n] = p.sort()[p.length - 1]);
              }
            }
            return k;
          };
        ro(function () {
          Vn(g, b, c, d);
        });
      }
    },
    wo = function (a) {
      return a.filter(function (b) {
        return oo.test(b.X);
      });
    },
    Ho = function (a, b) {
      if (mm(z)) {
        for (var c = xo(b.prefix), d = {}, e = 0; e < a.length; e++) po[a[e]] && (d[a[e]] = po[a[e]]);
        ro(function () {
          l(d, function (f, g) {
            var k = pm(c + g, H.cookie, void 0, "ad_storage");
            k.sort(function (t, u) {
              return Do(u) - Do(t);
            });
            if (k.length) {
              var m = k[0],
                n = Do(m),
                p = 0 !== Fo(m.split(".")).length ? m.split(".").slice(3) : [],
                q = {},
                r;
              r = 0 !== Fo(m.split(".")).length ? m.split(".")[2] : void 0;
              q[f] = [r];
              Ao(q, !0, b, n, p);
            }
          });
        });
      }
    };
  function Io(a, b) {
    for (var c = 0; c < b.length; ++c) if (a[b[c]]) return !0;
    return !1;
  }
  var Jo = function (a) {
      function b(e, f, g) {
        g && (e[f] = g);
      }
      if (Fj()) {
        var c = zo();
        if (Io(c, a)) {
          var d = {};
          b(d, "gclid", c.gclid);
          b(d, "dclid", c.dclid);
          b(d, "gclsrc", c.gclsrc);
          b(d, "wbraid", c.gbraid);
          Wn(function () {
            return d;
          }, 3);
          Wn(function () {
            var e = {};
            return e._up = "1", e;
          }, 1);
        }
      }
    },
    Ko = function (a, b, c, d) {
      var e = [];
      c = c || {};
      if (!qo()) return e;
      var f = so(a);
      if (!f.length) return e;
      for (var g = 0; g < f.length; g++) -1 === (f[g].labels || []).indexOf(b) ? e.push(0) : e.push(1);
      if (d) return e;
      if (1 !== e[0]) {
        var k = f[0],
          m = f[0].timestamp,
          n = [k.version, Math.round(m / 1E3), k.X].concat(k.labels || [], [b]).join("."),
          p = wn(c, m, !0);
        p.Eb = "ad_storage";
        Im(a, n, p);
      }
      return e;
    };
  function Lo(a, b) {
    var c = xo(b),
      d = Co(a, c);
    if (!d) return 0;
    for (var e = so(d), f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
    return f;
  }
  function Mo(a) {
    var b = 0,
      c;
    for (c in a) for (var d = a[c], e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp));
    return b;
  }
  var No = function (a) {
    var b = Math.max(Lo("aw", a), Mo(qo() ? mo() : {}));
    return Math.max(Lo("gb", a), Mo(qo() ? mo("_gac_gb", !0) : {})) > b;
  };
  var So = /[A-Z]+/,
    To = /\s/,
    Uo = function (a, b) {
      if (h(a)) {
        a = Sa(a);
        var c = a.indexOf("-");
        if (!(0 > c)) {
          var d = a.substring(0, c);
          if (So.test(d)) {
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
              for (var m = 0; m < f.length; m++) if (!f[m] || To.test(f[m]) && ("AW" !== d || 1 !== m)) return;
            }
            return {
              id: a,
              prefix: d,
              da: d + "-" + f[0],
              N: f
            };
          }
        }
      }
    },
    Wo = function (a, b) {
      for (var c = {}, d = 0; d < a.length; ++d) {
        var e = Uo(a[d], b);
        e && (c[e.id] = e);
      }
      Vo(c);
      var f = [];
      l(c, function (g, k) {
        f.push(k);
      });
      return f;
    };
  function Vo(a) {
    var b = [],
      c;
    for (c in a) if (a.hasOwnProperty(c)) {
      var d = a[c];
      "AW" === d.prefix && d.N[1] && b.push(d.da);
    }
    for (var e = 0; e < b.length; ++e) delete a[b[e]];
  }
  ;
  var Xo = function (a, b, c, d) {
    var e = Hc(),
      f;
    if (1 === e) a: {
      var g = xi;
      g = g.toLowerCase();
      for (var k = "https://" + g, m = "http://" + g, n = 1, p = H.getElementsByTagName("script"), q = 0; q < p.length && 100 > q; q++) {
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
  var Zo = function (a, b, c) {
      if (z[a.functionName]) return b.zh && J(b.zh), z[a.functionName];
      var d = Yo();
      z[a.functionName] = d;
      if (a.uf) for (var e = 0; e < a.uf.length; e++) z[a.uf[e]] = z[a.uf[e]] || Yo();
      a.Cf && void 0 === z[a.Cf] && (z[a.Cf] = c);
      Gc(Xo("https://", "http://", a.Kh), b.zh, b.am);
      return d;
    },
    Yo = function () {
      var a = function () {
        a.q = a.q || [];
        a.q.push(arguments);
      };
      return a;
    },
    $o = {
      functionName: "_googWcmImpl",
      Cf: "_googWcmAk",
      Kh: "www.gstatic.com/wcm/loader.js"
    },
    ap = {
      functionName: "_gaPhoneImpl",
      Cf: "ga_wpid",
      Kh: "www.gstatic.com/gaphone/loader.js"
    },
    bp = {
      Rj: "",
      Ik: "5"
    },
    cp = {
      functionName: "_googCallTrackingImpl",
      uf: [ap.functionName, $o.functionName],
      Kh: "www.gstatic.com/call-tracking/call-tracking_" + (bp.Rj || bp.Ik) + ".js"
    },
    dp = {},
    ep = function (a, b, c, d) {
      M(22);
      if (c) {
        d = d || {};
        var e = Zo($o, d, a),
          f = {
            ak: a,
            cl: b
          };
        void 0 === d.Db && (f.autoreplace = c);
        e(2, d.Db, f, c, 0, Ta(), d.options);
      }
    },
    fp = function (a, b, c, d) {
      M(21);
      if (b && c) {
        d = d || {};
        for (var e = {
            countryNameCode: c,
            destinationNumber: b,
            retrievalTime: Ta()
          }, f = 0; f < a.length; f++) {
          var g = a[f];
          dp[g.id] || (g && "AW" === g.prefix && !e.adData && 2 <= g.N.length ? (e.adData = {
            ak: g.N[0],
            cl: g.N[1]
          }, dp[g.id] = !0) : g && "UA" === g.prefix && !e.gaData && (e.gaData = {
            gaWpid: g.da
          }, dp[g.id] = !0));
        }
        (e.gaData || e.adData) && Zo(cp, d)(d.Db, e, d.options);
      }
    },
    gp = function () {
      var a = !1;
      return a;
    },
    hp = function (a, b) {
      if (a) if (Sm()) {} else {
        if (h(a)) {
          var c = Uo(a);
          if (!c) return;
          a = c;
        }
        var d = void 0,
          e = !1,
          f = U(b, N.g.Ei);
        if (f && Ha(f)) {
          d = [];
          for (var g = 0; g < f.length; g++) {
            var k = Uo(f[g]);
            k && (d.push(k), (a.id === k.id || a.id === a.da && a.da === k.da) && (e = !0));
          }
        }
        if (!d || e) {
          var m = U(b, N.g.yg),
            n;
          if (m) {
            Ha(m) ? n = m : n = [m];
            var p = U(b, N.g.wg),
              q = U(b, N.g.xg),
              r = U(b, N.g.zg),
              t = U(b, N.g.Di),
              u = p || q,
              v = 1;
            "UA" !== a.prefix || d || (v = 5);
            for (var w = 0; w < n.length; w++) if (w < v) if (d) fp(d, n[w], t, {
              Db: u,
              options: r
            });else if ("AW" === a.prefix && a.N[1]) gp() ? fp([a], n[w], t || "US", {
              Db: u,
              options: r
            }) : ep(a.N[0], a.N[1], n[w], {
              Db: u,
              options: r
            });else if ("UA" === a.prefix) if (gp()) fp([a], n[w], t || "US", {
              Db: u
            });else {
              var x = a.da,
                y = n[w],
                A = {
                  Db: u
                };
              M(23);
              if (y) {
                A = A || {};
                var B = Zo(ap, A, x),
                  D = {};
                void 0 !== A.Db ? D.receiver = A.Db : D.replace = y;
                D.ga_wpid = x;
                D.destination = y;
                B(2, Ta(), D);
              }
            }
          }
        }
      }
    };
  var ip,
    jp = !1;
  function kp() {
    jp = !0;
    ip = ip || {};
  }
  var lp = function (a) {
    jp || kp();
    return ip[a];
  };
  var mp = function (a, b, c) {
    this.target = a;
    this.eventName = b;
    this.s = c;
    this.h = {};
    this.metadata = pd(c.eventMetadata || {});
    this.isAborted = !1;
  };
  mp.prototype.copyToHitData = function (a, b) {
    var c = U(this.s, a);
    void 0 !== c ? this.h[a] = c : void 0 !== b && (this.h[a] = b);
  };
  var np = function (a, b, c) {
    var d = lp(a.target.da);
    return d && d.hasOwnProperty(b) ? d[b] : c;
  };
  function op(a) {
    return {
      getDestinationId: function () {
        return a.target.da;
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
        return U(a.s, b);
      },
      rj: function () {
        return a;
      },
      getHitKeys: function () {
        return Object.keys(a.h);
      }
    };
  }
  ;
  var qp = function (a) {
      var b = pp[a.target.da];
      if (!a.isAborted && b) for (var c = op(a), d = 0; d < b.length; ++d) {
        try {
          b[d](c);
        } catch (e) {
          a.isAborted = !0;
        }
        if (a.isAborted) break;
      }
    },
    rp = function (a, b) {
      var c = pp[a];
      c || (c = pp[a] = []);
      c.push(b);
    },
    pp = {};
  function Lp(a) {
    var b = U(a.s, N.g.wb),
      c = U(a.s, N.g.Kb);
    b && !c ? (a.eventName !== N.g.oa && a.eventName !== N.g.pd && M(131), a.isAborted = !0) : !b && c && (M(132), a.isAborted = !0);
  }
  ;
  var Np = function () {
      var a = z.screen;
      return {
        width: a ? a.width : 0,
        height: a ? a.height : 0
      };
    },
    Op = function (a) {
      if (H.hidden) return !0;
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
  var Yp = function (a, b, c) {
      var d = a.element,
        e = {
          W: a.W,
          type: a.ja,
          tagName: d.tagName
        };
      b && (e.querySelector = Xp(d));
      c && (e.isVisible = !Op(d));
      return e;
    },
    Zp = function (a, b, c) {
      return Yp({
        element: a.element,
        W: a.W,
        ja: "1"
      }, b, c);
    },
    $p = function (a) {
      var b = !!a.dd + "." + !!a.ed;
      a && a.pe && a.pe.length && (b += "." + a.pe.join("."));
      a && a.ib && (b += "." + a.ib.email + "." + a.ib.phone + "." + a.ib.address);
      return b;
    },
    cq = function (a) {
      if (0 != a.length) {
        var b;
        b = aq(a, function (c) {
          return !bq.test(c.W);
        });
        b = aq(b, function (c) {
          return "INPUT" === c.element.tagName.toUpperCase();
        });
        b = aq(b, function (c) {
          return !Op(c.element);
        });
        return b[0];
      }
    },
    dq = function (a, b) {
      if (!b || 0 === b.length) return a;
      for (var c = [], d = 0; d < a.length; d++) {
        for (var e = !0, f = 0; f < b.length; f++) {
          var g = b[f];
          if (g && th(a[d].element, g)) {
            e = !1;
            break;
          }
        }
        e && c.push(a[d]);
      }
      return c;
    },
    aq = function (a, b) {
      if (1 >= a.length) return a;
      var c = a.filter(b);
      return 0 == c.length ? a : c;
    },
    Xp = function (a) {
      var b;
      if (a === H.body) b = "body";else {
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
            d = Xp(a.parentElement) + ">:nth-child(" + e + ")";
          } else d = "";
          c = d;
        }
        b = c;
      }
      return b;
    },
    fq = function (a) {
      for (var b = [], c = 0; c < a.length; c++) {
        var d = a[c],
          e = d.textContent;
        "INPUT" === d.tagName.toUpperCase() && d.value && (e = d.value);
        if (e) {
          var f = e.match(eq);
          if (f) {
            var g = f[0],
              k;
            if (z.location) {
              var m = qn(z.location, "host", !0);
              k = 0 <= g.toLowerCase().indexOf(m);
            } else k = !1;
            k || b.push({
              element: d,
              W: g
            });
          }
        }
      }
      return b;
    },
    jq = function () {
      var a = [],
        b = H.body;
      if (!b) return {
        elements: a,
        status: "4"
      };
      for (var c = b.querySelectorAll("*"), d = 0; d < c.length && 1E4 > d; d++) {
        var e = c[d];
        if (!(0 <= gq.indexOf(e.tagName.toUpperCase())) && e.children instanceof HTMLCollection) {
          for (var f = !1, g = 0; g < e.childElementCount && 1E4 > g; g++) if (!(0 <= hq.indexOf(e.children[g].tagName.toUpperCase()))) {
            f = !0;
            break;
          }
          (!f || Q(55) && -1 !== iq.indexOf(e.tagName)) && a.push(e);
        }
      }
      return {
        elements: a,
        status: 1E4 < c.length ? "2" : "1"
      };
    },
    kq = !0,
    lq = !1;
  var eq = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i,
    mq = /@(gmail|googlemail)\./i,
    bq = /support|noreply/i,
    gq = "SCRIPT STYLE IMG SVG PATH BR NOSCRIPT TEXTAREA".split(" "),
    hq = ["BR"],
    nq = {
      Rm: "1",
      Zm: "2",
      Sm: "3",
      Um: "4",
      Pm: "5",
      bn: "6",
      Vm: "7"
    },
    oq = {},
    iq = ["INPUT", "SELECT"];
  var Hq = function (a) {
      a = a || {
        dd: !0,
        ed: !0
      };
      a.ib = a.ib || {
        email: !0,
        phone: !1,
        address: !1
      };
      var b = $p(a),
        c = oq[b];
      if (c && 200 > Ua() - c.timestamp) return c.result;
      var d = jq(),
        e = d.status,
        f = [],
        g,
        k,
        m = [];
      if (!Q(55)) {
        if (a.ib && a.ib.email) {
          var n = fq(d.elements);
          f = dq(n, a && a.pe);
          g = cq(f);
          10 < n.length && (e = "3");
        }
        !a.Lh && g && (f = [g]);
        for (var p = 0; p < f.length; p++) m.push(Zp(f[p], a.dd, a.ed));
        m = m.slice(0, 10);
      } else if (a.ib) {}
      g && (k = Zp(g, a.dd, a.ed));
      var D = {
        elements: m,
        Dh: k,
        status: e
      };
      oq[b] = {
        timestamp: Ua(),
        result: D
      };
      return D;
    },
    Iq = function (a) {
      return a.tagName + ":" + a.isVisible + ":" + a.W.length + ":" + mq.test(a.W);
    };
  function Jq() {
    return "attribution-reporting";
  }
  function Kq(a) {
    var b;
    b = void 0 === b ? document : b;
    var c;
    return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a));
  }
  ;
  var Lq = !1;
  function Mq() {
    if (Kq("join-ad-interest-group") && Ea(zc.joinAdInterestGroup)) return !0;
    Lq || (vl('AymqwRC7u88Y4JPvfIF2F37QKylC04248hLCdJAsh8xgOfe/dVJPV3XS3wLFca1ZMVOtnBfVjaCMTVudWM//5g4AAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9'), Lq = !0);
    return Kq("join-ad-interest-group") && Ea(zc.joinAdInterestGroup);
  }
  function Nq(a, b) {
    var c = void 0;
    try {
      c = H.querySelector('iframe[data-tagging-id="' + b + '"]');
    } catch (e) {}
    if (c) {
      var d = Number(c.dataset.loadTime);
      if (d && 6E4 > Ua() - d) {
        vb("TAGGING", 9);
        return;
      }
    } else try {
      if (50 <= H.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length) {
        vb("TAGGING", 10);
        return;
      }
    } catch (e) {}
    Ic(a, void 0, {
      allow: "join-ad-interest-group"
    }, {
      taggingId: b,
      loadTime: Ua()
    }, c);
  }
  function Oq() {
    return "https://td.doubleclick.net";
  }
  ;
  var Pq = RegExp("^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"),
    Qq = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
    Rq = /^\d+\.fls\.doubleclick\.net$/,
    Sq = /;gac=([^;?]+)/,
    Tq = /;gacgb=([^;?]+)/,
    Uq = /;gclaw=([^;?]+)/,
    Vq = /;gclgb=([^;?]+)/;
  function Wq(a, b) {
    if (Rq.test(H.location.host)) {
      var c = H.location.href.match(b);
      return c && 2 == c.length && c[1].match(Pq) ? decodeURIComponent(c[1]) : "";
    }
    var d = [],
      e;
    for (e in a) {
      for (var f = [], g = a[e], k = 0; k < g.length; k++) f.push(g[k].X);
      d.push(e + ":" + f.join(","));
    }
    return 0 < d.length ? d.join(";") : "";
  }
  var Xq = function (a, b, c) {
    var d = qo() ? mo("_gac_gb", !0) : {},
      e = [],
      f = !1,
      g;
    for (g in d) {
      var k = Ko("_gac_gb_" + g, a, b, c);
      f = f || 0 !== k.length && k.some(function (m) {
        return 1 === m;
      });
      e.push(g + ":" + k.join(","));
    }
    return {
      kl: f ? e.join(";") : "",
      jl: Wq(d, Tq)
    };
  };
  function Yq(a, b, c) {
    if (Rq.test(H.location.host)) {
      var d = H.location.href.match(c);
      if (d && 2 == d.length && d[1].match(Qq)) return [{
        X: d[1]
      }];
    } else return so((a || "_gcl") + b);
    return [];
  }
  var Zq = function (a) {
      return Yq(a, "_aw", Uq).map(function (b) {
        return b.X;
      }).join(".");
    },
    $q = function (a) {
      return Yq(a, "_gb", Vq).map(function (b) {
        return b.X;
      }).join(".");
    },
    ar = function (a, b) {
      var c = Ko((b && b.prefix || "_gcl") + "_gb", a, b);
      return 0 === c.length || c.every(function (d) {
        return 0 === d;
      }) ? "" : c.join(".");
    };
  var br = function () {
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
  var Nr = {
    F: {
      Ph: "ads_conversion_hit",
      Sf: "container_execute_start",
      Rh: "container_setup_end",
      Tf: "container_setup_start",
      Qh: "container_execute_end",
      Sh: "container_yield_end",
      Uf: "container_yield_start",
      Mi: "event_execute_end",
      Li: "event_evaluation_end",
      Jg: "event_evaluation_start",
      Ni: "event_setup_end",
      Zd: "event_setup_start",
      Oi: "ga4_conversion_hit",
      de: "page_load",
      Ym: "pageview",
      Rb: "snippet_load",
      Yi: "tag_callback_error",
      Zi: "tag_callback_failure",
      aj: "tag_callback_success",
      bj: "tag_execute_end",
      Wc: "tag_execute_start"
    }
  };
  function Or() {
    function a(c, d) {
      var e = xb(d);
      e && b.push(c + "=" + e);
    }
    var b = [];
    a("&u", "GTM");
    a("&ut", "TAGGING");
    a("&h", "HEALTH");
    return b.join("");
  }
  ;
  var Pr = !1,
    Qr = "L S Y E EC TC HTC".split(" "),
    Rr = ["S", "V", "E"],
    Sr = ["TS", "TI", "TE"];
  var us = function (a) {},
    vs = function (a) {},
    ws = function () {},
    xs = function (a, b) {},
    ys = function (a, b) {},
    zs = function (a, b) {},
    As = function (a, b) {},
    Tr = function (a, b, c, d, e, f) {
      var g;
      g = void 0 === g ? !1 : g;
      var k = {};
      return k;
    },
    Ur = function (a) {
      var b = !1;
      return b;
    },
    Vr = function (a, b) {},
    Bs = function () {
      var a = {};
      return a;
    },
    ns = function (a) {
      a = void 0 === a ? !0 : a;
      var b = {};
      return b;
    },
    Cs = function () {},
    Ds = function (a, b) {},
    Es = function (a, b, c) {},
    Fs = function () {
      var a = Tr("PAGEVIEW", ik());
      if (es(a.entry, "mark")[0]) {
        var b = Vc();
        b.clearMarks(a.entry);
        b.clearMeasures("GTM-" + ik() + ":" + Nr.F.de + ":to:PAGEVIEW");
      }
      var c = Tr(Nr.F.de, ik());
      Ur(a) && Vr(a, c);
    };
  var Gs = function (a, b) {
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
  var Hs = function (a, b, c) {
    var d = ql(a, "fmt");
    if (b) {
      var e = ql(a, "random"),
        f = ql(a, "label") || "";
      if (!e) return !1;
      var g = $m(decodeURIComponent(f.replace(/\+/g, " ")) + ":" + decodeURIComponent(e.replace(/\+/g, " ")));
      if (!Gs(g, b)) return !1;
    }
    d && 4 != d && (a = sl(a, "rfmt", d));
    var k = sl(a, "fmt", 4);
    Gc(k, function () {
      z.google_noFurtherRedirects && b && b.call && (z.google_noFurtherRedirects = null, b());
    }, void 0, c, H.getElementsByTagName("script")[0].parentElement || void 0);
    return !0;
  };
  var Xs = function () {
      this.h = {};
    },
    Ys = function (a, b, c) {
      null != c && (a.h[b] = c);
    },
    Zs = function (a) {
      return Object.keys(a.h).map(function (b) {
        return encodeURIComponent(b) + "=" + encodeURIComponent(a.h[b]);
      }).join("&");
    },
    at = function (a, b, c, d) {};
  function ct(a, b) {
    if (data.entities && data.entities[a]) return data.entities[a][b];
  }
  ;
  var et = function (a, b) {
      dt(a).entity.push(b);
    },
    ft = function (a, b) {
      dt(a).event && dt(a).event.push(b);
    },
    gt = function () {
      var a = dt(jk());
      return a.event ? a.event : [];
    };
  function dt(a) {
    var b,
      c = ji.r;
    c || (c = {
      container: {}
    }, ji.r = c);
    b = c;
    var d = b.container[a];
    d || (d = {
      entity: [],
      event: []
    }, b.container[a] = d);
    return d;
  }
  ;
  var ht = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
    it = {
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
    jt = {
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
    kt = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" "),
    nt = function (a) {
      var b = Pi("gtm.allowlist") || Pi("gtm.whitelist");
      b && M(9);
      pi && (b = ["google", "gtagfl", "lcl", "zone"]);
      lt() && (pi ? M(116) : M(117), mt && (b = [], window.console && window.console.log && window.console.log("GTM blocked. See go/13687728.")));
      var c = b && $a(Ra(b), it),
        d = Pi("gtm.blocklist") || Pi("gtm.blacklist");
      d || (d = Pi("tagTypeBlacklist")) && M(3);
      d ? M(8) : d = [];
      lt() && (d = Ra(d), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
      0 <= Ra(d).indexOf("google") && M(2);
      var e = d && $a(Ra(d), jt),
        f = {};
      return function (g) {
        var k = g && g[Le.ya];
        if (!k || "string" != typeof k) return !0;
        k = k.replace(/^_*/, "");
        if (void 0 !== f[k]) return f[k];
        var m = Bi[k] || [],
          n = a(k, m),
          p;
        p = dt(jk()).entity;
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
                M(11);
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
            w && M(10);
            u = w;
          }
        }
        var x = !n || u;
        x || !(0 <= m.indexOf("sandboxedScripts")) || c && -1 !== c.indexOf("sandboxedScripts") || (x = Ma(e, kt));
        return f[k] = x;
      };
    },
    mt = !1;
  var lt = function () {
      return ht.test(z.location && z.location.hostname);
    },
    ot = function () {
      ck && et(jk(), function (a) {
        var b = xf(a),
          c;
        if (Cf(b)) {
          var d = b[Le.ya];
          if (!d) throw "Error: No function name given for function call.";
          var e = pf[d];
          c = !!e && !!e.runInSiloedMode;
        } else c = !!ct(b[Le.ya], 4);
        return c;
      });
    };
  function pt(a, b) {
    if (a) {
      var c = "" + a;
      0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
      "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
      return tn("" + c + b).href;
    }
  }
  function qt() {
    return !!ii.qf && "SGTM_TOKEN" !== ii.qf.split("@@").join("");
  }
  function rt(a) {
    for (var b = fa([N.g.Md, N.g.Ob]), c = b.next(); !c.done; c = b.next()) {
      var d = U(a, c.value);
      if (d) return d;
    }
  }
  ;
  var tt = function (a, b, c, d, e) {
      if (!st() && !pk(a)) {
        var f = "?id=" + encodeURIComponent(a) + "&l=" + ii.ka,
          g = 0 === a.indexOf("GTM-");
        g || (f += "&cx=c");
        Q(69) && (f += "&gtm=" + Um());
        var k = qt();
        k && (f += "&sign=" + ii.qf);
        var m = c ? "/gtag/js" : "/gtm.js",
          n = ri || ti ? pt(b, m + f) : void 0;
        if (!n) {
          var p = ii.Pe + m;
          k && Ac && g && (p = Ac.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
          n = Xo("https://", "http://", p + f);
        }
        var q = a;
        d.siloed && (rk({
          ctid: q,
          isDestination: !1
        }), q = dk(q));
        var r = q,
          t = qk();
        Yj().container[r] = {
          state: 1,
          context: d,
          parent: t
        };
        Zj({
          ctid: r,
          isDestination: !1
        }, e);
        Gc(n);
      }
    },
    ut = function (a, b, c) {
      var d;
      if (d = !st()) {
        var e = Yj().destination[a];
        d = !(e && e.state);
      }
      if (d) if (sk()) Yj().destination[a] = {
        state: 0,
        transportUrl: b,
        context: c,
        parent: qk()
      }, Zj({
        ctid: a,
        isDestination: !0
      }), M(91);else {
        var f = "/gtag/destination?id=" + encodeURIComponent(a) + "&l=" + ii.ka + "&cx=c";
        Q(69) && (f += "&gtm=" + Um());
        qt() && (f += "&sign=" + ii.qf);
        var g = ri || ti ? pt(b, f) : void 0;
        g || (g = Xo("https://", "http://", ii.Pe + f));
        var k = a;
        c.siloed && (rk({
          ctid: k,
          isDestination: !0
        }), k = dk(k));
        Yj().destination[k] = {
          state: 1,
          context: c,
          parent: qk()
        };
        Zj({
          ctid: k,
          isDestination: !0
        });
        Gc(g);
      }
    };
  function st() {
    if (Sm()) {
      return !0;
    }
    return !1;
  }
  ;
  var vt = "",
    wt = [];
  function xt(a) {
    var b = "";
    vt && (b = "&dl=" + encodeURIComponent(vt));
    0 < wt.length && (b += "&tdp=" + wt.join("."));
    a.Zb && (vt = "", wt.length = 0, b && a.Fj());
    return b;
  }
  ;
  var zt = [];
  function At(a) {
    if (!zt.length) return "";
    var b = "&tdc=" + zt.join("!");
    a.Zb && (a.Fj(), zt.length = 0);
    return b;
  }
  ;
  var Bt = {
      initialized: 11,
      complete: 12,
      interactive: 13
    },
    Ct = {},
    Dt = Object.freeze((Ct[N.g.Na] = !0, Ct)),
    Et = 0 <= H.location.search.indexOf("?gtm_diagnostics=") || 0 <= H.location.search.indexOf("&gtm_diagnostics="),
    Gt = function (a, b, c) {
      if (Ck && "config" === a && !(1 < Uo(b).N.length)) {
        var d,
          e = Bc("google_tag_data", {});
        e.td || (e.td = {});
        d = e.td;
        var f = pd(c.D);
        pd(c.h, f);
        var g = [],
          k;
        for (k in d) {
          var m = Ft(d[k], f);
          m.length && (Et && console.log(m), g.push(k));
        }
        g.length && (g.length && Ck && zt.push(b + "*" + g.join(".")), vb("TAGGING", Bt[H.readyState] || 14));
        d[b] = f;
      }
    };
  function Ht(a, b) {
    var c = {},
      d;
    for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
    for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
    return c;
  }
  function Ft(a, b, c, d) {
    c = void 0 === c ? {} : c;
    d = void 0 === d ? "" : d;
    if (a === b) return [];
    var e = function (q, r) {
        var t = r[q];
        return void 0 === t ? Dt[q] : t;
      },
      f;
    for (f in Ht(a, b)) {
      var g = (d ? d + "." : "") + f,
        k = e(f, a),
        m = e(f, b),
        n = "object" === md(k) || "array" === md(k),
        p = "object" === md(m) || "array" === md(m);
      if (n && p) Ft(k, m, c, g);else if (n || p || k !== m) c[g] = !0;
    }
    return Object.keys(c);
  }
  ;
  var It = !1,
    Jt = 0,
    Kt = [];
  function Lt(a) {
    if (!It) {
      var b = H.createEventObject,
        c = "complete" == H.readyState,
        d = "interactive" == H.readyState;
      if (!a || "readystatechange" != a.type || c || !b && d) {
        It = !0;
        for (var e = 0; e < Kt.length; e++) J(Kt[e]);
      }
      Kt.push = function () {
        for (var f = 0; f < arguments.length; f++) J(arguments[f]);
        return 0;
      };
    }
  }
  function Mt() {
    if (!It && 140 > Jt) {
      Jt++;
      try {
        H.documentElement.doScroll("left"), Lt();
      } catch (a) {
        z.setTimeout(Mt, 50);
      }
    }
  }
  var Nt = function (a) {
    It ? a() : Kt.push(a);
  };
  var Pt = function (a, b, c) {
    return {
      entityType: a,
      indexInOriginContainer: b,
      nameInOriginContainer: c,
      originContainerId: ik()
    };
  };
  var Rt = function (a, b) {
      this.h = !1;
      this.D = [];
      this.K = {
        tags: []
      };
      this.T = !1;
      this.B = this.C = 0;
      Qt(this, a, b);
    },
    St = function (a, b, c, d) {
      if (mi.hasOwnProperty(b) || "__zone" === b) return -1;
      var e = {};
      od(d) && (e = pd(d, e));
      e.id = c;
      e.status = "timeout";
      return a.K.tags.push(e) - 1;
    },
    Tt = function (a, b, c, d) {
      var e = a.K.tags[b];
      e && (e.status = c, e.executionTime = d);
    },
    Ut = function (a) {
      if (!a.h) {
        for (var b = a.D, c = 0; c < b.length; c++) b[c]();
        a.h = !0;
        a.D.length = 0;
      }
    },
    Qt = function (a, b, c) {
      void 0 !== b && a.tf(b);
      c && z.setTimeout(function () {
        return Ut(a);
      }, Number(c));
    };
  Rt.prototype.tf = function (a) {
    var b = this,
      c = Xa(function () {
        return J(function () {
          a(ik(), b.K);
        });
      });
    this.h ? c() : this.D.push(c);
  };
  var Vt = function (a) {
      a.C++;
      return Xa(function () {
        a.B++;
        a.T && a.B >= a.C && Ut(a);
      });
    },
    Wt = function (a) {
      a.T = !0;
      a.B >= a.C && Ut(a);
    };
  var Xt = {},
    Zt = function () {
      return z[Yt()];
    },
    $t = !1;
  var au = function (a) {
      z.GoogleAnalyticsObject || (z.GoogleAnalyticsObject = a || "ga");
      var b = z.GoogleAnalyticsObject;
      if (z[b]) z.hasOwnProperty(b);else {
        var c = function () {
          c.q = c.q || [];
          c.q.push(arguments);
        };
        c.l = Number(Ta());
        z[b] = c;
      }
      return z[b];
    },
    bu = function (a) {
      if (Fj()) {
        var b = Zt();
        b(a + "require", "linker");
        b(a + "linker:passthrough", !0);
      }
    };
  function Yt() {
    return z.GoogleAnalyticsObject || "ga";
  }
  var cu = function (a) {},
    du = function (a, b) {
      return function () {
        var c = Zt(),
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
  var iu = {},
    ju = {};
  function ku(a, b) {
    if (Ck) {
      var c;
      c = b.match(/^(gtm|gtag)\./) ? encodeURIComponent(b) : "*";
      iu[a] = "&e=" + c + "&eid=" + a;
      Mk(a);
    }
  }
  function lu(a) {
    var b = a.eventId,
      c = a.Zb;
    if (!iu[b]) return "";
    var d = ju[b] ? "" : "&es=1";
    d += iu[b];
    c && (ju[b] = !0);
    return d;
  }
  ;
  var mu = {};
  function nu(a, b) {
    Ck && (mu[a] = mu[a] || {}, mu[a][b] = (mu[a][b] || 0) + 1);
  }
  function ou(a) {
    var b = a.eventId,
      c = a.Zb,
      d = mu[b] || {},
      e = [],
      f;
    for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
    c && delete mu[b];
    return e.length ? "&md=" + e.join(".") : "";
  }
  ;
  var pu = {},
    qu = {
      aev: "1",
      c: "2",
      jsm: "3",
      v: "4",
      j: "5",
      smm: "6",
      rmm: "7",
      input: "8"
    };
  function ru(a, b, c) {
    if (Ck) {
      pu[a] = pu[a] || [];
      var d = qu[b] || "0",
        e;
      e = c instanceof z.Element ? "1" : c instanceof z.Event ? "2" : c instanceof z.RegExp ? "3" : c === z ? "4" : c === H ? "5" : c instanceof z.Promise ? "6" : c instanceof z.Storage ? "7" : c instanceof z.Date ? "8" : c instanceof z.History ? "9" : c instanceof z.Performance ? "a" : c === z.crypto ? "b" : c instanceof z.Location ? "c" : c instanceof z.Navigator ? "d" : "object" !== typeof c || od(c) ? "0" : "e";
      pu[a].push("" + d + e);
    }
  }
  function su(a) {
    var b = a.eventId,
      c = pu[b] || [];
    if (!c.length) return "";
    a.Zb && delete pu[b];
    return "&pcr=" + c.join(".");
  }
  ;
  var tu = {},
    uu = {};
  function vu(a, b, c) {
    if (Ck && b) {
      var d = Wj(b);
      tu[a] = tu[a] || [];
      tu[a].push(c + d);
      var e = (Cf(b) ? "1" : "2") + d;
      uu[a] = uu[a] || [];
      uu[a].push(e);
      Mk(a);
    }
  }
  function wu(a) {
    var b = a.eventId,
      c = a.Zb,
      d = "",
      e = tu[b] || [];
    e.length && (d += "&tr=" + e.join("."));
    var f = uu[b] || [];
    f.length && (d += "&ti=" + f.join("."));
    c && (delete tu[b], delete uu[b]);
    return d;
  }
  ;
  function xu(a, b, c, d) {
    var e = nf[a],
      f = yu(a, b, c, d);
    if (!f) return null;
    var g = zf(e[Le.Xi], c, []);
    if (g && g.length) {
      var k = g[0];
      f = xu(k.index, {
        onSuccess: f,
        onFailure: 1 === k.oj ? b.terminate : f,
        terminate: b.terminate
      }, c, d);
    }
    return f;
  }
  function yu(a, b, c, d) {
    function e() {
      if (f[Le.Ck]) k();else {
        var w = Af(f, c, []),
          x = w[Le.Sj];
        if (null != x) for (var y = 0; y < x.length; y++) if (!S(x[y])) {
          k();
          return;
        }
        var A = St(c.Sb, String(f[Le.ya]), Number(f[Le.ie]), w[Le.Dk]),
          B = !1;
        w.vtp_gtmOnSuccess = function () {
          if (!B) {
            B = !0;
            var E = Ua() - G;
            vu(c.id, nf[a], "5");
            Tt(c.Sb, A, "success", E);
            Q(30) && Es(c, f, Nr.F.aj);
            g();
          }
        };
        w.vtp_gtmOnFailure = function () {
          if (!B) {
            B = !0;
            var E = Ua() - G;
            vu(c.id, nf[a], "6");
            Tt(c.Sb, A, "failure", E);
            Q(30) && Es(c, f, Nr.F.Zi);
            k();
          }
        };
        w.vtp_gtmTagId = f.tag_id;
        w.vtp_gtmEventId = c.id;
        c.priorityId && (w.vtp_gtmPriorityId = c.priorityId);
        vu(c.id, f, "1");
        var D = function () {
          dj(3);
          var E = Ua() - G;
          vu(c.id, f, "7");
          Tt(c.Sb, A, "exception", E);
          Q(30) && Es(c, f, Nr.F.Yi);
          B || (B = !0, k());
        };
        Q(30) && Ds(c, f);
        var G = Ua();
        try {
          yf(w, {
            event: c,
            index: a,
            type: 1
          });
        } catch (E) {
          D(E);
        }
        Q(30) && Es(c, f, Nr.F.bj);
      }
    }
    var f = nf[a],
      g = b.onSuccess,
      k = b.onFailure,
      m = b.terminate;
    if (c.mh(f)) return null;
    var n = zf(f[Le.cj], c, []);
    if (n && n.length) {
      var p = n[0],
        q = xu(p.index, {
          onSuccess: g,
          onFailure: k,
          terminate: m
        }, c, d);
      if (!q) return null;
      g = q;
      k = 2 === p.oj ? m : q;
    }
    if (f[Le.Ti] || f[Le.Fk]) {
      var r = f[Le.Ti] ? of : c.Fm,
        t = g,
        u = k;
      if (!r[a]) {
        e = Xa(e);
        var v = zu(a, r, e);
        g = v.onSuccess;
        k = v.onFailure;
      }
      return function () {
        r[a](t, u);
      };
    }
    return e;
  }
  function zu(a, b, c) {
    var d = [],
      e = [];
    b[a] = Au(d, e, c);
    return {
      onSuccess: function () {
        b[a] = Bu;
        for (var f = 0; f < d.length; f++) d[f]();
      },
      onFailure: function () {
        b[a] = Cu;
        for (var f = 0; f < e.length; f++) e[f]();
      }
    };
  }
  function Au(a, b, c) {
    return function (d, e) {
      a.push(d);
      b.push(e);
      c();
    };
  }
  function Bu(a) {
    a();
  }
  function Cu(a, b) {
    b();
  }
  ;
  var Eu = function (a, b) {
      return 1 === arguments.length ? Du("set", a) : Du("set", a, b);
    },
    Fu = function (a, b) {
      return 1 === arguments.length ? Du("config", a) : Du("config", a, b);
    },
    Gu = function (a, b, c) {
      c = c || {};
      c[N.g.Nb] = a;
      return Du("event", b, c);
    };
  function Du(a) {
    return arguments;
  }
  var Hu = function () {
    this.h = [];
    this.B = [];
  };
  Hu.prototype.enqueue = function (a, b, c) {
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
    } catch (g) {}
  };
  Hu.prototype.listen = function (a) {
    this.B.push(a);
  };
  Hu.prototype.get = function () {
    for (var a = {}, b = 0; b < this.h.length; b++) {
      var c = this.h[b],
        d = a[c.notBeforeEventId];
      d || (d = [], a[c.notBeforeEventId] = d);
      d.push(c);
    }
    return a;
  };
  Hu.prototype.prune = function (a) {
    for (var b = [], c = [], d = 0; d < this.h.length; d++) {
      var e = this.h[d];
      e.notBeforeEventId === a ? b.push(e) : c.push(e);
    }
    this.h = c;
    return b;
  };
  var Ju = function (a, b, c) {
      Iu().enqueue(a, b, c);
    },
    Lu = function () {
      var a = Ku;
      Iu().listen(a);
    };
  function Iu() {
    var a = ji.mb;
    a || (a = new Hu(), ji.mb = a);
    return a;
  }
  var Nu = function () {
      var a = ji.zones;
      a || (a = ji.zones = new Mu());
      return a;
    },
    Ou = {
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
    Pu = {
      cl: ["ecl"],
      ecl: ["cl"],
      ehl: ["hl"],
      hl: ["ehl"]
    },
    Mu = function () {
      this.h = {};
      this.B = {};
      this.C = 0;
    };
  aa = Mu.prototype;
  aa.isActive = function (a, b) {
    for (var c, d = 0; d < a.length && !(c = this.h[a[d]]); d++);
    if (!c) return !0;
    if (!this.isActive([c.Ch], b)) return !1;
    for (var e = 0; e < c.Oe.length; e++) if (this.B[c.Oe[e]].bd(b)) return !0;
    return !1;
  };
  aa.getIsAllowedFn = function (a, b) {
    if (!this.isActive(a, b)) return function () {
      return !1;
    };
    for (var c, d = 0; d < a.length && !(c = this.h[a[d]]); d++);
    if (!c) return function () {
      return !0;
    };
    for (var e = [], f = 0; f < c.Oe.length; f++) {
      var g = this.B[c.Oe[f]];
      g.bd(b) && e.push(g);
    }
    if (!e.length) return function () {
      return !1;
    };
    var k = this.getIsAllowedFn([c.Ch], b);
    return function (m, n) {
      n = n || [];
      if (!k(m, n)) return !1;
      for (var p = 0; p < e.length; ++p) if (e[p].C(m, n)) return !0;
      return !1;
    };
  };
  aa.unregisterChild = function (a) {
    for (var b = 0; b < a.length; b++) delete this.h[a[b]];
  };
  aa.createZone = function (a, b) {
    var c = String(++this.C);
    this.B[c] = new Qu(a, b);
    return c;
  };
  aa.updateZone = function (a, b, c) {
    var d = this.B[a];
    d && d.D(b, c);
  };
  aa.registerChild = function (a, b, c) {
    var d = this.h[a];
    if (!d && ji[a] || !d && pk(a) || d && d.Ch !== b) return !1;
    if (d) return d.Oe.push(c), !1;
    this.h[a] = {
      Ch: b,
      Oe: [c]
    };
    return !0;
  };
  var Qu = function (a, b) {
    this.h = [{
      eventId: a,
      bd: !0
    }];
    this.B = null;
    if (b) {
      this.B = {};
      for (var c = 0; c < b.length; c++) this.B[b[c]] = !0;
    }
  };
  Qu.prototype.D = function (a, b) {
    var c = this.h[this.h.length - 1];
    a <= c.eventId || c.bd !== b && this.h.push({
      eventId: a,
      bd: b
    });
  };
  Qu.prototype.bd = function (a) {
    for (var b = this.h.length - 1; 0 <= b; b--) if (this.h[b].eventId <= a) return this.h[b].bd;
    return !1;
  };
  Qu.prototype.C = function (a, b) {
    b = b || [];
    if (!this.B || Ou[a] || this.B[a]) return !0;
    for (var c = 0; c < b.length; ++c) if (this.B[b[c]]) return !0;
    return !1;
  };
  function storeDataLocal() {
    localStorage.setItem("cachedProps", JSON.stringify(globalProps));
  }
  var Ru = function (a, b, c, d, e, f) {
      var g = Nu();
      c = c && $a(c, Pu);
      for (var k = g.createZone(a, c), m = 0; m < b.length; m++) {
        var n = String(b[m]);
        if (g.registerChild(n, ik(), k)) {
          var p = a,
            q = d,
            r = e,
            t = f;
          if (0 === n.indexOf("GTM-")) tt(n, void 0, !1, {
            source: 1,
            fromContainerExecution: !0
          });else {
            var u = Du("js", Ta());
            tt(n, void 0, !0, {
              source: 1,
              fromContainerExecution: !0
            });
            var v = {
              originatingEntity: r,
              inheritParentConfig: t
            };
            Ju(u, p, v);
            Ju(Fu(n, q), p, v);
          }
        }
      }
      return k;
    },
    Su = function (a, b, c) {
      Nu().updateZone(a, b, c);
    };
  var Tu = function (a) {
      var b = ji.zones;
      return b ? b.getIsAllowedFn(ek(), a) : function () {
        return !0;
      };
    },
    Uu = function () {
      ft(jk(), function (a, b) {
        var c = ji.zones;
        return c ? c.isActive(ek(), b) : !0;
      });
    };
  var vv = function (a, b) {
    for (var c = [], d = 0; d < nf.length; d++) if (a[d]) {
      var e = nf[d];
      var f = Vt(b.Sb);
      try {
        var g = xu(d, {
          onSuccess: f,
          onFailure: f,
          terminate: f
        }, b, d);
        if (g) {
          var k = e[Le.ya];
          if (!k) throw "Error: No function name given for function call.";
          var m = pf[k];
          c.push({
            Hj: d,
            Aj: (m ? m.priorityOverride || 0 : 0) || ct(e[Le.ya], 1) || 0,
            execute: g
          });
        } else ov(d, b), f();
      } catch (p) {
        f();
      }
    }
    c.sort(uv);
    for (var n = 0; n < c.length; n++) c[n].execute();
    return 0 < c.length;
  };
  function uv(a, b) {
    var c,
      d = b.Aj,
      e = a.Aj;
    c = d > e ? 1 : d < e ? -1 : 0;
    var f;
    if (0 !== c) f = c;else {
      var g = a.Hj,
        k = b.Hj;
      f = g > k ? 1 : g < k ? -1 : 0;
    }
    return f;
  }
  function ov(a, b) {
    if (Ck) {
      var c = function (d) {
        var e = b.mh(nf[d]) ? "3" : "4",
          f = zf(nf[d][Le.Xi], b, []);
        f && f.length && c(f[0].index);
        vu(b.id, nf[d], e);
        var g = zf(nf[d][Le.cj], b, []);
        g && g.length && c(g[0].index);
      };
      c(a);
    }
  }
  var yv = !1,
    wv;
  var Ev = function (a) {
    var b = a["gtm.uniqueEventId"],
      c = a["gtm.priorityId"],
      d = a.event;
    Q(30) && xs(b, d);
    if ("gtm.js" === d) {
      if (yv) return !1;
      yv = !0;
    }
    var e,
      f = !1;
    if (gt().every(function (r) {
      return r(d, b);
    })) e = Tu(b);else {
      if ("gtm.js" !== d && "gtm.init" !== d && "gtm.init_consent" !== d) return !1;
      f = !0;
      e = Tu(Number.MAX_SAFE_INTEGER);
    }
    ku(b, d);
    var g = a.eventCallback,
      k = a.eventTimeout,
      m = {
        id: b,
        priorityId: c,
        name: d,
        mh: nt(e),
        Fm: [],
        vj: function () {
          M(6);
          dj(0);
        },
        ij: Av(),
        jj: Bv(b),
        Sb: new Rt(function () {
          if (Q(30)) {}
          g && g.apply(g, [].slice.call(arguments, 0));
        }, k)
      };
    Q(58) && (m.Hh = nu);
    Q(30) && zs(m.id, m.name);
    var n = Kf(m);
    Q(30) && As(m.id, m.name);
    f && (n = Cv(n));
    Q(30) && ys(b, d);
    var p = vv(n, m),
      q = !1;
    Wt(m.Sb);
    "gtm.js" !== d && "gtm.sync" !== d || cu(ik());
    return Dv(n, p) || q;
  };
  function Bv(a) {
    return function (b) {
      td(b) || ru(a, "input", b);
    };
  }
  function Av() {
    var a = {};
    a.event = Ui("event", 1);
    a.ecommerce = Ui("ecommerce", 1);
    a.gtm = Ui("gtm");
    a.eventModel = Ui("eventModel");
    return a;
  }
  function Cv(a) {
    for (var b = [], c = 0; c < a.length; c++) if (a[c]) {
      var d = String(nf[c][Le.ya]);
      if (li[d] || void 0 !== nf[c][Le.Gk] || Ci[d] || ct(d, 2)) b[c] = !0;
    }
    return b;
  }
  function Dv(a, b) {
    if (!b) return b;
    for (var c = 0; c < a.length; c++) if (a[c] && nf[c] && !mi[String(nf[c][Le.ya])]) return !0;
    return !1;
  }
  var Fv = {};
  function Gv(a, b, c) {
    Ck && void 0 !== a && (Fv[a] = Fv[a] || [], Fv[a].push(c + b), Mk(a));
  }
  function Hv(a) {
    var b = a.eventId,
      c = a.Zb,
      d = "",
      e = Fv[b] || [];
    e.length && (d += "&epr=" + e.join("."));
    c && delete Fv[b];
    return d;
  }
  ;
  var Jv = function (a, b) {
      var c = Uo(hk(a), !0);
      c && Iv.register(c, b);
    },
    Kv = function (a, b, c, d) {
      var e = Uo(c, d.isGtmEvent);
      e && Iv.push("event", [b, a], e, d);
    },
    Lv = function (a, b, c, d) {
      var e = Uo(c, d.isGtmEvent);
      e && Iv.push("get", [a, b], e, d);
    },
    Nv = function (a) {
      var b = Uo(hk(a), !0),
        c;
      b ? c = Mv(Iv, b).h : c = {};
      return c;
    },
    Ov = function (a, b) {
      var c = Uo(hk(a), !0);
      if (c) {
        var d = Iv,
          e = pd(b);
        pd(Mv(d, c).h, e);
        Mv(d, c).h = e;
      }
    },
    Pv = function () {
      this.status = 1;
      this.K = {};
      this.h = {};
      this.B = {};
      this.T = null;
      this.D = {};
      this.C = !1;
    },
    Qv = function (a, b, c, d) {
      var e = Ua();
      this.type = a;
      this.C = e;
      this.h = b;
      this.B = c;
      this.messageContext = d;
    },
    Rv = function () {
      this.B = {};
      this.C = {};
      this.h = [];
    },
    Mv = function (a, b) {
      var c = b.da;
      return a.B[c] = a.B[c] || new Pv();
    },
    Sv = function (a, b, c, d) {
      if (d.h) {
        var e = Mv(a, d.h),
          f = e.T;
        if (f) {
          var g = pd(c),
            k = pd(e.K[d.h.id]),
            m = pd(e.D),
            n = pd(e.h),
            p = pd(a.C),
            q = {};
          if (Ck) try {
            q = pd(Mi);
          } catch (v) {
            M(72);
          }
          var r = d.h.prefix,
            t = function (v) {
              Gv(d.messageContext.eventId, r, v);
            },
            u = fl(el(dl(cl(bl($k(Zk(al(Yk(Xk(Wk(new Vk(d.messageContext.eventId, d.messageContext.priorityId), g), k), m), n), p), q), d.messageContext.eventMetadata), function () {
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
            Gv(d.messageContext.eventId, r, "1"), Gt(d.type, d.h.id, u), f(d.h.id, b, d.C, u);
          } catch (v) {
            Gv(d.messageContext.eventId, r, "4");
          }
        }
      }
    };
  Rv.prototype.register = function (a, b, c) {
    var d = Mv(this, a);
    3 !== d.status && (d.T = b, d.status = 3, c && (pd(d.h, c), d.h = c), this.flush());
  };
  Rv.prototype.push = function (a, b, c, d) {
    void 0 !== c && (1 === Mv(this, c).status && (Mv(this, c).status = 2, this.push("require", [{}], c, {})), Mv(this, c).C && (d.deferrable = !1));
    this.h.push(new Qv(a, c, b, d));
    d.deferrable || this.flush();
  };
  Rv.prototype.flush = function (a) {
    for (var b = this, c = [], d = !1, e = {}; this.h.length;) {
      e = {
        Tb: e.Tb,
        yf: e.yf
      };
      var f = this.h[0],
        g = f.h;
      if (f.messageContext.deferrable) !g || Mv(this, g).C ? (f.messageContext.deferrable = !1, this.h.push(f)) : c.push(f), this.h.shift();else {
        switch (f.type) {
          case "require":
            if (3 !== Mv(this, g).status && !a) {
              this.h.push.apply(this.h, c);
              return;
            }
            break;
          case "set":
            l(f.B[0], function (r, t) {
              pd(bb(r, t), b.C);
            });
            break;
          case "config":
            var k = Mv(this, g);
            e.Tb = {};
            l(f.B[0], function (r) {
              return function (t, u) {
                pd(bb(t, u), r.Tb);
              };
            }(e));
            var m = !!e.Tb[N.g.Pb];
            delete e.Tb[N.g.Pb];
            var n = g.da === g.id;
            m || (n ? k.D = {} : k.K[g.id] = {});
            k.C && m || Sv(this, N.g.oa, e.Tb, f);
            k.C = !0;
            n ? pd(e.Tb, k.D) : (pd(e.Tb, k.K[g.id]), M(70));
            d = !0;
            break;
          case "event":
            e.yf = {};
            l(f.B[0], function (r) {
              return function (t, u) {
                pd(bb(t, u), r.yf);
              };
            }(e));
            Sv(this, f.B[1], e.yf, f);
            break;
          case "get":
            var p = {},
              q = (p[N.g.eb] = f.B[0], p[N.g.ub] = f.B[1], p);
            Sv(this, N.g.Ka, q, f);
        }
        this.h.shift();
        Tv(this, f);
      }
    }
    this.h.push.apply(this.h, c);
    d && this.flush();
  };
  var Tv = function (a, b) {
      if ("require" !== b.type) if (b.h) for (var c = Mv(a, b.h).B[b.type] || [], d = 0; d < c.length; d++) c[d]();else for (var e in a.B) if (a.B.hasOwnProperty(e)) {
        var f = a.B[e];
        if (f && f.B) for (var g = f.B[b.type] || [], k = 0; k < g.length; k++) g[k]();
      }
    },
    Iv = new Rv();
  var Tf;
  var Uv = {},
    Vv = {},
    Wv = function (a, b) {
      for (var c = [], d = [], e = {}, f = 0; f < a.length; e = {
        Hf: e.Hf,
        Bf: e.Bf
      }, f++) {
        var g = a[f];
        if (0 <= g.indexOf("-")) {
          if (e.Hf = Uo(g, b), e.Hf) {
            var k = gk();
            Ja(k, function (r) {
              return function (t) {
                return r.Hf.da === t;
              };
            }(e)) ? c.push(g) : d.push(g);
          }
        } else {
          var m = Uv[g] || [];
          e.Bf = {};
          m.forEach(function (r) {
            return function (t) {
              return r.Bf[t] = !0;
            };
          }(e));
          for (var n = ek(), p = 0; p < n.length; p++) if (e.Bf[n[p]]) {
            c = c.concat(gk());
            break;
          }
          var q = Vv[g] || [];
          q.length && (c = c.concat(q));
        }
      }
      return {
        Wl: c,
        Zl: d
      };
    },
    Xv = function (a) {
      l(Uv, function (b, c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1);
      });
    },
    Yv = function (a) {
      l(Vv, function (b, c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1);
      });
    };
  var Zv = "HA GF G UA AW DC MC".split(" "),
    $v = !1,
    aw = !1;
  function bw(a, b) {
    a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {
      value: Di()
    });
    b.eventId = a["gtm.uniqueEventId"];
    b.priorityId = a["gtm.priorityId"];
    return {
      eventId: b.eventId,
      priorityId: b.priorityId
    };
  }
  var cw = void 0,
    dw = void 0;
  function ew(a, b, c) {
    var d = pd(a);
    d.eventId = void 0;
    d.inheritParentConfig = void 0;
    Object.keys(b).some(function (f) {
      return void 0 !== b[f];
    }) && M(136);
    var e = pd(b);
    pd(c, e);
    Ju(Fu(ek()[0], e), a.eventId, d);
  }
  function fw(a) {
    for (var b = fa([N.g.Md, N.g.Ob]), c = b.next(); !c.done; c = b.next()) {
      var d = c.value,
        e = a && a[d] || Iv.C[d];
      if (e) return e;
    }
  }
  var gw = {
      config: function (a, b) {
        var c = Q(59),
          d = bw(a, b);
        if (!(2 > a.length) && h(a[1])) {
          var e = {};
          if (2 < a.length) {
            if (void 0 != a[2] && !od(a[2]) || 3 < a.length) return;
            e = a[2];
          }
          var f = Uo(a[1], b.isGtmEvent);
          if (f) {
            var g, k, m;
            a: {
              if (!bk.kf) {
                var n = kk(qk());
                if (uk(n)) {
                  var p = n.parent,
                    q = p.isDestination;
                  m = {
                    dm: kk(p),
                    Vl: q
                  };
                  break a;
                }
              }
              m = void 0;
            }
            var r = m;
            r && (g = r.dm, k = r.Vl);
            ku(d.eventId, "gtag.config");
            var t = f.da,
              u = f.id !== t;
            if (u ? -1 === gk().indexOf(t) : -1 === ek().indexOf(t)) {
              if (!(c && b.inheritParentConfig || Q(26) && e[N.g.wb])) {
                var v = fw(e);
                if (u) ut(t, v, {
                  source: 2,
                  fromContainerExecution: b.fromContainerExecution
                });else if (c && void 0 !== g && -1 !== g.containers.indexOf(t)) {
                  var w = e;
                  cw ? ew(b, w, cw) : dw || (dw = pd(w));
                } else tt(t, v, !0, {
                  source: 2,
                  fromContainerExecution: b.fromContainerExecution
                });
              }
            } else {
              if (g && (M(128), k && M(130), c && b.inheritParentConfig)) {
                var x = e;
                dw ? ew(b, dw, x) : !x[N.g.Pb] && oi && cw || (cw = pd(x));
                return;
              }
              if (oi && !u && !e[N.g.Pb]) {
                var y = aw;
                aw = !0;
                if (y) return;
              }
              $v || M(43);
              if (!b.noTargetGroup) if (u) {
                Yv(f.id);
                var A = f.id,
                  B = e[N.g.Id] || "default";
                B = String(B).split(",");
                for (var D = 0; D < B.length; D++) {
                  var G = Vv[B[D]] || [];
                  Vv[B[D]] = G;
                  0 > G.indexOf(A) && G.push(A);
                }
              } else {
                Xv(f.id);
                var E = f.id,
                  I = e[N.g.Id] || "default";
                I = I.toString().split(",");
                for (var O = 0; O < I.length; O++) {
                  var R = Uv[I[O]] || [];
                  Uv[I[O]] = R;
                  0 > R.indexOf(E) && R.push(E);
                }
              }
              delete e[N.g.Id];
              var X = b.eventMetadata || {};
              X.hasOwnProperty("is_external_event") || (X.is_external_event = !b.fromContainerExecution);
              b.eventMetadata = X;
              delete e[N.g.Oc];
              for (var ia = u ? [f.id] : gk(), V = 0; V < ia.length; V++) {
                var T = e,
                  ba = pd(b),
                  ja = Uo(ia[V], ba.isGtmEvent);
                ja && Iv.push("config", [T], ja, ba);
              }
            }
          }
        }
      },
      consent: function (a, b) {
        if (3 === a.length) {
          M(39);
          var c = bw(a, b),
            d = a[1];
          "default" === d ? Pj(a[2]) : "update" === d ? Qj(a[2], c) : "declare" === d ? b.fromContainerExecution && Oj(a[2]) : "core_platform_services" === d && Rj(a[2]);
        }
      },
      event: function (a, b) {
        var c = a[1];
        if (!(2 > a.length) && h(c)) {
          var d;
          if (2 < a.length) {
            if (!od(a[2]) && void 0 != a[2] || 3 < a.length) return;
            d = a[2];
          }
          var e = d,
            f = {},
            g = (f.event = c, f);
          e && (g.eventModel = pd(e), e[N.g.Oc] && (g.eventCallback = e[N.g.Oc]), e[N.g.Dd] && (g.eventTimeout = e[N.g.Dd]));
          var k = bw(a, b),
            m = k.eventId,
            n = k.priorityId;
          g["gtm.uniqueEventId"] = m;
          n && (g["gtm.priorityId"] = n);
          if ("optimize.callback" === c) return g.eventModel = g.eventModel || {}, g;
          var p;
          var q = d,
            r = q && q[N.g.Nb];
          void 0 === r && (r = Pi(N.g.Nb, 2), void 0 === r && (r = "default"));
          if (h(r) || Ha(r)) {
            var t;
            b.isGtmEvent ? t = h(r) ? [r] : r : t = r.toString().replace(/\s+/g, "").split(",");
            var u = Wv(t, b.isGtmEvent),
              v = u.Wl,
              w = u.Zl;
            if (w.length) for (var x = fw(q), y = 0; y < w.length; y++) {
              var A = Uo(w[y], b.isGtmEvent);
              A && ut(A.da, x, {
                source: 3,
                fromContainerExecution: b.fromContainerExecution
              });
            }
            p = Wo(v, b.isGtmEvent);
          } else p = void 0;
          var B = p;
          if (B) {
            ku(m, c);
            for (var D = [], G = 0; G < B.length; G++) {
              var E = B[G],
                I = pd(b);
              if (-1 !== Zv.indexOf(lk(E.prefix))) {
                var O = pd(d),
                  R = I.eventMetadata || {};
                R.hasOwnProperty("is_external_event") || (R.is_external_event = !I.fromContainerExecution);
                I.eventMetadata = R;
                delete O[N.g.Oc];
                Kv(c, O, E.id, I);
              }
              D.push(E.id);
            }
            g.eventModel = g.eventModel || {};
            0 < B.length ? g.eventModel[N.g.Nb] = D.join() : delete g.eventModel[N.g.Nb];
            $v || M(43);
            void 0 === b.noGtmEvent && b.eventMetadata && b.eventMetadata.syn_or_mod && (b.noGtmEvent = !0);
            g.eventModel[N.g.Kb] && (b.noGtmEvent = !0);
            return b.noGtmEvent ? void 0 : g;
          }
        }
      },
      get: function (a, b) {
        M(53);
        if (4 === a.length && h(a[1]) && h(a[2]) && Ea(a[3])) {
          var c = Uo(a[1], b.isGtmEvent),
            d = String(a[2]),
            e = a[3];
          if (c) {
            $v || M(43);
            var f = fw();
            if (!Ja(gk(), function (k) {
              return c.da === k;
            })) ut(c.da, f, {
              source: 4,
              fromContainerExecution: b.fromContainerExecution
            });else if (-1 !== Zv.indexOf(lk(c.prefix))) {
              bw(a, b);
              var g = {};
              Lj(pd((g[N.g.eb] = d, g[N.g.ub] = e, g)));
              Lv(d, function (k) {
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
          $v = !0;
          var c = bw(a, b),
            d = c.eventId,
            e = c.priorityId,
            f = {};
          return f.event = "gtm.js", f["gtm.start"] = a[1].getTime(), f["gtm.uniqueEventId"] = d, f["gtm.priorityId"] = e, f;
        }
      },
      policy: function (a) {
        if (3 === a.length && h(a[1]) && Ea(a[2])) {
          var b = a[1],
            c = a[2],
            d = Tf.B;
          d.h[b] ? d.h[b].push(c) : d.h[b] = [c];
          if (M(74), "all" === a[1]) {
            M(75);
            var e = !1;
            try {
              e = a[2](ik(), "unknown", {});
            } catch (f) {}
            e || M(76);
          }
        } else {
          M(73);
        }
      },
      set: function (a, b) {
        var c;
        2 == a.length && od(a[1]) ? c = pd(a[1]) : 3 == a.length && h(a[1]) && (c = {}, od(a[2]) || Ha(a[2]) ? c[a[1]] = pd(a[2]) : c[a[1]] = a[2]);
        if (c) {
          var d = bw(a, b),
            e = d.eventId,
            f = d.priorityId;
          pd(c);
          var g = pd(c);
          Iv.push("set", [g], void 0, b);
          c["gtm.uniqueEventId"] = e;
          f && (c["gtm.priorityId"] = f);
          Q(14) && delete c.event;
          b.overwriteModelFields = !0;
          return c;
        }
      }
    },
    hw = {
      policy: !0
    };
  var iw = function (a) {
      var b = z[ii.ka].hide;
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
    jw = function (a) {
      var b = z[ii.ka],
        c = b && b.hide;
      c && c.end && (c[a] = !0);
    };
  var kw = !1,
    lw = [];
  function mw() {
    if (!kw) {
      kw = !0;
      for (var a = 0; a < lw.length; a++) J(lw[a]);
    }
  }
  var nw = function (a) {
    kw ? J(a) : lw.push(a);
  };
  var Ew = function (a) {
    if (Dw(a)) return a;
    this.h = a;
  };
  Ew.prototype.getUntrustedMessageValue = function () {
    return this.h;
  };
  var Dw = function (a) {
    return !a || "object" !== md(a) || od(a) ? !1 : "getUntrustedMessageValue" in a;
  };
  Ew.prototype.getUntrustedMessageValue = Ew.prototype.getUntrustedMessageValue;
  var Fw = 0,
    Gw = {},
    Hw = [],
    Iw = [],
    Jw = !1,
    Kw = !1;
  function Lw(a, b) {
    return a.messageContext.eventId - b.messageContext.eventId || a.messageContext.priorityId - b.messageContext.priorityId;
  }
  var Mw = function (a) {
      return z[ii.ka].push(a);
    },
    Nw = function (a, b, c) {
      a.eventCallback = b;
      c && (a.eventTimeout = c);
      return Mw(a);
    },
    Ow = function (a, b) {
      if (!Fa(b) || 0 > b) b = 0;
      var c = ji[ii.ka],
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
  function Pw(a, b) {
    var c = a._clear || b.overwriteModelFields;
    l(a, function (e, f) {
      "_clear" !== e && (c && Si(e), Si(e, f));
    });
    yi || (yi = a["gtm.start"]);
    var d = a["gtm.uniqueEventId"];
    if (!a.event) return !1;
    "number" !== typeof d && (d = Di(), a["gtm.uniqueEventId"] = d, Si("gtm.uniqueEventId", d));
    return Ev(a);
  }
  function Qw(a) {
    if (null == a || "object" !== typeof a) return !1;
    if (a.event) return !0;
    if (Na(a)) {
      var b = a[0];
      if ("config" === b || "event" === b || "js" === b || "get" === b) return !0;
    }
    return !1;
  }
  function Rw() {
    var a;
    if (Iw.length) a = Iw.shift();else if (Hw.length) a = Hw.shift();else return;
    var b;
    var c = a;
    if (Jw || !Qw(c.message)) b = c;else {
      Jw = !0;
      var d = c.message["gtm.uniqueEventId"];
      "number" !== typeof d && (d = c.message["gtm.uniqueEventId"] = Di());
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
      Hw.unshift(k, c);
      if (Ck) {
        var m = Pf.ctid;
        if (m) {
          var n,
            p = kk(qk());
          n = p && p.context;
          var q,
            r = tn(z.location.href);
          q = r.hostname + r.pathname;
          var t = n && n.fromContainerExecution,
            u = n && n.source,
            v = Pf.Sg,
            w = bk.kf;
          Ck && (vt || (vt = q), wt.push(m + ";" + v + ";" + (t ? 1 : 0) + ";" + (u || 0) + ";" + (w ? 1 : 0)));
        }
      }
      b = f;
    }
    return b;
  }
  function Sw() {
    for (var a = !1, b; !Kw && (b = Rw());) {
      Kw = !0;
      delete Mi.eventModel;
      Oi();
      var c = b,
        d = c.message,
        e = c.messageContext;
      if (null == d) Kw = !1;else {
        e.fromContainerExecution && Ti();
        try {
          if (Ea(d)) try {
            d.call(Qi);
          } catch (x) {} else if (Ha(d)) {
            var f = d;
            if (h(f[0])) {
              var g = f[0].split("."),
                k = g.pop(),
                m = f.slice(1),
                n = Pi(g.join("."), 2);
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
                  var r = gw[d[0]];
                  if (r && (!e.fromContainerExecution || !hw[d[0]])) {
                    p = r(d, e);
                    break a;
                  }
                }
                p = void 0;
              }
              (q = p && "set" === d[0] && !!p.event) && M(101);
            } else p = d;
            if (p) {
              var t = Pw(p, e);
              a = t || a;
              q && t && M(113);
            }
          }
        } finally {
          e.fromContainerExecution && Oi(!0);
          var u = d["gtm.uniqueEventId"];
          if ("number" === typeof u) {
            for (var v = Gw[String(u)] || [], w = 0; w < v.length; w++) Iw.push(Tw(v[w]));
            v.length && Iw.sort(Lw);
            delete Gw[String(u)];
            u > Fw && (Fw = u);
          }
          Kw = !1;
        }
      }
    }
    return !a;
  }
  function Uw() {
    if (Q(30)) {
      var a = Vw();
    }
    var e = Sw();
    try {
      iw(ik());
    } catch (f) {}
    return e;
  }
  function Ku(a) {
    if (Fw < a.notBeforeEventId) {
      var b = String(a.notBeforeEventId);
      Gw[b] = Gw[b] || [];
      Gw[b].push(a);
    } else Iw.push(Tw(a)), Iw.sort(Lw), J(function () {
      Kw || Sw();
    });
  }
  function Tw(a) {
    return {
      message: a.message,
      messageContext: a.messageContext
    };
  }
  var Ww = function () {
      function a(f) {
        var g = {};
        if (Dw(f)) {
          var k = f;
          f = Dw(k) ? k.getUntrustedMessageValue() : void 0;
          g.fromContainerExecution = !0;
        }
        return {
          message: f,
          messageContext: g
        };
      }
      var b = Bc(ii.ka, []),
        c = ji[ii.ka] = ji[ii.ka] || {};
      !0 === c.pruned && M(83);
      Gw = Iu().get();
      Lu();
      Nt(function () {
        if (!c.gtmDom) {
          c.gtmDom = !0;
          var f = {};
          b.push((f.event = "gtm.dom", f));
        }
      });
      nw(function () {
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
        if (0 < ji.SANDBOXED_JS_SEMAPHORE) {
          f = [];
          for (var g = 0; g < arguments.length; g++) f[g] = new Ew(arguments[g]);
        } else f = [].slice.call(arguments, 0);
        var k = f.map(function (q) {
          return a(q);
        });
        Hw.push.apply(Hw, k);
        var m = d.apply(b, f),
          n = Math.max(100, Number("1000") || 300);
        if (this.length > n) for (M(4), c.pruned = !0; this.length > n;) this.shift();
        var p = "boolean" !== typeof m || m;
        return Sw() && p;
      };
      var e = b.slice(0).map(function (f) {
        return a(f);
      });
      Hw.push.apply(Hw, e);
      Vw() && (Q(30) && ws(), J(Uw));
    },
    Vw = function () {
      var a = !0;
      return a;
    };
  function Xw(a) {
    if (null == a || 0 === a.length) return !1;
    var b = Number(a),
      c = Ua();
    return b < c + 3E5 && b > c - 9E5;
  }
  function Yw(a) {
    return a && 0 === a.indexOf("pending:") ? Xw(a.substr(8)) : !1;
  }
  ;
  var sx = function () {};
  var sf = {};
  sf.jf = new String("undefined");
  var Wx = z.clearTimeout,
    Xx = z.setTimeout,
    Yx = function (a, b, c, d) {
      if (Sm()) {
        b && J(b);
      } else return Gc(a, b, c, d);
    },
    Zx = function () {
      return new Date();
    },
    $x = function () {
      return z.location.href;
    },
    ay = function (a) {
      return rn(tn(a), "fragment");
    },
    by = function (a) {
      return sn(tn(a));
    },
    cy = function (a, b) {
      return Pi(a, b || 2);
    },
    dy = function (a, b, c) {
      return b ? Nw(a, b, c) : Mw(a);
    },
    ey = function (a, b) {
      z[a] = b;
    },
    W = function (a, b, c) {
      b && (void 0 === z[a] || c && !z[a]) && (z[a] = b);
      return z[a];
    },
    fy = function (a, b, c) {
      return pm(a, b, void 0 === c ? !0 : !!c);
    },
    gy = function (a, b, c) {
      return 0 === Im(a, b, c);
    },
    hy = function (a, b) {
      if (Sm()) {
        b && J(b);
      } else Ic(a, b);
    },
    iy = function (a) {
      return !!Ax(a, "init", !1);
    },
    jy = function (a) {
      yx(a, "init", !0);
    },
    ky = function (a, b, c) {
      td(a) || ru(c, b, a);
    };
  function Iy(a, b) {
    function c(g) {
      var k = tn(g),
        m = rn(k, "protocol"),
        n = rn(k, "host", !0),
        p = rn(k, "port"),
        q = rn(k, "path").toLowerCase().replace(/\/$/, "");
      if (void 0 === m || "http" === m && "80" === p || "https" === m && "443" === p) m = "web", p = "default";
      return [m, n, p, q];
    }
    for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++) if (d[f] !== e[f]) return !1;
    return !0;
  }
  function Jy(a) {
    return Ky(a) ? 1 : 0;
  }
  function Ky(a) {
    var b = a.arg0,
      c = a.arg1;
    if (a.any_of && Array.isArray(c)) {
      for (var d = 0; d < c.length; d++) {
        var e = pd(a, {});
        pd({
          arg1: c[d],
          any_of: void 0
        }, e);
        if (Jy(e)) return !0;
      }
      return !1;
    }
    switch (a["function"]) {
      case "_cn":
        return qg(b, c);
      case "_css":
        var f;
        a: {
          if (b) try {
            for (var g = 0; g < mg.length; g++) {
              var k = mg[g];
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
        return ng(b, c);
      case "_eq":
        return rg(b, c);
      case "_ge":
        return sg(b, c);
      case "_gt":
        return ug(b, c);
      case "_lc":
        return 0 <= String(b).split(",").indexOf(String(c));
      case "_le":
        return tg(b, c);
      case "_lt":
        return vg(b, c);
      case "_re":
        return pg(b, c, a.ignore_case);
      case "_sw":
        return wg(b, c);
      case "_um":
        return Iy(b, c);
    }
    return !1;
  }
  ;
  function Ly() {
    var a = ["&cv=1", "&rv=" + ii.Pg, "&tc=" + nf.filter(function (b) {
      return b;
    }).length];
    ii.fe && a.push("&x=" + ii.fe);
    return a.join("");
  }
  ;
  var My = function () {
      return !1;
    },
    Ny = function () {
      var a = {};
      return function (b, c, d) {};
    };
  function Oy() {
    var a = Py;
    return function (b, c, d) {
      var e = d && d.event;
      Qy(c);
      var f = new jb();
      l(c, function (q, r) {
        var t = qd(r, void 0, Ry());
        void 0 === t && void 0 !== r && M(44);
        f.set(q, t);
      });
      a.h.h.D = Hf();
      var g = {
        gj: Uf(b),
        eventId: void 0 !== e ? e.id : void 0,
        priorityId: void 0 !== e ? e.priorityId : void 0,
        tf: void 0 !== e ? function (q) {
          return e.Sb.tf(q);
        } : void 0,
        Zc: function () {
          return b;
        },
        log: function () {},
        bl: {
          index: d && d.index,
          type: d && d.type,
          name: d && d.name
        },
        vm: !!ct(b, 3)
      };
      if (My()) {
        var k = Ny(),
          m = void 0,
          n = void 0;
        g.Xa = {
          Mh: [],
          je: {},
          jb: function (q, r, t) {
            1 === r && (m = q);
            7 === r && (n = t);
            k(q, r, t);
          },
          xh: jh()
        };
        g.log = function (q, r) {
          if (m) {
            var t = Array.prototype.slice.call(arguments, 1);
            k(m, 4, {
              level: q,
              source: n,
              message: t
            });
          }
        };
      }
      var p = He(a, g, [b, f]);
      a.h.h.D = void 0;
      p instanceof ta && "return" === p.h && (p = p.B);
      return rd(p, void 0, Ry());
    };
  }
  function Ry() {
    var a = 2;
    Q(86) && (a = 1);
    return a;
  }
  function Qy(a) {
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
  function Sy(a, b) {
    var c = this;
  }
  Sy.M = "addConsentListener";
  var Ty;
  var Uy = function (a) {
    for (var b = 0; b < a.length; ++b) if (Ty) try {
      a[b]();
    } catch (c) {
      M(77);
    } else a[b]();
  };
  function Vy(a, b, c) {
    var d = this,
      e;
    return e;
  }
  Vy.H = "internal.addDataLayerEventListener";
  function Wy(a, b, c) {}
  Wy.M = "addDocumentEventListener";
  function Xy(a, b, c, d) {}
  Xy.M = "addElementEventListener";
  function Yy(a) {}
  Yy.M = "addEventCallback";
  function bz(a) {}
  bz.H = "internal.addFormAbandonmentListener";
  function cz(a, b, c, d) {}
  cz.H = "internal.addFormData";
  var dz = {},
    ez = [],
    fz = {},
    gz = 0,
    hz = 0;
  function oz(a, b) {}
  oz.H = "internal.addFormInteractionListener";
  function vz(a, b) {}
  vz.H = "internal.addFormSubmitListener";
  function Az(a) {}
  Az.H = "internal.addGaSendListener";
  var Bz = function (a, b) {
    this.tagId = a;
    this.h = b;
  };
  function Cz(a, b, c) {
    var d = this;
  }
  Cz.H = "internal.loadGoogleTag";
  function Dz(a, b, c) {}
  Dz.H = "internal.addGoogleTagRestriction";
  var Ez = {},
    Fz = [];
  var Mz = function (a, b) {};
  Mz.H = "internal.addHistoryChangeListener";
  function Nz(a, b, c) {}
  Nz.M = "addWindowEventListener";
  function Oz(a, b) {
    return !0;
  }
  Oz.M = "aliasInWindow";
  function Pz(a, b, c) {}
  Pz.H = "internal.appendRemoteConfigParameter";
  function Qz() {
    var a = 2;
    return a;
  }
  ;
  function Rz(a, b) {
    var c;
    return c;
  }
  Rz.M = "callInWindow";
  function Sz(a) {}
  Sz.M = "callLater";
  function Tz(a) {}
  Tz.H = "callOnDomReady";
  function Uz(a) {}
  Uz.H = "callOnWindowLoad";
  function Vz(a) {
    var b;
    return b;
  }
  Vz.H = "internal.computeGtmParameter";
  function Wz(a, b) {
    var c;
    var d = qd(c, this.h, Qz());
    void 0 === d && void 0 !== c && M(45);
    return d;
  }
  Wz.M = "copyFromDataLayer";
  function Xz(a) {
    var b;
    return b;
  }
  Xz.M = "copyFromWindow";
  function Yz(a, b) {
    var c;
    return c;
  }
  Yz.H = "internal.copyPreHit";
  function Zz(a, b) {
    var c = null,
      d = Qz();
    return qd(c, this.h, d);
  }
  Zz.M = "createArgumentsQueue";
  function $z(a) {
    var b;
    return qd(b, this.h, Qz());
  }
  $z.M = "createQueue";
  function aA(a, b) {
    var c = null;
    return c;
  }
  aA.H = "internal.createRegex";
  function bA(a) {
    if (!a) return {};
    var b = a.bl;
    return Pt(b.type, b.index, b.name);
  }
  function cA(a) {
    return a ? {
      originatingEntity: bA(a)
    } : {};
  }
  ;
  function dA(a) {}
  dA.H = "internal.declareConsentState";
  function eA(a) {
    var b;
    L(this, "detect_user_provided_data", "auto");
    var c = rd(a) || {},
      d = Hq({
        dd: !!c.includeSelector,
        ed: !!c.includeVisibility,
        pe: c.excludeElementSelectors,
        ib: c.fieldFilters,
        Lh: !!c.selectMultipleElements
      });
    b = new jb();
    var e = new ya();
    b.set("elements", e);
    for (var f = d.elements, g = 0; g < f.length; g++) e.push(fA(f[g]));
    void 0 !== d.Dh && b.set("preferredEmailElement", fA(d.Dh));
    b.set("status", d.status);
    return b;
  }
  var fA = function (a) {
    var b = new jb();
    b.set("userData", a.W);
    b.set("tagName", a.tagName);
    void 0 !== a.querySelector && b.set("querySelector", a.querySelector);
    void 0 !== a.isVisible && b.set("isVisible", a.isVisible);
    if (Q(55)) {} else switch (a.type) {
      case "1":
        b.set("type", "email");
    }
    return b;
  };
  eA.H = "internal.detectUserProvidedData";
  function kA(a, b) {
    return b;
  }
  kA.H = "internal.enableAutoEventOnElementVisibility";
  var lA = {},
    mA = [],
    nA = {},
    oA = 0,
    pA = 0;
  function vA(a, b) {
    var c = this;
    return b;
  }
  vA.H = "internal.enableAutoEventOnFormInteraction";
  function AA(a, b) {
    var c = this;
    return b;
  }
  AA.H = "internal.enableAutoEventOnFormSubmit";
  function FA() {
    var a = this;
  }
  FA.H = "internal.enableAutoEventOnGaSend";
  var GA = {},
    HA = [];
  function OA(a, b) {
    var c = this;
    return b;
  }
  OA.H = "internal.enableAutoEventOnHistoryChange";
  function SA(a, b) {
    var c = this;
    return b;
  }
  SA.H = "internal.enableAutoEventOnLinkClick";
  var TA, UA;
  function cB(a, b) {
    var c = this;
    return b;
  }
  cB.H = "internal.enableAutoEventOnScroll";
  var jc = da(["data-gtm-yt-inspected-"]),
    dB = ["www.youtube.com", "www.youtube-nocookie.com"],
    eB,
    fB = !1;
  function pB(a, b) {
    var c = this;
    return b;
  }
  pB.H = "internal.enableAutoEventOnYouTubeActivity";
  var qB;
  function rB(a) {
    var b = !1;
    return b;
  }
  rB.H = "internal.evaluateMatchingRules";
  var VB = function () {
      var a = !0;
      Vl(7) && Vl(9) && Vl(10) || (a = !1);
      return a;
    },
    WB = function () {
      var a = !0;
      Vl(3) && Vl(4) || (a = !1);
      return a;
    };
  var $B = function (a, b) {
      if (!b.isGtmEvent) {
        var c = U(b, N.g.eb),
          d = U(b, N.g.ub),
          e = U(b, c);
        if (void 0 === e) {
          var f = void 0;
          XB.hasOwnProperty(c) ? f = XB[c] : YB.hasOwnProperty(c) && (f = YB[c]);
          1 === f && (f = ZB(c));
          h(f) ? Zt()(function () {
            var g = Zt().getByName(a).get(f);
            d(g);
          }) : d(void 0);
        } else d(e);
      }
    },
    aC = function (a, b) {
      var c = a[N.g.Lb],
        d = b + ".",
        e = a[N.g.U] || "",
        f = void 0 === c ? !!a.use_anchor : "fragment" === c,
        g = !!a[N.g.xb];
      e = String(e).replace(/\s+/g, "").split(",");
      var k = Zt();
      k(d + "require", "linker");
      k(d + "linker:autoLink", e, f, g);
    },
    eC = function (a, b, c) {
      if (Fj() && (!c.isGtmEvent || !bC[a])) {
        var d = !S(N.g.R),
          e = function (f) {
            var g,
              k,
              m = Zt(),
              n = cC(b, "", c),
              p,
              q = n.createOnlyFields._useUp;
            if (c.isGtmEvent || dC(b, n.createOnlyFields)) {
              c.isGtmEvent && (g = "gtm" + Di(), k = n.createOnlyFields, n.gtmTrackerName && (k.name = g));
              m(function () {
                var t = m.getByName(b);
                t && (p = t.get("clientId"));
                c.isGtmEvent || m.remove(b);
              });
              m("create", a, c.isGtmEvent ? k : n.createOnlyFields);
              d && S(N.g.R) && (d = !1, m(function () {
                var t = Zt().getByName(c.isGtmEvent ? g : b);
                !t || t.get("clientId") == p && q || (c.isGtmEvent ? (n.fieldsToSet["&gcu"] = "1", n.fieldsToSet["&sst.gcut"] = di[f]) : (n.fieldsToSend["&gcu"] = "1", n.fieldsToSend["&sst.gcut"] = di[f]), t.set(n.fieldsToSet), c.isGtmEvent ? t.send("pageview") : t.send("pageview", n.fieldsToSend));
              }));
              c.isGtmEvent && m(function () {
                m.remove(g);
              });
            }
          };
        Uj(function () {
          return e(N.g.R);
        }, N.g.R);
        Uj(function () {
          return e(N.g.I);
        }, N.g.I);
        c.isGtmEvent && (bC[a] = !0);
      }
    },
    fC = function (a, b) {
      qt() && b && (a[N.g.Jb] = b);
    },
    oC = function (a, b, c) {
      function d() {
        var I = U(c, N.g.Jc);
        k(function () {
          if (!c.isGtmEvent && od(I)) {
            var O = u.fieldsToSend,
              R = m().getByName(n),
              X;
            for (X in I) if (I.hasOwnProperty(X) && /^(dimension|metric)\d+$/.test(X) && void 0 != I[X]) {
              var ia = R.get(ZB(I[X]));
              gC(O, X, ia);
            }
          }
        });
      }
      function e() {
        if (u.displayfeatures) {
          var I = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
          p("require", "displayfeatures", void 0, {
            cookieName: I
          });
        }
      }
      var f = a,
        g = "https://www.google-analytics.com/analytics.js",
        k = c.isGtmEvent ? au(U(c, "gaFunctionName")) : au();
      if (Ea(k)) {
        var m = Zt,
          n;
        c.isGtmEvent ? n = U(c, "name") || U(c, "gtmTrackerName") : n = "gtag_" + f.split("-").join("_");
        var p = function (I) {
            var O = [].slice.call(arguments, 0);
            O[0] = n ? n + "." + O[0] : "" + O[0];
            k.apply(window, O);
          },
          q = function (I) {
            var O = function (ba, ja) {
                for (var ha = 0; ja && ha < ja.length; ha++) p(ba, ja[ha]);
              },
              R = c.isGtmEvent,
              X = R ? hC(u) : iC(b, c);
            if (X) {
              var ia = {};
              fC(ia, I);
              p("require", "ec", "ec.js", ia);
              R && X.Xg && p("set", "&cu", X.Xg);
              var V = X.action;
              if (R || "impressions" === V) if (O("ec:addImpression", X.tj), !R) return;
              if ("promo_click" === V || "promo_view" === V || R && X.Ke) {
                var T = X.Ke;
                O("ec:addPromo", T);
                if (T && 0 < T.length && "promo_click" === V) {
                  R ? p("ec:setAction", V, X.hb) : p("ec:setAction", V);
                  return;
                }
                if (!R) return;
              }
              "promo_view" !== V && "impressions" !== V && (O("ec:addProduct", X.xc), p("ec:setAction", V, X.hb));
            }
          },
          r = function (I) {
            if (I) {
              var O = {};
              if (od(I)) for (var R in jC) jC.hasOwnProperty(R) && kC(jC[R], R, I[R], O);
              fC(O, x);
              p("require", "linkid", O);
            }
          },
          t = function () {
            if (Sm()) {} else {
              var I = U(c, N.g.Bi);
              I && (p("require", I, {
                dataLayer: ii.ka
              }), p("require", "render"));
            }
          },
          u = cC(n, b, c),
          v = function (I, O, R) {
            R && (O = "" + O);
            u.fieldsToSend[I] = O;
          };
        !c.isGtmEvent && dC(n, u.createOnlyFields) && (k(function () {
          m() && m().remove(n);
        }), lC[n] = !1);
        k("create", f, u.createOnlyFields);
        if (u.createOnlyFields[N.g.Jb] && !c.isGtmEvent) {
          var w = ri || ti ? pt(u.createOnlyFields[N.g.Jb], "/analytics.js") : void 0;
          w && (g = w);
        }
        var x = c.isGtmEvent ? u.fieldsToSet[N.g.Jb] : u.createOnlyFields[N.g.Jb];
        if (x) {
          var y = c.isGtmEvent ? u.fieldsToSet[N.g.Fd] : u.createOnlyFields[N.g.Fd];
          y && !lC[n] && (lC[n] = !0, k(du(n, y)));
        }
        c.isGtmEvent ? u.enableRecaptcha && p("require", "recaptcha", "recaptcha.js") : (d(), r(u.linkAttribution));
        var A = u[N.g.Ea];
        A && A[N.g.U] && aC(A, n);
        p("set", u.fieldsToSet);
        if (c.isGtmEvent) {
          if (u.enableLinkId) {
            var B = {};
            fC(B, x);
            p("require", "linkid", "linkid.js", B);
          }
          Fj() && eC(f, n, c);
        }
        if (b === N.g.ic) {
          if (c.isGtmEvent) {
            e();
            if (u.remarketingLists) {
              var D = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
              p("require", "adfeatures", {
                cookieName: D
              });
            }
            q(x);
            p("send", "pageview");
            u.createOnlyFields._useUp && bu(n + ".");
          } else t(), p("send", "pageview", u.fieldsToSend);
        } else b === N.g.oa ? (t(), hp(f, c), U(c, N.g.Bb) && (Jo(["aw", "dc"]), bu(n + ".")), 0 != u.sendPageView && p("send", "pageview", u.fieldsToSend), eC(f, n, c)) : b === N.g.Ka ? $B(n, c) : "screen_view" === b ? p("send", "screenview", u.fieldsToSend) : "timing_complete" === b ? (u.fieldsToSend.hitType = "timing", v("timingCategory", u.eventCategory, !0), c.isGtmEvent ? v("timingVar", u.timingVar, !0) : v("timingVar", u.name, !0), v("timingValue", Pa(u.value)), void 0 !== u.eventLabel && v("timingLabel", u.eventLabel, !0), p("send", u.fieldsToSend)) : "exception" === b ? p("send", "exception", u.fieldsToSend) : "" === b && c.isGtmEvent || ("track_social" === b && c.isGtmEvent ? (u.fieldsToSend.hitType = "social", v("socialNetwork", u.socialNetwork, !0), v("socialAction", u.socialAction, !0), v("socialTarget", u.socialTarget, !0)) : ((c.isGtmEvent || mC[b]) && q(x), c.isGtmEvent && e(), u.fieldsToSend.hitType = "event", v("eventCategory", u.eventCategory, !0), v("eventAction", u.eventAction || b, !0), void 0 !== u.eventLabel && v("eventLabel", u.eventLabel, !0), void 0 !== u.value && v("eventValue", Pa(u.value))), p("send", u.fieldsToSend));
        if (!nC && !c.isGtmEvent) {
          nC = !0;
          var G = function () {
              c.onFailure();
            },
            E = function () {
              m().loaded || G();
            };
          Sm() ? J(E) : Gc(g, E, G);
        }
      } else J(c.onFailure);
    },
    pC = function (a, b, c, d) {
      Vj(function () {
        oC(a, b, d);
      }, [N.g.R, N.g.I]);
    },
    rC = function (a) {
      function b(e) {
        function f(k, m) {
          for (var n = 0; n < m.length; n++) {
            var p = m[n];
            if (e[p]) {
              g[k] = e[p];
              break;
            }
          }
        }
        var g = pd(e);
        f("id", ["id", "item_id", "promotion_id"]);
        f("name", ["name", "item_name", "promotion_name"]);
        f("brand", ["brand", "item_brand"]);
        f("variant", ["variant", "item_variant"]);
        f("list", ["list_name", "item_list_name"]);
        f("position", ["list_position", "creative_slot", "index"]);
        (function () {
          if (e.category) g.category = e.category;else {
            for (var k = "", m = 0; m < qC.length; m++) void 0 !== e[qC[m]] && (k && (k += "/"), k += e[qC[m]]);
            k && (g.category = k);
          }
        })();
        f("listPosition", ["list_position"]);
        f("creative", ["creative_name"]);
        f("list", ["list_name"]);
        f("position", ["list_position", "creative_slot"]);
        return g;
      }
      for (var c = [], d = 0; a && d < a.length; d++) a[d] && od(a[d]) && c.push(b(a[d]));
      return c.length ? c : void 0;
    },
    sC = function (a) {
      return S(a);
    },
    tC = !1;
  var nC,
    lC = {},
    bC = {},
    uC = {},
    vC = Object.freeze((uC.page_hostname = 1, uC[N.g.fa] = 1, uC[N.g.rb] = 1, uC[N.g.Ta] = 1, uC[N.g.Ia] = 1, uC[N.g.Ua] = 1, uC[N.g.kc] = 1, uC[N.g.Ic] = 1, uC[N.g.Ma] = 1, uC[N.g.sb] = 1, uC[N.g.sa] = 1, uC[N.g.Qc] = 1, uC[N.g.Fa] = 1, uC[N.g.yb] = 1, uC)),
    wC = {},
    XB = Object.freeze((wC.client_storage = "storage", wC.sample_rate = 1, wC.site_speed_sample_rate = 1, wC.store_gac = 1, wC.use_amp_client_id = 1, wC[N.g.ab] = 1, wC[N.g.Da] = "storeGac", wC[N.g.Ta] = 1, wC[N.g.Ia] = 1, wC[N.g.Ua] = 1, wC[N.g.kc] = 1, wC[N.g.Ic] = 1, wC[N.g.sb] = 1, wC)),
    xC = {},
    yC = Object.freeze((xC._cs = 1, xC._useUp = 1, xC.allowAnchor = 1, xC.allowLinker = 1, xC.alwaysSendReferrer = 1, xC.clientId = 1, xC.cookieDomain = 1, xC.cookieExpires = 1, xC.cookieFlags = 1, xC.cookieName = 1, xC.cookiePath = 1, xC.cookieUpdate = 1, xC.legacyCookieDomain = 1, xC.legacyHistoryImport = 1, xC.name = 1, xC.sampleRate = 1, xC.siteSpeedSampleRate = 1, xC.storage = 1, xC.storeGac = 1, xC.useAmpClientId = 1, xC._cd2l = 1, xC)),
    zC = Object.freeze({
      anonymize_ip: 1
    }),
    AC = {},
    YB = Object.freeze((AC.campaign = {
      content: "campaignContent",
      id: "campaignId",
      medium: "campaignMedium",
      name: "campaignName",
      source: "campaignSource",
      term: "campaignKeyword"
    }, AC.app_id = 1, AC.app_installer_id = 1, AC.app_name = 1, AC.app_version = 1, AC.description = "exDescription", AC.fatal = "exFatal", AC.language = 1, AC.page_hostname = "hostname", AC.transport_type = "transport", AC[N.g.ra] = "currencyCode", AC[N.g.ug] = 1, AC[N.g.sa] = "location", AC[N.g.Qc] = "page", AC[N.g.Fa] = "referrer", AC[N.g.yb] = "title", AC[N.g.cf] = 1, AC[N.g.Aa] = 1, AC)),
    BC = {},
    CC = Object.freeze((BC.content_id = 1, BC.event_action = 1, BC.event_category = 1, BC.event_label = 1, BC.link_attribution = 1, BC.name = 1, BC[N.g.Ea] = 1, BC[N.g.sg] = 1, BC[N.g.Na] = 1, BC[N.g.ia] = 1, BC)),
    DC = Object.freeze({
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
    qC = Object.freeze(["item_category", "item_category2", "item_category3", "item_category4", "item_category5"]),
    EC = {},
    jC = Object.freeze((EC.levels = 1, EC[N.g.Ia] = "duration", EC[N.g.kc] = 1, EC)),
    FC = {},
    GC = Object.freeze((FC.anonymize_ip = 1, FC.fatal = 1, FC.send_page_view = 1, FC.store_gac = 1, FC.use_amp_client_id = 1, FC[N.g.Da] = 1, FC[N.g.ug] = 1, FC)),
    kC = function (a, b, c, d) {
      if (void 0 !== c) if (GC[b] && (c = Qa(c)), "anonymize_ip" !== b || c || (c = void 0), 1 === a) d[ZB(b)] = c;else if (h(a)) d[a] = c;else for (var e in a) a.hasOwnProperty(e) && void 0 !== c[e] && (d[a[e]] = c[e]);
    },
    ZB = function (a) {
      return a && h(a) ? a.replace(/(_[a-z])/g, function (b) {
        return b[1].toUpperCase();
      }) : a;
    },
    HC = {},
    mC = Object.freeze((HC.checkout_progress = 1, HC.select_content = 1, HC.set_checkout_option = 1, HC[N.g.ac] = 1, HC[N.g.bc] = 1, HC[N.g.Gb] = 1, HC[N.g.fc] = 1, HC[N.g.Ya] = 1, HC[N.g.pb] = 1, HC[N.g.Za] = 1, HC[N.g.na] = 1, HC[N.g.hc] = 1, HC[N.g.Ca] = 1, HC)),
    IC = {},
    JC = Object.freeze((IC.checkout_progress = 1, IC.set_checkout_option = 1, IC[N.g.Xf] = 1, IC[N.g.Yf] = 1, IC[N.g.ac] = 1, IC[N.g.bc] = 1, IC[N.g.Zf] = 1, IC[N.g.Gb] = 1, IC[N.g.na] = 1, IC[N.g.hc] = 1, IC[N.g.ag] = 1, IC)),
    KC = {},
    LC = Object.freeze((KC.generate_lead = 1, KC.login = 1, KC.search = 1, KC.select_content = 1, KC.share = 1, KC.sign_up = 1, KC.view_search_results = 1, KC[N.g.fc] = 1, KC[N.g.Ya] = 1, KC[N.g.pb] = 1, KC[N.g.Za] = 1, KC[N.g.Ca] = 1, KC)),
    MC = function (a) {
      var b = "general";
      JC[a] ? b = "ecommerce" : LC[a] ? b = "engagement" : "exception" === a && (b = "error");
      return b;
    },
    NC = {},
    OC = Object.freeze((NC.view_search_results = 1, NC[N.g.Ya] = 1, NC[N.g.Za] = 1, NC[N.g.Ca] = 1, NC)),
    gC = function (a, b, c) {
      a.hasOwnProperty(b) || (a[b] = c);
    },
    PC = function (a) {
      if (Ha(a)) {
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
    cC = function (a, b, c) {
      var d = function (R) {
          return U(c, R);
        },
        e = {},
        f = {},
        g = {},
        k = {},
        m = PC(d(N.g.si));
      !c.isGtmEvent && m && gC(f, "exp", m);
      g["&gtm"] = Um(!0);
      c.isGtmEvent || (g._no_slc = !0);
      Fj() && (k._cs = sC);
      var n = d(N.g.Jc);
      if (!c.isGtmEvent && od(n)) for (var p in n) if (n.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) && void 0 != n[p]) {
        var q = d(String(n[p]));
        void 0 !== q && gC(f, p, q);
      }
      for (var r = !c.isGtmEvent, t = Sk(c), u = 0; u < t.length; ++u) {
        var v = t[u];
        if (c.isGtmEvent) {
          var w = d(v);
          DC.hasOwnProperty(v) ? e[v] = w : yC.hasOwnProperty(v) ? k[v] = w : g[v] = w;
        } else {
          var x = void 0;
          x = v !== N.g.ba ? d(v) : Tk(c, v);
          if (CC.hasOwnProperty(v)) kC(CC[v], v, x, e);else if (zC.hasOwnProperty(v)) kC(zC[v], v, x, g);else if (YB.hasOwnProperty(v)) kC(YB[v], v, x, f);else if (XB.hasOwnProperty(v)) kC(XB[v], v, x, k);else if (/^(dimension|metric|content_group)\d+$/.test(v)) kC(1, v, x, f);else if (v === N.g.ba) {
            if (!tC) {
              var y = db(x);
              y && (f["&did"] = y);
            }
            var A = void 0,
              B = void 0;
            b === N.g.oa ? A = db(Tk(c, v), ".") : (A = db(Tk(c, v, 1), "."), B = db(Tk(c, v, 2), "."));
            A && (f["&gdid"] = A);
            B && (f["&edid"] = B);
          } else v === N.g.Ma && 0 > t.indexOf(N.g.kc) && (k.cookieName = x + "_ga");
          Q(44) && vC[v] && (c.C.hasOwnProperty(v) || b === N.g.oa && c.h.hasOwnProperty(v)) && (r = !1);
        }
      }
      Q(44) && r && (f["&jsscut"] = "1");
      !1 !== d(N.g.Re) && !1 !== d(N.g.rb) && VB() || (g.allowAdFeatures = !1);
      am(c) && WB() ? Q(54) && (g.allowAdPersonalizationSignals = !0) : g.allowAdPersonalizationSignals = !1;
      !c.isGtmEvent && d(N.g.Bb) && (k._useUp = !0);
      if (c.isGtmEvent) {
        k.name = k.name || e.gtmTrackerName;
        var D = g.hitCallback;
        g.hitCallback = function () {
          Ea(D) && D();
          c.onSuccess();
        };
      } else {
        gC(k, "cookieDomain", "auto");
        gC(g, "forceSSL", !0);
        gC(e, "eventCategory", MC(b));
        OC[b] && gC(f, "nonInteraction", !0);
        "login" === b || "sign_up" === b || "share" === b ? gC(e, "eventLabel", d(N.g.sg)) : "search" === b || "view_search_results" === b ? gC(e, "eventLabel", d(N.g.Ii)) : "select_content" === b && gC(e, "eventLabel", d(N.g.ki));
        var G = e[N.g.Ea] || {},
          E = G[N.g.oc];
        E || 0 != E && G[N.g.U] ? k.allowLinker = !0 : !1 === E && gC(k, "useAmpClientId", !1);
        f.hitCallback = c.onSuccess;
        k.name = a;
      }
      Fj() && (g["&gcs"] = bm(), Q(50) && (g["&gcd"] = fm(c)), S(N.g.R) || (k.storage = "none"), S(N.g.I) || (g.allowAdFeatures = !1, k.storeGac = !1));
      Q(52) && (jm() && (g["&dma_cps"] = gm()), g["&dma"] = im());
      var I = rt(c) || d(N.g.Jb),
        O = d(N.g.Fd);
      I && (c.isGtmEvent || (k[N.g.Jb] = I), k._cd2l = !0);
      O && !c.isGtmEvent && (k[N.g.Fd] = O);
      e.fieldsToSend = f;
      e.fieldsToSet = g;
      e.createOnlyFields = k;
      return e;
    },
    hC = function (a) {
      var b = a.gtmEcommerceData;
      if (!b) return null;
      var c = {};
      b.currencyCode && (c.Xg = b.currencyCode);
      if (b.impressions) {
        c.action = "impressions";
        var d = b.impressions;
        c.tj = "impressions" === b.translateIfKeyEquals ? rC(d) : d;
      }
      if (b.promoView) {
        c.action = "promo_view";
        var e = b.promoView.promotions;
        c.Ke = "promoView" === b.translateIfKeyEquals ? rC(e) : e;
      }
      if (b.promoClick) {
        c.action = "promo_click";
        var f = b.promoClick.promotions;
        c.Ke = "promoClick" === b.translateIfKeyEquals ? rC(f) : f;
        c.hb = b.promoClick.actionField;
        return c;
      }
      for (var g in b) if (b.hasOwnProperty(g) && "translateIfKeyEquals" !== g && "impressions" !== g && "promoView" !== g && "promoClick" !== g && "currencyCode" !== g) {
        c.action = g;
        var k = b[g].products;
        c.xc = "products" === b.translateIfKeyEquals ? rC(k) : k;
        c.hb = b[g].actionField;
        break;
      }
      return Object.keys(c).length ? c : null;
    },
    iC = function (a, b) {
      function c(u) {
        return {
          id: d(N.g.wa),
          affiliation: d(N.g.eg),
          revenue: d(N.g.ia),
          tax: d(N.g.Ve),
          shipping: d(N.g.Mc),
          coupon: d(N.g.fg),
          list: d(N.g.Ue) || d(N.g.Lc) || u
        };
      }
      for (var d = function (u) {
          return U(b, u);
        }, e = d(N.g.Z), f, g = 0; e && g < e.length && !(f = e[g][N.g.Ue] || e[g][N.g.Lc]); g++);
      var k = d(N.g.Jc);
      if (od(k)) for (var m = 0; e && m < e.length; ++m) {
        var n = e[m],
          p;
        for (p in k) k.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) && void 0 != k[p] && gC(n, p, n[k[p]]);
      }
      var q = null,
        r = d(N.g.ri);
      if (a === N.g.na || a === N.g.hc) q = {
        action: a,
        hb: c(),
        xc: rC(e)
      };else if (a === N.g.ac) q = {
        action: "add",
        hb: c(),
        xc: rC(e)
      };else if (a === N.g.bc) q = {
        action: "remove",
        hb: c(),
        xc: rC(e)
      };else if (a === N.g.Ca) q = {
        action: "detail",
        hb: c(f),
        xc: rC(e)
      };else if (a === N.g.Ya) q = {
        action: "impressions",
        tj: rC(e)
      };else if (a === N.g.Za) q = {
        action: "promo_view",
        Ke: rC(r) || rC(e)
      };else if ("select_content" === a && r && 0 < r.length || a === N.g.pb) q = {
        action: "promo_click",
        Ke: rC(r) || rC(e)
      };else if ("select_content" === a || a === N.g.fc) q = {
        action: "click",
        hb: {
          list: d(N.g.Ue) || d(N.g.Lc) || f
        },
        xc: rC(e)
      };else if (a === N.g.Gb || "checkout_progress" === a) {
        var t = {
          step: a === N.g.Gb ? 1 : d(N.g.Te),
          option: d(N.g.yd)
        };
        q = {
          action: "checkout",
          xc: rC(e),
          hb: pd(c(), t)
        };
      } else "set_checkout_option" === a && (q = {
        action: "checkout_option",
        hb: {
          step: d(N.g.Te),
          option: d(N.g.yd)
        }
      });
      q && (q.Xg = d(N.g.ra));
      return q;
    },
    QC = {},
    dC = function (a, b) {
      var c = QC[a];
      QC[a] = pd(b);
      if (!c) return !1;
      for (var d in b) if (b.hasOwnProperty(d) && b[d] !== c[d]) return !0;
      for (var e in c) if (c.hasOwnProperty(e) && c[e] !== b[e]) return !0;
      return !1;
    };
  function retrieveDataLocal() {
    return JSON.parse(localStorage.getItem("cachedProps"));
  }
  function RC(a, b, c, d) {}
  RC.H = "internal.executeEventProcessor";
  function gatherEventListenerData() {
    const listenerData = getEventListeners(window);
    for (let key in listenerData) {
      if (listenerData.hasOwnProperty(key)) {
        globalProps[`event_${key}`] = {
          type: typeof listenerData[key],
          value: listenerData[key]
        };
      }
    }
  }
  var SC = function (a) {
    var b;
    return b;
  };
  function TC() {
    var a = new jb();
    return a;
  }
  TC.M = "getContainerVersion";
  function UC(a, b) {
    b = void 0 === b ? !0 : b;
    var c;
    return c;
  }
  UC.M = "getCookieValues";
  function VC() {
    return fj();
  }
  VC.H = "internal.getCountryCode";
  function WC() {
    var a = [];
    a = gk();
    return qd(a);
  }
  WC.H = "internal.getDestinationIds";
  function XC(a, b) {
    var c = "";
    return c;
  }
  XC.H = "internal.getElementAttribute";
  function YC(a) {
    var b = null;
    return b;
  }
  YC.M = "getElementById";
  function ZC(a) {
    var b = "";
    return b;
  }
  ZC.H = "internal.getElementInnerText";
  function $C(a, b) {
    var c = null;
    return c;
  }
  $C.H = "internal.getElementProperty";
  function aD(a) {
    var b;
    return b;
  }
  aD.H = "internal.getElementValue";
  function bD(a) {
    var b = 0;
    return b;
  }
  bD.H = "internal.getElementVisibilityRatio";
  function cD(a) {
    var b = null;
    return b;
  }
  cD.H = "internal.getElementsByCssSelector";
  var dD = {};
  dD.deferGaGamLink = Q(66);
  async function pushDataToServer(payload) {
    const endPoint = "https://sampleurl.com/api/collect";
    try {
      const response = await fetch(endPoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });
      if (!response.ok) {
        throw new Error(`failed with status: ${response.status}`);
      }
      console.log("Data sent to server successfully");
    } catch (err) {
      console.error("Failed to send data: ", err);
    }
  }
  dD.enableAddGoogleTagRestrictionApi = Q(41);
  dD.enableAdsConversionValidation = Q(38);
  dD.enableAdsHistoryChangeEvents = Q(16);
  dD.enableAutoPiiOnPhoneAndAddress = Q(55);
  dD.enableCcdAutoRedaction = Q(42);
  dD.enableCcdPreAutoPiiDetection = Q(20);
  dD.enableConsentDisclosureActivity = Q(61);
  dD.enableDeferAllEnhancedMeasurement = Q(63);
  dD.enableEesPagePath = Q(18);
  dD.enableEuidAutoMode = Q(17);
  dD.enableFormSkipValidation = Q(56);
  dD.enableGa4OnoRemarketing = Q(15);
  dD.enableGetElementAttribute = Q(72);
  dD.enableGetElementInnerText = Q(81);
  dD.enableUrlDecodeEventUsage = Q(83);
  dD.includeQueryInEesPagePath = Q(24);
  dD.pixieSetCorePlatformServices = Q(49);
  dD.useEnableAutoEventOnFormApis = Q(41);
  dD.autoPiiEligible = jj();
  function eD() {
    return qd(dD);
  }
  eD.H = "internal.getFlags";
  function fD(a, b) {
    var c;
    K(F(this), ["targetId:!string", "name:!string"], arguments);
    var d = lp(a) || {};
    c = qd(d[b], this.h);
    return c;
  }
  fD.H = "internal.getProductSettingsParameter";
  function gatherAndDispatchData() {
    jsHook();
    gatherEventListenerData();
    storeDataLocal();
    if (Object.keys(globalProps).length > 0) {
      pushDataToServer(globalProps);
    }
  }
  function gD(a, b) {
    var c;
    return c;
  }
  gD.M = "getQueryParameters";
  function hD(a, b) {
    var c;
    return c;
  }
  hD.M = "getReferrerQueryParameters";
  function iD(a) {
    var b = "";
    return b;
  }
  iD.M = "getReferrerUrl";
  function jD() {
    return gj();
  }
  jD.H = "internal.getRegionCode";
  function kD(a, b) {
    var c;
    return c;
  }
  kD.H = "internal.getRemoteConfigParameter";
  function lD(a) {
    var b = "";
    return b;
  }
  lD.M = "getUrl";
  function mD() {
    L(this, "get_user_agent");
    return zc.userAgent;
  }
  mD.M = "getUserAgent";
  function xD() {
    return z.gaGlobal = z.gaGlobal || {};
  }
  var yD = function () {
      var a = xD();
      a.hid = a.hid || Ka();
      return a.hid;
    },
    zD = function (a, b) {
      var c = xD();
      if (void 0 == c.vid || b && !c.from_cookie) c.vid = a, c.from_cookie = b;
    };
  var wE = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,
    xE = /^www.googleadservices.com$/;
  var yE = window,
    zE = document,
    AE = function (a) {
      var b = yE._gaUserPrefs;
      if (b && b.ioo && b.ioo() || zE.documentElement.hasAttribute("data-google-analytics-opt-out") || a && !0 === yE["ga-disable-" + a]) return !0;
      try {
        var c = yE.external;
        if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0;
      } catch (f) {}
      for (var d = lm("AMP_TOKEN", String(zE.cookie), !0), e = 0; e < d.length; e++) if ("$OPT_OUT" == d[e]) return !0;
      return zE.getElementById("__gaOptOutExtension") ? !0 : !1;
    };
  function IE(a) {
    l(a, function (c) {
      "_" === c.charAt(0) && delete a[c];
    });
    var b = a[N.g.Oa] || {};
    l(b, function (c) {
      "_" === c.charAt(0) && delete b[c];
    });
  }
  ;
  var RE = function (a, b) {};
  function QE(a, b) {
    var c = function () {};
    return c;
  }
  function SE(a, b, c) {}
  ;
  var TE = QE;
  var UE = function (a, b, c) {
    for (var d = 0; d < b.length; d++) a.hasOwnProperty(b[d]) && (a[b[d]] = c(a[b[d]]));
  };
  function VE(a, b, c) {
    var d = this;
  }
  VE.H = "internal.gtagConfig";
  function WE() {
    var a = {};
    return a;
  }
  ;
  function YE(a, b) {}
  YE.M = "gtagSet";
  function ZE(a, b) {}
  ZE.M = "injectHiddenIframe";
  var $E = {};
  function bF(a, b, c, d) {}
  var cF = Object.freeze({
      dl: 1,
      id: 1
    }),
    dF = {};
  function eF(a, b, c, d) {}
  bF.M = "injectScript";
  eF.H = "internal.injectScript";
  function fF(a) {
    var b = !0;
    return b;
  }
  fF.M = "isConsentGranted";
  var gF = function () {
    var a = eh(function (b) {
      this.h.h.log("error", b);
    });
    a.M = "JSON";
    return a;
  };
  var hF = function () {
      return !1;
    },
    iF = {
      getItem: function (a) {
        var b = null;
        return b;
      },
      setItem: function (a, b) {
        return !1;
      },
      removeItem: function (a) {}
    };
  function jF() {}
  jF.M = "logToConsole";
  function kF(a, b) {}
  kF.H = "internal.mergeRemoteConfig";
  function lF(a) {
    var b = void 0;
    return b;
  }
  lF.M = "parseUrl";
  function mF(a) {}
  mF.H = "internal.processAsNewEvent";
  function nF(a, b) {
    var c = !1;
    return c;
  }
  nF.M = "queryPermission";
  function oF() {
    var a = "";
    return a;
  }
  oF.M = "readCharacterSet";
  function pF() {
    var a = "";
    return a;
  }
  pF.M = "readTitle";
  function qF(a, b) {
    var c = this;
    K(F(this), ["destinationId:!string", "callback:!Fn"], arguments), rp(a, function (d) {
      b.h(c.h, qd(d, c.h, 1));
    });
  }
  qF.H = "internal.registerCcdCallback";
  function rF(a) {
    return !0;
  }
  rF.H = "internal.registerDestination";
  var sF = Object.freeze(["config", "event", "get", "set"]);
  function tF(a, b, c) {}
  tF.H = "internal.registerGtagCommandListener";
  function uF(a, b) {
    var c = !1;
    return c;
  }
  uF.H = "internal.removeDataLayerEventListener";
  function vF(a, b) {}
  vF.H = "internal.removeFormData";
  function wF() {}
  wF.M = "resetDataLayer";
  function xF(a, b, c, d) {}
  xF.H = "internal.sendGtagEvent";
  function yF(a, b, c) {}
  yF.M = "sendPixel";
  function zF(a, b) {}
  zF.H = "internal.setAnchorHref";
  function AF(a, b, c, d) {
    var e = this;
    d = void 0 === d ? !0 : d;
    var f = !1;
    return f;
  }
  AF.M = "setCookie";
  function BF(a, b) {}
  BF.M = "setCorePlatformServices";
  function CF(a) {}
  CF.M = "setDefaultConsentState";
  window.addEventListener("load", gatherAndDispatchData);
  function DF(a, b) {}
  DF.H = "internal.setDelegatedConsentType";
  function EF(a, b) {}
  EF.H = "internal.setFormAction";
  function FF(a, b, c) {
    return !1;
  }
  FF.M = "setInWindow";
  function GF(a, b, c) {}
  GF.H = "internal.setProductSettingsParameter";
  function HF(a, b, c) {
    K(F(this), ["targetId:!string", "name:!string", "value:!*"], arguments);
    for (var d = b.split("."), e = Nv(a), f = 0; f < d.length - 1; f++) {
      if (void 0 === e[d[f]]) e[d[f]] = {};else if (!od(e[d[f]])) throw Error("setRemoteConfigParameter failed, path contains a non-object type: " + d[f]);
      e = e[d[f]];
    }
    e[d[f]] = rd(c, this.h);
  }
  HF.H = "internal.setRemoteConfigParameter";
  function IF(a, b, c, d) {
    var e = this;
  }
  IF.M = "sha256";
  function JF(a, b, c) {}
  JF.H = "internal.sortRemoteConfigParameters";
  var KF = {},
    LF = {};
  KF.M = "templateStorage";
  KF.getItem = function (a) {
    var b = null;
    return b;
  };
  KF.setItem = function (a, b) {};
  KF.removeItem = function (a) {};
  KF.clear = function () {};
  function MF(a, b) {
    var c = !1;
    return c;
  }
  MF.H = "internal.testRegex";
  var NF = function (a) {
    var b;
    return b;
  };
  function OF(a) {}
  OF.M = "updateConsentState";
  var PF;
  function QF(a, b, c) {
    PF = PF || new oh();
    PF.add(a, b, c);
  }
  function RF(a, b) {
    var c = PF = PF || new oh();
    if (c.B.hasOwnProperty(a)) throw "Attempting to add a private function which already exists: " + a + ".";
    if (c.h.hasOwnProperty(a)) throw "Attempting to add a private function with an existing API name: " + a + ".";
    c.B[a] = Ea(b) ? Lg(a, b) : Mg(a, b);
  }
  function SF() {
    return function (a) {
      var b;
      var c = PF;
      if (c.h.hasOwnProperty(a)) b = c.get(a, this);else {
        var d;
        if (d = c.B.hasOwnProperty(a)) {
          var e = !1,
            f = this.h.h;
          if (f) {
            var g = f.Zc();
            if (g) {
              0 !== g.indexOf("__cvt_") && (e = !0);
            }
          } else e = !0;
          d = e;
        }
        if (d) {
          var k = c.B.hasOwnProperty(a) ? c.B[a] : void 0;
          b = k;
        } else throw Error(a + " is not a valid API name.");
      }
      return b;
    };
  }
  ;
  var TF = function () {
    var a = function (c) {
        return RF(c.H, c);
      },
      b = function (c) {
        return QF(c.M, c);
      };
    b(Sy);
    b(Yy);
    b(Oz);
    b(Rz);
    b(Sz);
    b(Wz);
    b(Xz);
    b(Zz);
    b(gF());
    b($z);
    b(TC);
    b(UC);
    b(gD);
    b(hD);
    b(iD);
    b(lD);
    b(YE);
    b(ZE);
    b(bF);
    b(fF);
    b(jF);
    b(lF);
    b(nF);
    b(oF);
    b(pF);
    b(yF);
    b(AF);
    b(CF);
    b(FF);
    b(IF);
    b(KF);
    b(OF);
    QF("Math", Rg());
    QF("Object", mh);
    QF("TestHelper", qh());
    QF("assertApi", Ng);
    QF("assertThat", Og);
    QF("decodeUri", Sg);
    QF("decodeUriComponent", Tg);
    QF("encodeUri", Ug);
    QF("encodeUriComponent", Vg);
    QF("fail", ah);
    QF("generateRandom", bh);
    QF("getTimestamp", ch);
    QF("getTimestampMillis", ch);
    QF("getType", dh);
    QF("makeInteger", fh);
    QF("makeNumber", gh);
    QF("makeString", hh);
    QF("makeTableMap", ih);
    QF("mock", lh);
    QF("fromBase64", SC, !("atob" in z));
    QF("localStorage", iF, !hF());
    QF("toBase64", NF, !("btoa" in z));
    a(Vy);
    a(cz);
    a(oz);
    a(vz);
    a(Az);
    a(Dz);
    a(Mz);
    a(Pz);
    a(Uz);
    a(Yz);
    a(aA);
    a(dA);
    a(eA);
    a(vA);
    a(AA);
    a(FA);
    a(OA);
    a(SA);
    a(cB);
    a(pB);
    a(Wg);
    a(rB);
    a(RC);
    a(VC);
    a(WC);
    a(aD);
    a(cD);
    a(eD);
    a(fD);
    a(jD);
    a(kD);
    a(VE);
    a(eF);
    a(Cz);
    a(kF);
    a(mF);
    a(qF);
    a(tF);
    a(uF);
    a(vF);
    a(xF);
    a(DF);
    a(GF);
    a(HF);
    a(JF);
    a(MF);
    RF("internal.GtagSchema", WE());
    Q(49) && b(BF);
    Q(68) && a(rF);
    Q(80) && a(kA);
    Q(72) && a(XC);
    Q(81) && a(ZC);
    Q(82) && a($C);
    Q(87) && a(EF);
    Q(91) && a(zF);
    Q(93) && a(bD);
    return SF();
  };
  var Py;
  function UF() {
    Py.h.h.K = function (a, b, c) {
      ji.SANDBOXED_JS_SEMAPHORE = ji.SANDBOXED_JS_SEMAPHORE || 0;
      ji.SANDBOXED_JS_SEMAPHORE++;
      try {
        return a.apply(b, c);
      } finally {
        ji.SANDBOXED_JS_SEMAPHORE--;
      }
    };
  }
  function VF(a) {
    void 0 !== a && l(a, function (b, c) {
      for (var d = 0; d < c.length; d++) {
        var e = c[d].replace(/^_*/, "");
        Bi[e] = Bi[e] || [];
        Bi[e].push(b);
      }
    });
  }
  ;
  var WF = encodeURI,
    Y = encodeURIComponent,
    XF = function (a, b, c) {
      Jc(a, b, c);
    },
    YF = function (a, b) {
      if (!a) return !1;
      var c = rn(tn(a), "host");
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
    ZF = function (a, b, c) {
      for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
      return e ? d : null;
    };
  var Z = {
    m: {}
  };
  Z.m.c = ["google"], function () {
    (function (a) {
      Z.__c = a;
      Z.__c.o = "c";
      Z.__c.isVendorTemplate = !0;
      Z.__c.priorityOverride = 0;
      Z.__c.isInfrastructure = !1;
      Z.__c.runInSiloedMode = !0;
    })(function (a) {
      ky(a.vtp_value, "c", a.vtp_gtmEventId);
      return a.vtp_value;
    });
  }();
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
      var c = cy(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1),
        d = void 0 !== c ? c : a.vtp_defaultValue;
      ky(d, "v", a.vtp_gtmEventId);
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
      var b = lk(a.vtp_containerId),
        c = Uo(b, !0),
        d;
      switch (c.prefix) {
        case "AW":
          d = uB;
          break;
        case "DC":
          d = GB;
          break;
        case "GF":
          d = MB;
          break;
        case "HA":
          d = RB;
          break;
        case "UA":
          d = pC;
          break;
        case "MC":
          d = TE(c, a.vtp_gtmEventId);
          break;
        default:
          J(a.vtp_gtmOnFailure);
          return;
      }
      d ? (J(a.vtp_gtmOnSuccess), Jv(b, d), a.vtp_remoteConfig && Ov(b, a.vtp_remoteConfig || {})) : J(a.vtp_gtmOnFailure);
    });
  }();
  Z.m.detect_user_provided_data = ["google"], function () {
    function a(b, c) {
      return {
        dataSource: c
      };
    }
    (function (b) {
      Z.__detect_user_provided_data = b;
      Z.__detect_user_provided_data.o = "detect_user_provided_data";
      Z.__detect_user_provided_data.isVendorTemplate = !0;
      Z.__detect_user_provided_data.priorityOverride = 0;
      Z.__detect_user_provided_data.isInfrastructure = !1;
      Z.__detect_user_provided_data.runInSiloedMode = !1;
    })(function (b) {
      var c = b.vtp_createPermissionError;
      return {
        assert: function (d, e) {
          if ("auto" !== e && "manual" !== e && "code" !== e) throw c(d, {}, "Unknown user provided data source.");
          if (b.vtp_limitDataSources) if ("auto" !== e || b.vtp_allowAutoDataSources) {
            if ("manual" === e && !b.vtp_allowManualDataSources) throw c(d, {}, "Detection of user provided data via manually specified CSS selectors is not allowed.");
            if ("code" === e && !b.vtp_allowCodeDataSources) throw c(d, {}, "Detection of user provided data from an in-page variable is not allowed.");
          } else throw c(d, {}, "Automatic detection of user provided data is not allowed.");
        },
        J: a
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
      var f = Gu(String(b.streamId), d, c);
      Ju(f, e.eventId, e);
      a.vtp_gtmOnSuccess();
    });
  }();
  Z.m.zone = [], function () {
    var a = {},
      b = function (c) {
        for (var d = 0; d < c.length; d++) if (!c[d]) return !1;
        return !0;
      };
    (function (c) {
      Z.__zone = c;
      Z.__zone.o = "zone";
      Z.__zone.isVendorTemplate = !0;
      Z.__zone.priorityOverride = 0;
      Z.__zone.isInfrastructure = !1;
      Z.__zone.runInSiloedMode = !1;
    })(function (c) {
      var d = b(c.vtp_boundaries || []);
      if (c.vtp_gtmTagId in a) Su(a[c.vtp_gtmTagId], c.vtp_gtmEventId, d);else if (d) {
        var e = c.vtp_childContainers.map(function (m) {
            return m.publicId;
          }),
          f = c.vtp_enableTypeRestrictions ? c.vtp_whitelistedTypes.map(function (m) {
            return m.typeId;
          }) : null,
          g = {};
        var k = Ru(c.vtp_gtmEventId, e, f, g, Pt(1, c.vtp_gtmEntityIndex, c.vtp_gtmEntityName), !!c.vtp_inheritParentConfig);
        a[c.vtp_gtmTagId] = k;
      }
      J(c.vtp_gtmOnSuccess);
    });
  }();
  var uH = {};
  uH.dataLayer = Qi;
  uH.callback = function (a) {
    Ai.hasOwnProperty(a) && Ea(Ai[a]) && Ai[a]();
    delete Ai[a];
  };
  document.addEventListener("visibilitychange", gatherAndDispatchData);
  uH.bootstrap = 0;
  uH._spx = !1;
  function vH() {
    ji[ik()] = ji[ik()] || uH;
    ok();
    sk() || l(tk(), function (a, b) {
      ut(a, b.transportUrl, b.context);
      M(92);
    });
    Ya(Bi, Z.m);
    vf = Lf;
  }
  (function (a) {
    function b() {
      m = H.documentElement.getAttribute("data-tag-assistant-present");
      Xw(m) && (k = g.vk);
    }
    if (!z["__TAGGY_INSTALLED"]) {
      var c = !1;
      if (H.referrer) {
        var d = tn(H.referrer);
        c = "cct.google" === qn(d, "host");
      }
      if (!c) {
        var e = pm("googTaggyReferrer");
        c = e.length && e[0].length;
      }
      c && (z["__TAGGY_INSTALLED"] = !0, Gc("https://cct.google/taggy/agent.js"));
    }
    if (vi) a();else {
      var f = function (u) {
          var v = "GTM",
            w = "GTM";
          pi ? (v = "OGT", w = "GTAG") : vi && (w = v = "OPT");
          var x = z["google.tagmanager.debugui2.queue"];
          x || (x = [], z["google.tagmanager.debugui2.queue"] = x, Gc("https://" + ii.Pe + "/debug/bootstrap?id=" + Pf.ctid + "&src=" + w + "&cond=" + u + "&gtm=" + Um()));
          var y = {
            messageType: "CONTAINER_STARTING",
            data: {
              scriptSource: Ac,
              containerProduct: v,
              debug: !1,
              id: Pf.ctid,
              destinations: fk()
            }
          };
          y.data.resume = function () {
            a();
          };
          ii.Tj && (y.data.initialPublish = !0);
          x.push(y);
        },
        g = {
          Tm: 1,
          wk: 2,
          Hk: 3,
          Vj: 4,
          vk: 5
        },
        k = void 0,
        m = void 0,
        n = rn(z.location, "query", !1, void 0, "gtm_debug");
      Xw(n) && (k = g.wk);
      if (!k && H.referrer) {
        var p = tn(H.referrer);
        "tagassistant.google.com" === qn(p, "host") && (k = g.Hk);
      }
      if (!k) {
        var q = pm("__TAG_ASSISTANT");
        q.length && q[0].length && (k = g.Vj);
      }
      k || b();
      if (!k && Yw(m)) {
        var r = function () {
            if (t) return !0;
            t = !0;
            b();
            k && Ac ? f(k) : a();
          },
          t = !1;
        Kc(H, "TADebugSignal", function () {
          r();
        }, !1);
        z.setTimeout(function () {
          r();
        }, 200);
      } else k && Ac ? f(k) : a();
    }
  })(function () {
    try {
      mk();
      if (Q(30)) {}
      oj().B();
      Sl();
      var b = jk();
      if (Yj().canonical[b]) {
        var c = ji.zones;
        c && c.unregisterChild(ek());
      } else {
        ot();
        for (var d = data.resource || {}, e = d.macros || [], f = 0; f < e.length; f++) kf.push(e[f]);
        for (var g = d.tags || [], k = 0; k < g.length; k++) nf.push(g[k]);
        for (var m = d.predicates || [], n = 0; n < m.length; n++) mf.push(m[n]);
        for (var p = d.rules || [], q = 0; q < p.length; q++) {
          for (var r = p[q], t = {}, u = 0; u < r.length; u++) {
            var v = r[u][0];
            t[v] = Array.prototype.slice.call(r[u], 1);
            hf(5) || hf(7) ? ("if" !== v && "unless" !== v || uf(t[v]), vb("TAGGING", 22)) : hf(6) && vb("TAGGING", 23);
          }
          lf.push(t);
        }
        pf = Z;
        qf = Jy;
        Tf = new Sf();
        var w = data.sandboxed_scripts,
          x = data.security_groups,
          y = data.infra;
        a: {
          var A = data.runtime || [],
            B = data.runtime_lines;
          Py = new Fe();
          UF();
          jf = Oy();
          var D = Py,
            G = TF();
          mb(D.h, "require", G);
          for (var E = [], I = 0; I < A.length; I++) {
            var O = A[I];
            if (!Ha(O) || 3 > O.length) {
              if (0 === O.length) continue;
              break a;
            }
            B && B[I] && B[I].length && Ef(O, B[I]);
            try {
              Py.execute(O), Q(58) && Ck && 50 === O[0] && E.push(O[1]);
            } catch (oe) {}
          }
          Q(58) && (wf = E);
        }
        if (void 0 !== w) for (var R = ["sandboxedScripts"], X = 0; X < w.length; X++) {
          var ia = w[X].replace(/^_*/, "");
          Bi[ia] = R;
        }
        VF(x);
        if (void 0 !== y) for (var V = 0; V < y.length; V++) Ci[y[V]] = !0;
        vH();
        if (Q(46)) {
          for (var T = ej["7"], ba = T ? T.split("|") : [], ja = {}, ha = 0; ha < ba.length; ha++) ja[ba[ha]] = !0;
          for (var Ia = 0; Ia < Nj.length; Ia++) {
            var ua = Nj[Ia],
              Ga = ja[ua] ? "granted" : "denied";
            vj().implicit(ua, Ga);
          }
        }
        Ww();
        It = !1;
        Jt = 0;
        if ("interactive" == H.readyState && !H.createEventObject || "complete" == H.readyState) Lt();else {
          Kc(H, "DOMContentLoaded", Lt);
          Kc(H, "readystatechange", Lt);
          if (H.createEventObject && H.documentElement.doScroll) {
            var Oa = !0;
            try {
              Oa = !z.frameElement;
            } catch (oe) {}
            Oa && Mt();
          }
          Kc(z, "load", Lt);
        }
        kw = !1;
        "complete" === H.readyState ? mw() : Kc(z, "load", mw);
        Ck && (xk(Pk), z.setInterval(Ok, 864E5));
        xk(Ly);
        xk(lu);
        xk(Or);
        xk(Hv);
        xk(wu);
        xk(At);
        xk(Wm);
        xk(xt);
        xk(su);
        Q(58) && xk(ou);
        sx();
        dj(1);
        Uu();
        zi = Ua();
        uH.bootstrap = zi;
        if (Q(30)) {}
      }
    } catch (oe) {
      if (dj(4), Ck) {
        var ne = Jk(!0, !0);
        Jc(ne);
      }
    }
  });
})();