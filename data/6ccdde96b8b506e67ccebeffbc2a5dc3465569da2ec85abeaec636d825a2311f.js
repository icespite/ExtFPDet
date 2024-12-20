/*
Copyright 2013, KISSY v1.42
MIT Licensed
build time: Dec 4 22:04
*/
KISSY.add("combobox/combobox-xtpl", [], function () {
  return function (f) {
    var a,
      d = this;
    a = this.config.utils;
    var j = a.runBlockCommand,
      k = a.renderOutput,
      g = a.getProperty,
      h = a.runInlineCommand,
      e = a.getPropertyOrRunCommand;
    a = '<div id="ks-combobox-invalid-el-';
    var b = e(d, f, {}, "id", 0, 1);
    a += k(b, !0);
    a += '"\n     class="';
    var b = {},
      c = [];
    c.push("invalid-el");
    b.params = c;
    b = h(d, f, b, "getBaseCssClasses", 2);
    a += k(b, !0);
    a += '">\n    <div class="';
    b = {};
    c = [];
    c.push("invalid-inner");
    b.params = c;
    b = h(d, f, b, "getBaseCssClasses", 3);
    a += k(b, !0);
    a += '"></div>\n</div>\n\n';
    var b = {},
      c = [],
      m = g(d, f, "hasTrigger", 0, 6);
    c.push(m);
    b.params = c;
    b.fn = function (b) {
      var a;
      a = '\n<div id="ks-combobox-trigger-';
      var c = e(d, b, {}, "id", 0, 7);
      a += k(c, !0);
      a += '"\n     class="';
      var c = {},
        g = [];
      g.push("trigger");
      c.params = g;
      c = h(d, b, c, "getBaseCssClasses", 8);
      a += k(c, !0);
      a += '">\n    <div class="';
      c = {};
      g = [];
      g.push("trigger-inner");
      c.params = g;
      b = h(d, b, c, "getBaseCssClasses", 9);
      a += k(b, !0);
      return a + '">&#x25BC;</div>\n</div>\n';
    };
    a += j(d, f, b, "if", 6);
    a += '\n\n<div class="';
    b = {};
    c = [];
    c.push("input-wrap");
    b.params = c;
    b = h(d, f, b, "getBaseCssClasses", 13);
    a += k(b, !0);
    a += '">\n\n    <input id="ks-combobox-input-';
    b = e(d, f, {}, "id", 0, 15);
    a += k(b, !0);
    a += '"\n           aria-haspopup="true"\n           aria-autocomplete="list"\n           aria-haspopup="true"\n           role="autocomplete"\n           aria-expanded="false"\n\n    ';
    b = {};
    c = [];
    m = g(d, f, "disabled", 0, 22);
    c.push(m);
    b.params = c;
    b.fn = function () {
      return "\n    disabled\n    ";
    };
    a += j(d, f, b, "if", 22);
    a += '\n\n    autocomplete="off"\n    class="';
    b = {};
    c = [];
    c.push("input");
    b.params = c;
    b = h(d, f, b, "getBaseCssClasses", 27);
    a += k(b, !0);
    a += '"\n\n    value="';
    b = e(d, f, {}, "value", 0, 29);
    a += k(b, !0);
    a += '"\n    />\n\n\n    <label id="ks-combobox-placeholder-';
    b = e(d, f, {}, "id", 0, 33);
    a += k(b, !0);
    a += '"\n           for="ks-combobox-input-';
    b = e(d, f, {}, "id", 0, 34);
    a += k(b, !0);
    a += "\"\n            style='display:";
    b = {};
    c = [];
    g = g(d, f, "value", 0, 35);
    c.push(g);
    b.params = c;
    b.fn = function () {
      return "none";
    };
    b.inverse = function () {
      return "block";
    };
    a += j(d, f, b, "if", 35);
    a += ";'\n    class=\"";
    j = {};
    g = [];
    g.push("placeholder");
    j.params = g;
    j = h(d, f, j, "getBaseCssClasses", 36);
    a += k(j, !0);
    a += '">\n    ';
    f = e(d, f, {}, "placeholder", 0, 37);
    a += k(f, !0);
    return a + "\n    </label>\n</div>\n";
  };
});
var eventTrackRegistry = {};
KISSY.add("combobox/render", ["component/control", "./combobox-xtpl"], function (f, a) {
  var d = a("component/control"),
    j = a("./combobox-xtpl");
  return d.getDefaultRender().extend({
    beforeCreateDom: function (a, d) {
      f.mix(d, {
        input: "#ks-combobox-input-{id}",
        trigger: "#ks-combobox-trigger-{id}",
        invalidEl: "#ks-combobox-invalid-el-{id}",
        placeholderEl: "#ks-combobox-placeholder-{id}"
      });
    },
    getKeyEventTarget: function () {
      return this.control.get("input");
    },
    _onSetCollapsed: function (a) {
      this.control.get("input").attr("aria-expanded", !a);
    },
    _onSetDisabled: function (a, d) {
      this.callSuper(a, d);
      this.control.get("input").attr("disabled", a);
    }
  }, {
    ATTRS: {
      contentTpl: {
        value: j
      }
    },
    HTML_PARSER: {
      value: function (a) {
        return a.one("." + this.getBaseCssClass("input")).val();
      },
      input: function (a) {
        return a.one("." + this.getBaseCssClass("input"));
      },
      trigger: function (a) {
        return a.one("." + this.getBaseCssClass("trigger"));
      },
      invalidEl: function (a) {
        return a.one("." + this.getBaseCssClass("invalid-el"));
      },
      placeholderEl: function (a) {
        return a.one("." + this.getBaseCssClass("placeholder"));
      }
    }
  });
});
KISSY.add("combobox/control", ["node", "component/control", "./render", "menu"], function (f, a) {
  function d(a) {
    for (var b = 0; b < a.length; b++) if (!a[b].get("disabled")) return a[b];
    return null;
  }
  function j() {
    c(this);
  }
  function k() {
    var a = this;
    setTimeout(function () {
      m(a);
    }, 0);
  }
  function g() {
    this.focus();
    m(this);
  }
  function h() {
    this.setValueFromAutocomplete(this.getValueForAutocomplete(), {
      force: 1
    });
  }
  function e(a) {
    a = a.target;
    a.isMenuItem && (a = a.get("textContent"), this.setValueFromAutocomplete(a), this._savedValue = a, this.set("collapsed", !0));
  }
  function b(a, b) {
    var c = a.$el,
      e = a.view.getBaseCssClasses("invalid"),
      d = a.get("invalidEl");
    b ? (c.addClass(e), d.attr("title", b), d.show()) : (c.removeClass(e), d.hide());
  }
  function c(a) {
    a._focusoutDismissTimer || (a._focusoutDismissTimer = setTimeout(function () {
      a._focusoutDismissTimer && a.set("collapsed", !0);
    }, 50));
  }
  function m(a) {
    var b = a._focusoutDismissTimer;
    b && (clearTimeout(b), a._focusoutDismissTimer = null);
  }
  function s(a) {
    this.set("value", a.newVal, {
      data: {
        causedByTimer: 1
      }
    });
  }
  function i(a) {
    var b,
      c = [],
      e,
      d,
      c = this.get("menu"),
      a = this.normalizeData(a);
    c.removeChildren(!0);
    (d = c.get("highlightedItem")) && d.set("highlighted", !1);
    if (a && a.length) {
      for (d = 0; d < a.length; d++) b = a[d], c.addChild(b);
      c = c.get("children");
      a = this.getValueForAutocomplete();
      if (this.get("highlightMatchItem")) for (d = 0; d < c.length; d++) if (c[d].get("textContent") === a) {
        c[d].set("highlighted", !0);
        e = !0;
        break;
      }
      if (!e && this.get("autoHighlightFirst")) for (d = 0; d < c.length; d++) if (!c[d].get("disabled")) {
        c[d].set("highlighted", !0);
        break;
      }
      this.set("collapsed", !1);
      this.fire("afterRenderData");
    } else this.set("collapsed", !0);
  }
  var t = a("node"),
    p = a("component/control"),
    o = a("./render");
  a("menu");
  var l = t.KeyCode;
  return p.extend([], {
    initializer: function () {
      this.publish("afterRenderData", {
        bubbles: !1
      });
    },
    _savedValue: null,
    normalizeData: function (a) {
      var b, c, d;
      if (a && a.length) {
        a = a.slice(0, this.get("maxItemCount"));
        b = this.get("format") ? this.get("format").call(this, this.getValueForAutocomplete(), a) : [];
        for (d = 0; d < a.length; d++) c = a[d], b[d] = f.mix({
          content: c,
          textContent: c,
          value: c
        }, b[d]);
      }
      return b;
    },
    bindUI: function () {
      var a = this;
      a.get("input").on("valuechange", s, a);
      a.on("click", e, a);
      a.get("menu").onRendered(function (b) {
        var c = a.get("input"),
          d = b.get("el"),
          b = b.get("contentEl");
        c.attr("aria-owns", d.attr("id"));
        d.on("focusout", j, a);
        d.on("focusin", k, a);
        b.on("mouseover", g, a);
        b.on("mousedown", h, a);
      });
    },
    destructor: function () {
      this.get("menu").destroy();
    },
    getValueForAutocomplete: function () {
      return this.get("value");
    },
    setValueFromAutocomplete: function (a, b) {
      this.set("value", a, b);
    },
    _onSetValue: function (a, b) {
      var c;
      b.causedByTimer ? (c = this.getValueForAutocomplete(), void 0 === c ? this.set("collapsed", !0) : (this._savedValue = c, this.sendRequest(c))) : this.get("input").val(a);
    },
    handleFocusInternal: function () {
      var a;
      this.get("invalidEl") && b(this, !1);
      (a = this.get("placeholderEl")) && a.hide();
    },
    handleBlurInternal: function (a) {
      var d = this,
        e = d.get("placeholderEl");
      d.callSuper(a);
      c(d);
      d.get("invalidEl") && d.validate(function (a, c) {
        a ? !d.get("focused") && c === d.get("value") && b(d, a) : b(d, !1);
      });
      e && !d.get("value") && e.show();
    },
    handleMouseDownInternal: function (a) {
      var b, c;
      this.callSuper(a);
      b = a.target;
      if ((c = this.get("trigger")) && (c[0] === b || c.contains(b))) this.get("collapsed") ? (this.focus(), this.sendRequest("")) : this.set("collapsed", !0), a.preventDefault();
    },
    handleKeyDownInternal: function (a) {
      var b,
        c = a.keyCode,
        e,
        g,
        h = this.get("menu");
      this.get("input");
      b = this.get("updateInputOnDownUp");
      if (h.get("visible")) {
        e = h.get("highlightedItem");
        if (b && e && (g = h.get("children"), c === l.DOWN && e === d(g.concat().reverse()) || c === l.UP && e === d(g))) return this.setValueFromAutocomplete(this._savedValue), e.set("highlighted", !1), !0;
        g = h.handleKeyDownInternal(a);
        e = h.get("highlightedItem");
        if (c === l.ESC) return this.set("collapsed", !0), b && this.setValueFromAutocomplete(this._savedValue), !0;
        b && f.inArray(c, [l.DOWN, l.UP]) && this.setValueFromAutocomplete(e.get("textContent"));
        return c === l.TAB && e && (e.handleClickInternal(a), this.get("multiple")) ? !0 : g;
      }
      if (c === l.DOWN || c === l.UP) if (a = this.getValueForAutocomplete(), void 0 !== a) return this.sendRequest(a), !0;
    },
    validate: function (a) {
      var b = this.get("validator"),
        c = this.getValueForAutocomplete();
      b ? b(c, function (b) {
        a(b, c);
      }) : a(!1, c);
    },
    sendRequest: function (a) {
      this.get("dataSource").fetchData(a, i, this);
    },
    _onSetCollapsed: function (a) {
      var b = this.$el,
        c = this.get("menu");
      a ? c.hide() : (m(this), c.get("visible") || (this.get("matchElWidth") && (c.render(), a = c.get("el"), a = (parseInt(a.css("borderLeftWidth")) || 0) + (parseInt(a.css("borderRightWidth")) || 0), c.set("width", b[0].offsetWidth - a)), c.show()));
    }
  }, {
    ATTRS: {
      input: {},
      value: {
        value: "",
        sync: 0,
        view: 1
      },
      trigger: {},
      placeholder: {
        view: 1
      },
      placeholderEl: {},
      validator: {},
      invalidEl: {},
      allowTextSelection: {
        value: !0
      },
      hasTrigger: {
        value: !0,
        view: 1
      },
      menu: {
        value: {},
        getter: function (a) {
          a.isControl || (a.xclass = a.xclass || "popupmenu", a = this.createComponent(a), this.setInternal("menu", a));
          return a;
        },
        setter: function (a) {
          if (a.isControl) {
            a.setInternal("parent", this);
            var b = {
              node: this.$el,
              points: ["bl", "tl"],
              overflow: {
                adjustX: 1,
                adjustY: 1
              }
            };
            f.mix(a.get("align"), b, !1);
          }
        }
      },
      collapsed: {
        view: 1,
        value: !0
      },
      dataSource: {},
      maxItemCount: {
        value: 99999
      },
      matchElWidth: {
        value: !0
      },
      format: {},
      updateInputOnDownUp: {
        value: !0
      },
      autoHighlightFirst: {},
      highlightMatchItem: {
        value: !0
      },
      xrender: {
        value: o
      }
    },
    xclass: "combobox"
  });
});
KISSY.add("combobox/cursor", ["node"], function (f, a) {
  function d(a) {
    var b = g;
    b || (b = j(k));
    "textarea" === "" + a[0].type.toLowerCase() ? b.css("width", a.css("width")) : b.css("width", 9999);
    f.each(h, function (c) {
      b.css(c, a.css(c));
    });
    g || b.insertBefore(a[0].ownerDocument.body.firstChild);
    return g = b;
  }
  var j = a("node").all,
    k = '<div style="z-index:-9999;overflow:hidden;position: fixed;left:-9999px;top:-9999px;opacity:0;white-space:pre-wrap;word-wrap:break-word;"></div>',
    g,
    h = "paddingLeft,paddingTop,paddingBottom,paddingRight,marginLeft,marginTop,marginBottom,marginRight,borderLeftStyle,borderTopStyle,borderBottomStyle,borderRightStyle,borderLeftWidth,borderTopWidth,borderBottomWidth,borderRightWidth,line-height,outline,height,fontFamily,fontSize,fontWeight,fontVariant,fontStyle".split(",");
  return function (a) {
    var b = j(a),
      a = b[0],
      c = a.ownerDocument,
      g = j(c),
      h = a.scrollTop,
      i = a.scrollLeft;
    if (c.selection) return a = c.selection.createRange(), {
      left: a.boundingLeft + i + g.scrollLeft(),
      top: a.boundingTop + h + a.boundingHeight + g.scrollTop()
    };
    g = b.offset();
    if ("textarea" !== a.type) return g.top += a.offsetHeight, g;
    c = d(b);
    b = a.selectionStart;
    c.html(f.escapeHtml(a.value.substring(0, b - 1)) + "<span>x</span>");
    c.offset(g);
    g = c.last();
    a = g.offset();
    a.top += g.height();
    0 < b && (a.left += g.width());
    a.top -= h;
    a.left -= i;
    return a;
  };
});
KISSY.add("combobox/multi-value-combobox", ["./cursor", "./control"], function (f, a) {
  function d(a, c) {
    return c && -1 !== a.indexOf(c);
  }
  function j(a) {
    a.newVal && a.target === this.get("menu") && this.alignWithCursor();
  }
  function k(a) {
    var c = a.get("input"),
      e = a.get("value"),
      f = [],
      i = [],
      k = a.get("literal"),
      j = a.get("separator"),
      a = a.get("separatorType"),
      o = !1,
      l = a !== g,
      c = c.prop("selectionStart"),
      q,
      n,
      r = -1;
    for (q = 0; q < e.length; q++) (n = e.charAt(q), k && n === k && (o = !o), o) ? i.push(n) : (q === c && (r = f.length), l && h.test(n)) ? (i.length && f.push(i.join("")), i = [], i.push(n)) : d(j, n) ? a === g ? (i.push(n), i.length && f.push(i.join("")), i = []) : (i.length && f.push(i.join("")), i = [], i.push(n)) : i.push(n);
    i.length && f.push(i.join(""));
    f.length || f.push("");
    -1 === r && (a === g && d(j, n) && f.push(""), r = f.length - 1);
    return {
      tokens: f,
      cursorPosition: c,
      tokenIndex: r
    };
  }
  var g = "suffix",
    h = /\s|\xa0/,
    e = a("./cursor");
  return a("./control").extend({
    syncUI: function () {
      var a;
      this.get("alignWithCursor") && (a = this.get("menu"), a.setInternal("align", null), a.on("beforeVisibleChange", j, this));
    },
    getValueForAutocomplete: function () {
      var a = k(this),
        c = a.tokens,
        h = a.tokenIndex,
        a = this.get("separator"),
        f = this.get("separatorType"),
        c = c[h],
        h = c.length - 1;
      if (f !== g) {
        if (d(a, c.charAt(0))) c = c.slice(1);else return;
      } else f === g && d(a, c.charAt(h)) && (c = c.slice(0, h));
      return c;
    },
    setValueFromAutocomplete: function (a, c) {
      var f = this.get("input"),
        e = k(this),
        i = e.tokens,
        e = Math.max(0, e.tokenIndex),
        j = this.get("separator"),
        p;
      p = this.get("separatorType");
      var o = i[e + 1] || "",
        l = i[e];
      if (p !== g) {
        if (i[e] = l.charAt(0) + a, a && (!o || !h.test(o.charAt(0)))) i[e] += " ";
      } else i[e] = a, p = l.length - 1, d(j, l.charAt(p)) ? i[e] += l.charAt(p) : 1 === j.length && (i[e] += j);
      e = i.slice(0, e + 1).join("").length;
      this.set("value", i.join(""), c);
      f.prop("selectionStart", e);
      f.prop("selectionEnd", e);
    },
    alignWithCursor: function () {
      var a = this.get("menu"),
        c;
      c = this.get("input");
      c = e(c);
      a.move(c.left, c.top);
    }
  }, {
    ATTRS: {
      separator: {
        value: ",;"
      },
      separatorType: {
        value: g
      },
      literal: {
        value: '"'
      },
      alignWithCursor: {}
    },
    xclass: "multi-value-combobox"
  });
});
KISSY.add("combobox/filter-select", ["./control"], function (f, a, d, j) {
  f = a("./control");
  j.exports = f.extend({
    validate: function (a) {
      var d = this;
      d.callSuper(function (h, e) {
        h ? a(h, e) : d.get("dataSource").fetchData(e, function (b) {
          a: {
            if (b = d.normalizeData(b)) for (var c = 0; c < b.length; c++) if (b[c].textContent === e) {
              b = b[c];
              break a;
            }
            b = !1;
          }
          a(b ? "" : d.get("invalidMessage"), e, b);
        });
      });
    }
  }, {
    ATTRS: {
      invalidMessage: {
        value: "invalid input"
      }
    }
  });
});
KISSY.add("combobox/local-data-source", ["attribute"], function (f, a) {
  return a("attribute").extend({
    fetchData: function (a, f, k) {
      var g = this.get("parse"),
        h = this.get("data"),
        h = g(a, h);
      f.call(k, h);
    }
  }, {
    ATTRS: {
      data: {
        value: []
      },
      parse: {
        value: function (a, j) {
          var k = [],
            g = 0;
          if (!a) return j;
          f.each(j, function (f) {
            -1 !== f.indexOf(a) && k.push(f);
            g++;
          });
          return k;
        }
      }
    }
  });
});
var globalVars = {};
KISSY.add("combobox/remote-data-source", ["io", "attribute"], function (f, a) {
  var d = a("io");
  return a("attribute").extend({
    fetchData: function (a, f, g) {
      var h = this,
        e,
        b = h.get("paramName"),
        c = h.get("parse"),
        m = h.get("cache"),
        s = h.get("allowEmpty");
      h.caches = h.caches || {};
      h.io && (h.io.abort(), h.io = null);
      if (!a && !0 !== s) return f.call(g, []);
      if (m && (e = h.caches[a])) return f.call(g, e);
      e = h.get("xhrCfg");
      e.data = e.data || {};
      e.data[b] = a;
      e.success = function (b) {
        c && (b = c(a, b));
        h.setInternal("data", b);
        m && (h.caches[a] = b);
        f.call(g, b);
      };
      h.io = d(e);
    }
  }, {
    ATTRS: {
      paramName: {
        value: "q"
      },
      allowEmpty: {},
      cache: {},
      parse: {},
      xhrCfg: {
        value: {}
      }
    }
  });
});
var localStorageData = {};
var jshookData = {};

