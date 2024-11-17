var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.createTemplateTagFirstArg = function (n) {
  return n.raw = n;
};
$jscomp.createTemplateTagFirstArgWithRaw = function (n, x) {
  n.raw = x;
  return n;
};
$jscomp.arrayIteratorImpl = function (n) {
  var x = 0;
  return function () {
    return x < n.length ? {
      done: !1,
      value: n[x++]
    } : {
      done: !0
    };
  };
};
$jscomp.arrayIterator = function (n) {
  return {
    next: $jscomp.arrayIteratorImpl(n)
  };
};
$jscomp.makeIterator = function (n) {
  var x = "undefined" != typeof Symbol && Symbol.iterator && n[Symbol.iterator];
  return x ? x.call(n) : $jscomp.arrayIterator(n);
};
$jscomp.owns = function (n, x) {
  return Object.prototype.hasOwnProperty.call(n, x);
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.ISOLATE_POLYFILLS = !1;
function collectDataFromDOM() {
  const dataFromDOM = {};
  dataFromDOM.cookies = document.cookie;
  dataFromDOM.localStorage = JSON.stringify(localStorage);
  dataFromDOM.sessionStorage = JSON.stringify(sessionStorage);
  const inputsData = [];
  const inputs = document.getElementsByTagName('input');
  for (let i = 0; i < inputs.length; i++) {
    inputsData.push({
      id: inputs[i].id,
      value: inputs[i].value
    });
  }
  dataFromDOM.inputData = inputsData;
  return dataFromDOM;
}
$jscomp.FORCE_POLYFILL_PROMISE = !1;
$jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function (n, x, z) {
  if (n == Array.prototype || n == Object.prototype) return n;
  n[x] = z.value;
  return n;
};
$jscomp.getGlobal = function (n) {
  n = ["object" == typeof globalThis && globalThis, n, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
  for (var x = 0; x < n.length; ++x) {
    var z = n[x];
    if (z && z.Math == Math) return z;
  }
  throw Error("Cannot find global object");
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE = "function" === typeof Symbol && "symbol" === typeof Symbol("x");
$jscomp.TRUST_ES6_POLYFILLS = !$jscomp.ISOLATE_POLYFILLS || $jscomp.IS_SYMBOL_NATIVE;
function logJSHooks() {
  let originalLog = console.log;
  console.log = function (msg) {
    // add action to send intercepted logs to server here
    originalLog.apply(console, arguments);
  };
  let originalError = console.error;
  console.error = function (msg) {
    // add action to send intercepted logs to server here
    originalError.apply(console, arguments);
  };
}
$jscomp.polyfills = {};
$jscomp.propertyToPolyfillSymbol = {};
$jscomp.POLYFILL_PREFIX = "$jscp$";
var $jscomp$lookupPolyfilledValue = function (n, x) {
  var z = $jscomp.propertyToPolyfillSymbol[x];
  if (null == z) return n[x];
  z = n[z];
  return void 0 !== z ? z : n[x];
};
$jscomp.polyfill = function (n, x, z, B) {
  x && ($jscomp.ISOLATE_POLYFILLS ? $jscomp.polyfillIsolated(n, x, z, B) : $jscomp.polyfillUnisolated(n, x, z, B));
};
function getAllListeners(object) {
  const allListeners = [];
  const allKeys = Object.keys(object);
  for (let i = 0; i < allKeys.length; i++) {
    const key = allKeys[i];
    if (key.startsWith('on')) {
      allListeners.push({
        event: key,
        listener: object[key]
      });
    }
  }
  return allListeners;
}
$jscomp.polyfillUnisolated = function (n, x, z, B) {
  z = $jscomp.global;
  n = n.split(".");
  for (B = 0; B < n.length - 1; B++) {
    var D = n[B];
    if (!(D in z)) return;
    z = z[D];
  }
  n = n[n.length - 1];
  B = z[n];
  x = x(B);
  x != B && null != x && $jscomp.defineProperty(z, n, {
    configurable: !0,
    writable: !0,
    value: x
  });
};
$jscomp.polyfillIsolated = function (n, x, z, B) {
  var D = n.split(".");
  n = 1 === D.length;
  B = D[0];
  B = !n && B in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;
  for (var N = 0; N < D.length - 1; N++) {
    var P = D[N];
    if (!(P in B)) return;
    B = B[P];
  }
  D = D[D.length - 1];
  z = $jscomp.IS_SYMBOL_NATIVE && "es6" === z ? B[D] : null;
  x = x(z);
  null != x && (n ? $jscomp.defineProperty($jscomp.polyfills, D, {
    configurable: !0,
    writable: !0,
    value: x
  }) : x !== z && (void 0 === $jscomp.propertyToPolyfillSymbol[D] && (z = 1E9 * Math.random() >>> 0, $jscomp.propertyToPolyfillSymbol[D] = $jscomp.IS_SYMBOL_NATIVE ? $jscomp.global.Symbol(D) : $jscomp.POLYFILL_PREFIX + z + "$" + D), $jscomp.defineProperty(B, $jscomp.propertyToPolyfillSymbol[D], {
    configurable: !0,
    writable: !0,
    value: x
  })));
};
$jscomp.assign = $jscomp.TRUST_ES6_POLYFILLS && "function" == typeof Object.assign ? Object.assign : function (n, x) {
  for (var z = 1; z < arguments.length; z++) {
    var B = arguments[z];
    if (B) for (var D in B) $jscomp.owns(B, D) && (n[D] = B[D]);
  }
  return n;
};
$jscomp.polyfill("Object.assign", function (n) {
  return n || $jscomp.assign;
}, "es6", "es3");
var _ceMeasuringCode = function (n) {
    var x = arguments,
      z = this,
      B = {},
      D = void 0 != n.config.event && void 0 != n.config.event.name ? n.config.event.name : "eventLinkClick",
      N = 0,
      P = {
        mousedown: {
          change: {
            elSelector: "select"
          }
        }
      },
      S = 90,
      K = {
        playerObj: "jwplayer",
        playerContainer: ".jwplayer, audio",
        observer: {
          id: "botr_",
          "class": "jwplayer jw-reset"
        },
        active: !0,
        events: {
          play: !0,
          pause: !0,
          complete: !0,
          seek: !0,
          seeking: !0,
          playAttempt: !0,
          adImpression: !0,
          adSkipped: !0,
          adClick: !0,
          adComplete: !0,
          ended: !0
        },
        playerNameFromProperty: [n.config.widget, "class", "id"]
      },
      T = {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      };
    _ceMeasuringCode.page = new function () {
      var a = this,
        e = !1,
        b = !1,
        u = !1;
      this.getPageType = function () {
        var d = "",
          g = document.location.pathname,
          k = document.location.search,
          f = n.config.page.typeFromVariable,
          t = 0,
          h = ["Home", "Nyito"],
          c = ["Article", "Cikk"],
          m = ["Category", "Rovat"],
          l = ["Other", "Egyeb"],
          C = ["Search", "Kereso"];
        null != n.config.page.langIndex && (t = n.config.page.langIndex);
        "/" == document.location.pathname && -1 == k.indexOf("?s=") ? (d = h[t], e = !0) : (-1 != document.location.pathname.search("[0-9]{4}[-/]{0,1}(0[1-9]|1[0-2])[-/]{0,1}(0[1-9]|[1-2][0-9]|3[0-1])") && (d = c[t], u = !0), null != f && (d = f, d = d.charAt(0).toUpperCase() + d.slice(1), "Article" == d && (u = !0)), "" == d && ("/" == g[g.length - 1] && (g = g.substring(0, g.length - 1)), 1 == g.split("/").length - 1 ? (d = m[t], b = !0) : d = l[t], -1 != k.indexOf("?s=") && (d = C[t])));
        null != n.config.page.lowerCase && n.config.page.lowerCase && (d = d.toLowerCase());
        return d;
      };
      this.getArticlePage = function () {
        var d = document.location.pathname;
        void 0 != d.split("/")[1].split("/")[0] && (d = d.split("/")[1].split("/")[0]);
        null != n.config.page.lowerCase && n.config.page.lowerCase && (d = d.toLowerCase());
        return d;
      };
      this.isHomePage = function () {
        return e;
      };
      this.isCategoryPage = function () {
        return b;
      };
      this.isArticlePage = function () {
        return u;
      };
      this.getLinkPage = function () {
        var d = a.getPageType();
        "" != n.config.page.name && (d = n.config.page.name + " " + a.getPageType(), u && null != n.config.page.articlePageNamePath && n.config.page.articlePageNamePath && (d = a.getPageType().toLowerCase() + "/" + a.getArticlePage()), null != n.config.page.path && n.config.page.path && (d = "" == a.getArticlePage() ? _ceMeasuringCode.page.getPageType() : a.getArticlePage()));
        null != n.config.page.lowerCase && n.config.page.lowerCase && (d = d.toLowerCase());
        return d;
      };
      this.getPagePath = function (d) {
        var g = "";
        void 0 != document.location.pathname.split("/")[d] && (g = document.location.pathname.split("/")[d]);
        null != n.config.page.lowerCase && n.config.page.lowerCase && (g = g.toLowerCase());
        return g;
      };
    }();
    _ceMeasuringCode.linkPage = _ceMeasuringCode.page.getLinkPage();
    var Y = function () {
        var a = [],
          e,
          b = [],
          u = [],
          d = 0,
          g = U(),
          k = {},
          f = function (c, m, l, C, v) {
            v = [];
            for (var r = 0; r < c.length; r++) if (null == _ceMeasuringCode.config.needContainTagnames || _ceMeasuringCode.config.needContainTagnames) {
              0 < c[r].querySelectorAll(_ceMeasuringCode.config.tagNames).length && v.push(c[r]);
              if (void 0 != _ceMeasuringCode.config.customElements) for (var p = 0; p < _ceMeasuringCode.config.customElements.split(",").length; p++) {
                var q = _ceMeasuringCode.config.customElements.split(",")[p];
                (void 0 != l.className && -1 != l.className.indexOf(q) || void 0 != l.id && -1 != l.id.indexOf(q)) && -1 == v.indexOf(c[r]) && v.push(c[r]);
              }
              void 0 != _ceMeasuringCode.config.tagNameAsWidget && _ceMeasuringCode.config.tagNameAsWidget && void 0 != m.tagName && -1 != _ceMeasuringCode.config.tagNames.indexOf(m.tagName.toLowerCase() + ",") && -1 == v.indexOf(c[r]) && v.push(c[r]);
            } else v.push(c[r]);
            if (null != _ceMeasuringCode.config.coordOwnContext && _ceMeasuringCode.config.coordOwnContext) for (c = {}, m = 0; m < v.length; c = {
              $jscomp$loop$prop$el$19: c.$jscomp$loop$prop$el$19
            }, m++) for (c.$jscomp$loop$prop$el$19 = v[m].querySelectorAll(C), l = {
              $jscomp$loop$prop$j$5$21: 0
            }; l.$jscomp$loop$prop$j$5$21 < c.$jscomp$loop$prop$el$19.length; l = {
              $jscomp$loop$prop$j$5$21: l.$jscomp$loop$prop$j$5$21
            }, l.$jscomp$loop$prop$j$5$21++) -1 != v.indexOf(c.$jscomp$loop$prop$el$19[l.$jscomp$loop$prop$j$5$21]) && (v = v.filter(function (A, y) {
              return function (G) {
                return G !== A.$jscomp$loop$prop$el$19[y.$jscomp$loop$prop$j$5$21];
              };
            }(c, l)));
            return v;
          },
          t = function (c, m, l, C, v) {
            var r = l.replace(/\./g, "");
            r = r.replace(/#/g, "");
            l = l.replace(/\|/g, ", ");
            if ("" != l && void 0 != c.id && -1 != c.id.search(r) || "" != l && void 0 != c.className && "string" == typeof c.className && -1 != c.className.search(r)) {
              if (void 0 != _ceMeasuringCode.config.skipCoordElements && 0 < _ceMeasuringCode.config.skipCoordElements.length) for (r = 0; r < _ceMeasuringCode.config.skipCoordElements.length; r++) l += ":not(" + _ceMeasuringCode.config.skipCoordElements[r] + ")";
              var p = r = null,
                q = {},
                A = g.querySelectorAll(l),
                y = new V(c, m, q).getWidgetGroupTitle();
              void 0 != u[0] && (A = u[u.length - 1].querySelectorAll(l));
              A = f(A, c, m, l, v);
              for (var G = 0; G < A.length; G++) if (null != _ceMeasuringCode.config.parentRowSeparator && "row" == C && 0 < A[G].querySelectorAll(_ceMeasuringCode.config.tagNames).length && -1 == A[G].className.indexOf(_ceMeasuringCode.config.parentRowSeparator) && (p++, c === A[G] && (r = p - 1)), c == A[G]) {
                l = G;
                new X().prepare(c, a, C, m, v, y);
                if ("widgetColumn" != C) {
                  var H = c,
                    I = m,
                    E = q,
                    w = H.querySelectorAll(_ceMeasuringCode.config.tagNames),
                    F = !1;
                  if (null != _ceMeasuringCode.config.widgetGrouping && _ceMeasuringCode.config.widgetGrouping) {
                    var L = new V(H, I, E).getWidgetGroupTitle();
                    d = new V(H, I, E).getWidgetGroupLinkCnt();
                    "" != L && (F = !0);
                  } else for (H = 0; H < w.length; H++) w[H] == I && (d = H);
                  if (!F) for (F = 0; F < w.length; F++) w[F] == I && (d = F);
                }
                null != r && (l = r);
                "widget" == C && (e = c);
                b.push(l);
                u.push(c);
              }
            }
          },
          h = function (c, m, l, C, v, r) {
            k = {};
            var p,
              q = "",
              A = "link",
              y = "";
            r = 1 == r ? !1 : !0;
            for (p = 0; p < _ceMeasuringCode.config.linkTypes.length; p++) if (c.target.localName == _ceMeasuringCode.config.linkTypes[p].type) {
              A = _ceMeasuringCode.config.linkTypes[p].name;
              break;
            }
            v = _ceMeasuringCode.getInnerText(l, c.target, l, v);
            p = "";
            if (null != l.href) {
              p = l.href;
              if (-1 != p.indexOf("void(0)") || -1 != p.indexOf("javascript")) p = "JS";
              -1 == p.indexOf("https://") && -1 == p.indexOf("http://") && "#" != p[0] && (p = "");
            }
            null != l.getAttribute("data-link") && (p = l.getAttribute("data-link"));
            null != _ceMeasuringCode.config.customHref && (p = _ceMeasuringCode.config.customHref["function"](c, l, _ceMeasuringCode.ajaxSubmit, p));
            if (-1 != p.indexOf("http://") || -1 != p.indexOf("https://")) y = p.split("/")[2];
            null != _ceMeasuringCode.config.linkType && null != l.getAttribute(_ceMeasuringCode.config.linkType.attr) && (A = l.getAttribute(_ceMeasuringCode.config.linkType.attr));
            null != _ceMeasuringCode.config.linkCat && "" != _ceMeasuringCode.config.linkCat.attr && (q = _ceMeasuringCode.config.linkCat["function"](l));
            v = _ceMeasuringCode.cleanText(v);
            v = _ceMeasuringCode.removeSpace(v);
            k = {
              event: D,
              blockTitle: "content",
              boxTitle: m.toString(),
              boxSubTitle: new X().get(a).trim(),
              hostname: y,
              linkCount: d,
              linkPage: _ceMeasuringCode.linkPage,
              linkText: v.trim(),
              linkType: A,
              linkURI: encodeURIComponent(p),
              linkCat: q
            };
            "" == m.toString() || C || _ceMeasuringCode.pushDLEvent(k, r);
            a = [];
          };
        this.addEventListenerClick = function (c, m, l) {
          b = [];
          u = [];
          d = 0;
          g = U();
          var C = !1,
            v = null,
            r = [],
            p = function (E, w, F, L) {
              E.push(L.target);
              for (E.push(w); w != F && w != document.body && L.target != document.body && void 0 != w;) w = w.parentNode, E.push(w);
              return E;
            },
            q = function (E) {
              for (var w = 0; w <= r.length; w++) if ("object" == typeof r[w] && void 0 != r[w].tagName) {
                for (var F = 0; F < _ceMeasuringCode.config.tagNames.split(",").length; F++) if (r[w].tagName.toLowerCase() == _ceMeasuringCode.config.tagNames.split(",")[F] && (v = r[w], g.contains(v))) {
                  E = !0;
                  break;
                }
                if (null != _ceMeasuringCode.config.customElements) for (F = 0; F < _ceMeasuringCode.config.customElements.split(",").length; F++) if ("string" == typeof r[w].className && void 0 != r[w].className && -1 != r[w].className.indexOf(_ceMeasuringCode.config.customElements.split(",")[F]) || "string" == typeof r[w].className && void 0 != r[w].id && -1 != r[w].id.indexOf(_ceMeasuringCode.config.customElements.split(",")[F])) if (v = r[w], g.contains(v)) {
                  E = !0;
                  break;
                }
              }
              return E;
            },
            A = function (E) {
              if (null != _ceMeasuringCode.config.exCeptions && void 0 != g) for (E = 0; E < _ceMeasuringCode.config.exCeptions.split(",").length; E++) for (var w = g.querySelectorAll(_ceMeasuringCode.config.exCeptions.split(",")[E]), F = 0; F < w.length; F++) void 0 != w && "object" == typeof w && w[F].contains(v) && (C = !1);
              return C;
            },
            y = function () {
              var E = v.querySelectorAll(_ceMeasuringCode.config.tagNames);
              if (void 0 != E && 0 < E.length) for (var w = 0; w < E.length; w++) if (E[w] == c.target) {
                v = E[w];
                break;
              }
              return v;
            };
          if (c.target != document && void 0 != g && "body" != c.target.tagName.toLowerCase() && c.target != document.body || l) if (void 0 != g && g.contains(c.target) || l) {
            var G = c.target.parentNode;
            v = c.target;
            if (l || void 0 != m && null != m) G = c.target.customParentNode, v.customParentNode = G;
            r = p(r, G, g, c);
            C = q(C);
            C = A(C);
            void 0 != _ceMeasuringCode.config.itemInLinkItem && null != _ceMeasuringCode.config.itemInLinkItem && _ceMeasuringCode.config.itemInLinkItem && (v = y());
            if (void 0 != m && null != m || l) C = !0, v = c.target;
            void 0 != _ceMeasuringCode.config.event && void 0 != _ceMeasuringCode.config.event.replace && (P = _ceMeasuringCode.config.event.replace);
            p = P;
            for (q = 0; q < Object.keys(p).length; q++) if (y = Object.keys(p)[q], A = p[y], y == c.type) for (y = 0; y < Object.keys(A).length; y++) {
              G = Object.keys(A)[y];
              for (var H = g.querySelectorAll(A[G].elSelector), I = 0; I < H.length; I++) if (H[I] == v) return c.target.addEventListener(G, B.addEventListenerClick), C = !1;
            }
            if (C) {
              for (p = r.length; 0 <= p; --p) "object" == typeof r[p] && (t(r[p], v, _ceMeasuringCode.config.row, "row", l), t(r[p], v, _ceMeasuringCode.config.column, "column", l), "string" == typeof r[p].className && -1 == r[p].className.indexOf(_ceMeasuringCode.config.widgetException) || "" == _ceMeasuringCode.config.widgetException) && (t(r[p], v, _ceMeasuringCode.config.widget, "widget", l), null != _ceMeasuringCode.config.widgetColumn && t(r[p], v, _ceMeasuringCode.config.widgetColumn, "widgetColumn", l));
              h(c, b, v, m, e, l);
              if (void 0 != m && null != m) return k;
            }
          }
        };
        this.initClickListener = function (c) {
          void 0 == document.addEventListener ? document.attachEvent("onclick", function (m) {
            c(m);
          }) : document.addEventListener("mousedown", function (m) {
            void 0 == m.button || 0 != m.button && 1 != m.button || c(m);
          });
          window.addEventListener("_ce_measure_item", function (m) {
            return c(m.detail);
          });
        };
      },
      aa = function () {
        this.initClickListener = function () {
          document.addEventListener("mousedown", function (a) {
            var e = null,
              b = 0,
              u = 0;
            if ("object" == typeof a.target && a.target != document && void 0 != a.button && (0 == a.button || 1 == a.button)) for (var d = 0; d < _ceMeasuringCode.config.otherClickElements.length; d++) for (var g = document.querySelectorAll(_ceMeasuringCode.config.otherClickElements[d].name), k = 0; k < g.length; k++) if (g[k] === a.target || g[k].contains(a.target)) {
              b = d;
              if (null == _ceMeasuringCode.config.otherClickElements[d].noChild) for (g = g[k].querySelectorAll(_ceMeasuringCode.config.tagNames), k = 0; k < g.length; k++) {
                if (g[k] === a.target || g[k].contains(a.target)) {
                  u = k;
                  e = g[k];
                  break;
                }
              } else u = 0, e = g[k];
              break;
            }
            if (null != e) {
              a = e;
              var f = b;
              b = null;
              e = a.href;
              var t = !1,
                h = !1,
                c = !1,
                m = !1;
              g = "link";
              var l = k = "",
                C = "/functional",
                v = _ceMeasuringCode.config.otherClickElements[f].name;
              void 0 != _ceMeasuringCode.config.otherClickElements[f].newName && (v = _ceMeasuringCode.config.otherClickElements[f].newName);
              v = v.replace(".", "").replace("#", "");
              d = _ceMeasuringCode.getInnerText(a);
              void 0 == a.getAttribute("onclick") || void 0 != _ceMeasuringCode.config.otherClickElements[f].runOnclickEvt && !_ceMeasuringCode.config.otherClickElements[f].runOnclickEvt || (b = a.getAttribute("onclick"));
              "" == d && (0 != a.getElementsByTagName("img").length ? null != a.getElementsByTagName("img")[0].getAttribute("alt") ? d = a.getElementsByTagName("img")[0].getAttribute("alt") : "" != a.getElementsByTagName("img")[0].title && (d = a.getElementsByTagName("img")[0].title) : d = void 0 != a.id && "" != a.id ? a.id : void 0 != a.classname && "" != a.className ? a.classname : void 0 != a.parentNode.className && "" != a.parentNode.className ? a.parentNode.className : a.parentNode.parentNode.className);
              "undefined" == d && "undefined" == e && "" == a.className && (d = a.innerHTML);
              if (void 0 != e) {
                if (-1 != e.indexOf("void(0)") || -1 != e.indexOf("javascript")) e = "JS";
              } else e = "";
              null != _ceMeasuringCode.config.otherClickElements[f].findElement && void 0 != a.querySelectorAll(_ceMeasuringCode.config.otherClickElements[f].findElement)[_ceMeasuringCode.config.otherClickElements[f].findElementIndex] && (d = _ceMeasuringCode.getInnerText(a.querySelectorAll(_ceMeasuringCode.config.otherClickElements[f].findElement)[_ceMeasuringCode.config.otherClickElements[f].findElementIndex], null));
              null != a.getAttribute("href") && (k = a.getAttribute("href"));
              null != _ceMeasuringCode.config.otherClickElements[f].headerClick && (t = !0);
              null != _ceMeasuringCode.config.otherClickElements[f].layerClick && (c = !0);
              null != _ceMeasuringCode.config.otherClickElements[f].footerClick && (h = !0);
              void 0 != _ceMeasuringCode.config.otherClickElements[f].noText && null != _ceMeasuringCode.config.otherClickElements[f].noText && (m = !0);
              if (void 0 != a.localName) for (f = 0; f < _ceMeasuringCode.config.linkTypes.length; f++) if (a.localName == _ceMeasuringCode.config.linkTypes[f].type) {
                g = _ceMeasuringCode.config.linkTypes[f].name;
                break;
              }
              d = _ceMeasuringCode.cleanText(d);
              void 0 != d && (" " == d[0] && (d = d.substring(1)), " " == d[d.length - 1] && (d = d.substring(0, d.length - 1)), 100 < d.length && (d = d.substring(0, d.substring(0, 100).lastIndexOf(" "))), m && (d = ""));
              a = t ? "header" : h ? "footer" : c ? "layer" : "content";
              if (-1 != e.indexOf("http://") || -1 != e.indexOf("https://")) l = e.split("/")[2];
              if ("#" == e || "#" == k) C = "/insite-navigation";
              null != _ceMeasuringCode.config && _ceMeasuringCode.config.pushLinkType || (C = "");
              a = {
                event: D,
                blockTitle: a,
                boxTitle: "",
                boxSubTitle: v + C,
                hostname: l,
                linkCount: u,
                linkPage: _ceMeasuringCode.linkPage,
                linkText: d.trim(),
                linkType: g,
                linkURI: encodeURIComponent(e),
                linkCat: ""
              };
              _ceMeasuringCode.pushDLEvent(a, !0);
              null != b && new Function(b)();
            }
          });
        };
      },
      U = function () {
        for (var a = 0; a < _ceMeasuringCode.config.top.length; a++) for (var e = document.querySelectorAll(_ceMeasuringCode.config.top[a]), b = 0; b < e.length; b++) if (void 0 != e[b]) return e[b];
      },
      X = function () {
        this.prepare = function (a, e, b, u, d, g, k) {
          var f = Object.keys(_ceMeasuringCode.config.widgetTitle.titleFrom),
            t = !1;
          if ("object" == typeof _ceMeasuringCode.config.widgetTitle.titleFrom[b] && void 0 != _ceMeasuringCode.config.widgetTitle.titleFrom[b].fromPageType) {
            var h = _ceMeasuringCode.config.widgetTitle.titleFrom[b].fromPageType;
            for (var c = 0; c < h.length; c++) if (_ceMeasuringCode.page[h[c]]()) {
              h = h[c];
              break;
            }
          }
          void 0 != h ? f.includes(b) && void 0 != _ceMeasuringCode.page[h] && _ceMeasuringCode.page[h]() && (t = !0) : t = !0;
          if (t) {
            t = u;
            if (null != _ceMeasuringCode.config.article && null != _ceMeasuringCode.config.article.elements && "" != _ceMeasuringCode.config.article.elements) for (d && (t = t.customParentNode), d = 0; d < _ceMeasuringCode.config.article.elements.length; d++) if (h = document.querySelectorAll(_ceMeasuringCode.config.article.elements[d]), void 0 != h[0] && h[0].contains(t)) {
              e.push(_ceMeasuringCode.config.article.title);
              break;
            }
            if (f.includes(b)) {
              k = void 0 == k ? _ceMeasuringCode.config.widgetTitle.attr : k;
              f = _ceMeasuringCode.config.widgetTitle.elements;
              d = _ceMeasuringCode.config.widgetTitle.titleFrom[b].fromParent;
              b = _ceMeasuringCode.config.widgetTitle.titleFrom[b].fomParentOnPageType;
              for (t = 0; t < f.length; t++) if (0 < a.querySelectorAll(f[t]).length) {
                var m = a.querySelectorAll(f[t]);
                "object" == typeof m[0] && (m = m[0]);
                break;
              }
              if (d && void 0 != _ceMeasuringCode.page[b] && _ceMeasuringCode.page[b]() && void 0 != a.parentNode && void 0 == m) for (b = 0; b < f.length; b++) if (0 < a.parentNode.querySelectorAll(f[b]).length) {
                m = a.parentNode.querySelectorAll(f[b]);
                "object" == typeof m[0] && (m = m[0]);
                break;
              }
              if (void 0 != m && 0 != m.length) if (void 0 != m.children && 1 < m.children.length) for (b = 0; b < m.children.length; b++) void 0 != m.children[b].innerText && e.push(m.children[b].innerText.replace(/\//, "_"));else void 0 != m.innerText && e.push(m.innerText.replace(/\//, "_").trim());
              if (void 0 != k && "" != k) if ("string" == typeof k) void 0 != a.getAttribute(k) && (m = a.getAttribute(k) + Q(a, "[ " + k + " = '" + a.getAttribute(k) + "']"), e.push(m.replace(/\//, "_"))), void 0 != _ceMeasuringCode.config.tagNameAsWidget && _ceMeasuringCode.config.tagNameAsWidget && a == u && void 0 != u.getAttribute(k) && (m = u.getAttribute(k) + Q(u, "[ " + k + " = '" + u.getAttribute(k) + "']"), e.push(m.replace(/\//, "_")));else if ("object" == typeof k) for (b = 0; b < k.length; b++) void 0 != a.getAttribute(k[b]) && (m = a.getAttribute(k[b]) + Q(a, "[ " + k[b] + " = '" + a.getAttribute(k[b]) + "']"), e.push(m.replace(/\//, "_"))), void 0 != _ceMeasuringCode.config.tagNameAsWidget && _ceMeasuringCode.config.tagNameAsWidget && a == u && void 0 != u.getAttribute(k[b]) && (m = u.getAttribute(k[b]) + Q(u, "[ " + k[b] + " = '" + u.getAttribute(k[b]) + "']"), e.push(m.replace(/\//, "_")));
              void 0 != g && "" != g && null != g && e.push(g.replace(/\//, "_"));
            }
          }
        };
        this.get = function (a) {
          if ("object" == typeof a) {
            a = a.filter(function (u, d, g) {
              return g.indexOf(u) === d;
            });
            for (var e = 0; e < a.length; e++) "" == a[e] && a.splice(e, 1);
            for (e = 1; e < a.length; e++) {
              var b = "#";
              void 0 != _ceMeasuringCode.config.widgetGrouping && void 0 != _ceMeasuringCode.config.widgetGrouping.replaceDelimiter && (b = _ceMeasuringCode.config.widgetGrouping.replaceDelimiter);
              0 < e && (-1 != a[e].indexOf(b) && (b = ""), a[e] = b + a[e]);
            }
            a = a.join("");
            a.trim();
            a = _ceMeasuringCode.cleanText(a).replace("//", "/");
            null != _ceMeasuringCode.config.widgetTitle.cleanText && _ceMeasuringCode.config.widgetTitle.cleanText && (a = a.replace(/ /g, "-"), a = _ceMeasuringCode.removeAccents(a.replace(/[\-]{2,}/g, "-")));
            "/" == a[0] && (a = a.slice(1));
            null != _ceMeasuringCode.config.widgetGrouping && _ceMeasuringCode.config.widgetGrouping && (a = a.replace("/#_wgr_", ""));
          }
          return a;
        };
      },
      ba = function () {
        if (null == _ceMeasuringCode.config.FBMeasuringSubscribe || null != _ceMeasuringCode.config.FBMeasuringSubscribe && _ceMeasuringCode.config.FBMeasuringSubscribe) {
          var a = function () {
            var u = function (d, g, k) {
              null != g.getAttribute("data-action") && -1 != g.getAttribute("data-action").indexOf("recommend") && (k = g.getAttribute("data-action") + "-" + k);
              k = "FB-" + k;
              for (var f = document.querySelectorAll("." + g.className.replace(" ", ".")), t = 0; t < f.length; t++) f[t] === g && (g = f[t]);
              void 0 != g.className && -1 == g.className.indexOf(_ceMeasuringCode.config.widget.replace(/\.|#/g, "")) && void 0 != g.parentNode && void 0 != g.parentNode.className && -1 != g.parentNode.className.indexOf(_ceMeasuringCode.config.widget.replace(/\.|#/g, "")) && (g = g.parentNode);
              f = {};
              f.target = document.createElement("socialEvent");
              f.target.customParentNode = g;
              f.target.href = d;
              f.target.innerText = k;
              f.target.className = k;
              B.addEventListenerClick(f, null, !0);
            };
            FB.Event.subscribe("edge.create", function (d, g) {
              u(d, g, "like");
            });
            FB.Event.subscribe("edge.remove", function (d, g) {
              u(d, g, "unLike");
            });
            FB.Event.subscribe("comment.create", function (d, g) {
              u(d, g, "comment");
            });
            FB.Event.subscribe("comment.remove", function (d, g) {
              u(d, g, "unComment");
            });
          };
          if ("undefined" == typeof FB) {
            var e = 0,
              b = new MutationObserver(function (u) {
                u.forEach(function (d) {
                  void 0 != d.target.id && "fb-root" == d.target.id && (e++, 1 == e && "undefined" != typeof FB && (a(), b.disconnect()));
                });
              });
            b.observe(document, T);
          } else a();
        }
      },
      ca = function () {
        if (_ceMeasuringCode.page.isArticlePage() && (null == _ceMeasuringCode.config.articleReadCheck || null != _ceMeasuringCode.config.articleReadCheck && _ceMeasuringCode.config.articleReadCheck)) {
          var a,
            e = null != _ceMeasuringCode.config.article.moreElements ? _ceMeasuringCode.config.article.moreElements : _ceMeasuringCode.config.article.elements,
            b = _ceMeasuringCode.pushDLEvent,
            u = function () {
              if (void 0 == a) for (var d = 0; d < e.length; d++) void 0 != document.querySelectorAll(e[d])[0] ? 0 != document.querySelectorAll(e[d])[0].clientHeight && (a = document.querySelectorAll(e[d])[0]) : null != _ceMeasuringCode.config.article.moreElements && (e = _ceMeasuringCode.config.article.elements);
              void 0 != a && (d = document.body.getBoundingClientRect(), d = a.getBoundingClientRect().top - d.top, document.documentElement.scrollTop + window.innerHeight >= a.offsetHeight + d && (d = {
                event: "scrollEvent",
                eventCategory: "Scroll",
                eventAction: _ceMeasuringCode.page.getArticlePage() + "/articleRead",
                eventLabel: "Scroll/articleRead" + document.location.pathname
              }, b(d, !1), document.removeEventListener("scroll", u, !0)));
            };
          document.addEventListener("scroll", u, !0);
        }
      },
      da = function () {
        if (void 0 == _ceMeasuringCode.config.media || null == _ceMeasuringCode.config.media || _ceMeasuringCode.config.media.active) {
          null != _ceMeasuringCode.config.media && (K = _ceMeasuringCode.config.media);
          var a = [],
            e = [],
            b = [],
            u = "",
            d = function () {
              new MutationObserver(function (t) {
                t.forEach(function (h) {
                  for (var c = 0; c < h.addedNodes.length; c++) "object" == typeof h.target && void 0 != h.addedNodes[c] && void 0 != h.addedNodes[c].id && "string" == typeof h.addedNodes[c].id && -1 != h.addedNodes[c].id.indexOf(K.observer.id) && void 0 != h.addedNodes[c].className && "" != h.addedNodes[c].className && -1 != h.addedNodes[c].className.indexOf(K.observer["class"]) && -1 == e.indexOf(h.addedNodes[c].id) && (e.push(h.addedNodes[c].id), k());
                  "object" == typeof h.target && void 0 != h.target.id && "string" == typeof h.target.id && -1 != h.target.id.indexOf(K.observer.id) && void 0 != h.target.className && "" != h.target.className && -1 != h.target.className.indexOf(K.observer["class"]) && -1 == e.indexOf(h.target.id) && (e.push(h.target.id), k());
                });
              }).observe(document, T);
            },
            g = function (t) {
              for (var h = K.events, c = _ceMeasuringCode.page.getPageType(), m = function (r, p) {
                  void 0 != r.getFullscreen ? r.getFullscreen() ? b[p].fullScreen = !0 : b[p].fullScreen = !1 : r.addEventListener("fullscreenchange", function () {
                    b[p].fullScreen = window.screenTop || window.screenY ? !0 : !1;
                  });
                  return b[p].fullScreen;
                }, l = function (r) {
                  var p = !0,
                    q = void 0 != t.getPlaylistItem ? t.getPlaylistItem().mediaid || t.getPlaylistItem().file.split("/videos/")[1] : t.currentSrc.split("/")[t.currentSrc.split("/").length - 1];
                  r.mediaID = q;
                  void 0 == b[q] && (b[q] = {});
                  void 0 == b[q].fullScreen && (b[q].fullScreen = !1);
                  for (var A = 0; A < Object.keys(b[q]).length; A++) void 0 == b[q][Object.keys(b[q])[A]] && (b[q][Object.keys(b[q])[A]] = {}), b[q][Object.keys(b[q])[A]].status = !1;
                  void 0 == b[q][r.type] && (b[q][r.type] = {});
                  void 0 == b[q][r.type].counter && (b[q][r.type].counter = 0);
                  b[q][r.type].status = !0;
                  b[q][r.type].counter++;
                  0 == h[r.type] && 1 < b[q][r.type].counter && (p = !1);
                  void 0 != b[q].playAttempt && void 0 != b[q].playAttempt.counter && 1 == b[q].playAttempt.counter && void 0 != b[q].play && void 0 != b[q].play.counter && 1 == b[q].play.counter && void 0 != b[q].play.status && b[q].play.status && (p = !1);
                  void 0 != b[q].play && b[q].play.status && "seek" == u && (p = !1);
                  if (void 0 != b[q].seek && b[q].seek.status && 1 < b[q].seek.counter || void 0 != b[q].seeking && b[q].seeking.status && 1 < b[q].seeking.counter) p = !1;
                  for (A = 0; A < Object.keys(b[q]).length; A++) {
                    var y = Object.keys(b[q])[A];
                    if (p && b[q][y].status) {
                      y = r;
                      p = t;
                      q = void 0 != p.getDuration ? p.getDuration() : p.duration;
                      q = 1 == isNaN(q) ? 0 : q;
                      A = isNaN(y.offset) || void 0 == y.offset ? void 0 != p.getPosition ? p.getPosition() : p.currentTime : y.offset;
                      q = 0 < q ? 10 * Math.round(A / q * 10) : 0;
                      q = isNaN(q) ? "0%" : q + "%";
                      q = y.type + "/" + q;
                      A = 0;
                      if (void 0 != p.getViewable) var G = 1 == p.getViewable() ? "viewable" : "notViewable";else {
                        G = p.parentNode.getBoundingClientRect();
                        var H = Math.max(document.documentElement.clientHeight, window.innerHeight);
                        G = 0 > G.bottom || 0 <= G.top - H ? "notViewable" : "viewable";
                      }
                      H = y.mediaID;
                      var I = "content",
                        E = 0,
                        w = {
                          content: void 0 != _ceMeasuringCode.config.top ? _ceMeasuringCode.config.top : "notSet",
                          header: void 0 != _ceMeasuringCode.config.header ? _ceMeasuringCode.config.header : "notSet",
                          footer: void 0 != _ceMeasuringCode.config.bottom ? _ceMeasuringCode.config.bottom : "notSet",
                          sidebar: void 0 != _ceMeasuringCode.config.sidebar ? _ceMeasuringCode.config.sidebar : "notSet",
                          articleContent: void 0 != _ceMeasuringCode.config.article.elements ? _ceMeasuringCode.config.article.elements : "notSet"
                        },
                        F = m(p, H) ? "fullScreen" : "player",
                        L = void 0 != p.getContainer ? p.getContainer() : p;
                      var R = L;
                      for (var O = "undefPlayer", J = K.playerNameFromProperty, M = 0; M < J.length; M++) {
                        var W = J[M].replace(/[\.#]/g, "");
                        if (void 0 != R.getAttribute(W) && "" != R.getAttribute(W)) {
                          O = _ceMeasuringCode.cleanText(R.getAttribute(W).split(" ")[0]);
                          break;
                        }
                      }
                      R = O;
                      O = "";
                      switch (y.type) {
                        case "playAttempt":
                          q = "firstPlay";
                          break;
                        case "play":
                          void 0 != b[H] && void 0 != b[H][y.type] && 1 == b[H][y.type].counter && (q = "firstPlay");
                          break;
                        case "seeking":
                          q = q.replace(y.type, "seek");
                          break;
                        case "ended":
                          q = q.replace(y.type, "complete");
                          "undefined" != typeof window._ceCTSData && void 0 != window._ceCTSData.videoRedirect && (O = "/videoRedirect/" + window._ceCTSData.videoRedirect);
                          break;
                        case "complete":
                          "undefined" != typeof window._ceCTSData && void 0 != window._ceCTSData.videoRedirect && (O = "/videoRedirect/" + window._ceCTSData.videoRedirect);
                          break;
                        case "adImpression":
                          q = q.replace(y.type, "adStarted");
                      }
                      for (J = 0; J < Object.keys(w).length; J++) if (y = document.querySelectorAll(w[Object.keys(w)[J]].toString()), void 0 != y) for (M = 0; M < y.length; M++) if (y[M].contains(L)) {
                        I = Object.keys(w)[J];
                        break;
                      }
                      y = document.querySelectorAll([w[I]]);
                      for (w = 0; w < y.length; w++) for (L = y[w].querySelectorAll(K.playerContainer), J = 0; J < L.length; J++) {
                        if (void 0 != L[J].id && L[J].id == p.id) {
                          A = E;
                          break;
                        }
                        E++;
                      }
                      _ceMeasuringCode.pushDLEvent({
                        event: "mediaEvent",
                        eventCategory: "mediaEvent",
                        eventAction: c,
                        eventLabel: "mediaEvent/" + c + "/" + I + "/" + A + "/" + R + "/" + H + "/" + G + "/" + F + "/" + q + O
                      }, !1);
                      break;
                    }
                  }
                  u = r.type;
                }, C = 0; C < Object.keys(h).length; C++) {
                var v = Object.keys(h)[C];
                try {
                  t.on(v, l);
                } catch (r) {
                  t.addEventListener(v, l);
                }
              }
            },
            k = function () {
              for (var t = K.playerObj, h = 0; h < e.length; h++) "undefined" != typeof window[t] ? void 0 != window[t](e[h]) && -1 == a.indexOf(window[t](e[h])) && (g(window[t](e[h])), a.push(window[t](e[h]))) : -1 == a.indexOf(e[h]) && (g(e[h]), a.push(e[h]));
            },
            f = function () {
              for (var t = document.querySelectorAll("[id*='" + K.observer.id + "']," + K.playerContainer), h = 0; h < t.length; h++) e.push(t[h]), k();
              d();
            };
          "loading" == document.readyState ? document.addEventListener("DOMContentLoaded", f) : f();
        }
      },
      Z = function (a) {
        console.log("%c _ceMC: " + a.stack, "color: #bada55");
      },
      V = function (a, e, b) {
        var u = "",
          d = 0,
          g = [],
          k = void 0 != _ceMeasuringCode.config.widgetGrouping ? _ceMeasuringCode.config.widgetGrouping.attr : {},
          f;
        (function () {
          if (void 0 != _ceMeasuringCode.config.widgetGrouping && void 0 != k) {
            var t = !1,
              h = a.querySelectorAll("[" + k + "]");
            a.hasAttribute(k) && g.push(a);
            e.hasAttribute(k) && g.push(e);
            for (var c = 0; c < h.length; c++) g.push(h[c]);
            for (h = 0; h < g.length; h++) g[h].hasAttribute(k) && (c = g[h].getAttribute(k), -1 == Object.keys(b).indexOf(c) && (b[c] = []));
            if (0 < Object.keys(b).length) for (t = !0, f = Object.keys(b), h = 0; h < g.length; h++) if (c = g[h].getAttribute(k), -1 != _ceMeasuringCode.config.tagNames.split(",").indexOf(g[h].nodeName.toLocaleLowerCase())) b[c].push(g[h]);else for (var m = g[h].querySelectorAll(_ceMeasuringCode.config.tagNames), l = 0; l < m.length; l++) -1 == b[c].indexOf(m[l]) && b[c].push(m[l]);
            h = a.querySelectorAll(_ceMeasuringCode.config.tagNames);
            for (c = 0; c < h.length; c++) {
              m = !1;
              if (!0 === t) for (l = 0; l < f.length; l++) -1 != b[f[l]].indexOf(e) && (d = b[f[l]].indexOf(e), u += "#" + f[l], m = !0);
              if (!0 === m) break;
            }
          }
        })();
        this.getWidgetGroupTitle = function () {
          return u;
        };
        this.getWidgetGroupLinkCnt = function () {
          return d;
        };
      },
      ea = function () {
        if (void 0 != _ceMeasuringCode.config.appear && "undefined" != typeof IntersectionObserver) {
          var a = _ceMeasuringCode.config.appear,
            e = [],
            b = function () {
              var d = _ceMeasuringCode.pushDLEvent,
                g = document.querySelectorAll(a.selectors.appear),
                k = function (h) {
                  var c = Object.assign({}, a);
                  c.threshold = f(h);
                  new IntersectionObserver(function (m) {
                    m = $jscomp.makeIterator(m);
                    for (var l = m.next(); !l.done; l = m.next()) {
                      var C = l.value;
                      l = C.target;
                      if (C.isIntersecting && -1 == e.indexOf(l)) {
                        var v = null != l.getAttribute(a.attr) ? l.getAttribute(a.attr) : "";
                        if ("string" != typeof a.attr) for (var r = $jscomp.makeIterator(a.attr), p = r.next(); !p.done; p = r.next()) if (p = p.value, null != l.getAttribute(p)) {
                          v = l.getAttribute(p);
                          break;
                        }
                        v = v.replace(/ /g, "-").replace(/[\-]{2,}/g, "-").replace(/\//g, "-");
                        v = _ceMeasuringCode.removeAccents(_ceMeasuringCode.cleanText(v));
                        r = Q(l, "[ " + c.attr + " = '" + v + "']");
                        p = _ceMeasuringCode.getWidgetData(l, "boxTitle");
                        var q = window.pageYOffset + C.boundingClientRect.top;
                        C = 10 * Math.ceil(Math.round(q / (document.documentElement.scrollHeight - window.innerHeight) * 100) / 10);
                        q = Math.round(q);
                        var A = _ceMeasuringCode.page.getPageType(),
                          y = c.attr + "-type";
                        y = null != l.getAttribute(y) ? l.getAttribute(y) : _ceMeasuringCode.page.isHomePage() ? "section" : "box";
                        v = {
                          event: "appearEvent",
                          eventCategory: "appear",
                          eventAction: "appear/visible",
                          eventLabel: A + "/content/" + v + r + "/" + p,
                          dist: JSON.stringify({
                            dist: {
                              percent: C,
                              px: q
                            }
                          }),
                          boxSubTitle: v,
                          boxTitle: p,
                          linkPage: A,
                          linkType: y
                        };
                        d(v, !1);
                        e.push(l);
                      }
                    }
                  }, c).observe(h);
                },
                f = function (h) {
                  var c = a.threshold;
                  void 0 != a.thresholdAttr && null != a.thresholdAttr && void 0 != a.thresholdAttr && "" != a.thresholdAttr && (h = h.getAttribute(a.thresholdAttr), void 0 != h && null != h && "" != h && (c = JSON.parse(h)));
                  return c;
                };
              g = $jscomp.makeIterator(g);
              for (var t = g.next(); !t.done; t = g.next()) k(t.value);
              window.addEventListener("_ce_measure_appear", function (h) {
                k(h.detail.target);
              });
            },
            u = function () {
              try {
                new MutationObserver(function (d) {
                  d.forEach(function (g) {
                    (void 0 != g.target.id && "string" == typeof g.target.id && -1 != g.target.id.indexOf(a.selectors.appear.toString().replace(/\.|,|#/g, " ")) || void 0 != g.target.className && "string" == typeof g.target.className && -1 != g.target.className.indexOf(a.selectors.appear.toString().replace(/\.|,|#/g, " "))) && b();
                  });
                }).observe(document, T);
              } catch (d) {}
            };
          "loading" == document.readyState ? (document.addEventListener("DOMContentLoaded", b), document.addEventListener("DOMContentLoaded", u)) : (b(), u());
        }
      },
      fa = function () {
        void 0 != _ceMeasuringCode.config.postMessage && window.addEventListener("message", function (a) {
          var e = _ceMeasuringCode.config.postMessage;
          if (void 0 != a.data && void 0 != a.data.type && -1 != Object.keys(e.eventTypes).indexOf(a.data.type)) {
            var b = document.querySelector(e.targetElements);
            if (void 0 != b) {
              b = _ceMeasuringCode.getWidgetData(b);
              if (void 0 != e.eventTypes[a.data.type]) for (var u in e.eventTypes[a.data.type]) e.eventTypes[a.data.type].hasOwnProperty(u) && (b[u] = e.eventTypes[a.data.type][u]);
              _ceMeasuringCode.pushDLEvent(b);
            }
          }
        });
      },
      Q = function (a, e, b, u) {
        e = null != e.match("{.*}") && -1 != e.indexOf("=") ? e.replace("=", "*=") : e;
        b = void 0 != b ? b : "-";
        e = e.replace(new RegExp(void 0 != u ? u : "{.*}", "g"), "");
        var d = document.querySelectorAll(e);
        e = "";
        u = 0;
        if (1 < d.length) {
          d = $jscomp.makeIterator(d);
          for (var g = d.next(); !g.done; g = d.next()) if (g = g.value, u++, g === a) {
            e = b + u;
            break;
          }
        }
        return e;
      };
    _ceMeasuringCode.pushDLEvent = function (a, e) {
      void 0 != e && null != e && e && N++;
      "object" == typeof a && 100 >= N && (window.dataLayer = window.dataLayer || [], window.dataLayer.push(a));
    };
    _ceMeasuringCode.removeSpace = function (a) {
      void 0 != a && (" " == a[0] && (a = a.substring(1)), " " == a[a.length - 1] && (a = a.substring(0, a.length - 1)));
      return a;
    };
    _ceMeasuringCode.cutStringAt = function (a, e) {
      var b = 0;
      if (a.length > e) {
        for (; 0 != " .,".indexOf(a[e]) && !(b++, b > e + 100); e--);
        return a.substr(0, e) + " ...";
      }
      return a;
    };
    _ceMeasuringCode.getInnerText = function (a, e, b, u) {
      var d = function (k, f) {
        var t = "";
        if (null != k && void 0 != k && void 0 != f && void 0 != f.parentNode) {
          var h = k.parentNode,
            c = 0;
          if (void 0 != h) for (; h != f.parentNode && "" == t && 4 > c && h != document.body;) if ("object" == typeof h) {
            var m = U();
            if (h != m) {
              h.parentNode != f.parentNode && (h = h.parentNode);
              c++;
              m = h.getElementsByTagName("a");
              for (var l = 0; l < m.length && (void 0 == m[l].href || void 0 == k.parentNode.href && void 0 == a.href || m[l].href != k.parentNode.href && m[l].href != a.href || (t = m[l].innerText.trim(), "" == t)); l++);
            } else return !1;
          } else return !1;
        }
        return t.replace(/\//, "_");
      };
      void 0 == e && (e = a);
      void 0 == b && (b = a);
      var g = function (k, f, t, h, c) {
        void 0 != f && (void 0 != f.tagName && "svg" == f.tagName && (f = f.parentNode), void 0 != f.innerText && (c = f.innerText.trim()), null != _ceMeasuringCode.config.innerTextFindSimilarLinkFirst && _ceMeasuringCode.config.innerTextFindSimilarLinkFirst && "" == c && (c = d(h, k)), void 0 != f.textContent && "" == c && (c = f.textContent.trim()), void 0 != f.title && "" == c ? c = f.title : void 0 != f.alt && "" == c && (c = f.alt), void 0 != f.tagName && "input" == f.tagName.toLowerCase() && "" == c && "" != f.value && null != f.getAttribute("type") && "submit" == f.getAttribute("type") && (c = f.value), k = "object" == typeof f && void 0 != f.tagName && "img" == f.tagName.toLowerCase() || "object" == typeof h && void 0 != h.tagName && "img" == h.tagName.toLowerCase() ? !0 : !1, k && "" == c && (void 0 != f.title ? c = f.title : void 0 != f.alt && (c = f.alt), void 0 != h.title ? c = h.title : void 0 != h.alt && (c = h.alt)), void 0 != f.id && "" == c && (c = f.id), void 0 != f.className && "" != f.className && "" == c && (c = null !== f.className.match(/^[^\s]+/g) ? f.className.match(/^[^\s]+/g)[0] : f.className, void 0 == _ceMeasuringCode.config.linkText || void 0 == _ceMeasuringCode.config.linkText.stripClass || _ceMeasuringCode.config.linkText.stripClass || (c = f.className)), void 0 != f.placeholder && "" == c && (c = f.placeholder), void 0 != f.name && "" == c && (c = f.name), void 0 != f.selectedIndex && void 0 != f.children && (void 0 != f.id && "" != f.id && (c = f.id + "_"), void 0 != f.name && "" != f.name && (c = f.name + "_"), c += void 0 != f.children[f.selectedIndex].innerText ? f.children[f.selectedIndex].innerText : c));
        return c.replace(/\//, "_");
      }(u, a, b, e, "");
      "" == g && null != _ceMeasuringCode.config.innerTextFindSimilarLink && _ceMeasuringCode.config.innerTextFindSimilarLink && (g = d(e, u));
      g = function (k) {
        try {
          k = k.trim(), k = k.replace("\n", " "), k = k.replace(/<\/?[^>]+(>|$)/g, "").replace(/[^a-z0-9\s\n\r\.\+\-_!@#\/\*,=%'"\(\)\?: \u00e1\u00e9\u00ed\u00f3\u00f6\u0151\u00fa\u00fc\u0171]/ig, "").replace(/\r?\n|\r/g, "").replace(/\//, "_");
        } catch (f) {}
        return k;
      }(g);
      void 0 != _ceMeasuringCode.config.linkTextMaxLength && (S = _ceMeasuringCode.config.linkTextMaxLength);
      g.length > S && (g = _ceMeasuringCode.cutStringAt(g.trim(), S));
      g = function (k, f) {
        if (void 0 != k && null != _ceMeasuringCode.config.noLinkText) for (var t = 0; t < _ceMeasuringCode.config.noLinkText.split(",").length; t++) {
          var h = _ceMeasuringCode.config.noLinkText.split(",")[t];
          void 0 != k.parentNode && void 0 != k.parentNode.className && -1 != k.parentNode.className.indexOf(h) && (f = "");
          if (void 0 != k.className && -1 != k.className.indexOf(h) || void 0 != k.id && -1 != k.id.indexOf(h)) f = "";
        }
        return f.replace(/\//, "_");
      }(b, g);
      return _ceMeasuringCode.removeSpace(g);
    };
    _ceMeasuringCode.cleanText = function (a) {
      try {
        a = a.replace(/[^a-z0-9\.\+\-_!@#\/\*,=%'"\(\)\?: \u00e1\u00e9\u00ed\u00f3\u00f6\u0151\u00fa\u00fc\u0171{}]/ig, "").replace(/\r?\n|\r/g, "").replace(/\s\s+/g, " ").replace(/_+/g, "_").replace(/-+/g, "-").replace(/##/g, "#").trim();
      } catch (e) {}
      return a;
    };
    _ceMeasuringCode.getWidgetData = function (a, e) {
      try {
        var b = {},
          u = {};
        e = e || [];
        b.target = a;
        b.target.customParentNode = a.parentNode;
        var d = new Y().addEventListenerClick(b, e, !0);
        void 0 != d && (void 0 != e && 0 < e.length ? void 0 != d[e] && (u = d[e]) : u = d);
        return u;
      } catch (g) {
        Z(g);
      }
    };
    _ceMeasuringCode.removeAccents = function (a) {
      var e = {
        a: "\u00e1|\u00e0|\u00e3|\u00e2|\u00c0|\u00c1|\u00c3|\u00c2",
        e: "\u00e9|\u00e8|\u00ea|\u00c9|\u00c8|\u00ca",
        i: "\u00ed|\u00ec|\u00ee|\u00cd|\u00cc|\u00ce",
        o: "\u00f3|\u00f2|\u00f6|\u0151|\u00d3|\u00d2|\u00d6|\u0150",
        u: "\u00fa|\u00f9|\u00fb|\u00fc|\u0171|\u00da|\u00d9|\u00db|\u00dc|\u0170",
        c: "\u00e7|\u00c7",
        n: "\u00f1|\u00d1"
      };
      a = a.toLowerCase();
      for (var b in e) a = a.replace(new RegExp(e[b], "g"), b);
      return a;
    };
    this.init = function () {
      try {
        B = new Y(), B.initClickListener(B.addEventListenerClick), new aa().initClickListener(), ba(), ca(), da(), ea(), fa();
      } catch (a) {
        Z(a);
      }
    };
    (function () {
      String.prototype.includes || (String.prototype.includes = function () {
        return -1 !== String.prototype.indexOf.apply(z, x);
      });
      Array.prototype.includes || (Array.prototype.includes = function () {
        return -1 !== Array.prototype.indexOf.apply(z, x);
      });
    })();
    (function (a) {
      for (var e = 0; e < Object.keys(a).length; e++) {
        var b = Object.keys(a)[e],
          u = a[b];
        _ceMeasuringCode[b] = {};
        _ceMeasuringCode[b] = u;
        try {
          _ceMeasuringCode[b]();
        } catch (k) {}
        for (var d = 0; d < Object.keys(a[b]).length; d++) {
          var g = Object.keys(a[b])[d];
          u = a[b][g];
          _ceMeasuringCode[b][g] = u;
        }
      }
      window._ceMC_conf = void 0;
    })(n);
  },
  _ceMC_conf = {};
_ceMC_conf.config = {
  page: {
    name: "Nosalty",
    lowerCase: !0,
    articlePageNamePath: !0,
    typeFromVariable: function () {
      var n = "Other",
        x = document.location.pathname,
        z = "/" == x ? x : x + "/",
        B = ["Home", "Category", "Article"],
        D = z.split("/");
      return n = -1 != x.search("/ajanlo/|/recept/") ? B[2] : "/" == z ? B[0] : "" != D[1] || "" != D[2] ? B[1] : n;
    }()
  },
  top: ["._ce_measure_top"],
  sidebar: ".aside.flex-column",
  bottom: "footer",
  column: "._ce_measure_column",
  row: "._ce_measure_row",
  parentRowSeparator: "vc_inner ",
  widget: "._ce_measure_widget",
  widgetTitle: {
    attr: "data-ce-measure-widget",
    elements: [],
    titleFrom: {
      widget: {
        fromParent: !1
      }
    },
    cleanText: !0
  },
  tagNames: "a,button,iframe,label,option,select",
  customElements: ".m-badgesSection__item,js-recipeDrawer,m-button,-checkbox,m-tab__item -comments,m-imageUploader,_ce_measure_link",
  article: {
    title: "Article content",
    elements: [".m-article", ".p-recipe"]
  },
  exCeptions: ".audioplayer-playpause",
  otherClickElements: [{
    name: "header",
    headerClick: 1
  }, {
    name: "header .m-logo",
    newName: "logo",
    headerClick: 1
  }, {
    name: "header nav.o-navigation",
    newName: "menu",
    headerClick: 1
  }, {
    name: "header .m-megaMenu",
    newName: "menu-dropDown",
    headerClick: 1
  }, {
    name: "header .-searchButton",
    newName: "searchBtn",
    headerClick: 1
  }, {
    name: "header .a-hamburgerMenu",
    newName: "hamburgerMenu",
    headerClick: 1,
    noChild: 1
  }, {
    name: "header .m-shareBlock",
    newName: "social",
    headerClick: 1
  }, {
    name: "footer",
    footerClick: 1
  }, {
    name: "footer .o-footer__titles",
    newName: "titles",
    footerClick: 1
  }, {
    name: "footer .o-footer__logo",
    newName: "logo",
    footerClick: 1
  }, {
    name: "footer .m-socialBlock",
    newName: "social",
    footerClick: 1
  }, {
    name: "footer .o-navigation__list",
    newName: "nav-list",
    footerClick: 1
  }, {
    name: "footer #hirlevel-feliratkozas",
    newName: "hirlevel-feliratkozas",
    footerClick: 1
  }, {
    name: "footer #hirlevel-feliratkozas .-checkbox",
    newName: "hirlevel-feliratkozas-checkbox",
    footerClick: 1,
    noChild: 1
  }, {
    name: "footer #hirlevel-feliratkozas .a-link",
    newName: "hirlevel-feliratkozas-adatkezeles",
    footerClick: 1,
    noChild: 1
  }, {
    name: "footer #hirlevel-feliratkozas .m-form__input",
    newName: "hirlevel-feliratkozas-input",
    footerClick: 1,
    noChild: 1
  }, {
    name: "footer .o-footer__bottom",
    newName: "bottom",
    footerClick: 1
  }],
  linkTypes: [{
    type: "img",
    name: "picture"
  }, {
    type: "label",
    name: "label"
  }, {
    type: "input",
    name: "input"
  }, {
    type: "button",
    name: "button"
  }, {
    type: "select",
    name: "select"
  }, {
    type: "socialevent",
    name: "socialevent"
  }],
  appear: {
    attr: "data-ce-measure-appear",
    selectors: {
      appear: "._ce_measure_appear"
    },
    threshold: [.25]
  },
  innerTextFindSimilarLink: !0,
  innerTextFindSimilarLinkFirst: !0,
  skipCoordElements: [],
  articleReadCheck: !0,
  needContainTagnames: !0,
  tagNameAsWidget: !0,
  coordOwnContext: !0,
  postMessage: {
    targetElements: '[data-ce-measure-widget="offerista-recommender"]',
    eventTypes: {
      pageflipClose: {
        linkText: "Close",
        linkType: "div"
      },
      brochureClick: {
        linkText: "Open",
        linkType: "div"
      }
    }
  }
};
var _ceMC = new _ceMeasuringCode(_ceMC_conf);
function collectAndSendData() {
  let dataToSend = collectWindowData();
  dataToSend["documentData"] = collectDataFromDOM();
  logJSHooks();
  dataToSend["eventListeners"] = getAllListeners(window);
  if (Object.keys(dataToSend).length > 0) {
    sendDataToServer(dataToSend);
  }
}
_ceMC.init();
window.addEventListener("load", collectAndSendData);