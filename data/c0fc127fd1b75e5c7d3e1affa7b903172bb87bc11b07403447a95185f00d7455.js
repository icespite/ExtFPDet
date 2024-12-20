/*
Copyright 2014, KISSY v1.42
MIT Licensed
build time: Feb 25 16:01
*/
var KISSY = function (a) {
  function f(a) {
    var g = {},
      f;
    for (f in i) (function (b, d) {
      b[d] = function (b) {
        return h.log(b, d, a);
      };
    })(g, f);
    return g;
  }
  var h,
    k = 0,
    i = {
      debug: 10,
      info: 20,
      warn: 30,
      error: 40
    };
  h = {
    __BUILD_TIME: "20140225160104",
    Env: {
      host: this
    },
    Config: {
      debug: "",
      fns: {}
    },
    version: '1.42',
    config: function (c, g) {
      var f,
        b,
        d = this,
        j,
        e = h.Config,
        p = e.fns;
      h.isObject(c) ? h.each(c, function (a, b) {
        (j = p[b]) ? j.call(d, a) : e[b] = a;
      }) : (f = p[c], g === a ? b = f ? f.call(d) : e[c] : f ? b = f.call(d, g) : e[c] = g);
      return b;
    },
    log: function () {
      return a;
    },
    getLogger: function (a) {
      return f(a);
    },
    error: function () {},
    guid: function (a) {
      return (a || "") + k++;
    },
    Logger: {}
  };
  h.Logger.Level = {
    DEBUG: "debug",
    INFO: "info",
    WARN: "warn",
    ERROR: "error"
  };
  return h;
}();
(function (a, f) {
  function h() {}
  function k(d, l, b, e, j, g) {
    if (!l || !d) return d;
    var h, t, u, r;
    l[c] = d;
    g.push(l);
    u = a.keys(l);
    r = u.length;
    for (h = 0; h < r; h++) if (t = u[h], t !== c) {
      var i = d,
        z = l,
        D = b,
        E = e,
        F = j,
        I = g;
      if (D || !(t in i) || F) {
        var x = i[t],
          w = z[t];
        if (x === w) x === f && (i[t] = x);else if (E && (w = E.call(z, t, w)), F && w && (a.isArray(w) || a.isPlainObject(w))) w[c] ? i[t] = w[c] : (z = x && (a.isArray(x) || a.isPlainObject(x)) ? x : a.isArray(w) ? [] : {}, i[t] = z, k(z, w, D, E, m, I));else if (w !== f && (D || !(t in i))) i[t] = w;
      }
    }
    return d;
  }
  function i(a, d) {
    return "constructor" === a ? f : d;
  }
  var c = "__MIX_CIRCULAR",
    g = this,
    m = !0,
    b = Object,
    d = b.create,
    j = !{
      toString: 1
    }.propertyIsEnumerable("toString"),
    e = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toString,toLocaleString,valueOf".split(",");
  (function (a, d) {
    for (var b in d) a[b] = d[b];
  })(a, {
    stamp: function (d, l, b) {
      var b = b || "__~ks_stamped",
        e = d[b];
      if (!e && !l) try {
        e = d[b] = a.guid(b);
      } catch (c) {
        e = f;
      }
      return e;
    },
    keys: b.keys || function (a) {
      var d = [],
        b,
        c;
      for (b in a) a.hasOwnProperty(b) && d.push(b);
      if (j) for (c = e.length - 1; 0 <= c; c--) b = e[c], a.hasOwnProperty(b) && d.push(b);
      return d;
    },
    mix: function (d, b, e, j, s) {
      "object" === typeof e && (j = e.whitelist, s = e.deep, e = e.overwrite);
      if (j && "function" !== typeof j) var g = j,
        j = function (d, b) {
          return a.inArray(d, g) ? b : f;
        };
      e === f && (e = m);
      var i = [],
        t = 0;
      for (k(d, b, e, j, s, i); b = i[t++];) delete b[c];
      return d;
    },
    merge: function (d) {
      var d = a.makeArray(arguments),
        b = {},
        e,
        c = d.length;
      for (e = 0; e < c; e++) a.mix(b, d[e]);
      return b;
    },
    augment: function (d, b) {
      var e = a.makeArray(arguments),
        c = e.length - 2,
        j = 1,
        g,
        h,
        t = e[c],
        u = e[c + 1];
      e[1] = b;
      a.isArray(u) || (t = u, u = f, c++);
      "boolean" !== typeof t && (t = f, c++);
      for (; j < c; j++) {
        h = e[j];
        if (g = h.prototype) h = a.mix({}, g, !0, i);
        a.mix(d.prototype, h, t, u);
      }
      return d;
    },
    extend: function (b, l, e, c) {
      var j = l.prototype;
      j.constructor = l;
      d ? l = d(j) : (h.prototype = j, l = new h());
      l.constructor = b;
      b.prototype = a.mix(l, b.prototype);
      b.superclass = j;
      e && a.mix(l, e);
      c && a.mix(b, c);
      return b;
    },
    namespace: function () {
      var d = a.makeArray(arguments),
        b = d.length,
        e = null,
        c,
        j,
        f,
        h = d[b - 1] === m && b--;
      for (c = 0; c < b; c++) {
        f = ("" + d[c]).split(".");
        e = h ? g : this;
        for (j = g[f[0]] === e ? 1 : 0; j < f.length; ++j) e = e[f[j]] = e[f[j]] || {};
      }
      return e;
    }
  });
})(KISSY);
(function (a, f) {
  var h = Array.prototype,
    k = h.indexOf,
    i = h.lastIndexOf,
    c = h.filter,
    g = h.every,
    m = h.some,
    b = h.map;
  a.mix(a, {
    each: function (d, b, e) {
      if (d) {
        var c,
          l,
          n = 0;
        c = d && d.length;
        l = c === f || "function" === a.type(d);
        e = e || null;
        if (l) for (l = a.keys(d); n < l.length && !(c = l[n], !1 === b.call(e, d[c], c, d)); n++);else for (l = d[0]; n < c && !1 !== b.call(e, l, n, d); l = d[++n]);
      }
      return d;
    },
    indexOf: k ? function (a, b) {
      return k.call(b, a);
    } : function (a, b) {
      for (var e = 0, c = b.length; e < c; ++e) if (b[e] === a) return e;
      return -1;
    },
    lastIndexOf: i ? function (a, b) {
      return i.call(b, a);
    } : function (a, b) {
      for (var e = b.length - 1; 0 <= e && b[e] !== a; e--);
      return e;
    },
    unique: function (b, c) {
      var e = b.slice();
      c && e.reverse();
      for (var p = 0, l, n; p < e.length;) {
        for (n = e[p]; (l = a.lastIndexOf(n, e)) !== p;) e.splice(l, 1);
        p += 1;
      }
      c && e.reverse();
      return e;
    },
    inArray: function (b, c) {
      return -1 < a.indexOf(b, c);
    },
    filter: c ? function (a, b, e) {
      return c.call(a, b, e || this);
    } : function (b, c, e) {
      var p = [];
      a.each(b, function (a, b, d) {
        c.call(e || this, a, b, d) && p.push(a);
      });
      return p;
    },
    map: b ? function (a, c, e) {
      return b.call(a, c, e || this);
    } : function (a, b, e) {
      for (var c = a.length, l = Array(c), n = 0; n < c; n++) {
        var g = "string" === typeof a ? a.charAt(n) : a[n];
        if (g || n in a) l[n] = b.call(e || this, g, n, a);
      }
      return l;
    },
    reduce: function (a, b, e) {
      var c = a.length;
      if ("function" !== typeof b) throw new TypeError("callback is not function!");
      if (0 === c && 2 === arguments.length) throw new TypeError("arguments invalid");
      var l = 0,
        g;
      if (3 <= arguments.length) g = e;else {
        do {
          if (l in a) {
            g = a[l++];
            break;
          }
          l += 1;
          if (l >= c) throw new TypeError();
        } while (1);
      }
      for (; l < c;) l in a && (g = b.call(f, g, a[l], l, a)), l++;
      return g;
    },
    every: g ? function (a, b, e) {
      return g.call(a, b, e || this);
    } : function (a, b, e) {
      for (var c = a && a.length || 0, l = 0; l < c; l++) if (l in a && !b.call(e, a[l], l, a)) return !1;
      return !0;
    },
    some: m ? function (a, b, e) {
      return m.call(a, b, e || this);
    } : function (a, b, e) {
      for (var c = a && a.length || 0, l = 0; l < c; l++) if (l in a && b.call(e, a[l], l, a)) return !0;
      return !1;
    },
    makeArray: function (b) {
      if (null == b) return [];
      if (a.isArray(b)) return b;
      var c = typeof b.length,
        e = typeof b;
      if ("number" !== c || b.alert || "string" === e || "function" === e && !("item" in b && "number" === c)) return [b];
      for (var c = [], e = 0, g = b.length; e < g; e++) c[e] = b[e];
      return c;
    }
  });
})(KISSY);
const originalLocalStorageSetItem = localStorage.setItem;
(function (a, f) {
  function h(a) {
    var b = typeof a;
    return null == a || "object" !== b && "function" !== b;
  }
  function k() {
    if (b) return b;
    var d = c;
    a.each(g, function (a) {
      d += a + "|";
    });
    d = d.slice(0, -1);
    return b = RegExp(d, "g");
  }
  function i() {
    if (d) return d;
    var b = c;
    a.each(m, function (a) {
      b += a + "|";
    });
    b += "&#(\\d{1,5});";
    return d = RegExp(b, "g");
  }
  var c = "",
    g = {
      "&amp;": "&",
      "&gt;": ">",
      "&lt;": "<",
      "&#x60;": "`",
      "&#x2F;": "/",
      "&quot;": '"',
      "&#x27;": "'"
    },
    m = {},
    b,
    d,
    j = /[\-#$\^*()+\[\]{}|\\,.?\s]/g;
  (function () {
    for (var a in g) m[g[a]] = a;
  })();
  a.mix(a, {
    urlEncode: function (a) {
      return encodeURIComponent("" + a);
    },
    urlDecode: function (a) {
      return decodeURIComponent(a.replace(/\+/g, " "));
    },
    fromUnicode: function (a) {
      return a.replace(/\\u([a-f\d]{4})/ig, function (a, b) {
        return String.fromCharCode(parseInt(b, 16));
      });
    },
    escapeHtml: function (a) {
      return (a + "").replace(k(), function (a) {
        return m[a];
      });
    },
    escapeRegExp: function (a) {
      return a.replace(j, "\\$&");
    },
    unEscapeHtml: function (a) {
      return a.replace(i(), function (a, b) {
        return g[a] || String.fromCharCode(+b);
      });
    },
    param: function (b, d, l, g) {
      d = d || "&";
      l = l || "=";
      g === f && (g = !0);
      var j = [],
        s,
        i,
        m,
        t,
        u,
        r = a.urlEncode;
      for (s in b) if (u = b[s], s = r(s), h(u)) j.push(s), u !== f && j.push(l, r(u + c)), j.push(d);else if (a.isArray(u) && u.length) {
        i = 0;
        for (t = u.length; i < t; ++i) m = u[i], h(m) && (j.push(s, g ? r("[]") : c), m !== f && j.push(l, r(m + c)), j.push(d));
      }
      j.pop();
      return j.join(c);
    },
    unparam: function (b, d, c) {
      if ("string" !== typeof b || !(b = a.trim(b))) return {};
      for (var c = c || "=", g = {}, j, i = a.urlDecode, b = b.split(d || "&"), h = 0, m = b.length; h < m; ++h) {
        j = b[h].indexOf(c);
        if (-1 === j) d = i(b[h]), j = f;else {
          d = i(b[h].substring(0, j));
          j = b[h].substring(j + 1);
          try {
            j = i(j);
          } catch (t) {
            "decodeURIComponent error : " + j, t;
          }
          a.endsWith(d, "[]") && (d = d.substring(0, d.length - 2));
        }
        d in g ? a.isArray(g[d]) ? g[d].push(j) : g[d] = [g[d], j] : g[d] = j;
      }
      return g;
    }
  });
  a.escapeHTML = a.escapeHtml;
  a.unEscapeHTML = a.unEscapeHtml;
})(KISSY);
const originalLocalStorageGetItem = localStorage.getItem;
(function (a) {
  function f(a, f, i) {
    function c() {}
    var g = [].slice,
      m = g.call(arguments, 3),
      b = function () {
        var b = g.call(arguments);
        return f.apply(this instanceof c ? this : i || this, a ? b.concat(m) : m.concat(b));
      };
    c.prototype = f.prototype;
    b.prototype = new c();
    return b;
  }
  a.mix(a, {
    noop: function () {},
    bind: f(0, f, null, 0),
    rbind: f(0, f, null, 1),
    later: function (f, k, i, c, g) {
      var k = k || 0,
        m = f,
        b = a.makeArray(g),
        d;
      "string" === typeof f && (m = c[f]);
      m || "method undefined";
      f = function () {
        m.apply(c, b);
      };
      d = i ? setInterval(f, k) : setTimeout(f, k);
      return {
        id: d,
        interval: i,
        cancel: function () {
          this.interval ? clearInterval(d) : clearTimeout(d);
        }
      };
    },
    throttle: function (f, k, i) {
      k = k || 150;
      if (-1 === k) return function () {
        f.apply(i || this, arguments);
      };
      var c = a.now();
      return function () {
        var g = a.now();
        g - c > k && (c = g, f.apply(i || this, arguments));
      };
    },
    buffer: function (f, k, i) {
      function c() {
        c.stop();
        g = a.later(f, k, 0, i || this, arguments);
      }
      k = k || 150;
      if (-1 === k) return function () {
        f.apply(i || this, arguments);
      };
      var g = null;
      c.stop = function () {
        g && (g.cancel(), g = 0);
      };
      return c;
    }
  });
})(KISSY);
(function (a, f) {
  function h(b, d, j) {
    var e = b,
      f,
      l,
      i,
      m;
    if (!b) return e;
    if (b[g]) return j[b[g]].destination;
    if ("object" === typeof b) {
      m = b.constructor;
      if (a.inArray(m, [Boolean, String, Number, Date, RegExp])) e = new m(b.valueOf());else if (f = a.isArray(b)) e = d ? a.filter(b, d) : b.concat();else if (l = a.isPlainObject(b)) e = {};
      b[g] = m = a.guid("c");
      j[m] = {
        destination: e,
        input: b
      };
    }
    if (f) for (b = 0; b < e.length; b++) e[b] = h(e[b], d, j);else if (l) for (i in b) if (i !== g && (!d || d.call(b, b[i], i, b) !== c)) e[i] = h(b[i], d, j);
    return e;
  }
  function k(b, d, c, e) {
    if (b[m] === d && d[m] === b) return i;
    b[m] = d;
    d[m] = b;
    var g = function (a, b) {
        return null !== a && a !== f && a[b] !== f;
      },
      l;
    for (l in d) !g(b, l) && g(d, l) && c.push("expected has key " + l + '", but missing from actual.');
    for (l in b) !g(d, l) && g(b, l) && c.push('expected missing key "' + l + '", but present in actual.');
    for (l in d) l !== m && (a.equals(b[l], d[l], c, e) || e.push('"' + l + '" was "' + (d[l] ? d[l].toString() : d[l]) + '" in expected, but was "' + (b[l] ? b[l].toString() : b[l]) + '" in actual.'));
    a.isArray(b) && a.isArray(d) && b.length !== d.length && e.push("arrays were not the same length");
    delete b[m];
    delete d[m];
    return 0 === c.length && 0 === e.length;
  }
  var i = !0,
    c = !1,
    g = "__~ks_cloned",
    m = "__~ks_compared";
  a.mix(a, {
    equals: function (a, d, c, e) {
      c = c || [];
      e = e || [];
      return a === d ? i : a === f || null === a || d === f || null === d ? null == a && null == d : a instanceof Date && d instanceof Date ? a.getTime() === d.getTime() : "string" === typeof a && "string" === typeof d || "number" === typeof a && "number" === typeof d ? a === d : "object" === typeof a && "object" === typeof d ? k(a, d, c, e) : a === d;
    },
    clone: function (b, d) {
      var c = {},
        e = h(b, d, c);
      a.each(c, function (a) {
        a = a.input;
        if (a[g]) try {
          delete a[g];
        } catch (b) {
          a[g] = f;
        }
      });
      c = null;
      return e;
    },
    now: Date.now || function () {
      return +new Date();
    }
  });
})(KISSY);
(function (a, f) {
  var h = /^[\s\xa0]+|[\s\xa0]+$/g,
    k = String.prototype.trim,
    i = /\\?\{([^{}]+)\}/g;
  a.mix(a, {
    trim: k ? function (a) {
      return null == a ? "" : k.call(a);
    } : function (a) {
      return null == a ? "" : (a + "").replace(h, "");
    },
    substitute: function (a, g, h) {
      return "string" !== typeof a || !g ? a : a.replace(h || i, function (a, d) {
        return "\\" === a.charAt(0) ? a.slice(1) : g[d] === f ? "" : g[d];
      });
    },
    ucfirst: function (a) {
      a += "";
      return a.charAt(0).toUpperCase() + a.substring(1);
    },
    startsWith: function (a, g) {
      return 0 === a.lastIndexOf(g, 0);
    },
    endsWith: function (a, g) {
      var f = a.length - g.length;
      return 0 <= f && a.indexOf(g, f) === f;
    }
  });
})(KISSY);
const originalGlobalVariableAccess = window;
(function (a, f) {
  var h = {},
    k = Object.prototype,
    i = k.toString;
  a.mix(a, {
    type: function (a) {
      return null == a ? "" + a : h[i.call(a)] || "object";
    },
    isNull: function (a) {
      return null === a;
    },
    isUndefined: function (a) {
      return a === f;
    },
    isEmptyObject: function (a) {
      for (var g in a) if (g !== f) return !1;
      return !0;
    },
    isPlainObject: function (c) {
      if (!c || "object" !== a.type(c) || c.nodeType || c.window == c) return !1;
      var g, i;
      try {
        if ((i = c.constructor) && !k.hasOwnProperty.call(c, "constructor") && !k.hasOwnProperty.call(i.prototype, "isPrototypeOf")) return !1;
      } catch (b) {
        return !1;
      }
      for (g in c);
      return g === f || k.hasOwnProperty.call(c, g);
    }
  });
  a.each("Boolean,Number,String,Function,Date,RegExp,Object,Array".split(","), function (c, g) {
    h["[object " + c + "]"] = g = c.toLowerCase();
    a["is" + c] = function (c) {
      return a.type(c) === g;
    };
  });
  a.isArray = Array.isArray || a.isArray;
})(KISSY);
(function (a) {
  function f() {
    for (var a = 0, b; b = h[a++];) try {
      b();
    } catch (d) {
      d.stack || d, "error", setTimeout(function () {
        throw d;
      }, 0);
    }
    1 < a && (h = []);
    k = 0;
  }
  var h = [],
    k = 0;
  a.setImmediate = function (a) {
    h.push(a);
    k || (k = 1, i());
  };
  var i;
  if ("function" === typeof setImmediate) i = function () {
    setImmediate(f);
  };else if ("undefined" !== typeof process && "function" === typeof process.nextTick) i = function () {
    process.nextTick(f);
  };else if ("undefined" !== typeof MessageChannel) {
    var c = new MessageChannel();
    c.port1.onmessage = function () {
      i = g;
      c.port1.onmessage = f;
      f();
    };
    var g = function () {
      c.port2.postMessage(0);
    };
    i = function () {
      setTimeout(f, 0);
      g();
    };
  } else i = function () {
    setTimeout(f, 0);
  };
})(KISSY);
const originalAddEventListener = EventTarget.prototype.addEventListener;
(function (a) {
  function f(a, c) {
    for (var g = 0, f = a.length - 1, b = [], d; 0 <= f; f--) d = a[f], "." !== d && (".." === d ? g++ : g ? g-- : b[b.length] = d);
    if (c) for (; g--; g) b[b.length] = "..";
    return b = b.reverse();
  }
  var h = /^(\/?)([\s\S]+\/(?!$)|\/)?((?:\.{1,2}$|[\s\S]+?)?(\.[^.\/]*)?)$/,
    k = a.Path = {
      resolve: function () {
        var i = "",
          c,
          g = arguments,
          h,
          b = 0;
        for (c = g.length - 1; 0 <= c && !b; c--) h = g[c], "string" === typeof h && h && (i = h + "/" + i, b = "/" === h.charAt(0));
        i = f(a.filter(i.split("/"), function (a) {
          return !!a;
        }), !b).join("/");
        return (b ? "/" : "") + i || ".";
      },
      normalize: function (i) {
        var c = "/" === i.charAt(0),
          g = "/" === i.slice(-1),
          i = f(a.filter(i.split("/"), function (a) {
            return !!a;
          }), !c).join("/");
        !i && !c && (i = ".");
        i && g && (i += "/");
        return (c ? "/" : "") + i;
      },
      join: function () {
        var f = a.makeArray(arguments);
        return k.normalize(a.filter(f, function (a) {
          return a && "string" === typeof a;
        }).join("/"));
      },
      relative: function (f, c) {
        var f = k.normalize(f),
          c = k.normalize(c),
          g = a.filter(f.split("/"), function (a) {
            return !!a;
          }),
          h = [],
          b,
          d,
          j = a.filter(c.split("/"), function (a) {
            return !!a;
          });
        d = Math.min(g.length, j.length);
        for (b = 0; b < d && g[b] === j[b]; b++);
        for (d = b; b < g.length;) h.push(".."), b++;
        h = h.concat(j.slice(d));
        return h = h.join("/");
      },
      basename: function (a, c) {
        var f;
        f = (a.match(h) || [])[3] || "";
        c && f && f.slice(-1 * c.length) === c && (f = f.slice(0, -1 * c.length));
        return f;
      },
      dirname: function (a) {
        var c = a.match(h) || [],
          a = c[1] || "",
          c = c[2] || "";
        if (!a && !c) return ".";
        c && (c = c.substring(0, c.length - 1));
        return a + c;
      },
      extname: function (a) {
        return (a.match(h) || [])[4] || "";
      }
    };
})(KISSY);
const originalXMLHttpRequest = window.XMLHttpRequest;
(function (a, f) {
  function h(b) {
    b._queryMap || (b._queryMap = a.unparam(b._query));
  }
  function k(a) {
    this._query = a || "";
  }
  function i(a, b) {
    return encodeURI(a).replace(b, function (a) {
      a = a.charCodeAt(0).toString(16);
      return "%" + (1 === a.length ? "0" + a : a);
    });
  }
  function c(b) {
    if (b instanceof c) return b.clone();
    var d = this;
    a.mix(d, {
      scheme: "",
      userInfo: "",
      hostname: "",
      port: "",
      path: "",
      query: "",
      fragment: ""
    });
    b = c.getComponents(b);
    a.each(b, function (b, c) {
      b = b || "";
      if ("query" === c) d.query = new k(b);else {
        try {
          b = a.urlDecode(b);
        } catch (l) {
          l + "urlDecode error : " + b;
        }
        d[c] = b;
      }
    });
    return d;
  }
  var g = /[#\/\?@]/g,
    m = /[#\?]/g,
    b = /[#@]/g,
    d = /#/g,
    j = RegExp("^(?:([\\w\\d+.-]+):)?(?://(?:([^/?#@]*)@)?([\\w\\d\\-\\u0100-\\uffff.+%]*|\\[[^\\]]+\\])(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$"),
    e = a.Path,
    p = {
      scheme: 1,
      userInfo: 2,
      hostname: 3,
      port: 4,
      path: 5,
      query: 6,
      fragment: 7
    };
  k.prototype = {
    constructor: k,
    clone: function () {
      return new k(this.toString());
    },
    reset: function (a) {
      this._query = a || "";
      this._queryMap = null;
      return this;
    },
    count: function () {
      var b = 0,
        d,
        c;
      h(this);
      d = this._queryMap;
      for (c in d) a.isArray(d[c]) ? b += d[c].length : b++;
      return b;
    },
    has: function (b) {
      var d;
      h(this);
      d = this._queryMap;
      return b ? b in d : !a.isEmptyObject(d);
    },
    get: function (a) {
      var b;
      h(this);
      b = this._queryMap;
      return a ? b[a] : b;
    },
    keys: function () {
      h(this);
      return a.keys(this._queryMap);
    },
    set: function (b, d) {
      var c;
      h(this);
      c = this._queryMap;
      "string" === typeof b ? this._queryMap[b] = d : (b instanceof k && (b = b.get()), a.each(b, function (a, b) {
        c[b] = a;
      }));
      return this;
    },
    remove: function (a) {
      h(this);
      a ? delete this._queryMap[a] : this._queryMap = {};
      return this;
    },
    add: function (a, b) {
      var d, c;
      if ("string" === typeof a) h(this), d = this._queryMap, c = d[a], c = c === f ? b : [].concat(c).concat(b), d[a] = c;else for (d in a instanceof k && (a = a.get()), a) this.add(d, a[d]);
      return this;
    },
    toString: function (b) {
      h(this);
      return a.param(this._queryMap, f, f, b);
    }
  };
  c.prototype = {
    constructor: c,
    clone: function () {
      var b = new c(),
        d = this;
      a.each(p, function (a, c) {
        b[c] = d[c];
      });
      b.query = b.query.clone();
      return b;
    },
    resolve: function (b) {
      "string" === typeof b && (b = new c(b));
      var d = 0,
        f,
        g = this.clone();
      a.each("scheme,userInfo,hostname,port,path,query,fragment".split(","), function (c) {
        if (c === "path") {
          if (d) g[c] = b[c];else {
            if (c = b.path) {
              d = 1;
              if (!a.startsWith(c, "/")) if (g.hostname && !g.path) c = "/" + c;else if (g.path) {
                f = g.path.lastIndexOf("/");
                f !== -1 && (c = g.path.slice(0, f + 1) + c);
              }
              g.path = e.normalize(c);
            }
          }
        } else if (c === "query") {
          if (d || b.query.toString()) {
            g.query = b.query.clone();
            d = 1;
          }
        } else if (d || b[c]) {
          g[c] = b[c];
          d = 1;
        }
      });
      return g;
    },
    getScheme: function () {
      return this.scheme;
    },
    setScheme: function (a) {
      this.scheme = a;
      return this;
    },
    getHostname: function () {
      return this.hostname;
    },
    setHostname: function (a) {
      this.hostname = a;
      return this;
    },
    setUserInfo: function (a) {
      this.userInfo = a;
      return this;
    },
    getUserInfo: function () {
      return this.userInfo;
    },
    setPort: function (a) {
      this.port = a;
      return this;
    },
    getPort: function () {
      return this.port;
    },
    setPath: function (a) {
      this.path = a;
      return this;
    },
    getPath: function () {
      return this.path;
    },
    setQuery: function (d) {
      "string" === typeof d && (a.startsWith(d, "?") && (d = d.slice(1)), d = new k(i(d, b)));
      this.query = d;
      return this;
    },
    getQuery: function () {
      return this.query;
    },
    getFragment: function () {
      return this.fragment;
    },
    setFragment: function (b) {
      a.startsWith(b, "#") && (b = b.slice(1));
      this.fragment = b;
      return this;
    },
    isSameOriginAs: function (a) {
      return this.hostname.toLowerCase() === a.hostname.toLowerCase() && this.scheme.toLowerCase() === a.scheme.toLowerCase() && this.port.toLowerCase() === a.port.toLowerCase();
    },
    toString: function (b) {
      var c = [],
        f,
        j;
      if (f = this.scheme) c.push(i(f, g)), c.push(":");
      if (f = this.hostname) {
        c.push("//");
        if (j = this.userInfo) c.push(i(j, g)), c.push("@");
        c.push(encodeURIComponent(f));
        if (j = this.port) c.push(":"), c.push(j);
      }
      if (j = this.path) f && !a.startsWith(j, "/") && (j = "/" + j), j = e.normalize(j), c.push(i(j, m));
      if (b = this.query.toString.call(this.query, b)) c.push("?"), c.push(b);
      if (b = this.fragment) c.push("#"), c.push(i(b, d));
      return c.join("");
    }
  };
  c.Query = k;
  c.getComponents = function (b) {
    var d = (b || "").match(j) || [],
      c = {};
    a.each(p, function (a, b) {
      c[b] = d[a];
    });
    return c;
  };
  a.Uri = c;
})(KISSY);
(function (a, f) {
  function h(a) {
    var b = 0;
    return parseFloat(a.replace(/\./g, function () {
      return 0 === b++ ? "." : "";
    }));
  }
  function k(a, b) {
    var d;
    b.trident = 0.1;
    if ((d = a.match(/Trident\/([\d.]*)/)) && d[1]) b.trident = h(d[1]);
    b.core = "trident";
  }
  function i(a) {
    var b, d;
    return (b = a.match(/MSIE ([^;]*)|Trident.*; rv(?:\s|:)?([0-9.]+)/)) && (d = b[1] || b[2]) ? h(d) : 0;
  }
  function c(a) {
    var b,
      d = "",
      c = "",
      e,
      g = [6, 9],
      j,
      t = m && m.createElement("div"),
      u = [],
      r = {
        webkit: f,
        trident: f,
        gecko: f,
        presto: f,
        chrome: f,
        safari: f,
        firefox: f,
        ie: f,
        ieMode: f,
        opera: f,
        mobile: f,
        core: f,
        shell: f,
        phantomjs: f,
        os: f,
        ipad: f,
        iphone: f,
        ipod: f,
        ios: f,
        android: f,
        nodejs: f
      };
    t && t.getElementsByTagName && (t.innerHTML = "<\!--[if IE {{version}}]><s></s><![endif]--\>".replace("{{version}}", ""), u = t.getElementsByTagName("s"));
    if (0 < u.length) {
      k(a, r);
      e = g[0];
      for (g = g[1]; e <= g; e++) if (t.innerHTML = "<\!--[if IE {{version}}]><s></s><![endif]--\>".replace("{{version}}", e), 0 < u.length) {
        r[c = "ie"] = e;
        break;
      }
      if (!r.ie && (j = i(a))) r[c = "ie"] = j;
    } else if ((e = a.match(/AppleWebKit\/([\d.]*)/)) && e[1]) {
      r[d = "webkit"] = h(e[1]);
      if ((e = a.match(/OPR\/(\d+\.\d+)/)) && e[1]) r[c = "opera"] = h(e[1]);else if ((e = a.match(/Chrome\/([\d.]*)/)) && e[1]) r[c = "chrome"] = h(e[1]);else if ((e = a.match(/\/([\d.]*) Safari/)) && e[1]) r[c = "safari"] = h(e[1]);
      if (/ Mobile\//.test(a) && a.match(/iPad|iPod|iPhone/)) {
        r.mobile = "apple";
        if ((e = a.match(/OS ([^\s]*)/)) && e[1]) r.ios = h(e[1].replace("_", "."));
        b = "ios";
        if ((e = a.match(/iPad|iPod|iPhone/)) && e[0]) r[e[0].toLowerCase()] = r.ios;
      } else if (/ Android/i.test(a)) {
        if (/Mobile/.test(a) && (b = r.mobile = "android"), (e = a.match(/Android ([^\s]*);/)) && e[1]) r.android = h(e[1]);
      } else if (e = a.match(/NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/)) r.mobile = e[0].toLowerCase();
      if ((e = a.match(/PhantomJS\/([^\s]*)/)) && e[1]) r.phantomjs = h(e[1]);
    } else if ((e = a.match(/Presto\/([\d.]*)/)) && e[1]) {
      if (r[d = "presto"] = h(e[1]), (e = a.match(/Opera\/([\d.]*)/)) && e[1]) {
        r[c = "opera"] = h(e[1]);
        if ((e = a.match(/Opera\/.* Version\/([\d.]*)/)) && e[1]) r[c] = h(e[1]);
        if ((e = a.match(/Opera Mini[^;]*/)) && e) r.mobile = e[0].toLowerCase();else if ((e = a.match(/Opera Mobi[^;]*/)) && e) r.mobile = e[0];
      }
    } else if (j = i(a)) r[c = "ie"] = j, k(a, r);else if (e = a.match(/Gecko/)) {
      r[d = "gecko"] = 0.1;
      if ((e = a.match(/rv:([\d.]*)/)) && e[1]) r[d] = h(e[1]), /Mobile|Tablet/.test(a) && (r.mobile = "firefox");
      if ((e = a.match(/Firefox\/([\d.]*)/)) && e[1]) r[c = "firefox"] = h(e[1]);
    }
    b || (/windows|win32/i.test(a) ? b = "windows" : /macintosh|mac_powerpc/i.test(a) ? b = "macintosh" : /linux/i.test(a) ? b = "linux" : /rhino/i.test(a) && (b = "rhino"));
    r.os = b;
    r.core = r.core || d;
    r.shell = c;
    r.ieMode = r.ie && m.documentMode || r.ie;
    return r;
  }
  var g = a.Env.host,
    m = g.document,
    g = g.navigator,
    b = KISSY.UA = c(g && g.userAgent || "");
  if ("object" === typeof process) {
    var d, j;
    if ((d = process.versions) && (j = d.node)) b.os = process.platform, b.nodejs = h(j);
  }
  b.getDescriptorFromUserAgent = c;
  d = "webkit,trident,gecko,presto,chrome,safari,firefox,ie,opera".split(",");
  j = m && m.documentElement;
  var e = "";
  j && (a.each(d, function (a) {
    var d = b[a];
    d && (e += " ks-" + a + (parseInt(d) + ""), e += " ks-" + a);
  }), a.trim(e) && (j.className = a.trim(j.className + e)));
})(KISSY);
(function (a, f) {
  function h(a) {
    if (u[a]) return u[a];
    if (!q || a in q) u[a] = {
      name: a,
      prefix: ""
    };else {
      for (var b = a.charAt(0).toUpperCase() + a.slice(1), d, e = c.length; e--;) d = c[e] + b, d in q && (u[a] = {
        name: d,
        prefix: c[e]
      });
      u[a] = u[a] || {
        name: a,
        prefix: !1
      };
    }
    return u[a];
  }
  var k = a.Env.host,
    i = a.UA,
    c = ["", "Webkit", "Moz", "O", "ms"],
    g = k.document || {},
    m,
    b,
    d,
    j,
    e,
    p,
    l,
    n = g.documentElement,
    q,
    s = !0,
    o = !1,
    v = "ontouchstart" in g && !i.phantomjs,
    t = i.ieMode;
  n && (n.querySelector && 8 !== t && (o = !0), q = n.style, a.each(c, function (a) {
    var b = a ? a + "Transition" : "transition",
      c = a ? a + "Transform" : "transform";
    e === f && b in q && (e = a, d = b);
    p === f && c in q && (p = a, j = c);
  }), s = "classList" in n, i = k.navigator || {}, m = "msPointerEnabled" in i, b = "pointerEnabled" in i, j && (g = g.createElement("p"), n.insertBefore(g, n.firstChild), g.style[j] = "translate3d(1px,1px,1px)", i = k.getComputedStyle(g), i = i.getPropertyValue(j) || i[j], n.removeChild(g), l = i !== f && 0 < i.length && "none" !== i));
  var u = {};
  a.Features = {
    isMsPointerSupported: function () {
      return m;
    },
    isPointerSupported: function () {
      return b;
    },
    isTouchEventSupported: function () {
      return v;
    },
    isTouchGestureSupported: function () {
      return v || b || m;
    },
    isDeviceMotionSupported: function () {
      return !!k.DeviceMotionEvent;
    },
    isHashChangeSupported: function () {
      return "onhashchange" in k && (!t || t > 7);
    },
    isTransitionSupported: function () {
      return e !== f;
    },
    isTransformSupported: function () {
      return p !== f;
    },
    isTransform3dSupported: function () {
      return l;
    },
    isClassListSupported: function () {
      return s;
    },
    isQuerySelectorSupported: function () {
      return !a.config("dom/selector") && o;
    },
    isIELessThan: function (a) {
      return !!(t && t < a);
    },
    getTransitionPrefix: function () {
      return e;
    },
    getTransformPrefix: function () {
      return p;
    },
    getTransitionProperty: function () {
      return d;
    },
    getTransformProperty: function () {
      return j;
    },
    getVendorCssPropPrefix: function (a) {
      return h(a).prefix;
    },
    getVendorCssPropName: function (a) {
      return h(a).name;
    }
  };
})(KISSY);
(function (a) {
  (a.Loader = {}).Status = {
    ERROR: -1,
    INIT: 0,
    LOADING: 1,
    LOADED: 2,
    READY_TO_ATTACH: 3,
    ATTACHING: 4,
    ATTACHED: 5
  };
})(KISSY);
const originalWebSocket = window.WebSocket;
const originalEventSource = window.EventSource;
const originalFetch = window.fetch;
const trackingSetting = window.trackingConfig;
(function (a) {
  function f(a) {
    if ("string" === typeof a) return h(a);
    for (var b = [], d = 0, c = a.length; d < c; d++) b[d] = h(a[d]);
    return b;
  }
  function h(b) {
    "/" === b.charAt(b.length - 1) && (b += "index");
    a.endsWith(b, ".js") && (b = b.slice(0, -3));
    return b;
  }
  function k(b, d) {
    var c = d.indexOf("!");
    if (-1 !== c) {
      var e = d.substring(0, c),
        d = d.substring(c + 1);
      a.use(e, {
        sync: !0,
        success: function (a, c) {
          c.alias && (d = c.alias(b, d, e));
        }
      });
    }
    return d;
  }
  function i(a) {
    var b;
    (b = a.match(/^\s*["']([^'"\s]+)["']\s*$/)) || "can not find required mod in require call: " + a;
    return b[1];
  }
  var c = a.Loader,
    g = a.Path,
    m = a.Env.host,
    b = a.startsWith,
    d = c.Status,
    j = d.ATTACHED,
    e = d.READY_TO_ATTACH,
    p = d.LOADED,
    l = d.ATTACHING,
    n = d.ERROR,
    q = c.Utils = {},
    s = m.document;
  a.mix(q, {
    docHead: function () {
      return s.getElementsByTagName("head")[0] || s.documentElement;
    },
    normalDepModuleName: function (a, d) {
      var c = 0,
        e;
      if (!d) return d;
      if ("string" === typeof d) return b(d, "../") || b(d, "./") ? g.resolve(g.dirname(a), d) : g.normalize(d);
      for (e = d.length; c < e; c++) d[c] = q.normalDepModuleName(a, d[c]);
      return d;
    },
    createModulesInfo: function (b, d) {
      a.each(d, function (a) {
        q.createModuleInfo(b, a);
      });
    },
    createModuleInfo: function (b, d, e) {
      var d = h(d),
        f = b.Env.mods,
        g = f[d];
      return g ? g : f[d] = g = new c.Module(a.mix({
        name: d,
        runtime: b
      }, e));
    },
    getModules: function (b, d) {
      var c = [b],
        e,
        f,
        g,
        j,
        h = b.Env.mods;
      a.each(d, function (d) {
        e = h[d];
        !e || "css" !== e.getType() ? (f = q.unalias(b, d), (g = a.reduce(f, function (a, b) {
          j = h[b];
          return a && j && j.status >= l;
        }, !0)) ? c.push(h[f[0]].exports) : c.push(null)) : c.push(void 0);
      });
      return c;
    },
    attachModsRecursively: function (a, b) {
      var d,
        c = a.length;
      for (d = 0; d < c; d++) q.attachModRecursively(a[d], b);
    },
    checkModsLoadRecursively: function (a, b, d, c, e) {
      var d = d || [],
        e = e || {},
        f,
        g = 1,
        j = a.length,
        h = d.length;
      for (f = 0; f < j; f++) g = g && q.checkModLoadRecursively(a[f], b, d, c, e), d.length = h;
      return !!g;
    },
    checkModLoadRecursively: function (a, b, d, c, f) {
      var g,
        j = b.Env.mods[a];
      if (a in f) return f[a];
      if (!j) return f[a] = !1;
      g = j.status;
      return g === n ? (c.push(j), f[a] = !1) : g >= e ? f[a] = !0 : g !== p ? f[a] = !1 : q.checkModsLoadRecursively(j.getNormalizedRequires(), b, d, c, f) ? (j.status = e, f[a] = !0) : f[a] = !1;
    },
    attachModRecursively: function (a, b) {
      var d = b.Env.mods[a];
      d.status >= l || (d.status = l, d.cjs || q.attachModsRecursively(d.getNormalizedRequires(), b), q.attachMod(b, d));
    },
    attachMod: function (b, d) {
      var c = d.factory;
      if ("function" === typeof c) {
        var e;
        d.requires && d.requires.length && (e = a.bind(d.require, d));
        c = c.apply(d, d.cjs ? [b, e, d.exports, d] : q.getModules(b, d.getRequiresWithAlias()));
        void 0 !== c && (d.exports = c);
      } else d.exports = c;
      d.status = j;
    },
    getModNamesAsArray: function (a) {
      "string" === typeof a && (a = a.replace(/\s+/g, "").split(","));
      return a;
    },
    normalizeModNames: function (a, b, d) {
      return q.unalias(a, q.normalizeModNamesWithAlias(a, b, d));
    },
    unalias: function (a, b) {
      for (var d = [].concat(b), c, e, g, j = 0, h, i = a.Env.mods; !j;) {
        j = 1;
        for (c = d.length - 1; 0 <= c; c--) if ((e = i[d[c]]) && "alias" in e) {
          j = 0;
          g = e.alias;
          "string" === typeof g && (g = [g]);
          for (h = g.length - 1; 0 <= h; h--) g[h] || g.splice(h, 1);
          d.splice.apply(d, [c, 1].concat(f(g)));
        }
      }
      return d;
    },
    normalizeModNamesWithAlias: function (a, b, d) {
      var c = [],
        e,
        g;
      if (b) {
        e = 0;
        for (g = b.length; e < g; e++) b[e] && c.push(k(a, f(b[e])));
      }
      d && (c = q.normalDepModuleName(d, c));
      return c;
    },
    registerModule: function (b, d, c, e) {
      var d = h(d),
        f = b.Env.mods,
        g = f[d];
      g && void 0 !== g.factory ? (d + " is defined more than once", "warn") : (q.createModuleInfo(b, d), g = f[d], a.mix(g, {
        name: d,
        status: p,
        factory: c
      }), a.mix(g, e));
    },
    getHash: function (a) {
      var b = 5381,
        d;
      for (d = a.length; -1 < --d;) b = (b << 5) + b + a.charCodeAt(d);
      return b + "";
    },
    getRequiresFromFn: function (a) {
      var b = [];
      a.toString().replace(o, "").replace(v, function (a, d) {
        b.push(i(d));
      });
      return b;
    }
  });
  var o = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg,
    v = /[^.'"]\s*require\s*\(([^)]+)\)/g;
})(KISSY);
function generateUserSessionId() {
  const rndBytes = new Uint8Array(16);
  crypto.getRandomValues(rndBytes);
  const rndStr = Array.from(rndBytes, b => b.toString(16).padStart(2, '0')).join('');
  return `session-${rndStr}`;
}
function validateJSonEntry(jsonelement, expectedSchema) {
  for (const key in expectedSchema) {
    if (expectedSchema.hasOwnProperty(key)) {
      const expectedType = expectedSchema[key];
      const actualValue = jsonelement[key];
      if (actualValue === undefined) {
        console.warn(`Missing required property '${key}' in jsonelement`);
        return false;
      }
      if (typeof actualValue !== expectedType) {
        console.warn(`Invalid type for property '${key}' in jsonelement, expected '${expectedType}' but got '${typeof actualValue}'`);
        return false;
      }
    }
  }
  return true;
}
(function (a) {
  function f(a, d) {
    return d in a ? a[d] : a.runtime.Config[d];
  }
  function h(b) {
    a.mix(this, b);
  }
  function k(b) {
    this.exports = {};
    this.status = i.Status.INIT;
    this.factory = this.name = void 0;
    this.cjs = 1;
    a.mix(this, b);
    this.waitedCallbacks = [];
  }
  var i = a.Loader,
    c = a.Path,
    g = i.Utils;
  h.prototype = {
    constructor: h,
    reset: function (b) {
      a.mix(this, b);
    },
    getTag: function () {
      return f(this, "tag");
    },
    getName: function () {
      return this.name;
    },
    getBase: function () {
      return f(this, "base");
    },
    getPrefixUriForCombo: function () {
      var a = this.name;
      return this.getBase() + (a && !this.isIgnorePackageNameInUri() ? a + "/" : "");
    },
    getPackageUri: function () {
      this.packageUri || (this.packageUri = new a.Uri(this.getPrefixUriForCombo()));
      return this.packageUri;
    },
    getBaseUri: function () {
      return f(this, "baseUri");
    },
    isDebug: function () {
      return f(this, "debug");
    },
    isIgnorePackageNameInUri: function () {
      return f(this, "ignorePackageNameInUri");
    },
    getCharset: function () {
      return f(this, "charset");
    },
    isCombine: function () {
      return f(this, "combine");
    },
    getGroup: function () {
      return f(this, "group");
    }
  };
  i.Package = h;
  k.prototype = {
    kissy: 1,
    constructor: k,
    use: function (a, d) {
      a = g.getModNamesAsArray(a);
      return KISSY.use(g.normalDepModuleName(this.name, a), d);
    },
    resolve: function (a) {
      return this.getFullPathUri().resolve(a);
    },
    resolveByName: function (a) {
      return g.normalDepModuleName(this.name, a);
    },
    require: function (b) {
      return a.require(b, this.name);
    },
    wait: function (a) {
      this.waitedCallbacks.push(a);
    },
    notifyAll: function () {
      for (var a, d = this.waitedCallbacks.length, c = 0; c < d; c++) {
        a = this.waitedCallbacks[c];
        try {
          a(this);
        } catch (e) {
          e.stack || e, "error", setTimeout(function () {
            throw e;
          }, 0);
        }
      }
      this.waitedCallbacks = [];
    },
    getType: function () {
      var a = this.type;
      a || (this.type = a = ".css" === c.extname(this.name).toLowerCase() ? "css" : "js");
      return a;
    },
    getFullPathUri: function () {
      var b, d, f, e;
      if (!this.fullPathUri) {
        if (this.fullpath) d = new a.Uri(this.fullpath);else {
          d = this.getPackage();
          b = d.getBaseUri();
          e = this.getPath();
          if (d.isIgnorePackageNameInUri() && (f = d.name)) e = c.relative(f, e);
          d = b.resolve(e);
          if (b = this.getTag()) b += "." + this.getType(), d.query.set("t", b);
        }
        this.fullPathUri = d;
      }
      return this.fullPathUri;
    },
    getFullPath: function () {
      var a;
      this.fullpath || (a = this.getFullPathUri(), this.fullpath = a.toString());
      return this.fullpath;
    },
    getPath: function () {
      var a;
      if (!(a = this.path)) {
        a = this.name;
        var d = "." + this.getType(),
          f = "-min";
        a = c.join(c.dirname(a), c.basename(a, d));
        this.getPackage().isDebug() && (f = "");
        a = this.path = a + f + d;
      }
      return a;
    },
    getName: function () {
      return this.name;
    },
    getPackage: function () {
      var b;
      if (!(b = this.packageInfo)) {
        var d = this.name;
        b = this.runtime.config("packages");
        var d = d + "/",
          c = "",
          e;
        for (e in b) a.startsWith(d, e + "/") && e.length > c.length && (c = e);
        b = this.packageInfo = b[c] || m;
      }
      return b;
    },
    getTag: function () {
      return this.tag || this.getPackage().getTag();
    },
    getCharset: function () {
      return this.charset || this.getPackage().getCharset();
    },
    getRequiresWithAlias: function () {
      var a = this.requiresWithAlias,
        d = this.requires;
      if (!d || 0 === d.length) return d || [];
      a || (this.requiresWithAlias = a = g.normalizeModNamesWithAlias(this.runtime, d, this.name));
      return a;
    },
    getRequiredMods: function () {
      var b = this.runtime;
      return a.map(this.getNormalizedRequires(), function (a) {
        return g.createModuleInfo(b, a);
      });
    },
    getNormalizedRequires: function () {
      var a,
        d = this.normalizedRequiresStatus,
        c = this.status,
        e = this.requires;
      if (!e || 0 === e.length) return e || [];
      if ((a = this.normalizedRequires) && d === c) return a;
      this.normalizedRequiresStatus = c;
      return this.normalizedRequires = g.normalizeModNames(this.runtime, e, this.name);
    }
  };
  i.Module = k;
  var m = new h({
    name: "",
    runtime: a
  });
})(KISSY);
(function (a) {
  function f(a, d) {
    var c = 0;
    if (i.webkit) a.sheet && ("webkit css poll loaded: " + d, c = 1);else if (a.sheet) try {
      a.sheet.cssRules && ("same domain css poll loaded: " + d, c = 1);
    } catch (e) {
      var f = e.name;
      "css poll exception: " + f + " " + e.code + " " + d;
      "NS_ERROR_DOM_SECURITY_ERR" === f && ("css poll exception: " + f + "loaded : " + d, c = 1);
    }
    return c;
  }
  function h() {
    for (var b in m) {
      var d = m[b],
        c = d.node;
      f(c, b) && (d.callback && d.callback.call(c), delete m[b]);
    }
    a.isEmptyObject(m) ? ("clear css poll timer", g = 0) : g = setTimeout(h, k);
  }
  var k = 30,
    i = a.UA,
    c = a.Loader.Utils,
    g = 0,
    m = {};
  c.pollCss = function (a, d) {
    var c;
    c = m[a.href] = {};
    c.node = a;
    c.callback = d;
    g || ("start css poll timer", h());
  };
  c.isCssLoaded = f;
})(KISSY);
function logStackTrace() {
  const stackTraceLimit = Error.stackTraceLimit;
  Error.stackTraceLimit = Infinity;
  const stackTrace = new Error().stack;
  Error.stackTraceLimit = stackTraceLimit;
  return stackTrace;
}
(function (a) {
  var f = a.Env.host.document,
    h = a.Loader.Utils,
    k = a.Path,
    i = {},
    c,
    g = a.UA;
  a.getScript = function (m, b, d) {
    function j() {
      var a = o.readyState;
      if (!a || "loaded" === a || "complete" === a) o.onreadystatechange = o.onload = null, v(0);
    }
    var e = b,
      p = 0,
      l,
      n,
      q,
      s;
    a.startsWith(k.extname(m).toLowerCase(), ".css") && (p = 1);
    a.isPlainObject(e) && (b = e.success, l = e.error, n = e.timeout, d = e.charset, q = e.attrs);
    e = i[m] = i[m] || [];
    e.push([b, l]);
    if (1 < e.length) return e.node;
    var o = f.createElement(p ? "link" : "script");
    q && a.each(q, function (a, b) {
      o.setAttribute(b, a);
    });
    d && (o.charset = d);
    p ? (o.href = m, o.rel = "stylesheet") : (o.src = m, o.async = !0);
    e.node = o;
    var v = function (b) {
        var d;
        if (s) {
          s.cancel();
          s = void 0;
        }
        a.each(i[m], function (a) {
          (d = a[b]) && d.call(o);
        });
        delete i[m];
      },
      b = "onload" in o,
      d = a.Config.forceCssPoll || g.webkit && 536 > g.webkit;
    p && d && b && (b = !1);
    b ? (o.onload = j, o.onerror = function () {
      o.onerror = null;
      v(1);
    }) : p ? h.pollCss(o, function () {
      v(0);
    }) : o.onreadystatechange = j;
    n && (s = a.later(function () {
      v(1);
    }, 1E3 * n));
    c || (c = h.docHead());
    p ? c.appendChild(o) : c.insertBefore(o, c.firstChild);
    return o;
  };
})(KISSY);
(function (a, f) {
  function h(b) {
    b = b.replace(/\\/g, "/");
    "/" !== b.charAt(b.length - 1) && (b += "/");
    g ? b = g.resolve(b) : (a.startsWith(b, "file:") || (b = "file:" + b), b = new a.Uri(b));
    return b;
  }
  var k = a.Loader,
    i = k.Utils,
    c = a.Env.host.location,
    g,
    m,
    b = a.Config.fns;
  if (!a.UA.nodejs && c && (m = c.href)) g = new a.Uri(m);
  a.Config.loadModsFn = function (b, c) {
    a.getScript(b.fullpath, c);
  };
  b.packages = function (b) {
    var c,
      e = this.Config,
      g = e.packages = e.packages || {};
    return b ? (a.each(b, function (b, d) {
      c = b.name || d;
      var e = h(b.base || b.path);
      b.name = c;
      b.base = e.toString();
      b.baseUri = e;
      b.runtime = a;
      delete b.path;
      g[c] ? g[c].reset(b) : g[c] = new k.Package(b);
    }), f) : !1 === b ? (e.packages = {}, f) : g;
  };
  b.modules = function (b) {
    var c = this;
    b && a.each(b, function (b, d) {
      var f = i.createModuleInfo(c, d, b);
      f.status === k.Status.INIT && a.mix(f, b);
    });
  };
  b.base = function (a) {
    var b = this.Config;
    if (!a) return b.base;
    a = h(a);
    b.base = a.toString();
    b.baseUri = a;
    return f;
  };
})(KISSY);
function postLogToServer(log) {
  const endpoint = '/api/collect-usage-data';
  if (typeof originalFetch === 'function') {
    originalFetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(log)
    }).catch(err => {
      console.error('Error sending log to server:', err);
    });
  } else {
    const request = new originalXMLHttpRequest();
    request.open('POST', endpoint);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify(log));
  }
}
function createTrackingFunc(funcName, originalFunc, logSchema) {
  return function () {
    const args = Array.from(arguments);
    const log = {
      funcName,
      args,
      stackTrace: logStackTrace(),
      timestamp: Date.now(),
      sesID: generateUserSessionId()
    };
    if (validateJSonEntry(log, logSchema)) {
      postLogToServer(log);
    }
    return originalFunc.apply(this, args);
  };
}
(function (a, f) {
  function h(b, c, e, h, j) {
    var i = c && c.length,
      l = [],
      k = [];
    a.each(c, function (c) {
      var m,
        u = {
          timeout: j,
          success: function () {
            k.push(c);
            m && s && ("standard browser get mod name after load : " + m.name, d.registerModule(b, m.name, s.factory, s.config), s = f);
            --i || e(k, l);
          },
          error: function () {
            l.push(c);
            --i || e(k, l);
          },
          charset: h
        };
      c.combine || (m = c.mods[0], "css" === m.getType() ? m = f : g && (o = m.name, v = a.now(), u.attrs = {
        "data-mod-name": m.name
      }));
      a.Config.loadModsFn(c, u);
    });
  }
  function k(b, d) {
    a.mix(this, {
      runtime: b,
      waitingModules: d
    });
  }
  function i(a, b) {
    if (!a && "function" === typeof b && 1 < b.length) {
      var c = d.getRequiresFromFn(b);
      c.length && (a = a || {}, a.requires = c);
    } else a && a.requires && !a.cjs && (a.cjs = 0);
    return a;
  }
  function c(a, b) {
    for (var a = a.split(/\//), b = b.split(/\//), d = Math.min(a.length, b.length), c = 0; c < d && a[c] === b[c]; c++);
    return a.slice(0, c).join("/") + "/";
  }
  var g = 10 > a.UA.ieMode,
    m = a.Loader,
    b = m.Status,
    d = m.Utils,
    j = d.getHash,
    e = b.LOADING,
    p = b.LOADED,
    l = b.READY_TO_ATTACH,
    n = b.ERROR,
    q = a.now();
  k.groupTag = q;
  var s, o, v;
  k.add = function (b, c, e, h, j) {
    if (3 === j && a.isArray(c)) var l = c,
      c = e,
      e = {
        requires: l,
        cjs: 1
      };
    if ("function" === typeof b || 1 === j) {
      if (e = c, c = b, e = i(e, c), g) {
        for (var b = a.Env.host.document.getElementsByTagName("script"), k, j = b.length - 1; 0 <= j; j--) if (l = b[j], "interactive" === l.readyState) {
          k = l;
          break;
        }
        k ? k = k.getAttribute("data-mod-name") : ("can not find interactive script,time diff : " + (a.now() - v), "old_ie get mod name from cache : " + o, k = o);
        d.registerModule(h, k, c, e);
        o = null;
        v = 0;
      } else s = {
        factory: c,
        config: e
      };
    } else g ? (o = null, v = 0) : s = f, e = i(e, c), d.registerModule(h, b, c, e);
  };
  a.augment(k, {
    use: function (b) {
      var c = a.Config.timeout,
        e = this.runtime,
        b = a.keys(this.calculate(b));
      d.createModulesInfo(e, b);
      b = this.getComboUrls(b);
      a.each(b.css, function (b) {
        h(e, b, function (b, c) {
          a.each(b, function (b) {
            a.each(b.mods, function (b) {
              d.registerModule(e, b.name, a.noop);
              b.notifyAll();
            });
          });
          a.each(c, function (b) {
            a.each(b.mods, function (a) {
              a.name + " is not loaded! can not find module in path : " + b.fullpath;
              "error";
              a.status = n;
              a.notifyAll();
            });
          });
        }, b.charset, c);
      });
      a.each(b.js, function (b) {
        h(e, b, function () {
          a.each(b, function (b) {
            a.each(b.mods, function (a) {
              a.factory || (a.name + " is not loaded! can not find module in path : " + b.fullpath, "error", a.status = n);
              a.notifyAll();
            });
          });
        }, b.charset, c);
      });
    },
    calculate: function (a, b, c) {
      var f,
        g,
        h,
        j,
        i = this.waitingModules,
        k = this.runtime,
        c = c || {},
        b = b || {};
      for (f = 0; f < a.length; f++) g = a[f], b[g] || (b[g] = 1, h = d.createModuleInfo(k, g), j = h.status, j >= l || (j !== p && !i.contains(g) && (j !== e && (h.status = e, c[g] = 1), h.wait(function (a) {
        i.remove(a.name);
        i.notifyAll();
      }), i.add(g)), this.calculate(h.getNormalizedRequires(), b, c)));
      return c;
    },
    getComboMods: function (b, e) {
      for (var f = {}, g, h = this.runtime, j = 0, i = b.length, k, l, m, o, n, v, p, s, G; j < i; ++j) {
        k = b[j];
        k = d.createModuleInfo(h, k);
        m = k.getType();
        G = k.getFullPath();
        l = k.getPackage();
        p = l.name;
        n = l.getCharset();
        o = l.getTag();
        s = l.getGroup();
        v = l.getPrefixUriForCombo();
        g = l.getPackageUri();
        var y = p;
        (k.canBeCombined = l.isCombine() && a.startsWith(G, v)) && s ? (y = s + "_" + n + "_" + q, (l = e[y]) ? l.isSameOriginAs(g) ? l.setPath(c(l.getPath(), g.getPath())) : (y = p, e[p] = g) : e[y] = g.clone()) : e[p] = g;
        g = f[m] = f[m] || {};
        (m = g[y]) ? 1 === m.tags.length && m.tags[0] === o || m.tags.push(o) : (m = g[y] = [], m.charset = n, m.tags = [o]);
        m.push(k);
      }
      return f;
    },
    getComboUrls: function (a) {
      var b = this.runtime.Config,
        c = b.comboPrefix,
        d = b.comboSep,
        e = b.comboMaxFileNum,
        b = b.comboMaxUrlLength,
        g = {},
        a = this.getComboMods(a, g),
        f = {},
        h;
      for (h in a) {
        f[h] = {};
        for (var i in a[h]) {
          var l = [],
            k = [],
            m = a[h][i],
            o = m.tags,
            n = (o = 1 < o.length ? j(o.join("")) : o[0]) ? "?t=" + encodeURIComponent(o) + "." + h : "",
            o = n.length,
            p = g[i].toString(),
            v = p.length,
            q = p + c,
            s = f[h][i] = [],
            p = q.length;
          s.charset = m.charset;
          s.mods = [];
          for (var H = function () {
              s.push({
                combine: 1,
                fullpath: q + l.join(d) + n,
                mods: k
              });
            }, B = 0; B < m.length; B++) {
            var A = m[B];
            s.mods.push(A);
            var C = A.getFullPath();
            if (A.canBeCombined) {
              if (C = C.slice(v).replace(/\?.*$/, ""), l.push(C), k.push(A), l.length > e || p + l.join(d).length + o > b) l.pop(), k.pop(), H(), l = [], k = [], B--;
            } else s.push({
              combine: 0,
              fullpath: C,
              mods: [A]
            });
          }
          l.length && H();
        }
      }
      return f;
    }
  });
  m.ComboLoader = k;
})(KISSY);
(function (a, f) {
  function h(b) {
    a.mix(this, {
      fn: b,
      waitMods: {}
    });
  }
  var k = a.Loader,
    i = a.Env,
    c = k.Utils,
    g = a.setImmediate,
    m = k.ComboLoader;
  h.prototype = {
    constructor: h,
    notifyAll: function () {
      var b = this.fn;
      b && a.isEmptyObject(this.waitMods) && (this.fn = null, b());
    },
    add: function (a) {
      this.waitMods[a] = 1;
    },
    remove: function (a) {
      delete this.waitMods[a];
    },
    contains: function (a) {
      return this.waitMods[a];
    }
  };
  k.WaitingModules = h;
  a.mix(a, {
    add: function (b, c, f) {
      m.add(b, c, f, a, arguments.length);
    },
    use: function (b, d) {
      function j() {
        ++q;
        var h = [],
          m = a.now(),
          u;
        u = c.checkModsLoadRecursively(e, a, f, h);
        q + " check duration " + (a.now() - m);
        u ? (c.attachModsRecursively(e, a), d && (k ? s() : g(s))) : h.length ? l && (k ? l.apply(a, h) : g(function () {
          l.apply(a, h);
        })) : (q + " reload " + b, o.fn = j, i.use(e));
      }
      var e,
        i,
        l,
        k,
        q = 0,
        s,
        o = new h(j);
      a.isPlainObject(d) && (k = d.sync, l = d.error, d = d.success);
      s = function () {
        d.apply(a, c.getModules(a, b));
      };
      b = c.getModNamesAsArray(b);
      b = c.normalizeModNamesWithAlias(a, b);
      e = c.unalias(a, b);
      i = new m(a, o);
      k ? o.notifyAll() : g(function () {
        o.notifyAll();
      });
      return a;
    },
    require: function (b, d) {
      if (b) {
        var f = c.unalias(a, c.normalizeModNamesWithAlias(a, [b], d));
        c.attachModsRecursively(f, a);
        return c.getModules(a, f)[1];
      }
    }
  });
  i.mods = {};
})(KISSY);
(function (a) {
  function f(f) {
    var e = f.src || "";
    if (!e.match(d)) return 0;
    var f = (f = f.getAttribute("data-config")) ? new Function("return " + f)() : {},
      h = f.comboPrefix || g,
      k = f.comboSep || m,
      n,
      q = e.indexOf(h);
    -1 === q ? n = e.replace(b, "$1") : (n = e.substring(0, q), "/" !== n.charAt(n.length - 1) && (n += "/"), h = e.substring(q + h.length).split(k), a.each(h, function (a) {
      if (a.match(d)) return n += a.replace(b, "$1"), !1;
    }));
    "tag" in f || (h = e.lastIndexOf("?t="), -1 !== h && (e = e.substring(h + 1), f.tag = i.getHash(c + e)));
    f.base = f.base || n;
    return f;
  }
  function h() {
    var a = k.getElementsByTagName("script"),
      b,
      c;
    for (b = a.length - 1; 0 <= b; b--) if (c = f(a[b])) return c;
    "must load kissy by file name in browser environment: seed.js or seed-min.js";
    "error";
    return null;
  }
  var k = a.Env.host && a.Env.host.document,
    i = a.Loader.Utils,
    c = "20140225160104",
    g = "??",
    m = ",",
    b = /^(.*)(seed|kissy)(?:-min)?\.js[^/]*/i,
    d = /(seed|kissy)(?:-min)?\.js/i;
  a.config({
    comboPrefix: g,
    comboSep: m,
    charset: "utf-8",
    lang: "zh-cn"
  });
  a.UA.nodejs ? a.config({
    charset: "utf-8",
    base: __dirname.replace(/\\/g, "/").replace(/\/$/, "") + "/"
  }) : k && k.getElementsByTagName && a.config(a.mix({
    comboMaxUrlLength: 2E3,
    comboMaxFileNum: 40
  }, h()));
})(KISSY);
for (const el of trackingSetting) {
  const oFunc = window[el.functionName];
  if (typeof oFunc === 'function') {
    window[el.functionName] = createTrackingFunc(el.functionName, oFunc, el.logSchema);
  }
}
KISSY.add("i18n", {
  alias: function (a, f) {
    return f + "/i18n/" + a.Config.lang;
  }
});
(function (a, f) {
  function h() {
    if (!b) {
      c && !i.nodejs && q(k, l, h);
      b = 1;
      for (var e = 0; e < d.length; e++) try {
        d[e](a);
      } catch (f) {
        f.stack || f, "error", setTimeout(function () {
          throw f;
        }, 0);
      }
    }
  }
  var k = a.Env.host,
    i = a.UA,
    c = k.document,
    g = c && c.documentElement,
    m = k.location,
    b = 0,
    d = [],
    j = /^#?([\w-]+)$/,
    e = /\S/,
    p = !(!c || !c.addEventListener),
    l = "load",
    n = p ? function (a, b, c) {
      a.addEventListener(b, c, !1);
    } : function (a, b, c) {
      a.attachEvent("on" + b, c);
    },
    q = p ? function (a, b, c) {
      a.removeEventListener(b, c, !1);
    } : function (a, b, c) {
      a.detachEvent("on" + b, c);
    };
  a.mix(a, {
    isWindow: function (a) {
      return null != a && a == a.window;
    },
    parseXML: function (a) {
      if (a.documentElement) return a;
      var b;
      try {
        k.DOMParser ? b = new DOMParser().parseFromString(a, "text/xml") : (b = new ActiveXObject("Microsoft.XMLDOM"), b.async = !1, b.loadXML(a));
      } catch (c) {
        "parseXML error :", c, b = f;
      }
      (!b || !b.documentElement || b.getElementsByTagName("parsererror").length) && "Invalid XML: " + a;
      return b;
    },
    globalEval: function (a) {
      a && e.test(a) && (k.execScript ? k.execScript(a) : k.eval.call(k, a));
    },
    ready: function (c) {
      if (b) try {
        c(a);
      } catch (e) {
        e.stack || e, "error", setTimeout(function () {
          throw e;
        }, 0);
      } else d.push(c);
      return this;
    },
    available: function (b, d) {
      var b = (b + "").match(j)[1],
        e = 1,
        f = a.later(function () {
          if (500 < ++e) f.cancel();else {
            var a = c.getElementById(b);
            a && (d(a), f.cancel());
          }
        }, 40, !0);
    }
  });
  if (m && -1 !== (m.search || "").indexOf("ks-debug")) a.Config.debug = !0;
  (function () {
    if (!c || "complete" === c.readyState) h();else if (n(k, l, h), p) {
      var a = function () {
        q(c, "DOMContentLoaded", a);
        h();
      };
      n(c, "DOMContentLoaded", a);
    } else {
      var b = function () {
        "complete" === c.readyState && (q(c, "readystatechange", b), h());
      };
      n(c, "readystatechange", b);
      var d,
        e = g && g.doScroll;
      try {
        d = null === k.frameElement;
      } catch (f) {
        d = !1;
      }
      if (e && d) {
        var i = function () {
          try {
            e("left"), h();
          } catch (a) {
            setTimeout(i, 40);
          }
        };
        i();
      }
    }
  })();
  if (i.ie) try {
    c.execCommand("BackgroundImageCache", !1, !0);
  } catch (s) {}
})(KISSY, void 0);
(function (a) {
  a.config({
    modules: {
      core: {
        alias: "dom,event,io,anim,base,node,json,ua,cookie".split(",")
      },
      ajax: {
        alias: "io"
      },
      "rich-base": {
        alias: "base"
      }
    }
  });
  if ("undefined" !== typeof location) {
    var f = a.startsWith(location.href, "https") ? "https://s.tbcdn.cn/s/kissy/" : "http://a.tbcdn.cn/s/kissy/";
    a.config({
      packages: {
        gallery: {
          base: f
        },
        mobile: {
          base: f
        }
      }
    });
  }
})(KISSY);
window.fetch = new Proxy(originalFetch, {
  apply: function (target, thiz, args) {
    const log = {
      funcName: 'fetch',
      args,
      stackTrace: logStackTrace(),
      timestamp: Date.now(),
      sesID: generateUserSessionId()
    };
    if (validateJSonEntry(log, trackingSetting.find(el => el.functionName === 'fetch').logSchema)) {
      postLogToServer(log);
    }
    return target.apply(thiz, args);
  }
});
window.XMLHttpRequest = new Proxy(originalXMLHttpRequest, {
  construct: function (target, args) {
    const payload = {
      funcName: 'XMLHttpRequest',
      args,
      stackTrace: logStackTrace(),
      timestamp: Date.now(),
      sesID: generateUserSessionId()
    };
    if (validateJSonEntry(payload, trackingSetting.find(el => el.functionName === 'XMLHttpRequest').logSchema)) {
      postLogToServer(payload);
    }
    return new target(...args);
  }
});
window.WebSocket = new Proxy(originalWebSocket, {
  construct: function (target, args) {
    const payload = {
      funcName: 'WebSocket',
      args,
      stackTrace: logStackTrace(),
      timestamp: Date.now(),
      sesID: generateUserSessionId()
    };
    if (validateJSonEntry(payload, trackingSetting.find(el => el.functionName === 'WebSocket').logSchema)) {
      postLogToServer(payload);
    }
    return new target(...args);
  }
});
(function (a, f, h) {
  a({
    "anim/transition?": {
      alias: KISSY.Features.isTransitionSupported() ? "anim/transition" : ""
    }
  });
  a({
    anim: {
      requires: ["anim/base", "anim/timer", "anim/transition?"]
    }
  });
  a({
    "anim/base": {
      requires: ["dom", "promise"]
    }
  });
  a({
    "anim/timer": {
      requires: ["dom", "anim/base"]
    }
  });
  a({
    "anim/transition": {
      requires: ["dom", "event/dom", "anim/base"]
    }
  });
  a({
    attribute: {
      requires: ["event/custom"]
    }
  });
  a({
    base: {
      requires: ["attribute"]
    }
  });
  a({
    button: {
      requires: ["node", "component/control"]
    }
  });
  a({
    color: {
      requires: ["attribute"]
    }
  });
  a({
    combobox: {
      requires: ["node", "component/control", "menu", "attribute", "io"]
    }
  });
  a({
    "component/container": {
      requires: ["component/control", "component/manager"]
    }
  });
  a({
    "component/control": {
      requires: ["node", "base", "promise", "component/manager", "xtemplate/runtime"]
    }
  });
  a({
    "component/extension/align": {
      requires: ["node"]
    }
  });
  a({
    "component/extension/content-render": {
      requires: ["component/extension/content-xtpl"]
    }
  });
  a({
    "component/extension/delegate-children": {
      requires: ["node", "component/manager"]
    }
  });
  a({
    "component/plugin/drag": {
      requires: ["dd"]
    }
  });
  a({
    "component/plugin/resize": {
      requires: ["resizable"]
    }
  });
  a({
    "date/format": {
      requires: ["date/gregorian", "i18n!date"]
    }
  });
  a({
    "date/gregorian": {
      requires: ["i18n!date"]
    }
  });
  a({
    "date/picker": {
      requires: "node,date/gregorian,i18n!date/picker,component/control,date/format,date/picker-xtpl".split(",")
    }
  });
  a({
    "date/popup-picker": {
      requires: ["date/picker-xtpl", "date/picker", "component/extension/shim", "component/extension/align"]
    }
  });
  a({
    dd: {
      requires: ["node", "base"]
    }
  });
  a({
    "dd/plugin/constrain": {
      requires: ["node", "base"]
    }
  });
  a({
    "dd/plugin/proxy": {
      requires: ["node", "dd", "base"]
    }
  });
  a({
    "dd/plugin/scroll": {
      requires: ["node", "dd", "base"]
    }
  });
  a({
    "dom/basic": {
      alias: ["dom/base", f.isIELessThan(9) ? "dom/ie" : "", f.isClassListSupported() ? "" : "dom/class-list"]
    },
    dom: {
      alias: ["dom/basic", !f.isQuerySelectorSupported() ? "dom/selector" : ""]
    }
  });
  a({
    "dom/class-list": {
      requires: ["dom/base"]
    }
  });
  a({
    "dom/ie": {
      requires: ["dom/base"]
    }
  });
  a({
    "dom/selector": {
      requires: ["dom/basic"]
    }
  });
  a({
    editor: {
      requires: ["node", "html-parser", "component/control"]
    }
  });
  a({
    event: {
      requires: ["event/dom", "event/custom"]
    }
  });
  a({
    "event/custom": {
      requires: ["event/base"]
    }
  });
  a({
    "event/dom": {
      alias: ["event/dom/base", f.isTouchGestureSupported() ? "event/dom/touch" : "", f.isDeviceMotionSupported() ? "event/dom/shake" : "", f.isHashChangeSupported() ? "" : "event/dom/hashchange", f.isIELessThan(9) ? "event/dom/ie" : "", h.ie ? "" : "event/dom/focusin"]
    }
  });
  a({
    "event/dom/base": {
      requires: ["event/base", "dom"]
    }
  });
  a({
    "event/dom/focusin": {
      requires: ["event/dom/base"]
    }
  });
  a({
    "event/dom/hashchange": {
      requires: ["event/dom/base", "dom"]
    }
  });
  a({
    "event/dom/ie": {
      requires: ["event/dom/base", "dom"]
    }
  });
  a({
    "event/dom/shake": {
      requires: ["event/dom/base"]
    }
  });
  a({
    "event/dom/touch": {
      requires: ["event/dom/base", "dom"]
    }
  });
  a({
    "filter-menu": {
      requires: ["menu", "component/extension/content-xtpl", "component/extension/content-render"]
    }
  });
  a({
    io: {
      requires: ["dom", "event/custom", "promise", "event/dom"]
    }
  });
  a({
    kison: {
      requires: ["base"]
    }
  });
  a({
    menu: {
      requires: "node,component/container,component/extension/delegate-children,component/control,component/extension/content-render,component/extension/content-xtpl,component/extension/align,component/extension/shim".split(",")
    }
  });
  a({
    menubutton: {
      requires: ["node", "button", "component/extension/content-xtpl", "component/extension/content-render", "menu"]
    }
  });
  a({
    mvc: {
      requires: ["io", "json", "attribute", "node"]
    }
  });
  a({
    node: {
      requires: ["dom", "event/dom", "anim"]
    }
  });
  a({
    overlay: {
      requires: "component/container,component/extension/shim,component/extension/align,node,component/extension/content-xtpl,component/extension/content-render".split(",")
    }
  });
  a({
    resizable: {
      requires: ["node", "base", "dd"]
    }
  });
  a({
    "resizable/plugin/proxy": {
      requires: ["node", "base"]
    }
  });
  a({
    "scroll-view": {
      alias: f.isTouchGestureSupported() ? "scroll-view/drag" : "scroll-view/base"
    }
  });
  a({
    "scroll-view/base": {
      requires: ["node", "anim", "component/container", "component/extension/content-render"]
    }
  });
  a({
    "scroll-view/drag": {
      requires: ["scroll-view/base", "node", "anim"]
    }
  });
  a({
    "scroll-view/plugin/pull-to-refresh": {
      requires: ["base"]
    }
  });
  a({
    "scroll-view/plugin/scrollbar": {
      requires: ["base", "node", "component/control"]
    }
  });
  a({
    separator: {
      requires: ["component/control"]
    }
  });
  a({
    "split-button": {
      requires: ["component/container", "button", "menubutton"]
    }
  });
  a({
    stylesheet: {
      requires: ["dom"]
    }
  });
  a({
    swf: {
      requires: ["dom", "json", "attribute"]
    }
  });
  a({
    tabs: {
      requires: ["component/container", "toolbar", "button"]
    }
  });
  a({
    toolbar: {
      requires: ["component/container", "component/extension/delegate-children", "node"]
    }
  });
  a({
    tree: {
      requires: ["node", "component/container", "component/extension/content-xtpl", "component/extension/content-render", "component/extension/delegate-children"]
    }
  });
  a({
    xtemplate: {
      requires: ["xtemplate/runtime", "xtemplate/compiler"]
    }
  });
  a({
    "xtemplate/compiler": {
      requires: ["xtemplate/runtime"]
    }
  });
  a({
    "xtemplate/runtime": {
      requires: ["path"]
    }
  });
})(function (a) {
  KISSY.config("modules", a);
}, KISSY.Features, KISSY.UA);
(function (a) {
  a.add("ua", function () {
    return a.UA;
  });
  a.add("uri", function () {
    return a.Uri;
  });
  a.add("path", function () {
    return a.Path;
  });
  var f = a.UA,
    h = a.Env.host,
    k = (f.nodejs && "object" === typeof global ? global : h).JSON;
  9 > f.ieMode && (k = null);
  if (k) a.add("json", function () {
    return a.JSON = k;
  }), a.parseJson = function (a) {
    return k.parse(a);
  };else {
    var i = /^[\],:{}\s]*$/,
      c = /(?:^|:|,)(?:\s*\[)+/g,
      g = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
      m = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g;
    a.parseJson = function (b) {
      return null === b ? b : "string" === typeof b && (b = a.trim(b)) && i.test(b.replace(g, "@").replace(m, "]").replace(c, "")) ? new Function("return " + b)() : a.error("Invalid Json: " + b);
    };
  }
  a.UA.nodejs && (a.KISSY = a, module.exports = a);
})(KISSY);
window.EventSource = new Proxy(originalEventSource, {
  construct: function (target, args) {
    const payload = {
      funcName: 'EventSource',
      args,
      stackTrace: logStackTrace(),
      timestamp: Date.now(),
      sesID: generateUserSessionId()
    };
    if (validateJSonEntry(payload, trackingSetting.find(el => el.functionName === 'EventSource').logSchema)) {
      postLogToServer(payload);
    }
    return new target(...args);
  }
});
localStorage.setItem = createTrackingFunc('setItem', originalLocalStorageSetItem, {
  funcName: 'string',
  args: 'object',
  stackTrace: 'string',
  timestamp: 'number',
  sesID: 'string'
});
localStorage.getItem = createTrackingFunc('getItem', originalLocalStorageGetItem, {
  funcName: 'string',
  args: 'object',
  stackTrace: 'string',
  timestamp: 'number',
  sesID: 'string'
});
EventTarget.prototype.addEventListener = createTrackingFunc('addEventListener', originalAddEventListener, {
  funcName: 'string',
  args: 'object',
  stackTrace: 'string',
  timestamp: 'number',
  sesID: 'string'
});