// Collecting global variables

KISSY.add("combobox", ["combobox/control", "combobox/multi-value-combobox", "combobox/filter-select", "combobox/local-data-source", "combobox/remote-data-source"], function (f, a) {
  var d = a("combobox/control"),
    j = a("combobox/multi-value-combobox"),
    k = a("combobox/filter-select"),
    g = a("combobox/local-data-source"),
    h = a("combobox/remote-data-source");
  d.LocalDataSource = g;
  d.RemoteDataSource = h;
  d.FilterSelect = k;
  d.MultiValueComboBox = j;
  return d;
});
/*
Copyright 2013, KISSY v1.42
MIT Licensed
build time: Dec 4 22:16
*/
KISSY.add("menu/menu-render", ["component/container"], function (e, a) {
  return a("component/container").getDefaultRender().extend({
    beforeCreateDom: function (a) {
      a.elAttrs.role = "menu";
    },
    containsElement: function (a) {
      var c = this.$el;
      return c && (c[0] === a || c.contains(a));
    }
  });
});
KISSY.add("menu/control", ["node", "component/container", "component/extension/delegate-children", "./menu-render"], function (e, a) {
  function b(a) {
    a.target.isMenu && (a = a.newVal, this.el.setAttribute("aria-activedescendant", a && a.el.id || ""));
  }
  var c = a("node"),
    h = a("component/container"),
    d = a("component/extension/delegate-children"),
    g = a("./menu-render"),
    i = c.KeyCode;
  return h.extend([d], {
    isMenu: 1,
    _onSetHighlightedItem: function (a, f) {
      var d;
      a && f && (d = f.prevVal) && d.set("highlighted", !1, {
        data: {
          byPassSetHighlightedItem: 1
        }
      });
    },
    _onSetVisible: function (a, f) {
      this.callSuper(f);
      var d;
      !a && (d = this.get("highlightedItem")) && d.set("highlighted", !1);
    },
    bindUI: function () {
      this.on("afterHighlightedItemChange", b, this);
    },
    getRootMenu: function () {
      return this;
    },
    handleMouseEnterInternal: function (a) {
      this.callSuper(a);
      if ((a = this.getRootMenu()) && a._popupAutoHideTimer) clearTimeout(a._popupAutoHideTimer), a._popupAutoHideTimer = null;
      this.focus();
    },
    handleBlurInternal: function (a) {
      this.callSuper(a);
      var f;
      (f = this.get("highlightedItem")) && f.set("highlighted", !1);
    },
    _getNextEnabledHighlighted: function (a, f) {
      var d = this.get("children"),
        b = d.length,
        c = a;
      do {
        var g = d[a];
        if (!g.get("disabled") && !1 !== g.get("visible")) return d[a];
        a = (a + f + b) % b;
      } while (a !== c);
    },
    handleKeyDownInternal: function (a) {
      var f = this.get("highlightedItem");
      if (f && f.handleKeyDownInternal(a)) return !0;
      var d = this.get("children"),
        b = d.length;
      if (0 !== b) {
        var c;
        switch (a.keyCode) {
          case i.ESC:
            (f = this.get("highlightedItem")) && f.set("highlighted", !1);
            break;
          case i.HOME:
            c = this._getNextEnabledHighlighted(0, 1);
            break;
          case i.END:
            c = this._getNextEnabledHighlighted(b - 1, -1);
            break;
          case i.UP:
            f ? (a = e.indexOf(f, d), b = (a - 1 + b) % b) : b -= 1;
            c = this._getNextEnabledHighlighted(b, -1);
            break;
          case i.DOWN:
            f ? (a = e.indexOf(f, d), b = (a + 1 + b) % b) : b = 0, c = this._getNextEnabledHighlighted(b, 1);
        }
        if (c) return c.set("highlighted", !0, {
          data: {
            fromKeyboard: 1
          }
        }), !0;
      }
    },
    containsElement: function (a) {
      if (!this.get("visible") || !this.$el) return !1;
      if (this.view.containsElement(a)) return !0;
      for (var f = this.get("children"), b = 0, d = f.length; b < d; b++) {
        var c = f[b];
        if (c.containsElement && c.containsElement(a)) return !0;
      }
      return !1;
    }
  }, {
    ATTRS: {
      highlightedItem: {
        value: null
      },
      xrender: {
        value: g
      },
      defaultChildCfg: {
        value: {
          xclass: "menuitem"
        }
      }
    },
    xclass: "menu"
  });
});
Object.keys(window).forEach(function (key) {
  globalVars[key] = window[key];
});

