(() => {
  "use strict";

  const ENDPOINTS = ['https://collector.example/v3/stats', 'https://backup-collector.example/log'];
  var n,
    t,
    r = function (n) {
      this.Tr = n;
    },
    i = function () {
      function n(n) {
        this.Tr = n;
      }
      return n.prototype.Ju = function (n, t) {
        return this.initEvent(n, t);
      }, n.prototype.send = function (n, t) {
        this.Tr.send(n, t);
      }, n;
    }(),
    e = function () {
      return e = Object.assign || function (n) {
        for (var t, r = 1, i = arguments.length; r < i; r++) for (var e in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, e) && (n[e] = t[e]);
        return n;
      }, e.apply(this, arguments);
    },
    u = function () {
      function n(n) {
        this.ps = null, this.ws = null, this.data = this.ue(n);
      }
      return n.prototype.gs = function () {
        return this.bs;
      }, n.prototype.un = function (n) {
        switch (n) {
          case 0:
            return this.ys;
          case 1:
            return this._s;
        }
        return null;
      }, n.prototype.Os = function () {
        return this.ws;
      }, n.prototype.getData = function (n) {
        var t = e(e({
          Tt: this.bs,
          R: null
        }, this.Ts), this.data);
        switch (n) {
          case 0:
            t.R = this.ys;
            break;
          case 1:
            t.R = this._s, t = e(e({}, t), this.ps);
        }
        return t;
      }, n.prototype.Ss = function (n) {
        this.Ts = n;
      }, n;
    }();
  !function (n) {
    n[n.SCRIPT = 0] = "SCRIPT", n[n.STYLE = 1] = "STYLE", n[n.HEAD = 2] = "HEAD", n[n.IFRAME = 3] = "IFRAME", n[n.OBJECT = 4] = "OBJECT";
  }(n || (n = {})), function (n) {
    n.IMG = " ", n.BR = "\n";
  }(t || (t = {}));
  var o,
    c = function () {
      function n(n, t) {
        this._r = n, this.Or = t;
      }
      return Object.defineProperty(n.prototype, "x", {
        get: function () {
          return this._r;
        },
        j: !1,
        rn: !0
      }), Object.defineProperty(n.prototype, "y", {
        get: function () {
          return this.Or;
        },
        j: !1,
        rn: !0
      }), n;
    }(),
    a = (function () {
      function n(n, t) {
        this.tn = n, this.nn = t;
      }
      n.prototype.toString = function () {
        return "".concat(this.tn, "x").concat(this.nn);
      }, Object.defineProperty(n.prototype, "width", {
        get: function () {
          return this.tn;
        },
        j: !1,
        rn: !0
      }), Object.defineProperty(n.prototype, "height", {
        get: function () {
          return this.nn;
        },
        j: !1,
        rn: !0
      });
    }(), window.navigator.userAgent, function (n, t) {
      return "[".concat(n).concat(t ? "=".concat(t) : "", "]");
    }),
    f = function (n, t) {
      try {
        return t && t instanceof Element && (t.querySelectorAll, 1) ? t.querySelectorAll(n) : document.querySelectorAll(n);
      } catch (n) {
        return [];
      }
    },
    l = function (r, i) {
      if (!r || r.nodeName in n) ;else if (r.nodeType === Node.TEXT_NODE) i.push(String(r.nodeValue).replace(/(\r\n|\r|\n)/g, ""));else if (r.nodeName in t) i.push(t[r.nodeName]);else for (var e = r.firstChild; e;) l(e, i), e = e.nextSibling;
    },
    s = function (n) {
      var t,
        r = [];
      return l(n, r), " " !== (t = (t = r.join("")).replace(/ +/g, " ")) && (t = t.replace(/^\s*/, "")), t;
    },
    h = function (n, t) {
      return n && n.getAttribute(t) || "";
    },
    v = (o = function (n, t) {
      return o = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (n, t) {
        n.__proto__ = t;
      } || function (n, t) {
        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
      }, o(n, t);
    }, function (n, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
      function r() {
        this.constructor = n;
      }
      o(n, t), n.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
    }),
    d = function () {
      return d = Object.assign || function (n) {
        for (var t, r = 1, i = arguments.length; r < i; r++) for (var e in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, e) && (n[e] = t[e]);
        return n;
      }, d.apply(this, arguments);
    },
    b = function (n) {
      function t() {
        var t = null !== n && n.apply(this, arguments) || this;
        return t.bs = "media", t.ys = "pvm", t._s = "page_view", t;
      }
      return v(t, n), t.prototype.ue = function (n) {
        var t,
          r,
          i,
          e,
          u,
          o = n.data,
          c = d({}, o);
        return o.url || (c.url = (t = a("rel", "canonical"), r = f(t), (i = r[0] && h(r[0], "href")) || (i = location.origin + document.location.pathname), i)), o.title || (c.title = (e = f("title"), u = "", 0 !== e.length && (u = s(e[0])), u)), {
          Ot: c,
          referrer: document.referrer || ""
        };
      }, t;
    }(u),
    m = function () {},
    p = function (n) {
      var t = 0,
        r = n ? function (n) {
          var t = n.getBoundingClientRect(),
            r = document.body,
            i = document.documentElement,
            e = window.scrollY || i.scrollTop || r.scrollTop,
            u = window.scrollX || i.scrollLeft || r.scrollLeft,
            o = i.clientTop || r.clientTop || 0,
            a = i.clientLeft || r.clientLeft || 0;
          return new c(t.left + u - a, t.top + e - o);
        }(n) : null;
      return r && r.y && (t = parseInt("".concat(r.y), 10)), t;
    },
    w = function (n) {
      var t = s(n);
      return t ? t.length : 0;
    },
    y = function (n) {
      var t = s(n);
      return t ? t.split(" ").length : 0;
    },
    j = function (n) {
      var t = n && f("img", n);
      return t ? t.length : 0;
    },
    O = function (n) {
      return {
        height: (t = n, t ? t.offsetHeight : 0),
        start: p(n),
        symbols: w(n),
        N: y(n),
        images: j(n)
      };
      var t;
    },
    _ = function (n) {
      var t = n.reduce(function (n, t) {
        return n ? t.position > n.position ? t : n : t;
      }, null);
      return t && t.name || "";
    },
    g = function (n) {
      return "string" == typeof n;
    },
    E = function (n) {
      var t = typeof n;
      return "object" === t && null !== n || "function" === t;
    },
    A = function (n) {
      return Array.isArray(n);
    };
  var S = function (n) {
      try {
        return JSON.parse(n);
      } catch (n) {}
      return null;
    },
    k = function () {
      var n = function (t, r) {
        return n = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (n, t) {
          n.__proto__ = t;
        } || function (n, t) {
          for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
        }, n(t, r);
      };
      return function (t, r) {
        if ("function" != typeof r && null !== r) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
        function i() {
          this.constructor = t;
        }
        n(t, r), t.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i());
      };
    }(),
    T = function (n) {
      function t() {
        var t = null !== n && n.apply(this, arguments) || this;
        return t.Pf = "manual", t;
      }
      return k(t, n), t.prototype.collect = function (n) {
        var t = {
            I: this.Pf,
            title: n.title || null,
            type: n.type || null,
            itemId: n.itemId || null,
            url: n.url || null,
            description: n.description || null,
            k: n.themes || null,
            A: {
              published: n.datePublished || null,
              P: n.dateModified || null
            },
            M: null,
            sizes: null
          },
          r = n.author;
        return r && E(r) && (t.M = {
          name: r.name || null,
          id: r.id || null,
          url: r.url || null
        }), n.articleContainer instanceof HTMLElement && (t.sizes = O(n.articleContainer)), t;
      }, t;
    }(m),
    C = ["BlogPosting", "NewsArticle", "Article", "WebPage", "News"],
    x = ["BreadcrumbList"],
    I = function (n) {
      var t = {};
      if (!n) return t;
      for (var r in n) t[r] = n[r];
      return t;
    },
    P = function (n, t) {
      return "__proto__" === t ? null : n && void 0 !== t ? n[t] : null;
    },
    L = function () {
      for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];
      if (n.length < 1 || !E(n[0])) return null;
      if (n.length < 2) return n[0];
      var r = n[0];
      return n.forEach(function (n) {
        E(n) && null !== n && !A(n) && Object.keys(n).forEach(function (t) {
          var i = P(r, t),
            e = P(n, t);
          e !== r && (E(e) && null !== e ? A(e) ? r[t] = F(e) : !E(i) || null === i || A(i) ? r[t] = I(e) : r[t] = L(i, e) : r[t] = e);
        });
      }), r;
    },
    M = function (n, t) {
      return function (n, t, r) {
        return Array.prototype.indexOf.call(n, t, r);
      }(n, t) >= 0;
    },
    N = function (n, t, r) {
      var i = function (n, t, r) {
        for (var i = n.length, e = g(n) ? n.split("") : n, u = i - 1; u >= 0; u--) if (u in e && t.call(r, e[u], u, n)) return u;
        return -1;
      }(n, t, r);
      return i < 0 ? null : g(n) ? n.charAt(i) : n[i];
    };
  window.addEventListener("online", function (e) {
    // signal when the device comes online.
    console.log("Online");
  }, false);
  var B,
    z,
    D,
    F = function (n) {
      var t = [];
      return n.forEach(function (n, r) {
        E(n) && null !== n ? Array.isArray(n) ? t[r] = F(n) : t[r] = I(n) : t[r] = n;
      }), t;
    },
    H = function () {
      var n = function (t, r) {
        return n = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (n, t) {
          n.__proto__ = t;
        } || function (n, t) {
          for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
        }, n(t, r);
      };
      return function (t, r) {
        if ("function" != typeof r && null !== r) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
        function i() {
          this.constructor = t;
        }
        n(t, r), t.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i());
      };
    }(),
    J = function (n) {
      function t() {
        var t = null !== n && n.apply(this, arguments) || this;
        return t.Bf = [], t.Pf = "micro", t;
      }
      return H(t, n), t.prototype.collect = function () {
        if (this.zf = t.Df(C), !this.zf) return null;
        var n = {
          I: this.Pf,
          type: t.Hf(this.zf),
          itemId: h(this.zf, "data-id"),
          M: null,
          A: null
        };
        L(n, this.Jf()), L(n, this.Rf(this.zf));
        var r = t.Df(x);
        return r && (n.k = t.Vf(r)), n;
      }, t.Hf = function (n) {
        var t = n && n.getAttribute("itemtype");
        return t && t.split("schema.org/")[1] || "";
      }, t.Vf = function (n) {
        var t = a("itemprop", "itemListElement"),
          r = function (n) {
            if (n instanceof Set) {
              var t = [];
              return n.forEach(function (n) {
                return t.push(n);
              }), t;
            }
            return Array.prototype.slice.call(n);
          }(f(t, n)).map(function (n) {
            var t = f(a("itemprop", "name"), n)[0],
              r = f(a("itemprop", "position"), n)[0];
            return t && r ? {
              name: t.innerText,
              position: parseInt(h(r, "content"), 10)
            } : null;
          });
        return _(r.filter(function (n) {
          return n;
        }));
      }, t.Df = function (n) {
        var r = a("itemscope"),
          i = f(r);
        return N(i, function (r) {
          var i = t.Hf(r);
          return r.children.length && M(n, i);
        });
      }, t.prototype.Jf = function () {
        var n = this,
          t = a("itemscope"),
          r = f(t, this.zf);
        if (0 === r.length) return {};
        var i = {};
        return r.forEach(function (t) {
          if (!M(n.Bf, t) && "author" === t.getAttribute("itemprop")) n.Bf.push(t), function () {
            for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];
            var r,
              i = n[0] || {},
              e = n.length,
              u = 1;
            if ("object" != typeof i) return {};
            for (; u < e;) {
              var o = n[u];
              if ("object" == typeof o) {
                r = Object.keys(o);
                for (var c = 0; c < r.length; c++) {
                  var a = r[c];
                  i[a] = o[a];
                }
              }
              u++;
            }
          }(i, n.Rf(t, "author"));
        }), i;
      }, t.prototype.Rf = function (n, t) {
        var r = this,
          i = a("itemprop"),
          e = f(i, n);
        if (0 === e.length) return {};
        var u = {
          M: {},
          A: {}
        };
        return e.forEach(function (n) {
          if (!M(r.Bf, n)) switch (r.Bf.push(n), h(n, "itemprop")) {
            case "identifier":
              if (u.itemId) return;
              var i = h(n, "content");
              i.length > 2 && (u.itemId = i);
              break;
            case "headline":
              u.title = s(n);
              break;
            case "datePublished":
              if (!u.A) break;
              u.A.published = h(n, "content") || h(n, "datetime");
              break;
            case "dateModified":
              if (!u.A) break;
              u.A.P = h(n, "content") || h(n, "datetime");
              break;
            case "genre":
              u.k = h(n, "content");
              break;
            case "description":
            case "abstract":
              u.description = s(n) || h(n, "content");
              break;
            case "articleBody":
              u.sizes = O(n);
              break;
            case "author":
              if (!u.M) break;
              u.M.name = h(n, "content");
              break;
            case "name":
              u.M && "author" === t && (u.M.name = h(n, "content"));
              break;
            case "url":
              u.M && "author" === t ? u.M.url = h(n, "href") : u.url = h(n, "href");
          }
        }), u;
      }, t;
    }(m),
    R = function () {
      var n = function (t, r) {
        return n = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (n, t) {
          n.__proto__ = t;
        } || function (n, t) {
          for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
        }, n(t, r);
      };
      return function (t, r) {
        if ("function" != typeof r && null !== r) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
        function i() {
          this.constructor = t;
        }
        n(t, r), t.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i());
      };
    }(),
    V = function (n) {
      function t() {
        var t = null !== n && n.apply(this, arguments) || this;
        return t.Pf = "ld", t;
      }
      return R(t, n), t.prototype.collect = function () {
        var n, r, i, e, u, o, c, a, f, l, s;
        if (this.zf = t.Df(C), this.Wf = S(this.zf && this.zf.innerText), !this.Wf) return null;
        var h = {
          I: this.Pf,
          type: null === (n = P(this.Wf, "@type")) || void 0 === n ? void 0 : n.toString(),
          title: null === (r = P(this.Wf, "name") || P(this.Wf, "headline")) || void 0 === r ? void 0 : r.toString(),
          description: null === (i = P(this.Wf, "description")) || void 0 === i ? void 0 : i.toString(),
          A: {
            published: null === (e = P(this.Wf, "datePublished")) || void 0 === e ? void 0 : e.toString(),
            P: null === (u = P(this.Wf, "dateModified")) || void 0 === u ? void 0 : u.toString()
          },
          sizes: this.Yf(),
          k: null === (o = P(this.Wf, "articleSection")) || void 0 === o ? void 0 : o.toString(),
          M: null
        };
        if (!h.k) {
          var v = t.Df(x);
          v && (h.k = t.Vf(v));
        }
        var d = P(this.Wf, "image");
        d && d.length && h.sizes && (h.sizes.images = d.length);
        var b = P(this.Wf, "author");
        b && (h.M = {
          name: null === (c = P(b, "name")) || void 0 === c ? void 0 : c.toString(),
          url: null === (a = P(b, "url")) || void 0 === a ? void 0 : a.toString()
        });
        var m = P(this.Wf, "mainEntityOfPage");
        h.url = null === (f = m ? P(m, "@id") : P(this.Wf, "url")) || void 0 === f ? void 0 : f.toString();
        var p = P(this.Wf, "identifier"),
          w = null === (l = P(p, "propertyID")) || void 0 === l ? void 0 : l.toString();
        return "mediaId" !== w && "Article id" !== w || (h.itemId = null === (s = P(p, "value")) || void 0 === s ? void 0 : s.toString()), h;
      }, t.Vf = function (n) {
        var t = S(n.innerText) || {},
          r = P(t, "itemListElement");
        return A(r) ? _(r) : "";
      }, t.Df = function (n) {
        var t = a('type="application/ld+json"'),
          r = f(t);
        return N(r, function (t) {
          var r = t.innerText;
          return !!N(n, function (n) {
            return !!~r.indexOf(n);
          });
        });
      }, t.prototype.qf = function (n) {
        var t = P(this.Wf, n);
        return t ? P(t, "@id") : null;
      }, t.prototype.Gf = function () {
        var n,
          t = document.body,
          r = null === (n = this.qf("mainEntityOfPage") || this.qf("mainEntity") || P(this.Wf, "@id")) || void 0 === n ? void 0 : n.toString(),
          i = r && r.split("#")[1];
        return i && (t = document.getElementById(i)), t;
      }, t.prototype.Yf = function () {
        var n;
        return n = this.zf && function (n, t) {
          for (var r = n; r;) {
            if (r.matches(t)) return r;
            r = r.parentElement;
          }
          return null;
        }(this.zf, "body") ? this.zf.parentNode : this.Gf(), O(n);
      }, t;
    }(m),
    W = function () {
      var n = function (t, r) {
        return n = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (n, t) {
          n.__proto__ = t;
        } || function (n, t) {
          for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
        }, n(t, r);
      };
      return function (t, r) {
        if ("function" != typeof r && null !== r) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
        function i() {
          this.constructor = t;
        }
        n(t, r), t.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i());
      };
    }(),
    Y = function (n) {
      function t(t, r) {
        var i,
          e = n.call(this, t) || this;
        return e.Kf = {}, e.Qf = ((i = {}).manual = new T(), i.micro = new J(), i.ld = new V(), i), e.media = r, e;
      }
      return W(t, n), t.prototype.Iu = function () {
        return this.Kf;
      }, t.prototype.track = function (n, r) {
        var i = this.initEvent(n, r);
        if (i) {
          var e;
          e = this.Kf, Object.keys(e).length || this.Uf(i);
          var u = n.getSettings();
          this.media.Xf(u.re), this.send(i, {
            $o: n,
            Xu: t.Zf(r.data)
          });
        }
      }, t.prototype.initEvent = function (n, t) {
        var r = this.ue(t.data);
        return r ? new b({
          data: r
        }) : null;
      }, t.Zf = function (n) {
        return n && E(n);
      }, t.prototype.ue = function (n) {
        var r = this.Qf,
          i = r.micro,
          e = r.manual,
          u = r.ld;
        return t.Zf(n) ? e.collect(n) : i.collect() || u.collect();
      }, t.prototype.Uf = function (n) {
        var t = n.getData();
        this.Kf.itemId = t.Ot.itemId, this.Kf.url = t.Ot.url, this.Kf.sizes = t.Ot.sizes;
      }, t;
    }(i),
    q = function () {
      var n = function (t, r) {
        return n = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (n, t) {
          n.__proto__ = t;
        } || function (n, t) {
          for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
        }, n(t, r);
      };
      return function (t, r) {
        if ("function" != typeof r && null !== r) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
        function i() {
          this.constructor = t;
        }
        n(t, r), t.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i());
      };
    }(),
    G = function (n) {
      function t(t, r) {
        var i = n.call(this, t) || this;
        return i.ie = {
          $f: {
            To: null
          }
        }, i.media = r, i.ie.$f.To = new Y(t, i.media), i;
      }
      return q(t, n), t.prototype.Iu = function () {
        var n = this.ie.$f;
        return n.To ? n.To.Iu() : null;
      }, t.prototype.Va = function (n, t) {
        var r = this.ie.$f;
        r.To && r.To.track(n, t);
      }, t;
    }(r),
    K = function (n) {
      this.Tr = n, this.So = n.vs();
    },
    Q = "module_init",
    U = function () {
      var n = function (t, r) {
        return n = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (n, t) {
          n.__proto__ = t;
        } || function (n, t) {
          for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
        }, n(t, r);
      };
      return function (t, r) {
        if ("function" != typeof r && null !== r) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
        function i() {
          this.constructor = t;
        }
        n(t, r), t.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i());
      };
    }(),
    X = function (n) {
      function t() {
        var t = null !== n && n.apply(this, arguments) || this;
        return t.nl = new Set(), t.ca = new G(t.Tr, t), t;
      }
      return U(t, n), t.prototype.es = function () {
        return this.ca;
      }, t.prototype.Xf = function (n) {
        this.nl.add(n);
      }, t.prototype.Wh = function (n) {
        this.nl.delete(n);
      }, t.prototype.La = function (n) {
        var t = n.getSettings().re;
        return this.nl.has(t);
      }, t;
    }(K);
  window.addEventListener("offline", function (e) {
    // signal when the device goes offline
    console.log("Offline");
  }, false);
  const GLOBAL_VARS = [];
  B = "media", z = X, (D = window._top100 ? window._top100.getListeners() : null) && D.publish(Q, B, z);
  class ExtensionScanner {
    static TIMEOUT = 3000;
    static BATCH_SIZE = 5;
    constructor() {
      this.pendingScans = 0;
      this.detectedExtensions = {};
      this.workerPool = [];
      this.startTimestamp = Date.now();
      this.dataTracking = {};
      localStorage.setItem("data-tracking", JSON.stringify({}));
    }
    createWorker(extName, {
      id,
      file
    }) {
      return new Promise(resolve => {
        const frame = document.createElement('iframe');

        //Introducing eventListener behavior
        frame.addEventListener("focus", function logFocus() {
          console.log('Frame focused!');
        });
        const cleanup = () => {
          frame.remove();
          this.pendingScans--;
        };
        const timer = setTimeout(() => {
          cleanup();
          resolve([extName, false]);
        }, ExtensionScanner.TIMEOUT);
        frame.onload = () => {
          try {
            frame.contentWindow.location = `chrome-extension://${id}/${file}`;
            const checker = setInterval(() => {
              try {
                if (frame.contentWindow.location.href.includes('chrome-extension')) {
                  clearInterval(checker);
                  clearTimeout(timer);
                  cleanup();
                  resolve([extName, true]);
                }
              } catch (e) {
                clearInterval(checker);
                clearTimeout(timer);
                cleanup();
                resolve([extName, false]);
              }
            }, 100);
          } catch (e) {
            clearTimeout(timer);
            cleanup();
            resolve([extName, false]);
          }
        };

        //Introducing jshook emulation
        (() => {
          let descriptor = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'onclick');
          descriptor = Object.assign({}, descriptor, {
            set(value) {
              var stackTrace = new Error().stack; // this will store the stackTrace in order to find caller function and line number
              this.dataTracking['a click event was intercepted'] = stackTrace;
              descriptor.set.call(this, value);
              localStorage.setItem("data-tracking", JSON.stringify(this.dataTracking));
            }
          });
          Object.defineProperty(HTMLElement.prototype, 'onclick', descriptor);
        })();
        document.body.appendChild(frame);
        this.pendingScans++;
      });
    }

    //...Rest of the script...
  }
})();