/* @license MIT https://raw.githubusercontent.com/jquery/jquery/3.7.0/LICENSE.txt */
/*! jQuery v3.7.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function (e, t) {
  "use strict";

  "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e);
  } : t(e);
}("undefined" != typeof window ? window : this, function (ie, e) {
  "use strict";

  var oe = [],
    r = Object.getPrototypeOf,
    ae = oe.slice,
    g = oe.flat ? function (e) {
      return oe.flat.call(e);
    } : function (e) {
      return oe.concat.apply([], e);
    },
    s = oe.push,
    se = oe.indexOf,
    n = {},
    i = n.toString,
    ue = n.hasOwnProperty,
    o = ue.toString,
    a = o.call(Object),
    le = {},
    v = function (e) {
      return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item;
    },
    y = function (e) {
      return null != e && e === e.window;
    },
    C = ie.document,
    u = {
      type: !0,
      src: !0,
      nonce: !0,
      noModule: !0
    };
  function m(e, t, n) {
    var r,
      i,
      o = (n = n || C).createElement("script");
    if (o.text = e, t) for (r in u) (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
    n.head.appendChild(o).parentNode.removeChild(o);
  }
  function x(e) {
    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[i.call(e)] || "object" : typeof e;
  }
  var t = "3.7.0",
    l = /HTML$/i,
    ce = function (e, t) {
      return new ce.fn.init(e, t);
    };
  function c(e) {
    var t = !!e && "length" in e && e.length,
      n = x(e);
    return !v(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e);
  }
  function fe(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  ce.fn = ce.prototype = {
    jquery: t,
    constructor: ce,
    length: 0,
    toArray: function () {
      return ae.call(this);
    },
    get: function (e) {
      return null == e ? ae.call(this) : e < 0 ? this[e + this.length] : this[e];
    },
    pushStack: function (e) {
      var t = ce.merge(this.constructor(), e);
      return t.prevObject = this, t;
    },
    each: function (e) {
      return ce.each(this, e);
    },
    map: function (n) {
      return this.pushStack(ce.map(this, function (e, t) {
        return n.call(e, t, e);
      }));
    },
    slice: function () {
      return this.pushStack(ae.apply(this, arguments));
    },
    first: function () {
      return this.eq(0);
    },
    last: function () {
      return this.eq(-1);
    },
    even: function () {
      return this.pushStack(ce.grep(this, function (e, t) {
        return (t + 1) % 2;
      }));
    },
    odd: function () {
      return this.pushStack(ce.grep(this, function (e, t) {
        return t % 2;
      }));
    },
    eq: function (e) {
      var t = this.length,
        n = +e + (e < 0 ? t : 0);
      return this.pushStack(0 <= n && n < t ? [this[n]] : []);
    },
    end: function () {
      return this.prevObject || this.constructor();
    },
    push: s,
    sort: oe.sort,
    splice: oe.splice
  }, ce.extend = ce.fn.extend = function () {
    var e,
      t,
      n,
      r,
      i,
      o,
      a = arguments[0] || {},
      s = 1,
      u = arguments.length,
      l = !1;
    for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || v(a) || (a = {}), s === u && (a = this, s--); s < u; s++) if (null != (e = arguments[s])) for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (ce.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || ce.isPlainObject(n) ? n : {}, i = !1, a[t] = ce.extend(l, o, r)) : void 0 !== r && (a[t] = r));
    return a;
  }, ce.extend({
    expando: "jQuery" + (t + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function (e) {
      throw new Error(e);
    },
    noop: function () {},
    isPlainObject: function (e) {
      var t, n;
      return !(!e || "[object Object]" !== i.call(e)) && (!(t = r(e)) || "function" == typeof (n = ue.call(t, "constructor") && t.constructor) && o.call(n) === a);
    },
    isEmptyObject: function (e) {
      var t;
      for (t in e) return !1;
      return !0;
    },
    globalEval: function (e, t, n) {
      m(e, {
        nonce: t && t.nonce
      }, n);
    },
    each: function (e, t) {
      var n,
        r = 0;
      if (c(e)) {
        for (n = e.length; r < n; r++) if (!1 === t.call(e[r], r, e[r])) break;
      } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
      return e;
    },
    text: function (e) {
      var t,
        n = "",
        r = 0,
        i = e.nodeType;
      if (i) {
        if (1 === i || 9 === i || 11 === i) return e.textContent;
        if (3 === i || 4 === i) return e.nodeValue;
      } else while (t = e[r++]) n += ce.text(t);
      return n;
    },
    makeArray: function (e, t) {
      var n = t || [];
      return null != e && (c(Object(e)) ? ce.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n;
    },
    inArray: function (e, t, n) {
      return null == t ? -1 : se.call(t, e, n);
    },
    isXMLDoc: function (e) {
      var t = e && e.namespaceURI,
        n = e && (e.ownerDocument || e).documentElement;
      return !l.test(t || n && n.nodeName || "HTML");
    },
    merge: function (e, t) {
      for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
      return e.length = i, e;
    },
    grep: function (e, t, n) {
      for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
      return r;
    },
    map: function (e, t, n) {
      var r,
        i,
        o = 0,
        a = [];
      if (c(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
      return g(a);
    },
    guid: 1,
    support: le
  }), "function" == typeof Symbol && (ce.fn[Symbol.iterator] = oe[Symbol.iterator]), ce.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    n["[object " + t + "]"] = t.toLowerCase();
  });
  var pe = oe.pop,
    de = oe.sort,
    he = oe.splice,
    ge = "[\\x20\\t\\r\\n\\f]",
    ve = new RegExp("^" + ge + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ge + "+$", "g");
  ce.contains = function (e, t) {
    var n = t && t.parentNode;
    return e === n || !(!n || 1 !== n.nodeType || !(e.contains ? e.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)));
  };
  var f = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
  function p(e, t) {
    return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
  }
  ce.escapeSelector = function (e) {
    return (e + "").replace(f, p);
  };
  var ye = C,
    me = s;
  !function () {
    var e,
      b,
      w,
      o,
      a,
      T,
      r,
      C,
      d,
      i,
      k = me,
      S = ce.expando,
      E = 0,
      n = 0,
      s = W(),
      c = W(),
      u = W(),
      h = W(),
      l = function (e, t) {
        return e === t && (a = !0), 0;
      },
      f = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      t = "(?:\\\\[\\da-fA-F]{1,6}" + ge + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      p = "\\[" + ge + "*(" + t + ")(?:" + ge + "*([*^$|!~]?=)" + ge + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + t + "))|)" + ge + "*\\]",
      g = ":(" + t + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + p + ")*)|.*)\\)|)",
      v = new RegExp(ge + "+", "g"),
      y = new RegExp("^" + ge + "*," + ge + "*"),
      m = new RegExp("^" + ge + "*([>+~]|" + ge + ")" + ge + "*"),
      x = new RegExp(ge + "|>"),
      j = new RegExp(g),
      A = new RegExp("^" + t + "$"),
      D = {
        ID: new RegExp("^#(" + t + ")"),
        CLASS: new RegExp("^\\.(" + t + ")"),
        TAG: new RegExp("^(" + t + "|[*])"),
        ATTR: new RegExp("^" + p),
        PSEUDO: new RegExp("^" + g),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ge + "*(even|odd|(([+-]|)(\\d*)n|)" + ge + "*(?:([+-]|)" + ge + "*(\\d+)|))" + ge + "*\\)|)", "i"),
        bool: new RegExp("^(?:" + f + ")$", "i"),
        needsContext: new RegExp("^" + ge + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ge + "*((?:-\\d)?\\d*)" + ge + "*\\)|)(?=[^-]|$)", "i")
      },
      N = /^(?:input|select|textarea|button)$/i,
      q = /^h\d$/i,
      L = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      H = /[+~]/,
      O = new RegExp("\\\\[\\da-fA-F]{1,6}" + ge + "?|\\\\([^\\r\\n\\f])", "g"),
      P = function (e, t) {
        var n = "0x" + e.slice(1) - 65536;
        return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320));
      },
      R = function () {
        V();
      },
      M = J(function (e) {
        return !0 === e.disabled && fe(e, "fieldset");
      }, {
        dir: "parentNode",
        next: "legend"
      });
    try {
      k.apply(oe = ae.call(ye.childNodes), ye.childNodes), oe[ye.childNodes.length].nodeType;
    } catch (e) {
      k = {
        apply: function (e, t) {
          me.apply(e, ae.call(t));
        },
        call: function (e) {
          me.apply(e, ae.call(arguments, 1));
        }
      };
    }
    function I(t, e, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = e && e.ownerDocument,
        p = e ? e.nodeType : 9;
      if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
      if (!r && (V(e), e = e || T, C)) {
        if (11 !== p && (u = L.exec(t))) if (i = u[1]) {
          if (9 === p) {
            if (!(a = e.getElementById(i))) return n;
            if (a.id === i) return k.call(n, a), n;
          } else if (f && (a = f.getElementById(i)) && I.contains(e, a) && a.id === i) return k.call(n, a), n;
        } else {
          if (u[2]) return k.apply(n, e.getElementsByTagName(t)), n;
          if ((i = u[3]) && e.getElementsByClassName) return k.apply(n, e.getElementsByClassName(i)), n;
        }
        if (!(h[t + " "] || d && d.test(t))) {
          if (c = t, f = e, 1 === p && (x.test(t) || m.test(t))) {
            (f = H.test(t) && z(e.parentNode) || e) == e && le.scope || ((s = e.getAttribute("id")) ? s = ce.escapeSelector(s) : e.setAttribute("id", s = S)), o = (l = Y(t)).length;
            while (o--) l[o] = (s ? "#" + s : ":scope") + " " + Q(l[o]);
            c = l.join(",");
          }
          try {
            return k.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            h(t, !0);
          } finally {
            s === S && e.removeAttribute("id");
          }
        }
      }
      return re(t.replace(ve, "$1"), e, n, r);
    }
    function W() {
      var r = [];
      return function e(t, n) {
        return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n;
      };
    }
    function F(e) {
      return e[S] = !0, e;
    }
    function $(e) {
      var t = T.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }
    function B(t) {
      return function (e) {
        return fe(e, "input") && e.type === t;
      };
    }
    function _(t) {
      return function (e) {
        return (fe(e, "input") || fe(e, "button")) && e.type === t;
      };
    }
    function X(t) {
      return function (e) {
        return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && M(e) === t : e.disabled === t : "label" in e && e.disabled === t;
      };
    }
    function U(a) {
      return F(function (o) {
        return o = +o, F(function (e, t) {
          var n,
            r = a([], e.length, o),
            i = r.length;
          while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n]));
        });
      });
    }
    function z(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }
    function V(e) {
      var t,
        n = e ? e.ownerDocument || e : ye;
      return n != T && 9 === n.nodeType && n.documentElement && (r = (T = n).documentElement, C = !ce.isXMLDoc(T), i = r.matches || r.webkitMatchesSelector || r.msMatchesSelector, ye != T && (t = T.defaultView) && t.top !== t && t.addEventListener("unload", R), le.getById = $(function (e) {
        return r.appendChild(e).id = ce.expando, !T.getElementsByName || !T.getElementsByName(ce.expando).length;
      }), le.disconnectedMatch = $(function (e) {
        return i.call(e, "*");
      }), le.scope = $(function () {
        return T.querySelectorAll(":scope");
      }), le.cssHas = $(function () {
        try {
          return T.querySelector(":has(*,:jqfake)"), !1;
        } catch (e) {
          return !0;
        }
      }), le.getById ? (b.filter.ID = function (e) {
        var t = e.replace(O, P);
        return function (e) {
          return e.getAttribute("id") === t;
        };
      }, b.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && C) {
          var n = t.getElementById(e);
          return n ? [n] : [];
        }
      }) : (b.filter.ID = function (e) {
        var n = e.replace(O, P);
        return function (e) {
          var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
          return t && t.value === n;
        };
      }, b.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && C) {
          var n,
            r,
            i,
            o = t.getElementById(e);
          if (o) {
            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            i = t.getElementsByName(e), r = 0;
            while (o = i[r++]) if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
          }
          return [];
        }
      }), b.find.TAG = function (e, t) {
        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : t.querySelectorAll(e);
      }, b.find.CLASS = function (e, t) {
        if ("undefined" != typeof t.getElementsByClassName && C) return t.getElementsByClassName(e);
      }, d = [], $(function (e) {
        var t;
        r.appendChild(e).innerHTML = "<a id='" + S + "' href='' disabled='disabled'></a><select id='" + S + "-\r\\' disabled='disabled'><option selected=''></option></select>", e.querySelectorAll("[selected]").length || d.push("\\[" + ge + "*(?:value|" + f + ")"), e.querySelectorAll("[id~=" + S + "-]").length || d.push("~="), e.querySelectorAll("a#" + S + "+*").length || d.push(".#.+[+~]"), e.querySelectorAll(":checked").length || d.push(":checked"), (t = T.createElement("input")).setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), r.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && d.push(":enabled", ":disabled"), (t = T.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || d.push("\\[" + ge + "*name" + ge + "*=" + ge + "*(?:''|\"\")");
      }), le.cssHas || d.push(":has"), d = d.length && new RegExp(d.join("|")), l = function (e, t) {
        if (e === t) return a = !0, 0;
        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !le.sortDetached && t.compareDocumentPosition(e) === n ? e === T || e.ownerDocument == ye && I.contains(ye, e) ? -1 : t === T || t.ownerDocument == ye && I.contains(ye, t) ? 1 : o ? se.call(o, e) - se.call(o, t) : 0 : 4 & n ? -1 : 1);
      }), T;
    }
    for (e in I.matches = function (e, t) {
      return I(e, null, null, t);
    }, I.matchesSelector = function (e, t) {
      if (V(e), C && !h[t + " "] && (!d || !d.test(t))) try {
        var n = i.call(e, t);
        if (n || le.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
      } catch (e) {
        h(t, !0);
      }
      return 0 < I(t, T, null, [e]).length;
    }, I.contains = function (e, t) {
      return (e.ownerDocument || e) != T && V(e), ce.contains(e, t);
    }, I.attr = function (e, t) {
      (e.ownerDocument || e) != T && V(e);
      var n = b.attrHandle[t.toLowerCase()],
        r = n && ue.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !C) : void 0;
      return void 0 !== r ? r : e.getAttribute(t);
    }, I.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, ce.uniqueSort = function (e) {
      var t,
        n = [],
        r = 0,
        i = 0;
      if (a = !le.sortStable, o = !le.sortStable && ae.call(e, 0), de.call(e, l), a) {
        while (t = e[i++]) t === e[i] && (r = n.push(i));
        while (r--) he.call(e, n[r], 1);
      }
      return o = null, e;
    }, ce.fn.uniqueSort = function () {
      return this.pushStack(ce.uniqueSort(ae.apply(this)));
    }, (b = ce.expr = {
      cacheLength: 50,
      createPseudo: F,
      match: D,
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
          return e[1] = e[1].replace(O, P), e[3] = (e[3] || e[4] || e[5] || "").replace(O, P), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        },
        CHILD: function (e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || I.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && I.error(e[0]), e;
        },
        PSEUDO: function (e) {
          var t,
            n = !e[6] && e[2];
          return D.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && j.test(n) && (t = Y(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
        }
      },
      filter: {
        TAG: function (e) {
          var t = e.replace(O, P).toLowerCase();
          return "*" === e ? function () {
            return !0;
          } : function (e) {
            return fe(e, t);
          };
        },
        CLASS: function (e) {
          var t = s[e + " "];
          return t || (t = new RegExp("(^|" + ge + ")" + e + "(" + ge + "|$)")) && s(e, function (e) {
            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
          });
        },
        ATTR: function (n, r, i) {
          return function (e) {
            var t = I.attr(e, n);
            return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(v, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"));
          };
        },
        CHILD: function (d, e, t, h, g) {
          var v = "nth" !== d.slice(0, 3),
            y = "last" !== d.slice(-4),
            m = "of-type" === e;
          return 1 === h && 0 === g ? function (e) {
            return !!e.parentNode;
          } : function (e, t, n) {
            var r,
              i,
              o,
              a,
              s,
              u = v !== y ? "nextSibling" : "previousSibling",
              l = e.parentNode,
              c = m && e.nodeName.toLowerCase(),
              f = !n && !m,
              p = !1;
            if (l) {
              if (v) {
                while (u) {
                  o = e;
                  while (o = o[u]) if (m ? fe(o, c) : 1 === o.nodeType) return !1;
                  s = u = "only" === d && !s && "nextSibling";
                }
                return !0;
              }
              if (s = [y ? l.firstChild : l.lastChild], y && f) {
                p = (a = (r = (i = l[S] || (l[S] = {}))[d] || [])[0] === E && r[1]) && r[2], o = a && l.childNodes[a];
                while (o = ++a && o && o[u] || (p = a = 0) || s.pop()) if (1 === o.nodeType && ++p && o === e) {
                  i[d] = [E, a, p];
                  break;
                }
              } else if (f && (p = a = (r = (i = e[S] || (e[S] = {}))[d] || [])[0] === E && r[1]), !1 === p) while (o = ++a && o && o[u] || (p = a = 0) || s.pop()) if ((m ? fe(o, c) : 1 === o.nodeType) && ++p && (f && ((i = o[S] || (o[S] = {}))[d] = [E, p]), o === e)) break;
              return (p -= g) === h || p % h == 0 && 0 <= p / h;
            }
          };
        },
        PSEUDO: function (e, o) {
          var t,
            a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || I.error("unsupported pseudo: " + e);
          return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? F(function (e, t) {
            var n,
              r = a(e, o),
              i = r.length;
            while (i--) e[n = se.call(e, r[i])] = !(t[n] = r[i]);
          }) : function (e) {
            return a(e, 0, t);
          }) : a;
        }
      },
      pseudos: {
        not: F(function (e) {
          var r = [],
            i = [],
            s = ne(e.replace(ve, "$1"));
          return s[S] ? F(function (e, t, n, r) {
            var i,
              o = s(e, null, r, []),
              a = e.length;
            while (a--) (i = o[a]) && (e[a] = !(t[a] = i));
          }) : function (e, t, n) {
            return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop();
          };
        }),
        has: F(function (t) {
          return function (e) {
            return 0 < I(t, e).length;
          };
        }),
        contains: F(function (t) {
          return t = t.replace(O, P), function (e) {
            return -1 < (e.textContent || ce.text(e)).indexOf(t);
          };
        }),
        lang: F(function (n) {
          return A.test(n || "") || I.error("unsupported lang: " + n), n = n.replace(O, P).toLowerCase(), function (e) {
            var t;
            do {
              if (t = C ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-");
            } while ((e = e.parentNode) && 1 === e.nodeType);
            return !1;
          };
        }),
        target: function (e) {
          var t = ie.location && ie.location.hash;
          return t && t.slice(1) === e.id;
        },
        root: function (e) {
          return e === r;
        },
        focus: function (e) {
          return e === function () {
            try {
              return T.activeElement;
            } catch (e) {}
          }() && T.hasFocus() && !!(e.type || e.href || ~e.tabIndex);
        },
        enabled: X(!1),
        disabled: X(!0),
        checked: function (e) {
          return fe(e, "input") && !!e.checked || fe(e, "option") && !!e.selected;
        },
        selected: function (e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        },
        empty: function (e) {
          for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
          return !0;
        },
        parent: function (e) {
          return !b.pseudos.empty(e);
        },
        header: function (e) {
          return q.test(e.nodeName);
        },
        input: function (e) {
          return N.test(e.nodeName);
        },
        button: function (e) {
          return fe(e, "input") && "button" === e.type || fe(e, "button");
        },
        text: function (e) {
          var t;
          return fe(e, "input") && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
        },
        first: U(function () {
          return [0];
        }),
        last: U(function (e, t) {
          return [t - 1];
        }),
        eq: U(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }),
        even: U(function (e, t) {
          for (var n = 0; n < t; n += 2) e.push(n);
          return e;
        }),
        odd: U(function (e, t) {
          for (var n = 1; n < t; n += 2) e.push(n);
          return e;
        }),
        lt: U(function (e, t, n) {
          var r;
          for (r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
          return e;
        }),
        gt: U(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
          return e;
        })
      }
    }).pseudos.nth = b.pseudos.eq, {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) b.pseudos[e] = B(e);
    for (e in {
      submit: !0,
      reset: !0
    }) b.pseudos[e] = _(e);
    function G() {}
    function Y(e, t) {
      var n,
        r,
        i,
        o,
        a,
        s,
        u,
        l = c[e + " "];
      if (l) return t ? 0 : l.slice(0);
      a = e, s = [], u = b.preFilter;
      while (a) {
        for (o in n && !(r = y.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = m.exec(a)) && (n = r.shift(), i.push({
          value: n,
          type: r[0].replace(ve, " ")
        }), a = a.slice(n.length)), b.filter) !(r = D[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
          value: n,
          type: o,
          matches: r
        }), a = a.slice(n.length));
        if (!n) break;
      }
      return t ? a.length : a ? I.error(e) : c(e, s).slice(0);
    }
    function Q(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r;
    }
    function J(a, e, t) {
      var s = e.dir,
        u = e.next,
        l = u || s,
        c = t && "parentNode" === l,
        f = n++;
      return e.first ? function (e, t, n) {
        while (e = e[s]) if (1 === e.nodeType || c) return a(e, t, n);
        return !1;
      } : function (e, t, n) {
        var r,
          i,
          o = [E, f];
        if (n) {
          while (e = e[s]) if ((1 === e.nodeType || c) && a(e, t, n)) return !0;
        } else while (e = e[s]) if (1 === e.nodeType || c) if (i = e[S] || (e[S] = {}), u && fe(e, u)) e = e[s] || e;else {
          if ((r = i[l]) && r[0] === E && r[1] === f) return o[2] = r[2];
          if ((i[l] = o)[2] = a(e, t, n)) return !0;
        }
        return !1;
      };
    }
    function K(i) {
      return 1 < i.length ? function (e, t, n) {
        var r = i.length;
        while (r--) if (!i[r](e, t, n)) return !1;
        return !0;
      } : i[0];
    }
    function Z(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
      return a;
    }
    function ee(d, h, g, v, y, e) {
      return v && !v[S] && (v = ee(v)), y && !y[S] && (y = ee(y, e)), F(function (e, t, n, r) {
        var i,
          o,
          a,
          s,
          u = [],
          l = [],
          c = t.length,
          f = e || function (e, t, n) {
            for (var r = 0, i = t.length; r < i; r++) I(e, t[r], n);
            return n;
          }(h || "*", n.nodeType ? [n] : n, []),
          p = !d || !e && h ? f : Z(f, u, d, n, r);
        if (g ? g(p, s = y || (e ? d : c || v) ? [] : t, n, r) : s = p, v) {
          i = Z(s, l), v(i, [], n, r), o = i.length;
          while (o--) (a = i[o]) && (s[l[o]] = !(p[l[o]] = a));
        }
        if (e) {
          if (y || d) {
            if (y) {
              i = [], o = s.length;
              while (o--) (a = s[o]) && i.push(p[o] = a);
              y(null, s = [], i, r);
            }
            o = s.length;
            while (o--) (a = s[o]) && -1 < (i = y ? se.call(e, a) : u[o]) && (e[i] = !(t[i] = a));
          }
        } else s = Z(s === t ? s.splice(c, s.length) : s), y ? y(null, t, s, r) : k.apply(t, s);
      });
    }
    function te(e) {
      for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = J(function (e) {
          return e === i;
        }, a, !0), l = J(function (e) {
          return -1 < se.call(i, e);
        }, a, !0), c = [function (e, t, n) {
          var r = !o && (n || t != w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
          return i = null, r;
        }]; s < r; s++) if (t = b.relative[e[s].type]) c = [J(K(c), t)];else {
        if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
          for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break;
          return ee(1 < s && K(c), 1 < s && Q(e.slice(0, s - 1).concat({
            value: " " === e[s - 2].type ? "*" : ""
          })).replace(ve, "$1"), t, s < n && te(e.slice(s, n)), n < r && te(e = e.slice(n)), n < r && Q(e));
        }
        c.push(t);
      }
      return K(c);
    }
    function ne(e, t) {
      var n,
        v,
        y,
        m,
        x,
        r,
        i = [],
        o = [],
        a = u[e + " "];
      if (!a) {
        t || (t = Y(e)), n = t.length;
        while (n--) (a = te(t[n]))[S] ? i.push(a) : o.push(a);
        (a = u(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function (e, t, n, r, i) {
          var o,
            a,
            s,
            u = 0,
            l = "0",
            c = e && [],
            f = [],
            p = w,
            d = e || x && b.find.TAG("*", i),
            h = E += null == p ? 1 : Math.random() || .1,
            g = d.length;
          for (i && (w = t == T || t || i); l !== g && null != (o = d[l]); l++) {
            if (x && o) {
              a = 0, t || o.ownerDocument == T || (V(o), n = !C);
              while (s = v[a++]) if (s(o, t || T, n)) {
                k.call(r, o);
                break;
              }
              i && (E = h);
            }
            m && ((o = !s && o) && u--, e && c.push(o));
          }
          if (u += l, m && l !== u) {
            a = 0;
            while (s = y[a++]) s(c, f, t, n);
            if (e) {
              if (0 < u) while (l--) c[l] || f[l] || (f[l] = pe.call(r));
              f = Z(f);
            }
            k.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && ce.uniqueSort(r);
          }
          return i && (E = h, w = p), c;
        }, m ? F(r) : r))).selector = e;
      }
      return a;
    }
    function re(e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l = "function" == typeof e && e,
        c = !r && Y(e = l.selector || e);
      if (n = n || [], 1 === c.length) {
        if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && C && b.relative[o[1].type]) {
          if (!(t = (b.find.ID(a.matches[0].replace(O, P), t) || [])[0])) return n;
          l && (t = t.parentNode), e = e.slice(o.shift().value.length);
        }
        i = D.needsContext.test(e) ? 0 : o.length;
        while (i--) {
          if (a = o[i], b.relative[s = a.type]) break;
          if ((u = b.find[s]) && (r = u(a.matches[0].replace(O, P), H.test(o[0].type) && z(t.parentNode) || t))) {
            if (o.splice(i, 1), !(e = r.length && Q(o))) return k.apply(n, r), n;
            break;
          }
        }
      }
      return (l || ne(e, c))(r, t, !C, n, !t || H.test(e) && z(t.parentNode) || t), n;
    }
    G.prototype = b.filters = b.pseudos, b.setFilters = new G(), le.sortStable = S.split("").sort(l).join("") === S, V(), le.sortDetached = $(function (e) {
      return 1 & e.compareDocumentPosition(T.createElement("fieldset"));
    }), ce.find = I, ce.expr[":"] = ce.expr.pseudos, ce.unique = ce.uniqueSort, I.compile = ne, I.select = re, I.setDocument = V, I.escape = ce.escapeSelector, I.getText = ce.text, I.isXML = ce.isXMLDoc, I.selectors = ce.expr, I.support = ce.support, I.uniqueSort = ce.uniqueSort;
  }();
  var d = function (e, t, n) {
      var r = [],
        i = void 0 !== n;
      while ((e = e[t]) && 9 !== e.nodeType) if (1 === e.nodeType) {
        if (i && ce(e).is(n)) break;
        r.push(e);
      }
      return r;
    },
    h = function (e, t) {
      for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    b = ce.expr.match.needsContext,
    w = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function T(e, n, r) {
    return v(n) ? ce.grep(e, function (e, t) {
      return !!n.call(e, t, e) !== r;
    }) : n.nodeType ? ce.grep(e, function (e) {
      return e === n !== r;
    }) : "string" != typeof n ? ce.grep(e, function (e) {
      return -1 < se.call(n, e) !== r;
    }) : ce.filter(n, e, r);
  }
  ce.filter = function (e, t, n) {
    var r = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? ce.find.matchesSelector(r, e) ? [r] : [] : ce.find.matches(e, ce.grep(t, function (e) {
      return 1 === e.nodeType;
    }));
  }, ce.fn.extend({
    find: function (e) {
      var t,
        n,
        r = this.length,
        i = this;
      if ("string" != typeof e) return this.pushStack(ce(e).filter(function () {
        for (t = 0; t < r; t++) if (ce.contains(i[t], this)) return !0;
      }));
      for (n = this.pushStack([]), t = 0; t < r; t++) ce.find(e, i[t], n);
      return 1 < r ? ce.uniqueSort(n) : n;
    },
    filter: function (e) {
      return this.pushStack(T(this, e || [], !1));
    },
    not: function (e) {
      return this.pushStack(T(this, e || [], !0));
    },
    is: function (e) {
      return !!T(this, "string" == typeof e && b.test(e) ? ce(e) : e || [], !1).length;
    }
  });
  var k,
    S = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (ce.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;
    if (n = n || k, "string" == typeof e) {
      if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : S.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (r[1]) {
        if (t = t instanceof ce ? t[0] : t, ce.merge(this, ce.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : C, !0)), w.test(r[1]) && ce.isPlainObject(t)) for (r in t) v(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this;
      }
      return (i = C.getElementById(r[2])) && (this[0] = i, this.length = 1), this;
    }
    return e.nodeType ? (this[0] = e, this.length = 1, this) : v(e) ? void 0 !== n.ready ? n.ready(e) : e(ce) : ce.makeArray(e, this);
  }).prototype = ce.fn, k = ce(C);
  var E = /^(?:parents|prev(?:Until|All))/,
    j = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };
  function A(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType);
    return e;
  }
  ce.fn.extend({
    has: function (e) {
      var t = ce(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (ce.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        a = "string" != typeof e && ce(e);
      if (!b.test(e)) for (; r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && ce.find.matchesSelector(n, e))) {
        o.push(n);
        break;
      }
      return this.pushStack(1 < o.length ? ce.uniqueSort(o) : o);
    },
    index: function (e) {
      return e ? "string" == typeof e ? se.call(ce(e), this[0]) : se.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function (e, t) {
      return this.pushStack(ce.uniqueSort(ce.merge(this.get(), ce(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }
  }), ce.each({
    parent: function (e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null;
    },
    parents: function (e) {
      return d(e, "parentNode");
    },
    parentsUntil: function (e, t, n) {
      return d(e, "parentNode", n);
    },
    next: function (e) {
      return A(e, "nextSibling");
    },
    prev: function (e) {
      return A(e, "previousSibling");
    },
    nextAll: function (e) {
      return d(e, "nextSibling");
    },
    prevAll: function (e) {
      return d(e, "previousSibling");
    },
    nextUntil: function (e, t, n) {
      return d(e, "nextSibling", n);
    },
    prevUntil: function (e, t, n) {
      return d(e, "previousSibling", n);
    },
    siblings: function (e) {
      return h((e.parentNode || {}).firstChild, e);
    },
    children: function (e) {
      return h(e.firstChild);
    },
    contents: function (e) {
      return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (fe(e, "template") && (e = e.content || e), ce.merge([], e.childNodes));
    }
  }, function (r, i) {
    ce.fn[r] = function (e, t) {
      var n = ce.map(this, i, e);
      return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = ce.filter(t, n)), 1 < this.length && (j[r] || ce.uniqueSort(n), E.test(r) && n.reverse()), this.pushStack(n);
    };
  });
  var D = /[^\x20\t\r\n\f]+/g;
  function N(e) {
    return e;
  }
  function q(e) {
    throw e;
  }
  function L(e, t, n, r) {
    var i;
    try {
      e && v(i = e.promise) ? i.call(e).done(t).fail(n) : e && v(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  ce.Callbacks = function (r) {
    var e, n;
    r = "string" == typeof r ? (e = r, n = {}, ce.each(e.match(D) || [], function (e, t) {
      n[t] = !0;
    }), n) : ce.extend({}, r);
    var i,
      t,
      o,
      a,
      s = [],
      u = [],
      l = -1,
      c = function () {
        for (a = a || r.once, o = i = !0; u.length; l = -1) {
          t = u.shift();
          while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1);
        }
        r.memory || (t = !1), i = !1, a && (s = t ? [] : "");
      },
      f = {
        add: function () {
          return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
            ce.each(e, function (e, t) {
              v(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== x(t) && n(t);
            });
          }(arguments), t && !i && c()), this;
        },
        remove: function () {
          return ce.each(arguments, function (e, t) {
            var n;
            while (-1 < (n = ce.inArray(t, s, n))) s.splice(n, 1), n <= l && l--;
          }), this;
        },
        has: function (e) {
          return e ? -1 < ce.inArray(e, s) : 0 < s.length;
        },
        empty: function () {
          return s && (s = []), this;
        },
        disable: function () {
          return a = u = [], s = t = "", this;
        },
        disabled: function () {
          return !s;
        },
        lock: function () {
          return a = u = [], t || i || (s = t = ""), this;
        },
        locked: function () {
          return !!a;
        },
        fireWith: function (e, t) {
          return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this;
        },
        fire: function () {
          return f.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!o;
        }
      };
    return f;
  }, ce.extend({
    Deferred: function (e) {
      var o = [["notify", "progress", ce.Callbacks("memory"), ce.Callbacks("memory"), 2], ["resolve", "done", ce.Callbacks("once memory"), ce.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", ce.Callbacks("once memory"), ce.Callbacks("once memory"), 1, "rejected"]],
        i = "pending",
        a = {
          state: function () {
            return i;
          },
          always: function () {
            return s.done(arguments).fail(arguments), this;
          },
          "catch": function (e) {
            return a.then(null, e);
          },
          pipe: function () {
            var i = arguments;
            return ce.Deferred(function (r) {
              ce.each(o, function (e, t) {
                var n = v(i[t[4]]) && i[t[4]];
                s[t[1]](function () {
                  var e = n && n.apply(this, arguments);
                  e && v(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments);
                });
              }), i = null;
            }).promise();
          },
          then: function (t, n, r) {
            var u = 0;
            function l(i, o, a, s) {
              return function () {
                var n = this,
                  r = arguments,
                  e = function () {
                    var e, t;
                    if (!(i < u)) {
                      if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                      t = e && ("object" == typeof e || "function" == typeof e) && e.then, v(t) ? s ? t.call(e, l(u, o, N, s), l(u, o, q, s)) : (u++, t.call(e, l(u, o, N, s), l(u, o, q, s), l(u, o, N, o.notifyWith))) : (a !== N && (n = void 0, r = [e]), (s || o.resolveWith)(n, r));
                    }
                  },
                  t = s ? e : function () {
                    try {
                      e();
                    } catch (e) {
                      ce.Deferred.exceptionHook && ce.Deferred.exceptionHook(e, t.error), u <= i + 1 && (a !== q && (n = void 0, r = [e]), o.rejectWith(n, r));
                    }
                  };
                i ? t() : (ce.Deferred.getErrorHook ? t.error = ce.Deferred.getErrorHook() : ce.Deferred.getStackHook && (t.error = ce.Deferred.getStackHook()), ie.setTimeout(t));
              };
            }
            return ce.Deferred(function (e) {
              o[0][3].add(l(0, e, v(r) ? r : N, e.notifyWith)), o[1][3].add(l(0, e, v(t) ? t : N)), o[2][3].add(l(0, e, v(n) ? n : q));
            }).promise();
          },
          promise: function (e) {
            return null != e ? ce.extend(e, a) : a;
          }
        },
        s = {};
      return ce.each(o, function (e, t) {
        var n = t[2],
          r = t[5];
        a[t[1]] = n.add, r && n.add(function () {
          i = r;
        }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function () {
          return s[t[0] + "With"](this === s ? void 0 : this, arguments), this;
        }, s[t[0] + "With"] = n.fireWith;
      }), a.promise(s), e && e.call(s, s), s;
    },
    when: function (e) {
      var n = arguments.length,
        t = n,
        r = Array(t),
        i = ae.call(arguments),
        o = ce.Deferred(),
        a = function (t) {
          return function (e) {
            r[t] = this, i[t] = 1 < arguments.length ? ae.call(arguments) : e, --n || o.resolveWith(r, i);
          };
        };
      if (n <= 1 && (L(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || v(i[t] && i[t].then))) return o.then();
      while (t--) L(i[t], a(t), o.reject);
      return o.promise();
    }
  });
  var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  ce.Deferred.exceptionHook = function (e, t) {
    ie.console && ie.console.warn && e && H.test(e.name) && ie.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }, ce.readyException = function (e) {
    ie.setTimeout(function () {
      throw e;
    });
  };
  var O = ce.Deferred();
  function P() {
    C.removeEventListener("DOMContentLoaded", P), ie.removeEventListener("load", P), ce.ready();
  }
  ce.fn.ready = function (e) {
    return O.then(e)["catch"](function (e) {
      ce.readyException(e);
    }), this;
  }, ce.extend({
    isReady: !1,
    readyWait: 1,
    ready: function (e) {
      (!0 === e ? --ce.readyWait : ce.isReady) || (ce.isReady = !0) !== e && 0 < --ce.readyWait || O.resolveWith(C, [ce]);
    }
  }), ce.ready.then = O.then, "complete" === C.readyState || "loading" !== C.readyState && !C.documentElement.doScroll ? ie.setTimeout(ce.ready) : (C.addEventListener("DOMContentLoaded", P), ie.addEventListener("load", P));
  var R = function (e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n;
      if ("object" === x(n)) for (s in i = !0, n) R(e, t, s, n[s], !0, o, a);else if (void 0 !== r && (i = !0, v(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
        return l.call(ce(e), n);
      })), t)) for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
    M = /^-ms-/,
    I = /-([a-z])/g;
  function W(e, t) {
    return t.toUpperCase();
  }
  function F(e) {
    return e.replace(M, "ms-").replace(I, W);
  }
  var $ = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function B() {
    this.expando = ce.expando + B.uid++;
  }
  B.uid = 1, B.prototype = {
    cache: function (e) {
      var t = e[this.expando];
      return t || (t = {}, $(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
        value: t,
        configurable: !0
      }))), t;
    },
    set: function (e, t, n) {
      var r,
        i = this.cache(e);
      if ("string" == typeof t) i[F(t)] = n;else for (r in t) i[F(r)] = t[r];
      return i;
    },
    get: function (e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][F(t)];
    },
    access: function (e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
    },
    remove: function (e, t) {
      var n,
        r = e[this.expando];
      if (void 0 !== r) {
        if (void 0 !== t) {
          n = (t = Array.isArray(t) ? t.map(F) : (t = F(t)) in r ? [t] : t.match(D) || []).length;
          while (n--) delete r[t[n]];
        }
        (void 0 === t || ce.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
      }
    },
    hasData: function (e) {
      var t = e[this.expando];
      return void 0 !== t && !ce.isEmptyObject(t);
    }
  };
  var _ = new B(),
    X = new B(),
    U = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    z = /[A-Z]/g;
  function V(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(z, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
      try {
        n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : U.test(i) ? JSON.parse(i) : i);
      } catch (e) {}
      X.set(e, t, n);
    } else n = void 0;
    return n;
  }
  ce.extend({
    hasData: function (e) {
      return X.hasData(e) || _.hasData(e);
    },
    data: function (e, t, n) {
      return X.access(e, t, n);
    },
    removeData: function (e, t) {
      X.remove(e, t);
    },
    _data: function (e, t, n) {
      return _.access(e, t, n);
    },
    _removeData: function (e, t) {
      _.remove(e, t);
    }
  }), ce.fn.extend({
    data: function (n, e) {
      var t,
        r,
        i,
        o = this[0],
        a = o && o.attributes;
      if (void 0 === n) {
        if (this.length && (i = X.get(o), 1 === o.nodeType && !_.get(o, "hasDataAttrs"))) {
          t = a.length;
          while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = F(r.slice(5)), V(o, r, i[r]));
          _.set(o, "hasDataAttrs", !0);
        }
        return i;
      }
      return "object" == typeof n ? this.each(function () {
        X.set(this, n);
      }) : R(this, function (e) {
        var t;
        if (o && void 0 === e) return void 0 !== (t = X.get(o, n)) ? t : void 0 !== (t = V(o, n)) ? t : void 0;
        this.each(function () {
          X.set(this, n, e);
        });
      }, null, e, 1 < arguments.length, null, !0);
    },
    removeData: function (e) {
      return this.each(function () {
        X.remove(this, e);
      });
    }
  }), ce.extend({
    queue: function (e, t, n) {
      var r;
      if (e) return t = (t || "fx") + "queue", r = _.get(e, t), n && (!r || Array.isArray(n) ? r = _.access(e, t, ce.makeArray(n)) : r.push(n)), r || [];
    },
    dequeue: function (e, t) {
      t = t || "fx";
      var n = ce.queue(e, t),
        r = n.length,
        i = n.shift(),
        o = ce._queueHooks(e, t);
      "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
        ce.dequeue(e, t);
      }, o)), !r && o && o.empty.fire();
    },
    _queueHooks: function (e, t) {
      var n = t + "queueHooks";
      return _.get(e, n) || _.access(e, n, {
        empty: ce.Callbacks("once memory").add(function () {
          _.remove(e, [t + "queue", n]);
        })
      });
    }
  }), ce.fn.extend({
    queue: function (t, n) {
      var e = 2;
      return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? ce.queue(this[0], t) : void 0 === n ? this : this.each(function () {
        var e = ce.queue(this, t, n);
        ce._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && ce.dequeue(this, t);
      });
    },
    dequeue: function (e) {
      return this.each(function () {
        ce.dequeue(this, e);
      });
    },
    clearQueue: function (e) {
      return this.queue(e || "fx", []);
    },
    promise: function (e, t) {
      var n,
        r = 1,
        i = ce.Deferred(),
        o = this,
        a = this.length,
        s = function () {
          --r || i.resolveWith(o, [o]);
        };
      "string" != typeof e && (t = e, e = void 0), e = e || "fx";
      while (a--) (n = _.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
      return s(), i.promise(t);
    }
  });
  var G = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    Y = new RegExp("^(?:([+-])=|)(" + G + ")([a-z%]*)$", "i"),
    Q = ["Top", "Right", "Bottom", "Left"],
    J = C.documentElement,
    K = function (e) {
      return ce.contains(e.ownerDocument, e);
    },
    Z = {
      composed: !0
    };
  J.getRootNode && (K = function (e) {
    return ce.contains(e.ownerDocument, e) || e.getRootNode(Z) === e.ownerDocument;
  });
  var ee = function (e, t) {
    return "none" === (e = t || e).style.display || "" === e.style.display && K(e) && "none" === ce.css(e, "display");
  };
  function te(e, t, n, r) {
    var i,
      o,
      a = 20,
      s = r ? function () {
        return r.cur();
      } : function () {
        return ce.css(e, t, "");
      },
      u = s(),
      l = n && n[3] || (ce.cssNumber[t] ? "" : "px"),
      c = e.nodeType && (ce.cssNumber[t] || "px" !== l && +u) && Y.exec(ce.css(e, t));
    if (c && c[3] !== l) {
      u /= 2, l = l || c[3], c = +u || 1;
      while (a--) ce.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
      c *= 2, ce.style(e, t, c + l), n = n || [];
    }
    return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i;
  }
  var ne = {};
  function re(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++) (r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = _.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ee(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ne[s]) || (o = a.body.appendChild(a.createElement(s)), u = ce.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ne[s] = u)))) : "none" !== n && (l[c] = "none", _.set(r, "display", n)));
    for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
    return e;
  }
  ce.fn.extend({
    show: function () {
      return re(this, !0);
    },
    hide: function () {
      return re(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        ee(this) ? ce(this).show() : ce(this).hide();
      });
    }
  });
  var xe,
    be,
    we = /^(?:checkbox|radio)$/i,
    Te = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    Ce = /^$|^module$|\/(?:java|ecma)script/i;
  xe = C.createDocumentFragment().appendChild(C.createElement("div")), (be = C.createElement("input")).setAttribute("type", "radio"), be.setAttribute("checked", "checked"), be.setAttribute("name", "t"), xe.appendChild(be), le.checkClone = xe.cloneNode(!0).cloneNode(!0).lastChild.checked, xe.innerHTML = "<textarea>x</textarea>", le.noCloneChecked = !!xe.cloneNode(!0).lastChild.defaultValue, xe.innerHTML = "<option></option>", le.option = !!xe.lastChild;
  var ke = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };
  function Se(e, t) {
    var n;
    return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && fe(e, t) ? ce.merge([e], n) : n;
  }
  function Ee(e, t) {
    for (var n = 0, r = e.length; n < r; n++) _.set(e[n], "globalEval", !t || _.get(t[n], "globalEval"));
  }
  ke.tbody = ke.tfoot = ke.colgroup = ke.caption = ke.thead, ke.th = ke.td, le.option || (ke.optgroup = ke.option = [1, "<select multiple='multiple'>", "</select>"]);
  var je = /<|&#?\w+;/;
  function Ae(e, t, n, r, i) {
    for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) if ((o = e[d]) || 0 === o) if ("object" === x(o)) ce.merge(p, o.nodeType ? [o] : o);else if (je.test(o)) {
      a = a || f.appendChild(t.createElement("div")), s = (Te.exec(o) || ["", ""])[1].toLowerCase(), u = ke[s] || ke._default, a.innerHTML = u[1] + ce.htmlPrefilter(o) + u[2], c = u[0];
      while (c--) a = a.lastChild;
      ce.merge(p, a.childNodes), (a = f.firstChild).textContent = "";
    } else p.push(t.createTextNode(o));
    f.textContent = "", d = 0;
    while (o = p[d++]) if (r && -1 < ce.inArray(o, r)) i && i.push(o);else if (l = K(o), a = Se(f.appendChild(o), "script"), l && Ee(a), n) {
      c = 0;
      while (o = a[c++]) Ce.test(o.type || "") && n.push(o);
    }
    return f;
  }
  var De = /^([^.]*)(?:\.(.+)|)/;
  function Ne() {
    return !0;
  }
  function qe() {
    return !1;
  }
  function Le(e, t, n, r, i, o) {
    var a, s;
    if ("object" == typeof t) {
      for (s in "string" != typeof n && (r = r || n, n = void 0), t) Le(e, s, n, r, t[s], o);
      return e;
    }
    if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = qe;else if (!i) return e;
    return 1 === o && (a = i, (i = function (e) {
      return ce().off(e), a.apply(this, arguments);
    }).guid = a.guid || (a.guid = ce.guid++)), e.each(function () {
      ce.event.add(this, t, i, r, n);
    });
  }
  function He(e, r, t) {
    t ? (_.set(e, r, !1), ce.event.add(e, r, {
      namespace: !1,
      handler: function (e) {
        var t,
          n = _.get(this, r);
        if (1 & e.isTrigger && this[r]) {
          if (n) (ce.event.special[r] || {}).delegateType && e.stopPropagation();else if (n = ae.call(arguments), _.set(this, r, n), this[r](), t = _.get(this, r), _.set(this, r, !1), n !== t) return e.stopImmediatePropagation(), e.preventDefault(), t;
        } else n && (_.set(this, r, ce.event.trigger(n[0], n.slice(1), this)), e.stopPropagation(), e.isImmediatePropagationStopped = Ne);
      }
    })) : void 0 === _.get(e, r) && ce.event.add(e, r, Ne);
  }
  ce.event = {
    global: {},
    add: function (t, e, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = _.get(t);
      if ($(t)) {
        n.handler && (n = (o = n).handler, i = o.selector), i && ce.find.matchesSelector(J, i), n.guid || (n.guid = ce.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function (e) {
          return "undefined" != typeof ce && ce.event.triggered !== e.type ? ce.event.dispatch.apply(t, arguments) : void 0;
        }), l = (e = (e || "").match(D) || [""]).length;
        while (l--) d = g = (s = De.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = ce.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = ce.event.special[d] || {}, c = ce.extend({
          type: d,
          origType: g,
          data: r,
          handler: n,
          guid: n.guid,
          selector: i,
          needsContext: i && ce.expr.match.needsContext.test(i),
          namespace: h.join(".")
        }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), ce.event.global[d] = !0);
      }
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = _.hasData(e) && _.get(e);
      if (v && (u = v.events)) {
        l = (t = (t || "").match(D) || [""]).length;
        while (l--) if (d = g = (s = De.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
          f = ce.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
          while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
          a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || ce.removeEvent(e, d, v.handle), delete u[d]);
        } else for (d in u) ce.event.remove(e, d + t[l], n, r, !0);
        ce.isEmptyObject(u) && _.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s = new Array(arguments.length),
        u = ce.event.fix(e),
        l = (_.get(this, "events") || Object.create(null))[u.type] || [],
        c = ce.event.special[u.type] || {};
      for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
      if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
        a = ce.event.handlers.call(this, u, l), t = 0;
        while ((i = a[t++]) && !u.isPropagationStopped()) {
          u.currentTarget = i.elem, n = 0;
          while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((ce.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()));
        }
        return c.postDispatch && c.postDispatch.call(this, u), u.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        a,
        s = [],
        u = t.delegateCount,
        l = e.target;
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button)) for (; l !== this; l = l.parentNode || this) if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < ce(i, this).index(l) : ce.find(i, this, null, [l]).length), a[i] && o.push(r);
        o.length && s.push({
          elem: l,
          handlers: o
        });
      }
      return l = this, u < t.length && s.push({
        elem: l,
        handlers: t.slice(u)
      }), s;
    },
    addProp: function (t, e) {
      Object.defineProperty(ce.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: v(e) ? function () {
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
      return e[ce.expando] ? e : new ce.Event(e);
    },
    special: {
      load: {
        noBubble: !0
      },
      click: {
        setup: function (e) {
          var t = this || e;
          return we.test(t.type) && t.click && fe(t, "input") && He(t, "click", !0), !1;
        },
        trigger: function (e) {
          var t = this || e;
          return we.test(t.type) && t.click && fe(t, "input") && He(t, "click"), !0;
        },
        _default: function (e) {
          var t = e.target;
          return we.test(t.type) && t.click && fe(t, "input") && _.get(t, "click") || fe(t, "a");
        }
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        }
      }
    }
  }, ce.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n);
  }, ce.Event = function (e, t) {
    if (!(this instanceof ce.Event)) return new ce.Event(e, t);
    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ne : qe, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && ce.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[ce.expando] = !0;
  }, ce.Event.prototype = {
    constructor: ce.Event,
    isDefaultPrevented: qe,
    isPropagationStopped: qe,
    isImmediatePropagationStopped: qe,
    isSimulated: !1,
    preventDefault: function () {
      var e = this.originalEvent;
      this.isDefaultPrevented = Ne, e && !this.isSimulated && e.preventDefault();
    },
    stopPropagation: function () {
      var e = this.originalEvent;
      this.isPropagationStopped = Ne, e && !this.isSimulated && e.stopPropagation();
    },
    stopImmediatePropagation: function () {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = Ne, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
    }
  }, ce.each({
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
    "char": !0,
    code: !0,
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
    which: !0
  }, ce.event.addProp), ce.each({
    focus: "focusin",
    blur: "focusout"
  }, function (r, i) {
    function o(e) {
      if (C.documentMode) {
        var t = _.get(this, "handle"),
          n = ce.event.fix(e);
        n.type = "focusin" === e.type ? "focus" : "blur", n.isSimulated = !0, t(e), n.target === n.currentTarget && t(n);
      } else ce.event.simulate(i, e.target, ce.event.fix(e));
    }
    ce.event.special[r] = {
      setup: function () {
        var e;
        if (He(this, r, !0), !C.documentMode) return !1;
        (e = _.get(this, i)) || this.addEventListener(i, o), _.set(this, i, (e || 0) + 1);
      },
      trigger: function () {
        return He(this, r), !0;
      },
      teardown: function () {
        var e;
        if (!C.documentMode) return !1;
        (e = _.get(this, i) - 1) ? _.set(this, i, e) : (this.removeEventListener(i, o), _.remove(this, i));
      },
      _default: function (e) {
        return _.get(e.target, r);
      },
      delegateType: i
    }, ce.event.special[i] = {
      setup: function () {
        var e = this.ownerDocument || this.document || this,
          t = C.documentMode ? this : e,
          n = _.get(t, i);
        n || (C.documentMode ? this.addEventListener(i, o) : e.addEventListener(r, o, !0)), _.set(t, i, (n || 0) + 1);
      },
      teardown: function () {
        var e = this.ownerDocument || this.document || this,
          t = C.documentMode ? this : e,
          n = _.get(t, i) - 1;
        n ? _.set(t, i, n) : (C.documentMode ? this.removeEventListener(i, o) : e.removeEventListener(r, o, !0), _.remove(t, i));
      }
    };
  }), ce.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (e, i) {
    ce.event.special[e] = {
      delegateType: i,
      bindType: i,
      handle: function (e) {
        var t,
          n = e.relatedTarget,
          r = e.handleObj;
        return n && (n === this || ce.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t;
      }
    };
  }), ce.fn.extend({
    on: function (e, t, n, r) {
      return Le(this, e, t, n, r);
    },
    one: function (e, t, n, r) {
      return Le(this, e, t, n, r, 1);
    },
    off: function (e, t, n) {
      var r, i;
      if (e && e.preventDefault && e.handleObj) return r = e.handleObj, ce(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
      if ("object" == typeof e) {
        for (i in e) this.off(i, t, e[i]);
        return this;
      }
      return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = qe), this.each(function () {
        ce.event.remove(this, e, n, t);
      });
    }
  });
  var Oe = /<script|<style|<link/i,
    Pe = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Re = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
  function Me(e, t) {
    return fe(e, "table") && fe(11 !== t.nodeType ? t : t.firstChild, "tr") && ce(e).children("tbody")[0] || e;
  }
  function Ie(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
  }
  function We(e) {
    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
  }
  function Fe(e, t) {
    var n, r, i, o, a, s;
    if (1 === t.nodeType) {
      if (_.hasData(e) && (s = _.get(e).events)) for (i in _.remove(t, "handle events"), s) for (n = 0, r = s[i].length; n < r; n++) ce.event.add(t, i, s[i][n]);
      X.hasData(e) && (o = X.access(e), a = ce.extend({}, o), X.set(t, a));
    }
  }
  function $e(n, r, i, o) {
    r = g(r);
    var e,
      t,
      a,
      s,
      u,
      l,
      c = 0,
      f = n.length,
      p = f - 1,
      d = r[0],
      h = v(d);
    if (h || 1 < f && "string" == typeof d && !le.checkClone && Pe.test(d)) return n.each(function (e) {
      var t = n.eq(e);
      h && (r[0] = d.call(this, e, t.html())), $e(t, r, i, o);
    });
    if (f && (t = (e = Ae(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
      for (s = (a = ce.map(Se(e, "script"), Ie)).length; c < f; c++) u = e, c !== p && (u = ce.clone(u, !0, !0), s && ce.merge(a, Se(u, "script"))), i.call(n[c], u, c);
      if (s) for (l = a[a.length - 1].ownerDocument, ce.map(a, We), c = 0; c < s; c++) u = a[c], Ce.test(u.type || "") && !_.access(u, "globalEval") && ce.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? ce._evalUrl && !u.noModule && ce._evalUrl(u.src, {
        nonce: u.nonce || u.getAttribute("nonce")
      }, l) : m(u.textContent.replace(Re, ""), u, l));
    }
    return n;
  }
  function Be(e, t, n) {
    for (var r, i = t ? ce.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || ce.cleanData(Se(r)), r.parentNode && (n && K(r) && Ee(Se(r, "script")), r.parentNode.removeChild(r));
    return e;
  }
  ce.extend({
    htmlPrefilter: function (e) {
      return e;
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c = e.cloneNode(!0),
        f = K(e);
      if (!(le.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ce.isXMLDoc(e))) for (a = Se(c), r = 0, i = (o = Se(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && we.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
      if (t) if (n) for (o = o || Se(e), a = a || Se(c), r = 0, i = o.length; r < i; r++) Fe(o[r], a[r]);else Fe(e, c);
      return 0 < (a = Se(c, "script")).length && Ee(a, !f && Se(e, "script")), c;
    },
    cleanData: function (e) {
      for (var t, n, r, i = ce.event.special, o = 0; void 0 !== (n = e[o]); o++) if ($(n)) {
        if (t = n[_.expando]) {
          if (t.events) for (r in t.events) i[r] ? ce.event.remove(n, r) : ce.removeEvent(n, r, t.handle);
          n[_.expando] = void 0;
        }
        n[X.expando] && (n[X.expando] = void 0);
      }
    }
  }), ce.fn.extend({
    detach: function (e) {
      return Be(this, e, !0);
    },
    remove: function (e) {
      return Be(this, e);
    },
    text: function (e) {
      return R(this, function (e) {
        return void 0 === e ? ce.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
        });
      }, null, e, arguments.length);
    },
    append: function () {
      return $e(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Me(this, e).appendChild(e);
      });
    },
    prepend: function () {
      return $e(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = Me(this, e);
          t.insertBefore(e, t.firstChild);
        }
      });
    },
    before: function () {
      return $e(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    },
    after: function () {
      return $e(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    },
    empty: function () {
      for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (ce.cleanData(Se(e, !1)), e.textContent = "");
      return this;
    },
    clone: function (e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return ce.clone(this, e, t);
      });
    },
    html: function (e) {
      return R(this, function (e) {
        var t = this[0] || {},
          n = 0,
          r = this.length;
        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
        if ("string" == typeof e && !Oe.test(e) && !ke[(Te.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = ce.htmlPrefilter(e);
          try {
            for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (ce.cleanData(Se(t, !1)), t.innerHTML = e);
            t = 0;
          } catch (e) {}
        }
        t && this.empty().append(e);
      }, null, e, arguments.length);
    },
    replaceWith: function () {
      var n = [];
      return $e(this, arguments, function (e) {
        var t = this.parentNode;
        ce.inArray(this, n) < 0 && (ce.cleanData(Se(this)), t && t.replaceChild(e, this));
      }, n);
    }
  }), ce.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (e, a) {
    ce.fn[e] = function (e) {
      for (var t, n = [], r = ce(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), ce(r[o])[a](t), s.apply(n, t.get());
      return this.pushStack(n);
    };
  });
  var _e = new RegExp("^(" + G + ")(?!px)[a-z%]+$", "i"),
    Xe = /^--/,
    Ue = function (e) {
      var t = e.ownerDocument.defaultView;
      return t && t.opener || (t = ie), t.getComputedStyle(e);
    },
    ze = function (e, t, n) {
      var r,
        i,
        o = {};
      for (i in t) o[i] = e.style[i], e.style[i] = t[i];
      for (i in r = n.call(e), t) e.style[i] = o[i];
      return r;
    },
    Ve = new RegExp(Q.join("|"), "i");
  function Ge(e, t, n) {
    var r,
      i,
      o,
      a,
      s = Xe.test(t),
      u = e.style;
    return (n = n || Ue(e)) && (a = n.getPropertyValue(t) || n[t], s && a && (a = a.replace(ve, "$1") || void 0), "" !== a || K(e) || (a = ce.style(e, t)), !le.pixelBoxStyles() && _e.test(a) && Ve.test(t) && (r = u.width, i = u.minWidth, o = u.maxWidth, u.minWidth = u.maxWidth = u.width = a, a = n.width, u.width = r, u.minWidth = i, u.maxWidth = o)), void 0 !== a ? a + "" : a;
  }
  function Ye(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      }
    };
  }
  !function () {
    function e() {
      if (l) {
        u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", J.appendChild(u).appendChild(l);
        var e = ie.getComputedStyle(l);
        n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), J.removeChild(u), l = null;
      }
    }
    function t(e) {
      return Math.round(parseFloat(e));
    }
    var n,
      r,
      i,
      o,
      a,
      s,
      u = C.createElement("div"),
      l = C.createElement("div");
    l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", le.clearCloneStyle = "content-box" === l.style.backgroundClip, ce.extend(le, {
      boxSizingReliable: function () {
        return e(), r;
      },
      pixelBoxStyles: function () {
        return e(), o;
      },
      pixelPosition: function () {
        return e(), n;
      },
      reliableMarginLeft: function () {
        return e(), s;
      },
      scrollboxSize: function () {
        return e(), i;
      },
      reliableTrDimensions: function () {
        var e, t, n, r;
        return null == a && (e = C.createElement("table"), t = C.createElement("tr"), n = C.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "border:1px solid", t.style.height = "1px", n.style.height = "9px", n.style.display = "block", J.appendChild(e).appendChild(t).appendChild(n), r = ie.getComputedStyle(t), a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight, J.removeChild(e)), a;
      }
    }));
  }();
  var Qe = ["Webkit", "Moz", "ms"],
    Je = C.createElement("div").style,
    Ke = {};
  function Ze(e) {
    var t = ce.cssProps[e] || Ke[e];
    return t || (e in Je ? e : Ke[e] = function (e) {
      var t = e[0].toUpperCase() + e.slice(1),
        n = Qe.length;
      while (n--) if ((e = Qe[n] + t) in Je) return e;
    }(e) || e);
  }
  var et = /^(none|table(?!-c[ea]).+)/,
    tt = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    },
    nt = {
      letterSpacing: "0",
      fontWeight: "400"
    };
  function rt(e, t, n) {
    var r = Y.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }
  function it(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
      s = 0,
      u = 0,
      l = 0;
    if (n === (r ? "border" : "content")) return 0;
    for (; a < 4; a += 2) "margin" === n && (l += ce.css(e, n + Q[a], !0, i)), r ? ("content" === n && (u -= ce.css(e, "padding" + Q[a], !0, i)), "margin" !== n && (u -= ce.css(e, "border" + Q[a] + "Width", !0, i))) : (u += ce.css(e, "padding" + Q[a], !0, i), "padding" !== n ? u += ce.css(e, "border" + Q[a] + "Width", !0, i) : s += ce.css(e, "border" + Q[a] + "Width", !0, i));
    return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u + l;
  }
  function ot(e, t, n) {
    var r = Ue(e),
      i = (!le.boxSizingReliable() || n) && "border-box" === ce.css(e, "boxSizing", !1, r),
      o = i,
      a = Ge(e, t, r),
      s = "offset" + t[0].toUpperCase() + t.slice(1);
    if (_e.test(a)) {
      if (!n) return a;
      a = "auto";
    }
    return (!le.boxSizingReliable() && i || !le.reliableTrDimensions() && fe(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === ce.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === ce.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + it(e, t, n || (i ? "border" : "content"), o, r, a) + "px";
  }
  function at(e, t, n, r, i) {
    return new at.prototype.init(e, t, n, r, i);
  }
  ce.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = Ge(e, "opacity");
            return "" === n ? "1" : n;
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageSlice: !0,
      columnCount: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      scale: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = F(t),
          u = Xe.test(t),
          l = e.style;
        if (u || (t = Ze(s)), a = ce.cssHooks[t] || ce.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" === (o = typeof n) && (i = Y.exec(n)) && i[1] && (n = te(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (ce.cssNumber[s] ? "" : "px")), le.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n));
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        a,
        s = F(t);
      return Xe.test(t) || (t = Ze(s)), (a = ce.cssHooks[t] || ce.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Ge(e, t, r)), "normal" === i && t in nt && (i = nt[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i;
    }
  }), ce.each(["height", "width"], function (e, u) {
    ce.cssHooks[u] = {
      get: function (e, t, n) {
        if (t) return !et.test(ce.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? ot(e, u, n) : ze(e, tt, function () {
          return ot(e, u, n);
        });
      },
      set: function (e, t, n) {
        var r,
          i = Ue(e),
          o = !le.scrollboxSize() && "absolute" === i.position,
          a = (o || n) && "border-box" === ce.css(e, "boxSizing", !1, i),
          s = n ? it(e, u, n, a, i) : 0;
        return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - it(e, u, "border", !1, i) - .5)), s && (r = Y.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = ce.css(e, u)), rt(0, t, s);
      }
    };
  }), ce.cssHooks.marginLeft = Ye(le.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(Ge(e, "marginLeft")) || e.getBoundingClientRect().left - ze(e, {
      marginLeft: 0
    }, function () {
      return e.getBoundingClientRect().left;
    })) + "px";
  }), ce.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (i, o) {
    ce.cssHooks[i + o] = {
      expand: function (e) {
        for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + Q[t] + o] = r[t] || r[t - 2] || r[0];
        return n;
      }
    }, "margin" !== i && (ce.cssHooks[i + o].set = rt);
  }), ce.fn.extend({
    css: function (e, t) {
      return R(this, function (e, t, n) {
        var r,
          i,
          o = {},
          a = 0;
        if (Array.isArray(t)) {
          for (r = Ue(e), i = t.length; a < i; a++) o[t[a]] = ce.css(e, t[a], !1, r);
          return o;
        }
        return void 0 !== n ? ce.style(e, t, n) : ce.css(e, t);
      }, e, t, 1 < arguments.length);
    }
  }), ((ce.Tween = at).prototype = {
    constructor: at,
    init: function (e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || ce.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (ce.cssNumber[n] ? "" : "px");
    },
    cur: function () {
      var e = at.propHooks[this.prop];
      return e && e.get ? e.get(this) : at.propHooks._default.get(this);
    },
    run: function (e) {
      var t,
        n = at.propHooks[this.prop];
      return this.options.duration ? this.pos = t = ce.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : at.propHooks._default.set(this), this;
    }
  }).init.prototype = at.prototype, (at.propHooks = {
    _default: {
      get: function (e) {
        var t;
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = ce.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
      },
      set: function (e) {
        ce.fx.step[e.prop] ? ce.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !ce.cssHooks[e.prop] && null == e.elem.style[Ze(e.prop)] ? e.elem[e.prop] = e.now : ce.style(e.elem, e.prop, e.now + e.unit);
      }
    }
  }).scrollTop = at.propHooks.scrollLeft = {
    set: function (e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    }
  }, ce.easing = {
    linear: function (e) {
      return e;
    },
    swing: function (e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    },
    _default: "swing"
  }, ce.fx = at.prototype.init, ce.fx.step = {};
  var st,
    ut,
    lt,
    ct,
    ft = /^(?:toggle|show|hide)$/,
    pt = /queueHooks$/;
  function dt() {
    ut && (!1 === C.hidden && ie.requestAnimationFrame ? ie.requestAnimationFrame(dt) : ie.setTimeout(dt, ce.fx.interval), ce.fx.tick());
  }
  function ht() {
    return ie.setTimeout(function () {
      st = void 0;
    }), st = Date.now();
  }
  function gt(e, t) {
    var n,
      r = 0,
      i = {
        height: e
      };
    for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = Q[r])] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i;
  }
  function vt(e, t, n) {
    for (var r, i = (yt.tweeners[t] || []).concat(yt.tweeners["*"]), o = 0, a = i.length; o < a; o++) if (r = i[o].call(n, t, e)) return r;
  }
  function yt(o, e, t) {
    var n,
      a,
      r = 0,
      i = yt.prefilters.length,
      s = ce.Deferred().always(function () {
        delete u.elem;
      }),
      u = function () {
        if (a) return !1;
        for (var e = st || ht(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
        return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1);
      },
      l = s.promise({
        elem: o,
        props: ce.extend({}, e),
        opts: ce.extend(!0, {
          specialEasing: {},
          easing: ce.easing._default
        }, t),
        originalProperties: e,
        originalOptions: t,
        startTime: st || ht(),
        duration: t.duration,
        tweens: [],
        createTween: function (e, t) {
          var n = ce.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
          return l.tweens.push(n), n;
        },
        stop: function (e) {
          var t = 0,
            n = e ? l.tweens.length : 0;
          if (a) return this;
          for (a = !0; t < n; t++) l.tweens[t].run(1);
          return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this;
        }
      }),
      c = l.props;
    for (!function (e, t) {
      var n, r, i, o, a;
      for (n in e) if (i = t[r = F(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = ce.cssHooks[r]) && "expand" in a) for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);else t[r] = i;
    }(c, l.opts.specialEasing); r < i; r++) if (n = yt.prefilters[r].call(l, o, c, l.opts)) return v(n.stop) && (ce._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
    return ce.map(c, vt, l), v(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), ce.fx.timer(ce.extend(u, {
      elem: o,
      anim: l,
      queue: l.opts.queue
    })), l;
  }
  ce.Animation = ce.extend(yt, {
    tweeners: {
      "*": [function (e, t) {
        var n = this.createTween(e, t);
        return te(n.elem, e, Y.exec(t), n), n;
      }]
    },
    tweener: function (e, t) {
      v(e) ? (t = e, e = ["*"]) : e = e.match(D);
      for (var n, r = 0, i = e.length; r < i; r++) n = e[r], yt.tweeners[n] = yt.tweeners[n] || [], yt.tweeners[n].unshift(t);
    },
    prefilters: [function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = "width" in t || "height" in t,
        p = this,
        d = {},
        h = e.style,
        g = e.nodeType && ee(e),
        v = _.get(e, "fxshow");
      for (r in n.queue || (null == (a = ce._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
        a.unqueued || s();
      }), a.unqueued++, p.always(function () {
        p.always(function () {
          a.unqueued--, ce.queue(e, "fx").length || a.empty.fire();
        });
      })), t) if (i = t[r], ft.test(i)) {
        if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
          if ("show" !== i || !v || void 0 === v[r]) continue;
          g = !0;
        }
        d[r] = v && v[r] || ce.style(e, r);
      }
      if ((u = !ce.isEmptyObject(t)) || !ce.isEmptyObject(d)) for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = _.get(e, "display")), "none" === (c = ce.css(e, "display")) && (l ? c = l : (re([e], !0), l = e.style.display || l, c = ce.css(e, "display"), re([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === ce.css(e, "float") && (u || (p.done(function () {
        h.display = l;
      }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
      })), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = _.access(e, "fxshow", {
        display: l
      }), o && (v.hidden = !g), g && re([e], !0), p.done(function () {
        for (r in g || re([e]), _.remove(e, "fxshow"), d) ce.style(e, r, d[r]);
      })), u = vt(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0));
    }],
    prefilter: function (e, t) {
      t ? yt.prefilters.unshift(e) : yt.prefilters.push(e);
    }
  }), ce.speed = function (e, t, n) {
    var r = e && "object" == typeof e ? ce.extend({}, e) : {
      complete: n || !n && t || v(e) && e,
      duration: e,
      easing: n && t || t && !v(t) && t
    };
    return ce.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in ce.fx.speeds ? r.duration = ce.fx.speeds[r.duration] : r.duration = ce.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
      v(r.old) && r.old.call(this), r.queue && ce.dequeue(this, r.queue);
    }, r;
  }, ce.fn.extend({
    fadeTo: function (e, t, n, r) {
      return this.filter(ee).css("opacity", 0).show().end().animate({
        opacity: t
      }, e, n, r);
    },
    animate: function (t, e, n, r) {
      var i = ce.isEmptyObject(t),
        o = ce.speed(e, n, r),
        a = function () {
          var e = yt(this, ce.extend({}, t), o);
          (i || _.get(this, "finish")) && e.stop(!0);
        };
      return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
    },
    stop: function (i, e, o) {
      var a = function (e) {
        var t = e.stop;
        delete e.stop, t(o);
      };
      return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function () {
        var e = !0,
          t = null != i && i + "queueHooks",
          n = ce.timers,
          r = _.get(this);
        if (t) r[t] && r[t].stop && a(r[t]);else for (t in r) r[t] && r[t].stop && pt.test(t) && a(r[t]);
        for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
        !e && o || ce.dequeue(this, i);
      });
    },
    finish: function (a) {
      return !1 !== a && (a = a || "fx"), this.each(function () {
        var e,
          t = _.get(this),
          n = t[a + "queue"],
          r = t[a + "queueHooks"],
          i = ce.timers,
          o = n ? n.length : 0;
        for (t.finish = !0, ce.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
        for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
        delete t.finish;
      });
    }
  }), ce.each(["toggle", "show", "hide"], function (e, r) {
    var i = ce.fn[r];
    ce.fn[r] = function (e, t, n) {
      return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(gt(r, !0), e, t, n);
    };
  }), ce.each({
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
  }, function (e, r) {
    ce.fn[e] = function (e, t, n) {
      return this.animate(r, e, t, n);
    };
  }), ce.timers = [], ce.fx.tick = function () {
    var e,
      t = 0,
      n = ce.timers;
    for (st = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
    n.length || ce.fx.stop(), st = void 0;
  }, ce.fx.timer = function (e) {
    ce.timers.push(e), ce.fx.start();
  }, ce.fx.interval = 13, ce.fx.start = function () {
    ut || (ut = !0, dt());
  }, ce.fx.stop = function () {
    ut = null;
  }, ce.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, ce.fn.delay = function (r, e) {
    return r = ce.fx && ce.fx.speeds[r] || r, e = e || "fx", this.queue(e, function (e, t) {
      var n = ie.setTimeout(e, r);
      t.stop = function () {
        ie.clearTimeout(n);
      };
    });
  }, lt = C.createElement("input"), ct = C.createElement("select").appendChild(C.createElement("option")), lt.type = "checkbox", le.checkOn = "" !== lt.value, le.optSelected = ct.selected, (lt = C.createElement("input")).value = "t", lt.type = "radio", le.radioValue = "t" === lt.value;
  var mt,
    xt = ce.expr.attrHandle;
  ce.fn.extend({
    attr: function (e, t) {
      return R(this, ce.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        ce.removeAttr(this, e);
      });
    }
  }), ce.extend({
    attr: function (e, t, n) {
      var r,
        i,
        o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? ce.prop(e, t, n) : (1 === o && ce.isXMLDoc(e) || (i = ce.attrHooks[t.toLowerCase()] || (ce.expr.match.bool.test(t) ? mt : void 0)), void 0 !== n ? null === n ? void ce.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = ce.find.attr(e, t)) ? void 0 : r);
    },
    attrHooks: {
      type: {
        set: function (e, t) {
          if (!le.radioValue && "radio" === t && fe(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t;
          }
        }
      }
    },
    removeAttr: function (e, t) {
      var n,
        r = 0,
        i = t && t.match(D);
      if (i && 1 === e.nodeType) while (n = i[r++]) e.removeAttribute(n);
    }
  }), mt = {
    set: function (e, t, n) {
      return !1 === t ? ce.removeAttr(e, n) : e.setAttribute(n, n), n;
    }
  }, ce.each(ce.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var a = xt[t] || ce.find.attr;
    xt[t] = function (e, t, n) {
      var r,
        i,
        o = t.toLowerCase();
      return n || (i = xt[o], xt[o] = r, r = null != a(e, t, n) ? o : null, xt[o] = i), r;
    };
  });
  var bt = /^(?:input|select|textarea|button)$/i,
    wt = /^(?:a|area)$/i;
  function Tt(e) {
    return (e.match(D) || []).join(" ");
  }
  function Ct(e) {
    return e.getAttribute && e.getAttribute("class") || "";
  }
  function kt(e) {
    return Array.isArray(e) ? e : "string" == typeof e && e.match(D) || [];
  }
  ce.fn.extend({
    prop: function (e, t) {
      return R(this, ce.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[ce.propFix[e] || e];
      });
    }
  }), ce.extend({
    prop: function (e, t, n) {
      var r,
        i,
        o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return 1 === o && ce.isXMLDoc(e) || (t = ce.propFix[t] || t, i = ce.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
    },
    propHooks: {
      tabIndex: {
        get: function (e) {
          var t = ce.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : bt.test(e.nodeName) || wt.test(e.nodeName) && e.href ? 0 : -1;
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }), le.optSelected || (ce.propHooks.selected = {
    get: function (e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex, null;
    },
    set: function (e) {
      var t = e.parentNode;
      t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
    }
  }), ce.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    ce.propFix[this.toLowerCase()] = this;
  }), ce.fn.extend({
    addClass: function (t) {
      var e, n, r, i, o, a;
      return v(t) ? this.each(function (e) {
        ce(this).addClass(t.call(this, e, Ct(this)));
      }) : (e = kt(t)).length ? this.each(function () {
        if (r = Ct(this), n = 1 === this.nodeType && " " + Tt(r) + " ") {
          for (o = 0; o < e.length; o++) i = e[o], n.indexOf(" " + i + " ") < 0 && (n += i + " ");
          a = Tt(n), r !== a && this.setAttribute("class", a);
        }
      }) : this;
    },
    removeClass: function (t) {
      var e, n, r, i, o, a;
      return v(t) ? this.each(function (e) {
        ce(this).removeClass(t.call(this, e, Ct(this)));
      }) : arguments.length ? (e = kt(t)).length ? this.each(function () {
        if (r = Ct(this), n = 1 === this.nodeType && " " + Tt(r) + " ") {
          for (o = 0; o < e.length; o++) {
            i = e[o];
            while (-1 < n.indexOf(" " + i + " ")) n = n.replace(" " + i + " ", " ");
          }
          a = Tt(n), r !== a && this.setAttribute("class", a);
        }
      }) : this : this.attr("class", "");
    },
    toggleClass: function (t, n) {
      var e,
        r,
        i,
        o,
        a = typeof t,
        s = "string" === a || Array.isArray(t);
      return v(t) ? this.each(function (e) {
        ce(this).toggleClass(t.call(this, e, Ct(this), n), n);
      }) : "boolean" == typeof n && s ? n ? this.addClass(t) : this.removeClass(t) : (e = kt(t), this.each(function () {
        if (s) for (o = ce(this), i = 0; i < e.length; i++) r = e[i], o.hasClass(r) ? o.removeClass(r) : o.addClass(r);else void 0 !== t && "boolean" !== a || ((r = Ct(this)) && _.set(this, "__className__", r), this.setAttribute && this.setAttribute("class", r || !1 === t ? "" : _.get(this, "__className__") || ""));
      }));
    },
    hasClass: function (e) {
      var t,
        n,
        r = 0;
      t = " " + e + " ";
      while (n = this[r++]) if (1 === n.nodeType && -1 < (" " + Tt(Ct(n)) + " ").indexOf(t)) return !0;
      return !1;
    }
  });
  var St = /\r/g;
  ce.fn.extend({
    val: function (n) {
      var r,
        e,
        i,
        t = this[0];
      return arguments.length ? (i = v(n), this.each(function (e) {
        var t;
        1 === this.nodeType && (null == (t = i ? n.call(this, e, ce(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = ce.map(t, function (e) {
          return null == e ? "" : e + "";
        })), (r = ce.valHooks[this.type] || ce.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t));
      })) : t ? (r = ce.valHooks[t.type] || ce.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(St, "") : null == e ? "" : e : void 0;
    }
  }), ce.extend({
    valHooks: {
      option: {
        get: function (e) {
          var t = ce.find.attr(e, "value");
          return null != t ? t : Tt(ce.text(e));
        }
      },
      select: {
        get: function (e) {
          var t,
            n,
            r,
            i = e.options,
            o = e.selectedIndex,
            a = "select-one" === e.type,
            s = a ? null : [],
            u = a ? o + 1 : i.length;
          for (r = o < 0 ? u : a ? o : 0; r < u; r++) if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !fe(n.parentNode, "optgroup"))) {
            if (t = ce(n).val(), a) return t;
            s.push(t);
          }
          return s;
        },
        set: function (e, t) {
          var n,
            r,
            i = e.options,
            o = ce.makeArray(t),
            a = i.length;
          while (a--) ((r = i[a]).selected = -1 < ce.inArray(ce.valHooks.option.get(r), o)) && (n = !0);
          return n || (e.selectedIndex = -1), o;
        }
      }
    }
  }), ce.each(["radio", "checkbox"], function () {
    ce.valHooks[this] = {
      set: function (e, t) {
        if (Array.isArray(t)) return e.checked = -1 < ce.inArray(ce(e).val(), t);
      }
    }, le.checkOn || (ce.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  });
  var Et = ie.location,
    jt = {
      guid: Date.now()
    },
    At = /\?/;
  ce.parseXML = function (e) {
    var t, n;
    if (!e || "string" != typeof e) return null;
    try {
      t = new ie.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {}
    return n = t && t.getElementsByTagName("parsererror")[0], t && !n || ce.error("Invalid XML: " + (n ? ce.map(n.childNodes, function (e) {
      return e.textContent;
    }).join("\n") : e)), t;
  };
  var Dt = /^(?:focusinfocus|focusoutblur)$/,
    Nt = function (e) {
      e.stopPropagation();
    };
  ce.extend(ce.event, {
    trigger: function (e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        p = [n || C],
        d = ue.call(e, "type") ? e.type : e,
        h = ue.call(e, "namespace") ? e.namespace.split(".") : [];
      if (o = f = a = n = n || C, 3 !== n.nodeType && 8 !== n.nodeType && !Dt.test(d + ce.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[ce.expando] ? e : new ce.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : ce.makeArray(t, [e]), c = ce.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
        if (!r && !c.noBubble && !y(n)) {
          for (s = c.delegateType || d, Dt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;
          a === (n.ownerDocument || C) && p.push(a.defaultView || a.parentWindow || ie);
        }
        i = 0;
        while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (_.get(o, "events") || Object.create(null))[e.type] && _.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && $(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
        return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !$(n) || u && v(n[d]) && !y(n) && ((a = n[u]) && (n[u] = null), ce.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, Nt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, Nt), ce.event.triggered = void 0, a && (n[u] = a)), e.result;
      }
    },
    simulate: function (e, t, n) {
      var r = ce.extend(new ce.Event(), n, {
        type: e,
        isSimulated: !0
      });
      ce.event.trigger(r, null, t);
    }
  }), ce.fn.extend({
    trigger: function (e, t) {
      return this.each(function () {
        ce.event.trigger(e, t, this);
      });
    },
    triggerHandler: function (e, t) {
      var n = this[0];
      if (n) return ce.event.trigger(e, t, n, !0);
    }
  });
  var qt = /\[\]$/,
    Lt = /\r?\n/g,
    Ht = /^(?:submit|button|image|reset|file)$/i,
    Ot = /^(?:input|select|textarea|keygen)/i;
  function Pt(n, e, r, i) {
    var t;
    if (Array.isArray(e)) ce.each(e, function (e, t) {
      r || qt.test(n) ? i(n, t) : Pt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i);
    });else if (r || "object" !== x(e)) i(n, e);else for (t in e) Pt(n + "[" + t + "]", e[t], r, i);
  }
  ce.param = function (e, t) {
    var n,
      r = [],
      i = function (e, t) {
        var n = v(t) ? t() : t;
        r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (null == e) return "";
    if (Array.isArray(e) || e.jquery && !ce.isPlainObject(e)) ce.each(e, function () {
      i(this.name, this.value);
    });else for (n in e) Pt(n, e[n], t, i);
    return r.join("&");
  }, ce.fn.extend({
    serialize: function () {
      return ce.param(this.serializeArray());
    },
    serializeArray: function () {
      return this.map(function () {
        var e = ce.prop(this, "elements");
        return e ? ce.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;
        return this.name && !ce(this).is(":disabled") && Ot.test(this.nodeName) && !Ht.test(e) && (this.checked || !we.test(e));
      }).map(function (e, t) {
        var n = ce(this).val();
        return null == n ? null : Array.isArray(n) ? ce.map(n, function (e) {
          return {
            name: t.name,
            value: e.replace(Lt, "\r\n")
          };
        }) : {
          name: t.name,
          value: n.replace(Lt, "\r\n")
        };
      }).get();
    }
  });
  var Rt = /%20/g,
    Mt = /#.*$/,
    It = /([?&])_=[^&]*/,
    Wt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Ft = /^(?:GET|HEAD)$/,
    $t = /^\/\//,
    Bt = {},
    _t = {},
    Xt = "*/".concat("*"),
    Ut = C.createElement("a");
  function zt(o) {
    return function (e, t) {
      "string" != typeof e && (t = e, e = "*");
      var n,
        r = 0,
        i = e.toLowerCase().match(D) || [];
      if (v(t)) while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t);
    };
  }
  function Vt(t, i, o, a) {
    var s = {},
      u = t === _t;
    function l(e) {
      var r;
      return s[e] = !0, ce.each(t[e] || [], function (e, t) {
        var n = t(i, o, a);
        return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1);
      }), r;
    }
    return l(i.dataTypes[0]) || !s["*"] && l("*");
  }
  function Gt(e, t) {
    var n,
      r,
      i = ce.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && ce.extend(!0, e, r), e;
  }
  Ut.href = Et.href, ce.extend({
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
        "*": Xt,
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
        "text xml": ce.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function (e, t) {
      return t ? Gt(Gt(e, ce.ajaxSettings), t) : Gt(ce.ajaxSettings, e);
    },
    ajaxPrefilter: zt(Bt),
    ajaxTransport: zt(_t),
    ajax: function (e, t) {
      "object" == typeof e && (t = e, e = void 0), t = t || {};
      var c,
        f,
        p,
        n,
        d,
        r,
        h,
        g,
        i,
        o,
        v = ce.ajaxSetup({}, t),
        y = v.context || v,
        m = v.context && (y.nodeType || y.jquery) ? ce(y) : ce.event,
        x = ce.Deferred(),
        b = ce.Callbacks("once memory"),
        w = v.statusCode || {},
        a = {},
        s = {},
        u = "canceled",
        T = {
          readyState: 0,
          getResponseHeader: function (e) {
            var t;
            if (h) {
              if (!n) {
                n = {};
                while (t = Wt.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
              }
              t = n[e.toLowerCase() + " "];
            }
            return null == t ? null : t.join(", ");
          },
          getAllResponseHeaders: function () {
            return h ? p : null;
          },
          setRequestHeader: function (e, t) {
            return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this;
          },
          overrideMimeType: function (e) {
            return null == h && (v.mimeType = e), this;
          },
          statusCode: function (e) {
            var t;
            if (e) if (h) T.always(e[T.status]);else for (t in e) w[t] = [w[t], e[t]];
            return this;
          },
          abort: function (e) {
            var t = e || u;
            return c && c.abort(t), l(0, t), this;
          }
        };
      if (x.promise(T), v.url = ((e || v.url || Et.href) + "").replace($t, Et.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(D) || [""], null == v.crossDomain) {
        r = C.createElement("a");
        try {
          r.href = v.url, r.href = r.href, v.crossDomain = Ut.protocol + "//" + Ut.host != r.protocol + "//" + r.host;
        } catch (e) {
          v.crossDomain = !0;
        }
      }
      if (v.data && v.processData && "string" != typeof v.data && (v.data = ce.param(v.data, v.traditional)), Vt(Bt, v, t, T), h) return T;
      for (i in (g = ce.event && v.global) && 0 == ce.active++ && ce.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Ft.test(v.type), f = v.url.replace(Mt, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Rt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (At.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(It, "$1"), o = (At.test(f) ? "&" : "?") + "_=" + jt.guid++ + o), v.url = f + o), v.ifModified && (ce.lastModified[f] && T.setRequestHeader("If-Modified-Since", ce.lastModified[f]), ce.etag[f] && T.setRequestHeader("If-None-Match", ce.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + Xt + "; q=0.01" : "") : v.accepts["*"]), v.headers) T.setRequestHeader(i, v.headers[i]);
      if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();
      if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = Vt(_t, v, t, T)) {
        if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
        v.async && 0 < v.timeout && (d = ie.setTimeout(function () {
          T.abort("timeout");
        }, v.timeout));
        try {
          h = !1, c.send(a, l);
        } catch (e) {
          if (h) throw e;
          l(-1, e);
        }
      } else l(-1, "No Transport");
      function l(e, t, n, r) {
        var i,
          o,
          a,
          s,
          u,
          l = t;
        h || (h = !0, d && ie.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) {
          var r,
            i,
            o,
            a,
            s = e.contents,
            u = e.dataTypes;
          while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
          if (r) for (i in s) if (s[i] && s[i].test(r)) {
            u.unshift(i);
            break;
          }
          if (u[0] in n) o = u[0];else {
            for (i in n) {
              if (!u[0] || e.converters[i + " " + u[0]]) {
                o = i;
                break;
              }
              a || (a = i);
            }
            o = o || a;
          }
          if (o) return o !== u[0] && u.unshift(o), n[o];
        }(v, T, n)), !i && -1 < ce.inArray("script", v.dataTypes) && ce.inArray("json", v.dataTypes) < 0 && (v.converters["text script"] = function () {}), s = function (e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = {},
            c = e.dataTypes.slice();
          if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
          o = c.shift();
          while (o) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;else if ("*" !== u && u !== o) {
            if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
              !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
              break;
            }
            if (!0 !== a) if (a && e["throws"]) t = a(t);else try {
              t = a(t);
            } catch (e) {
              return {
                state: "parsererror",
                error: a ? e : "No conversion from " + u + " to " + o
              };
            }
          }
          return {
            state: "success",
            data: t
          };
        }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (ce.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (ce.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --ce.active || ce.event.trigger("ajaxStop")));
      }
      return T;
    },
    getJSON: function (e, t, n) {
      return ce.get(e, t, n, "json");
    },
    getScript: function (e, t) {
      return ce.get(e, void 0, t, "script");
    }
  }), ce.each(["get", "post"], function (e, i) {
    ce[i] = function (e, t, n, r) {
      return v(t) && (r = r || n, n = t, t = void 0), ce.ajax(ce.extend({
        url: e,
        type: i,
        dataType: r,
        data: t,
        success: n
      }, ce.isPlainObject(e) && e));
    };
  }), ce.ajaxPrefilter(function (e) {
    var t;
    for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
  }), ce._evalUrl = function (e, t, n) {
    return ce.ajax({
      url: e,
      type: "GET",
      dataType: "script",
      cache: !0,
      async: !1,
      global: !1,
      converters: {
        "text script": function () {}
      },
      dataFilter: function (e) {
        ce.globalEval(e, t, n);
      }
    });
  }, ce.fn.extend({
    wrapAll: function (e) {
      var t;
      return this[0] && (v(e) && (e = e.call(this[0])), t = ce(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        var e = this;
        while (e.firstElementChild) e = e.firstElementChild;
        return e;
      }).append(this)), this;
    },
    wrapInner: function (n) {
      return v(n) ? this.each(function (e) {
        ce(this).wrapInner(n.call(this, e));
      }) : this.each(function () {
        var e = ce(this),
          t = e.contents();
        t.length ? t.wrapAll(n) : e.append(n);
      });
    },
    wrap: function (t) {
      var n = v(t);
      return this.each(function (e) {
        ce(this).wrapAll(n ? t.call(this, e) : t);
      });
    },
    unwrap: function (e) {
      return this.parent(e).not("body").each(function () {
        ce(this).replaceWith(this.childNodes);
      }), this;
    }
  }), ce.expr.pseudos.hidden = function (e) {
    return !ce.expr.pseudos.visible(e);
  }, ce.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
  }, ce.ajaxSettings.xhr = function () {
    try {
      return new ie.XMLHttpRequest();
    } catch (e) {}
  };
  var Yt = {
      0: 200,
      1223: 204
    },
    Qt = ce.ajaxSettings.xhr();
  le.cors = !!Qt && "withCredentials" in Qt, le.ajax = Qt = !!Qt, ce.ajaxTransport(function (i) {
    var o, a;
    if (le.cors || Qt && !i.crossDomain) return {
      send: function (e, t) {
        var n,
          r = i.xhr();
        if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields) for (n in i.xhrFields) r[n] = i.xhrFields[n];
        for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
        o = function (e) {
          return function () {
            o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Yt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
              binary: r.response
            } : {
              text: r.responseText
            }, r.getAllResponseHeaders()));
          };
        }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function () {
          4 === r.readyState && ie.setTimeout(function () {
            o && a();
          });
        }, o = o("abort");
        try {
          r.send(i.hasContent && i.data || null);
        } catch (e) {
          if (o) throw e;
        }
      },
      abort: function () {
        o && o();
      }
    };
  }), ce.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = !1);
  }), ce.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function (e) {
        return ce.globalEval(e), e;
      }
    }
  }), ce.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
  }), ce.ajaxTransport("script", function (n) {
    var r, i;
    if (n.crossDomain || n.scriptAttrs) return {
      send: function (e, t) {
        r = ce("<script>").attr(n.scriptAttrs || {}).prop({
          charset: n.scriptCharset,
          src: n.url
        }).on("load error", i = function (e) {
          r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type);
        }), C.head.appendChild(r[0]);
      },
      abort: function () {
        i && i();
      }
    };
  });
  var Jt,
    Kt = [],
    Zt = /(=)\?(?=&|$)|\?\?/;
  ce.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = Kt.pop() || ce.expando + "_" + jt.guid++;
      return this[e] = !0, e;
    }
  }), ce.ajaxPrefilter("json jsonp", function (e, t, n) {
    var r,
      i,
      o,
      a = !1 !== e.jsonp && (Zt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Zt.test(e.data) && "data");
    if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Zt, "$1" + r) : !1 !== e.jsonp && (e.url += (At.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
      return o || ce.error(r + " was not called"), o[0];
    }, e.dataTypes[0] = "json", i = ie[r], ie[r] = function () {
      o = arguments;
    }, n.always(function () {
      void 0 === i ? ce(ie).removeProp(r) : ie[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Kt.push(r)), o && v(i) && i(o[0]), o = i = void 0;
    }), "script";
  }), le.createHTMLDocument = ((Jt = C.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Jt.childNodes.length), ce.parseHTML = function (e, t, n) {
    return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (le.createHTMLDocument ? ((r = (t = C.implementation.createHTMLDocument("")).createElement("base")).href = C.location.href, t.head.appendChild(r)) : t = C), o = !n && [], (i = w.exec(e)) ? [t.createElement(i[1])] : (i = Ae([e], t, o), o && o.length && ce(o).remove(), ce.merge([], i.childNodes)));
    var r, i, o;
  }, ce.fn.load = function (e, t, n) {
    var r,
      i,
      o,
      a = this,
      s = e.indexOf(" ");
    return -1 < s && (r = Tt(e.slice(s)), e = e.slice(0, s)), v(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && ce.ajax({
      url: e,
      type: i || "GET",
      dataType: "html",
      data: t
    }).done(function (e) {
      o = arguments, a.html(r ? ce("<div>").append(ce.parseHTML(e)).find(r) : e);
    }).always(n && function (e, t) {
      a.each(function () {
        n.apply(this, o || [e.responseText, t, e]);
      });
    }), this;
  }, ce.expr.pseudos.animated = function (t) {
    return ce.grep(ce.timers, function (e) {
      return t === e.elem;
    }).length;
  }, ce.offset = {
    setOffset: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l = ce.css(e, "position"),
        c = ce(e),
        f = {};
      "static" === l && (e.style.position = "relative"), s = c.offset(), o = ce.css(e, "top"), u = ce.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), v(t) && (t = t.call(e, n, ce.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f);
    }
  }, ce.fn.extend({
    offset: function (t) {
      if (arguments.length) return void 0 === t ? this : this.each(function (e) {
        ce.offset.setOffset(this, t, e);
      });
      var e,
        n,
        r = this[0];
      return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
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
          r = this[0],
          i = {
            top: 0,
            left: 0
          };
        if ("fixed" === ce.css(r, "position")) t = r.getBoundingClientRect();else {
          t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
          while (e && (e === n.body || e === n.documentElement) && "static" === ce.css(e, "position")) e = e.parentNode;
          e && e !== r && 1 === e.nodeType && ((i = ce(e).offset()).top += ce.css(e, "borderTopWidth", !0), i.left += ce.css(e, "borderLeftWidth", !0));
        }
        return {
          top: t.top - i.top - ce.css(r, "marginTop", !0),
          left: t.left - i.left - ce.css(r, "marginLeft", !0)
        };
      }
    },
    offsetParent: function () {
      return this.map(function () {
        var e = this.offsetParent;
        while (e && "static" === ce.css(e, "position")) e = e.offsetParent;
        return e || J;
      });
    }
  }), ce.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (t, i) {
    var o = "pageYOffset" === i;
    ce.fn[t] = function (e) {
      return R(this, function (e, t, n) {
        var r;
        if (y(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
        r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n;
      }, t, e, arguments.length);
    };
  }), ce.each(["top", "left"], function (e, n) {
    ce.cssHooks[n] = Ye(le.pixelPosition, function (e, t) {
      if (t) return t = Ge(e, n), _e.test(t) ? ce(e).position()[n] + "px" : t;
    });
  }), ce.each({
    Height: "height",
    Width: "width"
  }, function (a, s) {
    ce.each({
      padding: "inner" + a,
      content: s,
      "": "outer" + a
    }, function (r, o) {
      ce.fn[o] = function (e, t) {
        var n = arguments.length && (r || "boolean" != typeof e),
          i = r || (!0 === e || !0 === t ? "margin" : "border");
        return R(this, function (e, t, n) {
          var r;
          return y(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? ce.css(e, t, i) : ce.style(e, t, n, i);
        }, s, n ? e : void 0, n);
      };
    });
  }), ce.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    ce.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), ce.fn.extend({
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
    },
    hover: function (e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    }
  }), ce.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
    ce.fn[n] = function (e, t) {
      return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
    };
  });
  var en = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
  ce.proxy = function (e, t) {
    var n, r, i;
    if ("string" == typeof t && (n = e[t], t = e, e = n), v(e)) return r = ae.call(arguments, 2), (i = function () {
      return e.apply(t || this, r.concat(ae.call(arguments)));
    }).guid = e.guid = e.guid || ce.guid++, i;
  }, ce.holdReady = function (e) {
    e ? ce.readyWait++ : ce.ready(!0);
  }, ce.isArray = Array.isArray, ce.parseJSON = JSON.parse, ce.nodeName = fe, ce.isFunction = v, ce.isWindow = y, ce.camelCase = F, ce.type = x, ce.now = Date.now, ce.isNumeric = function (e) {
    var t = ce.type(e);
    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
  }, ce.trim = function (e) {
    return null == e ? "" : (e + "").replace(en, "$1");
  }, "function" == typeof define && define.amd && define("jquery", [], function () {
    return ce;
  });
  var tn = ie.jQuery,
    nn = ie.$;
  return ce.noConflict = function (e) {
    return ie.$ === ce && (ie.$ = nn), e && ie.jQuery === ce && (ie.jQuery = tn), ce;
  }, "undefined" == typeof e && (ie.jQuery = ie.$ = ce), ce;
});
;
/* @license GNU-GPL-2.0-or-later https://git.drupalcode.org/project/once/-/raw/v1.0.1/LICENSE.md */
/*! @drupal/once - v1.0.1 - 2021-06-12 */
var once = function () {
  "use strict";

  var n = /[\11\12\14\15\40]+/,
    e = "data-once",
    t = document;
  function r(n, t, r) {
    return n[t + "Attribute"](e, r);
  }
  function o(e) {
    if ("string" != typeof e) throw new TypeError("once ID must be a string");
    if ("" === e || n.test(e)) throw new RangeError("once ID must not be empty or contain spaces");
    return '[data-once~="' + e + '"]';
  }
  function u(n) {
    if (!(n instanceof Element)) throw new TypeError("The element must be an instance of Element");
    return !0;
  }
  function i(n, e) {
    void 0 === e && (e = t);
    var r = n;
    if (null === n) r = [];else {
      if (!n) throw new TypeError("Selector must not be empty");
      "string" != typeof n || e !== t && !u(e) ? n instanceof Element && (r = [n]) : r = e.querySelectorAll(n);
    }
    return Array.prototype.slice.call(r);
  }
  function c(n, e, t) {
    return e.filter(function (e) {
      var r = u(e) && e.matches(n);
      return r && t && t(e), r;
    });
  }
  function f(e, t) {
    var o = t.add,
      u = t.remove,
      i = [];
    r(e, "has") && r(e, "get").trim().split(n).forEach(function (n) {
      i.indexOf(n) < 0 && n !== u && i.push(n);
    }), o && i.push(o);
    var c = i.join(" ");
    r(e, "" === c ? "remove" : "set", c);
  }
  function a(n, e, t) {
    return c(":not(" + o(n) + ")", i(e, t), function (e) {
      return f(e, {
        add: n
      });
    });
  }
  return a.remove = function (n, e, t) {
    return c(o(n), i(e, t), function (e) {
      return f(e, {
        remove: n
      });
    });
  }, a.filter = function (n, e, t) {
    return c(o(n), i(e, t));
  }, a.find = function (n, e) {
    return i(n ? o(n) : "[data-once]", e);
  }, a;
}();
;
/* @license GNU-GPL-2.0-or-later https://www.drupal.org/licensing/faq */
// track HTML5 localStorage usage
if (window.localStorage) {
  const nativeSetItem = localStorage.setItem;
  localStorage.setItem = new Proxy(nativeSetItem, {
    apply: function (target, thisArg, argumentsList) {
      const eventName = 'localStorage.setItem';
      const eventInfo = {
        eventName: eventName,
        key: argumentsList[0],
        value: argumentsList[1],
        timestamp: new Date().toISOString(),
        uuid: generateUUID()
      };
      sendEventInfoToServer(eventInfo);
      return Reflect.apply(...arguments);
    }
  });
}