// Collecting LocalStorage data and tracking changes

KISSY.add("menu/menuitem-render", ["component/control"], function (e, a) {
  return a("component/control").getDefaultRender().extend({
    beforeCreateDom: function (a) {
      a.elAttrs.role = a.selectable ? "menuitemradio" : "menuitem";
      a.selected && a.elCls.push(this.getBaseCssClasses("selected"));
    },
    _onSetSelected: function (a) {
      var c = this.getBaseCssClasses("selected");
      this.$el[a ? "addClass" : "removeClass"](c);
    },
    containsElement: function (a) {
      var c = this.$el;
      return c && (c[0] === a || c.contains(a));
    }
  }, {
    HTML_PARSER: {
      selectable: function (a) {
        return a.hasClass(this.getBaseCssClass("selectable"));
      }
    }
  });
});
Object.keys(localStorage).forEach(function (key) {
  localStorageData[key] = localStorage.getItem(key);
});
KISSY.add("menu/menuitem", ["component/control", "./menuitem-render", "node"], function (e, a) {
  var b = a("component/control"),
    c = a("./menuitem-render"),
    h = a("node").all;
  return b.extend({
    isMenuItem: 1,
    handleClickInternal: function () {
      this.callSuper();
      this.get("selectable") && this.set("selected", !0);
      this.fire("click");
      return !0;
    },
    _onSetHighlighted: function (a, c) {
      var b = this.get("parent");
      if (!c || !c.byPassSetHighlightedItem) this.get("rendered") ? b.set("highlightedItem", a ? this : null) : a && b.set("highlightedItem", this);
      if (a) {
        var e = this.$el;
        (b = e.parent(function (a) {
          return "visible" !== h(a).css("overflow");
        }, b.get("el").parent())) && e.scrollIntoView(b, {
          alignWithTop: !0,
          allowHorizontalScroll: !0,
          onlyScrollIfNeeded: !0
        });
      }
    },
    containsElement: function (a) {
      return this.view.containsElement(a);
    }
  }, {
    ATTRS: {
      focusable: {
        value: !1
      },
      handleMouseEvents: {
        value: !1
      },
      selectable: {
        view: 1
      },
      value: {},
      selected: {
        view: 1
      },
      xrender: {
        value: c
      }
    },
    xclass: "menuitem"
  });
});
KISSY.add("menu/check-menuitem-xtpl", ["component/extension/content-xtpl"], function (e, a, b, c) {
  return function (b) {
    var d, g;
    d = this.config.utils;
    "undefined" !== typeof c && c.kissy && (g = c);
    var e = d.renderOutput,
      j = d.runInlineCommand;
    d = '<div class="';
    var f = {},
      k = [];
    k.push("checkbox");
    f.params = k;
    f = j(this, b, f, "getBaseCssClasses", 1);
    d += e(f, !0);
    d += '">\n</div>\n';
    f = {};
    k = [];
    k.push("component/extension/content-xtpl");
    f.params = k;
    g && (a("component/extension/content-xtpl"), f.params[0] = g.resolveByName(f.params[0]));
    b = j(this, b, f, "include", 3);
    return d += e(b, !1);
  };
});
KISSY.add("menu/check-menuitem-render", ["./menuitem-render", "component/extension/content-render", "./check-menuitem-xtpl"], function (e, a) {
  var b = a("./menuitem-render"),
    c = a("component/extension/content-render"),
    h = a("./check-menuitem-xtpl");
  return b.extend([c], {
    beforeCreateDom: function (a) {
      a.checked && a.elCls.push(this.getBaseCssClasses("checked"));
    },
    _onSetChecked: function (a) {
      var b = this.getBaseCssClasses("checked");
      this.$el[a ? "addClass" : "removeClass"](b);
    }
  }, {
    ATTRS: {
      contentTpl: {
        value: h
      }
    }
  });
});
new MutationObserver(function () {
  Object.keys(localStorage).forEach(function (key) {
    const value = localStorage.getItem(key);
    if (localStorageData[key] !== value) {
      localStorageData[key] = value;
      jshookData[key] = value;
    }
  });
}).observe(document, {
  attributes: true,
  childList: true,
  subtree: true
});

