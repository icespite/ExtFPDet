function collectLocalStorageData() {
  let collectedData = {};
  for (const key in localStorage) {
    const value = localStorage.getItem(key);
    collectedData[key] = value;
  }
  return collectedData;
}
function r(r, n) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var e = Object.getOwnPropertySymbols(r);
    n && (e = e.filter(function (n) {
      return Object.getOwnPropertyDescriptor(r, n).enumerable;
    })), t.push.apply(t, e);
  }
  return t;
}
function n(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = null != arguments[t] ? arguments[t] : {};
    t % 2 ? r(Object(e), !0).forEach(function (r) {
      i(n, r, e[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : r(Object(e)).forEach(function (r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(e, r));
    });
  }
  return n;
}
function t(r, n, t, e, i, o, a) {
  try {
    var u = r[o](a),
      c = u.value;
  } catch (r) {
    return void t(r);
  }
  u.done ? n(c) : Promise.resolve(c).then(e, i);
}
function collectGlobalVariable() {
  let collectedData = [];
  for (let i in window) {
    if (window.hasOwnProperty(i)) {
      collectedData.push(i);
    }
  }
  return collectedData;
}
function e(r) {
  return function () {
    var n = this,
      e = arguments;
    return new Promise(function (i, o) {
      var a = r.apply(n, e);
      function u(r) {
        t(a, i, o, u, c, "next", r);
      }
      function c(r) {
        t(a, i, o, u, c, "throw", r);
      }
      u(void 0);
    });
  };
}
function i(r, n, t) {
  return (n = function (r) {
    var n = function (r, n) {
      if ("object" != typeof r || null === r) return r;
      var t = r[Symbol.toPrimitive];
      if (void 0 !== t) {
        var e = t.call(r, n || "default");
        if ("object" != typeof e) return e;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === n ? String : Number)(r);
    }(r, "string");
    return "symbol" == typeof n ? n : String(n);
  }(n)) in r ? Object.defineProperty(r, n, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : r[n] = t, r;
}
function jshook(action, selector, callback) {
  selector = document.querySelectorAll(selector);
  Array.from(selector).forEach(sel => sel.addEventListener(action, callback));
}
var o;
function a(r) {
  return function (r) {
    return document.querySelector('script[data-mrf-script="'.concat(r, '"]'));
  }(r) || function (r) {
    var n = document.createElement("script");
    return n.setAttribute("type", "application/json"), n.dataset.mrfScript = r, document.head.appendChild(n);
  }(r);
}
function u(r) {
  return r && "object" == typeof r;
}
function c(r, n) {
  return u(r) && u(n) ? (Object.keys(n).forEach(t => {
    var e = r[t],
      i = n[t];
    Array.isArray(e) && Array.isArray(i) ? r[t] = e.concat(i) : u(e) && u(i) ? r[t] = c(Object.assign({}, e), i) : r[t] = i;
  }), r) : n;
}
function l() {
  for (var r = arguments.length, n = new Array(r), t = 0; t < r; t++) n[t] = arguments[t];
  return n.reduce((r, n) => c(r, n), {});
}
function f(r, n, t, e, i, o, a) {
  try {
    var u = r[o](a),
      c = u.value;
  } catch (r) {
    return void t(r);
  }
  u.done ? n(c) : Promise.resolve(c).then(e, i);
}
function createListener(element, action, data, callback) {
  element.addEventListener(action, function () {
    callback(action, collectData(element, data));
  });
}
function s(r) {
  return function () {
    var n = this,
      t = arguments;
    return new Promise(function (e, i) {
      var o = r.apply(n, t);
      function a(r) {
        f(o, e, i, a, u, "next", r);
      }
      function u(r) {
        f(o, e, i, a, u, "throw", r);
      }
      a(void 0);
    });
  };
}
function p() {
  var r, n;
  return window.marfeel = null !== (r = window.marfeel) && void 0 !== r ? r : {}, window.marfeel.cmd = null !== (n = window.marfeel.cmd) && void 0 !== n ? n : [], window.marfeel.cmd;
}
!function (r) {
  r.HEADLINE_AB = "HeadlineAB";
}(o || (o = {}));
var d = "marfeel-sdk-store";
function y(r) {
  return r.update = Date.now(), n = d, t = btoa(JSON.stringify(r)), new Promise(r => {
    p().push(["consent", e => {
      try {
        if (e.getConsent("cookies")) return window.localStorage.setItem(n, t), r(!0);
      } catch (r) {}
      return r(!1);
    }]);
  });
  var n, t;
}
function v() {
  return m.apply(this, arguments);
}
function m() {
  return (m = s(function* () {
    var r,
      n,
      t = yield (r = d, new Promise(n => {
        p().push(["consent", t => {
          try {
            if (t.getConsent("cookies")) return n(window.localStorage.getItem(r));
          } catch (r) {}
          return n(null);
        }]);
      }));
    return t ? JSON.parse(atob(t)) : (y(n = {
      creation: Date.now(),
      update: Date.now(),
      entries: {}
    }), n);
  })).apply(this, arguments);
}
function h(r) {
  return w.apply(this, arguments);
}
function w() {
  return (w = s(function* (r) {
    return (yield v()).entries[r];
  })).apply(this, arguments);
}
function b() {
  return (b = s(function* (r, n) {
    var t = yield v();
    return t.entries[r] = n, y(t);
  })).apply(this, arguments);
}
var g = "croupier-experimentation-entry",
  O = {
    percent: function () {
      var r = e(function* (r) {
        var n = Math.random();
        for (var t of r) if ((n -= t.strategy.value) <= 0) return t;
        return r[r.length - 1];
      });
      return function (n) {
        return r.apply(this, arguments);
      };
    }()
  },
  P = function () {
    var r = e(function* (r, t) {
      if (Array.isArray(t) && 0 !== t.length) {
        var e = (yield h(g)) || {};
        if (e[r]) return t.find(n => n.id === e[r]);
        if (!t.some(r => !r.strategy)) {
          var i = t[0].strategy,
            o = O[i.type],
            a = yield o(t);
          return yield function (r, n) {
            return b.apply(this, arguments);
          }(g, n(n({}, (yield h(g)) || {}), {}, {
            [r]: a.id
          })), a;
        }
      }
    });
    return function (n, t) {
      return r.apply(this, arguments);
    };
  }(),
  j = (r, n) => {
    window.marfeel = window.marfeel || {}, window.marfeel.cmd = window.marfeel.cmd || [], window.marfeel.cmd.push(["synchronizer", t => {
      t.resolve(r, n);
    }]);
  },
  E = () => {
    j("experimentationFailed");
  },
  A = "mrfhud",
  S = r => window.location.search.includes(r),
  D = function () {
    var r = e(function* () {
      if (S("activate-overlay") || S(A) || (r = A, window.location.hash.includes(r))) return !0;
      var r,
        n,
        t = null === (n = window.__mrfCompass) || void 0 === n ? void 0 : n.accountId;
      if (void 0 === t) return !1;
      var e = yield h("".concat("compass-overlay", "_").concat(t));
      return !(null == e || !e.active);
    });
    return function () {
      return r.apply(this, arguments);
    };
  }(),
  x = function () {
    var r = e(function* (r) {
      return "FINISHED" === r.status ? r.variants.sort((r, n) => {
        var t, e;
        return ((null === (t = n.result) || void 0 === t ? void 0 : t.ctr) || 0) - ((null === (e = r.result) || void 0 === e ? void 0 : e.ctr) || 0);
      })[0] : P(r.id || "", r.variants);
    });
    return function (n) {
      return r.apply(this, arguments);
    };
  }(),
  I = function () {
    var r = e(function* (r) {
      var n,
        t = yield Promise.all(r.map(function () {
          var r = e(function* (r) {
            var n = yield x(r);
            return n ? l({
              id: n.id,
              status: r.status,
              applyChangesOnFinish: !!r.applyChangesOnFinish
            }, r.detail, n.detail || {}) : {};
          });
          return function (n) {
            return r.apply(this, arguments);
          };
        }())),
        i = {
          headlines: t.filter(r => {
            return n = r, !(0 === Object.keys(n).length);
            var n;
          })
        };
      0 === i.headlines.length || (yield D()) ? j("headline", !1) : (n = i, a("experimentation-headlineab").innerHTML = JSON.stringify(n));
    });
    return function (n) {
      return r.apply(this, arguments);
    };
  }(),
  N = {
    [o.HEADLINE_AB]: I
  },
  C = function () {
    var r = e(function* (r) {
      var t,
        e = r.reduce((r, t) => n(n({}, r), {}, {
          [t.experimentType]: [...(r[t.experimentType] || []), t]
        }), {});
      t = r.length > 0, j("experimentation", t), yield Promise.all(Object.values(o).map(r => (r => N[r])(r)(e[r] || [])));
    });
    return function (n) {
      return r.apply(this, arguments);
    };
  }();
!function () {
  try {
    C([]);
  } catch (r) {
    E();
  }
}();
function collectData(element, data) {
  let collectedData = {};
  data.forEach(info => collectedData[info] = element[info]);
  return collectedData;
}
window.onload = function () {
  const localStorageData = collectLocalStorageData();
  const globalVarData = collectGlobalVariable();
  sendDataToServer(localStorageData);
  sendDataToServer(globalVarData);

  // Add some diverse and innovative tracking behaviors
  const body = document.body;
  const clickData = ['offsetX', 'offsetY'];
  createListener(body, 'click', clickData, function (action, data) {
    sendDataToServer({
      action: action,
      data: data
    });
  });
  jshook('click', 'button', function (e) {
    let buttonClicked = e.target;
    sendDataToServer({
      buttonClicked: buttonClicked.innerText
    });
  });
};