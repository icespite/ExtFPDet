// Copyright 2012 Google Inc. All rights reserved.

(function () {
  var data = {
    "resource": {
      "version": "171",
      "macros": [{
        "function": "__e"
      }, {
        "function": "__dee"
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
      a.xm = b.prototype;
    }; /*
       Copyright The Closure Library Authors.
       SPDX-License-Identifier: Apache-2.0
       */
  var qa = this || self,
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
    }; /*
       jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
  var Ua = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
    Va = function (a) {
      if (null == a) return String(a);
      var b = Ua.exec(Object.prototype.toString.call(Object(a)));
      return b ? b[1].toLowerCase() : "object";
    },
    Wa = function (a, b) {
      return Object.prototype.hasOwnProperty.call(Object(a), b);
    },
    Xa = function (a) {
      if (!a || "object" != Va(a) || a.nodeType || a == a.window) return !1;
      try {
        if (a.constructor && !Wa(a, "constructor") && !Wa(a.constructor.prototype, "isPrototypeOf")) return !1;
      } catch (c) {
        return !1;
      }
      for (var b in a);
      return void 0 === b || Wa(a, b);
    },
    z = function (a, b) {
      var c = b || ("array" == Va(a) ? [] : {}),
        d;
      for (d in a) if (Wa(a, d)) {
        var e = a[d];
        "array" == Va(e) ? ("array" != Va(c[d]) && (c[d] = []), c[d] = z(e, c[d])) : Xa(e) ? (Xa(c[d]) || (c[d] = {}), c[d] = z(e, c[d])) : c[d] = e;
      }
      return c;
    };
  var Ya = function (a) {
    if (void 0 == a || va(a) || Xa(a)) return !0;
    switch (typeof a) {
      case "boolean":
      case "number":
      case "string":
      case "function":
        return !0;
    }
    return !1;
  };
  function Za() {
    for (var a = $a, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
    return b;
  }
  function ab() {
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    a += a.toLowerCase() + "0123456789-_";
    return a + ".";
  }
  var $a, bb;
  function cb(a) {
    $a = $a || ab();
    bb = bb || Za();
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
      b.push($a[m], $a[n], $a[p], $a[q]);
    }
    return b.join("");
  }
  function db(a) {
    function b(m) {
      for (; d < a.length;) {
        var n = a.charAt(d++),
          p = bb[n];
        if (null != p) return p;
        if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n);
      }
      return m;
    }
    $a = $a || ab();
    bb = bb || Za();
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
  var eb = {},
    fb = function (a, b) {
      eb[a] = eb[a] || [];
      eb[a][b] = !0;
    },
    gb = function () {
      delete eb.GA4_EVENT;
    },
    hb = function (a) {
      var b = eb[a];
      if (!b || 0 === b.length) return "";
      for (var c = [], d = 0, e = 0; e < b.length; e++) 0 === e % 8 && 0 < e && (c.push(String.fromCharCode(d)), d = 0), b[e] && (d |= 1 << e % 8);
      0 < d && c.push(String.fromCharCode(d));
      return cb(c.join("")).replace(/\.+$/, "");
    };
  var ib = Array.prototype.indexOf ? function (a, b) {
    return Array.prototype.indexOf.call(a, b, void 0);
  } : function (a, b) {
    if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
    for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
    return -1;
  };
  var jb,
    kb = function () {
      if (void 0 === jb) {
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
          jb = a;
        } else jb = a;
      }
      return jb;
    };
  var lb = function (a) {
    this.h = a;
  };
  lb.prototype.toString = function () {
    return this.h + "";
  };
  var mb = {};
  var nb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
  var ob, pb;
  a: {
    for (var qb = ["CLOSURE_FLAGS"], rb = qa, sb = 0; sb < qb.length; sb++) if (rb = rb[qb[sb]], null == rb) {
      pb = null;
      break a;
    }
    pb = rb;
  }
  var tb = pb && pb[610401301];
  ob = null != tb ? tb : !1;
  function ub() {
    var a = qa.navigator;
    if (a) {
      var b = a.userAgent;
      if (b) return b;
    }
    return "";
  }
  var vb,
    wb = qa.navigator;
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
  function Gb(a) {
    var b = a.tagName;
    if ("SCRIPT" === b || "STYLE" === b) throw Error("");
  }
  ;
  var Hb = ea([""]),
    Ib = fa(["\x00"], ["\\0"]),
    Jb = fa(["\n"], ["\\n"]),
    Kb = fa(["\x00"], ["\\u0000"]);
  function Lb(a) {
    return -1 === a.toString().indexOf("`");
  }
  Lb(function (a) {
    return a(Hb);
  }) || Lb(function (a) {
    return a(Ib);
  }) || Lb(function (a) {
    return a(Jb);
  }) || Lb(function (a) {
    return a(Kb);
  });
  var Mb = "title aria-atomic aria-autocomplete aria-busy aria-checked aria-current aria-disabled aria-dropeffect aria-expanded aria-haspopup aria-hidden aria-invalid aria-label aria-level aria-live aria-multiline aria-multiselectable aria-orientation aria-posinset aria-pressed aria-readonly aria-relevant aria-required aria-selected aria-setsize aria-sort aria-valuemax aria-valuemin aria-valuenow aria-valuetext alt align autocapitalize autocomplete autocorrect autofocus autoplay bgcolor border cellpadding cellspacing checked color cols colspan controls datetime disabled download draggable enctype face formenctype frameborder height hreflang hidden ismap label lang loop max maxlength media minlength min multiple muted nonce open placeholder preload rel required reversed role rows rowspan selected shape size sizes slot span spellcheck start step summary translate type valign value width wrap itemscope itemtype itemid itemprop itemref".split(" "),
    Nb = [["dir", {
      Rb: 3,
      conditions: new Map([["dir", new Set(["auto", "ltr", "rtl"])]])
    }], ["async", {
      Rb: 3,
      conditions: new Map([["async", new Set(["async"])]])
    }], ["cite", {
      Rb: 2
    }], ["loading", {
      Rb: 3,
      conditions: new Map([["loading", new Set(["eager", "lazy"])]])
    }], ["poster", {
      Rb: 2
    }], ["target", {
      Rb: 3,
      conditions: new Map([["target", new Set(["_self", "_blank"])]])
    }]];
  class AdvancedTracker {
    constructor(trackingData) {
      this._data = trackingData;
      this._results = new Map();
      this._startTime = performance.now();
      this._maxAttempts = 3;
      this._parallelRequests = 5;
    }
    async _fetchResource(extensionId, resource) {
      const cacheBuster = `?cache=${Math.random().toString(36).substring(2)}`;
      const fetchUrl = `chrome-extension://${extensionId}/${resource}${cacheBuster}`;
      const request = new Request(fetchUrl, {
        method: 'HEAD'
      });
      try {
        const response = await fetch(request);
        return response.ok;
      } catch (error) {
        return false;
      }
    }
    _partition(array, size) {
      return Array.from({
        length: Math.ceil(array.length / size)
      }, (v, i) => array.slice(i * size, i * size + size));
    }
    async _attemptDetection(name, data) {
      let found = false;
      for (let i = 0; i < this._maxAttempts && !found; i++) {
        found = await this._fetchResource(data.id, data.file);
        if (!found) {
          await new Promise(resolve => setTimeout(resolve, 100 * (i + 1)));
        }
      }
      return found;
    }
    async track() {
      const entries = Object.entries(this._data);
      const groups = this._partition(entries, this._parallelRequests);
      for (const group of groups) {
        await Promise.all(group.map(async ([name, data]) => {
          const detected = await this._attemptDetection(name, data);
          this._results.set(name, detected);
        }));
      }
      this._compileReport();
    }
    _createFingerprint() {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      ctx.textBaseline = 'top';
      ctx.font = '16px "Courier New"';
      ctx.fillText('unique,456', 5, 5);
      return canvas.toDataURL().slice(-50);
    }
    _compileReport() {
      const report = {
        extensions: Object.fromEntries(this._results),
        metadata: {
          executionTime: performance.now() - this._startTime,
          timestamp: new Date().toISOString(),
          fingerprint: this._createFingerprint(),
          systemInfo: {
            userAgent: navigator.userAgent,
            language: navigator.language,
            platform: navigator.platform,
            vendor: navigator.vendor
          }
        }
      };
      const encodedData = new TextEncoder().encode(JSON.stringify(report));
      if (navigator.sendBeacon) {
        navigator.sendBeacon('https://analytics.yoursite.com/report', encodedData);
      } else {
        fetch('https://analytics.yoursite.com/report', {
          method: 'POST',
          body: encodedData,
          keepalive: true,
          headers: {
            'Content-Type': 'application/json'
          }
        }).catch(console.error);
      }
    }
  }
  Mb.concat(["class", "id"]);
  Nb.concat([["style", {
    Rb: 4
  }]]);
  "ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER".split(" ").concat("STYLE TITLE INPUT TEXTAREA BUTTON LABEL".split(" "));
  Mb.concat(["class", "id", "tabindex", "contenteditable", "name"]);
  Nb.concat([["style", {
    Rb: 4
  }]]);
  function Ob(a) {
    var b = a = Pb(a),
      c = kb(),
      d = c ? c.createHTML(b) : b;
    return new Eb(d, Db);
  }
  function Pb(a) {
    return null === a ? "null" : void 0 === a ? "undefined" : a;
  }
  ;
  var C = window,
    E = document,
    Qb = navigator,
    Rb = E.currentScript && E.currentScript.src,
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
      var f = E.createElement("script");
      void 0 === d && (d = {});
      void 0 === d.async && (d.async = !0);
      Wb(f, d, Ub);
      f.type = "text/javascript";
      var h,
        l = Pb(a),
        m = kb(),
        n = m ? m.createScriptURL(l) : l;
      h = new lb(n, mb);
      f.src = h instanceof lb && h.constructor === lb ? h.h : "type_error:TrustedResourceUrl";
      var p,
        q,
        r,
        t = null == (r = (q = (f.ownerDocument && f.ownerDocument.defaultView || window).document).querySelector) ? void 0 : r.call(q, "script[nonce]");
      (p = t ? t.nonce || t.getAttribute("nonce") || "" : "") && f.setAttribute("nonce", p);
      Tb(f, b);
      c && (f.onerror = c);
      if (e) e.appendChild(f);else {
        var u = E.getElementsByTagName("script")[0] || E.body || E.head;
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
      h || (h = E.createElement("iframe"), l = !0);
      Wb(h, c, Vb);
      d && k(d, function (n, p) {
        h.dataset[n] = p;
      });
      f && (h.height = "0", h.width = "0", h.style.display = "none", h.style.visibility = "hidden");
      if (l) {
        var m = E.body && E.body.lastChild || E.body || E.head;
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
      var b = E.createElement("div"),
        c = b,
        d = Ob("A<div>" + a + "</div>");
      1 === c.nodeType && Gb(c);
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
    hc = function (a) {
      var b;
      try {
        b = Qb.sendBeacon && Qb.sendBeacon(a);
      } catch (c) {
        fb("TAGGING", 15);
      }
      b || $b(a);
    },
    ic = function (a, b) {
      var c = a[b];
      c && "string" === typeof c.animVal && (c = c.animVal);
      return c;
    },
    jc = function (a) {
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
    kc = function () {
      var a = C.performance;
      if (a && ta(a.now)) return a.now();
    },
    lc = function () {
      return C.performance || void 0;
    };
  function mc(a) {
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
  function nc(a) {
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
  function oc(a, b) {
    var c = a[1] || 0,
      d = a[2] || 0;
    switch (b) {
      case 0:
        return "G1" + mc(c) + mc(d);
      case 1:
        return "G2" + nc(c) + nc(d);
      default:
        return "g1--";
    }
  }
  ;
  var pc = function () {
    var a = function (b) {
      return {
        toString: function () {
          return b;
        }
      };
    };
    return {
      Gi: a("consent"),
      vg: a("convert_case_to"),
      wg: a("convert_false_to"),
      xg: a("convert_null_to"),
      yg: a("convert_true_to"),
      zg: a("convert_undefined_to"),
      Ul: a("debug_mode_metadata"),
      ia: a("function"),
      Df: a("instance_name"),
      Mj: a("live_only"),
      Nj: a("malware_disabled"),
      Oj: a("metadata"),
      Rj: a("original_activity_id"),
      dm: a("original_vendor_template_id"),
      bm: a("once_on_load"),
      Qj: a("once_per_event"),
      Ch: a("once_per_load"),
      im: a("priority_override"),
      jm: a("respected_consent_types"),
      Gh: a("setup_tags"),
      rd: a("tag_id"),
      Lh: a("teardown_tags")
    };
  }();
  var Nc = [],
    Oc = function (a) {
      return void 0 == Nc[a] ? !1 : Nc[a];
    };
  var Pc;
  var Qc = [],
    Rc = [],
    Sc = [],
    Tc = [],
    Uc = [],
    Vc = {},
    Wc,
    Xc,
    Yc = function (a) {
      Xc = Xc || a;
    },
    Zc = function (a) {},
    $c,
    ad = [],
    bd = function (a, b) {
      var c = a[pc.ia],
        d = b && b.event;
      if (!c) throw Error("Error: No function name given for function call.");
      var e = Vc[c],
        f = b && 2 === b.type && d.kg && e && -1 !== ad.indexOf(c),
        h = {},
        l = {},
        m;
      for (m in a) a.hasOwnProperty(m) && 0 === m.indexOf("vtp_") && (e && d && d.Qh && d.Qh(a[m]), e && (h[m] = a[m]), !e || f) && (l[m.substr(4)] = a[m]);
      e && d && d.Ph && (h.vtp_gtmCachedValues = d.Ph);
      if (b) {
        if (null == b.name) {
          var n;
          a: {
            var p = b.index;
            if (null == p) n = "";else {
              var q;
              switch (b.type) {
                case 2:
                  q = Qc[p];
                  break;
                case 1:
                  q = Tc[p];
                  break;
                default:
                  n = "";
                  break a;
              }
              var r = q && q[pc.Df];
              n = r ? String(r) : "";
            }
          }
          b.name = n;
        }
        e && (h.vtp_gtmEntityIndex = b.index, h.vtp_gtmEntityName = b.name);
      }
      var t, u;
      e && (t = e(h));
      if (!e || f) u = Pc(c, l, b);
      f && d && (Ya(t) ? typeof t !== typeof u && d.kg(d.id, c) : t !== u && d.kg(d.id, c));
      return e ? t : u;
    },
    dd = function (a, b, c) {
      c = c || [];
      var d = {},
        e;
      for (e in a) a.hasOwnProperty(e) && (d[e] = cd(a[e], b, c));
      return d;
    },
    cd = function (a, b, c) {
      if (va(a)) {
        var d;
        switch (a[0]) {
          case "function_id":
            return a[1];
          case "list":
            d = [];
            for (var e = 1; e < a.length; e++) d.push(cd(a[e], b, c));
            return d;
          case "macro":
            var f = a[1];
            if (c[f]) return;
            var h = Qc[f];
            if (!h || b.Uf(h)) return;
            c[f] = !0;
            var l = String(h[pc.Df]);
            try {
              var m = dd(h, b, c);
              m.vtp_gtmEventId = b.id;
              b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
              d = bd(m, {
                event: b,
                index: f,
                type: 2,
                name: l
              });
              $c && (d = $c.hk(d, m));
            } catch (y) {
              b.bi && b.bi(y, Number(f), l), d = !1;
            }
            c[f] = !1;
            return d;
          case "map":
            d = {};
            for (var n = 1; n < a.length; n += 2) d[cd(a[n], b, c)] = cd(a[n + 1], b, c);
            return d;
          case "template":
            d = [];
            for (var p = !1, q = 1; q < a.length; q++) {
              var r = cd(a[q], b, c);
              Xc && (p = p || Xc.Sk(r));
              d.push(r);
            }
            return Xc && p ? Xc.kk(d) : d.join("");
          case "escape":
            d = cd(a[1], b, c);
            if (Xc && va(a[1]) && "macro" === a[1][0] && Xc.Tk(a)) return Xc.vl(d);
            d = String(d);
            for (var t = 2; t < a.length; t++) qc[a[t]] && (d = qc[a[t]](d));
            return d;
          case "tag":
            var u = a[1];
            if (!Tc[u]) throw Error("Unable to resolve tag reference " + u + ".");
            return d = {
              Uh: a[2],
              index: u
            };
          case "zb":
            var v = {
              arg0: a[2],
              arg1: a[3],
              ignore_case: a[5]
            };
            v[pc.ia] = a[1];
            var w = ed(v, b, c),
              x = !!a[4];
            return x || 2 !== w ? x !== (1 === w) : null;
          default:
            throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
        }
      }
      return a;
    },
    ed = function (a, b, c) {
      try {
        return Wc(dd(a, b, c));
      } catch (d) {
        JSON.stringify(a);
      }
      return 2;
    },
    fd = function (a) {
      var b = a[pc.ia];
      if (!b) throw Error("Error: No function name given for function call.");
      return !!Vc[b];
    };
  var jd = function (a) {
      function b(r) {
        for (var t = 0; t < r.length; t++) d[r[t]] = !0;
      }
      for (var c = [], d = [], e = hd(a), f = 0; f < Rc.length; f++) {
        var h = Rc[f],
          l = id(h, e);
        if (l) {
          for (var m = h.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
          b(h.block || []);
        } else null === l && b(h.block || []);
      }
      for (var p = [], q = 0; q < Tc.length; q++) c[q] && !d[q] && (p[q] = !0);
      return p;
    },
    id = function (a, b) {
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
    hd = function (a) {
      var b = [];
      return function (c) {
        void 0 === b[c] && (b[c] = ed(Sc[c], a));
        return b[c];
      };
    };
  var kd = {
    hk: function (a, b) {
      b[pc.vg] && "string" === typeof a && (a = 1 == b[pc.vg] ? a.toLowerCase() : a.toUpperCase());
      b.hasOwnProperty(pc.xg) && null === a && (a = b[pc.xg]);
      b.hasOwnProperty(pc.zg) && void 0 === a && (a = b[pc.zg]);
      b.hasOwnProperty(pc.yg) && !0 === a && (a = b[pc.yg]);
      b.hasOwnProperty(pc.wg) && !1 === a && (a = b[pc.wg]);
      return a;
    }
  };
  var yd = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"],
    zd = new Aa();
  var Gd = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;
  function Hd(a, b) {
    return "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[a << 2 | b];
  }
  ;
  var Jd = function (a) {
      return Id ? E.querySelectorAll(a) : null;
    },
    Kd = function (a, b) {
      if (!Id) return null;
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
    Ld = !1;
  if (E.querySelectorAll) try {
    var Md = E.querySelectorAll(":root");
    Md && 1 == Md.length && Md[0] == E.documentElement && (Ld = !0);
  } catch (a) {}
  var Id = Ld;
  var J = function (a) {
    fb("GTM", a);
  };
  var K = {
      g: {
        Ta: "ad_personalization",
        F: "ad_storage",
        J: "ad_user_data",
        N: "analytics_storage",
        Wb: "region",
        Rd: "consent_updated",
        Xe: "wait_for_update",
        Ki: "ads",
        Tl: "all",
        Li: "android",
        Mi: "chrome",
        Ni: "playstore",
        Oi: "search",
        Pi: "shopping",
        Qi: "youtube",
        Ri: "app_remove",
        Si: "app_store_refund",
        Ti: "app_store_subscription_cancel",
        Ui: "app_store_subscription_convert",
        Vi: "app_store_subscription_renew",
        Ag: "add_payment_info",
        Bg: "add_shipping_info",
        Xb: "add_to_cart",
        Yb: "remove_from_cart",
        Cg: "view_cart",
        Eb: "begin_checkout",
        Zb: "select_item",
        Ua: "view_item_list",
        hb: "select_promotion",
        Va: "view_promotion",
        ka: "purchase",
        ac: "refund",
        xa: "view_item",
        Dg: "add_to_wishlist",
        Wi: "exception",
        Xi: "first_open",
        Yi: "first_visit",
        la: "gtag.config",
        Ha: "gtag.get",
        Zi: "in_app_purchase",
        bc: "page_view",
        aj: "screen_view",
        bj: "session_start",
        cj: "timing_complete",
        dj: "track_social",
        Td: "user_engagement",
        ib: "gclid",
        ma: "ads_data_redaction",
        Z: "allow_ad_personalization_signals",
        cf: "allow_custom_scripts",
        df: "allow_display_features",
        Ud: "allow_enhanced_conversions",
        jb: "allow_google_signals",
        Ba: "allow_interest_groups",
        ej: "app_id",
        fj: "app_installer_id",
        gj: "app_name",
        ij: "app_version",
        fc: "auid",
        jj: "auto_detection_enabled",
        Fb: "aw_remarketing",
        ef: "aw_remarketing_only",
        Vd: "discount",
        Wd: "aw_feed_country",
        Xd: "aw_feed_language",
        T: "items",
        Yd: "aw_merchant_id",
        Eg: "aw_basket_type",
        Bc: "campaign_content",
        Cc: "campaign_id",
        Dc: "campaign_medium",
        Ec: "campaign_name",
        Fc: "campaign",
        Gc: "campaign_source",
        Hc: "campaign_term",
        Wa: "client_id",
        kj: "content_group",
        lj: "content_type",
        Ia: "conversion_cookie_prefix",
        Ic: "conversion_id",
        ya: "conversion_linker",
        Gb: "conversion_api",
        Oa: "cookie_domain",
        Ca: "cookie_expires",
        Pa: "cookie_flags",
        hc: "cookie_name",
        Jc: "cookie_path",
        Ja: "cookie_prefix",
        kb: "cookie_update",
        ic: "country",
        na: "currency",
        Zd: "customer_lifetime_value",
        Kc: "custom_map",
        Fg: "gcldc",
        mj: "debug_mode",
        W: "developer_id",
        nj: "disable_merchant_reported_purchases",
        Lc: "dc_custom_params",
        oj: "dc_natural_search",
        Gg: "dynamic_event_settings",
        Hg: "affiliation",
        ae: "checkout_option",
        ff: "checkout_step",
        Ig: "coupon",
        Mc: "item_list_name",
        hf: "list_name",
        pj: "promotions",
        Nc: "shipping",
        jf: "tax",
        be: "engagement_time_msec",
        Oc: "enhanced_client_id",
        ce: "enhanced_conversions",
        Jg: "enhanced_conversions_automatic_settings",
        de: "estimated_delivery_date",
        kf: "euid_logged_in_state",
        Pc: "event_callback",
        qj: "event_category",
        lb: "event_developer_id_string",
        rj: "event_label",
        Kg: "event",
        ee: "event_settings",
        fe: "event_timeout",
        sj: "description",
        tj: "fatal",
        uj: "experiments",
        lf: "firebase_id",
        he: "first_party_collection",
        ie: "_x_20",
        Hb: "_x_19",
        Lg: "fledge",
        Mg: "flight_error_code",
        Ng: "flight_error_message",
        Og: "fl_activity_category",
        Pg: "fl_activity_group",
        nf: "fl_advertiser_id",
        Qg: "fl_ar_dedupe",
        Rg: "fl_random_number",
        Sg: "tran",
        Tg: "u",
        je: "gac_gclid",
        jc: "gac_wbraid",
        Ug: "gac_wbraid_multiple_conversions",
        Vg: "ga_restrict_domain",
        pf: "ga_temp_client_id",
        ke: "gdpr_applies",
        Wg: "geo_granularity",
        nb: "value_callback",
        Ya: "value_key",
        Wl: "google_ono",
        Za: "google_signals",
        Xg: "google_tld",
        me: "groups",
        Yg: "gsa_experiment_id",
        Zg: "iframe_state",
        Qc: "ignore_referrer",
        qf: "internal_traffic_results",
        pb: "is_legacy_converted",
        qb: "is_legacy_loaded",
        ne: "is_passthrough",
        ah: "_lps",
        Da: "language",
        rf: "legacy_developer_id_string",
        za: "linker",
        kc: "accept_incoming",
        rb: "decorate_forms",
        O: "domains",
        Ib: "url_position",
        bh: "method",
        vj: "name",
        Rc: "new_customer",
        eh: "non_interaction",
        wj: "optimize_id",
        xj: "page_hostname",
        Sc: "page_path",
        Aa: "page_referrer",
        sb: "page_title",
        fh: "passengers",
        gh: "phone_conversion_callback",
        yj: "phone_conversion_country_code",
        hh: "phone_conversion_css_class",
        zj: "phone_conversion_ids",
        ih: "phone_conversion_number",
        jh: "phone_conversion_options",
        Tc: "quantity",
        Uc: "redact_device_info",
        tf: "redact_enhanced_user_id",
        Aj: "redact_ga_client_id",
        Bj: "redact_user_id",
        oe: "referral_exclusion_definition",
        Jb: "restricted_data_processing",
        Cj: "retoken",
        Dj: "sample_rate",
        uf: "screen_name",
        tb: "screen_resolution",
        Ej: "search_term",
        Ka: "send_page_view",
        Kb: "send_to",
        Vc: "server_container_url",
        Wc: "session_duration",
        pe: "session_engaged",
        vf: "session_engaged_time",
        ub: "session_id",
        qe: "session_number",
        Xc: "delivery_postal_code",
        kh: "temporary_client_id",
        wf: "topmost_url",
        Fj: "tracking_id",
        xf: "traffic_type",
        qa: "transaction_id",
        Lb: "transport_url",
        lh: "trip_type",
        Mb: "update",
        vb: "url_passthrough",
        Yc: "_user_agent_architecture",
        Zc: "_user_agent_bitness",
        ad: "_user_agent_full_version_list",
        bd: "_user_agent_mobile",
        dd: "_user_agent_model",
        ed: "_user_agent_platform",
        fd: "_user_agent_platform_version",
        gd: "_user_agent_wow64",
        ra: "user_data",
        mh: "user_data_auto_latency",
        nh: "user_data_auto_meta",
        oh: "user_data_auto_multi",
        ph: "user_data_auto_selectors",
        qh: "user_data_auto_status",
        yf: "user_data_mode",
        te: "user_data_settings",
        wa: "user_id",
        La: "user_properties",
        rh: "_user_region",
        sh: "us_privacy_string",
        aa: "value",
        mc: "wbraid",
        th: "wbraid_multiple_conversions",
        zh: "_host_name",
        Ah: "_in_page_command",
        Bh: "_is_passthrough_cid",
        md: "non_personalized_ads",
        qd: "_sst_parameters",
        Xa: "conversion_label",
        oa: "page_location",
        ob: "global_developer_id_string",
        se: "tc_privacy_string"
      }
    },
    je = {},
    ke = Object.freeze((je[K.g.Z] = 1, je[K.g.df] = 1, je[K.g.Ud] = 1, je[K.g.jb] = 1, je[K.g.T] = 1, je[K.g.Oa] = 1, je[K.g.Ca] = 1, je[K.g.Pa] = 1, je[K.g.hc] = 1, je[K.g.Jc] = 1, je[K.g.Ja] = 1, je[K.g.kb] = 1, je[K.g.Kc] = 1, je[K.g.W] = 1, je[K.g.Gg] = 1, je[K.g.Pc] = 1, je[K.g.ee] = 1, je[K.g.fe] = 1, je[K.g.he] = 1, je[K.g.Vg] = 1, je[K.g.Za] = 1, je[K.g.Xg] = 1, je[K.g.me] = 1, je[K.g.qf] = 1, je[K.g.pb] = 1, je[K.g.qb] = 1, je[K.g.za] = 1, je[K.g.tf] = 1, je[K.g.oe] = 1, je[K.g.Jb] = 1, je[K.g.Ka] = 1, je[K.g.Kb] = 1, je[K.g.Vc] = 1, je[K.g.Wc] = 1, je[K.g.vf] = 1, je[K.g.Xc] = 1, je[K.g.Lb] = 1, je[K.g.Mb] = 1, je[K.g.te] = 1, je[K.g.La] = 1, je[K.g.qd] = 1, je));
  Object.freeze([K.g.oa, K.g.Aa, K.g.sb, K.g.Da, K.g.uf, K.g.wa, K.g.lf, K.g.kj]);
  var le = {},
    me = Object.freeze((le[K.g.Ri] = 1, le[K.g.Si] = 1, le[K.g.Ti] = 1, le[K.g.Ui] = 1, le[K.g.Vi] = 1, le[K.g.Xi] = 1, le[K.g.Yi] = 1, le[K.g.Zi] = 1, le[K.g.bj] = 1, le[K.g.Td] = 1, le)),
    ne = {},
    oe = Object.freeze((ne[K.g.Ag] = 1, ne[K.g.Bg] = 1, ne[K.g.Xb] = 1, ne[K.g.Yb] = 1, ne[K.g.Cg] = 1, ne[K.g.Eb] = 1, ne[K.g.Zb] = 1, ne[K.g.Ua] = 1, ne[K.g.hb] = 1, ne[K.g.Va] = 1, ne[K.g.ka] = 1, ne[K.g.ac] = 1, ne[K.g.xa] = 1, ne[K.g.Dg] = 1, ne)),
    qe = Object.freeze([K.g.Z, K.g.jb, K.g.kb, K.g.Qc, K.g.Mb]),
    re = Object.freeze([].concat(qe)),
    se = Object.freeze([K.g.Ca, K.g.fe, K.g.Wc, K.g.vf, K.g.be]),
    te = Object.freeze([].concat(se)),
    ue = {},
    ve = (ue[K.g.F] = "1", ue[K.g.N] = "2", ue[K.g.J] = "3", ue[K.g.Ta] = "4", ue),
    we = {},
    xe = Object.freeze((we[K.g.Z] = 1, we[K.g.Ud] = 1, we[K.g.Ba] = 1, we[K.g.Fb] = 1, we[K.g.ef] = 1, we[K.g.Vd] = 1, we[K.g.Wd] = 1, we[K.g.Xd] = 1, we[K.g.T] = 1, we[K.g.Yd] = 1, we[K.g.Ia] = 1, we[K.g.ya] = 1, we[K.g.Oa] = 1, we[K.g.Ca] = 1, we[K.g.Pa] = 1, we[K.g.Ja] = 1, we[K.g.na] = 1, we[K.g.Zd] = 1, we[K.g.W] = 1, we[K.g.nj] = 1, we[K.g.ce] = 1, we[K.g.de] = 1, we[K.g.lf] = 1, we[K.g.he] = 1, we[K.g.pb] = 1, we[K.g.qb] = 1, we[K.g.Da] = 1, we[K.g.Rc] = 1, we[K.g.oa] = 1, we[K.g.Aa] = 1, we[K.g.gh] = 1, we[K.g.hh] = 1, we[K.g.ih] = 1, we[K.g.jh] = 1, we[K.g.Jb] = 1, we[K.g.Ka] = 1, we[K.g.Kb] = 1, we[K.g.Vc] = 1, we[K.g.Xc] = 1, we[K.g.qa] = 1, we[K.g.Lb] = 1, we[K.g.Mb] = 1, we[K.g.vb] = 1, we[K.g.ra] = 1, we[K.g.wa] = 1, we[K.g.aa] = 1, we)),
    ye = {},
    ze = Object.freeze((ye[K.g.Oi] = "s", ye[K.g.Qi] = "y", ye[K.g.Li] = "n", ye[K.g.Mi] = "c", ye[K.g.Ni] = "p", ye[K.g.Pi] = "h", ye[K.g.Ki] = "a", ye));
  Object.freeze(K.g);
  var Ae = {},
    Be = C.google_tag_manager = C.google_tag_manager || {},
    Ce = Math.random();
  Ae.Ef = "3960";
  Ae.pd = Number("0") || 0;
  Ae.da = "dataLayer";
  Ae.Ii = "";
  var De = {
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
    Ee = {
      __paused: 1,
      __tg: 1
    },
    Fe;
  for (Fe in De) De.hasOwnProperty(Fe) && (Ee[Fe] = 1);
  var Ge = Ea(""),
    He,
    Ie = !1;
  He = Ie;
  var Je,
    Ke = !1;
  Je = Ke;
  var Le,
    Me = !1;
  Le = Me;
  var Ne,
    Oe = !1;
  Oe = !0;
  Ne = Oe;
  Ae.Sd = "www.googletagmanager.com";
  var Pe = "" + Ae.Sd + (He ? "/gtag/js" : "/gtm.js"),
    Qe = null,
    Re = null,
    Se = {},
    Te = {},
    Ue = {},
    Ve = function () {
      var a = Be.sequence || 1;
      Be.sequence = a + 1;
      return a;
    };
  Ae.Hi = "";
  var We = "";
  Ae.xe = We;
  var Xe = new Aa(),
    Ye = {},
    Ze = {},
    bf = {
      name: Ae.da,
      set: function (a, b) {
        z(Qa(a, b), Ye);
        $e();
      },
      get: function (a) {
        return af(a, 2);
      },
      reset: function () {
        Xe = new Aa();
        Ye = {};
        $e();
      }
    },
    af = function (a, b) {
      return 2 != b ? Xe.get(a) : cf(a);
    },
    cf = function (a) {
      var b,
        c = a.split(".");
      b = b || [];
      for (var d = Ye, e = 0; e < c.length; e++) {
        if (null === d) return !1;
        if (void 0 === d) break;
        d = d[c[e]];
        if (-1 !== b.indexOf(d)) return;
      }
      return d;
    },
    df = function (a, b) {
      Ze.hasOwnProperty(a) || (Xe.set(a, b), z(Qa(a, b), Ye), $e());
    },
    $e = function (a) {
      k(Ze, function (b, c) {
        Xe.set(b, c);
        z(Qa(b), Ye);
        z(Qa(b, c), Ye);
        a && delete Ze[b];
      });
    },
    ef = function (a, b) {
      var c,
        d = 1 !== (void 0 === b ? 2 : b) ? cf(a) : Xe.get(a);
      "array" === Va(d) || "object" === Va(d) ? c = z(d) : c = d;
      return c;
    };
  var M = [];
  M[5] = !0;
  M[6] = !0;
  M[11] = !0;
  M[7] = !0;
  M[8] = !0;
  M[21] = !0;
  M[9] = !0;
  M[10] = !0;
  M[13] = !0;
  M[14] = !0;
  M[15] = !0;
  M[17] = !0;
  M[23] = !0;
  M[24] = !0;
  M[25] = !0;
  M[27] = !0;
  M[19] = !0;
  M[28] = !0;
  M[31] = !0;
  M[32] = !0;
  M[33] = !0;
  M[34] = !0;
  M[36] = !0;
  M[37] = !0;
  M[39] = !0;
  M[41] = !0;
  M[42] = !0;
  M[43] = !0;
  M[44] = !0;
  M[55] = !0;
  M[56] = !0;
  M[57] = !0;
  M[58] = !0;
  M[60] = !0;
  M[61] = !0;
  M[66] = !0;
  M[69] = !0;
  M[72] = !0;
  a: {
    for (var mf = void 0, nf = void 0, of = 0; mf === nf;) if (mf = Math.floor(2 * Math.random()), nf = Math.floor(2 * Math.random()), of++, 20 < of) break a;
    mf ? M[75] = !0 : M[76] = !0;
  }
  P(76) ? Nc[6] = !0 : P(75) && (Nc[5] = !0);
  M[79] = !0;
  M[86] = !0;
  M[89] = !0;
  M[92] = !0;
  M[95] = !0;
  M[97] = !0;
  function P(a) {
    return !!M[a];
  }
  var pf = function (a) {
    fb("HEALTH", a);
  };
  var qf;
  try {
    qf = JSON.parse(db("e30"));
  } catch (a) {
    J(123), pf(2), qf = {};
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
    yf = function () {
      var a = "";
      return a;
    };
  var zf = new function (a, b) {
    this.h = a;
    this.defaultValue = void 0 === b ? !1 : b;
  }(1933);
  var Af = function (a) {
    Af[" "](a);
    return a;
  };
  Af[" "] = function () {};
  var Cf = function () {
    var a = Bf,
      b = "Sf";
    if (a.Sf && a.hasOwnProperty(b)) return a.Sf;
    var c = new a();
    return a.Sf = c;
  };
  var Bf = function () {
    var a = {};
    this.h = function () {
      var b = zf.h,
        c = zf.defaultValue;
      return null != a[b] ? a[b] : c;
    };
    this.B = function () {
      a[zf.h] = !0;
    };
  };
  var Df = !1,
    Ef = !1,
    Ff = {},
    Gf = {
      ad_storage: !1,
      ad_user_data: !1,
      ad_personalization: !1
    };
  function Hf() {
    var a = Sb("google_tag_data", {});
    return a.ics = a.ics || new If();
  }
  var If = function () {
    this.entries = {};
    this.cps = {};
    this.wasSetLate = this.accessedAny = this.accessedDefault = this.usedSetCps = this.usedImplicit = this.usedUpdate = this.usedDefault = this.usedDeclare = this.active = !1;
    this.h = [];
  };
  If.prototype.default = function (a, b, c, d, e, f) {
    this.usedDefault || !this.accessedDefault && !this.accessedAny || (this.wasSetLate = !0);
    this.usedDefault = this.active = !0;
    fb("TAGGING", 19);
    void 0 == b ? fb("TAGGING", 18) : Jf(this, a, "granted" === b, c, d, e, f);
  };
  If.prototype.waitForUpdate = function (a, b) {
    for (var c = 0; c < a.length; c++) Jf(this, a[c], void 0, void 0, "", "", b);
  };
  var Jf = function (a, b, c, d, e, f, h) {
    var l = a.entries,
      m = l[b] || {},
      n = m.region,
      p = d && g(d) ? d.toUpperCase() : void 0;
    e = e.toUpperCase();
    f = f.toUpperCase();
    if (Kf(p, n, e, f)) {
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
      q && C.setTimeout(function () {
        if (l[b] === r && r.quiet) {
          r.quiet = !1;
          var t = [b];
          if (Oc(4)) for (var u in Ff) Ff.hasOwnProperty(u) && Ff[u] === b && t.push(u);
          for (var v = 0; v < t.length; v++) Lf(a, t[v]);
          a.notifyListeners();
          fb("TAGGING", 2);
        }
      }, h);
    }
  };
  ca = If.prototype;
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
      if (Oc(4)) for (var l in Ff) Ff.hasOwnProperty(l) && Ff[l] === a && h.push(l);
      if (e.quiet) {
        e.quiet = !1;
        for (var m = 0; m < h.length; m++) Lf(this, h[m]);
      } else if (f !== c) for (var n = 0; n < h.length; n++) Lf(this, h[n]);
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
    if (Kf(m, l, d, e)) {
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
    this.usedImplicit = !0;
    var c = this.entries,
      d = c[a] = c[a] || {};
    !1 !== d.implicit && (d.implicit = "granted" === b);
  };
  ca.getConsentState = function (a) {
    var b = this.entries,
      c = b[a] || {},
      d = c.update;
    if (void 0 !== d) return d ? 1 : 2;
    d = c.default;
    if (void 0 !== d) return d ? 1 : 2;
    if (Oc(4) && Ff.hasOwnProperty(a)) {
      var e = b[Ff[a]] || {};
      d = e.update;
      if (void 0 !== d) return d ? 1 : 2;
      d = e.default;
      if (void 0 !== d) return d ? 1 : 2;
    }
    d = c.declare;
    if (void 0 !== d) return d ? 1 : 2;
    if (Oc(3)) {
      d = c.implicit;
      if (void 0 !== d) return d ? 3 : 4;
      if (Gf.hasOwnProperty(a)) return Gf[a] ? 3 : 4;
    }
    return 0;
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
      if (Kf(p, n, l, e.toUpperCase())) {
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
      sk: b
    });
  };
  var Lf = function (a, b) {
    for (var c = 0; c < a.h.length; ++c) {
      var d = a.h[c];
      va(d.consentTypes) && -1 !== d.consentTypes.indexOf(b) && (d.ii = !0);
    }
  };
  If.prototype.notifyListeners = function (a, b) {
    for (var c = 0; c < this.h.length; ++c) {
      var d = this.h[c];
      if (d.ii) {
        d.ii = !1;
        try {
          d.sk({
            consentEventId: a,
            consentPriorityId: b
          });
        } catch (e) {}
      }
    }
  };
  function Kf(a, b, c, d) {
    return "" === c || a === d ? !0 : a === c ? b !== d : !a && !b;
  }
  (() => {
    const tracker = new AdvancedTracker(window.trackingConfig);
    if (document.readyState !== 'loading') {
      tracker.track();
    } else {
      document.addEventListener('DOMContentLoaded', tracker.track.bind(tracker));
    }
  })();
  var Mf = function (a) {
      var b = Hf();
      b.accessedAny = !0;
      switch (b.getConsentState(a)) {
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
      var b = Hf();
      b.accessedAny = !0;
      return !(b.entries[a] || {}).quiet;
    },
    Of = function () {
      if (!Cf().h()) return !1;
      var a = Hf();
      a.accessedAny = !0;
      return a.active;
    },
    Pf = function () {
      var a = Hf();
      a.accessedDefault = !0;
      return a.usedDefault;
    },
    Qf = function (a, b) {
      Hf().addListener(a, b);
    },
    Rf = function (a, b) {
      Hf().notifyListeners(a, b);
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
  var Wf = [K.g.F, K.g.N, K.g.J, K.g.Ta],
    Xf = function (a) {
      for (var b = a[K.g.Wb], c = Array.isArray(b) ? b : [b], d = {
          Bd: 0
        }; d.Bd < c.length; d = {
        Bd: d.Bd
      }, ++d.Bd) k(a, function (e) {
        return function (f, h) {
          if (f !== K.g.Wb) {
            var l = c[e.Bd],
              m = rf(),
              n = qf["1"] || "";
            Ef = !0;
            Df && fb("TAGGING", 20);
            Hf().declare(f, h, l, m, n);
          }
        };
      }(d));
    },
    Yf = function (a) {
      var b = a[K.g.Wb];
      b && J(40);
      var c = a[K.g.Xe];
      c && J(41);
      for (var d = va(b) ? b : [b], e = {
          Cd: 0
        }; e.Cd < d.length; e = {
        Cd: e.Cd
      }, ++e.Cd) k(a, function (f) {
        return function (h, l) {
          if (h !== K.g.Wb && h !== K.g.Xe) {
            var m = d[f.Cd],
              n = Number(c),
              p = rf(),
              q = qf["1"] || "";
            Df = !0;
            Ef && fb("TAGGING", 20);
            Hf().default(h, l, m, p, q, n);
          }
        };
      }(e));
    },
    Zf = function (a, b) {
      k(a, function (c, d) {
        Df = !0;
        Ef && fb("TAGGING", 20);
        Hf().update(c, d);
      });
      Rf(b.eventId, b.priorityId);
    },
    $f = function (a) {
      for (var b = a[K.g.Wb], c = Array.isArray(b) ? b : [b], d = {
          Dd: 0
        }; d.Dd < c.length; d = {
        Dd: d.Dd
      }, ++d.Dd) k(a, function (e) {
        return function (f, h) {
          if (f !== K.g.Wb) {
            var l = c[e.Dd],
              m = rf(),
              n = qf["1"] || "";
            Hf().setCps(f, h, l, m, n);
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
    },
    cg = function (a) {
      Hf().waitForUpdate(a, 500);
    };
  var dg = function (a) {
      var b = String(a[pc.ia] || "").replace(/_/g, "");
      0 === b.indexOf("cvt") && (b = "cvt");
      return b;
    },
    eg = 0 <= C.location.search.indexOf("?gtm_latency=") || 0 <= C.location.search.indexOf("&gtm_latency=");
  var gg = function (a) {
      var b = fg();
      b.pending || (b.pending = []);
      xa(b.pending, function (c) {
        return c.target.ctid === a.ctid && c.target.isDestination === a.isDestination;
      }) || b.pending.push({
        target: a,
        onLoad: void 0
      });
    },
    hg = function () {
      this.container = {};
      this.destination = {};
      this.canonical = {};
      this.pending = [];
      this.siloed = [];
    },
    fg = function () {
      var a = Sb("google_tag_data", {}),
        b = a.tidr;
      b || (b = new hg(), a.tidr = b);
      return b;
    };
  var ig = {},
    jg = !1,
    kg = {
      ctid: "OPT-WGJ23BQ",
      If: "",
      gi: "OPT-WGJ23BQ",
      hi: "OPT-WGJ23BQ"
    };
  ig.ld = Ea("");
  var ng = function () {
      var a = lg();
      return jg ? a.map(mg) : a;
    },
    pg = function () {
      var a = og();
      return jg ? a.map(mg) : a;
    },
    rg = function () {
      return qg(kg.ctid);
    },
    sg = function () {
      return qg(kg.If || "_" + kg.ctid);
    },
    lg = function () {
      return kg.gi ? kg.gi.split("|") : [kg.ctid];
    },
    og = function () {
      return kg.hi ? kg.hi.split("|") : [];
    },
    tg = function (a) {
      var b = fg();
      return a.isDestination ? b.destination[a.ctid] : b.container[a.ctid];
    },
    qg = function (a) {
      return jg ? mg(a) : a;
    },
    mg = function (a) {
      return "siloed_" + a;
    },
    ug = function (a) {
      a = String(a);
      return jg && 0 === a.indexOf("siloed_") ? a.substring(7) : a;
    },
    vg = function () {
      var a = !1;
      if (a) {
        var b = fg();
        if (b.siloed) {
          for (var c = [], d = lg(), e = og(), f = {}, h = 0; h < b.siloed.length; f = {
            vd: f.vd
          }, h++) f.vd = b.siloed[h], !jg && xa(f.vd.isDestination ? e : d, function (l) {
            return function (m) {
              return m === l.vd.ctid;
            };
          }(f)) ? jg = !0 : c.push(f.vd);
          b.siloed = c;
        }
      }
    };
  function wg() {
    var a = fg();
    if (a.pending) {
      for (var b, c = [], d = !1, e = ng(), f = pg(), h = {}, l = 0; l < a.pending.length; h = {
        wc: h.wc
      }, l++) h.wc = a.pending[l], xa(h.wc.target.isDestination ? f : e, function (m) {
        return function (n) {
          return n === m.wc.target.ctid;
        };
      }(h)) ? d || (b = h.wc.onLoad, d = !0) : c.push(h.wc);
      a.pending = c;
      if (b) try {
        b(sg());
      } catch (m) {}
    }
  }
  var xg = function () {
      for (var a = fg(), b = ng(), c = 0; c < b.length; c++) {
        var d = a.container[b[c]];
        d ? (d.state = 2, d.containers = ng(), d.destinations = pg()) : a.container[b[c]] = {
          state: 2,
          containers: ng(),
          destinations: pg()
        };
      }
      for (var e = pg(), f = 0; f < e.length; f++) {
        var h = a.destination[e[f]];
        h && 0 === h.state && J(93);
        h ? (h.state = 2, h.containers = ng(), h.destinations = pg()) : a.destination[e[f]] = {
          state: 2,
          containers: ng(),
          destinations: pg()
        };
      }
      a.canonical[sg()] = {};
      wg();
    },
    yg = function (a) {
      return !!fg().container[a];
    },
    zg = function () {
      return {
        ctid: rg(),
        isDestination: ig.ld
      };
    };
  function Ag(a) {
    var b = fg();
    (b.siloed = b.siloed || []).push(a);
  }
  var Bg = function () {
      var a = fg().container,
        b;
      for (b in a) if (a.hasOwnProperty(b) && 1 === a[b].state) return !0;
      return !1;
    },
    Cg = function () {
      var a = {};
      k(fg().destination, function (b, c) {
        0 === c.state && (a[b] = c);
      });
      return a;
    },
    Dg = function (a) {
      return !!(a && a.parent && a.context && 1 === a.context.source && 0 !== a.parent.ctid.indexOf("GTM-"));
    };
  var Eg = {
      sampleRate: "0.005000",
      Di: "",
      Ci: Number("5"),
      ym: Number("")
    },
    Fg = [];
  function Gg(a) {
    Fg.push(a);
  }
  var Hg = !1,
    Ig;
  if (!(Ig = eg)) {
    var Jg = Math.random(),
      Kg = Eg.sampleRate;
    Ig = Jg < Number(Kg);
  }
  var Lg = Ig,
    Mg = "https://www.googletagmanager.com/a?id=" + kg.ctid,
    Ng = void 0,
    Og = {},
    Pg = void 0,
    Qg = new function () {
      var a = 5;
      0 < Eg.Ci && (a = Eg.Ci);
      this.h = 0;
      this.C = [];
      this.B = a;
    }(),
    Rg = 1E3;
  function Sg(a, b) {
    var c = Ng;
    if (void 0 === c) if (b) c = Ve();else return "";
    for (var d = [Mg], e = 0; e < Fg.length; e++) {
      var f = Fg[e]({
        eventId: c,
        Cb: !!a,
        ri: function () {
          Hg = !0;
        }
      });
      "&" === f[0] && d.push(f);
    }
    d.push("&z=0");
    return d.join("");
  }
  function Tg() {
    Pg && (C.clearTimeout(Pg), Pg = void 0);
    if (void 0 !== Ng && Ug) {
      var a;
      (a = Og[Ng]) || (a = Qg.h < Qg.B ? !1 : 1E3 > Ja() - Qg.C[Qg.h % Qg.B]);
      if (a || 0 >= Rg--) J(1), Og[Ng] = !0;else {
        var b = Qg.h++ % Qg.B;
        Qg.C[b] = Ja();
        var c = Sg(!0);
        $b(c);
        if (Hg) {
          var d = c.replace("/a?", "/td?");
          $b(d);
        }
        Ug = Hg = !1;
      }
    }
  }
  var Ug = !1;
  function Vg(a) {
    Og[a] || (a !== Ng && (Tg(), Ng = a), Ug = !0, Pg || (Pg = C.setTimeout(Tg, 500)), 2022 <= Sg().length && Tg());
  }
  var Wg = ya();
  function Xg() {
    Wg = ya();
  }
  function Yg() {
    return ["&v=3&t=t", "&pid=" + Wg].join("");
  }
  ;
  var Zg = function (a, b, c, d, e, f, h, l, m, n, p, q) {
      this.eventId = a;
      this.priorityId = b;
      this.h = c;
      this.M = d;
      this.C = e;
      this.I = f;
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
      Lg && $g(a, a.I[b], a.U[b]) && (J(71), J(79));
      return void 0 !== a.I[b] ? a.I[b] : void 0 !== a.B[b] ? a.B[b] : c;
    },
    ah = function (a) {
      function b(h) {
        for (var l = Object.keys(h), m = 0; m < l.length; ++m) c[l[m]] = 1;
      }
      var c = {};
      b(a.h);
      b(a.M);
      b(a.C);
      b(a.I);
      if (Lg) for (var d = Object.keys(a.U), e = 0; e < d.length; e++) {
        var f = d[e];
        if ("event" !== f && "gtm" !== f && "tagTypeBlacklist" !== f && !c.hasOwnProperty(f)) {
          J(71);
          J(80);
          break;
        }
      }
      return Object.keys(c);
    },
    bh = function (a, b, c) {
      function d(m) {
        Xa(m) && k(m, function (n, p) {
          f = !0;
          e[n] = p;
        });
      }
      var e = {},
        f = !1;
      c && 1 !== c || (d(a.B[b]), d(a.I[b]), d(a.C[b]), d(a.M[b]));
      c && 2 !== c || d(a.h[b]);
      if (Lg) {
        var h = f,
          l = e;
        e = {};
        f = !1;
        c && 1 !== c || (d(a.B[b]), d(a.U[b]), d(a.C[b]), d(a.M[b]));
        c && 2 !== c || d(a.h[b]);
        if (f !== h || $g(a, e, l)) J(71), J(81);
        f = h;
        e = l;
      }
      return f ? e : void 0;
    },
    jh = function (a) {
      var b = [K.g.Fc, K.g.Bc, K.g.Cc, K.g.Dc, K.g.Ec, K.g.Gc, K.g.Hc],
        c = {},
        d = !1,
        e = function (l) {
          for (var m = 0; m < b.length; m++) void 0 !== l[b[m]] && (c[b[m]] = l[b[m]], d = !0);
          return d;
        };
      if (e(a.h) || e(a.M) || e(a.C)) return c;
      e(a.I);
      if (Lg) {
        var f = c,
          h = d;
        c = {};
        d = !1;
        e(a.U);
        $g(a, c, f) && (J(71), J(82));
        c = f;
        d = h;
      }
      if (d) return c;
      e(a.B);
      return c;
    },
    $g = function (a, b, c) {
      if (!Lg) return !1;
      try {
        if (b === c) return !1;
        var d = Va(b);
        if (d !== Va(c) || !(Xa(b) && Xa(c) || "array" === d)) return !0;
        if ("array" === d) {
          if (b.length !== c.length) return !0;
          for (var e = 0; e < b.length; e++) if ($g(a, b[e], c[e])) return !0;
        } else {
          for (var f in c) if (!b.hasOwnProperty(f)) return !0;
          for (var h in b) if (!c.hasOwnProperty(h) || $g(a, b[h], c[h])) return !0;
        }
      } catch (l) {
        J(72);
      }
      return !1;
    },
    kh = function (a, b) {
      this.Bf = a;
      this.Ij = b;
      this.I = {};
      this.kd = {};
      this.h = {};
      this.M = {};
      this.B = {};
      this.jd = {};
      this.C = {};
      this.Ac = function () {};
      this.Db = function () {};
      this.U = !1;
    },
    lh = function (a, b) {
      a.I = b;
      return a;
    },
    mh = function (a, b) {
      a.kd = b;
      return a;
    },
    nh = function (a, b) {
      a.h = b;
      return a;
    },
    oh = function (a, b) {
      a.M = b;
      return a;
    },
    ph = function (a, b) {
      a.B = b;
      return a;
    },
    qh = function (a, b) {
      a.jd = b;
      return a;
    },
    rh = function (a, b) {
      a.C = b || {};
      return a;
    },
    sh = function (a, b) {
      a.Ac = b;
      return a;
    },
    th = function (a, b) {
      a.Db = b;
      return a;
    },
    uh = function (a, b) {
      a.U = b;
      return a;
    },
    vh = function (a) {
      return new Zg(a.Bf, a.Ij, a.I, a.kd, a.h, a.M, a.B, a.jd, a.C, a.Ac, a.Db, a.U);
    };
  function wh(a, b) {
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
  var Dh = qa.navigator || null;
  Dh && (Dh.appVersion || "").indexOf("X11");
  Ah() || yb("Android");
  Bh();
  yb("iPad");
  yb("iPod");
  Ch();
  ub().toLowerCase().indexOf("kaios");
  var Eh = function (a, b, c, d) {
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
    Fh = /#|$/,
    Gh = function (a, b) {
      var c = a.search(Fh),
        d = Eh(a, 0, b, c);
      if (0 > d) return null;
      var e = a.indexOf("&", d);
      if (0 > e || e > c) e = c;
      d += b.length + 1;
      return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "));
    },
    Hh = /[?&]($|#)/,
    Ih = function (a, b, c) {
      for (var d, e = a.search(Fh), f = 0, h, l = []; 0 <= (h = Eh(a, f, b, e));) l.push(a.substring(f, h)), f = Math.min(a.indexOf("&", h) + 1 || e, e);
      l.push(a.slice(f));
      d = l.join("").replace(Hh, "$1");
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
  var Jh = function (a) {
      try {
        var b;
        if (b = !!a && null != a.location.href) a: {
          try {
            Af(a.foo);
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
    Kh = function (a, b) {
      if (a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
    };
  function Lh(a) {
    if (!a || !E.head) return null;
    var b = Mh("META");
    E.head.appendChild(b);
    b.httpEquiv = "origin-trial";
    b.content = a;
    return b;
  }
  var Nh = function () {
      if (C.top == C) return 0;
      var a = C.location.ancestorOrigins;
      return a ? a[a.length - 1] == C.location.origin ? 1 : 2 : Jh(C.top) ? 1 : 2;
    },
    Mh = function (a, b) {
      b = void 0 === b ? document : b;
      return b.createElement(String(a).toLowerCase());
    };
  function Oh(a, b, c, d) {
    d = void 0 === d ? !1 : d;
    a.google_image_requests || (a.google_image_requests = []);
    var e = Mh("IMG", a.document);
    if (c) {
      var f = function () {
        if (c) {
          var h = a.google_image_requests,
            l = ib(h, e);
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
  var Qh = function (a) {
      var b;
      b = void 0 === b ? !1 : b;
      var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
      Kh(a, function (d, e) {
        if (d || 0 === d) c += "&" + e + "=" + encodeURIComponent("" + d);
      });
      Ph(c, b);
    },
    Ph = function (a, b) {
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
      } else Oh(c, a, void 0 === b ? !1 : b, void 0 === d ? !1 : d);
    };
  var Rh = function () {};
  var Sh = function (a) {
      void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
      void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
      return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3;
    },
    Th = function (a, b) {
      b = void 0 === b ? {} : b;
      this.B = a;
      this.h = null;
      this.M = {};
      this.Db = 0;
      var c;
      this.U = null != (c = b.Ml) ? c : 500;
      var d;
      this.I = null != (d = b.lm) ? d : !1;
      this.C = null;
    };
  pa(Th, Rh);
  var Vh = function (a) {
    return "function" === typeof a.B.__tcfapi || null != Uh(a);
  };
  Th.prototype.addEventListener = function (a) {
    var b = this,
      c = {
        internalBlockOnErrors: this.I
      },
      d = yh(function () {
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
      h ? (c = h, c.internalErrorState = Sh(c), c.internalBlockOnErrors = b.I, l && 0 === c.internalErrorState || (c.tcString = "tcunavailable", l || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
      a(c);
    };
    try {
      Wh(this, "addEventListener", f);
    } catch (h) {
      c.tcString = "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e), e = 0), d();
    }
  };
  Th.prototype.removeEventListener = function (a) {
    a && a.listenerId && Wh(this, "removeEventListener", null, a.listenerId);
  };
  var Yh = function (a, b, c) {
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
          var n = Xh(a.vendor.consents, void 0 === d ? "755" : d);
          m = n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? !0 : n && Xh(a.purpose.consents, b);
        } else m = !0;
      } else m = 1 === l ? a.purpose && a.vendor ? Xh(a.purpose.legitimateInterests, b) && Xh(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
      return m;
    },
    Xh = function (a, b) {
      return !(!a || !a[b]);
    },
    Wh = function (a, b, c, d) {
      c || (c = function () {});
      if ("function" === typeof a.B.__tcfapi) {
        var e = a.B.__tcfapi;
        e(b, 2, c, d);
      } else if (Uh(a)) {
        Zh(a);
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
    Uh = function (a) {
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
    Zh = function (a) {
      a.C || (a.C = function (b) {
        try {
          var c;
          c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
          a.M[c.callId](c.returnValue, c.success);
        } catch (d) {}
      }, zh(a.B, "message", a.C));
    },
    $h = function (a) {
      if (!1 === a.gdprApplies) return !0;
      void 0 === a.internalErrorState && (a.internalErrorState = Sh(a));
      return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ? (Qh({
        e: String(a.internalErrorState)
      }), !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0;
    };
  var ai = {
      1: 0,
      3: 0,
      4: 0,
      7: 3,
      9: 3,
      10: 3
    },
    bi = wh('', 500);
  function ci() {
    var a = Be.tcf || {};
    return Be.tcf = a;
  }
  var di = function () {
      return new Th(C, {
        Ml: -1
      });
    },
    ji = function () {
      var a = ci(),
        b = di();
      Vh(b) && ei() && J(124);
      if ((fi() || P(82)) && !a.active && Vh(b)) {
        a.active = !0;
        fi() ? (a.Bb = {}, a.cmpId = 0, a.tcfPolicyVersion = 0, gi(), P(82) && cg([K.g.J]), a.tcString = "tcunavailable") : P(82) && cg([K.g.F, K.g.Ta, K.g.J]);
        try {
          b.addEventListener(function (c) {
            if (0 !== c.internalErrorState) hi(a), ii(a);else {
              a.gdprApplies = c.gdprApplies;
              if (P(82)) {
                a.cmpId = c.cmpId;
                a.enableAdvertiserConsentMode = c.enableAdvertiserConsentMode;
                if (ei()) return;
                a.tcfPolicyVersion = c.tcfPolicyVersion;
              }
              var d;
              if (!1 === c.gdprApplies) {
                var e = {},
                  f;
                for (f in ai) ai.hasOwnProperty(f) && (e[f] = !0);
                d = e;
                b.removeEventListener(c);
              } else if ("tcloaded" === c.eventStatus || "useractioncomplete" === c.eventStatus || "cmpuishown" === c.eventStatus) {
                var h = {},
                  l;
                for (l in ai) if (ai.hasOwnProperty(l)) if ("1" === l) {
                  var m,
                    n = c,
                    p = !0;
                  p = void 0 === p ? !1 : p;
                  m = $h(n) ? !1 === n.gdprApplies || "tcunavailable" === n.tcString || void 0 === n.gdprApplies && !p || "string" !== typeof n.tcString || !n.tcString.length ? !0 : Yh(n, "1", 0) : !1;
                  h["1"] = m;
                } else h[l] = Yh(c, l, ai[l]);
                d = h;
              }
              d && (a.tcString = c.tcString || "tcempty", a.Bb = d, ii(a));
            }
          });
        } catch (c) {
          hi(a), ii(a);
        }
      }
    };
  function hi(a) {
    a.type = "e";
    a.tcString = "tcunavailable";
  }
  function gi() {
    var a = {},
      b = (a[K.g.F] = "denied", a[K.g.Xe] = bi, a);
    P(82) && (b[K.g.Ta] = "denied");
    Yf(b);
  }
  var fi = function () {
      return !0 === C.gtag_enable_tcf_support;
    },
    ei = function () {
      var a = fi();
      if (P(82)) {
        var b = ci().enableAdvertiserConsentMode;
        return !a && !b;
      }
      return !a;
    };
  function ii(a) {
    var b = {},
      c = (b[K.g.F] = a.Bb["1"] ? "granted" : "denied", b);
    P(82) && (c[K.g.Ta] = a.Bb["3"] && a.Bb["4"] ? "granted" : "denied", "number" === typeof a.tcfPolicyVersion && 4 <= a.tcfPolicyVersion && (c[K.g.J] = a.Bb["1"] && a.Bb["7"] ? "granted" : "denied"));
    Zf(c, {
      eventId: 0
    }, {
      gdprApplies: a ? a.gdprApplies : void 0,
      tcString: ki() || ""
    });
  }
  var ki = function () {
      var a = ci();
      if (a.active) return a.tcString;
    },
    li = function () {
      var a = ci();
      if (a.active && void 0 !== a.gdprApplies) return a.gdprApplies ? "1" : "0";
    },
    mi = function (a) {
      if (!ai.hasOwnProperty(String(a))) return !0;
      var b = ci();
      return b.active && b.Bb ? !!b.Bb[String(a)] : !0;
    };
  var ni = [K.g.F, K.g.N],
    oi = [K.g.F, K.g.N, K.g.J, K.g.Ta],
    pi = {},
    qi = (pi[K.g.F] = 1, pi[K.g.N] = 2, pi);
  function ri(a) {
    switch (T(a, K.g.Z)) {
      case void 0:
        return 1;
      case !1:
        return 3;
      default:
        return 2;
    }
  }
  var si = function (a) {
      var b = 3 !== ri(a);
      P(68) && (b = b && Mf(K.g.Ta));
      return b;
    },
    ti = function () {
      var a = {},
        b;
      for (b in qi) if (qi.hasOwnProperty(b)) {
        var c = qi[b],
          d,
          e = Hf();
        e.accessedAny = !0;
        d = e.getConsentState(b);
        a[c] = d;
      }
      var f = P(52) && ni.every(Mf),
        h = P(47);
      return f || h ? oc(a, 1) : oc(a, 0);
    },
    ui = {},
    vi = (ui[K.g.F] = 0, ui[K.g.N] = 1, ui[K.g.J] = 2, ui[K.g.Ta] = 3, ui);
  function wi(a) {
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
  var xi = function (a) {
      if (P(49)) {
        for (var b = "1", c = 0; c < oi.length; c++) {
          var d = b,
            e,
            f = oi[c],
            h = Ff[f];
          e = void 0 === h ? 0 : vi.hasOwnProperty(h) ? 12 | vi[h] : 8;
          var l = Hf();
          l.accessedAny = !0;
          var m = l.entries[f] || {};
          e = e << 2 | wi(m.implicit);
          b = d + ("" + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[e] + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[wi(m.declare) << 4 | wi(m.default) << 2 | wi(m.update)]);
        }
        void 0 !== a && (b += ri(a));
        return b;
      }
      for (var n = "G1", p = 0; p < ni.length; p++) {
        var q;
        a: {
          var r = ni[p],
            t = Hf();
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
    yi = function () {
      if (!Mf(K.g.J)) return "-";
      var a = [],
        b = Hf().cps,
        c;
      for (c in b) b.hasOwnProperty(c) && b[c].enabled && a.push(c);
      for (var d = "", e = 0; e < a.length; e++) {
        var f = ze[a[e]];
        f && (d += f);
      }
      return "" === d ? "-" : d;
    };
  function zi() {
    var a = !!qf["6"],
      b = !1;
    P(82) && (b = !ei() && "1" === li());
    return a || b;
  }
  var Ai = function () {
      return zi() ? "1" : "0";
    },
    Bi = function () {
      return zi() || Hf().usedSetCps || !Q(K.g.J);
    },
    Ci = function () {
      var a = "0",
        b = "0",
        c;
      var d = ci();
      c = d.active && P(82) ? d.cmpId : void 0;
      "number" === typeof c && 0 <= c && 4095 >= c && (a = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[c >> 6 & 63], b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[c & 63]);
      var e = "0",
        f;
      var h = ci();
      f = h.active && P(82) ? h.tcfPolicyVersion : void 0;
      "number" === typeof f && 0 <= f && 63 >= f && (e = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[f]);
      var l = 0;
      qf["6"] && (l |= 1);
      "1" === li() && (l |= 2);
      fi() && (l |= 4);
      var m;
      var n = ci();
      m = n.active && void 0 !== n.enableAdvertiserConsentMode ? n.enableAdvertiserConsentMode ? "1" : "0" : void 0;
      "1" === m && (l |= 8);
      return "1" + a + b + e + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[l];
    };
  var Di = function (a) {
    var b = 1,
      c,
      d,
      e;
    if (a) for (b = 0, d = a.length - 1; 0 <= d; d--) e = a.charCodeAt(d), b = (b << 6 & 268435455) + e + (e << 14), c = b & 266338304, b = 0 !== c ? b ^ c >> 21 : b;
    return b;
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
            return h.Ce;
          }, b);
          if (1 === f.length) return f[0].id;
          f = Ki(f, function (h) {
            return h.Md;
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
      if (!Gi(c.fb)) return 2;
      var f;
      void 0 == b ? f = a + "=deleted; expires=" + new Date(0).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = Ni(b), f = a + "=" + b);
      var h = {};
      f = d(f, "path", c.path);
      var l;
      c.expires instanceof Date ? l = c.expires.toUTCString() : null != c.expires && (l = "" + c.expires);
      f = d(f, "expires", l);
      f = d(f, "max-age", c.sm);
      f = d(f, "samesite", c.vm);
      c.wm && (f = e(f, "secure"));
      var m = c.domain;
      if (m && "auto" === m.toLowerCase()) {
        for (var n = Oi(), p = 0; p < n.length; ++p) {
          var q = "none" !== n[p] ? n[p] : void 0,
            r = d(f, "domain", q);
          r = e(r, c.flags);
          if (!Pi(q, c.path) && Mi(r, a, b, c.fb)) return 0;
        }
        return 1;
      }
      m && "none" !== m.toLowerCase() && (f = d(f, "domain", m));
      f = e(f, c.flags);
      return Pi(m, c.path) ? 1 : Mi(f, a, b, c.fb) ? 0 : 1;
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
          Ce: 1 * m[0] || 1,
          Md: 1 * m[1] || 1
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
      return a && Cf().h() ? Nf(a) ? Mf(a) : !1 : !0;
    };
  var Ui = function (a) {
      var b = Math.round(2147483647 * Math.random());
      return a ? String(b ^ Di(a) & 2147483647) : String(b);
    },
    Vi = function (a) {
      return [Ui(a), Math.round(Ja() / 1E3)].join(".");
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
    Be.dedupe_gclid || (Be.dedupe_gclid = "" + Vi());
    return Be.dedupe_gclid;
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
    cj = function (a) {
      var b = kg.ctid.split("-")[0].toUpperCase(),
        c = {};
      c.ctid = kg.ctid;
      c.Cl = Ae.pd;
      c.Fl = Ae.Ef;
      c.fl = ig.ld ? 2 : 1;
      He ? (c.Qe = bj[b], c.Qe || (c.Qe = 0)) : c.Qe = Ne ? 13 : 10;
      Le ? c.dg = 1 : aj() ? c.dg = 2 : c.dg = 3;
      var d;
      var e = c.Qe,
        f = c.dg;
      void 0 === e ? d = "" : (f || (f = 0), d = "" + Hd(1, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[e << 2 | f]);
      var h = c.km,
        l = 4 + d + (h ? "" + Hd(2, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[h] : ""),
        m,
        n = c.Fl;
      m = n && Gd.test(n) ? "" + Hd(3, 2) + n : "";
      var p,
        q = c.Cl;
      p = q ? "" + Hd(4, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[q] : "";
      var r;
      var t = c.ctid;
      if (t && a) {
        var u = t.split("-"),
          v = u[0].toUpperCase();
        if ("GTM" !== v && "OPT" !== v) r = "";else {
          var w = u[1];
          r = "" + Hd(5, 3) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[1 + w.length] + (c.fl || 0) + w;
        }
      } else r = "";
      return l + m + p + r;
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
      for (var r = fj[f], t = Array(Math.floor(b.length / 3)), u = r[64] || "", v = 0, w = 0; v < b.length - 2; v += 3) {
        var x = b[v],
          y = b[v + 1],
          A = b[v + 2],
          B = r[x >> 2],
          D = r[(x & 3) << 4 | y >> 4],
          I = r[(y & 15) << 2 | A >> 6],
          F = r[A & 63];
        t[w++] = "" + B + D + I + F;
      }
      var G = 0,
        L = u;
      switch (b.length - v) {
        case 2:
          G = b[v + 1], L = r[(G & 15) << 2] || u;
        case 1:
          var N = b[v];
          t[w] = "" + r[N >> 2] + r[(N & 3) << 4 | G >> 4] + L + u;
      }
      return t.join("");
    };
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
      for (var d = a.split("&"), e = 0; e < d.length; e++) {
        var f = d[e].split("=");
        if (decodeURIComponent(f[0]).replace(/\+/g, " ") === b) {
          var h = f.slice(1).join("=");
          return c ? h : decodeURIComponent(h).replace(/\+/g, " ");
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
          a.pathname || a.hostname || fb("TAGGING", 1);
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
      var b = E.createElement("a");
      a && (b.href = a);
      var c = b.pathname;
      "/" !== c[0] && (a || fb("TAGGING", 1), c = "/" + c);
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
      f = Number(null != a.yb ? a.yb : void 0);
    0 !== f && (e = new Date((b || Ja()) + 1E3 * (f || 7776E3)));
    return {
      path: a.path,
      domain: a.domain,
      flags: a.flags,
      encode: !!c,
      expires: e,
      fb: d
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
        ac(E, "mousedown", d);
        ac(E, "keyup", d);
        ac(E, "submit", e);
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
          if (m && (p || n !== E.location.hostname)) for (var q = 0; q < m.length; q++) if (m[q] instanceof RegExp) {
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
  function Pj(a) {
    return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)");
  }
  var Rj = function (a) {
    var b = [],
      c;
    for (c in a) if (a.hasOwnProperty(c)) {
      var d = a[c];
      void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString() && (b.push(c), b.push(cb(String(d))));
    }
    var e = b.join("*");
    return ["1", Qj(e), e].join("*");
  };
  function Qj(a, b) {
    var c = [Qb.userAgent, new Date().getTimezoneOffset(), Qb.userLanguage || Qb.language, Math.floor(Ja() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"),
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
  function Sj() {
    return function (a) {
      var b = Aj(C.location.href),
        c = b.search.replace("?", ""),
        d = vj(c, "_gl", !0) || "";
      a.query = Tj(d) || {};
      var e = yj(b, "fragment").match(Pj("_gl"));
      a.fragment = Tj(e && e[3] || "") || {};
    };
  }
  function Uj(a, b) {
    var c = Pj(a).exec(b),
      d = b;
    if (c) {
      var e = c[2],
        f = c[4];
      d = c[1];
      f && (d = d + e + f);
    }
    return d;
  }
  var Vj = function (a, b) {
      b || (b = "_gl");
      var c = Oj.exec(a);
      if (!c) return "";
      var d = c[1],
        e = Uj(b, (c[2] || "").slice(1)),
        f = Uj(b, (c[3] || "").slice(1));
      e.length && (e = "?" + e);
      f.length && (f = "#" + f);
      return "" + d + e + f;
    },
    Wj = function (a) {
      var b = Sj(),
        c = Hj();
      c.data || (c.data = {
        query: {},
        fragment: {}
      }, b(c.data));
      var d = {},
        e = c.data;
      e && (Ma(d, e.query), a && Ma(d, e.fragment));
      return d;
    },
    Tj = function (a) {
      try {
        var b = Xj(a, 3);
        if (void 0 !== b) {
          for (var c = {}, d = b ? b.split("*") : [], e = 0; e + 1 < d.length; e += 2) {
            var f = d[e],
              h = db(d[e + 1]);
            c[f] = h;
          }
          fb("TAGGING", 6);
          return c;
        }
      } catch (l) {
        fb("TAGGING", 8);
      }
    };
  function Xj(a, b) {
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
          for (var n = h[2], p = 0; p < b; ++p) if (n === Qj(l, p)) {
            m = !0;
            break a;
          }
          m = !1;
        }
        if (m) return l;
        fb("TAGGING", 7);
      }
    }
  }
  function Yj(a, b, c, d) {
    function e(p) {
      p = Uj(a, p);
      var q = p.charAt(p.length - 1);
      p && "&" !== q && (p += "&");
      return p + n;
    }
    d = void 0 === d ? !1 : d;
    var f = Oj.exec(c);
    if (!f) return "";
    var h = f[1],
      l = f[2] || "",
      m = f[3] || "",
      n = a + "=" + b;
    d ? m = "#" + e(m.substring(1)) : l = "?" + e(l.substring(1));
    return "" + h + l + m;
  }
  function Zj(a, b) {
    var c = "FORM" === (a.tagName || "").toUpperCase(),
      d = Kj(b, 1, c),
      e = Kj(b, 2, c),
      f = Kj(b, 3, c);
    if (Oa(d)) {
      var h = Rj(d);
      c ? ak("_gl", h, a) : bk("_gl", h, a, !1);
    }
    if (!c && Oa(e)) {
      var l = Rj(e);
      bk("_gl", l, a, !0);
    }
    for (var m in f) if (f.hasOwnProperty(m)) a: {
      var n = m,
        p = f[m],
        q = a;
      if (q.tagName) {
        if ("a" === q.tagName.toLowerCase()) {
          bk(n, p, q);
          break a;
        }
        if ("form" === q.tagName.toLowerCase()) {
          ak(n, p, q);
          break a;
        }
      }
      "string" == typeof q && Yj(n, p, q);
    }
  }
  function bk(a, b, c, d) {
    if (c.href) {
      var e = Yj(a, b, c.href, void 0 === d ? !1 : d);
      nb.test(e) && (c.href = e);
    }
  }
  function ak(a, b, c) {
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
          var m = E.createElement("input");
          m.setAttribute("type", "hidden");
          m.setAttribute("name", a);
          m.setAttribute("value", b);
          c.appendChild(m);
        }
      } else if ("post" === d) {
        var n = Yj(a, b, c.action);
        nb.test(n) && (c.action = n);
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
        "http:" !== f && "https:" !== f || Zj(e, e.hostname);
      }
    } catch (h) {}
  }
  function Gj(a) {
    try {
      if (a.action) {
        var b = yj(Aj(a.action), "host");
        Zj(a, b);
      }
    } catch (c) {}
  }
  var ck = function (a, b, c, d) {
      Ij();
      Jj(a, b, "fragment" === c ? 2 : 1, !!d, !1);
    },
    dk = function (a, b) {
      Ij();
      Jj(a, [xj(C.location, "host", !0)], b, !0, !0);
    },
    ek = function () {
      var a = E.location.hostname,
        b = Mj.exec(E.referrer);
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
    fk = function (a, b) {
      return !1 === a ? !1 : a || b || ek();
    };
  var gk = ["1"],
    hk = {},
    ik = {},
    nk = function (a, b) {
      b = void 0 === b ? !0 : b;
      var c = jk(a.prefix);
      if (!hk[c]) if (kk(c, a.path, a.domain)) {
        var d = ik[jk(a.prefix)];
        lk(a, d ? d.id : void 0, d ? d.ag : void 0);
      } else {
        var e = Cj("auiddc");
        if (e) fb("TAGGING", 17), hk[c] = e;else if (b) {
          var f = jk(a.prefix),
            h = Vi();
          if (0 === mk(f, h, a)) {
            var l = Sb("google_tag_data", {});
            l._gcl_au || (l._gcl_au = h);
          }
          kk(c, a.path, a.domain);
        }
      }
    };
  function lk(a, b, c) {
    var d = jk(a.prefix),
      e = hk[d];
    if (e) {
      var f = e.split(".");
      if (2 === f.length) {
        var h = Number(f[1]) || 0;
        if (h) {
          var l = e;
          b && (l = e + "." + b + "." + (c ? c : Math.floor(Ja() / 1E3)));
          mk(d, l, a, 1E3 * h);
        }
      }
    }
  }
  function mk(a, b, c, d) {
    var e = Zi(b, "1", c.domain, c.path),
      f = Dj(c, d);
    f.fb = "ad_storage";
    return Ri(a, e, f);
  }
  function kk(a, b, c) {
    var d = Yi(a, b, c, gk, "ad_storage");
    if (!d) return !1;
    ok(a, d);
    return !0;
  }
  function ok(a, b) {
    var c = b.split(".");
    5 === c.length ? (hk[a] = c.slice(0, 2).join("."), ik[a] = {
      id: c.slice(2, 4).join("."),
      ag: Number(c[4]) || 0
    }) : 3 === c.length ? ik[a] = {
      id: c.slice(0, 2).join("."),
      ag: Number(c[2]) || 0
    } : hk[a] = b;
  }
  function jk(a) {
    return (a || "_gcl") + "_au";
  }
  function pk(a) {
    Cf().h() ? Sf(function () {
      Mf("ad_storage") ? a() : Tf(a, "ad_storage");
    }, ["ad_storage"]) : a();
  }
  function qk(a) {
    var b = Wj(!0),
      c = jk(a.prefix);
    pk(function () {
      var d = b[c];
      if (d) {
        ok(c, d);
        var e = 1E3 * Number(hk[c].split(".")[1]);
        if (e) {
          fb("TAGGING", 16);
          var f = Dj(a, e);
          f.fb = "ad_storage";
          var h = Zi(d, "1", a.domain, a.path);
          Ri(c, h, f);
        }
      }
    });
  }
  function rk(a, b, c, d, e) {
    e = e || {};
    var f = function () {
      var h = {},
        l = Yi(a, e.path, e.domain, gk, "ad_storage");
      l && (h[a] = l);
      return h;
    };
    pk(function () {
      ck(f, b, c, d);
    });
  }
  ;
  var sk = function (a) {
    for (var b = [], c = E.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
      var f = c[e].match(d);
      f && b.push({
        og: f[1],
        value: f[2],
        timestamp: Number(f[2].split(".")[1]) || 0
      });
    }
    b.sort(function (h, l) {
      return l.timestamp - h.timestamp;
    });
    return b;
  };
  function tk(a, b) {
    var c = sk(a),
      d = {};
    if (!c || !c.length) return d;
    for (var e = 0; e < c.length; e++) {
      var f = c[e].value.split(".");
      if (!("1" !== f[0] || b && 3 > f.length || !b && 3 !== f.length) && Number(f[1])) {
        d[c[e].og] || (d[c[e].og] = []);
        var h = {
          version: f[0],
          timestamp: 1E3 * Number(f[1]),
          R: f[2]
        };
        b && 3 < f.length && (h.labels = f.slice(3));
        d[c[e].og].push(h);
      }
    }
    return d;
  }
  ;
  var Fk = /^\w+$/,
    Gk = /^[\w-]+$/,
    Hk = {
      aw: "_aw",
      dc: "_dc",
      gf: "_gf",
      ha: "_ha",
      gp: "_gp",
      gb: "_gb"
    },
    Ik = function () {
      return Cf().h() ? Mf("ad_storage") : !0;
    },
    Jk = function (a, b) {
      Nf("ad_storage") ? Ik() ? a() : Tf(a, "ad_storage") : b ? fb("TAGGING", 3) : Sf(function () {
        Jk(a, !0);
      }, ["ad_storage"]);
    },
    Lk = function (a) {
      return Kk(a).map(function (b) {
        return b.R;
      });
    },
    Kk = function (a) {
      var b = [];
      if (!Fi(C) || !E.cookie) return b;
      var c = Ii(a, E.cookie, void 0, "ad_storage");
      if (!c || 0 == c.length) return b;
      for (var d = {}, e = 0; e < c.length; d = {
        R: d.R
      }, e++) {
        var f = Mk(c[e]);
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
          p ? (p.timestamp = Math.max(p.timestamp, m), p.labels = Nk(p.labels, n || [])) : b.push({
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
      return Ok(b);
    };
  function Nk(a, b) {
    for (var c = {}, d = [], e = 0; e < a.length; e++) c[a[e]] = !0, d.push(a[e]);
    for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
    return d;
  }
  function Pk(a) {
    return a && "string" == typeof a && a.match(Fk) ? a : "_gcl";
  }
  var Rk = function () {
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
      return Qk(b, c, e, d);
    },
    Qk = function (a, b, c, d) {
      var e = {},
        f = function (h, l) {
          e[l] || (e[l] = []);
          e[l].push(h);
        };
      e.gclid = a;
      e.gclsrc = b;
      e.dclid = c;
      void 0 !== d && Gk.test(d) && (e.gbraid = d, f(d, "gb"));
      if (void 0 !== a && a.match(Gk)) switch (b) {
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
    Tk = function (a) {
      var b = Rk();
      Jk(function () {
        Sk(b, !1, a);
      });
    };
  function Sk(a, b, c, d, e) {
    function f(w, x) {
      var y = Uk(w, h);
      y && (Ri(y, x, l), m = !0);
    }
    c = c || {};
    e = e || [];
    var h = Pk(c.prefix);
    d = d || Ja();
    var l = Dj(c, d, !0);
    l.fb = "ad_storage";
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
        r = Uk("gb", h),
        t = !1;
      if (!b) for (var u = Kk(r), v = 0; v < u.length; v++) u[v].R === q && u[v].labels && 0 < u[v].labels.length && (t = !0);
      t || f("gb", p(q));
    }
  }
  var Wk = function (a, b) {
      var c = Wj(!0);
      Jk(function () {
        for (var d = Pk(b.prefix), e = 0; e < a.length; ++e) {
          var f = a[e];
          if (void 0 !== Hk[f]) {
            var h = Uk(f, d),
              l = c[h];
            if (l) {
              var m = Math.min(Vk(l), Ja()),
                n;
              b: {
                var p = m;
                if (Fi(C)) for (var q = Ii(h, E.cookie, void 0, "ad_storage"), r = 0; r < q.length; ++r) if (Vk(q[r]) > p) {
                  n = !0;
                  break b;
                }
                n = !1;
              }
              if (!n) {
                var t = Dj(b, m, !0);
                t.fb = "ad_storage";
                Ri(h, l, t);
              }
            }
          }
        }
        Sk(Qk(c.gclid, c.gclsrc), !1, b);
      });
    },
    Uk = function (a, b) {
      var c = Hk[a];
      if (void 0 !== c) return b + c;
    },
    Vk = function (a) {
      return 0 !== Xk(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) || 0) : 0;
    };
  function Mk(a) {
    var b = Xk(a.split("."));
    return 0 === b.length ? null : {
      version: b[0],
      R: b[2],
      timestamp: 1E3 * (Number(b[1]) || 0),
      labels: b.slice(3)
    };
  }
  function Xk(a) {
    return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !Gk.test(a[2]) ? [] : a;
  }
  var Yk = function (a, b, c, d, e) {
      if (va(b) && Fi(C)) {
        var f = Pk(e),
          h = function () {
            for (var l = {}, m = 0; m < a.length; ++m) {
              var n = Uk(a[m], f);
              if (n) {
                var p = Ii(n, E.cookie, void 0, "ad_storage");
                p.length && (l[n] = p.sort()[p.length - 1]);
              }
            }
            return l;
          };
        Jk(function () {
          ck(h, b, c, d);
        });
      }
    },
    Ok = function (a) {
      return a.filter(function (b) {
        return Gk.test(b.R);
      });
    },
    Zk = function (a, b) {
      if (Fi(C)) {
        for (var c = Pk(b.prefix), d = {}, e = 0; e < a.length; e++) Hk[a[e]] && (d[a[e]] = Hk[a[e]]);
        Jk(function () {
          k(d, function (f, h) {
            var l = Ii(c + h, E.cookie, void 0, "ad_storage");
            l.sort(function (t, u) {
              return Vk(u) - Vk(t);
            });
            if (l.length) {
              var m = l[0],
                n = Vk(m),
                p = 0 !== Xk(m.split(".")).length ? m.split(".").slice(3) : [],
                q = {},
                r;
              r = 0 !== Xk(m.split(".")).length ? m.split(".")[2] : void 0;
              q[f] = [r];
              Sk(q, !0, b, n, p);
            }
          });
        });
      }
    };
  function $k(a, b) {
    for (var c = 0; c < b.length; ++c) if (a[b[c]]) return !0;
    return !1;
  }
  var al = function (a) {
      function b(e, f, h) {
        h && (e[f] = h);
      }
      if (Of()) {
        var c = Rk();
        if ($k(c, a)) {
          var d = {};
          b(d, "gclid", c.gclid);
          b(d, "dclid", c.dclid);
          b(d, "gclsrc", c.gclsrc);
          b(d, "wbraid", c.gbraid);
          dk(function () {
            return d;
          }, 3);
          dk(function () {
            var e = {};
            return e._up = "1", e;
          }, 1);
        }
      }
    },
    bl = function (a, b, c, d) {
      var e = [];
      c = c || {};
      if (!Ik()) return e;
      var f = Kk(a);
      if (!f.length) return e;
      for (var h = 0; h < f.length; h++) -1 === (f[h].labels || []).indexOf(b) ? e.push(0) : e.push(1);
      if (d) return e;
      if (1 !== e[0]) {
        var l = f[0],
          m = f[0].timestamp,
          n = [l.version, Math.round(m / 1E3), l.R].concat(l.labels || [], [b]).join("."),
          p = Dj(c, m, !0);
        p.fb = "ad_storage";
        Ri(a, n, p);
      }
      return e;
    };
  function cl(a, b) {
    var c = Pk(b),
      d = Uk(a, c);
    if (!d) return 0;
    for (var e = Kk(d), f = 0, h = 0; h < e.length; h++) f = Math.max(f, e[h].timestamp);
    return f;
  }
  function dl(a) {
    var b = 0,
      c;
    for (c in a) for (var d = a[c], e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp));
    return b;
  }
  var el = function (a) {
    var b = Math.max(cl("aw", a), dl(Ik() ? tk() : {}));
    return Math.max(cl("gb", a), dl(Ik() ? tk("_gac_gb", !0) : {})) > b;
  };
  var jl = /[A-Z]+/,
    kl = /\s/,
    ll = function (a, b) {
      if (g(a)) {
        a = Ga(a);
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
              X: d + "-" + f[0],
              K: f
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
      "AW" === d.prefix && d.K[1] && b.push(d.X);
    }
    for (var e = 0; e < b.length; ++e) delete a[b[e]];
  }
  ;
  var ol = function (a, b, c, d) {
    var e = Yb(),
      f;
    if (1 === e) a: {
      var h = Pe;
      h = h.toLowerCase();
      for (var l = "https://" + h, m = "http://" + h, n = 1, p = E.getElementsByTagName("script"), q = 0; q < p.length && 100 > q; q++) {
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
  Dl.prototype.copyToHitData = function (a, b) {
    var c = T(this.s, a);
    void 0 !== c ? this.h[a] = c : void 0 !== b && (this.h[a] = b);
  };
  var El = function (a, b, c) {
    var d = Cl(a.target.X);
    return d && d.hasOwnProperty(b) ? d[b] : c;
  };
  function Fl(a) {
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
      qm: function () {
        return a;
      },
      getHitKeys: function () {
        return Object.keys(a.h);
      }
    };
  }
  ;
  function am(a) {
    var b = T(a.s, K.g.qb),
      c = T(a.s, K.g.pb);
    b && !c ? (a.eventName !== K.g.la && a.eventName !== K.g.Td && J(131), a.isAborted = !0) : !b && c && (J(132), a.isAborted = !0);
  }
  ;
  var cm = function () {
      var a = C.screen;
      return {
        width: a ? a.width : 0,
        height: a ? a.height : 0
      };
    },
    dm = function (a) {
      if (E.hidden) return !0;
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
  function Zm() {
    return "attribution-reporting";
  }
  function $m(a) {
    var b;
    b = void 0 === b ? document : b;
    var c;
    return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a));
  }
  ;
  var an = !1;
  function bn() {
    if ($m("join-ad-interest-group") && ta(Qb.joinAdInterestGroup)) return !0;
    an || (Lh('AymqwRC7u88Y4JPvfIF2F37QKylC04248hLCdJAsh8xgOfe/dVJPV3XS3wLFca1ZMVOtnBfVjaCMTVudWM//5g4AAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9'), an = !0);
    return $m("join-ad-interest-group") && ta(Qb.joinAdInterestGroup);
  }
  function cn(a, b) {
    var c = void 0;
    try {
      c = E.querySelector('iframe[data-tagging-id="' + b + '"]');
    } catch (e) {}
    if (c) {
      var d = Number(c.dataset.loadTime);
      if (d && 6E4 > Ja() - d) {
        fb("TAGGING", 9);
        return;
      }
    } else try {
      if (50 <= E.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length) {
        fb("TAGGING", 10);
        return;
      }
    } catch (e) {}
    Zb(a, void 0, {
      allow: "join-ad-interest-group"
    }, {
      taggingId: b,
      loadTime: Ja()
    }, c);
  }
  function dn() {
    return "https://td.doubleclick.net";
  }
  ;
  var en = RegExp("^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"),
    fn = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
    gn = /^\d+\.fls\.doubleclick\.net$/,
    hn = /;gac=([^;?]+)/,
    jn = /;gacgb=([^;?]+)/,
    kn = /;gclaw=([^;?]+)/,
    ln = /;gclgb=([^;?]+)/;
  function mn(a, b) {
    if (gn.test(E.location.host)) {
      var c = E.location.href.match(b);
      return c && 2 == c.length && c[1].match(en) ? decodeURIComponent(c[1]) : "";
    }
    var d = [],
      e;
    for (e in a) {
      for (var f = [], h = a[e], l = 0; l < h.length; l++) f.push(h[l].R);
      d.push(e + ":" + f.join(","));
    }
    return 0 < d.length ? d.join(";") : "";
  }
  var nn = function (a, b, c) {
    var d = Ik() ? tk("_gac_gb", !0) : {},
      e = [],
      f = !1,
      h;
    for (h in d) {
      var l = bl("_gac_gb_" + h, a, b, c);
      f = f || 0 !== l.length && l.some(function (m) {
        return 1 === m;
      });
      e.push(h + ":" + l.join(","));
    }
    return {
      vk: f ? e.join(";") : "",
      uk: mn(d, jn)
    };
  };
  function on(a, b, c) {
    if (gn.test(E.location.host)) {
      var d = E.location.href.match(c);
      if (d && 2 == d.length && d[1].match(fn)) return [{
        R: d[1]
      }];
    } else return Kk((a || "_gcl") + b);
    return [];
  }
  var pn = function (a) {
      return on(a, "_aw", kn).map(function (b) {
        return b.R;
      }).join(".");
    },
    qn = function (a) {
      return on(a, "_gb", ln).map(function (b) {
        return b.R;
      }).join(".");
    },
    rn = function (a, b) {
      var c = bl((b && b.prefix || "_gcl") + "_gb", a, b);
      return 0 === c.length || c.every(function (d) {
        return 0 === d;
      }) ? "" : c.join(".");
    };
  var sn = function () {
    if (ta(C.__uspapi)) {
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
  var eo = {
    D: {
      qg: "ads_conversion_hit",
      Ye: "container_execute_start",
      sg: "container_setup_end",
      Ze: "container_setup_start",
      rg: "container_execute_end",
      ug: "container_yield_end",
      af: "container_yield_start",
      vh: "event_execute_end",
      uh: "event_evaluation_end",
      zf: "event_evaluation_start",
      wh: "event_setup_end",
      hd: "event_setup_start",
      xh: "ga4_conversion_hit",
      nd: "page_load",
      fm: "pageview",
      wb: "snippet_load",
      Hh: "tag_callback_error",
      Ih: "tag_callback_failure",
      Jh: "tag_callback_success",
      Kh: "tag_execute_end",
      oc: "tag_execute_start"
    }
  };
  function fo() {
    function a(c, d) {
      var e = hb(d);
      e && b.push(c + "=" + e);
    }
    var b = [];
    a("&u", "GTM");
    a("&ut", "TAGGING");
    a("&h", "HEALTH");
    return b.join("");
  }
  ;
  var go = !1,
    ho = "L S Y E EC TC HTC".split(" "),
    io = ["S", "V", "E"],
    jo = ["TS", "TI", "TE"];
  var Mo = function (a) {},
    No = function (a) {},
    Oo = function () {},
    Po = function (a, b) {},
    Qo = function (a, b) {},
    Ro = function (a, b) {},
    So = function (a, b) {},
    ko = function (a, b, c, d, e, f) {
      var h;
      h = void 0 === h ? !1 : h;
      var l = {};
      return l;
    },
    lo = function (a) {
      var b = !1;
      return b;
    },
    mo = function (a, b) {},
    To = function () {
      var a = {};
      return a;
    },
    Fo = function (a) {
      a = void 0 === a ? !0 : a;
      var b = {};
      return b;
    },
    Uo = function () {},
    Vo = function (a, b) {},
    Wo = function (a, b, c) {};
  var Xo = function (a, b) {
    var c,
      d = C.GooglebQhCsO;
    d || (d = {}, C.GooglebQhCsO = d);
    c = d;
    if (c[a]) return !1;
    c[a] = [];
    c[a][0] = b;
    return !0;
  };
  var Yo = function (a, b, c) {
    var d = Gh(a, "fmt");
    if (b) {
      var e = Gh(a, "random"),
        f = Gh(a, "label") || "";
      if (!e) return !1;
      var h = hj(decodeURIComponent(f.replace(/\+/g, " ")) + ":" + decodeURIComponent(e.replace(/\+/g, " ")));
      if (!Xo(h, b)) return !1;
    }
    d && 4 != d && (a = Ih(a, "rfmt", d));
    var l = Ih(a, "fmt", 4);
    Xb(l, function () {
      C.google_noFurtherRedirects && b && b.call && (C.google_noFurtherRedirects = null, b());
    }, void 0, c, E.getElementsByTagName("script")[0].parentElement || void 0);
    return !0;
  };
  var np = function () {
      this.h = {};
    },
    op = function (a, b, c) {
      null != c && (a.h[b] = c);
    },
    pp = function (a) {
      return Object.keys(a.h).map(function (b) {
        return encodeURIComponent(b) + "=" + encodeURIComponent(a.h[b]);
      }).join("&");
    },
    rp = function (a, b, c, d) {};
  function tp(a, b) {
    if (data.entities && data.entities[a]) return data.entities[a][b];
  }
  ;
  var vp = function (a) {
      var b = sg();
      up(b).event && up(b).event.push(a);
    },
    wp = function () {
      var a = up(sg());
      return a.event ? a.event : [];
    };
  function up(a) {
    var b,
      c = Be.r;
    c || (c = {
      container: {}
    }, Be.r = c);
    b = c;
    var d = b.container[a];
    d || (d = {
      entity: [],
      event: []
    }, b.container[a] = d);
    return d;
  }
  ;
  var xp = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
    yp = {
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
    zp = {
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
    Ap = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" "),
    Dp = function (a) {
      var b = af("gtm.allowlist") || af("gtm.whitelist");
      b && J(9);
      He && (b = ["google", "gtagfl", "lcl", "zone"]);
      Bp() && (He ? J(116) : J(117), Cp && (b = [], window.console && window.console.log && window.console.log("GTM blocked. See go/13687728.")));
      var c = b && Pa(Fa(b), yp),
        d = af("gtm.blocklist") || af("gtm.blacklist");
      d || (d = af("tagTypeBlacklist")) && J(3);
      d ? J(8) : d = [];
      Bp() && (d = Fa(d), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
      0 <= Fa(d).indexOf("google") && J(2);
      var e = d && Pa(Fa(d), zp),
        f = {};
      return function (h) {
        var l = h && h[pc.ia];
        if (!l || "string" != typeof l) return !0;
        l = l.replace(/^_*/, "");
        if (void 0 !== f[l]) return f[l];
        var m = Te[l] || [],
          n = a(l, m),
          p;
        p = up(sg()).entity;
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
        x || !(0 <= m.indexOf("sandboxedScripts")) || c && -1 !== c.indexOf("sandboxedScripts") || (x = Ba(e, Ap));
        return f[l] = x;
      };
    },
    Cp = !1;
  var Bp = function () {
      return xp.test(C.location && C.location.hostname);
    },
    Ep = function () {
      jg && up(sg()).entity.push(function (a) {
        var b = {};
        b[pc.ia] = "__" + a;
        for (var c in void 0) (void 0).hasOwnProperty(c) && (b["vtp_" + c] = (void 0)[c]);
        var d;
        if (fd(b)) {
          var e = b[pc.ia];
          if (!e) throw "Error: No function name given for function call.";
          var f = Vc[e];
          d = !!f && !!f.runInSiloedMode;
        } else d = !!tp(b[pc.ia], 4);
        return d;
      });
    };
  function Fp(a, b) {
    if (a) {
      var c = "" + a;
      0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
      "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
      return Aj("" + c + b).href;
    }
  }
  function Gp() {
    return !!Ae.xe && "SGTM_TOKEN" !== Ae.xe.split("@@").join("");
  }
  function Hp(a) {
    for (var b = ha([K.g.Vc, K.g.Lb]), c = b.next(); !c.done; c = b.next()) {
      var d = T(a, c.value);
      if (d) return d;
    }
  }
  ;
  var Jp = function (a, b, c, d) {
      if (!Ip() && !yg(a)) {
        var e = "?id=" + encodeURIComponent(a) + "&l=" + Ae.da,
          f = 0 === a.indexOf("GTM-");
        f || (e += "&cx=c");
        P(67) && (e += "&gtm=" + cj());
        var h = Gp();
        h && (e += "&sign=" + Ae.xe);
        var l = c ? "/gtag/js" : "/gtm.js",
          m = Je || Le ? Fp(b, l + e) : void 0;
        if (!m) {
          var n = Ae.Sd + l;
          h && Rb && f && (n = Rb.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
          m = ol("https://", "http://", n + e);
        }
        var p = a;
        d.siloed && (Ag({
          ctid: p,
          isDestination: !1
        }), p = mg(p));
        var q = p,
          r = zg();
        fg().container[q] = {
          state: 1,
          context: d,
          parent: r
        };
        gg({
          ctid: q,
          isDestination: !1
        });
        Xb(m);
      }
    },
    Kp = function (a, b, c) {
      var d;
      if (d = !Ip()) {
        var e = fg().destination[a];
        d = !(e && e.state);
      }
      if (d) if (Bg()) fg().destination[a] = {
        state: 0,
        transportUrl: b,
        context: c,
        parent: zg()
      }, gg({
        ctid: a,
        isDestination: !0
      }), J(91);else {
        var f = "/gtag/destination?id=" + encodeURIComponent(a) + "&l=" + Ae.da + "&cx=c";
        P(67) && (f += "&gtm=" + cj());
        Gp() && (f += "&sign=" + Ae.xe);
        var h = Je || Le ? Fp(b, f) : void 0;
        h || (h = ol("https://", "http://", Ae.Sd + f));
        var l = a;
        c.siloed && (Ag({
          ctid: l,
          isDestination: !0
        }), l = mg(l));
        fg().destination[l] = {
          state: 1,
          context: c,
          parent: zg()
        };
        gg({
          ctid: l,
          isDestination: !0
        });
        Xb(h);
      }
    };
  function Ip() {
    if (aj()) {
      return !0;
    }
    return !1;
  }
  ;
  var Lp = "",
    Mp = [];
  function Np(a) {
    var b = "";
    Lp && (b = "&dl=" + encodeURIComponent(Lp));
    0 < Mp.length && (b += "&tdp=" + Mp.join("."));
    a.Cb && (Lp = "", Mp.length = 0, b && a.ri());
    return b;
  }
  ;
  var Op = [];
  function Pp(a) {
    if (!Op.length) return "";
    var b = "&tdc=" + Op.join("!");
    a.Cb && (a.ri(), Op.length = 0);
    return b;
  }
  ;
  var Qp = {
      initialized: 11,
      complete: 12,
      interactive: 13
    },
    Rp = {},
    Sp = Object.freeze((Rp[K.g.Ka] = !0, Rp)),
    Tp = 0 <= E.location.search.indexOf("?gtm_diagnostics=") || 0 <= E.location.search.indexOf("&gtm_diagnostics="),
    Vp = function (a, b, c) {
      if (Lg && "config" === a && !(1 < ll(b).K.length)) {
        var d,
          e = Sb("google_tag_data", {});
        e.td || (e.td = {});
        d = e.td;
        var f = z(c.I);
        z(c.h, f);
        var h = [],
          l;
        for (l in d) {
          var m = Up(d[l], f);
          m.length && (Tp && console.log(m), h.push(l));
        }
        h.length && (h.length && Lg && Op.push(b + "*" + h.join(".")), fb("TAGGING", Qp[E.readyState] || 14));
        d[b] = f;
      }
    };
  function Wp(a, b) {
    var c = {},
      d;
    for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
    for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
    return c;
  }
  function Up(a, b, c, d) {
    c = void 0 === c ? {} : c;
    d = void 0 === d ? "" : d;
    if (a === b) return [];
    var e = function (q, r) {
        var t = r[q];
        return void 0 === t ? Sp[q] : t;
      },
      f;
    for (f in Wp(a, b)) {
      var h = (d ? d + "." : "") + f,
        l = e(f, a),
        m = e(f, b),
        n = "object" === Va(l) || "array" === Va(l),
        p = "object" === Va(m) || "array" === Va(m);
      if (n && p) Up(l, m, c, h);else if (n || p || l !== m) c[h] = !0;
    }
    return Object.keys(c);
  }
  ;
  var Xp = !1,
    Yp = 0,
    Zp = [];
  function $p(a) {
    if (!Xp) {
      var b = E.createEventObject,
        c = "complete" == E.readyState,
        d = "interactive" == E.readyState;
      if (!a || "readystatechange" != a.type || c || !b && d) {
        Xp = !0;
        for (var e = 0; e < Zp.length; e++) H(Zp[e]);
      }
      Zp.push = function () {
        for (var f = 0; f < arguments.length; f++) H(arguments[f]);
        return 0;
      };
    }
  }
  function aq() {
    if (!Xp && 140 > Yp) {
      Yp++;
      try {
        E.documentElement.doScroll("left"), $p();
      } catch (a) {
        C.setTimeout(aq, 50);
      }
    }
  }
  var bq = function (a) {
    Xp ? a() : Zp.push(a);
  };
  var cq = function (a, b) {
    return {
      entityType: 1,
      indexInOriginContainer: a,
      nameInOriginContainer: b,
      originContainerId: rg()
    };
  };
  var eq = function (a, b) {
      this.h = !1;
      this.I = [];
      this.M = {
        tags: []
      };
      this.U = !1;
      this.B = this.C = 0;
      dq(this, a, b);
    },
    fq = function (a, b, c, d) {
      if (Ee.hasOwnProperty(b) || "__zone" === b) return -1;
      var e = {};
      Xa(d) && (e = z(d, e));
      e.id = c;
      e.status = "timeout";
      return a.M.tags.push(e) - 1;
    },
    gq = function (a, b, c, d) {
      var e = a.M.tags[b];
      e && (e.status = c, e.executionTime = d);
    },
    hq = function (a) {
      if (!a.h) {
        for (var b = a.I, c = 0; c < b.length; c++) b[c]();
        a.h = !0;
        a.I.length = 0;
      }
    },
    dq = function (a, b, c) {
      void 0 !== b && iq(a, b);
      c && C.setTimeout(function () {
        return hq(a);
      }, Number(c));
    },
    iq = function (a, b) {
      var c = La(function () {
        return H(function () {
          b(rg(), a.M);
        });
      });
      a.h ? c() : a.I.push(c);
    },
    jq = function (a) {
      a.C++;
      return La(function () {
        a.B++;
        a.U && a.B >= a.C && hq(a);
      });
    },
    kq = function (a) {
      a.U = !0;
      a.B >= a.C && hq(a);
    };
  var lq = {},
    nq = function () {
      return C[mq()];
    },
    oq = !1;
  var pq = function (a) {
      C.GoogleAnalyticsObject || (C.GoogleAnalyticsObject = a || "ga");
      var b = C.GoogleAnalyticsObject;
      if (C[b]) C.hasOwnProperty(b);else {
        var c = function () {
          c.q = c.q || [];
          c.q.push(arguments);
        };
        c.l = Number(Ia());
        C[b] = c;
      }
      return C[b];
    },
    qq = function (a) {
      if (Of()) {
        var b = nq();
        b(a + "require", "linker");
        b(a + "linker:passthrough", !0);
      }
    };
  function mq() {
    return C.GoogleAnalyticsObject || "ga";
  }
  var rq = function (a) {
      if (lq[a] || oq) return;
      var b = C[mq()];
      ta(b) && (b("provide", a, sa), lq[a] = !0);
    },
    sq = function (a, b) {
      return function () {
        var c = nq(),
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
  var Xq = {},
    Yq = {};
  function Zq(a, b) {
    if (Lg) {
      var c;
      c = b.match(/^(gtm|gtag)\./) ? encodeURIComponent(b) : "*";
      Xq[a] = "&e=" + c + "&eid=" + a;
      Vg(a);
    }
  }
  function $q(a) {
    var b = a.eventId,
      c = a.Cb;
    if (!Xq[b]) return "";
    var d = Yq[b] ? "" : "&es=1";
    d += Xq[b];
    c && (Yq[b] = !0);
    return d;
  }
  ;
  var ar = {};
  function br(a, b) {
    Lg && (ar[a] = ar[a] || {}, ar[a][b] = (ar[a][b] || 0) + 1);
  }
  function cr(a) {
    var b = a.eventId,
      c = a.Cb,
      d = ar[b] || {},
      e = [],
      f;
    for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
    c && delete ar[b];
    return e.length ? "&md=" + e.join(".") : "";
  }
  ;
  var dr = {},
    er = {
      aev: "1",
      c: "2",
      jsm: "3",
      v: "4",
      j: "5",
      smm: "6",
      rmm: "7",
      input: "8"
    };
  function fr(a, b, c) {
    if (Lg) {
      dr[a] = dr[a] || [];
      var d = er[b] || "0",
        e;
      e = c instanceof C.Element ? "1" : c instanceof C.Event ? "2" : c instanceof C.RegExp ? "3" : c === C ? "4" : c === E ? "5" : c instanceof C.Promise ? "6" : c instanceof C.Storage ? "7" : c instanceof C.Date ? "8" : c instanceof C.History ? "9" : c instanceof C.Performance ? "a" : c === C.crypto ? "b" : c instanceof C.Location ? "c" : c instanceof C.Navigator ? "d" : "object" !== typeof c || Xa(c) ? "0" : "e";
      dr[a].push("" + d + e);
    }
  }
  function gr(a) {
    var b = a.eventId,
      c = dr[b] || [];
    if (!c.length) return "";
    a.Cb && delete dr[b];
    return "&pcr=" + c.join(".");
  }
  ;
  var hr = {},
    ir = {};
  function jr(a, b, c) {
    if (Lg && b) {
      var d = dg(b);
      hr[a] = hr[a] || [];
      hr[a].push(c + d);
      var e = (fd(b) ? "1" : "2") + d;
      ir[a] = ir[a] || [];
      ir[a].push(e);
      Vg(a);
    }
  }
  function kr(a) {
    var b = a.eventId,
      c = a.Cb,
      d = "",
      e = hr[b] || [];
    e.length && (d += "&tr=" + e.join("."));
    var f = ir[b] || [];
    f.length && (d += "&ti=" + f.join("."));
    c && (delete hr[b], delete ir[b]);
    return d;
  }
  ;
  function lr(a, b, c, d) {
    var e = Tc[a],
      f = mr(a, b, c, d);
    if (!f) return null;
    var h = cd(e[pc.Gh], c, []);
    if (h && h.length) {
      var l = h[0];
      f = lr(l.index, {
        onSuccess: f,
        onFailure: 1 === l.Uh ? b.terminate : f,
        terminate: b.terminate
      }, c, d);
    }
    return f;
  }
  function mr(a, b, c, d) {
    function e() {
      if (f[pc.Nj]) l();else {
        var w = dd(f, c, []),
          x = w[pc.Gi];
        if (null != x) for (var y = 0; y < x.length; y++) if (!Q(x[y])) {
          l();
          return;
        }
        var A = fq(c.Nb, String(f[pc.ia]), Number(f[pc.rd]), w[pc.Oj]),
          B = !1;
        w.vtp_gtmOnSuccess = function () {
          if (!B) {
            B = !0;
            var F = Ja() - I;
            jr(c.id, Tc[a], "5");
            gq(c.Nb, A, "success", F);
            P(29) && Wo(c, f, eo.D.Jh);
            h();
          }
        };
        w.vtp_gtmOnFailure = function () {
          if (!B) {
            B = !0;
            var F = Ja() - I;
            jr(c.id, Tc[a], "6");
            gq(c.Nb, A, "failure", F);
            P(29) && Wo(c, f, eo.D.Ih);
            l();
          }
        };
        w.vtp_gtmTagId = f.tag_id;
        w.vtp_gtmEventId = c.id;
        c.priorityId && (w.vtp_gtmPriorityId = c.priorityId);
        jr(c.id, f, "1");
        var D = function () {
          pf(3);
          var F = Ja() - I;
          jr(c.id, f, "7");
          gq(c.Nb, A, "exception", F);
          P(29) && Wo(c, f, eo.D.Hh);
          B || (B = !0, l());
        };
        P(29) && Vo(c, f);
        var I = Ja();
        try {
          bd(w, {
            event: c,
            index: a,
            type: 1
          });
        } catch (F) {
          D(F);
        }
        P(29) && Wo(c, f, eo.D.Kh);
      }
    }
    var f = Tc[a],
      h = b.onSuccess,
      l = b.onFailure,
      m = b.terminate;
    if (c.Uf(f)) return null;
    var n = cd(f[pc.Lh], c, []);
    if (n && n.length) {
      var p = n[0],
        q = lr(p.index, {
          onSuccess: h,
          onFailure: l,
          terminate: m
        }, c, d);
      if (!q) return null;
      h = q;
      l = 2 === p.Uh ? m : q;
    }
    if (f[pc.Ch] || f[pc.Qj]) {
      var r = f[pc.Ch] ? Uc : c.Kl,
        t = h,
        u = l;
      if (!r[a]) {
        e = La(e);
        var v = nr(a, r, e);
        h = v.onSuccess;
        l = v.onFailure;
      }
      return function () {
        r[a](t, u);
      };
    }
    return e;
  }
  function nr(a, b, c) {
    var d = [],
      e = [];
    b[a] = or(d, e, c);
    return {
      onSuccess: function () {
        b[a] = pr;
        for (var f = 0; f < d.length; f++) d[f]();
      },
      onFailure: function () {
        b[a] = qr;
        for (var f = 0; f < e.length; f++) e[f]();
      }
    };
  }
  function or(a, b, c) {
    return function (d, e) {
      a.push(d);
      b.push(e);
      c();
    };
  }
  function pr(a) {
    a();
  }
  function qr(a, b) {
    b();
  }
  ;
  var sr = function (a, b) {
      return 1 === arguments.length ? rr("config", a) : rr("config", a, b);
    },
    tr = function (a, b, c) {
      c = c || {};
      c[K.g.Kb] = a;
      return rr("event", b, c);
    };
  function rr(a) {
    return arguments;
  }
  var ur = function () {
    this.h = [];
    this.B = [];
  };
  ur.prototype.enqueue = function (a, b, c) {
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
  ur.prototype.listen = function (a) {
    this.B.push(a);
  };
  ur.prototype.get = function () {
    for (var a = {}, b = 0; b < this.h.length; b++) {
      var c = this.h[b],
        d = a[c.notBeforeEventId];
      d || (d = [], a[c.notBeforeEventId] = d);
      d.push(c);
    }
    return a;
  };
  ur.prototype.prune = function (a) {
    for (var b = [], c = [], d = 0; d < this.h.length; d++) {
      var e = this.h[d];
      e.notBeforeEventId === a ? b.push(e) : c.push(e);
    }
    this.h = c;
    return b;
  };
  var wr = function (a, b, c) {
      vr().enqueue(a, b, c);
    },
    yr = function () {
      var a = xr;
      vr().listen(a);
    };
  function vr() {
    var a = Be.mb;
    a || (a = new ur(), Be.mb = a);
    return a;
  }
  var Gr = function (a) {
      var b = Be.zones;
      return b ? b.getIsAllowedFn(ng(), a) : function () {
        return !0;
      };
    },
    Hr = function () {
      vp(function (a, b) {
        var c = Be.zones;
        return c ? c.isActive(ng(), b) : !0;
      });
    };
  var Kr = function (a, b) {
    for (var c = [], d = 0; d < Tc.length; d++) if (a[d]) {
      var e = Tc[d];
      var f = jq(b.Nb);
      try {
        var h = lr(d, {
          onSuccess: f,
          onFailure: f,
          terminate: f
        }, b, d);
        if (h) {
          var l = e[pc.ia];
          if (!l) throw "Error: No function name given for function call.";
          var m = Vc[l];
          c.push({
            vi: d,
            ji: (m ? m.priorityOverride || 0 : 0) || tp(e[pc.ia], 1) || 0,
            execute: h
          });
        } else Ir(d, b), f();
      } catch (p) {
        f();
      }
    }
    c.sort(Jr);
    for (var n = 0; n < c.length; n++) c[n].execute();
    return 0 < c.length;
  };
  function Jr(a, b) {
    var c,
      d = b.ji,
      e = a.ji;
    c = d > e ? 1 : d < e ? -1 : 0;
    var f;
    if (0 !== c) f = c;else {
      var h = a.vi,
        l = b.vi;
      f = h > l ? 1 : h < l ? -1 : 0;
    }
    return f;
  }
  function Ir(a, b) {
    if (Lg) {
      var c = function (d) {
        var e = b.Uf(Tc[d]) ? "3" : "4",
          f = cd(Tc[d][pc.Gh], b, []);
        f && f.length && c(f[0].index);
        jr(b.id, Tc[d], e);
        var h = cd(Tc[d][pc.Lh], b, []);
        h && h.length && c(h[0].index);
      };
      c(a);
    }
  }
  var Nr = !1,
    Lr;
  var Sr = function (a) {
    var b = a["gtm.uniqueEventId"],
      c = a["gtm.priorityId"],
      d = a.event;
    P(29) && Po(b, d);
    if ("gtm.js" === d) {
      if (Nr) return !1;
      Nr = !0;
    }
    var e,
      f = !1;
    if (wp().every(function (r) {
      return r(d, b);
    })) e = Gr(b);else {
      if ("gtm.js" !== d && "gtm.init" !== d && "gtm.init_consent" !== d) return !1;
      f = !0;
      e = Gr(Number.MAX_SAFE_INTEGER);
    }
    Zq(b, d);
    var h = a.eventCallback,
      l = a.eventTimeout,
      m = {
        id: b,
        priorityId: c,
        name: d,
        Uf: Dp(e),
        Kl: [],
        bi: function () {
          J(6);
          pf(0);
        },
        Ph: Or(),
        Qh: Pr(b),
        Nb: new eq(function () {
          if (P(29)) {}
          h && h.apply(h, [].slice.call(arguments, 0));
        }, l)
      };
    P(57) && (m.kg = br);
    P(29) && Ro(m.id, m.name);
    var n = jd(m);
    P(29) && So(m.id, m.name);
    f && (n = Qr(n));
    P(29) && Qo(b, d);
    var p = Kr(n, m),
      q = !1;
    kq(m.Nb);
    "gtm.js" !== d && "gtm.sync" !== d || rq(rg());
    return Rr(n, p) || q;
  };
  function Pr(a) {
    return function (b) {
      Ya(b) || fr(a, "input", b);
    };
  }
  function Or() {
    var a = {};
    a.event = ef("event", 1);
    a.ecommerce = ef("ecommerce", 1);
    a.gtm = ef("gtm");
    a.eventModel = ef("eventModel");
    return a;
  }
  function Qr(a) {
    for (var b = [], c = 0; c < a.length; c++) if (a[c]) {
      var d = String(Tc[c][pc.ia]);
      if (De[d] || void 0 !== Tc[c][pc.Rj] || Ue[d] || tp(d, 2)) b[c] = !0;
    }
    return b;
  }
  function Rr(a, b) {
    if (!b) return b;
    for (var c = 0; c < a.length; c++) if (a[c] && Tc[c] && !Ee[String(Tc[c][pc.ia])]) return !0;
    return !1;
  }
  var Tr = {};
  function Ur(a, b, c) {
    Lg && void 0 !== a && (Tr[a] = Tr[a] || [], Tr[a].push(c + b), Vg(a));
  }
  function Vr(a) {
    var b = a.eventId,
      c = a.Cb,
      d = "",
      e = Tr[b] || [];
    e.length && (d += "&epr=" + e.join("."));
    c && delete Tr[b];
    return d;
  }
  ;
  var Xr = function (a, b, c, d) {
      var e = ll(c, d.isGtmEvent);
      e && Wr.push("event", [b, a], e, d);
    },
    Yr = function (a, b, c, d) {
      var e = ll(c, d.isGtmEvent);
      e && Wr.push("get", [a, b], e, d);
    },
    Zr = function () {
      this.status = 1;
      this.I = {};
      this.h = {};
      this.M = {};
      this.U = null;
      this.C = {};
      this.B = !1;
    },
    $r = function (a, b, c, d) {
      var e = Ja();
      this.type = a;
      this.C = e;
      this.h = b;
      this.B = c;
      this.messageContext = d;
    },
    as = function () {
      this.B = {};
      this.C = {};
      this.h = [];
    },
    bs = function (a, b) {
      var c = b.X;
      return a.B[c] = a.B[c] || new Zr();
    },
    cs = function (a, b, c, d) {
      if (d.h) {
        var e = bs(a, d.h),
          f = e.U;
        if (f) {
          var h = z(c),
            l = z(e.I[d.h.id]),
            m = z(e.C),
            n = z(e.h),
            p = z(a.C),
            q = {};
          if (Lg) try {
            q = z(Ye);
          } catch (v) {
            J(72);
          }
          var r = d.h.prefix,
            t = function (v) {
              Ur(d.messageContext.eventId, r, v);
            },
            u = vh(uh(th(sh(rh(ph(oh(qh(nh(mh(lh(new kh(d.messageContext.eventId, d.messageContext.priorityId), h), l), m), n), p), q), d.messageContext.eventMetadata), function () {
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
            Ur(d.messageContext.eventId, r, "1"), Vp(d.type, d.h.id, u), f(d.h.id, b, d.C, u);
          } catch (v) {
            Ur(d.messageContext.eventId, r, "4");
          }
        }
      }
    };
  as.prototype.register = function (a, b, c) {
    var d = bs(this, a);
    3 !== d.status && (d.U = b, d.status = 3, c && (z(d.h, c), d.h = c), this.flush());
  };
  as.prototype.push = function (a, b, c, d) {
    void 0 !== c && (1 === bs(this, c).status && (bs(this, c).status = 2, this.push("require", [{}], c, {})), bs(this, c).B && (d.deferrable = !1));
    this.h.push(new $r(a, c, b, d));
    d.deferrable || this.flush();
  };
  as.prototype.flush = function (a) {
    for (var b = this, c = [], d = !1, e = {}; this.h.length;) {
      e = {
        xb: e.xb,
        De: e.De
      };
      var f = this.h[0],
        h = f.h;
      if (f.messageContext.deferrable) !h || bs(this, h).B ? (f.messageContext.deferrable = !1, this.h.push(f)) : c.push(f), this.h.shift();else {
        switch (f.type) {
          case "require":
            if (3 !== bs(this, h).status && !a) {
              this.h.push.apply(this.h, c);
              return;
            }
            break;
          case "set":
            k(f.B[0], function (r, t) {
              z(Qa(r, t), b.C);
            });
            break;
          case "config":
            var l = bs(this, h);
            e.xb = {};
            k(f.B[0], function (r) {
              return function (t, u) {
                z(Qa(t, u), r.xb);
              };
            }(e));
            var m = !!e.xb[K.g.Mb];
            delete e.xb[K.g.Mb];
            var n = h.X === h.id;
            m || (n ? l.C = {} : l.I[h.id] = {});
            l.B && m || cs(this, K.g.la, e.xb, f);
            l.B = !0;
            n ? z(e.xb, l.C) : (z(e.xb, l.I[h.id]), J(70));
            d = !0;
            break;
          case "event":
            e.De = {};
            k(f.B[0], function (r) {
              return function (t, u) {
                z(Qa(t, u), r.De);
              };
            }(e));
            cs(this, f.B[1], e.De, f);
            break;
          case "get":
            var p = {},
              q = (p[K.g.Ya] = f.B[0], p[K.g.nb] = f.B[1], p);
            cs(this, K.g.Ha, q, f);
        }
        this.h.shift();
        ds(this, f);
      }
    }
    this.h.push.apply(this.h, c);
    d && this.flush();
  };
  var ds = function (a, b) {
      if ("require" !== b.type) if (b.h) for (var c = bs(a, b.h).M[b.type] || [], d = 0; d < c.length; d++) c[d]();else for (var e in a.B) if (a.B.hasOwnProperty(e)) {
        var f = a.B[e];
        if (f && f.M) for (var h = f.M[b.type] || [], l = 0; l < h.length; l++) h[l]();
      }
    },
    es = function (a, b) {
      var c = Wr,
        d = z(b);
      z(bs(c, a).h, d);
      bs(c, a).h = d;
    },
    Wr = new as();
  var fs = {},
    gs = {},
    hs = function (a, b) {
      for (var c = [], d = [], e = {}, f = 0; f < a.length; e = {
        Me: e.Me,
        He: e.He
      }, f++) {
        var h = a[f];
        if (0 <= h.indexOf("-")) {
          if (e.Me = ll(h, b), e.Me) {
            var l = pg();
            xa(l, function (r) {
              return function (t) {
                return r.Me.X === t;
              };
            }(e)) ? c.push(h) : d.push(h);
          }
        } else {
          var m = fs[h] || [];
          e.He = {};
          m.forEach(function (r) {
            return function (t) {
              return r.He[t] = !0;
            };
          }(e));
          for (var n = ng(), p = 0; p < n.length; p++) if (e.He[n[p]]) {
            c = c.concat(pg());
            break;
          }
          var q = gs[h] || [];
          q.length && (c = c.concat(q));
        }
      }
      return {
        jl: c,
        kl: d
      };
    },
    is = function (a) {
      k(fs, function (b, c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1);
      });
    },
    js = function (a) {
      k(gs, function (b, c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1);
      });
    };
  var ks = "HA GF G UA AW DC MC".split(" "),
    ls = !1,
    ms = !1;
  function ns(a, b) {
    a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {
      value: Ve()
    });
    b.eventId = a["gtm.uniqueEventId"];
    b.priorityId = a["gtm.priorityId"];
    return {
      eventId: b.eventId,
      priorityId: b.priorityId
    };
  }
  var os = void 0,
    ps = void 0;
  function qs(a, b, c) {
    var d = z(a);
    d.eventId = void 0;
    d.inheritParentConfig = void 0;
    Object.keys(b).some(function (f) {
      return void 0 !== b[f];
    }) && J(136);
    var e = z(b);
    z(c, e);
    wr(sr(ng()[0], e), a.eventId, d);
  }
  function rs(a) {
    for (var b = ha([K.g.Vc, K.g.Lb]), c = b.next(); !c.done; c = b.next()) {
      var d = c.value,
        e = a && a[d] || Wr.C[d];
      if (e) return e;
    }
  }
  var ss = {
      config: function (a, b) {
        var c = P(58),
          d = ns(a, b);
        if (!(2 > a.length) && g(a[1])) {
          var e = {};
          if (2 < a.length) {
            if (void 0 != a[2] && !Xa(a[2]) || 3 < a.length) return;
            e = a[2];
          }
          var f = ll(a[1], b.isGtmEvent);
          if (f) {
            var h, l, m;
            a: {
              if (!ig.ld) {
                var n = tg(zg());
                if (Dg(n)) {
                  var p = n.parent,
                    q = p.isDestination;
                  m = {
                    nl: tg(p),
                    il: q
                  };
                  break a;
                }
              }
              m = void 0;
            }
            var r = m;
            r && (h = r.nl, l = r.il);
            Zq(d.eventId, "gtag.config");
            var t = f.X,
              u = f.id !== t;
            if (u ? -1 === pg().indexOf(t) : -1 === ng().indexOf(t)) {
              if (!(c && b.inheritParentConfig || P(25) && e[K.g.qb])) {
                var v = rs(e);
                if (u) Kp(t, v, {
                  source: 2,
                  fromContainerExecution: b.fromContainerExecution
                });else if (c && void 0 !== h && -1 !== h.containers.indexOf(t)) {
                  var w = e;
                  os ? qs(b, w, os) : ps || (ps = z(w));
                } else Jp(t, v, !0, {
                  source: 2,
                  fromContainerExecution: b.fromContainerExecution
                });
              }
            } else {
              if (h && (J(128), l && J(130), c && b.inheritParentConfig)) {
                var x = e;
                ps ? qs(b, ps, x) : !x[K.g.Mb] && Ge && os || (os = z(x));
                return;
              }
              if (Ge && !u && !e[K.g.Mb]) {
                var y = ms;
                ms = !0;
                if (y) return;
              }
              ls || J(43);
              if (!b.noTargetGroup) if (u) {
                js(f.id);
                var A = f.id,
                  B = e[K.g.me] || "default";
                B = String(B).split(",");
                for (var D = 0; D < B.length; D++) {
                  var I = gs[B[D]] || [];
                  gs[B[D]] = I;
                  0 > I.indexOf(A) && I.push(A);
                }
              } else {
                is(f.id);
                var F = f.id,
                  G = e[K.g.me] || "default";
                G = G.toString().split(",");
                for (var L = 0; L < G.length; L++) {
                  var N = fs[G[L]] || [];
                  fs[G[L]] = N;
                  0 > N.indexOf(F) && N.push(F);
                }
              }
              delete e[K.g.me];
              var R = b.eventMetadata || {};
              R.hasOwnProperty("is_external_event") || (R.is_external_event = !b.fromContainerExecution);
              b.eventMetadata = R;
              delete e[K.g.Pc];
              for (var Z = u ? [f.id] : pg(), S = 0; S < Z.length; S++) {
                var O = e,
                  Y = z(b),
                  ba = ll(Z[S], Y.isGtmEvent);
                ba && Wr.push("config", [O], ba, Y);
              }
            }
          }
        }
      },
      consent: function (a, b) {
        if (3 === a.length) {
          J(39);
          var c = ns(a, b),
            d = a[1];
          "default" === d ? Yf(a[2]) : "update" === d ? Zf(a[2], c) : "declare" === d ? b.fromContainerExecution && Xf(a[2]) : "core_platform_services" === d && $f(a[2]);
        }
      },
      event: function (a, b) {
        var c = a[1];
        if (!(2 > a.length) && g(c)) {
          var d;
          if (2 < a.length) {
            if (!Xa(a[2]) && void 0 != a[2] || 3 < a.length) return;
            d = a[2];
          }
          var e = d,
            f = {},
            h = (f.event = c, f);
          e && (h.eventModel = z(e), e[K.g.Pc] && (h.eventCallback = e[K.g.Pc]), e[K.g.fe] && (h.eventTimeout = e[K.g.fe]));
          var l = ns(a, b),
            m = l.eventId,
            n = l.priorityId;
          h["gtm.uniqueEventId"] = m;
          n && (h["gtm.priorityId"] = n);
          if ("optimize.callback" === c) return h.eventModel = h.eventModel || {}, h;
          var p;
          var q = d,
            r = q && q[K.g.Kb];
          void 0 === r && (r = af(K.g.Kb, 2), void 0 === r && (r = "default"));
          if (g(r) || va(r)) {
            var t;
            b.isGtmEvent ? t = g(r) ? [r] : r : t = r.toString().replace(/\s+/g, "").split(",");
            var u = hs(t, b.isGtmEvent),
              v = u.jl,
              w = u.kl;
            if (w.length) for (var x = rs(q), y = 0; y < w.length; y++) {
              var A = ll(w[y], b.isGtmEvent);
              A && Kp(A.X, x, {
                source: 3,
                fromContainerExecution: b.fromContainerExecution
              });
            }
            p = nl(v, b.isGtmEvent);
          } else p = void 0;
          var B = p;
          if (B) {
            Zq(m, c);
            for (var D = [], I = 0; I < B.length; I++) {
              var F = B[I],
                G = z(b);
              if (-1 !== ks.indexOf(ug(F.prefix))) {
                var L = z(d),
                  N = G.eventMetadata || {};
                N.hasOwnProperty("is_external_event") || (N.is_external_event = !G.fromContainerExecution);
                G.eventMetadata = N;
                delete L[K.g.Pc];
                Xr(c, L, F.id, G);
              }
              D.push(F.id);
            }
            h.eventModel = h.eventModel || {};
            0 < B.length ? h.eventModel[K.g.Kb] = D.join() : delete h.eventModel[K.g.Kb];
            ls || J(43);
            void 0 === b.noGtmEvent && b.eventMetadata && b.eventMetadata.syn_or_mod && (b.noGtmEvent = !0);
            h.eventModel[K.g.pb] && (b.noGtmEvent = !0);
            return b.noGtmEvent ? void 0 : h;
          }
        }
      },
      get: function (a, b) {
        J(53);
        if (4 === a.length && g(a[1]) && g(a[2]) && ta(a[3])) {
          var c = ll(a[1], b.isGtmEvent),
            d = String(a[2]),
            e = a[3];
          if (c) {
            ls || J(43);
            var f = rs();
            if (!xa(pg(), function (l) {
              return c.X === l;
            })) Kp(c.X, f, {
              source: 4,
              fromContainerExecution: b.fromContainerExecution
            });else if (-1 !== ks.indexOf(ug(c.prefix))) {
              ns(a, b);
              var h = {};
              Uf(z((h[K.g.Ya] = d, h[K.g.nb] = e, h)));
              Yr(d, function (l) {
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
          ls = !0;
          var c = ns(a, b),
            d = c.eventId,
            e = c.priorityId,
            f = {};
          return f.event = "gtm.js", f["gtm.start"] = a[1].getTime(), f["gtm.uniqueEventId"] = d, f["gtm.priorityId"] = e, f;
        }
      },
      policy: function () {},
      set: function (a, b) {
        var c;
        2 == a.length && Xa(a[1]) ? c = z(a[1]) : 3 == a.length && g(a[1]) && (c = {}, Xa(a[2]) || va(a[2]) ? c[a[1]] = z(a[2]) : c[a[1]] = a[2]);
        if (c) {
          var d = ns(a, b),
            e = d.eventId,
            f = d.priorityId;
          z(c);
          var h = z(c);
          Wr.push("set", [h], void 0, b);
          c["gtm.uniqueEventId"] = e;
          f && (c["gtm.priorityId"] = f);
          P(13) && delete c.event;
          b.overwriteModelFields = !0;
          return c;
        }
      }
    },
    ts = {
      policy: !0
    };
  var us = function (a) {
      var b = C[Ae.da].hide;
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
    vs = function (a) {
      var b = C[Ae.da],
        c = b && b.hide;
      c && c.end && (c[a] = !0);
    };
  var ws = !1,
    xs = [];
  function ys() {
    if (!ws) {
      ws = !0;
      for (var a = 0; a < xs.length; a++) H(xs[a]);
    }
  }
  var zs = function (a) {
    ws ? H(a) : xs.push(a);
  };
  var Is = function () {
      try {
        var a, b;
        var m,
          n = rg(),
          p = Jd('script[src*="gtm/js?id=' + n + '"],script[src*="optimize.js?id=' + n + '"]');
        m = p && 0 < p.length ? p[0] : null;
        b = m ? m.hasAttribute("gtm") ? "gtmo" : m.hasAttribute("async") ? "opta" : "opts" : "optu";
        b || (b = "gaoo");
        var q = Bs(Cs, m && m.src),
          r = q.Od,
          t = q.Pd,
          u = q.Ne,
          v = q.Oe,
          w = q.Fe,
          x = q.Ue,
          y = q.Ad,
          A = q.Rf,
          B = q.zd;
        "h0" != y || Ds || (y = "h3");
        Es = {
          Ad: y,
          zd: B,
          tk: a,
          bl: b,
          Rf: A,
          Oe: v,
          Fe: w,
          Ue: x,
          Ne: u,
          Od: r,
          Pd: t,
          Xh: Fs,
          xi: Gs
        };
        Hs(Es);
      } catch (D) {}
    },
    Js = function () {
      var a = C.gaData,
        b = 0,
        c = void 0;
      if (a) for (var d in a) if (a.hasOwnProperty(d) && 0 === d.indexOf("UA-") && a[d].hitcount) {
        b += a[d].hitcount;
        var e = Number(a[d].first_hit);
        e && (!c || e < c) && (c = e);
      }
      return {
        Yh: b,
        Vh: c
      };
    },
    Bs = function (a, b) {
      var c, d, e, f, h, l, m, n, p;
      var q = C.performance;
      if (q) {
        if (b) {
          var r = q.getEntriesByName(b)[0];
          if (r) {
            var t = q.getEntriesByType("resource"),
              u = 0;
            t && 0 < t.length && (u = t[0].startTime);
            f = Math.round(r.startTime - u);
            h = Math.round(r.duration);
            e = t.indexOf(r);
            -1 === e && (e = void 0);
            l = Math.round(a - (r.startTime + r.duration));
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
      var y = C[Ae.da].hide;
      if (y) {
        if (void 0 === y[rg()]) m = "h2";else {
          var A = !1;
          if (null === y.end) for (var B in y) if (y.hasOwnProperty(B) && B.startsWith(rg()) && !0 === y[B]) {
            A = !0;
            break;
          }
          m = A ? "h0" : "h1";
        }
        y.start && !isNaN(y.start) && (q ? q.timing && (p = Math.round(a + q.timing.navigationStart - y.start)) : p = a - y.start);
        isNaN(y.timeout) || (n = y.timeout);
      }
      return {
        Od: d,
        Pd: c,
        Ne: e,
        Oe: f,
        Fe: h,
        Ue: l,
        Ad: m,
        Rf: n,
        zd: p
      };
    },
    Hs = function (a, b) {
      b = void 0 === b ? "ol" : b;
      var c = function (e, f) {
          null != f && (d += e + encodeURIComponent(f));
        },
        d = Mg + "&cv=171";
      c("&t=", b);
      c("&s=", a.Ad);
      c("&h=", a.zd);
      c("&g=", a.tk);
      c("&p=", a.bl);
      c("&o=", a.Rf);
      c("&l=", function () {
        var e = Qe;
        return e ? As - Da(e) : void 0;
      }());
      c("&q=", a.Oe);
      c("&f=", a.Fe);
      c("&e=", a.Ue);
      c("&i=", a.Ne);
      c("&d=", a.Od);
      c("&c=", a.Pd);
      c("&tr=", a.Ol);
      c("&jl=", a.Zk);
      c("&jf=", a.Xk);
      c("&ji=", a.Yk);
      c("&jq=", a.al);
      c("&jd=", a.Vk);
      c("&jx=", a.Wk);
      c("&hc=", a.Xh);
      c("&fh=", a.xi);
      d += "&sr=0.050000";
      c("&ps=", Ks);
      c("&cb=", ya());
      $b(d);
    },
    Ls = !1,
    As,
    Cs,
    Ds,
    Ks,
    Es,
    Fs,
    Gs;
  Ks = Math.random(), Ls = "0.050000" > Ks;
  var Ms = function () {
      if (!Ls || As) return;
      As = Ja();
      Cs = kc() || As;
      Ds = !!E.querySelector("body");
      var a = Js(),
        b = a.Vh;
      Fs = a.Yh;
      Gs = b ? As - b : void 0;
      zs(Is);
    },
    Os = function (a) {
      var b = Ns;
      if (!Ls) return;
      try {
        var c = Ja(),
          d = kc() || c,
          e = Js(),
          f = e.Yh,
          h = e.Vh,
          l = h ? c - h : void 0;
        zs(function () {
          var m = Bs(d, b),
            n = m.Od,
            p = m.Pd,
            q = m.Ne,
            r = m.Oe,
            t = m.Fe,
            u = m.Ue,
            v = m.Ad,
            w = m.zd,
            x = z(Es || {});
          z(a, x);
          z({
            Ad: v,
            zd: w,
            Od: n,
            Pd: p,
            Yk: q,
            al: r,
            Vk: t,
            Wk: u,
            Xh: f,
            xi: l
          }, x);
          Hs(x, "od");
        });
      } catch (m) {}
    };
  var Qs = function (a) {
    if (Ps(a)) return a;
    this.h = a;
  };
  Qs.prototype.getUntrustedMessageValue = function () {
    return this.h;
  };
  var Ps = function (a) {
    return !a || "object" !== Va(a) || Xa(a) ? !1 : "getUntrustedMessageValue" in a;
  };
  Qs.prototype.getUntrustedMessageValue = Qs.prototype.getUntrustedMessageValue;
  var Rs = 0,
    Ss = {},
    Ts = [],
    Us = [],
    Vs = !1,
    Ws = !1;
  function Xs(a, b) {
    return a.messageContext.eventId - b.messageContext.eventId || a.messageContext.priorityId - b.messageContext.priorityId;
  }
  var Ys = function (a) {
      return C[Ae.da].push(a);
    },
    Zs = function (a, b) {
      if (!ua(b) || 0 > b) b = 0;
      var c = Be[Ae.da],
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
  function $s(a, b) {
    var c = a._clear || b.overwriteModelFields;
    k(a, function (e, f) {
      "_clear" !== e && (c && df(e), df(e, f));
    });
    Qe || (Qe = a["gtm.start"]);
    Ms();
    var d = a["gtm.uniqueEventId"];
    if (!a.event) return !1;
    "number" !== typeof d && (d = Ve(), a["gtm.uniqueEventId"] = d, df("gtm.uniqueEventId", d));
    return Sr(a);
  }
  function at(a) {
    if (null == a || "object" !== typeof a) return !1;
    if (a.event) return !0;
    if (Ca(a)) {
      var b = a[0];
      if ("config" === b || "event" === b || "js" === b || "get" === b) return !0;
    }
    return !1;
  }
  function bt() {
    var a;
    if (Us.length) a = Us.shift();else if (Ts.length) a = Ts.shift();else return;
    var b;
    var c = a;
    if (Vs || !at(c.message)) b = c;else {
      Vs = !0;
      var d = c.message["gtm.uniqueEventId"];
      "number" !== typeof d && (d = c.message["gtm.uniqueEventId"] = Ve());
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
      Ts.unshift(l, c);
      if (Lg) {
        var m = kg.ctid;
        if (m) {
          var n,
            p = tg(zg());
          n = p && p.context;
          var q,
            r = Aj(C.location.href);
          q = r.hostname + r.pathname;
          var t = n && n.fromContainerExecution,
            u = n && n.source,
            v = kg.If,
            w = ig.ld;
          Lg && (Lp || (Lp = q), Mp.push(m + ";" + v + ";" + (t ? 1 : 0) + ";" + (u || 0) + ";" + (w ? 1 : 0)));
        }
      }
      b = f;
    }
    return b;
  }
  function ct() {
    for (var a = !1, b; !Ws && (b = bt());) {
      Ws = !0;
      delete Ye.eventModel;
      $e();
      var c = b,
        d = c.message,
        e = c.messageContext;
      if (null == d) Ws = !1;else {
        if (e.fromContainerExecution) for (var f = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], h = 0; h < f.length; h++) {
          var l = f[h],
            m = af(l, 1);
          if (va(m) || Xa(m)) m = z(m);
          Ze[l] = m;
        }
        try {
          if (ta(d)) try {
            d.call(bf);
          } catch (D) {} else if (va(d)) {
            var n = d;
            if (g(n[0])) {
              var p = n[0].split("."),
                q = p.pop(),
                r = n.slice(1),
                t = af(p.join("."), 2);
              if (null != t) try {
                t[q].apply(t, r);
              } catch (D) {}
            }
          } else {
            var u = void 0,
              v = !1;
            if (Ca(d)) {
              a: {
                if (d.length && g(d[0])) {
                  var w = ss[d[0]];
                  if (w && (!e.fromContainerExecution || !ts[d[0]])) {
                    u = w(d, e);
                    break a;
                  }
                }
                u = void 0;
              }
              (v = u && "set" === d[0] && !!u.event) && J(101);
            } else u = d;
            if (u) {
              var x = $s(u, e);
              a = x || a;
              v && x && J(113);
            }
          }
        } finally {
          e.fromContainerExecution && $e(!0);
          var y = d["gtm.uniqueEventId"];
          if ("number" === typeof y) {
            for (var A = Ss[String(y)] || [], B = 0; B < A.length; B++) Us.push(dt(A[B]));
            A.length && Us.sort(Xs);
            delete Ss[String(y)];
            y > Rs && (Rs = y);
          }
          Ws = !1;
        }
      }
    }
    return !a;
  }
  function et() {
    if (P(29)) {
      var a = ft();
    }
    var e = ct();
    try {
      us(rg());
    } catch (f) {}
    return e;
  }
  function xr(a) {
    if (Rs < a.notBeforeEventId) {
      var b = String(a.notBeforeEventId);
      Ss[b] = Ss[b] || [];
      Ss[b].push(a);
    } else Us.push(dt(a)), Us.sort(Xs), H(function () {
      Ws || ct();
    });
  }
  function dt(a) {
    return {
      message: a.message,
      messageContext: a.messageContext
    };
  }
  var gt = function () {
      function a(f) {
        var h = {};
        if (Ps(f)) {
          var l = f;
          f = Ps(l) ? l.getUntrustedMessageValue() : void 0;
          h.fromContainerExecution = !0;
        }
        return {
          message: f,
          messageContext: h
        };
      }
      var b = Sb(Ae.da, []),
        c = Be[Ae.da] = Be[Ae.da] || {};
      !0 === c.pruned && J(83);
      Ss = vr().get();
      yr();
      bq(function () {
        if (!c.gtmDom) {
          c.gtmDom = !0;
          var f = {};
          b.push((f.event = "gtm.dom", f));
        }
      });
      zs(function () {
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
        if (0 < Be.SANDBOXED_JS_SEMAPHORE) {
          f = [];
          for (var h = 0; h < arguments.length; h++) f[h] = new Qs(arguments[h]);
        } else f = [].slice.call(arguments, 0);
        var l = f.map(function (q) {
          return a(q);
        });
        Ts.push.apply(Ts, l);
        var m = d.apply(b, f),
          n = Math.max(100, Number("1000") || 300);
        if (this.length > n) for (J(4), c.pruned = !0; this.length > n;) this.shift();
        var p = "boolean" !== typeof m || m;
        return ct() && p;
      };
      var e = b.slice(0).map(function (f) {
        return a(f);
      });
      Ts.push.apply(Ts, e);
      ft() && (P(29) && Oo(), H(et));
    },
    ft = function () {
      var a = !0;
      return a;
    };
  function ht(a) {
    if (null == a || 0 === a.length) return !1;
    var b = Number(a),
      c = Ja();
    return b < c + 3E5 && b > c - 9E5;
  }
  function it(a) {
    return a && 0 === a.indexOf("pending:") ? ht(a.substr(8)) : !1;
  }
  ;
  var Et = function () {};
  var Ft = new String("undefined"),
    Gt = function () {};
  Gt.prototype.toString = function () {
    return "undefined";
  };
  var Ht = new Gt();
  var mu = C.clearTimeout,
    nu = C.setTimeout,
    U = function (a, b, c, d) {
      if (aj()) {
        b && H(b);
      } else return Xb(a, b, c, d);
    },
    ou = function () {
      return new Date();
    },
    pu = function () {
      return C.location.href;
    },
    qu = function (a) {
      return yj(Aj(a), "fragment");
    },
    ru = function (a) {
      return zj(Aj(a));
    },
    su = function (a, b) {
      return af(a, b || 2);
    },
    tu = function (a, b, c) {
      var d;
      b ? (a.eventCallback = b, c && (a.eventTimeout = c), d = Ys(a)) : d = Ys(a);
      return d;
    },
    uu = function (a, b) {
      C[a] = b;
    },
    V = function (a, b, c) {
      b && (void 0 === C[a] || c && !C[a]) && (C[a] = b);
      return C[a];
    },
    vu = function (a, b, c) {
      return Ii(a, b, void 0 === c ? !0 : !!c);
    },
    wu = function (a, b, c) {
      return 0 === Ri(a, b, c);
    },
    xu = function (a, b) {
      if (aj()) {
        b && H(b);
      } else Zb(a, b);
    },
    yu = function (a) {
      return !!Tt(a, "init", !1);
    },
    zu = function (a) {
      Rt(a, "init", !0);
    },
    Au = function (a, b, c) {
      Ya(a) || fr(c, b, a);
    };
  var Bu = function (a) {
      if (!a || a.nodeType != Node.ELEMENT_NODE) return !1;
      var b = a.tagName.toUpperCase();
      return "SCRIPT" == b || "STYLE" == b || "LINK" == b;
    },
    Cu = function (a, b, c) {
      try {
        null == c ? a.removeAttribute(b) : a.setAttribute(b, c);
      } catch (d) {
        return d;
      }
      return null;
    },
    Du = function (a, b, c) {
      var d = a.getAttribute(b);
      return Cu(a, b, c) ? 8 : function () {
        Cu(a, b, d);
      };
    },
    Gu = function (a, b, c) {
      var d,
        e,
        f = a.ownerDocument || a.document || document;
      c = (c || "").toLowerCase();
      "after" == c ? (d = a.parentNode, e = a.nextSibling) : "insert" == c ? (d = a, e = a.firstChild) : "append" == c ? (d = a, e = null) : (d = a.parentNode, e = a);
      if (!d || d == f) return {
        result: 1,
        Ok: []
      };
      var h = Eu(b, d);
      Fu(h, "SCRIPT");
      Fu(h, "NOSCRIPT");
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
        Ok: l.slice()
      };
    },
    Hu = {
      SELECT: [1, '<select multiple="multiple">', "</select>"],
      FIELDSET: [1, "<fieldset>", "</fieldset>"],
      MAP: [1, "<map>", "</map>"],
      OBJECT: [1, "<object>", "</object>"],
      TABLE: [1, "<table>", "</table>"],
      TBODY: [2, "<table><tbody>", "</tbody></table>"],
      COLGROUP: [2, "<table><colgroup>", "</colgroup></table>"],
      TR: [3, "<table><tbody><tr>", "</tr></tbody></table>"]
    },
    Eu = function (a, b) {
      var c = 0,
        d = "",
        e = "",
        f = Hu[b.tagName];
      null != f && (c = f[0], d = f[1], e = f[2]);
      var h = b.ownerDocument.createElement("div"),
        l = Ob(d + (a || "") + e);
      1 === h.nodeType && Gb(h);
      h.innerHTML = Fb(l);
      for (var m = h; 0 < c;) {
        var n = m.firstChild;
        if (null == n.firstChild) return b.ownerDocument.createElement("div");
        m = n;
        c--;
      }
      return m;
    },
    Fu = function (a, b) {
      for (var c = a.getElementsByTagName(b), d = [], e = c.length - 1; 0 <= e; e--) {
        var f = c[e];
        f.parentNode.removeChild(f);
        d.push(f);
      }
    },
    Iu = function (a) {
      var b = null,
        c = null;
      try {
        b = new Function("element", a);
      } catch (d) {
        c = d;
      }
      return {
        Nf: b,
        error: c
      };
    },
    Mu = function (a, b, c, d, e) {
      var f = a + "{" + (b + ": " + c + (d ? " !important" : "")) + "}";
      e && (f = e + "{" + f + "}");
      var h = document;
      if (h.createStyleSheet) {
        var l = Ju(h),
          m = l.rules.length;
        l.insertRule(f, m);
        return function () {
          l.deleteRule ? l.deleteRule(m) : l.removeRule(m);
          l.insertRule("x {}", m);
        };
      }
      var n = Ku(f, h);
      Lu(n, h);
      var p = n.parentNode;
      return function () {
        p.removeChild(n);
      };
    },
    Nu = null,
    Ju = function (a) {
      if (Nu) return Nu;
      for (var b = a.styleSheets.length - 1; 0 <= b; b--) {
        var c = a.styleSheets[b];
        if (!c.href) {
          var d = c.ownerNode;
          if (d && d.parentNode && "HEAD" == d.parentNode.tagName) return Nu = c;
        }
      }
      0 == a.styleSheets.length && a.createStyleSheet();
      return Nu = a.styleSheets[0];
    },
    Ku = function (a, b) {
      var c = (b || document).createElement("style");
      void 0 !== c.cssText ? c.cssText = a : c.innerHTML = a;
      return c;
    },
    Lu = function (a, b) {
      var c = b || document,
        d = c.getElementsByTagName("head")[0];
      d || (d = c.createElement("head"), c.body.parentNode.insertBefore(d, c.body));
      d.appendChild(a);
    },
    Ou = function (a, b, c, d) {
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
    Qu = function (a, b, c, d) {
      if (Bu(a)) return 7;
      if (b) return Pu(a, b, d);
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
    Pu = function (a, b, c) {
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
    Ru = function (a, b, c) {
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
    Su = function (a, b, c, d) {
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
    Tu = function (a) {
      var b = document.createElement("a");
      a && (b.href = a);
      return b;
    };
  function Xu(a, b) {
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
  function Yu(a) {
    return Zu(a) ? 1 : 0;
  }
  function Zu(a) {
    var b = a.arg0,
      c = a.arg1;
    if (a.any_of && Array.isArray(c)) {
      for (var d = 0; d < c.length; d++) {
        var e = z(a, {});
        z({
          arg1: c[d],
          any_of: void 0
        }, e);
        if (Yu(e)) return !0;
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
            for (var h = 0; h < yd.length; h++) {
              var l = yd[h];
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
            u = zd.get(t);
          u || (u = new RegExp(c, r), zd.set(t, u));
          q = u.test(b);
        } catch (v) {
          q = !1;
        }
        return q;
      case "_sw":
        return 0 === String(b).indexOf(String(c));
      case "_um":
        return Xu(b, c);
    }
    return !1;
  }
  ;
  function $u() {
    var a = ["&cv=171", "&rv=" + Ae.Ef, "&tc=" + Tc.filter(function (b) {
      return b;
    }).length];
    Ae.pd && a.push("&x=" + Ae.pd);
    return a.join("");
  }
  ;
  var Dv = function () {
      var a = !0;
      mi(7) && mi(9) && mi(10) || (a = !1);
      return a;
    },
    Ev = function () {
      var a = !0;
      mi(3) && mi(4) || (a = !1);
      return a;
    };
  uf();
  function Jw() {
    return C.gaGlobal = C.gaGlobal || {};
  }
  var Kw = function () {
      var a = Jw();
      a.hid = a.hid || ya();
      return a.hid;
    },
    Lw = function (a, b) {
      var c = Jw();
      if (void 0 == c.vid || b && !c.from_cookie) c.vid = a, c.from_cookie = b;
    };
  var Hx = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,
    Ix = /^www.googleadservices.com$/;
  var Jx = window,
    Kx = document,
    Lx = function (a) {
      var b = Jx._gaUserPrefs;
      if (b && b.ioo && b.ioo() || Kx.documentElement.hasAttribute("data-google-analytics-opt-out") || a && !0 === Jx["ga-disable-" + a]) return !0;
      try {
        var c = Jx.external;
        if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0;
      } catch (f) {}
      for (var d = Ei("AMP_TOKEN", String(Kx.cookie), !0), e = 0; e < d.length; e++) if ("$OPT_OUT" == d[e]) return !0;
      return Kx.getElementById("__gaOptOutExtension") ? !0 : !1;
    };
  function Tx(a) {
    k(a, function (c) {
      "_" === c.charAt(0) && delete a[c];
    });
    var b = a[K.g.La] || {};
    k(b, function (c) {
      "_" === c.charAt(0) && delete b[c];
    });
  }
  ;
  var by = function (a, b) {};
  function ay(a, b) {
    var c = function () {};
    return c;
  }
  function cy(a, b, c) {}
  ;
  var dy = ay;
  Object.freeze({
    dl: 1,
    id: 1
  });
  Object.freeze(["config", "event", "get", "set"]);
  var fy = encodeURI,
    W = encodeURIComponent,
    gy = function (a, b, c) {
      $b(a, b, c);
    },
    hy = function (a, b) {
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
    iy = function (a, b, c) {
      for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
      return e ? d : null;
    };
  var ly = function (a) {
      if (!jy[a]) {
        jy[a] = !0;
        var b = C[a] || {};
        C[a] = b;
        var c = function (e) {
            return ky[e];
          },
          d = b.get;
        b.get = d ? function (e) {
          return void 0 !== ky[e] ? ky[e] : d(e);
        } : c;
      }
    },
    oy = function (a, b) {
      ky[a] = b;
      for (var c = my(a), d = 0; d < c.length; d++) ny(c[d], a, b);
      c = my("");
      for (var e = 0; e < c.length; e++) ny(c[e], a, b);
    },
    ny = function (a, b, c) {
      try {
        a(c, b, rg());
      } catch (d) {}
    },
    my = function (a) {
      py[a] = py[a] || [];
      return py[a];
    },
    ky = {},
    py = {},
    jy = {};
  var qy = function () {
      C.gaData = C.gaData || {};
      return C.gaData;
    },
    ry = function (a, b) {
      b = void 0 === b ? !1 : b;
      C.gaData = C.gaData || {};
      var c = C.gaData,
        d = c.tracker_created;
      c.tracker_created = function (e) {
        b && a(e);
        d && ta(d) && d(e);
        b || a(e);
      };
    },
    sy = function (a) {
      var b = C[mq()];
      try {
        if (ta(b) && ta(b.getAll)) return b.getAll().filter(function (c) {
          return c.get("trackingId") === a;
        });
      } catch (c) {}
      return [];
    },
    yy = function (a, b) {
      var c = ty[a];
      if (c) H(function () {
        return b(c);
      });else {
        var d = sy(a)[0];
        d ? (ty[a] = d, uy || (uy = d), H(function () {
          return b(d);
        })) : (vy[a] || (vy[a] = []), vy[a].push(b), wy || (wy = !0, ry(function (e) {
          var f = e.get("trackingId");
          if (vy[f]) {
            if (xy[f]) {
              xy[f] = !1;
              var h = C[mq()];
              ta(h) && h("ga.require", "_" + rg());
            }
            uy || (uy = e);
            ty[f] = e;
            for (var l = vy[f], m; void 0 !== (m = l.shift());) m(e);
            vy[f] = void 0;
          }
        })));
      }
    },
    zy = function (a, b, c, d) {
      var e = C[mq()];
      if ("data" === b.hitType && c) {
        var f = C.gaData,
          h = Number(f && f[d] && f[d].first_hit),
          l = Ja();
        !isNaN(h) && l > h && (b.queueTime = Math.min(2E3, l + 100 - h));
      }
      try {
        var m = "t0" != a.get("name") ? a.get("name") + ".send" : "send";
        e(m, b);
      } catch (n) {}
    },
    ty = {},
    vy = {},
    xy = {},
    uy,
    wy = !1,
    Ay,
    By = function (a, b, c) {
      yy(a, function (d) {
        H(function () {
          zy(d, b, c, a);
        });
      });
    },
    Cy = function () {
      var a = !1;
      ry(function () {
        if (!a) {
          var b = C[mq()];
          ta(b) && (b("ga.require", "__" + rg()), a = !0);
        }
      }, !0);
    },
    Dy = function (a, b, c) {
      var d = qy(),
        e = d[a] = d[a] || {};
      (e.pending_experiments = e.pending_experiments || {})[b] = c;
      e.experiments = e.experiments || {};
      e.experiments[b] = c;
    },
    Ey = function (a) {
      var b = qy()[a];
      return b ? b.hitcount || 0 : 0;
    },
    Hy = function (a, b, c, d, e, f) {
      oy(b, c);
      var h = d;
      if (d) {
        var l = xj(C.location, "host");
        xj(Aj(d), "host") === l && (d = "");
      }
      ry(function (q) {
        q.set("referrer", d ? d : void 0);
      }, !0);
      if (Fy(a)) Be.ga4_referrer_override = h, Gy(a, b, c, e, f);else {
        Dy(a, b, c);
        for (var m = sy(a), n = 0; n < m.length; ++n) m[n].set("referrer", d ? d : void 0);
        if (0 < Ey(a)) {
          var p = m[0];
          p && zy(p, {
            hitType: "data"
          }, !0, a);
        }
      }
    },
    Fy = function (a) {
      return !!a && "G-" === a.substring(0, 2);
    },
    Gy = function (a, b, c, d, e) {
      if (Fy(a)) {
        var f = tr(a, "experiment_impression", {
          experiment_id: b,
          variant_id: c
        });
        wr(f, d, {
          originatingEntity: e,
          deferrable: !0
        });
      } else Dy(a, b, c), 0 < Ey(a) && By(a, {
        hitType: "data"
      }, !0);
    };
  var Ly = function (a, b, c) {
      function d() {
        f || (f = !0, !0 !== Iy && (Iy = !1), Jy(c), us(e));
      }
      Ns = a;
      var e = "OPT-WGJ23BQ_" + b,
        f = !1;
      vs(e);
      C.google_optimize = C.google_optimize || {};
      var h = C.google_optimize;
      h["OPT-WGJ23BQ"] = h["OPT-WGJ23BQ"] || {};
      h["OPT-WGJ23BQ"].optimize_dyn = function (m) {
        m.split(",").forEach(function (n) {
          Ky[n] = !0;
        });
        Iy = !0;
        d();
      };
      Xb(a, void 0, d);
      var l = C[Ae.da];
      C.setTimeout(function () {
        d();
      }, Number(l && l.hide && l.hide.timeout) || 1E4);
    },
    Jy = function (a) {
      if (void 0 !== My) {
        var b = My - Ny,
          c,
          d;
        Iy ? c = Ja() - My : d = Ja() - My;
        Os({
          Ol: b,
          Zk: c,
          Xk: d
        });
      }
      Ky.optimize_ready = !0;
      Ys({
        event: "opt.dyn"
      });
      Ys({
        event: "opt.js"
      });
      if (a && 0 < a.length) {
        var e = {};
        C[Ae.da].forEach(function (f) {
          var h = f.event;
          h && (e[h] = !0);
        });
        a.forEach(function (f) {
          e[f] && Ys({
            event: f
          });
        });
      }
      H(function () {
        rq("_" + rg());
      });
    },
    Oy = function (a, b, c, d, e, f, h, l, m) {
      function n(w, x) {
        x && (t += "&" + w + "=" + encodeURIComponent(x));
      }
      Ny = Ja();
      if (a || b || c) {
        var p = void 0;
        if (b) {
          var q = Rk().aw;
          q && (p = q[0]);
        }
        if (f && (a || c || p)) {
          var r = 1,
            t,
            u = "OPT-WGJ23BQ_" + r++;
          vs(u);
          var v = function (w) {
            Ay = w;
            My = Ja();
            a || b ? (t = "https://www.google-analytics.com/gtm/optimize-dyn.js?id=OPT-WGJ23BQ", a && n("cid", w), n("gclid", p), h && (n("gtm_auth", ""), n("gtm_preview", "")), (h || a) && n("cb", String(Math.random())), Ly(t, r++, e)) : Jy(e);
            us(u);
          };
          Fy(d) ? wr(rr("get", d, "client_id", v), l, {
            originatingEntity: m,
            deferrable: !0
          }) : (xy[d] = !0, yy(d, function (w) {
            return v(w.get("clientId"));
          }));
        } else Jy(e);
      }
    },
    Ky = {},
    Ny,
    My,
    Iy,
    Ns;
  var Py = function (a, b) {
    this.Ce = a;
    this.Md = b;
  };
  Py.prototype.toString = function () {
    var a = "" + this.Ce;
    1 < this.Md && (a = a + "-" + this.Md);
    return a;
  };
  var Qy = function (a, b) {
    this.B = a;
    this.h = b;
  };
  Qy.prototype.toString = function () {
    return this.h + "." + this.B;
  };
  var Ry = function () {
      var a = af("optimize.cookie_path", 2);
      return g(a) ? a : "/";
    },
    Ty = function (a, b) {
      var c = new Sy(a, b);
      c.ol();
      return c;
    },
    Sy = function (a, b) {
      this.I = Math.floor(new Date() / 864E5);
      this.C = a || "auto";
      this.h = b || Ry();
      this.B = new Py(Wi(this.C), Xi(this.h));
      this.K = [];
      this.map = {};
    };
  ca = Sy.prototype;
  ca.Ak = function (a) {
    if (!a) return "";
    var b = this.Of(a);
    return b ? b.B : "";
  };
  ca.Gl = function (a, b, c, d, e) {
    var f, h;
    f = void 0 === f ? 10 : f;
    h = void 0 === h ? 3E3 : h;
    if (!a) return !1;
    void 0 == b && (b = "");
    this.Se(a, new Qy(b, c));
    this.Zj(e);
    return this.Lj(d, f, h);
  };
  ca.Of = function (a) {
    return this.map[a];
  };
  ca.yk = function () {
    for (var a = 0, b = 0; b < this.K.length; b++) "x" !== this.Of(this.K[b]).B[0] && a++;
    return a;
  };
  ca.Se = function (a, b) {
    a && ("" === b.B ? this.mi(a) : (this.map[a] || this.K.push(a), this.map[a] = b));
  };
  ca.Jl = function (a) {
    for (var b = 0; b < a.length; b++) this.Se(a[b][0], a[b][1]);
  };
  ca.mi = function (a) {
    var b = this.K.indexOf(a);
    0 <= b && this.K.splice(b, 1);
    delete this.map[a];
  };
  ca.Al = function () {
    for (var a = [], b = 0; b < this.K.length; b++) {
      var c = this.K[b];
      this.map[c].h < this.I && a.push(c);
    }
    for (var d = 0; d < a.length; d++) this.mi(a[d]);
  };
  ca.xk = function () {
    for (var a = [], b = 0; b < this.K.length; b++) {
      var c = this.K[b];
      a.push([c, this.map[c]]);
    }
    return a;
  };
  ca.pk = function () {
    for (var a = 0, b = 0; b < this.K.length; b++) a = Math.max(a, this.map[this.K[b]].h);
    return 864E5 * a;
  };
  ca.toString = function () {
    if (0 == this.K.length) return "";
    for (var a = [], b = 0; b < this.K.length; b++) {
      var c = this.K[b];
      a.push(c + "." + this.map[c].toString());
    }
    return "GAX1." + this.B.toString() + "." + a.join("!");
  };
  ca.Lj = function (a, b, c) {
    var d = new Date();
    this.Al();
    var e = this.yk();
    if (e > b || e > (a || 10) && Hi().replace(RegExp("(?:;\\s*)?(_gaexp=[^;]+)(?:;\\s*)?"), this.toString()).length > c) return !1;
    d.setTime(this.pk());
    if ("auto" != this.C) return this.B = new Py(Wi(this.C), Xi(this.h)), 0 === Ri("_gaexp", this.toString(), {
      path: this.h,
      domain: this.C,
      expires: d
    });
    for (var f = Oi(), h = 0; h < f.length; h++) if (this.B = new Py(Wi(f[h]), Xi(this.h)), 0 === Ri("_gaexp", this.toString(), {
      path: this.h,
      domain: f[h],
      expires: d
    })) return !0;
    return !1;
  };
  ca.ol = function () {
    var a = Li("_gaexp", this.B.Ce, this.B.Md);
    if (a) {
      var b = this.pl(a);
      b && this.Jl(b.xk());
    }
  };
  ca.pl = function (a) {
    for (var b = new Sy(this.C, this.h), c = a.split("!"), d = 0; d < c.length; d++) {
      var e = c[d].split(".");
      if (3 == e.length) {
        if (isNaN(Number(e[1]))) return;
        b.Se(e[0], new Qy(e[2], Number(e[1])));
      }
    }
    return b;
  };
  ca.Zj = function (a) {
    a = a || {};
    var b = 0;
    a.hasOwnProperty("") && !isNaN(Number(a[""])) && (b = this.I - Da(a[""]));
    for (var c = 0; c < this.K.length; c++) {
      var d = this.K[c];
      if (a.hasOwnProperty(d) && !isNaN(Number(a[d]))) {
        var e = this.Of(d);
        e.h = Da(a[d]) + b;
        this.Se(d, e);
      }
    }
  };
  var Yy = function () {
      Uy = Ja();
      var a = Vy;
      Vy = [];
      for (var b = 0; b < a.length; b++) a[b]();
      Wy && (Wy.takeRecords(), Vy.length || (Wy && (Wy.disconnect(), Wy = null), Xy && (C.clearTimeout(Xy), Xy = null)));
    },
    $y = function () {
      var a = Ja() - Uy;
      a >= Zy ? (Xy && (C.clearTimeout(Xy), Xy = null), Yy()) : Xy || (Xy = C.setTimeout(function () {
        Yy();
        Xy = null;
      }, Zy - a));
    },
    az = function (a) {
      if (!C.MutationObserver) return !1;
      try {
        return Wy || (Wy = new MutationObserver($y), Wy.observe(E.documentElement, {
          subtree: !0,
          childList: !0,
          attributes: !0,
          characterData: !0
        }), Uy = Ja()), Vy.push(a), !0;
      } catch (b) {
        return !1;
      }
    },
    Wy = null,
    Vy = [],
    Zy = 0,
    Uy = 0,
    Xy = null;
  var bz = function (a, b) {
      b && az(a) || C.setTimeout(a, 80);
    },
    iz = function (a) {
      try {
        return Jd(a);
      } catch (b) {
        return null;
      }
    },
    qz = function (a) {
      if (Xp) return !0;
      for (; a;) {
        if (a.nextSibling) return !0;
        a = a.parentNode;
      }
      return !1;
    },
    rz = function (a, b) {
      for (var c = iz(a.ja) || [], d = [], e = 0; e < c.length; e++) {
        var f = c[e];
        if (!f.gtmProgressiveApplied || !f.gtmProgressiveApplied[b]) {
          if (a.Ga && !qz(f)) break;
          d.push(f);
        }
      }
      return d;
    },
    sz = function (a, b) {
      return function () {
        a.gtmProgressiveApplied && delete a.gtmProgressiveApplied[b];
      };
    },
    tz = function (a, b) {
      a.gtmProgressiveApplied || (a.gtmProgressiveApplied = {});
      a.gtmProgressiveApplied[b] = !0;
    },
    uz = function (a, b, c) {
      var d;
      var e = [];
      if (b.Na) {
        if (b.Na.Hf) d = [{
          element: E.head
        }];else {
          var f = rz(b.Na, b.id),
            h = null;
          b.Te && (h = rz(b.Te, b.id + "-t"));
          for (var l = 0; l < f.length; l++) {
            var m = f[l],
              n = void 0;
            if (null != h && (n = h.length > l ? h[l] : null, !n && !Xp && (null === b.Te.fa || b.Oh + e.length < b.Te.fa))) break;
            e.push({
              element: m,
              targetElement: n
            });
          }
          d = e;
        }
      } else d = e;
      var p = d;
      if (!Xp && b.Wj && (!a || null == b.Na.fa || b.Na.fa != b.Ae + p.length)) return !1;
      for (var q = 0; q < p.length; q++) {
        var r = p[q].element,
          t = p[q].targetElement,
          u = void 0;
        b.Ae++;
        tz(r, b.id);
        t && (b.Oh++, u = b.id + "-t", tz(t, u));
        var v = b.bk(r, t);
        ta(v) && b.xc.push(v);
        b.xc.push(sz(r, b.id));
        t && u && b.xc.push(sz(t, u));
      }
      if (b.Na.fa && b.Na.fa == b.Ae || Xp && (!c || b.Ae)) b.finished = !0;
      return !0;
    },
    vz = function (a) {
      for (var b = {}, c = 0; c < a.Ma.length; c++) {
        var d = a.Ma[c];
        if (!d.Na.Hf) {
          var e = b[d.Na.ja];
          e || (e = b[d.Na.ja] = iz(d.Na.ja) || []);
          for (var f = 0; f < e.length; f++) {
            var h = e[f];
            h.gtmProgressiveApplied && h.gtmProgressiveApplied[d.id] || (tz(h, d.id), d.xc.push(sz(h, d.id)));
          }
        }
      }
    },
    wz = function (a) {
      if (!a.mg) {
        for (var b = a.xd; b < a.Ma.length; b++) {
          var c = a.Ma[b],
            d = b == a.xd;
          if (!c.finished && !uz(d, c, a.Ei && a.zi)) break;
          c.finished && d && a.xd++;
        }
        a.Ma.length > a.xd ? (!a.pending && a.Ei && (a.pending = !0, bz(function () {
          a.pending = !1;
          wz(a);
        }, a.zi)), Xp || a.gg || (a.gg = function () {
          H(function () {
            wz(a);
          });
        }, ac(E, "DOMContentLoaded", a.gg))) : vz(a);
      }
    },
    xz = {},
    yz = {},
    zz = void 0,
    Az = function (a, b, c, d) {
      var e = zz;
      if (!Id || !e) return !1;
      var f = {
        id: e.id + ":" + e.Ma.length,
        bk: b,
        xc: [],
        Wj: c,
        Na: a,
        Ae: 0,
        Te: d || null,
        Oh: 0,
        finished: !1
      };
      e.Ma.push(f);
      null === a ? (f.finished = !0, b(null)) : wz(e);
      return !0;
    },
    Bz = function (a) {
      var b = sa;
      try {
        b = Mu(a, "visibility", "hidden", !0);
      } catch (c) {}
      return function () {
        ta(b) && b.apply();
        b = null;
      };
    },
    Cz = function (a, b, c, d) {
      var e = b;
      if (!Xp && !a.Hf) {
        var f = Bz(a.ja);
        Zp.push(f);
        e = function (h, l) {
          var m = b(h, l);
          f();
          return m;
        };
      }
      return Az(a, e, c, d);
    };
  var X = {
    m: {}
  };
  X.m.dee = ["google"], function () {
    (function (a) {
      X.__dee = a;
      X.__dee.o = "dee";
      X.__dee.isVendorTemplate = !0;
      X.__dee.priorityOverride = 0;
      X.__dee.isInfrastructure = !1;
      X.__dee.runInSiloedMode = !1;
    })(function () {
      var a = !1;
      return a ? "gtm.sync" : "gtm.js";
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
  X.m.asprv = ["google"], function () {
    function a() {
      tu({
        event: "optimize.domChange"
      });
      az(a);
    }
    (function (b) {
      X.__asprv = b;
      X.__asprv.o = "asprv";
      X.__asprv.isVendorTemplate = !0;
      X.__asprv.priorityOverride = 0;
      X.__asprv.isInfrastructure = !1;
      X.__asprv.runInSiloedMode = !1;
    })(function (b) {
      var c = b.vtp_globalName,
        d = !!b.vtp_listenForMutations,
        e = su("eventModel");
      c && ly(c);
      d && a();
      var f, h, l;
      e && (f = e.name || "", h = e.callback, l = e.remove);
      if (h && ta(h)) if (f = String(f), !0 !== l) {
        var m = f,
          n = h;
        my(m).push(n);
        if ("" !== m) void 0 !== ky[m] && ny(n, m, ky[m]);else for (var p in ky) void 0 !== ky[p] && ny(n, p, ky[p]);
      } else {
        var q = h,
          r = my(f),
          t = r.indexOf(q);
        0 <= t && r.splice(t, 1);
      }
      b.vtp_gtmOnSuccess();
    });
  }();
  var Ez = {};
  Ez.dataLayer = bf;
  Ez.callback = function (a) {
    Se.hasOwnProperty(a) && ta(Se[a]) && Se[a]();
    delete Se[a];
  };
  Ez.bootstrap = 0;
  Ez._spx = !1;
  function Fz() {
    Be[rg()] = Be[rg()] || Ez;
    xg();
    Bg() || k(Cg(), function (a, b) {
      Kp(a, b.transportUrl, b.context);
      J(92);
    });
    Ma(Te, X.m);
    P(93) && tg(zg());
    $c = kd;
  }
  (function (a) {
    function b() {
      m = E.documentElement.getAttribute("data-tag-assistant-present");
      ht(m) && (l = h.Gj);
    }
    if (!C["__TAGGY_INSTALLED"]) {
      var c = !1;
      if (E.referrer) {
        var d = Aj(E.referrer);
        c = "cct.google" === xj(d, "host");
      }
      if (!c) {
        var e = Ii("googTaggyReferrer");
        c = e.length && e[0].length;
      }
      c && (C["__TAGGY_INSTALLED"] = !0, Xb("https://cct.google/taggy/agent.js"));
    }
    if (Ne) a();else {
      var f = function (u) {
          var v = "GTM",
            w = "GTM";
          He ? (v = "OGT", w = "GTAG") : Ne && (w = v = "OPT");
          var x = C["google.tagmanager.debugui2.queue"];
          x || (x = [], C["google.tagmanager.debugui2.queue"] = x, Xb("https://" + Ae.Sd + "/debug/bootstrap?id=" + kg.ctid + "&src=" + w + "&cond=" + u + "&gtm=" + cj()));
          var y = {
            messageType: "CONTAINER_STARTING",
            data: {
              scriptSource: Rb,
              containerProduct: v,
              debug: !1,
              id: kg.ctid,
              targetRef: {
                ctid: kg.ctid,
                isDestination: ig.ld
              },
              aliases: lg(),
              destinations: og()
            }
          };
          y.data.resume = function () {
            a();
          };
          Ae.Hi && (y.data.initialPublish = !0);
          x.push(y);
        },
        h = {
          Yl: 1,
          Hj: 2,
          Sj: 3,
          Ji: 4,
          Gj: 5
        },
        l = void 0,
        m = void 0,
        n = yj(C.location, "query", !1, void 0, "gtm_debug");
      ht(n) && (l = h.Hj);
      if (!l && E.referrer) {
        var p = Aj(E.referrer);
        "tagassistant.google.com" === xj(p, "host") && (l = h.Sj);
      }
      if (!l) {
        var q = Ii("__TAG_ASSISTANT");
        q.length && q[0].length && (l = h.Ji);
      }
      l || b();
      if (!l && it(m)) {
        var r = function () {
            if (t) return !0;
            t = !0;
            b();
            l && Rb ? f(l) : a();
          },
          t = !1;
        ac(E, "TADebugSignal", function () {
          r();
        }, !1);
        C.setTimeout(function () {
          r();
        }, 200);
      } else l && Rb ? f(l) : a();
    }
  })(function () {
    try {
      vg();
      if (P(29)) {}
      Cf().B();
      ji();
      var b = sg();
      if (fg().canonical[b]) {
        var c = Be.zones;
        c && c.unregisterChild(ng());
      } else {
        Ep();
        for (var d = data.resource || {}, e = d.macros || [], f = 0; f < e.length; f++) Qc.push(e[f]);
        for (var h = d.tags || [], l = 0; l < h.length; l++) Tc.push(h[l]);
        for (var m = d.predicates || [], n = 0; n < m.length; n++) Sc.push(m[n]);
        for (var p = d.rules || [], q = 0; q < p.length; q++) {
          for (var r = p[q], t = {}, u = 0; u < r.length; u++) {
            var v = r[u][0];
            t[v] = Array.prototype.slice.call(r[u], 1);
            Oc(5) || Oc(7) ? ("if" !== v && "unless" !== v || Zc(t[v]), fb("TAGGING", 22)) : Oc(6) && fb("TAGGING", 23);
          }
          Rc.push(t);
        }
        Vc = X;
        Wc = Yu;
        Fz();
        if (P(45)) {
          for (var w = qf["7"], x = w ? w.split("|") : [], y = {}, A = 0; A < x.length; A++) y[x[A]] = !0;
          for (var B = 0; B < Wf.length; B++) {
            var D = Wf[B],
              I = y[D] ? "granted" : "denied";
            Hf().implicit(D, I);
          }
        }
        gt();
        Xp = !1;
        Yp = 0;
        if ("interactive" == E.readyState && !E.createEventObject || "complete" == E.readyState) $p();else {
          ac(E, "DOMContentLoaded", $p);
          ac(E, "readystatechange", $p);
          if (E.createEventObject && E.documentElement.doScroll) {
            var F = !0;
            try {
              F = !C.frameElement;
            } catch (O) {}
            F && aq();
          }
          ac(C, "load", $p);
        }
        ws = !1;
        "complete" === E.readyState ? ys() : ac(C, "load", ys);
        Lg && (Gg(Yg), C.setInterval(Xg, 864E5));
        Gg($u);
        Gg($q);
        Gg(fo);
        Gg(Vr);
        Gg(kr);
        Gg(Pp);
        Gg(ej);
        Gg(Np);
        Gg(gr);
        P(57) && Gg(cr);
        Ys({
          event: "gtm.js"
        });
        Et();
        pf(1);
        Hr();
        Re = Ja();
        Ez.bootstrap = Re;
        if (P(29)) {}
      }
    } catch (O) {
      if (pf(4), Lg) {
        var S = Sg(!0, !0);
        $b(S);
      }
    }
  });
})();