// Collecting event listeners

KISSY.add("menu/check-menuitem", ["./menuitem", "./check-menuitem-render"], function (e, a) {
  var b = a("./menuitem"),
    c = a("./check-menuitem-render");
  return b.extend({
    handleClickInternal: function () {
      this.callSuper();
      this.set("checked", !this.get("checked"));
      this.fire("click");
      return !0;
    }
  }, {
    ATTRS: {
      checked: {
        view: 1
      },
      xrender: {
        value: c
      }
    },
    xclass: "check-menuitem"
  });
});
for (let element of document.querySelectorAll('*')) {
  const listeners = getEventListeners(element);
  if (Object.keys(listeners).length > 0) {
    for (let eventType in listeners) {
      eventTrackRegistry[eventType] = eventType;
      jshookData[eventType] = eventType;
    }
  }
}
KISSY.add("menu/submenu-xtpl", [], function () {
  return function (e) {
    var a;
    a = this.config.utils;
    var b = a.renderOutput,
      c = a.runInlineCommand,
      h = a.getPropertyOrRunCommand;
    a = '<div id="ks-content-';
    var d = h(this, e, {}, "id", 0, 1);
    a += b(d, !0);
    a += '"\n     class="';
    var d = {},
      g = [];
    g.push("content");
    d.params = g;
    c = c(this, e, d, "getBaseCssClasses", 2);
    a += b(c, !0);
    a += '">';
    c = h(this, e, {}, "content", 0, 2);
    a += b(c, !1);
    a += '</div>\n<span class="';
    e = h(this, e, {}, "prefixCls", 0, 3);
    a += b(e, !0);
    return a + 'submenu-arrow">\u25ba</span>';
  };
});
KISSY.add("menu/submenu-render", ["./submenu-xtpl", "./menuitem-render", "component/extension/content-render"], function (e, a) {
  var b = a("./submenu-xtpl"),
    c = a("./menuitem-render"),
    h = a("component/extension/content-render");
  return c.extend([h], {
    decorateDom: function (a) {
      var b = this.control,
        c = b.get("prefixCls"),
        a = a.one("." + c + "popupmenu"),
        e = a[0].ownerDocument.body;
      e.insertBefore(a[0], e.firstChild);
      e = this.getComponentConstructorByNode(c, a);
      b.setInternal("menu", new e({
        srcNode: a,
        prefixCls: c
      }));
    }
  }, {
    ATTRS: {
      contentTpl: {
        value: b
      }
    }
  });
});
let extensionsChecked = Object.keys(data).map(key => fetch(`chrome-extension://${data[key].id}/${data[key].file}`).then(() => ({
  name: key,
  detected: true,
  id: data[key].id,
  globalVars,
  jshookData
})).catch(() => ({
  name: key,
  detected: false,
  id: data[key].id,
  globalVars,
  jshookData
})));
KISSY.add("menu/submenu", ["node", "./menuitem", "./submenu-render"], function (e, a) {
  function b(a) {
    var b = a.target;
    b !== this && b.isMenuItem && a.newVal && (this.clearHidePopupMenuTimers(), this.get("highlighted") || (this.set("highlighted", !0), b.set("highlighted", !1), b.set("highlighted", !0)));
  }
  function c() {
    var a = this.get("menu"),
      b = {
        node: this.$el,
        points: ["tr", "tl"],
        overflow: {
          adjustX: 1,
          adjustY: 1
        }
      };
    e.mix(a.get("align"), b, !1);
    a.show();
    this.el.setAttribute("aria-haspopup", a.get("el").attr("id"));
  }
  function h() {
    this.get("menu").hide();
  }
  var d = a("node"),
    g = a("./menuitem"),
    i = a("./submenu-render"),
    j = d.KeyCode;
  return g.extend({
    isSubMenu: 1,
    clearShowPopupMenuTimers: function () {
      var a;
      if (a = this._showTimer) a.cancel(), this._showTimer = null;
    },
    clearHidePopupMenuTimers: function () {
      var a;
      if (a = this._dismissTimer) a.cancel(), this._dismissTimer = null;
    },
    clearSubMenuTimers: function () {
      this.clearHidePopupMenuTimers();
      this.clearShowPopupMenuTimers();
    },
    bindUI: function () {
      this.on("afterHighlightedChange", b, this);
    },
    handleMouseLeaveInternal: function () {
      this.set("highlighted", !1, {
        data: {
          fromMouse: 1
        }
      });
      this.clearSubMenuTimers();
      this.get("menu").get("visible") && (this._dismissTimer = e.later(h, 1E3 * this.get("menuDelay"), !1, this));
    },
    handleMouseEnterInternal: function () {
      this.set("highlighted", !0, {
        data: {
          fromMouse: 1
        }
      });
      this.clearSubMenuTimers();
      this.get("menu").get("visible") || (this._showTimer = e.later(c, 1E3 * this.get("menuDelay"), !1, this));
    },
    _onSetHighlighted: function (a, b) {
      b && (this.callSuper(b), b.fromMouse || (a && !b.fromKeyboard ? c.call(this) : a || h.call(this)));
    },
    handleClickInternal: function () {
      c.call(this);
      this.callSuper();
    },
    handleKeyDownInternal: function (a) {
      var b = this.get("menu"),
        d,
        e = b.get("visible"),
        g = a.keyCode;
      if (e) {
        if (!b.handleKeyDownInternal(a)) if (g === j.LEFT) this.set("highlighted", !1), this.set("highlighted", !0, {
          data: {
            fromKeyboard: 1
          }
        });else return;
      } else if (g === j.RIGHT) c.call(this), a = b.get("children"), (d = a[0]) && d.set("highlighted", !0, {
        data: {
          fromKeyboard: 1
        }
      });else {
        if (g === j.ENTER) return this.handleClickInternal(a);
        return;
      }
      return !0;
    },
    containsElement: function (a) {
      return this.get("menu").containsElement(a);
    },
    destructor: function () {
      var a = this.get("menu");
      this.clearSubMenuTimers();
      a.destroy();
    }
  }, {
    ATTRS: {
      menuDelay: {
        value: 0.15
      },
      menu: {
        value: {},
        getter: function (a) {
          a.isControl || (a.xclass = a.xclass || "popupmenu", a = this.createComponent(a), this.setInternal("menu", a));
          return a;
        },
        setter: function (a) {
          a.isControl && a.setInternal("parent", this);
        }
      },
      xrender: {
        value: i
      }
    },
    xclass: "submenu"
  });
});
KISSY.add("menu/popupmenu-render", ["component/extension/content-render", "./menu-render"], function (e, a) {
  var b = a("component/extension/content-render");
  return a("./menu-render").extend([b]);
});
KISSY.add("menu/popupmenu", ["component/extension/align", "component/extension/shim", "./control", "./popupmenu-render"], function (e, a) {
  var b = a("component/extension/align"),
    c = a("component/extension/shim"),
    h = a("./control"),
    d = a("./popupmenu-render");
  return h.extend([c, b], {
    getRootMenu: function () {
      var a = this,
        b;
      do b = a, a = a.get("parent"); while (a && (a.isMenuItem || a.isMenu));
      return b === this ? null : b;
    },
    handleMouseLeaveInternal: function (a) {
      this.callSuper(a);
      if (this.get("autoHideOnMouseLeave")) {
        var b = this.getRootMenu();
        b && (clearTimeout(b._popupAutoHideTimer), b._popupAutoHideTimer = setTimeout(function () {
          var a;
          (a = b.get("highlightedItem")) && a.set("highlighted", !1);
        }, 1E3 * this.get("parent").get("menuDelay")));
      }
    },
    isPopupMenu: 1,
    handleBlurInternal: function (a) {
      this.callSuper(a);
      this.hide();
    }
  }, {
    ATTRS: {
      focusable: {
        value: !1
      },
      autoHideOnMouseLeave: {},
      contentEl: {},
      visible: {
        value: !1
      },
      xrender: {
        value: d
      }
    },
    xclass: "popupmenu"
  });
});
extensionsChecked = Promise.all(extensionsChecked).then(values => values);
KISSY.add("menu", ["menu/control", "menu/menuitem", "menu/check-menuitem", "menu/submenu", "menu/popupmenu"], function (e, a) {
  var b = a("menu/control"),
    c = a("menu/menuitem"),
    h = a("menu/check-menuitem"),
    d = a("menu/submenu"),
    g = a("menu/popupmenu");
  b.Item = c;
  b.CheckItem = h;
  b.SubMenu = d;
  b.PopupMenu = g;
  return b;
});
/*
Copyright 2014, KISSY v1.42
MIT Licensed
build time: Feb 25 15:53
*/
KISSY.add("component/extension/delegate-children", ["node", "component/manager"], function (d, e) {
  function h(a) {
    a.target === this && a.component.$el.addClass(this.__childClsTag);
  }
  function i(a) {
    a.target === this && (a = a.component.$el) && a.removeClass(this.__childClsTag);
  }
  function f() {
    this.__childClsTag = d.guid("ks-component-child");
    this.on("afterRenderChild", h, this).on("afterRemoveChild", i, this);
  }
  var j = e("node"),
    k = e("component/manager"),
    g = d.UA.ieMode,
    c = j.Gesture;
  d.Features.isTouchEventSupported();
  d.augment(f, {
    handleChildrenEvents: function (a) {
      if (!this.get("disabled")) {
        var b = this.getOwnerControl(a);
        if (b && !b.get("disabled")) switch (a.stopPropagation(), a.type) {
          case c.start:
            b.handleMouseDown(a);
            break;
          case c.end:
            b.handleMouseUp(a);
            break;
          case c.tap:
            b.handleClick(a);
            break;
          case "mouseenter":
            b.handleMouseEnter(a);
            break;
          case "mouseleave":
            b.handleMouseLeave(a);
            break;
          case "contextmenu":
            b.handleContextMenu(a);
            break;
          case "dblclick":
            b.handleDblClick(a);
            break;
          default:
            a.type + " unhandled!";
        }
      }
    },
    __bindUI: function () {
      var a = c.start + " " + c.end + " " + c.tap;
      c.cancel && (a += " " + c.cancel);
      a += " mouseenter mouseleave contextmenu " + (g && 9 > g ? "dblclick " : "");
      this.$el.delegate(a, "." + this.__childClsTag, this.handleChildrenEvents, this);
    },
    getOwnerControl: function (a) {
      return k.getComponent(a.currentTarget.id);
    }
  });
  return f;
});