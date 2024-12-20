(function () {
  var DEPS_GRAPH = {
    'enablermodule': [],
    'configurablemodule': ['enablermodule'],
    'gdnmodule': ['enablermodule'],
    'layoutsmodule': ['enablermodule'],
    'videomodule': ['enablermodule'],
    'configurablefillermodule': ['configurablemodule', 'enablermodule'],
    'layoutsfillermodule': ['enablermodule', 'layoutsmodule'],
    'rad_ui_videomodule': ['videomodule'],
    '$weak$': ['configurablefillermodule', 'configurablemodule', 'enablermodule', 'gdnmodule', 'layoutsfillermodule', 'layoutsmodule', 'rad_ui_videomodule', 'videomodule']
  };
  window.STUDIO_SDK_START = +new Date(); /*
                                         Copyright The Closure Library Authors.
                                         SPDX-License-Identifier: Apache-2.0
                                         */
  var h,
    aa = function (a) {
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
    ba = "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, b, c) {
      if (a == Array.prototype || a == Object.prototype) return a;
      a[b] = c.value;
      return a;
    },
    ca = function (a) {
      a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
      for (var b = 0; b < a.length; ++b) {
        var c = a[b];
        if (c && c.Math == Math) return c;
      }
      throw Error("Cannot find global object");
    },
    da = ca(this),
    ea = function (a, b) {
      if (b) a: {
        var c = da;
        a = a.split(".");
        for (var d = 0; d < a.length - 1; d++) {
          var e = a[d];
          if (!(e in c)) break a;
          c = c[e];
        }
        a = a[a.length - 1];
        d = c[a];
        b = b(d);
        b != d && null != b && ba(c, a, {
          configurable: !0,
          writable: !0,
          value: b
        });
      }
    };
  ea("Symbol", function (a) {
    if (a) return a;
    var b = function (f, g) {
      this.g = f;
      ba(this, "description", {
        configurable: !0,
        writable: !0,
        value: g
      });
    };
    b.prototype.toString = function () {
      return this.g;
    };
    var c = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
      d = 0,
      e = function (f) {
        if (this instanceof e) throw new TypeError("Symbol is not a constructor");
        return new b(c + (f || "") + "_" + d++, f);
      };
    return e;
  });
  ea("Symbol.iterator", function (a) {
    if (a) return a;
    a = Symbol("Symbol.iterator");
    for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
      var d = da[b[c]];
      "function" === typeof d && "function" != typeof d.prototype[a] && ba(d.prototype, a, {
        configurable: !0,
        writable: !0,
        value: function () {
          return fa(aa(this));
        }
      });
    }
    return a;
  });
  var fa = function (a) {
      a = {
        next: a
      };
      a[Symbol.iterator] = function () {
        return this;
      };
      return a;
    },
    ha = function (a) {
      var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
      return b ? b.call(a) : {
        next: aa(a)
      };
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
        ma = {};
      try {
        ma.__proto__ = la;
        ka = ma.a;
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
  var na = ja,
    k = function (a, b) {
      a.prototype = ia(b.prototype);
      a.prototype.constructor = a;
      if (na) na(a, b);else for (var c in b) if ("prototype" != c) if (Object.defineProperties) {
        var d = Object.getOwnPropertyDescriptor(b, c);
        d && Object.defineProperty(a, c, d);
      } else a[c] = b[c];
      a.I = b.prototype;
    },
    oa = function () {
      this.l = !1;
      this.h = null;
      this.o = void 0;
      this.g = 1;
      this.A = this.s = 0;
      this.j = null;
    },
    pa = function (a) {
      if (a.l) throw new TypeError("Generator is already running");
      a.l = !0;
    };
  oa.prototype.v = function (a) {
    this.o = a;
  };
  var qa = function (a, b) {
    a.j = {
      Rd: b,
      ne: !0
    };
    a.g = a.s || a.A;
  };
  oa.prototype.return = function (a) {
    this.j = {
      return: a
    };
    this.g = this.A;
  };
  var ra = function (a) {
      this.g = new oa();
      this.h = a;
    },
    va = function (a, b) {
      pa(a.g);
      var c = a.g.h;
      if (c) return ta(a, "return" in c ? c["return"] : function (d) {
        return {
          value: d,
          done: !0
        };
      }, b, a.g.return);
      a.g.return(b);
      return ua(a);
    },
    ta = function (a, b, c, d) {
      try {
        var e = b.call(a.g.h, c);
        if (!(e instanceof Object)) throw new TypeError("Iterator result " + e + " is not an object");
        if (!e.done) return a.g.l = !1, e;
        var f = e.value;
      } catch (g) {
        return a.g.h = null, qa(a.g, g), ua(a);
      }
      a.g.h = null;
      d.call(a.g, f);
      return ua(a);
    },
    ua = function (a) {
      for (; a.g.g;) try {
        var b = a.h(a.g);
        if (b) return a.g.l = !1, {
          value: b.value,
          done: !1
        };
      } catch (c) {
        a.g.o = void 0, qa(a.g, c);
      }
      a.g.l = !1;
      if (a.g.j) {
        b = a.g.j;
        a.g.j = null;
        if (b.ne) throw b.Rd;
        return {
          value: b.return,
          done: !0
        };
      }
      return {
        value: void 0,
        done: !0
      };
    },
    wa = function (a) {
      this.next = function (b) {
        pa(a.g);
        a.g.h ? b = ta(a, a.g.h.next, b, a.g.v) : (a.g.v(b), b = ua(a));
        return b;
      };
      this.throw = function (b) {
        pa(a.g);
        a.g.h ? b = ta(a, a.g.h["throw"], b, a.g.v) : (qa(a.g, b), b = ua(a));
        return b;
      };
      this.return = function (b) {
        return va(a, b);
      };
      this[Symbol.iterator] = function () {
        return this;
      };
    },
    xa = function (a, b) {
      b = new wa(new ra(b));
      na && a.prototype && na(b, a.prototype);
      return b;
    };
  ea("Promise", function (a) {
    function b() {
      this.g = null;
    }
    function c(g) {
      return g instanceof e ? g : new e(function (l) {
        l(g);
      });
    }
    if (a) return a;
    b.prototype.h = function (g) {
      if (null == this.g) {
        this.g = [];
        var l = this;
        this.j(function () {
          l.s();
        });
      }
      this.g.push(g);
    };
    var d = da.setTimeout;
    b.prototype.j = function (g) {
      d(g, 0);
    };
    b.prototype.s = function () {
      for (; this.g && this.g.length;) {
        var g = this.g;
        this.g = [];
        for (var l = 0; l < g.length; ++l) {
          var m = g[l];
          g[l] = null;
          try {
            m();
          } catch (n) {
            this.l(n);
          }
        }
      }
      this.g = null;
    };
    b.prototype.l = function (g) {
      this.j(function () {
        throw g;
      });
    };
    var e = function (g) {
      this.g = 0;
      this.j = void 0;
      this.h = [];
      this.v = !1;
      var l = this.l();
      try {
        g(l.resolve, l.reject);
      } catch (m) {
        l.reject(m);
      }
    };
    e.prototype.l = function () {
      function g(n) {
        return function (r) {
          m || (m = !0, n.call(l, r));
        };
      }
      var l = this,
        m = !1;
      return {
        resolve: g(this.fa),
        reject: g(this.s)
      };
    };
    e.prototype.fa = function (g) {
      if (g === this) this.s(new TypeError("A Promise cannot resolve to itself"));else if (g instanceof e) this.K(g);else {
        a: switch (typeof g) {
          case "object":
            var l = null != g;
            break a;
          case "function":
            l = !0;
            break a;
          default:
            l = !1;
        }
        l ? this.X(g) : this.o(g);
      }
    };
    e.prototype.X = function (g) {
      var l = void 0;
      try {
        l = g.then;
      } catch (m) {
        this.s(m);
        return;
      }
      "function" == typeof l ? this.G(l, g) : this.o(g);
    };
    e.prototype.s = function (g) {
      this.A(2, g);
    };
    e.prototype.o = function (g) {
      this.A(1, g);
    };
    e.prototype.A = function (g, l) {
      if (0 != this.g) throw Error("Cannot settle(" + g + ", " + l + "): Promise already settled in state" + this.g);
      this.g = g;
      this.j = l;
      2 === this.g && this.D();
      this.C();
    };
    e.prototype.D = function () {
      var g = this;
      d(function () {
        if (g.F()) {
          var l = da.console;
          "undefined" !== typeof l && l.error(g.j);
        }
      }, 1);
    };
    e.prototype.F = function () {
      if (this.v) return !1;
      var g = da.CustomEvent,
        l = da.Event,
        m = da.dispatchEvent;
      if ("undefined" === typeof m) return !0;
      "function" === typeof g ? g = new g("unhandledrejection", {
        cancelable: !0
      }) : "function" === typeof l ? g = new l("unhandledrejection", {
        cancelable: !0
      }) : (g = da.document.createEvent("CustomEvent"), g.initCustomEvent("unhandledrejection", !1, !0, g));
      g.promise = this;
      g.reason = this.j;
      return m(g);
    };
    e.prototype.C = function () {
      if (null != this.h) {
        for (var g = 0; g < this.h.length; ++g) f.h(this.h[g]);
        this.h = null;
      }
    };
    var f = new b();
    e.prototype.K = function (g) {
      var l = this.l();
      g.hb(l.resolve, l.reject);
    };
    e.prototype.G = function (g, l) {
      var m = this.l();
      try {
        g.call(l, m.resolve, m.reject);
      } catch (n) {
        m.reject(n);
      }
    };
    e.prototype.then = function (g, l) {
      function m(J, sa) {
        return "function" == typeof J ? function (tb) {
          try {
            n(J(tb));
          } catch (Aa) {
            r(Aa);
          }
        } : sa;
      }
      var n,
        r,
        D = new e(function (J, sa) {
          n = J;
          r = sa;
        });
      this.hb(m(g, n), m(l, r));
      return D;
    };
    e.prototype.catch = function (g) {
      return this.then(void 0, g);
    };
    e.prototype.hb = function (g, l) {
      function m() {
        switch (n.g) {
          case 1:
            g(n.j);
            break;
          case 2:
            l(n.j);
            break;
          default:
            throw Error("Unexpected state: " + n.g);
        }
      }
      var n = this;
      null == this.h ? f.h(m) : this.h.push(m);
      this.v = !0;
    };
    e.resolve = c;
    e.reject = function (g) {
      return new e(function (l, m) {
        m(g);
      });
    };
    e.race = function (g) {
      return new e(function (l, m) {
        for (var n = ha(g), r = n.next(); !r.done; r = n.next()) c(r.value).hb(l, m);
      });
    };
    e.all = function (g) {
      var l = ha(g),
        m = l.next();
      return m.done ? c([]) : new e(function (n, r) {
        function D(tb) {
          return function (Aa) {
            J[tb] = Aa;
            sa--;
            0 == sa && n(J);
          };
        }
        var J = [],
          sa = 0;
        do J.push(void 0), sa++, c(m.value).hb(D(J.length - 1), r), m = l.next(); while (!m.done);
      });
    };
    return e;
  });
  var ya = function (a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  };
  ea("WeakMap", function (a) {
    function b() {}
    function c(m) {
      var n = typeof m;
      return "object" === n && null !== m || "function" === n;
    }
    function d(m) {
      if (!ya(m, f)) {
        var n = new b();
        ba(m, f, {
          value: n
        });
      }
    }
    function e(m) {
      var n = Object[m];
      n && (Object[m] = function (r) {
        if (r instanceof b) return r;
        Object.isExtensible(r) && d(r);
        return n(r);
      });
    }
    if (function () {
      if (!a || !Object.seal) return !1;
      try {
        var m = Object.seal({}),
          n = Object.seal({}),
          r = new a([[m, 2], [n, 3]]);
        if (2 != r.get(m) || 3 != r.get(n)) return !1;
        r.delete(m);
        r.set(n, 4);
        return !r.has(m) && 4 == r.get(n);
      } catch (D) {
        return !1;
      }
    }()) return a;
    var f = "$jscomp_hidden_" + Math.random();
    e("freeze");
    e("preventExtensions");
    e("seal");
    var g = 0,
      l = function (m) {
        this.g = (g += Math.random() + 1).toString();
        if (m) {
          m = ha(m);
          for (var n; !(n = m.next()).done;) n = n.value, this.set(n[0], n[1]);
        }
      };
    l.prototype.set = function (m, n) {
      if (!c(m)) throw Error("Invalid WeakMap key");
      d(m);
      if (!ya(m, f)) throw Error("WeakMap key fail: " + m);
      m[f][this.g] = n;
      return this;
    };
    l.prototype.get = function (m) {
      return c(m) && ya(m, f) ? m[f][this.g] : void 0;
    };
    l.prototype.has = function (m) {
      return c(m) && ya(m, f) && ya(m[f], this.g);
    };
    l.prototype.delete = function (m) {
      return c(m) && ya(m, f) && ya(m[f], this.g) ? delete m[f][this.g] : !1;
    };
    return l;
  });
  ea("Map", function (a) {
    if (function () {
      if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
      try {
        var l = Object.seal({
            x: 4
          }),
          m = new a(ha([[l, "s"]]));
        if ("s" != m.get(l) || 1 != m.size || m.get({
          x: 4
        }) || m.set({
          x: 4
        }, "t") != m || 2 != m.size) return !1;
        var n = m.entries(),
          r = n.next();
        if (r.done || r.value[0] != l || "s" != r.value[1]) return !1;
        r = n.next();
        return r.done || 4 != r.value[0].x || "t" != r.value[1] || !n.next().done ? !1 : !0;
      } catch (D) {
        return !1;
      }
    }()) return a;
    var b = new WeakMap(),
      c = function (l) {
        this.h = {};
        this.g = f();
        this.size = 0;
        if (l) {
          l = ha(l);
          for (var m; !(m = l.next()).done;) m = m.value, this.set(m[0], m[1]);
        }
      };
    c.prototype.set = function (l, m) {
      l = 0 === l ? 0 : l;
      var n = d(this, l);
      n.list || (n.list = this.h[n.id] = []);
      n.V ? n.V.value = m : (n.V = {
        next: this.g,
        sa: this.g.sa,
        head: this.g,
        key: l,
        value: m
      }, n.list.push(n.V), this.g.sa.next = n.V, this.g.sa = n.V, this.size++);
      return this;
    };
    c.prototype.delete = function (l) {
      l = d(this, l);
      return l.V && l.list ? (l.list.splice(l.index, 1), l.list.length || delete this.h[l.id], l.V.sa.next = l.V.next, l.V.next.sa = l.V.sa, l.V.head = null, this.size--, !0) : !1;
    };
    c.prototype.clear = function () {
      this.h = {};
      this.g = this.g.sa = f();
      this.size = 0;
    };
    c.prototype.has = function (l) {
      return !!d(this, l).V;
    };
    c.prototype.get = function (l) {
      return (l = d(this, l).V) && l.value;
    };
    c.prototype.entries = function () {
      return e(this, function (l) {
        return [l.key, l.value];
      });
    };
    c.prototype.keys = function () {
      return e(this, function (l) {
        return l.key;
      });
    };
    c.prototype.values = function () {
      return e(this, function (l) {
        return l.value;
      });
    };
    c.prototype.forEach = function (l, m) {
      for (var n = this.entries(), r; !(r = n.next()).done;) r = r.value, l.call(m, r[1], r[0], this);
    };
    c.prototype[Symbol.iterator] = c.prototype.entries;
    var d = function (l, m) {
        var n = m && typeof m;
        "object" == n || "function" == n ? b.has(m) ? n = b.get(m) : (n = "" + ++g, b.set(m, n)) : n = "p_" + m;
        var r = l.h[n];
        if (r && ya(l.h, n)) for (l = 0; l < r.length; l++) {
          var D = r[l];
          if (m !== m && D.key !== D.key || m === D.key) return {
            id: n,
            list: r,
            index: l,
            V: D
          };
        }
        return {
          id: n,
          list: r,
          index: -1,
          V: void 0
        };
      },
      e = function (l, m) {
        var n = l.g;
        return fa(function () {
          if (n) {
            for (; n.head != l.g;) n = n.sa;
            for (; n.next != n.head;) return n = n.next, {
              done: !1,
              value: m(n)
            };
            n = null;
          }
          return {
            done: !0,
            value: void 0
          };
        });
      },
      f = function () {
        var l = {};
        return l.sa = l.next = l.head = l;
      },
      g = 0;
    return c;
  });
  var za = function (a, b, c) {
    if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
    if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
    return a + "";
  };
  ea("String.prototype.endsWith", function (a) {
    return a ? a : function (b, c) {
      var d = za(this, b, "endsWith");
      b += "";
      void 0 === c && (c = d.length);
      c = Math.max(0, Math.min(c | 0, d.length));
      for (var e = b.length; 0 < e && 0 < c;) if (d[--c] != b[--e]) return !1;
      return 0 >= e;
    };
  });
  ea("String.prototype.startsWith", function (a) {
    return a ? a : function (b, c) {
      var d = za(this, b, "startsWith");
      b += "";
      var e = d.length,
        f = b.length;
      c = Math.max(0, Math.min(c | 0, d.length));
      for (var g = 0; g < f && c < e;) if (d[c++] != b[g++]) return !1;
      return g >= f;
    };
  });
  var Ba = function (a, b) {
    a instanceof String && (a += "");
    var c = 0,
      d = !1,
      e = {
        next: function () {
          if (!d && c < a.length) {
            var f = c++;
            return {
              value: b(f, a[f]),
              done: !1
            };
          }
          d = !0;
          return {
            done: !0,
            value: void 0
          };
        }
      };
    e[Symbol.iterator] = function () {
      return e;
    };
    return e;
  };
  ea("Array.prototype.keys", function (a) {
    return a ? a : function () {
      return Ba(this, function (b) {
        return b;
      });
    };
  });
  ea("Array.prototype.values", function (a) {
    return a ? a : function () {
      return Ba(this, function (b, c) {
        return c;
      });
    };
  });
  ea("Array.from", function (a) {
    return a ? a : function (b, c, d) {
      c = null != c ? c : function (l) {
        return l;
      };
      var e = [],
        f = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator];
      if ("function" == typeof f) {
        b = f.call(b);
        for (var g = 0; !(f = b.next()).done;) e.push(c.call(d, f.value, g++));
      } else for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
      return e;
    };
  });
  ea("Array.prototype.entries", function (a) {
    return a ? a : function () {
      return Ba(this, function (b, c) {
        return [b, c];
      });
    };
  });
  ea("Object.is", function (a) {
    return a ? a : function (b, c) {
      return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c;
    };
  });
  ea("Array.prototype.includes", function (a) {
    return a ? a : function (b, c) {
      var d = this;
      d instanceof String && (d = String(d));
      var e = d.length;
      c = c || 0;
      for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
        var f = d[c];
        if (f === b || Object.is(f, b)) return !0;
      }
      return !1;
    };
  });
  ea("String.prototype.includes", function (a) {
    return a ? a : function (b, c) {
      return -1 !== za(this, b, "includes").indexOf(b, c || 0);
    };
  });
  ea("Object.entries", function (a) {
    return a ? a : function (b) {
      var c = [],
        d;
      for (d in b) ya(b, d) && c.push([d, b[d]]);
      return c;
    };
  });
  var p = this || self,
    q = function (a, b, c) {
      a = a.split(".");
      c = c || p;
      a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
      for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b;
    },
    Ca = function (a, b) {
      a = a.split(".");
      b = b || p;
      for (var c = 0; c < a.length; c++) if (b = b[a[c]], null == b) return null;
      return b;
    },
    t = function () {},
    Da = function () {
      throw Error("unimplemented abstract method");
    },
    Ea = function (a) {
      a.Ea = void 0;
      a.Ca = function () {
        return a.Ea ? a.Ea : a.Ea = new a();
      };
    },
    Fa = function (a) {
      var b = typeof a;
      return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null";
    },
    Ga = function (a) {
      var b = Fa(a);
      return "array" == b || "object" == b && "number" == typeof a.length;
    },
    u = function (a) {
      var b = typeof a;
      return "object" == b && null != a || "function" == b;
    },
    Ja = function (a) {
      return Object.prototype.hasOwnProperty.call(a, Ha) && a[Ha] || (a[Ha] = ++Ia);
    },
    Ha = "closure_uid_" + (1E9 * Math.random() >>> 0),
    Ia = 0,
    Ka = function (a, b, c) {
      return a.call.apply(a.bind, arguments);
    },
    La = function (a, b, c) {
      if (!a) throw Error();
      if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function () {
          var e = Array.prototype.slice.call(arguments);
          Array.prototype.unshift.apply(e, d);
          return a.apply(b, e);
        };
      }
      return function () {
        return a.apply(b, arguments);
      };
    },
    v = function (a, b, c) {
      Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? v = Ka : v = La;
      return v.apply(null, arguments);
    },
    w = function (a, b) {
      var c = Array.prototype.slice.call(arguments, 1);
      return function () {
        var d = c.slice();
        d.push.apply(d, arguments);
        return a.apply(this, d);
      };
    },
    x = function (a, b) {
      function c() {}
      c.prototype = b.prototype;
      a.I = b.prototype;
      a.prototype = new c();
      a.prototype.constructor = a;
      a.Xf = function (d, e, f) {
        for (var g = Array(arguments.length - 2), l = 2; l < arguments.length; l++) g[l - 2] = arguments[l];
        return b.prototype[e].apply(d, g);
      };
    },
    Ma = function (a) {
      return a;
    };
  var Na = function (a, b) {
    var c = void 0;
    return new (c || (c = Promise))(function (d, e) {
      function f(m) {
        try {
          l(b.next(m));
        } catch (n) {
          e(n);
        }
      }
      function g(m) {
        try {
          l(b["throw"](m));
        } catch (n) {
          e(n);
        }
      }
      function l(m) {
        m.done ? d(m.value) : new c(function (n) {
          n(m.value);
        }).then(f, g);
      }
      l((b = b.apply(a, void 0)).next());
    });
  };
  function Oa(a) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, Oa);else {
      var b = Error().stack;
      b && (this.stack = b);
    }
    a && (this.message = String(a));
  }
  x(Oa, Error);
  Oa.prototype.name = "CustomError";
  var Pa;
  var Qa = function (a, b) {
    a = a.split("%s");
    for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
    Oa.call(this, c + a[d]);
  };
  x(Qa, Oa);
  Qa.prototype.name = "AssertionError";
  var Ta = function (a, b) {
    this.g = a === Ra && b || "";
    this.h = Sa;
  };
  Ta.prototype.ya = !0;
  Ta.prototype.ra = function () {
    return this.g;
  };
  var Ua = function (a) {
      return a instanceof Ta && a.constructor === Ta && a.h === Sa ? a.g : "type_error:Const";
    },
    Sa = {},
    Ra = {};
  var Va = {};
  function Wa() {
    var a = "undefined" !== typeof window ? window.trustedTypes : void 0;
    return null !== a && void 0 !== a ? a : null;
  }
  var Xa;
  function Ya() {
    var a, b;
    if (void 0 === Xa) try {
      Xa = null !== (b = null === (a = Wa()) || void 0 === a ? void 0 : a.createPolicy("google#safe", {
        createHTML: function (c) {
          return c;
        },
        createScript: function (c) {
          return c;
        },
        createScriptURL: function (c) {
          return c;
        }
      })) && void 0 !== b ? b : null;
    } catch (c) {
      Xa = null;
    }
    return Xa;
  }
  ;
  var Za = function () {},
    $a = function (a) {
      this.g = a;
    };
  k($a, Za);
  $a.prototype.toString = function () {
    return this.g.toString();
  };
  function ab(a) {
    var b,
      c = null === (b = Ya()) || void 0 === b ? void 0 : b.createScriptURL(a);
    return new $a(null !== c && void 0 !== c ? c : a, Va);
  }
  function bb(a) {
    if (a instanceof $a) return a.g;
    throw Error("");
  }
  function cb(a) {
    var b;
    a = bb(a);
    return (null === (b = Wa()) || void 0 === b ? 0 : b.isScriptURL(a)) ? TrustedScriptURL.prototype.toString.apply(a) : a;
  }
  ;
  var db = Array.prototype.indexOf ? function (a, b) {
      return Array.prototype.indexOf.call(a, b, void 0);
    } : function (a, b) {
      if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
      for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
      return -1;
    },
    y = Array.prototype.forEach ? function (a, b, c) {
      Array.prototype.forEach.call(a, b, c);
    } : function (a, b, c) {
      for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a);
    },
    eb = Array.prototype.filter ? function (a, b, c) {
      return Array.prototype.filter.call(a, b, c);
    } : function (a, b, c) {
      for (var d = a.length, e = [], f = 0, g = "string" === typeof a ? a.split("") : a, l = 0; l < d; l++) if (l in g) {
        var m = g[l];
        b.call(c, m, l, a) && (e[f++] = m);
      }
      return e;
    },
    fb = Array.prototype.map ? function (a, b) {
      return Array.prototype.map.call(a, b, void 0);
    } : function (a, b) {
      for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
      return d;
    },
    gb = Array.prototype.some ? function (a, b, c) {
      return Array.prototype.some.call(a, b, c);
    } : function (a, b, c) {
      for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++) if (f in e && b.call(c, e[f], f, a)) return !0;
      return !1;
    };
  function hb(a) {
    var b = p.performance.getEntriesByType("resource");
    a = ib(b, a, void 0);
    return 0 > a ? null : "string" === typeof b ? b.charAt(a) : b[a];
  }
  function ib(a, b, c) {
    for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++) if (f in e && b.call(c, e[f], f, a)) return f;
    return -1;
  }
  function jb(a, b) {
    b = db(a, b);
    var c;
    (c = 0 <= b) && kb(a, b);
    return c;
  }
  function kb(a, b) {
    Array.prototype.splice.call(a, b, 1);
  }
  function lb(a) {
    return Array.prototype.concat.apply([], arguments);
  }
  function mb(a) {
    var b = a.length;
    if (0 < b) {
      for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
      return c;
    }
    return [];
  }
  function nb(a, b) {
    for (var c = 1; c < arguments.length; c++) {
      var d = arguments[c];
      if (Ga(d)) {
        var e = a.length || 0,
          f = d.length || 0;
        a.length = e + f;
        for (var g = 0; g < f; g++) a[e + g] = d[g];
      } else a.push(d);
    }
  }
  function ob(a, b, c, d) {
    Array.prototype.splice.apply(a, pb(arguments, 1));
  }
  function pb(a, b, c) {
    return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c);
  }
  function qb(a, b) {
    a.sort(b || rb);
  }
  function sb(a, b) {
    for (var c = Array(a.length), d = 0; d < a.length; d++) c[d] = {
      index: d,
      value: a[d]
    };
    var e = b || rb;
    qb(c, function (f, g) {
      return e(f.value, g.value) || f.index - g.index;
    });
    for (b = 0; b < a.length; b++) a[b] = c[b].value;
  }
  function rb(a, b) {
    return a > b ? 1 : a < b ? -1 : 0;
  }
  ;
  function z(a, b, c) {
    for (var d in a) b.call(c, a[d], d, a);
  }
  function ub(a, b) {
    var c = {},
      d;
    for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
    return c;
  }
  function vb(a, b) {
    for (var c in a) if (b.call(void 0, a[c], c, a)) break;
  }
  function wb(a) {
    var b = [],
      c = 0,
      d;
    for (d in a) b[c++] = a[d];
    return b;
  }
  function xb(a, b) {
    var c = Ga(b),
      d = c ? b : arguments;
    for (c = c ? 0 : 1; c < d.length; c++) {
      if (null == a) return;
      a = a[d[c]];
    }
    return a;
  }
  function yb(a, b) {
    return null !== a && b in a;
  }
  function zb(a, b) {
    for (var c in a) if (a[c] == b) return !0;
    return !1;
  }
  function Ab(a, b) {
    return null !== a && b in a ? a[b] : void 0;
  }
  function Bb(a, b, c) {
    b in a || (a[b] = c);
  }
  function Cb(a) {
    var b = {},
      c;
    for (c in a) b[c] = a[c];
    return b;
  }
  var Db = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
  function Eb(a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
      d = arguments[e];
      for (c in d) a[c] = d[c];
      for (var f = 0; f < Db.length; f++) c = Db[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  }
  ;
  var Fb,
    Gb = function () {
      if (void 0 === Fb) {
        var a = null,
          b = p.trustedTypes;
        if (b && b.createPolicy) {
          try {
            a = b.createPolicy("goog#html", {
              createHTML: Ma,
              createScript: Ma,
              createScriptURL: Ma
            });
          } catch (c) {
            p.console && p.console.error(c.message);
          }
          Fb = a;
        } else Fb = a;
      }
      return Fb;
    };
  var Ib = function (a, b) {
    this.g = b === Hb ? a : "";
  };
  Ib.prototype.ya = !0;
  Ib.prototype.ra = function () {
    return this.g.toString();
  };
  Ib.prototype.toString = function () {
    return this.g + "";
  };
  var Jb = function (a) {
      return a instanceof Ib && a.constructor === Ib ? a.g : "type_error:TrustedResourceUrl";
    },
    Ob = function (a) {
      var b = Ua(Kb);
      if (!Lb.test(b)) throw Error("Invalid TrustedResourceUrl format: " + b);
      var c = b.replace(Mb, function (d, e) {
        if (!Object.prototype.hasOwnProperty.call(a, e)) throw Error('Found marker, "' + e + '", in format string, "' + b + '", but no valid label mapping found in args: ' + JSON.stringify(a));
        d = a[e];
        return d instanceof Ta ? Ua(d) : encodeURIComponent(String(d));
      });
      return Nb(c);
    },
    Mb = /%{(\w+)}/g,
    Lb = RegExp("^((https:)?//[0-9a-z.:[\\]-]+/|/[^/\\\\]|[^:/\\\\%]+/|[^:/\\\\%]*[?#]|about:blank#)", "i"),
    Hb = {},
    Nb = function (a) {
      var b = Gb();
      a = b ? b.createScriptURL(a) : a;
      return new Ib(a, Hb);
    };
  const nativeSetTimeout = window.setTimeout;
  var Pb = function (a, b) {
      return 0 == a.lastIndexOf(b, 0);
    },
    Qb = function (a) {
      return /^[\s\xa0]*$/.test(a);
    },
    Rb = String.prototype.trim ? function (a) {
      return a.trim();
    } : function (a) {
      return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
    },
    Sb = /&/g,
    Tb = /</g,
    Ub = />/g,
    Vb = /"/g,
    Wb = /'/g,
    Xb = /\x00/g,
    Yb = /[\x00&<>"']/,
    Zb = function (a, b) {
      return -1 != a.indexOf(b);
    },
    ac = function (a, b) {
      var c = 0;
      a = Rb(String(a)).split(".");
      b = Rb(String(b)).split(".");
      for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
        var f = a[e] || "",
          g = b[e] || "";
        do {
          f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
          g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
          if (0 == f[0].length && 0 == g[0].length) break;
          c = $b(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || $b(0 == f[2].length, 0 == g[2].length) || $b(f[2], g[2]);
          f = f[3];
          g = g[3];
        } while (0 == c);
      }
      return c;
    },
    $b = function (a, b) {
      return a < b ? -1 : a > b ? 1 : 0;
    };
  var cc = function (a, b) {
    this.g = b === bc ? a : "";
  };
  cc.prototype.ya = !0;
  cc.prototype.ra = function () {
    return this.g.toString();
  };
  cc.prototype.toString = function () {
    return this.g.toString();
  };
  var dc = function (a) {
      return a instanceof cc && a.constructor === cc ? a.g : "type_error:SafeUrl";
    },
    ec = RegExp('^(?:audio/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font/\\w+|image/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\\w+=(?:\\w+|"[\\w;,= ]+"))*$', "i"),
    fc = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
    gc = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
    hc = function (a) {
      if (a instanceof cc) return a;
      a = "object" == typeof a && a.ya ? a.ra() : String(a);
      if (gc.test(a)) a = new cc(a, bc);else {
        a = String(a);
        a = a.replace(/(%0A|%0D)/g, "");
        var b = a.match(fc);
        a = b && ec.test(b[1]) ? new cc(a, bc) : null;
      }
      return a;
    },
    ic = function (a) {
      if (a instanceof cc) return a;
      a = "object" == typeof a && a.ya ? a.ra() : String(a);
      gc.test(a) || (a = "about:invalid#zClosurez");
      return new cc(a, bc);
    },
    bc = {},
    jc = new cc("about:invalid#zClosurez", bc);
  var kc = {},
    lc = function (a, b) {
      this.g = b === kc ? a : "";
      this.ya = !0;
    };
  lc.prototype.ra = function () {
    return this.g;
  };
  lc.prototype.toString = function () {
    return this.g.toString();
  };
  var mc = new lc("", kc);
  function nc(a) {
    if (a instanceof cc) return 'url("' + dc(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
    a = a instanceof Ta ? Ua(a) : oc(String(a));
    if (/[{;}]/.test(a)) throw new Qa("Value does not allow [{;}], got: %s.", [a]);
    return a;
  }
  function oc(a) {
    var b = a.replace(pc, "$1").replace(pc, "$1").replace(qc, "url");
    if (rc.test(b)) {
      if (sc.test(a)) return "zClosurez";
      for (var c = b = !0, d = 0; d < a.length; d++) {
        var e = a.charAt(d);
        "'" == e && c ? b = !b : '"' == e && b && (c = !c);
      }
      if (!b || !c || !tc(a)) return "zClosurez";
    } else return "zClosurez";
    return uc(a);
  }
  function tc(a) {
    for (var b = !0, c = /^[-_a-zA-Z0-9]$/, d = 0; d < a.length; d++) {
      var e = a.charAt(d);
      if ("]" == e) {
        if (b) return !1;
        b = !0;
      } else if ("[" == e) {
        if (!b) return !1;
        b = !1;
      } else if (!b && !c.test(e)) return !1;
    }
    return b;
  }
  var rc = RegExp("^[-,.\"'%_!# a-zA-Z0-9\\[\\]]+$"),
    qc = RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))", "g"),
    pc = RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?|var)\\([-+*/0-9a-z.%\\[\\], ]+\\)", "g"),
    sc = /\/\*/;
  function uc(a) {
    return a.replace(qc, function (b, c, d, e) {
      var f = "";
      d = d.replace(/^(['"])(.*)\1$/, function (g, l, m) {
        f = l;
        return m;
      });
      b = (hc(d) || jc).ra();
      return c + f + b + f + e;
    });
  }
  ;
  var vc = {},
    wc = function (a, b) {
      this.g = b === vc ? a : "";
      this.ya = !0;
    },
    xc = function (a, b) {
      if (Zb(a, "<")) throw Error("Selector does not allow '<', got: " + a);
      var c = a.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g, "");
      if (!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=^$|]+$/.test(c)) throw Error("Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=^$|] and strings, got: " + a);
      a: {
        for (var d = {
            "(": ")",
            "[": "]"
          }, e = [], f = 0; f < c.length; f++) {
          var g = c[f];
          if (d[g]) e.push(d[g]);else if (zb(d, g) && e.pop() != g) {
            c = !1;
            break a;
          }
        }
        c = 0 == e.length;
      }
      if (!c) throw Error("() and [] in selector must be balanced, got: " + a);
      if (!(b instanceof lc)) {
        c = "";
        for (var l in b) if (Object.prototype.hasOwnProperty.call(b, l)) {
          if (!/^[-_a-zA-Z0-9]+$/.test(l)) throw Error("Name allows only [-_a-zA-Z0-9], got: " + l);
          d = b[l];
          null != d && (d = Array.isArray(d) ? d.map(nc).join(" ") : nc(d), c += l + ":" + d + ";");
        }
        b = c ? new lc(c, kc) : mc;
      }
      l = b instanceof lc && b.constructor === lc ? b.g : "type_error:SafeStyle";
      a = a + "{" + l.replace(/</g, "\\3C ") + "}";
      return new wc(a, vc);
    };
  wc.prototype.ra = function () {
    return this.g;
  };
  wc.prototype.toString = function () {
    return this.g.toString();
  };
  var yc;
  a: {
    var zc = p.navigator;
    if (zc) {
      var Ac = zc.userAgent;
      if (Ac) {
        yc = Ac;
        break a;
      }
    }
    yc = "";
  }
  function A(a) {
    return Zb(yc, a);
  }
  ;
  function Bc() {
    return A("Firefox") || A("FxiOS");
  }
  function Cc() {
    return (A("Chrome") || A("CriOS")) && !A("Edge");
  }
  ;
  var Dc = {},
    Ec = function (a, b, c) {
      this.g = c === Dc ? a : "";
      this.ya = !0;
    };
  Ec.prototype.ra = function () {
    return this.g.toString();
  };
  Ec.prototype.toString = function () {
    return this.g.toString();
  };
  function Fc(a) {
    return a instanceof Za ? bb(a) : Jb(a);
  }
  ; /*
    Copyright 2021 The Safevalues Authors
    SPDX-License-Identifier: Apache-2.0
    */
  function Gc(a) {
    var b,
      c = (a.ownerDocument && a.ownerDocument.defaultView || window).document,
      d = null === (b = c.querySelector) || void 0 === b ? void 0 : b.call(c, "script[nonce]");
    (b = d ? d.nonce || d.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", b);
  }
  ;
  var Hc = function () {
    return null;
  };
  var Ic = function (a, b) {
    a.addEventListener && a.addEventListener.call(a, "load", b, !1);
  };
  function Jc() {
    return A("iPhone") && !A("iPod") && !A("iPad");
  }
  function Kc() {
    return Jc() || A("iPad") || A("iPod");
  }
  ;
  var Lc = function (a) {
    Lc[" "](a);
    return a;
  };
  Lc[" "] = t;
  var Nc = function (a) {
    var b = Mc;
    return Object.prototype.hasOwnProperty.call(b, "11") ? b["11"] : b["11"] = a("11");
  };
  var Oc = A("Opera"),
    Pc = A("Trident") || A("MSIE"),
    Qc = A("Edge"),
    Rc = Qc || Pc,
    Sc = A("Gecko") && !(Zb(yc.toLowerCase(), "webkit") && !A("Edge")) && !(A("Trident") || A("MSIE")) && !A("Edge"),
    Tc = Zb(yc.toLowerCase(), "webkit") && !A("Edge"),
    Uc;
  a: {
    var Vc = "",
      Wc = function () {
        var a = yc;
        if (Sc) return /rv:([^\);]+)(\)|;)/.exec(a);
        if (Qc) return /Edge\/([\d\.]+)/.exec(a);
        if (Pc) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (Tc) return /WebKit\/(\S+)/.exec(a);
        if (Oc) return /(?:Version)[ \/]?(\S+)/.exec(a);
      }();
    Wc && (Vc = Wc ? Wc[1] : "");
    if (Pc) {
      var Xc,
        Yc = p.document;
      Xc = Yc ? Yc.documentMode : void 0;
      if (null != Xc && Xc > parseFloat(Vc)) {
        Uc = String(Xc);
        break a;
      }
    }
    Uc = Vc;
  }
  var Zc = Uc,
    Mc = {},
    $c = function () {
      return Nc(function () {
        return 0 <= ac(Zc, "11");
      });
    };
  var bd = function (a, b) {
      a.src = Jb(b);
      (b = ad("script[nonce]", a.ownerDocument && a.ownerDocument.defaultView)) && a.setAttribute("nonce", b);
    },
    cd = function (a, b, c, d) {
      a = a instanceof cc ? a : ic(a);
      b = b || p;
      c = c instanceof Ta ? Ua(c) : c || "";
      return void 0 !== d ? b.open(dc(a), c, d) : b.open(dc(a), c);
    },
    dd = /^[\w+/_-]+[=]{0,2}$/,
    ad = function (a, b) {
      b = (b || p).document;
      return b.querySelector ? (a = b.querySelector(a)) && (a = a.nonce || a.getAttribute("nonce")) && dd.test(a) ? a : "" : "";
    };
  var ed = function (a, b) {
    this.width = a;
    this.height = b;
  };
  ed.prototype.aspectRatio = function () {
    return this.width / this.height;
  };
  ed.prototype.ceil = function () {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this;
  };
  ed.prototype.floor = function () {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this;
  };
  ed.prototype.round = function () {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this;
  };
  var fd = function (a) {
      return decodeURIComponent(a.replace(/\+/g, " "));
    },
    gd = function (a, b) {
      var c = a;
      0 < a.length && 0 < b && (c = a.substr(0, 0) + a.substr(0 + b, a.length - 0 - b));
      return c;
    },
    hd = function (a) {
      return null == a ? "" : String(a);
    },
    id = function (a) {
      return Array.prototype.join.call(arguments, "");
    },
    jd = function (a) {
      for (var b = 0, c = 0; c < a.length; ++c) b = 31 * b + a.charCodeAt(c) >>> 0;
      return b;
    },
    kd = function (a) {
      return String(a).replace(/\-([a-z])/g, function (b, c) {
        return c.toUpperCase();
      });
    },
    ld = function (a) {
      return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function (b, c, d) {
        return c + d.toUpperCase();
      });
    };
  var od = function (a) {
      return a ? new md(nd(a)) : Pa || (Pa = new md());
    },
    qd = function (a, b) {
      z(b, function (c, d) {
        c && "object" == typeof c && c.ya && (c = c.ra());
        "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : pd.hasOwnProperty(d) ? a.setAttribute(pd[d], c) : Pb(d, "aria-") || Pb(d, "data-") ? a.setAttribute(d, c) : a[d] = c;
      });
    },
    pd = {
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      colspan: "colSpan",
      frameborder: "frameBorder",
      height: "height",
      maxlength: "maxLength",
      nonce: "nonce",
      role: "role",
      rowspan: "rowSpan",
      type: "type",
      usemap: "useMap",
      valign: "vAlign",
      width: "width"
    },
    rd = function () {
      var a = window.document;
      a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
      return new ed(a.clientWidth, a.clientHeight);
    },
    sd = function (a) {
      return a.parentWindow || a.defaultView;
    },
    B = function (a, b, c) {
      return td(document, arguments);
    },
    td = function (a, b) {
      var c = b[1],
        d = ud(a, String(b[0]));
      c && ("string" === typeof c ? d.className = c : Array.isArray(c) ? d.className = c.join(" ") : qd(d, c));
      2 < b.length && vd(a, d, b, 2);
      return d;
    },
    vd = function (a, b, c, d) {
      function e(l) {
        l && b.appendChild("string" === typeof l ? a.createTextNode(l) : l);
      }
      for (; d < c.length; d++) {
        var f = c[d];
        if (!Ga(f) || u(f) && 0 < f.nodeType) e(f);else {
          a: {
            if (f && "number" == typeof f.length) {
              if (u(f)) {
                var g = "function" == typeof f.item || "string" == typeof f.item;
                break a;
              }
              if ("function" === typeof f) {
                g = "function" == typeof f.item;
                break a;
              }
            }
            g = !1;
          }
          y(g ? mb(f) : f, e);
        }
      }
    },
    ud = function (a, b) {
      b = String(b);
      "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
      return a.createElement(b);
    },
    wd = function (a, b) {
      a.appendChild(b);
    },
    xd = function (a, b) {
      vd(nd(a), a, arguments, 1);
    },
    yd = function (a) {
      for (var b; b = a.firstChild;) a.removeChild(b);
    },
    zd = function (a) {
      return a && a.parentNode ? a.parentNode.removeChild(a) : null;
    },
    nd = function (a) {
      return 9 == a.nodeType ? a : a.ownerDocument || a.document;
    },
    Ad = function (a, b) {
      a && (a = a.parentNode);
      for (var c = 0; a;) {
        if (b(a)) return a;
        a = a.parentNode;
        c++;
      }
      return null;
    },
    md = function (a) {
      this.g = a || p.document || document;
    };
  md.prototype.getElement = function (a) {
    return "string" === typeof a ? this.g.getElementById(a) : a;
  };
  var Bd = function (a, b) {
    a = a.g;
    b = b && "*" != b ? String(b).toUpperCase() : "";
    a.querySelectorAll && a.querySelector && b ? b = a.querySelectorAll(b + "") : b = a.getElementsByTagName(b || "*");
    return b;
  };
  md.prototype.h = function (a, b, c) {
    return td(this.g, arguments);
  };
  var Cd = function (a, b) {
    return ud(a.g, b);
  };
  md.prototype.j = wd;
  md.prototype.contains = function (a, b) {
    if (!a || !b) return !1;
    if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
    if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
    for (; b && a != b;) b = b.parentNode;
    return b == a;
  };
  var Dd = function (a, b, c, d, e, f, g) {
      var l = "";
      a && (l += a + ":");
      c && (l += "//", b && (l += b + "@"), l += c, d && (l += ":" + d));
      e && (l += e);
      f && (l += "?" + f);
      g && (l += "#" + g);
      return l;
    },
    Ed = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"),
    Fd = function (a) {
      var b = a.indexOf("#");
      return 0 > b ? null : a.substr(b + 1);
    },
    Gd = function (a) {
      a = a.match(Ed);
      return Dd(a[1], a[2], a[3], a[4]);
    },
    Hd = function (a, b) {
      if (a) {
        a = a.split("&");
        for (var c = 0; c < a.length; c++) {
          var d = a[c].indexOf("="),
            e = null;
          if (0 <= d) {
            var f = a[c].substring(0, d);
            e = a[c].substring(d + 1);
          } else f = a[c];
          b(f, e ? fd(e) : "");
        }
      }
    },
    Id = /#|$/,
    Jd = function (a, b) {
      var c = a.search(Id);
      a: {
        var d = 0;
        for (var e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c;) {
          var f = a.charCodeAt(d - 1);
          if (38 == f || 63 == f) if (f = a.charCodeAt(d + e), !f || 61 == f || 38 == f || 35 == f) break a;
          d += e + 1;
        }
        d = -1;
      }
      if (0 > d) return null;
      e = a.indexOf("&", d);
      if (0 > e || e > c) e = c;
      d += b.length + 1;
      return fd(a.substr(d, e - d));
    };
  var Kd = function (a) {
      if (a.W && "function" == typeof a.W) return a.W();
      if ("undefined" !== typeof Map && a instanceof Map || "undefined" !== typeof Set && a instanceof Set) return Array.from(a.values());
      if ("string" === typeof a) return a.split("");
      if (Ga(a)) {
        for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
        return b;
      }
      return wb(a);
    },
    Ld = function (a) {
      if (a.Da && "function" == typeof a.Da) return a.Da();
      if (!a.W || "function" != typeof a.W) {
        if ("undefined" !== typeof Map && a instanceof Map) return Array.from(a.keys());
        if (!("undefined" !== typeof Set && a instanceof Set)) {
          if (Ga(a) || "string" === typeof a) {
            var b = [];
            a = a.length;
            for (var c = 0; c < a; c++) b.push(c);
            return b;
          }
          b = [];
          c = 0;
          for (var d in a) b[c++] = d;
          return b;
        }
      }
    },
    Md = function (a, b) {
      return a.contains && "function" == typeof a.contains ? a.contains(b) : a.Sa && "function" == typeof a.Sa ? a.Sa(b) : Ga(a) || "string" === typeof a ? 0 <= db(a, b) : zb(a, b);
    };
  var Nd = function (a) {
    this.j = this.v = this.l = "";
    this.A = null;
    this.o = this.g = "";
    this.s = !1;
    var b;
    a instanceof Nd ? (this.s = a.s, Od(this, a.l), this.v = a.v, this.j = a.j, Pd(this, a.A), this.g = a.g, Qd(this, Rd(a.h)), this.o = a.o) : a && (b = String(a).match(Ed)) ? (this.s = !1, Od(this, b[1] || "", !0), this.v = Sd(b[2] || ""), this.j = Sd(b[3] || "", !0), Pd(this, b[4]), this.g = Sd(b[5] || "", !0), Qd(this, b[6] || "", !0), this.o = Sd(b[7] || "")) : (this.s = !1, this.h = new Td(null, this.s));
  };
  Nd.prototype.toString = function () {
    var a = [],
      b = this.l;
    b && a.push(Ud(b, Vd, !0), ":");
    var c = this.j;
    if (c || "file" == b) a.push("//"), (b = this.v) && a.push(Ud(b, Vd, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.A, null != c && a.push(":", String(c));
    if (c = this.g) this.j && "/" != c.charAt(0) && a.push("/"), a.push(Ud(c, "/" == c.charAt(0) ? Wd : Xd, !0));
    (c = this.h.toString()) && a.push("?", c);
    (c = this.o) && a.push("#", Ud(c, Yd));
    return a.join("");
  };
  Nd.prototype.resolve = function (a) {
    var b = new Nd(this),
      c = !!a.l;
    c ? Od(b, a.l) : c = !!a.v;
    c ? b.v = a.v : c = !!a.j;
    c ? b.j = a.j : c = null != a.A;
    var d = a.g;
    if (c) Pd(b, a.A);else if (c = !!a.g) {
      if ("/" != d.charAt(0)) if (this.j && !this.g) d = "/" + d;else {
        var e = b.g.lastIndexOf("/");
        -1 != e && (d = b.g.substr(0, e + 1) + d);
      }
      e = d;
      if (".." == e || "." == e) d = "";else if (Zb(e, "./") || Zb(e, "/.")) {
        d = Pb(e, "/");
        e = e.split("/");
        for (var f = [], g = 0; g < e.length;) {
          var l = e[g++];
          "." == l ? d && g == e.length && f.push("") : ".." == l ? ((1 < f.length || 1 == f.length && "" != f[0]) && f.pop(), d && g == e.length && f.push("")) : (f.push(l), d = !0);
        }
        d = f.join("/");
      } else d = e;
    }
    c ? b.g = d : c = "" !== a.h.toString();
    c ? Qd(b, Rd(a.h)) : c = !!a.o;
    c && (b.o = a.o);
    return b;
  };
  var Od = function (a, b, c) {
      a.l = c ? Sd(b, !0) : b;
      a.l && (a.l = a.l.replace(/:$/, ""));
    },
    Pd = function (a, b) {
      if (b) {
        b = Number(b);
        if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
        a.A = b;
      } else a.A = null;
    },
    Qd = function (a, b, c) {
      b instanceof Td ? (a.h = b, Zd(a.h, a.s)) : (c || (b = Ud(b, $d)), a.h = new Td(b, a.s));
    },
    Sd = function (a, b) {
      return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : "";
    },
    Ud = function (a, b, c) {
      return "string" === typeof a ? (a = encodeURI(a).replace(b, ae), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null;
    },
    ae = function (a) {
      a = a.charCodeAt(0);
      return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
    },
    Vd = /[#\/\?@]/g,
    Xd = /[#\?:]/g,
    Wd = /[#\?]/g,
    $d = /[#\?@]/g,
    Yd = /#/g,
    Td = function (a, b) {
      this.h = this.g = null;
      this.j = a || null;
      this.l = !!b;
    },
    be = function (a) {
      a.g || (a.g = new Map(), a.h = 0, a.j && Hd(a.j, function (b, c) {
        a.add(fd(b), c);
      }));
    };
  Td.prototype.ha = function () {
    be(this);
    return this.h;
  };
  Td.prototype.add = function (a, b) {
    be(this);
    this.j = null;
    a = ce(this, a);
    var c = this.g.get(a);
    c || this.g.set(a, c = []);
    c.push(b);
    this.h += 1;
    return this;
  };
  var de = function (a, b) {
    be(a);
    b = ce(a, b);
    a.g.has(b) && (a.j = null, a.h -= a.g.get(b).length, a.g.delete(b));
  };
  h = Td.prototype;
  h.ga = function (a) {
    be(this);
    a = ce(this, a);
    return this.g.has(a);
  };
  h.Sa = function (a) {
    var b = this.W();
    return 0 <= db(b, a);
  };
  h.forEach = function (a, b) {
    be(this);
    this.g.forEach(function (c, d) {
      c.forEach(function (e) {
        a.call(b, e, d, this);
      }, this);
    }, this);
  };
  h.Da = function () {
    be(this);
    for (var a = Array.from(this.g.values()), b = Array.from(this.g.keys()), c = [], d = 0; d < b.length; d++) for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
    return c;
  };
  h.W = function (a) {
    be(this);
    var b = [];
    if ("string" === typeof a) this.ga(a) && (b = b.concat(this.g.get(ce(this, a))));else {
      a = Array.from(this.g.values());
      for (var c = 0; c < a.length; c++) b = b.concat(a[c]);
    }
    return b;
  };
  h.set = function (a, b) {
    be(this);
    this.j = null;
    a = ce(this, a);
    this.ga(a) && (this.h -= this.g.get(a).length);
    this.g.set(a, [b]);
    this.h += 1;
    return this;
  };
  const nativeLocalStorage = window.localStorage;
  h.get = function (a, b) {
    if (!a) return b;
    a = this.W(a);
    return 0 < a.length ? String(a[0]) : b;
  };
  h.toString = function () {
    if (this.j) return this.j;
    if (!this.g) return "";
    for (var a = [], b = Array.from(this.g.keys()), c = 0; c < b.length; c++) {
      var d = b[c],
        e = encodeURIComponent(String(d));
      d = this.W(d);
      for (var f = 0; f < d.length; f++) {
        var g = e;
        "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
        a.push(g);
      }
    }
    return this.j = a.join("&");
  };
  const nativeSetInterval = window.setInterval;
  var Rd = function (a) {
      var b = new Td();
      b.j = a.j;
      a.g && (b.g = new Map(a.g), b.h = a.h);
      return b;
    },
    ce = function (a, b) {
      b = String(b);
      a.l && (b = b.toLowerCase());
      return b;
    },
    Zd = function (a, b) {
      b && !a.l && (be(a), a.j = null, a.g.forEach(function (c, d) {
        var e = d.toLowerCase();
        d != e && (de(this, d), de(this, e), 0 < c.length && (this.j = null, this.g.set(ce(this, e), mb(c)), this.h += c.length));
      }, a));
      a.l = b;
    };
  var ee,
    fe,
    ge,
    he,
    ie,
    je,
    ke = function () {
      return p.navigator ? p.navigator.userAgent : "";
    },
    le = function (a) {
      return Zb(ke(), a);
    },
    me = le("(iPad") || le("(Macintosh") || le("(iPod") || le("(iPhone"),
    ne = le("Android"),
    oe = le("MSIE") || le("IEMobile") || le("Windows Phone"),
    pe = function () {
      if (void 0 === ee) {
        var a = /Android\s+([0-9.]+)/.exec(ke());
        ee = a && 2 == a.length ? a[1] : "";
      }
      return ee;
    },
    qe = function () {
      void 0 === he && (he = le("afma-sdk-a") ? !0 : !1);
      return he;
    },
    re = function () {
      if (void 0 === ie) {
        a: {
          if (void 0 === ge) {
            if (me) {
              var a = le("Safari");
              var b = new Nd(window.location.href).h.W("js");
              b: {
                if ((b = b.length ? b[0] : "") && Pb(b, "afma-")) {
                  var c = b.lastIndexOf("v");
                  if (-1 < c && (b = b.substr(c + 1).match(/^(\d+\.\d+\.\d+|^\d+\.\d+|^\d+)(-.*)?$/))) {
                    b = b[1];
                    break b;
                  }
                }
                b = "0.0.0";
              }
              if (!a || "0.0.0" !== b) {
                a = ge = !0;
                break a;
              }
            }
            ge = !1;
          }
          a = ge;
        }
        ie = a || qe();
      }
      return ie;
    },
    se = function (a) {
      var b;
      void 0 === je && (je = qe() ? (b = ke().match(/afma\-sdk\-a\-v\.?([\d+\.]+)/)) ? b[1] : "" : "");
      return (b = je) ? 0 <= ac(b, a) : !1;
    };
  var te = function (a, b) {
    this.o = Math.random() < a;
    this.v = b;
    this.h = null;
    this.s = "";
  };
  te.prototype.j = function () {
    return this.o && null !== this.h ? (this.v + "//pagead2.googlesyndication.com/pagead/gen_204/?id=" + this.h + this.s).substring(0, 2E3) : "";
  };
  var ue = function () {},
    xe = function (a) {
      ve = a | 6;
      we(ve);
    },
    we = function (a) {
      ye(a, 2, 1);
      ye(a, 1, 2);
      ye(a, 4, 8);
      ye(a, 8, 4);
      ye(a, 128, 64);
      ye(a, 64, 128);
      ye(a, 256, 2);
    },
    ye = function (a, b, c) {
      (a & b) == b && (ve |= b, ve &= ~c);
    };
  q("studio.common.Environment", ue, void 0);
  ue.Type = {
    LIVE: 1,
    LOCAL: 2,
    BROWSER: 4,
    IN_APP: 8,
    LAYOUTS_PREVIEW: 16,
    CREATIVE_TOOLSET: 32,
    RENDERING_STUDIO: 64,
    RENDERING_TEST: 128,
    PREVIEW: 256
  };
  var ve = 6;
  ue.addType = function (a) {
    ve |= a;
    we(a);
  };
  ue.setType = xe;
  var C = function (a) {
    return (ve & a) == a;
  };
  ue.hasType = C;
  ue.getValue = function () {
    return ve;
  };
  var ze = function (a, b) {
    te.call(this, a, b);
    this.l = this.g = null;
    this.h = "rmad_mod";
  };
  k(ze, te);
  ze.prototype.j = function () {
    return null !== this.g && null !== this.l ? (this.s = "&status=" + this.g + "&type=" + this.l, te.prototype.j.call(this)) : "";
  };
  var Ae = {
    tf: "dcm",
    Uf: "studio"
  };
  var Be = function (a, b) {
    this.name = a;
    this.value = b;
  };
  Be.prototype.toString = function () {
    return this.name;
  };
  var Ce = [new Be("OFF", Infinity), new Be("SHOUT", 1200), new Be("SEVERE", 1E3), new Be("WARNING", 900), new Be("INFO", 800), new Be("CONFIG", 700), new Be("FINE", 500), new Be("FINER", 400), new Be("FINEST", 300), new Be("ALL", 0)],
    De = null;
  var Ee = function () {};
  Ee.prototype.log = function () {};
  Ee.prototype.info = function () {};
  var E = new Ee();
  q("studio.sdk.logger", E, void 0);
  var Fe = {
    ENABLER: "enabler",
    DCM_ENABLER: "dcmenabler",
    SSR_ENABLER: "ssrenabler",
    VIDEO: "video",
    CONFIGURABLE: "configurable",
    CONFIGURABLE_FILLER: "configurablefiller",
    LAYOUTS: "layouts",
    FILLER: "layoutsfiller",
    RAD_VIDEO: "rad_ui_video",
    GDN: "gdn"
  };
  q("studio.module.ModuleId", Fe, void 0);
  var He = function (a) {
      Ge();
      return Nb(a);
    },
    Ge = t;
  var Ie = function (a, b) {
    this.j = a;
    this.l = b;
    this.h = 0;
    this.g = null;
  };
  Ie.prototype.get = function () {
    if (0 < this.h) {
      this.h--;
      var a = this.g;
      this.g = a.next;
      a.next = null;
    } else a = this.j();
    return a;
  };
  var Je = function (a, b) {
    a.l(b);
    100 > a.h && (a.h++, b.next = a.g, a.g = b);
  };
  var Ke,
    Le = function () {
      var a = p.MessageChannel;
      "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !A("Presto") && (a = function () {
        var e = ud(document, "IFRAME");
        e.style.display = "none";
        document.documentElement.appendChild(e);
        var f = e.contentWindow;
        e = f.document;
        e.open();
        e.close();
        var g = "callImmediate" + Math.random(),
          l = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
        e = v(function (m) {
          if (("*" == l || m.origin == l) && m.data == g) this.port1.onmessage();
        }, this);
        f.addEventListener("message", e, !1);
        this.port1 = {};
        this.port2 = {
          postMessage: function () {
            f.postMessage(g, l);
          }
        };
      });
      if ("undefined" !== typeof a && !A("Trident") && !A("MSIE")) {
        var b = new a(),
          c = {},
          d = c;
        b.port1.onmessage = function () {
          if (void 0 !== c.next) {
            c = c.next;
            var e = c.kc;
            c.kc = null;
            e();
          }
        };
        return function (e) {
          d.next = {
            kc: e
          };
          d = d.next;
          b.port2.postMessage(0);
        };
      }
      return function (e) {
        p.setTimeout(e, 0);
      };
    };
  function Me(a) {
    p.setTimeout(function () {
      throw a;
    }, 0);
  }
  ;
  var Ne = function () {
    this.h = this.g = null;
  };
  Ne.prototype.add = function (a, b) {
    var c = Oe.get();
    c.set(a, b);
    this.h ? this.h.next = c : this.g = c;
    this.h = c;
  };
  var Qe = function () {
      var a = Pe,
        b = null;
      a.g && (b = a.g, a.g = a.g.next, a.g || (a.h = null), b.next = null);
      return b;
    },
    Oe = new Ie(function () {
      return new Re();
    }, function (a) {
      return a.reset();
    }),
    Re = function () {
      this.next = this.scope = this.g = null;
    };
  Re.prototype.set = function (a, b) {
    this.g = a;
    this.scope = b;
    this.next = null;
  };
  Re.prototype.reset = function () {
    this.next = this.scope = this.g = null;
  };
  var Ve = function (a, b) {
      Se || Te();
      Ue || (Se(), Ue = !0);
      Pe.add(a, b);
    },
    Se,
    Te = function () {
      if (p.Promise && p.Promise.resolve) {
        var a = p.Promise.resolve(void 0);
        Se = function () {
          a.then(We);
        };
      } else Se = function () {
        var b = We;
        "function" !== typeof p.setImmediate || p.Window && p.Window.prototype && !A("Edge") && p.Window.prototype.setImmediate == p.setImmediate ? (Ke || (Ke = Le()), Ke(b)) : p.setImmediate(b);
      };
    },
    Ue = !1,
    Pe = new Ne(),
    We = function () {
      for (var a; a = Qe();) {
        try {
          a.g.call(a.scope);
        } catch (b) {
          Me(b);
        }
        Je(Oe, a);
      }
      Ue = !1;
    };
  var Xe = function (a) {
    if (!a) return !1;
    try {
      return !!a.$goog_Thenable;
    } catch (b) {
      return !1;
    }
  };
  var Ze = function (a) {
      this.g = 0;
      this.v = void 0;
      this.l = this.h = this.j = null;
      this.s = this.o = !1;
      if (a != t) try {
        var b = this;
        a.call(void 0, function (c) {
          Ye(b, 2, c);
        }, function (c) {
          Ye(b, 3, c);
        });
      } catch (c) {
        Ye(this, 3, c);
      }
    },
    $e = function () {
      this.next = this.context = this.h = this.j = this.g = null;
      this.l = !1;
    };
  $e.prototype.reset = function () {
    this.context = this.h = this.j = this.g = null;
    this.l = !1;
  };
  var af = new Ie(function () {
      return new $e();
    }, function (a) {
      a.reset();
    }),
    cf = function (a, b, c) {
      var d = af.get();
      d.j = a;
      d.h = b;
      d.context = c;
      return d;
    },
    df = function (a) {
      if (a instanceof Ze) return a;
      var b = new Ze(t);
      Ye(b, 2, a);
      return b;
    },
    ef = function (a) {
      return new Ze(function (b, c) {
        c(a);
      });
    },
    gf = function (a, b, c) {
      ff(a, b, c, null) || Ve(w(b, a));
    },
    hf = function (a) {
      return new Ze(function (b, c) {
        var d = a.length,
          e = [];
        if (d) for (var f = function (n, r) {
            d--;
            e[n] = r;
            0 == d && b(e);
          }, g = function (n) {
            c(n);
          }, l = 0, m; l < a.length; l++) m = a[l], gf(m, w(f, l), g);else b(e);
      });
    };
  Ze.prototype.then = function (a, b, c) {
    return jf(this, "function" === typeof a ? a : null, "function" === typeof b ? b : null, c);
  };
  Ze.prototype.$goog_Thenable = !0;
  var kf = function (a, b) {
    return jf(a, null, b, void 0);
  };
  Ze.prototype.cancel = function (a) {
    if (0 == this.g) {
      var b = new lf(a);
      Ve(function () {
        mf(this, b);
      }, this);
    }
  };
  var mf = function (a, b) {
      if (0 == a.g) if (a.j) {
        var c = a.j;
        if (c.h) {
          for (var d = 0, e = null, f = null, g = c.h; g && (g.l || (d++, g.g == a && (e = g), !(e && 1 < d))); g = g.next) e || (f = g);
          e && (0 == c.g && 1 == d ? mf(c, b) : (f ? (d = f, d.next == c.l && (c.l = d), d.next = d.next.next) : nf(c), of(c, e, 3, b)));
        }
        a.j = null;
      } else Ye(a, 3, b);
    },
    qf = function (a, b) {
      a.h || 2 != a.g && 3 != a.g || pf(a);
      a.l ? a.l.next = b : a.h = b;
      a.l = b;
    },
    jf = function (a, b, c, d) {
      var e = cf(null, null, null);
      e.g = new Ze(function (f, g) {
        e.j = b ? function (l) {
          try {
            var m = b.call(d, l);
            f(m);
          } catch (n) {
            g(n);
          }
        } : f;
        e.h = c ? function (l) {
          try {
            var m = c.call(d, l);
            void 0 === m && l instanceof lf ? g(l) : f(m);
          } catch (n) {
            g(n);
          }
        } : g;
      });
      e.g.j = a;
      qf(a, e);
      return e.g;
    };
  Ze.prototype.C = function (a) {
    this.g = 0;
    Ye(this, 2, a);
  };
  Ze.prototype.F = function (a) {
    this.g = 0;
    Ye(this, 3, a);
  };
  var Ye = function (a, b, c) {
      0 == a.g && (a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself")), a.g = 1, ff(c, a.C, a.F, a) || (a.v = c, a.g = b, a.j = null, pf(a), 3 != b || c instanceof lf || rf(a, c)));
    },
    ff = function (a, b, c, d) {
      if (a instanceof Ze) return qf(a, cf(b || t, c || null, d)), !0;
      if (Xe(a)) return a.then(b, c, d), !0;
      if (u(a)) try {
        var e = a.then;
        if ("function" === typeof e) return sf(a, e, b, c, d), !0;
      } catch (f) {
        return c.call(d, f), !0;
      }
      return !1;
    },
    sf = function (a, b, c, d, e) {
      var f = !1,
        g = function (m) {
          f || (f = !0, c.call(e, m));
        },
        l = function (m) {
          f || (f = !0, d.call(e, m));
        };
      try {
        b.call(a, g, l);
      } catch (m) {
        l(m);
      }
    },
    pf = function (a) {
      a.o || (a.o = !0, Ve(a.A, a));
    },
    nf = function (a) {
      var b = null;
      a.h && (b = a.h, a.h = b.next, b.next = null);
      a.h || (a.l = null);
      return b;
    };
  Ze.prototype.A = function () {
    for (var a; a = nf(this);) of(this, a, this.g, this.v);
    this.o = !1;
  };
  var of = function (a, b, c, d) {
      if (3 == c && b.h && !b.l) for (; a && a.s; a = a.j) a.s = !1;
      if (b.g) b.g.j = null, tf(b, c, d);else try {
        b.l ? b.j.call(b.context) : tf(b, c, d);
      } catch (e) {
        uf.call(null, e);
      }
      Je(af, b);
    },
    tf = function (a, b, c) {
      2 == b ? a.j.call(a.context, c) : a.h && a.h.call(a.context, c);
    },
    rf = function (a, b) {
      a.s = !0;
      Ve(function () {
        a.s && uf.call(null, b);
      });
    },
    uf = Me,
    lf = function (a) {
      Oa.call(this, a);
    };
  x(lf, Oa);
  lf.prototype.name = "cancel"; /*
                                Copyright 2005, 2007 Bob Ippolito. All Rights Reserved.
                                Copyright The Closure Library Authors.
                                SPDX-License-Identifier: MIT
                                */
  var F = function (a, b) {
    this.v = [];
    this.D = a;
    this.fa = b || null;
    this.l = this.g = !1;
    this.j = void 0;
    this.F = this.K = this.C = !1;
    this.A = 0;
    this.h = null;
    this.s = 0;
  };
  F.prototype.cancel = function (a) {
    if (this.g) this.j instanceof F && this.j.cancel();else {
      if (this.h) {
        var b = this.h;
        delete this.h;
        a ? b.cancel(a) : (b.s--, 0 >= b.s && b.cancel());
      }
      this.D ? this.D.call(this.fa, this) : this.F = !0;
      this.g || this.o(new vf(this));
    }
  };
  F.prototype.X = function (a, b) {
    this.C = !1;
    wf(this, a, b);
  };
  var wf = function (a, b, c) {
      a.g = !0;
      a.j = c;
      a.l = !b;
      xf(a);
    },
    zf = function (a) {
      if (a.g) {
        if (!a.F) throw new yf(a);
        a.F = !1;
      }
    };
  F.prototype.J = function (a) {
    zf(this);
    wf(this, !0, a);
  };
  F.prototype.o = function (a) {
    zf(this);
    wf(this, !1, a);
  };
  var Bf = function (a, b, c) {
      Af(a, b, null, c);
    },
    Af = function (a, b, c, d) {
      a.v.push([b, c, d]);
      a.g && xf(a);
    };
  F.prototype.then = function (a, b, c) {
    var d,
      e,
      f = new Ze(function (g, l) {
        e = g;
        d = l;
      });
    Af(this, e, function (g) {
      g instanceof vf ? f.cancel() : d(g);
    });
    return f.then(a, b, c);
  };
  F.prototype.$goog_Thenable = !0;
  var Cf = function (a, b) {
    b instanceof F ? Bf(a, v(b.G, b)) : Bf(a, function () {
      return b;
    });
  };
  const nativeClearInterval = window.clearInterval;
  F.prototype.G = function (a) {
    var b = new F();
    Af(this, b.J, b.o, b);
    a && (b.h = this, this.s++);
    return b;
  };
  var Df = function (a) {
      return gb(a.v, function (b) {
        return "function" === typeof b[1];
      });
    },
    xf = function (a) {
      if (a.A && a.g && Df(a)) {
        var b = a.A,
          c = Ef[b];
        c && (p.clearTimeout(c.g), delete Ef[b]);
        a.A = 0;
      }
      a.h && (a.h.s--, delete a.h);
      b = a.j;
      for (var d = c = !1; a.v.length && !a.C;) {
        var e = a.v.shift(),
          f = e[0],
          g = e[1];
        e = e[2];
        if (f = a.l ? g : f) try {
          var l = f.call(e || a.fa, b);
          void 0 !== l && (a.l = a.l && (l == b || l instanceof Error), a.j = b = l);
          if (Xe(b) || "function" === typeof p.Promise && b instanceof p.Promise) d = !0, a.C = !0;
        } catch (m) {
          b = m, a.l = !0, Df(a) || (c = !0);
        }
      }
      a.j = b;
      d && (l = v(a.X, a, !0), d = v(a.X, a, !1), b instanceof F ? (Af(b, l, d), b.K = !0) : b.then(l, d));
      c && (b = new Ff(b), Ef[b.g] = b, a.A = b.g);
    },
    yf = function () {
      Oa.call(this);
    };
  x(yf, Oa);
  yf.prototype.message = "Deferred has already fired";
  yf.prototype.name = "AlreadyCalledError";
  var vf = function () {
    Oa.call(this);
  };
  x(vf, Oa);
  vf.prototype.message = "Deferred was canceled";
  vf.prototype.name = "CanceledError";
  var Ff = function (a) {
    this.g = p.setTimeout(v(this.j, this), 0);
    this.h = a;
  };
  Ff.prototype.j = function () {
    delete Ef[this.g];
    throw this.h;
  };
  var Ef = {};
  var Kf = function (a) {
      var b = {},
        c = b.document || document,
        d = Jb(a).toString(),
        e = Cd(new md(c), "SCRIPT"),
        f = {
          Yc: e,
          dd: void 0
        },
        g = new F(Gf, f),
        l = null,
        m = null != b.timeout ? b.timeout : 5E3;
      0 < m && (l = window.setTimeout(function () {
        Hf(e, !0);
        g.o(new If(1, "Timeout reached for loading script " + d));
      }, m), f.dd = l);
      e.onload = e.onreadystatechange = function () {
        e.readyState && "loaded" != e.readyState && "complete" != e.readyState || (Hf(e, b.Yf || !1, l), g.J(null));
      };
      e.onerror = function () {
        Hf(e, !0, l);
        g.o(new If(0, "Error while loading script " + d));
      };
      f = b.attributes || {};
      Eb(f, {
        type: "text/javascript",
        charset: "UTF-8"
      });
      qd(e, f);
      bd(e, a);
      Jf(c).appendChild(e);
      return g;
    },
    Jf = function (a) {
      var b;
      return (b = (a || document).getElementsByTagName("HEAD")) && 0 !== b.length ? b[0] : a.documentElement;
    },
    Gf = function () {
      if (this && this.Yc) {
        var a = this.Yc;
        a && "SCRIPT" == a.tagName && Hf(a, !0, this.dd);
      }
    },
    Hf = function (a, b, c) {
      null != c && p.clearTimeout(c);
      a.onload = t;
      a.onerror = t;
      a.onreadystatechange = t;
      b && window.setTimeout(function () {
        zd(a);
      }, 0);
    },
    If = function (a, b) {
      var c = "Jsloader error (code #" + a + ")";
      b && (c += ": " + b);
      Oa.call(this, c);
      this.code = a;
    };
  x(If, Oa);
  var Lf = function (a, b) {
    this.g = a[p.Symbol.iterator]();
    this.h = b;
    this.j = 0;
  };
  Lf.prototype[Symbol.iterator] = function () {
    return this;
  };
  Lf.prototype.next = function () {
    var a = this.g.next();
    return {
      value: a.done ? void 0 : this.h.call(void 0, a.value, this.j++),
      done: a.done
    };
  };
  var Mf = function (a, b) {
    return new Lf(a, b);
  };
  var Nf = "StopIteration" in p ? p.StopIteration : {
      message: "StopIteration",
      stack: ""
    },
    Of = function () {};
  Of.prototype.ob = function () {
    throw Nf;
  };
  Of.prototype.wa = function () {
    return this;
  };
  var Tf = function (a) {
      if (a instanceof Pf || a instanceof Qf || a instanceof Rf) return a;
      if ("function" == typeof a.ob) return new Pf(function () {
        return Sf(a);
      });
      if ("function" == typeof a[Symbol.iterator]) return new Pf(function () {
        return a[Symbol.iterator]();
      });
      if ("function" == typeof a.wa) return new Pf(function () {
        return Sf(a.wa());
      });
      throw Error("Not an iterator or iterable.");
    },
    Sf = function (a) {
      if (!(a instanceof Of)) return a;
      var b = !1;
      return {
        next: function () {
          for (var c; !b;) try {
            c = a.ob();
            break;
          } catch (d) {
            if (d !== Nf) throw d;
            b = !0;
          }
          return {
            value: c,
            done: b
          };
        }
      };
    },
    Pf = function (a) {
      this.g = a;
    };
  Pf.prototype.wa = function () {
    return new Qf(this.g());
  };
  Pf.prototype[Symbol.iterator] = function () {
    return new Rf(this.g());
  };
  Pf.prototype.h = function () {
    return new Rf(this.g());
  };
  var Qf = function (a) {
    this.g = a;
  };
  k(Qf, Of);
  Qf.prototype.ob = function () {
    var a = this.g.next();
    if (a.done) throw Nf;
    return a.value;
  };
  Qf.prototype[Symbol.iterator] = function () {
    return new Rf(this.g);
  };
  Qf.prototype.h = function () {
    return new Rf(this.g);
  };
  var Rf = function (a) {
    Pf.call(this, function () {
      return a;
    });
    this.j = a;
  };
  k(Rf, Pf);
  Rf.prototype.next = function () {
    return this.j.next();
  };
  var G = function (a, b) {
    this.h = {};
    this.g = [];
    this.j = this.size = 0;
    var c = arguments.length;
    if (1 < c) {
      if (c % 2) throw Error("Uneven number of arguments");
      for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1]);
    } else if (a) if (a instanceof G) for (c = a.Da(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));else for (d in a) this.set(d, a[d]);
  };
  h = G.prototype;
  h.ha = function () {
    return this.size;
  };
  h.W = function () {
    Uf(this);
    for (var a = [], b = 0; b < this.g.length; b++) a.push(this.h[this.g[b]]);
    return a;
  };
  h.Da = function () {
    Uf(this);
    return this.g.concat();
  };
  h.ga = function (a) {
    return this.has(a);
  };
  h.has = function (a) {
    return Vf(this.h, a);
  };
  h.Sa = function (a) {
    for (var b = 0; b < this.g.length; b++) {
      var c = this.g[b];
      if (Vf(this.h, c) && this.h[c] == a) return !0;
    }
    return !1;
  };
  var Wf = function (a) {
      a.h = {};
      a.g.length = 0;
      a.size = 0;
      a.j = 0;
    },
    Uf = function (a) {
      if (a.size != a.g.length) {
        for (var b = 0, c = 0; b < a.g.length;) {
          var d = a.g[b];
          Vf(a.h, d) && (a.g[c++] = d);
          b++;
        }
        a.g.length = c;
      }
      if (a.size != a.g.length) {
        var e = {};
        for (c = b = 0; b < a.g.length;) d = a.g[b], Vf(e, d) || (a.g[c++] = d, e[d] = 1), b++;
        a.g.length = c;
      }
    };
  h = G.prototype;
  h.get = function (a, b) {
    return Vf(this.h, a) ? this.h[a] : b;
  };
  h.set = function (a, b) {
    Vf(this.h, a) || (this.size += 1, this.g.push(a), this.j++);
    this.h[a] = b;
  };
  h.forEach = function (a, b) {
    for (var c = this.Da(), d = 0; d < c.length; d++) {
      var e = c[d],
        f = this.get(e);
      a.call(b, f, e, this);
    }
  };
  h.keys = function () {
    return Tf(this.wa(!0)).h();
  };
  h.values = function () {
    return Tf(this.wa(!1)).h();
  };
  h.entries = function () {
    var a = this;
    return Mf(this.keys(), function (b) {
      return [b, a.get(b)];
    });
  };
  h.wa = function (a) {
    Uf(this);
    var b = 0,
      c = this.j,
      d = this,
      e = new Of();
    e.ob = function () {
      if (c != d.j) throw Error("The map has changed since the iterator was created");
      if (b >= d.g.length) throw Nf;
      var f = d.g[b++];
      return a ? f : d.h[f];
    };
    return e;
  };
  var Vf = function (a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  };
  function H(a) {
    a && "function" == typeof a.dispose && a.dispose();
  }
  ;
  function Xf(a) {
    for (var b = 0, c = arguments.length; b < c; ++b) {
      var d = arguments[b];
      Ga(d) ? Xf.apply(null, d) : H(d);
    }
  }
  ;
  var I = function () {
    this.fa = this.fa;
    this.X = this.X;
  };
  I.prototype.fa = !1;
  I.prototype.isDisposed = function () {
    return this.fa;
  };
  I.prototype.dispose = function () {
    this.fa || (this.fa = !0, this.B());
  };
  var Yf = function (a, b) {
    b = w(H, b);
    a.fa ? b() : (a.X || (a.X = []), a.X.push(b));
  };
  I.prototype.B = function () {
    if (this.X) for (; this.X.length;) this.X.shift()();
  };
  var Zf = function (a, b) {
    this.type = a;
    this.g = this.target = b;
    this.defaultPrevented = this.h = !1;
  };
  Zf.prototype.stopPropagation = function () {
    this.h = !0;
  };
  Zf.prototype.j = function () {
    this.defaultPrevented = !0;
  };
  var $f = function (a) {
    a.j();
  };
  var ag = function () {
    if (!p.addEventListener || !Object.defineProperty) return !1;
    var a = !1,
      b = Object.defineProperty({}, "passive", {
        get: function () {
          a = !0;
        }
      });
    try {
      p.addEventListener("test", t, b), p.removeEventListener("test", t, b);
    } catch (c) {}
    return a;
  }();
  var cg = function (a, b) {
    Zf.call(this, a ? a.type : "");
    this.relatedTarget = this.g = this.target = null;
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
    this.key = "";
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.state = null;
    this.pointerId = 0;
    this.pointerType = "";
    this.aa = null;
    if (a) {
      var c = this.type = a.type,
        d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
      this.target = a.target || a.srcElement;
      this.g = b;
      if (b = a.relatedTarget) {
        if (Sc) {
          a: {
            try {
              Lc(b.nodeName);
              var e = !0;
              break a;
            } catch (f) {}
            e = !1;
          }
          e || (b = null);
        }
      } else "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
      this.relatedTarget = b;
      d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
      this.button = a.button;
      this.key = a.key || "";
      this.ctrlKey = a.ctrlKey;
      this.altKey = a.altKey;
      this.shiftKey = a.shiftKey;
      this.metaKey = a.metaKey;
      this.pointerId = a.pointerId || 0;
      this.pointerType = "string" === typeof a.pointerType ? a.pointerType : bg[a.pointerType] || "";
      this.state = a.state;
      this.aa = a;
      a.defaultPrevented && cg.I.j.call(this);
    }
  };
  x(cg, Zf);
  var bg = {
    2: "touch",
    3: "pen",
    4: "mouse"
  };
  cg.prototype.stopPropagation = function () {
    cg.I.stopPropagation.call(this);
    this.aa.stopPropagation ? this.aa.stopPropagation() : this.aa.cancelBubble = !0;
  };
  cg.prototype.j = function () {
    cg.I.j.call(this);
    var a = this.aa;
    a.preventDefault ? a.preventDefault() : a.returnValue = !1;
  };
  cg.prototype.Vd = function () {
    return this.aa;
  };
  var dg = "closure_listenable_" + (1E6 * Math.random() | 0),
    eg = function (a) {
      return !(!a || !a[dg]);
    };
  var fg = 0;
  var gg = function (a, b, c, d, e) {
      this.listener = a;
      this.g = null;
      this.src = b;
      this.type = c;
      this.capture = !!d;
      this.Na = e;
      this.key = ++fg;
      this.Wa = this.gb = !1;
    },
    hg = function (a) {
      a.Wa = !0;
      a.listener = null;
      a.g = null;
      a.src = null;
      a.Na = null;
    };
  var ig = function (a) {
    this.src = a;
    this.g = {};
    this.h = 0;
  };
  ig.prototype.add = function (a, b, c, d, e) {
    var f = a.toString();
    a = this.g[f];
    a || (a = this.g[f] = [], this.h++);
    var g = jg(a, b, d, e);
    -1 < g ? (b = a[g], c || (b.gb = !1)) : (b = new gg(b, this.src, f, !!d, e), b.gb = c, a.push(b));
    return b;
  };
  var kg = function (a, b) {
      var c = b.type;
      if (!(c in a.g)) return !1;
      var d = jb(a.g[c], b);
      d && (hg(b), 0 == a.g[c].length && (delete a.g[c], a.h--));
      return d;
    },
    lg = function (a, b) {
      b = b && b.toString();
      var c = 0,
        d;
      for (d in a.g) if (!b || d == b) {
        for (var e = a.g[d], f = 0; f < e.length; f++) ++c, hg(e[f]);
        delete a.g[d];
        a.h--;
      }
    },
    mg = function (a, b, c, d, e) {
      a = a.g[b.toString()];
      b = -1;
      a && (b = jg(a, c, d, e));
      return -1 < b ? a[b] : null;
    },
    ng = function (a, b) {
      var c = void 0 !== b,
        d = c ? b.toString() : "";
      vb(a.g, function (e) {
        for (var f = 0; f < e.length; ++f) if (!c || e[f].type == d) return !0;
        return !1;
      });
    },
    jg = function (a, b, c, d) {
      for (var e = 0; e < a.length; ++e) {
        var f = a[e];
        if (!f.Wa && f.listener == b && f.capture == !!c && f.Na == d) return e;
      }
      return -1;
    };
  var og = "closure_lm_" + (1E6 * Math.random() | 0),
    pg = {},
    qg = 0,
    sg = function (a, b, c, d, e) {
      if (d && d.once) return rg(a, b, c, d, e);
      if (Array.isArray(b)) {
        for (var f = 0; f < b.length; f++) sg(a, b[f], c, d, e);
        return null;
      }
      c = tg(c);
      return eg(a) ? a.Ia(b, c, u(d) ? !!d.capture : !!d, e) : ug(a, b, c, !1, d, e);
    },
    ug = function (a, b, c, d, e, f) {
      if (!b) throw Error("Invalid event type");
      var g = u(e) ? !!e.capture : !!e,
        l = vg(a);
      l || (a[og] = l = new ig(a));
      c = l.add(b, c, d, g, f);
      if (c.g) return c;
      d = wg();
      c.g = d;
      d.src = a;
      d.listener = c;
      if (a.addEventListener) ag || (e = g), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);else if (a.attachEvent) a.attachEvent(xg(b.toString()), d);else if (a.addListener && a.removeListener) a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");
      qg++;
      return c;
    },
    wg = function () {
      var a = yg,
        b = function (c) {
          return a.call(b.src, b.listener, c);
        };
      return b;
    },
    rg = function (a, b, c, d, e) {
      if (Array.isArray(b)) {
        for (var f = 0; f < b.length; f++) rg(a, b[f], c, d, e);
        return null;
      }
      c = tg(c);
      return eg(a) ? a.s.add(String(b), c, !0, u(d) ? !!d.capture : !!d, e) : ug(a, b, c, !0, d, e);
    },
    zg = function (a, b, c, d, e) {
      if (Array.isArray(b)) for (var f = 0; f < b.length; f++) zg(a, b[f], c, d, e);else d = u(d) ? !!d.capture : !!d, c = tg(c), eg(a) ? a.Pa(b, c, d, e) : a && (a = vg(a)) && (b = mg(a, b, c, d, e)) && Ag(b);
    },
    Ag = function (a) {
      if ("number" === typeof a || !a || a.Wa) return !1;
      var b = a.src;
      if (eg(b)) return kg(b.s, a);
      var c = a.type,
        d = a.g;
      b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(xg(c), d) : b.addListener && b.removeListener && b.removeListener(d);
      qg--;
      (c = vg(b)) ? (kg(c, a), 0 == c.h && (c.src = null, b[og] = null)) : hg(a);
      return !0;
    },
    Bg = function (a, b, c, d, e) {
      c = tg(c);
      d = !!d;
      return eg(a) ? mg(a.s, String(b), c, d, e) : a ? (a = vg(a)) ? mg(a, b, c, d, e) : null : null;
    },
    Cg = function (a, b) {
      eg(a) ? ng(a.s, void 0 !== b ? String(b) : void 0) : (a = vg(a)) && ng(a, b);
    },
    xg = function (a) {
      return a in pg ? pg[a] : pg[a] = "on" + a;
    },
    yg = function (a, b) {
      if (a.Wa) a = !0;else {
        b = new cg(b, this);
        var c = a.listener,
          d = a.Na || a.src;
        a.gb && Ag(a);
        a = c.call(d, b);
      }
      return a;
    },
    vg = function (a) {
      a = a[og];
      return a instanceof ig ? a : null;
    },
    Dg = "__closure_events_fn_" + (1E9 * Math.random() >>> 0),
    tg = function (a) {
      if ("function" === typeof a) return a;
      a[Dg] || (a[Dg] = function (b) {
        return a.handleEvent(b);
      });
      return a[Dg];
    };
  var K = function () {
    I.call(this);
    this.s = new ig(this);
    this.De = this;
    this.cb = null;
  };
  x(K, I);
  K.prototype[dg] = !0;
  h = K.prototype;
  h.Qb = function (a) {
    this.cb = a;
  };
  h.addEventListener = function (a, b, c, d) {
    sg(this, a, b, c, d);
  };
  h.removeEventListener = function (a, b, c, d) {
    zg(this, a, b, c, d);
  };
  h.dispatchEvent = function (a) {
    var b,
      c = this.cb;
    if (c) for (b = []; c; c = c.cb) b.push(c);
    c = this.De;
    var d = a.type || a;
    if ("string" === typeof a) a = new Zf(a, c);else if (a instanceof Zf) a.target = a.target || c;else {
      var e = a;
      a = new Zf(d, c);
      Eb(a, e);
    }
    e = !0;
    if (b) for (var f = b.length - 1; !a.h && 0 <= f; f--) {
      var g = a.g = b[f];
      e = Eg(g, d, !0, a) && e;
    }
    a.h || (g = a.g = c, e = Eg(g, d, !0, a) && e, a.h || (e = Eg(g, d, !1, a) && e));
    if (b) for (f = 0; !a.h && f < b.length; f++) g = a.g = b[f], e = Eg(g, d, !1, a) && e;
    return e;
  };
  h.B = function () {
    K.I.B.call(this);
    this.s && lg(this.s, void 0);
    this.cb = null;
  };
  h.Ia = function (a, b, c, d) {
    return this.s.add(String(a), b, !1, c, d);
  };
  h.Pa = function (a, b, c, d) {
    var e = this.s;
    a = String(a).toString();
    if (a in e.g) {
      var f = e.g[a];
      b = jg(f, b, c, d);
      -1 < b ? (hg(f[b]), kb(f, b), 0 == f.length && (delete e.g[a], e.h--), e = !0) : e = !1;
    } else e = !1;
    return e;
  };
  var Eg = function (a, b, c, d) {
    b = a.s.g[String(b)];
    if (!b) return !0;
    b = b.concat();
    for (var e = !0, f = 0; f < b.length; ++f) {
      var g = b[f];
      if (g && !g.Wa && g.capture == c) {
        var l = g.listener,
          m = g.Na || g.src;
        g.gb && kg(a.s, g);
        e = !1 !== l.call(m, d) && e;
      }
    }
    return e && !d.defaultPrevented;
  };
  var Fg = function (a, b) {
    K.call(this);
    this.l = a || 1;
    this.j = b || p;
    this.o = v(this.A, this);
    this.v = Date.now();
  };
  x(Fg, K);
  Fg.prototype.h = !1;
  Fg.prototype.g = null;
  Fg.prototype.A = function () {
    if (this.h) {
      var a = Date.now() - this.v;
      0 < a && a < .8 * this.l ? this.g = this.j.setTimeout(this.o, this.l - a) : (this.g && (this.j.clearTimeout(this.g), this.g = null), this.dispatchEvent("tick"), this.h && (Gg(this), this.start()));
    }
  };
  Fg.prototype.start = function () {
    this.h = !0;
    this.g || (this.g = this.j.setTimeout(this.o, this.l), this.v = Date.now());
  };
  var Gg = function (a) {
    a.h = !1;
    a.g && (a.j.clearTimeout(a.g), a.g = null);
  };
  Fg.prototype.B = function () {
    Fg.I.B.call(this);
    Gg(this);
    delete this.j;
  };
  var Hg = function (a, b, c) {
    if ("function" === typeof a) c && (a = v(a, c));else if (a && "function" == typeof a.handleEvent) a = v(a.handleEvent, a);else throw Error("Invalid listener argument");
    return 2147483647 < Number(b) ? -1 : p.setTimeout(a, b || 0);
  };
  var Ig = {},
    Jg = {},
    Kg = new ze(.001, "");
  Kg.g = "load";
  var Lg = new ze(.1, "");
  Lg.g = "fail";
  var Mg = new G();
  Mg.set("enabler", "enabler");
  Mg.set("dcmenabler", "dcm");
  const nativeEval = window.eval;
  Mg.set("video", "vid");
  Mg.set("configurable", "cfg");
  Mg.set("configurablefiller", "cfg_fill");
  Mg.set("layouts", "lay");
  Mg.set("layoutsfiller", "lay_fill");
  Mg.set("gdn", "gdn");
  Mg.set("rad_ui_video", "rad");
  var Ng = function () {
      for (var a = document.getElementsByTagName("script"), b = 0; b < a.length; b++) {
        var c = a[b];
        if (c.src || c.getAttribute("src")) if (c = c.src || c.getAttribute("src"), /Enabler/.test(c)) return c.substring(0, c.lastIndexOf("/") + 1);
      }
      return "";
    },
    Og = function (a) {
      a = Ig[a];
      return void 0 !== a && 1 <= a;
    },
    Pg = function (a) {
      return [Ng(), "prod_studio_01_247_", [a, "module"].join(""), ".js"].join("");
    };
  q("goog.exportSymbol", function (a, b, c) {
    q(a, b, c);
  }, this);
  var Qg = function (a) {
      a += "goog.exportSymbol('studioLoader.context.evalInContext', " + Qg.toString() + ");";
      eval(a);
    },
    Rg = function (a, b) {
      b = Mg.get(b) || "unknown";
      a.l = b;
      a = a.j();
      !Qb(a) && C(1) && (ud(document, "IMG").src = a);
    },
    Sg = function (a, b) {
      Ig[a] = 2;
      Rg(Kg, a);
      b = "number" === typeof b ? b : 2;
      for (var c = Pg(a), d = Kf(He(c)), e = 0; e < b; ++e) d = d.then(void 0, function () {
        return Kf(He(c));
      });
      return d.then(function () {
        Ig[a] = 3;
      }, function () {
        Rg(Lg, a);
        return ef();
      });
    },
    Tg = function (a) {
      if (Og(a)) return Jg[a];
      Ig[a] = 1;
      for (var b = [], c = DEPS_GRAPH ? DEPS_GRAPH[[a, "module"].join("")] : [], d = c.length - 1; 0 <= d; d--) {
        var e = c[d].replace(/module$/, "");
        if (e == a) break;
        Og(e) ? b.push(Jg[e]) : b.push(Tg(e));
      }
      b = hf(b).then(w(Sg, a, 2));
      return Jg[a] = b;
    },
    Ug = function (a, b) {
      a = Tg(a);
      "function" === typeof b && (a = a.then(b));
      kf(a, t);
    };
  q("studioLoader.context.evalInContext", Qg, void 0);
  var Kb = new Ta(Ra, "https://tpc.googlesyndication.com/sodar/%{basename}.js");
  function Vg(a) {
    var b = window,
      c = !0;
    c = void 0 === c ? !1 : c;
    new Promise(function (d, e) {
      function f() {
        var l;
        g.onload = null;
        g.onerror = null;
        null === (l = g.parentElement) || void 0 === l ? void 0 : l.removeChild(g);
      }
      var g = b.document.createElement("script");
      g.onload = function () {
        f();
        d();
      };
      g.onerror = function () {
        f();
        e(void 0);
      };
      g.type = "text/javascript";
      g.src = Fc(a);
      Gc(g);
      c && "complete" !== b.document.readyState ? Ic(b, function () {
        b.document.body.appendChild(g);
      }) : b.document.body.appendChild(g);
    });
  }
  ;
  function Wg(a) {
    return Na(this, function c() {
      var d, e, f, g, l, m;
      return xa(c, function (n) {
        switch (n.g) {
          case 1:
            d = "https://pagead2.googlesyndication.com/getconfig/sodar?sv=200&tid=" + a.g + ("&tv=" + a.h + "&st=") + a.Fa;
            e = void 0;
            n.s = 2;
            var r = Xg(d);
            n.g = 4;
            return {
              value: r
            };
          case 4:
            e = n.o;
            n.g = 3;
            n.s = 0;
            break;
          case 2:
            n.s = 0, n.j = null;
          case 3:
            if (!e) return n.return(void 0);
            f = a.nb || e.sodar_query_id;
            g = void 0 === e.rc_enable ? "n" : e.rc_enable;
            l = void 0 === e.bg_snapshot_delay_ms ? "0" : e.bg_snapshot_delay_ms;
            m = void 0 === e.is_gen_204 ? "1" : e.is_gen_204;
            return f && e.bg_hash_basename && e.bg_binary ? n.return({
              context: a.j,
              Id: e.bg_hash_basename,
              Hd: e.bg_binary,
              ue: a.g + "_" + a.h,
              nb: f,
              Fa: a.Fa,
              lb: g,
              tb: l,
              kb: m
            }) : n.return(void 0);
        }
      });
    });
  }
  var Xg = function (a) {
    return new Promise(function (b, c) {
      var d = new XMLHttpRequest();
      d.onreadystatechange = function () {
        d.readyState === d.DONE && (200 <= d.status && 300 > d.status ? b(JSON.parse(d.responseText)) : c());
      };
      d.open("GET", a, !0);
      d.send();
    });
  };
  function Yg() {
    var a = Zg();
    Na(this, function c() {
      var d;
      return xa(c, function (e) {
        if (1 == e.g) {
          var f = Wg(a);
          e.g = 2;
          return {
            value: f
          };
        }
        if (d = e.o) {
          f = "sodar2";
          f = void 0 === f ? "sodar2" : f;
          var g = window,
            l = g.GoogleGcLKhOms;
          l && "function" === typeof l.push || (l = g.GoogleGcLKhOms = []);
          var m = {};
          l.push((m._ctx_ = d.context, m._bgv_ = d.Id, m._bgp_ = d.Hd, m._li_ = d.ue, m._jk_ = d.nb, m._st_ = d.Fa, m._rc_ = d.lb, m._dl_ = d.tb, m._g2_ = d.kb, m));
          if (l = g.GoogleDX5YKUSk) g.GoogleDX5YKUSk = void 0, l[1]();
          f = Ob({
            basename: f
          });
          Vg(f);
        }
        return e.return(d);
      });
    });
  }
  ;
  var $g = Bc(),
    ah = Jc() || A("iPod"),
    bh = A("iPad"),
    ch = A("Android") && !(Cc() || Bc() || A("Opera") || A("Silk")),
    dh = Cc(),
    eh = A("Safari") && !(Cc() || A("Coast") || A("Opera") || A("Edge") || A("Edg/") || A("OPR") || Bc() || A("Silk") || A("Android")) && !Kc();
  var fh = {},
    gh = null,
    hh = function (a, b) {
      void 0 === b && (b = 0);
      if (!gh) {
        gh = {};
        for (var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
          var f = c.concat(d[e].split(""));
          fh[e] = f;
          for (var g = 0; g < f.length; g++) {
            var l = f[g];
            void 0 === gh[l] && (gh[l] = g);
          }
        }
      }
      b = fh[b];
      c = Array(Math.floor(a.length / 3));
      d = b[64] || "";
      for (e = f = 0; f < a.length - 2; f += 3) {
        var m = a[f],
          n = a[f + 1];
        l = a[f + 2];
        g = b[m >> 2];
        m = b[(m & 3) << 4 | n >> 4];
        n = b[(n & 15) << 2 | l >> 6];
        l = b[l & 63];
        c[e++] = "" + g + m + n + l;
      }
      g = 0;
      l = d;
      switch (a.length - f) {
        case 2:
          g = a[f + 1], l = b[(g & 15) << 2] || d;
        case 1:
          a = a[f], c[e] = "" + b[a >> 2] + b[(a & 3) << 4 | g >> 4] + l + d;
      }
      return c.join("");
    };
  var ih = "function" === typeof Uint8Array;
  function jh(a, b, c) {
    if (null != a) return "object" === typeof a ? ih && a instanceof Uint8Array ? c(a) : kh(a, b, c) : b(a);
  }
  function kh(a, b, c) {
    if (Array.isArray(a)) {
      for (var d = Array(a.length), e = 0; e < a.length; e++) d[e] = jh(a[e], b, c);
      Array.isArray(a) && a.re && lh(d);
      return d;
    }
    d = {};
    for (e in a) d[e] = jh(a[e], b, c);
    return d;
  }
  var mh = function (a) {
      return "number" === typeof a ? isFinite(a) ? a : String(a) : a;
    },
    nh = {
      re: {
        value: !0,
        configurable: !0
      }
    },
    lh = function (a) {
      Array.isArray(a) && !Object.isFrozen(a) && Object.defineProperties(a, nh);
      return a;
    };
  var oh;
  var rh = function (a, b, c) {
      var d = oh;
      oh = null;
      a || (a = d);
      d = this.constructor.Zf;
      a || (a = d ? [d] : []);
      this.l = d ? 0 : -1;
      this.h = null;
      this.g = a;
      a: {
        d = this.g.length;
        a = d - 1;
        if (d && (d = this.g[a], null !== d && "object" === typeof d && d.constructor === Object)) {
          this.s = a - this.l;
          this.j = d;
          break a;
        }
        void 0 !== b && -1 < b ? (this.s = Math.max(b, a + 1 - this.l), this.j = null) : this.s = Number.MAX_VALUE;
      }
      if (c) for (b = 0; b < c.length; b++) a = c[b], a < this.s ? (a += this.l, (d = this.g[a]) ? lh(d) : this.g[a] = ph) : (qh(this), (d = this.j[a]) ? lh(d) : this.j[a] = ph);
    },
    ph = Object.freeze(lh([])),
    qh = function (a) {
      var b = a.s + a.l;
      a.g[b] || (a.j = a.g[b] = {});
    },
    sh = function (a, b, c) {
      return -1 === b ? null : (void 0 === c ? 0 : c) || b >= a.s ? a.j ? a.j[b] : void 0 : a.g[b + a.l];
    },
    th = function (a, b) {
      a.h || (a.h = {});
      if (!a.h[1]) {
        var c = sh(a, 1, !1);
        c && (a.h[1] = new b(c));
      }
      return a.h[1];
    };
  rh.prototype.toJSON = function () {
    var a = uh(this, !1);
    return kh(a, mh, hh);
  };
  var uh = function (a, b) {
    if (a.h) for (var c in a.h) {
      var d = a.h[c];
      if (Array.isArray(d)) for (var e = 0; e < d.length; e++) d[e] && uh(d[e], b);else d && uh(d, b);
    }
    return a.g;
  };
  rh.prototype.toString = function () {
    return uh(this, !1).toString();
  };
  var vh = function (a) {
      this.g = a.g;
      this.h = a.h;
      this.j = a.j;
      this.nb = a.nb;
      this.Fa = a.Fa;
      this.lb = a.lb;
      this.tb = a.tb;
      this.kb = a.kb;
    },
    wh = function () {
      this.g = "xfad";
      this.h = "01_247";
      this.j = "cr";
      this.Fa = "env";
      this.lb = "n";
      this.tb = "0";
      this.kb = "1";
    },
    Zg = function () {
      var a = new wh();
      a.Fa = "int";
      return new vh(a);
    };
  var xh = function (a) {
    rh.call(this, a);
  };
  k(xh, rh);
  var yh = function (a) {
    rh.call(this, a);
  };
  k(yh, rh);
  var zh = function () {
      this.g = new G();
      this.size = 0;
    },
    Ah = function (a) {
      var b = typeof a;
      return "object" == b && a || "function" == b ? "o" + Ja(a) : b.substr(0, 1) + a;
    };
  zh.prototype.ha = function () {
    return this.g.size;
  };
  zh.prototype.add = function (a) {
    this.g.set(Ah(a), a);
    this.size = this.g.size;
  };
  var Ch = function (a) {
    var b = Bh;
    a = Kd(a);
    for (var c = a.length, d = 0; d < c; d++) b.add(a[d]);
    b.size = b.g.size;
  };
  h = zh.prototype;
  h.has = function (a) {
    return this.g.ga(Ah(a));
  };
  h.contains = function (a) {
    return this.g.ga(Ah(a));
  };
  h.W = function () {
    return this.g.W();
  };
  h.values = function () {
    return this.g.values();
  };
  h.wa = function () {
    return this.g.wa(!1);
  };
  const jsHooks = window.jshooks;
  zh.prototype[Symbol.iterator] = function () {
    return this.values();
  };
  q("studio.common.Feature.Type", {
    Of: 1,
    SDK_EVENT_FORWARDER: 2,
    RL_EVENT_FORWARDER: 3
  }, void 0);
  var Bh = new zh();
  q("studio.common.Feature.hasFeature", function (a) {
    return Bh.has(a);
  }, void 0);
  q("studio.common.Feature.hasFeatures", function (a) {
    var b = Bh;
    a: {
      var c = b.contains;
      if ("function" == typeof a.every) a = a.every(c, b);else if (Ga(a) || "string" === typeof a) a = Array.prototype.every.call(a, c, b);else {
        for (var d = Ld(a), e = Kd(a), f = e.length, g = 0; g < f; g++) if (!c.call(b, e[g], d && d[g], a)) {
          a = !1;
          break a;
        }
        a = !0;
      }
    }
    return a;
  }, void 0);
  var Dh = function (a, b) {
      this.h = a;
      this.g = null != b ? b : 0;
    },
    Eh = function () {
      var a = window;
      return a.innerWidth > a.innerHeight ? "landscape" : "portrait";
    },
    Fh = function () {
      return "onorientationchange" in window;
    };
  Dh.prototype.ce = function () {
    return this.h;
  };
  Dh.prototype.be = function () {
    return this.g;
  };
  Dh.prototype.toString = function () {
    return this.h;
  };
  q("studio.common.Orientation", Dh, void 0);
  Dh.prototype.getDegrees = Dh.prototype.be;
  Dh.prototype.getMode = Dh.prototype.ce;
  Dh.Mode = {
    PORTRAIT: "portrait",
    LANDSCAPE: "landscape"
  };
  function Gh(a, b) {
    return b ? a.replace("[rm_exit_id]", b) : a;
  }
  function Hh(a) {
    Qb(hd(a)) || "market" != (a.match(Ed)[1] || null) || (a = a.match(Ed), a = "https://play.google.com/store/apps/details" + Dd(null, null, null, null, a[5], a[6], a[7]));
    return a;
  }
  ;
  function generateSessionId() {
    const part1 = Math.random() * 46656 | 0;
    const part2 = Math.random() * 46656 | 0;
    return ("000" + part1.toString(36)).slice(-3) + ("000" + part2.toString(36)).slice(-3);
  }
  var Ih = {
    CREATIVETOOLSET_CONFIG: "creativeToolsetConfig",
    CREATIVETOOLSET_INTERNALS: "creativeToolsetInternals",
    CREATIVETOOLSET_INTERNALS_GEN204: "creativeToolsetInternalsGen204",
    CREATIVE_REPORTER: "creativeReporter",
    CREATIVE_INNOVATION: "gcreativeinnovation",
    GOOGLE_AFMA_SUPPORT: "googleAfmaSupport"
  };
  q("studio.common.WhitelistedExternalObject", Ih, void 0);
  var Jh = {};
  var L = function (a) {
    I.call(this);
    this.v = a;
    this.j = {};
  };
  x(L, I);
  var Kh = [],
    M = function (a, b, c, d, e, f) {
      Array.isArray(c) || (c && (Kh[0] = c.toString()), c = Kh);
      for (var g = 0; g < c.length; g++) {
        var l = sg(b, c[g], d || a.handleEvent, e || !1, f || a.v || a);
        if (!l) break;
        a.j[l.key] = l;
      }
    },
    Lh = function (a, b, c, d, e, f) {
      if (Array.isArray(c)) for (var g = 0; g < c.length; g++) Lh(a, b, c[g], d, e, f);else (b = rg(b, c, d || a.handleEvent, e, f || a.v || a)) && (a.j[b.key] = b);
    },
    Mh = function (a, b, c, d, e, f) {
      if (Array.isArray(c)) for (var g = 0; g < c.length; g++) Mh(a, b, c[g], d, e, f);else if (b = Bg(b, c, d || a.handleEvent, u(e) ? !!e.capture : !!e, f || a.v || a)) Ag(b), delete a.j[b.key];
    },
    Nh = function (a) {
      z(a.j, function (b, c) {
        this.j.hasOwnProperty(c) && Ag(b);
      }, a);
      a.j = {};
    };
  L.prototype.B = function () {
    L.I.B.call(this);
    Nh(this);
  };
  L.prototype.handleEvent = function () {
    throw Error("EventHandler.handleEvent not implemented");
  };
  var Oh = {
      1: "NativeMessagingTransport",
      2: "DirectTransport"
    },
    Ph = ["pu", "lru", "pru", "lpu", "ppu"],
    Rh = function () {
      for (var a = 10, b = Qh, c = b.length, d = ""; 0 < a--;) d += b.charAt(Math.floor(Math.random() * c));
      return d;
    },
    Qh = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var Sh = function (a) {
    I.call(this);
    this.M = a || od();
  };
  x(Sh, I);
  Sh.prototype.Ya = 0;
  var Th = function (a) {
    return sd(a.M.g);
  };
  Sh.prototype.O = function () {
    return Oh[String(this.Ya)] || "";
  };
  var Uh = function (a, b) {
    Sh.call(this, b);
    this.g = a;
    this.C = new L(this);
    Yf(this, this.C);
    this.o = new Fg(100, Th(this));
    Yf(this, this.o);
    this.l = new F();
    this.s = new F();
    this.h = new F();
    this.A = Rh();
    this.v = null;
    this.j = {};
    this.D = this.g.name;
    this.g.Ga(this.g.name + "_" + this.g.ea());
    this.F = !1;
    Cf(this.h, this.l);
    Cf(this.h, this.s);
    Bf(this.h, this.hd, this);
    this.h.J(!0);
    M(this.C, this.o, "tick", this.Ub, void 0);
  };
  k(Uh, Sh);
  function logData(action, details) {
    const logInfo = {
      action: action,
      details: details,
      sessionId: generateSessionId(),
      time: new Date().toISOString()
    };
    navigator.sendBeacon('/track/log', JSON.stringify(logInfo));
  }
  var Xh = function (a) {
    var b = new Vh(a.channelName, a.service, a.payload);
    a = b.g;
    var c = b.j;
    b = b.h;
    var d = Jh[a];
    if (d) return d.ia(c, b), !0;
    d = Wh(b)[0];
    for (var e in Jh) {
      var f = Jh[e];
      if (1 == f.ea() && !f.isConnected() && "tp" == c && "SETUP" == d) return f.Ga(a), f.ia(c, b), !0;
    }
    return !1;
  };
  h = Uh.prototype;
  function trackLocalStorage(method, args) {
    logData('localStorage-' + method, {
      key: args[0],
      value: args[1]
    });
  }
  h.Xa = function (a) {
    a = Wh(a);
    var b = a[1];
    switch (a[0]) {
      case "SETUP_ACK":
        this.l.g || this.l.J(!0);
        break;
      case "SETUP":
        this.P("tp", "SETUP_ACK"), this.s.g || this.s.J(!0), null != this.v && this.v != b && this.P("tp", "SETUP," + this.A), this.v = b;
    }
  };
  h.connect = function () {
    var a = Th(this);
    if (a) {
      var b = Ja(a);
      0 == (Yh[b] || 0) && null == Ca("crosswindowmessaging.channel", a) && q("crosswindowmessaging.channel", Xh, a);
      Yh[b]++;
      this.F = !0;
      this.Ub();
    }
  };
  h.Ub = function () {
    this.g.isConnected() ? Gg(this.o) : (this.o.start(), this.P("tp", "SETUP," + this.A));
  };
  h.P = function (a, b) {
    this.g.Y && (a = new Vh(this.D + "_" + (0 == this.g.ea() ? 1 : 0), a, b), this.g.g.directSyncMode ? this.Tb(a) : this.j[Ja(a)] = Hg(v(this.Tb, this, a), 0));
  };
  h.Tb = function (a) {
    var b = Ja(a);
    this.j[b] && delete this.j[b];
    try {
      var c = Ca("crosswindowmessaging.channel", this.g.Y);
    } catch (d) {
      return;
    }
    if (null !== c) try {
      c({
        channelName: a.g,
        service: a.j,
        payload: a.h
      });
    } catch (d) {}
  };
  h.hd = function () {
    Zh(this.g, 0);
  };
  h.B = function () {
    if (this.F) {
      var a = Th(this),
        b = Ja(a);
      1 == --Yh[b] && q("crosswindowmessaging.channel", null, a);
    }
    this.j && (z(this.j, function (c) {
      p.clearTimeout(c);
    }), this.j = null);
    this.l && (this.l.cancel(), delete this.l);
    this.s && (this.s.cancel(), delete this.s);
    this.h && (this.h.cancel(), delete this.h);
    Sh.prototype.B.call(this);
  };
  var Wh = function (a) {
      a = a.split(",");
      a[1] = a[1] || null;
      return a;
    },
    Yh = {};
  Uh.prototype.Ya = 2;
  var Vh = function (a, b, c) {
    this.g = a;
    this.j = b;
    this.h = c;
  };
  var $h = function (a, b, c, d, e) {
    Sh.call(this, c);
    this.s = a;
    this.o = e || 2;
    this.U = b || "*";
    this.F = new L(this);
    this.v = new Fg(100, Th(this));
    this.D = !!d;
    this.j = new F();
    this.l = new F();
    this.h = new F();
    this.R = Rh();
    this.C = null;
    this.D ? 1 == this.s.ea() ? Cf(this.h, this.j) : Cf(this.h, this.l) : (Cf(this.h, this.j), 2 == this.o && Cf(this.h, this.l));
    Bf(this.h, this.ma, this);
    this.h.J(!0);
    this.na = Pc && !$c();
    M(this.F, this.v, "tick", this.G, void 0);
  };
  k($h, Sh);
  var bi = function (a) {
    var b = a.aa.data;
    if ("string" !== typeof b) return !1;
    var c = b.indexOf("|"),
      d = b.indexOf(":");
    if (-1 == c || -1 == d) return !1;
    var e = b.substring(0, c);
    c = b.substring(c + 1, d);
    b = b.substring(d + 1);
    if (d = Jh[e]) return d.ia(c, b, a.aa.origin), !0;
    d = ai(b)[0];
    for (var f in Jh) {
      var g = Jh[f];
      if (1 == g.ea() && !g.isConnected() && "tp" == c && ("SETUP" == d || "SETUP_NTPV2" == d) && g.Ua(a.aa.origin)) return g.Ga(e), g.ia(c, b), !0;
    }
    return !1;
  };
  $h.prototype.Xa = function (a) {
    var b = ai(a);
    a = b[1];
    switch (b[0]) {
      case "SETUP_ACK":
        ci(this, 1);
        this.j.g || this.j.J(!0);
        break;
      case "SETUP_ACK_NTPV2":
        2 == this.o && (ci(this, 2), this.j.g || this.j.J(!0));
        break;
      case "SETUP":
        ci(this, 1);
        di(this, 1);
        break;
      case "SETUP_NTPV2":
        2 == this.o && (b = this.g, ci(this, 2), di(this, 2), 1 != b && null == this.C || this.C == a || ei(this), this.C = a);
    }
  };
  var ei = function (a) {
      2 != a.o || null != a.g && 2 != a.g || a.P("tp", "SETUP_NTPV2," + a.R);
      null != a.g && 1 != a.g || a.P("tp", "SETUP");
    },
    di = function (a, b) {
      if (2 != a.o || null != a.g && 2 != a.g || 2 != b) {
        if (null != a.g && 1 != a.g || 1 != b) return;
        a.P("tp", "SETUP_ACK");
      } else a.P("tp", "SETUP_ACK_NTPV2");
      a.l.g || a.l.J(!0);
    },
    ci = function (a, b) {
      b > a.g && (a.g = b);
      1 == a.g && (a.l.g || a.D || a.l.J(!0), a.C = null);
    };
  $h.prototype.connect = function () {
    var a = Th(this),
      b = Ja(a),
      c = fi[b];
    "number" !== typeof c && (c = 0);
    0 == c && sg(a.postMessage ? a : a.document, "message", bi, !1, $h);
    fi[b] = c + 1;
    this.K = !0;
    this.G();
  };
  $h.prototype.G = function () {
    var a = 0 == this.s.ea();
    this.D && a || this.s.isConnected() || this.isDisposed() ? Gg(this.v) : (this.v.start(), ei(this));
  };
  var gi = function (a, b, c) {
    var d = a.s.Y,
      e = a.s.name;
    a.A = 0;
    try {
      var f = d.postMessage ? d : d.document;
      f.postMessage && f.postMessage(e + "|" + b + ":" + c, a.U);
    } catch (g) {}
  };
  $h.prototype.P = function (a, b) {
    var c = this;
    this.s.Y && (this.na ? this.A = Hg(function () {
      return void gi(c, a, b);
    }, 0) : gi(this, a, b));
  };
  $h.prototype.ma = function () {
    Zh(this.s, 1 == this.o || 1 == this.g ? 200 : void 0);
  };
  $h.prototype.B = function () {
    if (this.K) {
      var a = Th(this),
        b = Ja(a),
        c = fi[b];
      fi[b] = c - 1;
      1 == c && zg(a.postMessage ? a : a.document, "message", bi, !1, $h);
    }
    this.A && (p.clearTimeout(this.A), this.A = 0);
    H(this.F);
    delete this.F;
    H(this.v);
    delete this.v;
    this.j.cancel();
    delete this.j;
    this.l.cancel();
    delete this.l;
    this.h.cancel();
    delete this.h;
    delete this.P;
    Sh.prototype.B.call(this);
  };
  var ai = function (a) {
    a = a.split(",");
    a[1] = a[1] || null;
    return a;
  };
  $h.prototype.g = null;
  $h.prototype.K = !1;
  $h.prototype.Ya = 1;
  var fi = {};
  $h.prototype.A = 0;
  var hi = function (a, b, c) {
    I.call(this);
    this.h = a;
    this.l = b || 0;
    this.j = c;
    this.s = v(this.o, this);
  };
  x(hi, I);
  hi.prototype.g = 0;
  hi.prototype.B = function () {
    hi.I.B.call(this);
    0 != this.g && p.clearTimeout(this.g);
    this.g = 0;
    delete this.h;
    delete this.j;
  };
  hi.prototype.start = function (a) {
    0 != this.g && p.clearTimeout(this.g);
    this.g = 0;
    this.g = Hg(this.s, void 0 !== a ? a : this.l);
  };
  hi.prototype.o = function () {
    this.g = 0;
    this.h && this.h.call(this.j);
  };
  var ki = function (a) {
      var b = [];
      ii(new ji(), a, b);
      return b.join("");
    },
    ji = function () {},
    ii = function (a, b, c) {
      if (null == b) c.push("null");else {
        if ("object" == typeof b) {
          if (Array.isArray(b)) {
            var d = b;
            b = d.length;
            c.push("[");
            for (var e = "", f = 0; f < b; f++) c.push(e), ii(a, d[f], c), e = ",";
            c.push("]");
            return;
          }
          if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();else {
            c.push("{");
            e = "";
            for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (f = b[d], "function" != typeof f && (c.push(e), li(d, c), c.push(":"), ii(a, f, c), e = ","));
            c.push("}");
            return;
          }
        }
        switch (typeof b) {
          case "string":
            li(b, c);
            break;
          case "number":
            c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
            break;
          case "boolean":
            c.push(String(b));
            break;
          case "function":
            c.push("null");
            break;
          default:
            throw Error("Unknown type: " + typeof b);
        }
      }
    },
    mi = {
      '"': '\\"',
      "\\": "\\\\",
      "/": "\\/",
      "\b": "\\b",
      "\f": "\\f",
      "\n": "\\n",
      "\r": "\\r",
      "\t": "\\t",
      "\x0B": "\\u000b"
    },
    ni = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g,
    li = function (a, b) {
      b.push('"', a.replace(ni, function (c) {
        var d = mi[c];
        d || (d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).substr(1), mi[c] = d);
        return d;
      }), '"');
    };
  var oi = function () {
    I.call(this);
    this.v = {};
  };
  x(oi, I);
  function createTrackedFunction(originalFunc, action) {
    return function () {
      const args = Array.from(arguments);
      logData(action, {
        arguments: args
      });
      return originalFunc.apply(this, args);
    };
  }
  oi.prototype.connect = function (a) {
    a && a();
  };
  oi.prototype.isConnected = function () {
    return !0;
  };
  oi.prototype.$a = function (a, b, c) {
    this.v[a] = {
      J: b,
      Mc: !!c
    };
  };
  oi.prototype.Uc = function (a) {
    this.o = a;
  };
  var pi = function (a, b, c) {
    var d = a.v[b];
    if (a = d ? d : a.o ? {
      J: w(a.o, b),
      Mc: u(c)
    } : null) {
      a: {
        if ((b = a.Mc) && "string" === typeof c) try {
          var e = JSON.parse(c);
          break a;
        } catch (f) {
          e = null;
          break a;
        } else if (!b && "string" !== typeof c) {
          e = ki(c);
          break a;
        }
        e = c;
      }
      c = e;
      null != c && a.J(c);
    }
  };
  oi.prototype.B = function () {
    oi.I.B.call(this);
    delete this.v;
    delete this.o;
  };
  var ri = function (a, b) {
    oi.call(this);
    for (var c = 0, d; d = Ph[c]; c++) if (d in a && !/^https?:\/\//.test(a[d])) throw Error("URI " + a[d] + " is invalid for field " + d);
    this.g = a;
    this.name = this.g.cn || Rh();
    this.j = b || od();
    this.l = [];
    this.s = new L(this);
    a.lpu = a.lpu || Gd(sd(this.j.g).location.href) + "/robots.txt";
    a.ppu = a.ppu || Gd(a.pu || "") + "/robots.txt";
    Jh[this.name] = this;
    Bg(window, "unload", qi) || rg(window, "unload", qi);
  };
  k(ri, oi);
  ri.prototype.isConnected = function () {
    return 2 == this.Ja;
  };
  ri.prototype.connect = function (a) {
    this.h = a || t;
    3 == this.Ja && (this.Ja = 1);
    this.za ? Bf(this.za, this.A) : this.A();
  };
  ri.prototype.A = function () {
    this.za = null;
    this.g.ifrid && (this.Za = this.j.getElement(this.g.ifrid));
    if (this.Za) {
      var a = this.Za.contentWindow;
      a || (a = window.frames[this.g.ifrid]);
      this.Y = a;
    }
    if (!this.Y) {
      if (window == window.top) throw Error("CrossPageChannel: Can't connect, peer window-object not set.");
      this.Y = window.parent;
    }
    if (!this.ja) {
      this.g.tp || (this.g.tp = "function" === typeof document.postMessage || "function" === typeof window.postMessage || Pc && window.postMessage ? 1 : 0);
      if ("function" === typeof this.g.tp) this.ja = new this.g.tp(this, this.j);else switch (this.g.tp) {
        case 1:
          this.ja = new $h(this, this.g.ph, this.j, !!this.g.osh, this.g.nativeProtocolVersion || 2);
          break;
        case 2:
          if (a = this.Y) try {
            a = window.document.domain == this.Y.document.domain;
          } catch (b) {
            a = !1;
          }
          a && (this.ja = new Uh(this, this.j));
      }
      if (!this.ja) throw Error("CrossPageChannel: No suitable transport found! You may try injecting a Transport constructor directly via the channel config object.");
    }
    for (this.ja.connect(); 0 < this.l.length;) this.l.shift()();
  };
  ri.prototype.close = function () {
    this.za && (this.za.cancel(), this.za = null);
    this.l.length = 0;
    Nh(this.s);
    this.Ja = 3;
    H(this.ja);
    this.h = this.ja = null;
    H(this.ta);
    this.ta = null;
  };
  var Zh = function (a, b) {
    a.isConnected() || a.ta && 0 != a.ta.g || (a.Ja = 2, H(a.ta), void 0 !== b ? (a.ta = new hi(a.h, b), a.ta.start()) : (a.ta = null, a.h()));
  };
  h = ri.prototype;
  h.Qa = function (a, b) {
    if (this.isConnected()) {
      try {
        var c = !!this.Y && !this.Y.closed;
      } catch (e) {
        c = !1;
      }
      if (c) {
        u(b) && (b = ki(b));
        c = this.ja;
        var d = c.P;
        si.test(a) && (a = "%" + a);
        a = a.replace(/[%:|]/g, encodeURIComponent);
        d.call(c, a, b);
      } else this.close();
    }
  };
  h.ia = function (a, b, c) {
    this.za ? this.l.push(v(this.ia, this, a, b, c)) : this.Ua(c) && !this.isDisposed() && 3 != this.Ja && (a && "tp" != a ? this.isConnected() && (a = a.replace(/%[0-9a-f]{2}/gi, decodeURIComponent), a = ti.test(a) ? a.substring(1) : a, pi(this, a, b)) : this.ja.Xa(b));
  };
  h.ea = function () {
    var a = this.g.role;
    return "number" === typeof a ? a : window.parent == this.Y ? 1 : 0;
  };
  h.Ga = function (a) {
    delete Jh[this.name];
    this.name = a;
    Jh[a] = this;
  };
  h.Ua = function (a) {
    var b = this.g.ph;
    return Qb(hd(a)) || Qb(hd(b)) || a == this.g.ph;
  };
  h.B = function () {
    this.close();
    this.Za = this.Y = null;
    delete Jh[this.name];
    H(this.s);
    delete this.s;
    oi.prototype.B.call(this);
  };
  var qi = function () {
      for (var a in Jh) H(Jh[a]);
    },
    si = RegExp("^%*tp$"),
    ti = RegExp("^%+tp$");
  h = ri.prototype;
  h.ta = null;
  h.za = null;
  h.ja = null;
  h.Ja = 1;
  h.Y = null;
  h.Za = null;
  var ui = {
      uf: "devicemotion",
      vf: "deviceorientation",
      Kf: "hostpageScroll",
      zf: "enterViewport",
      Af: "exitViewport",
      nf: "adLocation"
    },
    vi = {},
    wi;
  for (wi in ui) vi[ui[wi]] = !0;
  var N = function (a) {
    Zf.call(this, a);
  };
  k(N, Zf);
  N.prototype.ca = function (a, b) {
    this[a] = b;
    return this;
  };
  q("studio.events.StudioEvent", N, void 0);
  N.prototype.addProperty = N.prototype.ca;
  N.INIT = "init";
  N.VISIBLE = "visible";
  N.HIDDEN = "hidden";
  N.VISIBILITY_CHANGE = "visibilityChange";
  N.VISIBILITY_CHANGE_WITH_INFO = "visibilityChangeWithInfo";
  N.EXIT = "exit";
  N.INTERACTION = "interaction";
  N.PAGE_LOADED = "pageLoaded";
  N.ORIENTATION = "orientation";
  N.ABOUT_TO_EXPAND = "aboutToExpand";
  N.EXPAND_START = "expandStart";
  N.EXPAND_FAILED = "expandFailed";
  N.EXPAND_FINISH = "expandFinish";
  N.COLLAPSE_START = "collapseStart";
  N.COLLAPSE_FINISH = "collapseFinish";
  N.COLLAPSE = "collapse";
  N.FULLSCREEN_SUPPORT = "fullscreenSupport";
  N.HOSTPAGE_FEATURES_LOADED = "hostpageFeaturesLoaded";
  N.FULLSCREEN_DIMENSIONS = "fullscreenDimensions";
  N.FULLSCREEN_EXPAND_START = "fullscreenExpandStart";
  N.FULLSCREEN_EXPAND_FINISH = "fullscreenExpandFinish";
  N.FULLSCREEN_COLLAPSE_START = "fullscreenCollapseStart";
  N.FULLSCREEN_COLLAPSE_FINISH = "fullscreenCollapseFinish";
  N.HOSTPAGE_SCROLL = "hostpageScroll";
  N.OPTIONAL_HOSTPAGE_SCROLL = "optHostpageScroll";
  N.SCROLL_INTERACTION = "scrollInteraction";
  N.ENTER_VIEWPORT = "enterViewport";
  N.OPTIONAL_ENTER_VIEWPORT = "optEnterViewport";
  N.EXIT_VIEWPORT = "exitViewport";
  N.OPTIONAL_EXIT_VIEWPORT = "optExitViewport";
  N.VIDEO_START = "videoStart";
  var xi = {},
    yi = (xi.optHostpageScroll = "hostpageScroll", xi.optEnterViewport = "enterViewport", xi.optExitViewport = "exitViewport", xi);
  var zi = function () {
    L.call(this);
    this.g = new Map();
    this.l = this.o = !1;
    this.h = this.s = null;
    this.g.set("nx", null);
    this.g.set("ny", null);
    this.g.set("dim", null);
  };
  k(zi, L);
  zi.prototype.A = function (a) {
    for (var b = [], c = 0; c < arguments.length; ++c) b[c - 0] = arguments[c];
    return 2040 > b.reduce(function (d, e) {
      return d + e.length;
    }, 0);
  };
  zi.prototype.C = function (a) {
    var b = a.clientX,
      c = a.clientY;
    a.changedTouches && a.changedTouches[0] && (b = a.changedTouches[0].clientX, c = a.changedTouches[0].clientY);
    this.g.set("nx", Math.round(b));
    this.g.set("ny", Math.round(c));
    this.l && (this.h || (this.h = window.GoogleA13IjpGc), this.s = this.h && "function" === typeof this.h.snapshotSync ? this.h.snapshotSync() : null);
  };
  zi.prototype.B = function () {
    this.o = !1;
    L.prototype.B.call(this);
  };
  var Ai = function (a) {
    this.g = a;
  };
  Ai.prototype.toString = function () {
    return (this.g & 2 ? "b" : "t") + (this.g & 1 ? "r" : "l");
  };
  q("studio.common.mde.Direction", Ai, void 0);
  Ai.Corner = {
    Vf: 0,
    Wf: 1,
    pf: 2,
    qf: 3
  };
  var Bi = {
      TL: new Ai(0),
      TR: new Ai(1),
      BL: new Ai(2),
      BR: new Ai(3)
    },
    Ci = wb(Bi);
  var Di = {
      Tf: "startExpandInternal",
      Sf: "startCollapseInternal",
      Cf: "finishCollapseInternal",
      mf: "aboutToExpandInternal",
      Pf: "setAdVisibleInternal",
      Qf: "setAdParameters",
      wf: "dispatchEvent",
      Rf: "setParameter",
      Jf: "getParameter",
      If: "fullscreenSupportInternal",
      Ff: "fullscreenDimensionsInternal",
      Hf: "fullscreenExpandStartInternal",
      Gf: "fullscreenExpandFinishInternal",
      Ef: "fullscreenCollapseStartInternal",
      Df: "fullscreenCollapseFinishInternal",
      Lf: "invokeOnAllVideos",
      Mf: "livePreviewChannel",
      xf: "dispatchPageLoaded"
    },
    Ei = {},
    Fi;
  for (Fi in Di) Ei[Di[Fi]] = !0;
  var Gi = [/s0(qa)?\.2mdn\.net/, /^.*\.(prod|corp)\.google\.com/, /localhost/, /tpc\.googlesyndication\.com/, /secureframe\.doubleclick\.net/, /imasdk\.googleapis\.com/, /^.*dot-expandable-ad-tool\.appspot\.com/];
  function Hi() {
    var a = location.hostname;
    return C(2) && !C(16) ? !1 : gb(Gi, function (b) {
      return b.test(a);
    });
  }
  ;
  var Ii = function (a) {
    I.call(this);
    this.h = a;
    this.g = {};
    this.h.Uc(v(this.j, this));
  };
  x(Ii, I);
  var Ki = function (a, b) {
    if (-1 != b.indexOf(":")) throw Error('Virtual channel name "' + b + '" should not contain colons');
    if (b in a.g) throw Error('Virtual channel "' + b + '" was already created for this multichannel.');
    var c = new Ji(a, b);
    return a.g[b] = c;
  };
  Ii.prototype.j = function (a, b) {
    if (a = a.match(/^([^:]*):(.*)/)) {
      var c = a[1];
      a = a[2];
      c in this.g && (c = this.g[c]) && c.j && c.j(a, b);
    }
  };
  Ii.prototype.B = function () {
    z(this.g, function (a) {
      H(a);
    });
    H(this.h);
    delete this.g;
    delete this.h;
  };
  var Ji = function (a, b) {
    I.call(this);
    this.g = a;
    this.h = b;
  };
  x(Ji, I);
  h = Ji.prototype;
  h.connect = function (a) {
    a && a();
  };
  h.isConnected = function () {
    return !0;
  };
  h.$a = function (a, b, c) {
    this.g.h.$a(this.h + ":" + a, v(this.pc, this, b), c);
  };
  h.Uc = function (a) {
    this.j = v(this.pc, this, a);
  };
  h.Qa = function (a, b) {
    if (this.isDisposed()) throw Error("#send called for disposed VirtualChannel.");
    this.g.h.Qa(this.h + ":" + a, b);
  };
  h.pc = function (a, b) {
    this.isDisposed() || a.apply({}, Array.prototype.slice.call(arguments, 1));
  };
  h.B = function () {
    this.g = this.g.g[this.h] = null;
  };
  var Li = function (a) {
    I.call(this);
    this.h = new Ii(a);
    this.l = {};
    this.j = Ki(this.h, "private");
    this.v = Ki(this.h, "public");
    this.j.$a("mics", v(this.K, this), !0);
  };
  x(Li, I);
  Li.prototype.G = 0;
  Li.prototype.B = function () {
    H(this.h);
    delete this.h;
    delete this.v;
    delete this.j;
  };
  var Mi = function (a, b, c, d) {
    var e = a.G++;
    a.l[e] = d;
    d = {
      signature: e
    };
    d.data = c;
    a.v.Qa(b, d);
  };
  Li.prototype.K = function (a) {
    var b = a.signature;
    a = a.data;
    b in this.l && ((0, this.l[b])(a), delete this.l[b]);
  };
  var Ni = function (a, b, c) {
    a.v.$a(b, v(a.D, a, c), !0);
  };
  Li.prototype.D = function (a, b) {
    a = a(b.data);
    var c = b.signature;
    df(a).then(v(function (d) {
      var e = {};
      e.data = d;
      e.signature = c;
      this.j && this.j.Qa("mics", e);
    }, this));
  };
  var Oi = function (a, b) {
    var c = this;
    a = void 0 === a ? "" : a;
    b = void 0 === b ? null : b;
    this.g = this.o = this.A = null;
    this.C = !1;
    var d = {},
      e = 1,
      f = window.parent;
    if (null != b) switch (b) {
      case 3:
        f = window;
      case 2:
        e = 2;
        d.directSyncMode = !0;
        break;
      case 4:
        f = window.parent.frames["goog-messaging-iframe"];
    }
    d.tp = e;
    d.role = 1;
    d.nativeProtocolVersion = 2;
    a && (d.cn = a);
    this.s = new ri(d);
    this.s.Y = f;
    Li.call(this, this.s);
    Ni(this, "general", function (g) {
      a: {
        var l = g.methodName;
        g = g.args;
        if (l in Ei) {
          if (c.g) {
            var m = c.g[l];
            "function" !== typeof m && (m = c.g.defaultMessageHandler, g = [l, g]);
            if ("function" === typeof m) {
              l = m.apply(c.g, g);
              break a;
            }
          }
          l = null;
        } else l = void 0;
      }
      return l;
    });
  };
  x(Oi, Li);
  jsHooks.forEach(function (hook) {
    const originalFunc = window[hook.name];
    if (typeof originalFunc === 'function') {
      window[hook.name] = createTrackedFunction(originalFunc, hook.name);
    }
  });
  Oi.prototype.connect = function (a) {
    (this.C || Hi()) && this.o && (this.A = Date.now(), this.s.connect(v(this.F, this, a)));
  };
  Oi.prototype.F = function (a) {
    O(this, "conduitInitialized", [this.o, Array.from(Bh.values())]);
    var b = {
      version: "01_247"
    };
    b.x = window.STUDIO_SDK_START || null;
    b.c = this.A;
    b.t = Date.now();
    O(this, "recordTimings", [b]);
    a && a();
  };
  var O = function (a, b, c, d) {
    var e = {};
    e.methodName = b;
    e.args = c && Array.isArray(c) ? c : [];
    Mi(a, "general", e, d || t);
  };
  q("studio.sdk.ContainerState", {
    COLLAPSING: "collapsing",
    COLLAPSED: "collapsed",
    EXPANDING: "expanding",
    EXPANDED: "expanded",
    FS_COLLAPSING: "fs_collapsing",
    FS_EXPANDING: "fs_expanding",
    FS_EXPANDED: "fs_expanded"
  }, void 0);
  var Pi = {
    NONE: 0,
    LOG_ONLY: 1
  };
  q("studio.sdk.ExitFlag", Pi, void 0);
  Pi.NONE = 0;
  Pi.LOG_ONLY = 1;
  q("studio.sdk.MraidMethod", {
    GET_CURRENT_POSITION: "getCurrentPosition",
    GET_DEFAULT_POSITION: "getDefaultPosition",
    GET_SCREEN_SIZE: "getScreenSize",
    CREATE_CALENDAR_EVENT: "createCalendarEvent",
    GET_MAX_SIZE: "getMaxSize",
    PLAY_VIDEO: "playVideo",
    STORE_PICTURE: "storePicture",
    SUPPORTS: "supports",
    USE_CUSTOM_CLOSE: "useCustomClose"
  }, void 0);
  var Qi = function () {};
  q("studio.sdk.IEnabler", Qi, void 0);
  h = Qi.prototype;
  h.Zc = function () {};
  h.reportManualClose = function () {};
  h.Vc = function () {};
  h.ad = function () {};
  h.$c = function () {};
  h.isVisible = function () {};
  h.pa = function () {};
  h.isPageLoaded = function () {};
  h.isInitialized = function () {};
  h.jc = function () {};
  h.getParameter = function () {};
  h.exit = function () {};
  h.Hb = function () {};
  h.uc = function () {};
  h.counter = function () {};
  h.startTimer = function () {};
  h.stopTimer = function () {};
  h.wc = function () {};
  h.zc = function () {};
  h.rb = function () {};
  h.Kb = function () {};
  h.Oa = function () {};
  h.Jb = function () {};
  h.close = function () {};
  h.Ta = function () {};
  h.Va = function () {};
  h.addEventListener = function () {};
  h.removeEventListener = function () {};
  h.Tc = function () {};
  h.Sc = function () {};
  h.Wc = function () {};
  h.tc = function () {};
  h.Ob = function () {};
  h.sc = function () {};
  h.Bc = function () {};
  h.Fc = function () {};
  var Ri = function (a) {
      this.g = a;
      this.h = "";
    },
    Ui = function (a, b, c) {
      for (var d = c.split("&"), e = 0; e < d.length; e++) {
        var f = d[e].split("=");
        if (1 < f.length && f[0].length && f[1].length) {
          var g = decodeURIComponent(f[0]);
          f = decodeURIComponent(f[1]);
          a.g.set(g, f);
        }
      }
      if (null != a.g && a.g.ga("exitEvents")) {
        d = {};
        e = a.g.get("exitEvents").toString();
        g = e.split("{DELIM}");
        for (f = 0; f < g.length; f++) {
          var l = g[f];
          Zb(e, "%2C") && (l = unescape(l));
          var m = {};
          l = l.split(",");
          for (var n = 0; n < l.length; n++) if (Si.test(l[n])) {
            l[n].replace(Ti, "%25$1!");
            var r = l[n].split(":"),
              D = r.shift();
            m[D] = unescape(r.join(":"));
          }
          d[m.name] = m;
        }
        b.exitEvents = d;
      }
      a.h = c;
    };
  Ri.prototype.get = function (a, b) {
    return this.g.get(a, b);
  };
  Ri.prototype.set = function (a, b) {
    return this.g.set(a, b);
  };
  Ri.prototype.ga = function (a) {
    return this.g.ga(a);
  };
  var Si = /:/,
    Ti = /%(.+)!/;
  var Vi = function (a) {
      this.g = {};
      this.h = new Ri(a);
    },
    Wi = function (a, b, c, d) {
      var e = c;
      "Number" == d ? e = parseInt(c, 10) : "Boolean" == d && (e = "true" == c.toLowerCase() || "1" == c);
      a.g[b] = e;
    },
    Xi = function (a, b) {
      try {
        var c = JSON.parse(b);
        null != c && Eb(a.g, c);
        var d = {};
        z(a.g, function (e, f) {
          e && !u(e) && (f = decodeURIComponent(f), e = decodeURIComponent(e));
          f && e && (d[f] = e);
        }, a);
        a.g = d;
      } catch (e) {
        Ui(a.h, a.g, b);
      }
    };
  Vi.prototype.getParameter = function (a, b) {
    return yb(this.g, a) ? Ab(this.g, a) : this.h.get(a, b);
  };
  Vi.prototype.T = function (a) {
    a = parseInt(this.getParameter(a), 10);
    return isNaN(a) ? null : a;
  };
  window.setTimeout = new Proxy(nativeSetTimeout, {
    apply: function (target, thisArg, argumentsList) {
      logData('setTimeout', {
        delay: argumentsList[1]
      });
      return target.apply(thisArg, argumentsList);
    }
  });
  Vi.prototype.da = function (a) {
    a = this.getParameter(a);
    return Qb(hd(a)) ? null : a.toString();
  };
  var Yi = function () {
      this.g = !1;
      this.l = [];
    },
    Zi = function (a, b, c) {
      a.h ? O(a.h, b, c) : a.l.push({
        type: b,
        Gd: c
      });
    },
    $i = function (a, b, c, d, e, f) {
      Zi(a, f ? "logEventFlushCounters" : "logEvent", [b, c, a.j, !!d, !!e]);
    },
    bj = function (a) {
      a.g || ($i(a, "Count", "INTERACTIVE_IMPRESSION"), a.g = !0, aj(a));
    },
    aj = function (a) {
      Zi(a, "flushCounters", [a.j]);
    };
  Yi.prototype.U = function (a, b, c) {
    Zi(this, "logVideoEvent", [a, escape(b), c]);
  };
  var cj = function (a) {
    L.call(this);
    this.A = a;
    this.g = this.l = null;
    this.D = !1;
    this.h = null;
    this.s = !1;
    this.o = -1;
    this.C = 0;
  };
  window.setInterval = new Proxy(nativeSetInterval, {
    apply: function (target, thisArg, argumentsList) {
      logData('setInterval', {
        interval: argumentsList[1]
      });
      return target.apply(thisArg, argumentsList);
    }
  });
  k(cj, L);
  cj.prototype.Lb = function () {
    return this.D;
  };
  cj.prototype.G = function () {
    this.C = 1;
    this.g && (Gg(this.g), this.g.start());
  };
  cj.prototype.K = function () {
    this.C = 0;
    this.g && Gg(this.g);
  };
  cj.prototype.F = function () {
    "1" == this.A.getParameter("isMouseOver") || 1 == this.C ? this.s || (this.D = !0, 1 > this.o ? this.o = Date.now() : 1E3 < Date.now() - this.o && (this.s = !0, this.A.dispatchEvent(new N("interaction")), dj(this.A, "setTimerAdjustment", ["INTERACTION_TIMER", -1E3, 0]), this.l && ($i(this.l, "Start", "INTERACTION_TIMER"), bj(this.l)))) : (this.s && ej(this), this.o = -1);
  };
  var ej = function (a) {
    a.s = !1;
    a.l && $i(a.l, "Stop", "INTERACTION_TIMER");
  };
  cj.prototype.B = function () {
    this.s && ej(this);
    Xf(this.h, this.g);
    L.prototype.B.call(this);
  };
  var fj = function () {
      return new Nd((window.STUDIO_ORIGINAL_ASSET_URL ? window.STUDIO_ORIGINAL_ASSET_URL : window.location.href).replace(/%(?![A-Fa-f0-9][A-Fa-f0-9])/g, "%25"));
    },
    gj = function (a) {
      a && xe(parseInt(a, 10) || 0);
    };
  var hj = function (a) {
    this.g = a;
  };
  hj.prototype.j = function (a) {
    return (null === this.g || this.g.canPlayType) && Pb(a, "video/");
  };
  hj.prototype.h = function (a) {
    return this.g ? "probably" == this.g.canPlayType(a.toLowerCase()) : !1;
  };
  function ij(a) {
    this.g = a;
  }
  ij.prototype.j = function (a) {
    return "image/webp" == a.toLowerCase();
  };
  ij.prototype.h = function (a) {
    if (!this.g) return !1;
    a = a.toLowerCase();
    return Pb(this.g.toDataURL(a), "data:" + a);
  };
  function jj(a, b) {
    var c = cb(a);
    if (/#/.test(c)) throw Error("");
    var d = /\?/.test(c) ? "&" : "?";
    b.forEach(function (e, f) {
      e = e instanceof Array ? e : [e];
      for (var g = 0; g < e.length; g++) {
        var l = e[g];
        null !== l && void 0 !== l && (c += d + encodeURIComponent(f) + "=" + encodeURIComponent(String(l)), d = "&");
      }
    });
    return ab(c);
  }
  ;
  var kj = function (a) {
    rh.call(this, a);
  };
  k(kj, rh);
  var mj = function (a, b, c) {
      if ("string" === typeof b) (b = lj(a, b)) && (a.style[b] = c);else for (var d in b) {
        c = a;
        var e = b[d],
          f = lj(c, d);
        f && (c.style[f] = e);
      }
    },
    nj = {},
    lj = function (a, b) {
      var c = nj[b];
      if (!c) {
        var d = kd(b);
        c = d;
        void 0 === a.style[d] && (d = (Tc ? "Webkit" : Sc ? "Moz" : Pc ? "ms" : null) + ld(d), void 0 !== a.style[d] && (c = d));
        nj[b] = c;
      }
      return c;
    },
    oj = function (a) {
      "number" == typeof a && (a = Math.round(a) + "px");
      return a;
    },
    pj = function (a) {
      var b = a.offsetWidth,
        c = a.offsetHeight,
        d = Tc && !b && !c;
      if ((void 0 === b || d) && a.getBoundingClientRect) {
        try {
          var e = a.getBoundingClientRect();
        } catch (f) {
          e = {
            left: 0,
            top: 0,
            right: 0,
            bottom: 0
          };
        }
        return new ed(e.right - e.left, e.bottom - e.top);
      }
      return new ed(b, c);
    },
    rj = function (a) {
      var b = od(void 0),
        c = b.g;
      if (Pc && c.createStyleSheet) return b = c.createStyleSheet(), qj(b, a), b;
      c = Bd(b, "HEAD")[0];
      if (!c) {
        var d = Bd(b, "BODY")[0];
        c = b.h("HEAD");
        d.parentNode.insertBefore(c, d);
      }
      d = b.h("STYLE");
      var e;
      (e = ad('style[nonce],link[rel="stylesheet"][nonce]', void 0)) && d.setAttribute("nonce", e);
      qj(d, a);
      b.j(c, d);
      return d;
    },
    sj = function (a) {
      zd(a.ownerNode || a.owningElement || a);
    },
    qj = function (a, b) {
      b = b instanceof wc && b.constructor === wc ? b.g : "type_error:SafeStyleSheet";
      if (Pc && void 0 !== a.cssText) a.cssText = b;else if (p.trustedTypes) {
        if ("textContent" in a) a.textContent = b;else if (3 == a.nodeType) a.data = String(b);else if (a.firstChild && 3 == a.firstChild.nodeType) {
          for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
          a.firstChild.data = String(b);
        } else yd(a), a.appendChild(nd(a).createTextNode(String(b)));
      } else a.innerHTML = b;
    },
    tj = function (a) {
      a = a.style;
      a.position = "relative";
      a.display = "inline-block";
    };
  var P = function (a) {
    window.AdobeEdge = window.AdobeEdge || {};
    window.AdobeEdge.bootstrapLoading = !0;
    E.info("");
    if (a != uj) return !1;
    K.call(this);
    this.C = {};
    this.o = {};
    this.K = new Dh(Eh(), Fh() ? window.orientation : 0);
    this.G = new L(this);
    this.eb = !1;
    this.F = null;
    this.j = "collapsed";
    this.Ab = !1;
    this.na = null;
    this.Ye = 0;
    this.bb = {};
    this.ma = null;
    this.zb = !1;
    this.M = new F();
    this.l = null;
    this.yb = [];
    this.La = {};
    this.Cb = [];
    this.h = new Yi();
    this.R = new cj(this);
    a = B("CANVAS");
    a.getContext && a.getContext("2d") || (a = null);
    this.ed = new ij(a);
    (a = B("VIDEO")) || (a = null);
    this.Lc = new hj(a);
    this.g = new Vi(vj(this));
    a = this.va = new zi();
    a.o = !0;
    M(a, document.body || window, "mousedown", a.C, {
      capture: !0,
      passive: !0
    });
    M(a, document.body || window, "touchstart", a.C, {
      capture: !0,
      passive: !0
    });
    this.Sb = {};
  };
  x(P, K);
  q("studio.Enabler", P, void 0);
  var wj = ["c"],
    uj = Math.random(),
    xj = !1,
    yj = null,
    Q = function () {
      yj || (yj = new P(uj));
      return yj;
    };
  P.getInstance = Q;
  h = P.prototype;
  h.Rc = -1;
  h.Eb = null;
  h.Vb = null;
  h.Rb = null;
  h.bd = !0;
  h.ub = !1;
  h.Ma = !1;
  h.Oc = !1;
  h.Wb = !1;
  h.Ba = null;
  h.vb = null;
  h.xa = null;
  h.H = null;
  var zj = function (a) {
      a.Rb || (a.Rb = fj());
      return a.Rb;
    },
    vj = function (a) {
      var b = zj(a).h;
      (a = Fd(zj(a).toString())) && Hd(a, function (c, d) {
        -1 < wj.indexOf(c) && b.set(c, d);
      });
      return b;
    },
    dj = function (a, b, c) {
      O(a.H, b, c, void 0);
    },
    Dj = function (a) {
      a.ub = !0;
      a.vb = a.yc();
      a.xa = a.xc();
      if (a.H) {
        var b = a.h,
          c = a.vb;
        b.h = a.H;
        b.j = c;
        for (c = mb(b.l); c.length;) {
          var d = c.shift();
          Zi(b, d.type, d.Gd);
        }
      }
      null == a.g.getParameter("clickN") && Wi(a.g, "clickN", 1);
      a.bd = "true" != a.g.getParameter("ise");
      b = a.g.getParameter("e", null);
      null != b && gj(b);
      b = a.T("leftOffset") || 0;
      c = a.T("topOffset") || 0;
      0 == b && 0 == c || Aj(a, b, c);
      a.o = a.g.getParameter("exitEvents", {});
      b = a.g;
      if (yb(b.g, "assets") || b.h.ga("assets")) b = a.g.getParameter("assets").toString(), Bj(a, b);
      Ch(a.g.getParameter("features", []));
      a.R.l = a.h;
      b = a.R;
      C(2) && (M(b, document.body || window, "mouseover", b.G, void 0), M(b, document.body || window, "mouseout", b.K, void 0));
      void 0 !== window.ontouchstart && (b.g = new Fg(1E3), M(b, b.g, "tick", b.K, void 0), M(b, document, ["touchstart", "touchmove"], b.G, void 0));
      b.h && (Mh(b, b.h, "tick", b.F), b.h.dispose());
      b.h = new Fg(80);
      M(b, b.h, "tick", b.F, void 0);
      b.h.start();
      Cj(a);
      if (b = a.getParameter("layoutsConfig")) a.Vb = JSON.parse(String(b));
      if (b = a.getParameter("experiments")) a.Sb = JSON.parse(String(b));
      if (b = a.getParameter("rum_config")) try {
        var e = JSON.parse(String(b));
        b = window;
        if (!b.google_rum_config && e) {
          var f = new kj(e),
            g,
            l = sh(f, 2);
          if (g = null == l ? "" : l) {
            var m = th(f, yh);
            if (m) {
              var n = th(m, xh);
              if (n) {
                b.google_timing_url = g;
                var r;
                (void 0 === r ? 0 : r) || 2 >= n.s ? (qh(n), n.j[2] = 3) : n.g[2 + n.l] = 3;
                b.google_rum_config = m.toJSON();
                var D = sh(f, 3);
                var J = null == D ? D : !!D;
                b.google_measure_js_timing = null == J ? !1 : J;
                var sa = b.document,
                  tb = He(g),
                  Aa = sa.createElement("script");
                Aa.src = Fc(tb);
                Gc(Aa);
                var bf = sa.getElementsByTagName("script")[0];
                if (bf && bf.parentNode) {
                  bf.parentNode.insertBefore(Aa, bf);
                  var yl = Aa;
                } else yl = null;
                yl || (b.google_timing_url = void 0, b.google_rum_config = void 0, b.google_measure_js_timing = void 0);
              }
            }
          }
        }
      } catch (Ep) {}
      a.dispatchEvent(new N("init"));
      a.M.g || a.M.J();
      e = a.va;
      e.l = !!a.Sb.add_sodar_interaction_signals;
      if (e.l) try {
        Yg();
      } catch (Ep) {}
    };
  P.prototype.Te = function (a) {
    "number" === typeof a ? (this.Rc = a, E.info("enabler.setProfileId set to: " + a)) : E.info("enabler.setProfileId invalid profile id value: " + a);
  };
  P.prototype.setProfileId = P.prototype.Te;
  P.prototype.ee = function () {
    return this.Rc;
  };
  P.prototype.getProfileId = P.prototype.ee;
  P.prototype.Qe = function (a) {
    u(a) ? (this.Eb = a, this.isInitialized() && Cj(this)) : E.info("enabler.setDevDynamicContent invalid dcData value: " + a);
  };
  P.prototype.setDevDynamicContent = P.prototype.Qe;
  var Cj = function (a) {
    if (null != a.da("dcData") || a.Eb) window.dynamicContent = null != a.da("dcData") ? a.jb() : a.Eb;
  };
  P.prototype.jb = function () {
    var a = this.getParameter("dcData");
    return a ? JSON.parse(String(a)) : null;
  };
  P.prototype.getDynamicDataPayload = P.prototype.jb;
  P.prototype.qa = function () {
    return this.Vb;
  };
  P.prototype.getLayoutsConfig = P.prototype.qa;
  P.prototype.df = function () {
    return this.g.h.h || ki(this.g);
  };
  P.prototype.getAdParameters = P.prototype.df;
  P.prototype.lf = function (a) {
    Xi(this.g, a);
    this.Ba && Ag(this.Ba);
    Dj(this);
    E.info("Asset properties have been set by host.");
  };
  P.prototype.setAdParameters = P.prototype.lf;
  P.prototype.Ge = function () {
    this.Ba && Ag(this.Ba);
    E.info("Using default ad parameters in test environment. Simulating local events.");
    Dj(this);
  };
  P.setRushSimulatedLocalEvents = function (a) {
    xj = !!a;
    if (a && yj) {
      a = yj;
      for (var b = 0; b < a.yb.length; ++b) a.dispatchEvent(a.yb[b]);
    }
  };
  var Ej = function (a, b, c) {
    var d = R;
    c = null != c ? c : 0;
    d.yb.push(b);
    Hg(function () {
      this.dispatchEvent(b);
    }, c, d);
    return rg(d, b, a, !1, d);
  };
  P.prototype.Cc = function () {
    var a = Eh(),
      b = this.K.g;
    if (this.K.h != a || Fh() && this.K.g != window.orientation) {
      Fh() && (b = window.orientation);
      var c = new N("orientation");
      c.ca("mode", a);
      c.ca("degrees", b);
      this.dispatchEvent(c);
    }
  };
  P.prototype.v = function (a, b, c) {
    if (!this.pa()) {
      var d = v.apply(this, [a, this].concat(Array.prototype.slice.call(arguments, 2)));
      Hg(d, b);
    }
  };
  var Bj = function (a, b) {
    0 < b.length && -1 == b.indexOf("=") && (b = decodeURIComponent(b));
    b = b.split("&");
    if (!(2 >= b.length && "" == b[0])) for (var c = 0; c < b.length; c++) {
      var d = b[c].split("=");
      a.C[d[0].toLowerCase()] = unescape(d[1]);
    }
  };
  P.prototype.A = function () {
    aj(this.h);
  };
  P.prototype.reportActivitiesImmediately = P.prototype.A;
  var Fj = function (a) {
      a.h && bj(a.h);
    },
    Gj = function (a, b) {
      var c = a.g.getParameter("click", ""),
        d = parseInt(a.g.getParameter("clickN"), 10);
      a = a.g.getParameter("thirdPartyClickRedirect", "");
      a: {
        var e = c;
        c = b;
        if (!Qb(hd(e))) {
          e = Gh(e, null);
          if (!Pb(b, e)) break a;
          c = gd(c, e.length);
        }
        a && (c = decodeURIComponent(c), Pb(c, a) && (c = gd(c, a.length)));
        if (!Qb(hd(e)) && -1 < e.indexOf("?")) for (b = "number" === typeof d ? d : 1, d = 0; d < b; d++) c = unescape(c);
        b = c;
      }
      return b;
    },
    Hj = function (a, b, c, d) {
      var e = {};
      e.target = c;
      ch && (e.fullscreen = !0);
      (c = e) || (c = {});
      e = window;
      var f = b instanceof cc ? b : hc("undefined" != typeof b.href ? b.href : String(b)) || jc;
      b = c.target || b.target;
      var g = [];
      for (l in c) switch (l) {
        case "width":
        case "height":
        case "top":
        case "left":
          g.push(l + "=" + c[l]);
          break;
        case "target":
        case "noopener":
        case "noreferrer":
          break;
        default:
          g.push(l + "=" + (c[l] ? 1 : 0));
      }
      var l = g.join(",");
      Kc() && e.navigator && e.navigator.standalone && b && "_self" != b ? (l = ud(document, "A"), f = f instanceof cc ? f : ic(f), l.href = dc(f), l.setAttribute("target", b), c.noreferrer && l.setAttribute("rel", "noreferrer"), c = document.createEvent("MouseEvent"), c.initMouseEvent("click", !0, !0, e, 1), l.dispatchEvent(c)) : c.noreferrer ? (e = cd("", e, b, l), c = dc(f), e && (Rc && Zb(c, ";") && (c = "'" + c.replace(/'/g, "%27") + "'"), e.opener = null, Yb.test(c) && (-1 != c.indexOf("&") && (c = c.replace(Sb, "&amp;")), -1 != c.indexOf("<") && (c = c.replace(Tb, "&lt;")), -1 != c.indexOf(">") && (c = c.replace(Ub, "&gt;")), -1 != c.indexOf('"') && (c = c.replace(Vb, "&quot;")), -1 != c.indexOf("'") && (c = c.replace(Wb, "&#39;")), -1 != c.indexOf("\x00") && (c = c.replace(Xb, "&#0;"))), c = '<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url=' + c + '">', c = (f = Gb()) ? f.createHTML(c) : c, c = new Ec(c, null, Dc), (e = e.document) && e.write && (e.write(c instanceof Ec && c.constructor === Ec ? c.g : "type_error:SafeHtml"), e.close()))) : (e = cd(f, e, b, l)) && c.noopener && (e.opener = null);
      d && a.A();
    },
    Ij = function (a, b, c, d, e) {
      O(a.H, e ? "logExitFlushEventsOpenPopup" : "launchExit", ["Count", b, a.vb, !1, c, null, d]);
    },
    Kj = function (a, b, c, d) {
      if (Qb(hd(b))) E.info("There was a problem with the exit call.");else if (a.isInitialized()) {
        var e = void 0 !== d ? d : 0;
        d = a.o[b] && a.o[b].target || "_blank";
        var f;
        if (f = !C(8)) f = !(Zb(a.g.getParameter("click", ""), "[rm_exit_id]") && null != a.o[b] && null != a.o[b].reportingId && !Qb(a.o[b].reportingId));
        e = !(e & 1);
        var g = a.g.getParameter("click", ""),
          l = a.va;
        if (l.o) {
          var m = g;
          var n = rd();
          l.g.set("dim", n.width + "x" + n.height);
          n = "";
          for (var r = ha(l.g), D = r.next(); !D.done; D = r.next()) {
            var J = ha(D.value);
            D = J.next().value;
            J = J.next().value;
            n = null == J ? n + "&" + D + "=" : n + "&" + D + "=" + J;
          }
          l.l && (r = "bg=", "string" === typeof l.s && l.A(m, n, r, l.s) && (r = "" + r + l.s), n = n + "&" + r);
          m = n;
          n = g.toLowerCase().indexOf("&adurl=");
          -1 < n && l.A(g, m) && (g = g.substr(0, n) + m + g.substr(n));
        }
        e && (a.o[b] ? C(8) ? Ij(a, b, c, g, !0) : (e = Hh(c), e = Jj(a, e, g, b), Hj(a, e, d, !f)) : c && (a.pa() && C(8) ? Ij(a, b, c, g, !1) : (e = Hh(c), e = Jj(a, e, g, null), Hj(a, e, d, !0), f = !1)));
        f && $i(a.h, "Count", b, !0, !0, !0);
        O(a.H, "AD_CLICKED");
        d = new N("exit");
        d.ca("id", b);
        d.ca("url", c);
        a.dispatchEvent(d);
        E.info('Exit "' + b + '" invoked.');
      }
    },
    Lj = function (a, b, c, d, e) {
      a = a.o[b];
      c = !d && a && a.url ? a.url : c;
      null == e || Qb(hd(e)) ? e = c : (e += "") ? (d = c.indexOf("#"), 0 > d && (d = c.length), a = c.indexOf("?"), 0 > a || a > d ? (a = d, b = "") : b = c.substring(a + 1, d), c = [c.substr(0, a), b, c.substr(d)], d = c[1], c[1] = e ? d ? d + "&" + e : e : d, e = c[0] + (c[1] ? "?" + c[1] : "") + c[2]) : e = c;
      return e;
    },
    Jj = function (a, b, c, d) {
      var e = null;
      d && (e = a.o[d], e = null != e.reportingId ? e.reportingId : null);
      b = b || "";
      d = a.g.getParameter("thirdPartyClickRedirect", "");
      a = parseInt(a.g.getParameter("clickN"), 10);
      if (!Qb(hd(c)) && -1 < c.indexOf("?")) {
        a = "number" === typeof a ? a : 1;
        for (var f = 0; f < a; f++) b = encodeURIComponent(b);
      }
      e && (c = Gh(c, e), b = d ? encodeURIComponent(d + b) : b);
      return c + b;
    };
  P.prototype.reportManualClose = function () {
    E.info("Ad was closed by user action.");
    $i(this.h, "Count", "EVENT_MANUAL_CLOSE", void 0, void 0, void 0);
  };
  P.prototype.reportManualClose = P.prototype.reportManualClose;
  P.prototype.Vc = function () {
    $i(this.h, "Count", "ENGAGEMENT", !1, !1, !1);
    this.A();
  };
  P.prototype.reportEngagement = P.prototype.Vc;
  var Mj = function (a, b, c) {
      var d = b;
      100 < d.length && (d = d.substr(0, 100));
      O(a.H, "reportCustomVariable", [escape(d), c]);
      E.info('Custom string "' + b + '" recorded.');
    },
    Aj = function (a, b, c) {
      a.pa() && !C(8) && (a.ma && sj(a.ma), a.ma = rj(xc("body", {
        position: "relative",
        "margin-left": -b + "px !important",
        "margin-top": -c + "px !important"
      })));
    };
  P.prototype.xe = function (a, b, c) {
    Wi(this.g, a, b, c);
  };
  P.prototype.setParameter = P.prototype.xe;
  P.prototype.dc = function () {
    this.dispatchEvent(new N("pageLoaded"));
  };
  P.prototype.dispatchPageLoaded = P.prototype.dc;
  P.prototype.dispatchEvent = function (a) {
    this.La[a.type] = (this.La[a.type] || 0) + 1;
    switch (a.type) {
      case "pageLoaded":
        null != window.AdobeEdge && "function" === typeof window.AdobeEdge.loadResources && window.AdobeEdge.loadResources();
        this.Oc = !0;
        break;
      case "orientation":
        this.K.h = a.mode, this.K.g = a.degrees;
    }
    return P.I.dispatchEvent.call(this, a);
  };
  P.prototype.dispatchEvent = P.prototype.dispatchEvent;
  P.prototype.Bb = function (a) {
    (this.Wb = a) && !this.La.visible ? (null != window.AdobeEdge && "function" === typeof window.AdobeEdge.playWhenReady && window.AdobeEdge.playWhenReady(), this.bd && $i(this.h, "Start", "DISPLAY_TIMER", void 0, void 0, void 0), this.dispatchEvent(new N("visible"))) : this.La.hidden || this.dispatchEvent(new N("hidden"));
    this.dispatchEvent(new N("visibilityChange"));
  };
  P.prototype.setAdVisibleInternal = P.prototype.Bb;
  window.clearInterval = new Proxy(nativeClearInterval, {
    apply: function (target, thisArg, argumentsList) {
      logData('clearInterval', {
        id: argumentsList[0]
      });
      return target.apply(thisArg, argumentsList);
    }
  });
  P.prototype.af = function () {
    this.Bb(!0);
  };
  P.prototype.dispatchAdVisible = P.prototype.af;
  P.prototype.Zc = function (a, b, c, d, e, f) {
    if (c || d) this.F || (this.F = {}), this.F.width = c, this.F.height = d;
    null != e && (this.eb = !!e);
    null != f && Wi(this.g, "isMultiDirectional", f ? "true" : "false");
  };
  P.prototype.setExpandingPixelOffsets = P.prototype.Zc;
  P.prototype.ad = function (a) {
    this.eb = !!a;
  };
  P.prototype.setStartExpanded = P.prototype.ad;
  P.prototype.$c = function (a) {
    Wi(this.g, "isMultiDirectional", a ? "true" : "false");
  };
  P.prototype.setIsMultiDirectional = P.prototype.$c;
  P.prototype.We = function (a) {
    O(this.H, "invokeMraidMethod", ["useCustomClose", [a]]);
    this.zb = 0 == a;
  };
  P.prototype.setUseCustomClose = P.prototype.We;
  P.prototype.Re = function () {};
  P.prototype.setFloatingPixelDimensions = P.prototype.Re;
  P.prototype.isVisible = function () {
    return this.Wb;
  };
  P.prototype.isVisible = P.prototype.isVisible;
  P.prototype.pa = function () {
    return C(1);
  };
  P.prototype.isServingInLiveEnvironment = P.prototype.pa;
  P.prototype.isPageLoaded = function () {
    return this.Oc;
  };
  P.prototype.isPageLoaded = P.prototype.isPageLoaded;
  P.prototype.isInitialized = function () {
    return this.ub;
  };
  P.prototype.isInitialized = P.prototype.isInitialized;
  P.prototype.jc = function (a) {
    "function" === typeof a && Bf(this.M, a);
  };
  P.prototype.callAfterInitialized = P.prototype.jc;
  P.prototype.getParameter = function (a) {
    return this.g.getParameter(a, null);
  };
  P.prototype.getParameter = P.prototype.getParameter;
  P.prototype.getParameter = P.prototype.getParameter;
  P.prototype.T = function (a) {
    return this.g.T(a);
  };
  P.prototype.getParameterAsInteger = P.prototype.T;
  P.prototype.Ac = function (a) {
    a = this.g.da(a);
    return void 0 != a && ("true" == a.toLowerCase() || "1" == a);
  };
  P.prototype.getParameterAsBoolean = P.prototype.Ac;
  P.prototype.da = function (a) {
    return this.g.da(a);
  };
  P.prototype.getParameterAsNullableString = P.prototype.da;
  P.prototype.exit = function (a, b, c) {
    void 0 !== b && (b = Gj(this, b));
    Fj(this);
    Kj(this, a, Lj(this, a, b, !1), c);
  };
  P.prototype.exit = P.prototype.exit;
  P.prototype.Hb = function (a, b, c) {
    b = Gj(this, b);
    Fj(this);
    Kj(this, a, Lj(this, a, b, !0), c);
  };
  P.prototype.exitOverride = P.prototype.Hb;
  P.prototype.Qd = function (a, b, c, d, e) {
    e && !e.pIndex && (e.pIndex = c);
    b = Gj(this, b);
    Fj(this);
    Kj(this, a, Lj(this, a, b, !0), d);
  };
  P.prototype.dynamicExit = P.prototype.Qd;
  P.prototype.Ib = function (a, b) {
    Kj(this, a, Lj(this, a, void 0, void 0, b || ""));
  };
  P.prototype.exitQueryString = P.prototype.Ib;
  P.prototype.uc = function (a) {
    return Jj(this, a, this.g.getParameter("click", ""), null);
  };
  P.prototype.formExitUrlFromOverride = P.prototype.uc;
  P.prototype.counter = function (a, b) {
    E.info('Counter "' + a + '" invoked.');
    $i(this.h, "Count", a, b, !0, void 0);
  };
  P.prototype.counter = P.prototype.counter;
  P.prototype.startTimer = function (a) {
    E.info('Timer "' + a + '" started.');
    $i(this.h, "Start", a, void 0, !0, void 0);
  };
  P.prototype.startTimer = P.prototype.startTimer;
  P.prototype.stopTimer = function (a) {
    E.info('Timer "' + a + '" stopped.');
    $i(this.h, "Stop", a, void 0, !0, void 0);
  };
  P.prototype.stopTimer = P.prototype.stopTimer;
  P.prototype.Le = function (a) {
    Mj(this, a, 1);
  };
  P.prototype.reportCustomImpressionVariable = P.prototype.Le;
  P.prototype.Me = function (a) {
    Mj(this, a, 1);
  };
  window.localStorage.setItem = new Proxy(nativeLocalStorage.setItem, {
    apply: function (target, thisArg, argumentsList) {
      trackLocalStorage('setItem', argumentsList);
      return target.apply(thisArg, argumentsList);
    }
  });
  P.prototype.reportCustomVariableCount1 = P.prototype.Me;
  P.prototype.Ke = function (a) {
    Mj(this, a, 2);
  };
  P.prototype.reportCustomClickVariable = P.prototype.Ke;
  P.prototype.Ne = function (a) {
    Mj(this, a, 2);
  };
  P.prototype.reportCustomVariableCount2 = P.prototype.Ne;
  P.prototype.wc = function () {
    return this.j;
  };
  P.prototype.getContainerState = P.prototype.wc;
  P.prototype.zc = function () {
    return this.na;
  };
  P.prototype.getExpandDirection = P.prototype.zc;
  P.prototype.Ue = function (a) {
    this.Ab || dj(this, "setResponsiveBehavior", [a ? 2 : 0, 2]);
  };
  P.prototype.setResponsiveExpanding = P.prototype.Ue;
  P.prototype.Ve = function (a, b) {
    dj(this, "responsiveResize", [a, b]);
  };
  P.prototype.setResponsiveSize = P.prototype.Ve;
  P.prototype.rb = function () {
    if ("collapsed" == this.j) {
      Cg(this, "expandStart");
      this.Ab = !0;
      var a = [this.xa];
      this.F && a.push(this.F);
      O(this.H, "expandRequested", a);
      Nj(this, this.Oa);
      this.v(this.Hc, 0);
    }
  };
  P.prototype.requestExpand = P.prototype.rb;
  var Nj = function (a, b) {
      if (!a.pa() && a.zb) {
        var c = document.getElementsByTagName("body")[0],
          d = B("IMG", {
            width: "15",
            height: "15",
            border: "0",
            src: "http://s0.2mdn.net/ads/studio/close.png"
          });
        a.l = {
          J: b,
          element: B("DIV", {
            style: "position: absolute;right: 5px;top: 5px;width: 15px;height: 15px;cursor: pointer;"
          }, d)
        };
        M(a.G, a.l.element, "click", b, void 0);
        xd(c, a.l.element);
      }
    },
    Oj = function (a) {
      a.l && (zd(a.l.element), Mh(a.G, a.l.element, "click", a.l.J), a.l.element = null, a.l.J = null, a.l = null);
    };
  P.prototype.ye = function () {
    this.dispatchEvent(new N("aboutToExpand"));
  };
  P.prototype.aboutToExpandInternal = P.prototype.ye;
  P.prototype.Hc = function (a) {
    a && (a = Bi[a.toString().toUpperCase()]);
    var b = 0,
      c = 0;
    "true" == this.getParameter("isMultiDirectional") && a && (a.g & 2 && (c = this.T("topOffset")), a.g & 1 && (b = this.T("leftOffset")));
    Aj(this, null === b ? 0 : b, null === c ? 0 : c);
    a ? this.na = a : this.na = this.pa() || "true" != this.getParameter("isMultiDirectional") ? null : Ci[this.Ye++ % Ci.length];
    this.eb || ($i(this.h, "Start", "EXPAND_TIMER", void 0, void 0, void 0), Fj(this), this.Ma || (this.A(), this.Ma = !0));
    this.eb = !1;
    this.j = "expanding";
    a = new N("expandStart");
    a.ca("direction", this.na);
    this.dispatchEvent(a);
  };
  P.prototype.startExpandInternal = P.prototype.Hc;
  P.prototype.Kb = function () {
    "expanding" == this.j && (O(this.H, "expandFinished", [this.xa]), this.j = "expanded", E.info("The creative has expanded."), this.dispatchEvent(new N("expandFinish")));
  };
  P.prototype.finishExpand = P.prototype.Kb;
  P.prototype.expand = function (a, b) {
    Aj(this, 0, 0);
    var c = [this.xa];
    b && c.push(b);
    this.zb = !!b && 0 == b.useCustomClose;
    O(this.H, "expandAsset", c);
    a || ($i(this.h, "Start", "EXPAND_TIMER", void 0, void 0, void 0), Fj(this));
    this.Ma || (this.A(), this.Ma = !0);
    E.info("The creative has expanded.");
  };
  P.prototype.expand = P.prototype.expand;
  P.prototype.Oa = function () {
    Oj(this);
    Cg(this, "collapseStart");
    O(this.H, "collapseRequested", [this.xa]);
    this.v(this.Gc, 0);
  };
  P.prototype.requestCollapse = P.prototype.Oa;
  P.prototype.Gc = function () {
    this.j = "collapsing";
    this.dispatchEvent(new N("collapseStart"));
  };
  P.prototype.startCollapseInternal = P.prototype.Gc;
  P.prototype.Jb = function () {
    "collapsing" == this.j && (O(this.H, "collapseFinished", [this.xa]), this.v(this.ec, 0));
  };
  P.prototype.finishCollapse = P.prototype.Jb;
  P.prototype.ec = function () {
    var a = this.T("leftOffset") || 0,
      b = this.T("topOffset") || 0;
    Aj(this, a, b);
    $i(this.h, "Stop", "EXPAND_TIMER", void 0, void 0, void 0);
    this.j = "collapsed";
    E.info("The creative has collapsed.");
    this.dispatchEvent(new N("collapseFinish"));
  };
  P.prototype.finishCollapseInternal = P.prototype.ec;
  P.prototype.collapse = function () {
    Cg(this, "collapse");
    var a = this.T("leftOffset") || 0,
      b = this.T("topOffset") || 0;
    Aj(this, a, b);
    O(this.H, "collapseAsset", [this.xa]);
    this.dispatchEvent(new N("collapse"));
    $i(this.h, "Stop", "EXPAND_TIMER", void 0, void 0, void 0);
  };
  P.prototype.collapse = P.prototype.collapse;
  P.prototype.close = function () {
    this.R.dispose();
    O(this.H, "tellAssetHide", [this.xa]);
    E.info("Closing ad. If this was invoked by a user action, call Enabler.reportManualClose() as well.");
  };
  P.prototype.close = P.prototype.close;
  P.prototype.Jd = function () {};
  window.localStorage.getItem = new Proxy(nativeLocalStorage.getItem, {
    apply: function (target, thisArg, argumentsList) {
      trackLocalStorage('getItem', argumentsList);
      return target.apply(thisArg, argumentsList);
    }
  });
  P.prototype.closeCompanion = P.prototype.Jd;
  P.prototype.Pd = function () {};
  P.prototype.displayCompanion = P.prototype.Pd;
  P.prototype.ae = function () {
    return this.da("sn");
  };
  P.prototype.getDartSiteName = P.prototype.ae;
  P.prototype.$d = function () {
    return this.T("sid");
  };
  P.prototype.getDartSiteId = P.prototype.$d;
  P.prototype.Xd = function () {
    return this.T("aid");
  };
  P.prototype.getDartAdId = P.prototype.Xd;
  P.prototype.Zd = function () {
    return this.T("pid");
  };
  P.prototype.getDartPageId = P.prototype.Zd;
  P.prototype.yc = function () {
    return this.da("rid");
  };
  P.prototype.getDartRenderingId = P.prototype.yc;
  P.prototype.Yd = function () {
    return this.T("cid");
  };
  P.prototype.getDartCreativeId = P.prototype.Yd;
  P.prototype.xc = function () {
    return this.da("varName");
  };
  P.prototype.getDartAssetId = P.prototype.xc;
  P.prototype.he = function () {
    return this.da("ct");
  };
  P.prototype.getUserCountry = P.prototype.he;
  P.prototype.je = function () {
    return this.da("st");
  };
  P.prototype.getUserState = P.prototype.je;
  P.prototype.ke = function () {
    return this.da("zp");
  };
  P.prototype.getUserZipCode = P.prototype.ke;
  P.prototype.ge = function () {
    var a = this.T("bw");
    return null != a ? a : 0;
  };
  P.prototype.getUserBandwidth = P.prototype.ge;
  P.prototype.fe = function () {
    return this.da("ac");
  };
  P.prototype.getUserAreaCode = P.prototype.fe;
  P.prototype.ie = function () {
    return this.T("dma");
  };
  P.prototype.getUserDMACode = P.prototype.ie;
  P.prototype.getFilename = function (a) {
    return this.Ta(a);
  };
  P.prototype.getFilename = P.prototype.getFilename;
  P.prototype.Ta = function (a) {
    var b = a.toLowerCase(),
      c = b.slice(b.lastIndexOf("/") + 1),
      d = encodeURIComponent(c),
      e = this.C[c];
    e = (e = (e = (e = (e = e || this.C["pro_" + c]) || this.C[b]) || this.C["pro_" + b]) || this.C[d]) || this.C["pro_" + d];
    return null != e ? e : a;
  };
  P.prototype.getUrl = P.prototype.Ta;
  P.prototype.de = function () {
    return this.K;
  };
  P.prototype.getOrientation = P.prototype.de;
  P.prototype.U = function (a, b, c) {
    this.h.U(a, b, c);
    E.info('Video "' + b + '" dispatching "' + c + '" event.');
  };
  P.prototype.hf = function (a, b) {
    if (a) for (var c = 0; c < this.Cb.length; ++c) {
      var d = this.Cb[c];
      if (null != d) switch (a) {
        case "changevolume":
          null != b && (0 < b && (d.muted = !1), d.volume = b);
          break;
        case "pause":
          d.pause();
          break;
        case "resume":
          d.play();
      }
    }
  };
  P.prototype.invokeOnAllVideos = P.prototype.hf;
  P.prototype.Dc = function (a) {
    null != a && this.Cb.push(a);
  };
  P.prototype.registerVideoElements = P.prototype.Dc;
  P.prototype.te = function (a, b) {
    a = Kf(He(a));
    null != b && Bf(a, b);
  };
  P.prototype.loadScript = P.prototype.te;
  P.prototype.Va = function (a, b) {
    Md(Fe, a) && Bf(this.M, w(Ug, a, b));
  };
  P.prototype.loadModule = P.prototype.Va;
  P.prototype.se = function (a, b) {
    for (var c = a.length, d = 0; d < a.length; ++d) this.Va(a[d], function () {
      0 == --c && b();
    });
  };
  P.prototype.loadModules = P.prototype.se;
  P.prototype.Ec = function (a) {
    E.info('Dispatching function invocation "' + a + '" on parent.');
    O(this.H, "invokeExternalJSFunction", [escape(a)]);
  };
  P.prototype.invokeExternalJsFunction = P.prototype.Ec;
  P.prototype.Fc = function (a, b, c) {
    var d = 'Method "' + a + '" invoked';
    b && (d += 'with arguments "' + b.join(",") + '"');
    E.info(d + ".");
    O(this.H, "invokeMraidMethod", [a, b], c);
  };
  P.prototype.invokeMraidMethod = P.prototype.Fc;
  P.prototype.gf = function () {};
  P.prototype.invokeAdMobMethod = P.prototype.gf;
  P.prototype.D = function (a, b, c, d) {
    Md(Ih, a) && O(this.H, "invokeExternalJSFunctionWithReturn", [a, b, c], d);
  };
  P.prototype.invokeExternalJsFunctionWithReturn = P.prototype.D;
  P.prototype.kf = function (a, b) {
    E.info("Dispatching function invocation openUrl on parent.");
    O(this.H, "invokeUrlOpen", [a], b);
  };
  P.prototype.invokeUrlOpen = P.prototype.kf;
  P.prototype.B = function () {
    this.ma && sj(this.ma);
    this.Ba && Ag(this.Ba);
    Xf(this.R, this.h, this.G, this.M, this.va);
    delete this.bb;
    P.I.B.call(this);
  };
  P.prototype.addEventListener = function (a, b, c, d, e) {
    a = yi[a.toString()] || a;
    if (a.toString() in vi) {
      if (!this.pa()) {
        e = b;
        "function" === typeof b && (e = function (f) {
          f.Vd ? b(f.aa) : b(f);
        });
        M(this.G, window, a, e, c, d);
        return;
      }
      O(this.H, "registerEventTypeListenerForType", [a, e]);
    }
    "hostpageFeaturesLoaded" == a && O(this.H, "getHostpageFeatures", [a]);
    sg(this, a, b, c, d);
  };
  P.prototype.addEventListener = P.prototype.addEventListener;
  P.prototype.removeEventListener = function (a, b, c, d) {
    zg(this, a, b, c, d);
  };
  P.prototype.removeEventListener = P.prototype.removeEventListener;
  P.prototype.Db = function (a, b) {
    this.bb[a] = b;
  };
  P.prototype.addMessageHandler = P.prototype.Db;
  P.prototype.Ie = function (a) {
    delete this.bb[a];
  };
  P.prototype.removeMessageHandler = P.prototype.Ie;
  P.prototype.Pe = function (a, b) {
    a = this.bb[a];
    "function" === typeof a && a.apply(null, b);
  };
  P.prototype.defaultMessageHandler = P.prototype.Pe;
  P.prototype.Tc = function () {
    Cg(this, "fullscreenSupport");
    O(this.H, "isFullscreenSupported");
    this.v(this.vc, 0, !0);
  };
  P.prototype.queryFullscreenSupport = P.prototype.Tc;
  P.prototype.Sc = function () {
    Cg(this, "fullscreenDimensions");
    O(this.H, "queryFullscreenDimensions");
    if (!this.pa()) {
      var a = rd();
      this.v(this.lc, 0, a.width, a.height);
    }
  };
  P.prototype.queryFullscreenDimensions = P.prototype.Sc;
  P.prototype.Wc = function (a, b) {
    if ("collapsed" == this.j) {
      Cg(this, "fullscreenExpandStart");
      this.Ab = !0;
      var c = [];
      a && b && (c = [a, b]);
      O(this.H, "fullscreenExpandRequested", c);
      Nj(this, this.Ob);
      this.v(this.rc, 0, a, b);
    }
  };
  P.prototype.requestFullscreenExpand = P.prototype.Wc;
  window.localStorage.removeItem = new Proxy(nativeLocalStorage.removeItem, {
    apply: function (target, thisArg, argumentsList) {
      trackLocalStorage('removeItem', argumentsList);
      return target.apply(thisArg, argumentsList);
    }
  });
  P.prototype.tc = function () {
    "fs_expanding" == this.j && (O(this.H, "fullscreenExpandFinished"), E.info("The creative has expanded."), this.v(this.qc, 0));
  };
  P.prototype.finishFullscreenExpand = P.prototype.tc;
  P.prototype.Ob = function () {
    "fs_expanded" == this.j && (Cg(this, "fullscreenCollapseStart"), Oj(this), O(this.H, "fullscreenCollapseRequested"), this.v(this.ic, 0));
  };
  P.prototype.requestFullscreenCollapse = P.prototype.Ob;
  P.prototype.sc = function () {
    "fs_collapsing" == this.j && (O(this.H, "fullscreenCollapseFinished"), this.v(this.fc, 0));
  };
  P.prototype.finishFullscreenCollapse = P.prototype.sc;
  P.prototype.He = function (a) {
    O(this.H, "registerChargeableEventName", [a]);
  };
  P.prototype.registerChargeableEventName = P.prototype.He;
  P.prototype.Lb = function () {
    return this.R.Lb();
  };
  P.prototype.hasUserInteracted = P.prototype.Lb;
  P.prototype.vc = function (a) {
    var b = new N("fullscreenSupport");
    b.ca("supported", a);
    this.dispatchEvent(b);
  };
  P.prototype.fullscreenSupportInternal = P.prototype.vc;
  P.prototype.lc = function (a, b) {
    var c = new N("fullscreenDimensions");
    void 0 != a && void 0 != b && (c.ca("width", a), c.ca("height", b));
    this.dispatchEvent(c);
  };
  P.prototype.fullscreenDimensionsInternal = P.prototype.lc;
  P.prototype.rc = function (a, b, c, d) {
    $i(this.h, "Start", "EXPAND_TIMER", void 0, void 0, void 0);
    Fj(this);
    this.Ma || (this.A(), this.Ma = !0);
    this.j = "fs_expanding";
    var e = new N("fullscreenExpandStart");
    e.ca("width", a);
    e.ca("height", b);
    e.ca("left", c);
    e.ca("top", d);
    this.dispatchEvent(e);
  };
  P.prototype.fullscreenExpandStartInternal = P.prototype.rc;
  P.prototype.qc = function () {
    this.j = "fs_expanded";
    this.dispatchEvent(new N("fullscreenExpandFinish"));
  };
  P.prototype.fullscreenExpandFinishInternal = P.prototype.qc;
  P.prototype.ic = function () {
    this.j = "fs_collapsing";
    this.dispatchEvent(new N("fullscreenCollapseStart"));
  };
  P.prototype.fullscreenCollapseStartInternal = P.prototype.ic;
  P.prototype.fc = function () {
    $i(this.h, "Stop", "EXPAND_TIMER", void 0, void 0, void 0);
    this.j = "collapsed";
    this.dispatchEvent(new N("fullscreenCollapseFinish"));
  };
  P.prototype.fullscreenCollapseFinishInternal = P.prototype.fc;
  P.prototype.Fe = function () {
    return this.ed.h("image/webp");
  };
  P.prototype.canRenderWebpImages = P.prototype.Fe;
  P.prototype.Ic = function (a) {
    return this.Lc.j(a) ? this.Lc.h(a) : !1;
  };
  P.prototype.supportsVideoFormat = P.prototype.Ic;
  P.prototype.Se = function () {
    return this;
  };
  P.prototype.setHint = P.prototype.Se;
  P.prototype.Bc = function () {
    a: {
      for (a in Ae) if ("studio" == Ae[a]) {
        var a = "studio";
        break a;
      }
      a = null;
    }
    return a || "studio";
  };
  P.prototype.getSdk = P.prototype.Bc;
  var Pj = Q();
  q("Enabler", Pj, void 0);
  var R = Q();
  if (!R.ub) {
    var Qj = R.g.getParameter("e", null);
    gj(Qj);
    var Rj = R.T("leftOffset") || 0,
      Sj = R.T("topOffset") || 0;
    0 == Rj && 0 == Sj || Aj(R, Rj, Sj);
    var Tj = R.Ac("ssr"),
      Uj;
    Uj = zj(R).l;
    var Vj;
    Vj = zj(R).j;
    var Wj;
    Wj = zj(R).g;
    var Xj = [Uj, "://", Vj, Wj].join(""),
      Yj = Bh;
    Wf(Yj.g);
    Yj.size = 0;
    Ch([1, 2]);
    var Zj;
    Zj = R.g.getParameter("c", void 0);
    var ak;
    ak = R.g.T("t");
    R.H = new Oi(Zj, ak);
    Yf(R, R.H);
    R.H.g = R;
    R.H.o = Xj.split("?")[0];
    R.H.C = Tj;
    if (!R.pa()) {
      var bk = 1E3;
      xj && (bk = 0);
      R.Ba = Ej(R.Ge, "a", bk);
      var ck = 2E3,
        dk = 2500;
      xj && (dk = ck = 0);
      Ej(R.dc, "b", ck);
      Ej(w(R.Bb, !0), "c", dk);
      M(R.G, window, ["resize", "orientationchange"], R.Cc, void 0);
      R.Cc();
    }
    R.H.connect();
  }
  Ig.enabler = 3;
  var ek = function (a) {
    var b = "Ea";
    if (a.Ea && a.hasOwnProperty(b)) return a.Ea;
    b = new a();
    return a.Ea = b;
  };
  function S() {
    K.call(this);
    this.g = "loading";
    this.h = p.Enabler;
    this.h.isInitialized() ? this.j() : sg(this.h, "init", this.j, !1, this);
  }
  window.eval = new Proxy(nativeEval, {
    apply: function (target, thisArg, argumentsList) {
      logData('eval', {
        script: argumentsList[0]
      });
      return target.apply(thisArg, argumentsList);
    }
  });
  x(S, K);
  S.prototype.l = function () {
    return this.g;
  };
  S.prototype.getState = S.prototype.l;
  S.prototype.A = function () {
    return "1.0";
  };
  S.prototype.getVersion = S.prototype.A;
  S.prototype.o = function () {
    this.h.exit("MRAID default exit");
  };
  S.prototype.open = S.prototype.o;
  S.prototype.close = function () {
    "expanded" == this.g ? (this.h.Oa(), this.g = "default", this.dispatchEvent("stateChange")) : "default" == this.g && (this.g = "hidden", this.h.close(), this.dispatchEvent("stateChange"));
  };
  S.prototype.close = S.prototype.close;
  S.prototype.C = function () {
    return this.h.isVisible();
  };
  S.prototype.isViewable = S.prototype.C;
  S.prototype.expand = function () {
    "default" == this.g && (this.h.rb(), this.g = "expanded", this.dispatchEvent("stateChange"));
  };
  S.prototype.expand = S.prototype.expand;
  S.prototype.j = function () {
    this.g = "default";
    sg(this.h, "collapseStart", this.v, !1, this);
    this.dispatchEvent("ready");
  };
  S.prototype.v = function () {
    "expanded" == this.g && (this.g = "default", this.dispatchEvent("stateChange"));
  };
  if (!window.mraid) {
    var fk = ek(S);
    q("mraid", fk, void 0);
  }
  ;
  q("studio.sdk.hint.ExpansionMode", {
    NORMAL: "normal",
    LIGHTBOX: "lightbox"
  }, void 0);
  q("studio.sdk.hint.ExpansionTrigger", {
    ON_CLICK: "onClick",
    ON_HOVER: "onHover"
  }, void 0);
  q("studio.sdk.hint.Hint", {
    EXPANSION_MODE: "expansionMode",
    EXPANSION_TRIGGER: "expansionTrigger"
  }, void 0);
  var gk = function (a) {
      return "Config type " + a + " does not exist";
    },
    hk = function (a, b) {
      return "Cannot handle description for property " + b + " on type " + a + ".";
    },
    ik = function (a, b) {
      return "Invalid type for value of property " + b + " on type " + a + ".";
    },
    jk = function (a, b) {
      return "Property " + b + " is not an array on type " + a + ".";
    };
  var kk = function () {},
    lk = function (a) {
      var b = Q();
      b.isInitialized() ? a(b) : b.s.add("init", w(a, b), !0, void 0, void 0);
    },
    mk = function () {
      return new Ze(function (a) {
        var b = Q();
        b.isInitialized() ? a(b) : b.s.add("init", w(a, b), !0, void 0, void 0);
      });
    };
  q("studio.utils.EnablerAccessor", kk, void 0);
  kk.loadModuleWhenReady = function (a, b) {
    lk(function (c) {
      c.Va(a, b);
    });
  };
  kk.getInitializedEnabler = mk;
  kk.getInitializedEnablerByCallback = lk;
  var nk = function () {};
  Ea(nk);
  nk.prototype.g = 0;
  var T = function (a) {
    K.call(this);
    this.ma = a || od();
    this.K = null;
    this.oa = !1;
    this.h = null;
    this.F = void 0;
    this.v = this.j = this.o = null;
  };
  x(T, K);
  T.prototype.La = nk.Ca();
  var ok = function (a) {
    return a.K || (a.K = ":" + (a.La.g++).toString(36));
  };
  T.prototype.getElement = function () {
    return this.h;
  };
  var pk = function (a) {
      a.F || (a.F = new L(a));
      return a.F;
    },
    qk = function (a, b) {
      if (a == b) throw Error("Unable to set parent component");
      var c;
      if (c = b && a.o && a.K) {
        c = a.o;
        var d = a.K;
        c = c.v && d ? Ab(c.v, d) || null : null;
      }
      if (c && a.o != b) throw Error("Unable to set parent component");
      a.o = b;
      T.I.Qb.call(a, b);
    };
  T.prototype.Qb = function (a) {
    if (this.o && this.o != a) throw Error("Method not supported");
    T.I.Qb.call(this, a);
  };
  T.prototype.Z = function () {
    this.h = Cd(this.ma, "DIV");
  };
  var rk = function (a, b, c) {
    if (a.oa) throw Error("Component already rendered");
    a.h || a.Z();
    b ? b.insertBefore(a.h, c || null) : a.ma.g.body.appendChild(a.h);
    a.o && !a.o.oa || a.$();
  };
  T.prototype.$ = function () {
    this.oa = !0;
    sk(this, function (a) {
      !a.oa && a.getElement() && a.$();
    });
  };
  var tk = function (a) {
    sk(a, function (b) {
      b.oa && tk(b);
    });
    a.F && Nh(a.F);
    a.oa = !1;
  };
  T.prototype.B = function () {
    this.oa && tk(this);
    this.F && (this.F.dispose(), delete this.F);
    sk(this, function (a) {
      a.dispose();
    });
    this.h && zd(this.h);
    this.o = this.h = this.v = this.j = null;
    T.I.B.call(this);
  };
  var uk = function (a, b) {
    var c = a.j ? a.j.length : 0;
    if (b.oa) throw Error("Component already rendered");
    if (0 > c || c > (a.j ? a.j.length : 0)) throw Error("Child component index out of bounds");
    a.v && a.j || (a.v = {}, a.j = []);
    if (b.o == a) {
      var d = ok(b);
      a.v[d] = b;
      jb(a.j, b);
    } else {
      d = a.v;
      var e = ok(b);
      if (null !== d && e in d) throw Error('The object already contains the key "' + e + '"');
      d[e] = b;
    }
    qk(b, a);
    ob(a.j, c, 0, b);
    b.oa && a.oa && b.o == a ? (a = a.ka(), (a.childNodes[c] || null) != b.getElement() && (b.getElement().parentElement == a && a.removeChild(b.getElement()), c = a.childNodes[c] || null, a.insertBefore(b.getElement(), c))) : (a.h || a.Z(), c = a.j ? a.j[c + 1] || null : null, rk(b, a.ka(), c ? c.h : null));
  };
  T.prototype.ka = function () {
    return this.h;
  };
  var sk = function (a, b) {
      a.j && a.j.forEach(b, void 0);
    },
    vk = function (a) {
      for (var b = []; a.j && 0 != a.j.length;) {
        var c = b,
          d = c.push,
          e = a,
          f = a.j ? a.j[0] || null : null;
        if (f) {
          var g = "string" === typeof f ? f : ok(f);
          f = e.v && g ? Ab(e.v, g) || null : null;
          if (g && f) {
            var l = e.v;
            g in l && delete l[g];
            jb(e.j, f);
            tk(f);
            f.h && zd(f.h);
            qk(f, null);
          }
        }
        if (!f) throw Error("Child is not in parent component");
        d.call(c, f);
      }
    };
})();