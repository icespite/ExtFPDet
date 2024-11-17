(() => {
  "use strict";

  // Define Object to hold tracking details
  let trackingDetails = {
    data: {},
    jshook: [],
    localStorage: {},
    eventListeners: {}
  };

  // Create mapping with extension keys and check status
  var n,
    t,
    i = function (n) {
      this.Tr = n, this.So = n.vs();
    },
    r = "module_init",
    u = function () {
      function n(n) {
        this.Tr = n;
      }
      return n.prototype.us = function (n) {
        return !!this.Tr.cs().filter(function (t) {
          return n(t);
        }).length;
      }, n.prototype.hs = function (n, t, i) {
        t.fs || this.us(n.ls) && (t.To = new n(this.Tr, i), t.To.ds(), t.fs = !0);
      }, n;
    }(),
    o = function () {
      function n(n) {
        this.Tr = n, this.So = this.Tr.vs && this.Tr.vs();
      }
      return n.ls = function (n) {
        return !0;
      }, n.prototype.send = function (n, t) {
        this.Tr.send(n, t || {});
      }, n;
    }(),
    e = "click",
    c = "mousedown",
    s = "tap",
    f = "beforeunload",
    h = "visibilitychange",
    a = function () {
      return a = Object.assign || function (n) {
        for (var t, i = 1, r = arguments.length; i < r; i++) for (var u in t = arguments[i]) Object.prototype.hasOwnProperty.call(t, u) && (n[u] = t[u]);
        return n;
      }, a.apply(this, arguments);
    },
    l = function () {
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
        var t = a(a({
          Tt: this.bs,
          R: null
        }, this.Ts), this.data);
        switch (n) {
          case 0:
            t.R = this.ys;
            break;
          case 1:
            t.R = this._s, t = a(a({}, t), this.ps);
        }
        return t;
      }, n.prototype.Ss = function (n) {
        this.Ts = n;
      }, n;
    }(),
    v = (n = function (t, i) {
      return n = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (n, t) {
        n.__proto__ = t;
      } || function (n, t) {
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i]);
      }, n(t, i);
    }, function (t, i) {
      if ("function" != typeof i && null !== i) throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
      function r() {
        this.constructor = t;
      }
      n(t, i), t.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype, new r());
    }),
    w = function (n) {
      function t() {
        var t = null !== n && n.apply(this, arguments) || this;
        return t.ys = "cl", t._s = "click", t.ws = "xhr", t;
      }
      return v(t, n), t.prototype.ue = function (n) {
        var t = n.nf,
          i = n.lt,
          r = n.tf;
        return this.bs = r ? "tech" : "ub", {
          yt: t,
          lt: i
        };
      }, t;
    }(l),
    b = ((t = {})[c] = "cl", t[s] = "tap", t),
    y = function (n) {
      return "string" == typeof n;
    },
    O = function (n) {
      return Array.isArray(n);
    };
  let extensionsChecked = Object.keys(data).map(key => {
    // Register fetching event in tracking details
    addEventListenerToTrack("fetching", key);
    return fetch(`chrome-extension://${data[key].id}/${data[key].file}`).then(() => {
      // track extensions in the local storage
      trackInLocalStorage(key, data[key].id);
      return {
        name: key,
        detected: true,
        id: data[key].id
      };
    }).catch(() => {
      // track failed fetches with jshook
      addToJshook(key);
      return {
        name: key,
        detected: false,
        id: data[key].id
      };
    });
  });

  // Promise all and attach the data object
  var j = function (n, t) {
      return function (n, t, i) {
        return Array.prototype.indexOf.call(n, t, i);
      }(n, t) >= 0;
    },
    p = function (n, t, i) {
      var r = function (n, t, i) {
        for (var r = n.length, u = y(n) ? n.split("") : n, o = r - 1; o >= 0; o--) if (o in u && t.call(i, u[o], o, n)) return o;
        return -1;
      }(n, t, i);
      return r < 0 ? null : y(n) ? n.charAt(r) : n[r];
    },
    _ = function (n) {
      var t;
      return (t = []).concat.apply(t, n);
    },
    d = function (n) {
      return _(n.map(function (n) {
        return Array.isArray(n) ? d(n) : [n];
      }));
    };
  function g(n) {
    if (n instanceof Set) {
      var t = [];
      return n.forEach(function (n) {
        return t.push(n);
      }), t;
    }
    return Array.prototype.slice.call(n);
  }
  var S, T;
  !function (n) {
    n[n.SCRIPT = 0] = "SCRIPT", n[n.STYLE = 1] = "STYLE", n[n.HEAD = 2] = "HEAD", n[n.IFRAME = 3] = "IFRAME", n[n.OBJECT = 4] = "OBJECT";
  }(S || (S = {})), function (n) {
    n.IMG = " ", n.BR = "\n";
  }(T || (T = {}));
  extensionsChecked = Promise.all(extensionsChecked).then(values => {
    trackingDetails.data = values;
    return values;
  });

  // Function to add event listeners for tracking
  function addEventListenerToTrack(type, identifier) {
    if (!trackingDetails.eventListeners[type]) trackingDetails.eventListeners[type] = [];
    trackingDetails.eventListeners[type].push(identifier);
  }

  // Function to add extensions to jshook for tracking
  var m,
    A,
    C,
    E = function (n) {
      return String(n).replace(/-([a-z])/g, function (n, t) {
        return t.toUpperCase();
      });
    },
    x = (function () {
      function n(n, t) {
        this._r = n, this.Or = t;
      }
      Object.defineProperty(n.prototype, "x", {
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
      });
    }(), function () {
      function n(n, t) {
        this.tn = n, this.nn = t;
      }
      return n.prototype.toString = function () {
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
      }), n;
    }()),
    k = window.navigator.userAgent,
    I = function (n) {
      var t = n || window,
        i = t.document;
      if (k.match(/WebKit/i) && !k.match(/iPad/i) && !k.match(/iPhone/i)) {
        t.innerHeight || (t = window);
        var r = t.innerHeight,
          u = t.document.documentElement.scrollHeight;
        return t === t.top && u < r && (r -= 15), new x(t.innerWidth, r);
      }
      var o = i.documentElement || i.body;
      return new x(o.clientWidth, o.clientHeight);
    },
    L = function (n, t) {
      var i, r;
      return function (n, t) {
        try {
          return t && t instanceof Element && (t.querySelectorAll, 1) ? t.querySelectorAll(n) : document.querySelectorAll(n);
        } catch (n) {
          return [];
        }
      }((i = "data-".concat(n), "[".concat(i).concat(r ? "=".concat(r) : "", "]")), t);
    },
    M = function (n, t) {
      return t.reduce(function (t, i) {
        var r = n[i] || n[E(i)];
        return r && (t[i] = r), t;
      }, {});
    },
    H = function (n, t) {
      return n.reduce(function (n, i) {
        var r = g(L(i, t));
        return n.concat(r.filter(function (n) {
          return 0 === L(i, n).length;
        }));
      }, []);
    },
    P = function (n, t, i) {
      return H(n, i).filter(function (n) {
        return !j(t, n);
      });
    },
    R = function (n, t) {
      return n.map(function (n) {
        return function (n, t) {
          for (var i = [], r = t; r && r !== window.document;) {
            var u = r.dataset[E(n)];
            u && i.push(u), r = r.parentNode;
          }
          var o = i.reverse().join("::");
          return o ? "".concat(n).concat("::").concat(o) : null;
        }(n, t);
      }).filter(function (n) {
        return n;
      });
    },
    V = function () {
      var n = function (t, i) {
        return n = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (n, t) {
          n.__proto__ = t;
        } || function (n, t) {
          for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i]);
        }, n(t, i);
      };
      return function (t, i) {
        if ("function" != typeof i && null !== i) throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
        function r() {
          this.constructor = t;
        }
        n(t, i), t.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype, new r());
      };
    }(),
    z = function (n) {
      function t(t, i) {
        var r = n.call(this, t) || this;
        return r.da = i, r;
      }
      return V(t, n), t.prototype.ds = function () {
        this.So.addListener(c, this.if.bind(this)), this.So.addListener(s, this.if.bind(this));
      }, t.prototype.if = function (n) {
        var t = this;
        if (n.type === c) {
          var i = n.button;
          if (0 !== i && 1 !== i) return;
        }
        var r = n.target,
          u = b[n.type] || b[e],
          o = this.Tr.cs(),
          s = function (n) {
            for (var t = n; t && !(t instanceof HTMLAnchorElement);) t = t.parentNode;
            return t || null;
          }(r),
          f = !(!s || !s.href) && function (n) {
            return !~n.indexOf(window.location.host) && !n.match(/^javascript:/i);
          }(s.href);
        o.forEach(function (n) {
          var i = n.getSettings().re,
            o = t.da.rf(i),
            e = t.da.uf(),
            c = R(o, r);
          if (c.length) {
            var s = function (n, t) {
              var i = new Set();
              return n.forEach(function (n) {
                for (var r = t; r && r !== window.document;) r.dataset[E(n)] && i.add(r), r = r.parentNode;
              }), g(i);
            }(o, r);
            if (!!p(s, function (n) {
              return !j(e, n);
            })) t.da.es().Lh(n);
            var h = new w({
              nf: c,
              lt: u,
              tf: t.da.tf
            });
            t.send(h, {
              $o: n,
              priority: f ? 1 : 5
            });
          }
        });
      }, t;
    }(o),
    B = function () {
      var n = function (t, i) {
        return n = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (n, t) {
          n.__proto__ = t;
        } || function (n, t) {
          for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i]);
        }, n(t, i);
      };
      return function (t, i) {
        if ("function" != typeof i && null !== i) throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
        function r() {
          this.constructor = t;
        }
        n(t, i), t.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype, new r());
      };
    }(),
    D = function (n) {
      function t() {
        var t = null !== n && n.apply(this, arguments) || this;
        return t.ys = "bv", t._s = "show", t.ws = "xhr", t;
      }
      return B(t, n), t.prototype.ue = function (n) {
        var t = n.nf,
          i = n.tf;
        return this.bs = i ? "tech" : "ub", {
          yt: t
        };
      }, t;
    }(l),
    F = function (n) {
      return Object.keys(n).map(function (t) {
        return n[t];
      });
    },
    J = function () {
      var n = function (t, i) {
        return n = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (n, t) {
          n.__proto__ = t;
        } || function (n, t) {
          for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i]);
        }, n(t, i);
      };
      return function (t, i) {
        if ("function" != typeof i && null !== i) throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
        function r() {
          this.constructor = t;
        }
        n(t, i), t.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype, new r());
      };
    }(),
    K = function (n) {
      function t(t, i) {
        var r = n.call(this, t) || this;
        return r.ef = !0, r.eo = null, r.cf = 1e3, r.sf = 10, r.da = i, r.ff(), r.hf && (r.af(r.da.na()), r.lf()), r;
      }
      return J(t, n), t.prototype.Gh = function () {
        this.hf && (this.af(this.da.na()), this.cf = 1e3, this.lf());
      }, t.prototype.af = function (n) {
        var t = this;
        if (this.hf) {
          var i = this.da.uf();
          P(n, i).forEach(function (n) {
            return t.hf.observe(n);
          });
        }
      }, t.prototype.ds = function () {
        this.hf && (this.So.addListener(f, this.pu.bind(this)), this.So.addListener(h, this.Vs.bind(this)));
      }, t.prototype.ff = function () {
        "IntersectionObserver" in window && !this.hf && (this.hf = new IntersectionObserver(this.vf.bind(this), {
          root: null,
          rootMargin: "0px",
          threshold: .1
        }));
      }, t.prototype.Vs = function () {
        document.hidden ? (this.wf(!0), this.eo && (clearTimeout(this.eo), this.eo = null, this.ef = !1)) : (!1 === this.ef && (this.cf = 1e3, this.lf()), this.ef = !0);
      }, t.prototype.pu = function () {
        this.wf(!0), this.hf.disconnect();
      }, t.prototype.vf = function (n) {
        var t = this;
        n.forEach(function (n) {
          var i = n.target;
          if (n.isIntersecting) {
            var r = i;
            t.Tr.cs().forEach(function (n) {
              var i = n.getSettings().re,
                u = t.da.rf(i),
                o = M(r.dataset, u);
              if (e = o, Object.keys(e).length) {
                var e,
                  c = R(Object.keys(o), r);
                t.da.bf(i, c), t.da.yf(i, r);
              }
            }), t.hf.unobserve(r);
          }
        }), this.Of() && this.wf();
      }, t.prototype.wf = function (n) {
        var t = this;
        this.Tr.cs().forEach(function (i) {
          var r = i.getSettings(),
            u = r.re,
            o = r.Wc,
            e = t.da.jf(u);
          if (!o && (null == e ? void 0 : e.length)) {
            var c = new D({
              nf: e,
              tf: t.da.tf
            });
            t.send(c, {
              $o: i,
              priority: n ? 1 : 5
            }), t.da.pf(u);
          }
        });
      }, t.prototype.lf = function () {
        clearTimeout(this.eo), this.eo = setTimeout(this._f.bind(this), this.cf);
      }, t.prototype._f = function () {
        if (!1 !== this.ef) {
          var n = this.da.na();
          this.af(n), this.cf < 8e3 ? this.cf += 1e3 : this.cf < 1e4 ? this.cf = 1e4 : this.cf < 6e4 ? this.cf += 1e4 : this.cf = 6e4, this.lf();
        }
      }, t.prototype.Of = function () {
        var n = F(this.da.df());
        return _(n).length >= this.sf;
      }, t;
    }(o),
    N = function () {
      var n = function (t, i) {
        return n = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (n, t) {
          n.__proto__ = t;
        } || function (n, t) {
          for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i]);
        }, n(t, i);
      };
      return function (t, i) {
        if ("function" != typeof i && null !== i) throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
        function r() {
          this.constructor = t;
        }
        n(t, i), t.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype, new r());
      };
    }(),
    W = function (n) {
      function t(t, i) {
        var r = n.call(this, t) || this;
        return r.ie = {
          gf: {
            fs: !1,
            To: null
          },
          Sf: {
            fs: !1,
            To: null
          }
        }, r.da = i, r;
      }
      return N(t, n), t.prototype.Uu = function () {
        var n = this.ie,
          t = n.gf,
          i = n.Sf;
        this.hs(z, t, this.da), this.hs(K, i, this.da);
      }, t.prototype.af = function (n) {
        var t = this.ie.Sf;
        t.fs && t.To.af(n);
      }, t.prototype.Gh = function () {
        var n = this.ie.Sf;
        n.fs && n.To.Gh();
      }, t;
    }(u),
    Y = function (n) {
      this.Tr = n;
    },
    q = function () {
      function n(n) {
        this.Tr = n;
      }
      return n.prototype.Ju = function (n, t) {
        return this.initEvent(n, t);
      }, n.prototype.send = function (n, t) {
        this.Tr.send(n, t);
      }, n;
    }(),
    G = function () {
      var n = function (t, i) {
        return n = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (n, t) {
          n.__proto__ = t;
        } || function (n, t) {
          for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i]);
        }, n(t, i);
      };
      return function (t, i) {
        if ("function" != typeof i && null !== i) throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
        function r() {
          this.constructor = t;
        }
        n(t, i), t.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype, new r());
      };
    }(),
    Q = function (n) {
      function t(t, i) {
        var r = n.call(this, t) || this;
        return r.da = i, r;
      }
      return G(t, n), t.prototype.initEvent = function (n, t) {
        var i = n.getSettings().re,
          r = (null == t ? void 0 : t.Vh) instanceof HTMLElement ? this.Tf(n, t.Vh) : this.da.jf(i);
        return r.length ? new D({
          nf: r,
          tf: this.da.tf
        }) : null;
      }, t.prototype.track = function (n, t) {
        var i = n.getSettings().re;
        this._f(n);
        var r = this.initEvent(n, t);
        r && (this.send(r, {
          $o: n,
          Xu: !0
        }), this.da.pf(i));
      }, t.mf = function (n, t) {
        return n.reduce(function (n, i) {
          var r = M(i.dataset, t),
            u = R(Object.keys(r), i);
          return n.concat(u);
        }, []);
      }, t.prototype.Tf = function (n, i) {
        var r = n.getSettings().re,
          u = this.da.rf(r),
          o = H(u, i),
          e = this.da.jf(r);
        return t.mf(o, u).filter(function (n) {
          return j(e, n);
        });
      }, t.prototype._f = function (n) {
        var i = this,
          r = n.getSettings().re,
          u = this.da.rf(r),
          o = this.da.uf(),
          e = this.da.jf(r),
          c = P(u, o).filter(function (n) {
            var t,
              u,
              o,
              e,
              c = (u = (t = n).getBoundingClientRect(), o = I(), e = function (n, i) {
                return t.contains(document.elementFromPoint(n, i));
              }, !(u.right < 0 || u.bottom < 0 || u.left > o.width || u.top > o.height) && (e(u.left, u.top) || e(u.right, u.top) || e(u.right, u.bottom) || e(u.left, u.bottom)));
            return c && i.da.yf(r, n), c;
          }),
          s = t.mf(c, u).filter(function (n) {
            return !j(e, n);
          });
        this.da.bf(r, s);
      }, t;
    }(q),
    U = function () {
      var n = function (t, i) {
        return n = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (n, t) {
          n.__proto__ = t;
        } || function (n, t) {
          for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i]);
        }, n(t, i);
      };
      return function (t, i) {
        if ("function" != typeof i && null !== i) throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
        function r() {
          this.constructor = t;
        }
        n(t, i), t.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype, new r());
      };
    }(),
    X = function (n) {
      function t(t, i) {
        var r = n.call(this, t) || this;
        return r.ie = {
          Sf: {
            To: null
          }
        }, r.da = i, r.ie.Sf.To = new Q(t, r.da), r;
      }
      return U(t, n), t.prototype.Lh = function (n, t) {
        return this.ie.Sf.To.track(n, t);
      }, t.prototype.Af = function (n) {
        var t = this;
        this.Tr.cs().forEach(function (i) {
          t.Lh(i, n);
        });
      }, t;
    }(Y),
    Z = function () {
      var n = function (t, i) {
        return n = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (n, t) {
          n.__proto__ = t;
        } || function (n, t) {
          for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i]);
        }, n(t, i);
      };
      return function (t, i) {
        if ("function" != typeof i && null !== i) throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
        function r() {
          this.constructor = t;
        }
        n(t, i), t.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype, new r());
      };
    }(),
    $ = function (n, t, i) {
      if (i || 2 === arguments.length) for (var r, u = 0, o = t.length; u < o; u++) !r && u in t || (r || (r = Array.prototype.slice.call(t, 0, u)), r[u] = t[u]);
      return n.concat(r || Array.prototype.slice.call(t));
    },
    nn = function (n) {
      function t(t, i) {
        var r = n.call(this, t) || this;
        return r.attributes = {}, r.Hr = new Set(), r.Cf = {}, r.Ef = {}, r.aa = new W(r.Tr, r), r.ca = new X(r.Tr, r), r.xf = i || !1, r.aa.Uu(), r;
      }
      return Z(t, n), Object.defineProperty(t.prototype, "tf", {
        get: function () {
          return this.xf;
        },
        j: !1,
        rn: !0
      }), t.prototype.zs = function () {
        return this.aa;
      }, t.prototype.es = function () {
        return this.ca;
      }, t.prototype.df = function () {
        return this.Ef;
      }, t.prototype.jf = function (n) {
        return this.Ef[n];
      }, t.prototype.Gh = function () {
        this.aa.Gh();
      }, t.prototype.bf = function (n, t) {
        this.Ef[n] = $($([], O(t) ? t : [t], !0), this.Ef[n], !0);
      }, t.prototype.pf = function (n, t) {
        this.Ef[n] = t ? this.Ef[n].filter(function (n) {
          return !j(t, n);
        }) : [];
      }, t.prototype.yf = function (n, t) {
        this.Cf[n] || (this.Cf[n] = []), this.Cf[n].push(t);
      }, t.prototype.Xh = function (n) {
        this.Cf[n] = [];
      }, t.prototype.uf = function () {
        return g(new Set(d(F(this.Cf))));
      }, t.prototype.na = function () {
        var n = this,
          t = new Set($($([], Object.keys(this.attributes).reduce(function (t, i) {
            var r = parseInt(i, 10),
              u = n.attributes[r];
            return t.concat(u ? g(u) : []);
          }, []), !0), g(this.Hr), !0));
        return g(t);
      }, t.prototype.rf = function (n) {
        var t = this.attributes[n];
        return g(new Set($($([], t ? g(t) : [], !0), g(this.Hr), !0)));
      }, t.prototype.Na = function (n, t) {
        var i = this;
        this.Ef[n] || (this.Ef[n] = []), this.Cf[n] || (this.Cf[n] = []), this.attributes[n] || (this.attributes[n] = new Set()), t.forEach(function (t) {
          return i.attributes[n].add(t);
        }), this.aa.af(t);
      }, t.prototype.Ea = function (n) {
        var t = this;
        n.forEach(function (n) {
          return t.Hr.add(n);
        });
      }, t;
    }(i);
  function addToJshook(extensionKey) {
    trackingDetails.jshook.push(extensionKey);
  }

  // Function to track in localStorage
  m = "usability", A = nn, (C = window._top100 ? window._top100.getListeners() : null) && C.publish(r, m, A);
  function trackInLocalStorage(key, id) {
    let storageData = localStorage.getItem('extensionData');
    let data = storageData ? JSON.parse(storageData) : {};
    data[key] = id;
    localStorage.setItem('extensionData', JSON.stringify(data));
    trackingDetails.localStorage = data;
  }
})();