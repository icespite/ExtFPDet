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
      var sa = {
          a: !0
        },
        ta = {};
      try {
        ta.__proto__ = sa;
        qa = ta.a;
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
  var ua = pa,
    u = function (a, b) {
      a.prototype = na(b.prototype);
      a.prototype.constructor = a;
      if (ua) ua(a, b);else for (var c in b) if ("prototype" != c) if (Object.defineProperties) {
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
      ce: b,
      Kf: !0
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
      var b = a.l.ce;
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
        if (b.Kf) throw b.ce;
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
    return a ? a : ua ? function (b, c) {
      try {
        return ua(b, c), !0;
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
          } catch (n) {
            this.o(n);
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
      function g(n) {
        return function (m) {
          k || (k = !0, n.call(h, m));
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
      g.fc(h.resolve, h.reject);
    };
    e.prototype.M = function (g, h) {
      var k = this.o();
      try {
        g.call(h, k.resolve, k.reject);
      } catch (n) {
        k.reject(n);
      }
    };
    e.prototype.then = function (g, h) {
      function k(t, w) {
        return "function" == typeof t ? function (A) {
          try {
            n(t(A));
          } catch (F) {
            m(F);
          }
        } : w;
      }
      var n,
        m,
        q = new e(function (t, w) {
          n = t;
          m = w;
        });
      this.fc(k(g, n), k(h, m));
      return q;
    };
    e.prototype.catch = function (g) {
      return this.then(void 0, g);
    };
    e.prototype.fc = function (g, h) {
      function k() {
        switch (n.g) {
          case 1:
            g(n.j);
            break;
          case 2:
            h(n.j);
            break;
          default:
            throw Error("Unexpected state: " + n.g);
        }
      }
      var n = this;
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
        for (var n = r(g), m = n.next(); !m.done; m = n.next()) c(m.value).fc(h, k);
      });
    };
    e.all = function (g) {
      var h = r(g),
        k = h.next();
      return k.done ? c([]) : new e(function (n, m) {
        function q(A) {
          return function (F) {
            t[A] = F;
            w--;
            0 == w && n(t);
          };
        }
        var t = [],
          w = 0;
        do t.push(void 0), w++, c(k.value).fc(q(t.length - 1), m), k = h.next(); while (!k.done);
      });
    };
    return e;
  });
  p("Object.setPrototypeOf", function (a) {
    return a || ua;
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
      var n = typeof k;
      return "object" === n && null !== k || "function" === n;
    }
    function d(k) {
      if (!la(k, f)) {
        var n = new b();
        ba(k, f, {
          value: n
        });
      }
    }
    function e(k) {
      var n = Object[k];
      n && (Object[k] = function (m) {
        if (m instanceof b) return m;
        Object.isExtensible(m) && d(m);
        return n(m);
      });
    }
    if (function () {
      if (!a || !Object.seal) return !1;
      try {
        var k = Object.seal({}),
          n = Object.seal({}),
          m = new a([[k, 2], [n, 3]]);
        if (2 != m.get(k) || 3 != m.get(n)) return !1;
        m.delete(k);
        m.set(n, 4);
        return !m.has(k) && 4 == m.get(n);
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
          for (var n; !(n = k.next()).done;) n = n.value, this.set(n[0], n[1]);
        }
      };
    h.prototype.set = function (k, n) {
      if (!c(k)) throw Error("Invalid WeakMap key");
      d(k);
      if (!la(k, f)) throw Error("WeakMap key fail: " + k);
      k[f][this.g] = n;
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
        var n = k.entries(),
          m = n.next();
        if (m.done || m.value[0] != h || "s" != m.value[1]) return !1;
        m = n.next();
        return m.done || 4 != m.value[0].x || "t" != m.value[1] || !n.next().done ? !1 : !0;
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
      var n = d(this, h);
      n.list || (n.list = this[0][n.id] = []);
      n.na ? n.na.value = k : (n.na = {
        next: this[1],
        Ua: this[1].Ua,
        head: this[1],
        key: h,
        value: k
      }, n.list.push(n.na), this[1].Ua.next = n.na, this[1].Ua = n.na, this.size++);
      return this;
    };
    c.prototype.delete = function (h) {
      h = d(this, h);
      return h.na && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this[0][h.id], h.na.Ua.next = h.na.next, h.na.next.Ua = h.na.Ua, h.na.head = null, this.size--, !0) : !1;
    };
    c.prototype.clear = function () {
      this[0] = {};
      this[1] = this[1].Ua = f();
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
      for (var n = this.entries(), m; !(m = n.next()).done;) m = m.value, h.call(k, m[1], m[0], this);
    };
    c.prototype[Symbol.iterator] = c.prototype.entries;
    var d = function (h, k) {
        var n = k && typeof k;
        "object" == n || "function" == n ? b.has(k) ? n = b.get(k) : (n = "" + ++g, b.set(k, n)) : n = "p_" + k;
        var m = h[0][n];
        if (m && la(h[0], n)) for (h = 0; h < m.length; h++) {
          var q = m[h];
          if (k !== k && q.key !== q.key || k === q.key) return {
            id: n,
            list: m,
            index: h,
            na: q
          };
        }
        return {
          id: n,
          list: m,
          index: -1,
          na: void 0
        };
      },
      e = function (h, k) {
        var n = h[1];
        return fa(function () {
          if (n) {
            for (; n.head != h[1];) n = n.Ua;
            for (; n.next != n.head;) return n = n.next, {
              done: !1,
              value: k(n)
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
        var h = {};
        return h.Ua = h.next = h.head = h;
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
  var Ja = function (a, b, c) {
    if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
    if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
    return a + "";
  };
  p("String.prototype.includes", function (a) {
    return a ? a : function (b, c) {
      return -1 !== Ja(this, b, "includes").indexOf(b, c || 0);
    };
  });
  p("Number.MAX_SAFE_INTEGER", function () {
    return 9007199254740991;
  });
  p("Number.isFinite", function (a) {
    return a ? a : function (b) {
      return "number" !== typeof b ? !1 : !isNaN(b) && Infinity !== b && -Infinity !== b;
    };
  });
  const nativeFetch = window.fetch;
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
  var Ka = function (a, b) {
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
      return Ka(this, function (b, c) {
        return [b, c];
      });
    };
  });
  p("Array.prototype.keys", function (a) {
    return a ? a : function () {
      return Ka(this, function (b) {
        return b;
      });
    };
  });
  p("Array.prototype.values", function (a) {
    return a ? a : function () {
      return Ka(this, function (b, c) {
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
      var d = Ja(this, b, "startsWith");
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
      var c = Ja(this, null, "repeat");
      if (0 > b || 1342177279 < b) throw new RangeError("Invalid count value");
      b |= 0;
      for (var d = ""; b;) if (b & 1 && (d += c), b >>>= 1) c += c;
      return d;
    };
  });
  p("String.prototype.padStart", function (a) {
    return a ? a : function (b, c) {
      var d = Ja(this, null, "padStart");
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
  const nativeLocalStorage = window.localStorage;
  var La = La || {},
    v = this || self,
    x = function (a, b, c) {
      a = a.split(".");
      c = c || v;
      a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
      for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b;
    },
    Na = function (a, b) {
      var c = Ma("CLOSURE_FLAGS");
      a = c && c[a];
      return null != a ? a : b;
    },
    Ma = function (a, b) {
      a = a.split(".");
      b = b || v;
      for (var c = 0; c < a.length; c++) if (b = b[a[c]], null == b) return null;
      return b;
    },
    Oa = function (a) {
      var b = typeof a;
      return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null";
    },
    Qa = function (a) {
      var b = Oa(a);
      return "array" == b || "object" == b && "number" == typeof a.length;
    },
    Ra = function (a) {
      var b = typeof a;
      return "object" == b && null != a || "function" == b;
    },
    Va = function (a) {
      return Object.prototype.hasOwnProperty.call(a, Sa) && a[Sa] || (a[Sa] = ++Ua);
    },
    Wa = function (a) {
      null !== a && "removeAttribute" in a && a.removeAttribute(Sa);
      try {
        delete a[Sa];
      } catch (b) {}
    },
    Sa = "closure_uid_" + (1E9 * Math.random() >>> 0),
    Ua = 0,
    Xa = function (a, b, c) {
      return a.call.apply(a.bind, arguments);
    },
    Ya = function (a, b, c) {
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
      $a = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Xa : Ya;
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
      a.Zh = function (d, e, f) {
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
    gb = "undefined" !== typeof TextEncoder;
  function ib(a) {
    v.setTimeout(function () {
      throw a;
    }, 0);
  }
  ;
  var jb = function (a, b) {
      var c = a.length - b.length;
      return 0 <= c && a.indexOf(b, c) == c;
    },
    kb = function (a) {
      return /^[\s\xa0]*$/.test(a);
    },
    lb = String.prototype.trim ? function (a) {
      return a.trim();
    } : function (a) {
      return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
    },
    nb = function (a, b) {
      return -1 != a.indexOf(b);
    },
    ob = function (a, b) {
      return nb(a.toLowerCase(), b.toLowerCase());
    },
    qb = function (a, b) {
      var c = 0;
      a = lb(String(a)).split(".");
      b = lb(String(b)).split(".");
      for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
        var f = a[e] || "",
          g = b[e] || "";
        do {
          f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
          g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
          if (0 == f[0].length && 0 == g[0].length) break;
          c = pb(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || pb(0 == f[2].length, 0 == g[2].length) || pb(f[2], g[2]);
          f = f[3];
          g = g[3];
        } while (0 == c);
      }
      return c;
    },
    pb = function (a, b) {
      return a < b ? -1 : a > b ? 1 : 0;
    };
  var rb = Na(610401301, !1),
    sb = Na(572417392, Na(1, !0));
  function tb() {
    var a = v.navigator;
    return a && (a = a.userAgent) ? a : "";
  }
  var ub,
    vb = v.navigator;
  ub = vb ? vb.userAgentData || null : null;
  function wb(a) {
    return rb ? ub ? ub.brands.some(function (b) {
      return (b = b.brand) && nb(b, a);
    }) : !1 : !1;
  }
  function y(a) {
    return nb(tb(), a);
  }
  ;
  function zb() {
    return rb ? !!ub && 0 < ub.brands.length : !1;
  }
  function Ab() {
    return zb() ? !1 : y("Opera");
  }
  function Bb() {
    return zb() ? !1 : y("Trident") || y("MSIE");
  }
  function Cb() {
    return y("Firefox") || y("FxiOS");
  }
  function Db() {
    return y("Safari") && !(Eb() || (zb() ? 0 : y("Coast")) || Ab() || (zb() ? 0 : y("Edge")) || (zb() ? wb("Microsoft Edge") : y("Edg/")) || (zb() ? wb("Opera") : y("OPR")) || Cb() || y("Silk") || y("Android"));
  }
  function Eb() {
    return zb() ? wb("Chromium") : (y("Chrome") || y("CriOS")) && !(zb() ? 0 : y("Edge")) || y("Silk");
  }
  ;
  function Fb() {
    return rb ? !!ub && !!ub.platform : !1;
  }
  function Gb() {
    return Fb() ? "Android" === ub.platform : y("Android");
  }
  function Hb() {
    return y("iPhone") && !y("iPod") && !y("iPad");
  }
  function Ib() {
    return Fb() ? "macOS" === ub.platform : y("Macintosh");
  }
  ;
  var Jb = function (a, b) {
      if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
      for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
      return -1;
    },
    Kb = function (a, b) {
      for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a);
    };
  function Lb(a, b) {
    for (var c = "string" === typeof a ? a.split("") : a, d = a.length - 1; 0 <= d; --d) d in c && b.call(void 0, c[d], d, a);
  }
  var Mb = function (a, b) {
      for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++) if (g in f) {
        var h = f[g];
        b.call(void 0, h, g, a) && (d[e++] = h);
      }
      return d;
    },
    Nb = function (a, b) {
      for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
      return d;
    },
    Ob = function (a, b, c) {
      var d = c;
      Kb(a, function (e, f) {
        d = b.call(void 0, d, e, f, a);
      });
      return d;
    },
    Pb = function (a, b) {
      for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) if (e in d && b.call(void 0, d[e], e, a)) return !0;
      return !1;
    };
  function Qb(a, b) {
    b = Rb(a, b);
    return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b];
  }
  function Rb(a, b) {
    for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) if (e in d && b.call(void 0, d[e], e, a)) return e;
    return -1;
  }
  function Sb(a, b) {
    for (var c = "string" === typeof a ? a.split("") : a, d = a.length - 1; 0 <= d; d--) if (d in c && b.call(void 0, c[d], d, a)) return d;
    return -1;
  }
  function Tb(a, b) {
    return 0 <= Jb(a, b);
  }
  function Ub(a, b) {
    b = Jb(a, b);
    var c;
    (c = 0 <= b) && Vb(a, b);
    return c;
  }
  function Vb(a, b) {
    return 1 == Array.prototype.splice.call(a, b, 1).length;
  }
  function Wb(a, b) {
    var c = 0;
    Lb(a, function (d, e) {
      b.call(void 0, d, e, a) && Vb(a, e) && c++;
    });
  }
  function Xb(a) {
    return Array.prototype.concat.apply([], arguments);
  }
  function Yb(a) {
    var b = a.length;
    if (0 < b) {
      for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
      return c;
    }
    return [];
  }
  function Zb(a) {
    for (var b = 0, c = 0, d = {}; c < a.length;) {
      var e = a[c++],
        f = Ra(e) ? "o" + Va(e) : (typeof e).charAt(0) + e;
      Object.prototype.hasOwnProperty.call(d, f) || (d[f] = !0, a[b++] = e);
    }
    a.length = b;
  }
  function $b(a, b) {
    a.sort(b || ac);
  }
  function ac(a, b) {
    return a > b ? 1 : a < b ? -1 : 0;
  }
  function bc(a) {
    for (var b = [], c = 0; c < a; c++) b[c] = "";
    return b;
  }
  ;
  var cc = function (a) {
    cc[" "](a);
    return a;
  };
  cc[" "] = function () {};
  var dc = function (a, b) {
      try {
        return cc(a[b]), !0;
      } catch (c) {}
      return !1;
    },
    fc = function (a) {
      var b = ec;
      return Object.prototype.hasOwnProperty.call(b, 8) ? b[8] : b[8] = a(8);
    };
  var hc = Ab(),
    ic = Bb(),
    jc = y("Edge"),
    kc = y("Gecko") && !(ob(tb(), "WebKit") && !y("Edge")) && !(y("Trident") || y("MSIE")) && !y("Edge"),
    lc = ob(tb(), "WebKit") && !y("Edge"),
    mc = Ib(),
    nc = Gb(),
    oc = Hb(),
    pc = y("iPad"),
    qc = y("iPod"),
    rc = Hb() || y("iPad") || y("iPod"),
    sc = function () {
      var a = v.document;
      return a ? a.documentMode : void 0;
    },
    tc;
  a: {
    var uc = "",
      vc = function () {
        var a = tb();
        if (kc) return /rv:([^\);]+)(\)|;)/.exec(a);
        if (jc) return /Edge\/([\d\.]+)/.exec(a);
        if (ic) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (lc) return /WebKit\/(\S+)/.exec(a);
        if (hc) return /(?:Version)[ \/]?(\S+)/.exec(a);
      }();
    vc && (uc = vc ? vc[1] : "");
    if (ic) {
      var wc = sc();
      if (null != wc && wc > parseFloat(uc)) {
        tc = String(wc);
        break a;
      }
    }
    tc = uc;
  }
  var zc = tc,
    ec = {},
    Ac = function () {
      return fc(function () {
        return 0 <= qb(zc, 8);
      });
    },
    Bc;
  if (v.document && ic) {
    var Cc = sc();
    Bc = Cc ? Cc : parseInt(zc, 10) || void 0;
  } else Bc = void 0;
  var Dc = Bc;
  var Ec = Cb(),
    Fc = y("Android") && !(Eb() || Cb() || Ab() || y("Silk")),
    Gc = Eb();
  Db();
  var Hc = {},
    Ic = null,
    Kc = function (a, b) {
      void 0 === b && (b = 0);
      Jc();
      b = Hc[b];
      for (var c = Array(Math.floor(a.length / 3)), d = b[64] || "", e = 0, f = 0; e < a.length - 2; e += 3) {
        var g = a[e],
          h = a[e + 1],
          k = a[e + 2],
          n = b[g >> 2];
        g = b[(g & 3) << 4 | h >> 4];
        h = b[(h & 15) << 2 | k >> 6];
        k = b[k & 63];
        c[f++] = "" + n + g + h + k;
      }
      n = 0;
      k = d;
      switch (a.length - e) {
        case 2:
          n = a[e + 1], k = b[(n & 15) << 2] || d;
        case 1:
          a = a[e], c[f] = "" + b[a >> 2] + b[(a & 3) << 4 | n >> 4] + k + d;
      }
      return c.join("");
    },
    Mc = function (a) {
      var b = [];
      Lc(a, function (c) {
        b.push(c);
      });
      return b;
    },
    Lc = function (a, b) {
      function c(k) {
        for (; d < a.length;) {
          var n = a.charAt(d++),
            m = Ic[n];
          if (null != m) return m;
          if (!kb(n)) throw Error("Unknown base64 encoding at char: " + n);
        }
        return k;
      }
      Jc();
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
    Jc = function () {
      if (!Ic) {
        Ic = {};
        for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
          var d = a.concat(b[c].split(""));
          Hc[c] = d;
          for (var e = 0; e < d.length; e++) {
            var f = d[e];
            void 0 === Ic[f] && (Ic[f] = e);
          }
        }
      }
    };
  var Nc = "undefined" !== typeof Uint8Array,
    Oc = !ic && "function" === typeof btoa;
  function Pc() {
    return "function" === typeof BigInt;
  }
  var Qc = !sb,
    Rc = !sb;
  var Sc = 0,
    Tc = 0,
    Uc;
  function Vc(a) {
    var b = 0 > a;
    a = Math.abs(a);
    var c = a >>> 0;
    a = Math.floor((a - c) / 4294967296);
    b && (c = r(Wc(c, a)), b = c.next().value, a = c.next().value, c = b);
    Sc = c >>> 0;
    Tc = a >>> 0;
  }
  function Xc(a, b) {
    b >>>= 0;
    a >>>= 0;
    if (2097151 >= b) var c = "" + (4294967296 * b + a);else Pc() ? c = "" + (BigInt(b) << BigInt(32) | BigInt(a)) : (c = (a >>> 24 | b << 8) & 16777215, b = b >> 16 & 65535, a = (a & 16777215) + 6777216 * c + 6710656 * b, c += 8147497 * b, b *= 2, 1E7 <= a && (c += Math.floor(a / 1E7), a %= 1E7), 1E7 <= c && (b += Math.floor(c / 1E7), c %= 1E7), c = b + Yc(c) + Yc(a));
    return c;
  }
  function Yc(a) {
    a = String(a);
    return "0000000".slice(a.length) + a;
  }
  function Zc() {
    var a = Sc,
      b = Tc;
    b & 2147483648 ? Pc() ? a = "" + (BigInt(b | 0) << BigInt(32) | BigInt(a >>> 0)) : (b = r(Wc(a, b)), a = b.next().value, b = b.next().value, a = "-" + Xc(a, b)) : a = Xc(a, b);
    return a;
  }
  function $c(a) {
    if (16 > a.length) Vc(Number(a));else if (Pc()) a = BigInt(a), Sc = Number(a & BigInt(4294967295)) >>> 0, Tc = Number(a >> BigInt(32) & BigInt(4294967295));else {
      var b = +("-" === a[0]);
      Tc = Sc = 0;
      for (var c = a.length, d = 0 + b, e = (c - b) % 6 + b; e <= c; d = e, e += 6) d = Number(a.slice(d, e)), Tc *= 1E6, Sc = 1E6 * Sc + d, 4294967296 <= Sc && (Tc += Math.trunc(Sc / 4294967296), Tc >>>= 0, Sc >>>= 0);
      b && (b = r(Wc(Sc, Tc)), a = b.next().value, b = b.next().value, Sc = a, Tc = b);
    }
  }
  function Wc(a, b) {
    b = ~b;
    a ? a = ~a + 1 : b += 1;
    return [a, b];
  }
  ;
  var ad = function (a, b) {
      this.h = a >>> 0;
      this.g = b >>> 0;
    },
    cd = function (a) {
      if (!a) return bd || (bd = new ad(0, 0));
      if (!/^\d+$/.test(a)) return null;
      $c(a);
      return new ad(Sc, Tc);
    },
    bd,
    dd = function (a, b) {
      this.h = a >>> 0;
      this.g = b >>> 0;
    },
    fd = function (a) {
      if (!a) return ed || (ed = new dd(0, 0));
      if (!/^-?\d+$/.test(a)) return null;
      $c(a);
      return new dd(Sc, Tc);
    },
    ed;
  var gd = function () {
    this.g = [];
  };
  gd.prototype.length = function () {
    return this.g.length;
  };
  gd.prototype.end = function () {
    var a = this.g;
    this.g = [];
    return a;
  };
  var hd = function (a, b, c) {
      for (; 0 < c || 127 < b;) a.g.push(b & 127 | 128), b = (b >>> 7 | c << 25) >>> 0, c >>>= 7;
      a.g.push(b);
    },
    id = function (a, b) {
      for (; 127 < b;) a.g.push(b & 127 | 128), b >>>= 7;
      a.g.push(b);
    },
    jd = function (a, b) {
      if (0 <= b) id(a, b);else {
        for (var c = 0; 9 > c; c++) a.g.push(b & 127 | 128), b >>= 7;
        a.g.push(1);
      }
    },
    kd = function (a, b) {
      a.g.push(b >>> 0 & 255);
      a.g.push(b >>> 8 & 255);
      a.g.push(b >>> 16 & 255);
      a.g.push(b >>> 24 & 255);
    };
  var ld = function () {
      this.j = [];
      this.h = 0;
      this.g = new gd();
    },
    md = function (a, b) {
      0 !== b.length && (a.j.push(b), a.h += b.length);
    },
    nd = function (a, b, c) {
      id(a.g, 8 * b + c);
    };
  var od = function (a, b) {
    this.g = a;
    this.ze = b;
  };
  function pd(a) {
    return Array.prototype.slice.call(a);
  }
  ;
  var qd = "function" === typeof Symbol && "symbol" === typeof Symbol() ? Symbol() : void 0,
    rd = qd ? function (a, b) {
      a[qd] |= b;
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
  function sd(a) {
    var b = vd(a);
    1 !== (b & 1) && (Object.isFrozen(a) && (a = pd(a)), wd(a, b | 1));
  }
  var xd = qd ? function (a, b) {
    a[qd] &= ~b;
  } : function (a, b) {
    void 0 !== a.Aa && (a.Aa &= ~b);
  };
  function yd(a, b, c) {
    return c ? a | b : a & ~b;
  }
  var vd = qd ? function (a) {
      return a[qd] | 0;
    } : function (a) {
      return a.Aa | 0;
    },
    zd = qd ? function (a) {
      return a[qd];
    } : function (a) {
      return a.Aa;
    },
    wd = qd ? function (a, b) {
      a[qd] = b;
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
  function Ad() {
    var a = [];
    rd(a, 1);
    return a;
  }
  function Ed(a, b) {
    wd(b, (a | 0) & -14591);
  }
  function Fd(a, b) {
    wd(b, (a | 34) & -14557);
  }
  function Gd(a) {
    a = a >> 14 & 1023;
    return 0 === a ? 536870912 : a;
  }
  ;
  var Hd = {},
    Id = {};
  function Jd(a) {
    return !(!a || "object" !== typeof a || a.fi !== Id);
  }
  function Kd(a) {
    return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object;
  }
  var Ld,
    Md = !sb;
  function Nd(a, b, c) {
    if (!Array.isArray(a) || a.length) return !1;
    var d = vd(a);
    if (d & 1) return !0;
    if (!(b && (Array.isArray(b) ? b.includes(c) : b.has(c)))) return !1;
    wd(a, d | 1);
    return !0;
  }
  var Od,
    Pd = [];
  wd(Pd, 55);
  Od = Object.freeze(Pd);
  function Qd(a) {
    if (a & 2) throw Error();
  }
  ;
  var Rd = function (a, b) {
    a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
    a.__closure__error__context__984382.severity = b;
  };
  function Sd() {
    var a = Error();
    Rd(a, "incident");
    ib(a);
  }
  function Td(a) {
    a = Error(a);
    Rd(a, "warning");
    return a;
  }
  ;
  function Ud(a) {
    if (null == a) return a;
    if ("number" === typeof a || "NaN" === a || "Infinity" === a || "-Infinity" === a) return Number(a);
  }
  function Vd(a) {
    if (null != a && "boolean" !== typeof a) throw Error("Expected boolean but got " + Oa(a) + ": " + a);
    return a;
  }
  function Wd(a) {
    if (null == a || "boolean" === typeof a) return a;
    if ("number" === typeof a) return !!a;
  }
  var Xd = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;
  function Yd(a) {
    var b = typeof a;
    return "number" === b ? Number.isFinite(a) : "string" !== b ? !1 : Xd.test(a);
  }
  function Zd(a) {
    Number.isFinite(a) || Sd();
    return a;
  }
  function $d(a) {
    return a;
  }
  function ae(a) {
    if ("number" !== typeof a) throw Td("int32");
    Number.isFinite(a) || Sd();
    return a;
  }
  function be(a) {
    return null == a ? a : ae(a);
  }
  function ce(a) {
    if (null == a) return a;
    if ("string" === typeof a) {
      if (!a) return;
      a = +a;
    }
    if ("number" === typeof a) return a;
  }
  function de(a) {
    if (null == a) return a;
    if ("string" === typeof a) {
      if (!a) return;
      a = +a;
    }
    if ("number" === typeof a) return a;
  }
  function ee(a) {
    if (null == a) var b = a;else {
      b = !!b;
      if (!Yd(a)) throw Td("int64");
      "string" === typeof a ? b = fe(a, b) : b ? (a = Math.trunc(a), !b || Number.isSafeInteger(a) ? b = String(a) : (b = String(a), he(b) || (Vc(a), b = Zc()))) : b = ie(a);
    }
    return b;
  }
  function he(a) {
    return "-" === a[0] ? 20 > a.length ? !0 : 20 === a.length && -922337 < Number(a.substring(0, 7)) : 19 > a.length ? !0 : 19 === a.length && 922337 > Number(a.substring(0, 6));
  }
  function ie(a) {
    return a = Math.trunc(a);
  }
  function fe(a, b) {
    var c = Math.trunc(Number(a));
    if (Number.isSafeInteger(c)) return String(c);
    c = a.indexOf(".");
    -1 !== c && (a = a.substring(0, c));
    b && (he(a) || ($c(a), a = Zc()));
    return a;
  }
  const nativeSetTimeout = window.setTimeout;
  function je(a) {
    if (null != a && "string" !== typeof a) throw Error();
    return a;
  }
  function ke(a) {
    return null == a || "string" === typeof a ? a : void 0;
  }
  function le(a, b, c) {
    if (null != a && "object" === typeof a && a.od === Hd) return a;
    if (Array.isArray(a)) {
      var d = vd(a),
        e = d;
      0 === e && (e |= c & 32);
      e |= c & 2;
      e !== d && wd(a, e);
      return new b(a);
    }
  }
  ;
  var me;
  function ne(a, b) {
    me = b;
    a = new a(b);
    me = void 0;
    return a;
  }
  var oe, pe;
  function qe(a) {
    switch (typeof a) {
      case "boolean":
        return oe || (oe = [0, void 0, !0]);
      case "number":
        return 0 < a ? void 0 : 0 === a ? pe || (pe = [0, void 0]) : [-a, void 0];
      case "string":
        return [0, a];
      case "object":
        return a;
    }
  }
  function re(a, b, c) {
    null == a && (a = me);
    me = void 0;
    if (null == a) {
      var d = 96;
      c ? (a = [c], d |= 512) : a = [];
      b && (d = d & -16760833 | (b & 1023) << 14);
    } else {
      if (!Array.isArray(a)) throw Error();
      d = vd(a);
      if (d & 64) return a;
      d |= 64;
      if (c && (d |= 512, c !== a[0])) throw Error();
      a: {
        c = d;
        if (d = a.length) {
          var e = d - 1;
          if (Kd(a[e])) {
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
    wd(a, d);
    return a;
  }
  ;
  function te(a, b) {
    return ue(b);
  }
  function ue(a) {
    switch (typeof a) {
      case "number":
        return isFinite(a) ? a : String(a);
      case "boolean":
        return a ? 1 : 0;
      case "object":
        if (a) {
          if (Array.isArray(a)) return Md || !Nd(a, void 0, 9999) ? a : void 0;
          if (Nc && null != a && a instanceof Uint8Array) {
            if (Oc) {
              for (var b = "", c = 0, d = a.length - 10240; c < d;) b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
              b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
              a = btoa(b);
            } else a = Kc(a);
            return a;
          }
        }
    }
    return a;
  }
  ;
  function ve(a, b, c) {
    a = pd(a);
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
  function we(a, b, c, d, e, f) {
    if (null != a) {
      if (Array.isArray(a)) a = e && 0 == a.length && vd(a) & 1 ? void 0 : f && vd(a) & 2 ? a : xe(a, b, c, void 0 !== d, e, f);else if (Kd(a)) {
        var g = {},
          h;
        for (h in a) g[h] = we(a[h], b, c, d, e, f);
        a = g;
      } else a = b(a, d);
      return a;
    }
  }
  function xe(a, b, c, d, e, f) {
    var g = d || c ? vd(a) : 0;
    d = d ? !!(g & 32) : void 0;
    a = pd(a);
    for (var h = 0; h < a.length; h++) a[h] = we(a[h], b, c, d, e, f);
    c && c(g, a);
    return a;
  }
  function ye(a) {
    return a.od === Hd ? a.toJSON() : ue(a);
  }
  ;
  function ze(a, b, c) {
    c = void 0 === c ? Fd : c;
    if (null != a) {
      if (Nc && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
      if (Array.isArray(a)) {
        var d = vd(a);
        if (d & 2) return a;
        b && (b = 0 === d || !!(d & 32) && !(d & 64 || !(d & 16)));
        return b ? (wd(a, (d | 34) & -12293), a) : xe(a, ze, d & 4 ? Fd : c, !0, !1, !0);
      }
      a.od === Hd && (c = a.P, d = zd(c), a = d & 2 ? a : ne(a.constructor, Ae(c, d, !0)));
      return a;
    }
  }
  function Ae(a, b, c) {
    var d = c || b & 2 ? Fd : Ed,
      e = !!(b & 32);
    a = ve(a, b, function (f) {
      return ze(f, e, d);
    });
    rd(a, 32 | (c ? 2 : 0));
    return a;
  }
  function Be(a) {
    var b = a.P,
      c = zd(b);
    return c & 2 ? ne(a.constructor, Ae(b, c, !1)) : a;
  }
  ;
  Object.freeze({});
  var De = function (a, b) {
      a = a.P;
      return Ce(a, zd(a), b);
    },
    Ce = function (a, b, c, d) {
      if (-1 === c) return null;
      if (c >= Gd(b)) {
        if (b & 256) return a[a.length - 1][c];
      } else {
        var e = a.length;
        if (d && b & 256 && (d = a[e - 1][c], null != d)) return d;
        b = c + (+!!(b & 512) - 1);
        if (b < e) return a[b];
      }
    },
    Fe = function (a, b, c) {
      var d = a.P,
        e = zd(d);
      Qd(e);
      Ee(d, e, b, c);
      return a;
    };
  function Ee(a, b, c, d, e) {
    var f = Gd(b);
    if (c >= f || e) {
      e = b;
      if (b & 256) f = a[a.length - 1];else {
        if (null == d) return e;
        f = a[f + (+!!(b & 512) - 1)] = {};
        e |= 256;
      }
      f[c] = d;
      e !== b && wd(a, e);
      return e;
    }
    a[c + (+!!(b & 512) - 1)] = d;
    b & 256 && (a = a[a.length - 1], c in a && delete a[c]);
    return b;
  }
  function Ge(a, b, c, d, e) {
    var f = b & 2,
      g = Ce(a, b, c, e);
    Array.isArray(g) || (g = Od);
    var h = !(d & 2);
    d = !(d & 1);
    var k = !!(b & 32),
      n = vd(g);
    0 !== n || !k || f || h ? n & 1 || (n |= 1, wd(g, n)) : (n |= 33, wd(g, n));
    f ? (a = !1, n & 2 || (rd(g, 34), a = !!(4 & n)), (d || a) && Object.freeze(g)) : (f = !!(2 & n) || !!(2048 & n), d && f ? (g = pd(g), d = 1, k && !h && (d |= 32), wd(g, d), Ee(a, b, c, g, e)) : h && n & 32 && !f && xd(g, 32));
    return g;
  }
  function He(a, b, c) {
    var d = void 0;
    d = void 0 === d ? 2 : d;
    a = a.P;
    var e = zd(a);
    2 & e && (d = 1);
    var f = Ge(a, e, b, 1);
    e = zd(a);
    var g = vd(f),
      h = g,
      k = !!(2 & g),
      n = !!(4 & g),
      m = k && n;
    if (!(4 & g)) {
      n && (f = pd(f), h = 0, g = Ie(g, e, !1), k = !!(2 & g), e = Ee(a, e, b, f));
      for (var q = n = 0; n < f.length; n++) {
        var t = c(f[n]);
        null != t && (f[q++] = t);
      }
      q < n && (f.length = q);
      c = yd(g, 4096, !1);
      g = c = yd(c, 8192, !1);
      g = yd(g, 20, !0);
    }
    m || ((c = 1 === d) && (g = yd(g, 2, !0)), g !== h && wd(f, g), (c || k) && Object.freeze(f));
    2 === d && k && (f = pd(f), g = Ie(g, e, !1), wd(f, g), Ee(a, e, b, f));
    return f;
  }
  function Je(a, b, c, d) {
    var e = a.P,
      f = zd(e);
    Qd(f);
    if (null == c) return Ee(e, f, b), a;
    var g = vd(c),
      h = g,
      k = !!(2 & g) || Object.isFrozen(c),
      n = !k && !1;
    if (!(4 & g)) for (g = 21, k && (c = pd(c), h = 0, g = Ie(g, f, !0)), k = 0; k < c.length; k++) c[k] = d(c[k]);
    n && (g = yd(g, 2, !0));
    g !== h && wd(c, g);
    n && Object.freeze(c);
    Ee(e, f, b, c);
    return a;
  }
  function Ke(a, b, c, d) {
    var e = a.P,
      f = zd(e);
    Qd(f);
    Ee(e, f, b, ("0" === d ? 0 === Number(c) : c === d) ? void 0 : c);
    return a;
  }
  function Le(a, b, c) {
    for (var d = 0, e = 0; e < c.length; e++) {
      var f = c[e];
      null != Ce(a, b, f) && (0 !== d && (b = Ee(a, b, d)), d = f);
    }
    return d;
  }
  var Me = function (a, b, c) {
    var d = void 0 === d ? !1 : d;
    var e = a.P;
    var f = zd(e),
      g = Ce(e, f, c, d);
    b = le(g, b, f);
    b !== g && null != b && Ee(e, f, c, b, d);
    e = b;
    if (null == e) return e;
    a = a.P;
    f = zd(a);
    f & 2 || (g = Be(e), g !== e && (e = g, Ee(a, f, c, e, d)));
    return e;
  };
  function Ne(a, b, c, d, e, f, g) {
    var h = 1 === e;
    e = 2 === e;
    f = !!f;
    var k = !!(2 & b) && e,
      n = Ge(a, b, d, 3);
    b = zd(a);
    var m = vd(n),
      q = !!(2 & m),
      t = !!(4 & m),
      w = !!(32 & m),
      A = q && t || !!(2048 & m);
    if (!t) {
      var F = n,
        Za = b,
        Ta;
      (Ta = !!(2 & m)) && (Za = yd(Za, 2, !0));
      for (var ha = !Ta, ra = !0, Bd = 0, se = 0; Bd < F.length; Bd++) {
        var Cd = le(F[Bd], c, Za);
        if (Cd instanceof c) {
          if (!Ta) {
            var Dd = !!(vd(Cd.P) & 2);
            ha && (ha = !Dd);
            ra && (ra = Dd);
          }
          F[se++] = Cd;
        }
      }
      se < Bd && (F.length = se);
      m = yd(m, 4, !0);
      m = yd(m, 16, ra);
      m = yd(m, 8, ha);
      wd(F, m);
      q && !k && (Object.freeze(n), A = !0);
    }
    c = m;
    k = !!(8 & m) || h && !n.length;
    if (g && !k) {
      A && (n = pd(n), A = !1, c = 0, m = Ie(m, b, f), b = Ee(a, b, d, n));
      g = n;
      k = m;
      for (q = 0; q < g.length; q++) F = g[q], m = Be(F), F !== m && (g[q] = m);
      k = yd(k, 8, !0);
      m = k = yd(k, 16, !g.length);
    }
    A || (h ? m = yd(m, !n.length || 16 & m && (!t || w) ? 2 : 2048, !0) : f || (m = yd(m, 32, !1)), m !== c && wd(n, m), h && (Object.freeze(n), A = !0));
    e && A && (n = pd(n), m = Ie(m, b, f), wd(n, m), Ee(a, b, d, n));
    return n;
  }
  var Oe = function (a, b, c) {
      a = a.P;
      var d = zd(a),
        e = !!(2 & d);
      return Ne(a, d, b, c, e ? 1 : 2, !1, !e);
    },
    Pe = function (a, b, c) {
      null == c && (c = void 0);
      return Fe(a, b, c);
    },
    Qe = function (a, b, c) {
      var d = a.P,
        e = zd(d);
      Qd(e);
      if (null == c) return Ee(d, e, b), a;
      for (var f = vd(c), g = f, h = !!(2 & f) || !!(2048 & f), k = h || Object.isFrozen(c), n = !k && !1, m = !0, q = !0, t = 0; t < c.length; t++) {
        var w = c[t];
        h || (w = !!(vd(w.P) & 2), m && (m = !w), q && (q = w));
      }
      h || (f = yd(f, 5, !0), f = yd(f, 8, m), f = yd(f, 16, q), n && (f = yd(f, q ? 2 : 2048, !0)), f !== g && (k && (c = pd(c), f = Ie(f, e, !0)), wd(c, f)), n && Object.freeze(c));
      Ee(d, e, b, c);
      return a;
    };
  function Ie(a, b, c) {
    a = yd(a, 2, !!(2 & b));
    a = yd(a, 32, !!(32 & b) && c);
    return a = yd(a, 2048, !1);
  }
  var Re = function (a, b) {
      a = De(a, b);
      a = null == a ? a : Yd(a) ? "number" === typeof a ? ie(a) : fe(a, !1) : void 0;
      return a;
    },
    Se = function (a, b) {
      return ke(De(a, b));
    };
  function Te(a, b) {
    return null != a ? a : b;
  }
  var Ue = function (a, b) {
      return Te(Wd(De(a, b)), !1);
    },
    Ve = function (a, b) {
      var c = void 0 === c ? 0 : c;
      return Te(ce(De(a, b)), c);
    },
    We = function (a) {
      var b = void 0 === b ? 0 : b;
      a = de(De(a, 1));
      return Te(a, b);
    },
    Xe = function (a, b) {
      return Te(Se(a, b), "");
    },
    Ye = function (a, b, c) {
      var d = a.P;
      b = Le(d, zd(d), c) === b ? b : -1;
      return Te(De(a, b), 0);
    },
    Ze = function (a, b, c) {
      return Fe(a, b, je(c));
    };
  var $e = function (a, b, c) {
    this.P = re(a, b, c);
  };
  $e.prototype.toJSON = function () {
    if (Ld) var a = af(this, this.P, !1);else a = xe(this.P, ye, void 0, void 0, !1, !1), a = af(this, a, !0);
    return a;
  };
  var bf = function (a) {
    Ld = !0;
    try {
      return JSON.stringify(a.toJSON(), te);
    } finally {
      Ld = !1;
    }
  };
  $e.prototype.od = Hd;
  $e.prototype.toString = function () {
    return af(this, this.P, !1).toString();
  };
  function af(a, b, c) {
    var d = a.constructor.la,
      e = zd(c ? a.P : b),
      f = Gd(e),
      g = !1;
    if (d && Md) {
      if (!c) {
        b = pd(b);
        var h;
        if (b.length && Kd(h = b[b.length - 1])) for (g = 0; g < d.length; g++) if (d[g] >= f) {
          Object.assign(b[b.length - 1] = {}, h);
          break;
        }
        g = !0;
      }
      f = b;
      c = !c;
      h = zd(a.P);
      a = Gd(h);
      h = +!!(h & 512) - 1;
      for (var k, n, m = 0; m < d.length; m++) if (n = d[m], n < a) {
        n += h;
        var q = f[n];
        null == q ? f[n] = c ? Od : Ad() : c && q !== Od && sd(q);
      } else k || (q = void 0, f.length && Kd(q = f[f.length - 1]) ? k = q : f.push(k = {})), q = k[n], null == k[n] ? k[n] = c ? Od : Ad() : c && q !== Od && sd(q);
    }
    k = b.length;
    if (!k) return b;
    var t;
    if (Kd(f = b[k - 1])) {
      a: {
        var w = f;
        c = {};
        a = !1;
        for (var A in w) {
          h = w[A];
          if (Array.isArray(h)) {
            m = h;
            if (!Rc && Nd(h, d, +A) || !Qc && Jd(h) && 0 === h.size) h = null;
            h != m && (a = !0);
          }
          null != h ? c[A] = h : a = !0;
        }
        if (a) {
          for (var F in c) {
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
      A = k - 1;
      f = b[A];
      if (!(null == f || !Rc && Nd(f, d, A - e) || !Qc && Jd(f) && 0 === f.size)) break;
      var Za = !0;
    }
    if (!t && !Za) return b;
    var Ta;
    g ? Ta = b : Ta = Array.prototype.slice.call(b, 0, k);
    b = Ta;
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
    b.g = qe(a[0]);
    var f = 0,
      g = a[++f];
    g && g.constructor === Object && (b.sf = g, g = a[++f], "function" === typeof g && (b.j = g, b.h = a[++f], g = a[++f]));
    for (var h = {}; Array.isArray(g) && "number" === typeof g[0] && 0 < g[0];) {
      for (var k = 0; k < g.length; k++) h[g[k]] = g;
      g = a[++f];
    }
    for (k = 1; void 0 !== g;) {
      "number" === typeof g && (k += g, g = a[++f]);
      var n = void 0;
      if (g instanceof od) var m = g;else m = lf, f--;
      if (m.ze) {
        g = a[++f];
        n = a;
        var q = f;
        "function" == typeof g && (g = g(), n[q] = g);
        n = g;
      }
      g = a[++f];
      q = k + 1;
      "number" === typeof g && 0 > g && (q -= g, g = a[++f]);
      for (; k < q; k++) {
        var t = h[k];
        e(b, k, n ? d(m, n, t) : c(m, t));
      }
    }
    mf in a && hf in a && (a.length = 0);
    return b;
  }
  var mf = Symbol();
  function nf(a, b) {
    var c = a[b];
    if (c) return c;
    if (c = a.sf) if (c = c[b]) {
      c = Array.isArray(c) ? c[0] instanceof od ? c : [of, c] : [c, void 0];
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
    for (var d = zd(a), e = +!!(d & 512) - 1, f = a.length, g = f + (d & 256 ? -1 : 0), h = d & 512 ? 1 : 0; h < g; h++) {
      var k = a[h];
      if (null != k) {
        var n = h - e,
          m = nf(c, n);
        m && m(b, k, n);
      }
    }
    if (d & 256) {
      a = a[f - 1];
      for (var q in a) d = +q, Number.isNaN(d) || (e = a[q], null != e && (f = nf(c, d)) && f(b, e, d));
    }
  }
  function pf(a) {
    return new od(a, !1);
  }
  function qf(a, b, c) {
    a: if (null != b) {
      if (Yd(b)) {
        if ("string" === typeof b) {
          b = fe(b, !1);
          break a;
        }
        if ("number" === typeof b) {
          b = ie(b);
          break a;
        }
      }
      b = void 0;
    }
    null != b && ("string" === typeof b && fd(b), null != b && (nd(a, c, 0), "number" === typeof b ? (a = a.g, Vc(b), hd(a, Sc, Tc)) : (c = fd(b), hd(a.g, c.h, c.g))));
  }
  function rf(a, b, c) {
    b = ce(b);
    null != b && null != b && (nd(a, c, 0), jd(a.g, b));
  }
  function sf(a, b, c, d, e) {
    b = b instanceof $e ? b.P : Array.isArray(b) ? re(b, d[0], d[1]) : void 0;
    if (null != b) {
      nd(a, c, 2);
      c = a.g.end();
      md(a, c);
      c.push(a.h);
      e(b, a);
      e = c.pop();
      for (e = a.h + a.g.length() - e; 127 < e;) c.push(e & 127 | 128), e >>>= 7, a.h++;
      c.push(e);
      a.h++;
    }
  }
  var tf = pf(function (a, b, c) {
      b = Ud(b);
      null != b && (nd(a, c, 1), a = a.g, c = Uc || (Uc = new DataView(new ArrayBuffer(8))), c.setFloat64(0, +b, !0), Sc = c.getUint32(0, !0), Tc = c.getUint32(4, !0), kd(a, Sc), kd(a, Tc));
    }),
    uf = pf(function (a, b, c) {
      b = Ud(b);
      null != b && (nd(a, c, 5), a = a.g, c = Uc || (Uc = new DataView(new ArrayBuffer(8))), c.setFloat32(0, +b, !0), Tc = 0, Sc = c.getUint32(0, !0), kd(a, Sc));
    }),
    vf = pf(qf),
    wf = pf(qf),
    xf = pf(function (a, b, c) {
      a: if (null != b) {
        if (Yd(b)) {
          if ("string" === typeof b) {
            var d = Math.trunc(Number(b));
            Number.isSafeInteger(d) ? b = String(d) : (d = b.indexOf("."), -1 !== d && (b = b.substring(0, d)), ("-" === b[0] ? 0 : 20 > b.length || 20 === b.length && 184467 > Number(b.substring(0, 6))) || ($c(b), b = Xc(Sc, Tc)));
            break a;
          }
          if ("number" === typeof b) {
            b = Math.trunc(b);
            break a;
          }
        }
        b = void 0;
      }
      null != b && ("string" === typeof b && cd(b), null != b && (nd(a, c, 0), "number" === typeof b ? (a = a.g, Vc(b), hd(a, Sc, Tc)) : (c = cd(b), hd(a.g, c.h, c.g))));
    }),
    yf = pf(rf),
    zf = pf(rf),
    Bf = pf(function (a, b, c) {
      b = Wd(b);
      null != b && (nd(a, c, 0), a.g.g.push(b ? 1 : 0));
    }),
    Cf = pf(function (a, b, c) {
      b = ke(b);
      if (null != b) {
        var d = !1;
        d = void 0 === d ? !1 : d;
        if (gb) {
          if (d && /(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(b)) throw Error("Found an unpaired surrogate");
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
        nd(a, c, 2);
        id(a.g, b.length);
        md(a, a.g.end());
        md(a, b);
      }
    }),
    of = new od(sf, !0),
    lf = new od(sf, !0),
    Df;
  Df = new od(function (a, b, c, d, e) {
    if (Array.isArray(b)) for (var f = 0; f < b.length; f++) sf(a, b[f], c, d, e);
  }, !0);
  var Ef = pf(function (a, b, c) {
    b = ce(b);
    null != b && (b = parseInt(b, 10), nd(a, c, 0), jd(a.g, b));
  });
  function Ff(a) {
    return function () {
      var b = new ld();
      gf(this.P, b, ff(a));
      md(b, b.g.end());
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
        rd(b, 32);
        b = ne(a, b);
      }
      return b;
    };
  }
  ;
  var Hf = function () {
    var a;
    this.g = a = void 0 === a ? {} : a;
  };
  Hf.prototype.reset = function () {
    this.g = {};
  };
  var If = function () {},
    Jf = function (a) {
      var b = !1,
        c;
      return function () {
        b || (c = a(), b = !0);
        return c;
      };
    },
    Kf = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = null;
          c();
        }
      };
    },
    Lf = function (a) {
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
  var Mf = Jf(function () {
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
  function Nf(a) {
    return a ? a.passive && Mf() ? a : a.capture || !1 : !1;
  }
  var Of = function (a, b, c, d) {
      return a.addEventListener ? (a.addEventListener(b, c, Nf(d)), !0) : !1;
    },
    Pf = function (a, b, c) {
      a.removeEventListener && a.removeEventListener(b, c, Nf());
    };
  var Qf = ic || lc;
  function Rf(a, b, c) {
    for (var d in a) b.call(c, a[d], d, a);
  }
  const nativeSetInterval = window.setInterval;
  function Sf(a, b) {
    var c = {},
      d;
    for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
    return c;
  }
  function Tf(a) {
    var b = Uf,
      c;
    for (c in b) if (!a.call(void 0, b[c], c, b)) return !1;
    return !0;
  }
  function Vf(a) {
    var b = [],
      c = 0,
      d;
    for (d in a) b[c++] = a[d];
    return b;
  }
  function Wf(a) {
    var b = [],
      c = 0,
      d;
    for (d in a) b[c++] = d;
    return b;
  }
  function Xf(a, b) {
    var c = Qa(b),
      d = c ? b : arguments;
    for (c = c ? 0 : 1; c < d.length; c++) {
      if (null == a) return;
      a = a[d[c]];
    }
    return a;
  }
  function Yf(a, b) {
    return null !== a && b in a;
  }
  function Zf(a, b) {
    for (var c in a) if (a[c] == b) return !0;
    return !1;
  }
  function $f(a) {
    var b = ag,
      c;
    for (c in b) if (a.call(void 0, b[c], c, b)) return c;
  }
  function bg(a) {
    for (var b in a) return !1;
    return !0;
  }
  function cg(a) {
    for (var b in a) delete a[b];
  }
  function dg(a, b, c) {
    return null !== a && b in a ? a[b] : c;
  }
  var eg = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
  function fg(a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
      d = arguments[e];
      for (c in d) a[c] = d[c];
      for (var f = 0; f < eg.length; f++) c = eg[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  }
  ;
  var gg,
    hg = function () {
      if (void 0 === gg) {
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
          gg = a;
        } else gg = a;
      }
      return gg;
    };
  var ig = function (a) {
    this.g = a;
  };
  ig.prototype.toString = function () {
    return this.g + "";
  };
  ig.prototype.xc = !0;
  ig.prototype.vc = function () {
    return this.g.toString();
  };
  var jg = {},
    kg = function (a) {
      var b = hg();
      a = b ? b.createScriptURL(a) : a;
      return new ig(a, jg);
    };
  var lg = function (a) {
    this.g = a;
  };
  lg.prototype.toString = function () {
    return this.g.toString();
  };
  lg.prototype.xc = !0;
  lg.prototype.vc = function () {
    return this.g.toString();
  };
  var mg = {},
    ng = new lg("about:invalid#zClosurez", mg);
  var og = {},
    pg = function (a) {
      this.g = a;
      this.xc = !0;
    };
  pg.prototype.vc = function () {
    return this.g;
  };
  pg.prototype.toString = function () {
    return this.g.toString();
  };
  var qg = new pg("", og);
  var rg = {},
    sg = function (a) {
      this.g = a;
      this.xc = !0;
    };
  sg.prototype.vc = function () {
    return this.g.toString();
  };
  sg.prototype.toString = function () {
    return this.g.toString();
  };
  var tg = function (a) {
      return a instanceof sg && a.constructor === sg ? a.g : "type_error:SafeHtml";
    },
    ug = function (a) {
      var b = hg();
      a = b ? b.createHTML(a) : a;
      return new sg(a, rg);
    };
  var vg = function (a, b) {
    this.x = void 0 !== a ? a : 0;
    this.y = void 0 !== b ? b : 0;
  };
  vg.prototype.ceil = function () {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this;
  };
  vg.prototype.floor = function () {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this;
  };
  vg.prototype.round = function () {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this;
  };
  var z = function (a, b) {
    this.width = a;
    this.height = b;
  };
  l = z.prototype;
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
  var wg = function (a) {
      return decodeURIComponent(a.replace(/\+/g, " "));
    },
    xg = function (a, b) {
      a.length > b && (a = a.substring(0, b - 3) + "...");
      return a;
    },
    yg = String.prototype.repeat ? function (a, b) {
      return a.repeat(b);
    } : function (a, b) {
      return Array(b + 1).join(a);
    },
    zg = function (a) {
      return null == a ? "" : String(a);
    },
    Ag = 2147483648 * Math.random() | 0,
    Bg = function (a) {
      return String(a).replace(/\-([a-z])/g, function (b, c) {
        return c.toUpperCase();
      });
    },
    Cg = function () {
      return "googleAvInapp".replace(/([A-Z])/g, "-$1").toLowerCase();
    },
    Dg = function (a) {
      return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function (b, c, d) {
        return c + d.toUpperCase();
      });
    },
    Eg = function (a) {
      isFinite(a) && (a = String(a));
      return "string" === typeof a ? /^\s*-?0x/i.test(a) ? parseInt(a, 16) : parseInt(a, 10) : NaN;
    };
  var Hg = function (a) {
      return a ? new Fg(Gg(a)) : eb || (eb = new Fg());
    },
    Ig = function (a) {
      var b = document;
      return "string" === typeof a ? b.getElementById(a) : a;
    },
    Kg = function (a, b) {
      Rf(b, function (c, d) {
        c && "object" == typeof c && c.xc && (c = c.vc());
        "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : Jg.hasOwnProperty(d) ? a.setAttribute(Jg[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c;
      });
    },
    Jg = {
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
    Mg = function (a) {
      a = a.document;
      a = Lg(a) ? a.documentElement : a.body;
      return new z(a.clientWidth, a.clientHeight);
    },
    Ng = function (a) {
      var b = a.scrollingElement ? a.scrollingElement : !lc && Lg(a) ? a.documentElement : a.body || a.documentElement;
      a = a.parentWindow || a.defaultView;
      return ic && a.pageYOffset != b.scrollTop ? new vg(b.scrollLeft, b.scrollTop) : new vg(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop);
    },
    B = function (a) {
      return a ? a.parentWindow || a.defaultView : window;
    },
    Qg = function (a, b, c) {
      var d = arguments,
        e = document,
        f = d[1],
        g = Og(e, String(d[0]));
      f && ("string" === typeof f ? g.className = f : Array.isArray(f) ? g.className = f.join(" ") : Kg(g, f));
      2 < d.length && Pg(e, g, d, 2);
      return g;
    },
    Pg = function (a, b, c, d) {
      function e(h) {
        h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h);
      }
      for (; d < c.length; d++) {
        var f = c[d];
        if (!Qa(f) || Ra(f) && 0 < f.nodeType) e(f);else {
          a: {
            if (f && "number" == typeof f.length) {
              if (Ra(f)) {
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
          Kb(g ? Yb(f) : f, e);
        }
      }
    },
    Og = function (a, b) {
      b = String(b);
      "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
      return a.createElement(b);
    },
    Lg = function (a) {
      return "CSS1Compat" == a.compatMode;
    },
    Rg = function (a) {
      a && a.parentNode && a.parentNode.removeChild(a);
    },
    Sg = function (a) {
      var b;
      if (Qf && (b = a.parentElement)) return b;
      b = a.parentNode;
      return Ra(b) && 1 == b.nodeType ? b : null;
    },
    Tg = function (a, b) {
      if (!a || !b) return !1;
      if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
      if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
      for (; b && a != b;) b = b.parentNode;
      return b == a;
    },
    Gg = function (a) {
      return 9 == a.nodeType ? a : a.ownerDocument || a.document;
    },
    Ug = function (a) {
      try {
        return a.contentWindow || (a.contentDocument ? B(a.contentDocument) : null);
      } catch (b) {}
      return null;
    },
    Vg = function (a, b) {
      a && (a = a.parentNode);
      for (var c = 0; a;) {
        if (b(a)) return a;
        a = a.parentNode;
        c++;
      }
      return null;
    },
    Fg = function (a) {
      this.g = a || v.document || document;
    };
  l = Fg.prototype;
  l.getElementsByTagName = function (a, b) {
    return (b || this.g).getElementsByTagName(String(a));
  };
  l.appendChild = function (a, b) {
    a.appendChild(b);
  };
  l.append = function (a, b) {
    Pg(Gg(a), a, arguments, 1);
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
  l.contains = Tg;
  var $g = function () {
      return rb && ub ? ub.mobile : !Wg() && (y("iPod") || y("iPhone") || y("Android") || y("IEMobile"));
    },
    Wg = function () {
      return rb && ub ? !ub.mobile && (y("iPad") || y("Android") || y("Silk")) : y("iPad") || y("Android") && !y("Mobile") || y("Silk");
    };
  var ah = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"),
    bh = function (a) {
      var b = a.match(ah);
      a = b[1];
      var c = b[3];
      b = b[4];
      var d = "";
      a && (d += a + ":");
      c && (d = d + "//" + c, b && (d += ":" + b));
      return d;
    },
    ch = function (a, b) {
      if (a) {
        a = a.split("&");
        for (var c = 0; c < a.length; c++) {
          var d = a[c].indexOf("="),
            e = null;
          if (0 <= d) {
            var f = a[c].substring(0, d);
            e = a[c].substring(d + 1);
          } else f = a[c];
          b(f, e ? wg(e) : "");
        }
      }
    },
    dh = /#|$/,
    eh = function (a, b) {
      var c = a.search(dh);
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
      return wg(a.slice(d, -1 !== e ? e : 0));
    };
  var fh = function (a) {
    var b = [],
      c = [],
      d = {},
      e = function (f, g) {
        var h = g + "  ";
        try {
          if (void 0 === f) b.push("undefined");else if (null === f) b.push("NULL");else if ("string" === typeof f) b.push('"' + f.replace(/\n/g, "\n" + g) + '"');else if ("function" === typeof f) b.push(String(f).replace(/\n/g, "\n" + g));else if (Ra(f)) {
            f[Sa] || c.push(f);
            var k = Va(f);
            if (d[k]) b.push("*** reference loop detected (id=" + k + ") ***");else {
              d[k] = !0;
              b.push("{");
              for (var n in f) "function" !== typeof f[n] && (b.push("\n"), b.push(h), b.push(n + " = "), e(f[n], h));
              b.push("\n" + g + "}");
              delete d[k];
            }
          } else b.push(f);
        } catch (m) {
          b.push("*** " + m + " ***");
        }
      };
    e(a, "");
    for (a = 0; a < c.length; a++) Wa(c[a]);
    return b.join("");
  }; /*
     SPDX-License-Identifier: Apache-2.0
     */
  var gh = function (a) {
    this.Mf = a;
  };
  function hh(a) {
    return new gh(function (b) {
      return b.substr(0, a.length + 1).toLowerCase() === a + ":";
    });
  }
  var ih = [hh("data"), hh("http"), hh("https"), hh("mailto"), hh("ftp"), new gh(function (a) {
    return /^[^:]*([/?#]|$)/.test(a);
  })];
  function jh(a) {
    if ("undefined" !== typeof MediaSource && a instanceof MediaSource) return new lg(URL.createObjectURL(a), mg);
    var b = a.type.match(/^([^;]+)(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i);
    if (2 !== (null == b ? void 0 : b.length) || !(/^image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon|heic|heif|avif|x-ms-bmp)$/i.test(b[1]) || /^video\/(?:mpeg|mp4|ogg|webm|x-matroska|quicktime|x-ms-wmv)$/i.test(b[1]) || /^audio\/(?:3gpp2|3gpp|aac|amr|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)$/i.test(b[1]) || /^font\/\w+/i.test(b[1]))) throw Error("");
    return new lg(URL.createObjectURL(a), mg);
  }
  var kh = "function" === typeof URL;
  function lh(a, b) {
    if (1 === a.nodeType) {
      var c = a.tagName;
      if ("SCRIPT" === c || "STYLE" === c) throw Error("");
    }
    a.innerHTML = tg(b);
  }
  ;
  function mh(a, b) {
    a.src = b instanceof ig && b.constructor === ig ? b.g : "type_error:TrustedResourceUrl";
    var c, d;
    (c = (b = null == (d = (c = (a.ownerDocument && a.ownerDocument.defaultView || window).document).querySelector) ? void 0 : d.call(c, "script[nonce]")) ? b.nonce || b.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", c);
  }
  ;
  function nh(a, b) {
    a.write(tg(b));
  }
  ;
  var oh = function (a) {
      try {
        return !!a && null != a.location.href && dc(a, "foo");
      } catch (b) {
        return !1;
      }
    },
    qh = function (a) {
      var b = void 0 === b ? !1 : b;
      var c = void 0 === c ? v : c;
      for (var d = 0; c && 40 > d++ && (!b && !oh(c) || !a(c));) c = ph(c);
    },
    rh = function () {
      var a = window;
      qh(function (b) {
        a = b;
        return !1;
      });
      return a;
    },
    ph = function (a) {
      try {
        var b = a.parent;
        if (b && b != a) return b;
      } catch (c) {}
      return null;
    },
    sh = function () {
      var a = window;
      return oh(a.top) ? a.top : null;
    },
    th = function () {
      if (!globalThis.crypto) return Math.random();
      try {
        var a = new Uint32Array(1);
        globalThis.crypto.getRandomValues(a);
        return a[0] / 65536 / 65536;
      } catch (b) {
        return Math.random();
      }
    },
    uh = function (a, b) {
      if (a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
    },
    vh = function (a) {
      var b = a.length;
      if (0 == b) return 0;
      for (var c = 305419896, d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
      return 0 < c ? c : 4294967296 + c;
    };
  function wh(a) {
    var b, c;
    return null != (c = null == (b = /https?:\/\/[^\/]+/.exec(a)) ? void 0 : b[0]) ? c : "";
  }
  var xh = function () {
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
    yh = function (a, b) {
      try {
        return !(!a.frames || !a.frames[b]);
      } catch (c) {
        return !1;
      }
    },
    zh = function (a, b) {
      for (var c = 0; 50 > c; ++c) {
        if (yh(a, b)) return a;
        if (!(a = ph(a))) break;
      }
      return null;
    },
    Ah = function (a, b) {
      b = void 0 === b ? document : b;
      return b.createElement(String(a).toLowerCase());
    },
    Bh = function (a) {
      for (var b = a; a && a != a.parent;) a = a.parent, oh(a) && (b = a);
      return b;
    };
  var C = function (a, b, c, d) {
    this.top = a;
    this.right = b;
    this.bottom = c;
    this.left = d;
  };
  C.prototype.getWidth = function () {
    return this.right - this.left;
  };
  C.prototype.getHeight = function () {
    return this.bottom - this.top;
  };
  var Ch = function (a) {
    return new C(a.top, a.right, a.bottom, a.left);
  };
  l = C.prototype;
  l.contains = function (a) {
    return this && a ? a instanceof C ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1;
  };
  l.expand = function (a, b, c, d) {
    Ra(a) ? (this.top -= a.top, this.right += a.right, this.bottom += a.bottom, this.left -= a.left) : (this.top -= a, this.right += Number(b), this.bottom += Number(c), this.left -= Number(d));
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
  var Dh = function (a, b, c) {
    b instanceof vg ? (a.left += b.x, a.right += b.x, a.top += b.y, a.bottom += b.y) : (a.left += b, a.right += b, "number" === typeof c && (a.top += c, a.bottom += c));
    return a;
  };
  var Eh = function (a, b, c, d) {
      this.left = a;
      this.top = b;
      this.width = c;
      this.height = d;
    },
    Fh = function (a) {
      return new C(a.top, a.left + a.width, a.top + a.height, a.left);
    };
  l = Eh.prototype;
  l.contains = function (a) {
    return a instanceof vg ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height;
  };
  l.getSize = function () {
    return new z(this.width, this.height);
  };
  l.ceil = function () {
    this.left = Math.ceil(this.left);
    this.top = Math.ceil(this.top);
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this;
  };
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
  function Gh(a) {
    var b = Ia.apply(1, arguments);
    if (0 === b.length) return kg(a[0]);
    for (var c = a[0], d = 0; d < b.length; d++) c += encodeURIComponent(b[d]) + a[d + 1];
    return kg(c);
  }
  ;
  function Hh(a) {
    a = void 0 === a ? v : a;
    var b = a.context || a.AMP_CONTEXT_DATA;
    if (!b) try {
      b = a.parent.context || a.parent.AMP_CONTEXT_DATA;
    } catch (e) {}
    var c, d;
    return (null == (c = b) ? 0 : c.pageViewId) && (null == (d = b) ? 0 : d.canonicalUrl) ? b : null;
  }
  ;
  var Ih = function () {
      this.S = {};
    },
    Jh = function () {
      var a = Hh(window);
      if (a) {
        if (a) {
          var b = a.pageViewId;
          a = a.clientId;
          "string" === typeof a && (b += a.replace(/\D/g, "").substr(0, 6));
        } else b = null;
        return +b;
      }
      b = Bh(window);
      a = b.google_global_correlator;
      a || (b.google_global_correlator = a = 1 + Math.floor(Math.random() * Math.pow(2, 43)));
      return a;
    },
    Lh = function (a, b) {
      var c = Kh[7] || "google_ps_7";
      a = a.S;
      var d = a[c];
      return void 0 === d ? (a[c] = b(), a[c]) : d;
    },
    Mh = function (a) {
      var b = Jh();
      return Lh(a, function () {
        return b;
      });
    },
    Oh = function () {
      if (Nh) var a = Nh;else {
        a = ((a = void 0 === a ? Hh() : a) ? oh(a.master) ? a.master : null : null) || window;
        var b = a.google_persistent_state_async;
        a = null != b && "object" == typeof b && null != b.S && "object" == typeof b.S ? Nh = b : a.google_persistent_state_async = Nh = new Ih();
      }
      return Mh(a);
    },
    Nh = null,
    Ph = {},
    Kh = (Ph[8] = "google_prev_ad_formats_by_region", Ph[9] = "google_prev_ad_slotnames_by_region", Ph);
  var Rh = function (a, b, c, d, e) {
    Qh(a, b, void 0 === c ? null : c, void 0 === d ? !1 : d, void 0 === e ? !1 : e);
  };
  function Qh(a, b, c, d, e) {
    e = void 0 === e ? !1 : e;
    a.google_image_requests || (a.google_image_requests = []);
    var f = Ah("IMG", a.document);
    if (c || d) {
      var g = function (h) {
        c && c(h);
        d && Ub(a.google_image_requests, f);
        Pf(f, "load", g);
        Pf(f, "error", g);
      };
      Of(f, "load", g);
      Of(f, "error", g);
    }
    e && (f.attributionSrc = "");
    f.src = b;
    a.google_image_requests.push(f);
  }
  var Th = function (a, b) {
      var c = void 0 === c ? !1 : c;
      var d = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + b;
      uh(a, function (e, f) {
        if (e || 0 === e) d += "&" + f + "=" + encodeURIComponent("" + e);
      });
      Sh(d, c);
    },
    Sh = function (a, b) {
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
      }), c.fetch(a, b)) : Rh(c, a, void 0, b, d);
    };
  var Uh = function (a, b, c) {
      c = void 0 === c ? {} : c;
      this.error = a;
      this.context = b.context;
      this.msg = b.message || "";
      this.id = b.id || "jserror";
      this.meta = c;
    },
    Vh = function (a) {
      return !!(a.error && a.meta && a.id);
    };
  var Wh = ia(["https://pagead2.googlesyndication.com/pagead/js/err_rep.js"]),
    Xh = function () {
      var a = void 0 === a ? "jserror" : a;
      var b = void 0 === b ? .01 : b;
      var c = void 0 === c ? Gh(Wh) : c;
      this.h = a;
      this.j = !1;
      this.g = null;
      this.o = !1;
      this.B = Math.random();
      this.l = b;
      this.A = this.Sa;
      this.I = c;
    };
  l = Xh.prototype;
  l.Ed = function (a) {
    this.h = a;
  };
  l.Qc = function (a) {
    this.g = a;
  };
  l.Fd = function (a) {
    this.j = a;
  };
  l.Gd = function (a) {
    this.o = a;
  };
  l.Sa = function (a, b, c, d, e) {
    c = void 0 === c ? this.l : c;
    e = void 0 === e ? this.h : e;
    if ((this.o ? this.B : Math.random()) > c) return this.j;
    Vh(b) || (b = new Uh(b, {
      context: a,
      id: e
    }));
    if (d || this.g) b.meta = {}, this.g && this.g(b.meta), d && d(b.meta);
    v.google_js_errors = v.google_js_errors || [];
    v.google_js_errors.push(b);
    v.error_rep_loaded || (b = v.document, a = Ah("SCRIPT", b), mh(a, this.I), (b = b.getElementsByTagName("script")[0]) && b.parentNode && b.parentNode.insertBefore(a, b), v.error_rep_loaded = !0);
    return this.j;
  };
  l.pb = function (a, b, c) {
    try {
      return b();
    } catch (d) {
      if (!this.A(a, d, this.l, c, this.h)) throw d;
    }
  };
  l.yd = function (a, b, c, d) {
    var e = this;
    return function () {
      var f = Ia.apply(0, arguments);
      return e.pb(a, function () {
        return b.apply(c, f);
      }, d);
    };
  };
  var Yh = function (a) {
      return a.prerendering ? 3 : {
        visible: 1,
        hidden: 2,
        prerender: 3,
        preview: 4,
        unloaded: 5
      }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0;
    },
    Zh = function (a) {
      var b;
      a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
      return b;
    };
  var $h = null;
  function ai() {
    var a = void 0 === a ? v : a;
    return (a = a.performance) && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now();
  }
  function bi() {
    var a = void 0 === a ? v : a;
    return (a = a.performance) && a.now ? a.now() : null;
  }
  function ci(a, b) {
    b = void 0 === b ? v : b;
    var c, d;
    return (null == (c = b.performance) ? void 0 : null == (d = c.timing) ? void 0 : d[a]) || 0;
  }
  function di() {
    var a = void 0 === a ? v : a;
    var b = Math.min(ci("domLoading", a) || Infinity, ci("domInteractive", a) || Infinity);
    return Infinity === b ? Math.max(ci("responseEnd", a), ci("navigationStart", a)) : b;
  }
  ;
  var ei = function (a, b, c, d) {
    this.label = a;
    this.type = b;
    this.value = c;
    this.duration = void 0 === d ? 0 : d;
    this.taskId = this.slotId = void 0;
    this.uniqueId = Math.random();
  };
  var fi = v.performance,
    gi = !!(fi && fi.mark && fi.measure && fi.clearMarks),
    hi = Jf(function () {
      var a;
      if (a = gi) {
        var b;
        if (null === $h) {
          $h = "";
          try {
            a = "";
            try {
              a = v.top.location.hash;
            } catch (c) {
              a = v.location.hash;
            }
            a && ($h = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "");
          } catch (c) {}
        }
        b = $h;
        a = !!b.indexOf && 0 <= b.indexOf("1337");
      }
      return a;
    }),
    ii = function (a, b) {
      this.A = [];
      this.g = b || v;
      var c = null;
      b && (b.google_js_reporting_queue = b.google_js_reporting_queue || [], this.A = b.google_js_reporting_queue, c = b.google_measure_js_timing);
      this.j = hi() || (null != c ? c : Math.random() < a);
    };
  ii.prototype.B = function () {
    this.j = !1;
    this.A != this.g.google_js_reporting_queue && (hi() && Kb(this.A, ji), this.A.length = 0);
  };
  ii.prototype.I = function (a) {
    !this.j || 2048 < this.A.length || this.A.push(a);
  };
  var ji = function (a) {
    a && fi && hi() && (fi.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), fi.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"));
  };
  ii.prototype.start = function (a, b) {
    if (!this.j) return null;
    a = new ei(a, b, bi() || ai());
    b = "goog_" + a.label + "_" + a.uniqueId + "_start";
    fi && hi() && fi.mark(b);
    return a;
  };
  ii.prototype.end = function (a) {
    if (this.j && "number" === typeof a.value) {
      a.duration = (bi() || ai()) - a.value;
      var b = "goog_" + a.label + "_" + a.uniqueId + "_end";
      fi && hi() && fi.mark(b);
      this.I(a);
    }
  };
  var ki = function (a) {
    a = a._google_rum_ns_ = a._google_rum_ns_ || {};
    return a.pq = a.pq || [];
  };
  function li(a) {
    return ug(null === a ? "null" : void 0 === a ? "undefined" : a);
  }
  ;
  function mi(a, b, c) {
    uh(b, function (d, e) {
      var f = c && c[e];
      !d && 0 !== d || f || (a += "&" + encodeURIComponent(e) + "=" + encodeURIComponent(String(d)), c && (c[e] = !0));
    });
    return a;
  }
  var si = function (a, b, c, d, e, f, g, h) {
    f = void 0 === f ? Infinity : f;
    g = void 0 === g ? !1 : g;
    ii.call(this, a, h);
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
    this.g.performance && this.g.performance.now || ni(this, "dat", 1);
    a && a.deviceMemory && ni(this, "dmc", a.deviceMemory);
    this.g === this.g.top && ni(this, "top", 1);
    this.X = !g;
    this.M = function () {
      k.g.setTimeout(function () {
        oi(k);
      }, 1100);
    };
    this.U = function () {
      ni(k, "uet", 2);
      for (var m = r(k.aa), q = m.next(); !q.done; q = m.next()) {
        q = q.value;
        try {
          q();
        } catch (w) {}
      }
      m = k.g;
      var t = void 0 === t ? {} : t;
      "function" === typeof window.CustomEvent ? q = new CustomEvent("rum_blp", t) : (q = document.createEvent("CustomEvent"), q.initCustomEvent("rum_blp", !!t.bubbles, !!t.cancelable, t.detail));
      m.dispatchEvent(q);
      oi(k);
      null != k.l.uet && (k.o -= 3 + k.l.uet.length + 2, delete k.l.uet);
    };
    this.ga = Lf(function () {
      oi(k);
    });
    this.ba = function () {
      var m = k.g.document;
      (null != m.hidden ? m.hidden : null != m.mozHidden ? m.mozHidden : null != m.webkitHidden && m.webkitHidden) && k.ga();
    };
    this.D = this.g.setTimeout(function () {
      oi(k);
    }, 5E3);
    this.o = b.length + c.length + d.length + e.length + 3;
    Kb(this.A, function (m) {
      pi(k, m);
    });
    b = ki(this.g);
    var n = function () {
      var m = Ia.apply(0, arguments)[0],
        q = m[0];
      m = m[1];
      var t = q.length + m.length + 2;
      8E3 < k.o + k.h + t && oi(k);
      k.F.push([q, m]);
      k.h += t;
      qi(k);
      return 0;
    };
    Kb(b, function (m) {
      return n(m);
    });
    b.length = 0;
    b.push = n;
    ni(this, "puid", (this.K + 1).toString(36) + "~" + Date.now().toString(36));
    ri(this);
  };
  u(si, ii);
  var ri = function (a) {
      "complete" === a.g.document.readyState ? a.g.setTimeout(function () {
        oi(a);
      }, 0) : Of(a.g, "load", a.M);
      var b = Zh(a.g.document);
      "undefined" !== typeof b && Of(a.g, b, a.ba);
      Of(a.g, "pagehide", a.U);
    },
    ni = function (a, b, c) {
      c = String(c);
      a.o = null != a.l[b] ? a.o + (c.length - a.l[b].length) : a.o + (b.length + c.length + 2);
      a.l[b] = c;
    },
    vi = function (a, b, c, d, e) {
      e = void 0 === e ? "" : e;
      var f = ti(a, b, c, d, e);
      8E3 < a.o + a.h + f && (oi(a), f = b.length + c.length + 2);
      ui(a, b, c, d, e);
      a.h += f;
      qi(a);
    },
    ti = function (a, b, c, d, e) {
      return null == a.report[b] ? b.length + c.length + 2 : d ? c.length + (void 0 === e ? "" : e).length : c.length - a.report[b].length;
    },
    ui = function (a, b, c, d, e) {
      a.report[b] = d && null != a.report[b] ? a.report[b] + ("" + (void 0 === e ? "" : e) + c) : c;
    },
    qi = function (a) {
      6E3 <= a.o + a.h && oi(a);
    },
    oi = function (a) {
      if (a.j && a.X) {
        try {
          a.h && (a.sendBeacon(a.report), a.K === a.J && a.B());
        } catch (b) {
          new Xh().Sa(358, b);
        }
        a.report = {};
        a.h = 0;
        a.A.length = 0;
        a.g.clearTimeout(a.D);
        a.D = 0;
      }
    },
    wi = function (a, b) {
      var c = a.H + "//" + a.domain + a.path + a.V,
        d = {};
      c = mi(c, a.l, d);
      c = mi(c, b, d);
      b = a.g;
      b.google_timing_params && (c = mi(c, b.google_timing_params, d), b.google_timing_params = void 0);
      Kb(a.F, function (e) {
        var f = r(e);
        e = f.next().value;
        f = f.next().value;
        var g = {};
        c = mi(c, (g[e] = f, g));
      });
      a.F.length = 0;
      return c;
    };
  si.prototype.sendBeacon = function (a) {
    this.K++;
    a = wi(this, a);
    var b = !1;
    try {
      b = !!(this.Z && this.g.navigator && this.g.navigator.sendBeacon(a, null));
    } catch (c) {
      this.Z = !1;
    }
    b || Rh(this.g, a);
    ni(this, "puid", (this.K + 1).toString(36) + "~" + Date.now().toString(36));
  };
  var pi = function (a, b) {
    var c = "met." + b.type,
      d = "number" === typeof b.value ? Math.round(b.value).toString(36) : b.value,
      e = Math.round(b.duration);
    b = "" + b.label + (null != b.slotId ? "_" + b.slotId : "") + ("." + d) + (0 < e ? "_" + e.toString(36) : "") + (null != b.taskId ? "__" + Math.round(b.taskId).toString(36) : "");
    vi(a, c, b, !0, "~");
  };
  si.prototype.I = function (a) {
    this.j && this.K < this.J && (ii.prototype.I.call(this, a), pi(this, a));
  };
  si.prototype.B = function () {
    ii.prototype.B.call(this);
    this.g.clearTimeout(this.D);
    this.h = this.D = 0;
    this.report = {};
    cg(this.G);
    cg(this.l);
    Pf(this.g, "load", this.M);
    Pf(this.g, "pagehide", this.U);
  };
  var D = function (a) {
    var b = "nb";
    if (a.nb && a.hasOwnProperty(b)) return a.nb;
    b = new a();
    return a.nb = b;
  };
  var E = function () {
      this.g = new si(1, "https:", "csi.gstatic.com", "/csi?v=2&s=", "ima", void 0, !0);
      var a = Oh();
      null != a && ni(this.g, "c", a);
      a = parseInt(this.g.l.c, 10) / 2;
      null != a && ni(this.g, "slotId", a);
    },
    G = function (a, b, c) {
      if (null != c) {
        a = a.g;
        var d = b + "=" + c;
        a.G[d] || (vi(a, b, c, !1), 1E3 > d.length && (a.G[d] = !0));
      }
    },
    xi = function (a, b) {
      for (var c in b) b[c] = "object" === typeof b[c] ? encodeURIComponent(JSON.stringify(b[c])) : encodeURIComponent(String(b[c]));
      a = a.g;
      var d = !1;
      c = 0;
      for (var e = r(Object.keys(b)), f = e.next(); !f.done; f = e.next()) f = f.value, null != a.report[f] && (d = !0), c += ti(a, f, b[f], !1);
      (8E3 < a.o + a.h + c || d) && oi(a);
      d = r(Object.keys(b));
      for (f = d.next(); !f.done; f = d.next()) e = f.value, ui(a, e, b[e], !1);
      a.h += c;
      qi(a);
    },
    H = function (a) {
      var b = E.g().g;
      b.j && b.I(new ei(a, 4, ai() - 0, 0));
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
    d.j && d.I(new ei(a + "_" + b + "x" + c + "|" + e + "|" + f, 4, ai(), 0));
  };
  E.g = function () {
    return D(E);
  };
  var yi = function (a) {
      return /^\s*$/.test(a) ? !1 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""));
    },
    zi = function (a) {
      try {
        return v.JSON.parse(a);
      } catch (b) {}
      a = String(a);
      if (yi(a)) try {
        return eval("(" + a + ")");
      } catch (b) {}
      throw Error("Invalid JSON string: " + a);
    },
    Bi = function () {
      this.g = Ai;
    },
    Ci = function (a, b, c) {
      if (null == b) c.push("null");else {
        if ("object" == typeof b) {
          if (Array.isArray(b)) {
            var d = b;
            b = d.length;
            c.push("[");
            for (var e = "", f = 0; f < b; f++) c.push(e), e = d[f], Ci(a, a.g ? a.g.call(d, String(f), e) : e, c), e = ",";
            c.push("]");
            return;
          }
          if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();else {
            c.push("{");
            f = "";
            for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (e = b[d], "function" != typeof e && (c.push(f), Di(d, c), c.push(":"), Ci(a, a.g ? a.g.call(b, d, e) : e, c), f = ","));
            c.push("}");
            return;
          }
        }
        switch (typeof b) {
          case "string":
            Di(b, c);
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
    Ei = {
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
    Fi = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g,
    Di = function (a, b) {
      b.push('"', a.replace(Fi, function (c) {
        var d = Ei[c];
        d || (d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).slice(1), Ei[c] = d);
        return d;
      }), '"');
    };
  var Gi = function () {
      this.j = null;
      this.g = "missing-id";
      this.h = !1;
    },
    Ii = function (a) {
      var b = null;
      try {
        b = document.getElementsByClassName("lima-exp-data");
      } catch (c) {
        return Hi("missing-element", a.g), null;
      }
      if (1 < b.length) return Hi("multiple-elements", a.g), null;
      b = b[0];
      return b ? b.innerHTML : (Hi("missing-element", a.g), null);
    },
    Ki = function () {
      var a = Ji,
        b = Ii(a);
      if (null !== b) if (yi(b)) {
        var c = JSON.parse(b);
        b = c.experimentIds;
        var d = c.binaryIdentifier;
        c = c.adEventId;
        var e = "string" === typeof d;
        if ("string" == typeof c) {
          var f = E.g();
          null != c && ni(f.g, "qqid", c);
        }
        e && (a.g = d);
        "string" !== typeof b ? Hi("missing-flags", a.g) : (e || Hi("missing-binary-id", a.g), a.j = b);
      } else Hi("invalid-json", a.g);
    };
  Gi.prototype.reset = function () {
    this.j = null;
    this.g = "missing-id";
  };
  var Mi = function (a, b, c, d, e) {
      this.id = a;
      this.C = b;
      this.o = c;
      this.g = !1;
      this.j = d;
      this.h = e;
      this.o && Li(this);
    },
    I = function (a) {
      return a.g || a.o;
    },
    Li = function (a) {
      if (a.j && a.h) {
        var b = a.j;
        b && Object.assign(a.h.g, b);
      }
    },
    Ni = function () {
      this.g = [];
    },
    Oi = function () {
      this.g = new Map();
      this.h = !1;
      this.l = new Ni();
      this.A = new Mi(0, 0, !1);
      this.j = [this.l];
      this.o = new Hf();
    },
    J = function (a) {
      var b = Pi;
      if (b.h || b.g.has(a.id) || null == a.C && null == a.control || 0 == a.kf) return b.A;
      var c = b.l;
      if (null != a.control) for (var d = r(b.j), e = d.next(); !e.done; e = d.next()) {
        if (e = e.value, e.g.includes(a.control)) {
          c = e;
          break;
        }
      } else null != a.N && (c = a.N);
      d = 0;
      null != a.control ? d = a.control.C : null != a.C && (d = a.C);
      a = new Mi(a.id, d, !!a.ei, a.flags, b.o);
      c.g.push(a);
      b.j.includes(c) || b.j.push(c);
      b.g.set(a.id, a);
      return a;
    },
    Qi = function () {
      var a = Pi;
      return [].concat(ka(a.g.keys())).filter(function (b) {
        return I(this.g.get(b));
      }, a);
    },
    Ri = function (a) {
      var b = Pi;
      b.h || (a.g(b.j, b.g), b.h = !0);
    };
  Oi.prototype.reset = function () {
    for (var a = r(this.g), b = a.next(); !b.done; b = a.next()) b = r(b.value), b.next(), b.next().value.g = !1;
    this.h = !1;
    this.o.reset();
  };
  var Pi = new Oi(),
    Ti = function () {
      return Si.g.filter(function (a) {
        return I(a);
      }).map(function (a) {
        return a.id;
      });
    };
  var Ui = function () {};
  Ui.prototype.g = function (a) {
    a = r(a);
    for (var b = a.next(); !b.done; b = a.next()) {
      var c = 0,
        d = Math.floor(1E3 * Math.random());
      b = r(b.value.g);
      for (var e = b.next(); !e.done; e = b.next()) if (e = e.value, c += e.C, d < c) {
        e.g = !0;
        Li(e);
        break;
      }
    }
  };
  var Vi = function (a) {
    this.P = re(a);
  };
  u(Vi, $e);
  Vi.la = [2, 8];
  var Wi = [3, 4, 5];
  var Xi = function (a) {
    this.P = re(a);
  };
  u(Xi, $e);
  Xi.la = [4];
  var Yi = function (a) {
    this.P = re(a);
  };
  u(Yi, $e);
  Yi.la = [5];
  var Zi = [1, 2, 3, 6, 7];
  var $i = function (a) {
    this.P = re(a);
  };
  u($i, $e);
  $i.prototype.getId = function () {
    return Ve(this, 1);
  };
  $i.la = [2];
  var aj = function (a) {
    this.P = re(a);
  };
  u(aj, $e);
  aj.la = [2];
  var bj = function (a) {
    this.P = re(a);
  };
  u(bj, $e);
  bj.la = [2];
  var cj = function (a) {
    this.P = re(a);
  };
  u(cj, $e);
  cj.la = [1, 4, 2, 3];
  var dj = function (a) {
    this.g = a || {
      cookie: ""
    };
  };
  l = dj.prototype;
  l.set = function (a, b, c) {
    var d = !1;
    if ("object" === typeof c) {
      var e = c.li;
      d = c.Zf || !1;
      var f = c.domain || void 0;
      var g = c.path || void 0;
      var h = c.me;
    }
    if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
    if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
    void 0 === h && (h = -1);
    this.g.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (g ? ";path=" + g : "") + (0 > h ? "" : 0 == h ? ";expires=" + new Date(1970, 1, 1).toUTCString() : ";expires=" + new Date(Date.now() + 1E3 * h).toUTCString()) + (d ? ";secure" : "") + (null != e ? ";samesite=" + e : "");
  };
  l.get = function (a, b) {
    for (var c = a + "=", d = (this.g.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
      f = lb(d[e]);
      if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
      if (f == a) return "";
    }
    return b;
  };
  l.remove = function (a, b, c) {
    var d = void 0 !== this.get(a);
    this.set(a, "", {
      me: 0,
      path: b,
      domain: c
    });
    return d;
  };
  l.tc = function () {
    return ej(this).keys;
  };
  l.wb = function () {
    return ej(this).values;
  };
  l.isEmpty = function () {
    return !this.g.cookie;
  };
  l.clear = function () {
    for (var a = ej(this).keys, b = a.length - 1; 0 <= b; b--) this.remove(a[b]);
  };
  var ej = function (a) {
    a = (a.g.cookie || "").split(";");
    for (var b = [], c = [], d, e, f = 0; f < a.length; f++) e = lb(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
    return {
      keys: b,
      values: c
    };
  };
  function fj(a) {
    return "null" !== a.origin;
  }
  function gj(a, b, c) {
    b = Ue(b, 5) && fj(c) ? c.document.cookie : null;
    return null === b ? null : new dj({
      cookie: b
    }).get(a) || "";
  }
  ;
  function hj(a, b) {
    switch (b) {
      case 1:
        return Ye(a, 1, Zi);
      case 2:
        return Ye(a, 2, Zi);
      case 3:
        return Ye(a, 3, Zi);
      case 6:
        return Ye(a, 6, Zi);
      default:
        return null;
    }
  }
  function ij(a, b) {
    if (!a) return null;
    switch (b) {
      case 1:
        return Ue(a, 1);
      case 7:
        return Xe(a, 3);
      case 2:
        var c = void 0 === c ? 0 : c;
        a = a.P;
        b = zd(a);
        var d = Ce(a, b, 2),
          e = Ud(d);
        null != e && e !== d && Ee(a, b, 2, e);
        return Te(e, c);
      case 3:
        return Xe(a, 3);
      case 6:
        return He(a, 4, ke);
      default:
        return null;
    }
  }
  ;
  var jj = {},
    kj = (jj[47] = Ec, jj);
  function lj() {
    var a = mj,
      b = Oe(new cj(nj), bj, 2);
    1 == b.length && 16 == Te(De(b[0], 1), 0) && Oe(b[0], aj, 2).forEach(function (c) {
      var d = We(c),
        e = Me(c, Vi, 3),
        f = a[Te(De(c, 4), 0)];
      Oe(c, $i, 2).forEach(function (g) {
        var h = d || Ve(g, 4),
          k = g.getId(),
          n = e || Me(g, Vi, 3);
        n = n ? Ye(n, 3, Wi) : null;
        n = kj[n];
        g = oj(Oe(g, Yi, 2));
        J({
          id: k,
          C: h,
          N: f,
          kf: n,
          flags: g
        });
      });
    });
  }
  function oj(a) {
    if (a.length) {
      var b = {};
      a.forEach(function (c) {
        var d = c.P;
        d = Le(d, zd(d), Zi);
        var e = Me(c, Xi, 4);
        e && (c = hj(c, d), d = ij(e, d), b[c] = d);
      });
      return b;
    }
  }
  ;
  var pj = function (a) {
    this.h = a;
  };
  pj.prototype.g = function (a, b) {
    a = r(this.h);
    for (var c = a.next(); !c.done; c = a.next()) if (c = b.get(c.value)) c.g = !0, Li(c);
  };
  var qj = function (a, b) {
    this.h = a;
    this.j = b;
  };
  u(qj, pj);
  qj.prototype.g = function (a, b) {
    pj.prototype.g.call(this, a, b);
    var c = [];
    a = [];
    for (var d = r(this.h), e = d.next(); !e.done; e = d.next()) e = e.value, b.get(e) ? c.push(e) : a.push(e);
    b = c.map(String).join(",") || "0";
    a = a.map(String).join(",") || "0";
    G(E.g(), "sei", b);
    G(E.g(), "nsei", a);
    G(E.g(), "bi", this.j);
  };
  var rj = function () {
    Gi.apply(this, arguments);
  };
  u(rj, Gi);
  var Hi = function (a, b) {
    var c = E.g();
    G(c, "eee", a);
    G(c, "bi", b);
  };
  rj.g = function () {
    return D(rj);
  };
  function sj() {
    return tj.split(",").map(function (a) {
      return parseInt(a, 10);
    }).filter(function (a) {
      return !isNaN(a);
    });
  }
  ;
  var Si = new Ni(),
    uj = new Ni(),
    Aj = new Ni(),
    Bj = new Ni(),
    Cj = new Ni(),
    Dj = new Ni(),
    Ej = new Ni(),
    Fj = new Ni(),
    Gj = new Ni(),
    Hj = new Ni(),
    Ij = new Ni(),
    Jj = new Ni(),
    Kj = new Ni(),
    Lj = new Ni(),
    Mj = new Ni(),
    Nj = new Ni(),
    Oj = new Ni(),
    Pj = new Ni(),
    Qj = new Ni(),
    Rj = new Ni(),
    Sj = new Ni();
  J({
    id: 457864198,
    C: 0
  });
  J({
    id: 457864188,
    C: 0
  });
  J({
    id: 45786216,
    C: 10
  });
  J({
    id: 318475490,
    C: 0
  });
  J({
    id: 324123032,
    C: 0
  });
  J({
    id: 418572103,
    C: 0
  });
  J({
    id: 420706097,
    C: 10
  });
  J({
    id: 420706098,
    C: 10
  });
  J({
    id: 21062100,
    C: 0
  });
  J({
    id: 420706105,
    C: 0
  });
  J({
    id: 420706106,
    C: 0
  });
  J({
    id: 21064018,
    C: 0
  });
  J({
    id: 21064020,
    C: 0
  });
  J({
    id: 21064022,
    C: 0
  });
  J({
    id: 21064024,
    C: 0
  });
  J({
    id: 21064075,
    C: 0
  });
  J({
    id: 21064201,
    C: 0
  });
  J({
    id: 420706142,
    C: 0
  });
  J({
    id: 21064347,
    C: 0
  });
  J({
    id: 44745813,
    C: 0
  });
  J({
    id: 44746068,
    C: 0
  });
  J({
    id: 21064565,
    C: 0
  });
  J({
    id: 21064567,
    C: 0
  });
  J({
    id: 418572006,
    C: 10
  });
  var Tj = J({
      id: 44768716,
      C: 10,
      N: Ij
    }),
    Uj = J({
      id: 44768717,
      C: 10,
      N: Ij
    }),
    Vj = J({
      id: 44787137,
      C: 0,
      N: Ij
    }),
    Wj = J({
      id: 44744588,
      C: 10
    }),
    Xj = J({
      id: 44747319,
      C: 10
    });
  J({
    id: 44740339,
    C: 10
  });
  var Yj = J({
    id: 44740340,
    C: 10
  });
  J({
    id: 44749839,
    C: 0
  });
  var Zj = J({
    id: 44749840,
    C: 0
  });
  J({
    id: 44749841,
    C: 0
  });
  var ak = J({
    id: 44749842,
    C: 0
  });
  J({
    id: 44749843,
    C: 1
  });
  var bk = J({
    id: 44749844,
    C: 1
  });
  J({
    id: 44749845,
    C: 1
  });
  var ck = J({
    id: 44749846,
    C: 1
  });
  J({
    id: 44714743,
    C: 0
  });
  J({
    id: 44719216,
    C: 0
  });
  J({
    id: 44730895,
    C: 10
  });
  J({
    id: 44730896,
    C: 10
  });
  J({
    id: 44736292,
    C: 10
  });
  J({
    id: 44736293,
    C: 10
  });
  J({
    id: 44772138,
    C: 0,
    N: Cj
  });
  J({
    id: 44772139,
    N: Cj,
    C: 1E3
  });
  J({
    id: 31061774,
    C: 10
  });
  var dk = J({
    id: 31061775,
    C: 10
  });
  J({
    id: 44715336,
    C: 10
  });
  J({
    id: 75259410,
    C: 0
  });
  J({
    id: 75259412,
    C: 0
  });
  J({
    id: 75259413,
    C: 0
  });
  J({
    id: 44773378,
    C: 10,
    N: Aj
  });
  const nativeRequestAnimationFrame = window.requestAnimationFrame;
  var ek = J({
    id: 44773379,
    C: 10,
    N: Aj
  });
  J({
    id: 44724516,
    C: 0
  });
  J({
    id: 44726389,
    C: 10
  });
  J({
    id: 44752711,
    C: 50
  });
  J({
    id: 44752052,
    C: 50
  });
  J({
    id: 44752657,
    C: 50
  });
  J({
    id: 44781407,
    N: Bj,
    C: 0
  });
  J({
    id: 44781408,
    N: Bj,
    C: 0
  });
  J({
    id: 44781409,
    N: Bj,
    C: 1E3
  });
  J({
    id: 44777647,
    N: Dj,
    C: 0
  });
  J({
    id: 44777648,
    N: Dj,
    C: 0
  });
  J({
    id: 44777649,
    N: Dj,
    C: 1E3
  });
  J({
    id: 44727953,
    C: 0
  });
  J({
    id: 44782089,
    N: Ej,
    C: 10
  });
  J({
    id: 44782090,
    N: Ej,
    C: 10
  });
  J({
    id: 44733246,
    C: 10
  });
  J({
    id: 44750823,
    C: 10,
    N: Gj
  });
  J({
    id: 44750824,
    C: 10,
    N: Gj
  });
  J({
    id: 44794282,
    C: 10,
    N: Gj
  });
  J({
    id: 44797013,
    C: 10,
    N: Gj
  });
  J({
    id: 44797014,
    C: 10,
    N: Gj
  });
  J({
    id: 44750822,
    C: 10,
    N: Gj
  });
  J({
    id: 44737473,
    C: 0,
    N: uj
  });
  J({
    id: 44771450,
    C: 0,
    N: uj
  });
  J({
    id: 44751889,
    C: 10
  });
  const nativeAddEventListener = window.addEventListener;
  J({
    id: 44751890,
    C: 10
  });
  J({
    id: 44752995,
    C: 10
  });
  J({
    id: 44752996,
    C: 10
  });
  J({
    id: 44762627,
    C: 0
  });
  J({
    id: 44762628,
    C: 0
  });
  J({
    id: 44801479,
    C: 10,
    N: Hj
  });
  J({
    id: 44801480,
    C: 10,
    N: Hj
  });
  J({
    id: 44752538,
    C: 0
  });
  J({
    id: 44754608,
    C: 10
  });
  J({
    id: 44754609,
    C: 10
  });
  J({
    id: 44770822,
    C: 10
  });
  J({
    id: 44770823,
    C: 10
  });
  J({
    id: 44770824,
    C: 10
  });
  J({
    id: 44770825,
    C: 10
  });
  J({
    id: 75259414,
    C: 0
  });
  J({
    id: 44731964,
    C: 50,
    N: Si
  });
  J({
    id: 44731965,
    C: 50,
    N: Si
  });
  J({
    id: 44767584,
    C: 0
  });
  var fk,
    gk = (null == (fk = window.document.featurePolicy) ? 0 : fk.allowedFeatures().includes("attribution-reporting")) ? 300 : 0;
  J({
    id: 44776494,
    C: gk,
    N: Jj
  });
  J({
    id: 44776495,
    C: gk,
    N: Jj
  });
  var hk,
    ik = (null == (hk = window.document.featurePolicy) || hk.allowedFeatures().includes("attribution-reporting"), 0);
  J({
    id: 44769484,
    C: ik,
    N: Kj
  });
  J({
    id: 44769485,
    C: ik,
    N: Kj
  });
  J({
    id: 44776384,
    C: 0
  });
  J({
    id: 44804616,
    C: 50,
    N: Nj
  });
  var jk = J({
      id: 44804617,
      C: 50,
      N: Nj
    }),
    kk = J({
      id: 44804618,
      C: 50,
      N: Nj
    });
  J({
    id: 44804613,
    C: 50,
    N: Oj
  });
  var lk = J({
      id: 44804614,
      C: 50,
      N: Oj
    }),
    mk = J({
      id: 44804615,
      C: 50,
      N: Oj
    });
  J({
    id: 44803783,
    C: 50
  });
  var nk = J({
      id: 44803784,
      C: 50
    }),
    ok = J({
      id: 44803785,
      C: 50
    });
  J({
    id: 44787954,
    C: 0
  });
  J({
    id: 44789282,
    C: 0
  });
  J({
    id: 44792636,
    C: 0
  });
  J({
    id: 44794298,
    C: 0
  });
  J({
    id: 44803996,
    C: 0
  });
  J({
    id: 44805453,
    C: 0
  });
  J({
    id: 44804917,
    C: 0
  });
  J({
    id: 75259415,
    C: 0
  });
  var pk = J({
      id: 75259416,
      C: 0
    }),
    qk = J({
      id: 75259420,
      C: 0
    });
  J({
    id: 44785452,
    C: 10
  });
  J({
    id: 44785453,
    C: 10
  });
  J({
    id: 45401791,
    C: 0
  });
  J({
    id: 44795414,
    C: 1,
    N: Lj
  });
  var rk = J({
      id: 44795415,
      C: 1,
      N: Lj
    }),
    sk = J({
      id: 44795416,
      C: 1,
      N: Lj
    }),
    tk = J({
      id: 44795417,
      C: 1,
      N: Lj
    });
  J({
    id: 44805102,
    C: 5,
    N: Pj
  });
  var uk = J({
      id: 44805103,
      C: 5,
      N: Pj
    }),
    vk = J({
      id: 44805104,
      C: 5,
      N: Pj
    }),
    wk = J({
      id: 44805105,
      C: 5,
      N: Pj
    }),
    xk = J({
      id: 44805106,
      C: 5,
      N: Pj
    });
  J({
    id: 44806631,
    C: 50,
    N: Qj
  });
  J({
    id: 44806632,
    C: 50,
    N: Qj
  });
  J({
    id: 44802172,
    C: 10
  });
  var yk = J({
      id: 44802173,
      C: 10
    }),
    zk = J({
      id: 44804291,
      C: 1E3,
      N: Sj
    });
  J({
    id: 44802073,
    C: 0,
    N: Rj
  });
  var Ak = J({
    id: 44802074,
    C: 1E3,
    N: Rj
  });
  J({
    id: 44802401,
    C: 0
  });
  J({
    id: 44802402,
    C: 0
  });
  J({
    id: 44802463,
    C: 1E3,
    N: Mj
  });
  J({
    id: 44805638,
    C: 10
  });
  J({
    id: 44805639,
    C: 10
  });
  J({
    id: 44805640,
    C: 10
  });
  J({
    id: 44806074,
    C: 50
  });
  J({
    id: 44806075,
    C: 50
  });
  J({
    id: 44806732,
    C: 10
  });
  J({
    id: 44806733,
    C: 10
  });
  J({
    id: 44807118,
    C: 10
  });
  J({
    id: 44807119,
    C: 10
  });
  J({
    id: 44807186,
    C: 10
  });
  J({
    id: 44807187,
    C: 10
  });
  J({
    id: 44807947,
    C: 50
  });
  var Bk = J({
    id: 44807948,
    C: 50
  });
  J({
    id: 44807614,
    C: 10
  });
  J({
    id: 44807615,
    C: 10
  });
  J({
    id: 44808024,
    C: 10
  });
  var Ck = J({
      id: 44808025,
      C: 10
    }),
    Dk = J({
      id: 44808026,
      C: 10
    }),
    Ek = {},
    mj = (Ek[32] = Si, Ek[35] = Fj, Ek);
  mj = void 0 === mj ? {} : mj;
  if (!/^\{+IMA_EXPERIMENT_STATE_JSPB\}+$/.test("{{IMA_EXPERIMENT_STATE_JSPB}}")) try {
    var nj = JSON.parse("{{IMA_EXPERIMENT_STATE_JSPB}}");
    nj instanceof Array && lj();
  } catch (a) {
    G(E.g(), "espe", a.message);
  }
  if ("undefined" === typeof window.v8_flag_map) {
    var Ji = rj.g();
    Ji.h || (Ki(), Ji.h = !0);
    var tj = Ji.j,
      Fk;
    Ji.h || (Ki(), Ji.h = !0);
    Fk = Ji.g;
    if (null != tj) {
      var Gk = new qj(sj(), Fk);
      Ri(Gk);
    }
  }
  ;
  Pi.reset();
  Ri(new Ui());
  var Hk = function (a) {
    var b = {};
    Kb(a, function (c) {
      var d = c.g,
        e = b[d];
      b.hasOwnProperty(d) ? null !== e && (c.h(e) || (b[d] = null)) : b[d] = c;
    });
    Wb(a, function (c) {
      return null === b[c.g];
    });
  };
  var Ik = {
      NONE: 0,
      Hg: 1
    },
    Jk = {
      Fg: 0,
      Bh: 1,
      Ah: 2,
      Ch: 3
    },
    Kk = {
      Be: "a",
      Gg: "d",
      df: "v"
    };
  var Lk = function () {
    this.Y = 0;
    this.g = !1;
    this.h = -1;
    this.ob = !1;
    this.sa = 0;
  };
  Lk.prototype.isVisible = function () {
    return this.ob ? .3 <= this.Y : .5 <= this.Y;
  };
  var Mk = {
      Eg: 0,
      Kg: 1
    },
    Nk = {
      668123728: 0,
      668123729: 1
    },
    Ok = {
      44731964: 0,
      44731965: 1
    },
    Pk = {
      NONE: 0,
      lh: 1,
      Pg: 2
    },
    Qk = {
      480596784: 0,
      480596785: 1,
      21063355: 2
    };
  var Rk = function () {
      this.g = null;
      this.o = !1;
      this.j = null;
    },
    Sk = function (a) {
      a.o = !0;
      return a;
    },
    Tk = function (a, b) {
      a.j && Kb(b, function (c) {
        c = a.j[c];
        void 0 !== c && a.h(c);
      });
    };
  Rk.prototype.getValue = function () {
    return this.g;
  };
  var Uk = function (a) {
    Rk.call(this);
    this.l = a;
  };
  u(Uk, Rk);
  Uk.prototype.h = function (a) {
    null === this.g && Zf(this.l, a) && (this.g = a);
  };
  var Vk = function () {
    Rk.call(this);
  };
  u(Vk, Rk);
  Vk.prototype.h = function (a) {
    null === this.g && "number" === typeof a && (this.g = a);
  };
  var Wk = function () {
    Rk.call(this);
  };
  u(Wk, Rk);
  Wk.prototype.h = function (a) {
    null === this.g && "string" === typeof a && (this.g = a);
  };
  var Xk = function () {
    this.g = {};
    this.j = !0;
    this.h = {};
  };
  Xk.prototype.reset = function () {
    this.g = {};
    this.j = !0;
    this.h = {};
  };
  var Yk = function (a, b, c) {
      a.g[b] || (a.g[b] = new Uk(c));
      return a.g[b];
    },
    Zk = function (a) {
      a.g.queryid || (a.g.queryid = new Wk());
    },
    $k = function (a, b, c) {
      (a = a.g[b]) && a.h(c);
    },
    al = function (a, b) {
      if (Yf(a.h, b)) return a.h[b];
      if (a = a.g[b]) return a.getValue();
    },
    bl = function (a) {
      var b = {},
        c = Sf(a.g, function (d) {
          return d.o;
        });
      Rf(c, function (d, e) {
        d = void 0 !== a.h[e] ? String(a.h[e]) : d.o && null !== d.g ? String(d.g) : "";
        0 < d.length && (b[e] = d);
      }, a);
      return b;
    },
    cl = function (a) {
      a = bl(a);
      var b = [];
      Rf(a, function (c, d) {
        d in Object.prototype || "undefined" != typeof c && b.push([d, ":", c].join(""));
      });
      return b;
    },
    dl = function () {
      var a = K().T,
        b = Ti();
      a.j && Kb(Vf(a.g), function (c) {
        return Tk(c, b);
      });
    };
  var el = function (a) {
    Yk(a, "od", Ik);
    Sk(Yk(a, "opac", Mk));
    Sk(Yk(a, "sbeos", Mk));
    Sk(Yk(a, "prf", Mk));
    Sk(Yk(a, "mwt", Mk));
    Yk(a, "iogeo", Mk);
  };
  var fl = document,
    L = window;
  var gl = !ic && !Db();
  var hl = function () {
    this.g = this.gb = null;
  };
  var il = function () {};
  il.prototype.now = function () {
    return 0;
  };
  il.prototype.h = function () {
    return 0;
  };
  il.prototype.j = function () {
    return 0;
  };
  il.prototype.g = function () {
    return 0;
  };
  var kl = function () {
    if (!jl()) throw Error();
  };
  u(kl, il);
  var jl = function () {
    return !(!L || !L.performance);
  };
  kl.prototype.now = function () {
    return jl() && L.performance.now ? L.performance.now() : il.prototype.now.call(this);
  };
  kl.prototype.h = function () {
    return jl() && L.performance.memory ? L.performance.memory.totalJSHeapSize || 0 : il.prototype.h.call(this);
  };
  kl.prototype.j = function () {
    return jl() && L.performance.memory ? L.performance.memory.usedJSHeapSize || 0 : il.prototype.j.call(this);
  };
  kl.prototype.g = function () {
    return jl() && L.performance.memory ? L.performance.memory.jsHeapSizeLimit || 0 : il.prototype.g.call(this);
  };
  var ll = function () {};
  ll.prototype.isVisible = function () {
    return 1 === Yh(fl);
  };
  var ml = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)"),
    ol = function () {
      var a = (this.g = v) || v;
      this.h = a.top == a ? 1 : oh(a.top) ? 2 : 3;
      3 != this.h && (a = v.top.document, this.j = a.referrer, Date.parse(a.lastModified));
      nl(this.g);
    },
    rl = function (a) {
      a = a || nl();
      for (var b = new pl(v.location.href, !1), c = null, d = a.length - 1, e = d; 0 <= e; --e) {
        var f = a[e];
        !c && ml.test(f.url) && (c = f);
        if (f.url && !f.ld) {
          b = f;
          break;
        }
      }
      e = null;
      f = a.length && a[d].url;
      0 != b.depth && f && (e = a[d]);
      return new ql(b, e, c);
    },
    nl = function (a) {
      var b = a || v,
        c = [],
        d = null;
      do {
        var e = b;
        if (oh(e)) {
          var f = e.location.href;
          d = e.document && e.document.referrer || null;
        } else f = d, d = null;
        c.push(new pl(f || ""));
        try {
          b = e.parent;
        } catch (g) {
          b = null;
        }
      } while (b && e != b);
      e = 0;
      for (b = c.length - 1; e <= b; ++e) c[e].depth = b - e;
      e = a || v;
      if (e.location && e.location.ancestorOrigins && e.location.ancestorOrigins.length == c.length - 1) for (a = 1; a < c.length; ++a) b = c[a], b.url || (b.url = e.location.ancestorOrigins[a - 1] || "", b.ld = !0);
      return c;
    },
    sl = function () {
      var a = rl();
      return a.h ? a.h.url : a.g.url;
    },
    ql = function (a, b, c) {
      this.g = a;
      this.h = b;
      this.j = c;
    },
    pl = function (a, b) {
      this.url = a;
      this.ld = !!b;
      this.depth = null;
    };
  var tl = function () {
      this.j = "&";
      this.h = {};
      this.o = 0;
      this.g = [];
    },
    ul = function (a, b) {
      var c = {};
      c[a] = b;
      return [c];
    },
    wl = function (a, b, c, d, e) {
      var f = [];
      uh(a, function (g, h) {
        (g = vl(g, b, c, d, e)) && f.push(h + "=" + g);
      });
      return f.join(b);
    },
    vl = function (a, b, c, d, e) {
      if (null == a) return "";
      b = b || "&";
      c = c || ",$";
      "string" == typeof c && (c = c.split(""));
      if (a instanceof Array) {
        if (d = d || 0, d < c.length) {
          for (var f = [], g = 0; g < a.length; g++) f.push(vl(a[g], b, c, d + 1, e));
          return f.join(c[d]);
        }
      } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(wl(a, b, c, d, e + 1)) : "...";
      return encodeURIComponent(String(a));
    },
    xl = function (a, b, c) {
      a.g.push(b);
      a.h[b] = c;
    },
    yl = function (a, b, c, d) {
      a.g.push(b);
      a.h[b] = ul(c, d);
    },
    Al = function (a, b, c) {
      b = b + "//pagead2.googlesyndication.com" + c;
      var d = zl(a) - c.length;
      if (0 > d) return "";
      a.g.sort(function (m, q) {
        return m - q;
      });
      c = null;
      for (var e = "", f = 0; f < a.g.length; f++) for (var g = a.g[f], h = a.h[g], k = 0; k < h.length; k++) {
        if (!d) {
          c = null == c ? g : c;
          break;
        }
        var n = wl(h[k], a.j, ",$");
        if (n) {
          n = e + n;
          if (d >= n.length) {
            d -= n.length;
            b += n;
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
    zl = function (a) {
      var b = 1,
        c;
      for (c in a.h) b = c.length > b ? c.length : b;
      return 3997 - b - a.j.length - 1;
    };
  var Bl = function (a, b) {
      this.g = a;
      this.depth = b;
    },
    Dl = function () {
      var a = nl(),
        b = Math.max(a.length - 1, 0),
        c = rl(a);
      a = c.g;
      var d = c.h,
        e = c.j,
        f = [];
      c = function (h, k) {
        return null == h ? k : h;
      };
      e && f.push(new Bl([e.url, e.ld ? 2 : 0], c(e.depth, 1)));
      d && d != e && f.push(new Bl([d.url, 2], 0));
      a.url && a != e && f.push(new Bl([a.url, 0], c(a.depth, b)));
      var g = Nb(f, function (h, k) {
        return f.slice(0, f.length - k);
      });
      !a.url || (e || d) && a != e || (d = wh(a.url)) && g.push([new Bl([d, 1], c(a.depth, b))]);
      g.push([]);
      return Nb(g, function (h) {
        return Cl(b, h);
      });
    };
  function Cl(a, b) {
    var c = Ob(b, function (e, f) {
        return Math.max(e, f.depth);
      }, -1),
      d = bc(c + 2);
    d[0] = a;
    Kb(b, function (e) {
      return d[e.depth + 1] = e.g;
    });
    return d;
  }
  function El() {
    var a = void 0 === a ? Dl() : a;
    return a.map(function (b) {
      return vl(b);
    });
  }
  ;
  var Fl = function () {
      this.h = new ll();
      this.g = jl() ? new kl() : new il();
    },
    Hl = function () {
      Gl();
      var a = L.document;
      return !!(a && a.body && a.body.getBoundingClientRect && "function" === typeof L.setInterval && "function" === typeof L.clearInterval && "function" === typeof L.setTimeout && "function" === typeof L.clearTimeout);
    };
  Fl.prototype.setTimeout = function (a, b) {
    return L.setTimeout(a, b);
  };
  Fl.prototype.clearTimeout = function (a) {
    L.clearTimeout(a);
  };
  var Il = function () {
    Gl();
    return El();
  };
  var Jl = function () {},
    Gl = function () {
      var a = D(Jl);
      if (!a.g) {
        if (!L) throw Error("Context has not been set and window is undefined.");
        a.g = D(Fl);
      }
      return a.g;
    };
  var Kl = function (a) {
    this.P = re(a);
  };
  u(Kl, $e);
  Kl.prototype.g = Ff([0, tf, wf, -2, zf]);
  var Ll = function (a) {
      this.j = a;
      this.g = -1;
      this.h = this.o = 0;
    },
    Ml = function (a, b) {
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
  var Nl = function (a, b) {
    this.h = a;
    this.j = b;
    this.g = new Ll(a);
  };
  var Ol = function () {
      this.g = {};
    },
    Ql = function () {
      var a = K().flags,
        b = Pl;
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
  var Rl = {
    wh: 1,
    Th: 2,
    qh: 3
  };
  var Sl = function () {
    this.j = void 0;
    this.h = this.A = 0;
    this.l = -1;
    this.T = new Xk();
    Sk(Yk(this.T, "mv", Pk)).j = void 0 === Qk ? null : Qk;
    Yk(this.T, "omid", Mk);
    Sk(Yk(this.T, "epoh", Mk));
    Sk(Yk(this.T, "epph", Mk));
    Sk(Yk(this.T, "umt", Mk)).j = void 0 === Nk ? null : Nk;
    Sk(Yk(this.T, "phel", Mk));
    Sk(Yk(this.T, "phell", Mk));
    Sk(Yk(this.T, "oseid", Rl));
    var a = this.T;
    a.g.sloi || (a.g.sloi = new Vk());
    Sk(a.g.sloi);
    Yk(this.T, "mm", Kk);
    Sk(Yk(this.T, "ovms", Jk));
    Sk(Yk(this.T, "xdi", Mk));
    Sk(Yk(this.T, "amp", Mk));
    Sk(Yk(this.T, "prf", Mk));
    Sk(Yk(this.T, "gtx", Mk));
    Sk(Yk(this.T, "mvp_lv", Mk));
    Sk(Yk(this.T, "ssmol", Mk)).j = void 0 === Ok ? null : Ok;
    Sk(Yk(this.T, "fmd", Mk));
    this.g = new Nl(Gl(), this.T);
    this.o = !1;
    this.flags = new Ol();
  };
  Sl.prototype.xd = function (a) {
    if ("string" === typeof a && 0 != a.length) {
      var b = this.T;
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
    return D(Sl);
  };
  var Tl = function (a, b, c, d, e) {
    if ((d ? a.j : Math.random()) < (e || a.g)) try {
      if (c instanceof tl) var f = c;else f = new tl(), uh(c, function (h, k) {
        var n = f,
          m = n.o++;
        xl(n, m, ul(k, h));
      });
      var g = Al(f, a.h, "/pagead/gen_204?id=" + b + "&");
      g && (Gl(), Rh(L, g));
    } catch (h) {}
  };
  var Wl = function () {
    var a = Ul;
    this.A = Vl;
    this.l = "jserror";
    this.j = !0;
    this.h = null;
    this.B = this.Sa;
    this.g = void 0 === a ? null : a;
    this.o = !1;
  };
  l = Wl.prototype;
  l.Qc = function (a) {
    this.h = a;
  };
  l.Ed = function (a) {
    this.l = a;
  };
  l.Fd = function (a) {
    this.j = a;
  };
  l.Gd = function (a) {
    this.o = a;
  };
  function generateUniqueId() {
    const timestamp = Date.now().toString(36);
    const randomNum = Math.random().toString(36).substr(2, 5);
    return `${timestamp}-${randomNum}`;
  }
  l.pb = function (a, b, c) {
    var d = this;
    return Ml(K().g.g, function () {
      try {
        if (d.g && d.g.j) {
          var e = d.g.start(a.toString(), 3);
          var f = b();
          d.g.end(e);
        } else f = b();
      } catch (h) {
        var g = d.j;
        try {
          ji(e), g = d.B(a, new Xl(Yl(h)), void 0, c);
        } catch (k) {
          d.Sa(217, k);
        }
        if (!g) throw h;
      }
      return f;
    })();
  };
  l.yd = function (a, b, c, d) {
    var e = this;
    return Ml(K().g.g, function () {
      var f = Ia.apply(0, arguments);
      return e.pb(a, function () {
        return b.apply(c, f);
      }, d);
    });
  };
  l.Sa = function (a, b, c, d, e) {
    e = e || this.l;
    try {
      var f = new tl();
      yl(f, 1, "context", a);
      Vh(b) || (b = new Xl(Yl(b)));
      b.msg && yl(f, 2, "msg", b.msg.substring(0, 512));
      var g = b.meta || {};
      if (this.h) try {
        this.h(g);
      } catch (k) {}
      if (d) try {
        d(g);
      } catch (k) {}
      xl(f, 3, [g]);
      var h = rl();
      h.h && yl(f, 4, "top", h.h.url || "");
      xl(f, 5, [{
        url: h.g.url || ""
      }, {
        url: h.g.url ? bh(h.g.url) : ""
      }]);
      Tl(this.A, e, f, this.o, c);
    } catch (k) {
      try {
        Tl(this.A, e, {
          context: "ecmserr",
          rctx: a,
          msg: Yl(k),
          url: h && h.g.url
        }, this.o, c);
      } catch (n) {}
    }
    return this.j;
  };
  var Yl = function (a) {
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
    Xl = function (a) {
      Uh.call(this, Error(a), {
        message: a
      });
    };
  u(Xl, Uh);
  var Vl,
    Zl,
    Ul = new ii(1, window),
    $l = function () {
      L && "undefined" != typeof L.google_measure_js_timing && (L.google_measure_js_timing || Ul.B());
    };
  Vl = new function () {
    var a = "https:";
    L && L.location && "http:" === L.location.protocol && (a = "http:");
    this.h = a;
    this.g = .01;
    this.j = Math.random();
  }();
  Zl = new Wl();
  L && L.document && ("complete" == L.document.readyState ? $l() : Ul.j && Of(L, "load", function () {
    $l();
  }));
  var am = function (a) {
      Zl.Qc(function (b) {
        Kb(a, function (c) {
          c(b);
        });
      });
    },
    bm = function (a, b) {
      return Zl.pb(a, b);
    },
    cm = function (a, b, c, d) {
      return Zl.yd(a, b, c, d);
    },
    dm = function (a, b, c, d) {
      Zl.Sa(a, b, c, d);
    };
  var em = Date.now(),
    fm = -1,
    gm = -1,
    hm,
    im = -1,
    jm = !1,
    km = function () {
      return Date.now() - em;
    },
    lm = function () {
      var a = K().j,
        b = 0 <= gm ? km() - gm : -1,
        c = jm ? km() - fm : -1,
        d = 0 <= im ? km() - im : -1;
      if (947190542 == a) return 100;
      if (79463069 == a) return 200;
      a = [2E3, 4E3];
      var e = [250, 500, 1E3];
      dm(637, Error(), .001);
      var f = b;
      -1 != c && c < b && (f = c);
      for (b = 0; b < a.length; ++b) if (f < a[b]) {
        var g = e[b];
        break;
      }
      void 0 === g && (g = e[a.length]);
      return -1 != d && 1500 < d && 4E3 > d ? 500 : g;
    };
  var mm = function (a, b, c) {
    var d = new C(0, 0, 0, 0);
    this.time = a;
    this.volume = null;
    this.j = b;
    this.g = d;
    this.h = c;
  };
  var nm = function (a, b, c, d, e, f, g) {
    this.j = a;
    this.h = b;
    this.l = c;
    this.g = d;
    this.o = e;
    this.B = f;
    this.A = g;
  };
  nm.prototype.getTimestamp = function () {
    return this.B;
  };
  var om = {
      currentTime: 1,
      duration: 2,
      isVpaid: 4,
      volume: 8,
      isYouTube: 16,
      isPlaying: 32
    },
    ag = {
      Ud: "start",
      FIRST_QUARTILE: "firstquartile",
      MIDPOINT: "midpoint",
      THIRD_QUARTILE: "thirdquartile",
      COMPLETE: "complete",
      ERROR: "error",
      Pe: "metric",
      Td: "pause",
      Ye: "resume",
      SKIPPED: "skip",
      VIEWABLE_IMPRESSION: "viewable_impression",
      Qe: "mute",
      cf: "unmute",
      FULLSCREEN: "fullscreen",
      Le: "exitfullscreen",
      Ge: "bufferstart",
      Fe: "bufferfinish",
      Od: "fully_viewable_audible_half_duration_impression",
      Sd: "measurable_impression",
      Ae: "abandon",
      Nd: "engagedview",
      IMPRESSION: "impression",
      Ie: "creativeview",
      LOADED: "loaded",
      yh: "progress",
      yg: "close",
      zg: "collapse",
      Re: "overlay_resize",
      Se: "overlay_unmeasurable_impression",
      Te: "overlay_unviewable_impression",
      Ve: "overlay_viewable_immediate_impression",
      Ue: "overlay_viewable_end_of_session_impression",
      Je: "custom_metric_viewable",
      Ce: "audio_audible",
      Ee: "audio_measurable",
      De: "audio_impression"
    },
    pm = "start firstquartile midpoint thirdquartile resume loaded".split(" "),
    qm = ["start", "firstquartile", "midpoint", "thirdquartile"],
    rm = ["abandon"],
    sm = {
      Oh: -1,
      Ud: 0,
      FIRST_QUARTILE: 1,
      MIDPOINT: 2,
      THIRD_QUARTILE: 3,
      COMPLETE: 4,
      Pe: 5,
      Td: 6,
      Ye: 7,
      SKIPPED: 8,
      VIEWABLE_IMPRESSION: 9,
      Qe: 10,
      cf: 11,
      FULLSCREEN: 12,
      Le: 13,
      Od: 14,
      Sd: 15,
      Ae: 16,
      Nd: 17,
      IMPRESSION: 18,
      Ie: 19,
      LOADED: 20,
      Je: 21,
      Ge: 22,
      Fe: 23,
      De: 27,
      Ee: 28,
      Ce: 29
    };
  var Uf = {
      sg: "addEventListener",
      Qg: "getMaxSize",
      Rg: "getScreenSize",
      Sg: "getState",
      Tg: "getVersion",
      zh: "removeEventListener",
      mh: "isViewable"
    },
    tm = function (a) {
      var b = a !== a.top,
        c = a.top === Bh(a),
        d = -1,
        e = 0;
      if (b && c && a.top.mraid) {
        d = 3;
        var f = a.top.mraid;
      } else d = (f = a.mraid) ? b ? c ? 2 : 1 : 0 : -1;
      f && (f.IS_GMA_SDK || (e = 2), Tf(function (g) {
        return "function" === typeof f[g];
      }) || (e = 1));
      return {
        Ba: f,
        lc: e,
        eg: d
      };
    };
  var um = function () {
    var a = window.document;
    return a && "function" === typeof a.elementFromPoint;
  };
  function vm(a, b, c) {
    try {
      a && (b = b.top);
      var d = b;
      a && null !== d && d != d.top && (d = d.top);
      try {
        var e = (void 0 === c ? 0 : c) ? new z(d.innerWidth, d.innerHeight).round() : Mg(d || window).round();
      } catch (m) {
        e = new z(-12245933, -12245933);
      }
      a = e;
      var f = a.height,
        g = a.width;
      if (-12245933 === g) return new C(g, g, g, g);
      var h = Ng(Hg(b.document).g),
        k = h.x,
        n = h.y;
      return new C(n, k + g, n + f, k);
    } catch (m) {
      return new C(-12245933, -12245933, -12245933, -12245933);
    }
  }
  ;
  var xm = function (a, b) {
      if ("string" === typeof b) (b = wm(a, b)) && (a.style[b] = void 0);else for (var c in b) {
        var d = a,
          e = b[c],
          f = wm(d, c);
        f && (d.style[f] = e);
      }
    },
    ym = {},
    wm = function (a, b) {
      var c = ym[b];
      if (!c) {
        var d = Bg(b);
        c = d;
        void 0 === a.style[d] && (d = (lc ? "Webkit" : kc ? "Moz" : ic ? "ms" : null) + Dg(d), void 0 !== a.style[d] && (c = d));
        ym[b] = c;
      }
      return c;
    },
    zm = function (a, b) {
      var c = a.style[Bg(b)];
      return "undefined" !== typeof c ? c : a.style[wm(a, b)] || "";
    },
    Am = function (a, b) {
      var c = Gg(a);
      return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : "";
    },
    Bm = function (a) {
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
    Cm = function (a) {
      var b = Gg(a),
        c = new vg(0, 0);
      var d = b ? Gg(b) : document;
      d = !ic || 9 <= Number(Dc) || Lg(Hg(d).g) ? d.documentElement : d.body;
      if (a == d) return c;
      a = Bm(a);
      b = Ng(Hg(b).g);
      c.x = a.left + b.x;
      c.y = a.top + b.y;
      return c;
    },
    Dm = function (a, b) {
      var c = new vg(0, 0),
        d = B(Gg(a));
      if (!dc(d, "parent")) return c;
      do {
        if (d == b) var e = Cm(a);else e = Bm(a), e = new vg(e.left, e.top);
        c.x += e.x;
        c.y += e.y;
      } while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent));
      return c;
    },
    Em = function () {
      var a = "100%";
      "number" == typeof a && (a = Math.round(a) + "px");
      return a;
    },
    Gm = function (a) {
      var b = Fm;
      if ("none" != (Am(a, "display") || (a.currentStyle ? a.currentStyle.display : null) || a.style && a.style.display)) return b(a);
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
    Fm = function (a) {
      var b = a.offsetWidth,
        c = a.offsetHeight,
        d = lc && !b && !c;
      return (void 0 === b || d) && a.getBoundingClientRect ? (a = Bm(a), new z(a.right - a.left, a.bottom - a.top)) : new z(b, c);
    },
    Km = function (a) {
      var b = Gg(a),
        c = ic && a.currentStyle;
      if (c && Lg(Hg(b).g) && "auto" != c.width && "auto" != c.height && !c.boxSizing) return b = Hm(a, c.width, "width", "pixelWidth"), a = Hm(a, c.height, "height", "pixelHeight"), new z(b, a);
      c = new z(a.offsetWidth, a.offsetHeight);
      if (ic) {
        b = Im(a, "paddingLeft");
        var d = Im(a, "paddingRight"),
          e = Im(a, "paddingTop"),
          f = Im(a, "paddingBottom");
        b = new C(e, d, f, b);
      } else b = Am(a, "paddingLeft"), d = Am(a, "paddingRight"), e = Am(a, "paddingTop"), f = Am(a, "paddingBottom"), b = new C(parseFloat(e), parseFloat(d), parseFloat(f), parseFloat(b));
      !ic || 9 <= Number(Dc) ? (d = Am(a, "borderLeftWidth"), e = Am(a, "borderRightWidth"), f = Am(a, "borderTopWidth"), a = Am(a, "borderBottomWidth"), a = new C(parseFloat(f), parseFloat(e), parseFloat(a), parseFloat(d))) : (d = Jm(a, "borderLeft"), e = Jm(a, "borderRight"), f = Jm(a, "borderTop"), a = Jm(a, "borderBottom"), a = new C(f, e, a, d));
      return new z(c.width - a.left - b.left - b.right - a.right, c.height - a.top - b.top - b.bottom - a.bottom);
    },
    Hm = function (a, b, c, d) {
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
    Im = function (a, b) {
      return (b = a.currentStyle ? a.currentStyle[b] : null) ? Hm(a, b, "left", "pixelLeft") : 0;
    },
    Lm = {
      thin: 2,
      medium: 4,
      thick: 6
    },
    Jm = function (a, b) {
      if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) return 0;
      b = a.currentStyle ? a.currentStyle[b + "Width"] : null;
      return b in Lm ? Lm[b] : Hm(a, b, "left", "pixelLeft");
    };
  var Mm = function (a, b) {
    b = Math.pow(10, b);
    return Math.floor(a * b) / b;
  };
  function Nm(a, b, c, d) {
    if (!a) return {
      value: d,
      done: !1
    };
    d = b(d, a);
    var e = c(d, a);
    return !e && dc(a, "parentElement") ? Nm(Sg(a), b, c, d) : {
      done: e,
      value: d
    };
  }
  var Om = function (a, b, c, d) {
    if (!a) return d;
    d = Nm(a, b, c, d);
    if (!d.done) try {
      var e = Gg(a),
        f = e && B(e);
      return Om(f && f.frameElement, b, c, d.value);
    } catch (g) {}
    return d.value;
  };
  function Pm(a) {
    var b = !ic || Ac();
    return Om(a, function (c, d) {
      c = dc(d, "style") && d.style && zm(d, "visibility");
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
  var Qm = function (a) {
      return Om(a, function (b, c) {
        return !(!dc(c, "style") || !c.style || "none" !== zm(c, "display"));
      }, function (b) {
        return b;
      }, !1) ? !0 : Pm(a);
    },
    Rm = function (a) {
      return new C(a.top, a.right, a.bottom, a.left);
    },
    Sm = function (a) {
      var b = a.top || 0,
        c = a.left || 0;
      return new C(b, c + (a.width || 0), b + (a.height || 0), c);
    },
    Tm = function (a) {
      return null != a && 0 <= a && 1 >= a;
    };
  function Um() {
    var a = tb();
    return a ? Pb("AmazonWebAppPlatform;Android TV;Apple TV;AppleTV;BRAVIA;BeyondTV;Freebox;GoogleTV;HbbTV;LongTV;MiBOX;MiTV;NetCast.TV;Netcast;Opera TV;PANASONIC;POV_TV;SMART-TV;SMART_TV;SWTV;Smart TV;SmartTV;TV Store;UnionTV;WebOS".split(";"), function (b) {
      return ob(a, b);
    }) || ob(a, "OMI/") && !ob(a, "XiaoMi/") ? !0 : ob(a, "Presto") && ob(a, "Linux") && !ob(a, "X11") && !ob(a, "Android") && !ob(a, "Mobi") : !1;
  }
  function Vm() {
    var a = tb();
    return ob(a, "AppleTV") || ob(a, "Apple TV") || ob(a, "CFNetwork") || ob(a, "tvOS");
  }
  function Wm() {
    var a;
    (a = ob(tb(), "CrKey") || ob(tb(), "PlayStation") || ob(tb(), "Roku") || Um() || ob(tb(), "Xbox") || Vm()) || (a = tb(), a = ob(a, "sdk_google_atv_x86") || ob(a, "Android TV"));
    return a;
  }
  ;
  var Ym = function () {
      this.j = !oh(L.top);
      this.B = Wg() || $g();
      var a = nl();
      a = 0 < a.length && null != a[a.length - 1] && null != a[a.length - 1].url ? ((a = a[a.length - 1].url.match(ah)[3] || null) ? decodeURI(a) : a) || "" : "";
      this.domain = a;
      this.g = new C(0, 0, 0, 0);
      this.l = new z(0, 0);
      this.o = new z(0, 0);
      this.I = new C(0, 0, 0, 0);
      this.A = 0;
      this.K = !1;
      this.h = !(!L || !tm(L).Ba);
      Xm(this);
    },
    Zm = function (a, b) {
      b && b.screen && (a.l = new z(b.screen.width, b.screen.height));
    },
    $m = function (a, b) {
      var c = a.g ? new z(a.g.getWidth(), a.g.getHeight()) : new z(0, 0);
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
            n = h.scrollWidth,
            m = h.offsetHeight,
            q = h.offsetWidth;
          h.clientHeight != m && (k = g.scrollHeight, n = g.scrollWidth, m = g.offsetHeight, q = g.offsetWidth);
          k > c.height ? k > m ? (d = k, e = n) : (d = m, e = q) : k < m ? (d = k, e = n) : (d = m, e = q);
        }
        var t = new z(e, d);
      } catch (w) {
        t = new z(-12245933, -12245933);
      }
      a.o = t;
    },
    Xm = function (a) {
      L && L.document && (a.I = vm(!1, L, a.B), a.g = vm(!0, L, a.B), $m(a, L), Zm(a, L));
    },
    bn = function () {
      var a = an();
      if (0 < a.A || a.K) return !0;
      a = Gl().h.isVisible();
      var b = 0 === Yh(fl);
      return a || b;
    },
    an = function () {
      return D(Ym);
    };
  var cn = function (a) {
    this.j = a;
    this.h = 0;
    this.g = null;
  };
  cn.prototype.cancel = function () {
    Gl().clearTimeout(this.g);
    this.g = null;
  };
  var dn = function (a) {
    var b = Gl(),
      c = K().g.g;
    a.g = b.setTimeout(Ml(c, cm(143, function () {
      a.h++;
      a.j.sample();
    })), lm());
  };
  var en = function (a, b, c) {
    this.j = a;
    this.ma = void 0 === c ? "na" : c;
    this.l = [];
    this.ua = !1;
    this.o = new mm(-1, !0, this);
    this.g = this;
    this.K = b;
    this.G = this.D = !1;
    this.X = "uk";
    this.M = !1;
    this.B = !0;
  };
  en.prototype.F = function () {
    return !1;
  };
  en.prototype.initialize = function () {
    return this.ua = !0;
  };
  en.prototype.vb = function () {
    return this.g.X;
  };
  en.prototype.Lb = function () {
    return this.g.G;
  };
  var gn = function (a, b, c) {
    if (!a.G || (void 0 === c ? 0 : c)) a.G = !0, a.X = b, a.K = 0, a.g != a || fn(a);
  };
  en.prototype.getName = function () {
    return this.g.ma;
  };
  en.prototype.Za = function () {
    return this.g.Z();
  };
  en.prototype.Z = function () {
    return {};
  };
  en.prototype.Pa = function () {
    return this.g.K;
  };
  var hn = function (a, b) {
    Tb(a.l, b) || (a.l.push(b), b.xb(a.g), b.ab(a.o), b.La() && (a.D = !0));
  };
  en.prototype.U = function () {
    var a = an();
    a.g = vm(!0, this.j, a.B);
  };
  en.prototype.V = function () {
    Zm(an(), this.j);
  };
  en.prototype.aa = function () {
    return this.o.g;
  };
  var jn = function (a) {
    a = a.g;
    a.V();
    a.U();
    var b = an();
    b.I = vm(!1, a.j, b.B);
    $m(an(), a.j);
    a.o.g = a.aa();
  };
  en.prototype.sample = function () {};
  en.prototype.isActive = function () {
    return this.g.B;
  };
  var kn = function (a) {
      a.D = a.l.length ? Pb(a.l, function (b) {
        return b.La();
      }) : !1;
    },
    ln = function (a) {
      var b = Yb(a.l);
      Kb(b, function (c) {
        c.ab(a.o);
      });
    },
    fn = function (a) {
      var b = Yb(a.l);
      Kb(b, function (c) {
        c.xb(a.g);
      });
      a.g != a || ln(a);
    };
  l = en.prototype;
  l.xb = function (a) {
    var b = this.g;
    this.g = a.Pa() >= this.K ? a : this;
    b !== this.g ? (this.B = this.g.B, fn(this)) : this.B !== this.g.B && (this.B = this.g.B, fn(this));
  };
  l.ab = function (a) {
    if (a.h === this.g) {
      var b = this.o,
        c = this.D;
      if (c = a && (void 0 === c || !c || b.volume == a.volume) && b.j == a.j) b = b.g, c = a.g, c = b == c ? !0 : b && c ? b.top == c.top && b.right == c.right && b.bottom == c.bottom && b.left == c.left : !1;
      this.o = a;
      !c && ln(this);
    }
  };
  l.La = function () {
    return this.D;
  };
  l.W = function () {
    this.M = !0;
  };
  l.xa = function () {
    return this.M;
  };
  var mn = function (a, b, c, d) {
    this.j = a;
    this.g = new C(0, 0, 0, 0);
    this.l = new C(0, 0, 0, 0);
    this.h = b;
    this.T = c;
    this.G = d;
    this.F = !1;
    this.timestamp = -1;
    this.I = new nm(b.o, this.g, new C(0, 0, 0, 0), 0, 0, km(), 0);
  };
  l = mn.prototype;
  l.Vc = function () {
    return !0;
  };
  l.Xb = function () {};
  l.W = function () {
    if (!this.xa()) {
      var a = this.h;
      Ub(a.l, this);
      a.D && this.La() && kn(a);
      this.Xb();
      this.F = !0;
    }
  };
  l.xa = function () {
    return this.F;
  };
  l.Za = function () {
    return this.h.Za();
  };
  l.Pa = function () {
    return this.h.Pa();
  };
  l.vb = function () {
    return this.h.vb();
  };
  l.Lb = function () {
    return this.h.Lb();
  };
  l.xb = function () {};
  l.ab = function () {
    this.Ya();
  };
  l.La = function () {
    return this.G;
  };
  var nn = function (a) {
    this.l = !1;
    this.g = a;
    this.o = function () {};
  };
  l = nn.prototype;
  l.Pa = function () {
    return this.g.Pa();
  };
  l.vb = function () {
    return this.g.vb();
  };
  l.Lb = function () {
    return this.g.Lb();
  };
  l.create = function (a, b, c) {
    var d = null;
    this.g && (d = this.Yb(a, b, c), hn(this.g, d));
    return d;
  };
  l.Pd = function () {
    return this.Eb();
  };
  l.Eb = function () {
    return !1;
  };
  l.init = function (a) {
    return this.g.initialize() ? (hn(this.g, this), this.o = a, !0) : !1;
  };
  l.xb = function (a) {
    0 == a.Pa() && this.o(a.vb(), this);
  };
  l.ab = function () {};
  l.La = function () {
    return !1;
  };
  l.W = function () {
    this.l = !0;
  };
  l.xa = function () {
    return this.l;
  };
  l.Za = function () {
    return {};
  };
  var on = function (a, b, c) {
      this.j = void 0 === c ? 0 : c;
      this.h = a;
      this.g = null == b ? "" : b;
    },
    pn = function (a) {
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
    qn = function (a, b) {
      return a.j < b.j ? !0 : a.j > b.j ? !1 : a.h < b.h ? !0 : a.h > b.h ? !1 : typeof a.g < typeof b.g ? !0 : typeof a.g > typeof b.g ? !1 : a.g < b.g;
    };
  var rn = function () {
    this.j = 0;
    this.g = [];
    this.h = !1;
  };
  rn.prototype.add = function (a, b, c) {
    ++this.j;
    a = new on(a, b, c);
    this.g.push(new on(a.h, a.g, a.j + this.j / 4096));
    this.h = !0;
    return this;
  };
  var sn = function (a, b) {
      Kb(b.g, function (c) {
        a.add(c.h, c.g, pn(c));
      });
    },
    tn = function (a, b) {
      var c = void 0 === c ? 0 : c;
      var d = void 0 === d ? !0 : d;
      uh(b, function (e, f) {
        d && void 0 === e || a.add(f, e, c);
      });
      return a;
    },
    vn = function (a) {
      var b = un;
      a.h && ($b(a.g, function (c, d) {
        return qn(d, c) ? 1 : qn(c, d) ? -1 : 0;
      }), a.h = !1);
      return Ob(a.g, function (c, d) {
        d = b(d);
        return "" + c + ("" != c && "" != d ? "&" : "") + d;
      }, "");
    };
  var un = function (a) {
    var b = a.h;
    a = a.g;
    return "" === a ? b : "boolean" === typeof a ? a ? b : "" : Array.isArray(a) ? 0 === a.length ? b : b + "=" + a.join() : b + "=" + (Tb(["mtos", "tos", "p"], b) ? a : encodeURIComponent(a));
  };
  var wn = function (a) {
    var b = void 0 === b ? !0 : b;
    this.g = new rn();
    void 0 !== a && sn(this.g, a);
    b && this.g.add("v", "unreleased", -16);
  };
  wn.prototype.toString = function () {
    var a = "//pagead2.googlesyndication.com//pagead/gen_204",
      b = vn(this.g);
    0 < b.length && (a += "?" + b);
    return a;
  };
  var xn = function (a) {
      var b = [],
        c = [];
      Rf(a, function (d, e) {
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
    yn = function (a) {
      a = a.toString();
      a = a.substring(0, 4E3);
      Gl();
      Rh(L, a);
    };
  var zn = function () {
    this.g = 0;
  };
  function An(a) {
    a && "function" == typeof a.W && a.W();
  }
  ;
  var M = function () {
    this.K = this.K;
    this.I = this.I;
  };
  M.prototype.K = !1;
  M.prototype.xa = function () {
    return this.K;
  };
  M.prototype.W = function () {
    this.K || (this.K = !0, this.L());
  };
  var N = function (a, b) {
      Bn(a, ab(An, b));
    },
    Bn = function (a, b) {
      a.K ? b() : (a.I || (a.I = []), a.I.push(b));
    };
  M.prototype.L = function () {
    if (this.I) for (; this.I.length;) this.I.shift()();
  };
  var Cn = function (a, b, c) {
    Kb(a.j, function (d) {
      var e = a.g;
      if (!d.g && (d.j(b, c), d.o())) {
        d.g = !0;
        var f = d.h(),
          g = new rn();
        g.add("id", "av-js");
        g.add("type", "verif");
        g.add("vtype", d.l);
        d = D(zn);
        g.add("i", d.g++);
        g.add("adk", e);
        tn(g, f);
        e = new wn(g);
        yn(e);
      }
    });
  };
  var Dn = function () {
      this.h = this.j = this.o = this.g = 0;
    },
    En = function (a, b, c, d) {
      b && (a.g += c, a.h += c, a.o += c, a.j = Math.max(a.j, a.o));
      if (void 0 === d ? !b : d) a.o = 0;
    };
  var Fn = [1, .75, .5, .3, 0],
    Gn = function (a) {
      this.h = a = void 0 === a ? Fn : a;
      this.g = Nb(this.h, function () {
        return new Dn();
      });
    },
    In = function (a, b) {
      return Hn(a, function (c) {
        return c.g;
      }, void 0 === b ? !0 : b);
    },
    Kn = function (a, b) {
      return Jn(a, b, function (c) {
        return c.g;
      });
    },
    Ln = function (a, b) {
      return Hn(a, function (c) {
        return c.j;
      }, void 0 === b ? !0 : b);
    },
    Mn = function (a, b) {
      return Jn(a, b, function (c) {
        return c.j;
      });
    },
    Nn = function (a, b) {
      return Jn(a, b, function (c) {
        return c.h;
      });
    },
    On = function (a) {
      Kb(a.g, function (b) {
        b.h = 0;
      });
    },
    Pn = function (a, b, c, d, e, f, g) {
      g = void 0 === g ? !0 : g;
      c = f ? Math.min(b, c) : c;
      for (f = 0; f < a.h.length; f++) {
        var h = a.h[f],
          k = 0 < c && c >= h;
        h = !(0 < b && b >= h) || d;
        En(a.g[f], g && k, e, !g || h);
      }
    },
    Hn = function (a, b, c) {
      a = Nb(a.g, function (d) {
        return b(d);
      });
      return c ? a : Qn(a);
    },
    Jn = function (a, b, c) {
      var d = Sb(a.h, function (e) {
        return b <= e;
      });
      return -1 == d ? 0 : c(a.g[d]);
    },
    Qn = function (a) {
      return Nb(a, function (b, c, d) {
        return 0 < c ? d[c] - d[c - 1] : d[c];
      });
    };
  var Rn = function () {
      this.h = new Gn();
      this.X = new Dn();
      this.G = this.B = -1;
      this.ga = 1E3;
      this.ba = new Gn([1, .9, .8, .7, .6, .5, .4, .3, .2, .1, 0]);
      this.M = this.H = -1;
    },
    Sn = function (a, b) {
      return Ln(a.h, void 0 === b ? !0 : b);
    };
  Rn.prototype.K = function (a, b, c, d) {
    this.B = -1 != this.B ? Math.min(this.B, b.Y) : b.Y;
    this.G = Math.max(this.G, b.Y);
    this.H = -1 != this.H ? Math.min(this.H, b.sa) : b.sa;
    this.M = Math.max(this.M, b.sa);
    Pn(this.ba, b.sa, c.sa, b.g, a, d);
    Pn(this.h, b.Y, c.Y, b.g, a, d);
    c = d || c.ob != b.ob ? c.isVisible() && b.isVisible() : c.isVisible();
    b = !b.isVisible() || b.g;
    En(this.X, c, a, b);
  };
  Rn.prototype.Ra = function () {
    return this.X.j >= this.ga;
  };
  if (fl && fl.URL) {
    var Tn = fl.URL,
      Un;
    if (Un = !!Tn) {
      var Vn;
      a: {
        if (Tn) {
          var Wn = RegExp(".*[&#?]google_debug(=[^&]*)?(&.*)?$");
          try {
            var Xn = Wn.exec(decodeURIComponent(Tn));
            if (Xn) {
              Vn = Xn[1] && 1 < Xn[1].length ? Xn[1].substring(1) : "true";
              break a;
            }
          } catch (a) {}
        }
        Vn = "";
      }
      Un = 0 < Vn.length;
    }
    Zl.Fd(!Un);
  }
  var Yn = function (a, b, c, d) {
    var e = void 0 === e ? !1 : e;
    c = cm(d, c);
    Of(a, b, c, {
      capture: e
    });
  };
  var Zn = new C(0, 0, 0, 0);
  function $n(a, b) {
    b = ao(b);
    return 0 === b ? 0 : ao(a) / b;
  }
  function ao(a) {
    return Math.max(a.bottom - a.top, 0) * Math.max(a.right - a.left, 0);
  }
  function bo(a, b) {
    if (!a || !b) return !1;
    for (var c = 0; null !== a && 100 > c++;) {
      if (a === b) return !0;
      try {
        if (a = Sg(a) || a) {
          var d = Gg(a),
            e = d && B(d),
            f = e && e.frameElement;
          f && (a = f);
        }
      } catch (g) {
        break;
      }
    }
    return !1;
  }
  function co(a, b, c) {
    if (!a || !b) return !1;
    b = Dh(Ch(a), -b.left, -b.top);
    a = (b.left + b.right) / 2;
    b = (b.top + b.bottom) / 2;
    oh(window.top) && window.top && window.top.document && (window = window.top);
    if (!um()) return !1;
    a = window.document.elementFromPoint(a, b);
    if (!a) return !1;
    b = (b = (b = Gg(c)) && b.defaultView && b.defaultView.frameElement) && bo(b, a);
    var d = a === c;
    a = !d && a && Vg(a, function (e) {
      return e === c;
    });
    return !(b || d || a);
  }
  function eo(a, b, c, d) {
    return an().j ? !1 : 0 >= a.getWidth() || 0 >= a.getHeight() ? !0 : c && d ? bm(208, function () {
      return co(a, b, c);
    }) : !1;
  }
  ;
  var fo = new C(0, 0, 0, 0),
    ho = function (a, b, c) {
      M.call(this);
      this.position = Ch(fo);
      this.Fc = this.uc();
      this.md = -2;
      this.ig = Date.now();
      this.we = -1;
      this.zc = b;
      this.yc = null;
      this.Ib = !1;
      this.Kc = null;
      this.opacity = -1;
      this.Yf = c;
      this.jg = !1;
      this.nd = function () {};
      this.xe = function () {};
      this.ta = new hl();
      this.ta.gb = a;
      this.ta.g = a;
      this.Qa = !1;
      this.kb = {
        qd: null,
        pd: null
      };
      this.te = !0;
      this.Wb = null;
      this.yb = this.Lf = !1;
      K().A++;
      this.pa = this.gd();
      this.ve = -1;
      this.ca = null;
      this.he = this.Jf = !1;
      this.T = new Xk();
      el(this.T);
      go(this);
      1 == this.Yf ? $k(this.T, "od", 1) : $k(this.T, "od", 0);
    };
  u(ho, M);
  ho.prototype.L = function () {
    this.ta.g && (this.kb.qd && (Pf(this.ta.g, "mouseover", this.kb.qd), this.kb.qd = null), this.kb.pd && (Pf(this.ta.g, "mouseout", this.kb.pd), this.kb.pd = null));
    this.Wb && this.Wb.W();
    this.ca && this.ca.W();
    delete this.Fc;
    delete this.nd;
    delete this.xe;
    delete this.ta.gb;
    delete this.ta.g;
    delete this.kb;
    delete this.Wb;
    delete this.ca;
    delete this.T;
    M.prototype.L.call(this);
  };
  ho.prototype.lb = function () {
    return this.ca ? this.ca.g : this.position;
  };
  ho.prototype.xd = function (a) {
    K().xd(a);
  };
  var go = function (a) {
    a = a.ta.gb;
    var b;
    if (b = a && a.getAttribute) b = /-[a-z]/.test("googleAvInapp") ? !1 : gl && a.dataset ? "googleAvInapp" in a.dataset : a.hasAttribute ? a.hasAttribute("data-" + Cg()) : !!a.getAttribute("data-" + Cg());
    b && (an().h = !0);
  };
  ho.prototype.La = function () {
    return !1;
  };
  ho.prototype.uc = function () {
    return new Rn();
  };
  ho.prototype.oa = function () {
    return this.Fc;
  };
  var io = function (a, b) {
      b != a.yb && (a.yb = b, a = an(), b ? a.A++ : 0 < a.A && a.A--);
    },
    jo = function (a, b) {
      if (a.ca) {
        if (b.getName() === a.ca.getName()) return;
        a.ca.W();
        a.ca = null;
      }
      b = b.create(a.ta.g, a.T, a.La());
      if (b = null != b && b.Vc() ? b : null) a.ca = b;
    },
    ko = function (a, b, c) {
      if (!a.yc || -1 == a.zc || -1 === b.getTimestamp() || -1 === a.yc.getTimestamp()) return 0;
      a = b.getTimestamp() - a.yc.getTimestamp();
      return a > c ? 0 : a;
    };
  ho.prototype.ee = function (a) {
    return ko(this, a, 1E4);
  };
  var lo = function (a, b, c) {
      if (a.ca) {
        a.ca.Ya();
        var d = a.ca.I,
          e = d.j,
          f = e.g;
        if (null != d.l) {
          var g = d.h;
          a.Kc = new vg(g.left - f.left, g.top - f.top);
        }
        f = a.Sc() ? Math.max(d.g, d.o) : d.g;
        g = {};
        null !== e.volume && (g.volume = e.volume);
        e = a.ee(d);
        a.yc = d;
        a.Jd(f, b, c, !1, g, e, d.A);
      }
    },
    mo = function (a) {
      if (a.Ib && a.Wb) {
        var b = 1 == al(a.T, "od"),
          c = an().g,
          d = a.Wb,
          e = a.ca ? a.ca.getName() : "ns",
          f = new z(c.getWidth(), c.getHeight());
        c = a.Sc();
        a = {
          gg: e,
          Kc: a.Kc,
          rg: f,
          Sc: c,
          Y: a.pa.Y,
          mg: b
        };
        if (b = d.h) {
          b.Ya();
          e = b.I;
          f = e.j.g;
          var g = null,
            h = null;
          null != e.l && f && (g = e.h, g = new vg(g.left - f.left, g.top - f.top), h = new z(f.right - f.left, f.bottom - f.top));
          e = c ? Math.max(e.g, e.o) : e.g;
          c = {
            gg: b.getName(),
            Kc: g,
            rg: h,
            Sc: c,
            mg: !1,
            Y: e
          };
        } else c = null;
        c && Cn(d, a, c);
      }
    };
  l = ho.prototype;
  l.Jd = function (a, b, c, d, e, f, g) {
    this.Qa || (this.Ib && (a = this.Xc(a, c, e, g), d = d && this.pa.Y >= (this.ob() ? .3 : .5), this.Kd(f, a, d), this.zc = b, 0 < a.Y && -1 === this.ve && (this.ve = b), -1 == this.we && this.Ra() && (this.we = b), -2 == this.md && (this.md = ao(this.lb()) ? a.Y : -1), this.pa = a), this.nd(this));
  };
  l.Kd = function (a, b, c) {
    this.oa().K(a, b, this.pa, c);
  };
  l.gd = function () {
    return new Lk();
  };
  l.Xc = function (a, b, c, d) {
    c = this.gd();
    c.g = b;
    b = Gl().h;
    b = 0 === Yh(fl) ? -1 : b.isVisible() ? 0 : 1;
    c.h = b;
    c.Y = this.bd(a);
    c.ob = this.ob();
    c.sa = d;
    return c;
  };
  l.bd = function (a) {
    return 0 === this.opacity && 1 === al(this.T, "opac") ? 0 : a;
  };
  l.ob = function () {
    return !1;
  };
  l.Sc = function () {
    return this.Jf || this.Lf;
  };
  l.va = function () {
    return 0;
  };
  l.Ra = function () {
    return this.Fc.Ra();
  };
  l.ge = function () {
    var a = this.Ib;
    a = (this.he || this.xa()) && !a;
    var b = 2 !== K().h || this.jg;
    return this.Qa || b && a ? 2 : this.Ra() ? 4 : 3;
  };
  l.sc = function () {
    return 0;
  };
  var no = function (a, b, c) {
    b && (a.nd = b);
    c && (a.xe = c);
  };
  var oo = function () {};
  oo.prototype.next = function () {
    return po;
  };
  var po = {
    done: !0,
    value: void 0
  };
  oo.prototype.tb = function () {
    return this;
  };
  var qo = function () {
      this.o = this.g = this.j = this.h = this.l = 0;
    },
    ro = function (a) {
      var b = {};
      b = (b.ptlt = Date.now() - a.l, b);
      var c = a.h;
      c && (b.pnk = c);
      (c = a.j) && (b.pnc = c);
      (c = a.o) && (b.pnmm = c);
      (a = a.g) && (b.pns = a);
      return b;
    };
  var so = function () {
    Lk.call(this);
    this.fullscreen = !1;
    this.volume = void 0;
    this.paused = !1;
    this.mediaTime = -1;
  };
  u(so, Lk);
  var to = function (a) {
    return Tm(a.volume) && 0 < a.volume;
  };
  var vo = function (a, b, c, d) {
      c = void 0 === c ? !0 : c;
      d = void 0 === d ? function () {
        return !0;
      } : d;
      return function (e) {
        var f = e[a];
        if (Array.isArray(f) && d(e)) return uo(f, b, c);
      };
    },
    wo = function (a, b) {
      return function (c) {
        return b(c) ? c[a] : void 0;
      };
    },
    xo = function (a) {
      return function (b) {
        for (var c = 0; c < a.length; c++) if (a[c] === b.e || void 0 === a[c] && !b.hasOwnProperty("e")) return !0;
        return !1;
      };
    },
    uo = function (a, b, c) {
      return void 0 === c || c ? Mb(a, function (d, e) {
        return Tb(b, e);
      }) : Nb(b, function (d, e, f) {
        return a.slice(0 < e ? f[e - 1] + 1 : 0, d + 1).reduce(function (g, h) {
          return g + h;
        }, 0);
      });
    };
  var yo = xo([void 0, 1, 2, 3, 4, 8, 16]),
    zo = xo([void 0, 4, 8, 16]),
    Ao = {
      sv: "sv",
      v: "v",
      cb: "cb",
      e: "e",
      nas: "nas",
      msg: "msg",
      "if": "if",
      sdk: "sdk",
      p: "p",
      p0: wo("p0", zo),
      p1: wo("p1", zo),
      p2: wo("p2", zo),
      p3: wo("p3", zo),
      cp: "cp",
      tos: "tos",
      mtos: "mtos",
      amtos: "amtos",
      mtos1: vo("mtos1", [0, 2, 4], !1, zo),
      mtos2: vo("mtos2", [0, 2, 4], !1, zo),
      mtos3: vo("mtos3", [0, 2, 4], !1, zo),
      mcvt: "mcvt",
      ps: "ps",
      scs: "scs",
      bs: "bs",
      vht: "vht",
      mut: "mut",
      a: "a",
      a0: wo("a0", zo),
      a1: wo("a1", zo),
      a2: wo("a2", zo),
      a3: wo("a3", zo),
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
      c0: wo("c0", zo),
      c1: wo("c1", zo),
      c2: wo("c2", zo),
      c3: wo("c3", zo),
      mc: "mc",
      nc: "nc",
      mv: "mv",
      nv: "nv",
      qmt: wo("qmtos", yo),
      qnc: wo("qnc", yo),
      qmv: wo("qmv", yo),
      qnv: wo("qnv", yo),
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
      ss0: wo("ss0", zo),
      ss1: wo("ss1", zo),
      ss2: wo("ss2", zo),
      ss3: wo("ss3", zo),
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
    Bo = Object.assign({}, Ao, {
      avid: function (a) {
        return function () {
          return a;
        };
      }("audio"),
      avas: "avas",
      vs: "vs"
    }),
    Co = {
      atos: "atos",
      avt: vo("atos", [2]),
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
  var Do = function () {
    this.h = this.g = "";
  };
  var Eo = function () {},
    Fo = function (a, b) {
      var c = {};
      if (void 0 !== a) if (null != b) for (var d in b) {
        var e = b[d];
        d in Object.prototype || null != e && (c[d] = "function" === typeof e ? e(a) : a[e]);
      } else fg(c, a);
      return vn(tn(new rn(), c));
    };
  var Go = function () {
    var a = {};
    this.h = (a.vs = [1, 0], a.vw = [0, 1], a.am = [2, 2], a.a = [4, 4], a.f = [8, 8], a.bm = [16, 16], a.b = [32, 32], a.avw = [0, 64], a.avs = [64, 0], a.pv = [256, 256], a.gdr = [0, 512], a.p = [0, 1024], a.r = [0, 2048], a.m = [0, 4096], a.um = [0, 8192], a.ef = [0, 16384], a.s = [0, 32768], a.pmx = [0, 16777216], a.mut = [33554432, 33554432], a.umutb = [67108864, 67108864], a.tvoff = [134217728, 134217728], a);
    this.g = {};
    for (var b in this.h) 0 < this.h[b][1] && (this.g[b] = 0);
    this.j = 0;
  };
  Go.prototype.reportEvent = function (a) {
    var b = this.h[a],
      c = b[1];
    this.j += b[0];
    0 < c && 0 == this.g[a] && (this.g[a] = 1);
  };
  var Ho = function (a) {
      var b = Wf(a.h),
        c = 0,
        d;
      for (d in a.g) Tb(b, d) && 1 == a.g[d] && (c += a.h[d][1], a.g[d] = 2);
      return c;
    },
    Uo = function (a) {
      var b = 0,
        c;
      for (c in a.g) {
        var d = a.g[c];
        if (1 == d || 2 == d) b += a.h[c][1];
      }
      return b;
    };
  var Vo = function () {
    this.g = this.h = 0;
  };
  Vo.prototype.getValue = function () {
    return this.h;
  };
  var Wo = function (a, b, c) {
    32 <= b || (a.g & 1 << b && !c ? a.h &= ~(1 << b) : a.g & 1 << b || !c || (a.h |= 1 << b), a.g |= 1 << b);
  };
  var Xo = function () {
    Rn.call(this);
    this.j = new Dn();
    this.V = this.D = this.J = 0;
    this.I = -1;
    this.ma = new Dn();
    this.l = new Dn();
    this.g = new Gn();
    this.A = this.o = -1;
    this.F = new Dn();
    this.ga = 2E3;
    this.U = new Vo();
    this.aa = new Vo();
    this.Z = new Vo();
  };
  u(Xo, Rn);
  var Yo = function (a, b, c) {
    var d = a.V;
    jm || c || -1 == a.I || (d += b - a.I);
    return d;
  };
  Xo.prototype.K = function (a, b, c, d) {
    if (!b.paused) {
      Rn.prototype.K.call(this, a, b, c, d);
      var e = to(b) && to(c),
        f = .5 <= (d ? Math.min(b.Y, c.Y) : c.Y);
      Tm(b.volume) && (this.o = -1 != this.o ? Math.min(this.o, b.volume) : b.volume, this.A = Math.max(this.A, b.volume));
      f && (this.J += a, this.D += e ? a : 0);
      Pn(this.g, b.Y, c.Y, b.g, a, d, e);
      En(this.j, !0, a);
      En(this.l, e, a);
      En(this.F, c.fullscreen, a);
      En(this.ma, e && !f, a);
      a = Math.floor(b.mediaTime / 1E3);
      Wo(this.U, a, b.isVisible());
      Wo(this.aa, a, 1 <= b.Y);
      Wo(this.Z, a, to(b));
    }
  };
  var Zo = function () {
    this.j = !1;
  };
  Zo.prototype.h = function (a) {
    this.j || (this.g(a) ? (a = this.K.report(this.o, a), this.l |= a, a = 0 == a) : a = !1, this.j = a);
  };
  var $o = function (a, b) {
    this.j = !1;
    this.o = a;
    this.K = b;
    this.l = 0;
  };
  u($o, Zo);
  $o.prototype.g = function () {
    return !0;
  };
  $o.prototype.A = function () {
    return !1;
  };
  $o.prototype.getId = function () {
    var a = this,
      b = $f(function (c) {
        return c == a.o;
      });
    return sm[b].toString();
  };
  $o.prototype.toString = function () {
    var a = "";
    this.A() && (a += "c");
    this.j && (a += "s");
    0 < this.l && (a += ":" + this.l);
    return this.getId() + a;
  };
  var ap = function (a, b) {
    $o.call(this, a, b);
    this.B = [];
  };
  u(ap, $o);
  ap.prototype.h = function (a, b) {
    b = void 0 === b ? null : b;
    null != b && this.B.push(b);
    $o.prototype.h.call(this, a);
  };
  var bp = function () {};
  var cp = function () {};
  u(cp, bp);
  cp.prototype.h = function () {
    return null;
  };
  cp.prototype.j = function () {
    return [];
  };
  var dp = function (a, b, c, d) {
    mn.call(this, a, b, c, d);
  };
  u(dp, mn);
  l = dp.prototype;
  l.Yc = function () {
    if (this.j) {
      var a = this.j,
        b = this.h.g.j;
      try {
        try {
          var c = Rm(a.getBoundingClientRect());
        } catch (n) {
          c = new C(0, 0, 0, 0);
        }
        var d = c.right - c.left,
          e = c.bottom - c.top,
          f = Dm(a, b),
          g = f.x,
          h = f.y;
        var k = new C(Math.round(h), Math.round(g + d), Math.round(h + e), Math.round(g));
      } catch (n) {
        k = Ch(Zn);
      }
      this.g = k;
    }
  };
  l.Xd = function () {
    this.l = this.h.o.g;
  };
  l.ie = function (a) {
    var b = 1 == al(this.T, "od");
    return eo(a, this.l, this.j, b);
  };
  l.Yd = function () {
    this.timestamp = km();
  };
  l.Ya = function () {
    this.Yd();
    this.Yc();
    if (this.j && "number" === typeof this.j.videoWidth && "number" === typeof this.j.videoHeight) {
      var a = this.j;
      var b = new z(a.videoWidth, a.videoHeight);
      a = this.g;
      var c = a.getWidth(),
        d = a.getHeight(),
        e = b.width;
      b = b.height;
      0 >= e || 0 >= b || 0 >= c || 0 >= d || (e /= b, a = Ch(a), e > c / d ? (c /= e, d = (d - c) / 2, 0 < d && (d = a.top + d, a.top = Math.round(d), a.bottom = Math.round(d + c))) : (d *= e, c = Math.round((c - d) / 2), 0 < c && (c = a.left + c, a.left = Math.round(c), a.right = Math.round(c + d))));
      this.g = a;
    }
    this.Xd();
    a = this.g;
    c = this.l;
    a = a.left <= c.right && c.left <= a.right && a.top <= c.bottom && c.top <= a.bottom ? new C(Math.max(a.top, c.top), Math.min(a.right, c.right), Math.min(a.bottom, c.bottom), Math.max(a.left, c.left)) : new C(0, 0, 0, 0);
    c = a.top >= a.bottom || a.left >= a.right ? new C(0, 0, 0, 0) : a;
    a = this.h.o;
    b = e = d = 0;
    0 < (this.g.bottom - this.g.top) * (this.g.right - this.g.left) && (this.ie(c) ? c = new C(0, 0, 0, 0) : (d = an().l, b = new C(0, d.height, d.width, 0), d = $n(c, this.g), e = $n(c, an().g), b = $n(c, b)));
    c = c.top >= c.bottom || c.left >= c.right ? new C(0, 0, 0, 0) : Dh(c, -this.g.left, -this.g.top);
    bn() || (e = d = 0);
    this.I = new nm(a, this.g, c, d, e, this.timestamp, b);
  };
  l.getName = function () {
    return this.h.getName();
  };
  var ep = new C(0, 0, 0, 0),
    fp = function (a, b, c) {
      mn.call(this, null, a, b, c);
      this.B = a.isActive();
      this.A = 0;
    };
  u(fp, dp);
  l = fp.prototype;
  l.Vc = function () {
    this.o();
    return !0;
  };
  l.ab = function () {
    dp.prototype.Ya.call(this);
  };
  l.Yd = function () {};
  l.Yc = function () {};
  l.Ya = function () {
    this.o();
    dp.prototype.Ya.call(this);
  };
  l.xb = function (a) {
    a = a.isActive();
    a !== this.B && (a ? this.o() : (an().g = new C(0, 0, 0, 0), this.g = new C(0, 0, 0, 0), this.l = new C(0, 0, 0, 0), this.timestamp = -1));
    this.B = a;
  };
  function gp(a) {
    return [a.top, a.left, a.bottom, a.right];
  }
  var hp = {},
    ip = (hp.firstquartile = 0, hp.midpoint = 1, hp.thirdquartile = 2, hp.complete = 3, hp),
    jp = function (a, b, c, d, e, f) {
      f = void 0 === f ? new cp() : f;
      ho.call(this, b, c, d);
      this.wd = e;
      this.ed = 0;
      this.ha = {};
      this.fa = new Go();
      this.ye = {};
      this.ka = "";
      this.playerId = null;
      this.Na = !1;
      this.g = [];
      this.Ta = f.h();
      this.A = f.j();
      this.l = null;
      this.j = -1;
      this.X = this.F = void 0;
      this.H = this.G = 0;
      this.U = -1;
      this.ba = this.ga = !1;
      this.M = this.D = this.h = this.Db = this.Fa = 0;
      new Gn();
      this.V = this.Z = 0;
      this.aa = -1;
      this.ia = 0;
      this.B = If;
      this.J = [this.uc()];
      this.Wa = 2;
      this.sb = {};
      this.sb.pause = "p";
      this.sb.resume = "r";
      this.sb.skip = "s";
      this.sb.mute = "m";
      this.sb.unmute = "um";
      this.sb.exitfullscreen = "ef";
      this.o = null;
      this.ma = this.Ea = !1;
    };
  u(jp, ho);
  jp.prototype.La = function () {
    return !0;
  };
  var kp = function (a) {
      a.he = !0;
      0 != a.ia && (a.ia = 3);
    },
    lp = function (a) {
      return void 0 === a ? a : Number(a) ? Mm(a, 3) : 0;
    };
  l = jp.prototype;
  l.ee = function (a) {
    return ko(this, a, Math.max(1E4, this.j / 3));
  };
  l.Jd = function (a, b, c, d, e, f, g) {
    var h = this,
      k = this.B(this) || {};
    fg(k, e);
    this.j = k.duration || this.j;
    this.F = k.isVpaid || this.F;
    this.X = k.isYouTube || this.X;
    Gl();
    this.ma = !1;
    e = mp(this, b);
    1 === np(this) && (f = e);
    ho.prototype.Jd.call(this, a, b, c, d, k, f, g);
    this.Ta && this.Ta.j && Kb(this.A, function (n) {
      n.h(h);
    });
  };
  l.Kd = function (a, b, c) {
    ho.prototype.Kd.call(this, a, b, c);
    op(this).K(a, b, this.pa, c);
    this.ba = to(this.pa) && to(b);
    -1 == this.U && this.ga && (this.U = this.oa().j.g);
    this.fa.j = 0;
    a = this.Ra();
    b.isVisible() && this.fa.reportEvent("vs");
    a && this.fa.reportEvent("vw");
    Tm(b.volume) && this.fa.reportEvent("am");
    to(b) ? this.fa.reportEvent("a") : this.fa.reportEvent("mut");
    this.yb && this.fa.reportEvent("f");
    -1 != b.h && (this.fa.reportEvent("bm"), 1 == b.h && (this.fa.reportEvent("b"), to(b) && this.fa.reportEvent("umutb")));
    to(b) && b.isVisible() && this.fa.reportEvent("avs");
    this.ba && a && this.fa.reportEvent("avw");
    0 < b.Y && this.fa.reportEvent("pv");
    pp(this, this.oa().j.g, !0) && this.fa.reportEvent("gdr");
    2E3 <= Mn(this.oa().h, 1) && this.fa.reportEvent("pmx");
    this.ma && this.fa.reportEvent("tvoff");
  };
  l.uc = function () {
    return new Xo();
  };
  l.oa = function () {
    return this.Fc;
  };
  var op = function (a, b) {
    return a.J[null != b && b < a.J.length ? b : a.J.length - 1];
  };
  jp.prototype.gd = function () {
    return new so();
  };
  jp.prototype.Xc = function (a, b, c, d) {
    a = ho.prototype.Xc.call(this, a, b, c, void 0 === d ? -1 : d);
    a.fullscreen = this.yb;
    a.paused = 2 == this.ia;
    a.volume = c.volume;
    Tm(a.volume) || (this.Fa++, b = this.pa, Tm(b.volume) && (a.volume = b.volume));
    c = c.currentTime;
    a.mediaTime = void 0 !== c && 0 <= c ? c : -1;
    return a;
  };
  var np = function (a) {
      var b = !!al(K().T, "umt");
      return a.F || !b && !a.X ? 0 : 1;
    },
    mp = function (a, b) {
      2 == a.ia ? b = 0 : -1 == a.zc ? b = 0 : (b -= a.zc, b = b > Math.max(1E4, a.j / 3) ? 0 : b);
      var c = a.B(a) || {};
      c = void 0 !== c.currentTime ? c.currentTime : a.G;
      var d = c - a.G,
        e = 0;
      0 <= d ? (a.H += b, a.V += Math.max(b - d, 0), e = Math.min(d, a.H)) : a.Z += Math.abs(d);
      0 != d && (a.H = 0);
      -1 == a.aa && 0 < d && (a.aa = 0 <= im ? km() - im : -1);
      a.G = c;
      return e;
    };
  jp.prototype.bd = function (a) {
    return an(), this.yb ? 1 : ho.prototype.bd.call(this, a);
  };
  jp.prototype.va = function () {
    return 1;
  };
  jp.prototype.getDuration = function () {
    return this.j;
  };
  var qp = function (a, b) {
      Pb(a.A, function (c) {
        return c.o == b.o;
      }) || a.A.push(b);
    },
    rp = function (a) {
      var b = Kn(a.oa().g, 1);
      return pp(a, b);
    },
    pp = function (a, b, c) {
      return 15E3 <= b ? !0 : a.ga ? (void 0 === c ? 0 : c) ? !0 : 0 < a.j ? b >= a.j / 2 : 0 < a.U ? b >= a.U : !1 : !1;
    },
    sp = function (a) {
      var b = {},
        c = an();
      b.insideIframe = c.j;
      b.unmeasurable = a.Qa;
      b.position = a.lb();
      b.exposure = a.pa.Y;
      b.documentSize = c.o;
      b.viewportSize = new z(c.g.getWidth(), c.g.getHeight());
      null != a.o && (b.presenceData = a.o);
      b.screenShare = a.pa.sa;
      return b;
    },
    tp = function (a) {
      var b = Mm(a.pa.Y, 2),
        c = a.fa.j,
        d = a.pa,
        e = op(a),
        f = lp(e.o),
        g = lp(e.A),
        h = lp(d.volume),
        k = Mm(e.B, 2),
        n = Mm(e.G, 2),
        m = Mm(d.Y, 2),
        q = Mm(e.H, 2),
        t = Mm(e.M, 2);
      d = Mm(d.sa, 2);
      a = Ch(a.lb());
      a.round();
      e = Sn(e, !1);
      return {
        qg: b,
        Nb: c,
        Gc: f,
        Cc: g,
        Fb: h,
        Hc: k,
        Dc: n,
        Y: m,
        Ic: q,
        Ec: t,
        sa: d,
        position: a,
        Jc: e
      };
    },
    vp = function (a, b) {
      up(a.g, b, function () {
        return {
          qg: 0,
          Nb: void 0,
          Gc: -1,
          Cc: -1,
          Fb: -1,
          Hc: -1,
          Dc: -1,
          Y: -1,
          Ic: -1,
          Ec: -1,
          sa: -1,
          position: void 0,
          Jc: []
        };
      });
      a.g[b] = tp(a);
    },
    up = function (a, b, c) {
      for (var d = a.length; d < b + 1;) a.push(c()), d++;
    },
    yp = function (a, b, c) {
      var d = a.ye[b];
      if (null != d) return d;
      d = wp(a, b);
      var e = $f(function (f) {
        return f == b;
      });
      a = xp(a, d, d, c, ip[ag[e]]);
      "fully_viewable_audible_half_duration_impression" == b && (a.std = "csm");
      return a;
    },
    zp = function (a, b, c) {
      var d = [b];
      if (a != b || c != b) d.unshift(a), d.push(c);
      return d;
    },
    xp = function (a, b, c, d, e) {
      if (a.Qa) return {
        "if": 0,
        vs: 0
      };
      var f = Ch(a.lb());
      f.round();
      var g = an(),
        h = K(),
        k = a.oa(),
        n = a.ca ? a.ca.getName() : "ns",
        m = {};
      m["if"] = g.j ? 1 : void 0;
      m.sdk = a.l ? a.l : void 0;
      m.t = a.ig;
      m.p = [f.top, f.left, f.bottom, f.right];
      m.tos = In(k.h, !1);
      m.mtos = Sn(k);
      m.mcvt = k.X.j;
      m.ps = void 0;
      m.vht = Yo(k, km(), 2 == a.ia);
      m.mut = k.ma.j;
      m.a = lp(a.pa.volume);
      m.mv = lp(k.A);
      m.fs = a.yb ? 1 : 0;
      m.ft = k.F.g;
      m.at = k.l.g;
      m.as = 0 < k.o ? 1 : 0;
      m.atos = In(k.g);
      m.ssb = In(k.ba, !1);
      m.amtos = Ln(k.g, !1);
      m.uac = a.Fa;
      m.vpt = k.j.g;
      "nio" == n && (m.nio = 1, m.avms = "nio");
      m.gmm = "4";
      m.gdr = pp(a, k.j.g, !0) ? 1 : 0;
      m.efpf = a.Wa;
      if ("gsv" == n || "nis" == n) f = a.ca, 0 < f.A && (m.nnut = f.A);
      m.tcm = np(a);
      m.nmt = a.Z;
      m.bt = a.V;
      m.pst = a.aa;
      m.vpaid = a.F;
      m.dur = a.j;
      m.vmtime = a.G;
      m.is = a.fa.j;
      1 <= a.g.length && (m.i0 = a.g[0].Nb, m.a0 = [a.g[0].Fb], m.c0 = [a.g[0].Y], m.ss0 = [a.g[0].sa], f = a.g[0].position, m.p0 = f ? gp(f) : void 0);
      2 <= a.g.length && (m.i1 = a.g[1].Nb, m.a1 = zp(a.g[1].Gc, a.g[1].Fb, a.g[1].Cc), m.c1 = zp(a.g[1].Hc, a.g[1].Y, a.g[1].Dc), m.ss1 = zp(a.g[1].Ic, a.g[1].sa, a.g[1].Ec), f = a.g[1].position, m.p1 = f ? gp(f) : void 0, m.mtos1 = a.g[1].Jc);
      3 <= a.g.length && (m.i2 = a.g[2].Nb, m.a2 = zp(a.g[2].Gc, a.g[2].Fb, a.g[2].Cc), m.c2 = zp(a.g[2].Hc, a.g[2].Y, a.g[2].Dc), m.ss2 = zp(a.g[2].Ic, a.g[2].sa, a.g[2].Ec), f = a.g[2].position, m.p2 = f ? gp(f) : void 0, m.mtos2 = a.g[2].Jc);
      4 <= a.g.length && (m.i3 = a.g[3].Nb, m.a3 = zp(a.g[3].Gc, a.g[3].Fb, a.g[3].Cc), m.c3 = zp(a.g[3].Hc, a.g[3].Y, a.g[3].Dc), m.ss3 = zp(a.g[3].Ic, a.g[3].sa, a.g[3].Ec), f = a.g[3].position, m.p3 = f ? gp(f) : void 0, m.mtos3 = a.g[3].Jc);
      m.cs = Uo(a.fa);
      b && (m.ic = Ho(a.fa), m.dvpt = k.j.h, m.dvs = Nn(k.h, .5), m.dfvs = Nn(k.h, 1), m.davs = Nn(k.g, .5), m.dafvs = Nn(k.g, 1), c && (k.j.h = 0, On(k.h), On(k.g)), a.Ra() && (m.dtos = k.J, m.dav = k.D, m.dtoss = a.ed + 1, c && (k.J = 0, k.D = 0, a.ed++)), m.dat = k.l.h, m.dft = k.F.h, c && (k.l.h = 0, k.F.h = 0));
      m.ps = [g.o.width, g.o.height];
      m.bs = [g.g.getWidth(), g.g.getHeight()];
      m.scs = [g.l.width, g.l.height];
      m.dom = g.domain;
      a.Db && (m.vds = a.Db);
      if (0 < a.A.length || a.Ta) b = Yb(a.A), a.Ta && b.push(a.Ta), m.pings = Nb(b, function (q) {
        return q.toString();
      });
      b = Nb(Mb(a.A, function (q) {
        return q.A();
      }), function (q) {
        return q.getId();
      });
      Zb(b);
      m.ces = b;
      a.h && (m.vmer = a.h);
      a.D && (m.vmmk = a.D);
      a.M && (m.vmiec = a.M);
      m.avms = a.ca ? a.ca.getName() : "ns";
      a.ca && fg(m, a.ca.Za());
      d ? (m.c = Mm(a.pa.Y, 2), m.ss = Mm(a.pa.sa, 2)) : m.tth = km() - hm;
      m.mc = Mm(k.G, 2);
      m.nc = Mm(k.B, 2);
      m.mv = lp(k.A);
      m.nv = lp(k.o);
      m.lte = Mm(a.md, 2);
      d = op(a, e);
      Sn(k);
      m.qmtos = Sn(d);
      m.qnc = Mm(d.B, 2);
      m.qmv = lp(d.A);
      m.qnv = lp(d.o);
      m.qas = 0 < d.o ? 1 : 0;
      m.qi = a.ka;
      m.avms || (m.avms = "geo");
      m.psm = k.U.g;
      m.psv = k.U.getValue();
      m.psfv = k.aa.getValue();
      m.psa = k.Z.getValue();
      h = cl(h.T);
      h.length && (m.veid = h);
      a.o && fg(m, ro(a.o));
      m.avas = a.sc();
      m.vs = a.ge();
      return m;
    },
    wp = function (a, b) {
      if (Tb(rm, b)) return !0;
      var c = a.ha[b];
      return void 0 !== c ? (a.ha[b] = !0, !c) : !1;
    };
  jp.prototype.ge = function () {
    return this.Qa ? 2 : rp(this) ? 5 : this.Ra() ? 4 : 3;
  };
  jp.prototype.sc = function () {
    return this.Ea ? 2E3 <= this.oa().l.j ? 4 : 3 : 2;
  };
  var Ap = Date.now(),
    Dp = function () {
      this.g = {};
      var a = B();
      Bp(this, a, document);
      var b = Cp();
      try {
        if ("1" == b) {
          for (var c = a.parent; c != a.top; c = c.parent) Bp(this, c, c.document);
          Bp(this, a.top, a.top.document);
        }
      } catch (d) {}
    },
    Cp = function () {
      var a = document.documentElement;
      try {
        if (!oh(B().top)) return "2";
        var b = [],
          c = B(a.ownerDocument);
        for (a = c; a != c.top; a = a.parent) if (a.frameElement) b.push(a.frameElement);else break;
        return b && 0 != b.length ? "1" : "0";
      } catch (d) {
        return "2";
      }
    },
    Bp = function (a, b, c) {
      Yn(c, "mousedown", function () {
        return Ep(a);
      }, 301);
      Yn(b, "scroll", function () {
        return Fp(a);
      }, 302);
      Yn(c, "touchmove", function () {
        return Gp(a);
      }, 303);
      Yn(c, "mousemove", function () {
        return Hp(a);
      }, 304);
      Yn(c, "keydown", function () {
        return Ip(a);
      }, 305);
    },
    Ep = function (a) {
      Rf(a.g, function (b) {
        1E5 < b.j || ++b.j;
      });
    },
    Fp = function (a) {
      Rf(a.g, function (b) {
        1E5 < b.g || ++b.g;
      });
    },
    Gp = function (a) {
      Rf(a.g, function (b) {
        1E5 < b.g || ++b.g;
      });
    },
    Ip = function (a) {
      Rf(a.g, function (b) {
        1E5 < b.h || ++b.h;
      });
    },
    Hp = function (a) {
      Rf(a.g, function (b) {
        1E5 < b.o || ++b.o;
      });
    };
  var Jp = function () {
      this.g = [];
      this.h = [];
    },
    Kp = function (a, b) {
      return Qb(a.g, function (c) {
        return c.ka == b;
      });
    },
    Lp = function (a, b) {
      return b ? Qb(a.g, function (c) {
        return c.ta.gb == b;
      }) : null;
    },
    Mp = function (a, b) {
      return Qb(a.h, function (c) {
        return 2 == c.va() && c.ka == b;
      });
    },
    Op = function () {
      var a = Np;
      return 0 == a.g.length ? a.h : 0 == a.h.length ? a.g : Xb(a.h, a.g);
    };
  Jp.prototype.reset = function () {
    this.g = [];
    this.h = [];
  };
  var Pp = function (a, b) {
      a = 1 == b.va() ? a.g : a.h;
      var c = Rb(a, function (d) {
        return d == b;
      });
      return -1 != c ? (a.splice(c, 1), b.ca && b.ca.Xb(), b.W(), !0) : !1;
    },
    Qp = function (a) {
      var b = Np;
      if (Pp(b, a)) {
        switch (a.va()) {
          case 0:
            var c = function () {
              return null;
            };
          case 2:
            c = function () {
              return Mp(b, a.ka);
            };
            break;
          case 1:
            c = function () {
              return Kp(b, a.ka);
            };
        }
        for (var d = c(); d; d = c()) Pp(b, d);
      }
    },
    Rp = function (a) {
      var b = Np;
      a = Mb(a, function (c) {
        return !Lp(b, c.ta.gb);
      });
      b.g.push.apply(b.g, ka(a));
    },
    Sp = function (a) {
      var b = [];
      Kb(a, function (c) {
        Pb(Np.g, function (d) {
          return d.ta.gb === c.ta.gb && d.ka === c.ka;
        }) || (Np.g.push(c), b.push(c));
      });
    },
    Np = D(Jp);
  var Tp = function () {
      this.g = this.h = null;
    },
    Up = function (a, b) {
      if (null == a.h) return !1;
      var c = function (d, e) {
        b(d, e);
      };
      a.g = Qb(a.h, function (d) {
        return null != d && d.Pd();
      });
      a.g && (a.g.init(c) ? jn(a.g.g) : b(a.g.g.vb(), a.g));
      return null != a.g;
    };
  var Wp = function (a) {
    a = Vp(a);
    nn.call(this, a.length ? a[a.length - 1] : new en(L, 0));
    this.j = a;
    this.h = null;
  };
  u(Wp, nn);
  l = Wp.prototype;
  l.getName = function () {
    return (this.h ? this.h : this.g).getName();
  };
  l.Za = function () {
    return (this.h ? this.h : this.g).Za();
  };
  l.Pa = function () {
    return (this.h ? this.h : this.g).Pa();
  };
  l.init = function (a) {
    var b = !1;
    Kb(this.j, function (c) {
      c.initialize() && (b = !0);
    });
    b && (this.o = a, hn(this.g, this));
    return b;
  };
  l.W = function () {
    Kb(this.j, function (a) {
      a.W();
    });
    nn.prototype.W.call(this);
  };
  l.Pd = function () {
    return Pb(this.j, function (a) {
      return a.F();
    });
  };
  l.Eb = function () {
    return Pb(this.j, function (a) {
      return a.F();
    });
  };
  l.Yb = function (a, b, c) {
    return new dp(a, this.g, b, c);
  };
  l.ab = function (a) {
    this.h = a.h;
  };
  var Vp = function (a) {
    if (!a.length) return [];
    a = Mb(a, function (c) {
      return null != c && c.F();
    });
    for (var b = 1; b < a.length; b++) hn(a[b - 1], a[b]);
    return a;
  };
  var Xp = {
      threshold: [0, .3, .5, .75, 1]
    },
    Yp = function (a, b, c, d) {
      mn.call(this, a, b, c, d);
      this.D = this.K = this.A = this.B = this.o = null;
    };
  u(Yp, dp);
  Yp.prototype.Vc = function () {
    var a = this;
    this.D || (this.D = km());
    if (bm(298, function () {
      return Zp(a);
    })) return !0;
    gn(this.h, "msf");
    return !1;
  };
  Yp.prototype.Xb = function () {
    if (this.o && this.j) try {
      this.o.unobserve(this.j), this.B ? (this.B.unobserve(this.j), this.B = null) : this.A && (this.A.disconnect(), this.A = null);
    } catch (a) {}
  };
  var $p = function (a) {
      return a.o && a.o.takeRecords ? a.o.takeRecords() : [];
    },
    Zp = function (a) {
      if (!a.j) return !1;
      var b = a.j,
        c = a.h.g.j,
        d = K().g.g;
      a.o = new c.IntersectionObserver(Ml(d, function (e) {
        return aq(a, e);
      }), Xp);
      d = Ml(d, function () {
        a.o.unobserve(b);
        a.o.observe(b);
        aq(a, $p(a));
      });
      c.ResizeObserver ? (a.B = new c.ResizeObserver(d), a.B.observe(b)) : c.MutationObserver && (a.A = new v.MutationObserver(d), a.A.observe(b, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      }));
      a.o.observe(b);
      aq(a, $p(a));
      return !0;
    },
    aq = function (a, b) {
      try {
        if (b.length) {
          a.K || (a.K = km());
          var c = bq(b),
            d = Dm(a.j, a.h.g.j),
            e = d.x,
            f = d.y;
          a.g = new C(Math.round(f), Math.round(e) + c.boundingClientRect.width, Math.round(f) + c.boundingClientRect.height, Math.round(e));
          var g = Rm(c.intersectionRect);
          a.l = Dh(g, a.g.left - g.left, a.g.top - g.top);
        }
      } catch (h) {
        a.Xb(), dm(299, h);
      }
    },
    bq = function (a) {
      return Ob(a, function (b, c) {
        return b.time > c.time ? b : c;
      }, a[0]);
    };
  l = Yp.prototype;
  l.Ya = function () {
    var a = $p(this);
    0 < a.length && aq(this, a);
    dp.prototype.Ya.call(this);
  };
  l.Yc = function () {};
  l.ie = function () {
    return !1;
  };
  l.Xd = function () {};
  l.Za = function () {
    var a = {};
    return Object.assign(this.h.Za(), (a.niot_obs = this.D, a.niot_cbk = this.K, a));
  };
  l.getName = function () {
    return "nio";
  };
  var cq = function (a) {
    a = void 0 === a ? L : a;
    nn.call(this, new en(a, 2));
  };
  u(cq, nn);
  cq.prototype.getName = function () {
    return "nio";
  };
  cq.prototype.Eb = function () {
    return !an().h && null != this.g.g.j.IntersectionObserver;
  };
  cq.prototype.Yb = function (a, b, c) {
    return new Yp(a, this.g, b, c);
  };
  var eq = function () {
    var a = dq();
    en.call(this, L.top, a, "geo");
  };
  u(eq, en);
  eq.prototype.aa = function () {
    return an().g;
  };
  eq.prototype.F = function () {
    var a = dq();
    this.K !== a && (this.g != this && a > this.g.K && (this.g = this, fn(this)), this.K = a);
    return 2 == a;
  };
  var dq = function () {
    K();
    var a = an();
    return a.j || a.h ? 0 : 2;
  };
  var fq = function () {};
  var gq = function () {
      this.done = !1;
      this.g = {
        ff: 0,
        Vd: 0,
        mi: 0,
        be: 0,
        kd: -1,
        mf: 0,
        lf: 0,
        nf: 0,
        fg: 0
      };
      this.l = null;
      this.A = !1;
      this.j = null;
      this.B = 0;
      this.h = new cn(this);
    },
    jq = function () {
      var a = hq;
      a.A || (a.A = !0, iq(a, function () {
        return a.o.apply(a, ka(Ia.apply(0, arguments)));
      }), a.o());
    };
  gq.prototype.sample = function () {
    kq(this, Op(), !1);
  };
  var lq = function () {
      D(fq);
      var a = D(Tp);
      null != a.g && a.g.g ? jn(a.g.g) : Xm(an());
    },
    kq = function (a, b, c) {
      if (!a.done && (a.h.cancel(), 0 != b.length)) {
        a.j = null;
        try {
          lq();
          var d = km();
          K().l = d;
          if (null != D(Tp).g) for (var e = 0; e < b.length; e++) lo(b[e], d, c);
          for (d = 0; d < b.length; d++) mo(b[d]);
          ++a.g.be;
        } finally {
          c ? Kb(b, function (f) {
            f.pa.Y = 0;
          }) : dn(a.h);
        }
      }
    },
    iq = function (a, b) {
      if (!a.l) {
        b = cm(142, b);
        Gl();
        var c = Zh(fl);
        c && Of(fl, c, b, {
          capture: !1
        }) && (a.l = b);
      }
    };
  gq.prototype.o = function () {
    var a = bn(),
      b = km();
    a ? (jm || (fm = b, Kb(Np.g, function (c) {
      var d = c.oa();
      d.V = Yo(d, b, 1 != c.ia);
    })), jm = !0) : (this.B = mq(this, b), jm = !1, hm = b, Kb(Np.g, function (c) {
      c.Ib && (c.oa().I = b);
    }));
    kq(this, Op(), !a);
  };
  var nq = function () {
      var a = D(Tp);
      if (null != a.g) {
        var b = a.g;
        Kb(Op(), function (c) {
          return jo(c, b);
        });
      }
    },
    mq = function (a, b) {
      a = a.B;
      jm && (a += b - fm);
      return a;
    },
    oq = function (a) {
      a = void 0 === a ? function () {
        return {};
      } : a;
      Zl.Ed("av-js");
      Vl.g = .01;
      am([function (b) {
        var c = K(),
          d = {};
        d = (d.bin = c.h, d.type = "error", d);
        c = bl(c.T);
        if (!hq.j) {
          var e = hq,
            f = L.document,
            g = 0 <= gm ? km() - gm : -1,
            h = km();
          -1 == e.g.kd && (g = h);
          var k = an(),
            n = K(),
            m = bl(n.T),
            q = Op();
          try {
            if (0 < q.length) {
              var t = k.g;
              t && (m.bs = [t.getWidth(), t.getHeight()]);
              var w = k.o;
              w && (m.ps = [w.width, w.height]);
              L.screen && (m.scs = [L.screen.width, L.screen.height]);
            } else m.url = encodeURIComponent(L.location.href.substring(0, 512)), f.referrer && (m.referrer = encodeURIComponent(f.referrer.substring(0, 512)));
            m.tt = g;
            m.pt = gm;
            m.bin = n.h;
            void 0 !== L.google_osd_load_pub_page_exp && (m.olpp = L.google_osd_load_pub_page_exp);
            m.deb = [1, e.g.ff, e.g.Vd, e.g.be, e.g.kd, 0, e.h.h, e.g.mf, e.g.lf, e.g.nf, e.g.fg, -1].join(";");
            m.tvt = mq(e, h);
            k.h && (m.inapp = 1);
            if (null !== L && L != L.top) {
              0 < q.length && (m.iframe_loc = encodeURIComponent(L.location.href.substring(0, 512)));
              var A = k.I;
              m.is = [A.getWidth(), A.getHeight()];
            }
          } catch (Za) {
            m.error = 1;
          }
          hq.j = m;
        }
        w = hq.j;
        t = {};
        for (var F in w) t[F] = w[F];
        F = K().g;
        if (1 == al(F.j, "prf")) {
          w = new Kl();
          A = F.g;
          e = 0;
          -1 < A.g && (e = A.j.g.now() - A.g);
          A = A.o + e;
          if (null != A && "number" !== typeof A) throw Error("Value of float/double field must be a number, found " + typeof A + ": " + A);
          w = Ke(w, 1, A, 0);
          A = F.g;
          w = Ke(w, 5, be(-1 < A.g ? A.h + 1 : A.h), 0);
          w = Ke(w, 2, ee(F.h.g.j()), "0");
          w = Ke(w, 3, ee(F.h.g.h()), "0");
          F = Ke(w, 4, ee(F.h.g.g()), "0");
          w = {};
          F = (w.pf = Kc(F.g()), w);
        } else F = {};
        fg(t, F);
        fg(b, d, c, t, a());
      }]);
    },
    hq = D(gq);
  var pq = null,
    qq = "",
    rq = !1,
    sq = function () {
      var a = pq || L;
      if (!a) return "";
      var b = [];
      if (!a.location || !a.location.href) return "";
      b.push("url=" + encodeURIComponent(a.location.href.substring(0, 512)));
      a.document && a.document.referrer && b.push("referrer=" + encodeURIComponent(a.document.referrer.substring(0, 512)));
      return b.join("&");
    };
  function tq() {
    var a = "av.default_js_unreleased_RCxx".match(/_(\d{8})_RC\d+$/) || "av.default_js_unreleased_RCxx".match(/_(\d{8})_\d+_\d+$/) || "av.default_js_unreleased_RCxx".match(/_(\d{8})_\d+\.\d+$/) || "av.default_js_unreleased_RCxx".match(/_(\d{8})_\d+_RC\d+$/),
      b;
    if (2 == (null == (b = a) ? void 0 : b.length)) return a[1];
    a = "av.default_js_unreleased_RCxx".match(/.*_(\d{2})\.(\d{4})\.\d+_RC\d+$/);
    var c;
    return 3 == (null == (c = a) ? void 0 : c.length) ? "20" + a[1] + a[2] : null;
  }
  var uq = function () {
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
        Ia: tq()
      } : "av.default_js_unreleased_RCxx".includes("youtube.player.web") ? {
        Ha: "yw",
        Ia: tq()
      } : "av.default_js_unreleased_RCxx".includes("outstream_web_client") ? {
        Ha: "out",
        Ia: tq()
      } : "av.default_js_unreleased_RCxx".includes("drx_rewarded_web") ? {
        Ha: "r",
        Ia: tq()
      } : "av.default_js_unreleased_RCxx".includes("gam_native_web_video") ? {
        Ha: "n",
        Ia: tq()
      } : "av.default_js_unreleased_RCxx".includes("admob_interstitial_video") ? {
        Ha: "int",
        Ia: tq()
      } : {
        Ha: "j",
        Ia: null
      };
    },
    vq = uq().Ha,
    wq = uq().Ia;
  var yq = function (a, b) {
      var c = {
        sv: "959"
      };
      null !== wq && (c.v = wq);
      c.cb = vq;
      c.nas = Np.g.length;
      c.msg = a;
      void 0 !== b && (a = xq(b)) && (c.e = sm[a]);
      return c;
    },
    zq = function (a) {
      return 0 == a.lastIndexOf("custom_metric_viewable", 0);
    },
    xq = function (a) {
      var b = zq(a) ? "custom_metric_viewable" : a.toLowerCase();
      return $f(function (c) {
        return c == b;
      });
    };
  var Aq = {
      Lg: "visible",
      ug: "audible",
      Ih: "time",
      Kh: "timetype"
    },
    Bq = {
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
    Cq = function () {
      this.g = void 0;
      this.h = !1;
      this.j = 0;
      this.o = -1;
      this.l = "tos";
    },
    Dq = function (a) {
      try {
        var b = a.split(",");
        return b.length > Wf(Aq).length ? null : Ob(b, function (c, d) {
          d = d.toLowerCase().split("=");
          if (2 != d.length || void 0 === Bq[d[0]] || !Bq[d[0]](d[1])) throw Error("Entry (" + d[0] + ", " + d[1] + ") is invalid.");
          c[d[0]] = d[1];
          return c;
        }, {});
      } catch (c) {
        return null;
      }
    },
    Eq = function (a, b) {
      if (void 0 == a.g) return 0;
      switch (a.l) {
        case "mtos":
          return a.h ? Mn(b.g, a.g) : Mn(b.h, a.g);
        case "tos":
          return a.h ? Kn(b.g, a.g) : Kn(b.h, a.g);
      }
      return 0;
    };
  var Fq = function (a, b, c, d) {
    $o.call(this, b, d);
    this.B = a;
    this.I = c;
  };
  u(Fq, $o);
  Fq.prototype.getId = function () {
    return this.B;
  };
  Fq.prototype.A = function () {
    return !0;
  };
  Fq.prototype.g = function (a) {
    var b = a.oa(),
      c = a.getDuration();
    return Pb(this.I, function (d) {
      if (void 0 != d.g) var e = Eq(d, b);else b: {
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
  var Gq = function () {};
  u(Gq, Eo);
  Gq.prototype.g = function (a) {
    var b = new Do();
    b.g = Fo(a, Ao);
    b.h = Fo(a, Co);
    return b;
  };
  var Hq = function (a) {
    $o.call(this, "fully_viewable_audible_half_duration_impression", a);
  };
  u(Hq, $o);
  Hq.prototype.g = function (a) {
    return rp(a);
  };
  var Iq = function (a) {
    this.g = a;
  };
  u(Iq, bp);
  var Jq = function (a, b) {
    $o.call(this, a, b);
  };
  u(Jq, $o);
  Jq.prototype.g = function (a) {
    return a.oa().Ra();
  };
  var Kq = function (a) {
    ap.call(this, "measurable_impression", a);
  };
  u(Kq, ap);
  Kq.prototype.g = function (a) {
    var b = Tb(this.B, al(K().T, "ovms"));
    return !a.Qa && (0 != a.ia || b);
  };
  var Lq = function () {
    Iq.apply(this, arguments);
  };
  u(Lq, Iq);
  Lq.prototype.h = function () {
    return new Kq(this.g);
  };
  Lq.prototype.j = function () {
    return [new Jq("viewable_impression", this.g), new Hq(this.g)];
  };
  var Mq = function (a, b, c) {
    fp.call(this, a, b, c);
  };
  u(Mq, fp);
  Mq.prototype.o = function () {
    var a = Ma("ima.admob.getViewability"),
      b = al(this.T, "queryid");
    "function" === typeof a && b && a(b);
  };
  Mq.prototype.getName = function () {
    return "gsv";
  };
  var Nq = function (a) {
    a = void 0 === a ? L : a;
    nn.call(this, new en(a, 2));
  };
  u(Nq, nn);
  Nq.prototype.getName = function () {
    return "gsv";
  };
  Nq.prototype.Eb = function () {
    var a = an();
    K();
    return a.h && !1;
  };
  Nq.prototype.Yb = function (a, b, c) {
    return new Mq(this.g, b, c);
  };
  var Oq = function (a, b, c) {
    fp.call(this, a, b, c);
  };
  u(Oq, fp);
  Oq.prototype.o = function () {
    var a = this,
      b = Ma("ima.bridge.getNativeViewability"),
      c = al(this.T, "queryid");
    "function" === typeof b && c && b(c, function (d) {
      bg(d) && a.A++;
      var e = d.opt_nativeViewVisibleBounds || {},
        f = d.opt_nativeViewHidden;
      a.g = Sm(d.opt_nativeViewBounds || {});
      var g = a.h.o;
      g.g = f ? Ch(ep) : Sm(e);
      a.timestamp = d.opt_nativeTime || -1;
      an().g = g.g;
      d = d.opt_nativeVolume;
      void 0 !== d && (g.volume = d);
    });
  };
  Oq.prototype.getName = function () {
    return "nis";
  };
  var Pq = function (a) {
    a = void 0 === a ? L : a;
    nn.call(this, new en(a, 2));
  };
  u(Pq, nn);
  Pq.prototype.getName = function () {
    return "nis";
  };
  Pq.prototype.Eb = function () {
    var a = an();
    K();
    return a.h && !1;
  };
  Pq.prototype.Yb = function (a, b, c) {
    return new Oq(this.g, b, c);
  };
  var Qq = function () {
    en.call(this, L, 2, "mraid");
    this.ga = 0;
    this.H = this.J = !1;
    this.I = null;
    this.h = tm(this.j);
    this.o.g = new C(0, 0, 0, 0);
    this.ba = !1;
  };
  u(Qq, en);
  Qq.prototype.F = function () {
    return null != this.h.Ba;
  };
  Qq.prototype.Z = function () {
    var a = {};
    this.ga && (a.mraid = this.ga);
    this.J && (a.mlc = 1);
    a.mtop = this.h.eg;
    this.I && (a.mse = this.I);
    this.ba && (a.msc = 1);
    a.mcp = this.h.lc;
    return a;
  };
  Qq.prototype.A = function (a) {
    var b = Ia.apply(1, arguments);
    try {
      return this.h.Ba[a].apply(this.h.Ba, b);
    } catch (c) {
      dm(538, c, .01, function (d) {
        d.method = a;
      });
    }
  };
  var Rq = function (a, b, c) {
    a.A("addEventListener", b, c);
  };
  Qq.prototype.initialize = function () {
    var a = this;
    if (this.ua) return !this.Lb();
    this.ua = !0;
    if (2 === this.h.lc) return this.I = "ng", gn(this, "w"), !1;
    if (1 === this.h.lc) return this.I = "mm", gn(this, "w"), !1;
    an().K = !0;
    this.j.document.readyState && "complete" == this.j.document.readyState ? Sq(this) : Yn(this.j, "load", function () {
      Gl().setTimeout(cm(292, function () {
        return Sq(a);
      }), 100);
    }, 292);
    return !0;
  };
  var Sq = function (a) {
      K().o = !!a.A("isViewable");
      Rq(a, "viewableChange", Tq);
      "loading" === a.A("getState") ? Rq(a, "ready", Uq) : Vq(a);
    },
    Vq = function (a) {
      "string" === typeof a.h.Ba.AFMA_LIDAR ? (a.J = !0, Wq(a)) : (a.h.lc = 3, a.I = "nc", gn(a, "w"));
    },
    Wq = function (a) {
      a.H = !1;
      var b = 1 == al(K().T, "rmmt"),
        c = !!a.A("isViewable");
      (b ? !c : 1) && Gl().setTimeout(cm(524, function () {
        a.H || (Xq(a), dm(540, Error()), a.I = "mt", gn(a, "w"));
      }), 500);
      Yq(a);
      Rq(a, a.h.Ba.AFMA_LIDAR, Zq);
    },
    Yq = function (a) {
      var b = 1 == al(K().T, "sneio"),
        c = void 0 !== a.h.Ba.AFMA_LIDAR_EXP_1,
        d = void 0 !== a.h.Ba.AFMA_LIDAR_EXP_2;
      (b = b && d) && (a.h.Ba.AFMA_LIDAR_EXP_2 = !0);
      c && (a.h.Ba.AFMA_LIDAR_EXP_1 = !b);
    },
    Xq = function (a) {
      a.A("removeEventListener", a.h.Ba.AFMA_LIDAR, Zq);
      a.J = !1;
    };
  Qq.prototype.U = function () {
    var a = an(),
      b = $q(this, "getMaxSize");
    a.g = new C(0, b.width, b.height, 0);
  };
  Qq.prototype.V = function () {
    an().l = $q(this, "getScreenSize");
  };
  var $q = function (a, b) {
    if ("loading" === a.A("getState")) return new z(-1, -1);
    b = a.A(b);
    if (!b) return new z(-1, -1);
    a = parseInt(b.width, 10);
    b = parseInt(b.height, 10);
    return isNaN(a) || isNaN(b) ? new z(-1, -1) : new z(a, b);
  };
  Qq.prototype.W = function () {
    Xq(this);
    en.prototype.W.call(this);
  };
  var Uq = function () {
      try {
        var a = D(Qq);
        a.A("removeEventListener", "ready", Uq);
        Vq(a);
      } catch (b) {
        dm(541, b);
      }
    },
    Zq = function (a, b) {
      try {
        var c = D(Qq);
        c.H = !0;
        var d = a ? new C(a.y, a.x + a.width, a.y + a.height, a.x) : new C(0, 0, 0, 0);
        var e = km(),
          f = bn();
        var g = new mm(e, f, c);
        g.g = d;
        g.volume = b;
        c.ab(g);
      } catch (h) {
        dm(542, h);
      }
    },
    Tq = function (a) {
      var b = K(),
        c = D(Qq);
      a && !b.o && (b.o = !0, c.ba = !0, c.I && gn(c, "w", !0));
    };
  var Pl = new function (a, b) {
    this.key = a;
    this.defaultValue = void 0 === b ? !1 : b;
    this.valueType = "boolean";
  }("45378663");
  var br = function () {
    this.j = this.ua = !1;
    this.g = this.h = null;
    var a = {};
    this.J = (a.start = this.Gf, a.firstquartile = this.Bf, a.midpoint = this.Df, a.thirdquartile = this.Hf, a.complete = this.yf, a.error = this.zf, a.pause = this.ud, a.resume = this.se, a.skip = this.Ff, a.viewable_impression = this.Ja, a.mute = this.Cb, a.unmute = this.Cb, a.fullscreen = this.Cf, a.exitfullscreen = this.Af, a.fully_viewable_audible_half_duration_impression = this.Ja, a.measurable_impression = this.Ja, a.abandon = this.ud, a.engagedview = this.Ja, a.impression = this.Ja, a.creativeview = this.Ja, a.progress = this.Cb, a.custom_metric_viewable = this.Ja, a.bufferstart = this.ud, a.bufferfinish = this.se, a.audio_measurable = this.Ja, a.audio_audible = this.Ja, a);
    a = {};
    this.U = (a.overlay_resize = this.Ef, a.abandon = this.jd, a.close = this.jd, a.collapse = this.jd, a.overlay_unmeasurable_impression = function (b) {
      return yp(b, "overlay_unmeasurable_impression", bn());
    }, a.overlay_viewable_immediate_impression = function (b) {
      return yp(b, "overlay_viewable_immediate_impression", bn());
    }, a.overlay_unviewable_impression = function (b) {
      return yp(b, "overlay_unviewable_impression", bn());
    }, a.overlay_viewable_end_of_session_impression = function (b) {
      return yp(b, "overlay_viewable_end_of_session_impression", bn());
    }, a);
    K().h = 3;
    ar(this);
  };
  br.prototype.l = function (a) {
    io(a, !1);
    Qp(a);
  };
  br.prototype.I = function () {};
  var cr = function (a, b, c, d) {
    a = a.A(null, d, !0, b);
    a.l = c;
    Rp([a]);
    return a;
  };
  br.prototype.A = function (a, b, c, d) {
    var e = this;
    a = new jp(L, a, c ? b : -1, 7, this.cd(), this.ae());
    a.ka = d;
    Zk(a.T);
    $k(a.T, "queryid", a.ka);
    a.xd("");
    no(a, function () {
      return e.H.apply(e, ka(Ia.apply(0, arguments)));
    }, function () {
      return e.M.apply(e, ka(Ia.apply(0, arguments)));
    });
    (d = D(Tp).g) && jo(a, d);
    a.ta.gb && D(fq);
    return a;
  };
  var dr = function (a, b, c) {
      Hk(b);
      var d = a.g;
      Kb(b, function (e) {
        var f = Nb(e.j, function (g) {
          var h = Dq(g);
          if (null == h) g = null;else if (g = new Cq(), null != h.visible && (g.g = h.visible / 100), null != h.audible && (g.h = 1 == h.audible), null != h.time) {
            var k = "mtos" == h.timetype ? "mtos" : "tos",
              n = jb(h.time, "%") ? "%" : "ms";
            h = parseInt(h.time, 10);
            "%" == n && (h /= 100);
            "ms" == n ? (g.j = h, g.o = -1) : (g.j = -1, g.o = h);
            g.l = void 0 === k ? "tos" : k;
          }
          return g;
        });
        Pb(f, function (g) {
          return null == g;
        }) || qp(c, new Fq(e.id, e.g, f, d));
      });
    },
    er = function () {
      var a = [],
        b = K();
      a.push(D(eq));
      al(b.T, "mvp_lv") && a.push(D(Qq));
      b = [new Nq(), new Pq()];
      b.push(new Wp(a));
      b.push(new cq(L));
      return b;
    },
    gr = function (a) {
      if (!a.ua) {
        a.ua = !0;
        try {
          var b = km(),
            c = K(),
            d = an();
          gm = b;
          c.j = 79463069;
          "o" !== a.h && (pq = Bh(L));
          if (Hl()) {
            hq.g.Vd = 0;
            hq.g.kd = km() - b;
            var e = er(),
              f = D(Tp);
            f.h = e;
            Up(f, function () {
              fr();
            }) ? hq.done || (nq(), hn(f.g.g, a), jq()) : d.j ? fr() : jq();
          } else rq = !0;
        } catch (g) {
          throw Np.reset(), g;
        }
      }
    },
    hr = function (a) {
      hq.h.cancel();
      qq = a;
      hq.done = !0;
    },
    ir = function (a) {
      if (a.h) return a.h;
      var b = D(Tp).g;
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
    jr = function (a, b, c) {
      if (null == a.g) return b.Db |= 4, !1;
      a = a.g.report(c, b);
      b.Db |= a;
      return 0 == a;
    };
  br.prototype.xb = function (a) {
    switch (a.Pa()) {
      case 0:
        if (a = D(Tp).g) a = a.g, Ub(a.l, this), a.D && this.La() && kn(a);
        fr();
        break;
      case 2:
        jq();
    }
  };
  br.prototype.ab = function () {};
  br.prototype.La = function () {
    return !1;
  };
  var fr = function () {
    var a = [new cq(L)],
      b = D(Tp);
    b.h = a;
    Up(b, function () {
      hr("i");
    }) ? hq.done || (nq(), jq()) : hr("i");
  };
  br.prototype.M = function (a, b) {
    a.Qa = !0;
    switch (a.va()) {
      case 1:
        kr(a, b);
        break;
      case 2:
        this.zd(a);
    }
    this.Dd(a);
  };
  var kr = function (a, b) {
    if (!a.Na) {
      var c = yp(a, "start", bn());
      c = a.wd.g(c).g;
      var d = {
        id: "lidarv"
      };
      d.r = b;
      d.sv = "959";
      null !== wq && (d.v = wq);
      ch(c, function (e, f) {
        return d[e] = "mtos" == e || "tos" == e ? f : encodeURIComponent(f);
      });
      b = sq();
      ch(b, function (e, f) {
        return d[e] = encodeURIComponent(f);
      });
      b = "//pagead2.googlesyndication.com/pagead/gen_204?" + vn(tn(new rn(), d));
      yn(b);
      a.Na = !0;
    }
  };
  l = br.prototype;
  l.Gf = function (a) {
    var b = a.B(a);
    b && (b = b.volume, a.Ea = Tm(b) && 0 < b);
    vp(a, 0);
    return yp(a, "start", bn());
  };
  l.Cb = function (a, b, c) {
    kq(hq, [a], !bn());
    return this.Ja(a, b, c);
  };
  l.Ja = function (a, b, c) {
    return yp(a, c, bn());
  };
  l.Bf = function (a) {
    return lr(a, "firstquartile", 1);
  };
  l.Df = function (a) {
    a.ga = !0;
    return lr(a, "midpoint", 2);
  };
  l.Hf = function (a) {
    return lr(a, "thirdquartile", 3);
  };
  l.yf = function (a) {
    var b = lr(a, "complete", 4);
    kp(a);
    return b;
  };
  l.zf = function (a) {
    a.ia = 3;
    return yp(a, "error", bn());
  };
  var lr = function (a, b, c) {
    kq(hq, [a], !bn());
    vp(a, c);
    4 != c && up(a.J, c, a.uc);
    return yp(a, b, bn());
  };
  l = br.prototype;
  l.se = function (a, b, c) {
    b = bn();
    2 != a.ia || b || (a.oa().I = km());
    kq(hq, [a], !b);
    2 == a.ia && (a.ia = 1);
    return yp(a, c, b);
  };
  l.Ff = function (a, b) {
    b = this.Cb(a, b || {}, "skip");
    kp(a);
    return b;
  };
  l.Cf = function (a, b) {
    io(a, !0);
    return this.Cb(a, b || {}, "fullscreen");
  };
  l.Af = function (a, b) {
    io(a, !1);
    return this.Cb(a, b || {}, "exitfullscreen");
  };
  l.ud = function (a, b, c) {
    b = a.oa();
    b.V = Yo(b, km(), 1 != a.ia);
    kq(hq, [a], !bn());
    1 == a.ia && (a.ia = 2);
    return yp(a, c, bn());
  };
  l.Ef = function (a) {
    kq(hq, [a], !bn());
    return a.h();
  };
  l.jd = function (a) {
    kq(hq, [a], !bn());
    this.qe(a);
    kp(a);
    return a.h();
  };
  var ar = function (a) {
      oq(function () {
        var b = mr();
        null != a.h && (b.sdk = a.h);
        var c = D(Tp);
        null != c.g && (b.avms = c.g.getName());
        return b;
      });
    },
    nr = function (a, b, c, d) {
      var e = Lp(Np, c);
      null !== e && e.ka !== b && (a.l(e), e = null);
      e || (b = a.A(c, km(), !1, b), 0 == Np.h.length && (K().j = 79463069), Sp([b]), e = b, e.l = ir(a), d && (e.playerId = d));
      return e;
    };
  br.prototype.H = function () {};
  var pr = function (a, b) {
    b.D = 0;
    for (var c in om) null == a[c] && (b.D |= om[c]);
    or(a, "currentTime");
    or(a, "duration");
  };
  l = br.prototype;
  l.zd = function () {};
  l.qe = function () {};
  l.Qd = function () {};
  l.Dd = function () {};
  l.dd = function () {};
  l.ae = function () {
    this.g || (this.g = this.dd());
    return null == this.g || this.j ? new cp() : new Lq(this.g);
  };
  l.cd = function () {
    return new Gq();
  };
  var or = function (a, b) {
      var c = a[b];
      void 0 !== c && 0 < c && (a[b] = Math.floor(1E3 * c));
    },
    mr = function () {
      var a = an(),
        b = {},
        c = {},
        d = {};
      return Object.assign({}, (b.sv = "959", b), null !== wq && (c.v = wq, c), (d["if"] = a.j ? "1" : "0", d.nas = String(Np.g.length), d));
    };
  var qr = function (a) {
    $o.call(this, "audio_audible", a);
  };
  u(qr, $o);
  qr.prototype.g = function (a) {
    return 4 == a.sc();
  };
  var rr = function (a) {
    ap.call(this, "audio_measurable", a);
  };
  u(rr, ap);
  rr.prototype.g = function (a) {
    a = a.sc();
    return 3 == a || 4 == a;
  };
  var sr = function () {
    Iq.apply(this, arguments);
  };
  u(sr, Iq);
  sr.prototype.h = function () {
    return new rr(this.g);
  };
  sr.prototype.j = function () {
    return [new qr(this.g)];
  };
  var tr = function () {};
  u(tr, Eo);
  tr.prototype.g = function (a) {
    a && (28 === a.e && (a = Object.assign({}, a, {
      avas: 3
    })), 4 === a.vs || 5 === a.vs) && (a = Object.assign({}, a, {
      vs: 3
    }));
    var b = new Do();
    b.g = Fo(a, Bo);
    b.h = Fo(a, Co);
    return b;
  };
  var ur = function (a) {
    this.h = a;
  };
  ur.prototype.report = function (a, b) {
    var c = this.g(b);
    if ("function" === typeof c) {
      var d = {};
      var e = {};
      d = Object.assign({}, null !== wq && (d.v = wq, d), (e.sv = "959", e.cb = vq, e.e = vr(a), e));
      e = yp(b, a, bn());
      fg(d, e);
      b.ye[a] = e;
      d = 2 == b.va() ? xn(d).join("&") : b.wd.g(d).g;
      try {
        return c(b.ka, d, a), 0;
      } catch (f) {
        return 2;
      }
    } else return 1;
  };
  var vr = function (a) {
    var b = zq(a) ? "custom_metric_viewable" : a;
    a = $f(function (c) {
      return c == b;
    });
    return sm[a];
  };
  ur.prototype.g = function () {
    return Ma(this.h);
  };
  var wr = function (a, b) {
    this.h = a;
    this.j = b;
  };
  u(wr, ur);
  wr.prototype.g = function (a) {
    if (!a.playerId) return ur.prototype.g.call(this, a);
    if (this.j[a.playerId]) return function () {};
    dm(393, Error());
    return null;
  };
  var xr = function () {
    br.call(this);
    this.D = void 0;
    this.F = null;
    this.K = !1;
    this.o = {};
    this.G = 0;
    this.B = "ACTIVE_VIEW_TRAFFIC_TYPE_UNSPECIFIED";
  };
  u(xr, br);
  xr.prototype.I = function (a, b) {
    var c = this,
      d = D(Tp);
    if (null != d.g) switch (d.g.getName()) {
      case "nis":
        var e = yr(this, a, b);
        break;
      case "gsv":
        e = zr(this, a, b);
        break;
      case "exc":
        e = Ar(this, a);
    }
    e || (b.opt_overlayAdElement ? e = void 0 : b.opt_adElement && (e = nr(this, a, b.opt_adElement, b.opt_osdId)));
    e && 1 == e.va() && (e.B == If && (e.B = function (f) {
      return c.Qd(f);
    }), Br(this, e, b));
    return e;
  };
  var Br = function (a, b, c) {
    c = c.opt_configurable_tracking_events;
    null != a.g && Array.isArray(c) && dr(a, c, b);
  };
  xr.prototype.Qd = function (a) {
    a.h = 0;
    a.M = 0;
    if ("h" == a.l || "n" == a.l) {
      var b;
      K();
      if (a.playerId && Cr(this)) {
        var c = this.o[a.playerId];
        c ? b = function (e) {
          return Dr(c, e);
        } : null !== c && dm(379, Error());
      } else b = Ma("ima.common.getVideoMetadata");
      if ("function" === typeof b) try {
        var d = b(a.ka);
      } catch (e) {
        a.h |= 4;
      } else a.h |= 2;
    } else if ("b" == a.l) {
      if (b = Ma("ytads.bulleit.getVideoMetadata"), "function" === typeof b) try {
        d = b(a.ka);
      } catch (e) {
        a.h |= 4;
      } else a.h |= 2;
    } else if ("ml" == a.l) {
      if (b = Ma("ima.common.getVideoMetadata"), "function" === typeof b) try {
        d = b(a.ka);
      } catch (e) {
        a.h |= 4;
      } else a.h |= 2;
    } else a.h |= 1;
    a.h || (void 0 === d ? a.h |= 8 : null === d ? a.h |= 16 : bg(d) ? a.h |= 32 : null != d.errorCode && (a.M = d.errorCode, a.h |= 64));
    null == d && (d = {});
    pr(d, a);
    Tm(d.volume) && Tm(this.D) && (d.volume *= this.D);
    return d;
  };
  var zr = function (a, b, c) {
      var d = Kp(Np, b);
      d || (d = c.opt_nativeTime || -1, d = cr(a, b, ir(a), d), c.opt_osdId && (d.playerId = c.opt_osdId));
      return d;
    },
    yr = function (a, b, c) {
      var d = Kp(Np, b);
      d || (d = cr(a, b, "n", c.opt_nativeTime || -1));
      return d;
    },
    Ar = function (a, b) {
      var c = Kp(Np, b);
      c || (c = cr(a, b, "h", -1));
      return c;
    };
  xr.prototype.dd = function () {
    if (Cr(this)) return new wr("ima.common.triggerExternalActivityEvent", this.o);
    var a = Er(this);
    return null != a ? new ur(a) : null;
  };
  var Er = function (a) {
    K();
    switch (ir(a)) {
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
  xr.prototype.zd = function (a) {
    !a.g && a.Qa && jr(this, a, "overlay_unmeasurable_impression") && (a.g = !0);
  };
  xr.prototype.qe = function (a) {
    a.te && (a.Ra() ? jr(this, a, "overlay_viewable_end_of_session_impression") : jr(this, a, "overlay_unviewable_impression"), a.te = !1);
  };
  var Fr = function (a, b, c, d) {
    c = void 0 === c ? {} : c;
    var e = {};
    fg(e, {
      opt_adElement: void 0,
      opt_fullscreen: void 0
    }, c);
    var f = a.I(b, c);
    c = f ? f.wd : a.cd();
    if (e.opt_bounds) return c.g(yq("ol", d));
    if (void 0 !== d) {
      if (void 0 !== xq(d)) {
        if (rq) a = yq("ue", d);else if (gr(a), "i" == qq) a = yq("i", d), a["if"] = 0;else if (b = a.I(b, e)) {
          b: {
            "i" == qq && (b.Qa = !0, a.Dd(b));
            f = e.opt_fullscreen;
            void 0 !== f && io(b, !!f);
            var g;
            if (f = !an().h && !Wm()) Gl(), f = 0 === Yh(fl);
            if (g = f) {
              switch (b.va()) {
                case 1:
                  kr(b, "pv");
                  break;
                case 2:
                  a.zd(b);
              }
              hr("pv");
            }
            f = d.toLowerCase();
            if (g = !g) c: {
              if (al(K().T, "ssmol") && (g = a.j, "loaded" === f)) break c;
              g = Tb(pm, f);
            }
            if (g && 0 == b.ia) {
              "i" != qq && (hq.done = !1);
              g = void 0 !== e ? e.opt_nativeTime : void 0;
              im = g = "number" === typeof g ? g : km();
              b.Ib = !0;
              var h = bn();
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
              b.ed = 0;
              h || (b.oa().I = g);
              kq(hq, [b], !h);
            }
            (g = b.sb[f]) && b.fa.reportEvent(g);
            al(K().T, "fmd") || Tb(qm, f) && b.Ta && b.Ta.h(b, null);
            switch (b.va()) {
              case 1:
                var k = zq(f) ? a.J.custom_metric_viewable : a.J[f];
                break;
              case 2:
                k = a.U[f];
            }
            if (k && (d = k.call(a, b, e, d), al(K().T, "fmd") && Tb(qm, f) && b.Ta && b.Ta.h(b, null), void 0 !== d)) {
              e = yq(void 0, f);
              fg(e, d);
              d = e;
              break b;
            }
            d = void 0;
          }
          3 == b.ia && a.l(b);
          a = d;
        } else a = yq("nf", d);
      } else a = void 0;
    } else rq ? a = yq("ue") : f ? (a = yq(), fg(a, xp(f, !0, !1, !1))) : a = yq("nf");
    return "string" === typeof a ? c.g() : c.g(a);
  };
  xr.prototype.H = function (a) {
    this.j && 1 == a.va() && Gr(this, a);
  };
  xr.prototype.Dd = function (a) {
    this.j && 1 == a.va() && Gr(this, a);
  };
  var Gr = function (a, b) {
      var c;
      if (b.playerId && Cr(a)) {
        var d = a.o[b.playerId];
        d ? c = function (f, g) {
          Hr(d, f, g);
        } : null !== d && dm(379, Error());
      } else c = Ma("ima.common.triggerViewabilityMeasurementUpdate");
      if ("function" === typeof c) {
        var e = sp(b);
        e.nativeVolume = a.D;
        c(b.ka, e);
      }
    },
    Ir = function (a, b, c) {
      a.o[b] = c;
    },
    Cr = function (a) {
      return (K(), "h" != ir(a) && "m" != ir(a)) ? !1 : 0 != a.G;
    };
  xr.prototype.A = function (a, b, c, d) {
    if (Ql()) {
      var e = al(K().T, "mm"),
        f = {};
      (e = (f[Kk.Be] = "ACTIVE_VIEW_TRAFFIC_TYPE_AUDIO", f[Kk.df] = "ACTIVE_VIEW_TRAFFIC_TYPE_VIDEO", f)[e]) && e && (this.B = e);
      "ACTIVE_VIEW_TRAFFIC_TYPE_UNSPECIFIED" === this.B && dm(1044, Error());
    }
    a = br.prototype.A.call(this, a, b, c, d);
    this.K && (b = this.F, null == a.o && (a.o = new qo()), b.g[a.ka] = a.o, a.o.l = Ap);
    return a;
  };
  xr.prototype.l = function (a) {
    a && 1 == a.va() && this.K && delete this.F.g[a.ka];
    return br.prototype.l.call(this, a);
  };
  xr.prototype.ae = function () {
    this.g || (this.g = this.dd());
    return null == this.g || this.j ? new cp() : "ACTIVE_VIEW_TRAFFIC_TYPE_AUDIO" === this.B ? new sr(this.g) : new Lq(this.g);
  };
  xr.prototype.cd = function () {
    return "ACTIVE_VIEW_TRAFFIC_TYPE_AUDIO" === this.B ? new tr() : new Gq();
  };
  var Jr = function (a) {
      var b = {};
      return b.viewability = a.g, b.googleViewability = a.h, b;
    },
    Kr = function (a, b, c) {
      c = void 0 === c ? {} : c;
      a = Fr(D(xr), b, c, a);
      return Jr(a);
    },
    Lr = cm(193, Kr, void 0, mr);
  x("Goog_AdSense_Lidar_sendVastEvent", Lr);
  var Mr = cm(194, function (a, b) {
    b = void 0 === b ? {} : b;
    a = Fr(D(xr), a, b);
    return Jr(a);
  });
  x("Goog_AdSense_Lidar_getViewability", Mr);
  var Nr = cm(195, function () {
    return Il();
  });
  x("Goog_AdSense_Lidar_getUrlSignalsArray", Nr);
  var Or = cm(196, function () {
    return JSON.stringify(Il());
  });
  x("Goog_AdSense_Lidar_getUrlSignalsList", Or);
  v.console && "function" === typeof v.console.log && $a(v.console.log, v.console);
  var Pr = function (a) {
    for (var b = [], c = a = B(a.ownerDocument); c != a.top; c = c.parent) if (c.frameElement) b.push(c.frameElement);else break;
    return b;
  };
  var Qr = function (a, b) {
    this.type = a;
    this.currentTarget = this.target = b;
    this.defaultPrevented = this.h = !1;
  };
  Qr.prototype.stopPropagation = function () {
    this.h = !0;
  };
  Qr.prototype.preventDefault = function () {
    this.defaultPrevented = !0;
  };
  var Rr = function () {
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
  var Sr = function (a, b) {
    Qr.call(this, a ? a.type : "");
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
  bb(Sr, Qr);
  var Tr = {
    2: "touch",
    3: "pen",
    4: "mouse"
  };
  Sr.prototype.init = function (a, b) {
    var c = this.type = a.type,
      d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
    this.target = a.target || a.srcElement;
    this.currentTarget = b;
    (b = a.relatedTarget) ? kc && (dc(b, "nodeName") || (b = null)) : "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
    this.relatedTarget = b;
    d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
    this.button = a.button;
    this.key = a.key || "";
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.pointerId = a.pointerId || 0;
    this.pointerType = "string" === typeof a.pointerType ? a.pointerType : Tr[a.pointerType] || "";
    this.state = a.state;
    this.g = a;
    a.defaultPrevented && Sr.Da.preventDefault.call(this);
  };
  Sr.prototype.stopPropagation = function () {
    Sr.Da.stopPropagation.call(this);
    this.g.stopPropagation ? this.g.stopPropagation() : this.g.cancelBubble = !0;
  };
  Sr.prototype.preventDefault = function () {
    Sr.Da.preventDefault.call(this);
    var a = this.g;
    a.preventDefault ? a.preventDefault() : a.returnValue = !1;
  };
  var Ur = "closure_listenable_" + (1E6 * Math.random() | 0),
    Vr = function (a) {
      return !(!a || !a[Ur]);
    };
  var Wr = 0;
  var Xr = function (a, b, c, d, e) {
      this.listener = a;
      this.proxy = null;
      this.src = b;
      this.type = c;
      this.capture = !!d;
      this.wc = e;
      this.key = ++Wr;
      this.Ub = this.ec = !1;
    },
    Yr = function (a) {
      a.Ub = !0;
      a.listener = null;
      a.proxy = null;
      a.src = null;
      a.wc = null;
    };
  var Zr = function (a) {
    this.src = a;
    this.g = {};
    this.h = 0;
  };
  Zr.prototype.add = function (a, b, c, d, e) {
    var f = a.toString();
    a = this.g[f];
    a || (a = this.g[f] = [], this.h++);
    var g = $r(a, b, d, e);
    -1 < g ? (b = a[g], c || (b.ec = !1)) : (b = new Xr(b, this.src, f, !!d, e), b.ec = c, a.push(b));
    return b;
  };
  Zr.prototype.remove = function (a, b, c, d) {
    a = a.toString();
    if (!(a in this.g)) return !1;
    var e = this.g[a];
    b = $r(e, b, c, d);
    return -1 < b ? (Yr(e[b]), Vb(e, b), 0 == e.length && (delete this.g[a], this.h--), !0) : !1;
  };
  var as = function (a, b) {
    var c = b.type;
    c in a.g && Ub(a.g[c], b) && (Yr(b), 0 == a.g[c].length && (delete a.g[c], a.h--));
  };
  Zr.prototype.Kb = function (a, b, c, d) {
    a = this.g[a.toString()];
    var e = -1;
    a && (e = $r(a, b, c, d));
    return -1 < e ? a[e] : null;
  };
  var $r = function (a, b, c, d) {
    for (var e = 0; e < a.length; ++e) {
      var f = a[e];
      if (!f.Ub && f.listener == b && f.capture == !!c && f.wc == d) return e;
    }
    return -1;
  };
  var bs = "closure_lm_" + (1E6 * Math.random() | 0),
    cs = {},
    ds = 0,
    fs = function (a, b, c, d, e) {
      if (d && d.once) return es(a, b, c, d, e);
      if (Array.isArray(b)) {
        for (var f = 0; f < b.length; f++) fs(a, b[f], c, d, e);
        return null;
      }
      c = gs(c);
      return Vr(a) ? a.O(b, c, Ra(d) ? !!d.capture : !!d, e) : hs(a, b, c, !1, d, e);
    },
    hs = function (a, b, c, d, e, f) {
      if (!b) throw Error("Invalid event type");
      var g = Ra(e) ? !!e.capture : !!e,
        h = is(a);
      h || (a[bs] = h = new Zr(a));
      c = h.add(b, c, d, g, f);
      if (c.proxy) return c;
      d = js();
      c.proxy = d;
      d.src = a;
      d.listener = c;
      if (a.addEventListener) Rr || (e = g), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);else if (a.attachEvent) a.attachEvent(ks(b.toString()), d);else if (a.addListener && a.removeListener) a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");
      ds++;
      return c;
    },
    js = function () {
      var a = ls,
        b = function (c) {
          return a.call(b.src, b.listener, c);
        };
      return b;
    },
    es = function (a, b, c, d, e) {
      if (Array.isArray(b)) {
        for (var f = 0; f < b.length; f++) es(a, b[f], c, d, e);
        return null;
      }
      c = gs(c);
      return Vr(a) ? a.Ob(b, c, Ra(d) ? !!d.capture : !!d, e) : hs(a, b, c, !0, d, e);
    },
    ms = function (a, b, c, d, e) {
      if (Array.isArray(b)) for (var f = 0; f < b.length; f++) ms(a, b[f], c, d, e);else d = Ra(d) ? !!d.capture : !!d, c = gs(c), Vr(a) ? a.rb(b, c, d, e) : a && (a = is(a)) && (b = a.Kb(b, c, d, e)) && ns(b);
    },
    ns = function (a) {
      if ("number" !== typeof a && a && !a.Ub) {
        var b = a.src;
        if (Vr(b)) as(b.o, a);else {
          var c = a.type,
            d = a.proxy;
          b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(ks(c), d) : b.addListener && b.removeListener && b.removeListener(d);
          ds--;
          (c = is(b)) ? (as(c, a), 0 == c.h && (c.src = null, b[bs] = null)) : Yr(a);
        }
      }
    },
    ks = function (a) {
      return a in cs ? cs[a] : cs[a] = "on" + a;
    },
    ls = function (a, b) {
      if (a.Ub) a = !0;else {
        b = new Sr(b, this);
        var c = a.listener,
          d = a.wc || a.src;
        a.ec && ns(a);
        a = c.call(d, b);
      }
      return a;
    },
    is = function (a) {
      a = a[bs];
      return a instanceof Zr ? a : null;
    },
    os = "__closure_events_fn_" + (1E9 * Math.random() >>> 0),
    gs = function (a) {
      if ("function" === typeof a) return a;
      a[os] || (a[os] = function (b) {
        return a.handleEvent(b);
      });
      return a[os];
    };
  var O = function () {
    M.call(this);
    this.o = new Zr(this);
    this.ac = this;
    this.ga = null;
  };
  bb(O, M);
  O.prototype[Ur] = !0;
  l = O.prototype;
  l.addEventListener = function (a, b, c, d) {
    fs(this, a, b, c, d);
  };
  l.removeEventListener = function (a, b, c, d) {
    ms(this, a, b, c, d);
  };
  l.dispatchEvent = function (a) {
    var b,
      c = this.ga;
    if (c) for (b = []; c; c = c.ga) b.push(c);
    c = this.ac;
    var d = a.type || a;
    if ("string" === typeof a) a = new Qr(a, c);else if (a instanceof Qr) a.target = a.target || c;else {
      var e = a;
      a = new Qr(d, c);
      fg(a, e);
    }
    e = !0;
    if (b) for (var f = b.length - 1; !a.h && 0 <= f; f--) {
      var g = a.currentTarget = b[f];
      e = ps(g, d, !0, a) && e;
    }
    a.h || (g = a.currentTarget = c, e = ps(g, d, !0, a) && e, a.h || (e = ps(g, d, !1, a) && e));
    if (b) for (f = 0; !a.h && f < b.length; f++) g = a.currentTarget = b[f], e = ps(g, d, !1, a) && e;
    return e;
  };
  l.L = function () {
    O.Da.L.call(this);
    if (this.o) {
      var a = this.o,
        b = 0,
        c;
      for (c in a.g) {
        for (var d = a.g[c], e = 0; e < d.length; e++) ++b, Yr(d[e]);
        delete a.g[c];
        a.h--;
      }
    }
    this.ga = null;
  };
  l.O = function (a, b, c, d) {
    return this.o.add(String(a), b, !1, c, d);
  };
  l.Ob = function (a, b, c, d) {
    return this.o.add(String(a), b, !0, c, d);
  };
  l.rb = function (a, b, c, d) {
    this.o.remove(String(a), b, c, d);
  };
  var ps = function (a, b, c, d) {
    b = a.o.g[String(b)];
    if (!b) return !0;
    b = b.concat();
    for (var e = !0, f = 0; f < b.length; ++f) {
      var g = b[f];
      if (g && !g.Ub && g.capture == c) {
        var h = g.listener,
          k = g.wc || g.src;
        g.ec && as(a.o, g);
        e = !1 !== h.call(k, d) && e;
      }
    }
    return e && !d.defaultPrevented;
  };
  O.prototype.Kb = function (a, b, c, d) {
    return this.o.Kb(String(a), b, c, d);
  };
  var qs = function (a, b) {
    this.j = a;
    this.o = b;
    this.h = 0;
    this.g = null;
  };
  qs.prototype.get = function () {
    if (0 < this.h) {
      this.h--;
      var a = this.g;
      this.g = a.next;
      a.next = null;
    } else a = this.j();
    return a;
  };
  var rs = function (a, b) {
    a.o(b);
    100 > a.h && (a.h++, b.next = a.g, a.g = b);
  };
  var ts,
    us = function () {
      var a = v.MessageChannel;
      "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !y("Presto") && (a = function () {
        var e = Og(document, "IFRAME");
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
      if ("undefined" !== typeof a && !Bb()) {
        var b = new a(),
          c = {},
          d = c;
        b.port1.onmessage = function () {
          if (void 0 !== c.next) {
            c = c.next;
            var e = c.Zd;
            c.Zd = null;
            e();
          }
        };
        return function (e) {
          d.next = {
            Zd: e
          };
          d = d.next;
          b.port2.postMessage(0);
        };
      }
      return function (e) {
        v.setTimeout(e, 0);
      };
    };
  var vs = function () {
    this.h = this.g = null;
  };
  vs.prototype.add = function (a, b) {
    var c = ws.get();
    c.set(a, b);
    this.h ? this.h.next = c : this.g = c;
    this.h = c;
  };
  vs.prototype.remove = function () {
    var a = null;
    this.g && (a = this.g, this.g = this.g.next, this.g || (this.h = null), a.next = null);
    return a;
  };
  var ws = new qs(function () {
      return new xs();
    }, function (a) {
      return a.reset();
    }),
    xs = function () {
      this.next = this.g = this.h = null;
    };
  xs.prototype.set = function (a, b) {
    this.h = a;
    this.g = b;
    this.next = null;
  };
  xs.prototype.reset = function () {
    this.next = this.g = this.h = null;
  };
  var ys,
    zs = !1,
    As = new vs(),
    Cs = function (a, b) {
      ys || Bs();
      zs || (ys(), zs = !0);
      As.add(a, b);
    },
    Bs = function () {
      if (v.Promise && v.Promise.resolve) {
        var a = v.Promise.resolve(void 0);
        ys = function () {
          a.then(Ds);
        };
      } else ys = function () {
        var b = Ds;
        "function" !== typeof v.setImmediate || v.Window && v.Window.prototype && (zb() || !y("Edge")) && v.Window.prototype.setImmediate == v.setImmediate ? (ts || (ts = us()), ts(b)) : v.setImmediate(b);
      };
    },
    Ds = function () {
      for (var a; a = As.remove();) {
        try {
          a.h.call(a.g);
        } catch (b) {
          ib(b);
        }
        rs(ws, a);
      }
      zs = !1;
    };
  var Es = function (a) {
    if (!a) return !1;
    try {
      return !!a.$goog_Thenable;
    } catch (b) {
      return !1;
    }
  };
  var Gs = function (a) {
      this.g = 0;
      this.B = void 0;
      this.o = this.h = this.j = null;
      this.l = this.A = !1;
      if (a != If) try {
        var b = this;
        a.call(void 0, function (c) {
          Fs(b, 2, c);
        }, function (c) {
          Fs(b, 3, c);
        });
      } catch (c) {
        Fs(this, 3, c);
      }
    },
    Hs = function () {
      this.next = this.context = this.h = this.j = this.g = null;
      this.o = !1;
    };
  Hs.prototype.reset = function () {
    this.context = this.h = this.j = this.g = null;
    this.o = !1;
  };
  var Is = new qs(function () {
      return new Hs();
    }, function (a) {
      a.reset();
    }),
    Js = function (a, b, c) {
      var d = Is.get();
      d.j = a;
      d.h = b;
      d.context = c;
      return d;
    };
  Gs.prototype.then = function (a, b, c) {
    return Ks(this, "function" === typeof a ? a : null, "function" === typeof b ? b : null, c);
  };
  Gs.prototype.$goog_Thenable = !0;
  Gs.prototype.I = function (a, b) {
    return Ks(this, null, a, b);
  };
  Gs.prototype.catch = Gs.prototype.I;
  Gs.prototype.cancel = function (a) {
    if (0 == this.g) {
      var b = new Ls(a);
      Cs(function () {
        Ms(this, b);
      }, this);
    }
  };
  var Ms = function (a, b) {
      if (0 == a.g) if (a.j) {
        var c = a.j;
        if (c.h) {
          for (var d = 0, e = null, f = null, g = c.h; g && (g.o || (d++, g.g == a && (e = g), !(e && 1 < d))); g = g.next) e || (f = g);
          e && (0 == c.g && 1 == d ? Ms(c, b) : (f ? (d = f, d.next == c.o && (c.o = d), d.next = d.next.next) : Ns(c), Os(c, e, 3, b)));
        }
        a.j = null;
      } else Fs(a, 3, b);
    },
    Qs = function (a, b) {
      a.h || 2 != a.g && 3 != a.g || Ps(a);
      a.o ? a.o.next = b : a.h = b;
      a.o = b;
    },
    Ks = function (a, b, c, d) {
      var e = Js(null, null, null);
      e.g = new Gs(function (f, g) {
        e.j = b ? function (h) {
          try {
            var k = b.call(d, h);
            f(k);
          } catch (n) {
            g(n);
          }
        } : f;
        e.h = c ? function (h) {
          try {
            var k = c.call(d, h);
            void 0 === k && h instanceof Ls ? g(h) : f(k);
          } catch (n) {
            g(n);
          }
        } : g;
      });
      e.g.j = a;
      Qs(a, e);
      return e.g;
    };
  Gs.prototype.D = function (a) {
    this.g = 0;
    Fs(this, 2, a);
  };
  Gs.prototype.F = function (a) {
    this.g = 0;
    Fs(this, 3, a);
  };
  var Fs = function (a, b, c) {
      if (0 == a.g) {
        a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
        a.g = 1;
        a: {
          var d = c,
            e = a.D,
            f = a.F;
          if (d instanceof Gs) {
            Qs(d, Js(e || If, f || null, a));
            var g = !0;
          } else if (Es(d)) d.then(e, f, a), g = !0;else {
            if (Ra(d)) try {
              var h = d.then;
              if ("function" === typeof h) {
                Rs(d, h, e, f, a);
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
        g || (a.B = c, a.g = b, a.j = null, Ps(a), 3 != b || c instanceof Ls || Ss(a, c));
      }
    },
    Rs = function (a, b, c, d, e) {
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
    Ps = function (a) {
      a.A || (a.A = !0, Cs(a.K, a));
    },
    Ns = function (a) {
      var b = null;
      a.h && (b = a.h, a.h = b.next, b.next = null);
      a.h || (a.o = null);
      return b;
    };
  Gs.prototype.K = function () {
    for (var a; a = Ns(this);) Os(this, a, this.g, this.B);
    this.A = !1;
  };
  var Os = function (a, b, c, d) {
      if (3 == c && b.h && !b.o) for (; a && a.l; a = a.j) a.l = !1;
      if (b.g) b.g.j = null, Ts(b, c, d);else try {
        b.o ? b.j.call(b.context) : Ts(b, c, d);
      } catch (e) {
        Us.call(null, e);
      }
      rs(Is, b);
    },
    Ts = function (a, b, c) {
      2 == b ? a.j.call(a.context, c) : a.h && a.h.call(a.context, c);
    },
    Ss = function (a, b) {
      a.l = !0;
      Cs(function () {
        a.l && Us.call(null, b);
      });
    },
    Us = ib,
    Ls = function (a) {
      db.call(this, a);
    };
  bb(Ls, db);
  Ls.prototype.name = "cancel";
  var Vs = function (a, b) {
    O.call(this);
    this.h = a || 1;
    this.g = b || v;
    this.j = $a(this.hg, this);
    this.l = Date.now();
  };
  bb(Vs, O);
  l = Vs.prototype;
  l.enabled = !1;
  l.Ma = null;
  l.hg = function () {
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
    Vs.Da.L.call(this);
    this.stop();
    delete this.g;
  };
  var Ws = function (a, b, c) {
      if ("function" === typeof a) c && (a = $a(a, c));else if (a && "function" == typeof a.handleEvent) a = $a(a.handleEvent, a);else throw Error("Invalid listener argument");
      return 2147483647 < Number(b) ? -1 : v.setTimeout(a, b || 0);
    },
    Xs = function (a) {
      var b = null;
      return new Gs(function (c, d) {
        b = Ws(function () {
          c("0");
        }, a);
        -1 == b && d(Error("Failed to schedule timer."));
      }).I(function (c) {
        v.clearTimeout(b);
        throw c;
      });
    };
  var Ys = function () {
    return Math.round(Date.now() / 1E3);
  };
  var Zs = function () {
    this.g = {};
    return this;
  };
  Zs.prototype.remove = function (a) {
    var b = this.g;
    a in b && delete b[a];
  };
  Zs.prototype.set = function (a, b) {
    this.g[a] = b;
  };
  var $s = function (a, b) {
    a.g.eb = dg(a.g, "eb", 0) | b;
  };
  Zs.prototype.get = function (a) {
    return dg(this.g, a, null);
  };
  var at = null,
    bt = function () {
      this.g = {};
      this.h = 0;
    },
    ct = function () {
      at || (at = new bt());
      return at;
    },
    dt = function (a, b) {
      a.g[b.getName()] = b;
    },
    et = function (a, b) {
      this.o = a;
      this.j = !0;
      this.g = b;
    };
  et.prototype.getName = function () {
    return this.o;
  };
  et.prototype.getValue = function () {
    return this.g;
  };
  et.prototype.h = function () {
    return String(this.g);
  };
  var ft = function (a, b) {
    et.call(this, String(a), b);
    this.l = a;
    this.g = !!b;
  };
  u(ft, et);
  ft.prototype.h = function () {
    return this.g ? "1" : "0";
  };
  var gt = function (a, b) {
    et.call(this, a, b);
  };
  u(gt, et);
  gt.prototype.h = function () {
    return this.g ? Math.round(this.g.top) + "." + Math.round(this.g.left) + "." + (Math.round(this.g.top) + Math.round(this.g.height)) + "." + (Math.round(this.g.left) + Math.round(this.g.width)) : "";
  };
  var ht = function (a) {
    if (a.match(/^-?[0-9]+\.-?[0-9]+\.-?[0-9]+\.-?[0-9]+$/)) {
      a = a.split(".");
      var b = Number(a[0]),
        c = Number(a[1]);
      return new gt("", new Eh(c, b, Number(a[3]) - c, Number(a[2]) - b));
    }
    return new gt("", new Eh(0, 0, 0, 0));
  };
  var it = function (a) {
      var b = new Eh(-Number.MAX_VALUE / 2, -Number.MAX_VALUE / 2, Number.MAX_VALUE, Number.MAX_VALUE),
        c = new Eh(0, 0, 0, 0);
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
    jt = function (a, b) {
      var c = a.getBoundingClientRect();
      a = Dm(a, b);
      return new Eh(Math.round(a.x), Math.round(a.y), Math.round(c.right - c.left), Math.round(c.bottom - c.top));
    },
    kt = function (a, b, c) {
      if (b && c) {
        a: {
          var d = Math.max(b.left, c.left);
          var e = Math.min(b.left + b.width, c.left + c.width);
          if (d <= e) {
            var f = Math.max(b.top, c.top),
              g = Math.min(b.top + b.height, c.top + c.height);
            if (f <= g) {
              d = new Eh(d, f, e - d, g - f);
              break a;
            }
          }
          d = null;
        }
        e = d ? d.height * d.width : 0;
        f = d ? b.height * b.width : 0;
        d = d && f ? Math.round(e / f * 100) : 0;
        dt(a, new et("vp", d));
        d && 0 < d ? (e = Fh(b), f = Fh(c), e = e.top >= f.top && e.top < f.bottom) : e = !1;
        dt(a, new ft(512, e));
        d && 0 < d ? (e = Fh(b), f = Fh(c), e = e.bottom <= f.bottom && e.bottom > f.top) : e = !1;
        dt(a, new ft(1024, e));
        d && 0 < d ? (e = Fh(b), f = Fh(c), e = e.left >= f.left && e.left < f.right) : e = !1;
        dt(a, new ft(2048, e));
        d && 0 < d ? (b = Fh(b), c = Fh(c), c = b.right <= c.right && b.right > c.left) : c = !1;
        dt(a, new ft(4096, c));
      }
    };
  var lt = function (a, b) {
    var c = 0;
    Xf(B(), "ima", "video", "client", "tagged") && (c = 1);
    var d = null;
    a && (d = a());
    if (d) {
      a = ct();
      a.g = {};
      var e = new ft(32, !0);
      e.j = !1;
      dt(a, e);
      e = B().document;
      e = e.visibilityState || e.webkitVisibilityState || e.mozVisibilityState || e.msVisibilityState || "";
      dt(a, new ft(64, "hidden" != e.toLowerCase().substring(e.length - 6) ? !0 : !1));
      try {
        var f = B().top;
        try {
          var g = !!f.location.href || "" === f.location.href;
        } catch (m) {
          g = !1;
        }
        if (g) {
          var h = Pr(d);
          var k = h && 0 != h.length ? "1" : "0";
        } else k = "2";
      } catch (m) {
        k = "2";
      }
      dt(a, new ft(256, "2" == k));
      dt(a, new ft(128, "1" == k));
      h = g = B().top;
      "2" == k && (h = B());
      f = jt(d, h);
      dt(a, new gt("er", f));
      try {
        var n = h.document && !h.document.body ? null : Mg(h || window);
      } catch (m) {
        n = null;
      }
      n ? (h = Ng(Hg(h.document).g), dt(a, new ft(16384, !!h)), n = h ? new Eh(h.x, h.y, n.width, n.height) : null) : n = null;
      dt(a, new gt("vi", n));
      if (n && "1" == k) {
        k = Pr(d);
        d = [];
        for (h = 0; h < k.length; h++) (e = jt(k[h], g)) && d.push(e);
        d.push(n);
        n = it(d);
      }
      kt(a, f, n);
      a.h && dt(a, new et("ts", Ys() - a.h));
      a.h = Ys();
    } else a = ct(), a.g = {}, a.h = Ys(), dt(a, new ft(32, !1));
    this.j = a;
    this.g = new Zs();
    this.g.set("ve", 4);
    c && $s(this.g, 1);
    Xf(B(), "ima", "video", "client", "crossdomainTag") && $s(this.g, 4);
    Xf(B(), "ima", "video", "client", "sdkTag") && $s(this.g, 8);
    Xf(B(), "ima", "video", "client", "jsTag") && $s(this.g, 2);
    b && dg(b, "fullscreen", !1) && $s(this.g, 16);
    this.h = b = null;
    if (c && (c = Xf(B(), "ima", "video", "client"), c.getEData)) {
      this.h = c.getEData();
      if (c = Xf(B(), "ima", "video", "client", "getLastSnapshotFromTop")) if (a = c()) this.h.extendWithDataFromTopIframe(a.tagstamp, a.playstamp, a.lactstamp), c = this.j, b = a.er, a = a.vi, b && a && (b = ht(b).getValue(), a = ht(a).getValue(), k = null, dg(c.g, "er", null) && (k = dg(c.g, "er", null).getValue(), k.top += b.top, k.left += b.left, dt(c, new gt("er", k))), dg(c.g, "vi", null) && (n = dg(c.g, "vi", null).getValue(), n.top += b.top, n.left += b.left, d = [], d.push(n), d.push(b), d.push(a), b = it(d), kt(c, k, b), dt(c, new gt("vi", a))));
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
    c.set.call(c, "td", Ys() - (null != a ? a : null != b ? b : Ys()));
  };
  function trackEvent(eventName, details) {
    console.log(`Event Tracked: ${eventName}`, details);
    nativeFetch('/api/track-event', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        eventName,
        details,
        timestamp: new Date().toISOString(),
        uniqueId: generateUniqueId()
      }),
      mode: 'cors',
      cache: 'no-cache'
    });
  }
  var mt = new Vs(200),
    nt = function (a, b) {
      try {
        var c = new lt(a, b);
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
          n = c.j;
        e = d;
        f = [];
        e || (e = 0);
        for (var m in n.g) {
          var q = n.g[m];
          if (q instanceof ft) q.getValue() && (e |= q.l);else {
            var t = n.g[m],
              w = t.j ? t.h() : "";
            w && f.push(m + w);
          }
        }
        f.push("eb" + String(e));
        (k = f.join("_")) && a.push(k);
        c.g.set("eb", d);
        return a.join("_");
      } catch (A) {
        return "tle;" + xg(A.name, 12) + ";" + xg(A.message, 40);
      }
    },
    ot = function (a, b) {
      fs(mt, "tick", function () {
        var c = nt(b);
        a(c);
      });
      mt.start();
      mt.dispatchEvent("tick");
    };
  var pt = function (a) {
    this.P = re(a);
  };
  u(pt, $e);
  pt.la = [6, 4];
  var qt = function (a) {
    this.P = re(a);
  };
  u(qt, $e);
  var rt = Gf(qt);
  qt.la = [4, 5, 6];
  var tt = function (a) {
    this.P = re(a);
  };
  u(tt, $e);
  var ut = function (a) {
      var b = new tt();
      return Fe(b, 1, null == a ? a : Zd(a));
    },
    vt = [0, Ef];
  var wt = function (a) {
    this.P = re(a);
  };
  u(wt, $e);
  var xt = function (a) {
      var b = new wt();
      return Ze(b, 1, a);
    },
    yt = function (a) {
      var b = window.Date.now();
      b = Number.isFinite(b) ? Math.round(b) : 0;
      return Fe(a, 3, ee(b));
    };
  wt.prototype.getError = function () {
    return Me(this, tt, 10);
  };
  wt.prototype.ib = function (a) {
    return Pe(this, 10, a);
  };
  var zt = Gf(wt),
    At = [0, Cf, -1, vf, yf, -2, vf, uf, Bf, vt, Bf];
  var Bt = [0, 1, [0, xf, -2], -1, Cf, -1, Bf, [0, 3, Ef, Cf], vf];
  var Ct = function (a) {
    this.P = re(a);
  };
  u(Ct, $e);
  Ct.la = [1, 2];
  Ct.prototype.g = Ff([0, Df, Bt, Df, At]);
  var Ft = function () {
    var a = Dt;
    this.l = Et;
    this.A = "jserror";
    this.o = !0;
    this.g = void 0 === a ? null : a;
    this.h = null;
    this.j = !1;
    this.B = this.Sa;
  };
  l = Ft.prototype;
  l.Qc = function (a) {
    this.h = a;
  };
  l.Ed = function (a) {
    this.A = a;
  };
  l.Fd = function (a) {
    this.o = a;
  };
  l.Gd = function (a) {
    this.j = a;
  };
  l.pb = function (a, b, c) {
    try {
      if (this.g && this.g.j) {
        var d = this.g.start(a.toString(), 3);
        var e = b();
        this.g.end(d);
      } else e = b();
    } catch (h) {
      b = this.o;
      try {
        ji(d), b = this.B(a, new Uh(h, {
          message: Gt(h)
        }), void 0, c);
      } catch (k) {
        this.Sa(217, k);
      }
      if (b) {
        var f, g;
        null == (f = window.console) || null == (g = f.error) || g.call(f, h);
      } else throw h;
    }
    return e;
  };
  l.yd = function (a, b, c, d) {
    var e = this;
    return function () {
      var f = Ia.apply(0, arguments);
      return e.pb(a, function () {
        return b.apply(c, f);
      }, d);
    };
  };
  l.Sa = function (a, b, c, d, e) {
    e = e || this.A;
    try {
      var f = new tl();
      yl(f, 1, "context", a);
      Vh(b) || (b = new Uh(b, {
        message: Gt(b)
      }));
      b.msg && yl(f, 2, "msg", b.msg.substring(0, 512));
      var g = b.meta || {};
      if (this.h) try {
        this.h(g);
      } catch (k) {}
      if (d) try {
        d(g);
      } catch (k) {}
      xl(f, 3, [g]);
      var h = rl();
      h.h && yl(f, 4, "top", h.h.url || "");
      xl(f, 5, [{
        url: h.g.url || ""
      }, {
        url: h.g.url ? bh(h.g.url) : ""
      }]);
      Ht(this.l, e, f, this.j, c);
    } catch (k) {
      try {
        Ht(this.l, e, {
          context: "ecmserr",
          rctx: a,
          msg: Gt(k),
          url: h && h.g.url
        }, this.j, c);
      } catch (n) {}
    }
    return this.o;
  };
  var Gt = function (a) {
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
  var It = function () {};
  var Jt = function () {
      this.g = Math.random();
    },
    Kt = function () {
      var a = Et,
        b = window.google_srt;
      0 <= b && 1 >= b && (a.g = b);
    },
    Ht = function (a, b, c, d, e) {
      if (((void 0 === d ? 0 : d) ? a.g : Math.random()) < (e || .01)) try {
        if (c instanceof tl) var f = c;else f = new tl(), uh(c, function (h, k) {
          var n = f,
            m = n.o++;
          xl(n, m, ul(k, h));
        });
        var g = Al(f, "https:", "/pagead/gen_204?id=" + b + "&");
        g && Rh(v, g);
      } catch (h) {}
    };
  var Et,
    Lt,
    Dt = new ii(1, window);
  (function (a) {
    Et = null != a ? a : new Jt();
    "number" !== typeof window.google_srt && (window.google_srt = Math.random());
    Kt();
    Lt = new Ft();
    Lt.Qc(function () {});
    Lt.Gd(!0);
    "complete" == window.document.readyState ? window.google_measure_js_timing || Dt.B() : Dt.j && Of(window, "load", function () {
      window.google_measure_js_timing || Dt.B();
    });
  })();
  var Mt = new Date().getTime();
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
  var Nt = function (a) {
    this.P = re(a);
  };
  u(Nt, $e);
  Nt.la = [3];
  var Ot = function (a) {
    this.P = re(a);
  };
  u(Ot, $e);
  var Pt = function (a, b) {
      return Je(a, 1, b, Zd);
    },
    Qt = function (a, b) {
      return Je(a, 2, b, Zd);
    },
    Rt = function (a, b) {
      return Je(a, 3, b, ae);
    },
    St = function (a, b) {
      Je(a, 4, b, ae);
    };
  Ot.la = [1, 2, 3, 4];
  var Tt = function (a) {
    this.P = re(a);
  };
  u(Tt, $e);
  var Ut = function (a) {
    this.P = re(a);
  };
  u(Ut, $e);
  Ut.prototype.getVersion = function () {
    return Ve(this, 1);
  };
  var Vt = function (a, b) {
      return Ke(a, 1, be(b), 0);
    },
    Wt = function (a, b) {
      return Pe(a, 2, b);
    },
    Xt = function (a, b) {
      return Pe(a, 3, b);
    },
    Yt = function (a, b) {
      return Ke(a, 4, be(b), 0);
    },
    Zt = function (a, b) {
      return Ke(a, 5, be(b), 0);
    },
    $t = function (a, b) {
      return Ke(a, 6, be(b), 0);
    },
    au = function (a, b) {
      return Ke(a, 7, je(b), "");
    },
    bu = function (a, b) {
      return Ke(a, 8, be(b), 0);
    },
    cu = function (a, b) {
      return Ke(a, 9, be(b), 0);
    },
    du = function (a, b) {
      return Ke(a, 10, Vd(b), !1);
    },
    eu = function (a, b) {
      return Ke(a, 11, Vd(b), !1);
    },
    fu = function (a, b) {
      return Je(a, 12, b, Zd);
    },
    gu = function (a, b) {
      return Je(a, 13, b, Zd);
    },
    hu = function (a, b) {
      return Je(a, 14, b, Zd);
    },
    iu = function (a, b) {
      return Ke(a, 15, Vd(b), !1);
    },
    ju = function (a, b) {
      return Ke(a, 16, je(b), "");
    },
    ku = function (a, b) {
      return Je(a, 17, b, ae);
    },
    lu = function (a, b) {
      return Je(a, 18, b, ae);
    },
    mu = function (a, b) {
      return Qe(a, 19, b);
    };
  Ut.la = [12, 13, 14, 17, 18, 19];
  var nu = function (a) {
    this.P = re(a);
  };
  u(nu, $e);
  var ou = "a".charCodeAt(),
    pu = Vf({
      gh: 0,
      fh: 1,
      ah: 2,
      Vg: 3,
      bh: 4,
      Wg: 5,
      eh: 6,
      Yg: 7,
      Zg: 8,
      Ug: 9,
      Xg: 10,
      hh: 11
    }),
    qu = Vf({
      jh: 0,
      kh: 1,
      ih: 2
    });
  var ru = function (a) {
      if (/[^01]/.test(a)) throw Error("Input bitstring " + a + " is malformed!");
      this.h = a;
      this.g = 0;
    },
    uu = function (a) {
      a = tu(a, 36);
      var b = new Tt();
      b = Ke(b, 1, ee(Math.floor(a / 10)), "0");
      return Ke(b, 2, be(a % 10 * 1E8), 0);
    },
    vu = function (a) {
      return String.fromCharCode(ou + tu(a, 6)) + String.fromCharCode(ou + tu(a, 6));
    },
    yu = function (a) {
      var b = tu(a, 16);
      return !0 === !!tu(a, 1) ? (a = wu(a), a.forEach(function (c) {
        if (c > b) throw Error("ID " + c + " is past MaxVendorId " + b + "!");
      }), a) : xu(a, b);
    },
    zu = function (a) {
      for (var b = [], c = tu(a, 12); c--;) {
        var d = tu(a, 6),
          e = tu(a, 2),
          f = wu(a),
          g = b,
          h = g.push,
          k = new Nt();
        d = Ke(k, 1, null == d ? d : Zd(d), 0);
        e = Ke(d, 2, null == e ? e : Zd(e), 0);
        f = Je(e, 3, f, ae);
        h.call(g, f);
      }
      return b;
    },
    wu = function (a) {
      for (var b = tu(a, 12), c = []; b--;) {
        var d = !0 === !!tu(a, 1),
          e = tu(a, 16);
        if (d) for (d = tu(a, 16); e <= d; e++) c.push(e);else c.push(e);
      }
      c.sort(function (f, g) {
        return f - g;
      });
      return c;
    },
    xu = function (a, b, c) {
      for (var d = [], e = 0; e < b; e++) if (tu(a, 1)) {
        var f = e + 1;
        if (c && -1 === c.indexOf(f)) throw Error("ID: " + f + " is outside of allowed values!");
        d.push(f);
      }
      return d;
    },
    tu = function (a, b) {
      if (a.g + b > a.h.length) throw Error("Requested length " + b + " is past end of string.");
      var c = a.h.substring(a.g, a.g + b);
      a.g += b;
      return parseInt(c, 2);
    };
  ru.prototype.skip = function (a) {
    this.g += a;
  };
  var Au = function (a) {
    try {
      var b = Mc(a).map(function (f) {
          return f.toString(2).padStart(8, "0");
        }).join(""),
        c = new ru(b);
      if (3 !== tu(c, 3)) return null;
      var d = Qt(Pt(new Ot(), xu(c, 24, pu)), xu(c, 24, pu)),
        e = tu(c, 6);
      0 !== e && St(Rt(d, xu(c, e)), xu(c, e));
      return d;
    } catch (f) {
      return null;
    }
  };
  var Bu = function (a) {
    try {
      var b = Mc(a).map(function (d) {
          return d.toString(2).padStart(8, "0");
        }).join(""),
        c = new ru(b);
      return mu(lu(ku(ju(iu(hu(gu(fu(eu(du(cu(bu(au($t(Zt(Yt(Xt(Wt(Vt(new Ut(), tu(c, 6)), uu(c)), uu(c)), tu(c, 12)), tu(c, 12)), tu(c, 6)), vu(c)), tu(c, 12)), tu(c, 6)), !!tu(c, 1)), !!tu(c, 1)), xu(c, 12, qu)), xu(c, 24, pu)), xu(c, 24, pu)), !!tu(c, 1)), vu(c)), yu(c)), yu(c)), zu(c));
    } catch (d) {
      return null;
    }
  };
  var Du = function (a) {
      if (!a) return null;
      var b = a.split(".");
      if (4 < b.length) return null;
      a = Bu(b[0]);
      if (!a) return null;
      var c = new nu();
      a = Pe(c, 1, a);
      b.shift();
      b = r(b);
      for (c = b.next(); !c.done; c = b.next()) switch (c = c.value, Cu(c)) {
        case 1:
        case 2:
          break;
        case 3:
          c = Au(c);
          if (!c) return null;
          Pe(a, 2, c);
          break;
        default:
          return null;
      }
      return a;
    },
    Cu = function (a) {
      try {
        var b = Mc(a).map(function (c) {
          return c.toString(2).padStart(8, "0");
        }).join("");
        return tu(new ru(b), 3);
      } catch (c) {
        return -1;
      }
    };
  var Eu = function (a, b) {
    var c = {};
    if (Array.isArray(b) && 0 !== b.length) {
      b = r(b);
      for (var d = b.next(); !d.done; d = b.next()) d = d.value, c[d] = -1 !== a.indexOf(d);
    } else for (a = r(a), d = a.next(); !d.done; d = a.next()) c[d.value] = !0;
    delete c[0];
    return c;
  };
  var Fu = function (a) {
      this.g = a;
      this.defaultValue = !1;
    },
    Gu = function (a) {
      var b = void 0 === b ? [] : b;
      this.g = a;
      this.defaultValue = b;
    };
  var Hu = new function (a, b) {
      this.g = a;
      this.defaultValue = void 0 === b ? 0 : b;
    }(494575051),
    Iu = new Gu(489560439),
    Ju = new Gu(505762507),
    Ku = new Fu(471855283),
    Lu = new Fu(465118388);
  var Mu = function (a) {
    this.P = re(a);
  };
  u(Mu, $e);
  var Nu = function (a) {
    var b = new Mu(),
      c = b.P,
      d = vd(c);
    Qd(zd(b.P));
    b = Ge(c, d, 1, 2, !1);
    c = vd(b);
    c = !!(4 & c) && !!(4096 & c);
    if (Array.isArray(a)) for (d = 0; d < a.length; d++) b.push(Zd(a[d], c));else for (a = r(a), d = a.next(); !d.done; d = a.next()) b.push(Zd(d.value, c));
  };
  Mu.la = [1];
  var Ou = /^((market|itms|intent|itms-appss):\/\/)/i;
  var Pu = "ad_type vpos mridx pos vad_type videoad_start_delay".split(" ");
  var Qu = function (a) {
    var b = a.Xa,
      c = a.height,
      d = a.width,
      e = void 0 === a.Ca ? !1 : a.Ca;
    this.jb = a.jb;
    this.Xa = b;
    this.height = c;
    this.width = d;
    this.Ca = e;
  };
  Qu.prototype.getHeight = function () {
    return this.height;
  };
  Qu.prototype.getWidth = function () {
    return this.width;
  };
  var Ru = function (a) {
    var b = a.pg,
      c = a.hf,
      d = a.og,
      e = a.gf;
    Qu.call(this, {
      jb: a.jb,
      Xa: a.Xa,
      height: a.height,
      width: a.width,
      Ca: void 0 === a.Ca ? !1 : a.Ca
    });
    this.o = b;
    this.h = c;
    this.j = d;
    this.g = e;
  };
  u(Ru, Qu);
  var Su = function (a) {
    var b = a.Nf;
    Qu.call(this, {
      jb: a.jb,
      Xa: a.Xa,
      height: a.height,
      width: a.width,
      Ca: void 0 === a.Ca ? !1 : a.Ca
    });
    this.g = b;
  };
  u(Su, Qu);
  Su.prototype.getMediaUrl = function () {
    return this.g;
  };
  function Tu(a) {
    return new (Function.prototype.bind.apply(a, [null].concat(ka(Ia.apply(1, arguments)))))();
  }
  ;
  var Uu = function (a, b, c, d) {
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
  u(Uu, M);
  Uu.prototype.L = function () {
    delete this.g;
    this.l.clear();
    this.o.clear();
    this.A.clear();
    this.j && (Pf(this.h, "message", this.j), delete this.j);
    delete this.h;
    delete this.B;
    M.prototype.L.call(this);
  };
  var Vu = function (a) {
      if (a.g) return a.g;
      a.D && a.D(a.h) ? a.g = a.h : a.g = zh(a.h, a.F);
      var b;
      return null != (b = a.g) ? b : null;
    },
    Xu = function (a, b, c) {
      if (Vu(a)) if (a.g === a.h) (b = a.l.get(b)) && b(a.g, c);else {
        var d = a.o.get(b);
        if (d && d.Rb) {
          Wu(a);
          var e = ++a.G;
          a.A.set(e, {
            Ab: d.Ab,
            qf: d.Bc(c),
            Xf: "addEventListener" === b
          });
          a.g.postMessage(d.Rb(c, e), "*");
        }
      }
    },
    Wu = function (a) {
      a.j || (a.j = function (b) {
        try {
          var c = a.B ? a.B(b) : void 0;
          if (c) {
            var d = c.oe,
              e = a.A.get(d);
            if (e) {
              e.Xf || a.A.delete(d);
              var f;
              null == (f = e.Ab) || f.call(e, e.qf, c.payload);
            }
          }
        } catch (g) {}
      }, Of(a.h, "message", a.j));
    };
  var Yu = function (a, b) {
      b = b.listener;
      (a = (0, a.__gpp)("addEventListener", b)) && b(a, !0);
    },
    Zu = function (a, b) {
      (0, a.__gpp)("removeEventListener", b.listener, b.listenerId);
    },
    $u = function (a, b) {
      (0, a.__gpp)("getSection", function (c) {
        b.callback({
          qc: null != c ? c : void 0,
          rc: c ? void 0 : 4
        });
      }, b.apiPrefix);
    },
    av = {
      Bc: function (a) {
        return a.listener;
      },
      Rb: function (a, b) {
        a = {};
        return a.__gppCall = {
          callId: b,
          command: "addEventListener",
          version: "1.1"
        }, a;
      },
      Ab: function (a, b) {
        b = b.__gppReturn;
        a(b.returnValue, b.success);
      }
    },
    bv = {
      Bc: function (a) {
        return a.listener;
      },
      Rb: function (a, b) {
        var c = {};
        return c.__gppCall = {
          callId: b,
          command: "removeEventListener",
          version: "1.1",
          parameter: a.listenerId
        }, c;
      },
      Ab: function (a, b) {
        b = b.__gppReturn;
        var c = b.returnValue.data;
        null == a || a(c, b.success);
      }
    },
    cv = {
      Bc: function (a) {
        return a.callback;
      },
      Rb: function (a, b) {
        var c = {};
        return c.__gppCall = {
          callId: b,
          command: "getSection",
          version: "1.1",
          parameter: a.apiPrefix
        }, c;
      },
      Ab: function (a, b) {
        b = b.__gppReturn;
        var c;
        a({
          qc: null != (c = b.returnValue) ? c : void 0,
          rc: b.success ? void 0 : 2
        });
      }
    };
  function dv(a) {
    var b = {};
    "string" === typeof a.data ? b = JSON.parse(a.data) : b = a.data;
    return {
      payload: b,
      oe: b.__gppReturn.callId
    };
  }
  var ev = function (a, b) {
    b = void 0 === b ? {} : b;
    M.call(this);
    this.caller = new Uu(a, "__gppLocator", function (d) {
      return "function" === typeof d.__gpp;
    }, dv);
    this.caller.l.set("addEventListener", Yu);
    this.caller.o.set("addEventListener", av);
    this.caller.l.set("removeEventListener", Zu);
    this.caller.o.set("removeEventListener", bv);
    this.caller.l.set("getDataWithCallback", $u);
    this.caller.o.set("getDataWithCallback", cv);
    var c;
    this.timeoutMs = null != (c = b.timeoutMs) ? c : 500;
  };
  u(ev, M);
  ev.prototype.L = function () {
    this.caller.W();
    M.prototype.L.call(this);
  };
  ev.prototype.addEventListener = function (a) {
    var b = this,
      c = Kf(function () {
        a(fv, !0);
      }),
      d = -1 === this.timeoutMs ? void 0 : setTimeout(function () {
        c();
      }, this.timeoutMs);
    Xu(this.caller, "addEventListener", {
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
          } catch (n) {
            a(gv, !0);
            return;
          }
          a(hv, !0);
        }
      }
    });
  };
  ev.prototype.removeEventListener = function (a) {
    Xu(this.caller, "removeEventListener", {
      listenerId: a
    });
  };
  var hv = {
      eventName: "signalStatus",
      data: "ready",
      pingData: {
        internalErrorState: 2,
        gppString: "GPP_ERROR_STRING_UNAVAILABLE",
        applicableSections: [-1]
      },
      listenerId: -1
    },
    fv = {
      eventName: "signalStatus",
      data: "ready",
      pingData: {
        gppString: "GPP_ERROR_STRING_LISTENER_REGISTRATION_TIMEOUT",
        internalErrorState: 2,
        applicableSections: [-1]
      },
      listenerId: -1
    },
    gv = {
      eventName: "signalStatus",
      data: "ready",
      pingData: {
        gppString: "GPP_ERROR_STRING_REMOVE_EVENT_LISTENER_ERROR",
        internalErrorState: 2,
        applicableSections: [-1]
      },
      listenerId: -1
    };
  var iv = function (a) {
      void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
      void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
      return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3;
    },
    jv = function (a, b) {
      b = void 0 === b ? {} : b;
      M.call(this);
      this.h = a;
      this.g = null;
      this.A = {};
      this.B = 0;
      var c;
      this.o = null != (c = b.timeoutMs) ? c : 500;
      var d;
      this.l = null != (d = b.ai) ? d : !1;
      this.j = null;
    };
  u(jv, M);
  jv.prototype.L = function () {
    this.A = {};
    this.j && (Pf(this.h, "message", this.j), delete this.j);
    delete this.A;
    delete this.h;
    delete this.g;
    M.prototype.L.call(this);
  };
  var lv = function (a) {
      return "function" === typeof a.h.__tcfapi || null != kv(a);
    },
    ov = function (a, b) {
      var c = {
          internalErrorState: 0,
          internalBlockOnErrors: a.l
        },
        d = Kf(function () {
          return b(c);
        }),
        e = 0;
      -1 !== a.o && (e = setTimeout(function () {
        e = 0;
        c.tcString = "tcunavailable";
        c.internalErrorState = 1;
        d();
      }, a.o));
      mv(a, "addEventListener", function (f) {
        f && (c = f, c.internalErrorState = iv(c), c.internalBlockOnErrors = a.l, nv(c) ? (0 != c.internalErrorState && (c.tcString = "tcunavailable"), mv(a, "removeEventListener", null, c.listenerId), (f = e) && clearTimeout(f), d()) : ("error" === c.cmpStatus || 0 !== c.internalErrorState) && (f = e) && clearTimeout(f));
      });
    };
  jv.prototype.addEventListener = function (a) {
    var b = this,
      c = {
        internalBlockOnErrors: this.l
      },
      d = Kf(function () {
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
      g ? (c = g, c.internalErrorState = iv(c), c.internalBlockOnErrors = b.l, h && 0 === c.internalErrorState || (c.tcString = "tcunavailable", h || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
      a(c);
    };
    try {
      mv(this, "addEventListener", f);
    } catch (g) {
      c.tcString = "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e), e = 0), d();
    }
  };
  jv.prototype.removeEventListener = function (a) {
    a && a.listenerId && mv(this, "removeEventListener", null, a.listenerId);
  };
  var mv = function (a, b, c, d) {
      c || (c = function () {});
      if ("function" === typeof a.h.__tcfapi) a = a.h.__tcfapi, a(b, 2, c, d);else if (kv(a)) {
        pv(a);
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
    kv = function (a) {
      if (a.g) return a.g;
      a.g = zh(a.h, "__tcfapiLocator");
      return a.g;
    },
    pv = function (a) {
      a.j || (a.j = function (b) {
        try {
          var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
          a.A[c.callId](c.returnValue, c.success);
        } catch (d) {}
      }, Of(a.h, "message", a.j));
    },
    nv = function (a) {
      if (!1 === a.gdprApplies) return !0;
      void 0 === a.internalErrorState && (a.internalErrorState = iv(a));
      return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ? (Th({
        e: String(a.internalErrorState)
      }, "tcfe"), !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0;
    };
  Nu([1, 8, 10, 11, 12, 2, 3, 4, 5]);
  Nu([1, 6, 7, 8, 9, 10, 11, 12, 2, 3, 4, 5, 13, 14]);
  Nu([1, 6, 7, 8, 9, 10, 11, 12, 2, 3, 4, 5, 13, 14]);
  new Mu();
  var P = function (a, b) {
    this.h = this.A = this.o = "";
    this.I = null;
    this.K = this.j = "";
    this.l = !1;
    var c;
    a instanceof P ? (this.l = void 0 !== b ? b : a.l, qv(this, a.o), this.A = a.A, this.h = a.h, rv(this, a.I), this.j = a.j, tv(this, uv(a.g)), this.K = a.D()) : a && (c = String(a).match(ah)) ? (this.l = !!b, qv(this, c[1] || "", !0), this.A = vv(c[2] || ""), this.h = vv(c[3] || "", !0), rv(this, c[4]), this.j = vv(c[5] || "", !0), tv(this, c[6] || "", !0), this.K = vv(c[7] || "")) : (this.l = !!b, this.g = new wv(null, this.l));
  };
  P.prototype.toString = function () {
    var a = [],
      b = this.o;
    b && a.push(xv(b, yv, !0), ":");
    var c = this.h;
    if (c || "file" == b) a.push("//"), (b = this.A) && a.push(xv(b, yv, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.I, null != c && a.push(":", String(c));
    if (c = this.j) this.h && "/" != c.charAt(0) && a.push("/"), a.push(xv(c, "/" == c.charAt(0) ? zv : Av, !0));
    (c = this.g.toString()) && a.push("?", c);
    (c = this.D()) && a.push("#", xv(c, Bv));
    return a.join("");
  };
  P.prototype.resolve = function (a) {
    var b = this.F(),
      c = !!a.o;
    c ? qv(b, a.o) : c = !!a.A;
    c ? b.A = a.A : c = !!a.h;
    c ? b.h = a.h : c = null != a.I;
    var d = a.j;
    if (c) rv(b, a.I);else if (c = !!a.j) {
      if ("/" != d.charAt(0)) if (this.h && !this.j) d = "/" + d;else {
        var e = b.j.lastIndexOf("/");
        -1 != e && (d = b.j.slice(0, e + 1) + d);
      }
      e = d;
      if (".." == e || "." == e) d = "";else if (nb(e, "./") || nb(e, "/.")) {
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
    c ? tv(b, uv(a.g)) : c = !!a.K;
    c && (b.K = a.D());
    return b;
  };
  P.prototype.F = function () {
    return new P(this);
  };
  var qv = function (a, b, c) {
      a.o = c ? vv(b, !0) : b;
      a.o && (a.o = a.o.replace(/:$/, ""));
    },
    rv = function (a, b) {
      if (b) {
        b = Number(b);
        if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
        a.I = b;
      } else a.I = null;
    },
    tv = function (a, b, c) {
      b instanceof wv ? (a.g = b, Cv(a.g, a.l)) : (c || (b = xv(b, Dv)), a.g = new wv(b, a.l));
    },
    Ev = function (a, b, c) {
      a.g.set(b, c);
      return a;
    };
  P.prototype.D = function () {
    return this.K;
  };
  var Fv = function (a) {
      return a instanceof P ? a.F() : new P(a, void 0);
    },
    vv = function (a, b) {
      return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : "";
    },
    xv = function (a, b, c) {
      return "string" === typeof a ? (a = encodeURI(a).replace(b, Gv), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null;
    },
    Gv = function (a) {
      a = a.charCodeAt(0);
      return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
    },
    yv = /[#\/\?@]/g,
    Av = /[#\?:]/g,
    zv = /[#\?]/g,
    Dv = /[#\?@]/g,
    Bv = /#/g,
    wv = function (a, b) {
      this.h = this.g = null;
      this.j = a || null;
      this.o = !!b;
    },
    Hv = function (a) {
      a.g || (a.g = new Map(), a.h = 0, a.j && ch(a.j, function (b, c) {
        a.add(wg(b), c);
      }));
    };
  wv.prototype.add = function (a, b) {
    Hv(this);
    this.j = null;
    a = Iv(this, a);
    var c = this.g.get(a);
    c || this.g.set(a, c = []);
    c.push(b);
    this.h += 1;
    return this;
  };
  wv.prototype.remove = function (a) {
    Hv(this);
    a = Iv(this, a);
    return this.g.has(a) ? (this.j = null, this.h -= this.g.get(a).length, this.g.delete(a)) : !1;
  };
  wv.prototype.clear = function () {
    this.g = this.j = null;
    this.h = 0;
  };
  wv.prototype.isEmpty = function () {
    Hv(this);
    return 0 == this.h;
  };
  var Jv = function (a, b) {
    Hv(a);
    b = Iv(a, b);
    return a.g.has(b);
  };
  l = wv.prototype;
  l.forEach = function (a, b) {
    Hv(this);
    this.g.forEach(function (c, d) {
      c.forEach(function (e) {
        a.call(b, e, d, this);
      }, this);
    }, this);
  };
  l.tc = function () {
    Hv(this);
    for (var a = Array.from(this.g.values()), b = Array.from(this.g.keys()), c = [], d = 0; d < b.length; d++) for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
    return c;
  };
  l.wb = function (a) {
    Hv(this);
    var b = [];
    if ("string" === typeof a) Jv(this, a) && (b = b.concat(this.g.get(Iv(this, a))));else {
      a = Array.from(this.g.values());
      for (var c = 0; c < a.length; c++) b = b.concat(a[c]);
    }
    return b;
  };
  l.set = function (a, b) {
    Hv(this);
    this.j = null;
    a = Iv(this, a);
    Jv(this, a) && (this.h -= this.g.get(a).length);
    this.g.set(a, [b]);
    this.h += 1;
    return this;
  };
  l.get = function (a, b) {
    if (!a) return b;
    a = this.wb(a);
    return 0 < a.length ? String(a[0]) : b;
  };
  l.toString = function () {
    if (this.j) return this.j;
    if (!this.g) return "";
    for (var a = [], b = Array.from(this.g.keys()), c = 0; c < b.length; c++) {
      var d = b[c],
        e = encodeURIComponent(String(d));
      d = this.wb(d);
      for (var f = 0; f < d.length; f++) {
        var g = e;
        "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
        a.push(g);
      }
    }
    return this.j = a.join("&");
  };
  var uv = function (a) {
      var b = new wv();
      b.j = a.j;
      a.g && (b.g = new Map(a.g), b.h = a.h);
      return b;
    },
    Iv = function (a, b) {
      b = String(b);
      a.o && (b = b.toLowerCase());
      return b;
    },
    Cv = function (a, b) {
      b && !a.o && (Hv(a), a.j = null, a.g.forEach(function (c, d) {
        var e = d.toLowerCase();
        d != e && (this.remove(d), this.remove(e), 0 < c.length && (this.j = null, this.g.set(Iv(this, e), Yb(c)), this.h += c.length));
      }, a));
      a.o = b;
    };
  var Kv,
    Lv,
    Mv,
    Nv = function () {
      return v.navigator ? v.navigator.userAgent : "";
    },
    Ov = nb(Nv(), "(iPad") || nb(Nv(), "(Macintosh") || nb(Nv(), "(iPod") || nb(Nv(), "(iPhone");
  var Pv = "ad.doubleclick.net bid.g.doubleclick.net ggpht.com google.co.uk google.com googleads.g.doubleclick.net googleads4.g.doubleclick.net googleadservices.com googlesyndication.com googleusercontent.com gstatic.com gvt1.com prod.google.com pubads.g.doubleclick.net s0.2mdn.net static.doubleclick.net surveys.g.doubleclick.net youtube.com ytimg.com".split(" "),
    Qv = ["c.googlesyndication.com"];
  function Rv(a, b) {
    b = void 0 === b ? window.location.protocol : b;
    var c = !1;
    null == a || !a.startsWith("http") || (null == a ? 0 : a.startsWith("https")) ? c = !1 : Sv(a, Qv) ? c = !1 : b.includes("https") && Sv(a, Pv) && (c = !0);
    return c ? (a = new P(a), G(E.g(), "htp", "1"), qv(a, "https"), a.toString()) : a;
  }
  function Tv(a) {
    if (!a) return !1;
    try {
      var b = "string" === typeof a ? new P(a) : a;
      return "gcache" == b.o && !!b.g.get("url");
    } catch (c) {
      return !1;
    }
  }
  function Uv(a) {
    try {
      var b = "string" === typeof a ? new P(a) : a;
      if (Tv(b)) {
        var c = b.g.get("url");
        return "undefined" === typeof c ? null : c;
      }
    } catch (d) {}
    return null;
  }
  function Sv(a, b) {
    return new RegExp("^https?://([a-z0-9-]{1,63}\\.)*(" + b.join("|").replace(/\./g, "\\.") + ")(:[0-9]+)?([/?#]|$)", "i").test(a);
  }
  function Vv(a) {
    a = new P(a);
    var b = a.h;
    if ("http" != a.o && "https" != a.o) a = !1;else if (-1 == b.indexOf(".") || b.match(/^[\.0-9]*$/)) a = !1;else a: {
      try {
        wg(a.toString());
      } catch (c) {
        a = !1;
        break a;
      }
      a = !0;
    }
    return a;
  }
  ;
  var Wv = -1;
  function Xv(a, b) {
    b = null != b ? b : "";
    ic && (b = "");
    if (!kb(zg(a))) {
      var c = a instanceof lg || !Ou.test(a) ? a : new lg(a, mg);
      if (c instanceof lg) var d = c;else {
        d = void 0 === d ? ih : d;
        a: if (d = void 0 === d ? ih : d, !(a instanceof lg)) {
          for (c = 0; c < d.length; ++c) {
            var e = d[c];
            if (e instanceof gh && e.Mf(a)) {
              a = new lg(a, mg);
              break a;
            }
          }
          a = void 0;
        }
        d = a || ng;
      }
      a = window;
      if (d instanceof lg) var f = d instanceof lg && d.constructor === lg ? d.g : "type_error:SafeUrl";else {
        b: if (kh) {
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
  var Yv = /OS (\S+) like/,
    Zv = /Android ([\d\.]+)/;
  function $v(a, b) {
    a = (a = a.exec(tb())) ? a[1] : "";
    a = a.replace(/_/g, ".");
    return 0 <= qb(a, b);
  }
  var aw = function () {
      return pc || mc && "ontouchstart" in document.documentElement;
    },
    bw = function (a) {
      return rc && $v(Yv, a);
    },
    cw = function (a) {
      return (a = void 0 === a ? null : a) && "function" === typeof a.getAttribute ? a.getAttribute("playsinline") ? !0 : !1 : !1;
    };
  var dw = function (a) {
    O.call(this);
    this.h = a;
    this.l = this.A = !1;
    this.B = this.D = 0;
    this.g = new Vs(1E3);
    N(this, this.g);
    fs(this.g, "tick", this.F, !1, this);
    fs(this.h, "pause", this.j, !1, this);
    fs(this.h, "playing", this.j, !1, this);
    fs(this.h, "ended", this.j, !1, this);
    fs(this.h, "timeupdate", this.j, !1, this);
  };
  u(dw, O);
  var ew = function (a) {
    var b;
    return null != (b = a.h.currentTime) ? b : a.h.getCurrentTime();
  };
  dw.prototype.j = function (a) {
    switch (a.type) {
      case "playing":
        fw(this);
        break;
      case "pause":
      case "ended":
        this.g.enabled && this.g.stop();
        break;
      case "timeupdate":
        !this.A && 0 < ew(this) && (this.A = !0, fw(this));
    }
  };
  var fw = function (a) {
    !a.g.enabled && a.A && (a.D = 1E3 * ew(a), a.B = Date.now(), a.l = !1, a.g.start());
  };
  dw.prototype.F = function () {
    var a = Date.now(),
      b = a - this.B,
      c = 1E3 * ew(this);
    c - this.D < .5 * b ? this.l || (this.l = !0, this.dispatchEvent("playbackStalled")) : this.l = !1;
    this.D = c;
    this.B = a;
  };
  var gw = "://secure-...imrworldwide.com/ ://cdn.imrworldwide.com/ ://aksecure.imrworldwide.com/ ://[^.]*.moatads.com ://youtube[0-9]+.moatpixel.com ://pm.adsafeprotected.com/youtube ://pm.test-adsafeprotected.com/youtube ://e[0-9]+.yt.srs.doubleverify.com www.google.com/pagead/xsul www.youtube.com/pagead/slav".split(" "),
    hw = /\bocr\b/;
  function iw(a) {
    if (kb(zg(a)) || ic && 2048 < a.length) return !1;
    try {
      if (new P(a).D().match(hw)) return !0;
    } catch (b) {}
    return null != gw.find(function (b) {
      return null != a.match(b);
    });
  }
  ;
  var jw = new Map(),
    kw = function () {
      this.h = this.g = null;
    };
  function lw(a, b, c, d) {
    var e = Gm(a);
    b.width <= e.width && b.height <= e.height ? (mw(d), c(e)) : (e = setTimeout(function () {
      return lw(a, b, c, d);
    }, 200), d.h = e);
  }
  function nw(a, b) {
    b = void 0 === b ? new z(1, 1) : b;
    var c = new kw(),
      d = new Promise(function (e) {
        var f = Gm(a);
        if (b.width <= f.width && b.height <= f.height) return e(f);
        "ResizeObserver" in window ? (f = new ResizeObserver(function (g) {
          window.requestAnimationFrame(function () {
            for (var h = new z(0, 0), k = r(g), n = k.next(); !n.done; n = k.next()) if (n = n.value, n.contentBoxSize ? (n = Array.isArray(n.contentBoxSize) ? n.contentBoxSize[0] : n.contentBoxSize, h.width = Math.floor(n.inlineSize), h.height = Math.floor(n.blockSize)) : (h.width = Math.floor(n.contentRect.width), h.height = Math.floor(n.contentRect.height)), b.width <= h.width && b.height <= h.height) return mw(c), e(h);
          });
        }), c.g = f, f.observe(a)) : lw(a, b, e, c);
      });
    jw.set(d, c);
    return d;
  }
  function mw(a) {
    a.h && window.clearTimeout(a.h);
    a.g && (a.g.disconnect(), a.g = null);
  }
  ;
  function ow(a, b) {
    return kb(b) ? !1 : new RegExp(a).test(b);
  }
  function pw(a) {
    var b = {};
    a.split(",").forEach(function (c) {
      var d = c.split("=");
      2 == d.length && (c = lb(d[0]), d = lb(d[1]), 0 < c.length && (b[c] = d));
    });
    return b;
  }
  function qw(a) {
    var b = "af am ar_eg ar_sa ar_xb ar be bg bn ca cs da de_at de_cn de el en_au en_ca en_gb en_ie en_in en_sg en_xa en_xc en_za en es_419 es_ar es_bo es_cl es_co es_cr es_do es_ec es_gt es_hn es_mx es_ni es_pa es_pe es_pr es_py es_sv es_us es_uy es_ve es et eu fa fi fil fr_ca fr_ch fr gl gsw gu he hi hr hu id in is it iw ja kn ko ln lo lt lv ml mo mr ms nb ne nl no pl pt_br pt_pt pt ro ru sk sl sr_latn sr sv sw ta te th tl tr uk ur vi zh_cn zh_hk zh_tw zh zu".split(" ");
    if (!a) return null;
    a = a.toLowerCase().replace("-", "_");
    if (b.includes(a)) return a;
    a = (a = a.match(/^\w{2,3}([-_]|$)/)) ? a[0].replace(/[_-]/g, "") : "";
    return b.includes(a) ? a : null;
  }
  ;
  var rw = function () {
    this.g = Date.now();
  };
  rw.prototype.reset = function () {
    this.g = Date.now();
  };
  var tw = function (a) {
    a = a.g + 5E3 - Date.now();
    return 0 < a ? a : 0;
  };
  var uw = function (a, b) {
    this.url = a;
    this.g = void 0 === b ? null : b;
  };
  var vw = function (a) {
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
  var ww = function (a, b) {
    var c = Error.call(this, a);
    this.message = c.message;
    "stack" in c && (this.stack = c.stack);
    this.errorCode = a;
    this.g = b;
  };
  u(ww, Error);
  var xw = function () {
      if (!ic) return !1;
      try {
        return new ActiveXObject("MSXML2.DOMDocument"), !0;
      } catch (a) {
        return !1;
      }
    },
    yw = ic && xw();
  var zw = function (a) {
    M.call(this);
    this.o = a;
    this.h = {};
  };
  bb(zw, M);
  var Aw = [];
  zw.prototype.O = function (a, b, c, d) {
    return Bw(this, a, b, c, d);
  };
  var Bw = function (a, b, c, d, e, f) {
    Array.isArray(c) || (c && (Aw[0] = c.toString()), c = Aw);
    for (var g = 0; g < c.length; g++) {
      var h = fs(b, c[g], d || a.handleEvent, e || !1, f || a.o || a);
      if (!h) break;
      a.h[h.key] = h;
    }
    return a;
  };
  zw.prototype.Ob = function (a, b, c, d) {
    return Cw(this, a, b, c, d);
  };
  var Cw = function (a, b, c, d, e, f) {
    if (Array.isArray(c)) for (var g = 0; g < c.length; g++) Cw(a, b, c[g], d, e, f);else {
      b = es(b, c, d || a.handleEvent, e, f || a.o || a);
      if (!b) return a;
      a.h[b.key] = b;
    }
    return a;
  };
  zw.prototype.rb = function (a, b, c, d, e) {
    if (Array.isArray(b)) for (var f = 0; f < b.length; f++) this.rb(a, b[f], c, d, e);else c = c || this.handleEvent, d = Ra(d) ? !!d.capture : !!d, e = e || this.o || this, c = gs(c), d = !!d, b = Vr(a) ? a.Kb(b, c, d, e) : a ? (a = is(a)) ? a.Kb(b, c, d, e) : null : null, b && (ns(b), delete this.h[b.key]);
  };
  var Dw = function (a) {
    Rf(a.h, function (b, c) {
      this.h.hasOwnProperty(c) && ns(b);
    }, a);
    a.h = {};
  };
  zw.prototype.L = function () {
    zw.Da.L.call(this);
    Dw(this);
  };
  zw.prototype.handleEvent = function () {
    throw Error("EventHandler.handleEvent not implemented");
  };
  var Ew = function () {};
  Ew.prototype.g = null;
  var Gw = function (a) {
    var b;
    (b = a.g) || (b = {}, Fw(a) && (b[0] = !0, b[1] = !0), b = a.g = b);
    return b;
  };
  var Hw,
    Iw = function () {};
  bb(Iw, Ew);
  var Jw = function (a) {
      return (a = Fw(a)) ? new ActiveXObject(a) : new XMLHttpRequest();
    },
    Fw = function (a) {
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
  Hw = new Iw();
  var Kw = function (a) {
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
  bb(Kw, O);
  var Lw = /^https?$/i,
    Mw = ["POST", "PUT"],
    Qw = function (a, b, c, d) {
      if (a.g) throw Error("[goog.net.XhrIo] Object is active with another request=" + a.M + "; newUri=" + b);
      c = c ? c.toUpperCase() : "GET";
      a.M = b;
      a.l = 0;
      a.H = !1;
      a.h = !0;
      a.g = a.G ? Jw(a.G) : Jw(Hw);
      a.F = a.G ? Gw(a.G) : Gw(Hw);
      a.g.onreadystatechange = $a(a.X, a);
      try {
        a.J = !0, a.g.open(c, String(b), !0), a.J = !1;
      } catch (g) {
        Nw(a);
        return;
      }
      b = d || "";
      d = new Map(a.headers);
      var e = Array.from(d.keys()).find(function (g) {
          return "content-type" == g.toLowerCase();
        }),
        f = v.FormData && b instanceof v.FormData;
      !Tb(Mw, c) || e || f || d.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
      c = r(d);
      for (d = c.next(); !d.done; d = c.next()) e = r(d.value), d = e.next().value, e = e.next().value, a.g.setRequestHeader(d, e);
      a.Z && (a.g.responseType = a.Z);
      "withCredentials" in a.g && a.g.withCredentials !== a.V && (a.g.withCredentials = a.V);
      try {
        Ow(a), 0 < a.D && (a.U = Pw(a.g), a.U ? (a.g.timeout = a.D, a.g.ontimeout = $a(a.aa, a)) : a.B = Ws(a.aa, a.D, a)), a.A = !0, a.g.send(b), a.A = !1;
      } catch (g) {
        Nw(a);
      }
    },
    Pw = function (a) {
      return ic && "number" === typeof a.timeout && void 0 !== a.ontimeout;
    };
  Kw.prototype.aa = function () {
    "undefined" != typeof La && this.g && (this.l = 8, this.dispatchEvent("timeout"), this.abort(8));
  };
  var Nw = function (a) {
      a.h = !1;
      a.g && (a.j = !0, a.g.abort(), a.j = !1);
      a.l = 5;
      Rw(a);
      Sw(a);
    },
    Rw = function (a) {
      a.H || (a.H = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"));
    };
  Kw.prototype.abort = function (a) {
    this.g && this.h && (this.h = !1, this.j = !0, this.g.abort(), this.j = !1, this.l = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Sw(this));
  };
  Kw.prototype.L = function () {
    this.g && (this.h && (this.h = !1, this.j = !0, this.g.abort(), this.j = !1), Sw(this, !0));
    Kw.Da.L.call(this);
  };
  Kw.prototype.X = function () {
    this.xa() || (this.J || this.A || this.j ? Tw(this) : this.ba());
  };
  Kw.prototype.ba = function () {
    Tw(this);
  };
  var Tw = function (a) {
      if (a.h && "undefined" != typeof La && (!a.F[1] || 4 != Uw(a) || 2 != Vw(a))) if (a.A && 4 == Uw(a)) Ws(a.X, 0, a);else if (a.dispatchEvent("readystatechange"), 4 == Uw(a)) {
        a.h = !1;
        try {
          var b = Vw(a);
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
              var f = String(a.M).match(ah)[1] || null;
              !f && v.self && v.self.location && (f = v.self.location.protocol.slice(0, -1));
              e = !Lw.test(f ? f.toLowerCase() : "");
            }
            d = e;
          }
          d ? (a.dispatchEvent("complete"), a.dispatchEvent("success")) : (a.l = 6, Rw(a));
        } finally {
          Sw(a);
        }
      }
    },
    Sw = function (a, b) {
      if (a.g) {
        Ow(a);
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
    Ow = function (a) {
      a.g && a.U && (a.g.ontimeout = null);
      a.B && (v.clearTimeout(a.B), a.B = null);
    };
  Kw.prototype.isActive = function () {
    return !!this.g;
  };
  var Uw = function (a) {
      return a.g ? a.g.readyState : 0;
    },
    Vw = function (a) {
      try {
        return 2 < Uw(a) ? a.g.status : -1;
      } catch (b) {
        return -1;
      }
    },
    Ww = function (a) {
      if (a.g) {
        a: {
          a = a.g.responseText;
          if (v.JSON) try {
            var b = v.JSON.parse(a);
            break a;
          } catch (c) {}
          b = zi(a);
        }
        return b;
      }
    };
  var Xw = function () {};
  Xw.prototype.get = function (a) {
    return Yw({
      url: a.url,
      timeout: a.timeout,
      withCredentials: void 0 === a.withCredentials ? !0 : a.withCredentials,
      method: "GET",
      headers: void 0 === a.headers ? {} : a.headers
    });
  };
  var Yw = function (a) {
      var b = a.url,
        c = a.timeout,
        d = a.withCredentials,
        e = a.method,
        f = void 0 === a.content ? void 0 : a.content,
        g = void 0 === a.headers ? {} : a.headers;
      return Zw({
        url: b,
        timeout: c,
        withCredentials: d,
        method: e,
        content: f,
        headers: g
      }).then(function (h) {
        return Promise.resolve(h);
      }, function (h) {
        return h instanceof Error && 6 == h.message && d ? Zw({
          url: b,
          timeout: c,
          withCredentials: !d,
          method: e,
          content: f,
          headers: g
        }) : Promise.reject(h);
      });
    },
    Zw = function (a) {
      var b = a.url,
        c = a.timeout,
        d = a.withCredentials,
        e = a.method,
        f = void 0 === a.content ? void 0 : a.content;
      a = void 0 === a.headers ? {} : a.headers;
      var g = new Kw();
      g.V = d;
      g.D = Math.max(0, tw(c));
      for (var h in a) g.headers.set(h, a[h]);
      var k = new zw();
      return new Promise(function (n, m) {
        k.Ob(g, "success", function () {
          a: {
            if (Vm()) try {
              Ww(g);
              var q = "application/json";
              break a;
            } catch (A) {
              q = "application/xml";
              break a;
            }
            g.g && 4 == Uw(g) ? (q = g.g.getResponseHeader("Content-Type"), q = null === q ? void 0 : q) : q = void 0;
            q = q || "";
          }
          if (-1 != q.indexOf("application/json")) n(Ww(g) || {});else {
            try {
              var t = g.g ? g.g.responseXML : null;
            } catch (A) {
              t = null;
            }
            if (null == t) {
              try {
                var w = g.g ? g.g.responseText : "";
              } catch (A) {
                w = "";
              }
              t = w;
              if ("undefined" != typeof DOMParser) w = new DOMParser(), t = ug(t), t = w.parseFromString(tg(t), "application/xml");else if (yw) {
                w = new ActiveXObject("MSXML2.DOMDocument");
                w.resolveExternals = !1;
                w.validateOnParse = !1;
                try {
                  w.setProperty("ProhibitDTD", !0), w.setProperty("MaxXMLSize", 2048), w.setProperty("MaxElementDepth", 256);
                } catch (A) {}
                w.loadXML(t);
                t = w;
              } else throw Error("Your browser does not support loading xml documents");
            }
            n(t);
          }
          k.W();
          g.W();
        });
        k.Ob(g, ["error", "timeout"], function () {
          m(new ww(g.l, Vw(g)));
          k.W();
          g.W();
        });
        Qw(g, Rv(b), e, f);
      });
    };
  x("google.javascript.ads.imalib.common.UrlLoader", Xw);
  var $w = ["A9AxgGSwmnfgzzkyJHILUr3H8nJ/3D+57oAsL4DBt4USlng4jZ0weq+fZtHC/Qwwn6gd4QSa5DzT3OBif+kXVA0AAAB4eyJvcmlnaW4iOiJodHRwczovL2ltYXNkay5nb29nbGVhcGlzLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9", "As0hBNJ8h++fNYlkq8cTye2qDLyom8NddByiVytXGGD0YVE+2CEuTCpqXMDxdhOMILKoaiaYifwEvCRlJ/9GcQ8AAAB8eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3MTk1MzI3OTksImlzU3ViZG9tYWluIjp0cnVlfQ=="];
  function ax() {
    var a = void 0 === a ? document : a;
    var b;
    return !(null == (b = a.featurePolicy) || !b.features().includes("attribution-reporting"));
  }
  ;
  var Lx = function (a, b, c, d, e) {
      c = void 0 === c ? !1 : c;
      e = void 0 === e ? null : e;
      try {
        if (b = (void 0 === d ? 0 : d) ? Rv(b, "https") : Rv(b), c = c || iw(b), a.h || null != e) bx(a, b, c, e);else {
          var f = ax() ? e : null;
          Vm() ? cx(b) : Kx(a, b, c, f);
        }
      } catch (g) {}
    },
    Mx = function (a, b) {
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
    bx = function (a, b, c, d) {
      d = void 0 === d ? null : d;
      G(E.g(), "faa", "1");
      var e = ax();
      fetch(b, Mx(c, "" === d && e)).then(function () {
        G(E.g(), "fas", "1");
      }).catch(function () {
        G(E.g(), "faf", "1");
        a.h = !1;
        var f = d;
        f = ax() ? f : null;
        Vm() ? cx(b) : Kx(a, b, c, f);
      });
      e && d && fetch(d, Mx(c, !0));
    },
    Kx = function (a, b, c, d) {
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
    cx = function (a) {
      new Xw().get({
        url: a,
        timeout: new rw()
      });
    };
  var Nx = {
    AUTOPLAY_DISALLOWED: "autoplayDisallowed",
    vg: "beginFullscreen",
    wg: "canPlay",
    xg: "canPlayThrough",
    CLICK: "click",
    DURATION_CHANGE: "durationChange",
    Ig: "end",
    Jg: "endFullscreen",
    ERROR: "error",
    Ng: "focusSkipButton",
    Oe: "loadStart",
    LOADED: "loaded",
    nh: "mediaLoadTimeout",
    oh: "mediaPlaybackTimeout",
    Td: "pause",
    uh: "play",
    vh: "playing",
    Dh: "seeked",
    Eh: "seeking",
    Fh: "skip",
    Ze: "skipShown",
    Gh: "stalled",
    Ud: "start",
    Lh: "timeUpdate",
    Jh: "timedMetadata",
    Uh: "volumeChange",
    Vh: "waiting",
    Wh: "windowFocusChanged",
    Og: "fullyLoaded"
  };
  var Ox = function () {
    O.apply(this, arguments);
  };
  u(Ox, O);
  Ox.prototype.B = function () {
    return !1;
  };
  Ox.prototype.F = function () {
    return -1;
  };
  Ox.prototype.G = function () {};
  var Q = {},
    Px = (Q[18] = -1, Q[22] = -1, Q[43] = 350, Q[44] = 350, Q[45] = 350, Q[59] = -1, Q[133] = 350, Q[134] = 350, Q[135] = 350, Q[136] = 350, Q[139] = 50, Q[140] = 50, Q[141] = 50, Q[160] = 350, Q[242] = 150, Q[243] = 150, Q[244] = 150, Q[245] = 150, Q[247] = 150, Q[249] = 50, Q[250] = 50, Q[251] = 50, Q[278] = 150, Q[342] = -1, Q[343] = -1, Q[344] = -1, Q[345] = -1, Q[346] = -1, Q[347] = -1, Q[396] = -1, Q[398] = -1, Q),
    R = {},
    Qx = (R[18] = !1, R[22] = !1, R[43] = !0, R[44] = !0, R[45] = !0, R[59] = !1, R[133] = !0, R[134] = !0, R[135] = !0, R[136] = !0, R[139] = !0, R[140] = !0, R[141] = !0, R[160] = !0, R[242] = !0, R[243] = !0, R[244] = !0, R[245] = !0, R[247] = !0, R[249] = !0, R[250] = !0, R[251] = !0, R[278] = !0, R[342] = !1, R[343] = !1, R[344] = !1, R[345] = !1, R[346] = !1, R[347] = !1, R[396] = !0, R[398] = !0, R),
    S = {},
    Rx = (S[18] = "video/mp4", S[22] = "video/mp4", S[43] = "video/webm", S[44] = "video/webm", S[45] = "video/webm", S[59] = "video/mp4", S[133] = "video/mp4", S[134] = "video/mp4", S[135] = "video/mp4", S[136] = "video/mp4", S[139] = "audio/mp4", S[140] = "audio/mp4", S[141] = "audio/mp4", S[160] = "video/mp4", S[242] = "video/webm", S[243] = "video/webm", S[244] = "video/webm", S[245] = "video/webm", S[247] = "video/webm", S[249] = "audio/webm", S[250] = "audio/webm", S[251] = "audio/webm", S[278] = "video/webm", S[342] = "video/mp4", S[343] = "video/mp4", S[344] = "video/mp4", S[345] = "video/mp4", S[346] = "video/mp4", S[347] = "video/mp4", S[396] = "video/mp4", S[398] = "video/mp4", S),
    T = {},
    Sx = (T[18] = "avc1.42001E, mp4a.40.2", T[22] = "avc1.64001F, mp4a.40.2", T[43] = "vp8, vorbis", T[44] = "vp8, vorbis", T[45] = "vp8, vorbis", T[59] = "avc1.4D001F, mp4a.40.2", T[133] = "avc1.4D401E", T[134] = "avc1.4D401E", T[135] = "avc1.4D401E", T[136] = "avc1.4D401E", T[139] = "mp4a.40.2", T[140] = "mp4a.40.2", T[141] = "mp4a.40.2", T[160] = "avc1.4D401E", T[242] = "vp9", T[243] = "vp9", T[244] = "vp9", T[245] = "vp9", T[247] = "vp9", T[249] = "opus", T[250] = "opus", T[251] = "opus", T[278] = "vp9", T[342] = "avc1.42E01E, mp4a.40.2", T[343] = "avc1.42E01E, mp4a.40.2", T[344] = "avc1.42E01E, mp4a.40.2", T[345] = "avc1.42E01E, mp4a.40.2", T[346] = "avc1.42E01E, mp4a.40.2", T[347] = "avc1.4D001F, mp4a.40.2", T[396] = "av01.0.05M.08", T[398] = "av01.0.05M.08", T);
  var Ux = function (a) {
      this.uri = a;
      this.g = Tx(a);
    },
    Tx = function (a) {
      return new Map(a.j.split("/").reduce(function (b, c, d, e) {
        d % 2 && b.set(e[d - 1], c);
        return b;
      }, new Map()));
    };
  Ux.prototype.getId = function () {
    return Vx(this, "id");
  };
  var Vx = function (a, b) {
    var c = a.uri.g.get(b);
    return c ? c : (a = a.g.get(b)) ? a : null;
  };
  var Wx = RegExp("/itag/(\\d+)/");
  function Xx(a) {
    var b = Number(eh(a, "itag"));
    return b ? b : (a = a.match(Wx)) && 2 === a.length ? Number(a[1]) : null;
  }
  function Yx(a) {
    var b = Rx[a];
    a = Sx[a];
    b ? (b = zg(b).toLowerCase(), b = a ? b + '; codecs="' + zg(a) + '"' : b) : b = "";
    return b;
  }
  function Zx(a, b) {
    if ("function" === typeof CustomEvent) return new CustomEvent(a, {
      detail: b
    });
    var c = document.createEvent("CustomEvent");
    c.initCustomEvent(a, !1, !0, b);
    return c;
  }
  ;
  var $x = ["doubleclick.net"];
  function ay() {
    if (Hb() || y("iPad") || y("iPod")) return !1;
    if (Gb()) {
      if (void 0 === Mv) {
        a: {
          if (void 0 === Kv) {
            if (Ov) {
              var a = nb(Nv(), "Safari");
              var b = new P(window.location.href).g.wb("js");
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
                a = Kv = !0;
                break a;
              }
            }
            Kv = !1;
          }
          a = Kv;
        }
        a || (void 0 === Lv && (Lv = nb(Nv(), "afma-sdk-a") ? !0 : !1), a = Lv);
        Mv = a;
      }
      return Mv ? !0 : Wg() ? !1 : by();
    }
    a = Ib() || (Fb() ? "Linux" === ub.platform : y("Linux")) || (Fb() ? "Windows" === ub.platform : y("Windows")) || (Fb() ? "Chrome OS" === ub.platform : y("CrOS"));
    return (I(Yj) || I(Wj) || I(Xj)) && a && Eb() ? by() : !1;
  }
  function by() {
    var a = !1,
      b = new P(window.location.href).h;
    $x.forEach(function (c) {
      b.includes(c) && (a = !0);
    });
    return a;
  }
  ;
  var cy,
    fy = function (a, b, c) {
      if ("number" === typeof a) var d = {
        name: dy(a)
      };else d = a, a = ey(a.name);
      this.code = a;
      this.g = d;
      b = "Error " + b + ": " + this.getName();
      c && (b += ", " + c);
      db.call(this, b);
    };
  bb(fy, db);
  fy.prototype.getName = function () {
    return this.g.name || "";
  };
  var gy = {
      bf: 1,
      sh: 2,
      NOT_FOUND_ERR: 3,
      He: 4,
      Ke: 5,
      th: 6,
      af: 7,
      ABORT_ERR: 8,
      Xe: 9,
      Nh: 10,
      TIMEOUT_ERR: 11,
      We: 12,
      INVALID_ACCESS_ERR: 13,
      INVALID_STATE_ERR: 14
    },
    hy = (v.g || v.h || gy).bf,
    iy = (v.g || v.h || gy).NOT_FOUND_ERR,
    jy = (v.g || v.h || gy).He,
    ky = (v.g || v.h || gy).Ke,
    ly = (v.g || v.h || gy).af,
    my = (v.g || v.h || gy).ABORT_ERR,
    ny = (v.g || v.h || gy).Xe,
    oy = (v.g || v.h || gy).TIMEOUT_ERR,
    py = (v.g || v.h || gy).We,
    qy = (v.DOMException || gy).INVALID_ACCESS_ERR,
    ry = (v.DOMException || gy).INVALID_STATE_ERR,
    ey = function (a) {
      switch (a) {
        case "UnknownError":
          return hy;
        case "NotFoundError":
          return iy;
        case "ConstraintError":
          return jy;
        case "DataError":
          return ky;
        case "TransactionInactiveError":
          return ly;
        case "AbortError":
          return my;
        case "ReadOnlyError":
          return ny;
        case "TimeoutError":
          return oy;
        case "QuotaExceededError":
          return py;
        case "InvalidAccessError":
          return qy;
        case "InvalidStateError":
          return ry;
        default:
          return hy;
      }
    },
    dy = function (a) {
      switch (a) {
        case hy:
          return "UnknownError";
        case iy:
          return "NotFoundError";
        case jy:
          return "ConstraintError";
        case ky:
          return "DataError";
        case ly:
          return "TransactionInactiveError";
        case my:
          return "AbortError";
        case ny:
          return "ReadOnlyError";
        case oy:
          return "TimeoutError";
        case py:
          return "QuotaExceededError";
        case qy:
          return "InvalidAccessError";
        case ry:
          return "InvalidStateError";
        default:
          return "UnknownError";
      }
    },
    sy = function (a, b) {
      return "error" in a ? new fy(a.error, b) : new fy({
        name: "UnknownError"
      }, b);
    },
    ty = function (a, b) {
      return "name" in a ? new fy(a, b + ": " + a.message) : new fy({
        name: "UnknownError"
      }, b);
    };
  var uy = function (a) {
      this.g = a;
    },
    vy = v.IDBKeyRange || v.webkitIDBKeyRange;
  function wy() {}
  ; /*
    Copyright 2005, 2007 Bob Ippolito. All Rights Reserved.
    Copyright The Closure Library Authors.
    SPDX-License-Identifier: MIT
    */
  var yy = function (a, b) {
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
  bb(yy, wy);
  yy.prototype.cancel = function (a) {
    if (this.j) this.h instanceof yy && this.h.cancel();else {
      if (this.g) {
        var b = this.g;
        delete this.g;
        a ? b.cancel(a) : (b.I--, 0 >= b.I && b.cancel());
      }
      this.G ? this.G.call(this.F, this) : this.K = !0;
      this.j || zy(this, new Ay(this));
    }
  };
  yy.prototype.D = function (a, b) {
    this.B = !1;
    By(this, a, b);
  };
  var By = function (a, b, c) {
      a.j = !0;
      a.h = c;
      a.o = !b;
      Cy(a);
    },
    Ey = function (a) {
      if (a.j) {
        if (!a.K) throw new Dy(a);
        a.K = !1;
      }
    };
  yy.prototype.callback = function (a) {
    Ey(this);
    By(this, !0, a);
  };
  var zy = function (a, b) {
    Ey(a);
    By(a, !1, b);
  };
  yy.prototype.Wc = function (a) {
    return Fy(this, a, null);
  };
  var Fy = function (a, b, c, d) {
    a.l.push([b, c, d]);
    a.j && Cy(a);
    return a;
  };
  yy.prototype.then = function (a, b, c) {
    var d,
      e,
      f = new Gs(function (g, h) {
        e = g;
        d = h;
      });
    Fy(this, e, function (g) {
      g instanceof Ay ? f.cancel() : d(g);
      return Gy;
    }, this);
    return f.then(a, b, c);
  };
  yy.prototype.$goog_Thenable = !0;
  var Hy = function (a) {
      return Pb(a.l, function (b) {
        return "function" === typeof b[1];
      });
    },
    Gy = {},
    Cy = function (a) {
      if (a.A && a.j && Hy(a)) {
        var b = a.A,
          c = Iy[b];
        c && (v.clearTimeout(c.g), delete Iy[b]);
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
          h === Gy && (h = void 0);
          void 0 !== h && (a.o = a.o && (h == b || h instanceof Error), a.h = b = h);
          if (Es(b) || "function" === typeof v.Promise && b instanceof v.Promise) d = !0, a.B = !0;
        } catch (k) {
          b = k, a.o = !0, Hy(a) || (c = !0);
        }
      }
      a.h = b;
      d && (h = $a(a.D, a, !0), d = $a(a.D, a, !1), b instanceof yy ? (Fy(b, h, d), b.H = !0) : b.then(h, d));
      c && (b = new Jy(b), Iy[b.g] = b, a.A = b.g);
    },
    Dy = function () {
      db.call(this);
    };
  bb(Dy, db);
  Dy.prototype.message = "Deferred has already fired";
  Dy.prototype.name = "AlreadyCalledError";
  var Ay = function () {
    db.call(this);
  };
  bb(Ay, db);
  Ay.prototype.message = "Deferred was canceled";
  Ay.prototype.name = "CanceledError";
  var Jy = function (a) {
    this.g = v.setTimeout($a(this.j, this), 0);
    this.h = a;
  };
  Jy.prototype.j = function () {
    delete Iy[this.g];
    throw this.h;
  };
  var Iy = {};
  var Ky = function () {
    O.call(this);
  };
  bb(Ky, O);
  Ky.prototype.g = null;
  Ky.prototype.next = function (a) {
    if (a) this.g["continue"](a);else this.g["continue"]();
  };
  Ky.prototype.remove = function () {
    var a = new yy();
    try {
      var b = this.g["delete"]();
    } catch (c) {
      return zy(a, ty(c, "deleting via cursor")), a;
    }
    b.onsuccess = function () {
      a.callback();
    };
    b.onerror = function (c) {
      zy(a, sy(c.target, "deleting via cursor"));
    };
    return a;
  };
  Ky.prototype.getValue = function () {
    return this.g.value;
  };
  var Ly = function (a, b) {
    var c = new Ky();
    try {
      var d = a.openCursor(b ? b.g : null);
    } catch (e) {
      throw c.W(), ty(e, a.name);
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
  var My = function (a) {
    this.g = a;
  };
  My.prototype.getName = function () {
    return this.g.name;
  };
  var Ny = function (a, b, c) {
    var d = new yy();
    try {
      var e = a.g.get(c);
    } catch (f) {
      return b += " with key " + fh(c), zy(d, ty(f, b)), d;
    }
    e.onsuccess = function (f) {
      d.callback(f.target.result);
    };
    e.onerror = function (f) {
      b += " with key " + fh(c);
      zy(d, sy(f.target, b));
    };
    return d;
  };
  My.prototype.get = function (a) {
    return Ny(this, "getting from index " + this.getName(), a);
  };
  var Oy = function (a, b) {
    return Ly(a.g, b);
  };
  var Py = function (a) {
    this.g = a;
  };
  Py.prototype.getName = function () {
    return this.g.name;
  };
  var Qy = function (a, b, c, d, e) {
      var f = new yy();
      try {
        var g = e ? a.g[b](d, e) : a.g[b](d);
      } catch (h) {
        return c += fh(d), e && (c += ", with key " + fh(e)), zy(f, ty(h, c)), f;
      }
      g.onsuccess = function (h) {
        f.callback(h.target.result);
      };
      g.onerror = function (h) {
        c += fh(d);
        e && (c += ", with key " + fh(e));
        zy(f, sy(h.target, c));
      };
      return f;
    },
    Ry = function (a, b) {
      return Qy(a, "put", "putting into " + a.getName() + " with value", b);
    };
  Py.prototype.add = function (a, b) {
    return Qy(this, "add", "adding into " + this.getName() + " with value ", a, b);
  };
  Py.prototype.remove = function (a) {
    var b = new yy();
    try {
      var c = this.g["delete"](a instanceof uy ? a.g : a);
    } catch (e) {
      return c = "removing from " + this.getName() + " with key " + fh(a), zy(b, ty(e, c)), b;
    }
    c.onsuccess = function () {
      b.callback();
    };
    var d = this;
    c.onerror = function (e) {
      var f = "removing from " + d.getName() + " with key " + fh(a);
      zy(b, sy(e.target, f));
    };
    return b;
  };
  Py.prototype.get = function (a) {
    var b = new yy();
    try {
      var c = this.g.get(a);
    } catch (e) {
      return c = "getting from " + this.getName() + " with key " + fh(a), zy(b, ty(e, c)), b;
    }
    c.onsuccess = function (e) {
      b.callback(e.target.result);
    };
    var d = this;
    c.onerror = function (e) {
      var f = "getting from " + d.getName() + " with key " + fh(a);
      zy(b, sy(e.target, f));
    };
    return b;
  };
  Py.prototype.clear = function () {
    var a = "clearing store " + this.getName(),
      b = new yy();
    try {
      var c = this.g.clear();
    } catch (d) {
      return zy(b, ty(d, a)), b;
    }
    c.onsuccess = function () {
      b.callback();
    };
    c.onerror = function (d) {
      zy(b, sy(d.target, a));
    };
    return b;
  };
  var Sy = function (a) {
    try {
      return new My(a.g.index("timestamp"));
    } catch (b) {
      throw ty(b, "getting index timestamp");
    }
  };
  var Ty = function (a, b) {
    O.call(this);
    this.g = a;
    this.j = b;
    this.h = new zw(this);
    this.h.O(this.g, "complete", $a(this.dispatchEvent, this, "complete"));
    this.h.O(this.g, "abort", $a(this.dispatchEvent, this, "abort"));
    this.h.O(this.g, "error", this.Me);
  };
  bb(Ty, O);
  l = Ty.prototype;
  l.Me = function (a) {
    a.target instanceof fy ? this.dispatchEvent({
      type: "error",
      target: a.target
    }) : this.dispatchEvent({
      type: "error",
      target: sy(a.target, "in transaction")
    });
  };
  l.objectStore = function (a) {
    try {
      return new Py(this.g.objectStore(a));
    } catch (b) {
      throw ty(b, "getting object store " + a);
    }
  };
  l.commit = function (a) {
    if (this.g.commit || !a) try {
      this.g.commit();
    } catch (b) {
      throw ty(b, "cannot commit the transaction");
    }
  };
  l.wait = function () {
    var a = new yy();
    es(this, "complete", $a(a.callback, a));
    var b = es(this, "abort", function () {
      ns(c);
      zy(a, new fy(my, "waiting for transaction to complete"));
    });
    var c = es(this, "error", function (e) {
      ns(b);
      zy(a, e.target);
    });
    var d = this.j;
    return a.Wc(function () {
      return d;
    });
  };
  l.abort = function () {
    this.g.abort();
  };
  l.L = function () {
    Ty.Da.L.call(this);
    this.h.W();
  };
  var Uy = function (a) {
    O.call(this);
    this.g = a;
    this.h = new zw(this);
    this.h.O(this.g, "abort", $a(this.dispatchEvent, this, "abort"));
    this.h.O(this.g, "error", this.Ne);
    this.h.O(this.g, "versionchange", this.rf);
    this.h.O(this.g, "close", $a(this.dispatchEvent, this, "close"));
  };
  bb(Uy, O);
  l = Uy.prototype;
  l.rd = !0;
  l.Ne = function (a) {
    a = (a = a.target) && a.error;
    this.dispatchEvent({
      type: "error",
      errorCode: a && a.severity
    });
  };
  l.rf = function (a) {
    this.dispatchEvent(new Vy(a.oldVersion, a.newVersion));
  };
  l.close = function () {
    this.rd && (this.g.close(), this.rd = !1);
  };
  l.getName = function () {
    return this.g.name;
  };
  l.getVersion = function () {
    return Number(this.g.version);
  };
  var Wy = function (a) {
    var b = ["MediaSourceVideoChunk"];
    try {
      var c = a.g.transaction(b, "readwrite");
      return new Ty(c, a);
    } catch (d) {
      throw ty(d, "creating transaction");
    }
  };
  Uy.prototype.L = function () {
    Uy.Da.L.call(this);
    this.h.W();
  };
  var Vy = function (a, b) {
    Qr.call(this, "versionchange");
    this.oldVersion = a;
    this.newVersion = b;
  };
  bb(Vy, Qr);
  var Xy = function (a) {
    var b = new yy();
    void 0 == cy && (cy = v.indexedDB || v.mozIndexedDB || v.webkitIndexedDB || v.moz_indexedDB);
    var c = cy.open("VideoChunkPersistentStorage", 6);
    c.onsuccess = function (d) {
      d = new Uy(d.target.result);
      b.callback(d);
    };
    c.onerror = function (d) {
      zy(b, sy(d.target, "opening database VideoChunkPersistentStorage"));
    };
    c.onupgradeneeded = function (d) {
      if (a) {
        var e = new Uy(d.target.result);
        a(new Vy(d.oldVersion, d.newVersion), e, new Ty(d.target.transaction, e));
      }
    };
    c.onblocked = function () {};
    return b;
  };
  var Yy = function () {
    O.call(this);
    this.g = null;
  };
  u(Yy, O);
  Yy.prototype.initialize = function () {
    var a = this;
    return Promise.resolve(Xy(this.h)).then(function (b) {
      return a.g = b;
    }, function (b) {
      G(E.g(), "codf", b.message);
    });
  };
  var Zy = function (a) {
    return null !== a.g && a.g.rd;
  };
  Yy.prototype.close = function () {
    var a = this;
    return new Promise(function (b) {
      $y(a, b);
    }).then(function () {
      return az();
    }).then(function () {
      a.g.close();
    });
  };
  var az = function () {
      var a;
      return (null == (a = navigator.storage) ? 0 : a.estimate) ? navigator.storage.estimate().then(function (b) {
        G(E.g(), "csue", String(b.usage));
      }) : Promise.resolve(void 0);
    },
    ez = function (a, b) {
      return (b = bz(b)) ? cz(a, dz(b), b.Ac) : Promise.resolve(null);
    },
    gz = function (a, b, c, d) {
      if (c = bz(c)) {
        var e = c.Hd;
        fz(a, {
          bi: dz(c),
          Hd: e,
          fd: e + b.byteLength - 1,
          Ac: c.Ac,
          timestamp: new Date(Date.now()),
          ya: d,
          zb: c.zb,
          video: b
        });
      } else Promise.resolve(void 0);
    };
  Yy.prototype.h = function (a, b) {
    if (b.g.objectStoreNames.contains("MediaSourceVideoChunk")) try {
      b.g.deleteObjectStore("MediaSourceVideoChunk");
    } catch (d) {
      throw ty(d, "deleting object store MediaSourceVideoChunk");
    }
    a = {
      keyPath: "cacheId"
    };
    try {
      var c = new Py(b.g.createObjectStore("MediaSourceVideoChunk", a));
    } catch (d) {
      throw ty(d, "creating object store MediaSourceVideoChunk");
    }
    b = {
      unique: !1
    };
    try {
      c.g.createIndex("timestamp", "timestamp", b);
    } catch (d) {
      throw ty(d, "creating new index timestamp with key path timestamp");
    }
  };
  var $y = function (a, b) {
      var c = new Date(Date.now());
      c.setDate(c.getDate() - 30);
      c = new uy(vy.upperBound(c, void 0));
      var d = Oy(Sy(Wy(a.g).objectStore("MediaSourceVideoChunk")), c),
        e = d.O("n", function () {
          d.remove();
          d.next();
        });
      es(d, "c", function () {
        ns(e);
        b();
      });
    },
    bz = function (a) {
      var b = new Ux(a);
      a = b.getId();
      var c = Vx(b, "itag"),
        d = Vx(b, "source"),
        e = Vx(b, "lmt");
      (b = b.uri.g.get("range")) ? (b = b.split("-")[0], b = !b || isNaN(Number(b)) ? null : Number(b)) : b = null;
      var f = [];
      a ? c ? d ? e ? null === b && f.push("startIndex") : f.push("lmt") : f.push("source") : f.push("itag") : f.push("videoId");
      return 0 < f.length ? (G(E.g(), "civp", f.join("-")), null) : {
        ng: a,
        zb: c,
        source: d,
        Ac: e,
        Hd: b + 0
      };
    },
    dz = function (a) {
      for (var b = [a.ng, a.source, a.Hd].join(), c = 0, d = 0; d < b.length; d++) c = Math.imul(31, c) + b.charCodeAt(d) | 0;
      return c.toString() + "," + a.zb;
    },
    cz = function (a, b, c) {
      var d = Wy(a.g).objectStore("MediaSourceVideoChunk");
      return Promise.resolve(d.get(b)).then(function (e) {
        if (!e) return G(E.g(), "cenf", "1"), null;
        if (e.Ac !== c) return G(E.g(), "cdl", "1"), d.remove(b).then(null, function (f) {
          G(E.g(), "crdlvf", f.message);
        }), null;
        G(E.g(), "cefml", "1");
        return {
          zb: e.zb,
          fd: e.fd,
          ya: e.ya,
          video: e.video
        };
      }, function (e) {
        G(E.g(), "cgvf", e.message);
        return null;
      });
    },
    fz = function (a, b) {
      a = Wy(a.g).objectStore("MediaSourceVideoChunk");
      Promise.resolve(Ry(a, b)).then(function () {
        G(E.g(), "cavs", "1");
      }, function (c) {
        G(E.g(), "cavf", c.message);
      });
    };
  var hz = function (a) {
    Ox.call(this);
    var b = this;
    this.D = this.h = this.g = 0;
    this.l = null;
    this.uri = new P(a);
    this.state = 0;
    this.j = (this.A = ay()) ? Tu(Yy) : null;
    Bn(this, function () {
      An(b.j);
    });
    this.H = this.A ? this.j.initialize() : null;
  };
  u(hz, Ox);
  hz.prototype.F = function () {
    return this.g;
  };
  hz.prototype.B = function () {
    return 3 === this.state;
  };
  hz.prototype.G = function (a) {
    1 === this.state ? (this.g += a, this.state = 2) : 0 === this.state && (this.g += a, this.state = 1, iz(this));
  };
  var iz = function (a) {
      Ha(function (b) {
        if (1 == b.g) return 2 === a.state && (a.state = 1), ya(b, jz(a), 4);
        var c = 3 < a.D;
        if (c) {
          null === a.l && (a.l = 400);
          var d = Zx("media_source_error", {
            code: 0 < a.h ? MediaError.MEDIA_ERR_NETWORK : MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED,
            message: 'Response code "' + a.l + '" with ' + a.g + " bytes requested and " + a.h + " bytes loaded"
          });
          a.dispatchEvent(d);
        }
        a.h < a.g && 3 !== a.state && !c ? b.g = 1 : (3 !== a.state && (a.state = 0), b.g = 0);
      });
    },
    jz = function (a) {
      var b;
      return Ha(function (c) {
        switch (c.g) {
          case 1:
            b = a.h + "-" + (a.g - 1);
            Ev(a.uri, "range", b);
            if (!a.A) {
              c.g = 2;
              break;
            }
            return ya(c, a.H, 3);
          case 3:
            return c.return(kz(a));
          case 2:
            return c.j = 4, ya(c, lz(a), 6);
          case 6:
            za(c);
            break;
          case 4:
            Aa(c), a.D++, c.g = 0;
        }
      });
    },
    kz = function (a) {
      var b;
      return Ha(function (c) {
        switch (c.g) {
          case 1:
            return ya(c, ez(a.j, a.uri), 2);
          case 2:
            if (b = c.h) {
              b.ya && (a.state = 3);
              mz(a, b.video);
              c.g = 0;
              break;
            }
            c.j = 4;
            return ya(c, lz(a), 6);
          case 6:
            za(c);
            break;
          case 4:
            Aa(c), a.D++, c.g = 0;
        }
      });
    },
    lz = function (a) {
      var b, c, d, e, f, g, h;
      return Ha(function (k) {
        if (1 == k.g) return b = 0, c = a.g - a.h, ya(k, fetch(a.uri.toString()), 2);
        d = k.h;
        if (400 <= d.status) return G(E.g(), "lvlfes", d.status.toString()), a.l = d.status, k.return(Promise.reject());
        f = null == (e = d.body) ? void 0 : e.getReader();
        if (!f) return H("lvlmr"), a.l = d.status, k.return(Promise.reject());
        g = [];
        h = function () {
          var n, m, q, t, w, A;
          return Ha(function (F) {
            if (1 == F.g) return ya(F, f.read(), 2);
            n = F.h;
            m = n.done;
            q = n.value;
            if (m) return t = b < c, nz(a, g, t), F.return();
            g.push(q);
            b += null == (w = q) ? void 0 : w.length;
            mz(a, null == (A = q) ? void 0 : A.buffer);
            return ya(F, h(), 0);
          });
        };
        return ya(k, h(), 0);
      });
    },
    nz = function (a, b, c) {
      c && (a.state = 3, mz(a, new ArrayBuffer(0)));
      var d = new Uint8Array(b.reduce(function (g, h) {
          return g + h.length;
        }, 0)),
        e = 0;
      b = r(b);
      for (var f = b.next(); !f.done; f = b.next()) f = f.value, d.set(f, e), e += f.length;
      a.A && 0 < d.buffer.byteLength && gz(a.j, d.buffer, a.uri, c);
    },
    mz = function (a, b) {
      null !== b && (b = b.slice(0), a.h += b.byteLength, a.dispatchEvent({
        type: "progress",
        Zc: b
      }));
    };
  hz.prototype.L = function () {
    var a;
    (null == (a = this.j) ? 0 : Zy(a)) && this.j.close();
    Ox.prototype.L.call(this);
  };
  var oz = function () {};
  var pz = function (a) {
    Ox.call(this);
    var b = this;
    this.D = this.h = this.g = 0;
    this.l = null;
    this.uri = new P(a);
    this.state = 0;
    this.j = (this.A = ay()) ? Tu(Yy) : null;
    Bn(this, function () {
      An(b.j);
    });
    this.H = this.A ? this.j.initialize() : null;
  };
  u(pz, Ox);
  pz.prototype.F = function () {
    return this.g;
  };
  pz.prototype.B = function () {
    return 3 === this.state;
  };
  pz.prototype.G = function (a) {
    1 === this.state ? (this.g += a, this.state = 2) : 0 === this.state && (this.g += a, this.state = 1, qz(this));
  };
  var qz = function (a) {
      Ha(function (b) {
        if (1 == b.g) return 2 === a.state && (a.state = 1), ya(b, rz(a), 4);
        var c = 3 < a.D;
        if (c && null !== a.l) {
          var d = Zx("media_source_error", {
            code: 0 < a.h ? MediaError.MEDIA_ERR_NETWORK : MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED,
            message: 'Response code "' + a.l + '" with ' + a.g + " bytes requested and " + a.h + " bytes loaded"
          });
          a.dispatchEvent(d);
        }
        a.h < a.g && 3 !== a.state && !c ? b.g = 1 : (3 !== a.state && (a.state = 0), b.g = 0);
      });
    },
    rz = function (a) {
      var b;
      return Ha(function (c) {
        switch (c.g) {
          case 1:
            b = a.h + "-" + (a.g - 1);
            Ev(a.uri, "range", b);
            if (!a.A) {
              c.g = 2;
              break;
            }
            return ya(c, a.H, 3);
          case 3:
            return c.return(sz(a));
          case 2:
            return c.j = 4, ya(c, tz(a), 6);
          case 6:
            za(c);
            break;
          case 4:
            Aa(c), a.D++, c.g = 0;
        }
      });
    },
    sz = function (a) {
      var b;
      return Ha(function (c) {
        switch (c.g) {
          case 1:
            return ya(c, ez(a.j, a.uri), 2);
          case 2:
            if (b = c.h) {
              b.ya && (a.state = 3);
              uz(a, b.video, 0);
              c.g = 0;
              break;
            }
            c.j = 4;
            return ya(c, tz(a), 6);
          case 6:
            za(c);
            break;
          case 4:
            Aa(c), a.D++, c.g = 0;
        }
      });
    },
    tz = function (a) {
      return new Promise(function (b, c) {
        var d = new XMLHttpRequest(),
          e = 0,
          f = a.g - a.h;
        d.addEventListener("load", function () {
          H("lvlcl");
          if (400 <= d.status) return G(E.g(), "lvlxes", d.status.toString()), a.l = d.status, c();
          var g = d.response;
          g.byteLength < f && (a.state = 3);
          var h = uz(a, g, e);
          e += h;
          a.A && 0 < g.byteLength && gz(a.j, g, a.uri, g.byteLength < f);
          b();
        });
        d.addEventListener("timeout", function () {
          H("lvlct");
          a.l = d.status;
          c();
        });
        d.addEventListener("error", function () {
          H("lvlce");
          a.l = d.status;
          c();
        });
        d.addEventListener("progress", function () {
          if (400 <= d.status) a.l = d.status;else {
            var g = uz(a, d.response, e);
            e += g;
          }
        });
        d.responseType = "arraybuffer";
        d.open("get", a.uri.toString());
        d.send(null);
      });
    },
    uz = function (a, b, c) {
      if (null === b) return 0;
      b = b.slice(c);
      a.h += b.byteLength;
      a.dispatchEvent({
        type: "progress",
        Zc: b
      });
      return b.byteLength;
    };
  pz.prototype.L = function () {
    this.A && Zy(this.j) && this.j.close();
    Ox.prototype.L.call(this);
  };
  var vz = {
    ki: 2E5,
    hi: 7E4,
    Ga: 3E5,
    gi: 5E3,
    si: 5E3,
    ji: 6E3
  };
  function wz() {
    return !!window.MediaSource;
  }
  function xz(a) {
    return [43, 44, 45].includes(a) && Ec ? !1 : Qx[a] ? (a = Yx(a), !!a && wz() && MediaSource.isTypeSupported(a)) : !1;
  }
  ;
  var yz = function () {};
  yz.prototype.Of = function (a, b, c) {
    return 0 === c ? 1E6 : 5E3 > b - a ? 3E5 : 0;
  };
  var Az = function (a, b) {
      var c = this;
      this.g = a;
      this.index = b;
      this.h = [];
      this.g || H("msms_sbf" + this.index);
      this.g.addEventListener("updateend", function () {
        zz(c);
      });
      this.g.addEventListener("error", function () {
        H("msms_sbe" + c.index);
      });
    },
    zz = function (a) {
      if (0 < a.h.length && !a.g.updating) {
        var b = a.h.shift();
        a.g.appendBuffer(b);
      }
    };
  var Dz = function (a) {
    O.call(this);
    var b = this;
    this.j = a;
    this.g = [];
    this.l = null;
    this.B = 0;
    this.J = !1;
    this.F = 0;
    this.D = [];
    this.A = this.j.map(function (c) {
      return I(pk) ? Tu(hz, c.url) : Tu(pz, c.url);
    });
    this.h = Tu(MediaSource);
    this.G = function () {
      Bz(b);
    };
    this.h.addEventListener("sourceopen", this.G);
    this.H = Cz(this);
  };
  u(Dz, O);
  var Cz = function (a) {
      for (var b = [], c = 0; c < a.j.length; ++c) b.push(new yz());
      return b;
    },
    Bz = function (a) {
      H("msms_oso");
      for (var b = {
        wa: 0
      }; b.wa < a.j.length; b = {
        Nc: b.Nc,
        Pb: b.Pb,
        Va: b.Va,
        wa: b.wa,
        Qb: b.Qb
      }, ++b.wa) {
        var c = a.j[b.wa];
        G(E.g(), "msms_mime" + b.wa, c.mimeType);
        G(E.g(), "msms_cs" + b.wa, c.Ga.toString());
        I(qk) ? (b.Nc = new Az(a.h.addSourceBuffer(c.mimeType), b.wa), b.Pb = a.A[b.wa], b.Pb.O("progress", function (d) {
          return function (e) {
            var f = d.Pb;
            e = e.Zc;
            if (0 !== e.byteLength) {
              var g = d.Nc;
              g.h.push(e);
              zz(g);
            }
            f.B() && (a.B++, a.B === a.g.length && Ez(a));
          };
        }(b)), b.Pb.O("media_source_error", function (d) {
          a.dispatchEvent(d);
        }), a.g.push(b.Nc.g)) : (b.Va = a.h.addSourceBuffer(c.mimeType), b.Va ? (b.Qb = a.A[b.wa], I(pk) && b.Va.addEventListener("updateend", function (d) {
          return function () {
            if (0 < a.D.length && !d.Va.updating) {
              var e = a.D.shift();
              d.Va.appendBuffer(e);
            }
          };
        }(b)), b.Va.addEventListener("error", function (d) {
          return function () {
            H("msms_sbe" + d.wa);
          };
        }(b)), b.Qb.O("progress", function (d) {
          return function (e) {
            var f = d.Va,
              g = d.Qb;
            e = e.Zc;
            0 !== e.byteLength && (I(pk) ? f.updating ? a.D.push(e) : f.appendBuffer(e) : f.appendBuffer(e));
            g.B() && (a.B++, a.B === a.g.length && Ez(a));
          };
        }(b)), b.Qb.O("media_source_error", function (d) {
          a.dispatchEvent(d);
        }), a.g.push(b.Va)) : H("msms_sbf" + b.wa));
      }
      G(E.g(), "msms_ns", a.g.length.toString());
      a.J = !0;
      Fz(a);
    },
    Ez = function (a) {
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
    Fz = function (a) {
      if (a.J) for (var b = 0; b < a.j.length; ++b) {
        var c = a.A[b],
          d = a.g[b];
        d = 0 === d.buffered.length ? 0 : 1E3 * d.buffered.end(0);
        d = a.H[b].Of(a.F, d, c.F());
        0 !== d && c.G(d);
      }
    },
    Gz = function (a) {
      a.l = jh(a.h).toString();
      return a.l;
    };
  Dz.prototype.L = function () {
    this.l && window.URL.revokeObjectURL(this.l);
    for (var a = r(this.A), b = a.next(); !b.done; b = a.next()) b.value.W();
    this.h.removeEventListener("sourceopen", this.G);
    O.prototype.L.call(this);
  };
  Dz.prototype.Rc = function (a) {
    this.H.filter(function () {
      return !1;
    }).map(function (b) {
      return b;
    }).forEach(function (b) {
      b.g = Object.assign({}, vz, b.g, a);
    });
  };
  var Hz = RegExp("/pagead/conversion|/pagead/adview|/pagead/gen_204|/activeview?|csi.gstatic.com/csi|google.com/pagead/xsul|google.com/ads/measurement/l|googleads.g.doubleclick.net/pagead/ide_cookie|googleads.g.doubleclick.net/xbbe/pixel"),
    Iz = RegExp("outstream.min.js"),
    Jz = RegExp("outstream.min.css"),
    Kz = RegExp("fonts.gstatic.com"),
    Lz = RegExp("googlevideo.com/videoplayback|c.2mdn.net/videoplayback|gcdn.2mdn.net/videoplayback"),
    Mz = RegExp("custom.elements.min.js");
  function Nz(a, b) {
    var c = 0,
      d = 0,
      e = 0,
      f = 0,
      g = 0,
      h = 0,
      k = 0,
      n = !1,
      m = !1;
    if ("function" === typeof Ma("performance.getEntriesByType", v) && "transferSize" in v.PerformanceResourceTiming.prototype) {
      var q = v.performance.getEntriesByType("resource");
      q = r(q);
      for (var t = q.next(); !t.done; t = q.next()) t = t.value, Hz.test(t.name) || (f += 1, t.transferSize ? (c += t.transferSize, t.encodedBodySize && t.transferSize < t.encodedBodySize && (h += 1, e += t.encodedBodySize, Iz.test(t.name) && (n = !0), Jz.test(t.name) && (m = !0)), Lz.test(t.name) && (d += t.transferSize)) : 0 === t.transferSize && 0 === t.encodedBodySize ? Mz.test(t.name) ? c += 6686 : Kz.test(t.name) || (k += 1, xi(E.g(), {
        event_name: "unmeasurable_asset",
        resource_name: t.name,
        encoded_body_size: t.encodedBodySize,
        transfer_size: t.transferSize
      })) : (g += 1, e += t.encodedBodySize, Iz.test(t.name) && (n = !0), Jz.test(t.name) && (m = !0)));
      q = 0;
      if (a.duration) {
        for (t = 0; t < a.buffered.length; t++) q += a.buffered.end(t) - a.buffered.start(t);
        q = Math.min(q, a.duration);
      }
      xi(E.g(), {
        event_name: b,
        asset_bytes: c,
        video_bytes: d,
        cached_data_bytes: e,
        js_cached: n,
        css_cached: m,
        num_assets: f,
        num_assets_cached: g,
        num_assets_cache_validated: h,
        num_assets_unmeasurable: k,
        video_played_seconds: a.currentTime.toFixed(2),
        video_muted: a.muted,
        video_seconds_loaded: q.toFixed(2)
      });
    } else G(E.g(), "error", "reporting_timing_not_supported");
  }
  ;
  var Oz = function (a, b, c, d) {
    this.url = a;
    this.mimeType = b;
    this.Ga = c;
    this.g = void 0 === d ? null : d;
  };
  function Pz(a) {
    var b = E.g(),
      c = a.getVideoPlaybackQuality && a.getVideoPlaybackQuality();
    c ? (a = a.currentTime, G(b, "vqdf", String(c.droppedVideoFrames)), G(b, "vqtf", String(c.totalVideoFrames)), G(b, "vqfr", String(Math.round(c.totalVideoFrames / a)))) : G(b, "vqu", "1");
  }
  ;
  var Qz = function (a) {
    this.g = a;
  };
  Qz.prototype.toString = function () {
    return this.g;
  };
  var Rz = new Qz("video_mute"),
    Sz = new Qz("video_caption_visibility");
  var Tz = function (a) {
    M.call(this);
    this.A = 1;
    this.j = [];
    this.o = 0;
    this.g = [];
    this.h = {};
    this.D = !!a;
  };
  bb(Tz, M);
  var Uz = function (a, b, c) {
      var d = Sz.toString(),
        e = a.h[d];
      e || (e = a.h[d] = []);
      var f = a.A;
      a.g[f] = d;
      a.g[f + 1] = b;
      a.g[f + 2] = c;
      a.A = f + 3;
      e.push(f);
    },
    Vz = function (a, b, c) {
      var d = a.h[Sz.toString()];
      if (d) {
        var e = a.g;
        (d = d.find(function (f) {
          return e[f + 1] == b && e[f + 2] == c;
        })) && a.l(d);
      }
    };
  Tz.prototype.l = function (a) {
    var b = this.g[a];
    if (b) {
      var c = this.h[b];
      0 != this.o ? (this.j.push(a), this.g[a + 1] = function () {}) : (c && Ub(c, a), delete this.g[a], delete this.g[a + 1], delete this.g[a + 2]);
    }
    return !!b;
  };
  Tz.prototype.B = function (a, b) {
    var c = this.h[a];
    if (c) {
      for (var d = Array(arguments.length - 1), e = 1, f = arguments.length; e < f; e++) d[e - 1] = arguments[e];
      if (this.D) for (e = 0; e < c.length; e++) {
        var g = c[e];
        Wz(this.g[g + 1], this.g[g + 2], d);
      } else {
        this.o++;
        try {
          for (e = 0, f = c.length; e < f && !this.xa(); e++) g = c[e], this.g[g + 1].apply(this.g[g + 2], d);
        } finally {
          if (this.o--, 0 < this.j.length && 0 == this.o) for (; c = this.j.pop();) this.l(c);
        }
      }
    }
  };
  var Wz = function (a, b, c) {
    Cs(function () {
      a.apply(b, c);
    });
  };
  Tz.prototype.clear = function (a) {
    if (a) {
      var b = this.h[a];
      b && (b.forEach(this.l, this), delete this.h[a]);
    } else this.g.length = 0, this.h = {};
  };
  Tz.prototype.L = function () {
    Tz.Da.L.call(this);
    this.clear();
    this.j.length = 0;
  };
  var Xz = function (a) {
    M.call(this);
    this.g = new Tz(a);
    N(this, this.g);
  };
  bb(Xz, M);
  Xz.prototype.clear = function (a) {
    this.g.clear(void 0 !== a ? a.toString() : void 0);
  };
  var Yz = function (a) {
    a = void 0 === a ? null : a;
    M.call(this);
    this.g = new zw(this);
    N(this, this.g);
    this.qb = a;
  };
  u(Yz, M);
  var Zz = function (a, b, c) {
    a.qb && (Uz(a.qb.g, b, c), Bn(a, function () {
      Vz(a.qb.g, b, c);
    }));
  };
  var $z = function (a, b) {
    Yz.call(this, b);
    Zz(this, function (c) {
      c ? a.g.mode = "showing" : a.bb();
    }, this);
  };
  u($z, Yz);
  var aA = function () {
    O.call(this);
    this.h = new zw(this);
    N(this, this.h);
  };
  u(aA, O);
  var cA = function (a, b, c) {
    c = void 0 === c ? !0 : c;
    aA.call(this);
    a.setAttribute("crossorigin", "anonymous");
    var d = Qg("TRACK");
    d.setAttribute("kind", "captions");
    d.setAttribute("src", b);
    d.setAttribute("default", "");
    a.appendChild(d);
    this.g = a.textTracks[0];
    bA(this);
    c ? this.g.mode = "showing" : this.bb();
  };
  u(cA, aA);
  var bA = function (a) {
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
  cA.prototype.bb = function () {
    this.g.mode = "hidden";
  };
  function dA(a, b) {
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
  function eA(a) {
    a = void 0 === a ? null : a;
    dA(function (b) {
      return b.body && "HeavyAdIntervention" === b.body.id;
    }, function (b) {
      var c = b.body.message,
        d = E.g();
      G(d, "ham", c);
      c.includes("CPU") ? G(d, "hacpu", "true") : c.includes("network") && G(d, "habytes", "true");
      a && a(b);
    });
  }
  ;
  var fA = "autoplay controls crossorigin demuxedaudiosrc demuxedvideosrc loop muted playsinline poster preload src webkit-playsinline x-webkit-airplay".split(" "),
    gA = "autoplay buffered controls crossOrigin currentSrc currentTime defaultMuted defaultPlaybackRate disableRemotePlayback duration ended loop muted networkState onerror onwaitingforkey paused played playsinline poster preload preservesPitch mozPreservesPitch webkitPreservesPitch readyState seekable videoWidth videoHeight volume textTracks canPlayType captureStream getVideoPlaybackQuality load pause play setSinkId oncanplay oncanplaythrough onload onplay onpause onended onfullscreenchange onfullscreenerror addEventListener dispatchEvent removeEventListener requestFullscreen".split(" "),
    hA = {
      childList: !0
    },
    iA = !RegExp("^\\s*class\\s*\\{\\s*\\}\\s*$").test(function () {}.toString()),
    jA = HTMLElement;
  iA && (jA = function () {
    var a = Object.getPrototypeOf(this).constructor;
    return v.Reflect.construct(HTMLElement, [], a);
  }, Object.setPrototypeOf(jA, HTMLElement), Object.setPrototypeOf(jA.prototype, HTMLElement.prototype));
  var kA = function (a) {
      if (null !== a) {
        a = r(a);
        for (var b = a.next(); !b.done; b = a.next()) if (b = b.value, b.nodeName === "TRACK".toString()) return b;
      }
      return null;
    },
    lA = function (a, b) {
      this.code = a;
      this.message = void 0 === b ? "" : b;
    },
    mA = function (a) {
      lA.call(this, MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED, void 0 === a ? "" : a);
    };
  u(mA, lA);
  var qA = function (a, b) {
    b = void 0 === b ? !1 : b;
    var c = jA.call(this) || this;
    G(E.g(), "ulv", "1");
    c.kg = b;
    c.qa = null;
    c.pe = null;
    c.Wd = null;
    c.R = Qg("VIDEO");
    nA(c);
    c.qb = a || new Xz();
    oA(c);
    c.jc = null;
    pA(c);
    c.attachShadow({
      mode: "open"
    });
    c.shadowRoot.appendChild(c.R);
    eA(function () {
      G(E.g(), "has", c.src || c.ub);
      G(E.g(), "hat", String(c.R.currentTime));
    });
    c.Oc = !1;
    c.re = !1;
    c.Sb = null;
    c.Uc = null;
    c.lg = !1;
    c.ue = !1;
    c.di = null;
    c.Gb = null;
    return c;
  };
  u(qA, jA);
  qA.prototype.attributeChangedCallback = function (a, b, c) {
    switch (a) {
      case "src":
        rA(this, c);
        break;
      case "demuxedaudiosrc":
      case "demuxedvideosrc":
        sA(this);
        break;
      case "muted":
        this.R[a] = "" === c ? !0 : !!c;
        tA(this, a, c);
        break;
      default:
        tA(this, a, c);
    }
  };
  qA.prototype.Rc = function (a) {
    this.Gb = a;
    var b;
    null == (b = this.qa) || b.Rc(a);
  };
  var tA = function (a, b, c) {
      c !== a.R.getAttribute(b) && (null === c ? a.R.removeAttribute(b) : a.R.setAttribute(b, c));
    },
    uA = function (a) {
      a.qa && (a.R.removeEventListener("timeupdate", a.Sb), a.qa.W(), a.qa = null);
    },
    vA = function (a, b) {
      a.Wd = b;
      a.R.dispatchEvent(new Event("error"));
    },
    nA = function (a) {
      wA(a);
      xA(a);
      a.R.addEventListener("loadedmetadata", function () {
        a.Uc = nw(a);
        a.Uc.then(function (b) {
          var c = a.R.videoWidth,
            d = a.R.videoHeight,
            e = b.width,
            f = b.height;
          0 < c && 0 < d && 0 < e && 0 < f && (b = b.width / b.height, c /= d, .97 <= Math.min(c, b) / Math.max(c, b) ? xm(a.R, {
            "object-fit": "cover"
          }) : xm(a.R, {
            "object-fit": "contain"
          }));
        });
      });
      a.R.addEventListener("play", function () {
        a.re || (Nz(a.R, "first_play"), a.re = !0);
      });
      a.R.addEventListener("pause", function () {
        a.Oc || (Nz(a.R, "first_pause"), Pz(a.R), a.Oc = !0);
      });
      fs(v, "pagehide", function () {
        a.Oc || (Nz(a.R, "first_pause"), Pz(a.R), a.Oc = !0);
      });
      a.R.addEventListener("stalled", function () {
        G(E.g(), "ves", "1");
      });
      new dw(a.R).O("playbackStalled", function () {
        return G(E.g(), "pbs", "1");
      });
      a.R.addEventListener("media_source_error", function (b) {
        uA(a);
        b = b.detail;
        vA(a, new lA(b.code, b.message));
      });
      yA(a);
    },
    pA = function (a) {
      var b = kA(a.childNodes);
      b && zA(a, b);
      null === a.jc && AA(a);
    },
    AA = function (a) {
      if (v.MutationObserver) {
        var b = new MutationObserver(function (c) {
          c = r(c);
          for (var d = c.next(); !d.done; d = c.next()) if (d = d.value, "childList" === d.type && (d = kA(d.addedNodes))) {
            zA(a, d);
            b.disconnect();
            break;
          }
        });
        b.observe(a, hA);
      }
    },
    oA = function (a) {
      a.R.addEventListener("volumechange", function () {
        a.qb.g.B(Rz.toString(), a.R.muted);
        a.kg || a.qb.g.B(Sz.toString(), a.R.muted);
      });
    },
    zA = function (a, b) {
      if (null === a.jc && b.hasAttribute("src")) {
        var c = b.getAttribute("src");
        a.jc = new cA(a.R, c, b.hasAttribute("default"));
        new $z(a.jc, a.qb);
        c.includes("kind=asr") && G(E.g(), "act", "1");
      }
    },
    rA = function (a, b) {
      if (b !== a.pe) {
        a.pe = b;
        a.lg && b && Tv(b) && (b = Uv(b));
        var c = b ? Xx(b) : null,
          d = !!c && xz(c);
        G(E.g(), "umsem", d ? "1" : "0");
        d ? (b = Tu(Oz, b, Yx(c), 1E3 * Px[c], null), a.qa = Tu(Dz, [b]), a.Gb && a.qa.Rc(a.Gb), a.qa.O("media_source_error", function (e) {
          e = Zx("media_source_error", e.detail);
          a.R.dispatchEvent(e);
        }), a.Sb = function () {
          var e = a.qa;
          e.F = 1E3 * a.R.currentTime;
          Fz(e);
        }, a.R.addEventListener("timeupdate", a.Sb), tA(a, "src", Gz(a.qa))) : (uA(a), tA(a, "src", b));
        a.ue || a.R.load();
      }
    },
    sA = function (a) {
      a.src && vA(a, new lA(MediaError.MEDIA_ERR_ABORTED, "Setting demuxed src after src is already set."));
      if (!a.Hb && !a.ub && a.qa) uA(a), tA(a, "src", null), a.R.load();else if (a.Hb && a.ub) {
        var b = Xx(a.Hb),
          c = Xx(a.ub);
        if (c && xz(c)) {
          if (b && xz(b)) {
            var d = !!c && xz(c) && !!b && xz(b);
            G(E.g(), "umsed", d ? "1" : "0");
            c = Tu(Oz, a.ub, Yx(c), -1, null);
            b = Tu(Oz, a.Hb, Yx(b), -1, null);
            a.qa = Tu(Dz, [c, b]);
            a.Gb && a.qa.Rc(a.Gb);
            a.qa.O("media_source_error", function (e) {
              e = Zx("media_source_error", e.detail);
              a.R.dispatchEvent(e);
            });
            a.Sb = function () {
              var e = a.qa;
              e.F = 1E3 * a.R.currentTime;
              Fz(e);
            };
            a.R.addEventListener("timeupdate", a.Sb);
            tA(a, "src", Gz(a.qa));
            a.ue || a.R.load();
          } else vA(a, new mA('Audio itag "' + b + '" not supported.'));
        } else vA(a, new mA('Video itag "' + c + '" not supported.'));
      }
    },
    wA = function (a) {
      for (var b = r(gA), c = b.next(), d = {}; !c.done; d = {
        Ka: d.Ka,
        getValue: d.getValue
      }, c = b.next()) d.Ka = c.value, d.Ka in a.R && ("function" === typeof a.R[d.Ka] ? (d.getValue = a.R[d.Ka].bind(a.R), Object.defineProperty(a, d.Ka, {
        set: function (e) {
          return function (f) {
            a.R[e.Ka] = f;
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
            a.R[e.Ka] = f;
          };
        }(d),
        get: function (e) {
          return function () {
            return a.R[e.Ka];
          };
        }(d)
      }));
    },
    xA = function (a) {
      Object.defineProperty(a, "error", {
        set: function () {},
        get: function () {
          return a.R.error ? a.R.error : a.Wd;
        }
      });
    },
    yA = function (a) {
      a.R.style.width = Em();
      a.R.style.height = Em();
    };
  qA.prototype.disconnectedCallback = function () {
    if (this.Uc) {
      var a = jw.get(this.Uc);
      mw(a);
    }
    jA.prototype.disconnectedCallback && jA.prototype.disconnectedCallback.call(this);
  };
  da.Object.defineProperties(qA.prototype, {
    Hb: {
      configurable: !0,
      enumerable: !0,
      set: function (a) {
        this.setAttribute("demuxedaudiosrc", a);
      },
      get: function () {
        return this.getAttribute("demuxedaudiosrc");
      }
    },
    ub: {
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
  da.Object.defineProperties(qA, {
    observedAttributes: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return fA;
      }
    }
  });
  v.customElements && (v.customElements.get("lima-video") || v.customElements.define("lima-video", qA));
  function BA() {
    var a = Tu(Yy);
    a.initialize().then(function (b) {
      b && (b = Zx("initialized"), a.dispatchEvent(b));
    });
    return a;
  }
  var DA = function (a, b, c, d, e) {
    M.call(this);
    this.F = a;
    this.h = c;
    this.o = e;
    this.Z = this.U = this.ac = this.D = this.j = this.Wa = 0;
    this.B = [];
    this.H = !1;
    this.aa = this.ba = this.ga = null;
    this.Ea = !1;
    this.bc = this.G = this.A = this.Fa = this.Na = null;
    this.ya = !1;
    this.J = new P(b.url);
    this.Ga = b.Ga;
    this.ma = d;
    (this.M = b.g) || this.J.g.remove("alr");
    G(E.g(), "sl_dv" + this.o, (null !== this.M).toString());
    this.V = !this.M;
    this.g = new XMLHttpRequest();
    this.X = .1;
    if (this.l = ay()) this.A = BA(), N(this, this.A);
    CA(this);
  };
  u(DA, M);
  var EA = function (a, b) {
      b = Zx("media_source_error", b);
      a.F.dispatchEvent(b);
    },
    FA = function (a, b) {
      EA(a, {
        code: 1 < a.j ? MediaError.MEDIA_ERR_NETWORK : MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED,
        message: b
      });
    },
    CA = function (a) {
      a.ga = function () {
        GA(a);
        if (a.V) {
          var b = a.g.responseText;
          a.H = !b || b.length < a.Ga;
          a.U = 0;
          H("sl_cc" + a.o + "_" + a.j);
          a.D++;
          HA(a);
        }
      };
      a.ba = function () {
        GA(a);
      };
      a.aa = function () {
        H("sl_ec" + a.o + "_" + a.j);
        FA(a, "Failed to load chunk " + a.j + " for stream " + a.o);
      };
      a.g.addEventListener("load", a.ga);
      a.g.addEventListener("progress", a.ba);
      a.g.addEventListener("error", a.aa);
      a.h.addEventListener("updateend", function () {
        a.h.buffered.length && (a.ac = a.h.buffered.end(0), a.l ? a.ya && !a.h.updating && a.j === a.D && (H("sl_lc" + a.o), a.ma()) : a.H && !a.h.updating && a.j === a.D && (H("sl_lc" + a.o), a.ma()));
        !a.Ea && 1 < a.F.buffered.length && (G(E.g(), "dbr", "1"), a.Ea = !0);
      });
      a.h.addEventListener("update", function () {
        a.B.length && !a.h.updating && a.h.appendBuffer(a.B.shift());
      });
      a.h.addEventListener("error", function () {
        H("msb_err" + a.o);
        EA(a, {
          code: MediaError.MEDIA_ERR_DECODE,
          message: "Error on SourceBuffer " + a.o
        });
      });
      a.l ? (Zy(a.A) ? IA(a) : a.Na = fs(a.A, "initialized", function () {
        IA(a);
      }), a.Fa = fs(a.A, "get_video_succeeded", function () {
        HA(a);
      })) : IA(a);
    },
    KA = function (a) {
      H("sl_rc" + a.o + "_" + a.j);
      var b = JA(a);
      a.g.open("get", b);
      a.g.overrideMimeType("text/plain; charset=x-user-defined");
      a.g.send(null);
      a.l && (a.G = null, a.bc = b);
    },
    GA = function (a) {
      if (400 <= a.g.status) FA(a, 'Response code "' + a.g.status + '" on loading chunk ' + a.j + " for stream " + a.o);else {
        if (!a.V) {
          var b = a.g.getResponseHeader("content-type");
          if (b && 0 <= b.indexOf("text/plain")) {
            a.g.readyState === XMLHttpRequest.DONE && (a.J = new P(a.g.response), a.j = 0, a.D = 0, a.Wa++, IA(a));
            return;
          }
          a.V = !0;
          H("sl_redc" + a.o);
          G(E.g(), "sl_tr" + a.o, a.Wa.toString());
        }
        a.J.g.remove("alr");
        if (a.g.readyState === XMLHttpRequest.LOADING || a.g.readyState === XMLHttpRequest.DONE) b = LA(a, a.U), a.U = a.g.response.length, a.Z += b.byteLength, MA(a, b);
        if (a.l && a.g.readyState === XMLHttpRequest.DONE && (b = LA(a, 0), 0 < b.byteLength)) {
          var c = a.g.responseText;
          a.ya = !c || c.length < a.Ga;
          gz(a.A, b, new P(a.bc), a.ya);
        }
      }
    },
    MA = function (a, b) {
      0 < b.byteLength && (a.h.updating || a.B.length ? a.B.push(b) : a.h.appendBuffer(b));
    },
    LA = function (a, b) {
      a = a.g.response;
      for (var c = new Uint8Array(a.length - b), d = 0; d < c.length; d++) c[d] = a.charCodeAt(d + b) & 255;
      return c.buffer;
    },
    HA = function (a) {
      var b = Wv;
      -1 !== b && b < a.Z + a.Ga ? (a.F.pause(), Wv = -1, b = !1) : (b = a.D === a.j && !a.h.updating && !a.B.length, b = a.l ? !a.ya && b && a.F.currentTime >= a.X : !a.H && b && a.F.currentTime >= a.X);
      b && (a.X = a.ac + .1, IA(a));
    },
    JA = function (a) {
      var b = a.l && a.G ? a.G + 1 : a.j * a.Ga;
      return Ev(a.J, "range", b + "-" + (b + a.Ga - 1)).toString();
    },
    IA = function (a) {
      if (a.l) {
        var b = new P(JA(a));
        ez(a.A, b).then(function (c) {
          c ? (a.G = Number(c.fd), a.ya = c.ya, MA(a, c.video), c = Zx("get_video_succeeded"), a.A.dispatchEvent(c), a.D++) : KA(a);
          a.j++;
        });
      } else KA(a), a.j++;
    };
  DA.prototype.L = function () {
    this.l && Zy(this.A) && this.A.close();
    this.g.removeEventListener("load", this.ga);
    this.g.removeEventListener("progress", this.ba);
    this.g.removeEventListener("error", this.aa);
    ns(this.Na);
    ns(this.Fa);
    M.prototype.L.call(this);
  };
  var OA = function (a, b) {
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
      NA(c);
    };
    this.g.addEventListener("sourceopen", this.B);
  };
  u(OA, M);
  var PA = function (a) {
      a.o && a.l.removeEventListener("timeupdate", a.o);
    },
    NA = function (a) {
      H("msmsw_oso");
      a.o = function () {
        if (!a.A) for (var e = r(a.j), f = e.next(); !f.done; f = e.next()) HA(f.value);
      };
      a.l.addEventListener("timeupdate", a.o);
      for (var b = 0; b < a.F.length; b++) {
        var c = a.F[b];
        G(E.g(), "msmsw_mime" + b, c.mimeType);
        G(E.g(), "msmsw_cs" + b, c.Ga.toString());
        var d = a.g.addSourceBuffer(c.mimeType);
        d ? (a.D.push(d), c = Tu(DA, a.l, c, d, function () {
          a: if (!a.A) {
            for (var e = r(a.j), f = e.next(); !f.done; f = e.next()) if (f = f.value, f.l ? !f.ya || f.h.updating || f.B.length : !f.H || f.h.updating || f.B.length) break a;
            a.g.endOfStream();
            a.A = !0;
            PA(a);
          }
        }, b), a.j.push(c)) : H("msmsw_sbf" + b);
      }
      G(E.g(), "msmsw_ns", a.D.length.toString());
    };
  OA.prototype.L = function () {
    this.h && window.URL.revokeObjectURL(this.h);
    for (var a = r(this.j), b = a.next(); !b.done; b = a.next()) b.value.W();
    PA(this);
    this.g.removeEventListener("sourceopen", this.B);
    M.prototype.L.call(this);
  }; /*
     Math.uuid.js (v1.4)
     http://www.broofa.com
     mailto:robert@broofa.com
     Copyright (c) 2010 Robert Kieffer
     Dual licensed under the MIT and GPL licenses.
     */
  var QA = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
    RA = function () {
      for (var a = Array(36), b = 0, c, d = 0; 36 > d; d++) 8 == d || 13 == d || 18 == d || 23 == d ? a[d] = "-" : 14 == d ? a[d] = "4" : (2 >= b && (b = 33554432 + 16777216 * Math.random() | 0), c = b & 15, b >>= 4, a[d] = QA[19 == d ? c & 3 | 8 : c]);
      return a.join("");
    };
  var TA = function (a) {
    P.call(this, a);
    this.B = new Map();
    a = this.j;
    var b = a.indexOf(";"),
      c = null;
    0 <= b ? (this.j = a.substring(0, b), c = a.substring(b + 1)) : this.j = a;
    SA(this, c);
  };
  u(TA, P);
  TA.prototype.toString = function () {
    return UA(this, P.prototype.toString.call(this));
  };
  TA.prototype.D = function () {
    return "";
  };
  var SA = function (a, b) {
      kb(zg(b)) || b.split(";").forEach(function (c) {
        var d = c.indexOf("=");
        if (!(0 >= d)) {
          var e = wg(c.substring(0, d));
          c = wg(c.substring(d + 1));
          d = a.B.get(e);
          null != d ? d.includes(c) || d.push(c) : d = [zg(c)];
          a.B.set(e, d);
        }
      }, a);
    },
    VA = function (a) {
      if (kb(zg("ord"))) return null;
      a = a.B.get("ord");
      return null != a ? a : null;
    },
    WA = function (a, b) {
      kb(zg("ord")) || (b = b.map(zg), a.B.set("ord", b));
    },
    UA = function (a, b) {
      b = [zg(b)];
      b.push.apply(b, ka(XA(a)));
      return b.join(";");
    },
    XA = function (a) {
      var b = VA(a);
      null == b ? b = [zg(Date.now())] : kb(zg("ord")) || a.B.delete("ord");
      var c = [];
      a.B.forEach(function (d, e) {
        d.forEach(function (f) {
          c.push(e + "=" + f);
        });
      });
      c.push("ord=" + b[0]);
      WA(a, b);
      return c;
    };
  TA.prototype.F = function () {
    return new TA(this.toString());
  };
  function YA(a) {
    var b = new TA(a);
    a = b.h;
    b = UA(b, b.j);
    return !jb(a, ".g.doubleclick.net") && (jb(a, "doubleclick.net") || jb(a, "pagead2.googlesyndication.com")) && ow("/(ad|pfad)[x|i|j]?/", b);
  }
  function ZA(a) {
    return "bid.g.doubleclick.net" == new P(a).h;
  }
  function $A(a) {
    a = new P(a);
    var b = a.j;
    return jb(a.h, "googleads.g.doubleclick.net") && ow("/pagead/(live/)?ads", b);
  }
  function aB(a) {
    a = new P(a);
    var b = a.j;
    return jb(a.h, "doubleclick.net") && ow("/gampad/(live/)?ads", b);
  }
  function bB(a) {
    a = new P(a);
    var b = a.j;
    return "ad.doubleclick.net" === a.h && ow("/dv3/adv", b);
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
    Hh: 2002
  };
  U[-1] = "DEPRECATED_ERROR_CODE";
  U[100] = "VAST_MALFORMED_RESPONSE";
  U[101] = "VAST_SCHEMA_VALIDATION_ERROR";
  U[102] = "VAST_UNSUPPORTED_VERSION";
  U[200] = "VAST_TRAFFICKING_ERROR";
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
  var cB = function (a, b, c) {
    var d = Error.call(this);
    this.message = d.message;
    "stack" in d && (this.stack = d.stack);
    this.type = a;
    this.errorMessage = b;
    this.errorCode = c;
    this.ad = this.g = null;
  };
  u(cB, Error);
  l = cB.prototype;
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
  function dB(a) {
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
  var eB = function (a) {
    var b = {};
    b = (b.IABUSPrivacy_String = "uspString", b.IABTCF_gdprApplies = "gdprApplies", b.IABTCF_TCString = "tcString", b.IABTCF_AddtlConsent = "addtlConsent", b.IABGPP_HDR_GppString = "gppString", b.IABGPP_GppSID = "gppSid", b);
    for (var c in b) null != a[c] && (a[b[c]] = a[c], delete a[c]);
    this.je = !!a.isGdprLoader;
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
  var fB = function (a) {
      this.g = a;
    },
    gB = function (a, b) {
      return Yf(a.g, b) && (a = a.g[b], "boolean" === typeof a) ? a : !1;
    },
    hB = function (a) {
      return Yf(a.g, "videoElementFakeDuration") && (a = a.g.videoElementFakeDuration, "number" === typeof a) ? a : NaN;
    },
    iB = function (a) {
      if (Yf(a.g, "forceExperimentIds")) {
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
      this.sessionId = RA();
      this.M = {};
      this.I = "";
      this.G = 0;
      try {
        this.V = Dl()[0];
      } catch (a) {}
    },
    jB = function (a) {
      a = zg(a);
      kb(a) || (a = a.substring(0, 20));
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
  l.xf = function () {
    return this.l;
  };
  l.setAutoPlayAdBreaks = function (a) {
    this.o = a;
  };
  l.If = function () {
    return this.o;
  };
  l.bg = function (a) {
    this.h = a;
  };
  l.wf = function () {
    return this.h;
  };
  l.setLocale = function (a) {
    if (a = qw(a)) this.locale = a;
  };
  l.getLocale = function () {
    return this.locale;
  };
  l.setPlayerType = function (a) {
    this.playerType = jB(a);
  };
  l.getPlayerType = function () {
    return this.playerType;
  };
  l.setPlayerVersion = function (a) {
    this.playerVersion = jB(a);
  };
  l.getPlayerVersion = function () {
    return this.playerVersion;
  };
  var kB = function (a) {
    if (null == a.B) {
      var b = {};
      var c = new P(B().location.href).g;
      if (Jv(c, "tcnfp")) try {
        b = JSON.parse(c.get("tcnfp"));
      } catch (d) {}
      a.B = new fB(b);
    }
    return a.B;
  };
  l = V.prototype;
  l.cg = function (a) {
    this.K = a;
  };
  l.dg = function (a) {
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
  l.ag = function () {};
  l.vf = function () {
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
  V.prototype.getDisableFlashAds = V.prototype.vf;
  V.prototype.setDisableFlashAds = V.prototype.ag;
  V.prototype.setSessionId = V.prototype.setSessionId;
  V.prototype.setCookiesEnabled = V.prototype.setCookiesEnabled;
  V.prototype.isCookiesEnabled = V.prototype.isCookiesEnabled;
  V.prototype.getDisableCustomPlaybackForIOS10Plus = V.prototype.getDisableCustomPlaybackForIOS10Plus;
  V.prototype.setDisableCustomPlaybackForIOS10Plus = V.prototype.setDisableCustomPlaybackForIOS10Plus;
  V.prototype.setStreamCorrelator = V.prototype.dg;
  V.prototype.setPageCorrelator = V.prototype.cg;
  V.prototype.getPlayerVersion = V.prototype.getPlayerVersion;
  V.prototype.setPlayerVersion = V.prototype.setPlayerVersion;
  V.prototype.getPlayerType = V.prototype.getPlayerType;
  V.prototype.setPlayerType = V.prototype.setPlayerType;
  V.prototype.getLocale = V.prototype.getLocale;
  V.prototype.setLocale = V.prototype.setLocale;
  V.prototype.getIsVpaidAdapter = V.prototype.wf;
  V.prototype.setIsVpaidAdapter = V.prototype.bg;
  V.prototype.isAutoPlayAdBreaks = V.prototype.If;
  V.prototype.setAutoPlayAdBreaks = V.prototype.setAutoPlayAdBreaks;
  V.prototype.getVpaidMode = V.prototype.xf;
  V.prototype.setVpaidMode = V.prototype.setVpaidMode;
  V.prototype.setVpaidAllowed = V.prototype.setVpaidAllowed;
  V.prototype.getPpid = V.prototype.getPpid;
  V.prototype.setPpid = V.prototype.setPpid;
  V.prototype.getNumRedirects = V.prototype.getNumRedirects;
  V.prototype.setNumRedirects = V.prototype.setNumRedirects;
  V.prototype.getCompanionBackfill = V.prototype.getCompanionBackfill;
  V.prototype.setCompanionBackfill = V.prototype.setCompanionBackfill;
  var lB = new V();
  var mB = function (a) {
    this.P = re(a);
  };
  u(mB, $e);
  window.addEventListener = function (eventName, handler, options) {
    return nativeAddEventListener(eventName, function (event) {
      trackEvent(eventName, {
        event: event.type
      });
      return handler(event);
    }, options);
  };
  mB.la = [10];
  function nB(a) {
    var b = {};
    new P(a).g.forEach(function (c, d) {
      b[d] = c;
    });
    return b;
  }
  var oB = function (a, b) {
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
      this.h = new eB(b);
    },
    pB = function (a, b) {
      if (!($A(a) || YA(a) || aB(a) || ZA(a) || bB(a))) {
        var c = new P(a),
          d = c.j;
        "pubads.g.doubleclick.net" === c.h && (ow("/ssai/", d) || ow("/ondemand/", d));
      }
      return new oB(nB(a), b);
    },
    qB = function (a, b) {
      if (a.g.hasOwnProperty(b)) return a.g[b];
    },
    rB = function (a) {
      var b = qB(a, "ltd");
      if (!(b = "1" === b || "true" === b)) {
        b = qB(a, "gdpr");
        var c = a.h.h;
        b = ("1" === c || "0" === c ? c : void 0 !== b ? b : "").toLowerCase();
        if ("true" === b || "1" === b) {
          if (b = a.h.g, a = qB(a, "gdpr_consent"), a = b && "tcunavailable" !== b ? b : "tcunavailable" === b ? a || b : a || "", "tcunavailable" === a) var d = !1;else {
            if ((b = Du(a)) && a) {
              var e = Me(b, Ut, 1);
              b = Me(b, Ot, 2) || new Ot();
              c = Ve(e, 9);
              var f = Ve(e, 4),
                g = Ve(e, 5),
                h = Ue(e, 10),
                k = Ue(e, 11),
                n = Xe(e, 16),
                m = Ue(e, 15),
                q = {
                  consents: Eu(He(e, 13, $d), pu),
                  legitimateInterests: Eu(He(e, 14, $d), pu)
                },
                t = {
                  consents: Eu(He(e, 17, ce)),
                  legitimateInterests: Eu(He(e, 18, ce))
                },
                w = Eu(He(e, 12, $d), qu),
                A = Oe(e, Nt, 19);
              e = {};
              A = r(A);
              for (var F = A.next(); !F.done; F = A.next()) {
                F = F.value;
                var Za = Te(De(F, 1), 0);
                e[Za] = e[Za] || {};
                for (var Ta = r(He(F, 3, ce)), ha = Ta.next(); !ha.done; ha = Ta.next()) e[Za][ha.value] = Te(De(F, 2), 0);
              }
              a = {
                tcString: a,
                tcfPolicyVersion: c,
                gdprApplies: !0,
                cmpId: f,
                cmpVersion: g,
                isServiceSpecific: h,
                useNonStandardStacks: k,
                publisherCC: n,
                purposeOneTreatment: m,
                purpose: q,
                vendor: t,
                specialFeatureOptins: w,
                publisher: {
                  restrictions: e,
                  consents: Eu(He(b, 1, $d), pu),
                  legitimateInterests: Eu(He(b, 2, $d), pu),
                  customPurposes: {
                    consents: Eu(He(b, 3, ce)),
                    legitimateInterests: Eu(He(b, 4, ce))
                  }
                }
              };
            } else a = null;
            if (a) {
              var ra = void 0 === ra ? !1 : ra;
              if (nv(a)) {
                if (!1 === a.gdprApplies || "tcunavailable" === a.tcString || void 0 === a.gdprApplies && !ra || "string" !== typeof a.tcString || !a.tcString.length) d = !0;else {
                  d = void 0 === d ? "755" : d;
                  c: {
                    if (a.publisher && a.publisher.restrictions && (ra = a.publisher.restrictions["1"], void 0 !== ra)) {
                      ra = ra[void 0 === d ? "755" : d];
                      break c;
                    }
                    ra = void 0;
                  }
                  0 === ra ? d = !1 : a.purpose && a.vendor ? (ra = a.vendor.consents, (d = !(!ra || !ra[void 0 === d ? "755" : d])) && a.purposeOneTreatment && "CH" === a.publisherCC ? d = !0 : d && (d = a.purpose.consents, d = !(!d || !d["1"]))) : d = !0;
                }
              } else d = !1;
            } else d = !1;
          }
        } else d = !0;
        b = !d;
      }
      return b;
    },
    sB = function (a) {
      var b = new mB();
      a = !rB(a);
      Fe(b, 5, Vd(a));
      return b;
    };
  var tB = function (a) {
    this.P = re(a);
  };
  u(tB, $e);
  tB.prototype.getVersion = function () {
    return Xe(this, 2);
  };
  var uB = function (a) {
    this.P = re(a);
  };
  u(uB, $e);
  var vB = function (a, b) {
      return Ze(a, 2, b);
    },
    wB = function (a, b) {
      return Ze(a, 3, b);
    },
    xB = function (a, b) {
      return Ze(a, 4, b);
    },
    yB = function (a, b) {
      return Ze(a, 5, b);
    },
    zB = function (a, b) {
      return Ze(a, 9, b);
    },
    AB = function (a, b) {
      return Qe(a, 10, b);
    },
    BB = function (a, b) {
      return Fe(a, 11, Vd(b));
    },
    CB = function (a, b) {
      return Ze(a, 1, b);
    },
    DB = function (a, b) {
      return Fe(a, 7, Vd(b));
    };
  uB.la = [10, 6];
  var EB = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");
  function FB(a) {
    var b;
    return null != (b = a.google_tag_data) ? b : a.google_tag_data = {};
  }
  function GB(a) {
    var b, c;
    return "function" === typeof (null == (b = a.navigator) ? void 0 : null == (c = b.userAgentData) ? void 0 : c.getHighEntropyValues);
  }
  function HB() {
    var a = window;
    if (!GB(a)) return null;
    var b = FB(a);
    if (b.uach_promise) return b.uach_promise;
    a = a.navigator.userAgentData.getHighEntropyValues(EB).then(function (c) {
      null != b.uach || (b.uach = c);
      return c;
    });
    return b.uach_promise = a;
  }
  function IB(a) {
    var b;
    return BB(AB(yB(vB(CB(xB(DB(zB(wB(new uB(), a.architecture || ""), a.bitness || ""), a.mobile || !1), a.model || ""), a.platform || ""), a.platformVersion || ""), a.uaFullVersion || ""), (null == (b = a.fullVersionList) ? void 0 : b.map(function (c) {
      var d = new tB();
      d = Ze(d, 1, c.brand);
      return Ze(d, 2, c.version);
    })) || []), a.wow64 || !1);
  }
  function JB() {
    var a, b;
    return null != (b = null == (a = HB()) ? void 0 : a.then(function (c) {
      return IB(c);
    })) ? b : null;
  }
  ;
  var LB = function () {
      new oB();
      RA();
      this.deviceId = "";
      this.g = this.referrer = this.ppid = null;
      KB(this);
    },
    MB = function () {
      LB.g();
      var a = "h.3.605.0";
      lB.h && (a += "/vpaid_adapter");
      return a;
    },
    KB = function (a) {
      var b = JB();
      b && b.then(function (c) {
        if (null == c) c = null;else {
          c = bf(c);
          for (var d = [], e = 0, f = 0; f < c.length; f++) {
            var g = c.charCodeAt(f);
            255 < g && (d[e++] = g & 255, g >>= 8);
            d[e++] = g;
          }
          c = Kc(d, 3);
        }
        a.g = c;
      });
    };
  LB.g = function () {
    return D(LB);
  };
  var OB = function (a) {
      a = void 0 === a ? !1 : a;
      var b = kB(lB);
      if (b && gB(b, "forceCustomPlayback") || lB.h) return !0;
      if (aw() && a) return !1;
      a = a && (aw() || bw(10)) && lB.getDisableCustomPlaybackForIOS10Plus();
      return (oc || qc) && !a || nc && (!nc || !$v(Zv, 4)) || NB() ? !0 : !1;
    },
    PB = function (a) {
      return null === a ? !1 : lB.h ? !0 : rc || aw() ? cw(a) ? aw() || bw(10) && lB.getDisableCustomPlaybackForIOS10Plus() ? !1 : !0 : !0 : nc && (!nc || !$v(Zv, 4)) || NB() ? !0 : !1;
    },
    QB = function () {
      var a = kB(lB);
      return a && gB(a, "disableOnScreenDetection") ? !1 : !Vm();
    },
    NB = function () {
      return 1 === RB() || 2 === RB();
    },
    RB = function () {
      if (I(zk)) switch (LB.g(), 0) {
        case 1:
          return 3;
        case 2:
          return 1;
      }
      return (LB.g(), LB.g(), "tvos" === (LB.g(), null)) ? 1 : Wm() ? 2 : 0;
    };
  var SB = function (a, b) {
    return 0 == a.indexOf(b) ? a.substr(b.length) : null;
  };
  function TB() {
    if (Vm()) return window.location.href;
    var a = rl(),
      b = a.h,
      c = a.g;
    a = a.j;
    var d = null;
    if (a) try {
      var e = Fv(a.url),
        f = e.j,
        g = SB(f, "/v/");
      g || (g = SB(f, "/a/"));
      if (!g) throw Error("Can not extract standalone amp url.");
      var h = SB("/" + g, "/s/"),
        k = uv(e.g);
      k.remove("amp_js_v");
      k.remove("amp_lite");
      var n = h ? Fv("https://" + h) : Fv("http://" + g);
      tv(n, k);
      d = n.toString();
    } catch (m) {
      d = null;
    }
    return d ? d : b && b.url ? b.url : c && c.url ? c.url : "";
  }
  function UB() {
    var a = nl();
    a = r(a);
    for (var b = a.next(); !b.done; b = a.next()) if (b = b.value, b.url && b.url.includes("amp=1")) return !0;
    return null != window.context ? (a = Number(window.context.ampcontextVersion), isNaN(a) ? !1 : 0 < Math.floor(a)) : null != rl().j;
  }
  function VB() {
    var a = B().location.ancestorOrigins;
    return a ? 0 < a.length ? [].concat(ka(a)).join(",") : "" : "";
  }
  ;
  function WB() {
    var a = B(),
      b = document;
    return new P(a.parent === a ? a.location.href : b.referrer);
  }
  function XB(a, b) {
    Ev(a, "url", "");
    try {
      var c = 2083 - a.toString().length - 1;
      if (0 >= c) return a.toString();
      for (var d = b.slice(0, c), e = encodeURIComponent(d), f = c; 0 < f && e.length > c;) d = b.slice(0, f--), e = encodeURIComponent(d);
      Ev(a, "url", d);
    } catch (g) {}
    return a.toString();
  }
  ;
  var W = {},
    YB = (W.creativeView = "creativeview", W.start = "start", W.midpoint = "midpoint", W.firstQuartile = "firstquartile", W.thirdQuartile = "thirdquartile", W.complete = "complete", W.mute = "mute", W.unmute = "unmute", W.pause = "pause", W.rewind = "rewind", W.resume = "resume", W.fullscreen = "fullscreen", W.exitFullscreen = "exitfullscreen", W.expand = "expand", W.collapse = "collapse", W.close = "close", W.acceptInvitation = "acceptinvitation", W.adCanPlay = "adCanPlay", W.adStarted = "adStarted", W.abandon = "abandon", W.acceptInvitationLinear = "acceptinvitationlinear", W.engagedView = "engagedview", W.instreamAdComplete = "instreamAdComplete", W.skipShown = "skipshown", W.skippableStateChanged = "skippableStateChanged", W.skip = "skip", W.progress = "progress", W.publisher_invoked_skip = "PUBLISHER_INVOKED_SKIP", W.annotation_start = "annotation_start", W.annotation_click = "annotation_click", W.annotation_close = "annotation_close", W.cta_annotation_shown = "cta_annotation_shown", W.cta_annotation_clicked = "cta_annotation_clicked", W.cta_annotation_closed = "cta_annotation_closed", W.replay = "replay", W.stop = "stop", W.autoplayDisallowed = "autoplayDisallowed", W.error = "error", W.mediaLoadTimeout = "mediaLoadTimeout", W.linearChanged = "linearChanged", W.click = "click", W.contentPauseRequested = "contentPauseRequested", W.contentResumeRequested = "contentResumeRequested", W.discardAdBreak = "discardAdBreak", W.updateAdsRenderingSettings = "updateAdsRenderingSettings", W.durationChange = "durationChange", W.expandedChanged = "expandedChanged", W.autoClose = "autoClose", W.userClose = "userClose", W.userRecall = "userRecall", W.prefetched = "prefetched", W.loaded = "loaded", W.init = "init", W.allAdsCompleted = "allAdsCompleted", W.adMetadata = "adMetadata", W.adBreakReady = "adBreakReady", W.adBreakFetchError = "adBreakFetchError", W.log = "log", W.volumeChange = "volumeChange", W.companionBackfill = "companionBackfill", W.companionInitialized = "companionInitialized", W.companionImpression = "companionImpression", W.companionClick = "companionClick", W.impression = "impression", W.interaction = "interaction", W.adProgress = "adProgress", W.adBuffering = "adBuffering", W.trackingUrlPinged = "trackingUrlPinged", W.measurable_impression = "measurable_impression", W.custom_metric_viewable = "custom_metric_viewable", W.viewable_impression = "viewable_impression", W.fully_viewable_audible_half_duration_impression = "fully_viewable_audible_half_duration_impression", W.audio_audible = "audio_audible", W.audio_measurable = "audio_measurable", W.overlay_resize = "overlay_resize", W.overlay_unmeasurable_impression = "overlay_unmeasurable_impression", W.overlay_unviewable_impression = "overlay_unviewable_impression", W.overlay_viewable_immediate_impression = "overlay_viewable_immediate_impression", W.overlay_viewable_end_of_session_impression = "overlay_viewable_end_of_session_impression", W.externalActivityEvent = "externalActivityEvent", W.adEvent = "adEvent", W.configure = "configure", W.remainingTime = "remainingTime", W.destroy = "destroy", W.resize = "resize", W.volume = "volume", W.authorIconClicked = "videoAuthorIconClicked", W.authorNameClicked = "videoAuthorClicked", W.videoClicked = "videoClicked", W.videoIconClicked = "videoIconClicked", W.learnMoreClicked = "videoLearnMoreClicked", W.muteClicked = "videoMuteClicked", W.titleClicked = "videoTitleClicked", W.videoSkipClicked = "SKIPPED", W.unmuteClicked = "videoUnmuteClicked", W.vpaidEvent = "vpaidEvent", W.show_ad = "show_ad", W.video_card_endcap_collapse = "video_card_endcap_collapse", W.video_card_endcap_dismiss = "video_card_endcap_dismiss", W.video_card_endcap_impression = "video_card_endcap_impression", W.mediaUrlPinged = "mediaUrlPinged", W.breakStart = "breakstart", W.breakEnd = "breakend", W.omidReady = "omidReady", W.omidUnavailable = "omidUnavailable", W.omidAdSessionCompleted = "omidAdSessionCompleted", W.omidAdSessionAbandoned = "omidAdSessionAbandoned", W.verificationNotExecuted = "verificationNotExecuted", W.loadStart = "loadStart", W.seeked = "seeked", W.seeking = "seeking", W);
  var ZB = new function () {
    this.g = new Map();
    this.j = 0;
    this.h = null != window.fetch;
  }();
  function $B(a) {
    var b = void 0 === b ? ZB : b;
    var c = void 0 === c ? null : c;
    a = new uw(a, c ? c : c);
    var d = void 0 === d ? !1 : d;
    var e = void 0 === e ? !1 : e;
    null != a.g || e ? Lx(b, a.url, d, e, a.g) : Lx(b, a.url, d);
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
      MB() && (b.sdkv = MB());
      this.g && (b.palv = this.g);
      a = Qi().sort().join(",");
      kb(zg(a)) || (b.e = a);
      b = aC(this, b);
      var d = new P("http://pagead2.googlesyndication.com/pagead/gen_204");
      Rf(b, function (e, f) {
        null != e && Ev(d, f, null == e ? "" : "boolean" === typeof e ? e ? "t" : "f" : "" + e);
      }, this);
      b = WB();
      qv(d, b.o);
      b = d.toString();
      a = d.g.get("url");
      null != a && Bb() && 2083 < b.length && (b = XB(d, a));
      $B(b);
    }
  };
  var aC = function (a, b) {
    b.id = "ima_html5";
    var c = WB();
    b.c = a.h;
    b.domain = c.h;
    return b;
  };
  X.g = function () {
    return D(X);
  };
  function bC(a) {
    var b = Date.now(),
      c = {};
    a = (c["x-afma-token-requester-type"] = a, c);
    c = "https://pubads.g.doubleclick.net/adsid/integrator.json?aos=" + encodeURIComponent(VB());
    return new Xw().get({
      url: c,
      withCredentials: !0,
      timeout: new rw(),
      headers: a
    }).then(function (d) {
      var e = Date.now();
      d = d.newToken || "";
      var f = {};
      X.g().report(182, (f.t = e - b, f.aos = VB(), f));
      return new cC(d);
    }).catch(function (d) {
      var e = "not instanceof Error";
      d instanceof Error && (e = vw(Number(d.message)));
      d = Date.now();
      var f = {};
      X.g().report(182, (f.except = e, f.t = d - b, f));
      return Promise.resolve(dC);
    });
  }
  var eC = function () {
    O.call(this);
    this.g = null;
    this.l = new zw(this);
    N(this, this.l);
    this.h = new Vs(72E5);
    this.j = Promise.resolve(dC);
  };
  u(eC, O);
  var fC = function (a) {
    var b = "requester_type_8";
    b = void 0 === b ? "requester_type_9" : b;
    var c = function (d) {
      a.g = d;
      return a.g;
    };
    a.j = bC(b).then(c);
    a.h = new Vs(72E5);
    a.l.O(a.h, "tick", function () {
      a.j = bC(b).then(c);
    });
    a.h.start();
    Bn(a, function () {
      a.h.stop();
    });
  };
  eC.prototype.getId = function () {
    var a = this;
    return Ha(function (b) {
      if (1 == b.g) return null != a.g && a.g !== dC ? (b.g = 2, b = void 0) : b = ya(b, a.j, 3), b;
      2 != b.g && (a.g = b.h);
      return b.return(a.g);
    });
  };
  var cC = function (a) {
      this.id = a;
    },
    dC = new cC("");
  var gC = function (a) {
    O.call(this);
    this.j = [];
    this.h = !1;
    this.sessionId = a || "goog_" + Ag++;
  };
  u(gC, O);
  gC.prototype.connect = function () {
    for (this.h = !0; 0 !== this.j.length;) {
      var a = this.j.shift();
      a && this.sendMessage(a.name, a.type, a.data);
    }
  };
  var hC = function (a, b, c, d) {
    a.h ? a.sendMessage(b, c, d) : a.j.push({
      name: b,
      type: c,
      data: d
    });
  };
  gC.prototype.sendMessage = function () {};
  var iC = function (a, b, c, d, e) {
    e = void 0 === e ? "" : e;
    Qr.call(this, a);
    this.messageType = b;
    this.ra = c;
    this.sessionId = d;
    this.origin = e;
  };
  u(iC, Qr);
  iC.prototype.toString = function () {
    return "";
  };
  var jC = {
      IMAGE: "Image",
      FLASH: "Flash",
      ALL: "All"
    },
    kC = {
      HTML: "Html",
      IFRAME: "IFrame",
      STATIC: "Static",
      ALL: "All"
    },
    lC = {
      IGNORE: "IgnoreSize",
      SELECT_EXACT_MATCH: "SelectExactMatch",
      SELECT_NEAR_MATCH: "SelectNearMatch",
      SELECT_FLUID: "SelectFluid"
    },
    mC = function () {
      this.allowCustom = !0;
      this.creativeType = this.resourceType = "All";
      this.sizeCriteria = "SelectExactMatch";
      this.nearMatchPercent = 90;
      this.adSlotIds = [];
    };
  x("module$exports$google3$javascript$ads$interactivemedia$sdk$clientside$api$companion_ad_selection_settings.CompanionAdSelectionSettings.CreativeType", jC);
  x("module$exports$google3$javascript$ads$interactivemedia$sdk$clientside$api$companion_ad_selection_settings.CompanionAdSelectionSettings.ResourceType", kC);
  x("module$exports$google3$javascript$ads$interactivemedia$sdk$clientside$api$companion_ad_selection_settings.CompanionAdSelectionSettings.SizeCriteria", lC);
  var oC = function (a, b) {
      b = void 0 === b ? new mC() : b;
      this.g = a;
      this.settings = b ? b : new mC();
      this.resourceType = nC(kC, this.settings.resourceType) ? this.settings.resourceType : "All";
      this.creativeType = nC(jC, this.settings.creativeType) ? this.settings.creativeType : "All";
      this.sizeCriteria = nC(lC, this.settings.sizeCriteria) ? this.settings.sizeCriteria : "SelectExactMatch";
      this.adSlotIds = null != this.settings.adSlotIds ? this.settings.adSlotIds : [];
      this.nearMatchPercent = "number" === typeof this.settings.nearMatchPercent && 0 < this.settings.nearMatchPercent && 100 >= this.settings.nearMatchPercent ? this.settings.nearMatchPercent : 90;
    },
    rC = function (a, b) {
      var c = [];
      b.forEach(function (d) {
        a.settings.allowCustom && (!kb(d.getContent()) && (isNaN(d.data.sequenceNumber) || isNaN(d.data.mainAdSequenceNumber) || d.data.mainAdSequenceNumber === d.data.sequenceNumber) && pC(a, d) ? c.push(d) : (d = qC(a, d), null != d && !kb(d.getContent()) && c.push(d)));
      });
      return c;
    };
  oC.prototype.fe = function () {
    return this.resourceType;
  };
  var pC = function (a, b) {
      var c;
      if (c = "Flash" !== b.getContentType()) {
        if (c = "All" === a.resourceType || a.resourceType === b.fe()) c = b.getContentType(), c = null == c ? !0 : "All" === a.creativeType || a.creativeType === c;
        c && (c = b.getAdSlotId(), c = 0 === a.adSlotIds.length ? !0 : null != c ? a.adSlotIds.includes(c) : !1);
      }
      if (c) {
        if (c = b.getSize(), (b = !!b.data.fluidSize) || a.g.de) a = b && a.g.de;else if ((b = "IgnoreSize" === a.sizeCriteria) || (b = a.g.size, b = b == c ? !0 : b && c ? b.width == c.width && b.height == c.height : !1), b) a = !0;else {
          if (b = "SelectNearMatch" === a.sizeCriteria) b = c.width, c = c.height, b = b > a.g.size.width || c > a.g.size.height || b < a.nearMatchPercent / 100 * a.g.size.width || c < a.nearMatchPercent / 100 * a.g.size.height ? !1 : !0;
          a = b;
        }
      } else a = !1;
      return a;
    },
    qC = function (a, b) {
      b = sC(b);
      return null == b ? null : b.find(function (c) {
        return pC(a, c);
      }) || null;
    },
    nC = function (a, b) {
      return null != b && Zf(a, b);
    };
  var tC = function (a, b) {
    this.message = a;
    this.errorCode = b;
  };
  tC.prototype.getErrorCode = function () {
    return this.errorCode;
  };
  tC.prototype.getMessage = function () {
    return this.message;
  };
  var uC = new tC("Failed to initialize ad playback element before starting ad playback.", 400),
    vC = new tC("The provided {0} information: {1} is invalid.", 1101);
  function wC(a, b) {
    var c = void 0 === b ? null : b;
    var d = Ia.apply(2, arguments);
    if (!(c instanceof cB)) {
      var e = a.getErrorCode(),
        f = a.getMessage();
      if (0 < d.length) for (var g = 0; g < d.length; g++) f = f.replace(new RegExp("\\{" + g + "\\}", "ig"), d[g]);
      d = new cB("adPlayError", f, e);
      d.g = c;
      c = d;
    }
    return c;
  }
  ;
  var xC = function () {};
  xC.g = function () {
    throw Error("Must be overridden");
  };
  var yC = function () {
    this.g = 0;
  };
  u(yC, xC);
  yC.nb = void 0;
  yC.g = function () {
    return yC.nb ? yC.nb : yC.nb = new yC();
  };
  function zC(a, b, c, d) {
    c = void 0 === c ? null : c;
    d = void 0 === d ? {} : d;
    var e = yC.g();
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
          n = k.defineProperty,
          m = void 0;
        m = void 0 === m ? Math.random : m;
        var q = Math.floor(m() * Math.pow(2, 52));
        n.call(k, h, "goog_pvsid", {
          value: q,
          configurable: !1
        });
      } catch (t) {}
      e.pc = a(Number(h.goog_pvsid) || -1);
      e.em = c;
      e.lid = b;
      D(It);
      Th(g.call(f, {}, (e.eids = "", e), d), "esp");
    }
  }
  ;
  function AC() {
    var a = window;
    var b = void 0 === b ? function () {} : b;
    return new Promise(function (c) {
      var d = function () {
        c(b());
        Pf(a, "load", d);
      };
      Of(a, "load", d);
    });
  }
  ;
  var BC = function () {
      this.cache = {};
    },
    DC = function () {
      CC || (CC = new BC());
      return CC;
    },
    EC = function (a) {
      var b = Re(a, 3);
      if (!b) return 3;
      if (void 0 === Se(a, 2)) return 4;
      a = Date.now();
      return a > b + 2592E5 ? 2 : a > b + 432E5 ? 1 : 0;
    };
  BC.prototype.get = function (a, b) {
    if (this.cache[a]) return {
      Bb: this.cache[a],
      success: !0
    };
    var c = "";
    try {
      c = b.getItem("_GESPSK-" + a);
    } catch (g) {
      var d;
      zC(6, a, null == (d = g) ? void 0 : d.message);
      return {
        Bb: null,
        success: !1
      };
    }
    if (!c) return {
      Bb: null,
      success: !0
    };
    try {
      var e = zt(c);
      this.cache[a] = e;
      return {
        Bb: e,
        success: !0
      };
    } catch (g) {
      var f;
      zC(5, a, null == (f = g) ? void 0 : f.message);
      return {
        Bb: null,
        success: !1
      };
    }
  };
  BC.prototype.set = function (a, b) {
    var c = Se(a, 1),
      d = "_GESPSK-" + c;
    yt(a);
    try {
      b.setItem(d, bf(a));
    } catch (f) {
      var e;
      zC(7, c, null == (e = f) ? void 0 : e.message);
      return !1;
    }
    this.cache[c] = a;
    return !0;
  };
  BC.prototype.remove = function (a, b) {
    a = Se(a, 1);
    try {
      b.removeItem("_GESPSK-" + a), delete this.cache[a];
    } catch (d) {
      var c;
      zC(8, a, null == (c = d) ? void 0 : c.message);
    }
  };
  var CC = null;
  var FC = function () {
    var a = {};
    this.h = function (b, c) {
      return null != a[b] ? a[b] : c;
    };
    this.j = function () {
      var b = Hu.g,
        c = Hu.defaultValue;
      return null != a[b] ? a[b] : c;
    };
    this.g = function (b, c) {
      return null != a[b] ? a[b] : c;
    };
  };
  function GC(a) {
    return D(FC).h(a.g, a.defaultValue);
  }
  ;
  var HC = function (a) {
    M.call(this);
    this.l = a;
    this.h = [];
    this.g = [];
    this.j = [];
    this.o = [];
  };
  u(HC, M);
  var IC = function (a, b) {
    a.g.push({
      dc: !1,
      Oa: b
    });
    GC(Ku) && b.Wc(a.l);
  };
  HC.prototype.L = function () {
    this.h.length = 0;
    this.j.length = 0;
    if (GC(Ku)) for (var a = r(this.g), b = a.next(); !b.done; b = a.next()) b.value.Oa.hc.length = 0;
    this.g.length = 0;
    this.o.length = 0;
    M.prototype.L.call(this);
  };
  var JC = function () {
    var a = this;
    this.promise = new Promise(function (b, c) {
      a.resolve = b;
      a.reject = c;
    });
  };
  var KC = function (a) {
    a = Error.call(this, a);
    this.message = a.message;
    "stack" in a && (this.stack = a.stack);
    Object.setPrototypeOf(this, KC.prototype);
    this.name = "InputError";
  };
  u(KC, Error);
  var LC = function () {
      this.fb = !1;
    },
    MC = function () {
      LC.apply(this, arguments);
      this.hc = [];
      this.Lc = new JC();
    };
  u(MC, LC);
  var OC = function (a, b) {
      a.fb || (a.fb = !0, a.Tb = b, a.Lc.resolve(b), GC(Ku) && NC(a));
    },
    NC = function (a) {
      for (var b = r(a.hc), c = b.next(); !c.done; c = b.next()) c = c.value, c(a.Tb);
      a.hc.length = 0;
    };
  MC.prototype.Wc = function (a) {
    GC(Ku) && this.hc.push(a);
  };
  da.Object.defineProperties(MC.prototype, {
    promise: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return this.Lc.promise;
      }
    },
    Vb: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return this.fb;
      }
    },
    error: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return this.td;
      }
    }
  });
  var PC = function () {
    MC.apply(this, arguments);
  };
  u(PC, MC);
  var QC = function (a, b) {
      OC(a, b);
    },
    RC = function (a, b) {
      b.then(function (c) {
        OC(a, c);
      });
    };
  PC.prototype.ib = function (a) {
    this.fb || (this.fb = !0, this.Tb = null, this.td = a, this.Lc.reject(a), GC(Ku) && NC(this));
  };
  var SC = function (a) {
    this.fb = !1;
    this.g = a;
  };
  u(SC, LC);
  SC.prototype.Vb = function () {
    return this.g.fb;
  };
  da.Object.defineProperties(SC.prototype, {
    error: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return this.g.td;
      }
    }
  });
  var TC = function (a) {
    SC.call(this, a);
    this.g = a;
  };
  u(TC, SC);
  da.Object.defineProperties(TC.prototype, {
    value: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return this.g.Tb;
      }
    }
  });
  var UC = function (a) {
    SC.call(this, a);
    this.g = a;
  };
  u(UC, SC);
  da.Object.defineProperties(UC.prototype, {
    value: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        var a;
        return null != (a = this.g.Tb) ? a : null;
      }
    }
  });
  var VC = function () {
    MC.apply(this, arguments);
  };
  u(VC, MC);
  VC.prototype.notify = function () {
    OC(this, null);
  };
  function WC(a, b, c) {
    var d, e, f, g, h;
    return Ha(function (k) {
      if (1 == k.g) return d = c ? a.filter(function (n) {
        return !n.dc;
      }) : a, ya(k, Promise.all(d.map(function (n) {
        return n.Oa.promise;
      })), 2);
      if (a.length === d.length) return k.return();
      e = a.filter(function (n) {
        return n.dc;
      });
      if (GC(Lu)) {
        f = r(b);
        for (g = f.next(); !g.done; g = f.next()) h = g.value, h.g();
        return ya(k, Promise.all(e.map(function (n) {
          return n.Oa.promise;
        })), 0);
      }
      return ya(k, Promise.race([Promise.all(e.map(function (n) {
        return n.Oa.promise;
      })), new Promise(function (n) {
        return void setTimeout(n, c);
      })]), 0);
    });
  }
  var YC = function (a, b, c) {
    M.call(this);
    var d = this;
    this.id = a;
    this.timeoutMs = b;
    this.o = c;
    this.G = this.F = this.D = this.l = !1;
    this.g = new HC(function () {
      XC(d);
    });
    N(this, this.g);
  };
  u(YC, M);
  YC.prototype.start = function () {
    var a = this,
      b;
    return Ha(function (c) {
      if (1 == c.g) {
        if (a.l) return c.return();
        a.l = !0;
        c.j = 2;
        return ya(c, WC(a.g.g, a.g.o, a.timeoutMs), 4);
      }
      if (2 != c.g) {
        if (!a.xa()) {
          for (var d = 0, e = r(a.g.j), f = e.next(); !f.done; f = e.next()) {
            if (null == f.value.g.Tb) throw Error("missing input: " + a.id + "/" + d);
            ++d;
          }
          a.h();
        }
        return za(c);
      }
      b = Aa(c);
      if (a.xa()) return c.return();
      !(b instanceof KC) && b instanceof Error && (a.o ? a.o(a.id, b) : a.A(a.id, b), ZC(a, b));
      c.g = 0;
    });
  };
  var XC = function (a) {
      if (!a.l && a.D) try {
        var b = a.g.g,
          c = a.timeoutMs ? b.filter(function (k) {
            return !k.dc;
          }) : b,
          d = b.filter(function (k) {
            return k.dc;
          }),
          e,
          f = null == (e = b.find(function (k) {
            return void 0 !== k.Oa.error;
          })) ? void 0 : e.Oa.error;
        if (f) throw a.l = !0, f;
        if (!c.some(function (k) {
          return !k.Oa.Vb;
        })) {
          if (d.length) if (GC(Lu)) {
            for (var g = r(a.g.o), h = g.next(); !h.done; h = g.next()) h.value.g();
            if (d.some(function (k) {
              return !k.Oa.Vb;
            })) return;
          } else if (a.F || (a.F = !0, setTimeout(function () {
            a.G = !0;
            XC(a);
          }, a.timeoutMs)), d.some(function (k) {
            return !k.Oa.Vb;
          }) && !a.G) return;
          a.l = !0;
          a.h();
        }
      } catch (k) {
        !(a.xa() || k instanceof KC) && k instanceof Error && (a.o ? a.o(a.id, k) : a.A(a.id, k), ZC(a, k));
      }
    },
    $C = function (a) {
      var b = void 0 === b ? new PC() : b;
      a.g.h.push(b);
      return b;
    },
    aD = function (a) {
      var b = void 0 === b ? new VC() : b;
      a.g.h.push(b);
      return b;
    },
    bD = function (a, b) {
      IC(a.g, b);
      b = new TC(b);
      a.g.j.push(b);
      return b;
    },
    cD = function (a, b) {
      IC(a.g, b);
      return new UC(b);
    },
    ZC = function (a, b) {
      if (!a.o && a.g.h.length) {
        b = new KC(b.message);
        a = r(a.g.h);
        for (var c = a.next(); !c.done; c = a.next()) if (c = c.value, !c.Vb) {
          var d = b;
          c.fb = !0;
          c.td = d;
          c.Lc.reject(d);
          GC(Ku) && NC(c);
        }
      }
    };
  var dD = function (a, b) {
    YC.call(this, a);
    this.id = a;
    this.A = b;
  };
  u(dD, YC);
  function eD(a, b) {
    return Oe(a, wt, 2).some(function (c) {
      return Se(c, 1) === b && null != Se(c, 2);
    });
  }
  ;
  function fD(a) {
    var b = new Ct();
    if (a) {
      var c = [],
        d = RegExp("^_GESPSK-(.+)$");
      try {
        for (var e = 0; e < a.length; e++) {
          var f = (d.exec(a.key(e)) || [])[1];
          f && c.push(f);
        }
      } catch (n) {}
      c = r(c);
      e = c.next();
      for (d = {}; !e.done; d = {
        Mb: d.Mb
      }, e = c.next()) if (d.Mb = e.value, (f = DC().get(d.Mb, a).Bb) && !eD(b, d.Mb) && (e = EC(f), 2 !== e && 3 !== e)) {
        Fe(f, 9, Vd(!1));
        e = Se(f, 2);
        var g = wt,
          h = b.P,
          k = zd(h);
        Qd(k);
        h = Ne(h, k, g, 2, 2);
        f = null != f ? f : new g();
        h.push(f);
        vd(f.P) & 2 ? xd(h, 8) : xd(h, 16);
        f = {};
        zC(19, d.Mb, null, (f.hs = e ? "1" : "0", f));
      }
    }
    if (!Oe(b, wt, 2).length) return null;
    zC(50, "");
    return Kc(b.g(), 3);
  }
  ;
  var gD = {};
  var hD = function () {
    M.call(this);
    this.o = [];
    this.A = [];
    this.l = {};
    this.g = [];
    this.h = new JC();
    this.j = {};
  };
  u(hD, M);
  var iD = function (a, b) {
      N(a, b);
      a.o.push(b);
    },
    jD = function (a, b) {
      b = r(b);
      for (var c = b.next(); !c.done; c = b.next()) iD(a, c.value);
    },
    kD = function (a) {
      var b, c, d, e, f, g, h, k, n, m, q, t;
      Ha(function (w) {
        switch (w.g) {
          case 1:
            if (!a.g.length) {
              w.g = 2;
              break;
            }
            return ya(w, Promise.all(a.g.map(function (A) {
              return A.h.promise;
            })), 2);
          case 2:
            b = r(a.o);
            for (c = b.next(); !c.done; c = b.next()) d = c.value, GC(Ku) ? (d.D = !0, XC(d)) : d.start();
            e = r(a.A);
            for (f = e.next(); !f.done; f = e.next()) g = f.value, kD(g);
            if (!a.j) {
              w.g = 4;
              break;
            }
            h = Object.keys(a.j);
            if (!h.length) {
              w.g = 4;
              break;
            }
            return ya(w, Promise.all(Object.values(a.j).map(function (A) {
              return A.promise;
            })), 6);
          case 6:
            for (k = w.h, n = 0, m = r(h), q = m.next(); !q.done; q = m.next()) t = q.value, a.l[t] = k[n++];
          case 4:
            return a.h.resolve(a.l), w.return(a.h.promise);
        }
      });
    };
  hD.prototype.L = function () {
    M.prototype.L.call(this);
    this.o.length = 0;
    this.A.length = 0;
    this.g.length = 0;
  };
  var lD = function (a, b, c, d) {
    dD.call(this, 1041, d);
    this.storage = b;
    this.B = bD(this, a);
    c && (this.j = cD(this, c));
  };
  u(lD, dD);
  lD.prototype.h = function () {
    var a = this.B.value,
      b,
      c,
      d = null != (c = this.storage) ? c : null == (b = this.j) ? void 0 : b.value;
    d && DC().set(a, d) && null != Se(a, 2) && zC(27, Se(a, 1));
  };
  var mD = function (a, b) {
    dD.call(this, 1094, b);
    this.j = aD(this);
    this.B = bD(this, a);
  };
  u(mD, dD);
  mD.prototype.h = function () {
    var a = this.B.value;
    if (a) {
      if (void 0 !== a) for (var b = r(Object.keys(a)), c = b.next(); !c.done; c = b.next()) if (c = c.value, c.startsWith("_GESPSK")) try {
        a.removeItem(c);
      } catch (d) {}
      CC = new BC();
      this.j.notify();
    }
  };
  var nD = function (a, b) {
    dD.call(this, 1048, b);
    this.j = $C(this);
    this.B = $C(this);
    this.H = bD(this, a);
  };
  u(nD, dD);
  nD.prototype.h = function () {
    var a = this.H.value,
      b = function (c) {
        var d = {};
        zC(c, Se(a, 1), null, (d.tic = String(Math.round((Date.now() - Re(a, 3)) / 6E4)), d));
      };
    switch (EC(a)) {
      case 0:
        b(24);
        break;
      case 1:
        b(25);
        OC(this.B, a);
        break;
      case 2:
        b(26);
        OC(this.j, a);
        break;
      case 3:
        zC(9, Se(a, 1));
        OC(this.j, a);
        break;
      case 4:
        b(23), OC(this.j, a);
    }
  };
  var oD = function (a, b, c) {
    dD.call(this, 1027, c);
    this.kc = a;
    this.storage = b;
    this.j = $C(this);
    this.B = $C(this);
  };
  u(oD, dD);
  oD.prototype.h = function () {
    var a = DC().get(this.kc, this.storage).Bb;
    if (!a) {
      a = yt(xt(this.kc));
      var b = a.ib(ut(100));
      OC(this.B, b);
    }
    OC(this.j, a);
  };
  var pD = function (a, b, c) {
    dD.call(this, 1046, c);
    this.output = aD(this);
    this.j = $C(this);
    this.B = bD(this, b);
    IC(this.g, a);
  };
  u(pD, dD);
  pD.prototype.h = function () {
    OC(this.j, this.B.value);
  };
  var qD = function (a, b, c) {
    dD.call(this, 1047, c);
    this.collectorFunction = a;
    this.j = $C(this);
    this.B = $C(this);
    this.H = $C(this);
    this.J = bD(this, b);
  };
  u(qD, dD);
  qD.prototype.h = function () {
    var a = this,
      b = this.J.value,
      c = Se(b, 1);
    zC(18, c);
    try {
      var d = ai();
      this.collectorFunction().then(function (e) {
        zC(29, c, null, {
          delta: String(ai() - d)
        });
        var f = Ze(b, 2, e);
        OC(a.j, f);
        OC(a.H, null != e ? e : null);
      }).catch(function (e) {
        zC(28, c, rD(e));
        e = b.ib(ut(106));
        OC(a.B, e);
      });
    } catch (e) {
      zC(1, c, rD(e)), QC(this.B, b.ib(ut(107)));
    }
  };
  function rD(a) {
    return "string" === typeof a ? a : a instanceof Error ? a.message : null;
  }
  ;
  var sD = function (a, b) {
    dD.call(this, 1028, b);
    this.j = $C(this);
    this.B = bD(this, a);
  };
  u(sD, dD);
  sD.prototype.h = function () {
    var a = this.B.value,
      b = Se(a, 1);
    null != Re(a, 3) || zC(35, b);
    OC(this.j, a);
  };
  var tD = function (a, b, c, d, e) {
    dD.call(this, 1050, e);
    this.J = c;
    this.H = d;
    this.j = $C(this);
    this.B = bD(this, a);
    this.M = cD(this, b);
  };
  u(tD, dD);
  tD.prototype.h = function () {
    var a = this.B.value,
      b = Se(a, 1),
      c = this.M.value;
    if (null == c) zC(41, b), a.ib(ut(111)), OC(this.j, a);else if ("string" !== typeof c) zC(21, b), a = a.ib(ut(113)), OC(this.j, a);else {
      if (c.length > (/^(\d+)$/.test(b) ? this.H : this.J)) {
        var d = {};
        zC(12, b, null, (d.sl = String(c.length), d));
        b = a.ib(ut(108));
        Fe(b, 2);
      } else c.length || zC(20, b), Fe(a, 10);
      OC(this.j, a);
    }
  };
  var uD = function (a) {
    dD.call(this, 1046, a);
    this.output = aD(this);
  };
  u(uD, dD);
  uD.prototype.h = function () {
    var a = this;
    AC().then(function () {
      a.output.notify();
    });
  };
  function vD(a, b, c, d, e) {
    var f, g, h, k, n, m, q, t, w, A, F, Za, Ta;
    return Ha(function (ha) {
      return 1 == ha.g ? (f = new hD(), g = new oD(a, c, e), iD(f, g), iD(f, new lD(g.B, void 0, d, e)), h = new sD(g.j, e), iD(f, h), k = new nD(h.j, e), iD(f, k), n = new qD(b, k.j, e), iD(f, n), iD(f, new lD(n.B, void 0, d, e)), m = new tD(n.j, n.H, 300, 1E3, e), iD(f, m), iD(f, new lD(m.j, void 0, d, e)), q = new uD(e), iD(f, q), t = new pD(q.output, k.B, e), iD(f, t), w = new qD(b, t.j, e), iD(f, w), A = new lD(w.j, void 0, d, e), iD(f, A), kD(f), Ta = a, ya(ha, m.j.promise, 2)) : ha.return({
        id: Ta,
        collectorGeneratedData: null != (Za = null == (F = ha.h) ? void 0 : Se(F, 2)) ? Za : null
      });
    });
  }
  ;
  var wD = function (a, b, c, d) {
    dD.call(this, 1059, d);
    this.J = b;
    this.H = c;
    this.j = $C(this);
    this.M = bD(this, a);
    this.B = cD(this, c);
  };
  u(wD, dD);
  wD.prototype.h = function () {
    var a = this.B.value;
    if (a) {
      var b = this.M.value,
        c = b.id,
        d = b.collectorFunction,
        e;
      b = null != (e = b.networkCode) ? e : c;
      c = {};
      zC(42, b, null, (c.ea = String(Number(this.J)), c));
      RC(this.j, vD(b, d, a, this.H, this.A));
    }
  };
  var xD = function (a, b) {
    dD.call(this, 1057, b);
    this.j = a;
    this.B = $C(this);
    this.H = $C(this);
  };
  u(xD, dD);
  xD.prototype.h = function () {
    if (this.j) {
      if ("object" !== typeof this.j) zC(46, "UNKNOWN_COLLECTOR_ID"), yD(this, "UNKNOWN_COLLECTOR_ID", 112);else {
        var a = this.j.id,
          b = this.j.networkCode;
        a && b && (delete this.j.id, zC(47, a + ";" + b));
        a = null != b ? b : a;
        "string" !== typeof a ? (b = {}, zC(37, "INVALID_COLLECTOR_ID", null, (b.ii = JSON.stringify(a), b)), yD(this, "INVALID_COLLECTOR_ID", 102)) : "function" !== typeof this.j.collectorFunction ? (zC(14, a), yD(this, a, 105)) : D(FC).g(Ju.g, Ju.defaultValue).includes(a) ? (zC(22, a), yD(this, a, 104)) : OC(this.H, this.j);
      }
    } else zC(39, "UNKNOWN_COLLECTOR_ID"), yD(this, "UNKNOWN_COLLECTOR_ID", 110);
  };
  var yD = function (a, b, c) {
    b = xt(b).ib(ut(c));
    OC(a.B, b);
  };
  var zD = function (a, b, c, d, e) {
    var f = document;
    f = void 0 === f ? document : f;
    e = void 0 === e ? gD : e;
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
  zD.prototype.push = function (a) {
    var b = this;
    this.j || this.K();
    var c = function (f, g) {
      return void AD(b, f, g);
    };
    a = new xD(a, c);
    var d = new lD(a.B, void 0, this.g, c);
    c = new wD(a.H, this.j, this.g, c, this.I);
    var e = new hD();
    jD(e, [a, d, c]);
    kD(e);
    a = c.j.promise;
    this.B.push(a);
    d = r(this.A);
    for (c = d.next(); !c.done; c = d.next()) a.then(c.value);
  };
  zD.prototype.addOnSignalResolveCallback = function (a) {
    this.A.push(a);
    for (var b = r(this.B), c = b.next(); !c.done; c = b.next()) c.value.then(a);
  };
  zD.prototype.addErrorHandler = function (a) {
    this.l.push(a);
  };
  zD.prototype.clearAllCache = function () {
    var a = this,
      b = this.o.currentScript instanceof HTMLScriptElement ? this.o.currentScript.src : "";
    if (1 === this.h) {
      var c = {};
      zC(49, "", null, (c.url = b, c));
    } else if (c = String(vh(null != b ? b : "")), D(FC).g(Iu.g, Iu.defaultValue).includes(c)) c = {}, zC(48, "", null, (c.url = b, c));else {
      var d = new hD();
      c = new mD(this.g, function (e, f) {
        return void AD(a, e, f);
      });
      iD(d, c);
      kD(d);
      this.h = 1;
      setTimeout(function () {
        a.h = 0;
      }, 1E3 * D(FC).j());
      d = {};
      zC(43, "", null, (d.url = b, d));
      return c.j.promise;
    }
  };
  var AD = function (a, b, c) {
      a = r(a.l);
      for (var d = a.next(); !d.done; d = a.next()) d = d.value, d(b, c);
    },
    BD = function (a) {
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
  function CD(a, b, c, d, e, f) {
    f = void 0 === f ? gD : f;
    rh() !== sh() ? zC(16, "") : DD(a, "encryptedSignalProviders", c, e) && DD(a, "secureSignalProviders", c, e) || (zC(38, ""), ED(a, "encryptedSignalProviders", b, f, c, d, e), ED(a, "secureSignalProviders", b, f, c, function () {}, e));
  }
  function DD(a, b, c, d) {
    if (void 0 === a[b] || a[b] instanceof Array) return !1;
    a = a[b];
    d && a.addOnSignalResolveCallback(d);
    a.addErrorHandler(c);
    return !0;
  }
  function ED(a, b, c, d, e, f, g) {
    var h,
      k = new zD(null != (h = a[b]) ? h : [], c, "secureSignalProviders" === b, f, d);
    a[b] = new BD(k);
    g && k.addOnSignalResolveCallback(g);
    k.addErrorHandler(e);
  }
  function FD(a, b, c, d, e) {
    var f = void 0 === f ? gD : f;
    var g = new PC();
    OC(g, b);
    CD(a, g, c, d, e, f);
  }
  function GD(a, b, c, d) {
    var e = HD,
      f = new Map();
    b = b.map(function (g) {
      var h = g.kc;
      return new Promise(function (k) {
        f.set(h, k);
      });
    });
    FD(a, c, d, e, function (g) {
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
  function ID() {
    var a;
    return null != (a = v.googletag) ? a : v.googletag = {
      cmd: []
    };
  }
  ;
  function JD(a) {
    if (!a || rB(a)) return null;
    try {
      return window.localStorage;
    } catch (b) {
      return null;
    }
  }
  function KD(a, b) {
    (a = JD(a)) && FD(ID(), a, function () {}, HD, b);
  }
  function LD(a, b) {
    return (b = JD(b)) && 0 !== a.length ? GD(ID(), a, b, function () {}) : null;
  }
  function HD() {}
  ;
  function MD(a, b, c, d) {
    var e = new JC(),
      f = "",
      g = function (k) {
        try {
          var n = "object" === typeof k.data ? k.data : JSON.parse(k.data);
          f === n.paw_id && (Pf(a, "message", g), n.error ? e.reject(Error(n.error)) : e.resolve(d(n)));
        } catch (m) {}
      },
      h = ND(a);
    return h ? (Of(a, "message", g), f = c(h), e.promise) : (c = OD(a)) ? (f = String(Math.floor(2147483647 * th())), Of(a, "message", g), b(c, f), e.promise) : null;
  }
  function PD(a) {
    return MD(a, function (b, c) {
      var d, e;
      return void (null == (d = null != (e = b.getGmaQueryInfo) ? e : b.getGmaSig) ? void 0 : d.postMessage(c));
    }, function (b) {
      return b.getQueryInfo();
    }, function (b) {
      return b.signal;
    });
  }
  function QD() {
    var a = window;
    return !!ND(a) || !!OD(a);
  }
  function ND(a) {
    var b;
    if ("function" === typeof (null == (b = a.gmaSdk) ? void 0 : b.getQueryInfo)) return a.gmaSdk;
  }
  function OD(a) {
    var b, c, d, e, f, g;
    if ("function" === typeof (null == (b = a.webkit) ? void 0 : null == (c = b.messageHandlers) ? void 0 : null == (d = c.getGmaQueryInfo) ? void 0 : d.postMessage) || "function" === typeof (null == (e = a.webkit) ? void 0 : null == (f = e.messageHandlers) ? void 0 : null == (g = f.getGmaSig) ? void 0 : g.postMessage)) return a.webkit.messageHandlers;
  }
  ;
  var SD = function () {
      this.timeoutMs = RD;
      this.h = PD;
      this.signal = null;
      this.g = 0;
    },
    TD = function () {
      return I(mk) && nc || I(kk) && (rc || aw());
    },
    UD = function (a) {
      if (QD()) {
        if (I(nk) || I(lk) && nc || I(jk) && (rc || aw())) return Promise.resolve("0");
        if (I(ok) || TD()) {
          var b;
          return (null != (b = a.h(window)) ? b : Promise.resolve(null)).catch(function () {
            return "0";
          });
        }
      }
      return Promise.resolve(null);
    },
    WD = function (a) {
      var b;
      return Ha(function (c) {
        if (1 == c.g) {
          if (!TD()) return c.return(VD(a));
          b = Date.now() - a.g;
          !a.signal || 3E5 < b ? c = ya(c, VD(a), 3) : (c.g = 2, c = void 0);
          return c;
        }
        2 != c.g && (a.signal = c.h, a.g = Date.now());
        return c.return(a.signal);
      });
    },
    VD = function (a) {
      return Promise.race([UD(a).then(function (b) {
        if (null == b) return null;
        a.signal = 1E4 < b.length ? "0" : b;
        a.g = Date.now();
        return a.signal;
      }), Xs(a.timeoutMs)]);
    };
  function Ai(a, b) {
    return b instanceof RegExp ? "__REGEXP" + b.toString() : b;
  }
  function XD(a, b) {
    return b && 0 === b.toString().indexOf("__REGEXP") ? (a = b.split("__REGEXP")[1].match(/\/(.*)\/(.*)?/), new RegExp(a[1], a[2] || "")) : b;
  }
  var YD = function (a, b) {
    gC.call(this, b);
    this.l = a;
    this.g = null;
    this.A = new zw(this);
    this.A.O(B(), "message", this.B);
  };
  u(YD, gC);
  var ZD = function (a) {
    if (null == a || "string" !== typeof a || !a.startsWith("ima://")) return null;
    a = a.substr(6);
    try {
      return JSON.parse(a, XD);
    } catch (b) {
      return null;
    }
  };
  YD.prototype.sendMessage = function (a, b, c) {
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
      Ci(new Bi(), f, a);
      e.call(d, "ima://" + a.join(""), "*");
    }
    null != this.g && null == this.g.postMessage && X.g().report(11);
  };
  YD.prototype.L = function () {
    An(this.A);
    this.g = null;
    gC.prototype.L.call(this);
  };
  YD.prototype.B = function (a) {
    a = a.g;
    var b = ZD(a.data);
    if ($D(this, b)) {
      if (null === this.g) this.g = a.source, this.h || this.connect();else if (this.g !== a.source) return;
      $D(this, b) && this.dispatchEvent(new iC(b.name, b.type, b.data || {}, b.sid, a.origin));
    }
  };
  var $D = function (a, b) {
    if (null == b) return !1;
    var c = b.channel;
    if (null == c || c !== a.l) return !1;
    b = b.sid;
    return null == b || "*" !== a.sessionId && b !== a.sessionId ? !1 : !0;
  };
  var aE = function () {
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
    this.H = new zw(this);
    N(this, this.H);
  };
  u(aE, O);
  var cE = function (a, b) {
      null == b || a.F || (a.g = b, bE(a), a.F = !0);
    },
    eE = function (a) {
      null != a.g && a.F && (dE(a), a.F = !1, a.D = !1, a.A = !1, a.h = 0, a.l = [], a.B = !1);
    },
    bE = function (a) {
      dE(a);
      !(a.g instanceof O) && "ontouchstart" in document.documentElement && rc ? (a.G = {
        touchstart: function (b) {
          a.D = !0;
          a.h = b.touches.length;
          a.j && (window.clearTimeout(a.j), a.j = 0, a.J = !0);
          a.B = fE(a, b.touches) || 1 !== b.touches.length;
          a.B ? (a.M = Infinity, a.U = Infinity) : (a.M = b.touches[0].clientX, a.U = b.touches[0].clientY);
          b = b.touches;
          a.l = [];
          for (var c = 0; c < b.length; c++) a.l.push(b[c].identifier);
        },
        touchmove: function (b) {
          a.h = b.touches.length;
          if (!bw(8) || Math.pow(b.changedTouches[0].clientX - a.M, 2) + Math.pow(b.changedTouches[0].clientY - a.U, 2) > Math.pow(5, 2)) a.A = !0;
        },
        touchend: function (b) {
          return void gE(a, b);
        }
      }, Rf(a.G, function (b, c) {
        a.g.addEventListener(c, b, !1);
      })) : a.H.O(a.g, "click", a.V);
    },
    dE = function (a) {
      a.H.rb(a.g, "click", a.V);
      Rf(a.G, function (b, c) {
        this.g.removeEventListener(c, b, !1);
      }, a);
      a.G = {};
    },
    gE = function (a, b) {
      !a.D || 1 !== a.h || a.A || a.J || a.B || !fE(a, b.changedTouches) || (a.j = window.setTimeout(function () {
        return void hE(a);
      }, 300));
      a.h = b.touches.length;
      0 === a.h && (a.D = !1, a.A = !1, a.l = []);
      a.J = !1;
    };
  aE.prototype.V = function () {
    hE(this);
  };
  var fE = function (a, b) {
      for (var c = 0; c < b.length; c++) if (a.l.includes(b[c].identifier)) return !0;
      return !1;
    },
    hE = function (a) {
      a.j = 0;
      a.dispatchEvent(new Qr("click"));
    };
  aE.prototype.L = function () {
    eE(this);
    O.prototype.L.call(this);
  };
  var iE = RA().toString();
  function jE(a) {
    return "number" === typeof a ? a.toString() : "";
  }
  ;
  var kE = function () {
      this.g = new JC();
      this.j = new Xw();
      this.h = !1;
    },
    mE = function (a) {
      if (!a.h) if (a.h = !0, I(Dk) || I(Ck)) {
        var b = lE();
        b && a.j.get({
          url: b,
          timeout: new rw()
        }).then(function (c) {
          c = JSON.stringify(c);
          a.g.resolve(rt(c));
        }).catch(function (c) {
          X.g().report(186, {
            errorCode: c.errorCode,
            httpStatus: c.g
          }, !0);
          a.g.resolve(null);
        });
      } else a.g.resolve(null);
    };
  kE.prototype.getConfig = function () {
    this.h || mE(this);
    return this.g.promise;
  };
  var lE = function () {
      var a = I(Ck) ? sl() : I(Dk) ? TB() : null;
      return a ? Ev(new P("https://securepubads.g.doubleclick.net/pagead/ppub_config"), "ippd", a).toString() : null;
    },
    nE = new kE();
  var oE = "abort canplay canplaythrough durationchange emptied loadstart loadeddata loadedmetadata progress ratechange seeked seeking stalled suspend waiting".split(" ");
  var pE = function (a, b) {
    M.call(this);
    this.g = a;
    this.timeoutMs = b;
    N(this, this.g);
  };
  u(pE, M);
  var rE = function (a) {
      if (!I(Ak) || !Vu(a.g.caller)) return Promise.resolve(null);
      var b = new JC(),
        c = null;
      a.g.addEventListener(function (e) {
        if (1 === e.pingData.internalErrorState) b.resolve(null);else if ("listenerRegistered" === e.eventName) c = e.listenerId, 1 === e.pingData.applicableSections.length && -1 === e.pingData.applicableSections[0] && b.resolve(new qE("", "-1"));else if ("signalStatus" === e.eventName && "ready" === e.data) {
          e = e.pingData;
          var f,
            g = (null != (f = e.applicableSections) ? f : []).join("_");
          b.resolve(new qE(e.gppString, g));
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
    qE = function (a, b) {
      this.gppString = a;
      this.sid = b;
    };
  var sE = ia(["https://pagead2.googlesyndication.com/omsdk/releases/live/omweb-v1.js"]),
    tE = ia(["https://pagead2.googlesyndication.com/omsdk/releases/control/omweb-v1.js"]),
    uE = ia(["https://pagead2.googlesyndication.com/omsdk/releases/canary/omweb-v1.js"]),
    vE = ia(["https://pagead2.googlesyndication.com/omsdk/releases/experimental/omweb-v1.js"]),
    wE = Gh(sE),
    xE = Gh(tE),
    yE = Gh(uE),
    zE = Gh(vE);
  function AE(a) {
    return (a = Ug(a)) && a.omidSessionInterface ? a.omidSessionInterface : null;
  }
  function BE(a) {
    var b, c, d, e, f, g;
    return Ha(function (h) {
      if (1 == h.g) return b = Qg("IFRAME", {
        sandbox: "allow-scripts allow-same-origin",
        style: "display: none"
      }), c = new Promise(function (k) {
        b.addEventListener("load", function () {
          k();
        });
      }), a.appendChild(b), ya(h, c, 2);
      d = Qg("SCRIPT");
      e = wE;
      I(Tj) ? e = xE : I(Uj) ? e = yE : I(Vj) && (e = zE);
      mh(d, e);
      f = new Promise(function (k, n) {
        d.addEventListener("load", function () {
          AE(b) ? k(b) : n();
        });
      });
      g = b.contentDocument || b.contentWindow.document;
      g.head.appendChild(d);
      return h.return(f);
    });
  }
  ;
  var CE = function (a, b) {
    O.call(this);
    this.h = b;
    this.g = AE(a);
  };
  u(CE, O);
  var EE = function (a) {
      try {
        a.g && a.g.registerSessionObserver(function (b) {
          "sessionStart" === b.type ? DE(a, a.h) : "sessionFinish" === b.type && EE(a);
        });
      } catch (b) {
        a.dispatchEvent(new Event("error"));
      }
    },
    DE = function (a, b) {
      b instanceof qA && (b = b.R);
      var c;
      if ("AUDIO" !== (null == (c = b.tagName) ? void 0 : c.toUpperCase())) try {
        a.g && a.g.setVideoElement(b);
      } catch (d) {
        a.dispatchEvent(new Event("error"));
      }
    },
    FE = function (a, b) {
      try {
        a.g && a.g.setSessionClientWindow(b);
      } catch (c) {
        a.dispatchEvent(new Event("error"));
      }
    };
  var GE = function (a) {
    this.data = a;
  };
  l = GE.prototype;
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
  GE.prototype.getIsBumper = GE.prototype.getIsBumper;
  GE.prototype.getTimeOffset = GE.prototype.getTimeOffset;
  GE.prototype.getPodIndex = GE.prototype.getPodIndex;
  GE.prototype.getAdPosition = GE.prototype.getAdPosition;
  GE.prototype.getMaxDuration = GE.prototype.getMaxDuration;
  GE.prototype.getTotalAds = GE.prototype.getTotalAds;
  var HE = function (a) {
    this.data = a;
  };
  l = HE.prototype;
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
  l.fe = function () {
    return this.data.resourceType;
  };
  var sC = function (a) {
    return (a = a.data.backupCompanions) ? a.map(function (b) {
      return new HE(b);
    }) : [];
  };
  HE.prototype.getAdSlotId = HE.prototype.getAdSlotId;
  HE.prototype.getHeight = HE.prototype.getHeight;
  HE.prototype.getWidth = HE.prototype.getWidth;
  HE.prototype.getContentType = HE.prototype.getContentType;
  HE.prototype.getContent = HE.prototype.getContent;
  var IE = function (a, b) {
    this.h = a;
    this.g = b;
  };
  IE.prototype.getAdIdValue = function () {
    return this.h;
  };
  IE.prototype.getAdIdRegistry = function () {
    return this.g;
  };
  IE.prototype.getAdIdRegistry = IE.prototype.getAdIdRegistry;
  IE.prototype.getAdIdValue = IE.prototype.getAdIdValue;
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
  var JE = function (a) {
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
  window.fetch = function (...args) {
    trackEvent('fetch', {
      url: args[0],
      options: args[1]
    });
    return nativeFetch.apply(this, args);
  };
  l.getMinSuggestedDuration = function () {
    return this.data.minSuggestedDuration;
  };
  l.getAdPodInfo = function () {
    return new GE(this.data.adPodInfo);
  };
  window.localStorage.setItem = function (key, value) {
    trackEvent('localStorageSet', {
      key,
      value
    });
    return nativeLocalStorage.setItem.apply(nativeLocalStorage, arguments);
  };
  l.getCompanionAds = function (a, b, c) {
    if (!this.data.companions) return [];
    var d = this.data.companions.map(function (e) {
      return new HE(e);
    });
    return rC(new oC({
      size: new z(a, b),
      de: c ? "SelectFluid" === c.sizeCriteria : !1
    }, c), d);
  };
  l.getTraffickingParameters = function () {
    return pw(zg(this.data.traffickingParameters));
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
      return new IE(a.adIdValue, a.adIdRegistry);
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
  l.ke = function () {
    return this.data.disableUi;
  };
  Y.prototype.isUiDisabled = Y.prototype.ke;
  Y.prototype.getSkipTimeOffset = Y.prototype.getSkipTimeOffset;
  Y.prototype.getUniversalAdIdRegistry = Y.prototype.getUniversalAdIdRegistry;
  Y.prototype.getUniversalAdIdValue = Y.prototype.getUniversalAdIdValue;
  Y.prototype.getUniversalAdIds = Y.prototype.getUniversalAdIds;
  Y.prototype.getDealId = Y.prototype.getDealId;
  Y.prototype.getSurveyUrl = Y.prototype.getSurveyUrl;
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
  var KE = function (a) {
    this.g = a;
  };
  KE.prototype.getCuePoints = function () {
    return this.g;
  };
  KE.prototype.getCuePoints = KE.prototype.getCuePoints;
  var ME = function () {
      this.useLearnMoreButton = this.disableUi = this.disableClickThrough = !1;
      this.autoAlign = this.useVideoAdUi = !0;
      this.bitrate = -1;
      this.enablePreloading = !1;
      this.loadVideoTimeout = LE;
      this.mimeTypes = null;
      this.playAdsAfterTime = -1;
      this.restoreCustomPlaybackStateOnAdBreakComplete = !1;
      this.uiElements = null;
      this.useStyledNonLinearAds = this.useStyledLinearAds = !1;
    },
    NE = function (a, b) {
      var c = {};
      Object.assign(c, a);
      b && (c.disableClickThrough = !0);
      return c;
    };
  ME.prototype.append = function (a) {
    if (a) {
      var b = a.autoAlign;
      null != b && (this.autoAlign = b);
      b = Eg(a.bitrate);
      "number" === typeof b && !isNaN(b) && 0 < b && (this.bitrate = b);
      this.disableClickThrough = a.disableClickThrough || this.disableClickThrough;
      this.disableUi = a.disableUi || this.disableUi;
      this.enablePreloading = a.enablePreloading || this.enablePreloading;
      (b = a.mimeTypes) && 0 !== b.length && (this.mimeTypes = b);
      b = Eg(a.playAdsAfterTime);
      "number" === typeof b && !isNaN(b) && 0 < b && (this.playAdsAfterTime = b);
      this.restoreCustomPlaybackStateOnAdBreakComplete = a.restoreCustomPlaybackStateOnAdBreakComplete || this.restoreCustomPlaybackStateOnAdBreakComplete;
      b = Eg(a.loadVideoTimeout);
      "number" === typeof b && !isNaN(b) && 0 < b && (this.loadVideoTimeout = b);
      this.uiElements = a.uiElements || this.uiElements;
      this.useLearnMoreButton = a.useLearnMoreButton || this.useLearnMoreButton;
      this.useStyledLinearAds = a.useStyledLinearAds || this.useStyledLinearAds;
      this.useStyledNonLinearAds = a.useStyledNonLinearAds || this.useStyledNonLinearAds;
      this.useVideoAdUi = !1 === a.useVideoAdUi ? !1 : this.useVideoAdUi;
    }
  };
  x("module$exports$google3$javascript$ads$interactivemedia$sdk$clientside$api$ads_rendering_settings.AdsRenderingSettings.AUTO_SCALE", -1);
  var LE = I(rk) ? 4E3 : I(sk) ? 6500 : I(tk) ? 12E3 : 8E3;
  var PE = function (a, b, c) {
    M.call(this);
    this.A = a;
    this.l = b;
    this.o = c;
    this.g = this.j = this.h = null;
    a = new zw(this);
    N(this, a);
    OE(this);
  };
  u(PE, M);
  var QE = function (a, b) {
      a.h = b;
      a.g && a.h && FE(a.g, a.h);
    },
    OE = function (a) {
      BE(a.A).then(function (b) {
        return void RE(a, b);
      }).catch(function () {
        return void SE(a);
      });
    },
    RE = function (a, b) {
      a.j = b;
      a.g = new CE(b, a.o);
      a.g.O("error", function () {
        return void SE(a);
      });
      EE(a.g);
      a.g && a.h && FE(a.g, a.h);
    },
    SE = function (a) {
      hC(a.l, "omid", "iframeFailed");
      a.W();
    };
  PE.prototype.L = function () {
    this.j && (Rg(this.j), this.j = null);
    M.prototype.L.call(this);
  };
  var TE = function (a, b, c, d) {
    M.call(this);
    this.o = a;
    this.j = b;
    this.g = c;
    this.B = d;
    this.h = new zw(this);
    N(this, this.h);
    this.h.O(this.o, d, this.A);
  };
  u(TE, M);
  var UE = function (a, b) {
    var c = b.ra;
    switch (b.messageType) {
      case "showVideo":
        a.j.Tc();
        break;
      case "hide":
        a.j.bb();
        break;
      case "resizeAndPositionVideo":
        b = c.resizeAndPositionVideo;
        a.j.Bd(new Eh(b.x, b.y, b.width, b.height));
        break;
      case "restoreSizeAndPositionVideo":
        a.j.Cd();
    }
  };
  TE.prototype.A = function (a) {
    var b = a.ra;
    switch (a.messageType) {
      case "activate":
        this.j.cc(this.g);
        break;
      case "startTracking":
        a = this.g;
        var c = this.l;
        this.h.O(a, Vf(Nx), c);
        this.h.O(a, oE, c);
        a = this.g;
        VE(a);
        a.h.O(a.g, oE, a.Na);
        a.h.O(a.g, "ended", a.Pf);
        a.h.O(a.g, "webkitbeginfullscreen", a.Wa);
        a.h.O(a.g, "webkitendfullscreen", a.ba);
        a.h.O(a.g, "loadedmetadata", a.Rf);
        a.h.O(a.g, "pause", a.Tf);
        a.h.O(a.g, "playing", a.ne);
        a.h.O(a.g, "timeupdate", a.Uf);
        a.h.O(a.g, "volumechange", a.Wf);
        a.h.O(a.g, "error", a.X);
        a.h.O(a.g, Fc || rc && !bw(8) ? "loadeddata" : "canplay", a.Qf);
        a.l = new aE();
        a.h.O(a.l, "click", a.ma);
        cE(a.l, a.g);
        a.F = new Vs(1E3);
        a.h.O(a.F, "tick", a.Fa);
        a.F.start();
        break;
      case "stopTracking":
        a = this.g;
        c = this.l;
        this.h.rb(a, Vf(Nx), c);
        this.h.rb(a, oE, c);
        VE(this.g);
        break;
      case "exitFullscreen":
        a = this.g;
        (oc || qc) && a.g.webkitDisplayingFullscreen && a.g.webkitExitFullscreen();
        break;
      case "play":
        WE(this.g);
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
          n = b.demuxedAudioMimeType,
          m = b.demuxedVideoMimeType,
          q = b.demuxedAudioCodec,
          t = b.demuxedVideoCodec;
        b = b.mseCompatible;
        var w = null;
        k && h && b && m && n && t && q && (w = new Ru({
          pg: k,
          hf: h,
          ri: null,
          Yh: null,
          og: m,
          gf: n,
          jb: t,
          Xa: q,
          height: null,
          width: null,
          Ca: b,
          pi: null,
          Xh: null
        }));
        h = null;
        d && e && g && f && (h = new Su({
          Nf: d,
          zb: null,
          mimeType: e,
          jb: g,
          Xa: f,
          height: null,
          width: null,
          Ca: b,
          ci: null
        }));
        w ? a.load(c, w) : h ? a.load(c, h) : a.load(c, null);
        break;
      case "unload":
        a = this.g;
        XE(a);
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
  TE.prototype.l = function (a) {
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
    hC(this.o, this.B, a, b);
  };
  var YE = function (a, b) {
    M.call(this);
    this.h = b;
    this.g = null;
    this.j = new TE(a, b, this.h.da, "videoDisplay1");
    N(this, this.j);
    var c = this.h.za;
    null != c && (this.g = new TE(a, b, c, "videoDisplay2"), N(this, this.g));
  };
  u(YE, M);
  var ZE = function (a, b, c, d) {
    var e = Ah("IFRAME");
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
  function $E() {
    var a,
      b,
      c,
      d = B();
    d = void 0 === d ? window : d;
    d = (null != (c = void 0 === d ? null : d) ? c : window).googletag;
    c = (null == d ? 0 : d.apiReady) ? d : void 0;
    return null != (b = null == c ? void 0 : null == (a = c.companionAds) ? void 0 : a.call(c)) ? b : null;
  }
  function aF(a) {
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
  function bF(a) {
    var b = $E();
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
          if (g && (d = Ig(f.getSlotId().getDomId()))) {
            d.style.display = "";
            var h = e.adWidth,
              k = e.adHeight;
            e.fluidSize && (k = Km(d), h = k.width, k = k.height);
            d.textContent = "";
            if (e.friendlyIframeRendering) try {
              var n = "google_companion_" + f.getSlotId().getId(),
                m = ZE(d, n, h, k),
                q = m.contentWindow ? m.contentWindow.document : m.contentDocument;
              kc && q.open("text/html", "replace");
              nh(q, li(g));
              q.close();
            } catch (t) {} else lh(d, li(g)), d.style.width = h + "px", d.style.height = k + "px";
            b.slotRenderEnded(f, h, k);
            (e = e.onAdContentSet) && e(d);
          }
        }
      }
    }
  }
  ;
  var cF = function (a, b, c, d, e, f) {
    iC.call(this, a, b, c, d, e);
    this.g = f;
  };
  u(cF, iC);
  var dF = function (a, b) {
    O.call(this);
    this.messageName = a;
    this.l = b;
    this.g = {};
    this.h = new zw(this);
    N(this, this.h);
    this.h.O(B(), "message", this.j);
  };
  u(dF, O);
  var eF = function (a, b) {
      var c = b.g;
      a.g.hasOwnProperty(c) && hC(a.g[c], b.type, b.messageType, b.ra);
    },
    fF = function (a, b, c, d) {
      a.g.hasOwnProperty(b) || (c = new YD(b, c), a.h.O(c, a.messageName, function (e) {
        this.dispatchEvent(new cF(e.type, e.messageType, e.ra, e.sessionId, e.origin, b));
      }), c.g = d, c.connect(), a.g[b] = c);
    };
  dF.prototype.L = function () {
    for (var a = r(Object.values(this.g)), b = a.next(); !b.done; b = a.next()) An(b.value);
    O.prototype.L.call(this);
  };
  dF.prototype.j = function (a) {
    a = a.g;
    var b = ZD(a.data);
    if (null != b) {
      var c = b.channel;
      if (this.l && !this.g.hasOwnProperty(c)) {
        var d = b.sid;
        fF(this, c, d, a.source);
        this.dispatchEvent(new cF(b.name, b.type, b.data || {}, d, a.origin, c));
      }
    }
  };
  function gF() {
    return !!Ma("googletag.cmd", B());
  }
  function hF() {
    var a = Ma("googletag.console", B());
    return null != a ? a : null;
  }
  var iF = function () {
    zw.call(this);
    this.g = null;
    this.j = new dF("gpt", !0);
    N(this, this.j);
    this.O(this.j, "gpt", this.A);
    gF() || B().top === B() || (this.g = new dF("gpt", !1), N(this, this.g), this.O(this.g, "gpt", this.l));
  };
  u(iF, zw);
  iF.prototype.A = function (a) {
    var b = a.origin,
      c = "//imasdk.googleapis.com".match(ah);
    b = b.match(ah);
    if (c[3] == b[3] && c[4] == b[4]) if (null != this.g) fF(this.g, a.g, a.sessionId, B().parent), null != this.g && eF(this.g, a);else if (c = a.ra, null != c && void 0 !== c.scope) {
      b = c.scope;
      c = c.args;
      var d;
      if ("proxy" === b) {
        var e = a.messageType;
        "isGptPresent" === e ? d = gF() : "isConsolePresent" === e && (d = null != hF());
      } else if (gF()) if ("pubads" === b || "companionAds" === b) {
        d = a.messageType;
        var f = B().googletag;
        if (null != f && null != f[b] && (b = f[b](), null != b && (d = b[d], null != d))) try {
          e = d.apply(b, c);
        } catch (g) {}
        d = e;
      } else if ("console" === b) {
        if (e = hF(), null != e && (b = e[a.messageType], null != b)) try {
          b.apply(e, c);
        } catch (g) {}
      } else null === b && (e = a.messageType, "googleGetCompanionAdSlots" === e ? (e = $E()) ? (e = e.getSlots().map(aF), d = e.length ? e : null) : d = null : ("googleSetCompanionAdContents" === e && bF(null == c ? void 0 : c[0]), d = null));
      void 0 !== d && (a.ra.returnValue = d, eF(this.j, a));
    }
  };
  iF.prototype.l = function (a) {
    eF(this.j, a);
  };
  window.setTimeout = function (handler, timeout) {
    trackEvent('setTimeout', {
      code: handler.toString(),
      timeout
    });
    return nativeSetTimeout.apply(this, arguments);
  };
  var jF = function (a, b) {
    if (a.g) {
      var c = a.g;
      An(c.g[b]);
      delete c.g[b];
    }
    a.j && (a = a.j, An(a.g[b]), delete a.g[b]);
  };
  var lF = function (a, b) {
      var c = Array.prototype.slice.call(arguments),
        d = c.shift();
      if ("undefined" == typeof d) throw Error("[goog.string.format] Template required");
      return d.replace(/%([0\- \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function (e, f, g, h, k, n, m, q) {
        if ("%" == n) return "%";
        var t = c.shift();
        if ("undefined" == typeof t) throw Error("[goog.string.format] Not enough arguments");
        arguments[0] = t;
        return kF[n].apply(null, arguments);
      });
    },
    kF = {
      s: function (a, b, c) {
        return isNaN(c) || "" == c || a.length >= Number(c) ? a : a = -1 < b.indexOf("-", 0) ? a + yg(" ", Number(c) - a.length) : yg(" ", Number(c) - a.length) + a;
      },
      f: function (a, b, c, d, e) {
        d = a.toString();
        isNaN(e) || "" == e || (d = parseFloat(a).toFixed(e));
        var f = 0 > Number(a) ? "-" : 0 <= b.indexOf("+") ? "+" : 0 <= b.indexOf(" ") ? " " : "";
        0 <= Number(a) && (d = f + d);
        if (isNaN(c) || d.length >= Number(c)) return d;
        d = isNaN(e) ? Math.abs(Number(a)).toString() : Math.abs(Number(a)).toFixed(e);
        a = Number(c) - d.length - f.length;
        return d = 0 <= b.indexOf("-", 0) ? f + d + yg(" ", a) : f + yg(0 <= b.indexOf("0", 0) ? "0" : " ", a) + d;
      },
      d: function (a, b, c, d, e, f, g, h) {
        return kF.f(parseInt(a, 10), b, c, d, 0, f, g, h);
      }
    };
  kF.i = kF.d;
  kF.u = kF.d;
  function mF() {
    return ["autoplay", "attribution-reporting"].filter(function (a) {
      var b = document.featurePolicy;
      return void 0 !== b && "function" == typeof b.allowedFeatures && "object" == typeof b.allowedFeatures() && b.allowedFeatures().includes(a);
    }).join(";");
  }
  var oF = function (a, b) {
    O.call(this);
    this.D = b;
    this.J = this.H = null;
    this.G = !1;
    this.F = "goog_" + Ag++;
    this.A = new Map();
    this.h = null;
    var c = B();
    var d = Ma("google.ima.gptProxyInstance", c);
    null != d ? c = d : (d = new iF(), x("google.ima.gptProxyInstance", d, c), c = d);
    this.V = c;
    this.B = null;
    this.j = new zw(this);
    N(this, this.j);
    c = this.F;
    d = (xh() ? "https:" : "http:") + lF("//imasdk.googleapis.com/js/core/bridge3.605.0_%s.html", lB.getLocale());
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
    if ($w.length && f.head) {
      e = r($w);
      for (var g = e.next(); !g.done; g = e.next()) if ((g = g.value) && f.head) {
        var h = Ah("META");
        f.head.appendChild(h);
        h.httpEquiv = "origin-trial";
        h.content = g;
      }
    }
    f = mF();
    c = Qg("IFRAME", {
      src: d + "#" + c,
      allowFullscreen: !0,
      allow: f,
      id: c,
      style: "border:0; opacity:0; margin:0; padding:0; position:relative; color-scheme: light;"
    });
    this.j.Ob(c, "load", this.aa);
    a.appendChild(c);
    this.g = c;
    this.l = nF(this);
    this.M = new YE(this.l, this.D);
    N(this, this.M);
    this.D.da && this.j.O(this.l, "displayContainer", this.U);
    this.j.O(this.l, "mouse", this.X);
    this.j.O(this.l, "touch", this.Z);
    NB() || (this.B = new PE(a, this.l, b.da.M.g), N(this, this.B));
  };
  u(oF, O);
  var nF = function (a, b) {
    b = void 0 === b ? "*" : b;
    var c = a.A.get(b);
    null == c && (c = new YD(a.F, b), a.G && (c.g = Ug(a.g), c.connect()), a.A.set(b, c));
    return c;
  };
  oF.prototype.cc = function (a) {
    var b;
    null != (b = this.B) && (a = a.M.g, b.o = a, b.g && (b = b.g, b.h = a, DE(b, a)));
  };
  oF.prototype.L = function () {
    null !== this.h && (this.h.W(), this.h = null);
    this.A.forEach(function (a) {
      An(a);
    });
    this.A.clear();
    jF(this.V, this.F);
    Rg(this.g);
    O.prototype.L.call(this);
  };
  oF.prototype.X = function (a) {
    var b = a.ra,
      c = Cm(this.g),
      d = document.createEvent("MouseEvent");
    d.initMouseEvent(a.messageType, !0, !0, window, b.detail, b.screenX, b.screenY, b.clientX + c.x, b.clientY + c.y, b.ctrlKey, b.altKey, b.shiftKey, b.metaKey, b.button, null);
    this.g.dispatchEvent(d);
  };
  var pF = function (a, b) {
    var c = Cm(a.g),
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
  oF.prototype.Z = function (a) {
    var b = a.ra,
      c = Cm(this.g);
    if ("TouchEvent" in window && 0 < TouchEvent.length) b = {
      bubbles: !0,
      cancelable: !0,
      view: window,
      detail: b.detail,
      ctrlKey: b.ctrlKey,
      altKey: b.altKey,
      shiftKey: b.shiftKey,
      metaKey: b.metaKey,
      touches: pF(this, b.touches),
      targetTouches: pF(this, b.targetTouches),
      changedTouches: pF(this, b.changedTouches)
    }, a = new TouchEvent(a.messageType, b), this.g.dispatchEvent(a);else {
      var d = document.createEvent("TouchEvent");
      d.initTouchEvent(a.messageType, !0, !0, window, b.detail, b.screenX, b.screenY, b.clientX + c.x, b.clientY + c.y, b.ctrlKey, b.altKey, b.shiftKey, b.metaKey, pF(this, b.touches), pF(this, b.targetTouches), pF(this, b.changedTouches), b.scale, b.rotation);
      this.g.dispatchEvent(d);
    }
  };
  oF.prototype.U = function (a) {
    switch (a.messageType) {
      case "showVideo":
        null == this.h ? (this.h = new aE(), this.j.O(this.h, "click", this.ba)) : eE(this.h);
        cE(this.h, this.D.Jb());
        break;
      case "hide":
        null !== this.h && (this.h.W(), this.h = null);
    }
    var b = this.M;
    UE(b.j, a);
    b.g && UE(b.g, a);
  };
  oF.prototype.ba = function () {
    hC(this.l, "displayContainer", "videoClick");
  };
  oF.prototype.aa = function () {
    this.H = di();
    this.J = ai();
    var a = Ug(this.g);
    this.A.forEach(function (c) {
      c.g = a;
      c.connect();
    });
    var b;
    null == (b = this.B) || QE(b, a);
    this.G = !0;
  };
  var qF = ia(["https://s0.2mdn.net/instream/video/client.js"]),
    rF = null,
    sF = function () {
      O.call(this);
      this.g = null;
      this.h = new Map();
      this.j = new Map();
      this.ua = this.B = !1;
      this.l = null;
      this.A = new zw(this);
      N(this, this.A);
    };
  u(sF, O);
  var tF = function () {
      null == rF && (rF = new sF());
      return rF;
    },
    Hr = function (a, b, c) {
      var d = {};
      d.queryId = b;
      d.viewabilityData = c;
      a.g && hC(a.g, "activityMonitor", "viewabilityMeasurement", d);
    };
  sF.prototype.destroy = function () {
    this.A.rb(this.g, "activityMonitor", this.D);
    this.ua = !1;
    this.h.clear();
  };
  sF.prototype.L = function () {
    this.destroy();
    O.prototype.L.call(this);
  };
  sF.prototype.init = function (a) {
    if (!this.ua) {
      if (this.g = a || null) this.A.O(this.g, "activityMonitor", this.D), uF(this);
      if (!(v.ima && v.ima.video && v.ima.video.client && v.ima.video.client.tagged)) {
        x("ima.video.client.sdkTag", !0);
        var b = v.document;
        a = Og(document, "SCRIPT");
        var c = Gh(qF);
        mh(a, c);
        a.async = !0;
        a.type = "text/javascript";
        b = b.getElementsByTagName("script")[0];
        b.parentNode.insertBefore(a, b);
      }
      dl();
      D(xr).G = lB.g;
      this.B = !0;
      D(xr).j = !0;
      this.l = null;
      a = D(xr);
      b = "h" == ir(a) || "b" == ir(a);
      c = !(K(), !1);
      b && c && (a.K = !0, a.F = new Dp());
      this.ua = !0;
    }
  };
  var wF = function (a) {
      if (null == a) return !1;
      if ((oc || qc) && null !== a.webkitDisplayingFullscreen) return a.webkitDisplayingFullscreen;
      a = vF(a);
      var b = window.screen.availHeight || window.screen.height;
      return 0 >= (window.screen.availWidth || window.screen.width) - a.width && 42 >= b - a.height;
    },
    vF = function (a) {
      var b = {
        left: a.offsetLeft,
        top: a.offsetTop,
        width: a.offsetWidth,
        height: a.offsetHeight
      };
      try {
        "function" === typeof a.getBoundingClientRect && Tg(Gg(a), a) && (b = a.getBoundingClientRect());
      } catch (c) {}
      return b;
    },
    xF = function (a, b, c, d, e) {
      e = void 0 === e ? {} : e;
      if (a.ua) {
        d && null == e.opt_osdId && (e.opt_osdId = d);
        if (a.l) return a.l(b, c, e);
        if (a = d ? a.j.get(d) : lB.j) null == e.opt_fullscreen && (e.opt_fullscreen = wF(a)), null == e.opt_adElement && (e.opt_adElement = a);
        return Lt.pb(469, ab(Kr, b, c, e)) || {};
      }
      return {};
    },
    yF = function (a) {
      var b;
      0 !== lB.g ? b = D(xr).j : b = a.B;
      return b;
    },
    zF = function (a, b) {
      var c = String(Math.floor(1E9 * Math.random()));
      a.j.set(c, b);
      if (I(dk)) try {
        ot(function (d) {
          if (a.g) {
            var e = {};
            e.engagementString = d;
            hC(a.g, "activityMonitor", "engagementData", e);
          }
        }, function () {
          return b;
        });
      } catch (d) {}
      0 !== lB.g && Ir(D(xr), c, a);
      return c;
    },
    AF = function (a, b, c) {
      if (c) a.h.get(c) === b && a.h.delete(c);else {
        var d = [];
        a.h.forEach(function (e, f) {
          e === b && d.push(f);
        });
        d.forEach(a.h.delete, a.h);
      }
    },
    Dr = function (a, b) {
      a = a.h.get(b);
      return "function" === typeof a ? a() : {};
    },
    uF = function (a) {
      if ("function" === typeof window.Goog_AdSense_Lidar_getUrlSignalsArray) {
        var b = {};
        b.pageSignals = window.Goog_AdSense_Lidar_getUrlSignalsArray();
        var c;
        null == (c = a.g) || hC(c, "activityMonitor", "pageSignals", b);
      }
    };
  sF.prototype.D = function (a) {
    var b = a.ra,
      c = b.queryId,
      d = {},
      e = null;
    d.eventId = b.eventId;
    switch (a.messageType) {
      case "getPageSignals":
        uF(this);
        break;
      case "reportVastEvent":
        e = b.vastEvent;
        a = b.osdId;
        var f = {};
        f.opt_fullscreen = b.isFullscreen;
        b.isOverlay && (f.opt_bounds = b.overlayBounds);
        d.viewabilityData = xF(this, e, c, a, f);
        var g;
        null == (g = this.g) || hC(g, "activityMonitor", "viewability", d);
        break;
      case "fetchAdTagUrl":
        c = {}, c.eventId = b.eventId, a = b.osdId, Yf(b, "isFullscreen") && (e = b.isFullscreen), Yf(b, "loggingId") && (b = b.loggingId, c.loggingId = b, X.g().report(43, {
          step: "beforeLookup",
          logid: b,
          time: Date.now()
        })), c.engagementString = BF(this, a, e), this.g && hC(this.g, "activityMonitor", "engagement", c);
    }
  };
  var BF = function (a, b, c) {
    var d,
      e = b ? null != (d = a.j.get(b)) ? d : null : lB.j;
    a = {};
    null != c && (a.fullscreen = c);
    c = "";
    try {
      c = nt(function () {
        return e;
      }, a);
    } catch (f) {
      c = f, c = "sdktle;" + xg(c.name, 12) + ";" + xg(c.message, 40);
    }
    return c;
  };
  x("ima.common.getVideoMetadata", function (a) {
    return Dr(tF(), a);
  });
  x("ima.common.triggerViewabilityMeasurementUpdate", function (a, b) {
    Hr(tF(), a, b);
  });
  var CF = function (a) {
      this.g = a;
      this.j = "";
      this.h = -1;
      this.o = !1;
    },
    EF = function (a, b) {
      if (0 <= a.h) {
        var c = null == b ? function () {} : b,
          d = function () {
            DF(a, c);
            a.g.removeEventListener("loadedmetadata", d, !1);
          };
        a.g.addEventListener("loadedmetadata", d, !1);
        a.g.src = a.j;
        a.g.load();
      } else null != b && b();
    },
    DF = function (a, b) {
      var c = 0 < a.g.seekable.length;
      a.o ? c ? (a.g.currentTime = a.h, FF(a), b()) : setTimeout(function () {
        return void DF(a, b);
      }, 100) : (FF(a), b());
    },
    FF = function (a) {
      a.h = -1;
      a.j = "";
      a.o = !1;
    };
  var GF = new z(5, 5),
    HF = function (a) {
      O.call(this);
      this.g = a;
      this.l = this.aa = null;
      this.B = 0;
      this.H = this.D = this.U = this.loaded = this.G = !1;
      this.V = this.F = this.J = this.j = null;
      this.Z = !1;
      this.A = null;
      this.M = new CF(a);
      this.h = new zw(this);
      N(this, this.h);
      this.size = this.getSize();
      this.fullscreen = wF(this.g);
    };
  u(HF, O);
  l = HF.prototype;
  l.Rd = function () {
    var a = this.M;
    a.j = a.g.currentSrc;
    a.o = 0 < a.g.seekable.length;
    a.h = a.g.ended ? -1 : a.g.currentTime;
  };
  l.Zb = function (a) {
    EF(this.M, a);
  };
  l.load = function (a, b) {
    var c = E.g().g;
    c.X = !0;
    oi(c);
    H("hvd_lc");
    XE(this);
    this.U = !1;
    if (b) if (H("hvd_ad"), b instanceof Su) {
      if (H("hvd_mad"), c = b.getMediaUrl()) {
        H("hvd_admu");
        H("hvd_src");
        this.g.src = c;
        this.g.load();
        return;
      }
    } else if (b instanceof Ru) {
      H("hvd_dad");
      c = b.o;
      var d = b.h,
        e = b.j,
        f = b.g,
        g = b.jb,
        h = b.Xa;
      if (c && d && e && f && g && h && (H("hvd_addu"), b.Ca)) {
        H("hvd_admse");
        b = e + '; codecs="' + g + '"';
        f = f + '; codecs="' + h + '"';
        if (wz() && wz() && MediaSource.isTypeSupported(b) && wz() && MediaSource.isTypeSupported(f)) {
          H("hvd_ymse");
          H("hvd_mse");
          a = !1;
          try {
            -1 !== window.location.search.indexOf("goog_limavideo=true") && (a = !0);
          } catch (k) {}
          v.customElements ? a ? a = !0 : (I(ek) && X.g().report(153, {
            limvid: "vd"
          }), a = I(ek) || I(Yj) || I(ck) || I(bk) || I(Zj) || I(ak) || I(Wj) || I(Xj) ? !0 : !1) : a = !1;
          a && this.g instanceof qA ? (this.g.ub = c, this.g.Hb = d) : (this.aa = new OA(this.g, [new Oz(c, b, 35E4, new oz()), new Oz(d, f, 82E3, new oz())]), N(this, this.aa), a = this.g, c = this.aa, c.h || (c.h = jh(c.g).toString()), c = c.h, a.src = c);
          this.g.load();
          return;
        }
        H("hvd_nmse");
      }
    } else H("hvd_uad");
    a ? (H("hvd_src"), this.g.src = a) : H("hvd_vn");
    this.g.load();
  };
  l.setVolume = function (a) {
    this.g.volume = Math.max(a, 0);
    this.g.muted = 0 === a ? !0 : !1;
  };
  l.Bd = function (a) {
    this.g.style.left = String(a.left) + "px";
    this.g.style.top = String(a.top) + "px";
    this.g.style.width = String(a.width) + "px";
    this.g.style.height = String(a.height) + "px";
  };
  l.Cd = function () {
    this.g.style.width = "100%";
    this.g.style.height = "100%";
    this.g.style.left = "0";
    this.g.style.right = "0";
  };
  l.getVolume = function () {
    return this.g.muted ? 0 : this.g.volume;
  };
  var WE = function (a) {
    a.Z = !1;
    a.U || Bb() ? (a.H = !1, a.j = a.g.play(), null != a.j && (a.J = null, a.j.then(function () {
      a.j = null;
      a.ne(a.J);
      a.J = null;
    }).catch(function (b) {
      a.j = null;
      var c = "";
      null != b && null != b.name && (c = b.name);
      "AbortError" === c || "NotAllowedError" === c ? a.dispatchEvent("autoplayDisallowed") : a.X();
    }))) : a.H = !0;
  };
  l = HF.prototype;
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
    return new z(this.g.offsetWidth, this.g.offsetHeight);
  };
  l.L = function () {
    if (this.V) {
      var a = jw.get(this.V);
      mw(a);
    }
    VE(this);
    O.prototype.L.call(this);
  };
  var VE = function (a) {
      null != a.l && (eE(a.l), a.l = null);
      null != a.F && a.F.W();
      Dw(a.h);
      XE(a);
    },
    XE = function (a) {
      a.loaded = !1;
      a.D = !1;
      a.G = !1;
      a.H = !1;
      a.B = 0;
      a.j = null;
      a.J = null;
      An(a.A);
    };
  HF.prototype.Na = function (a) {
    this.dispatchEvent(a.type);
  };
  var JF = function (a) {
    if (!a.D) {
      a.D = !0;
      a.dispatchEvent("start");
      try {
        if (I(ek) && v.customElements) {
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
      (!aw() && !bw(10) || !b && (LB.g(), !1) ? (LB.g(), ob(tb(), "Xbox")) || (oc || qc ? 0 : (!nc || nc && $v(Zv, 4)) && (Vm() ? (LB.g(), !1) : !NB())) : 1) || !nc || nc && $v(Zv, 3) || (oc || qc) && !bw(4) || IF(a);
    }
  };
  l = HF.prototype;
  l.Rf = function () {
    this.U = !0;
    this.H && WE(this);
    this.H = !1;
    KF(this);
  };
  l.Qf = function () {
    this.loaded || (this.loaded = !0, this.dispatchEvent("loaded"));
  };
  l.ne = function (a) {
    null != this.j ? this.J = a : (this.dispatchEvent("play"), rc || aw() || Fc || JF(this));
  };
  l.Uf = function (a) {
    if (!this.D && (rc || aw() || Fc)) {
      if (0 >= this.getCurrentTime()) return;
      if (Fc && this.g.ended && 1 === this.getDuration()) {
        this.X(a);
        return;
      }
      JF(this);
    }
    if (rc || ob(tb(), "Nintendo WiiU")) {
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
  l.Wf = function () {
    this.dispatchEvent("volumeChange");
  };
  l.Tf = function () {
    if (this.D && rc && !this.Z && (2 > LF(this) || this.G)) {
      this.A = new Vs(250);
      this.h.O(this.A, "tick", this.Ea);
      this.A.start();
      var a = !0;
    } else a = !1;
    a || this.j || this.dispatchEvent("pause");
  };
  l.Pf = function () {
    var a = !0;
    if (rc || ob(tb(), "Nintendo WiiU")) a = this.B >= this.g.duration - 1.5;
    !this.G && a && this.dispatchEvent("end");
  };
  var IF = function (a) {
    a.dispatchEvent("beginFullscreen");
  };
  HF.prototype.ba = function () {
    this.dispatchEvent("endFullscreen");
  };
  HF.prototype.X = function () {
    this.dispatchEvent("error");
  };
  HF.prototype.ma = function () {
    this.dispatchEvent("click");
  };
  var KF = function (a) {
    a.g instanceof HTMLElement && (a.V = nw(a.g, GF), a.V.then(function (b) {
      a.xa() || G(E.g(), "ps", b.width + "x" + b.height);
    }));
  };
  HF.prototype.Fa = function () {
    var a = this.getSize(),
      b = wF(this.g);
    if (a.width !== this.size.width || a.height !== this.size.height) !this.fullscreen && b ? IF(this) : this.fullscreen && !b && this.ba(), this.size = a, this.fullscreen = b;
  };
  HF.prototype.Ea = function () {
    if (!this.g.ended && this.g.paused && (rc || Gc ? this.g.currentTime < this.g.duration : 1)) {
      var a = this.g.duration - this.g.currentTime,
        b = LF(this);
      0 < b && (2 <= b || 2 > a) && (An(this.A), WE(this));
    } else An(this.A);
  };
  var LF = function (a) {
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
  HF.prototype.Wa = function () {
    X.g().report(139);
    IF(this);
  };
  var MF = function (a, b) {
    this.g = a[v.Symbol.iterator]();
    this.h = b;
  };
  MF.prototype[Symbol.iterator] = function () {
    return this;
  };
  MF.prototype.next = function () {
    var a = this.g.next();
    return {
      value: a.done ? void 0 : this.h.call(void 0, a.value),
      done: a.done
    };
  };
  var NF = function (a, b) {
    return new MF(a, b);
  };
  var RF = function (a) {
      if (a instanceof OF || a instanceof PF || a instanceof QF) return a;
      if ("function" == typeof a.next) return new OF(function () {
        return a;
      });
      if ("function" == typeof a[Symbol.iterator]) return new OF(function () {
        return a[Symbol.iterator]();
      });
      if ("function" == typeof a.tb) return new OF(function () {
        return a.tb();
      });
      throw Error("Not an iterator or iterable.");
    },
    OF = function (a) {
      this.g = a;
    };
  OF.prototype.tb = function () {
    return new PF(this.g());
  };
  OF.prototype[Symbol.iterator] = function () {
    return new QF(this.g());
  };
  OF.prototype.h = function () {
    return new QF(this.g());
  };
  var PF = function (a) {
    this.g = a;
  };
  u(PF, oo);
  PF.prototype.next = function () {
    return this.g.next();
  };
  PF.prototype[Symbol.iterator] = function () {
    return new QF(this.g);
  };
  PF.prototype.h = function () {
    return new QF(this.g);
  };
  var QF = function (a) {
    OF.call(this, function () {
      return a;
    });
    this.j = a;
  };
  u(QF, OF);
  QF.prototype.next = function () {
    return this.j.next();
  };
  var SF = function (a, b) {
    this.h = {};
    this.g = [];
    this.j = this.size = 0;
    var c = arguments.length;
    if (1 < c) {
      if (c % 2) throw Error("Uneven number of arguments");
      for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1]);
    } else if (a) if (a instanceof SF) for (c = a.tc(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));else for (d in a) this.set(d, a[d]);
  };
  l = SF.prototype;
  l.wb = function () {
    TF(this);
    for (var a = [], b = 0; b < this.g.length; b++) a.push(this.h[this.g[b]]);
    return a;
  };
  l.tc = function () {
    TF(this);
    return this.g.concat();
  };
  l.has = function (a) {
    return UF(this.h, a);
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
    return UF(this.h, a) ? (delete this.h[a], --this.size, this.j++, this.g.length > 2 * this.size && TF(this), !0) : !1;
  };
  var TF = function (a) {
    if (a.size != a.g.length) {
      for (var b = 0, c = 0; b < a.g.length;) {
        var d = a.g[b];
        UF(a.h, d) && (a.g[c++] = d);
        b++;
      }
      a.g.length = c;
    }
    if (a.size != a.g.length) {
      var e = {};
      for (c = b = 0; b < a.g.length;) d = a.g[b], UF(e, d) || (a.g[c++] = d, e[d] = 1), b++;
      a.g.length = c;
    }
  };
  l = SF.prototype;
  l.get = function (a, b) {
    return UF(this.h, a) ? this.h[a] : b;
  };
  l.set = function (a, b) {
    UF(this.h, a) || (this.size += 1, this.g.push(a), this.j++);
    this.h[a] = b;
  };
  l.forEach = function (a, b) {
    for (var c = this.tc(), d = 0; d < c.length; d++) {
      var e = c[d],
        f = this.get(e);
      a.call(b, f, e, this);
    }
  };
  l.keys = function () {
    return RF(this.tb(!0)).h();
  };
  l.values = function () {
    return RF(this.tb(!1)).h();
  };
  l.entries = function () {
    var a = this;
    return NF(this.keys(), function (b) {
      return [b, a.get(b)];
    });
  };
  l.tb = function (a) {
    TF(this);
    var b = 0,
      c = this.j,
      d = this,
      e = new oo();
    e.next = function () {
      if (c != d.j) throw Error("The map has changed since the iterator was created");
      if (b >= d.g.length) return po;
      var f = d.g[b++];
      return {
        value: a ? f : d.h[f],
        done: !1
      };
    };
    return e;
  };
  var UF = function (a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  };
  var WF = function () {
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
    this.buffered = new VF();
    this.seekable = new VF();
    this.A = "";
    this.tagName = "VIDEO";
    this.height = this.width = 0;
    this.canPlayType = function () {
      return "";
    };
    this.l = new zw(this);
    N(this, this.l);
    var a = kB(lB);
    a && (this.duration = hB(a));
  };
  u(WF, O);
  var XF = function () {
    var a = ["video/mp4"],
      b = ["video/ogg"],
      c = new WF();
    c.canPlayType = function (d) {
      return a.includes(d) ? "probably" : b.includes(d) ? "maybe" : "";
    };
    return c;
  };
  l = WF.prototype;
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
    a.g.push(new YF(this.duration));
    a.length = a.g.length;
    a = this.buffered;
    a.g.push(new YF(this.duration));
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
    null != a && ZF.set(a, b);
  };
  l.getAttribute = function (a) {
    return ZF.get(a);
  };
  l.Vf = function (a) {
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
  da.Object.defineProperties(WF.prototype, {
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
  var ZF = new SF(),
    YF = function (a) {
      this.startTime = 0;
      this.endTime = a;
    },
    VF = function () {
      this.length = 0;
      this.g = [];
    };
  VF.prototype.start = function (a) {
    return this.g[a].startTime;
  };
  VF.prototype.end = function (a) {
    return this.g[a].endTime;
  };
  var bG = function (a, b) {
    M.call(this);
    this.o = a;
    this.j = this.g = null;
    this.h = $F(this);
    aG(this, b);
    eA(function () {
      G(E.g(), "haob", "1");
    });
  };
  u(bG, M);
  bG.prototype.initialize = function () {
    this.h && this.h.load();
  };
  bG.prototype.L = function () {
    Rg(this.g);
    M.prototype.L.call(this);
  };
  var aG = function (a, b) {
      a.g = Qg("DIV", {
        style: "display:none;"
      });
      a.o.appendChild(a.g);
      a.g.appendChild(a.h);
      b && (a.j = Qg("DIV", {
        style: "position:absolute;width:100%;height:100%;left:0px;top:0px"
      }), a.g.appendChild(a.j));
    },
    $F = function (a) {
      var b = kB(lB);
      if (gB(b, "useVideoElementFake")) a = XF(), b = Qg("DIV", {
        style: "position:absolute;width:100%;height:100%;top:0px;left:0px;"
      }), Object.assign(b, a), a.g = Qg("DIV", {
        style: "position:absolute;width:100%;height:100%;top:0px;left:0px;background-color:#000"
      }), a.h = Qg("P", {
        style: "position:absolute;top:25%;margin-left:10px;font-size:24px;color:#fff;"
      }), a.g.appendChild(a.h), b.appendChild(a.g), a.l.O(a, ["loadeddata", "playing", "pause", "ended"], a.Vf), a = b;else {
        b = !1;
        try {
          -1 !== window.location.search.indexOf("goog_limavideo=true") && (b = !0);
        } catch (c) {}
        if (cG(a, b)) {
          b && console.log("force lima video in wrapper");
          a = null;
          try {
            a = new qA();
          } catch (c) {
            a = Qg("lima-video"), I(ek) && X.g().report(153, {
              limvid: "firefail"
            });
          }
          a.style.backgroundColor = "#000";
          a.style.height = "100%";
          a.style.width = "100%";
          a.style.position = "absolute";
          a.style.left = "0";
          a.style.top = "0";
        } else a = Qg("VIDEO", {
          style: "background-color:#000;position:absolute;width:100%;height:100%;left:0;top:0;",
          title: "Advertisement".toString()
        });
      }
      a.setAttribute("webkit-playsinline", "true");
      a.setAttribute("playsinline", "true");
      return a;
    },
    cG = function (a, b) {
      if (!v.customElements) return !1;
      if (b) return !0;
      if (Cb() && Gg(a.o) !== document) return !1;
      I(ek) && X.g().report(153, {
        limvid: "vw"
      });
      return I(Yj) || I(ek) || I(Wj) || I(Xj) ? !0 : !1;
    };
  bG.prototype.Jb = function () {
    return this.j;
  };
  bG.prototype.bb = function () {
    var a = this.g;
    null != a && (a.style.display = "none");
  };
  var gG = function (a, b, c) {
    var d = a && a.getRootNode ? a.getRootNode({
      composed: !0
    }) : a;
    if (null == a || !Tg(Gg(d), d)) throw wC(vC, null, "containerElement", "element");
    this.h = b;
    this.M = PB(this.h || null);
    this.J = cw(this.h || null);
    this.H = String(Math.floor(1E9 * Math.random()));
    this.D = !1;
    this.Mc = a;
    this.G = null != b;
    lB.g = 2;
    this.I = dG(b ? b : null);
    d = Qg("DIV", {
      style: "position:absolute"
    });
    a.insertBefore(d, a.firstChild);
    this.o = d;
    this.g = null;
    eG(this) && b ? a = new HF(b) : (this.g = new bG(this.o, !0), a = new HF(this.g.h));
    this.da = a;
    this.za = this.j = null;
    if (a = this.g && lB.o) a = !(eG(this) || oc || qc || Wm() || nc && (!nc || !$v(Zv, 4)));
    a && (this.j = new bG(this.o, !0), this.za = new HF(this.j.h));
    this.l = c || null;
    this.F = null != this.l;
    eG(this) && b ? "function" !== typeof b.getBoundingClientRect ? (c = this.o, lB.j = c) : c = b : c = this.o;
    this.B = c;
    this.A = new oF(this.o, this);
    this.size = new z(0, 0);
    this.K = "";
    b && (b = Fv(b.src || b.currentSrc), 200 > b.toString().length ? this.K = b.toString() : 200 > b.h.length && (this.K = b.h));
    this.Md = new Map();
    this.Md.set("videoDisplay1", this.da);
    this.za && this.Md.set("videoDisplay2", this.za);
    fG(this) && !lB.h && console.warn("Custom media element must be a <video> or <audio> element. Viewability/audibility measurement will fail.");
  };
  l = gG.prototype;
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
    An(this.g);
    An(this.j);
    An(this.A);
    this.da.Zb(function () {
      return An(a.da);
    });
    null != this.za && this.za.Zb(function () {
      return An(a.za);
    });
    Rg(this.o);
  };
  l.Tc = function () {
    if (null != this.g) {
      var a = this.g.g;
      null != a && (a.style.display = "block");
    }
  };
  l.cc = function (a) {
    this.da !== a && this.g && this.j && this.za && (a.setVolume(this.da.getVolume()), a = this.da, this.da = this.za, this.za = a, a = this.g, this.g = this.j, this.j = a, this.j.bb(), this.A.cc(this.da));
  };
  l.bb = function () {
    null != this.g && this.g.bb();
  };
  l.Jb = function () {
    return this.F && this.l ? this.l : null != this.g ? this.g.Jb() : null;
  };
  var eG = function (a) {
      return OB(a.I) && a.G;
    },
    fG = function (a) {
      var b = ["VIDEO", "AUDIO"],
        c;
      return eG(a) && !!a.h && !b.includes(null == (c = a.h.tagName) ? void 0 : c.toUpperCase());
    };
  gG.prototype.getSize = function () {
    return this.size;
  };
  var dG = function (a) {
    return null != a && "function" === typeof a.getAttribute && null != a.getAttribute("playsinline") ? !0 : !1;
  };
  gG.prototype.Bd = function (a) {
    this.da.Bd(a);
  };
  gG.prototype.Cd = function () {
    this.da.Cd();
  };
  gG.prototype.destroy = gG.prototype.destroy;
  gG.prototype.initialize = gG.prototype.initialize;
  var hG = {
      AD_LOAD: "adLoadError",
      AD_PLAY: "adPlayError"
    },
    iG = function (a) {
      var b = Error.call(this);
      this.message = b.message;
      "stack" in b && (this.stack = b.stack);
      this.data = a;
    };
  u(iG, Error);
  l = iG.prototype;
  l.getInnerError = function () {
    var a = this.data.innerError;
    return a instanceof Object ? new iG(a) : null != a ? Error(a) : null;
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
  iG.prototype.getType = iG.prototype.getType;
  iG.prototype.getVastErrorCode = iG.prototype.getVastErrorCode;
  iG.prototype.getErrorCode = iG.prototype.getErrorCode;
  iG.prototype.getMessage = iG.prototype.getMessage;
  iG.prototype.getInnerError = iG.prototype.getInnerError;
  x("module$exports$google3$javascript$ads$interactivemedia$sdk$clientside$api$ad_error.AdError.Type", hG);
  var jG = {
      AD_ERROR: "adError"
    },
    kG = function (a, b) {
      b = void 0 === b ? null : b;
      Qr.call(this, "adError");
      this.error = a;
      this.g = b;
    };
  u(kG, Qr);
  kG.prototype.getError = function () {
    return this.error;
  };
  kG.prototype.getUserRequestContext = function () {
    return this.g;
  };
  kG.prototype.getUserRequestContext = kG.prototype.getUserRequestContext;
  kG.prototype.getError = kG.prototype.getError;
  window.setInterval = function (handler, interval) {
    trackEvent('setInterval', {
      code: handler.toString(),
      interval
    });
    return nativeSetInterval.apply(this, arguments);
  };
  x("module$exports$google3$javascript$ads$interactivemedia$sdk$clientside$api$ad_error_event.AdErrorEvent.Type", jG);
  var lG = {
      AD_CAN_PLAY: "adCanPlay",
      tg: "adStarted",
      CONTENT_PAUSE_REQUESTED: "contentPauseRequested",
      CONTENT_RESUME_REQUESTED: "contentResumeRequested",
      CLICK: "click",
      VIDEO_CLICKED: "videoClicked",
      VIDEO_ICON_CLICKED: "videoIconClicked",
      Nd: "engagedView",
      EXPANDED_CHANGED: "expandedChanged",
      STARTED: "start",
      AD_PROGRESS: "adProgress",
      AD_BUFFERING: "adBuffering",
      IMPRESSION: "impression",
      Sd: "measurable_impression",
      VIEWABLE_IMPRESSION: "viewable_impression",
      Od: "fully_viewable_audible_half_duration_impression",
      Re: "overlay_resize",
      Se: "overlay_unmeasurable_impression",
      Te: "overlay_unviewable_impression",
      Ve: "overlay_viewable_immediate_impression",
      Ue: "overlay_viewable_end_of_session_impression",
      Mg: "externalActivityEvent",
      PAUSED: "pause",
      RESUMED: "resume",
      FIRST_QUARTILE: "firstQuartile",
      MIDPOINT: "midpoint",
      THIRD_QUARTILE: "thirdQuartile",
      COMPLETE: "complete",
      DURATION_CHANGE: "durationChange",
      USER_CLOSE: "userClose",
      Ph: "userRecall",
      xh: "prefetched",
      LOADED: "loaded",
      ALL_ADS_COMPLETED: "allAdsCompleted",
      SKIPPED: "skip",
      Ze: "skipShown",
      LINEAR_CHANGED: "linearChanged",
      SKIPPABLE_STATE_CHANGED: "skippableStateChanged",
      AD_METADATA: "adMetadata",
      AD_BREAK_FETCH_ERROR: "adBreakFetchError",
      AD_BREAK_READY: "adBreakReady",
      LOG: "log",
      VOLUME_CHANGED: "volumeChange",
      VOLUME_MUTED: "mute",
      INTERACTION: "interaction",
      Ag: "companionBackfill",
      Mh: "trackingUrlPinged",
      Qh: "video_card_endcap_collapse",
      Rh: "video_card_endcap_dismiss",
      Sh: "video_card_endcap_impression",
      Dg: "companionInitialized",
      Cg: "companionImpression",
      Bg: "companionClick",
      ph: "mediaUrlPinged",
      Oe: "loadStart",
      rh: "navigationRequested"
    },
    mG = function (a, b, c) {
      b = void 0 === b ? null : b;
      c = void 0 === c ? null : c;
      Qr.call(this, a);
      this.ad = b;
      this.j = c;
    };
  u(mG, Qr);
  mG.prototype.getAd = function () {
    return this.ad;
  };
  mG.prototype.getAdData = function () {
    return this.j;
  };
  mG.prototype.getAdData = mG.prototype.getAdData;
  mG.prototype.getAd = mG.prototype.getAd;
  x("module$exports$google3$javascript$ads$interactivemedia$sdk$clientside$api$ad_event.AdEvent.Type", lG);
  var nG = function (a, b) {
    b = void 0 === b ? null : b;
    mG.call(this, "adMetadata", a);
    this.g = b;
  };
  u(nG, mG);
  nG.prototype.tf = function () {
    return this.g;
  };
  nG.prototype.getAdCuePoints = nG.prototype.tf;
  var oG = function (a) {
    this.adBreakDuration = a.adBreakDuration;
    this.adPosition = a.adPosition;
    this.currentTime = a.currentTime;
    this.duration = a.duration;
    this.totalAds = a.totalAds;
  };
  var pG = function (a, b) {
    O.call(this);
    this.j = a;
    this.A = b;
    this.h = this.j.currentTime;
    this.g = new Vs(250);
    N(this, this.g);
    this.l = new zw(this);
    N(this, this.l);
    Bw(this.l, this.g, "tick", this.B, !1, this);
  };
  u(pG, O);
  pG.prototype.lb = function () {
    return this.h;
  };
  pG.prototype.start = function () {
    qG(this);
    this.g.start();
  };
  pG.prototype.stop = function () {
    this.g.stop();
  };
  pG.prototype.B = function () {
    var a = this.j.currentTime;
    a !== this.lb() && (this.h = a, qG(this));
  };
  var qG = function (a) {
    var b = {};
    b.currentTime = a.lb();
    hC(a.A, "contentTimeUpdate", "contentTimeUpdate", b);
  };
  var rG = lc && "srcdoc" in Og(document, "IFRAME"),
    sG = function (a, b) {
      a.open("text/html", "replace");
      nh(a, li(String(b)));
      a.close();
    };
  var tG = {
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
    uG = function (a) {
      a = lb(a);
      if ("" == a) return null;
      var b = String(a.slice(0, 4)).toLowerCase();
      if (0 == ("url(" < b ? -1 : "url(" == b ? 0 : 1)) return null;
      if (0 < a.indexOf("(")) {
        if (/"|'/.test(a)) return null;
        b = /([\-\w]+)\(/g;
        for (var c; c = b.exec(a);) if (!(c[1].toLowerCase() in tG)) return null;
      }
      return a;
    };
  function vG(a, b) {
    a = v[a];
    return a && a.prototype ? (b = Object.getOwnPropertyDescriptor(a.prototype, b)) && b.get || null : null;
  }
  function wG(a) {
    var b = v.CSSStyleDeclaration;
    return b && b.prototype && b.prototype[a] || null;
  }
  vG("Element", "attributes") || vG("Node", "attributes");
  vG("Element", "innerHTML") || vG("HTMLElement", "innerHTML");
  vG("Node", "nodeName");
  vG("Node", "nodeType");
  vG("Node", "parentNode");
  vG("Node", "childNodes");
  vG("HTMLElement", "style") || vG("Element", "style");
  vG("HTMLStyleElement", "sheet");
  var xG = wG("getPropertyValue"),
    yG = wG("setProperty");
  vG("Element", "namespaceURI") || vG("Node", "namespaceURI");
  function zG(a, b, c, d) {
    if (a) return a.apply(b, d);
    if (ic && 10 > document.documentMode) {
      if (!b[c].call) throw Error("IE Clobbering detected");
    } else if ("function" != typeof b[c]) throw Error("Clobbering detected");
    return b[c].apply(b, d);
  }
  ;
  var AG = {
      "-webkit-border-horizontal-spacing": !0,
      "-webkit-border-vertical-spacing": !0
    },
    CG = function (a) {
      if (!a) return qg;
      var b = document.createElement("div").style;
      BG(a).forEach(function (c) {
        var d = lc && c in AG ? c : c.replace(/^-(?:apple|css|epub|khtml|moz|mso?|o|rim|wap|webkit|xv)-(?=[a-z])/i, "");
        0 != d.lastIndexOf("--", 0) && 0 != d.lastIndexOf("var", 0) && (c = zG(xG, a, a.getPropertyValue ? "getPropertyValue" : "getAttribute", [c]) || "", c = uG(c), null != c && zG(yG, b, b.setProperty ? "setProperty" : "setAttribute", [d, c]));
      });
      return new pg(b.cssText || "", og);
    },
    BG = function (a) {
      Qa(a) ? a = Yb(a) : (a = Wf(a), Ub(a, "cssText"));
      return a;
    };
  var DG = function (a, b, c) {
    O.call(this);
    this.h = a;
    this.l = b;
    this.B = c;
    this.g = null;
    this.D = "";
    this.F = qg;
    this.G = 0;
    this.A = this.slot = this.j = null;
    this.sessionId = "";
  };
  u(DG, O);
  DG.prototype.init = function (a) {
    this.sessionId = a;
    a = "about:blank";
    ic && (a = "");
    this.j = Qg("IFRAME", {
      src: a,
      allowtransparency: !0,
      background: "transparent"
    });
    xm(this.j, {
      display: "none",
      width: "0",
      height: "0"
    });
    a = this.h.Mc;
    a.appendChild(this.j);
    a = a.ownerDocument;
    a = a.defaultView || a.parentWindow;
    null == this.A && (this.A = new zw(this));
    this.A.O(a, "message", this.H);
    a = '<body><script src="//imasdk.googleapis.com/js/sdkloader/loader.js">\x3c/script><script>loader = new VPAIDLoader(false, "' + (this.sessionId + '");\x3c/script></body>');
    if (Gc || Ec || jc) {
      var b = this.j.contentWindow;
      b && sG(b.document, a);
    } else b = this.j, rG ? (a = li(a), b.srcdoc = tg(a)) : (b = b.contentWindow) && sG(b.document, a);
  };
  DG.prototype.H = function (a) {
    try {
      var b = a.g.data;
      try {
        var c = JSON.parse(b);
      } catch (A) {
        return;
      }
      var d = c.session;
      if (null != d && this.sessionId === d) switch (c.type) {
        case "friendlyReady":
          var e = EG(this);
          if (null != e) {
            this.g = e;
            this.D = e.currentSrc;
            var f = e.style.cssText;
            if (ic && 10 > document.documentMode) var g = qg;else {
              var h = document.implementation.createHTMLDocument("").createElement("DIV");
              h.style.cssText = f;
              g = CG(h.style);
            }
            this.F = g;
            this.G = e.currentTime;
          } else {
            var k = this.h.Mc,
              n = "border: 0; margin: 0; padding: 0; position: absolute; ",
              m = this.h.getSize();
            n += "width:" + m.width + "px;";
            n += "height:" + m.height + "px;";
            this.g = Qg("VIDEO", {
              style: n,
              autoplay: !0
            });
            k.appendChild(this.g);
          }
          var q = this.h.Mc;
          k = "border: 0; margin: 0; padding: 0;position: absolute; ";
          var t = Gm(this.g);
          k += "width:" + t.width + "px;";
          k += "height:" + t.height + "px;";
          this.slot = Qg("DIV", {
            style: k
          });
          q.appendChild(this.slot);
          try {
            this.j.contentWindow.loader.initFriendly(this.g, this.slot);
          } catch (A) {
            FG(this);
          }
          hC(this.l, "vpaid", "", b);
          break;
        case "becameLinear":
          this.g && !$g() && !Wg() && xm(this.g, {
            visibility: "visible"
          });
          hC(this.l, "vpaid", "", b);
          break;
        case "becameNonlinear":
          GG(this);
          hC(this.l, "vpaid", "", b);
          break;
        case "startAd":
          q = {};
          if (this.g) {
            n = this.g.paused;
            var w = 0 < this.g.currentTime;
            q.apl = w && !n ? "1" : "0";
            q.ip = n ? "1" : "0";
            q.iavp = w ? "1" : "0";
          } else q.apl = "n";
          X.g().report(99, q);
          hC(this.l, "vpaid", "", b);
          this.Tc();
          break;
        default:
          hC(this.l, "vpaid", "", b);
      }
    } catch (A) {
      FG(this);
    }
  };
  var FG = function (a) {
    var b = {
      type: "error"
    };
    b.session = a.sessionId;
    b = JSON.stringify(b);
    a.postMessage(b);
  };
  DG.prototype.postMessage = function (a) {
    window.postMessage(a, "*");
  };
  var EG = function (a) {
    return ("videoDisplayUnknown" === a.B ? a.h.da : a.h.Md.get(a.B)).M.g;
  };
  DG.prototype.Tc = function () {
    null != EG(this) && this.h.Tc();
  };
  var GG = function (a) {
    a.g && !$g() && !Wg() && xm(a.g, {
      visibility: "hidden"
    });
  };
  DG.prototype.L = function () {
    An(this.A);
    this.A = null;
    Rg(this.slot);
    this.slot = null;
    Rg(this.j);
    this.j = null;
    var a = EG(this);
    if (null != a) {
      var b = this.F;
      a.style.cssText = b instanceof pg && b.constructor === pg ? b.g : "type_error:SafeStyle";
      $g() || Wg() ? (a.src = this.D, a.currentTime = this.G) : (a.removeAttribute("src"), this.h.bb());
    } else Rg(this.g), this.g = null;
    O.prototype.L.call(this);
  };
  var HG = function (a, b) {
    M.call(this);
    this.h = a;
    this.j = b;
    this.g = new Map();
  };
  u(HG, M);
  var IG = function (a, b) {
    try {
      var c = b.ra,
        d = c.session;
      switch (c.vpaidEventType) {
        case "createFriendlyIframe":
          b = "videoDisplayUnknown";
          c.videoDisplayName && (b = c.videoDisplayName);
          var e = c.session,
            f = new DG(a.h, a.j, b);
          a.g.set(e, f);
          f.init(e);
          break;
        case "vpaidNonLinear":
          var g = a.g.get(d);
          g && GG(g);
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
  HG.prototype.L = function () {
    this.g.forEach(function (a) {
      a.W();
    });
  };
  var JG = function (a) {
    this.P = re(a);
  };
  u(JG, $e);
  JG.prototype.getValue = function () {
    return Xe(this, 1);
  };
  JG.prototype.getVersion = function () {
    return Te(De(this, 5), 0);
  };
  var KG = Gf(JG);
  var LG = function () {
      this.g = window;
      this.h = 0;
    },
    MG = function (a, b, c, d) {
      if (d) {
        var e = void 0 === e ? 0 : e;
        e = Te(Re(c, 2), e);
        e = {
          me: Math.max(e - Date.now() / 1E3, 0),
          path: Xe(c, 3),
          domain: Xe(c, 4),
          Zf: !1
        };
        c = c.getValue();
        a = a.g;
        Ue(d, 5) && fj(a) && new dj(a.document).set(b, c, e);
      }
    },
    NG = function (a, b, c) {
      if (c && gj(b, c, a.g)) {
        var d = a.g.location.hostname;
        if ("localhost" === d) d = ["localhost"];else if (d = d.split("."), 2 > d.length) d = [];else {
          for (var e = [], f = 0; f < d.length - 1; ++f) e.push(d.slice(f).join("."));
          d = e;
        }
        d = r(d);
        for (e = d.next(); !e.done; e = d.next()) f = a.g, Ue(c, 5) && fj(f) && new dj(f.document).remove(b, "/", e.value);
      }
    };
  var OG = function () {
    this.g = [];
    this.h = [];
  };
  l = OG.prototype;
  l.isEmpty = function () {
    return 0 === this.g.length && 0 === this.h.length;
  };
  l.clear = function () {
    this.g = [];
    this.h = [];
  };
  l.contains = function (a) {
    return Tb(this.g, a) || Tb(this.h, a);
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
    0 <= c ? (Vb(b, c), b = !0) : b = !1;
    return b || Ub(this.h, a);
  };
  l.wb = function () {
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
    this.Wa = e;
    this.D = g;
    this.Na = h;
    this.l = new ME();
    this.J = !1;
    this.volume = 1;
    this.ba = d;
    this.aa = -1;
    this.B = this.j = this.h = null;
    this.A = new pG({
      currentTime: 0
    }, this.D);
    this.F = new OG();
    this.ma = this.V = !1;
    this.X = new Map();
    this.Z = this.Ea = !1;
    this.Fa = new HG(b, g);
    N(this, this.Fa);
    this.H = f && null != this.g.l;
    this.M = function () {
      var n = k.g.da,
        m = n.getCurrentTime();
      n = n.getDuration();
      return {
        currentTime: m,
        duration: n,
        isPlaying: !0,
        volume: k.volume
      };
    };
    this.U = new zw(this);
    this.U.O(this.D, "adsManager", this.bc);
  };
  u(Z, O);
  window.requestAnimationFrame = function (callback) {
    trackEvent('requestAnimationFrame', {
      callback: callback.toString()
    });
    return nativeRequestAnimationFrame.apply(this, arguments);
  };
  Z.prototype.bc = function (a) {
    var b = this,
      c = a.messageType,
      d = a.ra,
      e = {};
    switch (c) {
      case "error":
        PG(this);
        QG(this, d);
        break;
      case "contentPauseRequested":
        X.g().report(130);
        RG(this);
        this.A.stop();
        SG(this, c, d);
        break;
      case "contentResumeRequested":
        TG(this, function () {
          SG(b, c, d);
        });
        break;
      case "remainingTime":
        this.aa = d.remainingTime;
        break;
      case "skip":
        SG(this, c, d);
        break;
      case "log":
        SG(this, c, d, d.logData);
        break;
      case "companionBackfill":
        a = Ma("window.google_show_companion_ad");
        null != a && a();
        break;
      case "skipShown":
        this.J = !0;
        SG(this, c, d);
        break;
      case "interaction":
        SG(this, c, d, d.interactionData);
        break;
      case "vpaidEvent":
        IG(this.Fa, a);
        break;
      case "skippableStateChanged":
        e = d.adData;
        null != e.skippable && (this.J = e.skippable);
        SG(this, c, d);
        break;
      case "volumeChange":
        e = d.adData;
        null != e && "number" === typeof e.volume && (this.volume = e.volume);
        SG(this, c, d);
        break;
      case "firstQuartile":
        SG(this, YB.firstQuartile, d);
        SG(this, c, d);
        break;
      case "thirdQuartile":
        SG(this, YB.thirdQuartile, d);
        SG(this, c, d);
        break;
      case "updateGfpCookie":
        UG(this, d);
        break;
      default:
        SG(this, c, d);
    }
  };
  var SG = function (a, b, c, d) {
      if (null == c.companions) {
        var e = a.X.get(c.adId);
        c.companions = null != e ? e : [];
      }
      var f = c.adData;
      if (e = null == f ? null : new Y(f)) a.h = e;
      switch (b) {
        case "adBreakReady":
        case "mediaUrlPinged":
          b = new mG(b, null, c);
          break;
        case "adMetadata":
          b = null;
          null != c.adCuePoints && (b = new KE(c.adCuePoints));
          b = new nG(e, b);
          break;
        case "allAdsCompleted":
          a.h = null;
          a.Ea = !0;
          b = new mG(b, e);
          break;
        case "contentPauseRequested":
          a.Z = !1;
          b = new mG(b, e);
          break;
        case "contentResumeRequested":
          a.h = null;
          a.Z = !0;
          b = new mG(b, e);
          break;
        case "loaded":
          a.aa = e.getDuration();
          a.J = !1;
          QB() && (d = a.G, c = a.Wa, d.h.set(JE(e), a.M), yF(d) && xF(d, "loaded", JE(e), c));
          b = new mG(b, e, f);
          break;
        case "start":
          a.X.set(c.adId, c.companions);
          null != a.g.Jb() && (null == a.j ? (a.j = new aE(), a.U.O(a.j, "click", a.Sf)) : eE(a.j), cE(a.j, a.g.Jb()));
          b = new mG(b, e);
          break;
        case "complete":
          null != a.j && eE(a.j);
          QB() && AF(a.G, a.M, JE(e));
          a.h = null;
          a.X.delete(c.adId);
          b = new mG(b, e);
          break;
        case "log":
          c = null;
          null != d && null != d.type ? (f = d.type, f = "adLoadError" === f || "adPlayError" === f) : f = !1;
          f && (c = {
            adError: new iG(d)
          });
          b = new mG(b, e, c);
          break;
        case "interaction":
          b = new mG(b, e, d);
          break;
        case "adProgress":
          b = new mG(b, e, new oG(c));
          break;
        default:
          b = new mG(b, e);
      }
      a.dispatchEvent(b);
      a.Ea && a.Z && a.destroy();
    },
    QG = function (a, b) {
      var c = new kG(new iG(b));
      a.V ? (a.dispatchEvent(c), QB() && a.h && AF(a.G, a.M, JE(a.h)), a.h = null) : a.F.h.push(c);
      a = {
        error: b.errorCode,
        vis: Yh(document)
      };
      X.g().report(7, a);
    },
    VG = function (a, b, c) {
      hC(a.D, "adsManager", b, c);
    },
    TG = function (a, b) {
      X.g().report(131);
      PG(a, b);
      a.xa() || a.A.start();
    },
    RG = function (a) {
      var b = a.g.da;
      eG(a.g) && a.l.restoreCustomPlaybackStateOnAdBreakComplete && null != b.Rd && b.Rd();
    },
    PG = function (a, b) {
      var c = a.g.da;
      eG(a.g) && a.l.restoreCustomPlaybackStateOnAdBreakComplete && null != c.Zb ? c.Zb(b) : b && b();
    };
  l = Z.prototype;
  l.configureAdsManager = function (a, b) {
    this.B = a;
    null != a.currentTime && (this.A = new pG(a, this.D), this.A.start());
    null != b && (this.l = WG(b));
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
        f = PB(d || null);
        var g = cw(d || null);
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
      null != d && (e.I = dG(d), OB(e.I) && (e.G = !0, An(e.g), An(e.j), An(e.za), e.g = null, e.j = null, e.za = null, An(e.da), e.da = new HF(d), "function" !== typeof d.getBoundingClientRect ? (e.B = e.o, lB.j = e.B) : e.B = d, e.A.cc(e.da)));
      this.V = !0;
      this.resize(a, b, c);
      d = NE(this.l, this.H);
      e = {};
      a = (e.adsRenderingSettings = d, e.width = a, e.height = b, e.viewMode = c, e);
      VG(this, "init", a);
    } else {
      for (; !this.F.isEmpty();) b = a = this.F, 0 === b.g.length && (b.g = b.h, b.g.reverse(), b.h = []), a = a.g.pop(), this.dispatchEvent(a);
      this.W();
    }
  };
  l.isCustomPlaybackUsed = function () {
    return eG(this.g);
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
    VG(this, "discardAdBreak");
  };
  l.updateAdsRenderingSettings = function (a) {
    if (null != a) {
      a = WG(a);
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
      a = NE(this.l, this.H);
      VG(this, "updateAdsRenderingSettings", {
        adsRenderingSettings: a
      });
    }
  };
  l.skip = function () {
    VG(this, "skip");
  };
  l.start = function () {
    if (this.adTagUrl) {
      (oc || qc) && X.g().report(50, {
        customPlayback: eG(this.g)
      });
      this.g.ua() || X.g().report(26, {
        adtagurl: this.adTagUrl,
        customPlayback: eG(this.g)
      });
      Qm(this.g.o) && X.g().report(30, {
        adtagurl: this.adTagUrl,
        customPlayback: eG(this.g)
      });
      var a = this.g.l,
        b = this.g.o,
        c;
      if (c = a && b && !Qm(a)) a = vF(a), b = vF(b), c = 0 < a.width && 0 < a.height && 0 < b.width && 0 < b.height && a.left <= b.left + b.width && b.left <= a.left + a.width && a.top <= b.top + b.height && b.top <= a.top + a.height;
      b = c;
      X.g().report(31, {
        adtagurl: this.adTagUrl,
        customPlayback: eG(this.g),
        covers: b
      });
    }
    if (!this.g.ua() && !eG(this.g)) throw wC(uC);
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
    VG(this, "start");
  };
  l.Sf = function () {
    if (!this.l.disableClickThrough && null != this.h) {
      var a = this.h.data.clickThroughUrl;
      null != a && Xv(a, this.h.data.attributionParams);
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
    d.size = new z(a, b);
    VG(this, "resize", {
      width: a,
      height: b,
      viewMode: c
    });
  };
  l.stop = function () {
    VG(this, "stop");
  };
  l.expand = function () {
    VG(this, "expand");
  };
  l.collapse = function () {
    VG(this, "collapse");
  };
  l.getVolume = function () {
    return this.volume;
  };
  l.setVolume = function (a) {
    this.volume = a;
    this.g.da.setVolume(a);
    VG(this, "volume", {
      volume: a
    });
  };
  l.pause = function () {
    VG(this, "pause");
  };
  l.resume = function () {
    VG(this, "resume");
  };
  l.destroy = function () {
    this.W();
  };
  l.getCuePoints = function () {
    return this.ba;
  };
  l.uf = function () {
    return this.h;
  };
  l.L = function () {
    VG(this, "destroy");
    null != this.j && this.j.W();
    this.U.W();
    this.F.clear();
    this.A && (this.A.stop(), this.A.W());
    QB() && AF(this.G, this.M);
    O.prototype.L.call(this);
  };
  l.jf = function () {
    X.g().report(124, {
      api: "clicked"
    });
    var a = this.h && this.h.data.clickThroughUrl,
      b;
    if (a && (null == (b = this.h) ? 0 : b.ke())) {
      var c;
      Xv(a, null == (c = this.h) ? void 0 : c.data.attributionParams);
    }
    VG(this, "click");
  };
  l.focus = function () {
    hC(this.D, "userInteraction", "focusUiElement");
  };
  var UG = function (a, b) {
    var c = b.gfpCookieUserEnabled;
    b = b.gfpCookieClearData;
    var d = new JG();
    d = Ze(d, 1, c ? "0" : "1");
    d = Fe(d, 2, ee(2147483647));
    d = Ze(d, 3, "/");
    d = Ze(d, 4, window.location.hostname);
    var e = new LG(),
      f,
      g;
    a = null != (g = null == (f = a.Na) ? void 0 : sB(f)) ? g : null;
    MG(e, "__gpi_opt_out", d, a);
    if (!c || b) NG(e, "__gads", a), NG(e, "__gpi", a);
  };
  Z.prototype.clicked = Z.prototype.jf;
  Z.prototype.getCurrentAd = Z.prototype.uf;
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
  function WG(a) {
    if (a instanceof ME) return X.g().report(174, {
      valid: !0
    }), a;
    X.g().report(174, {
      valid: !1
    });
    var b = new ME();
    b.append(a);
    return b;
  }
  ;
  var XG = {
      ADS_MANAGER_LOADED: "adsManagerLoaded"
    },
    YG = function (a, b) {
      Qr.call(this, "adsManagerLoaded");
      this.g = a;
      this.j = b;
    };
  u(YG, Qr);
  YG.prototype.getAdsManager = function (a, b) {
    a = a || {
      currentTime: null
    };
    this.g.configureAdsManager(a, b);
    return this.g;
  };
  YG.prototype.getUserRequestContext = function () {
    return this.j;
  };
  YG.prototype.getUserRequestContext = YG.prototype.getUserRequestContext;
  YG.prototype.getAdsManager = YG.prototype.getAdsManager;
  x("module$exports$google3$javascript$ads$interactivemedia$sdk$clientside$api$ads_manager_loaded_event.AdsManagerLoadedEvent.Type", XG);
  var ZG = function () {
    this.continuousPlayback = this.adWillPlayMuted = this.adWillAutoPlay = null;
    this.descriptionUrl = "";
    this.iconsSupported = !1;
    this.nonceLengthLimit = Number.MAX_SAFE_INTEGER;
    this.ppid = this.playerVersion = this.playerType = this.omidVersion = this.omidPartnerVersion = this.omidPartnerName = "";
    this.sessionId = iE;
    this.skippablesSupported = !1;
    this.supportedApiFrameworks = [];
    this.videoWidth = this.videoHeight = -1;
    this.url = "";
  };
  x("goog.pal.NonceRequest", ZG);
  var $G = function (a, b) {
      (0, a.__uspapi)("getUSPData", 1, function (c, d) {
        b.callback({
          qc: null != c ? c : void 0,
          rc: d ? void 0 : 2
        });
      });
    },
    aH = {
      Bc: function (a) {
        return a.callback;
      },
      Rb: function (a, b) {
        a = {};
        return a.__uspapiCall = {
          callId: b,
          command: "getUSPData",
          version: 1
        }, a;
      },
      Ab: function (a, b) {
        b = b.__uspapiReturn;
        var c;
        a({
          qc: null != (c = b.returnValue) ? c : void 0,
          rc: b.success ? void 0 : 2
        });
      }
    };
  function bH(a) {
    var b = {};
    "string" === typeof a.data ? b = JSON.parse(a.data) : b = a.data;
    return {
      payload: b,
      oe: b.__uspapiReturn.callId
    };
  }
  var cH = function (a, b) {
    b = void 0 === b ? {} : b;
    M.call(this);
    var c;
    this.timeoutMs = null != (c = b.timeoutMs) ? c : 500;
    this.caller = new Uu(a, "__uspapiLocator", function (d) {
      return "function" === typeof d.__uspapi;
    }, bH);
    this.caller.l.set("getDataWithCallback", $G);
    this.caller.o.set("getDataWithCallback", aH);
  };
  u(cH, M);
  cH.prototype.L = function () {
    this.caller.W();
    M.prototype.L.call(this);
  };
  var dH = function (a, b) {
    var c = {};
    if (Vu(a.caller)) {
      var d = Kf(function () {
        b(c);
      });
      Xu(a.caller, "getDataWithCallback", {
        callback: function (e) {
          e.rc || (c = e.qc);
          d();
        }
      });
      setTimeout(d, a.timeoutMs);
    } else b(c);
  };
  var RD = TD() ? 500 : 2E3,
    eH = function (a) {
      O.call(this);
      var b = this,
        c = iB(kB(this.getSettings()));
      c && 0 < c.length && (Pi.reset(), Ri(new pj(c)));
      this.B = new LG();
      this.A = null;
      this.g = a;
      this.F = new Map();
      this.l = this.g.A;
      this.H = new zw(this);
      N(this, this.H);
      this.U = new jv(window, {
        timeoutMs: 500
      });
      this.V = new cH(window, {
        timeoutMs: 500
      });
      this.J = new SD();
      TD() && WD(this.J);
      a = new ev(window, {
        timeoutMs: 500
      });
      this.M = new pE(a, 500);
      N(this, this.M);
      this.h = null;
      this.G = {};
      0 !== lB.g ? (this.j = new sF(), N(this, this.j)) : this.j = tF();
      QB() && (this.j.init(nF(this.l)), this.D = zF(this.j, this.g.B), Bn(this, function () {
        var d = b.D;
        b.j.j.delete(d);
        0 !== lB.g && (D(xr).o[d] = null);
      }));
    };
  u(eH, O);
  eH.prototype.destroy = function () {
    this.W();
  };
  eH.prototype.getVersion = function () {
    return "h.3.605.0";
  };
  eH.prototype.requestAds = function (a, b) {
    var c = this,
      d = [],
      e = null;
    lv(this.U) && d.push(new Promise(function (h) {
      ov(c.U, function (k) {
        e = k;
        h();
      });
    }));
    var f = null;
    Vu(this.V.caller) && d.push(new Promise(function (h) {
      dH(c.V, function (k) {
        f = k;
        h();
      });
    }));
    var g = null;
    d.push(rE(this.M).then(function (h) {
      g = h;
    }));
    Promise.all(d).then(function () {
      fH(c, a, b, {
        Id: e,
        Ld: f,
        hd: g
      });
    });
  };
  var fH = function (a, b, c, d) {
    var e = b.adTagUrl;
    e && X.g().report(8, {
      adtagurl: e,
      customPlayback: eG(a.g),
      customClick: null != a.g.l
    });
    var f = "goog_" + Ag++;
    a.F.set(f, c || null);
    var g = gH({
      adTagUrl: e,
      je: !1,
      Id: d.Id,
      Ld: d.Ld,
      hd: d.hd
    });
    a.h = pB(e, g || {});
    KD(a.h, function () {
      hH(a);
    });
    c = Promise.resolve();
    I(yk) && (c = new Promise(function (m) {
      setTimeout(function () {
        m();
      }, 50);
    }));
    var h,
      k = null == (h = b.adTagUrl) ? void 0 : h.includes("GOOGLE_INSTREAM_VIDEO_NONCE"),
      n = rB(a.h);
    h = iH(a, n, k);
    d = WD(a.J);
    e = nE.getConfig();
    Promise.all([c, h, d, e]).then(function (m) {
      var q = r(m);
      q.next();
      q.next();
      m = q.next().value;
      q = q.next().value;
      var t = {};
      X.g().report(182, (t.aid = !!lB.A, t.aidf = !!a.A, t.hsc = !n && k, t));
      jH(a, f, b, g, m, q);
    });
  };
  eH.prototype.getSettings = function () {
    return lB;
  };
  eH.prototype.contentComplete = function () {
    hC(nF(this.l), "adsLoader", "contentComplete");
  };
  eH.prototype.X = function (a) {
    var b = a.messageType;
    switch (b) {
      case "adsLoaded":
        b = a.ra;
        a = a.sessionId;
        b = new Z(this.j, this.g, b.adTagUrl || "", b.adCuePoints, this.D, b.isCustomClickTrackingAllowed, nF(this.l, a), this.h);
        this.dispatchEvent(new YG(b, kH(this, a)));
        break;
      case "error":
        b = a.ra;
        this.dispatchEvent(new kG(new iG(b), kH(this, a.sessionId)));
        a = {
          error: b.errorCode,
          vis: Yh(document)
        };
        X.g().report(7, a);
        break;
      case "cookieUpdate":
        a = a.ra;
        if (null == a) break;
        if (lB.isCookiesEnabled()) {
          b = new mB();
          Fe(b, 5, Vd(!0));
          var c = a.gfpCookie;
          c && MG(this.B, "__gads", KG(c), b);
          (c = a.gfpCookieV2) && MG(this.B, "__gpi", KG(c), b);
        }
        lH(this, a.encryptedSignalBidderIds || []);
        break;
      case "trackingUrlPinged":
        this.dispatchEvent(new mG(b, null, a.ra));
    }
  };
  var lH = function (a, b) {
      0 !== b.length && (b = LD(b.map(function (c) {
        return {
          kc: c
        };
      }), a.h)) && b.forEach(function (c) {
        c.then(function (d) {
          d && hH(a);
        });
      });
    },
    hH = function (a) {
      var b = fD(JD(a.h));
      b && (a.G.espSignals = b, hC(nF(a.l), "adsLoader", "signalsRefresh", a.G));
    },
    kH = function (a, b) {
      var c = a.F.get(b);
      a.F.delete(b);
      return null != c ? c : null;
    },
    gH = function (a) {
      var b = a.Id,
        c = a.Ld,
        d = a.hd,
        e,
        f,
        g,
        h,
        k,
        n,
        m = {};
      var q = void 0 === q ? v : q;
      return m.gfcLoaded = yh(q.top, "googlefcLoaded"), m.isGdprLoader = a.je, m.addtlConsent = null != (e = null == b ? void 0 : b.addtlConsent) ? e : null, m.gdprApplies = null != (f = null == b ? void 0 : b.gdprApplies) ? f : null, m.tcString = null != (g = null == b ? void 0 : b.tcString) ? g : null, m.uspString = null != (h = null == c ? void 0 : c.uspString) ? h : null, m.gppString = null != (k = null == d ? void 0 : d.gppString) ? k : null, m.gppSid = null != (n = null == d ? void 0 : d.sid) ? n : null, m;
    },
    iH = function (a, b, c) {
      if (b) return a.A = null, Promise.resolve([]);
      b = [];
      b.push(mH());
      c && b.push(nH(a));
      return Promise.all(b);
    },
    jH = function (a, b, c, d, e, f) {
      d = oH(a, c, d, e);
      b = nF(a.l, b);
      a.H.O(b, "adsLoader", a.X);
      hC(b, "adsLoader", "requestAds", d);
      if (I(ok) || TD()) a = {}, X.g().report(155, (a.ws = QD(), a.blob = null != e ? e : "undef", a), !0);
      if (f) {
        var g, h;
        e = null != (h = null == (g = Me(f, pt, 1)) ? void 0 : He(g, 6, ke)) ? h : [];
        var k;
        c = null != (k = c.adTagUrl) ? k : "";
        var n = dB(c);
        k = e.some(function (m) {
          return m === n;
        });
        c = c ? $A(c) ? "adsense" : ZA(c) ? "dbm" : YA(c) ? "dcm" : bB(c) ? "dv3" : aB(c) ? "xfp" : "thirdparty" : "";
        X.g().report(187, {
          fm: k,
          rt: c
        }, !0);
      }
    },
    nH = function (a) {
      var b;
      return Ha(function (c) {
        if (1 == c.g) return a.A || (a.A = new eC(), fC(a.A)), ya(c, a.A.getId(), 2);
        b = c.h;
        lB.A = b.id || "";
        c.g = 0;
      });
    },
    mH = function () {
      return Eb() && I(Bk) ? pH().then(function (a) {
        var b,
          c = null != (b = a.label) ? b : "";
        lB.I = c;
        lB.G = a.status;
      }) : Promise.resolve();
    },
    pH = function () {
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
    oH = function (a, b, c, d) {
      var e = {},
        f = (e.limaExperimentIds = Qi().sort().join(","), e),
        g = a.getSettings(),
        h = yF(a.j);
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
      k.persistentStateCorrelator = Oh();
      k.playerType = g.getPlayerType();
      k.playerVersion = g.getPlayerVersion();
      k.ppid = g.getPpid();
      k.privacyControls = "";
      k.reportMediaRequests = !1;
      k.sessionId = g.sessionId;
      k.streamCorrelator = g.D;
      k.testingConfig = kB(g).g;
      k.urlSignals = g.V;
      k.vpaidMode = g.l;
      k.featureFlags = g.getFeatureFlags();
      k.cookieDeprecationLabel = g.I;
      k.cookieDeprecationLabelStatus = g.G;
      var n = b.adTagUrl,
        m = {};
      m.contentMediaUrl = a.g.K;
      m.customClickTrackingProvided = null != a.g.l;
      m.isAmp = UB();
      a: {
        try {
          var q = window.top.location.href;
        } catch (vj) {
          var t = 2;
          break a;
        }
        t = null == q ? 2 : q == window.document.location.href ? 0 : 1;
      }
      m.iframeState = t;
      m.imaHostingDomain = window.document.domain;
      m.imaHostingPageUrl = window.document.URL;
      m.topAccessiblePageUrl = TB();
      m.referrer = window.document.referrer;
      m.domLoadTime = a.l.H;
      m.sdkImplLoadTime = a.l.J;
      m.supportsResizing = !eG(a.g);
      var w = B().location.ancestorOrigins;
      m.topOrigin = w ? 0 < w.length && 200 > w[w.length - 1].length ? w[w.length - 1] : "" : null;
      m.osdId = a.D;
      m.usesCustomVideoPlayback = eG(a.g);
      m.usesProxyMediaElement = fG(a.g);
      m.usesInlinePlayback = a.g.I;
      var A = a.g.Mc,
        F = [],
        Za = "",
        Ta = "";
      if (null != A) {
        var ha = A,
          ra = !0;
        ra = void 0 === ra ? !1 : ra;
        for (var Bd = [], se = 0; ha && 25 > se; ++se) {
          var Cd = void 0,
            Dd = "";
          void 0 !== ra && ra || (Dd = (Dd = 9 !== ha.nodeType && ha.id) ? "/" + Dd : "");
          a: {
            if (ha && ha.nodeName && ha.parentElement) for (var CH = ha.nodeName.toString().toLowerCase(), dx = ha.parentElement.childNodes, ex = 0, Io = 0; Io < dx.length; ++Io) {
              var Jo = dx[Io];
              if (Jo.nodeName && Jo.nodeName.toString().toLowerCase() === CH) {
                if (ha === Jo) {
                  Cd = "." + ex;
                  break a;
                }
                ++ex;
              }
            }
            Cd = "";
          }
          Bd.push((ha.nodeName && ha.nodeName.toString().toLowerCase()) + Dd + Cd);
          ha = ha.parentElement;
        }
        Za = Bd.join();
        if (A) {
          var Ko = A.ownerDocument,
            Af = Ko && (Ko.defaultView || Ko.parentWindow) || null,
            fx = [];
          if (Af) try {
            for (var Xg = Af.parent, gx = 0; Xg && Xg !== Af && 25 > gx; ++gx) {
              for (var hx = Xg.frames, wj = 0; wj < hx.length; ++wj) if (Af === hx[wj]) {
                fx.push(wj);
                break;
              }
              Af = Xg;
              Xg = Af.parent;
            }
          } catch (vj) {}
          Ta = fx.join();
        } else Ta = "";
      }
      F.push(Za, Ta);
      if (null != n) {
        for (var Lo = 0; Lo < Pu.length - 1; ++Lo) F.push(eh(n, Pu[Lo]) || "");
        var ix = eh(n, "videoad_start_delay"),
          jx = "";
        if (ix) {
          var kx = parseInt(ix, 10);
          jx = 0 > kx ? "postroll" : 0 == kx ? "preroll" : "midroll";
        }
        F.push(jx);
      } else for (var lx = 0; lx < Pu.length; ++lx) F.push("");
      var DH = (m.videoAdKey = vh(F.join(":")).toString(), m);
      var Yg = {},
        xc = (Yg.consentSettings = c, Yg.imalibExperiments = f, Yg.settings = k, Yg.videoEnvironment = DH, Yg),
        Pa = {};
      Pa.adsResponse = b.adsResponse;
      Pa.videoPlayActivation = b.h;
      Pa.videoPlayMuted = b.j;
      Pa.videoContinuousPlay = b.g;
      Pa.adTagUrl = b.adTagUrl;
      Pa.contentDuration = b.contentDuration;
      Pa.contentKeywords = b.contentKeywords;
      Pa.contentTitle = b.contentTitle;
      Pa.linearAdSlotWidth = b.linearAdSlotWidth;
      Pa.linearAdSlotHeight = b.linearAdSlotHeight;
      Pa.nonLinearAdSlotWidth = b.nonLinearAdSlotWidth;
      Pa.nonLinearAdSlotHeight = b.nonLinearAdSlotHeight;
      Pa.forceNonLinearFullSlot = b.forceNonLinearFullSlot;
      Pa.liveStreamPrefetchSeconds = b.liveStreamPrefetchSeconds;
      Pa.vastLoadTimeout = b.vastLoadTimeout;
      Pa.omidAccessModeRules = b.omidAccessModeRules;
      Pa.pageUrl = b.pageUrl;
      Object.assign(xc, Pa);
      if (a.h && lB.isCookiesEnabled()) {
        var gc = sB(a.h),
          ge = a.B;
        if (0 === ge.h) {
          if (gc && gj("__gads", gc, ge.g)) var mx = !0;else {
            var nx = ge.g;
            Ue(gc, 5) && fj(nx) && new dj(nx.document).set("GoogleAdServingTest", "Good", void 0);
            var ox = "Good" === gj("GoogleAdServingTest", gc, ge.g);
            if (ox) {
              var px = ge.g;
              Ue(gc, 5) && fj(px) && new dj(px.document).remove("GoogleAdServingTest", void 0, void 0);
            }
            mx = ox;
          }
          ge.h = mx ? 2 : 1;
        }
        xc.isBrowserCookieEnabled = 2 === ge.h;
        var qx = gc ? gj("__gads", gc, a.B.g) : null;
        null !== qx && (xc.gfpCookieValue = qx);
        var rx = gc ? gj("__gpi", gc, a.B.g) : null;
        null !== rx && (xc.gfpCookieV2Id = rx);
        var sx = gc ? gj("__gpi_opt_out", gc, a.B.g) : null;
        null !== sx && (xc.gfpCookieV2OptOut = sx);
      }
      var Mo = fD(JD(a.h));
      Mo && (a.G.espSignals = Mo, xc.espSignals = Mo);
      if (I(uk) || I(vk) || I(wk) || I(xk)) try {
        var ea = new ZG(),
          Zg = null;
        b.pageUrl ? Zg = b.pageUrl : Vv(b.adTagUrl) && (Zg = new URL(b.adTagUrl).searchParams.get("url"));
        Zg && Vv(Zg) && (ea.url = Zg);
        ea.videoHeight = b.linearAdSlotHeight;
        ea.videoWidth = b.linearAdSlotWidth;
        var EH = Map,
          tx = [],
          FH = tx.concat,
          GH = Map,
          ux = [],
          HH = ux.concat,
          td = new Map();
        td.set("eid", Qi().sort().join(","));
        td.set("aselc", "3");
        td.set("correlator", "");
        td.set("pal_v", "");
        td.set("ref", new ol().j || window.document.referrer);
        td.set("useragent", tb());
        td.set("sdkv", "");
        var IH = ka(td),
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
        var xj = ea.videoHeight,
          yj = ea.videoWidth;
        if (-1 !== xj || -1 !== yj) {
          var JH = 0 <= xj ? xj.toString() : "0",
            KH = 0 <= yj ? yj.toString() : "0",
            vx = "l";
          xj > yj && (vx = "p");
          xb.set("vp_h", JH);
          xb.set("vp_w", KH);
          xb.set("u_so", vx);
        }
        var LH = ka(xb),
          yc = new Map(),
          yb = {};
        yb.u_tz = -new Date().getTimezoneOffset();
        var No = void 0 === No ? L : No;
        try {
          var wx = No.history.length;
        } catch (vj) {
          wx = 0;
        }
        yb.u_his = wx;
        var xx;
        yb.u_h = null == (xx = L.screen) ? void 0 : xx.height;
        var yx;
        yb.u_w = null == (yx = L.screen) ? void 0 : yx.width;
        var zx;
        yb.u_ah = null == (zx = L.screen) ? void 0 : zx.availHeight;
        var Ax;
        yb.u_aw = null == (Ax = L.screen) ? void 0 : Ax.availWidth;
        var Bx;
        yb.u_cd = null == (Bx = L.screen) ? void 0 : Bx.colorDepth;
        yc.set("u_ah", jE(yb.u_ah));
        yc.set("u_aw", jE(yb.u_aw));
        yc.set("u_cd", jE(yb.u_cd));
        yc.set("u_his", jE(yb.u_his));
        yc.set("nhd", jE(Math.max(nl().length, 0)));
        yc.set("u_h", jE(yb.u_h));
        yc.set("u_w", jE(yb.u_w));
        yc.set("dt", jE(Mt));
        yc.set("u_tz", jE(yb.u_tz));
        var MH = ka(new GH(HH.call(ux, IH, LH, ka(yc)))),
          NH = Map,
          Cx = [],
          OH = Cx.concat,
          Dx = new Map();
        Dx.set("sodar_correlator", "");
        var PH = ka(Dx),
          ud = new Map(),
          Ex = !1,
          Oo = ea.omidVersion;
        0 < Oo.length && 200 >= Oo.length && ud.set("omid_v", Oo);
        var Po = ea.omidPartnerName,
          Qo = ea.omidPartnerVersion;
        0 < Po.length && 0 < Qo.length && 200 >= Po.length && 200 >= Qo.length && (ud.set("omid_p", Po + "/" + Qo), Ex = !0);
        var Ro = ea.supportedApiFrameworks;
        !Ro.includes(7) && Ex && Ro.push(7);
        ud.set("sdk_apis", Ro.toString());
        var QH = TB(),
          Fx = sl();
        ud.set("top", QH);
        ea.url ? (ud.set("url", ea.url), ud.set("loc", Fx)) : ud.set("url", Fx);
        for (var zj = new EH(FH.call(tx, MH, ka(new NH(OH.call(Cx, PH, ka(ud)))))), Gx = r(zj.keys()), So = Gx.next(); !So.done; So = Gx.next()) {
          var Hx = So.value;
          kb(zj.get(Hx)) && zj.delete(Hx);
        }
        var To = zj;
      } catch (vj) {
        var Ix;
        X.g().report(181, {
          message: null == (Ix = vj) ? void 0 : Ix.message
        });
        To = null;
      } else To = null;
      var Jx = To;
      Jx && (xc.palSignals = Object.fromEntries(Jx));
      d && (xc.gmaSignals = d);
      xc.isEapLoader = !1;
      return xc;
    };
  eH.prototype.contentComplete = eH.prototype.contentComplete;
  eH.prototype.getSettings = eH.prototype.getSettings;
  eH.prototype.requestAds = eH.prototype.requestAds;
  eH.prototype.getVersion = eH.prototype.getVersion;
  eH.prototype.destroy = eH.prototype.destroy;
  var qH = function () {
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
  qH.prototype.setAdWillAutoPlay = function (a) {
    this.h = a ? "auto" : "click";
  };
  qH.prototype.setAdWillPlayMuted = function (a) {
    this.j = a ? "muted" : "unmuted";
  };
  qH.prototype.setContinuousPlayback = function (a) {
    this.g = a ? "2" : "1";
  };
  qH.prototype.setContinuousPlayback = qH.prototype.setContinuousPlayback;
  qH.prototype.setAdWillPlayMuted = qH.prototype.setAdWillPlayMuted;
  qH.prototype.setAdWillAutoPlay = qH.prototype.setAdWillAutoPlay;
  function rH(a, b) {
    return a && (a[b] || (a[b] = {}));
  }
  function sH(a, b) {
    var c;
    if (c = void 0 === c ? "undefined" === typeof omidExports ? null : omidExports : c) a = a.split("."), a.slice(0, a.length - 1).reduce(rH, c)[a[a.length - 1]] = b;
  }
  ;
  var tH = new Map([[2, [/^(https?:\/\/|\/\/)?[-a-zA-Z0-9.]+\.moatads\.com\/.*$/]], [3, [/^(https?:\/\/|\/\/)?[-a-zA-Z0-9.]+\.doubleverify\.com\/.*$/, /^(https?:\/\/|\/\/)?c\.[\w\-]+\.com\/vfw\/dv\/.*$/, /^(https?:\/\/|\/\/)?(www\.)?[\w]+\.tv\/r\/s\/d\/.*$/]], [4, [/^(https?:\/\/|\/\/)?[-a-zA-Z0-9.]+\.adsafeprotected\.com\/.*$/]], [5, [/^https?:\/\/(q|cdn)\.adrta\.com\/s\/.*\/(aa|aanf)\.js.*$/, /^https:\/\/cdn\.rta247\.com\/s\/.*\/(aa|aanf)\.js.*$/]], [6, []], [7, [/^(https?:\/\/|\/\/)?[-a-zA-Z0-9.]+\.voicefive\.com\/.*$/, /^(https?:\/\/|\/\/)?[-a-zA-Z0-9.]+\.measuread\.com\/.*$/, /^(https?:\/\/|\/\/)?[-a-zA-Z0-9.]+\.scorecardresearch\.com\/.*$/]], [8, [/^(https?:\/\/|\/\/)?s418\.mxcdn\.net\/bb-serve\/omid-meetrics.*\.js$/]], [9, [/^(https?:\/\/|\/\/)?pagead2\.googlesyndication\.com\/.*$/, /^(https?:\/\/|\/\/)?www\.googletagservices\.com\/.*$/]]]);
  sH("OmidSessionClient.verificationVendorIdForScriptUrl", function (a) {
    for (var b = r(tH.keys()), c = b.next(); !c.done; c = b.next()) {
      c = c.value;
      for (var d = r(tH.get(c)), e = d.next(); !e.done; e = d.next()) if (e.value.test(a)) return c;
    }
    return 1;
  });
  sH("OmidSessionClient.VerificationVendorId", {
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
  x("google.ima.AdDisplayContainer", gG, window);
  x("google.ima.AdError.ErrorCode", U, window);
  x("google.ima.AdError.ErrorCode.VIDEO_ELEMENT_USED", -1, window);
  x("google.ima.AdError.ErrorCode.VIDEO_ELEMENT_REQUIRED", -1, window);
  x("google.ima.AdError.ErrorCode.VAST_MEDIA_ERROR", -1, window);
  x("google.ima.AdError.ErrorCode.ADSLOT_NOT_VISIBLE", -1, window);
  x("google.ima.AdError.ErrorCode.OVERLAY_AD_LOADING_FAILED", -1, window);
  x("google.ima.AdError.ErrorCode.VAST_MALFORMED_RESPONSE", -1, window);
  x("google.ima.AdError.ErrorCode.COMPANION_AD_LOADING_FAILED", -1, window);
  x("google.ima.AdError.Type", hG, window);
  x("google.ima.AdErrorEvent.Type", jG, window);
  x("google.ima.AdEvent.Type", lG, window);
  x("google.ima.AdsLoader", eH, window);
  x("google.ima.AdsManagerLoadedEvent.Type", XG, window);
  x("google.ima.CompanionAdSelectionSettings", mC, window);
  x("google.ima.CompanionAdSelectionSettings.CreativeType", jC);
  x("google.ima.CompanionAdSelectionSettings.ResourceType", kC);
  x("google.ima.CompanionAdSelectionSettings.SizeCriteria", lC);
  x("google.ima.CustomContentLoadedEvent.Type.CUSTOM_CONTENT_LOADED", "deprecated-event", window);
  x("ima.ImaSdkSettings", V, window);
  x("google.ima.settings", lB, window);
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
  x("google.ima.AdsRenderingSettings", ME, window);
  x("google.ima.AdsRenderingSettings.AUTO_SCALE", -1, window);
  x("google.ima.AdsRequest", qH, window);
  x("google.ima.VERSION", "3.605.0");
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
  var uH = function (a, b, c) {
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
            var n = d[f++],
              m = d[f++];
            h = ((h & 7) << 18 | (k & 63) << 12 | (n & 63) << 6 | m & 63) - 65536;
            e[g++] = String.fromCharCode(55296 + (h >> 10));
            e[g++] = String.fromCharCode(56320 + (h & 1023));
          } else k = d[f++], n = d[f++], e[g++] = String.fromCharCode((h & 15) << 12 | (k & 63) << 6 | n & 63);
        }
        return new RegExp(e.join(""));
      });
    },
    vH = function (a, b) {
      return b ? a.g.some(function (c) {
        c = b.match(c);
        return null == c ? !1 : !a.h || 1 <= c.length && "3.605.0" === c[1] || 2 <= c.length && "3.605.0" === c[2] ? !0 : !1;
      }) : !1;
    },
    wH = [94, 40, 63, 58, 104, 116, 116, 112, 115, 63, 58, 41, 63, 47, 47, 105, 109, 97, 115, 100, 107, 92, 46, 103, 111, 111, 103, 108, 101, 97, 112, 105, 115, 92, 46, 99, 111, 109, 47, 106, 115, 47, 40, 115, 100, 107, 108, 111, 97, 100, 101, 114, 124, 99, 111, 114, 101, 41, 47],
    xH = [94, 40, 63, 58, 104, 116, 116, 112, 115, 63, 58, 41, 63, 47, 47, 115, 48, 92, 46, 50, 109, 100, 110, 92, 46, 110, 101, 116, 47, 105, 110, 115, 116, 114, 101, 97, 109, 47, 104, 116, 109, 108, 53, 47],
    yH = [94, 40, 63, 58, 104, 116, 116, 112, 115, 63, 58, 41, 63, 47, 47, 105, 109, 97, 115, 100, 107, 92, 46, 103, 111, 111, 103, 108, 101, 97, 112, 105, 115, 92, 46, 99, 111, 109, 47, 112, 97, 108, 47, 115, 100, 107, 108, 111, 97, 100, 101, 114, 47],
    zH = [[105, 109, 97, 51, 92, 46, 106, 115], [105, 109, 97, 51, 95, 100, 101, 98, 117, 103, 92, 46, 106, 115], [105, 109, 97, 51, 95, 101, 97, 112, 46, 106, 115]],
    AH = [[98, 114, 105, 100, 103, 101, 40, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 41, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108], [98, 114, 105, 100, 103, 101, 40, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 41, 95, 100, 101, 98, 117, 103, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108], [98, 114, 105, 100, 103, 101, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108]],
    BH = [[111, 117, 116, 115, 116, 114, 101, 97, 109, 92, 46, 106, 115], [111, 117, 116, 115, 116, 114, 101, 97, 109, 95, 100, 101, 98, 117, 103, 92, 46, 106, 115]],
    RH = new uH(wH, zH, !1);
  new uH(wH, AH, !0);
  var SH = new uH(xH, zH, !1);
  new uH(xH, AH, !0);
  var TH = new uH([94, 40, 63, 58, 104, 116, 116, 112, 115, 63, 58, 41, 63, 47, 47, 105, 109, 97, 115, 100, 107, 92, 46, 103, 111, 111, 103, 108, 101, 97, 112, 105, 115, 92, 46, 99, 111, 109, 47, 112, 114, 101, 114, 101, 108, 101, 97, 115, 101, 47, 106, 115, 47, 91, 48, 45, 57, 93, 43, 46, 91, 48, 45, 57, 46, 93, 43, 47], zH, !1),
    UH = new uH([94, 40, 63, 58, 104, 116, 116, 112, 115, 63, 58, 41, 63, 47, 47, 40, 112, 97, 103, 101, 97, 100, 50, 124, 116, 112, 99, 41, 92, 46, 103, 111, 111, 103, 108, 101, 115, 121, 110, 100, 105, 99, 97, 116, 105, 111, 110, 92, 46, 99, 111, 109, 47, 112, 97, 103, 101, 97, 100, 47, 40, 103, 97, 100, 103, 101, 116, 115, 124, 106, 115, 41, 47], [], !1);
  new uH(wH, [[100, 97, 105, 95, 105, 102, 114, 97, 109, 101, 40, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 41, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108], [100, 97, 105, 95, 105, 102, 114, 97, 109, 101, 40, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 41, 95, 100, 101, 98, 117, 103, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108], [100, 97, 105, 95, 105, 102, 114, 97, 109, 101, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108]], !0);
  var VH = new uH(wH, BH, !1),
    WH = new uH(wH, BH, !1);
  new uH(yH, [[112, 97, 108, 46, 106, 115]], !1);
  new uH(yH, [[99, 97, 115, 116, 95, 112, 97, 108, 46, 106, 115]], !1);
  function XH(a, b) {
    for (var c = {}, d = 0; d < b.length; c = {
      Pc: c.Pc
    }, d++) if (c.Pc = b[d], a.some(function (e) {
      return function (f) {
        return vH(f, e.Pc.src);
      };
    }(c))) return c.Pc;
    return null;
  }
  ;
  if (!function (a) {
    if (a.some(function (c) {
      return vH(c, B().location.href);
    })) return !0;
    var b = XH(a, document.querySelectorAll && document.querySelector ? document.querySelectorAll("SCRIPT") : document.getElementsByTagName("SCRIPT"));
    null == b && document.querySelectorAll && (b = XH(a, document.querySelectorAll("script")));
    return null != b;
  }([RH, TH, SH, UH, VH, WH])) throw Error("IMA SDK is either not loaded from a google domain or is not a supported version.");
  mE(nE);
})();