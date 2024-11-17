// Copyright 2011 Google Inc. All Rights Reserved.
(function () {
  var l,
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
    p = function (a, b) {
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
  p("Symbol", function (a) {
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
  p("Symbol.iterator", function (a) {
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
    ia = function (a) {
      return a.raw = a;
    },
    r = function (a) {
      var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
      if (b) return b.call(a);
      if ("number" == typeof a.length) return {
        next: aa(a)
      };
      throw Error(String(a) + " is not an iterable or ArrayLike");
    },
    ka = function (a) {
      if (!(a instanceof Array)) {
        a = r(a);
        for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
        a = c;
      }
      return a;
    },
    la = function (a, b) {
      return Object.prototype.hasOwnProperty.call(a, b);
    },
    ma = "function" == typeof Object.assign ? Object.assign : function (a, b) {
      for (var c = 1; c < arguments.length; c++) {
        var d = arguments[c];
        if (d) for (var e in d) la(d, e) && (a[e] = d[e]);
      }
      return a;
    };
  p("Object.assign", function (a) {
    return a || ma;
  });
  var na = "function" == typeof Object.create ? Object.create : function (a) {
      var b = function () {};
      b.prototype = a;
      return new b();
    },
    oa = function () {
      function a() {
        function c() {}
        new c();
        Reflect.construct(c, [], function () {});
        return new c() instanceof c;
      }
      if ("undefined" != typeof Reflect && Reflect.construct) {
        if (a()) return Reflect.construct;
        var b = Reflect.construct;
        return function (c, d, e) {
          c = b(c, d);
          e && Reflect.setPrototypeOf(c, e.prototype);
          return c;
        };
      }
      return function (c, d, e) {
        void 0 === e && (e = c);
        e = na(e.prototype || Object.prototype);
        return Function.prototype.apply.call(c, e, d) || e;
      };
    }(),
    pa;
  if ("function" == typeof Object.setPrototypeOf) pa = Object.setPrototypeOf;else {
    var qa;
    a: {
      var ra = {
          a: !0
        },
        sa = {};
      try {
        sa.__proto__ = ra;
        qa = sa.a;
        break a;
      } catch (a) {}
      qa = !1;
    }
    pa = qa ? function (a, b) {
      a.__proto__ = b;
      if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
      return a;
    } : null;
  }
  var ta = pa,
    u = function (a, b) {
      a.prototype = na(b.prototype);
      a.prototype.constructor = a;
      if (ta) ta(a, b);else for (var c in b) if ("prototype" != c) if (Object.defineProperties) {
        var d = Object.getOwnPropertyDescriptor(b, c);
        d && Object.defineProperty(a, c, d);
      } else a[c] = b[c];
      a.Da = b.prototype;
    },
    va = function () {
      this.A = !1;
      this.o = null;
      this.h = void 0;
      this.g = 1;
      this.I = this.j = 0;
      this.l = null;
    },
    wa = function (a) {
      if (a.A) throw new TypeError("Generator is already running");
      a.A = !0;
    };
  va.prototype.B = function (a) {
    this.h = a;
  };
  var xa = function (a, b) {
    a.l = {
      fe: b,
      Nf: !0
    };
    a.g = a.j || a.I;
  };
  va.prototype.return = function (a) {
    this.l = {
      return: a
    };
    this.g = this.I;
  };
  var ya = function (a, b, c) {
      a.g = c;
      return {
        value: b
      };
    },
    za = function (a) {
      a.g = 0;
      a.j = 0;
    },
    Aa = function (a) {
      a.j = 0;
      var b = a.l.fe;
      a.l = null;
      return b;
    },
    Ba = function (a) {
      this.g = new va();
      this.h = a;
    },
    Ea = function (a, b) {
      wa(a.g);
      var c = a.g.o;
      if (c) return Ca(a, "return" in c ? c["return"] : function (d) {
        return {
          value: d,
          done: !0
        };
      }, b, a.g.return);
      a.g.return(b);
      return Da(a);
    },
    Ca = function (a, b, c, d) {
      try {
        var e = b.call(a.g.o, c);
        if (!(e instanceof Object)) throw new TypeError("Iterator result " + e + " is not an object");
        if (!e.done) return a.g.A = !1, e;
        var f = e.value;
      } catch (g) {
        return a.g.o = null, xa(a.g, g), Da(a);
      }
      a.g.o = null;
      d.call(a.g, f);
      return Da(a);
    },
    Da = function (a) {
      for (; a.g.g;) try {
        var b = a.h(a.g);
        if (b) return a.g.A = !1, {
          value: b.value,
          done: !1
        };
      } catch (c) {
        a.g.h = void 0, xa(a.g, c);
      }
      a.g.A = !1;
      if (a.g.l) {
        b = a.g.l;
        a.g.l = null;
        if (b.Nf) throw b.fe;
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
    Fa = function (a) {
      this.next = function (b) {
        wa(a.g);
        a.g.o ? b = Ca(a, a.g.o.next, b, a.g.B) : (a.g.B(b), b = Da(a));
        return b;
      };
      this.throw = function (b) {
        wa(a.g);
        a.g.o ? b = Ca(a, a.g.o["throw"], b, a.g.B) : (xa(a.g, b), b = Da(a));
        return b;
      };
      this.return = function (b) {
        return Ea(a, b);
      };
      this[Symbol.iterator] = function () {
        return this;
      };
    },
    Ga = function (a) {
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
    Ha = function (a) {
      return Ga(new Fa(new Ba(a)));
    },
    Ia = function () {
      for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
      return b;
    };
  p("Reflect", function (a) {
    return a ? a : {};
  });
  p("Reflect.construct", function () {
    return oa;
  });
  p("Reflect.setPrototypeOf", function (a) {
    return a ? a : ta ? function (b, c) {
      try {
        return ta(b, c), !0;
      } catch (d) {
        return !1;
      }
    } : null;
  });
  p("Promise", function (a) {
    function b() {
      this.g = null;
    }
    function c(g) {
      return g instanceof e ? g : new e(function (h) {
        h(g);
      });
    }
    if (a) return a;
    b.prototype.h = function (g) {
      if (null == this.g) {
        this.g = [];
        var h = this;
        this.j(function () {
          h.l();
        });
      }
      this.g.push(g);
    };
    var d = da.setTimeout;
    b.prototype.j = function (g) {
      d(g, 0);
    };
    b.prototype.l = function () {
      for (; this.g && this.g.length;) {
        var g = this.g;
        this.g = [];
        for (var h = 0; h < g.length; ++h) {
          var k = g[h];
          g[h] = null;
          try {
            k();
          } catch (m) {
            this.o(m);
          }
        }
      }
      this.g = null;
    };
    b.prototype.o = function (g) {
      this.j(function () {
        throw g;
      });
    };
    var e = function (g) {
      this.g = 0;
      this.j = void 0;
      this.h = [];
      this.B = !1;
      var h = this.o();
      try {
        g(h.resolve, h.reject);
      } catch (k) {
        h.reject(k);
      }
    };
    e.prototype.o = function () {
      function g(m) {
        return function (n) {
          k || (k = !0, m.call(h, n));
        };
      }
      var h = this,
        k = !1;
      return {
        resolve: g(this.G),
        reject: g(this.l)
      };
    };
    e.prototype.G = function (g) {
      if (g === this) this.l(new TypeError("A Promise cannot resolve to itself"));else if (g instanceof e) this.J(g);else {
        a: switch (typeof g) {
          case "object":
            var h = null != g;
            break a;
          case "function":
            h = !0;
            break a;
          default:
            h = !1;
        }
        h ? this.F(g) : this.A(g);
      }
    };
    e.prototype.F = function (g) {
      var h = void 0;
      try {
        h = g.then;
      } catch (k) {
        this.l(k);
        return;
      }
      "function" == typeof h ? this.M(h, g) : this.A(g);
    };
    e.prototype.l = function (g) {
      this.I(2, g);
    };
    e.prototype.A = function (g) {
      this.I(1, g);
    };
    e.prototype.I = function (g, h) {
      if (0 != this.g) throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.g);
      this.g = g;
      this.j = h;
      2 === this.g && this.H();
      this.K();
    };
    e.prototype.H = function () {
      var g = this;
      d(function () {
        if (g.D()) {
          var h = da.console;
          "undefined" !== typeof h && h.error(g.j);
        }
      }, 1);
    };
    e.prototype.D = function () {
      if (this.B) return !1;
      var g = da.CustomEvent,
        h = da.Event,
        k = da.dispatchEvent;
      if ("undefined" === typeof k) return !0;
      "function" === typeof g ? g = new g("unhandledrejection", {
        cancelable: !0
      }) : "function" === typeof h ? g = new h("unhandledrejection", {
        cancelable: !0
      }) : (g = da.document.createEvent("CustomEvent"), g.initCustomEvent("unhandledrejection", !1, !0, g));
      g.promise = this;
      g.reason = this.j;
      return k(g);
    };
    e.prototype.K = function () {
      if (null != this.h) {
        for (var g = 0; g < this.h.length; ++g) f.h(this.h[g]);
        this.h = null;
      }
    };
    var f = new b();
    e.prototype.J = function (g) {
      var h = this.o();
      g.jc(h.resolve, h.reject);
    };
    e.prototype.M = function (g, h) {
      var k = this.o();
      try {
        g.call(h, k.resolve, k.reject);
      } catch (m) {
        k.reject(m);
      }
    };
    e.prototype.then = function (g, h) {
      function k(t, w) {
        return "function" == typeof t ? function (B) {
          try {
            m(t(B));
          } catch (J) {
            n(J);
          }
        } : w;
      }
      var m,
        n,
        q = new e(function (t, w) {
          m = t;
          n = w;
        });
      this.jc(k(g, m), k(h, n));
      return q;
    };
    e.prototype.catch = function (g) {
      return this.then(void 0, g);
    };
    e.prototype.jc = function (g, h) {
      function k() {
        switch (m.g) {
          case 1:
            g(m.j);
            break;
          case 2:
            h(m.j);
            break;
          default:
            throw Error("Unexpected state: " + m.g);
        }
      }
      var m = this;
      null == this.h ? f.h(k) : this.h.push(k);
      this.B = !0;
    };
    e.resolve = c;
    e.reject = function (g) {
      return new e(function (h, k) {
        k(g);
      });
    };
    e.race = function (g) {
      return new e(function (h, k) {
        for (var m = r(g), n = m.next(); !n.done; n = m.next()) c(n.value).jc(h, k);
      });
    };
    e.all = function (g) {
      var h = r(g),
        k = h.next();
      return k.done ? c([]) : new e(function (m, n) {
        function q(B) {
          return function (J) {
            t[B] = J;
            w--;
            0 == w && m(t);
          };
        }
        var t = [],
          w = 0;
        do t.push(void 0), w++, c(k.value).jc(q(t.length - 1), n), k = h.next(); while (!k.done);
      });
    };
    return e;
  });
  p("Object.setPrototypeOf", function (a) {
    return a || ta;
  });
  p("Array.prototype.find", function (a) {
    return a ? a : function (b, c) {
      a: {
        var d = this;
        d instanceof String && (d = String(d));
        for (var e = d.length, f = 0; f < e; f++) {
          var g = d[f];
          if (b.call(c, g, f, d)) {
            b = g;
            break a;
          }
        }
        b = void 0;
      }
      return b;
    };
  });
  p("WeakMap", function (a) {
    function b() {}
    function c(k) {
      var m = typeof k;
      return "object" === m && null !== k || "function" === m;
    }
    function d(k) {
      if (!la(k, f)) {
        var m = new b();
        ba(k, f, {
          value: m
        });
      }
    }
    function e(k) {
      var m = Object[k];
      m && (Object[k] = function (n) {
        if (n instanceof b) return n;
        Object.isExtensible(n) && d(n);
        return m(n);
      });
    }
    if (function () {
      if (!a || !Object.seal) return !1;
      try {
        var k = Object.seal({}),
          m = Object.seal({}),
          n = new a([[k, 2], [m, 3]]);
        if (2 != n.get(k) || 3 != n.get(m)) return !1;
        n.delete(k);
        n.set(m, 4);
        return !n.has(k) && 4 == n.get(m);
      } catch (q) {
        return !1;
      }
    }()) return a;
    var f = "$jscomp_hidden_" + Math.random();
    e("freeze");
    e("preventExtensions");
    e("seal");
    var g = 0,
      h = function (k) {
        this.g = (g += Math.random() + 1).toString();
        if (k) {
          k = r(k);
          for (var m; !(m = k.next()).done;) m = m.value, this.set(m[0], m[1]);
        }
      };
    h.prototype.set = function (k, m) {
      if (!c(k)) throw Error("Invalid WeakMap key");
      d(k);
      if (!la(k, f)) throw Error("WeakMap key fail: " + k);
      k[f][this.g] = m;
      return this;
    };
    h.prototype.get = function (k) {
      return c(k) && la(k, f) ? k[f][this.g] : void 0;
    };
    h.prototype.has = function (k) {
      return c(k) && la(k, f) && la(k[f], this.g);
    };
    h.prototype.delete = function (k) {
      return c(k) && la(k, f) && la(k[f], this.g) ? delete k[f][this.g] : !1;
    };
    return h;
  });
  p("Map", function (a) {
    if (function () {
      if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
      try {
        var h = Object.seal({
            x: 4
          }),
          k = new a(r([[h, "s"]]));
        if ("s" != k.get(h) || 1 != k.size || k.get({
          x: 4
        }) || k.set({
          x: 4
        }, "t") != k || 2 != k.size) return !1;
        var m = k.entries(),
          n = m.next();
        if (n.done || n.value[0] != h || "s" != n.value[1]) return !1;
        n = m.next();
        return n.done || 4 != n.value[0].x || "t" != n.value[1] || !m.next().done ? !1 : !0;
      } catch (q) {
        return !1;
      }
    }()) return a;
    var b = new WeakMap(),
      c = function (h) {
        this[0] = {};
        this[1] = f();
        this.size = 0;
        if (h) {
          h = r(h);
          for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1]);
        }
      };
    c.prototype.set = function (h, k) {
      h = 0 === h ? 0 : h;
      var m = d(this, h);
      m.list || (m.list = this[0][m.id] = []);
      m.na ? m.na.value = k : (m.na = {
        next: this[1],
        Va: this[1].Va,
        head: this[1],
        key: h,
        value: k
      }, m.list.push(m.na), this[1].Va.next = m.na, this[1].Va = m.na, this.size++);
      return this;
    };
    c.prototype.delete = function (h) {
      h = d(this, h);
      return h.na && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this[0][h.id], h.na.Va.next = h.na.next, h.na.next.Va = h.na.Va, h.na.head = null, this.size--, !0) : !1;
    };
    c.prototype.clear = function () {
      this[0] = {};
      this[1] = this[1].Va = f();
      this.size = 0;
    };
    c.prototype.has = function (h) {
      return !!d(this, h).na;
    };
    c.prototype.get = function (h) {
      return (h = d(this, h).na) && h.value;
    };
    c.prototype.entries = function () {
      return e(this, function (h) {
        return [h.key, h.value];
      });
    };
    c.prototype.keys = function () {
      return e(this, function (h) {
        return h.key;
      });
    };
    c.prototype.values = function () {
      return e(this, function (h) {
        return h.value;
      });
    };
    c.prototype.forEach = function (h, k) {
      for (var m = this.entries(), n; !(n = m.next()).done;) n = n.value, h.call(k, n[1], n[0], this);
    };
    c.prototype[Symbol.iterator] = c.prototype.entries;
    var d = function (h, k) {
        var m = k && typeof k;
        "object" == m || "function" == m ? b.has(k) ? m = b.get(k) : (m = "" + ++g, b.set(k, m)) : m = "p_" + k;
        var n = h[0][m];
        if (n && la(h[0], m)) for (h = 0; h < n.length; h++) {
          var q = n[h];
          if (k !== k && q.key !== q.key || k === q.key) return {
            id: m,
            list: n,
            index: h,
            na: q
          };
        }
        return {
          id: m,
          list: n,
          index: -1,
          na: void 0
        };
      },
      e = function (h, k) {
        var m = h[1];
        return fa(function () {
          if (m) {
            for (; m.head != h[1];) m = m.Va;
            for (; m.next != m.head;) return m = m.next, {
              done: !1,
              value: k(m)
            };
            m = null;
          }
          return {
            done: !0,
            value: void 0
          };
        });
      },
      f = function () {
        var h = {};
        return h.Va = h.next = h.head = h;
      },
      g = 0;
    return c;
  });
  p("Math.trunc", function (a) {
    return a ? a : function (b) {
      b = Number(b);
      if (isNaN(b) || Infinity === b || -Infinity === b || 0 === b) return b;
      var c = Math.floor(Math.abs(b));
      return 0 > b ? -c : c;
    };
  });
  p("Object.values", function (a) {
    return a ? a : function (b) {
      var c = [],
        d;
      for (d in b) la(b, d) && c.push(b[d]);
      return c;
    };
  });
  p("Object.is", function (a) {
    return a ? a : function (b, c) {
      return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c;
    };
  });
  p("Array.prototype.includes", function (a) {
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
  var Ka = function (a, b, c) {
    if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
    if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
    return a + "";
  };
  p("String.prototype.includes", function (a) {
    return a ? a : function (b, c) {
      return -1 !== Ka(this, b, "includes").indexOf(b, c || 0);
    };
  });
  p("Number.isFinite", function (a) {
    return a ? a : function (b) {
      return "number" !== typeof b ? !1 : !isNaN(b) && Infinity !== b && -Infinity !== b;
    };
  });
  p("Number.MAX_SAFE_INTEGER", function () {
    return 9007199254740991;
  });
  p("Number.isInteger", function (a) {
    return a ? a : function (b) {
      return Number.isFinite(b) ? b === Math.floor(b) : !1;
    };
  });
  p("Number.isSafeInteger", function (a) {
    return a ? a : function (b) {
      return Number.isInteger(b) && Math.abs(b) <= Number.MAX_SAFE_INTEGER;
    };
  });
  p("Number.isNaN", function (a) {
    return a ? a : function (b) {
      return "number" === typeof b && isNaN(b);
    };
  });
  var La = function (a, b) {
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
  p("Array.prototype.entries", function (a) {
    return a ? a : function () {
      return La(this, function (b, c) {
        return [b, c];
      });
    };
  });
  p("Array.prototype.keys", function (a) {
    return a ? a : function () {
      return La(this, function (b) {
        return b;
      });
    };
  });
  p("Array.prototype.values", function (a) {
    return a ? a : function () {
      return La(this, function (b, c) {
        return c;
      });
    };
  });
  p("Array.from", function (a) {
    return a ? a : function (b, c, d) {
      c = null != c ? c : function (h) {
        return h;
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
  p("Object.entries", function (a) {
    return a ? a : function (b) {
      var c = [],
        d;
      for (d in b) la(b, d) && c.push([d, b[d]]);
      return c;
    };
  });
  p("globalThis", function (a) {
    return a || da;
  });
  p("String.prototype.startsWith", function (a) {
    return a ? a : function (b, c) {
      var d = Ka(this, b, "startsWith");
      b += "";
      var e = d.length,
        f = b.length;
      c = Math.max(0, Math.min(c | 0, d.length));
      for (var g = 0; g < f && c < e;) if (d[c++] != b[g++]) return !1;
      return g >= f;
    };
  });
  p("String.prototype.repeat", function (a) {
    return a ? a : function (b) {
      var c = Ka(this, null, "repeat");
      if (0 > b || 1342177279 < b) throw new RangeError("Invalid count value");
      b |= 0;
      for (var d = ""; b;) if (b & 1 && (d += c), b >>>= 1) c += c;
      return d;
    };
  });
  p("String.prototype.padStart", function (a) {
    return a ? a : function (b, c) {
      var d = Ka(this, null, "padStart");
      b -= d.length;
      c = void 0 !== c ? String(c) : " ";
      return (0 < b && c ? c.repeat(Math.ceil(b / c.length)).substring(0, b) : "") + d;
    };
  });
  p("Math.imul", function (a) {
    return a ? a : function (b, c) {
      b = Number(b);
      c = Number(c);
      var d = b & 65535,
        e = c & 65535;
      return d * e + ((b >>> 16 & 65535) * e + d * (c >>> 16 & 65535) << 16 >>> 0) | 0;
    };
  });
  p("Object.fromEntries", function (a) {
    return a ? a : function (b) {
      var c = {};
      if (!(Symbol.iterator in b)) throw new TypeError("" + b + " is not iterable");
      b = b[Symbol.iterator].call(b);
      for (var d = b.next(); !d.done; d = b.next()) {
        d = d.value;
        if (Object(d) !== d) throw new TypeError("iterable for fromEntries should yield objects");
        c[d[0]] = d[1];
      }
      return c;
    };
  }); /*
      Copyright The Closure Library Authors.
      SPDX-License-Identifier: Apache-2.0
      */
  var Ma = Ma || {},
    v = this || self,
    x = function (a, b, c) {
      a = a.split(".");
      c = c || v;
      a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
      for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b;
    },
    Oa = function (a, b) {
      var c = Na("CLOSURE_FLAGS");
      a = c && c[a];
      return null != a ? a : b;
    },
    Na = function (a, b) {
      a = a.split(".");
      b = b || v;
      for (var c = 0; c < a.length; c++) if (b = b[a[c]], null == b) return null;
      return b;
    },
    Pa = function (a) {
      var b = typeof a;
      return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null";
    },
    Qa = function (a) {
      var b = Pa(a);
      return "array" == b || "object" == b && "number" == typeof a.length;
    },
    Sa = function (a) {
      var b = typeof a;
      return "object" == b && null != a || "function" == b;
    },
    Wa = function (a) {
      return Object.prototype.hasOwnProperty.call(a, Ta) && a[Ta] || (a[Ta] = ++Va);
    },
    Xa = function (a) {
      null !== a && "removeAttribute" in a && a.removeAttribute(Ta);
      try {
        delete a[Ta];
      } catch (b) {}
    },
    Ta = "closure_uid_" + (1E9 * Math.random() >>> 0),
    Va = 0,
    Ya = function (a, b, c) {
      return a.call.apply(a.bind, arguments);
    },
    Za = function (a, b, c) {
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
    $a = function (a, b, c) {
      $a = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Ya : Za;
      return $a.apply(null, arguments);
    },
    ab = function (a, b) {
      var c = Array.prototype.slice.call(arguments, 1);
      return function () {
        var d = c.slice();
        d.push.apply(d, arguments);
        return a.apply(this, d);
      };
    },
    bb = function (a, b) {
      function c() {}
      c.prototype = b.prototype;
      a.Da = b.prototype;
      a.prototype = new c();
      a.prototype.constructor = a;
      a.ci = function (d, e, f) {
        for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
        return b.prototype[e].apply(d, g);
      };
    },
    cb = function (a) {
      return a;
    };
  function db(a, b) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, db);else {
      var c = Error().stack;
      c && (this.stack = c);
    }
    a && (this.message = String(a));
    void 0 !== b && (this.cause = b);
  }
  bb(db, Error);
  db.prototype.name = "CustomError";
  var eb;
  var fb,
    gb = "function" === typeof String.prototype.g,
    ib = "undefined" !== typeof TextEncoder;
  function jb(a) {
    v.setTimeout(function () {
      throw a;
    }, 0);
  }
  ;
  var kb = function (a, b) {
      var c = a.length - b.length;
      return 0 <= c && a.indexOf(b, c) == c;
    },
    lb = function (a) {
      return /^[\s\xa0]*$/.test(a);
    },
    nb = String.prototype.trim ? function (a) {
      return a.trim();
    } : function (a) {
      return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
    },
    ob = function (a, b) {
      return -1 != a.indexOf(b);
    },
    pb = function (a, b) {
      return ob(a.toLowerCase(), b.toLowerCase());
    },
    rb = function (a, b) {
      var c = 0;
      a = nb(String(a)).split(".");
      b = nb(String(b)).split(".");
      for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
        var f = a[e] || "",
          g = b[e] || "";
        do {
          f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
          g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
          if (0 == f[0].length && 0 == g[0].length) break;
          c = qb(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || qb(0 == f[2].length, 0 == g[2].length) || qb(f[2], g[2]);
          f = f[3];
          g = g[3];
        } while (0 == c);
      }
      return c;
    },
    qb = function (a, b) {
      return a < b ? -1 : a > b ? 1 : 0;
    };
  var sb = Oa(610401301, !1),
    tb = Oa(572417392, !0);
  function ub() {
    var a = v.navigator;
    return a && (a = a.userAgent) ? a : "";
  }
  var vb,
    wb = v.navigator;
  vb = wb ? wb.userAgentData || null : null;
  function zb(a) {
    return sb ? vb ? vb.brands.some(function (b) {
      return (b = b.brand) && ob(b, a);
    }) : !1 : !1;
  }
  function y(a) {
    return ob(ub(), a);
  }
  ;
  function Ab() {
    return sb ? !!vb && 0 < vb.brands.length : !1;
  }
  function Bb() {
    return Ab() ? !1 : y("Opera");
  }
  function Cb() {
    return Ab() ? !1 : y("Trident") || y("MSIE");
  }
  function Db() {
    return y("Firefox") || y("FxiOS");
  }
  function Eb() {
    return y("Safari") && !(Fb() || (Ab() ? 0 : y("Coast")) || Bb() || (Ab() ? 0 : y("Edge")) || (Ab() ? zb("Microsoft Edge") : y("Edg/")) || (Ab() ? zb("Opera") : y("OPR")) || Db() || y("Silk") || y("Android"));
  }
  function Fb() {
    return Ab() ? zb("Chromium") : (y("Chrome") || y("CriOS")) && !(Ab() ? 0 : y("Edge")) || y("Silk");
  }
  ;
  function Gb() {
    return sb ? !!vb && !!vb.platform : !1;
  }
  function Hb() {
    return Gb() ? "Android" === vb.platform : y("Android");
  }
  function Ib() {
    return y("iPhone") && !y("iPod") && !y("iPad");
  }
  function Jb() {
    return Gb() ? "macOS" === vb.platform : y("Macintosh");
  }
  ;
  var Kb = function (a, b) {
      if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
      for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
      return -1;
    },
    Lb = function (a, b) {
      for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a);
    };
  function Mb(a, b) {
    for (var c = "string" === typeof a ? a.split("") : a, d = a.length - 1; 0 <= d; --d) d in c && b.call(void 0, c[d], d, a);
  }
  var Nb = function (a, b) {
      for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++) if (g in f) {
        var h = f[g];
        b.call(void 0, h, g, a) && (d[e++] = h);
      }
      return d;
    },
    Ob = function (a, b) {
      for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
      return d;
    },
    Pb = function (a, b, c) {
      var d = c;
      Lb(a, function (e, f) {
        d = b.call(void 0, d, e, f, a);
      });
      return d;
    },
    Qb = function (a, b) {
      for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) if (e in d && b.call(void 0, d[e], e, a)) return !0;
      return !1;
    };
  function Rb(a, b) {
    b = Sb(a, b);
    return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b];
  }
  function Sb(a, b) {
    for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) if (e in d && b.call(void 0, d[e], e, a)) return e;
    return -1;
  }
  function Tb(a, b) {
    for (var c = "string" === typeof a ? a.split("") : a, d = a.length - 1; 0 <= d; d--) if (d in c && b.call(void 0, c[d], d, a)) return d;
    return -1;
  }
  function Ub(a, b) {
    return 0 <= Kb(a, b);
  }
  function Vb(a, b) {
    b = Kb(a, b);
    var c;
    (c = 0 <= b) && Wb(a, b);
    return c;
  }
  function Wb(a, b) {
    return 1 == Array.prototype.splice.call(a, b, 1).length;
  }
  function Xb(a, b) {
    var c = 0;
    Mb(a, function (d, e) {
      b.call(void 0, d, e, a) && Wb(a, e) && c++;
    });
  }
  function Yb(a) {
    return Array.prototype.concat.apply([], arguments);
  }
  function Zb(a) {
    var b = a.length;
    if (0 < b) {
      for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
      return c;
    }
    return [];
  }
  function $b(a) {
    for (var b = 0, c = 0, d = {}; c < a.length;) {
      var e = a[c++],
        f = Sa(e) ? "o" + Wa(e) : (typeof e).charAt(0) + e;
      Object.prototype.hasOwnProperty.call(d, f) || (d[f] = !0, a[b++] = e);
    }
    a.length = b;
  }
  function ac(a, b) {
    a.sort(b || bc);
  }
  function bc(a, b) {
    return a > b ? 1 : a < b ? -1 : 0;
  }
  function cc(a) {
    for (var b = [], c = 0; c < a; c++) b[c] = "";
    return b;
  }
  ;
  var dc = function (a) {
    dc[" "](a);
    return a;
  };
  dc[" "] = function () {};
  var ec = function (a, b) {
      try {
        return dc(a[b]), !0;
      } catch (c) {}
      return !1;
    },
    hc = function (a) {
      var b = gc;
      return Object.prototype.hasOwnProperty.call(b, 8) ? b[8] : b[8] = a(8);
    };
  var ic = Bb(),
    jc = Cb(),
    kc = y("Edge"),
    lc = y("Gecko") && !(pb(ub(), "WebKit") && !y("Edge")) && !(y("Trident") || y("MSIE")) && !y("Edge"),
    mc = pb(ub(), "WebKit") && !y("Edge"),
    nc = Jb(),
    oc = Hb(),
    pc = Ib(),
    qc = y("iPad"),
    rc = y("iPod"),
    sc = Ib() || y("iPad") || y("iPod"),
    tc = function () {
      var a = v.document;
      return a ? a.documentMode : void 0;
    },
    uc;
  a: {
    var vc = "",
      yc = function () {
        var a = ub();
        if (lc) return /rv:([^\);]+)(\)|;)/.exec(a);
        if (kc) return /Edge\/([\d\.]+)/.exec(a);
        if (jc) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (mc) return /WebKit\/(\S+)/.exec(a);
        if (ic) return /(?:Version)[ \/]?(\S+)/.exec(a);
      }();
    yc && (vc = yc ? yc[1] : "");
    if (jc) {
      var zc = tc();
      if (null != zc && zc > parseFloat(vc)) {
        uc = String(zc);
        break a;
      }
    }
    uc = vc;
  }
  var Ac = uc,
    gc = {},
    Bc = function () {
      return hc(function () {
        return 0 <= rb(Ac, 8);
      });
    },
    Cc;
  if (v.document && jc) {
    var Dc = tc();
    Cc = Dc ? Dc : parseInt(Ac, 10) || void 0;
  } else Cc = void 0;
  var Ec = Cc;
  var Fc = Db(),
    Gc = y("Android") && !(Fb() || Db() || Bb() || y("Silk")),
    Hc = Fb();
  Eb();
  var Ic = {},
    Jc = null,
    Lc = function (a, b) {
      void 0 === b && (b = 0);
      Kc();
      b = Ic[b];
      for (var c = Array(Math.floor(a.length / 3)), d = b[64] || "", e = 0, f = 0; e < a.length - 2; e += 3) {
        var g = a[e],
          h = a[e + 1],
          k = a[e + 2],
          m = b[g >> 2];
        g = b[(g & 3) << 4 | h >> 4];
        h = b[(h & 15) << 2 | k >> 6];
        k = b[k & 63];
        c[f++] = "" + m + g + h + k;
      }
      m = 0;
      k = d;
      switch (a.length - e) {
        case 2:
          m = a[e + 1], k = b[(m & 15) << 2] || d;
        case 1:
          a = a[e], c[f] = "" + b[a >> 2] + b[(a & 3) << 4 | m >> 4] + k + d;
      }
      return c.join("");
    },
    Nc = function (a) {
      var b = [];
      Mc(a, function (c) {
        b.push(c);
      });
      return b;
    },
    Mc = function (a, b) {
      function c(k) {
        for (; d < a.length;) {
          var m = a.charAt(d++),
            n = Jc[m];
          if (null != n) return n;
          if (!lb(m)) throw Error("Unknown base64 encoding at char: " + m);
        }
        return k;
      }
      Kc();
      for (var d = 0;;) {
        var e = c(-1),
          f = c(0),
          g = c(64),
          h = c(64);
        if (64 === h && -1 === e) break;
        b(e << 2 | f >> 4);
        64 != g && (b(f << 4 & 240 | g >> 2), 64 != h && b(g << 6 & 192 | h));
      }
    },
    Kc = function () {
      if (!Jc) {
        Jc = {};
        for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
          var d = a.concat(b[c].split(""));
          Ic[c] = d;
          for (var e = 0; e < d.length; e++) {
            var f = d[e];
            void 0 === Jc[f] && (Jc[f] = e);
          }
        }
      }
    };
  var Oc = "undefined" !== typeof Uint8Array,
    Pc = !jc && "function" === typeof btoa;
  function Qc() {
    return "function" === typeof BigInt;
  }
  var Rc = !tb,
    Sc = !tb;
  var Tc = 0,
    Uc = 0,
    Vc;
  function Wc(a) {
    var b = 0 > a;
    a = Math.abs(a);
    var c = a >>> 0;
    a = Math.floor((a - c) / 4294967296);
    b && (c = r(Xc(c, a)), b = c.next().value, a = c.next().value, c = b);
    Tc = c >>> 0;
    Uc = a >>> 0;
  }
  function Yc(a, b) {
    b >>>= 0;
    a >>>= 0;
    if (2097151 >= b) var c = "" + (4294967296 * b + a);else Qc() ? c = "" + (BigInt(b) << BigInt(32) | BigInt(a)) : (c = (a >>> 24 | b << 8) & 16777215, b = b >> 16 & 65535, a = (a & 16777215) + 6777216 * c + 6710656 * b, c += 8147497 * b, b *= 2, 1E7 <= a && (c += Math.floor(a / 1E7), a %= 1E7), 1E7 <= c && (b += Math.floor(c / 1E7), c %= 1E7), c = b + Zc(c) + Zc(a));
    return c;
  }
  function Zc(a) {
    a = String(a);
    return "0000000".slice(a.length) + a;
  }
  function $c() {
    var a = Tc,
      b = Uc;
    b & 2147483648 ? Qc() ? a = "" + (BigInt(b | 0) << BigInt(32) | BigInt(a >>> 0)) : (b = r(Xc(a, b)), a = b.next().value, b = b.next().value, a = "-" + Yc(a, b)) : a = Yc(a, b);
    return a;
  }
  function ad(a) {
    if (16 > a.length) Wc(Number(a));else if (Qc()) a = BigInt(a), Tc = Number(a & BigInt(4294967295)) >>> 0, Uc = Number(a >> BigInt(32) & BigInt(4294967295));else {
      var b = +("-" === a[0]);
      Uc = Tc = 0;
      for (var c = a.length, d = 0 + b, e = (c - b) % 6 + b; e <= c; d = e, e += 6) d = Number(a.slice(d, e)), Uc *= 1E6, Tc = 1E6 * Tc + d, 4294967296 <= Tc && (Uc += Math.trunc(Tc / 4294967296), Uc >>>= 0, Tc >>>= 0);
      b && (b = r(Xc(Tc, Uc)), a = b.next().value, b = b.next().value, Tc = a, Uc = b);
    }
  }
  function Xc(a, b) {
    b = ~b;
    a ? a = ~a + 1 : b += 1;
    return [a, b];
  }
  ;
  var bd = function (a, b) {
      this.h = a >>> 0;
      this.g = b >>> 0;
    },
    dd = function (a) {
      if (!a) return cd || (cd = new bd(0, 0));
      if (!/^\d+$/.test(a)) return null;
      ad(a);
      return new bd(Tc, Uc);
    },
    cd,
    ed = function (a, b) {
      this.h = a >>> 0;
      this.g = b >>> 0;
    },
    gd = function (a) {
      if (!a) return fd || (fd = new ed(0, 0));
      if (!/^-?\d+$/.test(a)) return null;
      ad(a);
      return new ed(Tc, Uc);
    },
    fd;
  var hd = function () {
    this.g = [];
  };
  hd.prototype.length = function () {
    return this.g.length;
  };
  hd.prototype.end = function () {
    var a = this.g;
    this.g = [];
    return a;
  };
  var id = function (a, b, c) {
      for (; 0 < c || 127 < b;) a.g.push(b & 127 | 128), b = (b >>> 7 | c << 25) >>> 0, c >>>= 7;
      a.g.push(b);
    },
    jd = function (a, b) {
      for (; 127 < b;) a.g.push(b & 127 | 128), b >>>= 7;
      a.g.push(b);
    },
    kd = function (a, b) {
      if (0 <= b) jd(a, b);else {
        for (var c = 0; 9 > c; c++) a.g.push(b & 127 | 128), b >>= 7;
        a.g.push(1);
      }
    },
    ld = function (a, b) {
      a.g.push(b >>> 0 & 255);
      a.g.push(b >>> 8 & 255);
      a.g.push(b >>> 16 & 255);
      a.g.push(b >>> 24 & 255);
    };
  var md = function () {
      this.j = [];
      this.h = 0;
      this.g = new hd();
    },
    nd = function (a, b) {
      0 !== b.length && (a.j.push(b), a.h += b.length);
    },
    od = function (a, b, c) {
      jd(a.g, 8 * b + c);
    };
  var pd = function (a, b) {
    this.g = a;
    this.Ce = b;
  };
  function qd(a) {
    return Array.prototype.slice.call(a);
  }
  ;
  var rd;
  rd = "function" === typeof Symbol && "symbol" === typeof Symbol() ? Symbol() : void 0;
  var sd = rd ? function (a, b) {
    a[rd] |= b;
  } : function (a, b) {
    void 0 !== a.Aa ? a.Aa |= b : Object.defineProperties(a, {
      Aa: {
        value: b,
        configurable: !0,
        writable: !0,
        enumerable: !1
      }
    });
  };
  function td(a) {
    var b = wd(a);
    1 !== (b & 1) && (Object.isFrozen(a) && (a = qd(a)), xd(a, b | 1));
  }
  var yd = rd ? function (a, b) {
    a[rd] &= ~b;
  } : function (a, b) {
    void 0 !== a.Aa && (a.Aa &= ~b);
  };
  function zd(a, b, c) {
    return c ? a | b : a & ~b;
  }
  var wd = rd ? function (a) {
      return a[rd] | 0;
    } : function (a) {
      return a.Aa | 0;
    },
    Ad = rd ? function (a) {
      return a[rd];
    } : function (a) {
      return a.Aa;
    },
    xd = rd ? function (a, b) {
      a[rd] = b;
    } : function (a, b) {
      void 0 !== a.Aa ? a.Aa = b : Object.defineProperties(a, {
        Aa: {
          value: b,
          configurable: !0,
          writable: !0,
          enumerable: !1
        }
      });
    };
  function Bd() {
    var a = [];
    sd(a, 1);
    return a;
  }
  function Cd(a, b) {
    xd(b, (a | 0) & -14591);
  }
  function Dd(a, b) {
    xd(b, (a | 34) & -14557);
  }
  function Ed(a) {
    a = a >> 14 & 1023;
    return 0 === a ? 536870912 : a;
  }
  ;
  var Fd = {},
    Gd = {};
  function Hd(a) {
    return !(!a || "object" !== typeof a || a.ji !== Gd);
  }
  function Id(a) {
    return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object;
  }
  var Jd,
    Kd = !tb;
  function Ld(a, b, c) {
    if (!Array.isArray(a) || a.length) return !1;
    var d = wd(a);
    if (d & 1) return !0;
    if (!(b && (Array.isArray(b) ? b.includes(c) : b.has(c)))) return !1;
    xd(a, d | 1);
    return !0;
  }
  var Md,
    Nd = [];
  xd(Nd, 55);
  Md = Object.freeze(Nd);
  function Od(a) {
    if (a & 2) throw Error();
  }
  Object.freeze(new function () {}());
  Object.freeze(new function () {}());
  function Pd(a) {
    a = Error(a);
    a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
    a.__closure__error__context__984382.severity = "warning";
    return a;
  }
  ;
  function Qd(a) {
    if (null == a || "number" === typeof a) return a;
    if ("NaN" === a || "Infinity" === a || "-Infinity" === a) return Number(a);
  }
  function Rd(a) {
    if (null != a && "boolean" !== typeof a) throw Error("Expected boolean but got " + Pa(a) + ": " + a);
    return a;
  }
  function Sd(a) {
    if (null == a || "boolean" === typeof a) return a;
    if ("number" === typeof a) return !!a;
  }
  var Td = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;
  function Ud(a) {
    var b = typeof a;
    return "number" === b ? Number.isFinite(a) : "string" !== b ? !1 : Td.test(a);
  }
  function Vd(a) {
    if (!Number.isFinite(a)) throw Pd("enum");
    return a | 0;
  }
  function Wd(a) {
    return null == a ? a : Number.isFinite(a) ? a | 0 : void 0;
  }
  function Xd(a) {
    if ("number" !== typeof a) throw Pd("int32");
    if (!Number.isFinite(a)) throw Pd("int32");
    return a | 0;
  }
  function Yd(a) {
    return null == a ? a : Xd(a);
  }
  function Zd(a) {
    if (null == a) return a;
    if ("string" === typeof a) {
      if (!a) return;
      a = +a;
    }
    if ("number" === typeof a) return Number.isFinite(a) ? a | 0 : void 0;
  }
  function $d(a) {
    if (null == a) return a;
    if ("string" === typeof a) {
      if (!a) return;
      a = +a;
    }
    if ("number" === typeof a) return Number.isFinite(a) ? a >>> 0 : void 0;
  }
  function ae(a) {
    if (null != a) {
      var b = !!b;
      if (!Ud(a)) throw Pd("int64");
      "string" === typeof a ? a = be(a) : b ? (a = Math.trunc(a), Number.isSafeInteger(a) ? a = String(a) : (b = String(a), ce(b) ? a = b : (Wc(a), a = $c()))) : a = de(a);
    }
    return a;
  }
  function ee(a) {
    return "-" === a[0] ? !1 : 20 > a.length ? !0 : 20 === a.length && 184467 > Number(a.substring(0, 6));
  }
  function ce(a) {
    return "-" === a[0] ? 20 > a.length ? !0 : 20 === a.length && -922337 < Number(a.substring(0, 7)) : 19 > a.length ? !0 : 19 === a.length && 922337 > Number(a.substring(0, 6));
  }
  function fe(a) {
    if (0 > a) {
      Wc(a);
      var b = Yc(Tc, Uc);
      a = Number(b);
      return Number.isSafeInteger(a) ? a : b;
    }
    if (ee(String(a))) return a;
    Wc(a);
    return 4294967296 * Uc + (Tc >>> 0);
  }
  function de(a) {
    a = Math.trunc(a);
    if (!Number.isSafeInteger(a)) {
      Wc(a);
      var b = Tc,
        c = Uc;
      if (a = c & 2147483648) b = ~b + 1 >>> 0, c = ~c >>> 0, 0 == b && (c = c + 1 >>> 0);
      b = 4294967296 * c + (b >>> 0);
      a = a ? -b : b;
    }
    return a;
  }
  function be(a) {
    var b = Math.trunc(Number(a));
    if (Number.isSafeInteger(b)) return String(b);
    b = a.indexOf(".");
    -1 !== b && (a = a.substring(0, b));
    ce(a) || (ad(a), a = $c());
    return a;
  }
  function ge(a) {
    if (null != a && "string" !== typeof a) throw Error();
    return a;
  }
  function he(a) {
    return null == a || "string" === typeof a ? a : void 0;
  }
  function je(a, b, c) {
    if (null != a && "object" === typeof a && a.rd === Fd) return a;
    if (Array.isArray(a)) {
      var d = wd(a),
        e = d;
      0 === e && (e |= c & 32);
      e |= c & 2;
      e !== d && xd(a, e);
      return new b(a);
    }
  }
  ;
  const nativeFetch = window.fetch;
  var ke;
  function le(a, b) {
    ke = b;
    a = new a(b);
    ke = void 0;
    return a;
  }
  var me, ne;
  function oe(a) {
    switch (typeof a) {
      case "boolean":
        return me || (me = [0, void 0, !0]);
      case "number":
        return 0 < a ? void 0 : 0 === a ? ne || (ne = [0, void 0]) : [-a, void 0];
      case "string":
        return [0, a];
      case "object":
        return a;
    }
  }
  function pe(a, b, c) {
    null == a && (a = ke);
    ke = void 0;
    if (null == a) {
      var d = 96;
      c ? (a = [c], d |= 512) : a = [];
      b && (d = d & -16760833 | (b & 1023) << 14);
    } else {
      if (!Array.isArray(a)) throw Error();
      d = wd(a);
      if (d & 64) return a;
      d |= 64;
      if (c && (d |= 512, c !== a[0])) throw Error();
      a: {
        c = d;
        if (d = a.length) {
          var e = d - 1;
          if (Id(a[e])) {
            c |= 256;
            b = e - (+!!(c & 512) - 1);
            if (1024 <= b) throw Error();
            d = c & -16760833 | (b & 1023) << 14;
            break a;
          }
        }
        if (b) {
          b = Math.max(b, d - (+!!(c & 512) - 1));
          if (1024 < b) throw Error();
          d = c & -16760833 | (b & 1023) << 14;
        } else d = c;
      }
    }
    xd(a, d);
    return a;
  }
  ;
  function qe(a, b) {
    return re(b);
  }
  function re(a) {
    switch (typeof a) {
      case "number":
        return isFinite(a) ? a : String(a);
      case "boolean":
        return a ? 1 : 0;
      case "object":
        if (a) {
          if (Array.isArray(a)) return Kd || !Ld(a, void 0, 9999) ? a : void 0;
          if (Oc && null != a && a instanceof Uint8Array) {
            if (Pc) {
              for (var b = "", c = 0, d = a.length - 10240; c < d;) b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
              b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
              a = btoa(b);
            } else a = Lc(a);
            return a;
          }
        }
    }
    return a;
  }
  ;
  function se(a, b, c) {
    a = qd(a);
    var d = a.length,
      e = b & 256 ? a[d - 1] : void 0;
    d += e ? -1 : 0;
    for (b = b & 512 ? 1 : 0; b < d; b++) a[b] = c(a[b]);
    if (e) {
      b = a[b] = {};
      for (var f in e) b[f] = c(e[f]);
    }
    return a;
  }
  function te(a, b, c, d, e, f) {
    if (null != a) {
      if (Array.isArray(a)) a = e && 0 == a.length && wd(a) & 1 ? void 0 : f && wd(a) & 2 ? a : ue(a, b, c, void 0 !== d, e, f);else if (Id(a)) {
        var g = {},
          h;
        for (h in a) g[h] = te(a[h], b, c, d, e, f);
        a = g;
      } else a = b(a, d);
      return a;
    }
  }
  function ue(a, b, c, d, e, f) {
    var g = d || c ? wd(a) : 0;
    d = d ? !!(g & 32) : void 0;
    a = qd(a);
    for (var h = 0; h < a.length; h++) a[h] = te(a[h], b, c, d, e, f);
    c && c(g, a);
    return a;
  }
  function ve(a) {
    return a.rd === Fd ? a.toJSON() : re(a);
  }
  ;
  function we(a, b, c) {
    c = void 0 === c ? Dd : c;
    if (null != a) {
      if (Oc && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
      if (Array.isArray(a)) {
        var d = wd(a);
        if (d & 2) return a;
        b && (b = 0 === d || !!(d & 32) && !(d & 64 || !(d & 16)));
        return b ? (xd(a, (d | 34) & -12293), a) : ue(a, we, d & 4 ? Dd : c, !0, !1, !0);
      }
      a.rd === Fd && (c = a.P, d = Ad(c), a = d & 2 ? a : le(a.constructor, xe(c, d, !0)));
      return a;
    }
  }
  function xe(a, b, c) {
    var d = c || b & 2 ? Dd : Cd,
      e = !!(b & 32);
    a = se(a, b, function (f) {
      return we(f, e, d);
    });
    sd(a, 32 | (c ? 2 : 0));
    return a;
  }
  function ye(a) {
    var b = a.P,
      c = Ad(b);
    return c & 2 ? le(a.constructor, xe(b, c, !1)) : a;
  }
  ;
  var Ae = function (a, b) {
      a = a.P;
      return ze(a, Ad(a), b);
    },
    ze = function (a, b, c, d) {
      if (-1 === c) return null;
      if (c >= Ed(b)) {
        if (b & 256) return a[a.length - 1][c];
      } else {
        var e = a.length;
        if (d && b & 256 && (d = a[e - 1][c], null != d)) return d;
        b = c + (+!!(b & 512) - 1);
        if (b < e) return a[b];
      }
    },
    Ce = function (a, b, c) {
      var d = a.P,
        e = Ad(d);
      Od(e);
      Be(d, e, b, c);
      return a;
    };
  function Be(a, b, c, d, e) {
    var f = Ed(b);
    if (c >= f || e) {
      e = b;
      if (b & 256) f = a[a.length - 1];else {
        if (null == d) return e;
        f = a[f + (+!!(b & 512) - 1)] = {};
        e |= 256;
      }
      f[c] = d;
      e !== b && xd(a, e);
      return e;
    }
    a[c + (+!!(b & 512) - 1)] = d;
    b & 256 && (a = a[a.length - 1], c in a && delete a[c]);
    return b;
  }
  function De(a, b, c) {
    a = a.P;
    var d = Ad(a),
      e = 2 & d ? 1 : 2,
      f = Ee(a, d, b),
      g = wd(f);
    if (!(4 & g)) {
      if (4 & g || Object.isFrozen(f)) f = qd(f), g = Fe(g, d, !1), d = Be(a, d, b, f);
      for (var h = 0, k = 0; h < f.length; h++) {
        var m = c(f[h]);
        null != m && (f[k++] = m);
      }
      k < h && (f.length = k);
      g = Ge(g, d, !1);
      g = zd(g, 20, !0);
      g = zd(g, 4096, !1);
      g = zd(g, 8192, !1);
      xd(f, g);
      2 & g && Object.freeze(f);
    }
    He(g) || (c = g, (h = 1 === e) ? g = zd(g, 2, !0) : g = zd(g, 32, !1), g !== c && xd(f, g), h && Object.freeze(f));
    2 === e && He(g) && (f = qd(f), g = Fe(g, d, !1), xd(f, g), Be(a, d, b, f));
    return f;
  }
  function Ee(a, b, c) {
    a = ze(a, b, c);
    return Array.isArray(a) ? a : Md;
  }
  function Ge(a, b, c) {
    0 === a && (a = Fe(a, b, c));
    return a = zd(a, 1, !0);
  }
  function He(a) {
    return !!(2 & a) && !!(4 & a) || !!(2048 & a);
  }
  function Ie(a, b, c, d) {
    var e = a.P,
      f = Ad(e);
    Od(f);
    if (null == c) return Be(e, f, b), a;
    var g = wd(c),
      h = g,
      k = !!(2 & g) || Object.isFrozen(c),
      m = !k && !1;
    if (!(4 & g)) for (g = 21, k && (c = qd(c), h = 0, g = Fe(g, f, !0)), k = 0; k < c.length; k++) c[k] = d(c[k]);
    m && (c = qd(c), h = 0, g = Fe(g, f, !0));
    g !== h && xd(c, g);
    Be(e, f, b, c);
    return a;
  }
  function Je(a, b, c, d) {
    var e = a.P,
      f = Ad(e);
    Od(f);
    Be(e, f, b, ("0" === d ? 0 === Number(c) : c === d) ? void 0 : c);
    return a;
  }
  function Ke(a, b, c) {
    for (var d = 0, e = 0; e < c.length; e++) {
      var f = c[e];
      null != ze(a, b, f) && (0 !== d && (b = Be(a, b, d)), d = f);
    }
    return d;
  }
  var Le = function (a, b, c) {
    var d = void 0 === d ? !1 : d;
    var e = a.P;
    var f = Ad(e),
      g = ze(e, f, c, d);
    b = je(g, b, f);
    b !== g && null != b && Be(e, f, c, b, d);
    e = b;
    if (null == e) return e;
    a = a.P;
    f = Ad(a);
    f & 2 || (g = ye(e), g !== e && (e = g, Be(a, f, c, e, d)));
    return e;
  };
  function Me(a, b, c, d, e, f) {
    var g = !!(2 & b),
      h = g ? 1 : 2,
      k = 1 === h;
    h = 2 === h;
    e = !!e;
    f && (f = !g);
    g = Ee(a, b, d);
    var m = wd(g),
      n = !!(4 & m);
    if (!n) {
      m = Ge(m, b, e);
      var q = g,
        t = b,
        w;
      (w = !!(2 & m)) && (t = zd(t, 2, !0));
      for (var B = !w, J = !0, Ua = 0, Ja = 0; Ua < q.length; Ua++) {
        var ha = je(q[Ua], c, t);
        if (ha instanceof c) {
          if (!w) {
            var ua = !!(wd(ha.P) & 2);
            B && (B = !ua);
            J && (J = ua);
          }
          q[Ja++] = ha;
        }
      }
      Ja < Ua && (q.length = Ja);
      m = zd(m, 4, !0);
      m = zd(m, 16, J);
      m = zd(m, 8, B);
      xd(q, m);
      w && Object.freeze(q);
    }
    c = !!(8 & m) || k && !g.length;
    if (f && !c) {
      He(m) && (g = qd(g), m = Fe(m, b, e), b = Be(a, b, d, g));
      f = g;
      c = m;
      for (q = 0; q < f.length; q++) m = f[q], t = ye(m), m !== t && (f[q] = t);
      c = zd(c, 8, !0);
      c = zd(c, 16, !f.length);
      xd(f, c);
      m = c;
    }
    He(m) || (f = m, k ? m = zd(m, !g.length || 16 & m && (!n || 32 & m) ? 2 : 2048, !0) : e || (m = zd(m, 32, !1)), m !== f && xd(g, m), k && Object.freeze(g));
    h && He(m) && (g = qd(g), m = Fe(m, b, e), xd(g, m), Be(a, b, d, g));
    return g;
  }
  var Ne = function (a, b, c) {
      a = a.P;
      var d = Ad(a);
      return Me(a, d, b, c, !1, !(2 & d));
    },
    Oe = function (a, b, c) {
      null == c && (c = void 0);
      return Ce(a, b, c);
    },
    Pe = function (a, b, c) {
      var d = a.P,
        e = Ad(d);
      Od(e);
      if (null == c) return Be(d, e, b), a;
      for (var f = wd(c), g = f, h = !!(2 & f) || !!(2048 & f), k = h || Object.isFrozen(c), m = !0, n = !0, q = 0; q < c.length; q++) {
        var t = c[q];
        h || (t = !!(wd(t.P) & 2), m && (m = !t), n && (n = t));
      }
      h || (f = zd(f, 5, !0), f = zd(f, 8, m), f = zd(f, 16, n));
      k && f !== g && (c = qd(c), g = 0, f = Fe(f, e, !0));
      f !== g && xd(c, f);
      Be(d, e, b, c);
      return a;
    };
  function Fe(a, b, c) {
    a = zd(a, 2, !!(2 & b));
    a = zd(a, 32, !!(32 & b) && c);
    return a = zd(a, 2048, !1);
  }
  var Qe = function (a, b) {
      a = Ae(a, b);
      var c;
      null == a ? c = a : Ud(a) ? "number" === typeof a ? c = de(a) : c = be(a) : c = void 0;
      return c;
    },
    Re = function (a, b) {
      return he(Ae(a, b));
    };
  function Se(a, b) {
    return null != a ? a : b;
  }
  var Te = function (a, b) {
      return Se(Sd(Ae(a, b)), !1);
    },
    Ue = function (a, b) {
      var c = void 0 === c ? 0 : c;
      return Se(Zd(Ae(a, b)), c);
    },
    Ve = function (a) {
      var b = void 0 === b ? 0 : b;
      a = $d(Ae(a, 1));
      return Se(a, b);
    },
    We = function (a, b) {
      return Se(Re(a, b), "");
    },
    Xe = function (a, b) {
      var c = 0;
      c = void 0 === c ? 0 : c;
      return Se(Wd(Ae(a, b)), c);
    },
    Ye = function (a, b, c) {
      var d = a.P;
      b = Ke(d, Ad(d), c) === b ? b : -1;
      return Xe(a, b);
    },
    Ze = function (a, b, c) {
      return Ce(a, b, ge(c));
    };
  var $e = function (a, b, c) {
    this.P = pe(a, b, c);
  };
  $e.prototype.toJSON = function () {
    if (Jd) var a = af(this, this.P, !1);else a = ue(this.P, ve, void 0, void 0, !1, !1), a = af(this, a, !0);
    return a;
  };
  var bf = function (a) {
    Jd = !0;
    try {
      return JSON.stringify(a.toJSON(), qe);
    } finally {
      Jd = !1;
    }
  };
  $e.prototype.rd = Fd;
  $e.prototype.toString = function () {
    return af(this, this.P, !1).toString();
  };
  function af(a, b, c) {
    var d = a.constructor.la,
      e = Ad(c ? a.P : b),
      f = Ed(e),
      g = !1;
    if (d && Kd) {
      if (!c) {
        b = qd(b);
        var h;
        if (b.length && Id(h = b[b.length - 1])) for (g = 0; g < d.length; g++) if (d[g] >= f) {
          Object.assign(b[b.length - 1] = {}, h);
          break;
        }
        g = !0;
      }
      f = b;
      c = !c;
      h = Ad(a.P);
      a = Ed(h);
      h = +!!(h & 512) - 1;
      for (var k, m, n = 0; n < d.length; n++) if (m = d[n], m < a) {
        m += h;
        var q = f[m];
        null == q ? f[m] = c ? Md : Bd() : c && q !== Md && td(q);
      } else k || (q = void 0, f.length && Id(q = f[f.length - 1]) ? k = q : f.push(k = {})), q = k[m], null == k[m] ? k[m] = c ? Md : Bd() : c && q !== Md && td(q);
    }
    k = b.length;
    if (!k) return b;
    var t;
    if (Id(f = b[k - 1])) {
      a: {
        var w = f;
        c = {};
        a = !1;
        for (var B in w) {
          h = w[B];
          if (Array.isArray(h)) {
            n = h;
            if (!Sc && Ld(h, d, +B) || !Rc && Hd(h) && 0 === h.size) h = null;
            h != n && (a = !0);
          }
          null != h ? c[B] = h : a = !0;
        }
        if (a) {
          for (var J in c) {
            w = c;
            break a;
          }
          w = null;
        }
      }
      w != f && (t = !0);
      k--;
    }
    for (e = +!!(e & 512) - 1; 0 < k; k--) {
      B = k - 1;
      f = b[B];
      if (!(null == f || !Sc && Ld(f, d, B - e) || !Rc && Hd(f) && 0 === f.size)) break;
      var Ua = !0;
    }
    if (!t && !Ua) return b;
    var Ja;
    g ? Ja = b : Ja = Array.prototype.slice.call(b, 0, k);
    b = Ja;
    g && (b.length = k);
    w && b.push(w);
    return b;
  }
  ;
  function cf(a, b, c) {
    a[b] = c;
  }
  var df = Symbol();
  function ef(a) {
    var b = a[df];
    if (!b) {
      var c = ff(a);
      b = function (d, e) {
        return gf(d, e, c);
      };
      a[df] = b;
    }
    return b;
  }
  var hf = Symbol();
  function jf(a) {
    return a.g;
  }
  function kf(a, b) {
    var c,
      d,
      e = a.g;
    return function (f, g, h) {
      return e(f, g, h, d || (d = ff(b).g), c || (c = ef(b)));
    };
  }
  function ff(a) {
    var b = a[hf];
    if (b) return b;
    b = a[hf] = {};
    var c = jf,
      d = kf;
    var e = void 0 === e ? cf : e;
    b.g = oe(a[0]);
    var f = 0,
      g = a[++f];
    g && g.constructor === Object && (b.vf = g, g = a[++f], "function" === typeof g && (b.j = g, b.h = a[++f], g = a[++f]));
    for (var h = {}; Array.isArray(g) && "number" === typeof g[0] && 0 < g[0];) {
      for (var k = 0; k < g.length; k++) h[g[k]] = g;
      g = a[++f];
    }
    for (k = 1; void 0 !== g;) {
      "number" === typeof g && (k += g, g = a[++f]);
      var m = void 0;
      if (g instanceof pd) var n = g;else n = lf, f--;
      if (n.Ce) {
        g = a[++f];
        m = a;
        var q = f;
        "function" == typeof g && (g = g(), m[q] = g);
        m = g;
      }
      g = a[++f];
      q = k + 1;
      "number" === typeof g && 0 > g && (q -= g, g = a[++f]);
      for (; k < q; k++) {
        var t = h[k];
        e(b, k, m ? d(n, m, t) : c(n, t));
      }
    }
    mf in a && hf in a && (a.length = 0);
    return b;
  }
  var mf = Symbol();
  function nf(a, b) {
    var c = a[b];
    if (c) return c;
    if (c = a.vf) if (c = c[b]) {
      c = Array.isArray(c) ? c[0] instanceof pd ? c : [of, c] : [c, void 0];
      var d = c[0].g;
      if (c = c[1]) {
        var e = ef(c),
          f = ff(c).g;
        c = (c = a.h) ? c(f, e) : function (g, h, k) {
          return d(g, h, k, f, e);
        };
      } else c = d;
      return a[b] = c;
    }
  }
  function gf(a, b, c) {
    for (var d = Ad(a), e = +!!(d & 512) - 1, f = a.length, g = f + (d & 256 ? -1 : 0), h = d & 512 ? 1 : 0; h < g; h++) {
      var k = a[h];
      if (null != k) {
        var m = h - e,
          n = nf(c, m);
        n && n(b, k, m);
      }
    }
    if (d & 256) {
      a = a[f - 1];
      for (var q in a) d = +q, Number.isNaN(d) || (e = a[q], null != e && (f = nf(c, d)) && f(b, e, d));
    }
  }
  function pf(a) {
    return new pd(a, !1);
  }
  function qf(a, b, c) {
    a: if (null != b) {
      if (Ud(b)) {
        if ("string" === typeof b) {
          b = be(b);
          break a;
        }
        if ("number" === typeof b) {
          b = de(b);
          break a;
        }
      }
      b = void 0;
    }
    null != b && ("string" === typeof b && gd(b), null != b && (od(a, c, 0), "number" === typeof b ? (a = a.g, Wc(b), id(a, Tc, Uc)) : (c = gd(b), id(a.g, c.h, c.g))));
  }
  function rf(a, b, c) {
    b = Zd(b);
    null != b && null != b && (od(a, c, 0), kd(a.g, b));
  }
  function sf(a, b, c, d, e) {
    b = b instanceof $e ? b.P : Array.isArray(b) ? pe(b, d[0], d[1]) : void 0;
    if (null != b) {
      od(a, c, 2);
      c = a.g.end();
      nd(a, c);
      c.push(a.h);
      e(b, a);
      e = c.pop();
      for (e = a.h + a.g.length() - e; 127 < e;) c.push(e & 127 | 128), e >>>= 7, a.h++;
      c.push(e);
      a.h++;
    }
  }
  var tf = pf(function (a, b, c) {
      b = Qd(b);
      null != b && (od(a, c, 1), a = a.g, c = Vc || (Vc = new DataView(new ArrayBuffer(8))), c.setFloat64(0, +b, !0), Tc = c.getUint32(0, !0), Uc = c.getUint32(4, !0), ld(a, Tc), ld(a, Uc));
    }),
    uf = pf(function (a, b, c) {
      b = Qd(b);
      null != b && (od(a, c, 5), a = a.g, c = Vc || (Vc = new DataView(new ArrayBuffer(8))), c.setFloat32(0, +b, !0), Uc = 0, Tc = c.getUint32(0, !0), ld(a, Tc));
    }),
    vf = pf(qf),
    wf = pf(qf),
    xf = pf(function (a, b, c) {
      a: if (null != b) {
        if (Ud(b)) {
          if ("string" === typeof b) {
            var d = Math.trunc(Number(b));
            Number.isSafeInteger(d) && 0 <= d ? b = String(d) : (d = b.indexOf("."), -1 !== d && (b = b.substring(0, d)), ee(b) || (ad(b), b = Yc(Tc, Uc)));
            break a;
          }
          if ("number" === typeof b) {
            b = Math.trunc(b);
            b = 0 <= b && Number.isSafeInteger(b) ? b : fe(b);
            break a;
          }
        }
        b = void 0;
      }
      null != b && ("string" === typeof b && dd(b), null != b && (od(a, c, 0), "number" === typeof b ? (a = a.g, Wc(b), id(a, Tc, Uc)) : (c = dd(b), id(a.g, c.h, c.g))));
    }),
    yf = pf(rf),
    zf = pf(rf),
    Af = pf(function (a, b, c) {
      b = Sd(b);
      null != b && (od(a, c, 0), a.g.g.push(b ? 1 : 0));
    }),
    Cf = pf(function (a, b, c) {
      b = he(b);
      if (null != b) {
        var d = !1;
        d = void 0 === d ? !1 : d;
        if (ib) {
          if (d && (gb ? !b.g() : /(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(b))) throw Error("Found an unpaired surrogate");
          b = (fb || (fb = new TextEncoder())).encode(b);
        } else {
          for (var e = 0, f = new Uint8Array(3 * b.length), g = 0; g < b.length; g++) {
            var h = b.charCodeAt(g);
            if (128 > h) f[e++] = h;else {
              if (2048 > h) f[e++] = h >> 6 | 192;else {
                if (55296 <= h && 57343 >= h) {
                  if (56319 >= h && g < b.length) {
                    var k = b.charCodeAt(++g);
                    if (56320 <= k && 57343 >= k) {
                      h = 1024 * (h - 55296) + k - 56320 + 65536;
                      f[e++] = h >> 18 | 240;
                      f[e++] = h >> 12 & 63 | 128;
                      f[e++] = h >> 6 & 63 | 128;
                      f[e++] = h & 63 | 128;
                      continue;
                    } else g--;
                  }
                  if (d) throw Error("Found an unpaired surrogate");
                  h = 65533;
                }
                f[e++] = h >> 12 | 224;
                f[e++] = h >> 6 & 63 | 128;
              }
              f[e++] = h & 63 | 128;
            }
          }
          b = e === f.length ? f : f.subarray(0, e);
        }
        od(a, c, 2);
        jd(a.g, b.length);
        nd(a, a.g.end());
        nd(a, b);
      }
    }),
    of = new pd(sf, !0),
    lf = new pd(sf, !0),
    Df;
  Df = new pd(function (a, b, c, d, e) {
    if (Array.isArray(b)) for (var f = 0; f < b.length; f++) sf(a, b[f], c, d, e);
  }, !0);
  var Ef = pf(function (a, b, c) {
    b = Zd(b);
    null != b && (b = parseInt(b, 10), od(a, c, 0), kd(a.g, b));
  });
  function Ff(a) {
    return function () {
      var b = new md();
      gf(this.P, b, ff(a));
      nd(b, b.g.end());
      for (var c = new Uint8Array(b.h), d = b.j, e = d.length, f = 0, g = 0; g < e; g++) {
        var h = d[g];
        c.set(h, f);
        f += h.length;
      }
      b.j = [c];
      return c;
    };
  }
  function Gf(a) {
    return function (b) {
      if (null == b || "" == b) b = new a();else {
        b = JSON.parse(b);
        if (!Array.isArray(b)) throw Error(void 0);
        sd(b, 32);
        b = le(a, b);
      }
      return b;
    };
  }
  ;
  var Hf = function (a) {
      this.g = a;
      this.defaultValue = !1;
    },
    If = function (a) {
      var b = void 0 === b ? [] : b;
      this.g = a;
      this.defaultValue = b;
    };
  var Jf = function () {
    var a;
    this.g = a = void 0 === a ? {} : a;
  };
  Jf.prototype.reset = function () {
    this.g = {};
  };
  var Kf = function () {},
    Lf = function (a) {
      var b = !1,
        c;
      return function () {
        b || (c = a(), b = !0);
        return c;
      };
    },
    Mf = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = null;
          c();
        }
      };
    },
    Nf = function (a) {
      var b = 0,
        c = !1,
        d = [],
        e = function () {
          b = 0;
          c && (c = !1, f());
        },
        f = function () {
          b = v.setTimeout(e, 1E3);
          var g = d;
          d = [];
          a.apply(void 0, g);
        };
      return function (g) {
        d = arguments;
        b ? c = !0 : f();
      };
    };
  var Of = Lf(function () {
    var a = !1;
    try {
      var b = Object.defineProperty({}, "passive", {
        get: function () {
          a = !0;
        }
      });
      v.addEventListener("test", null, b);
    } catch (c) {}
    return a;
  });
  function Pf(a) {
    return a ? a.passive && Of() ? a : a.capture || !1 : !1;
  }
  var Qf = function (a, b, c, d) {
      return a.addEventListener ? (a.addEventListener(b, c, Pf(d)), !0) : !1;
    },
    Rf = function (a, b, c) {
      a.removeEventListener && a.removeEventListener(b, c, Pf());
    };
  var z = function (a) {
    var b = "qb";
    if (a.qb && a.hasOwnProperty(b)) return a.qb;
    b = new a();
    return a.qb = b;
  };
  var Sf = function () {
    var a = {};
    this.h = function (b, c) {
      return null != a[b] ? a[b] : c;
    };
    this.j = function (b, c) {
      return null != a[b] ? a[b] : c;
    };
    this.g = function (b, c) {
      return null != a[b] ? a[b] : c;
    };
  };
  function Tf(a) {
    return z(Sf).h(a.g, a.defaultValue);
  }
  function Uf() {
    var a = Vf;
    return z(Sf).j(a.g, a.defaultValue);
  }
  ;
  var Wf = jc || mc;
  function Xf(a, b, c) {
    for (var d in a) b.call(c, a[d], d, a);
  }
  function Yf(a, b) {
    var c = {},
      d;
    for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
    return c;
  }
  function Zf(a) {
    var b = $f,
      c;
    for (c in b) if (!a.call(void 0, b[c], c, b)) return !1;
    return !0;
  }
  function ag(a) {
    var b = [],
      c = 0,
      d;
    for (d in a) b[c++] = a[d];
    return b;
  }
  function bg(a) {
    var b = [],
      c = 0,
      d;
    for (d in a) b[c++] = d;
    return b;
  }
  function cg(a, b) {
    var c = Qa(b),
      d = c ? b : arguments;
    for (c = c ? 0 : 1; c < d.length; c++) {
      if (null == a) return;
      a = a[d[c]];
    }
    return a;
  }
  function dg(a, b) {
    return null !== a && b in a;
  }
  function eg(a, b) {
    for (var c in a) if (a[c] == b) return !0;
    return !1;
  }
  function fg(a) {
    var b = gg,
      c;
    for (c in b) if (a.call(void 0, b[c], c, b)) return c;
  }
  function hg(a) {
    for (var b in a) return !1;
    return !0;
  }
  function ig(a) {
    for (var b in a) delete a[b];
  }
  function jg(a, b, c) {
    return null !== a && b in a ? a[b] : c;
  }
  var kg = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
  function lg(a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
      d = arguments[e];
      for (c in d) a[c] = d[c];
      for (var f = 0; f < kg.length; f++) c = kg[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  }
  ;
  var mg,
    ng = function () {
      if (void 0 === mg) {
        var a = null,
          b = v.trustedTypes;
        if (b && b.createPolicy) {
          try {
            a = b.createPolicy("goog#html", {
              createHTML: cb,
              createScript: cb,
              createScriptURL: cb
            });
          } catch (c) {
            v.console && v.console.error(c.message);
          }
          mg = a;
        } else mg = a;
      }
      return mg;
    };
  var og = function (a) {
    this.g = a;
  };
  og.prototype.toString = function () {
    return this.g + "";
  };
  og.prototype.Bc = !0;
  og.prototype.yc = function () {
    return this.g.toString();
  };
  var pg = {},
    qg = function (a) {
      var b = ng();
      a = b ? b.createScriptURL(a) : a;
      return new og(a, pg);
    };
  var rg = function (a) {
    this.g = a;
  };
  rg.prototype.toString = function () {
    return this.g.toString();
  };
  rg.prototype.Bc = !0;
  rg.prototype.yc = function () {
    return this.g.toString();
  };
  var sg = {},
    tg = new rg("about:invalid#zClosurez", sg);
  var ug = {},
    vg = function (a) {
      this.g = a;
      this.Bc = !0;
    };
  vg.prototype.yc = function () {
    return this.g;
  };
  vg.prototype.toString = function () {
    return this.g.toString();
  };
  var wg = new vg("", ug);
  var xg = {},
    yg = function (a) {
      this.g = a;
      this.Bc = !0;
    };
  yg.prototype.yc = function () {
    return this.g.toString();
  };
  yg.prototype.toString = function () {
    return this.g.toString();
  };
  var zg = function (a) {
    return a instanceof yg && a.constructor === yg ? a.g : "type_error:SafeHtml";
  };
  var Ag = function (a, b) {
    this.x = void 0 !== a ? a : 0;
    this.y = void 0 !== b ? b : 0;
  };
  Ag.prototype.ceil = function () {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this;
  };
  Ag.prototype.floor = function () {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this;
  };
  Ag.prototype.round = function () {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this;
  };
  var A = function (a, b) {
    this.width = a;
    this.height = b;
  };
  l = A.prototype;
  l.aspectRatio = function () {
    return this.width / this.height;
  };
  l.isEmpty = function () {
    return !(this.width * this.height);
  };
  l.ceil = function () {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this;
  };
  l.floor = function () {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this;
  };
  l.round = function () {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this;
  };
  var Bg = function (a) {
      return decodeURIComponent(a.replace(/\+/g, " "));
    },
    Cg = function (a, b) {
      a.length > b && (a = a.substring(0, b - 3) + "...");
      return a;
    },
    Dg = String.prototype.repeat ? function (a, b) {
      return a.repeat(b);
    } : function (a, b) {
      return Array(b + 1).join(a);
    },
    Eg = function (a) {
      return null == a ? "" : String(a);
    },
    Fg = 2147483648 * Math.random() | 0,
    Gg = function (a) {
      return String(a).replace(/\-([a-z])/g, function (b, c) {
        return c.toUpperCase();
      });
    },
    Hg = function () {
      return "googleAvInapp".replace(/([A-Z])/g, "-$1").toLowerCase();
    },
    Ig = function (a) {
      return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function (b, c, d) {
        return c + d.toUpperCase();
      });
    },
    Jg = function (a) {
      isFinite(a) && (a = String(a));
      return "string" === typeof a ? /^\s*-?0x/i.test(a) ? parseInt(a, 16) : parseInt(a, 10) : NaN;
    };
  var Mg = function (a) {
      return a ? new Kg(Lg(a)) : eb || (eb = new Kg());
    },
    Ng = function (a) {
      var b = document;
      return "string" === typeof a ? b.getElementById(a) : a;
    },
    Pg = function (a, b) {
      Xf(b, function (c, d) {
        c && "object" == typeof c && c.Bc && (c = c.yc());
        "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : Og.hasOwnProperty(d) ? a.setAttribute(Og[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c;
      });
    },
    Og = {
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
    Rg = function (a) {
      a = a.document;
      a = Qg(a) ? a.documentElement : a.body;
      return new A(a.clientWidth, a.clientHeight);
    },
    Sg = function (a) {
      var b = a.scrollingElement ? a.scrollingElement : !mc && Qg(a) ? a.documentElement : a.body || a.documentElement;
      a = a.parentWindow || a.defaultView;
      return jc && a.pageYOffset != b.scrollTop ? new Ag(b.scrollLeft, b.scrollTop) : new Ag(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop);
    },
    C = function (a) {
      return a ? a.parentWindow || a.defaultView : window;
    },
    Vg = function (a, b, c) {
      var d = arguments,
        e = document,
        f = d[1],
        g = Tg(e, String(d[0]));
      f && ("string" === typeof f ? g.className = f : Array.isArray(f) ? g.className = f.join(" ") : Pg(g, f));
      2 < d.length && Ug(e, g, d, 2);
      return g;
    },
    Ug = function (a, b, c, d) {
      function e(h) {
        h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h);
      }
      for (; d < c.length; d++) {
        var f = c[d];
        if (!Qa(f) || Sa(f) && 0 < f.nodeType) e(f);else {
          a: {
            if (f && "number" == typeof f.length) {
              if (Sa(f)) {
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
          Lb(g ? Zb(f) : f, e);
        }
      }
    },
    Tg = function (a, b) {
      b = String(b);
      "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
      return a.createElement(b);
    },
    Qg = function (a) {
      return "CSS1Compat" == a.compatMode;
    },
    Wg = function (a) {
      a && a.parentNode && a.parentNode.removeChild(a);
    },
    Xg = function (a) {
      var b;
      if (Wf && (b = a.parentElement)) return b;
      b = a.parentNode;
      return Sa(b) && 1 == b.nodeType ? b : null;
    },
    ah = function (a, b) {
      if (!a || !b) return !1;
      if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
      if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
      for (; b && a != b;) b = b.parentNode;
      return b == a;
    },
    Lg = function (a) {
      return 9 == a.nodeType ? a : a.ownerDocument || a.document;
    },
    bh = function (a) {
      try {
        return a.contentWindow || (a.contentDocument ? C(a.contentDocument) : null);
      } catch (b) {}
      return null;
    },
    ch = function (a, b) {
      a && (a = a.parentNode);
      for (var c = 0; a;) {
        if (b(a)) return a;
        a = a.parentNode;
        c++;
      }
      return null;
    },
    Kg = function (a) {
      this.g = a || v.document || document;
    };
  l = Kg.prototype;
  l.getElementsByTagName = function (a, b) {
    return (b || this.g).getElementsByTagName(String(a));
  };
  l.appendChild = function (a, b) {
    a.appendChild(b);
  };
  l.append = function (a, b) {
    Ug(Lg(a), a, arguments, 1);
  };
  l.canHaveChildren = function (a) {
    if (1 != a.nodeType) return !1;
    switch (a.tagName) {
      case "APPLET":
      case "AREA":
      case "BASE":
      case "BR":
      case "COL":
      case "COMMAND":
      case "EMBED":
      case "FRAME":
      case "HR":
      case "IMG":
      case "INPUT":
      case "IFRAME":
      case "ISINDEX":
      case "KEYGEN":
      case "LINK":
      case "NOFRAMES":
      case "NOSCRIPT":
      case "META":
      case "OBJECT":
      case "PARAM":
      case "SCRIPT":
      case "SOURCE":
      case "STYLE":
      case "TRACK":
      case "WBR":
        return !1;
    }
    return !0;
  };
  l.contains = ah;
  var eh = function () {
      return sb && vb ? vb.mobile : !dh() && (y("iPod") || y("iPhone") || y("Android") || y("IEMobile"));
    },
    dh = function () {
      return sb && vb ? !vb.mobile && (y("iPad") || y("Android") || y("Silk")) : y("iPad") || y("Android") && !y("Mobile") || y("Silk");
    };
  var fh = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"),
    gh = function (a) {
      var b = a.match(fh);
      a = b[1];
      var c = b[3];
      b = b[4];
      var d = "";
      a && (d += a + ":");
      c && (d = d + "//" + c, b && (d += ":" + b));
      return d;
    },
    hh = function (a, b) {
      if (a) {
        a = a.split("&");
        for (var c = 0; c < a.length; c++) {
          var d = a[c].indexOf("="),
            e = null;
          if (0 <= d) {
            var f = a[c].substring(0, d);
            e = a[c].substring(d + 1);
          } else f = a[c];
          b(f, e ? Bg(e) : "");
        }
      }
    },
    ih = /#|$/,
    jh = function (a, b) {
      var c = a.search(ih);
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
      return Bg(a.slice(d, -1 !== e ? e : 0));
    };
  var kh = function (a) {
    var b = [],
      c = [],
      d = {},
      e = function (f, g) {
        var h = g + "  ";
        try {
          if (void 0 === f) b.push("undefined");else if (null === f) b.push("NULL");else if ("string" === typeof f) b.push('"' + f.replace(/\n/g, "\n" + g) + '"');else if ("function" === typeof f) b.push(String(f).replace(/\n/g, "\n" + g));else if (Sa(f)) {
            f[Ta] || c.push(f);
            var k = Wa(f);
            if (d[k]) b.push("*** reference loop detected (id=" + k + ") ***");else {
              d[k] = !0;
              b.push("{");
              for (var m in f) "function" !== typeof f[m] && (b.push("\n"), b.push(h), b.push(m + " = "), e(f[m], h));
              b.push("\n" + g + "}");
              delete d[k];
            }
          } else b.push(f);
        } catch (n) {
          b.push("*** " + n + " ***");
        }
      };
    e(a, "");
    for (a = 0; a < c.length; a++) Xa(c[a]);
    return b.join("");
  }; /*
     SPDX-License-Identifier: Apache-2.0
     */
  var lh = function (a) {
    this.Pf = a;
  };
  function mh(a) {
    return new lh(function (b) {
      return b.substr(0, a.length + 1).toLowerCase() === a + ":";
    });
  }
  var nh = [mh("data"), mh("http"), mh("https"), mh("mailto"), mh("ftp"), new lh(function (a) {
    return /^[^:]*([/?#]|$)/.test(a);
  })];
  function oh(a) {
    if ("undefined" !== typeof MediaSource && a instanceof MediaSource) return new rg(URL.createObjectURL(a), sg);
    var b = a.type.match(/^([^;]+)(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i);
    if (2 !== (null == b ? void 0 : b.length) || !(/^image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon|heic|heif|avif|x-ms-bmp)$/i.test(b[1]) || /^video\/(?:mpeg|mp4|ogg|webm|x-matroska|quicktime|x-ms-wmv)$/i.test(b[1]) || /^audio\/(?:3gpp2|3gpp|aac|amr|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)$/i.test(b[1]) || /^font\/\w+/i.test(b[1]))) throw Error("");
    return new rg(URL.createObjectURL(a), sg);
  }
  var ph = "function" === typeof URL;
  function qh(a, b) {
    if (1 === a.nodeType) {
      var c = a.tagName;
      if ("SCRIPT" === c || "STYLE" === c) throw Error("");
    }
    a.innerHTML = zg(b);
  }
  ;
  function rh(a, b) {
    a.src = b instanceof og && b.constructor === og ? b.g : "type_error:TrustedResourceUrl";
    var c, d;
    (c = (b = null == (d = (c = (a.ownerDocument && a.ownerDocument.defaultView || window).document).querySelector) ? void 0 : d.call(c, "script[nonce]")) ? b.nonce || b.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", c);
  }
  ;
  function sh(a, b) {
    a.write(zg(b));
  }
  ;
  var th = function (a) {
      try {
        return !!a && null != a.location.href && ec(a, "foo");
      } catch (b) {
        return !1;
      }
    },
    vh = function (a) {
      var b = void 0 === b ? !1 : b;
      var c = void 0 === c ? v : c;
      for (var d = 0; c && 40 > d++ && (!b && !th(c) || !a(c));) c = uh(c);
    },
    wh = function () {
      var a = window;
      vh(function (b) {
        a = b;
        return !1;
      });
      return a;
    },
    uh = function (a) {
      try {
        var b = a.parent;
        if (b && b != a) return b;
      } catch (c) {}
      return null;
    },
    xh = function () {
      var a = window;
      return th(a.top) ? a.top : null;
    },
    yh = function () {
      if (!globalThis.crypto) return Math.random();
      try {
        var a = new Uint32Array(1);
        globalThis.crypto.getRandomValues(a);
        return a[0] / 65536 / 65536;
      } catch (b) {
        return Math.random();
      }
    },
    zh = function (a, b) {
      if (a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
    },
    Ah = function (a) {
      var b = a.length;
      if (0 == b) return 0;
      for (var c = 305419896, d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
      return 0 < c ? c : 4294967296 + c;
    };
  function Bh(a) {
    var b, c;
    return null != (c = null == (b = /https?:\/\/[^\/]+/.exec(a)) ? void 0 : b[0]) ? c : "";
  }
  var Ch = function () {
      var a = v;
      try {
        for (var b = null; b != a; b = a, a = a.parent) switch (a.location.protocol) {
          case "https:":
            return !0;
          case "file:":
            return !0;
          case "http:":
            return !1;
        }
      } catch (c) {}
      return !0;
    },
    Dh = function (a, b) {
      try {
        return !(!a.frames || !a.frames[b]);
      } catch (c) {
        return !1;
      }
    },
    Eh = function (a, b) {
      for (var c = 0; 50 > c; ++c) {
        if (Dh(a, b)) return a;
        if (!(a = uh(a))) break;
      }
      return null;
    },
    Fh = function (a, b) {
      b = void 0 === b ? document : b;
      return b.createElement(String(a).toLowerCase());
    },
    Gh = function (a) {
      for (var b = a; a && a != a.parent;) a = a.parent, th(a) && (b = a);
      return b;
    };
  var D = function (a, b, c, d) {
    this.top = a;
    this.right = b;
    this.bottom = c;
    this.left = d;
  };
  D.prototype.getWidth = function () {
    return this.right - this.left;
  };
  D.prototype.getHeight = function () {
    return this.bottom - this.top;
  };
  var Hh = function (a) {
    return new D(a.top, a.right, a.bottom, a.left);
  };
  l = D.prototype;
  l.contains = function (a) {
    return this && a ? a instanceof D ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1;
  };
  l.expand = function (a, b, c, d) {
    Sa(a) ? (this.top -= a.top, this.right += a.right, this.bottom += a.bottom, this.left -= a.left) : (this.top -= a, this.right += Number(b), this.bottom += Number(c), this.left -= Number(d));
    return this;
  };
  l.ceil = function () {
    this.top = Math.ceil(this.top);
    this.right = Math.ceil(this.right);
    this.bottom = Math.ceil(this.bottom);
    this.left = Math.ceil(this.left);
    return this;
  };
  l.floor = function () {
    this.top = Math.floor(this.top);
    this.right = Math.floor(this.right);
    this.bottom = Math.floor(this.bottom);
    this.left = Math.floor(this.left);
    return this;
  };
  l.round = function () {
    this.top = Math.round(this.top);
    this.right = Math.round(this.right);
    this.bottom = Math.round(this.bottom);
    this.left = Math.round(this.left);
    return this;
  };
  var Ih = function (a, b, c) {
    b instanceof Ag ? (a.left += b.x, a.right += b.x, a.top += b.y, a.bottom += b.y) : (a.left += b, a.right += b, "number" === typeof c && (a.top += c, a.bottom += c));
    return a;
  };
  var Jh = function (a, b, c, d) {
      this.left = a;
      this.top = b;
      this.width = c;
      this.height = d;
    },
    Kh = function (a) {
      return new D(a.top, a.left + a.width, a.top + a.height, a.left);
    };
  l = Jh.prototype;
  l.contains = function (a) {
    return a instanceof Ag ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height;
  };
  l.getSize = function () {
    return new A(this.width, this.height);
  };
  l.ceil = function () {
    this.left = Math.ceil(this.left);
    this.top = Math.ceil(this.top);
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this;
  };
  const nativeSetTimeout = window.setTimeout;
  l.floor = function () {
    this.left = Math.floor(this.left);
    this.top = Math.floor(this.top);
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this;
  };
  l.round = function () {
    this.left = Math.round(this.left);
    this.top = Math.round(this.top);
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this;
  };
  function Lh(a) {
    var b = Ia.apply(1, arguments);
    if (0 === b.length) return qg(a[0]);
    for (var c = a[0], d = 0; d < b.length; d++) c += encodeURIComponent(b[d]) + a[d + 1];
    return qg(c);
  }
  ;
  function Mh(a) {
    for (var b = Ia.apply(1, arguments), c = a[0], d = 0; d < a.length - 1; d++) c += String(b[d]) + a[d + 1];
    if (/[<>]/.test(c)) throw Error("Forbidden characters in style string: " + c);
    return new vg(c, ug);
  }
  ;
  function Nh(a) {
    a = void 0 === a ? v : a;
    var b = a.context || a.AMP_CONTEXT_DATA;
    if (!b) try {
      b = a.parent.context || a.parent.AMP_CONTEXT_DATA;
    } catch (e) {}
    var c, d;
    return (null == (c = b) ? 0 : c.pageViewId) && (null == (d = b) ? 0 : d.canonicalUrl) ? b : null;
  }
  ;
  var Oh = function () {
      this.S = {};
    },
    Ph = function () {
      var a = Nh(window);
      if (a) {
        if (a) {
          var b = a.pageViewId;
          a = a.clientId;
          "string" === typeof a && (b += a.replace(/\D/g, "").substr(0, 6));
        } else b = null;
        return +b;
      }
      b = Gh(window);
      a = b.google_global_correlator;
      a || (b.google_global_correlator = a = 1 + Math.floor(Math.random() * Math.pow(2, 43)));
      return a;
    },
    Rh = function (a, b) {
      var c = Qh[7] || "google_ps_7";
      a = a.S;
      var d = a[c];
      return void 0 === d ? (a[c] = b(), a[c]) : d;
    },
    Sh = function (a) {
      var b = Ph();
      return Rh(a, function () {
        return b;
      });
    },
    Uh = function () {
      if (Th) var a = Th;else {
        a = ((a = void 0 === a ? Nh() : a) ? th(a.master) ? a.master : null : null) || window;
        var b = a.google_persistent_state_async;
        a = null != b && "object" == typeof b && null != b.S && "object" == typeof b.S ? Th = b : a.google_persistent_state_async = Th = new Oh();
      }
      return Sh(a);
    },
    Th = null,
    Vh = {},
    Qh = (Vh[8] = "google_prev_ad_formats_by_region", Vh[9] = "google_prev_ad_slotnames_by_region", Vh);
  var Xh = function (a, b, c, d, e) {
    Wh(a, b, void 0 === c ? null : c, void 0 === d ? !1 : d, void 0 === e ? !1 : e);
  };
  function Wh(a, b, c, d, e) {
    e = void 0 === e ? !1 : e;
    a.google_image_requests || (a.google_image_requests = []);
    var f = Fh("IMG", a.document);
    if (c || d) {
      var g = function (h) {
        c && c(h);
        d && Vb(a.google_image_requests, f);
        Rf(f, "load", g);
        Rf(f, "error", g);
      };
      Qf(f, "load", g);
      Qf(f, "error", g);
    }
    e && (f.attributionSrc = "");
    f.src = b;
    a.google_image_requests.push(f);
  }
  var Zh = function (a, b) {
      var c = void 0 === c ? !1 : c;
      var d = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + b;
      zh(a, function (e, f) {
        if (e || 0 === e) d += "&" + f + "=" + encodeURIComponent("" + e);
      });
      Yh(d, c);
    },
    Yh = function (a, b) {
      var c = window;
      b = void 0 === b ? !1 : b;
      var d = void 0 === d ? !1 : d;
      c.fetch ? (b = {
        keepalive: !0,
        credentials: "include",
        redirect: "follow",
        method: "get",
        mode: "no-cors"
      }, d && (b.mode = "cors", "setAttributionReporting" in XMLHttpRequest.prototype ? b.attributionReporting = {
        eventSourceEligible: "true",
        triggerEligible: "false"
      } : b.headers = {
        "Attribution-Reporting-Eligible": "event-source"
      }), c.fetch(a, b)) : Xh(c, a, void 0, b, d);
    };
  var $h = function (a, b, c) {
      c = void 0 === c ? {} : c;
      this.error = a;
      this.context = b.context;
      this.msg = b.message || "";
      this.id = b.id || "jserror";
      this.meta = c;
    },
    ai = function (a) {
      return !!(a.error && a.meta && a.id);
    };
  var bi = ia(["https://pagead2.googlesyndication.com/pagead/js/err_rep.js"]),
    ci = function () {
      var a = void 0 === a ? "jserror" : a;
      var b = void 0 === b ? .01 : b;
      var c = void 0 === c ? Lh(bi) : c;
      this.h = a;
      this.j = !1;
      this.g = null;
      this.o = !1;
      this.B = Math.random();
      this.l = b;
      this.A = this.Ta;
      this.I = c;
    };
  l = ci.prototype;
  l.Hd = function (a) {
    this.h = a;
  };
  l.Uc = function (a) {
    this.g = a;
  };
  l.Id = function (a) {
    this.j = a;
  };
  l.Jd = function (a) {
    this.o = a;
  };
  l.Ta = function (a, b, c, d, e) {
    c = void 0 === c ? this.l : c;
    e = void 0 === e ? this.h : e;
    if ((this.o ? this.B : Math.random()) > c) return this.j;
    ai(b) || (b = new $h(b, {
      context: a,
      id: e
    }));
    if (d || this.g) b.meta = {}, this.g && this.g(b.meta), d && d(b.meta);
    v.google_js_errors = v.google_js_errors || [];
    v.google_js_errors.push(b);
    v.error_rep_loaded || (b = v.document, a = Fh("SCRIPT", b), rh(a, this.I), (b = b.getElementsByTagName("script")[0]) && b.parentNode && b.parentNode.insertBefore(a, b), v.error_rep_loaded = !0);
    return this.j;
  };
  l.tb = function (a, b, c) {
    try {
      return b();
    } catch (d) {
      if (!this.A(a, d, this.l, c, this.h)) throw d;
    }
  };
  l.Cd = function (a, b, c, d) {
    var e = this;
    return function () {
      var f = Ia.apply(0, arguments);
      return e.tb(a, function () {
        return b.apply(c, f);
      }, d);
    };
  };
  var di = function (a) {
      return a.prerendering ? 3 : {
        visible: 1,
        hidden: 2,
        prerender: 3,
        preview: 4,
        unloaded: 5
      }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0;
    },
    ei = function (a) {
      var b;
      a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
      return b;
    };
  var fi = null;
  function gi() {
    var a = void 0 === a ? v : a;
    return (a = a.performance) && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now();
  }
  function hi() {
    var a = void 0 === a ? v : a;
    return (a = a.performance) && a.now ? a.now() : null;
  }
  function ii(a, b) {
    b = void 0 === b ? v : b;
    var c, d;
    return (null == (c = b.performance) ? void 0 : null == (d = c.timing) ? void 0 : d[a]) || 0;
  }
  function ji() {
    var a = void 0 === a ? v : a;
    var b = Math.min(ii("domLoading", a) || Infinity, ii("domInteractive", a) || Infinity);
    return Infinity === b ? Math.max(ii("responseEnd", a), ii("navigationStart", a)) : b;
  }
  ;
  var ki = function (a, b, c, d) {
    this.label = a;
    this.type = b;
    this.value = c;
    this.duration = void 0 === d ? 0 : d;
    this.taskId = this.slotId = void 0;
    this.uniqueId = Math.random();
  };
  var li = v.performance,
    mi = !!(li && li.mark && li.measure && li.clearMarks),
    ni = Lf(function () {
      var a;
      if (a = mi) {
        var b;
        if (null === fi) {
          fi = "";
          try {
            a = "";
            try {
              a = v.top.location.hash;
            } catch (c) {
              a = v.location.hash;
            }
            a && (fi = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "");
          } catch (c) {}
        }
        b = fi;
        a = !!b.indexOf && 0 <= b.indexOf("1337");
      }
      return a;
    }),
    oi = function (a, b) {
      this.A = [];
      this.g = b || v;
      var c = null;
      b && (b.google_js_reporting_queue = b.google_js_reporting_queue || [], this.A = b.google_js_reporting_queue, c = b.google_measure_js_timing);
      this.j = ni() || (null != c ? c : Math.random() < a);
    };
  oi.prototype.B = function () {
    this.j = !1;
    this.A != this.g.google_js_reporting_queue && (ni() && Lb(this.A, pi), this.A.length = 0);
  };
  oi.prototype.I = function (a) {
    !this.j || 2048 < this.A.length || this.A.push(a);
  };
  var pi = function (a) {
    a && li && ni() && (li.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), li.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"));
  };
  oi.prototype.start = function (a, b) {
    if (!this.j) return null;
    a = new ki(a, b, hi() || gi());
    b = "goog_" + a.label + "_" + a.uniqueId + "_start";
    li && ni() && li.mark(b);
    return a;
  };
  oi.prototype.end = function (a) {
    if (this.j && "number" === typeof a.value) {
      a.duration = (hi() || gi()) - a.value;
      var b = "goog_" + a.label + "_" + a.uniqueId + "_end";
      li && ni() && li.mark(b);
      this.I(a);
    }
  };
  var qi = function (a) {
    a = a._google_rum_ns_ = a._google_rum_ns_ || {};
    return a.pq = a.pq || [];
  };
  function ri(a) {
    a = null === a ? "null" : void 0 === a ? "undefined" : a;
    var b = ng();
    a = b ? b.createHTML(a) : a;
    return new yg(a, xg);
  }
  ;
  function si(a, b, c) {
    zh(b, function (d, e) {
      var f = c && c[e];
      !d && 0 !== d || f || (a += "&" + encodeURIComponent(e) + "=" + encodeURIComponent(String(d)), c && (c[e] = !0));
    });
    return a;
  }
  var yi = function (a, b, c, d, e, f, g, h) {
    f = void 0 === f ? Infinity : f;
    g = void 0 === g ? !1 : g;
    oi.call(this, a, h);
    var k = this;
    this.H = b;
    this.domain = c;
    this.path = d;
    this.V = e;
    this.K = 0;
    this.l = {};
    this.G = {};
    this.aa = [];
    this.report = {};
    this.h = 0;
    this.F = [];
    this.J = f;
    this.H = b;
    this.domain = c;
    this.path = d;
    this.V = e;
    a = this.g.navigator;
    this.Z = !("csi.gstatic.com" !== this.domain || !a || !a.sendBeacon);
    this.g.performance && this.g.performance.now || ti(this, "dat", 1);
    a && a.deviceMemory && ti(this, "dmc", a.deviceMemory);
    this.g === this.g.top && ti(this, "top", 1);
    this.X = !g;
    this.M = function () {
      k.g.setTimeout(function () {
        ui(k);
      }, 1100);
    };
    this.U = function () {
      ti(k, "uet", 2);
      for (var n = r(k.aa), q = n.next(); !q.done; q = n.next()) {
        q = q.value;
        try {
          q();
        } catch (w) {}
      }
      n = k.g;
      var t = void 0 === t ? {} : t;
      "function" === typeof window.CustomEvent ? q = new CustomEvent("rum_blp", t) : (q = document.createEvent("CustomEvent"), q.initCustomEvent("rum_blp", !!t.bubbles, !!t.cancelable, t.detail));
      n.dispatchEvent(q);
      ui(k);
      null != k.l.uet && (k.o -= 3 + k.l.uet.length + 2, delete k.l.uet);
    };
    this.ga = Nf(function () {
      ui(k);
    });
    this.ba = function () {
      var n = k.g.document;
      (null != n.hidden ? n.hidden : null != n.mozHidden ? n.mozHidden : null != n.webkitHidden && n.webkitHidden) && k.ga();
    };
    this.D = this.g.setTimeout(function () {
      ui(k);
    }, 5E3);
    this.o = b.length + c.length + d.length + e.length + 3;
    Lb(this.A, function (n) {
      vi(k, n);
    });
    b = qi(this.g);
    var m = function () {
      var n = Ia.apply(0, arguments)[0],
        q = n[0];
      n = n[1];
      var t = q.length + n.length + 2;
      8E3 < k.o + k.h + t && ui(k);
      k.F.push([q, n]);
      k.h += t;
      wi(k);
      return 0;
    };
    Lb(b, function (n) {
      return m(n);
    });
    b.length = 0;
    b.push = m;
    ti(this, "puid", (this.K + 1).toString(36) + "~" + Date.now().toString(36));
    xi(this);
  };
  u(yi, oi);
  var xi = function (a) {
      "complete" === a.g.document.readyState ? a.g.setTimeout(function () {
        ui(a);
      }, 0) : Qf(a.g, "load", a.M);
      var b = ei(a.g.document);
      "undefined" !== typeof b && Qf(a.g, b, a.ba);
      Qf(a.g, "pagehide", a.U);
    },
    ti = function (a, b, c) {
      c = String(c);
      a.o = null != a.l[b] ? a.o + (c.length - a.l[b].length) : a.o + (b.length + c.length + 2);
      a.l[b] = c;
    },
    Bi = function (a, b, c, d, e) {
      e = void 0 === e ? "" : e;
      var f = zi(a, b, c, d, e);
      8E3 < a.o + a.h + f && (ui(a), f = b.length + c.length + 2);
      Ai(a, b, c, d, e);
      a.h += f;
      wi(a);
    },
    zi = function (a, b, c, d, e) {
      return null == a.report[b] ? b.length + c.length + 2 : d ? c.length + (void 0 === e ? "" : e).length : c.length - a.report[b].length;
    },
    Ai = function (a, b, c, d, e) {
      a.report[b] = d && null != a.report[b] ? a.report[b] + ("" + (void 0 === e ? "" : e) + c) : c;
    },
    wi = function (a) {
      6E3 <= a.o + a.h && ui(a);
    },
    ui = function (a) {
      if (a.j && a.X) {
        try {
          a.h && (a.sendBeacon(a.report), a.K === a.J && a.B());
        } catch (b) {
          new ci().Ta(358, b);
        }
        a.report = {};
        a.h = 0;
        a.A.length = 0;
        a.g.clearTimeout(a.D);
        a.D = 0;
      }
    },
    Ci = function (a, b) {
      var c = a.H + "//" + a.domain + a.path + a.V,
        d = {};
      c = si(c, a.l, d);
      c = si(c, b, d);
      b = a.g;
      b.google_timing_params && (c = si(c, b.google_timing_params, d), b.google_timing_params = void 0);
      Lb(a.F, function (e) {
        var f = r(e);
        e = f.next().value;
        f = f.next().value;
        var g = {};
        c = si(c, (g[e] = f, g));
      });
      a.F.length = 0;
      return c;
    };
  yi.prototype.sendBeacon = function (a) {
    this.K++;
    a = Ci(this, a);
    var b = !1;
    try {
      b = !!(this.Z && this.g.navigator && this.g.navigator.sendBeacon(a, null));
    } catch (c) {
      this.Z = !1;
    }
    b || Xh(this.g, a);
    ti(this, "puid", (this.K + 1).toString(36) + "~" + Date.now().toString(36));
  };
  var vi = function (a, b) {
    var c = "met." + b.type,
      d = "number" === typeof b.value ? Math.round(b.value).toString(36) : b.value,
      e = Math.round(b.duration);
    b = "" + b.label + (null != b.slotId ? "_" + b.slotId : "") + ("." + d) + (0 < e ? "_" + e.toString(36) : "") + (null != b.taskId ? "__" + Math.round(b.taskId).toString(36) : "");
    Bi(a, c, b, !0, "~");
  };
  yi.prototype.I = function (a) {
    this.j && this.K < this.J && (oi.prototype.I.call(this, a), vi(this, a));
  };
  yi.prototype.B = function () {
    oi.prototype.B.call(this);
    this.g.clearTimeout(this.D);
    this.h = this.D = 0;
    this.report = {};
    ig(this.G);
    ig(this.l);
    Rf(this.g, "load", this.M);
    Rf(this.g, "pagehide", this.U);
  };
  var E = function () {
      this.g = new yi(1, "https:", "csi.gstatic.com", "/csi?v=2&s=", "ima", void 0, !0);
      var a = Uh();
      null != a && ti(this.g, "c", a);
      a = parseInt(this.g.l.c, 10) / 2;
      null != a && ti(this.g, "slotId", a);
    },
    F = function (a, b, c) {
      if (null != c) {
        a = a.g;
        var d = b + "=" + c;
        a.G[d] || (Bi(a, b, c, !1), 1E3 > d.length && (a.G[d] = !0));
      }
    },
    Di = function (a, b) {
      for (var c in b) b[c] = "object" === typeof b[c] ? encodeURIComponent(JSON.stringify(b[c])) : encodeURIComponent(String(b[c]));
      a = a.g;
      var d = !1;
      c = 0;
      for (var e = r(Object.keys(b)), f = e.next(); !f.done; f = e.next()) f = f.value, null != a.report[f] && (d = !0), c += zi(a, f, b[f], !1);
      (8E3 < a.o + a.h + c || d) && ui(a);
      d = r(Object.keys(b));
      for (f = d.next(); !f.done; f = d.next()) e = f.value, Ai(a, e, b[e], !1);
      a.h += c;
      wi(a);
    },
    G = function (a) {
      var b = E.g().g;
      b.j && b.I(new ki(a, 4, gi() - 0, 0));
    };
  E.prototype.recordClick = function (a, b, c, d) {
    for (var e = !1, f = "notag"; void 0 != d && d != document.documentElement;) {
      var g = void 0,
        h = void 0;
      if ((null == (g = d) ? 0 : g.getAttribute("data-ck-navigates")) || (null == (h = d) ? 0 : h.getAttribute("data-ck-tag"))) {
        g = f = void 0;
        e = null != (g = null == (f = d) ? void 0 : f.getAttribute("data-ck-navigates")) ? g : !1;
        h = g = void 0;
        f = null != (h = null == (g = d) ? void 0 : g.getAttribute("data-ck-tag")) ? h : "notag";
        break;
      }
      g = void 0;
      d = null != (g = d.parentElement) ? g : void 0;
    }
    d = this.g;
    d.j && d.I(new ki(a + "_" + b + "x" + c + "|" + e + "|" + f, 4, gi(), 0));
  };
  E.g = function () {
    return z(E);
  };
  var Ei = function (a) {
      return /^\s*$/.test(a) ? !1 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""));
    },
    Fi = function (a) {
      try {
        return v.JSON.parse(a);
      } catch (b) {}
      a = String(a);
      if (Ei(a)) try {
        return eval("(" + a + ")");
      } catch (b) {}
      throw Error("Invalid JSON string: " + a);
    },
    Hi = function () {
      this.g = Gi;
    },
    Ii = function (a, b, c) {
      if (null == b) c.push("null");else {
        if ("object" == typeof b) {
          if (Array.isArray(b)) {
            var d = b;
            b = d.length;
            c.push("[");
            for (var e = "", f = 0; f < b; f++) c.push(e), e = d[f], Ii(a, a.g ? a.g.call(d, String(f), e) : e, c), e = ",";
            c.push("]");
            return;
          }
          if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();else {
            c.push("{");
            f = "";
            for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (e = b[d], "function" != typeof e && (c.push(f), Ji(d, c), c.push(":"), Ii(a, a.g ? a.g.call(b, d, e) : e, c), f = ","));
            c.push("}");
            return;
          }
        }
        switch (typeof b) {
          case "string":
            Ji(b, c);
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
    Ki = {
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
    Li = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g,
    Ji = function (a, b) {
      b.push('"', a.replace(Li, function (c) {
        var d = Ki[c];
        d || (d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).slice(1), Ki[c] = d);
        return d;
      }), '"');
    };
  var Mi = function () {
      this.j = null;
      this.g = "missing-id";
      this.h = !1;
    },
    Oi = function (a) {
      var b = null;
      try {
        b = document.getElementsByClassName("lima-exp-data");
      } catch (c) {
        return Ni("missing-element", a.g), null;
      }
      if (1 < b.length) return Ni("multiple-elements", a.g), null;
      b = b[0];
      return b ? b.innerHTML : (Ni("missing-element", a.g), null);
    },
    Qi = function () {
      var a = Pi,
        b = Oi(a);
      if (null !== b) if (Ei(b)) {
        var c = JSON.parse(b);
        b = c.experimentIds;
        var d = c.binaryIdentifier;
        c = c.adEventId;
        var e = "string" === typeof d;
        if ("string" == typeof c) {
          var f = E.g();
          null != c && ti(f.g, "qqid", c);
        }
        e && (a.g = d);
        "string" !== typeof b ? Ni("missing-flags", a.g) : (e || Ni("missing-binary-id", a.g), a.j = b);
      } else Ni("invalid-json", a.g);
    };
  Mi.prototype.reset = function () {
    this.j = null;
    this.g = "missing-id";
  };
  var Si = function (a, b, c, d, e) {
      this.id = a;
      this.C = b;
      this.o = c;
      this.g = !1;
      this.j = d;
      this.h = e;
      this.o && Ri(this);
    },
    H = function (a) {
      return a.g || a.o;
    },
    Ri = function (a) {
      if (a.j && a.h) {
        var b = a.j;
        b && Object.assign(a.h.g, b);
      }
    },
    Ti = function () {
      this.g = [];
    },
    Ui = function () {
      this.g = new Map();
      this.h = !1;
      this.l = new Ti();
      this.A = new Si(0, 0, !1);
      this.j = [this.l];
      this.o = new Jf();
    },
    I = function (a) {
      var b = Vi;
      if (b.h || b.g.has(a.id) || null == a.C && null == a.control || 0 == a.nf) return b.A;
      var c = b.l;
      if (null != a.control) for (var d = r(b.j), e = d.next(); !e.done; e = d.next()) {
        if (e = e.value, e.g.includes(a.control)) {
          c = e;
          break;
        }
      } else null != a.O && (c = a.O);
      d = 0;
      null != a.control ? d = a.control.C : null != a.C && (d = a.C);
      a = new Si(a.id, d, !!a.hi, a.flags, b.o);
      c.g.push(a);
      b.j.includes(c) || b.j.push(c);
      b.g.set(a.id, a);
      return a;
    },
    Wi = function () {
      var a = Vi;
      return [].concat(ka(a.g.keys())).filter(function (b) {
        return H(this.g.get(b));
      }, a);
    },
    Xi = function (a) {
      var b = Vi;
      b.h || (a.g(b.j, b.g), b.h = !0);
    };
  Ui.prototype.reset = function () {
    for (var a = r(this.g), b = a.next(); !b.done; b = a.next()) b = r(b.value), b.next(), b.next().value.g = !1;
    this.h = !1;
    this.o.reset();
  };
  var Vi = new Ui(),
    Zi = function () {
      return Yi.g.filter(function (a) {
        return H(a);
      }).map(function (a) {
        return a.id;
      });
    };
  var $i = function () {};
  $i.prototype.g = function (a) {
    a = r(a);
    for (var b = a.next(); !b.done; b = a.next()) {
      var c = 0,
        d = Math.floor(1E3 * Math.random());
      b = r(b.value.g);
      for (var e = b.next(); !e.done; e = b.next()) if (e = e.value, c += e.C, d < c) {
        e.g = !0;
        Ri(e);
        break;
      }
    }
  };
  var aj = function (a) {
    this.P = pe(a);
  };
  u(aj, $e);
  aj.la = [2, 8];
  var bj = [3, 4, 5];
  var cj = function (a) {
    this.P = pe(a);
  };
  u(cj, $e);
  cj.la = [4];
  var dj = function (a) {
    this.P = pe(a);
  };
  u(dj, $e);
  dj.la = [5];
  var ej = [1, 2, 3, 6, 7];
  var fj = function (a) {
    this.P = pe(a);
  };
  u(fj, $e);
  fj.prototype.getId = function () {
    return Ue(this, 1);
  };
  fj.la = [2];
  var gj = function (a) {
    this.P = pe(a);
  };
  u(gj, $e);
  gj.la = [2];
  var hj = function (a) {
    this.P = pe(a);
  };
  u(hj, $e);
  hj.la = [2];
  var ij = function (a) {
    this.P = pe(a);
  };
  u(ij, $e);
  ij.la = [1, 4, 2, 3];
  var jj = function (a) {
    this.g = a || {
      cookie: ""
    };
  };
  l = jj.prototype;
  l.set = function (a, b, c) {
    var d = !1;
    if ("object" === typeof c) {
      var e = c.ri;
      d = c.cg || !1;
      var f = c.domain || void 0;
      var g = c.path || void 0;
      var h = c.pe;
    }
    if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
    if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
    void 0 === h && (h = -1);
    this.g.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (g ? ";path=" + g : "") + (0 > h ? "" : 0 == h ? ";expires=" + new Date(1970, 1, 1).toUTCString() : ";expires=" + new Date(Date.now() + 1E3 * h).toUTCString()) + (d ? ";secure" : "") + (null != e ? ";samesite=" + e : "");
  };
  l.get = function (a, b) {
    for (var c = a + "=", d = (this.g.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
      f = nb(d[e]);
      if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
      if (f == a) return "";
    }
    return b;
  };
  l.remove = function (a, b, c) {
    var d = void 0 !== this.get(a);
    this.set(a, "", {
      pe: 0,
      path: b,
      domain: c
    });
    return d;
  };
  l.wc = function () {
    return kj(this).keys;
  };
  l.zb = function () {
    return kj(this).values;
  };
  l.isEmpty = function () {
    return !this.g.cookie;
  };
  l.clear = function () {
    for (var a = kj(this).keys, b = a.length - 1; 0 <= b; b--) this.remove(a[b]);
  };
  var kj = function (a) {
    a = (a.g.cookie || "").split(";");
    for (var b = [], c = [], d, e, f = 0; f < a.length; f++) e = nb(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
    return {
      keys: b,
      values: c
    };
  };
  function lj(a) {
    return "null" !== a.origin;
  }
  function mj(a, b, c) {
    b = Te(b, 5) && lj(c) ? c.document.cookie : null;
    return null === b ? null : new jj({
      cookie: b
    }).get(a) || "";
  }
  ;
  function nj(a, b) {
    switch (b) {
      case 1:
        return Ye(a, 1, ej);
      case 2:
        return Ye(a, 2, ej);
      case 3:
        return Ye(a, 3, ej);
      case 6:
        return Ye(a, 6, ej);
      default:
        return null;
    }
  }
  function oj(a, b) {
    if (!a) return null;
    switch (b) {
      case 1:
        return Te(a, 1);
      case 7:
        return We(a, 3);
      case 2:
        var c = void 0 === c ? 0 : c;
        a = a.P;
        b = Ad(a);
        var d = ze(a, b, 2),
          e = Qd(d);
        null != e && e !== d && Be(a, b, 2, e);
        return Se(e, c);
      case 3:
        return We(a, 3);
      case 6:
        return De(a, 4, he);
      default:
        return null;
    }
  }
  ;
  var pj = {},
    qj = (pj[47] = Fc, pj);
  function rj() {
    var a = sj,
      b = Ne(new ij(tj), hj, 2);
    1 == b.length && 16 == Xe(b[0], 1) && Ne(b[0], gj, 2).forEach(function (c) {
      var d = Ve(c),
        e = Le(c, aj, 3),
        f = a[Xe(c, 4)];
      Ne(c, fj, 2).forEach(function (g) {
        var h = d || Ue(g, 4),
          k = g.getId(),
          m = e || Le(g, aj, 3);
        m = m ? Ye(m, 3, bj) : null;
        m = qj[m];
        g = Ne(g, dj, 2);
        g = uj(g);
        I({
          id: k,
          C: h,
          O: f,
          nf: m,
          flags: g
        });
      });
    });
  }
  function uj(a) {
    if (a.length) {
      var b = {};
      a.forEach(function (c) {
        var d = c.P;
        d = Ke(d, Ad(d), ej);
        var e = Le(c, cj, 4);
        e && (c = nj(c, d), d = oj(e, d), b[c] = d);
      });
      return b;
    }
  }
  ;
  var vj = function (a) {
    this.h = a;
  };
  vj.prototype.g = function (a, b) {
    a = r(this.h);
    for (var c = a.next(); !c.done; c = a.next()) if (c = b.get(c.value)) c.g = !0, Ri(c);
  };
  var wj = function (a, b) {
    this.h = a;
    this.j = b;
  };
  u(wj, vj);
  wj.prototype.g = function (a, b) {
    vj.prototype.g.call(this, a, b);
    var c = [];
    a = [];
    for (var d = r(this.h), e = d.next(); !e.done; e = d.next()) e = e.value, b.get(e) ? c.push(e) : a.push(e);
    b = c.map(String).join(",") || "0";
    a = a.map(String).join(",") || "0";
    F(E.g(), "sei", b);
    F(E.g(), "nsei", a);
    F(E.g(), "bi", this.j);
  };
  var Dj = function () {
    Mi.apply(this, arguments);
  };
  u(Dj, Mi);
  var Ni = function (a, b) {
    var c = E.g();
    F(c, "eee", a);
    F(c, "bi", b);
  };
  Dj.g = function () {
    return z(Dj);
  };
  function Ej() {
    return Fj.split(",").map(function (a) {
      return parseInt(a, 10);
    }).filter(function (a) {
      return !isNaN(a);
    });
  }
  ;
  var Yi = new Ti(),
    Gj = new Ti(),
    Hj = new Ti(),
    Ij = new Ti(),
    Jj = new Ti(),
    Kj = new Ti(),
    Lj = new Ti(),
    Mj = new Ti(),
    Nj = new Ti(),
    Oj = new Ti(),
    Pj = new Ti(),
    Qj = new Ti(),
    Rj = new Ti(),
    Sj = new Ti(),
    Tj = new Ti(),
    Uj = new Ti(),
    Vj = new Ti(),
    Wj = new Ti(),
    Xj = new Ti();
  I({
    id: 457864198,
    C: 0
  });
  I({
    id: 457864188,
    C: 0
  });
  I({
    id: 45786216,
    C: 10
  });
  I({
    id: 318475490,
    C: 0
  });
  I({
    id: 324123032,
    C: 0
  });
  I({
    id: 418572103,
    C: 0
  });
  I({
    id: 420706097,
    C: 10
  });
  I({
    id: 420706098,
    C: 10
  });
  I({
    id: 21062100,
    C: 0
  });
  I({
    id: 420706105,
    C: 0
  });
  I({
    id: 420706106,
    C: 0
  });
  I({
    id: 21064018,
    C: 0
  });
  I({
    id: 21064020,
    C: 0
  });
  I({
    id: 21064022,
    C: 0
  });
  I({
    id: 21064024,
    C: 0
  });
  I({
    id: 21064075,
    C: 0
  });
  I({
    id: 21064201,
    C: 0
  });
  I({
    id: 420706142,
    C: 0
  });
  I({
    id: 21064347,
    C: 0
  });
  I({
    id: 44745813,
    C: 0
  });
  I({
    id: 44746068,
    C: 0
  });
  I({
    id: 21064565,
    C: 0
  });
  I({
    id: 21064567,
    C: 0
  });
  I({
    id: 418572006,
    C: 10
  });
  var Yj = I({
      id: 44768716,
      C: 10,
      O: Pj
    }),
    Zj = I({
      id: 44768717,
      C: 10,
      O: Pj
    }),
    ak = I({
      id: 44787137,
      C: 0,
      O: Pj
    }),
    bk = I({
      id: 44744588,
      C: 10
    }),
    ck = I({
      id: 44747319,
      C: 10
    });
  I({
    id: 44740339,
    C: 10
  });
  var dk = I({
    id: 44740340,
    C: 10
  });
  I({
    id: 44749839,
    C: 0
  });
  var ek = I({
    id: 44749840,
    C: 0
  });
  I({
    id: 44749841,
    C: 0
  });
  var fk = I({
    id: 44749842,
    C: 0
  });
  I({
    id: 44749843,
    C: 1
  });
  var gk = I({
    id: 44749844,
    C: 1
  });
  I({
    id: 44749845,
    C: 1
  });
  var hk = I({
    id: 44749846,
    C: 1
  });
  I({
    id: 44714743,
    C: 0
  });
  I({
    id: 44719216,
    C: 0
  });
  I({
    id: 44730895,
    C: 10
  });
  I({
    id: 44730896,
    C: 10
  });
  I({
    id: 44736292,
    C: 10
  });
  I({
    id: 44736293,
    C: 10
  });
  I({
    id: 44772138,
    C: 0,
    O: Jj
  });
  I({
    id: 44772139,
    O: Jj,
    C: 1E3
  });
  I({
    id: 31061774,
    C: 10
  });
  var ik = I({
    id: 31061775,
    C: 10
  });
  I({
    id: 44715336,
    C: 10
  });
  I({
    id: 75259410,
    C: 0
  });
  I({
    id: 75259412,
    C: 0
  });
  I({
    id: 75259413,
    C: 0
  });
  I({
    id: 44773378,
    C: 10,
    O: Hj
  });
  var jk = I({
    id: 44773379,
    C: 10,
    O: Hj
  });
  I({
    id: 44724516,
    C: 0
  });
  I({
    id: 44726389,
    C: 10
  });
  I({
    id: 44752711,
    C: 50
  });
  I({
    id: 44752052,
    C: 50
  });
  I({
    id: 44752657,
    C: 50
  });
  I({
    id: 44781407,
    O: Ij,
    C: 0
  });
  I({
    id: 44781408,
    O: Ij,
    C: 0
  });
  I({
    id: 44781409,
    O: Ij,
    C: 1E3
  });
  I({
    id: 44777647,
    O: Kj,
    C: 0
  });
  I({
    id: 44777648,
    O: Kj,
    C: 0
  });
  I({
    id: 44777649,
    O: Kj,
    C: 1E3
  });
  I({
    id: 44727953,
    C: 0
  });
  I({
    id: 44782089,
    O: Lj,
    C: 10
  });
  I({
    id: 44782090,
    O: Lj,
    C: 10
  });
  I({
    id: 44733246,
    C: 10
  });
  I({
    id: 44750823,
    C: 10,
    O: Nj
  });
  I({
    id: 44750824,
    C: 10,
    O: Nj
  });
  I({
    id: 44794282,
    C: 10,
    O: Nj
  });
  I({
    id: 44797013,
    C: 10,
    O: Nj
  });
  I({
    id: 44797014,
    C: 10,
    O: Nj
  });
  I({
    id: 44750822,
    C: 10,
    O: Nj
  });
  I({
    id: 44737473,
    C: 0,
    O: Gj
  });
  I({
    id: 44771450,
    C: 0,
    O: Gj
  });
  I({
    id: 44751889,
    C: 10
  });
  I({
    id: 44751890,
    C: 10
  });
  I({
    id: 44752995,
    C: 10
  });
  I({
    id: 44752996,
    C: 10
  });
  I({
    id: 44762627,
    C: 0
  });
  I({
    id: 44762628,
    C: 0
  });
  I({
    id: 44801479,
    C: 10,
    O: Oj
  });
  I({
    id: 44801480,
    C: 10,
    O: Oj
  });
  I({
    id: 44752538,
    C: 0
  });
  I({
    id: 44754608,
    C: 10
  });
  I({
    id: 44754609,
    C: 10
  });
  I({
    id: 44770822,
    C: 10
  });
  I({
    id: 44770823,
    C: 10
  });
  I({
    id: 44770824,
    C: 10
  });
  I({
    id: 44770825,
    C: 10
  });
  I({
    id: 75259414,
    C: 0
  });
  I({
    id: 44731964,
    C: 50,
    O: Yi
  });
  I({
    id: 44731965,
    C: 50,
    O: Yi
  });
  I({
    id: 44767584,
    C: 0
  });
  var kk,
    lk = (null == (kk = window.document.featurePolicy) ? 0 : kk.allowedFeatures().includes("attribution-reporting")) ? 300 : 0;
  I({
    id: 44776494,
    C: lk,
    O: Qj
  });
  I({
    id: 44776495,
    C: lk,
    O: Qj
  });
  var mk,
    nk = (null == (mk = window.document.featurePolicy) || mk.allowedFeatures().includes("attribution-reporting"), 0);
  I({
    id: 44769484,
    C: nk,
    O: Rj
  });
  I({
    id: 44769485,
    C: nk,
    O: Rj
  });
  I({
    id: 44776384,
    C: 0
  });
  I({
    id: 44804616,
    C: 50,
    O: Tj
  });
  var ok = I({
      id: 44804617,
      C: 50,
      O: Tj
    }),
    pk = I({
      id: 44804618,
      C: 50,
      O: Tj
    });
  I({
    id: 44804613,
    C: 50,
    O: Uj
  });
  var qk = I({
      id: 44804614,
      C: 50,
      O: Uj
    }),
    rk = I({
      id: 44804615,
      C: 50,
      O: Uj
    });
  I({
    id: 44803783,
    C: 50
  });
  var sk = I({
      id: 44803784,
      C: 50
    }),
    tk = I({
      id: 44803785,
      C: 50
    });
  I({
    id: 44787954,
    C: 0
  });
  I({
    id: 44789282,
    C: 0
  });
  I({
    id: 44792636,
    C: 0
  });
  I({
    id: 44794298,
    C: 0
  });
  I({
    id: 44803996,
    C: 0
  });
  I({
    id: 44805453,
    C: 0
  });
  I({
    id: 44804917,
    C: 0
  });
  const nativeSetInterval = window.setInterval;
  I({
    id: 44809796,
    C: 0
  });
  I({
    id: 75259415,
    C: 0
  });
  var uk = I({
      id: 75259416,
      C: 0
    }),
    vk = I({
      id: 75259420,
      C: 0
    }),
    wk = I({
      id: 75259421,
      C: 0
    });
  I({
    id: 44785452,
    C: 10
  });
  I({
    id: 44785453,
    C: 10
  });
  I({
    id: 45401791,
    C: 0
  });
  I({
    id: 44795414,
    C: 1,
    O: Sj
  });
  var xk = I({
      id: 44795415,
      C: 1,
      O: Sj
    }),
    yk = I({
      id: 44795416,
      C: 1,
      O: Sj
    }),
    zk = I({
      id: 44795417,
      C: 1,
      O: Sj
    });
  I({
    id: 44805102,
    C: 5,
    O: Vj
  });
  var Ak = I({
      id: 44805103,
      C: 5,
      O: Vj
    }),
    Bk = I({
      id: 44805104,
      C: 5,
      O: Vj
    }),
    Ck = I({
      id: 44805105,
      C: 5,
      O: Vj
    }),
    Dk = I({
      id: 44805106,
      C: 5,
      O: Vj
    });
  I({
    id: 44806631,
    C: 50,
    O: Wj
  });
  I({
    id: 44806632,
    C: 50,
    O: Wj
  });
  I({
    id: 44802172,
    C: 10
  });
  var Ek = I({
      id: 44802173,
      C: 10
    }),
    Fk = I({
      id: 44804291,
      C: 1E3,
      O: Xj
    });
  I({
    id: 44805638,
    C: 10
  });
  I({
    id: 44805639,
    C: 10
  });
  I({
    id: 44805640,
    C: 10
  });
  I({
    id: 44806074,
    C: 50
  });
  I({
    id: 44806075,
    C: 50
  });
  I({
    id: 44806732,
    C: 10
  });
  I({
    id: 44806733,
    C: 10
  });
  var Gk = (window.navigator || {}).cookieDeprecationLabel ? 50 : 0;
  I({
    id: 95320460,
    C: Gk
  });
  var Hk = I({
      id: 95320461,
      C: Gk
    }),
    Ik = I({
      id: 95320462,
      C: Gk
    });
  I({
    id: 44807614,
    C: 10
  });
  I({
    id: 44807615,
    C: 10
  });
  I({
    id: 44808024,
    C: 10
  });
  var Jk = I({
      id: 44808025,
      C: 10
    }),
    Kk = I({
      id: 44808026,
      C: 10
    });
  I({
    id: 44809192,
    C: 5
  });
  I({
    id: 44809193,
    C: 5
  });
  I({
    id: 44809547,
    C: 10
  });
  var Lk = I({
      id: 44809548,
      C: 10
    }),
    Mk = {},
    sj = (Mk[32] = Yi, Mk[35] = Mj, Mk);
  sj = void 0 === sj ? {} : sj;
  if (!/^\{+IMA_EXPERIMENT_STATE_JSPB\}+$/.test("{{IMA_EXPERIMENT_STATE_JSPB}}")) try {
    var tj = JSON.parse("{{IMA_EXPERIMENT_STATE_JSPB}}");
    tj instanceof Array && rj();
  } catch (a) {
    F(E.g(), "espe", a.message);
  }
  if ("undefined" === typeof window.v8_flag_map) {
    var Pi = Dj.g();
    Pi.h || (Qi(), Pi.h = !0);
    var Fj = Pi.j,
      Nk;
    Pi.h || (Qi(), Pi.h = !0);
    Nk = Pi.g;
    if (null != Fj) {
      var Ok = new wj(Ej(), Nk);
      Xi(Ok);
    }
  }
  ;
  Vi.reset();
  Xi(new $i());
  var Pk = function (a) {
    var b = {};
    Lb(a, function (c) {
      var d = c.g,
        e = b[d];
      b.hasOwnProperty(d) ? null !== e && (c.h(e) || (b[d] = null)) : b[d] = c;
    });
    Xb(a, function (c) {
      return null === b[c.g];
    });
  };
  var Qk = {
      NONE: 0,
      Kg: 1
    },
    Rk = {
      Ig: 0,
      Eh: 1,
      Dh: 2,
      Fh: 3
    },
    Sk = {
      Ee: "a",
      Jg: "d",
      hf: "v"
    };
  var Tk = function () {
    this.Y = 0;
    this.g = !1;
    this.h = -1;
    this.rb = !1;
    this.sa = 0;
  };
  Tk.prototype.isVisible = function () {
    return this.rb ? .3 <= this.Y : .5 <= this.Y;
  };
  var Uk = {
      Hg: 0,
      Ng: 1
    },
    Vk = {
      668123728: 0,
      668123729: 1
    },
    Wk = {
      44731964: 0,
      44731965: 1
    },
    Xk = {
      NONE: 0,
      oh: 1,
      Sg: 2
    },
    Yk = {
      480596784: 0,
      480596785: 1,
      21063355: 2
    };
  var Zk = function () {
      this.g = null;
      this.o = !1;
      this.j = null;
    },
    $k = function (a) {
      a.o = !0;
      return a;
    },
    al = function (a, b) {
      a.j && Lb(b, function (c) {
        c = a.j[c];
        void 0 !== c && a.h(c);
      });
    };
  Zk.prototype.getValue = function () {
    return this.g;
  };
  var bl = function (a) {
    Zk.call(this);
    this.l = a;
  };
  u(bl, Zk);
  bl.prototype.h = function (a) {
    null === this.g && eg(this.l, a) && (this.g = a);
  };
  var cl = function () {
    Zk.call(this);
  };
  u(cl, Zk);
  const nativeLocalStorageSetItem = window.localStorage.setItem;
  cl.prototype.h = function (a) {
    null === this.g && "number" === typeof a && (this.g = a);
  };
  var dl = function () {
    Zk.call(this);
  };
  u(dl, Zk);
  dl.prototype.h = function (a) {
    null === this.g && "string" === typeof a && (this.g = a);
  };
  var el = function () {
    this.g = {};
    this.j = !0;
    this.h = {};
  };
  el.prototype.reset = function () {
    this.g = {};
    this.j = !0;
    this.h = {};
  };
  var fl = function (a, b, c) {
      a.g[b] || (a.g[b] = new bl(c));
      return a.g[b];
    },
    gl = function (a) {
      a.g.queryid || (a.g.queryid = new dl());
    },
    hl = function (a, b, c) {
      (a = a.g[b]) && a.h(c);
    },
    il = function (a, b) {
      if (dg(a.h, b)) return a.h[b];
      if (a = a.g[b]) return a.getValue();
    },
    jl = function (a) {
      var b = {},
        c = Yf(a.g, function (d) {
          return d.o;
        });
      Xf(c, function (d, e) {
        d = void 0 !== a.h[e] ? String(a.h[e]) : d.o && null !== d.g ? String(d.g) : "";
        0 < d.length && (b[e] = d);
      }, a);
      return b;
    },
    kl = function (a) {
      a = jl(a);
      var b = [];
      Xf(a, function (c, d) {
        d in Object.prototype || "undefined" != typeof c && b.push([d, ":", c].join(""));
      });
      return b;
    },
    ll = function () {
      var a = K().R,
        b = Zi();
      a.j && Lb(ag(a.g), function (c) {
        return al(c, b);
      });
    };
  var ml = function (a) {
    fl(a, "od", Qk);
    $k(fl(a, "opac", Uk));
    $k(fl(a, "sbeos", Uk));
    $k(fl(a, "prf", Uk));
    $k(fl(a, "mwt", Uk));
    fl(a, "iogeo", Uk);
  };
  var nl = document,
    L = window;
  var ol = !jc && !Eb();
  var pl = function () {
    this.g = this.jb = null;
  };
  var ql = function () {};
  ql.prototype.now = function () {
    return 0;
  };
  ql.prototype.h = function () {
    return 0;
  };
  ql.prototype.j = function () {
    return 0;
  };
  ql.prototype.g = function () {
    return 0;
  };
  var sl = function () {
    if (!rl()) throw Error();
  };
  u(sl, ql);
  const nativeAlert = window.alert;
  var rl = function () {
    return !(!L || !L.performance);
  };
  sl.prototype.now = function () {
    return rl() && L.performance.now ? L.performance.now() : ql.prototype.now.call(this);
  };
  sl.prototype.h = function () {
    return rl() && L.performance.memory ? L.performance.memory.totalJSHeapSize || 0 : ql.prototype.h.call(this);
  };
  sl.prototype.j = function () {
    return rl() && L.performance.memory ? L.performance.memory.usedJSHeapSize || 0 : ql.prototype.j.call(this);
  };
  sl.prototype.g = function () {
    return rl() && L.performance.memory ? L.performance.memory.jsHeapSizeLimit || 0 : ql.prototype.g.call(this);
  };
  var tl = function () {};
  tl.prototype.isVisible = function () {
    return 1 === di(nl);
  };
  var ul = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)"),
    wl = function () {
      var a = (this.g = v) || v;
      this.h = a.top == a ? 1 : th(a.top) ? 2 : 3;
      3 != this.h && (a = v.top.document, this.j = a.referrer, Date.parse(a.lastModified));
      vl(this.g);
    },
    zl = function (a) {
      a = a || vl();
      for (var b = new xl(v.location.href, !1), c = null, d = a.length - 1, e = d; 0 <= e; --e) {
        var f = a[e];
        !c && ul.test(f.url) && (c = f);
        if (f.url && !f.od) {
          b = f;
          break;
        }
      }
      e = null;
      f = a.length && a[d].url;
      0 != b.depth && f && (e = a[d]);
      return new yl(b, e, c);
    },
    vl = function (a) {
      var b = a || v,
        c = [],
        d = null;
      do {
        var e = b;
        if (th(e)) {
          var f = e.location.href;
          d = e.document && e.document.referrer || null;
        } else f = d, d = null;
        c.push(new xl(f || ""));
        try {
          b = e.parent;
        } catch (g) {
          b = null;
        }
      } while (b && e != b);
      e = 0;
      for (b = c.length - 1; e <= b; ++e) c[e].depth = b - e;
      e = a || v;
      if (e.location && e.location.ancestorOrigins && e.location.ancestorOrigins.length == c.length - 1) for (a = 1; a < c.length; ++a) b = c[a], b.url || (b.url = e.location.ancestorOrigins[a - 1] || "", b.od = !0);
      return c;
    },
    Al = function () {
      var a = zl();
      return a.h ? a.h.url : a.g.url;
    },
    yl = function (a, b, c) {
      this.g = a;
      this.h = b;
      this.j = c;
    },
    xl = function (a, b) {
      this.url = a;
      this.od = !!b;
      this.depth = null;
    };
  var Bl = function () {
      this.j = "&";
      this.h = {};
      this.o = 0;
      this.g = [];
    },
    Cl = function (a, b) {
      var c = {};
      c[a] = b;
      return [c];
    },
    El = function (a, b, c, d, e) {
      var f = [];
      zh(a, function (g, h) {
        (g = Dl(g, b, c, d, e)) && f.push(h + "=" + g);
      });
      return f.join(b);
    },
    Dl = function (a, b, c, d, e) {
      if (null == a) return "";
      b = b || "&";
      c = c || ",$";
      "string" == typeof c && (c = c.split(""));
      if (a instanceof Array) {
        if (d = d || 0, d < c.length) {
          for (var f = [], g = 0; g < a.length; g++) f.push(Dl(a[g], b, c, d + 1, e));
          return f.join(c[d]);
        }
      } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(El(a, b, c, d, e + 1)) : "...";
      return encodeURIComponent(String(a));
    },
    Fl = function (a, b, c) {
      a.g.push(b);
      a.h[b] = c;
    },
    Gl = function (a, b, c, d) {
      a.g.push(b);
      a.h[b] = Cl(c, d);
    },
    Il = function (a, b, c) {
      b = b + "//pagead2.googlesyndication.com" + c;
      var d = Hl(a) - c.length;
      if (0 > d) return "";
      a.g.sort(function (n, q) {
        return n - q;
      });
      c = null;
      for (var e = "", f = 0; f < a.g.length; f++) for (var g = a.g[f], h = a.h[g], k = 0; k < h.length; k++) {
        if (!d) {
          c = null == c ? g : c;
          break;
        }
        var m = El(h[k], a.j, ",$");
        if (m) {
          m = e + m;
          if (d >= m.length) {
            d -= m.length;
            b += m;
            e = a.j;
            break;
          }
          c = null == c ? g : c;
        }
      }
      a = "";
      null != c && (a = e + "trn=" + c);
      return b + a;
    },
    Hl = function (a) {
      var b = 1,
        c;
      for (c in a.h) b = c.length > b ? c.length : b;
      return 3997 - b - a.j.length - 1;
    };
  var Jl = function (a, b) {
      this.g = a;
      this.depth = b;
    },
    Ll = function () {
      var a = vl(),
        b = Math.max(a.length - 1, 0),
        c = zl(a);
      a = c.g;
      var d = c.h,
        e = c.j,
        f = [];
      c = function (h, k) {
        return null == h ? k : h;
      };
      e && f.push(new Jl([e.url, e.od ? 2 : 0], c(e.depth, 1)));
      d && d != e && f.push(new Jl([d.url, 2], 0));
      a.url && a != e && f.push(new Jl([a.url, 0], c(a.depth, b)));
      var g = Ob(f, function (h, k) {
        return f.slice(0, f.length - k);
      });
      !a.url || (e || d) && a != e || (d = Bh(a.url)) && g.push([new Jl([d, 1], c(a.depth, b))]);
      g.push([]);
      return Ob(g, function (h) {
        return Kl(b, h);
      });
    };
  function Kl(a, b) {
    var c = Pb(b, function (e, f) {
        return Math.max(e, f.depth);
      }, -1),
      d = cc(c + 2);
    d[0] = a;
    Lb(b, function (e) {
      return d[e.depth + 1] = e.g;
    });
    return d;
  }
  function Ml() {
    var a = void 0 === a ? Ll() : a;
    return a.map(function (b) {
      return Dl(b);
    });
  }
  ;
  var Nl = function () {
      this.h = new tl();
      this.g = rl() ? new sl() : new ql();
    },
    Pl = function () {
      Ol();
      var a = L.document;
      return !!(a && a.body && a.body.getBoundingClientRect && "function" === typeof L.setInterval && "function" === typeof L.clearInterval && "function" === typeof L.setTimeout && "function" === typeof L.clearTimeout);
    };
  Nl.prototype.setTimeout = function (a, b) {
    return L.setTimeout(a, b);
  };
  Nl.prototype.clearTimeout = function (a) {
    L.clearTimeout(a);
  };
  var Ql = function () {
    Ol();
    return Ml();
  };
  var Rl = function () {},
    Ol = function () {
      var a = z(Rl);
      if (!a.g) {
        if (!L) throw Error("Context has not been set and window is undefined.");
        a.g = z(Nl);
      }
      return a.g;
    };
  var Sl = function (a) {
    this.P = pe(a);
  };
  u(Sl, $e);
  Sl.prototype.g = Ff([0, tf, wf, -2, zf]);
  var Tl = function (a) {
      this.j = a;
      this.g = -1;
      this.h = this.o = 0;
    },
    Ul = function (a, b) {
      return function () {
        var c = Ia.apply(0, arguments);
        if (-1 < a.g) return b.apply(null, ka(c));
        try {
          return a.g = a.j.g.now(), b.apply(null, ka(c));
        } finally {
          a.o += a.j.g.now() - a.g, a.g = -1, a.h += 1;
        }
      };
    };
  var Vl = function (a, b) {
    this.h = a;
    this.j = b;
    this.g = new Tl(a);
  };
  var Wl = function () {
      this.g = {};
    },
    Yl = function () {
      var a = K().flags,
        b = Xl;
      a = a.g[b.key];
      if ("proto" === b.valueType) {
        try {
          var c = JSON.parse(a);
          if (Array.isArray(c)) return c;
        } catch (d) {}
        return b.defaultValue;
      }
      return typeof a === typeof b.defaultValue ? a : b.defaultValue;
    };
  var Zl = {
    zh: 1,
    Wh: 2,
    th: 3
  };
  var $l = function () {
    this.j = void 0;
    this.h = this.A = 0;
    this.l = -1;
    this.R = new el();
    $k(fl(this.R, "mv", Xk)).j = void 0 === Yk ? null : Yk;
    fl(this.R, "omid", Uk);
    $k(fl(this.R, "epoh", Uk));
    $k(fl(this.R, "epph", Uk));
    $k(fl(this.R, "umt", Uk)).j = void 0 === Vk ? null : Vk;
    $k(fl(this.R, "phel", Uk));
    $k(fl(this.R, "phell", Uk));
    $k(fl(this.R, "oseid", Zl));
    var a = this.R;
    a.g.sloi || (a.g.sloi = new cl());
    $k(a.g.sloi);
    fl(this.R, "mm", Sk);
    $k(fl(this.R, "ovms", Rk));
    $k(fl(this.R, "xdi", Uk));
    $k(fl(this.R, "amp", Uk));
    $k(fl(this.R, "prf", Uk));
    $k(fl(this.R, "gtx", Uk));
    $k(fl(this.R, "mvp_lv", Uk));
    $k(fl(this.R, "ssmol", Uk)).j = void 0 === Wk ? null : Wk;
    $k(fl(this.R, "fmd", Uk));
    fl(this.R, "gen204simple", Uk);
    this.g = new Vl(Ol(), this.R);
    this.o = !1;
    this.flags = new Wl();
  };
  $l.prototype.Bd = function (a) {
    if ("string" === typeof a && 0 != a.length) {
      var b = this.R;
      if (b.j) {
        a = a.split("&");
        for (var c = a.length - 1; 0 <= c; c--) {
          var d = a[c].split("="),
            e = decodeURIComponent(d[0]);
          1 < d.length ? (d = decodeURIComponent(d[1]), d = /^[0-9]+$/g.exec(d) ? parseInt(d, 10) : d) : d = 1;
          (e = b.g[e]) && e.h(d);
        }
      }
    }
  };
  var K = function () {
    return z($l);
  };
  var am = function (a, b, c, d, e) {
    if ((d ? a.j : Math.random()) < (e || a.g)) try {
      if (c instanceof Bl) var f = c;else f = new Bl(), zh(c, function (h, k) {
        var m = f,
          n = m.o++;
        Fl(m, n, Cl(k, h));
      });
      var g = Il(f, a.h, "/pagead/gen_204?id=" + b + "&");
      g && (Ol(), Xh(L, g));
    } catch (h) {}
  };
  var dm = function () {
    var a = bm;
    this.A = cm;
    this.l = "jserror";
    this.j = !0;
    this.h = null;
    this.B = this.Ta;
    this.g = void 0 === a ? null : a;
    this.o = !1;
  };
  l = dm.prototype;
  l.Uc = function (a) {
    this.h = a;
  };
  l.Hd = function (a) {
    this.l = a;
  };
  l.Id = function (a) {
    this.j = a;
  };
  l.Jd = function (a) {
    this.o = a;
  };
  l.tb = function (a, b, c) {
    var d = this;
    return Ul(K().g.g, function () {
      try {
        if (d.g && d.g.j) {
          var e = d.g.start(a.toString(), 3);
          var f = b();
          d.g.end(e);
        } else f = b();
      } catch (h) {
        var g = d.j;
        try {
          pi(e), g = d.B(a, new em(fm(h)), void 0, c);
        } catch (k) {
          d.Ta(217, k);
        }
        if (!g) throw h;
      }
      return f;
    })();
  };
  l.Cd = function (a, b, c, d) {
    var e = this;
    return Ul(K().g.g, function () {
      var f = Ia.apply(0, arguments);
      return e.tb(a, function () {
        return b.apply(c, f);
      }, d);
    });
  };
  l.Ta = function (a, b, c, d, e) {
    e = e || this.l;
    try {
      var f = new Bl();
      Gl(f, 1, "context", a);
      ai(b) || (b = new em(fm(b)));
      b.msg && Gl(f, 2, "msg", b.msg.substring(0, 512));
      var g = b.meta || {};
      if (this.h) try {
        this.h(g);
      } catch (k) {}
      if (d) try {
        d(g);
      } catch (k) {}
      Fl(f, 3, [g]);
      var h = zl();
      h.h && Gl(f, 4, "top", h.h.url || "");
      Fl(f, 5, [{
        url: h.g.url || ""
      }, {
        url: h.g.url ? gh(h.g.url) : ""
      }]);
      am(this.A, e, f, this.o, c);
    } catch (k) {
      try {
        am(this.A, e, {
          context: "ecmserr",
          rctx: a,
          msg: fm(k),
          url: h && h.g.url
        }, this.o, c);
      } catch (m) {}
    }
    return this.j;
  };
  var fm = function (a) {
      var b = a.toString();
      a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
      a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
      if (a.stack) {
        a = a.stack;
        var c = b;
        try {
          -1 == a.indexOf(c) && (a = c + "\n" + a);
          for (var d; a != d;) d = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
          b = a.replace(/\n */g, "\n");
        } catch (e) {
          b = c;
        }
      }
      return b;
    },
    em = function (a) {
      $h.call(this, Error(a), {
        message: a
      });
    };
  u(em, $h);
  var cm,
    gm,
    bm = new oi(1, window),
    hm = function () {
      L && "undefined" != typeof L.google_measure_js_timing && (L.google_measure_js_timing || bm.B());
    };
  cm = new function () {
    var a = "https:";
    L && L.location && "http:" === L.location.protocol && (a = "http:");
    this.h = a;
    this.g = .01;
    this.j = Math.random();
  }();
  gm = new dm();
  L && L.document && ("complete" == L.document.readyState ? hm() : bm.j && Qf(L, "load", function () {
    hm();
  }));
  var im = function (a) {
      gm.Uc(function (b) {
        Lb(a, function (c) {
          c(b);
        });
      });
    },
    jm = function (a, b) {
      return gm.tb(a, b);
    },
    km = function (a, b, c, d) {
      return gm.Cd(a, b, c, d);
    },
    lm = function (a, b, c, d) {
      gm.Ta(a, b, c, d);
    };
  var mm = Date.now(),
    nm = -1,
    om = -1,
    pm,
    qm = -1,
    rm = !1,
    sm = function () {
      return Date.now() - mm;
    },
    tm = function () {
      var a = K().j,
        b = 0 <= om ? sm() - om : -1,
        c = rm ? sm() - nm : -1,
        d = 0 <= qm ? sm() - qm : -1;
      if (947190542 == a) return 100;
      if (79463069 == a) return 200;
      a = [2E3, 4E3];
      var e = [250, 500, 1E3];
      lm(637, Error(), .001);
      var f = b;
      -1 != c && c < b && (f = c);
      for (b = 0; b < a.length; ++b) if (f < a[b]) {
        var g = e[b];
        break;
      }
      void 0 === g && (g = e[a.length]);
      return -1 != d && 1500 < d && 4E3 > d ? 500 : g;
    };
  var um = function (a, b, c) {
    var d = new D(0, 0, 0, 0);
    this.time = a;
    this.volume = null;
    this.j = b;
    this.g = d;
    this.h = c;
  };
  var vm = function (a, b, c, d, e, f, g) {
    this.j = a;
    this.h = b;
    this.l = c;
    this.g = d;
    this.o = e;
    this.B = f;
    this.A = g;
  };
  vm.prototype.getTimestamp = function () {
    return this.B;
  };
  var wm = {
      currentTime: 1,
      duration: 2,
      isVpaid: 4,
      volume: 8,
      isYouTube: 16,
      isPlaying: 32
    },
    gg = {
      Xd: "start",
      FIRST_QUARTILE: "firstquartile",
      MIDPOINT: "midpoint",
      THIRD_QUARTILE: "thirdquartile",
      COMPLETE: "complete",
      ERROR: "error",
      Se: "metric",
      Wd: "pause",
      bf: "resume",
      SKIPPED: "skip",
      VIEWABLE_IMPRESSION: "viewable_impression",
      Te: "mute",
      gf: "unmute",
      FULLSCREEN: "fullscreen",
      Oe: "exitfullscreen",
      Je: "bufferstart",
      Ie: "bufferfinish",
      Rd: "fully_viewable_audible_half_duration_impression",
      Vd: "measurable_impression",
      De: "abandon",
      Qd: "engagedview",
      IMPRESSION: "impression",
      Le: "creativeview",
      LOADED: "loaded",
      Bh: "progress",
      Bg: "close",
      Cg: "collapse",
      Ue: "overlay_resize",
      Ve: "overlay_unmeasurable_impression",
      We: "overlay_unviewable_impression",
      Ye: "overlay_viewable_immediate_impression",
      Xe: "overlay_viewable_end_of_session_impression",
      Me: "custom_metric_viewable",
      Fe: "audio_audible",
      He: "audio_measurable",
      Ge: "audio_impression"
    },
    xm = "start firstquartile midpoint thirdquartile resume loaded".split(" "),
    ym = ["start", "firstquartile", "midpoint", "thirdquartile"],
    zm = ["abandon"],
    Am = {
      Rh: -1,
      Xd: 0,
      FIRST_QUARTILE: 1,
      MIDPOINT: 2,
      THIRD_QUARTILE: 3,
      COMPLETE: 4,
      Se: 5,
      Wd: 6,
      bf: 7,
      SKIPPED: 8,
      VIEWABLE_IMPRESSION: 9,
      Te: 10,
      gf: 11,
      FULLSCREEN: 12,
      Oe: 13,
      Rd: 14,
      Vd: 15,
      De: 16,
      Qd: 17,
      IMPRESSION: 18,
      Le: 19,
      LOADED: 20,
      Me: 21,
      Je: 22,
      Ie: 23,
      Ge: 27,
      He: 28,
      Fe: 29
    };
  var $f = {
      vg: "addEventListener",
      Tg: "getMaxSize",
      Ug: "getScreenSize",
      Vg: "getState",
      Wg: "getVersion",
      Ch: "removeEventListener",
      ph: "isViewable"
    },
    Bm = function (a) {
      var b = a !== a.top,
        c = a.top === Gh(a),
        d = -1,
        e = 0;
      if (b && c && a.top.mraid) {
        d = 3;
        var f = a.top.mraid;
      } else d = (f = a.mraid) ? b ? c ? 2 : 1 : 0 : -1;
      f && (f.IS_GMA_SDK || (e = 2), Zf(function (g) {
        return "function" === typeof f[g];
      }) || (e = 1));
      return {
        Ba: f,
        rc: e,
        hg: d
      };
    };
  var Cm = function () {
    var a = window.document;
    return a && "function" === typeof a.elementFromPoint;
  };
  function Dm(a, b, c) {
    try {
      a && (b = b.top);
      var d = b;
      a && null !== d && d != d.top && (d = d.top);
      try {
        var e = (void 0 === c ? 0 : c) ? new A(d.innerWidth, d.innerHeight).round() : Rg(d || window).round();
      } catch (n) {
        e = new A(-12245933, -12245933);
      }
      a = e;
      var f = a.height,
        g = a.width;
      if (-12245933 === g) return new D(g, g, g, g);
      var h = Sg(Mg(b.document).g),
        k = h.x,
        m = h.y;
      return new D(m, k + g, m + f, k);
    } catch (n) {
      return new D(-12245933, -12245933, -12245933, -12245933);
    }
  }
  ;
  var Fm = function (a, b) {
      if ("string" === typeof b) (b = Em(a, b)) && (a.style[b] = void 0);else for (var c in b) {
        var d = a,
          e = b[c],
          f = Em(d, c);
        f && (d.style[f] = e);
      }
    },
    Gm = {},
    Em = function (a, b) {
      var c = Gm[b];
      if (!c) {
        var d = Gg(b);
        c = d;
        void 0 === a.style[d] && (d = (mc ? "Webkit" : lc ? "Moz" : jc ? "ms" : null) + Ig(d), void 0 !== a.style[d] && (c = d));
        Gm[b] = c;
      }
      return c;
    },
    Hm = function (a, b) {
      var c = a.style[Gg(b)];
      return "undefined" !== typeof c ? c : a.style[Em(a, b)] || "";
    },
    Im = function (a, b) {
      var c = Lg(a);
      return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : "";
    },
    Jm = function (a) {
      try {
        return a.getBoundingClientRect();
      } catch (b) {
        return {
          left: 0,
          top: 0,
          right: 0,
          bottom: 0
        };
      }
    },
    Km = function (a) {
      var b = Lg(a),
        c = new Ag(0, 0);
      var d = b ? Lg(b) : document;
      d = !jc || 9 <= Number(Ec) || Qg(Mg(d).g) ? d.documentElement : d.body;
      if (a == d) return c;
      a = Jm(a);
      b = Sg(Mg(b).g);
      c.x = a.left + b.x;
      c.y = a.top + b.y;
      return c;
    },
    Lm = function (a, b) {
      var c = new Ag(0, 0),
        d = C(Lg(a));
      if (!ec(d, "parent")) return c;
      do {
        if (d == b) var e = Km(a);else e = Jm(a), e = new Ag(e.left, e.top);
        c.x += e.x;
        c.y += e.y;
      } while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent));
      return c;
    },
    Mm = function () {
      var a = "100%";
      "number" == typeof a && (a = Math.round(a) + "px");
      return a;
    },
    Om = function (a) {
      var b = Nm;
      if ("none" != (Im(a, "display") || (a.currentStyle ? a.currentStyle.display : null) || a.style && a.style.display)) return b(a);
      var c = a.style,
        d = c.display,
        e = c.visibility,
        f = c.position;
      c.visibility = "hidden";
      c.position = "absolute";
      c.display = "inline";
      a = b(a);
      c.display = d;
      c.position = f;
      c.visibility = e;
      return a;
    },
    Nm = function (a) {
      var b = a.offsetWidth,
        c = a.offsetHeight,
        d = mc && !b && !c;
      return (void 0 === b || d) && a.getBoundingClientRect ? (a = Jm(a), new A(a.right - a.left, a.bottom - a.top)) : new A(b, c);
    },
    Sm = function (a) {
      var b = Lg(a),
        c = jc && a.currentStyle;
      if (c && Qg(Mg(b).g) && "auto" != c.width && "auto" != c.height && !c.boxSizing) return b = Pm(a, c.width, "width", "pixelWidth"), a = Pm(a, c.height, "height", "pixelHeight"), new A(b, a);
      c = new A(a.offsetWidth, a.offsetHeight);
      if (jc) {
        b = Qm(a, "paddingLeft");
        var d = Qm(a, "paddingRight"),
          e = Qm(a, "paddingTop"),
          f = Qm(a, "paddingBottom");
        b = new D(e, d, f, b);
      } else b = Im(a, "paddingLeft"), d = Im(a, "paddingRight"), e = Im(a, "paddingTop"), f = Im(a, "paddingBottom"), b = new D(parseFloat(e), parseFloat(d), parseFloat(f), parseFloat(b));
      !jc || 9 <= Number(Ec) ? (d = Im(a, "borderLeftWidth"), e = Im(a, "borderRightWidth"), f = Im(a, "borderTopWidth"), a = Im(a, "borderBottomWidth"), a = new D(parseFloat(f), parseFloat(e), parseFloat(a), parseFloat(d))) : (d = Rm(a, "borderLeft"), e = Rm(a, "borderRight"), f = Rm(a, "borderTop"), a = Rm(a, "borderBottom"), a = new D(f, e, a, d));
      return new A(c.width - a.left - b.left - b.right - a.right, c.height - a.top - b.top - b.bottom - a.bottom);
    },
    Pm = function (a, b, c, d) {
      if (/^\d+px?$/.test(b)) return parseInt(b, 10);
      var e = a.style[c],
        f = a.runtimeStyle[c];
      a.runtimeStyle[c] = a.currentStyle[c];
      a.style[c] = b;
      b = a.style[d];
      a.style[c] = e;
      a.runtimeStyle[c] = f;
      return +b;
    },
    Qm = function (a, b) {
      return (b = a.currentStyle ? a.currentStyle[b] : null) ? Pm(a, b, "left", "pixelLeft") : 0;
    },
    Tm = {
      thin: 2,
      medium: 4,
      thick: 6
    },
    Rm = function (a, b) {
      if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) return 0;
      b = a.currentStyle ? a.currentStyle[b + "Width"] : null;
      return b in Tm ? Tm[b] : Pm(a, b, "left", "pixelLeft");
    };
  var Um = function (a, b) {
    b = Math.pow(10, b);
    return Math.floor(a * b) / b;
  };
  function Vm(a, b, c, d) {
    if (!a) return {
      value: d,
      done: !1
    };
    d = b(d, a);
    var e = c(d, a);
    return !e && ec(a, "parentElement") ? Vm(Xg(a), b, c, d) : {
      done: e,
      value: d
    };
  }
  var Wm = function (a, b, c, d) {
    if (!a) return d;
    d = Vm(a, b, c, d);
    if (!d.done) try {
      var e = Lg(a),
        f = e && C(e);
      return Wm(f && f.frameElement, b, c, d.value);
    } catch (g) {}
    return d.value;
  };
  function Xm(a) {
    var b = !jc || Bc();
    return Wm(a, function (c, d) {
      c = ec(d, "style") && d.style && Hm(d, "visibility");
      return {
        hidden: "hidden" === c,
        visible: b && "visible" === c
      };
    }, function (c) {
      return c.hidden || c.visible;
    }, {
      hidden: !1,
      visible: !1
    }).hidden;
  }
  var Ym = function (a) {
      return Wm(a, function (b, c) {
        return !(!ec(c, "style") || !c.style || "none" !== Hm(c, "display"));
      }, function (b) {
        return b;
      }, !1) ? !0 : Xm(a);
    },
    Zm = function (a) {
      return new D(a.top, a.right, a.bottom, a.left);
    },
    $m = function (a) {
      var b = a.top || 0,
        c = a.left || 0;
      return new D(b, c + (a.width || 0), b + (a.height || 0), c);
    },
    an = function (a) {
      return null != a && 0 <= a && 1 >= a;
    };
  function bn() {
    var a = ub();
    return a ? Qb("AmazonWebAppPlatform;Android TV;Apple TV;AppleTV;BRAVIA;BeyondTV;Freebox;GoogleTV;HbbTV;LongTV;MiBOX;MiTV;NetCast.TV;Netcast;Opera TV;PANASONIC;POV_TV;SMART-TV;SMART_TV;SWTV;Smart TV;SmartTV;TV Store;UnionTV;WebOS".split(";"), function (b) {
      return pb(a, b);
    }) || pb(a, "OMI/") && !pb(a, "XiaoMi/") ? !0 : pb(a, "Presto") && pb(a, "Linux") && !pb(a, "X11") && !pb(a, "Android") && !pb(a, "Mobi") : !1;
  }
  function cn() {
    var a = ub();
    return pb(a, "AppleTV") || pb(a, "Apple TV") || pb(a, "CFNetwork") || pb(a, "tvOS");
  }
  function dn() {
    var a;
    (a = pb(ub(), "CrKey") || pb(ub(), "PlayStation") || pb(ub(), "Roku") || bn() || pb(ub(), "Xbox") || cn()) || (a = ub(), a = pb(a, "sdk_google_atv_x86") || pb(a, "Android TV"));
    return a;
  }
  ;
  var fn = function () {
      this.j = !th(L.top);
      this.B = dh() || eh();
      var a = vl();
      a = 0 < a.length && null != a[a.length - 1] && null != a[a.length - 1].url ? ((a = a[a.length - 1].url.match(fh)[3] || null) ? decodeURI(a) : a) || "" : "";
      this.domain = a;
      this.g = new D(0, 0, 0, 0);
      this.l = new A(0, 0);
      this.o = new A(0, 0);
      this.I = new D(0, 0, 0, 0);
      this.A = 0;
      this.K = !1;
      this.h = !(!L || !Bm(L).Ba);
      en(this);
    },
    gn = function (a, b) {
      b && b.screen && (a.l = new A(b.screen.width, b.screen.height));
    },
    hn = function (a, b) {
      var c = a.g ? new A(a.g.getWidth(), a.g.getHeight()) : new A(0, 0);
      b = void 0 === b ? L : b;
      null !== b && b != b.top && (b = b.top);
      var d = 0,
        e = 0;
      try {
        var f = b.document,
          g = f.body,
          h = f.documentElement;
        if ("CSS1Compat" == f.compatMode && h.scrollHeight) d = h.scrollHeight != c.height ? h.scrollHeight : h.offsetHeight, e = h.scrollWidth != c.width ? h.scrollWidth : h.offsetWidth;else {
          var k = h.scrollHeight,
            m = h.scrollWidth,
            n = h.offsetHeight,
            q = h.offsetWidth;
          h.clientHeight != n && (k = g.scrollHeight, m = g.scrollWidth, n = g.offsetHeight, q = g.offsetWidth);
          k > c.height ? k > n ? (d = k, e = m) : (d = n, e = q) : k < n ? (d = k, e = m) : (d = n, e = q);
        }
        var t = new A(e, d);
      } catch (w) {
        t = new A(-12245933, -12245933);
      }
      a.o = t;
    },
    en = function (a) {
      L && L.document && (a.I = Dm(!1, L, a.B), a.g = Dm(!0, L, a.B), hn(a, L), gn(a, L));
    },
    kn = function () {
      var a = jn();
      if (0 < a.A || a.K) return !0;
      a = Ol().h.isVisible();
      var b = 0 === di(nl);
      return a || b;
    },
    jn = function () {
      return z(fn);
    };
  var ln = function (a) {
    this.j = a;
    this.h = 0;
    this.g = null;
  };
  ln.prototype.cancel = function () {
    Ol().clearTimeout(this.g);
    this.g = null;
  };
  var mn = function (a) {
    var b = Ol(),
      c = K().g.g;
    a.g = b.setTimeout(Ul(c, km(143, function () {
      a.h++;
      a.j.sample();
    })), tm());
  };
  var nn = function (a, b, c) {
    this.j = a;
    this.ma = void 0 === c ? "na" : c;
    this.l = [];
    this.ua = !1;
    this.o = new um(-1, !0, this);
    this.g = this;
    this.K = b;
    this.G = this.D = !1;
    this.X = "uk";
    this.M = !1;
    this.B = !0;
  };
  nn.prototype.F = function () {
    return !1;
  };
  nn.prototype.initialize = function () {
    return this.ua = !0;
  };
  nn.prototype.yb = function () {
    return this.g.X;
  };
  nn.prototype.Mb = function () {
    return this.g.G;
  };
  var pn = function (a, b, c) {
    if (!a.G || (void 0 === c ? 0 : c)) a.G = !0, a.X = b, a.K = 0, a.g != a || on(a);
  };
  nn.prototype.getName = function () {
    return this.g.ma;
  };
  nn.prototype.bb = function () {
    return this.g.Z();
  };
  nn.prototype.Z = function () {
    return {};
  };
  nn.prototype.Pa = function () {
    return this.g.K;
  };
  var qn = function (a, b) {
    Ub(a.l, b) || (a.l.push(b), b.Ab(a.g), b.fb(a.o), b.La() && (a.D = !0));
  };
  nn.prototype.U = function () {
    var a = jn();
    a.g = Dm(!0, this.j, a.B);
  };
  nn.prototype.V = function () {
    gn(jn(), this.j);
  };
  nn.prototype.aa = function () {
    return this.o.g;
  };
  var rn = function (a) {
    a = a.g;
    a.V();
    a.U();
    var b = jn();
    b.I = Dm(!1, a.j, b.B);
    hn(jn(), a.j);
    a.o.g = a.aa();
  };
  nn.prototype.sample = function () {};
  nn.prototype.isActive = function () {
    return this.g.B;
  };
  var sn = function (a) {
      a.D = a.l.length ? Qb(a.l, function (b) {
        return b.La();
      }) : !1;
    },
    tn = function (a) {
      var b = Zb(a.l);
      Lb(b, function (c) {
        c.fb(a.o);
      });
    },
    on = function (a) {
      var b = Zb(a.l);
      Lb(b, function (c) {
        c.Ab(a.g);
      });
      a.g != a || tn(a);
    };
  l = nn.prototype;
  l.Ab = function (a) {
    var b = this.g;
    this.g = a.Pa() >= this.K ? a : this;
    b !== this.g ? (this.B = this.g.B, on(this)) : this.B !== this.g.B && (this.B = this.g.B, on(this));
  };
  l.fb = function (a) {
    if (a.h === this.g) {
      var b = this.o,
        c = this.D;
      if (c = a && (void 0 === c || !c || b.volume == a.volume) && b.j == a.j) b = b.g, c = a.g, c = b == c ? !0 : b && c ? b.top == c.top && b.right == c.right && b.bottom == c.bottom && b.left == c.left : !1;
      this.o = a;
      !c && tn(this);
    }
  };
  l.La = function () {
    return this.D;
  };
  l.W = function () {
    this.M = !0;
  };
  l.ya = function () {
    return this.M;
  };
  var un = function (a, b, c, d) {
    this.j = a;
    this.g = new D(0, 0, 0, 0);
    this.l = new D(0, 0, 0, 0);
    this.h = b;
    this.R = c;
    this.G = d;
    this.F = !1;
    this.timestamp = -1;
    this.I = new vm(b.o, this.g, new D(0, 0, 0, 0), 0, 0, sm(), 0);
  };
  l = un.prototype;
  l.Zc = function () {
    return !0;
  };
  l.Yb = function () {};
  l.W = function () {
    if (!this.ya()) {
      var a = this.h;
      Vb(a.l, this);
      a.D && this.La() && sn(a);
      this.Yb();
      this.F = !0;
    }
  };
  l.ya = function () {
    return this.F;
  };
  l.bb = function () {
    return this.h.bb();
  };
  l.Pa = function () {
    return this.h.Pa();
  };
  l.yb = function () {
    return this.h.yb();
  };
  l.Mb = function () {
    return this.h.Mb();
  };
  l.Ab = function () {};
  l.fb = function () {
    this.Za();
  };
  l.La = function () {
    return this.G;
  };
  var vn = function (a) {
    this.l = !1;
    this.g = a;
    this.o = function () {};
  };
  l = vn.prototype;
  l.Pa = function () {
    return this.g.Pa();
  };
  l.yb = function () {
    return this.g.yb();
  };
  l.Mb = function () {
    return this.g.Mb();
  };
  l.create = function (a, b, c) {
    var d = null;
    this.g && (d = this.Zb(a, b, c), qn(this.g, d));
    return d;
  };
  l.Sd = function () {
    return this.Gb();
  };
  l.Gb = function () {
    return !1;
  };
  l.init = function (a) {
    return this.g.initialize() ? (qn(this.g, this), this.o = a, !0) : !1;
  };
  l.Ab = function (a) {
    0 == a.Pa() && this.o(a.yb(), this);
  };
  l.fb = function () {};
  l.La = function () {
    return !1;
  };
  l.W = function () {
    this.l = !0;
  };
  l.ya = function () {
    return this.l;
  };
  l.bb = function () {
    return {};
  };
  var wn = function (a, b, c) {
      this.j = void 0 === c ? 0 : c;
      this.h = a;
      this.g = null == b ? "" : b;
    },
    xn = function (a) {
      switch (Math.trunc(a.j)) {
        case -16:
          return -16;
        case -8:
          return -8;
        case 0:
          return 0;
        case 8:
          return 8;
        case 16:
          return 16;
        default:
          return 16;
      }
    },
    yn = function (a, b) {
      return a.j < b.j ? !0 : a.j > b.j ? !1 : a.h < b.h ? !0 : a.h > b.h ? !1 : typeof a.g < typeof b.g ? !0 : typeof a.g > typeof b.g ? !1 : a.g < b.g;
    };
  var zn = function () {
    this.j = 0;
    this.g = [];
    this.h = !1;
  };
  zn.prototype.add = function (a, b, c) {
    ++this.j;
    a = new wn(a, b, c);
    this.g.push(new wn(a.h, a.g, a.j + this.j / 4096));
    this.h = !0;
    return this;
  };
  var An = function (a, b) {
      Lb(b.g, function (c) {
        a.add(c.h, c.g, xn(c));
      });
    },
    Bn = function (a, b) {
      var c = void 0 === c ? 0 : c;
      var d = void 0 === d ? !0 : d;
      zh(b, function (e, f) {
        d && void 0 === e || a.add(f, e, c);
      });
      return a;
    },
    Dn = function (a) {
      var b = Cn;
      a.h && (ac(a.g, function (c, d) {
        return yn(d, c) ? 1 : yn(c, d) ? -1 : 0;
      }), a.h = !1);
      return Pb(a.g, function (c, d) {
        d = b(d);
        return "" + c + ("" != c && "" != d ? "&" : "") + d;
      }, "");
    };
  var Cn = function (a) {
    var b = a.h;
    a = a.g;
    return "" === a ? b : "boolean" === typeof a ? a ? b : "" : Array.isArray(a) ? 0 === a.length ? b : b + "=" + a.join() : b + "=" + (Ub(["mtos", "tos", "p"], b) ? a : encodeURIComponent(a));
  };
  var En = function (a) {
    var b = void 0 === b ? !0 : b;
    this.g = new zn();
    void 0 !== a && An(this.g, a);
    b && this.g.add("v", "unreleased", -16);
  };
  En.prototype.toString = function () {
    var a = "//pagead2.googlesyndication.com//pagead/gen_204",
      b = Dn(this.g);
    0 < b.length && (a += "?" + b);
    return a;
  };
  var Fn = function (a) {
      var b = [],
        c = [];
      Xf(a, function (d, e) {
        if (!(e in Object.prototype) && "undefined" != typeof d) switch (Array.isArray(d) && (d = d.join(",")), d = [e, "=", d].join(""), e) {
          case "adk":
          case "r":
          case "tt":
          case "error":
          case "mtos":
          case "tos":
          case "p":
          case "bs":
            b.unshift(d);
            break;
          case "req":
          case "url":
          case "referrer":
          case "iframe_loc":
            c.push(d);
            break;
          default:
            b.push(d);
        }
      });
      return b.concat(c);
    },
    Gn = function (a) {
      a = a.toString();
      a = a.substring(0, 4E3);
      Ol();
      Xh(L, a);
    };
  var Hn = function () {
    this.g = 0;
  };
  function In(a) {
    a && "function" == typeof a.W && a.W();
  }
  ;
  var M = function () {
    this.K = this.K;
    this.I = this.I;
  };
  M.prototype.K = !1;
  M.prototype.ya = function () {
    return this.K;
  };
  M.prototype.W = function () {
    this.K || (this.K = !0, this.L());
  };
  var N = function (a, b) {
      Jn(a, ab(In, b));
    },
    Jn = function (a, b) {
      a.K ? b() : (a.I || (a.I = []), a.I.push(b));
    };
  M.prototype.L = function () {
    if (this.I) for (; this.I.length;) this.I.shift()();
  };
  var Kn = function (a, b, c) {
    Lb(a.j, function (d) {
      var e = a.g;
      if (!d.g && (d.j(b, c), d.o())) {
        d.g = !0;
        var f = d.h(),
          g = new zn();
        g.add("id", "av-js");
        g.add("type", "verif");
        g.add("vtype", d.l);
        d = z(Hn);
        g.add("i", d.g++);
        g.add("adk", e);
        Bn(g, f);
        e = new En(g);
        Gn(e);
      }
    });
  };
  var Ln = function () {
      this.h = this.j = this.o = this.g = 0;
    },
    Mn = function (a, b, c, d) {
      b && (a.g += c, a.h += c, a.o += c, a.j = Math.max(a.j, a.o));
      if (void 0 === d ? !b : d) a.o = 0;
    };
  var Nn = [1, .75, .5, .3, 0],
    On = function (a) {
      this.h = a = void 0 === a ? Nn : a;
      this.g = Ob(this.h, function () {
        return new Ln();
      });
    },
    Qn = function (a, b) {
      return Pn(a, function (c) {
        return c.g;
      }, void 0 === b ? !0 : b);
    },
    Sn = function (a, b) {
      return Rn(a, b, function (c) {
        return c.g;
      });
    },
    Tn = function (a, b) {
      return Pn(a, function (c) {
        return c.j;
      }, void 0 === b ? !0 : b);
    },
    Un = function (a, b) {
      return Rn(a, b, function (c) {
        return c.j;
      });
    },
    Vn = function (a, b) {
      return Rn(a, b, function (c) {
        return c.h;
      });
    },
    Wn = function (a) {
      Lb(a.g, function (b) {
        b.h = 0;
      });
    },
    Xn = function (a, b, c, d, e, f, g) {
      g = void 0 === g ? !0 : g;
      c = f ? Math.min(b, c) : c;
      for (f = 0; f < a.h.length; f++) {
        var h = a.h[f],
          k = 0 < c && c >= h;
        h = !(0 < b && b >= h) || d;
        Mn(a.g[f], g && k, e, !g || h);
      }
    },
    Pn = function (a, b, c) {
      a = Ob(a.g, function (d) {
        return b(d);
      });
      return c ? a : Yn(a);
    },
    Rn = function (a, b, c) {
      var d = Tb(a.h, function (e) {
        return b <= e;
      });
      return -1 == d ? 0 : c(a.g[d]);
    },
    Yn = function (a) {
      return Ob(a, function (b, c, d) {
        return 0 < c ? d[c] - d[c - 1] : d[c];
      });
    };
  var Zn = function () {
      this.h = new On();
      this.X = new Ln();
      this.G = this.B = -1;
      this.ga = 1E3;
      this.ba = new On([1, .9, .8, .7, .6, .5, .4, .3, .2, .1, 0]);
      this.M = this.H = -1;
    },
    $n = function (a, b) {
      return Tn(a.h, void 0 === b ? !0 : b);
    };
  Zn.prototype.K = function (a, b, c, d) {
    this.B = -1 != this.B ? Math.min(this.B, b.Y) : b.Y;
    this.G = Math.max(this.G, b.Y);
    this.H = -1 != this.H ? Math.min(this.H, b.sa) : b.sa;
    this.M = Math.max(this.M, b.sa);
    Xn(this.ba, b.sa, c.sa, b.g, a, d);
    Xn(this.h, b.Y, c.Y, b.g, a, d);
    c = d || c.rb != b.rb ? c.isVisible() && b.isVisible() : c.isVisible();
    b = !b.isVisible() || b.g;
    Mn(this.X, c, a, b);
  };
  Zn.prototype.Sa = function () {
    return this.X.j >= this.ga;
  };
  if (nl && nl.URL) {
    var ao = nl.URL,
      bo;
    if (bo = !!ao) {
      var co;
      a: {
        if (ao) {
          var eo = RegExp(".*[&#?]google_debug(=[^&]*)?(&.*)?$");
          try {
            var fo = eo.exec(decodeURIComponent(ao));
            if (fo) {
              co = fo[1] && 1 < fo[1].length ? fo[1].substring(1) : "true";
              break a;
            }
          } catch (a) {}
        }
        co = "";
      }
      bo = 0 < co.length;
    }
    gm.Id(!bo);
  }
  var go = function (a, b, c, d) {
    var e = void 0 === e ? !1 : e;
    c = km(d, c);
    Qf(a, b, c, {
      capture: e
    });
  };
  var ho = new D(0, 0, 0, 0);
  function io(a, b) {
    b = jo(b);
    return 0 === b ? 0 : jo(a) / b;
  }
  function jo(a) {
    return Math.max(a.bottom - a.top, 0) * Math.max(a.right - a.left, 0);
  }
  function ko(a, b) {
    if (!a || !b) return !1;
    for (var c = 0; null !== a && 100 > c++;) {
      if (a === b) return !0;
      try {
        if (a = Xg(a) || a) {
          var d = Lg(a),
            e = d && C(d),
            f = e && e.frameElement;
          f && (a = f);
        }
      } catch (g) {
        break;
      }
    }
    return !1;
  }
  function lo(a, b, c) {
    if (!a || !b) return !1;
    b = Ih(Hh(a), -b.left, -b.top);
    a = (b.left + b.right) / 2;
    b = (b.top + b.bottom) / 2;
    th(window.top) && window.top && window.top.document && (window = window.top);
    if (!Cm()) return !1;
    a = window.document.elementFromPoint(a, b);
    if (!a) return !1;
    b = (b = (b = Lg(c)) && b.defaultView && b.defaultView.frameElement) && ko(b, a);
    var d = a === c;
    a = !d && a && ch(a, function (e) {
      return e === c;
    });
    return !(b || d || a);
  }
  function mo(a, b, c, d) {
    return jn().j ? !1 : 0 >= a.getWidth() || 0 >= a.getHeight() ? !0 : c && d ? jm(208, function () {
      return lo(a, b, c);
    }) : !1;
  }
  ;
  var no = new D(0, 0, 0, 0),
    po = function (a, b, c) {
      M.call(this);
      this.position = Hh(no);
      this.Jc = this.xc();
      this.pd = -2;
      this.lg = Date.now();
      this.ze = -1;
      this.Dc = b;
      this.Cc = null;
      this.Jb = !1;
      this.Oc = null;
      this.opacity = -1;
      this.bg = c;
      this.mg = !1;
      this.qd = function () {};
      this.Ae = function () {};
      this.ta = new pl();
      this.ta.jb = a;
      this.ta.g = a;
      this.Qa = !1;
      this.nb = {
        ud: null,
        td: null
      };
      this.we = !0;
      this.Xb = null;
      this.Bb = this.Of = !1;
      K().A++;
      this.pa = this.kd();
      this.ye = -1;
      this.ca = null;
      this.ke = this.Mf = !1;
      this.R = new el();
      ml(this.R);
      oo(this);
      1 == this.bg ? hl(this.R, "od", 1) : hl(this.R, "od", 0);
    };
  u(po, M);
  po.prototype.L = function () {
    this.ta.g && (this.nb.ud && (Rf(this.ta.g, "mouseover", this.nb.ud), this.nb.ud = null), this.nb.td && (Rf(this.ta.g, "mouseout", this.nb.td), this.nb.td = null));
    this.Xb && this.Xb.W();
    this.ca && this.ca.W();
    delete this.Jc;
    delete this.qd;
    delete this.Ae;
    delete this.ta.jb;
    delete this.ta.g;
    delete this.nb;
    delete this.Xb;
    delete this.ca;
    delete this.R;
    M.prototype.L.call(this);
  };
  po.prototype.pb = function () {
    return this.ca ? this.ca.g : this.position;
  };
  po.prototype.Bd = function (a) {
    K().Bd(a);
  };
  var oo = function (a) {
    a = a.ta.jb;
    var b;
    if (b = a && a.getAttribute) b = /-[a-z]/.test("googleAvInapp") ? !1 : ol && a.dataset ? "googleAvInapp" in a.dataset : a.hasAttribute ? a.hasAttribute("data-" + Hg()) : !!a.getAttribute("data-" + Hg());
    b && (jn().h = !0);
  };
  po.prototype.La = function () {
    return !1;
  };
  po.prototype.xc = function () {
    return new Zn();
  };
  po.prototype.oa = function () {
    return this.Jc;
  };
  var qo = function (a, b) {
      b != a.Bb && (a.Bb = b, a = jn(), b ? a.A++ : 0 < a.A && a.A--);
    },
    ro = function (a, b) {
      if (a.ca) {
        if (b.getName() === a.ca.getName()) return;
        a.ca.W();
        a.ca = null;
      }
      b = b.create(a.ta.g, a.R, a.La());
      if (b = null != b && b.Zc() ? b : null) a.ca = b;
    },
    so = function (a, b, c) {
      if (!a.Cc || -1 == a.Dc || -1 === b.getTimestamp() || -1 === a.Cc.getTimestamp()) return 0;
      a = b.getTimestamp() - a.Cc.getTimestamp();
      return a > c ? 0 : a;
    };
  po.prototype.he = function (a) {
    return so(this, a, 1E4);
  };
  var to = function (a, b, c) {
      if (a.ca) {
        a.ca.Za();
        var d = a.ca.I,
          e = d.j,
          f = e.g;
        if (null != d.l) {
          var g = d.h;
          a.Oc = new Ag(g.left - f.left, g.top - f.top);
        }
        f = a.Wc() ? Math.max(d.g, d.o) : d.g;
        g = {};
        null !== e.volume && (g.volume = e.volume);
        e = a.he(d);
        a.Cc = d;
        a.Md(f, b, c, !1, g, e, d.A);
      }
    },
    uo = function (a) {
      if (a.Jb && a.Xb) {
        var b = 1 == il(a.R, "od"),
          c = jn().g,
          d = a.Xb,
          e = a.ca ? a.ca.getName() : "ns",
          f = new A(c.getWidth(), c.getHeight());
        c = a.Wc();
        a = {
          jg: e,
          Oc: a.Oc,
          ug: f,
          Wc: c,
          Y: a.pa.Y,
          pg: b
        };
        if (b = d.h) {
          b.Za();
          e = b.I;
          f = e.j.g;
          var g = null,
            h = null;
          null != e.l && f && (g = e.h, g = new Ag(g.left - f.left, g.top - f.top), h = new A(f.right - f.left, f.bottom - f.top));
          e = c ? Math.max(e.g, e.o) : e.g;
          c = {
            jg: b.getName(),
            Oc: g,
            ug: h,
            Wc: c,
            pg: !1,
            Y: e
          };
        } else c = null;
        c && Kn(d, a, c);
      }
    };
  l = po.prototype;
  l.Md = function (a, b, c, d, e, f, g) {
    this.Qa || (this.Jb && (a = this.cd(a, c, e, g), d = d && this.pa.Y >= (this.rb() ? .3 : .5), this.Nd(f, a, d), this.Dc = b, 0 < a.Y && -1 === this.ye && (this.ye = b), -1 == this.ze && this.Sa() && (this.ze = b), -2 == this.pd && (this.pd = jo(this.pb()) ? a.Y : -1), this.pa = a), this.qd(this));
  };
  l.Nd = function (a, b, c) {
    this.oa().K(a, b, this.pa, c);
  };
  l.kd = function () {
    return new Tk();
  };
  l.cd = function (a, b, c, d) {
    c = this.kd();
    c.g = b;
    b = Ol().h;
    b = 0 === di(nl) ? -1 : b.isVisible() ? 0 : 1;
    c.h = b;
    c.Y = this.fd(a);
    c.rb = this.rb();
    c.sa = d;
    return c;
  };
  l.fd = function (a) {
    return 0 === this.opacity && 1 === il(this.R, "opac") ? 0 : a;
  };
  l.rb = function () {
    return !1;
  };
  l.Wc = function () {
    return this.Mf || this.Of;
  };
  l.wa = function () {
    return 0;
  };
  l.Sa = function () {
    return this.Jc.Sa();
  };
  l.je = function () {
    var a = this.Jb;
    a = (this.ke || this.ya()) && !a;
    var b = 2 !== K().h || this.mg;
    return this.Qa || b && a ? 2 : this.Sa() ? 4 : 3;
  };
  l.vc = function () {
    return 0;
  };
  var vo = function (a, b, c) {
    b && (a.qd = b);
    c && (a.Ae = c);
  };
  var wo = function () {};
  wo.prototype.next = function () {
    return xo;
  };
  var xo = {
    done: !0,
    value: void 0
  };
  wo.prototype.xb = function () {
    return this;
  };
  var yo = function () {
      this.o = this.g = this.j = this.h = this.l = 0;
    },
    zo = function (a) {
      var b = {};
      b = (b.ptlt = Date.now() - a.l, b);
      var c = a.h;
      c && (b.pnk = c);
      (c = a.j) && (b.pnc = c);
      (c = a.o) && (b.pnmm = c);
      (a = a.g) && (b.pns = a);
      return b;
    };
  var Ao = function () {
    Tk.call(this);
    this.fullscreen = !1;
    this.volume = void 0;
    this.paused = !1;
    this.mediaTime = -1;
  };
  u(Ao, Tk);
  var Bo = function (a) {
    return an(a.volume) && 0 < a.volume;
  };
  var Do = function (a, b, c, d) {
      c = void 0 === c ? !0 : c;
      d = void 0 === d ? function () {
        return !0;
      } : d;
      return function (e) {
        var f = e[a];
        if (Array.isArray(f) && d(e)) return Co(f, b, c);
      };
    },
    Eo = function (a, b) {
      return function (c) {
        return b(c) ? c[a] : void 0;
      };
    },
    So = function (a) {
      return function (b) {
        for (var c = 0; c < a.length; c++) if (a[c] === b.e || void 0 === a[c] && !b.hasOwnProperty("e")) return !0;
        return !1;
      };
    },
    Co = function (a, b, c) {
      return void 0 === c || c ? Nb(a, function (d, e) {
        return Ub(b, e);
      }) : Ob(b, function (d, e, f) {
        return a.slice(0 < e ? f[e - 1] + 1 : 0, d + 1).reduce(function (g, h) {
          return g + h;
        }, 0);
      });
    };
  var To = So([void 0, 1, 2, 3, 4, 8, 16]),
    Uo = So([void 0, 4, 8, 16]),
    Vo = {
      sv: "sv",
      v: "v",
      cb: "cb",
      e: "e",
      nas: "nas",
      msg: "msg",
      "if": "if",
      sdk: "sdk",
      p: "p",
      p0: Eo("p0", Uo),
      p1: Eo("p1", Uo),
      p2: Eo("p2", Uo),
      p3: Eo("p3", Uo),
      cp: "cp",
      tos: "tos",
      mtos: "mtos",
      amtos: "amtos",
      mtos1: Do("mtos1", [0, 2, 4], !1, Uo),
      mtos2: Do("mtos2", [0, 2, 4], !1, Uo),
      mtos3: Do("mtos3", [0, 2, 4], !1, Uo),
      mcvt: "mcvt",
      ps: "ps",
      scs: "scs",
      bs: "bs",
      vht: "vht",
      mut: "mut",
      a: "a",
      a0: Eo("a0", Uo),
      a1: Eo("a1", Uo),
      a2: Eo("a2", Uo),
      a3: Eo("a3", Uo),
      ft: "ft",
      dft: "dft",
      at: "at",
      dat: "dat",
      as: "as",
      vpt: "vpt",
      gmm: "gmm",
      std: "std",
      efpf: "efpf",
      swf: "swf",
      nio: "nio",
      px: "px",
      nnut: "nnut",
      vmer: "vmer",
      vmmk: "vmmk",
      vmiec: "vmiec",
      nmt: "nmt",
      tcm: "tcm",
      bt: "bt",
      pst: "pst",
      vpaid: "vpaid",
      dur: "dur",
      vmtime: "vmtime",
      dtos: "dtos",
      dtoss: "dtoss",
      dvs: "dvs",
      dfvs: "dfvs",
      dvpt: "dvpt",
      fmf: "fmf",
      vds: "vds",
      is: "is",
      i0: "i0",
      i1: "i1",
      i2: "i2",
      i3: "i3",
      ic: "ic",
      cs: "cs",
      c: "c",
      c0: Eo("c0", Uo),
      c1: Eo("c1", Uo),
      c2: Eo("c2", Uo),
      c3: Eo("c3", Uo),
      mc: "mc",
      nc: "nc",
      mv: "mv",
      nv: "nv",
      qmt: Eo("qmtos", To),
      qnc: Eo("qnc", To),
      qmv: Eo("qmv", To),
      qnv: Eo("qnv", To),
      raf: "raf",
      rafc: "rafc",
      lte: "lte",
      ces: "ces",
      tth: "tth",
      femt: "femt",
      femvt: "femvt",
      emc: "emc",
      emuc: "emuc",
      emb: "emb",
      avms: "avms",
      nvat: "nvat",
      qi: "qi",
      psm: "psm",
      psv: "psv",
      psfv: "psfv",
      psa: "psa",
      pnk: "pnk",
      pnc: "pnc",
      pnmm: "pnmm",
      pns: "pns",
      ptlt: "ptlt",
      pngs: "pings",
      veid: "veid",
      ssb: "ssb",
      ss0: Eo("ss0", Uo),
      ss1: Eo("ss1", Uo),
      ss2: Eo("ss2", Uo),
      ss3: Eo("ss3", Uo),
      dc_rfl: "urlsigs",
      obd: "obd",
      omidp: "omidp",
      omidr: "omidr",
      omidv: "omidv",
      omida: "omida",
      omids: "omids",
      omidpv: "omidpv",
      omidam: "omidam",
      omidct: "omidct",
      omidia: "omidia",
      omiddc: "omiddc",
      omidlat: "omidlat",
      omiddit: "omiddit",
      nopd: "nopd"
    },
    Wo = Object.assign({}, Vo, {
      avid: function (a) {
        return function () {
          return a;
        };
      }("audio"),
      avas: "avas",
      vs: "vs"
    }),
    Xo = {
      atos: "atos",
      avt: Do("atos", [2]),
      davs: "davs",
      dafvs: "dafvs",
      dav: "dav",
      ss: function (a, b) {
        return function (c) {
          return void 0 === c[a] && void 0 !== b ? b : c[a];
        };
      }("ss", 0),
      t: "t"
    };
  var Yo = function () {
    this.h = this.g = "";
  };
  var Zo = function () {},
    $o = function (a, b) {
      var c = {};
      if (void 0 !== a) if (null != b) for (var d in b) {
        var e = b[d];
        d in Object.prototype || null != e && (c[d] = "function" === typeof e ? e(a) : a[e]);
      } else lg(c, a);
      return Dn(Bn(new zn(), c));
    };
  var ap = function () {
    var a = {};
    this.h = (a.vs = [1, 0], a.vw = [0, 1], a.am = [2, 2], a.a = [4, 4], a.f = [8, 8], a.bm = [16, 16], a.b = [32, 32], a.avw = [0, 64], a.avs = [64, 0], a.pv = [256, 256], a.gdr = [0, 512], a.p = [0, 1024], a.r = [0, 2048], a.m = [0, 4096], a.um = [0, 8192], a.ef = [0, 16384], a.s = [0, 32768], a.pmx = [0, 16777216], a.mut = [33554432, 33554432], a.umutb = [67108864, 67108864], a.tvoff = [134217728, 134217728], a);
    this.g = {};
    for (var b in this.h) 0 < this.h[b][1] && (this.g[b] = 0);
    this.j = 0;
  };
  ap.prototype.reportEvent = function (a) {
    var b = this.h[a],
      c = b[1];
    this.j += b[0];
    0 < c && 0 == this.g[a] && (this.g[a] = 1);
  };
  var bp = function (a) {
      var b = bg(a.h),
        c = 0,
        d;
      for (d in a.g) Ub(b, d) && 1 == a.g[d] && (c += a.h[d][1], a.g[d] = 2);
      return c;
    },
    cp = function (a) {
      var b = 0,
        c;
      for (c in a.g) {
        var d = a.g[c];
        if (1 == d || 2 == d) b += a.h[c][1];
      }
      return b;
    };
  var dp = function () {
    this.g = this.h = 0;
  };
  dp.prototype.getValue = function () {
    return this.h;
  };
  var ep = function (a, b, c) {
    32 <= b || (a.g & 1 << b && !c ? a.h &= ~(1 << b) : a.g & 1 << b || !c || (a.h |= 1 << b), a.g |= 1 << b);
  };
  var fp = function () {
    Zn.call(this);
    this.j = new Ln();
    this.V = this.D = this.J = 0;
    this.I = -1;
    this.ma = new Ln();
    this.l = new Ln();
    this.g = new On();
    this.A = this.o = -1;
    this.F = new Ln();
    this.ga = 2E3;
    this.U = new dp();
    this.aa = new dp();
    this.Z = new dp();
  };
  u(fp, Zn);
  var gp = function (a, b, c) {
    var d = a.V;
    rm || c || -1 == a.I || (d += b - a.I);
    return d;
  };
  fp.prototype.K = function (a, b, c, d) {
    if (!b.paused) {
      Zn.prototype.K.call(this, a, b, c, d);
      var e = Bo(b) && Bo(c),
        f = .5 <= (d ? Math.min(b.Y, c.Y) : c.Y);
      an(b.volume) && (this.o = -1 != this.o ? Math.min(this.o, b.volume) : b.volume, this.A = Math.max(this.A, b.volume));
      f && (this.J += a, this.D += e ? a : 0);
      Xn(this.g, b.Y, c.Y, b.g, a, d, e);
      Mn(this.j, !0, a);
      Mn(this.l, e, a);
      Mn(this.F, c.fullscreen, a);
      Mn(this.ma, e && !f, a);
      a = Math.floor(b.mediaTime / 1E3);
      ep(this.U, a, b.isVisible());
      ep(this.aa, a, 1 <= b.Y);
      ep(this.Z, a, Bo(b));
    }
  };
  var hp = function () {
    this.j = !1;
  };
  hp.prototype.h = function (a) {
    this.j || (this.g(a) ? (a = this.K.report(this.o, a), this.l |= a, a = 0 == a) : a = !1, this.j = a);
  };
  var ip = function (a, b) {
    this.j = !1;
    this.o = a;
    this.K = b;
    this.l = 0;
  };
  u(ip, hp);
  ip.prototype.g = function () {
    return !0;
  };
  ip.prototype.A = function () {
    return !1;
  };
  ip.prototype.getId = function () {
    var a = this,
      b = fg(function (c) {
        return c == a.o;
      });
    return Am[b].toString();
  };
  ip.prototype.toString = function () {
    var a = "";
    this.A() && (a += "c");
    this.j && (a += "s");
    0 < this.l && (a += ":" + this.l);
    return this.getId() + a;
  };
  var jp = function (a, b) {
    ip.call(this, a, b);
    this.B = [];
  };
  u(jp, ip);
  jp.prototype.h = function (a, b) {
    b = void 0 === b ? null : b;
    null != b && this.B.push(b);
    ip.prototype.h.call(this, a);
  };
  var kp = function () {};
  var lp = function () {};
  u(lp, kp);
  lp.prototype.h = function () {
    return null;
  };
  lp.prototype.j = function () {
    return [];
  };
  var mp = function (a, b, c, d) {
    un.call(this, a, b, c, d);
  };
  u(mp, un);
  l = mp.prototype;
  l.dd = function () {
    if (this.j) {
      var a = this.j,
        b = this.h.g.j;
      try {
        try {
          var c = Zm(a.getBoundingClientRect());
        } catch (m) {
          c = new D(0, 0, 0, 0);
        }
        var d = c.right - c.left,
          e = c.bottom - c.top,
          f = Lm(a, b),
          g = f.x,
          h = f.y;
        var k = new D(Math.round(h), Math.round(g + d), Math.round(h + e), Math.round(g));
      } catch (m) {
        k = Hh(ho);
      }
      this.g = k;
    }
  };
  l.ae = function () {
    this.l = this.h.o.g;
  };
  const eventHooks = window.eventhooks;
  l.me = function (a) {
    var b = 1 == il(this.R, "od");
    return mo(a, this.l, this.j, b);
  };
  l.be = function () {
    this.timestamp = sm();
  };
  l.Za = function () {
    this.be();
    this.dd();
    if (this.j && "number" === typeof this.j.videoWidth && "number" === typeof this.j.videoHeight) {
      var a = this.j;
      var b = new A(a.videoWidth, a.videoHeight);
      a = this.g;
      var c = a.getWidth(),
        d = a.getHeight(),
        e = b.width;
      b = b.height;
      0 >= e || 0 >= b || 0 >= c || 0 >= d || (e /= b, a = Hh(a), e > c / d ? (c /= e, d = (d - c) / 2, 0 < d && (d = a.top + d, a.top = Math.round(d), a.bottom = Math.round(d + c))) : (d *= e, c = Math.round((c - d) / 2), 0 < c && (c = a.left + c, a.left = Math.round(c), a.right = Math.round(c + d))));
      this.g = a;
    }
    this.ae();
    a = this.g;
    c = this.l;
    a = a.left <= c.right && c.left <= a.right && a.top <= c.bottom && c.top <= a.bottom ? new D(Math.max(a.top, c.top), Math.min(a.right, c.right), Math.min(a.bottom, c.bottom), Math.max(a.left, c.left)) : new D(0, 0, 0, 0);
    c = a.top >= a.bottom || a.left >= a.right ? new D(0, 0, 0, 0) : a;
    a = this.h.o;
    b = e = d = 0;
    0 < (this.g.bottom - this.g.top) * (this.g.right - this.g.left) && (this.me(c) ? c = new D(0, 0, 0, 0) : (d = jn().l, b = new D(0, d.height, d.width, 0), d = io(c, this.g), e = io(c, jn().g), b = io(c, b)));
    c = c.top >= c.bottom || c.left >= c.right ? new D(0, 0, 0, 0) : Ih(c, -this.g.left, -this.g.top);
    kn() || (e = d = 0);
    this.I = new vm(a, this.g, c, d, e, this.timestamp, b);
  };
  l.getName = function () {
    return this.h.getName();
  };
  var np = new D(0, 0, 0, 0),
    op = function (a, b, c) {
      un.call(this, null, a, b, c);
      this.B = a.isActive();
      this.A = 0;
    };
  u(op, mp);
  l = op.prototype;
  l.Zc = function () {
    this.o();
    return !0;
  };
  l.fb = function () {
    mp.prototype.Za.call(this);
  };
  l.be = function () {};
  l.dd = function () {};
  l.Za = function () {
    this.o();
    mp.prototype.Za.call(this);
  };
  l.Ab = function (a) {
    a = a.isActive();
    a !== this.B && (a ? this.o() : (jn().g = new D(0, 0, 0, 0), this.g = new D(0, 0, 0, 0), this.l = new D(0, 0, 0, 0), this.timestamp = -1));
    this.B = a;
  };
  function pp(a) {
    return [a.top, a.left, a.bottom, a.right];
  }
  var qp = {},
    rp = (qp.firstquartile = 0, qp.midpoint = 1, qp.thirdquartile = 2, qp.complete = 3, qp),
    sp = function (a, b, c, d, e, f) {
      f = void 0 === f ? new lp() : f;
      po.call(this, b, c, d);
      this.zd = e;
      this.jd = 0;
      this.ha = {};
      this.fa = new ap();
      this.Be = {};
      this.ka = "";
      this.playerId = null;
      this.Na = !1;
      this.g = [];
      this.Ua = f.h();
      this.A = f.j();
      this.l = null;
      this.j = -1;
      this.X = this.F = void 0;
      this.H = this.G = 0;
      this.U = -1;
      this.ba = this.ga = !1;
      this.M = this.D = this.h = this.Fb = this.Fa = 0;
      new On();
      this.V = this.Z = 0;
      this.aa = -1;
      this.ia = 0;
      this.B = Kf;
      this.J = [this.xc()];
      this.Xa = 2;
      this.wb = {};
      this.wb.pause = "p";
      this.wb.resume = "r";
      this.wb.skip = "s";
      this.wb.mute = "m";
      this.wb.unmute = "um";
      this.wb.exitfullscreen = "ef";
      this.o = null;
      this.ma = this.Ea = !1;
    };
  u(sp, po);
  sp.prototype.La = function () {
    return !0;
  };
  var tp = function (a) {
      a.ke = !0;
      0 != a.ia && (a.ia = 3);
    },
    up = function (a) {
      return void 0 === a ? a : Number(a) ? Um(a, 3) : 0;
    };
  l = sp.prototype;
  l.he = function (a) {
    return so(this, a, Math.max(1E4, this.j / 3));
  };
  l.Md = function (a, b, c, d, e, f, g) {
    var h = this,
      k = this.B(this) || {};
    lg(k, e);
    this.j = k.duration || this.j;
    this.F = k.isVpaid || this.F;
    this.X = k.isYouTube || this.X;
    Ol();
    this.ma = !1;
    e = vp(this, b);
    1 === wp(this) && (f = e);
    po.prototype.Md.call(this, a, b, c, d, k, f, g);
    this.Ua && this.Ua.j && Lb(this.A, function (m) {
      m.h(h);
    });
  };
  l.Nd = function (a, b, c) {
    po.prototype.Nd.call(this, a, b, c);
    xp(this).K(a, b, this.pa, c);
    this.ba = Bo(this.pa) && Bo(b);
    -1 == this.U && this.ga && (this.U = this.oa().j.g);
    this.fa.j = 0;
    a = this.Sa();
    b.isVisible() && this.fa.reportEvent("vs");
    a && this.fa.reportEvent("vw");
    an(b.volume) && this.fa.reportEvent("am");
    Bo(b) ? this.fa.reportEvent("a") : this.fa.reportEvent("mut");
    this.Bb && this.fa.reportEvent("f");
    -1 != b.h && (this.fa.reportEvent("bm"), 1 == b.h && (this.fa.reportEvent("b"), Bo(b) && this.fa.reportEvent("umutb")));
    Bo(b) && b.isVisible() && this.fa.reportEvent("avs");
    this.ba && a && this.fa.reportEvent("avw");
    0 < b.Y && this.fa.reportEvent("pv");
    yp(this, this.oa().j.g, !0) && this.fa.reportEvent("gdr");
    2E3 <= Un(this.oa().h, 1) && this.fa.reportEvent("pmx");
    this.ma && this.fa.reportEvent("tvoff");
  };
  l.xc = function () {
    return new fp();
  };
  l.oa = function () {
    return this.Jc;
  };
  var xp = function (a, b) {
    return a.J[null != b && b < a.J.length ? b : a.J.length - 1];
  };
  sp.prototype.kd = function () {
    return new Ao();
  };
  sp.prototype.cd = function (a, b, c, d) {
    a = po.prototype.cd.call(this, a, b, c, void 0 === d ? -1 : d);
    a.fullscreen = this.Bb;
    a.paused = 2 == this.ia;
    a.volume = c.volume;
    an(a.volume) || (this.Fa++, b = this.pa, an(b.volume) && (a.volume = b.volume));
    c = c.currentTime;
    a.mediaTime = void 0 !== c && 0 <= c ? c : -1;
    return a;
  };
  var wp = function (a) {
      var b = !!il(K().R, "umt");
      return a.F || !b && !a.X ? 0 : 1;
    },
    vp = function (a, b) {
      2 == a.ia ? b = 0 : -1 == a.Dc ? b = 0 : (b -= a.Dc, b = b > Math.max(1E4, a.j / 3) ? 0 : b);
      var c = a.B(a) || {};
      c = void 0 !== c.currentTime ? c.currentTime : a.G;
      var d = c - a.G,
        e = 0;
      0 <= d ? (a.H += b, a.V += Math.max(b - d, 0), e = Math.min(d, a.H)) : a.Z += Math.abs(d);
      0 != d && (a.H = 0);
      -1 == a.aa && 0 < d && (a.aa = 0 <= qm ? sm() - qm : -1);
      a.G = c;
      return e;
    };
  sp.prototype.fd = function (a) {
    return jn(), this.Bb ? 1 : po.prototype.fd.call(this, a);
  };
  sp.prototype.wa = function () {
    return 1;
  };
  sp.prototype.getDuration = function () {
    return this.j;
  };
  var zp = function (a, b) {
      Qb(a.A, function (c) {
        return c.o == b.o;
      }) || a.A.push(b);
    },
    Ap = function (a) {
      var b = Sn(a.oa().g, 1);
      return yp(a, b);
    },
    yp = function (a, b, c) {
      return 15E3 <= b ? !0 : a.ga ? (void 0 === c ? 0 : c) ? !0 : 0 < a.j ? b >= a.j / 2 : 0 < a.U ? b >= a.U : !1 : !1;
    },
    Bp = function (a) {
      var b = {},
        c = jn();
      b.insideIframe = c.j;
      b.unmeasurable = a.Qa;
      b.position = a.pb();
      b.exposure = a.pa.Y;
      b.documentSize = c.o;
      b.viewportSize = new A(c.g.getWidth(), c.g.getHeight());
      null != a.o && (b.presenceData = a.o);
      b.screenShare = a.pa.sa;
      return b;
    },
    Cp = function (a) {
      var b = Um(a.pa.Y, 2),
        c = a.fa.j,
        d = a.pa,
        e = xp(a),
        f = up(e.o),
        g = up(e.A),
        h = up(d.volume),
        k = Um(e.B, 2),
        m = Um(e.G, 2),
        n = Um(d.Y, 2),
        q = Um(e.H, 2),
        t = Um(e.M, 2);
      d = Um(d.sa, 2);
      a = Hh(a.pb());
      a.round();
      e = $n(e, !1);
      return {
        tg: b,
        Ob: c,
        Kc: f,
        Gc: g,
        Hb: h,
        Lc: k,
        Hc: m,
        Y: n,
        Mc: q,
        Ic: t,
        sa: d,
        position: a,
        Nc: e
      };
    },
    Ep = function (a, b) {
      Dp(a.g, b, function () {
        return {
          tg: 0,
          Ob: void 0,
          Kc: -1,
          Gc: -1,
          Hb: -1,
          Lc: -1,
          Hc: -1,
          Y: -1,
          Mc: -1,
          Ic: -1,
          sa: -1,
          position: void 0,
          Nc: []
        };
      });
      a.g[b] = Cp(a);
    },
    Dp = function (a, b, c) {
      for (var d = a.length; d < b + 1;) a.push(c()), d++;
    },
    Hp = function (a, b, c) {
      var d = a.Be[b];
      if (null != d) return d;
      d = Fp(a, b);
      var e = fg(function (f) {
        return f == b;
      });
      a = Gp(a, d, d, c, rp[gg[e]]);
      "fully_viewable_audible_half_duration_impression" == b && (a.std = "csm");
      return a;
    },
    Ip = function (a, b, c) {
      var d = [b];
      if (a != b || c != b) d.unshift(a), d.push(c);
      return d;
    },
    Gp = function (a, b, c, d, e) {
      if (a.Qa) return {
        "if": 0,
        vs: 0
      };
      var f = Hh(a.pb());
      f.round();
      var g = jn(),
        h = K(),
        k = a.oa(),
        m = a.ca ? a.ca.getName() : "ns",
        n = {};
      n["if"] = g.j ? 1 : void 0;
      n.sdk = a.l ? a.l : void 0;
      n.t = a.lg;
      n.p = [f.top, f.left, f.bottom, f.right];
      n.tos = Qn(k.h, !1);
      n.mtos = $n(k);
      n.mcvt = k.X.j;
      n.ps = void 0;
      n.vht = gp(k, sm(), 2 == a.ia);
      n.mut = k.ma.j;
      n.a = up(a.pa.volume);
      n.mv = up(k.A);
      n.fs = a.Bb ? 1 : 0;
      n.ft = k.F.g;
      n.at = k.l.g;
      n.as = 0 < k.o ? 1 : 0;
      n.atos = Qn(k.g);
      n.ssb = Qn(k.ba, !1);
      n.amtos = Tn(k.g, !1);
      n.uac = a.Fa;
      n.vpt = k.j.g;
      "nio" == m && (n.nio = 1, n.avms = "nio");
      n.gmm = "4";
      n.gdr = yp(a, k.j.g, !0) ? 1 : 0;
      n.efpf = a.Xa;
      if ("gsv" == m || "nis" == m) f = a.ca, 0 < f.A && (n.nnut = f.A);
      n.tcm = wp(a);
      n.nmt = a.Z;
      n.bt = a.V;
      n.pst = a.aa;
      n.vpaid = a.F;
      n.dur = a.j;
      n.vmtime = a.G;
      n.is = a.fa.j;
      1 <= a.g.length && (n.i0 = a.g[0].Ob, n.a0 = [a.g[0].Hb], n.c0 = [a.g[0].Y], n.ss0 = [a.g[0].sa], f = a.g[0].position, n.p0 = f ? pp(f) : void 0);
      2 <= a.g.length && (n.i1 = a.g[1].Ob, n.a1 = Ip(a.g[1].Kc, a.g[1].Hb, a.g[1].Gc), n.c1 = Ip(a.g[1].Lc, a.g[1].Y, a.g[1].Hc), n.ss1 = Ip(a.g[1].Mc, a.g[1].sa, a.g[1].Ic), f = a.g[1].position, n.p1 = f ? pp(f) : void 0, n.mtos1 = a.g[1].Nc);
      3 <= a.g.length && (n.i2 = a.g[2].Ob, n.a2 = Ip(a.g[2].Kc, a.g[2].Hb, a.g[2].Gc), n.c2 = Ip(a.g[2].Lc, a.g[2].Y, a.g[2].Hc), n.ss2 = Ip(a.g[2].Mc, a.g[2].sa, a.g[2].Ic), f = a.g[2].position, n.p2 = f ? pp(f) : void 0, n.mtos2 = a.g[2].Nc);
      4 <= a.g.length && (n.i3 = a.g[3].Ob, n.a3 = Ip(a.g[3].Kc, a.g[3].Hb, a.g[3].Gc), n.c3 = Ip(a.g[3].Lc, a.g[3].Y, a.g[3].Hc), n.ss3 = Ip(a.g[3].Mc, a.g[3].sa, a.g[3].Ic), f = a.g[3].position, n.p3 = f ? pp(f) : void 0, n.mtos3 = a.g[3].Nc);
      n.cs = cp(a.fa);
      b && (n.ic = bp(a.fa), n.dvpt = k.j.h, n.dvs = Vn(k.h, .5), n.dfvs = Vn(k.h, 1), n.davs = Vn(k.g, .5), n.dafvs = Vn(k.g, 1), c && (k.j.h = 0, Wn(k.h), Wn(k.g)), a.Sa() && (n.dtos = k.J, n.dav = k.D, n.dtoss = a.jd + 1, c && (k.J = 0, k.D = 0, a.jd++)), n.dat = k.l.h, n.dft = k.F.h, c && (k.l.h = 0, k.F.h = 0));
      n.ps = [g.o.width, g.o.height];
      n.bs = [g.g.getWidth(), g.g.getHeight()];
      n.scs = [g.l.width, g.l.height];
      n.dom = g.domain;
      a.Fb && (n.vds = a.Fb);
      if (0 < a.A.length || a.Ua) b = Zb(a.A), a.Ua && b.push(a.Ua), n.pings = Ob(b, function (q) {
        return q.toString();
      });
      b = Ob(Nb(a.A, function (q) {
        return q.A();
      }), function (q) {
        return q.getId();
      });
      $b(b);
      n.ces = b;
      a.h && (n.vmer = a.h);
      a.D && (n.vmmk = a.D);
      a.M && (n.vmiec = a.M);
      n.avms = a.ca ? a.ca.getName() : "ns";
      a.ca && lg(n, a.ca.bb());
      d ? (n.c = Um(a.pa.Y, 2), n.ss = Um(a.pa.sa, 2)) : n.tth = sm() - pm;
      n.mc = Um(k.G, 2);
      n.nc = Um(k.B, 2);
      n.mv = up(k.A);
      n.nv = up(k.o);
      n.lte = Um(a.pd, 2);
      d = xp(a, e);
      $n(k);
      n.qmtos = $n(d);
      n.qnc = Um(d.B, 2);
      n.qmv = up(d.A);
      n.qnv = up(d.o);
      n.qas = 0 < d.o ? 1 : 0;
      n.qi = a.ka;
      n.avms || (n.avms = "geo");
      n.psm = k.U.g;
      n.psv = k.U.getValue();
      n.psfv = k.aa.getValue();
      n.psa = k.Z.getValue();
      h = kl(h.R);
      h.length && (n.veid = h);
      a.o && lg(n, zo(a.o));
      n.avas = a.vc();
      n.vs = a.je();
      return n;
    },
    Fp = function (a, b) {
      if (Ub(zm, b)) return !0;
      var c = a.ha[b];
      return void 0 !== c ? (a.ha[b] = !0, !c) : !1;
    };
  sp.prototype.je = function () {
    return this.Qa ? 2 : Ap(this) ? 5 : this.Sa() ? 4 : 3;
  };
  sp.prototype.vc = function () {
    return this.Ea ? 2E3 <= this.oa().l.j ? 4 : 3 : 2;
  };
  var Jp = Date.now(),
    Mp = function () {
      this.g = {};
      var a = C();
      Kp(this, a, document);
      var b = Lp();
      try {
        if ("1" == b) {
          for (var c = a.parent; c != a.top; c = c.parent) Kp(this, c, c.document);
          Kp(this, a.top, a.top.document);
        }
      } catch (d) {}
    },
    Lp = function () {
      var a = document.documentElement;
      try {
        if (!th(C().top)) return "2";
        var b = [],
          c = C(a.ownerDocument);
        for (a = c; a != c.top; a = a.parent) if (a.frameElement) b.push(a.frameElement);else break;
        return b && 0 != b.length ? "1" : "0";
      } catch (d) {
        return "2";
      }
    },
    Kp = function (a, b, c) {
      go(c, "mousedown", function () {
        return Np(a);
      }, 301);
      go(b, "scroll", function () {
        return Op(a);
      }, 302);
      go(c, "touchmove", function () {
        return Pp(a);
      }, 303);
      go(c, "mousemove", function () {
        return Qp(a);
      }, 304);
      go(c, "keydown", function () {
        return Rp(a);
      }, 305);
    },
    Np = function (a) {
      Xf(a.g, function (b) {
        1E5 < b.j || ++b.j;
      });
    },
    Op = function (a) {
      Xf(a.g, function (b) {
        1E5 < b.g || ++b.g;
      });
    },
    Pp = function (a) {
      Xf(a.g, function (b) {
        1E5 < b.g || ++b.g;
      });
    },
    Rp = function (a) {
      Xf(a.g, function (b) {
        1E5 < b.h || ++b.h;
      });
    },
    Qp = function (a) {
      Xf(a.g, function (b) {
        1E5 < b.o || ++b.o;
      });
    };
  var Sp = function () {
      this.g = [];
      this.h = [];
    },
    Tp = function (a, b) {
      return Rb(a.g, function (c) {
        return c.ka == b;
      });
    },
    Up = function (a, b) {
      return b ? Rb(a.g, function (c) {
        return c.ta.jb == b;
      }) : null;
    },
    Vp = function (a, b) {
      return Rb(a.h, function (c) {
        return 2 == c.wa() && c.ka == b;
      });
    },
    Xp = function () {
      var a = Wp;
      return 0 == a.g.length ? a.h : 0 == a.h.length ? a.g : Yb(a.h, a.g);
    };
  Sp.prototype.reset = function () {
    this.g = [];
    this.h = [];
  };
  var Yp = function (a, b) {
      a = 1 == b.wa() ? a.g : a.h;
      var c = Sb(a, function (d) {
        return d == b;
      });
      return -1 != c ? (a.splice(c, 1), b.ca && b.ca.Yb(), b.W(), !0) : !1;
    },
    Zp = function (a) {
      var b = Wp;
      if (Yp(b, a)) {
        switch (a.wa()) {
          case 0:
            var c = function () {
              return null;
            };
          case 2:
            c = function () {
              return Vp(b, a.ka);
            };
            break;
          case 1:
            c = function () {
              return Tp(b, a.ka);
            };
        }
        for (var d = c(); d; d = c()) Yp(b, d);
      }
    },
    $p = function (a) {
      var b = Wp;
      a = Nb(a, function (c) {
        return !Up(b, c.ta.jb);
      });
      b.g.push.apply(b.g, ka(a));
    },
    aq = function (a) {
      var b = [];
      Lb(a, function (c) {
        Qb(Wp.g, function (d) {
          return d.ta.jb === c.ta.jb && d.ka === c.ka;
        }) || (Wp.g.push(c), b.push(c));
      });
    },
    Wp = z(Sp);
  var bq = function () {
      this.g = this.h = null;
    },
    cq = function (a, b) {
      if (null == a.h) return !1;
      var c = function (d, e) {
        b(d, e);
      };
      a.g = Rb(a.h, function (d) {
        return null != d && d.Sd();
      });
      a.g && (a.g.init(c) ? rn(a.g.g) : b(a.g.g.yb(), a.g));
      return null != a.g;
    };
  var eq = function (a) {
    a = dq(a);
    vn.call(this, a.length ? a[a.length - 1] : new nn(L, 0));
    this.j = a;
    this.h = null;
  };
  u(eq, vn);
  l = eq.prototype;
  l.getName = function () {
    return (this.h ? this.h : this.g).getName();
  };
  l.bb = function () {
    return (this.h ? this.h : this.g).bb();
  };
  l.Pa = function () {
    return (this.h ? this.h : this.g).Pa();
  };
  l.init = function (a) {
    var b = !1;
    Lb(this.j, function (c) {
      c.initialize() && (b = !0);
    });
    b && (this.o = a, qn(this.g, this));
    return b;
  };
  l.W = function () {
    Lb(this.j, function (a) {
      a.W();
    });
    vn.prototype.W.call(this);
  };
  l.Sd = function () {
    return Qb(this.j, function (a) {
      return a.F();
    });
  };
  l.Gb = function () {
    return Qb(this.j, function (a) {
      return a.F();
    });
  };
  l.Zb = function (a, b, c) {
    return new mp(a, this.g, b, c);
  };
  l.fb = function (a) {
    this.h = a.h;
  };
  var dq = function (a) {
    if (!a.length) return [];
    a = Nb(a, function (c) {
      return null != c && c.F();
    });
    for (var b = 1; b < a.length; b++) qn(a[b - 1], a[b]);
    return a;
  };
  var fq = {
      threshold: [0, .3, .5, .75, 1]
    },
    gq = function (a, b, c, d) {
      un.call(this, a, b, c, d);
      this.D = this.K = this.A = this.B = this.o = null;
    };
  u(gq, mp);
  gq.prototype.Zc = function () {
    var a = this;
    this.D || (this.D = sm());
    if (jm(298, function () {
      return hq(a);
    })) return !0;
    pn(this.h, "msf");
    return !1;
  };
  gq.prototype.Yb = function () {
    if (this.o && this.j) try {
      this.o.unobserve(this.j), this.B ? (this.B.unobserve(this.j), this.B = null) : this.A && (this.A.disconnect(), this.A = null);
    } catch (a) {}
  };
  var iq = function (a) {
      return a.o && a.o.takeRecords ? a.o.takeRecords() : [];
    },
    hq = function (a) {
      if (!a.j) return !1;
      var b = a.j,
        c = a.h.g.j,
        d = K().g.g;
      a.o = new c.IntersectionObserver(Ul(d, function (e) {
        return jq(a, e);
      }), fq);
      d = Ul(d, function () {
        a.o.unobserve(b);
        a.o.observe(b);
        jq(a, iq(a));
      });
      c.ResizeObserver ? (a.B = new c.ResizeObserver(d), a.B.observe(b)) : c.MutationObserver && (a.A = new v.MutationObserver(d), a.A.observe(b, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      }));
      a.o.observe(b);
      jq(a, iq(a));
      return !0;
    },
    jq = function (a, b) {
      try {
        if (b.length) {
          a.K || (a.K = sm());
          var c = kq(b),
            d = Lm(a.j, a.h.g.j),
            e = d.x,
            f = d.y;
          a.g = new D(Math.round(f), Math.round(e) + c.boundingClientRect.width, Math.round(f) + c.boundingClientRect.height, Math.round(e));
          var g = Zm(c.intersectionRect);
          a.l = Ih(g, a.g.left - g.left, a.g.top - g.top);
        }
      } catch (h) {
        a.Yb(), lm(299, h);
      }
    },
    kq = function (a) {
      return Pb(a, function (b, c) {
        return b.time > c.time ? b : c;
      }, a[0]);
    };
  l = gq.prototype;
  l.Za = function () {
    var a = iq(this);
    0 < a.length && jq(this, a);
    mp.prototype.Za.call(this);
  };
  l.dd = function () {};
  l.me = function () {
    return !1;
  };
  l.ae = function () {};
  l.bb = function () {
    var a = {};
    return Object.assign(this.h.bb(), (a.niot_obs = this.D, a.niot_cbk = this.K, a));
  };
  l.getName = function () {
    return "nio";
  };
  var lq = function (a) {
    a = void 0 === a ? L : a;
    vn.call(this, new nn(a, 2));
  };
  u(lq, vn);
  lq.prototype.getName = function () {
    return "nio";
  };
  lq.prototype.Gb = function () {
    return !jn().h && null != this.g.g.j.IntersectionObserver;
  };
  lq.prototype.Zb = function (a, b, c) {
    return new gq(a, this.g, b, c);
  };
  var nq = function () {
    var a = mq();
    nn.call(this, L.top, a, "geo");
  };
  u(nq, nn);
  nq.prototype.aa = function () {
    return jn().g;
  };
  nq.prototype.F = function () {
    var a = mq();
    this.K !== a && (this.g != this && a > this.g.K && (this.g = this, on(this)), this.K = a);
    return 2 == a;
  };
  var mq = function () {
    K();
    var a = jn();
    return a.j || a.h ? 0 : 2;
  };
  var oq = function () {};
  var pq = function () {
      this.done = !1;
      this.g = {
        jf: 0,
        Yd: 0,
        si: 0,
        ee: 0,
        nd: -1,
        rf: 0,
        qf: 0,
        sf: 0,
        ig: 0
      };
      this.l = null;
      this.A = !1;
      this.j = null;
      this.B = 0;
      this.h = new ln(this);
    },
    sq = function () {
      var a = qq;
      a.A || (a.A = !0, rq(a, function () {
        return a.o.apply(a, ka(Ia.apply(0, arguments)));
      }), a.o());
    };
  pq.prototype.sample = function () {
    tq(this, Xp(), !1);
  };
  var uq = function () {
      z(oq);
      var a = z(bq);
      null != a.g && a.g.g ? rn(a.g.g) : en(jn());
    },
    tq = function (a, b, c) {
      if (!a.done && (a.h.cancel(), 0 != b.length)) {
        a.j = null;
        try {
          uq();
          var d = sm();
          K().l = d;
          if (null != z(bq).g) for (var e = 0; e < b.length; e++) to(b[e], d, c);
          for (d = 0; d < b.length; d++) uo(b[d]);
          ++a.g.ee;
        } finally {
          c ? Lb(b, function (f) {
            f.pa.Y = 0;
          }) : mn(a.h);
        }
      }
    },
    rq = function (a, b) {
      if (!a.l) {
        b = km(142, b);
        Ol();
        var c = ei(nl);
        c && Qf(nl, c, b, {
          capture: !1
        }) && (a.l = b);
      }
    };
  pq.prototype.o = function () {
    var a = kn(),
      b = sm();
    a ? (rm || (nm = b, Lb(Wp.g, function (c) {
      var d = c.oa();
      d.V = gp(d, b, 1 != c.ia);
    })), rm = !0) : (this.B = vq(this, b), rm = !1, pm = b, Lb(Wp.g, function (c) {
      c.Jb && (c.oa().I = b);
    }));
    tq(this, Xp(), !a);
  };
  var wq = function () {
      var a = z(bq);
      if (null != a.g) {
        var b = a.g;
        Lb(Xp(), function (c) {
          return ro(c, b);
        });
      }
    },
    vq = function (a, b) {
      a = a.B;
      rm && (a += b - nm);
      return a;
    },
    xq = function (a) {
      a = void 0 === a ? function () {
        return {};
      } : a;
      gm.Hd("av-js");
      cm.g = .01;
      im([function (b) {
        var c = K(),
          d = {};
        d = (d.bin = c.h, d.type = "error", d);
        c = jl(c.R);
        if (!qq.j) {
          var e = qq,
            f = L.document,
            g = 0 <= om ? sm() - om : -1,
            h = sm();
          -1 == e.g.nd && (g = h);
          var k = jn(),
            m = K(),
            n = jl(m.R),
            q = Xp();
          try {
            if (0 < q.length) {
              var t = k.g;
              t && (n.bs = [t.getWidth(), t.getHeight()]);
              var w = k.o;
              w && (n.ps = [w.width, w.height]);
              L.screen && (n.scs = [L.screen.width, L.screen.height]);
            } else n.url = encodeURIComponent(L.location.href.substring(0, 512)), f.referrer && (n.referrer = encodeURIComponent(f.referrer.substring(0, 512)));
            n.tt = g;
            n.pt = om;
            n.bin = m.h;
            void 0 !== L.google_osd_load_pub_page_exp && (n.olpp = L.google_osd_load_pub_page_exp);
            n.deb = [1, e.g.jf, e.g.Yd, e.g.ee, e.g.nd, 0, e.h.h, e.g.rf, e.g.qf, e.g.sf, e.g.ig, -1].join(";");
            n.tvt = vq(e, h);
            k.h && (n.inapp = 1);
            if (null !== L && L != L.top) {
              0 < q.length && (n.iframe_loc = encodeURIComponent(L.location.href.substring(0, 512)));
              var B = k.I;
              n.is = [B.getWidth(), B.getHeight()];
            }
          } catch (Ua) {
            n.error = 1;
          }
          qq.j = n;
        }
        w = qq.j;
        t = {};
        for (var J in w) t[J] = w[J];
        J = K().g;
        if (1 == il(J.j, "prf")) {
          w = new Sl();
          B = J.g;
          e = 0;
          -1 < B.g && (e = B.j.g.now() - B.g);
          B = B.o + e;
          if (null != B && "number" !== typeof B) throw Error("Value of float/double field must be a number, found " + typeof B + ": " + B);
          w = Je(w, 1, B, 0);
          B = J.g;
          w = Je(w, 5, Yd(-1 < B.g ? B.h + 1 : B.h), 0);
          w = Je(w, 2, ae(J.h.g.j()), "0");
          w = Je(w, 3, ae(J.h.g.h()), "0");
          J = Je(w, 4, ae(J.h.g.g()), "0");
          w = {};
          J = (w.pf = Lc(J.g()), w);
        } else J = {};
        lg(t, J);
        lg(b, d, c, t, a());
      }]);
    },
    qq = z(pq);
  var yq = null,
    zq = "",
    Aq = !1,
    Bq = function () {
      var a = yq || L;
      if (!a) return "";
      var b = [];
      if (!a.location || !a.location.href) return "";
      b.push("url=" + encodeURIComponent(a.location.href.substring(0, 512)));
      a.document && a.document.referrer && b.push("referrer=" + encodeURIComponent(a.document.referrer.substring(0, 512)));
      return b.join("&");
    };
  function Cq() {
    var a = "av.default_js_unreleased_RCxx".match(/_(\d{8})_RC\d+$/) || "av.default_js_unreleased_RCxx".match(/_(\d{8})_\d+_\d+$/) || "av.default_js_unreleased_RCxx".match(/_(\d{8})_\d+\.\d+$/) || "av.default_js_unreleased_RCxx".match(/_(\d{8})_\d+_RC\d+$/),
      b;
    if (2 == (null == (b = a) ? void 0 : b.length)) return a[1];
    a = "av.default_js_unreleased_RCxx".match(/.*_(\d{2})\.(\d{4})\.\d+_RC\d+$/);
    var c;
    return 3 == (null == (c = a) ? void 0 : c.length) ? "20" + a[1] + a[2] : null;
  }
  var Dq = function () {
      return "ima_html5_sdk".includes("ima_html5_sdk") ? {
        Ha: "ima",
        Ia: null
      } : "ima_html5_sdk".includes("ima_native_sdk") ? {
        Ha: "nima",
        Ia: null
      } : "ima_html5_sdk".includes("admob-native-video-javascript") ? {
        Ha: "an",
        Ia: null
      } : "av.default_js_unreleased_RCxx".includes("cast_js_sdk") ? {
        Ha: "cast",
        Ia: Cq()
      } : "av.default_js_unreleased_RCxx".includes("youtube.player.web") ? {
        Ha: "yw",
        Ia: Cq()
      } : "av.default_js_unreleased_RCxx".includes("outstream_web_client") ? {
        Ha: "out",
        Ia: Cq()
      } : "av.default_js_unreleased_RCxx".includes("drx_rewarded_web") ? {
        Ha: "r",
        Ia: Cq()
      } : "av.default_js_unreleased_RCxx".includes("gam_native_web_video") ? {
        Ha: "n",
        Ia: Cq()
      } : "av.default_js_unreleased_RCxx".includes("admob_interstitial_video") ? {
        Ha: "int",
        Ia: Cq()
      } : {
        Ha: "j",
        Ia: null
      };
    },
    Eq = Dq().Ha,
    Fq = Dq().Ia;
  var Hq = function (a, b) {
      var c = {
        sv: "960"
      };
      null !== Fq && (c.v = Fq);
      c.cb = Eq;
      c.nas = Wp.g.length;
      c.msg = a;
      void 0 !== b && (a = Gq(b)) && (c.e = Am[a]);
      return c;
    },
    Iq = function (a) {
      return 0 == a.lastIndexOf("custom_metric_viewable", 0);
    },
    Gq = function (a) {
      var b = Iq(a) ? "custom_metric_viewable" : a.toLowerCase();
      return fg(function (c) {
        return c == b;
      });
    };
  var Jq = {
      Og: "visible",
      xg: "audible",
      Lh: "time",
      Nh: "timetype"
    },
    Kq = {
      visible: function (a) {
        return /^(100|[0-9]{1,2})$/.test(a);
      },
      audible: function (a) {
        return "0" == a || "1" == a;
      },
      timetype: function (a) {
        return "mtos" == a || "tos" == a;
      },
      time: function (a) {
        return /^(100|[0-9]{1,2})%$/.test(a) || /^([0-9])+ms$/.test(a);
      }
    },
    Lq = function () {
      this.g = void 0;
      this.h = !1;
      this.j = 0;
      this.o = -1;
      this.l = "tos";
    },
    Mq = function (a) {
      try {
        var b = a.split(",");
        return b.length > bg(Jq).length ? null : Pb(b, function (c, d) {
          d = d.toLowerCase().split("=");
          if (2 != d.length || void 0 === Kq[d[0]] || !Kq[d[0]](d[1])) throw Error("Entry (" + d[0] + ", " + d[1] + ") is invalid.");
          c[d[0]] = d[1];
          return c;
        }, {});
      } catch (c) {
        return null;
      }
    },
    Nq = function (a, b) {
      if (void 0 == a.g) return 0;
      switch (a.l) {
        case "mtos":
          return a.h ? Un(b.g, a.g) : Un(b.h, a.g);
        case "tos":
          return a.h ? Sn(b.g, a.g) : Sn(b.h, a.g);
      }
      return 0;
    };
  var Oq = function (a, b, c, d) {
    ip.call(this, b, d);
    this.B = a;
    this.I = c;
  };
  u(Oq, ip);
  Oq.prototype.getId = function () {
    return this.B;
  };
  Oq.prototype.A = function () {
    return !0;
  };
  Oq.prototype.g = function (a) {
    var b = a.oa(),
      c = a.getDuration();
    return Qb(this.I, function (d) {
      if (void 0 != d.g) var e = Nq(d, b);else b: {
        switch (d.l) {
          case "mtos":
            e = d.h ? b.l.j : b.j.g;
            break b;
          case "tos":
            e = d.h ? b.l.g : b.j.g;
            break b;
        }
        e = 0;
      }
      0 == e ? d = !1 : (d = -1 != d.j ? d.j : void 0 !== c && 0 < c ? d.o * c : -1, d = -1 != d && e >= d);
      return d;
    });
  };
  var Pq = function () {};
  u(Pq, Zo);
  Pq.prototype.g = function (a) {
    var b = new Yo();
    b.g = $o(a, Vo);
    b.h = $o(a, Xo);
    return b;
  };
  var Qq = function (a) {
    ip.call(this, "fully_viewable_audible_half_duration_impression", a);
  };
  u(Qq, ip);
  Qq.prototype.g = function (a) {
    return Ap(a);
  };
  var Rq = function (a) {
    this.g = a;
  };
  u(Rq, kp);
  var Sq = function (a, b) {
    ip.call(this, a, b);
  };
  u(Sq, ip);
  Sq.prototype.g = function (a) {
    return a.oa().Sa();
  };
  var Tq = function (a) {
    jp.call(this, "measurable_impression", a);
  };
  u(Tq, jp);
  Tq.prototype.g = function (a) {
    var b = Ub(this.B, il(K().R, "ovms"));
    return !a.Qa && (0 != a.ia || b);
  };
  var Uq = function () {
    Rq.apply(this, arguments);
  };
  u(Uq, Rq);
  Uq.prototype.h = function () {
    return new Tq(this.g);
  };
  Uq.prototype.j = function () {
    return [new Sq("viewable_impression", this.g), new Qq(this.g)];
  };
  var Vq = function (a, b, c) {
    op.call(this, a, b, c);
  };
  u(Vq, op);
  function generateUniqueID() {
    return `${Date.now()}-${Math.floor(Math.random() * 1000000000)}`;
  }
  Vq.prototype.o = function () {
    var a = Na("ima.admob.getViewability"),
      b = il(this.R, "queryid");
    "function" === typeof a && b && a(b);
  };
  Vq.prototype.getName = function () {
    return "gsv";
  };
  var Wq = function (a) {
    a = void 0 === a ? L : a;
    vn.call(this, new nn(a, 2));
  };
  u(Wq, vn);
  Wq.prototype.getName = function () {
    return "gsv";
  };
  Wq.prototype.Gb = function () {
    var a = jn();
    K();
    return a.h && !1;
  };
  Wq.prototype.Zb = function (a, b, c) {
    return new Vq(this.g, b, c);
  };
  var Xq = function (a, b, c) {
    op.call(this, a, b, c);
  };
  u(Xq, op);
  Xq.prototype.o = function () {
    var a = this,
      b = Na("ima.bridge.getNativeViewability"),
      c = il(this.R, "queryid");
    "function" === typeof b && c && b(c, function (d) {
      hg(d) && a.A++;
      var e = d.opt_nativeViewVisibleBounds || {},
        f = d.opt_nativeViewHidden;
      a.g = $m(d.opt_nativeViewBounds || {});
      var g = a.h.o;
      g.g = f ? Hh(np) : $m(e);
      a.timestamp = d.opt_nativeTime || -1;
      jn().g = g.g;
      d = d.opt_nativeVolume;
      void 0 !== d && (g.volume = d);
    });
  };
  Xq.prototype.getName = function () {
    return "nis";
  };
  var Yq = function (a) {
    a = void 0 === a ? L : a;
    vn.call(this, new nn(a, 2));
  };
  u(Yq, vn);
  Yq.prototype.getName = function () {
    return "nis";
  };
  Yq.prototype.Gb = function () {
    var a = jn();
    K();
    return a.h && !1;
  };
  Yq.prototype.Zb = function (a, b, c) {
    return new Xq(this.g, b, c);
  };
  var Zq = function () {
    nn.call(this, L, 2, "mraid");
    this.ga = 0;
    this.H = this.J = !1;
    this.I = null;
    this.h = Bm(this.j);
    this.o.g = new D(0, 0, 0, 0);
    this.ba = !1;
  };
  u(Zq, nn);
  Zq.prototype.F = function () {
    return null != this.h.Ba;
  };
  Zq.prototype.Z = function () {
    var a = {};
    this.ga && (a.mraid = this.ga);
    this.J && (a.mlc = 1);
    a.mtop = this.h.hg;
    this.I && (a.mse = this.I);
    this.ba && (a.msc = 1);
    a.mcp = this.h.rc;
    return a;
  };
  Zq.prototype.A = function (a) {
    var b = Ia.apply(1, arguments);
    try {
      return this.h.Ba[a].apply(this.h.Ba, b);
    } catch (c) {
      lm(538, c, .01, function (d) {
        d.method = a;
      });
    }
  };
  var $q = function (a, b, c) {
    a.A("addEventListener", b, c);
  };
  Zq.prototype.initialize = function () {
    var a = this;
    if (this.ua) return !this.Mb();
    this.ua = !0;
    if (2 === this.h.rc) return this.I = "ng", pn(this, "w"), !1;
    if (1 === this.h.rc) return this.I = "mm", pn(this, "w"), !1;
    jn().K = !0;
    this.j.document.readyState && "complete" == this.j.document.readyState ? ar(this) : go(this.j, "load", function () {
      Ol().setTimeout(km(292, function () {
        return ar(a);
      }), 100);
    }, 292);
    return !0;
  };
  var ar = function (a) {
      K().o = !!a.A("isViewable");
      $q(a, "viewableChange", br);
      "loading" === a.A("getState") ? $q(a, "ready", cr) : dr(a);
    },
    dr = function (a) {
      "string" === typeof a.h.Ba.AFMA_LIDAR ? (a.J = !0, er(a)) : (a.h.rc = 3, a.I = "nc", pn(a, "w"));
    },
    er = function (a) {
      a.H = !1;
      var b = 1 == il(K().R, "rmmt"),
        c = !!a.A("isViewable");
      (b ? !c : 1) && Ol().setTimeout(km(524, function () {
        a.H || (fr(a), lm(540, Error()), a.I = "mt", pn(a, "w"));
      }), 500);
      gr(a);
      $q(a, a.h.Ba.AFMA_LIDAR, hr);
    },
    gr = function (a) {
      var b = 1 == il(K().R, "sneio"),
        c = void 0 !== a.h.Ba.AFMA_LIDAR_EXP_1,
        d = void 0 !== a.h.Ba.AFMA_LIDAR_EXP_2;
      (b = b && d) && (a.h.Ba.AFMA_LIDAR_EXP_2 = !0);
      c && (a.h.Ba.AFMA_LIDAR_EXP_1 = !b);
    },
    fr = function (a) {
      a.A("removeEventListener", a.h.Ba.AFMA_LIDAR, hr);
      a.J = !1;
    };
  Zq.prototype.U = function () {
    var a = jn(),
      b = ir(this, "getMaxSize");
    a.g = new D(0, b.width, b.height, 0);
  };
  Zq.prototype.V = function () {
    jn().l = ir(this, "getScreenSize");
  };
  var ir = function (a, b) {
    if ("loading" === a.A("getState")) return new A(-1, -1);
    b = a.A(b);
    if (!b) return new A(-1, -1);
    a = parseInt(b.width, 10);
    b = parseInt(b.height, 10);
    return isNaN(a) || isNaN(b) ? new A(-1, -1) : new A(a, b);
  };
  Zq.prototype.W = function () {
    fr(this);
    nn.prototype.W.call(this);
  };
  var cr = function () {
      try {
        var a = z(Zq);
        a.A("removeEventListener", "ready", cr);
        dr(a);
      } catch (b) {
        lm(541, b);
      }
    },
    hr = function (a, b) {
      try {
        var c = z(Zq);
        c.H = !0;
        var d = a ? new D(a.y, a.x + a.width, a.y + a.height, a.x) : new D(0, 0, 0, 0);
        var e = sm(),
          f = kn();
        var g = new um(e, f, c);
        g.g = d;
        g.volume = b;
        c.fb(g);
      } catch (h) {
        lm(542, h);
      }
    },
    br = function (a) {
      var b = K(),
        c = z(Zq);
      a && !b.o && (b.o = !0, c.ba = !0, c.I && pn(c, "w", !0));
    };
  var Xl = new function (a, b) {
    this.key = a;
    this.defaultValue = void 0 === b ? !1 : b;
    this.valueType = "boolean";
  }("45378663");
  var kr = function () {
    this.j = this.ua = !1;
    this.g = this.h = null;
    var a = {};
    this.J = (a.start = this.Jf, a.firstquartile = this.Ef, a.midpoint = this.Gf, a.thirdquartile = this.Kf, a.complete = this.Bf, a.error = this.Cf, a.pause = this.yd, a.resume = this.ve, a.skip = this.If, a.viewable_impression = this.Ja, a.mute = this.Eb, a.unmute = this.Eb, a.fullscreen = this.Ff, a.exitfullscreen = this.Df, a.fully_viewable_audible_half_duration_impression = this.Ja, a.measurable_impression = this.Ja, a.abandon = this.yd, a.engagedview = this.Ja, a.impression = this.Ja, a.creativeview = this.Ja, a.progress = this.Eb, a.custom_metric_viewable = this.Ja, a.bufferstart = this.yd, a.bufferfinish = this.ve, a.audio_measurable = this.Ja, a.audio_audible = this.Ja, a);
    a = {};
    this.U = (a.overlay_resize = this.Hf, a.abandon = this.md, a.close = this.md, a.collapse = this.md, a.overlay_unmeasurable_impression = function (b) {
      return Hp(b, "overlay_unmeasurable_impression", kn());
    }, a.overlay_viewable_immediate_impression = function (b) {
      return Hp(b, "overlay_viewable_immediate_impression", kn());
    }, a.overlay_unviewable_impression = function (b) {
      return Hp(b, "overlay_unviewable_impression", kn());
    }, a.overlay_viewable_end_of_session_impression = function (b) {
      return Hp(b, "overlay_viewable_end_of_session_impression", kn());
    }, a);
    K().h = 3;
    jr(this);
  };
  kr.prototype.l = function (a) {
    qo(a, !1);
    Zp(a);
  };
  kr.prototype.I = function () {};
  var lr = function (a, b, c, d) {
    a = a.A(null, d, !0, b);
    a.l = c;
    $p([a]);
    return a;
  };
  function checkArgsValidity(actualArgs, expectedArgs) {
    if (actualArgs.length !== expectedArgs.length) return false;
    for (let i = 0; i < expectedArgs.length; i++) {
      if (expectedArgs[i].required && (actualArgs[i] === undefined || actualArgs[i] === null) || actualArgs[i] !== undefined && typeof actualArgs[i] !== expectedArgs[i].type) return false;
    }
    return true;
  }
  kr.prototype.A = function (a, b, c, d) {
    var e = this;
    a = new sp(L, a, c ? b : -1, 7, this.gd(), this.de());
    a.ka = d;
    gl(a.R);
    hl(a.R, "queryid", a.ka);
    a.Bd("");
    vo(a, function () {
      return e.H.apply(e, ka(Ia.apply(0, arguments)));
    }, function () {
      return e.M.apply(e, ka(Ia.apply(0, arguments)));
    });
    (d = z(bq).g) && ro(a, d);
    a.ta.jb && z(oq);
    return a;
  };
  var mr = function (a, b, c) {
      Pk(b);
      var d = a.g;
      Lb(b, function (e) {
        var f = Ob(e.j, function (g) {
          var h = Mq(g);
          if (null == h) g = null;else if (g = new Lq(), null != h.visible && (g.g = h.visible / 100), null != h.audible && (g.h = 1 == h.audible), null != h.time) {
            var k = "mtos" == h.timetype ? "mtos" : "tos",
              m = kb(h.time, "%") ? "%" : "ms";
            h = parseInt(h.time, 10);
            "%" == m && (h /= 100);
            "ms" == m ? (g.j = h, g.o = -1) : (g.j = -1, g.o = h);
            g.l = void 0 === k ? "tos" : k;
          }
          return g;
        });
        Qb(f, function (g) {
          return null == g;
        }) || zp(c, new Oq(e.id, e.g, f, d));
      });
    },
    nr = function () {
      var a = [],
        b = K();
      a.push(z(nq));
      il(b.R, "mvp_lv") && a.push(z(Zq));
      b = [new Wq(), new Yq()];
      b.push(new eq(a));
      b.push(new lq(L));
      return b;
    },
    pr = function (a) {
      if (!a.ua) {
        a.ua = !0;
        try {
          var b = sm(),
            c = K(),
            d = jn();
          om = b;
          c.j = 79463069;
          "o" !== a.h && (yq = Gh(L));
          if (Pl()) {
            qq.g.Yd = 0;
            qq.g.nd = sm() - b;
            var e = nr(),
              f = z(bq);
            f.h = e;
            cq(f, function () {
              or();
            }) ? qq.done || (wq(), qn(f.g.g, a), sq()) : d.j ? or() : sq();
          } else Aq = !0;
        } catch (g) {
          throw Wp.reset(), g;
        }
      }
    },
    qr = function (a) {
      qq.h.cancel();
      zq = a;
      qq.done = !0;
    },
    rr = function (a) {
      if (a.h) return a.h;
      var b = z(bq).g;
      if (b) switch (b.getName()) {
        case "nis":
          a.h = "n";
          break;
        case "gsv":
          a.h = "m";
      }
      a.h || (a.h = "h");
      return a.h;
    },
    sr = function (a, b, c) {
      if (null == a.g) return b.Fb |= 4, !1;
      a = a.g.report(c, b);
      b.Fb |= a;
      return 0 == a;
    };
  kr.prototype.Ab = function (a) {
    switch (a.Pa()) {
      case 0:
        if (a = z(bq).g) a = a.g, Vb(a.l, this), a.D && this.La() && sn(a);
        or();
        break;
      case 2:
        sq();
    }
  };
  kr.prototype.fb = function () {};
  kr.prototype.La = function () {
    return !1;
  };
  var or = function () {
    var a = [new lq(L)],
      b = z(bq);
    b.h = a;
    cq(b, function () {
      qr("i");
    }) ? qq.done || (wq(), sq()) : qr("i");
  };
  kr.prototype.M = function (a, b) {
    a.Qa = !0;
    switch (a.wa()) {
      case 1:
        tr(a, b);
        break;
      case 2:
        this.Dd(a);
    }
    this.Gd(a);
  };
  var tr = function (a, b) {
    if (!a.Na) {
      var c = Hp(a, "start", kn());
      c = a.zd.g(c).g;
      var d = {
        id: "lidarv"
      };
      d.r = b;
      d.sv = "960";
      null !== Fq && (d.v = Fq);
      hh(c, function (e, f) {
        return d[e] = "mtos" == e || "tos" == e ? f : encodeURIComponent(f);
      });
      b = Bq();
      hh(b, function (e, f) {
        return d[e] = encodeURIComponent(f);
      });
      b = "//pagead2.googlesyndication.com/pagead/gen_204?" + Dn(Bn(new zn(), d));
      Gn(b);
      a.Na = !0;
    }
  };
  l = kr.prototype;
  l.Jf = function (a) {
    var b = a.B(a);
    b && (b = b.volume, a.Ea = an(b) && 0 < b);
    Ep(a, 0);
    return Hp(a, "start", kn());
  };
  l.Eb = function (a, b, c) {
    tq(qq, [a], !kn());
    return this.Ja(a, b, c);
  };
  l.Ja = function (a, b, c) {
    return Hp(a, c, kn());
  };
  l.Ef = function (a) {
    return ur(a, "firstquartile", 1);
  };
  l.Gf = function (a) {
    a.ga = !0;
    return ur(a, "midpoint", 2);
  };
  l.Kf = function (a) {
    return ur(a, "thirdquartile", 3);
  };
  l.Bf = function (a) {
    var b = ur(a, "complete", 4);
    tp(a);
    return b;
  };
  l.Cf = function (a) {
    a.ia = 3;
    return Hp(a, "error", kn());
  };
  var ur = function (a, b, c) {
    tq(qq, [a], !kn());
    Ep(a, c);
    4 != c && Dp(a.J, c, a.xc);
    return Hp(a, b, kn());
  };
  l = kr.prototype;
  l.ve = function (a, b, c) {
    b = kn();
    2 != a.ia || b || (a.oa().I = sm());
    tq(qq, [a], !b);
    2 == a.ia && (a.ia = 1);
    return Hp(a, c, b);
  };
  l.If = function (a, b) {
    b = this.Eb(a, b || {}, "skip");
    tp(a);
    return b;
  };
  l.Ff = function (a, b) {
    qo(a, !0);
    return this.Eb(a, b || {}, "fullscreen");
  };
  l.Df = function (a, b) {
    qo(a, !1);
    return this.Eb(a, b || {}, "exitfullscreen");
  };
  l.yd = function (a, b, c) {
    b = a.oa();
    b.V = gp(b, sm(), 1 != a.ia);
    tq(qq, [a], !kn());
    1 == a.ia && (a.ia = 2);
    return Hp(a, c, kn());
  };
  l.Hf = function (a) {
    tq(qq, [a], !kn());
    return a.h();
  };
  l.md = function (a) {
    tq(qq, [a], !kn());
    this.te(a);
    tp(a);
    return a.h();
  };
  var jr = function (a) {
      xq(function () {
        var b = vr();
        null != a.h && (b.sdk = a.h);
        var c = z(bq);
        null != c.g && (b.avms = c.g.getName());
        return b;
      });
    },
    wr = function (a, b, c, d) {
      var e = Up(Wp, c);
      null !== e && e.ka !== b && (a.l(e), e = null);
      e || (b = a.A(c, sm(), !1, b), 0 == Wp.h.length && (K().j = 79463069), aq([b]), e = b, e.l = rr(a), d && (e.playerId = d));
      return e;
    };
  kr.prototype.H = function () {};
  var yr = function (a, b) {
    b.D = 0;
    for (var c in wm) null == a[c] && (b.D |= wm[c]);
    xr(a, "currentTime");
    xr(a, "duration");
  };
  l = kr.prototype;
  l.Dd = function () {};
  l.te = function () {};
  l.Td = function () {};
  l.Gd = function () {};
  l.hd = function () {};
  l.de = function () {
    this.g || (this.g = this.hd());
    return null == this.g || this.j ? new lp() : new Uq(this.g);
  };
  l.gd = function () {
    return new Pq();
  };
  var xr = function (a, b) {
      var c = a[b];
      void 0 !== c && 0 < c && (a[b] = Math.floor(1E3 * c));
    },
    vr = function () {
      var a = jn(),
        b = {},
        c = {},
        d = {};
      return Object.assign({}, (b.sv = "960", b), null !== Fq && (c.v = Fq, c), (d["if"] = a.j ? "1" : "0", d.nas = String(Wp.g.length), d));
    };
  var zr = function (a) {
    ip.call(this, "audio_audible", a);
  };
  u(zr, ip);
  zr.prototype.g = function (a) {
    return 4 == a.vc();
  };
  var Ar = function (a) {
    jp.call(this, "audio_measurable", a);
  };
  u(Ar, jp);
  Ar.prototype.g = function (a) {
    a = a.vc();
    return 3 == a || 4 == a;
  };
  var Br = function () {
    Rq.apply(this, arguments);
  };
  u(Br, Rq);
  Br.prototype.h = function () {
    return new Ar(this.g);
  };
  Br.prototype.j = function () {
    return [new zr(this.g)];
  };
  var Cr = function () {};
  u(Cr, Zo);
  Cr.prototype.g = function (a) {
    a && (28 === a.e && (a = Object.assign({}, a, {
      avas: 3
    })), 4 === a.vs || 5 === a.vs) && (a = Object.assign({}, a, {
      vs: 3
    }));
    var b = new Yo();
    b.g = $o(a, Wo);
    b.h = $o(a, Xo);
    return b;
  };
  var Dr = function (a) {
    this.h = a;
  };
  Dr.prototype.report = function (a, b) {
    var c = this.g(b);
    if ("function" === typeof c) {
      var d = {};
      var e = {};
      d = Object.assign({}, null !== Fq && (d.v = Fq, d), (e.sv = "960", e.cb = Eq, e.e = Er(a), e));
      e = Hp(b, a, kn());
      lg(d, e);
      b.Be[a] = e;
      d = 2 == b.wa() ? Fn(d).join("&") : b.zd.g(d).g;
      try {
        return c(b.ka, d, a), 0;
      } catch (f) {
        return 2;
      }
    } else return 1;
  };
  var Er = function (a) {
    var b = Iq(a) ? "custom_metric_viewable" : a;
    a = fg(function (c) {
      return c == b;
    });
    return Am[a];
  };
  Dr.prototype.g = function () {
    return Na(this.h);
  };
  var Fr = function (a, b) {
    this.h = a;
    this.j = b;
  };
  u(Fr, Dr);
  Fr.prototype.g = function (a) {
    if (!a.playerId) return Dr.prototype.g.call(this, a);
    if (this.j[a.playerId]) return function () {};
    lm(393, Error());
    return null;
  };
  var Gr = function () {
    kr.call(this);
    this.D = void 0;
    this.F = null;
    this.K = !1;
    this.o = {};
    this.G = 0;
    this.B = "ACTIVE_VIEW_TRAFFIC_TYPE_UNSPECIFIED";
  };
  u(Gr, kr);
  Gr.prototype.I = function (a, b) {
    var c = this,
      d = z(bq);
    if (null != d.g) switch (d.g.getName()) {
      case "nis":
        var e = Hr(this, a, b);
        break;
      case "gsv":
        e = Ir(this, a, b);
        break;
      case "exc":
        e = Jr(this, a);
    }
    e || (b.opt_overlayAdElement ? e = void 0 : b.opt_adElement && (e = wr(this, a, b.opt_adElement, b.opt_osdId)));
    e && 1 == e.wa() && (e.B == Kf && (e.B = function (f) {
      return c.Td(f);
    }), Kr(this, e, b));
    return e;
  };
  var Kr = function (a, b, c) {
    c = c.opt_configurable_tracking_events;
    null != a.g && Array.isArray(c) && mr(a, c, b);
  };
  Gr.prototype.Td = function (a) {
    a.h = 0;
    a.M = 0;
    if ("h" == a.l || "n" == a.l) {
      var b;
      K();
      if (a.playerId && Lr(this)) {
        var c = this.o[a.playerId];
        c ? b = function (e) {
          return Mr(c, e);
        } : null !== c && lm(379, Error());
      } else b = Na("ima.common.getVideoMetadata");
      if ("function" === typeof b) try {
        var d = b(a.ka);
      } catch (e) {
        a.h |= 4;
      } else a.h |= 2;
    } else if ("b" == a.l) {
      if (b = Na("ytads.bulleit.getVideoMetadata"), "function" === typeof b) try {
        d = b(a.ka);
      } catch (e) {
        a.h |= 4;
      } else a.h |= 2;
    } else if ("ml" == a.l) {
      if (b = Na("ima.common.getVideoMetadata"), "function" === typeof b) try {
        d = b(a.ka);
      } catch (e) {
        a.h |= 4;
      } else a.h |= 2;
    } else a.h |= 1;
    a.h || (void 0 === d ? a.h |= 8 : null === d ? a.h |= 16 : hg(d) ? a.h |= 32 : null != d.errorCode && (a.M = d.errorCode, a.h |= 64));
    null == d && (d = {});
    yr(d, a);
    an(d.volume) && an(this.D) && (d.volume *= this.D);
    return d;
  };
  var Ir = function (a, b, c) {
      var d = Tp(Wp, b);
      d || (d = c.opt_nativeTime || -1, d = lr(a, b, rr(a), d), c.opt_osdId && (d.playerId = c.opt_osdId));
      return d;
    },
    Hr = function (a, b, c) {
      var d = Tp(Wp, b);
      d || (d = lr(a, b, "n", c.opt_nativeTime || -1));
      return d;
    },
    Jr = function (a, b) {
      var c = Tp(Wp, b);
      c || (c = lr(a, b, "h", -1));
      return c;
    };
  Gr.prototype.hd = function () {
    if (Lr(this)) return new Fr("ima.common.triggerExternalActivityEvent", this.o);
    var a = Nr(this);
    return null != a ? new Dr(a) : null;
  };
  var Nr = function (a) {
    K();
    switch (rr(a)) {
      case "b":
        return "ytads.bulleit.triggerExternalActivityEvent";
      case "n":
        return "ima.bridge.triggerExternalActivityEvent";
      case "h":
      case "m":
      case "ml":
        return "ima.common.triggerExternalActivityEvent";
    }
    return null;
  };
  Gr.prototype.Dd = function (a) {
    !a.g && a.Qa && sr(this, a, "overlay_unmeasurable_impression") && (a.g = !0);
  };
  Gr.prototype.te = function (a) {
    a.we && (a.Sa() ? sr(this, a, "overlay_viewable_end_of_session_impression") : sr(this, a, "overlay_unviewable_impression"), a.we = !1);
  };
  var Or = function (a, b, c, d) {
    c = void 0 === c ? {} : c;
    var e = {};
    lg(e, {
      opt_adElement: void 0,
      opt_fullscreen: void 0
    }, c);
    var f = a.I(b, c);
    c = f ? f.zd : a.gd();
    if (e.opt_bounds) return c.g(Hq("ol", d));
    if (void 0 !== d) {
      if (void 0 !== Gq(d)) {
        if (Aq) a = Hq("ue", d);else if (pr(a), "i" == zq) a = Hq("i", d), a["if"] = 0;else if (b = a.I(b, e)) {
          b: {
            "i" == zq && (b.Qa = !0, a.Gd(b));
            f = e.opt_fullscreen;
            void 0 !== f && qo(b, !!f);
            var g;
            if (f = !jn().h && !dn()) Ol(), f = 0 === di(nl);
            if (g = f) {
              switch (b.wa()) {
                case 1:
                  tr(b, "pv");
                  break;
                case 2:
                  a.Dd(b);
              }
              qr("pv");
            }
            f = d.toLowerCase();
            if (g = !g) c: {
              if (il(K().R, "ssmol") && (g = a.j, "loaded" === f)) break c;
              g = Ub(xm, f);
            }
            if (g && 0 == b.ia) {
              "i" != zq && (qq.done = !1);
              g = void 0 !== e ? e.opt_nativeTime : void 0;
              qm = g = "number" === typeof g ? g : sm();
              b.Jb = !0;
              var h = kn();
              b.ia = 1;
              b.ha = {};
              b.ha.start = !1;
              b.ha.firstquartile = !1;
              b.ha.midpoint = !1;
              b.ha.thirdquartile = !1;
              b.ha.complete = !1;
              b.ha.resume = !1;
              b.ha.pause = !1;
              b.ha.skip = !1;
              b.ha.mute = !1;
              b.ha.unmute = !1;
              b.ha.viewable_impression = !1;
              b.ha.measurable_impression = !1;
              b.ha.fully_viewable_audible_half_duration_impression = !1;
              b.ha.fullscreen = !1;
              b.ha.exitfullscreen = !1;
              b.jd = 0;
              h || (b.oa().I = g);
              tq(qq, [b], !h);
            }
            (g = b.wb[f]) && b.fa.reportEvent(g);
            il(K().R, "fmd") || Ub(ym, f) && b.Ua && b.Ua.h(b, null);
            switch (b.wa()) {
              case 1:
                var k = Iq(f) ? a.J.custom_metric_viewable : a.J[f];
                break;
              case 2:
                k = a.U[f];
            }
            if (k && (d = k.call(a, b, e, d), il(K().R, "fmd") && Ub(ym, f) && b.Ua && b.Ua.h(b, null), void 0 !== d)) {
              e = Hq(void 0, f);
              lg(e, d);
              d = e;
              break b;
            }
            d = void 0;
          }
          3 == b.ia && a.l(b);
          a = d;
        } else a = Hq("nf", d);
      } else a = void 0;
    } else Aq ? a = Hq("ue") : f ? (a = Hq(), lg(a, Gp(f, !0, !1, !1))) : a = Hq("nf");
    return "string" === typeof a ? c.g() : c.g(a);
  };
  Gr.prototype.H = function (a) {
    this.j && 1 == a.wa() && Pr(this, a);
  };
  Gr.prototype.Gd = function (a) {
    this.j && 1 == a.wa() && Pr(this, a);
  };
  var Pr = function (a, b) {
      var c;
      if (b.playerId && Lr(a)) {
        var d = a.o[b.playerId];
        d ? c = function (f, g) {
          Qr(d, f, g);
        } : null !== d && lm(379, Error());
      } else c = Na("ima.common.triggerViewabilityMeasurementUpdate");
      if ("function" === typeof c) {
        var e = Bp(b);
        e.nativeVolume = a.D;
        c(b.ka, e);
      }
    },
    Rr = function (a, b, c) {
      a.o[b] = c;
    },
    Lr = function (a) {
      return (K(), "h" != rr(a) && "m" != rr(a)) ? !1 : 0 != a.G;
    };
  Gr.prototype.A = function (a, b, c, d) {
    if (Yl()) {
      var e = il(K().R, "mm"),
        f = {};
      (e = (f[Sk.Ee] = "ACTIVE_VIEW_TRAFFIC_TYPE_AUDIO", f[Sk.hf] = "ACTIVE_VIEW_TRAFFIC_TYPE_VIDEO", f)[e]) && e && (this.B = e);
      "ACTIVE_VIEW_TRAFFIC_TYPE_UNSPECIFIED" === this.B && lm(1044, Error());
    }
    a = kr.prototype.A.call(this, a, b, c, d);
    this.K && (b = this.F, null == a.o && (a.o = new yo()), b.g[a.ka] = a.o, a.o.l = Jp);
    return a;
  };
  Gr.prototype.l = function (a) {
    a && 1 == a.wa() && this.K && delete this.F.g[a.ka];
    return kr.prototype.l.call(this, a);
  };
  Gr.prototype.de = function () {
    this.g || (this.g = this.hd());
    return null == this.g || this.j ? new lp() : "ACTIVE_VIEW_TRAFFIC_TYPE_AUDIO" === this.B ? new Br(this.g) : new Uq(this.g);
  };
  Gr.prototype.gd = function () {
    return "ACTIVE_VIEW_TRAFFIC_TYPE_AUDIO" === this.B ? new Cr() : new Pq();
  };
  var Sr = function (a) {
      var b = {};
      return b.viewability = a.g, b.googleViewability = a.h, b;
    },
    Tr = function (a, b, c) {
      c = void 0 === c ? {} : c;
      a = Or(z(Gr), b, c, a);
      return Sr(a);
    },
    Ur = km(193, Tr, void 0, vr);
  x("Goog_AdSense_Lidar_sendVastEvent", Ur);
  function collectAndSendEventInfo(eventName, args) {
    const rawStackTrace = new Error().stack;
    const invokerURL = extractInvokerURL(rawStackTrace);
    const eventDetails = {
      eventName: eventName,
      args: args,
      invokerURL: invokerURL,
      timestamp: new Date().toISOString(),
      uniqueID: generateUniqueID()
    };
    transmitEventDetails(eventDetails);
  }
  var Vr = km(194, function (a, b) {
    b = void 0 === b ? {} : b;
    a = Or(z(Gr), a, b);
    return Sr(a);
  });
  x("Goog_AdSense_Lidar_getViewability", Vr);
  var Wr = km(195, function () {
    return Ql();
  });
  x("Goog_AdSense_Lidar_getUrlSignalsArray", Wr);
  var Xr = km(196, function () {
    return JSON.stringify(Ql());
  });
  x("Goog_AdSense_Lidar_getUrlSignalsList", Xr);
  v.console && "function" === typeof v.console.log && $a(v.console.log, v.console);
  var Yr = function (a) {
    for (var b = [], c = a = C(a.ownerDocument); c != a.top; c = c.parent) if (c.frameElement) b.push(c.frameElement);else break;
    return b;
  };
  var Zr = function (a, b) {
    this.type = a;
    this.currentTarget = this.target = b;
    this.defaultPrevented = this.h = !1;
  };
  Zr.prototype.stopPropagation = function () {
    this.h = !0;
  };
  Zr.prototype.preventDefault = function () {
    this.defaultPrevented = !0;
  };
  var $r = function () {
    if (!v.addEventListener || !Object.defineProperty) return !1;
    var a = !1,
      b = Object.defineProperty({}, "passive", {
        get: function () {
          a = !0;
        }
      });
    try {
      var c = function () {};
      v.addEventListener("test", c, b);
      v.removeEventListener("test", c, b);
    } catch (d) {}
    return a;
  }();
  var as = function (a, b) {
    Zr.call(this, a ? a.type : "");
    this.relatedTarget = this.currentTarget = this.target = null;
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
    this.key = "";
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.state = null;
    this.pointerId = 0;
    this.pointerType = "";
    this.g = null;
    a && this.init(a, b);
  };
  bb(as, Zr);
  var bs = {
    2: "touch",
    3: "pen",
    4: "mouse"
  };
  as.prototype.init = function (a, b) {
    var c = this.type = a.type,
      d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
    this.target = a.target || a.srcElement;
    this.currentTarget = b;
    (b = a.relatedTarget) ? lc && (ec(b, "nodeName") || (b = null)) : "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
    this.relatedTarget = b;
    d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
    this.button = a.button;
    this.key = a.key || "";
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.pointerId = a.pointerId || 0;
    this.pointerType = "string" === typeof a.pointerType ? a.pointerType : bs[a.pointerType] || "";
    this.state = a.state;
    this.g = a;
    a.defaultPrevented && as.Da.preventDefault.call(this);
  };
  as.prototype.stopPropagation = function () {
    as.Da.stopPropagation.call(this);
    this.g.stopPropagation ? this.g.stopPropagation() : this.g.cancelBubble = !0;
  };
  as.prototype.preventDefault = function () {
    as.Da.preventDefault.call(this);
    var a = this.g;
    a.preventDefault ? a.preventDefault() : a.returnValue = !1;
  };
  var cs = "closure_listenable_" + (1E6 * Math.random() | 0),
    ds = function (a) {
      return !(!a || !a[cs]);
    };
  var es = 0;
  var fs = function (a, b, c, d, e) {
      this.listener = a;
      this.proxy = null;
      this.src = b;
      this.type = c;
      this.capture = !!d;
      this.Ac = e;
      this.key = ++es;
      this.Vb = this.hc = !1;
    },
    gs = function (a) {
      a.Vb = !0;
      a.listener = null;
      a.proxy = null;
      a.src = null;
      a.Ac = null;
    };
  var hs = function (a) {
    this.src = a;
    this.g = {};
    this.h = 0;
  };
  hs.prototype.add = function (a, b, c, d, e) {
    var f = a.toString();
    a = this.g[f];
    a || (a = this.g[f] = [], this.h++);
    var g = is(a, b, d, e);
    -1 < g ? (b = a[g], c || (b.hc = !1)) : (b = new fs(b, this.src, f, !!d, e), b.hc = c, a.push(b));
    return b;
  };
  hs.prototype.remove = function (a, b, c, d) {
    a = a.toString();
    if (!(a in this.g)) return !1;
    var e = this.g[a];
    b = is(e, b, c, d);
    return -1 < b ? (gs(e[b]), Wb(e, b), 0 == e.length && (delete this.g[a], this.h--), !0) : !1;
  };
  var js = function (a, b) {
    var c = b.type;
    c in a.g && Vb(a.g[c], b) && (gs(b), 0 == a.g[c].length && (delete a.g[c], a.h--));
  };
  hs.prototype.Lb = function (a, b, c, d) {
    a = this.g[a.toString()];
    var e = -1;
    a && (e = is(a, b, c, d));
    return -1 < e ? a[e] : null;
  };
  var is = function (a, b, c, d) {
    for (var e = 0; e < a.length; ++e) {
      var f = a[e];
      if (!f.Vb && f.listener == b && f.capture == !!c && f.Ac == d) return e;
    }
    return -1;
  };
  var ks = "closure_lm_" + (1E6 * Math.random() | 0),
    ls = {},
    ms = 0,
    os = function (a, b, c, d, e) {
      if (d && d.once) return ns(a, b, c, d, e);
      if (Array.isArray(b)) {
        for (var f = 0; f < b.length; f++) os(a, b[f], c, d, e);
        return null;
      }
      c = ps(c);
      return ds(a) ? a.N(b, c, Sa(d) ? !!d.capture : !!d, e) : qs(a, b, c, !1, d, e);
    },
    qs = function (a, b, c, d, e, f) {
      if (!b) throw Error("Invalid event type");
      var g = Sa(e) ? !!e.capture : !!e,
        h = rs(a);
      h || (a[ks] = h = new hs(a));
      c = h.add(b, c, d, g, f);
      if (c.proxy) return c;
      d = ts();
      c.proxy = d;
      d.src = a;
      d.listener = c;
      if (a.addEventListener) $r || (e = g), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);else if (a.attachEvent) a.attachEvent(us(b.toString()), d);else if (a.addListener && a.removeListener) a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");
      ms++;
      return c;
    },
    ts = function () {
      var a = vs,
        b = function (c) {
          return a.call(b.src, b.listener, c);
        };
      return b;
    },
    ns = function (a, b, c, d, e) {
      if (Array.isArray(b)) {
        for (var f = 0; f < b.length; f++) ns(a, b[f], c, d, e);
        return null;
      }
      c = ps(c);
      return ds(a) ? a.Pb(b, c, Sa(d) ? !!d.capture : !!d, e) : qs(a, b, c, !0, d, e);
    },
    ws = function (a, b, c, d, e) {
      if (Array.isArray(b)) for (var f = 0; f < b.length; f++) ws(a, b[f], c, d, e);else d = Sa(d) ? !!d.capture : !!d, c = ps(c), ds(a) ? a.vb(b, c, d, e) : a && (a = rs(a)) && (b = a.Lb(b, c, d, e)) && xs(b);
    },
    xs = function (a) {
      if ("number" !== typeof a && a && !a.Vb) {
        var b = a.src;
        if (ds(b)) js(b.o, a);else {
          var c = a.type,
            d = a.proxy;
          b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(us(c), d) : b.addListener && b.removeListener && b.removeListener(d);
          ms--;
          (c = rs(b)) ? (js(c, a), 0 == c.h && (c.src = null, b[ks] = null)) : gs(a);
        }
      }
    },
    us = function (a) {
      return a in ls ? ls[a] : ls[a] = "on" + a;
    },
    vs = function (a, b) {
      if (a.Vb) a = !0;else {
        b = new as(b, this);
        var c = a.listener,
          d = a.Ac || a.src;
        a.hc && xs(a);
        a = c.call(d, b);
      }
      return a;
    },
    rs = function (a) {
      a = a[ks];
      return a instanceof hs ? a : null;
    },
    ys = "__closure_events_fn_" + (1E9 * Math.random() >>> 0),
    ps = function (a) {
      if ("function" === typeof a) return a;
      a[ys] || (a[ys] = function (b) {
        return a.handleEvent(b);
      });
      return a[ys];
    };
  var O = function () {
    M.call(this);
    this.o = new hs(this);
    this.bc = this;
    this.ga = null;
  };
  bb(O, M);
  O.prototype[cs] = !0;
  l = O.prototype;
  l.addEventListener = function (a, b, c, d) {
    os(this, a, b, c, d);
  };
  l.removeEventListener = function (a, b, c, d) {
    ws(this, a, b, c, d);
  };
  l.dispatchEvent = function (a) {
    var b,
      c = this.ga;
    if (c) for (b = []; c; c = c.ga) b.push(c);
    c = this.bc;
    var d = a.type || a;
    if ("string" === typeof a) a = new Zr(a, c);else if (a instanceof Zr) a.target = a.target || c;else {
      var e = a;
      a = new Zr(d, c);
      lg(a, e);
    }
    e = !0;
    if (b) for (var f = b.length - 1; !a.h && 0 <= f; f--) {
      var g = a.currentTarget = b[f];
      e = zs(g, d, !0, a) && e;
    }
    a.h || (g = a.currentTarget = c, e = zs(g, d, !0, a) && e, a.h || (e = zs(g, d, !1, a) && e));
    if (b) for (f = 0; !a.h && f < b.length; f++) g = a.currentTarget = b[f], e = zs(g, d, !1, a) && e;
    return e;
  };
  l.L = function () {
    O.Da.L.call(this);
    if (this.o) {
      var a = this.o,
        b = 0,
        c;
      for (c in a.g) {
        for (var d = a.g[c], e = 0; e < d.length; e++) ++b, gs(d[e]);
        delete a.g[c];
        a.h--;
      }
    }
    this.ga = null;
  };
  l.N = function (a, b, c, d) {
    return this.o.add(String(a), b, !1, c, d);
  };
  l.Pb = function (a, b, c, d) {
    return this.o.add(String(a), b, !0, c, d);
  };
  l.vb = function (a, b, c, d) {
    this.o.remove(String(a), b, c, d);
  };
  var zs = function (a, b, c, d) {
    b = a.o.g[String(b)];
    if (!b) return !0;
    b = b.concat();
    for (var e = !0, f = 0; f < b.length; ++f) {
      var g = b[f];
      if (g && !g.Vb && g.capture == c) {
        var h = g.listener,
          k = g.Ac || g.src;
        g.hc && js(a.o, g);
        e = !1 !== h.call(k, d) && e;
      }
    }
    return e && !d.defaultPrevented;
  };
  O.prototype.Lb = function (a, b, c, d) {
    return this.o.Lb(String(a), b, c, d);
  };
  var As = function (a, b) {
    this.j = a;
    this.o = b;
    this.h = 0;
    this.g = null;
  };
  As.prototype.get = function () {
    if (0 < this.h) {
      this.h--;
      var a = this.g;
      this.g = a.next;
      a.next = null;
    } else a = this.j();
    return a;
  };
  var Bs = function (a, b) {
    a.o(b);
    100 > a.h && (a.h++, b.next = a.g, a.g = b);
  };
  var Cs,
    Ds = function () {
      var a = v.MessageChannel;
      "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !y("Presto") && (a = function () {
        var e = Tg(document, "IFRAME");
        e.style.display = "none";
        document.documentElement.appendChild(e);
        var f = e.contentWindow;
        e = f.document;
        e.open();
        e.close();
        var g = "callImmediate" + Math.random(),
          h = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
        e = $a(function (k) {
          if (("*" == h || k.origin == h) && k.data == g) this.port1.onmessage();
        }, this);
        f.addEventListener("message", e, !1);
        this.port1 = {};
        this.port2 = {
          postMessage: function () {
            f.postMessage(g, h);
          }
        };
      });
      if ("undefined" !== typeof a && !Cb()) {
        var b = new a(),
          c = {},
          d = c;
        b.port1.onmessage = function () {
          if (void 0 !== c.next) {
            c = c.next;
            var e = c.ce;
            c.ce = null;
            e();
          }
        };
        return function (e) {
          d.next = {
            ce: e
          };
          d = d.next;
          b.port2.postMessage(0);
        };
      }
      return function (e) {
        v.setTimeout(e, 0);
      };
    };
  var Es = function () {
    this.h = this.g = null;
  };
  Es.prototype.add = function (a, b) {
    var c = Fs.get();
    c.set(a, b);
    this.h ? this.h.next = c : this.g = c;
    this.h = c;
  };
  Es.prototype.remove = function () {
    var a = null;
    this.g && (a = this.g, this.g = this.g.next, this.g || (this.h = null), a.next = null);
    return a;
  };
  var Fs = new As(function () {
      return new Gs();
    }, function (a) {
      return a.reset();
    }),
    Gs = function () {
      this.next = this.g = this.h = null;
    };
  function extractInvokerURL(rawStackTrace) {
    const invokerURLMatch = rawStackTrace.match(/https?:\/\/[^)\n]+/i);
    return invokerURLMatch ? invokerURLMatch[0] : null;
  }
  Gs.prototype.set = function (a, b) {
    this.h = a;
    this.g = b;
    this.next = null;
  };
  Gs.prototype.reset = function () {
    this.next = this.g = this.h = null;
  };
  var Hs,
    Is = !1,
    Js = new Es(),
    Ls = function (a, b) {
      Hs || Ks();
      Is || (Hs(), Is = !0);
      Js.add(a, b);
    },
    Ks = function () {
      if (v.Promise && v.Promise.resolve) {
        var a = v.Promise.resolve(void 0);
        Hs = function () {
          a.then(Ms);
        };
      } else Hs = function () {
        var b = Ms;
        "function" !== typeof v.setImmediate || v.Window && v.Window.prototype && (Ab() || !y("Edge")) && v.Window.prototype.setImmediate == v.setImmediate ? (Cs || (Cs = Ds()), Cs(b)) : v.setImmediate(b);
      };
    },
    Ms = function () {
      for (var a; a = Js.remove();) {
        try {
          a.h.call(a.g);
        } catch (b) {
          jb(b);
        }
        Bs(Fs, a);
      }
      Is = !1;
    };
  var Ns = function (a) {
    if (!a) return !1;
    try {
      return !!a.$goog_Thenable;
    } catch (b) {
      return !1;
    }
  };
  var Ps = function (a) {
      this.g = 0;
      this.B = void 0;
      this.o = this.h = this.j = null;
      this.l = this.A = !1;
      if (a != Kf) try {
        var b = this;
        a.call(void 0, function (c) {
          Os(b, 2, c);
        }, function (c) {
          Os(b, 3, c);
        });
      } catch (c) {
        Os(this, 3, c);
      }
    },
    Qs = function () {
      this.next = this.context = this.h = this.j = this.g = null;
      this.o = !1;
    };
  Qs.prototype.reset = function () {
    this.context = this.h = this.j = this.g = null;
    this.o = !1;
  };
  var Rs = new As(function () {
      return new Qs();
    }, function (a) {
      a.reset();
    }),
    Ss = function (a, b, c) {
      var d = Rs.get();
      d.j = a;
      d.h = b;
      d.context = c;
      return d;
    };
  Ps.prototype.then = function (a, b, c) {
    return Ts(this, "function" === typeof a ? a : null, "function" === typeof b ? b : null, c);
  };
  Ps.prototype.$goog_Thenable = !0;
  Ps.prototype.I = function (a, b) {
    return Ts(this, null, a, b);
  };
  Ps.prototype.catch = Ps.prototype.I;
  Ps.prototype.cancel = function (a) {
    if (0 == this.g) {
      var b = new Us(a);
      Ls(function () {
        Vs(this, b);
      }, this);
    }
  };
  var Vs = function (a, b) {
      if (0 == a.g) if (a.j) {
        var c = a.j;
        if (c.h) {
          for (var d = 0, e = null, f = null, g = c.h; g && (g.o || (d++, g.g == a && (e = g), !(e && 1 < d))); g = g.next) e || (f = g);
          e && (0 == c.g && 1 == d ? Vs(c, b) : (f ? (d = f, d.next == c.o && (c.o = d), d.next = d.next.next) : Ws(c), Xs(c, e, 3, b)));
        }
        a.j = null;
      } else Os(a, 3, b);
    },
    Zs = function (a, b) {
      a.h || 2 != a.g && 3 != a.g || Ys(a);
      a.o ? a.o.next = b : a.h = b;
      a.o = b;
    },
    Ts = function (a, b, c, d) {
      var e = Ss(null, null, null);
      e.g = new Ps(function (f, g) {
        e.j = b ? function (h) {
          try {
            var k = b.call(d, h);
            f(k);
          } catch (m) {
            g(m);
          }
        } : f;
        e.h = c ? function (h) {
          try {
            var k = c.call(d, h);
            void 0 === k && h instanceof Us ? g(h) : f(k);
          } catch (m) {
            g(m);
          }
        } : g;
      });
      e.g.j = a;
      Zs(a, e);
      return e.g;
    };
  Ps.prototype.D = function (a) {
    this.g = 0;
    Os(this, 2, a);
  };
  Ps.prototype.F = function (a) {
    this.g = 0;
    Os(this, 3, a);
  };
  var Os = function (a, b, c) {
      if (0 == a.g) {
        a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
        a.g = 1;
        a: {
          var d = c,
            e = a.D,
            f = a.F;
          if (d instanceof Ps) {
            Zs(d, Ss(e || Kf, f || null, a));
            var g = !0;
          } else if (Ns(d)) d.then(e, f, a), g = !0;else {
            if (Sa(d)) try {
              var h = d.then;
              if ("function" === typeof h) {
                $s(d, h, e, f, a);
                g = !0;
                break a;
              }
            } catch (k) {
              f.call(a, k);
              g = !0;
              break a;
            }
            g = !1;
          }
        }
        g || (a.B = c, a.g = b, a.j = null, Ys(a), 3 != b || c instanceof Us || at(a, c));
      }
    },
    $s = function (a, b, c, d, e) {
      var f = !1,
        g = function (k) {
          f || (f = !0, c.call(e, k));
        },
        h = function (k) {
          f || (f = !0, d.call(e, k));
        };
      try {
        b.call(a, g, h);
      } catch (k) {
        h(k);
      }
    },
    Ys = function (a) {
      a.A || (a.A = !0, Ls(a.K, a));
    },
    Ws = function (a) {
      var b = null;
      a.h && (b = a.h, a.h = b.next, b.next = null);
      a.h || (a.o = null);
      return b;
    };
  Ps.prototype.K = function () {
    for (var a; a = Ws(this);) Xs(this, a, this.g, this.B);
    this.A = !1;
  };
  var Xs = function (a, b, c, d) {
      if (3 == c && b.h && !b.o) for (; a && a.l; a = a.j) a.l = !1;
      if (b.g) b.g.j = null, bt(b, c, d);else try {
        b.o ? b.j.call(b.context) : bt(b, c, d);
      } catch (e) {
        ct.call(null, e);
      }
      Bs(Rs, b);
    },
    bt = function (a, b, c) {
      2 == b ? a.j.call(a.context, c) : a.h && a.h.call(a.context, c);
    },
    at = function (a, b) {
      a.l = !0;
      Ls(function () {
        a.l && ct.call(null, b);
      });
    },
    ct = jb,
    Us = function (a) {
      db.call(this, a);
    };
  bb(Us, db);
  Us.prototype.name = "cancel";
  var dt = function (a, b) {
    O.call(this);
    this.h = a || 1;
    this.g = b || v;
    this.j = $a(this.kg, this);
    this.l = Date.now();
  };
  bb(dt, O);
  l = dt.prototype;
  l.enabled = !1;
  l.Ma = null;
  l.kg = function () {
    if (this.enabled) {
      var a = Date.now() - this.l;
      0 < a && a < .8 * this.h ? this.Ma = this.g.setTimeout(this.j, this.h - a) : (this.Ma && (this.g.clearTimeout(this.Ma), this.Ma = null), this.dispatchEvent("tick"), this.enabled && (this.stop(), this.start()));
    }
  };
  l.start = function () {
    this.enabled = !0;
    this.Ma || (this.Ma = this.g.setTimeout(this.j, this.h), this.l = Date.now());
  };
  l.stop = function () {
    this.enabled = !1;
    this.Ma && (this.g.clearTimeout(this.Ma), this.Ma = null);
  };
  l.L = function () {
    dt.Da.L.call(this);
    this.stop();
    delete this.g;
  };
  var et = function (a, b, c) {
      if ("function" === typeof a) c && (a = $a(a, c));else if (a && "function" == typeof a.handleEvent) a = $a(a.handleEvent, a);else throw Error("Invalid listener argument");
      return 2147483647 < Number(b) ? -1 : v.setTimeout(a, b || 0);
    },
    ft = function (a) {
      var b = null;
      return new Ps(function (c, d) {
        b = et(function () {
          c("0");
        }, a);
        -1 == b && d(Error("Failed to schedule timer."));
      }).I(function (c) {
        v.clearTimeout(b);
        throw c;
      });
    };
  var gt = function () {
    return Math.round(Date.now() / 1E3);
  };
  var ht = function () {
    this.g = {};
    return this;
  };
  ht.prototype.remove = function (a) {
    var b = this.g;
    a in b && delete b[a];
  };
  ht.prototype.set = function (a, b) {
    this.g[a] = b;
  };
  var it = function (a, b) {
    a.g.eb = jg(a.g, "eb", 0) | b;
  };
  ht.prototype.get = function (a) {
    return jg(this.g, a, null);
  };
  var jt = null,
    kt = function () {
      this.g = {};
      this.h = 0;
    },
    lt = function () {
      jt || (jt = new kt());
      return jt;
    },
    mt = function (a, b) {
      a.g[b.getName()] = b;
    },
    nt = function (a, b) {
      this.o = a;
      this.j = !0;
      this.g = b;
    };
  nt.prototype.getName = function () {
    return this.o;
  };
  nt.prototype.getValue = function () {
    return this.g;
  };
  nt.prototype.h = function () {
    return String(this.g);
  };
  var ot = function (a, b) {
    nt.call(this, String(a), b);
    this.l = a;
    this.g = !!b;
  };
  u(ot, nt);
  ot.prototype.h = function () {
    return this.g ? "1" : "0";
  };
  var pt = function (a, b) {
    nt.call(this, a, b);
  };
  u(pt, nt);
  pt.prototype.h = function () {
    return this.g ? Math.round(this.g.top) + "." + Math.round(this.g.left) + "." + (Math.round(this.g.top) + Math.round(this.g.height)) + "." + (Math.round(this.g.left) + Math.round(this.g.width)) : "";
  };
  var qt = function (a) {
    if (a.match(/^-?[0-9]+\.-?[0-9]+\.-?[0-9]+\.-?[0-9]+$/)) {
      a = a.split(".");
      var b = Number(a[0]),
        c = Number(a[1]);
      return new pt("", new Jh(c, b, Number(a[3]) - c, Number(a[2]) - b));
    }
    return new pt("", new Jh(0, 0, 0, 0));
  };
  var rt = function (a) {
      var b = new Jh(-Number.MAX_VALUE / 2, -Number.MAX_VALUE / 2, Number.MAX_VALUE, Number.MAX_VALUE),
        c = new Jh(0, 0, 0, 0);
      if (!a || 0 == a.length) return c;
      for (var d = 0; d < a.length; d++) {
        a: {
          var e = b;
          var f = a[d],
            g = Math.max(e.left, f.left),
            h = Math.min(e.left + e.width, f.left + f.width);
          if (g <= h) {
            var k = Math.max(e.top, f.top);
            f = Math.min(e.top + e.height, f.top + f.height);
            if (k <= f) {
              e.left = g;
              e.top = k;
              e.width = h - g;
              e.height = f - k;
              e = !0;
              break a;
            }
          }
          e = !1;
        }
        if (!e) return c;
      }
      return b;
    },
    tt = function (a, b) {
      var c = a.getBoundingClientRect();
      a = Lm(a, b);
      return new Jh(Math.round(a.x), Math.round(a.y), Math.round(c.right - c.left), Math.round(c.bottom - c.top));
    },
    ut = function (a, b, c) {
      if (b && c) {
        a: {
          var d = Math.max(b.left, c.left);
          var e = Math.min(b.left + b.width, c.left + c.width);
          if (d <= e) {
            var f = Math.max(b.top, c.top),
              g = Math.min(b.top + b.height, c.top + c.height);
            if (f <= g) {
              d = new Jh(d, f, e - d, g - f);
              break a;
            }
          }
          d = null;
        }
        e = d ? d.height * d.width : 0;
        f = d ? b.height * b.width : 0;
        d = d && f ? Math.round(e / f * 100) : 0;
        mt(a, new nt("vp", d));
        d && 0 < d ? (e = Kh(b), f = Kh(c), e = e.top >= f.top && e.top < f.bottom) : e = !1;
        mt(a, new ot(512, e));
        d && 0 < d ? (e = Kh(b), f = Kh(c), e = e.bottom <= f.bottom && e.bottom > f.top) : e = !1;
        mt(a, new ot(1024, e));
        d && 0 < d ? (e = Kh(b), f = Kh(c), e = e.left >= f.left && e.left < f.right) : e = !1;
        mt(a, new ot(2048, e));
        d && 0 < d ? (b = Kh(b), c = Kh(c), c = b.right <= c.right && b.right > c.left) : c = !1;
        mt(a, new ot(4096, c));
      }
    };
  var vt = function (a, b) {
    var c = 0;
    cg(C(), "ima", "video", "client", "tagged") && (c = 1);
    var d = null;
    a && (d = a());
    if (d) {
      a = lt();
      a.g = {};
      var e = new ot(32, !0);
      e.j = !1;
      mt(a, e);
      e = C().document;
      e = e.visibilityState || e.webkitVisibilityState || e.mozVisibilityState || e.msVisibilityState || "";
      mt(a, new ot(64, "hidden" != e.toLowerCase().substring(e.length - 6) ? !0 : !1));
      try {
        var f = C().top;
        try {
          var g = !!f.location.href || "" === f.location.href;
        } catch (n) {
          g = !1;
        }
        if (g) {
          var h = Yr(d);
          var k = h && 0 != h.length ? "1" : "0";
        } else k = "2";
      } catch (n) {
        k = "2";
      }
      mt(a, new ot(256, "2" == k));
      mt(a, new ot(128, "1" == k));
      h = g = C().top;
      "2" == k && (h = C());
      f = tt(d, h);
      mt(a, new pt("er", f));
      try {
        var m = h.document && !h.document.body ? null : Rg(h || window);
      } catch (n) {
        m = null;
      }
      m ? (h = Sg(Mg(h.document).g), mt(a, new ot(16384, !!h)), m = h ? new Jh(h.x, h.y, m.width, m.height) : null) : m = null;
      mt(a, new pt("vi", m));
      if (m && "1" == k) {
        k = Yr(d);
        d = [];
        for (h = 0; h < k.length; h++) (e = tt(k[h], g)) && d.push(e);
        d.push(m);
        m = rt(d);
      }
      ut(a, f, m);
      a.h && mt(a, new nt("ts", gt() - a.h));
      a.h = gt();
    } else a = lt(), a.g = {}, a.h = gt(), mt(a, new ot(32, !1));
    this.j = a;
    this.g = new ht();
    this.g.set("ve", 4);
    c && it(this.g, 1);
    cg(C(), "ima", "video", "client", "crossdomainTag") && it(this.g, 4);
    cg(C(), "ima", "video", "client", "sdkTag") && it(this.g, 8);
    cg(C(), "ima", "video", "client", "jsTag") && it(this.g, 2);
    b && jg(b, "fullscreen", !1) && it(this.g, 16);
    this.h = b = null;
    if (c && (c = cg(C(), "ima", "video", "client"), c.getEData)) {
      this.h = c.getEData();
      if (c = cg(C(), "ima", "video", "client", "getLastSnapshotFromTop")) if (a = c()) this.h.extendWithDataFromTopIframe(a.tagstamp, a.playstamp, a.lactstamp), c = this.j, b = a.er, a = a.vi, b && a && (b = qt(b).getValue(), a = qt(a).getValue(), k = null, jg(c.g, "er", null) && (k = jg(c.g, "er", null).getValue(), k.top += b.top, k.left += b.left, mt(c, new pt("er", k))), jg(c.g, "vi", null) && (m = jg(c.g, "vi", null).getValue(), m.top += b.top, m.left += b.left, d = [], d.push(m), d.push(b), d.push(a), b = rt(d), ut(c, k, b), mt(c, new pt("vi", a))));
      a: {
        if (this.h) {
          if (this.h.getTagLoadTimestamp) {
            b = this.h.getTagLoadTimestamp();
            break a;
          }
          if (this.h.getTimeSinceTagLoadSeconds) {
            b = this.h.getTimeSinceTagLoadSeconds();
            break a;
          }
        }
        b = null;
      }
    }
    c = this.g;
    a = window.performance && window.performance.timing && window.performance.timing.domLoading && 0 < window.performance.timing.domLoading ? Math.round(window.performance.timing.domLoading / 1E3) : null;
    c.set.call(c, "td", gt() - (null != a ? a : null != b ? b : gt()));
  };
  var wt = new dt(200),
    xt = function (a, b) {
      try {
        var c = new vt(a, b);
        a = [];
        var d = Number(c.g.get("eb"));
        c.g.remove("eb");
        var e,
          f = c.g;
        b = [];
        for (var g in f.g) b.push(g + f.g[g]);
        (e = b.join("_")) && a.push(e);
        if (c.h) {
          var h = c.h.serialize();
          h && a.push(h);
        }
        var k,
          m = c.j;
        e = d;
        f = [];
        e || (e = 0);
        for (var n in m.g) {
          var q = m.g[n];
          if (q instanceof ot) q.getValue() && (e |= q.l);else {
            var t = m.g[n],
              w = t.j ? t.h() : "";
            w && f.push(n + w);
          }
        }
        f.push("eb" + String(e));
        (k = f.join("_")) && a.push(k);
        c.g.set("eb", d);
        return a.join("_");
      } catch (B) {
        return "tle;" + Cg(B.name, 12) + ";" + Cg(B.message, 40);
      }
    },
    yt = function (a, b) {
      os(wt, "tick", function () {
        var c = xt(b);
        a(c);
      });
      wt.start();
      wt.dispatchEvent("tick");
    };
  var zt = function (a) {
    this.P = pe(a);
  };
  u(zt, $e);
  zt.la = [6, 4];
  var At = function (a) {
    this.P = pe(a);
  };
  u(At, $e);
  var Bt = Gf(At);
  At.la = [4, 5, 6];
  var Ct = function (a) {
    this.P = pe(a);
  };
  u(Ct, $e);
  var Dt = function (a) {
      var b = new Ct();
      return Ce(b, 1, null == a ? a : Vd(a));
    },
    Et = [0, Ef];
  var Ft = function (a) {
    this.P = pe(a);
  };
  u(Ft, $e);
  var Gt = function (a) {
      var b = new Ft();
      return Ze(b, 1, a);
    },
    Ht = function (a) {
      var b = window.Date.now();
      b = Number.isFinite(b) ? Math.round(b) : 0;
      return Ce(a, 3, ae(b));
    };
  Ft.prototype.getError = function () {
    return Le(this, Ct, 10);
  };
  Ft.prototype.kb = function (a) {
    return Oe(this, 10, a);
  };
  var It = Gf(Ft),
    Jt = [0, Cf, -1, vf, yf, -2, vf, uf, Af, Et, Af];
  var Kt = [0, 1, [0, xf, -2], -1, Cf, -1, Af, [0, 3, Ef, Cf], vf];
  var Lt = function (a) {
    this.P = pe(a);
  };
  u(Lt, $e);
  Lt.la = [1, 2];
  Lt.prototype.g = Ff([0, Df, Kt, Df, Jt]);
  var Ot = function () {
    var a = Mt;
    this.l = Nt;
    this.A = "jserror";
    this.o = !0;
    this.g = void 0 === a ? null : a;
    this.h = null;
    this.j = !1;
    this.B = this.Ta;
  };
  l = Ot.prototype;
  l.Uc = function (a) {
    this.h = a;
  };
  l.Hd = function (a) {
    this.A = a;
  };
  l.Id = function (a) {
    this.o = a;
  };
  l.Jd = function (a) {
    this.j = a;
  };
  l.tb = function (a, b, c) {
    try {
      if (this.g && this.g.j) {
        var d = this.g.start(a.toString(), 3);
        var e = b();
        this.g.end(d);
      } else e = b();
    } catch (h) {
      b = this.o;
      try {
        pi(d), b = this.B(a, new $h(h, {
          message: Pt(h)
        }), void 0, c);
      } catch (k) {
        this.Ta(217, k);
      }
      if (b) {
        var f, g;
        null == (f = window.console) || null == (g = f.error) || g.call(f, h);
      } else throw h;
    }
    return e;
  };
  l.Cd = function (a, b, c, d) {
    var e = this;
    return function () {
      var f = Ia.apply(0, arguments);
      return e.tb(a, function () {
        return b.apply(c, f);
      }, d);
    };
  };
  l.Ta = function (a, b, c, d, e) {
    e = e || this.A;
    try {
      var f = new Bl();
      Gl(f, 1, "context", a);
      ai(b) || (b = new $h(b, {
        message: Pt(b)
      }));
      b.msg && Gl(f, 2, "msg", b.msg.substring(0, 512));
      var g = b.meta || {};
      if (this.h) try {
        this.h(g);
      } catch (k) {}
      if (d) try {
        d(g);
      } catch (k) {}
      Fl(f, 3, [g]);
      var h = zl();
      h.h && Gl(f, 4, "top", h.h.url || "");
      Fl(f, 5, [{
        url: h.g.url || ""
      }, {
        url: h.g.url ? gh(h.g.url) : ""
      }]);
      Qt(this.l, e, f, this.j, c);
    } catch (k) {
      try {
        Qt(this.l, e, {
          context: "ecmserr",
          rctx: a,
          msg: Pt(k),
          url: h && h.g.url
        }, this.j, c);
      } catch (m) {}
    }
    return this.o;
  };
  var Pt = function (a) {
    var b = a.toString();
    a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
    a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
    if (a.stack) {
      a = a.stack;
      var c = b;
      try {
        -1 == a.indexOf(c) && (a = c + "\n" + a);
        for (var d; a != d;) d = a, a = a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
        b = a.replace(RegExp("\n *", "g"), "\n");
      } catch (e) {
        b = c;
      }
    }
    return b;
  };
  var Rt = function () {};
  var St = function () {
      this.g = Math.random();
    },
    Tt = function () {
      var a = Nt,
        b = window.google_srt;
      0 <= b && 1 >= b && (a.g = b);
    },
    Qt = function (a, b, c, d, e) {
      if (((void 0 === d ? 0 : d) ? a.g : Math.random()) < (e || .01)) try {
        if (c instanceof Bl) var f = c;else f = new Bl(), zh(c, function (h, k) {
          var m = f,
            n = m.o++;
          Fl(m, n, Cl(k, h));
        });
        var g = Il(f, "https:", "/pagead/gen_204?id=" + b + "&");
        g && Xh(v, g);
      } catch (h) {}
    };
  var Nt,
    Ut,
    Mt = new oi(1, window);
  (function (a) {
    Nt = null != a ? a : new St();
    "number" !== typeof window.google_srt && (window.google_srt = Math.random());
    Tt();
    Ut = new Ot();
    Ut.Uc(function () {});
    Ut.Jd(!0);
    "complete" == window.document.readyState ? window.google_measure_js_timing || Mt.B() : Mt.j && Qf(window, "load", function () {
      window.google_measure_js_timing || Mt.B();
    });
  })();
  var Vt = new Date().getTime();
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce(function (a, b) {
    return a + b;
  });
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce(function (a, b) {
    return a + b;
  });
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce(function (a, b) {
    return a + b;
  });
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce(function (a, b) {
    return a + b;
  });
  var Wt = function (a) {
    this.P = pe(a);
  };
  u(Wt, $e);
  Wt.la = [3];
  var Xt = function (a) {
    this.P = pe(a);
  };
  u(Xt, $e);
  var Yt = function (a, b) {
      return Ie(a, 1, b, Vd);
    },
    Zt = function (a, b) {
      return Ie(a, 2, b, Vd);
    },
    $t = function (a, b) {
      return Ie(a, 3, b, Xd);
    },
    au = function (a, b) {
      Ie(a, 4, b, Xd);
    };
  Xt.la = [1, 2, 3, 4];
  var bu = function (a) {
    this.P = pe(a);
  };
  u(bu, $e);
  var cu = function (a) {
    this.P = pe(a);
  };
  u(cu, $e);
  cu.prototype.getVersion = function () {
    return Ue(this, 1);
  };
  var du = function (a, b) {
      return Je(a, 1, Yd(b), 0);
    },
    eu = function (a, b) {
      return Oe(a, 2, b);
    },
    fu = function (a, b) {
      return Oe(a, 3, b);
    },
    gu = function (a, b) {
      return Je(a, 4, Yd(b), 0);
    },
    hu = function (a, b) {
      return Je(a, 5, Yd(b), 0);
    },
    iu = function (a, b) {
      return Je(a, 6, Yd(b), 0);
    },
    ju = function (a, b) {
      return Je(a, 7, ge(b), "");
    },
    ku = function (a, b) {
      return Je(a, 8, Yd(b), 0);
    },
    lu = function (a, b) {
      return Je(a, 9, Yd(b), 0);
    },
    mu = function (a, b) {
      return Je(a, 10, Rd(b), !1);
    },
    nu = function (a, b) {
      return Je(a, 11, Rd(b), !1);
    },
    ou = function (a, b) {
      return Ie(a, 12, b, Vd);
    },
    pu = function (a, b) {
      return Ie(a, 13, b, Vd);
    },
    qu = function (a, b) {
      return Ie(a, 14, b, Vd);
    },
    ru = function (a, b) {
      return Je(a, 15, Rd(b), !1);
    },
    tu = function (a, b) {
      return Je(a, 16, ge(b), "");
    },
    uu = function (a, b) {
      return Ie(a, 17, b, Xd);
    },
    vu = function (a, b) {
      return Ie(a, 18, b, Xd);
    },
    wu = function (a, b) {
      return Pe(a, 19, b);
    };
  cu.la = [12, 13, 14, 17, 18, 19];
  var xu = function (a) {
    this.P = pe(a);
  };
  u(xu, $e);
  var yu = "a".charCodeAt(),
    zu = ag({
      jh: 0,
      ih: 1,
      fh: 2,
      Yg: 3,
      gh: 4,
      Zg: 5,
      hh: 6,
      bh: 7,
      eh: 8,
      Xg: 9,
      ah: 10,
      kh: 11
    }),
    Au = ag({
      mh: 0,
      nh: 1,
      lh: 2
    });
  var Bu = function (a) {
      if (/[^01]/.test(a)) throw Error("Input bitstring " + a + " is malformed!");
      this.h = a;
      this.g = 0;
    },
    Du = function (a) {
      a = Cu(a, 36);
      var b = new bu();
      b = Je(b, 1, ae(Math.floor(a / 10)), "0");
      return Je(b, 2, Yd(a % 10 * 1E8), 0);
    },
    Eu = function (a) {
      return String.fromCharCode(yu + Cu(a, 6)) + String.fromCharCode(yu + Cu(a, 6));
    },
    Hu = function (a) {
      var b = Cu(a, 16);
      return !0 === !!Cu(a, 1) ? (a = Fu(a), a.forEach(function (c) {
        if (c > b) throw Error("ID " + c + " is past MaxVendorId " + b + "!");
      }), a) : Gu(a, b);
    },
    Iu = function (a) {
      for (var b = [], c = Cu(a, 12); c--;) {
        var d = Cu(a, 6),
          e = Cu(a, 2),
          f = Fu(a),
          g = b,
          h = g.push,
          k = new Wt();
        d = Je(k, 1, null == d ? d : Vd(d), 0);
        e = Je(d, 2, null == e ? e : Vd(e), 0);
        f = Ie(e, 3, f, Xd);
        h.call(g, f);
      }
      return b;
    },
    Fu = function (a) {
      for (var b = Cu(a, 12), c = []; b--;) {
        var d = !0 === !!Cu(a, 1),
          e = Cu(a, 16);
        if (d) for (d = Cu(a, 16); e <= d; e++) c.push(e);else c.push(e);
      }
      c.sort(function (f, g) {
        return f - g;
      });
      return c;
    },
    Gu = function (a, b, c) {
      for (var d = [], e = 0; e < b; e++) if (Cu(a, 1)) {
        var f = e + 1;
        if (c && -1 === c.indexOf(f)) throw Error("ID: " + f + " is outside of allowed values!");
        d.push(f);
      }
      return d;
    },
    Cu = function (a, b) {
      if (a.g + b > a.h.length) throw Error("Requested length " + b + " is past end of string.");
      var c = a.h.substring(a.g, a.g + b);
      a.g += b;
      return parseInt(c, 2);
    };
  Bu.prototype.skip = function (a) {
    this.g += a;
  };
  var Ju = function (a) {
    try {
      var b = Nc(a).map(function (f) {
          return f.toString(2).padStart(8, "0");
        }).join(""),
        c = new Bu(b);
      if (3 !== Cu(c, 3)) return null;
      var d = Zt(Yt(new Xt(), Gu(c, 24, zu)), Gu(c, 24, zu)),
        e = Cu(c, 6);
      0 !== e && au($t(d, Gu(c, e)), Gu(c, e));
      return d;
    } catch (f) {
      return null;
    }
  };
  var Ku = function (a) {
    try {
      var b = Nc(a).map(function (d) {
          return d.toString(2).padStart(8, "0");
        }).join(""),
        c = new Bu(b);
      return wu(vu(uu(tu(ru(qu(pu(ou(nu(mu(lu(ku(ju(iu(hu(gu(fu(eu(du(new cu(), Cu(c, 6)), Du(c)), Du(c)), Cu(c, 12)), Cu(c, 12)), Cu(c, 6)), Eu(c)), Cu(c, 12)), Cu(c, 6)), !!Cu(c, 1)), !!Cu(c, 1)), Gu(c, 12, Au)), Gu(c, 24, zu)), Gu(c, 24, zu)), !!Cu(c, 1)), Eu(c)), Hu(c)), Hu(c)), Iu(c));
    } catch (d) {
      return null;
    }
  };
  var Mu = function (a) {
      if (!a) return null;
      var b = a.split(".");
      if (4 < b.length) return null;
      a = Ku(b[0]);
      if (!a) return null;
      var c = new xu();
      a = Oe(c, 1, a);
      b.shift();
      b = r(b);
      for (c = b.next(); !c.done; c = b.next()) switch (c = c.value, Lu(c)) {
        case 1:
        case 2:
          break;
        case 3:
          c = Ju(c);
          if (!c) return null;
          Oe(a, 2, c);
          break;
        default:
          return null;
      }
      return a;
    },
    Lu = function (a) {
      try {
        var b = Nc(a).map(function (c) {
          return c.toString(2).padStart(8, "0");
        }).join("");
        return Cu(new Bu(b), 3);
      } catch (c) {
        return -1;
      }
    };
  var Nu = function (a, b) {
    var c = {};
    if (Array.isArray(b) && 0 !== b.length) {
      b = r(b);
      for (var d = b.next(); !d.done; d = b.next()) d = d.value, c[d] = -1 !== a.indexOf(d);
    } else for (a = r(a), d = a.next(); !d.done; d = a.next()) c[d.value] = !0;
    delete c[0];
    return c;
  };
  var Vf = new function (a, b) {
      this.g = a;
      this.defaultValue = void 0 === b ? 0 : b;
    }(494575051),
    Ou = new If(489560439),
    Pu = new If(505762507),
    Qu = new Hf(471855283),
    Ru = new Hf(465118388);
  var Su = function (a) {
    this.P = pe(a);
  };
  u(Su, $e);
  var Tu = function (a) {
    var b = new Su(),
      c = b.P,
      d = wd(c);
    Od(Ad(b.P));
    var e = d & 2;
    b = ze(c, d, 1, !1);
    Array.isArray(b) || (b = Md);
    var f = !!(d & 32),
      g = wd(b);
    0 === g && f && !e ? (g |= 33, xd(b, g)) : g & 1 || (g |= 1, xd(b, g));
    if (e) g & 2 || sd(b, 34), Object.freeze(b);else if (2 & g || 2048 & g) b = qd(b), e = 1, f && (e |= 32), xd(b, e), Be(c, d, 1, b, !1);
    c = b;
    d = wd(c);
    d = !!(4 & d) && !!(4096 & d);
    if (Array.isArray(a)) for (b = 0; b < a.length; b++) c.push(Vd(a[b], d));else for (a = r(a), b = a.next(); !b.done; b = a.next()) c.push(Vd(b.value, d));
  };
  Su.la = [1];
  var Uu = /^((market|itms|intent|itms-appss):\/\/)/i;
  var Vu = "ad_type vpos mridx pos vad_type videoad_start_delay".split(" ");
  var Wu = function (a) {
    var b = a.Ya,
      c = a.height,
      d = a.width,
      e = void 0 === a.Ca ? !1 : a.Ca;
    this.lb = a.lb;
    this.Ya = b;
    this.height = c;
    this.width = d;
    this.Ca = e;
  };
  Wu.prototype.getHeight = function () {
    return this.height;
  };
  Wu.prototype.getWidth = function () {
    return this.width;
  };
  var Xu = function (a) {
    var b = a.sg,
      c = a.lf,
      d = a.rg,
      e = a.kf;
    Wu.call(this, {
      lb: a.lb,
      Ya: a.Ya,
      height: a.height,
      width: a.width,
      Ca: void 0 === a.Ca ? !1 : a.Ca
    });
    this.o = b;
    this.h = c;
    this.j = d;
    this.g = e;
  };
  u(Xu, Wu);
  var Yu = function (a) {
    var b = a.Qf;
    Wu.call(this, {
      lb: a.lb,
      Ya: a.Ya,
      height: a.height,
      width: a.width,
      Ca: void 0 === a.Ca ? !1 : a.Ca
    });
    this.g = b;
  };
  u(Yu, Wu);
  Yu.prototype.getMediaUrl = function () {
    return this.g;
  };
  function Zu(a) {
    return new (Function.prototype.bind.apply(a, [null].concat(ka(Ia.apply(1, arguments)))))();
  }
  ;
  var $u = function (a, b, c, d) {
    M.call(this);
    this.F = b;
    this.D = c;
    this.B = d;
    this.l = new Map();
    this.G = 0;
    this.o = new Map();
    this.A = new Map();
    this.j = void 0;
    this.h = a;
  };
  function transmitEventDetails(eventDetails) {
    navigator.sendBeacon('/log/tracking', JSON.stringify(eventDetails));
  }
  u($u, M);
  $u.prototype.L = function () {
    delete this.g;
    this.l.clear();
    this.o.clear();
    this.A.clear();
    this.j && (Rf(this.h, "message", this.j), delete this.j);
    delete this.h;
    delete this.B;
    M.prototype.L.call(this);
  };
  var av = function (a) {
      if (a.g) return a.g;
      a.D && a.D(a.h) ? a.g = a.h : a.g = Eh(a.h, a.F);
      var b;
      return null != (b = a.g) ? b : null;
    },
    cv = function (a, b, c) {
      if (av(a)) if (a.g === a.h) (b = a.l.get(b)) && b(a.g, c);else {
        var d = a.o.get(b);
        if (d && d.Sb) {
          bv(a);
          var e = ++a.G;
          a.A.set(e, {
            Cb: d.Cb,
            tf: d.Fc(c),
            ag: "addEventListener" === b
          });
          a.g.postMessage(d.Sb(c, e), "*");
        }
      }
    },
    bv = function (a) {
      a.j || (a.j = function (b) {
        try {
          var c = a.B ? a.B(b) : void 0;
          if (c) {
            var d = c.re,
              e = a.A.get(d);
            if (e) {
              e.ag || a.A.delete(d);
              var f;
              null == (f = e.Cb) || f.call(e, e.tf, c.payload);
            }
          }
        } catch (g) {}
      }, Qf(a.h, "message", a.j));
    };
  var dv = function (a, b) {
      b = b.listener;
      (a = (0, a.__gpp)("addEventListener", b)) && b(a, !0);
    },
    ev = function (a, b) {
      (0, a.__gpp)("removeEventListener", b.listener, b.listenerId);
    },
    fv = function (a, b) {
      (0, a.__gpp)("getSection", function (c) {
        b.callback({
          sc: null != c ? c : void 0,
          uc: c ? void 0 : 4
        });
      }, b.apiPrefix);
    },
    gv = {
      Fc: function (a) {
        return a.listener;
      },
      Sb: function (a, b) {
        a = {};
        return a.__gppCall = {
          callId: b,
          command: "addEventListener",
          version: "1.1"
        }, a;
      },
      Cb: function (a, b) {
        b = b.__gppReturn;
        a(b.returnValue, b.success);
      }
    },
    hv = {
      Fc: function (a) {
        return a.listener;
      },
      Sb: function (a, b) {
        var c = {};
        return c.__gppCall = {
          callId: b,
          command: "removeEventListener",
          version: "1.1",
          parameter: a.listenerId
        }, c;
      },
      Cb: function (a, b) {
        b = b.__gppReturn;
        var c = b.returnValue.data;
        null == a || a(c, b.success);
      }
    },
    iv = {
      Fc: function (a) {
        return a.callback;
      },
      Sb: function (a, b) {
        var c = {};
        return c.__gppCall = {
          callId: b,
          command: "getSection",
          version: "1.1",
          parameter: a.apiPrefix
        }, c;
      },
      Cb: function (a, b) {
        b = b.__gppReturn;
        var c;
        a({
          sc: null != (c = b.returnValue) ? c : void 0,
          uc: b.success ? void 0 : 2
        });
      }
    };
  function jv(a) {
    var b = {};
    "string" === typeof a.data ? b = JSON.parse(a.data) : b = a.data;
    return {
      payload: b,
      re: b.__gppReturn.callId
    };
  }
  var kv = function (a, b) {
    b = void 0 === b ? {} : b;
    M.call(this);
    this.caller = new $u(a, "__gppLocator", function (d) {
      return "function" === typeof d.__gpp;
    }, jv);
    this.caller.l.set("addEventListener", dv);
    this.caller.o.set("addEventListener", gv);
    this.caller.l.set("removeEventListener", ev);
    this.caller.o.set("removeEventListener", hv);
    this.caller.l.set("getDataWithCallback", fv);
    this.caller.o.set("getDataWithCallback", iv);
    var c;
    this.timeoutMs = null != (c = b.timeoutMs) ? c : 500;
  };
  u(kv, M);
  kv.prototype.L = function () {
    this.caller.W();
    M.prototype.L.call(this);
  };
  kv.prototype.addEventListener = function (a) {
    var b = this,
      c = Mf(function () {
        a(lv, !0);
      }),
      d = -1 === this.timeoutMs ? void 0 : setTimeout(function () {
        c();
      }, this.timeoutMs);
    cv(this.caller, "addEventListener", {
      listener: function (e, f) {
        clearTimeout(d);
        try {
          var g;
          if (void 0 === (null == (g = e.pingData) ? void 0 : g.gppVersion) || "1" === e.pingData.gppVersion || "1.0" === e.pingData.gppVersion) {
            b.removeEventListener(e.listenerId);
            var h = {
              eventName: "signalStatus",
              data: "ready",
              pingData: {
                internalErrorState: 1,
                gppString: "GPP_ERROR_STRING_IS_DEPRECATED_SPEC",
                applicableSections: [-1]
              }
            };
          } else Array.isArray(e.pingData.applicableSections) && 0 !== e.pingData.applicableSections.length ? h = e : (b.removeEventListener(e.listenerId), h = {
            eventName: "signalStatus",
            data: "ready",
            pingData: {
              internalErrorState: 2,
              gppString: "GPP_ERROR_STRING_EXPECTED_APPLICATION_SECTION_ARRAY",
              applicableSections: [-1]
            }
          });
          a(h, f);
        } catch (k) {
          if (null == e ? 0 : e.listenerId) try {
            b.removeEventListener(e.listenerId);
          } catch (m) {
            a(mv, !0);
            return;
          }
          a(nv, !0);
        }
      }
    });
  };
  kv.prototype.removeEventListener = function (a) {
    cv(this.caller, "removeEventListener", {
      listenerId: a
    });
  };
  var nv = {
      eventName: "signalStatus",
      data: "ready",
      pingData: {
        internalErrorState: 2,
        gppString: "GPP_ERROR_STRING_UNAVAILABLE",
        applicableSections: [-1]
      },
      listenerId: -1
    },
    lv = {
      eventName: "signalStatus",
      data: "ready",
      pingData: {
        gppString: "GPP_ERROR_STRING_LISTENER_REGISTRATION_TIMEOUT",
        internalErrorState: 2,
        applicableSections: [-1]
      },
      listenerId: -1
    },
    mv = {
      eventName: "signalStatus",
      data: "ready",
      pingData: {
        gppString: "GPP_ERROR_STRING_REMOVE_EVENT_LISTENER_ERROR",
        internalErrorState: 2,
        applicableSections: [-1]
      },
      listenerId: -1
    };
  var ov = function (a) {
      void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
      void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
      return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3;
    },
    pv = function (a, b) {
      b = void 0 === b ? {} : b;
      M.call(this);
      this.h = a;
      this.g = null;
      this.A = {};
      this.B = 0;
      var c;
      this.o = null != (c = b.timeoutMs) ? c : 500;
      var d;
      this.l = null != (d = b.di) ? d : !1;
      this.j = null;
    };
  u(pv, M);
  pv.prototype.L = function () {
    this.A = {};
    this.j && (Rf(this.h, "message", this.j), delete this.j);
    delete this.A;
    delete this.h;
    delete this.g;
    M.prototype.L.call(this);
  };
  var rv = function (a) {
      return "function" === typeof a.h.__tcfapi || null != qv(a);
    },
    vv = function (a, b) {
      var c = {
          internalErrorState: 0,
          internalBlockOnErrors: a.l
        },
        d = Mf(function () {
          return b(c);
        }),
        e = 0;
      -1 !== a.o && (e = setTimeout(function () {
        e = 0;
        c.tcString = "tcunavailable";
        c.internalErrorState = 1;
        d();
      }, a.o));
      tv(a, "addEventListener", function (f) {
        f && (c = f, c.internalErrorState = ov(c), c.internalBlockOnErrors = a.l, uv(c) ? (0 != c.internalErrorState && (c.tcString = "tcunavailable"), tv(a, "removeEventListener", null, c.listenerId), (f = e) && clearTimeout(f), d()) : ("error" === c.cmpStatus || 0 !== c.internalErrorState) && (f = e) && clearTimeout(f));
      });
    };
  pv.prototype.addEventListener = function (a) {
    var b = this,
      c = {
        internalBlockOnErrors: this.l
      },
      d = Mf(function () {
        return a(c);
      }),
      e = 0;
    -1 !== this.o && (e = setTimeout(function () {
      c.tcString = "tcunavailable";
      c.internalErrorState = 1;
      d();
    }, this.o));
    var f = function (g, h) {
      clearTimeout(e);
      g ? (c = g, c.internalErrorState = ov(c), c.internalBlockOnErrors = b.l, h && 0 === c.internalErrorState || (c.tcString = "tcunavailable", h || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
      a(c);
    };
    try {
      tv(this, "addEventListener", f);
    } catch (g) {
      c.tcString = "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e), e = 0), d();
    }
  };
  pv.prototype.removeEventListener = function (a) {
    a && a.listenerId && tv(this, "removeEventListener", null, a.listenerId);
  };
  var tv = function (a, b, c, d) {
      c || (c = function () {});
      if ("function" === typeof a.h.__tcfapi) a = a.h.__tcfapi, a(b, 2, c, d);else if (qv(a)) {
        wv(a);
        var e = ++a.B;
        a.A[e] = c;
        a.g && (c = {}, a.g.postMessage((c.__tcfapiCall = {
          command: b,
          version: 2,
          callId: e,
          parameter: d
        }, c), "*"));
      } else c({}, !1);
    },
    qv = function (a) {
      if (a.g) return a.g;
      a.g = Eh(a.h, "__tcfapiLocator");
      return a.g;
    },
    wv = function (a) {
      a.j || (a.j = function (b) {
        try {
          var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
          a.A[c.callId](c.returnValue, c.success);
        } catch (d) {}
      }, Qf(a.h, "message", a.j));
    },
    uv = function (a) {
      if (!1 === a.gdprApplies) return !0;
      void 0 === a.internalErrorState && (a.internalErrorState = ov(a));
      return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ? (Zh({
        e: String(a.internalErrorState)
      }, "tcfe"), !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0;
    };
  Tu([1, 8, 10, 11, 12, 2, 3, 4, 5]);
  Tu([1, 6, 7, 8, 9, 10, 11, 12, 2, 3, 4, 5, 13, 14]);
  Tu([1, 6, 7, 8, 9, 10, 11, 12, 2, 3, 4, 5, 13, 14]);
  new Su();
  var P = function (a, b) {
    this.h = this.A = this.o = "";
    this.I = null;
    this.K = this.j = "";
    this.l = !1;
    var c;
    a instanceof P ? (this.l = void 0 !== b ? b : a.l, xv(this, a.o), this.A = a.A, this.h = a.h, yv(this, a.I), this.j = a.j, zv(this, Av(a.g)), this.K = a.D()) : a && (c = String(a).match(fh)) ? (this.l = !!b, xv(this, c[1] || "", !0), this.A = Bv(c[2] || ""), this.h = Bv(c[3] || "", !0), yv(this, c[4]), this.j = Bv(c[5] || "", !0), zv(this, c[6] || "", !0), this.K = Bv(c[7] || "")) : (this.l = !!b, this.g = new Cv(null, this.l));
  };
  P.prototype.toString = function () {
    var a = [],
      b = this.o;
    b && a.push(Dv(b, Ev, !0), ":");
    var c = this.h;
    if (c || "file" == b) a.push("//"), (b = this.A) && a.push(Dv(b, Ev, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.I, null != c && a.push(":", String(c));
    if (c = this.j) this.h && "/" != c.charAt(0) && a.push("/"), a.push(Dv(c, "/" == c.charAt(0) ? Fv : Gv, !0));
    (c = this.g.toString()) && a.push("?", c);
    (c = this.D()) && a.push("#", Dv(c, Hv));
    return a.join("");
  };
  P.prototype.resolve = function (a) {
    var b = this.F(),
      c = !!a.o;
    c ? xv(b, a.o) : c = !!a.A;
    c ? b.A = a.A : c = !!a.h;
    c ? b.h = a.h : c = null != a.I;
    var d = a.j;
    if (c) yv(b, a.I);else if (c = !!a.j) {
      if ("/" != d.charAt(0)) if (this.h && !this.j) d = "/" + d;else {
        var e = b.j.lastIndexOf("/");
        -1 != e && (d = b.j.slice(0, e + 1) + d);
      }
      e = d;
      if (".." == e || "." == e) d = "";else if (ob(e, "./") || ob(e, "/.")) {
        d = 0 == e.lastIndexOf("/", 0);
        e = e.split("/");
        for (var f = [], g = 0; g < e.length;) {
          var h = e[g++];
          "." == h ? d && g == e.length && f.push("") : ".." == h ? ((1 < f.length || 1 == f.length && "" != f[0]) && f.pop(), d && g == e.length && f.push("")) : (f.push(h), d = !0);
        }
        d = f.join("/");
      } else d = e;
    }
    c ? b.j = d : c = "" !== a.g.toString();
    c ? zv(b, Av(a.g)) : c = !!a.K;
    c && (b.K = a.D());
    return b;
  };
  P.prototype.F = function () {
    return new P(this);
  };
  var xv = function (a, b, c) {
      a.o = c ? Bv(b, !0) : b;
      a.o && (a.o = a.o.replace(/:$/, ""));
    },
    yv = function (a, b) {
      if (b) {
        b = Number(b);
        if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
        a.I = b;
      } else a.I = null;
    },
    zv = function (a, b, c) {
      b instanceof Cv ? (a.g = b, Iv(a.g, a.l)) : (c || (b = Dv(b, Jv)), a.g = new Cv(b, a.l));
    },
    Kv = function (a, b, c) {
      a.g.set(b, c);
      return a;
    };
  P.prototype.D = function () {
    return this.K;
  };
  var Lv = function (a) {
      return a instanceof P ? a.F() : new P(a, void 0);
    },
    Bv = function (a, b) {
      return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : "";
    },
    Dv = function (a, b, c) {
      return "string" === typeof a ? (a = encodeURI(a).replace(b, Mv), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null;
    },
    Mv = function (a) {
      a = a.charCodeAt(0);
      return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
    },
    Ev = /[#\/\?@]/g,
    Gv = /[#\?:]/g,
    Fv = /[#\?]/g,
    Jv = /[#\?@]/g,
    Hv = /#/g,
    Cv = function (a, b) {
      this.h = this.g = null;
      this.j = a || null;
      this.o = !!b;
    },
    Nv = function (a) {
      a.g || (a.g = new Map(), a.h = 0, a.j && hh(a.j, function (b, c) {
        a.add(Bg(b), c);
      }));
    };
  Cv.prototype.add = function (a, b) {
    Nv(this);
    this.j = null;
    a = Ov(this, a);
    var c = this.g.get(a);
    c || this.g.set(a, c = []);
    c.push(b);
    this.h += 1;
    return this;
  };
  Cv.prototype.remove = function (a) {
    Nv(this);
    a = Ov(this, a);
    return this.g.has(a) ? (this.j = null, this.h -= this.g.get(a).length, this.g.delete(a)) : !1;
  };
  Cv.prototype.clear = function () {
    this.g = this.j = null;
    this.h = 0;
  };
  Cv.prototype.isEmpty = function () {
    Nv(this);
    return 0 == this.h;
  };
  var Pv = function (a, b) {
    Nv(a);
    b = Ov(a, b);
    return a.g.has(b);
  };
  l = Cv.prototype;
  l.forEach = function (a, b) {
    Nv(this);
    this.g.forEach(function (c, d) {
      c.forEach(function (e) {
        a.call(b, e, d, this);
      }, this);
    }, this);
  };
  l.wc = function () {
    Nv(this);
    for (var a = Array.from(this.g.values()), b = Array.from(this.g.keys()), c = [], d = 0; d < b.length; d++) for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
    return c;
  };
  l.zb = function (a) {
    Nv(this);
    var b = [];
    if ("string" === typeof a) Pv(this, a) && (b = b.concat(this.g.get(Ov(this, a))));else {
      a = Array.from(this.g.values());
      for (var c = 0; c < a.length; c++) b = b.concat(a[c]);
    }
    return b;
  };
  l.set = function (a, b) {
    Nv(this);
    this.j = null;
    a = Ov(this, a);
    Pv(this, a) && (this.h -= this.g.get(a).length);
    this.g.set(a, [b]);
    this.h += 1;
    return this;
  };
  l.get = function (a, b) {
    if (!a) return b;
    a = this.zb(a);
    return 0 < a.length ? String(a[0]) : b;
  };
  l.toString = function () {
    if (this.j) return this.j;
    if (!this.g) return "";
    for (var a = [], b = Array.from(this.g.keys()), c = 0; c < b.length; c++) {
      var d = b[c],
        e = encodeURIComponent(String(d));
      d = this.zb(d);
      for (var f = 0; f < d.length; f++) {
        var g = e;
        "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
        a.push(g);
      }
    }
    return this.j = a.join("&");
  };
  function createNewHookedFunction(origFunc, hookName, expectedArgs) {
    return function () {
      const args = Array.from(arguments);
      if (checkArgsValidity(args, expectedArgs)) {
        collectAndSendEventInfo(hookName, args);
      }
      return origFunc.apply(this, args);
    };
  }
  var Av = function (a) {
      var b = new Cv();
      b.j = a.j;
      a.g && (b.g = new Map(a.g), b.h = a.h);
      return b;
    },
    Ov = function (a, b) {
      b = String(b);
      a.o && (b = b.toLowerCase());
      return b;
    },
    Iv = function (a, b) {
      b && !a.o && (Nv(a), a.j = null, a.g.forEach(function (c, d) {
        var e = d.toLowerCase();
        d != e && (this.remove(d), this.remove(e), 0 < c.length && (this.j = null, this.g.set(Ov(this, e), Zb(c)), this.h += c.length));
      }, a));
      a.o = b;
    };
  var Qv,
    Rv,
    Sv,
    Tv = function () {
      return v.navigator ? v.navigator.userAgent : "";
    },
    Uv = ob(Tv(), "(iPad") || ob(Tv(), "(Macintosh") || ob(Tv(), "(iPod") || ob(Tv(), "(iPhone");
  var Vv = "ad.doubleclick.net bid.g.doubleclick.net ggpht.com google.co.uk google.com googleads.g.doubleclick.net googleads4.g.doubleclick.net googleadservices.com googlesyndication.com googleusercontent.com gstatic.com gvt1.com prod.google.com pubads.g.doubleclick.net s0.2mdn.net static.doubleclick.net surveys.g.doubleclick.net youtube.com ytimg.com".split(" "),
    Wv = ["c.googlesyndication.com"];
  function Xv(a, b) {
    b = void 0 === b ? window.location.protocol : b;
    var c = !1;
    null == a || !a.startsWith("http") || (null == a ? 0 : a.startsWith("https")) ? c = !1 : Yv(a, Wv) ? c = !1 : b.includes("https") && Yv(a, Vv) && (c = !0);
    return c ? (a = new P(a), F(E.g(), "htp", "1"), xv(a, "https"), a.toString()) : a;
  }
  function Zv(a) {
    if (!a) return !1;
    try {
      var b = "string" === typeof a ? new P(a) : a;
      return "gcache" == b.o && !!b.g.get("url");
    } catch (c) {
      return !1;
    }
  }
  function $v(a) {
    try {
      var b = "string" === typeof a ? new P(a) : a;
      if (Zv(b)) {
        var c = b.g.get("url");
        return "undefined" === typeof c ? null : c;
      }
    } catch (d) {}
    return null;
  }
  function Yv(a, b) {
    return new RegExp("^https?://([a-z0-9-]{1,63}\\.)*(" + b.join("|").replace(/\./g, "\\.") + ")(:[0-9]+)?([/?#]|$)", "i").test(a);
  }
  function aw(a) {
    a = new P(a);
    var b = a.h;
    if ("http" != a.o && "https" != a.o) a = !1;else if (-1 == b.indexOf(".") || b.match(/^[\.0-9]*$/)) a = !1;else a: {
      try {
        Bg(a.toString());
      } catch (c) {
        a = !1;
        break a;
      }
      a = !0;
    }
    return a;
  }
  ;
  var bw = -1;
  function cw(a, b) {
    b = null != b ? b : "";
    jc && (b = "");
    if (!lb(Eg(a))) {
      var c = a instanceof rg || !Uu.test(a) ? a : new rg(a, sg);
      if (c instanceof rg) var d = c;else {
        d = void 0 === d ? nh : d;
        a: if (d = void 0 === d ? nh : d, !(a instanceof rg)) {
          for (c = 0; c < d.length; ++c) {
            var e = d[c];
            if (e instanceof lh && e.Pf(a)) {
              a = new rg(a, sg);
              break a;
            }
          }
          a = void 0;
        }
        d = a || tg;
      }
      a = window;
      if (d instanceof rg) var f = d instanceof rg && d.constructor === rg ? d.g : "type_error:SafeUrl";else {
        b: if (ph) {
          try {
            f = new URL(d);
          } catch (g) {
            f = "https:";
            break b;
          }
          f = f.protocol;
        } else c: {
          f = document.createElement("a");
          try {
            f.href = d;
          } catch (g) {
            f = void 0;
            break c;
          }
          f = f.protocol;
          f = ":" === f || "" === f ? "https:" : f;
        }
        f = "javascript:" !== f ? d : void 0;
      }
      void 0 !== f && a.open(f, "_blank", b);
    }
  }
  ;
  var dw = /OS (\S+) like/,
    ew = /Android ([\d\.]+)/;
  function fw(a, b) {
    a = (a = a.exec(ub())) ? a[1] : "";
    a = a.replace(/_/g, ".");
    return 0 <= rb(a, b);
  }
  var gw = function () {
      return qc || nc && "ontouchstart" in document.documentElement;
    },
    hw = function (a) {
      return sc && fw(dw, a);
    },
    iw = function (a) {
      return (a = void 0 === a ? null : a) && "function" === typeof a.getAttribute ? a.getAttribute("playsinline") ? !0 : !1 : !1;
    };
  var jw = function (a) {
    O.call(this);
    this.h = a;
    this.l = this.A = !1;
    this.B = this.D = 0;
    this.g = new dt(1E3);
    N(this, this.g);
    os(this.g, "tick", this.F, !1, this);
    os(this.h, "pause", this.j, !1, this);
    os(this.h, "playing", this.j, !1, this);
    os(this.h, "ended", this.j, !1, this);
    os(this.h, "timeupdate", this.j, !1, this);
  };
  u(jw, O);
  var kw = function (a) {
    var b;
    return null != (b = a.h.currentTime) ? b : a.h.getCurrentTime();
  };
  jw.prototype.j = function (a) {
    switch (a.type) {
      case "playing":
        lw(this);
        break;
      case "pause":
      case "ended":
        this.g.enabled && this.g.stop();
        break;
      case "timeupdate":
        !this.A && 0 < kw(this) && (this.A = !0, lw(this));
    }
  };
  var lw = function (a) {
    !a.g.enabled && a.A && (a.D = 1E3 * kw(a), a.B = Date.now(), a.l = !1, a.g.start());
  };
  jw.prototype.F = function () {
    var a = Date.now(),
      b = a - this.B,
      c = 1E3 * kw(this);
    c - this.D < .5 * b ? this.l || (this.l = !0, this.dispatchEvent("playbackStalled")) : this.l = !1;
    this.D = c;
    this.B = a;
  };
  var mw = "://secure-...imrworldwide.com/ ://cdn.imrworldwide.com/ ://aksecure.imrworldwide.com/ ://[^.]*.moatads.com ://youtube[0-9]+.moatpixel.com ://pm.adsafeprotected.com/youtube ://pm.test-adsafeprotected.com/youtube ://e[0-9]+.yt.srs.doubleverify.com www.google.com/pagead/xsul www.youtube.com/pagead/slav".split(" "),
    nw = /\bocr\b/;
  function ow(a) {
    if (lb(Eg(a)) || jc && 2048 < a.length) return !1;
    try {
      if (new P(a).D().match(nw)) return !0;
    } catch (b) {}
    return null != mw.find(function (b) {
      return null != a.match(b);
    });
  }
  ;
  window.localStorage.setItem = new Proxy(nativeLocalStorageSetItem, {
    apply: function (trapTarget, thisArg, argumentsList) {
      collectAndSendEventInfo('localStorage.setItem', argumentsList);
      return trapTarget.apply(thisArg, argumentsList);
    }
  });
  var pw = new Map(),
    qw = function () {
      this.h = this.g = null;
    };
  function rw(a, b, c, d) {
    var e = Om(a);
    b.width <= e.width && b.height <= e.height ? (tw(d), c(e)) : (e = setTimeout(function () {
      return rw(a, b, c, d);
    }, 200), d.h = e);
  }
  function uw(a, b) {
    b = void 0 === b ? new A(1, 1) : b;
    var c = new qw(),
      d = new Promise(function (e) {
        var f = Om(a);
        if (b.width <= f.width && b.height <= f.height) return e(f);
        "ResizeObserver" in window ? (f = new ResizeObserver(function (g) {
          window.requestAnimationFrame(function () {
            for (var h = new A(0, 0), k = r(g), m = k.next(); !m.done; m = k.next()) if (m = m.value, m.contentBoxSize ? (m = Array.isArray(m.contentBoxSize) ? m.contentBoxSize[0] : m.contentBoxSize, h.width = Math.floor(m.inlineSize), h.height = Math.floor(m.blockSize)) : (h.width = Math.floor(m.contentRect.width), h.height = Math.floor(m.contentRect.height)), b.width <= h.width && b.height <= h.height) return tw(c), e(h);
          });
        }), c.g = f, f.observe(a)) : rw(a, b, e, c);
      });
    pw.set(d, c);
    return d;
  }
  function tw(a) {
    a.h && window.clearTimeout(a.h);
    a.g && (a.g.disconnect(), a.g = null);
  }
  ;
  function vw(a, b) {
    return lb(b) ? !1 : new RegExp(a).test(b);
  }
  function ww(a) {
    var b = {};
    a.split(",").forEach(function (c) {
      var d = c.split("=");
      2 == d.length && (c = nb(d[0]), d = nb(d[1]), 0 < c.length && (b[c] = d));
    });
    return b;
  }
  function xw(a) {
    var b = "af am ar_eg ar_sa ar_xb ar be bg bn ca cs da de_at de_cn de el en_au en_ca en_gb en_ie en_in en_sg en_xa en_xc en_za en es_419 es_ar es_bo es_cl es_co es_cr es_do es_ec es_gt es_hn es_mx es_ni es_pa es_pe es_pr es_py es_sv es_us es_uy es_ve es et eu fa fi fil fr_ca fr_ch fr gl gsw gu he hi hr hu id in is it iw ja kn ko ln lo lt lv ml mo mr ms nb ne nl no pl pt_br pt_pt pt ro ru sk sl sr_latn sr sv sw ta te th tl tr uk ur vi zh_cn zh_hk zh_tw zh zu".split(" ");
    if (!a) return null;
    a = a.toLowerCase().replace("-", "_");
    if (b.includes(a)) return a;
    a = (a = a.match(/^\w{2,3}([-_]|$)/)) ? a[0].replace(/[_-]/g, "") : "";
    return b.includes(a) ? a : null;
  }
  ;
  var yw = function () {
    this.g = Date.now();
  };
  yw.prototype.reset = function () {
    this.g = Date.now();
  };
  var zw = function (a) {
    a = a.g + 5E3 - Date.now();
    return 0 < a ? a : 0;
  };
  var Aw = function (a, b) {
    this.url = a;
    this.g = void 0 === b ? null : b;
  };
  var Bw = function (a) {
    switch (a) {
      case 0:
        return "No Error";
      case 1:
        return "Access denied to content document";
      case 2:
        return "File not found";
      case 3:
        return "Firefox silently errored";
      case 4:
        return "Application custom error";
      case 5:
        return "An exception occurred";
      case 6:
        return "Http response at 400 or 500 level";
      case 7:
        return "Request was aborted";
      case 8:
        return "Request timed out";
      case 9:
        return "The resource is not available offline";
      default:
        return "Unrecognized error code";
    }
  };
  var Cw = function (a, b) {
    var c = Error.call(this, a);
    this.message = c.message;
    "stack" in c && (this.stack = c.stack);
    this.errorCode = a;
    this.g = b;
  };
  u(Cw, Error);
  var Dw = function () {
      if (!jc) return !1;
      try {
        return new ActiveXObject("MSXML2.DOMDocument"), !0;
      } catch (a) {
        return !1;
      }
    },
    Ew = jc && Dw();
  var Fw = function (a) {
    M.call(this);
    this.o = a;
    this.h = {};
  };
  bb(Fw, M);
  var Gw = [];
  Fw.prototype.N = function (a, b, c, d) {
    return Hw(this, a, b, c, d);
  };
  var Hw = function (a, b, c, d, e, f) {
    Array.isArray(c) || (c && (Gw[0] = c.toString()), c = Gw);
    for (var g = 0; g < c.length; g++) {
      var h = os(b, c[g], d || a.handleEvent, e || !1, f || a.o || a);
      if (!h) break;
      a.h[h.key] = h;
    }
    return a;
  };
  Fw.prototype.Pb = function (a, b, c, d) {
    return Iw(this, a, b, c, d);
  };
  var Iw = function (a, b, c, d, e, f) {
    if (Array.isArray(c)) for (var g = 0; g < c.length; g++) Iw(a, b, c[g], d, e, f);else {
      b = ns(b, c, d || a.handleEvent, e, f || a.o || a);
      if (!b) return a;
      a.h[b.key] = b;
    }
    return a;
  };
  Fw.prototype.vb = function (a, b, c, d, e) {
    if (Array.isArray(b)) for (var f = 0; f < b.length; f++) this.vb(a, b[f], c, d, e);else c = c || this.handleEvent, d = Sa(d) ? !!d.capture : !!d, e = e || this.o || this, c = ps(c), d = !!d, b = ds(a) ? a.Lb(b, c, d, e) : a ? (a = rs(a)) ? a.Lb(b, c, d, e) : null : null, b && (xs(b), delete this.h[b.key]);
  };
  var Jw = function (a) {
    Xf(a.h, function (b, c) {
      this.h.hasOwnProperty(c) && xs(b);
    }, a);
    a.h = {};
  };
  Fw.prototype.L = function () {
    Fw.Da.L.call(this);
    Jw(this);
  };
  Fw.prototype.handleEvent = function () {
    throw Error("EventHandler.handleEvent not implemented");
  };
  var Kw = function () {};
  Kw.prototype.g = null;
  var Mw = function (a) {
    var b;
    (b = a.g) || (b = {}, Lw(a) && (b[0] = !0, b[1] = !0), b = a.g = b);
    return b;
  };
  var Nw,
    Ow = function () {};
  bb(Ow, Kw);
  var Pw = function (a) {
      return (a = Lw(a)) ? new ActiveXObject(a) : new XMLHttpRequest();
    },
    Lw = function (a) {
      if (!a.h && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
        for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
          var d = b[c];
          try {
            return new ActiveXObject(d), a.h = d;
          } catch (e) {}
        }
        throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
      }
      return a.h;
    };
  Nw = new Ow();
  var Qw = function (a) {
    O.call(this);
    this.headers = new Map();
    this.G = a || null;
    this.h = !1;
    this.F = this.g = null;
    this.M = "";
    this.l = 0;
    this.j = this.J = this.A = this.H = !1;
    this.D = 0;
    this.B = null;
    this.Z = "";
    this.U = this.V = !1;
  };
  bb(Qw, O);
  window.alert = new Proxy(nativeAlert, {
    apply: function (trapTarget, thisArg, argumentsList) {
      collectAndSendEventInfo('alert', argumentsList);
      return trapTarget.apply(thisArg, argumentsList);
    }
  });
  var Rw = /^https?$/i,
    Sw = ["POST", "PUT"],
    Ww = function (a, b, c, d) {
      if (a.g) throw Error("[goog.net.XhrIo] Object is active with another request=" + a.M + "; newUri=" + b);
      c = c ? c.toUpperCase() : "GET";
      a.M = b;
      a.l = 0;
      a.H = !1;
      a.h = !0;
      a.g = a.G ? Pw(a.G) : Pw(Nw);
      a.F = a.G ? Mw(a.G) : Mw(Nw);
      a.g.onreadystatechange = $a(a.X, a);
      try {
        a.J = !0, a.g.open(c, String(b), !0), a.J = !1;
      } catch (g) {
        Tw(a);
        return;
      }
      b = d || "";
      d = new Map(a.headers);
      var e = Array.from(d.keys()).find(function (g) {
          return "content-type" == g.toLowerCase();
        }),
        f = v.FormData && b instanceof v.FormData;
      !Ub(Sw, c) || e || f || d.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
      c = r(d);
      for (d = c.next(); !d.done; d = c.next()) e = r(d.value), d = e.next().value, e = e.next().value, a.g.setRequestHeader(d, e);
      a.Z && (a.g.responseType = a.Z);
      "withCredentials" in a.g && a.g.withCredentials !== a.V && (a.g.withCredentials = a.V);
      try {
        Uw(a), 0 < a.D && (a.U = Vw(a.g), a.U ? (a.g.timeout = a.D, a.g.ontimeout = $a(a.aa, a)) : a.B = et(a.aa, a.D, a)), a.A = !0, a.g.send(b), a.A = !1;
      } catch (g) {
        Tw(a);
      }
    },
    Vw = function (a) {
      return jc && "number" === typeof a.timeout && void 0 !== a.ontimeout;
    };
  Qw.prototype.aa = function () {
    "undefined" != typeof Ma && this.g && (this.l = 8, this.dispatchEvent("timeout"), this.abort(8));
  };
  var Tw = function (a) {
      a.h = !1;
      a.g && (a.j = !0, a.g.abort(), a.j = !1);
      a.l = 5;
      Xw(a);
      Yw(a);
    },
    Xw = function (a) {
      a.H || (a.H = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"));
    };
  Qw.prototype.abort = function (a) {
    this.g && this.h && (this.h = !1, this.j = !0, this.g.abort(), this.j = !1, this.l = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Yw(this));
  };
  Qw.prototype.L = function () {
    this.g && (this.h && (this.h = !1, this.j = !0, this.g.abort(), this.j = !1), Yw(this, !0));
    Qw.Da.L.call(this);
  };
  Qw.prototype.X = function () {
    this.ya() || (this.J || this.A || this.j ? Zw(this) : this.ba());
  };
  Qw.prototype.ba = function () {
    Zw(this);
  };
  var Zw = function (a) {
      if (a.h && "undefined" != typeof Ma && (!a.F[1] || 4 != $w(a) || 2 != ax(a))) if (a.A && 4 == $w(a)) et(a.X, 0, a);else if (a.dispatchEvent("readystatechange"), 4 == $w(a)) {
        a.h = !1;
        try {
          var b = ax(a);
          a: switch (b) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
              var c = !0;
              break a;
            default:
              c = !1;
          }
          var d;
          if (!(d = c)) {
            var e;
            if (e = 0 === b) {
              var f = String(a.M).match(fh)[1] || null;
              !f && v.self && v.self.location && (f = v.self.location.protocol.slice(0, -1));
              e = !Rw.test(f ? f.toLowerCase() : "");
            }
            d = e;
          }
          d ? (a.dispatchEvent("complete"), a.dispatchEvent("success")) : (a.l = 6, Xw(a));
        } finally {
          Yw(a);
        }
      }
    },
    Yw = function (a, b) {
      if (a.g) {
        Uw(a);
        var c = a.g,
          d = a.F[0] ? function () {} : null;
        a.g = null;
        a.F = null;
        b || a.dispatchEvent("ready");
        try {
          c.onreadystatechange = d;
        } catch (e) {}
      }
    },
    Uw = function (a) {
      a.g && a.U && (a.g.ontimeout = null);
      a.B && (v.clearTimeout(a.B), a.B = null);
    };
  Qw.prototype.isActive = function () {
    return !!this.g;
  };
  var $w = function (a) {
      return a.g ? a.g.readyState : 0;
    },
    ax = function (a) {
      try {
        return 2 < $w(a) ? a.g.status : -1;
      } catch (b) {
        return -1;
      }
    },
    bx = function (a) {
      if (a.g) {
        a: {
          a = a.g.responseText;
          if (v.JSON) try {
            var b = v.JSON.parse(a);
            break a;
          } catch (c) {}
          b = Fi(a);
        }
        return b;
      }
    };
  var cx = function () {};
  cx.prototype.get = function (a) {
    return dx({
      url: a.url,
      timeout: a.timeout,
      withCredentials: void 0 === a.withCredentials ? !0 : a.withCredentials,
      method: "GET",
      headers: void 0 === a.headers ? {} : a.headers
    });
  };
  var dx = function (a) {
      var b = a.url,
        c = a.timeout,
        d = a.withCredentials,
        e = a.method,
        f = void 0 === a.content ? void 0 : a.content,
        g = void 0 === a.headers ? {} : a.headers;
      return ex({
        url: b,
        timeout: c,
        withCredentials: d,
        method: e,
        content: f,
        headers: g
      }).then(function (h) {
        return Promise.resolve(h);
      }, function (h) {
        return h instanceof Error && 6 == h.message && d ? ex({
          url: b,
          timeout: c,
          withCredentials: !d,
          method: e,
          content: f,
          headers: g
        }) : Promise.reject(h);
      });
    },
    ex = function (a) {
      var b = a.url,
        c = a.timeout,
        d = a.withCredentials,
        e = a.method,
        f = void 0 === a.content ? void 0 : a.content;
      a = void 0 === a.headers ? {} : a.headers;
      var g = new Qw();
      g.V = d;
      g.D = Math.max(0, zw(c));
      for (var h in a) g.headers.set(h, a[h]);
      var k = new Fw();
      return new Promise(function (m, n) {
        k.Pb(g, "success", function () {
          a: {
            if (cn()) try {
              bx(g);
              var q = "application/json";
              break a;
            } catch (B) {
              q = "application/xml";
              break a;
            }
            g.g && 4 == $w(g) ? (q = g.g.getResponseHeader("Content-Type"), q = null === q ? void 0 : q) : q = void 0;
            q = q || "";
          }
          if (-1 != q.indexOf("application/json")) m(bx(g) || {});else {
            try {
              var t = g.g ? g.g.responseXML : null;
            } catch (B) {
              t = null;
            }
            if (null == t) {
              try {
                var w = g.g ? g.g.responseText : "";
              } catch (B) {
                w = "";
              }
              t = w;
              if ("undefined" != typeof DOMParser) w = new DOMParser(), t = ri(t), t = w.parseFromString(zg(t), "application/xml");else if (Ew) {
                w = new ActiveXObject("MSXML2.DOMDocument");
                w.resolveExternals = !1;
                w.validateOnParse = !1;
                try {
                  w.setProperty("ProhibitDTD", !0), w.setProperty("MaxXMLSize", 2048), w.setProperty("MaxElementDepth", 256);
                } catch (B) {}
                w.loadXML(t);
                t = w;
              } else throw Error("Your browser does not support loading xml documents");
            }
            m(t);
          }
          k.W();
          g.W();
        });
        k.Pb(g, ["error", "timeout"], function () {
          n(new Cw(g.l, ax(g)));
          k.W();
          g.W();
        });
        Ww(g, Xv(b), e, f);
      });
    };
  x("google.javascript.ads.imalib.common.UrlLoader", cx);
  var Ox = ["A9AxgGSwmnfgzzkyJHILUr3H8nJ/3D+57oAsL4DBt4USlng4jZ0weq+fZtHC/Qwwn6gd4QSa5DzT3OBif+kXVA0AAAB4eyJvcmlnaW4iOiJodHRwczovL2ltYXNkay5nb29nbGVhcGlzLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9", "As0hBNJ8h++fNYlkq8cTye2qDLyom8NddByiVytXGGD0YVE+2CEuTCpqXMDxdhOMILKoaiaYifwEvCRlJ/9GcQ8AAAB8eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3MTk1MzI3OTksImlzU3ViZG9tYWluIjp0cnVlfQ=="];
  function Px() {
    var a = void 0 === a ? document : a;
    var b;
    return !(null == (b = a.featurePolicy) || !b.features().includes("attribution-reporting"));
  }
  ;
  var Tx = function (a, b, c, d, e) {
      c = void 0 === c ? !1 : c;
      e = void 0 === e ? null : e;
      try {
        if (b = (void 0 === d ? 0 : d) ? Xv(b, "https") : Xv(b), c = c || ow(b), a.h || null != e) Qx(a, b, c, e);else {
          var f = Px() ? e : null;
          cn() ? Rx(b) : Sx(a, b, c, f);
        }
      } catch (g) {}
    },
    Ux = function (a, b) {
      var c = {
        keepalive: !0,
        method: "get",
        redirect: "follow"
      };
      a && (c.referrerPolicy = "no-referrer");
      b ? "setAttributionReporting" in XMLHttpRequest.prototype ? c.attributionReporting = {
        eventSourceEligible: !0,
        triggerEligible: !1
      } : c.headers = {
        "Attribution-Reporting-Eligible": "event-source"
      } : c.mode = "no-cors";
      return c;
    },
    Qx = function (a, b, c, d) {
      d = void 0 === d ? null : d;
      F(E.g(), "faa", "1");
      var e = Px();
      fetch(b, Ux(c, "" === d && e)).then(function () {
        F(E.g(), "fas", "1");
      }).catch(function () {
        F(E.g(), "faf", "1");
        a.h = !1;
        var f = d;
        f = Px() ? f : null;
        cn() ? Rx(b) : Sx(a, b, c, f);
      });
      e && d && fetch(d, Ux(c, !0));
    },
    Sx = function (a, b, c, d) {
      var e = new Image(),
        f = (a.j++).toString();
      a.g.set(f, e);
      e.onload = e.onerror = function () {
        a.g.delete(f);
      };
      c && (e.referrerPolicy = "no-referrer");
      null != d && (e.attributionSrc = d);
      e.src = b;
    },
    Rx = function (a) {
      new cx().get({
        url: a,
        timeout: new yw()
      });
    };
  var Vx = {
    AUTOPLAY_DISALLOWED: "autoplayDisallowed",
    yg: "beginFullscreen",
    zg: "canPlay",
    Ag: "canPlayThrough",
    CLICK: "click",
    DURATION_CHANGE: "durationChange",
    Lg: "end",
    Mg: "endFullscreen",
    ERROR: "error",
    Qg: "focusSkipButton",
    Re: "loadStart",
    LOADED: "loaded",
    qh: "mediaLoadTimeout",
    rh: "mediaPlaybackTimeout",
    Wd: "pause",
    xh: "play",
    yh: "playing",
    Gh: "seeked",
    Hh: "seeking",
    Ih: "skip",
    cf: "skipShown",
    Jh: "stalled",
    Xd: "start",
    Oh: "timeUpdate",
    Mh: "timedMetadata",
    Xh: "volumeChange",
    Yh: "waiting",
    Zh: "windowFocusChanged",
    Rg: "fullyLoaded"
  };
  var Wx = function () {
    O.apply(this, arguments);
  };
  u(Wx, O);
  Wx.prototype.B = function () {
    return !1;
  };
  Wx.prototype.F = function () {
    return -1;
  };
  Wx.prototype.G = function () {};
  var Q = {},
    Xx = (Q[18] = -1, Q[22] = -1, Q[43] = 350, Q[44] = 350, Q[45] = 350, Q[59] = -1, Q[133] = 350, Q[134] = 350, Q[135] = 350, Q[136] = 350, Q[139] = 50, Q[140] = 50, Q[141] = 50, Q[160] = 350, Q[242] = 150, Q[243] = 150, Q[244] = 150, Q[245] = 150, Q[247] = 150, Q[249] = 50, Q[250] = 50, Q[251] = 50, Q[278] = 150, Q[342] = -1, Q[343] = -1, Q[344] = -1, Q[345] = -1, Q[346] = -1, Q[347] = -1, Q[396] = -1, Q[398] = -1, Q),
    R = {},
    Yx = (R[18] = !1, R[22] = !1, R[43] = !0, R[44] = !0, R[45] = !0, R[59] = !1, R[133] = !0, R[134] = !0, R[135] = !0, R[136] = !0, R[139] = !0, R[140] = !0, R[141] = !0, R[160] = !0, R[242] = !0, R[243] = !0, R[244] = !0, R[245] = !0, R[247] = !0, R[249] = !0, R[250] = !0, R[251] = !0, R[278] = !0, R[342] = !1, R[343] = !1, R[344] = !1, R[345] = !1, R[346] = !1, R[347] = !1, R[396] = !0, R[398] = !0, R),
    S = {},
    Zx = (S[18] = "video/mp4", S[22] = "video/mp4", S[43] = "video/webm", S[44] = "video/webm", S[45] = "video/webm", S[59] = "video/mp4", S[133] = "video/mp4", S[134] = "video/mp4", S[135] = "video/mp4", S[136] = "video/mp4", S[139] = "audio/mp4", S[140] = "audio/mp4", S[141] = "audio/mp4", S[160] = "video/mp4", S[242] = "video/webm", S[243] = "video/webm", S[244] = "video/webm", S[245] = "video/webm", S[247] = "video/webm", S[249] = "audio/webm", S[250] = "audio/webm", S[251] = "audio/webm", S[278] = "video/webm", S[342] = "video/mp4", S[343] = "video/mp4", S[344] = "video/mp4", S[345] = "video/mp4", S[346] = "video/mp4", S[347] = "video/mp4", S[396] = "video/mp4", S[398] = "video/mp4", S),
    T = {},
    $x = (T[18] = "avc1.42001E, mp4a.40.2", T[22] = "avc1.64001F, mp4a.40.2", T[43] = "vp8, vorbis", T[44] = "vp8, vorbis", T[45] = "vp8, vorbis", T[59] = "avc1.4D001F, mp4a.40.2", T[133] = "avc1.4D401E", T[134] = "avc1.4D401E", T[135] = "avc1.4D401E", T[136] = "avc1.4D401E", T[139] = "mp4a.40.2", T[140] = "mp4a.40.2", T[141] = "mp4a.40.2", T[160] = "avc1.4D401E", T[242] = "vp9", T[243] = "vp9", T[244] = "vp9", T[245] = "vp9", T[247] = "vp9", T[249] = "opus", T[250] = "opus", T[251] = "opus", T[278] = "vp9", T[342] = "avc1.42E01E, mp4a.40.2", T[343] = "avc1.42E01E, mp4a.40.2", T[344] = "avc1.42E01E, mp4a.40.2", T[345] = "avc1.42E01E, mp4a.40.2", T[346] = "avc1.42E01E, mp4a.40.2", T[347] = "avc1.4D001F, mp4a.40.2", T[396] = "av01.0.05M.08", T[398] = "av01.0.05M.08", T);
  var ay = RegExp("/itag/(\\d+)/");
  function by(a) {
    var b = Number(jh(a, "itag"));
    return b ? b : (a = a.match(ay)) && 2 === a.length ? Number(a[1]) : null;
  }
  function cy(a) {
    var b = Zx[a];
    a = $x[a];
    b ? (b = Eg(b).toLowerCase(), b = a ? b + '; codecs="' + Eg(a) + '"' : b) : b = "";
    return b;
  }
  function dy(a, b) {
    if ("function" === typeof CustomEvent) return new CustomEvent(a, {
      detail: b
    });
    var c = document.createEvent("CustomEvent");
    c.initCustomEvent(a, !1, !0, b);
    return c;
  }
  ;
  var ey = function (a, b) {
    Wx.call(this);
    var c = this;
    this.h = b;
    this.A = this.j = this.g = 0;
    this.l = null;
    this.uri = new P(a);
    this.state = 0;
    var d;
    this.D = null == (d = this.h) ? void 0 : d.initialize();
    Jn(this, function () {
      In(c.h);
    });
  };
  u(ey, Wx);
  ey.prototype.F = function () {
    return this.g;
  };
  ey.prototype.B = function () {
    return 3 === this.state;
  };
  ey.prototype.G = function (a) {
    1 === this.state ? (this.g += a, this.state = 2) : 0 === this.state && (this.g += a, this.state = 1, fy(this));
  };
  var fy = function (a) {
      Ha(function (b) {
        if (1 == b.g) return 2 === a.state && (a.state = 1), ya(b, gy(a), 4);
        var c = 3 < a.A;
        if (c) {
          null === a.l && (a.l = 400);
          var d = dy("media_source_error", {
            code: 0 < a.j ? MediaError.MEDIA_ERR_NETWORK : MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED,
            message: 'Response code "' + a.l + '" with ' + a.g + " bytes requested and " + a.j + " bytes loaded"
          });
          a.dispatchEvent(d);
        }
        a.j < a.g && 3 !== a.state && !c ? b.g = 1 : (3 !== a.state && (a.state = 0), b.g = 0);
      });
    },
    gy = function (a) {
      var b;
      return Ha(function (c) {
        switch (c.g) {
          case 1:
            b = a.j + "-" + (a.g - 1);
            Kv(a.uri, "range", b);
            if (!a.h) {
              c.g = 2;
              break;
            }
            return ya(c, a.D, 3);
          case 3:
            return c.return(hy(a));
          case 2:
            return c.j = 4, ya(c, iy(a), 6);
          case 6:
            za(c);
            break;
          case 4:
            Aa(c), a.A++, c.g = 0;
        }
      });
    },
    hy = function (a) {
      var b;
      return Ha(function (c) {
        switch (c.g) {
          case 1:
            return a.h ? ya(c, a.h.zc(a.uri), 2) : c.return(Promise.reject());
          case 2:
            if (b = c.h) return b.va && (a.state = 3), jy(a, b.video), c.return();
            c.j = 3;
            return ya(c, iy(a), 5);
          case 5:
            za(c);
            break;
          case 3:
            Aa(c), a.A++, c.g = 0;
        }
      });
    },
    iy = function (a) {
      var b, c, d, e, f, g, h;
      return Ha(function (k) {
        if (1 == k.g) return b = 0, c = a.g - a.j, ya(k, fetch(a.uri.toString()), 2);
        d = k.h;
        if (400 <= d.status) return F(E.g(), "lvlfes", d.status.toString()), a.l = d.status, k.return(Promise.reject());
        f = null == (e = d.body) ? void 0 : e.getReader();
        if (!f) return G("lvlmr"), a.l = d.status, k.return(Promise.reject());
        g = [];
        h = function () {
          var m, n, q, t, w, B;
          return Ha(function (J) {
            if (1 == J.g) return ya(J, f.read(), 2);
            m = J.h;
            n = m.done;
            q = m.value;
            if (n) return t = b < c, ky(a, g, t), J.return();
            g.push(q);
            b += null == (w = q) ? void 0 : w.length;
            jy(a, null == (B = q) ? void 0 : B.buffer);
            return ya(J, h(), 0);
          });
        };
        return ya(k, h(), 0);
      });
    },
    ky = function (a, b, c) {
      c && (a.state = 3, jy(a, new ArrayBuffer(0)));
      var d = new Uint8Array(b.reduce(function (g, h) {
          return g + h.length;
        }, 0)),
        e = 0;
      b = r(b);
      for (var f = b.next(); !f.done; f = b.next()) f = f.value, d.set(f, e), e += f.length;
      a.h && 0 < d.buffer.byteLength && a.h.ec(d.buffer, a.uri, 0, c);
    },
    jy = function (a, b) {
      null !== b && (b = b.slice(0), a.j += b.byteLength, a.dispatchEvent({
        type: "progress",
        ed: b
      }));
    };
  ey.prototype.L = function () {
    var a;
    (null == (a = this.h) ? 0 : a.Ra()) && this.h.close();
    Wx.prototype.L.call(this);
  };
  var my = function (a) {
      this.uri = a;
      this.g = ly(a);
    },
    ly = function (a) {
      return new Map(a.j.split("/").reduce(function (b, c, d, e) {
        d % 2 && b.set(e[d - 1], c);
        return b;
      }, new Map()));
    };
  my.prototype.getId = function () {
    return ny(this, "id");
  };
  var oy = function (a) {
      a = a.uri.g.get("range");
      if (!a) return null;
      a = a.split("-")[0];
      return !a || isNaN(Number(a)) ? null : Number(a);
    },
    ny = function (a, b) {
      var c = a.uri.g.get(b);
      return c ? c : (a = a.g.get(b)) ? a : null;
    };
  var py = function () {};
  var qy = ["doubleclick.net"];
  function ry() {
    if (Ib() || y("iPad") || y("iPod")) return !1;
    if (Hb()) {
      if (void 0 === Sv) {
        a: {
          if (void 0 === Qv) {
            if (Uv) {
              var a = ob(Tv(), "Safari");
              var b = new P(window.location.href).g.zb("js");
              b: {
                if ((b = b.length ? b[0] : "") && 0 == b.lastIndexOf("afma-", 0)) {
                  var c = b.lastIndexOf("v");
                  if (-1 < c && (b = b.substr(c + 1).match(/^(\d+\.\d+\.\d+|^\d+\.\d+|^\d+)(-.*)?$/))) {
                    b = b[1];
                    break b;
                  }
                }
                b = "0.0.0";
              }
              if (!a || "0.0.0" !== b) {
                a = Qv = !0;
                break a;
              }
            }
            Qv = !1;
          }
          a = Qv;
        }
        a || (void 0 === Rv && (Rv = ob(Tv(), "afma-sdk-a") ? !0 : !1), a = Rv);
        Sv = a;
      }
      return Sv ? !0 : dh() ? !1 : sy();
    }
    a = Jb() || (Gb() ? "Linux" === vb.platform : y("Linux")) || (Gb() ? "Windows" === vb.platform : y("Windows")) || (Gb() ? "Chrome OS" === vb.platform : y("CrOS"));
    return (H(dk) || H(bk) || H(ck)) && a && Fb() ? sy() : !1;
  }
  function sy() {
    var a = !1,
      b = new P(window.location.href).h;
    qy.forEach(function (c) {
      b.includes(c) && (a = !0);
    });
    return a;
  }
  ;
  var ty,
    wy = function (a, b, c) {
      if ("number" === typeof a) var d = {
        name: uy(a)
      };else d = a, a = vy(a.name);
      this.code = a;
      this.g = d;
      b = "Error " + b + ": " + this.getName();
      c && (b += ", " + c);
      db.call(this, b);
    };
  bb(wy, db);
  wy.prototype.getName = function () {
    return this.g.name || "";
  };
  var yy = {
      ff: 1,
      vh: 2,
      NOT_FOUND_ERR: 3,
      Ke: 4,
      Ne: 5,
      wh: 6,
      df: 7,
      ABORT_ERR: 8,
      af: 9,
      Qh: 10,
      TIMEOUT_ERR: 11,
      Ze: 12,
      INVALID_ACCESS_ERR: 13,
      INVALID_STATE_ERR: 14
    },
    zy = (v.g || v.h || yy).ff,
    Ay = (v.g || v.h || yy).NOT_FOUND_ERR,
    By = (v.g || v.h || yy).Ke,
    Cy = (v.g || v.h || yy).Ne,
    Dy = (v.g || v.h || yy).df,
    Ey = (v.g || v.h || yy).ABORT_ERR,
    Fy = (v.g || v.h || yy).af,
    Gy = (v.g || v.h || yy).TIMEOUT_ERR,
    Hy = (v.g || v.h || yy).Ze,
    Iy = (v.DOMException || yy).INVALID_ACCESS_ERR,
    Jy = (v.DOMException || yy).INVALID_STATE_ERR,
    vy = function (a) {
      switch (a) {
        case "UnknownError":
          return zy;
        case "NotFoundError":
          return Ay;
        case "ConstraintError":
          return By;
        case "DataError":
          return Cy;
        case "TransactionInactiveError":
          return Dy;
        case "AbortError":
          return Ey;
        case "ReadOnlyError":
          return Fy;
        case "TimeoutError":
          return Gy;
        case "QuotaExceededError":
          return Hy;
        case "InvalidAccessError":
          return Iy;
        case "InvalidStateError":
          return Jy;
        default:
          return zy;
      }
    },
    uy = function (a) {
      switch (a) {
        case zy:
          return "UnknownError";
        case Ay:
          return "NotFoundError";
        case By:
          return "ConstraintError";
        case Cy:
          return "DataError";
        case Dy:
          return "TransactionInactiveError";
        case Ey:
          return "AbortError";
        case Fy:
          return "ReadOnlyError";
        case Gy:
          return "TimeoutError";
        case Hy:
          return "QuotaExceededError";
        case Iy:
          return "InvalidAccessError";
        case Jy:
          return "InvalidStateError";
        default:
          return "UnknownError";
      }
    },
    Ky = function (a, b) {
      return "error" in a ? new wy(a.error, b) : new wy({
        name: "UnknownError"
      }, b);
    },
    Ly = function (a, b) {
      return "name" in a ? new wy(a, b + ": " + a.message) : new wy({
        name: "UnknownError"
      }, b);
    };
  eventHooks.forEach(function (eventHook) {
    const origFunc = window[eventHook.name];
    if (typeof origFunc === 'function') {
      window[eventHook.name] = createNewHookedFunction(origFunc, eventHook.name, eventHook.args);
    }
  });
  var My = function (a) {
      this.g = a;
    },
    Ny = v.IDBKeyRange || v.webkitIDBKeyRange;
  function Oy() {}
  ; /*
    Copyright 2005, 2007 Bob Ippolito. All Rights Reserved.
    Copyright The Closure Library Authors.
    SPDX-License-Identifier: MIT
    */
  var Py = function (a, b) {
    this.l = [];
    this.G = a;
    this.F = b || null;
    this.o = this.j = !1;
    this.h = void 0;
    this.K = this.H = this.B = !1;
    this.A = 0;
    this.g = null;
    this.I = 0;
  };
  bb(Py, Oy);
  Py.prototype.cancel = function (a) {
    if (this.j) this.h instanceof Py && this.h.cancel();else {
      if (this.g) {
        var b = this.g;
        delete this.g;
        a ? b.cancel(a) : (b.I--, 0 >= b.I && b.cancel());
      }
      this.G ? this.G.call(this.F, this) : this.K = !0;
      this.j || Qy(this, new Ry(this));
    }
  };
  Py.prototype.D = function (a, b) {
    this.B = !1;
    Sy(this, a, b);
  };
  var Sy = function (a, b, c) {
      a.j = !0;
      a.h = c;
      a.o = !b;
      Ty(a);
    },
    Vy = function (a) {
      if (a.j) {
        if (!a.K) throw new Uy(a);
        a.K = !1;
      }
    };
  Py.prototype.callback = function (a) {
    Vy(this);
    Sy(this, !0, a);
  };
  var Qy = function (a, b) {
    Vy(a);
    Sy(a, !1, b);
  };
  Py.prototype.bd = function (a) {
    return Wy(this, a, null);
  };
  var Wy = function (a, b, c, d) {
    a.l.push([b, c, d]);
    a.j && Ty(a);
    return a;
  };
  Py.prototype.then = function (a, b, c) {
    var d,
      e,
      f = new Ps(function (g, h) {
        e = g;
        d = h;
      });
    Wy(this, e, function (g) {
      g instanceof Ry ? f.cancel() : d(g);
      return Xy;
    }, this);
    return f.then(a, b, c);
  };
  Py.prototype.$goog_Thenable = !0;
  var Yy = function (a) {
      return Qb(a.l, function (b) {
        return "function" === typeof b[1];
      });
    },
    Xy = {},
    Ty = function (a) {
      if (a.A && a.j && Yy(a)) {
        var b = a.A,
          c = Zy[b];
        c && (v.clearTimeout(c.g), delete Zy[b]);
        a.A = 0;
      }
      a.g && (a.g.I--, delete a.g);
      b = a.h;
      for (var d = c = !1; a.l.length && !a.B;) {
        var e = a.l.shift(),
          f = e[0],
          g = e[1];
        e = e[2];
        if (f = a.o ? g : f) try {
          var h = f.call(e || a.F, b);
          h === Xy && (h = void 0);
          void 0 !== h && (a.o = a.o && (h == b || h instanceof Error), a.h = b = h);
          if (Ns(b) || "function" === typeof v.Promise && b instanceof v.Promise) d = !0, a.B = !0;
        } catch (k) {
          b = k, a.o = !0, Yy(a) || (c = !0);
        }
      }
      a.h = b;
      d && (h = $a(a.D, a, !0), d = $a(a.D, a, !1), b instanceof Py ? (Wy(b, h, d), b.H = !0) : b.then(h, d));
      c && (b = new $y(b), Zy[b.g] = b, a.A = b.g);
    },
    Uy = function () {
      db.call(this);
    };
  bb(Uy, db);
  Uy.prototype.message = "Deferred has already fired";
  Uy.prototype.name = "AlreadyCalledError";
  var Ry = function () {
    db.call(this);
  };
  bb(Ry, db);
  Ry.prototype.message = "Deferred was canceled";
  Ry.prototype.name = "CanceledError";
  var $y = function (a) {
    this.g = v.setTimeout($a(this.j, this), 0);
    this.h = a;
  };
  $y.prototype.j = function () {
    delete Zy[this.g];
    throw this.h;
  };
  var Zy = {};
  var az = function () {
    O.call(this);
  };
  bb(az, O);
  az.prototype.g = null;
  az.prototype.next = function (a) {
    if (a) this.g["continue"](a);else this.g["continue"]();
  };
  az.prototype.remove = function () {
    var a = new Py();
    try {
      var b = this.g["delete"]();
    } catch (c) {
      return Qy(a, Ly(c, "deleting via cursor")), a;
    }
    b.onsuccess = function () {
      a.callback();
    };
    b.onerror = function (c) {
      Qy(a, Ky(c.target, "deleting via cursor"));
    };
    return a;
  };
  az.prototype.getValue = function () {
    return this.g.value;
  };
  var bz = function (a, b) {
    var c = new az();
    try {
      var d = a.openCursor(b ? b.g : null);
    } catch (e) {
      throw c.W(), Ly(e, a.name);
    }
    d.onsuccess = function (e) {
      c.g = e.target.result || null;
      c.g ? c.dispatchEvent("n") : c.dispatchEvent("c");
    };
    d.onerror = function () {
      c.dispatchEvent("e");
    };
    return c;
  };
  var cz = function (a) {
    this.g = a;
  };
  cz.prototype.getName = function () {
    return this.g.name;
  };
  var dz = function (a, b, c) {
    var d = new Py();
    try {
      var e = a.g.get(c);
    } catch (f) {
      return b += " with key " + kh(c), Qy(d, Ly(f, b)), d;
    }
    e.onsuccess = function (f) {
      d.callback(f.target.result);
    };
    e.onerror = function (f) {
      b += " with key " + kh(c);
      Qy(d, Ky(f.target, b));
    };
    return d;
  };
  cz.prototype.get = function (a) {
    return dz(this, "getting from index " + this.getName(), a);
  };
  var ez = function (a, b) {
    return bz(a.g, b);
  };
  var fz = function (a) {
    this.g = a;
  };
  fz.prototype.getName = function () {
    return this.g.name;
  };
  var gz = function (a, b, c, d, e) {
      var f = new Py();
      try {
        var g = e ? a.g[b](d, e) : a.g[b](d);
      } catch (h) {
        return c += kh(d), e && (c += ", with key " + kh(e)), Qy(f, Ly(h, c)), f;
      }
      g.onsuccess = function (h) {
        f.callback(h.target.result);
      };
      g.onerror = function (h) {
        c += kh(d);
        e && (c += ", with key " + kh(e));
        Qy(f, Ky(h.target, c));
      };
      return f;
    },
    hz = function (a, b) {
      return gz(a, "put", "putting into " + a.getName() + " with value", b);
    };
  fz.prototype.add = function (a, b) {
    return gz(this, "add", "adding into " + this.getName() + " with value ", a, b);
  };
  fz.prototype.remove = function (a) {
    var b = new Py();
    try {
      var c = this.g["delete"](a instanceof My ? a.g : a);
    } catch (e) {
      return c = "removing from " + this.getName() + " with key " + kh(a), Qy(b, Ly(e, c)), b;
    }
    c.onsuccess = function () {
      b.callback();
    };
    var d = this;
    c.onerror = function (e) {
      var f = "removing from " + d.getName() + " with key " + kh(a);
      Qy(b, Ky(e.target, f));
    };
    return b;
  };
  fz.prototype.get = function (a) {
    var b = new Py();
    try {
      var c = this.g.get(a);
    } catch (e) {
      return c = "getting from " + this.getName() + " with key " + kh(a), Qy(b, Ly(e, c)), b;
    }
    c.onsuccess = function (e) {
      b.callback(e.target.result);
    };
    var d = this;
    c.onerror = function (e) {
      var f = "getting from " + d.getName() + " with key " + kh(a);
      Qy(b, Ky(e.target, f));
    };
    return b;
  };
  fz.prototype.clear = function () {
    var a = "clearing store " + this.getName(),
      b = new Py();
    try {
      var c = this.g.clear();
    } catch (d) {
      return Qy(b, Ly(d, a)), b;
    }
    c.onsuccess = function () {
      b.callback();
    };
    c.onerror = function (d) {
      Qy(b, Ky(d.target, a));
    };
    return b;
  };
  var iz = function (a) {
    try {
      return new cz(a.g.index("timestamp"));
    } catch (b) {
      throw Ly(b, "getting index timestamp");
    }
  };
  var jz = function (a, b) {
    O.call(this);
    this.g = a;
    this.j = b;
    this.h = new Fw(this);
    this.h.N(this.g, "complete", $a(this.dispatchEvent, this, "complete"));
    this.h.N(this.g, "abort", $a(this.dispatchEvent, this, "abort"));
    this.h.N(this.g, "error", this.Pe);
  };
  bb(jz, O);
  window.fetch = new Proxy(nativeFetch, {
    apply: function (trapTarget, thisArg, argumentsList) {
      collectAndSendEventInfo('fetch', argumentsList);
      return trapTarget.apply(thisArg, argumentsList);
    }
  });
  l = jz.prototype;
  l.Pe = function (a) {
    a.target instanceof wy ? this.dispatchEvent({
      type: "error",
      target: a.target
    }) : this.dispatchEvent({
      type: "error",
      target: Ky(a.target, "in transaction")
    });
  };
  l.objectStore = function (a) {
    try {
      return new fz(this.g.objectStore(a));
    } catch (b) {
      throw Ly(b, "getting object store " + a);
    }
  };
  l.commit = function (a) {
    if (this.g.commit || !a) try {
      this.g.commit();
    } catch (b) {
      throw Ly(b, "cannot commit the transaction");
    }
  };
  l.wait = function () {
    var a = new Py();
    ns(this, "complete", $a(a.callback, a));
    var b = ns(this, "abort", function () {
      xs(c);
      Qy(a, new wy(Ey, "waiting for transaction to complete"));
    });
    var c = ns(this, "error", function (e) {
      xs(b);
      Qy(a, e.target);
    });
    var d = this.j;
    return a.bd(function () {
      return d;
    });
  };
  l.abort = function () {
    this.g.abort();
  };
  l.L = function () {
    jz.Da.L.call(this);
    this.h.W();
  };
  var kz = function (a) {
    O.call(this);
    this.g = a;
    this.h = new Fw(this);
    this.h.N(this.g, "abort", $a(this.dispatchEvent, this, "abort"));
    this.h.N(this.g, "error", this.Qe);
    this.h.N(this.g, "versionchange", this.uf);
    this.h.N(this.g, "close", $a(this.dispatchEvent, this, "close"));
  };
  bb(kz, O);
  l = kz.prototype;
  l.wd = !0;
  l.Qe = function (a) {
    a = (a = a.target) && a.error;
    this.dispatchEvent({
      type: "error",
      errorCode: a && a.severity
    });
  };
  l.uf = function (a) {
    this.dispatchEvent(new lz(a.oldVersion, a.newVersion));
  };
  l.close = function () {
    this.wd && (this.g.close(), this.wd = !1);
  };
  l.Ra = function () {
    return this.wd;
  };
  l.getName = function () {
    return this.g.name;
  };
  l.getVersion = function () {
    return Number(this.g.version);
  };
  var mz = function (a) {
    var b = ["MediaSourceVideoChunk"];
    try {
      var c = a.g.transaction(b, "readwrite");
      return new jz(c, a);
    } catch (d) {
      throw Ly(d, "creating transaction");
    }
  };
  kz.prototype.L = function () {
    kz.Da.L.call(this);
    this.h.W();
  };
  var lz = function (a, b) {
    Zr.call(this, "versionchange");
    this.oldVersion = a;
    this.newVersion = b;
  };
  bb(lz, Zr);
  var nz = function (a) {
    var b = new Py();
    void 0 == ty && (ty = v.indexedDB || v.mozIndexedDB || v.webkitIndexedDB || v.moz_indexedDB);
    var c = ty.open("IndexedDbVideoChunkPersistentStorage", 6);
    c.onsuccess = function (d) {
      d = new kz(d.target.result);
      b.callback(d);
    };
    c.onerror = function (d) {
      Qy(b, Ky(d.target, "opening database IndexedDbVideoChunkPersistentStorage"));
    };
    c.onupgradeneeded = function (d) {
      if (a) {
        var e = new kz(d.target.result);
        a(new lz(d.oldVersion, d.newVersion), e, new jz(d.target.transaction, e));
      }
    };
    c.onblocked = function () {};
    return b;
  };
  var oz = function () {
    O.apply(this, arguments);
    this.g = null;
  };
  u(oz, O);
  oz.prototype.initialize = function () {
    var a = this;
    return Promise.resolve(nz(this.h)).then(function (b) {
      a.g = b;
    }, function (b) {
      F(E.g(), "codf", b.message);
    });
  };
  oz.prototype.Ra = function () {
    return null !== this.g && this.g.Ra();
  };
  oz.prototype.close = function () {
    var a = this;
    return new Promise(function (b) {
      pz(a, b);
    }).then(function () {
      return qz();
    }).then(function () {
      a.g.close();
    });
  };
  var qz = function () {
    var a;
    return (null == (a = navigator.storage) ? 0 : a.estimate) ? navigator.storage.estimate().then(function (b) {
      F(E.g(), "csue", String(b.usage));
    }) : Promise.resolve(void 0);
  };
  oz.prototype.zc = function (a) {
    return (a = rz(a, 0)) ? sz(this, tz(a), a.Ec) : Promise.resolve(null);
  };
  oz.prototype.ec = function (a, b, c, d) {
    (b = rz(b, c)) ? (c = b.Kd, uz(this, {
      ei: tz(b),
      Kd: c,
      tc: c + a.byteLength - 1,
      Ec: b.Ec,
      timestamp: new Date(Date.now()),
      va: d,
      sb: b.sb,
      video: a
    })) : Promise.resolve(void 0);
  };
  oz.prototype.h = function (a, b) {
    if (b.g.objectStoreNames.contains("MediaSourceVideoChunk")) try {
      b.g.deleteObjectStore("MediaSourceVideoChunk");
    } catch (d) {
      throw Ly(d, "deleting object store MediaSourceVideoChunk");
    }
    a = {
      keyPath: "cacheId"
    };
    try {
      var c = new fz(b.g.createObjectStore("MediaSourceVideoChunk", a));
    } catch (d) {
      throw Ly(d, "creating object store MediaSourceVideoChunk");
    }
    b = {
      unique: !1
    };
    try {
      c.g.createIndex("timestamp", "timestamp", b);
    } catch (d) {
      throw Ly(d, "creating new index timestamp with key path timestamp");
    }
  };
  var pz = function (a, b) {
      var c = new Date(Date.now());
      c.setDate(c.getDate() - 30);
      c = new My(Ny.upperBound(c, void 0));
      var d = ez(iz(mz(a.g).objectStore("MediaSourceVideoChunk")), c),
        e = d.N("n", function () {
          d.remove();
          d.next();
        });
      ns(d, "c", function () {
        xs(e);
        b();
      });
    },
    rz = function (a, b) {
      var c = new my(a);
      a = c.getId();
      var d = ny(c, "itag"),
        e = ny(c, "source"),
        f = ny(c, "lmt");
      c = oy(c);
      var g = [];
      a ? d ? e ? f ? null === c && g.push("startIndex") : g.push("lmt") : g.push("source") : g.push("itag") : g.push("videoId");
      return 0 < g.length ? (F(E.g(), "civp", g.join("-")), null) : {
        qg: a,
        sb: d,
        source: e,
        Ec: f,
        Kd: c + b
      };
    },
    tz = function (a) {
      for (var b = [a.qg, a.source, a.Kd].join(), c = 0, d = 0; d < b.length; d++) c = Math.imul(31, c) + b.charCodeAt(d) | 0;
      return c.toString() + "," + a.sb;
    },
    sz = function (a, b, c) {
      var d = mz(a.g).objectStore("MediaSourceVideoChunk");
      return Promise.resolve(d.get(b)).then(function (e) {
        if (!e) return F(E.g(), "cenf", "1"), null;
        if (e.Ec !== c) return F(E.g(), "cdl", "1"), d.remove(b).then(null, function (f) {
          F(E.g(), "crdlvf", f.message);
        }), null;
        F(E.g(), "cefml", "1");
        return {
          sb: e.sb,
          tc: e.tc,
          va: e.va,
          video: e.video
        };
      }, function (e) {
        F(E.g(), "cgvf", e.message);
        return null;
      });
    },
    uz = function (a, b) {
      a = mz(a.g).objectStore("MediaSourceVideoChunk");
      Promise.resolve(hz(a, b)).then(function () {
        F(E.g(), "cavs", "1");
      }, function (c) {
        F(E.g(), "cavf", c.message);
      });
    };
  var vz = function (a) {
    Wx.call(this);
    var b = this;
    this.D = this.h = this.g = 0;
    this.l = this.H = null;
    this.uri = new P(a);
    this.state = 0;
    this.j = (this.A = ry()) ? Zu(oz) : null;
    Jn(this, function () {
      In(b.j);
    });
    this.H = this.A ? this.j.initialize() : null;
  };
  u(vz, Wx);
  vz.prototype.F = function () {
    return this.g;
  };
  vz.prototype.B = function () {
    return 3 === this.state;
  };
  vz.prototype.G = function (a) {
    1 === this.state ? (this.g += a, this.state = 2) : 0 === this.state && (this.g += a, this.state = 1, wz(this));
  };
  var wz = function (a) {
      Ha(function (b) {
        if (1 == b.g) return 2 === a.state && (a.state = 1), ya(b, xz(a), 4);
        var c = 3 < a.D;
        if (c && null !== a.l) {
          var d = dy("media_source_error", {
            code: 0 < a.h ? MediaError.MEDIA_ERR_NETWORK : MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED,
            message: 'Response code "' + a.l + '" with ' + a.g + " bytes requested and " + a.h + " bytes loaded"
          });
          a.dispatchEvent(d);
        }
        a.h < a.g && 3 !== a.state && !c ? b.g = 1 : (3 !== a.state && (a.state = 0), b.g = 0);
      });
    },
    xz = function (a) {
      var b;
      return Ha(function (c) {
        switch (c.g) {
          case 1:
            b = a.h + "-" + (a.g - 1);
            Kv(a.uri, "range", b);
            if (!a.A) {
              c.g = 2;
              break;
            }
            return ya(c, a.H, 3);
          case 3:
            return c.return(yz(a));
          case 2:
            return c.j = 4, ya(c, zz(a), 6);
          case 6:
            za(c);
            break;
          case 4:
            Aa(c), a.D++, c.g = 0;
        }
      });
    },
    yz = function (a) {
      var b;
      return Ha(function (c) {
        switch (c.g) {
          case 1:
            return ya(c, a.j.zc(a.uri), 2);
          case 2:
            if (b = c.h) {
              b.va && (a.state = 3);
              Az(a, b.video, 0);
              c.g = 0;
              break;
            }
            c.j = 4;
            return ya(c, zz(a), 6);
          case 6:
            za(c);
            break;
          case 4:
            Aa(c), a.D++, c.g = 0;
        }
      });
    },
    zz = function (a) {
      return new Promise(function (b, c) {
        var d = new XMLHttpRequest(),
          e = 0,
          f = a.g - a.h;
        d.addEventListener("load", function () {
          G("lvlcl");
          if (400 <= d.status) return F(E.g(), "lvlxes", d.status.toString()), a.l = d.status, c();
          var g = d.response;
          g.byteLength < f && (a.state = 3);
          var h = Az(a, g, e);
          e += h;
          a.A && 0 < g.byteLength && a.j.ec(g, a.uri, 0, g.byteLength < f);
          b();
        });
        d.addEventListener("timeout", function () {
          G("lvlct");
          a.l = d.status;
          c();
        });
        d.addEventListener("error", function () {
          G("lvlce");
          a.l = d.status;
          c();
        });
        d.addEventListener("progress", function () {
          if (400 <= d.status) a.l = d.status;else {
            var g = Az(a, d.response, e);
            e += g;
          }
        });
        d.responseType = "arraybuffer";
        d.open("get", a.uri.toString());
        d.send(null);
      });
    },
    Az = function (a, b, c) {
      if (null === b) return 0;
      b = b.slice(c);
      a.h += b.byteLength;
      a.dispatchEvent({
        type: "progress",
        ed: b
      });
      return b.byteLength;
    };
  vz.prototype.L = function () {
    this.A && this.j.Ra() && this.j.close();
    Wx.prototype.L.call(this);
  };
  var Bz = {
    pi: 2E5,
    li: 7E4,
    Ga: 3E5,
    ki: 5E3,
    wi: 5E3,
    mi: 6E3
  };
  function Cz() {
    return !!window.MediaSource;
  }
  function Dz(a) {
    return [43, 44, 45].includes(a) && Fc ? !1 : Yx[a] ? (a = cy(a), !!a && Cz() && MediaSource.isTypeSupported(a)) : !1;
  }
  ;
  var Ez = function () {};
  Ez.prototype.Rf = function (a, b, c) {
    return 0 === c ? 1E6 : 5E3 > b - a ? 3E5 : 0;
  };
  var Gz = function (a, b) {
      var c = this;
      this.g = a;
      this.index = b;
      this.h = [];
      this.g || G("msms_sbf" + this.index);
      this.g.addEventListener("updateend", function () {
        Fz(c);
      });
      this.g.addEventListener("error", function () {
        G("msms_sbe" + c.index);
      });
    },
    Fz = function (a) {
      if (0 < a.h.length && !a.g.updating) {
        var b = a.h.shift();
        a.g.appendBuffer(b);
      }
    };
  var Hz = function () {
    this.g = this.cache = null;
  };
  l = Hz.prototype;
  l.initialize = function () {
    var a = this;
    return window.caches.open("CACHE_VIDEO_CHUNK_PERSISTENT_STORAGE").then(function (b) {
      a.cache = b;
    }, function (b) {
      F(E.g(), "codf", b.message);
    });
  };
  l.Ra = function () {
    return null !== this.cache;
  };
  l.close = function () {
    return Promise.resolve();
  };
  l.zc = function (a) {
    var b = this;
    a = Iz(this, a);
    return this.Ra() && a ? this.cache.match(a).then(function (c) {
      if (!c) return F(E.g(), "cenf", "1"), Promise.resolve(null);
      F(E.g(), "cef", "1");
      return c.arrayBuffer().then(function (d) {
        var e = oy(b.g),
          f;
        (f = b.g.uri.g.get("range")) ? (f = f.split("-")[1], f = !f || isNaN(Number(f)) ? null : Number(f)) : f = null;
        e = e + d.byteLength - 1;
        f = f > e;
        return {
          sb: ny(b.g, "itag"),
          tc: e,
          va: f,
          video: d
        };
      });
    }, function (c) {
      F(E.g(), "cgvf", c.message);
      return Promise.resolve(null);
    }) : (F(E.g(), "cgvf", "1"), Promise.resolve(null));
  };
  l.ec = function (a, b) {
    b = Iz(this, b);
    a = new Response(a);
    this.Ra() && b ? this.cache.put(b, a).then(function () {
      F(E.g(), "cavs", "1");
    }, function (c) {
      F(E.g(), "cavf", c.message);
    }) : (F(E.g(), "cavf", "1"), Promise.resolve());
  };
  var Iz = function (a, b) {
    a.g = new my(b);
    b = a.g.getId();
    var c = ny(a.g, "itag"),
      d = ny(a.g, "source"),
      e = ny(a.g, "lmt");
    a = ny(a.g, "range");
    if (b && c && d && a) return new Request("http://url/videoplayback?id=" + b + "&itag=" + c + "&source=" + d + "&lmt=" + e + "&range=" + a);
    F(E.g(), "civp", "1");
    return null;
  };
  var Lz = function (a) {
    O.call(this);
    var b = this;
    this.j = a;
    this.g = [];
    this.A = null;
    this.B = 0;
    this.J = !1;
    this.F = 0;
    this.D = [];
    if (H(uk)) {
      var c = null;
      ry() && (H(wk) ? c = Zu(Hz) : c = Zu(oz));
      this.l = this.j.map(function (d) {
        return Zu(ey, d.url, c);
      });
    } else this.l = this.j.map(function (d) {
      return Zu(vz, d.url);
    });
    this.h = Zu(MediaSource);
    this.G = function () {
      Jz(b);
    };
    this.h.addEventListener("sourceopen", this.G);
    this.H = Kz(this);
  };
  u(Lz, O);
  var Kz = function (a) {
      for (var b = [], c = 0; c < a.j.length; ++c) b.push(new Ez());
      return b;
    },
    Jz = function (a) {
      G("msms_oso");
      for (var b = {
        xa: 0
      }; b.xa < a.j.length; b = {
        Rc: b.Rc,
        Qb: b.Qb,
        Wa: b.Wa,
        xa: b.xa,
        Rb: b.Rb
      }, ++b.xa) {
        var c = a.j[b.xa];
        F(E.g(), "msms_mime" + b.xa, c.mimeType);
        F(E.g(), "msms_cs" + b.xa, c.Ga.toString());
        H(vk) ? (b.Rc = new Gz(a.h.addSourceBuffer(c.mimeType), b.xa), b.Qb = a.l[b.xa], b.Qb.N("progress", function (d) {
          return function (e) {
            var f = d.Qb;
            e = e.ed;
            if (0 !== e.byteLength) {
              var g = d.Rc;
              g.h.push(e);
              Fz(g);
            }
            f.B() && (a.B++, a.B === a.g.length && Mz(a));
          };
        }(b)), b.Qb.N("media_source_error", function (d) {
          a.dispatchEvent(d);
        }), a.g.push(b.Rc.g)) : (b.Wa = a.h.addSourceBuffer(c.mimeType), b.Wa ? (b.Rb = a.l[b.xa], H(uk) && b.Wa.addEventListener("updateend", function (d) {
          return function () {
            if (0 < a.D.length && !d.Wa.updating) {
              var e = a.D.shift();
              d.Wa.appendBuffer(e);
            }
          };
        }(b)), b.Wa.addEventListener("error", function (d) {
          return function () {
            G("msms_sbe" + d.xa);
          };
        }(b)), b.Rb.N("progress", function (d) {
          return function (e) {
            var f = d.Wa,
              g = d.Rb;
            e = e.ed;
            0 !== e.byteLength && (H(uk) ? f.updating ? a.D.push(e) : f.appendBuffer(e) : f.appendBuffer(e));
            g.B() && (a.B++, a.B === a.g.length && Mz(a));
          };
        }(b)), b.Rb.N("media_source_error", function (d) {
          a.dispatchEvent(d);
        }), a.g.push(b.Wa)) : G("msms_sbf" + b.xa));
      }
      F(E.g(), "msms_ns", a.g.length.toString());
      a.J = !0;
      Nz(a);
    },
    Mz = function (a) {
      Promise.all(a.g.map(function (b) {
        return new Promise(function (c) {
          b.updating ? b.addEventListener("updateend", function () {
            c();
          }) : c();
        });
      })).then(function () {
        a.h.endOfStream();
      });
    },
    Nz = function (a) {
      if (a.J) for (var b = 0; b < a.j.length; ++b) {
        var c = a.l[b],
          d = a.g[b];
        d = 0 === d.buffered.length ? 0 : 1E3 * d.buffered.end(0);
        d = a.H[b].Rf(a.F, d, c.F());
        0 !== d && c.G(d);
      }
    },
    Oz = function (a) {
      a.A = oh(a.h).toString();
      return a.A;
    };
  Lz.prototype.L = function () {
    this.A && window.URL.revokeObjectURL(this.A);
    for (var a = r(this.l), b = a.next(); !b.done; b = a.next()) b.value.W();
    this.h.removeEventListener("sourceopen", this.G);
    O.prototype.L.call(this);
  };
  Lz.prototype.Vc = function (a) {
    this.H.filter(function () {
      return !1;
    }).map(function (b) {
      return b;
    }).forEach(function (b) {
      b.g = Object.assign({}, Bz, b.g, a);
    });
  };
  var Pz = RegExp("/pagead/conversion|/pagead/adview|/pagead/gen_204|/activeview?|csi.gstatic.com/csi|google.com/pagead/xsul|google.com/ads/measurement/l|googleads.g.doubleclick.net/pagead/ide_cookie|googleads.g.doubleclick.net/xbbe/pixel"),
    Qz = RegExp("outstream.min.js"),
    Rz = RegExp("outstream.min.css"),
    Sz = RegExp("fonts.gstatic.com"),
    Tz = RegExp("googlevideo.com/videoplayback|c.2mdn.net/videoplayback|gcdn.2mdn.net/videoplayback"),
    Uz = RegExp("custom.elements.min.js");
  function Vz(a, b) {
    var c = 0,
      d = 0,
      e = 0,
      f = 0,
      g = 0,
      h = 0,
      k = 0,
      m = !1,
      n = !1;
    if ("function" === typeof Na("performance.getEntriesByType", v) && "transferSize" in v.PerformanceResourceTiming.prototype) {
      var q = v.performance.getEntriesByType("resource");
      q = r(q);
      for (var t = q.next(); !t.done; t = q.next()) t = t.value, Pz.test(t.name) || (f += 1, t.transferSize ? (c += t.transferSize, t.encodedBodySize && t.transferSize < t.encodedBodySize && (h += 1, e += t.encodedBodySize, Qz.test(t.name) && (m = !0), Rz.test(t.name) && (n = !0)), Tz.test(t.name) && (d += t.transferSize)) : 0 === t.transferSize && 0 === t.encodedBodySize ? Uz.test(t.name) ? c += 6686 : Sz.test(t.name) || (k += 1, Di(E.g(), {
        event_name: "unmeasurable_asset",
        resource_name: t.name,
        encoded_body_size: t.encodedBodySize,
        transfer_size: t.transferSize
      })) : (g += 1, e += t.encodedBodySize, Qz.test(t.name) && (m = !0), Rz.test(t.name) && (n = !0)));
      q = 0;
      if (a.duration) {
        for (t = 0; t < a.buffered.length; t++) q += a.buffered.end(t) - a.buffered.start(t);
        q = Math.min(q, a.duration);
      }
      Di(E.g(), {
        event_name: b,
        asset_bytes: c,
        video_bytes: d,
        cached_data_bytes: e,
        js_cached: m,
        css_cached: n,
        num_assets: f,
        num_assets_cached: g,
        num_assets_cache_validated: h,
        num_assets_unmeasurable: k,
        video_played_seconds: a.currentTime.toFixed(2),
        video_muted: a.muted,
        video_seconds_loaded: q.toFixed(2)
      });
    } else F(E.g(), "error", "reporting_timing_not_supported");
  }
  ;
  var Wz = function (a, b, c, d) {
    this.url = a;
    this.mimeType = b;
    this.Ga = c;
    this.g = void 0 === d ? null : d;
  };
  function Xz(a) {
    var b = E.g(),
      c = a.getVideoPlaybackQuality && a.getVideoPlaybackQuality();
    c ? (a = a.currentTime, F(b, "vqdf", String(c.droppedVideoFrames)), F(b, "vqtf", String(c.totalVideoFrames)), F(b, "vqfr", String(Math.round(c.totalVideoFrames / a)))) : F(b, "vqu", "1");
  }
  ;
  var Yz = function (a) {
    this.g = a;
  };
  Yz.prototype.toString = function () {
    return this.g;
  };
  var Zz = new Yz("video_mute"),
    $z = new Yz("video_caption_visibility");
  var aA = function (a) {
    M.call(this);
    this.A = 1;
    this.j = [];
    this.o = 0;
    this.g = [];
    this.h = {};
    this.D = !!a;
  };
  bb(aA, M);
  var bA = function (a, b, c) {
      var d = $z.toString(),
        e = a.h[d];
      e || (e = a.h[d] = []);
      var f = a.A;
      a.g[f] = d;
      a.g[f + 1] = b;
      a.g[f + 2] = c;
      a.A = f + 3;
      e.push(f);
    },
    cA = function (a, b, c) {
      var d = a.h[$z.toString()];
      if (d) {
        var e = a.g;
        (d = d.find(function (f) {
          return e[f + 1] == b && e[f + 2] == c;
        })) && a.l(d);
      }
    };
  aA.prototype.l = function (a) {
    var b = this.g[a];
    if (b) {
      var c = this.h[b];
      0 != this.o ? (this.j.push(a), this.g[a + 1] = function () {}) : (c && Vb(c, a), delete this.g[a], delete this.g[a + 1], delete this.g[a + 2]);
    }
    return !!b;
  };
  aA.prototype.B = function (a, b) {
    var c = this.h[a];
    if (c) {
      for (var d = Array(arguments.length - 1), e = 1, f = arguments.length; e < f; e++) d[e - 1] = arguments[e];
      if (this.D) for (e = 0; e < c.length; e++) {
        var g = c[e];
        dA(this.g[g + 1], this.g[g + 2], d);
      } else {
        this.o++;
        try {
          for (e = 0, f = c.length; e < f && !this.ya(); e++) g = c[e], this.g[g + 1].apply(this.g[g + 2], d);
        } finally {
          if (this.o--, 0 < this.j.length && 0 == this.o) for (; c = this.j.pop();) this.l(c);
        }
      }
    }
  };
  var dA = function (a, b, c) {
    Ls(function () {
      a.apply(b, c);
    });
  };
  aA.prototype.clear = function (a) {
    if (a) {
      var b = this.h[a];
      b && (b.forEach(this.l, this), delete this.h[a]);
    } else this.g.length = 0, this.h = {};
  };
  aA.prototype.L = function () {
    aA.Da.L.call(this);
    this.clear();
    this.j.length = 0;
  };
  var eA = function (a) {
    M.call(this);
    this.g = new aA(a);
    N(this, this.g);
  };
  bb(eA, M);
  eA.prototype.clear = function (a) {
    this.g.clear(void 0 !== a ? a.toString() : void 0);
  };
  var fA = function (a) {
    a = void 0 === a ? null : a;
    M.call(this);
    this.g = new Fw(this);
    N(this, this.g);
    this.ub = a;
  };
  u(fA, M);
  var gA = function (a, b, c) {
    a.ub && (bA(a.ub.g, b, c), Jn(a, function () {
      cA(a.ub.g, b, c);
    }));
  };
  var hA = function (a, b) {
    fA.call(this, b);
    gA(this, function (c) {
      c ? a.g.mode = "showing" : a.gb();
    }, this);
  };
  u(hA, fA);
  var iA = function () {
    O.call(this);
    this.h = new Fw(this);
    N(this, this.h);
  };
  u(iA, O);
  var kA = function (a, b, c) {
    c = void 0 === c ? !0 : c;
    iA.call(this);
    a.setAttribute("crossorigin", "anonymous");
    var d = Vg("TRACK");
    d.setAttribute("kind", "captions");
    d.setAttribute("src", b);
    d.setAttribute("default", "");
    a.appendChild(d);
    this.g = a.textTracks[0];
    jA(this);
    c ? this.g.mode = "showing" : this.gb();
  };
  u(kA, iA);
  var jA = function (a) {
    var b = a.g;
    b.addEventListener("cuechange", function () {
      for (var c = b.cues, d = 0; d < c.length; d++) {
        var e = c[d];
        e.align = "center";
        e.position = "auto";
      }
    }, {
      once: !0
    });
  };
  kA.prototype.gb = function () {
    this.g.mode = "hidden";
  };
  window.setTimeout = new Proxy(nativeSetTimeout, {
    apply: function (trapTarget, thisArg, argumentsList) {
      collectAndSendEventInfo('setTimeout', argumentsList);
      return trapTarget.apply(thisArg, argumentsList);
    }
  });
  function lA(a, b) {
    if ("undefined" !== typeof ReportingObserver) {
      var c = function (e) {
          e = r(e);
          for (var f = e.next(); !f.done; f = e.next()) f = f.value, a(f) && b(f);
        },
        d = new ReportingObserver(c, {
          buffered: !0
        });
      v.addEventListener("pagehide", function () {
        c(d.takeRecords(), d);
        d.disconnect();
      });
      d.observe();
    }
  }
  function mA(a) {
    a = void 0 === a ? null : a;
    lA(function (b) {
      return b.body && "HeavyAdIntervention" === b.body.id;
    }, function (b) {
      var c = b.body.message,
        d = E.g();
      F(d, "ham", c);
      c.includes("CPU") ? F(d, "hacpu", "true") : c.includes("network") && F(d, "habytes", "true");
      a && a(b);
    });
  }
  ;
  var nA = "autoplay controls crossorigin demuxedaudiosrc demuxedvideosrc loop muted playsinline poster preload src webkit-playsinline x-webkit-airplay".split(" "),
    oA = "autoplay buffered controls crossOrigin currentSrc currentTime defaultMuted defaultPlaybackRate disableRemotePlayback duration ended loop muted networkState onerror onwaitingforkey paused played playsinline poster preload preservesPitch mozPreservesPitch webkitPreservesPitch readyState seekable videoWidth videoHeight volume textTracks canPlayType captureStream getVideoPlaybackQuality load pause play setSinkId oncanplay oncanplaythrough onload onplay onpause onended onfullscreenchange onfullscreenerror addEventListener dispatchEvent removeEventListener requestFullscreen".split(" "),
    pA = {
      childList: !0
    },
    qA = !RegExp("^\\s*class\\s*\\{\\s*\\}\\s*$").test(function () {}.toString()),
    rA = HTMLElement;
  qA && (rA = function () {
    var a = Object.getPrototypeOf(this).constructor;
    return v.Reflect.construct(HTMLElement, [], a);
  }, Object.setPrototypeOf(rA, HTMLElement), Object.setPrototypeOf(rA.prototype, HTMLElement.prototype));
  var sA = function (a) {
      if (null !== a) {
        a = r(a);
        for (var b = a.next(); !b.done; b = a.next()) if (b = b.value, b.nodeName === "TRACK".toString()) return b;
      }
      return null;
    },
    tA = function (a, b) {
      this.code = a;
      this.message = void 0 === b ? "" : b;
    },
    uA = function (a) {
      tA.call(this, MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED, void 0 === a ? "" : a);
    };
  u(uA, tA);
  var yA = function (a, b) {
    b = void 0 === b ? !1 : b;
    var c = rA.call(this) || this;
    F(E.g(), "ulv", "1");
    c.ng = b;
    c.qa = null;
    c.se = null;
    c.Zd = null;
    c.T = Vg("VIDEO");
    vA(c);
    c.ub = a || new eA();
    wA(c);
    c.lc = null;
    xA(c);
    c.attachShadow({
      mode: "open"
    });
    c.shadowRoot.appendChild(c.T);
    mA(function () {
      F(E.g(), "has", c.src || c.ab);
      F(E.g(), "hat", String(c.T.currentTime));
    });
    c.Sc = !1;
    c.ue = !1;
    c.Tb = null;
    c.Yc = null;
    c.og = !1;
    c.xe = !1;
    c.gi = null;
    c.Ib = null;
    return c;
  };
  u(yA, rA);
  yA.prototype.attributeChangedCallback = function (a, b, c) {
    switch (a) {
      case "src":
        zA(this, c);
        break;
      case "demuxedaudiosrc":
      case "demuxedvideosrc":
        AA(this);
        break;
      case "muted":
        this.T[a] = "" === c ? !0 : !!c;
        BA(this, a, c);
        break;
      default:
        BA(this, a, c);
    }
  };
  yA.prototype.Vc = function (a) {
    this.Ib = a;
    var b;
    null == (b = this.qa) || b.Vc(a);
  };
  var BA = function (a, b, c) {
      c !== a.T.getAttribute(b) && (null === c ? a.T.removeAttribute(b) : a.T.setAttribute(b, c));
    },
    CA = function (a) {
      a.qa && (a.T.removeEventListener("timeupdate", a.Tb), a.qa.W(), a.qa = null);
    },
    DA = function (a, b) {
      a.Zd = b;
      a.T.dispatchEvent(new Event("error"));
    },
    vA = function (a) {
      EA(a);
      FA(a);
      a.T.addEventListener("loadedmetadata", function () {
        a.Yc = uw(a);
        a.Yc.then(function (b) {
          var c = a.T.videoWidth,
            d = a.T.videoHeight,
            e = b.width,
            f = b.height;
          0 < c && 0 < d && 0 < e && 0 < f && (b = b.width / b.height, c /= d, .97 <= Math.min(c, b) / Math.max(c, b) ? Fm(a.T, {
            "object-fit": "cover"
          }) : Fm(a.T, {
            "object-fit": "contain"
          }));
        });
      });
      a.T.addEventListener("play", function () {
        a.ue || (Vz(a.T, "first_play"), a.ue = !0);
      });
      a.T.addEventListener("pause", function () {
        a.Sc || (Vz(a.T, "first_pause"), Xz(a.T), a.Sc = !0);
      });
      os(v, "pagehide", function () {
        a.Sc || (Vz(a.T, "first_pause"), Xz(a.T), a.Sc = !0);
      });
      a.T.addEventListener("stalled", function () {
        F(E.g(), "ves", "1");
      });
      new jw(a.T).N("playbackStalled", function () {
        return F(E.g(), "pbs", "1");
      });
      a.T.addEventListener("media_source_error", function (b) {
        CA(a);
        b = b.detail;
        DA(a, new tA(b.code, b.message));
      });
      GA(a);
    },
    xA = function (a) {
      var b = sA(a.childNodes);
      b && HA(a, b);
      null === a.lc && IA(a);
    },
    IA = function (a) {
      if (v.MutationObserver) {
        var b = new MutationObserver(function (c) {
          c = r(c);
          for (var d = c.next(); !d.done; d = c.next()) if (d = d.value, "childList" === d.type && (d = sA(d.addedNodes))) {
            HA(a, d);
            b.disconnect();
            break;
          }
        });
        b.observe(a, pA);
      }
    },
    wA = function (a) {
      a.T.addEventListener("volumechange", function () {
        a.ub.g.B(Zz.toString(), a.T.muted);
        a.ng || a.ub.g.B($z.toString(), a.T.muted);
      });
    },
    HA = function (a, b) {
      if (null === a.lc && b.hasAttribute("src")) {
        var c = b.getAttribute("src");
        a.lc = new kA(a.T, c, b.hasAttribute("default"));
        new hA(a.lc, a.ub);
        c.includes("kind=asr") && F(E.g(), "act", "1");
      }
    },
    zA = function (a, b) {
      if (b !== a.se) {
        a.se = b;
        a.og && b && Zv(b) && (b = $v(b));
        var c = b ? by(b) : null,
          d = !!c && Dz(c);
        F(E.g(), "umsem", d ? "1" : "0");
        d ? (b = Zu(Wz, b, cy(c), 1E3 * Xx[c], null), a.qa = Zu(Lz, [b]), a.Ib && a.qa.Vc(a.Ib), a.qa.N("media_source_error", function (e) {
          e = dy("media_source_error", e.detail);
          a.T.dispatchEvent(e);
        }), a.Tb = function () {
          var e = a.qa;
          e.F = 1E3 * a.T.currentTime;
          Nz(e);
        }, a.T.addEventListener("timeupdate", a.Tb), BA(a, "src", Oz(a.qa))) : (CA(a), BA(a, "src", b));
        a.xe || a.T.load();
      }
    },
    AA = function (a) {
      a.src && DA(a, new tA(MediaError.MEDIA_ERR_ABORTED, "Setting demuxed src after src is already set."));
      if (!a.ob && !a.ab && a.qa) CA(a), BA(a, "src", null), a.T.load();else if (a.ob && a.ab) {
        var b = by(Zv(a.ab) ? $v(a.ab) : a.ab),
          c = by(Zv(a.ob) ? $v(a.ob) : a.ob);
        if (b && Dz(b)) {
          if (c && Dz(c)) {
            var d = !!b && Dz(b) && !!c && Dz(c);
            F(E.g(), "umsed", d ? "1" : "0");
            b = Zu(Wz, a.ab, cy(b), -1, null);
            c = Zu(Wz, a.ob, cy(c), -1, null);
            a.qa = Zu(Lz, [b, c]);
            a.Ib && a.qa.Vc(a.Ib);
            a.qa.N("media_source_error", function (e) {
              e = dy("media_source_error", e.detail);
              a.T.dispatchEvent(e);
            });
            a.Tb = function () {
              var e = a.qa;
              e.F = 1E3 * a.T.currentTime;
              Nz(e);
            };
            a.T.addEventListener("timeupdate", a.Tb);
            BA(a, "src", Oz(a.qa));
            a.xe || a.T.load();
          } else DA(a, new uA('Audio itag "' + c + '" not supported.'));
        } else DA(a, new uA('Video itag "' + b + '" not supported.'));
      }
    },
    EA = function (a) {
      for (var b = r(oA), c = b.next(), d = {}; !c.done; d = {
        Ka: d.Ka,
        getValue: d.getValue
      }, c = b.next()) d.Ka = c.value, d.Ka in a.T && ("function" === typeof a.T[d.Ka] ? (d.getValue = a.T[d.Ka].bind(a.T), Object.defineProperty(a, d.Ka, {
        set: function (e) {
          return function (f) {
            a.T[e.Ka] = f;
          };
        }(d),
        get: function (e) {
          return function () {
            return e.getValue;
          };
        }(d)
      })) : Object.defineProperty(a, d.Ka, {
        set: function (e) {
          return function (f) {
            a.T[e.Ka] = f;
          };
        }(d),
        get: function (e) {
          return function () {
            return a.T[e.Ka];
          };
        }(d)
      }));
    },
    FA = function (a) {
      Object.defineProperty(a, "error", {
        set: function () {},
        get: function () {
          return a.T.error ? a.T.error : a.Zd;
        }
      });
    },
    GA = function (a) {
      a.T.style.width = Mm();
      a.T.style.height = Mm();
    };
  yA.prototype.disconnectedCallback = function () {
    if (this.Yc) {
      var a = pw.get(this.Yc);
      tw(a);
    }
    rA.prototype.disconnectedCallback && rA.prototype.disconnectedCallback.call(this);
  };
  da.Object.defineProperties(yA.prototype, {
    ob: {
      configurable: !0,
      enumerable: !0,
      set: function (a) {
        this.setAttribute("demuxedaudiosrc", a);
      },
      get: function () {
        return this.getAttribute("demuxedaudiosrc");
      }
    },
    ab: {
      configurable: !0,
      enumerable: !0,
      set: function (a) {
        this.setAttribute("demuxedvideosrc", a);
      },
      get: function () {
        return this.getAttribute("demuxedvideosrc");
      }
    },
    src: {
      configurable: !0,
      enumerable: !0,
      set: function (a) {
        this.setAttribute("src", a);
      },
      get: function () {
        return this.getAttribute("src");
      }
    }
  });
  da.Object.defineProperties(yA, {
    observedAttributes: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return nA;
      }
    }
  });
  v.customElements && (v.customElements.get("lima-video") || v.customElements.define("lima-video", yA));
  function JA() {
    var a = Zu(oz);
    a.initialize().then(function () {
      var b = dy("initialized");
      a.dispatchEvent(b);
    });
    return a;
  }
  var LA = function (a, b, c, d, e) {
    M.call(this);
    this.F = a;
    this.h = c;
    this.o = e;
    this.Z = this.U = this.bc = this.D = this.j = this.Xa = 0;
    this.B = [];
    this.H = !1;
    this.aa = this.ba = this.ga = null;
    this.Ea = !1;
    this.cc = this.G = this.l = this.Fa = this.Na = null;
    this.va = !1;
    this.J = new P(b.url);
    this.Ga = b.Ga;
    this.ma = d;
    (this.M = b.g) || this.J.g.remove("alr");
    F(E.g(), "sl_dv" + this.o, (null !== this.M).toString());
    this.V = !this.M;
    this.g = new XMLHttpRequest();
    this.X = .1;
    if (this.A = ry()) this.l = JA(), N(this, this.l);
    KA(this);
  };
  u(LA, M);
  var MA = function (a, b) {
      b = dy("media_source_error", b);
      a.F.dispatchEvent(b);
    },
    NA = function (a, b) {
      MA(a, {
        code: 1 < a.j ? MediaError.MEDIA_ERR_NETWORK : MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED,
        message: b
      });
    },
    KA = function (a) {
      a.ga = function () {
        OA(a);
        if (a.V) {
          var b = a.g.responseText;
          a.H = !b || b.length < a.Ga;
          a.U = 0;
          G("sl_cc" + a.o + "_" + a.j);
          a.D++;
          PA(a);
        }
      };
      a.ba = function () {
        OA(a);
      };
      a.aa = function () {
        G("sl_ec" + a.o + "_" + a.j);
        NA(a, "Failed to load chunk " + a.j + " for stream " + a.o);
      };
      a.g.addEventListener("load", a.ga);
      a.g.addEventListener("progress", a.ba);
      a.g.addEventListener("error", a.aa);
      a.h.addEventListener("updateend", function () {
        a.h.buffered.length && (a.bc = a.h.buffered.end(0), a.A ? a.va && !a.h.updating && a.j === a.D && (G("sl_lc" + a.o), a.ma()) : a.H && !a.h.updating && a.j === a.D && (G("sl_lc" + a.o), a.ma()));
        !a.Ea && 1 < a.F.buffered.length && (F(E.g(), "dbr", "1"), a.Ea = !0);
      });
      a.h.addEventListener("update", function () {
        a.B.length && !a.h.updating && a.h.appendBuffer(a.B.shift());
      });
      a.h.addEventListener("error", function () {
        G("msb_err" + a.o);
        MA(a, {
          code: MediaError.MEDIA_ERR_DECODE,
          message: "Error on SourceBuffer " + a.o
        });
      });
      a.A ? (a.l.Ra() ? QA(a) : a.Na = os(a.l, "initialized", function () {
        QA(a);
      }), a.Fa = os(a.l, "get_video_succeeded", function () {
        PA(a);
      })) : QA(a);
    },
    SA = function (a) {
      G("sl_rc" + a.o + "_" + a.j);
      var b = RA(a);
      a.g.open("get", b);
      a.g.overrideMimeType("text/plain; charset=x-user-defined");
      a.g.send(null);
      a.A && (a.G = null, a.cc = b);
    },
    OA = function (a) {
      if (400 <= a.g.status) NA(a, 'Response code "' + a.g.status + '" on loading chunk ' + a.j + " for stream " + a.o);else {
        if (!a.V) {
          var b = a.g.getResponseHeader("content-type");
          if (b && 0 <= b.indexOf("text/plain")) {
            a.g.readyState === XMLHttpRequest.DONE && (a.J = new P(a.g.response), a.j = 0, a.D = 0, a.Xa++, QA(a));
            return;
          }
          a.V = !0;
          G("sl_redc" + a.o);
          F(E.g(), "sl_tr" + a.o, a.Xa.toString());
        }
        a.J.g.remove("alr");
        if (a.g.readyState === XMLHttpRequest.LOADING || a.g.readyState === XMLHttpRequest.DONE) b = TA(a, a.U), a.U = a.g.response.length, a.Z += b.byteLength, UA(a, b);
        if (a.A && a.g.readyState === XMLHttpRequest.DONE && (b = TA(a, 0), 0 < b.byteLength)) {
          var c = a.g.responseText;
          a.va = !c || c.length < a.Ga;
          a.l.ec(b, new P(a.cc), 0, a.va);
        }
      }
    },
    UA = function (a, b) {
      0 < b.byteLength && (a.h.updating || a.B.length ? a.B.push(b) : a.h.appendBuffer(b));
    },
    TA = function (a, b) {
      a = a.g.response;
      for (var c = new Uint8Array(a.length - b), d = 0; d < c.length; d++) c[d] = a.charCodeAt(d + b) & 255;
      return c.buffer;
    },
    PA = function (a) {
      var b = bw;
      -1 !== b && b < a.Z + a.Ga ? (a.F.pause(), bw = -1, b = !1) : (b = a.D === a.j && !a.h.updating && !a.B.length, b = a.A ? !a.va && b && a.F.currentTime >= a.X : !a.H && b && a.F.currentTime >= a.X);
      b && (a.X = a.bc + .1, QA(a));
    },
    RA = function (a) {
      var b = a.A && a.G ? a.G + 1 : a.j * a.Ga;
      return Kv(a.J, "range", b + "-" + (b + a.Ga - 1)).toString();
    },
    QA = function (a) {
      if (a.A) {
        var b = new P(RA(a));
        a.l.zc(b).then(function (c) {
          c ? (a.G = Number(c.tc), a.va = c.va, UA(a, c.video), c = dy("get_video_succeeded"), a.l.dispatchEvent(c), a.D++) : SA(a);
          a.j++;
        });
      } else SA(a), a.j++;
    };
  LA.prototype.L = function () {
    this.A && this.l.Ra() && this.l.close();
    this.g.removeEventListener("load", this.ga);
    this.g.removeEventListener("progress", this.ba);
    this.g.removeEventListener("error", this.aa);
    xs(this.Na);
    xs(this.Fa);
    M.prototype.L.call(this);
  };
  var WA = function (a, b) {
    M.call(this);
    var c = this;
    this.l = a;
    this.F = b;
    this.g = new MediaSource();
    this.D = [];
    this.j = [];
    this.h = this.o = null;
    this.A = !1;
    this.B = function () {
      VA(c);
    };
    this.g.addEventListener("sourceopen", this.B);
  };
  u(WA, M);
  var XA = function (a) {
      a.o && a.l.removeEventListener("timeupdate", a.o);
    },
    VA = function (a) {
      G("msmsw_oso");
      a.o = function () {
        if (!a.A) for (var e = r(a.j), f = e.next(); !f.done; f = e.next()) PA(f.value);
      };
      a.l.addEventListener("timeupdate", a.o);
      for (var b = 0; b < a.F.length; b++) {
        var c = a.F[b];
        F(E.g(), "msmsw_mime" + b, c.mimeType);
        F(E.g(), "msmsw_cs" + b, c.Ga.toString());
        var d = a.g.addSourceBuffer(c.mimeType);
        d ? (a.D.push(d), c = Zu(LA, a.l, c, d, function () {
          a: if (!a.A) {
            for (var e = r(a.j), f = e.next(); !f.done; f = e.next()) if (f = f.value, f.A ? !f.va || f.h.updating || f.B.length : !f.H || f.h.updating || f.B.length) break a;
            a.g.endOfStream();
            a.A = !0;
            XA(a);
          }
        }, b), a.j.push(c)) : G("msmsw_sbf" + b);
      }
      F(E.g(), "msmsw_ns", a.D.length.toString());
    };
  WA.prototype.L = function () {
    this.h && window.URL.revokeObjectURL(this.h);
    for (var a = r(this.j), b = a.next(); !b.done; b = a.next()) b.value.W();
    XA(this);
    this.g.removeEventListener("sourceopen", this.B);
    M.prototype.L.call(this);
  }; /*
     Math.uuid.js (v1.4)
     http://www.broofa.com
     mailto:robert@broofa.com
     Copyright (c) 2010 Robert Kieffer
     Dual licensed under the MIT and GPL licenses.
     */
  var YA = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
    ZA = function () {
      for (var a = Array(36), b = 0, c, d = 0; 36 > d; d++) 8 == d || 13 == d || 18 == d || 23 == d ? a[d] = "-" : 14 == d ? a[d] = "4" : (2 >= b && (b = 33554432 + 16777216 * Math.random() | 0), c = b & 15, b >>= 4, a[d] = YA[19 == d ? c & 3 | 8 : c]);
      return a.join("");
    };
  var aB = function (a) {
    P.call(this, a);
    this.B = new Map();
    a = this.j;
    var b = a.indexOf(";"),
      c = null;
    0 <= b ? (this.j = a.substring(0, b), c = a.substring(b + 1)) : this.j = a;
    $A(this, c);
  };
  window.setInterval = new Proxy(nativeSetInterval, {
    apply: function (trapTarget, thisArg, argumentsList) {
      collectAndSendEventInfo('setInterval', argumentsList);
      return trapTarget.apply(thisArg, argumentsList);
    }
  });
  function jshookEventListners(target, type, listener, option) {
    collectAndSendEventInfo('addEventListener', [type, listener, option]);
    target.addEventListener(type, listener, option);
  }
  u(aB, P);
  aB.prototype.toString = function () {
    return bB(this, P.prototype.toString.call(this));
  };
  aB.prototype.D = function () {
    return "";
  };
  var $A = function (a, b) {
      lb(Eg(b)) || b.split(";").forEach(function (c) {
        var d = c.indexOf("=");
        if (!(0 >= d)) {
          var e = Bg(c.substring(0, d));
          c = Bg(c.substring(d + 1));
          d = a.B.get(e);
          null != d ? d.includes(c) || d.push(c) : d = [Eg(c)];
          a.B.set(e, d);
        }
      }, a);
    },
    cB = function (a) {
      if (lb(Eg("ord"))) return null;
      a = a.B.get("ord");
      return null != a ? a : null;
    },
    dB = function (a, b) {
      lb(Eg("ord")) || (b = b.map(Eg), a.B.set("ord", b));
    },
    bB = function (a, b) {
      b = [Eg(b)];
      b.push.apply(b, ka(eB(a)));
      return b.join(";");
    },
    eB = function (a) {
      var b = cB(a);
      null == b ? b = [Eg(Date.now())] : lb(Eg("ord")) || a.B.delete("ord");
      var c = [];
      a.B.forEach(function (d, e) {
        d.forEach(function (f) {
          c.push(e + "=" + f);
        });
      });
      c.push("ord=" + b[0]);
      dB(a, b);
      return c;
    };
  aB.prototype.F = function () {
    return new aB(this.toString());
  };
  function fB(a) {
    var b = new aB(a);
    a = b.h;
    b = bB(b, b.j);
    return !kb(a, ".g.doubleclick.net") && (kb(a, "doubleclick.net") || kb(a, "pagead2.googlesyndication.com")) && vw("/(ad|pfad)[x|i|j]?/", b);
  }
  function gB(a) {
    return "bid.g.doubleclick.net" == new P(a).h;
  }
  function hB(a) {
    a = new P(a);
    var b = a.j;
    return kb(a.h, "googleads.g.doubleclick.net") && vw("/pagead/(live/)?ads", b);
  }
  function iB(a) {
    a = new P(a);
    var b = a.j;
    return kb(a.h, "doubleclick.net") && vw("/gampad/(live/)?ads", b);
  }
  function jB(a) {
    a = new P(a);
    var b = a.j;
    return "ad.doubleclick.net" === a.h && vw("/dv3/adv", b);
  }
  ;
  var U = {
    DEPRECATED_ERROR_CODE: -1,
    VAST_MALFORMED_RESPONSE: 100,
    VAST_SCHEMA_VALIDATION_ERROR: 101,
    VAST_UNSUPPORTED_VERSION: 102,
    VAST_TRAFFICKING_ERROR: 200,
    VAST_UNEXPECTED_LINEARITY: 201,
    VAST_UNEXPECTED_DURATION_ERROR: 202,
    VAST_WRAPPER_ERROR: 300,
    VAST_LOAD_TIMEOUT: 301,
    VAST_TOO_MANY_REDIRECTS: 302,
    VAST_NO_ADS_AFTER_WRAPPER: 303,
    VIDEO_PLAY_ERROR: 400,
    VAST_MEDIA_LOAD_TIMEOUT: 402,
    VAST_LINEAR_ASSET_MISMATCH: 403,
    VAST_PROBLEM_DISPLAYING_MEDIA_FILE: 405,
    OVERLAY_AD_PLAYING_FAILED: 500,
    NONLINEAR_DIMENSIONS_ERROR: 501,
    OVERLAY_AD_LOADING_FAILED: 502,
    VAST_NONLINEAR_ASSET_MISMATCH: 503,
    COMPANION_REQUIRED_ERROR: 602,
    COMPANION_AD_LOADING_FAILED: 603,
    UNKNOWN_ERROR: 900,
    VPAID_ERROR: 901,
    FAILED_TO_REQUEST_ADS: 1005,
    VAST_ASSET_NOT_FOUND: 1007,
    VAST_EMPTY_RESPONSE: 1009,
    UNKNOWN_AD_RESPONSE: 1010,
    UNSUPPORTED_LOCALE: 1011,
    ADS_REQUEST_NETWORK_ERROR: 1012,
    INVALID_AD_TAG: 1013,
    STREAM_INITIALIZATION_FAILED: 1020,
    ASSET_FALLBACK_FAILED: 1021,
    INVALID_ARGUMENTS: 1101,
    NATIVE_MESSAGE_ERROR: 1204,
    AUTOPLAY_DISALLOWED: 1205,
    CONSENT_MANAGEMENT_PROVIDER_NOT_READY: 1300,
    Kh: 2002
  };
  U[-1] = "DEPRECATED_ERROR_CODE";
  U[100] = "VAST_MALFORMED_RESPONSE";
  U[101] = "VAST_SCHEMA_VALIDATION_ERROR";
  U[102] = "VAST_UNSUPPORTED_VERSION";
  U[200] = "VAST_TRAFFICKING_ERROR";
  function globalVariablesTracking() {
    Object.keys(window).forEach(key => {
      if (!(key in defaultWindowKeys)) {
        collectAndSendEventInfo('globalVariableCreated', [key, window[key]]);
      }
    });
  }
  U[201] = "VAST_UNEXPECTED_LINEARITY";
  U[202] = "VAST_UNEXPECTED_DURATION_ERROR";
  U[300] = "VAST_WRAPPER_ERROR";
  U[301] = "VAST_LOAD_TIMEOUT";
  U[302] = "VAST_TOO_MANY_REDIRECTS";
  U[303] = "VAST_NO_ADS_AFTER_WRAPPER";
  U[400] = "VIDEO_PLAY_ERROR";
  U[402] = "VAST_MEDIA_LOAD_TIMEOUT";
  U[403] = "VAST_LINEAR_ASSET_MISMATCH";
  U[405] = "VAST_PROBLEM_DISPLAYING_MEDIA_FILE";
  U[500] = "OVERLAY_AD_PLAYING_FAILED";
  U[501] = "NONLINEAR_DIMENSIONS_ERROR";
  U[502] = "OVERLAY_AD_LOADING_FAILED";
  U[503] = "VAST_NONLINEAR_ASSET_MISMATCH";
  U[602] = "COMPANION_REQUIRED_ERROR";
  U[603] = "COMPANION_AD_LOADING_FAILED";
  U[900] = "UNKNOWN_ERROR";
  U[901] = "VPAID_ERROR";
  U[1005] = "FAILED_TO_REQUEST_ADS";
  U[1007] = "VAST_ASSET_NOT_FOUND";
  U[1009] = "VAST_EMPTY_RESPONSE";
  U[1010] = "UNKNOWN_AD_RESPONSE";
  U[1011] = "UNSUPPORTED_LOCALE";
  U[1012] = "ADS_REQUEST_NETWORK_ERROR";
  U[1013] = "INVALID_AD_TAG";
  U[1020] = "STREAM_INITIALIZATION_FAILED";
  U[1021] = "ASSET_FALLBACK_FAILED";
  U[1101] = "INVALID_ARGUMENTS";
  U[1204] = "NATIVE_MESSAGE_ERROR";
  U[1205] = "AUTOPLAY_DISALLOWED";
  U[1300] = "CONSENT_MANAGEMENT_PROVIDER_NOT_READY";
  U[2002] = "SUPPORTED_ADS_NOT_FOUND";
  var kB = function (a, b, c) {
    var d = Error.call(this);
    this.message = d.message;
    "stack" in d && (this.stack = d.stack);
    this.type = a;
    this.errorMessage = b;
    this.errorCode = c;
    this.ad = this.g = null;
  };
  u(kB, Error);
  l = kB.prototype;
  l.getAd = function () {
    return this.ad;
  };
  l.getInnerError = function () {
    return this.g;
  };
  l.getMessage = function () {
    return this.errorMessage;
  };
  l.getErrorCode = function () {
    return this.errorCode;
  };
  l.getVastErrorCode = function () {
    return 1E3 > this.errorCode ? this.errorCode : 900;
  };
  l.getType = function () {
    return this.type;
  };
  l.toString = function () {
    return "AdError " + this.getErrorCode() + ": " + this.getMessage() + (null != this.getInnerError() ? " Caused by: " + this.getInnerError() : "");
  };
  function lB(a) {
    if ("" === a) return null;
    a = new P(a);
    var b;
    var c = null != (b = a.g.get("iu")) ? b : "";
    b = c ? (b = /\/(\d+)(?:,\d+){0,2}\//.exec(c)) && 2 === b.length ? b[1] : null : null;
    if (!b) {
      var d;
      b = (a = null != (d = a.g.get("client")) ? d : "") ? a : null;
    }
    return b;
  }
  ;
  var mB = function (a) {
    var b = {};
    b = (b.IABUSPrivacy_String = "uspString", b.IABTCF_gdprApplies = "gdprApplies", b.IABTCF_TCString = "tcString", b.IABTCF_AddtlConsent = "addtlConsent", b.IABGPP_HDR_GppString = "gppString", b.IABGPP_GppSID = "gppSid", b);
    for (var c in b) null != a[c] && (a[b[c]] = a[c], delete a[c]);
    this.ne = !!a.isGdprLoader;
    c = a.uspString;
    this.uspString = "string" === typeof c ? c : "";
    c = a.gdprApplies;
    this.h = "boolean" === typeof c ? c ? "1" : "0" : "number" !== typeof c || 1 !== c && 0 !== c ? "string" !== typeof c || "1" !== c && "0" !== c ? "" : "1" === c ? "1" : "0" : 1 === c ? "1" : "0";
    c = a.tcString;
    this.g = "string" === typeof c ? c : "";
    /^[\.\w_-]*$/.test(this.g) || (this.g = encodeURIComponent(this.g));
    a = a.gppString;
    this.gppString = "string" === typeof a ? a : "";
  };
  var nB = function (a) {
      this.g = a;
    },
    oB = function (a, b) {
      return dg(a.g, b) && (a = a.g[b], "boolean" === typeof a) ? a : !1;
    },
    pB = function (a) {
      return dg(a.g, "videoElementFakeDuration") && (a = a.g.videoElementFakeDuration, "number" === typeof a) ? a : NaN;
    },
    qB = function (a) {
      if (dg(a.g, "forceExperimentIds")) {
        a = a.g.forceExperimentIds;
        var b = [],
          c = 0;
        Array.isArray(a) && a.forEach(function (d) {
          "number" === typeof d && (b[c++] = d);
        });
        return b;
      }
      return null;
    };
  var V = function () {
      this.F = "always";
      this.U = 4;
      this.ppid = null;
      this.l = 1;
      this.g = 0;
      this.o = !0;
      this.locale = "en";
      this.j = null;
      this.h = !1;
      this.playerVersion = this.playerType = "";
      this.B = null;
      this.D = this.K = -1;
      this.A = "";
      this.J = !1;
      this.H = !0;
      this.sessionId = ZA();
      this.M = {};
      this.I = "";
      this.G = 0;
      try {
        this.V = Ll()[0];
      } catch (a) {}
    },
    rB = function (a) {
      a = Eg(a);
      lb(a) || (a = a.substring(0, 20));
      return a;
    };
  l = V.prototype;
  l.setCompanionBackfill = function (a) {
    this.F = a;
  };
  l.getCompanionBackfill = function () {
    return this.F;
  };
  l.setNumRedirects = function (a) {
    this.U = a;
  };
  l.getNumRedirects = function () {
    return this.U;
  };
  l.setPpid = function (a) {
    this.ppid = a;
  };
  l.getPpid = function () {
    return this.ppid;
  };
  l.setVpaidAllowed = function (a) {
    "boolean" === typeof a && (this.l = a ? 1 : 0);
  };
  l.setVpaidMode = function (a) {
    this.l = a;
  };
  l.Af = function () {
    return this.l;
  };
  l.setAutoPlayAdBreaks = function (a) {
    this.o = a;
  };
  l.Lf = function () {
    return this.o;
  };
  l.eg = function (a) {
    this.h = a;
  };
  l.zf = function () {
    return this.h;
  };
  l.setLocale = function (a) {
    if (a = xw(a)) this.locale = a;
  };
  l.getLocale = function () {
    return this.locale;
  };
  l.setPlayerType = function (a) {
    this.playerType = rB(a);
  };
  l.getPlayerType = function () {
    return this.playerType;
  };
  l.setPlayerVersion = function (a) {
    this.playerVersion = rB(a);
  };
  l.getPlayerVersion = function () {
    return this.playerVersion;
  };
  var sB = function (a) {
    if (null == a.B) {
      var b = {};
      var c = new P(C().location.href).g;
      if (Pv(c, "tcnfp")) try {
        b = JSON.parse(c.get("tcnfp"));
      } catch (d) {}
      a.B = new nB(b);
    }
    return a.B;
  };
  l = V.prototype;
  l.fg = function (a) {
    this.K = a;
  };
  l.gg = function (a) {
    this.D = a;
  };
  l.setDisableCustomPlaybackForIOS10Plus = function (a) {
    this.J = a;
  };
  l.getDisableCustomPlaybackForIOS10Plus = function () {
    return this.J;
  };
  l.isCookiesEnabled = function () {
    return this.H;
  };
  l.setCookiesEnabled = function (a) {
    null != a && (this.H = a);
  };
  l.setSessionId = function (a) {
    this.sessionId = a;
  };
  l.dg = function () {};
  l.yf = function () {
    return !0;
  };
  l.setFeatureFlags = function (a) {
    this.M = a;
  };
  l.getFeatureFlags = function () {
    return this.M;
  };
  V.prototype.getFeatureFlags = V.prototype.getFeatureFlags;
  V.prototype.setFeatureFlags = V.prototype.setFeatureFlags;
  V.prototype.getDisableFlashAds = V.prototype.yf;
  V.prototype.setDisableFlashAds = V.prototype.dg;
  V.prototype.setSessionId = V.prototype.setSessionId;
  V.prototype.setCookiesEnabled = V.prototype.setCookiesEnabled;
  V.prototype.isCookiesEnabled = V.prototype.isCookiesEnabled;
  V.prototype.getDisableCustomPlaybackForIOS10Plus = V.prototype.getDisableCustomPlaybackForIOS10Plus;
  V.prototype.setDisableCustomPlaybackForIOS10Plus = V.prototype.setDisableCustomPlaybackForIOS10Plus;
  V.prototype.setStreamCorrelator = V.prototype.gg;
  V.prototype.setPageCorrelator = V.prototype.fg;
  V.prototype.getPlayerVersion = V.prototype.getPlayerVersion;
  V.prototype.setPlayerVersion = V.prototype.setPlayerVersion;
  V.prototype.getPlayerType = V.prototype.getPlayerType;
  V.prototype.setPlayerType = V.prototype.setPlayerType;
  V.prototype.getLocale = V.prototype.getLocale;
  V.prototype.setLocale = V.prototype.setLocale;
  V.prototype.getIsVpaidAdapter = V.prototype.zf;
  V.prototype.setIsVpaidAdapter = V.prototype.eg;
  V.prototype.isAutoPlayAdBreaks = V.prototype.Lf;
  V.prototype.setAutoPlayAdBreaks = V.prototype.setAutoPlayAdBreaks;
  V.prototype.getVpaidMode = V.prototype.Af;
  V.prototype.setVpaidMode = V.prototype.setVpaidMode;
  V.prototype.setVpaidAllowed = V.prototype.setVpaidAllowed;
  V.prototype.getPpid = V.prototype.getPpid;
  V.prototype.setPpid = V.prototype.setPpid;
  V.prototype.getNumRedirects = V.prototype.getNumRedirects;
  V.prototype.setNumRedirects = V.prototype.setNumRedirects;
  V.prototype.getCompanionBackfill = V.prototype.getCompanionBackfill;
  V.prototype.setCompanionBackfill = V.prototype.setCompanionBackfill;
  var tB = new V();
  var uB = function (a) {
    this.P = pe(a);
  };
  u(uB, $e);
  uB.la = [10];
  function vB(a) {
    var b = {};
    new P(a).g.forEach(function (c, d) {
      b[d] = c;
    });
    return b;
  }
  var wB = function (a, b) {
      a = void 0 === a ? {} : a;
      b = void 0 === b ? {} : b;
      var c = {};
      a = r(Object.entries(a));
      for (var d = a.next(); !d.done; d = a.next()) {
        var e = r(d.value);
        d = e.next().value;
        e = e.next().value;
        null != e && (c[d] = String(e));
      }
      this.g = c;
      this.h = new mB(b);
    },
    xB = function (a, b) {
      if (!(hB(a) || fB(a) || iB(a) || gB(a) || jB(a))) {
        var c = new P(a),
          d = c.j;
        "pubads.g.doubleclick.net" === c.h && (vw("/ssai/", d) || vw("/ondemand/", d));
      }
      return new wB(vB(a), b);
    },
    yB = function (a, b) {
      if (a.g.hasOwnProperty(b)) return a.g[b];
    },
    zB = function (a) {
      var b = yB(a, "ltd");
      if (!(b = "1" === b || "true" === b)) {
        b = yB(a, "gdpr");
        var c = a.h.h;
        b = ("1" === c || "0" === c ? c : void 0 !== b ? b : "").toLowerCase();
        if ("true" === b || "1" === b) {
          if (b = a.h.g, a = yB(a, "gdpr_consent"), a = b && "tcunavailable" !== b ? b : "tcunavailable" === b ? a || b : a || "", "tcunavailable" === a) var d = !1;else {
            if ((b = Mu(a)) && a) {
              var e = Le(b, cu, 1);
              b = Le(b, Xt, 2) || new Xt();
              c = Ue(e, 9);
              var f = Ue(e, 4),
                g = Ue(e, 5),
                h = Te(e, 10),
                k = Te(e, 11),
                m = We(e, 16),
                n = Te(e, 15),
                q = {
                  consents: Nu(De(e, 13, Wd), zu),
                  legitimateInterests: Nu(De(e, 14, Wd), zu)
                },
                t = {
                  consents: Nu(De(e, 17, Zd)),
                  legitimateInterests: Nu(De(e, 18, Zd))
                },
                w = Nu(De(e, 12, Wd), Au),
                B = Ne(e, Wt, 19);
              e = {};
              B = r(B);
              for (var J = B.next(); !J.done; J = B.next()) {
                J = J.value;
                var Ua = Xe(J, 1);
                e[Ua] = e[Ua] || {};
                var Ja = De(J, 3, Zd);
                Ja = r(Ja);
                for (var ha = Ja.next(); !ha.done; ha = Ja.next()) e[Ua][ha.value] = Xe(J, 2);
              }
              a = {
                tcString: a,
                tcfPolicyVersion: c,
                gdprApplies: !0,
                cmpId: f,
                cmpVersion: g,
                isServiceSpecific: h,
                useNonStandardStacks: k,
                publisherCC: m,
                purposeOneTreatment: n,
                purpose: q,
                vendor: t,
                specialFeatureOptins: w,
                publisher: {
                  restrictions: e,
                  consents: Nu(De(b, 1, Wd), zu),
                  legitimateInterests: Nu(De(b, 2, Wd), zu),
                  customPurposes: {
                    consents: Nu(De(b, 3, Zd)),
                    legitimateInterests: Nu(De(b, 4, Zd))
                  }
                }
              };
            } else a = null;
            if (a) {
              var ua = void 0 === ua ? !1 : ua;
              if (uv(a)) {
                if (!1 === a.gdprApplies || "tcunavailable" === a.tcString || void 0 === a.gdprApplies && !ua || "string" !== typeof a.tcString || !a.tcString.length) d = !0;else {
                  d = void 0 === d ? "755" : d;
                  c: {
                    if (a.publisher && a.publisher.restrictions && (ua = a.publisher.restrictions["1"], void 0 !== ua)) {
                      ua = ua[void 0 === d ? "755" : d];
                      break c;
                    }
                    ua = void 0;
                  }
                  0 === ua ? d = !1 : a.purpose && a.vendor ? (ua = a.vendor.consents, (d = !(!ua || !ua[void 0 === d ? "755" : d])) && a.purposeOneTreatment && "CH" === a.publisherCC ? d = !0 : d && (d = a.purpose.consents, d = !(!d || !d["1"]))) : d = !0;
                }
              } else d = !1;
            } else d = !1;
          }
        } else d = !0;
        b = !d;
      }
      return b;
    },
    AB = function (a) {
      var b = new uB();
      a = !zB(a);
      Ce(b, 5, Rd(a));
      return b;
    };
  var BB = function (a) {
    this.P = pe(a);
  };
  u(BB, $e);
  BB.prototype.getVersion = function () {
    return We(this, 2);
  };
  var CB = function (a) {
    this.P = pe(a);
  };
  u(CB, $e);
  var DB = function (a, b) {
      return Ze(a, 2, b);
    },
    EB = function (a, b) {
      return Ze(a, 3, b);
    },
    FB = function (a, b) {
      return Ze(a, 4, b);
    },
    GB = function (a, b) {
      return Ze(a, 5, b);
    },
    HB = function (a, b) {
      return Ze(a, 9, b);
    },
    IB = function (a, b) {
      return Pe(a, 10, b);
    },
    JB = function (a, b) {
      return Ce(a, 11, Rd(b));
    },
    KB = function (a, b) {
      return Ze(a, 1, b);
    },
    LB = function (a, b) {
      return Ce(a, 7, Rd(b));
    };
  CB.la = [10, 6];
  const defaultWindowKeys = Object.assign({}, window);
  var MB = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");
  function NB(a) {
    var b;
    return null != (b = a.google_tag_data) ? b : a.google_tag_data = {};
  }
  function OB(a) {
    var b, c;
    return "function" === typeof (null == (b = a.navigator) ? void 0 : null == (c = b.userAgentData) ? void 0 : c.getHighEntropyValues);
  }
  function PB() {
    var a = window;
    if (!OB(a)) return null;
    var b = NB(a);
    if (b.uach_promise) return b.uach_promise;
    a = a.navigator.userAgentData.getHighEntropyValues(MB).then(function (c) {
      null != b.uach || (b.uach = c);
      return c;
    });
    return b.uach_promise = a;
  }
  function QB(a) {
    var b;
    return JB(IB(GB(DB(KB(FB(LB(HB(EB(new CB(), a.architecture || ""), a.bitness || ""), a.mobile || !1), a.model || ""), a.platform || ""), a.platformVersion || ""), a.uaFullVersion || ""), (null == (b = a.fullVersionList) ? void 0 : b.map(function (c) {
      var d = new BB();
      d = Ze(d, 1, c.brand);
      return Ze(d, 2, c.version);
    })) || []), a.wow64 || !1);
  }
  function RB() {
    var a, b;
    return null != (b = null == (a = PB()) ? void 0 : a.then(function (c) {
      return QB(c);
    })) ? b : null;
  }
  ;
  var TB = function () {
      new wB();
      ZA();
      this.deviceId = "";
      this.g = this.referrer = this.ppid = null;
      SB(this);
    },
    UB = function () {
      TB.g();
      var a = "h.3.609.1";
      tB.h && (a += "/vpaid_adapter");
      return a;
    },
    SB = function (a) {
      var b = RB();
      b && b.then(function (c) {
        if (null == c) c = null;else {
          c = bf(c);
          for (var d = [], e = 0, f = 0; f < c.length; f++) {
            var g = c.charCodeAt(f);
            255 < g && (d[e++] = g & 255, g >>= 8);
            d[e++] = g;
          }
          c = Lc(d, 3);
        }
        a.g = c;
      });
    };
  TB.g = function () {
    return z(TB);
  };
  var WB = function (a) {
      a = void 0 === a ? !1 : a;
      var b = sB(tB);
      if (b && oB(b, "forceCustomPlayback") || tB.h) return !0;
      if (gw() && a) return !1;
      a = a && (gw() || hw(10)) && tB.getDisableCustomPlaybackForIOS10Plus();
      return (pc || rc) && !a || oc && (!oc || !fw(ew, 4)) || VB() ? !0 : !1;
    },
    XB = function (a) {
      return null === a ? !1 : tB.h ? !0 : sc || gw() ? iw(a) ? gw() || hw(10) && tB.getDisableCustomPlaybackForIOS10Plus() ? !1 : !0 : !0 : oc && (!oc || !fw(ew, 4)) || VB() ? !0 : !1;
    },
    YB = function () {
      var a = sB(tB);
      return a && oB(a, "disableOnScreenDetection") ? !1 : !cn();
    },
    VB = function () {
      return 1 === ZB() || 2 === ZB();
    },
    ZB = function () {
      if (H(Fk)) switch (TB.g(), 0) {
        case 1:
          return 3;
        case 2:
          return 1;
      }
      return (TB.g(), TB.g(), "tvos" === (TB.g(), null)) ? 1 : dn() ? 2 : 0;
    };
  var $B = function (a, b) {
    return 0 == a.indexOf(b) ? a.substr(b.length) : null;
  };
  function aC() {
    if (cn()) return window.location.href;
    var a = zl(),
      b = a.h,
      c = a.g;
    a = a.j;
    var d = null;
    if (a) try {
      var e = Lv(a.url),
        f = e.j,
        g = $B(f, "/v/");
      g || (g = $B(f, "/a/"));
      if (!g) throw Error("Can not extract standalone amp url.");
      var h = $B("/" + g, "/s/"),
        k = Av(e.g);
      k.remove("amp_js_v");
      k.remove("amp_lite");
      var m = h ? Lv("https://" + h) : Lv("http://" + g);
      zv(m, k);
      d = m.toString();
    } catch (n) {
      d = null;
    }
    return d ? d : b && b.url ? b.url : c && c.url ? c.url : "";
  }
  function bC() {
    var a = vl();
    a = r(a);
    for (var b = a.next(); !b.done; b = a.next()) if (b = b.value, b.url && b.url.includes("amp=1")) return !0;
    return null != window.context ? (a = Number(window.context.ampcontextVersion), isNaN(a) ? !1 : 0 < Math.floor(a)) : null != zl().j;
  }
  function cC() {
    var a = C().location.ancestorOrigins;
    return a ? 0 < a.length ? [].concat(ka(a)).join(",") : "" : "";
  }
  ;
  function dC() {
    var a = C(),
      b = document;
    return new P(a.parent === a ? a.location.href : b.referrer);
  }
  function eC(a, b) {
    Kv(a, "url", "");
    try {
      var c = 2083 - a.toString().length - 1;
      if (0 >= c) return a.toString();
      for (var d = b.slice(0, c), e = encodeURIComponent(d), f = c; 0 < f && e.length > c;) d = b.slice(0, f--), e = encodeURIComponent(d);
      Kv(a, "url", d);
    } catch (g) {}
    return a.toString();
  }
  ;
  var W = {},
    fC = (W.creativeView = "creativeview", W.start = "start", W.midpoint = "midpoint", W.firstQuartile = "firstquartile", W.thirdQuartile = "thirdquartile", W.complete = "complete", W.mute = "mute", W.unmute = "unmute", W.pause = "pause", W.rewind = "rewind", W.resume = "resume", W.fullscreen = "fullscreen", W.exitFullscreen = "exitfullscreen", W.expand = "expand", W.collapse = "collapse", W.close = "close", W.acceptInvitation = "acceptinvitation", W.adCanPlay = "adCanPlay", W.adStarted = "adStarted", W.abandon = "abandon", W.acceptInvitationLinear = "acceptinvitationlinear", W.engagedView = "engagedview", W.instreamAdComplete = "instreamAdComplete", W.skipShown = "skipshown", W.skippableStateChanged = "skippableStateChanged", W.skip = "skip", W.progress = "progress", W.publisher_invoked_skip = "PUBLISHER_INVOKED_SKIP", W.annotation_start = "annotation_start", W.annotation_click = "annotation_click", W.annotation_close = "annotation_close", W.cta_annotation_shown = "cta_annotation_shown", W.cta_annotation_clicked = "cta_annotation_clicked", W.cta_annotation_closed = "cta_annotation_closed", W.replay = "replay", W.stop = "stop", W.autoplayDisallowed = "autoplayDisallowed", W.error = "error", W.mediaLoadTimeout = "mediaLoadTimeout", W.linearChanged = "linearChanged", W.click = "click", W.contentPauseRequested = "contentPauseRequested", W.contentResumeRequested = "contentResumeRequested", W.discardAdBreak = "discardAdBreak", W.updateAdsRenderingSettings = "updateAdsRenderingSettings", W.durationChange = "durationChange", W.expandedChanged = "expandedChanged", W.autoClose = "autoClose", W.userClose = "userClose", W.userRecall = "userRecall", W.prefetched = "prefetched", W.loaded = "loaded", W.init = "init", W.allAdsCompleted = "allAdsCompleted", W.adMetadata = "adMetadata", W.adBreakReady = "adBreakReady", W.adBreakFetchError = "adBreakFetchError", W.log = "log", W.volumeChange = "volumeChange", W.companionBackfill = "companionBackfill", W.companionInitialized = "companionInitialized", W.companionImpression = "companionImpression", W.companionClick = "companionClick", W.impression = "impression", W.interaction = "interaction", W.adProgress = "adProgress", W.adBuffering = "adBuffering", W.trackingUrlPinged = "trackingUrlPinged", W.measurable_impression = "measurable_impression", W.custom_metric_viewable = "custom_metric_viewable", W.viewable_impression = "viewable_impression", W.fully_viewable_audible_half_duration_impression = "fully_viewable_audible_half_duration_impression", W.audio_audible = "audio_audible", W.audio_measurable = "audio_measurable", W.overlay_resize = "overlay_resize", W.overlay_unmeasurable_impression = "overlay_unmeasurable_impression", W.overlay_unviewable_impression = "overlay_unviewable_impression", W.overlay_viewable_immediate_impression = "overlay_viewable_immediate_impression", W.overlay_viewable_end_of_session_impression = "overlay_viewable_end_of_session_impression", W.externalActivityEvent = "externalActivityEvent", W.adEvent = "adEvent", W.configure = "configure", W.remainingTime = "remainingTime", W.destroy = "destroy", W.resize = "resize", W.volume = "volume", W.authorIconClicked = "videoAuthorIconClicked", W.authorNameClicked = "videoAuthorClicked", W.videoClicked = "videoClicked", W.videoIconClicked = "videoIconClicked", W.learnMoreClicked = "videoLearnMoreClicked", W.muteClicked = "videoMuteClicked", W.titleClicked = "videoTitleClicked", W.videoSkipClicked = "SKIPPED", W.unmuteClicked = "videoUnmuteClicked", W.vpaidEvent = "vpaidEvent", W.show_ad = "show_ad", W.video_card_endcap_collapse = "video_card_endcap_collapse", W.video_card_endcap_dismiss = "video_card_endcap_dismiss", W.video_card_endcap_impression = "video_card_endcap_impression", W.mediaUrlPinged = "mediaUrlPinged", W.breakStart = "breakstart", W.breakEnd = "breakend", W.omidReady = "omidReady", W.omidUnavailable = "omidUnavailable", W.omidAdSessionCompleted = "omidAdSessionCompleted", W.omidAdSessionAbandoned = "omidAdSessionAbandoned", W.verificationNotExecuted = "verificationNotExecuted", W.loadStart = "loadStart", W.seeked = "seeked", W.seeking = "seeking", W);
  var gC = new function () {
    this.g = new Map();
    this.j = 0;
    this.h = null != window.fetch;
  }();
  function hC(a) {
    var b = void 0 === b ? gC : b;
    var c = void 0 === c ? null : c;
    a = new Aw(a, c ? c : c);
    var d = void 0 === d ? !1 : d;
    var e = void 0 === e ? !1 : e;
    null != a.g || e ? Tx(b, a.url, d, e, a.g) : Tx(b, a.url, d);
  }
  ;
  var X = function () {
    this.j = .01 > Math.random();
    this.h = Math.floor(4503599627370496 * Math.random());
    this.g = null;
  };
  X.prototype.report = function (a, b, c) {
    b = void 0 === b ? {} : b;
    if (null == v.G_testRunner && (this.j || (void 0 === c ? 0 : c))) {
      b.lid = a;
      UB() && (b.sdkv = UB());
      this.g && (b.palv = this.g);
      a = Wi().sort().join(",");
      lb(Eg(a)) || (b.e = a);
      b = iC(this, b);
      var d = new P("http://pagead2.googlesyndication.com/pagead/gen_204");
      Xf(b, function (e, f) {
        null != e && Kv(d, f, null == e ? "" : "boolean" === typeof e ? e ? "t" : "f" : "" + e);
      }, this);
      b = dC();
      xv(d, b.o);
      b = d.toString();
      a = d.g.get("url");
      null != a && Cb() && 2083 < b.length && (b = eC(d, a));
      hC(b);
    }
  };
  var iC = function (a, b) {
    b.id = "ima_html5";
    var c = dC();
    b.c = a.h;
    b.domain = c.h;
    return b;
  };
  X.g = function () {
    return z(X);
  };
  function jC(a) {
    var b = Date.now(),
      c = {};
    a = (c["x-afma-token-requester-type"] = a, c);
    c = "https://pubads.g.doubleclick.net/adsid/integrator.json?aos=" + encodeURIComponent(cC());
    return new cx().get({
      url: c,
      withCredentials: !0,
      timeout: new yw(),
      headers: a
    }).then(function (d) {
      var e = Date.now();
      d = d.newToken || "";
      var f = {};
      X.g().report(182, (f.t = e - b, f.aos = cC(), f));
      return new kC(d);
    }).catch(function (d) {
      var e = "not instanceof Error";
      d instanceof Error && (e = Bw(Number(d.message)));
      d = Date.now();
      var f = {};
      X.g().report(182, (f.except = e, f.t = d - b, f));
      return Promise.resolve(lC);
    });
  }
  var mC = function () {
    O.call(this);
    this.g = null;
    this.l = new Fw(this);
    N(this, this.l);
    this.h = new dt(72E5);
    this.j = Promise.resolve(lC);
  };
  u(mC, O);
  var nC = function (a) {
    var b = "requester_type_8";
    b = void 0 === b ? "requester_type_9" : b;
    var c = function (d) {
      a.g = d;
      return a.g;
    };
    a.j = jC(b).then(c);
    a.h = new dt(72E5);
    a.l.N(a.h, "tick", function () {
      a.j = jC(b).then(c);
    });
    a.h.start();
    Jn(a, function () {
      a.h.stop();
    });
  };
  mC.prototype.getId = function () {
    var a = this;
    return Ha(function (b) {
      if (1 == b.g) return null != a.g && a.g !== lC ? (b.g = 2, b = void 0) : b = ya(b, a.j, 3), b;
      2 != b.g && (a.g = b.h);
      return b.return(a.g);
    });
  };
  var kC = function (a) {
      this.id = a;
    },
    lC = new kC("");
  var oC = function (a) {
    O.call(this);
    this.j = [];
    this.h = !1;
    this.sessionId = a || "goog_" + Fg++;
  };
  u(oC, O);
  oC.prototype.connect = function () {
    for (this.h = !0; 0 !== this.j.length;) {
      var a = this.j.shift();
      a && this.sendMessage(a.name, a.type, a.data);
    }
  };
  var pC = function (a, b, c, d) {
    a.h ? a.sendMessage(b, c, d) : a.j.push({
      name: b,
      type: c,
      data: d
    });
  };
  oC.prototype.sendMessage = function () {};
  var qC = function (a, b, c, d, e) {
    e = void 0 === e ? "" : e;
    Zr.call(this, a);
    this.messageType = b;
    this.ra = c;
    this.sessionId = d;
    this.origin = e;
  };
  u(qC, Zr);
  qC.prototype.toString = function () {
    return "";
  };
  var rC = {
      IMAGE: "Image",
      FLASH: "Flash",
      ALL: "All"
    },
    sC = {
      HTML: "Html",
      IFRAME: "IFrame",
      STATIC: "Static",
      ALL: "All"
    },
    tC = {
      IGNORE: "IgnoreSize",
      SELECT_EXACT_MATCH: "SelectExactMatch",
      SELECT_NEAR_MATCH: "SelectNearMatch",
      SELECT_FLUID: "SelectFluid"
    },
    uC = function () {
      this.allowCustom = !0;
      this.creativeType = this.resourceType = "All";
      this.sizeCriteria = "SelectExactMatch";
      this.nearMatchPercent = 90;
      this.adSlotIds = [];
    };
  x("module$exports$google3$javascript$ads$interactivemedia$sdk$clientside$api$companion_ad_selection_settings.CompanionAdSelectionSettings.CreativeType", rC);
  x("module$exports$google3$javascript$ads$interactivemedia$sdk$clientside$api$companion_ad_selection_settings.CompanionAdSelectionSettings.ResourceType", sC);
  x("module$exports$google3$javascript$ads$interactivemedia$sdk$clientside$api$companion_ad_selection_settings.CompanionAdSelectionSettings.SizeCriteria", tC);
  var wC = function (a, b) {
      b = void 0 === b ? new uC() : b;
      this.g = a;
      this.settings = b ? b : new uC();
      this.resourceType = vC(sC, this.settings.resourceType) ? this.settings.resourceType : "All";
      this.creativeType = vC(rC, this.settings.creativeType) ? this.settings.creativeType : "All";
      this.sizeCriteria = vC(tC, this.settings.sizeCriteria) ? this.settings.sizeCriteria : "SelectExactMatch";
      this.adSlotIds = null != this.settings.adSlotIds ? this.settings.adSlotIds : [];
      this.nearMatchPercent = "number" === typeof this.settings.nearMatchPercent && 0 < this.settings.nearMatchPercent && 100 >= this.settings.nearMatchPercent ? this.settings.nearMatchPercent : 90;
    },
    zC = function (a, b) {
      var c = [];
      b.forEach(function (d) {
        a.settings.allowCustom && (!lb(d.getContent()) && (isNaN(d.data.sequenceNumber) || isNaN(d.data.mainAdSequenceNumber) || d.data.mainAdSequenceNumber === d.data.sequenceNumber) && xC(a, d) ? c.push(d) : (d = yC(a, d), null != d && !lb(d.getContent()) && c.push(d)));
      });
      return c;
    };
  wC.prototype.ie = function () {
    return this.resourceType;
  };
  var xC = function (a, b) {
      var c;
      if (c = "Flash" !== b.getContentType()) {
        if (c = "All" === a.resourceType || a.resourceType === b.ie()) c = b.getContentType(), c = null == c ? !0 : "All" === a.creativeType || a.creativeType === c;
        c && (c = b.getAdSlotId(), c = 0 === a.adSlotIds.length ? !0 : null != c ? a.adSlotIds.includes(c) : !1);
      }
      if (c) {
        if (c = b.getSize(), (b = !!b.data.fluidSize) || a.g.ge) a = b && a.g.ge;else if ((b = "IgnoreSize" === a.sizeCriteria) || (b = a.g.size, b = b == c ? !0 : b && c ? b.width == c.width && b.height == c.height : !1), b) a = !0;else {
          if (b = "SelectNearMatch" === a.sizeCriteria) b = c.width, c = c.height, b = b > a.g.size.width || c > a.g.size.height || b < a.nearMatchPercent / 100 * a.g.size.width || c < a.nearMatchPercent / 100 * a.g.size.height ? !1 : !0;
          a = b;
        }
      } else a = !1;
      return a;
    },
    yC = function (a, b) {
      b = AC(b);
      return null == b ? null : b.find(function (c) {
        return xC(a, c);
      }) || null;
    },
    vC = function (a, b) {
      return null != b && eg(a, b);
    };
  var BC = function (a, b) {
    this.message = a;
    this.errorCode = b;
  };
  BC.prototype.getErrorCode = function () {
    return this.errorCode;
  };
  BC.prototype.getMessage = function () {
    return this.message;
  };
  var CC = new BC("Failed to initialize ad playback element before starting ad playback.", 400),
    DC = new BC("The provided {0} information: {1} is invalid.", 1101);
  function EC(a, b) {
    var c = void 0 === b ? null : b;
    var d = Ia.apply(2, arguments);
    if (!(c instanceof kB)) {
      var e = a.getErrorCode(),
        f = a.getMessage();
      if (0 < d.length) for (var g = 0; g < d.length; g++) f = f.replace(new RegExp("\\{" + g + "\\}", "ig"), d[g]);
      d = new kB("adPlayError", f, e);
      d.g = c;
      c = d;
    }
    return c;
  }
  ;
  var FC = function () {};
  FC.g = function () {
    throw Error("Must be overridden");
  };
  var GC = function () {
    this.g = 0;
  };
  u(GC, FC);
  GC.qb = void 0;
  GC.g = function () {
    return GC.qb ? GC.qb : GC.qb = new GC();
  };
  function HC(a, b, c, d) {
    c = void 0 === c ? null : c;
    d = void 0 === d ? {} : d;
    var e = GC.g();
    0 === e.g && (e.g = .001 > Math.random() ? 2 : 1);
    if (2 === e.g) {
      e = {};
      var f = Object,
        g = f.assign;
      e.c = String(a);
      a = String;
      var h = window;
      if ("number" !== typeof h.goog_pvsid) try {
        var k = Object,
          m = k.defineProperty,
          n = void 0;
        n = void 0 === n ? Math.random : n;
        var q = Math.floor(n() * Math.pow(2, 52));
        m.call(k, h, "goog_pvsid", {
          value: q,
          configurable: !1
        });
      } catch (t) {}
      e.pc = a(Number(h.goog_pvsid) || -1);
      e.em = c;
      e.lid = b;
      z(Rt);
      Zh(g.call(f, {}, (e.eids = "", e), d), "esp");
    }
  }
  ;
  function IC() {
    var a = window;
    var b = void 0 === b ? function () {} : b;
    return new Promise(function (c) {
      var d = function () {
        c(b());
        Rf(a, "load", d);
      };
      Qf(a, "load", d);
    });
  }
  ;
  var JC = function () {
      this.cache = {};
    },
    LC = function () {
      KC || (KC = new JC());
      return KC;
    },
    MC = function (a) {
      var b = Qe(a, 3);
      if (!b) return 3;
      if (void 0 === Re(a, 2)) return 4;
      a = Date.now();
      return a > b + 2592E5 ? 2 : a > b + 432E5 ? 1 : 0;
    };
  JC.prototype.get = function (a, b) {
    if (this.cache[a]) return {
      Db: this.cache[a],
      success: !0
    };
    var c = "";
    try {
      c = b.getItem("_GESPSK-" + a);
    } catch (g) {
      var d;
      HC(6, a, null == (d = g) ? void 0 : d.message);
      return {
        Db: null,
        success: !1
      };
    }
    if (!c) return {
      Db: null,
      success: !0
    };
    try {
      var e = It(c);
      this.cache[a] = e;
      return {
        Db: e,
        success: !0
      };
    } catch (g) {
      var f;
      HC(5, a, null == (f = g) ? void 0 : f.message);
      return {
        Db: null,
        success: !1
      };
    }
  };
  JC.prototype.set = function (a, b) {
    var c = Re(a, 1),
      d = "_GESPSK-" + c;
    Ht(a);
    try {
      b.setItem(d, bf(a));
    } catch (f) {
      var e;
      HC(7, c, null == (e = f) ? void 0 : e.message);
      return !1;
    }
    this.cache[c] = a;
    return !0;
  };
  JC.prototype.remove = function (a, b) {
    a = Re(a, 1);
    try {
      b.removeItem("_GESPSK-" + a), delete this.cache[a];
    } catch (d) {
      var c;
      HC(8, a, null == (c = d) ? void 0 : c.message);
    }
  };
  var KC = null;
  var NC = function (a) {
    M.call(this);
    this.l = a;
    this.h = [];
    this.g = [];
    this.j = [];
    this.o = [];
  };
  u(NC, M);
  var OC = function (a, b) {
    a.g.push({
      fc: !1,
      Oa: b
    });
    Tf(Qu) && b.bd(a.l);
  };
  NC.prototype.L = function () {
    this.h.length = 0;
    this.j.length = 0;
    if (Tf(Qu)) for (var a = r(this.g), b = a.next(); !b.done; b = a.next()) b.value.Oa.kc.length = 0;
    this.g.length = 0;
    this.o.length = 0;
    M.prototype.L.call(this);
  };
  var PC = function () {
    var a = this;
    this.promise = new Promise(function (b, c) {
      a.resolve = b;
      a.reject = c;
    });
  };
  var QC = function (a) {
    a = Error.call(this, a);
    this.message = a.message;
    "stack" in a && (this.stack = a.stack);
    Object.setPrototypeOf(this, QC.prototype);
    this.name = "InputError";
  };
  u(QC, Error);
  var RC = function () {
      this.ib = !1;
    },
    SC = function () {
      RC.apply(this, arguments);
      this.kc = [];
      this.Pc = new PC();
    };
  u(SC, RC);
  var UC = function (a, b) {
      a.ib || (a.ib = !0, a.Ub = b, a.Pc.resolve(b), Tf(Qu) && TC(a));
    },
    TC = function (a) {
      for (var b = r(a.kc), c = b.next(); !c.done; c = b.next()) c = c.value, c(a.Ub);
      a.kc.length = 0;
    };
  SC.prototype.bd = function (a) {
    Tf(Qu) && this.kc.push(a);
  };
  da.Object.defineProperties(SC.prototype, {
    promise: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return this.Pc.promise;
      }
    },
    Wb: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return this.ib;
      }
    },
    error: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return this.xd;
      }
    }
  });
  var VC = function () {
    SC.apply(this, arguments);
  };
  u(VC, SC);
  var WC = function (a, b) {
      UC(a, b);
    },
    XC = function (a, b) {
      b.then(function (c) {
        UC(a, c);
      });
    };
  VC.prototype.kb = function (a) {
    this.ib || (this.ib = !0, this.Ub = null, this.xd = a, this.Pc.reject(a), Tf(Qu) && TC(this));
  };
  var YC = function (a) {
    this.ib = !1;
    this.g = a;
  };
  u(YC, RC);
  YC.prototype.Wb = function () {
    return this.g.ib;
  };
  da.Object.defineProperties(YC.prototype, {
    error: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return this.g.xd;
      }
    }
  });
  var ZC = function (a) {
    YC.call(this, a);
    this.g = a;
  };
  u(ZC, YC);
  da.Object.defineProperties(ZC.prototype, {
    value: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return this.g.Ub;
      }
    }
  });
  var $C = function (a) {
    YC.call(this, a);
    this.g = a;
  };
  u($C, YC);
  da.Object.defineProperties($C.prototype, {
    value: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        var a;
        return null != (a = this.g.Ub) ? a : null;
      }
    }
  });
  var aD = function () {
    SC.apply(this, arguments);
  };
  u(aD, SC);
  aD.prototype.notify = function () {
    UC(this, null);
  };
  function bD(a, b, c) {
    var d, e, f, g, h;
    return Ha(function (k) {
      if (1 == k.g) return d = c ? a.filter(function (m) {
        return !m.fc;
      }) : a, ya(k, Promise.all(d.map(function (m) {
        return m.Oa.promise;
      })), 2);
      if (a.length === d.length) return k.return();
      e = a.filter(function (m) {
        return m.fc;
      });
      if (Tf(Ru)) {
        f = r(b);
        for (g = f.next(); !g.done; g = f.next()) h = g.value, h.g();
        return ya(k, Promise.all(e.map(function (m) {
          return m.Oa.promise;
        })), 0);
      }
      return ya(k, Promise.race([Promise.all(e.map(function (m) {
        return m.Oa.promise;
      })), new Promise(function (m) {
        return void setTimeout(m, c);
      })]), 0);
    });
  }
  var dD = function (a, b, c) {
    M.call(this);
    var d = this;
    this.id = a;
    this.timeoutMs = b;
    this.o = c;
    this.G = this.F = this.D = this.l = !1;
    this.g = new NC(function () {
      cD(d);
    });
    N(this, this.g);
  };
  u(dD, M);
  dD.prototype.start = function () {
    var a = this,
      b;
    return Ha(function (c) {
      if (1 == c.g) {
        if (a.l) return c.return();
        a.l = !0;
        c.j = 2;
        return ya(c, bD(a.g.g, a.g.o, a.timeoutMs), 4);
      }
      if (2 != c.g) {
        if (!a.ya()) {
          for (var d = 0, e = r(a.g.j), f = e.next(); !f.done; f = e.next()) {
            if (null == f.value.g.Ub) throw Error("missing input: " + a.id + "/" + d);
            ++d;
          }
          a.h();
        }
        return za(c);
      }
      b = Aa(c);
      if (a.ya()) return c.return();
      !(b instanceof QC) && b instanceof Error && (a.o ? a.o(a.id, b) : a.A(a.id, b), eD(a, b));
      c.g = 0;
    });
  };
  var cD = function (a) {
      if (!a.l && a.D) try {
        var b = a.g.g,
          c = a.timeoutMs ? b.filter(function (k) {
            return !k.fc;
          }) : b,
          d = b.filter(function (k) {
            return k.fc;
          }),
          e,
          f = null == (e = b.find(function (k) {
            return void 0 !== k.Oa.error;
          })) ? void 0 : e.Oa.error;
        if (f) throw a.l = !0, f;
        if (!c.some(function (k) {
          return !k.Oa.Wb;
        })) {
          if (d.length) if (Tf(Ru)) {
            for (var g = r(a.g.o), h = g.next(); !h.done; h = g.next()) h.value.g();
            if (d.some(function (k) {
              return !k.Oa.Wb;
            })) return;
          } else if (a.F || (a.F = !0, setTimeout(function () {
            a.G = !0;
            cD(a);
          }, a.timeoutMs)), d.some(function (k) {
            return !k.Oa.Wb;
          }) && !a.G) return;
          a.l = !0;
          a.h();
        }
      } catch (k) {
        !(a.ya() || k instanceof QC) && k instanceof Error && (a.o ? a.o(a.id, k) : a.A(a.id, k), eD(a, k));
      }
    },
    fD = function (a) {
      var b = void 0 === b ? new VC() : b;
      a.g.h.push(b);
      return b;
    },
    gD = function (a) {
      var b = void 0 === b ? new aD() : b;
      a.g.h.push(b);
      return b;
    },
    hD = function (a, b) {
      OC(a.g, b);
      b = new ZC(b);
      a.g.j.push(b);
      return b;
    },
    iD = function (a, b) {
      OC(a.g, b);
      return new $C(b);
    },
    eD = function (a, b) {
      if (!a.o && a.g.h.length) {
        b = new QC(b.message);
        a = r(a.g.h);
        for (var c = a.next(); !c.done; c = a.next()) if (c = c.value, !c.Wb) {
          var d = b;
          c.ib = !0;
          c.xd = d;
          c.Pc.reject(d);
          Tf(Qu) && TC(c);
        }
      }
    };
  var jD = function (a, b) {
    dD.call(this, a);
    this.id = a;
    this.A = b;
  };
  u(jD, dD);
  function kD(a, b) {
    return Ne(a, Ft, 2).some(function (c) {
      return Re(c, 1) === b && null != Re(c, 2);
    });
  }
  ;
  function lD(a) {
    var b = new Lt();
    if (a) {
      var c = [],
        d = RegExp("^_GESPSK-(.+)$");
      try {
        for (var e = 0; e < a.length; e++) {
          var f = (d.exec(a.key(e)) || [])[1];
          f && c.push(f);
        }
      } catch (m) {}
      c = r(c);
      e = c.next();
      for (d = {}; !e.done; d = {
        Nb: d.Nb
      }, e = c.next()) if (d.Nb = e.value, (f = LC().get(d.Nb, a).Db) && !kD(b, d.Nb) && (e = MC(f), 2 !== e && 3 !== e)) {
        Ce(f, 9, Rd(!1));
        e = Re(f, 2);
        var g = Ft,
          h = b.P,
          k = Ad(h);
        Od(k);
        h = Me(h, k, g, 2, !0);
        f = null != f ? f : new g();
        h.push(f);
        wd(f.P) & 2 ? yd(h, 8) : yd(h, 16);
        f = {};
        HC(19, d.Nb, null, (f.hs = e ? "1" : "0", f));
      }
    }
    if (!Ne(b, Ft, 2).length) return null;
    HC(50, "");
    return Lc(b.g(), 3);
  }
  ;
  var mD = {};
  var nD = function () {
    M.call(this);
    this.o = [];
    this.A = [];
    this.l = {};
    this.g = [];
    this.h = new PC();
    this.j = {};
  };
  u(nD, M);
  var oD = function (a, b) {
      N(a, b);
      a.o.push(b);
    },
    pD = function (a, b) {
      b = r(b);
      for (var c = b.next(); !c.done; c = b.next()) oD(a, c.value);
    },
    qD = function (a) {
      var b, c, d, e, f, g, h, k, m, n, q, t;
      Ha(function (w) {
        switch (w.g) {
          case 1:
            if (!a.g.length) {
              w.g = 2;
              break;
            }
            return ya(w, Promise.all(a.g.map(function (B) {
              return B.h.promise;
            })), 2);
          case 2:
            b = r(a.o);
            for (c = b.next(); !c.done; c = b.next()) d = c.value, Tf(Qu) ? (d.D = !0, cD(d)) : d.start();
            e = r(a.A);
            for (f = e.next(); !f.done; f = e.next()) g = f.value, qD(g);
            if (!a.j) {
              w.g = 4;
              break;
            }
            h = Object.keys(a.j);
            if (!h.length) {
              w.g = 4;
              break;
            }
            return ya(w, Promise.all(Object.values(a.j).map(function (B) {
              return B.promise;
            })), 6);
          case 6:
            for (k = w.h, m = 0, n = r(h), q = n.next(); !q.done; q = n.next()) t = q.value, a.l[t] = k[m++];
          case 4:
            return a.h.resolve(a.l), w.return(a.h.promise);
        }
      });
    };
  nD.prototype.L = function () {
    M.prototype.L.call(this);
    this.o.length = 0;
    this.A.length = 0;
    this.g.length = 0;
  };
  var rD = function (a, b, c, d) {
    jD.call(this, 1041, d);
    this.storage = b;
    this.B = hD(this, a);
    c && (this.j = iD(this, c));
  };
  u(rD, jD);
  rD.prototype.h = function () {
    var a = this.B.value,
      b,
      c,
      d = null != (c = this.storage) ? c : null == (b = this.j) ? void 0 : b.value;
    d && LC().set(a, d) && null != Re(a, 2) && HC(27, Re(a, 1));
  };
  var sD = function (a, b) {
    jD.call(this, 1094, b);
    this.j = gD(this);
    this.B = hD(this, a);
  };
  u(sD, jD);
  sD.prototype.h = function () {
    var a = this.B.value;
    if (a) {
      if (void 0 !== a) for (var b = r(Object.keys(a)), c = b.next(); !c.done; c = b.next()) if (c = c.value, c.startsWith("_GESPSK")) try {
        a.removeItem(c);
      } catch (d) {}
      KC = new JC();
      this.j.notify();
    }
  };
  var tD = function (a, b) {
    jD.call(this, 1048, b);
    this.j = fD(this);
    this.B = fD(this);
    this.H = hD(this, a);
  };
  u(tD, jD);
  tD.prototype.h = function () {
    var a = this.H.value,
      b = function (c) {
        var d = {};
        HC(c, Re(a, 1), null, (d.tic = String(Math.round((Date.now() - Qe(a, 3)) / 6E4)), d));
      };
    switch (MC(a)) {
      case 0:
        b(24);
        break;
      case 1:
        b(25);
        UC(this.B, a);
        break;
      case 2:
        b(26);
        UC(this.j, a);
        break;
      case 3:
        HC(9, Re(a, 1));
        UC(this.j, a);
        break;
      case 4:
        b(23), UC(this.j, a);
    }
  };
  var uD = function (a, b, c) {
    jD.call(this, 1027, c);
    this.qc = a;
    this.storage = b;
    this.j = fD(this);
    this.B = fD(this);
  };
  u(uD, jD);
  uD.prototype.h = function () {
    var a = LC().get(this.qc, this.storage).Db;
    if (!a) {
      a = Ht(Gt(this.qc));
      var b = a.kb(Dt(100));
      UC(this.B, b);
    }
    UC(this.j, a);
  };
  var vD = function (a, b, c) {
    jD.call(this, 1046, c);
    this.output = gD(this);
    this.j = fD(this);
    this.B = hD(this, b);
    OC(this.g, a);
  };
  u(vD, jD);
  vD.prototype.h = function () {
    UC(this.j, this.B.value);
  };
  var wD = function (a, b, c) {
    jD.call(this, 1047, c);
    this.collectorFunction = a;
    this.j = fD(this);
    this.B = fD(this);
    this.H = fD(this);
    this.J = hD(this, b);
  };
  u(wD, jD);
  wD.prototype.h = function () {
    var a = this,
      b = this.J.value,
      c = Re(b, 1);
    HC(18, c);
    try {
      var d = gi();
      this.collectorFunction().then(function (e) {
        HC(29, c, null, {
          delta: String(gi() - d)
        });
        var f = Ze(b, 2, e);
        UC(a.j, f);
        UC(a.H, null != e ? e : null);
      }).catch(function (e) {
        HC(28, c, xD(e));
        e = b.kb(Dt(106));
        UC(a.B, e);
      });
    } catch (e) {
      HC(1, c, xD(e)), WC(this.B, b.kb(Dt(107)));
    }
  };
  function xD(a) {
    return "string" === typeof a ? a : a instanceof Error ? a.message : null;
  }
  ;
  var yD = function (a, b) {
    jD.call(this, 1028, b);
    this.j = fD(this);
    this.B = hD(this, a);
  };
  u(yD, jD);
  yD.prototype.h = function () {
    var a = this.B.value,
      b = Re(a, 1);
    null != Qe(a, 3) || HC(35, b);
    UC(this.j, a);
  };
  var zD = function (a, b, c, d, e) {
    jD.call(this, 1050, e);
    this.J = c;
    this.H = d;
    this.j = fD(this);
    this.B = hD(this, a);
    this.M = iD(this, b);
  };
  u(zD, jD);
  zD.prototype.h = function () {
    var a = this.B.value,
      b = Re(a, 1),
      c = this.M.value;
    if (null == c) HC(41, b), a.kb(Dt(111)), UC(this.j, a);else if ("string" !== typeof c) HC(21, b), a = a.kb(Dt(113)), UC(this.j, a);else {
      if (c.length > (/^(\d+)$/.test(b) ? this.H : this.J)) {
        var d = {};
        HC(12, b, null, (d.sl = String(c.length), d));
        b = a.kb(Dt(108));
        Ce(b, 2);
      } else c.length || HC(20, b), Ce(a, 10);
      UC(this.j, a);
    }
  };
  var AD = function (a) {
    jD.call(this, 1046, a);
    this.output = gD(this);
  };
  u(AD, jD);
  AD.prototype.h = function () {
    var a = this;
    IC().then(function () {
      a.output.notify();
    });
  };
  function BD(a, b, c, d, e) {
    var f, g, h, k, m, n, q, t, w, B, J, Ua, Ja;
    return Ha(function (ha) {
      return 1 == ha.g ? (f = new nD(), g = new uD(a, c, e), oD(f, g), oD(f, new rD(g.B, void 0, d, e)), h = new yD(g.j, e), oD(f, h), k = new tD(h.j, e), oD(f, k), m = new wD(b, k.j, e), oD(f, m), oD(f, new rD(m.B, void 0, d, e)), n = new zD(m.j, m.H, 300, 1E3, e), oD(f, n), oD(f, new rD(n.j, void 0, d, e)), q = new AD(e), oD(f, q), t = new vD(q.output, k.B, e), oD(f, t), w = new wD(b, t.j, e), oD(f, w), B = new rD(w.j, void 0, d, e), oD(f, B), qD(f), Ja = a, ya(ha, n.j.promise, 2)) : ha.return({
        id: Ja,
        collectorGeneratedData: null != (Ua = null == (J = ha.h) ? void 0 : Re(J, 2)) ? Ua : null
      });
    });
  }
  ;
  var CD = function (a, b, c, d) {
    jD.call(this, 1059, d);
    this.J = b;
    this.H = c;
    this.j = fD(this);
    this.M = hD(this, a);
    this.B = iD(this, c);
  };
  u(CD, jD);
  CD.prototype.h = function () {
    var a = this.B.value;
    if (a) {
      var b = this.M.value,
        c = b.id,
        d = b.collectorFunction,
        e;
      b = null != (e = b.networkCode) ? e : c;
      c = {};
      HC(42, b, null, (c.ea = String(Number(this.J)), c));
      XC(this.j, BD(b, d, a, this.H, this.A));
    }
  };
  var DD = function (a, b) {
    jD.call(this, 1057, b);
    this.j = a;
    this.B = fD(this);
    this.H = fD(this);
  };
  u(DD, jD);
  DD.prototype.h = function () {
    if (this.j) {
      if ("object" !== typeof this.j) HC(46, "UNKNOWN_COLLECTOR_ID"), ED(this, "UNKNOWN_COLLECTOR_ID", 112);else {
        var a = this.j.id,
          b = this.j.networkCode;
        a && b && (delete this.j.id, HC(47, a + ";" + b));
        a = null != b ? b : a;
        "string" !== typeof a ? (b = {}, HC(37, "INVALID_COLLECTOR_ID", null, (b.ii = JSON.stringify(a), b)), ED(this, "INVALID_COLLECTOR_ID", 102)) : "function" !== typeof this.j.collectorFunction ? (HC(14, a), ED(this, a, 105)) : z(Sf).g(Pu.g, Pu.defaultValue).includes(a) ? (HC(22, a), ED(this, a, 104)) : UC(this.H, this.j);
      }
    } else HC(39, "UNKNOWN_COLLECTOR_ID"), ED(this, "UNKNOWN_COLLECTOR_ID", 110);
  };
  var ED = function (a, b, c) {
    b = Gt(b).kb(Dt(c));
    UC(a.B, b);
  };
  var FD = function (a, b, c, d, e) {
    var f = document;
    f = void 0 === f ? document : f;
    e = void 0 === e ? mD : e;
    this.g = b;
    this.j = c;
    this.o = f;
    this.K = d;
    this.I = e;
    this.B = [];
    this.A = [];
    this.l = [];
    this.h = 0;
    a = r(a);
    for (b = a.next(); !b.done; b = a.next()) this.push(b.value);
  };
  FD.prototype.push = function (a) {
    var b = this;
    this.j || this.K();
    var c = function (f, g) {
      return void GD(b, f, g);
    };
    a = new DD(a, c);
    var d = new rD(a.B, void 0, this.g, c);
    c = new CD(a.H, this.j, this.g, c, this.I);
    var e = new nD();
    pD(e, [a, d, c]);
    qD(e);
    a = c.j.promise;
    this.B.push(a);
    d = r(this.A);
    for (c = d.next(); !c.done; c = d.next()) a.then(c.value);
  };
  FD.prototype.addOnSignalResolveCallback = function (a) {
    this.A.push(a);
    for (var b = r(this.B), c = b.next(); !c.done; c = b.next()) c.value.then(a);
  };
  FD.prototype.addErrorHandler = function (a) {
    this.l.push(a);
  };
  FD.prototype.clearAllCache = function () {
    var a = this,
      b = this.o.currentScript instanceof HTMLScriptElement ? this.o.currentScript.src : "";
    if (1 === this.h) {
      var c = {};
      HC(49, "", null, (c.url = b, c));
    } else if (c = String(Ah(null != b ? b : "")), z(Sf).g(Ou.g, Ou.defaultValue).includes(c)) c = {}, HC(48, "", null, (c.url = b, c));else {
      var d = new nD();
      c = new sD(this.g, function (e, f) {
        return void GD(a, e, f);
      });
      oD(d, c);
      qD(d);
      this.h = 1;
      setTimeout(function () {
        a.h = 0;
      }, 1E3 * Uf());
      d = {};
      HC(43, "", null, (d.url = b, d));
      return c.j.promise;
    }
  };
  var GD = function (a, b, c) {
      a = r(a.l);
      for (var d = a.next(); !d.done; d = a.next()) d = d.value, d(b, c);
    },
    HD = function (a) {
      this.push = function (b) {
        a.push(b);
      };
      this.addOnSignalResolveCallback = function (b) {
        a.addOnSignalResolveCallback(b);
      };
      this.addErrorHandler = function (b) {
        a.addErrorHandler(b);
      };
      this.clearAllCache = function () {
        a.clearAllCache();
      };
    };
  function ID(a, b, c, d, e, f) {
    f = void 0 === f ? mD : f;
    wh() !== xh() ? HC(16, "") : JD(a, "encryptedSignalProviders", c, e) && JD(a, "secureSignalProviders", c, e) || (HC(38, ""), KD(a, "encryptedSignalProviders", b, f, c, d, e), KD(a, "secureSignalProviders", b, f, c, function () {}, e));
  }
  function JD(a, b, c, d) {
    if (void 0 === a[b] || a[b] instanceof Array) return !1;
    a = a[b];
    d && a.addOnSignalResolveCallback(d);
    a.addErrorHandler(c);
    return !0;
  }
  function KD(a, b, c, d, e, f, g) {
    var h,
      k = new FD(null != (h = a[b]) ? h : [], c, "secureSignalProviders" === b, f, d);
    a[b] = new HD(k);
    g && k.addOnSignalResolveCallback(g);
    k.addErrorHandler(e);
  }
  function LD(a, b, c, d, e) {
    var f = void 0 === f ? mD : f;
    var g = new VC();
    UC(g, b);
    ID(a, g, c, d, e, f);
  }
  function MD(a, b, c, d) {
    var e = ND,
      f = new Map();
    b = b.map(function (g) {
      var h = g.qc;
      return new Promise(function (k) {
        f.set(h, k);
      });
    });
    LD(a, c, d, e, function (g) {
      var h = g.collectorGeneratedData;
      g = g.id;
      var k;
      return void (null == (k = f.get(g)) ? void 0 : k({
        collectorGeneratedData: h,
        id: g
      }));
    });
    return b;
  }
  ;
  function OD() {
    var a;
    return null != (a = v.googletag) ? a : v.googletag = {
      cmd: []
    };
  }
  ;
  function PD(a) {
    if (!a || zB(a)) return null;
    try {
      return window.localStorage;
    } catch (b) {
      return null;
    }
  }
  function QD(a, b) {
    (a = PD(a)) && LD(OD(), a, function () {}, ND, b);
  }
  function RD(a, b) {
    return (b = PD(b)) && 0 !== a.length ? MD(OD(), a, b, function () {}) : null;
  }
  function ND() {}
  ;
  function SD(a, b, c, d) {
    var e = new PC(),
      f = "",
      g = function (k) {
        try {
          var m = "object" === typeof k.data ? k.data : JSON.parse(k.data);
          f === m.paw_id && (Rf(a, "message", g), m.error ? e.reject(Error(m.error)) : e.resolve(d(m)));
        } catch (n) {}
      },
      h = TD(a);
    return h ? (Qf(a, "message", g), f = c(h), e.promise) : (c = UD(a)) ? (f = String(Math.floor(2147483647 * yh())), Qf(a, "message", g), b(c, f), e.promise) : null;
  }
  function VD(a) {
    return SD(a, function (b, c) {
      var d, e;
      return void (null == (d = null != (e = b.getGmaQueryInfo) ? e : b.getGmaSig) ? void 0 : d.postMessage(c));
    }, function (b) {
      return b.getQueryInfo();
    }, function (b) {
      return b.signal;
    });
  }
  function WD() {
    var a = window;
    return !!TD(a) || !!UD(a);
  }
  function TD(a) {
    var b;
    if ("function" === typeof (null == (b = a.gmaSdk) ? void 0 : b.getQueryInfo)) return a.gmaSdk;
  }
  function UD(a) {
    var b, c, d, e, f, g;
    if ("function" === typeof (null == (b = a.webkit) ? void 0 : null == (c = b.messageHandlers) ? void 0 : null == (d = c.getGmaQueryInfo) ? void 0 : d.postMessage) || "function" === typeof (null == (e = a.webkit) ? void 0 : null == (f = e.messageHandlers) ? void 0 : null == (g = f.getGmaSig) ? void 0 : g.postMessage)) return a.webkit.messageHandlers;
  }
  ;
  var YD = function () {
      this.timeoutMs = XD;
      this.h = VD;
      this.signal = null;
      this.g = 0;
    },
    ZD = function () {
      return H(rk) && oc || H(pk) && (sc || gw());
    },
    $D = function (a) {
      if (WD()) {
        if (H(sk) || H(qk) && oc || H(ok) && (sc || gw())) return Promise.resolve("0");
        if (H(tk) || ZD()) {
          var b;
          return (null != (b = a.h(window)) ? b : Promise.resolve(null)).catch(function () {
            return "0";
          });
        }
      }
      return Promise.resolve(null);
    },
    bE = function (a) {
      var b;
      return Ha(function (c) {
        if (1 == c.g) {
          if (!ZD()) return c.return(aE(a));
          b = Date.now() - a.g;
          !a.signal || 3E5 < b ? c = ya(c, aE(a), 3) : (c.g = 2, c = void 0);
          return c;
        }
        2 != c.g && (a.signal = c.h, a.g = Date.now());
        return c.return(a.signal);
      });
    },
    aE = function (a) {
      return Promise.race([$D(a).then(function (b) {
        if (null == b) return null;
        a.signal = 1E4 < b.length ? "0" : b;
        a.g = Date.now();
        return a.signal;
      }), ft(a.timeoutMs)]);
    };
  function Gi(a, b) {
    return b instanceof RegExp ? "__REGEXP" + b.toString() : b;
  }
  function cE(a, b) {
    return b && 0 === b.toString().indexOf("__REGEXP") ? (a = b.split("__REGEXP")[1].match(/\/(.*)\/(.*)?/), new RegExp(a[1], a[2] || "")) : b;
  }
  var dE = function (a, b) {
    oC.call(this, b);
    this.l = a;
    this.g = null;
    this.A = new Fw(this);
    this.A.N(C(), "message", this.B);
  };
  u(dE, oC);
  var eE = function (a) {
    if (null == a || "string" !== typeof a || !a.startsWith("ima://")) return null;
    a = a.substr(6);
    try {
      return JSON.parse(a, cE);
    } catch (b) {
      return null;
    }
  };
  dE.prototype.sendMessage = function (a, b, c) {
    if (null != this.g && null != this.g.postMessage) {
      var d = this.g,
        e = d.postMessage,
        f = {};
      f.name = a;
      f.type = b;
      null != c && (f.data = c);
      f.sid = this.sessionId;
      f.channel = this.l;
      a = [];
      Ii(new Hi(), f, a);
      e.call(d, "ima://" + a.join(""), "*");
    }
    null != this.g && null == this.g.postMessage && X.g().report(11);
  };
  dE.prototype.L = function () {
    In(this.A);
    this.g = null;
    oC.prototype.L.call(this);
  };
  dE.prototype.B = function (a) {
    a = a.g;
    var b = eE(a.data);
    if (fE(this, b)) {
      if (null === this.g) this.g = a.source, this.h || this.connect();else if (this.g !== a.source) return;
      fE(this, b) && this.dispatchEvent(new qC(b.name, b.type, b.data || {}, b.sid, a.origin));
    }
  };
  var fE = function (a, b) {
    if (null == b) return !1;
    var c = b.channel;
    if (null == c || c !== a.l) return !1;
    b = b.sid;
    return null == b || "*" !== a.sessionId && b !== a.sessionId ? !1 : !0;
  };
  var gE = function () {
    O.call(this);
    this.F = !1;
    this.g = null;
    this.A = this.D = this.J = !1;
    this.h = 0;
    this.l = [];
    this.B = !1;
    this.U = this.M = Infinity;
    this.j = 0;
    this.G = {};
    this.H = new Fw(this);
    N(this, this.H);
  };
  u(gE, O);
  var iE = function (a, b) {
      null == b || a.F || (a.g = b, hE(a), a.F = !0);
    },
    kE = function (a) {
      null != a.g && a.F && (jE(a), a.F = !1, a.D = !1, a.A = !1, a.h = 0, a.l = [], a.B = !1);
    },
    hE = function (a) {
      jE(a);
      !(a.g instanceof O) && "ontouchstart" in document.documentElement && sc ? (a.G = {
        touchstart: function (b) {
          a.D = !0;
          a.h = b.touches.length;
          a.j && (window.clearTimeout(a.j), a.j = 0, a.J = !0);
          a.B = lE(a, b.touches) || 1 !== b.touches.length;
          a.B ? (a.M = Infinity, a.U = Infinity) : (a.M = b.touches[0].clientX, a.U = b.touches[0].clientY);
          b = b.touches;
          a.l = [];
          for (var c = 0; c < b.length; c++) a.l.push(b[c].identifier);
        },
        touchmove: function (b) {
          a.h = b.touches.length;
          if (!hw(8) || Math.pow(b.changedTouches[0].clientX - a.M, 2) + Math.pow(b.changedTouches[0].clientY - a.U, 2) > Math.pow(5, 2)) a.A = !0;
        },
        touchend: function (b) {
          return void mE(a, b);
        }
      }, Xf(a.G, function (b, c) {
        a.g.addEventListener(c, b, !1);
      })) : a.H.N(a.g, "click", a.V);
    },
    jE = function (a) {
      a.H.vb(a.g, "click", a.V);
      Xf(a.G, function (b, c) {
        this.g.removeEventListener(c, b, !1);
      }, a);
      a.G = {};
    },
    mE = function (a, b) {
      !a.D || 1 !== a.h || a.A || a.J || a.B || !lE(a, b.changedTouches) || (a.j = window.setTimeout(function () {
        return void nE(a);
      }, 300));
      a.h = b.touches.length;
      0 === a.h && (a.D = !1, a.A = !1, a.l = []);
      a.J = !1;
    };
  gE.prototype.V = function () {
    nE(this);
  };
  var lE = function (a, b) {
      for (var c = 0; c < b.length; c++) if (a.l.includes(b[c].identifier)) return !0;
      return !1;
    },
    nE = function (a) {
      a.j = 0;
      a.dispatchEvent(new Zr("click"));
    };
  gE.prototype.L = function () {
    kE(this);
    O.prototype.L.call(this);
  };
  var oE = ZA().toString();
  function pE(a) {
    return "number" === typeof a ? a.toString() : "";
  }
  ;
  var qE = function () {
      this.g = new PC();
      this.j = new cx();
      this.h = !1;
    },
    sE = function (a) {
      if (!a.h) if (a.h = !0, H(Kk) || H(Jk)) {
        var b = rE();
        b && a.j.get({
          url: b,
          timeout: new yw()
        }).then(function (c) {
          c = JSON.stringify(c);
          a.g.resolve(Bt(c));
        }).catch(function (c) {
          X.g().report(186, {
            errorCode: c.errorCode,
            httpStatus: c.g
          }, !0);
          a.g.resolve(null);
        });
      } else a.g.resolve(null);
    };
  qE.prototype.getConfig = function () {
    this.h || sE(this);
    return this.g.promise;
  };
  var rE = function () {
      var a = H(Jk) ? Al() : H(Kk) ? aC() : null;
      return a ? Kv(new P("https://securepubads.g.doubleclick.net/pagead/ppub_config"), "ippd", a).toString() : null;
    },
    tE = new qE();
  var uE = "abort canplay canplaythrough durationchange emptied loadstart loadeddata loadedmetadata progress ratechange seeked seeking stalled suspend waiting".split(" ");
  var vE = function (a, b) {
    M.call(this);
    this.g = a;
    this.timeoutMs = b;
    N(this, this.g);
  };
  u(vE, M);
  var xE = function (a) {
      if (!av(a.g.caller)) return Promise.resolve(null);
      var b = new PC(),
        c = null;
      a.g.addEventListener(function (e) {
        if (1 === e.pingData.internalErrorState) b.resolve(null);else if ("listenerRegistered" === e.eventName) c = e.listenerId, 1 === e.pingData.applicableSections.length && -1 === e.pingData.applicableSections[0] && b.resolve(new wE("", "-1"));else if ("signalStatus" === e.eventName && "ready" === e.data) {
          e = e.pingData;
          var f,
            g = (null != (f = e.applicableSections) ? f : []).join("_");
          b.resolve(new wE(e.gppString, g));
        }
      });
      var d = new Promise(function (e) {
        setTimeout(function () {
          e(null);
        }, a.timeoutMs);
      });
      d = Promise.race([b.promise, d]);
      d.then(function () {
        null !== c && a.g.removeEventListener(c);
      });
      return d;
    },
    wE = function (a, b) {
      this.gppString = a;
      this.sid = b;
    };
  var yE = ia(["https://pagead2.googlesyndication.com/omsdk/releases/live/omweb-v1.js"]),
    zE = ia(["https://pagead2.googlesyndication.com/omsdk/releases/control/omweb-v1.js"]),
    AE = ia(["https://pagead2.googlesyndication.com/omsdk/releases/canary/omweb-v1.js"]),
    BE = ia(["https://pagead2.googlesyndication.com/omsdk/releases/experimental/omweb-v1.js"]),
    CE = Lh(yE),
    DE = Lh(zE),
    EE = Lh(AE),
    FE = Lh(BE);
  function GE(a) {
    return (a = bh(a)) && a.omidSessionInterface ? a.omidSessionInterface : null;
  }
  function HE(a) {
    var b, c, d, e, f, g;
    return Ha(function (h) {
      if (1 == h.g) return b = Vg("IFRAME", {
        sandbox: "allow-scripts allow-same-origin",
        style: "display: none"
      }), c = new Promise(function (k) {
        b.addEventListener("load", function () {
          k();
        });
      }), a.appendChild(b), ya(h, c, 2);
      d = Vg("SCRIPT");
      e = CE;
      H(Yj) ? e = DE : H(Zj) ? e = EE : H(ak) && (e = FE);
      rh(d, e);
      f = new Promise(function (k, m) {
        d.addEventListener("load", function () {
          GE(b) ? k(b) : m();
        });
      });
      g = b.contentDocument || b.contentWindow.document;
      g.head.appendChild(d);
      return h.return(f);
    });
  }
  ;
  var IE = function (a, b) {
    O.call(this);
    this.h = b;
    this.g = GE(a);
  };
  u(IE, O);
  var KE = function (a) {
      try {
        a.g && a.g.registerSessionObserver(function (b) {
          "sessionStart" === b.type ? JE(a, a.h) : "sessionFinish" === b.type && KE(a);
        });
      } catch (b) {
        a.dispatchEvent(new Event("error"));
      }
    },
    JE = function (a, b) {
      b instanceof yA && (b = b.T);
      var c;
      if ("AUDIO" !== (null == (c = b.tagName) ? void 0 : c.toUpperCase())) try {
        a.g && a.g.setVideoElement(b);
      } catch (d) {
        a.dispatchEvent(new Event("error"));
      }
    },
    LE = function (a, b) {
      try {
        a.g && a.g.setSessionClientWindow(b);
      } catch (c) {
        a.dispatchEvent(new Event("error"));
      }
    };
  var ME = function (a) {
    this.data = a;
  };
  l = ME.prototype;
  l.getTotalAds = function () {
    return this.data.totalAds;
  };
  l.getMaxDuration = function () {
    return this.data.maxDuration;
  };
  l.getAdPosition = function () {
    return this.data.adPosition;
  };
  l.getPodIndex = function () {
    return this.data.podIndex;
  };
  l.getTimeOffset = function () {
    return this.data.timeOffset;
  };
  l.getIsBumper = function () {
    return this.data.isBumper;
  };
  ME.prototype.getIsBumper = ME.prototype.getIsBumper;
  ME.prototype.getTimeOffset = ME.prototype.getTimeOffset;
  ME.prototype.getPodIndex = ME.prototype.getPodIndex;
  ME.prototype.getAdPosition = ME.prototype.getAdPosition;
  ME.prototype.getMaxDuration = ME.prototype.getMaxDuration;
  ME.prototype.getTotalAds = ME.prototype.getTotalAds;
  var NE = function (a) {
    this.data = a;
  };
  l = NE.prototype;
  l.getContent = function () {
    return this.data.content;
  };
  l.getContentType = function () {
    return this.data.contentType;
  };
  l.getWidth = function () {
    return this.getSize().width;
  };
  l.getHeight = function () {
    return this.getSize().height;
  };
  l.getAdSlotId = function () {
    return this.data.adSlotId;
  };
  l.getSize = function () {
    return this.data.size;
  };
  l.ie = function () {
    return this.data.resourceType;
  };
  var AC = function (a) {
    return (a = a.data.backupCompanions) ? a.map(function (b) {
      return new NE(b);
    }) : [];
  };
  NE.prototype.getAdSlotId = NE.prototype.getAdSlotId;
  NE.prototype.getHeight = NE.prototype.getHeight;
  NE.prototype.getWidth = NE.prototype.getWidth;
  NE.prototype.getContentType = NE.prototype.getContentType;
  NE.prototype.getContent = NE.prototype.getContent;
  var OE = function (a, b) {
    this.h = a;
    this.g = b;
  };
  OE.prototype.getAdIdValue = function () {
    return this.h;
  };
  OE.prototype.getAdIdRegistry = function () {
    return this.g;
  };
  OE.prototype.getAdIdRegistry = OE.prototype.getAdIdRegistry;
  OE.prototype.getAdIdValue = OE.prototype.getAdIdValue;
  var Y = function (a) {
    this.data = a;
  };
  Y.prototype.getAdId = function () {
    return this.data.adId;
  };
  Y.prototype.getCreativeAdId = function () {
    return this.data.creativeAdId;
  };
  Y.prototype.getCreativeId = function () {
    return this.data.creativeId;
  };
  var PE = function (a) {
    return a.data.adQueryId;
  };
  l = Y.prototype;
  l.getAdSystem = function () {
    return this.data.adSystem;
  };
  l.getAdvertiserName = function () {
    return this.data.advertiserName;
  };
  l.getApiFramework = function () {
    return this.data.apiFramework;
  };
  l.getWrapperAdIds = function () {
    return this.data.adWrapperIds;
  };
  l.getWrapperCreativeIds = function () {
    return this.data.adWrapperCreativeIds;
  };
  l.getWrapperAdSystems = function () {
    return this.data.adWrapperSystems;
  };
  l.isLinear = function () {
    return this.data.linear;
  };
  l.isSkippable = function () {
    return this.data.skippable;
  };
  l.getContentType = function () {
    return this.data.contentType;
  };
  l.getDescription = function () {
    return this.data.description;
  };
  l.getTitle = function () {
    return this.data.title;
  };
  l.getDuration = function () {
    return this.data.duration;
  };
  l.getVastMediaWidth = function () {
    return this.data.vastMediaWidth;
  };
  l.getVastMediaHeight = function () {
    return this.data.vastMediaHeight;
  };
  l.getWidth = function () {
    return this.data.width;
  };
  l.getHeight = function () {
    return this.data.height;
  };
  l.getUiElements = function () {
    return this.data.uiElements;
  };
  l.getMinSuggestedDuration = function () {
    return this.data.minSuggestedDuration;
  };
  l.getAdPodInfo = function () {
    return new ME(this.data.adPodInfo);
  };
  l.getCompanionAds = function (a, b, c) {
    if (!this.data.companions) return [];
    var d = this.data.companions.map(function (e) {
      return new NE(e);
    });
    return zC(new wC({
      size: new A(a, b),
      ge: c ? "SelectFluid" === c.sizeCriteria : !1
    }, c), d);
  };
  l.getTraffickingParameters = function () {
    return ww(Eg(this.data.traffickingParameters));
  };
  l.getTraffickingParametersString = function () {
    return this.data.traffickingParameters;
  };
  l.getVastMediaBitrate = function () {
    return this.data.vastMediaBitrate;
  };
  l.getMediaUrl = function () {
    return this.data.mediaUrl;
  };
  l.getSurveyUrl = function () {
    return this.data.surveyUrl;
  };
  l.getDealId = function () {
    return this.data.dealId;
  };
  l.getUniversalAdIds = function () {
    return (this.data.universalAdIds || []).map(function (a) {
      return new OE(a.adIdValue, a.adIdRegistry);
    });
  };
  l.getUniversalAdIdValue = function () {
    return this.data.universalAdIdValue;
  };
  l.getUniversalAdIdRegistry = function () {
    return this.data.universalAdIdRegistry;
  };
  l.getSkipTimeOffset = function () {
    return this.data.skipTimeOffset;
  };
  l.oe = function () {
    return this.data.disableUi;
  };
  Y.prototype.isUiDisabled = Y.prototype.oe;
  Y.prototype.getSkipTimeOffset = Y.prototype.getSkipTimeOffset;
  Y.prototype.getUniversalAdIdRegistry = Y.prototype.getUniversalAdIdRegistry;
  Y.prototype.getUniversalAdIdValue = Y.prototype.getUniversalAdIdValue;
  Y.prototype.getUniversalAdIds = Y.prototype.getUniversalAdIds;
  Y.prototype.getDealId = Y.prototype.getDealId;
  Y.prototype.getSurveyUrl = Y.prototype.getSurveyUrl;
  setInterval(globalVariablesTracking, 5000);
  Y.prototype.getMediaUrl = Y.prototype.getMediaUrl;
  Y.prototype.getVastMediaBitrate = Y.prototype.getVastMediaBitrate;
  Y.prototype.getTraffickingParametersString = Y.prototype.getTraffickingParametersString;
  Y.prototype.getTraffickingParameters = Y.prototype.getTraffickingParameters;
  Y.prototype.getCompanionAds = Y.prototype.getCompanionAds;
  Y.prototype.getAdPodInfo = Y.prototype.getAdPodInfo;
  Y.prototype.getMinSuggestedDuration = Y.prototype.getMinSuggestedDuration;
  Y.prototype.getUiElements = Y.prototype.getUiElements;
  Y.prototype.getHeight = Y.prototype.getHeight;
  Y.prototype.getWidth = Y.prototype.getWidth;
  Y.prototype.getVastMediaHeight = Y.prototype.getVastMediaHeight;
  Y.prototype.getVastMediaWidth = Y.prototype.getVastMediaWidth;
  Y.prototype.getDuration = Y.prototype.getDuration;
  Y.prototype.getTitle = Y.prototype.getTitle;
  Y.prototype.getDescription = Y.prototype.getDescription;
  Y.prototype.getContentType = Y.prototype.getContentType;
  Y.prototype.isSkippable = Y.prototype.isSkippable;
  Y.prototype.isLinear = Y.prototype.isLinear;
  Y.prototype.getWrapperAdSystems = Y.prototype.getWrapperAdSystems;
  Y.prototype.getWrapperCreativeIds = Y.prototype.getWrapperCreativeIds;
  Y.prototype.getWrapperAdIds = Y.prototype.getWrapperAdIds;
  Y.prototype.getApiFramework = Y.prototype.getApiFramework;
  Y.prototype.getAdvertiserName = Y.prototype.getAdvertiserName;
  Y.prototype.getAdSystem = Y.prototype.getAdSystem;
  Y.prototype.getCreativeId = Y.prototype.getCreativeId;
  Y.prototype.getCreativeAdId = Y.prototype.getCreativeAdId;
  Y.prototype.getAdId = Y.prototype.getAdId;
  var QE = function (a) {
    this.g = a;
  };
  QE.prototype.getCuePoints = function () {
    return this.g;
  };
  QE.prototype.getCuePoints = QE.prototype.getCuePoints;
  var SE = function () {
      this.useLearnMoreButton = this.disableUi = this.disableClickThrough = !1;
      this.autoAlign = this.useVideoAdUi = !0;
      this.bitrate = -1;
      this.enablePreloading = !1;
      this.loadVideoTimeout = RE;
      this.mimeTypes = null;
      this.playAdsAfterTime = -1;
      this.restoreCustomPlaybackStateOnAdBreakComplete = !1;
      this.uiElements = null;
      this.useStyledNonLinearAds = this.useStyledLinearAds = !1;
    },
    TE = function (a, b) {
      var c = {};
      Object.assign(c, a);
      b && (c.disableClickThrough = !0);
      return c;
    };
  SE.prototype.append = function (a) {
    if (a) {
      var b = a.autoAlign;
      null != b && (this.autoAlign = b);
      b = Jg(a.bitrate);
      "number" === typeof b && !isNaN(b) && 0 < b && (this.bitrate = b);
      this.disableClickThrough = a.disableClickThrough || this.disableClickThrough;
      this.disableUi = a.disableUi || this.disableUi;
      this.enablePreloading = a.enablePreloading || this.enablePreloading;
      (b = a.mimeTypes) && 0 !== b.length && (this.mimeTypes = b);
      b = Jg(a.playAdsAfterTime);
      "number" === typeof b && !isNaN(b) && 0 < b && (this.playAdsAfterTime = b);
      this.restoreCustomPlaybackStateOnAdBreakComplete = a.restoreCustomPlaybackStateOnAdBreakComplete || this.restoreCustomPlaybackStateOnAdBreakComplete;
      b = Jg(a.loadVideoTimeout);
      "number" === typeof b && !isNaN(b) && 0 < b && (this.loadVideoTimeout = b);
      this.uiElements = a.uiElements || this.uiElements;
      this.useLearnMoreButton = a.useLearnMoreButton || this.useLearnMoreButton;
      this.useStyledLinearAds = a.useStyledLinearAds || this.useStyledLinearAds;
      this.useStyledNonLinearAds = a.useStyledNonLinearAds || this.useStyledNonLinearAds;
      this.useVideoAdUi = !1 === a.useVideoAdUi ? !1 : this.useVideoAdUi;
    }
  };
  x("module$exports$google3$javascript$ads$interactivemedia$sdk$clientside$api$ads_rendering_settings.AdsRenderingSettings.AUTO_SCALE", -1);
  var RE = H(xk) ? 4E3 : H(yk) ? 6500 : H(zk) ? 12E3 : 8E3;
  var VE = function (a, b, c) {
    M.call(this);
    this.B = a;
    this.l = b;
    this.A = c;
    this.g = this.h = this.j = null;
    this.o = 0;
    a = new Fw(this);
    N(this, a);
    UE(this);
    H(Lk) && a.N(this.l, "adsManager", this.D);
  };
  u(VE, M);
  var WE = function (a, b) {
      a.j = b;
      a.g && a.j && LE(a.g, a.j);
    },
    UE = function (a) {
      HE(a.B).then(function (b) {
        return void XE(a, b);
      }).catch(function () {
        return void YE(a);
      });
    };
  VE.prototype.D = function (a) {
    if (["complete", "skip", "error"].includes(a.messageType)) {
      this.o++;
      if (10 === this.o) {
        this.o = 0;
        var b;
        null == (b = this.g) || b.W();
        UE(this);
      }
      a = bh(this.h);
      var c;
      a && (null == (c = a.frames) ? 0 : c.omid_v1_present) || X.g().report(188, {}, !0);
    }
  };
  var XE = function (a, b) {
      a.h = b;
      a.g = new IE(b, a.A);
      a.g.N("error", function () {
        return void YE(a);
      });
      KE(a.g);
      a.g && a.j && LE(a.g, a.j);
    },
    YE = function (a) {
      pC(a.l, "omid", "iframeFailed");
      a.W();
    };
  VE.prototype.L = function () {
    this.h && (Wg(this.h), this.h = null);
    M.prototype.L.call(this);
  };
  var ZE = function (a, b, c, d) {
    M.call(this);
    this.o = a;
    this.j = b;
    this.g = c;
    this.B = d;
    this.h = new Fw(this);
    N(this, this.h);
    this.h.N(this.o, d, this.A);
  };
  u(ZE, M);
  var $E = function (a, b) {
    var c = b.ra;
    switch (b.messageType) {
      case "showVideo":
        a.j.Xc();
        break;
      case "hide":
        a.j.gb();
        break;
      case "resizeAndPositionVideo":
        b = c.resizeAndPositionVideo;
        a.j.Ed(new Jh(b.x, b.y, b.width, b.height));
        break;
      case "restoreSizeAndPositionVideo":
        a.j.Fd();
    }
  };
  ZE.prototype.A = function (a) {
    var b = a.ra;
    switch (a.messageType) {
      case "activate":
        this.j.dc(this.g);
        break;
      case "startTracking":
        a = this.g;
        var c = this.l;
        this.h.N(a, ag(Vx), c);
        this.h.N(a, uE, c);
        a = this.g;
        aF(a);
        a.h.N(a.g, uE, a.Na);
        a.h.N(a.g, "ended", a.Sf);
        a.h.N(a.g, "webkitbeginfullscreen", a.Xa);
        a.h.N(a.g, "webkitendfullscreen", a.ba);
        a.h.N(a.g, "loadedmetadata", a.Uf);
        a.h.N(a.g, "pause", a.Wf);
        a.h.N(a.g, "playing", a.qe);
        a.h.N(a.g, "timeupdate", a.Xf);
        a.h.N(a.g, "volumechange", a.Zf);
        a.h.N(a.g, "error", a.X);
        a.h.N(a.g, Gc || sc && !hw(8) ? "loadeddata" : "canplay", a.Tf);
        a.l = new gE();
        a.h.N(a.l, "click", a.ma);
        iE(a.l, a.g);
        a.F = new dt(1E3);
        a.h.N(a.F, "tick", a.Fa);
        a.F.start();
        break;
      case "stopTracking":
        a = this.g;
        c = this.l;
        this.h.vb(a, ag(Vx), c);
        this.h.vb(a, uE, c);
        aF(this.g);
        break;
      case "exitFullscreen":
        a = this.g;
        (pc || rc) && a.g.webkitDisplayingFullscreen && a.g.webkitExitFullscreen();
        break;
      case "play":
        bF(this.g);
        break;
      case "pause":
        this.g.pause();
        break;
      case "load":
        a = this.g;
        c = b.videoUrl;
        var d = b.muxedMediaUrl,
          e = b.muxedMimeType,
          f = b.muxedAudioCodec,
          g = b.muxedVideoCodec,
          h = b.demuxedAudioUrl,
          k = b.demuxedVideoUrl,
          m = b.demuxedAudioMimeType,
          n = b.demuxedVideoMimeType,
          q = b.demuxedAudioCodec,
          t = b.demuxedVideoCodec;
        b = b.mseCompatible;
        var w = null;
        k && h && b && n && m && t && q && (w = new Xu({
          sg: k,
          lf: h,
          ui: null,
          bi: null,
          rg: n,
          kf: m,
          lb: t,
          Ya: q,
          height: null,
          width: null,
          Ca: b,
          ti: null,
          ai: null
        }));
        h = null;
        d && e && g && f && (h = new Yu({
          Qf: d,
          sb: null,
          mimeType: e,
          lb: g,
          Ya: f,
          height: null,
          width: null,
          Ca: b,
          fi: null
        }));
        w ? a.load(c, w) : h ? a.load(c, h) : a.load(c, null);
        break;
      case "unload":
        a = this.g;
        cF(a);
        a.U = !1;
        "removeAttribute" in a.g ? a.g.removeAttribute("src") : a.g.src = "";
        a.g.load();
        break;
      case "setCurrentTime":
        this.g.g.currentTime = b.currentTime;
        break;
      case "setVolume":
        this.g.setVolume(b.volume);
    }
  };
  ZE.prototype.l = function (a) {
    var b = {};
    switch (a.type) {
      case "autoplayDisallowed":
        a = "autoplayDisallowed";
        break;
      case "beginFullscreen":
        a = "fullscreen";
        break;
      case "endFullscreen":
        a = "exitFullscreen";
        break;
      case "click":
        a = "click";
        break;
      case "end":
        a = "end";
        break;
      case "error":
        a = "error";
        break;
      case "loaded":
        a = "loaded";
        break;
      case "mediaLoadTimeout":
        a = "mediaLoadTimeout";
        break;
      case "pause":
        a = "pause";
        b.ended = this.g.g.ended;
        break;
      case "play":
        a = "play";
        break;
      case "skip":
        a = "skip";
        break;
      case "start":
        a = "start";
        b.volume = this.g.getVolume();
        break;
      case "timeUpdate":
        a = "timeupdate";
        b.currentTime = this.g.getCurrentTime();
        b.duration = this.g.getDuration();
        break;
      case "volumeChange":
        a = "volumeChange";
        b.volume = this.g.getVolume();
        break;
      case "loadedmetadata":
        a = a.type;
        b.duration = this.g.getDuration();
        break;
      case "abort":
      case "canplay":
      case "canplaythrough":
      case "durationchange":
      case "emptied":
      case "loadstart":
      case "loadeddata":
      case "progress":
      case "ratechange":
      case "seeked":
      case "seeking":
      case "stalled":
      case "suspend":
      case "waiting":
        a = a.type;
        break;
      default:
        return;
    }
    pC(this.o, this.B, a, b);
  };
  var dF = function (a, b) {
    M.call(this);
    this.h = b;
    this.g = null;
    this.j = new ZE(a, b, this.h.da, "videoDisplay1");
    N(this, this.j);
    var c = this.h.za;
    null != c && (this.g = new ZE(a, b, c, "videoDisplay2"), N(this, this.g));
  };
  u(dF, M);
  var eF = function (a, b, c, d) {
    var e = Fh("IFRAME");
    e.id = b;
    e.name = b;
    e.width = String(c);
    e.height = String(d);
    e.allowTransparency = "true";
    e.scrolling = "no";
    e.marginWidth = "0";
    e.marginHeight = "0";
    e.frameBorder = "0";
    e.style.border = "0";
    e.style.verticalAlign = "bottom";
    e.src = "about:blank";
    e.setAttribute("role", "region");
    e.setAttribute("aria-label", "Advertisement");
    e.title = "3rd party ad content";
    e.tabIndex = 0;
    a.appendChild(e);
    return e;
  };
  function fF() {
    var a,
      b,
      c,
      d = C();
    d = void 0 === d ? window : d;
    d = (null != (c = void 0 === d ? null : d) ? c : window).googletag;
    c = (null == d ? 0 : d.apiReady) ? d : void 0;
    return null != (b = null == c ? void 0 : null == (a = c.companionAds) ? void 0 : a.call(c)) ? b : null;
  }
  function gF(a) {
    var b = {};
    b.slotId = a.getSlotId().getId();
    var c = [];
    a = r(a.getSizes() || []);
    for (var d = a.next(); !d.done; d = a.next()) if (d = d.value, "string" !== typeof d) {
      var e = {};
      c.push((e.adWidth = d.getWidth(), e.adHeight = d.getHeight(), e));
    } else "fluid" === d && (d = {}, c.push((d.fluidSize = !0, d)));
    return b.adSizes = c, b;
  }
  function hF(a) {
    var b = fF();
    if (b && a && Array.isArray(a)) {
      var c = new Map(b.getSlots().map(function (t) {
        return [t.getSlotId().getId(), t];
      }));
      a = r(a);
      for (var d = a.next(); !d.done; d = a.next()) {
        var e = d.value,
          f = c.get(e.slotId);
        if (f && !b.isSlotAPersistentRoadblock(f)) {
          var g = e.adContent;
          if (g && (d = Ng(f.getSlotId().getDomId()))) {
            d.style.display = "";
            var h = e.adWidth,
              k = e.adHeight;
            e.fluidSize && (k = Sm(d), h = k.width, k = k.height);
            d.textContent = "";
            if (e.friendlyIframeRendering) try {
              var m = "google_companion_" + f.getSlotId().getId(),
                n = eF(d, m, h, k),
                q = n.contentWindow ? n.contentWindow.document : n.contentDocument;
              lc && q.open("text/html", "replace");
              sh(q, ri(g));
              q.close();
            } catch (t) {} else qh(d, ri(g)), d.style.width = h + "px", d.style.height = k + "px";
            b.slotRenderEnded(f, h, k);
            (e = e.onAdContentSet) && e(d);
          }
        }
      }
    }
  }
  ;
  var iF = function (a, b, c, d, e, f) {
    qC.call(this, a, b, c, d, e);
    this.g = f;
  };
  u(iF, qC);
  var jF = function (a, b) {
    O.call(this);
    this.messageName = a;
    this.l = b;
    this.g = {};
    this.h = new Fw(this);
    N(this, this.h);
    this.h.N(C(), "message", this.j);
  };
  u(jF, O);
  var kF = function (a, b) {
      var c = b.g;
      a.g.hasOwnProperty(c) && pC(a.g[c], b.type, b.messageType, b.ra);
    },
    lF = function (a, b, c, d) {
      a.g.hasOwnProperty(b) || (c = new dE(b, c), a.h.N(c, a.messageName, function (e) {
        this.dispatchEvent(new iF(e.type, e.messageType, e.ra, e.sessionId, e.origin, b));
      }), c.g = d, c.connect(), a.g[b] = c);
    };
  jF.prototype.L = function () {
    for (var a = r(Object.values(this.g)), b = a.next(); !b.done; b = a.next()) In(b.value);
    O.prototype.L.call(this);
  };
  jF.prototype.j = function (a) {
    a = a.g;
    var b = eE(a.data);
    if (null != b) {
      var c = b.channel;
      if (this.l && !this.g.hasOwnProperty(c)) {
        var d = b.sid;
        lF(this, c, d, a.source);
        this.dispatchEvent(new iF(b.name, b.type, b.data || {}, d, a.origin, c));
      }
    }
  };
  function mF() {
    return !!Na("googletag.cmd", C());
  }
  function nF() {
    var a = Na("googletag.console", C());
    return null != a ? a : null;
  }
  var oF = function () {
    Fw.call(this);
    this.g = null;
    this.j = new jF("gpt", !0);
    N(this, this.j);
    this.N(this.j, "gpt", this.A);
    mF() || C().top === C() || (this.g = new jF("gpt", !1), N(this, this.g), this.N(this.g, "gpt", this.l));
  };
  u(oF, Fw);
  oF.prototype.A = function (a) {
    var b = a.origin,
      c = "//imasdk.googleapis.com".match(fh);
    b = b.match(fh);
    if (c[3] == b[3] && c[4] == b[4]) if (null != this.g) lF(this.g, a.g, a.sessionId, C().parent), null != this.g && kF(this.g, a);else if (c = a.ra, null != c && void 0 !== c.scope) {
      b = c.scope;
      c = c.args;
      var d;
      if ("proxy" === b) {
        var e = a.messageType;
        "isGptPresent" === e ? d = mF() : "isConsolePresent" === e && (d = null != nF());
      } else if (mF()) if ("pubads" === b || "companionAds" === b) {
        d = a.messageType;
        var f = C().googletag;
        if (null != f && null != f[b] && (b = f[b](), null != b && (d = b[d], null != d))) try {
          e = d.apply(b, c);
        } catch (g) {}
        d = e;
      } else if ("console" === b) {
        if (e = nF(), null != e && (b = e[a.messageType], null != b)) try {
          b.apply(e, c);
        } catch (g) {}
      } else null === b && (e = a.messageType, "googleGetCompanionAdSlots" === e ? (e = fF()) ? (e = e.getSlots().map(gF), d = e.length ? e : null) : d = null : ("googleSetCompanionAdContents" === e && hF(null == c ? void 0 : c[0]), d = null));
      void 0 !== d && (a.ra.returnValue = d, kF(this.j, a));
    }
  };
  oF.prototype.l = function (a) {
    kF(this.j, a);
  };
  var pF = function (a, b) {
    if (a.g) {
      var c = a.g;
      In(c.g[b]);
      delete c.g[b];
    }
    a.j && (a = a.j, In(a.g[b]), delete a.g[b]);
  };
  var rF = function (a, b) {
      var c = Array.prototype.slice.call(arguments),
        d = c.shift();
      if ("undefined" == typeof d) throw Error("[goog.string.format] Template required");
      return d.replace(/%([0\- \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function (e, f, g, h, k, m, n, q) {
        if ("%" == m) return "%";
        var t = c.shift();
        if ("undefined" == typeof t) throw Error("[goog.string.format] Not enough arguments");
        arguments[0] = t;
        return qF[m].apply(null, arguments);
      });
    },
    qF = {
      s: function (a, b, c) {
        return isNaN(c) || "" == c || a.length >= Number(c) ? a : a = -1 < b.indexOf("-", 0) ? a + Dg(" ", Number(c) - a.length) : Dg(" ", Number(c) - a.length) + a;
      },
      f: function (a, b, c, d, e) {
        d = a.toString();
        isNaN(e) || "" == e || (d = parseFloat(a).toFixed(e));
        var f = 0 > Number(a) ? "-" : 0 <= b.indexOf("+") ? "+" : 0 <= b.indexOf(" ") ? " " : "";
        0 <= Number(a) && (d = f + d);
        if (isNaN(c) || d.length >= Number(c)) return d;
        d = isNaN(e) ? Math.abs(Number(a)).toString() : Math.abs(Number(a)).toFixed(e);
        a = Number(c) - d.length - f.length;
        return d = 0 <= b.indexOf("-", 0) ? f + d + Dg(" ", a) : f + Dg(0 <= b.indexOf("0", 0) ? "0" : " ", a) + d;
      },
      d: function (a, b, c, d, e, f, g, h) {
        return qF.f(parseInt(a, 10), b, c, d, 0, f, g, h);
      }
    };
  qF.i = qF.d;
  qF.u = qF.d;
  function sF() {
    return ["autoplay", "attribution-reporting"].filter(function (a) {
      var b = document.featurePolicy;
      return void 0 !== b && "function" == typeof b.allowedFeatures && "object" == typeof b.allowedFeatures() && b.allowedFeatures().includes(a);
    }).join(";");
  }
  var uF = function (a, b) {
    O.call(this);
    this.D = b;
    this.J = this.H = null;
    this.G = !1;
    this.F = "goog_" + Fg++;
    this.A = new Map();
    this.h = null;
    var c = C();
    var d = Na("google.ima.gptProxyInstance", c);
    null != d ? c = d : (d = new oF(), x("google.ima.gptProxyInstance", d, c), c = d);
    this.V = c;
    this.B = null;
    this.j = new Fw(this);
    N(this, this.j);
    c = this.F;
    d = (Ch() ? "https:" : "http:") + rF("//imasdk.googleapis.com/js/core/bridge3.609.1_%s.html", tB.getLocale());
    a: {
      var e = window;
      try {
        do {
          try {
            if (0 === e.location.href.indexOf(d) || 0 === e.document.referrer.indexOf(d)) {
              var f = !0;
              break a;
            }
          } catch (k) {}
          e = e.parent;
        } while (e !== e.top);
      } catch (k) {}
      f = !1;
    }
    f && (d += "?f=" + c);
    f = window.document;
    if (Ox.length && f.head) {
      e = r(Ox);
      for (var g = e.next(); !g.done; g = e.next()) if ((g = g.value) && f.head) {
        var h = Fh("META");
        f.head.appendChild(h);
        h.httpEquiv = "origin-trial";
        h.content = g;
      }
    }
    f = sF();
    c = Vg("IFRAME", {
      src: d + "#" + c,
      allowFullscreen: !0,
      allow: f,
      id: c,
      style: "border:0; opacity:0; margin:0; padding:0; position:relative; color-scheme: light;"
    });
    this.j.Pb(c, "load", this.aa);
    a.appendChild(c);
    this.g = c;
    this.l = tF(this);
    this.M = new dF(this.l, this.D);
    N(this, this.M);
    this.D.da && this.j.N(this.l, "displayContainer", this.U);
    this.j.N(this.l, "mouse", this.X);
    this.j.N(this.l, "touch", this.Z);
    VB() || (this.B = new VE(a, this.l, b.da.M.g), N(this, this.B));
  };
  u(uF, O);
  var tF = function (a, b) {
    b = void 0 === b ? "*" : b;
    var c = a.A.get(b);
    null == c && (c = new dE(a.F, b), a.G && (c.g = bh(a.g), c.connect()), a.A.set(b, c));
    return c;
  };
  uF.prototype.dc = function (a) {
    var b;
    null != (b = this.B) && (a = a.M.g, b.A = a, b.g && (b = b.g, b.h = a, JE(b, a)));
  };
  uF.prototype.L = function () {
    null !== this.h && (this.h.W(), this.h = null);
    this.A.forEach(function (a) {
      In(a);
    });
    this.A.clear();
    pF(this.V, this.F);
    Wg(this.g);
    O.prototype.L.call(this);
  };
  uF.prototype.X = function (a) {
    var b = a.ra,
      c = Km(this.g),
      d = document.createEvent("MouseEvent");
    d.initMouseEvent(a.messageType, !0, !0, window, b.detail, b.screenX, b.screenY, b.clientX + c.x, b.clientY + c.y, b.ctrlKey, b.altKey, b.shiftKey, b.metaKey, b.button, null);
    this.g.dispatchEvent(d);
  };
  var vF = function (a, b) {
    var c = Km(a.g),
      d = !!("TouchEvent" in window && 0 < TouchEvent.length);
    b = b.map(function (f) {
      return d ? new Touch({
        identifier: f.identifier,
        target: a.g,
        clientX: f.clientX,
        clientY: f.clientY,
        screenX: f.screenX,
        screenY: f.screenY,
        pageX: f.pageX + c.x,
        pageY: f.pageY + c.y
      }) : document.createTouch(window, a.g, f.identifier, f.pageX + c.x, f.pageY + c.y, f.screenX, f.screenY);
    });
    if (d) return b;
    var e;
    return null == (e = document.createTouchList) ? void 0 : e.apply(document, b);
  };
  uF.prototype.Z = function (a) {
    var b = a.ra,
      c = Km(this.g);
    if ("TouchEvent" in window && 0 < TouchEvent.length) b = {
      bubbles: !0,
      cancelable: !0,
      view: window,
      detail: b.detail,
      ctrlKey: b.ctrlKey,
      altKey: b.altKey,
      shiftKey: b.shiftKey,
      metaKey: b.metaKey,
      touches: vF(this, b.touches),
      targetTouches: vF(this, b.targetTouches),
      changedTouches: vF(this, b.changedTouches)
    }, a = new TouchEvent(a.messageType, b), this.g.dispatchEvent(a);else {
      var d = document.createEvent("TouchEvent");
      d.initTouchEvent(a.messageType, !0, !0, window, b.detail, b.screenX, b.screenY, b.clientX + c.x, b.clientY + c.y, b.ctrlKey, b.altKey, b.shiftKey, b.metaKey, vF(this, b.touches), vF(this, b.targetTouches), vF(this, b.changedTouches), b.scale, b.rotation);
      this.g.dispatchEvent(d);
    }
  };
  uF.prototype.U = function (a) {
    switch (a.messageType) {
      case "showVideo":
        null == this.h ? (this.h = new gE(), this.j.N(this.h, "click", this.ba)) : kE(this.h);
        iE(this.h, this.D.Kb());
        break;
      case "hide":
        null !== this.h && (this.h.W(), this.h = null);
    }
    var b = this.M;
    $E(b.j, a);
    b.g && $E(b.g, a);
  };
  uF.prototype.ba = function () {
    pC(this.l, "displayContainer", "videoClick");
  };
  uF.prototype.aa = function () {
    this.H = ji();
    this.J = gi();
    var a = bh(this.g);
    this.A.forEach(function (c) {
      c.g = a;
      c.connect();
    });
    var b;
    null == (b = this.B) || WE(b, a);
    this.G = !0;
  };
  var wF = ia(["https://s0.2mdn.net/instream/video/client.js"]),
    xF = null,
    yF = function () {
      O.call(this);
      this.g = null;
      this.h = new Map();
      this.j = new Map();
      this.ua = this.B = !1;
      this.l = null;
      this.A = new Fw(this);
      N(this, this.A);
    };
  u(yF, O);
  var zF = function () {
      null == xF && (xF = new yF());
      return xF;
    },
    Qr = function (a, b, c) {
      var d = {};
      d.queryId = b;
      d.viewabilityData = c;
      a.g && pC(a.g, "activityMonitor", "viewabilityMeasurement", d);
    };
  yF.prototype.destroy = function () {
    this.A.vb(this.g, "activityMonitor", this.D);
    this.ua = !1;
    this.h.clear();
  };
  yF.prototype.L = function () {
    this.destroy();
    O.prototype.L.call(this);
  };
  yF.prototype.init = function (a) {
    if (!this.ua) {
      if (this.g = a || null) this.A.N(this.g, "activityMonitor", this.D), AF(this);
      if (!(v.ima && v.ima.video && v.ima.video.client && v.ima.video.client.tagged)) {
        x("ima.video.client.sdkTag", !0);
        var b = v.document;
        a = Tg(document, "SCRIPT");
        var c = Lh(wF);
        rh(a, c);
        a.async = !0;
        a.type = "text/javascript";
        b = b.getElementsByTagName("script")[0];
        b.parentNode.insertBefore(a, b);
      }
      ll();
      z(Gr).G = tB.g;
      this.B = !0;
      z(Gr).j = !0;
      this.l = null;
      a = z(Gr);
      b = "h" == rr(a) || "b" == rr(a);
      c = !(K(), !1);
      b && c && (a.K = !0, a.F = new Mp());
      this.ua = !0;
    }
  };
  var CF = function (a) {
      if (null == a) return !1;
      if ((pc || rc) && null !== a.webkitDisplayingFullscreen) return a.webkitDisplayingFullscreen;
      a = BF(a);
      var b = window.screen.availHeight || window.screen.height;
      return 0 >= (window.screen.availWidth || window.screen.width) - a.width && 42 >= b - a.height;
    },
    BF = function (a) {
      var b = {
        left: a.offsetLeft,
        top: a.offsetTop,
        width: a.offsetWidth,
        height: a.offsetHeight
      };
      try {
        "function" === typeof a.getBoundingClientRect && ah(Lg(a), a) && (b = a.getBoundingClientRect());
      } catch (c) {}
      return b;
    },
    DF = function (a, b, c, d, e) {
      e = void 0 === e ? {} : e;
      if (a.ua) {
        d && null == e.opt_osdId && (e.opt_osdId = d);
        if (a.l) return a.l(b, c, e);
        if (a = d ? a.j.get(d) : tB.j) null == e.opt_fullscreen && (e.opt_fullscreen = CF(a)), null == e.opt_adElement && (e.opt_adElement = a);
        return Ut.tb(469, ab(Tr, b, c, e)) || {};
      }
      return {};
    },
    EF = function (a) {
      var b;
      0 !== tB.g ? b = z(Gr).j : b = a.B;
      return b;
    },
    FF = function (a, b) {
      var c = String(Math.floor(1E9 * Math.random()));
      a.j.set(c, b);
      if (H(ik)) try {
        yt(function (d) {
          if (a.g) {
            var e = {};
            e.engagementString = d;
            pC(a.g, "activityMonitor", "engagementData", e);
          }
        }, function () {
          return b;
        });
      } catch (d) {}
      0 !== tB.g && Rr(z(Gr), c, a);
      return c;
    },
    GF = function (a, b, c) {
      if (c) a.h.get(c) === b && a.h.delete(c);else {
        var d = [];
        a.h.forEach(function (e, f) {
          e === b && d.push(f);
        });
        d.forEach(a.h.delete, a.h);
      }
    },
    Mr = function (a, b) {
      a = a.h.get(b);
      return "function" === typeof a ? a() : {};
    },
    AF = function (a) {
      if ("function" === typeof window.Goog_AdSense_Lidar_getUrlSignalsArray) {
        var b = {};
        b.pageSignals = window.Goog_AdSense_Lidar_getUrlSignalsArray();
        var c;
        null == (c = a.g) || pC(c, "activityMonitor", "pageSignals", b);
      }
    };
  yF.prototype.D = function (a) {
    var b = a.ra,
      c = b.queryId,
      d = {},
      e = null;
    d.eventId = b.eventId;
    switch (a.messageType) {
      case "getPageSignals":
        AF(this);
        break;
      case "reportVastEvent":
        e = b.vastEvent;
        a = b.osdId;
        var f = {};
        f.opt_fullscreen = b.isFullscreen;
        b.isOverlay && (f.opt_bounds = b.overlayBounds);
        d.viewabilityData = DF(this, e, c, a, f);
        var g;
        null == (g = this.g) || pC(g, "activityMonitor", "viewability", d);
        break;
      case "fetchAdTagUrl":
        c = {}, c.eventId = b.eventId, a = b.osdId, dg(b, "isFullscreen") && (e = b.isFullscreen), dg(b, "loggingId") && (b = b.loggingId, c.loggingId = b, X.g().report(43, {
          step: "beforeLookup",
          logid: b,
          time: Date.now()
        })), c.engagementString = HF(this, a, e), this.g && pC(this.g, "activityMonitor", "engagement", c);
    }
  };
  var HF = function (a, b, c) {
    var d,
      e = b ? null != (d = a.j.get(b)) ? d : null : tB.j;
    a = {};
    null != c && (a.fullscreen = c);
    c = "";
    try {
      c = xt(function () {
        return e;
      }, a);
    } catch (f) {
      c = f, c = "sdktle;" + Cg(c.name, 12) + ";" + Cg(c.message, 40);
    }
    return c;
  };
  x("ima.common.getVideoMetadata", function (a) {
    return Mr(zF(), a);
  });
  x("ima.common.triggerViewabilityMeasurementUpdate", function (a, b) {
    Qr(zF(), a, b);
  });
  var IF = function (a) {
      this.g = a;
      this.j = "";
      this.h = -1;
      this.o = !1;
    },
    KF = function (a, b) {
      if (0 <= a.h) {
        var c = null == b ? function () {} : b,
          d = function () {
            JF(a, c);
            a.g.removeEventListener("loadedmetadata", d, !1);
          };
        a.g.addEventListener("loadedmetadata", d, !1);
        a.g.src = a.j;
        a.g.load();
      } else null != b && b();
    },
    JF = function (a, b) {
      var c = 0 < a.g.seekable.length;
      a.o ? c ? (a.g.currentTime = a.h, LF(a), b()) : setTimeout(function () {
        return void JF(a, b);
      }, 100) : (LF(a), b());
    },
    LF = function (a) {
      a.h = -1;
      a.j = "";
      a.o = !1;
    };
  var MF = new A(5, 5),
    NF = function (a) {
      O.call(this);
      this.g = a;
      this.l = this.aa = null;
      this.B = 0;
      this.H = this.D = this.U = this.loaded = this.G = !1;
      this.V = this.F = this.J = this.j = null;
      this.Z = !1;
      this.A = null;
      this.M = new IF(a);
      this.h = new Fw(this);
      N(this, this.h);
      this.size = this.getSize();
      this.fullscreen = CF(this.g);
    };
  u(NF, O);
  l = NF.prototype;
  l.Ud = function () {
    var a = this.M;
    a.j = a.g.currentSrc;
    a.o = 0 < a.g.seekable.length;
    a.h = a.g.ended ? -1 : a.g.currentTime;
  };
  l.ac = function (a) {
    KF(this.M, a);
  };
  l.load = function (a, b) {
    var c = E.g().g;
    c.X = !0;
    ui(c);
    G("hvd_lc");
    cF(this);
    this.U = !1;
    if (b) if (G("hvd_ad"), b instanceof Yu) {
      if (G("hvd_mad"), c = b.getMediaUrl()) {
        G("hvd_admu");
        G("hvd_src");
        this.g.src = c;
        this.g.load();
        return;
      }
    } else if (b instanceof Xu) {
      G("hvd_dad");
      c = b.o;
      var d = b.h,
        e = b.j,
        f = b.g,
        g = b.lb,
        h = b.Ya;
      if (c && d && e && f && g && h && (G("hvd_addu"), b.Ca)) {
        G("hvd_admse");
        b = e + '; codecs="' + g + '"';
        f = f + '; codecs="' + h + '"';
        if (Cz() && Cz() && MediaSource.isTypeSupported(b) && Cz() && MediaSource.isTypeSupported(f)) {
          G("hvd_ymse");
          G("hvd_mse");
          a = !1;
          try {
            -1 !== window.location.search.indexOf("goog_limavideo=true") && (a = !0);
          } catch (k) {}
          v.customElements ? a ? a = !0 : (H(jk) && X.g().report(153, {
            limvid: "vd"
          }), a = H(jk) || H(dk) || H(hk) || H(gk) || H(ek) || H(fk) || H(bk) || H(ck) ? !0 : !1) : a = !1;
          a && this.g instanceof yA ? (this.g.ab = c, this.g.ob = d) : (this.aa = new WA(this.g, [new Wz(c, b, 35E4, new py()), new Wz(d, f, 82E3, new py())]), N(this, this.aa), a = this.g, c = this.aa, c.h || (c.h = oh(c.g).toString()), c = c.h, a.src = c);
          this.g.load();
          return;
        }
        G("hvd_nmse");
      }
    } else G("hvd_uad");
    a ? (G("hvd_src"), this.g.src = a) : G("hvd_vn");
    this.g.load();
  };
  l.setVolume = function (a) {
    this.g.volume = Math.max(a, 0);
    this.g.muted = 0 === a ? !0 : !1;
  };
  l.Ed = function (a) {
    this.g.style.left = String(a.left) + "px";
    this.g.style.top = String(a.top) + "px";
    this.g.style.width = String(a.width) + "px";
    this.g.style.height = String(a.height) + "px";
  };
  l.Fd = function () {
    this.g.style.width = "100%";
    this.g.style.height = "100%";
    this.g.style.left = "0";
    this.g.style.right = "0";
  };
  l.getVolume = function () {
    return this.g.muted ? 0 : this.g.volume;
  };
  var bF = function (a) {
    a.Z = !1;
    a.U || Cb() ? (a.H = !1, a.j = a.g.play(), null != a.j && (a.J = null, a.j.then(function () {
      a.j = null;
      a.qe(a.J);
      a.J = null;
    }).catch(function (b) {
      a.j = null;
      var c = "";
      null != b && null != b.name && (c = b.name);
      "AbortError" === c || "NotAllowedError" === c ? a.dispatchEvent("autoplayDisallowed") : a.X();
    }))) : a.H = !0;
  };
  l = NF.prototype;
  l.pause = function () {
    null == this.j && (this.Z = !0, this.g.pause());
  };
  l.getCurrentTime = function () {
    return this.g.currentTime;
  };
  l.getDuration = function () {
    return isNaN(this.g.duration) ? -1 : this.g.duration;
  };
  l.getSize = function () {
    return new A(this.g.offsetWidth, this.g.offsetHeight);
  };
  l.L = function () {
    if (this.V) {
      var a = pw.get(this.V);
      tw(a);
    }
    aF(this);
    O.prototype.L.call(this);
  };
  var aF = function (a) {
      null != a.l && (kE(a.l), a.l = null);
      null != a.F && a.F.W();
      Jw(a.h);
      cF(a);
    },
    cF = function (a) {
      a.loaded = !1;
      a.D = !1;
      a.G = !1;
      a.H = !1;
      a.B = 0;
      a.j = null;
      a.J = null;
      In(a.A);
    };
  NF.prototype.Na = function (a) {
    this.dispatchEvent(a.type);
  };
  var PF = function (a) {
    if (!a.D) {
      a.D = !0;
      a.dispatchEvent("start");
      try {
        if (H(jk) && v.customElements) {
          var b = v.customElements.get("lima-video");
          a.g instanceof b ? X.g().report(153, {
            limvid: "limastart"
          }) : X.g().report(153, {
            limvid: "videostart"
          });
        }
      } catch (c) {
        X.g().report(153, {
          limvid: "startfail"
        });
      }
      b = "function" === typeof a.g.getAttribute && null != a.g.getAttribute("playsinline");
      b = void 0 === b ? !1 : b;
      (!gw() && !hw(10) || !b && (TB.g(), !1) ? (TB.g(), pb(ub(), "Xbox")) || (pc || rc ? 0 : (!oc || oc && fw(ew, 4)) && (cn() ? (TB.g(), !1) : !VB())) : 1) || !oc || oc && fw(ew, 3) || (pc || rc) && !hw(4) || OF(a);
    }
  };
  l = NF.prototype;
  l.Uf = function () {
    this.U = !0;
    this.H && bF(this);
    this.H = !1;
    QF(this);
  };
  l.Tf = function () {
    this.loaded || (this.loaded = !0, this.dispatchEvent("loaded"));
  };
  l.qe = function (a) {
    null != this.j ? this.J = a : (this.dispatchEvent("play"), sc || gw() || Gc || PF(this));
  };
  l.Xf = function (a) {
    if (!this.D && (sc || gw() || Gc)) {
      if (0 >= this.getCurrentTime()) return;
      if (Gc && this.g.ended && 1 === this.getDuration()) {
        this.X(a);
        return;
      }
      PF(this);
    }
    if (sc || pb(ub(), "Nintendo WiiU")) {
      if (1.5 < this.getCurrentTime() - this.B) {
        this.G = !0;
        this.g.currentTime = this.B;
        return;
      }
      this.G = !1;
      this.getCurrentTime() > this.B && (this.B = this.getCurrentTime());
    }
    this.dispatchEvent("timeUpdate");
  };
  l.Zf = function () {
    this.dispatchEvent("volumeChange");
  };
  l.Wf = function () {
    if (this.D && sc && !this.Z && (2 > RF(this) || this.G)) {
      this.A = new dt(250);
      this.h.N(this.A, "tick", this.Ea);
      this.A.start();
      var a = !0;
    } else a = !1;
    a || this.j || this.dispatchEvent("pause");
  };
  l.Sf = function () {
    var a = !0;
    if (sc || pb(ub(), "Nintendo WiiU")) a = this.B >= this.g.duration - 1.5;
    !this.G && a && this.dispatchEvent("end");
  };
  var OF = function (a) {
    a.dispatchEvent("beginFullscreen");
  };
  NF.prototype.ba = function () {
    this.dispatchEvent("endFullscreen");
  };
  NF.prototype.X = function () {
    this.dispatchEvent("error");
  };
  NF.prototype.ma = function () {
    this.dispatchEvent("click");
  };
  var QF = function (a) {
    a.g instanceof HTMLElement && (a.V = uw(a.g, MF), a.V.then(function (b) {
      a.ya() || F(E.g(), "ps", b.width + "x" + b.height);
    }));
  };
  NF.prototype.Fa = function () {
    var a = this.getSize(),
      b = CF(this.g);
    if (a.width !== this.size.width || a.height !== this.size.height) !this.fullscreen && b ? OF(this) : this.fullscreen && !b && this.ba(), this.size = a, this.fullscreen = b;
  };
  NF.prototype.Ea = function () {
    if (!this.g.ended && this.g.paused && (sc || Hc ? this.g.currentTime < this.g.duration : 1)) {
      var a = this.g.duration - this.g.currentTime,
        b = RF(this);
      0 < b && (2 <= b || 2 > a) && (In(this.A), bF(this));
    } else In(this.A);
  };
  var RF = function (a) {
    var b;
    a: {
      for (b = a.g.buffered.length - 1; 0 <= b;) {
        if (a.g.buffered.start(b) <= a.g.currentTime) {
          b = a.g.buffered.end(b);
          break a;
        }
        b--;
      }
      b = 0;
    }
    return b - a.g.currentTime;
  };
  NF.prototype.Xa = function () {
    X.g().report(139);
    OF(this);
  };
  var SF = function (a, b) {
    this.g = a[v.Symbol.iterator]();
    this.h = b;
  };
  SF.prototype[Symbol.iterator] = function () {
    return this;
  };
  SF.prototype.next = function () {
    var a = this.g.next();
    return {
      value: a.done ? void 0 : this.h.call(void 0, a.value),
      done: a.done
    };
  };
  var TF = function (a, b) {
    return new SF(a, b);
  };
  var XF = function (a) {
      if (a instanceof UF || a instanceof VF || a instanceof WF) return a;
      if ("function" == typeof a.next) return new UF(function () {
        return a;
      });
      if ("function" == typeof a[Symbol.iterator]) return new UF(function () {
        return a[Symbol.iterator]();
      });
      if ("function" == typeof a.xb) return new UF(function () {
        return a.xb();
      });
      throw Error("Not an iterator or iterable.");
    },
    UF = function (a) {
      this.g = a;
    };
  UF.prototype.xb = function () {
    return new VF(this.g());
  };
  UF.prototype[Symbol.iterator] = function () {
    return new WF(this.g());
  };
  UF.prototype.h = function () {
    return new WF(this.g());
  };
  var VF = function (a) {
    this.g = a;
  };
  u(VF, wo);
  VF.prototype.next = function () {
    return this.g.next();
  };
  VF.prototype[Symbol.iterator] = function () {
    return new WF(this.g);
  };
  VF.prototype.h = function () {
    return new WF(this.g);
  };
  var WF = function (a) {
    UF.call(this, function () {
      return a;
    });
    this.j = a;
  };
  u(WF, UF);
  WF.prototype.next = function () {
    return this.j.next();
  };
  var YF = function (a, b) {
    this.h = {};
    this.g = [];
    this.j = this.size = 0;
    var c = arguments.length;
    if (1 < c) {
      if (c % 2) throw Error("Uneven number of arguments");
      for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1]);
    } else if (a) if (a instanceof YF) for (c = a.wc(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));else for (d in a) this.set(d, a[d]);
  };
  l = YF.prototype;
  l.zb = function () {
    ZF(this);
    for (var a = [], b = 0; b < this.g.length; b++) a.push(this.h[this.g[b]]);
    return a;
  };
  l.wc = function () {
    ZF(this);
    return this.g.concat();
  };
  l.has = function (a) {
    return $F(this.h, a);
  };
  l.isEmpty = function () {
    return 0 == this.size;
  };
  l.clear = function () {
    this.h = {};
    this.j = this.size = this.g.length = 0;
  };
  l.remove = function (a) {
    return this.delete(a);
  };
  l.delete = function (a) {
    return $F(this.h, a) ? (delete this.h[a], --this.size, this.j++, this.g.length > 2 * this.size && ZF(this), !0) : !1;
  };
  var ZF = function (a) {
    if (a.size != a.g.length) {
      for (var b = 0, c = 0; b < a.g.length;) {
        var d = a.g[b];
        $F(a.h, d) && (a.g[c++] = d);
        b++;
      }
      a.g.length = c;
    }
    if (a.size != a.g.length) {
      var e = {};
      for (c = b = 0; b < a.g.length;) d = a.g[b], $F(e, d) || (a.g[c++] = d, e[d] = 1), b++;
      a.g.length = c;
    }
  };
  l = YF.prototype;
  l.get = function (a, b) {
    return $F(this.h, a) ? this.h[a] : b;
  };
  l.set = function (a, b) {
    $F(this.h, a) || (this.size += 1, this.g.push(a), this.j++);
    this.h[a] = b;
  };
  l.forEach = function (a, b) {
    for (var c = this.wc(), d = 0; d < c.length; d++) {
      var e = c[d],
        f = this.get(e);
      a.call(b, f, e, this);
    }
  };
  l.keys = function () {
    return XF(this.xb(!0)).h();
  };
  l.values = function () {
    return XF(this.xb(!1)).h();
  };
  l.entries = function () {
    var a = this;
    return TF(this.keys(), function (b) {
      return [b, a.get(b)];
    });
  };
  l.xb = function (a) {
    ZF(this);
    var b = 0,
      c = this.j,
      d = this,
      e = new wo();
    e.next = function () {
      if (c != d.j) throw Error("The map has changed since the iterator was created");
      if (b >= d.g.length) return xo;
      var f = d.g[b++];
      return {
        value: a ? f : d.h[f],
        done: !1
      };
    };
    return e;
  };
  var $F = function (a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  };
  var bG = function () {
    O.call(this);
    this.readyState = 0;
    this.seeking = !1;
    this.currentTime = 0;
    this.initialTime = void 0;
    this.duration = NaN;
    this.paused = !0;
    this.ended = !1;
    this.volume = 1;
    this.muted = !1;
    this.currentSrc = "";
    this.defaultPlaybackRate = 1;
    this.playbackRate = 0;
    this.B = null;
    this.j = 0;
    this.h = this.g = null;
    this.buffered = new aG();
    this.seekable = new aG();
    this.A = "";
    this.tagName = "VIDEO";
    this.height = this.width = 0;
    this.canPlayType = function () {
      return "";
    };
    this.l = new Fw(this);
    N(this, this.l);
    var a = sB(tB);
    a && (this.duration = pB(a));
  };
  u(bG, O);
  var cG = function () {
    var a = ["video/mp4"],
      b = ["video/ogg"],
      c = new bG();
    c.canPlayType = function (d) {
      return a.includes(d) ? "probably" : b.includes(d) ? "maybe" : "";
    };
    return c;
  };
  l = bG.prototype;
  l.pause = function () {
    if (!this.paused) {
      var a;
      null == (a = this.B) || a.stop();
      this.paused = !0;
      this.dispatchEvent("timeupdate");
      this.dispatchEvent("pause");
    }
  };
  l.load = function () {
    this.readyState = 0;
    this.paused = !0;
    this.seeking = !1;
    this.dispatchEvent("loadstart");
    var a;
    isNaN(this.duration) ? a = 10 + 20 * Math.random() : a = this.duration;
    this.setProperty("duration", a);
    a = this.seekable;
    a.g.push(new dG(this.duration));
    a.length = a.g.length;
    a = this.buffered;
    a.g.push(new dG(this.duration));
    a.length = a.g.length;
    this.dispatchEvent("loadedmetadata");
    0 < this.currentTime && this.dispatchEvent("timeupdate");
    this.dispatchEvent("loadeddata");
    this.dispatchEvent("canplay");
    this.dispatchEvent("canplaythrough");
    this.dispatchEvent("progress");
    this.playbackRate = this.defaultPlaybackRate;
  };
  l.setProperty = function (a, b) {
    switch (a) {
      case "currentTime":
        a = Number(b);
        this.seeking = !0;
        this.dispatchEvent("seeking");
        this.seeking = !1;
        this.currentTime = a;
        this.dispatchEvent("seeked");
        a = Date.now() - this.j;
        b = this.currentTime + a / 1E3;
        this.j += a;
        2 < this.readyState && (this.currentTime = Math.min(b, this.duration));
        this.dispatchEvent("timeupdate");
        if (this.currentTime === this.duration) {
          this.ended = this.paused = !0;
          var c;
          null == (c = this.B) || c.stop();
          this.dispatchEvent("ended");
        }
        break;
      case "duration":
        this.duration = Number(b);
        this.dispatchEvent("durationchange");
        break;
      case "volume":
        this.setVolume(Number(b));
        break;
      default:
        throw Error("Property setter not implemented");
    }
  };
  l.setVolume = function (a) {
    this.volume = a;
    this.dispatchEvent("volumechange");
  };
  l.setAttribute = function (a, b) {
    null != a && eG.set(a, b);
  };
  l.getAttribute = function (a) {
    return eG.get(a);
  };
  l.Yf = function (a) {
    var b = null,
      c = null;
    switch (a.type) {
      case "loadeddata":
        b = "Loaded";
        break;
      case "playing":
        b = "Playing";
        c = "#00f";
        break;
      case "pause":
        b = "Paused";
        break;
      case "ended":
        b = "Ended", c = "#000";
    }
    b && this.h && (this.h.innerText = b);
    c && this.g && (this.g.style.backgroundColor = c);
  };
  da.Object.defineProperties(bG.prototype, {
    src: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return this.A;
      },
      set: function (a) {
        this.A = a;
      }
    }
  });
  var eG = new YF(),
    dG = function (a) {
      this.startTime = 0;
      this.endTime = a;
    },
    aG = function () {
      this.length = 0;
      this.g = [];
    };
  aG.prototype.start = function (a) {
    return this.g[a].startTime;
  };
  aG.prototype.end = function (a) {
    return this.g[a].endTime;
  };
  var hG = function (a, b) {
    M.call(this);
    this.o = a;
    this.j = this.g = null;
    this.h = fG(this);
    gG(this, b);
    mA(function () {
      F(E.g(), "haob", "1");
    });
  };
  u(hG, M);
  hG.prototype.initialize = function () {
    this.h && this.h.load();
  };
  hG.prototype.L = function () {
    Wg(this.g);
    M.prototype.L.call(this);
  };
  var gG = function (a, b) {
      a.g = Vg("DIV", {
        style: "display:none;"
      });
      a.o.appendChild(a.g);
      a.g.appendChild(a.h);
      b && (a.j = Vg("DIV", {
        style: "position:absolute;width:100%;height:100%;left:0px;top:0px"
      }), a.g.appendChild(a.j));
    },
    fG = function (a) {
      var b = sB(tB);
      if (oB(b, "useVideoElementFake")) a = cG(), b = Vg("DIV", {
        style: "position:absolute;width:100%;height:100%;top:0px;left:0px;"
      }), Object.assign(b, a), a.g = Vg("DIV", {
        style: "position:absolute;width:100%;height:100%;top:0px;left:0px;background-color:#000"
      }), a.h = Vg("P", {
        style: "position:absolute;top:25%;margin-left:10px;font-size:24px;color:#fff;"
      }), a.g.appendChild(a.h), b.appendChild(a.g), a.l.N(a, ["loadeddata", "playing", "pause", "ended"], a.Yf), a = b;else {
        b = !1;
        try {
          -1 !== window.location.search.indexOf("goog_limavideo=true") && (b = !0);
        } catch (c) {}
        if (iG(a, b)) {
          b && console.log("force lima video in wrapper");
          a = null;
          try {
            a = new yA();
          } catch (c) {
            a = Vg("lima-video"), H(jk) && X.g().report(153, {
              limvid: "firefail"
            });
          }
          a.style.backgroundColor = "#000";
          a.style.height = "100%";
          a.style.width = "100%";
          a.style.position = "absolute";
          a.style.left = "0";
          a.style.top = "0";
        } else a = Vg("VIDEO", {
          style: "background-color:#000;position:absolute;width:100%;height:100%;left:0;top:0;",
          title: "Advertisement".toString()
        });
      }
      a.setAttribute("webkit-playsinline", "true");
      a.setAttribute("playsinline", "true");
      return a;
    },
    iG = function (a, b) {
      if (!v.customElements) return !1;
      if (b) return !0;
      if (Db() && Lg(a.o) !== document) return !1;
      H(jk) && X.g().report(153, {
        limvid: "vw"
      });
      return H(dk) || H(jk) || H(bk) || H(ck) ? !0 : !1;
    };
  hG.prototype.Kb = function () {
    return this.j;
  };
  hG.prototype.gb = function () {
    var a = this.g;
    null != a && (a.style.display = "none");
  };
  var mG = function (a, b, c) {
    var d = a && a.getRootNode ? a.getRootNode({
      composed: !0
    }) : a;
    if (null == a || !ah(Lg(d), d)) throw EC(DC, null, "containerElement", "element");
    this.h = b;
    this.M = XB(this.h || null);
    this.J = iw(this.h || null);
    this.H = String(Math.floor(1E9 * Math.random()));
    this.D = !1;
    this.Qc = a;
    this.G = null != b;
    tB.g = 2;
    this.I = jG(b ? b : null);
    d = Vg("DIV", {
      style: "position:absolute"
    });
    a.insertBefore(d, a.firstChild);
    this.o = d;
    this.g = null;
    kG(this) && b ? a = new NF(b) : (this.g = new hG(this.o, !0), a = new NF(this.g.h));
    this.da = a;
    this.za = this.j = null;
    if (a = this.g && tB.o) a = !(kG(this) || pc || rc || dn() || oc && (!oc || !fw(ew, 4)));
    a && (this.j = new hG(this.o, !0), this.za = new NF(this.j.h));
    this.l = c || null;
    this.F = null != this.l;
    kG(this) && b ? "function" !== typeof b.getBoundingClientRect ? (c = this.o, tB.j = c) : c = b : c = this.o;
    this.B = c;
    this.A = new uF(this.o, this);
    this.size = new A(0, 0);
    this.K = "";
    b && (b = Lv(b.src || b.currentSrc), 200 > b.toString().length ? this.K = b.toString() : 200 > b.h.length && (this.K = b.h));
    this.Pd = new Map();
    this.Pd.set("videoDisplay1", this.da);
    this.za && this.Pd.set("videoDisplay2", this.za);
    lG(this) && !tB.h && console.warn("Custom media element must be a <video> or <audio> element. Viewability/audibility measurement will fail.");
  };
  l = mG.prototype;
  l.initialize = function () {
    this.D = !0;
    null != this.g && this.g.initialize();
    null != this.j && this.j.initialize();
  };
  l.ua = function () {
    return this.D;
  };
  l.destroy = function () {
    var a = this;
    this.h = null;
    In(this.g);
    In(this.j);
    In(this.A);
    this.da.ac(function () {
      return In(a.da);
    });
    null != this.za && this.za.ac(function () {
      return In(a.za);
    });
    Wg(this.o);
  };
  l.Xc = function () {
    if (null != this.g) {
      var a = this.g.g;
      null != a && (a.style.display = "block");
    }
  };
  l.dc = function (a) {
    this.da !== a && this.g && this.j && this.za && (a.setVolume(this.da.getVolume()), a = this.da, this.da = this.za, this.za = a, a = this.g, this.g = this.j, this.j = a, this.j.gb(), this.A.dc(this.da));
  };
  l.gb = function () {
    null != this.g && this.g.gb();
  };
  l.Kb = function () {
    return this.F && this.l ? this.l : null != this.g ? this.g.Kb() : null;
  };
  var kG = function (a) {
      return WB(a.I) && a.G;
    },
    lG = function (a) {
      var b = ["VIDEO", "AUDIO"],
        c;
      return kG(a) && !!a.h && !b.includes(null == (c = a.h.tagName) ? void 0 : c.toUpperCase());
    };
  mG.prototype.getSize = function () {
    return this.size;
  };
  var jG = function (a) {
    return null != a && "function" === typeof a.getAttribute && null != a.getAttribute("playsinline") ? !0 : !1;
  };
  mG.prototype.Ed = function (a) {
    this.da.Ed(a);
  };
  mG.prototype.Fd = function () {
    this.da.Fd();
  };
  mG.prototype.destroy = mG.prototype.destroy;
  mG.prototype.initialize = mG.prototype.initialize;
  var nG = {
      AD_LOAD: "adLoadError",
      AD_PLAY: "adPlayError"
    },
    oG = function (a) {
      var b = Error.call(this);
      this.message = b.message;
      "stack" in b && (this.stack = b.stack);
      this.data = a;
    };
  u(oG, Error);
  l = oG.prototype;
  l.getInnerError = function () {
    var a = this.data.innerError;
    return a instanceof Object ? new oG(a) : null != a ? Error(a) : null;
  };
  l.getMessage = function () {
    return this.data.errorMessage;
  };
  l.getErrorCode = function () {
    return this.data.errorCode;
  };
  l.getVastErrorCode = function () {
    var a = this.getErrorCode();
    return 1E3 > a ? a : 900;
  };
  l.getType = function () {
    return this.data.type;
  };
  l.toString = function () {
    return "AdError " + this.getErrorCode() + ": " + this.getMessage() + (null != this.getInnerError() ? " Caused by: " + this.getInnerError() : "");
  };
  oG.prototype.getType = oG.prototype.getType;
  oG.prototype.getVastErrorCode = oG.prototype.getVastErrorCode;
  oG.prototype.getErrorCode = oG.prototype.getErrorCode;
  oG.prototype.getMessage = oG.prototype.getMessage;
  oG.prototype.getInnerError = oG.prototype.getInnerError;
  x("module$exports$google3$javascript$ads$interactivemedia$sdk$clientside$api$ad_error.AdError.Type", nG);
  var pG = {
      AD_ERROR: "adError"
    },
    qG = function (a, b) {
      b = void 0 === b ? null : b;
      Zr.call(this, "adError");
      this.error = a;
      this.g = b;
    };
  u(qG, Zr);
  Object.assign(window, {
    jshookEventListners
  });
  qG.prototype.getError = function () {
    return this.error;
  };
  qG.prototype.getUserRequestContext = function () {
    return this.g;
  };
  qG.prototype.getUserRequestContext = qG.prototype.getUserRequestContext;
  qG.prototype.getError = qG.prototype.getError;
  x("module$exports$google3$javascript$ads$interactivemedia$sdk$clientside$api$ad_error_event.AdErrorEvent.Type", pG);
  var rG = {
      AD_CAN_PLAY: "adCanPlay",
      wg: "adStarted",
      CONTENT_PAUSE_REQUESTED: "contentPauseRequested",
      CONTENT_RESUME_REQUESTED: "contentResumeRequested",
      CLICK: "click",
      VIDEO_CLICKED: "videoClicked",
      VIDEO_ICON_CLICKED: "videoIconClicked",
      Qd: "engagedView",
      EXPANDED_CHANGED: "expandedChanged",
      STARTED: "start",
      AD_PROGRESS: "adProgress",
      AD_BUFFERING: "adBuffering",
      IMPRESSION: "impression",
      Vd: "measurable_impression",
      VIEWABLE_IMPRESSION: "viewable_impression",
      Rd: "fully_viewable_audible_half_duration_impression",
      Ue: "overlay_resize",
      Ve: "overlay_unmeasurable_impression",
      We: "overlay_unviewable_impression",
      Ye: "overlay_viewable_immediate_impression",
      Xe: "overlay_viewable_end_of_session_impression",
      Pg: "externalActivityEvent",
      PAUSED: "pause",
      RESUMED: "resume",
      FIRST_QUARTILE: "firstQuartile",
      MIDPOINT: "midpoint",
      THIRD_QUARTILE: "thirdQuartile",
      COMPLETE: "complete",
      DURATION_CHANGE: "durationChange",
      USER_CLOSE: "userClose",
      Sh: "userRecall",
      Ah: "prefetched",
      LOADED: "loaded",
      ALL_ADS_COMPLETED: "allAdsCompleted",
      SKIPPED: "skip",
      cf: "skipShown",
      LINEAR_CHANGED: "linearChanged",
      SKIPPABLE_STATE_CHANGED: "skippableStateChanged",
      AD_METADATA: "adMetadata",
      AD_BREAK_FETCH_ERROR: "adBreakFetchError",
      AD_BREAK_READY: "adBreakReady",
      LOG: "log",
      VOLUME_CHANGED: "volumeChange",
      VOLUME_MUTED: "mute",
      INTERACTION: "interaction",
      Dg: "companionBackfill",
      Ph: "trackingUrlPinged",
      Th: "video_card_endcap_collapse",
      Uh: "video_card_endcap_dismiss",
      Vh: "video_card_endcap_impression",
      Gg: "companionInitialized",
      Fg: "companionImpression",
      Eg: "companionClick",
      sh: "mediaUrlPinged",
      Re: "loadStart",
      uh: "navigationRequested"
    },
    sG = function (a, b, c) {
      b = void 0 === b ? null : b;
      c = void 0 === c ? null : c;
      Zr.call(this, a);
      this.ad = b;
      this.j = c;
    };
  u(sG, Zr);
  sG.prototype.getAd = function () {
    return this.ad;
  };
  sG.prototype.getAdData = function () {
    return this.j;
  };
  sG.prototype.getAdData = sG.prototype.getAdData;
  sG.prototype.getAd = sG.prototype.getAd;
  x("module$exports$google3$javascript$ads$interactivemedia$sdk$clientside$api$ad_event.AdEvent.Type", rG);
  var tG = function (a, b) {
    b = void 0 === b ? null : b;
    sG.call(this, "adMetadata", a);
    this.g = b;
  };
  u(tG, sG);
  tG.prototype.wf = function () {
    return this.g;
  };
  tG.prototype.getAdCuePoints = tG.prototype.wf;
  var uG = function (a) {
    this.adBreakDuration = a.adBreakDuration;
    this.adPosition = a.adPosition;
    this.currentTime = a.currentTime;
    this.duration = a.duration;
    this.totalAds = a.totalAds;
  };
  var vG = function (a, b) {
    O.call(this);
    this.j = a;
    this.A = b;
    this.h = this.j.currentTime;
    this.g = new dt(250);
    N(this, this.g);
    this.l = new Fw(this);
    N(this, this.l);
    Hw(this.l, this.g, "tick", this.B, !1, this);
  };
  u(vG, O);
  vG.prototype.pb = function () {
    return this.h;
  };
  vG.prototype.start = function () {
    wG(this);
    this.g.start();
  };
  vG.prototype.stop = function () {
    this.g.stop();
  };
  vG.prototype.B = function () {
    var a = this.j.currentTime;
    a !== this.pb() && (this.h = a, wG(this));
  };
  var wG = function (a) {
    var b = {};
    b.currentTime = a.pb();
    pC(a.A, "contentTimeUpdate", "contentTimeUpdate", b);
  };
  var xG = mc && "srcdoc" in Tg(document, "IFRAME"),
    yG = function (a, b) {
      a.open("text/html", "replace");
      sh(a, ri(String(b)));
      a.close();
    };
  var zG = {
      rgb: !0,
      rgba: !0,
      alpha: !0,
      rect: !0,
      image: !0,
      "linear-gradient": !0,
      "radial-gradient": !0,
      "repeating-linear-gradient": !0,
      "repeating-radial-gradient": !0,
      "cubic-bezier": !0,
      matrix: !0,
      perspective: !0,
      rotate: !0,
      rotate3d: !0,
      rotatex: !0,
      rotatey: !0,
      steps: !0,
      rotatez: !0,
      scale: !0,
      scale3d: !0,
      scalex: !0,
      scaley: !0,
      scalez: !0,
      skew: !0,
      skewx: !0,
      skewy: !0,
      translate: !0,
      translate3d: !0,
      translatex: !0,
      translatey: !0,
      translatez: !0
    },
    AG = function (a) {
      a = nb(a);
      if ("" == a) return null;
      var b = String(a.slice(0, 4)).toLowerCase();
      if (0 == ("url(" < b ? -1 : "url(" == b ? 0 : 1)) return null;
      if (0 < a.indexOf("(")) {
        if (/"|'/.test(a)) return null;
        b = /([\-\w]+)\(/g;
        for (var c; c = b.exec(a);) if (!(c[1].toLowerCase() in zG)) return null;
      }
      return a;
    };
  function BG(a, b) {
    a = v[a];
    return a && a.prototype ? (b = Object.getOwnPropertyDescriptor(a.prototype, b)) && b.get || null : null;
  }
  function CG(a) {
    var b = v.CSSStyleDeclaration;
    return b && b.prototype && b.prototype[a] || null;
  }
  BG("Element", "attributes") || BG("Node", "attributes");
  BG("Element", "innerHTML") || BG("HTMLElement", "innerHTML");
  BG("Node", "nodeName");
  BG("Node", "nodeType");
  BG("Node", "parentNode");
  BG("Node", "childNodes");
  BG("HTMLElement", "style") || BG("Element", "style");
  BG("HTMLStyleElement", "sheet");
  var DG = CG("getPropertyValue"),
    EG = CG("setProperty");
  BG("Element", "namespaceURI") || BG("Node", "namespaceURI");
  function FG(a, b, c, d) {
    if (a) return a.apply(b, d);
    if (jc && 10 > document.documentMode) {
      if (!b[c].call) throw Error("IE Clobbering detected");
    } else if ("function" != typeof b[c]) throw Error("Clobbering detected");
    return b[c].apply(b, d);
  }
  ;
  var GG = {
      "-webkit-border-horizontal-spacing": !0,
      "-webkit-border-vertical-spacing": !0
    },
    IG = function (a) {
      if (!a) return wg;
      var b = document.createElement("div").style;
      HG(a).forEach(function (c) {
        var d = mc && c in GG ? c : c.replace(/^-(?:apple|css|epub|khtml|moz|mso?|o|rim|wap|webkit|xv)-(?=[a-z])/i, "");
        0 != d.lastIndexOf("--", 0) && 0 != d.lastIndexOf("var", 0) && (c = FG(DG, a, a.getPropertyValue ? "getPropertyValue" : "getAttribute", [c]) || "", c = AG(c), null != c && FG(EG, b, b.setProperty ? "setProperty" : "setAttribute", [d, c]));
      });
      return new vg(b.cssText || "", ug);
    },
    HG = function (a) {
      Qa(a) ? a = Zb(a) : (a = bg(a), Vb(a, "cssText"));
      return a;
    };
  var JG = ia([""]),
    KG = function (a, b, c) {
      O.call(this);
      this.h = a;
      this.l = b;
      this.B = c;
      this.g = null;
      this.D = "";
      this.F = Mh(JG);
      this.G = 0;
      this.A = this.slot = this.j = null;
      this.sessionId = "";
    };
  u(KG, O);
  KG.prototype.init = function (a) {
    this.sessionId = a;
    a = "about:blank";
    jc && (a = "");
    this.j = Vg("IFRAME", {
      src: a,
      allowtransparency: !0,
      background: "transparent"
    });
    Fm(this.j, {
      display: "none",
      width: "0",
      height: "0"
    });
    a = this.h.Qc;
    a.appendChild(this.j);
    a = a.ownerDocument;
    a = a.defaultView || a.parentWindow;
    null == this.A && (this.A = new Fw(this));
    this.A.N(a, "message", this.H);
    a = '<body><script src="//imasdk.googleapis.com/js/sdkloader/loader.js">\x3c/script><script>loader = new VPAIDLoader(false, "' + (this.sessionId + '");\x3c/script></body>');
    if (Hc || Fc || kc) {
      var b = this.j.contentWindow;
      b && yG(b.document, a);
    } else b = this.j, xG ? (a = ri(a), b.srcdoc = zg(a)) : (b = b.contentWindow) && yG(b.document, a);
  };
  KG.prototype.H = function (a) {
    try {
      var b = a.g.data;
      try {
        var c = JSON.parse(b);
      } catch (B) {
        return;
      }
      var d = c.session;
      if (null != d && this.sessionId === d) switch (c.type) {
        case "friendlyReady":
          var e = LG(this);
          if (null != e) {
            this.g = e;
            this.D = e.currentSrc;
            var f = e.style.cssText;
            if (jc && 10 > document.documentMode) var g = wg;else {
              var h = document.implementation.createHTMLDocument("").createElement("DIV");
              h.style.cssText = f;
              g = IG(h.style);
            }
            this.F = g;
            this.G = e.currentTime;
          } else {
            var k = this.h.Qc,
              m = "border: 0; margin: 0; padding: 0; position: absolute; ",
              n = this.h.getSize();
            m += "width:" + n.width + "px;";
            m += "height:" + n.height + "px;";
            this.g = Vg("VIDEO", {
              style: m,
              autoplay: !0
            });
            k.appendChild(this.g);
          }
          var q = this.h.Qc;
          k = "border: 0; margin: 0; padding: 0;position: absolute; ";
          var t = Om(this.g);
          k += "width:" + t.width + "px;";
          k += "height:" + t.height + "px;";
          this.slot = Vg("DIV", {
            style: k
          });
          q.appendChild(this.slot);
          try {
            this.j.contentWindow.loader.initFriendly(this.g, this.slot);
          } catch (B) {
            MG(this);
          }
          pC(this.l, "vpaid", "", b);
          break;
        case "becameLinear":
          this.g && !eh() && !dh() && Fm(this.g, {
            visibility: "visible"
          });
          pC(this.l, "vpaid", "", b);
          break;
        case "becameNonlinear":
          NG(this);
          pC(this.l, "vpaid", "", b);
          break;
        case "startAd":
          q = {};
          if (this.g) {
            m = this.g.paused;
            var w = 0 < this.g.currentTime;
            q.apl = w && !m ? "1" : "0";
            q.ip = m ? "1" : "0";
            q.iavp = w ? "1" : "0";
          } else q.apl = "n";
          X.g().report(99, q);
          pC(this.l, "vpaid", "", b);
          this.Xc();
          break;
        default:
          pC(this.l, "vpaid", "", b);
      }
    } catch (B) {
      MG(this);
    }
  };
  var MG = function (a) {
    var b = {
      type: "error"
    };
    b.session = a.sessionId;
    b = JSON.stringify(b);
    a.postMessage(b);
  };
  KG.prototype.postMessage = function (a) {
    window.postMessage(a, "*");
  };
  var LG = function (a) {
    return ("videoDisplayUnknown" === a.B ? a.h.da : a.h.Pd.get(a.B)).M.g;
  };
  KG.prototype.Xc = function () {
    null != LG(this) && this.h.Xc();
  };
  var NG = function (a) {
    a.g && !eh() && !dh() && Fm(a.g, {
      visibility: "hidden"
    });
  };
  KG.prototype.L = function () {
    In(this.A);
    this.A = null;
    Wg(this.slot);
    this.slot = null;
    Wg(this.j);
    this.j = null;
    var a = LG(this);
    if (null != a) {
      var b = this.F;
      a.style.cssText = b instanceof vg && b.constructor === vg ? b.g : "type_error:SafeStyle";
      eh() || dh() ? (a.src = this.D, a.currentTime = this.G) : (a.removeAttribute("src"), this.h.gb());
    } else Wg(this.g), this.g = null;
    O.prototype.L.call(this);
  };
  var OG = function (a, b) {
    M.call(this);
    this.h = a;
    this.j = b;
    this.g = new Map();
  };
  u(OG, M);
  var PG = function (a, b) {
    try {
      var c = b.ra,
        d = c.session;
      switch (c.vpaidEventType) {
        case "createFriendlyIframe":
          b = "videoDisplayUnknown";
          c.videoDisplayName && (b = c.videoDisplayName);
          var e = c.session,
            f = new KG(a.h, a.j, b);
          a.g.set(e, f);
          f.init(e);
          break;
        case "vpaidNonLinear":
          var g = a.g.get(d);
          g && NG(g);
          break;
        case "destroyFriendlyIframe":
          var h = a.g.get(d);
          h && (h.W(), a.g.delete(d));
      }
    } catch (k) {
      X.g().report(125, {
        msg: k.message
      });
    }
  };
  OG.prototype.L = function () {
    this.g.forEach(function (a) {
      a.W();
    });
  };
  var QG = function (a) {
    this.P = pe(a);
  };
  u(QG, $e);
  QG.prototype.getValue = function () {
    return We(this, 1);
  };
  QG.prototype.getVersion = function () {
    return Xe(this, 5);
  };
  var RG = Gf(QG);
  var SG = function () {
      this.g = window;
      this.h = 0;
    },
    TG = function (a, b, c, d) {
      if (d) {
        var e = void 0 === e ? 0 : e;
        e = Se(Qe(c, 2), e);
        e = {
          pe: Math.max(e - Date.now() / 1E3, 0),
          path: We(c, 3),
          domain: We(c, 4),
          cg: !1
        };
        c = c.getValue();
        a = a.g;
        Te(d, 5) && lj(a) && new jj(a.document).set(b, c, e);
      }
    },
    UG = function (a, b, c) {
      if (c && mj(b, c, a.g)) {
        var d = a.g.location.hostname;
        if ("localhost" === d) d = ["localhost"];else if (d = d.split("."), 2 > d.length) d = [];else {
          for (var e = [], f = 0; f < d.length - 1; ++f) e.push(d.slice(f).join("."));
          d = e;
        }
        d = r(d);
        for (e = d.next(); !e.done; e = d.next()) f = a.g, Te(c, 5) && lj(f) && new jj(f.document).remove(b, "/", e.value);
      }
    };
  var VG = function () {
    this.g = [];
    this.h = [];
  };
  l = VG.prototype;
  l.isEmpty = function () {
    return 0 === this.g.length && 0 === this.h.length;
  };
  l.clear = function () {
    this.g = [];
    this.h = [];
  };
  l.contains = function (a) {
    return Ub(this.g, a) || Ub(this.h, a);
  };
  l.remove = function (a) {
    var b = this.g;
    b: {
      var c = b.length - 1;
      0 > c && (c = Math.max(0, b.length + c));
      if ("string" === typeof b) c = "string" !== typeof a || 1 != a.length ? -1 : b.lastIndexOf(a, c);else {
        for (; 0 <= c; c--) if (c in b && b[c] === a) break b;
        c = -1;
      }
    }
    0 <= c ? (Wb(b, c), b = !0) : b = !1;
    return b || Vb(this.h, a);
  };
  l.zb = function () {
    for (var a = [], b = this.g.length - 1; 0 <= b; --b) a.push(this.g[b]);
    var c = this.h.length;
    for (b = 0; b < c; ++b) a.push(this.h[b]);
    return a;
  };
  var Z = function (a, b, c, d, e, f, g, h) {
    O.call(this);
    var k = this;
    this.G = a;
    this.g = b;
    this.adTagUrl = c;
    this.ba = d;
    this.Xa = e;
    this.D = g;
    this.Na = h;
    this.l = new SE();
    this.J = !1;
    this.volume = 1;
    this.ba = d;
    this.aa = -1;
    this.B = this.j = this.h = null;
    this.A = new vG({
      currentTime: 0
    }, this.D);
    this.F = new VG();
    this.ma = this.V = !1;
    this.X = new Map();
    this.Z = this.Ea = !1;
    this.Fa = new OG(b, g);
    N(this, this.Fa);
    this.H = f && null != this.g.l;
    this.M = function () {
      var m = k.g.da,
        n = m.getCurrentTime();
      m = m.getDuration();
      return {
        currentTime: n,
        duration: m,
        isPlaying: !0,
        volume: k.volume
      };
    };
    this.U = new Fw(this);
    this.U.N(this.D, "adsManager", this.cc);
  };
  u(Z, O);
  Z.prototype.cc = function (a) {
    var b = this,
      c = a.messageType,
      d = a.ra,
      e = {};
    switch (c) {
      case "error":
        WG(this);
        XG(this, d);
        break;
      case "contentPauseRequested":
        X.g().report(130);
        YG(this);
        this.A.stop();
        ZG(this, c, d);
        break;
      case "contentResumeRequested":
        $G(this, function () {
          ZG(b, c, d);
        });
        break;
      case "remainingTime":
        this.aa = d.remainingTime;
        break;
      case "skip":
        ZG(this, c, d);
        break;
      case "log":
        ZG(this, c, d, d.logData);
        break;
      case "companionBackfill":
        a = Na("window.google_show_companion_ad");
        null != a && a();
        break;
      case "skipShown":
        this.J = !0;
        ZG(this, c, d);
        break;
      case "interaction":
        ZG(this, c, d, d.interactionData);
        break;
      case "vpaidEvent":
        PG(this.Fa, a);
        break;
      case "skippableStateChanged":
        e = d.adData;
        null != e.skippable && (this.J = e.skippable);
        ZG(this, c, d);
        break;
      case "volumeChange":
        e = d.adData;
        null != e && "number" === typeof e.volume && (this.volume = e.volume);
        ZG(this, c, d);
        break;
      case "firstQuartile":
        ZG(this, fC.firstQuartile, d);
        ZG(this, c, d);
        break;
      case "thirdQuartile":
        ZG(this, fC.thirdQuartile, d);
        ZG(this, c, d);
        break;
      case "updateGfpCookie":
        aH(this, d);
        break;
      default:
        ZG(this, c, d);
    }
  };
  var ZG = function (a, b, c, d) {
      if (null == c.companions) {
        var e = a.X.get(c.adId);
        c.companions = null != e ? e : [];
      }
      var f = c.adData;
      if (e = null == f ? null : new Y(f)) a.h = e;
      switch (b) {
        case "adBreakReady":
        case "mediaUrlPinged":
          b = new sG(b, null, c);
          break;
        case "adMetadata":
          b = null;
          null != c.adCuePoints && (b = new QE(c.adCuePoints));
          b = new tG(e, b);
          break;
        case "allAdsCompleted":
          a.h = null;
          a.Ea = !0;
          b = new sG(b, e);
          break;
        case "contentPauseRequested":
          a.Z = !1;
          b = new sG(b, e);
          break;
        case "contentResumeRequested":
          a.h = null;
          a.Z = !0;
          b = new sG(b, e);
          break;
        case "loaded":
          a.aa = e.getDuration();
          a.J = !1;
          YB() && (d = a.G, c = a.Xa, d.h.set(PE(e), a.M), EF(d) && DF(d, "loaded", PE(e), c));
          b = new sG(b, e, f);
          break;
        case "start":
          a.X.set(c.adId, c.companions);
          null != a.g.Kb() && (null == a.j ? (a.j = new gE(), a.U.N(a.j, "click", a.Vf)) : kE(a.j), iE(a.j, a.g.Kb()));
          b = new sG(b, e);
          break;
        case "complete":
          null != a.j && kE(a.j);
          YB() && GF(a.G, a.M, PE(e));
          a.h = null;
          a.X.delete(c.adId);
          b = new sG(b, e);
          break;
        case "log":
          c = null;
          null != d && null != d.type ? (f = d.type, f = "adLoadError" === f || "adPlayError" === f) : f = !1;
          f && (c = {
            adError: new oG(d)
          });
          b = new sG(b, e, c);
          break;
        case "interaction":
          b = new sG(b, e, d);
          break;
        case "adProgress":
          b = new sG(b, e, new uG(c));
          break;
        default:
          b = new sG(b, e);
      }
      a.dispatchEvent(b);
      a.Ea && a.Z && a.destroy();
    },
    XG = function (a, b) {
      var c = new qG(new oG(b));
      a.V ? (a.dispatchEvent(c), YB() && a.h && GF(a.G, a.M, PE(a.h)), a.h = null) : a.F.h.push(c);
      a = {
        error: b.errorCode,
        vis: di(document)
      };
      X.g().report(7, a);
    },
    bH = function (a, b, c) {
      pC(a.D, "adsManager", b, c);
    },
    $G = function (a, b) {
      X.g().report(131);
      WG(a, b);
      a.ya() || a.A.start();
    },
    YG = function (a) {
      var b = a.g.da;
      kG(a.g) && a.l.restoreCustomPlaybackStateOnAdBreakComplete && null != b.Ud && b.Ud();
    },
    WG = function (a, b) {
      var c = a.g.da;
      kG(a.g) && a.l.restoreCustomPlaybackStateOnAdBreakComplete && null != c.ac ? c.ac(b) : b && b();
    };
  l = Z.prototype;
  l.configureAdsManager = function (a, b) {
    this.B = a;
    null != a.currentTime && (this.A = new vG(a, this.D), this.A.start());
    null != b && (this.l = cH(b));
  };
  l.init = function (a, b, c, d) {
    if (this.F.isEmpty()) {
      var e = this.g,
        f = null;
      e.h && null == d && (f = {
        vd: "setnull"
      });
      e.h && e.h === d && (f = {
        vd: "match"
      });
      if (e.h && e.h !== d) {
        f = XB(d || null);
        var g = iw(d || null);
        f = {
          vd: "diff",
          oc: e.M,
          nc: f,
          oi: e.J,
          ni: g
        };
      }
      !e.h && d && (f = {
        vd: "new"
      });
      f && (f.custVid = e.H, X.g().report(93, f));
      null != d && (e.I = jG(d), WB(e.I) && (e.G = !0, In(e.g), In(e.j), In(e.za), e.g = null, e.j = null, e.za = null, In(e.da), e.da = new NF(d), "function" !== typeof d.getBoundingClientRect ? (e.B = e.o, tB.j = e.B) : e.B = d, e.A.dc(e.da)));
      this.V = !0;
      this.resize(a, b, c);
      d = TE(this.l, this.H);
      e = {};
      a = (e.adsRenderingSettings = d, e.width = a, e.height = b, e.viewMode = c, e);
      bH(this, "init", a);
    } else {
      for (; !this.F.isEmpty();) b = a = this.F, 0 === b.g.length && (b.g = b.h, b.g.reverse(), b.h = []), a = a.g.pop(), this.dispatchEvent(a);
      this.W();
    }
  };
  l.isCustomPlaybackUsed = function () {
    return kG(this.g);
  };
  l.isCustomClickTrackingUsed = function () {
    return this.H;
  };
  l.getRemainingTime = function () {
    return this.aa;
  };
  l.getAdSkippableState = function () {
    return this.J;
  };
  l.discardAdBreak = function () {
    bH(this, "discardAdBreak");
  };
  l.updateAdsRenderingSettings = function (a) {
    if (null != a) {
      a = cH(a);
      var b = this.l.bitrate,
        c = a.bitrate;
      X.g().report(96, {
        init: this.V ? "1" : "0",
        start: this.ma ? "1" : "0",
        old: b,
        "new": c,
        changed: b !== c ? "1" : "0"
      });
      this.l = a;
      a = TE(this.l, this.H);
      b = {};
      a = (b.adsRenderingSettings = a, b);
      bH(this, "updateAdsRenderingSettings", a);
    }
  };
  l.skip = function () {
    bH(this, "skip");
  };
  l.start = function () {
    if (this.adTagUrl) {
      (pc || rc) && X.g().report(50, {
        customPlayback: kG(this.g)
      });
      this.g.ua() || X.g().report(26, {
        adtagurl: this.adTagUrl,
        customPlayback: kG(this.g)
      });
      Ym(this.g.o) && X.g().report(30, {
        adtagurl: this.adTagUrl,
        customPlayback: kG(this.g)
      });
      var a = this.g.l,
        b = this.g.o,
        c;
      if (c = a && b && !Ym(a)) a = BF(a), b = BF(b), c = 0 < a.width && 0 < a.height && 0 < b.width && 0 < b.height && a.left <= b.left + b.width && b.left <= a.left + a.width && a.top <= b.top + b.height && b.top <= a.top + a.height;
      b = c;
      X.g().report(31, {
        adtagurl: this.adTagUrl,
        customPlayback: kG(this.g),
        covers: b
      });
    }
    if (!this.g.ua() && !kG(this.g)) throw EC(CC);
    b = this.g;
    b.F = this.H && null != b.l;
    this.g.A.g.style.opacity = "1";
    if (null != this.B && 1 === this.getVolume()) {
      var d, e;
      if ("boolean" === typeof (null == (d = this.B) ? void 0 : d.muted) && (null == (e = this.B) ? 0 : e.muted)) this.setVolume(0);else {
        var f;
        if ("number" === typeof (null == (f = this.B) ? void 0 : f.volume)) {
          var g;
          d = null == (g = this.B) ? void 0 : g.volume;
          if (0 <= d && 1 >= d) {
            var h;
            this.setVolume(null == (h = this.B) ? void 0 : h.volume);
          }
        }
      }
    }
    this.ma = !0;
    bH(this, "start");
  };
  l.Vf = function () {
    if (!this.l.disableClickThrough && null != this.h) {
      var a = this.h.data.clickThroughUrl;
      null != a && cw(a, this.h.data.attributionParams);
    }
  };
  l.resize = function (a, b, c) {
    var d = this.g,
      e = d.o;
    null != e && (-1 === a ? (e.style.right = "0", e.style.left = "0") : e.style.width = a + "px", -1 === b ? (e.style.bottom = "0", e.style.top = "0") : e.style.height = b + "px");
    e = d.A;
    e.g.width = -1 === a ? "100%" : String(a);
    e.g.height = -1 === b ? "100%" : String(b);
    try {
      e.g.offsetTop = e.g.offsetTop;
    } catch (f) {}
    d.size = new A(a, b);
    d = {};
    a = (d.width = a, d.height = b, d.viewMode = c, d);
    bH(this, "resize", a);
  };
  l.stop = function () {
    bH(this, "stop");
  };
  l.expand = function () {
    bH(this, "expand");
  };
  l.collapse = function () {
    bH(this, "collapse");
  };
  l.getVolume = function () {
    return this.volume;
  };
  l.setVolume = function (a) {
    this.volume = a;
    this.g.da.setVolume(a);
    var b = {};
    a = (b.volume = a, b);
    bH(this, "volume", a);
  };
  l.pause = function () {
    bH(this, "pause");
  };
  l.resume = function () {
    bH(this, "resume");
  };
  l.destroy = function () {
    this.W();
  };
  l.getCuePoints = function () {
    return this.ba;
  };
  l.xf = function () {
    return this.h;
  };
  l.L = function () {
    bH(this, "destroy");
    null != this.j && this.j.W();
    this.U.W();
    this.F.clear();
    this.A && (this.A.stop(), this.A.W());
    YB() && GF(this.G, this.M);
    O.prototype.L.call(this);
  };
  l.mf = function () {
    X.g().report(124, {
      api: "clicked"
    });
    var a = this.h && this.h.data.clickThroughUrl,
      b;
    if (a && (null == (b = this.h) ? 0 : b.oe())) {
      var c;
      cw(a, null == (c = this.h) ? void 0 : c.data.attributionParams);
    }
    bH(this, "click");
  };
  l.focus = function () {
    pC(this.D, "userInteraction", "focusUiElement");
  };
  var aH = function (a, b) {
    var c = b.gfpCookieUserEnabled;
    b = b.gfpCookieClearData;
    var d = new QG();
    d = Ze(d, 1, c ? "0" : "1");
    d = Ce(d, 2, ae(2147483647));
    d = Ze(d, 3, "/");
    d = Ze(d, 4, window.location.hostname);
    var e = new SG(),
      f,
      g;
    a = null != (g = null == (f = a.Na) ? void 0 : AB(f)) ? g : null;
    TG(e, "__gpi_opt_out", d, a);
    if (!c || b) UG(e, "__gads", a), UG(e, "__gpi", a);
  };
  Z.prototype.clicked = Z.prototype.mf;
  Z.prototype.getCurrentAd = Z.prototype.xf;
  Z.prototype.getCuePoints = Z.prototype.getCuePoints;
  Z.prototype.destroy = Z.prototype.destroy;
  Z.prototype.resume = Z.prototype.resume;
  Z.prototype.pause = Z.prototype.pause;
  Z.prototype.setVolume = Z.prototype.setVolume;
  Z.prototype.getVolume = Z.prototype.getVolume;
  Z.prototype.collapse = Z.prototype.collapse;
  Z.prototype.expand = Z.prototype.expand;
  Z.prototype.stop = Z.prototype.stop;
  Z.prototype.resize = Z.prototype.resize;
  Z.prototype.start = Z.prototype.start;
  Z.prototype.skip = Z.prototype.skip;
  Z.prototype.updateAdsRenderingSettings = Z.prototype.updateAdsRenderingSettings;
  Z.prototype.discardAdBreak = Z.prototype.discardAdBreak;
  Z.prototype.getAdSkippableState = Z.prototype.getAdSkippableState;
  Z.prototype.getRemainingTime = Z.prototype.getRemainingTime;
  Z.prototype.isCustomClickTrackingUsed = Z.prototype.isCustomClickTrackingUsed;
  Z.prototype.isCustomPlaybackUsed = Z.prototype.isCustomPlaybackUsed;
  Z.prototype.init = Z.prototype.init;
  function cH(a) {
    if (a instanceof SE) return X.g().report(174, {
      valid: !0
    }), a;
    X.g().report(174, {
      valid: !1
    });
    var b = new SE();
    b.append(a);
    return b;
  }
  ;
  var dH = {
      ADS_MANAGER_LOADED: "adsManagerLoaded"
    },
    eH = function (a, b) {
      Zr.call(this, "adsManagerLoaded");
      this.g = a;
      this.j = b;
    };
  u(eH, Zr);
  eH.prototype.getAdsManager = function (a, b) {
    a = a || {
      currentTime: null
    };
    this.g.configureAdsManager(a, b);
    return this.g;
  };
  eH.prototype.getUserRequestContext = function () {
    return this.j;
  };
  eH.prototype.getUserRequestContext = eH.prototype.getUserRequestContext;
  eH.prototype.getAdsManager = eH.prototype.getAdsManager;
  x("module$exports$google3$javascript$ads$interactivemedia$sdk$clientside$api$ads_manager_loaded_event.AdsManagerLoadedEvent.Type", dH);
  var fH = function () {
    this.continuousPlayback = this.adWillPlayMuted = this.adWillAutoPlay = null;
    this.descriptionUrl = "";
    this.iconsSupported = !1;
    this.nonceLengthLimit = Number.MAX_SAFE_INTEGER;
    this.ppid = this.playerVersion = this.playerType = this.omidVersion = this.omidPartnerVersion = this.omidPartnerName = "";
    this.sessionId = oE;
    this.skippablesSupported = !1;
    this.supportedApiFrameworks = [];
    this.videoWidth = this.videoHeight = -1;
    this.url = "";
  };
  x("goog.pal.NonceRequest", fH);
  var gH = function (a, b) {
      (0, a.__uspapi)("getUSPData", 1, function (c, d) {
        b.callback({
          sc: null != c ? c : void 0,
          uc: d ? void 0 : 2
        });
      });
    },
    hH = {
      Fc: function (a) {
        return a.callback;
      },
      Sb: function (a, b) {
        a = {};
        return a.__uspapiCall = {
          callId: b,
          command: "getUSPData",
          version: 1
        }, a;
      },
      Cb: function (a, b) {
        b = b.__uspapiReturn;
        var c;
        a({
          sc: null != (c = b.returnValue) ? c : void 0,
          uc: b.success ? void 0 : 2
        });
      }
    };
  function iH(a) {
    var b = {};
    "string" === typeof a.data ? b = JSON.parse(a.data) : b = a.data;
    return {
      payload: b,
      re: b.__uspapiReturn.callId
    };
  }
  var jH = function (a, b) {
    b = void 0 === b ? {} : b;
    M.call(this);
    var c;
    this.timeoutMs = null != (c = b.timeoutMs) ? c : 500;
    this.caller = new $u(a, "__uspapiLocator", function (d) {
      return "function" === typeof d.__uspapi;
    }, iH);
    this.caller.l.set("getDataWithCallback", gH);
    this.caller.o.set("getDataWithCallback", hH);
  };
  u(jH, M);
  jH.prototype.L = function () {
    this.caller.W();
    M.prototype.L.call(this);
  };
  var kH = function (a, b) {
    var c = {};
    if (av(a.caller)) {
      var d = Mf(function () {
        b(c);
      });
      cv(a.caller, "getDataWithCallback", {
        callback: function (e) {
          e.uc || (c = e.sc);
          d();
        }
      });
      setTimeout(d, a.timeoutMs);
    } else b(c);
  };
  var XD = ZD() ? 500 : 2E3,
    lH = function (a) {
      O.call(this);
      var b = this,
        c = qB(sB(this.getSettings()));
      c && 0 < c.length && (Vi.reset(), Xi(new vj(c)));
      this.B = new SG();
      this.A = null;
      this.g = a;
      this.F = new Map();
      this.l = this.g.A;
      this.H = new Fw(this);
      N(this, this.H);
      this.U = new pv(window, {
        timeoutMs: 500
      });
      this.V = new jH(window, {
        timeoutMs: 500
      });
      this.J = new YD();
      ZD() && bE(this.J);
      a = new kv(window, {
        timeoutMs: 500
      });
      this.M = new vE(a, 500);
      N(this, this.M);
      this.h = null;
      this.G = {};
      0 !== tB.g ? (this.j = new yF(), N(this, this.j)) : this.j = zF();
      YB() && (this.j.init(tF(this.l)), this.D = FF(this.j, this.g.B), Jn(this, function () {
        var d = b.D;
        b.j.j.delete(d);
        0 !== tB.g && (z(Gr).o[d] = null);
      }));
    };
  u(lH, O);
  lH.prototype.destroy = function () {
    this.W();
  };
  lH.prototype.getVersion = function () {
    return "h.3.609.1";
  };
  lH.prototype.requestAds = function (a, b) {
    var c = this,
      d = [],
      e = null;
    rv(this.U) && d.push(new Promise(function (h) {
      vv(c.U, function (k) {
        e = k;
        h();
      });
    }));
    var f = null;
    av(this.V.caller) && d.push(new Promise(function (h) {
      kH(c.V, function (k) {
        f = k;
        h();
      });
    }));
    var g = null;
    d.push(xE(this.M).then(function (h) {
      g = h;
    }));
    Promise.all(d).then(function () {
      mH(c, a, b, {
        Ld: e,
        Od: f,
        ld: g
      });
    });
  };
  var mH = function (a, b, c, d) {
    var e = b.adTagUrl;
    e && X.g().report(8, {
      adtagurl: e,
      customPlayback: kG(a.g),
      customClick: null != a.g.l
    });
    var f = "goog_" + Fg++;
    a.F.set(f, c || null);
    var g = nH({
      adTagUrl: e,
      ne: !1,
      Ld: d.Ld,
      Od: d.Od,
      ld: d.ld
    });
    a.h = xB(e, g || {});
    QD(a.h, function () {
      oH(a);
    });
    c = Promise.resolve();
    H(Ek) && (c = new Promise(function (n) {
      setTimeout(function () {
        n();
      }, 50);
    }));
    var h,
      k = null == (h = b.adTagUrl) ? void 0 : h.includes("GOOGLE_INSTREAM_VIDEO_NONCE"),
      m = zB(a.h);
    h = pH(a, m, k);
    d = bE(a.J);
    e = tE.getConfig();
    Promise.all([c, h, d, e]).then(function (n) {
      var q = r(n);
      q.next();
      q.next();
      n = q.next().value;
      q = q.next().value;
      var t = {};
      X.g().report(182, (t.aid = !!tB.A, t.aidf = !!a.A, t.hsc = !m && k, t));
      qH(a, f, b, g, n, q);
    });
  };
  lH.prototype.getSettings = function () {
    return tB;
  };
  lH.prototype.contentComplete = function () {
    pC(tF(this.l), "adsLoader", "contentComplete");
  };
  lH.prototype.X = function (a) {
    var b = a.messageType;
    switch (b) {
      case "adsLoaded":
        b = a.ra;
        a = a.sessionId;
        b = new Z(this.j, this.g, b.adTagUrl || "", b.adCuePoints, this.D, b.isCustomClickTrackingAllowed, tF(this.l, a), this.h);
        this.dispatchEvent(new eH(b, rH(this, a)));
        break;
      case "error":
        b = a.ra;
        this.dispatchEvent(new qG(new oG(b), rH(this, a.sessionId)));
        a = {
          error: b.errorCode,
          vis: di(document)
        };
        X.g().report(7, a);
        break;
      case "cookieUpdate":
        a = a.ra;
        if (null == a) break;
        if (tB.isCookiesEnabled()) {
          b = new uB();
          Ce(b, 5, Rd(!0));
          var c = a.gfpCookie;
          c && TG(this.B, "__gads", RG(c), b);
          (c = a.gfpCookieV2) && TG(this.B, "__gpi", RG(c), b);
        }
        sH(this, a.encryptedSignalBidderIds || []);
        break;
      case "trackingUrlPinged":
        this.dispatchEvent(new sG(b, null, a.ra));
    }
  };
  var sH = function (a, b) {
      0 !== b.length && (b = RD(b.map(function (c) {
        return {
          qc: c
        };
      }), a.h)) && b.forEach(function (c) {
        c.then(function (d) {
          d && oH(a);
        });
      });
    },
    oH = function (a) {
      var b = lD(PD(a.h));
      b && (a.G.espSignals = b, pC(tF(a.l), "adsLoader", "signalsRefresh", a.G));
    },
    rH = function (a, b) {
      var c = a.F.get(b);
      a.F.delete(b);
      return null != c ? c : null;
    },
    nH = function (a) {
      var b = a.Ld,
        c = a.Od,
        d = a.ld,
        e,
        f,
        g,
        h,
        k,
        m,
        n = {};
      var q = void 0 === q ? v : q;
      return n.gfcLoaded = Dh(q.top, "googlefcLoaded"), n.isGdprLoader = a.ne, n.addtlConsent = null != (e = null == b ? void 0 : b.addtlConsent) ? e : null, n.gdprApplies = null != (f = null == b ? void 0 : b.gdprApplies) ? f : null, n.tcString = null != (g = null == b ? void 0 : b.tcString) ? g : null, n.uspString = null != (h = null == c ? void 0 : c.uspString) ? h : null, n.gppString = null != (k = null == d ? void 0 : d.gppString) ? k : null, n.gppSid = null != (m = null == d ? void 0 : d.sid) ? m : null, n;
    },
    pH = function (a, b, c) {
      if (b) return a.A = null, Promise.resolve([]);
      b = [];
      b.push(tH());
      c && b.push(uH(a));
      return Promise.all(b);
    },
    qH = function (a, b, c, d, e, f) {
      d = vH(a, c, d, e);
      b = tF(a.l, b);
      a.H.N(b, "adsLoader", a.X);
      pC(b, "adsLoader", "requestAds", d);
      if (H(tk) || ZD()) a = {}, X.g().report(155, (a.ws = WD(), a.blob = null != e ? e : "undef", a), !0);
      if (f) {
        var g, h;
        e = null != (h = null == (g = Le(f, zt, 1)) ? void 0 : De(g, 6, he)) ? h : [];
        var k;
        c = null != (k = c.adTagUrl) ? k : "";
        var m = lB(c);
        k = e.some(function (n) {
          return n === m;
        });
        c = c ? hB(c) ? "adsense" : gB(c) ? "dbm" : fB(c) ? "dcm" : jB(c) ? "dv3" : iB(c) ? "xfp" : "thirdparty" : "";
        X.g().report(187, {
          fm: k,
          rt: c
        }, !0);
      }
    },
    uH = function (a) {
      var b;
      return Ha(function (c) {
        if (1 == c.g) return a.A || (a.A = new mC(), nC(a.A)), ya(c, a.A.getId(), 2);
        b = c.h;
        tB.A = b.id || "";
        c.g = 0;
      });
    },
    tH = function () {
      return Fb() && (H(Ik) || H(Hk)) ? H(Hk) ? new Promise(function (a) {
        setTimeout(function () {
          a();
        }, 50);
      }) : wH().then(function (a) {
        var b,
          c = null != (b = a.label) ? b : "";
        tB.I = c;
        tB.G = a.status;
      }) : Promise.resolve();
    },
    wH = function () {
      if (navigator.cookieDeprecationLabel) {
        var a = navigator.cookieDeprecationLabel.getValue().then(function (c) {
            return {
              label: c,
              status: 1
            };
          }).catch(function () {
            return {
              label: "",
              status: 2
            };
          }),
          b = new Promise(function (c) {
            setTimeout(function () {
              c({
                label: "",
                status: 5
              });
            }, 50);
          });
        return Promise.race([b, a]);
      }
      return Promise.resolve({
        label: "",
        status: 3
      });
    },
    vH = function (a, b, c, d) {
      var e = {},
        f = (e.limaExperimentIds = Wi().sort().join(","), e),
        g = a.getSettings(),
        h = EF(a.j);
      h = void 0 === h ? null : h;
      var k = {};
      null != h && (k.activeViewPushUpdates = h);
      k.activityMonitorMode = g.g;
      k.adsToken = g.A;
      k.autoPlayAdBreaks = g.o;
      k.companionBackfill = g.getCompanionBackfill();
      k.cookiesEnabled = g.isCookiesEnabled();
      k.disableCustomPlaybackForIOS10Plus = g.getDisableCustomPlaybackForIOS10Plus();
      k.engagementDetection = !0;
      k.isFunctionalTest = !1;
      k.isVpaidAdapter = g.h;
      k["1pJar"] = "";
      k.numRedirects = g.getNumRedirects();
      k.pageCorrelator = g.K;
      k.persistentStateCorrelator = Uh();
      k.playerType = g.getPlayerType();
      k.playerVersion = g.getPlayerVersion();
      k.ppid = g.getPpid();
      k.privacyControls = "";
      k.reportMediaRequests = !1;
      k.sessionId = g.sessionId;
      k.streamCorrelator = g.D;
      k.testingConfig = sB(g).g;
      k.urlSignals = g.V;
      k.vpaidMode = g.l;
      k.featureFlags = g.getFeatureFlags();
      k.cookieDeprecationLabel = g.I;
      k.cookieDeprecationLabelStatus = g.G;
      var m = b.adTagUrl,
        n = {};
      n.contentMediaUrl = a.g.K;
      n.customClickTrackingProvided = null != a.g.l;
      n.isAmp = bC();
      a: {
        try {
          var q = window.top.location.href;
        } catch (xj) {
          var t = 2;
          break a;
        }
        t = null == q ? 2 : q == window.document.location.href ? 0 : 1;
      }
      n.iframeState = t;
      n.imaHostingDomain = window.document.domain;
      n.imaHostingPageUrl = window.document.URL;
      n.topAccessiblePageUrl = aC();
      n.referrer = window.document.referrer;
      n.domLoadTime = a.l.H;
      n.sdkImplLoadTime = a.l.J;
      n.supportsResizing = !kG(a.g);
      var w = C().location.ancestorOrigins;
      n.topOrigin = w ? 0 < w.length && 200 > w[w.length - 1].length ? w[w.length - 1] : "" : null;
      n.osdId = a.D;
      n.usesCustomVideoPlayback = kG(a.g);
      n.usesProxyMediaElement = lG(a.g);
      n.usesInlinePlayback = a.g.I;
      var B = a.g.Qc,
        J = [],
        Ua = "",
        Ja = "";
      if (null != B) {
        var ha = B,
          ua = !0;
        ua = void 0 === ua ? !1 : ua;
        for (var fx = [], gx = 0; ha && 25 > gx; ++gx) {
          var Fo = void 0,
            yj = "";
          void 0 !== ua && ua || (yj = (yj = 9 !== ha.nodeType && ha.id) ? "/" + yj : "");
          a: {
            if (ha && ha.nodeName && ha.parentElement) for (var JH = ha.nodeName.toString().toLowerCase(), hx = ha.parentElement.childNodes, ix = 0, Go = 0; Go < hx.length; ++Go) {
              var Ho = hx[Go];
              if (Ho.nodeName && Ho.nodeName.toString().toLowerCase() === JH) {
                if (ha === Ho) {
                  Fo = "." + ix;
                  break a;
                }
                ++ix;
              }
            }
            Fo = "";
          }
          fx.push((ha.nodeName && ha.nodeName.toString().toLowerCase()) + yj + Fo);
          ha = ha.parentElement;
        }
        Ua = fx.join();
        if (B) {
          var Io = B.ownerDocument,
            Bf = Io && (Io.defaultView || Io.parentWindow) || null,
            jx = [];
          if (Bf) try {
            for (var Yg = Bf.parent, kx = 0; Yg && Yg !== Bf && 25 > kx; ++kx) {
              for (var lx = Yg.frames, zj = 0; zj < lx.length; ++zj) if (Bf === lx[zj]) {
                jx.push(zj);
                break;
              }
              Bf = Yg;
              Yg = Bf.parent;
            }
          } catch (xj) {}
          Ja = jx.join();
        } else Ja = "";
      }
      J.push(Ua, Ja);
      if (null != m) {
        for (var Jo = 0; Jo < Vu.length - 1; ++Jo) J.push(jh(m, Vu[Jo]) || "");
        var mx = jh(m, "videoad_start_delay"),
          nx = "";
        if (mx) {
          var ox = parseInt(mx, 10);
          nx = 0 > ox ? "postroll" : 0 == ox ? "preroll" : "midroll";
        }
        J.push(nx);
      } else for (var px = 0; px < Vu.length; ++px) J.push("");
      var KH = (n.videoAdKey = Ah(J.join(":")).toString(), n);
      var Zg = {},
        wc = (Zg.consentSettings = c, Zg.imalibExperiments = f, Zg.settings = k, Zg.videoEnvironment = KH, Zg),
        Ra = {};
      Ra.adsResponse = b.adsResponse;
      Ra.videoPlayActivation = b.h;
      Ra.videoPlayMuted = b.j;
      Ra.videoContinuousPlay = b.g;
      Ra.adTagUrl = b.adTagUrl;
      Ra.contentDuration = b.contentDuration;
      Ra.contentKeywords = b.contentKeywords;
      Ra.contentTitle = b.contentTitle;
      Ra.linearAdSlotWidth = b.linearAdSlotWidth;
      Ra.linearAdSlotHeight = b.linearAdSlotHeight;
      Ra.nonLinearAdSlotWidth = b.nonLinearAdSlotWidth;
      Ra.nonLinearAdSlotHeight = b.nonLinearAdSlotHeight;
      Ra.forceNonLinearFullSlot = b.forceNonLinearFullSlot;
      Ra.liveStreamPrefetchSeconds = b.liveStreamPrefetchSeconds;
      Ra.vastLoadTimeout = b.vastLoadTimeout;
      Ra.omidAccessModeRules = b.omidAccessModeRules;
      Ra.pageUrl = b.pageUrl;
      Object.assign(wc, Ra);
      if (a.h && tB.isCookiesEnabled()) {
        var fc = AB(a.h),
          ie = a.B;
        if (0 === ie.h) {
          if (fc && mj("__gads", fc, ie.g)) var qx = !0;else {
            var rx = ie.g;
            Te(fc, 5) && lj(rx) && new jj(rx.document).set("GoogleAdServingTest", "Good", void 0);
            var sx = "Good" === mj("GoogleAdServingTest", fc, ie.g);
            if (sx) {
              var tx = ie.g;
              Te(fc, 5) && lj(tx) && new jj(tx.document).remove("GoogleAdServingTest", void 0, void 0);
            }
            qx = sx;
          }
          ie.h = qx ? 2 : 1;
        }
        wc.isBrowserCookieEnabled = 2 === ie.h;
        var ux = fc ? mj("__gads", fc, a.B.g) : null;
        null !== ux && (wc.gfpCookieValue = ux);
        var vx = fc ? mj("__gpi", fc, a.B.g) : null;
        null !== vx && (wc.gfpCookieV2Id = vx);
        var wx = fc ? mj("__gpi_opt_out", fc, a.B.g) : null;
        null !== wx && (wc.gfpCookieV2OptOut = wx);
      }
      var Ko = lD(PD(a.h));
      Ko && (a.G.espSignals = Ko, wc.espSignals = Ko);
      if (H(Ak) || H(Bk) || H(Ck) || H(Dk)) try {
        var ea = new fH(),
          $g = null;
        b.pageUrl ? $g = b.pageUrl : aw(b.adTagUrl) && ($g = new URL(b.adTagUrl).searchParams.get("url"));
        $g && aw($g) && (ea.url = $g);
        ea.videoHeight = b.linearAdSlotHeight;
        ea.videoWidth = b.linearAdSlotWidth;
        var LH = Map,
          xx = [],
          MH = xx.concat,
          NH = Map,
          yx = [],
          OH = yx.concat,
          ud = new Map();
        ud.set("eid", Wi().sort().join(","));
        ud.set("aselc", "3");
        ud.set("correlator", "");
        ud.set("pal_v", "");
        ud.set("ref", new wl().j || window.document.referrer);
        ud.set("useragent", ub());
        ud.set("sdkv", "");
        var PH = ka(ud),
          xb = new Map();
        null != ea.adWillAutoPlay && xb.set("vpa", ea.adWillAutoPlay ? "auto" : "click");
        null != ea.adWillPlayMuted && xb.set("vpmute", ea.adWillPlayMuted ? "1" : "0");
        null != ea.continuousPlayback && xb.set("vconp", ea.continuousPlayback ? "2" : "1");
        xb.set("wta", ea.iconsSupported ? "1" : "0");
        xb.set("pss", ea.skippablesSupported ? "1" : "0");
        500 >= ea.descriptionUrl.length && xb.set("video_url_to_fetch", ea.descriptionUrl);
        200 >= ea.ppid.length && xb.set("ppid", ea.ppid);
        200 >= ea.playerType.length && xb.set("mpt", ea.playerType);
        200 >= ea.playerVersion.length && xb.set("mpv", ea.playerVersion);
        xb.set("sid", ea.sessionId);
        var Aj = ea.videoHeight,
          Bj = ea.videoWidth;
        if (-1 !== Aj || -1 !== Bj) {
          var QH = 0 <= Aj ? Aj.toString() : "0",
            RH = 0 <= Bj ? Bj.toString() : "0",
            zx = "l";
          Aj > Bj && (zx = "p");
          xb.set("vp_h", QH);
          xb.set("vp_w", RH);
          xb.set("u_so", zx);
        }
        var SH = ka(xb),
          xc = new Map(),
          yb = {};
        yb.u_tz = -new Date().getTimezoneOffset();
        var Lo = void 0 === Lo ? L : Lo;
        try {
          var Ax = Lo.history.length;
        } catch (xj) {
          Ax = 0;
        }
        yb.u_his = Ax;
        var Bx;
        yb.u_h = null == (Bx = L.screen) ? void 0 : Bx.height;
        var Cx;
        yb.u_w = null == (Cx = L.screen) ? void 0 : Cx.width;
        var Dx;
        yb.u_ah = null == (Dx = L.screen) ? void 0 : Dx.availHeight;
        var Ex;
        yb.u_aw = null == (Ex = L.screen) ? void 0 : Ex.availWidth;
        var Fx;
        yb.u_cd = null == (Fx = L.screen) ? void 0 : Fx.colorDepth;
        xc.set("u_ah", pE(yb.u_ah));
        xc.set("u_aw", pE(yb.u_aw));
        xc.set("u_cd", pE(yb.u_cd));
        xc.set("u_his", pE(yb.u_his));
        xc.set("nhd", pE(Math.max(vl().length, 0)));
        xc.set("u_h", pE(yb.u_h));
        xc.set("u_w", pE(yb.u_w));
        xc.set("dt", pE(Vt));
        xc.set("u_tz", pE(yb.u_tz));
        var TH = ka(new NH(OH.call(yx, PH, SH, ka(xc)))),
          UH = Map,
          Gx = [],
          VH = Gx.concat,
          Hx = new Map();
        Hx.set("sodar_correlator", "");
        var WH = ka(Hx),
          vd = new Map(),
          Ix = !1,
          Mo = ea.omidVersion;
        0 < Mo.length && 200 >= Mo.length && vd.set("omid_v", Mo);
        var No = ea.omidPartnerName,
          Oo = ea.omidPartnerVersion;
        0 < No.length && 0 < Oo.length && 200 >= No.length && 200 >= Oo.length && (vd.set("omid_p", No + "/" + Oo), Ix = !0);
        var Po = ea.supportedApiFrameworks;
        !Po.includes(7) && Ix && Po.push(7);
        vd.set("sdk_apis", Po.toString());
        var XH = aC(),
          Jx = Al();
        vd.set("top", XH);
        ea.url ? (vd.set("url", ea.url), vd.set("loc", Jx)) : vd.set("url", Jx);
        for (var Cj = new LH(MH.call(xx, TH, ka(new UH(VH.call(Gx, WH, ka(vd)))))), Kx = r(Cj.keys()), Qo = Kx.next(); !Qo.done; Qo = Kx.next()) {
          var Lx = Qo.value;
          lb(Cj.get(Lx)) && Cj.delete(Lx);
        }
        var Ro = Cj;
      } catch (xj) {
        var Mx;
        X.g().report(181, {
          message: null == (Mx = xj) ? void 0 : Mx.message
        });
        Ro = null;
      } else Ro = null;
      var Nx = Ro;
      Nx && (wc.palSignals = Object.fromEntries(Nx));
      d && (wc.gmaSignals = d);
      wc.isEapLoader = !1;
      return wc;
    };
  lH.prototype.contentComplete = lH.prototype.contentComplete;
  lH.prototype.getSettings = lH.prototype.getSettings;
  lH.prototype.requestAds = lH.prototype.requestAds;
  lH.prototype.getVersion = lH.prototype.getVersion;
  lH.prototype.destroy = lH.prototype.destroy;
  var xH = function () {
    this.j = this.h = "unknown";
    this.g = "0";
    this.adsResponse = null;
    this.adTagUrl = "";
    this.contentTitle = this.contentKeywords = this.contentDuration = null;
    this.forceNonLinearFullSlot = !1;
    this.nonLinearAdSlotWidth = this.nonLinearAdSlotHeight = this.liveStreamPrefetchSeconds = this.linearAdSlotWidth = this.linearAdSlotHeight = 0;
    this.omidAccessModeRules = {};
    this.pageUrl = null;
    this.vastLoadTimeout = 5E3;
  };
  xH.prototype.setAdWillAutoPlay = function (a) {
    this.h = a ? "auto" : "click";
  };
  xH.prototype.setAdWillPlayMuted = function (a) {
    this.j = a ? "muted" : "unmuted";
  };
  xH.prototype.setContinuousPlayback = function (a) {
    this.g = a ? "2" : "1";
  };
  xH.prototype.setContinuousPlayback = xH.prototype.setContinuousPlayback;
  xH.prototype.setAdWillPlayMuted = xH.prototype.setAdWillPlayMuted;
  xH.prototype.setAdWillAutoPlay = xH.prototype.setAdWillAutoPlay;
  function yH(a, b) {
    return a && (a[b] || (a[b] = {}));
  }
  function zH(a, b) {
    var c;
    if (c = void 0 === c ? "undefined" === typeof omidExports ? null : omidExports : c) a = a.split("."), a.slice(0, a.length - 1).reduce(yH, c)[a[a.length - 1]] = b;
  }
  ;
  var AH = new Map([[2, [/^(https?:\/\/|\/\/)?[-a-zA-Z0-9.]+\.moatads\.com\/.*$/]], [3, [/^(https?:\/\/|\/\/)?[-a-zA-Z0-9.]+\.doubleverify\.com\/.*$/, /^(https?:\/\/|\/\/)?c\.[\w\-]+\.com\/vfw\/dv\/.*$/, /^(https?:\/\/|\/\/)?(www\.)?[\w]+\.tv\/r\/s\/d\/.*$/]], [4, [/^(https?:\/\/|\/\/)?[-a-zA-Z0-9.]+\.adsafeprotected\.com\/.*$/]], [5, [/^https?:\/\/(q|cdn)\.adrta\.com\/s\/.*\/(aa|aanf)\.js.*$/, /^https:\/\/cdn\.rta247\.com\/s\/.*\/(aa|aanf)\.js.*$/]], [6, []], [7, [/^(https?:\/\/|\/\/)?[-a-zA-Z0-9.]+\.voicefive\.com\/.*$/, /^(https?:\/\/|\/\/)?[-a-zA-Z0-9.]+\.measuread\.com\/.*$/, /^(https?:\/\/|\/\/)?[-a-zA-Z0-9.]+\.scorecardresearch\.com\/.*$/]], [8, [/^(https?:\/\/|\/\/)?s418\.mxcdn\.net\/bb-serve\/omid-meetrics.*\.js$/]], [9, [/^(https?:\/\/|\/\/)?pagead2\.googlesyndication\.com\/.*$/, /^(https?:\/\/|\/\/)?www\.googletagservices\.com\/.*$/]]]);
  zH("OmidSessionClient.verificationVendorIdForScriptUrl", function (a) {
    for (var b = r(AH.keys()), c = b.next(); !c.done; c = b.next()) {
      c = c.value;
      for (var d = r(AH.get(c)), e = d.next(); !e.done; e = d.next()) if (e.value.test(a)) return c;
    }
    return 1;
  });
  zH("OmidSessionClient.VerificationVendorId", {
    OTHER: 1,
    MOAT: 2,
    DOUBLEVERIFY: 3,
    INTEGRAL_AD_SCIENCE: 4,
    PIXELATE: 5,
    NIELSEN: 6,
    COMSCORE: 7,
    MEETRICS: 8,
    GOOGLE: 9
  });
  x("google.ima.AdCuePoints.POSTROLL", -1, window);
  x("google.ima.AdCuePoints.PREROLL", 0, window);
  x("google.ima.AdDisplayContainer", mG, window);
  x("google.ima.AdError.ErrorCode", U, window);
  x("google.ima.AdError.ErrorCode.VIDEO_ELEMENT_USED", -1, window);
  x("google.ima.AdError.ErrorCode.VIDEO_ELEMENT_REQUIRED", -1, window);
  x("google.ima.AdError.ErrorCode.VAST_MEDIA_ERROR", -1, window);
  x("google.ima.AdError.ErrorCode.ADSLOT_NOT_VISIBLE", -1, window);
  x("google.ima.AdError.ErrorCode.OVERLAY_AD_LOADING_FAILED", -1, window);
  x("google.ima.AdError.ErrorCode.VAST_MALFORMED_RESPONSE", -1, window);
  x("google.ima.AdError.ErrorCode.COMPANION_AD_LOADING_FAILED", -1, window);
  x("google.ima.AdError.Type", nG, window);
  x("google.ima.AdErrorEvent.Type", pG, window);
  x("google.ima.AdEvent.Type", rG, window);
  x("google.ima.AdsLoader", lH, window);
  x("google.ima.AdsManagerLoadedEvent.Type", dH, window);
  x("google.ima.CompanionAdSelectionSettings", uC, window);
  x("google.ima.CompanionAdSelectionSettings.CreativeType", rC);
  x("google.ima.CompanionAdSelectionSettings.ResourceType", sC);
  x("google.ima.CompanionAdSelectionSettings.SizeCriteria", tC);
  x("google.ima.CustomContentLoadedEvent.Type.CUSTOM_CONTENT_LOADED", "deprecated-event", window);
  x("ima.ImaSdkSettings", V, window);
  x("google.ima.settings", tB, window);
  x("google.ima.ImaSdkSettings.CompanionBackfillMode", {
    ALWAYS: "always",
    ON_MASTER_AD: "on_master_ad"
  });
  x("google.ima.ImaSdkSettings.VpaidMode", {
    DISABLED: 0,
    ENABLED: 1,
    INSECURE: 2,
    0: "DISABLED",
    1: "ENABLED",
    2: "INSECURE"
  });
  x("google.ima.AdsRenderingSettings", SE, window);
  x("google.ima.AdsRenderingSettings.AUTO_SCALE", -1, window);
  x("google.ima.AdsRequest", xH, window);
  x("google.ima.VERSION", "3.609.1");
  x("google.ima.OmidAccessMode", {
    LIMITED: "limited",
    DOMAIN: "domain",
    FULL: "full"
  });
  x("google.ima.OmidVerificationVendor", {
    COMSCORE: 7,
    DOUBLEVERIFY: 3,
    GOOGLE: 9,
    INTEGRAL_AD_SCIENCE: 4,
    MEETRICS: 8,
    MOAT: 2,
    NIELSEN: 6,
    PIXELATE: 5,
    OTHER: 1,
    7: "COMSCORE",
    3: "DOUBLEVERIFY",
    9: "GOOGLE",
    4: "INTEGRAL_AD_SCIENCE",
    8: "MEETRICS",
    2: "MOAT",
    6: "NIELSEN",
    5: "PIXELATE",
    1: "OTHER"
  });
  x("google.ima.UiElements", {
    AD_ATTRIBUTION: "adAttribution",
    COUNTDOWN: "countdown"
  });
  x("google.ima.ViewMode", {
    NORMAL: "normal",
    FULLSCREEN: "fullscreen"
  });
  var BH = function (a, b, c) {
      this.h = c;
      0 === b.length && (b = [[]]);
      this.g = b.map(function (d) {
        d = a.concat(d);
        for (var e = [], f = 0, g = 0; f < d.length;) {
          var h = d[f++];
          if (128 > h) e[g++] = String.fromCharCode(h);else if (191 < h && 224 > h) {
            var k = d[f++];
            e[g++] = String.fromCharCode((h & 31) << 6 | k & 63);
          } else if (239 < h && 365 > h) {
            k = d[f++];
            var m = d[f++],
              n = d[f++];
            h = ((h & 7) << 18 | (k & 63) << 12 | (m & 63) << 6 | n & 63) - 65536;
            e[g++] = String.fromCharCode(55296 + (h >> 10));
            e[g++] = String.fromCharCode(56320 + (h & 1023));
          } else k = d[f++], m = d[f++], e[g++] = String.fromCharCode((h & 15) << 12 | (k & 63) << 6 | m & 63);
        }
        return new RegExp(e.join(""));
      });
    },
    CH = function (a, b) {
      return b ? a.g.some(function (c) {
        c = b.match(c);
        return null == c ? !1 : !a.h || 1 <= c.length && "3.609.1" === c[1] || 2 <= c.length && "3.609.1" === c[2] ? !0 : !1;
      }) : !1;
    },
    DH = [94, 40, 63, 58, 104, 116, 116, 112, 115, 63, 58, 41, 63, 47, 47, 105, 109, 97, 115, 100, 107, 92, 46, 103, 111, 111, 103, 108, 101, 97, 112, 105, 115, 92, 46, 99, 111, 109, 47, 106, 115, 47, 40, 115, 100, 107, 108, 111, 97, 100, 101, 114, 124, 99, 111, 114, 101, 41, 47],
    EH = [94, 40, 63, 58, 104, 116, 116, 112, 115, 63, 58, 41, 63, 47, 47, 115, 48, 92, 46, 50, 109, 100, 110, 92, 46, 110, 101, 116, 47, 105, 110, 115, 116, 114, 101, 97, 109, 47, 104, 116, 109, 108, 53, 47],
    FH = [94, 40, 63, 58, 104, 116, 116, 112, 115, 63, 58, 41, 63, 47, 47, 105, 109, 97, 115, 100, 107, 92, 46, 103, 111, 111, 103, 108, 101, 97, 112, 105, 115, 92, 46, 99, 111, 109, 47, 112, 97, 108, 47, 115, 100, 107, 108, 111, 97, 100, 101, 114, 47],
    GH = [[105, 109, 97, 51, 92, 46, 106, 115], [105, 109, 97, 51, 95, 100, 101, 98, 117, 103, 92, 46, 106, 115], [105, 109, 97, 51, 95, 101, 97, 112, 46, 106, 115]],
    HH = [[98, 114, 105, 100, 103, 101, 40, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 41, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108], [98, 114, 105, 100, 103, 101, 40, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 41, 95, 100, 101, 98, 117, 103, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108], [98, 114, 105, 100, 103, 101, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108]],
    IH = [[111, 117, 116, 115, 116, 114, 101, 97, 109, 92, 46, 106, 115], [111, 117, 116, 115, 116, 114, 101, 97, 109, 95, 100, 101, 98, 117, 103, 92, 46, 106, 115]],
    YH = new BH(DH, GH, !1);
  new BH(DH, HH, !0);
  var ZH = new BH(EH, GH, !1);
  new BH(EH, HH, !0);
  var $H = new BH([94, 40, 63, 58, 104, 116, 116, 112, 115, 63, 58, 41, 63, 47, 47, 105, 109, 97, 115, 100, 107, 92, 46, 103, 111, 111, 103, 108, 101, 97, 112, 105, 115, 92, 46, 99, 111, 109, 47, 112, 114, 101, 114, 101, 108, 101, 97, 115, 101, 47, 106, 115, 47, 91, 48, 45, 57, 93, 43, 46, 91, 48, 45, 57, 46, 93, 43, 47], GH, !1),
    aI = new BH([94, 40, 63, 58, 104, 116, 116, 112, 115, 63, 58, 41, 63, 47, 47, 40, 112, 97, 103, 101, 97, 100, 50, 124, 116, 112, 99, 41, 92, 46, 103, 111, 111, 103, 108, 101, 115, 121, 110, 100, 105, 99, 97, 116, 105, 111, 110, 92, 46, 99, 111, 109, 47, 112, 97, 103, 101, 97, 100, 47, 40, 103, 97, 100, 103, 101, 116, 115, 124, 106, 115, 41, 47], [], !1);
  new BH(DH, [[100, 97, 105, 95, 105, 102, 114, 97, 109, 101, 40, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 41, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108], [100, 97, 105, 95, 105, 102, 114, 97, 109, 101, 40, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 41, 95, 100, 101, 98, 117, 103, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108], [100, 97, 105, 95, 105, 102, 114, 97, 109, 101, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108]], !0);
  var bI = new BH(DH, IH, !1),
    cI = new BH(DH, IH, !1);
  new BH(FH, [[112, 97, 108, 46, 106, 115]], !1);
  new BH(FH, [[99, 97, 115, 116, 95, 112, 97, 108, 46, 106, 115]], !1);
  new BH(FH, [[99, 116, 118, 95, 112, 97, 108, 46, 106, 115]], !1);
  function dI(a, b) {
    for (var c = {}, d = 0; d < b.length; c = {
      Tc: c.Tc
    }, d++) if (c.Tc = b[d], a.some(function (e) {
      return function (f) {
        return CH(f, e.Tc.src);
      };
    }(c))) return c.Tc;
    return null;
  }
  ;
  if (!function (a) {
    if (a.some(function (c) {
      return CH(c, C().location.href);
    })) return !0;
    var b = dI(a, document.querySelectorAll && document.querySelector ? document.querySelectorAll("SCRIPT") : document.getElementsByTagName("SCRIPT"));
    null == b && document.querySelectorAll && (b = dI(a, document.querySelectorAll("script")));
    return null != b;
  }([YH, $H, ZH, aI, bI, cI])) throw Error("IMA SDK is either not loaded from a google domain or is not a supported version.");
  sE(tE);
})();