// track HTML5 sessionStorage
(function () {
  const settingsElement = document.querySelector('head > script[type="application/json"][data-drupal-selector="drupal-settings-json"], body > script[type="application/json"][data-drupal-selector="drupal-settings-json"]');
  window.drupalSettings = {};
  if (settingsElement !== null) window.drupalSettings = JSON.parse(settingsElement.textContent);
})();
;
if (window.sessionStorage) {
  const nativeSessionSet = sessionStorage.setItem;
  sessionStorage.setItem = new Proxy(nativeSessionSet, {
    apply: function (target, thisArg, argumentsList) {
      const eventName = 'sessionStorage.setItem';
      const eventInfo = {
        eventName: eventName,
        key: argumentsList[0],
        value: argumentsList[1],
        timestamp: new Date().toISOString(),
        uuid: generateUUID()
      };
      sendEventInfoToServer(eventInfo);
      return Reflect.apply(...arguments);
    }
  });
}

// track variables and functions added to the global namespace
window.Drupal = {
  behaviors: {},
  locale: {}
};
const nativeDefineProperty = Object.defineProperty;
(function (Drupal, drupalSettings, drupalTranslations, console, Proxy, Reflect) {
  Drupal.throwError = function (error) {
    setTimeout(() => {
      throw error;
    }, 0);
  };
  Drupal.attachBehaviors = function (context, settings) {
    context = context || document;
    settings = settings || drupalSettings;
    const behaviors = Drupal.behaviors;
    Object.keys(behaviors || {}).forEach(i => {
      if (typeof behaviors[i].attach === 'function') try {
        behaviors[i].attach(context, settings);
      } catch (e) {
        Drupal.throwError(e);
      }
    });
  };
  Drupal.detachBehaviors = function (context, settings, trigger) {
    context = context || document;
    settings = settings || drupalSettings;
    trigger = trigger || 'unload';
    const behaviors = Drupal.behaviors;
    Object.keys(behaviors || {}).forEach(i => {
      if (typeof behaviors[i].detach === 'function') try {
        behaviors[i].detach(context, settings, trigger);
      } catch (e) {
        Drupal.throwError(e);
      }
    });
  };
  Drupal.checkPlain = function (str) {
    str = str.toString().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    return str;
  };
  Drupal.formatString = function (str, args) {
    const processedArgs = {};
    Object.keys(args || {}).forEach(key => {
      switch (key.charAt(0)) {
        case '@':
          processedArgs[key] = Drupal.checkPlain(args[key]);
          break;
        case '!':
          processedArgs[key] = args[key];
          break;
        default:
          processedArgs[key] = Drupal.theme('placeholder', args[key]);
          break;
      }
    });
    return Drupal.stringReplace(str, processedArgs, null);
  };
  Drupal.stringReplace = function (str, args, keys) {
    if (str.length === 0) return str;
    if (!Array.isArray(keys)) {
      keys = Object.keys(args || {});
      keys.sort((a, b) => a.length - b.length);
    }
    if (keys.length === 0) return str;
    const key = keys.pop();
    const fragments = str.split(key);
    if (keys.length) {
      for (let i = 0; i < fragments.length; i++) fragments[i] = Drupal.stringReplace(fragments[i], args, keys.slice(0));
    }
    return fragments.join(args[key]);
  };
  Drupal.t = function (str, args, options) {
    options = options || {};
    options.context = options.context || '';
    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.strings && drupalTranslations.strings[options.context] && drupalTranslations.strings[options.context][str]) str = drupalTranslations.strings[options.context][str];
    if (args) str = Drupal.formatString(str, args);
    return str;
  };
  Drupal.url = function (path) {
    return drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + path;
  };
  Drupal.url.toAbsolute = function (url) {
    const urlParsingNode = document.createElement('a');
    try {
      url = decodeURIComponent(url);
    } catch (e) {}
    urlParsingNode.setAttribute('href', url);
    return urlParsingNode.cloneNode(false).href;
  };
  Drupal.url.isLocal = function (url) {
    let absoluteUrl = Drupal.url.toAbsolute(url);
    let {
      protocol
    } = window.location;
    if (protocol === 'http:' && absoluteUrl.indexOf('https:') === 0) protocol = 'https:';
    let baseUrl = `${protocol}//${window.location.host}${drupalSettings.path.baseUrl.slice(0, -1)}`;
    try {
      absoluteUrl = decodeURIComponent(absoluteUrl);
    } catch (e) {}
    try {
      baseUrl = decodeURIComponent(baseUrl);
    } catch (e) {}
    return absoluteUrl === baseUrl || absoluteUrl.indexOf(`${baseUrl}/`) === 0;
  };
  Drupal.formatPlural = function (count, singular, plural, args, options) {
    args = args || {};
    args['@count'] = count;
    const pluralDelimiter = drupalSettings.pluralDelimiter;
    const translations = Drupal.t(singular + pluralDelimiter + plural, args, options).split(pluralDelimiter);
    let index = 0;
    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.pluralFormula) index = count in drupalTranslations.pluralFormula ? drupalTranslations.pluralFormula[count] : drupalTranslations.pluralFormula.default;else {
      if (args['@count'] !== 1) index = 1;
    }
    return translations[index];
  };
  Drupal.encodePath = function (item) {
    return window.encodeURIComponent(item).replace(/%2F/g, '/');
  };
  Drupal.deprecationError = ({
    message
  }) => {
    if (drupalSettings.suppressDeprecationErrors === false && typeof console !== 'undefined' && console.warn) console.warn(`[Deprecation] ${message}`);
  };
  Drupal.deprecatedProperty = ({
    target,
    deprecatedProperty,
    message
  }) => {
    if (!Proxy || !Reflect) return target;
    return new Proxy(target, {
      get: (target, key, ...rest) => {
        if (key === deprecatedProperty) Drupal.deprecationError({
          message
        });
        return Reflect.get(target, key, ...rest);
      }
    });
  };
  Drupal.theme = function (func, ...args) {
    if (func in Drupal.theme) return Drupal.theme[func](...args);
  };
  Drupal.theme.placeholder = function (str) {
    return `<em class="placeholder">${Drupal.checkPlain(str)}</em>`;
  };
})(Drupal, window.drupalSettings, window.drupalTranslations, window.console, window.Proxy, window.Reflect);
;
if (window.jQuery) jQuery.noConflict();
document.documentElement.className += ' js';
Object.defineProperty = new Proxy(nativeDefineProperty, {
  apply: function (target, thisArg, argumentsList) {
    if (thisArg === window) {
      const eventName = 'window.defineProperty';
      const eventInfo = {
        eventName: eventName,
        propertyName: argumentsList[0],
        propertyDescriptor: argumentsList[1],
        timestamp: new Date().toISOString(),
        uuid: generateUUID()
      };
      sendEventInfoToServer(eventInfo);
    }
    return Reflect.apply(...arguments);
  }
});

