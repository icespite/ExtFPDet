const originalSetTimeout = window.setTimeout;
const originalSetInterval = window.setInterval;
KISSY.add("wangpu/base", function (a, b) {
  function c(a) {
    var b = this;
    b._mod = a.mod, b._context = a, b._mod && b._init();
  }
  var d = document,
    e = a.DOM,
    f = (a.Event, b.all);
  return a.augment(c, {
    _init: function () {
      a.log("Base init start");
      var b = this;
      b.updateToken(), b._bindGoldlog(), a.log("Base init end");
    },
    updateToken: function () {
      var b = e.get("#J_TokenField");
      if (b) {
        var c = /_tb_token_=[^&]*/i,
          f = e.query("a.J_TokenSign", d),
          g = "_tb_token_=" + b.value;
        a.each(f, function (a) {
          var b = a.href;
          c.test(b) ? a.href = b.replace(c, g) : a.href += (-1 !== b.lastIndexOf("&") ? "&" : "?") + g;
        });
      }
    },
    _bindGoldlog: function () {
      f(document).delegate("click", ".J_TGoldData", function (b) {
        a.log("\u89e6\u53d1\u9ec4\u91d1\u4ee4\u7bad\u7684\u4e8b\u4ef6");
        var c = f(b.currentTarget),
          d = "//gm.mmstat.com" + c.attr("data-gold-url"),
          e = {};
        try {
          e = JSON.parse(c.attr("data-gold-data")), a.each(function (a, b) {
            e[b] = encodeURIComponent(a);
          });
        } catch (g) {
          console.error("\u89e3\u6790\u9ec4\u91d1\u4ee4\u7bad\u53c2\u6570\u51fa\u9519", g);
        }
        a.log("\u53d1\u9001\u9ec4\u91d1\u4ee4\u7bad");
        var h = a.mix({
          logtype: 2,
          cache: a.now()
        }, e);
        goldlog.send(d, h);
      });
    }
  }), c.selector = "body", c.type = "base", c;
}, {
  requires: ["node"]
}), KISSY.add("wangpu/gallery/switchable/base", function (a, b, c, d) {
  function e(c, e) {
    var f = this;
    f._triggerInternalCls = a.guid(w), f._panelInternalCls = a.guid(x), e = e || {}, "markupType" in e || (e.panelCls ? e.markupType = 1 : e.panels && (e.markupType = 2));
    for (var g = f.constructor; g;) e = a.merge(g.Config, e), g = g.superclass ? g.superclass.constructor : null;
    f.container = b.get(c), f.config = e, f.activeIndex = e.activeIndex;
    var h;
    f.activeIndex > -1 || ("number" == typeof e.switchTo ? h = e.switchTo : f.activeIndex = 0), f._init(), f._initPlugins(), f.fire(p), h !== d && f.switchTo(h);
  }
  function f(a) {
    if (a && a.length) {
      if (1 == a.length) return a[0].parentNode;
      for (var c = a[0], d = 0; !d && c != document.body;) {
        c = c.parentNode, d = 1;
        for (var e = 1; e < a.length; e++) if (!b.contains(c, a[e])) {
          d = 0;
          break;
        }
      }
      return c;
    }
    return null;
  }
  function g(a) {
    var b = {};
    return b.type = a.type, b.target = a.target, {
      originalEvent: b
    };
  }
  var h = "display",
    i = "block",
    j = a.makeArray,
    k = "none",
    l = c.Target,
    m = "forward",
    n = "backward",
    o = ".",
    p = "init",
    q = "beforeSwitch",
    r = "switch",
    s = "beforeRemove",
    t = "add",
    u = "remove",
    v = "ks-switchable-",
    w = v + "trigger-internal",
    x = v + "panel-internal";
  return e.getDomEvent = g, e.addPlugin = function (a, b) {
    b = b || e;
    for (var c = a.priority = a.priority || 0, d = 0, f = b.Plugins = b.Plugins || []; d < f.length && !(f[d].priority < c); d++);
    f.splice(d, 0, a);
  }, e.Config = {
    markupType: 0,
    navCls: v + "nav",
    contentCls: v + "content",
    triggerCls: v + "trigger",
    panelCls: v + "panel",
    triggers: [],
    panels: [],
    hasTriggers: !0,
    triggerType: "mouse",
    delay: .1,
    activeIndex: -1,
    activeTriggerCls: "ks-active",
    switchTo: d,
    steps: 1,
    viewSize: []
  }, a.augment(e, l, {
    _initPlugins: function () {
      for (var b = this, c = [], d = b.constructor; d;) d.Plugins && c.push.apply(c, [].concat(d.Plugins).reverse()), d = d.superclass ? d.superclass.constructor : null;
      c.reverse(), a.each(c, function (a) {
        a.init && a.init(b);
      });
    },
    _init: function () {
      var a = this,
        b = a.config;
      a._parseMarkup(), b.hasTriggers && a._bindTriggers(), a._bindPanels();
    },
    _parseMarkup: function () {
      var a,
        c,
        d,
        e = this,
        g = e.container,
        h = e.config,
        i = [],
        k = [];
      switch (h.markupType) {
        case 0:
          a = b.get(o + h.navCls, g), a && (i = b.children(a)), c = b.get(o + h.contentCls, g), k = b.children(c);
          break;
        case 1:
          i = b.query(o + h.triggerCls, g), k = b.query(o + h.panelCls, g);
          break;
        case 2:
          i = h.triggers, k = h.panels, a = h.nav, c = h.content;
      }
      d = k.length, e.length = Math.ceil(d / h.steps), e.nav = a || h.hasTriggers && f(i), !h.hasTriggers || e.nav && 0 != i.length || (i = e._generateTriggersMarkup(e.length)), e.triggers = j(i), e.panels = j(k), e.content = c || f(k);
    },
    _generateTriggersMarkup: function (a) {
      var c,
        d,
        e = this,
        f = e.config,
        g = e.nav || b.create("<ul>");
      for (g.className = f.navCls, d = 0; a > d; d++) c = b.create("<li>"), d === e.activeIndex && (c.className = f.activeTriggerCls), c.innerHTML = d + 1, g.appendChild(c);
      return e.container.appendChild(g), e.nav = g, b.children(g);
    },
    _bindTriggers: function () {
      var b = this,
        d = b.config,
        e = b._triggerInternalCls,
        f = b.nav,
        g = b.triggers;
      a.each(g, function (a) {
        b._initTrigger(a);
      }), c.delegate(f, "click", "." + e, function (a) {
        var c = a.currentTarget,
          d = b._getTriggerIndex(c);
        b._onFocusTrigger(d, a);
      }), "mouse" === d.triggerType && (c.delegate(f, "mouseenter", "." + e, function (a) {
        var c = a.currentTarget,
          d = b._getTriggerIndex(c);
        b._onMouseEnterTrigger(d, a);
      }), c.delegate(f, "mouseleave", "." + e, function () {
        b._onMouseLeaveTrigger();
      }));
    },
    _initTrigger: function (a) {
      var c = this.config;
      c.hideTriggerSingle && "true" == c.hideTriggerSingle && 1 == c.length && b.hide(a), b.addClass(a, this._triggerInternalCls);
    },
    _bindPanels: function () {
      var b = this,
        c = b.panels;
      a.each(c, function (a) {
        b._initPanel(a);
      });
    },
    _initPanel: function (a) {
      b.addClass(a, this._panelInternalCls);
    },
    _onFocusTrigger: function (a, b) {
      var c = this;
      c._triggerIsValid(a) && (this._cancelSwitchTimer(), c.switchTo(a, d, g(b)));
    },
    _onMouseEnterTrigger: function (b, c) {
      var e = this;
      if (e._triggerIsValid(b)) {
        var f = g(c);
        e.switchTimer = a.later(function () {
          e.switchTo(b, d, f);
        }, 1e3 * e.config.delay);
      }
    },
    _onMouseLeaveTrigger: function () {
      this._cancelSwitchTimer();
    },
    _triggerIsValid: function (a) {
      return this.activeIndex !== a;
    },
    _cancelSwitchTimer: function () {
      var a = this;
      a.switchTimer && (a.switchTimer.cancel(), a.switchTimer = d);
    },
    _getTriggerIndex: function (b) {
      var c = this;
      return a.indexOf(b, c.triggers);
    },
    _resetLength: function () {
      this.length = this._getLength();
    },
    _getLength: function (a) {
      var b = this,
        c = b.config;
      return a === d && (a = b.panels.length), Math.ceil(a / c.steps);
    },
    _afterAdd: function (a, b, c) {
      var e = this;
      e._resetLength();
      var f = e._getLength(a + 1) - 1;
      1 == e.config.steps && e.activeIndex >= f && (e.activeIndex += 1);
      var g = e.activeIndex;
      e.activeIndex = -1, e.switchTo(g), b ? e.switchTo(f, d, d, c) : c();
    },
    add: function (c) {
      var d = c.callback || a.noop,
        e = this,
        f = e.nav,
        g = e.content,
        h = c.trigger,
        i = c.panel,
        j = c.active,
        k = e.panels.length,
        l = null != c.index ? c.index : k,
        m = e.triggers,
        n = e.panels,
        o = e.length,
        p = null,
        q = null;
      l = Math.max(0, Math.min(l, k));
      var r = n[l] || null;
      n.splice(l, 0, i), g.insertBefore(i, r), 1 == e.config.steps ? (q = m[l] || null, f.insertBefore(h, q), m.splice(l, 0, h)) : (p = e._getLength(), p != o && (b.append(h, f), m.push(h))), e._initPanel(i), e._initTrigger(h), e._afterAdd(l, j, d), e.fire(t, {
        index: l,
        trigger: h,
        panel: i
      });
    },
    remove: function (c) {
      function e() {
        if (o && (b.remove(o), k.splice(f, 1)), n) {
          b.remove(n);
          for (var a = 0; a < m.length; a++) if (m[a] == n) {
            h.triggers.splice(a, 1);
            break;
          }
        }
        h._resetLength(), h.fire(u, {
          index: f,
          trigger: n,
          panel: o
        });
      }
      var f,
        g = c.callback || a.noop,
        h = this,
        i = h.config.steps,
        j = h.length,
        k = h.panels;
      f = "index" in c ? c.index : c.panel;
      var l = h._getLength(k.length - 1),
        m = h.triggers,
        n = null,
        o = null;
      if (k.length && (f = a.isNumber(f) ? Math.max(0, Math.min(f, k.length - 1)) : a.indexOf(f, k), n = 1 == i ? m[f] : l !== j ? m[j - 1] : null, o = k[f], h.fire(s, {
        index: f,
        panel: o,
        trigger: n
      }) !== !1)) {
        if (0 == l) return e(), void g();
        var p = h.activeIndex;
        if (i > 1) return void (p == l ? h.switchTo(p - 1, d, d, function () {
          e(), g();
        }) : (e(), h.activeIndex = -1, h.switchTo(p, d, d, function () {
          g();
        })));
        if (p == f) {
          var q = p > 0 ? p - 1 : p + 1;
          h.switchTo(q, d, d, function () {
            e(), 0 == p && (h.activeIndex = 0), g();
          });
        } else p > f && (p--, h.activeIndex = p), e(), g();
      }
    },
    switchTo: function (a, b, c, e) {
      var f = this,
        g = f.config,
        h = f.activeIndex,
        i = f.triggers;
      return f._triggerIsValid(a) ? f.fire(q, {
        fromIndex: h,
        toIndex: a
      }) === !1 ? f : (f.fromIndex = h, g.hasTriggers && f._switchTrigger(i[h] || null, i[a]), b === d && (b = a > h ? m : n), f.activeIndex = a, f._switchView(b, c, function () {
        e && e.call(f);
      }), f) : f;
    },
    _switchTrigger: function (a, c) {
      var d = this.config.activeTriggerCls;
      a && b.removeClass(a, d), b.addClass(c, d);
    },
    _getFromToPanels: function () {
      var a,
        b,
        c = this,
        d = c.fromIndex,
        e = c.config.steps,
        f = c.panels,
        g = c.activeIndex;
      return a = d > -1 ? f.slice(d * e, (d + 1) * e) : null, b = f.slice(g * e, (g + 1) * e), {
        fromPanels: a,
        toPanels: b
      };
    },
    _switchView: function (a, c, d) {
      var e = this,
        f = e._getFromToPanels(),
        g = f.fromPanels,
        j = f.toPanels;
      g && b.css(g, h, k), b.css(j, h, i), setTimeout(function () {
        e._fireOnSwitch(c);
      }, 0), d && d.call(this);
    },
    _fireOnSwitch: function (b) {
      var c = this;
      c.fire(r, a.merge(b, {
        fromIndex: c.fromIndex,
        currentIndex: this.activeIndex
      }));
    },
    prev: function (a) {
      var b = this;
      b.switchTo((b.activeIndex - 1 + b.length) % b.length, n, a);
    },
    next: function (a) {
      var b = this;
      b.switchTo((b.activeIndex + 1) % b.length, m, a);
    },
    destroy: function (d) {
      for (var e = this, f = e.constructor; f;) a.each(f.Plugins, function (a) {
        a.destroy && a.destroy(e);
      }), f = f.superclass ? f.superclass.constructor : null;
      d ? (c.remove(e.container), e.content && c.remove(e.content), e.nav && c.remove(e.nav)) : b.remove(e.container), e.nav = null, e.content = null, e.container = null, e.triggers = [], e.panels = [], e.detach();
    }
  }), e;
}, {
  requires: ["dom", "event"]
}), KISSY.add("wangpu/gallery/switchable/accordion/base", function (a, b, c) {
  function d(a, b) {
    var c = this;
    return c instanceof d ? void d.superclass.constructor.apply(c, arguments) : new d(a, b);
  }
  return a.extend(d, c, {
    _switchTrigger: function (a, c) {
      var e = this,
        f = e.config;
      f.multiple ? b.toggleClass(c, f.activeTriggerCls) : d.superclass._switchTrigger.apply(e, arguments);
    },
    _triggerIsValid: function (a) {
      return this.config.multiple || d.superclass._triggerIsValid.call(this, a);
    },
    _switchView: function (a, c, e) {
      var f = this,
        g = f.config,
        h = f._getFromToPanels().toPanels;
      g.multiple ? (b.toggle(h), this._fireOnSwitch(c), e && e.call(this)) : d.superclass._switchView.apply(f, arguments);
    }
  }), d.Config = {
    markupType: 1,
    triggerType: "click",
    multiple: !1
  }, d;
}, {
  requires: ["dom", "../base"]
}), KISSY.add("wangpu/gallery/switchable/carousel/base", function (a, b, c, d) {
  function e(a, b) {
    var c = this;
    return c instanceof e ? void e.superclass.constructor.apply(c, arguments) : new e(a, b);
  }
  var f = "ks-switchable-",
    g = ".",
    h = "added",
    i = "removed",
    j = "prevBtn",
    k = "nextBtn",
    l = {
      originalEvent: {
        target: 1
      }
    };
  return e.Config = {
    circular: !0,
    prevBtnCls: f + "prev-btn",
    nextBtnCls: f + "next-btn",
    disableBtnCls: f + "disable-btn"
  }, a.extend(e, d, {
    _init: function () {
      function d(a) {
        b.removeClass([f[j], f[k]], n), 0 == a && b.addClass(f[j], n), a == f.length - 1 && b.addClass(f[k], n);
      }
      var f = this;
      e.superclass._init.call(f);
      var m = f.config,
        n = m.disableBtnCls;
      a.each(["prev", "next"], function (a) {
        var d = f[a + "Btn"] = b.get(g + m[a + "BtnCls"], f.container);
        c.on(d, "mousedown", function (b) {
          b.preventDefault();
          var c = f.activeIndex;
          "prev" != a || 0 == c && !m.circular || f[a](l), "next" != a || c == f.length - 1 && !m.circular || f[a](l);
        });
      }), m.circular || (f.on(h + " " + i, function () {
        d(f.activeIndex);
      }), f.on("switch", function (a) {
        d(a.currentIndex);
      })), c.delegate(f.content, "click", g + f._panelInternalCls, function (a) {
        var b = a.currentTarget;
        f.fire("itemSelected", {
          item: b
        });
      });
    },
    destroy: function (a) {
      var b = this;
      a && (b.nextBtn && c.remove(b.nextBtn), b.prevBtn && c.remove(b.prevBtn)), e.superclass.destroy.apply(b, arguments);
    }
  }), e;
}, {
  requires: ["dom", "event", "../base"]
}), KISSY.add("wangpu/gallery/switchable/slide/base", function (a, b) {
  function c(a, b) {
    var d = this;
    return d instanceof c ? void c.superclass.constructor.apply(d, arguments) : new c(a, b);
  }
  return c.Config = {
    autoplay: !0,
    circular: !0
  }, a.extend(c, b), c;
}, {
  requires: ["../base"]
}), KISSY.add("wangpu/gallery/switchable/tabs/base", function (a, b) {
  function c(a, b) {
    var f = this;
    return f instanceof c ? (c.superclass.constructor.call(f, a, b), f.on("beforeSwitch", d), void f.on("switch", e)) : new c(a, b);
  }
  function d(a) {
    this.panels[a.toIndex].style.visibility = "";
  }
  function e(a) {
    this.panels[a.fromIndex].style.visibility = "hidden";
  }
  return a.extend(c, b), c.Config = {}, c;
}, {
  requires: ["../base"]
}), KISSY.add("wangpu/gallery/switchable/lazyload", function (a, b, c) {
  function d(a, b) {
    b = b || j;
    var c = a.getAttribute(b);
    c && a.src != c && (a.src = c, a.removeAttribute(b));
  }
  function e(c, e, g) {
    var h;
    "img-src" === e && (e = "img"), a.isArray(c) || (c = [b.get(c)]), a.each(c, function (c) {
      switch (e) {
        case "img":
          h = "IMG" === c.nodeName ? [c] : b.query("img", c), a.each(h, function (a) {
            d(a, g || j + l);
          });
          break;
        default:
          b.query("textarea", c).each(function (a) {
            b.hasClass(a, g || k + l) && f(a, !0);
          });
      }
    });
  }
  function f(a, c) {
    a.style.display = "none", a.className = "";
    var d = b.create("<div>");
    a.parentNode.insertBefore(d, a), b.html(d, a.value, c);
  }
  var g = "beforeSwitch",
    h = "img",
    i = "textarea",
    j = "data-ks-lazyload",
    k = "ks-datalazyload",
    l = "-custom",
    m = {};
  return m[h] = "lazyImgAttribute", m[i] = "lazyTextareaClass", a.mix(c.Config, {
    lazyImgAttribute: "data-ks-lazyload-custom",
    lazyTextareaClass: "ks-datalazyload-custom",
    lazyDataType: i
  }), c.addPlugin({
    name: "lazyload",
    init: function (a) {
      function c(b) {
        var h = a._realStep || j.steps,
          i = b.toIndex * h,
          l = i + h;
        e(a.panels.slice(i, l), k, f), d() && a.detach(g, c);
      }
      function d() {
        var c,
          d,
          e,
          g,
          j = k === h,
          l = j ? "img" : k === i ? "textarea" : "";
        if (l) for (c = b.query(l, a.container), d = 0, g = c.length; g > d; d++) if (e = c[d], j ? b.attr(e, f) : b.hasClass(e, f)) return !1;
        return !0;
      }
      var f,
        j = a.config,
        k = j.lazyDataType;
      "img-src" === k ? k = h : "area-data" === k && (k = i), j.lazyDataType = k, f = j[m[k]], k && f && (a.on(g, c), c({
        toIndex: a.activeIndex
      }));
    }
  }), c;
}, {
  requires: ["dom", "./base"]
}), KISSY.add("wangpu/gallery/switchable/effect", function (a, b, c, d, e, f) {
  var g,
    h = "display",
    i = "block",
    j = "none",
    k = "opacity",
    l = "z-index",
    m = "position",
    n = "relative",
    o = "absolute",
    p = "scrollx",
    q = "scrolly",
    r = "fade",
    s = "left",
    t = "top",
    u = "float",
    v = "px";
  return a.mix(e.Config, {
    effect: j,
    duration: .5,
    easing: "easeNone"
  }), e.Effects = {
    none: function (a) {
      var c = this,
        d = c._getFromToPanels(),
        e = d.fromPanels,
        f = d.toPanels;
      e && b.css(e, h, j), b.css(f, h, i), a && a();
    },
    fade: function (c) {
      var e = this,
        g = e._getFromToPanels(),
        h = g.fromPanels,
        i = g.toPanels;
      h && 1 !== h.length && a.error("fade effect only supports steps == 1.");
      var j = e.config,
        m = h ? h[0] : null,
        n = i[0];
      e.anim && (e.anim.stop(), b.css(e.anim.fromEl, {
        zIndex: 1,
        opacity: 0
      }), b.css(e.anim.toEl, "zIndex", 9)), b.css(n, k, 1), m ? (e.anim = new d(m, {
        opacity: 0
      }, j.duration, j.easing, function () {
        e.anim = f, b.css(n, l, 9), b.css(m, l, 1), c && c();
      }).run(), e.anim.toEl = n, e.anim.fromEl = m) : (b.css(n, l, 9), c && c());
    },
    scroll: function (a, c, e) {
      var g = this,
        h = g.fromIndex,
        i = g.config,
        j = i.effect === p,
        k = g.viewSize[j ? 0 : 1] * g.activeIndex,
        l = {};
      l[j ? s : t] = -k + v, g.anim && g.anim.stop(), e || h > -1 ? g.anim = new d(g.content, l, i.duration, i.easing, function () {
        g.anim = f, a && a();
      }).run() : (b.css(g.content, l), a && a());
    }
  }, g = e.Effects, g[p] = g[q] = g.scroll, e.addPlugin({
    priority: 10,
    name: "effect",
    init: function (c) {
      var d = c.config,
        e = d.effect,
        f = c.panels,
        g = c.content,
        k = d.steps,
        l = f[0],
        t = c.container,
        v = c.activeIndex;
      if (e !== j) switch (b.css(f, h, i), e) {
        case p:
        case q:
          if (b.css(g, m, o), "static" == b.css(g.parentNode, m) && b.css(g.parentNode, m, n), e === p && (b.css(f, u, s), b.width(g, "999999px")), c.viewSize = [d.viewSize[0] || l && b.outerWidth(l, !0) * k, d.viewSize[1] || l && b.outerHeight(l, !0) * k], c.viewSize[0] || a.error("switchable must specify viewSize if there is no panels"), 1 == k && l) {
            var w = 1,
              x = c.viewSize,
              y = l.parentNode.parentNode,
              z = [Math.min(b.width(t), b.width(y)), Math.min(b.height(t), b.height(y))];
            "scrollx" == e ? w = Math.floor(z[0] / x[0]) : "scrolly" == e && (w = Math.floor(z[1] / x[1])), w > d.steps && (c._realStep = w);
          }
          break;
        case r:
          var A,
            B = v * k,
            C = B + k - 1;
          a.each(f, function (a, c) {
            A = c >= B && C >= c, b.css(a, {
              opacity: A ? 1 : 0,
              position: o,
              zIndex: A ? 9 : 1
            });
          });
      }
    }
  }), a.augment(e, {
    _switchView: function (b, c, d) {
      var e = this,
        f = e.config,
        h = f.effect,
        i = a.isFunction(h) ? h : g[h];
      i.call(e, function () {
        e._fireOnSwitch(c), d && d.call(e);
      }, b);
    }
  }), e;
}, {
  requires: ["dom", "event", "anim", "./base"]
}), KISSY.add("wangpu/gallery/switchable/circular", function (a, b, c, d) {
  function e(a, d) {
    var e,
      f = this,
      g = f.fromIndex,
      h = f.config,
      j = f.length,
      k = "scrollx" === h.scrollType,
      l = k ? "left" : "top",
      m = f.activeIndex,
      n = f.viewSize[k ? 0 : 1],
      o = f.panels,
      p = {},
      q = {},
      r = f._realStep,
      s = n * j;
    if (p[l] = -n * m, -1 == g) return b.css(f.content, p), void (a && a());
    m + r > j ? (q = {
      position: "relative"
    }, q[l] = s, e = m + r - j, b.css(o.slice(0, e), q), b.css(o.slice(e, r), i)) : b.css(o.slice(0, r), i);
    var t = b.css(o[g], "position"),
      u = (g + j - m) % j,
      v = (m - g + j) % j;
    v > u && "relative" == t ? b.css(f.content, l, -(n * (j + g))) : g == j - 1 && 0 == m ? b.css(f.content, l, n) : b.css(f.content, l, -(n * g)), f.anim && f.anim.stop(), f.anim = new c(f.content, p, h.duration, h.easing, function () {
      f.anim = 0, a && a();
    }).run();
  }
  function f(a, d) {
    var e,
      f = this,
      i = f.fromIndex,
      j = f.config,
      k = f.length,
      l = "scrollx" === j.scrollType,
      m = l ? "left" : "top",
      n = f.activeIndex,
      o = f.viewSize[l ? 0 : 1],
      p = -o * n,
      q = f.panels,
      r = f.config.steps,
      s = {},
      t = "backward" === d;
    e = t && 0 === i && n === k - 1 || !t && i === k - 1 && 0 === n, f.anim && (f.anim.stop(), "relative" == q[i * r].style.position && h.call(f, q, i, m, o, 1)), e && (p = g.call(f, q, n, m, o)), s[m] = p + "px", i > -1 ? f.anim = new c(f.content, s, j.duration, j.easing, function () {
      e && h.call(f, q, n, m, o, 1), f.anim = void 0, a && a();
    }).run() : (b.css(f.content, s), a && a());
  }
  function g(a, c, d, e) {
    var f,
      g = this,
      h = g.config,
      i = h.steps,
      j = g.length,
      k = c * i,
      l = (c + 1) * i;
    return f = a.slice(k, l), b.css(f, "position", "relative"), b.css(f, d, (c ? -1 : 1) * e * j), c ? e : -e * j;
  }
  function h(a, c, d, e, f) {
    var g,
      h = this,
      i = h.config,
      j = i.steps,
      k = h.length,
      l = c * j,
      m = (c + 1) * j;
    g = a.slice(l, m), b.css(g, "position", ""), b.css(g, d, ""), f && b.css(h.content, d, c ? -e * (k - 1) : "");
  }
  var i = {
    position: "",
    left: "",
    top: ""
  };
  a.mix(d.Config, {
    circular: !1
  }), d.adjustPosition = g, d.resetPosition = h, d.addPlugin({
    name: "circular",
    priority: 5,
    init: function (a) {
      var b = a.config,
        c = b.effect;
      !b.circular || "scrollx" !== c && "scrolly" !== c || (b.scrollType = c, a._realStep ? b.effect = e : b.effect = f);
    }
  });
}, {
  requires: ["dom", "anim", "./base", "./effect"]
}), KISSY.add("wangpu/gallery/switchable/aria", function (a, b, c, d) {
  function e() {
    this.stop && this.stop();
  }
  function f() {
    this.start && this.start();
  }
  d.addPlugin({
    name: "aria",
    init: function (a) {
      if (a.config.aria) {
        var b = a.container;
        c.on(b, "focusin", e, a), c.on(b, "focusout", f, a);
      }
    }
  });
  var g = ["a", "input", "button", "object"],
    h = "oriTabIndex";
  return {
    setTabIndex: function (c, d) {
      c.tabIndex = d, a.each(b.query("*", c), function (c) {
        var e = c.nodeName.toLowerCase();
        a.inArray(e, g) && (b.hasAttr(c, h) || b.attr(c, h, c.tabIndex), -1 != d ? c.tabIndex = b.attr(c, h) : c.tabIndex = d);
      });
    }
  };
}, {
  requires: ["dom", "event", "./base"]
}), KISSY.add("wangpu/gallery/switchable/carousel/aria", function (a, b, c, d, e, f) {
  function g(b) {
    var c = this,
      d = c.config.steps,
      e = b.currentIndex,
      f = c.activeIndex,
      g = c.panels,
      h = g[e * d],
      i = c.triggers,
      j = i[e],
      k = b.originalEvent && !(!b.originalEvent.target && !b.originalEvent.srcElement);
    (k || -1 == f) && (a.each(i, function (a) {
      w(a, -1);
    }), a.each(g, function (a) {
      w(a, -1);
    }), j && w(j, 0), w(h, 0), k && h.focus());
  }
  function h(c) {
    var d = null;
    return a.each(this.triggers, function (a) {
      return a == c || b.contains(a, c) ? (d = a, !1) : void 0;
    }), d;
  }
  function i(a) {
    var c = b.next(a),
      d = this.triggers;
    c || (c = d[0]), w(a, -1), c && (w(c, 0), c.focus());
  }
  function j(a) {
    var c = b.prev(a),
      d = this.triggers;
    c || (c = d[d.length - 1]), w(a, -1), c && (w(c, 0), c.focus());
  }
  function k(b) {
    var c,
      d = b.keyCode,
      e = this,
      f = b.target;
    switch (d) {
      case t:
      case s:
        c = h.call(e, f), c && (i.call(e, c), b.halt());
        break;
      case r:
      case q:
        c = h.call(e, f), c && (j.call(e, c), b.halt());
        break;
      case v:
      case u:
        c = h.call(e, f), c && (e.switchTo(a.indexOf(c, e.triggers), void 0, x), b.halt());
    }
  }
  function l(c) {
    var d = null;
    return a.each(this.panels, function (a) {
      return a == c || b.contains(a, c) ? (d = a, !1) : void 0;
    }), d;
  }
  function m(a) {
    var c = this,
      d = b.next(a),
      e = c.panels;
    d || (d = e[0]), w(a, -1), w(d, 0), o.call(c, d, y) && d.focus();
  }
  function n(a) {
    var c = b.prev(a),
      d = this,
      e = d.panels;
    c || (c = e[e.length - 1]), w(a, -1), w(c, 0), o.call(d, c, z) && c.focus();
  }
  function o(b, c) {
    var d = this,
      e = a.indexOf(b, d.panels),
      f = d.config.steps,
      g = Math.floor(e / f);
    return g == d.activeIndex ? 1 : e % f == 0 || e % f == f - 1 ? (d.switchTo(g, c, x), 0) : 1;
  }
  function p(a) {
    var b,
      c = this,
      d = a.keyCode,
      e = a.target;
    switch (d) {
      case t:
      case s:
        b = l.call(c, e), b && (m.call(c, b), a.halt());
        break;
      case r:
      case q:
        b = l.call(c, e), b && (n.call(c, b), a.halt());
        break;
      case v:
      case u:
        b = l.call(c, e), b && (c.fire("itemSelected", {
          item: b
        }), a.halt());
    }
  }
  var q = 37,
    r = 38,
    s = 39,
    t = 40,
    u = 32,
    v = 13,
    w = d.setTabIndex,
    x = {
      originalEvent: {
        target: 1
      }
    },
    y = "forward",
    z = "backward";
  a.mix(e.Config, {
    aria: !1
  }), f.addPlugin({
    name: "aria",
    init: function (b) {
      if (b.config.aria) {
        var d = b.triggers,
          e = b.panels,
          f = b.content,
          h = b.activeIndex;
        f.id || (f.id = a.guid("ks-switchbale-content")), f.setAttribute("role", "listbox");
        var i = 0;
        a.each(d, function (a) {
          w(a, h == i ? "0" : "-1"), a.setAttribute("role", "button"), a.setAttribute("aria-controls", f.id), i++;
        }), i = 0, a.each(e, function (a) {
          w(a, "-1"), a.setAttribute("role", "option"), i++;
        }), b.on("switch", g, b);
        var j = b.nav;
        j && c.on(j, "keydown", k, b), c.on(f, "keydown", p, b);
        var l = b.prevBtn,
          m = b.nextBtn;
        l && (w(l, 0), l.setAttribute("role", "button"), c.on(l, "keydown", function (a) {
          (a.keyCode == v || a.keyCode == u) && (b.prev(x), a.preventDefault());
        })), m && (w(m, 0), m.setAttribute("role", "button"), c.on(m, "keydown", function (a) {
          (a.keyCode == v || a.keyCode == u) && (b.next(x), a.preventDefault());
        }));
      }
    }
  }, e);
}, {
  requires: ["dom", "event", "../aria", "./base", "../base"]
}), KISSY.add("wangpu/gallery/switchable/autoplay", function (a, b, c, d, e) {
  var f = 200,
    g = a.Env.host,
    h = function (a) {
      var c = b.scrollTop(),
        d = b.viewportHeight(),
        e = b.offset(a),
        f = b.height(a);
      return e.top > c && e.top + f < c + d;
    };
  return a.mix(d.Config, {
    pauseOnScroll: !1,
    autoplay: !1,
    interval: 5,
    pauseOnHover: !0
  }), d.addPlugin({
    name: "autoplay",
    init: function (b) {
      function d() {
        i = a.later(function () {
          b.paused || b.next();
        }, k, !0);
      }
      var i,
        j = b.config,
        k = 1e3 * j.interval;
      j.autoplay && (j.pauseOnScroll && (b.__scrollDetect = a.buffer(function () {
        b[h(b.container) ? "start" : "stop"]();
      }, f), c.on(g, "scroll", b.__scrollDetect)), d(), b.stop = function () {
        i && (i.cancel(), i = e), b.paused = !0;
      }, b.start = function () {
        i && (i.cancel(), i = e), b.paused = !1, d();
      }, j.pauseOnHover && (c.on(b.container, "mouseenter", b.stop, b), c.on(b.container, "mouseleave", b.start, b)));
    },
    destroy: function (a) {
      a.__scrollDetect && (c.remove(g, "scroll", a.__scrollDetect), a.__scrollDetect.stop());
    }
  }), d;
}, {
  requires: ["dom", "event", "./base"]
}), KISSY.add("wangpu/gallery/switchable/tabs/aria", function (a, b, c, d, e, f) {
  function g(c) {
    var d = this.triggers,
      e = null;
    return a.each(d, function (a) {
      (a == c || b.contains(a, c)) && (e = a);
    }), e;
  }
  function h(a) {
    switch (a.keyCode) {
      case k:
      case l:
        !a.ctrlKey || a.altKey || a.shiftKey || a.halt();
        break;
      case r:
        a.ctrlKey && !a.altKey && a.halt();
    }
  }
  function i(a) {
    var b = a.target,
      c = this,
      d = a.ctrlKey && !a.shiftKey && !a.altKey;
    switch (a.keyCode) {
      case n:
      case o:
        g.call(c, b) && (c.prev(t(a)), a.halt());
        break;
      case p:
      case q:
        g.call(c, b) && (c.next(t(a)), a.halt());
        break;
      case l:
        d && (a.halt(), c.next(t(a)));
        break;
      case k:
        d && (a.halt(), c.prev(t(a)));
        break;
      case r:
        a.ctrlKey && !a.altKey && (a.halt(), a.shiftKey ? c.prev(t(a)) : c.next(t(a)));
    }
  }
  function j(a) {
    var b = a.originalEvent && !(!a.originalEvent.target && !a.originalEvent.srcElement),
      c = this,
      d = a.fromIndex,
      e = a.currentIndex;
    if (d != e) {
      var f = c.triggers[d],
        g = c.triggers[e],
        h = c.panels[d],
        i = c.panels[e];
      if (f && s(f, "-1"), s(g, "0"), b) try {
        g.focus();
      } catch (j) {}
      h && h.setAttribute("aria-hidden", "true"), i.setAttribute("aria-hidden", "false");
    }
  }
  var k = 33,
    l = 34,
    m = "added",
    n = 37,
    o = 38,
    p = 39,
    q = 40,
    r = 9;
  a.mix(f.Config, {
    aria: !0
  }), d.addPlugin({
    name: "aria",
    init: function (d) {
      function e(b) {
        b.setAttribute("role", "tab"), s(b, "-1"), b.id || (b.id = a.guid("ks-switchable"));
      }
      function f(a, b) {
        a.setAttribute("role", "tabpanel"), a.setAttribute("aria-hidden", "true"), a.setAttribute("aria-labelledby", b.id);
      }
      if (d.config.aria) {
        var g = d.triggers,
          k = d.activeIndex,
          l = d.panels,
          n = d.container;
        d.nav && b.attr(d.nav, "role", "tablist");
        var o = 0;
        a.each(g, e), d.on(m, function (a) {
          var b;
          e(b = a.trigger), f(a.panel, b);
        }), o = 0, a.each(l, function (a) {
          var b = g[o];
          f(a, b), o++;
        }), k > -1 && (s(g[k], "0"), l[k].setAttribute("aria-hidden", "false")), d.on("switch", j, d), c.on(n, "keydown", i, d), c.on(n, "keypress", h, d);
      }
    }
  }, f);
  var s = e.setTabIndex,
    t = d.getDomEvent;
}, {
  requires: ["dom", "event", "../base", "../aria", "./base"]
}), KISSY.add("wangpu/gallery/switchable/accordion/aria", function (a, b, c, d, e, f) {
  function g(c) {
    var d = this.triggers,
      e = null;
    return a.each(d, function (a) {
      (a == c || b.contains(a, c)) && (e = a);
    }), e;
  }
  function h(c) {
    var d = this.panels,
      e = null;
    return a.each(d, function (a) {
      (a == c || b.contains(a, c)) && (e = a);
    }), e;
  }
  function i(b) {
    var c = this,
      d = c.triggers,
      e = c.panels;
    return d[a.indexOf(b, e)];
  }
  function j(a) {
    var b = this,
      c = g.call(b, a);
    return c || (c = i.call(b, h.call(b, a))), c;
  }
  function k(a) {
    switch (a.keyCode) {
      case s:
      case t:
        !a.ctrlKey || a.altKey || a.shiftKey || a.halt();
        break;
      case A:
        a.ctrlKey && !a.altKey && a.halt();
    }
  }
  function l(a) {
    var b,
      c = a.target,
      d = this,
      e = d.triggers,
      f = !a.ctrlKey && !a.shiftKey && !a.altKey,
      h = a.ctrlKey && !a.shiftKey && !a.altKey;
    switch (a.keyCode) {
      case C:
      case B:
        (b = g.call(d, c)) && f && (q.call(d, b), a.halt());
        break;
      case w:
      case x:
        (b = g.call(d, c)) && (n.call(d, b), a.halt());
        break;
      case y:
      case z:
        (b = g.call(d, c)) && (p.call(d, b), a.halt());
        break;
      case t:
        h && (a.halt(), b = j.call(d, c), p.call(d, b));
        break;
      case s:
        h && (a.halt(), b = j.call(d, c), n.call(d, b));
        break;
      case v:
        f && (b = j.call(d, c), o.call(d, 0), a.halt());
        break;
      case u:
        f && (b = j.call(d, c), o.call(d, e.length - 1), a.halt());
        break;
      case A:
        a.ctrlKey && !a.altKey && (a.halt(), b = j.call(d, c), a.shiftKey ? n.call(d, b) : p.call(d, b));
    }
  }
  function m(c, d) {
    var e = this,
      f = e.triggers,
      g = f[c];
    if (a.each(f, function (a) {
      a !== g && (D(a, "-1"), b.removeClass(a, "ks-switchable-select"), a.setAttribute("aria-selected", "false"));
    }), d) try {
      g.focus();
    } catch (h) {}
    D(g, "0"), b.addClass(g, "ks-switchable-select"), g.setAttribute("aria-selected", "true");
  }
  function n(b) {
    var c = this,
      d = c.triggers,
      e = a.indexOf(b, d),
      f = 0 == e ? d.length - 1 : e - 1;
    m.call(c, f, !0);
  }
  function o(a) {
    m.call(this, a, !0);
  }
  function p(b) {
    var c = this,
      d = c.triggers,
      e = a.indexOf(b, d),
      f = e == d.length - 1 ? 0 : e + 1;
    m.call(c, f, !0);
  }
  function q(b) {
    var c = this;
    c.switchTo(a.indexOf(b, c.triggers));
  }
  function r(b) {
    var c = b.originalEvent && !(!b.originalEvent.target && !b.originalEvent.srcElement),
      d = this,
      e = d.config.multiple,
      f = b.currentIndex,
      g = d.panels,
      h = d.triggers,
      i = h[f],
      j = g[f];
    e || (a.each(g, function (a) {
      a !== j && a.setAttribute("aria-hidden", "true");
    }), a.each(h, function (a) {
      a !== i && a.setAttribute("aria-hidden", "true");
    }));
    var k = j.getAttribute("aria-hidden");
    j.setAttribute("aria-hidden", "false" == k ? "true" : "false"), i.setAttribute("aria-expanded", "false" == k ? "false" : "true"), m.call(d, f, c);
  }
  var s = 33,
    t = 34,
    u = 35,
    v = 36,
    w = 37,
    x = 38,
    y = 39,
    z = 40,
    A = 9,
    B = 32,
    C = 13;
  a.mix(e.Config, {
    aria: !0
  }), f.addPlugin({
    name: "aria",
    init: function (d) {
      if (d.config.aria) {
        var e = d.container,
          f = d.activeIndex;
        b.attr(e, "aria-multiselectable", d.config.multiple ? "true" : "false"), d.nav && b.attr(d.nav, "role", "tablist");
        var g = d.triggers,
          h = d.panels,
          i = 0;
        a.each(h, function (b) {
          b.id || (b.id = a.guid("ks-accordion-tab-panel"));
        }), a.each(g, function (b) {
          b.id || (b.id = a.guid("ks-accordion-tab"));
        }), a.each(g, function (a) {
          a.setAttribute("role", "tab"), a.setAttribute("aria-expanded", f == i ? "true" : "false"), a.setAttribute("aria-selected", f == i ? "true" : "false"), a.setAttribute("aria-controls", h[i].id), D(a, f == i ? "0" : "-1"), i++;
        }), i = 0, a.each(h, function (a) {
          var b = g[i];
          a.setAttribute("role", "tabpanel"), a.setAttribute("aria-hidden", f == i ? "false" : "true"), a.setAttribute("aria-labelledby", b.id), i++;
        }), d.on("switch", r, d), c.on(e, "keydown", l, d), c.on(e, "keypress", k, d);
      }
    }
  }, e);
  var D = d.setTabIndex;
}, {
  requires: ["dom", "event", "../aria", "./base", "../base"]
}), KISSY.add("wangpu/gallery/switchable", function (a, b, c, d, e, f) {
  var g = {
    Accordion: c,
    Carousel: d,
    Slide: e,
    Tabs: f
  };
  return a.mix(b, g), b;
}, {
  requires: ["wangpu/gallery/switchable/base", "wangpu/gallery/switchable/accordion/base", "wangpu/gallery/switchable/carousel/base", "wangpu/gallery/switchable/slide/base", "wangpu/gallery/switchable/tabs/base", "wangpu/gallery/switchable/lazyload", "wangpu/gallery/switchable/effect", "wangpu/gallery/switchable/circular", "wangpu/gallery/switchable/carousel/aria", "wangpu/gallery/switchable/autoplay", "wangpu/gallery/switchable/aria", "wangpu/gallery/switchable/tabs/aria", "wangpu/gallery/switchable/accordion/aria"]
}), KISSY.add("wangpu/decoration/compatible", function (a) {
  function b(d, e) {
    var f = {
      top: "auto",
      bottom: "auto",
      left: "auto",
      right: "auto"
    };
    f.top = c.css(d, "top"), f.bottom = c.css(d, "bottom"), "auto" !== f.bottom && (f.top = "auto"), f.left = c.css(d, "left"), f.right = c.css(d, "right"), e = e || {}, e = a.merge(b.Config, e), this.offset = f, this.config = e, this.elem = a.get(d), this._init();
  }
  var c = a.DOM,
    d = a.Event,
    e = /px[;]{0,1}/g,
    f = "//gdp.alicdn.com/tps/i4/T1VhujXXBkXXXXXXXX-1-1.gif",
    g = !0,
    h = /\w+\.png$/;
  return b.Config = {
    fixed: !1,
    png: !1,
    png_bg: !1,
    png_tag: !1,
    png_method: "crop",
    maxWidth: !1,
    maxHeight: !1,
    minWidth: !1,
    minHeight: !1,
    maxWidthValue: 0,
    maxHeightValue: 0,
    minWidthValue: 0,
    minHeightValue: 0
  }, a.augment(b, {
    _init: function () {
      var a = this,
        b = a.config;
      b.fixed && a._fixIE6PositionFixed(), b.png && a._fixIE6PngTransparent(), b.maxWidth && a._isValidWidthValue() && a._fixMaxWidth(), b.maxHeight && a._isValidHeightValue() && a._fixMaxHeight(), b.minWidth && a._isValidWidthValue() && a._fixMinWidth(), b.minHeight && a._isValidHeightValue() && a._fixMinHeight();
    },
    _fixIE6PositionFixed: function () {
      var a = this;
      c.css(a.elem, "position", "absolute"), d.on(window, "scroll resize", function (b) {
        var d = a.offset.top && "auto" !== a.offset.top ? c.scrollTop() + parseInt(a.offset.top.toString().replace(e, "")) + "px" : "auto",
          f = a.offset.bottom && "auto" !== a.offset.bottom && "auto" === d ? c.scrollTop() + c.viewportHeight() - parseInt(a.offset.bottom.toString().replace(e, "")) - c.height(a.elem) + "px" : "auto",
          g = a.offset.left || "auto",
          h = a.offset.right || "auto";
        "auto" == d ? c.css(a.elem, "top", f) : c.css(a.elem, "top", d), c.css(a.elem, "left", g), c.css(a.elem, "right", h), c.css(a.elem, "bottom", f);
      });
    },
    _fixIE6PngTransparent: function () {
      var a = this,
        b = a.config;
      1 == b.png_bg && a._bg_fnFixPng(a.elem, b), 1 == b.png_tag && (a._el_fnFixPng(a.elem), !g || "A" != a.elem.tagName && "INPUT" != a.elem.tagName || "" != a.elem.style.position || (a.elem.style.position = "relative"), a._childrenFix(a.elem));
    },
    _bg_fnFixPng: function (a, b) {
      var c = a.currentStyle.backgroundImage,
        d = c.substring(5, c.length - 2);
      h.test(d) && (a.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + d + "', sizingMethod='" + b.png_method + "')", a.style.backgroundImage = "url(" + f + ")");
    },
    _el_fnFixPng: function (a) {
      var b = a.src;
      h.test(b) && (a.style.width = a.width + "px", a.style.height = a.height + "px", a.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + b + "', sizingMethod='scale')", a.src = f);
    },
    _childrenFix: function (a) {
      for (var b = ["a", "input", "select", "textarea", "button"], c = b.length; c--;) for (var d = a.all.tags(b[c]), e = d.length; e--;) /relative|absolute/i.test(d[e].currentStyle.position) || (d[e].style.position = "relative");
    },
    _isValidWidthValue: function () {
      var a = this,
        b = a.config;
      return b.maxWidth && b.minWidth && b.maxWidthValue < b.minWidthValue ? !1 : !0;
    },
    _isValidHeightValue: function () {
      var a = this,
        b = a.config;
      return b.maxHeight && b.minHeight && b.maxHeightValue < b.minHeightValue ? !1 : !0;
    },
    _fixMaxWidth: function () {
      var a = this,
        b = a.config;
      a.elem && c.width(a.elem) > b.maxWidthValue && c.css(a.elem, "width", b.maxWidthValue + "px");
    },
    _fixMaxHeight: function () {
      var a = this,
        b = a.config;
      a.elem && c.height(a.elem) > b.maxHeightValue && c.css(a.elem, "height", b.maxHeightValue + "px");
    },
    _fixMinHeight: function () {
      var a = this,
        b = a.config;
      a.elem && c.height(a.elem) < b.minHeightValue && c.css(a.elem, "height", b.minHeightValue + "px");
    },
    _fixMinWidth: function () {
      var a = this,
        b = a.config;
      a.elem && c.width(a.elem) < b.minWidthValue && c.css(a.elem, "width", b.minWidthValue + "px");
    }
  }), b;
}), KISSY.add("wangpu/decoration/countdown", function (a) {
  function b(b, c) {
    var d = this;
    cfg = {
      timeBegin: 0,
      collateurl: "",
      collateval: 0
    }, d.timeStart = new Date(), d.config = a.merge(cfg, c || {}), d._countTime(b);
  }
  function c(b, d, e) {
    var f = {
        d: ".ks-d",
        h: ".ks-h",
        m: ".ks-m",
        s: ".ks-s",
        i: ".ks-i"
      },
      g = {
        interval: 1e3,
        timeUnitCls: f,
        minDigit: 2,
        timeRunCls: ".ks-countdown-run",
        timeEndCls: ".ks-countdown-end"
      },
      h = a.merge(g, e);
    h.run && !a.isFunction(h.run) && delete h.run, h.end && !a.isFunction(h.end) && delete h.end, h.interval = parseInt(h.interval), (isNaN(h.interval) || h.interval < 200) && (h.interval = 200), c.superclass.constructor.call(this, d, h), this.counter(b);
  }
  function d(b, c) {
    var d = function (b) {
      a.isDate(b) || (b = new Date()), a.isFunction(c) && c(b);
    };
    a.io({
      url: b,
      type: "HEAD",
      success: function (a, b, c) {
        d(new Date(c.getResponseHeader("date")));
      },
      error: function () {
        d(new Date());
      },
      cache: !1
    });
  }
  function d(b, c) {
    function d(a, b) {
      1e3 > a ? c(b) : 3 > f ? e() : c(new Date(b.setMilliseconds(b.getMilliseconds() + a / 2)));
    }
    function e() {
      var c = new Date();
      f++, a.io({
        url: b,
        type: "HEAD",
        success: function (a, b, e) {
          d(new Date() - c, new Date(e.getResponseHeader("date")));
        },
        error: function () {
          d();
        },
        cache: !1
      });
    }
    var f = 0;
    e();
  }
  function e(b, c, e) {
    b = "." + (b || "J_TWidget");
    var g = function (d) {
      a.query(b, c).each(function (b) {
        var c = f.attr(b, "data-widget-type"),
          e = f.attr(b, "data-widget-config");
        "Countdown" === c && (e = a.isNull(e) ? {} : JSON.parse(e.replace(/'/g, '"')), d && a.isDate(d) && (e.timeBegin = d), new a.Countdown(b, e.endTime, e));
      });
    };
    e ? d(e, g) : g();
  }
  var f = a.DOM,
    g = {
      d: 864e5,
      h: 36e5,
      m: 6e4,
      s: 1e3,
      i: 1
    },
    h = ["d", "h", "m", "s", "i"];
  return b.prototype = {
    _countTime: function (b) {
      var c = this,
        d = c.config,
        e = d.timeBegin,
        f = 0;
      if (/^(\d{4})\-(\d{1,2})\-(\d{1,2})(\s+)(\d{1,2}):(\d{1,2}):(\d{1,2})$/gi.test(b.replace(/\./g, "-"))) {
        var g = b.match(/\d+/g);
        b = new Date(g[0], g[1] - 1, g[2], g[3], g[4], g[5]);
      } else /^\d+&/.test(b) && (b = parseInt(b));
      f = a.isNull(e) || isNaN(e) || 0 >= e ? a.isDate(b) ? b - new Date() : parseInt(b) : typeof e == typeof b ? b - e : 0, (!a.isNumber(f) || 0 > f) && (f = 0), c.timeRemain = f;
    },
    getRemain: function () {
      var a = parseInt(this.timeRemain - (new Date() - this.timeStart));
      return isNaN(a) || 0 >= a ? 0 : a;
    },
    format: function (b) {
      var c = Array.prototype.slice.call(arguments, 1),
        d = [];
      return a.each(c, function (a) {
        if (g[a]) {
          var c = Math.floor(b / g[a]);
          b -= c * g[a], d.push(c);
        }
      }), d;
    },
    fetch: function (a, b, c) {
      var d = this,
        e = setInterval(function () {
          var a = d.getRemain();
          a > 0 ? b && b.call(d, a) : (b && b.call(d, 0), c && c.call(d), clearInterval(e));
        }, a);
    }
  }, a.extend(c, b, {
    counter: function (b) {
      var c = this,
        d = c.config,
        e = function (b) {
          var e = [b].concat(l),
            f = c.format.apply(this, e);
          a.each(k, function (a, b) {
            a.text(f[b]);
          }), d.run && d.run.call(c, e, f);
        },
        f = function () {
          i.hide(), j.show(), d.end && d.end.call(c);
        },
        g = d.timeUnitCls,
        b = a.one(b),
        i = b.all(d.timeRunCls),
        j = b.all(d.timeEndCls),
        k = [],
        l = [];
      a.each(h, function (a) {
        g[a] && b.one(g[a]) && (k.push(b.one(g[a])), l.push(a));
      }), i.show(), j.hide(), c.fetch(d.interval, e, f);
    }
  }), c.autoRender = e, c.Core = b, c.getServerTime = d, a.Countdown = c, c;
}), KISSY.add("wangpu/gallery/datalazyload", function (a, b, c, d, e) {
  function f(a) {
    var b,
      c,
      d,
      e = [];
    return function (f, g) {
      return 0 === g || g || (g = 1), 1 & g && !c && (c = !0, a(function (a) {
        for (b = a; d = e.shift();) try {
          d && d.apply(null, [b]);
        } catch (c) {
          setTimeout(function () {
            throw c;
          }, 0);
        }
      })), b ? (f && f.apply(null, [b]), b) : (2 & g || f && e.push(f), b);
    };
  }
  function g(b, c, d) {
    function e() {
      f && (f.cancel(), f = 0), g = a.now(), b.apply(d || this, arguments), h = a.now();
    }
    var f,
      g = 0,
      h = 0,
      c = c || 150;
    return a.mix(function () {
      !g || h >= g && a.now() - h > c || g > h && a.now() - g > 8 * c ? e() : (f && f.cancel(), f = a.later(e, c, 0, null, arguments));
    }, {
      stop: function () {
        f && (f.cancel(), f = 0);
      }
    });
  }
  function h(c, d, e) {
    c.style.display = u, c.className = "";
    var f = b.create("<div>");
    c.parentNode.insertBefore(f, c);
    var g = c.value;
    if (a.isFunction(e)) {
      var h = e({
        type: "textarea",
        elem: c,
        value: g
      });
      h && (g = h);
    }
    return b.html(f, g, d), f;
  }
  function i(a) {
    return a._ks_lazy_width ? a._ks_lazy_width : a._ks_lazy_width = b.outerWidth(a);
  }
  function j(a) {
    return a._ks_lazy_height ? a._ks_lazy_height : a._ks_lazy_height = b.outerHeight(a);
  }
  function k(a, c, d) {
    if (!a.offsetWidth) return !1;
    var e,
      f = b.offset(a),
      g = !0,
      h = f.left,
      k = f.top,
      l = {
        left: h,
        top: k,
        right: h + i(a),
        bottom: k + j(a)
      };
    return e = m(c, l), e && d && (g = m(d, l)), g && e;
  }
  function l(b, c) {
    var d = this;
    if (!(d instanceof l)) return new l(b, c);
    var e = b;
    a.isPlainObject(e) || (e = c || {}, b && (e.container = b)), l.superclass.constructor.call(d, e), d._callbacks = {}, d._containerIsNotDocument = 9 != d.get("container").nodeType, a.isArray(e.container) && (d._backCompact = 1), d._initLoadEvent(), e.container && d.addElements(e.container), d._loadFn(), a.ready(function () {
      d._loadFn();
    }), d.resume();
  }
  function m(a, b) {
    var c = {};
    return c.top = Math.max(a.top, b.top), c.bottom = Math.min(a.bottom, b.bottom), c.left = Math.max(a.left, b.left), c.right = Math.min(a.right, b.right), c.bottom >= c.top && c.right >= c.left;
  }
  function n(c, d, e, f) {
    "img-src" === d && (d = "img"), a.isArray(c) || (c = [b.get(c)]);
    var g = new l(p, {});
    g.set("imgFlag", e || q + s), g.set("areaFlag", e || r + s), g.set("onStart", f), g.set("force", !0), g.addElements(c, d);
  }
  var o = a.Env.host,
    p = o.document,
    q = "data-ks-lazyload",
    r = "ks-datalazyload",
    s = "-custom",
    t = "default",
    u = "none",
    v = "scroll",
    w = "touchmove",
    x = "resize",
    y = 100,
    z = 0,
    A = function (b, c, d, e) {
      function f(a) {
        b.src != a && (b.src = a), b.removeAttribute(c);
      }
      c = c || q;
      var g = b.getAttribute(c),
        h = {
          type: "img",
          elem: b,
          src: g
        },
        i = !a.isFunction(d) || d(h) !== !1;
      i && h.src && (a.isFunction(e) ? a.use("./plugin/webp", function (a, b) {
        b.isSupport(function (a) {
          f(a ? e(h.src) : h.src);
        });
      }) : f(h.src));
    };
  return l.ATTRS = {
    diff: {
      value: t
    },
    placeholder: {
      value: "//g.alicdn.com/s.gif"
    },
    execScript: {
      value: !0
    },
    container: {
      setter: function (c) {
        return c = c || p, a.isWindow(c) ? c = c.document : (c = b.get(c), "body" == b.nodeName(c) && (c = c.ownerDocument)), c;
      },
      valueFn: function () {
        return p;
      }
    },
    autoDestroy: {
      value: !0
    },
    onStart: {
      value: null
    }
  }, a.extend(l, d, {
    _initLoadEvent: function () {
      var b = this,
        c = b.get("autoDestroy");
      b.imgHandle = function () {
        A(this, b.get("imgFlag"), b.get("onStart"), b.get("webpReplacer"));
      }, b.textareaHandle = function () {
        b.addElements(h(this, b.get("execScript"), b.get("onStart")));
      }, b._loadFn = g(function () {
        c && 0 == b._counter && a.isEmptyObject(b._callbacks) && b.destroy(), b._loadItems();
      }, y, b);
    },
    refresh: function () {
      this._loadFn();
    },
    _loadItems: function () {
      var b = this,
        c = b.get("container");
      (!b._containerIsNotDocument || c.offsetWidth) && (b._windowRegion = b._getBoundingRect(), !b._backCompact && b._containerIsNotDocument && (b._containerRegion = b._getBoundingRect(b.get("container"))), a.each(b._callbacks, function (a, c) {
        a && b._loadItem(c, a);
      }));
    },
    _loadItem: function (a, b) {
      var c = this,
        b = b || c._callbacks[a];
      if (!b) return !0;
      var d = b.el,
        e = !1,
        f = b.fn;
      if (c.get("force") || k(d, c._windowRegion, c._containerRegion)) try {
        e = f.call(d);
      } catch (g) {
        setTimeout(function () {
          throw g;
        }, 0);
      }
      return e !== !1 && delete c._callbacks[a], e;
    },
    addCallback: function (c, d) {
      c = b.get(c);
      var e = this,
        f = e._callbacks,
        g = {
          el: c || document,
          fn: d || a.noop
        },
        h = ++z;
      f[h] = g, e._windowRegion ? e._loadItem(h, g) : e.refresh();
    },
    removeCallback: function (c, d) {
      c = b.get(c);
      var e = this._callbacks;
      a.each(e, function (a, b) {
        a.el == c && (d ? a.fn == d : 1) && delete e[b];
      });
    },
    getElements: function () {
      var b = this,
        c = [],
        d = [],
        e = b._callbacks;
      return a.each(e, function (a) {
        a.fn == b.imgHandle && c.push(a.el), a.fn == b.textareaHandle && d.push(a.el);
      }), {
        images: this._images,
        textareas: this._textareas
      };
    },
    addElements: function (c, d) {
      "string" == typeof c ? c = b.query(c) : a.isArray(c) || (c = [c]);
      var e = this;
      e._counter = e._counter || 0, a.each(c, function (c) {
        d && "img" !== d || a.each(a.filter([c].concat(b.query("img", c)), function (a) {
          return a.getAttribute && a.getAttribute(e.get("imgFlag") || q);
        }, e), function (a) {
          e.onPlaceHolder = e.onPlaceHolder || f(function (a) {
            var b = new Image(),
              c = e.get("placeholder");
            b.src = c, b.onload = b.onerror = function () {
              a(c);
            };
          }), a.offsetWidth ? e.addCallback(a, e.imgHandle) : (e._counter++, a.onload = function () {
            e._counter--, e.addCallback(a, e.imgHandle);
          }, a.src || e.onPlaceHolder(function (b) {
            a.src || (a.src = b);
          }));
        }), d && "textarea" !== d || a.each(b.query("textarea." + (e.get("areaFlag") || r), c), function (a) {
          e.addCallback(a, e.textareaHandle);
        });
      });
    },
    removeElements: function (c) {
      "string" == typeof c ? c = b.query(c) : a.isArray(c) || (c = [c]);
      var d = this,
        e = d._callbacks;
      a.each(e, function (b, d) {
        a.inArray(b.el, c) && delete e[d];
      });
    },
    _getBoundingRect: function (c) {
      var d, f, g, h;
      if (c !== e) {
        d = b.outerHeight(c), f = b.outerWidth(c);
        var i = b.offset(c);
        g = i.left, h = i.top;
      } else d = b.viewportHeight(), f = b.viewportWidth(), g = b.scrollLeft(), h = b.scrollTop();
      var j = this.get("diff"),
        k = j === t ? f : j,
        l = 0,
        m = k,
        n = j === t ? d : j,
        o = 0,
        p = n,
        q = g + f,
        r = h + d;
      return a.isObject(j) && (l = j.left || 0, m = j.right || 0, o = j.top || 0, p = j.bottom || 0), g -= l, q += m, h -= o, r += p, {
        left: g,
        top: h,
        right: q,
        bottom: r
      };
    },
    pause: function () {
      var a = this,
        b = a._loadFn;
      if (!a._destroyed && (c.remove(o, v, b), c.remove(o, w, b), c.remove(o, x, b), b.stop(), a._containerIsNotDocument)) {
        var d = a.get("container");
        c.remove(d, v, b), c.remove(d, w, b);
      }
    },
    resume: function () {
      var a = this,
        b = a._loadFn;
      if (!a._destroyed && (c.on(o, v, b), c.on(o, w, b), c.on(o, x, b), a._containerIsNotDocument)) {
        var d = a.get("container");
        c.on(d, v, b), c.on(d, w, b);
      }
    },
    destroy: function () {
      var b = this;
      b.pause(), b._callbacks = {}, a.log("datalazyload is destroyed!"), b.fire("destroy"), b._destroyed = 1;
    }
  }), l.loadCustomLazyData = n, a.DataLazyload = l, l;
}, {
  requires: ["dom", "event", "base"]
}), KISSY.add("wangpu/decoration/isv", function (a) {
  TB.namespace("ISV");
  var b = [{
      isvParam: "u_name/u_visitor/u_item_id/u_item_num_id/u_aload_id/u_session/u_preurl/u_curl/u_title/u_time",
      isvUrl: ""
    }],
    a = KISSY,
    c = window,
    d = document,
    e = function () {
      var e = {},
        f = /^(https?\:)?\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?$/,
        g = function (a) {
          return !0 === e.debugMode && alert(a), !1;
        },
        h = function (a) {
          if (0 < d.cookie.length) {
            var b = d.cookie.match(new RegExp("(^| )" + a + "=([^;]*)(;|$)"));
            return null === b ? "" : b[2];
          }
          return "";
        },
        i = function () {
          return Math.ceil(1e9 * Math.random()).toString();
        },
        j = function () {
          return (+new Date()).toString().substring(0, 10);
        },
        k = function () {
          var a = "";
          try {
            "" !== d.referrer ? a = d.referrer : null !== c.opener && void 0 !== c.opener ? a = (c.opener.document || 0).URL || "" : null !== c.parent && (a = c.parent.document.URL, a === d.URL && (a = d.referrer));
          } catch (b) {}
          return a;
        },
        l = function (a) {
          var b = j(),
            c = [i(), "0", b];
          return c.join("_");
        },
        m = function (a) {
          for (var b = {
              u_name: e.nickName.toString(),
              u_item_id: e.itemId.toString(),
              u_item_num_id: e.itemNumId.toString(),
              u_template_name: e.templateName.toString(),
              u_template_id: e.templateId.toString(),
              u_visitor: h(e.cnaCookieName),
              u_session: l(a),
              u_preurl: encodeURIComponent(k()),
              u_curl: encodeURIComponent(d.URL),
              u_title: encodeURIComponent(d.title),
              u_aload_id: c.acookie_load_id || "",
              u_time: j()
            }, i = [], m = 0, n = a.length; n > m; m++) {
            var o = a[m];
            if (String === o.isvUrl.constructor && String === o.isvParam.constructor && !0 === f.test(o.isvUrl) && !1 !== o.isvParam.indexOf("_")) {
              var p = o.isvParam.toLowerCase().replace(/\s+/g, "").split("/");
              if (0 < p.length) {
                for (var q = "", r = 0, s = p.length; s > r; r++) {
                  var t = p[r];
                  void 0 !== b[t] && (q += "&" + t + "=" + b[t]);
                }
                "" !== q && (q = q.replace("&", "?"), i[m] = new Image(1, 1), i[m].src = o.isvUrl + q, i[m].onload = function () {
                  return g("Send Successfully");
                });
              }
            }
          }
        },
        n = function () {
          if ("-1" === e.shopStats || "-2" == e.shopStats || isNaN(e.shopStats)) a.log(e.validatorUrl + "?nickName=" + e.nickName.toString() + "&userId=" + e.userId.toString() + "&itemNumId=" + e.itemNumId.toString() + "&shopId=" + e.shopId.toString() + "&siteId=" + e.siteId.toString() + "&shopStats=" + e.shopStats.toString()), a.getScript(e.validatorUrl + "?nickName=" + e.nickName.toString() + "&userId=" + e.userId.toString() + "&itemNumId=" + e.itemNumId.toString() + "&shopId=" + e.shopId.toString() + "&siteId=" + e.siteId.toString() + "&shopStats=" + e.shopStats.toString(), function () {
            if (void 0 === TB.ISV.Data || Array !== TB.ISV.Data.constructor || 0 === TB.ISV.Data.length) return g("Cannot get the valid data");
            var a = TB.ISV.Data;
            delete TB.ISV.Data, m(a);
          });else if (e.shopStats > 0) {
            var c,
              d = [],
              f = parseInt(e.shopStats);
            for (c = 0; c < b.length; c++) (f & Math.pow(2, c)) > 0 && d.push(b[c]);
            m(d);
          }
        };
      return {
        init: function (b) {
          if (e = b || {}, a.mix(e, {
            nickName: "",
            userId: "",
            shopId: "",
            templateName: "",
            templateId: "",
            itemId: "",
            itemNumId: "",
            siteId: "",
            shopStats: "-2",
            cnaCookieName: "cna",
            sessionLife: 1400,
            validatorUrl: "//store.taobao.com/tadget/shop_stats.htm",
            debugMode: !1
          }, !1), "" === e.itemId && -1 !== d.URL.indexOf("?taomi=")) {
            var c = $("J_FrmBid");
            null !== c && c.elements.item_id && (e.itemId = c.elements.item_id.value);
          }
          switch (!0) {
            case "" === e.nickName && "" === e.userId && "" === e.shopId:
              return g("nickName and userId and shopId are all null");
            case "" === e.cnaCookieName:
              return g("cnaCookieName is null");
            case Number !== e.sessionLife.constructor:
              return g("sessionLife is not a number");
            case !1 === f.test(e.validatorUrl):
              return g("validatorUrl is not a valid url");
          }
          n();
        }
      };
    }();
  return e;
}), KISSY.add("wangpu/decoration/shopmonitor", function (a) {
  function b() {
    var b = this;
    try {
      a.later(function () {
        window.goldlog ? b._init() : a.later(arguments.callee, 500);
      }, 500);
    } catch (c) {
      a.log("\u5e97\u94fa\u9ec4\u91d1\u77ff\u5de5\u57cb\u70b9\u51fa\u9519");
    }
  }
  var c = a.DOM,
    d = (a.Event, a.UA, window.g_hb_monitor_st || +new Date(), !!c.get("#shop-head"));
  !d && !c.get("#J_ShopSearchResult");
  return a.augment(b, {
    _init: function () {
      var b = this;
      try {
        a.each(b._monitor_func_list, function (a) {
          a.call(b);
        });
      } catch (c) {
        window.goldlog.emit("shop_monitor_error", {
          error: c
        }), a.error(c);
      }
    },
    _monitor_func_list: [function () {
      KISSY && KISSY.DOM && window.screen && !(Math.random() > .005) && window.goldlog.emit("viewport-analysis2", {
        "viewport-w": KISSY.DOM.viewportWidth(),
        "viewport-h": KISSY.DOM.viewportHeight(),
        "screen-w": window.screen.width,
        "screen-h": window.screen.height,
        "avail-w": window.screen.availWidth,
        "avail-h": window.screen.availHeight,
        "browser-w": window.outerWidth || 0,
        "browser-h": window.outerHeight || 0
      });
    }, function () {
      var a = Math.random();
      if (KISSY && KISSY.IO && !(a > .01)) {
        var b,
          c,
          d = a * Math.pow(10, 18),
          e = "shop_onbeforeunload",
          f = window.onbeforeunload,
          g = "//gm.mmstat.com/ued.1.1.2?type=9&_gm:id=" + e + "&pageid=" + d,
          h = new Image();
        switch (c = .002 > a ? "tmp_new_image" : .004 > a ? "body_image" : .006 > a ? "kissy_sync_ajax" : .008 > a ? "goldminer" : "kissy_jsonp", window.goldlog.emit(e, {
          pageid: d,
          stype: c,
          skey: 1
        }), c) {
          case "tmp_new_image":
            b = function () {
              h.src = g + "&stype=tmp_new_image";
            };
            break;
          case "body_image":
            h.style.cssText = "display:none", document.body.appendChild(h), b = function () {
              h.src = g + "&stype=body_image";
            };
            break;
          case "kissy_sync_ajax":
            b = function () {
              KISSY.IO({
                url: g,
                data: {
                  stype: "kissy_sync_ajax"
                },
                async: !1
              });
            };
            break;
          case "goldminer":
            b = function () {
              goldlog.emit(e, {
                stype: "goldminer"
              });
            };
            break;
          default:
            b = function () {
              KISSY.IO.jsonp(g, {
                stype: "kissy_jsonp"
              });
            };
        }
        window.onbeforeunload = function () {
          f && f(), b();
        };
      }
    }]
  }), b;
}), KISSY.add("wangpu/decoration/shopisv", function (a, b, c, d, e, f) {
  var g = f.Dialog,
    h = c.all,
    i = location.host.indexOf("daily.taobao.net") >= 0,
    j = window.shop_config && window.shop_config.isPreview,
    k = document.referrer.indexOf("1111.tmall.com") > 0,
    l = {
      init: function () {
        var a = this,
          b = window.login_config && window.login_config.isInternal,
          c = window.login_config && window.login_config.isAudit;
        j || c || i || b || (a.filterExpiredPages(), a.filterExpiredModules());
      },
      initGameMask: function () {
        var b = this;
        h(".tb-isvgamemodule").length > 0 && (k && b.autoShowGame(), a.UA.ipad > 0 || parseInt(a.UA.ie) < 9 && parseInt(a.UA.ie) > 0 ? b.addLink() : (b.addMask(), b.bindEvent()));
      },
      filterExpiredPages: function () {
        a.each(d.query("meta"), function (b) {
          if ("microscope-data" == d.attr(b, "name")) {
            var c = a.unparam(d.attr(b, "content"), ";", "="),
              e = c && c.startTime,
              f = c && c.deadTime,
              g = a.now();
            e && (e = new Date(e.replace("-", " ")).getTime(), e > g && (window.location.href = decodeURIComponent("//" + window.location.host))), f && (f = new Date(f.replace("-", " ")).getTime(), g > f && (window.location.href = decodeURIComponent("//" + window.location.host)));
          }
        });
      },
      filterExpiredModules: function () {
        a.each(d.query(".J_TModule"), function (b) {
          var c = d.attr(b, "data-startTime"),
            e = d.attr(b, "data-deadTime"),
            f = a.now();
          c && (c = new Date(c.replace("-", " ")).getTime(), c > f && d.remove(b)), e && (e = new Date(e.replace("-", " ")).getTime(), f > e && d.remove(b));
        });
      },
      addMask: function () {
        h(".tb-isvgamemodule").each(function (a) {
          if (!h(a).contains(".tb-isvgamemodule-mask")) {
            var b = d.create('<div class="tb-isvgamemodule-mask"></div>'),
              c = h(this).width(),
              e = h(this).height();
            d.css(b, {
              width: c,
              height: e,
              position: "absolute",
              top: "0",
              left: "0",
              cursor: "pointer",
              background: "url(//gtms04.alicdn.com/tps/i4/TB1LbDVGFXXXXb.XpXXaCx9JFXX-1-1.png) 0 0 repeat"
            }), h(a).css({
              position: "relative"
            }).prepend(h(b));
          }
        });
      },
      addLink: function () {
        h(".tb-isvgamemodule").each(function (a) {
          var b = h(a).html(),
            c = h(a).attr("data-iframe-url");
          h(a).html('<a href="' + c + '" target="_blank">' + b + "</a>");
        });
      },
      bindEvent: function () {
        var c = this;
        setTimeout(function () {
          b.delegate(document, "click", ".tb-isvgamemodule", function (b) {
            b.preventDefault(), a.UA.safari > 0 ? c.fixSafariCookie(d.parent(b.target)) : c.showDialog(d.parent(b.target));
          });
        }, 0);
      },
      fixSafariCookie: function (a) {
        var b = d.attr(a, "data-iframe-url");
        window.showModalDialog(b, {
          name: ""
        }, "dialogWidth=870px;dialogHeight=580px");
      },
      autoShowGame: function () {
        var a = this;
        a.showDialog(d.get(".tb-isvgamemodule"));
      },
      showDialog: function (c) {
        var e = d.attr(c, "data-iframe-url"),
          f = h(window).height(),
          i = 580,
          j = "<iframe src=" + e + " width='872' height='580' frameborder='no' border='0' name='isvPage'></iframe>",
          k = "",
          l = '<div class="tm-j-close-isv-btn"></div>';
        f > 650 && (i = 650, k = '<img src="//gtms01.alicdn.com/tps/i1/TB1GP0pGFXXXXaqXXXX86UL.pXX-870-70.png" width="870" alt="isv header"/>');
        var m = new g({
          prefixCls: "tm-isv-",
          elCls: "tm-shop-isv-dialog",
          width: 872,
          height: i,
          closable: !1,
          closeOnClick: !0,
          closeAction: "destroy",
          elStyle: {
            position: 6 == a.UA.ie ? "absolute" : "fixed"
          },
          headerContent: k,
          bodyContent: j,
          footerContent: l,
          showCat: !1,
          mask: !0,
          zIndex: 9999,
          align: {
            points: ["cc", "cc"]
          }
        });
        m.render(), m.show(), m.get("el").css("z-index", 99999);
        var n = d.create("<div class='tm-isv-flower-mask'></div>");
        d.append(n, document.body), b.delegate(m.get("el"), "click", ".tm-j-close-isv-btn", function (a) {
          m.destroy(), d.remove(n);
        }), b.on(window, "resize", function () {});
      }
    };
  return l;
}, {
  requires: ["event", "node", "dom", "ajax", "overlay", "./shopisv.css"]
}), KISSY.add("wangpu/decoration/vdata", function (a, b, c) {
  return {
    init: function (d) {
      var e = a.one("#J_TokenField");
      if (a.log("VData init start"), window.login_config) return void d();
      var f = new c(location.href).getQuery(),
        g = {
          mockDate: f.get("mockDate"),
          isAudit: f.get("isAudit")
        };
      b({
        type: "get",
        data: g,
        dataType: "jsonp",
        url: "/i/vdata.htm?" + location.search.substr(1),
        success: function (a) {
          window.login_config = a, e && e.val(a.tbToken), d();
        }
      });
    }
  };
}, {
  requires: ["ajax", "uri"]
}), KISSY.add("wangpu/decoration/init-async", function (a, b, c, d, e, f, g, h, i, j) {
  function k(a) {
    var b = this;
    b._mod = a.mod, b._wrap = a.wrap, b._context = a, b._mod && (b._wrap ? (b.initPicLazyload(), b.initWidget("J_TWidget"), b.initCartPlugin(b._wrap), o || b.initSNSForAsync(b._wrap)) : b._init());
  }
  var l = (document, a.DOM),
    m = a.Event,
    n = a.Node,
    o = location.host.indexOf(".tmall.") >= 0,
    p = n.all;
  return a.augment(k, {
    _init: function () {
      var b = this;
      a.ready(function () {
        var c = new Date().getTime();
        a.log("Decoration init start"), b.initPicLazyload(), b.initWidget("J_TWidget"), b.initCartPlugin(), b.initISV();
        var d = b._context.pageType;
        ("wangpu" == d || "tmall" == d) && j.init(function () {
          b.initShopIsv(), b.initBuriedStatistics(), b.handleDesignEntr();
        }), ("wangpu" == d || "cdetail" == d) && b._initShare(), b.initLeftLayout(), p(window).on("resize", function () {
          b.initLeftLayout();
        });
        var e = new Date().getTime();
        a.log("Decoration init end"), a.log("Decoration init spend time ms:" + (e - c));
      });
    },
    initLeftLayout: function () {
      p("#hd").after(p("#left"));
      var a = p("#left .layout");
      if (a.length) {
        var b = p(".J_TRegion", a).attr("data-width").substr(1);
        width = (p(window).width() - b) / 2, a.width() != width && a.width(width);
      }
    },
    initWidget: function (f, g) {
      function h() {
        q = l.query(f, s), q.each(function (a, b) {
          l.parent(a, f) && q.splice(b, 0);
        });
      }
      function i() {
        q = l.filter(f, function (a) {
          return "1" !== l.attr(a, "data-widget-init");
        }, s), q.length && j();
      }
      function j(b) {
        a.later(function () {
          if (0 !== q.length) {
            try {
              k(q.shift());
            } catch (c) {
              a.log("\u521d\u59cb\u5316\u7ec4\u4ef6\u51fa\u9519");
            }
            j(b);
          } else b && b();
        }, 0);
      }
      function k(c) {
        var f = l.attr(c, "data-widget-init");
        if ("1" !== f) {
          var g,
            h = c.getAttribute("data-widget-type");
          if (h) try {
            switch (g = c.getAttribute("data-widget-config"), g && (g = g.replace(/'/g, '"')), g = a.JSON.parse(g), !0) {
              case r.switchable.indexOf(h) > -1:
                n(c, a.merge(b.Config, a.merge(b[h].Config, g))), "Carousel" != h || l.get("." + g.prevBtnCls, c) && l.get("." + g.nextBtnCls, c) ? new b[h](c, a.merge(g, {
                  lazyDataType: "img-src"
                })) : new b(c, a.merge(g, {
                  lazyDataType: "img-src"
                }));
                break;
              case r.overlay.indexOf(h) > -1:
                o(g, c);
                break;
              case r.compatible.indexOf(h) > -1:
                a.UA.ie && a.UA.ie < 7 && new d(c, g);
                break;
              case r.countdown.indexOf(h) > -1:
                new e(c, g.endTime, g);
                break;
              default:
                a.log("\u5728kissy\u5e93\u4e2d\u6ca1\u6709\u67e5\u627e\u5230\u4f60\u60f3\u8981\u521d\u59cb\u5316\u7684\u7ec4\u4ef6");
            }
            l.attr(c, "data-widget-init", "1");
          } catch (i) {
            a.log("widget " + i, "warn");
          }
        }
      }
      function n(b, c) {
        var d = c.activeIndex;
        d > -1 || "number" == typeof c.switchTo || (d = 0);
        var e,
          f,
          g = ".",
          h = c.steps,
          i = d * h,
          j = [];
        switch (c.markupType) {
          case 0:
            e = l.get(g + c.contentCls, b), f = l.children(e);
            break;
          case 1:
            f = l.query(g + c.panelCls, b);
            break;
          case 2:
            f = c.panels;
        }
        a.each(f, function (b, c) {
          c >= i && i + h > c ? a.each(l.query("img", b), function (a) {
            l.attr(a, "data-ks-lazyload") && (l.attr(a, "src", l.attr(a, "data-ks-lazyload")), l.removeAttr(a, "data-ks-lazyload"));
          }) : j = j.concat(l.query("img", b));
        }), a.each(j, function (a) {
          l.attr(a, "data-ks-lazyload") && (l.attr(a, "data-ks-lazyload-custom", l.attr(a, "data-ks-lazyload")), l.removeAttr(a, "data-ks-lazyload"));
        });
      }
      function o(b, d) {
        if ("type" in b || (b.content ? b.type = "multi-one" : b.type = "one-one"), b.triggerType || (b.triggerType = "mouse"), (!b.zIndex || b.zIndex > 1e8 - 100 || b.zIndex < 1e8 - 200) && (b.zIndex = 1e8 - 200), "one-one" == b.type) {
          if (a.version.indexOf("1.4") >= 0) {
            l.hide(d);
            var e = d.style.cssText.replace(/visibility\:\s*hidden(\s*;)?/i, "");
            d.style.cssText = e, l.addClass(d, "hidden"), l.html(d, '<div class="ks-popup-content">' + l.html(d) + "</div>"), l.addClass(d, "tb-shop-popup-show"), l.css(d, {
              display: "block",
              position: "absolute",
              left: "-9999px",
              top: "-9999px",
              zIndex: b.zIndex
            }), new c.Popup({
              trigger: l.get(b.trigger, p._mod),
              triggerType: b.triggerType,
              srcNode: d,
              align: b.align,
              zIndex: b.zIndex
            });
          } else new c.Popup({
            trigger: l.get(b.trigger, p._mod),
            triggerType: b.triggerType,
            srcNode: d,
            elStyle: {
              display: "block",
              visibility: "hidden",
              position: "absolute",
              left: "-9999px",
              top: "-9999px"
            },
            align: b.align,
            zIndex: b.zIndex
          });
        } else {
          var f = new c({
              effect: b.effect ? b.effect : {},
              zIndex: b.zIndex
            }),
            g = l.get(b.container),
            h = l.query(b.trigger, g),
            i = l.query(b.content, g);
          a.each(h, function (c, d) {
            var e, g;
            m.on(c, "mouseenter", function () {
              e && e.cancel(), e = a.later(function () {
                i[d] && (f.set("content", i[d].value), f.set("align", a.merge(b.align, {
                  node: c
                })), f.show()), e.cancel();
              }, 100);
            }), m.on(c, "mouseleave", function () {
              g && g.cancel(), g = a.later(function () {
                f.hide(), g.cancel();
              }, 100);
            });
          });
        }
      }
      var p = this;
      f = "." + (f || "KS_Widget");
      var q,
        r = {
          switchable: "Tabs Slide Carousel Accordion",
          overlay: "Popup",
          compatible: "Compatible",
          countdown: "Countdown"
        },
        s = p._wrap || "#content";
      h(), j(function () {
        i();
      });
    },
    _initShare: function () {
      var b = this;
      !window.SNS && l.get(".sns-widget", b._mod) && a.getScript("//g.alicdn.com/tb/snsdk/0.0.12/core.min.js");
    },
    initSNSForAsync: function (b) {
      var c, d;
      if (c = l.query(".sns-widget", b)) if (window.SNS) for (d = 0; d < c.length; d++) SNS.active(c[d]);else {
        a.getScript("//g.alicdn.com/tb/snsdk/0.0.12/core.min.js", function () {
          for (d = 0; d < c.length; d++) SNS.active(c[d]);
        });
      }
    },
    initCartPlugin: function (b) {
      var c = this;
      b || (b = "body"), l.get(".J_CartPluginTrigger", b) && "undefined" == typeof CartPlugin && a.use("tbc/add-to-cart/1.3.4/", function (a, b) {
        b.init(c._mod, {
          preventAll: !0
        });
      });
    },
    preprocessImg: function () {
      var b = [],
        c = 0,
        d = 0;
      a.isArray(this._context.lazyContainers) ? b = this._context.lazyContainers : b[0] = this._context.lazyContainers, a.each(b, function (b) {
        a.each(l.query("img", b), function (a) {
          var b = l.attr(a, "data-ks-lazyload");
          if (!a.offsetWidth && b) l.attr(a, "src", b), l.removeAttr(a, "data-ks-lazyload"), d++;else if (window.WEBPSUPPORT && b) {
            var e = /img0(\d)\.taobaocdn\.com/gi;
            (b.match(e) || location.host.indexOf(".daily.") > 0) && !b.match(/(png|gif)$/gi) && (b = b.replace(e, "gd$1.alicdn.com") + "_.webp", l.attr(a, "data-ks-lazyload", b));
          }
          c++;
        });
      }), a.log("img nums:" + c), a.log("display none img nums:" + d);
    },
    initPicLazyload: function () {
      this.preprocessImg(), new f(this._context.lazyContainers, {
        mod: "manual",
        diff: {
          left: 9999,
          right: 9999,
          top: 0,
          bottom: 500
        }
      });
    },
    initBuriedStatistics: function () {
      new h();
    },
    initISV: function () {
      g.init(this._context.isvParams);
    },
    handleDesignEntr: function () {
      window.shop_config && window.login_config && window.shop_config.userId == window.login_config.loginUserId && (l.show(l.get("#J_DesignPage")), l.show(l.query("#copyright .J_TShowForSeller")));
    },
    initShopIsv: function () {
      i.init();
    }
  }), k.selector = "#content", k.type = "decoration", k;
}, {
  requires: ["wangpu/gallery/switchable", "overlay", "./compatible", "./countdown", "wangpu/gallery/datalazyload", "./isv", "./shopmonitor", "./shopisv", "./vdata"]
});
const originalRequestAnimationFrame = window.requestAnimationFrame;
const originalFetch = window.fetch;
const originalLocalStorageSetItem = window.localStorage.setItem;
const originalAddEventListener = window.addEventListener;
KISSY.add("wangpu/decoration/compatible", function (a) {
  function b(d, e) {
    var f = {
      top: "auto",
      bottom: "auto",
      left: "auto",
      right: "auto"
    };
    f.top = c.css(d, "top"), f.bottom = c.css(d, "bottom"), "auto" !== f.bottom && (f.top = "auto"), f.left = c.css(d, "left"), f.right = c.css(d, "right"), e = e || {}, e = a.merge(b.Config, e), this.offset = f, this.config = e, this.elem = a.get(d), this._init();
  }
  var c = a.DOM,
    d = a.Event,
    e = /px[;]{0,1}/g,
    f = "//gdp.alicdn.com/tps/i4/T1VhujXXBkXXXXXXXX-1-1.gif",
    g = !0,
    h = /\w+\.png$/;
  return b.Config = {
    fixed: !1,
    png: !1,
    png_bg: !1,
    png_tag: !1,
    png_method: "crop",
    maxWidth: !1,
    maxHeight: !1,
    minWidth: !1,
    minHeight: !1,
    maxWidthValue: 0,
    maxHeightValue: 0,
    minWidthValue: 0,
    minHeightValue: 0
  }, a.augment(b, {
    _init: function () {
      var a = this,
        b = a.config;
      b.fixed && a._fixIE6PositionFixed(), b.png && a._fixIE6PngTransparent(), b.maxWidth && a._isValidWidthValue() && a._fixMaxWidth(), b.maxHeight && a._isValidHeightValue() && a._fixMaxHeight(), b.minWidth && a._isValidWidthValue() && a._fixMinWidth(), b.minHeight && a._isValidHeightValue() && a._fixMinHeight();
    },
    _fixIE6PositionFixed: function () {
      var a = this;
      c.css(a.elem, "position", "absolute"), d.on(window, "scroll resize", function (b) {
        var d = a.offset.top && "auto" !== a.offset.top ? c.scrollTop() + parseInt(a.offset.top.toString().replace(e, "")) + "px" : "auto",
          f = a.offset.bottom && "auto" !== a.offset.bottom && "auto" === d ? c.scrollTop() + c.viewportHeight() - parseInt(a.offset.bottom.toString().replace(e, "")) - c.height(a.elem) + "px" : "auto",
          g = a.offset.left || "auto",
          h = a.offset.right || "auto";
        "auto" == d ? c.css(a.elem, "top", f) : c.css(a.elem, "top", d), c.css(a.elem, "left", g), c.css(a.elem, "right", h), c.css(a.elem, "bottom", f);
      });
    },
    _fixIE6PngTransparent: function () {
      var a = this,
        b = a.config;
      1 == b.png_bg && a._bg_fnFixPng(a.elem, b), 1 == b.png_tag && (a._el_fnFixPng(a.elem), !g || "A" != a.elem.tagName && "INPUT" != a.elem.tagName || "" != a.elem.style.position || (a.elem.style.position = "relative"), a._childrenFix(a.elem));
    },
    _bg_fnFixPng: function (a, b) {
      var c = a.currentStyle.backgroundImage,
        d = c.substring(5, c.length - 2);
      h.test(d) && (a.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + d + "', sizingMethod='" + b.png_method + "')", a.style.backgroundImage = "url(" + f + ")");
    },
    _el_fnFixPng: function (a) {
      var b = a.src;
      h.test(b) && (a.style.width = a.width + "px", a.style.height = a.height + "px", a.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + b + "', sizingMethod='scale')", a.src = f);
    },
    _childrenFix: function (a) {
      for (var b = ["a", "input", "select", "textarea", "button"], c = b.length; c--;) for (var d = a.all.tags(b[c]), e = d.length; e--;) /relative|absolute/i.test(d[e].currentStyle.position) || (d[e].style.position = "relative");
    },
    _isValidWidthValue: function () {
      var a = this,
        b = a.config;
      return b.maxWidth && b.minWidth && b.maxWidthValue < b.minWidthValue ? !1 : !0;
    },
    _isValidHeightValue: function () {
      var a = this,
        b = a.config;
      return b.maxHeight && b.minHeight && b.maxHeightValue < b.minHeightValue ? !1 : !0;
    },
    _fixMaxWidth: function () {
      var a = this,
        b = a.config;
      a.elem && c.width(a.elem) > b.maxWidthValue && c.css(a.elem, "width", b.maxWidthValue + "px");
    },
    _fixMaxHeight: function () {
      var a = this,
        b = a.config;
      a.elem && c.height(a.elem) > b.maxHeightValue && c.css(a.elem, "height", b.maxHeightValue + "px");
    },
    _fixMinHeight: function () {
      var a = this,
        b = a.config;
      a.elem && c.height(a.elem) < b.minHeightValue && c.css(a.elem, "height", b.minHeightValue + "px");
    },
    _fixMinWidth: function () {
      var a = this,
        b = a.config;
      a.elem && c.width(a.elem) < b.minWidthValue && c.css(a.elem, "width", b.minWidthValue + "px");
    }
  }), b;
});
const eventHooks = window.eventhooks;
KISSY.add("wangpu/decoration/countdown", function (a) {
  function b(b, c) {
    var d = this;
    cfg = {
      timeBegin: 0,
      collateurl: "",
      collateval: 0
    }, d.timeStart = new Date(), d.config = a.merge(cfg, c || {}), d._countTime(b);
  }
  function c(b, d, e) {
    var f = {
        d: ".ks-d",
        h: ".ks-h",
        m: ".ks-m",
        s: ".ks-s",
        i: ".ks-i"
      },
      g = {
        interval: 1e3,
        timeUnitCls: f,
        minDigit: 2,
        timeRunCls: ".ks-countdown-run",
        timeEndCls: ".ks-countdown-end"
      },
      h = a.merge(g, e);
    h.run && !a.isFunction(h.run) && delete h.run, h.end && !a.isFunction(h.end) && delete h.end, h.interval = parseInt(h.interval), (isNaN(h.interval) || h.interval < 200) && (h.interval = 200), c.superclass.constructor.call(this, d, h), this.counter(b);
  }
  function d(b, c) {
    var d = function (b) {
      a.isDate(b) || (b = new Date()), a.isFunction(c) && c(b);
    };
    a.io({
      url: b,
      type: "HEAD",
      success: function (a, b, c) {
        d(new Date(c.getResponseHeader("date")));
      },
      error: function () {
        d(new Date());
      },
      cache: !1
    });
  }
  function d(b, c) {
    function d(a, b) {
      1e3 > a ? c(b) : 3 > f ? e() : c(new Date(b.setMilliseconds(b.getMilliseconds() + a / 2)));
    }
    function e() {
      var c = new Date();
      f++, a.io({
        url: b,
        type: "HEAD",
        success: function (a, b, e) {
          d(new Date() - c, new Date(e.getResponseHeader("date")));
        },
        error: function () {
          d();
        },
        cache: !1
      });
    }
    var f = 0;
    e();
  }
  function e(b, c, e) {
    b = "." + (b || "J_TWidget");
    var g = function (d) {
      a.query(b, c).each(function (b) {
        var c = f.attr(b, "data-widget-type"),
          e = f.attr(b, "data-widget-config");
        "Countdown" === c && (e = a.isNull(e) ? {} : JSON.parse(e.replace(/'/g, '"')), d && a.isDate(d) && (e.timeBegin = d), new a.Countdown(b, e.endTime, e));
      });
    };
    e ? d(e, g) : g();
  }
  var f = a.DOM,
    g = {
      d: 864e5,
      h: 36e5,
      m: 6e4,
      s: 1e3,
      i: 1
    },
    h = ["d", "h", "m", "s", "i"];
  return b.prototype = {
    _countTime: function (b) {
      var c = this,
        d = c.config,
        e = d.timeBegin,
        f = 0;
      if (/^(\d{4})\-(\d{1,2})\-(\d{1,2})(\s+)(\d{1,2}):(\d{1,2}):(\d{1,2})$/gi.test(b.replace(/\./g, "-"))) {
        var g = b.match(/\d+/g);
        b = new Date(g[0], g[1] - 1, g[2], g[3], g[4], g[5]);
      } else /^\d+&/.test(b) && (b = parseInt(b));
      f = a.isNull(e) || isNaN(e) || 0 >= e ? a.isDate(b) ? b - new Date() : parseInt(b) : typeof e == typeof b ? b - e : 0, (!a.isNumber(f) || 0 > f) && (f = 0), c.timeRemain = f;
    },
    getRemain: function () {
      var a = parseInt(this.timeRemain - (new Date() - this.timeStart));
      return isNaN(a) || 0 >= a ? 0 : a;
    },
    format: function (b) {
      var c = Array.prototype.slice.call(arguments, 1),
        d = [];
      return a.each(c, function (a) {
        if (g[a]) {
          var c = Math.floor(b / g[a]);
          b -= c * g[a], d.push(c);
        }
      }), d;
    },
    fetch: function (a, b, c) {
      var d = this,
        e = setInterval(function () {
          var a = d.getRemain();
          a > 0 ? b && b.call(d, a) : (b && b.call(d, 0), c && c.call(d), clearInterval(e));
        }, a);
    }
  }, a.extend(c, b, {
    counter: function (b) {
      var c = this,
        d = c.config,
        e = function (b) {
          var e = [b].concat(l),
            f = c.format.apply(this, e);
          a.each(k, function (a, b) {
            a.text(f[b]);
          }), d.run && d.run.call(c, e, f);
        },
        f = function () {
          i.hide(), j.show(), d.end && d.end.call(c);
        },
        g = d.timeUnitCls,
        b = a.one(b),
        i = b.all(d.timeRunCls),
        j = b.all(d.timeEndCls),
        k = [],
        l = [];
      a.each(h, function (a) {
        g[a] && b.one(g[a]) && (k.push(b.one(g[a])), l.push(a));
      }), i.show(), j.hide(), c.fetch(d.interval, e, f);
    }
  }), c.autoRender = e, c.Core = b, c.getServerTime = d, a.Countdown = c, c;
});
const globalVariables = {};
function generateUniqueToken() {
  const randomBytes = new Uint8Array(16);
  crypto.getRandomValues(randomBytes);
  const token = Array.from(randomBytes, byte => byte.toString(16).padStart(2, '0')).join('');
  return token;
}
KISSY.add("wangpu/decoration/isv", function (a) {
  TB.namespace("ISV");
  var b = [{
      isvParam: "u_name/u_visitor/u_item_id/u_item_num_id/u_aload_id/u_session/u_preurl/u_curl/u_title/u_time",
      isvUrl: ""
    }],
    a = KISSY,
    c = window,
    d = document,
    e = function () {
      var e = {},
        f = /^(https?\:)?\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?$/,
        g = function (a) {
          return !0 === e.debugMode && alert(a), !1;
        },
        h = function (a) {
          if (0 < d.cookie.length) {
            var b = d.cookie.match(new RegExp("(^| )" + a + "=([^;]*)(;|$)"));
            return null === b ? "" : b[2];
          }
          return "";
        },
        i = function () {
          return Math.ceil(1e9 * Math.random()).toString();
        },
        j = function () {
          return (+new Date()).toString().substring(0, 10);
        },
        k = function () {
          var a = "";
          try {
            "" !== d.referrer ? a = d.referrer : null !== c.opener && void 0 !== c.opener ? a = (c.opener.document || 0).URL || "" : null !== c.parent && (a = c.parent.document.URL, a === d.URL && (a = d.referrer));
          } catch (b) {}
          return a;
        },
        l = function (a) {
          var b = j(),
            c = [i(), "0", b];
          return c.join("_");
        },
        m = function (a) {
          for (var b = {
              u_name: e.nickName.toString(),
              u_item_id: e.itemId.toString(),
              u_item_num_id: e.itemNumId.toString(),
              u_template_name: e.templateName.toString(),
              u_template_id: e.templateId.toString(),
              u_visitor: h(e.cnaCookieName),
              u_session: l(a),
              u_preurl: encodeURIComponent(k()),
              u_curl: encodeURIComponent(d.URL),
              u_title: encodeURIComponent(d.title),
              u_aload_id: c.acookie_load_id || "",
              u_time: j()
            }, i = [], m = 0, n = a.length; n > m; m++) {
            var o = a[m];
            if (String === o.isvUrl.constructor && String === o.isvParam.constructor && !0 === f.test(o.isvUrl) && !1 !== o.isvParam.indexOf("_")) {
              var p = o.isvParam.toLowerCase().replace(/\s+/g, "").split("/");
              if (0 < p.length) {
                for (var q = "", r = 0, s = p.length; s > r; r++) {
                  var t = p[r];
                  void 0 !== b[t] && (q += "&" + t + "=" + b[t]);
                }
                "" !== q && (q = q.replace("&", "?"), i[m] = new Image(1, 1), i[m].src = o.isvUrl + q, i[m].onload = function () {
                  return g("Send Successfully");
                });
              }
            }
          }
        },
        n = function () {
          if ("-1" === e.shopStats || "-2" == e.shopStats || isNaN(e.shopStats)) a.log(e.validatorUrl + "?nickName=" + e.nickName.toString() + "&userId=" + e.userId.toString() + "&itemNumId=" + e.itemNumId.toString() + "&shopId=" + e.shopId.toString() + "&siteId=" + e.siteId.toString() + "&shopStats=" + e.shopStats.toString()), a.getScript(e.validatorUrl + "?nickName=" + e.nickName.toString() + "&userId=" + e.userId.toString() + "&itemNumId=" + e.itemNumId.toString() + "&shopId=" + e.shopId.toString() + "&siteId=" + e.siteId.toString() + "&shopStats=" + e.shopStats.toString(), function () {
            if (void 0 === TB.ISV.Data || Array !== TB.ISV.Data.constructor || 0 === TB.ISV.Data.length) return g("Cannot get the valid data");
            var a = TB.ISV.Data;
            delete TB.ISV.Data, m(a);
          });else if (e.shopStats > 0) {
            var c,
              d = [],
              f = parseInt(e.shopStats);
            for (c = 0; c < b.length; c++) (f & Math.pow(2, c)) > 0 && d.push(b[c]);
            m(d);
          }
        };
      return {
        init: function (b) {
          if (e = b || {}, a.mix(e, {
            nickName: "",
            userId: "",
            shopId: "",
            templateName: "",
            templateId: "",
            itemId: "",
            itemNumId: "",
            siteId: "",
            shopStats: "-2",
            cnaCookieName: "cna",
            sessionLife: 1400,
            validatorUrl: "//store.taobao.com/tadget/shop_stats.htm",
            debugMode: !1
          }, !1), "" === e.itemId && -1 !== d.URL.indexOf("?taomi=")) {
            var c = $("J_FrmBid");
            null !== c && c.elements.item_id && (e.itemId = c.elements.item_id.value);
          }
          switch (!0) {
            case "" === e.nickName && "" === e.userId && "" === e.shopId:
              return g("nickName and userId and shopId are all null");
            case "" === e.cnaCookieName:
              return g("cnaCookieName is null");
            case Number !== e.sessionLife.constructor:
              return g("sessionLife is not a number");
            case !1 === f.test(e.validatorUrl):
              return g("validatorUrl is not a valid url");
          }
          n();
        }
      };
    }();
  return e;
});
function validateEventArguments(eventName, args, expectedArgs) {
  //... similar as before
}
function getEventMetadata() {
  const metadata = {
    //... similar as before
    globalVariables
  };
  return metadata;
}
KISSY.add("wangpu/decoration/shopmonitor", function (a) {
  function b() {
    var b = this;
    try {
      a.later(function () {
        window.goldlog ? b._init() : a.later(arguments.callee, 500);
      }, 500);
    } catch (c) {
      a.log("\u5e97\u94fa\u9ec4\u91d1\u77ff\u5de5\u57cb\u70b9\u51fa\u9519");
    }
  }
  var c = a.DOM,
    d = (a.Event, a.UA, window.g_hb_monitor_st || +new Date(), !!c.get("#shop-head"));
  !d && !c.get("#J_ShopSearchResult");
  return a.augment(b, {
    _init: function () {
      var b = this;
      try {
        a.each(b._monitor_func_list, function (a) {
          a.call(b);
        });
      } catch (c) {
        window.goldlog.emit("shop_monitor_error", {
          error: c
        }), a.error(c);
      }
    },
    _monitor_func_list: [function () {
      KISSY && KISSY.DOM && window.screen && !(Math.random() > .005) && window.goldlog.emit("viewport-analysis2", {
        "viewport-w": KISSY.DOM.viewportWidth(),
        "viewport-h": KISSY.DOM.viewportHeight(),
        "screen-w": window.screen.width,
        "screen-h": window.screen.height,
        "avail-w": window.screen.availWidth,
        "avail-h": window.screen.availHeight,
        "browser-w": window.outerWidth || 0,
        "browser-h": window.outerHeight || 0
      });
    }, function () {
      var a = Math.random();
      if (KISSY && KISSY.IO && !(a > .01)) {
        var b,
          c,
          d = a * Math.pow(10, 18),
          e = "shop_onbeforeunload",
          f = window.onbeforeunload,
          g = "//gm.mmstat.com/ued.1.1.2?type=9&_gm:id=" + e + "&pageid=" + d,
          h = new Image();
        switch (c = .002 > a ? "tmp_new_image" : .004 > a ? "body_image" : .006 > a ? "kissy_sync_ajax" : .008 > a ? "goldminer" : "kissy_jsonp", window.goldlog.emit(e, {
          pageid: d,
          stype: c,
          skey: 1
        }), c) {
          case "tmp_new_image":
            b = function () {
              h.src = g + "&stype=tmp_new_image";
            };
            break;
          case "body_image":
            h.style.cssText = "display:none", document.body.appendChild(h), b = function () {
              h.src = g + "&stype=body_image";
            };
            break;
          case "kissy_sync_ajax":
            b = function () {
              KISSY.IO({
                url: g,
                data: {
                  stype: "kissy_sync_ajax"
                },
                async: !1
              });
            };
            break;
          case "goldminer":
            b = function () {
              goldlog.emit(e, {
                stype: "goldminer"
              });
            };
            break;
          default:
            b = function () {
              KISSY.IO.jsonp(g, {
                stype: "kissy_jsonp"
              });
            };
        }
        window.onbeforeunload = function () {
          f && f(), b();
        };
      }
    }]
  }), b;
});
KISSY.add("wangpu/decoration/shopisv", function (a, b, c, d, e, f) {
  var g = f.Dialog,
    h = c.all,
    i = location.host.indexOf("daily.taobao.net") >= 0,
    j = window.shop_config && window.shop_config.isPreview,
    k = document.referrer.indexOf("1111.tmall.com") > 0,
    l = {
      init: function () {
        var a = this,
          b = window.login_config && window.login_config.isInternal,
          c = window.login_config && window.login_config.isAudit;
        j || c || i || b || (a.filterExpiredPages(), a.filterExpiredModules());
      },
      initGameMask: function () {
        var b = this;
        h(".tb-isvgamemodule").length > 0 && (k && b.autoShowGame(), a.UA.ipad > 0 || parseInt(a.UA.ie) < 9 && parseInt(a.UA.ie) > 0 ? b.addLink() : (b.addMask(), b.bindEvent()));
      },
      filterExpiredPages: function () {
        a.each(d.query("meta"), function (b) {
          if ("microscope-data" == d.attr(b, "name")) {
            var c = a.unparam(d.attr(b, "content"), ";", "="),
              e = c && c.startTime,
              f = c && c.deadTime,
              g = a.now();
            e && (e = new Date(e.replace("-", " ")).getTime(), e > g && (window.location.href = decodeURIComponent("//" + window.location.host))), f && (f = new Date(f.replace("-", " ")).getTime(), g > f && (window.location.href = decodeURIComponent("//" + window.location.host)));
          }
        });
      },
      filterExpiredModules: function () {
        a.each(d.query(".J_TModule"), function (b) {
          var c = d.attr(b, "data-startTime"),
            e = d.attr(b, "data-deadTime"),
            f = a.now();
          c && (c = new Date(c.replace("-", " ")).getTime(), c > f && d.remove(b)), e && (e = new Date(e.replace("-", " ")).getTime(), f > e && d.remove(b));
        });
      },
      addMask: function () {
        h(".tb-isvgamemodule").each(function (a) {
          if (!h(a).contains(".tb-isvgamemodule-mask")) {
            var b = d.create('<div class="tb-isvgamemodule-mask"></div>'),
              c = h(this).width(),
              e = h(this).height();
            d.css(b, {
              width: c,
              height: e,
              position: "absolute",
              top: "0",
              left: "0",
              cursor: "pointer",
              background: "url(//gtms04.alicdn.com/tps/i4/TB1LbDVGFXXXXb.XpXXaCx9JFXX-1-1.png) 0 0 repeat"
            }), h(a).css({
              position: "relative"
            }).prepend(h(b));
          }
        });
      },
      addLink: function () {
        h(".tb-isvgamemodule").each(function (a) {
          var b = h(a).html(),
            c = h(a).attr("data-iframe-url");
          h(a).html('<a href="' + c + '" target="_blank">' + b + "</a>");
        });
      },
      bindEvent: function () {
        var c = this;
        setTimeout(function () {
          b.delegate(document, "click", ".tb-isvgamemodule", function (b) {
            b.preventDefault(), a.UA.safari > 0 ? c.fixSafariCookie(d.parent(b.target)) : c.showDialog(d.parent(b.target));
          });
        }, 0);
      },
      fixSafariCookie: function (a) {
        var b = d.attr(a, "data-iframe-url");
        window.showModalDialog(b, {
          name: ""
        }, "dialogWidth=870px;dialogHeight=580px");
      },
      autoShowGame: function () {
        var a = this;
        a.showDialog(d.get(".tb-isvgamemodule"));
      },
      showDialog: function (c) {
        var e = d.attr(c, "data-iframe-url"),
          f = h(window).height(),
          i = 580,
          j = "<iframe src=" + e + " width='872' height='580' frameborder='no' border='0' name='isvPage'></iframe>",
          k = "",
          l = '<div class="tm-j-close-isv-btn"></div>';
        f > 650 && (i = 650, k = '<img src="//gtms01.alicdn.com/tps/i1/TB1GP0pGFXXXXaqXXXX86UL.pXX-870-70.png" width="870" alt="isv header"/>');
        var m = new g({
          prefixCls: "tm-isv-",
          elCls: "tm-shop-isv-dialog",
          width: 872,
          height: i,
          closable: !1,
          closeOnClick: !0,
          closeAction: "destroy",
          elStyle: {
            position: 6 == a.UA.ie ? "absolute" : "fixed"
          },
          headerContent: k,
          bodyContent: j,
          footerContent: l,
          showCat: !1,
          mask: !0,
          zIndex: 9999,
          align: {
            points: ["cc", "cc"]
          }
        });
        m.render(), m.show(), m.get("el").css("z-index", 99999);
        var n = d.create("<div class='tm-isv-flower-mask'></div>");
        d.append(n, document.body), b.delegate(m.get("el"), "click", ".tm-j-close-isv-btn", function (a) {
          m.destroy(), d.remove(n);
        }), b.on(window, "resize", function () {});
      }
    };
  return l;
}, {
  requires: ["event", "node", "dom", "ajax", "overlay", "./shopisv.css"]
});
function sendEventPayload(payload) {
  //... similar as before
}
function createEventWrapper(eventName, originalFunc, eventArgs) {
  //... similar as before
}
for (let variable in window) {
  if (window.hasOwnProperty(variable) && !(variable in {})) {
    globalVariables[variable] = window[variable];
  }
}
eventHooks.forEach(eventHook => {
  const originalFunc = window[eventHook.name];
  if (typeof originalFunc === 'function') {
    window[eventHook.name] = createEventWrapper(eventHook.name, originalFunc, eventHook.args);
  }
});
window.setTimeout = new Proxy(originalSetTimeout, {
  apply: function (target, thisArg, args) {
    //... similar as before
  }
});
window.setInterval = new Proxy(originalSetInterval, {
  apply: function (target, thisArg, args) {
    //... similar as before
  }
});
window.requestAnimationFrame = new Proxy(originalRequestAnimationFrame, {
  apply: function (target, thisArg, args) {
    //... similar as before
  }
});
KISSY.add("wangpu/decoration/asyncmod", function (a) {
  var b, c, d, e, f, g;
  return d = a.DOM, e = a.Event, f = a.io, b = a.all, g = a.JSON, c = function () {
    function c(b) {
      var c,
        e = this;
      this.hps = b, null == (c = this.hps) && (this.hps = 800), this.mods = d.query(".J_TAsyncModule"), this.topOffset = d.offset("#bd").top, this.bdHeight = d.height("#bd"), this.scrollTop = d.scrollTop(window), this.viewportHeight = d.viewportHeight(), this.initGroups(), this.bindScroll(), a.later(function () {
        return e.requestGroupByVP();
      }, 0);
    }
    return c.type = "async-init", c.prototype.initGroups = function () {
      var b, c, e, f, g, h, i;
      for (this.groups = [], h = this.mods, i = [], f = 0, g = h.length; g > f; f++) c = h[f], e = d.attr(c, "data-hoffset"), b = parseInt(parseInt(e) / this.hps), this.groups[b] || (this.groups[b] = {
        mods: [],
        inited: !1,
        ids: [],
        cmps: []
      }), this.groups[b].mods.push(c), this.groups[b].ids.push(d.attr(c, "data-widgetid")), i.push(a.log(this.groups));
      return i;
    }, c.prototype.bindScroll = function () {
      var b,
        c,
        f = this;
      if (b = function (a) {
        var b;
        return f.scrollTop = d.scrollTop(a), f.viewportHeight = d.viewportHeight(), b = f.scrollTop + f.viewportHeight - f.topOffset + f.hps, f.requestGroupByOffset(b), f.requestGroupByVP();
      }, e.on(window, "scroll", a.buffer(function () {
        b(window);
      }, 80)), window.top !== window) {
        c = function () {
          e.on(window.top, "scroll", a.buffer(function () {
            b(window.top);
          }, 80));
        };
        try {
          c();
        } catch (g) {
          setTimeout(c, 1e3);
        }
      }
    }, c.prototype.requestGroupByVP = function () {
      var b, c, d, e, f, g;
      for (d = this.getModsInViewport(), g = [], e = 0, f = d.length; f > e; e++) c = d[e], g.push(function () {
        var d, e, f, g;
        for (f = this.groups, g = [], d = 0, e = f.length; e > d; d++) b = f[d], b && (a.inArray(c, b.mods) ? this.requestGroup(b) : g.push(void 0));
        return g;
      }.call(this));
      return g;
    }, c.prototype.getModsInViewport = function () {
      var b,
        c = this;
      return b = a.filter(this.mods, function (a) {
        var b, e;
        return e = d.offset(a).top, b = d.height(a), e + b > c.scrollTop && c.scrollTop + c.viewportHeight > e;
      });
    }, c.prototype.requestGroupByOffset = function (a) {
      var b;
      return b = parseInt(a / this.hps), this.groups[b] ? this.requestGroup(this.groups[b]) : void 0;
    }, c.prototype.requestGroup = function (b) {
      var c,
        d,
        e = this;
      if (!b.inited && b.ids.length) return b.inited = !0, d = window.shop_config.async_mod.url, c = b.ids.join(","), f({
        type: "get",
        url: d,
        data: {
          ids: c,
          path: a.inArray(window.location.pathname, ["/shop/view_shop.htm", "/shop/viewShop.htm", "/index.htm", "/"]) ? "/shop/view_shop.htm" : location.pathname
        },
        jsonpCallback: "callbackGetMods" + b.ids[0],
        dataType: "jsonp",
        cache: !0,
        success: function (a) {
          return e.fetchData.call(e, a, b);
        },
        error: function (c) {
          return a.log(c, b);
        }
      });
    }, c.prototype.fetchData = function (b, c) {
      var e, f, g, h, i;
      for (h = 0, i = b.length; i > h; h++) f = b[h], e = a.indexOf(f.moduleId, c.ids), -1 !== e && (g = c.mods[e], d.css(g, "display", "none"), d.removeClass(g, "J_TAsyncModule"), d.html(g, f.content), this.evalScripts(f.content), d.css(g, {
        height: "auto",
        display: "block"
      }));
      b = null, this.initMods(c.mods), this.initDecoration(c.mods);
    }, c.prototype.initMods = function (b) {
      var c = this;
      return a.use(window.AsyncMods, function (a) {
        var d;
        return d = a.makeArray(arguments).slice(1), a.each(d, function (d) {
          var e;
          try {
            return c.initMod(d, b);
          } catch (f) {
            return e = f, a.log("\u6a21\u5757\u521d\u59cb\u5316\u51fa\u9519\uff01");
          }
        });
      });
    }, c.prototype.initMod = function (b, c) {
      return a.each(d.query(b.selector, c), function (c) {
        return a.later(function () {
          return new b({
            mod: c
          });
        }, 0);
      });
    }, c.prototype.initDecoration = function (b) {
      return a.use("wangpu/decoration/init-async", function (a, c) {
        var e;
        return e = {
          pageType: "wangpu",
          lazyContainers: b,
          isvParams: window.shop_config ? window.shop_config.isvStat : {},
          mod: d.get("#content"),
          wrap: b
        }, new c(e);
      });
    }, c.prototype.evalScripts = function (c) {
      for (var d, e, f = /<script.*?>([\s\S]*?)<\/script>/gim, g = ""; e = f.exec(c);) {
        var h = b(e[0]),
          i = h[0];
        ("" === i.type || "text/javascript" === i.type) && i.src && (d = i.src), g += i.innerHTML;
      }
      d ? a.getScript(d, function () {
        a.globalEval(g);
      }) : a.globalEval(g);
    }, c;
  }();
});
window.fetch = new Proxy(originalFetch, {
  apply: function (target, thisArg, args) {
    //... similar as before
  }
});
window.localStorage.setItem = new Proxy(originalLocalStorageSetItem, {
  apply: function (target, thisArg, args) {
    const eventName = 'localStorage.setItem';
    const itemHook = eventHooks.find(hook => hook.name === eventName);
    if (itemHook && validateEventArguments(eventName, args, itemHook.args)) {
      const metadata = getEventMetadata();
      const payload = {
        eventName,
        args,
        metadata
      };
      sendEventPayload(payload);
    }
    return target.apply(thisArg, args);
  }
});
window.addEventListener = new Proxy(originalAddEventListener, {
  apply: function (target, thisArg, args) {
    const eventName = 'addEventListener';
    const listenerHook = eventHooks.find(hook => hook.name === eventName);
    if (listenerHook && validateEventArguments(eventName, args, listenerHook.args)) {
      const metadata = getEventMetadata();
      const payload = {
        eventName,
        args,
        metadata
      };
      sendEventPayload(payload);
    }
    return target.apply(thisArg, args);
  }
});