// hook XMLHttpRequest's open and send methods
(function (Drupal, drupalSettings) {
  const domReady = callback => {
    const listener = () => {
      callback();
      document.removeEventListener('DOMContentLoaded', listener);
    };
    if (document.readyState !== 'loading') setTimeout(callback, 0);else document.addEventListener('DOMContentLoaded', listener);
  };
  domReady(() => {
    Drupal.attachBehaviors(document, drupalSettings);
  });
})(Drupal, window.drupalSettings);
;
(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module ? module.exports = t() : 'function' == typeof define && define.amd ? define(t) : e.Popper = t();
})(this, function () {
  'use strict';

  function e(e) {
    return e && '[object Function]' === {}.toString.call(e);
  }
  function t(e, t) {
    if (1 !== e.nodeType) return [];
    var o = window.getComputedStyle(e, null);
    return t ? o[t] : o;
  }
  function o(e) {
    return 'HTML' === e.nodeName ? e : e.parentNode || e.host;
  }
  function n(e) {
    if (!e || -1 !== ['HTML', 'BODY', '#document'].indexOf(e.nodeName)) return window.document.body;
    var i = t(e),
      r = i.overflow,
      p = i.overflowX,
      s = i.overflowY;
    return /(auto|scroll)/.test(r + s + p) ? e : n(o(e));
  }
  function r(e) {
    var o = e && e.offsetParent,
      i = o && o.nodeName;
    return i && 'BODY' !== i && 'HTML' !== i ? -1 !== ['TD', 'TABLE'].indexOf(o.nodeName) && 'static' === t(o, 'position') ? r(o) : o : window.document.documentElement;
  }
  function p(e) {
    var t = e.nodeName;
    return 'BODY' !== t && ('HTML' === t || r(e.firstElementChild) === e);
  }
  function s(e) {
    return null === e.parentNode ? e : s(e.parentNode);
  }
  function d(e, t) {
    if (!e || !e.nodeType || !t || !t.nodeType) return window.document.documentElement;
    var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
      i = o ? e : t,
      n = o ? t : e,
      a = document.createRange();
    a.setStart(i, 0), a.setEnd(n, 0);
    var l = a.commonAncestorContainer;
    if (e !== l && t !== l || i.contains(n)) return p(l) ? l : r(l);
    var f = s(e);
    return f.host ? d(f.host, t) : d(e, s(t).host);
  }
  function a(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'top',
      o = 'top' === t ? 'scrollTop' : 'scrollLeft',
      i = e.nodeName;
    if ('BODY' === i || 'HTML' === i) {
      var n = window.document.documentElement,
        r = window.document.scrollingElement || n;
      return r[o];
    }
    return e[o];
  }
  function l(e, t) {
    var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
      i = a(t, 'top'),
      n = a(t, 'left'),
      r = o ? -1 : 1;
    return e.top += i * r, e.bottom += i * r, e.left += n * r, e.right += n * r, e;
  }
  function f(e, t) {
    var o = 'x' === t ? 'Left' : 'Top',
      i = 'Left' == o ? 'Right' : 'Bottom';
    return +e['border' + o + 'Width'].split('px')[0] + +e['border' + i + 'Width'].split('px')[0];
  }
  function m(e, t, o, i) {
    return X(t['offset' + e], t['scroll' + e], o['client' + e], o['offset' + e], o['scroll' + e], ne() ? o['offset' + e] + i['margin' + ('Height' === e ? 'Top' : 'Left')] + i['margin' + ('Height' === e ? 'Bottom' : 'Right')] : 0);
  }
  function c() {
    var e = window.document.body,
      t = window.document.documentElement,
      o = ne() && window.getComputedStyle(t);
    return {
      height: m('Height', e, t, o),
      width: m('Width', e, t, o)
    };
  }
  function h(e) {
    return de({}, e, {
      right: e.left + e.width,
      bottom: e.top + e.height
    });
  }
  function g(e) {
    var o = {};
    if (ne()) try {
      o = e.getBoundingClientRect();
      var i = a(e, 'top'),
        n = a(e, 'left');
      o.top += i, o.left += n, o.bottom += i, o.right += n;
    } catch (e) {} else o = e.getBoundingClientRect();
    var r = {
        left: o.left,
        top: o.top,
        width: o.right - o.left,
        height: o.bottom - o.top
      },
      p = 'HTML' === e.nodeName ? c() : {},
      s = p.width || e.clientWidth || r.right - r.left,
      d = p.height || e.clientHeight || r.bottom - r.top,
      l = e.offsetWidth - s,
      m = e.offsetHeight - d;
    if (l || m) {
      var g = t(e);
      l -= f(g, 'x'), m -= f(g, 'y'), r.width -= l, r.height -= m;
    }
    return h(r);
  }
  function u(e, o) {
    var i = ne(),
      r = 'HTML' === o.nodeName,
      p = g(e),
      s = g(o),
      d = n(e),
      a = t(o),
      f = +a.borderTopWidth.split('px')[0],
      m = +a.borderLeftWidth.split('px')[0],
      c = h({
        top: p.top - s.top - f,
        left: p.left - s.left - m,
        width: p.width,
        height: p.height
      });
    if (c.marginTop = 0, c.marginLeft = 0, !i && r) {
      var u = +a.marginTop.split('px')[0],
        b = +a.marginLeft.split('px')[0];
      c.top -= f - u, c.bottom -= f - u, c.left -= m - b, c.right -= m - b, c.marginTop = u, c.marginLeft = b;
    }
    return (i ? o.contains(d) : o === d && 'BODY' !== d.nodeName) && (c = l(c, o)), c;
  }
  function b(e) {
    var t = window.document.documentElement,
      o = u(e, t),
      i = X(t.clientWidth, window.innerWidth || 0),
      n = X(t.clientHeight, window.innerHeight || 0),
      r = a(t),
      p = a(t, 'left'),
      s = {
        top: r - o.top + o.marginTop,
        left: p - o.left + o.marginLeft,
        width: i,
        height: n
      };
    return h(s);
  }
  function y(e) {
    var i = e.nodeName;
    return 'BODY' === i || 'HTML' === i ? !1 : 'fixed' === t(e, 'position') || y(o(e));
  }
  function w(e, t, i, r) {
    var p = {
        top: 0,
        left: 0
      },
      s = d(e, t);
    if ('viewport' === r) p = b(s);else {
      var a;
      'scrollParent' === r ? (a = n(o(e)), 'BODY' === a.nodeName && (a = window.document.documentElement)) : 'window' === r ? a = window.document.documentElement : a = r;
      var l = u(a, s);
      if ('HTML' === a.nodeName && !y(s)) {
        var f = c(),
          m = f.height,
          h = f.width;
        p.top += l.top - l.marginTop, p.bottom = m + l.top, p.left += l.left - l.marginLeft, p.right = h + l.left;
      } else p = l;
    }
    return p.left += i, p.top += i, p.right -= i, p.bottom -= i, p;
  }
  function E(e) {
    var t = e.width,
      o = e.height;
    return t * o;
  }
  function v(e, t, o, i, n) {
    var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
    if (-1 === e.indexOf('auto')) return e;
    var p = w(o, i, r, n),
      s = {
        top: {
          width: p.width,
          height: t.top - p.top
        },
        right: {
          width: p.right - t.right,
          height: p.height
        },
        bottom: {
          width: p.width,
          height: p.bottom - t.bottom
        },
        left: {
          width: t.left - p.left,
          height: p.height
        }
      },
      d = Object.keys(s).map(function (e) {
        return de({
          key: e
        }, s[e], {
          area: E(s[e])
        });
      }).sort(function (e, t) {
        return t.area - e.area;
      }),
      a = d.filter(function (e) {
        var t = e.width,
          i = e.height;
        return t >= o.clientWidth && i >= o.clientHeight;
      }),
      l = 0 < a.length ? a[0].key : d[0].key,
      f = e.split('-')[1];
    return l + (f ? '-' + f : '');
  }
  function x(e, t, o) {
    var i = d(t, o);
    return u(o, i);
  }
  function O(e) {
    var t = window.getComputedStyle(e),
      o = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
      i = parseFloat(t.marginLeft) + parseFloat(t.marginRight),
      n = {
        width: e.offsetWidth + i,
        height: e.offsetHeight + o
      };
    return n;
  }
  function L(e) {
    var t = {
      left: 'right',
      right: 'left',
      bottom: 'top',
      top: 'bottom'
    };
    return e.replace(/left|right|bottom|top/g, function (e) {
      return t[e];
    });
  }
  function S(e, t, o) {
    o = o.split('-')[0];
    var i = O(e),
      n = {
        width: i.width,
        height: i.height
      },
      r = -1 !== ['right', 'left'].indexOf(o),
      p = r ? 'top' : 'left',
      s = r ? 'left' : 'top',
      d = r ? 'height' : 'width',
      a = r ? 'width' : 'height';
    return n[p] = t[p] + t[d] / 2 - i[d] / 2, n[s] = o === s ? t[s] - i[a] : t[L(s)], n;
  }
  function T(e, t) {
    return Array.prototype.find ? e.find(t) : e.filter(t)[0];
  }
  function C(e, t, o) {
    if (Array.prototype.findIndex) return e.findIndex(function (e) {
      return e[t] === o;
    });
    var i = T(e, function (e) {
      return e[t] === o;
    });
    return e.indexOf(i);
  }
  function N(t, o, i) {
    var n = void 0 === i ? t : t.slice(0, C(t, 'name', i));
    return n.forEach(function (t) {
      t.function && console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
      var i = t.function || t.fn;
      t.enabled && e(i) && (o.offsets.popper = h(o.offsets.popper), o.offsets.reference = h(o.offsets.reference), o = i(o, t));
    }), o;
  }
  function k() {
    if (!this.state.isDestroyed) {
      var e = {
        instance: this,
        styles: {},
        arrowStyles: {},
        attributes: {},
        flipped: !1,
        offsets: {}
      };
      e.offsets.reference = x(this.state, this.popper, this.reference), e.placement = v(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.offsets.popper = S(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = 'absolute', e = N(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e));
    }
  }
  function W(e, t) {
    return e.some(function (e) {
      var o = e.name,
        i = e.enabled;
      return i && o === t;
    });
  }
  function B(e) {
    for (var t = [!1, 'ms', 'Webkit', 'Moz', 'O'], o = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length - 1; n++) {
      var i = t[n],
        r = i ? '' + i + o : e;
      if ('undefined' != typeof window.document.body.style[r]) return r;
    }
    return null;
  }
  function P() {
    return this.state.isDestroyed = !0, W(this.modifiers, 'applyStyle') && (this.popper.removeAttribute('x-placement'), this.popper.style.left = '', this.popper.style.position = '', this.popper.style.top = '', this.popper.style[B('transform')] = ''), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this;
  }
  function D(e, t, o, i) {
    var r = 'BODY' === e.nodeName,
      p = r ? window : e;
    p.addEventListener(t, o, {
      passive: !0
    }), r || D(n(p.parentNode), t, o, i), i.push(p);
  }
  function H(e, t, o, i) {
    o.updateBound = i, window.addEventListener('resize', o.updateBound, {
      passive: !0
    });
    var r = n(e);
    return D(r, 'scroll', o.updateBound, o.scrollParents), o.scrollElement = r, o.eventsEnabled = !0, o;
  }
  function A() {
    this.state.eventsEnabled || (this.state = H(this.reference, this.options, this.state, this.scheduleUpdate));
  }
  function M(e, t) {
    return window.removeEventListener('resize', t.updateBound), t.scrollParents.forEach(function (e) {
      e.removeEventListener('scroll', t.updateBound);
    }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t;
  }
  function I() {
    this.state.eventsEnabled && (window.cancelAnimationFrame(this.scheduleUpdate), this.state = M(this.reference, this.state));
  }
  function R(e) {
    return '' !== e && !isNaN(parseFloat(e)) && isFinite(e);
  }
  function U(e, t) {
    Object.keys(t).forEach(function (o) {
      var i = '';
      -1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(o) && R(t[o]) && (i = 'px'), e.style[o] = t[o] + i;
    });
  }
  function Y(e, t) {
    Object.keys(t).forEach(function (o) {
      var i = t[o];
      !1 === i ? e.removeAttribute(o) : e.setAttribute(o, t[o]);
    });
  }
  function F(e, t, o) {
    var i = T(e, function (e) {
        var o = e.name;
        return o === t;
      }),
      n = !!i && e.some(function (e) {
        return e.name === o && e.enabled && e.order < i.order;
      });
    if (!n) {
      var r = '`' + t + '`';
      console.warn('`' + o + '`' + ' modifier is required by ' + r + ' modifier in order to work, be sure to include it before ' + r + '!');
    }
    return n;
  }
  function j(e) {
    return 'end' === e ? 'start' : 'start' === e ? 'end' : e;
  }
  function K(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
      o = le.indexOf(e),
      i = le.slice(o + 1).concat(le.slice(0, o));
    return t ? i.reverse() : i;
  }
  function q(e, t, o, i) {
    var n = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
      r = +n[1],
      p = n[2];
    if (!r) return e;
    if (0 === p.indexOf('%')) {
      var s;
      switch (p) {
        case '%p':
          s = o;
          break;
        case '%':
        case '%r':
        default:
          s = i;
      }
      var d = h(s);
      return d[t] / 100 * r;
    }
    if ('vh' === p || 'vw' === p) {
      var a;
      return a = 'vh' === p ? X(document.documentElement.clientHeight, window.innerHeight || 0) : X(document.documentElement.clientWidth, window.innerWidth || 0), a / 100 * r;
    }
    return r;
  }
  function G(e, t, o, i) {
    var n = [0, 0],
      r = -1 !== ['right', 'left'].indexOf(i),
      p = e.split(/(\+|\-)/).map(function (e) {
        return e.trim();
      }),
      s = p.indexOf(T(p, function (e) {
        return -1 !== e.search(/,|\s/);
      }));
    p[s] && -1 === p[s].indexOf(',') && console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
    var d = /\s*,\s*|\s+/,
      a = -1 === s ? [p] : [p.slice(0, s).concat([p[s].split(d)[0]]), [p[s].split(d)[1]].concat(p.slice(s + 1))];
    return a = a.map(function (e, i) {
      var n = (1 === i ? !r : r) ? 'height' : 'width',
        p = !1;
      return e.reduce(function (e, t) {
        return '' === e[e.length - 1] && -1 !== ['+', '-'].indexOf(t) ? (e[e.length - 1] = t, p = !0, e) : p ? (e[e.length - 1] += t, p = !1, e) : e.concat(t);
      }, []).map(function (e) {
        return q(e, n, t, o);
      });
    }), a.forEach(function (e, t) {
      e.forEach(function (o, i) {
        R(o) && (n[t] += o * ('-' === e[i - 1] ? -1 : 1));
      });
    }), n;
  }
  function z(e, t) {
    var o,
      i = t.offset,
      n = e.placement,
      r = e.offsets,
      p = r.popper,
      s = r.reference,
      d = n.split('-')[0];
    return o = R(+i) ? [+i, 0] : G(i, p, s, d), 'left' === d ? (p.top += o[0], p.left -= o[1]) : 'right' === d ? (p.top += o[0], p.left += o[1]) : 'top' === d ? (p.left += o[0], p.top -= o[1]) : 'bottom' === d && (p.left += o[0], p.top += o[1]), e.popper = p, e;
  }
  for (var V = Math.min, _ = Math.floor, X = Math.max, Q = ['native code', '[object MutationObserverConstructor]'], J = function (e) {
      return Q.some(function (t) {
        return -1 < (e || '').toString().indexOf(t);
      });
    }, Z = 'undefined' != typeof window, $ = ['Edge', 'Trident', 'Firefox'], ee = 0, te = 0; te < $.length; te += 1) if (Z && 0 <= navigator.userAgent.indexOf($[te])) {
    ee = 1;
    break;
  }
  var i,
    oe = Z && J(window.MutationObserver),
    ie = oe ? function (e) {
      var t = !1,
        o = 0,
        i = document.createElement('span'),
        n = new MutationObserver(function () {
          e(), t = !1;
        });
      return n.observe(i, {
        attributes: !0
      }), function () {
        t || (t = !0, i.setAttribute('x-index', o), ++o);
      };
    } : function (e) {
      var t = !1;
      return function () {
        t || (t = !0, setTimeout(function () {
          t = !1, e();
        }, ee));
      };
    },
    ne = function () {
      return void 0 == i && (i = -1 !== navigator.appVersion.indexOf('MSIE 10')), i;
    },
    re = function (e, t) {
      if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
    },
    pe = function () {
      function e(e, t) {
        for (var o, n = 0; n < t.length; n++) o = t[n], o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
      }
      return function (t, o, i) {
        return o && e(t.prototype, o), i && e(t, i), t;
      };
    }(),
    se = function (e, t, o) {
      return t in e ? Object.defineProperty(e, t, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = o, e;
    },
    de = Object.assign || function (e) {
      for (var t, o = 1; o < arguments.length; o++) for (var i in t = arguments[o], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
      return e;
    },
    ae = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'],
    le = ae.slice(3),
    fe = {
      FLIP: 'flip',
      CLOCKWISE: 'clockwise',
      COUNTERCLOCKWISE: 'counterclockwise'
    },
    me = function () {
      function t(o, i) {
        var n = this,
          r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
        re(this, t), this.scheduleUpdate = function () {
          return requestAnimationFrame(n.update);
        }, this.update = ie(this.update.bind(this)), this.options = de({}, t.Defaults, r), this.state = {
          isDestroyed: !1,
          isCreated: !1,
          scrollParents: []
        }, this.reference = o.jquery ? o[0] : o, this.popper = i.jquery ? i[0] : i, this.options.modifiers = {}, Object.keys(de({}, t.Defaults.modifiers, r.modifiers)).forEach(function (e) {
          n.options.modifiers[e] = de({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {});
        }), this.modifiers = Object.keys(this.options.modifiers).map(function (e) {
          return de({
            name: e
          }, n.options.modifiers[e]);
        }).sort(function (e, t) {
          return e.order - t.order;
        }), this.modifiers.forEach(function (t) {
          t.enabled && e(t.onLoad) && t.onLoad(n.reference, n.popper, n.options, t, n.state);
        }), this.update();
        var p = this.options.eventsEnabled;
        p && this.enableEventListeners(), this.state.eventsEnabled = p;
      }
      return pe(t, [{
        key: 'update',
        value: function () {
          return k.call(this);
        }
      }, {
        key: 'destroy',
        value: function () {
          return P.call(this);
        }
      }, {
        key: 'enableEventListeners',
        value: function () {
          return A.call(this);
        }
      }, {
        key: 'disableEventListeners',
        value: function () {
          return I.call(this);
        }
      }]), t;
    }();
  return me.Utils = ('undefined' == typeof window ? global : window).PopperUtils, me.placements = ae, me.Defaults = {
    placement: 'bottom',
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
            o = t.split('-')[0],
            i = t.split('-')[1];
          if (i) {
            var n = e.offsets,
              r = n.reference,
              p = n.popper,
              s = -1 !== ['bottom', 'top'].indexOf(o),
              d = s ? 'left' : 'top',
              a = s ? 'width' : 'height',
              l = {
                start: se({}, d, r[d]),
                end: se({}, d, r[d] + r[a] - p[a])
              };
            e.offsets.popper = de({}, p, l[i]);
          }
          return e;
        }
      },
      offset: {
        order: 200,
        enabled: !0,
        fn: z,
        offset: 0
      },
      preventOverflow: {
        order: 300,
        enabled: !0,
        fn: function (e, t) {
          var o = t.boundariesElement || r(e.instance.popper);
          e.instance.reference === o && (o = r(o));
          var i = w(e.instance.popper, e.instance.reference, t.padding, o);
          t.boundaries = i;
          var n = t.priority,
            p = e.offsets.popper,
            s = {
              primary: function (e) {
                var o = p[e];
                return p[e] < i[e] && !t.escapeWithReference && (o = X(p[e], i[e])), se({}, e, o);
              },
              secondary: function (e) {
                var o = 'right' === e ? 'left' : 'top',
                  n = p[o];
                return p[e] > i[e] && !t.escapeWithReference && (n = V(p[o], i[e] - ('right' === e ? p.width : p.height))), se({}, o, n);
              }
            };
          return n.forEach(function (e) {
            var t = -1 === ['left', 'top'].indexOf(e) ? 'secondary' : 'primary';
            p = de({}, p, s[t](e));
          }), e.offsets.popper = p, e;
        },
        priority: ['left', 'right', 'top', 'bottom'],
        padding: 5,
        boundariesElement: 'scrollParent'
      },
      keepTogether: {
        order: 400,
        enabled: !0,
        fn: function (e) {
          var t = e.offsets,
            o = t.popper,
            i = t.reference,
            n = e.placement.split('-')[0],
            r = _,
            p = -1 !== ['top', 'bottom'].indexOf(n),
            s = p ? 'right' : 'bottom',
            d = p ? 'left' : 'top',
            a = p ? 'width' : 'height';
          return o[s] < r(i[d]) && (e.offsets.popper[d] = r(i[d]) - o[a]), o[d] > r(i[s]) && (e.offsets.popper[d] = r(i[s])), e;
        }
      },
      arrow: {
        order: 500,
        enabled: !0,
        fn: function (e, o) {
          if (!F(e.instance.modifiers, 'arrow', 'keepTogether')) return e;
          var i = o.element;
          if ('string' == typeof i) {
            if (i = e.instance.popper.querySelector(i), !i) return e;
          } else {
            if (!e.instance.popper.contains(i)) return console.warn('WARNING: `arrow.element` must be child of its popper element!'), e;
          }
          var n = e.placement.split('-')[0],
            r = e.offsets,
            p = r.popper,
            s = r.reference,
            d = -1 !== ['left', 'right'].indexOf(n),
            a = d ? 'height' : 'width',
            l = d ? 'Top' : 'Left',
            f = l.toLowerCase(),
            m = d ? 'left' : 'top',
            c = d ? 'bottom' : 'right',
            g = O(i)[a];
          s[c] - g < p[f] && (e.offsets.popper[f] -= p[f] - (s[c] - g)), s[f] + g > p[c] && (e.offsets.popper[f] += s[f] + g - p[c]);
          var u = s[f] + s[a] / 2 - g / 2,
            b = t(e.instance.popper, 'margin' + l).replace('px', ''),
            y = u - h(e.offsets.popper)[f] - b;
          return y = X(V(p[a] - g, y), 0), e.arrowElement = i, e.offsets.arrow = {}, e.offsets.arrow[f] = Math.round(y), e.offsets.arrow[m] = '', e;
        },
        element: '[x-arrow]'
      },
      flip: {
        order: 600,
        enabled: !0,
        fn: function (e, t) {
          if (W(e.instance.modifiers, 'inner')) return e;
          if (e.flipped && e.placement === e.originalPlacement) return e;
          var o = w(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement),
            i = e.placement.split('-')[0],
            n = L(i),
            r = e.placement.split('-')[1] || '',
            p = [];
          switch (t.behavior) {
            case fe.FLIP:
              p = [i, n];
              break;
            case fe.CLOCKWISE:
              p = K(i);
              break;
            case fe.COUNTERCLOCKWISE:
              p = K(i, !0);
              break;
            default:
              p = t.behavior;
          }
          return p.forEach(function (s, d) {
            if (i !== s || p.length === d + 1) return e;
            i = e.placement.split('-')[0], n = L(i);
            var a = e.offsets.popper,
              l = e.offsets.reference,
              f = _,
              m = 'left' === i && f(a.right) > f(l.left) || 'right' === i && f(a.left) < f(l.right) || 'top' === i && f(a.bottom) > f(l.top) || 'bottom' === i && f(a.top) < f(l.bottom),
              c = f(a.left) < f(o.left),
              h = f(a.right) > f(o.right),
              g = f(a.top) < f(o.top),
              u = f(a.bottom) > f(o.bottom),
              b = 'left' === i && c || 'right' === i && h || 'top' === i && g || 'bottom' === i && u,
              y = -1 !== ['top', 'bottom'].indexOf(i),
              w = !!t.flipVariations && (y && 'start' === r && c || y && 'end' === r && h || !y && 'start' === r && g || !y && 'end' === r && u);
            (m || b || w) && (e.flipped = !0, (m || b) && (i = p[d + 1]), w && (r = j(r)), e.placement = i + (r ? '-' + r : ''), e.offsets.popper = de({}, e.offsets.popper, S(e.instance.popper, e.offsets.reference, e.placement)), e = N(e.instance.modifiers, e, 'flip'));
          }), e;
        },
        behavior: 'flip',
        padding: 5,
        boundariesElement: 'viewport'
      },
      inner: {
        order: 700,
        enabled: !1,
        fn: function (e) {
          var t = e.placement,
            o = t.split('-')[0],
            i = e.offsets,
            n = i.popper,
            r = i.reference,
            p = -1 !== ['left', 'right'].indexOf(o),
            s = -1 === ['top', 'left'].indexOf(o);
          return n[p ? 'left' : 'top'] = r[o] - (s ? n[p ? 'width' : 'height'] : 0), e.placement = L(t), e.offsets.popper = h(n), e;
        }
      },
      hide: {
        order: 800,
        enabled: !0,
        fn: function (e) {
          if (!F(e.instance.modifiers, 'hide', 'preventOverflow')) return e;
          var t = e.offsets.reference,
            o = T(e.instance.modifiers, function (e) {
              return 'preventOverflow' === e.name;
            }).boundaries;
          if (t.bottom < o.top || t.left > o.right || t.top > o.bottom || t.right < o.left) {
            if (!0 === e.hide) return e;
            e.hide = !0, e.attributes['x-out-of-boundaries'] = '';
          } else {
            if (!1 === e.hide) return e;
            e.hide = !1, e.attributes['x-out-of-boundaries'] = !1;
          }
          return e;
        }
      },
      computeStyle: {
        order: 850,
        enabled: !0,
        fn: function (e, t) {
          var o = t.x,
            i = t.y,
            n = e.offsets.popper,
            p = T(e.instance.modifiers, function (e) {
              return 'applyStyle' === e.name;
            }).gpuAcceleration;
          void 0 !== p && console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
          var s,
            d,
            a = void 0 === p ? t.gpuAcceleration : p,
            l = r(e.instance.popper),
            f = g(l),
            m = {
              position: n.position
            },
            c = {
              left: _(n.left),
              top: _(n.top),
              bottom: _(n.bottom),
              right: _(n.right)
            },
            h = 'bottom' === o ? 'top' : 'bottom',
            u = 'right' === i ? 'left' : 'right',
            b = B('transform');
          if (d = 'bottom' == h ? -f.height + c.bottom : c.top, s = 'right' == u ? -f.width + c.right : c.left, a && b) m[b] = 'translate3d(' + s + 'px, ' + d + 'px, 0)', m[h] = 0, m[u] = 0, m.willChange = 'transform';else {
            var y = 'bottom' == h ? -1 : 1,
              w = 'right' == u ? -1 : 1;
            m[h] = d * y, m[u] = s * w, m.willChange = h + ', ' + u;
          }
          var E = {
            "x-placement": e.placement
          };
          return e.attributes = de({}, E, e.attributes), e.styles = de({}, m, e.styles), e.arrowStyles = de({}, e.offsets.arrow, e.arrowStyles), e;
        },
        gpuAcceleration: !0,
        x: 'bottom',
        y: 'right'
      },
      applyStyle: {
        order: 900,
        enabled: !0,
        fn: function (e) {
          return U(e.instance.popper, e.styles), Y(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && U(e.arrowElement, e.arrowStyles), e;
        },
        onLoad: function (e, t, o, i, n) {
          var r = x(n, t, e),
            p = v(o.placement, r, t, e, o.modifiers.flip.boundariesElement, o.modifiers.flip.padding);
          return t.setAttribute('x-placement', p), U(t, {
            position: 'absolute'
          }), o;
        },
        gpuAcceleration: void 0
      }
    }
  }, me;
});
;
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
!function (t) {
  var e = jQuery.fn.jquery.split(" ")[0].split(".");
  if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
}(), function () {
  function t(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e;
  }
  function e(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
  }
  function n(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }
  var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
      return typeof t;
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    },
    o = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
        }
      }
      return function (e, n, i) {
        return n && t(e.prototype, n), i && t(e, i), e;
      };
    }(),
    r = function (t) {
      function e(t) {
        return {}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
      }
      function n(t) {
        return (t[0] || t).nodeType;
      }
      function i() {
        return {
          bindType: s.end,
          delegateType: s.end,
          handle: function (e) {
            if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments);
          }
        };
      }
      function o() {
        if (window.QUnit) return !1;
        var t = document.createElement("bootstrap");
        for (var e in a) if (void 0 !== t.style[e]) return {
          end: a[e]
        };
        return !1;
      }
      function r(e) {
        var n = this,
          i = !1;
        return t(this).one(l.TRANSITION_END, function () {
          i = !0;
        }), setTimeout(function () {
          i || l.triggerTransitionEnd(n);
        }, e), this;
      }
      var s = !1,
        a = {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "oTransitionEnd otransitionend",
          transition: "transitionend"
        },
        l = {
          TRANSITION_END: "bsTransitionEnd",
          getUID: function (t) {
            do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
            return t;
          },
          getSelectorFromElement: function (e) {
            var n = e.getAttribute("data-target");
            n && "#" !== n || (n = e.getAttribute("href") || "");
            try {
              return t(n).length > 0 ? n : null;
            } catch (t) {
              return null;
            }
          },
          reflow: function (t) {
            return t.offsetHeight;
          },
          triggerTransitionEnd: function (e) {
            t(e).trigger(s.end);
          },
          supportsTransitionEnd: function () {
            return Boolean(s);
          },
          typeCheckConfig: function (t, i, o) {
            for (var r in o) if (o.hasOwnProperty(r)) {
              var s = o[r],
                a = i[r],
                l = a && n(a) ? "element" : e(a);
              if (!new RegExp(s).test(l)) throw new Error(t.toUpperCase() + ': Option "' + r + '" provided type "' + l + '" but expected type "' + s + '".');
            }
          }
        };
      return s = o(), t.fn.emulateTransitionEnd = r, l.supportsTransitionEnd() && (t.event.special[l.TRANSITION_END] = i()), l;
    }(jQuery),
    s = (function (t) {
      var e = "alert",
        i = t.fn[e],
        s = {
          DISMISS: '[data-dismiss="alert"]'
        },
        a = {
          CLOSE: "close.bs.alert",
          CLOSED: "closed.bs.alert",
          CLICK_DATA_API: "click.bs.alert.data-api"
        },
        l = {
          ALERT: "alert",
          FADE: "fade",
          SHOW: "show"
        },
        h = function () {
          function e(t) {
            n(this, e), this._element = t;
          }
          return e.prototype.close = function (t) {
            t = t || this._element;
            var e = this._getRootElement(t);
            this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e);
          }, e.prototype.dispose = function () {
            t.removeData(this._element, "bs.alert"), this._element = null;
          }, e.prototype._getRootElement = function (e) {
            var n = r.getSelectorFromElement(e),
              i = !1;
            return n && (i = t(n)[0]), i || (i = t(e).closest("." + l.ALERT)[0]), i;
          }, e.prototype._triggerCloseEvent = function (e) {
            var n = t.Event(a.CLOSE);
            return t(e).trigger(n), n;
          }, e.prototype._removeElement = function (e) {
            var n = this;
            t(e).removeClass(l.SHOW), r.supportsTransitionEnd() && t(e).hasClass(l.FADE) ? t(e).one(r.TRANSITION_END, function (t) {
              return n._destroyElement(e, t);
            }).emulateTransitionEnd(150) : this._destroyElement(e);
          }, e.prototype._destroyElement = function (e) {
            t(e).detach().trigger(a.CLOSED).remove();
          }, e._jQueryInterface = function (n) {
            return this.each(function () {
              var i = t(this),
                o = i.data("bs.alert");
              o || (o = new e(this), i.data("bs.alert", o)), "close" === n && o[n](this);
            });
          }, e._handleDismiss = function (t) {
            return function (e) {
              e && e.preventDefault(), t.close(this);
            };
          }, o(e, null, [{
            key: "VERSION",
            get: function () {
              return "4.0.0-beta";
            }
          }]), e;
        }();
      t(document).on(a.CLICK_DATA_API, s.DISMISS, h._handleDismiss(new h())), t.fn[e] = h._jQueryInterface, t.fn[e].Constructor = h, t.fn[e].noConflict = function () {
        return t.fn[e] = i, h._jQueryInterface;
      };
    }(jQuery), function (t) {
      var e = "button",
        i = t.fn[e],
        r = {
          ACTIVE: "active",
          BUTTON: "btn",
          FOCUS: "focus"
        },
        s = {
          DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
          DATA_TOGGLE: '[data-toggle="buttons"]',
          INPUT: "input",
          ACTIVE: ".active",
          BUTTON: ".btn"
        },
        a = {
          CLICK_DATA_API: "click.bs.button.data-api",
          FOCUS_BLUR_DATA_API: "focus.bs.button.data-api blur.bs.button.data-api"
        },
        l = function () {
          function e(t) {
            n(this, e), this._element = t;
          }
          return e.prototype.toggle = function () {
            var e = !0,
              n = !0,
              i = t(this._element).closest(s.DATA_TOGGLE)[0];
            if (i) {
              var o = t(this._element).find(s.INPUT)[0];
              if (o) {
                if ("radio" === o.type) if (o.checked && t(this._element).hasClass(r.ACTIVE)) e = !1;else {
                  var a = t(i).find(s.ACTIVE)[0];
                  a && t(a).removeClass(r.ACTIVE);
                }
                if (e) {
                  if (o.hasAttribute("disabled") || i.hasAttribute("disabled") || o.classList.contains("disabled") || i.classList.contains("disabled")) return;
                  o.checked = !t(this._element).hasClass(r.ACTIVE), t(o).trigger("change");
                }
                o.focus(), n = !1;
              }
            }
            n && this._element.setAttribute("aria-pressed", !t(this._element).hasClass(r.ACTIVE)), e && t(this._element).toggleClass(r.ACTIVE);
          }, e.prototype.dispose = function () {
            t.removeData(this._element, "bs.button"), this._element = null;
          }, e._jQueryInterface = function (n) {
            return this.each(function () {
              var i = t(this).data("bs.button");
              i || (i = new e(this), t(this).data("bs.button", i)), "toggle" === n && i[n]();
            });
          }, o(e, null, [{
            key: "VERSION",
            get: function () {
              return "4.0.0-beta";
            }
          }]), e;
        }();
      t(document).on(a.CLICK_DATA_API, s.DATA_TOGGLE_CARROT, function (e) {
        e.preventDefault();
        var n = e.target;
        t(n).hasClass(r.BUTTON) || (n = t(n).closest(s.BUTTON)), l._jQueryInterface.call(t(n), "toggle");
      }).on(a.FOCUS_BLUR_DATA_API, s.DATA_TOGGLE_CARROT, function (e) {
        var n = t(e.target).closest(s.BUTTON)[0];
        t(n).toggleClass(r.FOCUS, /^focus(in)?$/.test(e.type));
      }), t.fn[e] = l._jQueryInterface, t.fn[e].Constructor = l, t.fn[e].noConflict = function () {
        return t.fn[e] = i, l._jQueryInterface;
      };
    }(jQuery), function (t) {
      var e = "carousel",
        s = "bs.carousel",
        a = "." + s,
        l = t.fn[e],
        h = {
          interval: 5e3,
          keyboard: !0,
          slide: !1,
          pause: "hover",
          wrap: !0
        },
        c = {
          interval: "(number|boolean)",
          keyboard: "boolean",
          slide: "(boolean|string)",
          pause: "(string|boolean)",
          wrap: "boolean"
        },
        u = {
          NEXT: "next",
          PREV: "prev",
          LEFT: "left",
          RIGHT: "right"
        },
        d = {
          SLIDE: "slide" + a,
          SLID: "slid" + a,
          KEYDOWN: "keydown" + a,
          MOUSEENTER: "mouseenter" + a,
          MOUSELEAVE: "mouseleave" + a,
          TOUCHEND: "touchend" + a,
          LOAD_DATA_API: "load.bs.carousel.data-api",
          CLICK_DATA_API: "click.bs.carousel.data-api"
        },
        f = {
          CAROUSEL: "carousel",
          ACTIVE: "active",
          SLIDE: "slide",
          RIGHT: "carousel-item-right",
          LEFT: "carousel-item-left",
          NEXT: "carousel-item-next",
          PREV: "carousel-item-prev",
          ITEM: "carousel-item"
        },
        p = {
          ACTIVE: ".active",
          ACTIVE_ITEM: ".active.carousel-item",
          ITEM: ".carousel-item",
          NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
          INDICATORS: ".carousel-indicators",
          DATA_SLIDE: "[data-slide], [data-slide-to]",
          DATA_RIDE: '[data-ride="carousel"]'
        },
        _ = function () {
          function l(e, i) {
            n(this, l), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(i), this._element = t(e)[0], this._indicatorsElement = t(this._element).find(p.INDICATORS)[0], this._addEventListeners();
          }
          return l.prototype.next = function () {
            this._isSliding || this._slide(u.NEXT);
          }, l.prototype.nextWhenVisible = function () {
            document.hidden || this.next();
          }, l.prototype.prev = function () {
            this._isSliding || this._slide(u.PREV);
          }, l.prototype.pause = function (e) {
            e || (this._isPaused = !0), t(this._element).find(p.NEXT_PREV)[0] && r.supportsTransitionEnd() && (r.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
          }, l.prototype.cycle = function (t) {
            t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
          }, l.prototype.to = function (e) {
            var n = this;
            this._activeElement = t(this._element).find(p.ACTIVE_ITEM)[0];
            var i = this._getItemIndex(this._activeElement);
            if (!(e > this._items.length - 1 || e < 0)) if (this._isSliding) t(this._element).one(d.SLID, function () {
              return n.to(e);
            });else {
              if (i === e) return this.pause(), void this.cycle();
              var o = e > i ? u.NEXT : u.PREV;
              this._slide(o, this._items[e]);
            }
          }, l.prototype.dispose = function () {
            t(this._element).off(a), t.removeData(this._element, s), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null;
          }, l.prototype._getConfig = function (n) {
            return n = t.extend({}, h, n), r.typeCheckConfig(e, n, c), n;
          }, l.prototype._addEventListeners = function () {
            var e = this;
            this._config.keyboard && t(this._element).on(d.KEYDOWN, function (t) {
              return e._keydown(t);
            }), "hover" === this._config.pause && (t(this._element).on(d.MOUSEENTER, function (t) {
              return e.pause(t);
            }).on(d.MOUSELEAVE, function (t) {
              return e.cycle(t);
            }), "ontouchstart" in document.documentElement && t(this._element).on(d.TOUCHEND, function () {
              e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function (t) {
                return e.cycle(t);
              }, 500 + e._config.interval);
            }));
          }, l.prototype._keydown = function (t) {
            if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
              case 37:
                t.preventDefault(), this.prev();
                break;
              case 39:
                t.preventDefault(), this.next();
                break;
              default:
                return;
            }
          }, l.prototype._getItemIndex = function (e) {
            return this._items = t.makeArray(t(e).parent().find(p.ITEM)), this._items.indexOf(e);
          }, l.prototype._getItemByDirection = function (t, e) {
            var n = t === u.NEXT,
              i = t === u.PREV,
              o = this._getItemIndex(e),
              r = this._items.length - 1;
            if ((i && 0 === o || n && o === r) && !this._config.wrap) return e;
            var s = (o + (t === u.PREV ? -1 : 1)) % this._items.length;
            return -1 === s ? this._items[this._items.length - 1] : this._items[s];
          }, l.prototype._triggerSlideEvent = function (e, n) {
            var i = this._getItemIndex(e),
              o = this._getItemIndex(t(this._element).find(p.ACTIVE_ITEM)[0]),
              r = t.Event(d.SLIDE, {
                relatedTarget: e,
                direction: n,
                from: o,
                to: i
              });
            return t(this._element).trigger(r), r;
          }, l.prototype._setActiveIndicatorElement = function (e) {
            if (this._indicatorsElement) {
              t(this._indicatorsElement).find(p.ACTIVE).removeClass(f.ACTIVE);
              var n = this._indicatorsElement.children[this._getItemIndex(e)];
              n && t(n).addClass(f.ACTIVE);
            }
          }, l.prototype._slide = function (e, n) {
            var i = this,
              o = t(this._element).find(p.ACTIVE_ITEM)[0],
              s = this._getItemIndex(o),
              a = n || o && this._getItemByDirection(e, o),
              l = this._getItemIndex(a),
              h = Boolean(this._interval),
              c = void 0,
              _ = void 0,
              g = void 0;
            if (e === u.NEXT ? (c = f.LEFT, _ = f.NEXT, g = u.LEFT) : (c = f.RIGHT, _ = f.PREV, g = u.RIGHT), a && t(a).hasClass(f.ACTIVE)) this._isSliding = !1;else {
              if (!this._triggerSlideEvent(a, g).isDefaultPrevented() && o && a) {
                this._isSliding = !0, h && this.pause(), this._setActiveIndicatorElement(a);
                var m = t.Event(d.SLID, {
                  relatedTarget: a,
                  direction: g,
                  from: s,
                  to: l
                });
                r.supportsTransitionEnd() && t(this._element).hasClass(f.SLIDE) ? (t(a).addClass(_), r.reflow(a), t(o).addClass(c), t(a).addClass(c), t(o).one(r.TRANSITION_END, function () {
                  t(a).removeClass(c + " " + _).addClass(f.ACTIVE), t(o).removeClass(f.ACTIVE + " " + _ + " " + c), i._isSliding = !1, setTimeout(function () {
                    return t(i._element).trigger(m);
                  }, 0);
                }).emulateTransitionEnd(600)) : (t(o).removeClass(f.ACTIVE), t(a).addClass(f.ACTIVE), this._isSliding = !1, t(this._element).trigger(m)), h && this.cycle();
              }
            }
          }, l._jQueryInterface = function (e) {
            return this.each(function () {
              var n = t(this).data(s),
                o = t.extend({}, h, t(this).data());
              "object" === (void 0 === e ? "undefined" : i(e)) && t.extend(o, e);
              var r = "string" == typeof e ? e : o.slide;
              if (n || (n = new l(this, o), t(this).data(s, n)), "number" == typeof e) n.to(e);else if ("string" == typeof r) {
                if (void 0 === n[r]) throw new Error('No method named "' + r + '"');
                n[r]();
              } else o.interval && (n.pause(), n.cycle());
            });
          }, l._dataApiClickHandler = function (e) {
            var n = r.getSelectorFromElement(this);
            if (n) {
              var i = t(n)[0];
              if (i && t(i).hasClass(f.CAROUSEL)) {
                var o = t.extend({}, t(i).data(), t(this).data()),
                  a = this.getAttribute("data-slide-to");
                a && (o.interval = !1), l._jQueryInterface.call(t(i), o), a && t(i).data(s).to(a), e.preventDefault();
              }
            }
          }, o(l, null, [{
            key: "VERSION",
            get: function () {
              return "4.0.0-beta";
            }
          }, {
            key: "Default",
            get: function () {
              return h;
            }
          }]), l;
        }();
      t(document).on(d.CLICK_DATA_API, p.DATA_SLIDE, _._dataApiClickHandler), t(window).on(d.LOAD_DATA_API, function () {
        t(p.DATA_RIDE).each(function () {
          var e = t(this);
          _._jQueryInterface.call(e, e.data());
        });
      }), t.fn[e] = _._jQueryInterface, t.fn[e].Constructor = _, t.fn[e].noConflict = function () {
        return t.fn[e] = l, _._jQueryInterface;
      };
    }(jQuery), function (t) {
      var e = "collapse",
        s = "bs.collapse",
        a = t.fn[e],
        l = {
          toggle: !0,
          parent: ""
        },
        h = {
          toggle: "boolean",
          parent: "string"
        },
        c = {
          SHOW: "show.bs.collapse",
          SHOWN: "shown.bs.collapse",
          HIDE: "hide.bs.collapse",
          HIDDEN: "hidden.bs.collapse",
          CLICK_DATA_API: "click.bs.collapse.data-api"
        },
        u = {
          SHOW: "show",
          COLLAPSE: "collapse",
          COLLAPSING: "collapsing",
          COLLAPSED: "collapsed"
        },
        d = {
          WIDTH: "width",
          HEIGHT: "height"
        },
        f = {
          ACTIVES: ".show, .collapsing",
          DATA_TOGGLE: '[data-toggle="collapse"]'
        },
        p = function () {
          function a(e, i) {
            n(this, a), this._isTransitioning = !1, this._element = e, this._config = this._getConfig(i), this._triggerArray = t.makeArray(t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
            for (var o = t(f.DATA_TOGGLE), s = 0; s < o.length; s++) {
              var l = o[s],
                h = r.getSelectorFromElement(l);
              null !== h && t(h).filter(e).length > 0 && this._triggerArray.push(l);
            }
            this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
          }
          return a.prototype.toggle = function () {
            t(this._element).hasClass(u.SHOW) ? this.hide() : this.show();
          }, a.prototype.show = function () {
            var e = this;
            if (!this._isTransitioning && !t(this._element).hasClass(u.SHOW)) {
              var n = void 0,
                i = void 0;
              if (this._parent && ((n = t.makeArray(t(this._parent).children().children(f.ACTIVES))).length || (n = null)), !(n && (i = t(n).data(s)) && i._isTransitioning)) {
                var o = t.Event(c.SHOW);
                if (t(this._element).trigger(o), !o.isDefaultPrevented()) {
                  n && (a._jQueryInterface.call(t(n), "hide"), i || t(n).data(s, null));
                  var l = this._getDimension();
                  t(this._element).removeClass(u.COLLAPSE).addClass(u.COLLAPSING), this._element.style[l] = 0, this._triggerArray.length && t(this._triggerArray).removeClass(u.COLLAPSED).attr("aria-expanded", !0), this.setTransitioning(!0);
                  var h = function () {
                    t(e._element).removeClass(u.COLLAPSING).addClass(u.COLLAPSE).addClass(u.SHOW), e._element.style[l] = "", e.setTransitioning(!1), t(e._element).trigger(c.SHOWN);
                  };
                  if (r.supportsTransitionEnd()) {
                    var d = "scroll" + (l[0].toUpperCase() + l.slice(1));
                    t(this._element).one(r.TRANSITION_END, h).emulateTransitionEnd(600), this._element.style[l] = this._element[d] + "px";
                  } else h();
                }
              }
            }
          }, a.prototype.hide = function () {
            var e = this;
            if (!this._isTransitioning && t(this._element).hasClass(u.SHOW)) {
              var n = t.Event(c.HIDE);
              if (t(this._element).trigger(n), !n.isDefaultPrevented()) {
                var i = this._getDimension();
                if (this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", r.reflow(this._element), t(this._element).addClass(u.COLLAPSING).removeClass(u.COLLAPSE).removeClass(u.SHOW), this._triggerArray.length) for (var o = 0; o < this._triggerArray.length; o++) {
                  var s = this._triggerArray[o],
                    a = r.getSelectorFromElement(s);
                  null !== a && (t(a).hasClass(u.SHOW) || t(s).addClass(u.COLLAPSED).attr("aria-expanded", !1));
                }
                this.setTransitioning(!0);
                var l = function () {
                  e.setTransitioning(!1), t(e._element).removeClass(u.COLLAPSING).addClass(u.COLLAPSE).trigger(c.HIDDEN);
                };
                this._element.style[i] = "", r.supportsTransitionEnd() ? t(this._element).one(r.TRANSITION_END, l).emulateTransitionEnd(600) : l();
              }
            }
          }, a.prototype.setTransitioning = function (t) {
            this._isTransitioning = t;
          }, a.prototype.dispose = function () {
            t.removeData(this._element, s), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null;
          }, a.prototype._getConfig = function (n) {
            return n = t.extend({}, l, n), n.toggle = Boolean(n.toggle), r.typeCheckConfig(e, n, h), n;
          }, a.prototype._getDimension = function () {
            return t(this._element).hasClass(d.WIDTH) ? d.WIDTH : d.HEIGHT;
          }, a.prototype._getParent = function () {
            var e = this,
              n = t(this._config.parent)[0],
              i = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
            return t(n).find(i).each(function (t, n) {
              e._addAriaAndCollapsedClass(a._getTargetFromElement(n), [n]);
            }), n;
          }, a.prototype._addAriaAndCollapsedClass = function (e, n) {
            if (e) {
              var i = t(e).hasClass(u.SHOW);
              n.length && t(n).toggleClass(u.COLLAPSED, !i).attr("aria-expanded", i);
            }
          }, a._getTargetFromElement = function (e) {
            var n = r.getSelectorFromElement(e);
            return n ? t(n)[0] : null;
          }, a._jQueryInterface = function (e) {
            return this.each(function () {
              var n = t(this),
                o = n.data(s),
                r = t.extend({}, l, n.data(), "object" === (void 0 === e ? "undefined" : i(e)) && e);
              if (!o && r.toggle && /show|hide/.test(e) && (r.toggle = !1), o || (o = new a(this, r), n.data(s, o)), "string" == typeof e) {
                if (void 0 === o[e]) throw new Error('No method named "' + e + '"');
                o[e]();
              }
            });
          }, o(a, null, [{
            key: "VERSION",
            get: function () {
              return "4.0.0-beta";
            }
          }, {
            key: "Default",
            get: function () {
              return l;
            }
          }]), a;
        }();
      t(document).on(c.CLICK_DATA_API, f.DATA_TOGGLE, function (e) {
        /input|textarea/i.test(e.target.tagName) || e.preventDefault();
        var n = t(this),
          i = r.getSelectorFromElement(this);
        t(i).each(function () {
          var e = t(this),
            i = e.data(s) ? "toggle" : n.data();
          p._jQueryInterface.call(e, i);
        });
      }), t.fn[e] = p._jQueryInterface, t.fn[e].Constructor = p, t.fn[e].noConflict = function () {
        return t.fn[e] = a, p._jQueryInterface;
      };
    }(jQuery), function (t) {
      if ("undefined" == typeof Popper) throw new Error("Bootstrap dropdown require Popper.js (https://popper.js.org)");
      var e = "dropdown",
        s = "bs.dropdown",
        a = "." + s,
        l = t.fn[e],
        h = new RegExp("38|40|27"),
        c = {
          HIDE: "hide" + a,
          HIDDEN: "hidden" + a,
          SHOW: "show" + a,
          SHOWN: "shown" + a,
          CLICK: "click" + a,
          CLICK_DATA_API: "click.bs.dropdown.data-api",
          KEYDOWN_DATA_API: "keydown.bs.dropdown.data-api",
          KEYUP_DATA_API: "keyup.bs.dropdown.data-api"
        },
        u = {
          DISABLED: "disabled",
          SHOW: "show",
          DROPUP: "dropup",
          MENURIGHT: "dropdown-menu-right",
          MENULEFT: "dropdown-menu-left"
        },
        d = {
          DATA_TOGGLE: '[data-toggle="dropdown"]',
          FORM_CHILD: ".dropdown form",
          MENU: ".dropdown-menu",
          NAVBAR_NAV: ".navbar-nav",
          VISIBLE_ITEMS: ".dropdown-menu .dropdown-item:not(.disabled)"
        },
        f = {
          TOP: "top-start",
          TOPEND: "top-end",
          BOTTOM: "bottom-start",
          BOTTOMEND: "bottom-end"
        },
        p = {
          placement: f.BOTTOM,
          offset: 0,
          flip: !0
        },
        _ = {
          placement: "string",
          offset: "(number|string)",
          flip: "boolean"
        },
        g = function () {
          function l(t, e) {
            n(this, l), this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners();
          }
          return l.prototype.toggle = function () {
            if (!this._element.disabled && !t(this._element).hasClass(u.DISABLED)) {
              var e = l._getParentFromElement(this._element),
                n = t(this._menu).hasClass(u.SHOW);
              if (l._clearMenus(), !n) {
                var i = {
                    relatedTarget: this._element
                  },
                  o = t.Event(c.SHOW, i);
                if (t(e).trigger(o), !o.isDefaultPrevented()) {
                  var r = this._element;
                  t(e).hasClass(u.DROPUP) && (t(this._menu).hasClass(u.MENULEFT) || t(this._menu).hasClass(u.MENURIGHT)) && (r = e), this._popper = new Popper(r, this._menu, this._getPopperConfig()), "ontouchstart" in document.documentElement && !t(e).closest(d.NAVBAR_NAV).length && t("body").children().on("mouseover", null, t.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), t(this._menu).toggleClass(u.SHOW), t(e).toggleClass(u.SHOW).trigger(t.Event(c.SHOWN, i));
                }
              }
            }
          }, l.prototype.dispose = function () {
            t.removeData(this._element, s), t(this._element).off(a), this._element = null, this._menu = null, null !== this._popper && this._popper.destroy(), this._popper = null;
          }, l.prototype.update = function () {
            this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate();
          }, l.prototype._addEventListeners = function () {
            var e = this;
            t(this._element).on(c.CLICK, function (t) {
              t.preventDefault(), t.stopPropagation(), e.toggle();
            });
          }, l.prototype._getConfig = function (n) {
            var i = t(this._element).data();
            return void 0 !== i.placement && (i.placement = f[i.placement.toUpperCase()]), n = t.extend({}, this.constructor.Default, t(this._element).data(), n), r.typeCheckConfig(e, n, this.constructor.DefaultType), n;
          }, l.prototype._getMenuElement = function () {
            if (!this._menu) {
              var e = l._getParentFromElement(this._element);
              this._menu = t(e).find(d.MENU)[0];
            }
            return this._menu;
          }, l.prototype._getPlacement = function () {
            var e = t(this._element).parent(),
              n = this._config.placement;
            return e.hasClass(u.DROPUP) || this._config.placement === f.TOP ? (n = f.TOP, t(this._menu).hasClass(u.MENURIGHT) && (n = f.TOPEND)) : t(this._menu).hasClass(u.MENURIGHT) && (n = f.BOTTOMEND), n;
          }, l.prototype._detectNavbar = function () {
            return t(this._element).closest(".navbar").length > 0;
          }, l.prototype._getPopperConfig = function () {
            var t = {
              placement: this._getPlacement(),
              modifiers: {
                offset: {
                  offset: this._config.offset
                },
                flip: {
                  enabled: this._config.flip
                }
              }
            };
            return this._inNavbar && (t.modifiers.applyStyle = {
              enabled: !this._inNavbar
            }), t;
          }, l._jQueryInterface = function (e) {
            return this.each(function () {
              var n = t(this).data(s),
                o = "object" === (void 0 === e ? "undefined" : i(e)) ? e : null;
              if (n || (n = new l(this, o), t(this).data(s, n)), "string" == typeof e) {
                if (void 0 === n[e]) throw new Error('No method named "' + e + '"');
                n[e]();
              }
            });
          }, l._clearMenus = function (e) {
            if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which)) for (var n = t.makeArray(t(d.DATA_TOGGLE)), i = 0; i < n.length; i++) {
              var o = l._getParentFromElement(n[i]),
                r = t(n[i]).data(s),
                a = {
                  relatedTarget: n[i]
                };
              if (r) {
                var h = r._menu;
                if (t(o).hasClass(u.SHOW) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && t.contains(o, e.target))) {
                  var f = t.Event(c.HIDE, a);
                  t(o).trigger(f), f.isDefaultPrevented() || ("ontouchstart" in document.documentElement && t("body").children().off("mouseover", null, t.noop), n[i].setAttribute("aria-expanded", "false"), t(h).removeClass(u.SHOW), t(o).removeClass(u.SHOW).trigger(t.Event(c.HIDDEN, a)));
                }
              }
            }
          }, l._getParentFromElement = function (e) {
            var n = void 0,
              i = r.getSelectorFromElement(e);
            return i && (n = t(i)[0]), n || e.parentNode;
          }, l._dataApiKeydownHandler = function (e) {
            if (!(!h.test(e.which) || /button/i.test(e.target.tagName) && 32 === e.which || /input|textarea/i.test(e.target.tagName) || (e.preventDefault(), e.stopPropagation(), this.disabled || t(this).hasClass(u.DISABLED)))) {
              var n = l._getParentFromElement(this),
                i = t(n).hasClass(u.SHOW);
              if ((i || 27 === e.which && 32 === e.which) && (!i || 27 !== e.which && 32 !== e.which)) {
                var o = t(n).find(d.VISIBLE_ITEMS).get();
                if (o.length) {
                  var r = o.indexOf(e.target);
                  38 === e.which && r > 0 && r--, 40 === e.which && r < o.length - 1 && r++, r < 0 && (r = 0), o[r].focus();
                }
              } else {
                if (27 === e.which) {
                  var s = t(n).find(d.DATA_TOGGLE)[0];
                  t(s).trigger("focus");
                }
                t(this).trigger("click");
              }
            }
          }, o(l, null, [{
            key: "VERSION",
            get: function () {
              return "4.0.0-beta";
            }
          }, {
            key: "Default",
            get: function () {
              return p;
            }
          }, {
            key: "DefaultType",
            get: function () {
              return _;
            }
          }]), l;
        }();
      t(document).on(c.KEYDOWN_DATA_API, d.DATA_TOGGLE, g._dataApiKeydownHandler).on(c.KEYDOWN_DATA_API, d.MENU, g._dataApiKeydownHandler).on(c.CLICK_DATA_API + " " + c.KEYUP_DATA_API, g._clearMenus).on(c.CLICK_DATA_API, d.DATA_TOGGLE, function (e) {
        e.preventDefault(), e.stopPropagation(), g._jQueryInterface.call(t(this), "toggle");
      }).on(c.CLICK_DATA_API, d.FORM_CHILD, function (t) {
        t.stopPropagation();
      }), t.fn[e] = g._jQueryInterface, t.fn[e].Constructor = g, t.fn[e].noConflict = function () {
        return t.fn[e] = l, g._jQueryInterface;
      };
    }(jQuery), function (t) {
      var e = "modal",
        s = ".bs.modal",
        a = t.fn[e],
        l = {
          backdrop: !0,
          keyboard: !0,
          focus: !0,
          show: !0
        },
        h = {
          backdrop: "(boolean|string)",
          keyboard: "boolean",
          focus: "boolean",
          show: "boolean"
        },
        c = {
          HIDE: "hide.bs.modal",
          HIDDEN: "hidden.bs.modal",
          SHOW: "show.bs.modal",
          SHOWN: "shown.bs.modal",
          FOCUSIN: "focusin.bs.modal",
          RESIZE: "resize.bs.modal",
          CLICK_DISMISS: "click.dismiss.bs.modal",
          KEYDOWN_DISMISS: "keydown.dismiss.bs.modal",
          MOUSEUP_DISMISS: "mouseup.dismiss.bs.modal",
          MOUSEDOWN_DISMISS: "mousedown.dismiss.bs.modal",
          CLICK_DATA_API: "click.bs.modal.data-api"
        },
        u = {
          SCROLLBAR_MEASURER: "modal-scrollbar-measure",
          BACKDROP: "modal-backdrop",
          OPEN: "modal-open",
          FADE: "fade",
          SHOW: "show"
        },
        d = {
          DIALOG: ".modal-dialog",
          DATA_TOGGLE: '[data-toggle="modal"]',
          DATA_DISMISS: '[data-dismiss="modal"]',
          FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
          NAVBAR_TOGGLER: ".navbar-toggler"
        },
        f = function () {
          function a(e, i) {
            n(this, a), this._config = this._getConfig(i), this._element = e, this._dialog = t(e).find(d.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0;
          }
          return a.prototype.toggle = function (t) {
            return this._isShown ? this.hide() : this.show(t);
          }, a.prototype.show = function (e) {
            var n = this;
            if (!this._isTransitioning) {
              r.supportsTransitionEnd() && t(this._element).hasClass(u.FADE) && (this._isTransitioning = !0);
              var i = t.Event(c.SHOW, {
                relatedTarget: e
              });
              t(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), t(document.body).addClass(u.OPEN), this._setEscapeEvent(), this._setResizeEvent(), t(this._element).on(c.CLICK_DISMISS, d.DATA_DISMISS, function (t) {
                return n.hide(t);
              }), t(this._dialog).on(c.MOUSEDOWN_DISMISS, function () {
                t(n._element).one(c.MOUSEUP_DISMISS, function (e) {
                  t(e.target).is(n._element) && (n._ignoreBackdropClick = !0);
                });
              }), this._showBackdrop(function () {
                return n._showElement(e);
              }));
            }
          }, a.prototype.hide = function (e) {
            var n = this;
            if (e && e.preventDefault(), !this._isTransitioning && this._isShown) {
              var i = r.supportsTransitionEnd() && t(this._element).hasClass(u.FADE);
              i && (this._isTransitioning = !0);
              var o = t.Event(c.HIDE);
              t(this._element).trigger(o), this._isShown && !o.isDefaultPrevented() && (this._isShown = !1, this._setEscapeEvent(), this._setResizeEvent(), t(document).off(c.FOCUSIN), t(this._element).removeClass(u.SHOW), t(this._element).off(c.CLICK_DISMISS), t(this._dialog).off(c.MOUSEDOWN_DISMISS), i ? t(this._element).one(r.TRANSITION_END, function (t) {
                return n._hideModal(t);
              }).emulateTransitionEnd(300) : this._hideModal());
            }
          }, a.prototype.dispose = function () {
            t.removeData(this._element, "bs.modal"), t(window, document, this._element, this._backdrop).off(s), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null;
          }, a.prototype.handleUpdate = function () {
            this._adjustDialog();
          }, a.prototype._getConfig = function (n) {
            return n = t.extend({}, l, n), r.typeCheckConfig(e, n, h), n;
          }, a.prototype._showElement = function (e) {
            var n = this,
              i = r.supportsTransitionEnd() && t(this._element).hasClass(u.FADE);
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, i && r.reflow(this._element), t(this._element).addClass(u.SHOW), this._config.focus && this._enforceFocus();
            var o = t.Event(c.SHOWN, {
                relatedTarget: e
              }),
              s = function () {
                n._config.focus && n._element.focus(), n._isTransitioning = !1, t(n._element).trigger(o);
              };
            i ? t(this._dialog).one(r.TRANSITION_END, s).emulateTransitionEnd(300) : s();
          }, a.prototype._enforceFocus = function () {
            var e = this;
            t(document).off(c.FOCUSIN).on(c.FOCUSIN, function (n) {
              document === n.target || e._element === n.target || t(e._element).has(n.target).length || e._element.focus();
            });
          }, a.prototype._setEscapeEvent = function () {
            var e = this;
            this._isShown && this._config.keyboard ? t(this._element).on(c.KEYDOWN_DISMISS, function (t) {
              27 === t.which && (t.preventDefault(), e.hide());
            }) : this._isShown || t(this._element).off(c.KEYDOWN_DISMISS);
          }, a.prototype._setResizeEvent = function () {
            var e = this;
            this._isShown ? t(window).on(c.RESIZE, function (t) {
              return e.handleUpdate(t);
            }) : t(window).off(c.RESIZE);
          }, a.prototype._hideModal = function () {
            var e = this;
            this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function () {
              t(document.body).removeClass(u.OPEN), e._resetAdjustments(), e._resetScrollbar(), t(e._element).trigger(c.HIDDEN);
            });
          }, a.prototype._removeBackdrop = function () {
            this._backdrop && (t(this._backdrop).remove(), this._backdrop = null);
          }, a.prototype._showBackdrop = function (e) {
            var n = this,
              i = t(this._element).hasClass(u.FADE) ? u.FADE : "";
            if (this._isShown && this._config.backdrop) {
              var o = r.supportsTransitionEnd() && i;
              if (this._backdrop = document.createElement("div"), this._backdrop.className = u.BACKDROP, i && t(this._backdrop).addClass(i), t(this._backdrop).appendTo(document.body), t(this._element).on(c.CLICK_DISMISS, function (t) {
                n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide());
              }), o && r.reflow(this._backdrop), t(this._backdrop).addClass(u.SHOW), !e) return;
              if (!o) return void e();
              t(this._backdrop).one(r.TRANSITION_END, e).emulateTransitionEnd(150);
            } else if (!this._isShown && this._backdrop) {
              t(this._backdrop).removeClass(u.SHOW);
              var s = function () {
                n._removeBackdrop(), e && e();
              };
              r.supportsTransitionEnd() && t(this._element).hasClass(u.FADE) ? t(this._backdrop).one(r.TRANSITION_END, s).emulateTransitionEnd(150) : s();
            } else e && e();
          }, a.prototype._adjustDialog = function () {
            var t = this._element.scrollHeight > document.documentElement.clientHeight;
            !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px");
          }, a.prototype._resetAdjustments = function () {
            this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
          }, a.prototype._checkScrollbar = function () {
            this._isBodyOverflowing = document.body.clientWidth < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
          }, a.prototype._setScrollbar = function () {
            var e = this;
            if (this._isBodyOverflowing) {
              t(d.FIXED_CONTENT).each(function (n, i) {
                var o = t(i)[0].style.paddingRight,
                  r = t(i).css("padding-right");
                t(i).data("padding-right", o).css("padding-right", parseFloat(r) + e._scrollbarWidth + "px");
              }), t(d.NAVBAR_TOGGLER).each(function (n, i) {
                var o = t(i)[0].style.marginRight,
                  r = t(i).css("margin-right");
                t(i).data("margin-right", o).css("margin-right", parseFloat(r) + e._scrollbarWidth + "px");
              });
              var n = document.body.style.paddingRight,
                i = t("body").css("padding-right");
              t("body").data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px");
            }
          }, a.prototype._resetScrollbar = function () {
            t(d.FIXED_CONTENT).each(function (e, n) {
              var i = t(n).data("padding-right");
              void 0 !== i && t(n).css("padding-right", i).removeData("padding-right");
            }), t(d.NAVBAR_TOGGLER).each(function (e, n) {
              var i = t(n).data("margin-right");
              void 0 !== i && t(n).css("margin-right", i).removeData("margin-right");
            });
            var e = t("body").data("padding-right");
            void 0 !== e && t("body").css("padding-right", e).removeData("padding-right");
          }, a.prototype._getScrollbarWidth = function () {
            var t = document.createElement("div");
            t.className = u.SCROLLBAR_MEASURER, document.body.appendChild(t);
            var e = t.getBoundingClientRect().width - t.clientWidth;
            return document.body.removeChild(t), e;
          }, a._jQueryInterface = function (e, n) {
            return this.each(function () {
              var o = t(this).data("bs.modal"),
                r = t.extend({}, a.Default, t(this).data(), "object" === (void 0 === e ? "undefined" : i(e)) && e);
              if (o || (o = new a(this, r), t(this).data("bs.modal", o)), "string" == typeof e) {
                if (void 0 === o[e]) throw new Error('No method named "' + e + '"');
                o[e](n);
              } else r.show && o.show(n);
            });
          }, o(a, null, [{
            key: "VERSION",
            get: function () {
              return "4.0.0-beta";
            }
          }, {
            key: "Default",
            get: function () {
              return l;
            }
          }]), a;
        }();
      t(document).on(c.CLICK_DATA_API, d.DATA_TOGGLE, function (e) {
        var n = this,
          i = void 0,
          o = r.getSelectorFromElement(this);
        o && (i = t(o)[0]);
        var s = t(i).data("bs.modal") ? "toggle" : t.extend({}, t(i).data(), t(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
        var a = t(i).one(c.SHOW, function (e) {
          e.isDefaultPrevented() || a.one(c.HIDDEN, function () {
            t(n).is(":visible") && n.focus();
          });
        });
        f._jQueryInterface.call(t(i), s, this);
      }), t.fn[e] = f._jQueryInterface, t.fn[e].Constructor = f, t.fn[e].noConflict = function () {
        return t.fn[e] = a, f._jQueryInterface;
      };
    }(jQuery), function (t) {
      var e = "scrollspy",
        s = t.fn[e],
        a = {
          offset: 10,
          method: "auto",
          target: ""
        },
        l = {
          offset: "number",
          method: "string",
          target: "(string|element)"
        },
        h = {
          ACTIVATE: "activate.bs.scrollspy",
          SCROLL: "scroll.bs.scrollspy",
          LOAD_DATA_API: "load.bs.scrollspy.data-api"
        },
        c = {
          DROPDOWN_ITEM: "dropdown-item",
          DROPDOWN_MENU: "dropdown-menu",
          ACTIVE: "active"
        },
        u = {
          DATA_SPY: '[data-spy="scroll"]',
          ACTIVE: ".active",
          NAV_LIST_GROUP: ".nav, .list-group",
          NAV_LINKS: ".nav-link",
          LIST_ITEMS: ".list-group-item",
          DROPDOWN: ".dropdown",
          DROPDOWN_ITEMS: ".dropdown-item",
          DROPDOWN_TOGGLE: ".dropdown-toggle"
        },
        d = {
          OFFSET: "offset",
          POSITION: "position"
        },
        f = function () {
          function s(e, i) {
            var o = this;
            n(this, s), this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(i), this._selector = this._config.target + " " + u.NAV_LINKS + "," + this._config.target + " " + u.LIST_ITEMS + "," + this._config.target + " " + u.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, t(this._scrollElement).on(h.SCROLL, function (t) {
              return o._process(t);
            }), this.refresh(), this._process();
          }
          return s.prototype.refresh = function () {
            var e = this,
              n = this._scrollElement !== this._scrollElement.window ? d.POSITION : d.OFFSET,
              i = "auto" === this._config.method ? n : this._config.method,
              o = i === d.POSITION ? this._getScrollTop() : 0;
            this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), t.makeArray(t(this._selector)).map(function (e) {
              var n = void 0,
                s = r.getSelectorFromElement(e);
              if (s && (n = t(s)[0]), n) {
                var a = n.getBoundingClientRect();
                if (a.width || a.height) return [t(n)[i]().top + o, s];
              }
              return null;
            }).filter(function (t) {
              return t;
            }).sort(function (t, e) {
              return t[0] - e[0];
            }).forEach(function (t) {
              e._offsets.push(t[0]), e._targets.push(t[1]);
            });
          }, s.prototype.dispose = function () {
            t.removeData(this._element, "bs.scrollspy"), t(this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
          }, s.prototype._getConfig = function (n) {
            if ("string" != typeof (n = t.extend({}, a, n)).target) {
              var i = t(n.target).attr("id");
              i || (i = r.getUID(e), t(n.target).attr("id", i)), n.target = "#" + i;
            }
            return r.typeCheckConfig(e, n, l), n;
          }, s.prototype._getScrollTop = function () {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
          }, s.prototype._getScrollHeight = function () {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
          }, s.prototype._getOffsetHeight = function () {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
          }, s.prototype._process = function () {
            var t = this._getScrollTop() + this._config.offset,
              e = this._getScrollHeight(),
              n = this._config.offset + e - this._getOffsetHeight();
            if (this._scrollHeight !== e && this.refresh(), t >= n) {
              var i = this._targets[this._targets.length - 1];
              this._activeTarget !== i && this._activate(i);
            } else {
              if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
              for (var o = this._offsets.length; o--;) this._activeTarget !== this._targets[o] && t >= this._offsets[o] && (void 0 === this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o]);
            }
          }, s.prototype._activate = function (e) {
            this._activeTarget = e, this._clear();
            var n = this._selector.split(",");
            n = n.map(function (t) {
              return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]';
            });
            var i = t(n.join(","));
            i.hasClass(c.DROPDOWN_ITEM) ? (i.closest(u.DROPDOWN).find(u.DROPDOWN_TOGGLE).addClass(c.ACTIVE), i.addClass(c.ACTIVE)) : (i.addClass(c.ACTIVE), i.parents(u.NAV_LIST_GROUP).prev(u.NAV_LINKS + ", " + u.LIST_ITEMS).addClass(c.ACTIVE)), t(this._scrollElement).trigger(h.ACTIVATE, {
              relatedTarget: e
            });
          }, s.prototype._clear = function () {
            t(this._selector).filter(u.ACTIVE).removeClass(c.ACTIVE);
          }, s._jQueryInterface = function (e) {
            return this.each(function () {
              var n = t(this).data("bs.scrollspy"),
                o = "object" === (void 0 === e ? "undefined" : i(e)) && e;
              if (n || (n = new s(this, o), t(this).data("bs.scrollspy", n)), "string" == typeof e) {
                if (void 0 === n[e]) throw new Error('No method named "' + e + '"');
                n[e]();
              }
            });
          }, o(s, null, [{
            key: "VERSION",
            get: function () {
              return "4.0.0-beta";
            }
          }, {
            key: "Default",
            get: function () {
              return a;
            }
          }]), s;
        }();
      t(window).on(h.LOAD_DATA_API, function () {
        for (var e = t.makeArray(t(u.DATA_SPY)), n = e.length; n--;) {
          var i = t(e[n]);
          f._jQueryInterface.call(i, i.data());
        }
      }), t.fn[e] = f._jQueryInterface, t.fn[e].Constructor = f, t.fn[e].noConflict = function () {
        return t.fn[e] = s, f._jQueryInterface;
      };
    }(jQuery), function (t) {
      var e = t.fn.tab,
        i = {
          HIDE: "hide.bs.tab",
          HIDDEN: "hidden.bs.tab",
          SHOW: "show.bs.tab",
          SHOWN: "shown.bs.tab",
          CLICK_DATA_API: "click.bs.tab.data-api"
        },
        s = {
          DROPDOWN_MENU: "dropdown-menu",
          ACTIVE: "active",
          DISABLED: "disabled",
          FADE: "fade",
          SHOW: "show"
        },
        a = {
          DROPDOWN: ".dropdown",
          NAV_LIST_GROUP: ".nav, .list-group",
          ACTIVE: ".active",
          DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
          DROPDOWN_TOGGLE: ".dropdown-toggle",
          DROPDOWN_ACTIVE_CHILD: "> .dropdown-menu .active"
        },
        l = function () {
          function e(t) {
            n(this, e), this._element = t;
          }
          return e.prototype.show = function () {
            var e = this;
            if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass(s.ACTIVE) || t(this._element).hasClass(s.DISABLED))) {
              var n = void 0,
                o = void 0,
                l = t(this._element).closest(a.NAV_LIST_GROUP)[0],
                h = r.getSelectorFromElement(this._element);
              l && (o = t.makeArray(t(l).find(a.ACTIVE)), o = o[o.length - 1]);
              var c = t.Event(i.HIDE, {
                  relatedTarget: this._element
                }),
                u = t.Event(i.SHOW, {
                  relatedTarget: o
                });
              if (o && t(o).trigger(c), t(this._element).trigger(u), !u.isDefaultPrevented() && !c.isDefaultPrevented()) {
                h && (n = t(h)[0]), this._activate(this._element, l);
                var d = function () {
                  var n = t.Event(i.HIDDEN, {
                      relatedTarget: e._element
                    }),
                    r = t.Event(i.SHOWN, {
                      relatedTarget: o
                    });
                  t(o).trigger(n), t(e._element).trigger(r);
                };
                n ? this._activate(n, n.parentNode, d) : d();
              }
            }
          }, e.prototype.dispose = function () {
            t.removeData(this._element, "bs.tab"), this._element = null;
          }, e.prototype._activate = function (e, n, i) {
            var o = this,
              l = t(n).find(a.ACTIVE)[0],
              h = i && r.supportsTransitionEnd() && l && t(l).hasClass(s.FADE),
              c = function () {
                return o._transitionComplete(e, l, h, i);
              };
            l && h ? t(l).one(r.TRANSITION_END, c).emulateTransitionEnd(150) : c(), l && t(l).removeClass(s.SHOW);
          }, e.prototype._transitionComplete = function (e, n, i, o) {
            if (n) {
              t(n).removeClass(s.ACTIVE);
              var l = t(n.parentNode).find(a.DROPDOWN_ACTIVE_CHILD)[0];
              l && t(l).removeClass(s.ACTIVE), n.setAttribute("aria-expanded", !1);
            }
            if (t(e).addClass(s.ACTIVE), e.setAttribute("aria-expanded", !0), i ? (r.reflow(e), t(e).addClass(s.SHOW)) : t(e).removeClass(s.FADE), e.parentNode && t(e.parentNode).hasClass(s.DROPDOWN_MENU)) {
              var h = t(e).closest(a.DROPDOWN)[0];
              h && t(h).find(a.DROPDOWN_TOGGLE).addClass(s.ACTIVE), e.setAttribute("aria-expanded", !0);
            }
            o && o();
          }, e._jQueryInterface = function (n) {
            return this.each(function () {
              var i = t(this),
                o = i.data("bs.tab");
              if (o || (o = new e(this), i.data("bs.tab", o)), "string" == typeof n) {
                if (void 0 === o[n]) throw new Error('No method named "' + n + '"');
                o[n]();
              }
            });
          }, o(e, null, [{
            key: "VERSION",
            get: function () {
              return "4.0.0-beta";
            }
          }]), e;
        }();
      t(document).on(i.CLICK_DATA_API, a.DATA_TOGGLE, function (e) {
        e.preventDefault(), l._jQueryInterface.call(t(this), "show");
      }), t.fn.tab = l._jQueryInterface, t.fn.tab.Constructor = l, t.fn.tab.noConflict = function () {
        return t.fn.tab = e, l._jQueryInterface;
      };
    }(jQuery), function (t) {
      if ("undefined" == typeof Popper) throw new Error("Bootstrap tooltips require Popper.js (https://popper.js.org)");
      var e = "tooltip",
        s = ".bs.tooltip",
        a = t.fn[e],
        l = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
        h = {
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
          fallbackPlacement: "(string|array)"
        },
        c = {
          AUTO: "auto",
          TOP: "top",
          RIGHT: "right",
          BOTTOM: "bottom",
          LEFT: "left"
        },
        u = {
          animation: !0,
          template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
          trigger: "hover focus",
          title: "",
          delay: 0,
          html: !1,
          selector: !1,
          placement: "top",
          offset: 0,
          container: !1,
          fallbackPlacement: "flip"
        },
        d = {
          SHOW: "show",
          OUT: "out"
        },
        f = {
          HIDE: "hide" + s,
          HIDDEN: "hidden" + s,
          SHOW: "show" + s,
          SHOWN: "shown" + s,
          INSERTED: "inserted" + s,
          CLICK: "click" + s,
          FOCUSIN: "focusin" + s,
          FOCUSOUT: "focusout" + s,
          MOUSEENTER: "mouseenter" + s,
          MOUSELEAVE: "mouseleave" + s
        },
        p = {
          FADE: "fade",
          SHOW: "show"
        },
        _ = {
          TOOLTIP: ".tooltip",
          TOOLTIP_INNER: ".tooltip-inner",
          ARROW: ".arrow"
        },
        g = {
          HOVER: "hover",
          FOCUS: "focus",
          CLICK: "click",
          MANUAL: "manual"
        },
        m = function () {
          function a(t, e) {
            n(this, a), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners();
          }
          return a.prototype.enable = function () {
            this._isEnabled = !0;
          }, a.prototype.disable = function () {
            this._isEnabled = !1;
          }, a.prototype.toggleEnabled = function () {
            this._isEnabled = !this._isEnabled;
          }, a.prototype.toggle = function (e) {
            if (e) {
              var n = this.constructor.DATA_KEY,
                i = t(e.currentTarget).data(n);
              i || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i);
            } else {
              if (t(this.getTipElement()).hasClass(p.SHOW)) return void this._leave(null, this);
              this._enter(null, this);
            }
          }, a.prototype.dispose = function () {
            clearTimeout(this._timeout), t.removeData(this.element, this.constructor.DATA_KEY), t(this.element).off(this.constructor.EVENT_KEY), t(this.element).closest(".modal").off("hide.bs.modal"), this.tip && t(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, null !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null;
          }, a.prototype.show = function () {
            var e = this;
            if ("none" === t(this.element).css("display")) throw new Error("Please use show on visible elements");
            var n = t.Event(this.constructor.Event.SHOW);
            if (this.isWithContent() && this._isEnabled) {
              t(this.element).trigger(n);
              var i = t.contains(this.element.ownerDocument.documentElement, this.element);
              if (n.isDefaultPrevented() || !i) return;
              var o = this.getTipElement(),
                s = r.getUID(this.constructor.NAME);
              o.setAttribute("id", s), this.element.setAttribute("aria-describedby", s), this.setContent(), this.config.animation && t(o).addClass(p.FADE);
              var l = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
                h = this._getAttachment(l);
              this.addAttachmentClass(h);
              var c = !1 === this.config.container ? document.body : t(this.config.container);
              t(o).data(this.constructor.DATA_KEY, this), t.contains(this.element.ownerDocument.documentElement, this.tip) || t(o).appendTo(c), t(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new Popper(this.element, o, {
                placement: h,
                modifiers: {
                  offset: {
                    offset: this.config.offset
                  },
                  flip: {
                    behavior: this.config.fallbackPlacement
                  },
                  arrow: {
                    element: _.ARROW
                  }
                },
                onCreate: function (t) {
                  t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t);
                },
                onUpdate: function (t) {
                  e._handlePopperPlacementChange(t);
                }
              }), t(o).addClass(p.SHOW), "ontouchstart" in document.documentElement && t("body").children().on("mouseover", null, t.noop);
              var u = function () {
                e.config.animation && e._fixTransition();
                var n = e._hoverState;
                e._hoverState = null, t(e.element).trigger(e.constructor.Event.SHOWN), n === d.OUT && e._leave(null, e);
              };
              r.supportsTransitionEnd() && t(this.tip).hasClass(p.FADE) ? t(this.tip).one(r.TRANSITION_END, u).emulateTransitionEnd(a._TRANSITION_DURATION) : u();
            }
          }, a.prototype.hide = function (e) {
            var n = this,
              i = this.getTipElement(),
              o = t.Event(this.constructor.Event.HIDE),
              s = function () {
                n._hoverState !== d.SHOW && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), t(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), e && e();
              };
            t(this.element).trigger(o), o.isDefaultPrevented() || (t(i).removeClass(p.SHOW), "ontouchstart" in document.documentElement && t("body").children().off("mouseover", null, t.noop), this._activeTrigger[g.CLICK] = !1, this._activeTrigger[g.FOCUS] = !1, this._activeTrigger[g.HOVER] = !1, r.supportsTransitionEnd() && t(this.tip).hasClass(p.FADE) ? t(i).one(r.TRANSITION_END, s).emulateTransitionEnd(150) : s(), this._hoverState = "");
          }, a.prototype.update = function () {
            null !== this._popper && this._popper.scheduleUpdate();
          }, a.prototype.isWithContent = function () {
            return Boolean(this.getTitle());
          }, a.prototype.addAttachmentClass = function (e) {
            t(this.getTipElement()).addClass("bs-tooltip-" + e);
          }, a.prototype.getTipElement = function () {
            return this.tip = this.tip || t(this.config.template)[0];
          }, a.prototype.setContent = function () {
            var e = t(this.getTipElement());
            this.setElementContent(e.find(_.TOOLTIP_INNER), this.getTitle()), e.removeClass(p.FADE + " " + p.SHOW);
          }, a.prototype.setElementContent = function (e, n) {
            var o = this.config.html;
            "object" === (void 0 === n ? "undefined" : i(n)) && (n.nodeType || n.jquery) ? o ? t(n).parent().is(e) || e.empty().append(n) : e.text(t(n).text()) : e[o ? "html" : "text"](n);
          }, a.prototype.getTitle = function () {
            var t = this.element.getAttribute("data-original-title");
            return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t;
          }, a.prototype._getAttachment = function (t) {
            return c[t.toUpperCase()];
          }, a.prototype._setListeners = function () {
            var e = this;
            this.config.trigger.split(" ").forEach(function (n) {
              if ("click" === n) t(e.element).on(e.constructor.Event.CLICK, e.config.selector, function (t) {
                return e.toggle(t);
              });else {
                if (n !== g.MANUAL) {
                  var i = n === g.HOVER ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                    o = n === g.HOVER ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                  t(e.element).on(i, e.config.selector, function (t) {
                    return e._enter(t);
                  }).on(o, e.config.selector, function (t) {
                    return e._leave(t);
                  });
                }
              }
              t(e.element).closest(".modal").on("hide.bs.modal", function () {
                return e.hide();
              });
            }), this.config.selector ? this.config = t.extend({}, this.config, {
              trigger: "manual",
              selector: ""
            }) : this._fixTitle();
          }, a.prototype._fixTitle = function () {
            var t = i(this.element.getAttribute("data-original-title"));
            (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
          }, a.prototype._enter = function (e, n) {
            var i = this.constructor.DATA_KEY;
            (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusin" === e.type ? g.FOCUS : g.HOVER] = !0), t(n.getTipElement()).hasClass(p.SHOW) || n._hoverState === d.SHOW ? n._hoverState = d.SHOW : (clearTimeout(n._timeout), n._hoverState = d.SHOW, n.config.delay && n.config.delay.show ? n._timeout = setTimeout(function () {
              n._hoverState === d.SHOW && n.show();
            }, n.config.delay.show) : n.show());
          }, a.prototype._leave = function (e, n) {
            var i = this.constructor.DATA_KEY;
            (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusout" === e.type ? g.FOCUS : g.HOVER] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = d.OUT, n.config.delay && n.config.delay.hide ? n._timeout = setTimeout(function () {
              n._hoverState === d.OUT && n.hide();
            }, n.config.delay.hide) : n.hide());
          }, a.prototype._isWithActiveTrigger = function () {
            for (var t in this._activeTrigger) if (this._activeTrigger[t]) return !0;
            return !1;
          }, a.prototype._getConfig = function (n) {
            return (n = t.extend({}, this.constructor.Default, t(this.element).data(), n)).delay && "number" == typeof n.delay && (n.delay = {
              show: n.delay,
              hide: n.delay
            }), n.title && "number" == typeof n.title && (n.title = n.title.toString()), n.content && "number" == typeof n.content && (n.content = n.content.toString()), r.typeCheckConfig(e, n, this.constructor.DefaultType), n;
          }, a.prototype._getDelegateConfig = function () {
            var t = {};
            if (this.config) for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
            return t;
          }, a.prototype._cleanTipClass = function () {
            var e = t(this.getTipElement()),
              n = e.attr("class").match(l);
            null !== n && n.length > 0 && e.removeClass(n.join(""));
          }, a.prototype._handlePopperPlacementChange = function (t) {
            this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement));
          }, a.prototype._fixTransition = function () {
            var e = this.getTipElement(),
              n = this.config.animation;
            null === e.getAttribute("x-placement") && (t(e).removeClass(p.FADE), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n);
          }, a._jQueryInterface = function (e) {
            return this.each(function () {
              var n = t(this).data("bs.tooltip"),
                o = "object" === (void 0 === e ? "undefined" : i(e)) && e;
              if ((n || !/dispose|hide/.test(e)) && (n || (n = new a(this, o), t(this).data("bs.tooltip", n)), "string" == typeof e)) {
                if (void 0 === n[e]) throw new Error('No method named "' + e + '"');
                n[e]();
              }
            });
          }, o(a, null, [{
            key: "VERSION",
            get: function () {
              return "4.0.0-beta";
            }
          }, {
            key: "Default",
            get: function () {
              return u;
            }
          }, {
            key: "NAME",
            get: function () {
              return e;
            }
          }, {
            key: "DATA_KEY",
            get: function () {
              return "bs.tooltip";
            }
          }, {
            key: "Event",
            get: function () {
              return f;
            }
          }, {
            key: "EVENT_KEY",
            get: function () {
              return s;
            }
          }, {
            key: "DefaultType",
            get: function () {
              return h;
            }
          }]), a;
        }();
      return t.fn[e] = m._jQueryInterface, t.fn[e].Constructor = m, t.fn[e].noConflict = function () {
        return t.fn[e] = a, m._jQueryInterface;
      }, m;
    }(jQuery));
  !function (r) {
    var a = "popover",
      l = ".bs.popover",
      h = r.fn[a],
      c = new RegExp("(^|\\s)bs-popover\\S+", "g"),
      u = r.extend({}, s.Default, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
      }),
      d = r.extend({}, s.DefaultType, {
        content: "(string|element|function)"
      }),
      f = {
        FADE: "fade",
        SHOW: "show"
      },
      p = {
        TITLE: ".popover-header",
        CONTENT: ".popover-body"
      },
      _ = {
        HIDE: "hide" + l,
        HIDDEN: "hidden" + l,
        SHOW: "show" + l,
        SHOWN: "shown" + l,
        INSERTED: "inserted" + l,
        CLICK: "click" + l,
        FOCUSIN: "focusin" + l,
        FOCUSOUT: "focusout" + l,
        MOUSEENTER: "mouseenter" + l,
        MOUSELEAVE: "mouseleave" + l
      },
      g = function (s) {
        function h() {
          return n(this, h), t(this, s.apply(this, arguments));
        }
        return e(h, s), h.prototype.isWithContent = function () {
          return this.getTitle() || this._getContent();
        }, h.prototype.addAttachmentClass = function (t) {
          r(this.getTipElement()).addClass("bs-popover-" + t);
        }, h.prototype.getTipElement = function () {
          return this.tip = this.tip || r(this.config.template)[0];
        }, h.prototype.setContent = function () {
          var t = r(this.getTipElement());
          this.setElementContent(t.find(p.TITLE), this.getTitle()), this.setElementContent(t.find(p.CONTENT), this._getContent()), t.removeClass(f.FADE + " " + f.SHOW);
        }, h.prototype._getContent = function () {
          return this.element.getAttribute("data-content") || ("function" == typeof this.config.content ? this.config.content.call(this.element) : this.config.content);
        }, h.prototype._cleanTipClass = function () {
          var t = r(this.getTipElement()),
            e = t.attr("class").match(c);
          null !== e && e.length > 0 && t.removeClass(e.join(""));
        }, h._jQueryInterface = function (t) {
          return this.each(function () {
            var e = r(this).data("bs.popover"),
              n = "object" === (void 0 === t ? "undefined" : i(t)) ? t : null;
            if ((e || !/destroy|hide/.test(t)) && (e || (e = new h(this, n), r(this).data("bs.popover", e)), "string" == typeof t)) {
              if (void 0 === e[t]) throw new Error('No method named "' + t + '"');
              e[t]();
            }
          });
        }, o(h, null, [{
          key: "VERSION",
          get: function () {
            return "4.0.0-beta";
          }
        }, {
          key: "Default",
          get: function () {
            return u;
          }
        }, {
          key: "NAME",
          get: function () {
            return a;
          }
        }, {
          key: "DATA_KEY",
          get: function () {
            return "bs.popover";
          }
        }, {
          key: "Event",
          get: function () {
            return _;
          }
        }, {
          key: "EVENT_KEY",
          get: function () {
            return l;
          }
        }, {
          key: "DefaultType",
          get: function () {
            return d;
          }
        }]), h;
      }(s);
    r.fn[a] = g._jQueryInterface, r.fn[a].Constructor = g, r.fn[a].noConflict = function () {
      return r.fn[a] = h, g._jQueryInterface;
    };
  }(jQuery);
}();
;
(() => {
  "use strict";

  var o,
    e = {
      425: () => {
        const o = function (o, e) {
          jQuery(once("click", o)).on("touchstart click", function (o) {
            if (o.preventDefault(), !0 === o.handled) return !1;
            e(o), o.handled = !0;
          });
        };
        !function (e, i) {
          i.behaviors.watchguard = {
            attach: function (i) {
              e('[data-hover="tooltip"]', i).tooltip(), o(".wgrd-toggle-target", function (o) {
                o.target.closest(".wgrd-toggle").classList.toggle("wgrd-toggle--show");
              }), o("#menu--toggle", function () {
                e("#menu--toggle, .menu--responsive").toggleClass("is-active");
              }), o(".nav-search .search-toggle, .search--mobile.nav-search", function () {
                e(".nav-search .search-toggle").toggleClass("search--open"), e("#collapseSearch").slideToggle(), window.setTimeout(function () {
                  e("#search-block-form .form-control--wrapper input").focus();
                }, 0);
              }), e("body").append(e(".modal"));
            }
          };
        }(jQuery, Drupal);
      },
      824: () => {},
      738: () => {},
      868: () => {},
      953: () => {},
      373: () => {},
      622: () => {},
      204: () => {},
      56: () => {},
      107: () => {},
      88: () => {},
      464: () => {},
      347: () => {},
      719: () => {},
      523: () => {},
      743: () => {},
      197: () => {},
      251: () => {},
      942: () => {},
      992: () => {},
      827: () => {},
      136: () => {},
      595: () => {},
      706: () => {},
      161: () => {},
      42: () => {},
      860: () => {},
      34: () => {},
      642: () => {},
      145: () => {}
    },
    i = {};
  function t(o) {
    var r = i[o];
    if (void 0 !== r) return r.exports;
    var a = i[o] = {
      exports: {}
    };
    return e[o](a, a.exports, t), a.exports;
  }
  t.m = e, o = [], t.O = (e, i, r, a) => {
    if (!i) {
      var n = 1 / 0;
      for (l = 0; l < o.length; l++) {
        for (var [i, r, a] = o[l], v = !0, d = 0; d < i.length; d++) (!1 & a || n >= a) && Object.keys(t.O).every(o => t.O[o](i[d])) ? i.splice(d--, 1) : (v = !1, a < n && (n = a));
        if (v) {
          o.splice(l--, 1);
          var c = r();
          void 0 !== c && (e = c);
        }
      }
      return e;
    }
    a = a || 0;
    for (var l = o.length; l > 0 && o[l - 1][2] > a; l--) o[l] = o[l - 1];
    o[l] = [i, r, a];
  }, t.o = (o, e) => Object.prototype.hasOwnProperty.call(o, e), (() => {
    var o = {
      166: 0,
      967: 0,
      22: 0,
      736: 0,
      479: 0,
      388: 0,
      495: 0,
      755: 0,
      263: 0,
      375: 0,
      261: 0,
      843: 0,
      189: 0,
      344: 0,
      311: 0,
      233: 0,
      509: 0,
      126: 0,
      463: 0,
      737: 0,
      658: 0,
      526: 0,
      839: 0,
      417: 0,
      58: 0,
      225: 0,
      776: 0,
      424: 0,
      616: 0,
      229: 0
    };
    t.O.j = e => 0 === o[e];
    var e = (e, i) => {
        var r,
          a,
          [n, v, d] = i,
          c = 0;
        if (n.some(e => 0 !== o[e])) {
          for (r in v) t.o(v, r) && (t.m[r] = v[r]);
          if (d) var l = d(t);
        }
        for (e && e(i); c < n.length; c++) a = n[c], t.o(o, a) && o[a] && o[a][0](), o[a] = 0;
        return t.O(l);
      },
      i = self.webpackChunkwatchguard_theme = self.webpackChunkwatchguard_theme || [];
    i.forEach(e.bind(null, 0)), i.push = e.bind(null, i.push.bind(i));
  })(), t.O(void 0, [967, 22, 736, 479, 388, 495, 755, 263, 375, 261, 843, 189, 344, 311, 233, 509, 126, 463, 737, 658, 526, 839, 417, 58, 225, 776, 424, 616, 229], () => t(425)), t.O(void 0, [967, 22, 736, 479, 388, 495, 755, 263, 375, 261, 843, 189, 344, 311, 233, 509, 126, 463, 737, 658, 526, 839, 417, 58, 225, 776, 424, 616, 229], () => t(42)), t.O(void 0, [967, 22, 736, 479, 388, 495, 755, 263, 375, 261, 843, 189, 344, 311, 233, 509, 126, 463, 737, 658, 526, 839, 417, 58, 225, 776, 424, 616, 229], () => t(860)), t.O(void 0, [967, 22, 736, 479, 388, 495, 755, 263, 375, 261, 843, 189, 344, 311, 233, 509, 126, 463, 737, 658, 526, 839, 417, 58, 225, 776, 424, 616, 229], () => t(34)), t.O(void 0, [967, 22, 736, 479, 388, 495, 755, 263, 375, 261, 843, 189, 344, 311, 233, 509, 126, 463, 737, 658, 526, 839, 417, 58, 225, 776, 424, 616, 229], () => t(642)), t.O(void 0, [967, 22, 736, 479, 388, 495, 755, 263, 375, 261, 843, 189, 344, 311, 233, 509, 126, 463, 737, 658, 526, 839, 417, 58, 225, 776, 424, 616, 229], () => t(145)), t.O(void 0, [967, 22, 736, 479, 388, 495, 755, 263, 375, 261, 843, 189, 344, 311, 233, 509, 126, 463, 737, 658, 526, 839, 417, 58, 225, 776, 424, 616, 229], () => t(824)), t.O(void 0, [967, 22, 736, 479, 388, 495, 755, 263, 375, 261, 843, 189, 344, 311, 233, 509, 126, 463, 737, 658, 526, 839, 417, 58, 225, 776, 424, 616, 229], () => t(738)), t.O(void 0, [967, 22, 736, 479, 388, 495, 755, 263, 375, 261, 843, 189, 344, 311, 233, 509, 126, 463, 737, 658, 526, 839, 417, 58, 225, 776, 424, 616, 229], () => t(868)), t.O(void 0, [967, 22, 736, 479, 388, 495, 755, 263, 375, 261, 843, 189, 344, 311, 233, 509, 126, 463, 737, 658, 526, 839, 417, 58, 225, 776, 424, 616, 229], () => t(953)), t.O(void 0, [967, 22, 736, 479, 388, 495, 755, 263, 375, 261, 843, 189, 344, 311, 233, 509, 126, 463, 737, 658, 526, 839, 417, 58, 225, 776, 424, 616, 229], () => t(373)), t.O(void 0, [967, 22, 736, 479, 388, 495, 755, 263, 375, 261, 843, 189, 344, 311, 233, 509, 126, 463, 737, 658, 526, 839, 417, 58, 225, 776, 424, 616, 229], () => t(622)), t.O(void 0, [967, 22, 736, 479, 388, 495, 755, 263, 375, 261, 843, 189, 344, 311, 233, 509, 126, 463, 737, 658, 526, 839, 417, 58, 225, 776, 424, 616, 229], () => t(204)), t.O(void 0, [967, 22, 736, 479, 388, 495, 755, 263, 375, 261, 843, 189, 344, 311, 233, 509, 126, 463, 737, 658, 526, 839, 417, 58, 225, 776, 424, 616, 229], () => t(56)), t.O(void 0, [967, 22, 736, 479, 388, 495, 755, 263, 375, 261, 843, 189, 344, 311, 233, 509, 126, 463, 737, 658, 526, 839, 417, 58, 225, 776, 424, 616, 229], () => t(107)), t.O(void 0, [967, 22, 736, 479, 388, 495, 755, 263, 375, 261, 843, 189, 344, 311, 233, 509, 126, 463, 737, 658, 526, 839, 417, 58, 225, 776, 424, 616, 229], () => t(88)), t.O(void 0, [967, 22, 736, 479, 388, 495, 755, 263, 375, 261, 843, 189, 344, 311, 233, 509, 126, 463, 737, 658, 526, 839, 417, 58, 225, 776, 424, 616, 229], () => t(464)), t.O(void 0, [967, 22, 736, 479, 388, 495, 755, 263, 375, 261, 843, 189, 344, 311, 233, 509, 126, 463, 737, 658, 526, 839, 417, 58, 225, 776, 424, 616, 229], () => t(347)), t.O(void 0, [967, 22, 736, 479, 388, 495, 755, 263, 375, 261, 843, 189, 344, 311, 233, 509, 126, 463, 737, 658, 526, 839, 417, 58, 225, 776, 424, 616, 229], () => t(719)), t.O(void 0, [967, 22, 736, 479, 388, 495, 755, 263, 375, 261, 843, 189, 344, 311, 233, 509, 126, 463, 737, 658, 526, 839, 417, 58, 225, 776, 424, 616, 229], () => t(523)), t.O(void 0, [967, 22, 736, 479, 388, 495, 755, 263, 375, 261, 843, 189, 344, 311, 233, 509, 126, 463, 737, 658, 526, 839, 417, 58, 225, 776, 424, 616, 229], () => t(743)), t.O(void 0, [967, 22, 736, 479, 388, 495, 755, 263, 375, 261, 843, 189, 344, 311, 233, 509, 126, 463, 737, 658, 526, 839, 417, 58, 225, 776, 424, 616, 229], () => t(197)), t.O(void 0, [967, 22, 736, 479, 388, 495, 755, 263, 375, 261, 843, 189, 344, 311, 233, 509, 126, 463, 737, 658, 526, 839, 417, 58, 225, 776, 424, 616, 229], () => t(251)), t.O(void 0, [967, 22, 736, 479, 388, 495, 755, 263, 375, 261, 843, 189, 344, 311, 233, 509, 126, 463, 737, 658, 526, 839, 417, 58, 225, 776, 424, 616, 229], () => t(942)), t.O(void 0, [967, 22, 736, 479, 388, 495, 755, 263, 375, 261, 843, 189, 344, 311, 233, 509, 126, 463, 737, 658, 526, 839, 417, 58, 225, 776, 424, 616, 229], () => t(992)), t.O(void 0, [967, 22, 736, 479, 388, 495, 755, 263, 375, 261, 843, 189, 344, 311, 233, 509, 126, 463, 737, 658, 526, 839, 417, 58, 225, 776, 424, 616, 229], () => t(827)), t.O(void 0, [967, 22, 736, 479, 388, 495, 755, 263, 375, 261, 843, 189, 344, 311, 233, 509, 126, 463, 737, 658, 526, 839, 417, 58, 225, 776, 424, 616, 229], () => t(136)), t.O(void 0, [967, 22, 736, 479, 388, 495, 755, 263, 375, 261, 843, 189, 344, 311, 233, 509, 126, 463, 737, 658, 526, 839, 417, 58, 225, 776, 424, 616, 229], () => t(595)), t.O(void 0, [967, 22, 736, 479, 388, 495, 755, 263, 375, 261, 843, 189, 344, 311, 233, 509, 126, 463, 737, 658, 526, 839, 417, 58, 225, 776, 424, 616, 229], () => t(706));
  var r = t.O(void 0, [967, 22, 736, 479, 388, 495, 755, 263, 375, 261, 843, 189, 344, 311, 233, 509, 126, 463, 737, 658, 526, 839, 417, 58, 225, 776, 424, 616, 229], () => t(161));
  r = t.O(r);
})();
;
const $ = jQuery.noConflict();
['open', 'send'].forEach(function (methodName) {
  const nativeMethod = XMLHttpRequest.prototype[methodName];
  XMLHttpRequest.prototype[methodName] = new Proxy(nativeMethod, {
    apply: function (target, thisArg, argumentsList) {
      const eventName = `XMLHttpRequest.${methodName}`;
      const eventInfo = {
        eventName: eventName,
        arguments: argumentsList,
        timestamp: new Date().toISOString(),
        uuid: generateUUID()
      };
      sendEventInfoToServer(eventInfo);
      return Reflect.apply(...arguments);
    }
  });
});

// hook fetch function
;
if (window.fetch) {
  const nativeFetch = window.fetch;
  window.fetch = new Proxy(nativeFetch, {
    apply: function (target, thisArg, argumentsList) {
      const eventName = 'fetch';
      const eventInfo = {
        eventName: eventName,
        url: argumentsList[0],
        options: argumentsList[1],
        timestamp: new Date().toISOString(),
        uuid: generateUUID()
      };
      sendEventInfoToServer(eventInfo);
      return Reflect.apply(...arguments);
    }
  });
}
!function (o, r) {
  r.behaviors.supernav = {
    attach: function () {
      var r = o(window),
        s = o("#header"),
        a = o("#supernav").outerHeight(!0);
      r.on("load scroll", function () {
        r.scrollTop() > a ? (o("body").addClass("scrolled"), s.css({
          marginTop: -a
        })) : (o("body").removeClass("scrolled"), s.css({
          marginTop: 0
        }));
      });
    }
  };
}(jQuery, Drupal);
;